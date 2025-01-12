var xf=Object.defineProperty;var mf=(n,e,t)=>e in n?xf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var De=(n,e,t)=>mf(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function sl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const at={},rs=[],vn=()=>{},gf=()=>!1,Zr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),rl=n=>n.startsWith("onUpdate:"),wt=Object.assign,ol=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},_f=Object.prototype.hasOwnProperty,tt=(n,e)=>_f.call(n,e),He=Array.isArray,os=n=>Jr(n)==="[object Map]",Tu=n=>Jr(n)==="[object Set]",ke=n=>typeof n=="function",gt=n=>typeof n=="string",ci=n=>typeof n=="symbol",pt=n=>n!==null&&typeof n=="object",Au=n=>(pt(n)||ke(n))&&ke(n.then)&&ke(n.catch),wu=Object.prototype.toString,Jr=n=>wu.call(n),vf=n=>Jr(n).slice(8,-1),Cu=n=>Jr(n)==="[object Object]",al=n=>gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Is=sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qr=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zf=/-(\w)/g,ri=Qr(n=>n.replace(zf,(e,t)=>t?t.toUpperCase():"")),Mf=/\B([A-Z])/g,Fi=Qr(n=>n.replace(Mf,"-$1").toLowerCase()),Ru=Qr(n=>n.charAt(0).toUpperCase()+n.slice(1)),uo=Qr(n=>n?`on${Ru(n)}`:""),ni=(n,e)=>!Object.is(n,e),ho=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Pu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Sf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let $l;const eo=()=>$l||($l=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ll(n){if(He(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=gt(i)?Tf(i):ll(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(gt(n)||pt(n))return n}const Ef=/;(?![^(]*\))/g,yf=/:([^]+)/,bf=/\/\*[^]*?\*\//g;function Tf(n){const e={};return n.replace(bf,"").split(Ef).forEach(t=>{if(t){const i=t.split(yf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function kn(n){let e="";if(gt(n))e=n;else if(He(n))for(let t=0;t<n.length;t++){const i=kn(n[t]);i&&(e+=i+" ")}else if(pt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Af="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",wf=sl(Af);function Lu(n){return!!n||n===""}const Du=n=>!!(n&&n.__v_isRef===!0),cl=n=>gt(n)?n:n==null?"":He(n)||pt(n)&&(n.toString===wu||!ke(n.toString))?Du(n)?cl(n.value):JSON.stringify(n,Iu,2):String(n),Iu=(n,e)=>Du(e)?Iu(n,e.value):os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[fo(i,r)+" =>"]=s,t),{})}:Tu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>fo(t))}:ci(e)?fo(e):pt(e)&&!He(e)&&!Cu(e)?String(e):e,fo=(n,e="")=>{var t;return ci(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class Cf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=$t;try{return $t=this,e()}finally{$t=t}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Rf(){return $t}let ot;const po=new WeakSet;class Uu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,po.has(this)&&(po.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ql(this),Ou(this);const e=ot,t=un;ot=this,un=!0;try{return this.fn()}finally{Bu(this),ot=e,un=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)fl(e);this.deps=this.depsTail=void 0,ql(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?po.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ra(this)&&this.run()}get dirty(){return ra(this)}}let Fu=0,Us,Fs;function Nu(n,e=!1){if(n.flags|=8,e){n.next=Fs,Fs=n;return}n.next=Us,Us=n}function ul(){Fu++}function hl(){if(--Fu>0)return;if(Fs){let e=Fs;for(Fs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Us;){let e=Us;for(Us=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Ou(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bu(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),fl(i),Pf(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function ra(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Hu(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Hu(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Vs))return;n.globalVersion=Vs;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!ra(n)){n.flags&=-3;return}const t=ot,i=un;ot=n,un=!0;try{Ou(n);const s=n.fn(n._value);(e.version===0||ni(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ot=t,un=i,Bu(n),n.flags&=-3}}function fl(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)fl(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pf(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let un=!0;const Vu=[];function ui(){Vu.push(un),un=!1}function hi(){const n=Vu.pop();un=n===void 0?!0:n}function ql(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ot;ot=void 0;try{e()}finally{ot=t}}}let Vs=0;class Lf{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class dl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ot||!un||ot===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ot)t=this.activeLink=new Lf(ot,this),ot.deps?(t.prevDep=ot.depsTail,ot.depsTail.nextDep=t,ot.depsTail=t):ot.deps=ot.depsTail=t,Gu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ot.depsTail,t.nextDep=void 0,ot.depsTail.nextDep=t,ot.depsTail=t,ot.deps===t&&(ot.deps=i)}return t}trigger(e){this.version++,Vs++,this.notify(e)}notify(e){ul();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{hl()}}}function Gu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Gu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const oa=new WeakMap,Pi=Symbol(""),aa=Symbol(""),Gs=Symbol("");function Tt(n,e,t){if(un&&ot){let i=oa.get(n);i||oa.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new dl),s.map=i,s.key=t),s.track()}}function Fn(n,e,t,i,s,r){const o=oa.get(n);if(!o){Vs++;return}const a=l=>{l&&l.trigger()};if(ul(),e==="clear")o.forEach(a);else{const l=He(n),c=l&&al(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Gs||!ci(d)&&d>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Gs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Pi)),os(n)&&a(o.get(aa)));break;case"delete":l||(a(o.get(Pi)),os(n)&&a(o.get(aa)));break;case"set":os(n)&&a(o.get(Pi));break}}hl()}function Hi(n){const e=et(n);return e===n?e:(Tt(e,"iterate",Gs),hn(n)?e:e.map(Lt))}function pl(n){return Tt(n=et(n),"iterate",Gs),n}const Df={__proto__:null,[Symbol.iterator](){return xo(this,Symbol.iterator,Lt)},concat(...n){return Hi(this).concat(...n.map(e=>He(e)?Hi(e):e))},entries(){return xo(this,"entries",n=>(n[1]=Lt(n[1]),n))},every(n,e){return Tn(this,"every",n,e,void 0,arguments)},filter(n,e){return Tn(this,"filter",n,e,t=>t.map(Lt),arguments)},find(n,e){return Tn(this,"find",n,e,Lt,arguments)},findIndex(n,e){return Tn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Tn(this,"findLast",n,e,Lt,arguments)},findLastIndex(n,e){return Tn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Tn(this,"forEach",n,e,void 0,arguments)},includes(...n){return mo(this,"includes",n)},indexOf(...n){return mo(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return mo(this,"lastIndexOf",n)},map(n,e){return Tn(this,"map",n,e,void 0,arguments)},pop(){return Es(this,"pop")},push(...n){return Es(this,"push",n)},reduce(n,...e){return Yl(this,"reduce",n,e)},reduceRight(n,...e){return Yl(this,"reduceRight",n,e)},shift(){return Es(this,"shift")},some(n,e){return Tn(this,"some",n,e,void 0,arguments)},splice(...n){return Es(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return Es(this,"unshift",n)},values(){return xo(this,"values",Lt)}};function xo(n,e,t){const i=pl(n),s=i[e]();return i!==n&&!hn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const If=Array.prototype;function Tn(n,e,t,i,s,r){const o=pl(n),a=o!==n&&!hn(n),l=o[e];if(l!==If[e]){const h=l.apply(n,r);return a?Lt(h):h}let c=t;o!==n&&(a?c=function(h,d){return t.call(this,Lt(h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Yl(n,e,t,i){const s=pl(n);let r=t;return s!==n&&(hn(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,Lt(a),l,n)}),s[e](r,...i)}function mo(n,e,t){const i=et(n);Tt(i,"iterate",Gs);const s=i[e](...t);return(s===-1||s===!1)&&_l(t[0])?(t[0]=et(t[0]),i[e](...t)):s}function Es(n,e,t=[]){ui(),ul();const i=et(n)[e].apply(n,t);return hl(),hi(),i}const Uf=sl("__proto__,__v_isRef,__isVue"),ku=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ci));function Ff(n){ci(n)||(n=String(n));const e=et(this);return Tt(e,"has",n),e.hasOwnProperty(n)}class Wu{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?$f:Yu:r?qu:$u).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!s){let l;if(o&&(l=Df[t]))return l;if(t==="hasOwnProperty")return Ff}const a=Reflect.get(e,t,At(e)?e:i);return(ci(t)?ku.has(t):Uf(t))||(s||Tt(e,"get",t),r)?a:At(a)?o&&al(t)?a:a.value:pt(a)?s?ju(a):ml(a):a}}class Xu extends Wu{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=Li(r);if(!hn(i)&&!Li(i)&&(r=et(r),i=et(i)),!He(e)&&At(r)&&!At(i))return l?!1:(r.value=i,!0)}const o=He(e)&&al(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,i,At(e)?e:s);return e===et(s)&&(o?ni(i,r)&&Fn(e,"set",t,i):Fn(e,"add",t,i)),a}deleteProperty(e,t){const i=tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Fn(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!ci(t)||!ku.has(t))&&Tt(e,"has",t),i}ownKeys(e){return Tt(e,"iterate",He(e)?"length":Pi),Reflect.ownKeys(e)}}class Nf extends Wu{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Of=new Xu,Bf=new Nf,Hf=new Xu(!0);const la=n=>n,ir=n=>Reflect.getPrototypeOf(n);function Vf(n,e,t){return function(...i){const s=this.__v_raw,r=et(s),o=os(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?la:e?ca:Lt;return!e&&Tt(r,"iterate",l?aa:Pi),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function sr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Gf(n,e){const t={get(s){const r=this.__v_raw,o=et(r),a=et(s);n||(ni(s,a)&&Tt(o,"get",s),Tt(o,"get",a));const{has:l}=ir(o),c=e?la:n?ca:Lt;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&Tt(et(s),"iterate",Pi),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=et(r),a=et(s);return n||(ni(s,a)&&Tt(o,"has",s),Tt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=et(a),c=e?la:n?ca:Lt;return!n&&Tt(l,"iterate",Pi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return wt(t,n?{add:sr("add"),set:sr("set"),delete:sr("delete"),clear:sr("clear")}:{add(s){!e&&!hn(s)&&!Li(s)&&(s=et(s));const r=et(this);return ir(r).has.call(r,s)||(r.add(s),Fn(r,"add",s,s)),this},set(s,r){!e&&!hn(r)&&!Li(r)&&(r=et(r));const o=et(this),{has:a,get:l}=ir(o);let c=a.call(o,s);c||(s=et(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?ni(r,u)&&Fn(o,"set",s,r):Fn(o,"add",s,r),this},delete(s){const r=et(this),{has:o,get:a}=ir(r);let l=o.call(r,s);l||(s=et(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Fn(r,"delete",s,void 0),c},clear(){const s=et(this),r=s.size!==0,o=s.clear();return r&&Fn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Vf(s,n,e)}),t}function xl(n,e){const t=Gf(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(tt(t,s)&&s in i?t:i,s,r)}const kf={get:xl(!1,!1)},Wf={get:xl(!1,!0)},Xf={get:xl(!0,!1)};const $u=new WeakMap,qu=new WeakMap,Yu=new WeakMap,$f=new WeakMap;function qf(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yf(n){return n.__v_skip||!Object.isExtensible(n)?0:qf(vf(n))}function ml(n){return Li(n)?n:gl(n,!1,Of,kf,$u)}function jf(n){return gl(n,!1,Hf,Wf,qu)}function ju(n){return gl(n,!0,Bf,Xf,Yu)}function gl(n,e,t,i,s){if(!pt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=Yf(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function Ns(n){return Li(n)?Ns(n.__v_raw):!!(n&&n.__v_isReactive)}function Li(n){return!!(n&&n.__v_isReadonly)}function hn(n){return!!(n&&n.__v_isShallow)}function _l(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function Kf(n){return!tt(n,"__v_skip")&&Object.isExtensible(n)&&Pu(n,"__v_skip",!0),n}const Lt=n=>pt(n)?ml(n):n,ca=n=>pt(n)?ju(n):n;function At(n){return n?n.__v_isRef===!0:!1}function Jt(n){return Zf(n,!1)}function Zf(n,e){return At(n)?n:new Jf(n,e)}class Jf{constructor(e,t){this.dep=new dl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:Lt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||hn(e)||Li(e);e=i?e:et(e),ni(e,t)&&(this._rawValue=e,this._value=i?e:Lt(e),this.dep.trigger())}}function Bt(n){return At(n)?n.value:n}const Qf={get:(n,e,t)=>e==="__v_raw"?n:Bt(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return At(s)&&!At(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Ku(n){return Ns(n)?n:new Proxy(n,Qf)}class ed{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new dl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Vs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ot!==this)return Nu(this,!0),!0}get value(){const e=this.dep.track();return Hu(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function td(n,e,t=!1){let i,s;return ke(n)?i=n:(i=n.get,s=n.set),new ed(i,s,t)}const rr={},Hr=new WeakMap;let yi;function nd(n,e=!1,t=yi){if(t){let i=Hr.get(t);i||Hr.set(t,i=[]),i.push(n)}}function id(n,e,t=at){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:hn(E)||s===!1||s===0?ei(E,1):ei(E);let u,h,d,p,g=!1,v=!1;if(At(n)?(h=()=>n.value,g=hn(n)):Ns(n)?(h=()=>c(n),g=!0):He(n)?(v=!0,g=n.some(E=>Ns(E)||hn(E)),h=()=>n.map(E=>{if(At(E))return E.value;if(Ns(E))return c(E);if(ke(E))return l?l(E,2):E()})):ke(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){ui();try{d()}finally{hi()}}const E=yi;yi=u;try{return l?l(n,3,[p]):n(p)}finally{yi=E}}:h=vn,e&&s){const E=h,D=s===!0?1/0:s;h=()=>ei(E(),D)}const x=Rf(),f=()=>{u.stop(),x&&x.active&&ol(x.effects,u)};if(r&&e){const E=e;e=(...D)=>{E(...D),f()}}let T=v?new Array(n.length).fill(rr):rr;const b=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const D=u.run();if(s||g||(v?D.some((L,R)=>ni(L,T[R])):ni(D,T))){d&&d();const L=yi;yi=u;try{const R=[D,T===rr?void 0:v&&T[0]===rr?[]:T,p];l?l(e,3,R):e(...R),T=D}finally{yi=L}}}else u.run()};return a&&a(b),u=new Uu(h),u.scheduler=o?()=>o(b,!1):b,p=E=>nd(E,!1,u),d=u.onStop=()=>{const E=Hr.get(u);if(E){if(l)l(E,4);else for(const D of E)D();Hr.delete(u)}},e?i?b(!0):T=u.run():o?o(b.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function ei(n,e=1/0,t){if(e<=0||!pt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,At(n))ei(n.value,e,t);else if(He(n))for(let i=0;i<n.length;i++)ei(n[i],e,t);else if(Tu(n)||os(n))n.forEach(i=>{ei(i,e,t)});else if(Cu(n)){for(const i in n)ei(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&ei(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function js(n,e,t,i){try{return i?n(...i):n()}catch(s){to(s,e,t)}}function En(n,e,t,i){if(ke(n)){const s=js(n,e,t,i);return s&&Au(s)&&s.catch(r=>{to(r,e,t)}),s}if(He(n)){const s=[];for(let r=0;r<n.length;r++)s.push(En(n[r],e,t,i));return s}}function to(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||at;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){ui(),js(r,null,10,[n,l,c]),hi();return}}sd(n,t,s,i,o)}function sd(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Dt=[];let pn=-1;const as=[];let Jn=null,ns=0;const Zu=Promise.resolve();let Vr=null;function rd(n){const e=Vr||Zu;return n?e.then(this?n.bind(this):n):e}function od(n){let e=pn+1,t=Dt.length;for(;e<t;){const i=e+t>>>1,s=Dt[i],r=ks(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function vl(n){if(!(n.flags&1)){const e=ks(n),t=Dt[Dt.length-1];!t||!(n.flags&2)&&e>=ks(t)?Dt.push(n):Dt.splice(od(e),0,n),n.flags|=1,Ju()}}function Ju(){Vr||(Vr=Zu.then(eh))}function ad(n){He(n)?as.push(...n):Jn&&n.id===-1?Jn.splice(ns+1,0,n):n.flags&1||(as.push(n),n.flags|=1),Ju()}function jl(n,e,t=pn+1){for(;t<Dt.length;t++){const i=Dt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Dt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Qu(n){if(as.length){const e=[...new Set(as)].sort((t,i)=>ks(t)-ks(i));if(as.length=0,Jn){Jn.push(...e);return}for(Jn=e,ns=0;ns<Jn.length;ns++){const t=Jn[ns];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Jn=null,ns=0}}const ks=n=>n.id==null?n.flags&2?-1:1/0:n.id;function eh(n){try{for(pn=0;pn<Dt.length;pn++){const e=Dt[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),js(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<Dt.length;pn++){const e=Dt[pn];e&&(e.flags&=-2)}pn=-1,Dt.length=0,Qu(),Vr=null,(Dt.length||as.length)&&eh()}}let gn=null,th=null;function Gr(n){const e=gn;return gn=n,th=n&&n.type.__scopeId||null,e}function ld(n,e=gn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&sc(-1);const r=Gr(e);let o;try{o=n(...s)}finally{Gr(r),i._d&&sc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function mi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(ui(),En(l,t,8,[n.el,a,n,e]),hi())}}const cd=Symbol("_vte"),ud=n=>n.__isTeleport;function zl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,zl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Ni(n,e){return ke(n)?wt({name:n.name},e,{setup:n}):n}function nh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function kr(n,e,t,i,s=!1){if(He(n)){n.forEach((g,v)=>kr(g,e&&(He(e)?e[v]:e),t,i,s));return}if(Os(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&kr(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?yl(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===at?a.refs={}:a.refs,h=a.setupState,d=et(h),p=h===at?()=>!1:g=>tt(d,g);if(c!=null&&c!==l&&(gt(c)?(u[c]=null,p(c)&&(h[c]=null)):At(c)&&(c.value=null)),ke(l))js(l,a,12,[o,u]);else{const g=gt(l),v=At(l);if(g||v){const x=()=>{if(n.f){const f=g?p(l)?h[l]:u[l]:l.value;s?He(f)&&ol(f,r):He(f)?f.includes(r)||f.push(r):g?(u[l]=[r],p(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else g?(u[l]=o,p(l)&&(h[l]=o)):v&&(l.value=o,n.k&&(u[n.k]=o))};o?(x.id=-1,Xt(x,t)):x()}}}eo().requestIdleCallback;eo().cancelIdleCallback;const Os=n=>!!n.type.__asyncLoader,ih=n=>n.type.__isKeepAlive;function hd(n,e){sh(n,"a",e)}function fd(n,e){sh(n,"da",e)}function sh(n,e,t=It){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(no(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ih(s.parent.vnode)&&dd(i,e,t,s),s=s.parent}}function dd(n,e,t,i){const s=no(e,n,i,!0);rh(()=>{ol(i[e],s)},t)}function no(n,e,t=It,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{ui();const a=Ks(t),l=En(e,t,n,o);return a(),hi(),l});return i?s.unshift(r):s.push(r),r}}const Xn=n=>(e,t=It)=>{(!Xs||n==="sp")&&no(n,(...i)=>e(...i),t)},pd=Xn("bm"),Ml=Xn("m"),xd=Xn("bu"),md=Xn("u"),gd=Xn("bum"),rh=Xn("um"),_d=Xn("sp"),vd=Xn("rtg"),zd=Xn("rtc");function Md(n,e=It){no("ec",n,e)}const Sd=Symbol.for("v-ndc"),ua=n=>n?Ah(n)?yl(n):ua(n.parent):null,Bs=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ua(n.parent),$root:n=>ua(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>ah(n),$forceUpdate:n=>n.f||(n.f=()=>{vl(n.update)}),$nextTick:n=>n.n||(n.n=rd.bind(n.proxy)),$watch:n=>Wd.bind(n)}),go=(n,e)=>n!==at&&!n.__isScriptSetup&&tt(n,e),Ed={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(go(i,e))return o[e]=1,i[e];if(s!==at&&tt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&tt(c,e))return o[e]=3,r[e];if(t!==at&&tt(t,e))return o[e]=4,t[e];ha&&(o[e]=0)}}const u=Bs[e];let h,d;if(u)return e==="$attrs"&&Tt(n.attrs,"get",""),u(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==at&&tt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,tt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return go(s,e)?(s[e]=t,!0):i!==at&&tt(i,e)?(i[e]=t,!0):tt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==at&&tt(n,o)||go(e,o)||(a=r[0])&&tt(a,o)||tt(i,o)||tt(Bs,o)||tt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:tt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Kl(n){return He(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ha=!0;function yd(n){const e=ah(n),t=n.proxy,i=n.ctx;ha=!1,e.beforeCreate&&Zl(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:x,beforeDestroy:f,beforeUnmount:T,destroyed:b,unmounted:E,render:D,renderTracked:L,renderTriggered:R,errorCaptured:U,serverPrefetch:y,expose:S,inheritAttrs:P,components:$,directives:G,filters:ee}=e;if(c&&bd(c,i,null),o)for(const Q in o){const H=o[Q];ke(H)&&(i[Q]=H.bind(t))}if(s){const Q=s.call(t,t);pt(Q)&&(n.data=ml(Q))}if(ha=!0,r)for(const Q in r){const H=r[Q],he=ke(H)?H.bind(t,t):ke(H.get)?H.get.bind(t,t):vn,ze=!ke(H)&&ke(H.set)?H.set.bind(t):vn,ye=Ch({get:he,set:ze});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Re=>ye.value=Re})}if(a)for(const Q in a)oh(a[Q],i,t,Q);if(l){const Q=ke(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(H=>{Pd(H,Q[H])})}u&&Zl(u,n,"c");function j(Q,H){He(H)?H.forEach(he=>Q(he.bind(t))):H&&Q(H.bind(t))}if(j(pd,h),j(Ml,d),j(xd,p),j(md,g),j(hd,v),j(fd,x),j(Md,U),j(zd,L),j(vd,R),j(gd,T),j(rh,E),j(_d,y),He(S))if(S.length){const Q=n.exposed||(n.exposed={});S.forEach(H=>{Object.defineProperty(Q,H,{get:()=>t[H],set:he=>t[H]=he})})}else n.exposed||(n.exposed={});D&&n.render===vn&&(n.render=D),P!=null&&(n.inheritAttrs=P),$&&(n.components=$),G&&(n.directives=G),y&&nh(n)}function bd(n,e,t=vn){He(n)&&(n=fa(n));for(const i in n){const s=n[i];let r;pt(s)?"default"in s?r=wr(s.from||i,s.default,!0):r=wr(s.from||i):r=wr(s),At(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Zl(n,e,t){En(He(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function oh(n,e,t,i){let s=i.includes(".")?Mh(t,i):()=>t[i];if(gt(n)){const r=e[n];ke(r)&&vo(s,r)}else if(ke(n))vo(s,n.bind(t));else if(pt(n))if(He(n))n.forEach(r=>oh(r,e,t,i));else{const r=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(r)&&vo(s,r,n)}}function ah(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Wr(l,c,o,!0)),Wr(l,e,o)),pt(e)&&r.set(e,l),l}function Wr(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Wr(n,r,t,!0),s&&s.forEach(o=>Wr(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Td[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Td={data:Jl,props:Ql,emits:Ql,methods:Ps,computed:Ps,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Ps,directives:Ps,watch:wd,provide:Jl,inject:Ad};function Jl(n,e){return e?n?function(){return wt(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function Ad(n,e){return Ps(fa(n),fa(e))}function fa(n){if(He(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Rt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ps(n,e){return n?wt(Object.create(null),n,e):e}function Ql(n,e){return n?He(n)&&He(e)?[...new Set([...n,...e])]:wt(Object.create(null),Kl(n),Kl(e??{})):e}function wd(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=Rt(n[i],e[i]);return t}function lh(){return{app:null,config:{isNativeTag:gf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Cd=0;function Rd(n,e){return function(i,s=null){ke(i)||(i=wt({},i)),s!=null&&!pt(s)&&(s=null);const r=lh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Cd++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:hp,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&ke(u.install)?(o.add(u),u.install(c,...h)):ke(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const p=c._ceVNode||Zt(i,s);return p.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(p,u,d),l=!0,c._container=u,u.__vue_app__=c,yl(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(En(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=ls;ls=c;try{return u()}finally{ls=h}}};return c}}let ls=null;function Pd(n,e){if(It){let t=It.provides;const i=It.parent&&It.parent.provides;i===t&&(t=It.provides=Object.create(i)),t[n]=e}}function wr(n,e,t=!1){const i=It||gn;if(i||ls){const s=ls?ls._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const ch={},uh=()=>Object.create(ch),hh=n=>Object.getPrototypeOf(n)===ch;function Ld(n,e,t,i=!1){const s={},r=uh();n.propsDefaults=Object.create(null),fh(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:jf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function Dd(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=et(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(io(n.emitsOptions,d))continue;const p=e[d];if(l)if(tt(r,d))p!==r[d]&&(r[d]=p,c=!0);else{const g=ri(d);s[g]=da(l,a,g,p,n,!1)}else p!==r[d]&&(r[d]=p,c=!0)}}}else{fh(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!tt(e,h)&&((u=Fi(h))===h||!tt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=da(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!tt(e,h))&&(delete r[h],c=!0)}c&&Fn(n.attrs,"set","")}function fh(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Is(l))continue;const c=e[l];let u;s&&tt(s,u=ri(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:io(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=et(t),c=a||at;for(let u=0;u<r.length;u++){const h=r[u];t[h]=da(s,l,h,c[h],n,!tt(c,h))}}return o}function da(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=tt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Ks(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Fi(t))&&(i=!0))}return i}const Id=new WeakMap;function dh(n,e,t=!1){const i=t?Id:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!ke(n)){const u=h=>{l=!0;const[d,p]=dh(h,e,!0);wt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return pt(n)&&i.set(n,rs),rs;if(He(r))for(let u=0;u<r.length;u++){const h=ri(r[u]);ec(h)&&(o[h]=at)}else if(r)for(const u in r){const h=ri(u);if(ec(h)){const d=r[u],p=o[h]=He(d)||ke(d)?{type:d}:wt({},d),g=p.type;let v=!1,x=!0;if(He(g))for(let f=0;f<g.length;++f){const T=g[f],b=ke(T)&&T.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(x=!1)}else v=ke(g)&&g.name==="Boolean";p[0]=v,p[1]=x,(v||tt(p,"default"))&&a.push(h)}}const c=[o,a];return pt(n)&&i.set(n,c),c}function ec(n){return n[0]!=="$"&&!Is(n)}const ph=n=>n[0]==="_"||n==="$stable",Sl=n=>He(n)?n.map(xn):[xn(n)],Ud=(n,e,t)=>{if(e._n)return e;const i=ld((...s)=>Sl(e(...s)),t);return i._c=!1,i},xh=(n,e,t)=>{const i=n._ctx;for(const s in n){if(ph(s))continue;const r=n[s];if(ke(r))e[s]=Ud(s,r,i);else if(r!=null){const o=Sl(r);e[s]=()=>o}}},mh=(n,e)=>{const t=Sl(e);n.slots.default=()=>t},gh=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Fd=(n,e,t)=>{const i=n.slots=uh();if(n.vnode.shapeFlag&32){const s=e._;s?(gh(i,e,t),t&&Pu(i,"_",s,!0)):xh(e,i)}else e&&mh(n,e)},Nd=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=at;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:gh(s,e,t):(r=!e.$stable,xh(e,s)),o=e}else e&&(mh(n,e),o={default:1});if(r)for(const a in s)!ph(a)&&o[a]==null&&delete s[a]},Xt=Zd;function Od(n){return Bd(n)}function Bd(n,e){const t=eo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=vn,insertStaticContent:g}=n,v=(A,C,M,se=null,q=null,K=null,Z=void 0,re=null,Y=!!C.dynamicChildren)=>{if(A===C)return;A&&!ys(A,C)&&(se=pe(A),Re(A,q,K,!0),A=null),C.patchFlag===-2&&(Y=!1,C.dynamicChildren=null);const{type:_,ref:m,shapeFlag:w}=C;switch(_){case so:x(A,C,M,se);break;case Di:f(A,C,M,se);break;case Cr:A==null&&T(C,M,se,Z);break;case In:$(A,C,M,se,q,K,Z,re,Y);break;default:w&1?D(A,C,M,se,q,K,Z,re,Y):w&6?G(A,C,M,se,q,K,Z,re,Y):(w&64||w&128)&&_.process(A,C,M,se,q,K,Z,re,Y,Oe)}m!=null&&q&&kr(m,A&&A.ref,K,C||A,!C)},x=(A,C,M,se)=>{if(A==null)i(C.el=a(C.children),M,se);else{const q=C.el=A.el;C.children!==A.children&&c(q,C.children)}},f=(A,C,M,se)=>{A==null?i(C.el=l(C.children||""),M,se):C.el=A.el},T=(A,C,M,se)=>{[A.el,A.anchor]=g(A.children,C,M,se,A.el,A.anchor)},b=({el:A,anchor:C},M,se)=>{let q;for(;A&&A!==C;)q=d(A),i(A,M,se),A=q;i(C,M,se)},E=({el:A,anchor:C})=>{let M;for(;A&&A!==C;)M=d(A),s(A),A=M;s(C)},D=(A,C,M,se,q,K,Z,re,Y)=>{C.type==="svg"?Z="svg":C.type==="math"&&(Z="mathml"),A==null?L(C,M,se,q,K,Z,re,Y):y(A,C,q,K,Z,re,Y)},L=(A,C,M,se,q,K,Z,re)=>{let Y,_;const{props:m,shapeFlag:w,transition:B,dirs:k}=A;if(Y=A.el=o(A.type,K,m&&m.is,m),w&8?u(Y,A.children):w&16&&U(A.children,Y,null,se,q,_o(A,K),Z,re),k&&mi(A,null,se,"created"),R(Y,A,A.scopeId,Z,se),m){for(const ue in m)ue!=="value"&&!Is(ue)&&r(Y,ue,null,m[ue],K,se);"value"in m&&r(Y,"value",null,m.value,K),(_=m.onVnodeBeforeMount)&&dn(_,se,A)}k&&mi(A,null,se,"beforeMount");const V=Hd(q,B);V&&B.beforeEnter(Y),i(Y,C,M),((_=m&&m.onVnodeMounted)||V||k)&&Xt(()=>{_&&dn(_,se,A),V&&B.enter(Y),k&&mi(A,null,se,"mounted")},q)},R=(A,C,M,se,q)=>{if(M&&p(A,M),se)for(let K=0;K<se.length;K++)p(A,se[K]);if(q){let K=q.subTree;if(C===K||Eh(K.type)&&(K.ssContent===C||K.ssFallback===C)){const Z=q.vnode;R(A,Z,Z.scopeId,Z.slotScopeIds,q.parent)}}},U=(A,C,M,se,q,K,Z,re,Y=0)=>{for(let _=Y;_<A.length;_++){const m=A[_]=re?Qn(A[_]):xn(A[_]);v(null,m,C,M,se,q,K,Z,re)}},y=(A,C,M,se,q,K,Z)=>{const re=C.el=A.el;let{patchFlag:Y,dynamicChildren:_,dirs:m}=C;Y|=A.patchFlag&16;const w=A.props||at,B=C.props||at;let k;if(M&&gi(M,!1),(k=B.onVnodeBeforeUpdate)&&dn(k,M,C,A),m&&mi(C,A,M,"beforeUpdate"),M&&gi(M,!0),(w.innerHTML&&B.innerHTML==null||w.textContent&&B.textContent==null)&&u(re,""),_?S(A.dynamicChildren,_,re,M,se,_o(C,q),K):Z||H(A,C,re,null,M,se,_o(C,q),K,!1),Y>0){if(Y&16)P(re,w,B,M,q);else if(Y&2&&w.class!==B.class&&r(re,"class",null,B.class,q),Y&4&&r(re,"style",w.style,B.style,q),Y&8){const V=C.dynamicProps;for(let ue=0;ue<V.length;ue++){const oe=V[ue],fe=w[oe],Pe=B[oe];(Pe!==fe||oe==="value")&&r(re,oe,fe,Pe,q,M)}}Y&1&&A.children!==C.children&&u(re,C.children)}else!Z&&_==null&&P(re,w,B,M,q);((k=B.onVnodeUpdated)||m)&&Xt(()=>{k&&dn(k,M,C,A),m&&mi(C,A,M,"updated")},se)},S=(A,C,M,se,q,K,Z)=>{for(let re=0;re<C.length;re++){const Y=A[re],_=C[re],m=Y.el&&(Y.type===In||!ys(Y,_)||Y.shapeFlag&70)?h(Y.el):M;v(Y,_,m,null,se,q,K,Z,!0)}},P=(A,C,M,se,q)=>{if(C!==M){if(C!==at)for(const K in C)!Is(K)&&!(K in M)&&r(A,K,C[K],null,q,se);for(const K in M){if(Is(K))continue;const Z=M[K],re=C[K];Z!==re&&K!=="value"&&r(A,K,re,Z,q,se)}"value"in M&&r(A,"value",C.value,M.value,q)}},$=(A,C,M,se,q,K,Z,re,Y)=>{const _=C.el=A?A.el:a(""),m=C.anchor=A?A.anchor:a("");let{patchFlag:w,dynamicChildren:B,slotScopeIds:k}=C;k&&(re=re?re.concat(k):k),A==null?(i(_,M,se),i(m,M,se),U(C.children||[],M,m,q,K,Z,re,Y)):w>0&&w&64&&B&&A.dynamicChildren?(S(A.dynamicChildren,B,M,q,K,Z,re),(C.key!=null||q&&C===q.subTree)&&_h(A,C,!0)):H(A,C,M,m,q,K,Z,re,Y)},G=(A,C,M,se,q,K,Z,re,Y)=>{C.slotScopeIds=re,A==null?C.shapeFlag&512?q.ctx.activate(C,M,se,Z,Y):ee(C,M,se,q,K,Z,Y):ne(A,C,Y)},ee=(A,C,M,se,q,K,Z)=>{const re=A.component=rp(A,se,q);if(ih(A)&&(re.ctx.renderer=Oe),op(re,!1,Z),re.asyncDep){if(q&&q.registerDep(re,j,Z),!A.el){const Y=re.subTree=Zt(Di);f(null,Y,C,M)}}else j(re,A,C,M,q,K,Z)},ne=(A,C,M)=>{const se=C.component=A.component;if(jd(A,C,M))if(se.asyncDep&&!se.asyncResolved){Q(se,C,M);return}else se.next=C,se.update();else C.el=A.el,se.vnode=C},j=(A,C,M,se,q,K,Z)=>{const re=()=>{if(A.isMounted){let{next:w,bu:B,u:k,parent:V,vnode:ue}=A;{const me=vh(A);if(me){w&&(w.el=ue.el,Q(A,w,Z)),me.asyncDep.then(()=>{A.isUnmounted||re()});return}}let oe=w,fe;gi(A,!1),w?(w.el=ue.el,Q(A,w,Z)):w=ue,B&&ho(B),(fe=w.props&&w.props.onVnodeBeforeUpdate)&&dn(fe,V,w,ue),gi(A,!0);const Pe=nc(A),ae=A.subTree;A.subTree=Pe,v(ae,Pe,h(ae.el),pe(ae),A,q,K),w.el=Pe.el,oe===null&&Kd(A,Pe.el),k&&Xt(k,q),(fe=w.props&&w.props.onVnodeUpdated)&&Xt(()=>dn(fe,V,w,ue),q)}else{let w;const{el:B,props:k}=C,{bm:V,m:ue,parent:oe,root:fe,type:Pe}=A,ae=Os(C);gi(A,!1),V&&ho(V),!ae&&(w=k&&k.onVnodeBeforeMount)&&dn(w,oe,C),gi(A,!0);{fe.ce&&fe.ce._injectChildStyle(Pe);const me=A.subTree=nc(A);v(null,me,M,se,A,q,K),C.el=me.el}if(ue&&Xt(ue,q),!ae&&(w=k&&k.onVnodeMounted)){const me=C;Xt(()=>dn(w,oe,me),q)}(C.shapeFlag&256||oe&&Os(oe.vnode)&&oe.vnode.shapeFlag&256)&&A.a&&Xt(A.a,q),A.isMounted=!0,C=M=se=null}};A.scope.on();const Y=A.effect=new Uu(re);A.scope.off();const _=A.update=Y.run.bind(Y),m=A.job=Y.runIfDirty.bind(Y);m.i=A,m.id=A.uid,Y.scheduler=()=>vl(m),gi(A,!0),_()},Q=(A,C,M)=>{C.component=A;const se=A.vnode.props;A.vnode=C,A.next=null,Dd(A,C.props,se,M),Nd(A,C.children,M),ui(),jl(A),hi()},H=(A,C,M,se,q,K,Z,re,Y=!1)=>{const _=A&&A.children,m=A?A.shapeFlag:0,w=C.children,{patchFlag:B,shapeFlag:k}=C;if(B>0){if(B&128){ze(_,w,M,se,q,K,Z,re,Y);return}else if(B&256){he(_,w,M,se,q,K,Z,re,Y);return}}k&8?(m&16&&Ee(_,q,K),w!==_&&u(M,w)):m&16?k&16?ze(_,w,M,se,q,K,Z,re,Y):Ee(_,q,K,!0):(m&8&&u(M,""),k&16&&U(w,M,se,q,K,Z,re,Y))},he=(A,C,M,se,q,K,Z,re,Y)=>{A=A||rs,C=C||rs;const _=A.length,m=C.length,w=Math.min(_,m);let B;for(B=0;B<w;B++){const k=C[B]=Y?Qn(C[B]):xn(C[B]);v(A[B],k,M,null,q,K,Z,re,Y)}_>m?Ee(A,q,K,!0,!1,w):U(C,M,se,q,K,Z,re,Y,w)},ze=(A,C,M,se,q,K,Z,re,Y)=>{let _=0;const m=C.length;let w=A.length-1,B=m-1;for(;_<=w&&_<=B;){const k=A[_],V=C[_]=Y?Qn(C[_]):xn(C[_]);if(ys(k,V))v(k,V,M,null,q,K,Z,re,Y);else break;_++}for(;_<=w&&_<=B;){const k=A[w],V=C[B]=Y?Qn(C[B]):xn(C[B]);if(ys(k,V))v(k,V,M,null,q,K,Z,re,Y);else break;w--,B--}if(_>w){if(_<=B){const k=B+1,V=k<m?C[k].el:se;for(;_<=B;)v(null,C[_]=Y?Qn(C[_]):xn(C[_]),M,V,q,K,Z,re,Y),_++}}else if(_>B)for(;_<=w;)Re(A[_],q,K,!0),_++;else{const k=_,V=_,ue=new Map;for(_=V;_<=B;_++){const de=C[_]=Y?Qn(C[_]):xn(C[_]);de.key!=null&&ue.set(de.key,_)}let oe,fe=0;const Pe=B-V+1;let ae=!1,me=0;const Te=new Array(Pe);for(_=0;_<Pe;_++)Te[_]=0;for(_=k;_<=w;_++){const de=A[_];if(fe>=Pe){Re(de,q,K,!0);continue}let Ue;if(de.key!=null)Ue=ue.get(de.key);else for(oe=V;oe<=B;oe++)if(Te[oe-V]===0&&ys(de,C[oe])){Ue=oe;break}Ue===void 0?Re(de,q,K,!0):(Te[Ue-V]=_+1,Ue>=me?me=Ue:ae=!0,v(de,C[Ue],M,null,q,K,Z,re,Y),fe++)}const Le=ae?Vd(Te):rs;for(oe=Le.length-1,_=Pe-1;_>=0;_--){const de=V+_,Ue=C[de],Be=de+1<m?C[de+1].el:se;Te[_]===0?v(null,Ue,M,Be,q,K,Z,re,Y):ae&&(oe<0||_!==Le[oe]?ye(Ue,M,Be,2):oe--)}}},ye=(A,C,M,se,q=null)=>{const{el:K,type:Z,transition:re,children:Y,shapeFlag:_}=A;if(_&6){ye(A.component.subTree,C,M,se);return}if(_&128){A.suspense.move(C,M,se);return}if(_&64){Z.move(A,C,M,Oe);return}if(Z===In){i(K,C,M);for(let w=0;w<Y.length;w++)ye(Y[w],C,M,se);i(A.anchor,C,M);return}if(Z===Cr){b(A,C,M);return}if(se!==2&&_&1&&re)if(se===0)re.beforeEnter(K),i(K,C,M),Xt(()=>re.enter(K),q);else{const{leave:w,delayLeave:B,afterLeave:k}=re,V=()=>i(K,C,M),ue=()=>{w(K,()=>{V(),k&&k()})};B?B(K,V,ue):ue()}else i(K,C,M)},Re=(A,C,M,se=!1,q=!1)=>{const{type:K,props:Z,ref:re,children:Y,dynamicChildren:_,shapeFlag:m,patchFlag:w,dirs:B,cacheIndex:k}=A;if(w===-2&&(q=!1),re!=null&&kr(re,null,M,A,!0),k!=null&&(C.renderCache[k]=void 0),m&256){C.ctx.deactivate(A);return}const V=m&1&&B,ue=!Os(A);let oe;if(ue&&(oe=Z&&Z.onVnodeBeforeUnmount)&&dn(oe,C,A),m&6)ce(A.component,M,se);else{if(m&128){A.suspense.unmount(M,se);return}V&&mi(A,null,C,"beforeUnmount"),m&64?A.type.remove(A,C,M,Oe,se):_&&!_.hasOnce&&(K!==In||w>0&&w&64)?Ee(_,C,M,!1,!0):(K===In&&w&384||!q&&m&16)&&Ee(Y,C,M),se&&Ze(A)}(ue&&(oe=Z&&Z.onVnodeUnmounted)||V)&&Xt(()=>{oe&&dn(oe,C,A),V&&mi(A,null,C,"unmounted")},M)},Ze=A=>{const{type:C,el:M,anchor:se,transition:q}=A;if(C===In){te(M,se);return}if(C===Cr){E(A);return}const K=()=>{s(M),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(A.shapeFlag&1&&q&&!q.persisted){const{leave:Z,delayLeave:re}=q,Y=()=>Z(M,K);re?re(A.el,K,Y):Y()}else K()},te=(A,C)=>{let M;for(;A!==C;)M=d(A),s(A),A=M;s(C)},ce=(A,C,M)=>{const{bum:se,scope:q,job:K,subTree:Z,um:re,m:Y,a:_}=A;tc(Y),tc(_),se&&ho(se),q.stop(),K&&(K.flags|=8,Re(Z,A,C,M)),re&&Xt(re,C),Xt(()=>{A.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Ee=(A,C,M,se=!1,q=!1,K=0)=>{for(let Z=K;Z<A.length;Z++)Re(A[Z],C,M,se,q)},pe=A=>{if(A.shapeFlag&6)return pe(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const C=d(A.anchor||A.el),M=C&&C[cd];return M?d(M):C};let we=!1;const Ie=(A,C,M)=>{A==null?C._vnode&&Re(C._vnode,null,null,!0):v(C._vnode||null,A,C,null,null,null,M),C._vnode=A,we||(we=!0,jl(),Qu(),we=!1)},Oe={p:v,um:Re,m:ye,r:Ze,mt:ee,mc:U,pc:H,pbc:S,n:pe,o:n};return{render:Ie,hydrate:void 0,createApp:Rd(Ie)}}function _o({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function gi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Hd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function _h(n,e,t=!1){const i=n.children,s=e.children;if(He(i)&&He(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Qn(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&_h(o,a)),a.type===so&&(a.el=o.el)}}function Vd(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function vh(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vh(e)}function tc(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Gd=Symbol.for("v-scx"),kd=()=>wr(Gd);function vo(n,e,t){return zh(n,e,t)}function zh(n,e,t=at){const{immediate:i,deep:s,flush:r,once:o}=t,a=wt({},t),l=e&&i||!e&&r!=="post";let c;if(Xs){if(r==="sync"){const p=kd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=vn,p.resume=vn,p.pause=vn,p}}const u=It;a.call=(p,g,v)=>En(p,u,g,v);let h=!1;r==="post"?a.scheduler=p=>{Xt(p,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(p,g)=>{g?p():vl(p)}),a.augmentJob=p=>{e&&(p.flags|=4),h&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const d=id(n,e,a);return Xs&&(c?c.push(d):l&&d()),d}function Wd(n,e,t){const i=this.proxy,s=gt(n)?n.includes(".")?Mh(i,n):()=>i[n]:n.bind(i,i);let r;ke(e)?r=e:(r=e.handler,t=e);const o=Ks(this),a=zh(s,r.bind(i),t);return o(),a}function Mh(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const Xd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ri(e)}Modifiers`]||n[`${Fi(e)}Modifiers`];function $d(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||at;let s=t;const r=e.startsWith("update:"),o=r&&Xd(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>gt(u)?u.trim():u)),o.number&&(s=t.map(Sf)));let a,l=i[a=uo(e)]||i[a=uo(ri(e))];!l&&r&&(l=i[a=uo(Fi(e))]),l&&En(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,En(c,n,6,s)}}function Sh(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!ke(n)){const l=c=>{const u=Sh(c,e,!0);u&&(a=!0,wt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(pt(n)&&i.set(n,null),null):(He(r)?r.forEach(l=>o[l]=null):wt(o,r),pt(n)&&i.set(n,o),o)}function io(n,e){return!n||!Zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(n,e[0].toLowerCase()+e.slice(1))||tt(n,Fi(e))||tt(n,e))}function nc(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:p,ctx:g,inheritAttrs:v}=n,x=Gr(n);let f,T;try{if(t.shapeFlag&4){const E=s||i,D=E;f=xn(c.call(D,E,u,h,p,d,g)),T=a}else{const E=e;f=xn(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),T=e.props?a:qd(a)}}catch(E){Hs.length=0,to(E,n,1),f=Zt(Di)}let b=f;if(T&&v!==!1){const E=Object.keys(T),{shapeFlag:D}=b;E.length&&D&7&&(r&&E.some(rl)&&(T=Yd(T,r)),b=fs(b,T,!1,!0))}return t.dirs&&(b=fs(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&zl(b,t.transition),f=b,Gr(x),f}const qd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Zr(t))&&((e||(e={}))[t]=n[t]);return e},Yd=(n,e)=>{const t={};for(const i in n)(!rl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function jd(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ic(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==i[d]&&!io(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ic(i,o,c):!0:!!o;return!1}function ic(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!io(t,r))return!0}return!1}function Kd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Eh=n=>n.__isSuspense;function Zd(n,e){e&&e.pendingBranch?He(n)?e.effects.push(...n):e.effects.push(n):ad(n)}const In=Symbol.for("v-fgt"),so=Symbol.for("v-txt"),Di=Symbol.for("v-cmt"),Cr=Symbol.for("v-stc"),Hs=[];let Kt=null;function St(n=!1){Hs.push(Kt=n?null:[])}function Jd(){Hs.pop(),Kt=Hs[Hs.length-1]||null}let Ws=1;function sc(n,e=!1){Ws+=n,n<0&&Kt&&e&&(Kt.hasOnce=!0)}function yh(n){return n.dynamicChildren=Ws>0?Kt||rs:null,Jd(),Ws>0&&Kt&&Kt.push(n),n}function jt(n,e,t,i,s,r){return yh(dt(n,e,t,i,s,r,!0))}function Xr(n,e,t,i,s){return yh(Zt(n,e,t,i,s,!0))}function bh(n){return n?n.__v_isVNode===!0:!1}function ys(n,e){return n.type===e.type&&n.key===e.key}const Th=({key:n})=>n??null,Rr=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gt(n)||At(n)||ke(n)?{i:gn,r:n,k:e,f:!!t}:n:null);function dt(n,e=null,t=null,i=0,s=null,r=n===In?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Th(e),ref:e&&Rr(e),scopeId:th,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:gn};return a?(El(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=gt(t)?8:16),Ws>0&&!o&&Kt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Kt.push(l),l}const Zt=Qd;function Qd(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Sd)&&(n=Di),bh(n)){const a=fs(n,e,!0);return t&&El(a,t),Ws>0&&!r&&Kt&&(a.shapeFlag&6?Kt[Kt.indexOf(n)]=a:Kt.push(a)),a.patchFlag=-2,a}if(up(n)&&(n=n.__vccOpts),e){e=ep(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=kn(a)),pt(l)&&(_l(l)&&!He(l)&&(l=wt({},l)),e.style=ll(l))}const o=gt(n)?1:Eh(n)?128:ud(n)?64:pt(n)?4:ke(n)?2:0;return dt(n,e,t,i,s,o,r,!0)}function ep(n){return n?_l(n)||hh(n)?wt({},n):n:null}function fs(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?np(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Th(c),ref:e&&e.ref?t&&r?He(r)?r.concat(Rr(e)):[r,Rr(e)]:Rr(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==In?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&fs(n.ssContent),ssFallback:n.ssFallback&&fs(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&zl(u,l.clone(u)),u}function tp(n=" ",e=0){return Zt(so,null,n,e)}function $r(n,e){const t=Zt(Cr,null,n);return t.staticCount=e,t}function On(n="",e=!1){return e?(St(),Xr(Di,null,n)):Zt(Di,null,n)}function xn(n){return n==null||typeof n=="boolean"?Zt(Di):He(n)?Zt(In,null,n.slice()):bh(n)?Qn(n):Zt(so,null,String(n))}function Qn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:fs(n)}function El(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(He(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),El(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!hh(e)?e._ctx=gn:s===3&&gn&&(gn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:gn},t=32):(e=String(e),i&64?(t=16,e=[tp(e)]):t=8);n.children=e,n.shapeFlag|=t}function np(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=kn([e.class,i.class]));else if(s==="style")e.style=ll([e.style,i.style]);else if(Zr(s)){const r=e[s],o=i[s];o&&r!==o&&!(He(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function dn(n,e,t,i=null){En(n,e,7,[t,i])}const ip=lh();let sp=0;function rp(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||ip,r={uid:sp++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Cf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dh(i,s),emitsOptions:Sh(i,s),emit:null,emitted:null,propsDefaults:at,inheritAttrs:i.inheritAttrs,ctx:at,data:at,props:at,attrs:at,slots:at,refs:at,setupState:at,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=$d.bind(null,r),n.ce&&n.ce(r),r}let It=null,qr,pa;{const n=eo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};qr=e("__VUE_INSTANCE_SETTERS__",t=>It=t),pa=e("__VUE_SSR_SETTERS__",t=>Xs=t)}const Ks=n=>{const e=It;return qr(n),n.scope.on(),()=>{n.scope.off(),qr(e)}},rc=()=>{It&&It.scope.off(),qr(null)};function Ah(n){return n.vnode.shapeFlag&4}let Xs=!1;function op(n,e=!1,t=!1){e&&pa(e);const{props:i,children:s}=n.vnode,r=Ah(n);Ld(n,i,r,e),Fd(n,s,t);const o=r?ap(n,e):void 0;return e&&pa(!1),o}function ap(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ed);const{setup:i}=t;if(i){ui();const s=n.setupContext=i.length>1?cp(n):null,r=Ks(n),o=js(i,n,0,[n.props,s]),a=Au(o);if(hi(),r(),(a||n.sp)&&!Os(n)&&nh(n),a){if(o.then(rc,rc),e)return o.then(l=>{oc(n,l)}).catch(l=>{to(l,n,0)});n.asyncDep=o}else oc(n,o)}else wh(n)}function oc(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:pt(e)&&(n.setupState=Ku(e)),wh(n)}function wh(n,e,t){const i=n.type;n.render||(n.render=i.render||vn);{const s=Ks(n);ui();try{yd(n)}finally{hi(),s()}}}const lp={get(n,e){return Tt(n,"get",""),n[e]}};function cp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,lp),slots:n.slots,emit:n.emit,expose:e}}function yl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Ku(Kf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Bs)return Bs[t](n)},has(e,t){return t in e||t in Bs}})):n.proxy}function up(n){return ke(n)&&"__vccOpts"in n}const Ch=(n,e)=>td(n,e,Xs),hp="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xa;const ac=typeof window<"u"&&window.trustedTypes;if(ac)try{xa=ac.createPolicy("vue",{createHTML:n=>n})}catch{}const Rh=xa?n=>xa.createHTML(n):n=>n,fp="http://www.w3.org/2000/svg",dp="http://www.w3.org/1998/Math/MathML",Dn=typeof document<"u"?document:null,lc=Dn&&Dn.createElement("template"),pp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Dn.createElementNS(fp,n):e==="mathml"?Dn.createElementNS(dp,n):t?Dn.createElement(n,{is:t}):Dn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Dn.createTextNode(n),createComment:n=>Dn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Dn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{lc.innerHTML=Rh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=lc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},xp=Symbol("_vtc");function mp(n,e,t){const i=n[xp];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const cc=Symbol("_vod"),gp=Symbol("_vsh"),_p=Symbol(""),vp=/(^|;)\s*display\s*:/;function zp(n,e,t){const i=n.style,s=gt(t);let r=!1;if(t&&!s){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Pr(i,a,"")}else for(const o in e)t[o]==null&&Pr(i,o,"");for(const o in t)o==="display"&&(r=!0),Pr(i,o,t[o])}else if(s){if(e!==t){const o=i[_p];o&&(t+=";"+o),i.cssText=t,r=vp.test(t)}}else e&&n.removeAttribute("style");cc in n&&(n[cc]=r?i.display:"",n[gp]&&(i.display="none"))}const uc=/\s*!important$/;function Pr(n,e,t){if(He(t))t.forEach(i=>Pr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Mp(n,e);uc.test(t)?n.setProperty(Fi(i),t.replace(uc,""),"important"):n[i]=t}}const hc=["Webkit","Moz","ms"],zo={};function Mp(n,e){const t=zo[e];if(t)return t;let i=ri(e);if(i!=="filter"&&i in n)return zo[e]=i;i=Ru(i);for(let s=0;s<hc.length;s++){const r=hc[s]+i;if(r in n)return zo[e]=r}return e}const fc="http://www.w3.org/1999/xlink";function dc(n,e,t,i,s,r=wf(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(fc,e.slice(6,e.length)):n.setAttributeNS(fc,e,t):t==null||r&&!Lu(t)?n.removeAttribute(e):n.setAttribute(e,r?"":ci(t)?String(t):t)}function pc(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Rh(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Lu(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Sp(n,e,t,i){n.addEventListener(e,t,i)}function Ep(n,e,t,i){n.removeEventListener(e,t,i)}const xc=Symbol("_vei");function yp(n,e,t,i,s=null){const r=n[xc]||(n[xc]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=bp(e);if(i){const c=r[e]=wp(i,s);Sp(n,a,c,l)}else o&&(Ep(n,a,o,l),r[e]=void 0)}}const mc=/(?:Once|Passive|Capture)$/;function bp(n){let e;if(mc.test(n)){e={};let i;for(;i=n.match(mc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Fi(n.slice(2)),e]}let Mo=0;const Tp=Promise.resolve(),Ap=()=>Mo||(Tp.then(()=>Mo=0),Mo=Date.now());function wp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;En(Cp(i,t.value),e,5,[i])};return t.value=n,t.attached=Ap(),t}function Cp(n,e){if(He(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const gc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Rp=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?mp(n,i,o):e==="style"?zp(n,t,i):Zr(e)?rl(e)||yp(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pp(n,e,i,o))?(pc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&dc(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!gt(i))?pc(n,ri(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),dc(n,e,i,o))};function Pp(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&gc(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gc(e)&&gt(t)?!1:e in n}const Lp=wt({patchProp:Rp},pp);let _c;function Dp(){return _c||(_c=Od(Lp))}const Ip=(...n)=>{const e=Dp().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=Fp(i);if(!s)return;const r=e._component;!ke(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,Up(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Up(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Fp(n){return gt(n)?document.querySelector(n):n}const Yr=[{characterPlacement:{x:9,z:16},level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:2,z:10},{x:3,z:10},{x:4,z:10},{x:5,z:10},{x:7,z:10},{x:8,z:10},{x:6,z:13},{x:4,z:16},{x:7,z:18},{x:10,z:18},{x:11,z:16},{x:12,z:17},{x:7,z:21},{x:5,z:21},{x:3,z:20},{x:3,z:19},{x:7,z:17},{x:2,z:14},{x:3,z:13},{x:5,z:12},{x:6,z:12},{x:6,z:16},{x:12,z:15},{x:3,z:8},{x:6,z:8},{x:7,z:7},{x:5,z:4},{x:2,z:3},{x:6,z:6},{x:9,z:4},{x:10,z:3},{x:14,z:3},{x:16,z:7},{x:16,z:10},{x:15,z:12},{x:11,z:13},{x:8,z:12},{x:9,z:18},{x:13,z:13},{x:13,z:11},{x:13,z:9},{x:12,z:8},{x:9,z:8},{x:9,z:7},{x:11,z:5},{x:15,z:6},{x:17,z:9},{x:17,z:14},{x:15,z:17},{x:15,z:20},{x:17,z:18},{x:16,z:22},{x:12,z:21},{x:11,z:20},{x:10,z:20},{x:9,z:19},{x:8,z:19},{x:2,z:22},{x:2,z:20},{x:2,z:18},{x:1,z:18},{x:5,z:16},{x:6,z:18},{x:5,z:19},{x:10,z:15},{x:8,z:15},{x:9,z:13},{x:10,z:14},{x:20,z:10},{x:19,z:8},{x:18,z:6},{x:19,z:4},{x:17,z:2},{x:14,z:2},{x:8,z:2},{x:7,z:3},{x:4,z:1},{x:1,z:3},{x:2,z:6},{x:5,z:5},{x:12,z:5},{x:14,z:5},{x:17,z:3},{x:20,z:2},{x:21,z:2},{x:18,z:11},{x:21,z:11},{x:21,z:13},{x:20,z:13},{x:19,z:13},{x:15,z:15},{x:14,z:17},{x:17,z:16},{x:20,z:16},{x:22,z:17},{x:19,z:19},{x:16,z:19},{x:14,z:19},{x:12,z:19},{x:15,z:21},{x:11,z:22},{x:10,z:22},{x:8,z:21},{x:18,z:20},{x:21,z:19},{x:20,z:20},{x:17,z:21},{x:20,z:22},{x:19,z:22},{x:4,z:6},{x:4,z:7}],tpPlacement:[{x:11,z:7},{x:22,z:22},{x:1,z:22},{x:22,z:1},{x:1,z:1}]},{characterPlacement:{x:15,z:18},name:"Achermlan le Rouge",level:[{x:0,z:0},{x:0,z:23},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:13,z:18},{x:13,z:17},{x:13,z:16},{x:14,z:16},{x:13,z:20},{x:14,z:20},{x:15,z:20},{x:16,z:20},{x:17,z:20},{x:17,z:19},{x:17,z:18},{x:17,z:17},{x:17,z:16},{x:16,z:16},{x:15,z:16},{x:14,z:15},{x:14,z:14},{x:14,z:13},{x:13,z:13},{x:12,z:13},{x:12,z:12},{x:11,z:20},{x:11,z:19},{x:11,z:18},{x:11,z:17},{x:11,z:16},{x:11,z:15},{x:10,z:14},{x:10,z:13},{x:10,z:12},{x:10,z:11},{x:11,z:10},{x:12,z:9},{x:13,z:11},{x:14,z:10},{x:14,z:9},{x:12,z:7},{x:12,z:6},{x:13,z:6},{x:14,z:6},{x:14,z:7},{x:10,z:9},{x:10,z:8},{x:10,z:7},{x:10,z:6},{x:10,z:5},{x:10,z:4},{x:11,z:4},{x:12,z:4},{x:13,z:4},{x:14,z:4},{x:15,z:4},{x:16,z:6},{x:16,z:7},{x:16,z:8},{x:16,z:9},{x:16,z:10},{x:17,z:4},{x:16,z:4},{x:18,z:6},{x:17,z:3},{x:17,z:2},{x:6,z:11},{x:7,z:11},{x:8,z:11},{x:14,z:21},{x:16,z:22},{x:18,z:20},{x:19,z:20},{x:19,z:19},{x:19,z:18},{x:18,z:16},{x:19,z:16},{x:20,z:16},{x:18,z:15},{x:18,z:14},{x:17,z:14},{x:16,z:14},{x:18,z:13},{x:18,z:12},{x:18,z:11},{x:19,z:11},{x:20,z:11},{x:20,z:10},{x:20,z:9},{x:19,z:9},{x:18,z:9},{x:18,z:8},{x:19,z:5},{x:20,z:5},{x:21,z:5},{x:18,z:2},{x:19,z:2},{x:21,z:2},{x:22,z:2},{x:20,z:7},{x:21,z:7},{x:22,z:13},{x:21,z:13},{x:20,z:13},{x:20,z:15},{x:21,z:15},{x:11,z:22},{x:1,z:5},{x:2,z:5},{x:3,z:5},{x:3,z:6},{x:3,z:7},{x:2,z:7},{x:2,z:9},{x:3,z:9},{x:2,z:8},{x:4,z:9},{x:4,z:10},{x:4,z:11},{x:4,z:12},{x:4,z:13},{x:5,z:13},{x:6,z:13},{x:7,z:13},{x:9,z:6},{x:8,z:6},{x:7,z:6},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:6,z:9},{x:2,z:3},{x:2,z:2},{x:2,z:11},{x:2,z:12},{x:2,z:13},{x:2,z:14},{x:2,z:15},{x:2,z:16},{x:3,z:16},{x:4,z:16},{x:3,z:17},{x:3,z:19},{x:2,z:18},{x:6,z:14},{x:6,z:15},{x:6,z:17},{x:6,z:16},{x:8,z:14},{x:8,z:15},{x:8,z:16},{x:8,z:17},{x:9,z:17},{x:7,z:19},{x:7,z:20},{x:6,z:21},{x:5,z:21},{x:4,z:21},{x:3,z:21},{x:3,z:22},{x:9,z:19},{x:9,z:20},{x:9,z:21},{x:9,z:22},{x:5,z:19},{x:4,z:15},{x:5,z:6},{x:5,z:5},{x:5,z:4},{x:5,z:3},{x:6,z:3},{x:7,z:3},{x:6,z:2},{x:7,z:4},{x:8,z:2},{x:9,z:2},{x:10,z:2},{x:7,z:1},{x:1,z:3},{x:3,z:2},{x:1,z:20},{x:12,z:1},{x:12,z:2},{x:13,z:2},{x:14,z:2},{x:15,z:2},{x:20,z:22},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:21,z:18},{x:18,z:21},{x:17,z:12},{x:16,z:12}]},{characterPlacement:{x:10,z:11},name:"Vladeousse",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:21,z:18},{x:19,z:20},{x:19,z:19},{x:19,z:21},{x:22,z:16},{x:21,z:16},{x:20,z:16},{x:20,z:14},{x:21,z:14},{x:22,z:14},{x:21,z:11},{x:19,z:11},{x:18,z:11},{x:17,z:11},{x:16,z:11},{x:16,z:13},{x:16,z:14},{x:17,z:15},{x:16,z:15},{x:20,z:13},{x:18,z:13},{x:19,z:13},{x:17,z:16},{x:17,z:18},{x:17,z:17},{x:17,z:20},{x:17,z:22},{x:15,z:20},{x:15,z:19},{x:15,z:18},{x:16,z:18},{x:14,z:20},{x:13,z:20},{x:13,z:21},{x:21,z:1},{x:21,z:2},{x:20,z:5},{x:20,z:4},{x:17,z:5},{x:18,z:5},{x:18,z:2},{x:17,z:2},{x:17,z:3},{x:1,z:2},{x:2,z:2},{x:3,z:2},{x:3,z:3},{x:3,z:5},{x:3,z:4},{x:1,z:4},{x:5,z:2},{x:5,z:1},{x:7,z:2},{x:7,z:3},{x:7,z:5},{x:7,z:4},{x:8,z:4},{x:10,z:4},{x:11,z:4},{x:10,z:2},{x:10,z:3},{x:13,z:3},{x:12,z:4},{x:13,z:4},{x:13,z:2},{x:13,z:1},{x:11,z:2},{x:5,z:4},{x:5,z:5},{x:4,z:4},{x:1,z:7},{x:2,z:7},{x:4,z:7},{x:15,z:21},{x:1,z:21},{x:2,z:21},{x:3,z:21},{x:3,z:20},{x:4,z:8},{x:4,z:9},{x:4,z:11},{x:2,z:11},{x:3,z:11},{x:2,z:8},{x:2,z:9},{x:9,z:10},{x:9,z:12},{x:11,z:12},{x:11,z:10},{x:15,z:2},{x:14,z:2},{x:15,z:5},{x:15,z:4},{x:22,z:4},{x:21,z:7},{x:20,z:7},{x:18,z:7},{x:18,z:6},{x:15,z:6},{x:16,z:8},{x:15,z:8},{x:20,z:8},{x:20,z:9},{x:19,z:9},{x:14,z:8},{x:14,z:9},{x:14,z:10},{x:14,z:11},{x:15,z:13},{x:13,z:13},{x:12,z:13},{x:11,z:13},{x:9,z:13},{x:9,z:14},{x:9,z:16},{x:11,z:17},{x:10,z:17},{x:9,z:17},{x:12,z:15},{x:14,z:15},{x:14,z:16},{x:14,z:17},{x:14,z:18},{x:10,z:18},{x:10,z:19},{x:11,z:20},{x:10,z:20},{x:12,z:17},{x:2,z:13},{x:1,z:13},{x:4,z:13},{x:5,z:13},{x:5,z:11},{x:5,z:12},{x:6,z:8},{x:5,z:8},{x:11,z:8},{x:10,z:8},{x:9,z:8},{x:12,z:8},{x:12,z:9},{x:12,z:10},{x:14,z:6},{x:13,z:6},{x:12,z:6},{x:9,z:6},{x:11,z:6},{x:17,z:21},{x:3,z:15},{x:2,z:15},{x:2,z:16},{x:2,z:18},{x:2,z:17},{x:3,z:18},{x:5,z:18},{x:4,z:18},{x:6,z:18},{x:6,z:17},{x:6,z:16},{x:5,z:16},{x:7,z:11},{x:6,z:13},{x:8,z:16},{x:5,z:19},{x:5,z:20},{x:7,z:19},{x:8,z:19},{x:8,z:20},{x:8,z:21},{x:7,z:21},{x:7,z:18},{x:10,z:22},{x:5,z:22},{x:7,z:14},{x:7,z:13},{x:5,z:14},{x:9,z:15},{x:13,z:22},{x:18,z:12},{x:21,z:10},{x:21,z:9},{x:21,z:22},{x:19,z:16},{x:19,z:17},{x:20,z:21},{x:14,z:12},{x:14,z:13},{x:8,z:8},{x:7,z:9},{x:7,z:8},{x:18,z:8},{x:18,z:9},{x:4,z:10},{x:11,z:15},{x:11,z:16},{x:7,z:7},{x:6,z:7},{x:7,z:6},{x:10,z:6},{x:17,z:8},{x:17,z:4},{x:20,z:2},{x:19,z:5},{x:12,z:5},{x:13,z:9},{x:7,z:10},{x:7,z:16},{x:5,z:15}]},{characterPlacement:{x:22,z:22},name:"Pierre l'Aigle",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:8,z:10},{x:7,z:10},{x:5,z:10},{x:6,z:10},{x:17,z:5},{x:17,z:7},{x:17,z:6},{x:16,z:7},{x:15,z:6},{x:14,z:5},{x:6,z:6},{x:6,z:7},{x:6,z:8},{x:7,z:8},{x:15,z:7},{x:15,z:5},{x:8,z:8},{x:9,z:8},{x:10,z:8},{x:10,z:9},{x:3,z:7},{x:1,z:7},{x:2,z:7},{x:2,z:9},{x:3,z:9},{x:3,z:12},{x:3,z:11},{x:4,z:12},{x:6,z:12},{x:5,z:12},{x:5,z:13},{x:5,z:14},{x:1,z:22},{x:3,z:22},{x:3,z:21},{x:3,z:20},{x:3,z:19},{x:1,z:20},{x:1,z:18},{x:4,z:19},{x:9,z:12},{x:10,z:12},{x:10,z:11},{x:10,z:10},{x:10,z:14},{x:11,z:8},{x:11,z:7},{x:11,z:6},{x:12,z:5},{x:11,z:5},{x:13,z:5},{x:17,z:4},{x:18,z:4},{x:19,z:4},{x:19,z:5},{x:20,z:6},{x:19,z:6},{x:21,z:6},{x:21,z:7},{x:22,z:7},{x:2,z:14},{x:3,z:14},{x:1,z:14},{x:4,z:14},{x:3,z:8},{x:5,z:8},{x:5,z:9},{x:17,z:16},{x:15,z:16},{x:21,z:22},{x:5,z:22},{x:5,z:21},{x:6,z:21},{x:8,z:21},{x:7,z:21},{x:9,z:21},{x:9,z:20},{x:11,z:21},{x:12,z:21},{x:12,z:22},{x:22,z:19},{x:21,z:21},{x:20,z:19},{x:20,z:18},{x:20,z:17},{x:19,z:19},{x:18,z:19},{x:17,z:19},{x:17,z:17},{x:18,z:18},{x:18,z:17},{x:18,z:16},{x:16,z:20},{x:16,z:19},{x:14,z:13},{x:15,z:13},{x:16,z:13},{x:16,z:12},{x:16,z:11},{x:17,z:11},{x:18,z:11},{x:19,z:11},{x:20,z:11},{x:21,z:11},{x:22,z:11},{x:13,z:19},{x:15,z:19},{x:14,z:19},{x:14,z:18},{x:13,z:18},{x:9,z:17},{x:10,z:17},{x:10,z:16},{x:9,z:16},{x:2,z:12},{x:2,z:11},{x:2,z:16},{x:3,z:16},{x:5,z:16},{x:4,z:17},{x:3,z:17},{x:5,z:17},{x:9,z:14},{x:8,z:14},{x:7,z:14},{x:13,z:16},{x:14,z:16},{x:19,z:21},{x:18,z:21},{x:18,z:22},{x:16,z:22},{x:15,z:22},{x:14,z:21},{x:14,z:22},{x:12,z:19},{x:15,z:18},{x:12,z:18},{x:9,z:19},{x:11,z:19},{x:13,z:13},{x:12,z:13},{x:12,z:14},{x:11,z:14},{x:11,z:15},{x:22,z:18},{x:22,z:16},{x:22,z:15},{x:21,z:15},{x:20,z:15},{x:20,z:14},{x:18,z:15},{x:16,z:14},{x:14,z:15},{x:18,z:13},{x:19,z:13},{x:20,z:13},{x:22,z:13},{x:11,z:17},{x:5,z:15},{x:7,z:16},{x:7,z:17},{x:6,z:17},{x:6,z:20},{x:6,z:19},{x:8,z:19},{x:12,z:11},{x:15,z:9},{x:15,z:8},{x:16,z:9},{x:17,z:9},{x:19,z:7},{x:21,z:9},{x:21,z:8},{x:19,z:9},{x:20,z:9},{x:12,z:7},{x:14,z:9},{x:14,z:7},{x:13,z:11},{x:14,z:11},{x:13,z:12},{x:12,z:9},{x:21,z:2},{x:5,z:5},{x:5,z:6},{x:3,z:5},{x:3,z:4},{x:1,z:4},{x:2,z:6},{x:2,z:2},{x:4,z:2},{x:3,z:2},{x:8,z:1},{x:8,z:2},{x:7,z:2},{x:5,z:2},{x:5,z:1},{x:5,z:4},{x:6,z:4},{x:8,z:5},{x:8,z:4},{x:7,z:4},{x:9,z:2},{x:10,z:2},{x:12,z:2},{x:12,z:3},{x:13,z:2},{x:10,z:4},{x:10,z:5},{x:8,z:6},{x:10,z:6},{x:13,z:1},{x:18,z:2},{x:20,z:2},{x:19,z:2},{x:21,z:4},{x:22,z:4},{x:19,z:3},{x:16,z:2},{x:15,z:3},{x:15,z:2},{x:14,z:2},{x:14,z:3},{x:7,z:12}]},{characterPlacement:{x:15,z:18},name:"AraLesPaquerettes",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:2,z:2},{x:4,z:1},{x:6,z:1},{x:4,z:3},{x:2,z:4},{x:2,z:7},{x:2,z:5},{x:2,z:6},{x:4,z:4},{x:3,z:4},{x:4,z:2},{x:6,z:6},{x:4,z:7},{x:5,z:4},{x:8,z:2},{x:8,z:3},{x:8,z:4},{x:6,z:4},{x:6,z:2},{x:21,z:4},{x:22,z:2},{x:7,z:2},{x:11,z:2},{x:10,z:2},{x:11,z:1},{x:9,z:4},{x:10,z:4},{x:10,z:5},{x:2,z:23},{x:5,z:23},{x:12,z:23},{x:13,z:17},{x:16,z:20},{x:14,z:19},{x:13,z:19},{x:14,z:17},{x:14,z:16},{x:18,z:17},{x:20,z:17},{x:18,z:20},{x:19,z:20},{x:21,z:17},{x:22,z:17},{x:21,z:19},{x:21,z:20},{x:17,z:21},{x:19,z:17},{x:20,z:19},{x:17,z:17},{x:15,z:16},{x:15,z:15},{x:16,z:15},{x:18,z:16},{x:19,z:15},{x:18,z:15},{x:16,z:14},{x:16,z:21},{x:18,z:21},{x:20,z:22},{x:13,z:20},{x:13,z:21},{x:14,z:21},{x:11,z:22},{x:12,z:20},{x:11,z:20},{x:17,z:18},{x:11,z:17},{x:11,z:18},{x:9,z:21},{x:9,z:20},{x:8,z:21},{x:7,z:22},{x:9,z:19},{x:8,z:19},{x:8,z:18},{x:10,z:17},{x:8,z:16},{x:10,z:16},{x:10,z:15},{x:12,z:15},{x:11,z:15},{x:7,z:16},{x:7,z:18},{x:19,z:13},{x:18,z:13},{x:18,z:12},{x:21,z:13},{x:21,z:14},{x:21,z:15},{x:19,z:12},{x:19,z:11},{x:20,z:11},{x:21,z:10},{x:21,z:8},{x:20,z:10},{x:20,z:9},{x:22,z:8},{x:20,z:8},{x:19,z:19},{x:15,z:13},{x:16,z:13},{x:14,z:11},{x:14,z:12},{x:12,z:11},{x:12,z:12},{x:12,z:13},{x:10,z:13},{x:11,z:13},{x:14,z:13},{x:12,z:10},{x:13,z:9},{x:12,z:9},{x:14,z:9},{x:15,z:9},{x:16,z:11},{x:16,z:10},{x:16,z:9},{x:8,z:15},{x:6,z:16},{x:5,z:17},{x:5,z:16},{x:5,z:18},{x:4,z:18},{x:6,z:20},{x:5,z:20},{x:8,z:22},{x:5,z:21},{x:3,z:21},{x:4,z:21},{x:3,z:18},{x:2,z:17},{x:2,z:16},{x:2,z:21},{x:1,z:20},{x:2,z:20},{x:1,z:14},{x:3,z:14},{x:3,z:15},{x:3,z:16},{x:2,z:18},{x:8,z:13},{x:7,z:13},{x:6,z:15},{x:7,z:15},{x:5,z:14},{x:5,z:15},{x:7,z:12},{x:4,z:11},{x:6,z:11},{x:6,z:9},{x:6,z:10},{x:1,z:12},{x:3,z:13},{x:3,z:12},{x:7,z:11},{x:2,z:9},{x:3,z:9},{x:18,z:9},{x:18,z:8},{x:18,z:7},{x:17,z:7},{x:18,z:6},{x:20,z:6},{x:19,z:6},{x:19,z:4},{x:20,z:4},{x:19,z:5},{x:22,z:6},{x:21,z:2},{x:19,z:3},{x:19,z:2},{x:17,z:1},{x:18,z:4},{x:16,z:4},{x:16,z:5},{x:15,z:7},{x:15,z:6},{x:14,z:7},{x:13,z:7},{x:7,z:6},{x:8,z:6},{x:5,z:7},{x:4,z:5},{x:10,z:6},{x:10,z:8},{x:10,z:7},{x:9,z:8},{x:8,z:8},{x:8,z:7},{x:6,z:7},{x:4,z:10},{x:4,z:12},{x:1,z:10},{x:3,z:10},{x:1,z:9},{x:16,z:12},{x:9,z:11},{x:9,z:10},{x:10,z:9},{x:10,z:10},{x:13,z:6},{x:13,z:5},{x:13,z:4},{x:14,z:3},{x:14,z:2},{x:16,z:3},{x:15,z:5},{x:13,z:3},{x:11,z:7},{x:12,z:4},{x:11,z:6}]},{characterPlacement:{x:2,z:21},name:"Araklette",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:3,z:20},{x:3,z:19},{x:3,z:18},{x:3,z:17},{x:3,z:16},{x:3,z:3},{x:3,z:4},{x:3,z:5},{x:3,z:6},{x:4,z:3},{x:5,z:3},{x:7,z:3},{x:6,z:3},{x:8,z:3},{x:5,z:5},{x:6,z:5},{x:7,z:5},{x:5,z:7},{x:5,z:8},{x:3,z:8},{x:3,z:7},{x:4,z:20},{x:5,z:20},{x:7,z:20},{x:8,z:20},{x:5,z:18},{x:6,z:18},{x:7,z:18},{x:5,z:17},{x:5,z:16},{x:8,z:18},{x:8,z:17},{x:8,z:15},{x:7,z:15},{x:6,z:15},{x:5,z:15},{x:9,z:20},{x:10,z:20},{x:10,z:19},{x:10,z:18},{x:10,z:17},{x:10,z:16},{x:10,z:15},{x:10,z:13},{x:9,z:13},{x:7,z:13},{x:8,z:13},{x:6,z:13},{x:5,z:13},{x:4,z:13},{x:3,z:13},{x:3,z:14},{x:3,z:15},{x:6,z:8},{x:8,z:8},{x:8,z:7},{x:8,z:6},{x:8,z:5},{x:9,z:3},{x:10,z:3},{x:10,z:5},{x:10,z:4},{x:10,z:6},{x:10,z:7},{x:10,z:9},{x:10,z:8},{x:10,z:10},{x:8,z:10},{x:7,z:10},{x:6,z:10},{x:5,z:10},{x:4,z:10},{x:3,z:10},{x:20,z:20},{x:19,z:20},{x:13,z:20},{x:14,z:20},{x:17,z:20},{x:18,z:20},{x:13,z:19},{x:13,z:18},{x:15,z:18},{x:16,z:18},{x:17,z:18},{x:18,z:18},{x:20,z:19},{x:20,z:18},{x:20,z:17},{x:20,z:16},{x:20,z:14},{x:20,z:15},{x:20,z:13},{x:13,z:13},{x:15,z:13},{x:16,z:13},{x:17,z:13},{x:18,z:13},{x:19,z:13},{x:13,z:14},{x:13,z:16},{x:13,z:15},{x:13,z:17},{x:15,z:17},{x:16,z:15},{x:15,z:15},{x:18,z:15},{x:17,z:15},{x:18,z:17},{x:18,z:16},{x:13,z:8},{x:13,z:6},{x:13,z:5},{x:13,z:4},{x:13,z:3},{x:14,z:3},{x:17,z:3},{x:16,z:3},{x:19,z:3},{x:20,z:3},{x:20,z:4},{x:20,z:5},{x:20,z:6},{x:20,z:7},{x:20,z:9},{x:20,z:8},{x:20,z:10},{x:19,z:10},{x:18,z:10},{x:17,z:10},{x:16,z:10},{x:15,z:10},{x:14,z:10},{x:15,z:5},{x:18,z:5},{x:18,z:6},{x:18,z:7},{x:18,z:8},{x:17,z:8},{x:16,z:8},{x:15,z:8},{x:15,z:6},{x:8,z:9},{x:10,z:11},{x:11,z:10},{x:13,z:11},{x:13,z:12},{x:11,z:13},{x:12,z:13},{x:8,z:11},{x:8,z:12},{x:11,z:15},{x:15,z:14},{x:15,z:11},{x:12,z:8},{x:11,z:8},{x:14,z:8},{x:9,z:15},{x:15,z:20},{x:18,z:3},{x:15,z:3},{x:1,z:2},{x:20,z:21},{x:13,z:10},{x:21,z:21},{x:21,z:22},{x:22,z:22},{x:21,z:1},{x:21,z:2},{x:20,z:2},{x:22,z:1},{x:7,z:2},{x:10,z:1},{x:15,z:2},{x:18,z:1},{x:4,z:1},{x:6,z:2},{x:17,z:5},{x:14,z:6},{x:3,z:2},{x:3,z:1}]},{characterPlacement:{x:2,z:17},name:"KerauChane",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:20,z:22},{x:20,z:21},{x:20,z:20},{x:20,z:19},{x:21,z:19},{x:21,z:17},{x:18,z:21},{x:18,z:20},{x:20,z:17},{x:18,z:18},{x:18,z:17},{x:2,z:4},{x:2,z:3},{x:2,z:2},{x:2,z:5},{x:2,z:6},{x:2,z:7},{x:3,z:2},{x:4,z:2},{x:3,z:8},{x:2,z:8},{x:3,z:5},{x:4,z:8},{x:5,z:8},{x:4,z:5},{x:5,z:2},{x:8,z:2},{x:8,z:3},{x:9,z:5},{x:9,z:6},{x:9,z:7},{x:10,z:8},{x:11,z:7},{x:11,z:6},{x:11,z:5},{x:12,z:4},{x:12,z:3},{x:12,z:2},{x:14,z:8},{x:14,z:6},{x:14,z:7},{x:14,z:5},{x:15,z:4},{x:16,z:3},{x:15,z:3},{x:16,z:2},{x:17,z:3},{x:17,z:4},{x:18,z:5},{x:18,z:6},{x:18,z:7},{x:18,z:8},{x:15,z:6},{x:16,z:6},{x:17,z:6},{x:20,z:8},{x:21,z:8},{x:21,z:7},{x:20,z:7},{x:20,z:5},{x:21,z:5},{x:21,z:4},{x:20,z:4},{x:20,z:3},{x:21,z:3},{x:21,z:2},{x:20,z:2},{x:19,z:21},{x:16,z:20},{x:16,z:18},{x:16,z:16},{x:18,z:15},{x:19,z:15},{x:20,z:15},{x:21,z:15},{x:15,z:20},{x:14,z:20},{x:13,z:20},{x:12,z:20},{x:10,z:18},{x:11,z:20},{x:10,z:20},{x:9,z:18},{x:9,z:20},{x:9,z:19},{x:14,z:18},{x:15,z:18},{x:13,z:18},{x:12,z:18},{x:18,z:19},{x:16,z:15},{x:16,z:13},{x:17,z:13},{x:18,z:13},{x:19,z:13},{x:21,z:13},{x:21,z:12},{x:21,z:11},{x:21,z:10},{x:21,z:9},{x:21,z:6},{x:16,z:1},{x:18,z:9},{x:18,z:10},{x:18,z:11},{x:19,z:11},{x:16,z:11},{x:16,z:10},{x:16,z:9},{x:16,z:8},{x:15,z:10},{x:14,z:10},{x:13,z:10},{x:15,z:13},{x:13,z:13},{x:13,z:14},{x:13,z:15},{x:13,z:16},{x:12,z:16},{x:11,z:16},{x:10,z:16},{x:10,z:17},{x:12,z:17},{x:14,z:15},{x:13,z:11},{x:12,z:10},{x:11,z:10},{x:10,z:10},{x:10,z:9},{x:7,z:1},{x:7,z:2},{x:7,z:3},{x:7,z:4},{x:7,z:5},{x:7,z:6},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:8,z:9},{x:10,z:11},{x:9,z:11},{x:8,z:11},{x:7,z:11},{x:6,z:11},{x:5,z:11},{x:4,z:11},{x:4,z:10},{x:2,z:10},{x:2,z:9},{x:1,z:12},{x:1,z:13},{x:2,z:13},{x:3,z:13},{x:4,z:13},{x:6,z:6},{x:6,z:4},{x:3,z:3},{x:3,z:7},{x:5,z:9},{x:5,z:10},{x:17,z:16},{x:18,z:16},{x:12,z:13},{x:11,z:13},{x:8,z:12},{x:8,z:13},{x:8,z:14},{x:10,z:14},{x:8,z:16},{x:7,z:16},{x:5,z:16},{x:6,z:16},{x:7,z:18},{x:7,z:19},{x:7,z:20},{x:5,z:15},{x:5,z:17},{x:4,z:17},{x:4,z:18},{x:4,z:19},{x:4,z:20},{x:4,z:21},{x:6,z:21},{x:7,z:21},{x:10,z:21},{x:12,z:22},{x:14,z:21},{x:16,z:21},{x:14,z:13},{x:19,z:12},{x:21,z:14},{x:22,z:17},{x:21,z:21},{x:6,z:22},{x:6,z:14},{x:6,z:13},{x:7,z:12},{x:7,z:17},{x:2,z:16},{x:2,z:19}]},{characterPlacement:{x:4,z:22},name:"51 PR",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:2,z:0},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:1,z:23},{x:3,z:22},{x:3,z:21},{x:2,z:21},{x:1,z:19},{x:2,z:19},{x:4,z:19},{x:5,z:19},{x:5,z:20},{x:2,z:18},{x:4,z:18},{x:5,z:22},{x:7,z:20},{x:8,z:20},{x:8,z:19},{x:8,z:18},{x:7,z:18},{x:4,z:17},{x:2,z:16},{x:2,z:15},{x:2,z:14},{x:4,z:15},{x:1,z:14},{x:5,z:17},{x:5,z:15},{x:6,z:14},{x:5,z:14},{x:3,z:12},{x:2,z:12},{x:2,z:10},{x:4,z:10},{x:3,z:10},{x:5,z:10},{x:5,z:11},{x:5,z:12},{x:1,z:8},{x:2,z:8},{x:4,z:8},{x:4,z:7},{x:7,z:22},{x:9,z:20},{x:9,z:21},{x:2,z:6},{x:2,z:5},{x:3,z:5},{x:4,z:5},{x:1,z:3},{x:2,z:3},{x:2,z:1},{x:3,z:3},{x:4,z:1},{x:5,z:3},{x:6,z:3},{x:6,z:2},{x:8,z:1},{x:8,z:2},{x:8,z:3},{x:7,z:3},{x:6,z:4},{x:6,z:6},{x:6,z:8},{x:6,z:7},{x:7,z:8},{x:8,z:5},{x:8,z:8},{x:8,z:7},{x:7,z:16},{x:8,z:16},{x:8,z:15},{x:8,z:14},{x:9,z:15},{x:7,z:12},{x:7,z:11},{x:8,z:9},{x:9,z:8},{x:8,z:11},{x:10,z:5},{x:10,z:6},{x:10,z:4},{x:10,z:2},{x:11,z:2},{x:12,z:2},{x:12,z:3},{x:13,z:3},{x:14,z:3},{x:14,z:2},{x:14,z:1},{x:11,z:8},{x:11,z:9},{x:11,z:10},{x:10,z:10},{x:12,z:8},{x:12,z:7},{x:12,z:5},{x:13,z:5},{x:14,z:7},{x:16,z:3},{x:16,z:2},{x:17,z:2},{x:17,z:1},{x:15,z:5},{x:16,z:5},{x:17,z:5},{x:18,z:4},{x:18,z:5},{x:17,z:6},{x:15,z:7},{x:17,z:8},{x:17,z:9},{x:16,z:9},{x:15,z:9},{x:14,z:8},{x:14,z:9},{x:19,z:2},{x:20,z:2},{x:21,z:2},{x:21,z:3},{x:21,z:4},{x:22,z:4},{x:20,z:4},{x:22,z:6},{x:21,z:6},{x:20,z:6},{x:20,z:7},{x:19,z:7},{x:22,z:8},{x:22,z:9},{x:21,z:9},{x:20,z:9},{x:19,z:9},{x:20,z:10},{x:22,z:11},{x:22,z:12},{x:20,z:11},{x:22,z:13},{x:21,z:13},{x:14,z:11},{x:16,z:11},{x:18,z:11},{x:13,z:11},{x:11,z:12},{x:10,z:12},{x:11,z:13},{x:10,z:13},{x:16,z:12},{x:16,z:13},{x:16,z:14},{x:15,z:13},{x:17,z:14},{x:18,z:14},{x:18,z:13},{x:13,z:13},{x:17,z:11},{x:11,z:15},{x:11,z:16},{x:11,z:17},{x:10,z:17},{x:12,z:15},{x:10,z:18},{x:13,z:17},{x:13,z:18},{x:13,z:19},{x:12,z:19},{x:12,z:20},{x:11,z:20},{x:11,z:22},{x:12,z:22},{x:14,z:21},{x:14,z:22},{x:14,z:15},{x:16,z:16},{x:16,z:17},{x:15,z:17},{x:15,z:21},{x:16,z:21},{x:15,z:20},{x:15,z:19},{x:16,z:19},{x:18,z:19},{x:18,z:21},{x:19,z:21},{x:20,z:21},{x:21,z:20},{x:22,z:22},{x:20,z:20},{x:17,z:17},{x:19,z:17},{x:19,z:16},{x:21,z:16},{x:21,z:17},{x:20,z:16},{x:21,z:14},{x:20,z:14},{x:21,z:18},{x:22,z:17},{x:20,z:13}]},{characterPlacement:{x:1,z:1},name:"Ile de la Rage",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:2,z:0},{x:3,z:0},{x:4,z:0},{x:5,z:0},{x:6,z:0},{x:7,z:0},{x:8,z:0},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:23,z:13},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:0,z:22},{x:23,z:21},{x:7,z:12},{x:1,z:12},{x:3,z:12},{x:4,z:12},{x:2,z:12},{x:6,z:12},{x:5,z:12},{x:8,z:12},{x:9,z:12},{x:10,z:12},{x:11,z:12},{x:12,z:12},{x:13,z:12},{x:14,z:12},{x:15,z:12},{x:16,z:12},{x:17,z:12},{x:18,z:12},{x:12,z:2},{x:12,z:4},{x:12,z:5},{x:12,z:6},{x:12,z:7},{x:12,z:9},{x:12,z:10},{x:12,z:11},{x:12,z:14},{x:12,z:13},{x:12,z:15},{x:12,z:16},{x:12,z:17},{x:12,z:18},{x:12,z:21},{x:12,z:22},{x:1,z:6},{x:2,z:6},{x:3,z:6},{x:4,z:6},{x:6,z:6},{x:7,z:6},{x:8,z:6},{x:9,z:6},{x:10,z:6},{x:6,z:1},{x:6,z:2},{x:6,z:4},{x:6,z:5},{x:6,z:10},{x:6,z:11},{x:6,z:3},{x:14,z:2},{x:15,z:3},{x:17,z:5},{x:22,z:11},{x:14,z:10},{x:15,z:9},{x:16,z:8},{x:19,z:5},{x:20,z:4},{x:21,z:3},{x:20,z:9},{x:19,z:8},{x:16,z:7},{x:16,z:6},{x:16,z:5},{x:18,z:5},{x:17,z:13},{x:17,z:15},{x:17,z:16},{x:17,z:17},{x:17,z:18},{x:17,z:20},{x:17,z:21},{x:13,z:17},{x:14,z:17},{x:16,z:17},{x:18,z:17},{x:21,z:17},{x:22,z:17},{x:1,z:13},{x:3,z:15},{x:4,z:16},{x:5,z:17},{x:6,z:18},{x:8,z:20},{x:9,z:21},{x:6,z:7},{x:11,z:4},{x:10,z:4},{x:10,z:3},{x:10,z:2},{x:6,z:8},{x:5,z:8},{x:4,z:8},{x:4,z:10},{x:4,z:9},{x:1,z:8},{x:3,z:8},{x:2,z:10},{x:2,z:11},{x:3,z:5},{x:3,z:4},{x:3,z:3},{x:2,z:3},{x:4,z:3},{x:8,z:8},{x:8,z:9},{x:8,z:10},{x:9,z:9},{x:10,z:8},{x:10,z:10},{x:10,z:9},{x:11,z:6},{x:11,z:9},{x:14,z:6},{x:14,z:8},{x:15,z:8},{x:14,z:5},{x:14,z:4},{x:15,z:4},{x:13,z:10},{x:13,z:2},{x:15,z:2},{x:17,z:1},{x:7,z:2},{x:9,z:2},{x:8,z:4},{x:9,z:4},{x:7,z:1},{x:19,z:2},{x:20,z:2},{x:21,z:2},{x:18,z:3},{x:17,z:3},{x:20,z:6},{x:21,z:6},{x:21,z:4},{x:18,z:8},{x:21,z:7},{x:20,z:11},{x:21,z:11},{x:20,z:10},{x:21,z:9},{x:17,z:10},{x:18,z:10},{x:19,z:10},{x:15,z:10},{x:19,z:14},{x:19,z:15},{x:20,z:15},{x:20,z:14},{x:20,z:13},{x:19,z:16},{x:21,z:14},{x:21,z:15},{x:21,z:13},{x:22,z:23},{x:23,z:23},{x:23,z:22},{x:16,z:15},{x:15,z:15},{x:14,z:15},{x:14,z:14},{x:14,z:18},{x:14,z:19},{x:15,z:19},{x:19,z:18},{x:19,z:19},{x:19,z:20},{x:19,z:21},{x:20,z:21},{x:21,z:21},{x:21,z:20},{x:21,z:19},{x:18,z:18},{x:12,z:20},{x:13,z:21},{x:14,z:21},{x:15,z:21},{x:1,z:22},{x:3,z:20},{x:5,z:18},{x:7,z:16},{x:8,z:15},{x:9,z:14},{x:10,z:13},{x:11,z:13},{x:5,z:16},{x:7,z:18},{x:9,z:22},{x:8,z:18},{x:9,z:18},{x:10,z:18},{x:11,z:20},{x:8,z:19},{x:9,z:20},{x:10,z:16},{x:10,z:17},{x:7,z:15},{x:7,z:14},{x:9,z:13},{x:0,z:13},{x:0,z:14},{x:5,z:13},{x:5,z:14},{x:2,z:13},{x:3,z:13},{x:2,z:18},{x:2,z:19},{x:2,z:20},{x:2,z:17},{x:2,z:15},{x:4,z:18},{x:4,z:19},{x:6,z:23},{x:7,z:23},{x:5,z:23},{x:2,z:22},{x:2,z:23},{x:1,z:23},{x:3,z:22},{x:5,z:21},{x:6,z:21},{x:7,z:21},{x:3,z:23},{x:4,z:23},{x:6,z:20}]},{characterPlacement:{x:1,z:12},name:"Dans le Soleil",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:22,z:23},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:3,z:22},{x:3,z:21},{x:2,z:20},{x:3,z:20},{x:1,z:11},{x:2,z:11},{x:1,z:13},{x:2,z:13},{x:3,z:13},{x:3,z:14},{x:3,z:15},{x:2,z:15},{x:3,z:11},{x:3,z:10},{x:3,z:9},{x:2,z:9},{x:2,z:17},{x:3,z:17},{x:3,z:18},{x:2,z:18},{x:5,z:15},{x:6,z:15},{x:5,z:14},{x:5,z:13},{x:5,z:11},{x:5,z:10},{x:5,z:9},{x:6,z:9},{x:7,z:12},{x:7,z:11},{x:7,z:13},{x:8,z:13},{x:9,z:13},{x:9,z:11},{x:8,z:11},{x:5,z:20},{x:5,z:21},{x:6,z:20},{x:5,z:17},{x:5,z:18},{x:6,z:18},{x:6,z:17},{x:7,z:15},{x:8,z:15},{x:8,z:16},{x:8,z:17},{x:8,z:18},{x:9,z:18},{x:9,z:19},{x:7,z:20},{x:7,z:21},{x:7,z:22},{x:10,z:14},{x:10,z:13},{x:10,z:15},{x:10,z:16},{x:11,z:16},{x:11,z:17},{x:11,z:18},{x:9,z:22},{x:9,z:20},{x:10,z:20},{x:11,z:22},{x:11,z:20},{x:12,z:18},{x:13,z:18},{x:13,z:19},{x:13,z:20},{x:13,z:21},{x:13,z:22},{x:4,z:7},{x:3,z:7},{x:2,z:7},{x:2,z:6},{x:1,z:4},{x:2,z:4},{x:4,z:3},{x:4,z:4},{x:4,z:5},{x:5,z:7},{x:5,z:5},{x:6,z:5},{x:7,z:5},{x:3,z:2},{x:4,z:2},{x:2,z:2},{x:7,z:1},{x:7,z:2},{x:6,z:2},{x:6,z:3},{x:7,z:3},{x:8,z:3},{x:9,z:3},{x:11,z:3},{x:8,z:5},{x:9,z:5},{x:9,z:6},{x:9,z:7},{x:6,z:7},{x:7,z:7},{x:7,z:9},{x:9,z:8},{x:9,z:9},{x:10,z:9},{x:12,z:9},{x:11,z:9},{x:12,z:3},{x:12,z:4},{x:12,z:5},{x:11,z:5},{x:11,z:6},{x:11,z:7},{x:13,z:7},{x:12,z:7},{x:10,z:1},{x:13,z:1},{x:15,z:1},{x:15,z:2},{x:15,z:3},{x:15,z:4},{x:22,z:11},{x:22,z:13},{x:21,z:13},{x:21,z:11},{x:21,z:10},{x:19,z:10},{x:19,z:14},{x:19,z:13},{x:21,z:14},{x:19,z:11},{x:18,z:11},{x:18,z:13},{x:19,z:15},{x:19,z:16},{x:19,z:17},{x:18,z:17},{x:17,z:17},{x:17,z:16},{x:17,z:15},{x:16,z:15},{x:21,z:15},{x:21,z:16},{x:21,z:17},{x:21,z:18},{x:21,z:20},{x:21,z:21},{x:20,z:21},{x:19,z:21},{x:19,z:20},{x:20,z:20},{x:18,z:18},{x:17,z:21},{x:15,z:21},{x:15,z:22},{x:16,z:21},{x:15,z:19},{x:14,z:19},{x:16,z:19},{x:19,z:18},{x:10,z:10},{x:10,z:11},{x:12,z:11},{x:12,z:12},{x:12,z:13},{x:12,z:14},{x:13,z:15},{x:13,z:16},{x:14,z:16},{x:14,z:15},{x:14,z:14},{x:14,z:13},{x:14,z:11},{x:14,z:10},{x:13,z:11},{x:16,z:13},{x:16,z:14},{x:16,z:12},{x:17,z:11},{x:16,z:11},{x:14,z:7},{x:14,z:6},{x:15,z:6},{x:16,z:6},{x:15,z:8},{x:17,z:8},{x:16,z:8},{x:15,z:7},{x:19,z:8},{x:19,z:9},{x:19,z:7},{x:19,z:6},{x:20,z:6},{x:21,z:9},{x:21,z:8},{x:21,z:6},{x:21,z:5},{x:17,z:6},{x:17,z:5},{x:17,z:4},{x:17,z:3},{x:17,z:2},{x:19,z:4},{x:19,z:3},{x:20,z:3},{x:20,z:4},{x:20,z:1},{x:22,z:1},{x:21,z:1},{x:22,z:3},{x:20,z:5},{x:17,z:10}]},{characterPlacement:{x:17,z:18},name:"Chapel'hein",level:[{x:0,z:0},{x:0,z:23},{x:1,z:0},{x:1,z:23},{x:2,z:0},{x:2,z:23},{x:3,z:0},{x:3,z:23},{x:4,z:0},{x:4,z:23},{x:5,z:0},{x:5,z:23},{x:6,z:0},{x:6,z:23},{x:7,z:0},{x:7,z:23},{x:8,z:0},{x:8,z:23},{x:9,z:0},{x:9,z:23},{x:10,z:0},{x:10,z:23},{x:11,z:0},{x:11,z:23},{x:12,z:0},{x:12,z:23},{x:13,z:0},{x:13,z:23},{x:14,z:0},{x:14,z:23},{x:15,z:0},{x:15,z:23},{x:16,z:0},{x:16,z:23},{x:17,z:0},{x:17,z:23},{x:18,z:0},{x:18,z:23},{x:19,z:0},{x:19,z:23},{x:20,z:0},{x:20,z:23},{x:21,z:0},{x:21,z:23},{x:22,z:0},{x:23,z:0},{x:23,z:23},{x:0,z:1},{x:23,z:1},{x:0,z:2},{x:23,z:2},{x:0,z:3},{x:23,z:3},{x:0,z:4},{x:23,z:4},{x:0,z:5},{x:23,z:5},{x:0,z:6},{x:23,z:6},{x:0,z:7},{x:23,z:7},{x:0,z:8},{x:23,z:8},{x:0,z:9},{x:23,z:9},{x:0,z:10},{x:23,z:10},{x:0,z:11},{x:23,z:11},{x:0,z:12},{x:23,z:12},{x:0,z:13},{x:23,z:13},{x:0,z:14},{x:23,z:14},{x:0,z:15},{x:23,z:15},{x:0,z:16},{x:23,z:16},{x:0,z:17},{x:23,z:17},{x:0,z:18},{x:23,z:18},{x:0,z:19},{x:23,z:19},{x:0,z:20},{x:23,z:20},{x:0,z:21},{x:23,z:21},{x:0,z:22},{x:23,z:22},{x:14,z:1},{x:20,z:22},{x:20,z:21},{x:20,z:20},{x:20,z:19},{x:20,z:18},{x:21,z:19},{x:19,z:17},{x:20,z:17},{x:19,z:16},{x:19,z:15},{x:17,z:15},{x:14,z:15},{x:13,z:15},{x:17,z:17},{x:17,z:16},{x:17,z:19},{x:18,z:19},{x:18,z:21},{x:17,z:21},{x:17,z:22},{x:16,z:19},{x:15,z:21},{x:15,z:22},{x:15,z:19},{x:16,z:17},{x:14,z:18},{x:14,z:17},{x:16,z:15},{x:13,z:21},{x:13,z:20},{x:12,z:20},{x:12,z:19},{x:12,z:17},{x:13,z:17},{x:11,z:22},{x:6,z:22},{x:6,z:21},{x:7,z:20},{x:6,z:20},{x:5,z:20},{x:4,z:20},{x:4,z:21},{x:17,z:14},{x:17,z:13},{x:17,z:12},{x:16,z:12},{x:15,z:12},{x:15,z:11},{x:15,z:10},{x:15,z:9},{x:14,z:11},{x:13,z:11},{x:11,z:11},{x:13,z:10},{x:11,z:12},{x:12,z:13},{x:11,z:13},{x:10,z:13},{x:9,z:13},{x:9,z:14},{x:9,z:15},{x:14,z:14},{x:11,z:15},{x:11,z:16},{x:11,z:17},{x:10,z:17},{x:11,z:19},{x:8,z:20},{x:8,z:21},{x:9,z:21},{x:8,z:19},{x:9,z:19},{x:11,z:20},{x:1,z:2},{x:2,z:2},{x:2,z:3},{x:4,z:2},{x:4,z:1},{x:6,z:2},{x:5,z:2},{x:5,z:3},{x:4,z:4},{x:5,z:4},{x:6,z:4},{x:8,z:1},{x:8,z:2},{x:8,z:4},{x:9,z:4},{x:8,z:5},{x:13,z:3},{x:12,z:3},{x:12,z:4},{x:12,z:6},{x:11,z:4},{x:11,z:6},{x:13,z:6},{x:13,z:7},{x:13,z:8},{x:12,z:8},{x:11,z:10},{x:10,z:10},{x:9,z:7},{x:9,z:8},{x:10,z:8},{x:21,z:15},{x:21,z:17},{x:19,z:14},{x:18,z:12},{x:20,z:13},{x:20,z:12},{x:20,z:11},{x:20,z:10},{x:19,z:10},{x:18,z:10},{x:17,z:10},{x:17,z:9},{x:18,z:8},{x:17,z:7},{x:18,z:7},{x:15,z:7},{x:14,z:7},{x:17,z:6},{x:17,z:5},{x:17,z:4},{x:15,z:5},{x:14,z:5},{x:15,z:3},{x:16,z:3},{x:17,z:3},{x:16,z:2},{x:6,z:18},{x:6,z:17},{x:7,z:17},{x:9,z:17},{x:2,z:21},{x:2,z:20},{x:4,z:19},{x:4,z:18},{x:3,z:18},{x:1,z:18},{x:1,z:21},{x:12,z:2},{x:11,z:2},{x:10,z:2},{x:11,z:1},{x:19,z:12},{x:14,z:12},{x:16,z:13},{x:19,z:8},{x:20,z:8},{x:20,z:7},{x:22,z:12},{x:21,z:10},{x:22,z:15},{x:22,z:21},{x:18,z:1},{x:19,z:1},{x:19,z:2},{x:21,z:2},{x:22,z:2},{x:21,z:3},{x:19,z:4},{x:19,z:5},{x:18,z:5},{x:21,z:5},{x:22,z:5},{x:22,z:7},{x:22,z:8},{x:15,z:4},{x:9,z:10},{x:11,z:8},{x:8,z:11},{x:9,z:11},{x:8,z:7},{x:7,z:7},{x:7,z:8},{x:7,z:9},{x:7,z:12},{x:6,z:12},{x:6,z:10},{x:6,z:13},{x:8,z:15},{x:7,z:15},{x:6,z:16},{x:4,z:16},{x:3,z:16},{x:3,z:15},{x:5,z:14},{x:5,z:13},{x:2,z:15},{x:1,z:15},{x:1,z:17},{x:6,z:5},{x:6,z:7},{x:5,z:7},{x:5,z:8},{x:4,z:8},{x:4,z:5},{x:3,z:5},{x:2,z:5},{x:2,z:6},{x:3,z:8},{x:3,z:6},{x:1,z:9},{x:1,z:8},{x:2,z:10},{x:4,z:10},{x:4,z:11},{x:2,z:11},{x:1,z:13},{x:2,z:13},{x:4,z:13},{x:3,z:13},{x:5,z:10}]}],or=Jt("Home"),vc=Jt(0),Vi=Jt(!0),So=Jt(!1),Np=new CustomEvent("loseGame",{detail:"lose"}),zc=Jt(!1),Eo=Jt(!1),yo=Jt(!0),bo=Jt(!0),Mc=Jt(120),fi=()=>{const n=g=>{zc.value=g},e=()=>{Mc.value=121},t=()=>{Vi.value=!Vi.value,So.value=!0},i=()=>{Vi.value=!0,So.value=!1},s=()=>{bo.value=!bo.value},r=()=>{yo.value=!0,Eo.value=!1},o=()=>{yo.value=!1,Eo.value=!0},a=()=>Math.floor(Math.random()*Yr.length),l=g=>{vc.value=g??a()};return{display:or,chosenLevel:vc,panelIsVisible:Vi,stopEvent:Np,displayMenu:Eo,displayBeginMenu:yo,displayIntro:bo,endgameIsVisible:So,timeRemaining:Mc,win:zc,triggerHome:()=>{or.value="Home"},triggerGame:g=>{l(g),or.value="Game"},triggerArcadeMode:()=>{or.value="Arcade"},selectedLevel:l,choseLevel:a,openPanel:()=>{Vi.value=!0},closePanel:()=>{Vi.value=!1},beginGame:r,redoGame:o,manageIntro:s,manageEndgame:t,restartTime:e,closeEndgame:i,manageWin:n}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bl="171",Op=0,Sc=1,Bp=2,Ph=1,Hp=2,Ln=3,oi=0,Ht=1,Nn=2,ii=0,cs=1,Ec=2,yc=3,bc=4,Vp=5,Ai=100,Gp=101,kp=102,Wp=103,Xp=104,$p=200,qp=201,Yp=202,jp=203,ma=204,ga=205,Kp=206,Zp=207,Jp=208,Qp=209,ex=210,tx=211,nx=212,ix=213,sx=214,_a=0,va=1,za=2,ds=3,Ma=4,Sa=5,Ea=6,ya=7,Tl=0,rx=1,ox=2,si=0,ax=1,lx=2,cx=3,ux=4,hx=5,fx=6,dx=7,Lh=300,ps=301,xs=302,ba=303,Ta=304,ro=306,Un=1e3,Ci=1001,Aa=1002,fn=1003,px=1004,ar=1005,_n=1006,To=1007,Ri=1008,Wn=1009,Dh=1010,Ih=1011,$s=1012,Al=1013,Ii=1014,Bn=1015,Zs=1016,wl=1017,Cl=1018,ms=1020,Uh=35902,Fh=1021,Nh=1022,cn=1023,Oh=1024,Bh=1025,us=1026,gs=1027,Hh=1028,Rl=1029,Vh=1030,Pl=1031,Ll=1033,Lr=33776,Dr=33777,Ir=33778,Ur=33779,wa=35840,Ca=35841,Ra=35842,Pa=35843,La=36196,Da=37492,Ia=37496,Ua=37808,Fa=37809,Na=37810,Oa=37811,Ba=37812,Ha=37813,Va=37814,Ga=37815,ka=37816,Wa=37817,Xa=37818,$a=37819,qa=37820,Ya=37821,Fr=36492,ja=36494,Ka=36495,Gh=36283,Za=36284,Ja=36285,Qa=36286,xx=3200,mx=3201,kh=0,gx=1,ti="",qt="srgb",_s="srgb-linear",jr="linear",it="srgb",Gi=7680,Tc=519,_x=512,vx=513,zx=514,Wh=515,Mx=516,Sx=517,Ex=518,yx=519,Ac=35044,wc="300 es",Hn=2e3,Kr=2001;class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ao=Math.PI/180,el=180/Math.PI;function Js(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yt[n&255]+yt[n>>8&255]+yt[n>>16&255]+yt[n>>24&255]+"-"+yt[e&255]+yt[e>>8&255]+"-"+yt[e>>16&15|64]+yt[e>>24&255]+"-"+yt[t&63|128]+yt[t>>8&255]+"-"+yt[t>>16&255]+yt[t>>24&255]+yt[i&255]+yt[i>>8&255]+yt[i>>16&255]+yt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function bx(n,e){return(n%e+e)%e}function wo(n,e,t){return(1-t)*n+t*e}function bs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xe{constructor(e=0,t=0){Xe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,s,r,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],g=i[8],v=s[0],x=s[3],f=s[6],T=s[1],b=s[4],E=s[7],D=s[2],L=s[5],R=s[8];return r[0]=o*v+a*T+l*D,r[3]=o*x+a*b+l*L,r[6]=o*f+a*E+l*R,r[1]=c*v+u*T+h*D,r[4]=c*x+u*b+h*L,r[7]=c*f+u*E+h*R,r[2]=d*v+p*T+g*D,r[5]=d*x+p*b+g*L,r[8]=d*f+p*E+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+i*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*i)*v,e[2]=(a*i-s*o)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Co.makeScale(e,t)),this}rotate(e){return this.premultiply(Co.makeRotation(-e)),this}translate(e,t){return this.premultiply(Co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Co=new Ge;function Xh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Tx(){const n=qs("canvas");return n.style.display="block",n}const Cc={};function is(n){n in Cc||(Cc[n]=!0,console.warn(n))}function Ax(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function wx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Cx(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Rc=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pc=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rx(){const n={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===it&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===it&&(s.r=hs(s.r),s.g=hs(s.g),s.b=hs(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?jr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[_s]:{primaries:e,whitePoint:i,transfer:jr,toXYZ:Rc,fromXYZ:Pc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:i,transfer:it,toXYZ:Rc,fromXYZ:Pc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),n}const je=Rx();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function hs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ki;class Px{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ki===void 0&&(ki=qs("canvas")),ki.width=e.width,ki.height=e.height;const i=ki.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ki}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Vn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vn(t[i]/255)*255):t[i]=Vn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lx=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Js(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ro(s[o].image)):r.push(Ro(s[o]))}else r=Ro(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Ro(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Px.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Dx=0;class Ft extends zs{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=Ci,s=Ci,r=_n,o=Ri,a=cn,l=Wn,c=Ft.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=Js(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Un:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case Aa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Un:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case Aa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Lh;Ft.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,i=0,s=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],x=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,E=(p+1)/2,D=(f+1)/2,L=(u+d)/4,R=(h+v)/4,U=(g+x)/4;return b>E&&b>D?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=L/i,r=R/i):E>D?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=L/s,r=U/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=R/r,s=U/r),this.set(i,s,r,t),this}let T=Math.sqrt((x-g)*(x-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(x-g)/T,this.y=(h-v)/T,this.z=(d-u)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ix extends zs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Ft(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $h(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Ix{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class qh extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ux extends Ft{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let x=1-a;const f=l*d+c*p+u*g+h*v,T=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const D=Math.sqrt(b),L=Math.atan2(D,f*T);x=Math.sin(x*L)/D,a=Math.sin(a*L)/D}const E=a*T;if(l=l*x+d*E,c=c*x+p*E,u=u*x+g*E,h=h*x+v*E,x===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=D,c*=D,u*=D,h*=D}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Po=new O,Lc=new Qs;class Gn{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,rn):rn.fromBufferAttribute(r,o),rn.applyMatrix4(e.matrixWorld),this.expandByPoint(rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lr.copy(i.boundingBox)),lr.applyMatrix4(e.matrixWorld),this.union(lr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rn),rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),cr.subVectors(this.max,Ts),Wi.subVectors(e.a,Ts),Xi.subVectors(e.b,Ts),$i.subVectors(e.c,Ts),$n.subVectors(Xi,Wi),qn.subVectors($i,Xi),_i.subVectors(Wi,$i);let t=[0,-$n.z,$n.y,0,-qn.z,qn.y,0,-_i.z,_i.y,$n.z,0,-$n.x,qn.z,0,-qn.x,_i.z,0,-_i.x,-$n.y,$n.x,0,-qn.y,qn.x,0,-_i.y,_i.x,0];return!Lo(t,Wi,Xi,$i,cr)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,Wi,Xi,$i,cr))?!1:(ur.crossVectors($n,qn),t=[ur.x,ur.y,ur.z],Lo(t,Wi,Xi,$i,cr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(An),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const An=[new O,new O,new O,new O,new O,new O,new O,new O],rn=new O,lr=new Gn,Wi=new O,Xi=new O,$i=new O,$n=new O,qn=new O,_i=new O,Ts=new O,cr=new O,ur=new O,vi=new O;function Lo(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){vi.fromArray(n,r);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),l=e.dot(vi),c=t.dot(vi),u=i.dot(vi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Fx=new Gn,As=new O,Do=new O;class Dl{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);const t=As.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(As,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Do)),this.expandByPoint(As.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new O,Io=new O,hr=new O,Yn=new O,Uo=new O,fr=new O,Fo=new O;class Nx{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Io.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),Yn.copy(this.origin).sub(Io);const r=e.distanceTo(t)*.5,o=-this.direction.dot(hr),a=Yn.dot(this.direction),l=-Yn.dot(hr),c=Yn.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Io).addScaledVector(hr,d),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const i=wn.dot(this.direction),s=wn.dot(wn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,i,s,r){Uo.subVectors(t,e),fr.subVectors(i,e),Fo.crossVectors(Uo,fr);let o=this.direction.dot(Fo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,e);const l=a*this.direction.dot(fr.crossVectors(Yn,fr));if(l<0)return null;const c=a*this.direction.dot(Uo.cross(Yn));if(c<0||l+c>o)return null;const u=-a*Yn.dot(Fo);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,s,r,o,a,l,c,u,h,d,p,g,v,x){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,d,p,g,v,x)}set(e,t,i,s,r,o,a,l,c,u,h,d,p,g,v,x){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),o=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ox,e,Bx)}lookAt(e,t,i){const s=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),jn.crossVectors(i,kt),jn.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),jn.crossVectors(i,kt)),jn.normalize(),dr.crossVectors(kt,jn),s[0]=jn.x,s[4]=dr.x,s[8]=kt.x,s[1]=jn.y,s[5]=dr.y,s[9]=kt.y,s[2]=jn.z,s[6]=dr.z,s[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],g=i[2],v=i[6],x=i[10],f=i[14],T=i[3],b=i[7],E=i[11],D=i[15],L=s[0],R=s[4],U=s[8],y=s[12],S=s[1],P=s[5],$=s[9],G=s[13],ee=s[2],ne=s[6],j=s[10],Q=s[14],H=s[3],he=s[7],ze=s[11],ye=s[15];return r[0]=o*L+a*S+l*ee+c*H,r[4]=o*R+a*P+l*ne+c*he,r[8]=o*U+a*$+l*j+c*ze,r[12]=o*y+a*G+l*Q+c*ye,r[1]=u*L+h*S+d*ee+p*H,r[5]=u*R+h*P+d*ne+p*he,r[9]=u*U+h*$+d*j+p*ze,r[13]=u*y+h*G+d*Q+p*ye,r[2]=g*L+v*S+x*ee+f*H,r[6]=g*R+v*P+x*ne+f*he,r[10]=g*U+v*$+x*j+f*ze,r[14]=g*y+v*G+x*Q+f*ye,r[3]=T*L+b*S+E*ee+D*H,r[7]=T*R+b*P+E*ne+D*he,r[11]=T*U+b*$+E*j+D*ze,r[15]=T*y+b*G+E*Q+D*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],x=e[11],f=e[15];return g*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*p-i*l*p)+v*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*u-r*l*u)+x*(+t*c*h-t*a*p-r*o*h+i*o*p+r*a*u-i*c*u)+f*(-s*a*u-t*l*h+t*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],x=e[14],f=e[15],T=h*x*c-v*d*c+v*l*p-a*x*p-h*l*f+a*d*f,b=g*d*c-u*x*c-g*l*p+o*x*p+u*l*f-o*d*f,E=u*v*c-g*h*c+g*a*p-o*v*p-u*a*f+o*h*f,D=g*h*l-u*v*l-g*a*d+o*v*d+u*a*x-o*h*x,L=t*T+i*b+s*E+r*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=T*R,e[1]=(v*d*r-h*x*r-v*s*p+i*x*p+h*s*f-i*d*f)*R,e[2]=(a*x*r-v*l*r+v*s*c-i*x*c-a*s*f+i*l*f)*R,e[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*p-i*l*p)*R,e[4]=b*R,e[5]=(u*x*r-g*d*r+g*s*p-t*x*p-u*s*f+t*d*f)*R,e[6]=(g*l*r-o*x*r-g*s*c+t*x*c+o*s*f-t*l*f)*R,e[7]=(o*d*r-u*l*r+u*s*c-t*d*c-o*s*p+t*l*p)*R,e[8]=E*R,e[9]=(g*h*r-u*v*r-g*i*p+t*v*p+u*i*f-t*h*f)*R,e[10]=(o*v*r-g*a*r+g*i*c-t*v*c-o*i*f+t*a*f)*R,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*p-t*a*p)*R,e[12]=D*R,e[13]=(u*v*s-g*h*s+g*i*d-t*v*d-u*i*x+t*h*x)*R,e[14]=(g*a*s-o*v*s-g*i*l+t*v*l+o*i*x-t*a*x)*R,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*d+t*a*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,v=o*u,x=o*h,f=a*h,T=l*c,b=l*u,E=l*h,D=i.x,L=i.y,R=i.z;return s[0]=(1-(v+f))*D,s[1]=(p+E)*D,s[2]=(g-b)*D,s[3]=0,s[4]=(p-E)*L,s[5]=(1-(d+f))*L,s[6]=(x+T)*L,s[7]=0,s[8]=(g+b)*R,s[9]=(x-T)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=qi.set(s[0],s[1],s[2]).length();const o=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],on.copy(this);const c=1/r,u=1/o,h=1/a;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=u,on.elements[5]*=u,on.elements[6]*=u,on.elements[8]*=h,on.elements[9]*=h,on.elements[10]*=h,t.setFromRotationMatrix(on),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Hn){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let p,g;if(a===Hn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Kr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Hn){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),d=(t+e)*c,p=(i+s)*u;let g,v;if(a===Hn)g=(o+r)*h,v=-2*h;else if(a===Kr)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new O,on=new ut,Ox=new O(0,0,0),Bx=new O(1,1,1),jn=new O,dr=new O,kt=new O,Dc=new ut,Ic=new Qs;class yn{constructor(e=0,t=0,i=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ic.setFromEuler(this),this.setFromQuaternion(Ic,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hx=0;const Uc=new O,Yi=new Qs,Cn=new ut,pr=new O,ws=new O,Vx=new O,Gx=new Qs,Fc=new O(1,0,0),Nc=new O(0,1,0),Oc=new O(0,0,1),Bc={type:"added"},kx={type:"removed"},ji={type:"childadded",child:null},No={type:"childremoved",child:null};class Vt extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hx++}),this.uuid=Js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new O,t=new yn,i=new Qs,s=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(e,t){return Yi.setFromAxisAngle(e,t),this.quaternion.premultiply(Yi),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Nc,e)}rotateZ(e){return this.rotateOnAxis(Oc,e)}translateOnAxis(e,t){return Uc.copy(e).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Nc,e)}translateZ(e){return this.translateOnAxis(Oc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?pr.copy(e):pr.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(ws,pr,this.up):Cn.lookAt(pr,ws,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Yi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bc),ji.child=e,this.dispatchEvent(ji),ji.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kx),No.child=e,this.dispatchEvent(No),No.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bc),ji.child=e,this.dispatchEvent(ji),ji.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Vx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Vt.DEFAULT_UP=new O(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new O,Rn=new O,Oo=new O,Pn=new O,Ki=new O,Zi=new O,Hc=new O,Bo=new O,Ho=new O,Vo=new O,Go=new st,ko=new st,Wo=new st;class ln{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),an.subVectors(e,t),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){an.subVectors(s,t),Rn.subVectors(i,t),Oo.subVectors(e,t);const o=an.dot(an),a=an.dot(Rn),l=an.dot(Oo),c=Rn.dot(Rn),u=Rn.dot(Oo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(o,Pn.y),l.addScaledVector(a,Pn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Go.setScalar(0),ko.setScalar(0),Wo.setScalar(0),Go.fromBufferAttribute(e,t),ko.fromBufferAttribute(e,i),Wo.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Go,r.x),o.addScaledVector(ko,r.y),o.addScaledVector(Wo,r.z),o}static isFrontFacing(e,t,i,s){return an.subVectors(i,t),Rn.subVectors(e,t),an.cross(Rn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),an.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return ln.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;Ki.subVectors(s,i),Zi.subVectors(r,i),Bo.subVectors(e,i);const l=Ki.dot(Bo),c=Zi.dot(Bo);if(l<=0&&c<=0)return t.copy(i);Ho.subVectors(e,s);const u=Ki.dot(Ho),h=Zi.dot(Ho);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(Ki,o);Vo.subVectors(e,r);const p=Ki.dot(Vo),g=Zi.dot(Vo);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(Zi,a);const x=u*g-p*h;if(x<=0&&h-u>=0&&p-g>=0)return Hc.subVectors(r,s),a=(h-u)/(h-u+(p-g)),t.copy(s).addScaledVector(Hc,a);const f=1/(x+v+d);return o=v*f,a=d*f,t.copy(i).addScaledVector(Ki,o).addScaledVector(Zi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function Xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=je.workingColorSpace){return this.r=e,this.g=t,this.b=i,je.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=je.workingColorSpace){if(e=bx(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=Xo(o,r,e+1/3),this.g=Xo(o,r,e),this.b=Xo(o,r,e-1/3)}return je.toWorkingColorSpace(this,s),this}setStyle(e,t=qt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const i=jh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return je.fromWorkingColorSpace(bt.copy(this),e),Math.round($e(bt.r*255,0,255))*65536+Math.round($e(bt.g*255,0,255))*256+Math.round($e(bt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=je.workingColorSpace){je.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,s=bt.g,r=bt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=je.workingColorSpace){return je.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=qt){je.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,s=bt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Kn),this.setHSL(Kn.h+e,Kn.s+t,Kn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Kn),e.getHSL(xr);const i=wo(Kn.h,xr.h,t),s=wo(Kn.s,xr.s,t),r=wo(Kn.l,xr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Ke;Ke.NAMES=jh;let Wx=0;class er extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wx++}),this.uuid=Js(),this.name="",this.type="Material",this.blending=cs,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ma,this.blendDst=ga,this.blendEquation=Ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ma&&(i.blendSrc=this.blendSrc),this.blendDst!==ga&&(i.blendDst=this.blendDst),this.blendEquation!==Ai&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Kh extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new O,mr=new Xe;class zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ac,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),s=Ot(s,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ac&&(e.usage=this.usage),e}}class Zh extends zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jh extends zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mn extends zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Xx=0;const tn=new ut,$o=new Vt,Ji=new O,Wt=new Gn,Cs=new Gn,zt=new O;class di extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xh(e)?Jh:Zh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ge().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return $o.lookAt(e),$o.updateMatrix(),this.applyMatrix4($o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Mn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];Wt.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Cs.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(Wt.min,Cs.min),Wt.expandByPoint(zt),zt.addVectors(Wt.max,Cs.max),Wt.expandByPoint(zt)):(Wt.expandByPoint(Cs.min),Wt.expandByPoint(Cs.max))}Wt.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Ji.fromBufferAttribute(e,c),zt.add(Ji)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<i.count;U++)a[U]=new O,l[U]=new O;const c=new O,u=new O,h=new O,d=new Xe,p=new Xe,g=new Xe,v=new O,x=new O;function f(U,y,S){c.fromBufferAttribute(i,U),u.fromBufferAttribute(i,y),h.fromBufferAttribute(i,S),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),x.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),a[U].add(v),a[y].add(v),a[S].add(v),l[U].add(x),l[y].add(x),l[S].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,y=T.length;U<y;++U){const S=T[U],P=S.start,$=S.count;for(let G=P,ee=P+$;G<ee;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const b=new O,E=new O,D=new O,L=new O;function R(U){D.fromBufferAttribute(s,U),L.copy(D);const y=a[U];b.copy(y),b.sub(D.multiplyScalar(D.dot(y))).normalize(),E.crossVectors(L,y);const P=E.dot(l[U])<0?-1:1;o.setXYZW(U,b.x,b.y,b.z,P)}for(let U=0,y=T.length;U<y;++U){const S=T[U],P=S.start,$=S.count;for(let G=P,ee=P+$;G<ee;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),x=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new zn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vc=new ut,zi=new Nx,gr=new Dl,Gc=new O,_r=new O,vr=new O,zr=new O,qo=new O,Mr=new O,kc=new O,Sr=new O;class Ut extends Vt{constructor(e=new di,t=new Kh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){Mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(qo.fromBufferAttribute(h,e),o?Mr.addScaledVector(qo,u):Mr.addScaledVector(qo.sub(t),u))}t.add(Mr)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(r),zi.copy(e.ray).recast(e.near),!(gr.containsPoint(zi.origin)===!1&&(zi.intersectSphere(gr,Gc)===null||zi.origin.distanceToSquared(Gc)>(e.far-e.near)**2))&&(Vc.copy(r).invert(),zi.copy(e.ray).applyMatrix4(Vc),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,zi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const x=d[g],f=o[x.materialIndex],T=Math.max(x.start,p.start),b=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let E=T,D=b;E<D;E+=3){const L=a.getX(E),R=a.getX(E+1),U=a.getX(E+2);s=Er(this,f,e,i,c,u,h,L,R,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let x=g,f=v;x<f;x+=3){const T=a.getX(x),b=a.getX(x+1),E=a.getX(x+2);s=Er(this,o,e,i,c,u,h,T,b,E),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const x=d[g],f=o[x.materialIndex],T=Math.max(x.start,p.start),b=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let E=T,D=b;E<D;E+=3){const L=E,R=E+1,U=E+2;s=Er(this,f,e,i,c,u,h,L,R,U),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let x=g,f=v;x<f;x+=3){const T=x,b=x+1,E=x+2;s=Er(this,o,e,i,c,u,h,T,b,E),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function $x(n,e,t,i,s,r,o,a){let l;if(e.side===Ht?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===oi,a),l===null)return null;Sr.copy(a),Sr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Sr);return c<t.near||c>t.far?null:{distance:c,point:Sr.clone(),object:n}}function Er(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,_r),n.getVertexPosition(l,vr),n.getVertexPosition(c,zr);const u=$x(n,e,t,i,_r,vr,zr,kc);if(u){const h=new O;ln.getBarycoord(kc,_r,vr,zr,h),s&&(u.uv=ln.getInterpolatedAttribute(s,a,l,c,h,new Xe)),r&&(u.uv1=ln.getInterpolatedAttribute(r,a,l,c,h,new Xe)),o&&(u.normal=ln.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};ln.getNormal(_r,vr,zr,d.normal),u.face=d,u.barycoord=h}return u}class ai extends di{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,r,0),g("z","y","x",1,-1,i,t,-e,o,r,1),g("x","z","y",1,1,e,i,t,s,o,2),g("x","z","y",1,-1,e,i,-t,s,o,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(u,3)),this.setAttribute("uv",new Mn(h,2));function g(v,x,f,T,b,E,D,L,R,U,y){const S=E/R,P=D/U,$=E/2,G=D/2,ee=L/2,ne=R+1,j=U+1;let Q=0,H=0;const he=new O;for(let ze=0;ze<j;ze++){const ye=ze*P-G;for(let Re=0;Re<ne;Re++){const Ze=Re*S-$;he[v]=Ze*T,he[x]=ye*b,he[f]=ee,c.push(he.x,he.y,he.z),he[v]=0,he[x]=0,he[f]=L>0?1:-1,u.push(he.x,he.y,he.z),h.push(Re/R),h.push(1-ze/U),Q+=1}}for(let ze=0;ze<U;ze++)for(let ye=0;ye<R;ye++){const Re=d+ye+ne*ze,Ze=d+ye+ne*(ze+1),te=d+(ye+1)+ne*(ze+1),ce=d+(ye+1)+ne*ze;l.push(Re,Ze,ce),l.push(Ze,te,ce),H+=6}a.addGroup(p,H,y),p+=H,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ai(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=vs(n[t]);for(const s in i)e[s]=i[s]}return e}function qx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Yx={clone:vs,merge:Pt};var jx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jx,this.fragmentShader=Kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vs(e.uniforms),this.uniformsGroups=qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ef extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=Hn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new O,Wc=new Xe,Xc=new Xe;class Yt extends ef{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=el*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return el*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,Wc,Xc),t.subVectors(Xc,Wc)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,es=1;class Zx extends Vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Yt(Qi,es,e,t);s.layers=this.layers,this.add(s);const r=new Yt(Qi,es,e,t);r.layers=this.layers,this.add(r);const o=new Yt(Qi,es,e,t);o.layers=this.layers,this.add(o);const a=new Yt(Qi,es,e,t);a.layers=this.layers,this.add(a);const l=new Yt(Qi,es,e,t);l.layers=this.layers,this.add(l);const c=new Yt(Qi,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Hn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class tf extends Ft{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ps,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jx extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new tf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ai(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:ii});r.uniforms.tEquirect.value=t;const o=new Ut(s,r),a=t.minFilter;return t.minFilter===Ri&&(t.minFilter=_n),new Zx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class $c extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yo=new O,Qx=new O,em=new Ge;class bi{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Yo.subVectors(i,t).cross(Qx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Yo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||em.getNormalMatrix(e),s=this.coplanarPoint(Yo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mi=new Dl,yr=new O;class Il{constructor(e=new bi,t=new bi,i=new bi,s=new bi,r=new bi,o=new bi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Hn){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],p=s[8],g=s[9],v=s[10],x=s[11],f=s[12],T=s[13],b=s[14],E=s[15];if(i[0].setComponents(l-r,d-c,x-p,E-f).normalize(),i[1].setComponents(l+r,d+c,x+p,E+f).normalize(),i[2].setComponents(l+o,d+u,x+g,E+T).normalize(),i[3].setComponents(l-o,d-u,x-g,E-T).normalize(),i[4].setComponents(l-a,d-h,x-v,E-b).normalize(),t===Hn)i[5].setComponents(l+a,d+h,x+v,E+b).normalize();else if(t===Kr)i[5].setComponents(a,h,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(yr.x=s.normal.x>0?e.max.x:e.min.x,yr.y=s.normal.y>0?e.max.y:e.min.y,yr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ls extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class nf extends Ft{constructor(e,t,i,s,r,o,a,l,c,u=us){if(u!==us&&u!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===us&&(i=Ii),i===void 0&&u===gs&&(i=ms),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ul extends di{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const v=[],x=i/2;let f=0;T(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new Mn(h,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(p,2));function T(){const E=new O,D=new O;let L=0;const R=(t-e)/i;for(let U=0;U<=r;U++){const y=[],S=U/r,P=S*(t-e)+e;for(let $=0;$<=s;$++){const G=$/s,ee=G*l+a,ne=Math.sin(ee),j=Math.cos(ee);D.x=P*ne,D.y=-S*i+x,D.z=P*j,h.push(D.x,D.y,D.z),E.set(ne,R,j).normalize(),d.push(E.x,E.y,E.z),p.push(G,1-S),y.push(g++)}v.push(y)}for(let U=0;U<s;U++)for(let y=0;y<r;y++){const S=v[y][U],P=v[y+1][U],$=v[y+1][U+1],G=v[y][U+1];(e>0||y!==0)&&(u.push(S,P,G),L+=3),(t>0||y!==r-1)&&(u.push(P,$,G),L+=3)}c.addGroup(f,L,0),f+=L}function b(E){const D=g,L=new Xe,R=new O;let U=0;const y=E===!0?e:t,S=E===!0?1:-1;for(let $=1;$<=s;$++)h.push(0,x*S,0),d.push(0,S,0),p.push(.5,.5),g++;const P=g;for(let $=0;$<=s;$++){const ee=$/s*l+a,ne=Math.cos(ee),j=Math.sin(ee);R.x=y*j,R.y=x*S,R.z=y*ne,h.push(R.x,R.y,R.z),d.push(0,S,0),L.x=ne*.5+.5,L.y=j*.5*S+.5,p.push(L.x,L.y),g++}for(let $=0;$<s;$++){const G=D+$,ee=P+$;E===!0?u.push(ee,ee+1,G):u.push(ee+1,ee,G),U+=3}c.addGroup(f,U,E===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ul(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oo extends di{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],v=[],x=[];for(let f=0;f<u;f++){const T=f*d-o;for(let b=0;b<c;b++){const E=b*h-r;g.push(E,-T,0),v.push(0,0,1),x.push(b/a),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<a;T++){const b=T+c*f,E=T+c*(f+1),D=T+1+c*(f+1),L=T+1+c*f;p.push(b,E,L),p.push(E,D,L)}this.setIndex(p),this.setAttribute("position",new Mn(g,3)),this.setAttribute("normal",new Mn(v,3)),this.setAttribute("uv",new Mn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Nr extends er{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kh,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tm extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nm extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class sf{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const im=new sf;class Fl{constructor(e){this.manager=e!==void 0?e:im,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fl.DEFAULT_MATERIAL_NAME="__DEFAULT";class sm extends Fl{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=qc.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=qs("img");function l(){u(),qc.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class rm extends Fl{constructor(e){super(e)}load(e,t,i,s){const r=new Ft,o=new sm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class om extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const jo=new ut,Yc=new O,jc=new O;class am{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Il,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Yc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yc),jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jc),t.updateMatrixWorld(),jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Kc=new ut,Rs=new O,Ko=new O;class lm extends am{constructor(){super(new Yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Xe(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Rs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Rs),Ko.copy(i.position),Ko.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ko),i.updateMatrixWorld(),s.makeTranslation(-Rs.x,-Rs.y,-Rs.z),Kc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc)}}class tl extends om{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new lm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class cm extends ef{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class um extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zc(){return performance.now()}function Jc(n,e,t,i){const s=fm(i);switch(t){case Fh:return n*e;case Oh:return n*e;case Bh:return n*e*2;case Hh:return n*e/s.components*s.byteLength;case Rl:return n*e/s.components*s.byteLength;case Vh:return n*e*2/s.components*s.byteLength;case Pl:return n*e*2/s.components*s.byteLength;case Nh:return n*e*3/s.components*s.byteLength;case cn:return n*e*4/s.components*s.byteLength;case Ll:return n*e*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ir:case Ur:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ca:case Pa:return Math.max(n,16)*Math.max(e,8)/4;case wa:case Ra:return Math.max(n,8)*Math.max(e,8)/2;case La:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Na:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ka:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fr:case ja:case Ka:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Gh:case Za:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ja:case Qa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fm(n){switch(n){case Wn:case Dh:return{byteLength:1,components:1};case $s:case Ih:case Zs:return{byteLength:2,components:1};case wl:case Cl:return{byteLength:2,components:4};case Ii:case Al:case Bn:return{byteLength:4,components:1};case Uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function rf(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function dm(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
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
#endif`,mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_m=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zm=`#ifdef USE_AOMAP
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
#endif`,Mm=`#ifdef USE_AOMAP
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
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ym=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,wm=`#ifdef USE_BUMPMAP
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nm=`#define PI 3.141592653589793
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
} // validated`,Om=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,km=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$m=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
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
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hg=`PhysicalMaterial material;
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
#endif`,fg=`struct PhysicalMaterial {
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
}`,dg=`
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_g=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mg=`#ifdef USE_MAP
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
#endif`,Eg=`#if defined( USE_POINTS_UV )
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
#endif`,yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wg=`#ifdef USE_MORPHNORMALS
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fg=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Og=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kg=`#ifdef PREMULTIPLIED_ALPHA
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
#endif`,$g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`float getShadowMask() {
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
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,g_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,__=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v_=`#include <common>
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
}`,z_=`#if DEPTH_PACKING == 3200
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
}`,M_=`#define DISTANCE
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
}`,S_=`#define DISTANCE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
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
}`,T_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,w_=`uniform vec3 diffuse;
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
}`,C_=`#define LAMBERT
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
}`,R_=`#define LAMBERT
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
}`,P_=`#define MATCAP
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
}`,L_=`#define MATCAP
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
}`,D_=`#define NORMAL
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
}`,I_=`#define NORMAL
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
}`,U_=`#define PHONG
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
}`,F_=`#define PHONG
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
}`,N_=`#define STANDARD
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
}`,O_=`#define STANDARD
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
}`,B_=`#define TOON
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
}`,H_=`#define TOON
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
}`,V_=`uniform float size;
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
}`,G_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,W_=`uniform vec3 color;
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
}`,X_=`uniform float rotation;
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
}`,$_=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:pm,alphahash_pars_fragment:xm,alphamap_fragment:mm,alphamap_pars_fragment:gm,alphatest_fragment:_m,alphatest_pars_fragment:vm,aomap_fragment:zm,aomap_pars_fragment:Mm,batching_pars_vertex:Sm,batching_vertex:Em,begin_vertex:ym,beginnormal_vertex:bm,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:wm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Rm,clipping_planes_pars_vertex:Pm,clipping_planes_vertex:Lm,color_fragment:Dm,color_pars_fragment:Im,color_pars_vertex:Um,color_vertex:Fm,common:Nm,cube_uv_reflection_fragment:Om,defaultnormal_vertex:Bm,displacementmap_pars_vertex:Hm,displacementmap_vertex:Vm,emissivemap_fragment:Gm,emissivemap_pars_fragment:km,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:$m,envmap_common_pars_fragment:qm,envmap_pars_fragment:Ym,envmap_pars_vertex:jm,envmap_physical_pars_fragment:og,envmap_vertex:Km,fog_vertex:Zm,fog_pars_vertex:Jm,fog_fragment:Qm,fog_pars_fragment:eg,gradientmap_pars_fragment:tg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:ag,lights_toon_pars_fragment:lg,lights_phong_fragment:cg,lights_phong_pars_fragment:ug,lights_physical_fragment:hg,lights_physical_pars_fragment:fg,lights_fragment_begin:dg,lights_fragment_maps:pg,lights_fragment_end:xg,logdepthbuf_fragment:mg,logdepthbuf_pars_fragment:gg,logdepthbuf_pars_vertex:_g,logdepthbuf_vertex:vg,map_fragment:zg,map_pars_fragment:Mg,map_particle_fragment:Sg,map_particle_pars_fragment:Eg,metalnessmap_fragment:yg,metalnessmap_pars_fragment:bg,morphinstance_vertex:Tg,morphcolor_vertex:Ag,morphnormal_vertex:wg,morphtarget_pars_vertex:Cg,morphtarget_vertex:Rg,normal_fragment_begin:Pg,normal_fragment_maps:Lg,normal_pars_fragment:Dg,normal_pars_vertex:Ig,normal_vertex:Ug,normalmap_pars_fragment:Fg,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Og,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:Hg,opaque_fragment:Vg,packing:Gg,premultiplied_alpha_fragment:kg,project_vertex:Wg,dithering_fragment:Xg,dithering_pars_fragment:$g,roughnessmap_fragment:qg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:Kg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Jg,skinbase_vertex:Qg,skinning_pars_vertex:e_,skinning_vertex:t_,skinnormal_vertex:n_,specularmap_fragment:i_,specularmap_pars_fragment:s_,tonemapping_fragment:r_,tonemapping_pars_fragment:o_,transmission_fragment:a_,transmission_pars_fragment:l_,uv_pars_fragment:c_,uv_pars_vertex:u_,uv_vertex:h_,worldpos_vertex:f_,background_vert:d_,background_frag:p_,backgroundCube_vert:x_,backgroundCube_frag:m_,cube_vert:g_,cube_frag:__,depth_vert:v_,depth_frag:z_,distanceRGBA_vert:M_,distanceRGBA_frag:S_,equirect_vert:E_,equirect_frag:y_,linedashed_vert:b_,linedashed_frag:T_,meshbasic_vert:A_,meshbasic_frag:w_,meshlambert_vert:C_,meshlambert_frag:R_,meshmatcap_vert:P_,meshmatcap_frag:L_,meshnormal_vert:D_,meshnormal_frag:I_,meshphong_vert:U_,meshphong_frag:F_,meshphysical_vert:N_,meshphysical_frag:O_,meshtoon_vert:B_,meshtoon_frag:H_,points_vert:V_,points_frag:G_,shadow_vert:k_,shadow_frag:W_,sprite_vert:X_,sprite_frag:$_},xe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},mn={basic:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Pt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Pt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Pt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Pt([xe.points,xe.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Pt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Pt([xe.common,xe.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Pt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Pt([xe.sprite,xe.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Pt([xe.common,xe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Pt([xe.lights,xe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};mn.physical={uniforms:Pt([mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const br={r:0,b:0,g:0},Si=new yn,q_=new ut;function Y_(n,e,t,i,s,r,o){const a=new Ke(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?t:e).get(E)),E}function v(b){let E=!1;const D=g(b);D===null?f(a,l):D&&D.isColor&&(f(D,1),E=!0);const L=n.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function x(b,E){const D=g(E);D&&(D.isCubeTexture||D.mapping===ro)?(u===void 0&&(u=new Ut(new ai(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:vs(mn.backgroundCube.uniforms),vertexShader:mn.backgroundCube.vertexShader,fragmentShader:mn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Si.copy(E.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(q_.makeRotationFromEuler(Si)),u.material.toneMapped=je.getTransfer(D.colorSpace)!==it,(h!==D||d!==D.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=D,d=D.version,p=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new Ut(new oo(2,2),new li({name:"BackgroundMaterial",uniforms:vs(mn.background.uniforms),vertexShader:mn.background.vertexShader,fragmentShader:mn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=je.getTransfer(D.colorSpace)!==it,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(h!==D||d!==D.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=D,d=D.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,E){b.getRGB(br,Qh(n)),i.buffers.color.setClear(br.r,br.g,br.b,E,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),l=E,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:v,addToRenderList:x,dispose:T}}function j_(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(S,P,$,G,ee){let ne=!1;const j=h(G,$,P);r!==j&&(r=j,c(r.object)),ne=p(S,G,$,ee),ne&&g(S,G,$,ee),ee!==null&&e.update(ee,n.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,E(S,P,$,G),ee!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function h(S,P,$){const G=$.wireframe===!0;let ee=i[S.id];ee===void 0&&(ee={},i[S.id]=ee);let ne=ee[P.id];ne===void 0&&(ne={},ee[P.id]=ne);let j=ne[G];return j===void 0&&(j=d(l()),ne[G]=j),j}function d(S){const P=[],$=[],G=[];for(let ee=0;ee<t;ee++)P[ee]=0,$[ee]=0,G[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:$,attributeDivisors:G,object:S,attributes:{},index:null}}function p(S,P,$,G){const ee=r.attributes,ne=P.attributes;let j=0;const Q=$.getAttributes();for(const H in Q)if(Q[H].location>=0){const ze=ee[H];let ye=ne[H];if(ye===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ye=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ye=S.instanceColor)),ze===void 0||ze.attribute!==ye||ye&&ze.data!==ye.data)return!0;j++}return r.attributesNum!==j||r.index!==G}function g(S,P,$,G){const ee={},ne=P.attributes;let j=0;const Q=$.getAttributes();for(const H in Q)if(Q[H].location>=0){let ze=ne[H];ze===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ze=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ze=S.instanceColor));const ye={};ye.attribute=ze,ze&&ze.data&&(ye.data=ze.data),ee[H]=ye,j++}r.attributes=ee,r.attributesNum=j,r.index=G}function v(){const S=r.newAttributes;for(let P=0,$=S.length;P<$;P++)S[P]=0}function x(S){f(S,0)}function f(S,P){const $=r.newAttributes,G=r.enabledAttributes,ee=r.attributeDivisors;$[S]=1,G[S]===0&&(n.enableVertexAttribArray(S),G[S]=1),ee[S]!==P&&(n.vertexAttribDivisor(S,P),ee[S]=P)}function T(){const S=r.newAttributes,P=r.enabledAttributes;for(let $=0,G=P.length;$<G;$++)P[$]!==S[$]&&(n.disableVertexAttribArray($),P[$]=0)}function b(S,P,$,G,ee,ne,j){j===!0?n.vertexAttribIPointer(S,P,$,ee,ne):n.vertexAttribPointer(S,P,$,G,ee,ne)}function E(S,P,$,G){v();const ee=G.attributes,ne=$.getAttributes(),j=P.defaultAttributeValues;for(const Q in ne){const H=ne[Q];if(H.location>=0){let he=ee[Q];if(he===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){const ze=he.normalized,ye=he.itemSize,Re=e.get(he);if(Re===void 0)continue;const Ze=Re.buffer,te=Re.type,ce=Re.bytesPerElement,Ee=te===n.INT||te===n.UNSIGNED_INT||he.gpuType===Al;if(he.isInterleavedBufferAttribute){const pe=he.data,we=pe.stride,Ie=he.offset;if(pe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<H.locationSize;Oe++)f(H.location+Oe,pe.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Oe=0;Oe<H.locationSize;Oe++)x(H.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Oe=0;Oe<H.locationSize;Oe++)b(H.location+Oe,ye/H.locationSize,te,ze,we*ce,(Ie+ye/H.locationSize*Oe)*ce,Ee)}else{if(he.isInstancedBufferAttribute){for(let pe=0;pe<H.locationSize;pe++)f(H.location+pe,he.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let pe=0;pe<H.locationSize;pe++)x(H.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let pe=0;pe<H.locationSize;pe++)b(H.location+pe,ye/H.locationSize,te,ze,ye*ce,ye/H.locationSize*pe*ce,Ee)}}else if(j!==void 0){const ze=j[Q];if(ze!==void 0)switch(ze.length){case 2:n.vertexAttrib2fv(H.location,ze);break;case 3:n.vertexAttrib3fv(H.location,ze);break;case 4:n.vertexAttrib4fv(H.location,ze);break;default:n.vertexAttrib1fv(H.location,ze)}}}}T()}function D(){U();for(const S in i){const P=i[S];for(const $ in P){const G=P[$];for(const ee in G)u(G[ee].object),delete G[ee];delete P[$]}delete i[S]}}function L(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const $ in P){const G=P[$];for(const ee in G)u(G[ee].object),delete G[ee];delete P[$]}delete i[S.id]}function R(S){for(const P in i){const $=i[P];if($[S.id]===void 0)continue;const G=$[S.id];for(const ee in G)u(G[ee].object),delete G[ee];delete $[S.id]}}function U(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:x,disableUnusedAttributes:T}}function K_(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Z_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==cn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const U=R===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Wn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Bn&&!U)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:T,maxVaryings:b,maxFragmentUniforms:E,vertexTextures:D,maxSamples:L}}function J_(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new bi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||s;return s=d,i=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,x=h.clipShadows,f=n.get(h);if(!s||g===null||g.length===0||r&&!x)r?u(null):c();else{const T=r?0:i,b=T*4;let E=f.clippingState||null;l.value=E,E=u(g,d,b,p);for(let D=0;D!==b;++D)E[D]=t[D];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const f=p+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(x===null||x.length<f)&&(x=new Float32Array(f));for(let b=0,E=p;b!==v;++b,E+=4)o.copy(h[b]).applyMatrix4(T,a),o.normal.toArray(x,E),x[E+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}function Q_(n){let e=new WeakMap;function t(o,a){return a===ba?o.mapping=ps:a===Ta&&(o.mapping=xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ba||a===Ta)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jx(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const ss=4,Qc=[.125,.215,.35,.446,.526,.582],wi=20,Zo=new cm,eu=new Ke;let Jo=null,Qo=0,ea=0,ta=!1;const Ti=(1+Math.sqrt(5))/2,ts=1/Ti,tu=[new O(-Ti,ts,0),new O(Ti,ts,0),new O(-ts,0,Ti),new O(ts,0,Ti),new O(0,Ti,-ts),new O(0,Ti,ts),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class nu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jo,Qo,ea),this._renderer.xr.enabled=ta,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ps||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jo=this._renderer.getRenderTarget(),Qo=this._renderer.getActiveCubeFace(),ea=this._renderer.getActiveMipmapLevel(),ta=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Zs,format:cn,colorSpace:_s,depthBuffer:!1},s=iu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=e1(r)),this._blurMaterial=t1(r,e,t)}return s}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,Zo)}_sceneToCubeUV(e,t,i,s){const a=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(eu),u.toneMapping=si,u.autoClear=!1;const p=new Kh({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1}),g=new Ut(new ai,p);let v=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,v=!0):(p.color.copy(eu),v=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):T===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const b=this._cubeSize;Tr(s,T*b,f>2?b:0,b,b),u.setRenderTarget(s),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ps||e.mapping===xs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Tr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Zo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tu[(s-r-1)%tu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ut(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*wi-1),v=r/g,x=isFinite(r)?1+Math.floor(u*v):wi;x>wi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${wi}`);const f=[];let T=0;for(let R=0;R<wi;++R){const U=R/v,y=Math.exp(-U*U/2);f.push(y),R===0?T+=y:R<x&&(T+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/T;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const E=this._sizeLods[s],D=3*E*(s>b-ss?s-b+ss:0),L=4*(this._cubeSize-E);Tr(t,D,L,3*E,2*E),l.setRenderTarget(t),l.render(h,Zo)}}function e1(n){const e=[],t=[],i=[];let s=n;const r=n-ss+1+Qc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-ss?l=Qc[o-n+ss-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,x=2,f=1,T=new Float32Array(v*g*p),b=new Float32Array(x*g*p),E=new Float32Array(f*g*p);for(let L=0;L<p;L++){const R=L%3*2/3-1,U=L>2?0:-1,y=[R,U,0,R+2/3,U,0,R+2/3,U+1,0,R,U,0,R+2/3,U+1,0,R,U+1,0];T.set(y,v*g*L),b.set(d,x*g*L);const S=[L,L,L,L,L,L];E.set(S,f*g*L)}const D=new di;D.setAttribute("position",new zn(T,v)),D.setAttribute("uv",new zn(b,x)),D.setAttribute("faceIndex",new zn(E,f)),e.push(D),s>ss&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function iu(n,e,t){const i=new Ui(n,e,t);return i.texture.mapping=ro,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function t1(n,e,t){const i=new Float32Array(wi),s=new O(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function su(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nl(),fragmentShader:`

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
		`,blending:ii,depthTest:!1,depthWrite:!1})}function ru(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ii,depthTest:!1,depthWrite:!1})}function Nl(){return`

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
	`}function n1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ba||l===Ta,u=l===ps||l===xs;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new nu(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&s(p)?(t===null&&(t=new nu(n)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function i1(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&is("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function s1(n,e,t,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],n.ARRAY_BUFFER)}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let b=0,E=T.length;b<E;b+=3){const D=T[b+0],L=T[b+1],R=T[b+2];d.push(D,L,L,R,R,D)}}else if(g!==void 0){const T=g.array;v=g.version;for(let b=0,E=T.length/3-1;b<E;b+=3){const D=b+0,L=b+1,R=b+2;d.push(D,L,L,R,R,D)}}else return;const x=new(Xh(d)?Jh:Zh)(d,1);x.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,x)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function r1(n,e,t){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){n.drawElements(i,p,r,d*o),t.update(p,i,1)}function c(d,p,g){g!==0&&(n.drawElementsInstanced(i,p,r,d*o,g),t.update(p,i,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let x=0;for(let f=0;f<g;f++)x+=p[f];t.update(x,i,1)}function h(d,p,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{x.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,v,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*v[T];t.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function o1(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function a1(n,e,t){const i=new WeakMap,s=new st;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){U.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),x===!0&&(E=3);let D=a.attributes.position.count*E,L=1;D>e.maxTextureSize&&(L=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const R=new Float32Array(D*L*4*h),U=new qh(R,D,L,h);U.type=Bn,U.needsUpdate=!0;const y=E*4;for(let P=0;P<h;P++){const $=f[P],G=T[P],ee=b[P],ne=D*L*4*P;for(let j=0;j<$.count;j++){const Q=j*y;g===!0&&(s.fromBufferAttribute($,j),R[ne+Q+0]=s.x,R[ne+Q+1]=s.y,R[ne+Q+2]=s.z,R[ne+Q+3]=0),v===!0&&(s.fromBufferAttribute(G,j),R[ne+Q+4]=s.x,R[ne+Q+5]=s.y,R[ne+Q+6]=s.z,R[ne+Q+7]=0),x===!0&&(s.fromBufferAttribute(ee,j),R[ne+Q+8]=s.x,R[ne+Q+9]=s.y,R[ne+Q+10]=s.z,R[ne+Q+11]=ee.itemSize===4?s.w:1)}}d={count:h,texture:U,size:new Xe(D,L)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let x=0;x<c.length;x++)g+=c[x];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function l1(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const of=new Ft,ou=new nf(1,1),af=new qh,lf=new Ux,cf=new tf,au=[],lu=[],cu=new Float32Array(16),uu=new Float32Array(9),hu=new Float32Array(4);function Ms(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ao(n,e){let t=lu[e];t===void 0&&(t=new Int32Array(e),lu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function c1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function u1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),vt(t,e)}}function h1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),vt(t,e)}}function f1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),vt(t,e)}}function d1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;hu.set(i),n.uniformMatrix2fv(this.addr,!1,hu),vt(t,i)}}function p1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;uu.set(i),n.uniformMatrix3fv(this.addr,!1,uu),vt(t,i)}}function x1(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),vt(t,e)}else{if(_t(t,i))return;cu.set(i),n.uniformMatrix4fv(this.addr,!1,cu),vt(t,i)}}function m1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),vt(t,e)}}function _1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),vt(t,e)}}function v1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),vt(t,e)}}function z1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function M1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),vt(t,e)}}function S1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),vt(t,e)}}function E1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),vt(t,e)}}function y1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(ou.compareFunction=Wh,r=ou):r=of,t.setTexture2D(e||r,s)}function b1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||lf,s)}function T1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||cf,s)}function A1(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||af,s)}function w1(n){switch(n){case 5126:return c1;case 35664:return u1;case 35665:return h1;case 35666:return f1;case 35674:return d1;case 35675:return p1;case 35676:return x1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return _1;case 35669:case 35673:return v1;case 5125:return z1;case 36294:return M1;case 36295:return S1;case 36296:return E1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return b1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return A1}}function C1(n,e){n.uniform1fv(this.addr,e)}function R1(n,e){const t=Ms(e,this.size,2);n.uniform2fv(this.addr,t)}function P1(n,e){const t=Ms(e,this.size,3);n.uniform3fv(this.addr,t)}function L1(n,e){const t=Ms(e,this.size,4);n.uniform4fv(this.addr,t)}function D1(n,e){const t=Ms(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function I1(n,e){const t=Ms(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function U1(n,e){const t=Ms(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function F1(n,e){n.uniform1iv(this.addr,e)}function N1(n,e){n.uniform2iv(this.addr,e)}function O1(n,e){n.uniform3iv(this.addr,e)}function B1(n,e){n.uniform4iv(this.addr,e)}function H1(n,e){n.uniform1uiv(this.addr,e)}function V1(n,e){n.uniform2uiv(this.addr,e)}function G1(n,e){n.uniform3uiv(this.addr,e)}function k1(n,e){n.uniform4uiv(this.addr,e)}function W1(n,e,t){const i=this.cache,s=e.length,r=ao(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||of,r[o])}function X1(n,e,t){const i=this.cache,s=e.length,r=ao(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||lf,r[o])}function $1(n,e,t){const i=this.cache,s=e.length,r=ao(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||cf,r[o])}function q1(n,e,t){const i=this.cache,s=e.length,r=ao(t,s);_t(i,r)||(n.uniform1iv(this.addr,r),vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||af,r[o])}function Y1(n){switch(n){case 5126:return C1;case 35664:return R1;case 35665:return P1;case 35666:return L1;case 35674:return D1;case 35675:return I1;case 35676:return U1;case 5124:case 35670:return F1;case 35667:case 35671:return N1;case 35668:case 35672:return O1;case 35669:case 35673:return B1;case 5125:return H1;case 36294:return V1;case 36295:return G1;case 36296:return k1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return $1;case 36289:case 36303:case 36311:case 36292:return q1}}class j1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=w1(t.type)}}class K1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y1(t.type)}}class Z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const na=/(\w+)(\])?(\[|\.)?/g;function fu(n,e){n.seq.push(e),n.map[e.id]=e}function J1(n,e,t){const i=n.name,s=i.length;for(na.lastIndex=0;;){const r=na.exec(i),o=na.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fu(t,c===void 0?new j1(a,n,e):new K1(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new Z1(a),fu(t,h)),t=h}}}class Or{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);J1(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function du(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Q1=37297;let e0=0;function t0(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const pu=new Ge;function n0(n){je._getMatrix(pu,je.workingColorSpace,n);const e=`mat3( ${pu.elements.map(t=>t.toFixed(4))} )`;switch(je.getTransfer(n)){case jr:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function xu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+t0(n.getShaderSource(e),o)}else return s}function i0(n,e){const t=n0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function s0(n,e){let t;switch(e){case ax:t="Linear";break;case lx:t="Reinhard";break;case cx:t="Cineon";break;case ux:t="ACESFilmic";break;case fx:t="AgX";break;case dx:t="Neutral";break;case hx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new O;function r0(){je.getLuminanceCoefficients(Ar);const n=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ds).join(`
`)}function a0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function l0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ds(n){return n!==""}function mu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c0=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(n){return n.replace(c0,h0)}const u0=new Map;function h0(n,e){let t=We[e];if(t===void 0){const i=u0.get(e);if(i!==void 0)t=We[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nl(t)}const f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(n){return n.replace(f0,d0)}function d0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function p0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ph?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Hp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ln&&(e="SHADOWMAP_TYPE_VSM"),e}function x0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ps:case xs:e="ENVMAP_TYPE_CUBE";break;case ro:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function g0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tl:e="ENVMAP_BLENDING_MULTIPLY";break;case rx:e="ENVMAP_BLENDING_MIX";break;case ox:e="ENVMAP_BLENDING_ADD";break}return e}function _0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function v0(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=p0(t),c=x0(t),u=m0(t),h=g0(t),d=_0(t),p=o0(t),g=a0(r),v=s.createProgram();let x,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ds).join(`
`),f.length>0&&(f+=`
`)):(x=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ds).join(`
`),f=[vu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?We.tonemapping_pars_fragment:"",t.toneMapping!==si?s0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,i0("linearToOutputTexel",t.outputColorSpace),r0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ds).join(`
`)),o=nl(o),o=mu(o,t),o=gu(o,t),a=nl(a),a=mu(a,t),a=gu(a,t),o=_u(o),a=_u(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",t.glslVersion===wc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=T+x+o,E=T+f+a,D=du(s,s.VERTEX_SHADER,b),L=du(s,s.FRAGMENT_SHADER,E);s.attachShader(v,D),s.attachShader(v,L),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(P){if(n.debug.checkShaderErrors){const $=s.getProgramInfoLog(v).trim(),G=s.getShaderInfoLog(D).trim(),ee=s.getShaderInfoLog(L).trim();let ne=!0,j=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,D,L);else{const Q=xu(s,D,"vertex"),H=xu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+$+`
`+Q+`
`+H)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(G===""||ee==="")&&(j=!1);j&&(P.diagnostics={runnable:ne,programLog:$,vertexShader:{log:G,prefix:x},fragmentShader:{log:ee,prefix:f}})}s.deleteShader(D),s.deleteShader(L),U=new Or(s,v),y=l0(s,v)}let U;this.getUniforms=function(){return U===void 0&&R(this),U};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,Q1)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=e0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=D,this.fragmentShader=L,this}let z0=0;class M0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new S0(e),t.set(e,i)),i}}class S0{constructor(e){this.id=z0++,this.code=e,this.usedTimes=0}}function E0(n,e,t,i,s,r,o){const a=new Yh,l=new M0,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,S,P,$,G){const ee=$.fog,ne=G.geometry,j=y.isMeshStandardMaterial?$.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),H=Q&&Q.mapping===ro?Q.image.height:null,he=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const ze=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,ye=ze!==void 0?ze.length:0;let Re=0;ne.morphAttributes.position!==void 0&&(Re=1),ne.morphAttributes.normal!==void 0&&(Re=2),ne.morphAttributes.color!==void 0&&(Re=3);let Ze,te,ce,Ee;if(he){const nt=mn[he];Ze=nt.vertexShader,te=nt.fragmentShader}else Ze=y.vertexShader,te=y.fragmentShader,l.update(y),ce=l.getVertexShaderID(y),Ee=l.getFragmentShaderID(y);const pe=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Ie=G.isInstancedMesh===!0,Oe=G.isBatchedMesh===!0,lt=!!y.map,A=!!y.matcap,C=!!Q,M=!!y.aoMap,se=!!y.lightMap,q=!!y.bumpMap,K=!!y.normalMap,Z=!!y.displacementMap,re=!!y.emissiveMap,Y=!!y.metalnessMap,_=!!y.roughnessMap,m=y.anisotropy>0,w=y.clearcoat>0,B=y.dispersion>0,k=y.iridescence>0,V=y.sheen>0,ue=y.transmission>0,oe=m&&!!y.anisotropyMap,fe=w&&!!y.clearcoatMap,Pe=w&&!!y.clearcoatNormalMap,ae=w&&!!y.clearcoatRoughnessMap,me=k&&!!y.iridescenceMap,Te=k&&!!y.iridescenceThicknessMap,Le=V&&!!y.sheenColorMap,de=V&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,Be=!!y.specularColorMap,rt=!!y.specularIntensityMap,I=ue&&!!y.transmissionMap,ge=ue&&!!y.thicknessMap,J=!!y.gradientMap,ie=!!y.alphaMap,Me=y.alphaTest>0,ve=!!y.alphaHash,Ve=!!y.extensions;let ht=si;y.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ht=n.toneMapping);const Et={shaderID:he,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:te,defines:y.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&G._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&G.instanceColor!==null,instancingMorph:Ie&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:_s,alphaToCoverage:!!y.alphaToCoverage,map:lt,matcap:A,envMap:C,envMapMode:C&&Q.mapping,envMapCubeUVHeight:H,aoMap:M,lightMap:se,bumpMap:q,normalMap:K,displacementMap:d&&Z,emissiveMap:re,normalMapObjectSpace:K&&y.normalMapType===gx,normalMapTangentSpace:K&&y.normalMapType===kh,metalnessMap:Y,roughnessMap:_,anisotropy:m,anisotropyMap:oe,clearcoat:w,clearcoatMap:fe,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ae,dispersion:B,iridescence:k,iridescenceMap:me,iridescenceThicknessMap:Te,sheen:V,sheenColorMap:Le,sheenRoughnessMap:de,specularMap:Ue,specularColorMap:Be,specularIntensityMap:rt,transmission:ue,transmissionMap:I,thicknessMap:ge,gradientMap:J,opaque:y.transparent===!1&&y.blending===cs&&y.alphaToCoverage===!1,alphaMap:ie,alphaTest:Me,alphaHash:ve,combine:y.combine,mapUv:lt&&v(y.map.channel),aoMapUv:M&&v(y.aoMap.channel),lightMapUv:se&&v(y.lightMap.channel),bumpMapUv:q&&v(y.bumpMap.channel),normalMapUv:K&&v(y.normalMap.channel),displacementMapUv:Z&&v(y.displacementMap.channel),emissiveMapUv:re&&v(y.emissiveMap.channel),metalnessMapUv:Y&&v(y.metalnessMap.channel),roughnessMapUv:_&&v(y.roughnessMap.channel),anisotropyMapUv:oe&&v(y.anisotropyMap.channel),clearcoatMapUv:fe&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:de&&v(y.sheenRoughnessMap.channel),specularMapUv:Ue&&v(y.specularMap.channel),specularColorMapUv:Be&&v(y.specularColorMap.channel),specularIntensityMapUv:rt&&v(y.specularIntensityMap.channel),transmissionMapUv:I&&v(y.transmissionMap.channel),thicknessMapUv:ge&&v(y.thicknessMap.channel),alphaMapUv:ie&&v(y.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(K||m),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ne.attributes.uv&&(lt||ie),fog:!!ee,useFog:y.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:we,skinning:G.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Re,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:ht,decodeVideoTexture:lt&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===it,decodeVideoTextureEmissive:re&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===it,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Nn,flipSided:y.side===Ht,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ve&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&y.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function f(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(T(S,y),b(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function T(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function E(y){const S=g[y.type];let P;if(S){const $=mn[S];P=Yx.clone($.uniforms)}else P=y.uniforms;return P}function D(y,S){let P;for(let $=0,G=u.length;$<G;$++){const ee=u[$];if(ee.cacheKey===S){P=ee,++P.usedTimes;break}}return P===void 0&&(P=new v0(n,S,y,r),u.push(P)),P}function L(y){if(--y.usedTimes===0){const S=u.indexOf(y);u[S]=u[u.length-1],u.pop(),y.destroy()}}function R(y){l.remove(y)}function U(){l.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:E,acquireProgram:D,releaseProgram:L,releaseShaderCache:R,programs:u,dispose:U}}function y0(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function b0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Mu(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,d,p,g,v,x){let f=n[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:x},n[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=x),e++,f}function a(h,d,p,g,v,x){const f=o(h,d,p,g,v,x);p.transmission>0?i.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(h,d,p,g,v,x){const f=o(h,d,p,g,v,x);p.transmission>0?i.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||b0),i.length>1&&i.sort(d||zu),s.length>1&&s.sort(d||zu)}function u(){for(let h=e,d=n.length;h<d;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function T0(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Mu,n.set(i,[o])):s>=r.length?(o=new Mu,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function A0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ke};break;case"SpotLight":t={position:new O,direction:new O,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function w0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let C0=0;function R0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function P0(n){const e=new A0,t=w0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const s=new O,r=new ut,o=new ut;function a(c){let u=0,h=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let p=0,g=0,v=0,x=0,f=0,T=0,b=0,E=0,D=0,L=0,R=0;c.sort(R0);for(let y=0,S=c.length;y<S;y++){const P=c[y],$=P.color,G=P.intensity,ee=P.distance,ne=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=$.r*G,h+=$.g*G,d+=$.b*G;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],G);R++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.directionalShadow[p]=H,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=P.shadow.matrix,T++}i.directional[p]=j,p++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy($).multiplyScalar(G),j.distance=ee,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[v]=j;const Q=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,Q.updateMatrices(P),P.castShadow&&L++),i.spotLightMatrix[v]=Q.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,i.spotShadow[v]=H,i.spotShadowMap[v]=ne,E++}v++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy($).multiplyScalar(G),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[x]=j,x++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const Q=P.shadow,H=t.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,i.pointShadow[g]=H,i.pointShadowMap[g]=ne,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=j,g++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(G),j.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[f]=j,f++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const U=i.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==v||U.rectAreaLength!==x||U.hemiLength!==f||U.numDirectionalShadows!==T||U.numPointShadows!==b||U.numSpotShadows!==E||U.numSpotMaps!==D||U.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=x,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+D-L,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,U.directionalLength=p,U.pointLength=g,U.spotLength=v,U.rectAreaLength=x,U.hemiLength=f,U.numDirectionalShadows=T,U.numPointShadows=b,U.numSpotShadows=E,U.numSpotMaps=D,U.numLightProbes=R,i.version=C0++)}function l(c,u){let h=0,d=0,p=0,g=0,v=0;const x=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const b=c[f];if(b.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),h++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(x),p++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),o.identity(),r.copy(b.matrixWorld),r.premultiply(x),o.extractRotation(r),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const E=i.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(x),d++}else if(b.isHemisphereLight){const E=i.hemi[v];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(x),v++}}}return{setup:a,setupView:l,state:i}}function Su(n){const e=new P0(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function L0(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Su(n),e.set(s,[a])):r>=o.length?(a=new Su(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const D0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I0=`uniform sampler2D shadow_pass;
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
}`;function U0(n,e,t){let i=new Il;const s=new Xe,r=new Xe,o=new st,a=new tm({depthPacking:mx}),l=new nm,c={},u=t.maxTextureSize,h={[oi]:Ht,[Ht]:oi,[Nn]:Nn},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:D0,fragmentShader:I0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new di;g.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ut(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ph;let f=this.type;this.render=function(L,R,U){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),$=n.state;$.setBlending(ii),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const G=f!==Ln&&this.type===Ln,ee=f===Ln&&this.type!==Ln;for(let ne=0,j=L.length;ne<j;ne++){const Q=L[ne],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const he=H.getFrameExtents();if(s.multiply(he),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/he.x),s.x=r.x*he.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/he.y),s.y=r.y*he.y,H.mapSize.y=r.y)),H.map===null||G===!0||ee===!0){const ye=this.type!==Ln?{minFilter:fn,magFilter:fn}:{};H.map!==null&&H.map.dispose(),H.map=new Ui(s.x,s.y,ye),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ze=H.getViewportCount();for(let ye=0;ye<ze;ye++){const Re=H.getViewport(ye);o.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),$.viewport(o),H.updateMatrices(Q,ye),i=H.getFrustum(),E(R,U,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===Ln&&T(H,U),H.needsUpdate=!1}f=this.type,x.needsUpdate=!1,n.setRenderTarget(y,S,P)};function T(L,R){const U=e.update(v);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ui(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(R,null,U,d,v,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(R,null,U,p,v,null)}function b(L,R,U,y){let S=null;const P=U.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(P!==void 0)S=P;else if(S=U.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const $=S.uuid,G=R.uuid;let ee=c[$];ee===void 0&&(ee={},c[$]=ee);let ne=ee[G];ne===void 0&&(ne=S.clone(),ee[G]=ne,R.addEventListener("dispose",D)),S=ne}if(S.visible=R.visible,S.wireframe=R.wireframe,y===Ln?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=n.properties.get(S);$.light=U}return S}function E(L,R,U,y,S){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Ln)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,L.matrixWorld);const G=e.update(L),ee=L.material;if(Array.isArray(ee)){const ne=G.groups;for(let j=0,Q=ne.length;j<Q;j++){const H=ne[j],he=ee[H.materialIndex];if(he&&he.visible){const ze=b(L,he,y,S);L.onBeforeShadow(n,L,R,U,G,ze,H),n.renderBufferDirect(U,null,G,ze,L,H),L.onAfterShadow(n,L,R,U,G,ze,H)}}}else if(ee.visible){const ne=b(L,ee,y,S);L.onBeforeShadow(n,L,R,U,G,ne,null),n.renderBufferDirect(U,null,G,ne,L,null),L.onAfterShadow(n,L,R,U,G,ne,null)}}const $=L.children;for(let G=0,ee=$.length;G<ee;G++)E($[G],R,U,y,S)}function D(L){L.target.removeEventListener("dispose",D);for(const U in c){const y=c[U],S=L.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const F0={[_a]:va,[za]:Ea,[Ma]:ya,[ds]:Sa,[va]:_a,[Ea]:za,[ya]:Ma,[Sa]:ds};function N0(n,e){function t(){let I=!1;const ge=new st;let J=null;const ie=new st(0,0,0,0);return{setMask:function(Me){J!==Me&&!I&&(n.colorMask(Me,Me,Me,Me),J=Me)},setLocked:function(Me){I=Me},setClear:function(Me,ve,Ve,ht,Et){Et===!0&&(Me*=ht,ve*=ht,Ve*=ht),ge.set(Me,ve,Ve,ht),ie.equals(ge)===!1&&(n.clearColor(Me,ve,Ve,ht),ie.copy(ge))},reset:function(){I=!1,J=null,ie.set(-1,0,0,0)}}}function i(){let I=!1,ge=!1,J=null,ie=null,Me=null;return{setReversed:function(ve){if(ge!==ve){const Ve=e.get("EXT_clip_control");ge?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT);const ht=Me;Me=null,this.setClear(ht)}ge=ve},getReversed:function(){return ge},setTest:function(ve){ve?pe(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(ve){J!==ve&&!I&&(n.depthMask(ve),J=ve)},setFunc:function(ve){if(ge&&(ve=F0[ve]),ie!==ve){switch(ve){case _a:n.depthFunc(n.NEVER);break;case va:n.depthFunc(n.ALWAYS);break;case za:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case Ma:n.depthFunc(n.EQUAL);break;case Sa:n.depthFunc(n.GEQUAL);break;case Ea:n.depthFunc(n.GREATER);break;case ya:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=ve}},setLocked:function(ve){I=ve},setClear:function(ve){Me!==ve&&(ge&&(ve=1-ve),n.clearDepth(ve),Me=ve)},reset:function(){I=!1,J=null,ie=null,Me=null,ge=!1}}}function s(){let I=!1,ge=null,J=null,ie=null,Me=null,ve=null,Ve=null,ht=null,Et=null;return{setTest:function(nt){I||(nt?pe(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(nt){ge!==nt&&!I&&(n.stencilMask(nt),ge=nt)},setFunc:function(nt,nn,bn){(J!==nt||ie!==nn||Me!==bn)&&(n.stencilFunc(nt,nn,bn),J=nt,ie=nn,Me=bn)},setOp:function(nt,nn,bn){(ve!==nt||Ve!==nn||ht!==bn)&&(n.stencilOp(nt,nn,bn),ve=nt,Ve=nn,ht=bn)},setLocked:function(nt){I=nt},setClear:function(nt){Et!==nt&&(n.clearStencil(nt),Et=nt)},reset:function(){I=!1,ge=null,J=null,ie=null,Me=null,ve=null,Ve=null,ht=null,Et=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],g=null,v=!1,x=null,f=null,T=null,b=null,E=null,D=null,L=null,R=new Ke(0,0,0),U=0,y=!1,S=null,P=null,$=null,G=null,ee=null;const ne=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),j=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),j=Q>=2);let he=null,ze={};const ye=n.getParameter(n.SCISSOR_BOX),Re=n.getParameter(n.VIEWPORT),Ze=new st().fromArray(ye),te=new st().fromArray(Re);function ce(I,ge,J,ie){const Me=new Uint8Array(4),ve=n.createTexture();n.bindTexture(I,ve),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ve=0;Ve<J;Ve++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ge+Ve,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ve}const Ee={};Ee[n.TEXTURE_2D]=ce(n.TEXTURE_2D,n.TEXTURE_2D,1),Ee[n.TEXTURE_CUBE_MAP]=ce(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[n.TEXTURE_2D_ARRAY]=ce(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ee[n.TEXTURE_3D]=ce(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pe(n.DEPTH_TEST),o.setFunc(ds),q(!1),K(Sc),pe(n.CULL_FACE),M(ii);function pe(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function we(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ie(I,ge){return h[I]!==ge?(n.bindFramebuffer(I,ge),h[I]=ge,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ge),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Oe(I,ge){let J=p,ie=!1;if(I){J=d.get(ge),J===void 0&&(J=[],d.set(ge,J));const Me=I.textures;if(J.length!==Me.length||J[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Ve=Me.length;ve<Ve;ve++)J[ve]=n.COLOR_ATTACHMENT0+ve;J.length=Me.length,ie=!0}}else J[0]!==n.BACK&&(J[0]=n.BACK,ie=!0);ie&&n.drawBuffers(J)}function lt(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const A={[Ai]:n.FUNC_ADD,[Gp]:n.FUNC_SUBTRACT,[kp]:n.FUNC_REVERSE_SUBTRACT};A[Wp]=n.MIN,A[Xp]=n.MAX;const C={[$p]:n.ZERO,[qp]:n.ONE,[Yp]:n.SRC_COLOR,[ma]:n.SRC_ALPHA,[ex]:n.SRC_ALPHA_SATURATE,[Jp]:n.DST_COLOR,[Kp]:n.DST_ALPHA,[jp]:n.ONE_MINUS_SRC_COLOR,[ga]:n.ONE_MINUS_SRC_ALPHA,[Qp]:n.ONE_MINUS_DST_COLOR,[Zp]:n.ONE_MINUS_DST_ALPHA,[tx]:n.CONSTANT_COLOR,[nx]:n.ONE_MINUS_CONSTANT_COLOR,[ix]:n.CONSTANT_ALPHA,[sx]:n.ONE_MINUS_CONSTANT_ALPHA};function M(I,ge,J,ie,Me,ve,Ve,ht,Et,nt){if(I===ii){v===!0&&(we(n.BLEND),v=!1);return}if(v===!1&&(pe(n.BLEND),v=!0),I!==Vp){if(I!==x||nt!==y){if((f!==Ai||E!==Ai)&&(n.blendEquation(n.FUNC_ADD),f=Ai,E=Ai),nt)switch(I){case cs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ec:n.blendFunc(n.ONE,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case cs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ec:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case bc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}T=null,b=null,D=null,L=null,R.set(0,0,0),U=0,x=I,y=nt}return}Me=Me||ge,ve=ve||J,Ve=Ve||ie,(ge!==f||Me!==E)&&(n.blendEquationSeparate(A[ge],A[Me]),f=ge,E=Me),(J!==T||ie!==b||ve!==D||Ve!==L)&&(n.blendFuncSeparate(C[J],C[ie],C[ve],C[Ve]),T=J,b=ie,D=ve,L=Ve),(ht.equals(R)===!1||Et!==U)&&(n.blendColor(ht.r,ht.g,ht.b,Et),R.copy(ht),U=Et),x=I,y=!1}function se(I,ge){I.side===Nn?we(n.CULL_FACE):pe(n.CULL_FACE);let J=I.side===Ht;ge&&(J=!J),q(J),I.blending===cs&&I.transparent===!1?M(ii):M(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const ie=I.stencilWrite;a.setTest(ie),ie&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),re(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function q(I){S!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),S=I)}function K(I){I!==Op?(pe(n.CULL_FACE),I!==P&&(I===Sc?n.cullFace(n.BACK):I===Bp?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),P=I}function Z(I){I!==$&&(j&&n.lineWidth(I),$=I)}function re(I,ge,J){I?(pe(n.POLYGON_OFFSET_FILL),(G!==ge||ee!==J)&&(n.polygonOffset(ge,J),G=ge,ee=J)):we(n.POLYGON_OFFSET_FILL)}function Y(I){I?pe(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function _(I){I===void 0&&(I=n.TEXTURE0+ne-1),he!==I&&(n.activeTexture(I),he=I)}function m(I,ge,J){J===void 0&&(he===null?J=n.TEXTURE0+ne-1:J=he);let ie=ze[J];ie===void 0&&(ie={type:void 0,texture:void 0},ze[J]=ie),(ie.type!==I||ie.texture!==ge)&&(he!==J&&(n.activeTexture(J),he=J),n.bindTexture(I,ge||Ee[I]),ie.type=I,ie.texture=ge)}function w(){const I=ze[he];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function B(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function k(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){Ze.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function de(I){te.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),te.copy(I))}function Ue(I,ge){let J=c.get(ge);J===void 0&&(J=new WeakMap,c.set(ge,J));let ie=J.get(I);ie===void 0&&(ie=n.getUniformBlockIndex(ge,I.name),J.set(I,ie))}function Be(I,ge){const ie=c.get(ge).get(I);l.get(ge)!==ie&&(n.uniformBlockBinding(ge,ie,I.__bindingPointIndex),l.set(ge,ie))}function rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},he=null,ze={},h={},d=new WeakMap,p=[],g=null,v=!1,x=null,f=null,T=null,b=null,E=null,D=null,L=null,R=new Ke(0,0,0),U=0,y=!1,S=null,P=null,$=null,G=null,ee=null,Ze.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pe,disable:we,bindFramebuffer:Ie,drawBuffers:Oe,useProgram:lt,setBlending:M,setMaterial:se,setFlipSided:q,setCullFace:K,setLineWidth:Z,setPolygonOffset:re,setScissorTest:Y,activeTexture:_,bindTexture:m,unbindTexture:w,compressedTexImage2D:B,compressedTexImage3D:k,texImage2D:me,texImage3D:Te,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:Pe,texStorage3D:ae,texSubImage2D:V,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Le,viewport:de,reset:rt}}function O0(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(_,m){return p?new OffscreenCanvas(_,m):qs("canvas")}function v(_,m,w){let B=1;const k=Y(_);if((k.width>w||k.height>w)&&(B=w/Math.max(k.width,k.height)),B<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const V=Math.floor(B*k.width),ue=Math.floor(B*k.height);h===void 0&&(h=g(V,ue));const oe=m?g(V,ue):h;return oe.width=V,oe.height=ue,oe.getContext("2d").drawImage(_,0,0,V,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+V+"x"+ue+")."),oe}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),_;return _}function x(_){return _.generateMipmaps}function f(_){n.generateMipmap(_)}function T(_){return _.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?n.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(_,m,w,B,k=!1){if(_!==null){if(n[_]!==void 0)return n[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let V=m;if(m===n.RED&&(w===n.FLOAT&&(V=n.R32F),w===n.HALF_FLOAT&&(V=n.R16F),w===n.UNSIGNED_BYTE&&(V=n.R8)),m===n.RED_INTEGER&&(w===n.UNSIGNED_BYTE&&(V=n.R8UI),w===n.UNSIGNED_SHORT&&(V=n.R16UI),w===n.UNSIGNED_INT&&(V=n.R32UI),w===n.BYTE&&(V=n.R8I),w===n.SHORT&&(V=n.R16I),w===n.INT&&(V=n.R32I)),m===n.RG&&(w===n.FLOAT&&(V=n.RG32F),w===n.HALF_FLOAT&&(V=n.RG16F),w===n.UNSIGNED_BYTE&&(V=n.RG8)),m===n.RG_INTEGER&&(w===n.UNSIGNED_BYTE&&(V=n.RG8UI),w===n.UNSIGNED_SHORT&&(V=n.RG16UI),w===n.UNSIGNED_INT&&(V=n.RG32UI),w===n.BYTE&&(V=n.RG8I),w===n.SHORT&&(V=n.RG16I),w===n.INT&&(V=n.RG32I)),m===n.RGB_INTEGER&&(w===n.UNSIGNED_BYTE&&(V=n.RGB8UI),w===n.UNSIGNED_SHORT&&(V=n.RGB16UI),w===n.UNSIGNED_INT&&(V=n.RGB32UI),w===n.BYTE&&(V=n.RGB8I),w===n.SHORT&&(V=n.RGB16I),w===n.INT&&(V=n.RGB32I)),m===n.RGBA_INTEGER&&(w===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),w===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),w===n.UNSIGNED_INT&&(V=n.RGBA32UI),w===n.BYTE&&(V=n.RGBA8I),w===n.SHORT&&(V=n.RGBA16I),w===n.INT&&(V=n.RGBA32I)),m===n.RGB&&w===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),m===n.RGBA){const ue=k?jr:je.getTransfer(B);w===n.FLOAT&&(V=n.RGBA32F),w===n.HALF_FLOAT&&(V=n.RGBA16F),w===n.UNSIGNED_BYTE&&(V=ue===it?n.SRGB8_ALPHA8:n.RGBA8),w===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),w===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function E(_,m){let w;return _?m===null||m===Ii||m===ms?w=n.DEPTH24_STENCIL8:m===Bn?w=n.DEPTH32F_STENCIL8:m===$s&&(w=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Ii||m===ms?w=n.DEPTH_COMPONENT24:m===Bn?w=n.DEPTH_COMPONENT32F:m===$s&&(w=n.DEPTH_COMPONENT16),w}function D(_,m){return x(_)===!0||_.isFramebufferTexture&&_.minFilter!==fn&&_.minFilter!==_n?Math.log2(Math.max(m.width,m.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?m.mipmaps.length:1}function L(_){const m=_.target;m.removeEventListener("dispose",L),U(m),m.isVideoTexture&&u.delete(m)}function R(_){const m=_.target;m.removeEventListener("dispose",R),S(m)}function U(_){const m=i.get(_);if(m.__webglInit===void 0)return;const w=_.source,B=d.get(w);if(B){const k=B[m.__cacheKey];k.usedTimes--,k.usedTimes===0&&y(_),Object.keys(B).length===0&&d.delete(w)}i.remove(_)}function y(_){const m=i.get(_);n.deleteTexture(m.__webglTexture);const w=_.source,B=d.get(w);delete B[m.__cacheKey],o.memory.textures--}function S(_){const m=i.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),i.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(m.__webglFramebuffer[B]))for(let k=0;k<m.__webglFramebuffer[B].length;k++)n.deleteFramebuffer(m.__webglFramebuffer[B][k]);else n.deleteFramebuffer(m.__webglFramebuffer[B]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[B])}else{if(Array.isArray(m.__webglFramebuffer))for(let B=0;B<m.__webglFramebuffer.length;B++)n.deleteFramebuffer(m.__webglFramebuffer[B]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let B=0;B<m.__webglColorRenderbuffer.length;B++)m.__webglColorRenderbuffer[B]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[B]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const w=_.textures;for(let B=0,k=w.length;B<k;B++){const V=i.get(w[B]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(w[B])}i.remove(_)}let P=0;function $(){P=0}function G(){const _=P;return _>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+s.maxTextures),P+=1,_}function ee(_){const m=[];return m.push(_.wrapS),m.push(_.wrapT),m.push(_.wrapR||0),m.push(_.magFilter),m.push(_.minFilter),m.push(_.anisotropy),m.push(_.internalFormat),m.push(_.format),m.push(_.type),m.push(_.generateMipmaps),m.push(_.premultiplyAlpha),m.push(_.flipY),m.push(_.unpackAlignment),m.push(_.colorSpace),m.join()}function ne(_,m){const w=i.get(_);if(_.isVideoTexture&&Z(_),_.isRenderTargetTexture===!1&&_.version>0&&w.__version!==_.version){const B=_.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(w,_,m);return}}t.bindTexture(n.TEXTURE_2D,w.__webglTexture,n.TEXTURE0+m)}function j(_,m){const w=i.get(_);if(_.version>0&&w.__version!==_.version){te(w,_,m);return}t.bindTexture(n.TEXTURE_2D_ARRAY,w.__webglTexture,n.TEXTURE0+m)}function Q(_,m){const w=i.get(_);if(_.version>0&&w.__version!==_.version){te(w,_,m);return}t.bindTexture(n.TEXTURE_3D,w.__webglTexture,n.TEXTURE0+m)}function H(_,m){const w=i.get(_);if(_.version>0&&w.__version!==_.version){ce(w,_,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+m)}const he={[Un]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[Aa]:n.MIRRORED_REPEAT},ze={[fn]:n.NEAREST,[px]:n.NEAREST_MIPMAP_NEAREST,[ar]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[To]:n.LINEAR_MIPMAP_NEAREST,[Ri]:n.LINEAR_MIPMAP_LINEAR},ye={[_x]:n.NEVER,[yx]:n.ALWAYS,[vx]:n.LESS,[Wh]:n.LEQUAL,[zx]:n.EQUAL,[Ex]:n.GEQUAL,[Mx]:n.GREATER,[Sx]:n.NOTEQUAL};function Re(_,m){if(m.type===Bn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===_n||m.magFilter===To||m.magFilter===ar||m.magFilter===Ri||m.minFilter===_n||m.minFilter===To||m.minFilter===ar||m.minFilter===Ri)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(_,n.TEXTURE_WRAP_S,he[m.wrapS]),n.texParameteri(_,n.TEXTURE_WRAP_T,he[m.wrapT]),(_===n.TEXTURE_3D||_===n.TEXTURE_2D_ARRAY)&&n.texParameteri(_,n.TEXTURE_WRAP_R,he[m.wrapR]),n.texParameteri(_,n.TEXTURE_MAG_FILTER,ze[m.magFilter]),n.texParameteri(_,n.TEXTURE_MIN_FILTER,ze[m.minFilter]),m.compareFunction&&(n.texParameteri(_,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(_,n.TEXTURE_COMPARE_FUNC,ye[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===fn||m.minFilter!==ar&&m.minFilter!==Ri||m.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const w=e.get("EXT_texture_filter_anisotropic");n.texParameterf(_,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function Ze(_,m){let w=!1;_.__webglInit===void 0&&(_.__webglInit=!0,m.addEventListener("dispose",L));const B=m.source;let k=d.get(B);k===void 0&&(k={},d.set(B,k));const V=ee(m);if(V!==_.__cacheKey){k[V]===void 0&&(k[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,w=!0),k[V].usedTimes++;const ue=k[_.__cacheKey];ue!==void 0&&(k[_.__cacheKey].usedTimes--,ue.usedTimes===0&&y(m)),_.__cacheKey=V,_.__webglTexture=k[V].texture}return w}function te(_,m,w){let B=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(B=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(B=n.TEXTURE_3D);const k=Ze(_,m),V=m.source;t.bindTexture(B,_.__webglTexture,n.TEXTURE0+w);const ue=i.get(V);if(V.version!==ue.__version||k===!0){t.activeTexture(n.TEXTURE0+w);const oe=je.getPrimaries(je.workingColorSpace),fe=m.colorSpace===ti?null:je.getPrimaries(m.colorSpace),Pe=m.colorSpace===ti||oe===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ae=v(m.image,!1,s.maxTextureSize);ae=re(m,ae);const me=r.convert(m.format,m.colorSpace),Te=r.convert(m.type);let Le=b(m.internalFormat,me,Te,m.colorSpace,m.isVideoTexture);Re(B,m);let de;const Ue=m.mipmaps,Be=m.isVideoTexture!==!0,rt=ue.__version===void 0||k===!0,I=V.dataReady,ge=D(m,ae);if(m.isDepthTexture)Le=E(m.format===gs,m.type),rt&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Le,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,me,Te,null));else if(m.isDataTexture)if(Ue.length>0){Be&&rt&&t.texStorage2D(n.TEXTURE_2D,ge,Le,Ue[0].width,Ue[0].height);for(let J=0,ie=Ue.length;J<ie;J++)de=Ue[J],Be?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,de.width,de.height,me,Te,de.data):t.texImage2D(n.TEXTURE_2D,J,Le,de.width,de.height,0,me,Te,de.data);m.generateMipmaps=!1}else Be?(rt&&t.texStorage2D(n.TEXTURE_2D,ge,Le,ae.width,ae.height),I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,me,Te,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Le,ae.width,ae.height,0,me,Te,ae.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){Be&&rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Le,Ue[0].width,Ue[0].height,ae.depth);for(let J=0,ie=Ue.length;J<ie;J++)if(de=Ue[J],m.format!==cn)if(me!==null)if(Be){if(I)if(m.layerUpdates.size>0){const Me=Jc(de.width,de.height,m.format,m.type);for(const ve of m.layerUpdates){const Ve=de.data.subarray(ve*Me/de.data.BYTES_PER_ELEMENT,(ve+1)*Me/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,ve,de.width,de.height,1,me,Ve)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,ae.depth,me,de.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,Le,de.width,de.height,ae.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?I&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,de.width,de.height,ae.depth,me,Te,de.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,Le,de.width,de.height,ae.depth,0,me,Te,de.data)}else{Be&&rt&&t.texStorage2D(n.TEXTURE_2D,ge,Le,Ue[0].width,Ue[0].height);for(let J=0,ie=Ue.length;J<ie;J++)de=Ue[J],m.format!==cn?me!==null?Be?I&&t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(n.TEXTURE_2D,J,Le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,de.width,de.height,me,Te,de.data):t.texImage2D(n.TEXTURE_2D,J,Le,de.width,de.height,0,me,Te,de.data)}else if(m.isDataArrayTexture)if(Be){if(rt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,Le,ae.width,ae.height,ae.depth),I)if(m.layerUpdates.size>0){const J=Jc(ae.width,ae.height,m.format,m.type);for(const ie of m.layerUpdates){const Me=ae.data.subarray(ie*J/ae.data.BYTES_PER_ELEMENT,(ie+1)*J/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,ae.width,ae.height,1,me,Te,Me)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,me,Te,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Le,ae.width,ae.height,ae.depth,0,me,Te,ae.data);else if(m.isData3DTexture)Be?(rt&&t.texStorage3D(n.TEXTURE_3D,ge,Le,ae.width,ae.height,ae.depth),I&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,me,Te,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Le,ae.width,ae.height,ae.depth,0,me,Te,ae.data);else if(m.isFramebufferTexture){if(rt)if(Be)t.texStorage2D(n.TEXTURE_2D,ge,Le,ae.width,ae.height);else{let J=ae.width,ie=ae.height;for(let Me=0;Me<ge;Me++)t.texImage2D(n.TEXTURE_2D,Me,Le,J,ie,0,me,Te,null),J>>=1,ie>>=1}}else if(Ue.length>0){if(Be&&rt){const J=Y(Ue[0]);t.texStorage2D(n.TEXTURE_2D,ge,Le,J.width,J.height)}for(let J=0,ie=Ue.length;J<ie;J++)de=Ue[J],Be?I&&t.texSubImage2D(n.TEXTURE_2D,J,0,0,me,Te,de):t.texImage2D(n.TEXTURE_2D,J,Le,me,Te,de);m.generateMipmaps=!1}else if(Be){if(rt){const J=Y(ae);t.texStorage2D(n.TEXTURE_2D,ge,Le,J.width,J.height)}I&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,Te,ae)}else t.texImage2D(n.TEXTURE_2D,0,Le,me,Te,ae);x(m)&&f(B),ue.__version=V.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function ce(_,m,w){if(m.image.length!==6)return;const B=Ze(_,m),k=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,_.__webglTexture,n.TEXTURE0+w);const V=i.get(k);if(k.version!==V.__version||B===!0){t.activeTexture(n.TEXTURE0+w);const ue=je.getPrimaries(je.workingColorSpace),oe=m.colorSpace===ti?null:je.getPrimaries(m.colorSpace),fe=m.colorSpace===ti||ue===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Pe=m.isCompressedTexture||m.image[0].isCompressedTexture,ae=m.image[0]&&m.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!Pe&&!ae?me[ie]=v(m.image[ie],!0,s.maxCubemapSize):me[ie]=ae?m.image[ie].image:m.image[ie],me[ie]=re(m,me[ie]);const Te=me[0],Le=r.convert(m.format,m.colorSpace),de=r.convert(m.type),Ue=b(m.internalFormat,Le,de,m.colorSpace),Be=m.isVideoTexture!==!0,rt=V.__version===void 0||B===!0,I=k.dataReady;let ge=D(m,Te);Re(n.TEXTURE_CUBE_MAP,m);let J;if(Pe){Be&&rt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ue,Te.width,Te.height);for(let ie=0;ie<6;ie++){J=me[ie].mipmaps;for(let Me=0;Me<J.length;Me++){const ve=J[Me];m.format!==cn?Le!==null?Be?I&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,0,0,ve.width,ve.height,Le,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,Ue,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,0,0,ve.width,ve.height,Le,de,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me,Ue,ve.width,ve.height,0,Le,de,ve.data)}}}else{if(J=m.mipmaps,Be&&rt){J.length>0&&ge++;const ie=Y(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ge,Ue,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(ae){Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,Le,de,me[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,me[ie].width,me[ie].height,0,Le,de,me[ie].data);for(let Me=0;Me<J.length;Me++){const Ve=J[Me].image[ie].image;Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,0,0,Ve.width,Ve.height,Le,de,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,Ue,Ve.width,Ve.height,0,Le,de,Ve.data)}}else{Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Le,de,me[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,Le,de,me[ie]);for(let Me=0;Me<J.length;Me++){const ve=J[Me];Be?I&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,0,0,Le,de,ve.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Me+1,Ue,Le,de,ve.image[ie])}}}x(m)&&f(n.TEXTURE_CUBE_MAP),V.__version=k.version,m.onUpdate&&m.onUpdate(m)}_.__version=m.version}function Ee(_,m,w,B,k,V){const ue=r.convert(w.format,w.colorSpace),oe=r.convert(w.type),fe=b(w.internalFormat,ue,oe,w.colorSpace),Pe=i.get(m),ae=i.get(w);if(ae.__renderTarget=m,!Pe.__hasExternalTextures){const me=Math.max(1,m.width>>V),Te=Math.max(1,m.height>>V);k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?t.texImage3D(k,V,fe,me,Te,m.depth,0,ue,oe,null):t.texImage2D(k,V,fe,me,Te,0,ue,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,_),K(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,B,k,ae.__webglTexture,0,q(m)):(k===n.TEXTURE_2D||k>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,B,k,ae.__webglTexture,V),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(_,m,w){if(n.bindRenderbuffer(n.RENDERBUFFER,_),m.depthBuffer){const B=m.depthTexture,k=B&&B.isDepthTexture?B.type:null,V=E(m.stencilBuffer,k),ue=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=q(m);K(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,V,m.width,m.height):w?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,V,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,V,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,_)}else{const B=m.textures;for(let k=0;k<B.length;k++){const V=B[k],ue=r.convert(V.format,V.colorSpace),oe=r.convert(V.type),fe=b(V.internalFormat,ue,oe,V.colorSpace),Pe=q(m);w&&K(m)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,fe,m.width,m.height):K(m)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,fe,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,fe,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function we(_,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,_),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const B=i.get(m.depthTexture);B.__renderTarget=m,(!B.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),ne(m.depthTexture,0);const k=B.__webglTexture,V=q(m);if(m.depthTexture.format===us)K(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,k,0);else if(m.depthTexture.format===gs)K(m)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Ie(_){const m=i.get(_),w=_.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==_.depthTexture){const B=_.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),B){const k=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,B.removeEventListener("dispose",k)};B.addEventListener("dispose",k),m.__depthDisposeCallback=k}m.__boundDepthTexture=B}if(_.depthTexture&&!m.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");we(m.__webglFramebuffer,_)}else if(w){m.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[B]),m.__webglDepthbuffer[B]===void 0)m.__webglDepthbuffer[B]=n.createRenderbuffer(),pe(m.__webglDepthbuffer[B],_,!1);else{const k=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=m.__webglDepthbuffer[B];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,k,n.RENDERBUFFER,V)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),pe(m.__webglDepthbuffer,_,!1);else{const B=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,B,n.RENDERBUFFER,k)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(_,m,w){const B=i.get(_);m!==void 0&&Ee(B.__webglFramebuffer,_,_.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),w!==void 0&&Ie(_)}function lt(_){const m=_.texture,w=i.get(_),B=i.get(m);_.addEventListener("dispose",R);const k=_.textures,V=_.isWebGLCubeRenderTarget===!0,ue=k.length>1;if(ue||(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=m.version,o.memory.textures++),V){w.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(m.mipmaps&&m.mipmaps.length>0){w.__webglFramebuffer[oe]=[];for(let fe=0;fe<m.mipmaps.length;fe++)w.__webglFramebuffer[oe][fe]=n.createFramebuffer()}else w.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){w.__webglFramebuffer=[];for(let oe=0;oe<m.mipmaps.length;oe++)w.__webglFramebuffer[oe]=n.createFramebuffer()}else w.__webglFramebuffer=n.createFramebuffer();if(ue)for(let oe=0,fe=k.length;oe<fe;oe++){const Pe=i.get(k[oe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(_.samples>0&&K(_)===!1){w.__webglMultisampledFramebuffer=n.createFramebuffer(),w.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let oe=0;oe<k.length;oe++){const fe=k[oe];w.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,w.__webglColorRenderbuffer[oe]);const Pe=r.convert(fe.format,fe.colorSpace),ae=r.convert(fe.type),me=b(fe.internalFormat,Pe,ae,fe.colorSpace,_.isXRRenderTarget===!0),Te=q(_);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,me,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,w.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),_.depthBuffer&&(w.__webglDepthRenderbuffer=n.createRenderbuffer(),pe(w.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture),Re(n.TEXTURE_CUBE_MAP,m);for(let oe=0;oe<6;oe++)if(m.mipmaps&&m.mipmaps.length>0)for(let fe=0;fe<m.mipmaps.length;fe++)Ee(w.__webglFramebuffer[oe][fe],_,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else Ee(w.__webglFramebuffer[oe],_,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(m)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,fe=k.length;oe<fe;oe++){const Pe=k[oe],ae=i.get(Pe);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Re(n.TEXTURE_2D,Pe),Ee(w.__webglFramebuffer,_,Pe,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),x(Pe)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(oe=_.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,B.__webglTexture),Re(oe,m),m.mipmaps&&m.mipmaps.length>0)for(let fe=0;fe<m.mipmaps.length;fe++)Ee(w.__webglFramebuffer[fe],_,m,n.COLOR_ATTACHMENT0,oe,fe);else Ee(w.__webglFramebuffer,_,m,n.COLOR_ATTACHMENT0,oe,0);x(m)&&f(oe),t.unbindTexture()}_.depthBuffer&&Ie(_)}function A(_){const m=_.textures;for(let w=0,B=m.length;w<B;w++){const k=m[w];if(x(k)){const V=T(_),ue=i.get(k).__webglTexture;t.bindTexture(V,ue),f(V),t.unbindTexture()}}}const C=[],M=[];function se(_){if(_.samples>0){if(K(_)===!1){const m=_.textures,w=_.width,B=_.height;let k=n.COLOR_BUFFER_BIT;const V=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(_),oe=m.length>1;if(oe)for(let fe=0;fe<m.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<m.length;fe++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(k|=n.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(k|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Pe=i.get(m[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,w,B,0,0,w,B,k,n.NEAREST),l===!0&&(C.length=0,M.length=0,C.push(n.COLOR_ATTACHMENT0+fe),_.depthBuffer&&_.resolveDepthBuffer===!1&&(C.push(V),M.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,M)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<m.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Pe=i.get(m[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const m=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function q(_){return Math.min(s.maxSamples,_.samples)}function K(_){const m=i.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function Z(_){const m=o.render.frame;u.get(_)!==m&&(u.set(_,m),_.update())}function re(_,m){const w=_.colorSpace,B=_.format,k=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||w!==_s&&w!==ti&&(je.getTransfer(w)===it?(B!==cn||k!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),m}function Y(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.setTexture2D=ne,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=Oe,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=A,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=K}function B0(n,e){function t(i,s=ti){let r;const o=je.getTransfer(s);if(i===Wn)return n.UNSIGNED_BYTE;if(i===wl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Uh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Dh)return n.BYTE;if(i===Ih)return n.SHORT;if(i===$s)return n.UNSIGNED_SHORT;if(i===Al)return n.INT;if(i===Ii)return n.UNSIGNED_INT;if(i===Bn)return n.FLOAT;if(i===Zs)return n.HALF_FLOAT;if(i===Fh)return n.ALPHA;if(i===Nh)return n.RGB;if(i===cn)return n.RGBA;if(i===Oh)return n.LUMINANCE;if(i===Bh)return n.LUMINANCE_ALPHA;if(i===us)return n.DEPTH_COMPONENT;if(i===gs)return n.DEPTH_STENCIL;if(i===Hh)return n.RED;if(i===Rl)return n.RED_INTEGER;if(i===Vh)return n.RG;if(i===Pl)return n.RG_INTEGER;if(i===Ll)return n.RGBA_INTEGER;if(i===Lr||i===Dr||i===Ir||i===Ur)if(o===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wa||i===Ca||i===Ra||i===Pa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===La||i===Da||i===Ia)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===La||i===Da)return o===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ia)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ua||i===Fa||i===Na||i===Oa||i===Ba||i===Ha||i===Va||i===Ga||i===ka||i===Wa||i===Xa||i===$a||i===qa||i===Ya)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ua)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Na)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ba)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Va)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ga)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ka)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Xa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$a)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qa)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ya)return o===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fr||i===ja||i===Ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fr)return o===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gh||i===Za||i===Ja||i===Qa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fr)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Za)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ja)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ms?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const H0={type:"move"};class ia{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,i),f=this._getHandJoint(c,v);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ls;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const V0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,G0=`
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

}`;class k0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Ft,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new li({vertexShader:V0,fragmentShader:G0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new oo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W0 extends zs{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const v=new k0,x=t.getContextAttributes();let f=null,T=null;const b=[],E=[],D=new Xe;let L=null;const R=new Yt;R.viewport=new st;const U=new Yt;U.viewport=new st;const y=[R,U],S=new um;let P=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ce=b[te];return ce===void 0&&(ce=new ia,b[te]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(te){let ce=b[te];return ce===void 0&&(ce=new ia,b[te]=ce),ce.getGripSpace()},this.getHand=function(te){let ce=b[te];return ce===void 0&&(ce=new ia,b[te]=ce),ce.getHandSpace()};function G(te){const ce=E.indexOf(te.inputSource);if(ce===-1)return;const Ee=b[ce];Ee!==void 0&&(Ee.update(te.inputSource,te.frame,c||o),Ee.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",ne);for(let te=0;te<b.length;te++){const ce=E[te];ce!==null&&(E[te]=null,b[te].disconnect(ce))}P=null,$=null,v.reset(),e.setRenderTarget(f),p=null,d=null,h=null,s=null,T=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",ne),x.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(D),s.renderState.layers===void 0){const ce={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Ui(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ce=null,Ee=null,pe=null;x.depth&&(pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=x.stencil?gs:us,Ee=x.stencil?ms:Ii);const we={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(we),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Ui(d.textureWidth,d.textureHeight,{format:cn,type:Wn,depthTexture:new nf(d.textureWidth,d.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ze.setContext(s),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function ne(te){for(let ce=0;ce<te.removed.length;ce++){const Ee=te.removed[ce],pe=E.indexOf(Ee);pe>=0&&(E[pe]=null,b[pe].disconnect(Ee))}for(let ce=0;ce<te.added.length;ce++){const Ee=te.added[ce];let pe=E.indexOf(Ee);if(pe===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=E.length){E.push(Ee),pe=Ie;break}else if(E[Ie]===null){E[Ie]=Ee,pe=Ie;break}if(pe===-1)break}const we=b[pe];we&&we.connect(Ee)}}const j=new O,Q=new O;function H(te,ce,Ee){j.setFromMatrixPosition(ce.matrixWorld),Q.setFromMatrixPosition(Ee.matrixWorld);const pe=j.distanceTo(Q),we=ce.projectionMatrix.elements,Ie=Ee.projectionMatrix.elements,Oe=we[14]/(we[10]-1),lt=we[14]/(we[10]+1),A=(we[9]+1)/we[5],C=(we[9]-1)/we[5],M=(we[8]-1)/we[0],se=(Ie[8]+1)/Ie[0],q=Oe*M,K=Oe*se,Z=pe/(-M+se),re=Z*-M;if(ce.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(re),te.translateZ(Z),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),we[10]===-1)te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Y=Oe+Z,_=lt+Z,m=q-re,w=K+(pe-re),B=A*lt/_*Y,k=C*lt/_*Y;te.projectionMatrix.makePerspective(m,w,B,k,Y,_),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function he(te,ce){ce===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ce.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ce=te.near,Ee=te.far;v.texture!==null&&(v.depthNear>0&&(ce=v.depthNear),v.depthFar>0&&(Ee=v.depthFar)),S.near=U.near=R.near=ce,S.far=U.far=R.far=Ee,(P!==S.near||$!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,$=S.far),R.layers.mask=te.layers.mask|2,U.layers.mask=te.layers.mask|4,S.layers.mask=R.layers.mask|U.layers.mask;const pe=te.parent,we=S.cameras;he(S,pe);for(let Ie=0;Ie<we.length;Ie++)he(we[Ie],pe);we.length===2?H(S,R,U):S.projectionMatrix.copy(R.projectionMatrix),ze(te,S,pe)};function ze(te,ce,Ee){Ee===null?te.matrix.copy(ce.matrixWorld):(te.matrix.copy(Ee.matrixWorld),te.matrix.invert(),te.matrix.multiply(ce.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ce.projectionMatrix),te.projectionMatrixInverse.copy(ce.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=el*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let ye=null;function Re(te,ce){if(u=ce.getViewerPose(c||o),g=ce,u!==null){const Ee=u.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let pe=!1;Ee.length!==S.cameras.length&&(S.cameras.length=0,pe=!0);for(let Ie=0;Ie<Ee.length;Ie++){const Oe=Ee[Ie];let lt=null;if(p!==null)lt=p.getViewport(Oe);else{const C=h.getViewSubImage(d,Oe);lt=C.viewport,Ie===0&&(e.setRenderTargetTextures(T,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(T))}let A=y[Ie];A===void 0&&(A=new Yt,A.layers.enable(Ie),A.viewport=new st,y[Ie]=A),A.matrix.fromArray(Oe.transform.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale),A.projectionMatrix.fromArray(Oe.projectionMatrix),A.projectionMatrixInverse.copy(A.projectionMatrix).invert(),A.viewport.set(lt.x,lt.y,lt.width,lt.height),Ie===0&&(S.matrix.copy(A.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),pe===!0&&S.cameras.push(A)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ie=h.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&v.init(e,Ie,s.renderState)}}for(let Ee=0;Ee<b.length;Ee++){const pe=E[Ee],we=b[Ee];pe!==null&&we!==void 0&&we.update(pe,ce,c||o)}ye&&ye(te,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),g=null}const Ze=new rf;Ze.setAnimationLoop(Re),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const Ei=new yn,X0=new ut;function $0(n,e){function t(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function i(x,f){f.color.getRGB(x.fogColor.value,Qh(n)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function s(x,f,T,b,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(x,f):f.isMeshToonMaterial?(r(x,f),h(x,f)):f.isMeshPhongMaterial?(r(x,f),u(x,f)):f.isMeshStandardMaterial?(r(x,f),d(x,f),f.isMeshPhysicalMaterial&&p(x,f,E)):f.isMeshMatcapMaterial?(r(x,f),g(x,f)):f.isMeshDepthMaterial?r(x,f):f.isMeshDistanceMaterial?(r(x,f),v(x,f)):f.isMeshNormalMaterial?r(x,f):f.isLineBasicMaterial?(o(x,f),f.isLineDashedMaterial&&a(x,f)):f.isPointsMaterial?l(x,f,T,b):f.isSpriteMaterial?c(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,t(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===Ht&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,t(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===Ht&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,t(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,t(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);const T=e.get(f),b=T.envMap,E=T.envMapRotation;b&&(x.envMap.value=b,Ei.copy(E),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),x.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(Ei)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,x.aoMapTransform))}function o(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform))}function a(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,T,b){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*T,x.scale.value=b*.5,f.map&&(x.map.value=f.map,t(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function c(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,t(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,t(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function u(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function h(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function d(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function p(x,f,T){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ht&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,f){f.matcap&&(x.matcap.value=f.matcap)}function v(x,f){const T=e.get(f).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function q0(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,b){const E=b.program;i.uniformBlockBinding(T,E)}function c(T,b){let E=s[T.id];E===void 0&&(g(T),E=u(T),s[T.id]=E,T.addEventListener("dispose",x));const D=b.program;i.updateUBOMapping(T,D);const L=e.render.frame;r[T.id]!==L&&(d(T),r[T.id]=L)}function u(T){const b=h();T.__bindingPointIndex=b;const E=n.createBuffer(),D=T.__size,L=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,D,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const b=s[T.id],E=T.uniforms,D=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let L=0,R=E.length;L<R;L++){const U=Array.isArray(E[L])?E[L]:[E[L]];for(let y=0,S=U.length;y<S;y++){const P=U[y];if(p(P,L,y,D)===!0){const $=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let ee=0;for(let ne=0;ne<G.length;ne++){const j=G[ne],Q=v(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,$+ee,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,ee),ee+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,b,E,D){const L=T.value,R=b+"_"+E;if(D[R]===void 0)return typeof L=="number"||typeof L=="boolean"?D[R]=L:D[R]=L.clone(),!0;{const U=D[R];if(typeof L=="number"||typeof L=="boolean"){if(U!==L)return D[R]=L,!0}else if(U.equals(L)===!1)return U.copy(L),!0}return!1}function g(T){const b=T.uniforms;let E=0;const D=16;for(let R=0,U=b.length;R<U;R++){const y=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,P=y.length;S<P;S++){const $=y[S],G=Array.isArray($.value)?$.value:[$.value];for(let ee=0,ne=G.length;ee<ne;ee++){const j=G[ee],Q=v(j),H=E%D,he=H%Q.boundary,ze=H+he;E+=he,ze!==0&&D-ze<Q.storage&&(E+=D-ze),$.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=Q.storage}}}const L=E%D;return L>0&&(E+=D-L),T.__size=E,T.__cache={},this}function v(T){const b={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(b.boundary=4,b.storage=4):T.isVector2?(b.boundary=8,b.storage=8):T.isVector3||T.isColor?(b.boundary=16,b.storage=12):T.isVector4?(b.boundary=16,b.storage=16):T.isMatrix3?(b.boundary=48,b.storage=48):T.isMatrix4?(b.boundary=64,b.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),b}function x(T){const b=T.target;b.removeEventListener("dispose",x);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function f(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Y0{constructor(e={}){const{canvas:t=Tx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),v=new Int32Array(4);let x=null,f=null;const T=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=si,this.toneMappingExposure=1;const E=this;let D=!1,L=0,R=0,U=null,y=-1,S=null;const P=new st,$=new st;let G=null;const ee=new Ke(0);let ne=0,j=t.width,Q=t.height,H=1,he=null,ze=null;const ye=new st(0,0,j,Q),Re=new st(0,0,j,Q);let Ze=!1;const te=new Il;let ce=!1,Ee=!1;const pe=new ut,we=new ut,Ie=new O,Oe=new st,lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let A=!1;function C(){return U===null?H:1}let M=i;function se(z,F){return t.getContext(z,F)}try{const z={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bl}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ve,!1),M===null){const F="webgl2";if(M=se(F,z),M===null)throw se(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(z){throw console.error("THREE.WebGLRenderer: "+z.message),z}let q,K,Z,re,Y,_,m,w,B,k,V,ue,oe,fe,Pe,ae,me,Te,Le,de,Ue,Be,rt,I;function ge(){q=new i1(M),q.init(),Be=new B0(M,q),K=new Z_(M,q,e,Be),Z=new N0(M,q),K.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),re=new o1(M),Y=new y0,_=new O0(M,q,Z,Y,K,Be,re),m=new Q_(E),w=new n1(E),B=new dm(M),rt=new j_(M,B),k=new s1(M,B,re,rt),V=new l1(M,k,B,re),Le=new a1(M,K,_),ae=new J_(Y),ue=new E0(E,m,w,q,K,rt,ae),oe=new $0(E,Y),fe=new T0,Pe=new L0(q),Te=new Y_(E,m,w,Z,V,p,l),me=new U0(E,V,K),I=new q0(M,re,K,Z),de=new K_(M,q,re),Ue=new r1(M,q,re),re.programs=ue.programs,E.capabilities=K,E.extensions=q,E.properties=Y,E.renderLists=fe,E.shadowMap=me,E.state=Z,E.info=re}ge();const J=new W0(E,M);this.xr=J,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){const z=q.get("WEBGL_lose_context");z&&z.loseContext()},this.forceContextRestore=function(){const z=q.get("WEBGL_lose_context");z&&z.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(z){z!==void 0&&(H=z,this.setSize(j,Q,!1))},this.getSize=function(z){return z.set(j,Q)},this.setSize=function(z,F,W=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=z,Q=F,t.width=Math.floor(z*H),t.height=Math.floor(F*H),W===!0&&(t.style.width=z+"px",t.style.height=F+"px"),this.setViewport(0,0,z,F)},this.getDrawingBufferSize=function(z){return z.set(j*H,Q*H).floor()},this.setDrawingBufferSize=function(z,F,W){j=z,Q=F,H=W,t.width=Math.floor(z*W),t.height=Math.floor(F*W),this.setViewport(0,0,z,F)},this.getCurrentViewport=function(z){return z.copy(P)},this.getViewport=function(z){return z.copy(ye)},this.setViewport=function(z,F,W,X){z.isVector4?ye.set(z.x,z.y,z.z,z.w):ye.set(z,F,W,X),Z.viewport(P.copy(ye).multiplyScalar(H).round())},this.getScissor=function(z){return z.copy(Re)},this.setScissor=function(z,F,W,X){z.isVector4?Re.set(z.x,z.y,z.z,z.w):Re.set(z,F,W,X),Z.scissor($.copy(Re).multiplyScalar(H).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(z){Z.setScissorTest(Ze=z)},this.setOpaqueSort=function(z){he=z},this.setTransparentSort=function(z){ze=z},this.getClearColor=function(z){return z.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(z=!0,F=!0,W=!0){let X=0;if(z){let N=!1;if(U!==null){const le=U.texture.format;N=le===Ll||le===Pl||le===Rl}if(N){const le=U.texture.type,_e=le===Wn||le===Ii||le===$s||le===ms||le===wl||le===Cl,Se=Te.getClearColor(),be=Te.getClearAlpha(),Fe=Se.r,Ne=Se.g,Ae=Se.b;_e?(g[0]=Fe,g[1]=Ne,g[2]=Ae,g[3]=be,M.clearBufferuiv(M.COLOR,0,g)):(v[0]=Fe,v[1]=Ne,v[2]=Ae,v[3]=be,M.clearBufferiv(M.COLOR,0,v))}else X|=M.COLOR_BUFFER_BIT}F&&(X|=M.DEPTH_BUFFER_BIT),W&&(X|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),M.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Te.dispose(),fe.dispose(),Pe.dispose(),Y.dispose(),m.dispose(),w.dispose(),V.dispose(),rt.dispose(),I.dispose(),ue.dispose(),J.dispose(),J.removeEventListener("sessionstart",Bl),J.removeEventListener("sessionend",Hl),pi.stop()};function ie(z){z.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const z=re.autoReset,F=me.enabled,W=me.autoUpdate,X=me.needsUpdate,N=me.type;ge(),re.autoReset=z,me.enabled=F,me.autoUpdate=W,me.needsUpdate=X,me.type=N}function ve(z){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",z.statusMessage)}function Ve(z){const F=z.target;F.removeEventListener("dispose",Ve),ht(F)}function ht(z){Et(z),Y.remove(z)}function Et(z){const F=Y.get(z).programs;F!==void 0&&(F.forEach(function(W){ue.releaseProgram(W)}),z.isShaderMaterial&&ue.releaseShaderCache(z))}this.renderBufferDirect=function(z,F,W,X,N,le){F===null&&(F=lt);const _e=N.isMesh&&N.matrixWorld.determinant()<0,Se=uf(z,F,W,X,N);Z.setMaterial(X,_e);let be=W.index,Fe=1;if(X.wireframe===!0){if(be=k.getWireframeAttribute(W),be===void 0)return;Fe=2}const Ne=W.drawRange,Ae=W.attributes.position;let qe=Ne.start*Fe,Je=(Ne.start+Ne.count)*Fe;le!==null&&(qe=Math.max(qe,le.start*Fe),Je=Math.min(Je,(le.start+le.count)*Fe)),be!==null?(qe=Math.max(qe,0),Je=Math.min(Je,be.count)):Ae!=null&&(qe=Math.max(qe,0),Je=Math.min(Je,Ae.count));const xt=Je-qe;if(xt<0||xt===1/0)return;rt.setup(N,X,Se,W,be);let ft,Ye=de;if(be!==null&&(ft=B.get(be),Ye=Ue,Ye.setIndex(ft)),N.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*C()),Ye.setMode(M.LINES)):Ye.setMode(M.TRIANGLES);else if(N.isLine){let Ce=X.linewidth;Ce===void 0&&(Ce=1),Z.setLineWidth(Ce*C()),N.isLineSegments?Ye.setMode(M.LINES):N.isLineLoop?Ye.setMode(M.LINE_LOOP):Ye.setMode(M.LINE_STRIP)}else N.isPoints?Ye.setMode(M.POINTS):N.isSprite&&Ye.setMode(M.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ye.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))Ye.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ce=N._multiDrawStarts,Mt=N._multiDrawCounts,Qe=N._multiDrawCount,sn=be?B.get(be).bytesPerElement:1,Bi=Y.get(X).currentProgram.getUniforms();for(let Gt=0;Gt<Qe;Gt++)Bi.setValue(M,"_gl_DrawID",Gt),Ye.render(Ce[Gt]/sn,Mt[Gt])}else if(N.isInstancedMesh)Ye.renderInstances(qe,xt,N.count);else if(W.isInstancedBufferGeometry){const Ce=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Mt=Math.min(W.instanceCount,Ce);Ye.renderInstances(qe,xt,Mt)}else Ye.render(qe,xt)};function nt(z,F,W){z.transparent===!0&&z.side===Nn&&z.forceSinglePass===!1?(z.side=Ht,z.needsUpdate=!0,nr(z,F,W),z.side=oi,z.needsUpdate=!0,nr(z,F,W),z.side=Nn):nr(z,F,W)}this.compile=function(z,F,W=null){W===null&&(W=z),f=Pe.get(W),f.init(F),b.push(f),W.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),z!==W&&z.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const X=new Set;return z.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const Se=le[_e];nt(Se,W,N),X.add(Se)}else nt(le,W,N),X.add(le)}),b.pop(),f=null,X},this.compileAsync=function(z,F,W=null){const X=this.compile(z,F,W);return new Promise(N=>{function le(){if(X.forEach(function(_e){Y.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){N(z);return}setTimeout(le,10)}q.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let nn=null;function bn(z){nn&&nn(z)}function Bl(){pi.stop()}function Hl(){pi.start()}const pi=new rf;pi.setAnimationLoop(bn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(z){nn=z,J.setAnimationLoop(z),z===null?pi.stop():pi.start()},J.addEventListener("sessionstart",Bl),J.addEventListener("sessionend",Hl),this.render=function(z,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),z.isScene===!0&&z.onBeforeRender(E,z,F,U),f=Pe.get(z,b.length),f.init(F),b.push(f),we.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),te.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,ce=ae.init(this.clippingPlanes,Ee),x=fe.get(z,T.length),x.init(),T.push(x),J.enabled===!0&&J.isPresenting===!0){const le=E.xr.getDepthSensingMesh();le!==null&&lo(le,F,-1/0,E.sortObjects)}lo(z,F,0,E.sortObjects),x.finish(),E.sortObjects===!0&&x.sort(he,ze),A=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,A&&Te.addToRenderList(x,z),this.info.render.frame++,ce===!0&&ae.beginShadows();const W=f.state.shadowsArray;me.render(W,z,F),ce===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,N=x.transmissive;if(f.setupLights(),F.isArrayCamera){const le=F.cameras;if(N.length>0)for(let _e=0,Se=le.length;_e<Se;_e++){const be=le[_e];Gl(X,N,z,be)}A&&Te.render(z);for(let _e=0,Se=le.length;_e<Se;_e++){const be=le[_e];Vl(x,z,be,be.viewport)}}else N.length>0&&Gl(X,N,z,F),A&&Te.render(z),Vl(x,z,F);U!==null&&(_.updateMultisampleRenderTarget(U),_.updateRenderTargetMipmap(U)),z.isScene===!0&&z.onAfterRender(E,z,F),rt.resetDefaultState(),y=-1,S=null,b.pop(),b.length>0?(f=b[b.length-1],ce===!0&&ae.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?x=T[T.length-1]:x=null};function lo(z,F,W,X){if(z.visible===!1)return;if(z.layers.test(F.layers)){if(z.isGroup)W=z.renderOrder;else if(z.isLOD)z.autoUpdate===!0&&z.update(F);else if(z.isLight)f.pushLight(z),z.castShadow&&f.pushShadow(z);else if(z.isSprite){if(!z.frustumCulled||te.intersectsSprite(z)){X&&Oe.setFromMatrixPosition(z.matrixWorld).applyMatrix4(we);const _e=V.update(z),Se=z.material;Se.visible&&x.push(z,_e,Se,W,Oe.z,null)}}else if((z.isMesh||z.isLine||z.isPoints)&&(!z.frustumCulled||te.intersectsObject(z))){const _e=V.update(z),Se=z.material;if(X&&(z.boundingSphere!==void 0?(z.boundingSphere===null&&z.computeBoundingSphere(),Oe.copy(z.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Oe.copy(_e.boundingSphere.center)),Oe.applyMatrix4(z.matrixWorld).applyMatrix4(we)),Array.isArray(Se)){const be=_e.groups;for(let Fe=0,Ne=be.length;Fe<Ne;Fe++){const Ae=be[Fe],qe=Se[Ae.materialIndex];qe&&qe.visible&&x.push(z,_e,qe,W,Oe.z,Ae)}}else Se.visible&&x.push(z,_e,Se,W,Oe.z,null)}}const le=z.children;for(let _e=0,Se=le.length;_e<Se;_e++)lo(le[_e],F,W,X)}function Vl(z,F,W,X){const N=z.opaque,le=z.transmissive,_e=z.transparent;f.setupLightsView(W),ce===!0&&ae.setGlobalState(E.clippingPlanes,W),X&&Z.viewport(P.copy(X)),N.length>0&&tr(N,F,W),le.length>0&&tr(le,F,W),_e.length>0&&tr(_e,F,W),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Gl(z,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Ui(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Zs:Wn,minFilter:Ri,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace}));const le=f.state.transmissionRenderTarget[X.id],_e=X.viewport||P;le.setSize(_e.z,_e.w);const Se=E.getRenderTarget();E.setRenderTarget(le),E.getClearColor(ee),ne=E.getClearAlpha(),ne<1&&E.setClearColor(16777215,.5),E.clear(),A&&Te.render(W);const be=E.toneMapping;E.toneMapping=si;const Fe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),ce===!0&&ae.setGlobalState(E.clippingPlanes,X),tr(z,W,X),_.updateMultisampleRenderTarget(le),_.updateRenderTargetMipmap(le),q.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Ae=0,qe=F.length;Ae<qe;Ae++){const Je=F[Ae],xt=Je.object,ft=Je.geometry,Ye=Je.material,Ce=Je.group;if(Ye.side===Nn&&xt.layers.test(X.layers)){const Mt=Ye.side;Ye.side=Ht,Ye.needsUpdate=!0,kl(xt,W,X,ft,Ye,Ce),Ye.side=Mt,Ye.needsUpdate=!0,Ne=!0}}Ne===!0&&(_.updateMultisampleRenderTarget(le),_.updateRenderTargetMipmap(le))}E.setRenderTarget(Se),E.setClearColor(ee,ne),Fe!==void 0&&(X.viewport=Fe),E.toneMapping=be}function tr(z,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let N=0,le=z.length;N<le;N++){const _e=z[N],Se=_e.object,be=_e.geometry,Fe=X===null?_e.material:X,Ne=_e.group;Se.layers.test(W.layers)&&kl(Se,F,W,be,Fe,Ne)}}function kl(z,F,W,X,N,le){z.onBeforeRender(E,F,W,X,N,le),z.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,z.matrixWorld),z.normalMatrix.getNormalMatrix(z.modelViewMatrix),N.onBeforeRender(E,F,W,X,z,le),N.transparent===!0&&N.side===Nn&&N.forceSinglePass===!1?(N.side=Ht,N.needsUpdate=!0,E.renderBufferDirect(W,F,X,N,z,le),N.side=oi,N.needsUpdate=!0,E.renderBufferDirect(W,F,X,N,z,le),N.side=Nn):E.renderBufferDirect(W,F,X,N,z,le),z.onAfterRender(E,F,W,X,N,le)}function nr(z,F,W){F.isScene!==!0&&(F=lt);const X=Y.get(z),N=f.state.lights,le=f.state.shadowsArray,_e=N.state.version,Se=ue.getParameters(z,N.state,le,F,W),be=ue.getProgramCacheKey(Se);let Fe=X.programs;X.environment=z.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(z.isMeshStandardMaterial?w:m).get(z.envMap||X.environment),X.envMapRotation=X.environment!==null&&z.envMap===null?F.environmentRotation:z.envMapRotation,Fe===void 0&&(z.addEventListener("dispose",Ve),Fe=new Map,X.programs=Fe);let Ne=Fe.get(be);if(Ne!==void 0){if(X.currentProgram===Ne&&X.lightsStateVersion===_e)return Xl(z,Se),Ne}else Se.uniforms=ue.getUniforms(z),z.onBeforeCompile(Se,E),Ne=ue.acquireProgram(Se,be),Fe.set(be,Ne),X.uniforms=Se.uniforms;const Ae=X.uniforms;return(!z.isShaderMaterial&&!z.isRawShaderMaterial||z.clipping===!0)&&(Ae.clippingPlanes=ae.uniform),Xl(z,Se),X.needsLights=ff(z),X.lightsStateVersion=_e,X.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=Ne,X.uniformsList=null,Ne}function Wl(z){if(z.uniformsList===null){const F=z.currentProgram.getUniforms();z.uniformsList=Or.seqWithValue(F.seq,z.uniforms)}return z.uniformsList}function Xl(z,F){const W=Y.get(z);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function uf(z,F,W,X,N){F.isScene!==!0&&(F=lt),_.resetTextureUnits();const le=F.fog,_e=X.isMeshStandardMaterial?F.environment:null,Se=U===null?E.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:_s,be=(X.isMeshStandardMaterial?w:m).get(X.envMap||_e),Fe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ne=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ae=!!W.morphAttributes.position,qe=!!W.morphAttributes.normal,Je=!!W.morphAttributes.color;let xt=si;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(xt=E.toneMapping);const ft=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ye=ft!==void 0?ft.length:0,Ce=Y.get(X),Mt=f.state.lights;if(ce===!0&&(Ee===!0||z!==S)){const Ct=z===S&&X.id===y;ae.setState(X,z,Ct)}let Qe=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Mt.state.version||Ce.outputColorSpace!==Se||N.isBatchedMesh&&Ce.batching===!1||!N.isBatchedMesh&&Ce.batching===!0||N.isBatchedMesh&&Ce.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ce.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ce.instancing===!1||!N.isInstancedMesh&&Ce.instancing===!0||N.isSkinnedMesh&&Ce.skinning===!1||!N.isSkinnedMesh&&Ce.skinning===!0||N.isInstancedMesh&&Ce.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ce.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ce.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ce.instancingMorph===!1&&N.morphTexture!==null||Ce.envMap!==be||X.fog===!0&&Ce.fog!==le||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==ae.numPlanes||Ce.numIntersection!==ae.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==Ne||Ce.morphTargets!==Ae||Ce.morphNormals!==qe||Ce.morphColors!==Je||Ce.toneMapping!==xt||Ce.morphTargetsCount!==Ye)&&(Qe=!0):(Qe=!0,Ce.__version=X.version);let sn=Ce.currentProgram;Qe===!0&&(sn=nr(X,F,N));let Bi=!1,Gt=!1,Ss=!1;const ct=sn.getUniforms(),Qt=Ce.uniforms;if(Z.useProgram(sn.program)&&(Bi=!0,Gt=!0,Ss=!0),X.id!==y&&(y=X.id,Gt=!0),Bi||S!==z){Z.buffers.depth.getReversed()?(pe.copy(z.projectionMatrix),wx(pe),Cx(pe),ct.setValue(M,"projectionMatrix",pe)):ct.setValue(M,"projectionMatrix",z.projectionMatrix),ct.setValue(M,"viewMatrix",z.matrixWorldInverse);const Nt=ct.map.cameraPosition;Nt!==void 0&&Nt.setValue(M,Ie.setFromMatrixPosition(z.matrixWorld)),K.logarithmicDepthBuffer&&ct.setValue(M,"logDepthBufFC",2/(Math.log(z.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ct.setValue(M,"isOrthographic",z.isOrthographicCamera===!0),S!==z&&(S=z,Gt=!0,Ss=!0)}if(N.isSkinnedMesh){ct.setOptional(M,N,"bindMatrix"),ct.setOptional(M,N,"bindMatrixInverse");const Ct=N.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ct.setValue(M,"boneTexture",Ct.boneTexture,_))}N.isBatchedMesh&&(ct.setOptional(M,N,"batchingTexture"),ct.setValue(M,"batchingTexture",N._matricesTexture,_),ct.setOptional(M,N,"batchingIdTexture"),ct.setValue(M,"batchingIdTexture",N._indirectTexture,_),ct.setOptional(M,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(M,"batchingColorTexture",N._colorsTexture,_));const en=W.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Le.update(N,W,sn),(Gt||Ce.receiveShadow!==N.receiveShadow)&&(Ce.receiveShadow=N.receiveShadow,ct.setValue(M,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Qt.envMap.value=be,Qt.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(Qt.envMapIntensity.value=F.environmentIntensity),Gt&&(ct.setValue(M,"toneMappingExposure",E.toneMappingExposure),Ce.needsLights&&hf(Qt,Ss),le&&X.fog===!0&&oe.refreshFogUniforms(Qt,le),oe.refreshMaterialUniforms(Qt,X,H,Q,f.state.transmissionRenderTarget[z.id]),Or.upload(M,Wl(Ce),Qt,_)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Or.upload(M,Wl(Ce),Qt,_),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ct.setValue(M,"center",N.center),ct.setValue(M,"modelViewMatrix",N.modelViewMatrix),ct.setValue(M,"normalMatrix",N.normalMatrix),ct.setValue(M,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ct=X.uniformsGroups;for(let Nt=0,co=Ct.length;Nt<co;Nt++){const xi=Ct[Nt];I.update(xi,sn),I.bind(xi,sn)}}return sn}function hf(z,F){z.ambientLightColor.needsUpdate=F,z.lightProbe.needsUpdate=F,z.directionalLights.needsUpdate=F,z.directionalLightShadows.needsUpdate=F,z.pointLights.needsUpdate=F,z.pointLightShadows.needsUpdate=F,z.spotLights.needsUpdate=F,z.spotLightShadows.needsUpdate=F,z.rectAreaLights.needsUpdate=F,z.hemisphereLights.needsUpdate=F}function ff(z){return z.isMeshLambertMaterial||z.isMeshToonMaterial||z.isMeshPhongMaterial||z.isMeshStandardMaterial||z.isShadowMaterial||z.isShaderMaterial&&z.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(z,F,W){Y.get(z.texture).__webglTexture=F,Y.get(z.depthTexture).__webglTexture=W;const X=Y.get(z);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(z,F){const W=Y.get(z);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(z,F=0,W=0){U=z,L=F,R=W;let X=!0,N=null,le=!1,_e=!1;if(z){const be=Y.get(z);if(be.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(M.FRAMEBUFFER,null),X=!1;else if(be.__webglFramebuffer===void 0)_.setupRenderTarget(z);else if(be.__hasExternalTextures)_.rebindTextures(z,Y.get(z.texture).__webglTexture,Y.get(z.depthTexture).__webglTexture);else if(z.depthBuffer){const Ae=z.depthTexture;if(be.__boundDepthTexture!==Ae){if(Ae!==null&&Y.has(Ae)&&(z.width!==Ae.image.width||z.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(z)}}const Fe=z.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(_e=!0);const Ne=Y.get(z).__webglFramebuffer;z.isWebGLCubeRenderTarget?(Array.isArray(Ne[F])?N=Ne[F][W]:N=Ne[F],le=!0):z.samples>0&&_.useMultisampledRTT(z)===!1?N=Y.get(z).__webglMultisampledFramebuffer:Array.isArray(Ne)?N=Ne[W]:N=Ne,P.copy(z.viewport),$.copy(z.scissor),G=z.scissorTest}else P.copy(ye).multiplyScalar(H).floor(),$.copy(Re).multiplyScalar(H).floor(),G=Ze;if(Z.bindFramebuffer(M.FRAMEBUFFER,N)&&X&&Z.drawBuffers(z,N),Z.viewport(P),Z.scissor($),Z.setScissorTest(G),le){const be=Y.get(z.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,W)}else if(_e){const be=Y.get(z.texture),Fe=F||0;M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,be.__webglTexture,W||0,Fe)}y=-1},this.readRenderTargetPixels=function(z,F,W,X,N,le,_e){if(!(z&&z.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Y.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){Z.bindFramebuffer(M.FRAMEBUFFER,Se);try{const be=z.texture,Fe=be.format,Ne=be.type;if(!K.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=z.width-X&&W>=0&&W<=z.height-N&&M.readPixels(F,W,X,N,Be.convert(Fe),Be.convert(Ne),le)}finally{const be=U!==null?Y.get(U).__webglFramebuffer:null;Z.bindFramebuffer(M.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(z,F,W,X,N,le,_e){if(!(z&&z.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Y.get(z).__webglFramebuffer;if(z.isWebGLCubeRenderTarget&&_e!==void 0&&(Se=Se[_e]),Se){const be=z.texture,Fe=be.format,Ne=be.type;if(!K.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=z.width-X&&W>=0&&W<=z.height-N){Z.bindFramebuffer(M.FRAMEBUFFER,Se);const Ae=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,Ae),M.bufferData(M.PIXEL_PACK_BUFFER,le.byteLength,M.STREAM_READ),M.readPixels(F,W,X,N,Be.convert(Fe),Be.convert(Ne),0);const qe=U!==null?Y.get(U).__webglFramebuffer:null;Z.bindFramebuffer(M.FRAMEBUFFER,qe);const Je=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await Ax(M,Je,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,Ae),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,le),M.deleteBuffer(Ae),M.deleteSync(Je),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(z,F=null,W=0){z.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,z=arguments[1]);const X=Math.pow(2,-W),N=Math.floor(z.image.width*X),le=Math.floor(z.image.height*X),_e=F!==null?F.x:0,Se=F!==null?F.y:0;_.setTexture2D(z,0),M.copyTexSubImage2D(M.TEXTURE_2D,W,0,0,_e,Se,N,le),Z.unbindTexture()};const df=M.createFramebuffer(),pf=M.createFramebuffer();this.copyTextureToTexture=function(z,F,W=null,X=null,N=0,le=null){z.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,z=arguments[1],F=arguments[2],le=arguments[3]||0,W=null),le===null&&(N!==0?(is("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=N,N=0):le=0);let _e,Se,be,Fe,Ne,Ae,qe,Je,xt;const ft=z.isCompressedTexture?z.mipmaps[le]:z.image;if(W!==null)_e=W.max.x-W.min.x,Se=W.max.y-W.min.y,be=W.isBox3?W.max.z-W.min.z:1,Fe=W.min.x,Ne=W.min.y,Ae=W.isBox3?W.min.z:0;else{const en=Math.pow(2,-N);_e=Math.floor(ft.width*en),Se=Math.floor(ft.height*en),z.isDataArrayTexture?be=ft.depth:z.isData3DTexture?be=Math.floor(ft.depth*en):be=1,Fe=0,Ne=0,Ae=0}X!==null?(qe=X.x,Je=X.y,xt=X.z):(qe=0,Je=0,xt=0);const Ye=Be.convert(F.format),Ce=Be.convert(F.type);let Mt;F.isData3DTexture?(_.setTexture3D(F,0),Mt=M.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(_.setTexture2DArray(F,0),Mt=M.TEXTURE_2D_ARRAY):(_.setTexture2D(F,0),Mt=M.TEXTURE_2D),M.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,F.flipY),M.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),M.pixelStorei(M.UNPACK_ALIGNMENT,F.unpackAlignment);const Qe=M.getParameter(M.UNPACK_ROW_LENGTH),sn=M.getParameter(M.UNPACK_IMAGE_HEIGHT),Bi=M.getParameter(M.UNPACK_SKIP_PIXELS),Gt=M.getParameter(M.UNPACK_SKIP_ROWS),Ss=M.getParameter(M.UNPACK_SKIP_IMAGES);M.pixelStorei(M.UNPACK_ROW_LENGTH,ft.width),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,ft.height),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Fe),M.pixelStorei(M.UNPACK_SKIP_ROWS,Ne),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Ae);const ct=z.isDataArrayTexture||z.isData3DTexture,Qt=F.isDataArrayTexture||F.isData3DTexture;if(z.isDepthTexture){const en=Y.get(z),Ct=Y.get(F),Nt=Y.get(en.__renderTarget),co=Y.get(Ct.__renderTarget);Z.bindFramebuffer(M.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Z.bindFramebuffer(M.DRAW_FRAMEBUFFER,co.__webglFramebuffer);for(let xi=0;xi<be;xi++)ct&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Y.get(z).__webglTexture,N,Ae+xi),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Y.get(F).__webglTexture,le,xt+xi)),M.blitFramebuffer(Fe,Ne,_e,Se,qe,Je,_e,Se,M.DEPTH_BUFFER_BIT,M.NEAREST);Z.bindFramebuffer(M.READ_FRAMEBUFFER,null),Z.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(N!==0||z.isRenderTargetTexture||Y.has(z)){const en=Y.get(z),Ct=Y.get(F);Z.bindFramebuffer(M.READ_FRAMEBUFFER,df),Z.bindFramebuffer(M.DRAW_FRAMEBUFFER,pf);for(let Nt=0;Nt<be;Nt++)ct?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,en.__webglTexture,N,Ae+Nt):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,en.__webglTexture,N),Qt?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,Ct.__webglTexture,le,xt+Nt):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,Ct.__webglTexture,le),N!==0?M.blitFramebuffer(Fe,Ne,_e,Se,qe,Je,_e,Se,M.COLOR_BUFFER_BIT,M.NEAREST):Qt?M.copyTexSubImage3D(Mt,le,qe,Je,xt+Nt,Fe,Ne,_e,Se):M.copyTexSubImage2D(Mt,le,qe,Je,Fe,Ne,_e,Se);Z.bindFramebuffer(M.READ_FRAMEBUFFER,null),Z.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else Qt?z.isDataTexture||z.isData3DTexture?M.texSubImage3D(Mt,le,qe,Je,xt,_e,Se,be,Ye,Ce,ft.data):F.isCompressedArrayTexture?M.compressedTexSubImage3D(Mt,le,qe,Je,xt,_e,Se,be,Ye,ft.data):M.texSubImage3D(Mt,le,qe,Je,xt,_e,Se,be,Ye,Ce,ft):z.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,le,qe,Je,_e,Se,Ye,Ce,ft.data):z.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,le,qe,Je,ft.width,ft.height,Ye,ft.data):M.texSubImage2D(M.TEXTURE_2D,le,qe,Je,_e,Se,Ye,Ce,ft);M.pixelStorei(M.UNPACK_ROW_LENGTH,Qe),M.pixelStorei(M.UNPACK_IMAGE_HEIGHT,sn),M.pixelStorei(M.UNPACK_SKIP_PIXELS,Bi),M.pixelStorei(M.UNPACK_SKIP_ROWS,Gt),M.pixelStorei(M.UNPACK_SKIP_IMAGES,Ss),le===0&&F.generateMipmaps&&M.generateMipmap(Mt),Z.unbindTexture()},this.copyTextureToTexture3D=function(z,F,W=null,X=null,N=0){return z.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,z=arguments[2],F=arguments[3],N=arguments[4]||0),is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(z,F,W,X,N)},this.initRenderTarget=function(z){Y.get(z).__webglFramebuffer===void 0&&_.setupRenderTarget(z)},this.initTexture=function(z){z.isCubeTexture?_.setTextureCube(z,0):z.isData3DTexture?_.setTexture3D(z,0):z.isDataArrayTexture||z.isCompressedArrayTexture?_.setTexture2DArray(z,0):_.setTexture2D(z,0),Z.unbindTexture()},this.resetState=function(){L=0,R=0,U=null,Z.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=je._getDrawingBufferColorSpace(e),t.unpackColorSpace=je._getUnpackColorSpace()}}function j0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Br={exports:{}},K0=Br.exports,Eu;function Z0(){return Eu||(Eu=1,function(n,e){(function(t,i){n.exports=i()})(K0,function(){var t=function(){function i(p){return o.appendChild(p.dom),p}function s(p){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===p?"block":"none";r=p}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),s(++r%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,u=i(new t.Panel("FPS","#0ff","#002")),h=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=i(new t.Panel("MB","#f08","#201"));return s(0),{REVISION:16,dom:o,addPanel:i,showPanel:s,begin:function(){a=(performance||Date).now()},end:function(){c++;var p=(performance||Date).now();if(h.update(p-a,200),p>l+1e3&&(u.update(1e3*c/(p-l),100),l=p,c=0,d)){var g=performance.memory;d.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:o,setMode:s}};return t.Panel=function(i,s,r){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,h=48*c,d=3*c,p=2*c,g=3*c,v=15*c,x=74*c,f=30*c,T=document.createElement("canvas");T.width=u,T.height=h,T.style.cssText="width:80px;height:48px";var b=T.getContext("2d");return b.font="bold "+9*c+"px Helvetica,Arial,sans-serif",b.textBaseline="top",b.fillStyle=r,b.fillRect(0,0,u,h),b.fillStyle=s,b.fillText(i,d,p),b.fillRect(g,v,x,f),b.fillStyle=r,b.globalAlpha=.9,b.fillRect(g,v,x,f),{dom:T,update:function(E,D){o=Math.min(o,E),a=Math.max(a,E),b.fillStyle=r,b.globalAlpha=1,b.fillRect(0,0,u,v),b.fillStyle=s,b.fillText(l(E)+" "+i+" ("+l(o)+"-"+l(a)+")",d,p),b.drawImage(T,g+c,v,x-c,f,g,v,x-c,f),b.fillRect(g+x-c,v,c,f),b.fillStyle=r,b.globalAlpha=.9,b.fillRect(g+x-c,v,c,l((1-E/D)*f))}}},t})}(Br)),Br.exports}var J0=Z0();const Q0=j0(J0),ev="/lab-fps/assets/texturewall-CG54tPvi.png",tv="/lab-fps/assets/texturewallspecular-CynD6HD0.png",nv="/lab-fps/assets/displacementwall-CdfoBOFY.jpg",iv="/lab-fps/assets/groundtexture-DOMAypnk.jpg",sv="/lab-fps/assets/perlin-DJdjP0hB.png",rv="/lab-fps/assets/perlin-high-contrast-Ba_swABj.png";class ov{constructor(e){De(this,"mesh");De(this,"meshsPlacement");De(this,"boundingBoxes");De(this,"groundBoundingBox");De(this,"tpBoundingBox");De(this,"engine");De(this,"textureLoader");De(this,"texture");De(this,"normalTexture");De(this,"displacementTexture");De(this,"textureGround");De(this,"noisetexture");De(this,"noisehightexture");De(this,"loadingManager");De(this,"tpLight");this.tpLight=[],this.loadingManager=new sf,this.textureLoader=new rm(this.loadingManager),this.texture=this.textureLoader.load(ev),this.normalTexture=this.textureLoader.load(tv),this.displacementTexture=this.textureLoader.load(nv),this.textureGround=this.textureLoader.load(iv),this.textureGround.wrapT=Un,this.textureGround.wrapS=Un,this.textureGround.repeat=new Xe(35,35),this.texture.colorSpace=qt,this.noisetexture=this.textureLoader.load(sv),this.noisetexture.wrapT=Un,this.noisetexture.wrapS=Un,this.noisetexture.repeat=new Xe(35,35),this.noisehightexture=this.textureLoader.load(rv),this.noisehightexture.wrapT=Un,this.noisehightexture.wrapS=Un,this.noisehightexture.repeat=new Xe(35,35),this.mesh=new Ut,this.meshsPlacement=[],this.boundingBoxes=[],this.tpBoundingBox=[],this.engine=e,this.setEnvironment()}tick(){this.tpBoundingBox.length>0&&this.moveTP()}setEnvironment(){this.createGround(),this.createLevelPlacement(),this.createLevel()}createBlock(e,t){const i=new ai(1,4,1,40,40),s=new Nr({map:this.texture,normalMap:this.normalTexture,specular:929577,shininess:20,normalScale:new Xe(.66,.66),displacementMap:this.displacementTexture,displacementScale:.035}),r=new Ut(i,s);r.position.set(e,0,t),r.userData.typeOfBlock="obstacle";const o=new Gn().setFromObject(r);this.boundingBoxes.push(o),this.mesh.add(r)}createGround(){const e=new ai(24,.5,24),t=new Nr({color:7829367,specular:539186,map:this.textureGround}),i=new Ut(e,t);this.groundBoundingBox=new Gn().setFromObject(i),i.userData.typeOfBlock="ground",i.position.y=-.75,this.mesh.add(i)}createTP(e,t){const i=new Ul(.8,.5,20,25,50),s=new Nr({color:16777215,displacementMap:this.noisetexture,alphaMap:this.noisehightexture,emissive:13266403,shininess:30,transparent:!0,opacity:.5}),r=new Ls,o=new tl(16609535,4,20,3),a=new Ut(i,s);a.position.set(e,9,t),o.position.set(e+.1,1,t+.1),a.userData.typeOfBlock="tp";const l=new Gn().setFromObject(a);this.tpBoundingBox.push(l),r.add(a,o),this.tpLight.push(r),this.mesh.add(r)}moveTP(){this.tpLight.forEach(e=>{e.children[0].rotation.y+=.09,e.children[0].position.y=Math.cos(this.engine.elapsedTime)/3+.5,e.children[1].intensity=Math.cos(this.engine.elapsedTime*2)+4})}createLevelPlacement(){var e;Yr[this.engine.layer].level.forEach(t=>{const i={x:t.x,z:t.z,type:"wall"};this.meshsPlacement.push(i)}),(e=Yr[this.engine.layer].tpPlacement)==null||e.forEach(t=>{const i={x:t.x,z:t.z,type:"tp"};this.meshsPlacement.push(i)})}createLevel(){this.meshsPlacement.forEach(e=>{e.type==="tp"?this.createTP(e.x-11.5,e.z-11.5):this.createBlock(e.x-11.5,e.z-11.5)})}}class av{constructor(e){De(this,"mesh");De(this,"vecteur_mouvement");De(this,"speed");De(this,"engine");De(this,"boundingBox");De(this,"light");De(this,"secondLight");De(this,"collideGround");De(this,"canMove");De(this,"accelerate");De(this,"gun");De(this,"isTp");this.collideGround=!0,this.isTp=!1,this.gun=this.canMove=!1,this.speed=1.5,this.mesh=new Ut,this.engine=e,this.createCharacter(),this.getEventMove(),this.vecteur_mouvement={x:0,y:0,z:0},this.accelerate=1,this.boundingBox=new Gn,this.light=new tl(16736604,1,7),this.secondLight=new tl(16777215,2,20),this.light.position.y=.8,this.secondLight.position.y=1.5,this.mesh.add(this.light),this.mesh.add(this.secondLight)}tick(){this.collideGround?(this.updateCameraPosition(),this.moveLight(),this.updateBoundingBox(),this.checkGroundCollision(),this.canMove&&this.moveCharacter()):this.finishLevel()}createCharacter(){const{x:e,z:t}=Yr[this.engine.layer].characterPlacement,i=new ai(.4,.2,.4),s=new Nr({visible:!1}),r=new Ut(i,s);r.userData.typeOfBlock="character",this.mesh.add(r),this.mesh.position.set(e-11.5,0,t-11.5)}rotateCharacter(e){this.mesh.rotation.y-=e}getEventMove(){window.addEventListener("keydown",e=>{const t=e.key.toLowerCase();t=="z"&&(this.vecteur_mouvement.z=1),t=="s"&&(this.vecteur_mouvement.z=-1),t=="d"&&(this.vecteur_mouvement.x=1),t=="q"&&(this.vecteur_mouvement.x=-1),t=="shift"&&(this.accelerate=1.5,this.engine.fov.isChanging=!0,this.engine.fov.isAccelerate=!0,this.engine.fov.isDecelerate=!1)}),window.addEventListener("keyup",e=>{const t=e.key.toLowerCase();t==="z"&&(this.vecteur_mouvement.z=0),t==="q"&&(this.vecteur_mouvement.x=0),t==="s"&&(this.vecteur_mouvement.z=0),t==="d"&&(this.vecteur_mouvement.x=0),t=="shift"&&(this.accelerate=1,this.engine.fov.isChanging=!0,this.engine.fov.isAccelerate=!1,this.engine.fov.isDecelerate=!0)})}moveLight(){this.light.position.y=Math.cos(this.engine.elapsedTime*2)/3+.5}moveCharacter(){const e=this.mesh.position.clone();let t=this.mesh.position.clone();const i=new ut().extractRotation(this.engine.camera.matrix),s=new O(0,0,-1).applyMatrix4(i),r=new O(1,0,0).applyMatrix4(i);if(s.normalize(),r.normalize(),this.vecteur_mouvement.z!==0){const o=s.multiplyScalar(this.vecteur_mouvement.z*this.speed*this.accelerate*this.engine.delta);e.add(o)}if(this.vecteur_mouvement.x!==0){const o=r.multiplyScalar(this.vecteur_mouvement.x*this.speed*this.accelerate*this.engine.delta);e.add(o)}this.checkTPCollision(),this.isTp?this.teleportCharacter():(this.checkObstacleCollision(e)?(this.vecteur_mouvement.z!==0&&this.correctPosition(e,"z"),this.vecteur_mouvement.x!==0&&this.correctPosition(e,"x")):t.copy(e),t.y=0,this.mesh.position.copy(t))}checkGroundCollision(){this.boundingBox.intersectsBox(this.engine.environment.groundBoundingBox)?this.collideGround=!0:this.collideGround=!1}checkObstacleCollision(e){const t=this.boundingBox.clone();t.translate(e.clone().sub(this.mesh.position));for(const i of this.engine.environment.boundingBoxes)if(t.intersectsBox(i))return!0;return!1}checkTPCollision(){const e=this.boundingBox.clone();for(const t of this.engine.environment.tpBoundingBox)if(e.intersectsBox(t))return this.isTp=!0,!0;return this.isTp=!1,!1}teleportCharacter(){const e=Math.floor(Math.random()*24),t=Math.floor(Math.random()*24),i=new O(e-11.5,0,t-11.5);let s=!0;this.engine.environment.meshsPlacement.forEach(r=>{console.log(t,e,r),r.x===e&&r.z===t&&(console.log("recommence la fonction"),s=!1,this.teleportCharacter())}),s===!0&&this.mesh.position.copy(i)}correctPosition(e,t){const i=this.boundingBox.clone();i.translate(e.clone().sub(this.mesh.position));for(const s of this.engine.environment.boundingBoxes)i.intersectsBox(s)&&(t==="z"&&(this.vecteur_mouvement.z>0?e.z=Math.min(e.z,s.min.z-this.boundingBox.max.z):this.vecteur_mouvement.z<0&&(e.z=Math.max(e.z,s.max.z-this.boundingBox.min.z))),t==="x"&&(this.vecteur_mouvement.x>0?e.x=Math.min(e.x,s.min.x-this.boundingBox.max.x):this.vecteur_mouvement.x<0&&(e.x=Math.max(e.x,s.max.x-this.boundingBox.min.x))));t==="z"?this.mesh.position.z=e.z:t==="x"&&(this.mesh.position.x=e.x)}updateCameraPosition(){this.engine.camera.position.x=this.mesh.position.x,this.engine.camera.position.y=this.mesh.position.y+.2,this.engine.camera.position.z=this.mesh.position.z+.07}updateBoundingBox(){this.boundingBox.setFromObject(this.mesh),this.boundingBox.expandByScalar(-.01)}finishLevel(){const e=new CustomEvent("finishLevel",{detail:"finishLevel"});window.dispatchEvent(e)}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Sn{constructor(e,t,i,s,r="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Sn.nextNameID=Sn.nextNameID||0,this.$name.id=`lil-gui-name-${++Sn.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.textContent=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.getValue()!==e&&(this.object[this.property]=e,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class lv extends Sn{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function il(n){let e,t;return(e=n.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=n.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=n.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const cv={isPrimitive:!0,match:n=>typeof n=="string",fromHexString:il,toHexString:il},Ys={isPrimitive:!0,match:n=>typeof n=="number",fromHexString:n=>parseInt(n.substring(1),16),toHexString:n=>"#"+n.toString(16).padStart(6,0)},uv={isPrimitive:!1,match:n=>Array.isArray(n),fromHexString(n,e,t=1){const i=Ys.fromHexString(n);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([n,e,t],i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return Ys.toHexString(s)}},hv={isPrimitive:!1,match:n=>Object(n)===n,fromHexString(n,e,t=1){const i=Ys.fromHexString(n);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:n,g:e,b:t},i=1){i=255/i;const s=n*i<<16^e*i<<8^t*i<<0;return Ys.toHexString(s)}},fv=[cv,Ys,uv,hv];function dv(n){return fv.find(e=>e.match(n))}class pv extends Sn{constructor(e,t,i,s){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=dv(this.initialValue),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=il(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class sa extends Sn{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class xv extends Sn{constructor(e,t,i,s,r,o){super(e,t,i,"number"),this._initInput(),this.min(s),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{let T=parseFloat(this.$input.value);isNaN(T)||(this._stepExplicit&&(T=this._snap(T)),this.setValue(this._clamp(T)))},i=T=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+T),this.$input.value=this.getValue())},s=T=>{T.key==="Enter"&&this.$input.blur(),T.code==="ArrowUp"&&(T.preventDefault(),i(this._step*this._arrowKeyMultiplier(T))),T.code==="ArrowDown"&&(T.preventDefault(),i(this._step*this._arrowKeyMultiplier(T)*-1))},r=T=>{this._inputFocused&&(T.preventDefault(),i(this._step*this._normalizeMouseWheel(T)))};let o=!1,a,l,c,u,h;const d=5,p=T=>{a=T.clientX,l=c=T.clientY,o=!0,u=this.getValue(),h=0,window.addEventListener("mousemove",g),window.addEventListener("mouseup",v)},g=T=>{if(o){const b=T.clientX-a,E=T.clientY-l;Math.abs(E)>d?(T.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>d&&v()}if(!o){const b=T.clientY-c;h-=b*this._step*this._arrowKeyMultiplier(T),u+h>this._max?h=this._max-u:u+h<this._min&&(h=this._min-u),this._snapClampSetValue(u+h)}c=T.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",v)},x=()=>{this._inputFocused=!0},f=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",s),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",x),this.$input.addEventListener("blur",f)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(f,T,b,E,D)=>(f-T)/(b-T)*(D-E)+E,t=f=>{const T=this.$slider.getBoundingClientRect();let b=e(f,T.left,T.right,this._min,this._max);this._snapClampSetValue(b)},i=f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=f=>{t(f.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),o=!1},u=f=>{f.touches.length>1||(this._hasScrollBar?(a=f.touches[0].clientX,l=f.touches[0].clientY,o=!0):c(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",d))},h=f=>{if(o){const T=f.touches[0].clientX-a,b=f.touches[0].clientY-l;Math.abs(T)>Math.abs(b)?c(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d))}else f.preventDefault(),t(f.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),g=400;let v;const x=f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const b=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(p,g)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",u,{passive:!1}),this.$slider.addEventListener("wheel",x,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){let t=0;return this._hasMin?t=this._min:this._hasMax&&(t=this._max),e-=t,e=Math.round(e/this._step)*this._step,e+=t,e=parseFloat(e.toPrecision(15)),e}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class mv extends Sn{constructor(e,t,i,s){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(s)}options(e){return this._values=Array.isArray(e)?e:Object.values(e),this._names=Array.isArray(e)?e:Object.keys(e),this.$select.replaceChildren(),this._names.forEach(t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i)}),this.updateDisplay(),this}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.textContent=t===-1?e:this._names[t],this}}class gv extends Sn{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var _v=`.lil-gui {
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
}`;function vv(n){const e=document.createElement("style");e.innerHTML=n;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let yu=!1;class Ol{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:s,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!yu&&a&&(vv(_v),yu=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this._closeFolders=o}add(e,t,i,s,r){if(Object(i)===i)return new mv(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new xv(this,e,t,i,s,r);case"boolean":return new lv(this,e,t);case"string":return new gv(this,e,t);case"function":return new sa(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new pv(this,e,t,i)}addFolder(e){const t=new Ol({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof sa||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof sa)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const s=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(e){return this._title=e,this.$title.textContent=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const{chosenLevel:zv,manageEndgame:Mv,redoGame:Sv,beginGame:Ev,restartTime:yv,manageWin:bu}=fi();class bv{constructor(e){De(this,"scene");De(this,"renderer");De(this,"camera");De(this,"meshs");De(this,"stats");De(this,"ref");De(this,"pixelRatio");De(this,"animationFrameId",null);De(this,"mousePos");De(this,"mouseDirection");De(this,"character",null);De(this,"environment",null);De(this,"layer");De(this,"clock");De(this,"delta");De(this,"elapsedTime");De(this,"sensitivity");De(this,"fov");De(this,"handleMouseMove",e=>{this.moveVision(e)});const{width:t,height:i}=e.getBoundingClientRect();this.stats=new Q0,this.stats.showPanel(0),document.body.appendChild(this.stats.dom),this.meshs=[],this.mousePos={x:0,y:0},this.ref=e,this.scene=new $c,this.fov={base:90,current:90,accel:110,isChanging:!1,isAccelerate:!1,isDecelerate:!1},this.camera=new Yt(this.fov.base,t/i,.1,10),this.camera.position.set(0,0,0),this.camera.lookAt(0,0,0),this.layer=zv.value,this.clock=new hm,this.elapsedTime=0,this.delta=0,this.sensitivity=.002,this.mouseDirection=new O(0,0,1),this.pixelRatio=Math.min(window.devicePixelRatio,2),this.renderer=new Y0({antialias:!0}),this.renderer.setClearColor(0,0),this.renderer.setPixelRatio(this.pixelRatio);const s=window.devicePixelRatio>1;this.renderer.setSize(t,i,s),e.appendChild(this.renderer.domElement),this.stats.update(),this.setup()}tick(){this.renderer.render(this.scene,this.camera),this.stats.begin(),this.delta=this.clock.getDelta(),this.elapsedTime=this.clock.getElapsedTime(),this.checkFov(),this.tickChildren(),this.stats.end(),this.animationFrameId=requestAnimationFrame(()=>{this.tick()})}setup(){this.environment=new ov(this),this.character=new av(this),this.meshs.push(this.environment,this.character),this.addChildren(),this.setupGUI(),this.setView(),this.registerEventListeners(),this.tick(),setTimeout(()=>{this.character.canMove=!0},100)}changeFov(e,t){this.fov.current=(1-.1)*e+.1*t,this.camera.fov=this.fov.current,this.camera.updateProjectionMatrix()}setupGUI(){var r,o,a;const e=new Ol({title:"Acker'tools",closeFolders:!0}),t=e.addFolder("Environment"),i=e.addFolder("Camera"),s=e.addFolder("Light");e.hide(),i.add(this.camera,"fov",20,140,.5).name("FOV").onChange(()=>{this.camera.updateProjectionMatrix()}),s.add((r=this.character)==null?void 0:r.light,"distance",.1,7,.05).name("distance light"),s.addColor((o=this.character)==null?void 0:o.light,"color").name("color light").onChange(l=>{console.log(l.getHexString())}),t.add((a=this.environment)==null?void 0:a.mesh.children[0].material,"wireframe").name("ground wireframe"),window.addEventListener("keydown",l=>{l.key=="t"&&e.show(e._hidden)})}checkFov(){this.fov.isChanging&&(this.fov.isAccelerate&&this.changeFov(this.fov.current,this.fov.accel),this.fov.isDecelerate&&this.changeFov(this.fov.current,this.fov.base))}restart(e){this.layer=e,this.scene=new $c,yv(),Ev(),this.setup()}stop(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.environment=null,this.character=null,this.meshs=[]}addChildren(){for(let e=0;e<this.meshs.length;e++)this.scene.add(this.meshs[e].mesh)}tickChildren(){for(let e=0;e<this.meshs.length;e++)this.meshs[e].tick(this)}setView(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.pixelRatio=Math.min(window.devicePixelRatio,2),this.renderer.setPixelRatio(this.pixelRatio)}moveVision(e){const t=e.movementX,i=e.movementY;this.camera.rotation.reorder("YXZ"),this.camera.rotation.y-=t*this.sensitivity,this.camera.rotation.x-=i*(this.sensitivity/2),this.camera.rotation.x=Math.min(Math.max(this.camera.rotation.x,-Math.PI*.5),Math.PI*.5)}showEndGame(e){bu(e==="win"),Sv(),Mv()}enablePointerLock(){document.body.requestPointerLock(),document.addEventListener("mousemove",this.handleMouseMove)}disablePointerLock(){document.exitPointerLock(),document.removeEventListener("mousemove",this.handleMouseMove)}registerEventListeners(){window.onresize=()=>{this.setView()},window.addEventListener("mousemove",e=>{this.mousePos={x:e.clientX,y:e.clientY}}),window.addEventListener("finishLevel",()=>{this.stop(),this.disablePointerLock(),this.showEndGame("win")}),window.addEventListener("loseGame",()=>{this.stop(),this.disablePointerLock(),this.showEndGame("lose")})}}const Tv={class:"Panel__menu"},Av={class:"Panel__menu__items__subjects"},wv={class:"Panel__menu__items__content"},Cv={key:0,class:"Content--mission"},Rv={key:1,class:"Content--controls"},Pv=Ni({__name:"Panel",setup(n){const{panelIsVisible:e,displayMenu:t,displayBeginMenu:i}=fi(),s=Jt(!0),r=Jt(!1),o=()=>{s.value=!0,r.value=!1},a=()=>{s.value=!1,r.value=!0};return(l,c)=>(St(),jt("section",{class:kn(["Panel",Bt(e)?"Panel--activate enter":"leave"])},[dt("div",Tv,[dt("div",{class:kn(["Panel__menu__items",Bt(e)?"":"contentLeave"])},[dt("div",Av,[dt("button",{onClick:c[0]||(c[0]=u=>o())},c[4]||(c[4]=[dt("h5",null,"Mission",-1)])),dt("button",{onClick:c[1]||(c[1]=u=>a())},c[5]||(c[5]=[dt("h5",null,"Controls",-1)]))]),dt("div",wv,[s.value?(St(),jt("div",Cv,c[6]||(c[6]=[$r('<p style="border-left:2px solid white;padding-left:15px;" data-v-8aefbe6a> Copilote.. Co... Copilote ? <br data-v-8aefbe6a> Copilote ? <br data-v-8aefbe6a> Vous m&#39;entendez ? <br data-v-8aefbe6a> On s&#39;est écrasés ici dans ce.. ce monde étrange <br data-v-8aefbe6a> Nous devons sortir de là.. et.. au plus vite ! </p><p class="Content--mission__instructions" data-v-8aefbe6a> Vous avez 2 minutes pour sortir de cet endroit. Au clic sur le bouton <strong data-v-8aefbe6a>&quot;Jouer&quot;</strong>, le chronomètre se déclenchera. <br data-v-8aefbe6a> N&#39;oubliez pas de vérifier dans <strong data-v-8aefbe6a>&quot;Controls&quot;</strong> les controles du jeu ! <br data-v-8aefbe6a> Bonne chance ! </p>',2)]))):On("",!0),r.value?(St(),jt("div",Rv,c[7]||(c[7]=[$r('<div class="Control--menu" data-v-8aefbe6a><div class="Control" data-v-8aefbe6a><p class="Key Key--large" data-v-8aefbe6a>Shift</p><p data-v-8aefbe6a>Courir</p></div></div><div class="Content--controls__layout" data-v-8aefbe6a><div class="Control" data-v-8aefbe6a><p class="Key" data-v-8aefbe6a>Z</p><p data-v-8aefbe6a>Avancer</p></div><div class="Control--group" data-v-8aefbe6a><div class="Control" data-v-8aefbe6a><p class="Key" data-v-8aefbe6a>Q</p><p data-v-8aefbe6a>Gauche</p></div><div class="Control" data-v-8aefbe6a><p class="Key" data-v-8aefbe6a>S</p><p data-v-8aefbe6a>Reculer</p></div><div class="Control" data-v-8aefbe6a><p class="Key" data-v-8aefbe6a>D</p><p data-v-8aefbe6a>Droite</p></div></div></div><div class="Control--menu" data-v-8aefbe6a><div class="Control" data-v-8aefbe6a><p class="Key" data-v-8aefbe6a>F</p><p data-v-8aefbe6a>Pause</p></div></div>',3)]))):On("",!0)])],2),dt("div",null,[Bt(i)?(St(),jt("button",{key:0,onClick:c[2]||(c[2]=u=>l.$emit("closePanelMenu")),class:"PlayButton"}," Jouer ")):On("",!0),Bt(t)?(St(),jt("button",{key:1,onClick:c[3]||(c[3]=u=>l.$emit("closePanelRedoMenu")),class:"PlayButton"}," Recommencer ")):On("",!0)])])],2))}}),Oi=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},Lv=Oi(Pv,[["__scopeId","data-v-8aefbe6a"]]),Dv={class:"HUD__timer"},Iv=Ni({__name:"HUD",setup(n){const{panelIsVisible:e,stopEvent:t,timeRemaining:i,openPanel:s,redoGame:r,restartTime:o}=fi(),a=Ch(()=>{const l=Math.floor(i.value/60),c=i.value%60;return`${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`});return Ml(()=>{setInterval(()=>{i.value>0?e.value||i.value--:(window.dispatchEvent(t),r(),s(),o())},1e3)}),(l,c)=>(St(),jt("section",{class:kn(["HUD",Bt(e)?"leave":"HUD--activate enter"])},[c[0]||(c[0]=$r('<div class="HUD__boussole" data-v-d893db98><p class="HUD__boussole--North" data-v-d893db98>N</p><p class="HUD__boussole--North--point" data-v-d893db98>^</p><p class="HUD__boussole--South" data-v-d893db98>S</p><p class="HUD__boussole--West" data-v-d893db98>O</p><p class="HUD__boussole--East" data-v-d893db98>E</p></div>',1)),dt("div",Dv,cl(a.value),1),c[1]||(c[1]=dt("div",{class:"HUD__pointer"},null,-1))],2))}}),Uv=Oi(Iv,[["__scopeId","data-v-d893db98"]]),Fv="/lab-fps/fpsgunr.png",Nv=Ni({__name:"Gun",setup(n){const{panelIsVisible:e}=fi();return(t,i)=>(St(),jt("section",{class:kn(["Gun",Bt(e)?"leave":"Gun--activate enter"])},i[0]||(i[0]=[dt("img",{src:Fv},null,-1)]),2))}}),Ov=Oi(Nv,[["__scopeId","data-v-85ffe662"]]),Bv={class:"Endgame__menu"},Hv=Ni({__name:"Endgame",setup(n){const{endgameIsVisible:e,closeEndgame:t,win:i}=fi();return(s,r)=>(St(),jt("section",{class:kn(["Endgame",Bt(e)?"Endgame--activate enter":"leave"])},[dt("div",Bv,[dt("div",{class:kn(["Endgame__menu__items",Bt(e)?"":"contentLeave"])},[dt("h2",null,cl(Bt(i)?"Félicitations ! Vous vous en êtes bien sorti copilote !":"Oh non.. noooon.. copilote.. je suis arrivé trop tard.. "),1),dt("button",{onClick:r[0]||(r[0]=o=>Bt(t)())},"Continuer")],2)])],2))}}),Vv=Oi(Hv,[["__scopeId","data-v-04ea5bd5"]]),Gv={class:"Home"},kv=Ni({__name:"Game",setup(n){const{closePanel:e,openPanel:t,beginGame:i,choseLevel:s,endgameIsVisible:r}=fi();let o;const a=Jt(),l=()=>{e(),i(),o.enablePointerLock()},c=()=>{e(),i(),o.restart(s()),o.enablePointerLock()};return Ml(()=>{o=new bv(a.value),window.addEventListener("keydown",u=>{u.key.toLowerCase()=="f"&&(t(),o.disablePointerLock())})}),(u,h)=>(St(),jt("section",Gv,[dt("div",{ref_key:"scene",ref:a,class:"Scene"},null,512),Zt(Lv,{onClosePanelMenu:h[0]||(h[0]=d=>l()),onClosePanelRedoMenu:h[1]||(h[1]=d=>c())}),Bt(r)?(St(),Xr(Vv,{key:0})):On("",!0),Zt(Uv),Zt(Ov),h[2]||(h[2]=dt("div",{class:"IntroGame"},null,-1))]))}}),Wv=Oi(kv,[["__scopeId","data-v-d3884fc4"]]),Xv={class:"Intro"},$v={key:1},qv=Ni({__name:"Intro",setup(n){const{manageIntro:e}=fi(),t=Jt(!1),i=()=>{t.value=!0,setTimeout(()=>{e()},100)};return(s,r)=>(St(),jt("section",Xv,[r[2]||(r[2]=$r('<div class="Intro__boussole Intro__boussole--big" data-v-c630c4ac><p class="Intro__boussole--North" data-v-c630c4ac>N</p><p class="Intro__boussole--North--point" data-v-c630c4ac>^</p><p class="Intro__boussole--South" data-v-c630c4ac>S</p><p class="Intro__boussole--West" data-v-c630c4ac>O</p><p class="Intro__boussole--East" data-v-c630c4ac>E</p><div class="Intro__boussole Intro__boussole--small" data-v-c630c4ac><p class="Intro__boussole--North" data-v-c630c4ac>N</p><p class="Intro__boussole--North--point" data-v-c630c4ac>^</p><p class="Intro__boussole--South" data-v-c630c4ac>S</p><p class="Intro__boussole--West" data-v-c630c4ac>O</p><p class="Intro__boussole--East" data-v-c630c4ac>E</p></div></div>',1)),dt("div",null,[r[1]||(r[1]=dt("h1",null,"DOOMO",-1)),t.value?On("",!0):(St(),jt("button",{key:0,onClick:r[0]||(r[0]=o=>i())},"Commencer")),t.value?(St(),jt("h2",$v,"Chargement ...")):On("",!0)])]))}}),Yv=Oi(qv,[["__scopeId","data-v-c630c4ac"]]),jv={class:"Home"},Kv=Ni({__name:"App",setup(n){const{displayIntro:e}=fi();return(t,i)=>(St(),jt("div",jv,[Bt(e)?On("",!0):(St(),Xr(Wv,{key:0})),Bt(e)?(St(),Xr(Yv,{key:1})):On("",!0)]))}}),Zv=Oi(Kv,[["__scopeId","data-v-67266ce0"]]);Ip(Zv).mount("#app");
