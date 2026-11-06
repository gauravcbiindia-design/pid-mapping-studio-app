const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DZalbxKO.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/exceljs.min-o4MjMve_.js"])))=>i.map(i=>d[i]);
function lc(a,r){for(var s=0;s<r.length;s++){const o=r[s];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in a)){const u=Object.getOwnPropertyDescriptor(o,l);u&&Object.defineProperty(a,l,u.get?u:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=s(l);fetch(l.href,u)}})();var vD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Si(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function ob(a){if(Object.prototype.hasOwnProperty.call(a,"__esModule"))return a;var r=a.default;if(typeof r=="function"){var s=function o(){var l=!1;try{l=this instanceof o}catch{}return l?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};s.prototype=r.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(a).forEach(function(o){var l=Object.getOwnPropertyDescriptor(a,o);Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:function(){return a[o]}})}),s}var xu={exports:{}},Zo={};var Dm;function $E(){if(Dm)return Zo;Dm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,l,u){var m=null;if(u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),"key"in l){u={};for(var f in l)f!=="key"&&(u[f]=l[f])}else u=l;return l=u.ref,{$$typeof:a,type:o,key:m,ref:l!==void 0?l:null,props:u}}return Zo.Fragment=r,Zo.jsx=s,Zo.jsxs=s,Zo}var Nm;function FE(){return Nm||(Nm=1,xu.exports=$E()),xu.exports}var c=FE();const UE=Si(c),BE=lc({__proto__:null,default:UE},[c]);var Su={exports:{}},Qo={},Tu={exports:{}},Au={};var Cm;function zE(){return Cm||(Cm=1,(function(a){function r(H,J){var me=H.length;H.push(J);e:for(;0<me;){var xe=me-1>>>1,j=H[xe];if(0<l(j,J))H[xe]=J,H[me]=j,me=xe;else break e}}function s(H){return H.length===0?null:H[0]}function o(H){if(H.length===0)return null;var J=H[0],me=H.pop();if(me!==J){H[0]=me;e:for(var xe=0,j=H.length,te=j>>>1;xe<te;){var z=2*(xe+1)-1,G=H[z],le=z+1,ue=H[le];if(0>l(G,me))le<j&&0>l(ue,G)?(H[xe]=ue,H[le]=me,xe=le):(H[xe]=G,H[z]=me,xe=z);else if(le<j&&0>l(ue,me))H[xe]=ue,H[le]=me,xe=le;else break e}}return J}function l(H,J){var me=H.sortIndex-J.sortIndex;return me!==0?me:H.id-J.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var m=Date,f=m.now();a.unstable_now=function(){return m.now()-f}}var g=[],y=[],p=1,b=null,v=3,w=!1,_=!1,D=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;function C(H){for(var J=s(y);J!==null;){if(J.callback===null)o(y);else if(J.startTime<=H)o(y),J.sortIndex=J.expirationTime,r(g,J);else break;J=s(y)}}function x(H){if(D=!1,C(H),!_)if(s(g)!==null)_=!0,O||(O=!0,ne());else{var J=s(y);J!==null&&re(x,J.startTime-H)}}var O=!1,R=-1,P=5,k=-1;function ae(){return S?!0:!(a.unstable_now()-k<P)}function W(){if(S=!1,O){var H=a.unstable_now();k=H;var J=!0;try{e:{_=!1,D&&(D=!1,L(R),R=-1),w=!0;var me=v;try{t:{for(C(H),b=s(g);b!==null&&!(b.expirationTime>H&&ae());){var xe=b.callback;if(typeof xe=="function"){b.callback=null,v=b.priorityLevel;var j=xe(b.expirationTime<=H);if(H=a.unstable_now(),typeof j=="function"){b.callback=j,C(H),J=!0;break t}b===s(g)&&o(g),C(H)}else o(g);b=s(g)}if(b!==null)J=!0;else{var te=s(y);te!==null&&re(x,te.startTime-H),J=!1}}break e}finally{b=null,v=me,w=!1}J=void 0}}finally{J?ne():O=!1}}}var ne;if(typeof I=="function")ne=function(){I(W)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,ie=fe.port2;fe.port1.onmessage=W,ne=function(){ie.postMessage(null)}}else ne=function(){T(W,0)};function re(H,J){R=T(function(){H(a.unstable_now())},J)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(H){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var me=v;v=J;try{return H()}finally{v=me}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(H,J){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var me=v;v=H;try{return J()}finally{v=me}},a.unstable_scheduleCallback=function(H,J,me){var xe=a.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?xe+me:xe):me=xe,H){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=me+j,H={id:p++,callback:J,priorityLevel:H,startTime:me,expirationTime:j,sortIndex:-1},me>xe?(H.sortIndex=me,r(y,H),s(g)===null&&H===s(y)&&(D?(L(R),R=-1):D=!0,re(x,me-xe))):(H.sortIndex=j,r(g,H),_||w||(_=!0,O||(O=!0,ne()))),H},a.unstable_shouldYield=ae,a.unstable_wrapCallback=function(H){var J=v;return function(){var me=v;v=J;try{return H.apply(this,arguments)}finally{v=me}}}})(Au)),Au}var Rm;function YE(){return Rm||(Rm=1,Tu.exports=zE()),Tu.exports}var Du={exports:{}},Me={};var _m;function HE(){if(_m)return Me;_m=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),b=Symbol.iterator;function v(j){return j===null||typeof j!="object"?null:(j=b&&j[b]||j["@@iterator"],typeof j=="function"?j:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,D={};function S(j,te,z){this.props=j,this.context=te,this.refs=D,this.updater=z||w}S.prototype.isReactComponent={},S.prototype.setState=function(j,te){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,te,"setState")},S.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function T(){}T.prototype=S.prototype;function L(j,te,z){this.props=j,this.context=te,this.refs=D,this.updater=z||w}var I=L.prototype=new T;I.constructor=L,_(I,S.prototype),I.isPureReactComponent=!0;var C=Array.isArray,x={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function R(j,te,z,G,le,ue){return z=ue.ref,{$$typeof:a,type:j,key:te,ref:z!==void 0?z:null,props:ue}}function P(j,te){return R(j.type,te,void 0,void 0,void 0,j.props)}function k(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function ae(j){var te={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(z){return te[z]})}var W=/\/+/g;function ne(j,te){return typeof j=="object"&&j!==null&&j.key!=null?ae(""+j.key):te.toString(36)}function fe(){}function ie(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(fe,fe):(j.status="pending",j.then(function(te){j.status==="pending"&&(j.status="fulfilled",j.value=te)},function(te){j.status==="pending"&&(j.status="rejected",j.reason=te)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function re(j,te,z,G,le){var ue=typeof j;(ue==="undefined"||ue==="boolean")&&(j=null);var be=!1;if(j===null)be=!0;else switch(ue){case"bigint":case"string":case"number":be=!0;break;case"object":switch(j.$$typeof){case a:case r:be=!0;break;case p:return be=j._init,re(be(j._payload),te,z,G,le)}}if(be)return le=le(j),be=G===""?"."+ne(j,0):G,C(le)?(z="",be!=null&&(z=be.replace(W,"$&/")+"/"),re(le,te,z,"",function(ht){return ht})):le!=null&&(k(le)&&(le=P(le,z+(le.key==null||j&&j.key===le.key?"":(""+le.key).replace(W,"$&/")+"/")+be)),te.push(le)),1;be=0;var Le=G===""?".":G+":";if(C(j))for(var ke=0;ke<j.length;ke++)G=j[ke],ue=Le+ne(G,ke),be+=re(G,te,z,ue,le);else if(ke=v(j),typeof ke=="function")for(j=ke.call(j),ke=0;!(G=j.next()).done;)G=G.value,ue=Le+ne(G,ke++),be+=re(G,te,z,ue,le);else if(ue==="object"){if(typeof j.then=="function")return re(ie(j),te,z,G,le);throw te=String(j),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return be}function H(j,te,z){if(j==null)return j;var G=[],le=0;return re(j,G,"","",function(ue){return te.call(z,ue,le++)}),G}function J(j){if(j._status===-1){var te=j._result;te=te(),te.then(function(z){(j._status===0||j._status===-1)&&(j._status=1,j._result=z)},function(z){(j._status===0||j._status===-1)&&(j._status=2,j._result=z)}),j._status===-1&&(j._status=0,j._result=te)}if(j._status===1)return j._result.default;throw j._result}var me=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function xe(){}return Me.Children={map:H,forEach:function(j,te,z){H(j,function(){te.apply(this,arguments)},z)},count:function(j){var te=0;return H(j,function(){te++}),te},toArray:function(j){return H(j,function(te){return te})||[]},only:function(j){if(!k(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},Me.Component=S,Me.Fragment=s,Me.Profiler=l,Me.PureComponent=L,Me.StrictMode=o,Me.Suspense=g,Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,Me.__COMPILER_RUNTIME={__proto__:null,c:function(j){return x.H.useMemoCache(j)}},Me.cache=function(j){return function(){return j.apply(null,arguments)}},Me.cloneElement=function(j,te,z){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var G=_({},j.props),le=j.key,ue=void 0;if(te!=null)for(be in te.ref!==void 0&&(ue=void 0),te.key!==void 0&&(le=""+te.key),te)!O.call(te,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&te.ref===void 0||(G[be]=te[be]);var be=arguments.length-2;if(be===1)G.children=z;else if(1<be){for(var Le=Array(be),ke=0;ke<be;ke++)Le[ke]=arguments[ke+2];G.children=Le}return R(j.type,le,void 0,void 0,ue,G)},Me.createContext=function(j){return j={$$typeof:m,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:u,_context:j},j},Me.createElement=function(j,te,z){var G,le={},ue=null;if(te!=null)for(G in te.key!==void 0&&(ue=""+te.key),te)O.call(te,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(le[G]=te[G]);var be=arguments.length-2;if(be===1)le.children=z;else if(1<be){for(var Le=Array(be),ke=0;ke<be;ke++)Le[ke]=arguments[ke+2];le.children=Le}if(j&&j.defaultProps)for(G in be=j.defaultProps,be)le[G]===void 0&&(le[G]=be[G]);return R(j,ue,void 0,void 0,null,le)},Me.createRef=function(){return{current:null}},Me.forwardRef=function(j){return{$$typeof:f,render:j}},Me.isValidElement=k,Me.lazy=function(j){return{$$typeof:p,_payload:{_status:-1,_result:j},_init:J}},Me.memo=function(j,te){return{$$typeof:y,type:j,compare:te===void 0?null:te}},Me.startTransition=function(j){var te=x.T,z={};x.T=z;try{var G=j(),le=x.S;le!==null&&le(z,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(xe,me)}catch(ue){me(ue)}finally{x.T=te}},Me.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},Me.use=function(j){return x.H.use(j)},Me.useActionState=function(j,te,z){return x.H.useActionState(j,te,z)},Me.useCallback=function(j,te){return x.H.useCallback(j,te)},Me.useContext=function(j){return x.H.useContext(j)},Me.useDebugValue=function(){},Me.useDeferredValue=function(j,te){return x.H.useDeferredValue(j,te)},Me.useEffect=function(j,te,z){var G=x.H;if(typeof z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(j,te)},Me.useId=function(){return x.H.useId()},Me.useImperativeHandle=function(j,te,z){return x.H.useImperativeHandle(j,te,z)},Me.useInsertionEffect=function(j,te){return x.H.useInsertionEffect(j,te)},Me.useLayoutEffect=function(j,te){return x.H.useLayoutEffect(j,te)},Me.useMemo=function(j,te){return x.H.useMemo(j,te)},Me.useOptimistic=function(j,te){return x.H.useOptimistic(j,te)},Me.useReducer=function(j,te,z){return x.H.useReducer(j,te,z)},Me.useRef=function(j){return x.H.useRef(j)},Me.useState=function(j){return x.H.useState(j)},Me.useSyncExternalStore=function(j,te,z){return x.H.useSyncExternalStore(j,te,z)},Me.useTransition=function(){return x.H.useTransition()},Me.version="19.1.4",Me}var Im;function cc(){return Im||(Im=1,Du.exports=HE()),Du.exports}var Nu={exports:{}},ya={};var Lm;function VE(){if(Lm)return ya;Lm=1;var a=cc();function r(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)y+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(g,y,p){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:g,containerInfo:y,implementation:p}}var m=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return ya.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ya.createPortal=function(g,y){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return u(g,y,null,p)},ya.flushSync=function(g){var y=m.T,p=o.p;try{if(m.T=null,o.p=2,g)return g()}finally{m.T=y,o.p=p,o.d.f()}},ya.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(g,y))},ya.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},ya.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var p=y.as,b=f(p,y.crossOrigin),v=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;p==="style"?o.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:w}):p==="script"&&o.d.X(g,{crossOrigin:b,integrity:v,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},ya.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var p=f(y.as,y.crossOrigin);o.d.M(g,{crossOrigin:p,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(g)},ya.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var p=y.as,b=f(p,y.crossOrigin);o.d.L(g,p,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},ya.preloadModule=function(g,y){if(typeof g=="string")if(y){var p=f(y.as,y.crossOrigin);o.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:p,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(g)},ya.requestFormReset=function(g){o.d.r(g)},ya.unstable_batchedUpdates=function(g,y){return g(y)},ya.useFormState=function(g,y,p){return m.H.useFormState(g,y,p)},ya.useFormStatus=function(){return m.H.useHostTransitionStatus()},ya.version="19.1.4",ya}var Pm;function ib(){if(Pm)return Nu.exports;Pm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Nu.exports=VE(),Nu.exports}var km;function GE(){if(km)return Qo;km=1;var a=YE(),r=cc(),s=ib();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(u(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var d=n.return;if(d===null)break;var h=d.alternate;if(h===null){if(i=d.return,i!==null){n=i;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===n)return f(d),e;if(h===i)return f(d),t;h=h.sibling}throw Error(o(188))}if(n.return!==i.return)n=d,i=h;else{for(var E=!1,A=d.child;A;){if(A===n){E=!0,n=d,i=h;break}if(A===i){E=!0,i=d,n=h;break}A=A.sibling}if(!E){for(A=h.child;A;){if(A===n){E=!0,n=h,i=d;break}if(A===i){E=!0,i=h,n=d;break}A=A.sibling}if(!E)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),I=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),ae=Symbol.for("react.memo_cache_sentinel"),W=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case S:return"Profiler";case D:return"StrictMode";case x:return"Suspense";case O:return"SuspenseList";case k:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case I:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case C:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}var re=Array.isArray,H=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},xe=[],j=-1;function te(e){return{current:e}}function z(e){0>j||(e.current=xe[j],xe[j]=null,j--)}function G(e,t){j++,xe[j]=e.current,e.current=t}var le=te(null),ue=te(null),be=te(null),Le=te(null);function ke(e,t){switch(G(be,t),G(ue,e),G(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?em(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=em(t),e=tm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(le),G(le,e)}function ht(){z(le),z(ue),z(be)}function at(e){e.memoizedState!==null&&G(Le,e);var t=le.current,n=tm(t,e.type);t!==n&&(G(ue,e),G(le,n))}function ot(e){ue.current===e&&(z(le),z(ue)),Le.current===e&&(z(Le),Vo._currentValue=me)}var dt=Object.prototype.hasOwnProperty,Lt=a.unstable_scheduleCallback,gt=a.unstable_cancelCallback,F=a.unstable_shouldYield,he=a.unstable_requestPaint,ge=a.unstable_now,Y=a.unstable_getCurrentPriorityLevel,pe=a.unstable_ImmediatePriority,Ne=a.unstable_UserBlockingPriority,ye=a.unstable_NormalPriority,qe=a.unstable_LowPriority,Ze=a.unstable_IdlePriority,Fe=a.log,$e=a.unstable_setDisableYieldValue,Qt=null,we=null;function Ue(e){if(typeof Fe=="function"&&$e(e),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(Qt,e)}catch{}}var Ce=Math.clz32?Math.clz32:_a,ra=Math.log,qt=Math.LN2;function _a(e){return e>>>=0,e===0?32:31-(ra(e)/qt|0)|0}var Mt=256,Ba=4194304;function Pt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Je(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var d=0,h=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var A=i&134217727;return A!==0?(i=A&~h,i!==0?d=Pt(i):(E&=A,E!==0?d=Pt(E):n||(n=A&~e,n!==0&&(d=Pt(n))))):(A=i&~h,A!==0?d=Pt(A):E!==0?d=Pt(E):n||(n=i&~e,n!==0&&(d=Pt(n)))),d===0?0:t!==0&&t!==d&&(t&h)===0&&(h=d&-d,n=t&-t,h>=n||h===32&&(n&4194048)!==0)?t:d}function ga(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Yt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dn(){var e=Mt;return Mt<<=1,(Mt&4194048)===0&&(Mt=256),e}function Pe(){var e=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),e}function $t(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Qe(e,t,n,i,d,h){var E=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var A=e.entanglements,q=e.expirationTimes,K=e.hiddenUpdates;for(n=E&~n;0<n;){var oe=31-Ce(n),de=1<<oe;A[oe]=0,q[oe]=-1;var Q=K[oe];if(Q!==null)for(K[oe]=null,oe=0;oe<Q.length;oe++){var ee=Q[oe];ee!==null&&(ee.lane&=-536870913)}n&=~de}i!==0&&va(e,i,0),h!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=h&~(E&~t))}function va(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Ce(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function en(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Ce(n),d=1<<i;d&t|e[i]&t&&(e[i]|=t),n&=~d}}function Nn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ht(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function za(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Em(e.type))}function Vt(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var At=Math.random().toString(36).slice(2),Dt="__reactFiber$"+At,Ft="__reactProps$"+At,pn="__reactContainer$"+At,Zn="__reactEvents$"+At,os="__reactListeners$"+At,sa="__reactHandles$"+At,kr="__reactResources$"+At,tn="__reactMarker$"+At;function oa(e){delete e[Dt],delete e[Ft],delete e[Zn],delete e[os],delete e[sa]}function an(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pn]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sm(e);e!==null;){if(n=e[Dt])return n;e=sm(e)}return t}e=n,n=e.parentNode}return null}function U(e){if(e=e[Dt]||e[pn]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function N(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function $(e){var t=e[kr];return t||(t=e[kr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Z(e){e[tn]=!0}var ve=new Set,Te={};function Ee(e,t){je(e,t),je(e+"Capture",t)}function je(e,t){for(Te[e]=t,e=0;e<t.length;e++)ve.add(t[e])}var Ge=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),et={},Ct={};function nn(e){return dt.call(Ct,e)?!0:dt.call(et,e)?!1:Ge.test(e)?Ct[e]=!0:(et[e]=!0,!1)}function Ya(e,t,n){if(nn(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Qn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ia(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var is,ki;function Jn(e){if(is===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);is=t&&t[1]||"",ki=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+is+e+ki}var ls=!1;function cs(e,t){if(!e||ls)return"";ls=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var de=function(){throw Error()};if(Object.defineProperty(de.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(de,[])}catch(ee){var Q=ee}Reflect.construct(e,[],de)}else{try{de.call()}catch(ee){Q=ee}e.call(de.prototype)}}else{try{throw Error()}catch(ee){Q=ee}(de=e())&&typeof de.catch=="function"&&de.catch(function(){})}}catch(ee){if(ee&&Q&&typeof ee.stack=="string")return[ee.stack,Q.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=i.DetermineComponentFrameRoot(),E=h[0],A=h[1];if(E&&A){var q=E.split(`
`),K=A.split(`
`);for(d=i=0;i<q.length&&!q[i].includes("DetermineComponentFrameRoot");)i++;for(;d<K.length&&!K[d].includes("DetermineComponentFrameRoot");)d++;if(i===q.length||d===K.length)for(i=q.length-1,d=K.length-1;1<=i&&0<=d&&q[i]!==K[d];)d--;for(;1<=i&&0<=d;i--,d--)if(q[i]!==K[d]){if(i!==1||d!==1)do if(i--,d--,0>d||q[i]!==K[d]){var oe=`
`+q[i].replace(" at new "," at ");return e.displayName&&oe.includes("<anonymous>")&&(oe=oe.replace("<anonymous>",e.displayName)),oe}while(1<=i&&0<=d);break}}}finally{ls=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Jn(n):""}function Ec(e){switch(e.tag){case 26:case 27:case 5:return Jn(e.type);case 16:return Jn("Lazy");case 13:return Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 15:return cs(e.type,!1);case 11:return cs(e.type.render,!1);case 1:return cs(e.type,!0);case 31:return Jn("Activity");default:return""}}function no(e){try{var t="";do t+=Ec(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Re(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gt(e){var t=Re(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var d=n.get,h=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(E){i=""+E,h.call(this,E)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(E){i=""+E},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bt(e){e._valueTracker||(e._valueTracker=Gt(e))}function Et(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Re(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Cn=/[\n"\\]/g;function wt(e){return e.replace(Cn,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function La(e,t,n,i,d,h,E,A){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),t!=null?E==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ae(t)):e.value!==""+Ae(t)&&(e.value=""+Ae(t)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),t!=null?er(e,E,Ae(t)):n!=null?er(e,E,Ae(n)):i!=null&&e.removeAttribute("value"),d==null&&h!=null&&(e.defaultChecked=!!h),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Ae(A):e.removeAttribute("name")}function Ha(e,t,n,i,d,h,E,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),t!=null||n!=null){if(!(h!=="submit"&&h!=="reset"||t!=null))return;n=n!=null?""+Ae(n):"",t=t!=null?""+Ae(t):n,A||t===e.value||(e.value=t),e.defaultValue=t}i=i??d,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=A?e.checked:!!i,e.defaultChecked=!!i,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function er(e,t,n){t==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ds(e,t,n,i){if(e=e.options,t){t={};for(var d=0;d<n.length;d++)t["$"+n[d]]=!0;for(n=0;n<e.length;n++)d=t.hasOwnProperty("$"+e[n].value),e[n].selected!==d&&(e[n].selected=d),d&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ae(n),t=null,d=0;d<e.length;d++){if(e[d].value===n){e[d].selected=!0,i&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function Zp(e,t,n){if(t!=null&&(t=""+Ae(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ae(n):""}function Qp(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(re(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ae(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function us(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Jp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||jv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function ef(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var d in t)i=t[d],t.hasOwnProperty(d)&&n[d]!==i&&Jp(e,d,i)}else for(var h in t)t.hasOwnProperty(h)&&Jp(e,h,t[h])}function wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Oi(e){return Mv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var xc=null;function Sc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ps=null,fs=null;function tf(e){var t=U(e);if(t&&(e=t.stateNode)){var n=e[Ft]||null;e:switch(e=t.stateNode,t.type){case"input":if(La(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var d=i[Ft]||null;if(!d)throw Error(o(90));La(i,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Et(i)}break e;case"textarea":Zp(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ds(e,!!n.multiple,t,!1)}}}var Tc=!1;function af(e,t,n){if(Tc)return e(t,n);Tc=!0;try{var i=e(t);return i}finally{if(Tc=!1,(ps!==null||fs!==null)&&(El(),ps&&(t=ps,e=fs,fs=ps=null,tf(t),e)))for(t=0;t<e.length;t++)tf(e[t])}}function ro(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Ft]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ac=!1;if(Rn)try{var so={};Object.defineProperty(so,"passive",{get:function(){Ac=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Ac=!1}var tr=null,Dc=null,ji=null;function nf(){if(ji)return ji;var e,t=Dc,n=t.length,i,d="value"in tr?tr.value:tr.textContent,h=d.length;for(e=0;e<n&&t[e]===d[e];e++);var E=n-e;for(i=1;i<=E&&t[n-i]===d[h-i];i++);return ji=d.slice(e,1<i?1-i:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Mi(){return!0}function rf(){return!1}function Ta(e){function t(n,i,d,h,E){this._reactName=n,this._targetInst=d,this.type=i,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(n=e[A],this[A]=n?n(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Mi:rf,this.isPropagationStopped=rf,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Mi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Mi)},persist:function(){},isPersistent:Mi}),t}var Or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$i=Ta(Or),oo=p({},Or,{view:0,detail:0}),$v=Ta(oo),Nc,Cc,io,Fi=p({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(Nc=e.screenX-io.screenX,Cc=e.screenY-io.screenY):Cc=Nc=0,io=e),Nc)},movementY:function(e){return"movementY"in e?e.movementY:Cc}}),sf=Ta(Fi),Fv=p({},Fi,{dataTransfer:0}),Uv=Ta(Fv),Bv=p({},oo,{relatedTarget:0}),Rc=Ta(Bv),zv=p({},Or,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=Ta(zv),Hv=p({},Or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vv=Ta(Hv),Gv=p({},Or,{data:0}),of=Ta(Gv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kv[e])?!!t[e]:!1}function _c(){return Zv}var Qv=p({},oo,{key:function(e){if(e.key){var t=Xv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jv=Ta(Qv),e0=p({},Fi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lf=Ta(e0),t0=p({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),a0=Ta(t0),n0=p({},Or,{propertyName:0,elapsedTime:0,pseudoElement:0}),r0=Ta(n0),s0=p({},Fi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),o0=Ta(s0),i0=p({},Or,{newState:0,oldState:0}),l0=Ta(i0),c0=[9,13,27,32],Ic=Rn&&"CompositionEvent"in window,lo=null;Rn&&"documentMode"in document&&(lo=document.documentMode);var d0=Rn&&"TextEvent"in window&&!lo,cf=Rn&&(!Ic||lo&&8<lo&&11>=lo),df=" ",uf=!1;function pf(e,t){switch(e){case"keyup":return c0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ff(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hs=!1;function u0(e,t){switch(e){case"compositionend":return ff(t);case"keypress":return t.which!==32?null:(uf=!0,df);case"textInput":return e=t.data,e===df&&uf?null:e;default:return null}}function p0(e,t){if(hs)return e==="compositionend"||!Ic&&pf(e,t)?(e=nf(),ji=Dc=tr=null,hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cf&&t.locale!=="ko"?null:t.data;default:return null}}var f0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f0[e.type]:t==="textarea"}function gf(e,t,n,i){ps?fs?fs.push(i):fs=[i]:ps=i,t=Dl(t,"onChange"),0<t.length&&(n=new $i("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var co=null,uo=null;function h0(e){Wg(e,0)}function Ui(e){var t=N(e);if(Et(t))return e}function mf(e,t){if(e==="change")return t}var yf=!1;if(Rn){var Lc;if(Rn){var Pc="oninput"in document;if(!Pc){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Pc=typeof bf.oninput=="function"}Lc=Pc}else Lc=!1;yf=Lc&&(!document.documentMode||9<document.documentMode)}function vf(){co&&(co.detachEvent("onpropertychange",Ef),uo=co=null)}function Ef(e){if(e.propertyName==="value"&&Ui(uo)){var t=[];gf(t,uo,e,Sc(e)),af(h0,t)}}function g0(e,t,n){e==="focusin"?(vf(),co=t,uo=n,co.attachEvent("onpropertychange",Ef)):e==="focusout"&&vf()}function m0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ui(uo)}function y0(e,t){if(e==="click")return Ui(t)}function b0(e,t){if(e==="input"||e==="change")return Ui(t)}function v0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pa=typeof Object.is=="function"?Object.is:v0;function po(e,t){if(Pa(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var d=n[i];if(!dt.call(t,d)||!Pa(e[d],t[d]))return!1}return!0}function wf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xf(e,t){var n=wf(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wf(n)}}function Sf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jt(e.document)}return t}function kc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var E0=Rn&&"documentMode"in document&&11>=document.documentMode,gs=null,Oc=null,fo=null,jc=!1;function Af(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jc||gs==null||gs!==Jt(i)||(i=gs,"selectionStart"in i&&kc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fo&&po(fo,i)||(fo=i,i=Dl(Oc,"onSelect"),0<i.length&&(t=new $i("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=gs)))}function jr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ms={animationend:jr("Animation","AnimationEnd"),animationiteration:jr("Animation","AnimationIteration"),animationstart:jr("Animation","AnimationStart"),transitionrun:jr("Transition","TransitionRun"),transitionstart:jr("Transition","TransitionStart"),transitioncancel:jr("Transition","TransitionCancel"),transitionend:jr("Transition","TransitionEnd")},qc={},Df={};Rn&&(Df=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function qr(e){if(qc[e])return qc[e];if(!ms[e])return e;var t=ms[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Df)return qc[e]=t[n];return e}var Nf=qr("animationend"),Cf=qr("animationiteration"),Rf=qr("animationstart"),w0=qr("transitionrun"),x0=qr("transitionstart"),S0=qr("transitioncancel"),_f=qr("transitionend"),If=new Map,Mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mc.push("scrollEnd");function rn(e,t){If.set(e,t),Ee(t,[e])}var Lf=new WeakMap;function Va(e,t){if(typeof e=="object"&&e!==null){var n=Lf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:no(t)},Lf.set(e,t),t)}return{value:e,source:t,stack:no(t)}}var Ga=[],ys=0,$c=0;function Bi(){for(var e=ys,t=$c=ys=0;t<e;){var n=Ga[t];Ga[t++]=null;var i=Ga[t];Ga[t++]=null;var d=Ga[t];Ga[t++]=null;var h=Ga[t];if(Ga[t++]=null,i!==null&&d!==null){var E=i.pending;E===null?d.next=d:(d.next=E.next,E.next=d),i.pending=d}h!==0&&Pf(n,d,h)}}function zi(e,t,n,i){Ga[ys++]=e,Ga[ys++]=t,Ga[ys++]=n,Ga[ys++]=i,$c|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Fc(e,t,n,i){return zi(e,t,n,i),Yi(e)}function bs(e,t){return zi(e,null,null,t),Yi(e)}function Pf(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var d=!1,h=e.return;h!==null;)h.childLanes|=n,i=h.alternate,i!==null&&(i.childLanes|=n),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(d=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,d&&t!==null&&(d=31-Ce(n),e=h.hiddenUpdates,i=e[d],i===null?e[d]=[t]:i.push(t),t.lane=n|536870912),h):null}function Yi(e){if(50<Mo)throw Mo=0,Vd=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var vs={};function T0(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ka(e,t,n,i){return new T0(e,t,n,i)}function Uc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _n(e,t){var n=e.alternate;return n===null?(n=ka(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function kf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Hi(e,t,n,i,d,h){var E=0;if(i=e,typeof e=="function")Uc(e)&&(E=1);else if(typeof e=="string")E=DE(e,n,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case k:return e=ka(31,n,t,d),e.elementType=k,e.lanes=h,e;case _:return Mr(n.children,d,h,t);case D:E=8,d|=24;break;case S:return e=ka(12,n,t,d|2),e.elementType=S,e.lanes=h,e;case x:return e=ka(13,n,t,d),e.elementType=x,e.lanes=h,e;case O:return e=ka(19,n,t,d),e.elementType=O,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T:case I:E=10;break e;case L:E=9;break e;case C:E=11;break e;case R:E=14;break e;case P:E=16,i=null;break e}E=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=ka(E,n,t,d),t.elementType=e,t.type=i,t.lanes=h,t}function Mr(e,t,n,i){return e=ka(7,e,i,t),e.lanes=n,e}function Bc(e,t,n){return e=ka(6,e,null,t),e.lanes=n,e}function zc(e,t,n){return t=ka(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Es=[],ws=0,Vi=null,Gi=0,Xa=[],Wa=0,$r=null,In=1,Ln="";function Fr(e,t){Es[ws++]=Gi,Es[ws++]=Vi,Vi=e,Gi=t}function Of(e,t,n){Xa[Wa++]=In,Xa[Wa++]=Ln,Xa[Wa++]=$r,$r=e;var i=In;e=Ln;var d=32-Ce(i)-1;i&=~(1<<d),n+=1;var h=32-Ce(t)+d;if(30<h){var E=d-d%5;h=(i&(1<<E)-1).toString(32),i>>=E,d-=E,In=1<<32-Ce(t)+d|n<<d|i,Ln=h+e}else In=1<<h|n<<d|i,Ln=e}function Yc(e){e.return!==null&&(Fr(e,1),Of(e,1,0))}function Hc(e){for(;e===Vi;)Vi=Es[--ws],Es[ws]=null,Gi=Es[--ws],Es[ws]=null;for(;e===$r;)$r=Xa[--Wa],Xa[Wa]=null,Ln=Xa[--Wa],Xa[Wa]=null,In=Xa[--Wa],Xa[Wa]=null}var Ea=null,Rt=null,nt=!1,Ur=null,fn=!1,Vc=Error(o(519));function Br(e){var t=Error(o(418,""));throw mo(Va(t,e)),Vc}function jf(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Dt]=e,t[Ft]=i,n){case"dialog":Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":case"embed":Ve("load",t);break;case"video":case"audio":for(n=0;n<Fo.length;n++)Ve(Fo[n],t);break;case"source":Ve("error",t);break;case"img":case"image":case"link":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"input":Ve("invalid",t),Ha(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),bt(t);break;case"select":Ve("invalid",t);break;case"textarea":Ve("invalid",t),Qp(t,i.value,i.defaultValue,i.children),bt(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Jg(t.textContent,n)?(i.popover!=null&&(Ve("beforetoggle",t),Ve("toggle",t)),i.onScroll!=null&&Ve("scroll",t),i.onScrollEnd!=null&&Ve("scrollend",t),i.onClick!=null&&(t.onclick=Nl),t=!0):t=!1,t||Br(e)}function qf(e){for(Ea=e.return;Ea;)switch(Ea.tag){case 5:case 13:fn=!1;return;case 27:case 3:fn=!0;return;default:Ea=Ea.return}}function ho(e){if(e!==Ea)return!1;if(!nt)return qf(e),nt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||lu(e.type,e.memoizedProps)),n=!n),n&&Rt&&Br(e),qf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Rt=on(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Rt=null}}else t===27?(t=Rt,yr(e.type)?(e=pu,pu=null,Rt=e):Rt=t):Rt=Ea?on(e.stateNode.nextSibling):null;return!0}function go(){Rt=Ea=null,nt=!1}function Mf(){var e=Ur;return e!==null&&(Na===null?Na=e:Na.push.apply(Na,e),Ur=null),e}function mo(e){Ur===null?Ur=[e]:Ur.push(e)}var Gc=te(null),zr=null,Pn=null;function ar(e,t,n){G(Gc,t._currentValue),t._currentValue=n}function kn(e){e._currentValue=Gc.current,z(Gc)}function Xc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Wc(e,t,n,i){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var h=d.dependencies;if(h!==null){var E=d.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=d;for(var q=0;q<t.length;q++)if(A.context===t[q]){h.lanes|=n,A=h.alternate,A!==null&&(A.lanes|=n),Xc(h.return,n,e),i||(E=null);break e}h=A.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(o(341));E.lanes|=n,h=E.alternate,h!==null&&(h.lanes|=n),Xc(E,n,e),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===e){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function yo(e,t,n,i){e=null;for(var d=t,h=!1;d!==null;){if(!h){if((d.flags&524288)!==0)h=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(o(387));if(E=E.memoizedProps,E!==null){var A=d.type;Pa(d.pendingProps.value,E.value)||(e!==null?e.push(A):e=[A])}}else if(d===Le.current){if(E=d.alternate,E===null)throw Error(o(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Vo):e=[Vo])}d=d.return}e!==null&&Wc(t,e,n,i),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!Pa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yr(e){zr=e,Pn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ma(e){return $f(zr,e)}function Wi(e,t){return zr===null&&Yr(e),$f(e,t)}function $f(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Pn===null){if(e===null)throw Error(o(308));Pn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Pn=Pn.next=t;return n}var A0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},D0=a.unstable_scheduleCallback,N0=a.unstable_NormalPriority,Xt={$$typeof:I,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kc(){return{controller:new A0,data:new Map,refCount:0}}function bo(e){e.refCount--,e.refCount===0&&D0(N0,function(){e.controller.abort()})}var vo=null,Zc=0,xs=0,Ss=null;function C0(e,t){if(vo===null){var n=vo=[];Zc=0,xs=Jd(),Ss={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Zc++,t.then(Ff,Ff),t}function Ff(){if(--Zc===0&&vo!==null){Ss!==null&&(Ss.status="fulfilled");var e=vo;vo=null,xs=0,Ss=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function R0(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(d){n.push(d)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var d=0;d<n.length;d++)(0,n[d])(t)},function(d){for(i.status="rejected",i.reason=d,d=0;d<n.length;d++)(0,n[d])(void 0)}),i}var Uf=H.S;H.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&C0(e,t),Uf!==null&&Uf(e,t)};var Hr=te(null);function Qc(){var e=Hr.current;return e!==null?e:vt.pooledCache}function Ki(e,t){t===null?G(Hr,Hr.current):G(Hr,t.pool)}function Bf(){var e=Qc();return e===null?null:{parent:Xt._currentValue,pool:e}}var Eo=Error(o(460)),zf=Error(o(474)),Zi=Error(o(542)),Jc={then:function(){}};function Yf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qi(){}function Hf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Qi,Qi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gf(e),e;default:if(typeof t.status=="string")t.then(Qi,Qi);else{if(e=vt,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=i}},function(i){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Gf(e),e}throw wo=t,Eo}}var wo=null;function Vf(){if(wo===null)throw Error(o(459));var e=wo;return wo=null,e}function Gf(e){if(e===Eo||e===Zi)throw Error(o(483))}var nr=!1;function ed(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function sr(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(it&2)!==0){var d=i.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),i.pending=t,t=Yi(e),Pf(e,null,n),t}return zi(e,i,t,n),Yi(e)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,en(e,n)}}function ad(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var d=null,h=null;if(n=n.firstBaseUpdate,n!==null){do{var E={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};h===null?d=h=E:h=h.next=E,n=n.next}while(n!==null);h===null?d=h=t:h=h.next=t}else d=h=t;n={baseState:i.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var nd=!1;function So(){if(nd){var e=Ss;if(e!==null)throw e}}function To(e,t,n,i){nd=!1;var d=e.updateQueue;nr=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var q=A,K=q.next;q.next=null,E===null?h=K:E.next=K,E=q;var oe=e.alternate;oe!==null&&(oe=oe.updateQueue,A=oe.lastBaseUpdate,A!==E&&(A===null?oe.firstBaseUpdate=K:A.next=K,oe.lastBaseUpdate=q))}if(h!==null){var de=d.baseState;E=0,oe=K=q=null,A=h;do{var Q=A.lane&-536870913,ee=Q!==A.lane;if(ee?(Ke&Q)===Q:(i&Q)===Q){Q!==0&&Q===xs&&(nd=!0),oe!==null&&(oe=oe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Oe=e,_e=A;Q=t;var ft=n;switch(_e.tag){case 1:if(Oe=_e.payload,typeof Oe=="function"){de=Oe.call(ft,de,Q);break e}de=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=_e.payload,Q=typeof Oe=="function"?Oe.call(ft,de,Q):Oe,Q==null)break e;de=p({},de,Q);break e;case 2:nr=!0}}Q=A.callback,Q!==null&&(e.flags|=64,ee&&(e.flags|=8192),ee=d.callbacks,ee===null?d.callbacks=[Q]:ee.push(Q))}else ee={lane:Q,tag:A.tag,payload:A.payload,callback:A.callback,next:null},oe===null?(K=oe=ee,q=de):oe=oe.next=ee,E|=Q;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;ee=A,A=ee.next,ee.next=null,d.lastBaseUpdate=ee,d.shared.pending=null}}while(!0);oe===null&&(q=de),d.baseState=q,d.firstBaseUpdate=K,d.lastBaseUpdate=oe,h===null&&(d.shared.lanes=0),fr|=E,e.lanes=E,e.memoizedState=de}}function Xf(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Wf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Xf(n[e],t)}var Ts=te(null),Ji=te(0);function Kf(e,t){e=Un,G(Ji,e),G(Ts,t),Un=e|t.baseLanes}function rd(){G(Ji,Un),G(Ts,Ts.current)}function sd(){Un=Ji.current,z(Ts),z(Ji)}var or=0,Be=null,ut=null,Ut=null,el=!1,As=!1,Vr=!1,tl=0,Ao=0,Ds=null,_0=0;function kt(){throw Error(o(321))}function od(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pa(e[n],t[n]))return!1;return!0}function id(e,t,n,i,d,h){return or=h,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?Ph:kh,Vr=!1,h=n(i,d),Vr=!1,As&&(h=Qf(t,n,i,d)),Zf(e),h}function Zf(e){H.H=il;var t=ut!==null&&ut.next!==null;if(or=0,Ut=ut=Be=null,el=!1,Ao=0,Ds=null,t)throw Error(o(300));e===null||ea||(e=e.dependencies,e!==null&&Xi(e)&&(ea=!0))}function Qf(e,t,n,i){Be=e;var d=0;do{if(As&&(Ds=null),Ao=0,As=!1,25<=d)throw Error(o(301));if(d+=1,Ut=ut=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}H.H=q0,h=t(n,i)}while(As);return h}function I0(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?Do(t):t,e=e.useState()[0],(ut!==null?ut.memoizedState:null)!==e&&(Be.flags|=1024),t}function ld(){var e=tl!==0;return tl=0,e}function cd(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function dd(e){if(el){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}el=!1}or=0,Ut=ut=Be=null,As=!1,Ao=tl=0,Ds=null}function Aa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?Be.memoizedState=Ut=e:Ut=Ut.next=e,Ut}function Bt(){if(ut===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var t=Ut===null?Be.memoizedState:Ut.next;if(t!==null)Ut=t,ut=e;else{if(e===null)throw Be.alternate===null?Error(o(467)):Error(o(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},Ut===null?Be.memoizedState=Ut=e:Ut=Ut.next=e}return Ut}function ud(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(e){var t=Ao;return Ao+=1,Ds===null&&(Ds=[]),e=Hf(Ds,e,t),t=Be,(Ut===null?t.memoizedState:Ut.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?Ph:kh),e}function al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Do(e);if(e.$$typeof===I)return ma(e)}throw Error(o(438,String(e)))}function pd(e){var t=null,n=Be.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Be.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ud(),Be.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ae;return t.index++,n}function On(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=Bt();return fd(t,ut,e)}function fd(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var d=e.baseQueue,h=i.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}t.baseQueue=d=h,i.pending=null}if(h=e.baseState,d===null)e.memoizedState=h;else{t=d.next;var A=E=null,q=null,K=t,oe=!1;do{var de=K.lane&-536870913;if(de!==K.lane?(Ke&de)===de:(or&de)===de){var Q=K.revertLane;if(Q===0)q!==null&&(q=q.next={lane:0,revertLane:0,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null}),de===xs&&(oe=!0);else if((or&Q)===Q){K=K.next,Q===xs&&(oe=!0);continue}else de={lane:0,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},q===null?(A=q=de,E=h):q=q.next=de,Be.lanes|=Q,fr|=Q;de=K.action,Vr&&n(h,de),h=K.hasEagerState?K.eagerState:n(h,de)}else Q={lane:de,revertLane:K.revertLane,action:K.action,hasEagerState:K.hasEagerState,eagerState:K.eagerState,next:null},q===null?(A=q=Q,E=h):q=q.next=Q,Be.lanes|=de,fr|=de;K=K.next}while(K!==null&&K!==t);if(q===null?E=h:q.next=A,!Pa(h,e.memoizedState)&&(ea=!0,oe&&(n=Ss,n!==null)))throw n;e.memoizedState=h,e.baseState=E,e.baseQueue=q,i.lastRenderedState=h}return d===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function hd(e){var t=Bt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,d=n.pending,h=t.memoizedState;if(d!==null){n.pending=null;var E=d=d.next;do h=e(h,E.action),E=E.next;while(E!==d);Pa(h,t.memoizedState)||(ea=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),n.lastRenderedState=h}return[h,i]}function Jf(e,t,n){var i=Be,d=Bt(),h=nt;if(h){if(n===void 0)throw Error(o(407));n=n()}else n=t();var E=!Pa((ut||d).memoizedState,n);E&&(d.memoizedState=n,ea=!0),d=d.queue;var A=ah.bind(null,i,d,e);if(No(2048,8,A,[e]),d.getSnapshot!==t||E||Ut!==null&&Ut.memoizedState.tag&1){if(i.flags|=2048,Ns(9,rl(),th.bind(null,i,d,n,t),null),vt===null)throw Error(o(349));h||(or&124)!==0||eh(i,t,n)}return n}function eh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Be.updateQueue,t===null?(t=ud(),Be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function th(e,t,n,i){t.value=n,t.getSnapshot=i,nh(t)&&rh(e)}function ah(e,t,n){return n(function(){nh(t)&&rh(e)})}function nh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pa(e,n)}catch{return!0}}function rh(e){var t=bs(e,2);t!==null&&$a(t,e,2)}function gd(e){var t=Aa();if(typeof e=="function"){var n=e;if(e=n(),Vr){Ue(!0);try{n()}finally{Ue(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:e},t}function sh(e,t,n,i){return e.baseState=n,fd(e,ut,typeof i=="function"?i:On)}function L0(e,t,n,i,d){if(ol(e))throw Error(o(485));if(e=t.action,e!==null){var h={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};H.T!==null?n(!0):h.isTransition=!1,i(h),n=t.pending,n===null?(h.next=t.pending=h,oh(t,h)):(h.next=n.next,t.pending=n.next=h)}}function oh(e,t){var n=t.action,i=t.payload,d=e.state;if(t.isTransition){var h=H.T,E={};H.T=E;try{var A=n(d,i),q=H.S;q!==null&&q(E,A),ih(e,t,A)}catch(K){md(e,t,K)}finally{H.T=h}}else try{h=n(d,i),ih(e,t,h)}catch(K){md(e,t,K)}}function ih(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){lh(e,t,i)},function(i){return md(e,t,i)}):lh(e,t,n)}function lh(e,t,n){t.status="fulfilled",t.value=n,ch(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,oh(e,n)))}function md(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ch(t),t=t.next;while(t!==i)}e.action=null}function ch(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function dh(e,t){return t}function uh(e,t){if(nt){var n=vt.formState;if(n!==null){e:{var i=Be;if(nt){if(Rt){t:{for(var d=Rt,h=fn;d.nodeType!==8;){if(!h){d=null;break t}if(d=on(d.nextSibling),d===null){d=null;break t}}h=d.data,d=h==="F!"||h==="F"?d:null}if(d){Rt=on(d.nextSibling),i=d.data==="F!";break e}}Br(i)}i=!1}i&&(t=n[0])}}return n=Aa(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dh,lastRenderedState:t},n.queue=i,n=_h.bind(null,Be,i),i.dispatch=n,i=gd(!1),h=wd.bind(null,Be,!1,i.queue),i=Aa(),d={state:t,dispatch:null,action:e,pending:null},i.queue=d,n=L0.bind(null,Be,d,h,n),d.dispatch=n,i.memoizedState=e,[t,n,!1]}function ph(e){var t=Bt();return fh(t,ut,e)}function fh(e,t,n){if(t=fd(e,t,dh)[0],e=nl(On)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Do(t)}catch(E){throw E===Eo?Zi:E}else i=t;t=Bt();var d=t.queue,h=d.dispatch;return n!==t.memoizedState&&(Be.flags|=2048,Ns(9,rl(),P0.bind(null,d,n),null)),[i,h,e]}function P0(e,t){e.action=t}function hh(e){var t=Bt(),n=ut;if(n!==null)return fh(t,n,e);Bt(),t=t.memoizedState,n=Bt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ns(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Be.updateQueue,t===null&&(t=ud(),Be.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function rl(){return{destroy:void 0,resource:void 0}}function gh(){return Bt().memoizedState}function sl(e,t,n,i){var d=Aa();i=i===void 0?null:i,Be.flags|=e,d.memoizedState=Ns(1|t,rl(),n,i)}function No(e,t,n,i){var d=Bt();i=i===void 0?null:i;var h=d.memoizedState.inst;ut!==null&&i!==null&&od(i,ut.memoizedState.deps)?d.memoizedState=Ns(t,h,n,i):(Be.flags|=e,d.memoizedState=Ns(1|t,h,n,i))}function mh(e,t){sl(8390656,8,e,t)}function yh(e,t){No(2048,8,e,t)}function bh(e,t){return No(4,2,e,t)}function vh(e,t){return No(4,4,e,t)}function Eh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wh(e,t,n){n=n!=null?n.concat([e]):null,No(4,4,Eh.bind(null,t,e),n)}function yd(){}function xh(e,t){var n=Bt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&od(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function Sh(e,t){var n=Bt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&od(t,i[1]))return i[0];if(i=e(),Vr){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[i,t],i}function bd(e,t,n){return n===void 0||(or&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Dg(),Be.lanes|=e,fr|=e,n)}function Th(e,t,n,i){return Pa(n,t)?n:Ts.current!==null?(e=bd(e,n,i),Pa(e,t)||(ea=!0),e):(or&42)===0?(ea=!0,e.memoizedState=n):(e=Dg(),Be.lanes|=e,fr|=e,t)}function Ah(e,t,n,i,d){var h=J.p;J.p=h!==0&&8>h?h:8;var E=H.T,A={};H.T=A,wd(e,!1,t,n);try{var q=d(),K=H.S;if(K!==null&&K(A,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var oe=R0(q,i);Co(e,t,oe,Ma(e))}else Co(e,t,i,Ma(e))}catch(de){Co(e,t,{then:function(){},status:"rejected",reason:de},Ma())}finally{J.p=h,H.T=E}}function k0(){}function vd(e,t,n,i){if(e.tag!==5)throw Error(o(476));var d=Dh(e).queue;Ah(e,d,t,me,n===null?k0:function(){return Nh(e),n(i)})}function Dh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:me},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nh(e){var t=Dh(e).next.queue;Co(e,t,{},Ma())}function Ed(){return ma(Vo)}function Ch(){return Bt().memoizedState}function Rh(){return Bt().memoizedState}function O0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ma();e=rr(n);var i=sr(t,e,n);i!==null&&($a(i,t,n),xo(i,t,n)),t={cache:Kc()},e.payload=t;return}t=t.return}}function j0(e,t,n){var i=Ma();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ol(e)?Ih(t,n):(n=Fc(e,t,n,i),n!==null&&($a(n,e,i),Lh(n,t,i)))}function _h(e,t,n){var i=Ma();Co(e,t,n,i)}function Co(e,t,n,i){var d={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ol(e))Ih(t,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var E=t.lastRenderedState,A=h(E,n);if(d.hasEagerState=!0,d.eagerState=A,Pa(A,E))return zi(e,t,d,0),vt===null&&Bi(),!1}catch{}if(n=Fc(e,t,d,i),n!==null)return $a(n,e,i),Lh(n,t,i),!0}return!1}function wd(e,t,n,i){if(i={lane:2,revertLane:Jd(),action:i,hasEagerState:!1,eagerState:null,next:null},ol(e)){if(t)throw Error(o(479))}else t=Fc(e,n,i,2),t!==null&&$a(t,e,2)}function ol(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function Ih(e,t){As=el=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Lh(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,en(e,n)}}var il={readContext:ma,use:al,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt},Ph={readContext:ma,use:al,useCallback:function(e,t){return Aa().memoizedState=[e,t===void 0?null:t],e},useContext:ma,useEffect:mh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,sl(4194308,4,Eh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sl(4194308,4,e,t)},useInsertionEffect:function(e,t){sl(4,2,e,t)},useMemo:function(e,t){var n=Aa();t=t===void 0?null:t;var i=e();if(Vr){Ue(!0);try{e()}finally{Ue(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Aa();if(n!==void 0){var d=n(t);if(Vr){Ue(!0);try{n(t)}finally{Ue(!1)}}}else d=t;return i.memoizedState=i.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},i.queue=e,e=e.dispatch=j0.bind(null,Be,e),[i.memoizedState,e]},useRef:function(e){var t=Aa();return e={current:e},t.memoizedState=e},useState:function(e){e=gd(e);var t=e.queue,n=_h.bind(null,Be,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:yd,useDeferredValue:function(e,t){var n=Aa();return bd(n,e,t)},useTransition:function(){var e=gd(!1);return e=Ah.bind(null,Be,e.queue,!0,!1),Aa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Be,d=Aa();if(nt){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),vt===null)throw Error(o(349));(Ke&124)!==0||eh(i,t,n)}d.memoizedState=n;var h={value:n,getSnapshot:t};return d.queue=h,mh(ah.bind(null,i,h,e),[e]),i.flags|=2048,Ns(9,rl(),th.bind(null,i,h,n,t),null),n},useId:function(){var e=Aa(),t=vt.identifierPrefix;if(nt){var n=Ln,i=In;n=(i&~(1<<32-Ce(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=tl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=_0++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Ed,useFormState:uh,useActionState:uh,useOptimistic:function(e){var t=Aa();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=wd.bind(null,Be,!0,n),n.dispatch=t,[e,t]},useMemoCache:pd,useCacheRefresh:function(){return Aa().memoizedState=O0.bind(null,Be)}},kh={readContext:ma,use:al,useCallback:xh,useContext:ma,useEffect:yh,useImperativeHandle:wh,useInsertionEffect:bh,useLayoutEffect:vh,useMemo:Sh,useReducer:nl,useRef:gh,useState:function(){return nl(On)},useDebugValue:yd,useDeferredValue:function(e,t){var n=Bt();return Th(n,ut.memoizedState,e,t)},useTransition:function(){var e=nl(On)[0],t=Bt().memoizedState;return[typeof e=="boolean"?e:Do(e),t]},useSyncExternalStore:Jf,useId:Ch,useHostTransitionStatus:Ed,useFormState:ph,useActionState:ph,useOptimistic:function(e,t){var n=Bt();return sh(n,ut,e,t)},useMemoCache:pd,useCacheRefresh:Rh},q0={readContext:ma,use:al,useCallback:xh,useContext:ma,useEffect:yh,useImperativeHandle:wh,useInsertionEffect:bh,useLayoutEffect:vh,useMemo:Sh,useReducer:hd,useRef:gh,useState:function(){return hd(On)},useDebugValue:yd,useDeferredValue:function(e,t){var n=Bt();return ut===null?bd(n,e,t):Th(n,ut.memoizedState,e,t)},useTransition:function(){var e=hd(On)[0],t=Bt().memoizedState;return[typeof e=="boolean"?e:Do(e),t]},useSyncExternalStore:Jf,useId:Ch,useHostTransitionStatus:Ed,useFormState:hh,useActionState:hh,useOptimistic:function(e,t){var n=Bt();return ut!==null?sh(n,ut,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:pd,useCacheRefresh:Rh},Cs=null,Ro=0;function ll(e){var t=Ro;return Ro+=1,Cs===null&&(Cs=[]),Hf(Cs,e,t)}function _o(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function cl(e,t){throw t.$$typeof===b?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Oh(e){var t=e._init;return t(e._payload)}function jh(e){function t(V,B){if(e){var X=V.deletions;X===null?(V.deletions=[B],V.flags|=16):X.push(B)}}function n(V,B){if(!e)return null;for(;B!==null;)t(V,B),B=B.sibling;return null}function i(V){for(var B=new Map;V!==null;)V.key!==null?B.set(V.key,V):B.set(V.index,V),V=V.sibling;return B}function d(V,B){return V=_n(V,B),V.index=0,V.sibling=null,V}function h(V,B,X){return V.index=X,e?(X=V.alternate,X!==null?(X=X.index,X<B?(V.flags|=67108866,B):X):(V.flags|=67108866,B)):(V.flags|=1048576,B)}function E(V){return e&&V.alternate===null&&(V.flags|=67108866),V}function A(V,B,X,ce){return B===null||B.tag!==6?(B=Bc(X,V.mode,ce),B.return=V,B):(B=d(B,X),B.return=V,B)}function q(V,B,X,ce){var Se=X.type;return Se===_?oe(V,B,X.props.children,ce,X.key):B!==null&&(B.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===P&&Oh(Se)===B.type)?(B=d(B,X.props),_o(B,X),B.return=V,B):(B=Hi(X.type,X.key,X.props,null,V.mode,ce),_o(B,X),B.return=V,B)}function K(V,B,X,ce){return B===null||B.tag!==4||B.stateNode.containerInfo!==X.containerInfo||B.stateNode.implementation!==X.implementation?(B=zc(X,V.mode,ce),B.return=V,B):(B=d(B,X.children||[]),B.return=V,B)}function oe(V,B,X,ce,Se){return B===null||B.tag!==7?(B=Mr(X,V.mode,ce,Se),B.return=V,B):(B=d(B,X),B.return=V,B)}function de(V,B,X){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=Bc(""+B,V.mode,X),B.return=V,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case v:return X=Hi(B.type,B.key,B.props,null,V.mode,X),_o(X,B),X.return=V,X;case w:return B=zc(B,V.mode,X),B.return=V,B;case P:var ce=B._init;return B=ce(B._payload),de(V,B,X)}if(re(B)||ne(B))return B=Mr(B,V.mode,X,null),B.return=V,B;if(typeof B.then=="function")return de(V,ll(B),X);if(B.$$typeof===I)return de(V,Wi(V,B),X);cl(V,B)}return null}function Q(V,B,X,ce){var Se=B!==null?B.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return Se!==null?null:A(V,B,""+X,ce);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case v:return X.key===Se?q(V,B,X,ce):null;case w:return X.key===Se?K(V,B,X,ce):null;case P:return Se=X._init,X=Se(X._payload),Q(V,B,X,ce)}if(re(X)||ne(X))return Se!==null?null:oe(V,B,X,ce,null);if(typeof X.then=="function")return Q(V,B,ll(X),ce);if(X.$$typeof===I)return Q(V,B,Wi(V,X),ce);cl(V,X)}return null}function ee(V,B,X,ce,Se){if(typeof ce=="string"&&ce!==""||typeof ce=="number"||typeof ce=="bigint")return V=V.get(X)||null,A(B,V,""+ce,Se);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case v:return V=V.get(ce.key===null?X:ce.key)||null,q(B,V,ce,Se);case w:return V=V.get(ce.key===null?X:ce.key)||null,K(B,V,ce,Se);case P:var ze=ce._init;return ce=ze(ce._payload),ee(V,B,X,ce,Se)}if(re(ce)||ne(ce))return V=V.get(X)||null,oe(B,V,ce,Se,null);if(typeof ce.then=="function")return ee(V,B,X,ll(ce),Se);if(ce.$$typeof===I)return ee(V,B,X,Wi(B,ce),Se);cl(B,ce)}return null}function Oe(V,B,X,ce){for(var Se=null,ze=null,De=B,Ie=B=0,aa=null;De!==null&&Ie<X.length;Ie++){De.index>Ie?(aa=De,De=null):aa=De.sibling;var tt=Q(V,De,X[Ie],ce);if(tt===null){De===null&&(De=aa);break}e&&De&&tt.alternate===null&&t(V,De),B=h(tt,B,Ie),ze===null?Se=tt:ze.sibling=tt,ze=tt,De=aa}if(Ie===X.length)return n(V,De),nt&&Fr(V,Ie),Se;if(De===null){for(;Ie<X.length;Ie++)De=de(V,X[Ie],ce),De!==null&&(B=h(De,B,Ie),ze===null?Se=De:ze.sibling=De,ze=De);return nt&&Fr(V,Ie),Se}for(De=i(De);Ie<X.length;Ie++)aa=ee(De,V,Ie,X[Ie],ce),aa!==null&&(e&&aa.alternate!==null&&De.delete(aa.key===null?Ie:aa.key),B=h(aa,B,Ie),ze===null?Se=aa:ze.sibling=aa,ze=aa);return e&&De.forEach(function(xr){return t(V,xr)}),nt&&Fr(V,Ie),Se}function _e(V,B,X,ce){if(X==null)throw Error(o(151));for(var Se=null,ze=null,De=B,Ie=B=0,aa=null,tt=X.next();De!==null&&!tt.done;Ie++,tt=X.next()){De.index>Ie?(aa=De,De=null):aa=De.sibling;var xr=Q(V,De,tt.value,ce);if(xr===null){De===null&&(De=aa);break}e&&De&&xr.alternate===null&&t(V,De),B=h(xr,B,Ie),ze===null?Se=xr:ze.sibling=xr,ze=xr,De=aa}if(tt.done)return n(V,De),nt&&Fr(V,Ie),Se;if(De===null){for(;!tt.done;Ie++,tt=X.next())tt=de(V,tt.value,ce),tt!==null&&(B=h(tt,B,Ie),ze===null?Se=tt:ze.sibling=tt,ze=tt);return nt&&Fr(V,Ie),Se}for(De=i(De);!tt.done;Ie++,tt=X.next())tt=ee(De,V,Ie,tt.value,ce),tt!==null&&(e&&tt.alternate!==null&&De.delete(tt.key===null?Ie:tt.key),B=h(tt,B,Ie),ze===null?Se=tt:ze.sibling=tt,ze=tt);return e&&De.forEach(function(ME){return t(V,ME)}),nt&&Fr(V,Ie),Se}function ft(V,B,X,ce){if(typeof X=="object"&&X!==null&&X.type===_&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case v:e:{for(var Se=X.key;B!==null;){if(B.key===Se){if(Se=X.type,Se===_){if(B.tag===7){n(V,B.sibling),ce=d(B,X.props.children),ce.return=V,V=ce;break e}}else if(B.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===P&&Oh(Se)===B.type){n(V,B.sibling),ce=d(B,X.props),_o(ce,X),ce.return=V,V=ce;break e}n(V,B);break}else t(V,B);B=B.sibling}X.type===_?(ce=Mr(X.props.children,V.mode,ce,X.key),ce.return=V,V=ce):(ce=Hi(X.type,X.key,X.props,null,V.mode,ce),_o(ce,X),ce.return=V,V=ce)}return E(V);case w:e:{for(Se=X.key;B!==null;){if(B.key===Se)if(B.tag===4&&B.stateNode.containerInfo===X.containerInfo&&B.stateNode.implementation===X.implementation){n(V,B.sibling),ce=d(B,X.children||[]),ce.return=V,V=ce;break e}else{n(V,B);break}else t(V,B);B=B.sibling}ce=zc(X,V.mode,ce),ce.return=V,V=ce}return E(V);case P:return Se=X._init,X=Se(X._payload),ft(V,B,X,ce)}if(re(X))return Oe(V,B,X,ce);if(ne(X)){if(Se=ne(X),typeof Se!="function")throw Error(o(150));return X=Se.call(X),_e(V,B,X,ce)}if(typeof X.then=="function")return ft(V,B,ll(X),ce);if(X.$$typeof===I)return ft(V,B,Wi(V,X),ce);cl(V,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,B!==null&&B.tag===6?(n(V,B.sibling),ce=d(B,X),ce.return=V,V=ce):(n(V,B),ce=Bc(X,V.mode,ce),ce.return=V,V=ce),E(V)):n(V,B)}return function(V,B,X,ce){try{Ro=0;var Se=ft(V,B,X,ce);return Cs=null,Se}catch(De){if(De===Eo||De===Zi)throw De;var ze=ka(29,De,null,V.mode);return ze.lanes=ce,ze.return=V,ze}}}var Rs=jh(!0),qh=jh(!1),Ka=te(null),hn=null;function ir(e){var t=e.alternate;G(Wt,Wt.current&1),G(Ka,e),hn===null&&(t===null||Ts.current!==null||t.memoizedState!==null)&&(hn=e)}function Mh(e){if(e.tag===22){if(G(Wt,Wt.current),G(Ka,e),hn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(hn=e)}}else lr()}function lr(){G(Wt,Wt.current),G(Ka,Ka.current)}function jn(e){z(Ka),hn===e&&(hn=null),z(Wt)}var Wt=te(0);function dl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||uu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function xd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ma(),d=rr(i);d.payload=t,n!=null&&(d.callback=n),t=sr(e,d,i),t!==null&&($a(t,e,i),xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ma(),d=rr(i);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=sr(e,d,i),t!==null&&($a(t,e,i),xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ma(),i=rr(n);i.tag=2,t!=null&&(i.callback=t),t=sr(e,i,n),t!==null&&($a(t,e,n),xo(t,e,n))}};function $h(e,t,n,i,d,h,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,h,E):t.prototype&&t.prototype.isPureReactComponent?!po(n,i)||!po(d,h):!0}function Fh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&Sd.enqueueReplaceState(t,t.state,null)}function Gr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=p({},n));for(var d in e)n[d]===void 0&&(n[d]=e[d])}return n}var ul=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Uh(e){ul(e)}function Bh(e){console.error(e)}function zh(e){ul(e)}function pl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Yh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Td(e,t,n){return n=rr(n),n.tag=3,n.payload={element:null},n.callback=function(){pl(e,t)},n}function Hh(e){return e=rr(e),e.tag=3,e}function Vh(e,t,n,i){var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var h=i.value;e.payload=function(){return d(h)},e.callback=function(){Yh(t,n,i)}}var E=n.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Yh(t,n,i),typeof d!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})})}function M0(e,t,n,i,d){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&yo(t,n,d,!0),n=Ka.current,n!==null){switch(n.tag){case 13:return hn===null?Xd():n.alternate===null&&_t===0&&(_t=3),n.flags&=-257,n.flags|=65536,n.lanes=d,i===Jc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Kd(e,i,d)),!1;case 22:return n.flags|=65536,i===Jc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Kd(e,i,d)),!1}throw Error(o(435,n.tag))}return Kd(e,i,d),Xd(),!1}if(nt)return t=Ka.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,i!==Vc&&(e=Error(o(422),{cause:i}),mo(Va(e,n)))):(i!==Vc&&(t=Error(o(423),{cause:i}),mo(Va(t,n))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,i=Va(i,n),d=Td(e.stateNode,i,d),ad(e,d),_t!==4&&(_t=2)),!1;var h=Error(o(520),{cause:i});if(h=Va(h,n),qo===null?qo=[h]:qo.push(h),_t!==4&&(_t=2),t===null)return!0;i=Va(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=d&-d,n.lanes|=e,e=Td(n.stateNode,i,e),ad(n,e),!1;case 1:if(t=n.type,h=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(hr===null||!hr.has(h))))return n.flags|=65536,d&=-d,n.lanes|=d,d=Hh(d),Vh(d,e,n,i),ad(n,d),!1}n=n.return}while(n!==null);return!1}var Gh=Error(o(461)),ea=!1;function ia(e,t,n,i){t.child=e===null?qh(t,null,n,i):Rs(t,e.child,n,i)}function Xh(e,t,n,i,d){n=n.render;var h=t.ref;if("ref"in i){var E={};for(var A in i)A!=="ref"&&(E[A]=i[A])}else E=i;return Yr(t),i=id(e,t,n,E,h,d),A=ld(),e!==null&&!ea?(cd(e,t,d),qn(e,t,d)):(nt&&A&&Yc(t),t.flags|=1,ia(e,t,i,d),t.child)}function Wh(e,t,n,i,d){if(e===null){var h=n.type;return typeof h=="function"&&!Uc(h)&&h.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=h,Kh(e,t,h,i,d)):(e=Hi(n.type,null,i,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!Ld(e,d)){var E=h.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(E,i)&&e.ref===t.ref)return qn(e,t,d)}return t.flags|=1,e=_n(h,i),e.ref=t.ref,e.return=t,t.child=e}function Kh(e,t,n,i,d){if(e!==null){var h=e.memoizedProps;if(po(h,i)&&e.ref===t.ref)if(ea=!1,t.pendingProps=i=h,Ld(e,d))(e.flags&131072)!==0&&(ea=!0);else return t.lanes=e.lanes,qn(e,t,d)}return Ad(e,t,n,i,d)}function Zh(e,t,n){var i=t.pendingProps,d=i.children,h=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=h!==null?h.baseLanes|n:n,e!==null){for(d=t.child=e.child,h=0;d!==null;)h=h|d.lanes|d.childLanes,d=d.sibling;t.childLanes=h&~i}else t.childLanes=0,t.child=null;return Qh(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ki(t,h!==null?h.cachePool:null),h!==null?Kf(t,h):rd(),Mh(t);else return t.lanes=t.childLanes=536870912,Qh(e,t,h!==null?h.baseLanes|n:n,n)}else h!==null?(Ki(t,h.cachePool),Kf(t,h),lr(),t.memoizedState=null):(e!==null&&Ki(t,null),rd(),lr());return ia(e,t,d,n),t.child}function Qh(e,t,n,i){var d=Qc();return d=d===null?null:{parent:Xt._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&Ki(t,null),rd(),Mh(t),e!==null&&yo(e,t,i,!0),null}function fl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Ad(e,t,n,i,d){return Yr(t),n=id(e,t,n,i,void 0,d),i=ld(),e!==null&&!ea?(cd(e,t,d),qn(e,t,d)):(nt&&i&&Yc(t),t.flags|=1,ia(e,t,n,d),t.child)}function Jh(e,t,n,i,d,h){return Yr(t),t.updateQueue=null,n=Qf(t,i,n,d),Zf(e),i=ld(),e!==null&&!ea?(cd(e,t,h),qn(e,t,h)):(nt&&i&&Yc(t),t.flags|=1,ia(e,t,n,h),t.child)}function eg(e,t,n,i,d){if(Yr(t),t.stateNode===null){var h=vs,E=n.contextType;typeof E=="object"&&E!==null&&(h=ma(E)),h=new n(i,h),t.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Sd,t.stateNode=h,h._reactInternals=t,h=t.stateNode,h.props=i,h.state=t.memoizedState,h.refs={},ed(t),E=n.contextType,h.context=typeof E=="object"&&E!==null?ma(E):vs,h.state=t.memoizedState,E=n.getDerivedStateFromProps,typeof E=="function"&&(xd(t,n,E,i),h.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&Sd.enqueueReplaceState(h,h.state,null),To(t,i,h,d),So(),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){h=t.stateNode;var A=t.memoizedProps,q=Gr(n,A);h.props=q;var K=h.context,oe=n.contextType;E=vs,typeof oe=="object"&&oe!==null&&(E=ma(oe));var de=n.getDerivedStateFromProps;oe=typeof de=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=t.pendingProps!==A,oe||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||K!==E)&&Fh(t,h,i,E),nr=!1;var Q=t.memoizedState;h.state=Q,To(t,i,h,d),So(),K=t.memoizedState,A||Q!==K||nr?(typeof de=="function"&&(xd(t,n,de,i),K=t.memoizedState),(q=nr||$h(t,n,q,i,Q,K,E))?(oe||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=K),h.props=i,h.state=K,h.context=E,i=q):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{h=t.stateNode,td(e,t),E=t.memoizedProps,oe=Gr(n,E),h.props=oe,de=t.pendingProps,Q=h.context,K=n.contextType,q=vs,typeof K=="object"&&K!==null&&(q=ma(K)),A=n.getDerivedStateFromProps,(K=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==de||Q!==q)&&Fh(t,h,i,q),nr=!1,Q=t.memoizedState,h.state=Q,To(t,i,h,d),So();var ee=t.memoizedState;E!==de||Q!==ee||nr||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof A=="function"&&(xd(t,n,A,i),ee=t.memoizedState),(oe=nr||$h(t,n,oe,i,Q,ee,q)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(K||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(i,ee,q),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(i,ee,q)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&Q===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&Q===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=ee),h.props=i,h.state=ee,h.context=q,i=oe):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&Q===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&Q===e.memoizedState||(t.flags|=1024),i=!1)}return h=i,fl(e,t),i=(t.flags&128)!==0,h||i?(h=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:h.render(),t.flags|=1,e!==null&&i?(t.child=Rs(t,e.child,null,d),t.child=Rs(t,null,n,d)):ia(e,t,n,d),t.memoizedState=h.state,e=t.child):e=qn(e,t,d),e}function tg(e,t,n,i){return go(),t.flags|=256,ia(e,t,n,i),t.child}var Dd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Nd(e){return{baseLanes:e,cachePool:Bf()}}function Cd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Za),e}function ag(e,t,n){var i=t.pendingProps,d=!1,h=(t.flags&128)!==0,E;if((E=h)||(E=e!==null&&e.memoizedState===null?!1:(Wt.current&2)!==0),E&&(d=!0,t.flags&=-129),E=(t.flags&32)!==0,t.flags&=-33,e===null){if(nt){if(d?ir(t):lr(),nt){var A=Rt,q;if(q=A){e:{for(q=A,A=fn;q.nodeType!==8;){if(!A){A=null;break e}if(q=on(q.nextSibling),q===null){A=null;break e}}A=q}A!==null?(t.memoizedState={dehydrated:A,treeContext:$r!==null?{id:In,overflow:Ln}:null,retryLane:536870912,hydrationErrors:null},q=ka(18,null,null,0),q.stateNode=A,q.return=t,t.child=q,Ea=t,Rt=null,q=!0):q=!1}q||Br(t)}if(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return uu(A)?t.lanes=32:t.lanes=536870912,null;jn(t)}return A=i.children,i=i.fallback,d?(lr(),d=t.mode,A=hl({mode:"hidden",children:A},d),i=Mr(i,d,n,null),A.return=t,i.return=t,A.sibling=i,t.child=A,d=t.child,d.memoizedState=Nd(n),d.childLanes=Cd(e,E,n),t.memoizedState=Dd,i):(ir(t),Rd(t,A))}if(q=e.memoizedState,q!==null&&(A=q.dehydrated,A!==null)){if(h)t.flags&256?(ir(t),t.flags&=-257,t=_d(e,t,n)):t.memoizedState!==null?(lr(),t.child=e.child,t.flags|=128,t=null):(lr(),d=i.fallback,A=t.mode,i=hl({mode:"visible",children:i.children},A),d=Mr(d,A,n,null),d.flags|=2,i.return=t,d.return=t,i.sibling=d,t.child=i,Rs(t,e.child,null,n),i=t.child,i.memoizedState=Nd(n),i.childLanes=Cd(e,E,n),t.memoizedState=Dd,t=d);else if(ir(t),uu(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var K=E.dgst;E=K,i=Error(o(419)),i.stack="",i.digest=E,mo({value:i,source:null,stack:null}),t=_d(e,t,n)}else if(ea||yo(e,t,n,!1),E=(n&e.childLanes)!==0,ea||E){if(E=vt,E!==null&&(i=n&-n,i=(i&42)!==0?1:Nn(i),i=(i&(E.suspendedLanes|n))!==0?0:i,i!==0&&i!==q.retryLane))throw q.retryLane=i,bs(e,i),$a(E,e,i),Gh;A.data==="$?"||Xd(),t=_d(e,t,n)}else A.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=q.treeContext,Rt=on(A.nextSibling),Ea=t,nt=!0,Ur=null,fn=!1,e!==null&&(Xa[Wa++]=In,Xa[Wa++]=Ln,Xa[Wa++]=$r,In=e.id,Ln=e.overflow,$r=t),t=Rd(t,i.children),t.flags|=4096);return t}return d?(lr(),d=i.fallback,A=t.mode,q=e.child,K=q.sibling,i=_n(q,{mode:"hidden",children:i.children}),i.subtreeFlags=q.subtreeFlags&65011712,K!==null?d=_n(K,d):(d=Mr(d,A,n,null),d.flags|=2),d.return=t,i.return=t,i.sibling=d,t.child=i,i=d,d=t.child,A=e.child.memoizedState,A===null?A=Nd(n):(q=A.cachePool,q!==null?(K=Xt._currentValue,q=q.parent!==K?{parent:K,pool:K}:q):q=Bf(),A={baseLanes:A.baseLanes|n,cachePool:q}),d.memoizedState=A,d.childLanes=Cd(e,E,n),t.memoizedState=Dd,i):(ir(t),n=e.child,e=n.sibling,n=_n(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(E=t.deletions,E===null?(t.deletions=[e],t.flags|=16):E.push(e)),t.child=n,t.memoizedState=null,n)}function Rd(e,t){return t=hl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function hl(e,t){return e=ka(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function _d(e,t,n){return Rs(t,e.child,null,n),e=Rd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ng(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Xc(e.return,t,n)}function Id(e,t,n,i,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:d}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=n,h.tailMode=d)}function rg(e,t,n){var i=t.pendingProps,d=i.revealOrder,h=i.tail;if(ia(e,t,i.children,n),i=Wt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ng(e,n,t);else if(e.tag===19)ng(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(G(Wt,i),d){case"forwards":for(n=t.child,d=null;n!==null;)e=n.alternate,e!==null&&dl(e)===null&&(d=n),n=n.sibling;n=d,n===null?(d=t.child,t.child=null):(d=n.sibling,n.sibling=null),Id(t,!1,d,n,h);break;case"backwards":for(n=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&dl(e)===null){t.child=d;break}e=d.sibling,d.sibling=n,n=d,d=e}Id(t,!0,n,null,h);break;case"together":Id(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(yo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=_n(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=_n(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ld(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xi(e)))}function $0(e,t,n){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),ar(t,Xt,e.memoizedState.cache),go();break;case 27:case 5:at(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:ar(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ir(t),t.flags|=128,null):(n&t.child.childLanes)!==0?ag(e,t,n):(ir(t),e=qn(e,t,n),e!==null?e.sibling:null);ir(t);break;case 19:var d=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(yo(e,t,n,!1),i=(n&t.childLanes)!==0),d){if(i)return rg(e,t,n);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),G(Wt,Wt.current),i)break;return null;case 22:case 23:return t.lanes=0,Zh(e,t,n);case 24:ar(t,Xt,e.memoizedState.cache)}return qn(e,t,n)}function sg(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ea=!0;else{if(!Ld(e,n)&&(t.flags&128)===0)return ea=!1,$0(e,t,n);ea=(e.flags&131072)!==0}else ea=!1,nt&&(t.flags&1048576)!==0&&Of(t,Gi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,d=i._init;if(i=d(i._payload),t.type=i,typeof i=="function")Uc(i)?(e=Gr(i,e),t.tag=1,t=eg(null,t,i,e,n)):(t.tag=0,t=Ad(null,t,i,e,n));else{if(i!=null){if(d=i.$$typeof,d===C){t.tag=11,t=Xh(null,t,i,e,n);break e}else if(d===R){t.tag=14,t=Wh(null,t,i,e,n);break e}}throw t=ie(i)||i,Error(o(306,t,""))}}return t;case 0:return Ad(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,d=Gr(i,t.pendingProps),eg(e,t,i,d,n);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var h=t.memoizedState;d=h.element,td(e,t),To(t,i,null,n);var E=t.memoizedState;if(i=E.cache,ar(t,Xt,i),i!==h.cache&&Wc(t,[Xt],n,!0),So(),i=E.element,h.isDehydrated)if(h={element:i,isDehydrated:!1,cache:E.cache},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){t=tg(e,t,i,n);break e}else if(i!==d){d=Va(Error(o(424)),t),mo(d),t=tg(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Rt=on(e.firstChild),Ea=t,nt=!0,Ur=null,fn=!0,n=qh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(go(),i===d){t=qn(e,t,n);break e}ia(e,t,i,n)}t=t.child}return t;case 26:return fl(e,t),e===null?(n=cm(t.type,null,t.pendingProps,null))?t.memoizedState=n:nt||(n=t.type,e=t.pendingProps,i=Cl(be.current).createElement(n),i[Dt]=t,i[Ft]=e,ca(i,n,e),Z(i),t.stateNode=i):t.memoizedState=cm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return at(t),e===null&&nt&&(i=t.stateNode=om(t.type,t.pendingProps,be.current),Ea=t,fn=!0,d=Rt,yr(t.type)?(pu=d,Rt=on(i.firstChild)):Rt=d),ia(e,t,t.pendingProps.children,n),fl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&nt&&((d=i=Rt)&&(i=fE(i,t.type,t.pendingProps,fn),i!==null?(t.stateNode=i,Ea=t,Rt=on(i.firstChild),fn=!1,d=!0):d=!1),d||Br(t)),at(t),d=t.type,h=t.pendingProps,E=e!==null?e.memoizedProps:null,i=h.children,lu(d,h)?i=null:E!==null&&lu(d,E)&&(t.flags|=32),t.memoizedState!==null&&(d=id(e,t,I0,null,null,n),Vo._currentValue=d),fl(e,t),ia(e,t,i,n),t.child;case 6:return e===null&&nt&&((e=n=Rt)&&(n=hE(n,t.pendingProps,fn),n!==null?(t.stateNode=n,Ea=t,Rt=null,e=!0):e=!1),e||Br(t)),null;case 13:return ag(e,t,n);case 4:return ke(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Rs(t,null,i,n):ia(e,t,i,n),t.child;case 11:return Xh(e,t,t.type,t.pendingProps,n);case 7:return ia(e,t,t.pendingProps,n),t.child;case 8:return ia(e,t,t.pendingProps.children,n),t.child;case 12:return ia(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,ar(t,t.type,i.value),ia(e,t,i.children,n),t.child;case 9:return d=t.type._context,i=t.pendingProps.children,Yr(t),d=ma(d),i=i(d),t.flags|=1,ia(e,t,i,n),t.child;case 14:return Wh(e,t,t.type,t.pendingProps,n);case 15:return Kh(e,t,t.type,t.pendingProps,n);case 19:return rg(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=hl(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=_n(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Zh(e,t,n);case 24:return Yr(t),i=ma(Xt),e===null?(d=Qc(),d===null&&(d=vt,h=Kc(),d.pooledCache=h,h.refCount++,h!==null&&(d.pooledCacheLanes|=n),d=h),t.memoizedState={parent:i,cache:d},ed(t),ar(t,Xt,d)):((e.lanes&n)!==0&&(td(e,t),To(t,null,null,n),So()),d=e.memoizedState,h=t.memoizedState,d.parent!==i?(d={parent:i,cache:i},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),ar(t,Xt,i)):(i=h.cache,ar(t,Xt,i),i!==d.cache&&Wc(t,[Xt],n,!0))),ia(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Mn(e){e.flags|=4}function og(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hm(t)){if(t=Ka.current,t!==null&&((Ke&4194048)===Ke?hn!==null:(Ke&62914560)!==Ke&&(Ke&536870912)===0||t!==hn))throw wo=Jc,zf;e.flags|=8192}}function gl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Pe():536870912,e.lanes|=t,Ps|=t)}function Io(e,t){if(!nt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Nt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var d=e.child;d!==null;)n|=d.lanes|d.childLanes,i|=d.subtreeFlags&65011712,i|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)n|=d.lanes|d.childLanes,i|=d.subtreeFlags,i|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function F0(e,t,n){var i=t.pendingProps;switch(Hc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(t),null;case 1:return Nt(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),kn(Xt),ht(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ho(t)?Mn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Mf())),Nt(t),null;case 26:return n=t.memoizedState,e===null?(Mn(t),n!==null?(Nt(t),og(t,n)):(Nt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Mn(t),Nt(t),og(t,n)):(Nt(t),t.flags&=-16777217):(e.memoizedProps!==i&&Mn(t),Nt(t),t.flags&=-16777217),null;case 27:ot(t),n=be.current;var d=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Nt(t),null}e=le.current,ho(t)?jf(t):(e=om(d,i,n),t.stateNode=e,Mn(t))}return Nt(t),null;case 5:if(ot(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Nt(t),null}if(e=le.current,ho(t))jf(t);else{switch(d=Cl(be.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?d.createElement(n,{is:i.is}):d.createElement(n)}}e[Dt]=t,e[Ft]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=e;e:switch(ca(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Mn(t)}}return Nt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Mn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=be.current,ho(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,d=Ea,d!==null)switch(d.tag){case 27:case 5:i=d.memoizedProps}e[Dt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Jg(e.nodeValue,n)),e||Br(t)}else e=Cl(e).createTextNode(i),e[Dt]=t,t.stateNode=e}return Nt(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=ho(t),i!==null&&i.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Dt]=t}else go(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Nt(t),d=!1}else d=Mf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(jn(t),t):(jn(t),null)}if(jn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,d=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(d=i.alternate.memoizedState.cachePool.pool);var h=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(h=i.memoizedState.cachePool.pool),h!==d&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),gl(t,t.updateQueue),Nt(t),null;case 4:return ht(),e===null&&nu(t.stateNode.containerInfo),Nt(t),null;case 10:return kn(t.type),Nt(t),null;case 19:if(z(Wt),d=t.memoizedState,d===null)return Nt(t),null;if(i=(t.flags&128)!==0,h=d.rendering,h===null)if(i)Io(d,!1);else{if(_t!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=dl(e),h!==null){for(t.flags|=128,Io(d,!1),e=h.updateQueue,t.updateQueue=e,gl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)kf(n,e),n=n.sibling;return G(Wt,Wt.current&1|2),t.child}e=e.sibling}d.tail!==null&&ge()>bl&&(t.flags|=128,i=!0,Io(d,!1),t.lanes=4194304)}else{if(!i)if(e=dl(h),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,gl(t,e),Io(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!nt)return Nt(t),null}else 2*ge()-d.renderingStartTime>bl&&n!==536870912&&(t.flags|=128,i=!0,Io(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(e=d.last,e!==null?e.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=ge(),t.sibling=null,e=Wt.current,G(Wt,i?e&1|2:e&1),t):(Nt(t),null);case 22:case 23:return jn(t),sd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Nt(t),t.subtreeFlags&6&&(t.flags|=8192)):Nt(t),n=t.updateQueue,n!==null&&gl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&z(Hr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),kn(Xt),Nt(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function U0(e,t){switch(Hc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(Xt),ht(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ot(t),null;case 13:if(jn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));go()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return z(Wt),null;case 4:return ht(),null;case 10:return kn(t.type),null;case 22:case 23:return jn(t),sd(),e!==null&&z(Hr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kn(Xt),null;case 25:return null;default:return null}}function ig(e,t){switch(Hc(t),t.tag){case 3:kn(Xt),ht();break;case 26:case 27:case 5:ot(t);break;case 4:ht();break;case 13:jn(t);break;case 19:z(Wt);break;case 10:kn(t.type);break;case 22:case 23:jn(t),sd(),e!==null&&z(Hr);break;case 24:kn(Xt)}}function Lo(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var d=i.next;n=d;do{if((n.tag&e)===e){i=void 0;var h=n.create,E=n.inst;i=h(),E.destroy=i}n=n.next}while(n!==d)}}catch(A){mt(t,t.return,A)}}function cr(e,t,n){try{var i=t.updateQueue,d=i!==null?i.lastEffect:null;if(d!==null){var h=d.next;i=h;do{if((i.tag&e)===e){var E=i.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,d=t;var q=n,K=A;try{K()}catch(oe){mt(d,q,oe)}}}i=i.next}while(i!==h)}}catch(oe){mt(t,t.return,oe)}}function lg(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wf(t,n)}catch(i){mt(e,e.return,i)}}}function cg(e,t,n){n.props=Gr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){mt(e,t,i)}}function Po(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(d){mt(e,t,d)}}function gn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(d){mt(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(d){mt(e,t,d)}else n.current=null}function dg(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(d){mt(e,e.return,d)}}function Pd(e,t,n){try{var i=e.stateNode;lE(i,e.type,n,t),i[Ft]=t}catch(d){mt(e,e.return,d)}}function ug(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yr(e.type)||e.tag===4}function kd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ug(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Od(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Nl));else if(i!==4&&(i===27&&yr(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Od(e,t,n),e=e.sibling;e!==null;)Od(e,t,n),e=e.sibling}function ml(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&yr(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(ml(e,t,n),e=e.sibling;e!==null;)ml(e,t,n),e=e.sibling}function pg(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);ca(t,i,n),t[Dt]=e,t[Ft]=n}catch(h){mt(e,e.return,h)}}var $n=!1,Ot=!1,jd=!1,fg=typeof WeakSet=="function"?WeakSet:Set,ta=null;function B0(e,t){if(e=e.containerInfo,ou=kl,e=Tf(e),kc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var d=i.anchorOffset,h=i.focusNode;i=i.focusOffset;try{n.nodeType,h.nodeType}catch{n=null;break e}var E=0,A=-1,q=-1,K=0,oe=0,de=e,Q=null;t:for(;;){for(var ee;de!==n||d!==0&&de.nodeType!==3||(A=E+d),de!==h||i!==0&&de.nodeType!==3||(q=E+i),de.nodeType===3&&(E+=de.nodeValue.length),(ee=de.firstChild)!==null;)Q=de,de=ee;for(;;){if(de===e)break t;if(Q===n&&++K===d&&(A=E),Q===h&&++oe===i&&(q=E),(ee=de.nextSibling)!==null)break;de=Q,Q=de.parentNode}de=ee}n=A===-1||q===-1?null:{start:A,end:q}}else n=null}n=n||{start:0,end:0}}else n=null;for(iu={focusedElem:e,selectionRange:n},kl=!1,ta=t;ta!==null;)if(t=ta,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ta=e;else for(;ta!==null;){switch(t=ta,h=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,n=t,d=h.memoizedProps,h=h.memoizedState,i=n.stateNode;try{var Oe=Gr(n.type,d,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(Oe,h),i.__reactInternalSnapshotBeforeUpdate=e}catch(_e){mt(n,n.return,_e)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)du(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":du(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,ta=e;break}ta=t.return}}function hg(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:dr(e,n),i&4&&Lo(5,n);break;case 1:if(dr(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(E){mt(n,n.return,E)}else{var d=Gr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(E){mt(n,n.return,E)}}i&64&&lg(n),i&512&&Po(n,n.return);break;case 3:if(dr(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wf(e,t)}catch(E){mt(n,n.return,E)}}break;case 27:t===null&&i&4&&pg(n);case 26:case 5:dr(e,n),t===null&&i&4&&dg(n),i&512&&Po(n,n.return);break;case 12:dr(e,n);break;case 13:dr(e,n),i&4&&yg(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Z0.bind(null,n),gE(e,n))));break;case 22:if(i=n.memoizedState!==null||$n,!i){t=t!==null&&t.memoizedState!==null||Ot,d=$n;var h=Ot;$n=i,(Ot=t)&&!h?ur(e,n,(n.subtreeFlags&8772)!==0):dr(e,n),$n=d,Ot=h}break;case 30:break;default:dr(e,n)}}function gg(e){var t=e.alternate;t!==null&&(e.alternate=null,gg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&oa(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var St=null,Da=!1;function Fn(e,t,n){for(n=n.child;n!==null;)mg(e,t,n),n=n.sibling}function mg(e,t,n){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Qt,n)}catch{}switch(n.tag){case 26:Ot||gn(n,t),Fn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ot||gn(n,t);var i=St,d=Da;yr(n.type)&&(St=n.stateNode,Da=!1),Fn(e,t,n),Bo(n.stateNode),St=i,Da=d;break;case 5:Ot||gn(n,t);case 6:if(i=St,d=Da,St=null,Fn(e,t,n),St=i,Da=d,St!==null)if(Da)try{(St.nodeType===9?St.body:St.nodeName==="HTML"?St.ownerDocument.body:St).removeChild(n.stateNode)}catch(h){mt(n,t,h)}else try{St.removeChild(n.stateNode)}catch(h){mt(n,t,h)}break;case 18:St!==null&&(Da?(e=St,rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ko(e)):rm(St,n.stateNode));break;case 4:i=St,d=Da,St=n.stateNode.containerInfo,Da=!0,Fn(e,t,n),St=i,Da=d;break;case 0:case 11:case 14:case 15:Ot||cr(2,n,t),Ot||cr(4,n,t),Fn(e,t,n);break;case 1:Ot||(gn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&cg(n,t,i)),Fn(e,t,n);break;case 21:Fn(e,t,n);break;case 22:Ot=(i=Ot)||n.memoizedState!==null,Fn(e,t,n),Ot=i;break;default:Fn(e,t,n)}}function yg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ko(e)}catch(n){mt(t,t.return,n)}}function z0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new fg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new fg),t;default:throw Error(o(435,e.tag))}}function qd(e,t){var n=z0(e);t.forEach(function(i){var d=Q0.bind(null,e,i);n.has(i)||(n.add(i),i.then(d,d))})}function Oa(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var d=n[i],h=e,E=t,A=E;e:for(;A!==null;){switch(A.tag){case 27:if(yr(A.type)){St=A.stateNode,Da=!1;break e}break;case 5:St=A.stateNode,Da=!1;break e;case 3:case 4:St=A.stateNode.containerInfo,Da=!0;break e}A=A.return}if(St===null)throw Error(o(160));mg(h,E,d),St=null,Da=!1,h=d.alternate,h!==null&&(h.return=null),d.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)bg(t,e),t=t.sibling}var sn=null;function bg(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Oa(t,e),ja(e),i&4&&(cr(3,e,e.return),Lo(3,e),cr(5,e,e.return));break;case 1:Oa(t,e),ja(e),i&512&&(Ot||n===null||gn(n,n.return)),i&64&&$n&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var d=sn;if(Oa(t,e),ja(e),i&512&&(Ot||n===null||gn(n,n.return)),i&4){var h=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,d=d.ownerDocument||d;t:switch(i){case"title":h=d.getElementsByTagName("title")[0],(!h||h[tn]||h[Dt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=d.createElement(i),d.head.insertBefore(h,d.querySelector("head > title"))),ca(h,i,n),h[Dt]=e,Z(h),i=h;break e;case"link":var E=pm("link","href",d).get(i+(n.href||""));if(E){for(var A=0;A<E.length;A++)if(h=E[A],h.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&h.getAttribute("rel")===(n.rel==null?null:n.rel)&&h.getAttribute("title")===(n.title==null?null:n.title)&&h.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){E.splice(A,1);break t}}h=d.createElement(i),ca(h,i,n),d.head.appendChild(h);break;case"meta":if(E=pm("meta","content",d).get(i+(n.content||""))){for(A=0;A<E.length;A++)if(h=E[A],h.getAttribute("content")===(n.content==null?null:""+n.content)&&h.getAttribute("name")===(n.name==null?null:n.name)&&h.getAttribute("property")===(n.property==null?null:n.property)&&h.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&h.getAttribute("charset")===(n.charSet==null?null:n.charSet)){E.splice(A,1);break t}}h=d.createElement(i),ca(h,i,n),d.head.appendChild(h);break;default:throw Error(o(468,i))}h[Dt]=e,Z(h),i=h}e.stateNode=i}else fm(d,e.type,e.stateNode);else e.stateNode=um(d,i,e.memoizedProps);else h!==i?(h===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):h.count--,i===null?fm(d,e.type,e.stateNode):um(d,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Pd(e,e.memoizedProps,n.memoizedProps)}break;case 27:Oa(t,e),ja(e),i&512&&(Ot||n===null||gn(n,n.return)),n!==null&&i&4&&Pd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Oa(t,e),ja(e),i&512&&(Ot||n===null||gn(n,n.return)),e.flags&32){d=e.stateNode;try{us(d,"")}catch(ee){mt(e,e.return,ee)}}i&4&&e.stateNode!=null&&(d=e.memoizedProps,Pd(e,d,n!==null?n.memoizedProps:d)),i&1024&&(jd=!0);break;case 6:if(Oa(t,e),ja(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(ee){mt(e,e.return,ee)}}break;case 3:if(Il=null,d=sn,sn=Rl(t.containerInfo),Oa(t,e),sn=d,ja(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ko(t.containerInfo)}catch(ee){mt(e,e.return,ee)}jd&&(jd=!1,vg(e));break;case 4:i=sn,sn=Rl(e.stateNode.containerInfo),Oa(t,e),ja(e),sn=i;break;case 12:Oa(t,e),ja(e);break;case 13:Oa(t,e),ja(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zd=ge()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,qd(e,i)));break;case 22:d=e.memoizedState!==null;var q=n!==null&&n.memoizedState!==null,K=$n,oe=Ot;if($n=K||d,Ot=oe||q,Oa(t,e),Ot=oe,$n=K,ja(e),i&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(n===null||q||$n||Ot||Xr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){q=n=t;try{if(h=q.stateNode,d)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=q.stateNode;var de=q.memoizedProps.style,Q=de!=null&&de.hasOwnProperty("display")?de.display:null;A.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(ee){mt(q,q.return,ee)}}}else if(t.tag===6){if(n===null){q=t;try{q.stateNode.nodeValue=d?"":q.memoizedProps}catch(ee){mt(q,q.return,ee)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,qd(e,n))));break;case 19:Oa(t,e),ja(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,qd(e,i)));break;case 30:break;case 21:break;default:Oa(t,e),ja(e)}}function ja(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(ug(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var d=n.stateNode,h=kd(e);ml(e,h,d);break;case 5:var E=n.stateNode;n.flags&32&&(us(E,""),n.flags&=-33);var A=kd(e);ml(e,A,E);break;case 3:case 4:var q=n.stateNode.containerInfo,K=kd(e);Od(e,K,q);break;default:throw Error(o(161))}}catch(oe){mt(e,e.return,oe)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function dr(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)hg(e,t.alternate,t),t=t.sibling}function Xr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:cr(4,t,t.return),Xr(t);break;case 1:gn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&cg(t,t.return,n),Xr(t);break;case 27:Bo(t.stateNode);case 26:case 5:gn(t,t.return),Xr(t);break;case 22:t.memoizedState===null&&Xr(t);break;case 30:Xr(t);break;default:Xr(t)}e=e.sibling}}function ur(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,d=e,h=t,E=h.flags;switch(h.tag){case 0:case 11:case 15:ur(d,h,n),Lo(4,h);break;case 1:if(ur(d,h,n),i=h,d=i.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(K){mt(i,i.return,K)}if(i=h,d=i.updateQueue,d!==null){var A=i.stateNode;try{var q=d.shared.hiddenCallbacks;if(q!==null)for(d.shared.hiddenCallbacks=null,d=0;d<q.length;d++)Xf(q[d],A)}catch(K){mt(i,i.return,K)}}n&&E&64&&lg(h),Po(h,h.return);break;case 27:pg(h);case 26:case 5:ur(d,h,n),n&&i===null&&E&4&&dg(h),Po(h,h.return);break;case 12:ur(d,h,n);break;case 13:ur(d,h,n),n&&E&4&&yg(d,h);break;case 22:h.memoizedState===null&&ur(d,h,n),Po(h,h.return);break;case 30:break;default:ur(d,h,n)}t=t.sibling}}function Md(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&bo(n))}function $d(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bo(e))}function mn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Eg(e,t,n,i),t=t.sibling}function Eg(e,t,n,i){var d=t.flags;switch(t.tag){case 0:case 11:case 15:mn(e,t,n,i),d&2048&&Lo(9,t);break;case 1:mn(e,t,n,i);break;case 3:mn(e,t,n,i),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&bo(e)));break;case 12:if(d&2048){mn(e,t,n,i),e=t.stateNode;try{var h=t.memoizedProps,E=h.id,A=h.onPostCommit;typeof A=="function"&&A(E,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(q){mt(t,t.return,q)}}else mn(e,t,n,i);break;case 13:mn(e,t,n,i);break;case 23:break;case 22:h=t.stateNode,E=t.alternate,t.memoizedState!==null?h._visibility&2?mn(e,t,n,i):ko(e,t):h._visibility&2?mn(e,t,n,i):(h._visibility|=2,_s(e,t,n,i,(t.subtreeFlags&10256)!==0)),d&2048&&Md(E,t);break;case 24:mn(e,t,n,i),d&2048&&$d(t.alternate,t);break;default:mn(e,t,n,i)}}function _s(e,t,n,i,d){for(d=d&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var h=e,E=t,A=n,q=i,K=E.flags;switch(E.tag){case 0:case 11:case 15:_s(h,E,A,q,d),Lo(8,E);break;case 23:break;case 22:var oe=E.stateNode;E.memoizedState!==null?oe._visibility&2?_s(h,E,A,q,d):ko(h,E):(oe._visibility|=2,_s(h,E,A,q,d)),d&&K&2048&&Md(E.alternate,E);break;case 24:_s(h,E,A,q,d),d&&K&2048&&$d(E.alternate,E);break;default:_s(h,E,A,q,d)}t=t.sibling}}function ko(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,d=i.flags;switch(i.tag){case 22:ko(n,i),d&2048&&Md(i.alternate,i);break;case 24:ko(n,i),d&2048&&$d(i.alternate,i);break;default:ko(n,i)}t=t.sibling}}var Oo=8192;function Is(e){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)wg(e),e=e.sibling}function wg(e){switch(e.tag){case 26:Is(e),e.flags&Oo&&e.memoizedState!==null&&CE(sn,e.memoizedState,e.memoizedProps);break;case 5:Is(e);break;case 3:case 4:var t=sn;sn=Rl(e.stateNode.containerInfo),Is(e),sn=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Oo,Oo=16777216,Is(e),Oo=t):Is(e));break;default:Is(e)}}function xg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function jo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ta=i,Tg(i,e)}xg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sg(e),e=e.sibling}function Sg(e){switch(e.tag){case 0:case 11:case 15:jo(e),e.flags&2048&&cr(9,e,e.return);break;case 3:jo(e);break;case 12:jo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,yl(e)):jo(e);break;default:jo(e)}}function yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ta=i,Tg(i,e)}xg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:cr(8,t,t.return),yl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,yl(t));break;default:yl(t)}e=e.sibling}}function Tg(e,t){for(;ta!==null;){var n=ta;switch(n.tag){case 0:case 11:case 15:cr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:bo(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ta=i;else e:for(n=e;ta!==null;){i=ta;var d=i.sibling,h=i.return;if(gg(i),i===n){ta=null;break e}if(d!==null){d.return=h,ta=d;break e}ta=h}}}var Y0={getCacheForType:function(e){var t=ma(Xt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},H0=typeof WeakMap=="function"?WeakMap:Map,it=0,vt=null,He=null,Ke=0,lt=0,qa=null,pr=!1,Ls=!1,Fd=!1,Un=0,_t=0,fr=0,Wr=0,Ud=0,Za=0,Ps=0,qo=null,Na=null,Bd=!1,zd=0,bl=1/0,vl=null,hr=null,la=0,gr=null,ks=null,Os=0,Yd=0,Hd=null,Ag=null,Mo=0,Vd=null;function Ma(){if((it&2)!==0&&Ke!==0)return Ke&-Ke;if(H.T!==null){var e=xs;return e!==0?e:Jd()}return za()}function Dg(){Za===0&&(Za=(Ke&536870912)===0||nt?Dn():536870912);var e=Ka.current;return e!==null&&(e.flags|=32),Za}function $a(e,t,n){(e===vt&&(lt===2||lt===9)||e.cancelPendingCommit!==null)&&(js(e,0),mr(e,Ke,Za,!1)),yt(e,n),((it&2)===0||e!==vt)&&(e===vt&&((it&2)===0&&(Wr|=n),_t===4&&mr(e,Ke,Za,!1)),yn(e))}function Ng(e,t,n){if((it&6)!==0)throw Error(o(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||ga(e,t),d=i?X0(e,t):Wd(e,t,!0),h=i;do{if(d===0){Ls&&!i&&mr(e,t,0,!1);break}else{if(n=e.current.alternate,h&&!V0(n)){d=Wd(e,t,!1),h=!1;continue}if(d===2){if(h=t,e.errorRecoveryDisabledLanes&h)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){t=E;e:{var A=e;d=qo;var q=A.current.memoizedState.isDehydrated;if(q&&(js(A,E).flags|=256),E=Wd(A,E,!1),E!==2){if(Fd&&!q){A.errorRecoveryDisabledLanes|=h,Wr|=h,d=4;break e}h=Na,Na=d,h!==null&&(Na===null?Na=h:Na.push.apply(Na,h))}d=E}if(h=!1,d!==2)continue}}if(d===1){js(e,0),mr(e,t,0,!0);break}e:{switch(i=e,h=d,h){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:mr(i,t,Za,!pr);break e;case 2:Na=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(d=zd+300-ge(),10<d)){if(mr(i,t,Za,!pr),Je(i,0,!0)!==0)break e;i.timeoutHandle=am(Cg.bind(null,i,n,Na,vl,Bd,t,Za,Wr,Ps,pr,h,2,-0,0),d);break e}Cg(i,n,Na,vl,Bd,t,Za,Wr,Ps,pr,h,0,-0,0)}}break}while(!0);yn(e)}function Cg(e,t,n,i,d,h,E,A,q,K,oe,de,Q,ee){if(e.timeoutHandle=-1,de=t.subtreeFlags,(de&8192||(de&16785408)===16785408)&&(Ho={stylesheets:null,count:0,unsuspend:NE},wg(t),de=RE(),de!==null)){e.cancelPendingCommit=de(Og.bind(null,e,t,h,n,i,d,E,A,q,oe,1,Q,ee)),mr(e,h,E,!K);return}Og(e,t,h,n,i,d,E,A,q)}function V0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var d=n[i],h=d.getSnapshot;d=d.value;try{if(!Pa(h(),d))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function mr(e,t,n,i){t&=~Ud,t&=~Wr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var d=t;0<d;){var h=31-Ce(d),E=1<<h;i[h]=-1,d&=~E}n!==0&&va(e,n,t)}function El(){return(it&6)===0?($o(0),!1):!0}function Gd(){if(He!==null){if(lt===0)var e=He.return;else e=He,Pn=zr=null,dd(e),Cs=null,Ro=0,e=He;for(;e!==null;)ig(e.alternate,e),e=e.return;He=null}}function js(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,dE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Gd(),vt=e,He=n=_n(e.current,null),Ke=t,lt=0,qa=null,pr=!1,Ls=ga(e,t),Fd=!1,Ps=Za=Ud=Wr=fr=_t=0,Na=qo=null,Bd=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var d=31-Ce(i),h=1<<d;t|=e[d],i&=~h}return Un=t,Bi(),n}function Rg(e,t){Be=null,H.H=il,t===Eo||t===Zi?(t=Vf(),lt=3):t===zf?(t=Vf(),lt=4):lt=t===Gh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,qa=t,He===null&&(_t=1,pl(e,Va(t,e.current)))}function _g(){var e=H.H;return H.H=il,e===null?il:e}function Ig(){var e=H.A;return H.A=Y0,e}function Xd(){_t=4,pr||(Ke&4194048)!==Ke&&Ka.current!==null||(Ls=!0),(fr&134217727)===0&&(Wr&134217727)===0||vt===null||mr(vt,Ke,Za,!1)}function Wd(e,t,n){var i=it;it|=2;var d=_g(),h=Ig();(vt!==e||Ke!==t)&&(vl=null,js(e,t)),t=!1;var E=_t;e:do try{if(lt!==0&&He!==null){var A=He,q=qa;switch(lt){case 8:Gd(),E=6;break e;case 3:case 2:case 9:case 6:Ka.current===null&&(t=!0);var K=lt;if(lt=0,qa=null,qs(e,A,q,K),n&&Ls){E=0;break e}break;default:K=lt,lt=0,qa=null,qs(e,A,q,K)}}G0(),E=_t;break}catch(oe){Rg(e,oe)}while(!0);return t&&e.shellSuspendCounter++,Pn=zr=null,it=i,H.H=d,H.A=h,He===null&&(vt=null,Ke=0,Bi()),E}function G0(){for(;He!==null;)Lg(He)}function X0(e,t){var n=it;it|=2;var i=_g(),d=Ig();vt!==e||Ke!==t?(vl=null,bl=ge()+500,js(e,t)):Ls=ga(e,t);e:do try{if(lt!==0&&He!==null){t=He;var h=qa;t:switch(lt){case 1:lt=0,qa=null,qs(e,t,h,1);break;case 2:case 9:if(Yf(h)){lt=0,qa=null,Pg(t);break}t=function(){lt!==2&&lt!==9||vt!==e||(lt=7),yn(e)},h.then(t,t);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:Yf(h)?(lt=0,qa=null,Pg(t)):(lt=0,qa=null,qs(e,t,h,7));break;case 5:var E=null;switch(He.tag){case 26:E=He.memoizedState;case 5:case 27:var A=He;if(!E||hm(E)){lt=0,qa=null;var q=A.sibling;if(q!==null)He=q;else{var K=A.return;K!==null?(He=K,wl(K)):He=null}break t}}lt=0,qa=null,qs(e,t,h,5);break;case 6:lt=0,qa=null,qs(e,t,h,6);break;case 8:Gd(),_t=6;break e;default:throw Error(o(462))}}W0();break}catch(oe){Rg(e,oe)}while(!0);return Pn=zr=null,H.H=i,H.A=d,it=n,He!==null?0:(vt=null,Ke=0,Bi(),_t)}function W0(){for(;He!==null&&!F();)Lg(He)}function Lg(e){var t=sg(e.alternate,e,Un);e.memoizedProps=e.pendingProps,t===null?wl(e):He=t}function Pg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Jh(n,t,t.pendingProps,t.type,void 0,Ke);break;case 11:t=Jh(n,t,t.pendingProps,t.type.render,t.ref,Ke);break;case 5:dd(t);default:ig(n,t),t=He=kf(t,Un),t=sg(n,t,Un)}e.memoizedProps=e.pendingProps,t===null?wl(e):He=t}function qs(e,t,n,i){Pn=zr=null,dd(t),Cs=null,Ro=0;var d=t.return;try{if(M0(e,d,t,n,Ke)){_t=1,pl(e,Va(n,e.current)),He=null;return}}catch(h){if(d!==null)throw He=d,h;_t=1,pl(e,Va(n,e.current)),He=null;return}t.flags&32768?(nt||i===1?e=!0:Ls||(Ke&536870912)!==0?e=!1:(pr=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ka.current,i!==null&&i.tag===13&&(i.flags|=16384))),kg(t,e)):wl(t)}function wl(e){var t=e;do{if((t.flags&32768)!==0){kg(t,pr);return}e=t.return;var n=F0(t.alternate,t,Un);if(n!==null){He=n;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);_t===0&&(_t=5)}function kg(e,t){do{var n=U0(e.alternate,e);if(n!==null){n.flags&=32767,He=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){He=e;return}He=e=n}while(e!==null);_t=6,He=null}function Og(e,t,n,i,d,h,E,A,q){e.cancelPendingCommit=null;do xl();while(la!==0);if((it&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(h=t.lanes|t.childLanes,h|=$c,Qe(e,n,h,E,A,q),e===vt&&(He=vt=null,Ke=0),ks=t,gr=e,Os=n,Yd=h,Hd=d,Ag=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,J0(ye,function(){return Fg(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=H.T,H.T=null,d=J.p,J.p=2,E=it,it|=4;try{B0(e,t,n)}finally{it=E,J.p=d,H.T=i}}la=1,jg(),qg(),Mg()}}function jg(){if(la===1){la=0;var e=gr,t=ks,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=H.T,H.T=null;var i=J.p;J.p=2;var d=it;it|=4;try{bg(t,e);var h=iu,E=Tf(e.containerInfo),A=h.focusedElem,q=h.selectionRange;if(E!==A&&A&&A.ownerDocument&&Sf(A.ownerDocument.documentElement,A)){if(q!==null&&kc(A)){var K=q.start,oe=q.end;if(oe===void 0&&(oe=K),"selectionStart"in A)A.selectionStart=K,A.selectionEnd=Math.min(oe,A.value.length);else{var de=A.ownerDocument||document,Q=de&&de.defaultView||window;if(Q.getSelection){var ee=Q.getSelection(),Oe=A.textContent.length,_e=Math.min(q.start,Oe),ft=q.end===void 0?_e:Math.min(q.end,Oe);!ee.extend&&_e>ft&&(E=ft,ft=_e,_e=E);var V=xf(A,_e),B=xf(A,ft);if(V&&B&&(ee.rangeCount!==1||ee.anchorNode!==V.node||ee.anchorOffset!==V.offset||ee.focusNode!==B.node||ee.focusOffset!==B.offset)){var X=de.createRange();X.setStart(V.node,V.offset),ee.removeAllRanges(),_e>ft?(ee.addRange(X),ee.extend(B.node,B.offset)):(X.setEnd(B.node,B.offset),ee.addRange(X))}}}}for(de=[],ee=A;ee=ee.parentNode;)ee.nodeType===1&&de.push({element:ee,left:ee.scrollLeft,top:ee.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<de.length;A++){var ce=de[A];ce.element.scrollLeft=ce.left,ce.element.scrollTop=ce.top}}kl=!!ou,iu=ou=null}finally{it=d,J.p=i,H.T=n}}e.current=t,la=2}}function qg(){if(la===2){la=0;var e=gr,t=ks,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=H.T,H.T=null;var i=J.p;J.p=2;var d=it;it|=4;try{hg(e,t.alternate,t)}finally{it=d,J.p=i,H.T=n}}la=3}}function Mg(){if(la===4||la===3){la=0,he();var e=gr,t=ks,n=Os,i=Ag;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?la=5:(la=0,ks=gr=null,$g(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(hr=null),Ht(n),t=t.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Qt,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=H.T,d=J.p,J.p=2,H.T=null;try{for(var h=e.onRecoverableError,E=0;E<i.length;E++){var A=i[E];h(A.value,{componentStack:A.stack})}}finally{H.T=t,J.p=d}}(Os&3)!==0&&xl(),yn(e),d=e.pendingLanes,(n&4194090)!==0&&(d&42)!==0?e===Vd?Mo++:(Mo=0,Vd=e):Mo=0,$o(0)}}function $g(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,bo(t)))}function xl(e){return jg(),qg(),Mg(),Fg()}function Fg(){if(la!==5)return!1;var e=gr,t=Yd;Yd=0;var n=Ht(Os),i=H.T,d=J.p;try{J.p=32>n?32:n,H.T=null,n=Hd,Hd=null;var h=gr,E=Os;if(la=0,ks=gr=null,Os=0,(it&6)!==0)throw Error(o(331));var A=it;if(it|=4,Sg(h.current),Eg(h,h.current,E,n),it=A,$o(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Qt,h)}catch{}return!0}finally{J.p=d,H.T=i,$g(e,t)}}function Ug(e,t,n){t=Va(n,t),t=Td(e.stateNode,t,2),e=sr(e,t,2),e!==null&&(yt(e,2),yn(e))}function mt(e,t,n){if(e.tag===3)Ug(e,e,n);else for(;t!==null;){if(t.tag===3){Ug(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(hr===null||!hr.has(i))){e=Va(n,e),n=Hh(2),i=sr(t,n,2),i!==null&&(Vh(n,i,t,e),yt(i,2),yn(i));break}}t=t.return}}function Kd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new H0;var d=new Set;i.set(t,d)}else d=i.get(t),d===void 0&&(d=new Set,i.set(t,d));d.has(n)||(Fd=!0,d.add(n),e=K0.bind(null,e,t,n),t.then(e,e))}function K0(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,vt===e&&(Ke&n)===n&&(_t===4||_t===3&&(Ke&62914560)===Ke&&300>ge()-zd?(it&2)===0&&js(e,0):Ud|=n,Ps===Ke&&(Ps=0)),yn(e)}function Bg(e,t){t===0&&(t=Pe()),e=bs(e,t),e!==null&&(yt(e,t),yn(e))}function Z0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bg(e,n)}function Q0(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,d=e.memoizedState;d!==null&&(n=d.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Bg(e,n)}function J0(e,t){return Lt(e,t)}var Sl=null,Ms=null,Zd=!1,Tl=!1,Qd=!1,Kr=0;function yn(e){e!==Ms&&e.next===null&&(Ms===null?Sl=Ms=e:Ms=Ms.next=e),Tl=!0,Zd||(Zd=!0,tE())}function $o(e,t){if(!Qd&&Tl){Qd=!0;do for(var n=!1,i=Sl;i!==null;){if(e!==0){var d=i.pendingLanes;if(d===0)var h=0;else{var E=i.suspendedLanes,A=i.pingedLanes;h=(1<<31-Ce(42|e)+1)-1,h&=d&~(E&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(n=!0,Vg(i,h))}else h=Ke,h=Je(i,i===vt?h:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(h&3)===0||ga(i,h)||(n=!0,Vg(i,h));i=i.next}while(n);Qd=!1}}function eE(){zg()}function zg(){Tl=Zd=!1;var e=0;Kr!==0&&(cE()&&(e=Kr),Kr=0);for(var t=ge(),n=null,i=Sl;i!==null;){var d=i.next,h=Yg(i,t);h===0?(i.next=null,n===null?Sl=d:n.next=d,d===null&&(Ms=n)):(n=i,(e!==0||(h&3)!==0)&&(Tl=!0)),i=d}$o(e)}function Yg(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var E=31-Ce(h),A=1<<E,q=d[E];q===-1?((A&n)===0||(A&i)!==0)&&(d[E]=Yt(A,t)):q<=t&&(e.expiredLanes|=A),h&=~A}if(t=vt,n=Ke,n=Je(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(lt===2||lt===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&gt(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ga(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&gt(i),Ht(n)){case 2:case 8:n=Ne;break;case 32:n=ye;break;case 268435456:n=Ze;break;default:n=ye}return i=Hg.bind(null,e),n=Lt(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&gt(i),e.callbackPriority=2,e.callbackNode=null,2}function Hg(e,t){if(la!==0&&la!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(xl()&&e.callbackNode!==n)return null;var i=Ke;return i=Je(e,e===vt?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ng(e,i,t),Yg(e,ge()),e.callbackNode!=null&&e.callbackNode===n?Hg.bind(null,e):null)}function Vg(e,t){if(xl())return null;Ng(e,t,!0)}function tE(){uE(function(){(it&6)!==0?Lt(pe,eE):zg()})}function Jd(){return Kr===0&&(Kr=Dn()),Kr}function Gg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Oi(""+e)}function Xg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function aE(e,t,n,i,d){if(t==="submit"&&n&&n.stateNode===d){var h=Gg((d[Ft]||null).action),E=i.submitter;E&&(t=(t=E[Ft]||null)?Gg(t.formAction):E.getAttribute("formAction"),t!==null&&(h=t,E=null));var A=new $i("action","action",null,i,d);e.push({event:A,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Kr!==0){var q=E?Xg(d,E):new FormData(d);vd(n,{pending:!0,data:q,method:d.method,action:h},null,q)}}else typeof h=="function"&&(A.preventDefault(),q=E?Xg(d,E):new FormData(d),vd(n,{pending:!0,data:q,method:d.method,action:h},h,q))},currentTarget:d}]})}}for(var eu=0;eu<Mc.length;eu++){var tu=Mc[eu],nE=tu.toLowerCase(),rE=tu[0].toUpperCase()+tu.slice(1);rn(nE,"on"+rE)}rn(Nf,"onAnimationEnd"),rn(Cf,"onAnimationIteration"),rn(Rf,"onAnimationStart"),rn("dblclick","onDoubleClick"),rn("focusin","onFocus"),rn("focusout","onBlur"),rn(w0,"onTransitionRun"),rn(x0,"onTransitionStart"),rn(S0,"onTransitionCancel"),rn(_f,"onTransitionEnd"),je("onMouseEnter",["mouseout","mouseover"]),je("onMouseLeave",["mouseout","mouseover"]),je("onPointerEnter",["pointerout","pointerover"]),je("onPointerLeave",["pointerout","pointerover"]),Ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function Wg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],d=i.event;i=i.listeners;e:{var h=void 0;if(t)for(var E=i.length-1;0<=E;E--){var A=i[E],q=A.instance,K=A.currentTarget;if(A=A.listener,q!==h&&d.isPropagationStopped())break e;h=A,d.currentTarget=K;try{h(d)}catch(oe){ul(oe)}d.currentTarget=null,h=q}else for(E=0;E<i.length;E++){if(A=i[E],q=A.instance,K=A.currentTarget,A=A.listener,q!==h&&d.isPropagationStopped())break e;h=A,d.currentTarget=K;try{h(d)}catch(oe){ul(oe)}d.currentTarget=null,h=q}}}}function Ve(e,t){var n=t[Zn];n===void 0&&(n=t[Zn]=new Set);var i=e+"__bubble";n.has(i)||(Kg(t,e,2,!1),n.add(i))}function au(e,t,n){var i=0;t&&(i|=4),Kg(n,e,i,t)}var Al="_reactListening"+Math.random().toString(36).slice(2);function nu(e){if(!e[Al]){e[Al]=!0,ve.forEach(function(n){n!=="selectionchange"&&(sE.has(n)||au(n,!1,e),au(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Al]||(t[Al]=!0,au("selectionchange",!1,t))}}function Kg(e,t,n,i){switch(Em(t)){case 2:var d=LE;break;case 8:d=PE;break;default:d=yu}n=d.bind(null,t,n,e),d=void 0,!Ac||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),i?d!==void 0?e.addEventListener(t,n,{capture:!0,passive:d}):e.addEventListener(t,n,!0):d!==void 0?e.addEventListener(t,n,{passive:d}):e.addEventListener(t,n,!1)}function ru(e,t,n,i,d){var h=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var E=i.tag;if(E===3||E===4){var A=i.stateNode.containerInfo;if(A===d)break;if(E===4)for(E=i.return;E!==null;){var q=E.tag;if((q===3||q===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;A!==null;){if(E=an(A),E===null)return;if(q=E.tag,q===5||q===6||q===26||q===27){i=h=E;continue e}A=A.parentNode}}i=i.return}af(function(){var K=h,oe=Sc(n),de=[];e:{var Q=If.get(e);if(Q!==void 0){var ee=$i,Oe=e;switch(e){case"keypress":if(qi(n)===0)break e;case"keydown":case"keyup":ee=Jv;break;case"focusin":Oe="focus",ee=Rc;break;case"focusout":Oe="blur",ee=Rc;break;case"beforeblur":case"afterblur":ee=Rc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=sf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=a0;break;case Nf:case Cf:case Rf:ee=Yv;break;case _f:ee=r0;break;case"scroll":case"scrollend":ee=$v;break;case"wheel":ee=o0;break;case"copy":case"cut":case"paste":ee=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=lf;break;case"toggle":case"beforetoggle":ee=l0}var _e=(t&4)!==0,ft=!_e&&(e==="scroll"||e==="scrollend"),V=_e?Q!==null?Q+"Capture":null:Q;_e=[];for(var B=K,X;B!==null;){var ce=B;if(X=ce.stateNode,ce=ce.tag,ce!==5&&ce!==26&&ce!==27||X===null||V===null||(ce=ro(B,V),ce!=null&&_e.push(Uo(B,ce,X))),ft)break;B=B.return}0<_e.length&&(Q=new ee(Q,Oe,null,n,oe),de.push({event:Q,listeners:_e}))}}if((t&7)===0){e:{if(Q=e==="mouseover"||e==="pointerover",ee=e==="mouseout"||e==="pointerout",Q&&n!==xc&&(Oe=n.relatedTarget||n.fromElement)&&(an(Oe)||Oe[pn]))break e;if((ee||Q)&&(Q=oe.window===oe?oe:(Q=oe.ownerDocument)?Q.defaultView||Q.parentWindow:window,ee?(Oe=n.relatedTarget||n.toElement,ee=K,Oe=Oe?an(Oe):null,Oe!==null&&(ft=u(Oe),_e=Oe.tag,Oe!==ft||_e!==5&&_e!==27&&_e!==6)&&(Oe=null)):(ee=null,Oe=K),ee!==Oe)){if(_e=sf,ce="onMouseLeave",V="onMouseEnter",B="mouse",(e==="pointerout"||e==="pointerover")&&(_e=lf,ce="onPointerLeave",V="onPointerEnter",B="pointer"),ft=ee==null?Q:N(ee),X=Oe==null?Q:N(Oe),Q=new _e(ce,B+"leave",ee,n,oe),Q.target=ft,Q.relatedTarget=X,ce=null,an(oe)===K&&(_e=new _e(V,B+"enter",Oe,n,oe),_e.target=X,_e.relatedTarget=ft,ce=_e),ft=ce,ee&&Oe)t:{for(_e=ee,V=Oe,B=0,X=_e;X;X=$s(X))B++;for(X=0,ce=V;ce;ce=$s(ce))X++;for(;0<B-X;)_e=$s(_e),B--;for(;0<X-B;)V=$s(V),X--;for(;B--;){if(_e===V||V!==null&&_e===V.alternate)break t;_e=$s(_e),V=$s(V)}_e=null}else _e=null;ee!==null&&Zg(de,Q,ee,_e,!1),Oe!==null&&ft!==null&&Zg(de,ft,Oe,_e,!0)}}e:{if(Q=K?N(K):window,ee=Q.nodeName&&Q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&Q.type==="file")var Se=mf;else if(hf(Q))if(yf)Se=b0;else{Se=m0;var ze=g0}else ee=Q.nodeName,!ee||ee.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?K&&wc(K.elementType)&&(Se=mf):Se=y0;if(Se&&(Se=Se(e,K))){gf(de,Se,n,oe);break e}ze&&ze(e,Q,K),e==="focusout"&&K&&Q.type==="number"&&K.memoizedProps.value!=null&&er(Q,"number",Q.value)}switch(ze=K?N(K):window,e){case"focusin":(hf(ze)||ze.contentEditable==="true")&&(gs=ze,Oc=K,fo=null);break;case"focusout":fo=Oc=gs=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Af(de,n,oe);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":Af(de,n,oe)}var De;if(Ic)e:{switch(e){case"compositionstart":var Ie="onCompositionStart";break e;case"compositionend":Ie="onCompositionEnd";break e;case"compositionupdate":Ie="onCompositionUpdate";break e}Ie=void 0}else hs?pf(e,n)&&(Ie="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ie="onCompositionStart");Ie&&(cf&&n.locale!=="ko"&&(hs||Ie!=="onCompositionStart"?Ie==="onCompositionEnd"&&hs&&(De=nf()):(tr=oe,Dc="value"in tr?tr.value:tr.textContent,hs=!0)),ze=Dl(K,Ie),0<ze.length&&(Ie=new of(Ie,e,null,n,oe),de.push({event:Ie,listeners:ze}),De?Ie.data=De:(De=ff(n),De!==null&&(Ie.data=De)))),(De=d0?u0(e,n):p0(e,n))&&(Ie=Dl(K,"onBeforeInput"),0<Ie.length&&(ze=new of("onBeforeInput","beforeinput",null,n,oe),de.push({event:ze,listeners:Ie}),ze.data=De)),aE(de,e,K,n,oe)}Wg(de,t)})}function Uo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dl(e,t){for(var n=t+"Capture",i=[];e!==null;){var d=e,h=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||h===null||(d=ro(e,n),d!=null&&i.unshift(Uo(e,d,h)),d=ro(e,t),d!=null&&i.push(Uo(e,d,h))),e.tag===3)return i;e=e.return}return[]}function $s(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Zg(e,t,n,i,d){for(var h=t._reactName,E=[];n!==null&&n!==i;){var A=n,q=A.alternate,K=A.stateNode;if(A=A.tag,q!==null&&q===i)break;A!==5&&A!==26&&A!==27||K===null||(q=K,d?(K=ro(n,h),K!=null&&E.unshift(Uo(n,K,q))):d||(K=ro(n,h),K!=null&&E.push(Uo(n,K,q)))),n=n.return}E.length!==0&&e.push({event:t,listeners:E})}var oE=/\r\n?/g,iE=/\u0000|\uFFFD/g;function Qg(e){return(typeof e=="string"?e:""+e).replace(oE,`
`).replace(iE,"")}function Jg(e,t){return t=Qg(t),Qg(e)===t}function Nl(){}function pt(e,t,n,i,d,h){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||us(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&us(e,""+i);break;case"className":Qn(e,"class",i);break;case"tabIndex":Qn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Qn(e,n,i);break;case"style":ef(e,i,h);break;case"data":if(t!=="object"){Qn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Oi(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(n==="formAction"?(t!=="input"&&pt(e,t,"name",d.name,d,null),pt(e,t,"formEncType",d.formEncType,d,null),pt(e,t,"formMethod",d.formMethod,d,null),pt(e,t,"formTarget",d.formTarget,d,null)):(pt(e,t,"encType",d.encType,d,null),pt(e,t,"method",d.method,d,null),pt(e,t,"target",d.target,d,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Oi(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Nl);break;case"onScroll":i!=null&&Ve("scroll",e);break;case"onScrollEnd":i!=null&&Ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(d.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Oi(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ve("beforetoggle",e),Ve("toggle",e),Ya(e,"popover",i);break;case"xlinkActuate":Ia(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ia(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ia(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ia(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ia(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ia(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ia(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ya(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=qv.get(n)||n,Ya(e,n,i))}}function su(e,t,n,i,d,h){switch(n){case"style":ef(e,i,h);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(d.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?us(e,i):(typeof i=="number"||typeof i=="bigint")&&us(e,""+i);break;case"onScroll":i!=null&&Ve("scroll",e);break;case"onScrollEnd":i!=null&&Ve("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Nl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Te.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(d=n.endsWith("Capture"),t=n.slice(2,d?n.length-7:void 0),h=e[Ft]||null,h=h!=null?h[n]:null,typeof h=="function"&&e.removeEventListener(t,h,d),typeof i=="function")){typeof h!="function"&&h!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,d);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ya(e,n,i)}}}function ca(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",e),Ve("load",e);var i=!1,d=!1,h;for(h in n)if(n.hasOwnProperty(h)){var E=n[h];if(E!=null)switch(h){case"src":i=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:pt(e,t,h,E,n,null)}}d&&pt(e,t,"srcSet",n.srcSet,n,null),i&&pt(e,t,"src",n.src,n,null);return;case"input":Ve("invalid",e);var A=h=E=d=null,q=null,K=null;for(i in n)if(n.hasOwnProperty(i)){var oe=n[i];if(oe!=null)switch(i){case"name":d=oe;break;case"type":E=oe;break;case"checked":q=oe;break;case"defaultChecked":K=oe;break;case"value":h=oe;break;case"defaultValue":A=oe;break;case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(o(137,t));break;default:pt(e,t,i,oe,n,null)}}Ha(e,h,A,q,K,E,d,!1),bt(e);return;case"select":Ve("invalid",e),i=E=h=null;for(d in n)if(n.hasOwnProperty(d)&&(A=n[d],A!=null))switch(d){case"value":h=A;break;case"defaultValue":E=A;break;case"multiple":i=A;default:pt(e,t,d,A,n,null)}t=h,n=E,e.multiple=!!i,t!=null?ds(e,!!i,t,!1):n!=null&&ds(e,!!i,n,!0);return;case"textarea":Ve("invalid",e),h=d=i=null;for(E in n)if(n.hasOwnProperty(E)&&(A=n[E],A!=null))switch(E){case"value":i=A;break;case"defaultValue":d=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(91));break;default:pt(e,t,E,A,n,null)}Qp(e,i,d,h),bt(e);return;case"option":for(q in n)n.hasOwnProperty(q)&&(i=n[q],i!=null)&&(q==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":pt(e,t,q,i,n,null));return;case"dialog":Ve("beforetoggle",e),Ve("toggle",e),Ve("cancel",e),Ve("close",e);break;case"iframe":case"object":Ve("load",e);break;case"video":case"audio":for(i=0;i<Fo.length;i++)Ve(Fo[i],e);break;case"image":Ve("error",e),Ve("load",e);break;case"details":Ve("toggle",e);break;case"embed":case"source":case"link":Ve("error",e),Ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(K in n)if(n.hasOwnProperty(K)&&(i=n[K],i!=null))switch(K){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:pt(e,t,K,i,n,null)}return;default:if(wc(t)){for(oe in n)n.hasOwnProperty(oe)&&(i=n[oe],i!==void 0&&su(e,t,oe,i,n,void 0));return}}for(A in n)n.hasOwnProperty(A)&&(i=n[A],i!=null&&pt(e,t,A,i,n,null))}function lE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,h=null,E=null,A=null,q=null,K=null,oe=null;for(ee in n){var de=n[ee];if(n.hasOwnProperty(ee)&&de!=null)switch(ee){case"checked":break;case"value":break;case"defaultValue":q=de;default:i.hasOwnProperty(ee)||pt(e,t,ee,null,i,de)}}for(var Q in i){var ee=i[Q];if(de=n[Q],i.hasOwnProperty(Q)&&(ee!=null||de!=null))switch(Q){case"type":h=ee;break;case"name":d=ee;break;case"checked":K=ee;break;case"defaultChecked":oe=ee;break;case"value":E=ee;break;case"defaultValue":A=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(o(137,t));break;default:ee!==de&&pt(e,t,Q,ee,i,de)}}La(e,E,A,q,K,oe,h,d);return;case"select":ee=E=A=Q=null;for(h in n)if(q=n[h],n.hasOwnProperty(h)&&q!=null)switch(h){case"value":break;case"multiple":ee=q;default:i.hasOwnProperty(h)||pt(e,t,h,null,i,q)}for(d in i)if(h=i[d],q=n[d],i.hasOwnProperty(d)&&(h!=null||q!=null))switch(d){case"value":Q=h;break;case"defaultValue":A=h;break;case"multiple":E=h;default:h!==q&&pt(e,t,d,h,i,q)}t=A,n=E,i=ee,Q!=null?ds(e,!!n,Q,!1):!!i!=!!n&&(t!=null?ds(e,!!n,t,!0):ds(e,!!n,n?[]:"",!1));return;case"textarea":ee=Q=null;for(A in n)if(d=n[A],n.hasOwnProperty(A)&&d!=null&&!i.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:pt(e,t,A,null,i,d)}for(E in i)if(d=i[E],h=n[E],i.hasOwnProperty(E)&&(d!=null||h!=null))switch(E){case"value":Q=d;break;case"defaultValue":ee=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:d!==h&&pt(e,t,E,d,i,h)}Zp(e,Q,ee);return;case"option":for(var Oe in n)Q=n[Oe],n.hasOwnProperty(Oe)&&Q!=null&&!i.hasOwnProperty(Oe)&&(Oe==="selected"?e.selected=!1:pt(e,t,Oe,null,i,Q));for(q in i)Q=i[q],ee=n[q],i.hasOwnProperty(q)&&Q!==ee&&(Q!=null||ee!=null)&&(q==="selected"?e.selected=Q&&typeof Q!="function"&&typeof Q!="symbol":pt(e,t,q,Q,i,ee));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in n)Q=n[_e],n.hasOwnProperty(_e)&&Q!=null&&!i.hasOwnProperty(_e)&&pt(e,t,_e,null,i,Q);for(K in i)if(Q=i[K],ee=n[K],i.hasOwnProperty(K)&&Q!==ee&&(Q!=null||ee!=null))switch(K){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(o(137,t));break;default:pt(e,t,K,Q,i,ee)}return;default:if(wc(t)){for(var ft in n)Q=n[ft],n.hasOwnProperty(ft)&&Q!==void 0&&!i.hasOwnProperty(ft)&&su(e,t,ft,void 0,i,Q);for(oe in i)Q=i[oe],ee=n[oe],!i.hasOwnProperty(oe)||Q===ee||Q===void 0&&ee===void 0||su(e,t,oe,Q,i,ee);return}}for(var V in n)Q=n[V],n.hasOwnProperty(V)&&Q!=null&&!i.hasOwnProperty(V)&&pt(e,t,V,null,i,Q);for(de in i)Q=i[de],ee=n[de],!i.hasOwnProperty(de)||Q===ee||Q==null&&ee==null||pt(e,t,de,Q,i,ee)}var ou=null,iu=null;function Cl(e){return e.nodeType===9?e:e.ownerDocument}function em(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function tm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function lu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cu=null;function cE(){var e=window.event;return e&&e.type==="popstate"?e===cu?!1:(cu=e,!0):(cu=null,!1)}var am=typeof setTimeout=="function"?setTimeout:void 0,dE=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(e){return nm.resolve(null).then(e).catch(pE)}:am;function pE(e){setTimeout(function(){throw e})}function yr(e){return e==="head"}function rm(e,t){var n=t,i=0,d=0;do{var h=n.nextSibling;if(e.removeChild(n),h&&h.nodeType===8)if(n=h.data,n==="/$"){if(0<i&&8>i){n=i;var E=e.ownerDocument;if(n&1&&Bo(E.documentElement),n&2&&Bo(E.body),n&4)for(n=E.head,Bo(n),E=n.firstChild;E;){var A=E.nextSibling,q=E.nodeName;E[tn]||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&E.rel.toLowerCase()==="stylesheet"||n.removeChild(E),E=A}}if(d===0){e.removeChild(h),Ko(t);return}d--}else n==="$"||n==="$?"||n==="$!"?d++:i=n.charCodeAt(0)-48;else i=0;n=h}while(n);Ko(t)}function du(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":du(n),oa(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function fE(e,t,n,i){for(;e.nodeType===1;){var d=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[tn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var h=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=on(e.nextSibling),e===null)break}return null}function hE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=on(e.nextSibling),e===null))return null;return e}function uu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function gE(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function on(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var pu=null;function sm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function om(e,t,n){switch(t=Cl(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Bo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);oa(e)}var Qa=new Map,im=new Set;function Rl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Bn=J.d;J.d={f:mE,r:yE,D:bE,C:vE,L:EE,m:wE,X:SE,S:xE,M:TE};function mE(){var e=Bn.f(),t=El();return e||t}function yE(e){var t=U(e);t!==null&&t.tag===5&&t.type==="form"?Nh(t):Bn.r(e)}var Fs=typeof document>"u"?null:document;function lm(e,t,n){var i=Fs;if(i&&typeof t=="string"&&t){var d=wt(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof n=="string"&&(d+='[crossorigin="'+n+'"]'),im.has(d)||(im.add(d),e={rel:e,crossOrigin:n,href:t},i.querySelector(d)===null&&(t=i.createElement("link"),ca(t,"link",e),Z(t),i.head.appendChild(t)))}}function bE(e){Bn.D(e),lm("dns-prefetch",e,null)}function vE(e,t){Bn.C(e,t),lm("preconnect",e,t)}function EE(e,t,n){Bn.L(e,t,n);var i=Fs;if(i&&e&&t){var d='link[rel="preload"][as="'+wt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(d+='[imagesrcset="'+wt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(d+='[imagesizes="'+wt(n.imageSizes)+'"]')):d+='[href="'+wt(e)+'"]';var h=d;switch(t){case"style":h=Us(e);break;case"script":h=Bs(e)}Qa.has(h)||(e=p({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qa.set(h,e),i.querySelector(d)!==null||t==="style"&&i.querySelector(zo(h))||t==="script"&&i.querySelector(Yo(h))||(t=i.createElement("link"),ca(t,"link",e),Z(t),i.head.appendChild(t)))}}function wE(e,t){Bn.m(e,t);var n=Fs;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+wt(i)+'"][href="'+wt(e)+'"]',h=d;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Bs(e)}if(!Qa.has(h)&&(e=p({rel:"modulepreload",href:e},t),Qa.set(h,e),n.querySelector(d)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yo(h)))return}i=n.createElement("link"),ca(i,"link",e),Z(i),n.head.appendChild(i)}}}function xE(e,t,n){Bn.S(e,t,n);var i=Fs;if(i&&e){var d=$(i).hoistableStyles,h=Us(e);t=t||"default";var E=d.get(h);if(!E){var A={loading:0,preload:null};if(E=i.querySelector(zo(h)))A.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qa.get(h))&&fu(e,n);var q=E=i.createElement("link");Z(q),ca(q,"link",e),q._p=new Promise(function(K,oe){q.onload=K,q.onerror=oe}),q.addEventListener("load",function(){A.loading|=1}),q.addEventListener("error",function(){A.loading|=2}),A.loading|=4,_l(E,t,i)}E={type:"stylesheet",instance:E,count:1,state:A},d.set(h,E)}}}function SE(e,t){Bn.X(e,t);var n=Fs;if(n&&e){var i=$(n).hoistableScripts,d=Bs(e),h=i.get(d);h||(h=n.querySelector(Yo(d)),h||(e=p({src:e,async:!0},t),(t=Qa.get(d))&&hu(e,t),h=n.createElement("script"),Z(h),ca(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(d,h))}}function TE(e,t){Bn.M(e,t);var n=Fs;if(n&&e){var i=$(n).hoistableScripts,d=Bs(e),h=i.get(d);h||(h=n.querySelector(Yo(d)),h||(e=p({src:e,async:!0,type:"module"},t),(t=Qa.get(d))&&hu(e,t),h=n.createElement("script"),Z(h),ca(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(d,h))}}function cm(e,t,n,i){var d=(d=be.current)?Rl(d):null;if(!d)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Us(n.href),n=$(d).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Us(n.href);var h=$(d).hoistableStyles,E=h.get(e);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,E),(h=d.querySelector(zo(e)))&&!h._p&&(E.instance=h,E.state.loading=5),Qa.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qa.set(e,n),h||AE(d,e,n,E.state))),t&&i===null)throw Error(o(528,""));return E}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Bs(n),n=$(d).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Us(e){return'href="'+wt(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function dm(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function AE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ca(t,"link",n),Z(t),e.head.appendChild(t))}function Bs(e){return'[src="'+wt(e)+'"]'}function Yo(e){return"script[async]"+e}function um(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+wt(n.href)+'"]');if(i)return t.instance=i,Z(i),i;var d=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Z(i),ca(i,"style",d),_l(i,n.precedence,e),t.instance=i;case"stylesheet":d=Us(n.href);var h=e.querySelector(zo(d));if(h)return t.state.loading|=4,t.instance=h,Z(h),h;i=dm(n),(d=Qa.get(d))&&fu(i,d),h=(e.ownerDocument||e).createElement("link"),Z(h);var E=h;return E._p=new Promise(function(A,q){E.onload=A,E.onerror=q}),ca(h,"link",i),t.state.loading|=4,_l(h,n.precedence,e),t.instance=h;case"script":return h=Bs(n.src),(d=e.querySelector(Yo(h)))?(t.instance=d,Z(d),d):(i=n,(d=Qa.get(h))&&(i=p({},n),hu(i,d)),e=e.ownerDocument||e,d=e.createElement("script"),Z(d),ca(d,"link",i),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,_l(i,n.precedence,e));return t.instance}function _l(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=i.length?i[i.length-1]:null,h=d,E=0;E<i.length;E++){var A=i[E];if(A.dataset.precedence===t)h=A;else if(h!==d)break}h?h.parentNode.insertBefore(e,h.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function fu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function hu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Il=null;function pm(e,t,n){if(Il===null){var i=new Map,d=Il=new Map;d.set(n,i)}else d=Il,i=d.get(n),i||(i=new Map,d.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),d=0;d<n.length;d++){var h=n[d];if(!(h[tn]||h[Dt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(t)||"";E=e+E;var A=i.get(E);A?A.push(h):i.set(E,[h])}}return i}function fm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function DE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function hm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ho=null;function NE(){}function CE(e,t,n){if(Ho===null)throw Error(o(475));var i=Ho;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var d=Us(n.href),h=e.querySelector(zo(d));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Ll.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=h,Z(h);return}h=e.ownerDocument||e,n=dm(n),(d=Qa.get(d))&&fu(n,d),h=h.createElement("link"),Z(h);var E=h;E._p=new Promise(function(A,q){E.onload=A,E.onerror=q}),ca(h,"link",n),t.instance=h}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Ll.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function RE(){if(Ho===null)throw Error(o(475));var e=Ho;return e.stylesheets&&e.count===0&&gu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&gu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Ll(){if(this.count--,this.count===0){if(this.stylesheets)gu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Pl=null;function gu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Pl=new Map,t.forEach(_E,e),Pl=null,Ll.call(e))}function _E(e,t){if(!(t.state.loading&4)){var n=Pl.get(e);if(n)var i=n.get(null);else{n=new Map,Pl.set(e,n);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<d.length;h++){var E=d[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(n.set(E.dataset.precedence,E),i=E)}i&&n.set(null,i)}d=t.instance,E=d.getAttribute("data-precedence"),h=n.get(E)||i,h===i&&n.set(null,d),n.set(E,d),this.count++,i=Ll.bind(this),d.addEventListener("load",i),d.addEventListener("error",i),h?h.parentNode.insertBefore(d,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var Vo={$$typeof:I,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function IE(e,t,n,i,d,h,E,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$t(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$t(0),this.hiddenUpdates=$t(null),this.identifierPrefix=i,this.onUncaughtError=d,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function gm(e,t,n,i,d,h,E,A,q,K,oe,de){return e=new IE(e,t,n,E,A,q,K,de),t=1,h===!0&&(t|=24),h=ka(3,null,null,t),e.current=h,h.stateNode=e,t=Kc(),t.refCount++,e.pooledCache=t,t.refCount++,h.memoizedState={element:i,isDehydrated:n,cache:t},ed(h),e}function mm(e){return e?(e=vs,e):vs}function ym(e,t,n,i,d,h){d=mm(d),i.context===null?i.context=d:i.pendingContext=d,i=rr(t),i.payload={element:n},h=h===void 0?null:h,h!==null&&(i.callback=h),n=sr(e,i,t),n!==null&&($a(n,e,t),xo(n,e,t))}function bm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function mu(e,t){bm(e,t),(e=e.alternate)&&bm(e,t)}function vm(e){if(e.tag===13){var t=bs(e,67108864);t!==null&&$a(t,e,67108864),mu(e,67108864)}}var kl=!0;function LE(e,t,n,i){var d=H.T;H.T=null;var h=J.p;try{J.p=2,yu(e,t,n,i)}finally{J.p=h,H.T=d}}function PE(e,t,n,i){var d=H.T;H.T=null;var h=J.p;try{J.p=8,yu(e,t,n,i)}finally{J.p=h,H.T=d}}function yu(e,t,n,i){if(kl){var d=bu(i);if(d===null)ru(e,t,i,Ol,n),wm(e,i);else if(OE(d,e,t,n,i))i.stopPropagation();else if(wm(e,i),t&4&&-1<kE.indexOf(e)){for(;d!==null;){var h=U(d);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=Pt(h.pendingLanes);if(E!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var q=1<<31-Ce(E);A.entanglements[1]|=q,E&=~q}yn(h),(it&6)===0&&(bl=ge()+500,$o(0))}}break;case 13:A=bs(h,2),A!==null&&$a(A,h,2),El(),mu(h,2)}if(h=bu(i),h===null&&ru(e,t,i,Ol,n),h===d)break;d=h}d!==null&&i.stopPropagation()}else ru(e,t,i,null,n)}}function bu(e){return e=Sc(e),vu(e)}var Ol=null;function vu(e){if(Ol=null,e=an(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ol=e,null}function Em(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case pe:return 2;case Ne:return 8;case ye:case qe:return 32;case Ze:return 268435456;default:return 32}default:return 32}}var Eu=!1,br=null,vr=null,Er=null,Go=new Map,Xo=new Map,wr=[],kE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wm(e,t){switch(e){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Go.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(t.pointerId)}}function Wo(e,t,n,i,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:h,targetContainers:[d]},t!==null&&(t=U(t),t!==null&&vm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function OE(e,t,n,i,d){switch(t){case"focusin":return br=Wo(br,e,t,n,i,d),!0;case"dragenter":return vr=Wo(vr,e,t,n,i,d),!0;case"mouseover":return Er=Wo(Er,e,t,n,i,d),!0;case"pointerover":var h=d.pointerId;return Go.set(h,Wo(Go.get(h)||null,e,t,n,i,d)),!0;case"gotpointercapture":return h=d.pointerId,Xo.set(h,Wo(Xo.get(h)||null,e,t,n,i,d)),!0}return!1}function xm(e){var t=an(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,Vt(e.priority,function(){if(n.tag===13){var i=Ma();i=Nn(i);var d=bs(n,i);d!==null&&$a(d,n,i),mu(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=bu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);xc=i,n.target.dispatchEvent(i),xc=null}else return t=U(n),t!==null&&vm(t),e.blockedOn=n,!1;t.shift()}return!0}function Sm(e,t,n){jl(e)&&n.delete(t)}function jE(){Eu=!1,br!==null&&jl(br)&&(br=null),vr!==null&&jl(vr)&&(vr=null),Er!==null&&jl(Er)&&(Er=null),Go.forEach(Sm),Xo.forEach(Sm)}function ql(e,t){e.blockedOn===t&&(e.blockedOn=null,Eu||(Eu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,jE)))}var Ml=null;function Tm(e){Ml!==e&&(Ml=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ml===e&&(Ml=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],d=e[t+2];if(typeof i!="function"){if(vu(i||n)===null)continue;break}var h=U(n);h!==null&&(e.splice(t,3),t-=3,vd(h,{pending:!0,data:d,method:n.method,action:i},i,d))}}))}function Ko(e){function t(q){return ql(q,e)}br!==null&&ql(br,e),vr!==null&&ql(vr,e),Er!==null&&ql(Er,e),Go.forEach(t),Xo.forEach(t);for(var n=0;n<wr.length;n++){var i=wr[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<wr.length&&(n=wr[0],n.blockedOn===null);)xm(n),n.blockedOn===null&&wr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var d=n[i],h=n[i+1],E=d[Ft]||null;if(typeof h=="function")E||Tm(n);else if(E){var A=null;if(h&&h.hasAttribute("formAction")){if(d=h,E=h[Ft]||null)A=E.formAction;else if(vu(d)!==null)continue}else A=E.action;typeof A=="function"?n[i+1]=A:(n.splice(i,3),i-=3),Tm(n)}}}function wu(e){this._internalRoot=e}$l.prototype.render=wu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=Ma();ym(n,i,e,t,null,null)},$l.prototype.unmount=wu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ym(e.current,2,null,e,null,null),El(),t[pn]=null}};function $l(e){this._internalRoot=e}$l.prototype.unstable_scheduleHydration=function(e){if(e){var t=za();e={blockedOn:null,target:e,priority:t};for(var n=0;n<wr.length&&t!==0&&t<wr[n].priority;n++);wr.splice(n,0,e),n===0&&xm(e)}};var Am=r.version;if(Am!=="19.1.4")throw Error(o(527,Am,"19.1.4"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var qE={bundleType:0,version:"19.1.4",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.1.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{Qt=Fl.inject(qE),we=Fl}catch{}}return Qo.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,i="",d=Uh,h=Bh,E=zh,A=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(E=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(A=t.unstable_transitionCallbacks)),t=gm(e,1,!1,null,null,n,i,d,h,E,A,null),e[pn]=t.current,nu(e),new wu(t)},Qo.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var i=!1,d="",h=Uh,E=Bh,A=zh,q=null,K=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(E=n.onCaughtError),n.onRecoverableError!==void 0&&(A=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(q=n.unstable_transitionCallbacks),n.formState!==void 0&&(K=n.formState)),t=gm(e,1,!0,t,n??null,i,d,h,E,A,q,K),t.context=mm(null),n=t.current,i=Ma(),i=Nn(i),d=rr(i),d.callback=null,sr(n,d,i),n=i,t.current.lanes=n,yt(t,n),yn(t),e[pn]=t.current,nu(e),new $l(t)},Qo.version="19.1.4",Qo}var Om;function XE(){if(Om)return Su.exports;Om=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Su.exports=GE(),Su.exports}var kp=XE();const WE=Si(kp),KE=lc({__proto__:null,default:WE},[kp]);var M=cc();const se=Si(M),lb=lc({__proto__:null,default:se},[M]);const ZE=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),QE=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase()),jm=a=>{const r=QE(a);return r.charAt(0).toUpperCase()+r.slice(1)},cb=(...a)=>a.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim(),JE=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var ew={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const tw=M.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,iconNode:m,...f},g)=>M.createElement("svg",{ref:g,...ew,width:r,height:r,stroke:a,strokeWidth:o?Number(s)*24/Number(r):s,className:cb("lucide",l),...!u&&!JE(f)&&{"aria-hidden":"true"},...f},[...m.map(([y,p])=>M.createElement(y,p)),...Array.isArray(u)?u:[u]]));const Ye=(a,r)=>{const s=M.forwardRef(({className:o,...l},u)=>M.createElement(tw,{ref:u,iconNode:r,className:cb(`lucide-${ZE(jm(a))}`,`lucide-${a}`,o),...l}));return s.displayName=jm(a),s};const aw=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],Op=Ye("archive",aw);const nw=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],rw=Ye("arrow-down",nw);const sw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],db=Ye("arrow-left",sw);const ow=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],iw=Ye("arrow-right",ow);const lw=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],cw=Ye("arrow-up",lw);const dw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Xs=Ye("check",dw);const uw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Cr=Ye("chevron-down",uw);const pw=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],ub=Ye("chevron-left",pw);const fw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],jp=Ye("chevron-right",fw);const hw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],qm=Ye("circle-check",hw);const gw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],mw=Ye("clipboard-check",gw);const yw=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],qp=Ye("database",yw);const bw=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Rr=Ye("download",bw);const vw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ew=Ye("eye",vw);const ww=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],xw=Ye("file-check-2",ww);const Sw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],Tw=Ye("file-code-2",Sw);const Aw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],Mm=Ye("file-plus-2",Aw);const Dw=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],Nw=Ye("file-search",Dw);const Cw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Xn=Ye("file-text",Cw);const Rw=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Zu=Ye("folder",Rw);const _w=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Iw=Ye("funnel",_w);const Lw=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Pw=Ye("git-branch",Lw);const kw=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Wn=Ye("hard-drive",kw);const Ow=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],li=Ye("layers",Ow);const jw=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Ca=Ye("loader-circle",jw);const qw=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Mw=Ye("monitor",qw);const $w=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],mi=Ye("plus",$w);const Fw=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Uw=Ye("refresh-cw",Fw);const Bw=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],$m=Ye("save",Bw);const zw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],yi=Ye("search",zw);const Yw=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Hw=Ye("settings-2",Yw);const Vw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qu=Ye("shield-check",Vw);const Gw=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Ju=Ye("sliders-horizontal",Gw);const Xw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ks=Ye("trash-2",Xw);const Ww=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_r=Ye("triangle-alert",Ww);const Kw=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],ts=Ye("upload",Kw);const Zw=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Qw=Ye("wrench",Zw);const Jw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],ep=Ye("x",Jw);function ex(a,r){if(a instanceof RegExp)return{keys:!1,pattern:a};var s,o,l,u,m=[],f="",g=a.split("/");for(g[0]||g.shift();l=g.shift();)s=l[0],s==="*"?(m.push(s),f+=l[1]==="?"?"(?:/(.*))?":"/(.*)"):s===":"?(o=l.indexOf("?",1),u=l.indexOf(".",1),m.push(l.substring(1,~o?o:~u?u:l.length)),f+=~o&&!~u?"(?:/([^/]+?))?":"/([^/]+?)",~u&&(f+=(~o?"?":"")+"\\"+l.substring(u))):f+="/"+l;return{keys:m,pattern:new RegExp("^"+f+(r?"(?=$|/)":"/?$"),"i")}}var Cu={exports:{}},Ru={};var Fm;function tx(){if(Fm)return Ru;Fm=1;var a=cc();function r(b,v){return b===v&&(b!==0||1/b===1/v)||b!==b&&v!==v}var s=typeof Object.is=="function"?Object.is:r,o=a.useState,l=a.useEffect,u=a.useLayoutEffect,m=a.useDebugValue;function f(b,v){var w=v(),_=o({inst:{value:w,getSnapshot:v}}),D=_[0].inst,S=_[1];return u(function(){D.value=w,D.getSnapshot=v,g(D)&&S({inst:D})},[b,w,v]),l(function(){return g(D)&&S({inst:D}),b(function(){g(D)&&S({inst:D})})},[b]),m(w),w}function g(b){var v=b.getSnapshot;b=b.value;try{var w=v();return!s(b,w)}catch{return!0}}function y(b,v){return v()}var p=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?y:f;return Ru.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:p,Ru}var Um;function ax(){return Um||(Um=1,Cu.exports=tx()),Cu.exports}var nx=ax();const rx=lb.useInsertionEffect,sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pb=sx?M.useLayoutEffect:M.useEffect,ox=rx||pb,Mp=a=>{const r=M.useRef([a,(...s)=>r[0](...s)]).current;return ox(()=>{r[0]=a}),r[1]},Bm=["popstate","pushState","replaceState","hashchange"];let ci=[];const zm=()=>ci.forEach(a=>a()),ix=a=>(ci.push(a)===1&&Bm.forEach(r=>addEventListener(r,zm)),()=>{ci=ci.filter(r=>r!==a),ci.length||Bm.forEach(r=>removeEventListener(r,zm))}),fb=(a,r)=>nx.useSyncExternalStore(ix,a,r),Ym=()=>location.search,lx=({ssrSearch:a}={})=>fb(Ym,a!=null?()=>a:Ym),Hm=()=>location.pathname,cx=({ssrPath:a}={})=>fb(Hm,a!=null?()=>a:Hm),dx=(a,{replace:r=!1,state:s=null}={})=>history[r?"replaceState":"pushState"](s,"",a),ux=a=>[cx(a),dx],Vm=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Vm]>"u"){for(const a of["pushState","replaceState"]){const r=history[a];history[a]=function(){const s=r.apply(this,arguments),o=new Event(a);return o.arguments=arguments,dispatchEvent(o),s}}Object.defineProperty(window,Vm,{value:!0})}const hb=(a="")=>a==="/"?"":a,px=(a,r)=>a[0]==="~"?a.slice(1):hb(r)+a,fx=(a,r)=>(a=Gm(hb(a)),r=Gm(r),!a||(r.toLowerCase()+"/").startsWith(a.toLowerCase()+"/")?r.slice(a.length)||"/":"~"+r),Gm=a=>{try{return a.includes("%")?decodeURI(a):a}catch{return a}},gb={hook:ux,searchHook:lx,parser:ex,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:a=>a,aroundNav:(a,r,s)=>a(r,s)},mb=M.createContext(gb),dc=()=>M.useContext(mb),hx={};M.createContext(hx);const $p=a=>{const[r,s]=a.hook(a);return[fx(a.base,r),Mp((o,l)=>a.aroundNav(s,px(o,a.base),l))]},yb=()=>$p(dc()),gx=({children:a,...r})=>{const s=dc(),o=r.hook?gb:s;let l=o;if(r.ssrPath){const[g,y=r.ssrSearch??""]=r.ssrPath.split("?");g&&(r.ssrSearch=y,r.ssrPath=g)}r.hrefs=r.hrefs??r.hook?.hrefs,r.searchHook=r.searchHook??r.hook?.searchHook;let u=M.useRef(o),m=u.current,f=m;for(let g in o){const y=g==="base"?o[g]+(r[g]??""):r[g]??o[g];y!==f[g]&&(m===f&&(u.current=f={...f}),f[g]=y),(y!==o[g]||y!==l[g])&&(l=f)}return M.createElement(mb.Provider,{value:l},a)},fa=M.forwardRef((a,r)=>{const s=dc(),[o,l]=$p(s),{to:u="",href:m=u,onClick:f,asChild:g,children:y,className:p,replace:b,state:v,transition:w,..._}=a;return _.onClick=Mp(D=>{D.ctrlKey||D.metaKey||D.altKey||D.shiftKey||D.button!==0||(f?.(D),D.defaultPrevented||(D.preventDefault(),l(m,a)))}),_.href=s.hrefs(m[0]==="~"?m.slice(1):s.base+m,s),p!==void 0&&(_.className=p?.call?p(o===m):p),r&&(_.ref=r),g&&M.isValidElement(y)?M.cloneElement(y,_):M.createElement("a",_,y)}),mx=a=>{const{to:r,href:s=r}=a,o=dc(),[,l]=$p(o),u=Mp(()=>l(r||s,a)),{ssrContext:m}=o;return pb(()=>{u()},[]),m&&(m.redirectTo=r),null},bb=`To use an existing Clerk app, run:
npx clerk@latest link
npx clerk@latest env pull

For production keys, run:
npx clerk@latest env pull --instance prod`,vb="Or copy keys from https://dashboard.clerk.com/~/api-keys into your .env file.",Xm=`To create a new Clerk app, run:
npx clerk@latest init

'npx clerk@latest init' does not need a Clerk account and writes temporary dev keys.

${bb}

${vb}`,yx=`${bb}

${vb}`,bx=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:`The publishableKey passed to Clerk is invalid (key={{key}}, expected format: pk_test_... or pk_live_...).

${Xm}`,MissingPublishableKeyErrorMessage:`Clerk keys are missing from your environment.

${Xm}`,MissingSecretKeyErrorMessage:`Missing secretKey.

${yx}`,MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function Eb({packageName:a,customMessages:r}){let s=a;function o(u,m){if(!m)return`${s}: ${u}`;let f=u;const g=u.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const y of g){const p=(m[y[1]]||"").toString();f=f.replace(`{{${y[1]}}}`,p)}return`${s}: ${f}`}const l={...bx,...r};return{setPackageName({packageName:u}){return typeof u=="string"&&(s=u),this},setMessages({customMessages:u}){return Object.assign(l,u||{}),this},throwInvalidPublishableKeyError(u){throw new Error(o(l.InvalidPublishableKeyErrorMessage,u))},throwInvalidProxyUrl(u){throw new Error(o(l.InvalidProxyUrlErrorMessage,u))},throwMissingPublishableKeyError(){throw new Error(o(l.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(o(l.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(u){throw new Error(o(l.MissingClerkProvider,u))},throw(u){throw new Error(o(u))}}}const vx=()=>{try{return!1}catch{}return!1},Ex=()=>{try{return!1}catch{}return!1},wx=()=>{try{return!0}catch{}return!1};var Wm=Object.prototype.hasOwnProperty;function Km(a,r,s){for(s of a.keys())if(pi(s,r))return s}function pi(a,r){var s,o,l;if(a===r)return!0;if(a&&r&&(s=a.constructor)===r.constructor){if(s===Date)return a.getTime()===r.getTime();if(s===RegExp)return a.toString()===r.toString();if(s===Array){if((o=a.length)===r.length)for(;o--&&pi(a[o],r[o]););return o===-1}if(s===Set){if(a.size!==r.size)return!1;for(o of a)if(l=o,l&&typeof l=="object"&&(l=Km(r,l),!l)||!r.has(l))return!1;return!0}if(s===Map){if(a.size!==r.size)return!1;for(o of a)if(l=o[0],l&&typeof l=="object"&&(l=Km(r,l),!l)||!pi(o[1],r.get(l)))return!1;return!0}if(s===ArrayBuffer)a=new Uint8Array(a),r=new Uint8Array(r);else if(s===DataView){if((o=a.byteLength)===r.byteLength)for(;o--&&a.getInt8(o)===r.getInt8(o););return o===-1}if(ArrayBuffer.isView(a)){if((o=a.byteLength)===r.byteLength)for(;o--&&a[o]===r[o];);return o===-1}if(!s||typeof a=="object"){o=0;for(s in a)if(Wm.call(a,s)&&++o&&!Wm.call(r,s)||!(s in r)||!pi(a[s],r[s]))return!1;return Object.keys(r).length===o}}return a!==a&&r!==r}function xx(a,r){if(!a)throw typeof r=="string"?new Error(r):new Error(`${r.displayName} not found`)}const to=(a,r)=>{const{assertCtxFn:s=xx}={},o=se.createContext(void 0);return o.displayName=a,[o,()=>{const m=se.useContext(o);return s(m,`${a} not found`),m.value},()=>{const m=se.useContext(o);return m?m.value:{}}]},[Sx,Tx]=to("ClerkInstanceContext");to("InitialStateContext");se.createContext({});to("CheckoutContext");function Ax(a){if(!se.useContext(Sx)){if(typeof a=="function"){a();return}throw new Error(`${a} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}function Dx(a){const r=function(){};let s;return s=new Proxy(r,{get(o,l){if(l!=="then")return l==="toString"?()=>`[${a}]`:l===Symbol.toPrimitive?()=>0:s},apply(){return s},construct(){return s},has(){return!1},set(){return!1}}),s}Dx("ClerkMockQueryClient");typeof window<"u"?se.useLayoutEffect:se.useEffect;const Zm=pi,Nx=a=>{const r=M.useRef(a);return M.useEffect(()=>{r.current=a},[a]),r.current},Fa=(a,r,s)=>{const o=!!s,l=M.useRef(s);M.useEffect(()=>{l.current=s},[s]),M.useEffect(()=>{if(!o||!a)return()=>{};const u=(...m)=>{l.current&&l.current(...m)};return a.on(r,u),()=>{a.off(r,u)}},[o,r,a,l])},wb=se.createContext(null);wb.displayName="ElementsContext";const Cx=(a,r)=>{if(!a)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${r} in an <Elements> provider.`);return a},ec=a=>a!==null&&typeof a=="object",Rx=(a,r,s)=>ec(a)?Object.keys(a).reduce((o,l)=>{const u=!ec(r)||!xb(a[l],r[l]);return s.includes(l)?(u&&console.warn(`Unsupported prop change: options.${l} is not a mutable property.`),o):u?{...o||{},[l]:a[l]}:o},null):null,Qm="[object Object]",xb=(a,r)=>{if(!ec(a)||!ec(r))return a===r;const s=Array.isArray(a);if(s!==Array.isArray(r))return!1;const o=Object.prototype.toString.call(a)===Qm;if(o!==(Object.prototype.toString.call(r)===Qm))return!1;if(!o&&!s)return a===r;const l=Object.keys(a),u=Object.keys(r);if(l.length!==u.length)return!1;const m={};for(let b=0;b<l.length;b+=1)m[l[b]]=!0;for(let b=0;b<u.length;b+=1)m[u[b]]=!0;const f=Object.keys(m);if(f.length!==l.length)return!1;const g=a,y=r,p=b=>xb(g[b],y[b]);return f.every(p)},Jm=a=>Cx(se.useContext(wb),a),_x=a=>a.charAt(0).toUpperCase()+a.slice(1),Ix=(a,r)=>{const s=`${_x(a)}Element`,u=r?m=>{Jm(`mounts <${s}>`);const{id:f,className:g}=m;return se.createElement("div",{id:f,className:g})}:({id:m,className:f,fallback:g,options:y={},onBlur:p,onFocus:b,onReady:v,onChange:w,onEscape:_,onClick:D,onLoadError:S,onLoaderStart:T,onNetworksChange:L,onConfirm:I,onCancel:C,onShippingAddressChange:x,onShippingRateChange:O})=>{const R=Jm(`mounts <${s}>`),P="elements"in R?R.elements:null,[k,ae]=se.useState(null),W=se.useRef(null),ne=se.useRef(null),[fe,ie]=M.useState(!1);Fa(k,"blur",p),Fa(k,"focus",b),Fa(k,"escape",_),Fa(k,"click",D),Fa(k,"loaderror",S),Fa(k,"loaderstart",T),Fa(k,"networkschange",L),Fa(k,"confirm",I),Fa(k,"cancel",C),Fa(k,"shippingaddresschange",x),Fa(k,"shippingratechange",O),Fa(k,"change",w);let re;v&&(re=()=>{ie(!0),v(k)}),Fa(k,"ready",re),se.useLayoutEffect(()=>{if(W.current===null&&ne.current!==null&&P){let J=null;P&&(J=P.create(a,y)),W.current=J,ae(J),J&&J.mount(ne.current)}},[P,y]);const H=Nx(y);return se.useEffect(()=>{if(!W.current)return;const J=Rx(y,H,["paymentRequest"]);J&&"update"in W.current&&W.current.update(J)},[y,H]),se.useLayoutEffect(()=>()=>{if(W.current&&typeof W.current.destroy=="function")try{W.current.destroy(),W.current=null}catch{}},[]),se.createElement(se.Fragment,null,!fe&&g,se.createElement("div",{id:m,style:{height:fe?"unset":"0px",visibility:fe?"visible":"hidden"},className:f,ref:ne}))};return u.displayName=s,u.__elementType=a,u};Ix("payment",typeof window>"u");to("PaymentElementContext");to("StripeUtilsContext");const[ED,,Lx]=to("PortalProvider"),Px=()=>{const a=Lx();return a&&"getContainer"in a&&a.getContainer?a.getContainer:()=>null},Fp=Eb({packageName:"@clerk/react"});function kx(a){Fp.setMessages(a).setPackageName(a)}const Ox=Tx,jx=a=>{Ax(()=>{Fp.throwMissingClerkProviderError({source:a})})};var uc=ib();const qx=Si(uc),Mx=lc({__proto__:null,default:qx},[uc]),Sa=a=>{vx()&&console.error(`Clerk: ${a}`)},ey=(a,...r)=>{const s={...a};for(const o of r)delete s[o];return s},$x=a=>`You've passed multiple children components to <${a}/>. You can only pass a single child component or text.`,Fx="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Ux="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Bx="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",zx="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",Yx=a=>`<${a} /> can only accept <${a}.Page /> and <${a}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,Hx=a=>`Missing props. <${a}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,Vx=a=>`Missing props. <${a}.Link /> component requires the following props: url, label and labelIcon.`,Gx="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Xx="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Wx="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",Kx="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",Zx="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",Qx="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",Jx="Missing props. <UserButton.Action /> component requires the following props: label.",Ti=a=>r=>{try{return se.Children.only(a)}catch{const s=se.Children.toArray(a);return s.length===1&&se.isValidElement(s[0])?s[0]:Fp.throw($x(r))}},Ai=(a,r)=>(a||(a=r),typeof a=="string"&&(a=se.createElement("button",null,a)),a),Di=a=>(...r)=>{if(a&&typeof a=="function")return a(...r)},fi=a=>{const[r,s]=M.useState(new Map),o=M.useRef(r),l=M.useRef(new Map),u=M.useRef(new Map);o.current=r,l.current=new Map(a.map(f=>[f.id,f.component]));const m=new Set(a.map(f=>f.id));return u.current.forEach((f,g)=>{m.has(g)||u.current.delete(g)}),a.map(f=>{const g=f.id,y=u.current.get(g);if(y)return y;const p=()=>{const v=o.current.get(g),w=l.current.get(g);return v?uc.createPortal(w,v):null},b={id:f.id,mount:v=>s(w=>new Map(w).set(g,v)),unmount:()=>s(v=>{const w=new Map(v);return w.set(g,null),w}),portal:p};return u.current.set(g,b),b})},wa=(a,r)=>!!a&&se.isValidElement(a)&&a?.type===r,Sb=(a,r)=>Db({children:a,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:Ci,PageComponent:Ni,MenuItemsComponent:fc,componentName:"UserProfile"},r),Tb=(a,r)=>Db({children:a,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:gc,PageComponent:hc,componentName:"OrganizationProfile"},r),Ab=a=>{const r=[],s=[gc,hc,fc,Ni,Ci];return se.Children.forEach(a,o=>{s.some(l=>wa(o,l))||r.push(o)}),r},Db=(a,r)=>{const{children:s,LinkComponent:o,PageComponent:l,MenuItemsComponent:u,reorderItemsLabels:m,componentName:f}=a,{allowForAnyChildren:g=!1}=r||{},y=[],p=new Map;se.Children.forEach(s,I=>{if(!wa(I,l)&&!wa(I,o)&&!wa(I,u)){I&&!g&&Sa(Yx(f));return}const{props:C}=I,{children:x,label:O,url:R,labelIcon:P}=C,k=I.key;if(wa(I,l))if(ay(C,m))y.push({label:O});else if(_u(C))y.push({label:O,labelIcon:P,children:x,url:R,portalId:ty("page",C,k,p)});else{Sa(Hx(f));return}if(wa(I,o))if(Iu(C))y.push({label:O,labelIcon:P,url:R,portalId:ty("link",C,k,p)});else{Sa(Vx(f));return}});const b=[],v=[],w=[];y.forEach((I,C)=>{if(_u(I)){b.push({component:I.children,id:I.portalId||C}),v.push({component:I.labelIcon,id:I.portalId||C});return}Iu(I)&&w.push({component:I.labelIcon,id:I.portalId||C})});const _=fi(b),D=fi(v),S=fi(w),T=[],L=[];return y.forEach((I,C)=>{if(ay(I,m)){T.push({label:I.label});return}if(_u(I)){const{portal:x,mount:O,unmount:R}=_.find(W=>W.id===(I.portalId||C)),{portal:P,mount:k,unmount:ae}=D.find(W=>W.id===(I.portalId||C));T.push({label:I.label,url:I.url,mount:O,unmount:R,mountIcon:k,unmountIcon:ae}),L.push({key:`content:${I.portalId||C}`,portal:x}),L.push({key:`label:${I.portalId||C}`,portal:P});return}if(Iu(I)){const{portal:x,mount:O,unmount:R}=S.find(P=>P.id===(I.portalId||C));T.push({label:I.label,url:I.url,mountIcon:O,unmountIcon:R}),L.push({key:`label:${I.portalId||C}`,portal:x});return}}),{customPages:T,customPagesPortals:L}},ty=(a,r,s,o)=>{if(s!=null)return`${a}:key:${s}`;const l=`${a}:${r.label}:${r.url}`,u=o.get(l)??0;return o.set(l,u+1),`${l}:${u}`},ay=(a,r)=>{const{children:s,label:o,url:l,labelIcon:u}=a;return!s&&!l&&!u&&r.some(m=>m===o)},_u=a=>{const{children:r,label:s,url:o,labelIcon:l}=a;return!!r&&!!o&&!!l&&!!s},Iu=a=>{const{children:r,label:s,url:o,labelIcon:l}=a;return!r&&!!o&&!!l&&!!s},e1=(a,r)=>t1({children:a,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:fc,MenuActionComponent:Cb,MenuLinkComponent:Rb,UserProfileLinkComponent:Ci,UserProfilePageComponent:Ni,allowForAnyChildren:r?.allowForAnyChildren??!1}),t1=({children:a,MenuItemsComponent:r,MenuActionComponent:s,MenuLinkComponent:o,UserProfileLinkComponent:l,UserProfilePageComponent:u,reorderItemsLabels:m,allowForAnyChildren:f=!1})=>{const g=[],y=[],p=[],b=new Map;se.Children.forEach(a,S=>{if(!wa(S,r)&&!wa(S,l)&&!wa(S,u)){S&&!f&&Sa(Gx);return}if(wa(S,l)||wa(S,u))return;const{props:T}=S;se.Children.forEach(T.children,L=>{if(!wa(L,s)&&!wa(L,o)){L&&Sa(Xx);return}const{props:I}=L,C=L.key,{label:x,labelIcon:O,href:R,onClick:P,open:k}=I;if(wa(L,s))if(ny(I,m))g.push({label:x});else if(Pu(I)){const ae={label:x,labelIcon:O};if(P!==void 0)g.push({...ae,onClick:P,portalId:Lu("action",I,C,b)});else if(k!==void 0)g.push({...ae,open:k.startsWith("/")?k:`/${k}`,portalId:Lu("action",I,C,b)});else{Sa("Custom menu item must have either onClick or open property");return}}else{Sa(Jx);return}if(wa(L,o))if(ku(I))g.push({label:x,labelIcon:O,href:R,portalId:Lu("link",I,C,b)});else{Sa(Qx);return}})});const v=[],w=[];g.forEach((S,T)=>{Pu(S)&&v.push({component:S.labelIcon,id:S.portalId||T}),ku(S)&&w.push({component:S.labelIcon,id:S.portalId||T})});const _=fi(v),D=fi(w);return g.forEach((S,T)=>{if(ny(S,m)&&y.push({label:S.label}),Pu(S)){const{portal:L,mount:I,unmount:C}=_.find(O=>O.id===(S.portalId||T)),x={label:S.label,mountIcon:I,unmountIcon:C};"onClick"in S?x.onClick=S.onClick:"open"in S&&(x.open=S.open),y.push(x),p.push({key:`icon:${S.portalId||T}`,portal:L})}if(ku(S)){const{portal:L,mount:I,unmount:C}=D.find(x=>x.id===(S.portalId||T));y.push({label:S.label,href:S.href,mountIcon:I,unmountIcon:C}),p.push({key:`icon:${S.portalId||T}`,portal:L})}}),{customMenuItems:y,customMenuItemsPortals:p}},Lu=(a,r,s,o)=>{if(s!=null)return`${a}:key:${s}`;const l=r.href||r.open||"",u=`${a}:${r.label}:${l}`,m=o.get(u)??0;return o.set(u,m+1),`${u}:${m}`},ny=(a,r)=>{const{children:s,label:o,onClick:l,labelIcon:u}=a;return!s&&!l&&!u&&r.some(m=>m===o)},Pu=a=>{const{label:r,labelIcon:s,onClick:o,open:l}=a;return!!s&&!!r&&(typeof o=="function"||typeof l=="string")},ku=a=>{const{label:r,href:s,labelIcon:o}=a;return!!s&&!!o&&!!r},a1=a=>{const r=a?.isReady;return s=>new Promise((o,l)=>{const{root:u=document?.body,selector:m,timeout:f=0}=s;if(!u){l(new Error("No root element provided"));return}let g=u;if(m&&(g=u?.querySelector(m)),r(g,m)){o();return}const y=new MutationObserver(p=>{for(const b of p)if(!g&&m&&(g=u?.querySelector(m)),(a.childList&&b.type==="childList"||a.attributes&&b.type==="attributes")&&r(g,m)){y.disconnect(),o();return}});y.observe(u,a),f>0&&setTimeout(()=>{y.disconnect(),l(new Error(`Timeout waiting for ${m}`))},f)})},n1=a1({childList:!0,subtree:!0,isReady:(a,r)=>!!a?.childElementCount&&a?.matches?.(r)&&a.childElementCount>0});function na(a,r){const s=M.useRef(),[o,l]=M.useState("rendering");return M.useEffect(()=>{if(!a)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!s.current){const u=`[data-clerk-component="${a}"]`,m=r?.selector;s.current=n1({selector:m?u+m:u}).then(()=>{l("rendered")}).catch(()=>{l("error")})}},[a,r?.selector]),o}const Ul=a=>"mount"in a,ry=a=>"open"in a,sy=a=>a?.map(({mountIcon:r,unmountIcon:s,...o})=>o);var zt=class extends se.PureComponent{constructor(...a){super(...a),this.rootRef=se.createRef()}componentDidUpdate(a){if(!Ul(a)||!Ul(this.props))return;const r=ey(a.props||{},"customPages","customMenuItems","children"),s=ey(this.props.props||{},"customPages","customMenuItems","children"),o=a.props?.customPages?.length!==this.props.props?.customPages?.length,l=a.props?.customMenuItems?.length!==this.props.props?.customMenuItems?.length,u=sy(a.props?.customMenuItems),m=sy(this.props.props?.customMenuItems);(!Zm(r,s)||!Zm(u,m)||o||l)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(Ul(this.props)&&this.props.mount(this.rootRef.current,this.props.props),ry(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(Ul(this.props)&&this.props.unmount(this.rootRef.current),ry(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:a=!1}=this.props,r={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return se.createElement(se.Fragment,null,!a&&se.createElement("div",r),this.props.children)}};const st=(a,r)=>{const s=(typeof r=="string"?r:r?.component)||a.displayName||a.name||"Component";a.displayName=s;const o=typeof r=="string"?void 0:r,l=u=>{jx(s||"withClerk");const m=Ox(),f=Px();return!m.loaded&&!o?.renderWhileLoading?null:se.createElement(a,{getContainer:f,...u,component:s,clerk:m})};return l.displayName=`withClerk(${s})`,l},pc=a=>se.createElement(se.Fragment,null,a?.customPagesPortals?.map(({key:r,portal:s})=>M.createElement(s,{key:r})),a?.customMenuItemsPortals?.map(({key:r,portal:s})=>M.createElement(s,{key:r})));st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountSignIn,unmount:a.unmountSignIn,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"SignIn",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountSignUp,unmount:a.unmountSignUp,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"SignUp",renderWhileLoading:!0});function Ni({children:a}){return Sa(Fx),se.createElement(se.Fragment,null,a)}function Ci({children:a}){return Sa(Ux),se.createElement(se.Fragment,null,a)}const r1=st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:f}=Sb(o.children);return se.createElement(se.Fragment,null,l&&s,se.createElement(zt,{component:r,mount:a.mountUserProfile,unmount:a.unmountUserProfile,updateProps:a.__internal_updateProps,props:{...o,customPages:m},rootProps:u},se.createElement(pc,{customPagesPortals:f})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(r1,{Page:Ni,Link:Ci});const Nb=M.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),s1=st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:f}=Sb(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),g={...o.userProfileProps,customPages:m},{customMenuItems:y,customMenuItemsPortals:p}=e1(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),b=Ab(o.children),v={mount:a.mountUserButton,unmount:a.unmountUserButton,updateProps:a.__internal_updateProps,props:{...o,userProfileProps:g,customMenuItems:y}},w={customPagesPortals:f,customMenuItemsPortals:p};return se.createElement(Nb.Provider,{value:v},l&&s,a.loaded&&se.createElement(zt,{component:r,...v,hideRootHtmlElement:!!o.__experimental_asProvider,rootProps:u},o.__experimental_asProvider?b:null,se.createElement(pc,w)))},{component:"UserButton",renderWhileLoading:!0});function fc({children:a}){return Sa(Wx),se.createElement(se.Fragment,null,a)}function Cb({children:a}){return Sa(Kx),se.createElement(se.Fragment,null,a)}function Rb({children:a}){return Sa(Zx),se.createElement(se.Fragment,null,a)}function o1(a){const r=M.useContext(Nb),s={...r,props:{...r.props,...a}};return se.createElement(zt,s)}Object.assign(s1,{UserProfilePage:Ni,UserProfileLink:Ci,MenuItems:fc,Action:Cb,Link:Rb,__experimental_Outlet:o1});function hc({children:a}){return Sa(Bx),se.createElement(se.Fragment,null,a)}function gc({children:a}){return Sa(zx),se.createElement(se.Fragment,null,a)}const i1=st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:f}=Tb(o.children);return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountOrganizationProfile,unmount:a.unmountOrganizationProfile,updateProps:a.__internal_updateProps,props:{...o,customPages:m},rootProps:u},se.createElement(pc,{customPagesPortals:f})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(i1,{Page:hc,Link:gc});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountCreateOrganization,unmount:a.unmountCreateOrganization,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"CreateOrganization",renderWhileLoading:!0});const _b=M.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),l1=st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:f}=Tb(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),g={...o.organizationProfileProps,customPages:m},y=Ab(o.children),p={mount:a.mountOrganizationSwitcher,unmount:a.unmountOrganizationSwitcher,updateProps:a.__internal_updateProps,props:{...o,organizationProfileProps:g},rootProps:u,component:r};return a.__experimental_prefetchOrganizationSwitcher(),se.createElement(_b.Provider,{value:p},se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{...p,hideRootHtmlElement:!!o.__experimental_asProvider},o.__experimental_asProvider?y:null,se.createElement(pc,{customPagesPortals:f}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function c1(a){const r=M.useContext(_b),s={...r,props:{...r.props,...a}};return se.createElement(zt,s)}Object.assign(l1,{OrganizationProfilePage:hc,OrganizationProfileLink:gc,__experimental_Outlet:c1});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountOrganizationList,unmount:a.unmountOrganizationList,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"OrganizationList",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,open:a.openGoogleOneTap,close:a.closeGoogleOneTap,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"GoogleOneTap",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountWaitlist,unmount:a.unmountWaitlist,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"Waitlist",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r,{selector:'[data-component-status="ready"]'})==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountPricingTable,unmount:a.unmountPricingTable,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"PricingTable",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountAPIKeys,unmount:a.unmountAPIKeys,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"ApiKeys",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.__internal_mountOAuthConsent,unmount:a.__internal_unmountOAuthConsent,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"OAuthConsent",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.__internal_mountOAuthDeviceVerification,unmount:a.__internal_unmountOAuthDeviceVerification,updateProps:m=>{a.__internal_updateProps(m)},props:o,rootProps:u}))},{component:"OAuthDeviceVerification",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountUserAvatar,unmount:a.unmountUserAvatar,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"UserAvatar",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountTaskChooseOrganization,unmount:a.unmountTaskChooseOrganization,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountTaskResetPassword,unmount:a.unmountTaskResetPassword,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"TaskResetPassword",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return se.createElement(se.Fragment,null,l&&s,a.loaded&&se.createElement(zt,{component:r,mount:a.mountTaskSetupMFA,unmount:a.unmountTaskSetupMFA,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"TaskSetupMFA",renderWhileLoading:!0});const d1=Eb({packageName:"@clerk/shared"});function u1(a){d1.setPackageName({packageName:a})}const oy=new Set,mc=(a,r,s)=>{const o=Ex()||wx(),l=a;oy.has(l)||o||(oy.add(l),console.warn(`Clerk - DEPRECATION WARNING: "${a}" is deprecated and will be removed in the next major release.
${r}`))};function p1(a){const r=a.match(/^(\d+)\.(\d+)\.(\d+)/);if(!r)return null;const[,s,o,l]=r;return{major:parseInt(s,10),minor:parseInt(o,10),patch:parseInt(l,10)}}function f1(a,r){const{major:s,minor:o,patch:l}=a;return r.some(([u,m,f,g])=>s!==u?!1:f===-1?o>m||o===m&&l>=g:o===f&&l>=g)}function h1(a,r){const s=p1(a);return s?f1(s,r):!1}st(({clerk:a,...r})=>{const{client:s,session:o}=a,l=(s.signedInSessions?.length??0)>0;return se.useEffect(()=>{o===null&&l?a.redirectToAfterSignOut():a.redirectToSignIn(r)},[]),null},"RedirectToSignIn");st(({clerk:a,...r})=>(se.useEffect(()=>{a.redirectToSignUp(r)},[]),null),"RedirectToSignUp");st(({clerk:a,...r})=>(se.useEffect(()=>{a.redirectToTasks(r)},[]),null),"RedirectToTasks");st(({clerk:a})=>(se.useEffect(()=>{mc("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),a.redirectToUserProfile()},[]),null),"RedirectToUserProfile");st(({clerk:a})=>(se.useEffect(()=>{mc("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),a.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");st(({clerk:a})=>(se.useEffect(()=>{mc("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),a.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");st(({clerk:a,...r})=>(se.useEffect(()=>{a.handleRedirectCallback(r)},[]),null),"AuthenticateWithRedirectCallback");typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);function g1(){try{return h1(se.version,[[18,0,-1,0],[19,0,0,3],[19,1,1,4],[19,2,2,3],[19,3,3,0]])}catch{return!1}}g1();typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);if(globalThis.__clerkSharedModules){const a=globalThis.__clerkSharedModules.react?.version;a&&a!==M.version&&console.warn(`[@clerk/ui/register] React version mismatch detected. Already registered: ${a}, current import: ${M.version}. This may cause issues with the shared @clerk/ui variant.`)}else globalThis.__clerkSharedModules={react:lb,"react-dom":Mx,"react-dom/client":KE,"react/jsx-runtime":BE};st(({clerk:a,children:r,...s})=>{const{appearance:o,getContainer:l,component:u,...m}=s;r=Ai(r,"Invite members");const f=Ti(r)("InviteMembersButton"),g=()=>a.openInviteMembers({appearance:o,getContainer:l}),p={...m,onClick:async b=>(f&&typeof f=="object"&&"props"in f&&await Di(f.props.onClick)(b),g())};return se.cloneElement(f,p)},{component:"InviteMembersButton",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{appearance:o,getContainer:l,component:u,signUpFallbackRedirectUrl:m,forceRedirectUrl:f,fallbackRedirectUrl:g,signUpForceRedirectUrl:y,mode:p,initialValues:b,withSignUp:v,oauthFlow:w,..._}=s;r=Ai(r,"Sign in");const D=Ti(r)("SignInButton"),S=()=>{const I={forceRedirectUrl:f,fallbackRedirectUrl:g,signUpFallbackRedirectUrl:m,signUpForceRedirectUrl:y,initialValues:b,withSignUp:v,oauthFlow:w};return p==="modal"?a.openSignIn({...I,appearance:o,getContainer:l}):a.redirectToSignIn({...I,signInFallbackRedirectUrl:g,signInForceRedirectUrl:f})},L={..._,onClick:async I=>(D&&typeof D=="object"&&"props"in D&&await Di(D.props.onClick)(I),S())};return se.cloneElement(D,L)},{component:"SignInButton",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{redirectUrl:o,getContainer:l,component:u,...m}=s;r=Ai(r,"Sign in with Metamask");const f=Ti(r)("SignInWithMetamaskButton"),g=async()=>{async function b(){await a.authenticateWithMetamask({redirectUrl:o||void 0})}b()},p={...m,onClick:async b=>(await Di(f.props.onClick)(b),g())};return se.cloneElement(f,p)},{component:"SignInWithMetamask",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{redirectUrl:o="/",sessionId:l,signOutOptions:u,getContainer:m,component:f,...g}=s;u&&mc("SignOutButton `signOutOptions`","Use the `redirectUrl` and `sessionId` props directly instead."),r=Ai(r,"Sign out");const y=Ti(r)("SignOutButton"),p=()=>a.signOut({redirectUrl:o,...l!==void 0&&{sessionId:l},...u}),v={...g,onClick:async w=>(await Di(y.props.onClick)(w),p())};return se.cloneElement(y,v)},{component:"SignOutButton",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{appearance:o,unsafeMetadata:l,getContainer:u,component:m,fallbackRedirectUrl:f,forceRedirectUrl:g,signInFallbackRedirectUrl:y,signInForceRedirectUrl:p,mode:b,initialValues:v,oauthFlow:w,..._}=s;r=Ai(r,"Sign up");const D=Ti(r)("SignUpButton"),S=()=>{const I={fallbackRedirectUrl:f,forceRedirectUrl:g,signInFallbackRedirectUrl:y,signInForceRedirectUrl:p,initialValues:v,oauthFlow:w};return b==="modal"?a.openSignUp({...I,appearance:o,unsafeMetadata:l,getContainer:u}):a.redirectToSignUp({...I,signUpFallbackRedirectUrl:f,signUpForceRedirectUrl:g})},L={..._,onClick:async I=>(D&&typeof D=="object"&&"props"in D&&await Di(D.props.onClick)(I),S())};return se.cloneElement(D,L)},{component:"SignUpButton",renderWhileLoading:!0});kx({packageName:"@clerk/react"});u1("@clerk/react");var Ou={exports:{}};const ao=a=>({...a,__type:"prebuilt_appearance"}),m1=Object.freeze(Object.defineProperty({__proto__:null,experimental_createTheme:ao},Symbol.toStringTag,{value:"Module"})),y1=ob(m1),Ib=ao({name:"dark",variables:{colorBackground:"#212126",colorNeutral:"white",colorPrimary:"#ffffff",colorPrimaryForeground:"black",colorForeground:"white",colorInputForeground:"white",colorInput:"#26262B"},elements:{providerIcon__apple:{filter:"invert(1)"},providerIcon__github:{filter:"invert(1)"},providerIcon__okx_wallet:{filter:"invert(1)"},providerIcon__vercel:{filter:"invert(1)"},activeDeviceIcon:{"--cl-chassis-bottom":"#d2d2d2","--cl-chassis-back":"#e6e6e6","--cl-chassis-screen":"#e6e6e6","--cl-screen":"#111111"}}}),b1=ao({name:"shadesOfPurple",baseTheme:Ib,variables:{colorBackground:"#3f3c77",colorPrimary:"#f8d80d",colorPrimaryForeground:"#38375f",colorInputForeground:"#a1fdfe",colorShimmer:"rgba(161,253,254,0.36)"}}),Sr={boxShadow:"3px 3px 0px #000",border:"2px solid #000","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:active":{boxShadow:"2px 2px 0px #000",transform:"translate(1px)"}},Zr={boxShadow:"3px 3px 0px #000",border:"2px solid #000"},v1=ao({name:"neobrutalism",simpleStyles:!0,variables:{colorPrimary:"#DF1B1B",colorShimmer:"rgba(255,255,255,0.64)",fontWeight:{normal:500,medium:600,bold:700}},elements:{cardBox:{boxShadow:"7px 7px 0px #000",border:"3px solid #000"},card:{borderRadius:"0"},headerSubtitle:{color:"#212126"},alternativeMethodsBlockButton:Sr,socialButtonsIconButton:{...Sr},selectButton:{...Sr,...Zr,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"}},socialButtonsBlockButton:{...Sr,color:"#212126"},profileSectionPrimaryButton:Sr,profileSectionItem:{color:"#212126"},avatarImageActionsUpload:Sr,menuButton:Zr,menuList:Zr,formButtonPrimary:Sr,navbarButton:Sr,formFieldAction:{fontWeight:"700"},formFieldInput:{...Zr,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:hover":{...Zr,transform:"scale(1.01)"}},table:Zr,tableHead:{color:"#212126"},dividerLine:{background:"#000"},dividerText:{fontWeight:"700",color:"#212126"},footer:{background:"#fff","& div":{color:"#212126"}},footerActionText:{color:"#212126"},footerActionLink:{fontWeight:"700",borderBottom:"3px solid","&:focus":{boxShadow:"none"}},actionCard:{...Zr},badge:{border:"1px solid #000",background:"#fff",color:"#212126"}}}),E1=ao({name:"shadcn",cssLayerName:"components",variables:{colorBackground:"var(--card)",colorDanger:"var(--destructive)",colorForeground:"var(--card-foreground)",colorInput:"var(--input)",colorInputForeground:"var(--card-foreground)",colorModalBackdrop:"var(--color-black)",colorMuted:"var(--muted)",colorMutedForeground:"var(--muted-foreground)",colorNeutral:"var(--foreground)",colorPrimary:"var(--primary)",colorPrimaryForeground:"var(--primary-foreground)",colorRing:"var(--ring)",fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",semibold:"var(--font-weight-semibold)",bold:"var(--font-weight-semibold)"}},elements:{input:"bg-transparent dark:bg-input/30",cardBox:"shadow-sm border",popoverBox:"shadow-sm border",button:{'&[data-variant="solid"]::after':{display:"none"}},providerIcon__apple:"dark:invert",providerIcon__github:"dark:invert",providerIcon__okx_wallet:"dark:invert",providerIcon__vercel:"dark:invert"}}),w1=ao({name:"simple",simpleStyles:!0}),x1=Object.freeze(Object.defineProperty({__proto__:null,dark:Ib,experimental__simple:w1,neobrutalism:v1,shadcn:E1,shadesOfPurple:b1},Symbol.toStringTag,{value:"Module"})),S1=ob(x1);var iy;function T1(){return iy||(iy=1,(function(a){var r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,u=(y,p,b,v)=>{if(p&&typeof p=="object"||typeof p=="function")for(let w of o(p))!l.call(y,w)&&w!==b&&r(y,w,{get:()=>p[w],enumerable:!(v=s(p,w))||v.enumerable});return y},m=(y,p,b)=>(u(y,p,"default"),b&&u(b,p,"default")),f=y=>u(r({},"__esModule",{value:!0}),y),g={};a.exports=f(g),m(g,y1,a.exports),m(g,S1,a.exports)})(Ou)),Ou.exports}T1();function ly(a){if(a instanceof Error)return a;if(typeof a=="string")return new Error(a);try{return new Error(JSON.stringify(a))}catch{return new Error(String(a))}}function A1({error:a,resetError:r}){return c.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50 p-6",children:c.jsxs("div",{className:"max-w-lg w-full text-center",children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Something went wrong"}),c.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"This part of the app hit an error. The rest of the app is still running."}),null,c.jsx("button",{type:"button",onClick:r,className:"mt-4 rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700",children:"Try again"})]})})}class D1 extends M.Component{state={error:null};static getDerivedStateFromError(r){return{error:ly(r)}}componentDidCatch(r,s){console.error("ErrorBoundary caught an error:",ly(r),s.componentStack)}componentDidUpdate(r){this.state.error!==null&&r.resetKey!==this.props.resetKey&&this.resetError()}resetError=()=>{this.setState({error:null})};render(){const{error:r}=this.state;if(r===null)return this.props.children;const s=this.props.FallbackComponent??A1;return c.jsx(s,{error:r,resetError:this.resetError})}}function N1({showLocalChip:a=!0}){const[r,s]=M.useState(""),[,o]=yb(),l=u=>{u.preventDefault(),r&&o(`/workspace/${r}`)};return c.jsxs("main",{className:"chooser-page",children:[c.jsxs("header",{className:"chooser-top",children:[c.jsxs(fa,{href:"/",className:"studio-wordmark","aria-label":"Mapping Studio home","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),a&&c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Browser-local workspace"]})]}),c.jsxs("section",{className:"chooser-content","aria-labelledby":"chooser-title",children:[c.jsxs("div",{className:"chooser-intro",children:[c.jsx("div",{className:"eyebrow",children:"Engineering workspace"}),c.jsx("h1",{id:"chooser-title",children:"Choose a discipline"}),c.jsx("p",{children:"Keep drawing groups organized and traceable on this device."})]}),c.jsxs("form",{className:"discipline-picker",onSubmit:l,"data-testid":"form-discipline-picker",children:[c.jsxs("div",{className:"discipline-field",children:[c.jsx("label",{htmlFor:"discipline-select",children:"Drawing type"}),c.jsxs("div",{className:"discipline-select-control",children:[c.jsxs("select",{id:"discipline-select",value:r,onChange:u=>s(u.target.value),"aria-label":"Drawing type","data-testid":"select-discipline",children:[c.jsx("option",{value:"",disabled:!0,children:"Select PFD or P&ID"}),c.jsx("option",{value:"pfd",children:"PFD — Process Flow Diagram"}),c.jsx("option",{value:"pid",children:"P&ID — Piping and Instrumentation Diagram"})]}),c.jsx(Cr,{size:17,"aria-hidden":"true"})]})]}),c.jsxs("button",{className:"btn primary discipline-submit",type:"submit",disabled:!r,"data-testid":"button-open-discipline",children:["Open workspace ",c.jsx(iw,{size:16,"aria-hidden":"true"})]})]}),c.jsxs("div",{className:"chooser-foot",children:[c.jsx(Wn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Stored in this browser only."})," Nothing is uploaded or shared."]})]})]}),c.jsxs("footer",{className:"chooser-footer",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:"PDFs and project data stay in this browser"}),c.jsx("span",{children:"© 2026 gaurav.cbiindia"})]})]})}function C1(){return c.jsx("main",{className:"chooser-page not-found",children:c.jsxs("div",{className:"not-found-card",children:[c.jsx("div",{className:"eyebrow",children:"Page not found"}),c.jsx("h1",{children:"This workspace does not exist."}),c.jsx(fa,{href:"/",className:"btn primary","data-testid":"link-not-found-home",children:"Return to disciplines"})]})})}const Up="pid-mapping-studio:hierarchies:v2",Lb="pid-mapping-studio:hierarchies:v1",tc=80,R1=128,_1=5e3,I1=64;class hi extends Error{rawValue;constructor(r,s=null){super(r),this.name="HierarchyLoadError",this.rawValue=s}}function tp(){return{version:2,pfd:[],pid:[]}}function Bp(a,r){return Object.keys(a).length===r.length&&r.every(o=>Object.prototype.hasOwnProperty.call(a,o))}function ac(a,r,s=new Set){let o=0;const l=(u,m)=>{if(m>I1)return!1;for(const f of u){if(!f||typeof f!="object"||Array.isArray(f))return!1;const g=f;if(!Bp(g,r?["id","name","kind","expanded","children"]:["id","name","expanded","children"])||typeof g.id!="string"||g.id.length===0||g.id.length>R1||typeof g.name!="string"||g.name.trim().length===0||g.name!==g.name.trim()||g.name.length>tc||r&&!["technology","projects","proposals","project","proposal","client","legacy"].includes(String(g.kind))||typeof g.expanded!="boolean"||!Array.isArray(g.children)||s.has(g.id)||(s.add(g.id),o+=1,o>_1||!l(g.children,m+1)))return!1}return!0};return l(a,0)}function di(a,r){if(a.kind==="legacy")return(r===null||r==="legacy")&&a.children.every(o=>di(o,"legacy"));const s={technology:null,projects:"technology",proposals:"technology",project:"projects",proposal:"proposals",client:"project"};return a.kind==="client"&&r!=="project"&&r!=="proposal"||a.kind!=="client"&&s[a.kind]!==r?!1:a.kind==="technology"?a.children.filter(o=>o.kind==="projects").length===1&&a.children.filter(o=>o.kind==="proposals").length===1&&a.children.every(o=>di(o,"technology")):a.kind==="projects"||a.kind==="proposals"?a.children.every(o=>di(o,a.kind)):a.kind==="project"||a.kind==="proposal"?a.children.every(o=>di(o,a.kind)):a.children.length===0}function Pb(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!Bp(r,["version","pfd","pid"])||r.version!==2||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const s=new Set;return ac(r.pfd,!0,s)&&ac(r.pid,!0,s)&&[...r.pfd,...r.pid].every(o=>di(o,null))}function L1(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!Bp(r,["version","pfd","pid"])||r.version!==1||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const s=new Set;return ac(r.pfd,!1,s)&&ac(r.pid,!1,s)}function ap(a){return a.map(r=>({id:r.id,name:r.name,kind:"legacy",expanded:r.expanded,children:ap(r.children)}))}function P1(a){return{version:2,pfd:ap(a.pfd),pid:ap(a.pid)}}function k1(){let a;try{a=window.localStorage.getItem(Up),a===null&&(a=window.localStorage.getItem(Lb))}catch{throw new hi("Saved groups could not be read from browser storage.")}if(a===null)return tp();let r;try{r=JSON.parse(a)}catch{throw new hi("Saved group data is not valid JSON.",a)}if(Pb(r))return r;if(L1(r))return P1(r);throw new hi("Saved group data is malformed or uses an unsupported format.",a)}function O1(a){if(!Pb(a))throw new Error("Groups could not be saved because the hierarchy is invalid.");window.localStorage.setItem(Up,JSON.stringify(a))}function Xl(a,r,s){return a.map(o=>o.id===r?s(o):{...o,children:Xl(o.children,r,s)})}function kb(a,r){return a.filter(s=>s.id!==r).map(s=>({...s,children:kb(s.children,r)}))}function Ob(a,r){return r?a.id===r||a.children.some(s=>Ob(s,r)):!1}function np(a){return a.reduce((r,s)=>r+1+np(s.children),0)}function rp(a,r){if(!r)return null;for(const s of a){if(s.id===r)return s;const o=rp(s.children,r);if(o)return o}return null}function jb(a,r,s){return a.flatMap(o=>{const l=r?`${r} / ${o.name}`:o.name;return[...s(o)?[{id:o.id,label:l}]:[],...jb(o.children,l,s)]})}function qb(a){return jb(a,"",r=>r.kind==="client"||r.kind==="legacy")}const j1="modulepreload",q1=function(a){return"/pid-mapping-studio-app/"+a},cy={},dn=function(r,s,o){let l=Promise.resolve();if(s&&s.length>0){let g=function(y){return Promise.all(y.map(p=>Promise.resolve(p).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),f=m?.nonce||m?.getAttribute("nonce");l=g(s.map(y=>{if(y=q1(y),y in cy)return;cy[y]=!0;const p=y.endsWith(".css"),b=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${b}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":j1,p||(v.as="script"),v.crossOrigin="",v.href=y,f&&v.setAttribute("nonce",f),document.head.appendChild(v),p)return new Promise((w,_)=>{v.addEventListener("load",w),v.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${y}`)))})}))}function u(m){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=m,window.dispatchEvent(f),!f.defaultPrevented)throw m}return l.then(m=>{for(const f of m||[])f.status==="rejected"&&u(f.reason);return r().catch(u)})};async function M1(){const[a,r]=await Promise.all([dn(()=>import("./pdf-TYrZqVzP.js"),[]),dn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);return a.GlobalWorkerOptions.workerSrc=r.default,a}function $1({fileId:a,alias:r,pageCount:s,page:o,onPageChange:l,loadBytes:u,markers:m=[],onMarkerClick:f}){const g=M.useRef(null),y=M.useRef(null),[p,b]=M.useState(0),[v,w]=M.useState("loading"),[_,D]=M.useState(0),S=M.useRef(u);return S.current=u,M.useEffect(()=>{const T=y.current;if(!T)return;b(T.clientWidth);const L=new ResizeObserver(()=>b(Math.round(T.clientWidth/24)*24));return L.observe(T),()=>L.disconnect()},[]),M.useEffect(()=>{if(!p)return;let T=!1,L=null,I=null;return w("loading"),(async()=>{try{const[C,x]=await Promise.all([M1(),S.current(a)]);if(T)return;I=C.getDocument({data:new Uint8Array(x.slice(0))});const O=await I.promise;if(T)return;const R=await O.getPage(Math.min(Math.max(o,1),O.numPages)),P=R.getViewport({scale:1}),k=Math.min(window.devicePixelRatio||1,2),ae=p/P.width*k,W=R.getViewport({scale:ae}),ne=g.current;if(!ne||T)return;ne.width=Math.floor(W.width),ne.height=Math.floor(W.height),ne.style.width="100%";const fe=R.render({canvas:ne,canvasContext:ne.getContext("2d"),viewport:W});L=fe,await fe.promise,T||w("ready")}catch(C){if(T||C?.name==="RenderingCancelledException")return;w("error")}})(),()=>{T=!0,L?.cancel(),I?.destroy().catch(()=>{})}},[a,o,p,_]),c.jsxs("div",{className:"ppv","data-testid":"panel-source-preview",children:[c.jsxs("div",{className:"ppv-bar",children:[c.jsx("span",{className:"ppv-label","data-testid":"text-preview-label",children:"Original source PDF · not generated CAD"}),c.jsxs("div",{className:"ppv-nav",children:[c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Previous page",disabled:o<=1,onClick:()=>l(o-1),"data-testid":"button-preview-prev",children:c.jsx(ub,{size:15})}),c.jsxs("span",{"data-testid":"text-preview-page","aria-live":"polite",children:[r," · page ",o," of ",s]}),c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Next page",disabled:o>=s,onClick:()=>l(o+1),"data-testid":"button-preview-next",children:c.jsx(jp,{size:15})})]})]}),c.jsxs("div",{className:"ppv-stage",ref:y,children:[c.jsxs("div",{className:"ppv-canvas-wrap",style:{visibility:v==="ready"?"visible":"hidden"},children:[c.jsx("canvas",{ref:g,"aria-label":`Original source page ${o} of ${r}`,"data-testid":"canvas-source-preview"}),v==="ready"&&m.length>0&&c.jsx("div",{className:"ppv-markers","aria-label":"Extracted tag source locations",children:m.map((T,L)=>c.jsx("button",{className:"ppv-marker",type:"button",style:{left:`${T.location.x*100}%`,top:`${T.location.y*100}%`,width:`${Math.max(T.location.width*100,1.1)}%`,height:`${Math.max(T.location.height*100,1.2)}%`},"aria-label":`OCR location for ${T.label}; verify against the PDF`,title:`${T.label} · OCR candidate location`,onClick:()=>f?.(T.id),"data-testid":`marker-source-${T.id}-${L}`,children:c.jsx("span",{children:T.label})},`${T.id}-${T.location.pageNumber}-${L}`))})]}),m.length>0&&c.jsx("div",{className:"ppv-marker-note",role:"note",children:"Red boxes show OCR candidate locations. Confirm each tag against the original PDF."}),v==="loading"&&c.jsxs("div",{className:"ppv-overlay",role:"status","data-testid":"status-preview-loading",children:[c.jsx(Ca,{size:18,className:"pdf-spin"})," Rendering page"]}),v==="error"&&c.jsxs("div",{className:"ppv-overlay ppv-error",role:"alert","data-testid":"status-preview-error",children:[c.jsx(_r,{size:18})," This page could not be shown.",c.jsx("button",{type:"button",className:"btn",onClick:()=>D(T=>T+1),"data-testid":"button-preview-retry",children:"Try again"})]})]})]})}var jt=Uint8Array,Ua=Uint16Array,zp=Int32Array,yc=new jt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),bc=new jt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),sp=new jt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Mb=function(a,r){for(var s=new Ua(31),o=0;o<31;++o)s[o]=r+=1<<a[o-1];for(var l=new zp(s[30]),o=1;o<30;++o)for(var u=s[o];u<s[o+1];++u)l[u]=u-s[o]<<5|o;return{b:s,r:l}},$b=Mb(yc,2),Fb=$b.b,op=$b.r;Fb[28]=258,op[258]=28;var Ub=Mb(bc,0),F1=Ub.b,dy=Ub.r,ip=new Ua(32768);for(var xt=0;xt<32768;++xt){var Tr=(xt&43690)>>1|(xt&21845)<<1;Tr=(Tr&52428)>>2|(Tr&13107)<<2,Tr=(Tr&61680)>>4|(Tr&3855)<<4,ip[xt]=((Tr&65280)>>8|(Tr&255)<<8)>>1}var Sn=(function(a,r,s){for(var o=a.length,l=0,u=new Ua(r);l<o;++l)a[l]&&++u[a[l]-1];var m=new Ua(r);for(l=1;l<r;++l)m[l]=m[l-1]+u[l-1]<<1;var f;if(s){f=new Ua(1<<r);var g=15-r;for(l=0;l<o;++l)if(a[l])for(var y=l<<4|a[l],p=r-a[l],b=m[a[l]-1]++<<p,v=b|(1<<p)-1;b<=v;++b)f[ip[b]>>g]=y}else for(f=new Ua(o),l=0;l<o;++l)a[l]&&(f[l]=ip[m[a[l]-1]++]>>15-a[l]);return f}),Ir=new jt(288);for(var xt=0;xt<144;++xt)Ir[xt]=8;for(var xt=144;xt<256;++xt)Ir[xt]=9;for(var xt=256;xt<280;++xt)Ir[xt]=7;for(var xt=280;xt<288;++xt)Ir[xt]=8;var bi=new jt(32);for(var xt=0;xt<32;++xt)bi[xt]=5;var U1=Sn(Ir,9,0),B1=Sn(Ir,9,1),z1=Sn(bi,5,0),Y1=Sn(bi,5,1),ju=function(a){for(var r=a[0],s=1;s<a.length;++s)a[s]>r&&(r=a[s]);return r},ln=function(a,r,s){var o=r/8|0;return(a[o]|a[o+1]<<8)>>(r&7)&s},qu=function(a,r){var s=r/8|0;return(a[s]|a[s+1]<<8|a[s+2]<<16)>>(r&7)},Yp=function(a){return(a+7)/8|0},Ri=function(a,r,s){return(r==null||r<0)&&(r=0),(s==null||s>a.length)&&(s=a.length),new jt(a.subarray(r,s))},H1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ba=function(a,r,s){var o=new Error(r||H1[a]);if(o.code=a,Error.captureStackTrace&&Error.captureStackTrace(o,ba),!s)throw o;return o},V1=function(a,r,s,o){var l=a.length,u=o?o.length:0;if(!l||r.f&&!r.l)return s||new jt(0);var m=!s,f=m||r.i!=2,g=r.i;m&&(s=new jt(l*3));var y=function(ot){var dt=s.length;if(ot>dt){var Lt=new jt(Math.max(dt*2,ot));Lt.set(s),s=Lt}},p=r.f||0,b=r.p||0,v=r.b||0,w=r.l,_=r.d,D=r.m,S=r.n,T=l*8;do{if(!w){p=ln(a,b,1);var L=ln(a,b+1,3);if(b+=3,L)if(L==1)w=B1,_=Y1,D=9,S=5;else if(L==2){var O=ln(a,b,31)+257,R=ln(a,b+10,15)+4,P=O+ln(a,b+5,31)+1;b+=14;for(var k=new jt(P),ae=new jt(19),W=0;W<R;++W)ae[sp[W]]=ln(a,b+W*3,7);b+=R*3;for(var ne=ju(ae),fe=(1<<ne)-1,ie=Sn(ae,ne,1),W=0;W<P;){var re=ie[ln(a,b,fe)];b+=re&15;var I=re>>4;if(I<16)k[W++]=I;else{var H=0,J=0;for(I==16?(J=3+ln(a,b,3),b+=2,H=k[W-1]):I==17?(J=3+ln(a,b,7),b+=3):I==18&&(J=11+ln(a,b,127),b+=7);J--;)k[W++]=H}}var me=k.subarray(0,O),xe=k.subarray(O);D=ju(me),S=ju(xe),w=Sn(me,D,1),_=Sn(xe,S,1)}else ba(1);else{var I=Yp(b)+4,C=a[I-4]|a[I-3]<<8,x=I+C;if(x>l){g&&ba(0);break}f&&y(v+C),s.set(a.subarray(I,x),v),r.b=v+=C,r.p=b=x*8,r.f=p;continue}if(b>T){g&&ba(0);break}}f&&y(v+131072);for(var j=(1<<D)-1,te=(1<<S)-1,z=b;;z=b){var H=w[qu(a,b)&j],G=H>>4;if(b+=H&15,b>T){g&&ba(0);break}if(H||ba(2),G<256)s[v++]=G;else if(G==256){z=b,w=null;break}else{var le=G-254;if(G>264){var W=G-257,ue=yc[W];le=ln(a,b,(1<<ue)-1)+Fb[W],b+=ue}var be=_[qu(a,b)&te],Le=be>>4;be||ba(3),b+=be&15;var xe=F1[Le];if(Le>3){var ue=bc[Le];xe+=qu(a,b)&(1<<ue)-1,b+=ue}if(b>T){g&&ba(0);break}f&&y(v+131072);var ke=v+le;if(v<xe){var ht=u-xe,at=Math.min(xe,ke);for(ht+v<0&&ba(3);v<at;++v)s[v]=o[ht+v]}for(;v<ke;++v)s[v]=s[v-xe]}}r.l=w,r.p=z,r.b=v,r.f=p,w&&(p=1,r.m=D,r.d=_,r.n=S)}while(!p);return v!=s.length&&m?Ri(s,0,v):s.subarray(0,v)},zn=function(a,r,s){s<<=r&7;var o=r/8|0;a[o]|=s,a[o+1]|=s>>8},Jo=function(a,r,s){s<<=r&7;var o=r/8|0;a[o]|=s,a[o+1]|=s>>8,a[o+2]|=s>>16},Mu=function(a,r){for(var s=[],o=0;o<a.length;++o)a[o]&&s.push({s:o,f:a[o]});var l=s.length,u=s.slice();if(!l)return{t:zb,l:0};if(l==1){var m=new jt(s[0].s+1);return m[s[0].s]=1,{t:m,l:1}}s.sort(function(x,O){return x.f-O.f}),s.push({s:-1,f:25001});var f=s[0],g=s[1],y=0,p=1,b=2;for(s[0]={s:-1,f:f.f+g.f,l:f,r:g};p!=l-1;)f=s[s[y].f<s[b].f?y++:b++],g=s[y!=p&&s[y].f<s[b].f?y++:b++],s[p++]={s:-1,f:f.f+g.f,l:f,r:g};for(var v=u[0].s,o=1;o<l;++o)u[o].s>v&&(v=u[o].s);var w=new Ua(v+1),_=lp(s[p-1],w,0);if(_>r){var o=0,D=0,S=_-r,T=1<<S;for(u.sort(function(O,R){return w[R.s]-w[O.s]||O.f-R.f});o<l;++o){var L=u[o].s;if(w[L]>r)D+=T-(1<<_-w[L]),w[L]=r;else break}for(D>>=S;D>0;){var I=u[o].s;w[I]<r?D-=1<<r-w[I]++-1:++o}for(;o>=0&&D;--o){var C=u[o].s;w[C]==r&&(--w[C],++D)}_=r}return{t:new jt(w),l:_}},lp=function(a,r,s){return a.s==-1?Math.max(lp(a.l,r,s+1),lp(a.r,r,s+1)):r[a.s]=s},uy=function(a){for(var r=a.length;r&&!a[--r];);for(var s=new Ua(++r),o=0,l=a[0],u=1,m=function(g){s[o++]=g},f=1;f<=r;++f)if(a[f]==l&&f!=r)++u;else{if(!l&&u>2){for(;u>138;u-=138)m(32754);u>2&&(m(u>10?u-11<<5|28690:u-3<<5|12305),u=0)}else if(u>3){for(m(l),--u;u>6;u-=6)m(8304);u>2&&(m(u-3<<5|8208),u=0)}for(;u--;)m(l);u=1,l=a[f]}return{c:s.subarray(0,o),n:r}},ei=function(a,r){for(var s=0,o=0;o<r.length;++o)s+=a[o]*r[o];return s},Bb=function(a,r,s){var o=s.length,l=Yp(r+2);a[l]=o&255,a[l+1]=o>>8,a[l+2]=a[l]^255,a[l+3]=a[l+1]^255;for(var u=0;u<o;++u)a[l+u+4]=s[u];return(l+4+o)*8},py=function(a,r,s,o,l,u,m,f,g,y,p){zn(r,p++,s),++l[256];for(var b=Mu(l,15),v=b.t,w=b.l,_=Mu(u,15),D=_.t,S=_.l,T=uy(v),L=T.c,I=T.n,C=uy(D),x=C.c,O=C.n,R=new Ua(19),P=0;P<L.length;++P)++R[L[P]&31];for(var P=0;P<x.length;++P)++R[x[P]&31];for(var k=Mu(R,7),ae=k.t,W=k.l,ne=19;ne>4&&!ae[sp[ne-1]];--ne);var fe=y+5<<3,ie=ei(l,Ir)+ei(u,bi)+m,re=ei(l,v)+ei(u,D)+m+14+3*ne+ei(R,ae)+2*R[16]+3*R[17]+7*R[18];if(g>=0&&fe<=ie&&fe<=re)return Bb(r,p,a.subarray(g,g+y));var H,J,me,xe;if(zn(r,p,1+(re<ie)),p+=2,re<ie){H=Sn(v,w,0),J=v,me=Sn(D,S,0),xe=D;var j=Sn(ae,W,0);zn(r,p,I-257),zn(r,p+5,O-1),zn(r,p+10,ne-4),p+=14;for(var P=0;P<ne;++P)zn(r,p+3*P,ae[sp[P]]);p+=3*ne;for(var te=[L,x],z=0;z<2;++z)for(var G=te[z],P=0;P<G.length;++P){var le=G[P]&31;zn(r,p,j[le]),p+=ae[le],le>15&&(zn(r,p,G[P]>>5&127),p+=G[P]>>12)}}else H=U1,J=Ir,me=z1,xe=bi;for(var P=0;P<f;++P){var ue=o[P];if(ue>255){var le=ue>>18&31;Jo(r,p,H[le+257]),p+=J[le+257],le>7&&(zn(r,p,ue>>23&31),p+=yc[le]);var be=ue&31;Jo(r,p,me[be]),p+=xe[be],be>3&&(Jo(r,p,ue>>5&8191),p+=bc[be])}else Jo(r,p,H[ue]),p+=J[ue]}return Jo(r,p,H[256]),p+J[256]},G1=new zp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),zb=new jt(0),X1=function(a,r,s,o,l,u){var m=u.z||a.length,f=new jt(o+m+5*(1+Math.ceil(m/7e3))+l),g=f.subarray(o,f.length-l),y=u.l,p=(u.r||0)&7;if(r){p&&(g[0]=u.r>>3);for(var b=G1[r-1],v=b>>13,w=b&8191,_=(1<<s)-1,D=u.p||new Ua(32768),S=u.h||new Ua(_+1),T=Math.ceil(s/3),L=2*T,I=function(gt){return(a[gt]^a[gt+1]<<T^a[gt+2]<<L)&_},C=new zp(25e3),x=new Ua(288),O=new Ua(32),R=0,P=0,k=u.i||0,ae=0,W=u.w||0,ne=0;k+2<m;++k){var fe=I(k),ie=k&32767,re=S[fe];if(D[ie]=re,S[fe]=ie,W<=k){var H=m-k;if((R>7e3||ae>24576)&&(H>423||!y)){p=py(a,g,0,C,x,O,P,ae,ne,k-ne,p),ae=R=P=0,ne=k;for(var J=0;J<286;++J)x[J]=0;for(var J=0;J<30;++J)O[J]=0}var me=2,xe=0,j=w,te=ie-re&32767;if(H>2&&fe==I(k-te))for(var z=Math.min(v,H)-1,G=Math.min(32767,k),le=Math.min(258,H);te<=G&&--j&&ie!=re;){if(a[k+me]==a[k+me-te]){for(var ue=0;ue<le&&a[k+ue]==a[k+ue-te];++ue);if(ue>me){if(me=ue,xe=te,ue>z)break;for(var be=Math.min(te,ue-2),Le=0,J=0;J<be;++J){var ke=k-te+J&32767,ht=D[ke],at=ke-ht&32767;at>Le&&(Le=at,re=ke)}}}ie=re,re=D[ie],te+=ie-re&32767}if(xe){C[ae++]=268435456|op[me]<<18|dy[xe];var ot=op[me]&31,dt=dy[xe]&31;P+=yc[ot]+bc[dt],++x[257+ot],++O[dt],W=k+me,++R}else C[ae++]=a[k],++x[a[k]]}}for(k=Math.max(k,W);k<m;++k)C[ae++]=a[k],++x[a[k]];p=py(a,g,y,C,x,O,P,ae,ne,k-ne,p),y||(u.r=p&7|g[p/8|0]<<3,p-=7,u.h=S,u.p=D,u.i=k,u.w=W)}else{for(var k=u.w||0;k<m+y;k+=65535){var Lt=k+65535;Lt>=m&&(g[p/8|0]=y,Lt=m),p=Bb(g,p+1,a.subarray(k,Lt))}u.i=m}return Ri(f,0,o+Yp(p)+l)},W1=(function(){for(var a=new Int32Array(256),r=0;r<256;++r){for(var s=r,o=9;--o;)s=(s&1&&-306674912)^s>>>1;a[r]=s}return a})(),K1=function(){var a=-1;return{p:function(r){for(var s=a,o=0;o<r.length;++o)s=W1[s&255^r[o]]^s>>>8;a=s},d:function(){return~a}}},Z1=function(a,r,s,o,l){if(!l&&(l={l:1},r.dictionary)){var u=r.dictionary.subarray(-32768),m=new jt(u.length+a.length);m.set(u),m.set(a,u.length),a=m,l.w=u.length}return X1(a,r.level==null?6:r.level,r.mem==null?l.l?Math.ceil(Math.max(8,Math.min(13,Math.log(a.length)))*1.5):20:12+r.mem,s,o,l)},Yb=function(a,r){var s={};for(var o in a)s[o]=a[o];for(var o in r)s[o]=r[o];return s},xn=function(a,r){return a[r]|a[r+1]<<8},Ja=function(a,r){return(a[r]|a[r+1]<<8|a[r+2]<<16|a[r+3]<<24)>>>0},$u=function(a,r){return Ja(a,r)+Ja(a,r+4)*4294967296},pa=function(a,r,s){for(;s;++r)a[r]=s,s>>>=8};function Q1(a,r){return Z1(a,r||{},0,0)}function J1(a,r){return V1(a,{i:2},r&&r.out,r&&r.dictionary)}var Hb=function(a,r,s,o){for(var l in a){var u=a[l],m=r+l,f=o;Array.isArray(u)&&(f=Yb(o,u[1]),u=u[0]),ArrayBuffer.isView(u)?s[m]=[u,f]:(s[m+="/"]=[new jt(0),f],Hb(u,m,s,o))}},fy=typeof TextEncoder<"u"&&new TextEncoder,cp=typeof TextDecoder<"u"&&new TextDecoder,eS=0;try{cp.decode(zb,{stream:!0}),eS=1}catch{}var tS=function(a){for(var r="",s=0;;){var o=a[s++],l=(o>127)+(o>223)+(o>239);if(s+l>a.length)return{s:r,r:Ri(a,s-1)};l?l==3?(o=((o&15)<<18|(a[s++]&63)<<12|(a[s++]&63)<<6|a[s++]&63)-65536,r+=String.fromCharCode(55296|o>>10,56320|o&1023)):l&1?r+=String.fromCharCode((o&31)<<6|a[s++]&63):r+=String.fromCharCode((o&15)<<12|(a[s++]&63)<<6|a[s++]&63):r+=String.fromCharCode(o)}};function dp(a,r){var s;if(fy)return fy.encode(a);for(var o=a.length,l=new jt(a.length+(a.length>>1)),u=0,m=function(y){l[u++]=y},s=0;s<o;++s){if(u+5>l.length){var f=new jt(u+8+(o-s<<1));f.set(l),l=f}var g=a.charCodeAt(s);g<128||r?m(g):g<2048?(m(192|g>>6),m(128|g&63)):g>55295&&g<57344?(g=65536+(g&1047552)|a.charCodeAt(++s)&1023,m(240|g>>18),m(128|g>>12&63),m(128|g>>6&63),m(128|g&63)):(m(224|g>>12),m(128|g>>6&63),m(128|g&63))}return Ri(l,0,u)}function aS(a,r){if(r){for(var s="",o=0;o<a.length;o+=16384)s+=String.fromCharCode.apply(null,a.subarray(o,o+16384));return s}else{if(cp)return cp.decode(a);var l=tS(a),u=l.s,s=l.r;return s.length&&ba(8),u}}var nS=function(a,r){return r+30+xn(a,r+26)+xn(a,r+28)},rS=function(a,r,s){var o=xn(a,r+28),l=xn(a,r+30),u=aS(a.subarray(r+46,r+46+o),!(xn(a,r+8)&2048)),m=r+46+o,f=sS(a,m,l,s,Ja(a,r+20),Ja(a,r+24),Ja(a,r+42)),g=f[0],y=f[1],p=f[2];return[xn(a,r+10),g,y,u,m+l+xn(a,r+32),p]},sS=function(a,r,s,o,l,u,m){var f=l==4294967295,g=u==4294967295,y=m==4294967295,p=r+s,b=f+g+y;if(o&&b){for(;r+4<p;r+=4+xn(a,r+2))if(xn(a,r)==1)return[f?$u(a,r+4+8*g):l,g?$u(a,r+4):u,y?$u(a,r+4+8*(g+f)):m,1];o<2&&ba(13)}return[l,u,m,0]},up=function(a){var r=0;if(a)for(var s in a){var o=a[s].length;o>65535&&ba(9),r+=o+4}return r},hy=function(a,r,s,o,l,u,m,f){var g=o.length,y=s.extra,p=f&&f.length,b=up(y);pa(a,r,m!=null?33639248:67324752),r+=4,m!=null&&(a[r++]=20,a[r++]=s.os),a[r]=20,r+=2,a[r++]=s.flag<<1|(u<0&&8),a[r++]=l&&8,a[r++]=s.compression&255,a[r++]=s.compression>>8;var v=new Date(s.mtime==null?Date.now():s.mtime),w=v.getFullYear()-1980;if((w<0||w>119)&&ba(10),pa(a,r,w<<25|v.getMonth()+1<<21|v.getDate()<<16|v.getHours()<<11|v.getMinutes()<<5|v.getSeconds()>>1),r+=4,u!=-1&&(pa(a,r,s.crc),pa(a,r+4,u<0?-u-2:u),pa(a,r+8,s.size)),pa(a,r+12,g),pa(a,r+14,b),r+=16,m!=null&&(pa(a,r,p),pa(a,r+6,s.attrs),pa(a,r+10,m),r+=14),a.set(o,r),r+=g,b)for(var _ in y){var D=y[_],S=D.length;pa(a,r,+_),pa(a,r+2,S),a.set(D,r+4),r+=4+S}return p&&(a.set(f,r),r+=p),r},oS=function(a,r,s,o,l){pa(a,r,101010256),pa(a,r+8,s),pa(a,r+10,s),pa(a,r+12,o),pa(a,r+16,l)};function iS(a,r){r||(r={});var s={},o=[];Hb(a,"",s,r);var l=0,u=0;for(var m in s){var f=s[m],g=f[0],y=f[1],p=y.level==0?0:8,b=dp(m),v=b.length,w=y.comment,_=w&&dp(w),D=_&&_.length,S=up(y.extra);v>65535&&ba(11);var T=p?Q1(g,y):g,L=T.length,I=K1();I.p(g),o.push(Yb(y,{size:g.length,crc:I.d(),c:T,f:b,m:_,u:v!=m.length||_&&w.length!=D,o:l,compression:p})),l+=30+v+S+L,u+=76+2*(v+S)+(D||0)+L}for(var C=new jt(u+22),x=l,O=u-l,R=0;R<o.length;++R){var b=o[R];hy(C,b.o,b,b.f,b.u,b.c.length);var P=30+b.f.length+up(b.extra);C.set(b.c,b.o+P),hy(C,l,b,b.f,b.u,b.c.length,b.o,b.m),l+=16+P+(b.m?b.m.length:0)}return oS(C,l,o.length,O,x),C}function gy(a,r){for(var s={},o=a.length-22;Ja(a,o)!=101010256;--o)(!o||a.length-o>65558)&&ba(13);var l=xn(a,o+8);if(!l)return{};var u=Ja(a,o+16),m=Ja(a,o-20)==117853008;if(m){var f=Ja(a,o-12);m=Ja(a,f)==101075792,m&&(l=Ja(a,f+32),u=Ja(a,f+48))}for(var g=0;g<l;++g){var y=rS(a,u,m),p=y[0],b=y[1],v=y[2],w=y[3],_=y[4],D=y[5],S=nS(a,D);u=_,p?p==8?s[w]=J1(a.subarray(S,S+b),{out:new jt(v)}):ba(14,"unknown compression type "+p):s[w]=Ri(a,S,S+b)}return s}const my="DIAGNOSTIC_README.txt";function lS(a){return(a.split(/[\\/]/).pop()??"").replace(/[\u0000-\u001f<>:"/\\|?*]/g,"_").trim().replace(/^[. ]+|[. ]+$/g,"")||"diagnostic-file"}function cS(a,r){const s=a.lastIndexOf("."),o=s>0?a.slice(0,s):a,l=s>0?a.slice(s):"";let u=a,m=2;for(;r.has(u.toLocaleLowerCase());)u=`${o}-${m}${l}`,m+=1;return r.add(u.toLocaleLowerCase()),u}function dS(a){if(a.length===0)throw new Error("Add at least one diagnostic file before downloading the ZIP.");const r=Object.create(null),s=new Set([my.toLocaleLowerCase()]),o=[];return a.forEach((l,u)=>{const m=cS(lS(l.name),s);r[m]=l.bytes,o.push(`${String(u+1).padStart(2,"0")}. ${m} | ${l.bytes.byteLength} bytes | ${l.mimeType||"type not provided"}`)}),r[my]=dp(["P&ID Mapping Studio diagnostic bundle","Files were selected locally. The app did not upload them to a server.","","Files included:",...o,""].join(`
`)),iS(r,{level:1})}const uS=200*1024*1024;function yy(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(1)} MB`}function pS(){const[a,r]=M.useState([]),[s,o]=M.useState(!1),[l,u]=M.useState(""),[m,f]=M.useState(""),g=M.useMemo(()=>a.reduce((v,w)=>v+w.size,0),[a]),y=v=>{if(u(""),f(""),v.length===0)return;const w=new Set(a.map(S=>`${S.name}:${S.size}:${S.lastModified}`)),_=v.filter(S=>{const T=`${S.name}:${S.size}:${S.lastModified}`;return w.has(T)?!1:(w.add(T),!0)});if(g+_.reduce((S,T)=>S+T.size,0)>uS){f("The selected files exceed the 200 MB bundle limit. Remove some files and try again.");return}r(S=>[...S,..._]),_.length<v.length&&u(`${v.length-_.length} duplicate file(s) were skipped.`)},p=v=>{r(w=>w.filter(_=>_!==v)),u(""),f("")},b=async()=>{if(!(a.length===0||s)){o(!0),u(""),f("");try{const v=await Promise.all(a.map(async L=>({name:L.name,mimeType:L.type,bytes:new Uint8Array(await L.arrayBuffer())}))),w=dS(v),_=new Uint8Array(w.byteLength);_.set(w);const D=new Blob([_.buffer],{type:"application/zip"}),S=URL.createObjectURL(D),T=document.createElement("a");T.href=S,T.download="pid-mapping-diagnostics.zip",T.click(),window.setTimeout(()=>URL.revokeObjectURL(S),5e3),u(`ZIP ready with ${a.length} file(s). Attach pid-mapping-diagnostics.zip to the chat.`)}catch(v){f(v instanceof Error?v.message:"The diagnostic ZIP could not be created.")}finally{o(!1)}}};return c.jsxs("section",{className:"diagnostic-upload-panel","aria-labelledby":"diagnostic-upload-title","data-testid":"panel-diagnostic-upload",children:[c.jsxs("div",{className:"diagnostic-upload-heading",children:[c.jsxs("div",{className:"diagnostic-upload-copy",children:[c.jsx("span",{className:"diagnostic-upload-kicker",children:"LOCAL DIAGNOSTICS"}),c.jsx("h3",{id:"diagnostic-upload-title",children:"Share run files"}),c.jsx("p",{children:"Select AutoCAD logs, DXF/DWG, ZIP, JSON, scripts, screenshots, or other files."})]}),c.jsxs("div",{className:"diagnostic-upload-actions",children:[c.jsxs("label",{className:"btn primary diagnostic-upload-select","data-testid":"label-add-diagnostic-files",children:[c.jsx(ts,{size:16})," Add files",c.jsx("input",{type:"file",multiple:!0,"aria-label":"Choose diagnostic files from this device","data-testid":"input-add-diagnostic-files",onChange:v=>{y(Array.from(v.currentTarget.files??[])),v.currentTarget.value=""}})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:a.length===0||s,"data-testid":"button-download-diagnostic-zip",children:[s?c.jsx(Ca,{size:16,className:"diagnostic-upload-spin"}):c.jsx(Op,{size:16}),s?"Preparing ZIP…":"Download one ZIP"]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{r([]),u(""),f("")},disabled:a.length===0||s,"data-testid":"button-clear-diagnostic-files",children:[c.jsx(Ks,{size:15})," Clear"]})]})]}),c.jsxs("div",{className:"diagnostic-upload-privacy","data-testid":"text-diagnostic-local-only",children:[c.jsx(Wn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay on this device."})," Nothing is sent to a server. Download one ZIP, then attach it to the chat to share it."]})]}),c.jsxs("div",{className:"diagnostic-upload-count","data-testid":"text-diagnostic-file-count",children:[a.length," file(s) selected · ",yy(g)," of 200 MB"]}),a.length>0&&c.jsx("ul",{className:"diagnostic-upload-list","aria-label":"Selected diagnostic files","data-testid":"list-diagnostic-files",children:a.map((v,w)=>c.jsxs("li",{"data-testid":`row-diagnostic-file-${w}`,children:[c.jsx(Xn,{size:15,"aria-hidden":"true"}),c.jsx("span",{className:"diagnostic-upload-file-name",title:v.name,children:v.name}),c.jsx("span",{className:"diagnostic-upload-file-size",children:yy(v.size)}),c.jsx("button",{type:"button",className:"diagnostic-upload-remove",onClick:()=>p(v),"aria-label":`Remove ${v.name}`,"data-testid":`button-remove-diagnostic-file-${w}`,children:c.jsx(ep,{size:16})})]},`${v.name}:${v.size}:${v.lastModified}:${w}`))}),l&&c.jsx("p",{className:"diagnostic-upload-status",role:"status","data-testid":"status-diagnostic-upload",children:l}),m&&c.jsx("p",{className:"diagnostic-upload-error",role:"alert","data-testid":"error-diagnostic-upload",children:m})]})}const Fu="STANDARD",fS="STANDARD";function hS(a,r,s){const o=a(),l=a(),u=a(),m=a(),f=a(),g=a(),y=a(),p=a(),b=a();function v(x,O,R){const P=a();return x(0,"TABLE"),x(2,O),x(5,P),x(330,"0"),x(100,"AcDbSymbolTable"),x(70,R),P}function w(x,O,R,P,k=a()){return x(0,O),x(O==="DIMSTYLE"?105:5,k),x(330,R),x(100,"AcDbSymbolTableRecord"),x(100,P),k}function _(x){const O=v(x,"VPORT",1);w(x,"VPORT",O,"AcDbViewportTableRecord"),x(2,"*ACTIVE"),x(70,0),x(10,0),x(20,0),x(11,1),x(21,1),x(12,r/2),x(22,s/2),x(13,0),x(23,0),x(14,10),x(24,10),x(15,10),x(25,10),x(16,0),x(26,0),x(36,1),x(17,0),x(27,0),x(37,0),x(40,s*1.1),x(41,r/s),x(42,50),x(43,0),x(44,0),x(50,0),x(51,0),x(71,0),x(72,1e3),x(73,1),x(74,3),x(75,0),x(76,0),x(77,0),x(78,0),x(281,0),x(0,"ENDTAB")}function D(x,O){for(const ae of["VIEW","UCS"])v(x,ae,0),x(0,"ENDTAB");const R=v(x,"APPID",1);w(x,"APPID",R,"AcDbRegAppTableRecord"),x(2,"ACAD"),x(70,0),x(0,"ENDTAB");const P=v(x,"DIMSTYLE",1);x(100,"AcDbDimStyleTable"),x(71,0),w(x,"DIMSTYLE",P,"AcDbDimStyleTableRecord"),x(2,fS),x(70,0),x(40,1),x(140,2.5),x(340,O),x(0,"ENDTAB");const k=v(x,"BLOCK_RECORD",2);for(const[ae,W,ne]of[["*Model_Space",g,p],["*Paper_Space",y,b]])w(x,"BLOCK_RECORD",k,"AcDbBlockTableRecord",W),x(2,ae),x(340,ne),x(70,4),x(280,1),x(281,0);x(0,"ENDTAB")}function S(x){x(0,"SECTION"),x(2,"BLOCKS");for(const[O,R]of[["*Model_Space",g],["*Paper_Space",y]])x(0,"BLOCK"),x(5,a()),x(330,R),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockBegin"),x(2,O),x(70,0),x(10,0),x(20,0),x(30,0),x(3,O),x(1,""),x(0,"ENDBLK"),x(5,a()),x(330,R),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockEnd");x(0,"ENDSEC")}function T(x,O,R,P,k=!1){x(0,k?"ACDBDICTIONARYWDFLT":"DICTIONARY"),x(5,O),x(330,R),x(100,"AcDbDictionary"),x(280,0),x(281,1);for(const[ae,W]of P)x(3,ae),x(350,W);k&&(x(100,"AcDbDictionaryWithDefault"),x(340,f))}function L(x,O,R,P,k){x(0,"LAYOUT"),x(5,R),x(330,u),x(100,"AcDbPlotSettings"),x(1,""),x(4,""),x(6,"");for(const ae of[40,41,42,43])x(ae,0);x(44,r),x(45,s);for(const ae of[46,47,48,49,140,141])x(ae,0);x(142,1),x(143,1),x(70,k===0?1024:0),x(72,1),x(73,0),x(74,5),x(7,""),x(75,16),x(76,0),x(77,2),x(78,300),x(147,1),x(148,0),x(149,0),x(100,"AcDbLayout"),x(1,O),x(70,1),x(71,k),x(10,0),x(20,0),x(11,r),x(21,s),x(12,0),x(22,0),x(32,0),x(14,0),x(24,0),x(34,0),x(15,r),x(25,s),x(35,0),x(146,0),x(13,0),x(23,0),x(33,0),x(16,1),x(26,0),x(36,0),x(17,0),x(27,1),x(37,0),x(76,1),x(330,P)}function I(x){x(0,"SECTION"),x(2,"OBJECTS"),T(x,o,"0",[["ACAD_GROUP",l],["ACAD_LAYOUT",u],["ACAD_PLOTSTYLENAME",m]]),T(x,l,o,[]),T(x,u,o,[["Model",p],["Layout1",b]]),T(x,m,o,[["Normal",f]],!0),x(0,"ACDBPLACEHOLDER"),x(5,f),x(330,m),L(x,"Model",p,g,0),L(x,"Layout1",b,y,1),x(0,"ENDSEC")}function C(x){x(0,"SECTION"),x(2,"CLASSES");for(const[O,R,P]of[["LAYOUT","AcDbLayout",2],["ACDBDICTIONARYWDFLT","AcDbDictionaryWithDefault",1],["ACDBPLACEHOLDER","AcDbPlaceHolder",1]])x(0,"CLASS"),x(1,O),x(2,R),x(3,"ObjectDBX Classes"),x(90,0),x(91,P),x(280,0),x(281,0);x(0,"ENDSEC")}return{modelSpace:g,normalPlotStyle:f,beginTable:v,tableRecord:w,writeViewport:_,writeRemainingTables:D,writeBlocks:S,writeObjects:I,writeClasses:C}}function Uu(a){if(!Number.isFinite(a))throw new Error("A PDF coordinate is not a finite number.");return Number(a.toFixed(7)).toString()}function gS(a){return a.replace(/[\r\n\t]/g," ").replace(/\\/g,"\\\\").replace(/[^\x20-\x7e]/g,r=>`\\U+${r.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")}`)}const by=/[<>\/\\":;?*|,=\u0000-\u001f\u007f]/;function Vb(a){const r=a.replace(/^\uFEFF/,"").split(/\r?\n/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF export rejected: the output does not contain complete group-code/value pairs.");const s=[];for(let o=0;o<r.length;o+=2){const l=Number(r[o].trim());if(!/^\d+$/.test(r[o].trim())||!Number.isInteger(l)||r[o+1]===void 0)throw new Error(`DXF export rejected: malformed group-code/value pair at line ${o+1}.`);s.push({code:l,value:r[o+1]})}if(s.at(-1)?.code!==0||s.at(-1)?.value!=="EOF")throw new Error("DXF export rejected: the output is incomplete (missing EOF).");return s}function mS(a,r,s=0){return!a||a.trim()!==a||a.length>255?!1:r==="BLOCK_RECORD"&&/^\*[A-Za-z0-9_.$-]+$/.test(a)||r==="VPORT"&&a.toUpperCase()==="*ACTIVE"?!0:s&16&&a.includes("|")?a.split("|").every(o=>o.length>0&&!by.test(o)):!by.test(a)}function Gb(a,r,s,o=[]){const l=new Set;let u=!1,m=!1;for(let f=0;f<a.length;f+=1){const g=a[f];if(g.code===0&&g.value==="SECTION"&&a[f+1]?.code===2&&a[f+1]?.value==="TABLES"){u=!0,m=!0,f+=1;continue}if(!u)continue;if(g.code===0&&g.value==="ENDSEC"){u=!1;continue}if(g.code!==0||g.value!=="TABLE")continue;const y=a[f+1];if(y?.code!==2||!y.value.trim())throw new Error("DXF export rejected: a symbol table has a blank or missing table name.");const p=y.value.toUpperCase();if(l.has(p))throw new Error(`DXF export rejected: the ${p} symbol table is duplicated.`);l.add(p);const b=new Set;let v=f+1;for(;v<a.length&&a[v].code!==0;)v+=1;const w=new Set;for(let S=v;S<a.length&&!(a[S].code===0&&["ENDTAB","ENDSEC"].includes(a[S].value));S+=1)a[S].code===2&&a[S].value.trim()&&w.add(a[S].value.toUpperCase());let _=0,D=!1;for(;v<a.length&&a[v].code===0;){if(a[v].value==="ENDTAB"){D=!0,f=v;break}if(a[v].value==="ENDSEC")break;_+=1;let S=v+1;for(;S<a.length&&a[S].code!==0;)S+=1;if(a[v].value!==p)throw new Error(`DXF export rejected: ${p} contains an unexpected ${a[v].value} record at line ${v*2+2}.`);let T=-1,L=0,I="";for(let P=v+1;P<S;P+=1){if(a[P].code===2){if(T>=0)throw new Error(`DXF export rejected: ${p} record has multiple name fields at line ${P*2+1}.`);T=P}a[P].code===70&&(L=Number(a[P].value)),a[P].code===3&&(I=a[P].value)}const C=T>=0?a[T].value:"",x=!C.trim();let O=C;if(p==="STYLE"&&(L&1)!==0){const P=(T>=0?T:v)*2+2;if(T<0)throw new Error(`DXF export rejected: STYLE shape-file record is missing its group-2 name field at line ${P}.`);if(!I.trim())throw new Error(`DXF export rejected: STYLE shape-file record has no font file in group 3 at line ${P}.`);if(C!==""){if(!r)throw new Error(`DXF export rejected: STYLE shape-file record must have an empty name per DXF format at line ${P}.`);o.push({table:p,line:P,previousName:C,name:""}),a[T].value="",O=""}}else if(x||!mS(C,p,L)){const P=(T>=0?T:v)*2+2;if(!x||!["STYLE","DIMSTYLE"].includes(p))throw new Error(`DXF export rejected: ${p} table record ${_} has ${x?"a blank name":`an invalid name ${JSON.stringify(C)}`} at line ${P}. Correct the source value before exporting.`);if(!r)throw new Error(`DXF export rejected: ${p} table record ${_} still has ${x?"a blank name":"an invalid name"} after repair at line ${P}.`);const k=p==="DIMSTYLE"?"AUTOMATION_DIMSTYLE":"AUTOMATION_TEXTSTYLE";O=k;let ae=2;for(;w.has(O.toUpperCase());)O=`${k}_${ae++}`;if(w.add(O.toUpperCase()),o.push({table:p,line:P,previousName:C,name:O}),T>=0)a[T].value=O;else{let W=v+1;for(;W<S&&[5,105,330,100].includes(a[W].code);)W+=1;s.push({index:W,pair:{code:2,value:O}})}}if(O){const P=O.toUpperCase();if(b.has(P))throw new Error(`DXF export rejected: ${p} table record ${_} duplicates the name ${JSON.stringify(O)}.`);b.add(P)}v=S}if(!D)throw new Error(`DXF export rejected: the ${p} symbol table is missing ENDTAB.`)}if(!m)throw new Error("DXF export rejected: the output has no TABLES section to validate.");if(u)throw new Error("DXF export rejected: TABLES section is missing ENDSEC.");for(const f of["STYLE","DIMSTYLE"])if(!l.has(f))throw new Error(`DXF export rejected: the required ${f} symbol table is missing.`)}function yS(a){return Xb(a).dxf}function Xb(a){const r=Vb(a),s=[],o=[];Gb(r,!0,s,o),s.sort((u,m)=>m.index-u.index);for(const u of s)r.splice(u.index,0,u.pair);const l=`${r.flatMap(({code:u,value:m})=>[String(u),m]).join(`\r
`)}\r
`;return Hp(l),{dxf:l,repairs:o}}function Hp(a){Gb(Vb(a),!1,[])}function bS(a){const r=Number.parseInt(a.replace("#",""),16);return Number.isFinite(r)?r:0}function wD(a,r,s){if(!Number.isFinite(r)||!Number.isFinite(s)||r<=0||s<=0)throw new Error("A DXF page must have positive finite dimensions.");const o=[],l=(T,L)=>o.push(String(T),typeof L=="number"?Uu(L):L);let u=256;const m=()=>(u++).toString(16).toUpperCase(),f=hS(m,r,s),g=new Map;for(const T of a)if(T.kind==="polyline"&&T.dash?.some(L=>L>0)){const L=T.dash.map(I=>Uu(I)).join(",");g.has(L)||g.set(L,{name:`PDF_DASH_${g.size+1}`,pattern:T.dash})}const y=T=>T.trim()||"0",p=T=>{l(5,m()),l(330,f.modelSpace),l(100,"AcDbEntity"),l(67,0),l(410,"Model"),l(8,y(T.layer));const L=bS(T.color);(L>>16&255)<16&&(L>>8&255)<16&&(L&255)<16?l(62,7):(l(62,256),l(420,L)),T.opacity!==void 0&&T.opacity<1&&l(440,33554432|Math.round(Math.max(0,T.opacity)*255))};f.writeClasses(l),l(0,"SECTION"),l(2,"TABLES"),f.writeViewport(l);const b=f.beginTable(l,"LTYPE",3+g.size);for(const T of["BYBLOCK","BYLAYER","CONTINUOUS"])f.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,T),l(70,0),l(3,T==="CONTINUOUS"?"Solid line":""),l(72,65),l(73,0),l(40,0);for(const{name:T,pattern:L}of g.values()){const I=L.length%2?[...L,...L]:L;f.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,T),l(70,0),l(3,"Source PDF dash pattern"),l(72,65),l(73,I.length),l(40,I.reduce((C,x)=>C+Math.abs(x),0)),I.forEach((C,x)=>{l(49,x%2?-C:C),l(74,0)})}l(0,"ENDTAB");const v=[...new Set(["0",...a.map(T=>y(T.layer))])],w=f.beginTable(l,"LAYER",v.length);for(const T of v)f.tableRecord(l,"LAYER",w,"AcDbLayerTableRecord"),l(2,T),l(70,0),l(62,7),l(6,"CONTINUOUS"),l(290,1),l(370,-3),l(390,f.normalPlotStyle);l(0,"ENDTAB");const _=f.beginTable(l,"STYLE",1),D=f.tableRecord(l,"STYLE",_,"AcDbTextStyleTableRecord");l(2,Fu),l(70,0),l(40,0),l(41,1),l(50,0),l(71,0),l(42,2.5),l(3,"txt.shx"),l(4,""),l(0,"ENDTAB"),f.writeRemainingTables(l,D),l(0,"ENDSEC"),f.writeBlocks(l),l(0,"SECTION"),l(2,"ENTITIES");for(const T of a)if(T.kind==="polyline"){if(T.points.length<2)continue;l(0,"LWPOLYLINE"),p(T),l(370,T.lineWeight);const L=T.dash?.length?g.get(T.dash.map(I=>Uu(I)).join(",")):void 0;L&&l(6,L.name),l(100,"AcDbPolyline"),l(90,T.points.length),l(70,(T.closed?1:0)|(L?128:0));for(const I of T.points)l(10,I.x),l(20,I.y)}else if(T.kind==="hatch"){const L=T.loops.filter(I=>I.length>=3);if(!L.length)continue;l(0,"HATCH"),p(T),l(100,"AcDbHatch"),l(10,0),l(20,0),l(30,0),l(210,0),l(220,0),l(230,1),l(2,"SOLID"),l(70,1),l(71,0),l(91,L.length);for(const I of L){l(92,2),l(72,0),l(73,1),l(93,I.length);for(const C of I)l(10,C.x),l(20,C.y);l(97,0)}l(75,0),l(76,1),l(98,0)}else{if(!T.text.trim()||!(T.height>0))continue;const L=T.text.match(/[\s\S]{1,180}/g)??[];let I=0;for(const C of L){const x=I/T.text.length,O=(I+C.length)/T.text.length,R={x:T.start.x+(T.end.x-T.start.x)*x,y:T.start.y+(T.end.y-T.start.y)*x},P={x:T.start.x+(T.end.x-T.start.x)*O,y:T.start.y+(T.end.y-T.start.y)*O};l(0,"TEXT"),p(T),l(100,"AcDbText"),l(10,R.x),l(20,R.y),l(30,0),l(40,T.height),l(1,gS(C)),l(50,T.rotation),l(7,Fu),l(72,Math.hypot(P.x-R.x,P.y-R.y)>1e-8?5:0),l(11,P.x),l(21,P.y),l(31,0),l(100,"AcDbText"),l(73,0),I+=C.length}}l(0,"ENDSEC"),f.writeObjects(l),l(0,"EOF");const S=o.splice(0);return l(0,"SECTION"),l(2,"HEADER"),l(9,"$ACADVER"),l(1,"AC1018"),l(9,"$DWGCODEPAGE"),l(3,"ANSI_1252"),l(9,"$HANDSEED"),l(5,u.toString(16).toUpperCase()),l(9,"$INSUNITS"),l(70,4),l(9,"$MEASUREMENT"),l(70,1),l(9,"$INSBASE"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMIN"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMAX"),l(10,r),l(20,s),l(30,0),l(9,"$LIMMIN"),l(10,0),l(20,0),l(9,"$LIMMAX"),l(10,r),l(20,s),l(9,"$TILEMODE"),l(70,1),l(9,"$CTAB"),l(1,"Model"),l(9,"$CLAYER"),l(8,"0"),l(9,"$CELTYPE"),l(6,"BYLAYER"),l(9,"$TEXTSTYLE"),l(7,Fu),l(9,"$CECOLOR"),l(62,256),l(9,"$LTSCALE"),l(40,1),l(9,"$CELTSCALE"),l(40,1),l(9,"$PSLTSCALE"),l(70,0),l(0,"ENDSEC"),yS(`${o.concat(S).join(`\r
`)}\r
`)}const vS=["LTYPE","LAYER","STYLE","APPID","DIMSTYLE","BLOCK_RECORD"];function ES(a){const r=a.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF structural repair rejected: incomplete group-code/value pairs.");const s=[];for(let o=0;o<r.length;o+=2){const l=Number(r[o].trim());if(!/^\d+$/.test(r[o].trim())||!Number.isInteger(l))throw new Error(`DXF structural repair rejected: invalid group code at line ${o+1}.`);s.push({code:l,value:r[o+1]})}return s}function wS(a){return`${a.flatMap(({code:r,value:s})=>[String(r),s]).join(`\r
`)}\r
`}function xS(a){const r=ES(a),s=new Map;let o="",l=-1;for(let D=0;D<r.length;D+=1){const S=r[D];if(S.code===0&&S.value.trim().toUpperCase()==="SECTION"&&r[D+1]?.code===2){o=r[++D].value.trim().toUpperCase();continue}if(S.code===0&&S.value.trim().toUpperCase()==="ENDSEC"){o==="TABLES"&&(l=D),o="";continue}if(o!=="TABLES"||S.code!==0||S.value.trim().toUpperCase()!=="TABLE")continue;const T=r[D+1]?.code===2?r[D+1].value.trim().toUpperCase():"";if(!T)throw new Error("DXF structural repair rejected: a TABLES record has no table name.");let L=D+1;for(;L<r.length&&!(r[L].code===0&&r[L].value.trim().toUpperCase()==="ENDTAB");)L+=1;if(L>=r.length)throw new Error(`DXF structural repair rejected: ${T} table is missing ENDTAB.`);s.set(T,{start:D,end:L,name:T})}if(l<0)throw new Error("DXF structural repair rejected: TABLES section is missing ENDSEC.");for(const D of vS)if(!s.has(D))throw new Error(`DXF structural repair rejected: required ${D} symbol table is missing; re-save the source as a modern ASCII DXF.`);const u=new Set(r.filter(D=>D.code===5||D.code===105).map(D=>D.value.trim().toUpperCase()).filter(D=>/^[0-9A-F]+$/.test(D)));let m=0n;for(const D of u){const S=BigInt(`0x${D}`);S>m&&(m=S)}const f=()=>{do m+=1n;while(u.has(m.toString(16).toUpperCase()));const D=m.toString(16).toUpperCase();return u.add(D),D},g=(...D)=>{const S=[];for(let T=0;T<D.length;T+=2)S.push({code:Number(D[T]),value:String(D[T+1])});return S},y=[],p=D=>g(0,"TABLE",2,D,5,f(),330,"0",100,"AcDbSymbolTable",70,0,0,"ENDTAB"),b=()=>{const D=f();return g(0,"TABLE",2,"VPORT",5,D,330,"0",100,"AcDbSymbolTable",70,1,0,"VPORT",5,f(),330,D,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0,0,"ENDTAB")},v=["VPORT","VIEW","UCS"].filter(D=>!s.has(D));for(const D of v){const S=D==="VPORT"?b():p(D);r.splice(l,0,...S),l+=S.length,y.push(D)}const w=s.get("VPORT");if(w){let D=!1;for(let S=w.start+1;S<w.end;S+=1){if(r[S].code!==0||r[S].value.trim().toUpperCase()!=="VPORT")continue;let T=S+1;for(;T<w.end&&r[T].code!==0;)T+=1;if(r.slice(S,T).some(L=>L.code===2&&L.value.trim().toUpperCase()==="*ACTIVE")){D=!0;break}S=T-1}if(!D){const S=r.findIndex((x,O)=>O>w.start&&O<w.end&&x.code===0),T=r.slice(w.start+1,S).find(x=>x.code===5)?.value.trim();if(!T)throw new Error("DXF structural repair rejected: VPORT table header has no handle.");const L=r.findIndex((x,O)=>O>w.start&&O<S&&x.code===70);L<0?r.splice(S,0,{code:70,value:"1"}):r[L].value=String(Number(r[L].value)+1);const I=g(0,"VPORT",5,f(),330,T,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0),C=r.findIndex((x,O)=>O>w.start&&x.code===0&&x.value.trim().toUpperCase()==="ENDTAB");r.splice(C,0,...I),y.push("VPORT:*ACTIVE")}}if(!y.length)return{dxf:a,addedTables:y};const _=wS(r);return Hp(_),{dxf:_,addedTables:y}}function eo(a){if(a.byteLength>50*1024*1024)throw new Error("DXF repair limit is 50 MB per file. The original file was not changed.");let r="";const s=a[0]===239&&a[1]===187&&a[2]===191?3:0;for(let f=s;f<a.length;f+=16384)r+=String.fromCharCode(...a.subarray(f,f+16384));if(r.startsWith("AutoCAD Binary DXF"))throw new Error("Binary DXF cannot be repaired in this browser. Save an ASCII DXF copy in AutoCAD first.");const o=Xb(r),l=xS(o.dxf);if(!o.repairs.length&&!l.addedTables.length)return{content:a,repairs:[],addedTables:[]};const u=l.addedTables.length?l.dxf:o.dxf,m=new Uint8Array(u.length);for(let f=0;f<u.length;f+=1)m[f]=u.charCodeAt(f);return{content:m,repairs:o.repairs,addedTables:l.addedTables}}function SS(){const[a,r]=M.useState(""),[s,o]=M.useState(!1),[l,u]=M.useState(!1),m=M.useRef(null);async function f(g){o(!0),u(!1),r("");try{const y=eo(new Uint8Array(await g.arrayBuffer())),p=new Blob([new Uint8Array(y.content)],{type:"application/dxf"}),b=URL.createObjectURL(p),v=document.createElement("a");v.href=b,v.download="REPAIRED_DRAWING.dxf",document.body.appendChild(v),v.click(),v.remove(),window.setTimeout(()=>URL.revokeObjectURL(b),1e4),r(`${y.repairs.length} symbol-table name(s) repaired; validated copy downloaded. Original file unchanged. AutoCAD open test still required.`)}catch(y){u(!0),r(y instanceof Error?y.message:"DXF repair failed. No download was created.")}finally{o(!1)}}return c.jsxs("div",{className:"dxf-repair-control",children:[c.jsx("button",{className:"btn",type:"button",disabled:s,onClick:()=>m.current?.click(),children:s?"Checking DXF…":"Repair an existing DXF"}),c.jsx("input",{ref:m,type:"file",accept:".dxf",disabled:s,"aria-label":"DXF to repair",hidden:!0,onChange:g=>{const y=g.target.files?.[0];g.target.value="",y&&f(y)}}),c.jsx("p",{children:"Local only · Repairs blank ordinary STYLE/DIMSTYLE names and preserves anonymous SHX shape-font STYLE records as DXF requires. Geometry, layers and SHX definitions stay unchanged. Maximum 50 MB."}),a&&c.jsx("p",{role:l?"alert":"status",children:a})]})}const _i=["itemTag","description","equipmentName","equipmentType","nominalDiameter","fluidService","lineSpec","fromTag","toTag","notes"];function Zs(a){if(!Array.isArray(a)||a.length>64)throw new Error("Use at most 64 explicit attribute rules.");const r=new Set;return a.map(s=>{const o=s,l=typeof o?.attributeTag=="string"?o.attributeTag.trim().toUpperCase():"";if(!/^[A-Z][A-Z0-9_-]{0,63}$/.test(l)||r.has(l))throw new Error("Attribute tags must be unique, nonblank CAD field names (for example TAG_NO).");if(!_i.includes(o.edeField)||!["tag","text","number"].includes(o.valueType)||!["inside","above","below"].includes(o.textZone))throw new Error(`Attribute rule ${l} has an unsupported field, value type or text zone.`);return r.add(l),{attributeTag:l,edeField:o.edeField,valueType:o.valueType,textZone:o.textZone}})}function TS(a){const r=new Map;for(const s of a){const o=s.itemTag.trim().toUpperCase();if(!o)continue;const l=r.get(o)??new Set;l.add(s.stableId.toUpperCase()),r.set(o,l)}return[...r].filter(([,s])=>s.size>1).map(([s])=>s).sort()}const Wb=a=>`pid-cad-attribute-rules:v1:${a||"legends-default"}`;function pp(a){const r=localStorage.getItem(Wb(a));return r?Zs(JSON.parse(r)):[]}function AS(a,r){const s=new Map(Zs(a).map(o=>[o.attributeTag,o]));for(const o of Zs(r))s.set(o.attributeTag,o);return Zs([...s.values()])}function DS(a,r){return AS(pp(`${a}:legends-default`),r?pp(`${a}:${r}`):[])}function NS({scope:a}){const[r,s]=M.useState(()=>{try{return pp(a)}catch{return[]}}),[o,l]=M.useState(""),[u,m]=M.useState(!1);function f(g,y){s(p=>p.map((b,v)=>v===g?{...b,...y}:b)),m(!0),l("Unsaved changes: save these rules before downloading a runner.")}return c.jsxs("details",{className:"runner-group-hint",children:[c.jsx("summary",{children:"Block attributes · Arial Narrow text"}),c.jsx("p",{children:"Final text keeps its imported height and position. AutoCAD must have Arial Narrow installed. Global Legends attribute rules are inherited by every project automatically. Rules saved here override the same attribute tags only for this scope. No proven value means review—not guessing."}),r.map((g,y)=>c.jsxs("fieldset",{style:{marginBlock:8},children:[c.jsxs("legend",{children:["Attribute rule ",y+1]}),c.jsxs("label",{children:["Block field ",c.jsx("input",{"aria-label":`Attribute tag ${y+1}`,value:g.attributeTag,onChange:p=>f(y,{attributeTag:p.target.value})})]}),c.jsxs("label",{children:["EDE value ",c.jsx("select",{value:g.edeField,onChange:p=>f(y,{edeField:p.target.value}),children:_i.map(p=>c.jsx("option",{children:p},p))})]}),c.jsxs("label",{children:["Expected type ",c.jsxs("select",{value:g.valueType,onChange:p=>f(y,{valueType:p.target.value}),children:[c.jsx("option",{value:"tag",children:"Tag"}),c.jsx("option",{value:"text",children:"Text"}),c.jsx("option",{value:"number",children:"Number"})]})]}),c.jsxs("label",{children:["PDF text location ",c.jsxs("select",{value:g.textZone,onChange:p=>f(y,{textZone:p.target.value}),children:[c.jsx("option",{value:"inside",children:"Inside symbol"}),c.jsx("option",{value:"above",children:"Above symbol"}),c.jsx("option",{value:"below",children:"Below symbol"})]})]}),c.jsx("button",{className:"btn subtle danger",type:"button",onClick:()=>{s(p=>p.filter((b,v)=>v!==y)),m(!0),l("Save to apply the removal.")},children:"Remove rule"})]},y)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>{s(g=>[...g,{attributeTag:"TAG_NO",edeField:"itemTag",valueType:"tag",textZone:"above"}]),m(!0),l("Save rules before downloading a runner.")},disabled:r.length>=64,children:"Add attribute rule"})," ",c.jsx("button",{className:"btn primary",type:"button",disabled:!u,onClick:()=>{try{const g=Zs(r);localStorage.setItem(Wb(a),JSON.stringify(g)),s(g),m(!1),l("Rules saved locally for this mapping scope.")}catch(g){l(g instanceof Error?g.message:"Rules could not be saved.")}},children:"Save rules"}),o&&c.jsx("p",{role:"status",children:o})]})}const vy=128,Kt=1e-9;function ui(a,r,s){return(r[0]-a[0])*(s[1]-a[1])-(r[1]-a[1])*(s[0]-a[0])}function Bl(a,r,s){return Math.abs(ui(a,r,s))<=Kt&&s[0]>=Math.min(a[0],r[0])-Kt&&s[0]<=Math.max(a[0],r[0])+Kt&&s[1]>=Math.min(a[1],r[1])-Kt&&s[1]<=Math.max(a[1],r[1])+Kt}function CS(a,r,s,o){const l=ui(a,r,s),u=ui(a,r,o),m=ui(s,o,a),f=ui(s,o,r);return(l>Kt&&u<-Kt||l<-Kt&&u>Kt)&&(m>Kt&&f<-Kt||m<-Kt&&f>Kt)?!0:Math.abs(l)<=Kt&&Bl(a,r,s)||Math.abs(u)<=Kt&&Bl(a,r,o)||Math.abs(m)<=Kt&&Bl(s,o,a)||Math.abs(f)<=Kt&&Bl(s,o,r)}function RS(a){return a.reduce((r,s,o)=>{const l=a[(o+1)%a.length];return r+s[0]*l[1]-l[0]*s[1]},0)/2}function as(a){const r=a.split(";").map(o=>o.trim()).filter(Boolean);if(r.length<3||r.length>vy)throw new Error(`Enter 3-${vy} valve-body outline points.`);const s=r.map((o,l)=>{const u=o.split(",").map(f=>f.trim());if(u.length!==2||!u[0]||!u[1])throw new Error(`Mask point ${l+1} must be written as X,Y.`);const m=[Number(u[0]),Number(u[1])];if(!m.every(Number.isFinite))throw new Error(`Mask point ${l+1} must contain finite X,Y values.`);return m});if(s.some((o,l)=>{const u=s[(l+1)%s.length];return Math.hypot(o[0]-u[0],o[1]-u[1])<=Kt}))throw new Error("The valve mask outline cannot contain duplicate adjacent points.");for(let o=0;o<s.length;o+=1){const l=(o+1)%s.length;for(let u=o+1;u<s.length;u+=1){const m=(u+1)%s.length;if(!(o===u||l===u||m===o)&&CS(s[o],s[l],s[u],s[m]))throw new Error("The valve mask outline must not cross or touch itself.")}}if(Math.abs(RS(s))<=Kt)throw new Error("The valve mask outline must enclose an area.");return s}function _S(a){return`(${a.map(([r,s])=>`(${r} ${s})`).join(" ")})`}const fp=["PFD","P&ID","Data sheet"],es=["A0","A1","A2","A3","A4"],Kb="pid-mapping-studio:cad-standards:v1";function hp(){return{schemaVersion:"1.0.0",companyDefaults:{PFD:"A1","P&ID":"A1","Data sheet":"A4"},companyItems:[],projects:{},reviewCandidates:[],auditTrail:[]}}function IS(){return hp()}function ss(a,r,s){return{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:a,detail:r,...s?{projectName:s}:{}}}function gp(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&typeof r.name=="string"&&typeof r.summary=="string"&&typeof r.sourceFile=="string"&&["titleBlock","layer","textStyle","linetype","dimensionStyle","symbol","directionArrow","legend"].includes(String(r.category))&&["extracted-dwg","approved-source-drawing","synthetic-demo"].includes(String(r.sourceKind))&&["company","project"].includes(String(r.scope))&&["reviewed","needs-review"].includes(String(r.reviewStatus))&&typeof r.canPromote=="boolean"&&Array.isArray(r.fields)&&r.fields.every(s=>typeof s?.label=="string"&&typeof s?.value=="string")&&(r.sheetSize===void 0||es.includes(r.sheetSize))&&(r.scope!=="project"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function LS(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&gp(r.item)&&["company","project","unclassified"].includes(String(r.proposedScope))&&typeof r.sourceGroup=="string"&&["needs-review","approved","dismissed"].includes(String(r.status))&&(r.proposedScope==="company"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function Zb(a){if(!a||typeof a!="object")return!1;const r=a;return r.schemaVersion!=="1.0.0"||!r.companyDefaults||!r.companyItems||!Array.isArray(r.companyItems)||!r.projects||typeof r.projects!="object"||r.reviewCandidates!==void 0&&!Array.isArray(r.reviewCandidates)||!Array.isArray(r.auditTrail)||!fp.every(s=>es.includes(r.companyDefaults[s]))||!r.companyItems.every(s=>gp(s)&&s.scope==="company")||!(r.reviewCandidates??[]).every(s=>LS(s))||!r.auditTrail.every(s=>!!(s&&typeof s.id=="string"&&typeof s.at=="string"&&typeof s.action=="string"&&typeof s.detail=="string"))?!1:Object.entries(r.projects).every(([s,o])=>!!(s&&o&&typeof o.projectName=="string"&&o.defaults&&Object.entries(o.defaults).every(([l,u])=>fp.includes(l)&&es.includes(u))&&Array.isArray(o.items)&&o.items.every(l=>gp(l)&&l.scope==="project"&&l.projectId===s)))}const vi="cad-standards-changed";function Ei(a){if(!Zb(a))throw new Error("CAD standards could not be saved because the library data is invalid.");try{window.localStorage.setItem(Kb,JSON.stringify(a))}catch{throw new Error("This browser could not save the CAD standards locally. Export or back up the library before leaving this page.")}typeof window.dispatchEvent=="function"&&window.dispatchEvent(new Event(vi))}function En(){let a;try{a=window.localStorage.getItem(Kb)}catch{throw new Error("This browser could not read its local CAD standards library.")}if(a===null){const g=hp();return Ei(g),g}let r;try{r=JSON.parse(a)}catch{throw new Error("The locally saved CAD standards library is not valid JSON. It was left unchanged.")}if(!Zb(r))throw new Error("The locally saved CAD standards library has invalid fields. It was left unchanged.");const s={...r,reviewCandidates:r.reviewCandidates??[]},o=hp(),l=o.companyItems.filter(g=>!s.companyItems.some(y=>y.id===g.id)),u=new Set(s.reviewCandidates.map(g=>g.id)),m=o.reviewCandidates.filter(g=>!u.has(g.id));if(!l.length&&!m.length)return s;const f={...s,companyItems:[...s.companyItems,...l],reviewCandidates:[...s.reviewCandidates,...m],auditTrail:[...s.auditTrail,ss("Source mappings added to review queue",`${m.length} anonymized source mappings were added as pending review. Existing approvals, dismissals, and project settings were preserved.`)]};return Ei(f),f}function Qb(a,r,s){const o=[...a.companyItems.map(m=>({item:m,scopePriority:0})),...r?(a.projects[r]?.items??[]).map(m=>({item:m,scopePriority:2})):[]],l=new Map;for(const{item:m,scopePriority:f}of o){if(!["layer","textStyle","linetype","dimensionStyle"].includes(m.category)||m.sourceKind!=="extracted-dwg"||m.reviewStatus!=="reviewed")continue;const g=_=>m.fields.find(D=>D.label===_)?.value?.trim()??"",y=g("CAD name"),p=g("Source discipline");if(!y)throw new Error(`Reviewed Legends Library ${m.category} standard "${m.name}" has no CAD name. Re-extract it before generating the runner.`);if(!["Shared",s].includes(p))continue;const b=g("Extracted details"),v=`${m.category}:${y.toUpperCase()}`,w=l.get(v)??[];w.push({item:m,priority:f+(p===s?1:0),cadName:y,sourceDiscipline:p,detail:b}),l.set(v,w)}const u=[];for(const m of l.values()){const f=Math.max(...m.map(p=>p.priority)),g=m.filter(p=>p.priority===f).sort((p,b)=>p.item.id.localeCompare(b.item.id));if(new Set(g.map(p=>p.detail)).size>1){const p=g[0];throw new Error(`Conflicting reviewed Legends Library ${p.item.category} standards named "${p.cadName}" for ${p.sourceDiscipline}. Resolve the duplicate before generating the runner.`)}u.push(g[0].item)}return u.sort((m,f)=>m.category.localeCompare(f.category)||m.name.localeCompare(f.name))}function PS(a,r,s){const o=Qb(a,r,s),l=(f,g)=>f.fields.find(y=>y.label===g)?.value?.trim()??"";if(!o.some(f=>f.category==="layer")||!o.some(f=>f.category==="textStyle"&&/(?:^|;)font=(?:[^;]*[\\/])?arial(?:n|narrow)(?:\.ttf)?(?:;|$)/i.test(l(f,"Extracted details"))))throw new Error("LEGENDS_LIBRARY_INCOMPLETE: reviewed CAD layers and Arial Narrow text styles are required. Import/review the private Legends Library once in this browser; company approvals then apply to every project automatically. No approximate runner was downloaded.");const u=new Set(o.map(f=>l(f,"Source drawing ID")).filter(Boolean)),m=a.reviewCandidates.filter(f=>f.status==="needs-review"&&["layer","textStyle","linetype","dimensionStyle"].includes(f.item.category)&&u.has(l(f.item,"Source drawing ID"))&&(f.proposedScope!=="project"||f.projectId===r)&&["Shared",s].includes(l(f.item,"Source discipline")));if(m.length)throw new Error(`LEGENDS_LIBRARY_INCOMPLETE: ${m.length} standard record(s) from the active Legends source still need review. Existing approvals were preserved; no partial standards runner was downloaded.`);return o}function kS(a,r){return a.some(s=>s.category==="titleBlock"&&s.reviewStatus==="reviewed"&&(s.sheetSize===r||s.fields.some(o=>o.label==="Sheet size"&&o.value===r)))}function OS(a,r,s){if(a.companyDefaults[r]===s)return a;if(!kS(a.companyItems,s))throw new Error(`Approve a company title-block mapping for ${s} before making it a company default.`);return{...a,companyDefaults:{...a.companyDefaults,[r]:s},auditTrail:[ss("Company sheet-size default changed",`${r} changed to ${s} after an approved company title-block mapping was available.`),...a.auditTrail]}}function nc(a,r,s,o=[],l){const u=a.reviewCandidates.find(w=>w.id===r);if(!u||u.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");if(s==="company"&&u.proposedScope!=="company")throw new Error("Only a source classified for the Legends Library can be approved there.");if(s==="project"&&u.proposedScope==="company")throw new Error("Legends Library source mappings must be approved to the Legends Library.");if(l&&!(u.item.sourceKind==="extracted-dwg"&&["symbol","directionArrow"].includes(u.item.category)&&["symbol","directionArrow"].includes(l)))throw new Error("Only an extracted CAD block can be reviewed as a Direction Arrow or a standard symbol.");const m=l??u.item.category;let f=[...u.item.fields.filter(w=>!o.some(_=>_.label===w.label)),...o];if(m==="directionArrow"&&(f=f.filter(w=>!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(w.label))),m==="symbol"&&u.item.sourceKind==="extracted-dwg"&&(!f.some(w=>w.label==="Fallback category"&&w.value.trim())||!f.some(w=>w.label==="Block asset ID"&&w.value.trim())))throw new Error("A fallback category and locally extracted block file are required before approving this symbol.");if(m==="symbol"&&u.item.sourceKind==="extracted-dwg"&&f.find(w=>w.label==="Fallback category")?.value.trim().toLowerCase()==="valve"){const w=f.find(_=>_.label==="Wipeout mask boundary")?.value??"";try{as(w)}catch(_){throw new Error(`A reviewed valve-body mask outline is required before approving this valve. ${_ instanceof Error?_.message:"Check the X,Y point list."}`)}}if(m==="symbol"&&u.item.sourceKind==="extracted-dwg"){const w=f.find(T=>T.label==="Target CAD layer")?.value.trim()??"",_=f.find(T=>T.label==="Source discipline")?.value.trim()??"";if(!(s==="company"?a.companyItems:[...u.projectId?a.projects[u.projectId]?.items??[]:[],...a.companyItems]).some(T=>{if(T.category!=="layer"||T.sourceKind!=="extracted-dwg"||T.reviewStatus!=="reviewed")return!1;const L=T.fields.find(x=>x.label==="CAD name")?.value.trim()??"",I=T.fields.find(x=>x.label==="Source discipline")?.value.trim()??"",C=_==="Shared"?I==="Shared":I==="Shared"||I===_;return w&&w.toUpperCase()!=="0"&&L.toLowerCase()===w.toLowerCase()&&C}))throw new Error("Approve a compatible non-zero CAD layer before approving this symbol. Layer 0 cannot be used for block placement.")}const g={...u.item,category:m,fields:f,scope:s,reviewStatus:"reviewed",canPromote:!1,...s==="project"?{projectId:u.projectId,projectName:u.projectName}:{projectId:void 0,projectName:void 0}};let y=a.companyItems,p=a.projects;if(s==="company")y=[...a.companyItems.filter(w=>w.id!==g.id),g];else{const w=u.projectId,_=u.projectName;if(!w||!_)throw new Error("The isolated project scope is not available for this mapping.");const D=a.projects[w]??{projectName:_,defaults:{},items:[]};p={...a.projects,[w]:{...D,projectName:_,items:[...D.items.filter(S=>S.id!==g.id),g]}}}const b=a.reviewCandidates.map(w=>w.id===r?{...w,status:"approved"}:w),v=s==="company"?"Legends Library":`isolated ${u.projectName} library`;return{...a,companyItems:y,projects:p,reviewCandidates:b,auditTrail:[ss("Source mapping approved",`${m} mapping ${u.item.name} was approved to ${v}.`,u.projectName),...a.auditTrail]}}const mp={EQUIP:{layerName:"EQUIP",fallbackCategory:"equipment"},F_EQUIP:{layerName:"f_Equip",fallbackCategory:"equipment"},F_INST:{layerName:"f_Inst",fallbackCategory:"instrument"},F_PIPE_INLINE:{layerName:"f_Pipe_Inline",fallbackCategory:"inline component"}};function yp(a,r){return a.item.fields.find(s=>s.label===r)?.value.trim()??""}function jS(a,r,s){return[...a.filter(o=>o.label!==r),{label:r,value:s}]}function qS(a){const o=yp(a,"Extracted details").match(/(?:^|;)sourceLayer=([^;]*)/i)?.[1]??yp(a,"Source insert layer(s)");return[...new Set(o.split(",").map(l=>l.trim().toUpperCase()).filter(Boolean))]}function Jr(a){return a.fields.find(r=>r.label==="CAD name")?.value.trim()??""}function MS(a){return a.fields.find(r=>r.label==="Source drawing ID")?.value.trim()??""}function Ey(a){return a.fields.find(r=>r.label==="Extracted details")?.value.trim()??""}function Jb(a){return a.fields.find(r=>r.label==="Source discipline")?.value.trim()??""}function $S(a,r){return a.category==="layer"&&a.sourceKind==="extracted-dwg"&&a.reviewStatus==="reviewed"&&a.scope==="company"&&Jr(a).toUpperCase()===r.toUpperCase()&&Jb(a).toUpperCase()==="SHARED"}function FS(a,r,s){const o=new Set(r),l={unsupportedLayer:0,ambiguousLayer:0,missingAsset:0,missingLayer:0,invalidCandidate:0},u=a.reviewCandidates.filter(v=>v.status==="needs-review"&&v.proposedScope==="company"&&o.has(v.sourceGroup)),m=new Map,f=[];for(const v of u){if(v.item.category!=="symbol"||v.item.sourceKind!=="extracted-dwg")continue;const w=qS(v);if(w.length!==1){l.ambiguousLayer+=w.length>1?1:0,l.unsupportedLayer+=w.length===0?1:0;continue}const _=w[0].toUpperCase(),D=mp[_];if(!D){l.unsupportedLayer+=1;continue}const S=yp(v,"Block asset ID");if(!S||!s.has(S)){l.missingAsset+=1;continue}const T=`${v.sourceGroup}|${_}`;m.set(T,{sourceId:v.sourceGroup,layerName:D.layerName}),f.push({candidateId:v.id,sourceId:v.sourceGroup,layerKey:T,fallbackCategory:D.fallbackCategory,blockAssetId:S})}let g=a;const y=new Map;let p=0;for(const[v,w]of m){const _=g.companyItems.find(T=>T.category==="layer"&&T.sourceKind==="extracted-dwg"&&T.reviewStatus==="reviewed"&&MS(T)===w.sourceId&&Jr(T).toUpperCase()===w.layerName.toUpperCase());if(_){const T={..._,fields:jS(_.fields,"Source discipline","Shared")};g={...g,companyItems:g.companyItems.map(L=>L.id===_.id?T:L),reviewCandidates:g.reviewCandidates.map(L=>L.id===_.id?{...L,item:T}:L)},Jb(_).toUpperCase()!=="SHARED"&&(p+=1),y.set(v,Jr(T));continue}const D=g.reviewCandidates.find(T=>T.status==="needs-review"&&T.proposedScope==="company"&&T.sourceGroup===w.sourceId&&T.item.category==="layer"&&T.item.sourceKind==="extracted-dwg"&&Jr(T.item).toUpperCase()===w.layerName.toUpperCase()),S=g.companyItems.find(T=>$S(T,w.layerName));if(S){const T=D?Ey(D.item):"",L=Ey(S);if(!D||T&&T===L){y.set(v,Jr(S));continue}l.invalidCandidate+=1;continue}if(!D){l.missingLayer+=1;continue}try{g=nc(g,D.id,"company",[{label:"Source discipline",value:"Shared"}]);const T=g.companyItems.find(I=>I.id===D.item.id),L=Jr(T||D.item);y.set(v,L),p+=1}catch{l.invalidCandidate+=1}}let b=0;for(const v of f){const w=y.get(v.layerKey);if(!w){l.missingLayer+=1;continue}try{g=nc(g,v.candidateId,"company",[{label:"Source discipline",value:"Shared"},{label:"Fallback category",value:v.fallbackCategory},{label:"Target CAD layer",value:w}]),b+=1}catch{l.invalidCandidate+=1}}return(p||b)&&(g={...g,auditTrail:[ss("Categorized CAD source batch approved",`${p} placement layer(s) and ${b} layer-matched symbol(s) approved for shared PFD/P&ID use.`),...a.auditTrail]}),{library:g,approvedLayers:p,approvedSymbols:b,skipped:l}}function US(a,r,s){const o=a.companyItems.find(p=>p.id===r),l=Object.entries(a.projects).find(([,p])=>p.items.some(b=>b.id===r)),u=o??l?.[1].items.find(p=>p.id===r);if(!u||u.reviewStatus!=="reviewed")throw new Error("The selected approved CAD mapping is no longer available.");if(u.category!=="symbol"||u.sourceKind!=="extracted-dwg")throw new Error("Only reviewed extracted symbol mappings can be updated here.");const m=[...u.fields.filter(p=>!s.some(b=>b.label===p.label)),...s];if(m.find(p=>p.label==="Fallback category")?.value.trim().toLowerCase()==="valve")try{as(m.find(p=>p.label==="Wipeout mask boundary")?.value??"")}catch(p){throw new Error(`A reviewed valve-body mask outline is required. ${p instanceof Error?p.message:"Check the X,Y point list."}`)}const f={...u,fields:m},g=o?a.companyItems.map(p=>p.id===r?f:p):a.companyItems,y=l?{...a.projects,[l[0]]:{...l[1],items:l[1].items.map(p=>p.id===r?f:p)}}:a.projects;return{...a,companyItems:g,projects:y,auditTrail:[ss("Reviewed valve mask updated",`The approved symbol mapping ${u.name} received a reviewed Wipeout mask outline.`,u.projectName),...a.auditTrail]}}function BS(a,r){const s=a.reviewCandidates.find(o=>o.id===r);if(!s||s.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");return{...a,reviewCandidates:a.reviewCandidates.map(o=>o.id===r?{...o,status:"dismissed"}:o),auditTrail:[ss("Source mapping dismissed",`${s.item.category} mapping ${s.item.name} was dismissed from the review queue.`,s.projectName),...a.auditTrail]}}function zS(a,r,s,o,l){if(!r.trim()||!s.trim())throw new Error("Choose a project before saving its title-block override.");const u=a.projects[r]??{defaults:{},items:[]},m={...u.defaults,[o]:l},f=[...a.projects[r]?.items??[],...a.companyItems].find(b=>b.category==="titleBlock"&&b.reviewStatus==="reviewed"&&(b.sheetSize===l||b.fields.some(v=>v.label==="Sheet size"&&v.value===l)));if(!f)throw new Error(`Approve a title-block mapping for ${l} before saving this project default.`);const g=`project-default-${o.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,y={...f,id:g,name:`${l} · ${o} project default`,summary:`Project-only choice for ${o}. The company default remains ${a.companyDefaults[o]}.`,scope:"project",projectId:r,projectName:s,canPromote:!1,fields:[...f.fields,{label:"Override purpose",value:o},{label:"Project choice",value:l},{label:"Company default",value:a.companyDefaults[o]}]};return{...a,projects:{...a.projects,[r]:{projectName:s,defaults:m,items:[...u.items.filter(b=>b.id!==g),y]}},auditTrail:[ss("Project title-block override saved",`${o} set to ${l}; company default remains ${a.companyDefaults[o]}. Other project libraries are unchanged.`,s),...a.auditTrail]}}const Bu=4294967295,YS=(()=>{const a=new Uint32Array(256);for(let r=0;r<a.length;r+=1){let s=r;for(let o=0;o<8;o+=1)s=s&1?3988292384^s>>>1:s>>>1;a[r]=s>>>0}return a})();function zu(a,r){const s=new Uint8Array(a);return r(new DataView(s.buffer)),s}function wy(a){return a.buffer instanceof ArrayBuffer?new Uint8Array(a.buffer,a.byteOffset,a.byteLength):a.slice().buffer}function HS(a,r){if(a.length===0)throw new Error("The runner ZIP contains no files.");if(a.length>65535)throw new Error("The local ZIP cannot contain more than 65,535 files.");const s=new TextEncoder,o=[],l=[];let u=0,m=0;for(const[g,y]of a.entries()){const p=s.encode(y.path),b=y.content.byteLength;if(!p.length||p.length>65535)throw new Error(`A runner ZIP path is empty or too long: ${y.path||"(empty path)"}`);if(b>Bu)throw new Error(`A file is too large for a standard ZIP archive: ${y.path}`);if(u+30+p.length+b>Bu)throw new Error("The runner ZIP is larger than the supported 4 GB ZIP limit.");let v=4294967295;for(let S=0;S<b;S+=1){const T=y.content[S];v=YS[(v^T)&255]^v>>>8}const w=(v^4294967295)>>>0,_=zu(30+p.length,S=>{S.setUint32(0,67324752,!0),S.setUint16(4,20,!0),S.setUint16(6,2048,!0),S.setUint16(8,0,!0),S.setUint16(10,0,!0),S.setUint16(12,33,!0),S.setUint32(14,w,!0),S.setUint32(18,b,!0),S.setUint32(22,b,!0),S.setUint16(26,p.length,!0),S.setUint16(28,0,!0),new Uint8Array(S.buffer,30,p.length).set(p)});o.push(_,wy(y.content));const D=zu(46+p.length,S=>{S.setUint32(0,33639248,!0),S.setUint16(4,20,!0),S.setUint16(6,20,!0),S.setUint16(8,2048,!0),S.setUint16(10,0,!0),S.setUint16(12,0,!0),S.setUint16(14,33,!0),S.setUint32(16,w,!0),S.setUint32(20,b,!0),S.setUint32(24,b,!0),S.setUint16(28,p.length,!0),S.setUint16(30,0,!0),S.setUint16(32,0,!0),S.setUint16(34,0,!0),S.setUint16(36,0,!0),S.setUint32(38,0,!0),S.setUint32(42,u,!0),new Uint8Array(S.buffer,46,p.length).set(p)});if(l.push(D),m+=D.length,u+=_.length+b,m>Bu)throw new Error("The runner ZIP index is larger than the supported 4 GB ZIP limit.")}const f=zu(22,g=>{g.setUint32(0,101010256,!0),g.setUint16(4,0,!0),g.setUint16(6,0,!0),g.setUint16(8,a.length,!0),g.setUint16(10,a.length,!0),g.setUint32(12,m,!0),g.setUint32(16,u,!0),g.setUint16(20,0,!0)});return new Blob([...o,...l.map(wy),f],{type:"application/zip"})}function VS(a){return HS(a)}function GS(a,r){return typeof Worker>"u"?Promise.reject(new Error("This browser cannot prepare a large runner ZIP in the background. Open the app in current Chrome or Edge and retry.")):new Promise((s,o)=>{let l;try{l=new Worker(new URL("/pid-mapping-studio-app/assets/zip-binary.worker-BYy3I0Xl.js",import.meta.url),{type:"module"})}catch{o(new Error("The background ZIP worker could not start. Refresh the app and retry in Chrome or Edge."));return}let u=!1;const m=window.setTimeout(()=>{f(new Error("Runner ZIP preparation exceeded 10 minutes. The current download was not created; try a smaller PDF batch."))},600*1e3),f=(g,y)=>{u||(u=!0,window.clearTimeout(m),l.terminate(),g?o(g):y?s(y):o(new Error("The background ZIP worker returned no download file.")))};l.onmessage=g=>{g.data.type==="progress"&&g.data.progress?r?.(g.data.progress):g.data.type==="complete"&&g.data.blob?f(void 0,g.data.blob):g.data.type==="error"&&f(new Error(g.data.message||"Runner ZIP preparation failed."))},l.onerror=g=>{g.preventDefault(),f(new Error(g.message||"The background ZIP worker failed."))};try{const g=new Set,y=a.map(p=>{let b,v=p.content.byteOffset,w=p.content.byteLength;if(p.content.buffer instanceof ArrayBuffer)b=p.content.buffer;else{const _=new Uint8Array(p.content);b=_.buffer,v=0,w=_.byteLength}return g.add(b),{path:p.path,buffer:b,byteOffset:v,byteLength:w}});l.postMessage({files:y},[...g])}catch(g){f(g instanceof Error?g:new Error("Runner files could not be sent to the ZIP worker."))}})}function XS(a,r,s){return a.filter(o=>(o.discipline===r||o.discipline==="Shared")&&(!s||o.category==="company-standard"||o.projectLabel===s))}const WS="pid-mapping-studio-local-cad-library",KS=3,Tn="source-drawings",An="extracted-block-assets",Lr="project-title-blocks",ev=100*1024*1024;function ZS(a,r){if(!/\.dwg$/i.test(a.trim()))throw new Error("Upload a standalone AutoCAD DWG title block. Save a DWT as DWG first.");if(r.byteLength>ev)throw new Error("The project title block is larger than the 100 MB local upload limit.");const s=new TextDecoder().decode(r.subarray(0,6));if(!/^AC10\d{2}$/.test(s))throw new Error("This file does not have a recognized AutoCAD DWG header.")}function un(){return typeof indexedDB>"u"?Promise.reject(new Error("This browser does not support local drawing-library storage.")):new Promise((a,r)=>{const s=indexedDB.open(WS,KS);s.onupgradeneeded=()=>{const o=s.result;o.objectStoreNames.contains(Tn)||o.createObjectStore(Tn,{keyPath:"id"}),o.objectStoreNames.contains(An)||o.createObjectStore(An,{keyPath:"id"}),o.objectStoreNames.contains(Lr)||o.createObjectStore(Lr,{keyPath:"projectId"})},s.onsuccess=()=>a(s.result),s.onerror=()=>r(s.error??new Error("The local drawing library could not be opened.")),s.onblocked=()=>r(new Error("The local drawing library is busy in another browser tab. Close the other tab and try again."))})}async function rc(){const a=await un();try{return await new Promise((r,s)=>{const l=a.transaction(Tn,"readonly").objectStore(Tn).getAll();l.onsuccess=()=>{const u=l.result;r(u.map(({id:m,label:f,category:g,discipline:y,format:p,bytes:b,projectLabel:v,standardsMaster:w})=>({id:m,label:f,category:g,discipline:y??"Shared",format:p??"DWG",bytes:b,...v?{projectLabel:v}:{},...w?{standardsMaster:!0}:{}})).sort((m,f)=>m.label.localeCompare(f.label)))},l.onerror=()=>s(l.error??new Error("The local drawing library could not be read."))})}finally{a.close()}}async function Qs(a){const r=await un();try{return await new Promise((s,o)=>{const l=r.transaction(Tn,"readonly").objectStore(Tn).get(a);l.onsuccess=()=>{const u=l.result;if(!u){o(new Error("An approved mapping refers to a source DWG that is no longer in the local library."));return}s(new Uint8Array(u.content))},l.onerror=()=>o(l.error??new Error("The local source drawing could not be read."))})}finally{r.close()}}async function bp(a,r=!1){if(!a.length)return;const s=await un();try{await new Promise((o,l)=>{const u=s.transaction(An,"readwrite"),m=u.objectStore(An);for(const f of a){const g=m.get(f.id);g.onsuccess=()=>{const y=g.result;if(r&&y)return;const p={id:f.id,sourceId:f.sourceId,blockName:f.blockName,content:f.content.slice().buffer,format:f.format??y?.format??"DWG",...f.previewSvg===null?{}:f.previewSvg!==void 0?{previewSvg:f.previewSvg}:y?.previewSvg?{previewSvg:y.previewSvg}:{},...f.nearbyLabels!==void 0?{nearbyLabels:f.nearbyLabels}:y?.nearbyLabels?{nearbyLabels:y.nearbyLabels}:{},...f.labelMatchSkipped!==void 0?{labelMatchSkipped:f.labelMatchSkipped}:y?.labelMatchSkipped!==void 0?{labelMatchSkipped:y.labelMatchSkipped}:{},...f.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:f.labelMatchAmbiguous}:y?.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:y.labelMatchAmbiguous}:{},...f.sourcePlacements!==void 0?{sourcePlacements:f.sourcePlacements}:y?.sourcePlacements?{sourcePlacements:y.sourcePlacements}:{},...f.geometryDescriptor!==void 0?{geometryDescriptor:f.geometryDescriptor}:y?.geometryDescriptor?{geometryDescriptor:y.geometryDescriptor}:{}};m.put(p)}}u.oncomplete=()=>o(),u.onerror=()=>l(u.error??new Error("Extracted symbol blocks could not be saved locally.")),u.onabort=()=>l(u.error??new Error("Saving extracted symbol blocks was cancelled."))})}finally{s.close()}}async function QS(){const a=await un();try{return await new Promise((r,s)=>{const o=a.transaction(An,"readonly").objectStore(An).getAllKeys();o.onsuccess=()=>r(new Set(o.result.map(String))),o.onerror=()=>s(o.error??new Error("Local block availability could not be checked."))})}finally{a.close()}}async function tv(a){const r=await un();try{return await new Promise((s,o)=>{const l=r.transaction(An,"readonly").objectStore(An).get(a);l.onsuccess=()=>{const u=l.result;if(!u){s({nearbyLabels:[],labelMatchSkipped:!1});return}s({format:u.format??"DWG",...u.previewSvg?{previewSvg:u.previewSvg}:{},nearbyLabels:u.nearbyLabels??[],labelMatchSkipped:u.labelMatchSkipped??!1,...u.labelMatchAmbiguous?{labelMatchAmbiguous:!0}:{},...u.sourcePlacements?{sourcePlacements:u.sourcePlacements}:{},...u.geometryDescriptor?{geometryDescriptor:u.geometryDescriptor}:{}})},l.onerror=()=>o(l.error??new Error("The local block preview could not be read."))})}finally{r.close()}}async function av(a){const r=await un();try{return await new Promise((s,o)=>{const l=r.transaction(An,"readonly").objectStore(An).get(a);l.onsuccess=()=>{const u=l.result;if(!u){o(new Error("An approved symbol block is missing from this browser’s local CAD library. Re-import its extraction package."));return}s(new Uint8Array(u.content))},l.onerror=()=>o(l.error??new Error("The approved symbol block could not be read locally."))})}finally{r.close()}}async function vc(a){if(!a.trim())return null;const r=await un();try{return await new Promise((s,o)=>{const l=r.transaction(Lr,"readonly").objectStore(Lr).get(a);l.onsuccess=()=>s(l.result??null),l.onerror=()=>o(l.error??new Error("The project title block could not be read locally."))})}finally{r.close()}}function Vp(a,r){if(a.workspaceType&&a.workspaceType!==r)throw new Error(`This title block belongs to ${a.workspaceType}, not ${r}. Upload a separate title block for each workspace.`);return{projectId:a.projectId,workspaceType:r,titleBlockId:a.titleBlockId??`legacy-${a.projectId}-${a.uploadedAt}`,titleBlockPath:a.titleBlockPath??"PROJECT_TITLE_BLOCK.dwg",xrefName:a.xrefName??"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:a.expectedSize??{widthMm:841,heightMm:594},version:a.version??1,bytes:a.bytes,uploadedAt:a.uploadedAt}}async function xy(a,r){const s=await vc(a);return s?Vp(s,r):null}async function JS(a,r){const s=await vc(a);return s?{...Vp(s,r),content:new Uint8Array(s.content)}:null}async function eT(a,r,s,o){if(!a.trim())throw new Error("Select a project before uploading its title block.");if(!["PFD","P&ID"].includes(r))throw new Error("Choose either a PFD or P&ID workspace for this title block.");ZS(s,o);const l=await vc(a);if(l?.workspaceType&&l.workspaceType!==r)throw new Error(`This folder already has a ${l.workspaceType} title block. Keep PFD and P&ID title blocks in separate workspaces.`);const u=new Date().toISOString(),m=(l?.version??(l?1:0))+1,f={projectId:a,workspaceType:r,titleBlockId:globalThis.crypto?.randomUUID?.()??`title-block-${Date.now()}`,titleBlockPath:"PROJECT_TITLE_BLOCK.dwg",xrefName:"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:{widthMm:841,heightMm:594},version:m,bytes:o.byteLength,uploadedAt:u,content:o.slice().buffer},g=await un();try{await new Promise((y,p)=>{const b=g.transaction(Lr,"readwrite");b.objectStore(Lr).put(f),b.oncomplete=()=>y(),b.onerror=()=>p(b.error??new Error("The project title block could not be saved locally.")),b.onabort=()=>p(b.error??new Error("Saving the project title block was cancelled."))})}finally{g.close()}return{...Vp(f,r)}}async function tT(a,r){if(!a.trim())return;const s=await vc(a);if(s?.workspaceType&&s.workspaceType!==r)throw new Error(`This title block belongs to ${s.workspaceType}; it was not removed from the ${r} workspace.`);const o=await un();try{await new Promise((l,u)=>{const m=o.transaction(Lr,"readwrite");m.objectStore(Lr).delete(a),m.oncomplete=()=>l(),m.onerror=()=>u(m.error??new Error("The project title block could not be removed locally.")),m.onabort=()=>u(m.error??new Error("Removing the project title block was cancelled."))})}finally{o.close()}}async function aT(a){if(!a.length)return;const r=await un();try{await new Promise((s,o)=>{const l=r.transaction(Tn,"readwrite"),u=l.objectStore(Tn);for(const m of a){const f=m.content.slice().buffer,{content:g,...y}=m;u.put({...y,content:f,createdAt:new Date().toISOString()})}l.oncomplete=()=>s(),l.onerror=()=>o(l.error??new Error("The local drawing library could not be saved.")),l.onabort=()=>o(l.error??new Error("The local drawing library save was cancelled."))})}finally{r.close()}}async function nT(a,r){const s=await un();try{await new Promise((o,l)=>{const u=s.transaction(Tn,"readwrite"),m=u.objectStore(Tn),f=m.get(a);f.onsuccess=()=>{const g=f.result;if(!g){u.abort(),l(new Error("That source drawing is no longer in the local library."));return}m.put({...g,...r,standardsMaster:r.category==="company-standard"&&g.format==="DXF"?r.standardsMaster??g.standardsMaster:!1,projectLabel:r.projectLabel?.trim()||void 0})},f.onerror=()=>l(f.error??new Error("The source drawing could not be updated.")),u.oncomplete=()=>o(),u.onerror=()=>l(u.error??new Error("The source drawing update failed.")),u.onabort=()=>l(u.error??new Error("The source drawing update was cancelled."))})}finally{s.close()}}const rT=String.raw`
(defun pid:dxf-symbol-names-valid (path / stream code-line value code section table record needs-name has-name name-value flags font names tables eof problem line)
  (setq stream (open path "r") line 0)
  (if stream
    (progn
      (while (and (not problem) (setq code-line (read-line stream)))
        (setq value (read-line stream) line (+ line 2))
        (if (null value)
          (setq problem "incomplete group-code/value pair")
          (progn
            (setq code (atoi code-line))
            (cond
              ((= code 0)
                (if needs-name
                  (cond
                    ((not has-name)
                      (setq problem (strcat table " record is missing its name"))
                    )
                    ((and (equal table "STYLE") (= (logand flags 1) 1))
                      (if (or (/= name-value "") (= font ""))
                        (setq problem "STYLE shape-file record must have an empty name and a group-3 SHX filename")
                      )
                    )
                    ((or (= name-value "") (/= name-value (vl-string-trim " \t" name-value))
                         (not
                           (or (snvalid name-value 1)
                             (and (member table '("BLOCK_RECORD" "VPORT"))
                               (= (substr name-value 1 1) "*") (snvalid (substr name-value 2)))
                           )
                         )
                      )
                      (setq problem (strcat table " record has a blank or invalid name"))
                    )
                    ((member (strcase name-value) names)
                      (setq problem (strcat table " record has a duplicate name"))
                    )
                    (T (setq names (cons (strcase name-value) names)))
                  )
                )
                (setq record (strcase value) needs-name nil has-name nil name-value nil flags 0 font "")
                (if (equal record "EOF") (setq eof T))
                (cond
                  ((equal record "ENDSEC") (setq section nil table nil))
                  ((equal record "ENDTAB") (setq table nil))
                  ((and (equal section "TABLES") table (equal record table))
                    (setq needs-name T)
                  )
                )
              )
              ((= code 2)
                (cond
                  ((equal record "SECTION") (setq section (strcase value)))
                  ((and (equal section "TABLES") (equal record "TABLE"))
                    (setq table (strcase value) names nil)
                    (setq tables (cons table tables))
                    (if (= (vl-string-trim " \t" table) "") (setq problem "blank table name"))
                  )
                  (needs-name
                    (if has-name (setq problem (strcat table " record has multiple name fields")))
                    (setq has-name T)
                    (setq name-value value)
                  )
                )
              )
              ((and needs-name (equal table "STYLE") (= code 70))
                (setq flags (atoi value))
              )
              ((and needs-name (equal table "STYLE") (= code 3))
                (setq font value)
              )
            )
          )
        )
      )
      (close stream)
      (if (and (not problem) (not eof)) (setq problem "missing EOF"))
      (if (and (not problem) (not (and (member "STYLE" tables) (member "DIMSTYLE" tables))))
        (setq problem "missing STYLE or DIMSTYLE table")
      )
      (if problem
        (progn
          (prompt (strcat "\nDXF validation FAILED at line " (itoa line) ": " problem
            ". Do not open or import this output. Use Repair an existing DXF in the app to create a checked copy."))
          nil
        )
        T
      )
    )
    (progn (prompt "\nDXF validation FAILED: could not read the exported file.") nil)
  )
)
`;function ti(a,r){let s=0,o=!1,l=!1,u=0;for(let m=0;m<=a.length;m+=1){const f=a[m];if(o?l?l=!1:f==="\\"?l=!0:f==='"'&&(o=!1):f==='"'?o=!0:f==="("?u+=1:f===")"&&(u-=1),m===a.length||f===";"&&!o&&u===0){const g=a.slice(s,m).trim(),y=g.indexOf("=");if(g.slice(0,y).trim().toLowerCase()===r.toLowerCase())return g.slice(y+1).trim();s=m+1}}}function Sy(a){if(/^nil$/i.test(a.trim()))return[];let r=0;const s=()=>{for(;/\s/.test(a[r]??"")&&r<a.length;)r+=1},o=g=>{if(s(),!a.startsWith(g,r))throw new Error("Invalid DXF property list.");r+=g.length},l=()=>{s();const g=a.slice(r).match(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/i)?.[0];if(!g||!Number.isFinite(Number(g)))throw new Error("Invalid DXF numeric property.");return r+=g.length,Number(g)},u=()=>{o('"');let g="";for(;r<a.length;){const y=a[r++];if(y==='"')return g;if(y==="\\"){const p=a[r++];if(p!=="\\"&&p!=='"')throw new Error("Unsupported DXF string escape.");g+=p}else{if(y.charCodeAt(0)<32)throw new Error("Invalid control character in DXF property.");g+=y}}throw new Error("Unterminated DXF string.")};o("(");const m=[],f=new Set;for(;;){if(s(),a[r]===")"){r+=1;break}o("(");const g=l();if(!Number.isInteger(g)||f.has(g))throw new Error("Duplicate or invalid DXF property code.");f.add(g),o("."),s();const y=a[r]==='"'?u():l();if(o(")"),m.push([g,y]),m.length>200)throw new Error("Too many DXF properties.")}if(s(),r!==a.length)throw new Error("Unexpected code after DXF properties.");return m}function sT(a){return a>=40&&a<=99&&a!==70||a>=140&&a<=149||a>=170&&a<=179||a>=270&&a<=299||a>=370&&a<=389||a>=420&&a<=429||a>=440&&a<=459}function oT(a,r){const s=o=>{throw new Error(`Legends dimension style "${a}": ${o} Re-extract it with the current local extractor; partial dimension settings are not substituted.`)};ti(r,"format")!=="DXF_PROPERTIES_V1"&&s("complete DXF properties are missing."),ti(r,"recordComplete")!=="1"&&s("the complete native DXF table-record declaration is missing."),/^(?:\(\s*\)|nil)$/i.test(ti(r,"unsupportedCodes")??"")||s("unsupported source properties were reported.");try{const o=Sy(ti(r,"dxfData")??""),l=Sy(ti(r,"resources")??"");return o.every(([u,m])=>sT(u)&&typeof m=="number"||[3,4].includes(u)&&typeof m=="string")||s("invalid property type."),l.every(([u,m])=>u>=340&&u<=347&&typeof m=="string"&&m.trim())||s("invalid named resource."),l.some(([u])=>u===340)||s("the source text-style reference is missing."),{properties:o,resources:l}}catch(o){if(o instanceof Error&&o.message.startsWith("Legends dimension style"))throw o;return s(o instanceof Error?o.message:"invalid DXF properties.")}}const iT=String.raw`
(defun pid:dim-scalar-code-p (code)
  (or (and (>= code 40) (<= code 99) (/= code 70))
      (and (>= code 140) (<= code 149)) (and (>= code 170) (<= code 179))
      (and (>= code 270) (<= code 299)) (and (>= code 370) (<= code 389))
      (and (>= code 420) (<= code 429)) (and (>= code 440) (<= code 459))))
(defun pid:dim-resource-name (value / entity)
  (setq entity (cond ((= (type value) 'ENAME) value)
                     ((= (type value) 'STR) (handent value))))
  (if entity (cdr (assoc 2 (entget entity))) nil))
(defun pid:dimension-style-detail (row / pair code value properties resources unsupported name)
  (setq properties nil resources nil unsupported nil)
  (foreach pair row
    (setq code (car pair) value (cdr pair))
    (cond
      ((member code '(-1 0 2 5 70 100 102 105 330)) nil)
      ((and (pid:dim-scalar-code-p code) (numberp value))
        (setq properties (cons pair properties)))
      ((and (member code '(3 4)) (= (type value) 'STR))
        (setq properties (cons pair properties)))
      ((and (>= code 340) (<= code 347))
        (setq name (pid:dim-resource-name value))
        (if name (setq resources (cons (cons code name) resources))
          (setq unsupported (cons code unsupported))))
      (T (setq unsupported (cons code unsupported)))))
  (strcat "format=DXF_PROPERTIES_V1;recordComplete=1;dxfData=" (vl-prin1-to-string (reverse properties))
    ";resources=" (vl-prin1-to-string (reverse resources))
    ";unsupportedCodes=" (vl-prin1-to-string (reverse unsupported))))
`;function lT(a){return`
(defun ${a}-dimension-property-code-p (code)
  (or (and (>= code 40) (<= code 99) (/= code 70))
      (and (>= code 140) (<= code 149)) (and (>= code 170) (<= code 179))
      (and (>= code 270) (<= code 299)) (and (>= code 340) (<= code 347))
      (and (>= code 370) (<= code 389)) (and (>= code 420) (<= code 429))
      (and (>= code 440) (<= code 459)) (member code '(3 4))))
(defun ${a}-apply-dimension-standards (/ spec name pairs pair code resource table reference entity data expected)
  (foreach spec *p2dwg-approved-dimension-styles*
    (setq name (car spec) pairs (cadr spec))
    (foreach resource (caddr spec)
      (setq code (car resource)
        table (cond ((= code 340) "STYLE") ((<= code 344) "BLOCK") (T "LTYPE"))
        reference (if (= table "BLOCK")
          (if (tblsearch "BLOCK" (cdr resource))
            (vlax-vla-object->ename (vla-item
              (vla-get-Blocks (vla-get-ActiveDocument (vlax-get-acad-object))) (cdr resource))) nil)
          (tblobjname table (cdr resource))))
      (if (null reference)
        (p2dwg-raise (strcat "Dimension style " name " requires missing " table " resource " (cdr resource)
          ". The source definition will not be approximated.")))
      (setq pairs (append pairs (list (cons code reference)))))
    (setq entity (tblobjname "DIMSTYLE" name))
    (if entity
      (progn
        ; Replace the complete property set, including native omissions.
        ; Template-only dimension overrides must not leak into the source style.
        (setq data (vl-remove-if
          '(lambda (entry) (${a}-dimension-property-code-p (car entry))) (entget entity)))
        (setq data (append data pairs))
        (if (not (entmod data)) (p2dwg-raise (strcat "Cannot update approved dimension style " name))))
      (if (not (entmake (append
          (list '(0 . "DIMSTYLE") '(100 . "AcDbSymbolTableRecord")
            '(100 . "AcDbDimStyleTableRecord") (cons 2 name) '(70 . 0)) pairs)))
        (p2dwg-raise (strcat "Cannot create approved dimension style " name))))
    (setq entity (tblobjname "DIMSTYLE" name) data (if entity (entget entity) nil))
    (foreach expected pairs
      (if (not (and (assoc (car expected) data)
                   (equal (cdr (assoc (car expected) data)) (cdr expected) 1e-8)))
        (p2dwg-raise (strcat "Dimension style verification failed: " name " group " (itoa (car expected))))))
    (${a}-batch-log (strcat "CAD_DIMENSION_STANDARD_APPLIED|" name
      "|PROPERTIES=" (itoa (length pairs))
      "|OMITTED_PROPERTIES=NATIVE_DXF_DEFAULTS|FONT_POLICY=ARIAL_NARROW|VERIFIED"))))
`}const cT=rT+iT+String.raw`; Local CAD standards extractor. Run in Windows AutoCAD on each source drawing.
(vl-load-com)

(defun pid:filename-only (path / pos)
  (setq pos (strlen path))
  (while
    (and (> pos 0)
         (not (member (ascii (substr path pos 1)) '(47 92)))
    )
    (setq pos (1- pos))
  )
  (if (> pos 0) (substr path (1+ pos)) path)
)
(defun pid:target-symbol-layer-p (layer)
  (member (strcase (if layer layer ""))
    '("EQUIP" "F_EQUIP" "F_INST" "F_PIPE_INLINE"))
)
(defun pid:target-block-names (/ selection index data name layer names)
  (setq names nil)
  (setq selection (ssget "_X" '((0 . "INSERT"))))
  (if selection
    (progn
      (setq index 0)
      (repeat (sslength selection)
        (setq data (entget (ssname selection index)))
        (setq name (cdr (assoc 2 data)))
        (setq layer (cdr (assoc 8 data)))
        (if (and name
                 (/= (if (cdr (assoc 67 data)) (cdr (assoc 67 data)) 0) 1)
                 (pid:target-symbol-layer-p layer)
                 (not (member (strcase name) names)))
          (setq names (cons (strcase name) names))
        )
        (setq index (1+ index))
      )
    )
  )
  names
)
(defun pid:block-source-layers (blockName / selection index data name layer layers)
  (setq layers nil)
  (setq selection (ssget "_X" '((0 . "INSERT"))))
  (if selection
    (progn
      (setq index 0)
      (repeat (sslength selection)
        (setq data (entget (ssname selection index)))
        (setq name (cdr (assoc 2 data)))
        (setq layer (cdr (assoc 8 data)))
        (if (and name layer
                 (/= (if (cdr (assoc 67 data)) (cdr (assoc 67 data)) 0) 1)
                 (= (strcase name) (strcase blockName))
                 (pid:target-symbol-layer-p layer)
                 (not (member (strcase layer) (mapcar 'strcase layers))))
          (setq layers (cons layer layers))
        )
        (setq index (1+ index))
      )
    )
  )
  (if layers
    (apply 'strcat
      (cons (car layers)
        (mapcar '(lambda (layer) (strcat "," layer)) (cdr layers))))
    ""
  )
)
(defun pid:style-font-for-handle (target / styleRow found)
  (setq styleRow (tblnext "STYLE" T))
  (while (and styleRow (not found))
    (if (and (cdr (assoc 5 styleRow))
             (= (strcase (cdr (assoc 5 styleRow))) (strcase target)))
      (setq found (cdr (assoc 3 styleRow)))
    )
    (setq styleRow (tblnext "STYLE"))
  )
  found
)

(defun c:PIDEXTRACTSTANDARDS (/ output alias handle table row kind name detail flags index assetName assetPath fontName bigFontName patternValues patternFlags complexData shapeFonts description usedBlockNames sourceLayers)
  (setq alias (vl-filename-base (getvar "DWGNAME")))
  (if (= alias "") (setq alias "SOURCE_LOCAL"))
  (setq usedBlockNames (pid:target-block-names))
  (setq output (getfiled "Save extracted CAD standards locally" (strcat (getvar "DWGPREFIX") "CAD_STANDARDS.tsv") "tsv" 1))
  (if output
    (progn
      (setq handle (open output "w"))
      (if handle
        (progn
          (write-line "SOURCE\tKIND\tNAME\tDETAIL" handle)
          (setq index 0)
          (foreach table '("BLOCK" "LAYER" "STYLE" "LTYPE" "DIMSTYLE")
            (setq row (tblnext table T))
            (while row
              (setq name (cdr (assoc 2 row)))
              (setq flags (cdr (assoc 70 row)))
              (if (and name
                       (or (/= table "BLOCK")
                           (and (/= (strcase name) "*MODEL_SPACE")
                                (/= (strcase name) "*PAPER_SPACE")
                                (/= (substr name 1 1) "*")
                                (member (strcase name) usedBlockNames))))
                (progn
                  (setq kind
                    (cond
                      ((= table "BLOCK") "BLOCK")
                      ((= table "LAYER") "LAYER")
                      ((= table "STYLE") "TEXT_STYLE")
                      ((= table "LTYPE") "LINETYPE")
                      ((= table "DIMSTYLE") "DIMENSION_STYLE")
                    )
                  )
                  (setq detail
                    (cond
                      ((= table "LAYER")
                        (strcat "color=" (itoa (abs (cdr (assoc 62 row))))
                                ";lineweight=" (itoa (if (cdr (assoc 370 row)) (cdr (assoc 370 row)) -3))
                                ";linetype=" (if (cdr (assoc 6 row)) (cdr (assoc 6 row)) "BYLAYER")))
                      ((= table "BLOCK")
                        (setq sourceLayers (pid:block-source-layers name))
                        (strcat "flags=" (itoa (if flags flags 0))
                                ";sourceLayer=" sourceLayers))
                      ((= table "STYLE")
                        (setq fontName (if (cdr (assoc 3 row)) (pid:filename-only (cdr (assoc 3 row))) ""))
                        (setq bigFontName (if (cdr (assoc 4 row)) (pid:filename-only (cdr (assoc 4 row))) ""))
                        (strcat "font=" fontName ";bigfont=" bigFontName
                                ";height=" (rtos (if (cdr (assoc 40 row)) (cdr (assoc 40 row)) 0.0) 2 4)
                                ";width=" (rtos (if (cdr (assoc 41 row)) (cdr (assoc 41 row)) 1.0) 2 4)
                                ";oblique=" (rtos (if (cdr (assoc 50 row)) (cdr (assoc 50 row)) 0.0) 2 4)))
                      ((= table "LTYPE")
                        (setq description
                          (vl-string-translate
                            (strcat (chr 9) (chr 10) (chr 13) ";")
                            "    "
                            (if (cdr (assoc 3 row)) (cdr (assoc 3 row)) "")
                          )
                        )
                        (setq patternValues
                          (mapcar '(lambda (entry) (cdr entry))
                            (vl-remove-if-not '(lambda (entry) (= (car entry) 49)) row)
                          )
                        )
                        (setq patternFlags
                          (mapcar '(lambda (entry) (if (cdr entry) (cdr entry) 0))
                            (vl-remove-if-not '(lambda (entry) (= (car entry) 74)) row)
                          )
                        )
                        (setq complexData
                          (vl-remove-if-not
                            '(lambda (entry) (member (car entry) '(9 40 44 45 46 49 50 73 74 75 340)))
                            row
                          )
                        )
                        (setq shapeFonts
                          (mapcar
                            '(lambda (entry)
                              (cons (cdr entry) (pid:style-font-for-handle (cdr entry)))
                            )
                            (vl-remove-if-not '(lambda (entry) (= (car entry) 340)) row)
                          )
                        )
                        (strcat
                          "description=" description
                          ";patternLength=" (rtos (if (cdr (assoc 40 row)) (cdr (assoc 40 row)) 0.0) 2 8)
                          ";pattern=" (vl-prin1-to-string patternValues)
                          ";patternFlags=" (vl-prin1-to-string patternFlags)
                          ";complexData=" (vl-prin1-to-string complexData)
                          ";shapeFonts=" (vl-prin1-to-string shapeFonts)
                        ))
                      ((= table "DIMSTYLE")
                        (pid:dimension-style-detail row))
                      (T ""))
                  )
                  (if (= table "BLOCK")
                    (progn
                      (setq index (1+ index))
                      (setq assetName
                        (strcat alias "_BLOCK_" (if (< index 10) "000" "")
                          (if (and (>= index 10) (< index 100)) "00" "")
                          (if (and (>= index 100) (< index 1000)) "0" "")
                          (itoa index) ".dwg")
                      )
                      (setq assetPath
                        (strcat (vl-filename-directory output) "\\" assetName)
                      )
                      (vl-catch-all-apply
                        '(lambda () (command "_.-WBLOCK" assetPath name))
                        '()
                      )
                      (setq detail (strcat detail ";asset=" assetName))
                    )
                  )
                  (write-line (strcat alias "\t" kind "\t" name "\t" detail) handle)
                )
              )
              (setq row (tblnext table))
            )
          )
          (close handle)
          (prompt (strcat "\nLocal extraction saved: " output))
          (if (null usedBlockNames)
            (prompt "\nNo actual block inserts were found on EQUIP, EQUIP_INT, f_Equip, f_Equip_Int, f_Inst, or f_Pipe_Inline. No helper block definitions were exported.")
          )
        )
        (prompt "\nCould not create the extraction file.")
      )
    )
  )
  (princ)
)
(defun c:PIDEXPORTOVERVIEW (/ alias output result)
  (setq alias (vl-filename-base (getvar "DWGNAME")))
  (if (= alias "") (setq alias "SOURCE_LOCAL"))
  (setq output (getfiled "Save local source overview for block review" (strcat (getvar "DWGPREFIX") alias "_OVERVIEW.dxf") "dxf" 1))
  (if output
    (progn
      (setq result
        (vl-catch-all-apply
          '(lambda () (command "_.DXFOUT" output "_VERSION" "2013" ""))
          '()
        )
      )
      (if (and (not (vl-catch-all-error-p result)) (findfile output))
        (if (pid:dxf-symbol-names-valid output)
          (prompt (strcat "\nLocal overview exported: " output "\nAdd this *_OVERVIEW.dxf to the ZIP with the existing TSV and ALL block DWGs. No block exports were repeated."))
          (prompt "\nOverview export was NOT marked successful. Original source drawing unchanged.")
        )
        (prompt "\nOverview export did not finish. Do not import an incomplete overview; inspect the AutoCAD command line.")
      )
    )
  )
  (princ)
)
(princ "\nLoaded PIDEXTRACTSTANDARDS and PIDEXPORTOVERVIEW. Run either command on the original neutral SOURCE drawing, not an individual BLOCK asset.")
(princ)
`;function dT(a,r){return`SOURCE_${String(a+1).padStart(3,"0")}.${r==="DXF"?"dxf":"dwg"}`}async function uT(a){if(a.length===0)throw new Error("There are no eligible local source drawings to package.");const r=[{path:"EXTRACT_CAD_STANDARDS.lsp",content:new TextEncoder().encode(cT)},{path:"README_LOCAL_EXTRACTION.txt",content:new TextEncoder().encode(`LOCAL CAD STANDARDS EXTRACTION

This package is created in your browser and is not uploaded. It contains neutral copies of the selected local CAD drawings and an AutoLISP extractor.

1. Extract this ZIP on the workstation running Windows AutoCAD.
2. Open one SOURCE_###.dwg or SOURCE_###.dxf at a time. In AutoCAD, run APPLOAD and load EXTRACT_CAD_STANDARDS.lsp.
3. Run PIDEXTRACTSTANDARDS and save the TSV locally. The script reads the neutral source drawing name automatically.
4. The script writes one neutral *_BLOCK_####.dwg only for blocks actually inserted on EQUIP, f_Equip, f_Inst, or f_Pipe_Inline. Internal layers such as EQUIP_INT and f_Equip_Int are excluded. Keep every exported block file with the TSV.
5. After import, the local library can approve only symbols with a single matching placement layer. Unknown, internal, ambiguous, and missing-asset records remain pending. The script reads drawing tables only; it does not modify source drawings.
6. Complex shape-based linetypes include their referenced SHX font. AutoCAD must be able to find that font in its support paths; the runner stops if it is missing instead of replacing the line style.
7. For visual review, run PIDEXPORTOVERVIEW on the ORIGINAL SOURCE_### drawing, not a *_BLOCK_####.dwg. Save SOURCE_###_OVERVIEW.dxf. This exports one source overview only; it does NOT repeat the WBLOCK exports. You can use this command with an existing extraction.
8. Zip CAD_STANDARDS.tsv, ALL referenced *_BLOCK_####.dwg files, and the *_OVERVIEW.dxf together. Import that ZIP. Re-importing existing names refreshes their local previews without approving or duplicating review records.
9. Previews are visual aids, not proof of CAD fidelity. Nearby text is proposed by position only and can be ambiguous, especially for multipart assemblies. Verify the item and layer before approving. All overview parsing and previews remain in this browser.
`)}],s=await Promise.all(a.map(o=>Qs(o.id)));return a.forEach((o,l)=>{const u=o.format==="DXF"?eo(s[l]):null;r.push({path:dT(l,o.format),content:u?.content??s[l]})}),VS(r)}function Ty(a,r,s){let o=0,l=0;const u=new Map([...s].map(([f,g])=>[f.toUpperCase(),g])),m=a.reviewCandidates.map(f=>{if(f.sourceGroup!==r||f.status!=="needs-review"||f.proposedScope!=="company"||f.item.category!=="symbol"||f.item.sourceKind!=="extracted-dwg")return f;const g=f.item.fields,y=g.find(D=>D.label==="Block name")?.value.trim()??"";if(!y)return f;const p=u.get(y.toUpperCase())?.sourcePlacements??[],b=[...new Set(p.map(D=>D.layer.trim()).filter(Boolean))];b.length&&(l+=1);const w=(g.find(D=>D.label==="Extracted details")?.value??"").split(";").filter(D=>!/^\s*sourceLayer=/i.test(D)).join(";"),_=[...g.filter(D=>!["Extracted details","Source insert layer(s)","Source insert rotation(s)"].includes(D.label)),{label:"Extracted details",value:w+(b.length?`;sourceLayer=${b.join(", ")}`:"")},...b.length?[{label:"Source insert layer(s)",value:b.join(", ")},{label:"Source insert rotation(s)",value:p.map(D=>`${D.rotationDegrees}° on ${D.layer} (${D.count})`).join("; ")}]:[]];return JSON.stringify(g)===JSON.stringify(_)?f:(o+=1,{...f,item:{...f.item,fields:_}})});return{library:o?{...a,reviewCandidates:m}:a,updatedRecords:o,recoveredSymbols:l}}class pT{constructor(r){this._pointer=0,this._eof=!1,this._data=r}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return this._pointer++,r.value=Ay(r.code,this._data[this._pointer].trim()),this._pointer++,r.code===0&&r.value==="EOF"&&(this._eof=!0),this.lastReadGroup=r,r}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return r.value=Ay(r.code,this._data[this._pointer+1].trim()),r}rewind(r=1){this._pointer=this._pointer-r*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}function Ay(a,r){return a<=9?r:a>=10&&a<=59?parseFloat(r):a>=60&&a<=99?parseInt(r):a>=100&&a<=109?r:a>=110&&a<=149?parseFloat(r):a>=160&&a<=179?parseInt(r):a>=210&&a<=239?parseFloat(r):a>=270&&a<=289?parseInt(r):a>=290&&a<=299?fT(r):a>=300&&a<=369?r:a>=370&&a<=389?parseInt(r):a>=390&&a<=399?r:a>=400&&a<=409?parseInt(r):a>=410&&a<=419?r:a>=420&&a<=429?parseInt(r):a>=430&&a<=439?r:a>=440&&a<=459?parseInt(r):a>=460&&a<=469?parseFloat(r):a>=470&&a<=481||a===999||a>=1e3&&a<=1009?r:a>=1010&&a<=1059?parseFloat(r):a>=1060&&a<=1071?parseInt(r):(console.log("WARNING: Group code does not have a defined type: %j",{code:a,value:r}),r)}function fT(a){if(a==="0")return!1;if(a==="1")return!0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")}const nv=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function hT(a){return nv[a]}function We(a){const r={};a.rewind();let s=a.next(),o=s.code;if(r.x=s.value,o+=10,s=a.next(),s.code!=o)throw new Error("Expected code for point value to be "+o+" but got "+s.code+".");return r.y=s.value,o+=10,s=a.next(),s.code!=o?(a.rewind(),r):(r.z=s.value,r)}function ha(a,r,s){switch(r.code){case 0:a.type=r.value;break;case 5:a.handle=r.value;break;case 6:a.lineType=r.value;break;case 8:a.layer=r.value;break;case 48:a.lineTypeScale=r.value;break;case 60:a.visible=r.value===0;break;case 62:a.colorIndex=r.value,a.color=hT(Math.abs(r.value));break;case 67:a.inPaperSpace=r.value!==0;break;case 100:break;case 101:for(;r.code!=0;)r=s.next();s.rewind();break;case 330:a.ownerHandle=r.value;break;case 347:a.materialObjectHandle=r.value;break;case 370:a.lineweight=r.value;break;case 420:a.color=r.value;break;case 1e3:a.extendedData=a.extendedData||{},a.extendedData.customStrings=a.extendedData.customStrings||[],a.extendedData.customStrings.push(r.value);break;case 1001:a.extendedData=a.extendedData||{},a.extendedData.applicationName=r.value;break;default:return!1}return!0}class gT{constructor(){this.ForEntityName="3DFACE"}parseEntity(r,s){const o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 70:o.shape=(s.value&1)===1,o.hasContinuousLinetypePattern=(s.value&128)===128;break;case 10:o.vertices=mT(r,s),s=r.lastReadGroup;break;default:ha(o,s,r);break}s=r.next()}return o}}function mT(a,r){var s=[],o=!1,l=!1,u=4;for(let f=0;f<=u;f++){for(var m={};!a.isEOF()&&!(r.code===0||l);){switch(r.code){case 10:case 11:case 12:case 13:if(o){l=!0;continue}m.x=r.value,o=!0;break;case 20:case 21:case 22:case 23:m.y=r.value;break;case 30:case 31:case 32:case 33:m.z=r.value;break;default:return s}r=a.next()}s.push(m),o=!1,l=!1}return a.rewind(),s}class yT{constructor(){this.ForEntityName="ARC"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=We(r);break;case 40:o.radius=s.value;break;case 50:o.startAngle=Math.PI/180*s.value;break;case 51:o.endAngle=Math.PI/180*s.value,o.angleLength=o.endAngle-o.startAngle;break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ha(o,s,r);break}s=r.next()}return o}}class bT{constructor(){this.ForEntityName="ATTDEF"}parseEntity(r,s){var o={type:s.value,scale:1,textStyle:"STANDARD"};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 1:o.text=s.value;break;case 2:o.tag=s.value;break;case 3:o.prompt=s.value;break;case 7:o.textStyle=s.value;break;case 10:o.startPoint=We(r);break;case 11:o.endPoint=We(r);break;case 39:o.thickness=s.value;break;case 40:o.textHeight=s.value;break;case 41:o.scale=s.value;break;case 50:o.rotation=s.value;break;case 51:o.obliqueAngle=s.value;break;case 70:o.invisible=!!(s.value&1),o.constant=!!(s.value&2),o.verificationRequired=!!(s.value&4),o.preset=!!(s.value&8);break;case 71:o.backwards=!!(s.value&2),o.mirrored=!!(s.value&4);break;case 72:o.horizontalJustification=s.value;break;case 73:o.fieldLength=s.value;break;case 74:o.verticalJustification=s.value;break;case 100:break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ha(o,s,r);break}s=r.next()}return o}}class vT{constructor(){this.ForEntityName="CIRCLE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=We(r);break;case 40:o.radius=s.value;break;case 50:o.startAngle=Math.PI/180*s.value;break;case 51:const l=Math.PI/180*s.value;l<o.startAngle?o.angleLength=l+2*Math.PI-o.startAngle:o.angleLength=l-o.startAngle,o.endAngle=l;break;default:ha(o,s,r);break}s=r.next()}return o}}class ET{constructor(){this.ForEntityName="DIMENSION"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 2:o.block=s.value;break;case 10:o.anchorPoint=We(r);break;case 11:o.middleOfText=We(r);break;case 12:o.insertionPoint=We(r);break;case 13:o.linearOrAngularPoint1=We(r);break;case 14:o.linearOrAngularPoint2=We(r);break;case 15:o.diameterOrRadiusPoint=We(r);break;case 16:o.arcPoint=We(r);break;case 70:o.dimensionType=s.value;break;case 71:o.attachmentPoint=s.value;break;case 42:o.actualMeasurement=s.value;break;case 1:o.text=s.value;break;case 50:o.angle=s.value;break;default:ha(o,s,r);break}s=r.next()}return o}}class wT{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=We(r);break;case 11:o.majorAxisEndPoint=We(r);break;case 40:o.axisRatio=s.value;break;case 41:o.startAngle=s.value;break;case 42:o.endAngle=s.value;break;case 2:o.name=s.value;break;default:ha(o,s,r);break}s=r.next()}return o}}class xT{constructor(){this.ForEntityName="INSERT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 2:o.name=s.value;break;case 41:o.xScale=s.value;break;case 42:o.yScale=s.value;break;case 43:o.zScale=s.value;break;case 10:o.position=We(r);break;case 50:o.rotation=s.value;break;case 70:o.columnCount=s.value;break;case 71:o.rowCount=s.value;break;case 44:o.columnSpacing=s.value;break;case 45:o.rowSpacing=s.value;break;case 210:o.extrusionDirection=We(r);break;default:ha(o,s,r);break}s=r.next()}return o}}class ST{constructor(){this.ForEntityName="LINE"}parseEntity(r,s){const o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.vertices.unshift(We(r));break;case 11:o.vertices.push(We(r));break;case 210:o.extrusionDirection=We(r);break;case 100:break;default:ha(o,s,r);break}s=r.next()}return o}}class TT{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(r,s){const o={type:s.value,vertices:[]};let l=0;for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 38:o.elevation=s.value;break;case 39:o.depth=s.value;break;case 70:o.shape=(s.value&1)===1,o.hasContinuousLinetypePattern=(s.value&128)===128;break;case 90:l=s.value;break;case 10:o.vertices=AT(l,r);break;case 43:s.value!==0&&(o.width=s.value);break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ha(o,s,r);break}s=r.next()}return o}}function AT(a,r){if(!a||a<=0)throw Error("n must be greater than 0 verticies");const s=[];let o=!1,l=!1,u=r.lastReadGroup;for(let m=0;m<a;m++){const f={};for(;!r.isEOF()&&!(u.code===0||l);){switch(u.code){case 10:if(o){l=!0;continue}f.x=u.value,o=!0;break;case 20:f.y=u.value;break;case 30:f.z=u.value;break;case 40:f.startWidth=u.value;break;case 41:f.endWidth=u.value;break;case 42:u.value!=0&&(f.bulge=u.value);break;default:return r.rewind(),o&&s.push(f),r.rewind(),s}u=r.next()}s.push(f),o=!1,l=!1}return r.rewind(),s}class DT{constructor(){this.ForEntityName="MTEXT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 3:o.text?o.text+=s.value:o.text=s.value;break;case 1:o.text?o.text+=s.value:o.text=s.value;break;case 10:o.position=We(r);break;case 11:o.directionVector=We(r);break;case 40:o.height=s.value;break;case 41:o.width=s.value;break;case 50:o.rotation=s.value;break;case 71:o.attachmentPoint=s.value;break;case 72:o.drawingDirection=s.value;break;default:ha(o,s,r);break}s=r.next()}return o}}class NT{constructor(){this.ForEntityName="POINT"}parseEntity(r,s){const l={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:l.position=We(r);break;case 39:l.thickness=s.value;break;case 210:l.extrusionDirection=We(r);break;case 100:break;default:ha(l,s,r);break}s=r.next()}return l}}class CT{constructor(){this.ForEntityName="VERTEX"}parseEntity(r,s){var o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.x=s.value;break;case 20:o.y=s.value;break;case 30:o.z=s.value;break;case 40:break;case 41:break;case 42:s.value!=0&&(o.bulge=s.value);break;case 70:o.curveFittingVertex=(s.value&1)!==0,o.curveFitTangent=(s.value&2)!==0,o.splineVertex=(s.value&8)!==0,o.splineControlPoint=(s.value&16)!==0,o.threeDPolylineVertex=(s.value&32)!==0,o.threeDPolylineMesh=(s.value&64)!==0,o.polyfaceMeshVertex=(s.value&128)!==0;break;case 50:break;case 71:o.faceA=s.value;break;case 72:o.faceB=s.value;break;case 73:o.faceC=s.value;break;case 74:o.faceD=s.value;break;default:ha(o,s,r);break}s=r.next()}return o}}class RT{constructor(){this.ForEntityName="POLYLINE"}parseEntity(r,s){var o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:break;case 20:break;case 30:break;case 39:o.thickness=s.value;break;case 40:break;case 41:break;case 70:o.shape=(s.value&1)!==0,o.includesCurveFitVertices=(s.value&2)!==0,o.includesSplineFitVertices=(s.value&4)!==0,o.is3dPolyline=(s.value&8)!==0,o.is3dPolygonMesh=(s.value&16)!==0,o.is3dPolygonMeshClosed=(s.value&32)!==0,o.isPolyfaceMesh=(s.value&64)!==0,o.hasContinuousLinetypePattern=(s.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:o.extrusionDirection=We(r);break;default:ha(o,s,r);break}s=r.next()}return o.vertices=_T(r,s),o}}function _T(a,r){const s=new CT,o=[];for(;!a.isEOF();)if(r.code===0){if(r.value==="VERTEX")o.push(s.parseEntity(a,r)),r=a.lastReadGroup;else if(r.value==="SEQEND"){IT(a,r);break}}return o}function IT(a,r){const s={type:r.value};for(r=a.next();!a.isEOF()&&r.code!=0;)ha(s,r,a),r=a.next();return s}class LT{constructor(){this.ForEntityName="SOLID"}parseEntity(r,s){const o={type:s.value,points:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.points[0]=We(r);break;case 11:o.points[1]=We(r);break;case 12:o.points[2]=We(r);break;case 13:o.points[3]=We(r);break;case 210:o.extrusionDirection=We(r);break;default:ha(o,s,r);break}s=r.next()}return o}}class PT{constructor(){this.ForEntityName="SPLINE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.controlPoints||(o.controlPoints=[]),o.controlPoints.push(We(r));break;case 11:o.fitPoints||(o.fitPoints=[]),o.fitPoints.push(We(r));break;case 12:o.startTangent=We(r);break;case 13:o.endTangent=We(r);break;case 40:o.knotValues||(o.knotValues=[]),o.knotValues.push(s.value);break;case 70:(s.value&1)!=0&&(o.closed=!0),(s.value&2)!=0&&(o.periodic=!0),(s.value&4)!=0&&(o.rational=!0),(s.value&8)!=0&&(o.planar=!0),(s.value&16)!=0&&(o.planar=!0,o.linear=!0);break;case 71:o.degreeOfSplineCurve=s.value;break;case 72:o.numberOfKnots=s.value;break;case 73:o.numberOfControlPoints=s.value;break;case 74:o.numberOfFitPoints=s.value;break;case 210:o.normalVector=We(r);break;default:ha(o,s,r);break}s=r.next()}return o}}class kT{constructor(){this.ForEntityName="TEXT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.startPoint=We(r);break;case 11:o.endPoint=We(r);break;case 40:o.textHeight=s.value;break;case 41:o.xScale=s.value;break;case 50:o.rotation=s.value;break;case 1:o.text=s.value;break;case 72:o.halign=s.value;break;case 73:o.valign=s.value;break;default:ha(o,s,r);break}s=r.next()}return o}}var Wl={exports:{}},OT=Wl.exports,Dy;function jT(){return Dy||(Dy=1,(function(a){(function(r,s){a.exports?a.exports=s():r.log=s()})(OT,function(){var r=function(){},s="undefined",o=typeof window!==s&&typeof window.navigator!==s&&/Trident\/|MSIE /.test(window.navigator.userAgent),l=["trace","debug","info","warn","error"],u={},m=null;function f(D,S){var T=D[S];if(typeof T.bind=="function")return T.bind(D);try{return Function.prototype.bind.call(T,D)}catch{return function(){return Function.prototype.apply.apply(T,[D,arguments])}}}function g(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function y(D){return D==="debug"&&(D="log"),typeof console===s?!1:D==="trace"&&o?g:console[D]!==void 0?f(console,D):console.log!==void 0?f(console,"log"):r}function p(){for(var D=this.getLevel(),S=0;S<l.length;S++){var T=l[S];this[T]=S<D?r:this.methodFactory(T,D,this.name)}if(this.log=this.debug,typeof console===s&&D<this.levels.SILENT)return"No console available for logging"}function b(D){return function(){typeof console!==s&&(p.call(this),this[D].apply(this,arguments))}}function v(D,S,T){return y(D)||b.apply(this,arguments)}function w(D,S){var T=this,L,I,C,x="loglevel";typeof D=="string"?x+=":"+D:typeof D=="symbol"&&(x=void 0);function O(W){var ne=(l[W]||"silent").toUpperCase();if(!(typeof window===s||!x)){try{window.localStorage[x]=ne;return}catch{}try{window.document.cookie=encodeURIComponent(x)+"="+ne+";"}catch{}}}function R(){var W;if(!(typeof window===s||!x)){try{W=window.localStorage[x]}catch{}if(typeof W===s)try{var ne=window.document.cookie,fe=encodeURIComponent(x),ie=ne.indexOf(fe+"=");ie!==-1&&(W=/^([^;]+)/.exec(ne.slice(ie+fe.length+1))[1])}catch{}return T.levels[W]===void 0&&(W=void 0),W}}function P(){if(!(typeof window===s||!x)){try{window.localStorage.removeItem(x)}catch{}try{window.document.cookie=encodeURIComponent(x)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function k(W){var ne=W;if(typeof ne=="string"&&T.levels[ne.toUpperCase()]!==void 0&&(ne=T.levels[ne.toUpperCase()]),typeof ne=="number"&&ne>=0&&ne<=T.levels.SILENT)return ne;throw new TypeError("log.setLevel() called with invalid level: "+W)}T.name=D,T.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},T.methodFactory=S||v,T.getLevel=function(){return C??I??L},T.setLevel=function(W,ne){return C=k(W),ne!==!1&&O(C),p.call(T)},T.setDefaultLevel=function(W){I=k(W),R()||T.setLevel(W,!1)},T.resetLevel=function(){C=null,P(),p.call(T)},T.enableAll=function(W){T.setLevel(T.levels.TRACE,W)},T.disableAll=function(W){T.setLevel(T.levels.SILENT,W)},T.rebuild=function(){if(m!==T&&(L=k(m.getLevel())),p.call(T),m===T)for(var W in u)u[W].rebuild()},L=k(m?m.getLevel():"WARN");var ae=R();ae!=null&&(C=k(ae)),p.call(T)}m=new w,m.getLogger=function(S){if(typeof S!="symbol"&&typeof S!="string"||S==="")throw new TypeError("You must supply a name when creating a logger.");var T=u[S];return T||(T=u[S]=new w(S,m.methodFactory)),T};var _=typeof window!==s?window.log:void 0;return m.noConflict=function(){return typeof window!==s&&window.log===m&&(window.log=_),m},m.getLoggers=function(){return u},m.default=m,m})})(Wl)),Wl.exports}var qT=jT();const Xe=Si(qT);Xe.setLevel("error");function MT(a){a.registerEntityHandler(gT),a.registerEntityHandler(yT),a.registerEntityHandler(bT),a.registerEntityHandler(vT),a.registerEntityHandler(ET),a.registerEntityHandler(wT),a.registerEntityHandler(xT),a.registerEntityHandler(ST),a.registerEntityHandler(TT),a.registerEntityHandler(DT),a.registerEntityHandler(NT),a.registerEntityHandler(RT),a.registerEntityHandler(LT),a.registerEntityHandler(PT),a.registerEntityHandler(kT)}class rv{constructor(){this._entityHandlers={},MT(this)}parse(r){return typeof r=="string"?this._parse(r):(console.error("Cannot read dxf source of type `"+typeof r),null)}registerEntityHandler(r){const s=new r;this._entityHandlers[s.ForEntityName]=s}parseSync(r){return this.parse(r)}parseStream(r){let s="";const o=this;return new Promise((l,u)=>{r.on("data",m=>{s+=m}),r.on("end",()=>{try{l(o._parse(s))}catch(m){u(m)}}),r.on("error",m=>{u(m)})})}_parse(r){const s={};let o=0;const l=r.split(/\r\n|\r|\n/g),u=new pT(l);if(!u.hasNext())throw Error("Empty file");const m=this;let f;function g(){for(f=u.next();!u.isEOF();)if(f.code===0&&f.value==="SECTION"){if(f=u.next(),f.code!==2){console.error("Unexpected code %s after 0:SECTION",sv(f)),f=u.next();continue}f.value==="HEADER"?(Xe.debug("> HEADER"),s.header=y(),Xe.debug("<")):f.value==="BLOCKS"?(Xe.debug("> BLOCKS"),s.blocks=p(),Xe.debug("<")):f.value==="ENTITIES"?(Xe.debug("> ENTITIES"),s.entities=I(!1),Xe.debug("<")):f.value==="TABLES"?(Xe.debug("> TABLES"),s.tables=v(),Xe.debug("<")):f.value==="EOF"?Xe.debug("EOF"):Xe.warn("Skipping section '%s'",f.value)}else f=u.next()}function y(){let O=null,R=null;const P={};for(f=u.next();;){if(bn(f,0,"ENDSEC")){O&&(P[O]=R);break}else f.code===9?(O&&(P[O]=R),O=f.value):f.code===10?R={x:f.value}:f.code===20?R.y=f.value:f.code===30?R.z=f.value:R=f.value;f=u.next()}return f=u.next(),P}function p(){const O={};for(f=u.next();f.value!=="EOF"&&!bn(f,0,"ENDSEC");)if(bn(f,0,"BLOCK")){Xe.debug("block {");const R=b();Xe.debug("}"),x(R),R.name?O[R.name]=R:Xe.error('block with handle "'+R.handle+'" is missing a name.')}else Qr(f),f=u.next();return O}function b(){const O={};for(f=u.next();f.value!=="EOF";){switch(f.code){case 1:O.xrefPath=f.value,f=u.next();break;case 2:O.name=f.value,f=u.next();break;case 3:O.name2=f.value,f=u.next();break;case 5:O.handle=f.value,f=u.next();break;case 8:O.layer=f.value,f=u.next();break;case 10:O.position=C(f),f=u.next();break;case 67:O.paperSpace=!!(f.value&&f.value==1),f=u.next();break;case 70:f.value!=0&&(O.type=f.value),f=u.next();break;case 100:f=u.next();break;case 330:O.ownerHandle=f.value,f=u.next();break;case 0:if(f.value=="ENDBLK")break;O.entities=I(!0);break;default:Qr(f),f=u.next()}if(bn(f,0,"ENDBLK")){f=u.next();break}}return O}function v(){const O={};for(f=u.next();f.value!=="EOF"&&!bn(f,0,"ENDSEC");)bn(f,0,"TABLE")?(f=u.next(),L[f.value]?(Xe.debug(f.value+" Table {"),O[L[f.value].tableName]=_(f),Xe.debug("}")):Xe.debug("Unhandled Table "+f.value)):f=u.next();return f=u.next(),O}const w="ENDTAB";function _(O){const R=L[O.value],P={};let k=0;for(f=u.next();!bn(f,0,w);)switch(f.code){case 5:P.handle=f.value,f=u.next();break;case 330:P.ownerHandle=f.value,f=u.next();break;case 100:f.value==="AcDbSymbolTable"||Qr(f),f=u.next();break;case 70:k=f.value,f=u.next();break;case 0:f.value===R.dxfSymbolName?P[R.tableRecordsProperty]=R.parseTableRecords():(Qr(f),f=u.next());break;default:Qr(f),f=u.next()}const ae=P[R.tableRecordsProperty];if(ae){let W=(()=>{if(ae.constructor===Array)return ae.length;if(typeof ae=="object")return Object.keys(ae).length})();k!==W&&Xe.warn("Parsed "+W+" "+R.dxfSymbolName+"'s but expected "+k)}return f=u.next(),P}function D(){const O=[];let R={};for(Xe.debug("ViewPort {"),f=u.next();!bn(f,0,w);)switch(f.code){case 2:R.name=f.value,f=u.next();break;case 10:R.lowerLeftCorner=C(f),f=u.next();break;case 11:R.upperRightCorner=C(f),f=u.next();break;case 12:R.center=C(f),f=u.next();break;case 13:R.snapBasePoint=C(f),f=u.next();break;case 14:R.snapSpacing=C(f),f=u.next();break;case 15:R.gridSpacing=C(f),f=u.next();break;case 16:R.viewDirectionFromTarget=C(f),f=u.next();break;case 17:R.viewTarget=C(f),f=u.next();break;case 42:R.lensLength=f.value,f=u.next();break;case 43:R.frontClippingPlane=f.value,f=u.next();break;case 44:R.backClippingPlane=f.value,f=u.next();break;case 45:R.viewHeight=f.value,f=u.next();break;case 50:R.snapRotationAngle=f.value,f=u.next();break;case 51:R.viewTwistAngle=f.value,f=u.next();break;case 79:R.orthographicType=f.value,f=u.next();break;case 110:R.ucsOrigin=C(f),f=u.next();break;case 111:R.ucsXAxis=C(f),f=u.next();break;case 112:R.ucsYAxis=C(f),f=u.next();break;case 110:R.ucsOrigin=C(f),f=u.next();break;case 281:R.renderMode=f.value,f=u.next();break;case 281:R.defaultLightingType=f.value,f=u.next();break;case 292:R.defaultLightingOn=f.value,f=u.next();break;case 330:R.ownerHandle=f.value,f=u.next();break;case 63:case 421:case 431:R.ambientColor=f.value,f=u.next();break;case 0:f.value==="VPORT"&&(Xe.debug("}"),O.push(R),Xe.debug("ViewPort {"),R={},f=u.next());break;default:Qr(f),f=u.next();break}return Xe.debug("}"),O.push(R),O}function S(){const O={};let R={},P=0,k;for(Xe.debug("LType {"),f=u.next();!bn(f,0,"ENDTAB");)switch(f.code){case 2:R.name=f.value,k=f.value,f=u.next();break;case 3:R.description=f.value,f=u.next();break;case 73:P=f.value,P>0&&(R.pattern=[]),f=u.next();break;case 40:R.patternLength=f.value,f=u.next();break;case 49:R.pattern.push(f.value),f=u.next();break;case 0:Xe.debug("}"),P>0&&P!==R.pattern.length&&Xe.warn("lengths do not match on LTYPE pattern"),O[k]=R,R={},Xe.debug("LType {"),f=u.next();break;default:f=u.next()}return Xe.debug("}"),O[k]=R,O}function T(){const O={};let R={},P;for(Xe.debug("Layer {"),f=u.next();!bn(f,0,"ENDTAB");)switch(f.code){case 2:R.name=f.value,P=f.value,f=u.next();break;case 62:R.visible=f.value>=0,R.colorIndex=Math.abs(f.value),R.color=$T(R.colorIndex),f=u.next();break;case 70:R.frozen=(f.value&1)!=0||(f.value&2)!=0,f=u.next();break;case 0:f.value==="LAYER"&&(Xe.debug("}"),O[P]=R,Xe.debug("Layer {"),R={},P=void 0,f=u.next());break;default:Qr(f),f=u.next();break}return Xe.debug("}"),O[P]=R,O}const L={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:D},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:S},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:T}};function I(O){const R=[],P=O?"ENDBLK":"ENDSEC";for(O||(f=u.next());;)if(f.code===0){if(f.value===P)break;const k=m._entityHandlers[f.value];if(k!=null){Xe.debug(f.value+" {");const ae=k.parseEntity(u,f);f=u.lastReadGroup,Xe.debug("}"),x(ae),R.push(ae)}else{Xe.warn("Unhandled entity "+f.value),f=u.next();continue}}else f=u.next();return P=="ENDSEC"&&(f=u.next()),R}function C(O){const R={};let P=O.code;if(R.x=O.value,P+=10,O=u.next(),O.code!=P)throw new Error("Expected code for point value to be "+P+" but got "+O.code+".");return R.y=O.value,P+=10,O=u.next(),O.code!=P?(u.rewind(),R):(R.z=O.value,R)}function x(O){if(!O)throw new TypeError("entity cannot be undefined or null");O.handle||(O.handle=o++)}return g(),s}}function bn(a,r,s){return a.code===r&&a.value===s}function Qr(a){Xe.debug("unhandled group "+sv(a))}function sv(a){return a.code+":"+a.value}function $T(a){return nv[a]}const zl=360,ai=210,zs=16,FT="#78d8b0",UT=[1,0,0,1,0,0],BT=new Set(["0","PIPE_PRI","F_PIPE_PRI","PIPE_PRIMARY","F_PIPE_PRIMARY","PRIMARY PIPING"]);function zT(a){const r=String(a??"").trim().toUpperCase().replace(/\s+/g," ");return!r||BT.has(r)}function Gp(a){return/\barrow\b/i.test(a.replace(/[_-]+/g," "))}function ov(a){return Gp(a)}function xa(a){if(!a||typeof a!="object")return null;const r=a;return typeof r.x=="number"&&Number.isFinite(r.x)&&typeof r.y=="number"&&Number.isFinite(r.y)?{x:r.x,y:r.y}:null}function iv(a,r){return{x:a[0]*r.x+a[2]*r.y+a[4],y:a[1]*r.x+a[3]*r.y+a[5]}}function YT(a,r){return[a[0]*r[0]+a[2]*r[1],a[1]*r[0]+a[3]*r[1],a[0]*r[2]+a[2]*r[3],a[1]*r[2]+a[3]*r[3],a[0]*r[4]+a[2]*r[5]+a[4],a[1]*r[4]+a[3]*r[5]+a[5]]}function It(a,r){return typeof a=="number"&&Number.isFinite(a)?a:r}function ni(a){return Array.isArray(a)?a.map(xa).filter(r=>r!==null):[]}function vp(a){const r=xa(a);return r?{...r,z:It(a.z,0)}:null}function HT(a,r,s){const o={},l=(f,g)=>{const y=vp(g);y&&(o[f]=y)},u=(f,g)=>{Array.isArray(g)&&(o[f]=g.flatMap(y=>{const p=vp(y);return p?[p]:[]}))},m=(f,g)=>{typeof g=="number"&&Number.isFinite(g)&&(o[f]=g)};if(a==="LINE")u("vertices",r.vertices);else if(a==="ARC"||a==="CIRCLE")l("center",r.center),m("radius",r.radius),a==="ARC"&&(m("startAngle",r.startAngle),m("endAngle",r.endAngle));else if(a==="LWPOLYLINE"||a==="POLYLINE")Array.isArray(r.vertices)&&(o.vertices=r.vertices.flatMap(f=>{if(!f||typeof f!="object")return[];const g=f;return typeof g.x!="number"||typeof g.y!="number"||!Number.isFinite(g.x)||!Number.isFinite(g.y)?[]:[{x:g.x,y:g.y,z:It(g.z,0),bulge:It(g.bulge,0)}]})),o.closed=r.shape===!0||(Number(r.shape)&1)===1;else if(a==="ELLIPSE")l("center",r.center),l("majorAxisEndPoint",r.majorAxisEndPoint),m("axisRatio",r.axisRatio),m("startAngle",r.startAngle),m("endAngle",r.endAngle);else if(a==="SPLINE"){u("fitPoints",r.fitPoints),u("controlPoints",r.controlPoints);for(const f of["degreeOfSplineCurve","closed","periodic","knots","weights"]){const g=r[f];(typeof g=="number"||typeof g=="boolean"||Array.isArray(g)&&g.every(y=>typeof y=="number"&&Number.isFinite(y)))&&(o[f]=g)}}else return null;return{type:a,transform:[...s],geometry:o}}function lv(a){return typeof a!="string"?"":a.replace(/\\P/gi," ").replace(/\\[A-Za-z][^;]*;/g,"").replace(/[{}]/g,"").replace(/\s+/g," ").trim()}function VT(a,r,s){return a.layer&&a.layer!=="0"?r.get(a.layer)??s:s}function GT(a){const r=Math.max(0,Math.min(16777215,Math.trunc(a))),s=`#${r.toString(16).padStart(6,"0")}`,o=r>>16&255,l=r>>8&255,u=r&255;return o+l+u<72?"#d5e1e8":s}function XT(a){const r=new Map;for(const s of Object.values(a.tables?.layer?.layers??{}))Number.isFinite(s.color)&&r.set(s.name,GT(s.color));return r}function WT(a,r,s,o){const l=o-s;if(!Number.isFinite(l))return[];const u=(l%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,m=Math.max(8,Math.min(96,Math.ceil(Math.abs(u)/(Math.PI/24))));return Array.from({length:m+1},(f,g)=>{const y=s+u*g/m;return{x:a.x+Math.cos(y)*r,y:a.y+Math.sin(y)*r}})}function KT(a,r){if(!Array.isArray(a))return[];const s=a.map(u=>{if(!u||typeof u!="object")return null;const m=u,f=xa(m);return f?{...f,bulge:It(m.bulge,0)}:null}).filter(u=>u!==null);if(s.length<2)return s.map(({x:u,y:m})=>({x:u,y:m}));const o=[{x:s[0].x,y:s[0].y}],l=r?s.length:s.length-1;for(let u=0;u<l;u+=1){const m=s[u],f=s[(u+1)%s.length],g=m.bulge,y=f.x-m.x,p=f.y-m.y,b=Math.hypot(y,p);if(Math.abs(g)<1e-5||b<1e-8){o.push({x:f.x,y:f.y});continue}const v=4*Math.atan(g),w=b*(1-g*g)/(4*g),_={x:(m.x+f.x)/2-p/b*w,y:(m.y+f.y)/2+y/b*w},D=Math.atan2(m.y-_.y,m.x-_.x),S=Math.max(4,Math.min(48,Math.ceil(Math.abs(v)/(Math.PI/16))));for(let T=1;T<=S;T+=1){const L=D+v*T/S;o.push({x:_.x+Math.cos(L)*Math.hypot(m.x-_.x,m.y-_.y),y:_.y+Math.sin(L)*Math.hypot(m.x-_.x,m.y-_.y)})}}return r&&o.length>1&&o.pop(),o}function ZT(a,r){const s=xa(a.position)??{x:0,y:0},o=xa(r.position)??{x:0,y:0},l=It(a.xScale,1),u=It(a.yScale,1),m=It(a.rotation,0)*Math.PI/180,f=Math.cos(m),g=Math.sin(m),y=f*l,p=g*l,b=-g*u,v=f*u;return[y,p,b,v,s.x-y*o.x-b*o.y,s.y-p*o.x-v*o.y]}function Ar(a,r,s,o,l){const u=r.map(m=>iv(o,m));u.length>=2&&a.paths.push({points:u,closed:s,color:l})}function cv(a,r,s,o,l,u,m=new Set,f=0){if(f>8){u.unsupported.add("nested block depth");return}for(const g of a){if(!g)continue;const y=g,p=String(y.type??"").toUpperCase();if(!p||y.visible===!1)continue;const b=VT(y,s,l);if(p==="INSERT"){const w=String(y.name??""),_=Object.entries(r).find(([L])=>L.toUpperCase()===w.toUpperCase())?.[1];if(!_||m.has(w.toUpperCase())){u.unsupported.add(p);continue}u.nestedInsertCount+=1;const D=YT(o,ZT(y,_)),S=y.layer&&y.layer!=="0"?s.get(y.layer)??l:l,T=new Set(m);T.add(w.toUpperCase()),cv(_.entities??[],r,s,D,S,u,T,f+1);continue}const v=HT(p,y,o);if(v&&u.primitives.push(v),p==="LINE"){Ar(u,ni(y.vertices),!1,o,b);continue}if(p==="CIRCLE"||p==="ARC"){const w=xa(y.center),_=It(y.radius,0);if(!w||_<=0)continue;const D=p==="ARC"?It(y.startAngle,0):0,S=p==="ARC"?It(y.endAngle,Math.PI*2):Math.PI*2;Ar(u,WT(w,_,D,S),p==="CIRCLE",o,b);continue}if(p==="ELLIPSE"){const w=xa(y.center),_=xa(y.majorAxisEndPoint),D=It(y.axisRatio,1);if(!w||!_||D<=0)continue;const S=It(y.startAngle,0),T=It(y.endAngle,Math.PI*2)-S;if(!Number.isFinite(T))continue;const L=(T%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,I=S+L,C=Math.max(12,Math.min(96,Math.ceil((I-S)*24))),x=Array.from({length:C+1},(O,R)=>{const P=S+(I-S)*R/C;return{x:w.x+_.x*Math.cos(P)-_.y*D*Math.sin(P),y:w.y+_.y*Math.cos(P)+_.x*D*Math.sin(P)}});Ar(u,x,Math.abs(I-S-Math.PI*2)<.03,o,b);continue}if(p==="LWPOLYLINE"||p==="POLYLINE"){const w=y.shape===!0||(Number(y.shape)&1)===1,_=KT(y.vertices,w);Ar(u,_,w,o,b);continue}if(p==="SOLID"||p==="3DFACE"){const w=ni(y.points??y.vertices);Ar(u,w,!0,o,b);continue}if(p==="SPLINE"){const w=ni(y.fitPoints).length>=2?ni(y.fitPoints):ni(y.controlPoints);Ar(u,w,y.closed===!0,o,b),w.length&&u.unsupported.add("SPLINE approximation");continue}if(p==="TEXT"||p==="MTEXT"||p==="ATTDEF"){const w=lv(y.text),_=xa(y.startPoint)??xa(y.position);if(!_||!w)continue;const D=iv(o,_),S=Math.max(1,It(y.textHeight,It(y.height,2.5))),T=Math.max(Math.hypot(o[0],o[1]),Math.hypot(o[2],o[3]),.1);u.texts.push({point:D,text:w,height:S*T,rotation:It(y.rotation,0)-Math.atan2(o[1],o[0])*180/Math.PI,color:b});continue}if(p==="POINT"){const w=xa(y.position);w&&(Ar(u,[{x:w.x-.5,y:w.y},{x:w.x+.5,y:w.y}],!1,o,b),Ar(u,[{x:w.x,y:w.y-.5},{x:w.x,y:w.y+.5}],!1,o,b));continue}u.unsupported.add(p)}}function dv(a){const r=[...a.paths.flatMap(s=>s.points),...a.texts.map(s=>s.point)];return r.length?{minX:Math.min(...r.map(s=>s.x)),minY:Math.min(...r.map(s=>s.y)),maxX:Math.max(...r.map(s=>s.x)),maxY:Math.max(...r.map(s=>s.y))}:null}function QT(a){const r=dv(a);if(!r)return;const s=Math.max(r.maxX-r.minX,1e-6),o=Math.max(r.maxY-r.minY,1e-6),l=Math.min((zl-zs*2)/s,(ai-zs*2)/o),u=p=>zs+(p-r.minX)*l+(zl-zs*2-s*l)/2,m=p=>ai-zs-(p-r.minY)*l-(ai-zs*2-o*l)/2,f=p=>p.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;"),g=a.paths.map(p=>{const b=p.points.map((v,w)=>`${w?"L":"M"}${u(v.x).toFixed(2)} ${m(v.y).toFixed(2)}`);return p.closed&&b.push("Z"),`<path d="${b.join(" ")}" fill="none" stroke="${p.color}" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>`}).join(""),y=a.texts.map(p=>{const b=u(p.point.x),v=m(p.point.y),w=Math.max(4,Math.min(20,p.height*l));return`<text x="${b.toFixed(2)}" y="${v.toFixed(2)}" fill="${p.color}" font-family="Arial Narrow,sans-serif" font-size="${w.toFixed(2)}" transform="rotate(${-p.rotation.toFixed(2)} ${b.toFixed(2)} ${v.toFixed(2)})">${f(p.text)}</text>`}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${zl} ${ai}" role="img"><rect width="${zl}" height="${ai}" fill="#0d1722"/>${g}${y}</svg>`}function JT(a,r,s){const o=xa(s.position)??{x:0,y:0},l=xa(r.position)??{x:0,y:0},u=It(s.xScale,1),m=It(s.yScale,1),f=It(s.rotation,0)*Math.PI/180,g=Math.cos(f),y=Math.sin(f),p=[{x:a.minX,y:a.minY},{x:a.minX,y:a.maxY},{x:a.maxX,y:a.minY},{x:a.maxX,y:a.maxY}].map(b=>{const v=(b.x-l.x)*u,w=(b.y-l.y)*m;return{x:o.x+g*v-y*w,y:o.y+y*v+g*w}});return{minX:Math.min(...p.map(b=>b.x)),minY:Math.min(...p.map(b=>b.y)),maxX:Math.max(...p.map(b=>b.x)),maxY:Math.max(...p.map(b=>b.y))}}function eA(a){return xa(a.startPoint)??xa(a.position)}function tA(a){return lv(a.text)}function uv(a,r){return r.map(s=>s).filter(s=>s.type?.toUpperCase()==="INSERT"&&String(s.name??"").toUpperCase()===a.toUpperCase())}function aA(a){const r=new Map;for(const s of a){const o=String(s.layer??"0").trim()||"0",l=It(s.rotation,0),u=Math.round((l%360+360)%360),m=`${o.toUpperCase()}|${u}`,f=r.get(m);f?f.count+=1:r.set(m,{layer:o,rotationDegrees:u,count:1})}return[...r.values()].sort((s,o)=>s.layer.localeCompare(o.layer)||s.rotationDegrees-o.rotationDegrees)}function nA(a,r,s,o){const l=uv(a,o),u=l.filter(b=>!zT(b.layer)),m=l.length>0&&u.length===0;if(ov(a))return{labels:[],skippedContextOnly:m};const f=o.map(b=>b).filter(b=>["TEXT","MTEXT","ATTRIB"].includes(String(b.type??"").toUpperCase())).map(b=>({text:tA(b),point:eA(b),height:Math.max(1,It(b.textHeight,It(b.height,2.5)))})).filter(b=>!!(b.text&&b.point)&&!Gp(b.text)),g=[];for(const b of u){const v=JT(s,r,b),w=(v.minY+v.maxY)/2,_=Math.max(v.maxX-v.minX,1),D=Math.max(v.maxY-v.minY,1),T=f.map(P=>{const k=P.point.x-v.maxX,ae=Math.abs(P.point.y-w),W=Math.max(_*8,P.height*40,30),ne=Math.max(D*1.1,P.height*7);return{...P,dx:k,dy:ae,score:Math.max(0,k)+ae*1.75,maxGap:W,maxVertical:ne}}).filter(P=>P.dx>=-P.height*.5&&P.dx<=P.maxGap&&P.dy<=P.maxVertical).filter(P=>P.dx>=0).sort((P,k)=>P.score-k.score),L=T.length?T:f.map(P=>({...P,dx:P.point.x-v.maxX,dy:Math.abs(P.point.y-w),score:Math.hypot(P.point.x-(v.minX+v.maxX)/2,P.point.y-w),maxGap:Math.max(_*10,P.height*50,40),maxVertical:Math.max(D*2,P.height*10)})).filter(P=>P.score<=Math.max(_*8,D*10,P.height*60)).sort((P,k)=>P.score-k.score),I=L[0];if(!I)continue;const C=Math.max(I.height*2,_*.04,.5),x=Math.max(I.height*7,D*.8),O=L.filter(P=>Math.abs(P.point.x-I.point.x)<=C&&Math.abs(P.point.y-I.point.y)<=x).sort((P,k)=>k.point.y-P.point.y).slice(0,8),R=[...new Set(O.map(P=>P.text))].join(" · ");R&&g.push({text:R,score:I.score})}const y=new Map;for(const b of g){const v=b.text.toLowerCase().replace(/\s+/g," ").trim(),w=y.get(v);(w===void 0||b.score<w.score)&&y.set(v,b)}const p=u.length>1&&y.size>1;return{labels:p?[]:[...y.values()].sort((b,v)=>b.score-v.score).slice(0,4).map(b=>b.text),skippedContextOnly:m,...p?{ambiguous:!0}:{}}}function sc(a,r){let s;try{s=new rv().parseSync(a)}catch(m){const f=m instanceof Error?m.message:"Unknown DXF parser error";throw new Error(`The overview DXF could not be read: ${f}`)}if(!s?.blocks||!Array.isArray(s.entities))throw new Error("The overview DXF does not contain readable block and model-space data.");const o=XT(s),l=new Map(Object.entries(s.blocks).map(([m,f])=>[m.toUpperCase(),f])),u=new Map;for(const m of new Set(r)){const f=l.get(m.toUpperCase());if(!f||m.startsWith("*"))continue;const g={paths:[],texts:[],unsupported:new Set,primitives:[],nestedInsertCount:0};cv(f.entities??[],s.blocks,o,UT,FT,g,new Set([f.name.toUpperCase()]));const y=dv(g),p=g.paths.flatMap(C=>C.points),b=p.length?{minX:Math.min(...p.map(C=>C.x)),minY:Math.min(...p.map(C=>C.y)),maxX:Math.max(...p.map(C=>C.x)),maxY:Math.max(...p.map(C=>C.y))}:null,v=b?b.maxX-b.minX:null,w=b?b.maxY-b.minY:null,_=g.primitives.reduce((C,x)=>(C[x.type]=(C[x.type]??0)+1,C),{}),D=s.header?.$INSUNITS,S={schemaVersion:1,blockName:m,unitsCode:typeof D=="number"&&Number.isInteger(D)?D:null,basePoint:vp(f.position)??{x:0,y:0,z:0},bounds:b,width:v,height:w,aspectRatio:v!==null&&w!==null&&w>0?v/w:null,primitiveCounts:_,primitives:g.primitives,nestedInsertCount:g.nestedInsertCount,unsupportedEntities:[...g.unsupported].sort(),transformPolicy:{allowedRotationsDegrees:null,mirrorAllowed:null,uniformScalingAllowed:null,nonUniformScalingAllowed:null,status:"UNSPECIFIED_REQUIRES_REVIEW"}},T=QT(g),L=aA(uv(m,s.entities)),I=y?nA(m,f,y,s.entities):{labels:[],skippedContextOnly:!1};u.set(m,{...T?{previewSvg:T}:{},geometryDescriptor:S,nearbyLabels:I.labels,...I.skippedContextOnly?{labelMatchSkipped:!0}:{},...I.ambiguous?{labelMatchAmbiguous:!0}:{},...L.length?{sourcePlacements:L}:{}})}return u}const ct=(a,r)=>a.find(s=>s.code===r)?.value.trim()??"",ua=a=>ct(a,0).toUpperCase(),Ys=a=>ct(a,ua(a)==="DIMSTYLE"?105:5).toUpperCase(),Yn=(...a)=>{const r=[];for(let s=0;s<a.length;s+=2)r.push({code:Number(a[s]),value:String(a[s+1])});return r},Ny=a=>a>=330&&a<=369||a>=390&&a<=399||a===480||a===481||a===1005,Yu=a=>["DICTIONARY","ACDBDICTIONARYWDFLT"].includes(ua(a)),rA=new Set(["BLOCK","ENDBLK","LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE","VERTEX","SEQEND","SPLINE","POINT","SOLID","TRACE","3DFACE","TEXT","MTEXT","ATTDEF","ATTRIB","INSERT","HATCH","DIMENSION","LEADER","TOLERANCE"]),sA=["VPORT","LTYPE","LAYER","STYLE","VIEW","UCS","APPID","DIMSTYLE","BLOCK_RECORD"];function Hn(a){const r=[];for(const s of a){if(s.code===0&&r.push([]),!r.length)throw new Error("Invalid DXF record boundary.");r[r.length-1].push(s)}return r}function oA(a){let r=0;return a.filter(s=>s.code===102&&s.value.trim()==="{BLKREFS"?(r=1,!1):r?(s.code===102&&s.value.trim().startsWith("{")&&r++,s.code===102&&s.value.trim()==="}"&&r--,!1):!0)}class Xp{sections=new Map;tables=new Map;blocks=new Map;modelRecords;text;objects;recordsByHandle=new Map;blockForRecord=new Map;tableForRecord=new Map;tableHandles=new Set;maxHandle=0;constructor(r){const s=eo(r);let o="";for(let p=0;p<s.content.length;p+=16384)o+=String.fromCharCode(...s.content.subarray(p,p+16384));this.text=o;const l=o.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;l.length&&l.at(-1)==="";)l.pop();if(l.length%2)throw new Error("DXF has an incomplete group-code/value pair.");const u=[];for(let p=0;p<l.length;p+=2){const b=Number(l[p].trim());if(!Number.isInteger(b))throw new Error("DXF has an invalid group code.");u.push({code:b,value:l[p+1]})}let m="";for(let p=0;p<u.length;p++){const b=u[p];if(b.code===0&&b.value.trim()==="SECTION"){if(m||u[p+1]?.code!==2)throw new Error("Invalid DXF section.");if(m=u[++p].value.trim().toUpperCase(),this.sections.has(m))throw new Error("Duplicate DXF section.");this.sections.set(m,[])}else b.code===0&&b.value.trim()==="ENDSEC"?m="":m&&this.sections.get(m).push(b)}if(m||!this.sections.has("BLOCKS")||!this.sections.has("ENTITIES"))throw new Error("A complete ASCII source DXF with BLOCKS and ENTITIES is required.");const f=Hn(this.sections.get("TABLES")??[]);let g;for(const p of f)if(ua(p)==="TABLE")g={name:ct(p,2).toUpperCase(),header:p,records:[]},this.tables.set(g.name,g),this.tableHandles.add(Ys(p));else if(ua(p)==="ENDTAB")g=void 0;else if(g){const b=ua(p)==="BLOCK_RECORD"?oA(p):p;g.records.push(b),this.tableForRecord.set(b,g)}let y;for(const p of Hn(this.sections.get("BLOCKS"))){if(ua(p)==="BLOCK"){const b=ct(p,2);if(y={name:b,records:[]},this.blocks.has(b.toUpperCase()))throw new Error("Duplicate source block definition.");this.blocks.set(b.toUpperCase(),y)}if(!y)throw new Error("DXF block definition is incomplete.");y.records.push(p),this.blockForRecord.set(p,y.name.toUpperCase()),ua(p)==="ENDBLK"&&(y=void 0)}if(y)throw new Error("DXF block definition has no ENDBLK.");this.modelRecords=Hn(this.sections.get("ENTITIES")),this.objects=Hn(this.sections.get("OBJECTS")??[]);for(const p of[...[...this.tables.values()].flatMap(b=>b.records),...[...this.blocks.values()].flatMap(b=>b.records),...this.modelRecords,...this.objects]){const b=Ys(p);if(b){if(this.recordsByHandle.has(b))throw new Error("Duplicate DXF entity handle.");this.recordsByHandle.set(b,p),this.maxHandle=Math.max(this.maxHandle,parseInt(b,16)||0)}}for(const p of this.tableHandles)this.maxHandle=Math.max(this.maxHandle,parseInt(p,16)||0)}placements(){const r=new Map;for(const s of this.modelRecords){if(ua(s)!=="INSERT"||ct(s,67)==="1"||ct(s,410)&&ct(s,410).toUpperCase()!=="MODEL")continue;const o=ct(s,2);if(!o||o.startsWith("*"))continue;const l=this.blocks.get(o.toUpperCase())?.name??o,u=r.get(l)??new Set;u.add(ct(s,8)||"0"),r.set(l,u)}return r}layerDetails(r){const s=this.tables.get("LAYER")?.records.find(o=>ct(o,2).toUpperCase()===r.toUpperCase());return s?`color=${Math.abs(Number(ct(s,62)||"7"))};lineweight=${ct(s,370)||"-3"};linetype=${ct(s,6)||"CONTINUOUS"}`:null}nativeAssetInfo(){const r=this.modelRecords.filter(l=>!["ATTRIB","VERTEX","SEQEND"].includes(ua(l))),s=r.length?Ys(r[0]):"";if(!r.length||!s)throw new Error("Native symbol DXF has no verifiable model-space geometry.");const o=this.tables.get("STYLE")?.records.flatMap(l=>[ct(l,3),ct(l,4)].filter(Boolean).flatMap(u=>/\.shx$/i.test(u)?[u]:u.includes(".")?[]:[`${u}.shx`]))??[];return{entityCount:r.length,firstHandle:s,requiredShapeFonts:[...new Set(o)]}}isolate(r){let s=this.maxHandle+1;const o=()=>(s++).toString(16).toUpperCase(),l=new Set,u=new Set,m=new Set,f=new Set,g=[],y=(z,G=!0)=>{Yu(z)&&G&&!m.has(z)&&(m.add(z),l.has(z)&&g.push(z)),l.has(z)||(l.add(z),g.push(z));const le=this.tableForRecord.get(z);le&&f.add(le)},p=z=>{const G=z.toUpperCase();if(u.has(G))return;const le=this.blocks.get(G);if(!le||G.startsWith("*MODEL_SPACE")||G.startsWith("*PAPER_SPACE"))throw new Error(`Missing or external block dependency: ${z}`);if(Number(ct(le.records[0],70))&28)throw new Error("External-reference blocks require native AutoCAD extraction.");u.add(G),le.records.forEach(be=>{if(!rA.has(ua(be)))throw new Error(`Unsupported native block entity: ${ua(be)}`);y(be)});const ue=this.tables.get("BLOCK_RECORD")?.records.find(be=>ct(be,2).toUpperCase()===G);if(!ue)throw new Error("Source block has no BLOCK_RECORD; save a modern ASCII DXF first.");y(ue)},b=(z,G,le=!0)=>{const ue=this.tables.get(z)?.records.find(be=>ct(be,2).toUpperCase()===G.toUpperCase());if(ue)z==="BLOCK_RECORD"?p(ct(ue,2)):y(ue);else if(le)throw new Error(`Missing ${z} dependency: ${G}`)};p(r);for(const z of sA){const G=this.tables.get(z);if(!G)throw new Error(`Native symbol DXF is missing required ${z} table after safe repair.`);if(f.add(G),z==="VPORT"){const le=G.records.find(ue=>ct(ue,2).toUpperCase()==="*ACTIVE");if(!le)throw new Error("Native symbol DXF has no active *ACTIVE VPORT record after safe repair.");y(le)}}b("LAYER","0");for(const z of["CONTINUOUS","BYLAYER","BYBLOCK"])b("LTYPE",z,!1);for(b("STYLE","STANDARD",!1),b("APPID","ACAD",!1),b("DIMSTYLE","STANDARD",!1);g.length;){const z=g.shift(),G=ua(z);if(/IMAGEDEF|UNDERLAY|PDFDEFINITION|DGNDEFINITION|DWFDEFINITION|PROXY/.test(G))throw new Error(`External/proxy dependency ${G} requires native AutoCAD extraction.`);(G==="INSERT"||G==="DIMENSION")&&p(ct(z,2)),G==="DIMENSION"&&b("DIMSTYLE",ct(z,3)||"STANDARD");for(let le=0;le<z.length;le++){const ue=z[le];if(ue.code===8&&b("LAYER",ue.value.trim()||"0"),ue.code===6&&!["BYLAYER","BYBLOCK",""].includes(ue.value.trim().toUpperCase())&&b("LTYPE",ue.value.trim()),ue.code===7&&ue.value.trim()&&b("STYLE",ue.value.trim()),ue.code===1001&&b("APPID",ue.value.trim()),!Ny(ue.code)||!ue.value.trim()||ue.value.trim()==="0"||Yu(z)&&[350,360].includes(ue.code)&&z[le-1]?.code===3&&!m.has(z))continue;const be=ue.value.trim().toUpperCase();if(this.tableHandles.has(be))continue;const Le=this.recordsByHandle.get(be);if(!Le)throw new Error(`Unresolved native DXF handle reference (${ue.code}).`);const ke=this.blockForRecord.get(Le);if(ke&&!u.has(ke))throw new Error("Block metadata references unrelated drawing geometry; use native AutoCAD extraction.");if(this.modelRecords.includes(Le))throw new Error("Block metadata references source model-space geometry; use native AutoCAD extraction.");ua(Le)==="BLOCK_RECORD"?p(ct(Le,2)):y(Le,ue.code!==330)}}const v=new Set,w=new Set,_=z=>{if(v.has(z))throw new Error("Circular block references cannot be isolated safely.");if(!w.has(z)){v.add(z);for(const G of this.blocks.get(z).records)["INSERT","DIMENSION"].includes(ua(G))&&_(ct(G,2).toUpperCase());v.delete(z),w.add(z)}};if(_(r.toUpperCase()),[...l].some(z=>/BLOCK.*(?:PARAMETER|ACTION)|BLOCKREPRESENTATION|EVALUATION_GRAPH/.test(ua(z))||z.some(G=>G.code===3&&/ACAD_ENHANCEDBLOCK/i.test(G.value))))throw new Error("Dynamic blocks require native AutoCAD extraction; their behavior is not approximated.");const D=this.tables.get("BLOCK_RECORD");f.add(D);const S=this.blocks.get(r.toUpperCase()),T=D.records.find(z=>ct(z,2).toUpperCase()===r.toUpperCase()),L=o(),I=(z,G)=>Yn(0,"BLOCK_RECORD",5,G,330,Ys(D.header),100,"AcDbSymbolTableRecord",100,"AcDbBlockTableRecord",2,z,70,0,280,1,281,0),C=z=>z.map(G=>[2,3].includes(G.code)?{...G,value:"*Model_Space"}:ua(z)==="BLOCK"&&[10,20,30,70].includes(G.code)?{...G,value:"0"}:G),x=[];for(const z of[...f].sort((G,le)=>G.name==="BLOCK_RECORD"?1:le.name==="BLOCK_RECORD"?-1:0)){const G=z.records.filter(le=>l.has(le)).map(le=>le===T?C(le):le);z.name==="BLOCK_RECORD"&&G.push(I("*Paper_Space",L)),x.push(...Yn(0,"TABLE",2,z.name,5,Ys(z.header),330,"0",100,"AcDbSymbolTable",70,G.length),...z.name==="DIMSTYLE"?Yn(100,"AcDbDimStyleTable"):[],...G.flat(),...Yn(0,"ENDTAB"))}const O=[...C(S.records[0]),...S.records.at(-1),...Yn(0,"BLOCK",5,o(),330,L,100,"AcDbEntity",8,"0",100,"AcDbBlockBegin",2,"*Paper_Space",70,0,10,0,20,0,30,0,3,"*Paper_Space",1,"",0,"ENDBLK",5,o(),330,L,100,"AcDbEntity",8,"0",100,"AcDbBlockEnd")];for(const z of u)z!==r.toUpperCase()&&O.push(...this.blocks.get(z).records.flat());const R=this.objects.filter(z=>l.has(z)).map(z=>!Yu(z)||m.has(z)?z:z.filter((G,le)=>G.code===3&&[350,360].includes(z[le+1]?.code)?l.has(this.recordsByHandle.get(z[le+1].value.trim().toUpperCase())):[350,360].includes(G.code)&&z[le-1]?.code===3?l.has(this.recordsByHandle.get(G.value.trim().toUpperCase())):!0)).flat(),P=S.records.slice(1,-1).flat();if(!P.length)throw new Error("The selected block contains no native entities.");const k=new Set(["$ACADVER","$DWGCODEPAGE","$INSUNITS","$MEASUREMENT","$LTSCALE","$CELTSCALE","$PSLTSCALE"]),ae=[];let W=!1;for(const z of this.sections.get("HEADER")??[])z.code===9&&(W=k.has(z.value.trim())),W&&ae.push(z);ae.push(...Yn(9,"$HANDSEED",5,o(),9,"$INSBASE",10,ct(S.records[0],10)||"0",20,ct(S.records[0],20)||"0",30,ct(S.records[0],30)||"0"));const ne=new Set([...l].map(z=>ua(z))),fe=Hn(this.sections.get("CLASSES")??[]).filter(z=>ne.has(ct(z,1).toUpperCase())).flat(),ie=(z,G)=>[...Yn(0,"SECTION",2,z),...G,...Yn(0,"ENDSEC")],re=[...ie("HEADER",ae),...fe.length?ie("CLASSES",fe):[],...ie("TABLES",x),...ie("BLOCKS",O),...ie("ENTITIES",P),...R.length?ie("OBJECTS",R):[],...Yn(0,"EOF")],H=new Set;for(const z of[...Hn(x),...Hn(O),...Hn(P),...Hn(R)]){const G=Ys(z);if(G){if(H.has(G))throw new Error("Duplicate handle in isolated DXF.");H.add(G)}}for(const z of re)if(Ny(z.code)&&z.value.trim()&&z.value.trim()!=="0"&&!H.has(z.value.trim().toUpperCase()))throw new Error(`A required DXF reference was not retained (${z.code}).`);const J=re.map(z=>`${z.code}\r
${z.value}\r
`).join(""),me=new Uint8Array(J.length);for(let z=0;z<J.length;z++)me[z]=J.charCodeAt(z);const xe=eo(me).content;let j="";for(let z=0;z<xe.length;z+=16384)j+=String.fromCharCode(...xe.subarray(z,z+16384));Hp(j);const te=new rv().parseSync(j);if(!te?.entities.length||!te.blocks?.["*Model_Space"])throw new Error("The isolated block DXF failed its structural round-trip validation.");return xe}}const Hu=(a,r)=>a.item.fields.find(s=>s.label===r)?.value.trim()??"";function Cy(a,r){const o=a.reviewCandidates.filter(f=>f.sourceGroup===r).filter(f=>f.item.category==="symbol"),u=[...a.companyItems,...Object.values(a.projects).flatMap(f=>f.items)].filter(f=>f.category==="symbol"&&f.fields.some(g=>g.label==="Source drawing ID"&&g.value===r)).filter(f=>f.reviewStatus==="reviewed"),m=[...new Set(u.flatMap(f=>f.fields.filter(g=>g.label==="Target CAD layer"||g.label==="Source insert layer(s)").map(g=>g.value).filter(Boolean)))];return{pending:o.filter(f=>f.status==="needs-review").length,approved:u.length,dismissed:o.filter(f=>f.status==="dismissed").length,layers:m}}function iA(a,r,s,o=new Set){if(a.format!=="DXF"||a.category!=="company-standard")throw new Error("Select a saved DXF classified as a Legends Library standard. DWG still uses the AutoCAD extractor.");const l=new Xp(r),u=l.placements(),m=[...u].filter(([,S])=>S.size===1&&!!mp[[...S][0].trim().toUpperCase()]),f=sc(l.text,m.map(([S])=>S)),g=[],y=[],p=new Map,b=[];let v=0;const w=new Set,_=[...s.reviewCandidates],D=(S,T,L,I=[])=>{const C=`extract-${a.id}-${S}-${T}`;return{id:C,proposedScope:"company",sourceGroup:a.id,status:"needs-review",item:{id:C,category:S==="BLOCK"?"symbol":"layer",name:`${S==="BLOCK"?"Block":"LAYER"} · ${T}`,summary:"Extracted from the saved DXF on this device. Only verified placement layers can be batch-approved.",sourceFile:a.label,sourceKind:"extracted-dwg",scope:"company",reviewStatus:"needs-review",canPromote:!1,fields:[{label:S==="BLOCK"?"Block name":"CAD name",value:T},{label:"Source drawing ID",value:a.id},{label:"Source discipline",value:a.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:L},...I]}}};for(const[S,T]of u){const L=[...T][0];if(T.size!==1||!mp[L.trim().toUpperCase()]){b.push({blockName:S,reason:T.size>1?"Mixed placement layers; review required.":"Internal or unsupported placement layer."});continue}const I=_.find(R=>R.sourceGroup===a.id&&Hu(R,"Block name").toUpperCase()===S.toUpperCase()),C=[...s.companyItems,...Object.values(s.projects).flatMap(R=>R.items)].some(R=>R.fields.some(P=>P.label==="Source drawing ID"&&P.value===a.id)&&R.fields.some(P=>P.label==="Block name"&&P.value.trim().toUpperCase()===S.toUpperCase()));if(I&&I.status!=="needs-review"||C){v++;continue}if(!l.layerDetails(L)){b.push({blockName:S,reason:"The placement layer has no LAYER table record."});continue}const O=I&&Hu(I,"Block asset ID")||`${a.id}|${S}`;try{if(!o.has(O)){const P=l.isolate(S),k=f.get(S);g.push({id:O,sourceId:a.id,blockName:S,content:P,format:"DXF",previewSvg:k?.previewSvg??null,nearbyLabels:k?.nearbyLabels??[],labelMatchAmbiguous:k?.labelMatchAmbiguous??!1,labelMatchSkipped:k?.labelMatchSkipped??!0,sourcePlacements:k?.sourcePlacements??[],...k?.geometryDescriptor?{geometryDescriptor:k.geometryDescriptor}:{}})}const R=D("BLOCK",S,`sourceLayer=${L};nativeIsolatedDxf=true`,[{label:"Block asset ID",value:O},{label:"Fallback category",value:""},{label:"Source insert layer(s)",value:L}]);if(I){const P=new Set(["Extracted details","Source insert layer(s)","Block asset ID"]);p.set(I.id,{...I,item:{...I.item,fields:[...I.item.fields.filter(k=>!P.has(k.label)),...R.item.fields.filter(k=>P.has(k.label))]}})}else y.push(R);w.add(L)}catch(R){b.push({blockName:S,reason:R instanceof Error?R.message:"Native DXF isolation failed."})}}for(const S of w){const T=_.some(I=>I.sourceGroup===a.id&&I.item.category==="layer"&&Hu(I,"CAD name").toUpperCase()===S.toUpperCase()),L=s.companyItems.some(I=>I.category==="layer"&&I.fields.some(C=>C.label==="Source drawing ID"&&C.value===a.id)&&I.fields.some(C=>C.label==="CAD name"&&C.value.toUpperCase()===S.toUpperCase()));!T&&!L&&y.push(D("LAYER",S,l.layerDetails(S)))}return{library:{...s,reviewCandidates:[...s.reviewCandidates.map(S=>p.get(S.id)??S),...y]},assets:g,skipped:b,preserved:v,prepared:w.size?g.length:0,eligibleSymbols:m.length,addedSymbols:y.filter(S=>S.item.category==="symbol").length,updatedSymbols:p.size,detectedLayers:[...new Set([...u.values()].flatMap(S=>[...S]))]}}const lA=40*1024*1024,cA=40*1024*1024,dA=48,uA=15,pA=32;function fA(a){const r=[];let s=0;for(;s<a.length;){const o=a[s];if(/\s/.test(o)){s+=1;continue}if(o==="("||o===")"){r.push(o),s+=1;continue}if(o==="."&&(s+1===a.length||/[\s)]/.test(a[s+1]))){r.push(o),s+=1;continue}if(o==='"'){let u="";for(s+=1;s<a.length&&a[s]!=='"';)if(a[s]==="\\"&&s+1<a.length){s+=1;const m=a[s];u+=m==="n"?`
`:m==="r"?"\r":m,s+=1}else u+=a[s],s+=1;if(a[s]!=='"')throw new Error("The AutoCAD geometry log contains an unfinished string value.");s+=1,r.push(JSON.stringify(u));continue}const l=s;for(;s<a.length&&!/[\s()]/.test(a[s]);)s+=1;if(l===s)throw new Error("The AutoCAD geometry log contains an invalid value.");r.push(a.slice(l,s))}return r}function Ep(a,r,s=0){if(s>40)throw new Error("The AutoCAD geometry log nesting is too deep to read safely.");const o=a[r.index++];if(o===void 0)throw new Error("The AutoCAD geometry log contains an incomplete geometry record.");if(o!=="("){if(o===")")throw new Error("The AutoCAD geometry log contains an unexpected closing bracket.");return o.startsWith('"')?JSON.parse(o):/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(o)?Number(o):o.toLowerCase()==="nil"?null:o.toUpperCase()==="T"?!0:o}const l=[];for(;r.index<a.length&&a[r.index]!==")";){if(a[r.index]==="."){if(l.length!==1)throw new Error("The AutoCAD geometry log contains a malformed pair.");r.index+=1;const u=Ep(a,r,s+1);if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains a malformed pair.");return{kind:"pair",first:l[0],rest:u}}l.push(Ep(a,r,s+1))}if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains an incomplete list.");return l}function Kl(a){const r=fA(a),s={index:0},o=Ep(r,s);if(s.index!==r.length)throw new Error("The AutoCAD geometry log has trailing geometry data.");return o}function Zl(a,r){if(Array.isArray(a))for(const s of a){if(s&&typeof s=="object"&&!Array.isArray(s)&&"kind"in s&&String(s.first)===r)return s.rest;if(Array.isArray(s)&&s.length>=2&&s[0]===r)return s.length===2?s[1]:s.slice(1)}}function hA(a,r){return!Array.isArray(a)||a.length<r||a.slice(0,r).some(s=>typeof s!="number"||!Number.isFinite(s))?null:a.slice(0,r)}function gA(a){if(!Array.isArray(a))return{};const r={};for(const s of a){if(s&&typeof s=="object"&&!Array.isArray(s)&&"kind"in s){const o=s;typeof o.first=="string"&&typeof o.rest=="number"&&Number.isFinite(o.rest)&&(r[o.first]=o.rest);continue}!Array.isArray(s)||typeof s[0]!="string"||typeof s[1]!="number"||!Number.isFinite(s[1])||(r[s[0]]=s[1])}return r}function mA(a){const r=Kl(a);return Array.isArray(r)?r.filter(s=>typeof s=="string"):[]}function yA(a){if(new TextEncoder().encode(a).byteLength>lA)throw new Error("The AutoCAD geometry log is over the 40 MB local review limit.");const r=new Map,s=[],o=new Set;for(const l of a.split(/\r?\n/)){if(l.startsWith("SCAN|")){const D=l.split("|");D[1]&&Number.isInteger(Number(D[2]))&&o.add(`${D[1]}:${Number(D[2])}`);continue}if(l.startsWith("ENTITY|")){const D=l.indexOf("|NORMALIZED=");if(D<0)continue;const S=l.slice(0,D).split("|"),T=S[3]?.trim(),L=S[4]?.trim().toUpperCase();if(!T||!L)continue;const I=Kl(l.slice(D+12));r.set(T,{handle:T,type:L,descriptor:I});continue}if(!l.startsWith("CANDIDATE|"))continue;const u=l.split("|"),m=D=>u.find(S=>S.startsWith(`${D}=`))?.slice(D.length+1),f=u[3]?.trim(),g=u[1]?.trim(),y=Number(u[2]),p=m("SOURCE_HANDLES"),b=m("BOUNDS"),v=m("PRIMITIVE_COUNTS");if(!f||!g||!Number.isInteger(y)||!p)continue;const w=b?Kl(b):null,_=hA(w,4);s.push({id:f,sourceAlias:g,page:y,handles:mA(p),bounds:_,primitiveCounts:v?gA(Kl(v)):{}})}if(r.size===0||o.size===0)throw new Error("This log has no readable geometry scans. Use AUTOCAD_GEOMETRY_SCAN.log from a current runner.");return{entities:r,candidates:s,pages:o.size}}function wp(a){return typeof a=="number"&&Number.isFinite(a)?[a]:Array.isArray(a)?a.flatMap(wp):[]}function pv(a){return Array.isArray(a)?a.flatMap(r=>{if(r&&typeof r=="object"&&!Array.isArray(r)&&"kind"in r){const s=r;return typeof s.first=="number"&&Number.isFinite(s.first)?[{code:s.first,values:wp(s.rest)}]:[]}return Array.isArray(r)&&typeof r[0]=="number"?[{code:r[0],values:r.slice(1).flatMap(wp)}]:[]}):[]}function bA(a){return pv(Zl(a,"properties"))}function Hs(a,r,s=0){const o=a.filter(l=>l.code===r)[s];return!o||o.values.length<2?null:{x:o.values[0],y:o.values[1]}}function xp(a,r,s){if(!Number.isFinite(s)||Math.abs(s)<1e-5)return[a,r];const o=r.x-a.x,l=r.y-a.y,u=Math.hypot(o,l);if(u<1e-9)return[a,r];const m=4*Math.atan(s),f=u*(1-s*s)/(4*s),g={x:(a.x+r.x)/2-l/u*f,y:(a.y+r.y)/2+o/u*f},y=Math.atan2(a.y-g.y,a.x-g.x),p=Math.hypot(a.x-g.x,a.y-g.y),b=Math.max(4,Math.min(32,Math.ceil(Math.abs(m)/(Math.PI/12))));return Array.from({length:b+1},(v,w)=>{const _=y+m*w/b;return{x:g.x+Math.cos(_)*p,y:g.y+Math.sin(_)*p}})}function fv(a){const r=bA(a.descriptor),s=a.type;if(s==="LINE"){const o=Hs(r,10),l=Hs(r,11);return o&&l?[o,l]:[]}if(s==="CIRCLE"||s==="ARC"){const o=Hs(r,10),l=r.find(b=>b.code===40)?.values[0]??0;if(!o||l<=0)return[];const u=r.find(b=>b.code===50)?.values[0]??0,m=r.find(b=>b.code===51)?.values[0]??Math.PI*2,f=b=>Math.abs(b)>Math.PI*2+.1?b*Math.PI/180:b,g=s==="CIRCLE"?0:f(u);let y=s==="CIRCLE"?Math.PI*2:f(m)-g;for(;y<=0;)y+=Math.PI*2;const p=Math.max(12,Math.min(48,Math.ceil(y/(Math.PI/12))));return Array.from({length:p+1},(b,v)=>{const w=g+y*v/p;return{x:o.x+Math.cos(w)*l,y:o.y+Math.sin(w)*l}})}if(s==="LWPOLYLINE"){const o=[];let l=null;for(const g of r)g.code===10&&g.values.length>=2?(l={point:{x:g.values[0],y:g.values[1]},bulge:0},o.push(l)):g.code===42&&l&&(l.bulge=g.values[0]??0);const u=Zl(a.descriptor,"closed")===!0;if(o.length<2)return o.map(g=>g.point);const m=[],f=u?o.length:o.length-1;for(let g=0;g<f;g+=1){const y=o[g],p=o[(g+1)%o.length],b=xp(y.point,p.point,y.bulge);m.push(...g?b.slice(1):b)}return u||m.push(o[o.length-1].point),m}if(s==="POLYLINE"){const o=Zl(a.descriptor,"polylineVertices");if(!Array.isArray(o))return[];const l=o.flatMap(g=>{const y=pv(g),p=Hs(y,10);return p?[{point:p,bulge:y.find(b=>b.code===42)?.values[0]??0}]:[]});if(l.length<2)return l.map(g=>g.point);const u=Zl(a.descriptor,"closed")===!0,m=u?l.length:l.length-1,f=[];for(let g=0;g<m;g+=1){const y=l[g],p=l[(g+1)%l.length],b=xp(y.point,p.point,y.bulge);f.push(...g?b.slice(1):b)}return u||f.push(l[l.length-1].point),f}if(s==="ELLIPSE"){const o=Hs(r,10),l=Hs(r,11),u=r.find(p=>p.code===40)?.values[0]??0;if(!o||!l||u<=0)return[];const m=r.find(p=>p.code===41)?.values[0]??0;let g=(r.find(p=>p.code===42)?.values[0]??Math.PI*2)-m;for(;g<=0;)g+=Math.PI*2;if(!Number.isFinite(g)||g>Math.PI*2+1e-6)return[];const y=Math.max(12,Math.min(96,Math.ceil(g/(Math.PI/24))));return Array.from({length:y+1},(p,b)=>{const v=m+g*b/y,w=Math.cos(v),_=Math.sin(v)*u;return{x:o.x+l.x*w-l.y*_,y:o.y+l.y*w+l.x*_}})}return s==="SPLINE"?r.filter(o=>o.code===11&&o.values.length>=2).map(o=>({x:o.values[0],y:o.values[1]})):[]}function hv(a){const r=a.geometry,s=a.transform,o=u=>({x:s[0]*u.x+s[2]*u.y+s[4],y:s[1]*u.x+s[3]*u.y+s[5]}),l=r.vertices??r.fitPoints??r.controlPoints;if((a.type==="LINE"||a.type==="SPLINE")&&l?.length)return l.map(o);if(a.type==="LWPOLYLINE"||a.type==="POLYLINE"){if(!l?.length)return[];const u=r.closed===!0,m=[],f=u?l.length:l.length-1;for(let g=0;g<f;g+=1){const y=l[g],p=l[(g+1)%l.length],b=xp(y,p,y.bulge??0).map(o);m.push(...g?b.slice(1):b)}return u||m.push(o(l[l.length-1])),m}if(a.type==="CIRCLE"||a.type==="ARC"){const u=r.center,m=Number(r.radius);if(!u||!Number.isFinite(m)||m<=0)return[];const f=a.type==="ARC"?Number(r.startAngle??0):0;let g=a.type==="ARC"?Number(r.endAngle??f+Math.PI*2)-f:Math.PI*2;for(;g<=0;)g+=Math.PI*2;const y=Math.max(12,Math.min(48,Math.ceil(g/(Math.PI/12))));return Array.from({length:y+1},(p,b)=>{const v=f+g*b/y;return o({x:u.x+Math.cos(v)*m,y:u.y+Math.sin(v)*m})})}if(a.type==="ELLIPSE"){const u=r.center,m=r.majorAxisEndPoint,f=Number(r.axisRatio);if(!u||!m||!Number.isFinite(f)||f<=0)return[];const g=Number(r.startAngle??0);let p=Number(r.endAngle??Math.PI*2)-g;for(;p<=0;)p+=Math.PI*2;if(!Number.isFinite(p)||p>Math.PI*2+1e-6)return[];const b=Math.max(12,Math.min(96,Math.ceil(p/(Math.PI/24))));return Array.from({length:b+1},(v,w)=>{const _=g+p*w/b;return o({x:u.x+m.x*Math.cos(_)-m.y*f*Math.sin(_),y:u.y+m.y*Math.cos(_)+m.x*f*Math.sin(_)})})}return[]}function gv(a,r=dA){return a.length<=r?a:Array.from({length:r},(s,o)=>a[Math.floor(o*(a.length-1)/(r-1))])}function Sp(a){const r=gv(a.filter(l=>Number.isFinite(l.x)&&Number.isFinite(l.y)));if(r.length<2)return[];const s={x:r.reduce((l,u)=>l+u.x,0)/r.length,y:r.reduce((l,u)=>l+u.y,0)/r.length},o=Math.sqrt(r.reduce((l,u)=>l+(u.x-s.x)**2+(u.y-s.y)**2,0)/r.length);return!Number.isFinite(o)||o<1e-9?[]:r.map(l=>({x:(l.x-s.x)/o,y:(l.y-s.y)/o}))}function Tp(a){return a.length?{minX:Math.min(...a.map(r=>r.x)),minY:Math.min(...a.map(r=>r.y)),maxX:Math.max(...a.map(r=>r.x)),maxY:Math.max(...a.map(r=>r.y))}:null}function Ry(a){return a?Math.hypot(a.maxX-a.minX,a.maxY-a.minY):0}function _y(a,r){const s=new Set([...Object.keys(a),...Object.keys(r)]);let o=0,l=0;for(const u of s){const m=a[u]??0,f=r[u]??0;o+=Math.max(m,f),l+=Math.abs(m-f)}return o===0?0:Math.max(0,1-l/(2*o))}function Iy(a,r){if(!a||!r)return 0;const s=Math.max(a.maxX-a.minX,1e-9),o=Math.max(a.maxY-a.minY,1e-9),l=Math.max(r.maxX-r.minX,1e-9),u=Math.max(r.maxY-r.minY,1e-9),m=Math.max(s/o,o/s),f=Math.max(l/u,u/l);return Math.exp(-Math.abs(Math.log(m/f)))}function Ly(a,r){let s=0;for(const o of a){let l=Number.POSITIVE_INFINITY;for(const u of r){const m=(o.x-u.x)**2+(o.y-u.y)**2;m<l&&(l=m)}s+=l}return s/a.length}function vA(a,r){let s=Number.POSITIVE_INFINITY,o=0;for(let l=0;l<360;l+=uA){const u=l*Math.PI/180,m=Math.cos(u),f=Math.sin(u),g=r.map(p=>({x:m*p.x-f*p.y,y:f*p.x+m*p.y})),y=Math.sqrt((Ly(a,g)+Ly(g,a))/2);y<s&&(s=y,o=l)}return{residual:s,rotation:o}}function EA(a,r){return a.handles.flatMap(s=>{const o=r.get(s);return o?fv(o):[]})}function wA(a,r){const s=new Set;for(const o of a.handles){const l=r.get(o);(!l||fv(l).length<2)&&s.add(l?.type??"MISSING_ENTITY")}return[...s].sort()}function Py(a){return a.primitives.flatMap(hv)}function xA(a){const r=new Set(["LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE"]),s=new Set(["TEXT","MTEXT","ATTRIB","ATTDEF","HATCH","DIMENSION","LEADER","MLEADER"]),o=a.unsupportedEntities.filter(b=>!s.has(b.toUpperCase())),l=a.primitives.filter(b=>r.has(b.type));if(o.length>0||l.length===0)return null;for(const b of l)if((b.type==="LWPOLYLINE"||b.type==="POLYLINE")&&(b.geometry.vertices??[]).some(v=>Math.abs(v.bulge??0)>1e-6))return null;const u=l.flatMap(hv),m=gv(Sp(u),24);if(m.length<2)return null;const f=Tp(u);if(!f)return null;const g={PATH:0,CURVE:0};for(const b of l)b.type==="LINE"||b.type==="LWPOLYLINE"||b.type==="POLYLINE"?g.PATH+=1:g.CURVE+=1;const y=f.maxX-f.minX,p=f.maxY-f.minY;return y<=1e-9||p<=1e-9?null:{points:m.map(b=>[b.x,b.y]),primitiveClasses:g,aspectRatio:Math.max(y/p,p/y)}}function SA(a,r){if(new TextEncoder().encode(a).byteLength>cA)throw new Error("The CAD block geometry index is over the 40 MB local review limit.");let s;try{s=JSON.parse(a)}catch{throw new Error("The selected file is not valid CAD_BLOCK_GEOMETRY_INDEX.json.")}if(!s||typeof s!="object"||s.localOnly!==!0||!Array.isArray(s.blocks))throw new Error("This is not a local-only CAD block geometry index from the runner package.");return s.blocks.filter(o=>o.indexStatus==="INDEXED"&&(o.discipline===r||o.discipline==="Shared")&&typeof o.blockName=="string"&&typeof o.blockAssetId=="string"&&o.geometry&&typeof o.geometry=="object")}function TA(a,r,s){const o=yA(a),u=SA(r,s).flatMap(f=>{const g=f.geometry,y=Sp(Py(g));return!y.length||!g.bounds?[]:[{block:f,geometry:g,cloud:y,bounds:Tp(Py(g)),primitiveCounts:g.primitiveCounts??{}}]}),m=o.candidates.map(f=>{const g=wA(f,o.entities);if(g.length)return{...f,best:null,second:null,status:"UNMATCHED",reason:`Matching withheld because candidate geometry is incomplete or unsupported: ${g.join(", ")}.`};const y=EA(f,o.entities),p=Sp(y),b=f.bounds?{minX:f.bounds[0],minY:f.bounds[1],maxX:f.bounds[2],maxY:f.bounds[3]}:Tp(y);if(u.length===0)return{...f,best:null,second:null,status:"NO_INDEXED_BLOCKS",reason:"No indexed approved blocks for this discipline."};if(p.length<2||!b)return{...f,best:null,second:null,status:"UNMATCHED",reason:"Candidate has too little supported geometry to compare."};const w=u.map(I=>({prepared:I,coarse:Iy(b,I.geometry.bounds)*.75+_y(f.primitiveCounts,I.primitiveCounts)*.25})).sort((I,C)=>C.coarse-I.coarse).slice(0,pA).map(({prepared:I})=>I).map(I=>{const C=_y(f.primitiveCounts,I.primitiveCounts),x=Iy(b,I.geometry.bounds),O=vA(p,I.cloud),R=Math.exp(-O.residual*2.5),P=Math.max(0,Math.min(1,R*.7+C*.2+x*.1)),k=Ry(b),ae=Ry(I.geometry.bounds),W=String(I.block.category??""),ne=/\b(equipment|tower|vessel|tank|exchanger|column|drum)\b/i.test(W);return{blockAssetId:String(I.block.blockAssetId),blockName:String(I.block.blockName),category:W,targetLayer:String(I.block.targetLayer??""),score:P,geometryResidual:O.residual,primitiveSimilarity:C,aspectSimilarity:x,rotationDegrees:O.rotation,estimatedUniformScale:ne||ae<=1e-9?null:k/ae,indexStatus:String(I.block.indexStatus)}}).sort((I,C)=>C.score-I.score||I.blockName.localeCompare(C.blockName)),_=w[0]??null,D=w[1]??null,S=_&&D?_.score-D.score:Number.POSITIVE_INFINITY,T=!_||_.score<.9?"UNMATCHED":S<.02?"AMBIGUOUS_REVIEW":_.score>=.97?"HIGH_CANDIDATE_REVIEW":"REVIEW";return{...f,best:_,second:D,status:T,reason:T==="AMBIGUOUS_REVIEW"?"Top library shapes are too close to identify safely.":T==="UNMATCHED"?"No geometry match reached the initial review threshold.":"Experimental shape score only; human confirmation is required."}});return{scan:o,candidates:m,indexedBlockCount:u.length}}function AA(a,r){return JSON.stringify({schemaVersion:1,localOnly:!0,discipline:r,generatedAt:new Date().toISOString(),note:"Experimental geometry similarity rankings. Scores are not probabilities or approvals. Source geometry was not changed; every candidate requires human review.",pagesScanned:a.scan.pages,indexedBlocks:a.indexedBlockCount,candidates:a.candidates},null,2)}function ky(a){return a===void 0?"—":`${(a*100).toFixed(1)}%`}function DA(a){return a==null?"Review":`${a.toFixed(3)}×`}function NA({discipline:a}){const[r,s]=M.useState(null),[o,l]=M.useState(null),[u,m]=M.useState(null),[f,g]=M.useState(""),[y,p]=M.useState(!1),b=async()=>{if(!r||!o){g("Choose both AUTOCAD_GEOMETRY_SCAN.log and CAD_BLOCK_GEOMETRY_INDEX.json.");return}p(!0),g(""),m(null);try{const[w,_]=await Promise.all([r.text(),o.text()]),D=TA(w,_,a);m({scanName:r.name,indexName:o.name,discipline:a,indexedBlockCount:D.indexedBlockCount,pagesScanned:D.scan.pages,candidates:D.candidates})}catch(w){g(w instanceof Error?w.message:"The local geometry report could not be compared.")}finally{p(!1)}},v=()=>{if(!u)return;const w=AA({scan:{entities:new Map,candidates:[],pages:u.pagesScanned},candidates:u.candidates,indexedBlockCount:u.indexedBlockCount},u.discipline),_=URL.createObjectURL(new Blob([w],{type:"application/json"})),D=document.createElement("a");D.href=_,D.download="LOCAL_GEOMETRY_MATCH_REVIEW.json",D.click(),URL.revokeObjectURL(_)};return c.jsxs("section",{className:"geometry-match-review","aria-labelledby":"geometry-match-title","data-testid":"panel-geometry-match-review",children:[c.jsxs("div",{className:"geometry-match-heading",children:[c.jsx("span",{className:"geometry-match-icon",children:c.jsx(Nw,{size:16})}),c.jsxs("div",{children:[c.jsx("h3",{id:"geometry-match-title",children:"Review geometry matches"}),c.jsx("p",{children:"Compare a local AutoCAD scan with indexed approved blocks. Source drawings are not changed."})]})]}),c.jsxs("div",{className:"geometry-match-privacy",children:[c.jsx(Qu,{size:14})," Both files are read and compared in this browser; nothing is uploaded."]}),c.jsx("p",{className:"geometry-match-instructions",children:"Use the scan log from AutoCAD and the index file from that same runner kit. The result is a local review aid only."}),c.jsxs("div",{className:"geometry-match-inputs",children:[c.jsxs("label",{children:[c.jsx("span",{children:"AutoCAD geometry scan log"}),c.jsx("input",{type:"file",accept:".log,.txt","aria-label":"Select AutoCAD geometry scan log",onChange:w=>{s(w.currentTarget.files?.[0]??null),m(null),g("")},"data-testid":"input-geometry-scan-log"})]}),c.jsxs("label",{children:[c.jsx("span",{children:"CAD block geometry index"}),c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Select CAD block geometry index",onChange:w=>{l(w.currentTarget.files?.[0]??null),m(null),g("")},"data-testid":"input-cad-geometry-index"})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:y||!r||!o,"data-testid":"button-build-geometry-match-report",children:[c.jsx(ts,{size:14}),y?"Comparing…":"Compare geometry"]})]}),f&&c.jsx("p",{className:"geometry-match-error",role:"alert",children:f}),u&&c.jsxs("div",{className:"geometry-match-results","data-testid":"geometry-match-results",children:[c.jsxs("div",{className:"geometry-match-summary",role:"status",children:[u.discipline,": ",u.candidates.length," candidate group(s) across ",u.pagesScanned," page(s); ",u.indexedBlockCount," indexed approved block(s)."]}),u.indexedBlockCount===0&&c.jsx("p",{className:"geometry-match-warning",children:"No matching indexed blocks were found for this discipline. Check that the selected index came from the same local runner package."}),u.indexedBlockCount>0&&u.candidates.length===0&&c.jsx("p",{className:"geometry-match-warning",children:"AutoCAD found no geometry candidate groups on the scanned pages. No blocks were inserted or drawings changed."}),u.candidates.map(w=>c.jsxs("article",{className:"geometry-match-card",children:[c.jsxs("div",{className:"geometry-match-card-head",children:[c.jsx("strong",{children:w.id}),c.jsx("span",{className:`geometry-match-status status-${w.status.toLowerCase()}`,children:w.status.replaceAll("_"," ")})]}),c.jsxs("div",{className:"geometry-match-card-meta",children:["Page ",w.page," · ",w.handles.length," source entities · ",w.sourceAlias]}),c.jsxs("div",{className:"geometry-match-ranking",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Best shape match"}),c.jsx("strong",{children:w.best?.blockName??"No match"}),c.jsxs("small",{children:[ky(w.best?.score)," · ",w.best?.targetLayer||"no target layer"," ·"," ",w.best?.rotationDegrees??"—","° · scale ",DA(w.best?.estimatedUniformScale)]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Second match"}),c.jsx("strong",{children:w.second?.blockName??"—"}),c.jsx("small",{children:ky(w.second?.score)})]})]}),c.jsx("p",{children:w.reason})]},`${w.sourceAlias}-${w.page}-${w.id}`)),c.jsxs("div",{className:"geometry-match-foot",children:[c.jsx("span",{children:"Experimental shape scores are not probabilities or approvals. Every result needs a person to verify it."}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:v,"data-testid":"button-download-geometry-match-report",children:[c.jsx(Rr,{size:13})," Download local report"]})]})]})]})}const Oy=250*1024*1024,jy=500*1024*1024,Ap={"needs-review":"Needs review","company-standard":"Legends Library standard","project-example":"Project example","markup-reference":"Markup reference",ignore:"Do not use"};function qy(a,r){return r&&a==="project-example"?"Client-specific library source":Ap[a]}function Vu(){return globalThis.crypto?.randomUUID?.()??`source-${Date.now()}-${Math.random().toString(36).slice(2)}`}function Gu(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(2)} MB`}function My(a){return(a.replace(/\\/g,"/").split("/").pop()??"").replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,"").trim().slice(0,180)||"Unnamed CAD drawing"}function CA({onAddPdfs:a,discipline:r,clientFolderId:s,clientFolderLabel:o}){const[l,u]=M.useState([]),[m,f]=M.useState({}),[g,y]=M.useState([]),[p,b]=M.useState([]),[v,w]=M.useState(""),[_,D]=M.useState(""),[S,T]=M.useState(!1),[L,I]=M.useState(!1),[C,x]=M.useState(""),[O,R]=M.useState(!1),[P,k]=M.useState(()=>{try{return En().reviewCandidates.filter(F=>F.status==="needs-review").length}catch{return 0}}),[ae,W]=M.useState(!1),[ne,fe]=M.useState(""),[ie,re]=M.useState(!1),[H,J]=M.useState(!1),[me,xe]=M.useState(0),[j,te]=M.useState([]);M.useEffect(()=>{const F=()=>xe(he=>he+1);return window.addEventListener(vi,F),window.addEventListener("storage",F),window.addEventListener("focus",F),()=>{window.removeEventListener(vi,F),window.removeEventListener("storage",F),window.removeEventListener("focus",F)}},[]);const z=M.useMemo(()=>{try{const F=En();return Object.fromEntries(l.map(he=>[he.id,Cy(F,he.id)]))}catch{return{}}},[l,me]);M.useEffect(()=>{rc().then(F=>{u(F),f(Object.fromEntries(F.map(he=>[he.id,{category:he.category,discipline:he.discipline,projectLabel:he.projectLabel}])))}).catch(F=>{x(F instanceof Error?F.message:"The local CAD library could not be opened.")})},[]);const G=M.useMemo(()=>XS(l,r,s),[l,r,s]),le=M.useMemo(()=>G.filter(F=>F.category==="company-standard"||!!s&&F.category==="project-example"&&F.projectLabel===s),[G,s]);M.useEffect(()=>{le.some(F=>F.id===ne)||fe(le[0]?.id??"")},[le,ne]);const ue=M.useMemo(()=>G.reduce((F,he)=>(F[he.category]+=1,F),{"needs-review":0,"company-standard":0,"project-example":0,"markup-reference":0,ignore:0}),[G]),be=g.some(F=>s?F.projectLabel!==s:!!F.projectLabel),Le=async F=>{T(!0),D(""),x(""),w(""),R(!1),y([]),b([]);try{if(F.size>Oy)throw new Error("The archive is larger than the 250 MB limit for this local test.");const he=gy(new Uint8Array(await F.arrayBuffer())),ge=Object.entries(he).filter(([Fe])=>!Fe.endsWith("/")),Y=ge.filter(([Fe])=>/\.(dwg|dxf)$/i.test(Fe)&&!/_OVERVIEW\.dxf$/i.test(Fe)),pe=ge.filter(([Fe])=>/\.pdf$/i.test(Fe)),Ne=ge.filter(([Fe])=>/\.bak$/i.test(Fe)).length;if([...Y,...pe].reduce((Fe,[,$e])=>Fe+$e.byteLength,0)>jy)throw new Error("The PDF and CAD source files together exceed the 500 MB local test limit.");if(Y.length===0&&pe.length===0)throw new Error("No PDF, DWG, or source DXF files were found in this ZIP. Overview DXFs and other file types are not saved as source drawings.");const qe=Y.map(([Fe,$e],Qt)=>({id:Vu(),label:`Source CAD ${String(l.length+Qt+1).padStart(3,"0")}`,reviewFilename:My(Fe),category:"needs-review",discipline:r,format:/\.dxf$/i.test(Fe)?"DXF":"DWG",projectLabel:s??"",bytes:$e.byteLength,content:$e})),Ze=pe.map(([,Fe],$e)=>({id:Vu(),label:`PDF ${String($e+1).padStart(2,"0")}`,file:new File([Fe],`SOURCE_${String($e+1).padStart(2,"0")}.pdf`,{type:"application/pdf"})}));y(qe),b(Ze),w(`Found ${Y.length} CAD drawing file(s) and ${pe.length} PDF file(s). ${Ne} backup file(s) ignored.`),Y.length?D("Assign a use to each CAD drawing before saving it. ZIP filenames are shown only during review; the saved library keeps generic source IDs."):D("No CAD drawings to add. You can add the extracted PDF to the conversion queue.")}catch(he){x(he instanceof Error?he.message:"The ZIP could not be read. Check that it is not damaged or password-protected.")}finally{T(!1)}},ke=async F=>{x(""),w(""),D(""),y([]),b([]),R(!1);const he=F.filter(Y=>/\.(dwg|dxf)$/i.test(Y.name)&&!/_OVERVIEW\.dxf$/i.test(Y.name));if(he.length!==F.length){x("Choose source DWG/DXF files only. Overview DXFs are not source drawings.");return}if(he.reduce((Y,pe)=>Y+pe.size,0)>jy){x("The selected CAD source files exceed the 500 MB local test limit.");return}if(!he.length){x("Choose at least one DWG or DXF source drawing.");return}T(!0);try{const Y=await Promise.all(he.map(async(pe,Ne)=>({id:Vu(),label:`Source CAD ${String(l.length+Ne+1).padStart(3,"0")}`,reviewFilename:My(pe.name),category:"needs-review",discipline:r,format:/\.dxf$/i.test(pe.name)?"DXF":"DWG",projectLabel:s??"",bytes:pe.size,content:new Uint8Array(await pe.arrayBuffer())})));y(Y),w(`Prepared ${Y.length} CAD source file(s) for local review.`),D("Choose the correct discipline and local library category for each file. Filenames are discarded when saved.")}catch(Y){x(Y instanceof Error?Y.message:"The CAD files could not be read locally.")}finally{T(!1)}},ht=async()=>{if(be){x("The selected client folder changed after these files were staged. Re-select the original client folder or add the files again.");return}if(g.some(F=>F.category==="needs-review")){x("Choose a category for every CAD drawing before saving the library.");return}if(g.some(F=>["project-example","markup-reference"].includes(F.category)&&!F.projectLabel?.trim())){x("Enter a neutral project code for every project example and markup reference.");return}I(!0),x("");try{let F=0;const he=g.filter(pe=>pe.category!=="ignore").map(pe=>{const Ne=pe.format==="DXF"?eo(pe.content):null;return F+=Ne?.repairs.length??0,{id:pe.id,label:pe.label,category:pe.category,discipline:pe.discipline,format:pe.format,projectLabel:pe.projectLabel,bytes:Ne?.content.byteLength??pe.bytes,content:Ne?.content??pe.content}});await aT(he);const ge=await rc();u(ge),f(Object.fromEntries(ge.map(pe=>[pe.id,{category:pe.category,discipline:pe.discipline,projectLabel:pe.projectLabel}])));const Y=g.length-he.length;y([]),D(`${he.length} source CAD drawing(s) saved in this browser's local library. ${Y} marked “Do not use”. ${F} DXF symbol name(s) repaired in local copies; original disk files unchanged.`)}catch(F){x(F instanceof Error?F.message:"The CAD sources could not be saved locally.")}finally{I(!1)}},at=(F,he)=>{f(ge=>({...ge,[F.id]:{...F,...ge[F.id],...he}}))},ot=async F=>{const he=m[F.id]??{category:F.category,discipline:F.discipline,projectLabel:F.projectLabel,standardsMaster:F.standardsMaster};if(["project-example","markup-reference"].includes(he.category)&&!he.projectLabel?.trim()){x("Enter a neutral project code before saving this project-specific source.");return}x("");try{await nT(F.id,he),u(ge=>ge.map(Y=>Y.id===F.id?{...Y,...he,...he.projectLabel?.trim()?{projectLabel:he.projectLabel.trim()}:{projectLabel:void 0}}:Y))}catch(ge){x(ge instanceof Error?ge.message:"The source drawing category could not be changed.")}},dt=async()=>{if(!(!le.length||ae)){W(!0),x("");try{const F=await uT(le),he=URL.createObjectURL(F),ge=document.createElement("a");ge.href=he,ge.download="local-cad-extractor-kit.zip",ge.click(),window.setTimeout(()=>URL.revokeObjectURL(he),1e3),D(`Local extractor kit prepared with ${le.length} source CAD drawing(s).`)}catch(F){x(F instanceof Error?F.message:"The local extractor kit could not be prepared.")}finally{W(!1)}}},Lt=async F=>{const he=le.some(Y=>Y.id===ne)?ne:le[0]?.id,ge=le.find(Y=>Y.id===he);if(!ge){x("Choose a reviewed source drawing before importing its extraction.");return}if(ge.category==="project-example"&&!ge.projectLabel?.trim()){x("Add a neutral project code to this source drawing before importing its extraction.");return}re(!0),x("");try{if(F.size>Oy)throw new Error("The extraction ZIP is larger than the 250 MB limit for this local test.");const Y=gy(new Uint8Array(await F.arrayBuffer())),pe=Object.entries(Y).find(([Je])=>/\.tsv$/i.test(Je));if(!pe)throw new Error("The ZIP must contain CAD_STANDARDS.tsv from PIDEXTRACTSTANDARDS.");const ye=new TextDecoder().decode(pe[1]).split(/\r?\n/).filter(Boolean);if(ye.length<2||!ye[0].toUpperCase().includes("KIND")||!ye[0].toUpperCase().includes("NAME"))throw new Error("The ZIP contains an invalid CAD_STANDARDS.tsv extraction.");const qe=En(),Ze=Object.entries(Y).filter(([Je])=>/_OVERVIEW\.dxf$/i.test(Je)),Fe=ye[1]?.split("	")[0]?.trim()??"",$e=Ze.find(([Je])=>Je.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===`${Fe}_OVERVIEW.dxf`.toLowerCase());if(Ze.length&&(!$e||Ze.length!==1))throw new Error("Include exactly one overview DXF for this extraction, named with the same SOURCE alias as the TSV (for example SOURCE_001_OVERVIEW.dxf).");const Qt=ye.slice(1).flatMap(Je=>{const[,ga,Yt]=Je.split("	");return ga?.trim().toUpperCase()==="BLOCK"&&Yt?.trim()?[Yt.trim()]:[]});if($e&&$e[1].byteLength>30*1024*1024)throw new Error("The overview DXF exceeds the 30 MB preview limit. Keep the original extraction unchanged and export a smaller Legends-only overview.");let we=null,Ue="",Ce=!1;if($e)we=new TextDecoder("windows-1252").decode($e[1]),Ue="overview DXF";else if(ge.format==="DXF"&&ge.bytes<=30*1024*1024)try{we=new TextDecoder("windows-1252").decode(await Qs(ge.id)),Ue="saved source DXF"}catch{Ce=!0}else ge.format==="DXF"&&(Ce=!0);let ra=new Map;if(we)try{ra=sc(we,Qt)}catch{Ce=!0}const qt=[],_a=[],Mt=[];for(const Je of ye.slice(1)){const[,ga,Yt,Dn=""]=Je.split("	"),Pe=ga?.trim().toUpperCase(),$t=Yt?.trim();if(!$t||!$y[Pe])continue;const yt=Pe==="BLOCK"&&ov($t)?"directionArrow":$y[Pe],Qe=Pe==="BLOCK"?ra.get($t):void 0;let va;if(Pe==="BLOCK"){const Vt=Dn.match(/(?:^|;)asset=([^;]+)/i)?.[1]?.trim();if(!Vt){Mt.push($t);continue}const At=Vt.replaceAll("\\","/").split("/").at(-1),Dt=Object.entries(Y).find(([Ft])=>Ft.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===At?.toLowerCase());if(!At||!Dt){Mt.push($t);continue}va=`${ge.id}|${$t}`,_a.push({id:va,sourceId:ge.id,blockName:$t,content:Dt[1],format:"DWG",...we&&!Ce?{previewSvg:Qe?.previewSvg??null,nearbyLabels:Qe?.nearbyLabels??[],labelMatchSkipped:Qe?.labelMatchSkipped??!1,labelMatchAmbiguous:Qe?.labelMatchAmbiguous??!1,sourcePlacements:Qe?.sourcePlacements??[],...Qe?.geometryDescriptor?{geometryDescriptor:Qe.geometryDescriptor}:{}}:{}})}const en=`extract-${ge.id}-${Pe}-${$t}`;if(qe.reviewCandidates.find(Vt=>Vt.id===en))continue;const Ht=ge.category==="project-example",za=[{label:Pe==="BLOCK"?"Block name":"CAD name",value:$t},{label:"Source drawing ID",value:ge.id},{label:"Source discipline",value:ge.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:Dn.replace(/(?:^|;)asset=[^;]*/i,"").trim()||"No additional table details"},...Pe==="BLOCK"?[{label:"Block asset ID",value:va??""},{label:"Fallback category",value:""},...Qe?.sourcePlacements?.length?[{label:"Source insert layer(s)",value:[...new Set(Qe.sourcePlacements.map(Vt=>Vt.layer))].join(", ")},{label:"Source insert rotation(s)",value:Qe.sourcePlacements.map(Vt=>`${Vt.rotationDegrees}° on ${Vt.layer} (${Vt.count})`).join("; ")}]:[]]:[]];qt.push({id:en,item:{id:en,category:yt,name:`${yt==="directionArrow"?"Direction Arrow":Pe==="BLOCK"?"Block":Pe.replaceAll("_"," ")} · ${$t}`,summary:"Extracted locally from a source CAD drawing; confirm each value before use.",sourceFile:ge.label,sourceKind:"extracted-dwg",scope:Ht?"project":"company",reviewStatus:"needs-review",...Ht?{projectId:ge.projectLabel,projectName:ge.projectLabel===s&&o||ge.projectLabel}:{},canPromote:!1,fields:za},proposedScope:Ht?"project":"company",sourceGroup:ge.id,...Ht?{projectId:ge.projectLabel,projectName:ge.projectLabel===s&&o||ge.projectLabel}:{},status:"needs-review"})}const Ba={...qe,reviewCandidates:[...qe.reviewCandidates,...qt],auditTrail:qt.length?[{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:"Local CAD extraction added for review",detail:`${qt.length} extracted records from ${ge.label} were added as pending review.`,...ge.projectLabel?{projectName:ge.projectLabel===s&&o||ge.projectLabel}:{}},...qe.auditTrail]:qe.auditTrail},Pt=we&&!Ce?Ty(Ba,ge.id,ra).library:Ba;await bp(_a),Ei(Pt),k(Pt.reviewCandidates.filter(Je=>Je.status==="needs-review").length),D((qt.length?`${qt.length} extracted record(s) added to Drafting standards for review. Nothing was approved automatically.`:"No new records found; the extracted names are already in the review queue or standards library.")+(ra.size?` ${ra.size} local block previews and source placement-layer details read from the ${Ue}. Nearby labels remain suggestions and need confirmation.`:Ce?" The source preview could not be read; the valid extracted records were still imported without preview-based layer evidence.":ge.format==="DWG"&&!$e?" To identify DWG blocks and their placement layers, include the source *_OVERVIEW.dxf exported with PIDEXPORTOVERVIEW.":"")+(Mt.length?` ${Mt.length} block asset(s) were missing and skipped: ${[...new Set(Mt)].slice(0,5).join(", ")}${Mt.length>5?", …":""}. Other valid records were kept.`:""))}catch(Y){x(Y instanceof Error?Y.message:"The CAD extraction could not be imported.")}finally{re(!1)}},gt=async()=>{const F=le.find(ge=>ge.id===ne&&ge.category==="company-standard"),he=F?[F.id]:[];if(!(!F||H)){J(!0),x(""),D(""),te([]);try{let ge=En();const Y=JSON.stringify(ge);let pe="";if(F.format==="DXF"){D(`${F.label}: extracting native blocks from the saved DXF on this device…`),await new Promise(Ce=>window.setTimeout(Ce,0));const we=await QS(),Ue=iA(F,await Qs(F.id),ge,we);if(JSON.stringify(En())!==Y)throw new Error("The library changed during DXF preparation. No records were changed; retry with the latest library.");await bp(Ue.assets,!0),ge=Ue.library,te(Ue.skipped),pe=`${Ue.addedSymbols} new symbol record(s), ${Ue.assets.length} native block file(s) saved; ${Ue.preserved} previously reviewed symbol(s) preserved. ${Ue.skipped.length} item(s) excluded or need native extraction/review. `}const Ne=ge.reviewCandidates.filter(we=>we.sourceGroup===F.id&&we.status==="needs-review"&&we.proposedScope==="company"&&we.item.category==="symbol"&&we.item.sourceKind==="extracted-dwg");if(!Ne.length){const we=Cy(ge,F.id);D(`${F.label}: ${pe}No pending symbols to approve. ${we.approved} already approved; ${we.dismissed} dismissed. ${F.format==="DXF"?"Only named model-space INSERTs on supported placement layers can be extracted. See excluded items below; loose geometry is not guessed into blocks.":"For DWG, import this source’s extraction ZIP with its individual block files."}`);return}let ye="";if(F.format==="DXF"){if(F.bytes>30*1024*1024)throw new Error("This saved source DXF exceeds the 30 MB recovery limit. Import its extraction with a smaller Legends-only overview DXF.");const we=await Qs(F.id),Ue=Ne.map(qt=>qt.item.fields.find(_a=>_a.label==="Block name")?.value.trim()??"").filter(Boolean),Ce=sc(new TextDecoder("windows-1252").decode(we),Ue),ra=Ty(ge,F.id,Ce);ge=ra.library,ye=`${ra.recoveredSymbols} pending symbol(s) have INSERT-layer evidence in the saved DXF; ${ra.updatedRecords} existing record(s) updated. `}const qe=new Set(he),Ze=new Set(ge.reviewCandidates.filter(we=>we.status==="needs-review"&&qe.has(we.sourceGroup)&&we.item.category==="symbol").map(we=>we.item.fields.find(Ue=>Ue.label==="Block asset ID")?.value.trim()??"").filter(Boolean)),Fe=new Set;await Promise.all([...Ze].map(async we=>{try{await av(we),Fe.add(we)}catch{}}));const $e=FS(ge,he,Fe);if(JSON.stringify(En())!==Y)throw new Error("The local standards library changed while this source was being checked. No approval changes were saved; retry to use the latest records.");Ei($e.library),k($e.library.reviewCandidates.filter(we=>we.status==="needs-review").length);const Qt=Object.values($e.skipped).reduce((we,Ue)=>we+Ue,0);D(`${F.label}: ${pe}${ye}`+($e.approvedSymbols?`${$e.approvedSymbols} layer-matched symbol(s) approved for shared PFD/P&ID use; ${$e.approvedLayers} placement layer(s) approved or updated.`:"0 symbols approved. Only exact placement layers with local block files and a matching layer record can be approved.")),Qt&&D(we=>`${we} ${$e.skipped.missingAsset} missing asset(s), ${$e.skipped.unsupportedLayer} internal/unsupported layer item(s), ${$e.skipped.ambiguousLayer} ambiguous layer item(s), ${$e.skipped.missingLayer} missing layer record(s), and ${$e.skipped.invalidCandidate} invalid item(s) stayed unapproved.`)}catch(ge){D(""),x(ge instanceof Error?ge.message:"The categorized CAD mappings could not be approved locally.")}finally{J(!1)}}};return c.jsxs("section",{className:"local-cad-library","aria-labelledby":"local-library-title","data-testid":"panel-local-cad-library",children:[c.jsxs("div",{className:"local-library-heading",children:[c.jsx("div",{className:"local-library-icon",children:c.jsx(qp,{size:17})}),c.jsxs("div",{className:"local-library-title",children:[c.jsx("div",{className:"pdf-kicker",children:"SOURCE DRAWINGS · LOCAL ONLY"}),c.jsx("h3",{id:"local-library-title",children:s?"Client Source Library":"Legends Library"}),c.jsx("p",{children:s?`Manage CAD sources for ${o||"this client folder"}. Company standards remain the common default.`:"Add common company standards here. Select a Client folder first to add client-specific sources."})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-files",children:[S?c.jsx(Ca,{size:14,className:"pdf-spin"}):c.jsx(ts,{size:14}),S?"Reading…":"Add DWG/DXF",c.jsx("input",{type:"file",accept:".dwg,.dxf,application/acad,application/x-dwg,application/dxf",multiple:!0,"aria-label":"Add local DWG or DXF source files",disabled:S,onChange:F=>{const he=[...F.currentTarget.files??[]];he.length&&ke(he),F.currentTarget.value=""},"data-testid":"input-add-cad-files"})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-archive",children:[S?c.jsx(Ca,{size:14,className:"pdf-spin"}):c.jsx(Op,{size:14}),S?"Reading ZIP…":"Add ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Add a ZIP with PDF and DWG/DXF source files",disabled:S,onChange:F=>{const he=F.currentTarget.files?.[0];he&&Le(he),F.currentTarget.value=""},"data-testid":"input-add-cad-archive"})]})]}),c.jsxs("div",{className:"local-library-privacy",children:[c.jsx(Wn,{size:14}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay in this browser."})," ",s?"This client source list is separate from the company Legends Library and other client folders.":"Company-standard sources remain shared defaults; project/client examples stay separate from them."]})]}),c.jsxs("div",{className:"local-library-extraction",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:[c.jsx(Tw,{size:14})," Extract drawing standards locally"]}),c.jsx("span",{children:"Package eligible DWG/DXF drawings with a Windows AutoCAD script. It exports only blocks actually inserted on approved equipment, instrument, or inline-component layers—unused internal definitions are skipped. Source drawings are not uploaded or changed."})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{dt()},disabled:!le.length||ae,"data-testid":"button-download-cad-extractor",children:[ae?c.jsx(Ca,{size:13,className:"pdf-spin"}):c.jsx(Rr,{size:13}),ae?"Preparing…":"Download extractor kit"]})]}),le.length>0&&c.jsxs("div",{className:"local-library-import",children:[c.jsxs("label",{children:[c.jsx("span",{children:"Import AutoCAD extraction"}),c.jsx("select",{value:ne||le[0].id,disabled:H||ie,onChange:F=>{fe(F.target.value),D(""),te([])},"aria-label":"Source drawing for extracted CAD standards",children:le.map(F=>c.jsxs("option",{value:F.id,children:[F.label," · ",F.format??"DWG"," · ",z[F.id]?.pending??0," pending / ",z[F.id]?.approved??0," approved",F.projectLabel?` · ${F.projectLabel}`:""]},F.id))})]}),c.jsxs("label",{className:"btn subtle local-library-import-button",children:[ie?c.jsx(Ca,{size:13,className:"pdf-spin"}):c.jsx(ts,{size:13}),ie?"Importing…":"Import extraction ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Import AutoCAD extraction ZIP",disabled:ie||H,onChange:F=>{const he=F.currentTarget.files?.[0];he&&Lt(he),F.currentTarget.value=""}})]})]}),!s&&le.some(F=>F.category==="company-standard")&&c.jsxs("div",{className:"local-library-approval",children:[c.jsxs("div",{children:[c.jsx("strong",{children:"Approve supplied company symbols by placement layer"}),c.jsxs("span",{"data-testid":"status-selected-cad-source",children:[le.find(F=>F.id===ne)?.label,": ",z[ne]?.pending??0," pending symbols · ",z[ne]?.approved??0," approved · ",z[ne]?.dismissed??0," dismissed.",z[ne]?.layers.length?` Approved placement layers: ${z[ne].layers.join(", ")}.`:""]}),c.jsx("span",{children:"Saved DXF: this action first extracts individual native blocks locally, then approves eligible placement-layer mappings. Existing approvals, dismissed records and saved block files are not replaced. DWG: import its AutoCAD extraction ZIP first."}),c.jsx("span",{children:"Approves only the selected company source; repeat for each source. EQUIP/f_Equip → equipment, f_Inst → instruments, f_Pipe_Inline → inline components. Mappings are shared across PFD and P&ID; internal, ambiguous, and missing-asset items stay pending."})]}),c.jsxs("button",{className:"btn primary",type:"button",disabled:H||ie||!le.some(F=>F.id===ne&&F.category==="company-standard"),onClick:()=>{gt()},"data-testid":"button-approve-categorized-company-symbols",children:[H?c.jsx(Ca,{size:13,className:"pdf-spin"}):c.jsx(Xs,{size:13}),H?"Extracting / approving locally…":"Approve selected source"]})]}),C&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-library-error",children:[c.jsx(_r,{size:15}),c.jsx("span",{children:C})]}),_&&c.jsx("p",{className:"local-library-message",role:"status","aria-live":"polite","data-testid":"status-cad-source-action",children:_}),j.length>0&&c.jsxs("details",{className:"local-library-message",children:[c.jsxs("summary",{children:[j.length," excluded / review-required DXF items — show reasons"]}),c.jsx("ul",{children:j.map(F=>c.jsxs("li",{children:[F.blockName,": ",F.reason]},F.blockName))})]}),c.jsxs("div",{className:"local-library-summary","aria-label":"Local library totals",children:[c.jsxs("span",{children:[c.jsx("strong",{children:G.length})," saved CAD sources",s?` for ${o||"this client"}`:` for ${r}`]}),c.jsxs("span",{children:[c.jsx("strong",{children:ue["company-standard"]})," Legends Library sources"]}),c.jsxs("span",{children:[c.jsx("strong",{children:ue["project-example"]+ue["markup-reference"]})," reference drawings"]}),ue["needs-review"]>0&&c.jsxs("span",{className:"local-library-review-count",children:[c.jsx("strong",{children:ue["needs-review"]})," need review"]})]}),c.jsx(NA,{discipline:r}),P>0&&c.jsxs(fa,{href:r==="PFD"?"/standards-review/pfd":"/standards-review/pid",className:"btn primary local-library-review-link","data-testid":"link-review-extracted-standards",children:[c.jsx(mw,{size:15}),"Review extracted standards",c.jsx("span",{children:P})]}),be&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-source-folder-mismatch",children:[c.jsx(_r,{size:15}),c.jsx("span",{children:"These staged drawings belong to a different folder. Re-select that client or add them again here."})]}),v&&c.jsx("div",{className:"local-library-archive-summary",role:"status",children:v}),p.length>0&&c.jsxs("div",{className:"local-library-pdf-list","aria-label":"PDF files found in ZIP",children:[p.map(F=>c.jsxs("div",{className:"local-library-pdf-row",children:[c.jsx(Xn,{size:15}),c.jsx("span",{children:F.label}),c.jsx("span",{className:"pdf-file-meta",children:Gu(F.file.size)})]},F.id)),c.jsxs("button",{className:"btn subtle",type:"button",disabled:O,onClick:()=>{a(p.map(({file:F})=>F)),R(!0)},"data-testid":"button-add-archive-pdfs",children:[O?c.jsx(Xs,{size:14}):c.jsx(ts,{size:14}),O?"PDFs added to queue":"Add PDF(s) to conversion queue"]})]}),g.length>0&&c.jsxs("div",{className:"local-library-staging",children:[c.jsxs("div",{className:"local-library-staging-title",children:[c.jsx("strong",{children:s?"Choose how each client CAD drawing will be used":"Choose what each CAD drawing is for"}),c.jsx("span",{children:"Unmarked files will not be saved."})]}),g.map(F=>c.jsxs("label",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-name",children:[c.jsx("span",{className:"local-library-source-id",children:F.label}),c.jsxs("span",{className:"local-library-review-filename",title:F.reviewFilename,children:["Selected filename: ",F.reviewFilename]})]}),c.jsx("span",{className:"pdf-file-meta",children:Gu(F.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Category for ${F.label}`,value:F.category,onChange:he=>{const ge=he.target.value;y(Y=>Y.map(pe=>pe.id===F.id?{...pe,category:ge}:pe))},"data-testid":`select-category-${F.id}`,children:Object.entries(Ap).filter(([he])=>s?["needs-review","project-example","markup-reference","ignore"].includes(he):["needs-review","company-standard","ignore"].includes(he)).map(([he,ge])=>c.jsx("option",{value:he,children:qy(he,s)},he))}),c.jsx("select",{"aria-label":`Discipline for ${F.label}`,value:F.discipline,onChange:he=>{const ge=he.target.value;y(Y=>Y.map(pe=>pe.id===F.id?{...pe,discipline:ge}:pe))},"data-testid":`select-discipline-${F.id}`,children:["PFD","P&ID","Shared"].map(he=>c.jsx("option",{value:he,children:he},he))}),["project-example","markup-reference"].includes(F.category)&&!s&&c.jsx("input",{"aria-label":`Project code for ${F.label}`,placeholder:"Neutral project code",value:F.projectLabel,onChange:he=>y(ge=>ge.map(Y=>Y.id===F.id?{...Y,projectLabel:he.target.value}:Y)),"data-testid":`input-project-${F.id}`}),s&&["project-example","markup-reference"].includes(F.category)&&c.jsx("span",{className:"local-library-scope-tag",children:"Saved only in this client folder"})]})]},F.id)),c.jsxs("button",{className:"btn primary local-library-save",type:"button",disabled:L||be||g.some(F=>F.category==="needs-review"||["project-example","markup-reference"].includes(F.category)&&!F.projectLabel?.trim()),onClick:()=>{ht()},"data-testid":"button-save-local-library",children:[L?c.jsx(Ca,{size:14,className:"pdf-spin"}):c.jsx($m,{size:14}),L?"Saving locally…":"Save reviewed sources locally"]})]}),G.length>0&&c.jsxs("details",{className:"local-library-saved-list",children:[c.jsxs("summary",{children:["Saved source drawings for ",r," (",G.length,")"]}),c.jsx("div",{className:"local-library-saved-items",children:G.map(F=>c.jsxs("div",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-id",children:[F.label," · ",F.format??"DWG",s?` · ${F.category==="company-standard"?"Company standard":"This client"}`:F.projectLabel?` · ${F.projectLabel}`:""]}),c.jsx("span",{className:"pdf-file-meta",children:Gu(F.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Change category for ${F.label}`,value:(m[F.id]??F).category,disabled:!!(s&&F.category==="company-standard"),onChange:he=>at(F,{category:he.target.value}),"data-testid":`saved-category-${F.id}`,children:Object.entries(Ap).filter(([he])=>!s||["project-example","markup-reference","ignore"].includes(he)||F.category==="company-standard"&&he==="company-standard").map(([he,ge])=>c.jsx("option",{value:he,children:qy(he,s)},he))}),c.jsx("select",{"aria-label":`Change discipline for ${F.label}`,value:(m[F.id]??F).discipline,disabled:!!(s&&F.category==="company-standard"),onChange:he=>at(F,{discipline:he.target.value}),"data-testid":`saved-discipline-${F.id}`,children:["PFD","P&ID","Shared"].map(he=>c.jsx("option",{value:he,children:he},he))}),!s&&F.format==="DXF"&&(m[F.id]??F).category==="company-standard"&&c.jsxs("label",{children:[c.jsx("input",{type:"checkbox","aria-label":`Use ${F.label} as global Legends master`,checked:!!(m[F.id]??F).standardsMaster,onChange:he=>at(F,{standardsMaster:he.target.checked})}),"Global Legends master · all ",F.discipline==="Shared"?"PFD/P&ID":F.discipline," projects"]}),!s&&["project-example","markup-reference"].includes((m[F.id]??F).category)&&c.jsx("input",{"aria-label":`Neutral project code for ${F.label}`,placeholder:"Neutral project code",value:(m[F.id]??F).projectLabel??"",onChange:he=>at(F,{projectLabel:he.target.value}),"data-testid":`saved-project-${F.id}`}),c.jsxs("button",{className:"btn subtle local-library-save-row",type:"button",disabled:!!(s&&F.category==="company-standard"),onClick:()=>{ot(F)},"data-testid":`button-save-source-${F.id}`,children:[c.jsx($m,{size:12})," Save"]})]})]},F.id))})]}),c.jsx("p",{className:"local-library-limit",children:"Extracted records enter the standards review queue. Only approved mappings are offered to the matching PFD or P&ID runner. Original DWG/DXF sources stay local; only individually exported block files are included with approved mappings."})]})}const $y={BLOCK:"symbol",LAYER:"layer",TEXT_STYLE:"textStyle",LINETYPE:"linetype",DIMENSION_STYLE:"dimensionStyle"},Dp=100*1024*1024,Np=500*1024*1024,RA="pid-studio-local-pdfs",Ra="meta",Kn="bytes",ns="extractedText";class Zt extends Error{code;constructor(r,s){super(s),this.code=r}}let Vs=null,Fy=Promise.resolve();function Pr(){return Vs||(Vs=new Promise((a,r)=>{if(typeof indexedDB>"u"){r(new Zt("storage","This browser does not allow local file storage."));return}const s=indexedDB.open(RA,2);s.onupgradeneeded=o=>{const l=s.result;o.oldVersion<1&&(l.createObjectStore(Ra,{keyPath:"id"}).createIndex("discipline","discipline"),l.createObjectStore(Kn)),o.oldVersion<2&&l.createObjectStore(ns)},s.onsuccess=()=>{s.result.onversionchange=()=>{s.result.close(),Vs=null},a(s.result)},s.onerror=()=>{Vs=null,r(new Zt("storage","Local storage could not be opened."))},s.onblocked=()=>{Vs=null,r(new Zt("storage","Local file storage is busy in another tab. Close that tab and reload."))}})),Vs}function Ii(a){return new Promise((r,s)=>{a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)})}function Li(a){return new Promise((r,s)=>{a.oncomplete=()=>r(),a.onerror=()=>s(a.error),a.onabort=()=>s(a.error??new Zt("storage","Local storage write was stopped."))})}function Pi(a){const r=Fy.then(a,a);return Fy=r.catch(()=>{}),r}async function Ws(a){const r=await Pr();return(await Ii(r.transaction(Ra).objectStore(Ra).index("discipline").getAll(a))).sort((o,l)=>o.aliasNumber-l.aliasNumber)}async function _A(){const a=await Pr();return(await Ii(a.transaction(Ra).objectStore(Ra).getAll())).reduce((s,o)=>s+o.size,0)}async function Uy(a){const r=globalThis.crypto?.subtle;if(!r)throw new Error("hash-unsupported");const s=await r.digest("SHA-256",a);return Array.from(new Uint8Array(s)).map(o=>o.toString(16).padStart(2,"0")).join("")}function IA(a,r){return Pi(async()=>{if(!r())throw new Zt("cancelled","Cancelled.");const s=a.bytes.byteLength;if(s>Dp)throw new Zt("too-large","This PDF is larger than 100 MB.");const l=(await Pr()).transaction([Ra,Kn],"readwrite"),u=Li(l);u.catch(()=>{});const m=l.objectStore(Ra),f=await Ii(m.getAll());if(!r())throw l.abort(),new Zt("cancelled","Cancelled.");if(f.some(b=>b.discipline===a.discipline&&b.hash===a.hash))throw l.abort(),new Zt("duplicate","This PDF has the same content as a saved file.");if(f.reduce((b,v)=>b+v.size,0)+s>Np)throw l.abort(),new Zt("total-limit","Saved PDFs would pass the 500 MB total limit.");const y=f.filter(b=>b.discipline===a.discipline).reduce((b,v)=>Math.max(b,v.aliasNumber),0)+1,p={id:globalThis.crypto?.randomUUID?.()??`pdf-${Date.now()}-${Math.random().toString(36).slice(2)}`,discipline:a.discipline,aliasNumber:y,alias:`PDF ${y}`,originalName:a.originalName?.trim()||void 0,size:s,pageCount:a.pageCount,hash:a.hash,addedAt:Date.now(),analysisStatus:"queued",analysisPagesDone:0,analysisRecordCount:0,autocadStatus:"not-connected"};m.put(p),l.objectStore(Kn).put(a.bytes,p.id);try{await u}catch(b){throw b instanceof Zt?b:new Zt("storage","The browser could not save this PDF. Storage may be full.")}return p})}async function ri(a){const r=await Pr(),s=await Ii(r.transaction(Kn).objectStore(Kn).get(a));if(!s)throw new Zt("storage","Saved PDF data was not found.");return s}function LA(a,r){return Pi(async()=>{const o=(await Pr()).transaction(ns,"readwrite"),l=Li(o);o.objectStore(ns).put({pdfId:a,pages:r,savedAt:Date.now()},a);try{await l}catch{throw new Zt("storage","PDF text was read, but the browser could not save the full text index. The original PDF remains saved; free browser storage and retry EDE.")}})}function Yl(a,r){return Pi(async()=>{const o=(await Pr()).transaction(Ra,"readwrite"),l=Li(o),u=o.objectStore(Ra),m=await Ii(u.get(a));if(!m)throw o.abort(),new Zt("storage","The saved PDF record could not be found.");const f={...m,...r};return u.put(f),await l,f})}function mv(a){return Pi(async()=>{const s=(await Pr()).transaction([Ra,Kn,ns],"readwrite");a.forEach(o=>{s.objectStore(Ra).delete(o),s.objectStore(Kn).delete(o),s.objectStore(ns).delete(o)}),await Li(s)})}async function PA(a){const r=await Ws(a);await mv(r.map(s=>s.id))}function kA(){return Pi(async()=>{const r=(await Pr()).transaction([Ra,Kn,ns],"readwrite"),s=Li(r),o=r.objectStore(Ra).getAll();let l=0;return o.onsuccess=()=>{const u=o.result;l=u.length;for(const m of u)r.objectStore(Ra).delete(m.id),r.objectStore(Kn).delete(m.id),r.objectStore(ns).delete(m.id)},await s,l})}class Ql extends Error{constructor(r,s,o){super(`Page ${r}: ${s} failed.`,{cause:o}),this.page=r,this.stage=s,this.name="PdfExtractionError"}page;stage}function By(a){const r=a instanceof Ql?a.cause:a,s=r instanceof Error?r.name:"",o=r instanceof Error?r.message:typeof r=="string"?r:"",l=a instanceof Ql?`Page ${a.page} stopped during ${a.stage}. `:"EDE extraction stopped. ";return s==="QuotaExceededError"?`${l}Browser storage is full. Back up your records before freeing space, then retry EDE. Your PDF remains saved.`:/memory|allocation|out of bounds/i.test(o)?`${l}The browser ran out of processing memory. Close other tabs and retry, or use a desktop browser. Your PDF remains saved.`:/fetch|network|importscripts|load.*(worker|core|language)|failed to load/i.test(o)||a instanceof Ql&&a.stage==="OCR startup"?`${l}The OCR engine could not start. Check internet access to the OCR downloads, then retry EDE. Your PDF remains saved.`:`${l}The PDF could not be processed${s?` (${s.replace(/[^a-zA-Z0-9]/g,"").slice(0,60)})`:""}. Retry EDE; if it repeats, report this message. Your PDF remains saved.`}const OA=/\b(?:[A-Z]{1,8}\s*[-–]\s*)+\d{1,6}[A-Z0-9]*(?:\s*[-–]\s*[A-Z0-9]{1,8}){0,3}\b/g,yv=/^(?:AI|DI|FI|FIC|FIT|FQI|LI|LIC|LS|LSH|LSL|PI|PIC|PDI|PSH|PSL|TI|TIC|TSH|TSL|TT|PT|FT|LT|FC|PC|TC|LC|AT|AIT|XV|ZSO|ZSC)$/,jA=/^(?:XV|HV|BV|CV|PCV|FCV|LCV|TCV|PSV|PRV|MOV|SDV|BDV|NRV)$/,qA=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/g,MA=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/i;function bv(a){const r=a.map((g,y)=>({token:g,index:y,value:g.text.trim().toUpperCase()})).filter(({value:g})=>yv.test(g)),s=a.map((g,y)=>({token:g,index:y,value:g.text.trim().toUpperCase()})).filter(({value:g})=>/^\d{2,5}[A-Z]?$/.test(g)),o=[];for(const g of r){const y=g.token.location,p=y.x+y.width/2,b=y.y+y.height/2;for(const v of s){if(g.index===v.index)continue;const w=v.token.location,_=w.x+w.width/2,D=w.y+w.height/2,S=Math.max(y.height,w.height,.004),T=_-p,L=D-b,I=Math.abs(L)<=S*.55&&T>=-S*.4&&T<=S*4,C=L>S*.35&&L<=S*3.2&&Math.abs(T)<=S*1.8;if(!I&&!C)continue;const x=I?1-Math.abs(L)/(S*.55)-Math.max(0,T)/(S*8):.85-L/(S*10)-Math.abs(T)/(S*8);o.push({functionToken:g.token,numberToken:v.token,score:x})}}const l=new Map,u=new Map,m=g=>{const y=[...g].sort((p,b)=>b.score-p.score);if(y.length&&!(y.length>1&&y[0].score-y[1].score<.18))return y[0]};for(const g of r.map(({token:y})=>y)){const y=m(o.filter(p=>p.functionToken===g));y&&l.set(g,y)}for(const g of s.map(({token:y})=>y)){const y=m(o.filter(p=>p.numberToken===g));y&&u.set(g,y)}const f=[];for(const g of o){if(l.get(g.functionToken)!==g||u.get(g.numberToken)!==g)continue;const y=g.functionToken.text.trim().toUpperCase(),p=g.numberToken.text.trim().toUpperCase();f.push({tag:`${y}-${p}`,type:"Instrument",tagPrefix:y,tagSequence:p,tagSuffix:"",pageNumber:g.functionToken.location.pageNumber,sourceLocations:[g.functionToken.location,g.numberToken.location]})}return f}function vv(a,r,s,o,l,u,m){const f=Math.max(0,Math.min(1,o/r)),g=Math.max(0,Math.min(1,l/s)),y=Math.max(f,Math.min(1,u/r)),p=Math.max(g,Math.min(1,m/s));return y-f<1e-4||p-g<1e-4?null:{pageNumber:a,x:f,y:g,width:y-f,height:p-g}}function zy(a,r,s){const o=[s.convertToViewportPoint(a.x,a.y),s.convertToViewportPoint(a.x+a.width,a.y),s.convertToViewportPoint(a.x,a.y+a.height),s.convertToViewportPoint(a.x+a.width,a.y+a.height)];return vv(r,s.width,s.height,Math.min(...o.map(l=>l[0]??0)),Math.min(...o.map(l=>l[1]??0)),Math.max(...o.map(l=>l[0]??0)),Math.max(...o.map(l=>l[1]??0)))}function $A(a,r,s){const o=[],l=[];for(const u of a){if(!u.text||!u.bbox)continue;const m=vv(r,s.pageWidth,s.pageHeight,s.left+u.bbox.x0,s.top+u.bbox.y0,s.left+u.bbox.x1,s.top+u.bbox.y1);m&&(l.push({text:u.text,location:m}),o.push(...Jl(u.text,r).map(f=>({...f,sourceLocations:[m]}))))}return[...o,...bv(l)]}function FA(a,r){const s=new Map;for(const o of[...a??[],...r??[]]){const l=[o.pageNumber,o.x.toFixed(4),o.y.toFixed(4),o.width.toFixed(4),o.height.toFixed(4)].join(":");!s.has(l)&&s.size<500&&s.set(l,o)}return[...s.values()]}function UA(a){let r="",s;for(const o of a){const l=o.str.replace(/\s+/g," ").trim();if(l){if(s){const u=Math.max(1,(s.fontSize+o.fontSize)/2),m=Math.abs(o.y-s.y)<=Math.max(1,u*.3),f=o.x-(s.x+s.width),g=m&&f>=-u*.5&&f<=u*.35;r+=g?"":m?" ":`
`,s.hasEOL&&!r.endsWith(`
`)&&(r+=`
`)}r+=l,s=o}}return r}function Yy(a,r=1700,s=120){if(a<=r+s)return[0];const o=r-s,l=[];for(let u=0;u<a;u+=o){const m=a-(u+r);if(m>0&&m<=s&&(u=a-r),l.push(u),u+r>=a)break}return l}function Jl(a,r){const s=new Map,o=a.toUpperCase();for(const l of o.matchAll(OA)){const u=l[0].replace(/[–\s]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),m=u.split("-").filter(Boolean),f=u.match(/^([A-Z]{1,8})-(\d{1,6})(.*)$/);if(!f||u.length<3||m.length>6)continue;const g=f[1],y=/^OPC$/.test(g)?"OPC":jA.test(g)?"Valve":yv.test(g)?"Instrument":m.length>=4||/^(?:L|LINE|PIPE)$/.test(g)?"Pipe Run":"Equipment",p=Math.max(0,(l.index??0)-180),b=Math.min(o.length,(l.index??0)+l[0].length+180),v=o.slice(p,b),w=v.match(/\b(?:NOMINAL\s*(?:DIA(?:METER)?|SIZE)|NPS|DN)\s*[:#=-]?\s*((?:(?:NPS|DN)\s*)?\d{1,3}(?:\s*\/\s*\d{1,2})?(?:\.\d+)?\s*(?:MM|IN(?:CH)?)?["”]?)/i)?.[1]??"",_=v.match(/\b(?:PIPING|PIPE)\s*(?:MATERIAL|MATL)\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})/i)?.[1]??"",D=v.match(/\b(?:DESIGN\s+FLOW|FLOW(?:\s+RATE)?)\s*[:=]?\s*([\d.,]+\s*(?:KG\/H|M3\/H|NM3\/H|T\/H|L\/S|M3\/D|GPM|M\/S)?)/i)?.[1]??"",S=v.match(/\b(?:HEAT\s+TRACING|HEAT\s+TRACE)\s*[:=]?\s*(YES|NO|ELECTRIC|STEAM|NONE|N\/A)\b/i)?.[1]??"",T=v.match(/\bINSULATION\s*[:=]?\s*([A-Z0-9][A-Z0-9._/-]{0,12})/i)?.[1]??"",I=f[3].split("-").filter(Boolean).at(-1)??"",C=y==="Pipe Run"&&/[A-Z]/i.test(I)&&/\d/.test(I)?I:"",x=v.match(MA)?.[1]??C,O=`${y}:${u.toLowerCase()}`;s.has(O)||s.set(O,{tag:u,type:y,tagPrefix:g,tagSequence:f[2],tagSuffix:f[3].replace(/^-/,""),pageNumber:r,nominalDiameter:w.replace(/\s+/g," ").trim(),pipingMaterial:_,lineSpec:x,flow:D,heatTracing:S,insulation:T})}for(const l of o.matchAll(qA)){const u=l[1].replace(/\s+/g,"").toUpperCase(),m=`Line Spec:${u.toLowerCase()}`;s.has(m)||s.set(m,{tag:u,type:"Line Spec",tagPrefix:"LINE SPEC",tagSequence:u,tagSuffix:"",lineSpec:u,pageNumber:r})}return[...s.values()]}const BA=/^(?:(?:GENERAL|PROCESS|DESIGN|SAFETY|OPERATING|CONSTRUCTION)\s+)?NOTES?\s*[:.-]?\s*(.*)$/i,zA=/^(?:LEGENDS?|ABBREVIATIONS?|SYMBOLS?|REFERENCES?|REVISION(?:S)?|DRAWING\s+(?:TITLE|NO|NUMBER)|PROJECT|CLIENT|SCALE|TITLE\s*BLOCK|EQUIPMENT\s+LIST|LINE\s+LIST)\b/i,YA=/^(?:(?:NOTE\s*)?\d{1,3}\s*[.)-]\s+|[A-Z]\s*[.)]\s+).+/i,HA=/^(?:GENERAL\s+)?NOTE(?:\s+\d+)?\s*[:#-]\s*.+/i;function VA(a){const r=[];for(const s of a){const o=[{text:s.searchableText,label:"PDF text"},...s.ocrTiles.map(f=>({text:f,label:"OCR text"}))],l=new Set,u=[];for(const f of o){let g=!1,y="";const p=()=>{const b=y.replace(/\s+/g," ").trim();if(b.length>=8){const v=b.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();v&&!l.has(v)&&(l.add(v),u.push({text:b,label:f.label}))}y=""};for(const b of f.text.replace(/\r/g,`
`).split(`
`)){const v=b.replace(/\s+/g," ").trim();if(!v)continue;const w=v.match(BA);if(w){p(),g=!0,w[1]&&(y=w[1].trim());continue}if(g&&zA.test(v)){p(),g=!1;continue}if(HA.test(v)){p(),y=v,g=!0;continue}if(YA.test(v)){const _=v.length>=36&&v.split(/\s+/).length>=7;g||_?(p(),y=v,g=!0):p();continue}g?y=y?`${y} ${v}`:v:p()}p()}let m=0;for(const f of u){const g=[];for(let y=0;y<f.text.length;){let p=Math.min(y+1500,f.text.length);if(p<f.text.length){const b=f.text.lastIndexOf(" ",p);b>y+700&&(p=b)}g.push(f.text.slice(y,p)),y=p}for(const y of g){const p=y.trim();p&&(m+=1,r.push({tag:`NOTE-P${s.pageNumber}-${m}`,type:"Item Note",tagPrefix:"NOTE",tagSequence:String(m),tagSuffix:`P${s.pageNumber}`,pageNumber:s.pageNumber,description:`${f.label} note — review against source: ${p}`}))}}}return r}function Xu(a,r){const s=new Map(a.map(o=>[`${o.type}:${o.tag.toLowerCase()}`,{...o}]));for(const o of r){const l=`${o.type}:${o.tag.toLowerCase()}`,u=s.get(l);if(!u){s.set(l,{...o});continue}u.sourceLocations=FA(u.sourceLocations,o.sourceLocations);for(const m of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])!u[m]&&o[m]&&(u[m]=o[m])}return[...s.values()]}async function GA(a,r,s=()=>!0){const[o,l]=await Promise.all([dn(()=>import("./pdf-TYrZqVzP.js"),[]),dn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);o.GlobalWorkerOptions.workerSrc=l.default;const u=o.getDocument({data:new Uint8Array(a.slice(0))}),m=await u.promise;let f=null;const g=new Map,y=[];let p=0,b=1,v="PDF text";try{for(let w=1;w<=m.numPages;w++){if(b=w,v="PDF text",!s())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const _=await m.getPage(w),D=await _.getTextContent(),S=_.getViewport({scale:1}),T=D.items.flatMap(R=>{if(!("str"in R)||typeof R.str!="string"||!R.str||!("transform"in R)||!Array.isArray(R.transform))return[];const P=R.transform;return[{str:R.str,x:P[4]??0,y:P[5]??0,width:"width"in R&&typeof R.width=="number"?R.width:0,height:"height"in R&&typeof R.height=="number"?R.height:0,fontSize:Math.hypot(P[0]??0,P[1]??0)||10,hasEOL:"hasEOL"in R&&R.hasEOL===!0}]}),L=UA(T),I=[];let C=Jl(L,w);const x=T.flatMap(R=>{const P=zy({...R,height:R.height||R.fontSize},w,S);return P?Jl(R.str,w).map(k=>({...k,sourceLocations:[P]})):[]}),O=T.flatMap(R=>{const P=zy({...R,height:R.height||R.fontSize},w,S);return P?[{text:R.str,location:P}]:[]});if(C=Xu(C,[...x,...bv(O)]),L.replace(/\s/g,"").length<800||C.length<20){if(r?.(w,m.numPages,"OCR"),!f){v="OCR startup";const{createWorker:fe,PSM:ie}=await dn(async()=>{const{createWorker:re,PSM:H}=await import("./index-DZalbxKO.js").then(J=>J.i);return{createWorker:re,PSM:H}},__vite__mapDeps([0,1]));f=await fe("eng",1,{workerPath:"https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js",corePath:"https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0",langPath:"https://tessdata.projectnaptha.com/4.0.0"}),await f.setParameters({tessedit_pageseg_mode:ie.SPARSE_TEXT,preserve_interword_spaces:"1"})}const R=_.getViewport({scale:1});v="page image";const P=Math.min(3.5,3200/Math.max(R.width,R.height)),k=_.getViewport({scale:P}),ae=document.createElement("canvas"),W=document.createElement("canvas");ae.width=Math.ceil(k.width),ae.height=Math.ceil(k.height);const ne=ae.getContext("2d",{willReadFrequently:!1});if(!ne)throw new Error("This browser cannot prepare a page image for local OCR.");try{await _.render({canvas:ae,canvasContext:ne,viewport:k}).promise;const fe=1700,ie=120,re=[],H=Yy(ae.width,fe,ie),J=Yy(ae.height,fe,ie);for(const me of J)for(const xe of H){if(!s())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const j=Math.min(ae.width<=fe+ie?ae.width:fe,ae.width-xe),te=Math.min(ae.height<=fe+ie?ae.height:fe,ae.height-me);W.width=j,W.height=te;const z=W.getContext("2d",{willReadFrequently:!1});if(!z)throw new Error("This browser cannot prepare a page image for local OCR.");z.drawImage(ae,xe,me,j,te,0,0,j,te),v="OCR reading";const G=await f.recognize(W);I.push(G.data.text),re.push(...Jl(G.data.text,w)),re.push(...$A(G.data.words??[],w,{left:xe,top:me,pageWidth:ae.width,pageHeight:ae.height}))}p+=1,C=Xu(C,re)}finally{ae.width=0,ae.height=0,W.width=0,W.height=0}}else r?.(w,m.numPages,"PDF text");for(const R of C){const P=`${R.type}:${R.tag.toLowerCase()}`,k=g.get(P);g.set(P,k?Xu([k],[R])[0]:R)}y.push({pageNumber:w,searchableText:L,ocrTiles:I}),_.cleanup()}return{candidates:[...g.values()],pages:m.numPages,ocrPages:p,pageText:y}}catch(w){throw s()?new Ql(b,v,w):w}finally{await f?.terminate().catch(()=>{}),await u.destroy().catch(()=>{})}}const Ev=["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef","placementDrawingRef","nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description","notes","sourcePage","reviewStatus"],Vn=[...Ev,"stableId"],wv=/^[0-9A-F]{32}$/,XA=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,WA=["plantGroup","fluidService","nominalDiameter","pipingMaterial","lineSpec","insulation","heatTracing","groupStatus"],KA=["","Start","Continue","Branch","Merge","End-of-Group"];function xv(){return crypto.randomUUID().replaceAll("-","").toUpperCase()}function Wp(a){const r=a.toUpperCase();if(wv.test(r))return r;if(XA.test(a))return r.replaceAll("-","");throw new Error("A Stable ID must contain exactly 32 letters or numbers (A–F, 0–9).")}function wn(a,r){return r==="stableId"?a.id:a[r]}function ZA(a,r){const s=a.placementDrawingRef.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase();return s?[r.id,r.name].map(l=>l.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase()).includes(s)?"current":"another":"available"}const Tt={itemTag:"Item Tag",tagPrefix:"Tag Prefix",tagSequence:"Tag Sequence",tagSuffix:"Tag Suffix",equipmentClass:"Equipment Class",equipmentType:"Equipment Type",equipmentName:"Equipment Name",drawingRef:"Source Drawing / Page",placementDrawingRef:"Placed on Drawing",nominalDiameter:"Nominal Diameter",plantGroup:"Plant Group",fluidService:"Fluid / Service",pipingMaterial:"Piping Material Class",lineSpec:"Line Spec",flow:"Flow",flowDirection:"Flow Direction",heatTracing:"Heat Tracing",insulation:"Insulation",fromTag:"From",toTag:"To",groupStatus:"Group Status",opcDrawing:"OPC Drawing",connection:"Connection",description:"Description",notes:"Notes",sourcePage:"Source page",reviewStatus:"Review status",stableId:"Stable ID"},oc=Ev,Gs={itemTag:"The tag printed beside the equipment, line, valve, or instrument. A repeated Pipe Run tag needs different line data.",tagPrefix:"The letter code at the start of the tag.",tagSequence:"The main number in the tag.",tagSuffix:"Extra letters or numbers after the main tag number.",equipmentClass:"The approved class or family for this equipment.",equipmentType:"What the equipment is, such as a pump or vessel, when the drawing states it.",equipmentName:"The equipment name or service, only when the source clearly labels it.",drawingRef:"The source drawing or PDF page where this record came from.",placementDrawingRef:"The CAD drawing that contains this object. Blank means available or not placed. This is a reference only; it does not place or move CAD entities.",nominalDiameter:"The stated pipe or nozzle size, such as DN50 or 2 inch.",plantGroup:"The plant, unit, or area group, if stated.",fluidService:"The stated fluid or process service for this line.",pipingMaterial:"The approved piping material class or code.",lineSpec:"The piping line class/specification code. It is separate from the pipe run tag.",flow:"The stated flow value or direction. A line arrow alone is not converted to a value.",flowDirection:"The confirmed upstream/downstream flow direction.",heatTracing:"The stated heat-tracing requirement or type.",insulation:"The stated insulation requirement or code.",fromTag:"The connected source tag or point shown for this pipe run.",toTag:"The connected destination tag or point shown for this pipe run.",groupStatus:"Start, Continue, Branch, Merge, or End-of-Group for the pipe run.",opcDrawing:"The linked off-page connector drawing number, if shown.",connection:"A stated connection or connected item; line geometry is not inferred here.",description:"A short object description from the source. Blank means no clear value was found.",notes:"Drawing notes or additional comments associated with this record.",sourcePage:"The page in the original PDF where this candidate was found.",reviewStatus:"Needs review means check the tag and fields before using them.",stableId:"Permanent object identity. It stays the same when the tag, drawing, size, or geometry changes."},wi=["Equipment","Equipment Component","Equipment Heat Transfer","Equipment Mechanical","Equipment Other","Equipment Vessel","Hydraulic Circuit","Instrument","Instrument Loop","Item Note","Line Spec","Nozzle","OPC","Package","Pipe Run","Valve"],ic=a=>`pid-mapping-studio:engineering-workspace:v2:${a}`;function Sv(a,r){if(!Array.isArray(a))return Cp(a);const s=a.map(o=>!o||typeof o!="object"||!Array.isArray(o.rows)?o:{...o,rows:o.rows.map(l=>{if(!l||typeof l!="object")return l;const u=typeof l.id=="string"?l.id:"";let m;try{m=Wp(u)}catch{m=xv()}m!==l.id&&r?.();const f=typeof l.description=="string"?l.description:"",g=typeof l.notes=="string",y=/^(?:PDF text|OCR text) note — review against source:\s*/iu,p=g?l.notes:l.type==="Item Note"?f.replace(y,""):"",b=!g&&l.type==="Item Note"&&f?y.test(f)?"Drawing note extracted from PDF; check the source page.":"":f;return(!g||b!==f)&&r?.(),{...l,id:m,description:b,notes:p,sourcePage:typeof l.sourcePage=="string"?l.sourcePage:"",placementDrawingRef:typeof l.placementDrawingRef=="string"?l.placementDrawingRef:"",lineSpec:typeof l.lineSpec=="string"?l.lineSpec:"",plantGroup:typeof l.plantGroup=="string"?l.plantGroup:"",fluidService:typeof l.fluidService=="string"?l.fluidService:"",flowDirection:typeof l.flowDirection=="string"?l.flowDirection:"",fromTag:typeof l.fromTag=="string"?l.fromTag:"",toTag:typeof l.toTag=="string"?l.toTag:"",groupStatus:typeof l.groupStatus=="string"?l.groupStatus:"",...l.sourceLocations===void 0?{}:{sourceLocations:l.sourceLocations},reviewStatus:l.reviewStatus==="Needs review"||l.reviewStatus==="Reviewed"?l.reviewStatus:"Manual"}})});return Cp(s)}function Cp(a){if(!Array.isArray(a)||a.length>500)throw new Error("Invalid drawing catalog. Keep a backup and do not overwrite saved data.");const r=new Set,s=new Set;let o=0;for(const l of a){if(!l||typeof l!="object"||typeof l.id!="string"||typeof l.name!="string"||!l.name.trim()||l.name.length>160||typeof l.revision!="string"||l.revision.length>80||!Array.isArray(l.rows)||r.has(l.id))throw new Error("The drawing catalog contains an invalid or duplicate drawing.");r.add(l.id);const u=new Map;for(const m of l.rows){if(m?.type==="Pipe Run"&&!KA.includes(m.groupStatus))throw new Error("Pipe Run group status must be Start, Continue, Branch, Merge, or End-of-Group.");if(!m||typeof m!="object"||typeof m.id!="string"||!wv.test(m.id)||s.has(m.id)||!wi.includes(m.type)||oc.some(y=>typeof m[y]!="string"||m[y].length>2e3)||!["Manual","Needs review","Reviewed"].includes(m.reviewStatus)||m.sourcePdfId!==void 0&&typeof m.sourcePdfId!="string"||m.sourceLocations!==void 0&&(!Array.isArray(m.sourceLocations)||m.sourceLocations.length>500||m.sourceLocations.some(y=>{if(!y||typeof y!="object")return!0;const p=y;return!Number.isInteger(p.pageNumber)||p.pageNumber<1||!["x","y","width","height"].every(b=>typeof p[b]=="number"&&Number.isFinite(p[b]))||p.x<0||p.y<0||p.width<=0||p.height<=0||p.x>1||p.y>1||p.x+p.width>1.02||p.y+p.height>1.02}))||!m.itemTag.trim())throw new Error("Each record needs a valid Stable ID, object type, and text fields.");const f=m.itemTag.trim().toLowerCase(),g=u.get(f)??[];if(g.length&&(m.type!=="Pipe Run"||g.some(y=>y.type!=="Pipe Run"||!WA.some(p=>y[p]!==m[p]))))throw new Error("This tag is already used. Repeated Pipe Run tags need different line-defining data.");if(typeof m.x!="number"||typeof m.y!="number"||!Number.isFinite(m.x)||!Number.isFinite(m.y))throw new Error("A record contains invalid coordinates.");u.set(f,[...g,m]),s.add(m.id),o+=1}}if(o>2e4)throw new Error("This local workspace supports up to 20,000 engineering records.");return a}function xi(a){const r=window.localStorage.getItem(ic(a));if(!r)return[];let s=!1;const o=Sv(JSON.parse(r),()=>{s=!0});if(s)try{window.localStorage.setItem(ic(a),JSON.stringify(o))}catch{throw new Error("Saved records were read, but the data-format update could not be saved because browser storage is full. The original saved data was not overwritten; download a backup before freeing space.")}return o}function Js(a){return window.localStorage.getItem(ic(a))}function Rp(a,r,s){if(Cp(r),Js(a)!==s)throw new Error("This workspace changed in another tab. Reload before editing to avoid overwriting its records.");const o=JSON.stringify(r);return window.localStorage.setItem(ic(a),o),o}function Kp(a,r,s){return{...Object.fromEntries(oc.map(o=>[o,""])),id:xv(),type:a,itemTag:r.trim(),drawingRef:s,reviewStatus:"Manual",x:0,y:0}}function QA(a,r){return JSON.stringify({version:5,discipline:a,drawings:r},null,2)}function JA(a,r){const s=JSON.parse(a);if(![2,3,4,5].includes(s?.version)||s?.discipline!==r)throw new Error(`Choose a ${r.toUpperCase()} workspace backup. PFD and P&ID backups stay separate.`);return Sv(s.drawings)}function e2(a,r){const s=new Map;for(const o of[...a??[],...r??[]]){const l=[o.pageNumber,o.x.toFixed(4),o.y.toFixed(4),o.width.toFixed(4),o.height.toFixed(4)].join(":");!s.has(l)&&s.size<500&&s.set(l,o)}return[...s.values()]}function Hy(a,r){const s=Kp(a.type,a.tag,`${r.alias} · Page ${a.pageNumber}`);s.tagPrefix=a.tagPrefix??"",s.tagSequence=a.tagSequence??"",s.tagSuffix=a.tagSuffix??"";for(const o of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])s[o]=a[o]??"";return s.sourcePage=String(a.pageNumber),s.sourcePdfId=r.id,s.sourceLocations=a.sourceLocations?.slice(0,500),s.reviewStatus="Needs review",a.type==="Item Note"?(s.notes=(a.description??"").replace(/^(?:PDF text|OCR text) note — review against source:\s*/iu,""),s.description="Drawing note extracted from PDF; check the source page."):s.description=a.description??"Tag candidate found in the PDF. Confirm the object type and details before using it.",s}function t2(a,r,s){const o=xi(a),l=o.find(w=>w.sourcePdfId===r.id);if(l){const w=new Map(s.map(L=>[L.tag.trim().toLowerCase(),L])),_=new Set(l.rows.map(L=>L.itemTag.trim().toLowerCase()));let D=!1;const S=l.rows.map(L=>{const I=w.get(L.itemTag.trim().toLowerCase());if(!I)return L;const C=e2(L.sourceLocations,I.sourceLocations),x=L.sourcePage||String(I.pageNumber);return C.length===(L.sourceLocations?.length??0)&&x===L.sourcePage?L:(D=!0,{...L,sourcePage:x,sourceLocations:C})}),T=s.flatMap(L=>{const I=L.tag.trim().toLowerCase();return!I||_.has(I)?[]:(_.add(I),D=!0,[Hy(L,r)])});if(D){const L=o.map(I=>I.id===l.id?{...I,rows:[...S,...T]}:I);Rp(a,L,Js(a))}return{drawingId:l.id,recordCount:S.length+T.length}}const u=new Set(o.map(w=>w.name.toLowerCase())),m=`${r.alias} · Extracted data`;let f=m,g=2;for(;u.has(f.toLowerCase());)f=`${m} (${g++})`;const y=new Set,p=s.flatMap(w=>{const _=w.tag.trim().toLowerCase();return!_||y.has(_)?[]:(y.add(_),[Hy(w,r)])}),b={id:crypto.randomUUID(),name:f,revision:"Local PDF extraction · review required",sourcePdfId:r.id,sourceAlias:r.alias,rows:p},v=Js(a);return Rp(a,[...o,b],v),{drawingId:b.id,recordCount:p.length}}function Hl(a,r,s){const o=URL.createObjectURL(new Blob([r],{type:s})),l=document.createElement("a");l.href=o,l.download=a,l.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}function a2(a){return Tv(["Object type",...Vn.map(r=>Tt[r])],a.map(r=>[r.type,...Vn.map(s=>wn(r,s))]))}function Tv(a,r){const s=o=>`"${(/^[\s]*[=+\-@\t\r]/.test(o)?`'${o}`:o).replaceAll('"','""')}"`;return"\uFEFF"+[a,...r].map(o=>o.map(l=>s(String(l))).join(",")).join(`\r
`)}function n2(a,r){const s=[];let o=[],l="",u=!1;const m=a.replace(/^\uFEFF/,"");for(let v=0;v<m.length;v++){const w=m[v];if(w==='"')if(u&&m[v+1]==='"')l+='"',v++;else{if(!u&&l!=="")throw new Error("Invalid CSV quoting.");u=!u}else!u&&w===","?(o.push(l),l=""):!u&&(w===`
`||w==="\r")?(o.push(l),o.some(_=>_.trim())&&s.push(o),o=[],l="",w==="\r"&&m[v+1]===`
`&&v++):l+=w}if(u)throw new Error("The CSV has an unclosed quoted cell.");o.push(l),o.some(v=>v.trim())&&s.push(o);const f=s.shift()?.map(v=>v.trim().toLowerCase())??[],g=f.findIndex(v=>v==="object type"||v==="type"),y=oc.map(v=>f.findIndex(w=>w===v.toLowerCase()||w===Tt[v].toLowerCase())),p=f.findIndex(v=>v==="stableid"||v===Tt.stableId.toLowerCase());if(g<0||y[0]<0)throw new Error("CSV needs Object type and Item Tag columns. Download the template first.");if(!s.length)throw new Error("The CSV contains no records.");if(s.length>2e4)throw new Error("Import at most 20,000 records.");const b=new Set;return s.map((v,w)=>{if(v.length!==f.length)throw new Error(`CSV row ${w+2} has the wrong number of columns.`);const _=wi.find(S=>S.toLowerCase()===v[g]?.trim().toLowerCase());if(!_)throw new Error(`CSV row ${w+2} has an unsupported object type.`);const D=Kp(_,v[y[0]]??"",r);if(p>=0&&v[p]?.trim())try{D.id=Wp(v[p].trim())}catch{throw new Error(`CSV row ${w+2} has an invalid Stable ID.`)}if(b.has(D.id))throw new Error(`CSV row ${w+2} repeats a Stable ID.`);return b.add(D.id),oc.forEach((S,T)=>{if(y[T]<0)return;const L=v[y[T]].trim();S==="reviewStatus"?D.reviewStatus=["Needs review","Reviewed","Manual"].includes(L)?L:"Manual":D[S]=L}),D.drawingRef||(D.drawingRef=r),D})}function Wu(a){const r=a.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);for(const s of[/^(?:drawing|dwg|drg)\.?\s*(?:number|no\.?|#)\s*[:：-]?\s*(.*)$/i,/^(?:drawing\s*(?:title|name)|title)\s*[:：-]?\s*(.*)$/i]){const o=new Set;if(r.forEach((l,u)=>{const m=l.match(s);if(!m)return;const f=(m[1]||r[u+1]||"").trim();f&&f.length<=120&&!/^(?:rev(?:ision)?|scale|sheet|date|drawn|checked|drawing|dwg|title)\b/i.test(f)&&o.add(f)}),o.size===1)return[...o][0];if(o.size>1)return null}return null}function r2(a){const r=a.normalize("NFKC").replace(/[<>:"/\\|?*\u0000-\u001f]/g,"_").replace(/\s+/g," ").replace(/[. ]+$/g,"").trim().slice(0,120).replace(/[. ]+$/g,"");return/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(r)?`_${r}`:r}function s2(a){const r=[],s=/^(?:(?:drawing|dwg|drg)\.?\s*(?:number|no\.?|#|title|name)|title)\s*[:：-]?\s*$/i,o=l=>l.match(/\b(?:[A-Z]{1,6}\d{0,4}[-_/][A-Z0-9]+(?:[-_/][A-Z0-9]+)*|\d{3,}[-_/][A-Z0-9]+(?:[-_/][A-Z0-9]+)*)\b/i)?.[0]??null;for(const l of a){if(Wu(l.text)){r.push(l.text);continue}if(!s.test(l.text.trim()))continue;const m=Math.max(l.height,1),f=(p,b)=>{if(p===l||!p.text.trim()||s.test(p.text.trim()))return!1;const v=p.x-(l.x+l.width),w=l.y-p.y;return b?Math.abs(p.y-l.y)<=m*.6&&v>=-m&&v<=m*10:w>m*.6&&w<=m*3&&Math.abs(p.x-l.x)<=m*3},g=a.filter(p=>f(p,!0)).sort((p,b)=>p.x-b.x);if(g.length){const p=`${l.text}
${g.map(_=>_.text).join(" ")}`,b=Wu(p),v=b&&o(b),w=a.filter(_=>f(_,!1)&&!/\b(?:last\s+saved|date|revision|rev)\b/i.test(_.text)).map(_=>o(_.text)).some(_=>_&&v&&_.toUpperCase()!==v.toUpperCase());b&&!w&&r.push(p);continue}const y=a.filter(p=>f(p,!1));y.length===1&&r.push(`${l.text}
${y[0].text}`)}return Wu(r.join(`
`))}function Av(a){const r=new Set(["project_title_block"]);return a.map((s,o)=>Array.from({length:s.pageCount},(l,u)=>{const m=`doc-${String(o+1).padStart(2,"0")}_page-${String(u+1).padStart(3,"0")}`;let f=r2(s.pageDrawingNames?.[u]??"")||`drawing-batch_${m}`;/_working-\d+$/i.test(f)&&(f=`sheet_${f}`);let g=f,y=0;for(;r.has(g.toLowerCase());)g=`${f}_${m}${y?`_${y}`:""}`,y++;return r.add(g.toLowerCase()),`${g}.dwg`}))}const rs="P2DWG-RUNNER-2026.11.06.20",o2=`autocad-runner-${rs}-with-source-pdfs.zip`;function si(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function i2(a,r=!1,s="",o=[]){const l=Av(a),u=a.map((f,g)=>`("${String(f.documentNumber).padStart(2,"0")}" ${si(f.sourceFile)} ${si(f.sourceId)} ${si(f.sourceName)} ${si(f.sha256.toLowerCase())} ${f.pageCount} (${l[g].map(si).join(" ")}))`).join(`
  `),m=o.map(f=>`("${String(f.documentNumber).padStart(2,"0")}" ${f.pageNumber} ${f.scaleFactor} "${f.method}" ${f.pageWidthMm} ${f.pageHeightMm} ${f.targetWidthMm} ${f.targetHeightMm})`).join(`
  `);return`; Single working drawing PDF batch runner.
; Each approved page is saved to a separate, never-overwritten DWG.
(vl-load-com)
(setq *p2dwg-project-title-block-enabled* ${r?"T":"nil"})
(setq *p2dwg-batch-run-id* "${s}")
(setq *p2dwg-runner-build-version* "${rs}")
(setq *p2dwg-page-scale-plans* '(
  ${m}
))
(setq *p2dwg-page-states* nil)
(setq *p2dwg-confirmed-save-lines* nil)
(setq *p2dwg-batch-initializing* nil)

(defun p2dwg-raise (message)
  (setq *p2dwg-failure-message* message)
  (exit)
)

(defun p2dwg-script-path (path)
  (if (or (vl-string-search (chr 34) path)
          (vl-string-search ";" path)
          (vl-string-search (chr 13) path)
          (vl-string-search (chr 10) path))
    (p2dwg-raise "The extracted folder path contains characters AutoCAD SCRIPT cannot safely read. Use a folder path without quotes, semicolons, or line breaks."))
  (strcat (chr 34) (vl-string-translate "/" (chr 92) path) (chr 34))
)

(defun p2dwg-verify-batch-package (directory expectedCount expectedBuildVersion / scriptPath command shell result)
  (setq scriptPath (strcat directory "/VERIFY_BATCH.ps1"))
  (if (or (not (findfile scriptPath))
          (not (findfile (strcat directory "/batch_manifest.json"))))
    (p2dwg-raise "The extracted batch is missing its PDF manifest or verifier. Extract a fresh complete ZIP."))
  (setq command
    (strcat "powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "
      (p2dwg-script-path scriptPath) " -ExpectedCount " (itoa expectedCount)
      " -ExpectedRunnerBuildVersion " expectedBuildVersion))
  (setq shell (vl-catch-all-apply 'vlax-create-object (list "WScript.Shell")))
  (if (vl-catch-all-error-p shell)
    (p2dwg-raise "Cannot start the Windows PDF manifest verifier. No AutoCAD jobs were started."))
  (setq result
    (vl-catch-all-apply 'vlax-invoke-method
      (list shell 'Run command 0 :vlax-true)))
  (vl-catch-all-apply 'vlax-release-object (list shell))
  (if (or (vl-catch-all-error-p result) (/= result 0))
    (p2dwg-raise "PDF manifest verification failed: a packaged source PDF is missing or its SHA-256 does not match. No AutoCAD jobs were started."))
  T
)

(defun p2dwg-error-message (result)
  (if *p2dwg-failure-message*
    *p2dwg-failure-message*
    (vl-catch-all-error-message result))
)

(defun p2dwg-log (path message / handle)
  (setq handle (open path "a"))
  (if (null handle)
    (p2dwg-raise "Cannot write AUTOCAD_BATCH_PROGRESS.log. Choose a writable output folder."))
  (write-line message handle)
  (close handle)
)

(defun p2dwg-split-pipe (text / position parts)
  (while (setq position (vl-string-search "|" text))
    (setq parts (append parts (list (substr text 1 position))))
    (setq text (substr text (+ position 2))))
  (append parts (list text))
)

(defun p2dwg-set-memory-page-state (token page state / key)
  (setq key (strcat token "|" (itoa page)))
  (setq *p2dwg-page-states*
    (vl-remove-if '(lambda (entry) (= (car entry) key)) *p2dwg-page-states*))
  (setq *p2dwg-page-states* (cons (list key state) *p2dwg-page-states*))
)

(defun p2dwg-page-state (token page / entry)
  (setq entry (assoc (strcat token "|" (itoa page)) *p2dwg-page-states*))
  (if entry (cadr entry) nil)
)

(defun p2dwg-assert-unique-page-outputs (jobs / job outputPath jobId outputPaths jobIds)
  (setq outputPaths nil jobIds nil)
  (foreach job jobs
    (setq outputPath
      (if (and (nth 5 job) (/= (nth 5 job) ""))
        (strcase (vl-string-translate "/" (chr 92) (nth 5 job)))
        nil))
    (setq jobId (nth 6 job))
    (if (or (null outputPath) (= outputPath "")
            (null jobId) (= jobId "")
            (member outputPath outputPaths)
            (member jobId jobIds))
      (p2dwg-raise
        "The batch contains a missing or duplicate page output/job ID. No pages were processed."))
    (setq outputPaths (cons outputPath outputPaths))
    (setq jobIds (cons jobId jobIds))
  )
  T
)

(defun p2dwg-verify-output-set (jobs logPath / job outputPath state count total)
  (setq count 0 total (length jobs))
  (foreach job jobs
    (setq outputPath (nth 5 job)
          state (p2dwg-page-state (car job) (nth 1 job)))
    (if (and (findfile outputPath)
             (member state '("COMPLETED" "NEEDS_REVIEW")))
      (setq count (1+ count))
      (progn
        (p2dwg-log logPath
          (strcat "OUTPUT_NOT_VERIFIED|jobId=" (nth 6 job)
            "|page=" (itoa (nth 1 job)) "|state="
            (if state state "MISSING") "|path=" outputPath))
      )
    )
  )
  (if (= count total)
    (p2dwg-log logPath
      (strcat "OUTPUT_SET_VERIFIED|files=" (itoa count)
        "|expected=" (itoa total)))
    (p2dwg-log logPath
      (strcat "OUTPUT_SET_INCOMPLETE|files=" (itoa count)
        "|expected=" (itoa total))))
  count
)

(defun p2dwg-title-block-bounds (/ selection index entity blockName object minPoint maxPoint
                                   minValues maxValues bounds count result)
  ; Use the one approved title-block XREF as the per-page physical frame.
  (setq selection (ssget "_X" '((0 . "INSERT"))))
  (setq index 0 count 0 bounds nil)
  (while (and selection (< index (sslength selection)))
    (setq entity (ssname selection index))
    (setq blockName (cdr (assoc 2 (entget entity))))
    (if (and blockName
             (wcmatch (strcase blockName) "P2DWG_PROJECT_TITLE_BLOCK*"))
      (progn
        (setq count (1+ count))
        (if (> count 1)
          (p2dwg-raise "More than one project title-block XREF is attached. No page was scaled or saved."))
        (setq object (vlax-ename->vla-object entity))
        (setq result
          (vl-catch-all-apply 'vla-GetBoundingBox
            (list object 'minPoint 'maxPoint)))
        (if (vl-catch-all-error-p result)
          (p2dwg-raise
            (strcat "Could not measure the project title-block XREF: "
              (vl-catch-all-error-message result))))
        (setq minValues (vlax-safearray->list (vlax-variant-value minPoint))
              maxValues (vlax-safearray->list (vlax-variant-value maxPoint)))
        (if (or (null minValues) (null maxValues)
                (<= (- (nth 0 maxValues) (nth 0 minValues)) 0.000001)
                (<= (- (nth 1 maxValues) (nth 1 minValues)) 0.000001))
          (p2dwg-raise "The project title-block XREF has invalid extents. No page was scaled or saved."))
        (setq bounds
          (list (nth 0 minValues) (nth 1 minValues)
                (nth 0 maxValues) (nth 1 maxValues)))
      )
    )
    (setq index (1+ index))
  )
  bounds
)

(defun p2dwg-page-scale-plan (token page / matches)
  (setq matches
    (vl-remove-if-not
      '(lambda (entry)
        (and (= (strcase (car entry)) (strcase token))
             (= (cadr entry) page)))
      *p2dwg-page-scale-plans*))
  (car matches)
)

(defun p2dwg-write-page-progress (path / completed total queued running review failed entry)
  (setq completed 0 total (length *p2dwg-page-states*) queued 0 running 0 review 0 failed 0)
  (foreach entry *p2dwg-page-states*
    (cond
      ((= (cadr entry) "COMPLETED") (setq completed (1+ completed)))
      ((= (cadr entry) "QUEUED") (setq queued (1+ queued)))
      ((= (cadr entry) "RUNNING") (setq running (1+ running)))
      ((= (cadr entry) "NEEDS_REVIEW") (setq review (1+ review)))
      ((= (cadr entry) "FAILED") (setq failed (1+ failed))))
  )
  (p2dwg-log path
    (strcat "PROGRESS|completed=" (itoa completed) "|total=" (itoa total)
      "|queued=" (itoa queued) "|running=" (itoa running)
      "|needs-review=" (itoa review) "|failed=" (itoa failed)))
)

(defun p2dwg-set-page-state (path token page state outputPath)
  (p2dwg-set-memory-page-state token page state)
  (p2dwg-log path
    (strcat "PAGE|SOURCE_" token ".pdf|" (itoa page) "|" state "|"
      (if outputPath outputPath "")))
  (if (not *p2dwg-batch-initializing*)
    (p2dwg-write-page-progress path))
  T
)

(defun p2dwg-save-confirmation-line (job)
    (strcat "SAVEAS_CONFIRMED|jobId=" (nth 6 job)
      "|sourceId=" (nth 7 job)
      "|sourceFile=" (nth 8 job)
      "|sourceSha256=" (strcase (nth 10 job))
      "|page=" (itoa (nth 1 job))
      "|outputDwg=" (strcat (vl-filename-base (nth 5 job)) ".dwg"))
)

(defun p2dwg-add-save-confirmation (line)
  (setq *p2dwg-confirmed-save-lines*
    (cons line (vl-remove line *p2dwg-confirmed-save-lines*)))
  T
)

(defun p2dwg-save-confirmed-p (job)
  ; The page worker writes this exact identity tuple only after SAVEAS and
  ; its entity/path verification succeed. File existence alone is not proof.
  (member (p2dwg-save-confirmation-line job)
    *p2dwg-confirmed-save-lines*)
)

(defun p2dwg-count-page-state (jobs targetState / job count)
  (setq count 0)
  (foreach job jobs
    (if (= (p2dwg-page-state (car job) (nth 1 job)) targetState)
      (setq count (1+ count))))
  count
)

(defun p2dwg-cancel-active-commands (/ attempts)
  ; A failed PDFIMPORT may leave a native command active. Do not continue to
  ; another page unless AutoCAD is back at an idle command prompt.
  (setq attempts 0)
  (while (and (/= 0 (getvar "CMDACTIVE")) (< attempts 5))
    (command)
    (setq attempts (1+ attempts)))
  (= 0 (getvar "CMDACTIVE"))
)

(defun p2dwg-restore-settings (settings / entry result restored)
  (setq restored T)
  (foreach entry settings
    (setq result
      (vl-catch-all-apply 'setvar (list (car entry) (cdr entry))))
    (if (vl-catch-all-error-p result) (setq restored nil)))
  restored
)

(defun p2dwg-user-cancel-p (message / upper)
  (setq upper (if message (strcase message) ""))
  (or (vl-string-search "CANCEL" upper)
      (vl-string-search "QUIT / EXIT ABORT" upper))
)

(defun p2dwg-load-page-states (path / handle line fields storedRunId)
  (if (findfile path)
    (progn
      (setq handle (open path "r"))
      (if (null handle)
        (p2dwg-raise "The local AutoCAD progress journal cannot be read. No pages were processed."))
      (while (setq line (read-line handle))
        (setq fields (p2dwg-split-pipe line))
        (cond
          ((and (>= (length fields) 2) (= (car fields) "BATCH_ID"))
            (setq storedRunId (cadr fields)))
          ((and (>= (length fields) 4) (= (car fields) "PAGE"))
            (p2dwg-set-memory-page-state
              (substr (vl-filename-base (cadr fields)) 8)
              (atoi (caddr fields))
              (nth 3 fields)))
          ((and (>= (length fields) 2) (= (car fields) "SAVEAS_CONFIRMED"))
            (setq *p2dwg-confirmed-save-lines*
              (cons line *p2dwg-confirmed-save-lines*)))
        )
      )
      (close handle)
      (if (/= storedRunId *p2dwg-batch-run-id*)
        (p2dwg-raise "This progress journal belongs to a different or older PDF/mapping batch. No DWGs were changed."))
    )
    (p2dwg-log path (strcat "BATCH_ID|" *p2dwg-batch-run-id*))
  )
  (p2dwg-log path (strcat "RUNNER_BUILD|version=" *p2dwg-runner-build-version*))
  T
)

(defun p2dwg-pad (number width / text)
  (setq text (itoa number))
  (while (< (strlen text) width) (setq text (strcat "0" text)))
  text
)

(defun p2dwg-assert-blank (/ doc layout entity)
  ; Do not turn an existing drawing into a disposable working drawing.
  (if (/= 0 (getvar "DWGTITLED"))
    (p2dwg-raise "Start in a NEW, unsaved blank drawing made from your approved DWT. Existing drawings are not accepted."))
  (setq doc (vla-get-ActiveDocument (vlax-get-acad-object)))
  (vlax-for layout (vla-get-Layouts doc)
    (vlax-for entity (vla-get-Block layout)
      ; Template layout viewports are retained, never erased by the runner.
      (if (/= (vla-get-ObjectName entity) "AcDbViewport")
        (p2dwg-raise "The working drawing contains objects. Open a NEW blank DWT drawing; do not erase or use an existing drawing."))))
  T
)

(defun p2dwg-layout-entities (/ doc layout entity entities)
  (setq doc (vla-get-ActiveDocument (vlax-get-acad-object)))
  (setq entities nil)
  (vlax-for layout (vla-get-Layouts doc)
    (vlax-for entity (vla-get-Block layout)
      (setq entities (cons (vlax-vla-object->ename entity) entities))))
  entities
)

(defun p2dwg-owned-entities (baseline / entity owned)
  (setq owned nil)
  (foreach entity (p2dwg-layout-entities)
    (if (not (member entity baseline))
      (setq owned (cons entity owned))))
  owned
)

(defun p2dwg-clear-owned-worker (owned / entity)
  ; No ERASE ALL, database purge, or deletion of pre-existing template objects.
  (foreach entity owned
    (if (entget entity)
      (if (null (entdel entity))
        (p2dwg-raise "Cannot clear a previous page object. Batch stopped; saved DWGs are unchanged."))))
  T
)

(defun p2dwg-clear-owned (owned / entity layer-name record flags layer-states result entry)
  ; Called ONLY after SaveAs has detached into a new scratch DWG. Saved page
  ; DWGs retain their archived source. Temporarily unlock owned-object layers
  ; so OFF + LOCKED archives do not stop the next page's scratch cleanup.
  (setq layer-states nil)
  (foreach entity owned
    (if (entget entity)
      (progn
        (setq layer-name (cdr (assoc 8 (entget entity))))
        (setq record (entget (tblobjname "LAYER" layer-name)))
        (setq flags (cdr (assoc 70 record)))
        (if (and (= 4 (logand flags 4)) (not (assoc layer-name layer-states)))
          (progn
            (setq layer-states (cons (cons layer-name record) layer-states))
            (if (not (entmod (subst (cons 70 (- flags 4)) (assoc 70 record) record)))
              (p2dwg-raise "Cannot unlock an owned-object layer in the scratch drawing.")))))))
  (setq result (vl-catch-all-apply 'p2dwg-clear-owned-worker (list owned)))
  (foreach entry layer-states
    (if (not (entmod (cdr entry)))
      (p2dwg-raise "Could not restore a scratch source layer's lock state.")))
  (if (vl-catch-all-error-p result)
    (p2dwg-raise (vl-catch-all-error-message result))
    result)
)

(defun p2dwg-block-names (/ block names)
  (setq names nil)
  (vlax-for block (vla-get-Blocks (vla-get-ActiveDocument (vlax-get-acad-object)))
    (if (= :vlax-false (vla-get-IsLayout block))
      (setq names (cons (vla-get-Name block) names))))
  names
)

(defun p2dwg-new-block-names (baseline / name names)
  (setq names nil)
  (foreach name (p2dwg-block-names)
    (if (not (member name baseline)) (setq names (cons name names))))
  names
)

(defun p2dwg-clear-owned-blocks (baseline / remaining name blocks result progress)
  ; Removing visible INSERTs is not enough: their definitions contain geometry.
  ; Delete only definitions introduced by this batch, never template definitions.
  (setq blocks (vla-get-Blocks (vla-get-ActiveDocument (vlax-get-acad-object))))
  (setq remaining (p2dwg-new-block-names baseline))
  (setq progress T)
  (while (and remaining progress)
    (setq progress nil)
    (foreach name remaining
      (setq result (vl-catch-all-apply 'vla-Delete (list (vla-Item blocks name))))
      (if (not (vl-catch-all-error-p result)) (setq progress T)))
    (setq remaining (p2dwg-new-block-names baseline))
  )
  (if remaining
    (p2dwg-raise "Previous page block definitions are still referenced. Batch stopped before importing another page."))
  T
)

(defun p2dwg-pdf-source-layer-p (name / normalized index)
  (setq normalized (if name (strcase name) ""))
  (and
    (>= (strlen normalized) 4)
    (= (substr normalized 1 3) "PDF")
    (/= (substr normalized 1 9) "PDF_DONE_")
    (or
      (= (substr normalized 4 1) "_")
      (and
        (wcmatch (substr normalized 4 1) "#")
        (progn
          (setq index 4)
          (while (and (<= index (strlen normalized))
                      (wcmatch (substr normalized index 1) "#"))
            (setq index (1+ index)))
          (and (<= index (strlen normalized))
               (= (substr normalized index 1) "_"))
      )
    )
  )
)
)

(defun p2dwg-layer-name-in-list-p (name names)
  (vl-some
    '(lambda (candidate) (= (strcase name) (strcase candidate)))
    names)
)

(defun p2dwg-pdf-layer-names (/ document layers layer names)
  (setq document (vla-get-ActiveDocument (vlax-get-acad-object))
        layers (vla-get-Layers document)
        names nil)
  (vlax-for layer layers
    (if (p2dwg-pdf-source-layer-p (vla-get-Name layer))
      (setq names (cons (vla-get-Name layer) names))))
  (reverse names)
)

(defun p2dwg-new-pdf-layer-names (current baseline / name added)
  (setq added nil)
  (foreach name current
    (if (not (p2dwg-layer-name-in-list-p name baseline))
      (setq added (cons name added))))
  (reverse added)
)

(defun p2dwg-layer-has-layout-entities-p (name / entity data found)
  (setq found nil)
  (foreach entity (p2dwg-layout-entities)
    (if (and (not found)
             (setq data (entget entity))
             (assoc 8 data)
             (= (strcase (cdr (assoc 8 data))) (strcase name)))
      (setq found T)))
  found
)

(defun p2dwg-clear-owned-pdf-layers (names / document layers name layer current-layer
                                           result removed)
  ; Only remove exact PDF layer records created during the prior page. Never
  ; purge the drawing or touch approved/template/XREF layers.
  (setq document (vla-get-ActiveDocument (vlax-get-acad-object))
        layers (vla-get-Layers document)
        current-layer (getvar "CLAYER")
        removed nil)
  (if (tblsearch "LAYER" "0") (setvar "CLAYER" "0"))
  (foreach name names
    (if (and (p2dwg-pdf-source-layer-p name) (tblsearch "LAYER" name))
      (progn
        (if (p2dwg-layer-has-layout-entities-p name)
          (p2dwg-raise
            (strcat "PDF page reset stopped: source layer " name
              " still contains entities after the prior page cleanup.")))
        (setq layer (vl-catch-all-apply 'vla-Item (list layers name)))
        (if (vl-catch-all-error-p layer)
          (p2dwg-raise (strcat "PDF page reset cannot access source layer " name "."))
          (progn
            (setq result
              (vl-catch-all-apply 'vla-put-Lock (list layer :vlax-false)))
            (if (vl-catch-all-error-p result)
              (p2dwg-raise
                (strcat "PDF page reset cannot unlock prior source layer " name ".")))
            (setq result (vl-catch-all-apply 'vla-Delete (list layer)))
            (if (vl-catch-all-error-p result)
              (p2dwg-raise
                (strcat "PDF page reset could not remove empty source layer " name
                  ": " (vl-catch-all-error-message result)))
              (setq removed (cons name removed)))))))
  )
  (if (and current-layer (tblsearch "LAYER" current-layer))
    (setvar "CLAYER" current-layer)
    (setvar "CLAYER" "0"))
  (if (vl-some
        '(lambda (name) (tblsearch "LAYER" name))
        names)
    (p2dwg-raise "PDF page reset verification failed; prior-page PDF layers remain."))
  (p2dwg-log *p2dwg-batch-log-path*
    (strcat "PDF_LAYER_RESET|REMOVED=" (itoa (length removed))
      "|NAMES=" (vl-princ-to-string (reverse removed))))
  T
)

(defun p2dwg-untrack-working-copy (path)
  (setq *p2dwg-created-working-paths*
    (vl-remove-if
      '(lambda (candidate) (= (strcase candidate) (strcase path)))
      *p2dwg-created-working-paths*))
  T
)

(defun p2dwg-next-working-path (directory base / candidate sequence)
  (setq sequence 1)
  (setq candidate (strcat directory "/" base "_working-" (itoa sequence) ".dwg"))
  (while (findfile candidate)
    (setq sequence (1+ sequence))
    (setq candidate (strcat directory "/" base "_working-" (itoa sequence) ".dwg")))
  candidate
)

(defun p2dwg-read-scope-lines (path / handle line lines)
  (if (not (findfile path))
    nil
    (progn
      (setq handle (open path "r"))
      (if (null handle)
        nil
        (progn
          (setq line (read-line handle))
          (while line
            (setq lines (cons line lines))
            (setq line (read-line handle)))
          (close handle)
          (reverse lines))))
  )
)

(defun p2dwg-copy-title-block (source scopeSource directory logPath / target scopeTarget
                                      sourceScope existingScope legacy)
  (setq target (strcat directory "/PROJECT_TITLE_BLOCK.dwg"))
  (setq scopeTarget (strcat directory "/PROJECT_TITLE_BLOCK_SCOPE.txt"))
  (setq sourceScope (p2dwg-read-scope-lines scopeSource))
  (setq legacy (vl-directory-files directory "PROJECT_TITLE_BLOCK_*.dwg" 1))
  (if legacy
    (progn
      (p2dwg-log logPath
        (strcat "LEGACY_TITLE_BLOCK_DUPLICATES|COUNT=" (itoa (length legacy))
          "|FILES=" (vl-princ-to-string legacy)))
      (prompt
        (strcat "
Legacy numbered title-block copies found: "
          (itoa (length legacy))
          ". They were not changed or deleted; see the batch log."))
    )
  )
  (if (not (findfile source))
    (p2dwg-raise "The project title block is missing from the extracted runner folder."))
  (if (null sourceScope)
    (p2dwg-raise "The project title-block scope record is missing or unreadable. Extract a fresh runner ZIP."))
  (cond
    ((findfile target)
      (setq existingScope (p2dwg-read-scope-lines scopeTarget))
      (if (or (null existingScope) (not (equal sourceScope existingScope)))
        (progn
          (p2dwg-log logPath "FAILED: EXISTING_SHARED_TITLE_BLOCK_SCOPE_MISMATCH")
          (p2dwg-raise
            "An existing PROJECT_TITLE_BLOCK.dwg has a missing or different project/discipline scope record. Nothing was overwritten; review the shared title block before rerunning."))
        (p2dwg-log logPath (strcat "SHARED_TITLE_BLOCK_REUSED|" target))
      )
    )
    (T
      (if (not (vl-file-copy source target))
        (p2dwg-raise "The shared project title block could not be copied. No page DWG was saved."))
      (if (not (vl-file-copy scopeSource scopeTarget))
        (progn
          (vl-file-delete target)
          (p2dwg-raise "The shared title-block scope record could not be copied. The new title-block copy was rolled back."))
      )
      (p2dwg-log logPath (strcat "SHARED_TITLE_BLOCK_CREATED|" target))
    )
  )
  target
)

(defun p2dwg-attach-title-block (path / document modelSpace oldRefPath referenceName
                                     sequence result)
  (if (not (findfile path))
    (p2dwg-raise "The project title block copy is missing. No page DWG was saved."))
  (setq document (vla-get-ActiveDocument (vlax-get-acad-object)))
  (setq modelSpace (vla-get-ModelSpace document))
  (setq oldRefPath (getvar "REFPATHTYPE"))
  (setvar "INSUNITS" 4)
  (setvar "REFPATHTYPE" 1)
  (setq referenceName "P2DWG_PROJECT_TITLE_BLOCK")
  (setq sequence 1)
  (while (tblsearch "BLOCK" referenceName)
    (setq sequence (1+ sequence))
    (setq referenceName (strcat "P2DWG_PROJECT_TITLE_BLOCK_" (itoa sequence))))
  (setq result
    (vl-catch-all-apply
      'vla-AttachExternalReference
      (list modelSpace path referenceName (vlax-3d-point '(0.0 0.0 0.0))
        1.0 1.0 1.0 0.0 :vlax-true)))
  (setvar "REFPATHTYPE" oldRefPath)
  (if (vl-catch-all-error-p result)
    (p2dwg-raise
      (strcat "The project title block XREF could not be attached: "
        (vl-catch-all-error-message result))))
  (if (null result)
    (p2dwg-raise "AutoCAD did not create the project title block XREF. No page DWG was saved."))
  T
)

(defun p2dwg-run-queue (queue logPath directory base scaleFactor titleBlockSource titleBlockScopeSource /
                          currentDoc settings entry baseline baselineBlocks owned job worker result
                           stopped workingPath priorDocPath pagePdfLayerBaseline ownedPdfLayers
                           pageResult message titleBlockOutput titleBlockAttached
                           pageScalePlan pageScaleFactor pageScaleMode sourceName sourceHash sourceId
                           jobId outputName allJobs outputCount workerResult workerReason workerErrorText
                           workerFailureMessage safeToContinue
                          failedCount reviewCount batchStatus)
  (setq allJobs queue)
  (setq currentDoc (vla-get-ActiveDocument (vlax-get-acad-object)))
  (setq settings (mapcar '(lambda (name) (cons name (getvar name)))
     '("FILEDIA" "CMDDIA" "CMDECHO" "OSMODE")))
  (setq baseline (p2dwg-layout-entities))
  (setq baselineBlocks (p2dwg-block-names))
  (setq owned nil)
   (setq ownedPdfLayers nil)
   (setq pagePdfLayerBaseline nil)
   (setq *p2dwg-created-working-paths* nil)
  (setq titleBlockOutput nil)
  (setq titleBlockAttached nil)
  (setq stopped nil)
  (setq *p2dwg-controller-active* T)
  (setq *p2dwg-batch-mode* T)
  (setq *p2dwg-batch-log-path* logPath)
  (setq *p2dwg-failure-message* nil)
  (setq *p2dwg-current-token* nil)
  (setq *p2dwg-current-page* nil)
  (setq *p2dwg-current-output* nil)
  (setq *p2dwg-stage* "BATCH_START")
  (setq result
    (vl-catch-all-apply
      '(lambda ()
         (p2dwg-log logPath "BATCH_STARTED|ISOLATED_PAGE_CONTEXTS|PDF_LAYERS_RESET_PER_PAGE")
         (p2dwg-log logPath
           (strcat "BATCH_EXPECTED_JOBS|count=" (itoa (length allJobs))))
        (while (and queue (not stopped))
          (setq job (car queue))
          (setq *p2dwg-current-token* (car job))
          (setq *p2dwg-current-page* (nth 1 job))
          (setq *p2dwg-current-output* (nth 5 job))
            (setq *p2dwg-failure-state* nil)
            (setq *p2dwg-failure-message* nil)
          (setq jobId (nth 6 job))
          (setq sourceId (nth 7 job))
          (setq sourceName (nth 9 job))
          (setq sourceHash (nth 10 job))
          (setq outputName (strcat (vl-filename-base (nth 5 job)) ".dwg"))
          (p2dwg-log logPath
            (strcat "JOB_START|jobId=" jobId "|sourceId=" sourceId
              "|sourceFile=" (nth 8 job) "|sourceName=" sourceName
              "|sourceSha256=" sourceHash "|page=" (itoa (nth 1 job))
              "|outputDwg=" outputName))
          (if (findfile (nth 5 job))
            (if (p2dwg-save-confirmed-p job)
              (if (member (p2dwg-page-state (car job) (nth 1 job))
                          '("COMPLETED" "NEEDS_REVIEW"))
                (p2dwg-log logPath
                  (strcat "SKIPPED_VERIFIED_OUTPUT|jobId=" jobId
                    "|sourceId=" sourceId "|sourceFile=" (nth 8 job)
                    "|sourceSha256=" sourceHash "|page=" (itoa (nth 1 job))
                    "|outputDwg=" outputName))
                (progn
                  ; A crash may happen after the verified SAVEAS log line but
                  ; before PAGE state is written. Preserve, don't overwrite,
                  ; and resume conservatively as a saved review output.
                  (p2dwg-set-page-state logPath (car job) (nth 1 job)
                    "NEEDS_REVIEW" (nth 5 job))
                  (p2dwg-log logPath
                    (strcat "RESUMED_VERIFIED_OUTPUT|jobId=" jobId
                      "|sourceId=" sourceId "|sourceFile=" (nth 8 job)
                      "|sourceSha256=" sourceHash "|page=" (itoa (nth 1 job))
                      "|outputDwg=" outputName))))
              (progn
                ; Never treat an unverified/stale DWG as a completed page and
                ; never overwrite it during resume.
                (p2dwg-set-page-state logPath (car job) (nth 1 job)
                  "FAILED" (nth 5 job))
                (p2dwg-log logPath
                  (strcat "JOB_FAILED|jobId=" jobId "|sourceId=" sourceId
                    "|sourceFile=" (nth 8 job) "|sourceSha256=" sourceHash
                    "|page=" (itoa (nth 1 job))
                    "|stage=OUTPUT_PREFLIGHT"
                    "|reason=OUTPUT_EXISTS_WITHOUT_MATCHING_SAVE_CONFIRMATION"
                    "|outputDwg=" outputName))))
            (progn
              (p2dwg-set-page-state logPath (car job) (nth 1 job)
                "RUNNING" (nth 5 job))
              (setq *p2dwg-stage* "WORKING_COPY")
              ; Detach from the last saved page BEFORE changing any of its objects.
              ; A fresh scratch filename avoids overwriting outputs or old scratch files.
              (setq workingPath (p2dwg-next-working-path directory base))
              (if (findfile workingPath)
                (p2dwg-raise "Working-copy path already exists. Nothing was overwritten."))
              (setq priorDocPath (vla-get-FullName currentDoc))
              (vla-SaveAs currentDoc workingPath)
              (setq *p2dwg-created-working-paths*
                (cons (strcase workingPath) *p2dwg-created-working-paths*))
              (p2dwg-log logPath (strcat "WORKING_COPY|" workingPath))
              ; A prior failed scratch drawing is no longer open after SaveAs.
              ; Remove only paths this controller created, never user files.
              (if (and priorDocPath
                       (/= (strcase priorDocPath) (strcase workingPath))
                       (member (strcase priorDocPath) *p2dwg-created-working-paths*))
                (if (vl-file-delete priorDocPath)
                  (progn
                    (p2dwg-untrack-working-copy priorDocPath)
                    (p2dwg-log logPath
                      (strcat "WORKING_COPY_REMOVED|PATH=" priorDocPath)))
                  (p2dwg-log logPath
                    (strcat "WORKING_COPY_RETAINED|PATH=" priorDocPath
                      "|REASON=DELETE_FAILED"))))
               ; Attach only after SaveAs places the working drawing beside the sidecar,
               ; so AutoCAD can store a relative XREF path for the final DWGs.
               (if (and titleBlockSource (not titleBlockAttached))
                 (progn
                   (setq *p2dwg-stage* "PROJECT_TITLE_BLOCK")
                    (setq titleBlockOutput
                      (p2dwg-copy-title-block titleBlockSource titleBlockScopeSource directory logPath))
                   (p2dwg-attach-title-block titleBlockOutput)
                   (setq titleBlockAttached T)
                   (setq baseline (p2dwg-layout-entities))
                   (setq baselineBlocks (p2dwg-block-names))
                   (setq owned nil)
                    (p2dwg-log logPath
                      (strcat "PROJECT_TITLE_BLOCK_ATTACHED|MODELSPACE|0,0,0|SCALE=1"
                        "|SHARED_XREF=PROJECT_TITLE_BLOCK.dwg"
                        "|REFERENCE=P2DWG_PROJECT_TITLE_BLOCK"))
                 )
               )
              (setq *p2dwg-stage* "CLEAR_PREVIOUS_PAGE")
              (p2dwg-clear-owned owned)
              (p2dwg-clear-owned-blocks baselineBlocks)
              (p2dwg-clear-owned-pdf-layers ownedPdfLayers)
              (if (p2dwg-owned-entities baseline)
                (p2dwg-raise "Working drawing is not clear. No next PDF page was imported."))
              (setq owned nil)
              (setq ownedPdfLayers nil)
              (setq pagePdfLayerBaseline (p2dwg-pdf-layer-names))
               (p2dwg-log logPath
                 (strcat "WORKING_DRAWING_RESET|beforeJob=" jobId
                  "|sourceId=" sourceId "|page=" (itoa (nth 1 job))
                  "|ownedEntities=0|priorPdfLayers=0"))
              (setq *p2dwg-stage* "HELPER_LOAD")
              (p2dwg-log logPath
                (strcat "WORKER_STARTED|JOB=" jobId "|SOURCE=" (nth 8 job)
                  "|PAGE=" (itoa (nth 1 job)) "|OUTPUT=" outputName))
              (load (nth 2 job))
              (setq worker (read (nth 3 job)))
              (setq pageScalePlan (p2dwg-page-scale-plan (car job) (nth 1 job)))
              (setq pageScaleFactor (if pageScalePlan (nth 2 pageScalePlan) scaleFactor))
              (setq pageScaleMode (if pageScalePlan (nth 3 pageScalePlan) "FIXED_SHEET_SIZE"))
              (if pageScalePlan
                (p2dwg-log logPath
                  (strcat "SCALE_PLAN|SOURCE_" (car job) ".pdf|" (itoa (nth 1 job))
                    "|METHOD=" pageScaleMode "|FACTOR=" (rtos pageScaleFactor 2 10)
                    "|PAGE_MM=" (rtos (nth 4 pageScalePlan) 2 3) "x"
                    (rtos (nth 5 pageScalePlan) 2 3)
                    "|TARGET_MM=" (rtos (nth 6 pageScalePlan) 2 3) "x"
                    (rtos (nth 7 pageScalePlan) 2 3)))
                (p2dwg-log logPath
                  (strcat "SCALE_PLAN|SOURCE_" (car job) ".pdf|" (itoa (nth 1 job))
                    "|METHOD=SCALE_FAILED|REASON=PDF_PAGE_SIZE_UNAVAILABLE")))
               (setq workerResult
                 (vl-catch-all-apply 'apply
                   (list worker
                     (list (nth 4 job) (nth 1 job) (nth 5 job)
                        pageScaleFactor pageScaleMode jobId sourceId
                        (nth 8 job) sourceName sourceHash workingPath
                        (if pageScalePlan (nth 4 pageScalePlan) 0.0)
                        (if pageScalePlan (nth 5 pageScalePlan) 0.0)
                        (if pageScalePlan (nth 6 pageScalePlan) 0.0)
                        (if pageScalePlan (nth 7 pageScalePlan) 0.0)))))
              ; p2dwg-raise sets the useful failure message before (exit)
              ; produces AutoCAD's generic "quit / exit abort" exception.
              (setq workerFailureMessage *p2dwg-failure-message*)
              (setq workerErrorText
                (if (vl-catch-all-error-p workerResult)
                  (vl-catch-all-error-message workerResult)
                  nil))
              (setq owned (p2dwg-owned-entities baseline))
               (setq ownedPdfLayers
                 (p2dwg-new-pdf-layer-names
                   (p2dwg-pdf-layer-names) pagePdfLayerBaseline))
               (p2dwg-log logPath
                 (strcat "PAGE_PDF_SOURCE_LAYERS|jobId=" jobId
                   "|count=" (itoa (length ownedPdfLayers))
                   "|names=" (vl-princ-to-string ownedPdfLayers)))
               (setq pageResult
                 (if (vl-catch-all-error-p workerResult)
                   nil
                   workerResult))
              (setq workerReason
                (cond
                  (workerFailureMessage workerFailureMessage)
                  ((vl-catch-all-error-p workerResult) workerErrorText)
                  (T nil)))
               (if (and pageResult
                        (findfile (nth 5 job))
                         (p2dwg-save-confirmed-p job))
                (progn
                  (if (= pageResult "NEEDS_REVIEW")
                    (progn
                      (p2dwg-set-page-state logPath (car job) (nth 1 job)
                        "NEEDS_REVIEW" (nth 5 job))
                      (p2dwg-log logPath
                        (strcat "JOB_SAVED_NEEDS_REVIEW|jobId=" jobId
                          "|sourceId=" sourceId "|sourceFile=" (nth 8 job)
                          "|sourceSha256=" sourceHash "|page=" (itoa (nth 1 job))
                          "|outputDwg=" outputName)))
                    (progn
                      (p2dwg-set-page-state logPath (car job) (nth 1 job)
                        "COMPLETED" (nth 5 job))
                      (p2dwg-log logPath
                        (strcat "JOB_COMPLETED|jobId=" jobId "|sourceId=" sourceId
                          "|sourceFile=" (nth 8 job) "|sourceSha256=" sourceHash
                          "|page=" (itoa (nth 1 job)) "|outputDwg=" outputName))))
                  ; This uniquely created scratch file is not a final page output.
                   (if (vl-file-delete workingPath)
                     (p2dwg-untrack-working-copy workingPath)
                     (p2dwg-log logPath
                       (strcat "WORKING_COPY_RETAINED|PATH=" workingPath
                         "|REASON=DELETE_FAILED")))
                )
                (progn
                   (if (null workerReason)
                     (setq workerReason
                       (cond
                         ((null pageResult) "PAGE_WORKER_RETURNED_NIL")
                         ((not (findfile (nth 5 job))) "OUTPUT_FILE_NOT_FOUND")
                         (T "SAVEAS_IDENTITY_CONFIRMATION_MISSING"))))
                   (setq *p2dwg-failure-state* "FAILED")
                   (setq *p2dwg-failure-message* workerReason)
                  (p2dwg-set-page-state logPath (car job) (nth 1 job)
                     "FAILED" (nth 5 job))
                   (p2dwg-log logPath
                     (strcat "JOB_FAILED|jobId=" jobId "|sourceId=" sourceId
                       "|sourceFile=" (nth 8 job) "|sourceSha256=" sourceHash
                       "|page=" (itoa (nth 1 job)) "|stage=" *p2dwg-stage*
                       "|reason=" workerReason "|outputDwg=" outputName))
                    (p2dwg-log logPath
                      (strcat "FAILED_WORKING_COPY_RETAINED|PATH=" workingPath
                        "|FINAL_OUTPUT=N|reason=" workerReason))
                    (setq safeToContinue
                      (and (or workerFailureMessage
                               (not (p2dwg-user-cancel-p workerErrorText)))
                       (p2dwg-cancel-active-commands)
                       (p2dwg-restore-settings settings)))
                   (if safeToContinue
                     (p2dwg-log logPath
                       (strcat "JOB_FAILURE_ISOLATED|jobId=" jobId
                         "|nextJobRequiresVerifiedReset=T"))
                     (progn
                       (setq stopped T)
                       (p2dwg-log logPath
                         (strcat "BATCH_STOPPED|" *p2dwg-stage*
                           "|reason=USER_CANCEL_OR_SAFE_RESET_FAILED"
                           "|jobId=" jobId))
                       (prompt
                         "\\nBatch stopped safely. No next page was imported; completed DWGs remain unchanged.")))
                )
              )
            )
          )
          (if (not stopped) (setq queue (cdr queue)))
          (setq *p2dwg-current-token* nil)
          (setq *p2dwg-current-page* nil)
          (setq *p2dwg-current-output* nil)
        )
        (if (not stopped)
          (progn
            (setq *p2dwg-stage* "OUTPUT_SET_VERIFICATION")
            (setq outputCount (p2dwg-verify-output-set allJobs logPath))
             (setq failedCount (p2dwg-count-page-state allJobs "FAILED"))
             (setq reviewCount (p2dwg-count-page-state allJobs "NEEDS_REVIEW"))
             (p2dwg-log logPath
               (strcat "BATCH_VERIFY|expected=" (itoa (length allJobs))
                 "|verifiedDwgs=" (itoa outputCount)
                 "|failed=" (itoa failedCount)
                 "|needsReview=" (itoa reviewCount)))
             (setq batchStatus
               (if (= outputCount (length allJobs)) "COMPLETE" "INCOMPLETE"))
             (p2dwg-log logPath
               (strcat "BATCH_FINISHED|STATUS=" batchStatus
                 "|EXPECTED_JOBS=" (itoa (length allJobs))
                 "|VERIFIED_DWGS=" (itoa outputCount)
                 "|FAILED=" (itoa failedCount)))
             (prompt
               (strcat "\\nBatch finished: " batchStatus ". Verified "
                 (itoa outputCount) " of " (itoa (length allJobs))
                 " separate page DWG(s). The last page stays open.")))
          (progn
            (setq *p2dwg-stage* "OUTPUT_SET_VERIFICATION")
            (setq outputCount (p2dwg-verify-output-set allJobs logPath))
            (setq failedCount (p2dwg-count-page-state allJobs "FAILED"))
            (setq reviewCount (p2dwg-count-page-state allJobs "NEEDS_REVIEW"))
            (p2dwg-log logPath
              (strcat "BATCH_VERIFY|expected=" (itoa (length allJobs))
                "|verifiedDwgs=" (itoa outputCount)
                "|failed=" (itoa failedCount)
                "|needsReview=" (itoa reviewCount)))
            (p2dwg-log logPath
              (strcat "BATCH_FINISHED|STATUS=INCOMPLETE"
                "|EXPECTED_JOBS=" (itoa (length allJobs))
                "|VERIFIED_DWGS=" (itoa outputCount)
                "|FAILED=" (itoa failedCount)))))
      )
      nil
    )
  )
   ; Cancel incomplete native commands before restoring the working environment.
   (if (not (p2dwg-cancel-active-commands))
     (vl-catch-all-apply 'p2dwg-log
       (list logPath "AUTOCAD_COMMAND_CANCEL_FAILED|CMDACTIVE_REMAINS=T")))
   (if (p2dwg-restore-settings settings)
     (vl-catch-all-apply 'p2dwg-log
       (list logPath "SYSTEM_VARIABLES_RESTORED"))
     (vl-catch-all-apply 'p2dwg-log
       (list logPath "SYSTEM_VARIABLE_RESTORATION_FAILED")))
  (setq *p2dwg-controller-active* nil)
  (setq *p2dwg-batch-mode* nil)
  (if (vl-catch-all-error-p result)
    (progn
      (if (and *p2dwg-current-token* *p2dwg-current-page*
                (not (member
                  (p2dwg-page-state *p2dwg-current-token* *p2dwg-current-page*)
                  '("COMPLETED" "NEEDS_REVIEW" "FAILED"))))
        (vl-catch-all-apply 'p2dwg-set-page-state
          (list logPath *p2dwg-current-token* *p2dwg-current-page*
             "FAILED"
            *p2dwg-current-output*)))
       (if (and *p2dwg-current-token* *p2dwg-current-page*)
         (vl-catch-all-apply 'p2dwg-log
           (list logPath
             (strcat "JOB_FAILED|jobId=" (if jobId jobId "UNKNOWN")
               "|sourceId=" (if sourceId sourceId "UNKNOWN")
               "|sourceFile=" (if (and job (nth 8 job)) (nth 8 job) "UNKNOWN")
               "|sourceSha256=" (if sourceHash sourceHash "UNKNOWN")
               "|page=" (itoa *p2dwg-current-page*)
               "|stage=" *p2dwg-stage*
               "|reason=" (p2dwg-error-message result)
                "|outputDwg=" (if outputName outputName "UNKNOWN")))))
      (setq message (strcat "BATCH_STOPPED|" *p2dwg-stage* "|"
        (p2dwg-error-message result)))
      (vl-catch-all-apply 'p2dwg-log (list logPath message))
       (prompt (strcat "\\n" message
         "\\nUnfinished working drawing stays open. Previously saved page DWGs were not modified."))
       (setq outputCount (p2dwg-verify-output-set allJobs logPath))
       (setq failedCount (p2dwg-count-page-state allJobs "FAILED"))
       (setq reviewCount (p2dwg-count-page-state allJobs "NEEDS_REVIEW"))
       (vl-catch-all-apply 'p2dwg-log
         (list logPath
           (strcat "BATCH_VERIFY|expected=" (itoa (length allJobs))
             "|verifiedDwgs=" (itoa outputCount)
             "|failed=" (itoa failedCount)
             "|needsReview=" (itoa reviewCount))))
       (vl-catch-all-apply 'p2dwg-log
         (list logPath
           (strcat "BATCH_FINISHED|STATUS=INCOMPLETE"
             "|EXPECTED_JOBS=" (itoa (length allJobs))
             "|VERIFIED_DWGS=" (itoa outputCount)
             "|FAILED=" (itoa failedCount))))))
  (princ)
)

(defun p2dwg-start (documentSpecs firstPdf / outputChoice scaleFactor directory
                        outputDirectory outputBase spec token sourcePath helperPath
                        page pageCount queue logPath titleBlockPath titleBlockScopePath entry
                        sourceFile sourceId sourceName sourceHash jobId)
  (if (and (boundp '*p2dwg-controller-active*) *p2dwg-controller-active*)
    (p2dwg-raise "A batch is already running in this working drawing."))
  (p2dwg-assert-blank)
  (setq directory (vl-filename-directory firstPdf))
  (if (not (findfile (strcat directory "/RUN_BATCH.lsp")))
    (p2dwg-raise "RUN_BATCH.lsp must remain in the extracted folder with the source PDFs."))
  (p2dwg-verify-batch-package directory (length documentSpecs) *p2dwg-runner-build-version*)
  (setq titleBlockPath nil)
  (if *p2dwg-project-title-block-enabled*
    (progn
      (setq titleBlockPath (strcat directory "/PROJECT_TITLE_BLOCK.dwg"))
      (setq titleBlockScopePath (strcat directory "/PROJECT_TITLE_BLOCK_SCOPE.txt"))
      (if (not (findfile titleBlockPath))
        (p2dwg-raise "This project runner is missing PROJECT_TITLE_BLOCK.dwg. Extract the complete fresh ZIP and retry."))
      (if (not (findfile titleBlockScopePath))
        (p2dwg-raise "This project runner is missing PROJECT_TITLE_BLOCK_SCOPE.txt. Extract the complete fresh ZIP and retry."))
    )
  )
  (setq outputChoice (getfiled "Choose a neutral output folder and base name"
    (strcat (getvar "DWGPREFIX") "drawing-batch.dwg") "dwg" 1))
  (if outputChoice
    (progn
       (setq scaleFactor 1.0)
      (setq outputDirectory (vl-filename-directory outputChoice))
      (setq outputBase (vl-filename-base outputChoice))
      (setq logPath (strcat outputDirectory "/" outputBase "_AUTOCAD_BATCH_PROGRESS.log"))
      ; Preflight every local input before saving or modifying the working drawing.
      (setq queue nil)
      (foreach spec documentSpecs
        (setq token (car spec))
         (setq sourceFile (cadr spec))
         (setq sourceId (nth 2 spec))
         (setq sourceName (nth 3 spec))
         (setq sourceHash (nth 4 spec))
         (setq pageCount (nth 5 spec))
         (setq sourcePath (strcat directory "/" sourceFile))
        (setq helperPath (strcat directory "/DOC_" token ".lsp"))
        (if (or (not (findfile sourcePath)) (not (findfile helperPath)))
          (p2dwg-raise (strcat "Missing local input/helper for SOURCE_" token ".pdf")))
        (setq page 1)
         (repeat pageCount
           (setq jobId (strcat "SOURCE_" token "_P" (p2dwg-pad page 3)))
          (setq queue (cons
            (list token page helperPath (strcat "p2dwg" token "-run-page")
              sourcePath
              (strcat outputDirectory "/" (nth (1- page) (nth 6 spec)))
              jobId sourceId sourceFile sourceName sourceHash)
            queue))
          (setq page (1+ page))
        )
      )
       (if (null queue)
         (p2dwg-raise "The selected batch contains no PDF pages to process."))
       (p2dwg-assert-unique-page-outputs queue)
        (setq *p2dwg-page-states* nil)
       (setq *p2dwg-confirmed-save-lines* nil)
       (p2dwg-load-page-states logPath)
       (p2dwg-log logPath
         (strcat "QUEUE_VERIFIED|jobs=" (itoa (length queue))
           "|uniqueOutputPaths=" (itoa (length queue))))
      (setq *p2dwg-batch-initializing* T)
      (foreach entry queue
        (cond
          ((= (p2dwg-page-state (car entry) (nth 1 entry)) "RUNNING")
            (p2dwg-set-page-state logPath (car entry) (nth 1 entry)
              "QUEUED" (nth 5 entry)))
          ((null (p2dwg-page-state (car entry) (nth 1 entry)))
          (p2dwg-set-page-state logPath (car entry) (nth 1 entry)
              "QUEUED" (nth 5 entry)))
        )
      )
      (setq *p2dwg-batch-initializing* nil)
      (p2dwg-write-page-progress logPath)
       (p2dwg-run-queue (reverse queue) logPath outputDirectory outputBase scaleFactor titleBlockPath titleBlockScopePath)
    )
    (prompt "\\nNo output selected. Batch canceled; drawing unchanged.")
  )
  (princ)
)

(defun c:PDF2DWGBATCH (/ firstPdf result)
  (setq *p2dwg-failure-message* nil)
  (setq result
    (vl-catch-all-apply
      '(lambda ()
        (p2dwg-assert-blank)
        (setq firstPdf (getfiled "Select SOURCE_01.pdf from the extracted batch folder" "" "pdf" 0))
        (if firstPdf
          (p2dwg-start '(${u}) firstPdf)))
      nil))
  (if (vl-catch-all-error-p result)
    (prompt (strcat "\\nBatch not started: " (p2dwg-error-message result))))
  (princ)
)
(princ "\\nLoaded PDF2DWGBATCH (single working drawing). Start only in a NEW unsaved blank DWT drawing.")
(princ)
`}const l2=[{field:"sourceFile",xdataIndex:1,global:"*p2dwg-source-alias*"},{field:"pageNumber",xdataIndex:2,global:"*p2dwg-source-page*"},{field:"jobId",xdataIndex:3,global:"*p2dwg-job-id*"},{field:"sourceId",xdataIndex:4,global:"*p2dwg-source-id*"},{field:"sourceSha256",xdataIndex:5,global:"*p2dwg-source-hash*"},{field:"sourceName",xdataIndex:6,global:"*p2dwg-source-name*"}];function c2(a,r){const s=String(a).padStart(2,"0"),o=`p2dwg${s}`,l=l2.map(({xdataIndex:u,global:m})=>`(= (cdr (nth ${u} app-data)) ${m})`).join(`
    `);return`
(defun ${o}-job-entity-matches (entity / data record app-data)
  (setq data (entget entity '("PIDPAGE")))
  (setq record (assoc -3 data))
  (setq app-data (if record (car (cdr record)) nil))
  (and app-data
    (= (car app-data) "PIDPAGE")
    ${l})
)

(defun ${o}-verify-job-entities (selection / index entity checked valid)
  (setq index 0 checked 0 valid T)
  (while (and selection (< index (sslength selection)) valid)
    (setq entity (ssname selection index))
    (if (entget entity)
      (progn
        (setq checked (1+ checked))
        (if (not (${o}-job-entity-matches entity))
          (setq valid nil))))
    (setq index (1+ index)))
  (and valid (> checked 0))
)

(defun ${o}-pdf-input (value)
  ; Do not feed arguments to AutoCAD if PDFIMPORT stopped or never started.
  (if (not (wcmatch (strcase (getvar "CMDNAMES")) "*PDFIMPORT*"))
    (p2dwg-raise "PDFIMPORT is no longer active; remaining inputs were not sent."))
  (command value)
)

(defun ${o}-run-page (pdfPath page outputPath scaleFactor scaleMode
                           jobId sourceId sourceFile sourceName sourceHash workingPath
                           pageWidthMm pageHeightMm targetWidthMm targetHeightMm /
                           currentDoc beforeEntity importedEntities
                           pipeConfirmed reviewConfirmed allEditableText oldOsMode
                           recoveryPath rollbackResult expectedFullName actualFullName
                           finalPageResult
                           identityResult saveConfirmationLine)
  (setq currentDoc (vla-get-ActiveDocument (vlax-get-acad-object)))
  (if (findfile outputPath)
    (p2dwg-raise "Output appeared after queueing. It will not be overwritten."))
  (setq *p2dwg-batch-directory* (vl-filename-directory pdfPath))
  (setq *p2dwg-entity-map-path*
    (strcat (vl-filename-directory outputPath) "/AUTOCAD_ENTITY_MAP.log"))
  (setq *p2dwg-geometry-scan-path*
    (strcat (vl-filename-directory outputPath) "/AUTOCAD_GEOMETRY_SCAN.log"))
  (setq *p2dwg-text-snapshot-path*
    (strcat (vl-filename-directory outputPath) "/"
      (vl-filename-base outputPath) "_LOCAL_TEXT_POSITION_SNAPSHOT.json"))
  (setq *p2dwg-source-alias* sourceFile)
  (setq *p2dwg-source-id* sourceId)
  (setq *p2dwg-source-name* sourceName)
  (setq *p2dwg-source-hash* (strcase sourceHash))
  (setq *p2dwg-job-id* jobId)
  (setq *p2dwg-source-page* page)
  (setq *p2dwg-scale-status* "UNVERIFIED")
  (setq *p2dwg-pipe-sequence* 0)
  (setvar "FILEDIA" 0)
  (setvar "CMDECHO" 1)
  (setq oldOsMode (getvar "OSMODE"))
  (setvar "OSMODE" 0)
  (setvar "TILEMODE" 1)
  (setq *p2dwg-stage* "APPROVED_STANDARDS")
  (${o}-apply-approved-cad-standards)
  (${o}-batch-log (strcat "MAPPING_PREFLIGHT|BLOCKS="
    (itoa (length *p2dwg-approved-symbols*)) "|TEXT_STYLES="
    (itoa (length *p2dwg-approved-text-styles*))
    "|TEXT_STYLE_SOURCE=" *p2dwg-approved-text-style-source*))
  (if (null *p2dwg-approved-symbols*)
    (progn
      (initget "Yes No")
      (if (/= (getkword "\\nNo compatible approved blocks are available. This run can only retain RAW PDF geometry. Continue a raw-only test? [Yes/No] <No>: ") "Yes")
        (p2dwg-raise "No approved blocks for this discipline/project. Approve compatible Legends Library symbols before a mapped CAD test."))))
  (setq *p2dwg-stage* "PDFIMPORT_START")
  (${o}-batch-log
    (strcat "PDFIMPORT_START|jobId=" jobId "|sourceId=" sourceId
      "|sourceFile=" sourceFile "|sourceSha256=" (strcase sourceHash)
      "|page=" (itoa page)))
  (${o}-batch-log
    (strcat "PDFIMPORT_SOURCE|jobId=" jobId "|sourceId=" sourceId
      "|sourceFile=" sourceFile "|sourceName=" sourceName
      "|sourceSha256=" (strcase sourceHash) "|page=" (itoa page)))
  (${o}-batch-log (strcat "IMPORT_STARTED|SOURCE_${s}.pdf|" (itoa page)))
  (prompt (strcat "\\nImporting PDF page " (itoa page) " of ${r}..."))
  (setq beforeEntity (entlast))
  (command "_.-PDFIMPORT")
  (setq *p2dwg-stage* "PDFIMPORT_FILE_OPTION")
  (${o}-pdf-input "_File")
  (setq *p2dwg-stage* "PDFIMPORT_PATH")
  (${o}-pdf-input pdfPath)
  (setq *p2dwg-stage* "PDFIMPORT_PAGE")
  (${o}-pdf-input (itoa page))
  (setq *p2dwg-stage* "PDFIMPORT_ORIGIN")
  (${o}-pdf-input '(0.0 0.0 0.0))
  (setq *p2dwg-stage* "PDFIMPORT_SCALE")
  ; Import in native PDF-inch units, then uniformly scale the complete page.
  (${o}-pdf-input 1.0)
  (setq *p2dwg-stage* "PDFIMPORT_ROTATION")
  (${o}-pdf-input 0.0)
  (if (wcmatch (strcase (getvar "CMDNAMES")) "*PDFIMPORT*")
    (p2dwg-raise "PDFIMPORT did not finish after rotation. No page was saved."))
  (setvar "OSMODE" oldOsMode)
  (setq importedEntities (${o}-collect-imported-entities beforeEntity))
  (if (null importedEntities)
    (p2dwg-raise "PDFIMPORT produced no usable drawing entities. PDF underlays or raster-only pages are not accepted as editable CAD."))
  (${o}-normalize-pdf-import-layers importedEntities)
  (${o}-standardize-imported-text importedEntities nil)
  (${o}-calibrate-import importedEntities scaleFactor scaleMode
    pageWidthMm pageHeightMm targetWidthMm targetHeightMm)
  (${o}-batch-log (strcat "IMPORT_COMPLETED|SOURCE_${s}.pdf|"
    (itoa page) "|ENTITIES=" (itoa (sslength importedEntities))))
  (${o}-batch-log
    (strcat "PDFIMPORT_DONE|jobId=" jobId "|sourceId=" sourceId
      "|sourceFile=" sourceFile "|sourceSha256=" (strcase sourceHash)
      "|page=" (itoa page) "|entities=" (itoa (sslength importedEntities))))
  (${o}-record-mapping importedEntities "RAW" nil nil)
  (setq *p2dwg-stage* "SCALE_APPLIED")
  (command "_.ZOOM" "_Extents")
  (setq *p2dwg-stage* "PRE_SAVE_REVIEW")
  (${o}-batch-log
    (strcat "CONFIDENTIALITY_REDACTION_DISABLED|jobId=" jobId
      "|SOURCE_DETAILS_RETAINED"))
  (prompt
    "\\nRunner will not delete source entities. Company/client details may remain; review before sharing.")
       (setq *p2dwg-stage* "APPROVED_BLOCK_REVIEW")
       (${o}-review-approved-blocks importedEntities)
        ; iComputerLink is a client signal linetype, not the approved output style.
        ; Map its imported line/circle geometry to f_Inst so it inherits the
        ; approved continuous signal appearance while preserving coordinates.
        (setq *p2dwg-stage* "AUTO_SOFTWARE_SIGNAL_LAYER_MAPPING")
        (${o}-auto-map-software-signal-lines importedEntities)
        ; Exact EDE identity plus connected geometry also works when PDFIMPORT
        ; discarded every meaningful source layer/linetype name.
        (setq *p2dwg-stage* "AUTO_EDE_TOPOLOGY_ROUTE_MAPPING")
        (${o}-auto-map-ede-routes importedEntities)
        ; Main process piping is continuous linework, not a block. Map only
        ; recognized ProcessLine or exact PDF_f_Pipe_Pri source linework after
        ; scale and symbol review. Generic PDF layers are not pipe identity.
        (setq *p2dwg-stage* "AUTO_PRIMARY_PIPE_LAYER_MAPPING")
        (${o}-auto-map-primary-pipe-lines importedEntities)
        ; Pipe Run tagging is a separate optional operation, not a required
        ; per-page layer-number prompt in the PDF conversion batch.
       (setq pipeConfirmed T)
       ; Geometry matching inserts only unique high-confidence block overlays.
       ; Unmatched source remains visible and is saved as NEEDS_REVIEW; the
       ; batch queue continues so later pages are not lost to a review prompt.
       (setq *p2dwg-stage* "AUTO_SYMBOL_REVIEW")
        (${o}-batch-log
          (strcat "GEOMETRY_SCAN_DONE|jobId=" jobId "|sourceId=" sourceId
            "|sourceFile=" sourceFile "|page=" (itoa page)))
       (setq reviewConfirmed nil)
       (prompt
         "\\nAutomatic block placement finished. Unmatched or unlinked items remain visible for review; this page will be saved NEEDS_REVIEW and the queue will continue.")
        ; Apply Legends text style after geometry review; only loose TEXT/MTEXT
        ; receive the approved general text layer. Attributes keep their owner.
        (setq *p2dwg-stage* "SAVE_STANDARDIZE_TEXT")
       (setq allEditableText (ssget "_X" '((0 . "TEXT,MTEXT,ATTRIB"))))
        (${o}-standardize-imported-text allEditableText T)
        (setq *p2dwg-stage* "SAVE_FINALIZE_SOURCE_LAYERS")
       (${o}-finalize-source-layer-states)
        ; Layer Continuous alone is insufficient when an entity still carries
        ; an explicit PDF_IMPORT linetype. Verify effective appearance per page.
        (setq *p2dwg-stage* "SAVE_VERIFY_PRIMARY_PIPE_CONTINUOUS")
        (${o}-verify-primary-pipe-continuous importedEntities)
        (setq *p2dwg-stage* "SAVE_VERIFY_ENTITY_IDENTITY")
        ; Stamp after all text/layer entmod passes so those edits cannot strip
        ; the source/page XData used by the save identity guard.
        (${o}-stamp-page importedEntities)
        (${o}-batch-log
          (strcat "PAGE_IDENTITY_STAMPED|jobId=" jobId
            "|sourceId=" sourceId "|page=" (itoa page)
            "|entities=" (itoa (sslength importedEntities))))
       (setq identityResult
          (vl-catch-all-apply
            '(lambda () (${o}-verify-job-entities importedEntities))
            nil))
       (if (or (vl-catch-all-error-p identityResult) (not identityResult))
         (progn
           (setq *p2dwg-failure-state* "FAILED")
           (p2dwg-raise
             (strcat "Imported entity identity does not match job " jobId
               ". The page was not saved under the requested output name."))))
        (setq *p2dwg-stage* "SAVE_VERIFY_SCALE")
        (if (/= (strcase *p2dwg-scale-status*) "VERIFIED")
         (p2dwg-raise "Final DWG save blocked because its automatic scale plan failed."))
        (setq *p2dwg-stage* "SAVE_OUTPUT_PREFLIGHT")
       (if (findfile outputPath)
         (p2dwg-raise "Output already exists. No DWG was overwritten."))
        (setq *p2dwg-stage* "SAVEAS_EXECUTE")
        (${o}-batch-log
          (strcat "SAVEAS_START|jobId=" jobId "|sourceId=" sourceId
            "|sourceFile=" sourceFile "|sourceSha256=" (strcase sourceHash)
            "|page=" (itoa page) "|outputDwg="
            (strcat (vl-filename-base outputPath) ".dwg")))
       (vla-SaveAs currentDoc outputPath)
        (setq *p2dwg-stage* "SAVEAS_VERIFY_IDENTITY")
       (setq identityResult
         (vl-catch-all-apply
           '(lambda ()
             (setq expectedFullName
               (strcase (vl-string-translate "/" (chr 92) outputPath)))
             (setq actualFullName
               (strcase (vl-string-translate "/" (chr 92)
                 (vla-get-FullName currentDoc))))
             (and (findfile outputPath)
               (= expectedFullName actualFullName)
               (${o}-verify-job-entities importedEntities)))
           nil))
       (if (or (vl-catch-all-error-p identityResult) (not identityResult))
         (progn
           (setq *p2dwg-failure-state* "FAILED")
           (setq *p2dwg-failure-message*
             (strcat "Saved drawing identity check failed for " jobId))
           (setq recoveryPath
             (p2dwg-next-working-path
               (vl-filename-directory outputPath)
               (strcat (vl-filename-base outputPath) "_identity_failed")))
           (setq rollbackResult
             (vl-catch-all-apply 'vla-SaveAs (list currentDoc recoveryPath)))
           (if (not (vl-catch-all-error-p rollbackResult))
             (if (findfile outputPath)
               (if (vl-file-delete outputPath)
                 (${o}-batch-log
                   (strcat "IDENTITY_ROLLBACK|jobId=" jobId "|OUTPUT_REMOVED"))
                 (${o}-batch-log
                   (strcat "IDENTITY_ROLLBACK_FAILED|jobId=" jobId
                     "|OUTPUT_RETAINED_AS_FAILED")))
             (${o}-batch-log
               (strcat "IDENTITY_ROLLBACK_FAILED|jobId=" jobId
                 "|RECOVERY=" recoveryPath)))
            (p2dwg-raise *p2dwg-failure-message*))))
        (setq *p2dwg-stage* "SAVEAS_CONFIRMATION")
        (setq saveConfirmationLine
          (strcat "SAVEAS_CONFIRMED|jobId=" jobId "|sourceId=" sourceId
            "|sourceFile=" sourceFile "|sourceSha256=" (strcase sourceHash)
            "|page=" (itoa page) "|outputDwg="
            (strcat (vl-filename-base outputPath) ".dwg")))
        (${o}-batch-log saveConfirmationLine)
        (p2dwg-add-save-confirmation saveConfirmationLine)
         (${o}-batch-log
           (strcat "DWG_REOPEN_VERIFICATION_PENDING|jobId=" jobId
             "|sourceId=" sourceId "|page=" (itoa page)
             "|outputDwg=" (strcat (vl-filename-base outputPath) ".dwg")
             "|reason=Windows_AutoCAD_reopen_check_not_run"))
       (${o}-batch-log
         (strcat "SAVED|jobId=" jobId "|sourceId=" sourceId
           "|sourceFile=" sourceFile "|sourceName=" sourceName
           "|sourceSha256=" (strcase sourceHash)
           "|SOURCE_${s}.pdf|" (itoa page) "|" outputPath
           "|SCALE=" *p2dwg-scale-status* "|"
           (rtos *p2dwg-effective-scale* 2 8)
           "|REVIEW=" (if reviewConfirmed "PASS" "NEEDS_REVIEW")))
        (setq finalPageResult (if reviewConfirmed T "NEEDS_REVIEW"))
        (setq *p2dwg-stage* "SAVEAS_RETURN")
       (prompt (strcat "\\nSaved native DWG: " outputPath))
        finalPageResult
)

(defun c:PDF2DWG${s} (/ pdfPath runnerPath result)
  (setq pdfPath (getfiled "Select SOURCE_${s}.pdf from the extracted runner folder" "" "pdf" 0))
  (if pdfPath
    (progn
      (setq runnerPath (strcat (vl-filename-directory pdfPath) "/RUN_BATCH.lsp"))
      (if (findfile runnerPath)
        (progn
          (load runnerPath)
          (setq *p2dwg-failure-message* nil)
          (setq result (vl-catch-all-apply 'p2dwg-start
            (list '((${a} ${r})) pdfPath)))
          (if (vl-catch-all-error-p result)
            (prompt (strcat "\\nBatch not started: " (p2dwg-error-message result))))
        )
        (prompt "\\nMissing RUN_BATCH.lsp. Extract the complete kit into one folder.")
      )
    )
  )
  (princ)
)
(princ "\\nLoaded PDF2DWG${s} (single working drawing page worker).")
(princ)
`}function d2(a){return`
(defun ${a}-route-record-target (record / kind)
  (setq kind (strcase (nth 2 record)))
  (cond
    ((wcmatch kind "*PIPE RUN*,*PIPELINE*,*PROCESS LINE*") "f_Pipe_Pri")
    ((wcmatch kind "*SOFTWARE SIGNAL*,*CONTROL SIGNAL*,*SIGNAL LINE*") "f_Inst")
    (T nil)))

(defun ${a}-route-straight-points (entity / result start end length data)
  (setq data (entget entity))
  (if (and data (${a}-pdf-source-layer-p (cdr (assoc 8 data)))
           (member (cdr (assoc 0 data)) '("LINE" "LWPOLYLINE" "POLYLINE"))
           (${a}-primary-pipe-linear-entity-p data))
    (progn
      (setq result (vl-catch-all-apply
        '(lambda ()
          (setq start (vlax-curve-getStartPoint entity) end (vlax-curve-getEndPoint entity)
            length (vlax-curve-getDistAtParam entity (vlax-curve-getEndParam entity)))
          (if (and (>= length 6.0) (equal (distance start end) length 0.000001))
            (list start end) nil)) nil))
      (if (vl-catch-all-error-p result) nil result))
    nil))

(defun ${a}-route-collinear-p (left right / a b cross denom)
  (setq a (mapcar '- (cadr left) (car left)) b (mapcar '- (cadr right) (car right))
    cross (- (* (car a) (cadr b)) (* (cadr a) (car b)))
    denom (* (distance (car left) (cadr left)) (distance (car right) (cadr right))))
  (and (> denom 0.000001) (< (/ (abs cross) denom) 0.00001)))

(defun ${a}-route-connected-chain (seed records / queue seen entity points endpoint neighbors candidate)
  (setq queue (list seed) seen nil)
  (while (and queue (< (length seen) 512))
    (setq entity (car queue) queue (cdr queue))
    (if (not (member entity seen))
      (progn
        (setq seen (cons entity seen) points (cdr (assoc entity records)))
        (foreach endpoint points
          (setq neighbors nil)
          (foreach candidate records
            (if (and (/= (car candidate) entity)
                     (${a}-pdf-source-layer-p (cdr (assoc 8 (entget (car candidate)))))
                     (or (equal endpoint (cadr candidate) 0.01)
                         (equal endpoint (caddr candidate) 0.01)))
              (setq neighbors (cons candidate neighbors))))
          ; Degree > 2 is a branch, not proof that every connected segment has
          ; the same engineering identity. Never cross a symbol-sized gap.
          (if (and (= (length neighbors) 1)
                   (${a}-route-collinear-p points (cdar neighbors))
                   (not (member (caar neighbors) seen)))
            (setq queue (cons (caar neighbors) queue)))))))
  (if queue nil seen))

(defun ${a}-auto-map-ede-routes
       (selection / records labels index entity data points record tag target matches position height
                    candidate closest result gap best best-gap second-gap seed chain changed geometry updated verified)
  (if (/= (strcase (if *p2dwg-scale-status* *p2dwg-scale-status* "")) "VERIFIED")
    (p2dwg-raise "EDE route matching requires SCALE_VERIFIED."))
  (setq records nil labels nil index 0 changed 0)
  (while (< index (sslength selection))
    (setq entity (ssname selection index) data (entget entity))
    (if data
      (cond
        ((member (cdr (assoc 0 data)) '("TEXT" "MTEXT"))
          (setq labels (cons entity labels)))
        ((setq points (${a}-route-straight-points entity))
          (setq records (cons (cons entity points) records)))))
    (setq index (1+ index)))
  (foreach record *p2dwg-ede-records*
    (setq target (${a}-route-record-target record) tag (strcase (vl-string-trim " " (nth 1 record))))
    (if (and target (/= tag "") (= (nth 3 record) *p2dwg-source-page*)
             (not (member tag *p2dwg-conflicting-tags*)))
      (progn
        (setq matches nil)
        (foreach entity labels
          (if (= (strcase (vl-string-trim " " (${a}-text-content entity))) tag)
            (setq matches (cons entity matches))))
        (setq seed nil)
        (if (= (length matches) 1)
          (progn
            (setq entity (car matches) data (entget entity)
              position (trans (cdr (assoc 10 data)) entity 0)
              height (if (assoc 40 data) (cdr (assoc 40 data)) 1.0)
              best nil best-gap 1e99 second-gap 1e99)
            (foreach candidate records
              (if (${a}-pdf-source-layer-p (cdr (assoc 8 (entget (car candidate)))))
                (progn
                  (setq result (vl-catch-all-apply 'vlax-curve-getClosestPointTo (list (car candidate) position)))
                  (if (not (vl-catch-all-error-p result))
                    (progn
                      (setq gap (distance position result))
                      (if (< gap best-gap)
                        (setq second-gap best-gap best-gap gap best (car candidate))
                        (if (< gap second-gap) (setq second-gap gap))))))))
            (if (and best (<= best-gap (max 2.0 (* height 1.5)))
                     (>= (- second-gap best-gap) (max 0.5 (* height 0.5))))
              (setq seed best))))
        (setq chain (if seed (${a}-route-connected-chain seed records) nil))
        (if chain
          (progn
            (if (not (tblsearch "LAYER" target))
              (p2dwg-raise (strcat "The exact approved route layer is unavailable: " target)))
            (foreach entity chain
              (setq data (entget entity) geometry (${a}-primary-pipe-geometry-data data)
                updated (vl-remove-if '(lambda (pair) (member (car pair) '(420 430))) data)
                updated (${a}-put-group 8 target updated)
                updated (${a}-put-group 62 256 updated)
                updated (${a}-put-group 6 "BYLAYER" updated)
                updated (${a}-put-group 370 -1 updated))
              (if (not (and (entmod updated) (entupd entity)))
                (p2dwg-raise "A topology-confirmed route could not receive its approved ByLayer properties."))
              (setq verified (entget entity))
              (if (not (and (equal geometry (${a}-primary-pipe-geometry-data verified) 1e-8)
                            (= (cdr (assoc 8 verified)) target)
                            (= (cdr (assoc 62 verified)) 256)
                            (= (cdr (assoc 6 verified)) "BYLAYER")
                            (= (cdr (assoc 370 verified)) -1)))
                (p2dwg-raise "EDE route geometry/properties verification failed. No final page was saved."))
              (setq changed (1+ changed)))
            (${a}-batch-log (strcat "EDE_ROUTE_MAPPING|CONFIRMED|StableID=" (car record)
              "|LAYER=" target "|SEGMENTS=" (itoa (length chain))
              "|EVIDENCE=UNIQUE_EXACT_EDE_LABEL_AND_CONNECTED_GEOMETRY"
              "|SOURCE_LAYER_COLOR=IGNORED|GEOMETRY=UNCHANGED|GAPS_BRANCHES=NOT_GUESSED")))
          (${a}-batch-log (strcat "EDE_ROUTE_MAPPING|NEEDS_REVIEW|StableID=" (car record)
            "|REASON=NO_UNIQUE_LABEL_OR_UNAMBIGUOUS_CONNECTED_ROUTE|SOURCE_RETAINED"))))))
  changed)
`}const _p="f_Pipe_Pri",Dv=240,u2="f_Inst",p2=115;function f2(a){return[]}function h2(a,r=[]){return`
(defun ${a}-pdf-source-layer-p (name / normalized index)
  (setq normalized (if name (strcase name) "")
        index 4)
  (and
    (>= (strlen normalized) 5)
    (= (substr normalized 1 3) "PDF")
    (/= (substr normalized 1 9) "PDF_DONE_")
    (progn
      (while (and (<= index (strlen normalized))
                  (wcmatch (substr normalized index 1) "#"))
        (setq index (1+ index)))
      (and (<= index (strlen normalized))
           (= (substr normalized index 1) "_")))
  )
)

(defun ${a}-primary-process-pipe-source-layer-p (name / normalized)
  (setq normalized (if name (strcase name) ""))
  (and
    (${a}-pdf-source-layer-p name)
    (or
      (wcmatch normalized "*PROCESSLINE*")
      (wcmatch normalized "*PROCESS LINE*")
      (wcmatch normalized "*PROCESS_LINE*")
      (wcmatch normalized "*PROCESS-LINE*"))
    (not
      (wcmatch normalized
        "*UTILITY*,*CAPILLARY*,*ELECTRIC*,*SIGNAL*,*INSTRUMENT*,*INLINE*,*VALVE*,*BORDER*,*TITLE*")))
)

(defun ${a}-primary-pipe-exact-source-layer-p (name / normalized index)
  (setq normalized (if name (strcase name) "") index 4)
  (if (and (>= (strlen normalized) 5) (= (substr normalized 1 3) "PDF"))
    (progn
      (while (and (<= index (strlen normalized))
                  (wcmatch (substr normalized index 1) "#"))
        (setq index (1+ index)))
      (and (<= index (strlen normalized))
           (= (substr normalized index 1) "_")
           (${a}-pdf-source-layer-p name)
           (= (substr normalized (1+ index)) "F_PIPE_PRI")))
    nil)
)

(defun ${a}-primary-pipe-linear-entity-p (data / entity-type flags)
  (setq entity-type (strcase (if (assoc 0 data) (cdr (assoc 0 data)) ""))
        flags (if (assoc 70 data) (cdr (assoc 70 data)) 0))
  (and
    (member entity-type '("LINE" "LWPOLYLINE" "POLYLINE" "ARC"))
    (not
      (and
        (member entity-type '("LWPOLYLINE" "POLYLINE"))
        (/= 0 (logand flags 1))))
    (not
      (and (= entity-type "POLYLINE")
           (/= 0 (logand flags 88))))
  )
)

(defun ${a}-primary-pipe-geometry-data (data)
  (vl-remove-if
    '(lambda (pair) (member (car pair) '(5 6 8 62 370 420 430 -3)))
    data)
)

(defun ${a}-software-signal-linetype-p (data source-layer / entity-linetype layer-record layer-linetype)
  (setq entity-linetype (if (assoc 6 data) (cdr (assoc 6 data)) nil)
        layer-record (tblsearch "LAYER" source-layer)
        layer-linetype (if (assoc 6 layer-record) (cdr (assoc 6 layer-record)) nil))
  (or
    (and entity-linetype
         (wcmatch (strcase entity-linetype) "*ICOMPUTERLINK*"))
    (and layer-linetype
         (wcmatch (strcase layer-linetype) "*ICOMPUTERLINK*")))
)

(defun ${a}-software-signal-geometry-data (data)
  (vl-remove-if
    '(lambda (pair) (member (car pair) '(5 6 8 62 370 420 430 -3)))
    data)
)

(defun ${a}-auto-map-software-signal-lines
       (selection / index entity data source-layer entity-type candidates mapped skipped
                   target-layer updated verified geometry-before geometry-after)
  (setq target-layer "${u2}")
  (if (/= (strcase (if *p2dwg-scale-status* *p2dwg-scale-status* "")) "VERIFIED")
    (p2dwg-raise "Software signal mapping stopped because page scale is not SCALE_VERIFIED."))
  (if (not (tblsearch "LAYER" target-layer))
    (p2dwg-raise "The approved f_Inst layer is unavailable; software signal geometry was not changed."))
  (setq index 0 candidates 0 mapped 0 skipped 0)
  (while (< index (sslength selection))
    (setq entity (ssname selection index)
          data (entget entity)
          source-layer (if (assoc 8 data) (cdr (assoc 8 data)) "")
          entity-type (strcase (if (assoc 0 data) (cdr (assoc 0 data)) "")))
    (if (and
          (${a}-pdf-source-layer-p source-layer)
          (${a}-software-signal-linetype-p data source-layer))
      (if (member entity-type '("LINE" "LWPOLYLINE" "POLYLINE" "ARC" "CIRCLE"))
        (progn
          (setq candidates (1+ candidates)
                geometry-before (${a}-software-signal-geometry-data data)
                updated (vl-remove-if
                  '(lambda (pair) (member (car pair) '(420 430)))
                  data))
          (setq updated (${a}-put-group 8 target-layer updated))
          (setq updated (${a}-put-group 62 256 updated))
          (setq updated (${a}-put-group 6 "BYLAYER" updated))
          (setq updated (${a}-put-group 370 -1 updated))
          (if (not (entmod updated))
            (p2dwg-raise "A recognized software signal entity could not be assigned to f_Inst."))
          (entupd entity)
          (setq verified (entget entity)
                geometry-after (${a}-software-signal-geometry-data verified)
                entity-type (strcase (if (assoc 0 verified) (cdr (assoc 0 verified)) "")))
          (if (and
                (= (strcase (cdr (assoc 8 verified))) (strcase target-layer))
                (= (if (assoc 62 verified) (cdr (assoc 62 verified)) 256) 256)
                (= (strcase (if (assoc 6 verified) (cdr (assoc 6 verified)) "")) "BYLAYER")
                (= (if (assoc 370 verified) (cdr (assoc 370 verified)) -1) -1)
                (member entity-type '("LINE" "LWPOLYLINE" "POLYLINE" "ARC" "CIRCLE"))
                (equal geometry-before geometry-after 1e-8))
            (setq mapped (1+ mapped))
            (p2dwg-raise "Software signal mapping changed geometry or failed its ByLayer verification."))
        )
        (setq skipped (1+ skipped)))
    )
    (setq index (1+ index)))
  (if (> mapped 0)
    (${a}-batch-log
      (strcat "SOFTWARE_SIGNAL_MAPPING|STATUS=CONFIRMED|LAYER=" target-layer
        "|COLOR=${p2}|SOURCE_LINETYPE=iComputerLink"
        "|CANDIDATES=" (itoa candidates) "|MAPPED=" (itoa mapped)
        "|NONLINEAR_SKIPPED=" (itoa skipped)
        "|ENTITY_COLOR=BYLAYER|LINETYPE=BYLAYER|TARGET_LINETYPE=CONTINUOUS"
        "|LINEWEIGHT=BYLAYER|GEOMETRY=UNCHANGED"))
    (${a}-batch-log
      (strcat "SOFTWARE_SIGNAL_MAPPING|STATUS=NO_MATCH|LAYER=" target-layer
        "|CANDIDATES=0|SOURCE_LINETYPE=iComputerLink_NOT_FOUND"
        "|GENERIC_PDF_GEOMETRY_LEFT_VISIBLE")))
  mapped
)

(defun ${a}-auto-map-primary-pipe-lines
       (selection / index entity data source-layer entity-type candidates mapped skipped target-layer
                   updated verified geometry-before geometry-after)
  (setq target-layer "${_p}")
  (if (/= (strcase (if *p2dwg-scale-status* *p2dwg-scale-status* "")) "VERIFIED")
    (p2dwg-raise "Primary pipe mapping stopped because page scale is not SCALE_VERIFIED."))
  (if (not (tblsearch "LAYER" target-layer))
    (p2dwg-raise "The approved f_Pipe_Pri layer is unavailable; primary pipe geometry was not changed."))
  (setq index 0 candidates 0 mapped 0 skipped 0)
  (while (< index (sslength selection))
    (setq entity (ssname selection index)
          data (entget entity)
          source-layer (if (assoc 8 data) (cdr (assoc 8 data)) ""))
    ; A PDF layer that explicitly retains the exact approved pipe-layer name
    ; is strong linework evidence. Generic PDF layers and symbol entities never
    ; qualify; source linetype/color are still not copied to the target.
    (if (or (${a}-primary-process-pipe-source-layer-p source-layer)
            (${a}-primary-pipe-exact-source-layer-p source-layer))
      (if (${a}-primary-pipe-linear-entity-p data)
        (progn
          (setq candidates (1+ candidates)
                geometry-before (${a}-primary-pipe-geometry-data data)
                updated (vl-remove-if
                  '(lambda (pair) (member (car pair) '(420 430)))
                  data))
          (setq updated (${a}-put-group 8 target-layer updated))
          (setq updated (${a}-put-group 62 256 updated))
          (setq updated (${a}-put-group 6 "BYLAYER" updated))
          (setq updated (${a}-put-group 370 -1 updated))
          (if (not (entmod updated))
            (p2dwg-raise "A verified process-line entity could not be assigned to f_Pipe_Pri."))
          (entupd entity)
          (setq verified (entget entity)
                geometry-after (${a}-primary-pipe-geometry-data verified)
                entity-type (strcase (if (assoc 0 verified) (cdr (assoc 0 verified)) "")))
          (if (and
                (= (strcase (cdr (assoc 8 verified))) (strcase target-layer))
                (= (if (assoc 62 verified) (cdr (assoc 62 verified)) 256) 256)
                (= (strcase (if (assoc 6 verified) (cdr (assoc 6 verified)) "")) "BYLAYER")
                (= (if (assoc 370 verified) (cdr (assoc 370 verified)) -1) -1)
                (member entity-type '("LINE" "LWPOLYLINE" "POLYLINE" "ARC"))
                (equal geometry-before geometry-after 1e-8))
            (setq mapped (1+ mapped))
            (p2dwg-raise "Primary pipe mapping changed geometry or failed its ByLayer verification."))
        )
        (setq skipped (1+ skipped)))
    )
    (setq index (1+ index)))
  (if (> mapped 0)
    (${a}-batch-log
      (strcat "PRIMARY_PIPE_MAPPING|STATUS=CONFIRMED|LAYER=" target-layer "|COLOR=${Dv}"
        "|CANDIDATES=" (itoa candidates) "|MAPPED=" (itoa mapped)
        "|NONLINEAR_SKIPPED=" (itoa skipped)
        "|IDENTITY=PROCESSLINE_LAYER_OR_EXACT_PDF_F_PIPE_PRI_SUFFIX"
        "|ENTITY_COLOR=BYLAYER|LINETYPE=BYLAYER|TARGET_LINETYPE=CONTINUOUS"
        "|LINEWEIGHT=BYLAYER|GEOMETRY=UNCHANGED"))
    (${a}-batch-log
      (strcat "PRIMARY_PIPE_MAPPING|STATUS=NO_MATCH|LAYER=" target-layer
        "|CANDIDATES=0|REASON=NO_EXPLICIT_PROCESSLINE_SOURCE_LAYER"
        "|GENERIC_PDF_GEOMETRY_LEFT_VISIBLE")))
  mapped
)

(defun ${a}-verify-primary-pipe-continuous
       (selection / target spec candidate index entity data source-layer layer-data updated
                    geometry-before verified mapped unresolved)
  (setq target "${_p}" spec nil mapped 0 unresolved 0 index 0)
  (if (/= (strcase (if *p2dwg-scale-status* *p2dwg-scale-status* "")) "VERIFIED")
    (p2dwg-raise "Primary pipe continuity verification requires SCALE_VERIFIED."))
  (foreach candidate *p2dwg-approved-layers*
    (if (= (strcase (car candidate)) (strcase target)) (setq spec candidate)))
  (if (or (null spec)
          (not (${a}-set-layer-standard target (nth 1 spec) (nth 2 spec) "CONTINUOUS")))
    (p2dwg-raise "The approved primary pipe layer could not be set to Continuous. Final page save was blocked."))
  (setq layer-data (tblsearch "LAYER" target))
  (if (/= (strcase (cdr (assoc 6 layer-data))) "CONTINUOUS")
    (p2dwg-raise "Primary pipe layer still has a non-continuous linetype. Final page save was blocked."))
  (while (< index (sslength selection))
    (setq entity (ssname selection index) data (entget entity)
      source-layer (if (assoc 8 data) (cdr (assoc 8 data)) ""))
    (if (${a}-primary-pipe-linear-entity-p data)
      (cond
        ((= (strcase source-layer) (strcase target))
          (setq geometry-before (${a}-primary-pipe-geometry-data data)
            updated (vl-remove-if '(lambda (pair) (member (car pair) '(420 430))) data)
            updated (${a}-put-group 62 256 updated)
            updated (${a}-put-group 6 "BYLAYER" updated)
            updated (${a}-put-group 370 -1 updated))
          (if (not (entmod updated))
            (p2dwg-raise "A primary pipe entity retained an explicit PDF appearance override. Final page save was blocked."))
          (entupd entity)
          (setq verified (entget entity))
          (if (not (and (= (strcase (cdr (assoc 8 verified))) (strcase target))
                        (= (cdr (assoc 62 verified)) 256)
                        (= (strcase (cdr (assoc 6 verified))) "BYLAYER")
                        (= (cdr (assoc 370 verified)) -1)
                        (not (assoc 420 verified)) (not (assoc 430 verified))
                        (equal geometry-before (${a}-primary-pipe-geometry-data verified) 1e-8)))
            (p2dwg-raise "Primary pipe effective appearance or geometry verification failed. Final page save was blocked."))
          (setq mapped (1+ mapped)))
        ((or (${a}-primary-process-pipe-source-layer-p source-layer)
             (${a}-primary-pipe-exact-source-layer-p source-layer))
          (setq unresolved (1+ unresolved)))))
    (setq index (1+ index)))
  (if (> unresolved 0)
    (p2dwg-raise (strcat "Known process piping remained on its PDF source layer: "
      (itoa unresolved) " entity(s). Final page save was blocked.")))
  (if (> mapped 0)
    (${a}-batch-log (strcat "PRIMARY_PIPE_CONTINUITY_VERIFIED|LAYER=" target
      "|ENTITIES=" (itoa mapped) "|TARGET_LINETYPE=CONTINUOUS"
      "|ENTITY_LINETYPE=BYLAYER|PDF_IMPORT_OVERRIDES=0|GEOMETRY=UNCHANGED"))
    (${a}-batch-log
      "PRIMARY_PIPE_CONTINUITY_NO_MATCH|RECOGNIZED_ENTITIES=0|GENERIC_SOURCE_REMAINS_FOR_REVIEW"))
  T
)

(defun ${a}-pdf-layer-sources (selection / index entity data name result)
  (setq index 0 result nil)
  (while (< index (sslength selection))
    (setq entity (ssname selection index)
          data (entget entity)
          name (if (assoc 8 data) (cdr (assoc 8 data)) ""))
    (if (and (${a}-pdf-source-layer-p name)
             (not (member (strcase name) (mapcar 'strcase result))))
      (setq result (cons name result)))
    (setq index (1+ index)))
  (reverse result)
)

(defun ${a}-make-imported-hatches-transparent (selection / index entity data updated changed)
  (setq index 0 changed 0)
  (while (< index (sslength selection))
    (setq entity (ssname selection index)
          data (entget entity))
    (if (= (strcase (if (assoc 0 data) (cdr (assoc 0 data)) "")) "HATCH")
      (progn
        ; PDFIMPORT may represent opaque masks as solid HATCHes. Keep the
        ; imported entity and its layer/color; change only its fill visibility.
        (setq updated (${a}-put-group 440 33554432 data))
        (if (not (entmod updated))
          (p2dwg-raise "Could not make a PDF-imported HATCH fill transparent."))
        (entupd entity)
        (setq changed (1+ changed))))
    (setq index (1+ index)))
  (${a}-batch-log
    (strcat "PDF_IMPORTED_HATCHES_TRANSPARENT|COUNT=" (itoa changed)))
  changed
)

(defun ${a}-normalize-pdf-import-layers (selection / sources source)
  (${a}-make-imported-hatches-transparent selection)
  (setq sources (${a}-pdf-layer-sources selection))
  (foreach source sources
    (${a}-batch-log
      (strcat "PDF_SOURCE_LAYER_PRESERVED|" source "|" source
        "|MODE=UNCHANGED_UNTIL_GEOMETRY_MATCH|LAYER_COLOR=UNCHANGED")))
  (${a}-batch-log
    (strcat "PDF_LAYER_NORMALIZATION_SKIPPED|COUNT=" (itoa (length sources))
      "|REASON=SOURCE_LAYER_IS_NOT_SYMBOL_IDENTITY"))
  (prompt
    (strcat "\\nPDF source layers and colors preserved: "
      (itoa (length sources))
      " PDF-prefixed layer(s); symbol mapping still requires a geometry match."))
  T
)
${d2(a)}
`}const Vy=25.4/72,g2=1e-6,m2=1e3,cn={width:841,height:594};function y2(a,r){if(!Number.isFinite(a.width)||!Number.isFinite(a.height)||a.width<1||a.height<1||a.width>1e5||a.height>1e5)return null;const s=a.width*Vy,o=a.height*Vy,l=cn.width/(a.width/72),u=cn.height/(a.height/72),m=Math.min(l,u);return!Number.isFinite(m)||m<g2||m>m2?null:{scaleFactor:m,method:"FIXED_SHEET_SIZE",pageWidthMm:s,pageHeightMm:o,targetWidthMm:cn.width,targetHeightMm:cn.height}}function b2(a,r){const s=(p,b=0,v=0)=>({valid:!1,reason:p,outputWidthMm:b,outputHeightMm:v});if(!Number.isFinite(r.scaleFactor)||r.scaleFactor<=0)return s("INVALID_SCALE_FACTOR");const o=a.width/72*r.scaleFactor,l=a.height/72*r.scaleFactor;if(!Number.isFinite(o)||!Number.isFinite(l)||o<=0||l<=0)return s("INVALID_SCALED_PAGE_EXTENTS",o,l);const u=cn.width,m=cn.height,f=.005;if(o>u*(1+f)||l>m*(1+f))return s("SCALED_PAGE_EXCEEDS_FIXED_SHEET",o,l);const g=Math.abs(o-u)/u<=f,y=Math.abs(l-m)/m<=f;return!g&&!y?s("SCALED_PAGE_DOES_NOT_REACH_SHEET_EDGE",o,l):r.targetWidthMm!==u||r.targetHeightMm!==m?s("PLAN_TARGET_DOES_NOT_MATCH_FIXED_SHEET",o,l):{valid:!0,reason:"FIXED_SHEET_FIT_VERIFIED",outputWidthMm:o,outputHeightMm:l}}const v2=["RAW","CANDIDATE","MATCHED","CONFIRMED","UNMATCHED","NEEDS_REVIEW"];function E2(a){return`
(defun ${a}-supported-geometry-type-p (entity-type)
  (member entity-type '("LINE" "ARC" "CIRCLE" "LWPOLYLINE" "POLYLINE" "ELLIPSE" "SPLINE"))
)

(defun ${a}-polyline-vertex-data (entity / vertex data result)
  (setq vertex (entnext entity) result nil)
  (while (and vertex (setq data (entget vertex))
              (/= (strcase (cdr (assoc 0 data))) "SEQEND"))
    (if (= (strcase (cdr (assoc 0 data))) "VERTEX")
      (setq result
        (append result
          (list
            (${a}-geometry-properties data)
          )
        )
      )
    )
    (setq vertex (entnext vertex))
  )
  result
)

(defun ${a}-source-selection-p (selection imported / index entity data valid)
  (setq index 0 valid T)
  (while (and valid (< index (sslength selection)))
    (setq entity (ssname selection index) data (entget entity))
    (if (or (null data) (not (ssmemb entity imported))
            (/= 0 (logand 4 (cdr (assoc 70 (tblsearch "LAYER" (cdr (assoc 8 data))))))))
      (setq valid nil))
    (setq index (1+ index)))
  valid)

(defun ${a}-geometry-value-p (value / valid component)
  (cond
    ((numberp value) T)
    ((and (listp value) value)
      (progn
        (setq valid T)
        (foreach component value
          (if (not (numberp component)) (setq valid nil)))
        valid))
    (T nil))
)

(defun ${a}-geometry-properties (data / result pair)
  (setq result nil)
  (foreach pair data
    (if (and
          (member (car pair) '(10 11 12 13 30 31 39 40 41 42 43 44 45 46 47 48 49
                               50 51 70 71 72 73 74 90 91 92 93 94 95 96 97 98 99
                               210 220 230))
          (${a}-geometry-value-p (cdr pair)))
      (setq result (append result (list pair))))
  )
  result
)

(defun ${a}-normalized-geometry (entity data bounds / entity-type properties)
  (setq entity-type (strcase (cdr (assoc 0 data))))
  (setq properties (${a}-geometry-properties data))
  (list
    (cons "schema" "CAD_GEOMETRY_V1")
    (cons "handle" (cdr (assoc 5 data)))
    (cons "type" entity-type)
    (cons "bounds" bounds)
    (cons "properties" properties)
    (cons "closed"
      (if (member entity-type '("LWPOLYLINE" "POLYLINE"))
        (= 1 (logand 1 (if (assoc 70 data) (cdr (assoc 70 data)) 0)))
        (= entity-type "CIRCLE")))
    (cons "polylineVertices"
      (if (= entity-type "POLYLINE")
        (${a}-polyline-vertex-data entity)
        nil))
  )
)

(defun ${a}-geometry-span (bounds)
  (if bounds
    (max (- (nth 2 bounds) (nth 0 bounds))
         (- (nth 3 bounds) (nth 1 bounds)))
    0.0)
)

(defun ${a}-geometry-box-gap (left right / dx dy)
  (setq dx (max 0.0 (- (nth 0 right) (nth 2 left)) (- (nth 0 left) (nth 2 right))))
  (setq dy (max 0.0 (- (nth 1 right) (nth 3 left)) (- (nth 1 left) (nth 3 right))))
  (sqrt (+ (* dx dx) (* dy dy)))
)

(defun ${a}-record-carrier-p (record seed-span page-span / entity-type span)
  (setq entity-type (nth 2 record))
  (setq span (${a}-geometry-span (nth 3 record)))
  (and
    (member entity-type '("LINE" "LWPOLYLINE" "POLYLINE"))
    (> span (max (* seed-span 2.5) (* page-span 0.025)))
  )
)

(defun ${a}-union-record-bounds (records / record bounds result)
  (setq result nil)
  (foreach record records
    (setq bounds (nth 3 record))
    (if bounds
      (if result
        (setq result
          (list
            (min (nth 0 result) (nth 0 bounds))
            (min (nth 1 result) (nth 1 bounds))
            (max (nth 2 result) (nth 2 bounds))
            (max (nth 3 result) (nth 3 bounds))
          )
        )
        (setq result bounds)
      )
    )
  )
  result
)

(defun ${a}-record-cloud-points (record / entity-type properties start-angle end-angle sweep steps
                                      index angle center radius vertices pair closed result major ratio
                                      vertex-list vertex-data bulge invalid)
  (setq entity-type (nth 2 record) properties (nth 4 record))
  (cond
    ((= entity-type "LINE")
      (if (and (assoc 10 properties) (assoc 11 properties))
        (list (cdr (assoc 10 properties)) (cdr (assoc 11 properties))) nil))
    ((member entity-type '("CIRCLE" "ARC"))
      (setq center (cdr (assoc 10 properties)) radius (cdr (assoc 40 properties)))
      (if (and center (numberp radius) (> radius 0.0))
        (progn
          (setq start-angle
            (if (= entity-type "ARC")
              (* pi (/ (if (assoc 50 properties) (cdr (assoc 50 properties)) 0.0) 180.0)) 0.0))
          (setq end-angle
            (if (= entity-type "ARC")
              (* pi (/ (if (assoc 51 properties) (cdr (assoc 51 properties)) 360.0) 180.0))
              (* pi 2.0)))
          (setq sweep (- end-angle start-angle))
          (while (<= sweep 0.0) (setq sweep (+ sweep (* pi 2.0))))
          (setq steps (max 12 (min 48 (fix (+ 0.5 (/ sweep (/ pi 12.0)))))))
          (setq index 0 result nil)
          (while (<= index steps)
            (setq angle (+ start-angle (* sweep (/ (float index) steps))))
            (setq result
              (cons
                (list (+ (car center) (* radius (cos angle)))
                      (+ (cadr center) (* radius (sin angle))))
                result))
            (setq index (1+ index)))
          (reverse result))
        nil))
    ((= entity-type "ELLIPSE")
      (setq center (cdr (assoc 10 properties))
            major (cdr (assoc 11 properties))
            ratio (cdr (assoc 40 properties)))
      (if (and center major (numberp ratio) (> ratio 0.0))
        (progn
          (setq start-angle (if (assoc 41 properties) (cdr (assoc 41 properties)) 0.0)
                end-angle (if (assoc 42 properties) (cdr (assoc 42 properties)) (* pi 2.0))
                sweep (- end-angle start-angle))
          (while (<= sweep 0.0) (setq sweep (+ sweep (* pi 2.0))))
          (setq steps (max 12 (min 48 (fix (+ 0.5 (/ sweep (/ pi 12.0))))))
                index 0 result nil)
          (while (<= index steps)
            (setq angle (+ start-angle (* sweep (/ (float index) steps))))
            (setq result
              (cons
                (list
                  (+ (car center) (* (car major) (cos angle))
                    (* -1.0 (cadr major) ratio (sin angle)))
                  (+ (cadr center) (* (cadr major) (cos angle))
                    (* (car major) ratio (sin angle))))
                result))
            (setq index (1+ index)))
          (reverse result))
        nil))
    ((= entity-type "LWPOLYLINE")
      (if (vl-some
            '(lambda (entry)
              (and (= (car entry) 42) (numberp (cdr entry))
                   (> (abs (cdr entry)) 0.000001)))
            properties)
        nil
        (progn
          (setq vertices nil)
          (foreach pair properties
            (if (= (car pair) 10)
              (if (and (listp (cdr pair)) (>= (length (cdr pair)) 2))
                (setq vertices
                  (append vertices
                    (list (list (cadr pair) (caddr pair)))))))
          (setq closed
            (= 1 (logand 1
              (if (assoc 70 properties) (cdr (assoc 70 properties)) 0))))
          (if (and closed vertices)
            (setq vertices (append vertices (list (car vertices)))))
          (if (>= (length vertices) 2) vertices nil)))))
    ((= entity-type "POLYLINE")
      (setq vertex-list (cdr (assoc "polylineVertices" (nth 5 record)))
            vertices nil invalid nil)
      (foreach vertex-data vertex-list
        (setq bulge (cdr (assoc 42 vertex-data)))
        (if (and (numberp bulge) (> (abs bulge) 0.000001))
          (setq invalid T))
        (setq pair (cdr (assoc 10 vertex-data)))
        (if (and pair (listp pair) (>= (length pair) 2))
          (setq vertices (append vertices (list (list (car pair) (cadr pair))))))
      )
      (setq closed
        (= 1 (logand 1
          (if (assoc 70 properties) (cdr (assoc 70 properties)) 0))))
      (if (and closed vertices)
        (setq vertices (append vertices (list (car vertices)))))
      (if (and (not invalid) (>= (length vertices) 2)) vertices nil))
    (T nil))
)

(defun ${a}-candidate-cloud-points (records / record points result valid)
  (setq result nil valid T)
  (foreach record records
    (setq points (${a}-record-cloud-points record))
    (if (or (null points) (< (length points) 2))
      (setq valid nil)
      (setq result (append result points))))
  (if (and valid (>= (length result) 2)) result nil)
)

(defun ${a}-normalize-cloud (points / sampled total index point center-x center-y
                                         sum-square rms normalized target-index)
  (if (not (listp points))
    nil
    (progn
      (setq sampled points)
      (if (> (length sampled) 24)
        (progn
          (setq total (length sampled) sampled nil index 0)
          (while (< index 24)
            (setq target-index (fix (/ (* index (1- total)) 23.0)))
            (setq sampled (append sampled (list (nth target-index points))))
            (setq index (1+ index))))
      )
      (if (< (length sampled) 2)
        nil
        (progn
          (setq center-x 0.0 center-y 0.0)
          (foreach point sampled
            (setq center-x (+ center-x (car point)))
            (setq center-y (+ center-y (cadr point))))
          (setq center-x (/ center-x (length sampled)))
          (setq center-y (/ center-y (length sampled)))
          (setq sum-square 0.0)
          (foreach point sampled
            (setq sum-square
              (+ sum-square
                (expt (- (car point) center-x) 2.0)
                (expt (- (cadr point) center-y) 2.0))))
          (setq rms (sqrt (/ sum-square (length sampled))))
          (if (<= rms 0.000000001)
            nil
            (progn
              (setq normalized nil)
              (foreach point sampled
                (setq normalized
                  (cons
                    (list (/ (- (car point) center-x) rms)
                          (/ (- (cadr point) center-y) rms))
                    normalized)))
              (reverse normalized)))))
    )
  )
)

(defun ${a}-rotate-cloud (points degrees / radians cosine sine point result)
  (setq radians (* pi (/ degrees 180.0)) cosine (cos radians) sine (sin radians) result nil)
  (foreach point points
    (setq result
      (cons
        (list (- (* cosine (car point)) (* sine (cadr point)))
              (+ (* sine (car point)) (* cosine (cadr point))))
        result)))
  (reverse result)
)

(defun ${a}-nearest-mse (from to / point other best distance-value sum)
  (setq sum 0.0)
  (foreach point from
    (setq best nil)
    (foreach other to
      (setq distance-value
        (+ (expt (- (car point) (car other)) 2.0)
           (expt (- (cadr point) (cadr other)) 2.0)))
      (if (or (null best) (< distance-value best))
        (setq best distance-value)))
    (setq sum (+ sum (if best best 0.0))))
  (/ sum (max 1 (length from)))
)

(defun ${a}-cloud-residual (source reference / degrees rotated residual best best-degrees
                                 fine-degree fine-end)
  (setq degrees 0 best nil best-degrees 0)
  (while (< degrees 360)
    (setq rotated (${a}-rotate-cloud reference degrees))
    (setq residual
      (sqrt
        (/ (+ (${a}-nearest-mse source rotated)
              (${a}-nearest-mse rotated source))
           2.0)))
    (if (or (null best) (< residual best))
      (setq best residual best-degrees degrees))
    (setq degrees (+ degrees 15)))
  (setq fine-degree (- best-degrees 8) fine-end (+ best-degrees 8))
  (while (<= fine-degree fine-end)
    (setq rotated (${a}-rotate-cloud reference fine-degree))
    (setq residual
      (sqrt
        (/ (+ (${a}-nearest-mse source rotated)
              (${a}-nearest-mse rotated source))
           2.0)))
    (if (or (null best) (< residual best))
      (setq best residual best-degrees fine-degree))
    (setq fine-degree (+ fine-degree 2)))
  (list best best-degrees)
)

(defun ${a}-candidate-classes (records / record type paths curves)
  (setq paths 0 curves 0)
  (foreach record records
    (setq type (nth 2 record))
    (if (member type '("LINE" "LWPOLYLINE" "POLYLINE" "SPLINE"))
      (setq paths (1+ paths))
      (if (member type '("ARC" "CIRCLE" "ELLIPSE"))
        (setq curves (1+ curves))))
  )
  (list paths curves)
)

(defun ${a}-class-similarity (left right / left-path left-curve right-path right-curve
                                   overlap union)
  ; Compare normalized primitive composition as well as the point cloud.
  ; This is invariant to PDF layer names, colors, and drawing scale.
  (setq left-path (max 0 (car left))
        left-curve (max 0 (cadr left))
        right-path (max 0 (car right))
        right-curve (max 0 (cadr right))
        overlap (+ (min left-path right-path) (min left-curve right-curve))
        union (+ (max left-path right-path) (max left-curve right-curve)))
  (if (> union 0) (/ overlap union) 0.0)
)

(defun ${a}-aspect-similarity (candidate-bounds block-aspect / width height ratio)
  (setq width (- (nth 2 candidate-bounds) (nth 0 candidate-bounds))
        height (- (nth 3 candidate-bounds) (nth 1 candidate-bounds)))
  (if (or (<= width 0.000001) (<= height 0.000001) (not (numberp block-aspect))
          (<= block-aspect 0.0))
    0.0
    (progn
      (setq ratio (max (/ width height) (/ height width)))
      (/ (min ratio block-aspect) (max ratio block-aspect))))
)

(defun ${a}-rank-auto-symbols (records bounds source-cloud /
                                    symbol block-cloud classes residual score aspect
                                    ranked symbol-classes block-aspect class-score)
  (setq ranked nil classes (${a}-candidate-classes records))
  (foreach symbol *p2dwg-approved-symbols*
    (setq block-cloud (nth 7 symbol)
          symbol-classes (nth 8 symbol)
          block-aspect (nth 9 symbol)
          aspect (${a}-aspect-similarity bounds block-aspect))
    (setq class-score
      (if symbol-classes
        (${a}-class-similarity classes
          (list (cdr (assoc "PATH" symbol-classes))
                (cdr (assoc "CURVE" symbol-classes))))
        0.0))
    (if (and (listp block-cloud) (>= (length block-cloud) 2)
             symbol-classes (numberp block-aspect)
             (>= aspect 0.90)
             (tblsearch "LAYER" (nth 3 symbol)))
      (progn
        (setq residual (${a}-cloud-residual source-cloud block-cloud))
        (setq score
          (+ (* 0.90 (exp (* -2.5 (car residual))))
             (* 0.04 class-score)
             (* 0.06 aspect)))
        (setq ranked
          (cons (list score (cadr residual) (car residual) symbol) ranked))))
  )
  (vl-sort ranked '(lambda (left right) (> (car left) (car right))))
)

(defun ${a}-oriented-bounds-size (bounds rotation-degrees / center-x center-y angle
                                       corners point dx dy x y min-x min-y max-x max-y)
  (setq center-x (/ (+ (nth 0 bounds) (nth 2 bounds)) 2.0)
        center-y (/ (+ (nth 1 bounds) (nth 3 bounds)) 2.0)
        angle (* -1.0 pi (/ rotation-degrees 180.0))
        corners
          (list (list (nth 0 bounds) (nth 1 bounds))
                (list (nth 0 bounds) (nth 3 bounds))
                (list (nth 2 bounds) (nth 1 bounds))
                (list (nth 2 bounds) (nth 3 bounds)))
        min-x nil min-y nil max-x nil max-y nil)
  (foreach point corners
    (setq dx (- (car point) center-x)
          dy (- (cadr point) center-y)
          x (+ center-x (- (* dx (cos angle)) (* dy (sin angle))))
          y (+ center-y (+ (* dx (sin angle)) (* dy (cos angle)))))
    (if (null min-x)
      (setq min-x x max-x x min-y y max-y y)
      (setq min-x (min min-x x) max-x (max max-x x)
            min-y (min min-y y) max-y (max max-y y))))
  (list (- max-x min-x) (- max-y min-y))
)

(defun ${a}-approved-text-height-match (height / style expected)
  (setq style nil)
  (foreach expected *p2dwg-approved-text-styles*
    (if (and (null style)
             (numberp (cadr expected))
             (> (cadr expected) 0.000001)
             (<= (/ (abs (- height (cadr expected))) (cadr expected)) 0.05))
      (setq style (car expected)))
  )
  style
)

(defun ${a}-fixed-text-height-count (/ count style)
  (setq count 0)
  (foreach style *p2dwg-approved-text-styles*
    (if (and (numberp (cadr style)) (> (cadr style) 0.000001))
      (setq count (1+ count))))
  count
)

(defun ${a}-validate-imported-text-heights (imported / index entity data entity-type height
                                                          text-count matching-count matched-style)
  (setq index 0 text-count 0 matching-count 0)
  (while (< index (sslength imported))
    (setq entity (ssname imported index)
          data (entget entity)
          entity-type (strcase (if (assoc 0 data) (cdr (assoc 0 data)) "")))
    (if (member entity-type '("TEXT" "MTEXT" "ATTRIB" "ATTDEF"))
      (progn
        (setq height (if (assoc 40 data) (cdr (assoc 40 data)) 0.0))
        (if (and (numberp height) (> height 0.000001))
          (progn
            (setq text-count (1+ text-count)
                  matched-style (${a}-approved-text-height-match height))
            (if matched-style (setq matching-count (1+ matching-count))))))
    )
    (setq index (1+ index)))
  (list text-count matching-count)
)

(defun ${a}-validate-reference-sizes (imported / candidate records bounds source-cloud
                                             source-selection source-layers ranked best second
                                             score-gap symbol category expected-width expected-height
                                             oriented width height width-error height-error
                                             error-percent checked skipped text-results text-count
                                             text-matches fixed-text-count verified-references
                                             symbol-name instrument-reference valve-reference)
  ; Sheet size is the scale primary. Candidate identity is normalized and
  ; independent of source layer/color; known symbols and fixed text heights
  ; are independent checks before placement is released.
  (if (/= (strcase *p2dwg-scale-status*) "APPLIED")
    (p2dwg-raise
      "Block matching stopped because the fixed-sheet scale was not applied successfully."))
  (setq checked 0 skipped 0 verified-references 0)
  (foreach candidate *p2dwg-auto-candidates*
    (setq records (cadr candidate)
          bounds (caddr candidate)
          source-cloud (${a}-normalize-cloud (${a}-candidate-cloud-points records))
          source-selection (ssadd))
    (foreach record records
      (if (and (nth 0 record) (entget (nth 0 record)))
        (ssadd (nth 0 record) source-selection)))
    (setq source-layers
      (if (> (sslength source-selection) 0)
        (${a}-auto-selection-source-layers source-selection) nil))
    (setq ranked
      (if (and source-cloud bounds source-layers)
        (${a}-rank-auto-symbols records bounds source-cloud) nil))
    (setq best (car ranked) second (cadr ranked)
          symbol (if best (nth 3 best) nil)
          category (if symbol (strcase (car symbol)) "")
          symbol-name (if symbol (strcase (cadr symbol)) "")
          instrument-reference (wcmatch category "*INSTR*")
          valve-reference
            (or (wcmatch category "*VALVE*")
                (and (wcmatch category "*INLINE*")
                     (wcmatch symbol-name "*VALVE*,*VLV*"))))
    (if (and symbol
             (or instrument-reference valve-reference)
             (>= (car best) 0.85))
      (progn
        (setq score-gap (if second (- (car best) (car second)) 1.0))
        (if (and (>= (car best) 0.90) (<= (nth 2 best) 0.04)
                 (>= (${a}-aspect-similarity bounds (nth 9 symbol)) 0.90)
                 (>= score-gap 0.04))
          (progn
            (setq expected-width (if instrument-reference 12.0 6.0)
                  expected-height (if instrument-reference 12.0 3.0)
                  oriented (${a}-oriented-bounds-size bounds (cadr best))
                  width (max (car oriented) (cadr oriented))
                  height (min (car oriented) (cadr oriented))
                  width-error (/ (abs (- width expected-width)) expected-width)
                  height-error (/ (abs (- height expected-height)) expected-height)
                  error-percent (* 100.0 (max width-error height-error)))
            (${a}-batch-log
              (strcat "SCALE_REFERENCE_SIZE|CATEGORY=" category
                "|MEASURED_MM=" (rtos width 2 4) "x" (rtos height 2 4)
                "|EXPECTED_MM=" (rtos expected-width 2 4) "x" (rtos expected-height 2 4)
                "|ERROR_PERCENT=" (rtos error-percent 2 4)
                "|TOLERANCE_PERCENT=5.0"))
            (if (> error-percent 5.0)
              (progn
                (setq *p2dwg-scale-status* "FAILED")
                (${a}-batch-log
                  (strcat "SCALE_FAILED|" *p2dwg-source-alias* "|"
                    (itoa *p2dwg-source-page*) "|CATEGORY=" category
                    "|REASON=REFERENCE_SIZE_CONFLICTS_WITH_FIXED_SHEET"
                    "|MEASURED_MM=" (rtos width 2 4) "x" (rtos height 2 4)
                    "|EXPECTED_MM=" (rtos expected-width 2 4) "x" (rtos expected-height 2 4)
                    "|ERROR_PERCENT=" (rtos error-percent 2 4)))
                (p2dwg-raise
                  "A confidently matched instrument/valve conflicts with the fixed sheet scale. Block placement and DWG save were stopped."))
              (setq checked (1+ checked)
                    verified-references (1+ verified-references))))
          (progn
            (setq skipped (1+ skipped))
            (${a}-batch-log
              (strcat "SCALE_REFERENCE_CROSSCHECK_SKIPPED|CATEGORY=" category
                "|REASON=REFERENCE_MATCH_NOT_UNIQUE"
                "|SCORE=" (rtos (car best) 2 5)
                "|SCORE_GAP=" (rtos score-gap 2 5)))))
      )
    )
  )
  (setq text-results (${a}-validate-imported-text-heights imported)
        text-count (car text-results)
        text-matches (cadr text-results)
        fixed-text-count (${a}-fixed-text-height-count))
  (cond
    ((and (> text-count 0) (> fixed-text-count 0)
          (= text-matches 0))
      (setq *p2dwg-scale-status* "FAILED")
      (${a}-batch-log
        (strcat "SCALE_FAILED|" *p2dwg-source-alias* "|"
          (itoa *p2dwg-source-page*)
          "|REASON=APPROVED_TEXT_HEIGHT_REFERENCE_MISMATCH"
          "|TEXT_ENTITIES=" (itoa text-count)
          "|MATCHED_APPROVED_HEIGHTS=" (itoa text-matches)
          "|FIXED_APPROVED_HEIGHTS=" (itoa fixed-text-count)
          "|REQUIRED_MATCHES=1|TOLERANCE_PERCENT=5.0"))
      (p2dwg-raise
        "Scale verification failed: imported text heights conflict with the approved fixed-height standards. No block placement or page save was attempted."))
    ((and (> text-count 0) (> text-matches 0))
      (setq verified-references (+ verified-references text-matches))
      (${a}-batch-log
        (strcat "SCALE_TEXT_HEIGHT_CROSSCHECK|TEXT_ENTITIES=" (itoa text-count)
          "|MATCHED_APPROVED_HEIGHTS=" (itoa text-matches)
          "|TOLERANCE_PERCENT=5.0")))
    (T
      (${a}-batch-log
        (strcat "SCALE_TEXT_HEIGHT_CROSSCHECK_SKIPPED|TEXT_ENTITIES="
          (itoa text-count)
          "|REASON="
          (if (= fixed-text-count 0)
            "NO_APPROVED_TEXT_HEIGHT_STANDARDS"
            "NO_IMPORTED_TEXT")))))
  (if (= verified-references 0)
    (${a}-batch-log
      (strcat "SCALE_REFERENCE_VALIDATION_SKIPPED|" *p2dwg-source-alias* "|"
        (itoa *p2dwg-source-page*)
        "|REASON=NO_INDEPENDENT_REFERENCE_FOUND|TITLE_BLOCK_XREF_CHECK=PASS")))
  (${a}-batch-log
    (strcat "SCALE_REFERENCE_CROSSCHECK_SUMMARY|" *p2dwg-source-alias* "|"
      (itoa *p2dwg-source-page*) "|SHEET_PRIMARY=841x594|TITLE_BLOCK_XREF_VERIFIED=TRUE"
      "|VERIFIED=" (itoa checked) "|SKIPPED=" (itoa skipped)
      "|TEXT_ENTITIES=" (itoa text-count)
      "|APPROVED_TEXT_HEIGHT_MATCHES=" (itoa text-matches)
      "|TOLERANCE_PERCENT=5.0"))
  (setq *p2dwg-scale-status* "VERIFIED")
  (${a}-batch-log
    (strcat "SCALE_VERIFIED|" *p2dwg-source-alias* "|"
      (itoa *p2dwg-source-page*)
      "|METHOD=TITLE_BLOCK_XREF_FRAME_PRIMARY_WITH_OPTIONAL_REFERENCE_CHECKS"
      "|SHEET_PRIMARY=841x594"
      "|SYMBOL_REFERENCE_MATCHES=" (itoa checked)
      "|APPROVED_TEXT_HEIGHT_MATCHES=" (itoa text-matches)))
  T
)

(defun ${a}-handle-overlap-p (records used-handles)
  (vl-some
    '(lambda (record) (member (nth 1 record) used-handles))
    records)
)

(defun ${a}-auto-place-candidates (document imported / candidates candidate candidate-id records
                                        bounds source-cloud source-selection source-layers source-layer ranked
                                        best second score-gap symbol rotation center block-path block-reference
                                        item result record placed-count review-count used-handles handles output-layer)
  (setq placed-count 0 review-count 0 used-handles nil)
  (setq candidates
    (vl-sort *p2dwg-auto-candidates*
      '(lambda (left right) (> (length (cadr left)) (length (cadr right))))))
  (foreach candidate candidates
    (setq candidate-id (car candidate)
          records (cadr candidate)
          bounds (caddr candidate)
          source-cloud (${a}-normalize-cloud (${a}-candidate-cloud-points records))
          source-selection (ssadd)
          handles nil)
    (foreach record records
      (if (and (nth 0 record) (ssmemb (nth 0 record) imported))
        (progn
          (ssadd (nth 0 record) source-selection)
          (setq handles (cons (nth 1 record) handles))))
    )
    (setq source-layers
      (if (> (sslength source-selection) 0)
        (${a}-auto-selection-source-layers source-selection) nil))
    (setq source-layer
      (if source-layers source-layers nil))
    (setq ranked
      (if (and source-cloud bounds source-layer
               (not (${a}-handle-overlap-p records used-handles)))
        (${a}-rank-auto-symbols records bounds source-cloud) nil))
    (setq best (car ranked) second (cadr ranked))
    (setq score-gap (if (and best second) (- (car best) (car second)) 1.0))
    (if (and best
             (>= (car best) 0.90)
             (<= (nth 2 best) 0.04)
             (>= (${a}-aspect-similarity bounds (nth 9 (nth 3 best))) 0.90)
             (>= score-gap 0.04))
      (progn
        (setq symbol (nth 3 best)
              rotation (* pi (/ (cadr best) 180.0))
              center (${a}-bounds-center bounds)
              block-path (strcat *p2dwg-batch-directory* "\\\\" (nth 2 symbol))
              item (strcat "AUTO-" candidate-id)
              output-layer (nth 3 symbol))
        (if (and (findfile block-path) (> (sslength source-selection) 0))
          (setq block-reference
            (${a}-insert-approved-block document block-path center bounds rotation
              output-layer (cadr symbol) (nth 5 symbol) (nth 6 symbol)))
          (setq block-reference nil))
        (if block-reference
          (progn
            ; This is a provisional overlay. Source remains visible until EDE
            ; identity and text/attribute associations are independently checked.
            (setq result
              (vl-catch-all-apply
                'vl-cmdf (list "_.DRAWORDER" block-reference "" "_F")))
            (if (vl-catch-all-error-p result)
              (progn
                (vl-catch-all-apply 'vla-Delete
                  (list (vlax-ename->vla-object block-reference)))
                (setq block-reference nil))))
        )
        (if block-reference
          (if (not
                (${a}-archive-auto-matched-source
                  source-selection candidate-id (car symbol) block-reference
                  (nth 5 symbol) output-layer rotation))
            (progn
              (vl-catch-all-apply 'vla-Delete
                (list (vlax-ename->vla-object block-reference)))
              (setq block-reference nil)))
        )
        (if block-reference
          (progn
            (${a}-tag-page-entity block-reference)
            (${a}-tag-review-entity block-reference
              "CONFIRMED_GEOMETRY_BLOCK" item (car symbol) (cadr symbol))
            (${a}-record-mapping
              (ssadd block-reference) "CONFIRMED" item (nth 5 symbol))
            (setq used-handles (append used-handles (reverse handles)))
            (setq placed-count (1+ placed-count))
            (${a}-batch-log
              (strcat "AUTO_BLOCK_PLACED|source=" *p2dwg-source-alias*
                "|page=" (itoa *p2dwg-source-page*) "|candidate=" candidate-id
                "|blockAsset=" (nth 5 symbol) "|block=" (cadr symbol)
                "|targetLayer=" output-layer "|score=" (rtos (car best) 2 5)
                "|rotationDegrees=" (itoa (cadr best))
                "|sourceHandles=" (vl-princ-to-string (reverse handles))
                "|status=CONFIRMED_GEOMETRY_MATCH|source=PDF_DONE"
                "|ATTRIBUTES=PENDING_EDE"))
          )
          (progn
            (setq review-count (1+ review-count))
            (${a}-batch-log
              (strcat "AUTO_BLOCK_NEEDS_REVIEW|candidate=" candidate-id
                "|reason=INSERT_OR_ARCHIVE_VALIDATION_FAILED|source=VISIBLE")))
        )
      )
      (progn
        (setq review-count (1+ review-count))
        (${a}-batch-log
          (strcat "AUTO_BLOCK_NEEDS_REVIEW|candidate=" candidate-id
            "|reason="
            (cond
              ((null source-layer) "SOURCE_ENTITIES_NOT_ON_PDF_IMPORT_LAYERS")
              ((null source-cloud) "UNSUPPORTED_OR_INCOMPLETE_GEOMETRY")
              ((null best) "NO_UNIQUE_HIGH_CONFIDENCE_LIBRARY_MATCH")
              (T "CONFIDENCE_OR_MATCH_GAP_TOO_LOW"))
            "|bestScore=" (if best (rtos (car best) 2 5) "NONE")
            "|secondScore=" (if second (rtos (car second) 2 5) "NONE")
            "|scoreGap=" (if best (rtos score-gap 2 5) "NONE")
            "|cloudResidual=" (if best (rtos (nth 2 best) 2 5) "NONE")
            "|aspectSimilarity="
              (if best
                (rtos (${a}-aspect-similarity bounds (nth 9 (nth 3 best))) 2 5)
                "NONE")
            "|source=VISIBLE"))
      )
    )
  )
  (list placed-count review-count)
)

(defun ${a}-record-handles (records / result record)
  (setq result nil)
  (foreach record records (setq result (cons (nth 1 record) result)))
  (vl-sort result '<)
)

(defun ${a}-candidate-groups (records page-bounds log-handle /
                                    page-span page-width page-height seed seed-type
                                    seed-bounds seed-span radius compact closed-seed
                                    members stubs record signature signatures
                                    member-handles stub-handles group-bounds anchor
                                    type-counts type-name candidate-index candidate-id
                                    record-type)
  (if (not page-bounds)
    0
    (progn
      (setq page-span (${a}-geometry-span page-bounds))
      (setq page-width (- (nth 2 page-bounds) (nth 0 page-bounds)))
      (setq page-height (- (nth 3 page-bounds) (nth 1 page-bounds)))
      (setq signatures nil candidate-index 0)
      (foreach seed records
        (setq seed-type (nth 2 seed))
        (setq seed-bounds (nth 3 seed))
        (setq seed-span (${a}-geometry-span seed-bounds))
        (setq compact (<= seed-span (* page-span 0.06)))
        (setq closed-seed
          (or
            (member seed-type '("ARC" "CIRCLE"))
            (and (member seed-type '("LWPOLYLINE" "POLYLINE"))
                 (= 1 (logand 1 (if (assoc 70 (nth 4 seed))
                                    (cdr (assoc 70 (nth 4 seed))) 0))))
          )
        )
        (if (or closed-seed compact)
          (progn
            (setq radius (max 0.5 (min 10.0 (* (max seed-span 1.0) 0.20))))
            (setq members nil stubs nil)
            (foreach record records
              (if (<= (${a}-geometry-box-gap seed-bounds (nth 3 record)) radius)
                (if (${a}-record-carrier-p record seed-span page-span)
                  (setq stubs (cons record stubs))
                  (setq members (cons record members))
                )
              )
            )
            (setq member-handles (${a}-record-handles members))
            (setq stub-handles (${a}-record-handles stubs))
            (setq signature (vl-princ-to-string member-handles))
            (setq group-bounds (${a}-union-record-bounds members))
            (if (and
                  members
                  (or closed-seed (>= (length members) 2))
                  group-bounds
                  (not (member signature signatures))
                  (not (and (> page-width 0.0) (> page-height 0.0)
                            (> (- (nth 2 group-bounds) (nth 0 group-bounds)) (* page-width 0.60))
                            (> (- (nth 3 group-bounds) (nth 1 group-bounds)) (* page-height 0.60))))
                )
              (progn
                (setq candidate-index (1+ candidate-index))
                (setq candidate-id (strcat "C-" (if (< candidate-index 10) "000" (if (< candidate-index 100) "00" (if (< candidate-index 1000) "0" ""))) (itoa candidate-index)))
                (setq signatures (cons signature signatures))
                (setq *p2dwg-auto-candidates*
                  (cons (list candidate-id members group-bounds)
                    *p2dwg-auto-candidates*))
                (setq type-counts nil)
                (foreach record members
                  (setq record-type (nth 2 record))
                  (setq type-name (assoc record-type type-counts))
                  (if type-name
                    (setq type-counts
                      (subst (cons record-type (1+ (cdr type-name))) type-name type-counts))
                    (setq type-counts (cons (cons record-type 1) type-counts))
                  )
                )
                (setq anchor
                  (list
                    (/ (+ (nth 0 group-bounds) (nth 2 group-bounds)) 2.0)
                    (/ (+ (nth 1 group-bounds) (nth 3 group-bounds)) 2.0)
                  )
                )
                (write-line
                  (strcat
                    "CANDIDATE|" *p2dwg-source-alias* "|" (itoa *p2dwg-source-page*)
                    "|" candidate-id "|STATUS=REVIEW_REQUIRED"
                    "|SEED=" (nth 1 seed) ":" seed-type
                    "|SOURCE_HANDLES=" (vl-princ-to-string member-handles)
                    "|BOUNDS=" (vl-princ-to-string group-bounds)
                    "|ANCHOR=" (vl-princ-to-string anchor)
                    "|PRIMITIVE_COUNTS=" (vl-princ-to-string (reverse type-counts))
                    "|POSSIBLE_EXTERNAL_STUBS=" (vl-princ-to-string stub-handles)
                    "|METHOD=COMPACT_GEOMETRY_AND_CLOSED_FEATURES"
                  )
                  log-handle
                )
              )
            )
          )
        )
      )
      candidate-index
    )
  )
)

(defun ${a}-review-approved-blocks (imported / handle index entity data entity-type
                                                  bounds properties log-handle descriptor active-imported
                                                  geometry-records page-bounds candidate-count placement-result
                                                  auto-placed auto-review document)
  (setq active-imported (ssadd) index 0)
  (while (< index (sslength imported))
    (setq entity (ssname imported index))
    (setq data (entget entity))
    (if (and data (cdr (assoc 5 data)) (cdr (assoc 0 data)))
      (ssadd entity active-imported))
    (setq index (1+ index)))
  (${a}-batch-log
    (strcat "WHOLE_PAGE_GEOMETRY_SCAN_STARTED|" *p2dwg-source-alias* "|"
      (itoa *p2dwg-source-page*) "|ENTITIES=" (itoa (sslength active-imported))
      "|AUTO_MATCH=GEOMETRY_TOPOLOGY"))
  (if (not *p2dwg-geometry-scan-path*)
    (p2dwg-raise "Geometry scan output path is unavailable; page not saved."))
  (${a}-record-mapping active-imported "NEEDS_REVIEW" "AUTO-GEOMETRY-MATCH" nil)
  (setq log-handle (open *p2dwg-geometry-scan-path* "a"))
  (if (null log-handle)
    (p2dwg-raise "Cannot write AUTOCAD_GEOMETRY_SCAN.log. Choose a writable output folder."))
  (write-line
    (strcat "SCAN|" *p2dwg-source-alias* "|" (itoa *p2dwg-source-page*)
      "|ENTITIES=" (itoa (sslength active-imported))
      "|STATUS=CANDIDATES_REVIEW_REQUIRED|AUTO_MATCH=GEOMETRY_TOPOLOGY")
    log-handle)
  (setq index 0)
  (setq geometry-records nil)
  (setq page-bounds (${a}-selection-bounds active-imported))
  (while (< index (sslength active-imported))
    (setq entity (ssname active-imported index))
    (setq data (entget entity))
    (setq handle (cdr (assoc 5 data)))
    (setq entity-type (cdr (assoc 0 data)))
    (if (or (null handle) (null entity-type))
      (progn
        (close log-handle)
        (p2dwg-raise "An imported entity has no stable handle/type; page not saved.")))
    (setq bounds (${a}-selection-bounds (ssadd entity)))
    (setq properties (${a}-geometry-properties data))
    (setq descriptor (${a}-normalized-geometry entity data bounds))
    (if (and bounds (${a}-supported-geometry-type-p entity-type))
      (setq geometry-records
        (cons (list entity handle entity-type bounds properties descriptor) geometry-records)))
    ; Text contents, layers and color are excluded from normalized geometry and grouping.
    (write-line
      (strcat "ENTITY|" *p2dwg-source-alias* "|" (itoa *p2dwg-source-page*)
        "|" handle "|" entity-type "|NORMALIZED=" (vl-princ-to-string descriptor))
      log-handle)
    (setq index (1+ index)))
  (setq *p2dwg-auto-candidates* nil)
  (setq candidate-count
    (${a}-candidate-groups (reverse geometry-records) page-bounds log-handle))
  (close log-handle)
  (${a}-write-text-snapshot active-imported)
  (${a}-validate-reference-sizes active-imported)
  (setq document (vla-get-ActiveDocument (vlax-get-acad-object)))
  (setq placement-result
    (${a}-auto-place-candidates document active-imported))
  (setq auto-placed (car placement-result) auto-review (cadr placement-result))
  (prompt
    (strcat
      "\\nAutomatic geometry review: " (itoa auto-placed)
      " high-confidence approved Block Reference(s) confirmed; "
      (itoa auto-review)
      " ambiguous or unmatched candidate(s) remain visible for review."))
  (${a}-batch-log
    (strcat "WHOLE_PAGE_GEOMETRY_SCAN_COMPLETED|" *p2dwg-source-alias* "|"
      (itoa *p2dwg-source-page*) "|STATUS=CANDIDATES_REVIEW_REQUIRED|CANDIDATES="
      (itoa candidate-count) "|AUTO_MATCH=GEOMETRY_TOPOLOGY|AUTO_PLACED="
      (itoa auto-placed) "|NEEDS_REVIEW=" (itoa auto-review)))
  T)
`}function w2(a){return`
(defun ${a}-choose-text-record (/ options index entry choice)
  (setq options (vl-remove-if-not '(lambda (entry)
    (= (nth 3 entry) *p2dwg-source-page*)) *p2dwg-ede-records*) index 1)
  (foreach entry options
    (prompt (strcat "\\n  " (itoa index) ") " (nth 1 entry) " | " (car entry)))
    (setq index (1+ index)))
  (if options
    (progn
      (initget 6) (setq choice (getint "\\nChoose the EDE identity for this text (Enter keeps source): "))
      (if (and choice (<= choice (length options))) (nth (1- choice) options) nil))
    (progn (prompt "\\nNo page-specific EDE StableID. Text stays visible for review.") nil)))

(defun ${a}-review-one-text-worker (source style target-layer record role / final object candidate)
  (setq final nil *p2dwg-new-final-text* nil)
  (if (and (= role "Tag")
      (or (/= (${a}-text-content source) (nth 1 record))
          (${a}-duplicate-tag-p (${a}-text-content source) nil)))
    (p2dwg-raise "Tag does not match EDE or conflicts with an existing final tag."))
  (setq object (vla-Copy (vlax-ename->vla-object source))
    final (vlax-vla-object->ename object) *p2dwg-new-final-text* final)
  (${a}-tag-page-entity final)
  (setq candidate (strcat *p2dwg-source-alias* "#" (itoa *p2dwg-source-page*)
    ":" (cdr (assoc 5 (entget source)))))
  (if (not (and
      (${a}-font-text final style target-layer)
      (equal (${a}-text-geometry source) (${a}-text-geometry final) 0.00000001)
      (${a}-archive-text source final (car record) "LOOSE_TEXT" role candidate)))
    (p2dwg-raise "Loose text validation failed; original source remains visible."))
  (setq *p2dwg-new-final-text* nil)
  T)

(defun ${a}-review-one-text (source style target-layer record role / result)
  (setq *p2dwg-new-final-text* nil)
  (setq result (vl-catch-all-apply '${a}-review-one-text-worker
    (list source style target-layer record role)))
  (if (or (vl-catch-all-error-p result) (not result))
    (progn
      (if (and *p2dwg-new-final-text* (entget *p2dwg-new-final-text*))
        (entdel *p2dwg-new-final-text*))
      (setq *p2dwg-new-final-text* nil)
      (${a}-batch-log (strcat "NEEDS_REVIEW|LOOSE_TEXT|" (car record)))
      nil)
    T))

(defun ${a}-review-text (imported / style selection index entity role answer record target-layer count)
  (setq style (${a}-arial-style) target-layer *p2dwg-approved-text-layer-name* count 0)
  (if (or (null style) (null target-layer))
    (progn
      (${a}-batch-log "NEEDS_REVIEW|ARIAL_NARROW_TEXT_STYLE_OR_LAYER_UNRESOLVED|PDF_TEXT_REMAINS_VISIBLE")
      (prompt "\\nNEEDS_REVIEW: the approved Arial Narrow style and general text layer must both be resolved. No manual layer choice or guessed default was used."))
    (progn
      (${a}-prepare-source-layer-review)
      (prompt "\\nLoose PDF TEXT/MTEXT: select ONE text item to classify and confirm; Enter finishes.")
      (setq selection (ssget))
      (while selection
        (if (and (= (sslength selection) 1) (${a}-source-selection-p selection imported)
                 (member (cdr (assoc 0 (entget (ssname selection 0)))) '("TEXT" "MTEXT"))
                 (wcmatch (strcase (cdr (assoc 8 (entget (ssname selection 0))))) "PDF_*")
                 (not (wcmatch (strcase (cdr (assoc 8 (entget (ssname selection 0))))) "PDF_DONE_*")))
          (progn
            (setq entity (ssname selection 0))
            (initget "Note Tag Heading")
            (setq role (getkword "\\nClassify final text [Note/Tag/Heading] (Enter keeps source): "))
            (initget "Yes No")
            (setq answer (if role (getkword "\\nConfirm this text belongs in the final drawing? [Yes/No] <No>: ") nil))
            (if (= answer "Yes")
              (progn
                 (setq record (${a}-choose-text-record))
                (if (and record target-layer)
                  (if (${a}-review-one-text entity style target-layer record role) (setq count (1+ count)))))))
          (prompt "\\nSelect one live imported TEXT/MTEXT item, not a title block, archive or geometry."))
        (${a}-prepare-source-layer-review)
        (prompt "\\nSelect another loose PDF text item, or Enter to finish:")
        (setq selection (ssget)))
      (${a}-batch-log
        (strcat "TEXT_FINALIZED|COUNT=" (itoa count)
          "|STYLE=" style "|LAYER=" target-layer "|HEIGHT=PRESERVED"))))
  T)
`}function x2(a){return`
(defun ${a}-text-content (entity / data value pair)
  (setq data (entget entity) value "")
  (foreach pair data (if (= (car pair) 3) (setq value (strcat value (cdr pair)))))
  (strcat value (if (assoc 1 data) (cdr (assoc 1 data)) "")))

(defun ${a}-text-geometry (entity / data)
  (setq data (entget entity))
  (vl-remove-if-not '(lambda (pair)
    (member (car pair) '(0 2 10 11 40 41 44 45 46 50 51 70 71 72 73 74 210))) data))

(defun ${a}-text-state (entity)
  (list (mapcar '(lambda (pair) (list (car pair) (cdr pair))) (${a}-text-geometry entity))
    (${a}-text-content entity)
    (cdr (assoc 7 (entget entity))) (cdr (assoc 8 (entget entity)))))

(defun ${a}-serialize-text-state (value / output entry)
  ; The default printed REAL representation can round validation coordinates.
  (cond
    ((numberp value) (rtos value 2 16))
    ((null value) "nil")
    ((listp value)
      (setq output "(")
      (foreach entry value (setq output (strcat output (${a}-serialize-text-state entry) " ")))
      (strcat output ")"))
    (T (vl-prin1-to-string value))))

(defun ${a}-app-data (entity app / entry)
  (setq entry (assoc -3 (entget entity (list app))))
  (if entry (cadr entry) nil))

(defun ${a}-put-app (entity app payload)
  (and (or (tblsearch "APPID" app) (regapp app))
    (entmod (append (entget entity) (list (list -3 (cons app payload)))))
    (entupd entity) T))

(defun ${a}-text-restore (entity snapshot / app)
  (foreach app '("PIDTEXTLINK" "PIDATTRRULE" "PIDTEXTREOPEN" "PIDTEXTASSOC")
    (if (tblsearch "APPID" app)
      (entmod (append (entget entity) (list (list -3 (list app)))))))
  (and (entmod snapshot) (entupd entity) T))

(defun ${a}-list-tail (value count)
  (repeat count (setq value (cdr value)))
  value)

(defun ${a}-text-chunks (value / result)
  ; <=60 Unicode characters also fits DXF's 255-byte XData string limit.
  (setq result nil)
  (while (> (strlen value) 60)
    (setq result (append result (list (cons 1000 (substr value 1 60))))
      value (substr value 61)))
  (append result (list (cons 1000 value))))

(defun ${a}-font-only-content (value / index output char next end font-end options)
  ; Replace only MTEXT font controls. Keep H/W/Q, paragraphs, escapes and content.
  (setq index 1 output "")
  (while (<= index (strlen value))
    (setq char (substr value index 1) next (substr value (1+ index) 1))
    (cond
      ((and (= char "\\\\") (= next "\\\\"))
        (setq output (strcat output char next) index (+ index 2)))
      ((and (= char "\\\\") (member next '("f" "F")))
        (setq end (vl-string-search ";" value (+ index 1)))
        (if (null end) (p2dwg-raise "Malformed MTEXT font control; original text was retained."))
        (setq font-end (vl-string-search "|" value (+ index 1)) options "")
        (if (and font-end (< font-end end))
          (setq options (substr value (1+ font-end) (- end font-end))))
        (setq output (strcat output "\\\\fArial Narrow" options ";") index (+ end 2)))
      (T (setq output (strcat output char) index (1+ index)))))
  output)

(defun ${a}-arial-style-worker (/ styles style entry approved typeface bold italic charset pitch setFontResult)
  (if (null *p2dwg-approved-text-style-name*)
    (p2dwg-raise "No variable-height Arial Narrow style is available from Legends or the fixed global default."))
  (setq approved (vl-some
    '(lambda (candidate)
       (if (= (strcase (car candidate)) (strcase *p2dwg-approved-text-style-name*)) candidate))
    *p2dwg-approved-text-styles*))
  (if (null approved)
    (p2dwg-raise "The chosen Arial Narrow style is not present in the approved Legends text standards."))
  (setq entry (tblsearch "STYLE" *p2dwg-approved-text-style-name*))
  (if (null entry)
    (p2dwg-raise "The approved Arial Narrow style was not created in this drawing."))
  (setq styles (vla-get-TextStyles (vla-get-ActiveDocument (vlax-get-acad-object))))
  (setq style (vla-item styles *p2dwg-approved-text-style-name*))
  (setq setFontResult
    (vl-catch-all-apply 'vla-SetFont
      (list style "Arial Narrow" :vlax-false :vlax-false 0 0)))
  (if (vl-catch-all-error-p setFontResult)
    (p2dwg-raise (strcat "AutoCAD could not explicitly assign Arial Narrow to style "
      *p2dwg-approved-text-style-name* ": " (vl-catch-all-error-message setFontResult))))
  (vla-GetFont style 'typeface 'bold 'italic 'charset 'pitch)
  (setq entry (tblsearch "STYLE" *p2dwg-approved-text-style-name*))
  (if (or (/= (strcase typeface) "ARIAL NARROW")
          (= bold :vlax-true) (= italic :vlax-true)
          (/= (cdr (assoc 40 entry)) 0.0)
          (/= (cdr (assoc 41 entry)) (nth 2 approved))
          (/= (cdr (assoc 50 entry)) (nth 3 approved)))
    (p2dwg-raise (strcat "AutoCAD text-style verification failed for Arial Narrow: expected typeface Arial Narrow, "
      "variable height, width " (rtos (nth 2 approved) 2 6) " and oblique "
      (rtos (nth 3 approved) 2 6) "; received typeface " typeface
      ", height " (rtos (cdr (assoc 40 entry)) 2 6)
      ", width " (rtos (cdr (assoc 41 entry)) 2 6)
      " and oblique " (rtos (cdr (assoc 50 entry)) 2 6) ". Text remains in review.")))
  *p2dwg-approved-text-style-name*)

(defun ${a}-arial-style (/ result)
  (setq *p2dwg-failure-message* nil)
  (setq result (vl-catch-all-apply '${a}-arial-style-worker nil))
  (if (vl-catch-all-error-p result)
    (progn
      (setq result (if (and *p2dwg-failure-message* (/= *p2dwg-failure-message* ""))
        *p2dwg-failure-message* (vl-catch-all-error-message result)))
      (${a}-batch-log (strcat "NEEDS_REVIEW|ARIAL_NARROW_TEXT_STYLE|" result))
      (prompt (strcat "\\n" result)) nil)
    result))

(defun ${a}-font-text-worker (entity style target-layer / before data content parts kind object rich)
  (setq before (${a}-text-geometry entity) data (entget entity)
    kind (cdr (assoc 0 data)))
  (if (not (member kind '("TEXT" "MTEXT" "ATTRIB")))
    (p2dwg-raise "Only editable text and existing attribute references can be standardized."))
  (setq object (vlax-ename->vla-object entity))
  (if (and (= kind "ATTRIB") (vlax-property-available-p object 'MTextAttribute)
           (= (vla-get-MTextAttribute object) :vlax-true))
    (p2dwg-raise "Multiline block attribute requires instance-safe formatting review; no shared definition was changed."))
  (if target-layer
    (setq data (vl-remove-if '(lambda (pair) (member (car pair) '(420 430))) data)))
  (setq data (${a}-put-group 7 style data))
  (if target-layer
    (setq data (${a}-put-group 8 target-layer data)
      data (${a}-put-group 62 256 data)
      data (${a}-put-group 6 "BYLAYER" data)
      data (${a}-put-group 370 -1 data)))
  (if (= kind "MTEXT")
    (progn
      (setq content (${a}-font-only-content (${a}-text-content entity)) parts nil)
      (while (> (strlen content) 250)
        (setq parts (append parts (list (cons 3 (substr content 1 250)))) content (substr content 251)))
      (setq data (vl-remove-if '(lambda (pair) (member (car pair) '(1 3))) data)
        data (append data parts (list (cons 1 content))))))
  (if (not (and (entmod data) (entupd entity)
                (equal before (${a}-text-geometry entity) 0.00000001)
                (= (cdr (assoc 7 (entget entity))) style)
                (or (null target-layer)
                    (and (= (strcase (cdr (assoc 8 (entget entity)))) (strcase target-layer))
                         (= (cdr (assoc 62 (entget entity))) 256)
                         (= (strcase (cdr (assoc 6 (entget entity)))) "BYLAYER")
                         (= (cdr (assoc 370 (entget entity))) -1)))))
    (p2dwg-raise "Text geometry changed during font assignment. Original text will be restored."))
  T)

(defun ${a}-font-text (entity style target-layer / snapshot result)
  (setq snapshot (entget entity '("*")))
  (setq result (vl-catch-all-apply '${a}-font-text-worker (list entity style target-layer)))
  (if (or (vl-catch-all-error-p result) (not result))
    (progn
      (if (not (and (entmod snapshot) (entupd entity)))
        (p2dwg-raise "Text formatting rollback failed. No final page was saved."))
      (${a}-batch-log "NEEDS_REVIEW|TEXT_FONT_OR_GEOMETRY")
      nil)
    T))

(defun ${a}-narrow-font-p (font)
  (member (strcase (vl-filename-base font)) '("ARIALN" "ARIALNARROW")))

(defun ${a}-fixed-narrow-style-for-text (entity / height candidates candidate)
  (setq height (cdr (assoc 40 (entget entity))) candidates nil)
  (foreach candidate *p2dwg-approved-text-styles*
    (if (and (${a}-narrow-font-p (nth 4 candidate))
             (numberp height) (> (nth 1 candidate) 0.000001)
             (equal height (nth 1 candidate) 0.000001))
      (setq candidates (cons (car candidate) candidates))))
  ; Never guess a text role or snap its height. One exact approved height/style
  ; is usable; conflicting styles and other heights remain explicit review.
  (if (= (length candidates) 1) (car candidates) nil))

(defun ${a}-verify-narrow-style (name / approved style entry typeface bold italic charset pitch result)
  (setq approved (vl-some '(lambda (candidate) (if (= (car candidate) name) candidate))
    *p2dwg-approved-text-styles*))
  (if (null approved) (p2dwg-raise "An unapproved text style was selected."))
  (setq entry (tblsearch "STYLE" name)
    style (vla-item (vla-get-TextStyles (vla-get-ActiveDocument (vlax-get-acad-object))) name))
  (setq result (vl-catch-all-apply 'vla-SetFont
    (list style "Arial Narrow" :vlax-false :vlax-false 0 0)))
  (if (vl-catch-all-error-p result) (p2dwg-raise (strcat "Cannot assign Arial Narrow to " name)))
  (vla-GetFont style 'typeface 'bold 'italic 'charset 'pitch)
  (setq entry (tblsearch "STYLE" name))
  (if (not (and (= (strcase typeface) "ARIAL NARROW") (/= bold :vlax-true) (/= italic :vlax-true)
           (equal (cdr (assoc 40 entry)) (nth 1 approved) 1e-8)
           (equal (cdr (assoc 41 entry)) (nth 2 approved) 1e-8)
           (equal (cdr (assoc 50 entry)) (nth 3 approved) 1e-8)))
    (p2dwg-raise (strcat "Approved Arial Narrow text style verification failed: " name)))
  T)

(defun ${a}-standardize-imported-text (selection finalize / index entity kind snapshots style selected-style fixed-style verified-styles height-matched height-review failed rollback-failed count entry target-layer)
  ; Normalize every editable page TEXT/MTEXT/ATTRIB, including loose labels and
  ; block attributes. Before matching, preserve PDF source layers. After matching,
  ; only TEXT/MTEXT receive the approved general text layer and ByLayer properties.
  (setq index 0 snapshots nil count 0 failed nil rollback-failed nil
    verified-styles nil height-matched 0 height-review 0)
  (while (and selection (< index (sslength selection)))
    (setq entity (ssname selection index)
      kind (cdr (assoc 0 (entget entity))))
    (if (member kind '("TEXT" "MTEXT" "ATTRIB"))
      (setq snapshots (cons (cons entity (entget entity '("*"))) snapshots)))
    (setq index (1+ index)))
  (if snapshots
    (progn
      (setq style (${a}-arial-style))
      (if (null style)
        (p2dwg-raise
          (if (and *p2dwg-failure-message* (/= *p2dwg-failure-message* ""))
            *p2dwg-failure-message*
            "An approved Arial Narrow style is required for imported editable text; this page was not saved.")))
      (foreach entry (reverse snapshots)
        (setq kind (cdr (assoc 0 (entget (car entry))))
          target-layer (if (and finalize (member kind '("TEXT" "MTEXT")))
            *p2dwg-approved-text-layer-name* nil))
        (setq selected-style style)
        (if (and finalize (member kind '("TEXT" "MTEXT"))
                 (null (${a}-app-data (car entry) "PIDTEXTLINK")))
          (progn
            (setq fixed-style (${a}-fixed-narrow-style-for-text (car entry)))
            (if fixed-style
              (progn
                (if (not (member fixed-style verified-styles))
                  (progn (${a}-verify-narrow-style fixed-style)
                    (setq verified-styles (cons fixed-style verified-styles))))
                (setq selected-style fixed-style height-matched (1+ height-matched)))
              (setq height-review (1+ height-review)))))
        (if (${a}-font-text (car entry) selected-style target-layer)
          (setq count (1+ count))
          (setq failed (car entry))))
      (if failed
        (progn
          (foreach entry snapshots
            (if (not (${a}-text-restore (car entry) (cdr entry)))
              (setq rollback-failed T)))
          (if rollback-failed
            (p2dwg-raise "Arial Narrow batch rollback failed; the page was not saved."))
          (${a}-batch-log
            (strcat "FAILED: Arial Narrow text standardization rolled back|handle="
              (cdr (assoc 5 (entget failed)))))
          (p2dwg-raise "At least one imported text item could not be safely standardized; no page was saved."))
        (progn
          (if (and finalize (null *p2dwg-approved-text-layer-name*))
            (${a}-batch-log "NEEDS_REVIEW|LEGENDS_TEXT_LAYER_MISSING|PDF_TEXT_LAYERS_PRESERVED"))
          (${a}-batch-log
            (strcat "TEXT_STANDARDIZED|COUNT=" (itoa count)
              "|STYLE=" style "|FONT=Arial Narrow|"
              (if finalize
                (if *p2dwg-approved-text-layer-name*
                  (strcat "FINAL_LAYER=" *p2dwg-approved-text-layer-name* "|COLOR=BYLAYER|LINETYPE=BYLAYER|LINEWEIGHT=BYLAYER")
                  "FINAL_LAYER=UNRESOLVED|PDF_TEXT_LAYERS_PRESERVED")
                "SOURCE_LAYERS=PRESERVED")
              "|HEIGHT_POSITION_ROTATION=PRESERVED"))
          (if finalize
            (${a}-batch-log (strcat "LEGENDS_TEXT_HEIGHT_STYLES|EXACT_MATCHED=" (itoa height-matched)
              "|VARIABLE_HEIGHT_REVIEW=" (itoa height-review)
              "|HEIGHT_SNAPPING=DISABLED|LINKED_TEXT_AND_ATTRIBUTES=INSTANCE_SAFE"))))))
    (${a}-batch-log
      (strcat "TEXT_STANDARDIZED|COUNT=0|STYLE="
        (if *p2dwg-approved-text-style-name* *p2dwg-approved-text-style-name* "UNRESOLVED")
        "|FONT=Arial Narrow")))
  count)

(defun ${a}-text-link (entity stable-id role source-layer target approved-id field source-handle candidate / value)
  (setq value (${a}-serialize-text-state (${a}-text-state target)))
  (${a}-put-app entity "PIDTEXTLINK"
    (append
      (list (cons 1000 stable-id) (cons 1000 role) (cons 1000 source-layer)
        (cons 1000 "PDF_DONE_TEXT") (cons 1005 (cdr (assoc 5 (entget target))))
        (cons 1000 approved-id) (cons 1000 field) (cons 1000 "PASS")
        (cons 1005 source-handle) (cons 1000 candidate))
      (${a}-text-chunks value))))

(defun ${a}-write-text-log (stable-id source target approved-id field candidate / stream)
  (setq stream (open (strcat *p2dwg-batch-directory* "/AUTOCAD_TEXT_MAP.log") "a"))
  (if stream
    (progn
      (write-line (vl-prin1-to-string
        (list "TEXT_LINK_V1" stable-id candidate (cdr (assoc 5 (entget source)))
          (cdr (assoc 5 (entget target))) approved-id field
          (${a}-text-content target) "PASS" "PENDING_REOPEN")) stream)
      (close stream) T)
    nil))

(defun ${a}-archive-text-worker (source target stable-id approved-id field candidate / source-layer handle)
  (setq source-layer (cdr (assoc 8 (entget source))) handle (cdr (assoc 5 (entget source))))
  (if (or (not (wcmatch (strcase source-layer) "PDF_*"))
          (wcmatch (strcase source-layer) "PDF_DONE_*")
          (not (member (cdr (assoc 0 (entget source))) '("TEXT" "MTEXT")))
          (not (member (cdr (assoc 0 (entget target))) '("TEXT" "MTEXT" "ATTRIB")))
          (/= (cdr (assoc 7 (entget target))) *p2dwg-approved-text-style-name*))
    (p2dwg-raise "Unvalidated/non-PDF text cannot be archived."))
  (if (not (and
      (${a}-set-layer-state source-layer T nil)
      (${a}-ensure-archive-layer source-layer "PDF_DONE_TEXT")
      (${a}-set-layer-state "PDF_DONE_TEXT" T nil)
      (${a}-text-link target stable-id
        (if (= (cdr (assoc 0 (entget target))) "ATTRIB") "ATTRIBUTE" "FINAL_TEXT")
        source-layer target approved-id field handle candidate)
      (${a}-text-link source stable-id "SOURCE_TEXT" source-layer target approved-id field handle candidate)
      (entmod (${a}-put-group 8 "PDF_DONE_TEXT" (entget source)))
      (entupd source)
      (${a}-set-layer-state source-layer T T)
      (${a}-set-layer-state "PDF_DONE_TEXT" nil T)
      (${a}-write-text-log stable-id source target approved-id field candidate)))
    (p2dwg-raise "Text archive/link/log validation failed. Source will be restored."))
  (setq *p2dwg-archive-created-doc* (vla-get-ActiveDocument (vlax-get-acad-object)))
  T)

(defun ${a}-archive-text (source target stable-id approved-id field candidate / source-data target-data layer-data archive-data result source-layer)
  (setq source-data (entget source '("*")) target-data (entget target '("*"))
    source-layer (cdr (assoc 8 source-data))
    layer-data (entget (tblobjname "LAYER" source-layer))
    archive-data (if (tblsearch "LAYER" "PDF_DONE_TEXT")
      (entget (tblobjname "LAYER" "PDF_DONE_TEXT")) nil))
  (setq result (vl-catch-all-apply '${a}-archive-text-worker
    (list source target stable-id approved-id field candidate)))
  (if (or (vl-catch-all-error-p result) (null result))
    (progn
      (${a}-set-layer-state source-layer T nil)
      (if (tblsearch "LAYER" "PDF_DONE_TEXT") (${a}-set-layer-state "PDF_DONE_TEXT" T nil))
      (if (not (and (${a}-text-restore source source-data) (${a}-text-restore target target-data)
                    (entmod layer-data)))
        (p2dwg-raise "Text archive rollback failed; source/archive left visible and this page was not saved."))
      (if archive-data (entmod archive-data)
        (if (and (tblobjname "LAYER" "PDF_DONE_TEXT") (null (ssget "_X" '((8 . "PDF_DONE_TEXT")))))
          (vl-catch-all-apply 'vla-delete (list (vlax-ename->vla-object (tblobjname "LAYER" "PDF_DONE_TEXT"))))))
      (${a}-batch-log (strcat "NEEDS_REVIEW|TEXT_ARCHIVE_ROLLBACK|" stable-id))
      nil)
    T))

(defun ${a}-text-target-valid-p (source / payload target serialized pair expected state target-payload owner parent definition exists rule tag-value original-state target-state)
  (setq payload (${a}-app-data source "PIDTEXTLINK"))
  (if (and payload (= (cdr (nth 2 payload)) "SOURCE_TEXT"))
    (progn
      (setq target (handent (cdr (nth 5 payload))) serialized "")
      (foreach pair (${a}-list-tail payload 11) (setq serialized (strcat serialized (cdr pair))))
      (setq expected (vl-catch-all-apply 'read (list serialized)))
      (setq state (tblsearch "LAYER" "PDF_DONE_TEXT"))
      (setq original-state (tblsearch "LAYER" (cdr (nth 3 payload)))
        target-state (if target (tblsearch "LAYER" (cdr (assoc 8 (entget target)))) nil))
      (setq target-payload (if target (${a}-app-data target "PIDTEXTLINK") nil) exists T)
      (if (and target (= (cdr (assoc 0 (entget target))) "ATTRIB"))
        (progn
          (setq owner (cdr (assoc 330 (entget target))) exists nil)
          (if (and owner (= (cdr (assoc 0 (entget owner))) "INSERT"))
            (progn
              (setq parent (${a}-link-payload owner))
              (foreach definition (${a}-attribute-definitions owner)
                (if (and parent (= (cdr (nth 1 parent)) (cdr (nth 1 payload)))
                         (= (cdr (nth 6 parent)) (cdr (nth 6 payload)))
                         (= (strcase (cdr (assoc 2 definition))) (strcase (cdr (nth 7 payload)))))
                  (setq exists T)))))))
      (setq rule (if target (${a}-app-data target "PIDATTRRULE") nil))
      (setq tag-value (or (= (cdr (nth 7 payload)) "Tag")
        (= (cdr (nth 4 rule)) "tag")))
      (and target state original-state target-state
        (< (cdr (assoc 62 state)) 0) (/= (logand 4 (cdr (assoc 70 state))) 0)
        (> (cdr (assoc 62 original-state)) 0) (/= (logand 4 (cdr (assoc 70 original-state))) 0)
        (> (cdr (assoc 62 target-state)) 0) (= (logand 1 (cdr (assoc 70 target-state))) 0)
        target-payload exists
        (member (cdr (nth 2 target-payload)) '("ATTRIBUTE" "FINAL_TEXT"))
        (= (cdr (nth 1 target-payload)) (cdr (nth 1 payload)))
        (= (cdr (nth 6 target-payload)) (cdr (nth 6 payload)))
        (= (cdr (nth 7 target-payload)) (cdr (nth 7 payload)))
        (= (cdr (nth 10 target-payload)) (cdr (nth 10 payload)))
        (= (cdr (nth 8 target-payload)) "PASS")
        (= (cdr (nth 9 target-payload)) (cdr (assoc 5 (entget source))))
        (= (cdr (nth 5 target-payload)) (cdr (assoc 5 (entget target))))
        (not (and tag-value (${a}-duplicate-tag-p (${a}-text-content target)
          (if owner owner target))))
        (= (cdr (assoc 8 (entget source))) "PDF_DONE_TEXT")
        (= (cdr (assoc 7 (entget target))) *p2dwg-approved-text-style-name*)
        (not (vl-catch-all-error-p expected))
        (equal expected (${a}-text-state target) 0.00000001)))
    nil))

(defun ${a}-rollback-text-links (stable-id remove-generated / entity payload source-layer sources finals targets data ok owner summary)
  (setq entity (entnext) sources nil finals nil targets nil ok T)
  (while entity
    (setq payload (${a}-app-data entity "PIDTEXTLINK"))
    (if (and payload (= (cdr (nth 1 payload)) stable-id) (= (cdr (nth 8 payload)) "PASS"))
      (cond
        ((= (cdr (nth 2 payload)) "SOURCE_TEXT") (setq sources (cons entity sources)))
        ((= (cdr (nth 2 payload)) "FINAL_TEXT") (setq finals (cons entity finals)))
        ((= (cdr (nth 2 payload)) "ATTRIBUTE") (setq targets (cons entity targets)))))
    (setq entity (entnext entity)))
  (if sources
    (progn
      (${a}-set-layer-state "PDF_DONE_TEXT" T nil)
      (foreach entity sources
        (setq payload (${a}-app-data entity "PIDTEXTLINK") source-layer (cdr (nth 3 payload)))
        (${a}-set-layer-state source-layer T nil)
        (if (not (and (entmod (${a}-put-group 8 source-layer (entget entity)))
          (${a}-put-app entity "PIDTEXTLINK"
            (subst '(1000 . "ROLLED_BACK") (nth 8 payload) (cdr payload)))))
          (setq ok nil))
        (entupd entity)
        (${a}-set-layer-state source-layer T T))
      (if (not ok) (p2dwg-raise "Text rollback incomplete; source layers remain visible."))
      (foreach entity (append finals targets)
        (if (and remove-generated (member entity finals))
          (entdel entity)
          (progn
            (setq payload (${a}-app-data entity "PIDTEXTLINK"))
            (${a}-put-app entity "PIDTEXTLINK"
              (subst '(1000 . "NEEDS_REVIEW") (nth 8 payload) (cdr payload)))
            (if (member entity targets)
              (progn
                (setq owner (cdr (assoc 330 (entget entity)))
                  summary (if owner (${a}-app-data owner "PIDATTRSTATUS") nil))
                (if summary
                  (${a}-put-app owner "PIDATTRSTATUS"
                    (subst '(1000 . "NEEDS_REVIEW") (nth 4 summary) (cdr summary)))))))))
      (${a}-set-layer-state "PDF_DONE_TEXT" nil T)
      (${a}-batch-log (strcat "TEXT_ROLLBACK|" stable-id)) T)
    nil))

(defun ${a}-validate-text-reopen (/ entity payload ids stable-id failed result style)
  (setq entity (entnext) ids nil failed 0 style (${a}-arial-style))
  (while entity
    (setq payload (${a}-app-data entity "PIDTEXTLINK"))
    (if (and payload (= (cdr (nth 2 payload)) "SOURCE_TEXT")
             (= (cdr (nth 8 payload)) "PASS"))
      (progn
        (setq stable-id (cdr (nth 1 payload)))
        (setq result (vl-catch-all-apply '${a}-text-target-valid-p (list entity)))
        (if (or (null style) (vl-catch-all-error-p result) (not result))
          (if (not (member stable-id ids)) (setq ids (cons stable-id ids)))
          (progn
            (${a}-put-app (handent (cdr (nth 5 payload))) "PIDTEXTREOPEN"
              (list (cons 1000 stable-id) '(1000 . "REOPEN_PASS")))
            (${a}-batch-log (strcat "TEXT_REOPEN_PASS|" stable-id))))))
    (setq entity (entnext entity)))
  (foreach stable-id ids
    (${a}-rollback-text-links stable-id nil)
    (${a}-batch-log (strcat "NEEDS_REVIEW|TEXT_REOPEN_FAILED|" stable-id))
    (setq failed (1+ failed)))
  (prompt (strcat "\\nText reopen validation: " (itoa failed) " StableID(s) need review."))
  (= failed 0))
`}function S2(a){return`
(defun ${a}-json-escape (value / index char output)
  (setq index 1 output "")
  (while (<= index (strlen value))
    (setq char (substr value index 1))
    (setq output
      (strcat output
        (cond
          ((= char (chr 34)) (strcat (chr 92) (chr 34)))
          ((= char (chr 92)) (strcat (chr 92) (chr 92)))
          ((= char (chr 10)) (strcat (chr 92) "n"))
          ((= char (chr 13)) (strcat (chr 92) "r"))
          ((= char (chr 9)) (strcat (chr 92) "t"))
          (T char)))
    )
    (setq index (1+ index)))
  output)

(defun ${a}-json-number (value)
  (vl-string-translate "," "." (rtos value 2 16)))

(defun ${a}-text-snapshot-record (entity / data bounds point object rotation height)
  (setq data (entget entity)
    bounds (${a}-selection-bounds (ssadd entity))
    point (cdr (assoc 10 data))
    height (if (assoc 40 data) (cdr (assoc 40 data)) 0.0)
    object (vlax-ename->vla-object entity)
    rotation (vl-catch-all-apply 'vla-get-Rotation (list object)))
  (if (vl-catch-all-error-p rotation)
    (setq rotation (if (assoc 50 data) (* 180.0 (/ (cdr (assoc 50 data)) pi)) 0.0))
    (setq rotation (* 180.0 (/ rotation pi)))
  )
  (if (and bounds point)
    (strcat
      "{\\"type\\":\\"" (${a}-json-escape (cdr (assoc 0 data))) "\\","
      "\\"value\\":\\"" (${a}-json-escape (${a}-text-content entity)) "\\","
      "\\"position\\":[" (${a}-json-number (car point)) ","
        (${a}-json-number (cadr point)) ","
        (${a}-json-number (if (caddr point) (caddr point) 0.0)) "],"
      "\\"bbox\\":[" (${a}-json-number (nth 0 bounds)) ","
        (${a}-json-number (nth 1 bounds)) ","
        (${a}-json-number (nth 2 bounds)) ","
        (${a}-json-number (nth 3 bounds)) "],"
      "\\"rotation\\":" (${a}-json-number rotation) ","
      "\\"height\\":" (${a}-json-number height) ","
      "\\"layer\\":\\"" (${a}-json-escape (cdr (assoc 8 data))) "\\","
      "\\"handle\\":\\"" (${a}-json-escape (cdr (assoc 5 data))) "\\","
      "\\"pageNumber\\":" (itoa *p2dwg-source-page*) ","
      "\\"jobId\\":\\"" (${a}-json-escape *p2dwg-job-id*) "\\","
      "\\"sourceId\\":\\"" (${a}-json-escape *p2dwg-source-id*) "\\","
      "\\"sourceFile\\":\\"" (${a}-json-escape *p2dwg-source-alias*) "\\"}"
    )
    nil))

(defun ${a}-write-text-snapshot (imported / path stream index entity data layer record count
                                           source-count first)
  ; Rebuild this job's sidecar on each run so stale snapshots cannot masquerade
  ; as current text. Include numbered PDF layers such as PDF2_Text and PDF13_Text.
  (setq path *p2dwg-text-snapshot-path* stream nil count 0 source-count 0 first T)
  (if path (setq stream (open path "w")))
  (if stream
    (progn
      (write-line "{\\"schemaVersion\\":1,\\"records\\":[" stream)
      (setq index 0)
      (while (< index (sslength imported))
        (setq entity (ssname imported index) data (entget entity)
          layer (if data (cdr (assoc 8 data)) nil))
        (if (and data
                 (member (cdr (assoc 0 data)) '("TEXT" "MTEXT"))
                 layer
                 (${a}-pdf-source-layer-p layer))
          (progn
            (setq source-count (1+ source-count))
            (setq record (${a}-text-snapshot-record entity))
            (if record
              (progn
                (if (not first) (write-line "," stream))
                (write-line record stream)
                (setq first nil count (1+ count)))))
        )
        (setq index (1+ index)))
      (write-line "]}" stream)
      (close stream)
      (${a}-batch-log
        (strcat "TEXT_SNAPSHOT_WRITTEN|PATH=" path
          "|SOURCE_TEXT=" (itoa source-count) "|RECORDS=" (itoa count)))
      (if (< count source-count)
        (${a}-batch-log
          (strcat "TEXT_SNAPSHOT_WARNING|SOURCE_" (p2dwg-pad-page *p2dwg-source-page*)
            "|SOURCE_TEXT=" (itoa source-count) "|RECORDS=" (itoa count)
            "|REASON=INCOMPLETE_TEXT_RECORDS")))
      (prompt (strcat "\\nLocal PDF text snapshot written: " path))
      T)
    (progn
      (${a}-batch-log
        (strcat "TEXT_SNAPSHOT_SKIPPED|SOURCE_" (p2dwg-pad-page *p2dwg-source-page*)
          "|PATH="
          (if path path "UNAVAILABLE")
          "|REASON=" (if (and path (findfile path)) "EXISTS" "OPEN_FAILED")))
      (${a}-batch-log
        (strcat "TEXT_SNAPSHOT_WARNING|SOURCE_"
          (p2dwg-pad-page *p2dwg-source-page*) "|REASON=SNAPSHOT_FILE_UNAVAILABLE"))
      nil))
)
`}function T2(a){return`
(defun ${a}-geometry-only-selection (selection / result index entity)
  (setq result (ssadd) index 0)
  (repeat (sslength selection)
    (setq entity (ssname selection index))
    (if (not (member (cdr (assoc 0 (entget entity))) '("TEXT" "MTEXT" "ATTRIB" "ATTDEF")))
      (ssadd entity result))
    (setq index (1+ index)))
  result)

(defun ${a}-attribute-definitions (reference / definition entity data definitions)
  (setq definition (tblobjname "BLOCK" (cdr (assoc 2 (entget reference))))
    definitions nil entity (if definition (entnext definition) nil))
  (while (and entity (/= (cdr (assoc 0 (setq data (entget entity)))) "ENDBLK"))
    (if (= (cdr (assoc 0 data)) "ATTDEF") (setq definitions (cons data definitions)))
    (setq entity (entnext entity)))
  ; Wrapper/nested definitions are deliberately not edited globally.
  definitions)

(defun ${a}-reference-attributes (reference / object result)
  (setq object (vlax-ename->vla-object reference))
  (setq result (vl-catch-all-apply 'vla-GetAttributes (list object)))
  (if (vl-catch-all-error-p result) nil
    (progn
      (setq result (vl-catch-all-apply 'vlax-safearray->list (list (vlax-variant-value result))))
      (if (vl-catch-all-error-p result) nil result))))

(defun ${a}-text-in-zone-p (entity bounds zone / point x y width height)
  (setq point (cdr (assoc 10 (entget entity))) width (- (nth 2 bounds) (nth 0 bounds))
    height (- (nth 3 bounds) (nth 1 bounds)))
  (if point
    (progn
      (setq x (car point) y (cadr point))
      (and (> width 0.0) (> height 0.0)
        (cond
          ((= zone "inside") (and (>= x (nth 0 bounds)) (<= x (nth 2 bounds))
            (>= y (nth 1 bounds)) (<= y (nth 3 bounds))))
          ((= zone "above") (and (>= x (- (nth 0 bounds) (* width 0.5)))
            (<= x (+ (nth 2 bounds) (* width 0.5)))
            (> y (nth 3 bounds)) (<= y (+ (nth 3 bounds) height))))
          ((= zone "below") (and (>= x (- (nth 0 bounds) (* width 0.5)))
            (<= x (+ (nth 2 bounds) (* width 0.5)))
            (< y (nth 1 bounds)) (>= y (- (nth 1 bounds) height))))
          (T nil))))
    nil))

(defun ${a}-text-source-linked-p (entity)
  (if (${a}-app-data entity "PIDTEXTASSOC") T nil))

(defun ${a}-source-layer-p (entity / layer)
  (setq layer (cdr (assoc 8 (entget entity))))
  (and layer (wcmatch (strcase layer) "PDF_*")
    (not (wcmatch (strcase layer) "PDF_DONE_*"))))

(defun ${a}-tag-prefix-valid-p (value / index valid)
  (setq index 1 valid (> (strlen value) 0))
  (while (and valid (<= index (strlen value)))
    (if (null (vl-string-search (strcase (substr value index 1)) "ABCDEFGHIJKLMNOPQRSTUVWXYZ"))
      (setq valid nil))
    (setq index (1+ index)))
  valid)

(defun ${a}-tag-number-valid-p (value / index digits valid char)
  (setq index 1 digits 0 valid (> (strlen value) 0))
  (while (and valid (<= index (strlen value)))
    (setq char (strcase (substr value index 1)))
    (if (vl-string-search char "0123456789")
      (setq digits (1+ digits))
      (if (or (/= index (strlen value)) (null (vl-string-search char "ABCDEFGHIJKLMNOPQRSTUVWXYZ")))
        (setq valid nil)))
    (setq index (1+ index)))
  (and valid (<= 2 digits) (<= digits 5)))

(defun ${a}-instrument-tag-pair-position-p (function-entity number-entity bounds /
                                             function-bounds number-bounds function-center
                                             number-center function-height number-height tolerance)
  (setq function-bounds (${a}-selection-bounds (ssadd function-entity))
    number-bounds (${a}-selection-bounds (ssadd number-entity))
    function-height (if (assoc 40 (entget function-entity)) (cdr (assoc 40 (entget function-entity))) 0.0)
    number-height (if (assoc 40 (entget number-entity)) (cdr (assoc 40 (entget number-entity))) 0.0)
    tolerance (* 3.2 (max 0.01 function-height number-height)))
  (if (and function-bounds number-bounds
           (${a}-text-in-zone-p function-entity bounds "inside")
           (${a}-text-in-zone-p number-entity bounds "inside"))
    (progn
      (setq function-center
        (list (/ (+ (nth 0 function-bounds) (nth 2 function-bounds)) 2.0)
              (/ (+ (nth 1 function-bounds) (nth 3 function-bounds)) 2.0))
        number-center
        (list (/ (+ (nth 0 number-bounds) (nth 2 number-bounds)) 2.0)
              (/ (+ (nth 1 number-bounds) (nth 3 number-bounds)) 2.0)))
      (and (<= (abs (- (car function-center) (car number-center))) (* tolerance 1.8))
           (<= (abs (- (cadr function-center) (cadr number-center))) tolerance)))
    nil))

(defun ${a}-instrument-tag-source-pair (imported bounds value / dash prefix sequence index
                                      entity text functions numbers function-entity number-entity
                                      pairs layer)
  (setq dash (vl-string-search "-" (strcase value)) pairs nil)
  (if dash
    (progn
      (setq prefix (substr (strcase value) 1 dash)
        sequence (substr (strcase value) (+ dash 2)))
      (if (and (${a}-tag-prefix-valid-p prefix) (${a}-tag-number-valid-p sequence)
               (member prefix '("AI" "DI" "FI" "FIC" "FIT" "FQI" "LI" "LIC" "LS" "LSH"
                 "LSL" "PI" "PIC" "PDI" "PSH" "PSL" "TI" "TIC" "TSH" "TSL" "TT"
                 "PT" "FT" "LT" "FC" "PC" "TC" "LC" "AT" "AIT" "XV" "ZSO" "ZSC")))
        (progn
          (setq index 0 functions nil numbers nil)
          (repeat (sslength imported)
            (setq entity (ssname imported index) text (strcase (vl-string-trim " " (${a}-text-content entity)))
              layer (cdr (assoc 8 (entget entity))))
            (if (and (member (cdr (assoc 0 (entget entity))) '("TEXT" "MTEXT"))
                     (wcmatch (strcase layer) "PDF_*")
                     (not (wcmatch (strcase layer) "PDF_DONE_*"))
                     (not (${a}-text-source-linked-p entity)))
              (cond
                ((= text prefix) (setq functions (cons entity functions)))
                ((= text sequence) (setq numbers (cons entity numbers))))
             )
            (setq index (1+ index)))
          (foreach function-entity functions
            (foreach number-entity numbers
              (if (${a}-instrument-tag-pair-position-p function-entity number-entity bounds)
                (setq pairs (cons (list function-entity number-entity) pairs)))))
        )
      )
    )
  )
  (if (= (length pairs) 1) (car pairs) nil))

(defun ${a}-description-like-p (value / normalized)
  (setq normalized (strcase (vl-string-trim " " value)))
  (and (>= (strlen normalized) 5)
       (vl-string-search " " normalized)
       (not (wcmatch normalized "*-#*"))
       (not (wcmatch normalized "*[\\r\\n]*"))))

(defun ${a}-description-shared-zone-p (source reference zone attribute-tag /
                                      entity data definitions other-bounds definition shared)
  (setq entity (entnext) shared nil)
  (while (and entity (not shared))
    (setq data (entget entity))
    (if (and data (= (cdr (assoc 0 data)) "INSERT") (/= entity reference))
      (progn
        (setq definitions (${a}-attribute-definitions entity)
          other-bounds (${a}-selection-bounds (ssadd entity))
          definition (car (vl-remove-if-not
            '(lambda (entry) (= (strcase (cdr (assoc 2 entry))) attribute-tag))
            definitions)))
        (if (and definition other-bounds (${a}-text-in-zone-p source other-bounds zone))
          (setq shared T))))
    (setq entity (entnext entity)))
  shared)

(defun ${a}-description-source (imported reference bounds zone attribute-tag /
                                index entity matches value)
  (setq index 0 matches nil)
  (repeat (sslength imported)
    (setq entity (ssname imported index)
      value (${a}-text-content entity))
    (if (and (${a}-source-layer-p entity)
             (member (cdr (assoc 0 (entget entity))) '("TEXT" "MTEXT"))
             (not (${a}-text-source-linked-p entity))
             (${a}-description-like-p value)
             (${a}-text-in-zone-p entity bounds zone))
      (setq matches (cons entity matches)))
    (setq index (1+ index)))
  (if (and (= (length matches) 1)
           (not (${a}-description-shared-zone-p (car matches) reference zone attribute-tag)))
    (car matches) nil))

(defun ${a}-attribute-value-valid-p (value kind / index valid)
  (setq index 1 valid T)
  (if (and value (= kind "tag"))
    (while (and valid (<= index (strlen value)))
      (if (null (vl-string-search (strcase (substr value index 1)) "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789._/-"))
        (setq valid nil))
      (setq index (1+ index))))
  (and value (> (strlen value) 0) (<= (strlen value) 240)
    (not (wcmatch value "*[\\r\\n]*"))
    (cond
      ((= kind "tag") (and valid (wcmatch value "*#*")))
      ((= kind "number") (and (not (wcmatch value "*[~0-9.+-]*")) (distof value 2)))
      ((= kind "text") T)
      (T nil))))

(defun ${a}-attribute-source (imported bounds value zone / index entity layer matches)
  (setq index 0 matches nil)
  (repeat (sslength imported)
    (setq entity (ssname imported index) layer (cdr (assoc 8 (entget entity))))
    (if (and (member (cdr (assoc 0 (entget entity))) '("TEXT" "MTEXT"))
        (wcmatch (strcase layer) "PDF_*") (not (wcmatch (strcase layer) "PDF_DONE_*"))
        (not (${a}-text-source-linked-p entity))
        ; Rich/field-coded labels are not guessed from a visually nearby string.
        (= (${a}-text-content entity) value)
        (${a}-text-in-zone-p entity bounds zone))
      (setq matches (cons entity matches)))
    (setq index (1+ index)))
  (if (= (length matches) 1) (car matches) nil))

(defun ${a}-duplicate-tag-p (value reference / entity data parent duplicate object attribute)
  (setq duplicate (member (strcase value) *p2dwg-conflicting-tags*) entity (entnext))
  (while (and entity (not duplicate))
    (setq data (entget entity))
    (cond
      ((and (= (cdr (assoc 0 data)) "INSERT") (/= entity reference))
        (foreach attribute (${a}-reference-attributes entity)
          (if (= (strcase (vla-get-TextString attribute)) (strcase value))
            (setq duplicate T))))
      ((and (member (cdr (assoc 0 data)) '("TEXT" "MTEXT"))
            (/= entity reference)
            (= (cdr (nth 2 (${a}-app-data entity "PIDTEXTLINK"))) "FINAL_TEXT")
            (= (strcase (${a}-text-content entity)) (strcase value)))
        (setq duplicate T)))
    (setq entity (entnext entity)))
  duplicate)

(defun ${a}-attribute-summary (reference record approved-id candidate status / values attribute)
  (setq values nil)
  (foreach attribute (${a}-reference-attributes reference)
    (setq values (cons (list (vla-get-TagString attribute) (vla-get-TextString attribute)
      (vla-get-Handle attribute)) values)))
  (if (not (${a}-put-app reference "PIDATTRSTATUS"
      (append (list (cons 1000 (car record)) (cons 1000 approved-id)
        (cons 1000 candidate) (cons 1000 status))
        (${a}-text-chunks (vl-prin1-to-string values)))))
    (p2dwg-raise "Could not preserve the block attribute StableID link."))
  (${a}-batch-log (strcat "ATTRIBUTE_STATUS|" (car record) "|" status))
  (prompt (strcat "\\nATTRIBUTE STATUS = " status " | StableID=" (car record))))

(defun ${a}-mark-text-association (source reference record approved-id candidate tag value / handle)
  (setq handle (cdr (assoc 5 (entget source))))
  (and handle
    (${a}-put-app source "PIDTEXTASSOC"
      (list (cons 1000 (car record)) (cons 1000 (cdr (assoc 5 (entget reference))))
        (cons 1000 approved-id) (cons 1000 candidate) (cons 1000 tag)
        (cons 1000 value) (cons 1000 "PASS") (cons 1005 handle)))
    T))

(defun ${a}-prepare-attributes-worker (reference record bounds imported approved-id candidate /
    definitions attributes definition attribute tag rules rule value actual-value source source-list
    source-kind style snapshot original-geometry status flags entry same-definitions answer
    field-name)
  (setq definitions (${a}-attribute-definitions reference)
    attributes (${a}-reference-attributes reference) style (${a}-arial-style)
    *p2dwg-pending-attributes* nil status "PASS")
  (if (or (null definitions) (null attributes) (null style)) (setq status "NEEDS_REVIEW"))
  (foreach definition definitions
    (setq tag (strcase (cdr (assoc 2 definition))) flags (cdr (assoc 70 definition)))
    (setq same-definitions (vl-remove-if-not
      '(lambda (entry) (= (strcase (cdr (assoc 2 entry))) tag)) definitions))
    (if (/= (logand flags 2) 0)
      (progn
        ; Constant definitions are read-only. A non-Narrow constant prevents final approval.
        (if (not (wcmatch (strcase (cdr (assoc 3 (tblsearch "STYLE" (cdr (assoc 7 definition)))))) "*ARIALN.TTF"))
          (setq status "NEEDS_REVIEW")))
      (progn
        (setq attribute nil)
        (foreach entry attributes
          (if (= (strcase (vla-get-TagString entry)) tag)
            (if attribute (setq status "NEEDS_REVIEW") (setq attribute entry))))
        (setq rules (vl-remove-if-not '(lambda (entry) (= (car entry) tag)) *p2dwg-attribute-rules*))
        (setq rule (if (= (length rules) 1) (car rules) nil))
         (setq field-name (if rule (nth 1 rule) nil)
           value (if rule (cdr (assoc field-name (nth 4 record))) nil)
           actual-value value source-kind "EDE_EXACT"
           source (if (and rule value (${a}-attribute-value-valid-p value (nth 2 rule)))
             (${a}-attribute-source imported bounds value (nth 3 rule)) nil))
         (if (and rule (null source) (= field-name "ITEMTAG")
                  (= (nth 2 record) "Instrument")
                  (${a}-attribute-value-valid-p value "tag"))
           (progn
             (setq source (${a}-instrument-tag-source-pair imported bounds value))
             (if source (setq source-kind "INSTRUMENT_PAIR"))))
         (if (and rule (null source) (= field-name "DESCRIPTION")
                  (or (null value) (= value "")))
           (progn
              (setq source
                (${a}-description-source imported reference bounds (nth 3 rule) tag))
             (if source
               (progn
                 (setq actual-value (${a}-text-content source) source-kind "DESCRIPTION_SUGGESTION")
                 (initget "Yes No")
                 (setq answer
                   (getkword
                     (strcat "\\nUnique DESCRIPTION suggestion for " (car record) ": "
                       actual-value ". Accept? [Yes/No] <No>: ")))
                 (if (/= (strcase (if answer answer "No")) "YES")
                   (setq source nil actual-value nil))))))
         (setq source-list (cond ((null source) nil) ((listp source) source) (T (list source))))
         (if (and attribute style rule source actual-value
                  (${a}-attribute-value-valid-p actual-value (nth 2 rule))
                  (= (length same-definitions) 1)
                  (not (wcmatch (vla-get-TextString attribute) "*%<*"))
                  (not (and (= (nth 2 rule) "tag") (${a}-duplicate-tag-p actual-value reference))))
          (progn
            (setq snapshot (entget (vlax-vla-object->ename attribute) '("*"))
              original-geometry (${a}-text-geometry (vlax-vla-object->ename attribute)))
            ; Register rollback BEFORE the first mutation, including setter errors.
             (setq *p2dwg-pending-attributes*
               (cons
                 (list (vlax-vla-object->ename attribute) snapshot source-list tag rule
                   actual-value source-kind
                   (if (= source-kind "EDE_EXACT") nil
                     (mapcar '(lambda (source-entity)
                       (list source-entity (entget source-entity '("*")))) source-list)))
                 *p2dwg-pending-attributes*))
             (vla-put-TextString attribute actual-value)
            (if (not (and
                 (= (vla-get-TextString attribute) actual-value)
                (${a}-font-text (vlax-vla-object->ename attribute) style nil)
                (equal original-geometry (${a}-text-geometry (vlax-vla-object->ename attribute)) 0.00000001)))
              (p2dwg-raise "Attribute value/font changed its approved geometry.")))
          (progn
            (setq status "NEEDS_REVIEW")
            (prompt (strcat "\\nATTRIBUTE NEEDS_REVIEW: " tag
              " (missing/ambiguous definition, rule, bounded PDF evidence, EDE value or duplicate tag).")))))))
  (${a}-attribute-summary reference record approved-id candidate status)
  *p2dwg-pending-attributes*)

(defun ${a}-restore-pending-attributes (plan / entry source-snapshot)
  (foreach entry plan
    (progn
      (if (not (${a}-text-restore (car entry) (cadr entry)))
        (p2dwg-raise "Attribute rollback failed; this page was not saved."))
      (foreach source-snapshot (nth 7 entry)
        (if (not (${a}-text-restore (car source-snapshot) (cadr source-snapshot)))
          (p2dwg-raise "Text-association rollback failed; this page was not saved.")))))
  T)

(defun ${a}-prepare-attributes (reference record bounds imported approved-id candidate / result plan)
  (setq *p2dwg-pending-attributes* nil)
  (setq result (vl-catch-all-apply '${a}-prepare-attributes-worker
    (list reference record bounds imported approved-id candidate)))
  (if (vl-catch-all-error-p result)
    (progn
      (${a}-restore-pending-attributes *p2dwg-pending-attributes*)
      (setq *p2dwg-pending-attributes* nil)
      (${a}-attribute-summary reference record approved-id candidate "NEEDS_REVIEW")
      (${a}-batch-log (strcat "NEEDS_REVIEW|ATTRIBUTE_PREPARE|" (vl-catch-all-error-message result))) nil)
    result))

(defun ${a}-commit-attributes (plan reference record approved-id candidate / entry status source ok)
  (setq status (cdr (nth 4 (${a}-app-data reference "PIDATTRSTATUS"))))
  (foreach entry plan
    (setq ok
      (and
        (${a}-put-app (car entry) "PIDATTRRULE"
          (list (cons 1000 (car record)) (cons 1000 (nth 3 entry))
            (cons 1000 (nth 1 (nth 4 entry))) (cons 1000 (nth 2 (nth 4 entry)))
            (cons 1000 (nth 3 (nth 4 entry))) '(1000 . "BOUNDED_PDF_AND_CONFIRMED_EDE_V1")))
        T))
    (if (and ok (= (nth 6 entry) "EDE_EXACT"))
      (foreach source (nth 2 entry)
        (if (not (${a}-archive-text source (car entry) (car record) approved-id (nth 3 entry) candidate))
          (setq ok nil))))
    (if (and ok (/= (nth 6 entry) "EDE_EXACT"))
      (foreach source (nth 2 entry)
        (if (not (${a}-mark-text-association source reference record approved-id candidate
                  (nth 3 entry) (nth 5 entry)))
          (setq ok nil))))
    (if (not ok)
      (progn
        (${a}-restore-pending-attributes (list entry))
        (setq status "NEEDS_REVIEW"))))
  (${a}-attribute-summary reference record approved-id candidate status)
  (setq *p2dwg-pending-attributes* nil)
  T)
`}function A2(a){return["PROJECT_TITLE_BLOCK_SCOPE_V1",`workspaceType=${a.workspaceType}`,`projectId=${a.groupId}`,`titleBlockId=${a.titleBlockId}`,`titleBlockPath=${a.titleBlockPath}`,`xrefName=${a.xrefName}`,`expectedSizeMm=${cn.width}x${cn.height}`,`version=${a.version}`,""].join(`
`)}function Gn(a,r){return a.match(new RegExp(`(?:^|;)${r}=([^;]*)`,"i"))?.[1]?.trim()??null}function D2(a){const r=a.flatMap(o=>{if(o.category!=="textStyle")return[];const m=(Gn(o.detail,"font")?.split(/[\\/]/).pop()?.replace(/\.(ttf|shx|otf)$/i,"")??"").replace(/[\s_-]/g,"").toUpperCase(),f=Gn(o.detail,"height"),g=Gn(o.detail,"width"),y=Gn(o.detail,"oblique");if(!["ARIALN","ARIALNARROW"].includes(m)||f===null||g===null||y===null||Number(f)!==0)return[];const p=Number(g),b=Number(y);return!Number.isFinite(p)||p<=0||!Number.isFinite(b)?[]:[{name:o.name.trim(),signature:`${m}|${p}|${b}|${Gn(o.detail,"bigfont")??""}`}]});if(r.length===0)return null;if(new Set(r.map(o=>o.signature)).size>1)throw new Error("Legends Library has conflicting variable-height Arial Narrow text styles. Keep one approved general style or resolve the conflicting standards before downloading the runner.");return r.map(o=>o.name).sort((o,l)=>o.localeCompare(l))[0]}function N2(a){return a.filter(r=>{if(r.category!=="textStyle")return!1;const s=Gn(r.detail,"font")??"",o=Gn(r.detail,"bigfont")??"";return/\.shx$/i.test(s)||/\.shx$/i.test(o)})}function C2(a){for(const r of a)if(r.category==="textStyle"){if(!Gn(r.detail,"font"))throw new Error(`Approved text style "${r.name}" has no font.`);for(const s of["height","width","oblique"]){const o=Gn(r.detail,s);if(o===null)continue;const l=Number(o);if(!Number.isFinite(l)||s==="height"&&l<0||s==="width"&&l<=0)throw new Error(`Approved text style "${r.name}" has an invalid ${s}.`)}}}const Vl={name:"P2DWG_ARIAL_NARROW_GLOBAL",category:"textStyle",detail:"font=arialn.ttf;height=0;width=1;oblique=0;bigfont=",discipline:"Shared"};function R2(a,r=!1){const s=D2(a),o=N2(a),l=[...a,...o.filter(u=>!a.some(m=>m.category==="textStyle"&&m.name.toUpperCase()===u.name.toUpperCase()))];if(s)return{standards:l,styleName:s,source:"LEGENDS_LIBRARY"};if(r)throw new Error("LEGENDS_LIBRARY_INCOMPLETE: the active Legends Library has no reviewed variable-height Arial Narrow style. The runner will not replace its text standards with a generic style.");if(a.some(u=>u.category==="textStyle"&&u.name.trim().toUpperCase()===Vl.name.toUpperCase()))throw new Error(`Legends Library text style "${Vl.name}" conflicts with the fixed Arial Narrow default.`);return{standards:[...l,Vl],styleName:Vl.name,source:"GLOBAL_USER_APPROVED_DEFAULT"}}function _2(a){const r=a.flatMap(l=>{if(l.category!=="layer")return[];const u=l.name.trim(),m=u.toUpperCase();if(!u||m==="0"||/^(PDF|P2DWG)|TITLE|LOGO|BORDER|FRAME/.test(m))return[];const f=m.replace(/[^A-Z0-9]/g,""),g=f==="FGENTEXT"?100:f==="GENTEXT"?90:/TEXT|ANNOT|NOTE/.test(m)?50:0;return g?[{name:u,priority:g}]:[]});if(r.length===0)return null;const s=Math.max(...r.map(l=>l.priority)),o=r.filter(l=>l.priority===s);if(o.length>1)throw new Error(`Legends Library has multiple equally suitable general text layers: ${o.map(l=>l.name).join(", ")}. Resolve the default text layer before downloading the runner.`);return o[0].name}function I2(a,r,s,o,l=[],u=[],m=[],f=!1){const g=String(a).padStart(2,"0"),y=`PDF2DWG${g}`,p=`p2dwg${g}`,b=v2.map(rt).join(" ");C2(o);const v=R2(o,f),w=v.standards,_=_2(o),D=s.map(k=>`(${rt(k.fallbackCategory.toLowerCase())} ${rt(k.blockName)} ${rt(k.sourcePath)} ${rt(k.targetLayer)} ${k.wipeoutBoundary?_S(k.wipeoutBoundary):"nil"} ${rt(k.blockAssetId)} (${(k.requiredShapeFonts??[]).map(rt).join(" ")}) ${k.autoPlacementSignature?`(${k.autoPlacementSignature.points.map(ae=>`(${Gl(ae[0])} ${Gl(ae[1])})`).join(" ")})`:"nil"} ${k.autoPlacementSignature?`(("PATH" . ${k.autoPlacementSignature.primitiveClasses.PATH}) ("CURVE" . ${k.autoPlacementSignature.primitiveClasses.CURVE}))`:"nil"} ${k.autoPlacementSignature?Gl(k.autoPlacementSignature.aspectRatio):"nil"})`).join(`
    `),S=o.filter(k=>k.category==="layer").map(k=>{const ae=k.detail.match(/(?:^|;)color=(\d+)/i)?.[1],W=k.detail.match(/(?:^|;)lineweight=(-?\d+)/i)?.[1],ne=k.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!ae||!W||!ne)throw new Error(`Approved layer "${k.name}" is missing its Legends color, lineweight, or linetype. Re-extract the layer instead of substituting defaults.`);const fe=Number(ae),ie=Number(W),re=[-3,-2,-1].includes(ie)||Number.isInteger(ie)&&ie>=0&&ie<=211;if(!Number.isInteger(fe)||fe<1||fe>255||!re)throw new Error(`Approved layer "${k.name}" has invalid color or lineweight values.`);return`(${rt(k.name)} ${fe} ${ie} ${rt(ne)})`}).join(`
    `);o.filter(k=>k.category==="layer").map(k=>k.name.trim()).filter(Boolean);const T=f2(),L=w.filter(k=>k.category==="textStyle").map(k=>{const ae=(fe,ie)=>k.detail.match(new RegExp(`(?:^|;)${fe}=([^;]*)`,"i"))?.[1]??ie,W=(fe,ie)=>{const re=Number(ae(fe,String(ie)));if(!Number.isFinite(re)||fe==="height"&&re<0||fe==="width"&&re<=0)throw new Error(`Approved text style "${k.name}" has an invalid ${fe}. Re-review the supplied CAD text format.`);return String(re)},ne=ae("font","").trim();if(!ne)throw new Error(`Approved text style "${k.name}" has no font. Re-review it instead of substituting a default font.`);return`(${rt(k.name)} ${W("height",0)} ${W("width",1)} ${W("oblique",0)} ${rt(ne)} ${rt(ae("bigfont",""))})`}).join(`
    `),I=o.filter(k=>k.category==="linetype").filter(k=>!["CONTINUOUS","BYLAYER","BYBLOCK"].includes(k.name.trim().toUpperCase())).flatMap(k=>{const ae=Cv(k.name,k.detail);if(!ae)throw new Error(`Approved linetype "${k.name}" has an unsupported or incomplete definition. Re-extract it with the current extractor; the runner will not omit its marks or substitute Continuous.`);const W=k.detail.match(/(?:^|;)description=([^;]*)/i)?.[1]?.trim()||k.name,ne=ae.segments.map(fe=>{const ie=[String(fe.length),String(fe.flags)];return fe.flags===4&&ie.push(String(fe.shapeNumber),rt(fe.styleName),rt(fe.shapeFile),String(fe.scale),String(fe.rotation),String(fe.offsetX),String(fe.offsetY)),`(${ie.join(" ")})`}).join(" ");return[`(${rt(k.name)} ${rt(W)} ${String(ae.patternLength)} (${ne}))`]}).join(`
    `),C=o.filter(k=>k.category==="dimensionStyle").map(k=>{const ae=oT(k.name,k.detail),W=fe=>fe.map(([ie,re])=>`(${ie} . ${typeof re=="string"?rt(re):Gl(re)})`).join(" "),ne=ae.resources.map(([fe,ie])=>[fe,fe===340?v.styleName:ie]);return`(${rt(k.name)} (${W(ae.properties)}) (${W(ne)}))`}).join(`
    `),x=l.map(k=>`(${rt(k.stableId.toUpperCase())} ${rt(k.itemTag.trim())} ${rt(k.type)} ${k.pageNumber} (${_i.map(ae=>`(${rt(ae.toUpperCase())} . ${rt(ae==="itemTag"?k.itemTag.trim():k.fields?.[ae]??"")})`).join(" ")}))`).join(`
    `);z2(o);const O=`; Local AutoCAD runner. The matching source PDF is packaged separately.
; Copyright (c) 2026 gaurav.cbiindia.
; Run command ${y} in AutoCAD for Windows.
; Each imported entity is stamped with a generic source alias and source page.

(vl-load-com)
(setq *p2dwg-attribute-rules* '(${u.map(k=>`(${rt(k.attributeTag)} ${rt(k.edeField.toUpperCase())} ${rt(k.valueType)} ${rt(k.textZone)})`).join(" ")}))
(setq *p2dwg-conflicting-tags* '(${m.map(k=>rt(k.toUpperCase())).join(" ")}))
(if (not (boundp '*p2dwg-batch-mode*)) (setq *p2dwg-batch-mode* nil))
(setq *p2dwg-approved-symbols* '(
    ${D}
))
(setq *p2dwg-approved-layers* '(
    ${S}
))
(setq *p2dwg-approved-text-styles* '(
    ${L}
))
(setq *p2dwg-approved-text-style-name* ${rt(v.styleName)})
(setq *p2dwg-approved-text-style-source* ${rt(v.source)})
(setq *p2dwg-approved-text-layer-name* ${_?rt(_):"nil"})
(setq *p2dwg-approved-linetypes* '(
    ${I}
))
(setq *p2dwg-approved-dimension-styles* '(
    ${C}
))
(setq *p2dwg-ede-records* '(
    ${x}
))

(defun ${p}-pad-page (value / text)
  (setq text (itoa value))
  (while (< (strlen text) 3)
    (setq text (strcat "0" text))
  )
  text
)

(defun ${p}-find-text-font (fontFile / resolved windowsDir localFonts fontDirs directory candidate)
  (setq resolved (findfile fontFile))
  (if (and (null resolved)
           (wcmatch (strcase fontFile) "*.TTF,*.TTC,*.OTF"))
    (progn
      (setq windowsDir (getenv "WINDIR"))
      (setq localFonts (getenv "LOCALAPPDATA"))
      (setq fontDirs nil)
      (if windowsDir
        (setq fontDirs (append fontDirs (list (strcat windowsDir "\\\\Fonts\\\\"))))
      )
      (if localFonts
        (setq fontDirs
          (append fontDirs
            (list (strcat localFonts "\\\\Microsoft\\\\Windows\\\\Fonts\\\\")))
        )
      )
      (foreach directory fontDirs
        (if (null resolved)
          (progn
            (setq candidate (findfile (strcat directory fontFile)))
            (if candidate (setq resolved candidate))
          )
        )
      )
    )
  )
  resolved
)

(defun ${p}-ensure-shape-style (styleName fontFile / data updated styleEntity)
  (if (not (findfile fontFile))
    (p2dwg-raise (strcat "Required linetype shape font " fontFile " was not found in AutoCAD's support paths. Install it, then rerun; the shape will not be omitted."))
  )
  (setq data (tblsearch "STYLE" styleName))
  (if data
    (progn
      (setq updated (${p}-put-group 3 fontFile data))
      (setq updated (${p}-put-group 4 "" updated))
      (setq updated (${p}-put-group 40 0.0 updated))
      (setq updated (${p}-put-group 41 1.0 updated))
      (setq updated (${p}-put-group 50 0.0 updated))
      (setq updated (${p}-put-group 71 0 updated))
      (entmod updated)
    )
    (entmake
      (list
        '(0 . "STYLE")
        '(100 . "AcDbSymbolTableRecord")
        '(100 . "AcDbTextStyleTableRecord")
        (cons 2 styleName)
        '(70 . 0)
        '(40 . 0.0)
        '(41 . 1.0)
        '(50 . 0.0)
        '(71 . 0)
        '(42 . 2.5)
        (cons 3 fontFile)
        '(4 . "")
      )
    )
  )
  (setq styleEntity (tblobjname "STYLE" styleName))
  (if (not styleEntity)
    (p2dwg-raise (strcat "Could not create the shape text style " styleName "."))
  )
  styleEntity
)

(defun ${p}-ensure-layer (name color weight linetype)
  (if (or (= (strcase linetype) "BYLAYER") (= (strcase linetype) "BYBLOCK"))
    (setq linetype "CONTINUOUS")
  )
  (if (not (${p}-ensure-linetype linetype))
    (p2dwg-raise (strcat "Approved linetype " linetype " could not be loaded. Page canceled; no Continuous fallback was applied."))
  )
  (if (not (${p}-set-layer-standard name color weight linetype))
    (p2dwg-raise (strcat "Approved layer " name " could not be created or updated. Page canceled."))
  )
)

(defun ${p}-ensure-linetype (name / definition description segments total record
                                        existing updated result segment dash flags styleEntity styleHandle)
  (if (member (strcase name) '("CONTINUOUS" "BYLAYER" "BYBLOCK"))
    T
    (progn
      (setq definition
        (car
          (vl-remove-if-not
            '(lambda (entry) (= (strcase (car entry)) (strcase name)))
            *p2dwg-approved-linetypes*
          )
        )
      )
      (if (not definition)
        nil
        (progn
          (setq description (cadr definition))
            (setq total (caddr definition))
            (setq segments (cadddr definition))
          ; tblsearch returns a symbol-table lookup record, not the full
          ; entity data entmod needs on drawings whose template already has
          ; standard linetypes loaded.
          (setq existing (tblobjname "LTYPE" name))
          (if existing
            (progn
              (setq updated (entget existing))
              (setq updated
                (vl-remove-if
                    '(lambda (entry) (member (car entry) '(3 9 40 44 45 46 49 50 72 73 74 75 340)))
                  updated
                )
              )
            )
            (setq updated
              (list
                '(0 . "LTYPE")
                '(100 . "AcDbSymbolTableRecord")
                '(100 . "AcDbLinetypeTableRecord")
                (cons 2 name)
                '(70 . 0)
              )
            )
          )
          (setq record
            (append updated
              (list
                (cons 3 description)
                '(72 . 65)
                (cons 73 (length segments))
                (cons 40 total)
              )
            )
          )
            (foreach segment segments
              (setq dash (car segment))
              (setq flags (cadr segment))
              (setq record (append record (list (cons 49 dash) (cons 74 flags))))
              (if (= flags 4)
                (progn
                  (setq styleEntity (${p}-ensure-shape-style (nth 3 segment) (nth 4 segment)))
                  (setq styleHandle (cdr (assoc 5 (entget styleEntity))))
                  (if (not styleHandle)
                    (p2dwg-raise (strcat "Could not resolve the shape style handle for linetype " name "."))
                  )
                  (setq record
                    (append record
                      (list
                        (cons 75 (nth 2 segment))
                        (cons 340 styleHandle)
                        (cons 46 (nth 5 segment))
                        (cons 50 (nth 6 segment))
                        (cons 44 (nth 7 segment))
                        (cons 45 (nth 8 segment))
                      )
                    )
                  )
                )
              )
            )
            (setq result
              (if existing
                (entmod record)
                (entmake record)
              )
            )
            (and result (tblsearch "LTYPE" name))
        )
      )
    )
  )
)

(defun ${p}-put-group (code value data / prior)
  (setq prior (assoc code data))
  (if prior (subst (cons code value) prior data) (append data (list (cons code value))))
)

(defun ${p}-set-layer-standard (name color weight linetype / layer-entity data updated verified)
  (setq layer-entity (tblobjname "LAYER" name))
  (if layer-entity
    (progn
      ; entmod needs the actual table-record entity data, not tblsearch's
      ; lookup result. The first page creates these layers; later pages update them.
      (setq data (entget layer-entity))
      (setq updated (vl-remove-if '(lambda (pair) (member (car pair) '(420 430))) data))
      (setq updated (${p}-put-group 62 color updated))
      (setq updated (${p}-put-group 6 linetype updated))
      (setq updated (${p}-put-group 370 weight updated))
      (if (entmod updated)
        (progn
          (setq verified (entget layer-entity))
          (and verified
            (assoc 62 verified)
            (assoc 6 verified)
            (assoc 370 verified)
            (not (assoc 420 verified))
            (= (abs (cdr (assoc 62 verified))) color)
            (= (strcase (cdr (assoc 6 verified))) (strcase linetype))
            (= (cdr (assoc 370 verified)) weight))
        )
        nil
      )
    )
    (entmake
      (list
        '(0 . "LAYER")
        '(100 . "AcDbSymbolTableRecord")
        '(100 . "AcDbLayerTableRecord")
        (cons 2 name)
        '(70 . 0)
        (cons 62 color)
        (cons 6 linetype)
        (cons 370 weight)
      )
    )
  )
)

(defun ${p}-set-insert-layer (entity layer-name / data entity-type updated verified)
  (if (and entity (tblsearch "LAYER" layer-name))
    (progn
      (setq data (entget entity))
      (setq entity-type (cdr (assoc 0 data)))
      (if (equal (strcase entity-type) "INSERT")
        (progn
          (setq updated
            (vl-remove-if
              '(lambda (pair) (member (car pair) '(420 430)))
              data))
          (setq updated (${p}-put-group 8 layer-name updated))
          (setq updated (${p}-put-group 62 256 updated))
          (setq updated (${p}-put-group 6 "BYLAYER" updated))
          (setq updated (${p}-put-group 370 -1 updated))
          (if (entmod updated)
            (progn
              (entupd entity)
              (setq verified (entget entity))
              (and
                (= (strcase (cdr (assoc 8 verified))) (strcase layer-name))
                (= (if (assoc 62 verified) (cdr (assoc 62 verified)) 256) 256)
                (= (strcase (if (assoc 6 verified) (cdr (assoc 6 verified)) "BYLAYER")) "BYLAYER")
                (= (if (assoc 370 verified) (cdr (assoc 370 verified)) -1) -1)
                (not (assoc 420 verified))
                (not (assoc 430 verified)))
            )
            nil
          )
        )
        nil
      )
    )
    nil
  )
)

(defun ${p}-set-layer-state (name visible locked / layer-entity data color flags updated)
  (setq layer-entity (tblobjname "LAYER" name))
  (if layer-entity
    (progn
      (setq data (entget layer-entity))
      (setq color (if (assoc 62 data) (abs (cdr (assoc 62 data))) 7))
      (if (= color 0) (setq color 7))
      (setq updated (${p}-put-group 62 (if visible color (- color)) data))
      (setq flags (if (assoc 70 data) (cdr (assoc 70 data)) 0))
      ; A source layer is never frozen by this workflow; it is only locked.
      (if (= 1 (logand flags 1)) (setq flags (1- flags)))
      (if locked
        (if (= 0 (logand flags 4)) (setq flags (+ flags 4)))
        (if (/= 0 (logand flags 4)) (setq flags (- flags 4)))
      )
      (setq updated (${p}-put-group 70 flags updated))
      (and (entmod updated) (tblsearch "LAYER" name))
    )
    nil
  )
)

(defun ${p}-source-layer-suffix (name)
  (cond
    ((= (strcase name) "PDF_EQUIP") "EQUIP")
    ((= (strcase name) "PDF_INST") "INST")
    ((= (strcase name) "PDF_PIPE_INLINE") "PIPE_INLINE")
    ((= (strcase name) "PDF_TEXT") "TEXT")
    (T nil)
  )
)

(defun ${p}-pdf-source-layer-p (name / normalized character index)
  (setq normalized (if name (strcase name) ""))
  (and
    (>= (strlen normalized) 4)
    (= (substr normalized 1 3) "PDF")
    (or
      (= (substr normalized 4 1) "_")
      (and
        (wcmatch (substr normalized 4 1) "#")
        (progn
          (setq index 4)
          (while (and (<= index (strlen normalized)) (wcmatch (substr normalized index 1) "#"))
            (setq index (1+ index)))
          (<= index (strlen normalized))
        )
      )
    )
    (/= (substr normalized 1 9) "PDF_DONE_")
  )
)

(defun ${p}-selection-source-layers (selection / index entity data name layers valid)
  (if selection
    (progn
      (setq index 0 layers nil valid T)
      (while (and valid (< index (sslength selection)))
        (setq entity (ssname selection index))
        (setq data (entget entity))
        (setq name (if (assoc 8 data) (cdr (assoc 8 data)) nil))
        (if (or
              (not (${p}-pdf-source-layer-p name))
              (null (tblsearch "LAYER" name)))
          (setq valid nil)
          (if (not (member name layers))
            (setq layers (append layers (list name)))
          )
        )
        (setq index (1+ index))
      )
      (if valid layers nil)
    )
    nil
  )
)

(defun ${p}-auto-selection-source-layers (selection / index entity data name layers valid)
  (if selection
    (progn
      (setq index 0 layers nil valid T)
      (while (and valid (< index (sslength selection)))
        (setq entity (ssname selection index)
              data (entget entity)
              name (if (assoc 8 data) (strcase (cdr (assoc 8 data))) nil))
        (if (or (null name)
                (and (/= name "0") (not (${p}-pdf-source-layer-p name)))
                (null (tblsearch "LAYER" name)))
          (setq valid nil)
          (if (not (member name layers))
            (setq layers (append layers (list name))))
        )
        (setq index (1+ index))
      )
      (if valid layers nil))
    nil)
)

(defun ${p}-category-for-source-layers (source-layers / category current suffix valid source-layer)
  (setq category nil valid T)
  (foreach source-layer source-layers
    (setq suffix (${p}-source-layer-suffix source-layer))
    (setq current
      (cond
        ((equal suffix "EQUIP") "equipment")
        ((equal suffix "INST") "instrument")
        ((equal suffix "PIPE_INLINE") "inline component")
        (T nil)
      )
    )
    (if (null current)
      (setq valid nil)
      (if category
        (if (not (equal category current)) (setq valid nil))
        (setq category current)
      )
    )
  )
  (if valid category nil)
)

(defun ${p}-source-layer-for-category (category)
  (cond
    ((= (strcase category) "EQUIPMENT") "PDF_EQUIP")
    ((= (strcase category) "INSTRUMENT") "PDF_INST")
    ((= (strcase category) "INLINE COMPONENT") "PDF_PIPE_INLINE")
    (T nil)
  )
)

(defun ${p}-choose-source-category (/ answer)
  (initget "Equipment Instrument Inline")
  (setq answer
    (getkword
      "\\nThese PDF layers do not identify a symbol category. Choose by the visible item, not the layer name [Equipment/Instrument/Inline] <Cancel>: "
    )
  )
  (cond
    ((equal answer "Equipment") "equipment")
    ((equal answer "Instrument") "instrument")
    ((equal answer "Inline") "inline component")
    (T nil)
  )
)

(defun ${p}-snapshot-source-layer (entity snapshots / entry source-layer)
  (setq source-layer nil)
  (foreach entry snapshots
    (if (equal entity (car entry))
      (setq source-layer (nth 2 entry))
    )
  )
  source-layer
)

(defun ${p}-source-target-layer-compatible-p (source-layer target-layer / suffix accepted)
  (setq suffix (${p}-source-layer-suffix source-layer))
  (if suffix
    (progn
      (setq accepted
        (cond
          ((= suffix "EQUIP") '("EQUIP" "F_EQUIP"))
          ((= suffix "INST") '("INST" "F_INST"))
          ((= suffix "PIPE_INLINE") '("PIPE_INLINE" "F_PIPE_INLINE"))
          ((= suffix "TEXT") '("TEXT" "F_GEN_TEXT"))
          (T nil)
        )
      )
      (and accepted (member (strcase target-layer) accepted))
    )
    nil
  )
)

(defun ${p}-auto-source-target-layer-compatible-p
       (source-layers target-layer / category suffix accepted valid source-layer)
  (setq category (${p}-category-for-source-layers source-layers))
  (if category
    (progn
      (setq accepted
        (cond
          ((equal category "equipment") '("EQUIP" "F_EQUIP"))
          ((equal category "instrument") '("INST" "F_INST"))
          ((equal category "inline component") '("PIPE_INLINE" "F_PIPE_INLINE"))
          (T nil)))
      (and accepted (member (strcase target-layer) accepted)))
    (progn
      ; Generic PDFIMPORT layer names may not encode the symbol discipline.
      ; The caller compares only approved blocks and still requires a unique,
      ; high-confidence geometric match. Exclude known non-placement layers.
      (setq valid (and source-layers T))
      (foreach source-layer source-layers
        (setq suffix
          (if (= source-layer "0")
            "0"
            (if (>= (strlen source-layer) 5)
            (substr (strcase source-layer) 5)
            "")))
        (if (or
              (and (/= source-layer "0")
                   (not (${p}-pdf-source-layer-p source-layer)))
              (wcmatch (if suffix suffix "") "TEXT,BORDER*,ELEC,MISC,VENDOR,PIPE*,TITLE*,DEFPOINTS"))
          (setq valid nil)))
      valid))
)

(defun ${p}-ensure-archive-layer (source-layer archive-layer / source-record
                                               source-data color linetype weight made)
  (setq source-record (tblsearch "LAYER" source-layer))
  (if (not source-record)
    nil
    (if (tblsearch "LAYER" archive-layer)
      (${p}-set-layer-state archive-layer T nil)
      (progn
        (setq source-data source-record)
        (setq color (if (assoc 62 source-data) (abs (cdr (assoc 62 source-data))) 7))
        (if (= color 0) (setq color 7))
        (setq linetype (if (assoc 6 source-data) (cdr (assoc 6 source-data)) "CONTINUOUS"))
        (setq weight (if (assoc 370 source-data) (cdr (assoc 370 source-data)) 25))
        (setq made
          (entmake
            (list
              '(0 . "LAYER")
              '(100 . "AcDbSymbolTableRecord")
              '(100 . "AcDbLayerTableRecord")
              (cons 2 archive-layer)
              '(70 . 0)
              (cons 62 color)
              (cons 6 linetype)
              (cons 370 weight)
            )
          )
        )
        (and made (tblsearch "LAYER" archive-layer))
      )
    )
  )
)

(defun ${p}-bounds-center (bounds)
  (list
    (/ (+ (nth 0 bounds) (nth 2 bounds)) 2.0)
    (/ (+ (nth 1 bounds) (nth 3 bounds)) 2.0)
    0.0
  )
)

(defun ${p}-fit-block-to-source (block-reference source-bounds / object block-bounds
                                           source-width source-height block-width block-height
                                           scale-x scale-y scale-factor aspect-error position-error
                                           tolerance source-center block-center insertion-point new-point
                                           result final-bounds final-width final-height width-error
                                           height-error coverage-x coverage-y coverage)
  (setq *p2dwg-replacement-validation* nil)
  (setq object (vlax-ename->vla-object block-reference))
  (setq block-bounds (${p}-selection-bounds (ssadd block-reference)))
  (if (not block-bounds)
    nil
    (progn
      (setq source-width (- (nth 2 source-bounds) (nth 0 source-bounds)))
      (setq source-height (- (nth 3 source-bounds) (nth 1 source-bounds)))
      (setq block-width (- (nth 2 block-bounds) (nth 0 block-bounds)))
      (setq block-height (- (nth 3 block-bounds) (nth 1 block-bounds)))
      (if (or (<= source-width 0.0001) (<= source-height 0.0001)
              (<= block-width 0.0001) (<= block-height 0.0001))
        nil
        (progn
          (setq scale-x (/ source-width block-width))
          (setq scale-y (/ source-height block-height))
          (setq aspect-error (/ (abs (- scale-x scale-y)) (max scale-x scale-y)))
          (if (or (> aspect-error 0.05) (< (min scale-x scale-y) 0.01)
                  (> (max scale-x scale-y) 1000.0))
            nil
            (progn
              (setq scale-factor (/ (+ scale-x scale-y) 2.0))
              (setq result
                (vl-catch-all-apply 'vla-put-XScaleFactor (list object scale-factor)))
              (if (vl-catch-all-error-p result)
                nil
                (progn
                  (setq result
                    (vl-catch-all-apply 'vla-put-YScaleFactor (list object scale-factor)))
                  (if (vl-catch-all-error-p result)
                    nil
                    (progn
                      (setq final-bounds (${p}-selection-bounds (ssadd block-reference)))
                      (setq source-center (${p}-bounds-center source-bounds))
                      (setq block-center (${p}-bounds-center final-bounds))
                      (setq insertion-point (vla-get-InsertionPoint object))
                      (if (= (type insertion-point) 'VARIANT)
                        (setq insertion-point (vlax-variant-value insertion-point)))
                      (if (= (type insertion-point) 'SAFEARRAY)
                        (setq insertion-point (vlax-safearray->list insertion-point)))
                      (if (not (and (listp insertion-point) (>= (length insertion-point) 2)))
                        nil
                        (progn
                          (setq new-point
                            (list
                              (+ (car insertion-point) (- (car source-center) (car block-center)))
                              (+ (cadr insertion-point) (- (cadr source-center) (cadr block-center)))
                              (if (caddr insertion-point) (caddr insertion-point) 0.0)
                            )
                          )
                          (setq result
                            (vl-catch-all-apply
                              'vla-put-InsertionPoint
                              (list object (vlax-3d-point new-point))))
                          (if (vl-catch-all-error-p result)
                            nil
                            (progn
                              (setq final-bounds (${p}-selection-bounds (ssadd block-reference)))
                              (setq final-width (- (nth 2 final-bounds) (nth 0 final-bounds)))
                              (setq final-height (- (nth 3 final-bounds) (nth 1 final-bounds)))
                              (setq source-center (${p}-bounds-center source-bounds))
                              (setq block-center (${p}-bounds-center final-bounds))
                              (setq position-error
                                (distance source-center block-center))
                              (setq tolerance
                                (max 0.5 (* 0.01 (max source-width source-height))))
                              (setq width-error (/ (abs (- final-width source-width)) source-width))
                              (setq height-error (/ (abs (- final-height source-height)) source-height))
                              (setq coverage-x (/ (min source-width final-width) (max source-width final-width)))
                              (setq coverage-y (/ (min source-height final-height) (max source-height final-height)))
                              (setq coverage (* coverage-x coverage-y))
                              (setq *p2dwg-replacement-validation*
                                (list
                                  (<= position-error tolerance)
                                  scale-factor
                                  position-error
                                  width-error
                                  height-error
                                  coverage
                                  tolerance
                                )
                              )
                              (and
                                (<= position-error tolerance)
                                (<= width-error 0.05)
                                (<= height-error 0.05)
                                (>= coverage 0.90)
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
)

(defun ${p}-insert-approved-block (document source-path insertion-point source-bounds rotation layer-name block-name block-asset-id required-fonts / model-space block-reference entity result error-message missing-font font)
  (${p}-batch-log
    (strcat "DIRECT_IMPORT_REQUEST|" block-asset-id "|" block-name "|" source-path))
  (setq missing-font nil)
  (foreach font required-fonts
    (if (and (null missing-font) (not (findfile font)))
      (setq missing-font font))
  )
  (if missing-font
    (progn
      (${p}-batch-log
        (strcat "FAILED: required SHX font missing|" missing-font "|" block-asset-id "|" block-name))
      nil
    )
    (progn
      (setq result
        (vl-catch-all-apply
          '(lambda ()
            (setq model-space (vla-get-ModelSpace document))
            (setq block-reference
              (vla-InsertBlock
                model-space
                (vlax-3d-point insertion-point)
                source-path
                1.0
                1.0
                1.0
                rotation
              )
            )
            (setq entity (vlax-vla-object->ename block-reference))
            (if (and
                  (equal (strcase (vla-get-ObjectName block-reference)) "ACDBBLOCKREFERENCE")
                  entity
                  (${p}-set-insert-layer entity layer-name)
                  (${p}-fit-block-to-source entity source-bounds)
                )
              entity
              (progn
                (vl-catch-all-apply 'vla-Delete (list block-reference))
                nil
              )
            )
          )
          '()
        )
      )
      (if (vl-catch-all-error-p result)
        (progn
          (setq error-message (vl-catch-all-error-message result))
          (if block-reference
            (vl-catch-all-apply 'vla-Delete (list block-reference))
          )
          (${p}-batch-log
            (strcat "FAILED: direct block import|" block-asset-id "|" block-name "|" error-message))
          nil
        )
        (if result
          (progn
            (${p}-batch-log
              (strcat "DIRECT_IMPORT_CONFIRMED|" block-asset-id "|" block-name "|" layer-name
                "|SCALE=" (rtos (nth 1 *p2dwg-replacement-validation*) 2 6)
                "|ROTATION=" (rtos rotation 2 6)
                "|POSITION_ERROR=" (rtos (nth 2 *p2dwg-replacement-validation*) 2 6)
                "|COVERAGE=" (rtos (nth 5 *p2dwg-replacement-validation*) 2 6)))
            result
          )
          (progn
            (${p}-batch-log
              (strcat "FAILED: AutoCAD did not create a verified Block Reference on layer "
                layer-name "|" block-asset-id "|" block-name))
            nil
          )
        )
      )
    )
  )
)

(defun ${p}-write-replacement-xdata (entity stable-id role source-layer archive-layer block-handle block-asset-id mapping-rule status / data updated block-data)
  (if (and entity (or (tblsearch "APPID" "PIDMAPLINK") (regapp "PIDMAPLINK")))
    (progn
      ; Supplying one app replaces that app's XData; omitted apps are preserved.
      (setq data (entget entity))
      (setq block-data
        (if (handent block-handle) (entget (handent block-handle)) nil))
      (setq updated
        (append data
          (list
            (list -3
              (list
                "PIDMAPLINK"
                (cons 1000 stable-id)
                (cons 1000 role)
                (cons 1000 source-layer)
                (cons 1000 archive-layer)
                (cons 1000 block-handle)
                (cons 1000 block-asset-id)
                (cons 1000 mapping-rule)
                (cons 1000 status)
                (cons 1040 (if (assoc 41 block-data) (cdr (assoc 41 block-data)) 1.0))
                (cons 1040 (if (assoc 42 block-data) (cdr (assoc 42 block-data)) 1.0))
                (cons 1040 (if (assoc 50 block-data) (cdr (assoc 50 block-data)) 0.0))
                (cons 1010 (if (assoc 10 block-data) (cdr (assoc 10 block-data)) '(0.0 0.0 0.0)))
                (cons 1000 (if (assoc 2 block-data) (cdr (assoc 2 block-data)) ""))
                (cons 1000 (if (assoc 8 block-data) (cdr (assoc 8 block-data)) ""))
                (cons 1000 "PENDING_REOPEN")
              )
            )
          )
        )
      )
      (and (entmod updated) (entupd entity))
    )
    nil
  )
)

(defun ${p}-write-source-handle-links (block-reference handles / data payload updated)
  (setq data (entget block-reference))
  (setq payload (${p}-link-payload block-reference))
  (if payload
    (progn
      (setq payload
        (append
          (vl-remove-if '(lambda (pair) (and (listp pair) (= (car pair) 1005))) payload)
          (mapcar '(lambda (handle) (cons 1005 handle)) handles)))
      (and (entmod (append data (list (list -3 payload)))) T))
    nil)
)

(defun ${p}-current-overlay-valid-p (selection block-reference target-layer rotation validation / source-bounds block-bounds data sw sh bw bh tolerance center-error coverage)
  (setq source-bounds (${p}-selection-bounds selection))
  (setq block-bounds (${p}-selection-bounds (ssadd block-reference)))
  (setq data (entget block-reference))
  (if (and source-bounds block-bounds data validation)
    (progn
      (setq sw (- (nth 2 source-bounds) (nth 0 source-bounds)))
      (setq sh (- (nth 3 source-bounds) (nth 1 source-bounds)))
      (setq bw (- (nth 2 block-bounds) (nth 0 block-bounds)))
      (setq bh (- (nth 3 block-bounds) (nth 1 block-bounds)))
      (if (and (> sw 0.0001) (> sh 0.0001) (> bw 0.0001) (> bh 0.0001))
        (progn
          (setq tolerance (max 0.5 (* 0.01 (max sw sh))))
          (setq center-error
            (distance (${p}-bounds-center source-bounds)
              (${p}-bounds-center block-bounds)))
          (setq coverage (* (/ (min sw bw) (max sw bw)) (/ (min sh bh) (max sh bh))))
          (and
            (= (strcase (cdr (assoc 0 data))) "INSERT")
            (= (strcase (cdr (assoc 8 data))) (strcase target-layer))
            (equal (if (assoc 41 data) (cdr (assoc 41 data)) 1.0) (nth 1 validation) 0.000001)
            (equal (if (assoc 42 data) (cdr (assoc 42 data)) 1.0) (nth 1 validation) 0.000001)
            (equal (if (assoc 43 data) (cdr (assoc 43 data)) 1.0) 1.0 0.000001)
            (equal (if (assoc 50 data) (cdr (assoc 50 data)) 0.0) rotation 0.000001)
            (<= center-error tolerance)
            (<= (/ (abs (- bw sw)) sw) 0.05)
            (<= (/ (abs (- bh sh)) sh) 0.05)
            (>= coverage 0.90)))
        nil))
    nil)
)

(defun ${p}-auto-match-archive-suffix (category)
  (cond
    ((= (strcase category) "EQUIPMENT") "EQUIP")
    ((= (strcase category) "INSTRUMENT") "INST")
    ((= (strcase category) "INLINE COMPONENT") "PIPE_INLINE")
    (T nil)
  )
)

(defun ${p}-auto-xdata-group-p (pair)
  (and
    (= (car pair) -3)
    (vl-some
      '(lambda (entry)
         (and (listp entry)
              (= (type (car entry)) 'STR)
              (= (strcase (car entry)) "P2DWGAUTO")))
      (cdr pair)))
)

(defun ${p}-write-auto-match-xdata
       (entity candidate-id source-layer archive-layer block-handle block-asset-id target-layer / data updated)
  (if (and entity
           (entget entity)
           (or (tblsearch "APPID" "P2DWGAUTO") (regapp "P2DWGAUTO")))
    (progn
      (setq data (entget entity '("*")))
      (setq updated (vl-remove-if '${p}-auto-xdata-group-p data))
      (setq updated
        (append updated
          (list
            (list -3
              (list "P2DWGAUTO"
                (cons 1000 "AUTO_GEOMETRY_MATCH_V1")
                (cons 1000 candidate-id)
                (cons 1000 source-layer)
                (cons 1000 archive-layer)
                (cons 1000 block-handle)
                (cons 1000 block-asset-id)
                (cons 1000 target-layer)
                (cons 1070 *p2dwg-source-page*)))))
      )
      (if (entmod updated)
        (progn (entupd entity) T)
        nil))
    nil)
)

(defun ${p}-archive-auto-matched-source
       (selection candidate-id category block-reference block-asset-id target-layer rotation /
        suffix archive-layer archive-record archive-created source-layers snapshots index
        entity data source-layer updated block-data validation success archive-final snapshot)
  (setq suffix (${p}-auto-match-archive-suffix category)
        archive-layer (if suffix (strcat "PDF_DONE_" suffix) nil)
        archive-record
          (if (and archive-layer (tblobjname "LAYER" archive-layer))
            (entget (tblobjname "LAYER" archive-layer)) nil)
        archive-created nil source-layers nil snapshots nil
        success T validation *p2dwg-replacement-validation*
        block-data (if block-reference (entget block-reference) nil))
  (if (and
        archive-layer
        (= (strcase *p2dwg-scale-status*) "VERIFIED")
        (> (sslength selection) 0)
        block-data
        (= (strcase (if (assoc 0 block-data) (cdr (assoc 0 block-data)) "")) "INSERT")
        (= (strcase (if (assoc 8 block-data) (cdr (assoc 8 block-data)) "")) (strcase target-layer))
        (= (if (assoc 62 block-data) (cdr (assoc 62 block-data)) 256) 256)
        (= (strcase (if (assoc 6 block-data) (cdr (assoc 6 block-data)) "BYLAYER")) "BYLAYER")
        (= (if (assoc 370 block-data) (cdr (assoc 370 block-data)) -1) -1)
        (not (assoc 420 block-data))
        (not (assoc 430 block-data))
        validation
        (car validation)
        (${p}-current-overlay-valid-p selection block-reference target-layer rotation validation))
    (progn
      (setq index 0)
      (while (and success (< index (sslength selection)))
        (setq entity (ssname selection index)
              data (entget entity '("*"))
              source-layer (if (assoc 8 data) (cdr (assoc 8 data)) nil))
        (if (or (null data)
              (and (/= (strcase source-layer) "0")
                   (not (${p}-pdf-source-layer-p source-layer)))
                (null (tblsearch "LAYER" source-layer)))
          (setq success nil)
          (progn
            (setq snapshots (cons (list entity data source-layer) snapshots))
            (if (not (member source-layer source-layers))
              (setq source-layers (append source-layers (list source-layer)))))
        )
        (setq index (1+ index)))
      (if (or (not success) (null source-layers))
        (setq success nil))
      (if success
        (progn
          (if (not (${p}-ensure-archive-layer (car source-layers) archive-layer))
            (setq success nil)
            (if (null archive-record) (setq archive-created T)))
          (foreach snapshot snapshots
            (if success
              (progn
                (setq entity (car snapshot)
                      data (cadr snapshot)
                      source-layer (caddr snapshot)
                      updated (${p}-put-group 8 archive-layer data))
                (if (or
                      (not (entmod updated))
                      (not (${p}-write-auto-match-xdata
                        entity candidate-id source-layer archive-layer
                        (cdr (assoc 5 block-data)) block-asset-id target-layer))
                      (/= (strcase (cdr (assoc 8 (entget entity)))) (strcase archive-layer)))
                  (setq success nil)))))
          (if success
            (progn
              (setq archive-final (${p}-set-layer-state archive-layer nil T))
              (if (not archive-final) (setq success nil))))))
      (if success
        (${p}-batch-log
          (strcat "AUTO_SOURCE_ARCHIVED|candidate=" candidate-id
            "|BLOCK_ASSET=" block-asset-id
            "|SOURCE_HANDLES=" (vl-princ-to-string
              (mapcar '(lambda (entry) (cdr (assoc 5 (cadr entry)))) snapshots))
            "|SOURCE_LAYERS=" (vl-princ-to-string source-layers)
            "|ARCHIVE_LAYER=" archive-layer
            "|TARGET_LAYER=" target-layer
            "|ATTRIBUTES=PENDING_EDE|VALIDATION=PASS"))
        (progn
          (if snapshots (${p}-restore-source-snapshot snapshots))
          (if archive-record
            (entmod archive-record)
            (if (and archive-created (tblobjname "LAYER" archive-layer))
              (entdel (tblobjname "LAYER" archive-layer)))
          )
          (${p}-batch-log
            (strcat "AUTO_SOURCE_ARCHIVE_FAILED|candidate=" candidate-id
              "|REASON=VALIDATION_OR_LAYER_TRANSACTION_FAILED|SOURCE=VISIBLE"))))
      success)
    (progn
      (${p}-batch-log
        (strcat "AUTO_SOURCE_ARCHIVE_FAILED|candidate=" candidate-id
          "|REASON=BLOCK_OR_SOURCE_NOT_VALIDATED|SOURCE=VISIBLE"))
      nil))
)

(defun ${p}-write-replacement-log (stable-id item-tag source-handles block-handle
                                                source-layer source-layers archive-layer block-asset-id
                                                scale rotation validation / log-handle)
  (if (not *p2dwg-entity-map-path*)
    nil
    (progn
      (setq log-handle (open *p2dwg-entity-map-path* "a"))
      (if (null log-handle)
        nil
        (progn
          (write-line
            (strcat
              "REPLACEMENT|STABLE_ID=" stable-id
              "|ITEM_TAG=" (vl-string-translate "|" "_" item-tag)
              "|SOURCE_HANDLES=" (vl-princ-to-string source-handles)
              "|BLOCK_HANDLE=" block-handle
              "|SOURCE_LAYER=" source-layer
              "|SOURCE_LAYERS=" (vl-princ-to-string source-layers)
              "|ARCHIVE_LAYER=" archive-layer
              "|BLOCK_ASSET_ID=" block-asset-id
              "|MAPPING_RULE=OPERATOR_CONFIRMED_GEOMETRY_FIT_V1"
              "|VALIDATION=PASS|FINAL_VALIDATION=PENDING_REOPEN"
              "|SCALE=" (rtos scale 2 8)
              "|ROTATION=" (rtos rotation 2 8)
              "|POSITION_ERROR=" (rtos (nth 2 validation) 2 8)
              "|BOUNDS_COVERAGE=" (rtos (nth 5 validation) 2 8))
            log-handle)
          (close log-handle)
          T
        )
      )
    )
  )
)

(defun ${p}-restore-source-snapshot (snapshots / entry entity restored)
  (setq restored T)
  (foreach entry snapshots
    (setq entity (car entry))
    (if (not (entget entity))
      (setq restored nil)
      (progn
        ; An omitted regapp does not erase its XData. Clear only our linkage
        ; apps before restoring the complete pre-transaction entity snapshot.
        (entmod
          (append (entget entity)
            (list (list -3 (list "PIDMAPLINK"))
                  (list -3 (list "P2DWGAUTO")))))
        (if (not (entmod (cadr entry))) (setq restored nil))))
    (if (entget entity) (entupd entity))
  )
  restored
)

(defun ${p}-archive-replaced-source-worker (selection source-layer stable-id item-tag
                                                 block-reference block-asset-id target-layer
                                                 rotation mask-reference / suffix archive-layer source-layers
                                                 source-records archive-record archive-created index entity data
                                                 handle handles snapshots updated moved success validation scale
                                                 source-final archive-final layer-entry original-source-layer)
  (setq suffix (${p}-source-layer-suffix source-layer))
  (setq archive-layer (if suffix (strcat "PDF_DONE_" suffix) nil))
  (setq validation *p2dwg-replacement-validation*)
  (setq archive-record
    (if (and archive-layer (tblobjname "LAYER" archive-layer))
      (entget (tblobjname "LAYER" archive-layer))
      nil
    )
  )
  (setq archive-created nil snapshots nil handles nil moved nil
    source-layers nil source-records nil success T)
  (if (and
        suffix
        stable-id
        block-reference
        (entget block-reference)
        (= (strcase (cdr (assoc 0 (entget block-reference)))) "INSERT")
        (= (strcase (cdr (assoc 8 (entget block-reference)))) (strcase target-layer))
        (${p}-source-target-layer-compatible-p source-layer target-layer)
        validation
        (car validation)
        (${p}-current-overlay-valid-p selection block-reference target-layer rotation validation)
        (> (sslength selection) 0)
      )
    (progn
      (setq index 0)
      (while (and success (< index (sslength selection)))
        (setq entity (ssname selection index))
        (setq data (entget entity '("*")))
        (setq handle (if data (cdr (assoc 5 data)) nil))
        (setq original-source-layer (if data (cdr (assoc 8 data)) nil))
        (if (or
              (null data)
              (null handle)
              (not (${p}-pdf-source-layer-p original-source-layer))
              (null (tblsearch "LAYER" original-source-layer)))
          (setq success nil)
          (progn
            (setq snapshots (cons (list entity data original-source-layer) snapshots))
            (setq handles (cons handle handles))
            (if (not (member original-source-layer source-layers))
              (progn
                (setq source-layers (append source-layers (list original-source-layer)))
                (setq source-records
                  (cons
                    (list original-source-layer
                      (entget (tblobjname "LAYER" original-source-layer)))
                    source-records))
              )
            )
          )
        )
        (setq index (1+ index))
      )
      (if (or (not success) (null source-records))
        (setq success nil)
      )
      (if success
        (progn
          (foreach layer-entry source-records
            (if (not (${p}-set-layer-state (car layer-entry) T nil))
              (setq success nil)
            )
          )
          (if success
            (progn
              (if (not
                    (${p}-ensure-archive-layer
                      (car (car source-records)) archive-layer))
                (setq success nil)
                (if (null archive-record) (setq archive-created T))
              )
            )
          )
        )
      )
      (setq index 0)
      (while (and success (< index (sslength selection)))
        (setq entity (ssname selection index))
        (setq data (entget entity))
        (setq updated (${p}-put-group 8 archive-layer data))
        (if (not (entmod updated))
          (setq success nil)
          (progn
            (entupd entity)
            (setq moved (cons entity moved))
          )
        )
        (setq index (1+ index))
      )
      (setq handles (reverse handles))
      (setq scale (nth 1 validation))
      (if success
        (progn
          (setq index 0)
          (while (and success (< index (sslength selection)))
            (setq entity (ssname selection index))
            (setq original-source-layer
              (${p}-snapshot-source-layer entity snapshots))
            (if (not
                  (${p}-write-replacement-xdata
                    entity stable-id "SOURCE" original-source-layer archive-layer
                    (cdr (assoc 5 (entget block-reference))) block-asset-id
                    "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "PASS"))
              (setq success nil)
            )
            (setq index (1+ index))
          )
          (if success
            (if (not
                  (${p}-write-replacement-xdata
                    block-reference stable-id "BLOCK" source-layer archive-layer
                    (cdr (assoc 5 (entget block-reference))) block-asset-id
                    "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "PASS"))
              (setq success nil)
            )
          )
          (if (and success mask-reference)
            (if (not
                  (${p}-write-replacement-xdata
                    mask-reference stable-id "MASK" source-layer archive-layer
                    (cdr (assoc 5 (entget block-reference))) block-asset-id
                    "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "PASS"))
              (setq success nil)))
          (if success
            (if (not (${p}-write-source-handle-links block-reference handles))
              (setq success nil)))
          (if success
            (progn
              (setq source-final T)
              (foreach layer-entry source-records
                (if (not (${p}-set-layer-state (car layer-entry) T T))
                  (setq source-final nil)
                )
              )
              (setq archive-final (${p}-set-layer-state archive-layer nil T))
              (if (not (and source-final archive-final)) (setq success nil))
            )
          )
          (if success
            (if (not
                  (${p}-write-replacement-log
                    stable-id item-tag handles
                    (cdr (assoc 5 (entget block-reference)))
                    source-layer source-layers archive-layer block-asset-id
                    scale rotation validation))
              (setq success nil)
            )
          )
        )
      )
      (if success
        (progn
          (${p}-batch-log
            (strcat "SOURCE_ARCHIVED|" stable-id "|" source-layer "|" archive-layer
              "|SOURCE_LAYERS=" (vl-princ-to-string source-layers)
              "|ENTITIES=" (itoa (length handles))))
          (setq *p2dwg-archive-created-doc* (vla-get-ActiveDocument (vlax-get-acad-object)))
          T
        )
        (progn
          (${p}-restore-source-snapshot snapshots)
          (foreach layer-entry source-records
            (if (cadr layer-entry) (entmod (cadr layer-entry)))
          )
          (if archive-created
            (if (tblobjname "LAYER" archive-layer)
              (vl-catch-all-apply
                'vla-delete
                (list (vlax-ename->vla-object (tblobjname "LAYER" archive-layer))))
            )
            (if archive-record (entmod archive-record))
          )
          (${p}-write-replacement-xdata
            block-reference stable-id "BLOCK" source-layer archive-layer
            (cdr (assoc 5 (entget block-reference))) block-asset-id
            "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "NEEDS_REVIEW")
          (${p}-batch-log
            (strcat "FAILED: source archive transaction rolled back|" stable-id "|" source-layer))
          nil
        )
      )
    )
    (progn
      (${p}-batch-log
        (strcat "FAILED: replacement validation incomplete|" (if stable-id stable-id "-")
          "|" (if source-layer source-layer "-") "|" target-layer))
      nil
    )
  )
)

(defun ${p}-stable-id-in-use-p (stable-id / entity payload found)
  (setq entity (entnext) found nil)
  (while (and entity (not found))
    (setq payload (${p}-link-payload entity))
    (if (and payload (>= (length payload) 9)
             (= (cdr (nth 1 payload)) stable-id)
             (= (cdr (nth 2 payload)) "BLOCK")
             (= (cdr (nth 8 payload)) "PASS"))
      (setq found T))
    (setq entity (entnext entity)))
  found
)

(defun ${p}-archive-replaced-source (selection source-layer stable-id item-tag
                                                block-reference block-asset-id target-layer rotation
                                                mask-reference / index entity snapshots result archive-layer
                                                source-records archive-record source-restored layer-entity
                                                layer-name layer-record)
  ; Catch cancellation and unexpected ActiveX errors as well as explicit failures.
  ; Snapshot only the selected source entities; never UNDO an entire drawing.
  (setq snapshots nil source-records nil index 0)
  (setq archive-layer (strcat "PDF_DONE_" (${p}-source-layer-suffix source-layer)))
  (setq archive-record
    (if (tblobjname "LAYER" archive-layer)
      (entget (tblobjname "LAYER" archive-layer)) nil))
  (while (< index (sslength selection))
    (setq entity (ssname selection index))
    (setq layer-name (cdr (assoc 8 (entget entity))))
    (setq layer-record
      (if (and layer-name (tblobjname "LAYER" layer-name))
        (entget (tblobjname "LAYER" layer-name))
        nil))
    (setq snapshots (cons (list entity (entget entity '("*")) layer-name) snapshots))
    (if (and layer-name layer-record
             (not (member layer-name (mapcar 'car source-records))))
      (setq source-records (cons (list layer-name layer-record) source-records))
    )
    (setq index (1+ index)))
  (if (${p}-stable-id-in-use-p stable-id)
    (progn
      (prompt "\\nThis EDE StableID already has a replacement in this drawing. Source stays visible; review the duplicate.")
      nil)
    (progn
      (setq result
        (vl-catch-all-apply
          '${p}-archive-replaced-source-worker
          (list selection source-layer stable-id item-tag block-reference
            block-asset-id target-layer rotation mask-reference)))
       (if (or (vl-catch-all-error-p result) (null result))
         (progn
           (foreach layer-record source-records
             (${p}-set-layer-state (car layer-record) T nil))
          (if (tblsearch "LAYER" archive-layer)
            (${p}-set-layer-state archive-layer T nil))
          (setq source-restored (${p}-restore-source-snapshot snapshots))
           (if source-restored
             (progn
               (foreach layer-record source-records
                 (if (cadr layer-record) (entmod (cadr layer-record))))
              (if archive-record
                (entmod archive-record)
                (if (and (setq layer-entity (tblobjname "LAYER" archive-layer))
                         (null (ssget "_X" (list (cons 8 archive-layer)))))
                  (vl-catch-all-apply 'vla-delete
                    (list (vlax-ename->vla-object layer-entity))))))
             (progn
               (foreach layer-record source-records
                 (${p}-set-layer-state (car layer-record) T nil))
              (${p}-set-layer-state archive-layer T nil)))
          (${p}-write-replacement-xdata
            block-reference stable-id "BLOCK" source-layer archive-layer
            (cdr (assoc 5 (entget block-reference))) block-asset-id
            "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "NEEDS_REVIEW")
          (if mask-reference
            (${p}-write-replacement-xdata
              mask-reference stable-id "MASK" source-layer archive-layer
              (cdr (assoc 5 (entget block-reference))) block-asset-id
              "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "NEEDS_REVIEW"))
          (${p}-batch-log
            (strcat "NEEDS_REVIEW|ARCHIVE_ROLLBACK|" stable-id
              (if (vl-catch-all-error-p result)
                (strcat "|" (vl-catch-all-error-message result)) "")))
          (if (not source-restored)
            (p2dwg-raise "Archive rollback needs review. Source and archive layers remain visible; this page was not saved."))
          nil)
        T))
  )
)

(defun ${p}-ede-type-compatible-p (source-layer record-type / suffix)
  (setq suffix (${p}-source-layer-suffix source-layer))
  (cond
    ((= suffix "EQUIP") (wcmatch (strcase record-type) "EQUIPMENT*,PACKAGE"))
    ((= suffix "INST") (wcmatch (strcase record-type) "INSTRUMENT*"))
    ((= suffix "PIPE_INLINE") (= (strcase record-type) "VALVE"))
    ((= suffix "TEXT") (= (strcase record-type) "ITEM NOTE"))
    (T nil))
)

(defun ${p}-choose-ede-record (source-layer / options index entry choice)
  (setq options
    (vl-remove-if-not
      '(lambda (entry)
         (and (= (nth 3 entry) *p2dwg-source-page*)
              (${p}-ede-type-compatible-p source-layer (nth 2 entry))))
      *p2dwg-ede-records*
    )
  )
  (if options
    (progn
      (prompt "\\nEDE records for this PDF page:")
      (setq index 1)
      (foreach entry options
        (prompt
          (strcat "\\n  " (itoa index) ") " (nth 1 entry) " — " (nth 2 entry)
            " [StableID " (nth 0 entry) "]"))
        (setq index (1+ index))
      )
      (prompt "\\n  0) Keep source visible; do not archive")
      (initget 4)
      (setq index (getint "\\nChoose the matching EDE record: "))
      (if (and index (> index 0) (<= index (length options)))
        (nth (1- index) options)
        nil
      )
    )
    (progn
      (prompt "\\nNo EDE StableID is available for this source PDF page. Source remains visible; it will not be archived.")
      nil
    )
  )
)

(defun ${p}-set-pdf-layer-prefix-visibility (prefix visible / record name count)
  (setq record (tblnext "LAYER" T) count 0)
  (while record
    (setq name (cdr (assoc 2 record)))
    (if (and name
             (>= (strlen name) (strlen prefix))
             (= (strcase (substr name 1 (strlen prefix))) (strcase prefix)))
      (progn
        (if (${p}-set-layer-state name visible T)
          (setq count (1+ count))
        )
      )
    )
    (setq record (tblnext "LAYER"))
  )
  count
)

(defun ${p}-prepare-source-layer-review (/ record name)
  (setq record (tblnext "LAYER" T))
  (while record
    (setq name (cdr (assoc 2 record)))
    (if (and name
             (>= (strlen name) 4)
             (= (strcase (substr name 1 4)) "PDF_")
             (/= (substr (strcase name) 1 9) "PDF_DONE_"))
      (${p}-set-layer-state name T nil)
    )
    (setq record (tblnext "LAYER"))
  )
  T
)

(defun ${p}-finalize-source-layer-states (/ record name)
  (setq record (tblnext "LAYER" T))
  (while record
    (setq name (cdr (assoc 2 record)))
    (cond
      ((and name
            (>= (strlen name) 9)
            (= (strcase (substr name 1 9)) "PDF_DONE_"))
        (if (not (${p}-set-layer-state name nil T))
          (p2dwg-raise (strcat "Could not hide and lock archived source layer " name "."))
        )
      )
      ((and name
            (>= (strlen name) 4)
            (= (strcase (substr name 1 4)) "PDF_"))
        (if (not (${p}-set-layer-state name T T))
          (p2dwg-raise (strcat "Could not keep pending source layer visible and locked: " name "."))
        )
      )
    )
    (setq record (tblnext "LAYER"))
  )
  T
)

(defun ${p}-link-payload (entity / data link)
  (setq data (entget entity '("PIDMAPLINK")))
  (setq link (assoc -3 data))
  (if (and link (listp (cadr link))
           (= (strcase (car (cadr link))) "PIDMAPLINK"))
    (cadr link)
    nil
  )
)

(defun ${p}-restore-replacement (stable-id remove-generated / entity payload role source-layer
                                              archive-layer block-handle sources blocks
                                              masks restored data updated value text-restored
                                              source-payload entity-source-layer)
  (setq text-restored (${p}-rollback-text-links stable-id remove-generated))
  (setq entity (entnext) sources nil blocks nil masks nil)
  (while entity
    (setq payload (${p}-link-payload entity))
    (if (and payload
             (>= (length payload) 9)
             (= (cdr (nth 1 payload)) stable-id)
             (= (cdr (nth 8 payload)) "PASS"))
      (progn
        (setq role (cdr (nth 2 payload)))
        (cond
          ((= role "SOURCE") (setq sources (cons entity sources)))
          ((= role "BLOCK") (setq blocks (cons entity blocks)))
          ((= role "MASK") (setq masks (cons entity masks)))
        )
      )
    )
    (setq entity (entnext entity))
  )
  (if sources
    (progn
      (setq payload
        (if blocks
          (${p}-link-payload (car blocks))
          (${p}-link-payload (car sources))))
      (setq source-layer (cdr (nth 3 payload)))
      (setq archive-layer (cdr (nth 4 payload)))
      (foreach entity sources
        (setq source-payload (${p}-link-payload entity))
        (setq entity-source-layer (cdr (nth 3 source-payload)))
        (${p}-set-layer-state entity-source-layer T nil))
      (${p}-set-layer-state archive-layer T nil)
      (setq restored T)
      (foreach entity sources
        (setq source-payload (${p}-link-payload entity))
        (setq entity-source-layer (cdr (nth 3 source-payload)))
        (setq data (entget entity))
        (setq updated (${p}-put-group 8 entity-source-layer data))
        (if (not (and (entmod updated)
                      (${p}-write-replacement-xdata
                        entity stable-id "SOURCE" entity-source-layer archive-layer
                        (cdr (nth 5 source-payload)) (cdr (nth 6 source-payload))
                        (cdr (nth 7 source-payload)) "ROLLED_BACK")))
          (setq restored nil)
        )
      )
      (if restored
        (progn
          (if remove-generated
            (progn
              ; These are only the generated objects explicitly linked to this
              ; StableID. Source entities are never deleted.
              (foreach entity masks (if (entget entity) (entdel entity)))
              (foreach entity blocks (if (entget entity) (entdel entity))))
            (foreach entity (append blocks masks)
              (setq role (if (member entity masks) "MASK" "BLOCK"))
              (${p}-write-replacement-xdata
                entity stable-id role source-layer archive-layer
                (cdr (nth 5 payload)) (cdr (nth 6 payload))
                (cdr (nth 7 payload)) "NEEDS_REVIEW")))
          (foreach entity sources
            (setq source-payload (${p}-link-payload entity))
            (${p}-set-layer-state
              (cdr (nth 3 source-payload)) T T))
          (${p}-set-layer-state archive-layer nil T)
          (prompt
            (strcat "\\nRollback complete for StableID " stable-id
              ". Source entities are visible again; no PDF source was deleted."))
          T
        )
        (progn
          (foreach entity sources
            (setq source-payload (${p}-link-payload entity))
            (${p}-set-layer-state
              (cdr (nth 3 source-payload)) T nil))
          (${p}-set-layer-state archive-layer T nil)
          (prompt
            (strcat "\\nRollback needs review for StableID " stable-id
              ". Both source and archive layers were left visible."))
          nil
        )
      )
    )
    (progn
      (if text-restored
        (prompt (strcat "\\nText rollback complete for StableID " stable-id "."))
        (prompt (strcat "\\nNo archived source records found for StableID " stable-id ".")))
      text-restored
    )
  )
)

(defun c:P2DWGROLLBACKREPLACEMENT (/ stable-id answer)
  (setq stable-id (strcase (getstring T "\\nEnter the 32-character EDE StableID to restore: ")))
  (if (= (strlen stable-id) 32)
    (progn
      (initget "Yes No")
      (setq answer (getkword "\\nRestore its PDF source and remove ONLY its linked generated block/mask (including any edits to those objects)? [Yes/No] <No>: "))
      (if (= (strcase (if answer answer "No")) "YES")
        (${p}-restore-replacement stable-id T)))
    (prompt "\\nA 32-character StableID is required. Nothing was changed.")
  )
  (princ)
)

(defun ${p}-persisted-replacement-valid-p (block-reference / payload data source-layer archive-layer
                                                       source-state archive-state target-state
                                                        stable-id source-handle source source-payload count valid pair
                                                        entity-source-layer)
  (setq payload (${p}-link-payload block-reference))
  (setq data (entget block-reference))
  (setq valid (and data payload (>= (length payload) 16)))
  (if valid
    (progn
      (setq stable-id (cdr (nth 1 payload)))
      (setq source-layer (cdr (nth 3 payload)))
      (setq archive-layer (cdr (nth 4 payload)))
      (setq archive-state (tblsearch "LAYER" archive-layer))
      (setq target-state (tblsearch "LAYER" (cdr (nth 14 payload))))
      (setq valid
        (and
          (= (cdr (nth 2 payload)) "BLOCK")
          (= (cdr (nth 8 payload)) "PASS")
          (= (cdr (assoc 0 data)) "INSERT")
          (= (cdr (assoc 5 data)) (cdr (nth 5 payload)))
          (= (cdr (assoc 2 data)) (cdr (nth 13 payload)))
          (= (strcase (cdr (assoc 8 data))) (strcase (cdr (nth 14 payload))))
          (${p}-source-target-layer-compatible-p source-layer (cdr (assoc 8 data)))
          (equal (if (assoc 41 data) (cdr (assoc 41 data)) 1.0) (cdr (nth 9 payload)) 0.000001)
          (equal (if (assoc 42 data) (cdr (assoc 42 data)) 1.0) (cdr (nth 10 payload)) 0.000001)
          (equal (if (assoc 43 data) (cdr (assoc 43 data)) 1.0) 1.0 0.000001)
          (equal (if (assoc 50 data) (cdr (assoc 50 data)) 0.0) (cdr (nth 11 payload)) 0.000001)
          (equal (cdr (assoc 10 data)) (cdr (nth 12 payload)) 0.000001)
          (or (null (assoc 60 data)) (= (cdr (assoc 60 data)) 0))
          archive-state target-state
          (< (cdr (assoc 62 archive-state)) 0)
          (= 4 (logand 5 (cdr (assoc 70 archive-state))))
          (> (cdr (assoc 62 target-state)) 0)
          (= 0 (logand 1 (cdr (assoc 70 target-state))))
        ))
      (setq count 0)
      (foreach pair payload
        (if (and (listp pair) (= (car pair) 1005))
          (progn
            (setq count (1+ count))
            (setq source (handent (cdr pair)))
            (setq source-payload (if source (${p}-link-payload source) nil))
            (setq entity-source-layer
              (if source-payload (cdr (nth 3 source-payload)) nil))
            (setq source-state
              (if entity-source-layer (tblsearch "LAYER" entity-source-layer) nil))
            (if (not
                  (and source source-payload
                    (= (cdr (nth 1 source-payload)) stable-id)
                    (= (cdr (nth 2 source-payload)) "SOURCE")
                    (${p}-pdf-source-layer-p entity-source-layer)
                    source-state
                    (> (cdr (assoc 62 source-state)) 0)
                    (= 4 (logand 5 (cdr (assoc 70 source-state))))
                    (= (cdr (nth 5 source-payload)) (cdr (assoc 5 data)))
                    (= (cdr (nth 8 source-payload)) "PASS")
                    (= (strcase (cdr (assoc 8 (entget source)))) (strcase archive-layer))))
              (setq valid nil)))))
      (and valid (> count 0)))
    nil)
)

(defun c:P2DWGVALIDATEREOPEN (/ answer entity next-entity payload stable-id updated passed failed validation-result)
  (cond
    ((or (/= (getvar "DWGTITLED") 1) (/= (getvar "DBMOD") 0))
      (prompt "\\nSave the DWG, close it, and reopen it without editing before this validation. No source was purged."))
    ((and (boundp '*p2dwg-archive-created-doc*)
          (equal *p2dwg-archive-created-doc* (vla-get-ActiveDocument (vlax-get-acad-object))))
      (prompt "\\nThis is still the working document used for replacement. Close and reopen the saved DWG first."))
    (T
      (initget "Yes No")
      (setq answer (getkword "\\nHave you saved, CLOSED, and REOPENED this DWG? [Yes/No] <No>: "))
      (if (= (strcase (if answer answer "No")) "YES")
        (progn
          (setq passed 0 failed 0 entity (entnext))
          (while entity
            (setq next-entity (entnext entity))
            (setq payload (${p}-link-payload entity))
            (if (and payload (>= (length payload) 9)
                     (= (cdr (nth 2 payload)) "BLOCK")
                     (= (cdr (nth 8 payload)) "PASS"))
              (progn
                (setq stable-id (cdr (nth 1 payload)))
                (setq validation-result
                  (vl-catch-all-apply '${p}-persisted-replacement-valid-p (list entity)))
                (if (and (not (vl-catch-all-error-p validation-result)) validation-result)
                  (progn
                    (setq updated
                      (subst (cons 1000 "REOPEN_PASS") (nth 15 payload) payload))
                    (if (entmod (append (entget entity) (list (list -3 updated))))
                      (progn
                        (setq passed (1+ passed))
                        (prompt (strcat "\\nREOPEN_VALIDATION_PASS|" stable-id)))
                      (setq failed (1+ failed))))
                  (progn
                    (setq failed (1+ failed))
                    (${p}-restore-replacement stable-id nil)
                    (prompt (strcat "\\nNEEDS_REVIEW|REOPEN_VALIDATION_FAILED|" stable-id
                      "|Available source restored; CAD retained for review."))))))
            (setq entity next-entity))
          (${p}-validate-text-reopen)
          (prompt
            (strcat "\\nReopen validation: " (itoa passed) " passed, " (itoa failed)
              " need review. Source archives are retained; no purge is available."))))))
  (princ)
)

(defun c:P2DWGSOURCEVIEW ()
  (${p}-set-pdf-layer-prefix-visibility "PDF_" T)
  (prompt "\\nSource view: archived PDF source geometry is visible; CAD objects and pending source remain.")
  (princ)
)

(defun c:P2DWGMAPPEDVIEW ()
  (${p}-set-pdf-layer-prefix-visibility "PDF_" T)
  (${p}-set-pdf-layer-prefix-visibility "PDF_DONE_" nil)
  (${p}-set-layer-state "PID-REVIEW-CLOUD" nil T)
  (prompt "\\nMapped view: completed PDF source is hidden; approved CAD and pending source remain visible.")
  (princ)
)

(defun c:P2DWGREVIEWVIEW ()
  (${p}-set-pdf-layer-prefix-visibility "PDF_" T)
  (${p}-set-pdf-layer-prefix-visibility "PDF_DONE_" nil)
  (${p}-set-layer-state "PID-REVIEW-CLOUD" T T)
  (prompt "\\nReview view: approved CAD, pending PDF source, and review clouds are visible.")
  (princ)
)

(defun ${p}-make-valve-wipeout (boundary block-reference layer / vertices point polyline result wipeout data center scale-x scale-y rotation x y)
  (setq data (entget block-reference))
  (setq center (cdr (assoc 10 data)))
  (setq scale-x (if (assoc 41 data) (cdr (assoc 41 data)) 1.0))
  (setq scale-y (if (assoc 42 data) (cdr (assoc 42 data)) 1.0))
  (setq rotation (if (assoc 50 data) (cdr (assoc 50 data)) 0.0))
  (setq vertices nil)
  (foreach point boundary
    (setq x (* scale-x (car point)))
    (setq y (* scale-y (cadr point)))
    (setq vertices
      (append vertices
        (list
          (cons 10
            (list
              (+ (car center) (- (* x (cos rotation)) (* y (sin rotation))))
              (+ (cadr center) (+ (* x (sin rotation)) (* y (cos rotation))))
            )
          )
        )
      )
    )
  )
  (if (and (>= (length vertices) 3) (tblsearch "LAYER" layer))
    (progn
      (setq polyline
        (entmakex
          (append
            (list
              '(0 . "LWPOLYLINE")
              '(100 . "AcDbEntity")
              (cons 8 layer)
              '(100 . "AcDbPolyline")
              (cons 90 (length vertices))
              '(70 . 1)
            )
            vertices
          )
        )
      )
      (if polyline
        (progn
          (setvar "WIPEOUTFRAME" 0)
          (setq result
            (vl-catch-all-apply
              'vl-cmdf
              (list "_.WIPEOUT" "_P" polyline "_Y")
            )
          )
          (setq data (entget (entlast)))
          (if (and
                (not (vl-catch-all-error-p result))
                data
                (= (strcase (cdr (assoc 0 data))) "WIPEOUT")
              )
            (progn
              (setq wipeout (entlast))
              (setq result
                (vl-catch-all-apply
                  'vl-cmdf
                  (list "_.DRAWORDER" wipeout "" "_F")
                )
              )
              (if (vl-catch-all-error-p result)
                (progn
                  (if (entget wipeout) (entdel wipeout))
                  (setq wipeout nil)
                )
              )
            )
            (progn
              (if (entget polyline) (entdel polyline))
              (setq wipeout nil)
            )
          )
        )
      )
    )
  )
  wipeout
)

${lT(p)}

(defun ${p}-apply-approved-cad-standards (/ entry name color linetype style style-data style-entity)
  (foreach linetype *p2dwg-approved-linetypes*
    (if (not (${p}-ensure-linetype (car linetype)))
      (p2dwg-raise (strcat "Approved linetype " (car linetype) " could not be loaded."))
      (${p}-batch-log
        (strcat "CAD_LINETYPE_STANDARD_APPLIED|" (car linetype)
          "|PATTERN_LENGTH=" (rtos (caddr linetype) 2 4)
          "|SEGMENTS=" (itoa (length (cadddr linetype)))))
    )
  )
  (foreach entry *p2dwg-approved-layers*
    (${p}-ensure-layer (car entry) (cadr entry) (caddr entry) (cadddr entry))
    (${p}-batch-log
      (strcat "CAD_LAYER_STANDARD_APPLIED|" (car entry)
        "|ACI=" (itoa (cadr entry))
        "|LINETYPE=" (cadddr entry)
        "|LINEWEIGHT=" (itoa (caddr entry))))
  )
  (foreach style *p2dwg-approved-text-styles*
    (if (or (not (${p}-find-text-font (nth 4 style)))
            (and (/= (nth 5 style) "") (not (findfile (nth 5 style)))))
      (p2dwg-raise (strcat "Required approved text font " (nth 4 style) " is missing for " (car style)
        ". Checked AutoCAD search paths and Windows Fonts folders. Font substitution is not allowed.")))
    (setq style-entity (tblobjname "STYLE" (car style)))
    (if style-entity
      (progn
        (setq style-data (entget style-entity))
        (foreach entry (list (cons 40 (nth 1 style)) (cons 41 (nth 2 style))
                            (cons 50 (nth 3 style)) (cons 3 (nth 4 style))
                            (cons 4 (nth 5 style)))
          (setq style-data (${p}-put-group (car entry) (cdr entry) style-data)))
        (if (not (entmod style-data))
          (p2dwg-raise "An existing text style could not be updated to the approved format.")))
      (if (not (entmake
          (list
            '(0 . "STYLE")
            '(100 . "AcDbSymbolTableRecord")
            '(100 . "AcDbTextStyleTableRecord")
            (cons 2 (nth 0 style))
            '(70 . 0)
            (cons 40 (nth 1 style))
            (cons 41 (nth 2 style))
            (cons 50 (nth 3 style))
            '(71 . 0)
            '(42 . 2.5)
            (cons 3 (nth 4 style))
            (cons 4 (nth 5 style))
          )))
        (p2dwg-raise "An approved text style could not be created."))
    )
  )
  (${p}-apply-dimension-standards)
  (setvar "INSUNITS" 4)
  (setvar "MEASUREMENT" 1)
  (setvar "LTSCALE" 1.0)
  (setvar "CELTSCALE" 1.0)
  (setvar "MSLTSCALE" 1)
  (setvar "PSLTSCALE" 0)
)

(defun ${p}-tag-page-entity (entity / data layer-entity layer-data flags result restored)
  (setq data (entget entity))
  (setq layer-entity (if data (tblobjname "LAYER" (cdr (assoc 8 data))) nil))
  (setq layer-data (if layer-entity (entget layer-entity) nil))
  (setq flags (if layer-data (cdr (assoc 70 layer-data)) 0))
  ; Identity writes must work on locked PDF/archived layers without leaving them unlocked.
  (if (= 4 (logand flags 4))
    (if (not (entmod (${p}-put-group 70 (- flags 4) layer-data)))
      (p2dwg-raise "Could not temporarily unlock source layer for page identity.")))
  (setq result (vl-catch-all-apply '${p}-tag-page-entity-unlocked (list entity)))
  (setq restored
    (if (= 4 (logand flags 4)) (entmod layer-data) T))
  (if (not restored)
    (p2dwg-raise "Could not restore source layer lock after page identity."))
  (if (vl-catch-all-error-p result)
    (p2dwg-raise (vl-catch-all-error-message result))
    result)
)

(defun ${p}-tag-page-entity-unlocked (entity / data payloads)
  (if (and entity (or (tblsearch "APPID" "PIDPAGE") (regapp "PIDPAGE")))
    (progn
      (setq data (entget entity '("*")))
      (setq payloads
        (vl-remove-if '(lambda (app) (= (car app) "PIDPAGE"))
          (cdr (assoc -3 data))))
      (setq data (vl-remove-if '(lambda (pair) (= (car pair) -3)) data))
      (and
        (entmod
          (append
            data
            (list
              (cons -3
                (append payloads (list (list
                  "PIDPAGE"
                  (cons 1000 *p2dwg-source-alias*)
                  (cons 1070 *p2dwg-source-page*)
                  (cons 1000 *p2dwg-job-id*)
                  (cons 1000 *p2dwg-source-id*)
                  (cons 1000 *p2dwg-source-hash*)
                  (cons 1000 *p2dwg-source-name*)
                  (cons 1000 *p2dwg-scale-status*)
                  (cons 1040 *p2dwg-effective-scale*)
                )))
              )
            )
          )
        )
        (${p}-job-entity-matches entity)
      )
    )
    nil
  )
)

(defun ${p}-collect-imported-entities (before-entity / entity data entity-type selection)
  (setq selection (ssadd))
  (setq entity (if before-entity (entnext before-entity) (entnext)))
  (while entity
    (setq data (entget entity))
    (setq entity-type (cdr (assoc 0 data)))
    (if (and
          entity-type
          (member (strcase entity-type)
            '("LINE" "LWPOLYLINE" "POLYLINE" "ARC" "CIRCLE" "ELLIPSE"
              "SPLINE" "POINT" "TEXT" "MTEXT" "INSERT" "HATCH" "SOLID"
              "TRACE" "3DFACE" "DIMENSION" "LEADER" "MLEADER" "WIPEOUT"
              "ACAD_PROXY_ENTITY")
          )
          (not (equal (cdr (assoc 67 data)) 1))
        )
      (ssadd entity selection)
    )
    (setq entity (entnext entity))
  )
  (if (> (sslength selection) 0) selection nil)
)

(defun ${p}-tag-review-entity (entity role item category block / data)
  (if (and entity (regapp "PIDREVIEW"))
    (progn
      (setq data (entget entity))
      (entmod
        (append
          data
          (list
            (list
              -3
              (list
                "PIDREVIEW"
                (cons 1000 role)
                (cons 1000 (if item item ""))
                (cons 1000 (if category category ""))
                (cons 1000 (if block block ""))
              )
            )
          )
        )
      )
      (entupd entity)
    )
  )
)

(defun ${p}-batch-log (message / handle)
  (if (and *p2dwg-batch-mode* *p2dwg-batch-log-path*)
    (progn
      (setq handle (open *p2dwg-batch-log-path* "a"))
      (if handle
        (progn
          (write-line message handle)
          (close handle)
        )
      )
    )
  )
)

(defun ${p}-record-mapping (selection status item block-asset-id / index entity data handle entity-type log-handle)
  (if (not (member (strcase status) '(${b})))
    (p2dwg-raise "Invalid CAD entity mapping status; page not saved.")
  )
  (if selection
    (progn
      (if (not *p2dwg-entity-map-path*)
        (p2dwg-raise "Entity mapping log path is unavailable; page not saved.")
      )
      (setq log-handle (open *p2dwg-entity-map-path* "a"))
      (if (null log-handle)
        (p2dwg-raise "Cannot write AUTOCAD_ENTITY_MAP.log. Choose a writable output folder.")
      )
      (setq index 0)
      (while (< index (sslength selection))
        (setq entity (ssname selection index))
        (setq data (entget entity))
        (setq handle (cdr (assoc 5 data)))
        (setq entity-type (cdr (assoc 0 data)))
        (if (or (null handle) (null entity-type))
          (progn
            (close log-handle)
            (p2dwg-raise "An imported entity has no stable handle/type; page not saved.")
          )
        )
        (write-line
          (strcat
            (strcase status) "|" *p2dwg-source-alias* "|"
            (itoa *p2dwg-source-page*) "|" handle "|" entity-type "|"
            (if item (vl-string-translate "|" "_" item) "-") "|"
            (if block-asset-id (vl-string-translate "|" "_" block-asset-id) "-")
          )
          log-handle
        )
        (setq index (1+ index))
      )
      (close log-handle)
    )
  )
  T
)

(defun ${p}-stamp-page (selection / index entity data handle entity-type)
  (if selection
    (progn
      (setq index 0)
      (while (< index (sslength selection))
        (setq entity (ssname selection index))
        (if (not (${p}-tag-page-entity entity))
          (progn
            (setq data (entget entity))
            (setq handle (if data (cdr (assoc 5 data)) "UNKNOWN"))
            (setq entity-type (if data (cdr (assoc 0 data)) "UNKNOWN"))
            (p2dwg-raise
              (strcat "Could not verify source/page identity on imported entity "
                handle " (" entity-type "). Page not saved.")))
        )
        (setq index (1+ index))
      )
      T
    )
    nil
  )
)

(defun ${p}-selection-bounds (selection / index entity low high result
                                           min-x min-y max-x max-y found)
  (setq index 0)
  (setq found nil)
  (while (< index (sslength selection))
    (setq entity (ssname selection index))
    (setq low nil)
    (setq high nil)
    (setq result
      (vl-catch-all-apply
        'vla-getboundingbox
        (list (vlax-ename->vla-object entity) 'low 'high)
      )
    )
    (if (not (vl-catch-all-error-p result))
      (progn
        (if (= (type low) 'VARIANT) (setq low (vlax-variant-value low)))
        (if (= (type high) 'VARIANT) (setq high (vlax-variant-value high)))
        (setq low (vlax-safearray->list low))
        (setq high (vlax-safearray->list high))
        (if (not found)
          (progn
            (setq min-x (car low))
            (setq min-y (cadr low))
            (setq max-x (car high))
            (setq max-y (cadr high))
            (setq found T)
          )
          (progn
            (setq min-x (min min-x (car low)))
            (setq min-y (min min-y (cadr low)))
            (setq max-x (max max-x (car high)))
            (setq max-y (max max-y (cadr high)))
          )
        )
      )
    )
    (setq index (1+ index))
  )
  (if found (list min-x min-y max-x max-y) nil)
)

(defun ${p}-tag-pipe-runs (imported-selection / answer selection index entity
                                     data entity-type valid layer-options layer-index
                                     layer-entry layer-name tag stable-id run-index
                                     selection-index updated)
  (initget "Yes No")
  (setq answer
    (getkword "\\nDo you want to identify any Pipe Runs on this page? [Yes/No] <No>: ")
  )
  (if (/= (strcase (if answer answer "No")) "YES")
    T
    (progn
      (setq layer-options
        (vl-remove-if
          '(lambda (entry) (= (strcase (car entry)) "0"))
          *p2dwg-approved-layers*
        )
      )
      (if (not layer-options)
        (progn
          (prompt "\\nNo reviewed non-zero Legends Library layer is available. This page will not be saved.")
          nil
        )
        (progn
          (setq run-index 1)
          (setq valid T)
          (setq selection T)
          (while selection
            (prompt
              "\\nSelect all PDF-imported 2D line/arc segments for ONE Pipe Run; press Enter when finished."
            )
            (setq selection (ssget))
            (if selection
              (progn
                (setq valid T)
                (setq index 0)
                (while (and valid (< index (sslength selection)))
                  (setq entity (ssname selection index))
                  (setq data (entget entity))
                  (setq entity-type (strcase (if (cdr (assoc 0 data)) (cdr (assoc 0 data)) "")))
                  (if (or
                        (not (ssmemb entity imported-selection))
                        (not (member entity-type '("LINE" "LWPOLYLINE" "POLYLINE" "ARC")))
                      )
                    (setq valid nil)
                  )
                  (setq index (1+ index))
                )
                (if (not valid)
                  (progn
                    (prompt
                      "\\nSelection rejected: choose only imported 2D line/arc segments from this PDF page. No Pipe Run changes were made."
                    )
                    nil
                  )
                  (progn
                    (prompt "\\nApproved non-zero target layers:")
                    (setq index 1)
                    (foreach layer-entry layer-options
                      (prompt (strcat "\\n  " (itoa index) ") " (car layer-entry)))
                      (setq index (1+ index))
                    )
                    (initget 6)
                    (setq layer-index
                      (getint
                        (strcat "\\nChoose layer number [1-" (itoa (length layer-options)) "]: ")
                      )
                    )
                    (if (or (null layer-index) (> layer-index (length layer-options)))
                      (progn
                        (prompt "\\nInvalid layer choice. This page will not be saved.")
                        (setq selection nil)
                        (setq valid nil)
                      )
                    )
                    (if valid
                      (progn
                        (setq layer-entry (nth (1- layer-index) layer-options))
                        (setq layer-name (car layer-entry))
                        (setq tag (getstring T "\\nEnter the Pipe Run tag: "))
                        (if (or (= tag "") (> (strlen tag) 128))
                          (progn
                            (prompt "\\nPipe Run tag must contain 1-128 characters. This page will not be saved.")
                            (setq selection nil)
                            (setq valid nil)
                          )
                        )
                      )
                    )
                    (if valid
                      (progn
                        (setq stable-id
                          (strcat
                            *p2dwg-source-alias*
                            "-P"
                            (${p}-pad-page *p2dwg-source-page*)
                            "-R"
                            (${p}-pad-page run-index)
                          )
                        )
                        (regapp "PIDPIPE")
                        (setq selection-index 0)
                        (while (< selection-index (sslength selection))
                          (setq entity (ssname selection selection-index))
                          (setq data (entget entity))
                          (setq updated (${p}-put-group 8 layer-name data))
                          (setq updated (${p}-put-group 6 "BYLAYER" updated))
                          (setq updated
                            (append updated
                              (list
                                (list -3
                                  (list
                                    "PIDPIPE"
                                    (cons 1000 stable-id)
                                    (cons 1000 tag)
                                    (cons 1000 layer-name)
                                    (cons 1000 *p2dwg-source-alias*)
                                    (cons 1070 *p2dwg-source-page*)
                                    (cons 1000 *p2dwg-scale-status*)
                                  )
                                )
                              )
                            )
                          )
                          (if (not (entmod updated))
                            (p2dwg-raise "A Pipe Run segment could not be tagged; this page will not be saved.")
                          )
                          (entupd entity)
                          (setq selection-index (1+ selection-index))
                        )
                        (prompt
                          (strcat
                            "\\nTagged "
                            (itoa (sslength selection))
                            " segment(s) as "
                            tag
                            " on "
                            layer-name
                            " with StableID "
                            stable-id
                            "."
                          )
                        )
                        (${p}-batch-log
                          (strcat "PIPE_RUN|" stable-id "|" tag "|" layer-name)
                        )
                        (setq run-index (1+ run-index))
                      )
                    )
                  )
                )
              )
            )
          )
          (if valid T nil)
        )
      )
    )
  )
)

(defun ${p}-manual-reference-calibration-archive (selection / reference reference-name known-length
                                         first-point second-point measured ratio old-osmode
                                         check-first check-second checked-length error-percent
                                         cross-answer cross-reference cross-name cross-length
                                         cross-first cross-second cross-measured cross-error
                                         cross-options cross-prompt)
  (setq *p2dwg-scale-status* "UNVERIFIED")
  (setq *p2dwg-effective-scale* scaleFactor)
  (initget "Instrument12 Valve6 Valve3 No")
  (setq reference
    (getkword
      (strcat
        "\\nChoose a standard symbol side to calibrate this page: "
        "[Instrument12/Valve6/Valve3/No] <No>: "
      )
    )
  )
  (cond
    ((= (strcase (if reference reference "No")) "INSTRUMENT12")
      (setq reference-name "INSTRUMENT_12X12")
      (setq known-length 12.0))
    ((= (strcase (if reference reference "No")) "VALVE6")
      (setq reference-name "VALVE_6MM_LONG_SIDE")
      (setq known-length 6.0))
    ((= (strcase (if reference reference "No")) "VALVE3")
      (setq reference-name "VALVE_3MM_SHORT_SIDE")
      (setq known-length 3.0))
  )
  (if (null reference-name)
    (progn
      (setq *p2dwg-scale-status* "UNVERIFIED")
      (${p}-batch-log
        (strcat "SCALE_UNVERIFIED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|NO_STANDARD_REFERENCE"))
      (p2dwg-raise
        "Choose an actual 12 mm instrument side or 6/3 mm valve side. This page was not saved.")
    )
  )
  (prompt
    (strcat "\\nUsing " reference-name " = " (rtos known-length 2 2)
      " mm. Pick that exact side in the imported PDF geometry."))
  (setq old-osmode (getvar "OSMODE"))
  (setvar "OSMODE" 1)
  (setq first-point
    (getpoint "\\nSnap to the first end of the selected standard side: ")
  )
  (if first-point
    (setq second-point
      (getpoint first-point "\\nSnap to the second end of that side: ")
    )
  )
  (setvar "OSMODE" old-osmode)
  (if (or (null first-point) (null second-point))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*) "|CALIBRATION_INPUT"))
      (p2dwg-raise "Scale calibration was cancelled. This page was not saved.")
    )
  )
  (setq measured (distance first-point second-point))
  (if (<= measured 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*) "|INVALID_MEASUREMENT"))
      (p2dwg-raise "Scale calibration needs a measurable symbol side.")
    )
  )
  (setq ratio (/ known-length measured))
  (command "_.SCALE" selection "" '(0.0 0.0 0.0) ratio)
  (setq scaleFactor (* scaleFactor ratio))
  (setq *p2dwg-effective-scale* scaleFactor)
  (prompt
    (strcat "\\nOne uniform scale was applied to imported PDF geometry only."
      " The project title block is unchanged; equipment keeps its source proportions."
      "\\nRe-pick the same standard side to verify it."))
  (setq old-osmode (getvar "OSMODE"))
  (setvar "OSMODE" 1)
  (setq check-first
    (getpoint "\\nRe-pick the first end of that standard side: ")
  )
  (if check-first
    (setq check-second
      (getpoint check-first "\\nRe-pick the second end: ")
    )
  )
  (setvar "OSMODE" old-osmode)
  (if (or (null check-first) (null check-second))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*) "|VERIFY_INPUT"))
      (p2dwg-raise "Scale verification was cancelled. This page was not saved.")
    )
  )
  (setq checked-length (distance check-first check-second))
  (if (<= checked-length 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*) "|ZERO_REMEASUREMENT"))
      (p2dwg-raise "Scale verification could not measure the symbol side. This page was not saved.")
    )
  )
  (setq error-percent
    (* 100.0 (/ (abs (- checked-length known-length)) known-length))
  )
  (if (> error-percent 0.5)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|PRIMARY=" reference-name "|ERROR_PERCENT=" (rtos error-percent 2 4)))
      (p2dwg-raise
        (strcat "Scale verification missed the 0.5% tolerance ("
          (rtos error-percent 2 4) "%). This page was not saved.")
    )
  )
  )
  (${p}-batch-log
    (strcat "SCALE_PRIMARY_REFERENCE|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
      "|REFERENCE=" reference-name
      "|KNOWN_MM=" (rtos known-length 2 4)
      "|REMEASURED_MM=" (rtos checked-length 2 4)
      "|ERROR_PERCENT=" (rtos error-percent 2 4)))

  ; If the other standard category is also present, use it as an independent
  ; cross-check. Never apply a second scale based on that check.
  (if (= reference-name "INSTRUMENT_12X12")
    (progn
      (setq cross-options "Valve6 Valve3 No")
      (setq cross-prompt
        "\\nIs a 6x3 mm valve also visible for cross-check? [Valve6/Valve3/No] <No>: ")
    )
    (progn
      (setq cross-options "Instrument12 No")
      (setq cross-prompt
        "\\nIs a 12x12 mm instrument visible for cross-check? [Instrument12/No] <No>: ")
    )
  )
  (initget cross-options)
  (setq cross-answer (getkword cross-prompt))
  (cond
    ((= (strcase (if cross-answer cross-answer "No")) "INSTRUMENT12")
      (setq cross-name "INSTRUMENT_12X12")
      (setq cross-length 12.0))
    ((= (strcase (if cross-answer cross-answer "No")) "VALVE6")
      (setq cross-name "VALVE_6MM_LONG_SIDE")
      (setq cross-length 6.0))
    ((= (strcase (if cross-answer cross-answer "No")) "VALVE3")
      (setq cross-name "VALVE_3MM_SHORT_SIDE")
      (setq cross-length 3.0))
  )
  (if cross-name
    (progn
      (prompt
        (strcat "\\nCross-check " cross-name " = " (rtos cross-length 2 2)
          " mm. Pick its exact side in the imported PDF geometry."))
      (setq old-osmode (getvar "OSMODE"))
      (setvar "OSMODE" 1)
      (setq cross-first
        (getpoint "\\nSnap to the first end of the cross-check side: ")
      )
      (if cross-first
        (setq cross-second
          (getpoint cross-first "\\nSnap to the second end of that side: ")
        )
      )
      (setvar "OSMODE" old-osmode)
      (if (or (null cross-first) (null cross-second))
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${p}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_INPUT|" cross-name))
          (p2dwg-raise "The standard cross-check was cancelled. This page was not saved.")
        )
      )
      (setq cross-measured (distance cross-first cross-second))
      (if (<= cross-measured 0.0)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${p}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_ZERO_LENGTH|" cross-name))
          (p2dwg-raise "The standard cross-check could not measure the symbol side.")
        )
      )
      (setq cross-error
        (* 100.0 (/ (abs (- cross-measured cross-length)) cross-length))
      )
      (${p}-batch-log
        (strcat "SCALE_REFERENCE_CROSSCHECK|SOURCE_${g}.pdf|"
          (itoa *p2dwg-source-page*) "|REFERENCE=" cross-name
          "|KNOWN_MM=" (rtos cross-length 2 4)
          "|REMEASURED_MM=" (rtos cross-measured 2 4)
          "|ERROR_PERCENT=" (rtos cross-error 2 4)
          "|TOLERANCE_PERCENT=0.5"))
      (if (> cross-error 0.5)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${p}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_ERROR_PERCENT=" (rtos cross-error 2 4)))
          (p2dwg-raise
            (strcat "The valve/instrument standards disagree by "
              (rtos cross-error 2 4)
              "%. No second scale was applied; this page was not saved.")
        )
      )
      )
    )
    (${p}-batch-log
      (strcat "SCALE_REFERENCE_CROSSCHECK_SKIPPED|SOURCE_${g}.pdf|"
        (itoa *p2dwg-source-page*) "|OTHER_STANDARD_NOT_PRESENT"))
  )
  (setq *p2dwg-scale-status* "PLAN_VERIFIED")
  (${p}-batch-log
    (strcat "SCALE_PLAN_VERIFIED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
      "|REFERENCE=" reference-name
      "|KNOWN_MM=" (rtos known-length 2 4)
      "|REMEASURED_MM=" (rtos checked-length 2 4)
      "|ERROR_PERCENT=" (rtos error-percent 2 4)
      "|TOLERANCE_PERCENT=0.5"
      "|EFFECTIVE_SCALE=" (rtos scaleFactor 2 8)))
  (prompt
    (strcat "\\nScale VERIFIED with " reference-name ": "
      (rtos checked-length 2 4) " mm against "
      (rtos known-length 2 4) " mm; error "
      (rtos error-percent 2 4) "% (tolerance 0.5%)."))
  T
)

(defun ${p}-calibrate-import (selection scaleFactor scaleMode
                                         pageWidthMm pageHeightMm targetWidthMm targetHeightMm /
                                         beforeBounds afterBounds beforeWidth beforeHeight
                                         afterWidth afterHeight widthRatio heightRatio
                                         expectedWidth expectedHeight
                                         scaleError widthError heightError outsideError
                                         widthFillError heightFillError frameWidthError frameHeightError
                                         result
                                         targetBounds targetMinX targetMinY targetMaxX targetMaxY
                                         frameWidth frameHeight frameTolerance pageOrigin
                                         targetPageMin targetPageMinX targetPageMinY
                                         targetPageMaxX targetPageMaxY
                                         moveResult)
  (setq *p2dwg-scale-status* "UNVERIFIED")
  (cond
    ((/= (strcase scaleMode) "FIXED_SHEET_SIZE")
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=FIXED_SHEET_PLAN_MISSING|MODE=" scaleMode))
      (p2dwg-raise "Automatic scale failed: no valid PDF page-size plan. No block placement or DWG save was attempted."))
    ((or (<= scaleFactor 0.0) (<= pageWidthMm 0.0) (<= pageHeightMm 0.0)
         (/= targetWidthMm 841.0) (/= targetHeightMm 594.0))
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=INVALID_FIXED_SHEET_INPUT"))
      (p2dwg-raise "Automatic scale failed: invalid scale or nonstandard sheet dimensions. No block placement or DWG save was attempted."))
  )
  (if (or (null selection) (= (sslength selection) 0))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=PDFIMPORT_EMPTY"))
      (p2dwg-raise "Automatic scale failed: PDFIMPORT returned no geometry."))
  )
  ; PDFIMPORT inserts the page at the requested origin in native PDF-inch
  ; units. Use the manifest scale from page dimensions, not content extents.
  (setq expectedWidth (/ (* pageWidthMm scaleFactor) 25.4)
        expectedHeight (/ (* pageHeightMm scaleFactor) 25.4)
        frameTolerance 0.005
        pageOrigin '(0.0 0.0 0.0)
        targetBounds (p2dwg-title-block-bounds))
  (if (null targetBounds)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=TITLE_BLOCK_XREF_BOUNDS_UNAVAILABLE"))
      (p2dwg-raise "Automatic scale failed: the single approved title-block XREF could not be measured."))
  )
  (setq beforeBounds (${p}-selection-bounds selection))
  (if (null beforeBounds)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=PRE_SCALE_EXTENTS_UNAVAILABLE"))
      (p2dwg-raise "Automatic scale failed: imported drawing extents could not be measured."))
  )
  (setq beforeWidth (- (nth 2 beforeBounds) (nth 0 beforeBounds))
        beforeHeight (- (nth 3 beforeBounds) (nth 1 beforeBounds))
        targetMinX (nth 0 targetBounds)
        targetMinY (nth 1 targetBounds)
        targetMaxX (nth 2 targetBounds)
        targetMaxY (nth 3 targetBounds)
         frameWidth (- targetMaxX targetMinX)
         frameHeight (- targetMaxY targetMinY))
  (if (or (<= beforeWidth 0.000001) (<= beforeHeight 0.000001))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=DEGENERATE_PRE_SCALE_EXTENTS"))
      (p2dwg-raise "Automatic scale failed: imported drawing has zero-width or zero-height extents."))
  )
  (setq frameWidthError (/ (abs (- frameWidth targetWidthMm)) targetWidthMm)
        frameHeightError (/ (abs (- frameHeight targetHeightMm)) targetHeightMm))
  (if (or (> frameWidthError frameTolerance)
          (> frameHeightError frameTolerance))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=TITLE_BLOCK_XREF_DOES_NOT_MATCH_FIXED_SHEET"
          "|XREF_FRAME_MM=" (rtos frameWidth 2 4) "x" (rtos frameHeight 2 4)
          "|REQUIRED_SHEET_MM=841x594"
          "|TOLERANCE_PERCENT=0.5"))
      (p2dwg-raise "Automatic scale failed: the title-block XREF does not match the fixed 841x594 mm sheet."))
  )
  (setq widthFillError (/ (abs (- expectedWidth frameWidth)) frameWidth)
        heightFillError (/ (abs (- expectedHeight frameHeight)) frameHeight))
  (if (or (<= expectedWidth 0.000001)
          (<= expectedHeight 0.000001)
          (> expectedWidth (* frameWidth (+ 1.0 frameTolerance)))
          (> expectedHeight (* frameHeight (+ 1.0 frameTolerance)))
          (> (min widthFillError heightFillError) frameTolerance))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=PDF_PAGE_PLAN_NOT_FIT_TO_TITLE_BLOCK"
          "|SCALED_PDF_PAGE_MM=" (rtos expectedWidth 2 4) "x" (rtos expectedHeight 2 4)
          "|XREF_FRAME_MM=" (rtos frameWidth 2 4) "x" (rtos frameHeight 2 4)
          "|TOLERANCE_PERCENT=0.5"))
      (p2dwg-raise "Automatic scale failed: the PDF page-size plan does not fit the fixed title-block frame."))
  )
  ; Center nonstandard page ratios inside the landscape A1 frame while
  ; retaining the page margins and a single uniform scale.
  (setq targetPageMinX (+ targetMinX (/ (- frameWidth expectedWidth) 2.0))
        targetPageMinY (+ targetMinY (/ (- frameHeight expectedHeight) 2.0))
        targetPageMaxX (+ targetPageMinX expectedWidth)
        targetPageMaxY (+ targetPageMinY expectedHeight)
        targetPageMin (list targetPageMinX targetPageMinY 0.0))
  (setq result
    (vl-catch-all-apply 'vl-cmdf
      (list "_.SCALE" selection "" pageOrigin scaleFactor)))
  (if (vl-catch-all-error-p result)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=UNIFORM_SCALE_COMMAND_FAILED"))
      (p2dwg-raise "Automatic uniform scale command failed. No block placement or DWG save was attempted."))
  )
  (setq moveResult
    (vl-catch-all-apply 'vl-cmdf
      (list "_.MOVE" selection "" pageOrigin targetPageMin)))
  (if (vl-catch-all-error-p moveResult)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=PAGE_ALIGNMENT_TO_TITLE_BLOCK_FAILED"))
      (p2dwg-raise "Automatic page alignment to the title-block XREF failed. No block placement or DWG save was attempted."))
  )
  (setq afterBounds (${p}-selection-bounds selection))
  (if (null afterBounds)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=POST_SCALE_EXTENTS_UNAVAILABLE"))
      (p2dwg-raise "Automatic scale verification failed: post-scale extents could not be measured."))
  )
  (setq afterWidth (- (nth 2 afterBounds) (nth 0 afterBounds))
        afterHeight (- (nth 3 afterBounds) (nth 1 afterBounds))
        widthRatio (/ afterWidth beforeWidth)
        heightRatio (/ afterHeight beforeHeight)
        widthError (/ (abs (- widthRatio scaleFactor)) scaleFactor)
        heightError (/ (abs (- heightRatio scaleFactor)) scaleFactor)
        outsideError
          (max
            0.0
            (/ (- targetPageMinX (nth 0 afterBounds)) frameWidth)
            (/ (- targetPageMinY (nth 1 afterBounds)) frameHeight)
            (/ (- (nth 2 afterBounds) targetPageMaxX) frameWidth)
            (/ (- (nth 3 afterBounds) targetPageMaxY) frameHeight))
        scaleError
          (max widthError heightError outsideError))
  (if (or (<= afterWidth 0.000001) (<= afterHeight 0.000001)
          (> scaleError 0.005))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=TITLE_BLOCK_FRAME_ALIGNMENT_VERIFICATION_FAILED"
          "|EXPECTED_FACTOR=" (rtos scaleFactor 2 8)
          "|TARGET_FRAME=" (rtos frameWidth 2 4) "x" (rtos frameHeight 2 4)
          "|SCALED_PDF_PAGE=" (rtos expectedWidth 2 4) "x" (rtos expectedHeight 2 4)
          "|X_FACTOR=" (rtos widthRatio 2 8)
          "|Y_FACTOR=" (rtos heightRatio 2 8)
          "|CONTENT_OUTSIDE_PAGE_ERROR=" (rtos (* outsideError 100.0) 2 4)
          "|ERROR_PERCENT=" (rtos (* scaleError 100.0) 2 4)))
      (p2dwg-raise "Automatic scale verification failed: imported geometry did not preserve PDF page scale or fit its sheet."))
  )
  (setq *p2dwg-effective-scale* scaleFactor
        *p2dwg-scale-status* "APPLIED")
  (${p}-batch-log
    (strcat "SCALE_APPLIED|SOURCE_${g}.pdf|" (itoa *p2dwg-source-page*)
      "|METHOD=PDF_PAGE_DIMENSIONS|FACTOR=" (rtos scaleFactor 2 10)
      "|TARGET_SHEET_MM=841x594"
      "|TARGET_XREF_FRAME_MM=" (rtos frameWidth 2 4) "x" (rtos frameHeight 2 4)
      "|PAGE_PLAN_MM=" (rtos expectedWidth 2 4) "x" (rtos expectedHeight 2 4)
      "|PDFIMPORT_ORIGIN=(0,0,0)|PLACED_PAGE_MIN=" (vl-princ-to-string targetPageMin)
      "|FIT_MODE=PAGE_SIZE_UNIFORM_CENTERED"
      "|X_FACTOR=" (rtos widthRatio 2 8) "|Y_FACTOR=" (rtos heightRatio 2 8)
      "|EXTENTS_BEFORE=" (vl-princ-to-string beforeBounds)
      "|EXTENTS_AFTER=" (vl-princ-to-string afterBounds)))
  T
)

(defun ${p}-cloud-vertices (min-x min-y max-x max-y / step-x step-y
                                       index vertices)
  (setq step-x (/ (- max-x min-x) 8.0))
  (setq step-y (/ (- max-y min-y) 8.0))
  (setq index 0)
  (setq vertices nil)
  (repeat 8
    (setq vertices
      (append vertices
        (list (cons 10 (list (+ min-x (* step-x index)) min-y))
              (cons 42 -0.35)))
    )
    (setq index (1+ index))
  )
  (setq index 0)
  (repeat 8
    (setq vertices
      (append vertices
        (list (cons 10 (list max-x (+ min-y (* step-y index))))
              (cons 42 -0.35)))
    )
    (setq index (1+ index))
  )
  (setq index 0)
  (repeat 8
    (setq vertices
      (append vertices
        (list (cons 10 (list (- max-x (* step-x index)) max-y))
              (cons 42 -0.35)))
    )
    (setq index (1+ index))
  )
  (setq index 0)
  (repeat 8
    (setq vertices
      (append vertices
        (list (cons 10 (list min-x (- max-y (* step-y index))))
              (cons 42 -0.35)))
    )
    (setq index (1+ index))
  )
  vertices
)

(defun ${p}-make-review-cloud (bounds item category block / min-x min-y
                                           max-x max-y padding cloud)
  (setq min-x (nth 0 bounds))
  (setq min-y (nth 1 bounds))
  (setq max-x (nth 2 bounds))
  (setq max-y (nth 3 bounds))
  (setq padding (* 0.12 (max (- max-x min-x) (- max-y min-y))))
  (if (< padding 1.0) (setq padding 1.0))
  (setq min-x (- min-x padding))
  (setq min-y (- min-y padding))
  (setq max-x (+ max-x padding))
  (setq max-y (+ max-y padding))
  (${p}-ensure-layer "PID-REVIEW-CLOUD" 1 35 "CONTINUOUS")
  (setq cloud
    (entmakex
      (append
        (list
          '(0 . "LWPOLYLINE")
          '(100 . "AcDbEntity")
          '(8 . "PID-REVIEW-CLOUD")
          '(62 . 1)
          '(370 . 35)
          '(100 . "AcDbPolyline")
          '(90 . 32)
          '(70 . 1)
        )
        (${p}-cloud-vertices min-x min-y max-x max-y)
      )
    )
  )
  (${p}-tag-page-entity cloud)
  (${p}-tag-review-entity cloud "RED_REVISION_CLOUD" item category block)
  cloud
)

(defun ${p}-category-for-source-layer (source-layer / suffix)
  (setq suffix
    (if source-layer (${p}-source-layer-suffix source-layer) nil))
  (cond
    ((equal suffix "EQUIP") "equipment")
    ((equal suffix "INST") "instrument")
    ((equal suffix "PIPE_INLINE") "inline component")
    (T nil)
  )
)

(defun ${p}-choose-approved-symbol (category / options index choice mask-note)
  (setq options
    (vl-remove-if-not
      '(lambda (entry) (= (strcase (car entry)) (strcase category)))
      *p2dwg-approved-symbols*
    )
  )
  (if options
    (progn
      (prompt (strcat "\\nApproved Legends Library " category " blocks:"))
      (setq index 1)
      (foreach choice options
        (setq mask-note
        (if (nth 4 choice)
            "  [Reviewed body mask]"
            ""
          )
        )
        (prompt
          (strcat "\\n  " (itoa index) ") " (cadr choice)
            "  [Layer: " (nth 3 choice) "]" mask-note)
        )
        (setq index (1+ index))
      )
      (prompt "\\n  0) Keep the PDF source visible; skip this item")
      (initget 4)
      (setq index (getint "\\nChoose the matching approved block [0 to skip]: "))
      (if (and index (> index 0) (<= index (length options)))
        (nth (1- index) options)
        nil
      )
    )
    (progn
      (prompt (strcat "\\nNo approved " category " block is available for this discipline and project."))
      nil
    )
  )
)

(defun ${p}-review-unsupported (imported / answer selection bounds index entity
                                            selection-index category block-name target-layer
                                            center fallback item choice source-path mask-boundary
                                            wipeout block-asset-id exact-match-answer
                                              exact-match-confirmed required-fonts source-layer source-layers
                                             rotation identity-confirmed overlay-answer ede-record stable-id
                                              attribute-plan candidate-id order-result)
  (${p}-prepare-source-layer-review)
  (${p}-ensure-layer "PID-PROVISIONAL-FALLBACK" 1 35 "CONTINUOUS")
  (initget "Yes No")
  (setq answer
    (getkword
      "\\nDo you want to replace any PDF-imported symbols with approved Legends Library blocks on this page? [Yes/No] <No>: "
    )
  )
  (if (null answer) (setq answer "No"))
  (progn
      (${p}-batch-log
        (strcat "BLOCK_REVIEW_STARTED|" *p2dwg-source-alias* "|"
          (itoa *p2dwg-source-page*) "|MODE=OPERATOR_CONFIRMED"))
      (setq index 1)
      (if (= (strcase answer) "YES")
        (progn
          (prompt
            "\\nSelect only the source geometry and fills for ONE symbol at a time. You may select entities from multiple PDF_ layers; do not include neighboring items or labels. Use Enter when finished."
          )
          (setq selection T)
          (while selection
            (${p}-prepare-source-layer-review)
            (setq selection (ssget))
            (if selection
              (progn
                ; Text has its own confirmation/attribute association path.
                (setq selection (${p}-geometry-only-selection selection))
                (setq source-layers (${p}-selection-source-layers selection))
                (setq bounds
                  (if (and source-layers (${p}-source-selection-p selection imported))
                    (${p}-selection-bounds selection)
                    nil))
                (if (null bounds)
                  (prompt "\\nSelect only live PDF_ source entities from this page, including any fills that belong to this one symbol. The selection was not changed.")
                  (progn
                    (setq wipeout nil stable-id nil ede-record nil)
                    (setq category
                      (${p}-category-for-source-layers source-layers))
                    (if (null category)
                      (progn
                        (prompt
                          (strcat
                            "\\nSelected PDF layer names do not identify the symbol category: "
                            (vl-princ-to-string source-layers)
                            ". Choose by the visible item only if you are sure."))
                        (setq category (${p}-choose-source-category))
                      )
                    )
                    (setq source-layer
                      (if category
                        (${p}-source-layer-for-category category)
                        nil))
                    (if category
                      (setq choice (${p}-choose-approved-symbol category))
                      (progn
                        (setq category "unclassified")
                        (setq choice nil)
                        (prompt "\\nCategory was not confirmed. No block was inserted and all selected PDF source stayed visible.")
                      )
                    )
                    (setq block-name (if choice (cadr choice) ""))
                    (setq source-path (if choice (nth 2 choice) ""))
                    (setq target-layer (if choice (nth 3 choice) ""))
                    (setq mask-boundary (if choice (nth 4 choice) nil))
                    (setq block-asset-id (if choice (nth 5 choice) nil))
                    (setq required-fonts (if choice (nth 6 choice) nil))
                    (if choice
                      (${p}-batch-log
                        (strcat "BLOCK_SELECTION_CONFIRMED|" *p2dwg-source-alias* "|"
                          (itoa *p2dwg-source-page*) "|CATEGORY=" category
                          "|BLOCK=" block-asset-id "|" block-name "|" target-layer))
                    )
                    (setq item
                      (strcat
                        "REV-${String(a).padStart(2,"0")}-"
                        (${p}-pad-page index)
                      )
                    )
                    (${p}-record-mapping selection "CANDIDATE" item nil)
                    (setq exact-match-confirmed nil)
                    (if choice
                      (progn
                        (initget "Yes No")
                        (setq exact-match-answer
                          (getkword
                            (strcat
                              "\\nDoes this approved block exactly match item "
                              item
                              "? [Yes/No] <No>: "
                            )
                          )
                        )
                        (setq exact-match-confirmed
                          (= (strcase (if exact-match-answer exact-match-answer "No")) "YES")
                        )
                      )
                    )
                    (setq identity-confirmed exact-match-confirmed)
                    (setq exact-match-confirmed nil)
                    (setq center
                      (list
                        (/ (+ (nth 0 bounds) (nth 2 bounds)) 2.0)
                        (/ (+ (nth 1 bounds) (nth 3 bounds)) 2.0)
                        0.0
                      )
                    )
                    (setq fallback nil)
                    (if (and choice source-path)
                      (progn
                        (setq source-path
                          (strcat *p2dwg-batch-directory* "\\\\" source-path)
                        )
                        (cond
                          ((or (= target-layer "") (not (tblsearch "LAYER" target-layer)))
                            (${p}-batch-log
                              (strcat "FAILED: approved target layer is unavailable|"
                                block-asset-id "|" target-layer))
                            (prompt "\\nThe approved target layer is not available. Source geometry will be preserved and clouded.")
                          )
                          ((not (findfile source-path))
                            (${p}-batch-log
                              (strcat "FAILED: approved block source is missing|" block-asset-id "|" source-path))
                            (prompt "\\nThe approved block DXF/DWG is missing from the runner folder. Source geometry will be preserved and clouded.")
                          )
                          ((and source-layer
                                (not (${p}-source-target-layer-compatible-p source-layer target-layer)))
                            (${p}-batch-log
                              (strcat "FAILED: incompatible source/approved layer|" source-layer "|" target-layer))
                            (prompt "\\nThe approved target layer is incompatible with this PDF source layer. Source stays visible for review.")
                          )
                          (T
                            (setq rotation (getangle "\\nApproved block rotation angle <0>: "))
                            (if (null rotation) (setq rotation 0.0))
                            (setq fallback
                              (${p}-insert-approved-block
                                currentDoc source-path center bounds rotation target-layer block-name block-asset-id required-fonts
                              )
                            )
                            (if (not fallback)
                              (prompt
                                "\\nCould not insert a verified Block Reference on the approved layer. Any failed insert was removed; source geometry will be preserved and clouded."
                              )
                            )
                          )
                        )
                      )
                    )
                    (if (and fallback mask-boundary)
                      (progn
                        (setq wipeout
                          (${p}-make-valve-wipeout mask-boundary fallback target-layer)
                        )
                        (if wipeout
                          (progn
                            (${p}-tag-page-entity wipeout)
                            (${p}-tag-review-entity
                              wipeout "VALVE_BODY_WIPEOUT" item category block-name
                            )
                            (setq order-result
                              (vl-catch-all-apply
                                'vl-cmdf
                                (list "_.DRAWORDER" fallback "" "_F")))
                            (if (vl-catch-all-error-p order-result)
                              (progn
                                (if (entget wipeout) (entdel wipeout))
                                (setq wipeout nil)
                                (if (entget fallback) (entdel fallback))
                                (setq fallback nil)
                                (prompt
                                  "\\nCould not confirm the valve mask/block draw order. Both temporary objects were removed; PDF source remains visible.")
                              )
                            )
                          )
                          (progn
                            (entdel fallback)
                            (setq fallback nil)
                            (prompt
                              "\\nValve Wipeout creation failed. The fallback was removed; source geometry will be preserved and clouded."
                            )
                          )
                        )
                      )
                    )
                    (if (and fallback identity-confirmed source-layer)
                      (progn
                        (initget "Yes No")
                        (setq overlay-answer
                          (getkword
                            "\\nConfirm the preview's identity, position, rotation, scale, and actual shape coverage; only this selected PDF item is replaced? [Yes/No] <No>: "))
                        (if (= (strcase (if overlay-answer overlay-answer "No")) "YES")
                          (progn
                            (setq ede-record (${p}-choose-ede-record source-layer))
                            (if ede-record
                              (progn
                                (setq stable-id (strcase (car ede-record)))
                                 (setq candidate-id
                                   (strcat *p2dwg-source-alias* "#" (itoa *p2dwg-source-page*)
                                     ":" (cdr (assoc 5 (entget (ssname selection 0))))))
                                (setq exact-match-confirmed
                                  (${p}-archive-replaced-source
                                    selection source-layer stable-id (nth 1 ede-record)
                                    fallback block-asset-id target-layer rotation wipeout))
                                 (if exact-match-confirmed
                                   (progn
                                     ; Body placement is independently verified first.
                                     ; Label width must never become a geometry-fit signal.
                                     (setq attribute-plan
                                       (${p}-prepare-attributes fallback ede-record bounds imported
                                         block-asset-id candidate-id))
                                     (${p}-commit-attributes attribute-plan fallback ede-record block-asset-id candidate-id))
                                   (progn
                                     (${p}-attribute-summary fallback ede-record block-asset-id candidate-id "NEEDS_REVIEW")))
                              )
                            )
                          )
                        )
                      )
                    )
                    ; A provisional mask must never obscure unvalidated source.
                    (if (and wipeout (not exact-match-confirmed))
                      (progn
                        (if (entget wipeout) (entdel wipeout))
                        (setq wipeout nil)))
                    (if fallback
                      (progn
                        (${p}-tag-page-entity fallback)
                        (${p}-tag-review-entity
                          fallback
                          (if exact-match-confirmed
                            "CONFIRMED_BLOCK_MAPPING"
                            "PROVISIONAL_SAME_CATEGORY_FALLBACK"
                          )
                          item category block-name
                        )
                        (${p}-record-mapping
                          (ssadd fallback)
                          (if exact-match-confirmed "CONFIRMED" "NEEDS_REVIEW")
                          item block-asset-id
                        )
                        (prompt
                          (strcat
                            "\\nApproved Block Reference inserted on layer "
                            target-layer
                            (if exact-match-confirmed
                              ". Replacement validated. Only its selected source entities are archived OFF + LOCKED; originals are retained for save/close/reopen validation."
                              ". Mapping remains provisional for review; original geometry is retained."
                            )
                          )
                        )
                      )
                    )
                    (${p}-record-mapping
                      selection
                      (cond
                        ((and exact-match-confirmed fallback) "MATCHED")
                        ((or choice exact-match-confirmed) "NEEDS_REVIEW")
                        (T "UNMATCHED")
                      )
                      item
                      block-asset-id
                    )
                    ; Archive links already persist on successful sources. Do not
                    ; attempt extra edits on their now-locked archive layer.
                    (setq entity nil)
                    (setq selection-index 0)
                    (while (< selection-index (sslength selection))
                      (setq entity (ssname selection selection-index))
                      (if (not exact-match-confirmed)
                        (${p}-tag-review-entity
                          entity "UNSUPPORTED_SOURCE_RETAINED" item category block-name))
                      (setq selection-index (1+ selection-index))
                    )
                    (if (not (and exact-match-confirmed fallback))
                      (${p}-make-review-cloud
                        bounds item category (if fallback block-name "")
                      )
                    )
                    (setq index (1+ index))
                  )
                )
              )
            )
          )
        )
        (${p}-batch-log
          (strcat "BLOCK_REVIEW_SKIPPED|" *p2dwg-source-alias* "|"
            (itoa *p2dwg-source-page*) "|STATUS=OPERATOR_NO"))
      )
      (initget "Yes No")
      (setq answer
        (getkword
          "\\nConfirm PDF symbols were reviewed; uncertain items remain visible or clouded for review? [Yes/No]: "
        )
      )
      (= (strcase (if answer answer "No")) "YES")
  )
)

${E2(p)}
${x2(p)}
${S2(p)}
${T2(p)}
${w2(p)}
${h2(p,T)}
${c2(a,r)}
`,R=O.indexOf(`(defun ${p}-manual-reference-calibration-archive`),P=O.indexOf(`(defun ${p}-calibrate-import`);return R<0||P<R?O:`${O.slice(0,R)}${O.slice(P)}`}function L2(a,r,s){const o=a.map((u,m)=>{const f=m+1;return{documentNumber:f,sourceId:u.sourceId??`SOURCE_${String(f).padStart(2,"0")}`,sourceFile:`SOURCE_${String(f).padStart(2,"0")}.pdf`,sourceName:u.sourceName??`PDF ${f}`,sha256:u.sourceHash??"",pageCount:u.pageCount,pageDrawingNames:u.pageDrawingNames}}),l=a.flatMap((u,m)=>(u.pageSizesPoints??[]).flatMap((f,g)=>{const y=y2(f);return!y||!b2(f,y).valid?[{documentNumber:m+1,pageNumber:g+1,scaleFactor:1,method:"FIXED_SHEET_SIZE",pageWidthMm:0,pageHeightMm:0,targetWidthMm:841,targetHeightMm:594}]:[{documentNumber:m+1,pageNumber:g+1,scaleFactor:y.scaleFactor,method:y.method,pageWidthMm:y.pageWidthMm,pageHeightMm:y.pageHeightMm,targetWidthMm:y.targetWidthMm,targetHeightMm:y.targetHeightMm}]}));return i2(o,!!r,s,l)}function P2(){return`param(
  [Parameter(Mandatory=$true)][int]$ExpectedCount,
  [Parameter(Mandatory=$true)][string]$ExpectedRunnerBuildVersion
)
$ErrorActionPreference = 'Stop'
try {
  $manifestPath = Join-Path $PSScriptRoot 'batch_manifest.json'
  if (-not (Test-Path -LiteralPath $manifestPath -PathType Leaf)) { throw 'batch_manifest.json is missing' }
  $manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
  if ($manifest.schemaVersion -ne 1) { throw 'Unsupported batch manifest schema' }
  if ([string]$manifest.runnerBuildVersion -cne $ExpectedRunnerBuildVersion) {
    throw "Runner build mismatch. Expected $ExpectedRunnerBuildVersion; manifest has $($manifest.runnerBuildVersion). Extract a fresh complete ZIP."
  }
  $entries = @($manifest.pdfs)
  if ($entries.Count -ne $ExpectedCount) { throw 'Manifest PDF count does not match the runner queue' }
  $seenIds = @{}
  for ($index = 0; $index -lt $entries.Count; $index++) {
    $entry = $entries[$index]
    $expectedFile = 'SOURCE_{0:D2}.pdf' -f ($index + 1)
    if ($entry.sourceFile -cne $expectedFile) { throw "Unexpected source filename at position $($index + 1)" }
    if ([string]::IsNullOrWhiteSpace([string]$entry.sourceId)) { throw "Source ID is missing for $expectedFile" }
    if ([string]::IsNullOrWhiteSpace([string]$entry.originalName)) { throw "Original alias/name is missing for $expectedFile" }
    if ([string]::IsNullOrWhiteSpace([string]$entry.originalAlias)) { throw "Original alias is missing for $expectedFile" }
    if ($seenIds.ContainsKey([string]$entry.sourceId)) { throw "Duplicate source ID: $($entry.sourceId)" }
    $seenIds[[string]$entry.sourceId] = $true
    if ([int]$entry.pageCount -lt 1) { throw "Invalid page count for $expectedFile" }
    if ([string]$entry.sha256 -notmatch '^[A-Fa-f0-9]{64}$') { throw "Invalid SHA-256 for $expectedFile" }
    $sourcePath = Join-Path $PSScriptRoot $expectedFile
    if (-not (Test-Path -LiteralPath $sourcePath -PathType Leaf)) { throw "$expectedFile is missing" }
    $actualHash = (Get-FileHash -LiteralPath $sourcePath -Algorithm SHA256).Hash
    if ($actualHash -ine [string]$entry.sha256) { throw "SHA-256 mismatch for $expectedFile" }
  }
  Write-Output "BATCH_MANIFEST_VERIFIED|PDFS=$($entries.Count)|RUNNER=$($manifest.runnerBuildVersion)"
  exit 0
} catch {
  [Console]::Error.WriteLine("BATCH_MANIFEST_FAILED|$($_.Exception.Message)")
  exit 1
}
`}function k2(a,r){const s=m=>{const f=[2166136261,2654435769,2246822507,3266489909],g=[16777619,1540483477,668265261,374761393];for(const y of m)for(let p=0;p<f.length;p+=1)f[p]=Math.imul(f[p]^y,g[p])>>>0;return f.map(y=>y.toString(16).padStart(8,"0")).join("")},o=a.map((m,f)=>[f+1,m.sourceHash?.toLowerCase()??s(m.pdfBytes),m.pageCount,m.discipline,m.sourceId??"",m.sourceName??"",m.originalName??"",m.projectId??"",m.titleBlockGroupId??"",JSON.stringify(m.pageSizesPoints??[]),JSON.stringify(m.pageDrawingNames??[])].join("|")),l=[];for(const m of r)m.path==="RUN_BATCH.lsp"||m.path==="README_LOCAL_AUTOCAD.txt"||/^SOURCE_\d+\.pdf$/i.test(m.path)||l.push(`${m.path}|${m.content.length}|${s(m.content)}`);const u=["LOCAL_AUTOCAD_BATCH_V1",`RUNNER_BUILD|${rs}`,...o.map(m=>`JOB|${m}`),...l.map(m=>`FILE|${m}`)].join(`
`);return s(new TextEncoder().encode(u))}function O2(a,r){const s=a.map((l,u)=>`- PDF ${u+1} (${l.discipline}): ${l.pageCount} page(s) -> ${l.pageCount} native DWG file(s)`).join(`
`)+`

OUTPUT NAMES
Page DWGs use detected Drawing No/Title labels from the source PDF, not equipment tags.
Duplicate names get a document/page suffix; existing DWGs are never overwritten.
Missing, scanned or ambiguous labels use unique fallback names marked FALLBACK_REVIEW.
See each PDF pageOutputs entry in batch_manifest.json for the exact filenames.
`;return`LOCAL AUTOCAD PDF-TO-DWG RUNNER
 ---------------------------------
Runner build: ${rs}

This package contains the selected source PDFs and AutoLISP helpers. It does
not contain pre-generated DWG files. The ZIP is prepared in your browser and
is not uploaded to the app. Keep it private because it contains source PDFs.

${s}

REQUIREMENTS
- Windows desktop AutoCAD with AutoLISP, ActiveX, and -PDFIMPORT.
- Start in a NEW, unsaved blank drawing made from an approved DWT template.
  Existing saved drawings or drawings containing objects are rejected.

RUN
1. Extract this package on the Windows workstation that has AutoCAD.
2. In AutoCAD, use NEW and choose your blank template (for example acadiso.dwt).
   Leave that drawing unsaved. Run APPLOAD and load RUN_BATCH.lsp in it.
3. Run PDF2DWGBATCH once. Select SOURCE_01.pdf to locate the extracted batch.
   The runner checks every packaged PDF against batch_manifest.json before it
   creates the queue; do not rename or edit the packaged sources. Then choose a
       neutral output name. Each page is fitted to the measured frame of the
       single approved title-block XREF. The complete PDFIMPORT result receives
       one uniform scale and position adjustment; no valve, instrument, or
       calibration-value prompt appears. The XREF itself stays unchanged.
   The runner no longer asks for a DWT or opens new drawing tabs.
      4. The companion processes the queued PDFs sequentially and creates one DWG
      per page. PDFIMPORT starts in native PDF-inch units, then the whole imported
       page is measured against the same title-block XREF frame and receives one
       uniform scale plus alignment. A frame that does not match the fixed
       841 x 594 mm sheet, or imported geometry with a different aspect ratio,
       stops that page before block placement or saving. Identified 12 x 12 mm
       12 x 12 mm instrument and 6 x 3 mm valve dimensions, plus approved text
       heights, are automatic cross-checks when present; no point-picking or
       calibration prompt appears. A failed or unverified check stops that page.
    The runner never deletes imported source entities or redacts company/client
    details. Such details may remain; inspect and redact them separately before
     sharing. Operator-unconfirmed PDF symbol/block geometry stays visible and
     is saved as NEEDS_REVIEW; it no longer prevents later pages from running.
     Pipe Run layer tagging is not required in the page batch. Keep AutoCAD
   open until the batch finishes. Do not switch drawing tabs during the batch.
   The same working drawing is reused, but each page has a separate output
   filename: BASE_doc-01_page-001.dwg, BASE_doc-01_page-002.dwg, and so on.
   A *_working-N.dwg file is temporary, not a finished page output. When a
   project title block is selected, every page DWG references the same
   PROJECT_TITLE_BLOCK.dwg sidecar; do not create or keep per-page copies.
   Before clearing a saved page, the runner detaches to a uniquely named
   BASE_working-N.dwg scratch copy. It clears only batch-created objects and
   block definitions, not template objects. Successful scratch copies are
   deleted; any retained scratch file is identified in the progress log.
    The loaded message must include "single working drawing". This README's
    runner build must match RUNNER_BUILD|version=... in the progress log. If the
    log has no marker or a different version, stop and extract the current full
    kit. Old extracted helpers do not receive fixes automatically.
  ${r?`PROJECT TITLE BLOCK
- The standalone DWG for the selected PFD/P&ID group is attached as a
  model-space XREF at (0,0,0), rotation 0, scale 1.0. Its source layers are
  retained; no title-block geometry is rescaled by the runner.
- Every PDF in this ZIP uses that one selected group's title block.
- Choose the same output folder for every batch in this PFD/P&ID workspace.
  The first run creates PROJECT_TITLE_BLOCK.dwg once; later runs reuse it only
  when PROJECT_TITLE_BLOCK_SCOPE.txt matches the selected group and discipline.
  A mismatch stops the run without overwriting either file.
- All page DWGs in that folder reference the same relative
  ./PROJECT_TITLE_BLOCK.dwg. Keep the DWG beside the generated pages. The
  scope text file is a local safety marker; do not upload it to iDocs/Fusion.
- Legacy PROJECT_TITLE_BLOCK_NNN.dwg copies are reported in the batch log and
  left untouched. Review or consolidate them manually only after approval.
- Upload each page DWG individually and upload the one shared
  PROJECT_TITLE_BLOCK.dwg once to the matching PFD or P&ID server folder. The
  original uploaded filename is not included in the runner package.
- Use a title-block DWG whose geometry is in model space and uses the intended
  drawing units. Confirm its recorded expected dimensions, actual extents,
  fit, and layers in AutoCAD. The selected title block is not rescaled.

`:`PROJECT TITLE BLOCK
- No PFD/P&ID group was selected, so this runner does not attach a project title block.

`}5. Check BASE_AUTOCAD_BATCH_PROGRESS.log in the output folder. It records each
     page's job/source/hash/page/output identity and states QUEUED, RUNNING,
     COMPLETED, FAILED, or NEEDS_REVIEW, and includes batch
    totals. BATCH_STOPPED includes the exact import/review stage. A failed or
    unapproved page remains open in the working drawing, not saved as a
     completed DWG. Later pages continue after a saved NEEDS_REVIEW page, but
     stop after an import, identity, or scale failure. Previously saved page DWGs are not modified. Existing output
    filenames without a matching COMPLETED journal record are marked
    NEEDS_REVIEW and are never overwritten. To resume, start in another NEW
    unsaved blank drawing, extract the same unchanged kit, and choose the same
    output folder and base name. The runner verifies the journal's batch
    fingerprint, skips only pages recorded COMPLETED whose DWGs still exist,
    and processes unfinished pages. A journal for different PDFs or mappings
    is rejected without changing any DWGs.
6. Check AUTOCAD_ENTITY_MAP.log and AUTOCAD_GEOMETRY_SCAN.log in the output
   folder for per-entity handles, review states, and non-destructive geometry
   descriptors. Close and reopen each DWG. Check linework, tags, scale,
   markups, and missing or shifted objects before treating it as reviewed.
   For any confirmed mapping, confirm Properties shows Type = Block Reference
   and Layer = the approved target layer; do not explode it during this check.
   Confirm no company/client identity remains in the file or its filename.

APPROVED BLOCKS
- Each approved isolated DXF is inserted directly into the final page drawing as
  a native Block Reference. AutoCAD reads the local DXF; the source file is not
  opened as a separate drawing, converted, or modified.
- The automatic matcher uses local geometry signatures, compatible PDF source
  layers, aspect, rotation, and a uniqueness margin. Only a high-confidence
  match is inserted; low-confidence, unsupported, overlapping, or ambiguous
  candidates remain visible as PDF source geometry.
- Auto-inserted blocks are provisional overlays, not confirmed replacements.
  They stay on approved CAD layers and are brought to the front, but their
  PDF source remains visible and is never archived or deleted in this pass.
  They are logged as NEEDS_REVIEW until EDE StableID and text/attribute links
  are independently confirmed.
- AUTOCAD_BATCH_PROGRESS.log records DIRECT_IMPORT_REQUEST,
  DIRECT_IMPORT_CONFIRMED, and FAILED: entries. A failed insert is removed;
  the original page geometry remains for review.

NON-DESTRUCTIVE SOURCE CLEANUP
- A geometry signature and fitted extents are used to suggest/insert a
  provisional overlay; they are not enough to archive source. A StableID,
  attributes, and final save/reopen validation are still required.
- Choose the existing EDE record for this PDF page. Its permanent StableID,
  not an AutoCAD handle, is the identity. If no matching EDE row is available,
  leave the source visible as NEEDS_REVIEW. Do not choose an unrelated row.
- Only the selected, validated source entities move:
  PDF_EQUIP -> PDF_DONE_EQUIP; PDF_INST -> PDF_DONE_INST;
  PDF_PIPE_INLINE -> PDF_DONE_PIPE_INLINE; PDF_TEXT -> PDF_DONE_TEXT.
  Archive layers are created only when needed and saved OFF + LOCKED.
  Pending PDF source layers remain ON + LOCKED. No source geometry is purged.
- PIDMAPLINK XData persists the StableID, source/archive layers, mapping rule,
  validation status, block locator and transform. The block also stores each
  source handle as an XData locator. AUTOCAD_ENTITY_MAP.log records these links.
  Keep that local sidecar with the DWG. Placement PASS is not a reopen PASS.
- Default saved view is REVIEW. Optional commands:
  P2DWGSOURCEVIEW: show original pending + archived PDF geometry (CAD remains).
  P2DWGMAPPEDVIEW: hide completed source and review clouds, keep pending visible.
  P2DWGREVIEWVIEW: show CAD + pending source + review clouds, hide completed source.
- After SAVE -> CLOSE -> REOPEN, APPLOAD the matching DOC_nn.lsp (this only
  defines helpers; do NOT run PDF2DWGnn again). Run P2DWGVALIDATEREOPEN.
  It checks persisted links, block transforms and layer states. Failed links
  restore available source for review without deleting the CAD object.
  Visually check actual symbol identity/shape as well. Save validation metadata.
- P2DWGROLLBACKREPLACEMENT asks for the EDE StableID and confirmation. It restores
  only its linked PDF source to the original layer and removes only its linked
  generated block/mask. This also removes any later edits to those generated
  objects, so inspect them before confirming. Other replacements are untouched.
- Safe acceptance sample: replace one of at least two items on PDF_EQUIP;
  verify only selected handles moved, the other item remains visible, the native
  Block Reference is visible on its approved layer, and the EDE StableID matches.
  Save/close/reopen and run the validation above; verify archive OFF + LOCKED,
  original layer ON + LOCKED. Test rollback on a COPY of that saved sample.

CONTROLLED ATTRIBUTES AND FINAL TEXT
- In the browser runner panel, expand "Block attributes · Arial Narrow text".
  Add explicit attribute-to-EDE rules, select the expected value type and PDF
  text zone (inside/above/below the selected symbol), and SAVE RULES before
  downloading this kit. Rules apply only to the selected mapping scope.
  Example: TAG_NO <- itemTag, type Tag, location Above.
- Geometry approval and attribute approval are separate. A verified body
  replacement does not prove that its label belongs to an attribute.
  Existing ATTDEFs and editable ATTRIB references are reused. No missing field
  is invented and no nested/shared block definition is rewritten.
  Each populated field requires a confirmed page-specific EDE StableID and ONE
  exact matching PDF text in its configured symbol-relative zone. Conflicting
  tags, duplicate evidence, missing rules/definitions, field-coded labels,
  multiline attributes and unsafe geometry changes stay NEEDS_REVIEW.
- Arial Narrow (arialn.ttf) must be installed on this Windows workstation.
  P2DWG_ARIAL_NARROW_GLOBAL is variable-height. Final text keeps its imported height,
  insertion/alignment points, rotation, width factor and justification.
  Every editable TEXT/MTEXT and single-line ATTRIB in the page drawing is
  standardized automatically, including loose text and block attributes;
  PDF_* source layers and text geometry remain unchanged.
  MTEXT font controls change without stripping height/width/oblique overrides.
  No text is turned into outlines; outlined PDF lettering stays for review.
  Missing fonts or a conflicting existing style stop that page without saving;
  the batch text changes roll back instead of leaving mixed fonts.
- Remaining loose TEXT/MTEXT is reviewed AFTER block attributes: select one
  source item, classify Note/Tag/Heading, confirm final inclusion, choose its
  page-specific EDE identity and an approved TEXT/ANNOT/NOTE/TAG layer.
  A validated editable COPY is made; the original is NOT edited or deleted.
- Only successfully consumed source text moves to PDF_DONE_TEXT, OFF + LOCKED.
  Other PDF text remains visible. PIDTEXTLINK, PIDATTRRULE and PIDATTRSTATUS
  retain StableID, source/candidate/attribute locators, approved block ID, field
  rules, values and status. AUTOCAD_TEXT_MAP.log is a LOCAL sidecar; keep it.
  These links do not automatically import placement results into browser EDE.
- P2DWGROLLBACKREPLACEMENT also restores linked source text and removes only
  linked generated loose-text copies (and the linked block if applicable).
  P2DWGVALIDATEREOPEN checks text/attribute content, style, geometry and links.
  It rechecks tag conflicts and restores source text if validation fails.
- Safe sample: use an attributed approved block and a unique matching tag.
  Check Properties/Enhanced Attribute Editor: real BlockReference, expected
  fields, correct editable values, Arial Narrow, unchanged height/placement/
  rotation/justification, no new duplicate tag. Also check one loose editable,
  searchable TEXT/MTEXT item. SAVE -> CLOSE -> REOPEN, load this DOC helper and
  run P2DWGVALIDATEREOPEN; inspect styles, links and archived source again.
  Automated tests cannot certify native AutoCAD save/reopen behavior.

PRIVACY AND LIMITS
- The web page reads the PDF locally to count pages and places its bytes in
  this local ZIP under a generic filename. It does not upload the PDF to a
  server.
- Every PDF-imported entity in a generated page drawing receives PIDPAGE XData with the
  generic source alias and page number. PIDREVIEW XData records the review item
  ID, category, selected block, and whether an entity is a fallback or cloud.
- AUTOCAD_ENTITY_MAP.log is a local, pipe-delimited record of generic source
  aliases, pages, entity handles/types, and RAW/CANDIDATE/MATCHED/CONFIRMED/
  UNMATCHED/NEEDS_REVIEW states. It does not include source PDF filenames.
- AUTOCAD_GEOMETRY_SCAN.log records numeric per-entity geometry descriptors
  and bounds for all remaining live PDFIMPORT entities. Text contents, layer
  names, colors, and nearby labels are not used as identity evidence.
- AutoCAD imports the selected source PDF and writes native DWGs locally.
- The browser cannot confirm that AutoCAD opened, saved, or reopened a DWG.
- PDF text, raster content, and review markups may import differently. Inspect
  every output; scanned pages may not become editable vector geometry.
- Confidential-detail removal is manual. The runner asks for a page-by-page
  confirmation, but cannot detect hidden metadata or nested logos. Inspect the
  visible drawing and drawing properties before confirming.
- Automatic matching uses a local geometry signature, normalized primitive
  topology, fit/rotation checks, and a unique-best-match margin. PDF layer names
  and colors are not identity evidence. Only unique
  high-confidence matches are inserted as provisional native Block References.
  Unmatched, overlapping, unsupported, or ambiguous geometry stays visible.
  A confirmed block's approved target layer and ByLayer color/linetype/lineweight
  control its appearance. Source entities remain visible until the block and
  source archive checks pass; then only those matched source entities move to
  PDF_DONE_* and stay recoverable.
  Approved isolated DXFs are read directly and inserted into the output
  drawing as native Block References; source files are not opened or modified.
  If no approved compatible block is available, the source geometry is retained.
- Approved block layers are created or updated to their Legends color,
  lineweight, and linetype; block references and matched source objects use
  ByLayer properties. PDF_ source layer names and colors remain unchanged until
  a geometry match is confirmed. PDF layer names/colors are never used as
  symbol identity, and whole PDF layers are never renamed into approved layers.
  Project title-block layers are not changed. The batch log records each result.
  The supported-block stage writes a local geometry index for approved block
  definitions when an overview DXF was supplied during extraction. It scans
  imported PDF entities and emits normalized descriptors and conservative
  candidate groups. Automatic replacement requires a unique, high-confidence
  geometry match and successful fit, rotation, layer, and archive checks.
  Ambiguous or unmatched items remain visible for review. Text contents, PDF
  layer names, colors, and nearby labels are excluded from geometry identity.
  All editable PDFIMPORT TEXT/MTEXT receives Arial Narrow immediately after
  import, including loose text that has not been associated with a block.
  This font-only pass preserves content, height, location, rotation,
  justification, source layer, and MTEXT height/width/oblique overrides.
  Classification and association remain a separate review; unconfirmed text
  is not promoted, moved, or deleted. A failed item rolls back the whole
  page-level font pass and prevents that page from saving. Outlined letters
  are NOT editable text and are not repaired automatically.
   Other unselected PDF geometry remains in place on its preserved source layer.
    Each PDF page is aligned to the measured frame of the one shared
    title-block XREF using one uniform scale. The frame must match the fixed
    841 x 594 mm sheet and the imported page must preserve its aspect ratio.
    Equipment keeps its depicted proportions. Detected instrument, valve, and
    approved text-height dimensions are automatic cross-checks; no user
    calibration input is requested. The runner stops with SCALE_FAILED if the
    XREF frame or an identified reference cannot be validated.
   the next page.
  Drawings use metric insertion units and approved reviewed linetype patterns.
  Simple dash/gap patterns and shape-based SHX segments are preserved. A missing
  SHX font or unsupported pattern stops the run rather than dropping its marks
  or silently substituting Continuous.
  - After scale verification, 2D LINE, LWPOLYLINE, POLYLINE, and ARC entities
    on explicitly labeled ProcessLine source layers are mapped to the shared
    f_Pipe_Pri layer (Legends color 240) with entity properties set to ByLayer.
    Its target linetype is always CONTINUOUS, even if the PDF source was dashed.
    Coordinates are verified unchanged. Utility,
   electrical, capillary, instrument, inline, and generic PDF_Geometry layers
   are not relabeled; unmatched geometry stays visible for review.
   This does not create native Plant 3D intelligence or an automatic EDE row.
- An approved valve mapping must contain a reviewed block-local body outline.
  The runner creates a polygonal AutoCAD WIPEOUT from that outline, then brings
  the valve block in front of it. Missing/invalid outlines stop packaging or
  preserve the source geometry; no bounding-box mask is guessed.
- A same-category fallback stays provisional unless the reviewer explicitly
  confirms that it exactly matches the selected item. Even after confirmation,
  source geometry is retained until a later save/reopen verification. Outputs
  already on disk are never overwritten; use a new base name to create a new
  issue or trial.
- The runner does not automatically detect unmatched symbols. A person must
  identify each item, enter its category, and choose among approved mappings
  for that category. Retained geometry and cloud marks carry page and review
  XData for later manual replacement.
- MAPPING_PREFLIGHT records available compatible blocks and text styles.
  Zero compatible blocks requires an explicit raw-only test confirmation;
  default No stops before importing. A completed import is not a completed
  page: it must pass page-size calibration or the known-symbol reference
  calibration, then privacy and CAD reviews.
  Only SAVED with SCALE=VERIFIED records a final page output.
- Existing output files are never overwritten. The output-base-specific local
  progress journal records every page state. When rerunning with the same
  unchanged batch and output base, only pages with a confirmed COMPLETED state
  and an existing DWG are skipped; unfinished pages are resumed. Existing DWGs
  without a matching completion record require review instead of being assumed
  complete. Keep the extracted runner, PDFs, DWGs, and journal on the workstation.
- This helper uses AutoCAD for Windows. Native DWG generation is not performed
  by the web page itself.
`}function j2(a,r=[],s=[],o=[],l){if(a.length===0||a.some(C=>!Number.isInteger(C.pageCount)||C.pageCount<1||!["PFD","P&ID"].includes(C.discipline)||!(C.pdfBytes instanceof Uint8Array)||C.pdfBytes.length===0||C.pageSizesPoints!==void 0&&(C.pageSizesPoints.length!==C.pageCount||C.pageSizesPoints.some(x=>!Number.isFinite(x.width)||!Number.isFinite(x.height)||x.width<=0||x.height<=0))||typeof C.sourceHash!="string"||!/^[a-f0-9]{64}$/i.test(C.sourceHash)||C.pageDrawingNames!==void 0&&(C.pageDrawingNames.length!==C.pageCount||C.pageDrawingNames.some(x=>x!==null&&typeof x!="string"))||C.sourceId!==void 0&&!C.sourceId.trim()||C.sourceName!==void 0&&!C.sourceName.trim()))throw new Error("Every runner PDF needs readable bytes and a verified SHA-256 source hash.");const u=a.map((C,x)=>C.sourceId??`SOURCE_${String(x+1).padStart(2,"0")}`);if(new Set(u).size!==u.length)throw new Error("Each selected PDF must have a unique source ID before the runner can be prepared.");if(a.some(C=>(C.edeRecords??[]).some(x=>!/^[0-9A-F]{32}$/i.test(x.stableId)||typeof x.itemTag!="string"||!x.type.trim()||Object.entries(x.fields??{}).some(([O,R])=>!_i.includes(O)||typeof R!="string")||!Number.isInteger(x.pageNumber)||x.pageNumber<1||x.pageNumber>C.pageCount)))throw new Error("An EDE link in the AutoCAD runner is invalid. Reopen the EDE record and prepare a fresh runner.");if(a.some(C=>(C.conflictingTags??[]).some(x=>typeof x!="string")))throw new Error("The runner duplicate-tag registry is invalid.");const m=new Set(a.map(C=>C.titleBlockGroupId?.trim()??""));if(m.size>1)throw new Error("Prepare one AutoCAD runner per group so each batch uses only its own title block.");const f=[...m][0]??"";if(f){if(!l||l.groupId!==f)throw new Error("Upload a standalone DWG title block for the selected group before preparing its AutoCAD runner.");const C=new Set(a.map(O=>O.discipline));if(C.size!==1)throw new Error("Prepare separate PFD and P&ID runners so each workspace keeps its own shared title block.");if(l.workspaceType!==[...C][0])throw new Error(`The selected title block belongs to ${l.workspaceType}; choose the matching workspace title block.`);if(!(l.content instanceof Uint8Array)||!l.content.length)throw new Error("The selected group title block is not a valid AutoCAD DWG file.");const x=new TextDecoder().decode(l.content.subarray(0,6));if(!/^AC10\d{2}$/.test(x))throw new Error("The selected group title block is not a valid AutoCAD DWG file.");if(l.titleBlockPath!=="PROJECT_TITLE_BLOCK.dwg"||l.xrefName!=="P2DWG_PROJECT_TITLE_BLOCK"||!l.titleBlockId.trim()||!Number.isInteger(l.version)||l.version<1||!Number.isFinite(l.expectedSize.widthMm)||!Number.isFinite(l.expectedSize.heightMm)||l.expectedSize.widthMm<=0||l.expectedSize.heightMm<=0)throw new Error("The project title-block record is incomplete. Save the title block again in the selected workspace.");if(l.expectedSize.widthMm!==cn.width||l.expectedSize.heightMm!==cn.height)throw new Error("The project title block must use the fixed 841 x 594 mm sheet size.")}else if(l)throw new Error("A project title block can only be used with PDFs from the same selected group.");const g=a.map(C=>r.filter(x=>(x.discipline===C.discipline||x.discipline==="Shared")&&(x.projectId?x.projectId===C.projectId:!0))),y=[...new Map(g.flat().map(C=>[`${C.blockAssetId}|${C.blockName}|${C.fallbackCategory}`,C])).values()];for(const C of y)if(C.fallbackCategory.trim().toLowerCase()==="valve"){if(!C.wipeoutBoundary)throw new Error(`Valve "${C.blockName}" has no reviewed body mask outline. Re-review the valve in the Legends Library before preparing the AutoCAD runner.`);try{as(C.wipeoutBoundary.map(([x,O])=>`${x},${O}`).join(";"))}catch(x){throw new Error(`Valve "${C.blockName}" has an invalid reviewed body mask outline. ${x instanceof Error?x.message:"Re-review the valve mask."}`)}}const p=new Set(s.map(C=>C.id));if(y.some(C=>!p.has(C.blockAssetId)))throw new Error("An approved symbol refers to a missing locally extracted block drawing.");if(y.some(C=>!C.targetLayer.trim()||C.targetLayer.trim().toUpperCase()==="0"))throw new Error("Every approved block needs an approved non-zero target CAD layer before the AutoCAD runner can be prepared.");const b=new Map,v=new Map,w=new Map,_=new Map,D=[...new Set(y.map(C=>C.blockAssetId))];D.forEach((C,x)=>{const O=s.find(P=>P.id===C),R=`CAD_SYMBOLS/SYMBOL_${String(x+1).padStart(3,"0")}`;if(O.format==="DXF"){const P=eo(O.content).content,k=new Xp(P).nativeAssetInfo();v.set(C,`${R}.dxf`),b.set(C,`${R}.dxf`),w.set(C,k.requiredShapeFonts),_.set(C,P)}else b.set(C,`${R}.dwg`),v.set(C,`${R}.dwg`),w.set(C,[])});const S=Av(a),T={schemaVersion:1,runnerBuildVersion:rs,pdfs:a.map((C,x)=>({sourceId:C.sourceId??`SOURCE_${String(x+1).padStart(2,"0")}`,sourceFile:`SOURCE_${String(x+1).padStart(2,"0")}.pdf`,originalName:C.originalName??C.sourceName??`PDF ${x+1}`,originalAlias:C.sourceName??`PDF ${x+1}`,sha256:C.sourceHash.toLowerCase(),pageCount:C.pageCount,pageOutputs:S[x].map((O,R)=>({page:R+1,outputDwg:O,drawingName:C.pageDrawingNames?.[R]??null,namingStatus:C.pageDrawingNames?.[R]?"DETECTED_LABEL":"FALLBACK_REVIEW"}))}))},L=[{path:"RUN_BATCH.lsp",content:new Uint8Array},{path:"batch_manifest.json",content:new TextEncoder().encode(JSON.stringify(T,null,2))},{path:"VERIFY_BATCH.ps1",content:new TextEncoder().encode(P2())},...l?[{path:"PROJECT_TITLE_BLOCK.dwg",content:l.content},{path:"PROJECT_TITLE_BLOCK_SCOPE.txt",content:new TextEncoder().encode(A2(l))}]:[],...s.filter(C=>D.includes(C.id)).map(C=>({path:v.get(C.id),content:_.get(C.id)??C.content})),...y.length?[{path:"CAD_BLOCK_GEOMETRY_INDEX.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,note:"Descriptors are local geometry data, not validated match signatures. Missing or empty descriptors require re-importing the extraction ZIP with its overview DXF or reviewing unsupported geometry.",blocks:y.map(C=>{const x=s.find(k=>k.id===C.blockAssetId),O=x?.geometryDescriptor??null,P=!!(O?.primitives.length&&O.bounds)?"INDEXED":x?.geometryIndexError??(O?"EMPTY_OR_UNSUPPORTED":"OVERVIEW_DXF_REQUIRED");return{blockAssetId:C.blockAssetId,blockName:C.blockName,category:C.fallbackCategory,discipline:C.discipline,targetLayer:C.targetLayer,targetLayerRules:o.find(k=>k.category==="layer"&&k.name.trim().toLowerCase()===C.targetLayer.trim().toLowerCase())?.detail??null,projectScope:C.projectId?"project":"company",indexStatus:P,indexError:x?.geometryIndexError??null,geometry:O}})},null,2))}]:[],...a.flatMap((C,x)=>{const O=String(x+1).padStart(2,"0"),R=r.filter(W=>(W.discipline===C.discipline||W.discipline==="Shared")&&(W.projectId?W.projectId===C.projectId:!0)&&W.blockAssetId&&b.has(W.blockAssetId)).map(W=>{const ne=b.get(W.blockAssetId),fe=ne.split("/").at(-1)?.replace(/\.(?:dwg|dxf)$/i,"")??"APPROVED_SYMBOL",ie=s.find(re=>re.id===W.blockAssetId)?.geometryDescriptor;return{...W,blockName:fe,sourcePath:ne,requiredShapeFonts:w.get(W.blockAssetId)??[],autoPlacementSignature:ie?xA(ie):null}}),P=o.filter(W=>(W.discipline===C.discipline||W.discipline==="Shared")&&(W.projectId?W.projectId===C.projectId:!0)),k=Xy(P,C.projectId,C.requireLegendsLibrary);if(C.requireLegendsLibrary){const W=["f_Pipe_Pri","f_Inst","f_gen_Text"].filter(ne=>!k.some(fe=>fe.category==="layer"&&fe.name.toUpperCase()===ne.toUpperCase()));if(W.length)throw new Error(`LEGENDS_LIBRARY_INCOMPLETE: required reviewed layers are missing: ${W.join(", ")}. No approximate layer defaults were substituted.`)}const ae=R.find(W=>!k.some(ne=>ne.category==="layer"&&ne.name.toLowerCase()===W.targetLayer.toLowerCase()));if(ae)throw new Error(`Approved CAD layer "${ae.targetLayer}" is not included in this runner page's approved standards.`);return[{path:`DOC_${O}.lsp`,content:new TextEncoder().encode(I2(x+1,C.pageCount,R,k,C.edeRecords??[],Zs(C.attributeRules??[]),C.conflictingTags??[],C.requireLegendsLibrary??!1))},{path:`SOURCE_${O}.pdf`,content:C.pdfBytes}]})];L.push({path:"CAD_STANDARDS_MANIFEST.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,fontPolicy:"ARIAL_NARROW",sheetSizeMm:cn,documents:a.map((C,x)=>{const O=Xy(o.filter(R=>(R.discipline===C.discipline||R.discipline==="Shared")&&(!R.projectId||R.projectId===C.projectId)),C.projectId,C.requireLegendsLibrary);return{documentNumber:x+1,discipline:C.discipline,policy:C.requireLegendsLibrary?"STRICT_LEGENDS_LIBRARY":"COMPATIBILITY_DEFAULTS",counts:Object.fromEntries(["layer","linetype","textStyle","dimensionStyle"].map(R=>[R,O.filter(P=>P.category===R).length])),standards:O}})},null,2))});const I=k2(a,L);return L[0].content=new TextEncoder().encode(L2(a,l,I)),L.push({path:"README_LOCAL_AUTOCAD.txt",content:new TextEncoder().encode(O2(a,!!l))}),L}function q2(a,r=[],s=[],o=[],l,u){return GS(j2(a,r,s,o,l),u)}const Nv={name:_p,category:"layer",detail:`color=${Dv};lineweight=-3;linetype=CONTINUOUS`,discipline:"Shared"},M2=[Nv,{name:"f_Pipe_Inline",category:"layer",detail:"color=60;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Equip",category:"layer",detail:"color=80;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Equip_Int",category:"layer",detail:"color=74;lineweight=-3;linetype=HIDDEN2",discipline:"Shared"},{name:"f_gen_Text",category:"layer",detail:"color=50;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"ATT_HID",category:"layer",detail:"color=11;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Misc",category:"layer",detail:"color=9;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Inst",category:"layer",detail:"color=115;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Elec",category:"layer",detail:"color=115;lineweight=-3;linetype=HIDDEN2",discipline:"Shared"},{name:"f_Vendor",category:"layer",detail:"color=164;lineweight=-3;linetype=CENTER2",discipline:"Shared"},{name:"f_Batt_Lim",category:"layer",detail:"color=194;lineweight=-3;linetype=PHANTOM2",discipline:"Shared"},{name:"f_gen_Hatch",category:"layer",detail:"color=7;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"FIRE",category:"layer",detail:"color=22;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"F_FIRE_SAFETY",category:"layer",detail:"color=1;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"}],$2=[{name:"HIDDEN2",category:"linetype",detail:"description=Hidden (.5x);patternLength=4.7625;pattern=(3.175,-1.5875);patternFlags=(0,0)",discipline:"Shared"},{name:"CENTER2",category:"linetype",detail:"description=Center (.5x);patternLength=28.575;pattern=(19.05,-3.175,3.175,-3.175);patternFlags=(0,0,0,0)",discipline:"Shared"},{name:"PHANTOM2",category:"linetype",detail:"description=Phantom (.5x);patternLength=31.75;pattern=(15.875,-3.175,3.175,-3.175,3.175,-3.175);patternFlags=(0,0,0,0,0,0)",discipline:"Shared"}];function Gy(a){return`${a.category}:${a.name.trim().toUpperCase()}`}function Xy(a,r,s=!1){const o=s?[]:[...M2,...$2],l=new Map;for(const f of o)l.set(Gy(f),f);const u=new Map,m=f=>(f.projectId===r&&f.projectId?2:0)+(f.discipline==="Shared"?0:1);for(const f of a){if(f.projectId&&f.projectId!==r)continue;const g=Gy(f),y=u.get(g);if(y&&m(y)===m(f)&&y.detail!==f.detail)throw new Error(`Conflicting approved Legends ${f.category} records named "${f.name}". No arbitrary record was selected.`);(!y||m(f)>m(y))&&u.set(g,f)}for(const[f,g]of u)l.set(f,g);return[...l.values()].map(F2)}function F2(a){if(a.category!=="layer"||a.name.trim().toLowerCase()!==Nv.name.toLowerCase())return a;const r=a.detail.split(";").map(o=>o.trim()).filter(Boolean),s=r.findIndex(o=>/^linetype\s*=/i.test(o));return s>=0?r[s]="linetype=CONTINUOUS":r.push("linetype=CONTINUOUS"),{...a,detail:r.join(";")}}function Wy(a,r){const s=a.match(new RegExp(`(?:^|;)${r}=\\(([^)]*)\\)`,"i"));if(!s)return null;const o=s[1].trim();return!o||/^nil$/i.test(o)?[]:o.split(/[\s,]+/)}function U2(a,r){const s=a.match(new RegExp(`(?:^|;)${r}=(.*?)(?=;[A-Za-z][A-Za-z0-9_]*=|$)`,"i"));if(!s)return null;const o=[],l=/\(\s*(\d+)\s*\.\s*(?:"((?:\\.|[^"])*)"|([^\s)]+))\s*\)/g;let u;for(;(u=l.exec(s[1]))!==null;){const m=u[2]===void 0?u[3]:u[2].replaceAll('\\"','"').replaceAll("\\\\","\\");o.push({code:Number(u[1]),value:m})}return o}function B2(a){let r=0;for(const o of a.toUpperCase())r=r*31+o.charCodeAt(0)>>>0;return`P2DWG_${a.toUpperCase().replace(/[^A-Z0-9_-]/g,"_").slice(0,16)||"SHAPE"}_${r.toString(36).toUpperCase()}`}function Cv(a,r){const s=Wy(r,"pattern"),o=Wy(r,"patternFlags")??[];if(!s?.length||o.length>0&&o.length!==s.length)return null;const l=s.map(Number),u=o.map(Number);if(l.some(S=>!Number.isFinite(S))||l.every(S=>S===0)||l.reduce((S,T)=>S+Math.abs(T),0)<=0||u.some(S=>!Number.isInteger(S)))return null;const m=U2(r,"complexData"),f=new Map,g=/\(\s*"((?:\\.|[^"])*)"\s*\.\s*"((?:\\.|[^"])*)"\s*\)/g,y=r.match(/(?:^|;)shapeFonts=(.*)$/i);let p;if(y)for(;(p=g.exec(y[1]))!==null;)f.set(p[1].replaceAll('\\"','"').toUpperCase(),p[2].replaceAll('\\"','"'));const b=[];let v=0;for(let S=0;S<l.length;S+=1){const T=u[S]??0;let L=m?.findIndex((ie,re)=>re>=v&&ie.code===49)??-1;if(L<0||!m){if(T!==0)return null;b.push({length:l[S],flags:0});continue}const I=m[L];if(Math.abs(Number(I.value)-l[S])>1e-8)return null;const C=m[L+1];if(!C||C.code!==74)return null;const x=Number(C.value);if(!Number.isInteger(x)||x!==T)return null;if(v=L+2,x===0){b.push({length:l[S],flags:0});continue}if(x!==4)return null;const O=ie=>{for(;v<m.length&&m[v].code!==ie&&m[v].code!==49;)v+=1;if(v>=m.length||m[v].code!==ie)return null;const re=m[v].value;return v+=1,re},R=Number(O(75)),P=O(340),k=Number(O(46)),ae=Number(O(50)),W=Number(O(44)),ne=Number(O(45)),fe=P?f.get(P.toUpperCase()):void 0;if(!Number.isInteger(R)||R<=0||!P||!fe||!/^[a-z0-9_.-]+\.shx$/i.test(fe)||![k,ae,W,ne].every(Number.isFinite)||k<=0)return null;b.push({length:l[S],flags:4,shapeNumber:R,styleName:B2(a),shapeFile:fe,scale:k,rotation:ae,offsetX:W,offsetY:ne})}const w=l.reduce((S,T)=>S+Math.abs(T),0),_=r.match(/(?:^|;)patternLength=([^;]+)/i)?.[1],D=_===void 0?w:Number(_);return!Number.isFinite(D)||D<=0||Math.abs(D-w)>Math.max(1e-7,w*1e-7)?null:{patternLength:D,segments:b}}function z2(a){const r=new Set(["CONTINUOUS","BYLAYER","BYBLOCK"]),s=new Map(a.filter(o=>o.category==="linetype").map(o=>[o.name.trim().toUpperCase(),o]));for(const o of a.filter(l=>l.category==="layer")){const l=o.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!l||r.has(l.toUpperCase()))continue;const u=s.get(l.toUpperCase());if(!u||!Cv(u.name,u.detail))throw new Error(`Layer "${o.name}" requires linetype "${l}", but its complete supported definition is not approved. Review/re-extract that linetype first; the runner will not silently substitute Continuous.`)}}function rt(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function Gl(a){if(!Number.isFinite(a))throw new Error("An approved block has a non-finite geometry signature. Re-index it before preparing the runner.");return Number(a.toFixed(8)).toString()}function Y2(a,r){return a===null||a.has(r)}function H2(a,r){return r===null?[...a]:a.filter(s=>r.has(s))}function V2(a,r,s){const o=new Set(a??r);return o.has(s)?o.delete(s):o.add(s),o}function G2(a,r,s){if(a===null)return null;const o=new Set(s),l=new Set([...a].filter(u=>o.has(u)));for(const u of s)r.has(u)||l.add(u);return l}const da=(a,r,s="")=>a.find(o=>o.code===r)?.value.trim()??s,oi=a=>`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`,Ku=a=>a.replaceAll("\\","/").split("/").at(-1)??a,gi=a=>{const r=Number(a);if(!a.trim()||!Number.isFinite(r))throw new Error("Legends DXF contains an invalid numeric table property.");return r},X2=a=>a>=40&&a<=99&&a!==70||a>=140&&a<=149||a>=170&&a<=179||a>=270&&a<=299||a>=370&&a<=389||a>=420&&a<=429||a>=440&&a<=459,W2=a=>a.code>=50&&a.code<=58?gi(a.value)*Math.PI/180:gi(a.value),Ky=a=>`(${a.code} . ${W2(a)})`;function K2(a,r){const s=new Xp(a),o=[...s.tables.values()].flatMap(f=>f.records),l=new Map(o.map(f=>[da(f,da(f,0)==="DIMSTYLE"?105:5).toUpperCase(),f])),u=[],m=(f,g,y)=>{u.push({category:f,name:g,detail:y,discipline:r.discipline,sourceId:r.id})};for(const f of s.tables.get("LAYER")?.records??[]){const g=da(f,2);if(da(f,420))throw new Error(`Legends layer "${g}" uses TrueColor; explicit ACI conversion approval is required instead of silently dropping its color.`);m("layer",g,s.layerDetails(g))}for(const f of s.tables.get("STYLE")?.records??[]){const g=da(f,2);g&&m("textStyle",g,`font=${Ku(da(f,3))};bigfont=${Ku(da(f,4))};height=${da(f,40,"0")};width=${da(f,41,"1")};oblique=${gi(da(f,50,"0"))*Math.PI/180}`)}for(const f of s.tables.get("LTYPE")?.records??[]){const g=f.filter(v=>v.code===49).map(v=>gi(v.value)),y=f.filter(v=>v.code===74).map(v=>gi(v.value)),p=f.filter(v=>[9,40,44,45,46,49,50,73,74,75,340].includes(v.code)).map(v=>[9,340].includes(v.code)?`(${v.code} . ${oi(v.value.trim())})`:Ky(v)),b=f.filter(v=>v.code===340).map(v=>{const w=l.get(v.value.trim().toUpperCase());if(!w)throw new Error(`Legends linetype "${da(f,2)}" has an unresolved shape-font reference.`);return`(${oi(v.value.trim())} . ${oi(Ku(da(w,3)))})`});m("linetype",da(f,2),`description=${da(f,3).replaceAll(";"," ")};patternLength=${da(f,40,"0")};pattern=(${g.join(" ")});patternFlags=(${y.join(" ")});complexData=(${p.join(" ")});shapeFonts=(${b.join(" ")})`)}for(const f of s.tables.get("DIMSTYLE")?.records??[]){const g=[],y=[],p=[];for(const b of f)if(![-1,0,2,5,70,100,102,105,330].includes(b.code))if(X2(b.code))g.push(Ky(b));else if([3,4].includes(b.code))g.push(`(${b.code} . ${oi(b.value)})`);else if(b.code>=340&&b.code<=347){const v=l.get(b.value.trim().toUpperCase()),w=v?da(v,2):"";w?y.push(`(${b.code} . ${oi(w)})`):p.push(b.code)}else p.push(b.code);m("dimensionStyle",da(f,2),`format=DXF_PROPERTIES_V1;recordComplete=1;dxfData=(${g.join(" ")});resources=(${y.join(" ")});unsupportedCodes=(${p.join(" ")})`)}return u}async function Z2(a,r,s,o,l){const u=o.filter(v=>v.category==="company-standard"&&v.format==="DXF"&&["Shared",s].includes(v.discipline)),m=u.filter(v=>v.standardsMaster);if(m.length>1)throw new Error("LEGENDS_SOURCE_CONFLICT: more than one global Legends master is selected for this discipline. Keep one master; no source was chosen arbitrarily.");const f=m[0]??(u.length===1?u[0]:void 0),g=Qb(f?{...a,companyItems:[]}:a,r,s).map(v=>{const w=_=>v.fields.find(D=>D.label===_)?.value.trim()??"";return{name:w("CAD name"),category:v.category,detail:w("Extracted details"),discipline:w("Source discipline"),libraryItemId:v.id,sourceId:w("Source drawing ID"),...v.projectId?{projectId:v.projectId}:{}}});if(!f){if(u.length>1)throw new Error("LEGENDS_SOURCE_REQUIRED: select one saved DXF as the global Legends master once in the Legends Library. It will then be used by every project automatically.");return PS(a,r,s),g}if(f.bytes>50*1024*1024)throw new Error("The private Legends DXF exceeds the supported 50 MB table-reader limit.");const y=K2(await l(f.id),f),p=v=>`${v.category}:${v.name.toUpperCase()}`,b=new Map(y.map(v=>[p(v),v]));for(const v of g)r&&v.projectId===r&&b.set(p(v),v);return[...b.values()]}function Q2(a,r,s=""){const o=a.filter(y=>y.reviewStatus==="reviewed"&&y.sourceKind==="extracted-dwg"&&(y.scope!=="project"||!!(s&&y.projectId===s))),l=(y,p)=>y.fields.find(b=>b.label===p)?.value?.trim()??"",u=o.filter(y=>[r,"Shared"].includes(l(y,"Source discipline"))),m=u.filter(y=>y.category==="layer"&&l(y,"CAD name")&&l(y,"CAD name").toUpperCase()!=="0"),f=new Set(m.map(y=>l(y,"CAD name").toLowerCase()));return{symbols:u.filter(y=>y.category==="symbol"&&["Source drawing ID","Block asset ID","Block name","Fallback category"].every(p=>l(y,p))&&f.has(l(y,"Target CAD layer").toLowerCase())).length,layers:m.length,textStyles:u.filter(y=>y.category==="textStyle").length,otherDisciplineSymbols:o.filter(y=>y.category==="symbol"&&["PFD","P&ID"].includes(l(y,"Source discipline"))&&l(y,"Source discipline")!==r).length}}const Ip=1024*1024,J2=500*Ip;function Dr(a){return a<1024?`${a} B`:a<Ip?`${(a/1024).toFixed(1)} KB`:`${(a/Ip).toFixed(1)} MB`}function eD(a){const r=a.type.split(";",1)[0].trim().toLowerCase(),s=a.name.trim().toLowerCase().endsWith(".pdf");return r==="application/pdf"||s}async function tD(a){const[r,s]=await Promise.all([dn(()=>import("./pdf-TYrZqVzP.js"),[]),dn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);r.GlobalWorkerOptions.workerSrc=s.default;const o=r.getDocument({data:new Uint8Array(a.slice(0))});try{return(await o.promise).numPages}finally{await o.destroy().catch(()=>{})}}async function aD(a,r){const[s,o]=await Promise.all([dn(()=>import("./pdf-TYrZqVzP.js"),[]),dn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);s.GlobalWorkerOptions.workerSrc=o.default;const u=await s.getDocument({data:new Uint8Array(a.slice(0))}).promise;try{const m=[],f=[];for(let g=1;g<=u.numPages;g+=1){r?.(g,u.numPages);const y=await u.getPage(g),p=y.getViewport({scale:1});m.push({width:p.width,height:p.height});const b=await y.getTextContent(),v=[];for(const w of b.items)"str"in w&&v.push({text:w.str,x:w.transform[4],y:w.transform[5],width:w.width,height:w.height||Math.hypot(w.transform[2],w.transform[3])});f.push(s2(v)),y.cleanup()}return{pageSizes:m,pageDrawingNames:f}}finally{await u.destroy().catch(()=>{})}}function nD({discipline:a,groups:r,selectedClientId:s,selectedClientLabel:o,onSelectClient:l}){const[u,m]=M.useState([]),[f,g]=M.useState(null),[y,p]=M.useState(!0),[b,v]=M.useState(""),[w,_]=M.useState(0),[D,S]=M.useState([]),[T,L]=M.useState(null),[I,C]=M.useState(null),[x,O]=M.useState(null),[R,P]=M.useState(null),[k,ae]=M.useState(0),[W,ne]=M.useState(1),[fe,ie]=M.useState(null),[re,H]=M.useState(""),[J,me]=M.useState(""),[xe,j]=M.useState([]),[te,z]=M.useState(0),[G,le]=M.useState(""),[ue,be]=M.useState(null),[Le,ke]=M.useState(null),[ht,at]=M.useState(!1),[ot,dt]=M.useState(!1),[Lt,gt]=M.useState(""),[F,he]=M.useState(!1),[ge,Y]=M.useState(""),[pe,Ne]=M.useState(null),[ye,qe]=M.useState(!1),[Ze,Fe]=M.useState(""),[$e,Qt]=M.useState("1"),we=M.useRef([]),Ue=M.useRef(null),Ce=M.useRef(!0),ra=M.useRef(!1),qt=M.useRef(0),_a=M.useRef(new Set),Mt=M.useRef(a);Mt.current=a;const Ba=typeof globalThis.crypto?.subtle<"u",Pt=M.useMemo(()=>qb(r),[r]),Je=M.useMemo(()=>{const U=new Set(H2(u.map(N=>N.id),f));return u.filter(N=>U.has(N.id))},[f,u]),ga=M.useMemo(()=>JSON.stringify({discipline:a,mappingProjectId:re,titleBlockGroupId:J,titleBlockId:Le?.titleBlockId??null,titleBlockVersion:Le?.version??null,sourceRevision:k,sources:Je.map(U=>[U.id,U.hash,U.alias,U.originalName])}),[a,re,J,Le?.titleBlockId,Le?.version,Je,k]);M.useEffect(()=>{!pe||pe.inputSignature===ga||(Ne(null),Y("Runner inputs changed. Prepare a new ZIP before downloading the current selection."))},[pe,ga]),M.useEffect(()=>()=>{pe&&URL.revokeObjectURL(pe.url)},[pe]);const Yt=pe?.inputSignature===ga?pe:null,Dn=()=>g(null),Pe=()=>g(new Set),$t=U=>{g(N=>V2(N,u.map($=>$.id),U))};M.useEffect(()=>{if(me(s),!s){H("");return}try{const U=En();H(U.projects[s]?s:"")}catch{H("")}},[s]);const yt=M.useCallback((U,N)=>{if(!Ce.current)return;qt.current+=1;const $=qt.current;S(Z=>[...Z.slice(-5),{id:$,kind:U,text:N}])},[]);M.useEffect(()=>{const U=()=>{try{const N=En(),$=s&&N.projects[s]?[s]:[];j($.map((Z,ve)=>({id:Z,label:Pt.find(Te=>Te.id===Z)?.label??`Project ${String(ve+1).padStart(2,"0")}`}))),be(Q2([...N.companyItems,...re?N.projects[re]?.items??[]:[]],a,re)),le(new Date().toLocaleTimeString())}catch(N){be(null),yt("error",N instanceof Error?N.message:"The approved CAD library could not be loaded.")}};return U(),window.addEventListener("focus",U),window.addEventListener("storage",U),window.addEventListener(vi,U),()=>{window.removeEventListener("focus",U),window.removeEventListener("storage",U),window.removeEventListener(vi,U)}},[yt,Pt,a,re,te,s]),M.useEffect(()=>{let U=!0;return ke(null),gt(""),J?(at(!0),xy(J,a).then(N=>{U&&ke(N)}).catch(N=>{U&&gt(N instanceof Error?N.message:"The local project title block could not be read.")}).finally(()=>{U&&at(!1)}),()=>{U=!1}):(at(!1),()=>{U=!1})},[a,J]),M.useEffect(()=>{J&&!Pt.some(U=>U.id===J)&&(me(""),ke(null),gt(""))},[Pt,J]);const Qe=M.useCallback(async()=>{try{const[U,N]=await Promise.all([Ws(a),_A()]);if(!Ce.current||Mt.current!==a)return;const $=U.map(ve=>ve.id),Z=_a.current;g(ve=>G2(ve,Z,$)),_a.current=new Set($),m(U),_(N),v("")}catch(U){Ce.current&&v(U instanceof Error?U.message:"Saved PDFs could not be loaded.")}finally{Ce.current&&p(!1)}},[a]),va=async(U,N,$,Z)=>{await Yl(U.id,{analysisStatus:"extracting",analysisPagesDone:0,analysisRecordCount:0,analysisMessage:"",autocadStatus:"not-connected"}),Ce.current&&await Qe();let ve;try{ve=await GA(N,Z,$)}catch(et){throw $()?et:new Zt("cancelled","EDE extraction paused.")}if(!$())throw new Zt("cancelled","EDE extraction paused.");await LA(U.id,ve.pageText);const Te=VA(ve.pageText),Ee=t2(a==="PFD"?"pfd":"pid",{id:U.id,alias:U.alias},[...ve.candidates,...Te]);Ce.current&&ae(et=>et+1);const je=ve.pageText.some(et=>et.searchableText.trim()||et.ocrTiles.some(Ct=>Ct.trim())),Ge=Ee.recordCount||je?"needs-review":"no-tags";return await Yl(U.id,{analysisStatus:Ge,analysisPagesDone:ve.pages,analysisRecordCount:Ee.recordCount,analysisMessage:ve.ocrPages?`Page text and OCR from ${ve.ocrPages} page(s) are saved locally. ${ve.candidates.length} tag candidate(s) and ${Te.length} note(s) need review.`:`Page text is saved locally. ${ve.candidates.length} tag candidate(s) and ${Te.length} note(s) need review.`,autocadStatus:"not-connected"}),{...Ee,tagCount:ve.candidates.length,noteCount:Te.length}};M.useEffect(()=>{Ce.current=!0,p(!0),O(null),ne(1),Qe();const U=()=>{Qe()};return window.addEventListener("focus",U),()=>{window.removeEventListener("focus",U),Ce.current=!1,we.current.forEach(N=>{N.cancelled=!0}),we.current=[]}},[Qe]),M.useEffect(()=>{if(ra.current)return;const U=new URLSearchParams(window.location.search).get("pdf"),N=u.find(ve=>ve.id===U);if(!N)return;const $=new URLSearchParams(window.location.search).get("record");$&&P($),ra.current=!0,O(N.id);const Z=Number(new URLSearchParams(window.location.search).get("page"));ne(Number.isInteger(Z)&&Z>=1&&Z<=N.pageCount?Z:1),window.setTimeout(()=>document.querySelector('[data-testid="panel-source-page"]')?.scrollIntoView({behavior:"smooth",block:"center"}),100)},[u]);const en=async(U,N,$)=>{const Z=a,ve=()=>!U.cancelled&&Ce.current&&Mt.current===Z;U.state="working";try{if(U.file.size>Dp)throw new Zt("too-large","A PDF is larger than 100 MB and was skipped.");const Te=await U.file.arrayBuffer();if(!ve())return;let Ee;try{Ee=await tD(Te)}catch(et){const Ct=et?.name;throw Ct==="PasswordException"?new Error("A PDF is password-protected. Remove the password and add it again."):Ct==="InvalidPDFException"||Ct==="FormatError"?new Error("A file is not a valid PDF, or it is damaged."):new Error("A PDF could not be read. It may be damaged.")}if(!ve())return;if(Ee<1)throw new Error("A PDF has no pages.");let je;try{je=await Uy(Te)}catch{throw new Error("Duplicate check is not supported in this browser, so the PDF was not saved.")}if(!ve())return;const Ge=await IA({discipline:Z,bytes:Te,pageCount:Ee,hash:je,originalName:U.file.name},ve);N.pagesDone+=Ee,Ce.current&&(L({total:$,done:N.done,pagesDone:N.pagesDone,active:1,phase:"extracting",currentAlias:Ge.alias,pageNow:0,pageTotal:Ee}),await Qe());try{const et=await va(Ge,Te,ve,(Ct,nn)=>{Ce.current&&L(Ya=>Ya&&{...Ya,phase:"extracting",currentAlias:Ge.alias,pageNow:Ct,pageTotal:nn})});ve()&&yt("info",`${Ge.alias}: ${et.tagCount} tag candidate(s) and ${et.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(et){const Ct=et instanceof Zt&&et.code==="cancelled",nn=Ct?"Extraction paused. Resume it from this saved PDF.":By(et);await Yl(Ge.id,{analysisStatus:Ct?"paused":"failed",analysisMessage:nn}).catch(()=>{}),!Ct&&ve()&&yt("error",`${Ge.alias}: ${nn}`)}U.state="done",Ce.current&&await Qe()}catch(Te){U.state="failed",!(Te instanceof Zt&&Te.code==="cancelled")&&ve()&&yt("error",Te instanceof Error?Te.message:"A PDF could not be added.")}finally{N.done+=1,Ce.current&&L(Te=>Te&&{...Te,total:$,done:N.done,pagesDone:N.pagesDone,active:0})}},Nn=U=>{if(T||y||b||!U.length)return;const N=U.filter(eD);if(N.length<U.length&&yt("error",`${U.length-N.length} file(s) skipped. Choose PDF files only.`),!N.length)return;const $=N.map(Ee=>({id:++qt.current,file:Ee,cancelled:!1,state:"queued"}));we.current=[...we.current,...$];const Z={done:0,pagesDone:0};L({total:$.length,done:0,pagesDone:0,active:0,phase:"checking"});let ve=0;(async()=>{for(;ve<$.length&&Ce.current;){const Ee=$[ve++];if(Ee.cancelled){Z.done+=1;continue}await en(Ee,Z,$.length)}})().then(()=>{if(we.current=we.current.filter(je=>!$.includes(je)),!Ce.current)return;const Ee=$.filter(je=>je.state==="done").length;Ee&&yt("info",`${Ee} PDF(s) saved on this device. Check each PDF's EDE status below; AutoCAD is not connected.`),L(null)})},Ht=async U=>{if(!(T||I)){C(U.id),L({total:1,done:0,pagesDone:0,active:1,phase:"extracting",currentAlias:U.alias,pageNow:0,pageTotal:U.pageCount});try{const N=await ri(U.id),$=await va(U,N,()=>Ce.current,(Z,ve)=>{Ce.current&&L(Te=>Te&&{...Te,phase:"extracting",pageNow:Z,pageTotal:ve})});yt("info",`${U.alias}: ${$.tagCount} tag candidate(s) and ${$.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(N){const $=By(N);await Yl(U.id,{analysisStatus:"failed",analysisMessage:$}).catch(()=>{}),yt("error",`${U.alias}: ${$}`)}finally{L(null),C(null),await Qe()}}},za=()=>{we.current.forEach(U=>{U.state!=="done"&&(U.cancelled=!0)}),yt("info","Remaining imports were cancelled. Finished files stay saved.")},Vt=async U=>{ie(null);try{await mv([U]),x===U&&O(null),await Qe()}catch{yt("error","The PDF could not be deleted from local storage.")}},At=async()=>{ie(null),we.current.forEach(U=>{U.cancelled=!0});try{await PA(a),O(null),await Qe()}catch{yt("error","Saved PDFs could not be cleared.")}},Dt=async U=>{try{const N=await ri(U.id),$=URL.createObjectURL(new Blob([N],{type:"application/pdf"})),Z=document.createElement("a");Z.href=$,Z.download=`original-source-${a==="PFD"?"pfd":"pid"}-pdf-${U.aliasNumber}.pdf`,document.body.appendChild(Z),Z.click(),Z.remove(),setTimeout(()=>URL.revokeObjectURL($),4e3)}catch{yt("error","The original PDF could not be read for download.")}},Ft=async U=>{if(!(!U||!J)){if(U.size>ev){gt("The project title block is larger than the 100 MB local upload limit."),Ue.current&&(Ue.current.value="");return}if(Le&&!window.confirm("Replace the saved title block for this project in this browser? The previous local file will be replaced.")){Ue.current&&(Ue.current.value="");return}dt(!0),gt("");try{await eT(J,a,U.name,new Uint8Array(await U.arrayBuffer())),ke(await xy(J,a)),gt("Title block saved for this group in this browser.")}catch(N){gt(N instanceof Error?N.message:"The project title block could not be saved locally.")}finally{dt(!1),Ue.current&&(Ue.current.value="")}}},pn=async()=>{if(!(!J||!Le)&&window.confirm("Remove this client folder title block from this browser? Existing generated DWGs are not changed.")){gt("");try{await tT(J,a),ke(null),gt("Group title block removed from this browser.")}catch(U){gt(U instanceof Error?U.message:"The project title block could not be removed.")}}},Zn=async()=>{if(!Je.length){Y("Select at least one PDF to include in the AutoCAD runner.");return}if(!J){Y("Choose the project folder and its saved title block. Every drawing page needs the shared title-block XREF for automatic scaling.");return}if(T!==null||F||ot||y||b)return;he(!0),Ne(null);const U=async N=>{Ce.current&&(Y(N),await new Promise($=>window.setTimeout($,0)))};try{await U("Checking selected PDFs and project title block…");const N=Je.reduce((Ae,Re)=>Ae+Re.size,0);await U("Reading the saved project title block…");const $=J?await JS(J,a):null;if(!$)throw new Error("Upload a standalone DWG title block for the selected client folder before preparing its AutoCAD runner.");if(N+($?.bytes??0)>J2)throw new Error("The saved source PDFs and client title block exceed the 500 MB limit for this local AutoCAD runner package.");await U("Loading approved Legends and project mappings…");const Z=En();if(re&&!Z.projects[re])throw new Error("That project library is no longer available. Select a current project mapping or use Legends Library only.");const Ee=[...Z.companyItems,...re?Z.projects[re]?.items??[]:[]].filter(Ae=>Ae.category==="symbol"&&Ae.reviewStatus==="reviewed"&&Ae.sourceKind==="extracted-dwg"&&[a,"Shared"].includes(Ae.fields.find(Re=>Re.label==="Source discipline")?.value?.trim()??"")).flatMap(Ae=>{const Re=Ha=>Ae.fields.find(er=>er.label===Ha)?.value?.trim()??"",Gt=Re("Source drawing ID"),bt=Re("Block asset ID"),Et=Re("Block name"),Jt=Re("Fallback category"),Cn=Re("Target CAD layer"),wt=Re("Source discipline");if(!Gt||!bt||!Et||!Jt||wt!=="PFD"&&wt!=="P&ID"&&wt!=="Shared")return[];if(!Cn||Cn.toUpperCase()==="0")throw new Error(`Approved block "${Et}" has no valid target CAD layer. Re-review it and select an approved non-zero layer.`);let La;if(Jt.toLowerCase()==="valve"){const Ha=Re("Wipeout mask boundary");try{La=as(Ha)}catch(er){throw new Error(`Approved valve "${Et}" has no valid reviewed body mask. Re-review the valve outline before preparing the AutoCAD runner. ${er instanceof Error?er.message:""}`)}}return[{sourceId:Gt,blockAssetId:bt,blockName:Et,fallbackCategory:Jt,targetLayer:Cn,discipline:wt,...La?{wipeoutBoundary:La}:{},...Ae.scope==="project"&&Ae.projectId?{projectId:Ae.projectId}:{}}]});await U("Checking the approved Legends layer, text, and linetype standards…");const je=await Z2(Z,re||void 0,a,await rc(),Qs),Ge=[...new Set(Ee.map(Ae=>Ae.blockAssetId))],et=[];for(const[Ae,Re]of Ge.entries()){await U(`Loading approved CAD block ${Ae+1} of ${Ge.length}…`);const[Gt,bt]=await Promise.all([av(Re),tv(Re)]);et.push({id:Re,content:Gt,format:bt.format??"DWG",...bt.geometryDescriptor?{geometryDescriptor:bt.geometryDescriptor}:{}})}const Ct=new Map(et.map(Ae=>[Ae.id,Ae])),nn=new Map((await rc()).map(Ae=>[Ae.id,Ae])),Ya=new Map;for(const Ae of Ee){const Re=Ct.get(Ae.blockAssetId)?.geometryDescriptor;if(Re?.primitives.length&&Re.bounds)continue;const Gt=Ya.get(Ae.sourceId)??[];Gt.push(Ae),Ya.set(Ae.sourceId,Gt)}const Qn=[];for(const[Ae,Re]of Ya){await U("Checking approved block geometry against its local source drawing…");const Gt=nn.get(Ae),bt=Re.map(Et=>Ct.get(Et.blockAssetId)).filter(Et=>!!Et);if(!Gt||Gt.format!=="DXF"){for(const Et of bt)Et.geometryIndexError=Gt?"SOURCE_DWG_REQUIRES_OVERVIEW_DXF":"SOURCE_NOT_AVAILABLE";continue}try{const Et=await Qs(Ae);if(Et.byteLength>50*1024*1024){for(const wt of bt)wt.geometryIndexError="SOURCE_DXF_TOO_LARGE";continue}const Jt=new TextDecoder("windows-1252").decode(Et),Cn=sc(Jt,[...new Set(Re.map(wt=>wt.blockName))]);for(const wt of Re){const La=Ct.get(wt.blockAssetId);if(!La)continue;const Ha=Cn.get(wt.blockName)?.geometryDescriptor;if(!Ha||!Ha.primitives.length||!Ha.bounds){La.geometryIndexError="BLOCK_NOT_FOUND_OR_UNSUPPORTED";continue}La.geometryDescriptor=Ha,Qn.push({id:La.id,sourceId:Ae,blockName:wt.blockName,content:La.content,geometryDescriptor:Ha})}}catch{for(const Et of bt)Et.geometryIndexError="SOURCE_DXF_UNREADABLE"}}Qn.length&&(await U("Saving verified block geometry locally…"),await bp(Qn));const Ia=new Map;await U("Linking reviewed EDE records to the selected PDFs…");const is=xi(a==="PFD"?"pfd":"pid"),ki=TS(is.flatMap(Ae=>Ae.rows.map(Re=>({stableId:Re.id,itemTag:Re.itemTag})))),Jn=DS(a,re||void 0);for(const Ae of is)for(const Re of Ae.rows){if(!Re.sourcePdfId)continue;const Gt=new Set([Number(Re.sourcePage),...(Re.sourceLocations??[]).map(bt=>bt.pageNumber)].filter(bt=>Number.isInteger(bt)&&bt>0));for(const bt of Gt){const Et=Ia.get(Re.sourcePdfId)??[];Et.some(Jt=>Jt.stableId===Re.id&&Jt.pageNumber===bt)||(Et.push({stableId:Re.id,itemTag:Re.itemTag,type:Re.type,pageNumber:bt,fields:Object.fromEntries(_i.map(Jt=>[Jt,Re[Jt]]))}),Ia.set(Re.sourcePdfId,Et))}}const ls=[];for(const[Ae,Re]of Je.entries()){await U(`Reading PDF ${Ae+1} of ${Je.length}: ${Re.alias}…`);const Gt=await ri(Re.id),bt=await Uy(Gt);if(bt.toLowerCase()!==Re.hash.toLowerCase())throw new Error(`${Re.alias} changed in local storage. Re-upload it before creating the AutoCAD runner.`);const Et=await aD(Gt,(Jt,Cn)=>{Ce.current&&Y(`Reading ${Re.alias} · page ${Jt} of ${Cn} · checking sheet size and drawing number…`)});ls.push({pageCount:Re.pageCount,pageSizesPoints:Et.pageSizes,pageDrawingNames:Et.pageDrawingNames,pdfBytes:new Uint8Array(Gt),sourceHash:bt,sourceId:Re.id,sourceName:Re.alias,originalName:Re.originalName??Re.alias,discipline:a,edeRecords:Ia.get(Re.id)??[],attributeRules:Jn,conflictingTags:ki,requireLegendsLibrary:!0,...re?{projectId:re}:{},...J?{titleBlockGroupId:J}:{}})}await U("Building the runner and packaging PDFs in the background…");const cs=await q2(ls,Ee,et,je,$?{groupId:$.projectId,workspaceType:$.workspaceType,titleBlockId:$.titleBlockId,titleBlockPath:$.titleBlockPath,xrefName:$.xrefName,expectedSize:$.expectedSize,version:$.version,content:$.content}:void 0,Ae=>{Ce.current&&Y(`Packaging runner ZIP · file ${Ae.fileIndex} of ${Ae.fileCount} · ${Ae.path} · ${Dr(Ae.processedBytes)} of ${Dr(Ae.fileBytes)}`)}),Ec=URL.createObjectURL(cs),no=Je.reduce((Ae,Re)=>Ae+Re.pageCount,0);Ne({url:Ec,filename:o2,version:rs,bytes:cs.size,sourceCount:Je.length,pageCount:no,inputSignature:ga}),Y(`Runner ${rs} is ready. Click Download ZIP below to start the browser download. It contains ${Je.length} selected PDF(s) and can create ${no} separate DWG file(s). DWG filenames use detected Drawing No/Title labels. Missing or ambiguous labels use unique fallback names; check pageOutputs in batch_manifest.json. Duplicate names receive a page suffix. ${Ee.filter(Ae=>(Ae.discipline===a||Ae.discipline==="Shared")&&(!Ae.projectId||Ae.projectId===re)).length} reviewed symbol mapping(s) and ${je.length} approved-source Legends layer/text/linetype/dimension standard(s) are included; exact records are in CAD_STANDARDS_MANIFEST.json. No generic layer defaults were substituted. Each page is uniformly calibrated to the shared title-block XREF frame; approved symbol/text checks run automatically and no calibration input is requested.`+($?" The selected client title block is included for 1:1 XREF attachment; keep its output companion DWG beside the generated pages.":""))}catch(N){Y(N instanceof Error?N.message:"The AutoCAD runner could not be prepared. Try a smaller PDF batch.")}finally{he(!1)}},os=async U=>{const N=Number($e);if(!Number.isFinite(N)||N<=0){Fe("Enter a scale multiplier greater than zero.");return}qe(!0),Fe("Reading PDF vector geometry…");try{const{buildPdfDxfPackage:$}=await dn(async()=>{const{buildPdfDxfPackage:je}=await import("./pdf-dxf-export-BO1HBaCD.js");return{buildPdfDxfPackage:je}},[]),Z=await $((U?[U]:u).map(je=>({aliasNumber:je.aliasNumber,bytes:()=>ri(je.id)})),N,(je,Ge,et)=>{Ce.current&&Fe(`Creating DXF: PDF ${je} · page ${Ge} of ${et}…`)},()=>Ce.current&&Mt.current===a);if(!Ce.current||Mt.current!==a)return;const ve=URL.createObjectURL(Z.blob),Te=document.createElement("a");Te.href=ve,Te.download="pdf-dxf-pages.zip",document.body.append(Te),Te.click(),Te.remove(),window.setTimeout(()=>URL.revokeObjectURL(ve),1e3);const Ee=Z.reports.length-Z.exported;Fe(`${Z.exported} DXF page(s) created${Ee?`; ${Ee} page(s) skipped—read the report`:""}. Raw vector output—not a verified exact PDF match. Compare each page with its source; library replacement and engineering scale are not verified.`)}catch($){Ce.current&&Fe($ instanceof Error?$.message:"DXF export failed; no CAD output was confirmed.")}finally{Ce.current&&qe(!1)}},sa=M.useMemo(()=>u.find(U=>U.id===x)??null,[u,x]),kr=M.useMemo(()=>{if(!x||!R)return[];try{const $=xi(a==="PFD"?"pfd":"pid").find(Z=>Z.sourcePdfId===x)?.rows.find(Z=>Z.id===R);return($?.sourceLocations??[]).filter(Z=>Z.pageNumber===W).map(Z=>({id:$.id,label:$.itemTag,location:Z}))}catch{return[]}},[a,W,x,k,R]),tn=u.reduce((U,N)=>U+N.pageCount,0),oa=T!==null,an=Math.min(100,w/Np*100);return c.jsxs("section",{className:"pdf-workflow","aria-labelledby":"pdf-workflow-title","data-testid":"panel-pdf-workflow",children:[c.jsxs("div",{className:"pdf-panel-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"pdf-kicker",children:["PDF INPUT · LOCAL SOURCE FILES · ",a]}),c.jsx("h2",{id:"pdf-workflow-title",children:"Source PDF files"}),c.jsxs("p",{children:["Add PDFs for this ",a," workspace. They stay in this browser and appear as PDF 1, PDF 2, and so on."]})]}),c.jsxs("div",{className:"pdf-actions",children:[c.jsxs("label",{className:"btn primary pdf-add-control","data-testid":"label-add-pdfs",children:[c.jsx(Mm,{size:15})," Add PDFs",c.jsx("input",{type:"file",accept:"application/pdf,.pdf",multiple:!0,"aria-label":"Add PDF files",disabled:oa||y||!!b||!Ba,onChange:U=>{Nn(Array.from(U.currentTarget.files??[])),U.currentTarget.value=""},"data-testid":"input-add-pdfs"})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>ie({type:"all"}),disabled:!u.length,"aria-label":"Clear all saved PDFs","data-testid":"button-clear-pdfs",children:[c.jsx(Ks,{size:14})," Clear all"]})]})]}),c.jsxs("div",{className:"pdf-trust-note","data-testid":"text-pdf-local-only",children:[c.jsx(Wn,{size:15}),c.jsxs("div",{className:"pdf-trust-copy",children:[c.jsxs("span",{children:[c.jsx("strong",{children:"Saved on this device only."})," PDFs are not uploaded, backed up, or synced. Clearing browser data removes them.",!Ba&&" New PDFs cannot be added in this browser because duplicate checking needs a secure connection."]}),c.jsxs("details",{className:"pdf-privacy-details",children:[c.jsx("summary",{children:"Privacy and scanned PDFs"}),c.jsxs("p",{children:["Original PDFs are not changed. Searchable text and scanned pages are read in this browser. The OCR code and language files may be downloaded, but the PDF itself is not sent. PDF aliases hide file names only; names and logos printed inside the pages remain visible."," ","Download an original if you need a separate copy."]})]})]})]}),c.jsx(pS,{}),c.jsxs("div",{className:"pdf-storage-line","data-testid":"text-pdf-storage",children:[c.jsxs("span",{children:[Dr(w)," of ",Dr(Np)," used (all disciplines)"]}),c.jsxs("span",{children:["Limit ",Dr(Dp)," per PDF"]})]}),c.jsx("div",{className:"pdf-meter",role:"progressbar","aria-label":"Local storage used","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(an),children:c.jsx("span",{style:{width:`${an}%`}})}),c.jsx("div",{style:{height:12}}),T&&c.jsxs("div",{className:"pdf-progress",role:"status","aria-live":"polite","data-testid":"status-pdf-progress",children:[c.jsxs("div",{className:"pdf-progress-top",children:[c.jsxs("span",{children:[c.jsx(Ca,{size:12,className:"pdf-spin"})," ",T.phase==="checking"?`Checking and saving: ${T.done} of ${T.total} file(s) finished · ${T.pagesDone} page(s) verified`:`${T.currentAlias??"PDF"} · reading page ${T.pageNow??0} of ${T.pageTotal??0} for EDE`]}),c.jsx("button",{type:"button",className:"btn",onClick:za,"data-testid":"button-cancel-import","aria-label":"Cancel remaining imports",children:"Cancel"})]}),c.jsx("div",{className:"pdf-meter",children:c.jsx("span",{style:{width:`${T.phase==="checking"?T.done/T.total*100:(T.done+(T.pageTotal?(T.pageNow??0)/T.pageTotal:0))/T.total*100}%`}})})]}),D.length>0&&c.jsx("ul",{className:"pdf-notes","aria-live":"polite","data-testid":"list-pdf-notes",children:D.map(U=>c.jsxs("li",{className:U.kind==="info"?"info":"",role:U.kind==="error"?"alert":void 0,"data-testid":`status-pdf-note-${U.id}`,children:[U.kind==="error"?c.jsx(_r,{size:14}):c.jsx(Xn,{size:14}),c.jsx("span",{children:U.text}),c.jsx("button",{type:"button","aria-label":"Dismiss message",onClick:()=>S(N=>N.filter($=>$.id!==U.id)),children:c.jsx(ep,{size:13})})]},U.id))}),u.length>0&&c.jsxs("div",{className:"pdf-batch-controls","data-testid":"pdf-batch-controls",children:[c.jsxs("div",{className:"pdf-batch-controls-copy",children:[c.jsx("strong",{children:"Choose PDFs for AutoCAD"}),c.jsxs("span",{"aria-live":"polite","data-testid":"text-pdf-batch-selection-count",children:[Je.length," of ",u.length," selected"]}),c.jsx("small",{children:"Only checked PDFs go into the runner. Select one or several."})]}),c.jsxs("div",{className:"pdf-batch-control-actions",children:[c.jsx("button",{type:"button",className:"btn",onClick:Dn,disabled:oa||F,"data-testid":"button-select-all-pdfs",children:"Select all"}),c.jsx("button",{type:"button",className:"btn",onClick:Pe,disabled:oa||F,"data-testid":"button-deselect-all-pdfs",children:"Deselect all"})]})]}),u.length>0&&Je.length===0&&c.jsx("p",{className:"pdf-batch-empty",role:"status","data-testid":"status-no-pdfs-selected",children:"No PDFs selected. Use Select all or tick a PDF row before downloading the runner."}),c.jsxs("div",{className:"pdf-queue","aria-label":"Saved PDF files",children:[fe&&c.jsxs("div",{className:"pdf-confirm",role:"alertdialog","aria-label":"Confirm delete","data-testid":"dialog-confirm-delete",children:[c.jsx("span",{children:fe.type==="all"?`Delete all ${u.length} saved ${a} PDF(s) from this device? This cannot be undone.`:"Delete this PDF from this device? This cannot be undone."}),c.jsx("button",{type:"button",className:"btn danger","data-testid":"button-confirm-delete",onClick:()=>fe.type==="all"?void At():void Vt(fe.id),children:"Delete"}),c.jsx("button",{type:"button",className:"btn","data-testid":"button-cancel-delete",onClick:()=>ie(null),children:"Keep"})]}),y?c.jsxs("div",{className:"pdf-queue-empty",role:"status","data-testid":"status-pdf-loading",children:[c.jsx(Ca,{size:16,className:"pdf-spin"})," Loading saved PDFs"]}):b?c.jsxs("div",{className:"pdf-queue-empty",role:"alert","data-testid":"status-pdf-load-error",children:[c.jsx(_r,{size:16})," ",b,c.jsx("button",{type:"button",className:"btn",onClick:()=>{p(!0),Qe()},"data-testid":"button-retry-load",children:"Try again"})]}):u.length?u.map(U=>c.jsxs("div",{className:`pdf-file-row${U.id===x?" is-selected":""}`,"data-testid":`row-pdf-file-${U.id}`,children:[c.jsxs("button",{type:"button",className:"pdf-select",onClick:()=>{O(U.id),P(null),ne(1)},"aria-label":`Preview ${U.alias}`,"aria-pressed":U.id===x,"data-testid":`button-select-pdf-${U.id}`,children:[c.jsx("span",{className:"pdf-file-icon",children:c.jsx(Xn,{size:17})}),c.jsxs("span",{className:"pdf-file-details",children:[c.jsx("strong",{className:"pdf-filename","data-testid":`text-pdf-name-${U.id}`,children:U.alias}),c.jsxs("span",{className:"pdf-file-meta",children:[U.pageCount," page(s) · ",Dr(U.size)," · saved locally"]}),c.jsxs("span",{className:"pdf-analysis-state","data-testid":`status-ede-${U.id}`,children:["EDE: ",U.analysisStatus==="needs-review"?`${U.analysisRecordCount??0} candidate(s) · review required`:U.analysisStatus==="no-tags"?"No tag candidates found":U.analysisStatus==="extracting"?I===U.id?"Extraction in progress":"Paused · resume available":U.analysisStatus==="failed"?"Extraction failed":U.analysisStatus==="paused"?"Paused · resume available":"Not extracted yet"," · AutoCAD: not connected"]}),U.analysisStatus==="failed"&&U.analysisMessage&&c.jsx("span",{className:"pdf-analysis-state",role:"status",children:U.analysisMessage})]})]}),c.jsxs("span",{className:"pdf-row-actions",children:[c.jsxs("label",{className:"pdf-batch-choice",children:[c.jsx("input",{type:"checkbox",checked:Y2(f,U.id),disabled:oa||F,onChange:()=>$t(U.id),"aria-label":`Process ${U.alias} in the AutoCAD batch`,"data-testid":`checkbox-batch-pdf-${U.id}`}),c.jsx("span",{children:"Process"})]}),U.analysisStatus!=="needs-review"&&I!==U.id&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:oa,onClick:()=>{Ht(U)},"data-testid":`button-extract-ede-${U.id}`,children:[c.jsx(Xn,{size:13})," ",U.analysisStatus==="failed"?"Retry EDE":U.analysisStatus==="paused"||U.analysisStatus==="extracting"?"Resume EDE":"Create EDE data"]}),(U.analysisStatus==="needs-review"||U.analysisStatus==="no-tags")&&c.jsx(fa,{className:"btn pdf-extract-btn",href:`/workspace/${a==="PFD"?"pfd":"pid"}/engineering-data?source=${encodeURIComponent(U.id)}`,children:"Open EDE"}),U.analysisStatus==="needs-review"&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:oa,onClick:()=>{Ht(U)},"data-testid":`button-refresh-source-links-${U.id}`,children:[c.jsx(Uw,{size:13})," Recheck tags & locations"]}),I===U.id&&c.jsxs("span",{className:"pdf-running-label",children:[c.jsx(Ca,{size:13,className:"pdf-spin"})," Reading"]}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Preview ${U.alias}`,onClick:()=>{O(U.id),P(null),ne(1)},"data-testid":`button-preview-pdf-${U.id}`,children:c.jsx(Ew,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Download original source ${U.alias}`,onClick:()=>{Dt(U)},"data-testid":`button-download-pdf-${U.id}`,children:c.jsx(Rr,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn danger","aria-label":`Remove ${U.alias}`,onClick:()=>ie({type:"one",id:U.id}),"data-testid":`button-remove-pdf-${U.id}`,children:c.jsx(ep,{size:15})})]})]},U.id)):c.jsxs("div",{className:"pdf-queue-empty","data-testid":"empty-pdf-queue",children:[c.jsx(Xn,{size:18}),c.jsxs("span",{children:["No saved PDFs for ",a]}),c.jsx("small",{children:"Add PDFs to keep them on this device. You can add several at once."})]})]}),c.jsx("div",{className:"pdf-page-summary",style:{marginTop:10},"data-testid":"text-pdf-page-summary",children:u.length?`${u.length} PDF(s) · ${tn} total page(s)`:oa?"Working on your files":"No readable PDFs saved yet"}),u.length>=100&&c.jsxs("div",{className:"pdf-trust-note",role:"note","data-testid":"text-large-batch-resume",children:[c.jsx(Wn,{size:15}),c.jsxs("span",{children:["This batch contains ",u.length," PDFs and ",tn," pages. The AutoCAD runner tracks every page in a local journal beside the DWGs, so you can resume later with the same unchanged kit and output name. Progress is recorded on the Windows workstation, not in this browser."]})]}),sa&&c.jsxs("div",{className:"pdf-source-box","data-testid":"panel-source-page",children:[c.jsxs("div",{className:"pdf-page-select",children:[c.jsx("label",{htmlFor:"pdf-page-picker",children:"Source page"}),c.jsx("select",{id:"pdf-page-picker",value:W,onChange:U=>ne(Number(U.target.value)),"data-testid":"select-source-page","aria-label":"Select source page",children:Array.from({length:sa.pageCount},(U,N)=>c.jsxs("option",{value:N+1,children:["Page ",N+1]},N+1))}),c.jsxs("span",{children:["of ",sa.pageCount," in ",sa.alias]})]}),c.jsx($1,{fileId:sa.id,alias:sa.alias,pageCount:sa.pageCount,page:W,onPageChange:ne,loadBytes:ri,markers:kr,onMarkerClick:U=>{const N=a==="PFD"?"pfd":"pid";window.location.assign(`/workspace/${N}/engineering-data?source=${encodeURIComponent(sa.id)}&record=${encodeURIComponent(U)}`)}})]}),c.jsxs("div",{className:"pdf-capabilities",children:[c.jsxs("div",{className:"pdf-capability-storage pdf-dxf-export",children:[c.jsx("div",{className:"capability-heading",children:c.jsx("strong",{children:"Create DXF — no AutoCAD needed"})}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Scale multiplier · 1 = PDF paper size in mm"}),c.jsx("input",{type:"number",min:"0.000001",step:"any",value:$e,onChange:U=>Qt(U.target.value),"aria-label":"DXF scale multiplier"})]}),c.jsx("button",{className:"btn primary",type:"button",disabled:!u.length||oa||y||ye||F||!!b,onClick:()=>{os(sa??void 0)},"data-testid":"button-export-dxf",children:ye?c.jsxs(c.Fragment,{children:[c.jsx(Ca,{size:14,className:"pdf-spin"})," Creating DXF…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Rr,{size:14})," ",sa?`${sa.alias} · Download DXF pages`:"Download all DXF pages"]})}),sa&&u.length>1&&c.jsx("button",{className:"btn",type:"button",disabled:oa||y||ye||F||!!b,onClick:()=>{os()},"data-testid":"button-export-all-dxf",children:"All PDFs · Download DXF pages"}),c.jsx("p",{children:"One editable DXF per vector PDF page. Scanned pages are not automatically traced. This exports raw PDF geometry, not library-standard symbols. Source details may remain—review/redact before sharing."}),Ze&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:Ze}),c.jsx(SS,{})]}),c.jsxs("div",{className:"pdf-capability-convert",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"01"}),c.jsx("strong",{children:"Page check"})]}),c.jsx("div",{className:"pdf-page-summary","data-testid":"text-pdf-page-summary",children:u.length?`${u.length} PDF(s) · ${tn} total page(s)`:"Add PDFs to prepare an AutoCAD runner."})]}),c.jsxs("div",{className:"pdf-capability-storage",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"02"}),c.jsx("strong",{children:"Local AutoCAD runner"})]}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Approved CAD mappings"}),c.jsxs("select",{value:re,disabled:ot,onChange:U=>H(U.target.value),"aria-label":"Approved CAD mappings for this runner",children:[c.jsx("option",{value:"",children:"Legends Library only"}),xe.map(U=>c.jsx("option",{value:U.id,children:U.label},U.id))]})]}),c.jsxs("div",{className:"runner-group-hint","aria-live":"polite","data-testid":"runner-mapping-inventory",children:[ue?c.jsxs(c.Fragment,{children:[c.jsxs("strong",{children:[ue.symbols," usable approved blocks · ",ue.layers," layers · ",ue.textStyles," Legends text styles for ",a]}),ue.symbols===0&&c.jsxs("p",{role:"status",children:["No compatible approved blocks: this kit cannot convert PDF symbols into approved CAD blocks. Approve ",a," or Shared symbols with an approved target layer first. Other-discipline symbols are not reused automatically."]}),ue.textStyles===0&&c.jsx("p",{children:"The runner uses the fixed global Arial Narrow style automatically; imported text height and position stay unchanged. Unconfirmed PDF text stays visible for review, and loose text needs an approved final text layer after review."}),ue.otherDisciplineSymbols>0&&c.jsxs("p",{children:[ue.otherDisciplineSymbols," approved symbol(s) belong to the other discipline and are excluded."]})]}):c.jsx("p",{children:"The mapping library could not be checked. Do not assume blocks or text formatting are available."}),c.jsx("button",{type:"button",className:"btn btn-ghost btn-small",onClick:()=>z(U=>U+1),children:"Refresh mapping counts"}),G&&c.jsxs("p",{role:"status",children:["Local mapping counts checked at ",G,". Refresh recounts saved approvals; it does not approve symbols."]})]}),c.jsxs("label",{className:"runner-group-choice",children:[c.jsxs("span",{children:[a," client folder for this batch"]}),c.jsxs("select",{value:J,disabled:!Pt.length||ot||F,onChange:U=>l(U.target.value),"aria-label":`${a} client folder for title block`,children:[c.jsx("option",{value:"",children:Pt.length?`Choose a ${a} client folder`:`Create a ${a} client folder first`}),Pt.map(U=>c.jsx("option",{value:U.id,children:U.label},U.id))]})]}),c.jsx("p",{className:"runner-group-hint",children:"Choose the client folder for this batch. All selected PDFs will use its title block, so select PDFs from one project."}),J?c.jsxs("div",{className:"runner-title-block","aria-label":"Project title block",children:[c.jsxs("div",{className:"runner-title-block-heading",children:[c.jsxs("strong",{children:["Client title block",o&&J===s?` · ${o}`:""]}),ht?c.jsx("span",{children:"Checking this browser…"}):Le?c.jsxs("span",{children:["Saved locally · ",Dr(Le.bytes)]}):c.jsx("span",{children:"Required for this project"})]}),!ht&&!Le&&c.jsx("p",{children:"Upload a standalone .DWG for this project. The runner attaches it as a model-space XREF at (0,0,0), rotation 0, scale 1:1, preserving its layers. Use matching drawing units."}),c.jsx("input",{ref:Ue,className:"runner-title-block-file",type:"file",accept:".dwg,application/acad","aria-label":"Choose project title block DWG",onChange:U=>{Ft(U.currentTarget.files?.[0])}}),c.jsxs("div",{className:"runner-title-block-actions",children:[c.jsx("button",{className:"btn",type:"button",disabled:ht||ot||F,onClick:()=>Ue.current?.click(),children:ot?c.jsxs(c.Fragment,{children:[c.jsx(Ca,{size:14,className:"pdf-spin"})," Saving locally…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Mm,{size:14})," ",Le?"Replace title block DWG":"Upload title block DWG"]})}),Le&&c.jsx("button",{className:"btn",type:"button",disabled:ot||F,onClick:()=>{pn()},children:"Remove"})]}),c.jsxs("p",{className:"runner-title-block-note",children:["The file stays in this browser and is added only to this ",a," workspace’s local runner. Use the same project output folder for future batches: all page DWGs reuse one PROJECT_TITLE_BLOCK.dwg by relative XREF. The runner keeps a local scope marker beside it; upload the shared DWG once, not the marker. Existing numbered copies are only reported, never deleted."]}),Lt&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:Lt})]}):c.jsx("p",{className:"runner-title-block-empty",children:Pt.length?`Select a ${a} client folder above to upload or use its title block.`:"Create a Technology, Project or Proposal, and Client folder to use a client title block."}),c.jsx(NS,{scope:`${a}:${re||"legends-default"}`},`${a}:${re}`),c.jsx("button",{className:"btn primary",type:"button",disabled:!Je.length||!J||!Le||oa||y||F||ht||ot||!!b,"aria-describedby":"runner-description",onClick:()=>{Zn()},"data-testid":"button-convert-to-dwg",children:F?c.jsxs(c.Fragment,{children:[c.jsx(Ca,{size:14,className:"pdf-spin"})," Preparing…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Qw,{size:14})," Prepare AutoCAD batch runner"]})}),c.jsx("p",{id:"runner-description",children:"The ZIP contains only the checked PDFs, individually exported approved blocks, and the selected project’s one shared title-block DWG XREF. A project folder and its saved title block are required for automatic 841 × 594 mm scaling. It does not include original mapping source DWGs. Run it in Windows AutoCAD. Unmatched symbols retain source geometry or use an approved same-category fallback with a red review cloud and source-page reference. A local journal tracks each page and lets the same unchanged batch resume without overwriting completed DWGs."}),Yt&&c.jsxs("div",{className:"pdf-runner-download-ready","data-testid":"prepared-runner-download",children:[c.jsxs("div",{className:"pdf-runner-download-copy",children:[c.jsx("strong",{children:"Runner ZIP ready to save"}),c.jsxs("span",{children:[Yt.filename," · ",Dr(Yt.bytes)," · ",Yt.sourceCount," PDF(s) · ",Yt.pageCount," page(s)"]})]}),c.jsxs("a",{className:"btn primary",href:Yt.url,download:Yt.filename,"data-testid":"button-download-prepared-runner",onClick:()=>Y(`Browser download requested for ${Yt.filename}. If the ZIP does not appear, click Download ZIP again or check your browser's Downloads list.`),children:[c.jsx(Rr,{size:14})," Download ZIP"]})]}),ge&&c.jsx("p",{role:"status","aria-live":"polite",className:"pdf-runner-message",children:ge})]})]}),c.jsxs("div",{className:"pdf-final-status",role:"note","data-testid":"text-conversion-unavailable",children:[c.jsxs("strong",{children:[c.jsx(Mw,{size:13,style:{verticalAlign:"-2px"}})," AutoCAD 2020 is not connected to this browser."]})," ","DXF vector export runs directly in this browser. Native DWG still requires the downloaded helper to run in Windows AutoCAD; the browser does not connect to AutoCAD."]}),c.jsx(CA,{discipline:a,onAddPdfs:Nn,clientFolderId:s||void 0,clientFolderLabel:o||void 0})]})}function Zy({discipline:a}){const[r]=M.useState(()=>{try{return{hierarchy:k1(),recovery:null}}catch(ie){const re=ie instanceof hi?ie:new hi("Saved groups could not be loaded from this browser.");return{hierarchy:tp(),recovery:{message:re.message,rawValue:re.rawValue}}}}),[s,o]=M.useState(r.hierarchy),[l,u]=M.useState(r.recovery),[m,f]=M.useState(""),[g,y]=M.useState(null),[p,b]=M.useState(""),[v,w]=M.useState(null),_=s[a],D=a==="pfd"?"PFD":"P&ID",S=rp(_,v),T=S&&(S.kind==="client"||S.kind==="legacy")?S.id:"",L=T?qb(_).find(ie=>ie.id===T)?.label??S?.name??"":"",I=ie=>w(ie||null);M.useEffect(()=>{if(!l)try{O1(s),f("")}catch(ie){f(ie instanceof Error?ie.message:"Groups could not be saved in this browser.")}},[s,l]);const C=(ie,re,H=[])=>({id:globalThis.crypto?.randomUUID?.()??`group-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:ie,kind:re,expanded:!0,children:H}),x=(ie,re)=>{b(re),y(ie)},O=()=>{const ie=C("New technology","technology",[C("Projects","projects"),C("Proposals","proposals")]);o(re=>({...re,[a]:[...re[a],ie]})),x(ie.id,ie.name),w(ie.id)},R=ie=>{const re=rp(_,ie);if(!re)return;const H=re.kind==="projects"?"project":re.kind==="proposals"?"proposal":re.kind==="project"||re.kind==="proposal"?"client":null;if(!H)return;const me=C(H==="project"?"New project":H==="proposal"?"New proposal":"New client",H);o(xe=>({...xe,[a]:Xl(xe[a],ie,j=>({...j,expanded:!0,children:[...j.children,me]}))})),x(me.id,me.name),w(me.id)},P=ie=>{const re=p.trim();if(!re||re.length>tc){f(`Folder names must be 1–${tc} characters.`),y(null);return}o(H=>({...H,[a]:Xl(H[a],ie,J=>({...J,name:re}))})),y(null),f("")},k=()=>y(null),ae=ie=>o(re=>({...re,[a]:Xl(re[a],ie,H=>({...H,expanded:!H.expanded}))})),W=ie=>{window.confirm(`Delete “${ie.name}” and all folders inside it? Saved title blocks and CAD sources are not deleted.`)&&(Ob(ie,v)&&w(null),Rv(ie,g)&&y(null),o(re=>({...re,[a]:kb(re[a],ie.id)})))},ne=()=>{if(l?.rawValue===null||l?.rawValue===void 0)return;const ie=new Blob([l.rawValue],{type:"application/json;charset=utf-8"}),re=URL.createObjectURL(ie),H=document.createElement("a");H.href=re,H.download="mapping-studio-hierarchy-backup.json",H.click(),window.setTimeout(()=>URL.revokeObjectURL(re),1e3)},fe=()=>{if(window.confirm("Clear the unreadable hierarchy saved in this browser? This cannot be undone. Download a backup first if you may need the saved data."))try{window.localStorage.removeItem(Up),window.localStorage.removeItem(Lb),o(tp()),u(null),f("")}catch{f("Browser storage could not be cleared. The saved hierarchy remains locked and unchanged.")}};return c.jsxs("main",{className:"hierarchy-page","data-discipline":a,children:[c.jsxs("header",{className:"hierarchy-topbar",children:[c.jsxs(fa,{href:"/",className:"studio-wordmark","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),c.jsxs("div",{className:"hierarchy-top-actions",children:[c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Saved on this device"]}),c.jsxs(fa,{href:"/",className:"btn subtle","data-testid":"link-discipline-selection",children:[c.jsx(db,{size:14})," Disciplines"]})]})]}),c.jsxs("div",{className:"hierarchy-frame",children:[c.jsxs("aside",{className:"hierarchy-sidebar",children:[c.jsx("div",{className:"sidebar-label",children:"DISCIPLINES"}),c.jsxs(fa,{href:"/workspace/pfd",className:`discipline-nav ${a==="pfd"?"active":""}`,"data-testid":"nav-pfd",children:[c.jsx(Pw,{size:16})," PFD"]}),c.jsxs(fa,{href:"/workspace/pid",className:`discipline-nav ${a==="pid"?"active":""}`,"data-testid":"nav-pid",children:[c.jsx(li,{size:16})," P&ID"]}),c.jsxs("div",{className:"sidebar-local-note",children:[c.jsx(Wn,{size:14}),c.jsx("span",{children:"PFD and P&ID groups stay separate."})]})]}),c.jsxs("section",{className:"hierarchy-main","aria-label":`${D} workspace`,children:[c.jsxs("div",{className:"hierarchy-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[D," workspace"]}),c.jsx("h1",{children:D}),c.jsx("p",{children:"Organize technology, project/proposal and client folders. Common standards stay in the company library."})]}),c.jsxs("div",{className:"hierarchy-heading-actions",children:[c.jsxs(fa,{href:`/workspace/${a}/engineering-data`,className:"btn edm-entry-link","data-testid":`link-engineering-data-${a}`,children:[c.jsx(qp,{size:14})," Engineering data"]}),c.jsxs("button",{className:"btn primary",onClick:O,disabled:!!l,"data-testid":"button-add-group",children:[c.jsx(mi,{size:15})," New technology"]})]})]}),l&&c.jsxs("div",{className:"hierarchy-recovery",role:"alert","data-testid":"status-hierarchy-recovery",children:[c.jsxs("div",{className:"recovery-title",children:[c.jsx(_r,{size:17}),c.jsx("strong",{children:"Saved groups need recovery"})]}),c.jsxs("p",{children:[l.message," Editing is disabled to protect the saved data."]}),l.rawValue!==null?c.jsx("button",{className:"btn",onClick:ne,"data-testid":"button-download-hierarchy-backup",children:"Download raw backup"}):c.jsx("p",{className:"recovery-unavailable",children:"A raw backup is unavailable because browser storage could not be read."}),c.jsx("button",{className:"btn danger",onClick:fe,"data-testid":"button-clear-hierarchy-storage",children:"Clear saved data and start over"})]}),m&&!l&&c.jsxs("div",{className:"storage-banner",role:"alert","data-testid":"status-hierarchy-storage",children:[c.jsx(_r,{size:15}),m]}),c.jsxs("div",{className:"hierarchy-panel",children:[c.jsxs("div",{className:"tree-head",children:[c.jsx("span",{children:"TECHNOLOGY · PROJECTS · PROPOSALS · CLIENTS"}),c.jsxs("span",{"data-testid":"text-group-count",children:[np(_)," ",np(_)===1?"folder":"folders"]})]}),_.length===0?c.jsxs("div",{className:"hierarchy-empty","data-testid":"empty-hierarchy",children:[c.jsx("div",{className:"empty-folder",children:c.jsx(Zu,{size:23})}),c.jsx("strong",{children:l?"Folders are locked":"No technology folders yet"}),c.jsx("p",{children:l?"Recover or clear the saved data to continue.":"Create a technology folder, then add projects or proposals and their clients."}),!l&&c.jsxs("button",{className:"btn",onClick:O,"data-testid":"button-create-first-group",children:[c.jsx(mi,{size:14})," Create first technology"]})]}):c.jsx("div",{className:"tree-list",role:"tree","aria-label":`${D} project folders`,children:_.map(ie=>c.jsx(_v,{node:ie,depth:0,selectedId:v,editingId:g,editName:p,setEditName:b,onSelect:w,onToggle:ae,onAdd:R,onRename:x,onCommit:P,onCancel:k,onDelete:W,disabled:!!l},ie.id))})]}),T&&c.jsxs("div",{className:"hierarchy-client-context",role:"status","data-testid":"selected-client-folder",children:[c.jsx(Zu,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:L})," selected. Its title block and client source library will be used below."]})]}),c.jsxs("div",{className:"hierarchy-footnote",children:[c.jsx(Wn,{size:14}),c.jsx("span",{children:"Saved in this browser. PFD and P&ID folder trees stay separate."})]}),c.jsx(nD,{discipline:a==="pfd"?"PFD":"P&ID",groups:_,selectedClientId:T,selectedClientLabel:L,onSelectClient:I},a)]})]})]})}function Rv(a,r){return r!==null&&(a.id===r||a.children.some(s=>Rv(s,r)))}function _v({node:a,depth:r,selectedId:s,editingId:o,editName:l,setEditName:u,onSelect:m,onToggle:f,onAdd:g,onRename:y,onCommit:p,onCancel:b,onDelete:v,disabled:w}){const _=o===a.id,D=["projects","proposals","project","proposal"].includes(a.kind),S=!["projects","proposals"].includes(a.kind),T=a.kind==="projects"?"Add project":a.kind==="proposals"?"Add proposal":a.kind==="project"||a.kind==="proposal"?"Add client":"Add folder",L={technology:"Technology",projects:"Projects",proposals:"Proposals",project:"Project",proposal:"Proposal",client:"Client",legacy:"Existing group"},I=M.useRef(null),C=()=>{I.current!==a.id&&(I.current=a.id,p(a.id))},x=()=>{I.current!==a.id&&(I.current=a.id,b())};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`tree-row ${s===a.id?"selected":""}`,role:"treeitem","aria-expanded":a.children.length?a.expanded:void 0,"aria-level":r+1,style:{"--tree-depth":r},"data-testid":`tree-group-${a.id}`,children:[c.jsx("button",{className:"tree-toggle","aria-label":`${a.expanded?"Collapse":"Expand"} ${a.name}`,disabled:w,onClick:()=>f(a.id),"data-testid":`button-toggle-group-${a.id}`,children:a.expanded?c.jsx(Cr,{size:15}):c.jsx(jp,{size:15})}),c.jsx(Zu,{className:"tree-folder",size:16}),_?c.jsx("input",{autoFocus:!0,maxLength:tc,className:"tree-rename-input","aria-label":"Folder name",value:l,disabled:w,onChange:O=>u(O.target.value),onFocus:()=>{I.current=null},onBlur:C,onKeyDown:O=>{O.key==="Enter"&&C(),O.key==="Escape"&&(O.preventDefault(),x())},"data-testid":`input-rename-group-${a.id}`}):c.jsx("button",{className:"tree-name",disabled:w,onClick:()=>m(a.id),onDoubleClick:()=>S&&y(a.id,a.name),title:"Select folder; double-click to rename","data-testid":`button-select-group-${a.id}`,children:a.name}),c.jsx("span",{className:"tree-kind-badge",children:L[a.kind]}),c.jsxs("span",{className:"tree-actions",children:[D&&c.jsx("button",{"aria-label":`${T} under ${a.name}`,title:T,disabled:w,onClick:()=>g(a.id),"data-testid":`button-add-subgroup-${a.id}`,children:c.jsx(mi,{size:14})}),S&&c.jsx("button",{"aria-label":`Rename ${a.name}`,title:"Rename folder",disabled:w,onClick:()=>y(a.id,a.name),"data-testid":`button-rename-group-${a.id}`,children:c.jsx(Hw,{size:13})}),S&&c.jsx("button",{"aria-label":`Delete ${a.name}`,title:"Delete folder",disabled:w,onClick:()=>v(a),"data-testid":`button-delete-group-${a.id}`,children:c.jsx(Ks,{size:13})})]})]}),a.expanded&&a.children.map(O=>c.jsx(_v,{node:O,depth:r+1,selectedId:s,editingId:o,editName:l,setEditName:u,onSelect:m,onToggle:f,onAdd:g,onRename:y,onCommit:p,onCancel:b,onDelete:v,disabled:w},O.id))]})}function rD({order:a,hidden:r,onChange:s}){const o=(l,u)=>{const m=[...a];[m[l],m[l+u]]=[m[l+u],m[l]],s(m,r)};return c.jsxs("details",{className:"edm-column-picker",children:[c.jsxs("summary",{children:["Columns (",a.length-r.length,")"]}),c.jsxs("div",{className:"edm-column-options",children:[c.jsx("p",{children:"Use these checkboxes to show or hide columns. The filter icon in each heading filters row values, including (Blanks), and does not hide the column."}),a.map((l,u)=>c.jsxs("div",{className:"edm-column-option",children:[c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:!r.includes(l),"aria-label":`Show ${Tt[l]}`,disabled:!r.includes(l)&&r.length===a.length-1,onChange:()=>s(a,r.includes(l)?r.filter(m=>m!==l):[...r,l])}),Tt[l]]}),c.jsx("button",{type:"button",disabled:u===0,onClick:()=>o(u,-1),"aria-label":`Move ${Tt[l]} up`,children:c.jsx(cw,{size:14})}),c.jsx("button",{type:"button",disabled:u===a.length-1,onClick:()=>o(u,1),"aria-label":`Move ${Tt[l]} down`,children:c.jsx(rw,{size:14})})]},l)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>s([...Vn],[]),children:"Reset columns"})]})]})}function Qy(a){const r=Math.min(272,window.innerWidth-16),s=Math.min(360,window.innerHeight-16),o=Math.max(8,Math.min(a.left,window.innerWidth-r-8)),l=a.bottom+4;return{top:l+s<=window.innerHeight-8?l:Math.max(8,a.top-s-4),left:o}}function Jy({label:a,options:r,selectedValues:s,onApply:o}){const l=M.useRef(null),u=M.useRef(null),m=M.useRef(null),[f,g]=M.useState(!1),[y,p]=M.useState(null),[b,v]=M.useState([]),[w,_]=M.useState(""),D=s!==void 0,S=M.useMemo(()=>r.map(R=>R.value),[r]),T=M.useMemo(()=>{const R=w.trim().toLowerCase();return R?r.filter(P=>(P.value||"(Blanks)").toLowerCase().includes(R)):r},[r,w]),L=r.reduce((R,P)=>R+Number(b.includes(P.value)),0),I=r.length>0&&L===r.length;M.useEffect(()=>{m.current&&(m.current.indeterminate=L>0&&L<r.length)},[b,r.length,L]),M.useEffect(()=>{if(!f)return;const R=()=>{const ae=l.current?.getBoundingClientRect();ae&&p(Qy(ae))},P=ae=>{const W=ae.target;!u.current?.contains(W)&&!l.current?.contains(W)&&g(!1)},k=ae=>{ae.key==="Escape"&&g(!1)};return R(),document.addEventListener("pointerdown",P),document.addEventListener("keydown",k),window.addEventListener("resize",R),window.addEventListener("scroll",R,!0),()=>{document.removeEventListener("pointerdown",P),document.removeEventListener("keydown",k),window.removeEventListener("resize",R),window.removeEventListener("scroll",R,!0)}},[f]);const C=()=>{if(f){g(!1);return}const R=l.current?.getBoundingClientRect();R&&p(Qy(R)),v(s?[...s]:S),_(""),g(!0)},x=R=>{v(P=>P.includes(R)?P.filter(k=>k!==R):[...P,R])},O=()=>{o(b),g(!1)};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{ref:l,type:"button",className:`edm-column-filter-trigger${D?" active":""}`,title:`${D?"Filtered":"Filter"} ${a}`,"aria-label":`${D?"Edit filter for":"Filter"} ${a}`,"aria-expanded":f,onClick:C,"data-testid":`button-filter-${a.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[c.jsx(Iw,{size:12}),c.jsx(Cr,{size:10})]}),f&&y&&uc.createPortal(c.jsxs("div",{ref:u,className:"edm-column-filter-menu",style:{top:y.top,left:y.left},role:"dialog","aria-label":`${a} filter`,"data-testid":"menu-column-filter",children:[c.jsxs("strong",{className:"edm-column-filter-title",children:["Filter: ",a]}),c.jsxs("label",{className:"edm-column-filter-search",children:[c.jsx(yi,{size:14}),c.jsx("input",{value:w,onChange:R=>_(R.target.value),placeholder:"Search values…","aria-label":`Search ${a} values`})]}),c.jsxs("label",{className:"edm-column-filter-select-all",children:[c.jsx("input",{ref:m,type:"checkbox",checked:I,disabled:!r.length,onChange:()=>v(I?[]:S)}),c.jsx("span",{children:"Select all"})]}),c.jsxs("div",{className:"edm-column-filter-options",role:"group","aria-label":`${a} values`,children:[!T.length&&c.jsx("p",{className:"edm-column-filter-empty",children:r.length?"No matching values.":"No values in this drawing yet."}),T.map(R=>c.jsxs("label",{className:"edm-column-filter-option",children:[c.jsx("input",{type:"checkbox",checked:b.includes(R.value),onChange:()=>x(R.value)}),c.jsx("span",{children:R.value||"(Blanks)"}),c.jsx("small",{children:R.count})]},JSON.stringify(R.value)))]}),c.jsxs("div",{className:"edm-column-filter-actions",children:[c.jsx("button",{type:"button",className:"edm-column-filter-clear",disabled:!D,onClick:()=>{o(void 0),g(!1)},children:"Clear filter"}),c.jsx("span",{}),c.jsx("button",{type:"button",onClick:()=>g(!1),children:"Cancel"}),c.jsx("button",{type:"button",className:"apply",disabled:!r.length,onClick:O,children:"Apply"})]})]}),document.body)]})}function Iv(a){return{headers:["#","Object type",...a.fields.map(r=>Tt[r])],rows:a.rows.map((r,s)=>[s+1,r.type,...a.fields.map(o=>wn(r,o))])}}function Lv(a){return a.groups.map(r=>{const s=new Map;for(const o of a.rows){const l=wn(o,r)||"—";s.set(l,(s.get(l)??0)+1)}return{field:r,label:Tt[r],values:[...s].map(([o,l])=>({value:o,count:l}))}})}function sD(a){const r=Iv(a);return Tv(r.headers,r.rows)}async function oD(a,r){const{default:s}=await dn(async()=>{const{default:p}=await import("./exceljs.min-o4MjMve_.js").then(b=>b.e);return{default:p}},__vite__mapDeps([2,1])),o=new s.Workbook;o.creator="gaurav.cbiindia";const l=o.addWorksheet("Engineering data",{pageSetup:{orientation:"landscape",fitToPage:!0,fitToWidth:1,fitToHeight:0}}),u=Iv(a),m=Lv(a),f=u.headers.length;["Engineering Data Editor",`${r.discipline} · ${r.drawing}${r.revision?` · ${r.revision}`:""} · ${a.rows.length} records`,`Object type: ${r.filter} · Search: ${r.search||"(none)"} · Sort: ${r.sort}`,...m.map(p=>{const b=p.values.map(({value:v,count:w})=>`${v} (${w})`).join(" · ");return`${p.label}: ${b.length>1500?b.slice(0,1500)+"… (see Group summaries sheet)":b}`})].forEach((p,b)=>{const v=l.addRow([p]);l.mergeCells(v.number,1,v.number,f),v.height=b===0?30:32,v.getCell(1).font={name:"Calibri",size:b===0?16:10,bold:b===0,color:{argb:b===0?"FFF0F0E8":"FF405A55"}},v.getCell(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:b===0?"FF203940":"FFF9F8F2"}},v.getCell(1).alignment={vertical:"middle",wrapText:!0}});const y=l.addRow(u.headers);if(y.height=30,y.eachCell(p=>{p.font={name:"Calibri",bold:!0,size:10,color:{argb:"FF405A55"}},p.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFF0F1E9"}},p.alignment={vertical:"middle",wrapText:!0},p.border={bottom:{style:"thin",color:{argb:"FFD9DED5"}}}}),u.rows.forEach((p,b)=>{const v=l.addRow(p);v.height=30,v.eachCell({includeEmpty:!0},(w,_)=>{w.numFmt=_===1?"0":"@",w.font={name:_>2&&a.fields[_-3]==="itemTag"?"Consolas":"Calibri",size:10,color:{argb:"FF405A55"}},w.alignment={vertical:"middle",wrapText:!0},w.fill={type:"pattern",pattern:"solid",fgColor:{argb:b%2?"FFF2F5EE":"FFFBFAF6"}},w.border={right:{style:"thin",color:{argb:"FFECEEE8"}},bottom:{style:"thin",color:{argb:"FFE7E9E2"}}}})}),l.columns.forEach((p,b)=>{const v=a.fields[b-2];p.width=b===0?7:b===1?18:v==="notes"?52:v==="description"||v==="connection"?38:Math.max(18,u.headers[b].length+3)}),l.views=[{state:"frozen",ySplit:y.number,xSplit:2}],l.autoFilter={from:{row:y.number,column:1},to:{row:y.number+u.rows.length,column:f}},l.pageSetup.printTitlesRow=`${y.number}:${y.number}`,l.headerFooter.oddFooter="© gaurav.cbiindia | &P of &N",m.length){const p=o.addWorksheet("Group summaries");p.columns=[{header:"Group field",width:25},{header:"Value",width:42},{header:"Records",width:12}],m.forEach(b=>b.values.forEach(({value:v,count:w})=>p.addRow([b.label,v,w]))),p.getRow(1).font={bold:!0},p.views=[{state:"frozen",ySplit:1}],p.autoFilter="A1:C1"}return new Uint8Array(await o.xlsx.writeBuffer())}function Pv(a,r){const s=String(r==="type"?a.type:wn(a,r));return s.trim()?s:""}function iD(a,r){const s=new Map;for(const o of a){const l=Pv(o,r);s.set(l,(s.get(l)??0)+1)}return[...s.entries()].map(([o,l])=>({value:o,count:l})).sort((o,l)=>o.value===""?l.value===""?0:1:l.value===""?-1:o.value.localeCompare(l.value,void 0,{numeric:!0,sensitivity:"base"}))}function eb(a,r){return Object.entries(r).every(([s,o])=>o===void 0||o.includes(Pv(a,s)))}const lD=["All types",...wi],cD=["type",...Vn],kv="pid-mapping-studio:engineering-column-widths:v1",Lp=44,Pp=720,dD=a=>a==="rowNumber"?44:a==="type"?154:a==="itemTag"?250:a==="notes"?300:a==="description"||a==="stableId"?220:a==="drawingRef"?180:a==="sourcePage"?100:a==="reviewStatus"?150:136;function uD(){try{const a=JSON.parse(window.localStorage.getItem(kv)??"{}");return!a||typeof a!="object"||Array.isArray(a)?{}:Object.fromEntries(Object.entries(a).filter(r=>typeof r[1]=="number"&&Number.isFinite(r[1])).map(([r,s])=>[r,Math.max(Lp,Math.min(Pp,s))]))}catch{return{}}}function tb(a){try{window.localStorage.setItem(kv,JSON.stringify(a))}catch{}}const pD=a=>a.split(/\s+/).map(r=>r[0]).join("").slice(0,2).toUpperCase();function ab({discipline:a}){const[r]=M.useState(()=>{try{return{drawings:xi(a),raw:Js(a),error:""}}catch{return{drawings:[],raw:null,error:"Saved engineering data could not be read. Editing is blocked to protect it. Export a raw backup before recovery."}}}),[s,o]=M.useState(r.drawings),l=M.useRef(s),u=M.useRef(!0),m=M.useRef(r.raw),[f,g]=M.useState(s[0]?.id??""),y=s.find(N=>N.id===f)??s[0]??{id:"",name:"No drawing selected",revision:"",rows:[]};M.useEffect(()=>{const N=new URLSearchParams(window.location.search).get("source"),$=N?s.find(Z=>Z.sourcePdfId===N):void 0;$&&$.id!==f&&g($.id)},[s,f]),M.useEffect(()=>{j({}),O(""),ae("All types"),ne(0)},[f,a]);const p=y.rows,[b,v]=M.useState(p[0]?.id??""),[w,_]=M.useState(""),[D,S]=M.useState("Rev 0"),[T,L]=M.useState(""),[I,C]=M.useState("Equipment"),[x,O]=M.useState(""),[R,P]=M.useState(""),[k,ae]=M.useState("All types"),[W,ne]=M.useState(0),[fe,ie]=M.useState(12),[re,H]=M.useState({field:"itemTag",direction:1}),[J,me]=M.useState([]),[xe,j]=M.useState({}),[te,z]=M.useState([...Vn]),[G,le]=M.useState([]),[ue,be]=M.useState(uD),Le=M.useRef(ue),ke=M.useRef(null),ht=M.useRef(null),[at,ot]=M.useState("records"),dt=te.filter(N=>!G.includes(N)),Lt=["rowNumber","type",...dt],gt=N=>ue[N]??dD(N),F=Lt.reduce((N,$)=>N+gt($),0),[he,ge]=M.useState(!1),[Y,pe]=M.useState(""),[Ne,ye]=M.useState(""),[qe,Ze]=M.useState(r.error),[Fe,$e]=M.useState(0),[Qt,we]=M.useState(!0),[Ue,Ce]=M.useState(!1),[ra,qt]=M.useState(""),_a=(N,$,Z=!1)=>{const ve={...Le.current,[N]:Math.max(Lp,Math.min(Pp,Math.round($)))};Le.current=ve,be(ve),Z&&tb(ve)},Mt=N=>{const $=document.createElement("canvas").getContext("2d"),Z=ke.current?getComputedStyle(ke.current).font:"";$&&($.font=Z||"12px sans-serif");const ve=N==="rowNumber"?"#":N==="type"?"Object type":Tt[N],Te=N==="rowNumber"?[]:N==="type"?p.map(et=>et.type):p.map(et=>wn(et,N)),Ee=et=>et.split(/\r?\n/).reduce((Ct,nn)=>Math.max(Ct,$?$.measureText(nn||"—").width:nn.length*7),0),je=Te.reduce((et,Ct)=>Math.max(et,Ee(Ct)),Ee(ve));_a(N,je+(N==="itemTag"?158:N==="rowNumber"?18:54),!0)},Ba=(N,$)=>{$.preventDefault(),$.stopPropagation(),$.currentTarget.setPointerCapture($.pointerId),ht.current={column:N,pointerId:$.pointerId,startX:$.clientX,startWidth:gt(N)}},Pt=(N,$)=>{const Z=ht.current;!Z||Z.column!==N||Z.pointerId!==$.pointerId||($.preventDefault(),_a(N,Z.startWidth+$.clientX-Z.startX))},Je=(N,$)=>{const Z=ht.current;!Z||Z.column!==N||Z.pointerId!==$.pointerId||(ht.current=null,tb(Le.current),$.currentTarget.hasPointerCapture($.pointerId)&&$.currentTarget.releasePointerCapture($.pointerId))},ga=(N,$)=>{$.key==="Enter"?($.preventDefault(),Mt(N)):($.key==="ArrowLeft"||$.key==="ArrowRight")&&($.preventDefault(),_a(N,gt(N)+($.key==="ArrowRight"?16:-16),!0))},Yt=(N,$)=>c.jsx("span",{className:"edm-column-resize-handle",role:"separator","aria-orientation":"vertical","aria-label":`Resize ${$} column`,"aria-valuenow":gt(N),"aria-valuemin":Lp,"aria-valuemax":Pp,title:"Drag to resize · double-click to fit text",tabIndex:0,onPointerDown:Z=>Ba(N,Z),onPointerMove:Z=>Pt(N,Z),onPointerUp:Z=>Je(N,Z),onPointerCancel:Z=>Je(N,Z),onDoubleClick:Z=>{Z.preventDefault(),Z.stopPropagation(),Mt(N)},onKeyDown:Z=>ga(N,Z),"data-testid":`resize-column-${N}`});M.useEffect(()=>{u.current=!0,Promise.all([Ws("PFD"),Ws("P&ID")]).then(([$,Z])=>{u.current&&$e($.length+Z.length)}).catch(()=>{u.current&&qt("Saved PDF count could not be read from this device.")}).finally(()=>{u.current&&we(!1)});const N=$=>{if($.key===`pid-mapping-studio:engineering-workspace:v2:${a}`)try{const Z=xi(a);l.current=Z,o(Z),m.current=Js(a),Ze("")}catch{Ze("Saved data changed and could not be read. Reload this page before editing.")}};return window.addEventListener("storage",N),()=>{u.current=!1,window.removeEventListener("storage",N)}},[a]);const Dn=async()=>{if(!(Qt||Ue)){qt("");try{const[N,$]=await Promise.all([Ws("PFD"),Ws("P&ID")]),Z=N.length+$.length;if(!Z){$e(0),qt("There are no saved PDFs to clear.");return}if(!window.confirm(`Delete all ${Z} saved PDFs from both PFD and P&ID, including their saved text/OCR? This cannot be undone. EDE records and Legends will remain, but their source PDF files will no longer be available.`))return;Ce(!0);const Te=await kA();if(!u.current)return;$e(0),qt(`Cleared ${Te} saved PDF(s) and their text/OCR. EDE records and Legends were kept.`)}catch{u.current&&qt("Saved PDFs could not be cleared. Existing records were not intentionally changed.")}finally{u.current&&Ce(!1)}}},Pe=p.find(N=>N.id===b)??null;M.useEffect(()=>{const N=new URLSearchParams(window.location.search).get("record");if(!N)return;let $=N;try{$=Wp(N)}catch{}const Z=p.find(ve=>ve.id===$);Z&&Z.id!==b&&v(Z.id)},[p,b]);const $t=M.useMemo(()=>{const N=x.trim().toLowerCase();return Object.fromEntries(cD.map($=>{const Z={...xe};delete Z[$];const ve=p.filter(Te=>(k==="All types"||Te.type===k)&&(!N||Object.values(Te).join(" ").toLowerCase().includes(N))&&eb(Te,Z));return[$,iD(ve,$)]}))},[p,x,k,xe]),yt=M.useMemo(()=>{const N=x.trim().toLowerCase();return p.filter($=>(k==="All types"||$.type===k)&&(!N||Object.values($).join(" ").toLowerCase().includes(N))&&eb($,xe))},[p,x,k,xe]),Qe=M.useMemo(()=>[...yt].sort((N,$)=>{for(const Z of J){const ve=wn(N,Z).localeCompare(wn($,Z)||"—",void 0,{numeric:!0});if(ve)return ve}return wn(N,re.field).localeCompare(wn($,re.field),void 0,{numeric:!0})*re.direction}),[yt,re,J]),va=Math.max(1,Math.ceil(Qe.length/fe)),en={fields:dt,rows:Qe,groups:J},Nn=Lv(en),Ht=Qe.slice(W*fe,(W+1)*fe);M.useEffect(()=>{Ht.length&&!Ht.some(N=>N.id===b)?v(Ht[0].id):!Ht.length&&b&&v("")},[Ht,b]),M.useEffect(()=>ne(N=>Math.min(N,va-1)),[va]);const za=N=>{if(r.error)return!1;try{return m.current=Rp(a,N,m.current),l.current=N,o(N),Ze(""),!0}catch($){return Ze($ instanceof Error&&$.name!=="QuotaExceededError"?$.message:"Device storage is full or unavailable. This change was not saved. Download a backup and free space."),!1}},Vt=N=>za(s.map($=>$.id===y.id?{...$,rows:N}:$)),At=(N,$,Z)=>{Vt(p.map(ve=>ve.id===N?{...ve,[$]:Z}:ve))},Dt=N=>{N.preventDefault();const $=w.trim();if(!$||s.some(ve=>ve.name.toLowerCase()===$.toLowerCase())){Ze("Enter a new, unique drawing reference.");return}const Z={id:crypto.randomUUID(),name:$,revision:D.trim()||"Rev 0",rows:[]};za([...s,Z])&&(g(Z.id),_(""),ne(0))},Ft=N=>{if(N.preventDefault(),!y.id)return;const $=Kp(I,T,y.name);if(Vt([...p,$])){L(""),O(""),ae("All types"),H({field:"itemTag",direction:1}),me([]);const Z=[...p,$].sort((ve,Te)=>ve.itemTag.localeCompare(Te.itemTag,void 0,{numeric:!0})).findIndex(ve=>ve.id===$.id);ne(Math.floor(Z/fe)),v($.id)}},pn=()=>{!Pe||!window.confirm(`Delete record ${Pe.itemTag}? This cannot be undone without a backup.`)||Vt(p.filter(N=>N.id!==Pe.id))&&v("")},Zn=async(N,$)=>{if(N.size>5*1024*1024){Ze("Import a file smaller than 5 MB.");return}try{const Z=y.id,ve=await N.text();if(!u.current)return;if($==="csv"){const Te=l.current.find(je=>je.id===Z);if(!Te)throw new Error("The target drawing no longer exists. Choose a drawing and try again.");const Ee=n2(ve,Te.name);za(l.current.map(je=>je.id===Z?{...je,rows:[...je.rows,...Ee]}:je))&&(O(""),ae("All types"),ne(0))}else{const Te=JA(ve,a);za([...l.current,...Te])&&(g(Te[0]?.id??y.id),ne(0))}}catch(Z){Ze(Z instanceof Error?Z.message:"This file could not be imported. No records were changed.")}},os=N=>H($=>({field:N,direction:$.field===N&&$.direction===1?-1:1})),sa=(N,$)=>{const Z=$t[N].map(Te=>Te.value),ve=$!==void 0&&Z.every(Te=>$.includes(Te))&&$.length===Z.length;j(Te=>{const Ee={...Te};return $===void 0||ve?delete Ee[N]:Ee[N]=$,Ee}),ne(0)},kr=N=>me($=>$.includes(N)?$:[...$,N]),tn=N=>{N.preventDefault();const $=N.dataTransfer.getData("text/engineering-field");Vn.includes($)&&kr($)},oa=N=>{const $=Math.max(0,Math.min(va-1,N));ne($);const Z=Qe.slice($*fe,($+1)*fe)[0];Z&&v(Z.id)},an=N=>{g(N),O(""),ne(0)},U=async(N,$=!1)=>{if(he)return;const Z=$?{fields:Vn,rows:s.flatMap(Ee=>Ee.rows),groups:[]}:en,ve=$?"all-records":"current-view",Te={discipline:a==="pid"?"P&ID":"PFD",drawing:$?"All drawings":y.name,revision:$?void 0:y.revision,filter:$?"All types":k,search:$?"":x.trim(),sort:$?"Drawing order":`${Tt[re.field]} ${re.direction===1?"ascending":"descending"}`};ge(!0),pe(""),ye("");try{const Ee=N==="csv"?sD(Z):await oD(Z,Te);Hl(`engineering-${a}-${ve}.${N}`,Ee,N==="csv"?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),u.current&&pe(`Prepared ${N==="csv"?"CSV":"Excel"}: ${Z.rows.length} records · ${$?"all records":"current view"}.`)}catch(Ee){u.current&&ye(Ee instanceof Error?Ee.message:"Export could not be prepared. Your saved records have not changed.")}finally{u.current&&ge(!1)}};return c.jsxs("main",{className:"edm-page","data-mobile-panel":at,children:[c.jsxs("header",{className:"edm-topbar",children:[c.jsxs(fa,{href:`/workspace/${a}`,className:"edm-brand","data-testid":"link-edm-workspace",children:[c.jsx("span",{className:"edm-mark",children:"ED"}),c.jsxs("span",{children:["Engineering Data Manager",c.jsx("small",{children:"Mapping Studio / browser-local workspace"})]})]}),c.jsxs("div",{className:"edm-toplinks",children:[c.jsxs("nav",{className:"edm-disciplines","aria-label":"Discipline navigation",children:[c.jsx(fa,{href:"/workspace/pfd/engineering-data",className:a==="pfd"?"active":"","data-testid":"link-edm-pfd",children:"PFD"}),c.jsx(fa,{href:"/workspace/pid/engineering-data",className:a==="pid"?"active":"","data-testid":"link-edm-pid",children:"P&ID"})]}),c.jsxs("span",{className:"edm-local",children:[c.jsx(Wn,{size:13}),"Saved on this device"]}),c.jsxs(fa,{href:`/workspace/${a}`,className:"btn subtle","aria-label":"Back to the PFD or P&ID workspace","data-testid":"link-back-workspace",children:[c.jsx(db,{size:13})," Workspace"]})]})]}),c.jsxs("nav",{className:"edm-mobile-tabs","aria-label":"Engineering data panels",children:[c.jsx("button",{type:"button",className:at==="catalog"?"active":"","aria-pressed":at==="catalog",onClick:()=>ot("catalog"),"data-testid":"tab-edm-catalog",children:"Catalog"}),c.jsx("button",{type:"button",className:at==="records"?"active":"","aria-pressed":at==="records",onClick:()=>ot("records"),"data-testid":"tab-edm-records",children:"Records"}),c.jsx("button",{type:"button",className:at==="properties"?"active":"","aria-pressed":at==="properties",onClick:()=>ot("properties"),"data-testid":"tab-edm-properties",children:"Properties"})]}),c.jsxs("div",{className:"edm-titlebar",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"edm-eyebrow",children:[a==="pfd"?"PROCESS FLOW DIAGRAM":"PIPING & INSTRUMENTATION"," / YOUR RECORDS"]}),c.jsx("h1",{children:"Engineering data"}),c.jsx("p",{children:"Add or import your records. PFD and P&ID stay separate on this device."})]}),c.jsxs("div",{className:"edm-object-select",children:[c.jsx("span",{children:"Object type"}),c.jsx("select",{value:k,onChange:N=>{ae(N.target.value),ne(0)},"aria-label":"Object type filter","data-testid":"select-object-type",children:lD.map(N=>c.jsx("option",{children:N},N))}),c.jsx(Cr,{size:14})]})]}),c.jsxs("div",{className:"edm-file-actions",children:[c.jsxs("button",{className:"btn",disabled:!s.length,onClick:()=>Hl(`engineering-${a}-backup.json`,QA(a,s),"application/json"),"data-testid":"button-backup-data",children:[c.jsx(Rr,{size:14})," Download backup"]}),c.jsxs("label",{className:"btn",children:[c.jsx(ts,{size:14})," Import backup",c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Import engineering backup",disabled:!!r.error,onChange:N=>{const $=N.currentTarget.files?.[0];N.currentTarget.value="",$&&Zn($,"backup")}})]}),c.jsx("button",{className:"btn",disabled:he||!s.some(N=>N.rows.length),onClick:()=>{U("csv",!0)},"data-testid":"button-report-all",children:"All records · CSV"}),c.jsx("button",{className:"btn",disabled:he||!s.some(N=>N.rows.length),onClick:()=>{U("xlsx",!0)},"data-testid":"button-report-all-excel",children:"All records · Excel"}),c.jsxs("button",{className:"btn danger",type:"button",onClick:()=>{Dn()},disabled:Qt||Ue||Fe===0,"data-testid":"button-clear-saved-pdfs",children:[c.jsx(Ks,{size:14}),Ue?"Clearing PDFs…":`Clear all saved PDFs (${Qt?"…":Fe})`]}),r.error&&c.jsx("button",{className:"btn",onClick:()=>{try{const N=Js(a);N&&Hl(`engineering-${a}-raw.json`,N,"application/json")}catch{Ze("Device storage cannot be accessed. The saved data has not been changed.")}},children:"Export raw backup"}),r.error&&c.jsx("button",{className:"btn danger",onClick:()=>{if(window.confirm("Delete unreadable engineering data for this discipline? Download a raw backup first. This cannot be undone and does not delete PDFs or the old demo data."))try{window.localStorage.removeItem(`pid-mapping-studio:engineering-workspace:v2:${a}`),window.location.reload()}catch{Ze("Device storage cannot be cleared. The saved data has not been changed.")}},children:"Reset unreadable data"}),c.jsx("span",{children:"Local storage only · download backups regularly"})]}),ra&&c.jsx("div",{className:"edm-pdf-clear-message",role:"status","data-testid":"status-pdf-clear",children:ra}),c.jsxs("div",{className:"edm-workspace",children:[c.jsxs("aside",{className:"edm-catalog",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsxs("span",{children:[c.jsx(qp,{size:15})," Catalog"]}),c.jsx("span",{className:"edm-counter",children:s.length})]}),c.jsxs("div",{className:"edm-catalog-search",children:[c.jsx(yi,{size:13}),c.jsx("input",{"aria-label":"Filter drawings",placeholder:"Filter drawings…",value:R,onChange:N=>P(N.target.value),"data-testid":"input-catalog-filter"})]}),c.jsxs("div",{className:"edm-catalog-label",children:["DRAWINGS · ",a.toUpperCase()]}),c.jsxs("div",{className:"edm-drawing-list",children:[s.filter(N=>N.name.toLowerCase().includes(R.toLowerCase())).map(N=>c.jsxs("button",{className:`edm-drawing-item ${y.id===N.id?"selected":""}`,onClick:()=>an(N.id),"data-testid":`button-drawing-${N.id}`,children:[c.jsx(Xn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:N.name}),c.jsxs("small",{children:[N.revision," · ",N.rows.length," records"]})]})]},N.id)),!s.some(N=>N.name.toLowerCase().includes(R.toLowerCase()))&&c.jsx("div",{className:"edm-empty",children:"No drawings match."})]}),c.jsxs("form",{className:"edm-create-drawing",onSubmit:Dt,children:[c.jsxs("label",{children:["Drawing reference",c.jsx("input",{value:w,onChange:N=>_(N.target.value),maxLength:160,required:!0,placeholder:"e.g. PID-001","aria-label":"New drawing reference","data-testid":"input-new-drawing"})]}),c.jsxs("label",{children:["Revision",c.jsx("input",{value:D,onChange:N=>S(N.target.value),maxLength:80,"aria-label":"New drawing revision"})]}),c.jsxs("button",{className:"btn primary",disabled:!!r.error,"data-testid":"button-add-drawing",children:[c.jsx(mi,{size:14})," Add drawing"]})]}),y.id&&c.jsxs("button",{className:"btn danger edm-delete-drawing",disabled:!!r.error,onClick:()=>{if(!window.confirm(`Delete drawing ${y.name} and its ${p.length} records? Download a backup first. This does not delete source PDFs.`))return;const N=s.filter($=>$.id!==y.id);za(N)&&(g(N[0]?.id??""),v(""),ne(0))},"data-testid":"button-delete-drawing",children:[c.jsx(Ks,{size:14})," Delete drawing"]}),c.jsxs("div",{className:"edm-catalog-foot",children:["No invented sample records.",c.jsx("br",{}),"Source PDFs stay in your workspace."]})]}),c.jsxs("section",{className:"edm-main",children:[c.jsxs("section",{className:"edm-preview panel edm-source-summary",children:[c.jsxs("header",{children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"ACTIVE DRAWING RECORD"}),c.jsx("strong",{"data-testid":"text-active-drawing",children:y.name})]}),c.jsx("span",{className:"edm-revision",children:y.revision})]}),c.jsx("p",{children:y.sourcePdfId?`${y.sourceAlias??"PDF"} tag candidates and clearly labelled values are stored here. Every extracted record needs review. Blank fields mean the PDF text/OCR did not provide a clear value.`:"Add records manually or import them from CSV. New PDF tag candidates appear here with a source page and a review status."}),c.jsxs(fa,{href:y.sourcePdfId?`/workspace/${a}?pdf=${encodeURIComponent(y.sourcePdfId)}&page=${encodeURIComponent(y.rows.find(N=>N.sourcePdfId)?.sourcePage||"1")}#pdf-workflow-title`:`/workspace/${a}`,className:"btn subtle",children:[c.jsx(Xn,{size:14})," ",y.sourcePdfId?"Open source PDF page":"View original PDFs"]}),c.jsxs("div",{className:"edm-autocad-status",role:"note",children:[c.jsx("strong",{children:"AutoCAD 2020: not connected."})," EDE extraction does not create a DWG."]})]}),c.jsxs("section",{className:"edm-editor panel",children:[c.jsxs("div",{className:"edm-editor-title",children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"DATA WORKSPACE"}),c.jsx("h2",{children:"Engineering Data Editor"})]}),c.jsx("div",{className:"edm-type-chip",children:k})]}),c.jsxs("form",{className:"edm-add-record",onSubmit:Ft,children:[c.jsxs("label",{children:["Object type",c.jsx("select",{value:I,onChange:N=>C(N.target.value),"aria-label":"New record type",children:wi.map(N=>c.jsx("option",{children:N},N))})]}),c.jsxs("label",{children:["Item tag",c.jsx("input",{value:T,onChange:N=>L(N.target.value),maxLength:160,required:!0,placeholder:"e.g. P-101","aria-label":"New item tag","data-testid":"input-new-tag"})]}),c.jsxs("button",{className:"btn primary",disabled:!y.id||!!r.error,"data-testid":"button-add-record",children:[c.jsx(mi,{size:14})," Add record"]})]}),c.jsxs("div",{className:"edm-report-actions",children:[c.jsxs("button",{className:"btn",disabled:he||!Qe.length,onClick:()=>{U("csv")},"data-testid":"button-export-report",children:[c.jsx(Rr,{size:14})," Current view · CSV"]}),c.jsxs("button",{className:"btn",disabled:he||!Qe.length,onClick:()=>{U("xlsx")},"data-testid":"button-export-excel",children:[c.jsx(Rr,{size:14})," Current view · Excel"]}),c.jsxs("label",{className:"btn",children:[c.jsx(ts,{size:14})," Import CSV",c.jsx("input",{type:"file",accept:".csv,text/csv","aria-label":"Import engineering CSV",disabled:!y.id||!!r.error,onChange:N=>{const $=N.currentTarget.files?.[0];N.currentTarget.value="",$&&Zn($,"csv")}})]}),c.jsx("button",{className:"btn subtle",onClick:()=>Hl("engineering-import-template.csv",a2([]),"text/csv;charset=utf-8"),"data-testid":"button-csv-template",children:"CSV template"}),c.jsxs("button",{className:"btn danger",disabled:!Pe||!!r.error,onClick:pn,"data-testid":"button-delete-record",children:[c.jsx(Ks,{size:14})," Delete selected"]})]}),c.jsxs("div",{className:"edm-export-note","aria-live":"polite",children:[c.jsx("span",{children:"Current view: shown columns, filters, sorting and all matching rows across pages. Excel also includes group summaries. CSV has no visual formatting."}),he&&c.jsx("strong",{role:"status",children:"Preparing export…"}),Y&&c.jsx("strong",{role:"status",children:Y}),Ne&&c.jsx("strong",{role:"alert",children:Ne})]}),c.jsx(rD,{order:te,hidden:G,onChange:(N,$)=>{z(N),le($)}}),c.jsxs("div",{className:"edm-placement-legend","aria-label":"CAD placement status legend",children:[c.jsxs("span",{children:[c.jsx("i",{className:"available","aria-hidden":"true",children:"●"})," Available / not placed"]}),c.jsxs("span",{children:[c.jsx("i",{className:"current","aria-hidden":"true",children:"●"})," On this drawing"]}),c.jsxs("span",{children:[c.jsx("i",{className:"another","aria-hidden":"true",children:"●"})," On another drawing"]}),c.jsx("small",{children:"Based on the saved reference only; CAD is not connected for live verification."})]}),c.jsxs("div",{className:"edm-grid-toolbar",children:[c.jsxs("label",{className:"edm-global-search",children:[c.jsx(yi,{size:14}),c.jsx("input",{placeholder:"Search all fields…","aria-label":"Search engineering data",value:x,onChange:N=>{O(N.target.value),ne(0)},"data-testid":"input-engineering-search"})]}),c.jsxs("span",{className:"edm-result-total","data-testid":"text-result-count",children:[yt.length," records"]}),c.jsxs("button",{className:"edm-toolbar-button",onClick:()=>{O(""),ae("All types"),j({}),ne(0)},"data-testid":"button-clear-filters",children:[c.jsx(Ju,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"edm-groups",onDragOver:N=>N.preventDefault(),onDrop:tn,"data-testid":"drop-column-group",children:[c.jsx("span",{children:"GROUP BY"}),J.length?J.map(N=>c.jsxs("button",{onClick:()=>me($=>$.filter(Z=>Z!==N)),title:"Remove group",children:[Tt[N]," ",c.jsx("b",{children:"×"})]},N)):c.jsx("em",{children:"Drag a column header here to group records"})]}),c.jsxs("label",{className:"edm-group-select",children:["Add group",c.jsxs("select",{value:"","aria-label":"Add group",onChange:N=>{N.target.value&&(kr(N.target.value),ne(0))},children:[c.jsx("option",{value:"",children:"Choose a column…"}),Vn.filter(N=>!J.includes(N)).map(N=>c.jsx("option",{value:N,children:Tt[N]},N))]})]}),c.jsx("p",{className:"edm-table-sizing-help",children:"Drag a column edge to resize it. Double-click an edge to fit the text."}),Nn.map(N=>c.jsxs("div",{className:"edm-group-summary",children:[c.jsx("strong",{children:N.label}),N.values.map(({value:$,count:Z})=>c.jsxs("span",{children:[$,c.jsx("i",{children:Z})]},$))]},N.field)),c.jsx("div",{className:"edm-table-wrap",children:c.jsxs("table",{ref:ke,className:"edm-table",style:{width:F,minWidth:F},children:[c.jsx("colgroup",{children:Lt.map(N=>c.jsx("col",{style:{width:gt(N)}},N))}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsxs("th",{className:"edm-rownum",children:[c.jsx("div",{className:"edm-column-heading",children:c.jsx("span",{className:"edm-column-heading-label",children:"#"})}),Yt("rowNumber","row number")]}),c.jsxs("th",{children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsx("span",{className:"edm-column-heading-label",children:"Object type"}),c.jsx(Jy,{label:"Object type",options:$t.type,selectedValues:xe.type,onApply:N=>sa("type",N)})]}),Yt("type","Object type")]}),dt.map(N=>c.jsxs("th",{draggable:!0,onDragStart:$=>$.dataTransfer.setData("text/engineering-field",N),children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsxs("button",{className:"edm-column-sort",title:Gs[N],onClick:()=>os(N),"data-testid":`button-sort-${N}`,children:[Tt[N],c.jsx("span",{children:re.field===N?re.direction===1?"↑":"↓":"↕"})]}),c.jsx(Jy,{label:Tt[N],options:$t[N],selectedValues:xe[N],onApply:$=>sa(N,$)})]}),Yt(N,Tt[N])]},N))]})}),c.jsxs("tbody",{children:[Ht.map((N,$)=>{const Z=b===N.id,ve=ZA(N,y),Te=ve==="current"?"On this drawing":ve==="another"?"On another drawing":"Available / not placed";return c.jsxs("tr",{className:Z?"selected":"","data-stable-id":N.id,"data-placement-status":ve,onClick:()=>v(N.id),"data-testid":`row-engineering-${N.id}`,children:[c.jsx("td",{className:"edm-rownum",children:W*fe+$+1}),c.jsx("td",{children:c.jsx("span",{className:`edm-type-badge ${N.type.toLowerCase().replace(/\s+/g,"-")}`,children:N.type})}),dt.map(Ee=>{const je=wn(N,Ee);return Ee==="notes"?c.jsx("td",{className:"edm-notes-cell",children:Z?c.jsx("textarea",{"aria-label":`Notes for ${N.itemTag}`,rows:2,maxLength:2e3,value:je,onClick:Ge=>Ge.stopPropagation(),onChange:Ge=>At(N.id,Ee,Ge.target.value),"data-testid":`input-cell-${N.id}-${Ee}`}):c.jsx("span",{title:je,children:je||"—"})},Ee):Ee==="itemTag"?c.jsxs("td",{className:"mono edm-item-tag-cell",children:[c.jsxs("span",{className:`edm-placement-indicator ${ve}`,"aria-label":`Placement: ${Te}`,title:`Placement: ${Te}`,children:[c.jsx("i",{"aria-hidden":"true",children:"●"}),c.jsx("span",{children:Te})]}),Z?c.jsx("input",{className:"edm-item-tag-editor","aria-label":`${Tt[Ee]} for ${N.itemTag}`,value:je,onClick:Ge=>Ge.stopPropagation(),onChange:Ge=>At(N.id,Ee,Ge.target.value),"data-testid":`input-cell-${N.id}-${Ee}`}):c.jsx("span",{className:`edm-tag-value ${ve}`,"data-testid":`text-item-tag-${N.id}`,children:je})]},Ee):c.jsx("td",{className:Ee==="stableId"?"mono":"",children:Ee==="stableId"?c.jsx("span",{className:"edm-stable-id-value",title:je,"aria-label":`Stable ID ${je}`,children:je}):Z&&(Ee==="reviewStatus"||Ee==="groupStatus")?c.jsx("select",{"aria-label":`${Tt[Ee]} for ${N.itemTag}`,value:je,onClick:Ge=>Ge.stopPropagation(),onChange:Ge=>At(N.id,Ee,Ge.target.value),"data-testid":`input-cell-${N.id}-${Ee}`,children:(Ee==="reviewStatus"?["Needs review","Reviewed","Manual"]:["","Start","Continue","Branch","Merge","End-of-Group"]).map(Ge=>c.jsx("option",{value:Ge,children:Ge||"Not set"},Ge))}):Z?c.jsx("input",{"aria-label":`${Tt[Ee]} for ${N.itemTag}`,value:je,onClick:Ge=>Ge.stopPropagation(),onChange:Ge=>At(N.id,Ee,Ge.target.value),"data-testid":`input-cell-${N.id}-${Ee}`}):c.jsx("span",{title:je,children:je||"—"})},Ee)})]},N.id)}),!Ht.length&&c.jsx("tr",{children:c.jsx("td",{colSpan:dt.length+2,children:c.jsx("div",{className:"edm-empty",children:"No records match these filters."})})})]})]})}),c.jsxs("footer",{className:"edm-pagination",children:[c.jsxs("span",{children:["Showing ",c.jsxs("strong",{children:[Qe.length?W*fe+1:0,"–",Math.min((W+1)*fe,Qe.length)]})," of ",c.jsx("strong",{children:Qe.length})]}),c.jsxs("label",{children:["Rows ",c.jsx("select",{value:fe,onChange:N=>{ie(Number(N.target.value)),ne(0)},"aria-label":"Rows per page","data-testid":"select-page-size",children:[8,12,24,36].map(N=>c.jsx("option",{value:N,children:N},N))})," per page"]}),c.jsxs("div",{className:"edm-page-controls",children:[c.jsx("button",{disabled:W===0,onClick:()=>oa(W-1),"aria-label":"Previous page","data-testid":"button-page-previous",children:c.jsx(ub,{size:15})}),c.jsxs("span",{children:["Page ",W+1," of ",va]}),c.jsx("button",{disabled:W>=va-1,onClick:()=>oa(W+1),"aria-label":"Next page","data-testid":"button-page-next",children:c.jsx(jp,{size:15})})]})]})]})]}),c.jsxs("aside",{className:"edm-properties panel",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsx("span",{children:"Properties"}),c.jsx("span",{className:"edm-counter",children:Pe?"EDIT":""})]}),c.jsxs("details",{className:"edm-field-guide",children:[c.jsx("summary",{children:"What do these fields mean?"}),c.jsx("dl",{children:Vn.map(N=>c.jsxs("div",{children:[c.jsx("dt",{children:Tt[N]}),c.jsx("dd",{children:Gs[N]})]},N))})]}),Pe&&c.jsxs("label",{className:"edm-record-type",children:["Object type",c.jsx("select",{value:Pe.type,"aria-label":"Selected record type",disabled:!!r.error,onChange:N=>Vt(p.map($=>$.id===Pe.id?{...$,type:N.target.value}:$)),children:wi.map(N=>c.jsx("option",{children:N},N))})]}),Pe?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"edm-property-summary",children:[c.jsx("span",{className:"edm-property-icon",children:pD(Pe.type)}),c.jsxs("div",{children:[c.jsx("strong",{"data-testid":"text-selected-tag",children:Pe.itemTag}),c.jsxs("small",{children:[Pe.type," · ",y.revision]})]})]}),(Pe.sourcePdfId??y.sourcePdfId)&&c.jsxs(fa,{className:"btn subtle edm-source-locate",href:`/workspace/${a}?pdf=${encodeURIComponent(Pe.sourcePdfId??y.sourcePdfId??"")}&page=${encodeURIComponent(String(Pe.sourceLocations?.[0]?.pageNumber??Pe.sourcePage??"1"))}&record=${encodeURIComponent(Pe.id)}#pdf-workflow-title`,"data-testid":"link-selected-source-location",children:[c.jsx(Xn,{size:13})," Locate on source PDF",c.jsx("small",{children:Pe.sourceLocations?.length?`${Pe.sourceLocations.length} OCR location(s) · review required`:`Page ${Pe.sourcePage||"1"} · no exact position saved`})]}),c.jsxs("div",{className:"edm-stable-id-panel",children:[c.jsx("span",{children:"STABLE ID"}),c.jsx("code",{"data-testid":"text-stable-id",children:Pe.id}),c.jsx("small",{children:"Permanent record identity. It does not change with the tag or drawing."})]}),c.jsxs("div",{className:"edm-property-scroll",children:[c.jsx("div",{className:"edm-property-group",children:"IDENTIFICATION"}),["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef"].map(N=>c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Gs[N],children:Tt[N]}),c.jsx("input",{value:Pe[N],onChange:$=>At(Pe.id,N,$.target.value),"data-testid":`property-${N}`})]},N)),c.jsx("div",{className:"edm-property-group",children:"CAD PLACEMENT"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Gs.placementDrawingRef,children:Tt.placementDrawingRef}),c.jsx("input",{list:"edm-placement-drawings",value:Pe.placementDrawingRef,onChange:N=>At(Pe.id,"placementDrawingRef",N.target.value),"data-testid":"property-placementDrawingRef",placeholder:"Blank = available / not placed"}),c.jsx("small",{children:"Reference only. This browser is not connected to CAD geometry."})]}),c.jsx("datalist",{id:"edm-placement-drawings",children:s.map(N=>c.jsx("option",{value:N.name},N.id))}),c.jsx("div",{className:"edm-property-group",children:Pe.type==="Pipe Run"?"PIPE RUN & PROCESS":"PROCESS & CONNECTION"}),(Pe.type==="Pipe Run"?["nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description"]:["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","opcDrawing","connection","description"]).map(N=>{const $=N;return c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Gs[$],children:Tt[$]}),$==="groupStatus"?c.jsx("select",{value:Pe.groupStatus,onChange:Z=>At(Pe.id,"groupStatus",Z.target.value),"aria-label":"Pipe run group status",children:["","Start","Continue","Branch","Merge","End-of-Group"].map(Z=>c.jsx("option",{value:Z,children:Z||"Not set"},Z))}):c.jsx("input",{value:Pe[$],onChange:Z=>At(Pe.id,$,Z.target.value),"data-testid":`property-${$}`})]},$)}),c.jsx("div",{className:"edm-property-group",children:"NOTES"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Gs.notes,children:Tt.notes}),c.jsx("textarea",{rows:5,maxLength:2e3,value:Pe.notes,onChange:N=>At(Pe.id,"notes",N.target.value),"data-testid":"property-notes"})]})]}),c.jsxs("div",{className:"edm-save-state",role:"status","data-testid":"status-local-save",children:[c.jsx("span",{})," Edits save automatically in this browser"]})]}):c.jsx("div",{className:"edm-empty",children:"Select a graphic or table row to inspect properties."})]})]}),c.jsxs("footer",{className:"edm-footnote",children:[c.jsx("span",{children:"© 2026 gaurav.cbiindia · DEVICE-LOCAL DATA"}),c.jsxs("span",{children:[p.length," records · ",y.name," · ",a.toUpperCase(),"-isolated browser storage"]})]}),qe&&c.jsx("div",{className:"edm-storage-error",role:"alert","data-testid":"status-storage-error",children:qe})]})}function fD({assetId:a,candidateId:r,blockName:s,entityType:o,description:l,disabled:u,onDescriptionChange:m}){const[f,g]=M.useState(null),[y,p]=M.useState("");M.useEffect(()=>{let v=!0;return g(null),p(""),tv(a).then(w=>{v&&g(w)},w=>{v&&p(w instanceof Error?w.message:"Preview could not be read.")}),()=>{v=!1}},[a]);const b=o==="directionArrow"?[]:(f?.nearbyLabels??[]).filter(v=>!Gp(v));return c.jsxs("section",{className:"cad-block-review-visual","aria-label":`Identify block ${s}`,"data-testid":`preview-block-${r}`,children:[c.jsxs("div",{className:"cad-block-review-image",children:[f?.previewSvg?c.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(f.previewSvg)}`,alt:`DXF geometry preview of block ${s}`,"data-testid":`img-block-${r}`}):c.jsxs("div",{className:"cad-block-preview-empty",role:"status",children:[c.jsx("strong",{children:y?"Preview could not load":f?"Overview DXF needed":"Loading local preview…"}),c.jsx("span",{children:y||(f?"Run PIDEXPORTOVERVIEW on the original SOURCE drawing. Add its *_OVERVIEW.dxf to the existing extraction ZIP and import again. Do not repeat the full block extraction.":"")})]}),c.jsx("small",{children:"Visual aid only—not a fidelity check. Fonts, hatches, masks and some CAD entities may be simplified or absent."})]}),c.jsxs("div",{className:"cad-block-review-labels",children:[c.jsx("strong",{children:o==="directionArrow"?"Direction Arrow":"Nearby legend text"}),c.jsx("small",{children:o==="directionArrow"?"Kept as its own P&ID entity; no equipment, instrument, or component name is inferred from nearby text.":"Suggested by position, not confirmed identity. Multiple parts may share one assembly description."}),b.length?c.jsx("div",{className:"cad-block-label-choices",children:b.map((v,w)=>c.jsx("button",{type:"button",className:"btn subtle",disabled:u,onClick:()=>m(v),"data-testid":`button-use-label-${r}-${w}`,children:v},`${v}-${w}`))}):c.jsx("p",{"data-testid":`status-no-label-${r}`,children:o==="directionArrow"?f?.sourcePlacements?.length?`Source insert context retained: ${f.sourcePlacements.map(v=>`${v.layer}, ${v.rotationDegrees}° (${v.count})`).join("; ")}.`:"Source rotation and layer context will be used if an overview DXF is available.":f?.labelMatchAmbiguous?"Ambiguous: this block is used beside different legend labels. No item name is suggested; verify it from the source.":f?.labelMatchSkipped?"Skipped: this insert is on layer 0 or a primary process-pipe layer, so its nearby label is not used as an item mapping.":f?.previewSvg?"No nearby label found. Verify the source drawing and enter the description below.":"Label suggestions appear after an overview DXF is imported."}),c.jsxs("label",{children:[c.jsx("span",{children:"Confirmed item description"}),c.jsx("input",{value:l,onChange:v=>m(v.target.value),placeholder:"Verify the source, then enter the real item name",disabled:u,"data-testid":`input-item-description-${r}`})]}),c.jsx("small",{children:"Saved only when you approve this record. A label does not automatically choose a category or CAD layer."})]})]})}const Ov={titleBlock:"Title block",layer:"Layer",textStyle:"Text style",linetype:"Linetype",dimensionStyle:"Dimension style",symbol:"Symbol",directionArrow:"Direction Arrow",legend:"Legend"};function ii(a){return Ov[a]??"CAD standard"}function hD(a,r){if(a.proposedScope==="project"&&a.projectId){const s=[...new Set(r.filter(o=>o.proposedScope==="project"&&o.projectId).map(o=>o.projectId))].sort();return`Project ${String(s.indexOf(a.projectId)+1).padStart(2,"0")}`}if(a.proposedScope==="company"){const s=[...new Set(r.filter(o=>o.proposedScope==="company").map(o=>o.sourceGroup))].sort();return`Legends Library source ${String(s.indexOf(a.sourceGroup)+1).padStart(2,"0")}`}return"Unclassified source"}function nb(a,r){return`Project ${String(r.indexOf(a)+1).padStart(2,"0")}`}function vn(a,r){return a.find(s=>s.label===r)?.value.trim()??""}function rb({value:a,disabled:r,onChange:s}){let o=null,l="";try{o=as(a)}catch(D){l=D instanceof Error?D.message:"Enter a valid X,Y outline."}const u=o?.map(([D])=>D)??[],m=o?.map(([,D])=>D)??[],f=Math.min(...u),g=Math.max(...u),y=Math.min(...m),p=Math.max(...m),b=g-f||1,v=p-y||1,w=9,_=o?.map(([D,S])=>`${w+(D-f)/b*(160-w*2)},${90-w-(S-y)/v*(90-w*2)}`).join(" ");return c.jsxs("label",{className:"candidate-fallback-category valve-mask-editor",children:[c.jsxs("span",{children:["Valve-body Wipeout outline ",c.jsx("small",{children:"Reviewed block-local X,Y points; do not include pipe tails. Separate points with semicolons."})]}),c.jsx("textarea",{value:a,onChange:D=>s(D.target.value),placeholder:"x,y; x,y; x,y; …","aria-label":"Valve-body Wipeout outline points",rows:3,disabled:r}),c.jsx("small",{className:"candidate-layer-help",children:"Enter vertices in order using the valve block’s local drawing units. The small preview shows only the mask contour, not the source CAD block."}),o&&_?c.jsx("svg",{className:"valve-mask-preview",viewBox:"0 0 160 90",role:"img","aria-label":"Preview of the saved valve mask outline",children:c.jsx("polygon",{points:_})}):c.jsx("small",{className:"candidate-layer-help",children:l}),c.jsx("small",{className:"candidate-layer-help",children:"The runner masks only inside this polygon, leaves the underlying Pipe Run continuous, and draws the valve block on top."})]})}function Nr(a,r){const s=vn(a.item.fields,"Source discipline");if(s!=="PFD"&&s!=="P&ID"&&s!=="Shared")return[];const m=[...(a.proposedScope==="company"?"company":"project")==="project"&&a.projectId?r.projects[a.projectId]?.items??[]:[],...r.companyItems].filter(f=>{if(f.category!=="layer"||f.sourceKind!=="extracted-dwg"||f.reviewStatus!=="reviewed")return!1;const g=vn(f.fields,"Source discipline");return s==="Shared"?g==="Shared":g==="Shared"||g===s}).map(f=>vn(f.fields,"CAD name")).filter(f=>f&&f.toUpperCase()!=="0");return[...new Set(m)].sort((f,g)=>f.localeCompare(g))}function gD({library:a,reviewCandidates:r,onApproveCompany:s,onApproveProject:o,onDismiss:l,onUpdateReviewedItem:u,onSetCompanyDefault:m,onSetProjectDefault:f,storageNotice:g="",readOnly:y=!1,reviewOnly:p=!1,backHref:b="/"}){const[v,w]=M.useState("company"),[_,D]=M.useState(""),[S,T]=M.useState("all"),[L,I]=M.useState(""),[C,x]=M.useState(0),[O,R]=M.useState(""),[P,k]=M.useState({}),[ae,W]=M.useState({}),[ne,fe]=M.useState({}),[ie,re]=M.useState({}),[H,J]=M.useState({}),[me,xe]=M.useState({}),j=20,te=M.useMemo(()=>Object.keys(a.projects).sort(),[a.projects]),z=te.includes(L)?L:te[0]??"",G=r.filter(Y=>Y.status==="needs-review"),le=r.filter(Y=>Y.status==="approved").length,ue=r.filter(Y=>Y.status==="dismissed").length,be=Y=>me[Y.id]??Y.item.category,Le=(Y,pe)=>{const Ne=be(Y),ye=Y.item.sourceKind==="extracted-dwg"&&!!Y.item.fields.find(we=>we.label==="Block asset ID")?.value.trim(),qe=(P[Y.id]??Y.item.fields.find(we=>we.label==="Fallback category")?.value??"").trim(),Ze=ae[Y.id]??Y.item.fields.find(we=>we.label==="Target CAD layer")?.value??"";if(Ne==="symbol"&&ye&&!qe){R("Enter the real equipment category (such as pump or valve) before approving an extracted block.");return}if(Ne==="symbol"&&ye&&!Nr(Y,a).includes(Ze)){R(Nr(Y,a).length?"Choose an approved non-zero CAD layer for this block before approving it.":"Approve a matching Equipment, Instrument, or other placement layer first. Layer 0 cannot be used for block placement.");return}const Fe=ne[Y.id]??Y.item.fields.find(we=>we.label==="Wipeout mask boundary")?.value??"";if(Ne==="symbol"&&qe.toLowerCase()==="valve")try{as(Fe)}catch(we){R(we instanceof Error?we.message:"Enter and review a valve-body Wipeout outline before approval.");return}R("");const $e=ye?Ne==="directionArrow"?[{label:"Entity type",value:"Direction Arrow"},{label:"Item description",value:H[Y.id]||"Direction Arrow"}]:[{label:"Fallback category",value:qe},{label:"Target CAD layer",value:Ze},{label:"Item description",value:H[Y.id]??vn(Y.item.fields,"Item description")},...qe.toLowerCase()==="valve"?[{label:"Wipeout mask boundary",value:Fe}]:[]]:void 0;(pe==="company"?s:o)(Y.id,$e,ye?Ne:void 0)&&R(pe==="company"?"Approved and added to the Legends Library.":"Approved and added to the project library.")},ke=Y=>{l(Y)&&R("Record dismissed from the review queue.")},ht=(Y,pe)=>{const Ne=ie[Y]??pe.find(ye=>ye.label==="Wipeout mask boundary")?.value??"";try{as(Ne)}catch(ye){R(ye instanceof Error?ye.message:"Enter a valid valve-body mask outline.");return}u(Y,[{label:"Wipeout mask boundary",value:Ne}])&&R("Reviewed valve-body mask saved to the Legends Library.")},at=M.useMemo(()=>{const Y=_.trim().toLowerCase();return G.filter(pe=>{const Ne=be(pe),ye=S==="all"||Ne===S,qe=pe.item.fields.some(Ze=>`${Ze.label} ${Ze.value}`.toLowerCase().includes(Y));return ye&&(!Y||qe||ii(Ne).toLowerCase().includes(Y))})},[G,_,S,me]),ot=Math.max(1,Math.ceil(at.length/j)),dt=Math.min(C,ot-1),Lt=at.slice(dt*j,(dt+1)*j);M.useEffect(()=>x(0),[_,S]);const F=(v==="company"?a.companyItems:a.projects[z]?.items??[]).filter(Y=>{const pe=_.trim().toLowerCase(),Ne=S==="all"||Y.category===S,ye=Y.fields.some(qe=>`${qe.label} ${qe.value}`.toLowerCase().includes(pe));return Ne&&(!pe||ye||ii(Y.category).toLowerCase().includes(pe))}),he=(Y,pe)=>{if(!es.includes(pe))return;const Ne=pe,ye=a.companyItems.some(qe=>qe.category==="titleBlock"&&qe.reviewStatus==="reviewed"&&(qe.sheetSize===Ne||qe.fields.some(Ze=>Ze.label==="Sheet size"&&Ze.value===Ne)));if(Ne!==a.companyDefaults[Y]&&!ye){R(`Approve a company title-block mapping for ${Ne} before changing this default.`);return}R(""),m(Y,Ne)},ge=(Y,pe,Ne)=>{if(!es.includes(Ne))return;const ye=Ne;if(![...a.projects[Y]?.items??[],...a.companyItems].some(Fe=>Fe.category==="titleBlock"&&Fe.reviewStatus==="reviewed"&&(Fe.sheetSize===ye||Fe.fields.some($e=>$e.label==="Sheet size"&&$e.value===ye)))){R(`Approve a title-block mapping for ${ye} before saving this project default.`);return}R(""),f(Y,pe,ye)};return c.jsxs("main",{className:`standards-page${p?" standards-review-only":""}`,children:[c.jsxs("header",{className:"standards-topbar",children:[c.jsxs(fa,{href:p?b:"/",className:"standards-brand","data-testid":"link-standards-home",children:[c.jsx("span",{className:"standards-mark",children:"PM"}),c.jsxs("span",{children:["Mapping Studio",c.jsx("small",{children:p?"Legends Library / review":"Drafting standards / browser-local"})]})]}),c.jsxs("div",{className:"standards-top-meta",children:[c.jsxs("span",{className:"standards-local",children:[c.jsx("i",{}),y?"Read only · storage issue":"Browser-local"]}),c.jsx("span",{className:"standards-version",children:"LIBRARY · 1.0"})]})]}),c.jsxs("div",{className:"standards-content",children:[c.jsxs("section",{className:"standards-intro",children:[c.jsxs("div",{children:[p&&c.jsxs(fa,{className:"standards-return",href:b,children:["← Back to ",b.endsWith("/pfd")?"PFD":"P&ID"," workspace"]}),c.jsxs("div",{className:"standards-eyebrow",children:[p?"Legends Library":"Standards library"," ",c.jsx("span",{children:"/"})," human review"]}),c.jsx("h1",{children:p?"Review extracted standards":"Drafting standards"}),c.jsx("p",{children:p?"Check extracted blocks, layers, text styles, and line types. Nothing becomes part of the Legends Library until you approve it.":"Inspect source-derived CAD values before they become defaults. Project choices stay separate from the Legends Library."})]}),c.jsxs("div",{className:"standards-local-seal",children:[c.jsx(Wn,{size:15}),c.jsxs("span",{children:["LOCAL ONLY",c.jsx("small",{children:"Nothing is uploaded or shared"})]})]})]}),c.jsxs("div",{className:"standards-trust-note",children:[c.jsx(Qu,{size:16}),c.jsxs("span",{children:[c.jsx("strong",{children:"Review before use."})," ",p?"Each extracted record remains pending until you approve it to the Legends Library or dismiss it. Source filenames are hidden.":"Source-derived values remain unapproved until you choose a scope. Company/client identifiers and source file names are hidden here."]}),c.jsxs("span",{className:"standards-schema",children:["SCHEMA ",a.schemaVersion]})]}),g&&c.jsx("div",{className:"standards-storage-banner",role:"alert",children:g}),c.jsxs("section",{className:"standards-metrics","aria-label":"Review summary",children:[c.jsxs("div",{className:"standards-metric metric-pending",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(_r,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Awaiting review"}),c.jsx("strong",{children:G.length.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"SOURCE MAPPINGS"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(qm,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Approved from queue"}),c.jsx("strong",{children:le.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"HUMAN CONFIRMED"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(Op,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Dismissed"}),c.jsx("strong",{children:ue.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"NOT IN LIBRARY"})]})]}),c.jsxs("div",{className:"standards-layout",children:[c.jsxs("section",{className:"standards-review panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"INBOX / SOURCE-DERIVED"}),c.jsxs("h2",{children:[c.jsx(xw,{size:17}),"Review queue"]})]}),c.jsxs("span",{className:"standards-count",children:[G.length," pending"]})]}),c.jsxs("div",{className:"standards-controls",children:[c.jsxs("label",{className:"standards-search",children:[c.jsx(yi,{size:14}),c.jsx("input",{value:_,onChange:Y=>D(Y.target.value),placeholder:"Search CAD field values…","aria-label":"Search standards","data-testid":"input-standards-search"})]}),c.jsxs("label",{className:"standards-filter",children:[c.jsx(Ju,{size:13}),c.jsxs("select",{"aria-label":"Filter by category",value:S,onChange:Y=>T(Y.target.value),"data-testid":"select-standards-category",children:[c.jsx("option",{value:"all",children:"All categories"}),Object.entries(Ov).map(([Y,pe])=>c.jsx("option",{value:Y,children:pe},Y))]}),c.jsx(Cr,{size:13})]})]}),O&&c.jsx("div",{className:"standards-action-note",role:"status",children:O}),c.jsxs("div",{className:"standards-candidate-list",children:[Lt.map(Y=>{const pe=be(Y),Ne=Y.item.sourceKind==="extracted-dwg"&&!!vn(Y.item.fields,"Block asset ID");return c.jsxs("article",{className:"candidate-card","data-testid":`candidate-${Y.id}`,children:[c.jsxs("div",{className:"candidate-top",children:[c.jsxs("div",{className:"candidate-category",children:[c.jsx("span",{className:"candidate-glyph",children:c.jsx(li,{size:15})}),c.jsxs("span",{children:[c.jsx("strong",{children:ii(pe)}),c.jsxs("small",{children:[hD(Y,r)," · ",Y.proposedScope==="project"?"Project proposal":Y.proposedScope==="company"?"Pending review":"Scope not classified"]})]})]}),c.jsxs("span",{className:"candidate-status",children:[c.jsx("i",{}),"Needs review"]})]}),Ne&&c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsx("span",{children:"Review entity as"}),c.jsxs("select",{value:pe==="directionArrow"?"directionArrow":"symbol",onChange:ye=>{R(""),xe(qe=>({...qe,[Y.id]:ye.target.value}))},"aria-label":`Review entity type for ${Y.item.name}`,disabled:y,"data-testid":`select-entity-role-${Y.id}`,children:[c.jsx("option",{value:"symbol",children:"Equipment / instrument / component symbol"}),c.jsx("option",{value:"directionArrow",children:"Direction Arrow"})]}),pe==="directionArrow"&&c.jsx("small",{children:"Kept separate from equipment matching. Source insert layers and rotations are retained for later pipe alignment."})]}),(pe==="symbol"||pe==="directionArrow")&&Y.item.sourceKind==="extracted-dwg"&&vn(Y.item.fields,"Block asset ID")&&c.jsx(fD,{assetId:vn(Y.item.fields,"Block asset ID"),candidateId:Y.id,blockName:vn(Y.item.fields,"Block name"),entityType:pe,description:H[Y.id]??(pe==="directionArrow"?"Direction Arrow":vn(Y.item.fields,"Item description")),disabled:y,onDescriptionChange:ye=>J(qe=>({...qe,[Y.id]:ye}))}),c.jsx("div",{className:"candidate-fields","aria-label":`${ii(pe)} CAD standard values`,children:Y.item.fields.filter(ye=>pe!=="directionArrow"||!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(ye.label)).map((ye,qe)=>c.jsxs("div",{className:"candidate-field",children:[c.jsx("span",{children:ye.label}),c.jsx("strong",{children:ye.value||"—"})]},`${ye.label}-${qe}`))}),pe==="symbol"&&Ne&&c.jsxs(c.Fragment,{children:[c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Fallback category ",c.jsx("small",{children:"Required for safe same-category substitution"})]}),c.jsx("input",{value:P[Y.id]??Y.item.fields.find(ye=>ye.label==="Fallback category")?.value??"",onChange:ye=>{R(""),k(qe=>({...qe,[Y.id]:ye.target.value}))},placeholder:"For example: pump, valve, or instrument","aria-label":`Fallback category for ${Y.item.name}`})]}),(P[Y.id]??Y.item.fields.find(ye=>ye.label==="Fallback category")?.value??"").trim().toLowerCase()==="valve"&&c.jsx(rb,{value:ne[Y.id]??Y.item.fields.find(ye=>ye.label==="Wipeout mask boundary")?.value??"",disabled:y,onChange:ye=>{R(""),fe(qe=>({...qe,[Y.id]:ye}))}}),c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Target CAD layer ",c.jsx("small",{children:"Actual approved layer; layer 0 is not allowed"})]}),c.jsxs("select",{value:ae[Y.id]??Y.item.fields.find(ye=>ye.label==="Target CAD layer")?.value??"",onChange:ye=>{R(""),W(qe=>({...qe,[Y.id]:ye.target.value}))},"aria-label":`Target CAD layer for ${Y.item.name}`,disabled:y||Nr(Y,a).length===0,children:[c.jsx("option",{value:"",children:Nr(Y,a).length?"Select an approved CAD layer…":"Approve a compatible layer first"}),Nr(Y,a).map(ye=>c.jsx("option",{value:ye,children:ye},ye))]}),c.jsx("small",{className:"candidate-layer-help",children:Nr(Y,a).length?"The AutoCAD runner will put the inserted block reference on this layer.":"Review and approve the matching source layer first. No layer is guessed automatically."}),c.jsx("small",{className:"candidate-layer-help",children:"Stated Legends layers: equipment uses EQUIP or f_EQUIP; instruments use f_Inst. Extract and approve the matching layer before it appears here."})]})]}),c.jsxs("div",{className:"candidate-actions",children:[c.jsx("span",{className:"candidate-scope-note",children:Y.proposedScope==="project"?"Approve into isolated project library":Y.proposedScope==="company"?"Approve to the Legends Library":"Unclassified source · project-only approval"}),(()=>{const ye=pe==="symbol"&&Ne;return Y.proposedScope==="company"?c.jsxs("button",{className:"btn primary",onClick:()=>Le(Y,"company"),disabled:y,title:ye&&Nr(Y,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-company-${Y.id}`,children:[c.jsx(Xs,{size:14}),"Approve to Legends Library"]}):c.jsxs("button",{className:"btn primary",onClick:()=>Le(Y,"project"),disabled:y,title:ye&&Nr(Y,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-project-${Y.id}`,children:[c.jsx(Xs,{size:14}),"Approve to project"]})})(),c.jsx("button",{className:"btn subtle",onClick:()=>ke(Y.id),disabled:y,"data-testid":`button-dismiss-${Y.id}`,children:"Dismiss"})]})]},Y.id)}),!Lt.length&&c.jsxs("div",{className:"standards-empty",children:[c.jsx("span",{className:"empty-seal",children:G.length?c.jsx(yi,{size:20}):c.jsx(qm,{size:20})}),c.jsx("strong",{children:G.length?"No source mappings match":"Review queue is clear"}),c.jsx("p",{children:G.length?"Try another field value or category.":"New source-derived standards will appear here for human review."}),_||S!=="all"?c.jsx("button",{className:"btn subtle",onClick:()=>{D(""),T("all")},children:"Clear filters"}):null]})]}),at.length>j&&c.jsxs("div",{className:"candidate-pagination",children:[c.jsxs("span",{children:["Showing ",dt*j+1,"–",Math.min((dt+1)*j,at.length)," of ",at.length," matching mappings"]}),c.jsxs("div",{children:[c.jsx("button",{className:"btn subtle",onClick:()=>x(Y=>Math.max(0,Y-1)),disabled:dt===0,children:"Previous"}),c.jsxs("span",{children:["Page ",dt+1," of ",ot]}),c.jsx("button",{className:"btn subtle",onClick:()=>x(Y=>Math.min(ot-1,Y+1)),disabled:dt>=ot-1,children:"Next"})]})]}),c.jsxs("footer",{className:"standards-list-foot",children:[c.jsx("span",{children:"CAD field values only"}),c.jsx("span",{children:"Source labels anonymized"})]})]}),!p&&c.jsxs("aside",{className:"standards-side",children:[c.jsxs("section",{className:"defaults-panel panel",children:[c.jsx("div",{className:"standards-panel-head",children:c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"ACTIVE CONFIGURATION"}),c.jsxs("h2",{children:[c.jsx(Ju,{size:16}),"Sheet-size defaults"]})]})}),c.jsxs("div",{className:"default-scope-tabs",role:"tablist","aria-label":"Defaults scope",children:[c.jsx("button",{role:"tab","aria-selected":v==="company",className:v==="company"?"selected":"",onClick:()=>w("company"),children:"Company"}),c.jsxs("button",{role:"tab","aria-selected":v==="projects",className:v==="projects"?"selected":"",onClick:()=>w("projects"),children:["Projects ",c.jsx("span",{children:te.length})]})]}),v==="projects"&&c.jsx("div",{className:"project-picker",children:te.length?c.jsxs("label",{children:[c.jsx("span",{children:"PROJECT LIBRARY"}),c.jsxs("div",{children:[c.jsx("select",{value:z,onChange:Y=>I(Y.target.value),"aria-label":"Select project library",children:te.map(Y=>c.jsx("option",{value:Y,children:nb(Y,te)},Y))}),c.jsx(Cr,{size:14})]})]}):c.jsxs("div",{className:"project-none",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(li,{size:17})}),c.jsx("strong",{children:"No project overrides yet"}),c.jsx("small",{children:"Project-specific standards will appear here once available."})]})}),c.jsxs("div",{className:"default-table",children:[c.jsxs("div",{className:"default-table-head",children:[c.jsx("span",{children:"DRAWING PURPOSE"}),c.jsx("span",{children:"SIZE"})]}),fp.map(Y=>{const pe=v==="projects"&&z?a.projects[z]?.defaults[Y]:void 0,Ne=pe??a.companyDefaults[Y];return c.jsxs("div",{className:"default-row",children:[c.jsxs("div",{children:[c.jsx("strong",{children:Y}),v==="projects"&&c.jsx("small",{children:pe?"Project override":"Inherited company default"})]}),v==="company"?c.jsxs("label",{className:"size-select",children:[c.jsx("select",{"aria-label":`${Y} company sheet size`,value:a.companyDefaults[Y],onChange:ye=>he(Y,ye.target.value),disabled:y,children:es.map(ye=>c.jsx("option",{value:ye,children:ye},ye))}),c.jsx(Cr,{size:13})]}):z?c.jsxs("label",{className:`size-select ${pe?"override":""}`,children:[c.jsx("select",{"aria-label":`${Y} project sheet size`,value:Ne,onChange:ye=>ge(z,Y,ye.target.value),disabled:y,children:es.map(ye=>c.jsx("option",{value:ye,children:ye},ye))}),c.jsx(Cr,{size:13})]}):c.jsx("span",{className:"default-value",children:"—"})]},Y)})]}),c.jsxs("div",{className:"defaults-note",children:[c.jsx(Qu,{size:14}),c.jsx("span",{children:"Project selections change only that project. Legends Library defaults remain unchanged."})]})]}),c.jsxs("section",{className:"library-panel panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"APPROVED STANDARDS"}),c.jsxs("h2",{children:[c.jsx(li,{size:16}),v==="company"?"Legends Library":"Project library"]})]}),c.jsx("span",{className:"standards-count",children:F.length})]}),c.jsxs("div",{className:"approved-list",children:[F.map(Y=>c.jsxs("article",{className:"approved-item",children:[c.jsxs("div",{className:"approved-item-head",children:[c.jsx("span",{className:"approved-glyph",children:c.jsx(Xs,{size:13})}),c.jsxs("div",{children:[c.jsx("strong",{children:ii(Y.category)}),c.jsx("small",{children:v==="company"?"Legends Library standard":`${nb(z,te)} · project-only`})]})]}),c.jsx("div",{className:"approved-fields",children:Y.fields.map((pe,Ne)=>c.jsxs("div",{children:[c.jsx("span",{children:pe.label}),c.jsx("strong",{children:pe.value||"—"})]},`${pe.label}-${Ne}`))}),Y.category==="symbol"&&Y.sourceKind==="extracted-dwg"&&vn(Y.fields,"Fallback category").toLowerCase()==="valve"&&c.jsxs(c.Fragment,{children:[c.jsx(rb,{value:ie[Y.id]??Y.fields.find(pe=>pe.label==="Wipeout mask boundary")?.value??"",disabled:y,onChange:pe=>{R(""),re(Ne=>({...Ne,[Y.id]:pe}))}}),c.jsx("div",{className:"approved-mask-actions",children:c.jsxs("button",{type:"button",className:"btn primary",disabled:y,onClick:()=>ht(Y.id,Y.fields),"data-testid":`button-save-valve-mask-${Y.id}`,children:[c.jsx(Xs,{size:13}),"Save reviewed outline"]})})]})]},Y.id)),!F.length&&c.jsxs("div",{className:"approved-empty",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(li,{size:18})}),c.jsx("strong",{children:v==="company"?"No approved Legends Library standards":"No standards in this project"}),c.jsx("small",{children:v==="company"?"Review and approve source mappings to build the Legends Library.":"Project-approved standards remain isolated from Legends Library defaults."})]})]}),c.jsxs("footer",{className:"library-foot",children:[c.jsx("span",{children:"Visible values are standards fields"}),c.jsx("span",{children:"Descriptions hidden"})]})]})]})]}),c.jsxs("footer",{className:"standards-page-foot",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:p?"Only approved mappings are offered to the CAD runner":"Legends Library and project standards are reviewed separately"})]})]})]})}function sb({backHref:a}){const[r]=M.useState(()=>{try{return{library:En(),canSave:!0,error:""}}catch(S){return{library:IS(),canSave:!1,error:S instanceof Error?S.message:"The local standards library could not be loaded."}}}),[s,o]=M.useState(r.library),l=M.useRef(r.library),[u,m]=M.useState(r.canSave),[f,g]=M.useState(r.error),y=S=>{if(!u)return g("The local library could not be read safely. Its saved contents were left unchanged."),!1;let T;try{T=S(l.current)}catch(L){return g(L instanceof Error?L.message:"The standards change could not be applied."),!1}try{return Ei(T),l.current=T,o(T),g(""),!0}catch(L){const I=L instanceof Error?L.message:"The standards change could not be saved locally.";return I.startsWith("This browser could not save the CAD standards locally.")&&m(!1),g(I),!1}},p=(S,T,L)=>y(I=>nc(I,S,"company",T,L)),b=(S,T,L)=>y(I=>nc(I,S,"project",T,L)),v=(S,T)=>y(L=>US(L,S,T)),w=S=>y(T=>BS(T,S)),_=(S,T)=>y(L=>OS(L,S,T)),D=(S,T,L)=>{const I=l.current.projects[S]?.projectName??`Project ${String(Object.keys(l.current.projects).sort().indexOf(S)+1).padStart(2,"0")}`;y(C=>zS(C,S,I,T,L))};return c.jsx(gD,{library:s,reviewCandidates:s.reviewCandidates,reviewOnly:!0,backHref:a,onApproveCompany:p,onApproveProject:b,onUpdateReviewedItem:v,onDismiss:w,onSetCompanyDefault:_,onSetProjectDefault:D,storageNotice:f,readOnly:!u})}const mD="/pid-mapping-studio-app/".replace(/\/$/,"");function yD(){const[a]=yb();return a==="/admin/library"||a.startsWith("/sign-in")||a.startsWith("/sign-up")?c.jsx(mx,{to:"/"}):a==="/portal"||a==="/library"||a==="/"?c.jsx(N1,{}):a==="/workspace/pfd"?c.jsx(Zy,{discipline:"pfd"}):a==="/workspace/pid"?c.jsx(Zy,{discipline:"pid"}):a==="/workspace/pfd/engineering-data"?c.jsx(ab,{discipline:"pfd"}):a==="/workspace/pid/engineering-data"?c.jsx(ab,{discipline:"pid"}):a==="/standards-review/pfd"?c.jsx(sb,{backHref:"/workspace/pfd"}):a==="/standards-review/pid"?c.jsx(sb,{backHref:"/workspace/pid"}):c.jsx(C1,{})}function bD(){return c.jsx(gx,{base:mD,children:c.jsx(D1,{children:c.jsx(yD,{})})})}kp.createRoot(document.getElementById("root"),{onCaughtError:(a,r)=>{console.error(a,r.componentStack)}}).render(c.jsx(bD,{}));export{dn as _,vD as a,VS as c,Si as g,Hp as v,wD as w};
