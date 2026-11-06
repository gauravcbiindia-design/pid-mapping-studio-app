const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CUO-o09j.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/exceljs.min-BBohMlGo.js"])))=>i.map(i=>d[i]);
function sc(a,r){for(var s=0;s<r.length;s++){const o=r[s];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in a)){const u=Object.getOwnPropertyDescriptor(o,l);u&&Object.defineProperty(a,l,u.get?u:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function s(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=s(l);fetch(l.href,u)}})();var bD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xi(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function sb(a){if(Object.prototype.hasOwnProperty.call(a,"__esModule"))return a;var r=a.default;if(typeof r=="function"){var s=function o(){var l=!1;try{l=this instanceof o}catch{}return l?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};s.prototype=r.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(a).forEach(function(o){var l=Object.getOwnPropertyDescriptor(a,o);Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:function(){return a[o]}})}),s}var wu={exports:{}},Xo={};var Am;function $E(){if(Am)return Xo;Am=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,l,u){var m=null;if(u!==void 0&&(m=""+u),l.key!==void 0&&(m=""+l.key),"key"in l){u={};for(var f in l)f!=="key"&&(u[f]=l[f])}else u=l;return l=u.ref,{$$typeof:a,type:o,key:m,ref:l!==void 0?l:null,props:u}}return Xo.Fragment=r,Xo.jsx=s,Xo.jsxs=s,Xo}var Dm;function FE(){return Dm||(Dm=1,wu.exports=$E()),wu.exports}var c=FE();const UE=xi(c),BE=sc({__proto__:null,default:UE},[c]);var xu={exports:{}},Wo={},Su={exports:{}},Tu={};var Nm;function zE(){return Nm||(Nm=1,(function(a){function r(Y,Z){var ge=Y.length;Y.push(Z);e:for(;0<ge;){var xe=ge-1>>>1,j=Y[xe];if(0<l(j,Z))Y[xe]=Z,Y[ge]=j,ge=xe;else break e}}function s(Y){return Y.length===0?null:Y[0]}function o(Y){if(Y.length===0)return null;var Z=Y[0],ge=Y.pop();if(ge!==Z){Y[0]=ge;e:for(var xe=0,j=Y.length,ee=j>>>1;xe<ee;){var B=2*(xe+1)-1,V=Y[B],ie=B+1,de=Y[ie];if(0>l(V,ge))ie<j&&0>l(de,V)?(Y[xe]=de,Y[ie]=ge,xe=ie):(Y[xe]=V,Y[B]=ge,xe=B);else if(ie<j&&0>l(de,ge))Y[xe]=de,Y[ie]=ge,xe=ie;else break e}}return Z}function l(Y,Z){var ge=Y.sortIndex-Z.sortIndex;return ge!==0?ge:Y.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var m=Date,f=m.now();a.unstable_now=function(){return m.now()-f}}var g=[],y=[],p=1,b=null,v=3,w=!1,R=!1,D=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function N(Y){for(var Z=s(y);Z!==null;){if(Z.callback===null)o(y);else if(Z.startTime<=Y)o(y),Z.sortIndex=Z.expirationTime,r(g,Z);else break;Z=s(y)}}function x(Y){if(D=!1,N(Y),!R)if(s(g)!==null)R=!0,O||(O=!0,ae());else{var Z=s(y);Z!==null&&ne(x,Z.startTime-Y)}}var O=!1,C=-1,P=5,k=-1;function te(){return S?!0:!(a.unstable_now()-k<P)}function X(){if(S=!1,O){var Y=a.unstable_now();k=Y;var Z=!0;try{e:{R=!1,D&&(D=!1,L(C),C=-1),w=!0;var ge=v;try{t:{for(N(Y),b=s(g);b!==null&&!(b.expirationTime>Y&&te());){var xe=b.callback;if(typeof xe=="function"){b.callback=null,v=b.priorityLevel;var j=xe(b.expirationTime<=Y);if(Y=a.unstable_now(),typeof j=="function"){b.callback=j,N(Y),Z=!0;break t}b===s(g)&&o(g),N(Y)}else o(g);b=s(g)}if(b!==null)Z=!0;else{var ee=s(y);ee!==null&&ne(x,ee.startTime-Y),Z=!1}}break e}finally{b=null,v=ge,w=!1}Z=void 0}}finally{Z?ae():O=!1}}}var ae;if(typeof _=="function")ae=function(){_(X)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,oe=pe.port2;pe.port1.onmessage=X,ae=function(){oe.postMessage(null)}}else ae=function(){T(X,0)};function ne(Y,Z){C=T(function(){Y(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(Y){Y.callback=null},a.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<Y?Math.floor(1e3/Y):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(Y){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var ge=v;v=Z;try{return Y()}finally{v=ge}},a.unstable_requestPaint=function(){S=!0},a.unstable_runWithPriority=function(Y,Z){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ge=v;v=Y;try{return Z()}finally{v=ge}},a.unstable_scheduleCallback=function(Y,Z,ge){var xe=a.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?xe+ge:xe):ge=xe,Y){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ge+j,Y={id:p++,callback:Z,priorityLevel:Y,startTime:ge,expirationTime:j,sortIndex:-1},ge>xe?(Y.sortIndex=ge,r(y,Y),s(g)===null&&Y===s(y)&&(D?(L(C),C=-1):D=!0,ne(x,ge-xe))):(Y.sortIndex=j,r(g,Y),R||w||(R=!0,O||(O=!0,ae()))),Y},a.unstable_shouldYield=te,a.unstable_wrapCallback=function(Y){var Z=v;return function(){var ge=v;v=Z;try{return Y.apply(this,arguments)}finally{v=ge}}}})(Tu)),Tu}var Cm;function YE(){return Cm||(Cm=1,Su.exports=zE()),Su.exports}var Au={exports:{}},$e={};var Rm;function HE(){if(Rm)return $e;Rm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),m=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),b=Symbol.iterator;function v(j){return j===null||typeof j!="object"?null:(j=b&&j[b]||j["@@iterator"],typeof j=="function"?j:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,D={};function S(j,ee,B){this.props=j,this.context=ee,this.refs=D,this.updater=B||w}S.prototype.isReactComponent={},S.prototype.setState=function(j,ee){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,ee,"setState")},S.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function T(){}T.prototype=S.prototype;function L(j,ee,B){this.props=j,this.context=ee,this.refs=D,this.updater=B||w}var _=L.prototype=new T;_.constructor=L,R(_,S.prototype),_.isPureReactComponent=!0;var N=Array.isArray,x={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function C(j,ee,B,V,ie,de){return B=de.ref,{$$typeof:a,type:j,key:ee,ref:B!==void 0?B:null,props:de}}function P(j,ee){return C(j.type,ee,void 0,void 0,void 0,j.props)}function k(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function te(j){var ee={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(B){return ee[B]})}var X=/\/+/g;function ae(j,ee){return typeof j=="object"&&j!==null&&j.key!=null?te(""+j.key):ee.toString(36)}function pe(){}function oe(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(pe,pe):(j.status="pending",j.then(function(ee){j.status==="pending"&&(j.status="fulfilled",j.value=ee)},function(ee){j.status==="pending"&&(j.status="rejected",j.reason=ee)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function ne(j,ee,B,V,ie){var de=typeof j;(de==="undefined"||de==="boolean")&&(j=null);var ve=!1;if(j===null)ve=!0;else switch(de){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(j.$$typeof){case a:case r:ve=!0;break;case p:return ve=j._init,ne(ve(j._payload),ee,B,V,ie)}}if(ve)return ie=ie(j),ve=V===""?"."+ae(j,0):V,N(ie)?(B="",ve!=null&&(B=ve.replace(X,"$&/")+"/"),ne(ie,ee,B,"",function(bt){return bt})):ie!=null&&(k(ie)&&(ie=P(ie,B+(ie.key==null||j&&j.key===ie.key?"":(""+ie.key).replace(X,"$&/")+"/")+ve)),ee.push(ie)),1;ve=0;var Pe=V===""?".":V+":";if(N(j))for(var ke=0;ke<j.length;ke++)V=j[ke],de=Pe+ae(V,ke),ve+=ne(V,ee,B,de,ie);else if(ke=v(j),typeof ke=="function")for(j=ke.call(j),ke=0;!(V=j.next()).done;)V=V.value,de=Pe+ae(V,ke++),ve+=ne(V,ee,B,de,ie);else if(de==="object"){if(typeof j.then=="function")return ne(oe(j),ee,B,V,ie);throw ee=String(j),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Y(j,ee,B){if(j==null)return j;var V=[],ie=0;return ne(j,V,"","",function(de){return ee.call(B,de,ie++)}),V}function Z(j){if(j._status===-1){var ee=j._result;ee=ee(),ee.then(function(B){(j._status===0||j._status===-1)&&(j._status=1,j._result=B)},function(B){(j._status===0||j._status===-1)&&(j._status=2,j._result=B)}),j._status===-1&&(j._status=0,j._result=ee)}if(j._status===1)return j._result.default;throw j._result}var ge=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function xe(){}return $e.Children={map:Y,forEach:function(j,ee,B){Y(j,function(){ee.apply(this,arguments)},B)},count:function(j){var ee=0;return Y(j,function(){ee++}),ee},toArray:function(j){return Y(j,function(ee){return ee})||[]},only:function(j){if(!k(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},$e.Component=S,$e.Fragment=s,$e.Profiler=l,$e.PureComponent=L,$e.StrictMode=o,$e.Suspense=g,$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,$e.__COMPILER_RUNTIME={__proto__:null,c:function(j){return x.H.useMemoCache(j)}},$e.cache=function(j){return function(){return j.apply(null,arguments)}},$e.cloneElement=function(j,ee,B){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var V=R({},j.props),ie=j.key,de=void 0;if(ee!=null)for(ve in ee.ref!==void 0&&(de=void 0),ee.key!==void 0&&(ie=""+ee.key),ee)!O.call(ee,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&ee.ref===void 0||(V[ve]=ee[ve]);var ve=arguments.length-2;if(ve===1)V.children=B;else if(1<ve){for(var Pe=Array(ve),ke=0;ke<ve;ke++)Pe[ke]=arguments[ke+2];V.children=Pe}return C(j.type,ie,void 0,void 0,de,V)},$e.createContext=function(j){return j={$$typeof:m,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:u,_context:j},j},$e.createElement=function(j,ee,B){var V,ie={},de=null;if(ee!=null)for(V in ee.key!==void 0&&(de=""+ee.key),ee)O.call(ee,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ie[V]=ee[V]);var ve=arguments.length-2;if(ve===1)ie.children=B;else if(1<ve){for(var Pe=Array(ve),ke=0;ke<ve;ke++)Pe[ke]=arguments[ke+2];ie.children=Pe}if(j&&j.defaultProps)for(V in ve=j.defaultProps,ve)ie[V]===void 0&&(ie[V]=ve[V]);return C(j,de,void 0,void 0,null,ie)},$e.createRef=function(){return{current:null}},$e.forwardRef=function(j){return{$$typeof:f,render:j}},$e.isValidElement=k,$e.lazy=function(j){return{$$typeof:p,_payload:{_status:-1,_result:j},_init:Z}},$e.memo=function(j,ee){return{$$typeof:y,type:j,compare:ee===void 0?null:ee}},$e.startTransition=function(j){var ee=x.T,B={};x.T=B;try{var V=j(),ie=x.S;ie!==null&&ie(B,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(xe,ge)}catch(de){ge(de)}finally{x.T=ee}},$e.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},$e.use=function(j){return x.H.use(j)},$e.useActionState=function(j,ee,B){return x.H.useActionState(j,ee,B)},$e.useCallback=function(j,ee){return x.H.useCallback(j,ee)},$e.useContext=function(j){return x.H.useContext(j)},$e.useDebugValue=function(){},$e.useDeferredValue=function(j,ee){return x.H.useDeferredValue(j,ee)},$e.useEffect=function(j,ee,B){var V=x.H;if(typeof B=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(j,ee)},$e.useId=function(){return x.H.useId()},$e.useImperativeHandle=function(j,ee,B){return x.H.useImperativeHandle(j,ee,B)},$e.useInsertionEffect=function(j,ee){return x.H.useInsertionEffect(j,ee)},$e.useLayoutEffect=function(j,ee){return x.H.useLayoutEffect(j,ee)},$e.useMemo=function(j,ee){return x.H.useMemo(j,ee)},$e.useOptimistic=function(j,ee){return x.H.useOptimistic(j,ee)},$e.useReducer=function(j,ee,B){return x.H.useReducer(j,ee,B)},$e.useRef=function(j){return x.H.useRef(j)},$e.useState=function(j){return x.H.useState(j)},$e.useSyncExternalStore=function(j,ee,B){return x.H.useSyncExternalStore(j,ee,B)},$e.useTransition=function(){return x.H.useTransition()},$e.version="19.1.4",$e}var _m;function oc(){return _m||(_m=1,Au.exports=HE()),Au.exports}var Du={exports:{}},xa={};var Im;function VE(){if(Im)return xa;Im=1;var a=oc();function r(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)y+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(g,y,p){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:g,containerInfo:y,implementation:p}}var m=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return xa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,xa.createPortal=function(g,y){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(r(299));return u(g,y,null,p)},xa.flushSync=function(g){var y=m.T,p=o.p;try{if(m.T=null,o.p=2,g)return g()}finally{m.T=y,o.p=p,o.d.f()}},xa.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(g,y))},xa.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},xa.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var p=y.as,b=f(p,y.crossOrigin),v=typeof y.integrity=="string"?y.integrity:void 0,w=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;p==="style"?o.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:w}):p==="script"&&o.d.X(g,{crossOrigin:b,integrity:v,fetchPriority:w,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},xa.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var p=f(y.as,y.crossOrigin);o.d.M(g,{crossOrigin:p,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(g)},xa.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var p=y.as,b=f(p,y.crossOrigin);o.d.L(g,p,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},xa.preloadModule=function(g,y){if(typeof g=="string")if(y){var p=f(y.as,y.crossOrigin);o.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:p,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(g)},xa.requestFormReset=function(g){o.d.r(g)},xa.unstable_batchedUpdates=function(g,y){return g(y)},xa.useFormState=function(g,y,p){return m.H.useFormState(g,y,p)},xa.useFormStatus=function(){return m.H.useHostTransitionStatus()},xa.version="19.1.4",xa}var Lm;function ob(){if(Lm)return Du.exports;Lm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Du.exports=VE(),Du.exports}var Pm;function GE(){if(Pm)return Wo;Pm=1;var a=YE(),r=oc(),s=ob();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(u(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var d=n.return;if(d===null)break;var h=d.alternate;if(h===null){if(i=d.return,i!==null){n=i;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===n)return f(d),e;if(h===i)return f(d),t;h=h.sibling}throw Error(o(188))}if(n.return!==i.return)n=d,i=h;else{for(var E=!1,A=d.child;A;){if(A===n){E=!0,n=d,i=h;break}if(A===i){E=!0,i=d,n=h;break}A=A.sibling}if(!E){for(A=h.child;A;){if(A===n){E=!0,n=h,i=d;break}if(A===i){E=!0,i=h,n=d;break}A=A.sibling}if(!E)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),_=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Symbol.for("react.client.reference");function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case S:return"Profiler";case D:return"StrictMode";case x:return"Suspense";case O:return"SuspenseList";case k:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case _:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case N:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var ne=Array.isArray,Y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},xe=[],j=-1;function ee(e){return{current:e}}function B(e){0>j||(e.current=xe[j],xe[j]=null,j--)}function V(e,t){j++,xe[j]=e.current,e.current=t}var ie=ee(null),de=ee(null),ve=ee(null),Pe=ee(null);function ke(e,t){switch(V(ve,t),V(de,e),V(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Jg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Jg(t),e=em(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(ie),V(ie,e)}function bt(){B(ie),B(de),B(ve)}function rt(e){e.memoizedState!==null&&V(Pe,e);var t=ie.current,n=em(t,e.type);t!==n&&(V(de,e),V(ie,n))}function dt(e){de.current===e&&(B(ie),B(de)),Pe.current===e&&(B(Pe),zo._currentValue=ge)}var ht=Object.prototype.hasOwnProperty,Ut=a.unstable_scheduleCallback,vt=a.unstable_cancelCallback,$=a.unstable_shouldYield,fe=a.unstable_requestPaint,he=a.unstable_now,z=a.unstable_getCurrentPriorityLevel,ue=a.unstable_ImmediatePriority,Ne=a.unstable_UserBlockingPriority,ye=a.unstable_NormalPriority,Me=a.unstable_LowPriority,et=a.unstable_IdlePriority,Fe=a.log,Be=a.unstable_setDisableYieldValue,ya=null,we=null;function Ye(e){if(typeof Fe=="function"&&Be(e),we&&typeof we.setStrictMode=="function")try{we.setStrictMode(ya,e)}catch{}}var Re=Math.clz32?Math.clz32:Oa,aa=Math.log,Oe=Math.LN2;function Oa(e){return e>>>=0,e===0?32:31-(aa(e)/Oe|0)|0}var Bt=256,Vt=4194304;function Tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function at(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var d=0,h=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var A=i&134217727;return A!==0?(i=A&~h,i!==0?d=Tt(i):(E&=A,E!==0?d=Tt(E):n||(n=A&~e,n!==0&&(d=Tt(n))))):(A=i&~h,A!==0?d=Tt(A):E!==0?d=Tt(E):n||(n=i&~e,n!==0&&(d=Tt(n)))),d===0?0:t!==0&&t!==d&&(t&h)===0&&(h=d&-d,n=t&-t,h>=n||h===32&&(n&4194048)!==0)?t:d}function ba(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function kt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ja(){var e=Bt;return Bt<<=1,(Bt&4194048)===0&&(Bt=256),e}function Gt(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _t(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,t,n,i,d,h){var E=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var A=e.entanglements,q=e.expirationTimes,W=e.hiddenUpdates;for(n=E&~n;0<n;){var se=31-Re(n),ce=1<<se;A[se]=0,q[se]=-1;var K=W[se];if(K!==null)for(W[se]=null,se=0;se<K.length;se++){var Q=K[se];Q!==null&&(Q.lane&=-536870913)}n&=~ce}i!==0&&rn(e,i,0),h!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=h&~(E&~t))}function rn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Re(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function sn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Re(n),d=1<<i;d&t|e[i]&t&&(e[i]|=t),n&=~d}}function Cn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ra(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Rn(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:vm(e.type))}function va(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var Ea=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Ea,jt="__reactProps$"+Ea,I="__reactContainer$"+Ea,J="__reactEvents$"+Ea,me="__reactListeners$"+Ea,Ie="__reactHandles$"+Ea,it="__reactResources$"+Ea,je="__reactMarker$"+Ea;function We(e){delete e[Ot],delete e[jt],delete e[J],delete e[me],delete e[Ie]}function lt(e){var t=e[Ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[I]||n[Ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=rm(e);e!==null;){if(n=e[Ot])return n;e=rm(e)}return t}e=n,n=e.parentNode}return null}function F(e){if(e=e[Ot]||e[I]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function be(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ee(e){var t=e[it];return t||(t=e[it]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Se(e){e[je]=!0}var Ue=new Set,Ke={};function tt(e,t){Dt(e,t),Dt(e+"Capture",t)}function Dt(e,t){for(Ke[e]=t,e=0;e<t.length;e++)Ue.add(t[e])}var Ta=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},na={};function Qn(e){return ht.call(na,e)?!0:ht.call(It,e)?!1:Ta.test(e)?na[e]=!0:(It[e]=!0,!1)}function Xa(e,t,n){if(Qn(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Jn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function qa(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var os,Ii;function er(e){if(os===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);os=t&&t[1]||"",Ii=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+os+e+Ii}var is=!1;function ls(e,t){if(!e||is)return"";is=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var ce=function(){throw Error()};if(Object.defineProperty(ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ce,[])}catch(Q){var K=Q}Reflect.construct(e,[],ce)}else{try{ce.call()}catch(Q){K=Q}e.call(ce.prototype)}}else{try{throw Error()}catch(Q){K=Q}(ce=e())&&typeof ce.catch=="function"&&ce.catch(function(){})}}catch(Q){if(Q&&K&&typeof Q.stack=="string")return[Q.stack,K.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=i.DetermineComponentFrameRoot(),E=h[0],A=h[1];if(E&&A){var q=E.split(`
`),W=A.split(`
`);for(d=i=0;i<q.length&&!q[i].includes("DetermineComponentFrameRoot");)i++;for(;d<W.length&&!W[d].includes("DetermineComponentFrameRoot");)d++;if(i===q.length||d===W.length)for(i=q.length-1,d=W.length-1;1<=i&&0<=d&&q[i]!==W[d];)d--;for(;1<=i&&0<=d;i--,d--)if(q[i]!==W[d]){if(i!==1||d!==1)do if(i--,d--,0>d||q[i]!==W[d]){var se=`
`+q[i].replace(" at new "," at ");return e.displayName&&se.includes("<anonymous>")&&(se=se.replace("<anonymous>",e.displayName)),se}while(1<=i&&0<=d);break}}}finally{is=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?er(n):""}function vc(e){switch(e.tag){case 26:case 27:case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 15:return ls(e.type,!1);case 11:return ls(e.type.render,!1);case 1:return ls(e.type,!0);case 31:return er("Activity");default:return""}}function eo(e){try{var t="";do t+=vc(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Zt(e){var t=Ce(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var d=n.get,h=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(E){i=""+E,h.call(this,E)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(E){i=""+E},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xt(e){e._valueTracker||(e._valueTracker=Zt(e))}function Nt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Ce(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _n=/[\n"\\]/g;function Ct(e){return e.replace(_n,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ma(e,t,n,i,d,h,E,A){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),t!=null?E==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ae(t)):e.value!==""+Ae(t)&&(e.value=""+Ae(t)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),t!=null?tr(e,E,Ae(t)):n!=null?tr(e,E,Ae(n)):i!=null&&e.removeAttribute("value"),d==null&&h!=null&&(e.defaultChecked=!!h),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Ae(A):e.removeAttribute("name")}function Wa(e,t,n,i,d,h,E,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),t!=null||n!=null){if(!(h!=="submit"&&h!=="reset"||t!=null))return;n=n!=null?""+Ae(n):"",t=t!=null?""+Ae(t):n,A||t===e.value||(e.value=t),e.defaultValue=t}i=i??d,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=A?e.checked:!!i,e.defaultChecked=!!i,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function tr(e,t,n){t==="number"&&ra(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function cs(e,t,n,i){if(e=e.options,t){t={};for(var d=0;d<n.length;d++)t["$"+n[d]]=!0;for(n=0;n<e.length;n++)d=t.hasOwnProperty("$"+e[n].value),e[n].selected!==d&&(e[n].selected=d),d&&i&&(e[n].defaultSelected=!0)}else{for(n=""+Ae(n),t=null,d=0;d<e.length;d++){if(e[d].value===n){e[d].selected=!0,i&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function Kp(e,t,n){if(t!=null&&(t=""+Ae(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ae(n):""}function Zp(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(ne(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=Ae(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function ds(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var jv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Qp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||jv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Jp(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var d in t)i=t[d],t.hasOwnProperty(d)&&n[d]!==i&&Qp(e,d,i)}else for(var h in t)t.hasOwnProperty(h)&&Qp(e,h,t[h])}function Ec(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Li(e){return Mv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var wc=null;function xc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var us=null,ps=null;function ef(e){var t=F(e);if(t&&(e=t.stateNode)){var n=e[jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ma(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ct(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var d=i[jt]||null;if(!d)throw Error(o(90));Ma(i,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Nt(i)}break e;case"textarea":Kp(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&cs(e,!!n.multiple,t,!1)}}}var Sc=!1;function tf(e,t,n){if(Sc)return e(t,n);Sc=!0;try{var i=e(t);return i}finally{if(Sc=!1,(us!==null||ps!==null)&&(yl(),us&&(t=us,e=ps,ps=us=null,ef(t),e)))for(t=0;t<e.length;t++)ef(e[t])}}function to(e,t){var n=e.stateNode;if(n===null)return null;var i=n[jt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Tc=!1;if(In)try{var ao={};Object.defineProperty(ao,"passive",{get:function(){Tc=!0}}),window.addEventListener("test",ao,ao),window.removeEventListener("test",ao,ao)}catch{Tc=!1}var ar=null,Ac=null,Pi=null;function af(){if(Pi)return Pi;var e,t=Ac,n=t.length,i,d="value"in ar?ar.value:ar.textContent,h=d.length;for(e=0;e<n&&t[e]===d[e];e++);var E=n-e;for(i=1;i<=E&&t[n-i]===d[h-i];i++);return Pi=d.slice(e,1<i?1-i:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function nf(){return!1}function _a(e){function t(n,i,d,h,E){this._reactName=n,this._targetInst=d,this.type=i,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(n=e[A],this[A]=n?n(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Oi:nf,this.isPropagationStopped=nf,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ji=_a(kr),no=p({},kr,{view:0,detail:0}),$v=_a(no),Dc,Nc,ro,qi=p({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ro&&(ro&&e.type==="mousemove"?(Dc=e.screenX-ro.screenX,Nc=e.screenY-ro.screenY):Nc=Dc=0,ro=e),Dc)},movementY:function(e){return"movementY"in e?e.movementY:Nc}}),rf=_a(qi),Fv=p({},qi,{dataTransfer:0}),Uv=_a(Fv),Bv=p({},no,{relatedTarget:0}),Cc=_a(Bv),zv=p({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yv=_a(zv),Hv=p({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vv=_a(Hv),Gv=p({},kr,{data:0}),sf=_a(Gv),Xv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kv[e])?!!t[e]:!1}function Rc(){return Zv}var Qv=p({},no,{key:function(e){if(e.key){var t=Xv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rc,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jv=_a(Qv),e0=p({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),of=_a(e0),t0=p({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rc}),a0=_a(t0),n0=p({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),r0=_a(n0),s0=p({},qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),o0=_a(s0),i0=p({},kr,{newState:0,oldState:0}),l0=_a(i0),c0=[9,13,27,32],_c=In&&"CompositionEvent"in window,so=null;In&&"documentMode"in document&&(so=document.documentMode);var d0=In&&"TextEvent"in window&&!so,lf=In&&(!_c||so&&8<so&&11>=so),cf=" ",df=!1;function uf(e,t){switch(e){case"keyup":return c0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fs=!1;function u0(e,t){switch(e){case"compositionend":return pf(t);case"keypress":return t.which!==32?null:(df=!0,cf);case"textInput":return e=t.data,e===cf&&df?null:e;default:return null}}function p0(e,t){if(fs)return e==="compositionend"||!_c&&uf(e,t)?(e=af(),Pi=Ac=ar=null,fs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lf&&t.locale!=="ko"?null:t.data;default:return null}}var f0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!f0[e.type]:t==="textarea"}function hf(e,t,n,i){us?ps?ps.push(i):ps=[i]:us=i,t=Sl(t,"onChange"),0<t.length&&(n=new ji("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var oo=null,io=null;function h0(e){Xg(e,0)}function Mi(e){var t=be(e);if(Nt(t))return e}function gf(e,t){if(e==="change")return t}var mf=!1;if(In){var Ic;if(In){var Lc="oninput"in document;if(!Lc){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),Lc=typeof yf.oninput=="function"}Ic=Lc}else Ic=!1;mf=Ic&&(!document.documentMode||9<document.documentMode)}function bf(){oo&&(oo.detachEvent("onpropertychange",vf),io=oo=null)}function vf(e){if(e.propertyName==="value"&&Mi(io)){var t=[];hf(t,io,e,xc(e)),tf(h0,t)}}function g0(e,t,n){e==="focusin"?(bf(),oo=t,io=n,oo.attachEvent("onpropertychange",vf)):e==="focusout"&&bf()}function m0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Mi(io)}function y0(e,t){if(e==="click")return Mi(t)}function b0(e,t){if(e==="input"||e==="change")return Mi(t)}function v0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $a=typeof Object.is=="function"?Object.is:v0;function lo(e,t){if($a(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var d=n[i];if(!ht.call(t,d)||!$a(e[d],t[d]))return!1}return!0}function Ef(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wf(e,t){var n=Ef(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ef(n)}}function xf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?xf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Sf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ra(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ra(e.document)}return t}function Pc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var E0=In&&"documentMode"in document&&11>=document.documentMode,hs=null,kc=null,co=null,Oc=!1;function Tf(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Oc||hs==null||hs!==ra(i)||(i=hs,"selectionStart"in i&&Pc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),co&&lo(co,i)||(co=i,i=Sl(kc,"onSelect"),0<i.length&&(t=new ji("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=hs)))}function Or(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gs={animationend:Or("Animation","AnimationEnd"),animationiteration:Or("Animation","AnimationIteration"),animationstart:Or("Animation","AnimationStart"),transitionrun:Or("Transition","TransitionRun"),transitionstart:Or("Transition","TransitionStart"),transitioncancel:Or("Transition","TransitionCancel"),transitionend:Or("Transition","TransitionEnd")},jc={},Af={};In&&(Af=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function jr(e){if(jc[e])return jc[e];if(!gs[e])return e;var t=gs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Af)return jc[e]=t[n];return e}var Df=jr("animationend"),Nf=jr("animationiteration"),Cf=jr("animationstart"),w0=jr("transitionrun"),x0=jr("transitionstart"),S0=jr("transitioncancel"),Rf=jr("transitionend"),_f=new Map,qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qc.push("scrollEnd");function on(e,t){_f.set(e,t),tt(t,[e])}var If=new WeakMap;function Ka(e,t){if(typeof e=="object"&&e!==null){var n=If.get(e);return n!==void 0?n:(t={value:e,source:t,stack:eo(t)},If.set(e,t),t)}return{value:e,source:t,stack:eo(t)}}var Za=[],ms=0,Mc=0;function $i(){for(var e=ms,t=Mc=ms=0;t<e;){var n=Za[t];Za[t++]=null;var i=Za[t];Za[t++]=null;var d=Za[t];Za[t++]=null;var h=Za[t];if(Za[t++]=null,i!==null&&d!==null){var E=i.pending;E===null?d.next=d:(d.next=E.next,E.next=d),i.pending=d}h!==0&&Lf(n,d,h)}}function Fi(e,t,n,i){Za[ms++]=e,Za[ms++]=t,Za[ms++]=n,Za[ms++]=i,Mc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function $c(e,t,n,i){return Fi(e,t,n,i),Ui(e)}function ys(e,t){return Fi(e,null,null,t),Ui(e)}function Lf(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var d=!1,h=e.return;h!==null;)h.childLanes|=n,i=h.alternate,i!==null&&(i.childLanes|=n),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(d=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,d&&t!==null&&(d=31-Re(n),e=h.hiddenUpdates,i=e[d],i===null?e[d]=[t]:i.push(t),t.lane=n|536870912),h):null}function Ui(e){if(50<Oo)throw Oo=0,Hd=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var bs={};function T0(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fa(e,t,n,i){return new T0(e,t,n,i)}function Fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ln(e,t){var n=e.alternate;return n===null?(n=Fa(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Pf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Bi(e,t,n,i,d,h){var E=0;if(i=e,typeof e=="function")Fc(e)&&(E=1);else if(typeof e=="string")E=DE(e,n,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case k:return e=Fa(31,n,t,d),e.elementType=k,e.lanes=h,e;case R:return qr(n.children,d,h,t);case D:E=8,d|=24;break;case S:return e=Fa(12,n,t,d|2),e.elementType=S,e.lanes=h,e;case x:return e=Fa(13,n,t,d),e.elementType=x,e.lanes=h,e;case O:return e=Fa(19,n,t,d),e.elementType=O,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T:case _:E=10;break e;case L:E=9;break e;case N:E=11;break e;case C:E=14;break e;case P:E=16,i=null;break e}E=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=Fa(E,n,t,d),t.elementType=e,t.type=i,t.lanes=h,t}function qr(e,t,n,i){return e=Fa(7,e,i,t),e.lanes=n,e}function Uc(e,t,n){return e=Fa(6,e,null,t),e.lanes=n,e}function Bc(e,t,n){return t=Fa(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var vs=[],Es=0,zi=null,Yi=0,Qa=[],Ja=0,Mr=null,Pn=1,kn="";function $r(e,t){vs[Es++]=Yi,vs[Es++]=zi,zi=e,Yi=t}function kf(e,t,n){Qa[Ja++]=Pn,Qa[Ja++]=kn,Qa[Ja++]=Mr,Mr=e;var i=Pn;e=kn;var d=32-Re(i)-1;i&=~(1<<d),n+=1;var h=32-Re(t)+d;if(30<h){var E=d-d%5;h=(i&(1<<E)-1).toString(32),i>>=E,d-=E,Pn=1<<32-Re(t)+d|n<<d|i,kn=h+e}else Pn=1<<h|n<<d|i,kn=e}function zc(e){e.return!==null&&($r(e,1),kf(e,1,0))}function Yc(e){for(;e===zi;)zi=vs[--Es],vs[Es]=null,Yi=vs[--Es],vs[Es]=null;for(;e===Mr;)Mr=Qa[--Ja],Qa[Ja]=null,kn=Qa[--Ja],Qa[Ja]=null,Pn=Qa[--Ja],Qa[Ja]=null}var Aa=null,Mt=null,st=!1,Fr=null,gn=!1,Hc=Error(o(519));function Ur(e){var t=Error(o(418,""));throw fo(Ka(t,e)),Hc}function Of(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Ot]=e,t[jt]=i,n){case"dialog":Xe("cancel",t),Xe("close",t);break;case"iframe":case"object":case"embed":Xe("load",t);break;case"video":case"audio":for(n=0;n<qo.length;n++)Xe(qo[n],t);break;case"source":Xe("error",t);break;case"img":case"image":case"link":Xe("error",t),Xe("load",t);break;case"details":Xe("toggle",t);break;case"input":Xe("invalid",t),Wa(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),xt(t);break;case"select":Xe("invalid",t);break;case"textarea":Xe("invalid",t),Zp(t,i.value,i.defaultValue,i.children),xt(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Qg(t.textContent,n)?(i.popover!=null&&(Xe("beforetoggle",t),Xe("toggle",t)),i.onScroll!=null&&Xe("scroll",t),i.onScrollEnd!=null&&Xe("scrollend",t),i.onClick!=null&&(t.onclick=Tl),t=!0):t=!1,t||Ur(e)}function jf(e){for(Aa=e.return;Aa;)switch(Aa.tag){case 5:case 13:gn=!1;return;case 27:case 3:gn=!0;return;default:Aa=Aa.return}}function uo(e){if(e!==Aa)return!1;if(!st)return jf(e),st=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||iu(e.type,e.memoizedProps)),n=!n),n&&Mt&&Ur(e),jf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Mt=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Mt=null}}else t===27?(t=Mt,br(e.type)?(e=uu,uu=null,Mt=e):Mt=t):Mt=Aa?cn(e.stateNode.nextSibling):null;return!0}function po(){Mt=Aa=null,st=!1}function qf(){var e=Fr;return e!==null&&(Pa===null?Pa=e:Pa.push.apply(Pa,e),Fr=null),e}function fo(e){Fr===null?Fr=[e]:Fr.push(e)}var Vc=ee(null),Br=null,On=null;function nr(e,t,n){V(Vc,t._currentValue),t._currentValue=n}function jn(e){e._currentValue=Vc.current,B(Vc)}function Gc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Xc(e,t,n,i){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var h=d.dependencies;if(h!==null){var E=d.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=d;for(var q=0;q<t.length;q++)if(A.context===t[q]){h.lanes|=n,A=h.alternate,A!==null&&(A.lanes|=n),Gc(h.return,n,e),i||(E=null);break e}h=A.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(o(341));E.lanes|=n,h=E.alternate,h!==null&&(h.lanes|=n),Gc(E,n,e),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===e){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function ho(e,t,n,i){e=null;for(var d=t,h=!1;d!==null;){if(!h){if((d.flags&524288)!==0)h=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(o(387));if(E=E.memoizedProps,E!==null){var A=d.type;$a(d.pendingProps.value,E.value)||(e!==null?e.push(A):e=[A])}}else if(d===Pe.current){if(E=d.alternate,E===null)throw Error(o(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(zo):e=[zo])}d=d.return}e!==null&&Xc(t,e,n,i),t.flags|=262144}function Hi(e){for(e=e.firstContext;e!==null;){if(!$a(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function zr(e){Br=e,On=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wa(e){return Mf(Br,e)}function Vi(e,t){return Br===null&&zr(e),Mf(e,t)}function Mf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},On===null){if(e===null)throw Error(o(308));On=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else On=On.next=t;return n}var A0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},D0=a.unstable_scheduleCallback,N0=a.unstable_NormalPriority,Qt={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wc(){return{controller:new A0,data:new Map,refCount:0}}function go(e){e.refCount--,e.refCount===0&&D0(N0,function(){e.controller.abort()})}var mo=null,Kc=0,ws=0,xs=null;function C0(e,t){if(mo===null){var n=mo=[];Kc=0,ws=Qd(),xs={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Kc++,t.then($f,$f),t}function $f(){if(--Kc===0&&mo!==null){xs!==null&&(xs.status="fulfilled");var e=mo;mo=null,ws=0,xs=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function R0(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(d){n.push(d)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var d=0;d<n.length;d++)(0,n[d])(t)},function(d){for(i.status="rejected",i.reason=d,d=0;d<n.length;d++)(0,n[d])(void 0)}),i}var Ff=Y.S;Y.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&C0(e,t),Ff!==null&&Ff(e,t)};var Yr=ee(null);function Zc(){var e=Yr.current;return e!==null?e:St.pooledCache}function Gi(e,t){t===null?V(Yr,Yr.current):V(Yr,t.pool)}function Uf(){var e=Zc();return e===null?null:{parent:Qt._currentValue,pool:e}}var yo=Error(o(460)),Bf=Error(o(474)),Xi=Error(o(542)),Qc={then:function(){}};function zf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Wi(){}function Yf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Wi,Wi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vf(e),e;default:if(typeof t.status=="string")t.then(Wi,Wi);else{if(e=St,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=i}},function(i){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Vf(e),e}throw bo=t,yo}}var bo=null;function Hf(){if(bo===null)throw Error(o(459));var e=bo;return bo=null,e}function Vf(e){if(e===yo||e===Xi)throw Error(o(483))}var rr=!1;function Jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ed(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function or(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(ut&2)!==0){var d=i.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),i.pending=t,t=Ui(e),Lf(e,null,n),t}return Fi(e,i,t,n),Ui(e)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,sn(e,n)}}function td(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var d=null,h=null;if(n=n.firstBaseUpdate,n!==null){do{var E={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};h===null?d=h=E:h=h.next=E,n=n.next}while(n!==null);h===null?d=h=t:h=h.next=t}else d=h=t;n={baseState:i.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ad=!1;function Eo(){if(ad){var e=xs;if(e!==null)throw e}}function wo(e,t,n,i){ad=!1;var d=e.updateQueue;rr=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var q=A,W=q.next;q.next=null,E===null?h=W:E.next=W,E=q;var se=e.alternate;se!==null&&(se=se.updateQueue,A=se.lastBaseUpdate,A!==E&&(A===null?se.firstBaseUpdate=W:A.next=W,se.lastBaseUpdate=q))}if(h!==null){var ce=d.baseState;E=0,se=W=q=null,A=h;do{var K=A.lane&-536870913,Q=K!==A.lane;if(Q?(Je&K)===K:(i&K)===K){K!==0&&K===ws&&(ad=!0),se!==null&&(se=se.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var qe=e,_e=A;K=t;var yt=n;switch(_e.tag){case 1:if(qe=_e.payload,typeof qe=="function"){ce=qe.call(yt,ce,K);break e}ce=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=_e.payload,K=typeof qe=="function"?qe.call(yt,ce,K):qe,K==null)break e;ce=p({},ce,K);break e;case 2:rr=!0}}K=A.callback,K!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=d.callbacks,Q===null?d.callbacks=[K]:Q.push(K))}else Q={lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},se===null?(W=se=Q,q=ce):se=se.next=Q,E|=K;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;Q=A,A=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);se===null&&(q=ce),d.baseState=q,d.firstBaseUpdate=W,d.lastBaseUpdate=se,h===null&&(d.shared.lanes=0),hr|=E,e.lanes=E,e.memoizedState=ce}}function Gf(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Xf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Gf(n[e],t)}var Ss=ee(null),Ki=ee(0);function Wf(e,t){e=zn,V(Ki,e),V(Ss,t),zn=e|t.baseLanes}function nd(){V(Ki,zn),V(Ss,Ss.current)}function rd(){zn=Ki.current,B(Ss),B(Ki)}var ir=0,ze=null,gt=null,Xt=null,Zi=!1,Ts=!1,Hr=!1,Qi=0,xo=0,As=null,_0=0;function zt(){throw Error(o(321))}function sd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$a(e[n],t[n]))return!1;return!0}function od(e,t,n,i,d,h){return ir=h,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=e===null||e.memoizedState===null?Lh:Ph,Hr=!1,h=n(i,d),Hr=!1,Ts&&(h=Zf(t,n,i,d)),Kf(e),h}function Kf(e){Y.H=rl;var t=gt!==null&&gt.next!==null;if(ir=0,Xt=gt=ze=null,Zi=!1,xo=0,As=null,t)throw Error(o(300));e===null||sa||(e=e.dependencies,e!==null&&Hi(e)&&(sa=!0))}function Zf(e,t,n,i){ze=e;var d=0;do{if(Ts&&(As=null),xo=0,Ts=!1,25<=d)throw Error(o(301));if(d+=1,Xt=gt=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}Y.H=q0,h=t(n,i)}while(Ts);return h}function I0(){var e=Y.H,t=e.useState()[0];return t=typeof t.then=="function"?So(t):t,e=e.useState()[0],(gt!==null?gt.memoizedState:null)!==e&&(ze.flags|=1024),t}function id(){var e=Qi!==0;return Qi=0,e}function ld(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function cd(e){if(Zi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Zi=!1}ir=0,Xt=gt=ze=null,Ts=!1,xo=Qi=0,As=null}function Ia(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?ze.memoizedState=Xt=e:Xt=Xt.next=e,Xt}function Wt(){if(gt===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=gt.next;var t=Xt===null?ze.memoizedState:Xt.next;if(t!==null)Xt=t,gt=e;else{if(e===null)throw ze.alternate===null?Error(o(467)):Error(o(310));gt=e,e={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},Xt===null?ze.memoizedState=Xt=e:Xt=Xt.next=e}return Xt}function dd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(e){var t=xo;return xo+=1,As===null&&(As=[]),e=Yf(As,e,t),t=ze,(Xt===null?t.memoizedState:Xt.next)===null&&(t=t.alternate,Y.H=t===null||t.memoizedState===null?Lh:Ph),e}function Ji(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return So(e);if(e.$$typeof===_)return wa(e)}throw Error(o(438,String(e)))}function ud(e){var t=null,n=ze.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=ze.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=dd(),ze.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=te;return t.index++,n}function qn(e,t){return typeof t=="function"?t(e):t}function el(e){var t=Wt();return pd(t,gt,e)}function pd(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var d=e.baseQueue,h=i.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}t.baseQueue=d=h,i.pending=null}if(h=e.baseState,d===null)e.memoizedState=h;else{t=d.next;var A=E=null,q=null,W=t,se=!1;do{var ce=W.lane&-536870913;if(ce!==W.lane?(Je&ce)===ce:(ir&ce)===ce){var K=W.revertLane;if(K===0)q!==null&&(q=q.next={lane:0,revertLane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),ce===ws&&(se=!0);else if((ir&K)===K){W=W.next,K===ws&&(se=!0);continue}else ce={lane:0,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},q===null?(A=q=ce,E=h):q=q.next=ce,ze.lanes|=K,hr|=K;ce=W.action,Hr&&n(h,ce),h=W.hasEagerState?W.eagerState:n(h,ce)}else K={lane:ce,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},q===null?(A=q=K,E=h):q=q.next=K,ze.lanes|=ce,hr|=ce;W=W.next}while(W!==null&&W!==t);if(q===null?E=h:q.next=A,!$a(h,e.memoizedState)&&(sa=!0,se&&(n=xs,n!==null)))throw n;e.memoizedState=h,e.baseState=E,e.baseQueue=q,i.lastRenderedState=h}return d===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function fd(e){var t=Wt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,d=n.pending,h=t.memoizedState;if(d!==null){n.pending=null;var E=d=d.next;do h=e(h,E.action),E=E.next;while(E!==d);$a(h,t.memoizedState)||(sa=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),n.lastRenderedState=h}return[h,i]}function Qf(e,t,n){var i=ze,d=Wt(),h=st;if(h){if(n===void 0)throw Error(o(407));n=n()}else n=t();var E=!$a((gt||d).memoizedState,n);E&&(d.memoizedState=n,sa=!0),d=d.queue;var A=th.bind(null,i,d,e);if(To(2048,8,A,[e]),d.getSnapshot!==t||E||Xt!==null&&Xt.memoizedState.tag&1){if(i.flags|=2048,Ds(9,tl(),eh.bind(null,i,d,n,t),null),St===null)throw Error(o(349));h||(ir&124)!==0||Jf(i,t,n)}return n}function Jf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t=dd(),ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function eh(e,t,n,i){t.value=n,t.getSnapshot=i,ah(t)&&nh(e)}function th(e,t,n){return n(function(){ah(t)&&nh(e)})}function ah(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$a(e,n)}catch{return!0}}function nh(e){var t=ys(e,2);t!==null&&Ha(t,e,2)}function hd(e){var t=Ia();if(typeof e=="function"){var n=e;if(e=n(),Hr){Ye(!0);try{n()}finally{Ye(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},t}function rh(e,t,n,i){return e.baseState=n,pd(e,gt,typeof i=="function"?i:qn)}function L0(e,t,n,i,d){if(nl(e))throw Error(o(485));if(e=t.action,e!==null){var h={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};Y.T!==null?n(!0):h.isTransition=!1,i(h),n=t.pending,n===null?(h.next=t.pending=h,sh(t,h)):(h.next=n.next,t.pending=n.next=h)}}function sh(e,t){var n=t.action,i=t.payload,d=e.state;if(t.isTransition){var h=Y.T,E={};Y.T=E;try{var A=n(d,i),q=Y.S;q!==null&&q(E,A),oh(e,t,A)}catch(W){gd(e,t,W)}finally{Y.T=h}}else try{h=n(d,i),oh(e,t,h)}catch(W){gd(e,t,W)}}function oh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){ih(e,t,i)},function(i){return gd(e,t,i)}):ih(e,t,n)}function ih(e,t,n){t.status="fulfilled",t.value=n,lh(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,sh(e,n)))}function gd(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,lh(t),t=t.next;while(t!==i)}e.action=null}function lh(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ch(e,t){return t}function dh(e,t){if(st){var n=St.formState;if(n!==null){e:{var i=ze;if(st){if(Mt){t:{for(var d=Mt,h=gn;d.nodeType!==8;){if(!h){d=null;break t}if(d=cn(d.nextSibling),d===null){d=null;break t}}h=d.data,d=h==="F!"||h==="F"?d:null}if(d){Mt=cn(d.nextSibling),i=d.data==="F!";break e}}Ur(i)}i=!1}i&&(t=n[0])}}return n=Ia(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ch,lastRenderedState:t},n.queue=i,n=Rh.bind(null,ze,i),i.dispatch=n,i=hd(!1),h=Ed.bind(null,ze,!1,i.queue),i=Ia(),d={state:t,dispatch:null,action:e,pending:null},i.queue=d,n=L0.bind(null,ze,d,h,n),d.dispatch=n,i.memoizedState=e,[t,n,!1]}function uh(e){var t=Wt();return ph(t,gt,e)}function ph(e,t,n){if(t=pd(e,t,ch)[0],e=el(qn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=So(t)}catch(E){throw E===yo?Xi:E}else i=t;t=Wt();var d=t.queue,h=d.dispatch;return n!==t.memoizedState&&(ze.flags|=2048,Ds(9,tl(),P0.bind(null,d,n),null)),[i,h,e]}function P0(e,t){e.action=t}function fh(e){var t=Wt(),n=gt;if(n!==null)return ph(t,n,e);Wt(),t=t.memoizedState,n=Wt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ds(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=ze.updateQueue,t===null&&(t=dd(),ze.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function tl(){return{destroy:void 0,resource:void 0}}function hh(){return Wt().memoizedState}function al(e,t,n,i){var d=Ia();i=i===void 0?null:i,ze.flags|=e,d.memoizedState=Ds(1|t,tl(),n,i)}function To(e,t,n,i){var d=Wt();i=i===void 0?null:i;var h=d.memoizedState.inst;gt!==null&&i!==null&&sd(i,gt.memoizedState.deps)?d.memoizedState=Ds(t,h,n,i):(ze.flags|=e,d.memoizedState=Ds(1|t,h,n,i))}function gh(e,t){al(8390656,8,e,t)}function mh(e,t){To(2048,8,e,t)}function yh(e,t){return To(4,2,e,t)}function bh(e,t){return To(4,4,e,t)}function vh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eh(e,t,n){n=n!=null?n.concat([e]):null,To(4,4,vh.bind(null,t,e),n)}function md(){}function wh(e,t){var n=Wt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&sd(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function xh(e,t){var n=Wt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&sd(t,i[1]))return i[0];if(i=e(),Hr){Ye(!0);try{e()}finally{Ye(!1)}}return n.memoizedState=[i,t],i}function yd(e,t,n){return n===void 0||(ir&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Ag(),ze.lanes|=e,hr|=e,n)}function Sh(e,t,n,i){return $a(n,t)?n:Ss.current!==null?(e=yd(e,n,i),$a(e,t)||(sa=!0),e):(ir&42)===0?(sa=!0,e.memoizedState=n):(e=Ag(),ze.lanes|=e,hr|=e,t)}function Th(e,t,n,i,d){var h=Z.p;Z.p=h!==0&&8>h?h:8;var E=Y.T,A={};Y.T=A,Ed(e,!1,t,n);try{var q=d(),W=Y.S;if(W!==null&&W(A,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var se=R0(q,i);Ao(e,t,se,Ya(e))}else Ao(e,t,i,Ya(e))}catch(ce){Ao(e,t,{then:function(){},status:"rejected",reason:ce},Ya())}finally{Z.p=h,Y.T=E}}function k0(){}function bd(e,t,n,i){if(e.tag!==5)throw Error(o(476));var d=Ah(e).queue;Th(e,d,t,ge,n===null?k0:function(){return Dh(e),n(i)})}function Ah(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:ge},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Dh(e){var t=Ah(e).next.queue;Ao(e,t,{},Ya())}function vd(){return wa(zo)}function Nh(){return Wt().memoizedState}function Ch(){return Wt().memoizedState}function O0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Ya();e=sr(n);var i=or(t,e,n);i!==null&&(Ha(i,t,n),vo(i,t,n)),t={cache:Wc()},e.payload=t;return}t=t.return}}function j0(e,t,n){var i=Ya();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},nl(e)?_h(t,n):(n=$c(e,t,n,i),n!==null&&(Ha(n,e,i),Ih(n,t,i)))}function Rh(e,t,n){var i=Ya();Ao(e,t,n,i)}function Ao(e,t,n,i){var d={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(nl(e))_h(t,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var E=t.lastRenderedState,A=h(E,n);if(d.hasEagerState=!0,d.eagerState=A,$a(A,E))return Fi(e,t,d,0),St===null&&$i(),!1}catch{}if(n=$c(e,t,d,i),n!==null)return Ha(n,e,i),Ih(n,t,i),!0}return!1}function Ed(e,t,n,i){if(i={lane:2,revertLane:Qd(),action:i,hasEagerState:!1,eagerState:null,next:null},nl(e)){if(t)throw Error(o(479))}else t=$c(e,n,i,2),t!==null&&Ha(t,e,2)}function nl(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function _h(e,t){Ts=Zi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ih(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,sn(e,n)}}var rl={readContext:wa,use:Ji,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useLayoutEffect:zt,useInsertionEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useSyncExternalStore:zt,useId:zt,useHostTransitionStatus:zt,useFormState:zt,useActionState:zt,useOptimistic:zt,useMemoCache:zt,useCacheRefresh:zt},Lh={readContext:wa,use:Ji,useCallback:function(e,t){return Ia().memoizedState=[e,t===void 0?null:t],e},useContext:wa,useEffect:gh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,al(4194308,4,vh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return al(4194308,4,e,t)},useInsertionEffect:function(e,t){al(4,2,e,t)},useMemo:function(e,t){var n=Ia();t=t===void 0?null:t;var i=e();if(Hr){Ye(!0);try{e()}finally{Ye(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Ia();if(n!==void 0){var d=n(t);if(Hr){Ye(!0);try{n(t)}finally{Ye(!1)}}}else d=t;return i.memoizedState=i.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},i.queue=e,e=e.dispatch=j0.bind(null,ze,e),[i.memoizedState,e]},useRef:function(e){var t=Ia();return e={current:e},t.memoizedState=e},useState:function(e){e=hd(e);var t=e.queue,n=Rh.bind(null,ze,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:md,useDeferredValue:function(e,t){var n=Ia();return yd(n,e,t)},useTransition:function(){var e=hd(!1);return e=Th.bind(null,ze,e.queue,!0,!1),Ia().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=ze,d=Ia();if(st){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),St===null)throw Error(o(349));(Je&124)!==0||Jf(i,t,n)}d.memoizedState=n;var h={value:n,getSnapshot:t};return d.queue=h,gh(th.bind(null,i,h,e),[e]),i.flags|=2048,Ds(9,tl(),eh.bind(null,i,h,n,t),null),n},useId:function(){var e=Ia(),t=St.identifierPrefix;if(st){var n=kn,i=Pn;n=(i&~(1<<32-Re(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Qi++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=_0++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:vd,useFormState:dh,useActionState:dh,useOptimistic:function(e){var t=Ia();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ed.bind(null,ze,!0,n),n.dispatch=t,[e,t]},useMemoCache:ud,useCacheRefresh:function(){return Ia().memoizedState=O0.bind(null,ze)}},Ph={readContext:wa,use:Ji,useCallback:wh,useContext:wa,useEffect:mh,useImperativeHandle:Eh,useInsertionEffect:yh,useLayoutEffect:bh,useMemo:xh,useReducer:el,useRef:hh,useState:function(){return el(qn)},useDebugValue:md,useDeferredValue:function(e,t){var n=Wt();return Sh(n,gt.memoizedState,e,t)},useTransition:function(){var e=el(qn)[0],t=Wt().memoizedState;return[typeof e=="boolean"?e:So(e),t]},useSyncExternalStore:Qf,useId:Nh,useHostTransitionStatus:vd,useFormState:uh,useActionState:uh,useOptimistic:function(e,t){var n=Wt();return rh(n,gt,e,t)},useMemoCache:ud,useCacheRefresh:Ch},q0={readContext:wa,use:Ji,useCallback:wh,useContext:wa,useEffect:mh,useImperativeHandle:Eh,useInsertionEffect:yh,useLayoutEffect:bh,useMemo:xh,useReducer:fd,useRef:hh,useState:function(){return fd(qn)},useDebugValue:md,useDeferredValue:function(e,t){var n=Wt();return gt===null?yd(n,e,t):Sh(n,gt.memoizedState,e,t)},useTransition:function(){var e=fd(qn)[0],t=Wt().memoizedState;return[typeof e=="boolean"?e:So(e),t]},useSyncExternalStore:Qf,useId:Nh,useHostTransitionStatus:vd,useFormState:fh,useActionState:fh,useOptimistic:function(e,t){var n=Wt();return gt!==null?rh(n,gt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ud,useCacheRefresh:Ch},Ns=null,Do=0;function sl(e){var t=Do;return Do+=1,Ns===null&&(Ns=[]),Yf(Ns,e,t)}function No(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ol(e,t){throw t.$$typeof===b?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function kh(e){var t=e._init;return t(e._payload)}function Oh(e){function t(H,U){if(e){var G=H.deletions;G===null?(H.deletions=[U],H.flags|=16):G.push(U)}}function n(H,U){if(!e)return null;for(;U!==null;)t(H,U),U=U.sibling;return null}function i(H){for(var U=new Map;H!==null;)H.key!==null?U.set(H.key,H):U.set(H.index,H),H=H.sibling;return U}function d(H,U){return H=Ln(H,U),H.index=0,H.sibling=null,H}function h(H,U,G){return H.index=G,e?(G=H.alternate,G!==null?(G=G.index,G<U?(H.flags|=67108866,U):G):(H.flags|=67108866,U)):(H.flags|=1048576,U)}function E(H){return e&&H.alternate===null&&(H.flags|=67108866),H}function A(H,U,G,le){return U===null||U.tag!==6?(U=Uc(G,H.mode,le),U.return=H,U):(U=d(U,G),U.return=H,U)}function q(H,U,G,le){var Te=G.type;return Te===R?se(H,U,G.props.children,le,G.key):U!==null&&(U.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===P&&kh(Te)===U.type)?(U=d(U,G.props),No(U,G),U.return=H,U):(U=Bi(G.type,G.key,G.props,null,H.mode,le),No(U,G),U.return=H,U)}function W(H,U,G,le){return U===null||U.tag!==4||U.stateNode.containerInfo!==G.containerInfo||U.stateNode.implementation!==G.implementation?(U=Bc(G,H.mode,le),U.return=H,U):(U=d(U,G.children||[]),U.return=H,U)}function se(H,U,G,le,Te){return U===null||U.tag!==7?(U=qr(G,H.mode,le,Te),U.return=H,U):(U=d(U,G),U.return=H,U)}function ce(H,U,G){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return U=Uc(""+U,H.mode,G),U.return=H,U;if(typeof U=="object"&&U!==null){switch(U.$$typeof){case v:return G=Bi(U.type,U.key,U.props,null,H.mode,G),No(G,U),G.return=H,G;case w:return U=Bc(U,H.mode,G),U.return=H,U;case P:var le=U._init;return U=le(U._payload),ce(H,U,G)}if(ne(U)||ae(U))return U=qr(U,H.mode,G,null),U.return=H,U;if(typeof U.then=="function")return ce(H,sl(U),G);if(U.$$typeof===_)return ce(H,Vi(H,U),G);ol(H,U)}return null}function K(H,U,G,le){var Te=U!==null?U.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return Te!==null?null:A(H,U,""+G,le);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return G.key===Te?q(H,U,G,le):null;case w:return G.key===Te?W(H,U,G,le):null;case P:return Te=G._init,G=Te(G._payload),K(H,U,G,le)}if(ne(G)||ae(G))return Te!==null?null:se(H,U,G,le,null);if(typeof G.then=="function")return K(H,U,sl(G),le);if(G.$$typeof===_)return K(H,U,Vi(H,G),le);ol(H,G)}return null}function Q(H,U,G,le,Te){if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return H=H.get(G)||null,A(U,H,""+le,Te);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case v:return H=H.get(le.key===null?G:le.key)||null,q(U,H,le,Te);case w:return H=H.get(le.key===null?G:le.key)||null,W(U,H,le,Te);case P:var He=le._init;return le=He(le._payload),Q(H,U,G,le,Te)}if(ne(le)||ae(le))return H=H.get(G)||null,se(U,H,le,Te,null);if(typeof le.then=="function")return Q(H,U,G,sl(le),Te);if(le.$$typeof===_)return Q(H,U,G,Vi(U,le),Te);ol(U,le)}return null}function qe(H,U,G,le){for(var Te=null,He=null,De=U,Le=U=0,ia=null;De!==null&&Le<G.length;Le++){De.index>Le?(ia=De,De=null):ia=De.sibling;var nt=K(H,De,G[Le],le);if(nt===null){De===null&&(De=ia);break}e&&De&&nt.alternate===null&&t(H,De),U=h(nt,U,Le),He===null?Te=nt:He.sibling=nt,He=nt,De=ia}if(Le===G.length)return n(H,De),st&&$r(H,Le),Te;if(De===null){for(;Le<G.length;Le++)De=ce(H,G[Le],le),De!==null&&(U=h(De,U,Le),He===null?Te=De:He.sibling=De,He=De);return st&&$r(H,Le),Te}for(De=i(De);Le<G.length;Le++)ia=Q(De,H,Le,G[Le],le),ia!==null&&(e&&ia.alternate!==null&&De.delete(ia.key===null?Le:ia.key),U=h(ia,U,Le),He===null?Te=ia:He.sibling=ia,He=ia);return e&&De.forEach(function(Sr){return t(H,Sr)}),st&&$r(H,Le),Te}function _e(H,U,G,le){if(G==null)throw Error(o(151));for(var Te=null,He=null,De=U,Le=U=0,ia=null,nt=G.next();De!==null&&!nt.done;Le++,nt=G.next()){De.index>Le?(ia=De,De=null):ia=De.sibling;var Sr=K(H,De,nt.value,le);if(Sr===null){De===null&&(De=ia);break}e&&De&&Sr.alternate===null&&t(H,De),U=h(Sr,U,Le),He===null?Te=Sr:He.sibling=Sr,He=Sr,De=ia}if(nt.done)return n(H,De),st&&$r(H,Le),Te;if(De===null){for(;!nt.done;Le++,nt=G.next())nt=ce(H,nt.value,le),nt!==null&&(U=h(nt,U,Le),He===null?Te=nt:He.sibling=nt,He=nt);return st&&$r(H,Le),Te}for(De=i(De);!nt.done;Le++,nt=G.next())nt=Q(De,H,Le,nt.value,le),nt!==null&&(e&&nt.alternate!==null&&De.delete(nt.key===null?Le:nt.key),U=h(nt,U,Le),He===null?Te=nt:He.sibling=nt,He=nt);return e&&De.forEach(function(ME){return t(H,ME)}),st&&$r(H,Le),Te}function yt(H,U,G,le){if(typeof G=="object"&&G!==null&&G.type===R&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case v:e:{for(var Te=G.key;U!==null;){if(U.key===Te){if(Te=G.type,Te===R){if(U.tag===7){n(H,U.sibling),le=d(U,G.props.children),le.return=H,H=le;break e}}else if(U.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===P&&kh(Te)===U.type){n(H,U.sibling),le=d(U,G.props),No(le,G),le.return=H,H=le;break e}n(H,U);break}else t(H,U);U=U.sibling}G.type===R?(le=qr(G.props.children,H.mode,le,G.key),le.return=H,H=le):(le=Bi(G.type,G.key,G.props,null,H.mode,le),No(le,G),le.return=H,H=le)}return E(H);case w:e:{for(Te=G.key;U!==null;){if(U.key===Te)if(U.tag===4&&U.stateNode.containerInfo===G.containerInfo&&U.stateNode.implementation===G.implementation){n(H,U.sibling),le=d(U,G.children||[]),le.return=H,H=le;break e}else{n(H,U);break}else t(H,U);U=U.sibling}le=Bc(G,H.mode,le),le.return=H,H=le}return E(H);case P:return Te=G._init,G=Te(G._payload),yt(H,U,G,le)}if(ne(G))return qe(H,U,G,le);if(ae(G)){if(Te=ae(G),typeof Te!="function")throw Error(o(150));return G=Te.call(G),_e(H,U,G,le)}if(typeof G.then=="function")return yt(H,U,sl(G),le);if(G.$$typeof===_)return yt(H,U,Vi(H,G),le);ol(H,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,U!==null&&U.tag===6?(n(H,U.sibling),le=d(U,G),le.return=H,H=le):(n(H,U),le=Uc(G,H.mode,le),le.return=H,H=le),E(H)):n(H,U)}return function(H,U,G,le){try{Do=0;var Te=yt(H,U,G,le);return Ns=null,Te}catch(De){if(De===yo||De===Xi)throw De;var He=Fa(29,De,null,H.mode);return He.lanes=le,He.return=H,He}}}var Cs=Oh(!0),jh=Oh(!1),en=ee(null),mn=null;function lr(e){var t=e.alternate;V(Jt,Jt.current&1),V(en,e),mn===null&&(t===null||Ss.current!==null||t.memoizedState!==null)&&(mn=e)}function qh(e){if(e.tag===22){if(V(Jt,Jt.current),V(en,e),mn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(mn=e)}}else cr()}function cr(){V(Jt,Jt.current),V(en,en.current)}function Mn(e){B(en),mn===e&&(mn=null),B(Jt)}var Jt=ee(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||du(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function wd(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var xd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=Ya(),d=sr(i);d.payload=t,n!=null&&(d.callback=n),t=or(e,d,i),t!==null&&(Ha(t,e,i),vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=Ya(),d=sr(i);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=or(e,d,i),t!==null&&(Ha(t,e,i),vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ya(),i=sr(n);i.tag=2,t!=null&&(i.callback=t),t=or(e,i,n),t!==null&&(Ha(t,e,n),vo(t,e,n))}};function Mh(e,t,n,i,d,h,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,h,E):t.prototype&&t.prototype.isPureReactComponent?!lo(n,i)||!lo(d,h):!0}function $h(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&xd.enqueueReplaceState(t,t.state,null)}function Vr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=p({},n));for(var d in e)n[d]===void 0&&(n[d]=e[d])}return n}var ll=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Fh(e){ll(e)}function Uh(e){console.error(e)}function Bh(e){ll(e)}function cl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function zh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Sd(e,t,n){return n=sr(n),n.tag=3,n.payload={element:null},n.callback=function(){cl(e,t)},n}function Yh(e){return e=sr(e),e.tag=3,e}function Hh(e,t,n,i){var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var h=i.value;e.payload=function(){return d(h)},e.callback=function(){zh(t,n,i)}}var E=n.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){zh(t,n,i),typeof d!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})})}function M0(e,t,n,i,d){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ho(t,n,d,!0),n=en.current,n!==null){switch(n.tag){case 13:return mn===null?Gd():n.alternate===null&&$t===0&&($t=3),n.flags&=-257,n.flags|=65536,n.lanes=d,i===Qc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Wd(e,i,d)),!1;case 22:return n.flags|=65536,i===Qc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Wd(e,i,d)),!1}throw Error(o(435,n.tag))}return Wd(e,i,d),Gd(),!1}if(st)return t=en.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,i!==Hc&&(e=Error(o(422),{cause:i}),fo(Ka(e,n)))):(i!==Hc&&(t=Error(o(423),{cause:i}),fo(Ka(t,n))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,i=Ka(i,n),d=Sd(e.stateNode,i,d),td(e,d),$t!==4&&($t=2)),!1;var h=Error(o(520),{cause:i});if(h=Ka(h,n),ko===null?ko=[h]:ko.push(h),$t!==4&&($t=2),t===null)return!0;i=Ka(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=d&-d,n.lanes|=e,e=Sd(n.stateNode,i,e),td(n,e),!1;case 1:if(t=n.type,h=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(gr===null||!gr.has(h))))return n.flags|=65536,d&=-d,n.lanes|=d,d=Yh(d),Hh(d,e,n,i),td(n,d),!1}n=n.return}while(n!==null);return!1}var Vh=Error(o(461)),sa=!1;function ca(e,t,n,i){t.child=e===null?jh(t,null,n,i):Cs(t,e.child,n,i)}function Gh(e,t,n,i,d){n=n.render;var h=t.ref;if("ref"in i){var E={};for(var A in i)A!=="ref"&&(E[A]=i[A])}else E=i;return zr(t),i=od(e,t,n,E,h,d),A=id(),e!==null&&!sa?(ld(e,t,d),$n(e,t,d)):(st&&A&&zc(t),t.flags|=1,ca(e,t,i,d),t.child)}function Xh(e,t,n,i,d){if(e===null){var h=n.type;return typeof h=="function"&&!Fc(h)&&h.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=h,Wh(e,t,h,i,d)):(e=Bi(n.type,null,i,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!Id(e,d)){var E=h.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(E,i)&&e.ref===t.ref)return $n(e,t,d)}return t.flags|=1,e=Ln(h,i),e.ref=t.ref,e.return=t,t.child=e}function Wh(e,t,n,i,d){if(e!==null){var h=e.memoizedProps;if(lo(h,i)&&e.ref===t.ref)if(sa=!1,t.pendingProps=i=h,Id(e,d))(e.flags&131072)!==0&&(sa=!0);else return t.lanes=e.lanes,$n(e,t,d)}return Td(e,t,n,i,d)}function Kh(e,t,n){var i=t.pendingProps,d=i.children,h=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=h!==null?h.baseLanes|n:n,e!==null){for(d=t.child=e.child,h=0;d!==null;)h=h|d.lanes|d.childLanes,d=d.sibling;t.childLanes=h&~i}else t.childLanes=0,t.child=null;return Zh(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gi(t,h!==null?h.cachePool:null),h!==null?Wf(t,h):nd(),qh(t);else return t.lanes=t.childLanes=536870912,Zh(e,t,h!==null?h.baseLanes|n:n,n)}else h!==null?(Gi(t,h.cachePool),Wf(t,h),cr(),t.memoizedState=null):(e!==null&&Gi(t,null),nd(),cr());return ca(e,t,d,n),t.child}function Zh(e,t,n,i){var d=Zc();return d=d===null?null:{parent:Qt._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&Gi(t,null),nd(),qh(t),e!==null&&ho(e,t,i,!0),null}function dl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Td(e,t,n,i,d){return zr(t),n=od(e,t,n,i,void 0,d),i=id(),e!==null&&!sa?(ld(e,t,d),$n(e,t,d)):(st&&i&&zc(t),t.flags|=1,ca(e,t,n,d),t.child)}function Qh(e,t,n,i,d,h){return zr(t),t.updateQueue=null,n=Zf(t,i,n,d),Kf(e),i=id(),e!==null&&!sa?(ld(e,t,h),$n(e,t,h)):(st&&i&&zc(t),t.flags|=1,ca(e,t,n,h),t.child)}function Jh(e,t,n,i,d){if(zr(t),t.stateNode===null){var h=bs,E=n.contextType;typeof E=="object"&&E!==null&&(h=wa(E)),h=new n(i,h),t.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=xd,t.stateNode=h,h._reactInternals=t,h=t.stateNode,h.props=i,h.state=t.memoizedState,h.refs={},Jc(t),E=n.contextType,h.context=typeof E=="object"&&E!==null?wa(E):bs,h.state=t.memoizedState,E=n.getDerivedStateFromProps,typeof E=="function"&&(wd(t,n,E,i),h.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&xd.enqueueReplaceState(h,h.state,null),wo(t,i,h,d),Eo(),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){h=t.stateNode;var A=t.memoizedProps,q=Vr(n,A);h.props=q;var W=h.context,se=n.contextType;E=bs,typeof se=="object"&&se!==null&&(E=wa(se));var ce=n.getDerivedStateFromProps;se=typeof ce=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=t.pendingProps!==A,se||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||W!==E)&&$h(t,h,i,E),rr=!1;var K=t.memoizedState;h.state=K,wo(t,i,h,d),Eo(),W=t.memoizedState,A||K!==W||rr?(typeof ce=="function"&&(wd(t,n,ce,i),W=t.memoizedState),(q=rr||Mh(t,n,q,i,K,W,E))?(se||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=W),h.props=i,h.state=W,h.context=E,i=q):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{h=t.stateNode,ed(e,t),E=t.memoizedProps,se=Vr(n,E),h.props=se,ce=t.pendingProps,K=h.context,W=n.contextType,q=bs,typeof W=="object"&&W!==null&&(q=wa(W)),A=n.getDerivedStateFromProps,(W=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==ce||K!==q)&&$h(t,h,i,q),rr=!1,K=t.memoizedState,h.state=K,wo(t,i,h,d),Eo();var Q=t.memoizedState;E!==ce||K!==Q||rr||e!==null&&e.dependencies!==null&&Hi(e.dependencies)?(typeof A=="function"&&(wd(t,n,A,i),Q=t.memoizedState),(se=rr||Mh(t,n,se,i,K,Q,q)||e!==null&&e.dependencies!==null&&Hi(e.dependencies))?(W||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(i,Q,q),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(i,Q,q)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Q),h.props=i,h.state=Q,h.context=q,i=se):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),i=!1)}return h=i,dl(e,t),i=(t.flags&128)!==0,h||i?(h=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:h.render(),t.flags|=1,e!==null&&i?(t.child=Cs(t,e.child,null,d),t.child=Cs(t,null,n,d)):ca(e,t,n,d),t.memoizedState=h.state,e=t.child):e=$n(e,t,d),e}function eg(e,t,n,i){return po(),t.flags|=256,ca(e,t,n,i),t.child}var Ad={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Dd(e){return{baseLanes:e,cachePool:Uf()}}function Nd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=tn),e}function tg(e,t,n){var i=t.pendingProps,d=!1,h=(t.flags&128)!==0,E;if((E=h)||(E=e!==null&&e.memoizedState===null?!1:(Jt.current&2)!==0),E&&(d=!0,t.flags&=-129),E=(t.flags&32)!==0,t.flags&=-33,e===null){if(st){if(d?lr(t):cr(),st){var A=Mt,q;if(q=A){e:{for(q=A,A=gn;q.nodeType!==8;){if(!A){A=null;break e}if(q=cn(q.nextSibling),q===null){A=null;break e}}A=q}A!==null?(t.memoizedState={dehydrated:A,treeContext:Mr!==null?{id:Pn,overflow:kn}:null,retryLane:536870912,hydrationErrors:null},q=Fa(18,null,null,0),q.stateNode=A,q.return=t,t.child=q,Aa=t,Mt=null,q=!0):q=!1}q||Ur(t)}if(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return du(A)?t.lanes=32:t.lanes=536870912,null;Mn(t)}return A=i.children,i=i.fallback,d?(cr(),d=t.mode,A=ul({mode:"hidden",children:A},d),i=qr(i,d,n,null),A.return=t,i.return=t,A.sibling=i,t.child=A,d=t.child,d.memoizedState=Dd(n),d.childLanes=Nd(e,E,n),t.memoizedState=Ad,i):(lr(t),Cd(t,A))}if(q=e.memoizedState,q!==null&&(A=q.dehydrated,A!==null)){if(h)t.flags&256?(lr(t),t.flags&=-257,t=Rd(e,t,n)):t.memoizedState!==null?(cr(),t.child=e.child,t.flags|=128,t=null):(cr(),d=i.fallback,A=t.mode,i=ul({mode:"visible",children:i.children},A),d=qr(d,A,n,null),d.flags|=2,i.return=t,d.return=t,i.sibling=d,t.child=i,Cs(t,e.child,null,n),i=t.child,i.memoizedState=Dd(n),i.childLanes=Nd(e,E,n),t.memoizedState=Ad,t=d);else if(lr(t),du(A)){if(E=A.nextSibling&&A.nextSibling.dataset,E)var W=E.dgst;E=W,i=Error(o(419)),i.stack="",i.digest=E,fo({value:i,source:null,stack:null}),t=Rd(e,t,n)}else if(sa||ho(e,t,n,!1),E=(n&e.childLanes)!==0,sa||E){if(E=St,E!==null&&(i=n&-n,i=(i&42)!==0?1:Cn(i),i=(i&(E.suspendedLanes|n))!==0?0:i,i!==0&&i!==q.retryLane))throw q.retryLane=i,ys(e,i),Ha(E,e,i),Vh;A.data==="$?"||Gd(),t=Rd(e,t,n)}else A.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=q.treeContext,Mt=cn(A.nextSibling),Aa=t,st=!0,Fr=null,gn=!1,e!==null&&(Qa[Ja++]=Pn,Qa[Ja++]=kn,Qa[Ja++]=Mr,Pn=e.id,kn=e.overflow,Mr=t),t=Cd(t,i.children),t.flags|=4096);return t}return d?(cr(),d=i.fallback,A=t.mode,q=e.child,W=q.sibling,i=Ln(q,{mode:"hidden",children:i.children}),i.subtreeFlags=q.subtreeFlags&65011712,W!==null?d=Ln(W,d):(d=qr(d,A,n,null),d.flags|=2),d.return=t,i.return=t,i.sibling=d,t.child=i,i=d,d=t.child,A=e.child.memoizedState,A===null?A=Dd(n):(q=A.cachePool,q!==null?(W=Qt._currentValue,q=q.parent!==W?{parent:W,pool:W}:q):q=Uf(),A={baseLanes:A.baseLanes|n,cachePool:q}),d.memoizedState=A,d.childLanes=Nd(e,E,n),t.memoizedState=Ad,i):(lr(t),n=e.child,e=n.sibling,n=Ln(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(E=t.deletions,E===null?(t.deletions=[e],t.flags|=16):E.push(e)),t.child=n,t.memoizedState=null,n)}function Cd(e,t){return t=ul({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ul(e,t){return e=Fa(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rd(e,t,n){return Cs(t,e.child,null,n),e=Cd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ag(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Gc(e.return,t,n)}function _d(e,t,n,i,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:d}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=n,h.tailMode=d)}function ng(e,t,n){var i=t.pendingProps,d=i.revealOrder,h=i.tail;if(ca(e,t,i.children,n),i=Jt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,n,t);else if(e.tag===19)ag(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(V(Jt,i),d){case"forwards":for(n=t.child,d=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(d=n),n=n.sibling;n=d,n===null?(d=t.child,t.child=null):(d=n.sibling,n.sibling=null),_d(t,!1,d,n,h);break;case"backwards":for(n=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&il(e)===null){t.child=d;break}e=d.sibling,d.sibling=n,n=d,d=e}_d(t,!0,n,null,h);break;case"together":_d(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function $n(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ho(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Ln(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ln(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Id(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Hi(e)))}function $0(e,t,n){switch(t.tag){case 3:ke(t,t.stateNode.containerInfo),nr(t,Qt,e.memoizedState.cache),po();break;case 27:case 5:rt(t);break;case 4:ke(t,t.stateNode.containerInfo);break;case 10:nr(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(lr(t),t.flags|=128,null):(n&t.child.childLanes)!==0?tg(e,t,n):(lr(t),e=$n(e,t,n),e!==null?e.sibling:null);lr(t);break;case 19:var d=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ho(e,t,n,!1),i=(n&t.childLanes)!==0),d){if(i)return ng(e,t,n);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),V(Jt,Jt.current),i)break;return null;case 22:case 23:return t.lanes=0,Kh(e,t,n);case 24:nr(t,Qt,e.memoizedState.cache)}return $n(e,t,n)}function rg(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)sa=!0;else{if(!Id(e,n)&&(t.flags&128)===0)return sa=!1,$0(e,t,n);sa=(e.flags&131072)!==0}else sa=!1,st&&(t.flags&1048576)!==0&&kf(t,Yi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,d=i._init;if(i=d(i._payload),t.type=i,typeof i=="function")Fc(i)?(e=Vr(i,e),t.tag=1,t=Jh(null,t,i,e,n)):(t.tag=0,t=Td(null,t,i,e,n));else{if(i!=null){if(d=i.$$typeof,d===N){t.tag=11,t=Gh(null,t,i,e,n);break e}else if(d===C){t.tag=14,t=Xh(null,t,i,e,n);break e}}throw t=oe(i)||i,Error(o(306,t,""))}}return t;case 0:return Td(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,d=Vr(i,t.pendingProps),Jh(e,t,i,d,n);case 3:e:{if(ke(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var h=t.memoizedState;d=h.element,ed(e,t),wo(t,i,null,n);var E=t.memoizedState;if(i=E.cache,nr(t,Qt,i),i!==h.cache&&Xc(t,[Qt],n,!0),Eo(),i=E.element,h.isDehydrated)if(h={element:i,isDehydrated:!1,cache:E.cache},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){t=eg(e,t,i,n);break e}else if(i!==d){d=Ka(Error(o(424)),t),fo(d),t=eg(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Mt=cn(e.firstChild),Aa=t,st=!0,Fr=null,gn=!0,n=jh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),i===d){t=$n(e,t,n);break e}ca(e,t,i,n)}t=t.child}return t;case 26:return dl(e,t),e===null?(n=lm(t.type,null,t.pendingProps,null))?t.memoizedState=n:st||(n=t.type,e=t.pendingProps,i=Al(ve.current).createElement(n),i[Ot]=t,i[jt]=e,ua(i,n,e),Se(i),t.stateNode=i):t.memoizedState=lm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return rt(t),e===null&&st&&(i=t.stateNode=sm(t.type,t.pendingProps,ve.current),Aa=t,gn=!0,d=Mt,br(t.type)?(uu=d,Mt=cn(i.firstChild)):Mt=d),ca(e,t,t.pendingProps.children,n),dl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&st&&((d=i=Mt)&&(i=fE(i,t.type,t.pendingProps,gn),i!==null?(t.stateNode=i,Aa=t,Mt=cn(i.firstChild),gn=!1,d=!0):d=!1),d||Ur(t)),rt(t),d=t.type,h=t.pendingProps,E=e!==null?e.memoizedProps:null,i=h.children,iu(d,h)?i=null:E!==null&&iu(d,E)&&(t.flags|=32),t.memoizedState!==null&&(d=od(e,t,I0,null,null,n),zo._currentValue=d),dl(e,t),ca(e,t,i,n),t.child;case 6:return e===null&&st&&((e=n=Mt)&&(n=hE(n,t.pendingProps,gn),n!==null?(t.stateNode=n,Aa=t,Mt=null,e=!0):e=!1),e||Ur(t)),null;case 13:return tg(e,t,n);case 4:return ke(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Cs(t,null,i,n):ca(e,t,i,n),t.child;case 11:return Gh(e,t,t.type,t.pendingProps,n);case 7:return ca(e,t,t.pendingProps,n),t.child;case 8:return ca(e,t,t.pendingProps.children,n),t.child;case 12:return ca(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,nr(t,t.type,i.value),ca(e,t,i.children,n),t.child;case 9:return d=t.type._context,i=t.pendingProps.children,zr(t),d=wa(d),i=i(d),t.flags|=1,ca(e,t,i,n),t.child;case 14:return Xh(e,t,t.type,t.pendingProps,n);case 15:return Wh(e,t,t.type,t.pendingProps,n);case 19:return ng(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=ul(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Ln(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Kh(e,t,n);case 24:return zr(t),i=wa(Qt),e===null?(d=Zc(),d===null&&(d=St,h=Wc(),d.pooledCache=h,h.refCount++,h!==null&&(d.pooledCacheLanes|=n),d=h),t.memoizedState={parent:i,cache:d},Jc(t),nr(t,Qt,d)):((e.lanes&n)!==0&&(ed(e,t),wo(t,null,null,n),Eo()),d=e.memoizedState,h=t.memoizedState,d.parent!==i?(d={parent:i,cache:i},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),nr(t,Qt,i)):(i=h.cache,nr(t,Qt,i),i!==d.cache&&Xc(t,[Qt],n,!0))),ca(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Fn(e){e.flags|=4}function sg(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!fm(t)){if(t=en.current,t!==null&&((Je&4194048)===Je?mn!==null:(Je&62914560)!==Je&&(Je&536870912)===0||t!==mn))throw bo=Qc,Bf;e.flags|=8192}}function pl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gt():536870912,e.lanes|=t,Ls|=t)}function Co(e,t){if(!st)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function qt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var d=e.child;d!==null;)n|=d.lanes|d.childLanes,i|=d.subtreeFlags&65011712,i|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)n|=d.lanes|d.childLanes,i|=d.subtreeFlags,i|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function F0(e,t,n){var i=t.pendingProps;switch(Yc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(t),null;case 1:return qt(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),jn(Qt),bt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(uo(t)?Fn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,qf())),qt(t),null;case 26:return n=t.memoizedState,e===null?(Fn(t),n!==null?(qt(t),sg(t,n)):(qt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Fn(t),qt(t),sg(t,n)):(qt(t),t.flags&=-16777217):(e.memoizedProps!==i&&Fn(t),qt(t),t.flags&=-16777217),null;case 27:dt(t),n=ve.current;var d=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Fn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return qt(t),null}e=ie.current,uo(t)?Of(t):(e=sm(d,i,n),t.stateNode=e,Fn(t))}return qt(t),null;case 5:if(dt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Fn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return qt(t),null}if(e=ie.current,uo(t))Of(t);else{switch(d=Al(ve.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?d.createElement(n,{is:i.is}):d.createElement(n)}}e[Ot]=t,e[jt]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=e;e:switch(ua(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Fn(t)}}return qt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Fn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ve.current,uo(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,d=Aa,d!==null)switch(d.tag){case 27:case 5:i=d.memoizedProps}e[Ot]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Qg(e.nodeValue,n)),e||Ur(t)}else e=Al(e).createTextNode(i),e[Ot]=t,t.stateNode=e}return qt(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=uo(t),i!==null&&i.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Ot]=t}else po(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qt(t),d=!1}else d=qf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(Mn(t),t):(Mn(t),null)}if(Mn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,d=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(d=i.alternate.memoizedState.cachePool.pool);var h=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(h=i.memoizedState.cachePool.pool),h!==d&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),pl(t,t.updateQueue),qt(t),null;case 4:return bt(),e===null&&au(t.stateNode.containerInfo),qt(t),null;case 10:return jn(t.type),qt(t),null;case 19:if(B(Jt),d=t.memoizedState,d===null)return qt(t),null;if(i=(t.flags&128)!==0,h=d.rendering,h===null)if(i)Co(d,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=il(e),h!==null){for(t.flags|=128,Co(d,!1),e=h.updateQueue,t.updateQueue=e,pl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Pf(n,e),n=n.sibling;return V(Jt,Jt.current&1|2),t.child}e=e.sibling}d.tail!==null&&he()>gl&&(t.flags|=128,i=!0,Co(d,!1),t.lanes=4194304)}else{if(!i)if(e=il(h),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,pl(t,e),Co(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!st)return qt(t),null}else 2*he()-d.renderingStartTime>gl&&n!==536870912&&(t.flags|=128,i=!0,Co(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(e=d.last,e!==null?e.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=he(),t.sibling=null,e=Jt.current,V(Jt,i?e&1|2:e&1),t):(qt(t),null);case 22:case 23:return Mn(t),rd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(qt(t),t.subtreeFlags&6&&(t.flags|=8192)):qt(t),n=t.updateQueue,n!==null&&pl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&B(Yr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),jn(Qt),qt(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function U0(e,t){switch(Yc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return jn(Qt),bt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return dt(t),null;case 13:if(Mn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));po()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Jt),null;case 4:return bt(),null;case 10:return jn(t.type),null;case 22:case 23:return Mn(t),rd(),e!==null&&B(Yr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return jn(Qt),null;case 25:return null;default:return null}}function og(e,t){switch(Yc(t),t.tag){case 3:jn(Qt),bt();break;case 26:case 27:case 5:dt(t);break;case 4:bt();break;case 13:Mn(t);break;case 19:B(Jt);break;case 10:jn(t.type);break;case 22:case 23:Mn(t),rd(),e!==null&&B(Yr);break;case 24:jn(Qt)}}function Ro(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var d=i.next;n=d;do{if((n.tag&e)===e){i=void 0;var h=n.create,E=n.inst;i=h(),E.destroy=i}n=n.next}while(n!==d)}}catch(A){Et(t,t.return,A)}}function dr(e,t,n){try{var i=t.updateQueue,d=i!==null?i.lastEffect:null;if(d!==null){var h=d.next;i=h;do{if((i.tag&e)===e){var E=i.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,d=t;var q=n,W=A;try{W()}catch(se){Et(d,q,se)}}}i=i.next}while(i!==h)}}catch(se){Et(t,t.return,se)}}function ig(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xf(t,n)}catch(i){Et(e,e.return,i)}}}function lg(e,t,n){n.props=Vr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){Et(e,t,i)}}function _o(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(d){Et(e,t,d)}}function yn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(d){Et(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(d){Et(e,t,d)}else n.current=null}function cg(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(d){Et(e,e.return,d)}}function Ld(e,t,n){try{var i=e.stateNode;lE(i,e.type,n,t),i[jt]=t}catch(d){Et(e,e.return,d)}}function dg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&br(e.type)||e.tag===4}function Pd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&br(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Tl));else if(i!==4&&(i===27&&br(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(kd(e,t,n),e=e.sibling;e!==null;)kd(e,t,n),e=e.sibling}function fl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&br(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}function ug(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);ua(t,i,n),t[Ot]=e,t[jt]=n}catch(h){Et(e,e.return,h)}}var Un=!1,Yt=!1,Od=!1,pg=typeof WeakSet=="function"?WeakSet:Set,oa=null;function B0(e,t){if(e=e.containerInfo,su=Il,e=Sf(e),Pc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var d=i.anchorOffset,h=i.focusNode;i=i.focusOffset;try{n.nodeType,h.nodeType}catch{n=null;break e}var E=0,A=-1,q=-1,W=0,se=0,ce=e,K=null;t:for(;;){for(var Q;ce!==n||d!==0&&ce.nodeType!==3||(A=E+d),ce!==h||i!==0&&ce.nodeType!==3||(q=E+i),ce.nodeType===3&&(E+=ce.nodeValue.length),(Q=ce.firstChild)!==null;)K=ce,ce=Q;for(;;){if(ce===e)break t;if(K===n&&++W===d&&(A=E),K===h&&++se===i&&(q=E),(Q=ce.nextSibling)!==null)break;ce=K,K=ce.parentNode}ce=Q}n=A===-1||q===-1?null:{start:A,end:q}}else n=null}n=n||{start:0,end:0}}else n=null;for(ou={focusedElem:e,selectionRange:n},Il=!1,oa=t;oa!==null;)if(t=oa,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,oa=e;else for(;oa!==null;){switch(t=oa,h=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,n=t,d=h.memoizedProps,h=h.memoizedState,i=n.stateNode;try{var qe=Vr(n.type,d,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(qe,h),i.__reactInternalSnapshotBeforeUpdate=e}catch(_e){Et(n,n.return,_e)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)cu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,oa=e;break}oa=t.return}}function fg(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ur(e,n),i&4&&Ro(5,n);break;case 1:if(ur(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(E){Et(n,n.return,E)}else{var d=Vr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Et(n,n.return,E)}}i&64&&ig(n),i&512&&_o(n,n.return);break;case 3:if(ur(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xf(e,t)}catch(E){Et(n,n.return,E)}}break;case 27:t===null&&i&4&&ug(n);case 26:case 5:ur(e,n),t===null&&i&4&&cg(n),i&512&&_o(n,n.return);break;case 12:ur(e,n);break;case 13:ur(e,n),i&4&&mg(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Z0.bind(null,n),gE(e,n))));break;case 22:if(i=n.memoizedState!==null||Un,!i){t=t!==null&&t.memoizedState!==null||Yt,d=Un;var h=Yt;Un=i,(Yt=t)&&!h?pr(e,n,(n.subtreeFlags&8772)!==0):ur(e,n),Un=d,Yt=h}break;case 30:break;default:ur(e,n)}}function hg(e){var t=e.alternate;t!==null&&(e.alternate=null,hg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&We(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Lt=null,La=!1;function Bn(e,t,n){for(n=n.child;n!==null;)gg(e,t,n),n=n.sibling}function gg(e,t,n){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(ya,n)}catch{}switch(n.tag){case 26:Yt||yn(n,t),Bn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Yt||yn(n,t);var i=Lt,d=La;br(n.type)&&(Lt=n.stateNode,La=!1),Bn(e,t,n),$o(n.stateNode),Lt=i,La=d;break;case 5:Yt||yn(n,t);case 6:if(i=Lt,d=La,Lt=null,Bn(e,t,n),Lt=i,La=d,Lt!==null)if(La)try{(Lt.nodeType===9?Lt.body:Lt.nodeName==="HTML"?Lt.ownerDocument.body:Lt).removeChild(n.stateNode)}catch(h){Et(n,t,h)}else try{Lt.removeChild(n.stateNode)}catch(h){Et(n,t,h)}break;case 18:Lt!==null&&(La?(e=Lt,nm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Go(e)):nm(Lt,n.stateNode));break;case 4:i=Lt,d=La,Lt=n.stateNode.containerInfo,La=!0,Bn(e,t,n),Lt=i,La=d;break;case 0:case 11:case 14:case 15:Yt||dr(2,n,t),Yt||dr(4,n,t),Bn(e,t,n);break;case 1:Yt||(yn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&lg(n,t,i)),Bn(e,t,n);break;case 21:Bn(e,t,n);break;case 22:Yt=(i=Yt)||n.memoizedState!==null,Bn(e,t,n),Yt=i;break;default:Bn(e,t,n)}}function mg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Go(e)}catch(n){Et(t,t.return,n)}}function z0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pg),t;default:throw Error(o(435,e.tag))}}function jd(e,t){var n=z0(e);t.forEach(function(i){var d=Q0.bind(null,e,i);n.has(i)||(n.add(i),i.then(d,d))})}function Ua(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var d=n[i],h=e,E=t,A=E;e:for(;A!==null;){switch(A.tag){case 27:if(br(A.type)){Lt=A.stateNode,La=!1;break e}break;case 5:Lt=A.stateNode,La=!1;break e;case 3:case 4:Lt=A.stateNode.containerInfo,La=!0;break e}A=A.return}if(Lt===null)throw Error(o(160));gg(h,E,d),Lt=null,La=!1,h=d.alternate,h!==null&&(h.return=null),d.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)yg(t,e),t=t.sibling}var ln=null;function yg(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ua(t,e),Ba(e),i&4&&(dr(3,e,e.return),Ro(3,e),dr(5,e,e.return));break;case 1:Ua(t,e),Ba(e),i&512&&(Yt||n===null||yn(n,n.return)),i&64&&Un&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var d=ln;if(Ua(t,e),Ba(e),i&512&&(Yt||n===null||yn(n,n.return)),i&4){var h=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,d=d.ownerDocument||d;t:switch(i){case"title":h=d.getElementsByTagName("title")[0],(!h||h[je]||h[Ot]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=d.createElement(i),d.head.insertBefore(h,d.querySelector("head > title"))),ua(h,i,n),h[Ot]=e,Se(h),i=h;break e;case"link":var E=um("link","href",d).get(i+(n.href||""));if(E){for(var A=0;A<E.length;A++)if(h=E[A],h.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&h.getAttribute("rel")===(n.rel==null?null:n.rel)&&h.getAttribute("title")===(n.title==null?null:n.title)&&h.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){E.splice(A,1);break t}}h=d.createElement(i),ua(h,i,n),d.head.appendChild(h);break;case"meta":if(E=um("meta","content",d).get(i+(n.content||""))){for(A=0;A<E.length;A++)if(h=E[A],h.getAttribute("content")===(n.content==null?null:""+n.content)&&h.getAttribute("name")===(n.name==null?null:n.name)&&h.getAttribute("property")===(n.property==null?null:n.property)&&h.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&h.getAttribute("charset")===(n.charSet==null?null:n.charSet)){E.splice(A,1);break t}}h=d.createElement(i),ua(h,i,n),d.head.appendChild(h);break;default:throw Error(o(468,i))}h[Ot]=e,Se(h),i=h}e.stateNode=i}else pm(d,e.type,e.stateNode);else e.stateNode=dm(d,i,e.memoizedProps);else h!==i?(h===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):h.count--,i===null?pm(d,e.type,e.stateNode):dm(d,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Ld(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ua(t,e),Ba(e),i&512&&(Yt||n===null||yn(n,n.return)),n!==null&&i&4&&Ld(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ua(t,e),Ba(e),i&512&&(Yt||n===null||yn(n,n.return)),e.flags&32){d=e.stateNode;try{ds(d,"")}catch(Q){Et(e,e.return,Q)}}i&4&&e.stateNode!=null&&(d=e.memoizedProps,Ld(e,d,n!==null?n.memoizedProps:d)),i&1024&&(Od=!0);break;case 6:if(Ua(t,e),Ba(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(Q){Et(e,e.return,Q)}}break;case 3:if(Cl=null,d=ln,ln=Dl(t.containerInfo),Ua(t,e),ln=d,Ba(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Go(t.containerInfo)}catch(Q){Et(e,e.return,Q)}Od&&(Od=!1,bg(e));break;case 4:i=ln,ln=Dl(e.stateNode.containerInfo),Ua(t,e),Ba(e),ln=i;break;case 12:Ua(t,e),Ba(e);break;case 13:Ua(t,e),Ba(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Bd=he()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,jd(e,i)));break;case 22:d=e.memoizedState!==null;var q=n!==null&&n.memoizedState!==null,W=Un,se=Yt;if(Un=W||d,Yt=se||q,Ua(t,e),Yt=se,Un=W,Ba(e),i&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(n===null||q||Un||Yt||Gr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){q=n=t;try{if(h=q.stateNode,d)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{A=q.stateNode;var ce=q.memoizedProps.style,K=ce!=null&&ce.hasOwnProperty("display")?ce.display:null;A.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(Q){Et(q,q.return,Q)}}}else if(t.tag===6){if(n===null){q=t;try{q.stateNode.nodeValue=d?"":q.memoizedProps}catch(Q){Et(q,q.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,jd(e,n))));break;case 19:Ua(t,e),Ba(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,jd(e,i)));break;case 30:break;case 21:break;default:Ua(t,e),Ba(e)}}function Ba(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(dg(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var d=n.stateNode,h=Pd(e);fl(e,h,d);break;case 5:var E=n.stateNode;n.flags&32&&(ds(E,""),n.flags&=-33);var A=Pd(e);fl(e,A,E);break;case 3:case 4:var q=n.stateNode.containerInfo,W=Pd(e);kd(e,W,q);break;default:throw Error(o(161))}}catch(se){Et(e,e.return,se)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ur(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)fg(e,t.alternate,t),t=t.sibling}function Gr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:dr(4,t,t.return),Gr(t);break;case 1:yn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&lg(t,t.return,n),Gr(t);break;case 27:$o(t.stateNode);case 26:case 5:yn(t,t.return),Gr(t);break;case 22:t.memoizedState===null&&Gr(t);break;case 30:Gr(t);break;default:Gr(t)}e=e.sibling}}function pr(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,d=e,h=t,E=h.flags;switch(h.tag){case 0:case 11:case 15:pr(d,h,n),Ro(4,h);break;case 1:if(pr(d,h,n),i=h,d=i.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(W){Et(i,i.return,W)}if(i=h,d=i.updateQueue,d!==null){var A=i.stateNode;try{var q=d.shared.hiddenCallbacks;if(q!==null)for(d.shared.hiddenCallbacks=null,d=0;d<q.length;d++)Gf(q[d],A)}catch(W){Et(i,i.return,W)}}n&&E&64&&ig(h),_o(h,h.return);break;case 27:ug(h);case 26:case 5:pr(d,h,n),n&&i===null&&E&4&&cg(h),_o(h,h.return);break;case 12:pr(d,h,n);break;case 13:pr(d,h,n),n&&E&4&&mg(d,h);break;case 22:h.memoizedState===null&&pr(d,h,n),_o(h,h.return);break;case 30:break;default:pr(d,h,n)}t=t.sibling}}function qd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&go(n))}function Md(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&go(e))}function bn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vg(e,t,n,i),t=t.sibling}function vg(e,t,n,i){var d=t.flags;switch(t.tag){case 0:case 11:case 15:bn(e,t,n,i),d&2048&&Ro(9,t);break;case 1:bn(e,t,n,i);break;case 3:bn(e,t,n,i),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&go(e)));break;case 12:if(d&2048){bn(e,t,n,i),e=t.stateNode;try{var h=t.memoizedProps,E=h.id,A=h.onPostCommit;typeof A=="function"&&A(E,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(q){Et(t,t.return,q)}}else bn(e,t,n,i);break;case 13:bn(e,t,n,i);break;case 23:break;case 22:h=t.stateNode,E=t.alternate,t.memoizedState!==null?h._visibility&2?bn(e,t,n,i):Io(e,t):h._visibility&2?bn(e,t,n,i):(h._visibility|=2,Rs(e,t,n,i,(t.subtreeFlags&10256)!==0)),d&2048&&qd(E,t);break;case 24:bn(e,t,n,i),d&2048&&Md(t.alternate,t);break;default:bn(e,t,n,i)}}function Rs(e,t,n,i,d){for(d=d&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var h=e,E=t,A=n,q=i,W=E.flags;switch(E.tag){case 0:case 11:case 15:Rs(h,E,A,q,d),Ro(8,E);break;case 23:break;case 22:var se=E.stateNode;E.memoizedState!==null?se._visibility&2?Rs(h,E,A,q,d):Io(h,E):(se._visibility|=2,Rs(h,E,A,q,d)),d&&W&2048&&qd(E.alternate,E);break;case 24:Rs(h,E,A,q,d),d&&W&2048&&Md(E.alternate,E);break;default:Rs(h,E,A,q,d)}t=t.sibling}}function Io(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,d=i.flags;switch(i.tag){case 22:Io(n,i),d&2048&&qd(i.alternate,i);break;case 24:Io(n,i),d&2048&&Md(i.alternate,i);break;default:Io(n,i)}t=t.sibling}}var Lo=8192;function _s(e){if(e.subtreeFlags&Lo)for(e=e.child;e!==null;)Eg(e),e=e.sibling}function Eg(e){switch(e.tag){case 26:_s(e),e.flags&Lo&&e.memoizedState!==null&&CE(ln,e.memoizedState,e.memoizedProps);break;case 5:_s(e);break;case 3:case 4:var t=ln;ln=Dl(e.stateNode.containerInfo),_s(e),ln=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Lo,Lo=16777216,_s(e),Lo=t):_s(e));break;default:_s(e)}}function wg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Po(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];oa=i,Sg(i,e)}wg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xg(e),e=e.sibling}function xg(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&dr(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,hl(e)):Po(e);break;default:Po(e)}}function hl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];oa=i,Sg(i,e)}wg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:dr(8,t,t.return),hl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,hl(t));break;default:hl(t)}e=e.sibling}}function Sg(e,t){for(;oa!==null;){var n=oa;switch(n.tag){case 0:case 11:case 15:dr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:go(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,oa=i;else e:for(n=e;oa!==null;){i=oa;var d=i.sibling,h=i.return;if(hg(i),i===n){oa=null;break e}if(d!==null){d.return=h,oa=d;break e}oa=h}}}var Y0={getCacheForType:function(e){var t=wa(Qt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},H0=typeof WeakMap=="function"?WeakMap:Map,ut=0,St=null,Ge=null,Je=0,pt=0,za=null,fr=!1,Is=!1,$d=!1,zn=0,$t=0,hr=0,Xr=0,Fd=0,tn=0,Ls=0,ko=null,Pa=null,Ud=!1,Bd=0,gl=1/0,ml=null,gr=null,da=0,mr=null,Ps=null,ks=0,zd=0,Yd=null,Tg=null,Oo=0,Hd=null;function Ya(){if((ut&2)!==0&&Je!==0)return Je&-Je;if(Y.T!==null){var e=ws;return e!==0?e:Qd()}return Rn()}function Ag(){tn===0&&(tn=(Je&536870912)===0||st?ja():536870912);var e=en.current;return e!==null&&(e.flags|=32),tn}function Ha(e,t,n){(e===St&&(pt===2||pt===9)||e.cancelPendingCommit!==null)&&(Os(e,0),yr(e,Je,tn,!1)),_t(e,n),((ut&2)===0||e!==St)&&(e===St&&((ut&2)===0&&(Xr|=n),$t===4&&yr(e,Je,tn,!1)),vn(e))}function Dg(e,t,n){if((ut&6)!==0)throw Error(o(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||ba(e,t),d=i?X0(e,t):Xd(e,t,!0),h=i;do{if(d===0){Is&&!i&&yr(e,t,0,!1);break}else{if(n=e.current.alternate,h&&!V0(n)){d=Xd(e,t,!1),h=!1;continue}if(d===2){if(h=t,e.errorRecoveryDisabledLanes&h)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){t=E;e:{var A=e;d=ko;var q=A.current.memoizedState.isDehydrated;if(q&&(Os(A,E).flags|=256),E=Xd(A,E,!1),E!==2){if($d&&!q){A.errorRecoveryDisabledLanes|=h,Xr|=h,d=4;break e}h=Pa,Pa=d,h!==null&&(Pa===null?Pa=h:Pa.push.apply(Pa,h))}d=E}if(h=!1,d!==2)continue}}if(d===1){Os(e,0),yr(e,t,0,!0);break}e:{switch(i=e,h=d,h){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:yr(i,t,tn,!fr);break e;case 2:Pa=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(d=Bd+300-he(),10<d)){if(yr(i,t,tn,!fr),at(i,0,!0)!==0)break e;i.timeoutHandle=tm(Ng.bind(null,i,n,Pa,ml,Ud,t,tn,Xr,Ls,fr,h,2,-0,0),d);break e}Ng(i,n,Pa,ml,Ud,t,tn,Xr,Ls,fr,h,0,-0,0)}}break}while(!0);vn(e)}function Ng(e,t,n,i,d,h,E,A,q,W,se,ce,K,Q){if(e.timeoutHandle=-1,ce=t.subtreeFlags,(ce&8192||(ce&16785408)===16785408)&&(Bo={stylesheets:null,count:0,unsuspend:NE},Eg(t),ce=RE(),ce!==null)){e.cancelPendingCommit=ce(kg.bind(null,e,t,h,n,i,d,E,A,q,se,1,K,Q)),yr(e,h,E,!W);return}kg(e,t,h,n,i,d,E,A,q)}function V0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var d=n[i],h=d.getSnapshot;d=d.value;try{if(!$a(h(),d))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yr(e,t,n,i){t&=~Fd,t&=~Xr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var d=t;0<d;){var h=31-Re(d),E=1<<h;i[h]=-1,d&=~E}n!==0&&rn(e,n,t)}function yl(){return(ut&6)===0?(jo(0),!1):!0}function Vd(){if(Ge!==null){if(pt===0)var e=Ge.return;else e=Ge,On=Br=null,cd(e),Ns=null,Do=0,e=Ge;for(;e!==null;)og(e.alternate,e),e=e.return;Ge=null}}function Os(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,dE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Vd(),St=e,Ge=n=Ln(e.current,null),Je=t,pt=0,za=null,fr=!1,Is=ba(e,t),$d=!1,Ls=tn=Fd=Xr=hr=$t=0,Pa=ko=null,Ud=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var d=31-Re(i),h=1<<d;t|=e[d],i&=~h}return zn=t,$i(),n}function Cg(e,t){ze=null,Y.H=rl,t===yo||t===Xi?(t=Hf(),pt=3):t===Bf?(t=Hf(),pt=4):pt=t===Vh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,za=t,Ge===null&&($t=1,cl(e,Ka(t,e.current)))}function Rg(){var e=Y.H;return Y.H=rl,e===null?rl:e}function _g(){var e=Y.A;return Y.A=Y0,e}function Gd(){$t=4,fr||(Je&4194048)!==Je&&en.current!==null||(Is=!0),(hr&134217727)===0&&(Xr&134217727)===0||St===null||yr(St,Je,tn,!1)}function Xd(e,t,n){var i=ut;ut|=2;var d=Rg(),h=_g();(St!==e||Je!==t)&&(ml=null,Os(e,t)),t=!1;var E=$t;e:do try{if(pt!==0&&Ge!==null){var A=Ge,q=za;switch(pt){case 8:Vd(),E=6;break e;case 3:case 2:case 9:case 6:en.current===null&&(t=!0);var W=pt;if(pt=0,za=null,js(e,A,q,W),n&&Is){E=0;break e}break;default:W=pt,pt=0,za=null,js(e,A,q,W)}}G0(),E=$t;break}catch(se){Cg(e,se)}while(!0);return t&&e.shellSuspendCounter++,On=Br=null,ut=i,Y.H=d,Y.A=h,Ge===null&&(St=null,Je=0,$i()),E}function G0(){for(;Ge!==null;)Ig(Ge)}function X0(e,t){var n=ut;ut|=2;var i=Rg(),d=_g();St!==e||Je!==t?(ml=null,gl=he()+500,Os(e,t)):Is=ba(e,t);e:do try{if(pt!==0&&Ge!==null){t=Ge;var h=za;t:switch(pt){case 1:pt=0,za=null,js(e,t,h,1);break;case 2:case 9:if(zf(h)){pt=0,za=null,Lg(t);break}t=function(){pt!==2&&pt!==9||St!==e||(pt=7),vn(e)},h.then(t,t);break e;case 3:pt=7;break e;case 4:pt=5;break e;case 7:zf(h)?(pt=0,za=null,Lg(t)):(pt=0,za=null,js(e,t,h,7));break;case 5:var E=null;switch(Ge.tag){case 26:E=Ge.memoizedState;case 5:case 27:var A=Ge;if(!E||fm(E)){pt=0,za=null;var q=A.sibling;if(q!==null)Ge=q;else{var W=A.return;W!==null?(Ge=W,bl(W)):Ge=null}break t}}pt=0,za=null,js(e,t,h,5);break;case 6:pt=0,za=null,js(e,t,h,6);break;case 8:Vd(),$t=6;break e;default:throw Error(o(462))}}W0();break}catch(se){Cg(e,se)}while(!0);return On=Br=null,Y.H=i,Y.A=d,ut=n,Ge!==null?0:(St=null,Je=0,$i(),$t)}function W0(){for(;Ge!==null&&!$();)Ig(Ge)}function Ig(e){var t=rg(e.alternate,e,zn);e.memoizedProps=e.pendingProps,t===null?bl(e):Ge=t}function Lg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Qh(n,t,t.pendingProps,t.type,void 0,Je);break;case 11:t=Qh(n,t,t.pendingProps,t.type.render,t.ref,Je);break;case 5:cd(t);default:og(n,t),t=Ge=Pf(t,zn),t=rg(n,t,zn)}e.memoizedProps=e.pendingProps,t===null?bl(e):Ge=t}function js(e,t,n,i){On=Br=null,cd(t),Ns=null,Do=0;var d=t.return;try{if(M0(e,d,t,n,Je)){$t=1,cl(e,Ka(n,e.current)),Ge=null;return}}catch(h){if(d!==null)throw Ge=d,h;$t=1,cl(e,Ka(n,e.current)),Ge=null;return}t.flags&32768?(st||i===1?e=!0:Is||(Je&536870912)!==0?e=!1:(fr=e=!0,(i===2||i===9||i===3||i===6)&&(i=en.current,i!==null&&i.tag===13&&(i.flags|=16384))),Pg(t,e)):bl(t)}function bl(e){var t=e;do{if((t.flags&32768)!==0){Pg(t,fr);return}e=t.return;var n=F0(t.alternate,t,zn);if(n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);$t===0&&($t=5)}function Pg(e,t){do{var n=U0(e.alternate,e);if(n!==null){n.flags&=32767,Ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ge=e;return}Ge=e=n}while(e!==null);$t=6,Ge=null}function kg(e,t,n,i,d,h,E,A,q){e.cancelPendingCommit=null;do vl();while(da!==0);if((ut&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(h=t.lanes|t.childLanes,h|=Mc,At(e,n,h,E,A,q),e===St&&(Ge=St=null,Je=0),Ps=t,mr=e,ks=n,zd=h,Yd=d,Tg=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,J0(ye,function(){return $g(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Y.T,Y.T=null,d=Z.p,Z.p=2,E=ut,ut|=4;try{B0(e,t,n)}finally{ut=E,Z.p=d,Y.T=i}}da=1,Og(),jg(),qg()}}function Og(){if(da===1){da=0;var e=mr,t=Ps,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Y.T,Y.T=null;var i=Z.p;Z.p=2;var d=ut;ut|=4;try{yg(t,e);var h=ou,E=Sf(e.containerInfo),A=h.focusedElem,q=h.selectionRange;if(E!==A&&A&&A.ownerDocument&&xf(A.ownerDocument.documentElement,A)){if(q!==null&&Pc(A)){var W=q.start,se=q.end;if(se===void 0&&(se=W),"selectionStart"in A)A.selectionStart=W,A.selectionEnd=Math.min(se,A.value.length);else{var ce=A.ownerDocument||document,K=ce&&ce.defaultView||window;if(K.getSelection){var Q=K.getSelection(),qe=A.textContent.length,_e=Math.min(q.start,qe),yt=q.end===void 0?_e:Math.min(q.end,qe);!Q.extend&&_e>yt&&(E=yt,yt=_e,_e=E);var H=wf(A,_e),U=wf(A,yt);if(H&&U&&(Q.rangeCount!==1||Q.anchorNode!==H.node||Q.anchorOffset!==H.offset||Q.focusNode!==U.node||Q.focusOffset!==U.offset)){var G=ce.createRange();G.setStart(H.node,H.offset),Q.removeAllRanges(),_e>yt?(Q.addRange(G),Q.extend(U.node,U.offset)):(G.setEnd(U.node,U.offset),Q.addRange(G))}}}}for(ce=[],Q=A;Q=Q.parentNode;)Q.nodeType===1&&ce.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ce.length;A++){var le=ce[A];le.element.scrollLeft=le.left,le.element.scrollTop=le.top}}Il=!!su,ou=su=null}finally{ut=d,Z.p=i,Y.T=n}}e.current=t,da=2}}function jg(){if(da===2){da=0;var e=mr,t=Ps,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Y.T,Y.T=null;var i=Z.p;Z.p=2;var d=ut;ut|=4;try{fg(e,t.alternate,t)}finally{ut=d,Z.p=i,Y.T=n}}da=3}}function qg(){if(da===4||da===3){da=0,fe();var e=mr,t=Ps,n=ks,i=Tg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?da=5:(da=0,Ps=mr=null,Mg(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(gr=null),Ra(n),t=t.stateNode,we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(ya,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Y.T,d=Z.p,Z.p=2,Y.T=null;try{for(var h=e.onRecoverableError,E=0;E<i.length;E++){var A=i[E];h(A.value,{componentStack:A.stack})}}finally{Y.T=t,Z.p=d}}(ks&3)!==0&&vl(),vn(e),d=e.pendingLanes,(n&4194090)!==0&&(d&42)!==0?e===Hd?Oo++:(Oo=0,Hd=e):Oo=0,jo(0)}}function Mg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,go(t)))}function vl(e){return Og(),jg(),qg(),$g()}function $g(){if(da!==5)return!1;var e=mr,t=zd;zd=0;var n=Ra(ks),i=Y.T,d=Z.p;try{Z.p=32>n?32:n,Y.T=null,n=Yd,Yd=null;var h=mr,E=ks;if(da=0,Ps=mr=null,ks=0,(ut&6)!==0)throw Error(o(331));var A=ut;if(ut|=4,xg(h.current),vg(h,h.current,E,n),ut=A,jo(0,!1),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(ya,h)}catch{}return!0}finally{Z.p=d,Y.T=i,Mg(e,t)}}function Fg(e,t,n){t=Ka(n,t),t=Sd(e.stateNode,t,2),e=or(e,t,2),e!==null&&(_t(e,2),vn(e))}function Et(e,t,n){if(e.tag===3)Fg(e,e,n);else for(;t!==null;){if(t.tag===3){Fg(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){e=Ka(n,e),n=Yh(2),i=or(t,n,2),i!==null&&(Hh(n,i,t,e),_t(i,2),vn(i));break}}t=t.return}}function Wd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new H0;var d=new Set;i.set(t,d)}else d=i.get(t),d===void 0&&(d=new Set,i.set(t,d));d.has(n)||($d=!0,d.add(n),e=K0.bind(null,e,t,n),t.then(e,e))}function K0(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,St===e&&(Je&n)===n&&($t===4||$t===3&&(Je&62914560)===Je&&300>he()-Bd?(ut&2)===0&&Os(e,0):Fd|=n,Ls===Je&&(Ls=0)),vn(e)}function Ug(e,t){t===0&&(t=Gt()),e=ys(e,t),e!==null&&(_t(e,t),vn(e))}function Z0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ug(e,n)}function Q0(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,d=e.memoizedState;d!==null&&(n=d.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Ug(e,n)}function J0(e,t){return Ut(e,t)}var El=null,qs=null,Kd=!1,wl=!1,Zd=!1,Wr=0;function vn(e){e!==qs&&e.next===null&&(qs===null?El=qs=e:qs=qs.next=e),wl=!0,Kd||(Kd=!0,tE())}function jo(e,t){if(!Zd&&wl){Zd=!0;do for(var n=!1,i=El;i!==null;){if(e!==0){var d=i.pendingLanes;if(d===0)var h=0;else{var E=i.suspendedLanes,A=i.pingedLanes;h=(1<<31-Re(42|e)+1)-1,h&=d&~(E&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(n=!0,Hg(i,h))}else h=Je,h=at(i,i===St?h:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(h&3)===0||ba(i,h)||(n=!0,Hg(i,h));i=i.next}while(n);Zd=!1}}function eE(){Bg()}function Bg(){wl=Kd=!1;var e=0;Wr!==0&&(cE()&&(e=Wr),Wr=0);for(var t=he(),n=null,i=El;i!==null;){var d=i.next,h=zg(i,t);h===0?(i.next=null,n===null?El=d:n.next=d,d===null&&(qs=n)):(n=i,(e!==0||(h&3)!==0)&&(wl=!0)),i=d}jo(e)}function zg(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var E=31-Re(h),A=1<<E,q=d[E];q===-1?((A&n)===0||(A&i)!==0)&&(d[E]=kt(A,t)):q<=t&&(e.expiredLanes|=A),h&=~A}if(t=St,n=Je,n=at(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(pt===2||pt===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&vt(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ba(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&vt(i),Ra(n)){case 2:case 8:n=Ne;break;case 32:n=ye;break;case 268435456:n=et;break;default:n=ye}return i=Yg.bind(null,e),n=Ut(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&vt(i),e.callbackPriority=2,e.callbackNode=null,2}function Yg(e,t){if(da!==0&&da!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(vl()&&e.callbackNode!==n)return null;var i=Je;return i=at(e,e===St?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Dg(e,i,t),zg(e,he()),e.callbackNode!=null&&e.callbackNode===n?Yg.bind(null,e):null)}function Hg(e,t){if(vl())return null;Dg(e,t,!0)}function tE(){uE(function(){(ut&6)!==0?Ut(ue,eE):Bg()})}function Qd(){return Wr===0&&(Wr=ja()),Wr}function Vg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Li(""+e)}function Gg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function aE(e,t,n,i,d){if(t==="submit"&&n&&n.stateNode===d){var h=Vg((d[jt]||null).action),E=i.submitter;E&&(t=(t=E[jt]||null)?Vg(t.formAction):E.getAttribute("formAction"),t!==null&&(h=t,E=null));var A=new ji("action","action",null,i,d);e.push({event:A,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Wr!==0){var q=E?Gg(d,E):new FormData(d);bd(n,{pending:!0,data:q,method:d.method,action:h},null,q)}}else typeof h=="function"&&(A.preventDefault(),q=E?Gg(d,E):new FormData(d),bd(n,{pending:!0,data:q,method:d.method,action:h},h,q))},currentTarget:d}]})}}for(var Jd=0;Jd<qc.length;Jd++){var eu=qc[Jd],nE=eu.toLowerCase(),rE=eu[0].toUpperCase()+eu.slice(1);on(nE,"on"+rE)}on(Df,"onAnimationEnd"),on(Nf,"onAnimationIteration"),on(Cf,"onAnimationStart"),on("dblclick","onDoubleClick"),on("focusin","onFocus"),on("focusout","onBlur"),on(w0,"onTransitionRun"),on(x0,"onTransitionStart"),on(S0,"onTransitionCancel"),on(Rf,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function Xg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],d=i.event;i=i.listeners;e:{var h=void 0;if(t)for(var E=i.length-1;0<=E;E--){var A=i[E],q=A.instance,W=A.currentTarget;if(A=A.listener,q!==h&&d.isPropagationStopped())break e;h=A,d.currentTarget=W;try{h(d)}catch(se){ll(se)}d.currentTarget=null,h=q}else for(E=0;E<i.length;E++){if(A=i[E],q=A.instance,W=A.currentTarget,A=A.listener,q!==h&&d.isPropagationStopped())break e;h=A,d.currentTarget=W;try{h(d)}catch(se){ll(se)}d.currentTarget=null,h=q}}}}function Xe(e,t){var n=t[J];n===void 0&&(n=t[J]=new Set);var i=e+"__bubble";n.has(i)||(Wg(t,e,2,!1),n.add(i))}function tu(e,t,n){var i=0;t&&(i|=4),Wg(n,e,i,t)}var xl="_reactListening"+Math.random().toString(36).slice(2);function au(e){if(!e[xl]){e[xl]=!0,Ue.forEach(function(n){n!=="selectionchange"&&(sE.has(n)||tu(n,!1,e),tu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xl]||(t[xl]=!0,tu("selectionchange",!1,t))}}function Wg(e,t,n,i){switch(vm(t)){case 2:var d=LE;break;case 8:d=PE;break;default:d=mu}n=d.bind(null,t,n,e),d=void 0,!Tc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),i?d!==void 0?e.addEventListener(t,n,{capture:!0,passive:d}):e.addEventListener(t,n,!0):d!==void 0?e.addEventListener(t,n,{passive:d}):e.addEventListener(t,n,!1)}function nu(e,t,n,i,d){var h=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var E=i.tag;if(E===3||E===4){var A=i.stateNode.containerInfo;if(A===d)break;if(E===4)for(E=i.return;E!==null;){var q=E.tag;if((q===3||q===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;A!==null;){if(E=lt(A),E===null)return;if(q=E.tag,q===5||q===6||q===26||q===27){i=h=E;continue e}A=A.parentNode}}i=i.return}tf(function(){var W=h,se=xc(n),ce=[];e:{var K=_f.get(e);if(K!==void 0){var Q=ji,qe=e;switch(e){case"keypress":if(ki(n)===0)break e;case"keydown":case"keyup":Q=Jv;break;case"focusin":qe="focus",Q=Cc;break;case"focusout":qe="blur",Q=Cc;break;case"beforeblur":case"afterblur":Q=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=rf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=a0;break;case Df:case Nf:case Cf:Q=Yv;break;case Rf:Q=r0;break;case"scroll":case"scrollend":Q=$v;break;case"wheel":Q=o0;break;case"copy":case"cut":case"paste":Q=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=of;break;case"toggle":case"beforetoggle":Q=l0}var _e=(t&4)!==0,yt=!_e&&(e==="scroll"||e==="scrollend"),H=_e?K!==null?K+"Capture":null:K;_e=[];for(var U=W,G;U!==null;){var le=U;if(G=le.stateNode,le=le.tag,le!==5&&le!==26&&le!==27||G===null||H===null||(le=to(U,H),le!=null&&_e.push(Mo(U,le,G))),yt)break;U=U.return}0<_e.length&&(K=new Q(K,qe,null,n,se),ce.push({event:K,listeners:_e}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",K&&n!==wc&&(qe=n.relatedTarget||n.fromElement)&&(lt(qe)||qe[I]))break e;if((Q||K)&&(K=se.window===se?se:(K=se.ownerDocument)?K.defaultView||K.parentWindow:window,Q?(qe=n.relatedTarget||n.toElement,Q=W,qe=qe?lt(qe):null,qe!==null&&(yt=u(qe),_e=qe.tag,qe!==yt||_e!==5&&_e!==27&&_e!==6)&&(qe=null)):(Q=null,qe=W),Q!==qe)){if(_e=rf,le="onMouseLeave",H="onMouseEnter",U="mouse",(e==="pointerout"||e==="pointerover")&&(_e=of,le="onPointerLeave",H="onPointerEnter",U="pointer"),yt=Q==null?K:be(Q),G=qe==null?K:be(qe),K=new _e(le,U+"leave",Q,n,se),K.target=yt,K.relatedTarget=G,le=null,lt(se)===W&&(_e=new _e(H,U+"enter",qe,n,se),_e.target=G,_e.relatedTarget=yt,le=_e),yt=le,Q&&qe)t:{for(_e=Q,H=qe,U=0,G=_e;G;G=Ms(G))U++;for(G=0,le=H;le;le=Ms(le))G++;for(;0<U-G;)_e=Ms(_e),U--;for(;0<G-U;)H=Ms(H),G--;for(;U--;){if(_e===H||H!==null&&_e===H.alternate)break t;_e=Ms(_e),H=Ms(H)}_e=null}else _e=null;Q!==null&&Kg(ce,K,Q,_e,!1),qe!==null&&yt!==null&&Kg(ce,yt,qe,_e,!0)}}e:{if(K=W?be(W):window,Q=K.nodeName&&K.nodeName.toLowerCase(),Q==="select"||Q==="input"&&K.type==="file")var Te=gf;else if(ff(K))if(mf)Te=b0;else{Te=m0;var He=g0}else Q=K.nodeName,!Q||Q.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?W&&Ec(W.elementType)&&(Te=gf):Te=y0;if(Te&&(Te=Te(e,W))){hf(ce,Te,n,se);break e}He&&He(e,K,W),e==="focusout"&&W&&K.type==="number"&&W.memoizedProps.value!=null&&tr(K,"number",K.value)}switch(He=W?be(W):window,e){case"focusin":(ff(He)||He.contentEditable==="true")&&(hs=He,kc=W,co=null);break;case"focusout":co=kc=hs=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,Tf(ce,n,se);break;case"selectionchange":if(E0)break;case"keydown":case"keyup":Tf(ce,n,se)}var De;if(_c)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else fs?uf(e,n)&&(Le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Le="onCompositionStart");Le&&(lf&&n.locale!=="ko"&&(fs||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&fs&&(De=af()):(ar=se,Ac="value"in ar?ar.value:ar.textContent,fs=!0)),He=Sl(W,Le),0<He.length&&(Le=new sf(Le,e,null,n,se),ce.push({event:Le,listeners:He}),De?Le.data=De:(De=pf(n),De!==null&&(Le.data=De)))),(De=d0?u0(e,n):p0(e,n))&&(Le=Sl(W,"onBeforeInput"),0<Le.length&&(He=new sf("onBeforeInput","beforeinput",null,n,se),ce.push({event:He,listeners:Le}),He.data=De)),aE(ce,e,W,n,se)}Xg(ce,t)})}function Mo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Sl(e,t){for(var n=t+"Capture",i=[];e!==null;){var d=e,h=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||h===null||(d=to(e,n),d!=null&&i.unshift(Mo(e,d,h)),d=to(e,t),d!=null&&i.push(Mo(e,d,h))),e.tag===3)return i;e=e.return}return[]}function Ms(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Kg(e,t,n,i,d){for(var h=t._reactName,E=[];n!==null&&n!==i;){var A=n,q=A.alternate,W=A.stateNode;if(A=A.tag,q!==null&&q===i)break;A!==5&&A!==26&&A!==27||W===null||(q=W,d?(W=to(n,h),W!=null&&E.unshift(Mo(n,W,q))):d||(W=to(n,h),W!=null&&E.push(Mo(n,W,q)))),n=n.return}E.length!==0&&e.push({event:t,listeners:E})}var oE=/\r\n?/g,iE=/\u0000|\uFFFD/g;function Zg(e){return(typeof e=="string"?e:""+e).replace(oE,`
`).replace(iE,"")}function Qg(e,t){return t=Zg(t),Zg(e)===t}function Tl(){}function mt(e,t,n,i,d,h){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||ds(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&ds(e,""+i);break;case"className":Jn(e,"class",i);break;case"tabIndex":Jn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,n,i);break;case"style":Jp(e,i,h);break;case"data":if(t!=="object"){Jn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Li(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(n==="formAction"?(t!=="input"&&mt(e,t,"name",d.name,d,null),mt(e,t,"formEncType",d.formEncType,d,null),mt(e,t,"formMethod",d.formMethod,d,null),mt(e,t,"formTarget",d.formTarget,d,null)):(mt(e,t,"encType",d.encType,d,null),mt(e,t,"method",d.method,d,null),mt(e,t,"target",d.target,d,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Li(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Tl);break;case"onScroll":i!=null&&Xe("scroll",e);break;case"onScrollEnd":i!=null&&Xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(d.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Li(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Xe("beforetoggle",e),Xe("toggle",e),Xa(e,"popover",i);break;case"xlinkActuate":qa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":qa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":qa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":qa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":qa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":qa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":qa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":qa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":qa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Xa(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=qv.get(n)||n,Xa(e,n,i))}}function ru(e,t,n,i,d,h){switch(n){case"style":Jp(e,i,h);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(d.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?ds(e,i):(typeof i=="number"||typeof i=="bigint")&&ds(e,""+i);break;case"onScroll":i!=null&&Xe("scroll",e);break;case"onScrollEnd":i!=null&&Xe("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Tl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ke.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(d=n.endsWith("Capture"),t=n.slice(2,d?n.length-7:void 0),h=e[jt]||null,h=h!=null?h[n]:null,typeof h=="function"&&e.removeEventListener(t,h,d),typeof i=="function")){typeof h!="function"&&h!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,d);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Xa(e,n,i)}}}function ua(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xe("error",e),Xe("load",e);var i=!1,d=!1,h;for(h in n)if(n.hasOwnProperty(h)){var E=n[h];if(E!=null)switch(h){case"src":i=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:mt(e,t,h,E,n,null)}}d&&mt(e,t,"srcSet",n.srcSet,n,null),i&&mt(e,t,"src",n.src,n,null);return;case"input":Xe("invalid",e);var A=h=E=d=null,q=null,W=null;for(i in n)if(n.hasOwnProperty(i)){var se=n[i];if(se!=null)switch(i){case"name":d=se;break;case"type":E=se;break;case"checked":q=se;break;case"defaultChecked":W=se;break;case"value":h=se;break;case"defaultValue":A=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(o(137,t));break;default:mt(e,t,i,se,n,null)}}Wa(e,h,A,q,W,E,d,!1),xt(e);return;case"select":Xe("invalid",e),i=E=h=null;for(d in n)if(n.hasOwnProperty(d)&&(A=n[d],A!=null))switch(d){case"value":h=A;break;case"defaultValue":E=A;break;case"multiple":i=A;default:mt(e,t,d,A,n,null)}t=h,n=E,e.multiple=!!i,t!=null?cs(e,!!i,t,!1):n!=null&&cs(e,!!i,n,!0);return;case"textarea":Xe("invalid",e),h=d=i=null;for(E in n)if(n.hasOwnProperty(E)&&(A=n[E],A!=null))switch(E){case"value":i=A;break;case"defaultValue":d=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(91));break;default:mt(e,t,E,A,n,null)}Zp(e,i,d,h),xt(e);return;case"option":for(q in n)n.hasOwnProperty(q)&&(i=n[q],i!=null)&&(q==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":mt(e,t,q,i,n,null));return;case"dialog":Xe("beforetoggle",e),Xe("toggle",e),Xe("cancel",e),Xe("close",e);break;case"iframe":case"object":Xe("load",e);break;case"video":case"audio":for(i=0;i<qo.length;i++)Xe(qo[i],e);break;case"image":Xe("error",e),Xe("load",e);break;case"details":Xe("toggle",e);break;case"embed":case"source":case"link":Xe("error",e),Xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in n)if(n.hasOwnProperty(W)&&(i=n[W],i!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:mt(e,t,W,i,n,null)}return;default:if(Ec(t)){for(se in n)n.hasOwnProperty(se)&&(i=n[se],i!==void 0&&ru(e,t,se,i,n,void 0));return}}for(A in n)n.hasOwnProperty(A)&&(i=n[A],i!=null&&mt(e,t,A,i,n,null))}function lE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,h=null,E=null,A=null,q=null,W=null,se=null;for(Q in n){var ce=n[Q];if(n.hasOwnProperty(Q)&&ce!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":q=ce;default:i.hasOwnProperty(Q)||mt(e,t,Q,null,i,ce)}}for(var K in i){var Q=i[K];if(ce=n[K],i.hasOwnProperty(K)&&(Q!=null||ce!=null))switch(K){case"type":h=Q;break;case"name":d=Q;break;case"checked":W=Q;break;case"defaultChecked":se=Q;break;case"value":E=Q;break;case"defaultValue":A=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(o(137,t));break;default:Q!==ce&&mt(e,t,K,Q,i,ce)}}Ma(e,E,A,q,W,se,h,d);return;case"select":Q=E=A=K=null;for(h in n)if(q=n[h],n.hasOwnProperty(h)&&q!=null)switch(h){case"value":break;case"multiple":Q=q;default:i.hasOwnProperty(h)||mt(e,t,h,null,i,q)}for(d in i)if(h=i[d],q=n[d],i.hasOwnProperty(d)&&(h!=null||q!=null))switch(d){case"value":K=h;break;case"defaultValue":A=h;break;case"multiple":E=h;default:h!==q&&mt(e,t,d,h,i,q)}t=A,n=E,i=Q,K!=null?cs(e,!!n,K,!1):!!i!=!!n&&(t!=null?cs(e,!!n,t,!0):cs(e,!!n,n?[]:"",!1));return;case"textarea":Q=K=null;for(A in n)if(d=n[A],n.hasOwnProperty(A)&&d!=null&&!i.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:mt(e,t,A,null,i,d)}for(E in i)if(d=i[E],h=n[E],i.hasOwnProperty(E)&&(d!=null||h!=null))switch(E){case"value":K=d;break;case"defaultValue":Q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:d!==h&&mt(e,t,E,d,i,h)}Kp(e,K,Q);return;case"option":for(var qe in n)K=n[qe],n.hasOwnProperty(qe)&&K!=null&&!i.hasOwnProperty(qe)&&(qe==="selected"?e.selected=!1:mt(e,t,qe,null,i,K));for(q in i)K=i[q],Q=n[q],i.hasOwnProperty(q)&&K!==Q&&(K!=null||Q!=null)&&(q==="selected"?e.selected=K&&typeof K!="function"&&typeof K!="symbol":mt(e,t,q,K,i,Q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _e in n)K=n[_e],n.hasOwnProperty(_e)&&K!=null&&!i.hasOwnProperty(_e)&&mt(e,t,_e,null,i,K);for(W in i)if(K=i[W],Q=n[W],i.hasOwnProperty(W)&&K!==Q&&(K!=null||Q!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(o(137,t));break;default:mt(e,t,W,K,i,Q)}return;default:if(Ec(t)){for(var yt in n)K=n[yt],n.hasOwnProperty(yt)&&K!==void 0&&!i.hasOwnProperty(yt)&&ru(e,t,yt,void 0,i,K);for(se in i)K=i[se],Q=n[se],!i.hasOwnProperty(se)||K===Q||K===void 0&&Q===void 0||ru(e,t,se,K,i,Q);return}}for(var H in n)K=n[H],n.hasOwnProperty(H)&&K!=null&&!i.hasOwnProperty(H)&&mt(e,t,H,null,i,K);for(ce in i)K=i[ce],Q=n[ce],!i.hasOwnProperty(ce)||K===Q||K==null&&Q==null||mt(e,t,ce,K,i,Q)}var su=null,ou=null;function Al(e){return e.nodeType===9?e:e.ownerDocument}function Jg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function em(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function iu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var lu=null;function cE(){var e=window.event;return e&&e.type==="popstate"?e===lu?!1:(lu=e,!0):(lu=null,!1)}var tm=typeof setTimeout=="function"?setTimeout:void 0,dE=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,uE=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(e){return am.resolve(null).then(e).catch(pE)}:tm;function pE(e){setTimeout(function(){throw e})}function br(e){return e==="head"}function nm(e,t){var n=t,i=0,d=0;do{var h=n.nextSibling;if(e.removeChild(n),h&&h.nodeType===8)if(n=h.data,n==="/$"){if(0<i&&8>i){n=i;var E=e.ownerDocument;if(n&1&&$o(E.documentElement),n&2&&$o(E.body),n&4)for(n=E.head,$o(n),E=n.firstChild;E;){var A=E.nextSibling,q=E.nodeName;E[je]||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&E.rel.toLowerCase()==="stylesheet"||n.removeChild(E),E=A}}if(d===0){e.removeChild(h),Go(t);return}d--}else n==="$"||n==="$?"||n==="$!"?d++:i=n.charCodeAt(0)-48;else i=0;n=h}while(n);Go(t)}function cu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":cu(n),We(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function fE(e,t,n,i){for(;e.nodeType===1;){var d=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[je])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var h=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=cn(e.nextSibling),e===null)break}return null}function hE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=cn(e.nextSibling),e===null))return null;return e}function du(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function gE(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var uu=null;function rm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function sm(e,t,n){switch(t=Al(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function $o(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);We(e)}var an=new Map,om=new Set;function Dl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yn=Z.d;Z.d={f:mE,r:yE,D:bE,C:vE,L:EE,m:wE,X:SE,S:xE,M:TE};function mE(){var e=Yn.f(),t=yl();return e||t}function yE(e){var t=F(e);t!==null&&t.tag===5&&t.type==="form"?Dh(t):Yn.r(e)}var $s=typeof document>"u"?null:document;function im(e,t,n){var i=$s;if(i&&typeof t=="string"&&t){var d=Ct(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof n=="string"&&(d+='[crossorigin="'+n+'"]'),om.has(d)||(om.add(d),e={rel:e,crossOrigin:n,href:t},i.querySelector(d)===null&&(t=i.createElement("link"),ua(t,"link",e),Se(t),i.head.appendChild(t)))}}function bE(e){Yn.D(e),im("dns-prefetch",e,null)}function vE(e,t){Yn.C(e,t),im("preconnect",e,t)}function EE(e,t,n){Yn.L(e,t,n);var i=$s;if(i&&e&&t){var d='link[rel="preload"][as="'+Ct(t)+'"]';t==="image"&&n&&n.imageSrcSet?(d+='[imagesrcset="'+Ct(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(d+='[imagesizes="'+Ct(n.imageSizes)+'"]')):d+='[href="'+Ct(e)+'"]';var h=d;switch(t){case"style":h=Fs(e);break;case"script":h=Us(e)}an.has(h)||(e=p({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),an.set(h,e),i.querySelector(d)!==null||t==="style"&&i.querySelector(Fo(h))||t==="script"&&i.querySelector(Uo(h))||(t=i.createElement("link"),ua(t,"link",e),Se(t),i.head.appendChild(t)))}}function wE(e,t){Yn.m(e,t);var n=$s;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+Ct(i)+'"][href="'+Ct(e)+'"]',h=d;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Us(e)}if(!an.has(h)&&(e=p({rel:"modulepreload",href:e},t),an.set(h,e),n.querySelector(d)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Uo(h)))return}i=n.createElement("link"),ua(i,"link",e),Se(i),n.head.appendChild(i)}}}function xE(e,t,n){Yn.S(e,t,n);var i=$s;if(i&&e){var d=Ee(i).hoistableStyles,h=Fs(e);t=t||"default";var E=d.get(h);if(!E){var A={loading:0,preload:null};if(E=i.querySelector(Fo(h)))A.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=an.get(h))&&pu(e,n);var q=E=i.createElement("link");Se(q),ua(q,"link",e),q._p=new Promise(function(W,se){q.onload=W,q.onerror=se}),q.addEventListener("load",function(){A.loading|=1}),q.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Nl(E,t,i)}E={type:"stylesheet",instance:E,count:1,state:A},d.set(h,E)}}}function SE(e,t){Yn.X(e,t);var n=$s;if(n&&e){var i=Ee(n).hoistableScripts,d=Us(e),h=i.get(d);h||(h=n.querySelector(Uo(d)),h||(e=p({src:e,async:!0},t),(t=an.get(d))&&fu(e,t),h=n.createElement("script"),Se(h),ua(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(d,h))}}function TE(e,t){Yn.M(e,t);var n=$s;if(n&&e){var i=Ee(n).hoistableScripts,d=Us(e),h=i.get(d);h||(h=n.querySelector(Uo(d)),h||(e=p({src:e,async:!0,type:"module"},t),(t=an.get(d))&&fu(e,t),h=n.createElement("script"),Se(h),ua(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(d,h))}}function lm(e,t,n,i){var d=(d=ve.current)?Dl(d):null;if(!d)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Fs(n.href),n=Ee(d).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Fs(n.href);var h=Ee(d).hoistableStyles,E=h.get(e);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,E),(h=d.querySelector(Fo(e)))&&!h._p&&(E.instance=h,E.state.loading=5),an.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},an.set(e,n),h||AE(d,e,n,E.state))),t&&i===null)throw Error(o(528,""));return E}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Us(n),n=Ee(d).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Fs(e){return'href="'+Ct(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function cm(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function AE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ua(t,"link",n),Se(t),e.head.appendChild(t))}function Us(e){return'[src="'+Ct(e)+'"]'}function Uo(e){return"script[async]"+e}function dm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ct(n.href)+'"]');if(i)return t.instance=i,Se(i),i;var d=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Se(i),ua(i,"style",d),Nl(i,n.precedence,e),t.instance=i;case"stylesheet":d=Fs(n.href);var h=e.querySelector(Fo(d));if(h)return t.state.loading|=4,t.instance=h,Se(h),h;i=cm(n),(d=an.get(d))&&pu(i,d),h=(e.ownerDocument||e).createElement("link"),Se(h);var E=h;return E._p=new Promise(function(A,q){E.onload=A,E.onerror=q}),ua(h,"link",i),t.state.loading|=4,Nl(h,n.precedence,e),t.instance=h;case"script":return h=Us(n.src),(d=e.querySelector(Uo(h)))?(t.instance=d,Se(d),d):(i=n,(d=an.get(h))&&(i=p({},n),fu(i,d)),e=e.ownerDocument||e,d=e.createElement("script"),Se(d),ua(d,"link",i),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Nl(i,n.precedence,e));return t.instance}function Nl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=i.length?i[i.length-1]:null,h=d,E=0;E<i.length;E++){var A=i[E];if(A.dataset.precedence===t)h=A;else if(h!==d)break}h?h.parentNode.insertBefore(e,h.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function fu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Cl=null;function um(e,t,n){if(Cl===null){var i=new Map,d=Cl=new Map;d.set(n,i)}else d=Cl,i=d.get(n),i||(i=new Map,d.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),d=0;d<n.length;d++){var h=n[d];if(!(h[je]||h[Ot]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(t)||"";E=e+E;var A=i.get(E);A?A.push(h):i.set(E,[h])}}return i}function pm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function DE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function fm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Bo=null;function NE(){}function CE(e,t,n){if(Bo===null)throw Error(o(475));var i=Bo;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var d=Fs(n.href),h=e.querySelector(Fo(d));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Rl.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=h,Se(h);return}h=e.ownerDocument||e,n=cm(n),(d=an.get(d))&&pu(n,d),h=h.createElement("link"),Se(h);var E=h;E._p=new Promise(function(A,q){E.onload=A,E.onerror=q}),ua(h,"link",n),t.instance=h}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Rl.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function RE(){if(Bo===null)throw Error(o(475));var e=Bo;return e.stylesheets&&e.count===0&&hu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Rl(){if(this.count--,this.count===0){if(this.stylesheets)hu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _l=null;function hu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_l=new Map,t.forEach(_E,e),_l=null,Rl.call(e))}function _E(e,t){if(!(t.state.loading&4)){var n=_l.get(e);if(n)var i=n.get(null);else{n=new Map,_l.set(e,n);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<d.length;h++){var E=d[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(n.set(E.dataset.precedence,E),i=E)}i&&n.set(null,i)}d=t.instance,E=d.getAttribute("data-precedence"),h=n.get(E)||i,h===i&&n.set(null,d),n.set(E,d),this.count++,i=Rl.bind(this),d.addEventListener("load",i),d.addEventListener("error",i),h?h.parentNode.insertBefore(d,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var zo={$$typeof:_,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function IE(e,t,n,i,d,h,E,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=i,this.onUncaughtError=d,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function hm(e,t,n,i,d,h,E,A,q,W,se,ce){return e=new IE(e,t,n,E,A,q,W,ce),t=1,h===!0&&(t|=24),h=Fa(3,null,null,t),e.current=h,h.stateNode=e,t=Wc(),t.refCount++,e.pooledCache=t,t.refCount++,h.memoizedState={element:i,isDehydrated:n,cache:t},Jc(h),e}function gm(e){return e?(e=bs,e):bs}function mm(e,t,n,i,d,h){d=gm(d),i.context===null?i.context=d:i.pendingContext=d,i=sr(t),i.payload={element:n},h=h===void 0?null:h,h!==null&&(i.callback=h),n=or(e,i,t),n!==null&&(Ha(n,e,t),vo(n,e,t))}function ym(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function gu(e,t){ym(e,t),(e=e.alternate)&&ym(e,t)}function bm(e){if(e.tag===13){var t=ys(e,67108864);t!==null&&Ha(t,e,67108864),gu(e,67108864)}}var Il=!0;function LE(e,t,n,i){var d=Y.T;Y.T=null;var h=Z.p;try{Z.p=2,mu(e,t,n,i)}finally{Z.p=h,Y.T=d}}function PE(e,t,n,i){var d=Y.T;Y.T=null;var h=Z.p;try{Z.p=8,mu(e,t,n,i)}finally{Z.p=h,Y.T=d}}function mu(e,t,n,i){if(Il){var d=yu(i);if(d===null)nu(e,t,i,Ll,n),Em(e,i);else if(OE(d,e,t,n,i))i.stopPropagation();else if(Em(e,i),t&4&&-1<kE.indexOf(e)){for(;d!==null;){var h=F(d);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=Tt(h.pendingLanes);if(E!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var q=1<<31-Re(E);A.entanglements[1]|=q,E&=~q}vn(h),(ut&6)===0&&(gl=he()+500,jo(0))}}break;case 13:A=ys(h,2),A!==null&&Ha(A,h,2),yl(),gu(h,2)}if(h=yu(i),h===null&&nu(e,t,i,Ll,n),h===d)break;d=h}d!==null&&i.stopPropagation()}else nu(e,t,i,null,n)}}function yu(e){return e=xc(e),bu(e)}var Ll=null;function bu(e){if(Ll=null,e=lt(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ll=e,null}function vm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z()){case ue:return 2;case Ne:return 8;case ye:case Me:return 32;case et:return 268435456;default:return 32}default:return 32}}var vu=!1,vr=null,Er=null,wr=null,Yo=new Map,Ho=new Map,xr=[],kE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Em(e,t){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Yo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(t.pointerId)}}function Vo(e,t,n,i,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:h,targetContainers:[d]},t!==null&&(t=F(t),t!==null&&bm(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function OE(e,t,n,i,d){switch(t){case"focusin":return vr=Vo(vr,e,t,n,i,d),!0;case"dragenter":return Er=Vo(Er,e,t,n,i,d),!0;case"mouseover":return wr=Vo(wr,e,t,n,i,d),!0;case"pointerover":var h=d.pointerId;return Yo.set(h,Vo(Yo.get(h)||null,e,t,n,i,d)),!0;case"gotpointercapture":return h=d.pointerId,Ho.set(h,Vo(Ho.get(h)||null,e,t,n,i,d)),!0}return!1}function wm(e){var t=lt(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=m(n),t!==null){e.blockedOn=t,va(e.priority,function(){if(n.tag===13){var i=Ya();i=Cn(i);var d=ys(n,i);d!==null&&Ha(d,n,i),gu(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=yu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);wc=i,n.target.dispatchEvent(i),wc=null}else return t=F(n),t!==null&&bm(t),e.blockedOn=n,!1;t.shift()}return!0}function xm(e,t,n){Pl(e)&&n.delete(t)}function jE(){vu=!1,vr!==null&&Pl(vr)&&(vr=null),Er!==null&&Pl(Er)&&(Er=null),wr!==null&&Pl(wr)&&(wr=null),Yo.forEach(xm),Ho.forEach(xm)}function kl(e,t){e.blockedOn===t&&(e.blockedOn=null,vu||(vu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,jE)))}var Ol=null;function Sm(e){Ol!==e&&(Ol=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Ol===e&&(Ol=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],d=e[t+2];if(typeof i!="function"){if(bu(i||n)===null)continue;break}var h=F(n);h!==null&&(e.splice(t,3),t-=3,bd(h,{pending:!0,data:d,method:n.method,action:i},i,d))}}))}function Go(e){function t(q){return kl(q,e)}vr!==null&&kl(vr,e),Er!==null&&kl(Er,e),wr!==null&&kl(wr,e),Yo.forEach(t),Ho.forEach(t);for(var n=0;n<xr.length;n++){var i=xr[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)wm(n),n.blockedOn===null&&xr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var d=n[i],h=n[i+1],E=d[jt]||null;if(typeof h=="function")E||Sm(n);else if(E){var A=null;if(h&&h.hasAttribute("formAction")){if(d=h,E=h[jt]||null)A=E.formAction;else if(bu(d)!==null)continue}else A=E.action;typeof A=="function"?n[i+1]=A:(n.splice(i,3),i-=3),Sm(n)}}}function Eu(e){this._internalRoot=e}jl.prototype.render=Eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=Ya();mm(n,i,e,t,null,null)},jl.prototype.unmount=Eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;mm(e.current,2,null,e,null,null),yl(),t[I]=null}};function jl(e){this._internalRoot=e}jl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Rn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xr.length&&t!==0&&t<xr[n].priority;n++);xr.splice(n,0,e),n===0&&wm(e)}};var Tm=r.version;if(Tm!=="19.1.4")throw Error(o(527,Tm,"19.1.4"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var qE={bundleType:0,version:"19.1.4",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{ya=ql.inject(qE),we=ql}catch{}}return Wo.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,i="",d=Fh,h=Uh,E=Bh,A=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(E=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(A=t.unstable_transitionCallbacks)),t=hm(e,1,!1,null,null,n,i,d,h,E,A,null),e[I]=t.current,au(e),new Eu(t)},Wo.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var i=!1,d="",h=Fh,E=Uh,A=Bh,q=null,W=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(E=n.onCaughtError),n.onRecoverableError!==void 0&&(A=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(q=n.unstable_transitionCallbacks),n.formState!==void 0&&(W=n.formState)),t=hm(e,1,!0,t,n??null,i,d,h,E,A,q,W),t.context=gm(null),n=t.current,i=Ya(),i=Cn(i),d=sr(i),d.callback=null,or(n,d,i),n=i,t.current.lanes=n,_t(t,n),vn(t),e[I]=t.current,au(e),new jl(t)},Wo.version="19.1.4",Wo}var km;function XE(){if(km)return xu.exports;km=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),xu.exports=GE(),xu.exports}var Pp=XE();const WE=xi(Pp),KE=sc({__proto__:null,default:WE},[Pp]);var M=oc();const re=xi(M),ib=sc({__proto__:null,default:re},[M]);const ZE=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),QE=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase()),Om=a=>{const r=QE(a);return r.charAt(0).toUpperCase()+r.slice(1)},lb=(...a)=>a.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim(),JE=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var ew={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const tw=M.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,iconNode:m,...f},g)=>M.createElement("svg",{ref:g,...ew,width:r,height:r,stroke:a,strokeWidth:o?Number(s)*24/Number(r):s,className:lb("lucide",l),...!u&&!JE(f)&&{"aria-hidden":"true"},...f},[...m.map(([y,p])=>M.createElement(y,p)),...Array.isArray(u)?u:[u]]));const Ve=(a,r)=>{const s=M.forwardRef(({className:o,...l},u)=>M.createElement(tw,{ref:u,iconNode:r,className:lb(`lucide-${ZE(Om(a))}`,`lucide-${a}`,o),...l}));return s.displayName=Om(a),s};const aw=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],kp=Ve("archive",aw);const nw=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],rw=Ve("arrow-down",nw);const sw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],cb=Ve("arrow-left",sw);const ow=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],iw=Ve("arrow-right",ow);const lw=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],cw=Ve("arrow-up",lw);const dw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Gs=Ve("check",dw);const uw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Rr=Ve("chevron-down",uw);const pw=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],db=Ve("chevron-left",pw);const fw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Op=Ve("chevron-right",fw);const hw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],jm=Ve("circle-check",hw);const gw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],mw=Ve("clipboard-check",gw);const yw=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],jp=Ve("database",yw);const bw=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],_r=Ve("download",bw);const vw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Ew=Ve("eye",vw);const ww=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],xw=Ve("file-check-2",ww);const Sw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],Tw=Ve("file-code-2",Sw);const Aw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],qm=Ve("file-plus-2",Aw);const Dw=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],Nw=Ve("file-search",Dw);const Cw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Kn=Ve("file-text",Cw);const Rw=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Ku=Ve("folder",Rw);const _w=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Iw=Ve("funnel",_w);const Lw=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Pw=Ve("git-branch",Lw);const kw=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Zn=Ve("hard-drive",kw);const Ow=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],si=Ve("layers",Ow);const jw=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ka=Ve("loader-circle",jw);const qw=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Mw=Ve("monitor",qw);const $w=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],fi=Ve("plus",$w);const Fw=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Uw=Ve("refresh-cw",Fw);const Bw=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Mm=Ve("save",Bw);const zw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],hi=Ve("search",zw);const Yw=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Hw=Ve("settings-2",Yw);const Vw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Zu=Ve("shield-check",Vw);const Gw=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Qu=Ve("sliders-horizontal",Gw);const Xw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],gi=Ve("trash-2",Xw);const Ww=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Ir=Ve("triangle-alert",Ww);const Kw=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],es=Ve("upload",Kw);const Zw=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Qw=Ve("wrench",Zw);const Jw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ju=Ve("x",Jw);function ex(a,r){if(a instanceof RegExp)return{keys:!1,pattern:a};var s,o,l,u,m=[],f="",g=a.split("/");for(g[0]||g.shift();l=g.shift();)s=l[0],s==="*"?(m.push(s),f+=l[1]==="?"?"(?:/(.*))?":"/(.*)"):s===":"?(o=l.indexOf("?",1),u=l.indexOf(".",1),m.push(l.substring(1,~o?o:~u?u:l.length)),f+=~o&&!~u?"(?:/([^/]+?))?":"/([^/]+?)",~u&&(f+=(~o?"?":"")+"\\"+l.substring(u))):f+="/"+l;return{keys:m,pattern:new RegExp("^"+f+(r?"(?=$|/)":"/?$"),"i")}}var Nu={exports:{}},Cu={};var $m;function tx(){if($m)return Cu;$m=1;var a=oc();function r(b,v){return b===v&&(b!==0||1/b===1/v)||b!==b&&v!==v}var s=typeof Object.is=="function"?Object.is:r,o=a.useState,l=a.useEffect,u=a.useLayoutEffect,m=a.useDebugValue;function f(b,v){var w=v(),R=o({inst:{value:w,getSnapshot:v}}),D=R[0].inst,S=R[1];return u(function(){D.value=w,D.getSnapshot=v,g(D)&&S({inst:D})},[b,w,v]),l(function(){return g(D)&&S({inst:D}),b(function(){g(D)&&S({inst:D})})},[b]),m(w),w}function g(b){var v=b.getSnapshot;b=b.value;try{var w=v();return!s(b,w)}catch{return!0}}function y(b,v){return v()}var p=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?y:f;return Cu.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:p,Cu}var Fm;function ax(){return Fm||(Fm=1,Nu.exports=tx()),Nu.exports}var nx=ax();const rx=ib.useInsertionEffect,sx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ub=sx?M.useLayoutEffect:M.useEffect,ox=rx||ub,qp=a=>{const r=M.useRef([a,(...s)=>r[0](...s)]).current;return ox(()=>{r[0]=a}),r[1]},Um=["popstate","pushState","replaceState","hashchange"];let oi=[];const Bm=()=>oi.forEach(a=>a()),ix=a=>(oi.push(a)===1&&Um.forEach(r=>addEventListener(r,Bm)),()=>{oi=oi.filter(r=>r!==a),oi.length||Um.forEach(r=>removeEventListener(r,Bm))}),pb=(a,r)=>nx.useSyncExternalStore(ix,a,r),zm=()=>location.search,lx=({ssrSearch:a}={})=>pb(zm,a!=null?()=>a:zm),Ym=()=>location.pathname,cx=({ssrPath:a}={})=>pb(Ym,a!=null?()=>a:Ym),dx=(a,{replace:r=!1,state:s=null}={})=>history[r?"replaceState":"pushState"](s,"",a),ux=a=>[cx(a),dx],Hm=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Hm]>"u"){for(const a of["pushState","replaceState"]){const r=history[a];history[a]=function(){const s=r.apply(this,arguments),o=new Event(a);return o.arguments=arguments,dispatchEvent(o),s}}Object.defineProperty(window,Hm,{value:!0})}const fb=(a="")=>a==="/"?"":a,px=(a,r)=>a[0]==="~"?a.slice(1):fb(r)+a,fx=(a,r)=>(a=Vm(fb(a)),r=Vm(r),!a||(r.toLowerCase()+"/").startsWith(a.toLowerCase()+"/")?r.slice(a.length)||"/":"~"+r),Vm=a=>{try{return a.includes("%")?decodeURI(a):a}catch{return a}},hb={hook:ux,searchHook:lx,parser:ex,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:a=>a,aroundNav:(a,r,s)=>a(r,s)},gb=M.createContext(hb),ic=()=>M.useContext(gb),hx={};M.createContext(hx);const Mp=a=>{const[r,s]=a.hook(a);return[fx(a.base,r),qp((o,l)=>a.aroundNav(s,px(o,a.base),l))]},mb=()=>Mp(ic()),gx=({children:a,...r})=>{const s=ic(),o=r.hook?hb:s;let l=o;if(r.ssrPath){const[g,y=r.ssrSearch??""]=r.ssrPath.split("?");g&&(r.ssrSearch=y,r.ssrPath=g)}r.hrefs=r.hrefs??r.hook?.hrefs,r.searchHook=r.searchHook??r.hook?.searchHook;let u=M.useRef(o),m=u.current,f=m;for(let g in o){const y=g==="base"?o[g]+(r[g]??""):r[g]??o[g];y!==f[g]&&(m===f&&(u.current=f={...f}),f[g]=y),(y!==o[g]||y!==l[g])&&(l=f)}return M.createElement(gb.Provider,{value:l},a)},ga=M.forwardRef((a,r)=>{const s=ic(),[o,l]=Mp(s),{to:u="",href:m=u,onClick:f,asChild:g,children:y,className:p,replace:b,state:v,transition:w,...R}=a;return R.onClick=qp(D=>{D.ctrlKey||D.metaKey||D.altKey||D.shiftKey||D.button!==0||(f?.(D),D.defaultPrevented||(D.preventDefault(),l(m,a)))}),R.href=s.hrefs(m[0]==="~"?m.slice(1):s.base+m,s),p!==void 0&&(R.className=p?.call?p(o===m):p),r&&(R.ref=r),g&&M.isValidElement(y)?M.cloneElement(y,R):M.createElement("a",R,y)}),mx=a=>{const{to:r,href:s=r}=a,o=ic(),[,l]=Mp(o),u=qp(()=>l(r||s,a)),{ssrContext:m}=o;return ub(()=>{u()},[]),m&&(m.redirectTo=r),null},yb=`To use an existing Clerk app, run:
npx clerk@latest link
npx clerk@latest env pull

For production keys, run:
npx clerk@latest env pull --instance prod`,bb="Or copy keys from https://dashboard.clerk.com/~/api-keys into your .env file.",Gm=`To create a new Clerk app, run:
npx clerk@latest init

'npx clerk@latest init' does not need a Clerk account and writes temporary dev keys.

${yb}

${bb}`,yx=`${yb}

${bb}`,bx=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:`The publishableKey passed to Clerk is invalid (key={{key}}, expected format: pk_test_... or pk_live_...).

${Gm}`,MissingPublishableKeyErrorMessage:`Clerk keys are missing from your environment.

${Gm}`,MissingSecretKeyErrorMessage:`Missing secretKey.

${yx}`,MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function vb({packageName:a,customMessages:r}){let s=a;function o(u,m){if(!m)return`${s}: ${u}`;let f=u;const g=u.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const y of g){const p=(m[y[1]]||"").toString();f=f.replace(`{{${y[1]}}}`,p)}return`${s}: ${f}`}const l={...bx,...r};return{setPackageName({packageName:u}){return typeof u=="string"&&(s=u),this},setMessages({customMessages:u}){return Object.assign(l,u||{}),this},throwInvalidPublishableKeyError(u){throw new Error(o(l.InvalidPublishableKeyErrorMessage,u))},throwInvalidProxyUrl(u){throw new Error(o(l.InvalidProxyUrlErrorMessage,u))},throwMissingPublishableKeyError(){throw new Error(o(l.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(o(l.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(u){throw new Error(o(l.MissingClerkProvider,u))},throw(u){throw new Error(o(u))}}}const vx=()=>{try{return!1}catch{}return!1},Ex=()=>{try{return!1}catch{}return!1},wx=()=>{try{return!0}catch{}return!1};var Xm=Object.prototype.hasOwnProperty;function Wm(a,r,s){for(s of a.keys())if(ci(s,r))return s}function ci(a,r){var s,o,l;if(a===r)return!0;if(a&&r&&(s=a.constructor)===r.constructor){if(s===Date)return a.getTime()===r.getTime();if(s===RegExp)return a.toString()===r.toString();if(s===Array){if((o=a.length)===r.length)for(;o--&&ci(a[o],r[o]););return o===-1}if(s===Set){if(a.size!==r.size)return!1;for(o of a)if(l=o,l&&typeof l=="object"&&(l=Wm(r,l),!l)||!r.has(l))return!1;return!0}if(s===Map){if(a.size!==r.size)return!1;for(o of a)if(l=o[0],l&&typeof l=="object"&&(l=Wm(r,l),!l)||!ci(o[1],r.get(l)))return!1;return!0}if(s===ArrayBuffer)a=new Uint8Array(a),r=new Uint8Array(r);else if(s===DataView){if((o=a.byteLength)===r.byteLength)for(;o--&&a.getInt8(o)===r.getInt8(o););return o===-1}if(ArrayBuffer.isView(a)){if((o=a.byteLength)===r.byteLength)for(;o--&&a[o]===r[o];);return o===-1}if(!s||typeof a=="object"){o=0;for(s in a)if(Xm.call(a,s)&&++o&&!Xm.call(r,s)||!(s in r)||!ci(a[s],r[s]))return!1;return Object.keys(r).length===o}}return a!==a&&r!==r}function xx(a,r){if(!a)throw typeof r=="string"?new Error(r):new Error(`${r.displayName} not found`)}const Qs=(a,r)=>{const{assertCtxFn:s=xx}={},o=re.createContext(void 0);return o.displayName=a,[o,()=>{const m=re.useContext(o);return s(m,`${a} not found`),m.value},()=>{const m=re.useContext(o);return m?m.value:{}}]},[Sx,Tx]=Qs("ClerkInstanceContext");Qs("InitialStateContext");re.createContext({});Qs("CheckoutContext");function Ax(a){if(!re.useContext(Sx)){if(typeof a=="function"){a();return}throw new Error(`${a} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}function Dx(a){const r=function(){};let s;return s=new Proxy(r,{get(o,l){if(l!=="then")return l==="toString"?()=>`[${a}]`:l===Symbol.toPrimitive?()=>0:s},apply(){return s},construct(){return s},has(){return!1},set(){return!1}}),s}Dx("ClerkMockQueryClient");typeof window<"u"?re.useLayoutEffect:re.useEffect;const Km=ci,Nx=a=>{const r=M.useRef(a);return M.useEffect(()=>{r.current=a},[a]),r.current},Va=(a,r,s)=>{const o=!!s,l=M.useRef(s);M.useEffect(()=>{l.current=s},[s]),M.useEffect(()=>{if(!o||!a)return()=>{};const u=(...m)=>{l.current&&l.current(...m)};return a.on(r,u),()=>{a.off(r,u)}},[o,r,a,l])},Eb=re.createContext(null);Eb.displayName="ElementsContext";const Cx=(a,r)=>{if(!a)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${r} in an <Elements> provider.`);return a},Zl=a=>a!==null&&typeof a=="object",Rx=(a,r,s)=>Zl(a)?Object.keys(a).reduce((o,l)=>{const u=!Zl(r)||!wb(a[l],r[l]);return s.includes(l)?(u&&console.warn(`Unsupported prop change: options.${l} is not a mutable property.`),o):u?{...o||{},[l]:a[l]}:o},null):null,Zm="[object Object]",wb=(a,r)=>{if(!Zl(a)||!Zl(r))return a===r;const s=Array.isArray(a);if(s!==Array.isArray(r))return!1;const o=Object.prototype.toString.call(a)===Zm;if(o!==(Object.prototype.toString.call(r)===Zm))return!1;if(!o&&!s)return a===r;const l=Object.keys(a),u=Object.keys(r);if(l.length!==u.length)return!1;const m={};for(let b=0;b<l.length;b+=1)m[l[b]]=!0;for(let b=0;b<u.length;b+=1)m[u[b]]=!0;const f=Object.keys(m);if(f.length!==l.length)return!1;const g=a,y=r,p=b=>wb(g[b],y[b]);return f.every(p)},Qm=a=>Cx(re.useContext(Eb),a),_x=a=>a.charAt(0).toUpperCase()+a.slice(1),Ix=(a,r)=>{const s=`${_x(a)}Element`,u=r?m=>{Qm(`mounts <${s}>`);const{id:f,className:g}=m;return re.createElement("div",{id:f,className:g})}:({id:m,className:f,fallback:g,options:y={},onBlur:p,onFocus:b,onReady:v,onChange:w,onEscape:R,onClick:D,onLoadError:S,onLoaderStart:T,onNetworksChange:L,onConfirm:_,onCancel:N,onShippingAddressChange:x,onShippingRateChange:O})=>{const C=Qm(`mounts <${s}>`),P="elements"in C?C.elements:null,[k,te]=re.useState(null),X=re.useRef(null),ae=re.useRef(null),[pe,oe]=M.useState(!1);Va(k,"blur",p),Va(k,"focus",b),Va(k,"escape",R),Va(k,"click",D),Va(k,"loaderror",S),Va(k,"loaderstart",T),Va(k,"networkschange",L),Va(k,"confirm",_),Va(k,"cancel",N),Va(k,"shippingaddresschange",x),Va(k,"shippingratechange",O),Va(k,"change",w);let ne;v&&(ne=()=>{oe(!0),v(k)}),Va(k,"ready",ne),re.useLayoutEffect(()=>{if(X.current===null&&ae.current!==null&&P){let Z=null;P&&(Z=P.create(a,y)),X.current=Z,te(Z),Z&&Z.mount(ae.current)}},[P,y]);const Y=Nx(y);return re.useEffect(()=>{if(!X.current)return;const Z=Rx(y,Y,["paymentRequest"]);Z&&"update"in X.current&&X.current.update(Z)},[y,Y]),re.useLayoutEffect(()=>()=>{if(X.current&&typeof X.current.destroy=="function")try{X.current.destroy(),X.current=null}catch{}},[]),re.createElement(re.Fragment,null,!pe&&g,re.createElement("div",{id:m,style:{height:pe?"unset":"0px",visibility:pe?"visible":"hidden"},className:f,ref:ae}))};return u.displayName=s,u.__elementType=a,u};Ix("payment",typeof window>"u");Qs("PaymentElementContext");Qs("StripeUtilsContext");const[vD,,Lx]=Qs("PortalProvider"),Px=()=>{const a=Lx();return a&&"getContainer"in a&&a.getContainer?a.getContainer:()=>null},$p=vb({packageName:"@clerk/react"});function kx(a){$p.setMessages(a).setPackageName(a)}const Ox=Tx,jx=a=>{Ax(()=>{$p.throwMissingClerkProviderError({source:a})})};var lc=ob();const qx=xi(lc),Mx=sc({__proto__:null,default:qx},[lc]),Ca=a=>{vx()&&console.error(`Clerk: ${a}`)},Jm=(a,...r)=>{const s={...a};for(const o of r)delete s[o];return s},$x=a=>`You've passed multiple children components to <${a}/>. You can only pass a single child component or text.`,Fx="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Ux="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Bx="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",zx="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",Yx=a=>`<${a} /> can only accept <${a}.Page /> and <${a}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,Hx=a=>`Missing props. <${a}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,Vx=a=>`Missing props. <${a}.Link /> component requires the following props: url, label and labelIcon.`,Gx="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Xx="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Wx="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",Kx="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",Zx="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",Qx="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",Jx="Missing props. <UserButton.Action /> component requires the following props: label.",Si=a=>r=>{try{return re.Children.only(a)}catch{const s=re.Children.toArray(a);return s.length===1&&re.isValidElement(s[0])?s[0]:$p.throw($x(r))}},Ti=(a,r)=>(a||(a=r),typeof a=="string"&&(a=re.createElement("button",null,a)),a),Ai=a=>(...r)=>{if(a&&typeof a=="function")return a(...r)},di=a=>{const[r,s]=M.useState(new Map),o=M.useRef(r),l=M.useRef(new Map),u=M.useRef(new Map);o.current=r,l.current=new Map(a.map(f=>[f.id,f.component]));const m=new Set(a.map(f=>f.id));return u.current.forEach((f,g)=>{m.has(g)||u.current.delete(g)}),a.map(f=>{const g=f.id,y=u.current.get(g);if(y)return y;const p=()=>{const v=o.current.get(g),w=l.current.get(g);return v?lc.createPortal(w,v):null},b={id:f.id,mount:v=>s(w=>new Map(w).set(g,v)),unmount:()=>s(v=>{const w=new Map(v);return w.set(g,null),w}),portal:p};return u.current.set(g,b),b})},Da=(a,r)=>!!a&&re.isValidElement(a)&&a?.type===r,xb=(a,r)=>Ab({children:a,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:Ni,PageComponent:Di,MenuItemsComponent:dc,componentName:"UserProfile"},r),Sb=(a,r)=>Ab({children:a,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:pc,PageComponent:uc,componentName:"OrganizationProfile"},r),Tb=a=>{const r=[],s=[pc,uc,dc,Di,Ni];return re.Children.forEach(a,o=>{s.some(l=>Da(o,l))||r.push(o)}),r},Ab=(a,r)=>{const{children:s,LinkComponent:o,PageComponent:l,MenuItemsComponent:u,reorderItemsLabels:m,componentName:f}=a,{allowForAnyChildren:g=!1}=r||{},y=[],p=new Map;re.Children.forEach(s,_=>{if(!Da(_,l)&&!Da(_,o)&&!Da(_,u)){_&&!g&&Ca(Yx(f));return}const{props:N}=_,{children:x,label:O,url:C,labelIcon:P}=N,k=_.key;if(Da(_,l))if(ty(N,m))y.push({label:O});else if(Ru(N))y.push({label:O,labelIcon:P,children:x,url:C,portalId:ey("page",N,k,p)});else{Ca(Hx(f));return}if(Da(_,o))if(_u(N))y.push({label:O,labelIcon:P,url:C,portalId:ey("link",N,k,p)});else{Ca(Vx(f));return}});const b=[],v=[],w=[];y.forEach((_,N)=>{if(Ru(_)){b.push({component:_.children,id:_.portalId||N}),v.push({component:_.labelIcon,id:_.portalId||N});return}_u(_)&&w.push({component:_.labelIcon,id:_.portalId||N})});const R=di(b),D=di(v),S=di(w),T=[],L=[];return y.forEach((_,N)=>{if(ty(_,m)){T.push({label:_.label});return}if(Ru(_)){const{portal:x,mount:O,unmount:C}=R.find(X=>X.id===(_.portalId||N)),{portal:P,mount:k,unmount:te}=D.find(X=>X.id===(_.portalId||N));T.push({label:_.label,url:_.url,mount:O,unmount:C,mountIcon:k,unmountIcon:te}),L.push({key:`content:${_.portalId||N}`,portal:x}),L.push({key:`label:${_.portalId||N}`,portal:P});return}if(_u(_)){const{portal:x,mount:O,unmount:C}=S.find(P=>P.id===(_.portalId||N));T.push({label:_.label,url:_.url,mountIcon:O,unmountIcon:C}),L.push({key:`label:${_.portalId||N}`,portal:x});return}}),{customPages:T,customPagesPortals:L}},ey=(a,r,s,o)=>{if(s!=null)return`${a}:key:${s}`;const l=`${a}:${r.label}:${r.url}`,u=o.get(l)??0;return o.set(l,u+1),`${l}:${u}`},ty=(a,r)=>{const{children:s,label:o,url:l,labelIcon:u}=a;return!s&&!l&&!u&&r.some(m=>m===o)},Ru=a=>{const{children:r,label:s,url:o,labelIcon:l}=a;return!!r&&!!o&&!!l&&!!s},_u=a=>{const{children:r,label:s,url:o,labelIcon:l}=a;return!r&&!!o&&!!l&&!!s},e1=(a,r)=>t1({children:a,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:dc,MenuActionComponent:Nb,MenuLinkComponent:Cb,UserProfileLinkComponent:Ni,UserProfilePageComponent:Di,allowForAnyChildren:r?.allowForAnyChildren??!1}),t1=({children:a,MenuItemsComponent:r,MenuActionComponent:s,MenuLinkComponent:o,UserProfileLinkComponent:l,UserProfilePageComponent:u,reorderItemsLabels:m,allowForAnyChildren:f=!1})=>{const g=[],y=[],p=[],b=new Map;re.Children.forEach(a,S=>{if(!Da(S,r)&&!Da(S,l)&&!Da(S,u)){S&&!f&&Ca(Gx);return}if(Da(S,l)||Da(S,u))return;const{props:T}=S;re.Children.forEach(T.children,L=>{if(!Da(L,s)&&!Da(L,o)){L&&Ca(Xx);return}const{props:_}=L,N=L.key,{label:x,labelIcon:O,href:C,onClick:P,open:k}=_;if(Da(L,s))if(ay(_,m))g.push({label:x});else if(Lu(_)){const te={label:x,labelIcon:O};if(P!==void 0)g.push({...te,onClick:P,portalId:Iu("action",_,N,b)});else if(k!==void 0)g.push({...te,open:k.startsWith("/")?k:`/${k}`,portalId:Iu("action",_,N,b)});else{Ca("Custom menu item must have either onClick or open property");return}}else{Ca(Jx);return}if(Da(L,o))if(Pu(_))g.push({label:x,labelIcon:O,href:C,portalId:Iu("link",_,N,b)});else{Ca(Qx);return}})});const v=[],w=[];g.forEach((S,T)=>{Lu(S)&&v.push({component:S.labelIcon,id:S.portalId||T}),Pu(S)&&w.push({component:S.labelIcon,id:S.portalId||T})});const R=di(v),D=di(w);return g.forEach((S,T)=>{if(ay(S,m)&&y.push({label:S.label}),Lu(S)){const{portal:L,mount:_,unmount:N}=R.find(O=>O.id===(S.portalId||T)),x={label:S.label,mountIcon:_,unmountIcon:N};"onClick"in S?x.onClick=S.onClick:"open"in S&&(x.open=S.open),y.push(x),p.push({key:`icon:${S.portalId||T}`,portal:L})}if(Pu(S)){const{portal:L,mount:_,unmount:N}=D.find(x=>x.id===(S.portalId||T));y.push({label:S.label,href:S.href,mountIcon:_,unmountIcon:N}),p.push({key:`icon:${S.portalId||T}`,portal:L})}}),{customMenuItems:y,customMenuItemsPortals:p}},Iu=(a,r,s,o)=>{if(s!=null)return`${a}:key:${s}`;const l=r.href||r.open||"",u=`${a}:${r.label}:${l}`,m=o.get(u)??0;return o.set(u,m+1),`${u}:${m}`},ay=(a,r)=>{const{children:s,label:o,onClick:l,labelIcon:u}=a;return!s&&!l&&!u&&r.some(m=>m===o)},Lu=a=>{const{label:r,labelIcon:s,onClick:o,open:l}=a;return!!s&&!!r&&(typeof o=="function"||typeof l=="string")},Pu=a=>{const{label:r,href:s,labelIcon:o}=a;return!!s&&!!o&&!!r},a1=a=>{const r=a?.isReady;return s=>new Promise((o,l)=>{const{root:u=document?.body,selector:m,timeout:f=0}=s;if(!u){l(new Error("No root element provided"));return}let g=u;if(m&&(g=u?.querySelector(m)),r(g,m)){o();return}const y=new MutationObserver(p=>{for(const b of p)if(!g&&m&&(g=u?.querySelector(m)),(a.childList&&b.type==="childList"||a.attributes&&b.type==="attributes")&&r(g,m)){y.disconnect(),o();return}});y.observe(u,a),f>0&&setTimeout(()=>{y.disconnect(),l(new Error(`Timeout waiting for ${m}`))},f)})},n1=a1({childList:!0,subtree:!0,isReady:(a,r)=>!!a?.childElementCount&&a?.matches?.(r)&&a.childElementCount>0});function la(a,r){const s=M.useRef(),[o,l]=M.useState("rendering");return M.useEffect(()=>{if(!a)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!s.current){const u=`[data-clerk-component="${a}"]`,m=r?.selector;s.current=n1({selector:m?u+m:u}).then(()=>{l("rendered")}).catch(()=>{l("error")})}},[a,r?.selector]),o}const Ml=a=>"mount"in a,ny=a=>"open"in a,ry=a=>a?.map(({mountIcon:r,unmountIcon:s,...o})=>o);var Kt=class extends re.PureComponent{constructor(...a){super(...a),this.rootRef=re.createRef()}componentDidUpdate(a){if(!Ml(a)||!Ml(this.props))return;const r=Jm(a.props||{},"customPages","customMenuItems","children"),s=Jm(this.props.props||{},"customPages","customMenuItems","children"),o=a.props?.customPages?.length!==this.props.props?.customPages?.length,l=a.props?.customMenuItems?.length!==this.props.props?.customMenuItems?.length,u=ry(a.props?.customMenuItems),m=ry(this.props.props?.customMenuItems);(!Km(r,s)||!Km(u,m)||o||l)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(Ml(this.props)&&this.props.mount(this.rootRef.current,this.props.props),ny(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(Ml(this.props)&&this.props.unmount(this.rootRef.current),ny(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:a=!1}=this.props,r={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return re.createElement(re.Fragment,null,!a&&re.createElement("div",r),this.props.children)}};const ct=(a,r)=>{const s=(typeof r=="string"?r:r?.component)||a.displayName||a.name||"Component";a.displayName=s;const o=typeof r=="string"?void 0:r,l=u=>{jx(s||"withClerk");const m=Ox(),f=Px();return!m.loaded&&!o?.renderWhileLoading?null:re.createElement(a,{getContainer:f,...u,component:s,clerk:m})};return l.displayName=`withClerk(${s})`,l},cc=a=>re.createElement(re.Fragment,null,a?.customPagesPortals?.map(({key:r,portal:s})=>M.createElement(s,{key:r})),a?.customMenuItemsPortals?.map(({key:r,portal:s})=>M.createElement(s,{key:r})));ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountSignIn,unmount:a.unmountSignIn,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"SignIn",renderWhileLoading:!0});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountSignUp,unmount:a.unmountSignUp,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"SignUp",renderWhileLoading:!0});function Di({children:a}){return Ca(Fx),re.createElement(re.Fragment,null,a)}function Ni({children:a}){return Ca(Ux),re.createElement(re.Fragment,null,a)}const r1=ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:f}=xb(o.children);return re.createElement(re.Fragment,null,l&&s,re.createElement(Kt,{component:r,mount:a.mountUserProfile,unmount:a.unmountUserProfile,updateProps:a.__internal_updateProps,props:{...o,customPages:m},rootProps:u},re.createElement(cc,{customPagesPortals:f})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(r1,{Page:Di,Link:Ni});const Db=M.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),s1=ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:f}=xb(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),g={...o.userProfileProps,customPages:m},{customMenuItems:y,customMenuItemsPortals:p}=e1(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),b=Tb(o.children),v={mount:a.mountUserButton,unmount:a.unmountUserButton,updateProps:a.__internal_updateProps,props:{...o,userProfileProps:g,customMenuItems:y}},w={customPagesPortals:f,customMenuItemsPortals:p};return re.createElement(Db.Provider,{value:v},l&&s,a.loaded&&re.createElement(Kt,{component:r,...v,hideRootHtmlElement:!!o.__experimental_asProvider,rootProps:u},o.__experimental_asProvider?b:null,re.createElement(cc,w)))},{component:"UserButton",renderWhileLoading:!0});function dc({children:a}){return Ca(Wx),re.createElement(re.Fragment,null,a)}function Nb({children:a}){return Ca(Kx),re.createElement(re.Fragment,null,a)}function Cb({children:a}){return Ca(Zx),re.createElement(re.Fragment,null,a)}function o1(a){const r=M.useContext(Db),s={...r,props:{...r.props,...a}};return re.createElement(Kt,s)}Object.assign(s1,{UserProfilePage:Di,UserProfileLink:Ni,MenuItems:dc,Action:Nb,Link:Cb,__experimental_Outlet:o1});function uc({children:a}){return Ca(Bx),re.createElement(re.Fragment,null,a)}function pc({children:a}){return Ca(zx),re.createElement(re.Fragment,null,a)}const i1=ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:f}=Sb(o.children);return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountOrganizationProfile,unmount:a.unmountOrganizationProfile,updateProps:a.__internal_updateProps,props:{...o,customPages:m},rootProps:u},re.createElement(cc,{customPagesPortals:f})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(i1,{Page:uc,Link:pc});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountCreateOrganization,unmount:a.unmountCreateOrganization,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"CreateOrganization",renderWhileLoading:!0});const Rb=M.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),l1=ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:m,customPagesPortals:f}=Sb(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),g={...o.organizationProfileProps,customPages:m},y=Tb(o.children),p={mount:a.mountOrganizationSwitcher,unmount:a.unmountOrganizationSwitcher,updateProps:a.__internal_updateProps,props:{...o,organizationProfileProps:g},rootProps:u,component:r};return a.__experimental_prefetchOrganizationSwitcher(),re.createElement(Rb.Provider,{value:p},re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{...p,hideRootHtmlElement:!!o.__experimental_asProvider},o.__experimental_asProvider?y:null,re.createElement(cc,{customPagesPortals:f}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function c1(a){const r=M.useContext(Rb),s={...r,props:{...r.props,...a}};return re.createElement(Kt,s)}Object.assign(l1,{OrganizationProfilePage:uc,OrganizationProfileLink:pc,__experimental_Outlet:c1});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountOrganizationList,unmount:a.unmountOrganizationList,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"OrganizationList",renderWhileLoading:!0});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,open:a.openGoogleOneTap,close:a.closeGoogleOneTap,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"GoogleOneTap",renderWhileLoading:!0});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountWaitlist,unmount:a.unmountWaitlist,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"Waitlist",renderWhileLoading:!0});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r,{selector:'[data-component-status="ready"]'})==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountPricingTable,unmount:a.unmountPricingTable,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"PricingTable",renderWhileLoading:!0});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountAPIKeys,unmount:a.unmountAPIKeys,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"ApiKeys",renderWhileLoading:!0});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.__internal_mountOAuthConsent,unmount:a.__internal_unmountOAuthConsent,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"OAuthConsent",renderWhileLoading:!0});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.__internal_mountOAuthDeviceVerification,unmount:a.__internal_unmountOAuthDeviceVerification,updateProps:m=>{a.__internal_updateProps(m)},props:o,rootProps:u}))},{component:"OAuthDeviceVerification",renderWhileLoading:!0});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountUserAvatar,unmount:a.unmountUserAvatar,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"UserAvatar",renderWhileLoading:!0});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountTaskChooseOrganization,unmount:a.unmountTaskChooseOrganization,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountTaskResetPassword,unmount:a.unmountTaskResetPassword,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"TaskResetPassword",renderWhileLoading:!0});ct(({clerk:a,component:r,fallback:s,...o})=>{const l=la(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Kt,{component:r,mount:a.mountTaskSetupMFA,unmount:a.unmountTaskSetupMFA,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"TaskSetupMFA",renderWhileLoading:!0});const d1=vb({packageName:"@clerk/shared"});function u1(a){d1.setPackageName({packageName:a})}const sy=new Set,fc=(a,r,s)=>{const o=Ex()||wx(),l=a;sy.has(l)||o||(sy.add(l),console.warn(`Clerk - DEPRECATION WARNING: "${a}" is deprecated and will be removed in the next major release.
${r}`))};function p1(a){const r=a.match(/^(\d+)\.(\d+)\.(\d+)/);if(!r)return null;const[,s,o,l]=r;return{major:parseInt(s,10),minor:parseInt(o,10),patch:parseInt(l,10)}}function f1(a,r){const{major:s,minor:o,patch:l}=a;return r.some(([u,m,f,g])=>s!==u?!1:f===-1?o>m||o===m&&l>=g:o===f&&l>=g)}function h1(a,r){const s=p1(a);return s?f1(s,r):!1}ct(({clerk:a,...r})=>{const{client:s,session:o}=a,l=(s.signedInSessions?.length??0)>0;return re.useEffect(()=>{o===null&&l?a.redirectToAfterSignOut():a.redirectToSignIn(r)},[]),null},"RedirectToSignIn");ct(({clerk:a,...r})=>(re.useEffect(()=>{a.redirectToSignUp(r)},[]),null),"RedirectToSignUp");ct(({clerk:a,...r})=>(re.useEffect(()=>{a.redirectToTasks(r)},[]),null),"RedirectToTasks");ct(({clerk:a})=>(re.useEffect(()=>{fc("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),a.redirectToUserProfile()},[]),null),"RedirectToUserProfile");ct(({clerk:a})=>(re.useEffect(()=>{fc("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),a.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");ct(({clerk:a})=>(re.useEffect(()=>{fc("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),a.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");ct(({clerk:a,...r})=>(re.useEffect(()=>{a.handleRedirectCallback(r)},[]),null),"AuthenticateWithRedirectCallback");typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);function g1(){try{return h1(re.version,[[18,0,-1,0],[19,0,0,3],[19,1,1,4],[19,2,2,3],[19,3,3,0]])}catch{return!1}}g1();typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);if(globalThis.__clerkSharedModules){const a=globalThis.__clerkSharedModules.react?.version;a&&a!==M.version&&console.warn(`[@clerk/ui/register] React version mismatch detected. Already registered: ${a}, current import: ${M.version}. This may cause issues with the shared @clerk/ui variant.`)}else globalThis.__clerkSharedModules={react:ib,"react-dom":Mx,"react-dom/client":KE,"react/jsx-runtime":BE};ct(({clerk:a,children:r,...s})=>{const{appearance:o,getContainer:l,component:u,...m}=s;r=Ti(r,"Invite members");const f=Si(r)("InviteMembersButton"),g=()=>a.openInviteMembers({appearance:o,getContainer:l}),p={...m,onClick:async b=>(f&&typeof f=="object"&&"props"in f&&await Ai(f.props.onClick)(b),g())};return re.cloneElement(f,p)},{component:"InviteMembersButton",renderWhileLoading:!0});ct(({clerk:a,children:r,...s})=>{const{appearance:o,getContainer:l,component:u,signUpFallbackRedirectUrl:m,forceRedirectUrl:f,fallbackRedirectUrl:g,signUpForceRedirectUrl:y,mode:p,initialValues:b,withSignUp:v,oauthFlow:w,...R}=s;r=Ti(r,"Sign in");const D=Si(r)("SignInButton"),S=()=>{const _={forceRedirectUrl:f,fallbackRedirectUrl:g,signUpFallbackRedirectUrl:m,signUpForceRedirectUrl:y,initialValues:b,withSignUp:v,oauthFlow:w};return p==="modal"?a.openSignIn({..._,appearance:o,getContainer:l}):a.redirectToSignIn({..._,signInFallbackRedirectUrl:g,signInForceRedirectUrl:f})},L={...R,onClick:async _=>(D&&typeof D=="object"&&"props"in D&&await Ai(D.props.onClick)(_),S())};return re.cloneElement(D,L)},{component:"SignInButton",renderWhileLoading:!0});ct(({clerk:a,children:r,...s})=>{const{redirectUrl:o,getContainer:l,component:u,...m}=s;r=Ti(r,"Sign in with Metamask");const f=Si(r)("SignInWithMetamaskButton"),g=async()=>{async function b(){await a.authenticateWithMetamask({redirectUrl:o||void 0})}b()},p={...m,onClick:async b=>(await Ai(f.props.onClick)(b),g())};return re.cloneElement(f,p)},{component:"SignInWithMetamask",renderWhileLoading:!0});ct(({clerk:a,children:r,...s})=>{const{redirectUrl:o="/",sessionId:l,signOutOptions:u,getContainer:m,component:f,...g}=s;u&&fc("SignOutButton `signOutOptions`","Use the `redirectUrl` and `sessionId` props directly instead."),r=Ti(r,"Sign out");const y=Si(r)("SignOutButton"),p=()=>a.signOut({redirectUrl:o,...l!==void 0&&{sessionId:l},...u}),v={...g,onClick:async w=>(await Ai(y.props.onClick)(w),p())};return re.cloneElement(y,v)},{component:"SignOutButton",renderWhileLoading:!0});ct(({clerk:a,children:r,...s})=>{const{appearance:o,unsafeMetadata:l,getContainer:u,component:m,fallbackRedirectUrl:f,forceRedirectUrl:g,signInFallbackRedirectUrl:y,signInForceRedirectUrl:p,mode:b,initialValues:v,oauthFlow:w,...R}=s;r=Ti(r,"Sign up");const D=Si(r)("SignUpButton"),S=()=>{const _={fallbackRedirectUrl:f,forceRedirectUrl:g,signInFallbackRedirectUrl:y,signInForceRedirectUrl:p,initialValues:v,oauthFlow:w};return b==="modal"?a.openSignUp({..._,appearance:o,unsafeMetadata:l,getContainer:u}):a.redirectToSignUp({..._,signUpFallbackRedirectUrl:f,signUpForceRedirectUrl:g})},L={...R,onClick:async _=>(D&&typeof D=="object"&&"props"in D&&await Ai(D.props.onClick)(_),S())};return re.cloneElement(D,L)},{component:"SignUpButton",renderWhileLoading:!0});kx({packageName:"@clerk/react"});u1("@clerk/react");var ku={exports:{}};const Js=a=>({...a,__type:"prebuilt_appearance"}),m1=Object.freeze(Object.defineProperty({__proto__:null,experimental_createTheme:Js},Symbol.toStringTag,{value:"Module"})),y1=sb(m1),_b=Js({name:"dark",variables:{colorBackground:"#212126",colorNeutral:"white",colorPrimary:"#ffffff",colorPrimaryForeground:"black",colorForeground:"white",colorInputForeground:"white",colorInput:"#26262B"},elements:{providerIcon__apple:{filter:"invert(1)"},providerIcon__github:{filter:"invert(1)"},providerIcon__okx_wallet:{filter:"invert(1)"},providerIcon__vercel:{filter:"invert(1)"},activeDeviceIcon:{"--cl-chassis-bottom":"#d2d2d2","--cl-chassis-back":"#e6e6e6","--cl-chassis-screen":"#e6e6e6","--cl-screen":"#111111"}}}),b1=Js({name:"shadesOfPurple",baseTheme:_b,variables:{colorBackground:"#3f3c77",colorPrimary:"#f8d80d",colorPrimaryForeground:"#38375f",colorInputForeground:"#a1fdfe",colorShimmer:"rgba(161,253,254,0.36)"}}),Tr={boxShadow:"3px 3px 0px #000",border:"2px solid #000","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:active":{boxShadow:"2px 2px 0px #000",transform:"translate(1px)"}},Kr={boxShadow:"3px 3px 0px #000",border:"2px solid #000"},v1=Js({name:"neobrutalism",simpleStyles:!0,variables:{colorPrimary:"#DF1B1B",colorShimmer:"rgba(255,255,255,0.64)",fontWeight:{normal:500,medium:600,bold:700}},elements:{cardBox:{boxShadow:"7px 7px 0px #000",border:"3px solid #000"},card:{borderRadius:"0"},headerSubtitle:{color:"#212126"},alternativeMethodsBlockButton:Tr,socialButtonsIconButton:{...Tr},selectButton:{...Tr,...Kr,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"}},socialButtonsBlockButton:{...Tr,color:"#212126"},profileSectionPrimaryButton:Tr,profileSectionItem:{color:"#212126"},avatarImageActionsUpload:Tr,menuButton:Kr,menuList:Kr,formButtonPrimary:Tr,navbarButton:Tr,formFieldAction:{fontWeight:"700"},formFieldInput:{...Kr,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:hover":{...Kr,transform:"scale(1.01)"}},table:Kr,tableHead:{color:"#212126"},dividerLine:{background:"#000"},dividerText:{fontWeight:"700",color:"#212126"},footer:{background:"#fff","& div":{color:"#212126"}},footerActionText:{color:"#212126"},footerActionLink:{fontWeight:"700",borderBottom:"3px solid","&:focus":{boxShadow:"none"}},actionCard:{...Kr},badge:{border:"1px solid #000",background:"#fff",color:"#212126"}}}),E1=Js({name:"shadcn",cssLayerName:"components",variables:{colorBackground:"var(--card)",colorDanger:"var(--destructive)",colorForeground:"var(--card-foreground)",colorInput:"var(--input)",colorInputForeground:"var(--card-foreground)",colorModalBackdrop:"var(--color-black)",colorMuted:"var(--muted)",colorMutedForeground:"var(--muted-foreground)",colorNeutral:"var(--foreground)",colorPrimary:"var(--primary)",colorPrimaryForeground:"var(--primary-foreground)",colorRing:"var(--ring)",fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",semibold:"var(--font-weight-semibold)",bold:"var(--font-weight-semibold)"}},elements:{input:"bg-transparent dark:bg-input/30",cardBox:"shadow-sm border",popoverBox:"shadow-sm border",button:{'&[data-variant="solid"]::after':{display:"none"}},providerIcon__apple:"dark:invert",providerIcon__github:"dark:invert",providerIcon__okx_wallet:"dark:invert",providerIcon__vercel:"dark:invert"}}),w1=Js({name:"simple",simpleStyles:!0}),x1=Object.freeze(Object.defineProperty({__proto__:null,dark:_b,experimental__simple:w1,neobrutalism:v1,shadcn:E1,shadesOfPurple:b1},Symbol.toStringTag,{value:"Module"})),S1=sb(x1);var oy;function T1(){return oy||(oy=1,(function(a){var r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,u=(y,p,b,v)=>{if(p&&typeof p=="object"||typeof p=="function")for(let w of o(p))!l.call(y,w)&&w!==b&&r(y,w,{get:()=>p[w],enumerable:!(v=s(p,w))||v.enumerable});return y},m=(y,p,b)=>(u(y,p,"default"),b&&u(b,p,"default")),f=y=>u(r({},"__esModule",{value:!0}),y),g={};a.exports=f(g),m(g,y1,a.exports),m(g,S1,a.exports)})(ku)),ku.exports}T1();function iy(a){if(a instanceof Error)return a;if(typeof a=="string")return new Error(a);try{return new Error(JSON.stringify(a))}catch{return new Error(String(a))}}function A1({error:a,resetError:r}){return c.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50 p-6",children:c.jsxs("div",{className:"max-w-lg w-full text-center",children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Something went wrong"}),c.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"This part of the app hit an error. The rest of the app is still running."}),null,c.jsx("button",{type:"button",onClick:r,className:"mt-4 rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700",children:"Try again"})]})})}class D1 extends M.Component{state={error:null};static getDerivedStateFromError(r){return{error:iy(r)}}componentDidCatch(r,s){console.error("ErrorBoundary caught an error:",iy(r),s.componentStack)}componentDidUpdate(r){this.state.error!==null&&r.resetKey!==this.props.resetKey&&this.resetError()}resetError=()=>{this.setState({error:null})};render(){const{error:r}=this.state;if(r===null)return this.props.children;const s=this.props.FallbackComponent??A1;return c.jsx(s,{error:r,resetError:this.resetError})}}function N1({showLocalChip:a=!0}){const[r,s]=M.useState(""),[,o]=mb(),l=u=>{u.preventDefault(),r&&o(`/workspace/${r}`)};return c.jsxs("main",{className:"chooser-page",children:[c.jsxs("header",{className:"chooser-top",children:[c.jsxs(ga,{href:"/",className:"studio-wordmark","aria-label":"Mapping Studio home","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),a&&c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Browser-local workspace"]})]}),c.jsxs("section",{className:"chooser-content","aria-labelledby":"chooser-title",children:[c.jsxs("div",{className:"chooser-intro",children:[c.jsx("div",{className:"eyebrow",children:"Engineering workspace"}),c.jsx("h1",{id:"chooser-title",children:"Choose a discipline"}),c.jsx("p",{children:"Keep drawing groups organized and traceable on this device."})]}),c.jsxs("form",{className:"discipline-picker",onSubmit:l,"data-testid":"form-discipline-picker",children:[c.jsxs("div",{className:"discipline-field",children:[c.jsx("label",{htmlFor:"discipline-select",children:"Drawing type"}),c.jsxs("div",{className:"discipline-select-control",children:[c.jsxs("select",{id:"discipline-select",value:r,onChange:u=>s(u.target.value),"aria-label":"Drawing type","data-testid":"select-discipline",children:[c.jsx("option",{value:"",disabled:!0,children:"Select PFD or P&ID"}),c.jsx("option",{value:"pfd",children:"PFD — Process Flow Diagram"}),c.jsx("option",{value:"pid",children:"P&ID — Piping and Instrumentation Diagram"})]}),c.jsx(Rr,{size:17,"aria-hidden":"true"})]})]}),c.jsxs("button",{className:"btn primary discipline-submit",type:"submit",disabled:!r,"data-testid":"button-open-discipline",children:["Open workspace ",c.jsx(iw,{size:16,"aria-hidden":"true"})]})]}),c.jsxs("div",{className:"chooser-foot",children:[c.jsx(Zn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Stored in this browser only."})," Nothing is uploaded or shared."]})]})]}),c.jsxs("footer",{className:"chooser-footer",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:"PDFs and project data stay in this browser"}),c.jsx("span",{children:"© 2026 gaurav.cbiindia"})]})]})}function C1(){return c.jsx("main",{className:"chooser-page not-found",children:c.jsxs("div",{className:"not-found-card",children:[c.jsx("div",{className:"eyebrow",children:"Page not found"}),c.jsx("h1",{children:"This workspace does not exist."}),c.jsx(ga,{href:"/",className:"btn primary","data-testid":"link-not-found-home",children:"Return to disciplines"})]})})}const Fp="pid-mapping-studio:hierarchies:v2",Ib="pid-mapping-studio:hierarchies:v1",Ql=80,R1=128,_1=5e3,I1=64;class ui extends Error{rawValue;constructor(r,s=null){super(r),this.name="HierarchyLoadError",this.rawValue=s}}function ep(){return{version:2,pfd:[],pid:[]}}function Up(a,r){return Object.keys(a).length===r.length&&r.every(o=>Object.prototype.hasOwnProperty.call(a,o))}function Jl(a,r,s=new Set){let o=0;const l=(u,m)=>{if(m>I1)return!1;for(const f of u){if(!f||typeof f!="object"||Array.isArray(f))return!1;const g=f;if(!Up(g,r?["id","name","kind","expanded","children"]:["id","name","expanded","children"])||typeof g.id!="string"||g.id.length===0||g.id.length>R1||typeof g.name!="string"||g.name.trim().length===0||g.name!==g.name.trim()||g.name.length>Ql||r&&!["technology","projects","proposals","project","proposal","client","legacy"].includes(String(g.kind))||typeof g.expanded!="boolean"||!Array.isArray(g.children)||s.has(g.id)||(s.add(g.id),o+=1,o>_1||!l(g.children,m+1)))return!1}return!0};return l(a,0)}function ii(a,r){if(a.kind==="legacy")return(r===null||r==="legacy")&&a.children.every(o=>ii(o,"legacy"));const s={technology:null,projects:"technology",proposals:"technology",project:"projects",proposal:"proposals",client:"project"};return a.kind==="client"&&r!=="project"&&r!=="proposal"||a.kind!=="client"&&s[a.kind]!==r?!1:a.kind==="technology"?a.children.filter(o=>o.kind==="projects").length===1&&a.children.filter(o=>o.kind==="proposals").length===1&&a.children.every(o=>ii(o,"technology")):a.kind==="projects"||a.kind==="proposals"?a.children.every(o=>ii(o,a.kind)):a.kind==="project"||a.kind==="proposal"?a.children.every(o=>ii(o,a.kind)):a.children.length===0}function Lb(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!Up(r,["version","pfd","pid"])||r.version!==2||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const s=new Set;return Jl(r.pfd,!0,s)&&Jl(r.pid,!0,s)&&[...r.pfd,...r.pid].every(o=>ii(o,null))}function L1(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!Up(r,["version","pfd","pid"])||r.version!==1||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const s=new Set;return Jl(r.pfd,!1,s)&&Jl(r.pid,!1,s)}function tp(a){return a.map(r=>({id:r.id,name:r.name,kind:"legacy",expanded:r.expanded,children:tp(r.children)}))}function P1(a){return{version:2,pfd:tp(a.pfd),pid:tp(a.pid)}}function k1(){let a;try{a=window.localStorage.getItem(Fp),a===null&&(a=window.localStorage.getItem(Ib))}catch{throw new ui("Saved groups could not be read from browser storage.")}if(a===null)return ep();let r;try{r=JSON.parse(a)}catch{throw new ui("Saved group data is not valid JSON.",a)}if(Lb(r))return r;if(L1(r))return P1(r);throw new ui("Saved group data is malformed or uses an unsupported format.",a)}function O1(a){if(!Lb(a))throw new Error("Groups could not be saved because the hierarchy is invalid.");window.localStorage.setItem(Fp,JSON.stringify(a))}function Hl(a,r,s){return a.map(o=>o.id===r?s(o):{...o,children:Hl(o.children,r,s)})}function Pb(a,r){return a.filter(s=>s.id!==r).map(s=>({...s,children:Pb(s.children,r)}))}function kb(a,r){return r?a.id===r||a.children.some(s=>kb(s,r)):!1}function ap(a){return a.reduce((r,s)=>r+1+ap(s.children),0)}function np(a,r){if(!r)return null;for(const s of a){if(s.id===r)return s;const o=np(s.children,r);if(o)return o}return null}function Ob(a,r,s){return a.flatMap(o=>{const l=r?`${r} / ${o.name}`:o.name;return[...s(o)?[{id:o.id,label:l}]:[],...Ob(o.children,l,s)]})}function jb(a){return Ob(a,"",r=>r.kind==="client"||r.kind==="legacy")}const j1="modulepreload",q1=function(a){return"/pid-mapping-studio-app/"+a},ly={},pn=function(r,s,o){let l=Promise.resolve();if(s&&s.length>0){let g=function(y){return Promise.all(y.map(p=>Promise.resolve(p).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),f=m?.nonce||m?.getAttribute("nonce");l=g(s.map(y=>{if(y=q1(y),y in ly)return;ly[y]=!0;const p=y.endsWith(".css"),b=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${b}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":j1,p||(v.as="script"),v.crossOrigin="",v.href=y,f&&v.setAttribute("nonce",f),document.head.appendChild(v),p)return new Promise((w,R)=>{v.addEventListener("load",w),v.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${y}`)))})}))}function u(m){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=m,window.dispatchEvent(f),!f.defaultPrevented)throw m}return l.then(m=>{for(const f of m||[])f.status==="rejected"&&u(f.reason);return r().catch(u)})};async function M1(){const[a,r]=await Promise.all([pn(()=>import("./pdf-TYrZqVzP.js"),[]),pn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);return a.GlobalWorkerOptions.workerSrc=r.default,a}function $1({fileId:a,alias:r,pageCount:s,page:o,onPageChange:l,loadBytes:u,markers:m=[],onMarkerClick:f}){const g=M.useRef(null),y=M.useRef(null),[p,b]=M.useState(0),[v,w]=M.useState("loading"),[R,D]=M.useState(0),S=M.useRef(u);return S.current=u,M.useEffect(()=>{const T=y.current;if(!T)return;b(T.clientWidth);const L=new ResizeObserver(()=>b(Math.round(T.clientWidth/24)*24));return L.observe(T),()=>L.disconnect()},[]),M.useEffect(()=>{if(!p)return;let T=!1,L=null,_=null;return w("loading"),(async()=>{try{const[N,x]=await Promise.all([M1(),S.current(a)]);if(T)return;_=N.getDocument({data:new Uint8Array(x.slice(0))});const O=await _.promise;if(T)return;const C=await O.getPage(Math.min(Math.max(o,1),O.numPages)),P=C.getViewport({scale:1}),k=Math.min(window.devicePixelRatio||1,2),te=p/P.width*k,X=C.getViewport({scale:te}),ae=g.current;if(!ae||T)return;ae.width=Math.floor(X.width),ae.height=Math.floor(X.height),ae.style.width="100%";const pe=C.render({canvas:ae,canvasContext:ae.getContext("2d"),viewport:X});L=pe,await pe.promise,T||w("ready")}catch(N){if(T||N?.name==="RenderingCancelledException")return;w("error")}})(),()=>{T=!0,L?.cancel(),_?.destroy().catch(()=>{})}},[a,o,p,R]),c.jsxs("div",{className:"ppv","data-testid":"panel-source-preview",children:[c.jsxs("div",{className:"ppv-bar",children:[c.jsx("span",{className:"ppv-label","data-testid":"text-preview-label",children:"Original source PDF · not generated CAD"}),c.jsxs("div",{className:"ppv-nav",children:[c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Previous page",disabled:o<=1,onClick:()=>l(o-1),"data-testid":"button-preview-prev",children:c.jsx(db,{size:15})}),c.jsxs("span",{"data-testid":"text-preview-page","aria-live":"polite",children:[r," · page ",o," of ",s]}),c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Next page",disabled:o>=s,onClick:()=>l(o+1),"data-testid":"button-preview-next",children:c.jsx(Op,{size:15})})]})]}),c.jsxs("div",{className:"ppv-stage",ref:y,children:[c.jsxs("div",{className:"ppv-canvas-wrap",style:{visibility:v==="ready"?"visible":"hidden"},children:[c.jsx("canvas",{ref:g,"aria-label":`Original source page ${o} of ${r}`,"data-testid":"canvas-source-preview"}),v==="ready"&&m.length>0&&c.jsx("div",{className:"ppv-markers","aria-label":"Extracted tag source locations",children:m.map((T,L)=>c.jsx("button",{className:"ppv-marker",type:"button",style:{left:`${T.location.x*100}%`,top:`${T.location.y*100}%`,width:`${Math.max(T.location.width*100,1.1)}%`,height:`${Math.max(T.location.height*100,1.2)}%`},"aria-label":`OCR location for ${T.label}; verify against the PDF`,title:`${T.label} · OCR candidate location`,onClick:()=>f?.(T.id),"data-testid":`marker-source-${T.id}-${L}`,children:c.jsx("span",{children:T.label})},`${T.id}-${T.location.pageNumber}-${L}`))})]}),m.length>0&&c.jsx("div",{className:"ppv-marker-note",role:"note",children:"Red boxes show OCR candidate locations. Confirm each tag against the original PDF."}),v==="loading"&&c.jsxs("div",{className:"ppv-overlay",role:"status","data-testid":"status-preview-loading",children:[c.jsx(ka,{size:18,className:"pdf-spin"})," Rendering page"]}),v==="error"&&c.jsxs("div",{className:"ppv-overlay ppv-error",role:"alert","data-testid":"status-preview-error",children:[c.jsx(Ir,{size:18})," This page could not be shown.",c.jsx("button",{type:"button",className:"btn",onClick:()=>D(T=>T+1),"data-testid":"button-preview-retry",children:"Try again"})]})]})]})}var Ht=Uint8Array,Ga=Uint16Array,Bp=Int32Array,hc=new Ht([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),gc=new Ht([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),rp=new Ht([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),qb=function(a,r){for(var s=new Ga(31),o=0;o<31;++o)s[o]=r+=1<<a[o-1];for(var l=new Bp(s[30]),o=1;o<30;++o)for(var u=s[o];u<s[o+1];++u)l[u]=u-s[o]<<5|o;return{b:s,r:l}},Mb=qb(hc,2),$b=Mb.b,sp=Mb.r;$b[28]=258,sp[258]=28;var Fb=qb(gc,0),F1=Fb.b,cy=Fb.r,op=new Ga(32768);for(var Rt=0;Rt<32768;++Rt){var Ar=(Rt&43690)>>1|(Rt&21845)<<1;Ar=(Ar&52428)>>2|(Ar&13107)<<2,Ar=(Ar&61680)>>4|(Ar&3855)<<4,op[Rt]=((Ar&65280)>>8|(Ar&255)<<8)>>1}var An=(function(a,r,s){for(var o=a.length,l=0,u=new Ga(r);l<o;++l)a[l]&&++u[a[l]-1];var m=new Ga(r);for(l=1;l<r;++l)m[l]=m[l-1]+u[l-1]<<1;var f;if(s){f=new Ga(1<<r);var g=15-r;for(l=0;l<o;++l)if(a[l])for(var y=l<<4|a[l],p=r-a[l],b=m[a[l]-1]++<<p,v=b|(1<<p)-1;b<=v;++b)f[op[b]>>g]=y}else for(f=new Ga(o),l=0;l<o;++l)a[l]&&(f[l]=op[m[a[l]-1]++]>>15-a[l]);return f}),Lr=new Ht(288);for(var Rt=0;Rt<144;++Rt)Lr[Rt]=8;for(var Rt=144;Rt<256;++Rt)Lr[Rt]=9;for(var Rt=256;Rt<280;++Rt)Lr[Rt]=7;for(var Rt=280;Rt<288;++Rt)Lr[Rt]=8;var mi=new Ht(32);for(var Rt=0;Rt<32;++Rt)mi[Rt]=5;var U1=An(Lr,9,0),B1=An(Lr,9,1),z1=An(mi,5,0),Y1=An(mi,5,1),Ou=function(a){for(var r=a[0],s=1;s<a.length;++s)a[s]>r&&(r=a[s]);return r},dn=function(a,r,s){var o=r/8|0;return(a[o]|a[o+1]<<8)>>(r&7)&s},ju=function(a,r){var s=r/8|0;return(a[s]|a[s+1]<<8|a[s+2]<<16)>>(r&7)},zp=function(a){return(a+7)/8|0},Ci=function(a,r,s){return(r==null||r<0)&&(r=0),(s==null||s>a.length)&&(s=a.length),new Ht(a.subarray(r,s))},H1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Sa=function(a,r,s){var o=new Error(r||H1[a]);if(o.code=a,Error.captureStackTrace&&Error.captureStackTrace(o,Sa),!s)throw o;return o},V1=function(a,r,s,o){var l=a.length,u=o?o.length:0;if(!l||r.f&&!r.l)return s||new Ht(0);var m=!s,f=m||r.i!=2,g=r.i;m&&(s=new Ht(l*3));var y=function(dt){var ht=s.length;if(dt>ht){var Ut=new Ht(Math.max(ht*2,dt));Ut.set(s),s=Ut}},p=r.f||0,b=r.p||0,v=r.b||0,w=r.l,R=r.d,D=r.m,S=r.n,T=l*8;do{if(!w){p=dn(a,b,1);var L=dn(a,b+1,3);if(b+=3,L)if(L==1)w=B1,R=Y1,D=9,S=5;else if(L==2){var O=dn(a,b,31)+257,C=dn(a,b+10,15)+4,P=O+dn(a,b+5,31)+1;b+=14;for(var k=new Ht(P),te=new Ht(19),X=0;X<C;++X)te[rp[X]]=dn(a,b+X*3,7);b+=C*3;for(var ae=Ou(te),pe=(1<<ae)-1,oe=An(te,ae,1),X=0;X<P;){var ne=oe[dn(a,b,pe)];b+=ne&15;var _=ne>>4;if(_<16)k[X++]=_;else{var Y=0,Z=0;for(_==16?(Z=3+dn(a,b,3),b+=2,Y=k[X-1]):_==17?(Z=3+dn(a,b,7),b+=3):_==18&&(Z=11+dn(a,b,127),b+=7);Z--;)k[X++]=Y}}var ge=k.subarray(0,O),xe=k.subarray(O);D=Ou(ge),S=Ou(xe),w=An(ge,D,1),R=An(xe,S,1)}else Sa(1);else{var _=zp(b)+4,N=a[_-4]|a[_-3]<<8,x=_+N;if(x>l){g&&Sa(0);break}f&&y(v+N),s.set(a.subarray(_,x),v),r.b=v+=N,r.p=b=x*8,r.f=p;continue}if(b>T){g&&Sa(0);break}}f&&y(v+131072);for(var j=(1<<D)-1,ee=(1<<S)-1,B=b;;B=b){var Y=w[ju(a,b)&j],V=Y>>4;if(b+=Y&15,b>T){g&&Sa(0);break}if(Y||Sa(2),V<256)s[v++]=V;else if(V==256){B=b,w=null;break}else{var ie=V-254;if(V>264){var X=V-257,de=hc[X];ie=dn(a,b,(1<<de)-1)+$b[X],b+=de}var ve=R[ju(a,b)&ee],Pe=ve>>4;ve||Sa(3),b+=ve&15;var xe=F1[Pe];if(Pe>3){var de=gc[Pe];xe+=ju(a,b)&(1<<de)-1,b+=de}if(b>T){g&&Sa(0);break}f&&y(v+131072);var ke=v+ie;if(v<xe){var bt=u-xe,rt=Math.min(xe,ke);for(bt+v<0&&Sa(3);v<rt;++v)s[v]=o[bt+v]}for(;v<ke;++v)s[v]=s[v-xe]}}r.l=w,r.p=B,r.b=v,r.f=p,w&&(p=1,r.m=D,r.d=R,r.n=S)}while(!p);return v!=s.length&&m?Ci(s,0,v):s.subarray(0,v)},Hn=function(a,r,s){s<<=r&7;var o=r/8|0;a[o]|=s,a[o+1]|=s>>8},Ko=function(a,r,s){s<<=r&7;var o=r/8|0;a[o]|=s,a[o+1]|=s>>8,a[o+2]|=s>>16},qu=function(a,r){for(var s=[],o=0;o<a.length;++o)a[o]&&s.push({s:o,f:a[o]});var l=s.length,u=s.slice();if(!l)return{t:Bb,l:0};if(l==1){var m=new Ht(s[0].s+1);return m[s[0].s]=1,{t:m,l:1}}s.sort(function(x,O){return x.f-O.f}),s.push({s:-1,f:25001});var f=s[0],g=s[1],y=0,p=1,b=2;for(s[0]={s:-1,f:f.f+g.f,l:f,r:g};p!=l-1;)f=s[s[y].f<s[b].f?y++:b++],g=s[y!=p&&s[y].f<s[b].f?y++:b++],s[p++]={s:-1,f:f.f+g.f,l:f,r:g};for(var v=u[0].s,o=1;o<l;++o)u[o].s>v&&(v=u[o].s);var w=new Ga(v+1),R=ip(s[p-1],w,0);if(R>r){var o=0,D=0,S=R-r,T=1<<S;for(u.sort(function(O,C){return w[C.s]-w[O.s]||O.f-C.f});o<l;++o){var L=u[o].s;if(w[L]>r)D+=T-(1<<R-w[L]),w[L]=r;else break}for(D>>=S;D>0;){var _=u[o].s;w[_]<r?D-=1<<r-w[_]++-1:++o}for(;o>=0&&D;--o){var N=u[o].s;w[N]==r&&(--w[N],++D)}R=r}return{t:new Ht(w),l:R}},ip=function(a,r,s){return a.s==-1?Math.max(ip(a.l,r,s+1),ip(a.r,r,s+1)):r[a.s]=s},dy=function(a){for(var r=a.length;r&&!a[--r];);for(var s=new Ga(++r),o=0,l=a[0],u=1,m=function(g){s[o++]=g},f=1;f<=r;++f)if(a[f]==l&&f!=r)++u;else{if(!l&&u>2){for(;u>138;u-=138)m(32754);u>2&&(m(u>10?u-11<<5|28690:u-3<<5|12305),u=0)}else if(u>3){for(m(l),--u;u>6;u-=6)m(8304);u>2&&(m(u-3<<5|8208),u=0)}for(;u--;)m(l);u=1,l=a[f]}return{c:s.subarray(0,o),n:r}},Zo=function(a,r){for(var s=0,o=0;o<r.length;++o)s+=a[o]*r[o];return s},Ub=function(a,r,s){var o=s.length,l=zp(r+2);a[l]=o&255,a[l+1]=o>>8,a[l+2]=a[l]^255,a[l+3]=a[l+1]^255;for(var u=0;u<o;++u)a[l+u+4]=s[u];return(l+4+o)*8},uy=function(a,r,s,o,l,u,m,f,g,y,p){Hn(r,p++,s),++l[256];for(var b=qu(l,15),v=b.t,w=b.l,R=qu(u,15),D=R.t,S=R.l,T=dy(v),L=T.c,_=T.n,N=dy(D),x=N.c,O=N.n,C=new Ga(19),P=0;P<L.length;++P)++C[L[P]&31];for(var P=0;P<x.length;++P)++C[x[P]&31];for(var k=qu(C,7),te=k.t,X=k.l,ae=19;ae>4&&!te[rp[ae-1]];--ae);var pe=y+5<<3,oe=Zo(l,Lr)+Zo(u,mi)+m,ne=Zo(l,v)+Zo(u,D)+m+14+3*ae+Zo(C,te)+2*C[16]+3*C[17]+7*C[18];if(g>=0&&pe<=oe&&pe<=ne)return Ub(r,p,a.subarray(g,g+y));var Y,Z,ge,xe;if(Hn(r,p,1+(ne<oe)),p+=2,ne<oe){Y=An(v,w,0),Z=v,ge=An(D,S,0),xe=D;var j=An(te,X,0);Hn(r,p,_-257),Hn(r,p+5,O-1),Hn(r,p+10,ae-4),p+=14;for(var P=0;P<ae;++P)Hn(r,p+3*P,te[rp[P]]);p+=3*ae;for(var ee=[L,x],B=0;B<2;++B)for(var V=ee[B],P=0;P<V.length;++P){var ie=V[P]&31;Hn(r,p,j[ie]),p+=te[ie],ie>15&&(Hn(r,p,V[P]>>5&127),p+=V[P]>>12)}}else Y=U1,Z=Lr,ge=z1,xe=mi;for(var P=0;P<f;++P){var de=o[P];if(de>255){var ie=de>>18&31;Ko(r,p,Y[ie+257]),p+=Z[ie+257],ie>7&&(Hn(r,p,de>>23&31),p+=hc[ie]);var ve=de&31;Ko(r,p,ge[ve]),p+=xe[ve],ve>3&&(Ko(r,p,de>>5&8191),p+=gc[ve])}else Ko(r,p,Y[de]),p+=Z[de]}return Ko(r,p,Y[256]),p+Z[256]},G1=new Bp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Bb=new Ht(0),X1=function(a,r,s,o,l,u){var m=u.z||a.length,f=new Ht(o+m+5*(1+Math.ceil(m/7e3))+l),g=f.subarray(o,f.length-l),y=u.l,p=(u.r||0)&7;if(r){p&&(g[0]=u.r>>3);for(var b=G1[r-1],v=b>>13,w=b&8191,R=(1<<s)-1,D=u.p||new Ga(32768),S=u.h||new Ga(R+1),T=Math.ceil(s/3),L=2*T,_=function(vt){return(a[vt]^a[vt+1]<<T^a[vt+2]<<L)&R},N=new Bp(25e3),x=new Ga(288),O=new Ga(32),C=0,P=0,k=u.i||0,te=0,X=u.w||0,ae=0;k+2<m;++k){var pe=_(k),oe=k&32767,ne=S[pe];if(D[oe]=ne,S[pe]=oe,X<=k){var Y=m-k;if((C>7e3||te>24576)&&(Y>423||!y)){p=uy(a,g,0,N,x,O,P,te,ae,k-ae,p),te=C=P=0,ae=k;for(var Z=0;Z<286;++Z)x[Z]=0;for(var Z=0;Z<30;++Z)O[Z]=0}var ge=2,xe=0,j=w,ee=oe-ne&32767;if(Y>2&&pe==_(k-ee))for(var B=Math.min(v,Y)-1,V=Math.min(32767,k),ie=Math.min(258,Y);ee<=V&&--j&&oe!=ne;){if(a[k+ge]==a[k+ge-ee]){for(var de=0;de<ie&&a[k+de]==a[k+de-ee];++de);if(de>ge){if(ge=de,xe=ee,de>B)break;for(var ve=Math.min(ee,de-2),Pe=0,Z=0;Z<ve;++Z){var ke=k-ee+Z&32767,bt=D[ke],rt=ke-bt&32767;rt>Pe&&(Pe=rt,ne=ke)}}}oe=ne,ne=D[oe],ee+=oe-ne&32767}if(xe){N[te++]=268435456|sp[ge]<<18|cy[xe];var dt=sp[ge]&31,ht=cy[xe]&31;P+=hc[dt]+gc[ht],++x[257+dt],++O[ht],X=k+ge,++C}else N[te++]=a[k],++x[a[k]]}}for(k=Math.max(k,X);k<m;++k)N[te++]=a[k],++x[a[k]];p=uy(a,g,y,N,x,O,P,te,ae,k-ae,p),y||(u.r=p&7|g[p/8|0]<<3,p-=7,u.h=S,u.p=D,u.i=k,u.w=X)}else{for(var k=u.w||0;k<m+y;k+=65535){var Ut=k+65535;Ut>=m&&(g[p/8|0]=y,Ut=m),p=Ub(g,p+1,a.subarray(k,Ut))}u.i=m}return Ci(f,0,o+zp(p)+l)},W1=(function(){for(var a=new Int32Array(256),r=0;r<256;++r){for(var s=r,o=9;--o;)s=(s&1&&-306674912)^s>>>1;a[r]=s}return a})(),K1=function(){var a=-1;return{p:function(r){for(var s=a,o=0;o<r.length;++o)s=W1[s&255^r[o]]^s>>>8;a=s},d:function(){return~a}}},Z1=function(a,r,s,o,l){if(!l&&(l={l:1},r.dictionary)){var u=r.dictionary.subarray(-32768),m=new Ht(u.length+a.length);m.set(u),m.set(a,u.length),a=m,l.w=u.length}return X1(a,r.level==null?6:r.level,r.mem==null?l.l?Math.ceil(Math.max(8,Math.min(13,Math.log(a.length)))*1.5):20:12+r.mem,s,o,l)},zb=function(a,r){var s={};for(var o in a)s[o]=a[o];for(var o in r)s[o]=r[o];return s},Tn=function(a,r){return a[r]|a[r+1]<<8},nn=function(a,r){return(a[r]|a[r+1]<<8|a[r+2]<<16|a[r+3]<<24)>>>0},Mu=function(a,r){return nn(a,r)+nn(a,r+4)*4294967296},ha=function(a,r,s){for(;s;++r)a[r]=s,s>>>=8};function Q1(a,r){return Z1(a,r||{},0,0)}function J1(a,r){return V1(a,{i:2},r&&r.out,r&&r.dictionary)}var Yb=function(a,r,s,o){for(var l in a){var u=a[l],m=r+l,f=o;Array.isArray(u)&&(f=zb(o,u[1]),u=u[0]),ArrayBuffer.isView(u)?s[m]=[u,f]:(s[m+="/"]=[new Ht(0),f],Yb(u,m,s,o))}},py=typeof TextEncoder<"u"&&new TextEncoder,lp=typeof TextDecoder<"u"&&new TextDecoder,eS=0;try{lp.decode(Bb,{stream:!0}),eS=1}catch{}var tS=function(a){for(var r="",s=0;;){var o=a[s++],l=(o>127)+(o>223)+(o>239);if(s+l>a.length)return{s:r,r:Ci(a,s-1)};l?l==3?(o=((o&15)<<18|(a[s++]&63)<<12|(a[s++]&63)<<6|a[s++]&63)-65536,r+=String.fromCharCode(55296|o>>10,56320|o&1023)):l&1?r+=String.fromCharCode((o&31)<<6|a[s++]&63):r+=String.fromCharCode((o&15)<<12|(a[s++]&63)<<6|a[s++]&63):r+=String.fromCharCode(o)}};function cp(a,r){var s;if(py)return py.encode(a);for(var o=a.length,l=new Ht(a.length+(a.length>>1)),u=0,m=function(y){l[u++]=y},s=0;s<o;++s){if(u+5>l.length){var f=new Ht(u+8+(o-s<<1));f.set(l),l=f}var g=a.charCodeAt(s);g<128||r?m(g):g<2048?(m(192|g>>6),m(128|g&63)):g>55295&&g<57344?(g=65536+(g&1047552)|a.charCodeAt(++s)&1023,m(240|g>>18),m(128|g>>12&63),m(128|g>>6&63),m(128|g&63)):(m(224|g>>12),m(128|g>>6&63),m(128|g&63))}return Ci(l,0,u)}function aS(a,r){if(r){for(var s="",o=0;o<a.length;o+=16384)s+=String.fromCharCode.apply(null,a.subarray(o,o+16384));return s}else{if(lp)return lp.decode(a);var l=tS(a),u=l.s,s=l.r;return s.length&&Sa(8),u}}var nS=function(a,r){return r+30+Tn(a,r+26)+Tn(a,r+28)},rS=function(a,r,s){var o=Tn(a,r+28),l=Tn(a,r+30),u=aS(a.subarray(r+46,r+46+o),!(Tn(a,r+8)&2048)),m=r+46+o,f=sS(a,m,l,s,nn(a,r+20),nn(a,r+24),nn(a,r+42)),g=f[0],y=f[1],p=f[2];return[Tn(a,r+10),g,y,u,m+l+Tn(a,r+32),p]},sS=function(a,r,s,o,l,u,m){var f=l==4294967295,g=u==4294967295,y=m==4294967295,p=r+s,b=f+g+y;if(o&&b){for(;r+4<p;r+=4+Tn(a,r+2))if(Tn(a,r)==1)return[f?Mu(a,r+4+8*g):l,g?Mu(a,r+4):u,y?Mu(a,r+4+8*(g+f)):m,1];o<2&&Sa(13)}return[l,u,m,0]},dp=function(a){var r=0;if(a)for(var s in a){var o=a[s].length;o>65535&&Sa(9),r+=o+4}return r},fy=function(a,r,s,o,l,u,m,f){var g=o.length,y=s.extra,p=f&&f.length,b=dp(y);ha(a,r,m!=null?33639248:67324752),r+=4,m!=null&&(a[r++]=20,a[r++]=s.os),a[r]=20,r+=2,a[r++]=s.flag<<1|(u<0&&8),a[r++]=l&&8,a[r++]=s.compression&255,a[r++]=s.compression>>8;var v=new Date(s.mtime==null?Date.now():s.mtime),w=v.getFullYear()-1980;if((w<0||w>119)&&Sa(10),ha(a,r,w<<25|v.getMonth()+1<<21|v.getDate()<<16|v.getHours()<<11|v.getMinutes()<<5|v.getSeconds()>>1),r+=4,u!=-1&&(ha(a,r,s.crc),ha(a,r+4,u<0?-u-2:u),ha(a,r+8,s.size)),ha(a,r+12,g),ha(a,r+14,b),r+=16,m!=null&&(ha(a,r,p),ha(a,r+6,s.attrs),ha(a,r+10,m),r+=14),a.set(o,r),r+=g,b)for(var R in y){var D=y[R],S=D.length;ha(a,r,+R),ha(a,r+2,S),a.set(D,r+4),r+=4+S}return p&&(a.set(f,r),r+=p),r},oS=function(a,r,s,o,l){ha(a,r,101010256),ha(a,r+8,s),ha(a,r+10,s),ha(a,r+12,o),ha(a,r+16,l)};function iS(a,r){r||(r={});var s={},o=[];Yb(a,"",s,r);var l=0,u=0;for(var m in s){var f=s[m],g=f[0],y=f[1],p=y.level==0?0:8,b=cp(m),v=b.length,w=y.comment,R=w&&cp(w),D=R&&R.length,S=dp(y.extra);v>65535&&Sa(11);var T=p?Q1(g,y):g,L=T.length,_=K1();_.p(g),o.push(zb(y,{size:g.length,crc:_.d(),c:T,f:b,m:R,u:v!=m.length||R&&w.length!=D,o:l,compression:p})),l+=30+v+S+L,u+=76+2*(v+S)+(D||0)+L}for(var N=new Ht(u+22),x=l,O=u-l,C=0;C<o.length;++C){var b=o[C];fy(N,b.o,b,b.f,b.u,b.c.length);var P=30+b.f.length+dp(b.extra);N.set(b.c,b.o+P),fy(N,l,b,b.f,b.u,b.c.length,b.o,b.m),l+=16+P+(b.m?b.m.length:0)}return oS(N,l,o.length,O,x),N}function hy(a,r){for(var s={},o=a.length-22;nn(a,o)!=101010256;--o)(!o||a.length-o>65558)&&Sa(13);var l=Tn(a,o+8);if(!l)return{};var u=nn(a,o+16),m=nn(a,o-20)==117853008;if(m){var f=nn(a,o-12);m=nn(a,f)==101075792,m&&(l=nn(a,f+32),u=nn(a,f+48))}for(var g=0;g<l;++g){var y=rS(a,u,m),p=y[0],b=y[1],v=y[2],w=y[3],R=y[4],D=y[5],S=nS(a,D);u=R,p?p==8?s[w]=J1(a.subarray(S,S+b),{out:new Ht(v)}):Sa(14,"unknown compression type "+p):s[w]=Ci(a,S,S+b)}return s}const gy="DIAGNOSTIC_README.txt";function lS(a){return(a.split(/[\\/]/).pop()??"").replace(/[\u0000-\u001f<>:"/\\|?*]/g,"_").trim().replace(/^[. ]+|[. ]+$/g,"")||"diagnostic-file"}function cS(a,r){const s=a.lastIndexOf("."),o=s>0?a.slice(0,s):a,l=s>0?a.slice(s):"";let u=a,m=2;for(;r.has(u.toLocaleLowerCase());)u=`${o}-${m}${l}`,m+=1;return r.add(u.toLocaleLowerCase()),u}function dS(a){if(a.length===0)throw new Error("Add at least one diagnostic file before downloading the ZIP.");const r=Object.create(null),s=new Set([gy.toLocaleLowerCase()]),o=[];return a.forEach((l,u)=>{const m=cS(lS(l.name),s);r[m]=l.bytes,o.push(`${String(u+1).padStart(2,"0")}. ${m} | ${l.bytes.byteLength} bytes | ${l.mimeType||"type not provided"}`)}),r[gy]=cp(["P&ID Mapping Studio diagnostic bundle","Files were selected locally. The app did not upload them to a server.","","Files included:",...o,""].join(`
`)),iS(r,{level:1})}const uS=200*1024*1024;function my(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(1)} MB`}function pS(){const[a,r]=M.useState([]),[s,o]=M.useState(!1),[l,u]=M.useState(""),[m,f]=M.useState(""),g=M.useMemo(()=>a.reduce((v,w)=>v+w.size,0),[a]),y=v=>{if(u(""),f(""),v.length===0)return;const w=new Set(a.map(S=>`${S.name}:${S.size}:${S.lastModified}`)),R=v.filter(S=>{const T=`${S.name}:${S.size}:${S.lastModified}`;return w.has(T)?!1:(w.add(T),!0)});if(g+R.reduce((S,T)=>S+T.size,0)>uS){f("The selected files exceed the 200 MB bundle limit. Remove some files and try again.");return}r(S=>[...S,...R]),R.length<v.length&&u(`${v.length-R.length} duplicate file(s) were skipped.`)},p=v=>{r(w=>w.filter(R=>R!==v)),u(""),f("")},b=async()=>{if(!(a.length===0||s)){o(!0),u(""),f("");try{const v=await Promise.all(a.map(async L=>({name:L.name,mimeType:L.type,bytes:new Uint8Array(await L.arrayBuffer())}))),w=dS(v),R=new Uint8Array(w.byteLength);R.set(w);const D=new Blob([R.buffer],{type:"application/zip"}),S=URL.createObjectURL(D),T=document.createElement("a");T.href=S,T.download="pid-mapping-diagnostics.zip",T.click(),window.setTimeout(()=>URL.revokeObjectURL(S),5e3),u(`ZIP ready with ${a.length} file(s). Attach pid-mapping-diagnostics.zip to the chat.`)}catch(v){f(v instanceof Error?v.message:"The diagnostic ZIP could not be created.")}finally{o(!1)}}};return c.jsxs("section",{className:"diagnostic-upload-panel","aria-labelledby":"diagnostic-upload-title","data-testid":"panel-diagnostic-upload",children:[c.jsxs("div",{className:"diagnostic-upload-heading",children:[c.jsxs("div",{className:"diagnostic-upload-copy",children:[c.jsx("span",{className:"diagnostic-upload-kicker",children:"LOCAL DIAGNOSTICS"}),c.jsx("h3",{id:"diagnostic-upload-title",children:"Share run files"}),c.jsx("p",{children:"Select AutoCAD logs, DXF/DWG, ZIP, JSON, scripts, screenshots, or other files."})]}),c.jsxs("div",{className:"diagnostic-upload-actions",children:[c.jsxs("label",{className:"btn primary diagnostic-upload-select","data-testid":"label-add-diagnostic-files",children:[c.jsx(es,{size:16})," Add files",c.jsx("input",{type:"file",multiple:!0,"aria-label":"Choose diagnostic files from this device","data-testid":"input-add-diagnostic-files",onChange:v=>{y(Array.from(v.currentTarget.files??[])),v.currentTarget.value=""}})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:a.length===0||s,"data-testid":"button-download-diagnostic-zip",children:[s?c.jsx(ka,{size:16,className:"diagnostic-upload-spin"}):c.jsx(kp,{size:16}),s?"Preparing ZIP…":"Download one ZIP"]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{r([]),u(""),f("")},disabled:a.length===0||s,"data-testid":"button-clear-diagnostic-files",children:[c.jsx(gi,{size:15})," Clear"]})]})]}),c.jsxs("div",{className:"diagnostic-upload-privacy","data-testid":"text-diagnostic-local-only",children:[c.jsx(Zn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay on this device."})," Nothing is sent to a server. Download one ZIP, then attach it to the chat to share it."]})]}),c.jsxs("div",{className:"diagnostic-upload-count","data-testid":"text-diagnostic-file-count",children:[a.length," file(s) selected · ",my(g)," of 200 MB"]}),a.length>0&&c.jsx("ul",{className:"diagnostic-upload-list","aria-label":"Selected diagnostic files","data-testid":"list-diagnostic-files",children:a.map((v,w)=>c.jsxs("li",{"data-testid":`row-diagnostic-file-${w}`,children:[c.jsx(Kn,{size:15,"aria-hidden":"true"}),c.jsx("span",{className:"diagnostic-upload-file-name",title:v.name,children:v.name}),c.jsx("span",{className:"diagnostic-upload-file-size",children:my(v.size)}),c.jsx("button",{type:"button",className:"diagnostic-upload-remove",onClick:()=>p(v),"aria-label":`Remove ${v.name}`,"data-testid":`button-remove-diagnostic-file-${w}`,children:c.jsx(Ju,{size:16})})]},`${v.name}:${v.size}:${v.lastModified}:${w}`))}),l&&c.jsx("p",{className:"diagnostic-upload-status",role:"status","data-testid":"status-diagnostic-upload",children:l}),m&&c.jsx("p",{className:"diagnostic-upload-error",role:"alert","data-testid":"error-diagnostic-upload",children:m})]})}const $u="STANDARD",fS="STANDARD";function hS(a,r,s){const o=a(),l=a(),u=a(),m=a(),f=a(),g=a(),y=a(),p=a(),b=a();function v(x,O,C){const P=a();return x(0,"TABLE"),x(2,O),x(5,P),x(330,"0"),x(100,"AcDbSymbolTable"),x(70,C),P}function w(x,O,C,P,k=a()){return x(0,O),x(O==="DIMSTYLE"?105:5,k),x(330,C),x(100,"AcDbSymbolTableRecord"),x(100,P),k}function R(x){const O=v(x,"VPORT",1);w(x,"VPORT",O,"AcDbViewportTableRecord"),x(2,"*ACTIVE"),x(70,0),x(10,0),x(20,0),x(11,1),x(21,1),x(12,r/2),x(22,s/2),x(13,0),x(23,0),x(14,10),x(24,10),x(15,10),x(25,10),x(16,0),x(26,0),x(36,1),x(17,0),x(27,0),x(37,0),x(40,s*1.1),x(41,r/s),x(42,50),x(43,0),x(44,0),x(50,0),x(51,0),x(71,0),x(72,1e3),x(73,1),x(74,3),x(75,0),x(76,0),x(77,0),x(78,0),x(281,0),x(0,"ENDTAB")}function D(x,O){for(const te of["VIEW","UCS"])v(x,te,0),x(0,"ENDTAB");const C=v(x,"APPID",1);w(x,"APPID",C,"AcDbRegAppTableRecord"),x(2,"ACAD"),x(70,0),x(0,"ENDTAB");const P=v(x,"DIMSTYLE",1);x(100,"AcDbDimStyleTable"),x(71,0),w(x,"DIMSTYLE",P,"AcDbDimStyleTableRecord"),x(2,fS),x(70,0),x(40,1),x(140,2.5),x(340,O),x(0,"ENDTAB");const k=v(x,"BLOCK_RECORD",2);for(const[te,X,ae]of[["*Model_Space",g,p],["*Paper_Space",y,b]])w(x,"BLOCK_RECORD",k,"AcDbBlockTableRecord",X),x(2,te),x(340,ae),x(70,4),x(280,1),x(281,0);x(0,"ENDTAB")}function S(x){x(0,"SECTION"),x(2,"BLOCKS");for(const[O,C]of[["*Model_Space",g],["*Paper_Space",y]])x(0,"BLOCK"),x(5,a()),x(330,C),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockBegin"),x(2,O),x(70,0),x(10,0),x(20,0),x(30,0),x(3,O),x(1,""),x(0,"ENDBLK"),x(5,a()),x(330,C),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockEnd");x(0,"ENDSEC")}function T(x,O,C,P,k=!1){x(0,k?"ACDBDICTIONARYWDFLT":"DICTIONARY"),x(5,O),x(330,C),x(100,"AcDbDictionary"),x(280,0),x(281,1);for(const[te,X]of P)x(3,te),x(350,X);k&&(x(100,"AcDbDictionaryWithDefault"),x(340,f))}function L(x,O,C,P,k){x(0,"LAYOUT"),x(5,C),x(330,u),x(100,"AcDbPlotSettings"),x(1,""),x(4,""),x(6,"");for(const te of[40,41,42,43])x(te,0);x(44,r),x(45,s);for(const te of[46,47,48,49,140,141])x(te,0);x(142,1),x(143,1),x(70,k===0?1024:0),x(72,1),x(73,0),x(74,5),x(7,""),x(75,16),x(76,0),x(77,2),x(78,300),x(147,1),x(148,0),x(149,0),x(100,"AcDbLayout"),x(1,O),x(70,1),x(71,k),x(10,0),x(20,0),x(11,r),x(21,s),x(12,0),x(22,0),x(32,0),x(14,0),x(24,0),x(34,0),x(15,r),x(25,s),x(35,0),x(146,0),x(13,0),x(23,0),x(33,0),x(16,1),x(26,0),x(36,0),x(17,0),x(27,1),x(37,0),x(76,1),x(330,P)}function _(x){x(0,"SECTION"),x(2,"OBJECTS"),T(x,o,"0",[["ACAD_GROUP",l],["ACAD_LAYOUT",u],["ACAD_PLOTSTYLENAME",m]]),T(x,l,o,[]),T(x,u,o,[["Model",p],["Layout1",b]]),T(x,m,o,[["Normal",f]],!0),x(0,"ACDBPLACEHOLDER"),x(5,f),x(330,m),L(x,"Model",p,g,0),L(x,"Layout1",b,y,1),x(0,"ENDSEC")}function N(x){x(0,"SECTION"),x(2,"CLASSES");for(const[O,C,P]of[["LAYOUT","AcDbLayout",2],["ACDBDICTIONARYWDFLT","AcDbDictionaryWithDefault",1],["ACDBPLACEHOLDER","AcDbPlaceHolder",1]])x(0,"CLASS"),x(1,O),x(2,C),x(3,"ObjectDBX Classes"),x(90,0),x(91,P),x(280,0),x(281,0);x(0,"ENDSEC")}return{modelSpace:g,normalPlotStyle:f,beginTable:v,tableRecord:w,writeViewport:R,writeRemainingTables:D,writeBlocks:S,writeObjects:_,writeClasses:N}}function Fu(a){if(!Number.isFinite(a))throw new Error("A PDF coordinate is not a finite number.");return Number(a.toFixed(7)).toString()}function gS(a){return a.replace(/[\r\n\t]/g," ").replace(/\\/g,"\\\\").replace(/[^\x20-\x7e]/g,r=>`\\U+${r.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")}`)}const yy=/[<>\/\\":;?*|,=\u0000-\u001f\u007f]/;function Hb(a){const r=a.replace(/^\uFEFF/,"").split(/\r?\n/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF export rejected: the output does not contain complete group-code/value pairs.");const s=[];for(let o=0;o<r.length;o+=2){const l=Number(r[o].trim());if(!/^\d+$/.test(r[o].trim())||!Number.isInteger(l)||r[o+1]===void 0)throw new Error(`DXF export rejected: malformed group-code/value pair at line ${o+1}.`);s.push({code:l,value:r[o+1]})}if(s.at(-1)?.code!==0||s.at(-1)?.value!=="EOF")throw new Error("DXF export rejected: the output is incomplete (missing EOF).");return s}function mS(a,r,s=0){return!a||a.trim()!==a||a.length>255?!1:r==="BLOCK_RECORD"&&/^\*[A-Za-z0-9_.$-]+$/.test(a)||r==="VPORT"&&a.toUpperCase()==="*ACTIVE"?!0:s&16&&a.includes("|")?a.split("|").every(o=>o.length>0&&!yy.test(o)):!yy.test(a)}function Vb(a,r,s,o=[]){const l=new Set;let u=!1,m=!1;for(let f=0;f<a.length;f+=1){const g=a[f];if(g.code===0&&g.value==="SECTION"&&a[f+1]?.code===2&&a[f+1]?.value==="TABLES"){u=!0,m=!0,f+=1;continue}if(!u)continue;if(g.code===0&&g.value==="ENDSEC"){u=!1;continue}if(g.code!==0||g.value!=="TABLE")continue;const y=a[f+1];if(y?.code!==2||!y.value.trim())throw new Error("DXF export rejected: a symbol table has a blank or missing table name.");const p=y.value.toUpperCase();if(l.has(p))throw new Error(`DXF export rejected: the ${p} symbol table is duplicated.`);l.add(p);const b=new Set;let v=f+1;for(;v<a.length&&a[v].code!==0;)v+=1;const w=new Set;for(let S=v;S<a.length&&!(a[S].code===0&&["ENDTAB","ENDSEC"].includes(a[S].value));S+=1)a[S].code===2&&a[S].value.trim()&&w.add(a[S].value.toUpperCase());let R=0,D=!1;for(;v<a.length&&a[v].code===0;){if(a[v].value==="ENDTAB"){D=!0,f=v;break}if(a[v].value==="ENDSEC")break;R+=1;let S=v+1;for(;S<a.length&&a[S].code!==0;)S+=1;if(a[v].value!==p)throw new Error(`DXF export rejected: ${p} contains an unexpected ${a[v].value} record at line ${v*2+2}.`);let T=-1,L=0,_="";for(let P=v+1;P<S;P+=1){if(a[P].code===2){if(T>=0)throw new Error(`DXF export rejected: ${p} record has multiple name fields at line ${P*2+1}.`);T=P}a[P].code===70&&(L=Number(a[P].value)),a[P].code===3&&(_=a[P].value)}const N=T>=0?a[T].value:"",x=!N.trim();let O=N;if(p==="STYLE"&&(L&1)!==0){const P=(T>=0?T:v)*2+2;if(T<0)throw new Error(`DXF export rejected: STYLE shape-file record is missing its group-2 name field at line ${P}.`);if(!_.trim())throw new Error(`DXF export rejected: STYLE shape-file record has no font file in group 3 at line ${P}.`);if(N!==""){if(!r)throw new Error(`DXF export rejected: STYLE shape-file record must have an empty name per DXF format at line ${P}.`);o.push({table:p,line:P,previousName:N,name:""}),a[T].value="",O=""}}else if(x||!mS(N,p,L)){const P=(T>=0?T:v)*2+2;if(!x||!["STYLE","DIMSTYLE"].includes(p))throw new Error(`DXF export rejected: ${p} table record ${R} has ${x?"a blank name":`an invalid name ${JSON.stringify(N)}`} at line ${P}. Correct the source value before exporting.`);if(!r)throw new Error(`DXF export rejected: ${p} table record ${R} still has ${x?"a blank name":"an invalid name"} after repair at line ${P}.`);const k=p==="DIMSTYLE"?"AUTOMATION_DIMSTYLE":"AUTOMATION_TEXTSTYLE";O=k;let te=2;for(;w.has(O.toUpperCase());)O=`${k}_${te++}`;if(w.add(O.toUpperCase()),o.push({table:p,line:P,previousName:N,name:O}),T>=0)a[T].value=O;else{let X=v+1;for(;X<S&&[5,105,330,100].includes(a[X].code);)X+=1;s.push({index:X,pair:{code:2,value:O}})}}if(O){const P=O.toUpperCase();if(b.has(P))throw new Error(`DXF export rejected: ${p} table record ${R} duplicates the name ${JSON.stringify(O)}.`);b.add(P)}v=S}if(!D)throw new Error(`DXF export rejected: the ${p} symbol table is missing ENDTAB.`)}if(!m)throw new Error("DXF export rejected: the output has no TABLES section to validate.");if(u)throw new Error("DXF export rejected: TABLES section is missing ENDSEC.");for(const f of["STYLE","DIMSTYLE"])if(!l.has(f))throw new Error(`DXF export rejected: the required ${f} symbol table is missing.`)}function yS(a){return Gb(a).dxf}function Gb(a){const r=Hb(a),s=[],o=[];Vb(r,!0,s,o),s.sort((u,m)=>m.index-u.index);for(const u of s)r.splice(u.index,0,u.pair);const l=`${r.flatMap(({code:u,value:m})=>[String(u),m]).join(`\r
`)}\r
`;return Yp(l),{dxf:l,repairs:o}}function Yp(a){Vb(Hb(a),!1,[])}function bS(a){const r=Number.parseInt(a.replace("#",""),16);return Number.isFinite(r)?r:0}function ED(a,r,s){if(!Number.isFinite(r)||!Number.isFinite(s)||r<=0||s<=0)throw new Error("A DXF page must have positive finite dimensions.");const o=[],l=(T,L)=>o.push(String(T),typeof L=="number"?Fu(L):L);let u=256;const m=()=>(u++).toString(16).toUpperCase(),f=hS(m,r,s),g=new Map;for(const T of a)if(T.kind==="polyline"&&T.dash?.some(L=>L>0)){const L=T.dash.map(_=>Fu(_)).join(",");g.has(L)||g.set(L,{name:`PDF_DASH_${g.size+1}`,pattern:T.dash})}const y=T=>T.trim()||"0",p=T=>{l(5,m()),l(330,f.modelSpace),l(100,"AcDbEntity"),l(67,0),l(410,"Model"),l(8,y(T.layer));const L=bS(T.color);(L>>16&255)<16&&(L>>8&255)<16&&(L&255)<16?l(62,7):(l(62,256),l(420,L)),T.opacity!==void 0&&T.opacity<1&&l(440,33554432|Math.round(Math.max(0,T.opacity)*255))};f.writeClasses(l),l(0,"SECTION"),l(2,"TABLES"),f.writeViewport(l);const b=f.beginTable(l,"LTYPE",3+g.size);for(const T of["BYBLOCK","BYLAYER","CONTINUOUS"])f.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,T),l(70,0),l(3,T==="CONTINUOUS"?"Solid line":""),l(72,65),l(73,0),l(40,0);for(const{name:T,pattern:L}of g.values()){const _=L.length%2?[...L,...L]:L;f.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,T),l(70,0),l(3,"Source PDF dash pattern"),l(72,65),l(73,_.length),l(40,_.reduce((N,x)=>N+Math.abs(x),0)),_.forEach((N,x)=>{l(49,x%2?-N:N),l(74,0)})}l(0,"ENDTAB");const v=[...new Set(["0",...a.map(T=>y(T.layer))])],w=f.beginTable(l,"LAYER",v.length);for(const T of v)f.tableRecord(l,"LAYER",w,"AcDbLayerTableRecord"),l(2,T),l(70,0),l(62,7),l(6,"CONTINUOUS"),l(290,1),l(370,-3),l(390,f.normalPlotStyle);l(0,"ENDTAB");const R=f.beginTable(l,"STYLE",1),D=f.tableRecord(l,"STYLE",R,"AcDbTextStyleTableRecord");l(2,$u),l(70,0),l(40,0),l(41,1),l(50,0),l(71,0),l(42,2.5),l(3,"txt.shx"),l(4,""),l(0,"ENDTAB"),f.writeRemainingTables(l,D),l(0,"ENDSEC"),f.writeBlocks(l),l(0,"SECTION"),l(2,"ENTITIES");for(const T of a)if(T.kind==="polyline"){if(T.points.length<2)continue;l(0,"LWPOLYLINE"),p(T),l(370,T.lineWeight);const L=T.dash?.length?g.get(T.dash.map(_=>Fu(_)).join(",")):void 0;L&&l(6,L.name),l(100,"AcDbPolyline"),l(90,T.points.length),l(70,(T.closed?1:0)|(L?128:0));for(const _ of T.points)l(10,_.x),l(20,_.y)}else if(T.kind==="hatch"){const L=T.loops.filter(_=>_.length>=3);if(!L.length)continue;l(0,"HATCH"),p(T),l(100,"AcDbHatch"),l(10,0),l(20,0),l(30,0),l(210,0),l(220,0),l(230,1),l(2,"SOLID"),l(70,1),l(71,0),l(91,L.length);for(const _ of L){l(92,2),l(72,0),l(73,1),l(93,_.length);for(const N of _)l(10,N.x),l(20,N.y);l(97,0)}l(75,0),l(76,1),l(98,0)}else{if(!T.text.trim()||!(T.height>0))continue;const L=T.text.match(/[\s\S]{1,180}/g)??[];let _=0;for(const N of L){const x=_/T.text.length,O=(_+N.length)/T.text.length,C={x:T.start.x+(T.end.x-T.start.x)*x,y:T.start.y+(T.end.y-T.start.y)*x},P={x:T.start.x+(T.end.x-T.start.x)*O,y:T.start.y+(T.end.y-T.start.y)*O};l(0,"TEXT"),p(T),l(100,"AcDbText"),l(10,C.x),l(20,C.y),l(30,0),l(40,T.height),l(1,gS(N)),l(50,T.rotation),l(7,$u),l(72,Math.hypot(P.x-C.x,P.y-C.y)>1e-8?5:0),l(11,P.x),l(21,P.y),l(31,0),l(100,"AcDbText"),l(73,0),_+=N.length}}l(0,"ENDSEC"),f.writeObjects(l),l(0,"EOF");const S=o.splice(0);return l(0,"SECTION"),l(2,"HEADER"),l(9,"$ACADVER"),l(1,"AC1018"),l(9,"$DWGCODEPAGE"),l(3,"ANSI_1252"),l(9,"$HANDSEED"),l(5,u.toString(16).toUpperCase()),l(9,"$INSUNITS"),l(70,4),l(9,"$MEASUREMENT"),l(70,1),l(9,"$INSBASE"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMIN"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMAX"),l(10,r),l(20,s),l(30,0),l(9,"$LIMMIN"),l(10,0),l(20,0),l(9,"$LIMMAX"),l(10,r),l(20,s),l(9,"$TILEMODE"),l(70,1),l(9,"$CTAB"),l(1,"Model"),l(9,"$CLAYER"),l(8,"0"),l(9,"$CELTYPE"),l(6,"BYLAYER"),l(9,"$TEXTSTYLE"),l(7,$u),l(9,"$CECOLOR"),l(62,256),l(9,"$LTSCALE"),l(40,1),l(9,"$CELTSCALE"),l(40,1),l(9,"$PSLTSCALE"),l(70,0),l(0,"ENDSEC"),yS(`${o.concat(S).join(`\r
`)}\r
`)}const vS=["LTYPE","LAYER","STYLE","APPID","DIMSTYLE","BLOCK_RECORD"];function ES(a){const r=a.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF structural repair rejected: incomplete group-code/value pairs.");const s=[];for(let o=0;o<r.length;o+=2){const l=Number(r[o].trim());if(!/^\d+$/.test(r[o].trim())||!Number.isInteger(l))throw new Error(`DXF structural repair rejected: invalid group code at line ${o+1}.`);s.push({code:l,value:r[o+1]})}return s}function wS(a){return`${a.flatMap(({code:r,value:s})=>[String(r),s]).join(`\r
`)}\r
`}function xS(a){const r=ES(a),s=new Map;let o="",l=-1;for(let D=0;D<r.length;D+=1){const S=r[D];if(S.code===0&&S.value.trim().toUpperCase()==="SECTION"&&r[D+1]?.code===2){o=r[++D].value.trim().toUpperCase();continue}if(S.code===0&&S.value.trim().toUpperCase()==="ENDSEC"){o==="TABLES"&&(l=D),o="";continue}if(o!=="TABLES"||S.code!==0||S.value.trim().toUpperCase()!=="TABLE")continue;const T=r[D+1]?.code===2?r[D+1].value.trim().toUpperCase():"";if(!T)throw new Error("DXF structural repair rejected: a TABLES record has no table name.");let L=D+1;for(;L<r.length&&!(r[L].code===0&&r[L].value.trim().toUpperCase()==="ENDTAB");)L+=1;if(L>=r.length)throw new Error(`DXF structural repair rejected: ${T} table is missing ENDTAB.`);s.set(T,{start:D,end:L,name:T})}if(l<0)throw new Error("DXF structural repair rejected: TABLES section is missing ENDSEC.");for(const D of vS)if(!s.has(D))throw new Error(`DXF structural repair rejected: required ${D} symbol table is missing; re-save the source as a modern ASCII DXF.`);const u=new Set(r.filter(D=>D.code===5||D.code===105).map(D=>D.value.trim().toUpperCase()).filter(D=>/^[0-9A-F]+$/.test(D)));let m=0n;for(const D of u){const S=BigInt(`0x${D}`);S>m&&(m=S)}const f=()=>{do m+=1n;while(u.has(m.toString(16).toUpperCase()));const D=m.toString(16).toUpperCase();return u.add(D),D},g=(...D)=>{const S=[];for(let T=0;T<D.length;T+=2)S.push({code:Number(D[T]),value:String(D[T+1])});return S},y=[],p=D=>g(0,"TABLE",2,D,5,f(),330,"0",100,"AcDbSymbolTable",70,0,0,"ENDTAB"),b=()=>{const D=f();return g(0,"TABLE",2,"VPORT",5,D,330,"0",100,"AcDbSymbolTable",70,1,0,"VPORT",5,f(),330,D,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0,0,"ENDTAB")},v=["VPORT","VIEW","UCS"].filter(D=>!s.has(D));for(const D of v){const S=D==="VPORT"?b():p(D);r.splice(l,0,...S),l+=S.length,y.push(D)}const w=s.get("VPORT");if(w){let D=!1;for(let S=w.start+1;S<w.end;S+=1){if(r[S].code!==0||r[S].value.trim().toUpperCase()!=="VPORT")continue;let T=S+1;for(;T<w.end&&r[T].code!==0;)T+=1;if(r.slice(S,T).some(L=>L.code===2&&L.value.trim().toUpperCase()==="*ACTIVE")){D=!0;break}S=T-1}if(!D){const S=r.findIndex((x,O)=>O>w.start&&O<w.end&&x.code===0),T=r.slice(w.start+1,S).find(x=>x.code===5)?.value.trim();if(!T)throw new Error("DXF structural repair rejected: VPORT table header has no handle.");const L=r.findIndex((x,O)=>O>w.start&&O<S&&x.code===70);L<0?r.splice(S,0,{code:70,value:"1"}):r[L].value=String(Number(r[L].value)+1);const _=g(0,"VPORT",5,f(),330,T,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0),N=r.findIndex((x,O)=>O>w.start&&x.code===0&&x.value.trim().toUpperCase()==="ENDTAB");r.splice(N,0,..._),y.push("VPORT:*ACTIVE")}}if(!y.length)return{dxf:a,addedTables:y};const R=wS(r);return Yp(R),{dxf:R,addedTables:y}}function Zs(a){if(a.byteLength>50*1024*1024)throw new Error("DXF repair limit is 50 MB per file. The original file was not changed.");let r="";const s=a[0]===239&&a[1]===187&&a[2]===191?3:0;for(let f=s;f<a.length;f+=16384)r+=String.fromCharCode(...a.subarray(f,f+16384));if(r.startsWith("AutoCAD Binary DXF"))throw new Error("Binary DXF cannot be repaired in this browser. Save an ASCII DXF copy in AutoCAD first.");const o=Gb(r),l=xS(o.dxf);if(!o.repairs.length&&!l.addedTables.length)return{content:a,repairs:[],addedTables:[]};const u=l.addedTables.length?l.dxf:o.dxf,m=new Uint8Array(u.length);for(let f=0;f<u.length;f+=1)m[f]=u.charCodeAt(f);return{content:m,repairs:o.repairs,addedTables:l.addedTables}}function SS(){const[a,r]=M.useState(""),[s,o]=M.useState(!1),[l,u]=M.useState(!1),m=M.useRef(null);async function f(g){o(!0),u(!1),r("");try{const y=Zs(new Uint8Array(await g.arrayBuffer())),p=new Blob([new Uint8Array(y.content)],{type:"application/dxf"}),b=URL.createObjectURL(p),v=document.createElement("a");v.href=b,v.download="REPAIRED_DRAWING.dxf",document.body.appendChild(v),v.click(),v.remove(),window.setTimeout(()=>URL.revokeObjectURL(b),1e4),r(`${y.repairs.length} symbol-table name(s) repaired; validated copy downloaded. Original file unchanged. AutoCAD open test still required.`)}catch(y){u(!0),r(y instanceof Error?y.message:"DXF repair failed. No download was created.")}finally{o(!1)}}return c.jsxs("div",{className:"dxf-repair-control",children:[c.jsx("button",{className:"btn",type:"button",disabled:s,onClick:()=>m.current?.click(),children:s?"Checking DXF…":"Repair an existing DXF"}),c.jsx("input",{ref:m,type:"file",accept:".dxf",disabled:s,"aria-label":"DXF to repair",hidden:!0,onChange:g=>{const y=g.target.files?.[0];g.target.value="",y&&f(y)}}),c.jsx("p",{children:"Local only · Repairs blank ordinary STYLE/DIMSTYLE names and preserves anonymous SHX shape-font STYLE records as DXF requires. Geometry, layers and SHX definitions stay unchanged. Maximum 50 MB."}),a&&c.jsx("p",{role:l?"alert":"status",children:a})]})}const Ri=["itemTag","description","equipmentName","equipmentType","nominalDiameter","fluidService","lineSpec","fromTag","toTag","notes"];function Xs(a){if(!Array.isArray(a)||a.length>64)throw new Error("Use at most 64 explicit attribute rules.");const r=new Set;return a.map(s=>{const o=s,l=typeof o?.attributeTag=="string"?o.attributeTag.trim().toUpperCase():"";if(!/^[A-Z][A-Z0-9_-]{0,63}$/.test(l)||r.has(l))throw new Error("Attribute tags must be unique, nonblank CAD field names (for example TAG_NO).");if(!Ri.includes(o.edeField)||!["tag","text","number"].includes(o.valueType)||!["inside","above","below"].includes(o.textZone))throw new Error(`Attribute rule ${l} has an unsupported field, value type or text zone.`);return r.add(l),{attributeTag:l,edeField:o.edeField,valueType:o.valueType,textZone:o.textZone}})}function TS(a){const r=new Map;for(const s of a){const o=s.itemTag.trim().toUpperCase();if(!o)continue;const l=r.get(o)??new Set;l.add(s.stableId.toUpperCase()),r.set(o,l)}return[...r].filter(([,s])=>s.size>1).map(([s])=>s).sort()}const Xb=a=>`pid-cad-attribute-rules:v1:${a||"legends-default"}`;function up(a){const r=localStorage.getItem(Xb(a));return r?Xs(JSON.parse(r)):[]}function AS(a,r){const s=new Map(Xs(a).map(o=>[o.attributeTag,o]));for(const o of Xs(r))s.set(o.attributeTag,o);return Xs([...s.values()])}function DS(a,r){return AS(up(`${a}:legends-default`),r?up(`${a}:${r}`):[])}function NS({scope:a}){const[r,s]=M.useState(()=>{try{return up(a)}catch{return[]}}),[o,l]=M.useState(""),[u,m]=M.useState(!1);function f(g,y){s(p=>p.map((b,v)=>v===g?{...b,...y}:b)),m(!0),l("Unsaved changes: save these rules before downloading a runner.")}return c.jsxs("details",{className:"runner-group-hint",children:[c.jsx("summary",{children:"Block attributes · Arial Narrow text"}),c.jsx("p",{children:"Final text keeps its imported height and position. AutoCAD must have Arial Narrow installed. Global Legends attribute rules are inherited by every project automatically. Rules saved here override the same attribute tags only for this scope. No proven value means review—not guessing."}),r.map((g,y)=>c.jsxs("fieldset",{style:{marginBlock:8},children:[c.jsxs("legend",{children:["Attribute rule ",y+1]}),c.jsxs("label",{children:["Block field ",c.jsx("input",{"aria-label":`Attribute tag ${y+1}`,value:g.attributeTag,onChange:p=>f(y,{attributeTag:p.target.value})})]}),c.jsxs("label",{children:["EDE value ",c.jsx("select",{value:g.edeField,onChange:p=>f(y,{edeField:p.target.value}),children:Ri.map(p=>c.jsx("option",{children:p},p))})]}),c.jsxs("label",{children:["Expected type ",c.jsxs("select",{value:g.valueType,onChange:p=>f(y,{valueType:p.target.value}),children:[c.jsx("option",{value:"tag",children:"Tag"}),c.jsx("option",{value:"text",children:"Text"}),c.jsx("option",{value:"number",children:"Number"})]})]}),c.jsxs("label",{children:["PDF text location ",c.jsxs("select",{value:g.textZone,onChange:p=>f(y,{textZone:p.target.value}),children:[c.jsx("option",{value:"inside",children:"Inside symbol"}),c.jsx("option",{value:"above",children:"Above symbol"}),c.jsx("option",{value:"below",children:"Below symbol"})]})]}),c.jsx("button",{className:"btn subtle danger",type:"button",onClick:()=>{s(p=>p.filter((b,v)=>v!==y)),m(!0),l("Save to apply the removal.")},children:"Remove rule"})]},y)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>{s(g=>[...g,{attributeTag:"TAG_NO",edeField:"itemTag",valueType:"tag",textZone:"above"}]),m(!0),l("Save rules before downloading a runner.")},disabled:r.length>=64,children:"Add attribute rule"})," ",c.jsx("button",{className:"btn primary",type:"button",disabled:!u,onClick:()=>{try{const g=Xs(r);localStorage.setItem(Xb(a),JSON.stringify(g)),s(g),m(!1),l("Rules saved locally for this mapping scope.")}catch(g){l(g instanceof Error?g.message:"Rules could not be saved.")}},children:"Save rules"}),o&&c.jsx("p",{role:"status",children:o})]})}const by=128,ea=1e-9;function li(a,r,s){return(r[0]-a[0])*(s[1]-a[1])-(r[1]-a[1])*(s[0]-a[0])}function $l(a,r,s){return Math.abs(li(a,r,s))<=ea&&s[0]>=Math.min(a[0],r[0])-ea&&s[0]<=Math.max(a[0],r[0])+ea&&s[1]>=Math.min(a[1],r[1])-ea&&s[1]<=Math.max(a[1],r[1])+ea}function CS(a,r,s,o){const l=li(a,r,s),u=li(a,r,o),m=li(s,o,a),f=li(s,o,r);return(l>ea&&u<-ea||l<-ea&&u>ea)&&(m>ea&&f<-ea||m<-ea&&f>ea)?!0:Math.abs(l)<=ea&&$l(a,r,s)||Math.abs(u)<=ea&&$l(a,r,o)||Math.abs(m)<=ea&&$l(s,o,a)||Math.abs(f)<=ea&&$l(s,o,r)}function RS(a){return a.reduce((r,s,o)=>{const l=a[(o+1)%a.length];return r+s[0]*l[1]-l[0]*s[1]},0)/2}function ts(a){const r=a.split(";").map(o=>o.trim()).filter(Boolean);if(r.length<3||r.length>by)throw new Error(`Enter 3-${by} valve-body outline points.`);const s=r.map((o,l)=>{const u=o.split(",").map(f=>f.trim());if(u.length!==2||!u[0]||!u[1])throw new Error(`Mask point ${l+1} must be written as X,Y.`);const m=[Number(u[0]),Number(u[1])];if(!m.every(Number.isFinite))throw new Error(`Mask point ${l+1} must contain finite X,Y values.`);return m});if(s.some((o,l)=>{const u=s[(l+1)%s.length];return Math.hypot(o[0]-u[0],o[1]-u[1])<=ea}))throw new Error("The valve mask outline cannot contain duplicate adjacent points.");for(let o=0;o<s.length;o+=1){const l=(o+1)%s.length;for(let u=o+1;u<s.length;u+=1){const m=(u+1)%s.length;if(!(o===u||l===u||m===o)&&CS(s[o],s[l],s[u],s[m]))throw new Error("The valve mask outline must not cross or touch itself.")}}if(Math.abs(RS(s))<=ea)throw new Error("The valve mask outline must enclose an area.");return s}function _S(a){return`(${a.map(([r,s])=>`(${r} ${s})`).join(" ")})`}const pp=["PFD","P&ID","Data sheet"],Jr=["A0","A1","A2","A3","A4"],Wb="pid-mapping-studio:cad-standards:v1";function fp(){return{schemaVersion:"1.0.0",companyDefaults:{PFD:"A1","P&ID":"A1","Data sheet":"A4"},companyItems:[],projects:{},reviewCandidates:[],auditTrail:[]}}function IS(){return fp()}function rs(a,r,s){return{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:a,detail:r,...s?{projectName:s}:{}}}function hp(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&typeof r.name=="string"&&typeof r.summary=="string"&&typeof r.sourceFile=="string"&&["titleBlock","layer","textStyle","linetype","dimensionStyle","symbol","directionArrow","legend"].includes(String(r.category))&&["extracted-dwg","approved-source-drawing","synthetic-demo"].includes(String(r.sourceKind))&&["company","project"].includes(String(r.scope))&&["reviewed","needs-review"].includes(String(r.reviewStatus))&&typeof r.canPromote=="boolean"&&Array.isArray(r.fields)&&r.fields.every(s=>typeof s?.label=="string"&&typeof s?.value=="string")&&(r.sheetSize===void 0||Jr.includes(r.sheetSize))&&(r.scope!=="project"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function LS(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&hp(r.item)&&["company","project","unclassified"].includes(String(r.proposedScope))&&typeof r.sourceGroup=="string"&&["needs-review","approved","dismissed"].includes(String(r.status))&&(r.proposedScope==="company"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function Kb(a){if(!a||typeof a!="object")return!1;const r=a;return r.schemaVersion!=="1.0.0"||!r.companyDefaults||!r.companyItems||!Array.isArray(r.companyItems)||!r.projects||typeof r.projects!="object"||r.reviewCandidates!==void 0&&!Array.isArray(r.reviewCandidates)||!Array.isArray(r.auditTrail)||!pp.every(s=>Jr.includes(r.companyDefaults[s]))||!r.companyItems.every(s=>hp(s)&&s.scope==="company")||!(r.reviewCandidates??[]).every(s=>LS(s))||!r.auditTrail.every(s=>!!(s&&typeof s.id=="string"&&typeof s.at=="string"&&typeof s.action=="string"&&typeof s.detail=="string"))?!1:Object.entries(r.projects).every(([s,o])=>!!(s&&o&&typeof o.projectName=="string"&&o.defaults&&Object.entries(o.defaults).every(([l,u])=>pp.includes(l)&&Jr.includes(u))&&Array.isArray(o.items)&&o.items.every(l=>hp(l)&&l.scope==="project"&&l.projectId===s)))}const yi="cad-standards-changed";function bi(a){if(!Kb(a))throw new Error("CAD standards could not be saved because the library data is invalid.");try{window.localStorage.setItem(Wb,JSON.stringify(a))}catch{throw new Error("This browser could not save the CAD standards locally. Export or back up the library before leaving this page.")}typeof window.dispatchEvent=="function"&&window.dispatchEvent(new Event(yi))}function xn(){let a;try{a=window.localStorage.getItem(Wb)}catch{throw new Error("This browser could not read its local CAD standards library.")}if(a===null){const g=fp();return bi(g),g}let r;try{r=JSON.parse(a)}catch{throw new Error("The locally saved CAD standards library is not valid JSON. It was left unchanged.")}if(!Kb(r))throw new Error("The locally saved CAD standards library has invalid fields. It was left unchanged.");const s={...r,reviewCandidates:r.reviewCandidates??[]},o=fp(),l=o.companyItems.filter(g=>!s.companyItems.some(y=>y.id===g.id)),u=new Set(s.reviewCandidates.map(g=>g.id)),m=o.reviewCandidates.filter(g=>!u.has(g.id));if(!l.length&&!m.length)return s;const f={...s,companyItems:[...s.companyItems,...l],reviewCandidates:[...s.reviewCandidates,...m],auditTrail:[...s.auditTrail,rs("Source mappings added to review queue",`${m.length} anonymized source mappings were added as pending review. Existing approvals, dismissals, and project settings were preserved.`)]};return bi(f),f}function Zb(a,r,s){const o=[...a.companyItems.map(m=>({item:m,scopePriority:0})),...r?(a.projects[r]?.items??[]).map(m=>({item:m,scopePriority:2})):[]],l=new Map;for(const{item:m,scopePriority:f}of o){if(!["layer","textStyle","linetype","dimensionStyle"].includes(m.category)||m.sourceKind!=="extracted-dwg"||m.reviewStatus!=="reviewed")continue;const g=R=>m.fields.find(D=>D.label===R)?.value?.trim()??"",y=g("CAD name"),p=g("Source discipline");if(!y)throw new Error(`Reviewed Legends Library ${m.category} standard "${m.name}" has no CAD name. Re-extract it before generating the runner.`);if(!["Shared",s].includes(p))continue;const b=g("Extracted details"),v=`${m.category}:${y.toUpperCase()}`,w=l.get(v)??[];w.push({item:m,priority:f+(p===s?1:0),cadName:y,sourceDiscipline:p,detail:b}),l.set(v,w)}const u=[];for(const m of l.values()){const f=Math.max(...m.map(p=>p.priority)),g=m.filter(p=>p.priority===f).sort((p,b)=>p.item.id.localeCompare(b.item.id));if(new Set(g.map(p=>p.detail)).size>1){const p=g[0];throw new Error(`Conflicting reviewed Legends Library ${p.item.category} standards named "${p.cadName}" for ${p.sourceDiscipline}. Resolve the duplicate before generating the runner.`)}u.push(g[0].item)}return u.sort((m,f)=>m.category.localeCompare(f.category)||m.name.localeCompare(f.name))}function PS(a,r,s){const o=Zb(a,r,s),l=(f,g)=>f.fields.find(y=>y.label===g)?.value?.trim()??"";if(!o.some(f=>f.category==="layer")||!o.some(f=>f.category==="textStyle"&&/(?:^|;)font=(?:[^;]*[\\/])?arial(?:n|narrow)(?:\.ttf)?(?:;|$)/i.test(l(f,"Extracted details"))))throw new Error("LEGENDS_LIBRARY_INCOMPLETE: reviewed CAD layers and Arial Narrow text styles are required. Import/review the private Legends Library once in this browser; company approvals then apply to every project automatically. No approximate runner was downloaded.");const u=new Set(o.map(f=>l(f,"Source drawing ID")).filter(Boolean)),m=a.reviewCandidates.filter(f=>f.status==="needs-review"&&["layer","textStyle","linetype","dimensionStyle"].includes(f.item.category)&&u.has(l(f.item,"Source drawing ID"))&&(f.proposedScope!=="project"||f.projectId===r)&&["Shared",s].includes(l(f.item,"Source discipline")));if(m.length)throw new Error(`LEGENDS_LIBRARY_INCOMPLETE: ${m.length} standard record(s) from the active Legends source still need review. Existing approvals were preserved; no partial standards runner was downloaded.`);return o}function kS(a,r){return a.some(s=>s.category==="titleBlock"&&s.reviewStatus==="reviewed"&&(s.sheetSize===r||s.fields.some(o=>o.label==="Sheet size"&&o.value===r)))}function OS(a,r,s){if(a.companyDefaults[r]===s)return a;if(!kS(a.companyItems,s))throw new Error(`Approve a company title-block mapping for ${s} before making it a company default.`);return{...a,companyDefaults:{...a.companyDefaults,[r]:s},auditTrail:[rs("Company sheet-size default changed",`${r} changed to ${s} after an approved company title-block mapping was available.`),...a.auditTrail]}}function ec(a,r,s,o=[],l){const u=a.reviewCandidates.find(w=>w.id===r);if(!u||u.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");if(s==="company"&&u.proposedScope!=="company")throw new Error("Only a source classified for the Legends Library can be approved there.");if(s==="project"&&u.proposedScope==="company")throw new Error("Legends Library source mappings must be approved to the Legends Library.");if(l&&!(u.item.sourceKind==="extracted-dwg"&&["symbol","directionArrow"].includes(u.item.category)&&["symbol","directionArrow"].includes(l)))throw new Error("Only an extracted CAD block can be reviewed as a Direction Arrow or a standard symbol.");const m=l??u.item.category;let f=[...u.item.fields.filter(w=>!o.some(R=>R.label===w.label)),...o];if(m==="directionArrow"&&(f=f.filter(w=>!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(w.label))),m==="symbol"&&u.item.sourceKind==="extracted-dwg"&&(!f.some(w=>w.label==="Fallback category"&&w.value.trim())||!f.some(w=>w.label==="Block asset ID"&&w.value.trim())))throw new Error("A fallback category and locally extracted block file are required before approving this symbol.");if(m==="symbol"&&u.item.sourceKind==="extracted-dwg"&&f.find(w=>w.label==="Fallback category")?.value.trim().toLowerCase()==="valve"){const w=f.find(R=>R.label==="Wipeout mask boundary")?.value??"";try{ts(w)}catch(R){throw new Error(`A reviewed valve-body mask outline is required before approving this valve. ${R instanceof Error?R.message:"Check the X,Y point list."}`)}}if(m==="symbol"&&u.item.sourceKind==="extracted-dwg"){const w=f.find(T=>T.label==="Target CAD layer")?.value.trim()??"",R=f.find(T=>T.label==="Source discipline")?.value.trim()??"";if(!(s==="company"?a.companyItems:[...u.projectId?a.projects[u.projectId]?.items??[]:[],...a.companyItems]).some(T=>{if(T.category!=="layer"||T.sourceKind!=="extracted-dwg"||T.reviewStatus!=="reviewed")return!1;const L=T.fields.find(x=>x.label==="CAD name")?.value.trim()??"",_=T.fields.find(x=>x.label==="Source discipline")?.value.trim()??"",N=R==="Shared"?_==="Shared":_==="Shared"||_===R;return w&&w.toUpperCase()!=="0"&&L.toLowerCase()===w.toLowerCase()&&N}))throw new Error("Approve a compatible non-zero CAD layer before approving this symbol. Layer 0 cannot be used for block placement.")}const g={...u.item,category:m,fields:f,scope:s,reviewStatus:"reviewed",canPromote:!1,...s==="project"?{projectId:u.projectId,projectName:u.projectName}:{projectId:void 0,projectName:void 0}};let y=a.companyItems,p=a.projects;if(s==="company")y=[...a.companyItems.filter(w=>w.id!==g.id),g];else{const w=u.projectId,R=u.projectName;if(!w||!R)throw new Error("The isolated project scope is not available for this mapping.");const D=a.projects[w]??{projectName:R,defaults:{},items:[]};p={...a.projects,[w]:{...D,projectName:R,items:[...D.items.filter(S=>S.id!==g.id),g]}}}const b=a.reviewCandidates.map(w=>w.id===r?{...w,status:"approved"}:w),v=s==="company"?"Legends Library":`isolated ${u.projectName} library`;return{...a,companyItems:y,projects:p,reviewCandidates:b,auditTrail:[rs("Source mapping approved",`${m} mapping ${u.item.name} was approved to ${v}.`,u.projectName),...a.auditTrail]}}const gp={EQUIP:{layerName:"EQUIP",fallbackCategory:"equipment"},F_EQUIP:{layerName:"f_Equip",fallbackCategory:"equipment"},F_INST:{layerName:"f_Inst",fallbackCategory:"instrument"},F_PIPE_INLINE:{layerName:"f_Pipe_Inline",fallbackCategory:"inline component"}};function mp(a,r){return a.item.fields.find(s=>s.label===r)?.value.trim()??""}function jS(a,r,s){return[...a.filter(o=>o.label!==r),{label:r,value:s}]}function qS(a){const o=mp(a,"Extracted details").match(/(?:^|;)sourceLayer=([^;]*)/i)?.[1]??mp(a,"Source insert layer(s)");return[...new Set(o.split(",").map(l=>l.trim().toUpperCase()).filter(Boolean))]}function Qr(a){return a.fields.find(r=>r.label==="CAD name")?.value.trim()??""}function MS(a){return a.fields.find(r=>r.label==="Source drawing ID")?.value.trim()??""}function vy(a){return a.fields.find(r=>r.label==="Extracted details")?.value.trim()??""}function Qb(a){return a.fields.find(r=>r.label==="Source discipline")?.value.trim()??""}function $S(a,r){return a.category==="layer"&&a.sourceKind==="extracted-dwg"&&a.reviewStatus==="reviewed"&&a.scope==="company"&&Qr(a).toUpperCase()===r.toUpperCase()&&Qb(a).toUpperCase()==="SHARED"}function FS(a,r,s){const o=new Set(r),l={unsupportedLayer:0,ambiguousLayer:0,missingAsset:0,missingLayer:0,invalidCandidate:0},u=a.reviewCandidates.filter(v=>v.status==="needs-review"&&v.proposedScope==="company"&&o.has(v.sourceGroup)),m=new Map,f=[];for(const v of u){if(v.item.category!=="symbol"||v.item.sourceKind!=="extracted-dwg")continue;const w=qS(v);if(w.length!==1){l.ambiguousLayer+=w.length>1?1:0,l.unsupportedLayer+=w.length===0?1:0;continue}const R=w[0].toUpperCase(),D=gp[R];if(!D){l.unsupportedLayer+=1;continue}const S=mp(v,"Block asset ID");if(!S||!s.has(S)){l.missingAsset+=1;continue}const T=`${v.sourceGroup}|${R}`;m.set(T,{sourceId:v.sourceGroup,layerName:D.layerName}),f.push({candidateId:v.id,sourceId:v.sourceGroup,layerKey:T,fallbackCategory:D.fallbackCategory,blockAssetId:S})}let g=a;const y=new Map;let p=0;for(const[v,w]of m){const R=g.companyItems.find(T=>T.category==="layer"&&T.sourceKind==="extracted-dwg"&&T.reviewStatus==="reviewed"&&MS(T)===w.sourceId&&Qr(T).toUpperCase()===w.layerName.toUpperCase());if(R){const T={...R,fields:jS(R.fields,"Source discipline","Shared")};g={...g,companyItems:g.companyItems.map(L=>L.id===R.id?T:L),reviewCandidates:g.reviewCandidates.map(L=>L.id===R.id?{...L,item:T}:L)},Qb(R).toUpperCase()!=="SHARED"&&(p+=1),y.set(v,Qr(T));continue}const D=g.reviewCandidates.find(T=>T.status==="needs-review"&&T.proposedScope==="company"&&T.sourceGroup===w.sourceId&&T.item.category==="layer"&&T.item.sourceKind==="extracted-dwg"&&Qr(T.item).toUpperCase()===w.layerName.toUpperCase()),S=g.companyItems.find(T=>$S(T,w.layerName));if(S){const T=D?vy(D.item):"",L=vy(S);if(!D||T&&T===L){y.set(v,Qr(S));continue}l.invalidCandidate+=1;continue}if(!D){l.missingLayer+=1;continue}try{g=ec(g,D.id,"company",[{label:"Source discipline",value:"Shared"}]);const T=g.companyItems.find(_=>_.id===D.item.id),L=Qr(T||D.item);y.set(v,L),p+=1}catch{l.invalidCandidate+=1}}let b=0;for(const v of f){const w=y.get(v.layerKey);if(!w){l.missingLayer+=1;continue}try{g=ec(g,v.candidateId,"company",[{label:"Source discipline",value:"Shared"},{label:"Fallback category",value:v.fallbackCategory},{label:"Target CAD layer",value:w}]),b+=1}catch{l.invalidCandidate+=1}}return(p||b)&&(g={...g,auditTrail:[rs("Categorized CAD source batch approved",`${p} placement layer(s) and ${b} layer-matched symbol(s) approved for shared PFD/P&ID use.`),...a.auditTrail]}),{library:g,approvedLayers:p,approvedSymbols:b,skipped:l}}function US(a,r,s){const o=a.companyItems.find(p=>p.id===r),l=Object.entries(a.projects).find(([,p])=>p.items.some(b=>b.id===r)),u=o??l?.[1].items.find(p=>p.id===r);if(!u||u.reviewStatus!=="reviewed")throw new Error("The selected approved CAD mapping is no longer available.");if(u.category!=="symbol"||u.sourceKind!=="extracted-dwg")throw new Error("Only reviewed extracted symbol mappings can be updated here.");const m=[...u.fields.filter(p=>!s.some(b=>b.label===p.label)),...s];if(m.find(p=>p.label==="Fallback category")?.value.trim().toLowerCase()==="valve")try{ts(m.find(p=>p.label==="Wipeout mask boundary")?.value??"")}catch(p){throw new Error(`A reviewed valve-body mask outline is required. ${p instanceof Error?p.message:"Check the X,Y point list."}`)}const f={...u,fields:m},g=o?a.companyItems.map(p=>p.id===r?f:p):a.companyItems,y=l?{...a.projects,[l[0]]:{...l[1],items:l[1].items.map(p=>p.id===r?f:p)}}:a.projects;return{...a,companyItems:g,projects:y,auditTrail:[rs("Reviewed valve mask updated",`The approved symbol mapping ${u.name} received a reviewed Wipeout mask outline.`,u.projectName),...a.auditTrail]}}function BS(a,r){const s=a.reviewCandidates.find(o=>o.id===r);if(!s||s.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");return{...a,reviewCandidates:a.reviewCandidates.map(o=>o.id===r?{...o,status:"dismissed"}:o),auditTrail:[rs("Source mapping dismissed",`${s.item.category} mapping ${s.item.name} was dismissed from the review queue.`,s.projectName),...a.auditTrail]}}function zS(a,r,s,o,l){if(!r.trim()||!s.trim())throw new Error("Choose a project before saving its title-block override.");const u=a.projects[r]??{defaults:{},items:[]},m={...u.defaults,[o]:l},f=[...a.projects[r]?.items??[],...a.companyItems].find(b=>b.category==="titleBlock"&&b.reviewStatus==="reviewed"&&(b.sheetSize===l||b.fields.some(v=>v.label==="Sheet size"&&v.value===l)));if(!f)throw new Error(`Approve a title-block mapping for ${l} before saving this project default.`);const g=`project-default-${o.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,y={...f,id:g,name:`${l} · ${o} project default`,summary:`Project-only choice for ${o}. The company default remains ${a.companyDefaults[o]}.`,scope:"project",projectId:r,projectName:s,canPromote:!1,fields:[...f.fields,{label:"Override purpose",value:o},{label:"Project choice",value:l},{label:"Company default",value:a.companyDefaults[o]}]};return{...a,projects:{...a.projects,[r]:{projectName:s,defaults:m,items:[...u.items.filter(b=>b.id!==g),y]}},auditTrail:[rs("Project title-block override saved",`${o} set to ${l}; company default remains ${a.companyDefaults[o]}. Other project libraries are unchanged.`,s),...a.auditTrail]}}const Uu=4294967295,YS=(()=>{const a=new Uint32Array(256);for(let r=0;r<a.length;r+=1){let s=r;for(let o=0;o<8;o+=1)s=s&1?3988292384^s>>>1:s>>>1;a[r]=s>>>0}return a})();function Bu(a,r){const s=new Uint8Array(a);return r(new DataView(s.buffer)),s}function Ey(a){return a.buffer instanceof ArrayBuffer?new Uint8Array(a.buffer,a.byteOffset,a.byteLength):a.slice().buffer}function HS(a,r){if(a.length===0)throw new Error("The runner ZIP contains no files.");if(a.length>65535)throw new Error("The local ZIP cannot contain more than 65,535 files.");const s=new TextEncoder,o=[],l=[];let u=0,m=0;for(const[g,y]of a.entries()){const p=s.encode(y.path),b=y.content.byteLength;if(!p.length||p.length>65535)throw new Error(`A runner ZIP path is empty or too long: ${y.path||"(empty path)"}`);if(b>Uu)throw new Error(`A file is too large for a standard ZIP archive: ${y.path}`);if(u+30+p.length+b>Uu)throw new Error("The runner ZIP is larger than the supported 4 GB ZIP limit.");let v=4294967295;for(let S=0;S<b;S+=1){const T=y.content[S];v=YS[(v^T)&255]^v>>>8}const w=(v^4294967295)>>>0,R=Bu(30+p.length,S=>{S.setUint32(0,67324752,!0),S.setUint16(4,20,!0),S.setUint16(6,2048,!0),S.setUint16(8,0,!0),S.setUint16(10,0,!0),S.setUint16(12,33,!0),S.setUint32(14,w,!0),S.setUint32(18,b,!0),S.setUint32(22,b,!0),S.setUint16(26,p.length,!0),S.setUint16(28,0,!0),new Uint8Array(S.buffer,30,p.length).set(p)});o.push(R,Ey(y.content));const D=Bu(46+p.length,S=>{S.setUint32(0,33639248,!0),S.setUint16(4,20,!0),S.setUint16(6,20,!0),S.setUint16(8,2048,!0),S.setUint16(10,0,!0),S.setUint16(12,0,!0),S.setUint16(14,33,!0),S.setUint32(16,w,!0),S.setUint32(20,b,!0),S.setUint32(24,b,!0),S.setUint16(28,p.length,!0),S.setUint16(30,0,!0),S.setUint16(32,0,!0),S.setUint16(34,0,!0),S.setUint16(36,0,!0),S.setUint32(38,0,!0),S.setUint32(42,u,!0),new Uint8Array(S.buffer,46,p.length).set(p)});if(l.push(D),m+=D.length,u+=R.length+b,m>Uu)throw new Error("The runner ZIP index is larger than the supported 4 GB ZIP limit.")}const f=Bu(22,g=>{g.setUint32(0,101010256,!0),g.setUint16(4,0,!0),g.setUint16(6,0,!0),g.setUint16(8,a.length,!0),g.setUint16(10,a.length,!0),g.setUint32(12,m,!0),g.setUint32(16,u,!0),g.setUint16(20,0,!0)});return new Blob([...o,...l.map(Ey),f],{type:"application/zip"})}function VS(a){return HS(a)}function GS(a,r){return typeof Worker>"u"?Promise.reject(new Error("This browser cannot prepare a large runner ZIP in the background. Open the app in current Chrome or Edge and retry.")):new Promise((s,o)=>{let l;try{l=new Worker(new URL("/pid-mapping-studio-app/assets/zip-binary.worker-BYy3I0Xl.js",import.meta.url),{type:"module"})}catch{o(new Error("The background ZIP worker could not start. Refresh the app and retry in Chrome or Edge."));return}let u=!1;const m=window.setTimeout(()=>{f(new Error("Runner ZIP preparation exceeded 10 minutes. The current download was not created; try a smaller PDF batch."))},600*1e3),f=(g,y)=>{u||(u=!0,window.clearTimeout(m),l.terminate(),g?o(g):y?s(y):o(new Error("The background ZIP worker returned no download file.")))};l.onmessage=g=>{g.data.type==="progress"&&g.data.progress?r?.(g.data.progress):g.data.type==="complete"&&g.data.blob?f(void 0,g.data.blob):g.data.type==="error"&&f(new Error(g.data.message||"Runner ZIP preparation failed."))},l.onerror=g=>{g.preventDefault(),f(new Error(g.message||"The background ZIP worker failed."))};try{const g=new Set,y=a.map(p=>{let b,v=p.content.byteOffset,w=p.content.byteLength;if(p.content.buffer instanceof ArrayBuffer)b=p.content.buffer;else{const R=new Uint8Array(p.content);b=R.buffer,v=0,w=R.byteLength}return g.add(b),{path:p.path,buffer:b,byteOffset:v,byteLength:w}});l.postMessage({files:y},[...g])}catch(g){f(g instanceof Error?g:new Error("Runner files could not be sent to the ZIP worker."))}})}function XS(a,r,s){return a.filter(o=>(o.discipline===r||o.discipline==="Shared")&&(!s||o.category==="company-standard"||o.projectLabel===s))}const WS="pid-mapping-studio-local-cad-library",KS=3,Dn="source-drawings",Nn="extracted-block-assets",Pr="project-title-blocks",Jb=100*1024*1024;function ZS(a,r){if(!/\.dwg$/i.test(a.trim()))throw new Error("Upload a standalone AutoCAD DWG title block. Save a DWT as DWG first.");if(r.byteLength>Jb)throw new Error("The project title block is larger than the 100 MB local upload limit.");const s=new TextDecoder().decode(r.subarray(0,6));if(!/^AC10\d{2}$/.test(s))throw new Error("This file does not have a recognized AutoCAD DWG header.")}function hn(){return typeof indexedDB>"u"?Promise.reject(new Error("This browser does not support local drawing-library storage.")):new Promise((a,r)=>{const s=indexedDB.open(WS,KS);s.onupgradeneeded=()=>{const o=s.result;o.objectStoreNames.contains(Dn)||o.createObjectStore(Dn,{keyPath:"id"}),o.objectStoreNames.contains(Nn)||o.createObjectStore(Nn,{keyPath:"id"}),o.objectStoreNames.contains(Pr)||o.createObjectStore(Pr,{keyPath:"projectId"})},s.onsuccess=()=>a(s.result),s.onerror=()=>r(s.error??new Error("The local drawing library could not be opened.")),s.onblocked=()=>r(new Error("The local drawing library is busy in another browser tab. Close the other tab and try again."))})}async function tc(){const a=await hn();try{return await new Promise((r,s)=>{const l=a.transaction(Dn,"readonly").objectStore(Dn).getAll();l.onsuccess=()=>{const u=l.result;r(u.map(({id:m,label:f,category:g,discipline:y,format:p,bytes:b,projectLabel:v,standardsMaster:w})=>({id:m,label:f,category:g,discipline:y??"Shared",format:p??"DWG",bytes:b,...v?{projectLabel:v}:{},...w?{standardsMaster:!0}:{}})).sort((m,f)=>m.label.localeCompare(f.label)))},l.onerror=()=>s(l.error??new Error("The local drawing library could not be read."))})}finally{a.close()}}async function Ws(a){const r=await hn();try{return await new Promise((s,o)=>{const l=r.transaction(Dn,"readonly").objectStore(Dn).get(a);l.onsuccess=()=>{const u=l.result;if(!u){o(new Error("An approved mapping refers to a source DWG that is no longer in the local library."));return}s(new Uint8Array(u.content))},l.onerror=()=>o(l.error??new Error("The local source drawing could not be read."))})}finally{r.close()}}async function yp(a,r=!1){if(!a.length)return;const s=await hn();try{await new Promise((o,l)=>{const u=s.transaction(Nn,"readwrite"),m=u.objectStore(Nn);for(const f of a){const g=m.get(f.id);g.onsuccess=()=>{const y=g.result;if(r&&y)return;const p={id:f.id,sourceId:f.sourceId,blockName:f.blockName,content:f.content.slice().buffer,format:f.format??y?.format??"DWG",...f.previewSvg===null?{}:f.previewSvg!==void 0?{previewSvg:f.previewSvg}:y?.previewSvg?{previewSvg:y.previewSvg}:{},...f.nearbyLabels!==void 0?{nearbyLabels:f.nearbyLabels}:y?.nearbyLabels?{nearbyLabels:y.nearbyLabels}:{},...f.labelMatchSkipped!==void 0?{labelMatchSkipped:f.labelMatchSkipped}:y?.labelMatchSkipped!==void 0?{labelMatchSkipped:y.labelMatchSkipped}:{},...f.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:f.labelMatchAmbiguous}:y?.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:y.labelMatchAmbiguous}:{},...f.sourcePlacements!==void 0?{sourcePlacements:f.sourcePlacements}:y?.sourcePlacements?{sourcePlacements:y.sourcePlacements}:{},...f.geometryDescriptor!==void 0?{geometryDescriptor:f.geometryDescriptor}:y?.geometryDescriptor?{geometryDescriptor:y.geometryDescriptor}:{}};m.put(p)}}u.oncomplete=()=>o(),u.onerror=()=>l(u.error??new Error("Extracted symbol blocks could not be saved locally.")),u.onabort=()=>l(u.error??new Error("Saving extracted symbol blocks was cancelled."))})}finally{s.close()}}async function QS(){const a=await hn();try{return await new Promise((r,s)=>{const o=a.transaction(Nn,"readonly").objectStore(Nn).getAllKeys();o.onsuccess=()=>r(new Set(o.result.map(String))),o.onerror=()=>s(o.error??new Error("Local block availability could not be checked."))})}finally{a.close()}}async function ev(a){const r=await hn();try{return await new Promise((s,o)=>{const l=r.transaction(Nn,"readonly").objectStore(Nn).get(a);l.onsuccess=()=>{const u=l.result;if(!u){s({nearbyLabels:[],labelMatchSkipped:!1});return}s({format:u.format??"DWG",...u.previewSvg?{previewSvg:u.previewSvg}:{},nearbyLabels:u.nearbyLabels??[],labelMatchSkipped:u.labelMatchSkipped??!1,...u.labelMatchAmbiguous?{labelMatchAmbiguous:!0}:{},...u.sourcePlacements?{sourcePlacements:u.sourcePlacements}:{},...u.geometryDescriptor?{geometryDescriptor:u.geometryDescriptor}:{}})},l.onerror=()=>o(l.error??new Error("The local block preview could not be read."))})}finally{r.close()}}async function tv(a){const r=await hn();try{return await new Promise((s,o)=>{const l=r.transaction(Nn,"readonly").objectStore(Nn).get(a);l.onsuccess=()=>{const u=l.result;if(!u){o(new Error("An approved symbol block is missing from this browser’s local CAD library. Re-import its extraction package."));return}s(new Uint8Array(u.content))},l.onerror=()=>o(l.error??new Error("The approved symbol block could not be read locally."))})}finally{r.close()}}async function mc(a){if(!a.trim())return null;const r=await hn();try{return await new Promise((s,o)=>{const l=r.transaction(Pr,"readonly").objectStore(Pr).get(a);l.onsuccess=()=>s(l.result??null),l.onerror=()=>o(l.error??new Error("The project title block could not be read locally."))})}finally{r.close()}}function Hp(a,r){if(a.workspaceType&&a.workspaceType!==r)throw new Error(`This title block belongs to ${a.workspaceType}, not ${r}. Upload a separate title block for each workspace.`);return{projectId:a.projectId,workspaceType:r,titleBlockId:a.titleBlockId??`legacy-${a.projectId}-${a.uploadedAt}`,titleBlockPath:a.titleBlockPath??"PROJECT_TITLE_BLOCK.dwg",xrefName:a.xrefName??"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:a.expectedSize??{widthMm:841,heightMm:594},version:a.version??1,bytes:a.bytes,uploadedAt:a.uploadedAt}}async function wy(a,r){const s=await mc(a);return s?Hp(s,r):null}async function JS(a,r){const s=await mc(a);return s?{...Hp(s,r),content:new Uint8Array(s.content)}:null}async function eT(a,r,s,o){if(!a.trim())throw new Error("Select a project before uploading its title block.");if(!["PFD","P&ID"].includes(r))throw new Error("Choose either a PFD or P&ID workspace for this title block.");ZS(s,o);const l=await mc(a);if(l?.workspaceType&&l.workspaceType!==r)throw new Error(`This folder already has a ${l.workspaceType} title block. Keep PFD and P&ID title blocks in separate workspaces.`);const u=new Date().toISOString(),m=(l?.version??(l?1:0))+1,f={projectId:a,workspaceType:r,titleBlockId:globalThis.crypto?.randomUUID?.()??`title-block-${Date.now()}`,titleBlockPath:"PROJECT_TITLE_BLOCK.dwg",xrefName:"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:{widthMm:841,heightMm:594},version:m,bytes:o.byteLength,uploadedAt:u,content:o.slice().buffer},g=await hn();try{await new Promise((y,p)=>{const b=g.transaction(Pr,"readwrite");b.objectStore(Pr).put(f),b.oncomplete=()=>y(),b.onerror=()=>p(b.error??new Error("The project title block could not be saved locally.")),b.onabort=()=>p(b.error??new Error("Saving the project title block was cancelled."))})}finally{g.close()}return{...Hp(f,r)}}async function tT(a,r){if(!a.trim())return;const s=await mc(a);if(s?.workspaceType&&s.workspaceType!==r)throw new Error(`This title block belongs to ${s.workspaceType}; it was not removed from the ${r} workspace.`);const o=await hn();try{await new Promise((l,u)=>{const m=o.transaction(Pr,"readwrite");m.objectStore(Pr).delete(a),m.oncomplete=()=>l(),m.onerror=()=>u(m.error??new Error("The project title block could not be removed locally.")),m.onabort=()=>u(m.error??new Error("Removing the project title block was cancelled."))})}finally{o.close()}}async function aT(a){if(!a.length)return;const r=await hn();try{await new Promise((s,o)=>{const l=r.transaction(Dn,"readwrite"),u=l.objectStore(Dn);for(const m of a){const f=m.content.slice().buffer,{content:g,...y}=m;u.put({...y,content:f,createdAt:new Date().toISOString()})}l.oncomplete=()=>s(),l.onerror=()=>o(l.error??new Error("The local drawing library could not be saved.")),l.onabort=()=>o(l.error??new Error("The local drawing library save was cancelled."))})}finally{r.close()}}async function nT(a,r){const s=await hn();try{await new Promise((o,l)=>{const u=s.transaction(Dn,"readwrite"),m=u.objectStore(Dn),f=m.get(a);f.onsuccess=()=>{const g=f.result;if(!g){u.abort(),l(new Error("That source drawing is no longer in the local library."));return}m.put({...g,...r,standardsMaster:r.category==="company-standard"&&g.format==="DXF"?r.standardsMaster??g.standardsMaster:!1,projectLabel:r.projectLabel?.trim()||void 0})},f.onerror=()=>l(f.error??new Error("The source drawing could not be updated.")),u.oncomplete=()=>o(),u.onerror=()=>l(u.error??new Error("The source drawing update failed.")),u.onabort=()=>l(u.error??new Error("The source drawing update was cancelled."))})}finally{s.close()}}const rT=String.raw`
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
`;function Qo(a,r){let s=0,o=!1,l=!1,u=0;for(let m=0;m<=a.length;m+=1){const f=a[m];if(o?l?l=!1:f==="\\"?l=!0:f==='"'&&(o=!1):f==='"'?o=!0:f==="("?u+=1:f===")"&&(u-=1),m===a.length||f===";"&&!o&&u===0){const g=a.slice(s,m).trim(),y=g.indexOf("=");if(g.slice(0,y).trim().toLowerCase()===r.toLowerCase())return g.slice(y+1).trim();s=m+1}}}function xy(a){if(/^nil$/i.test(a.trim()))return[];let r=0;const s=()=>{for(;/\s/.test(a[r]??"")&&r<a.length;)r+=1},o=g=>{if(s(),!a.startsWith(g,r))throw new Error("Invalid DXF property list.");r+=g.length},l=()=>{s();const g=a.slice(r).match(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/i)?.[0];if(!g||!Number.isFinite(Number(g)))throw new Error("Invalid DXF numeric property.");return r+=g.length,Number(g)},u=()=>{o('"');let g="";for(;r<a.length;){const y=a[r++];if(y==='"')return g;if(y==="\\"){const p=a[r++];if(p!=="\\"&&p!=='"')throw new Error("Unsupported DXF string escape.");g+=p}else{if(y.charCodeAt(0)<32)throw new Error("Invalid control character in DXF property.");g+=y}}throw new Error("Unterminated DXF string.")};o("(");const m=[],f=new Set;for(;;){if(s(),a[r]===")"){r+=1;break}o("(");const g=l();if(!Number.isInteger(g)||f.has(g))throw new Error("Duplicate or invalid DXF property code.");f.add(g),o("."),s();const y=a[r]==='"'?u():l();if(o(")"),m.push([g,y]),m.length>200)throw new Error("Too many DXF properties.")}if(s(),r!==a.length)throw new Error("Unexpected code after DXF properties.");return m}function sT(a){return a>=40&&a<=99&&a!==70||a>=140&&a<=149||a>=170&&a<=179||a>=270&&a<=299||a>=370&&a<=389||a>=420&&a<=429||a>=440&&a<=459}function oT(a,r){const s=o=>{throw new Error(`Legends dimension style "${a}": ${o} Re-extract it with the current local extractor; partial dimension settings are not substituted.`)};Qo(r,"format")!=="DXF_PROPERTIES_V1"&&s("complete DXF properties are missing."),Qo(r,"recordComplete")!=="1"&&s("the complete native DXF table-record declaration is missing."),/^(?:\(\s*\)|nil)$/i.test(Qo(r,"unsupportedCodes")??"")||s("unsupported source properties were reported.");try{const o=xy(Qo(r,"dxfData")??""),l=xy(Qo(r,"resources")??"");return o.every(([u,m])=>sT(u)&&typeof m=="number"||[3,4].includes(u)&&typeof m=="string")||s("invalid property type."),l.every(([u,m])=>u>=340&&u<=347&&typeof m=="string"&&m.trim())||s("invalid named resource."),l.some(([u])=>u===340)||s("the source text-style reference is missing."),{properties:o,resources:l}}catch(o){if(o instanceof Error&&o.message.startsWith("Legends dimension style"))throw o;return s(o instanceof Error?o.message:"invalid DXF properties.")}}const iT=String.raw`
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
`)}],s=await Promise.all(a.map(o=>Ws(o.id)));return a.forEach((o,l)=>{const u=o.format==="DXF"?Zs(s[l]):null;r.push({path:dT(l,o.format),content:u?.content??s[l]})}),VS(r)}function Sy(a,r,s){let o=0,l=0;const u=new Map([...s].map(([f,g])=>[f.toUpperCase(),g])),m=a.reviewCandidates.map(f=>{if(f.sourceGroup!==r||f.status!=="needs-review"||f.proposedScope!=="company"||f.item.category!=="symbol"||f.item.sourceKind!=="extracted-dwg")return f;const g=f.item.fields,y=g.find(D=>D.label==="Block name")?.value.trim()??"";if(!y)return f;const p=u.get(y.toUpperCase())?.sourcePlacements??[],b=[...new Set(p.map(D=>D.layer.trim()).filter(Boolean))];b.length&&(l+=1);const w=(g.find(D=>D.label==="Extracted details")?.value??"").split(";").filter(D=>!/^\s*sourceLayer=/i.test(D)).join(";"),R=[...g.filter(D=>!["Extracted details","Source insert layer(s)","Source insert rotation(s)"].includes(D.label)),{label:"Extracted details",value:w+(b.length?`;sourceLayer=${b.join(", ")}`:"")},...b.length?[{label:"Source insert layer(s)",value:b.join(", ")},{label:"Source insert rotation(s)",value:p.map(D=>`${D.rotationDegrees}° on ${D.layer} (${D.count})`).join("; ")}]:[]];return JSON.stringify(g)===JSON.stringify(R)?f:(o+=1,{...f,item:{...f.item,fields:R}})});return{library:o?{...a,reviewCandidates:m}:a,updatedRecords:o,recoveredSymbols:l}}class pT{constructor(r){this._pointer=0,this._eof=!1,this._data=r}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return this._pointer++,r.value=Ty(r.code,this._data[this._pointer].trim()),this._pointer++,r.code===0&&r.value==="EOF"&&(this._eof=!0),this.lastReadGroup=r,r}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return r.value=Ty(r.code,this._data[this._pointer+1].trim()),r}rewind(r=1){this._pointer=this._pointer-r*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}function Ty(a,r){return a<=9?r:a>=10&&a<=59?parseFloat(r):a>=60&&a<=99?parseInt(r):a>=100&&a<=109?r:a>=110&&a<=149?parseFloat(r):a>=160&&a<=179?parseInt(r):a>=210&&a<=239?parseFloat(r):a>=270&&a<=289?parseInt(r):a>=290&&a<=299?fT(r):a>=300&&a<=369?r:a>=370&&a<=389?parseInt(r):a>=390&&a<=399?r:a>=400&&a<=409?parseInt(r):a>=410&&a<=419?r:a>=420&&a<=429?parseInt(r):a>=430&&a<=439?r:a>=440&&a<=459?parseInt(r):a>=460&&a<=469?parseFloat(r):a>=470&&a<=481||a===999||a>=1e3&&a<=1009?r:a>=1010&&a<=1059?parseFloat(r):a>=1060&&a<=1071?parseInt(r):(console.log("WARNING: Group code does not have a defined type: %j",{code:a,value:r}),r)}function fT(a){if(a==="0")return!1;if(a==="1")return!0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")}const av=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function hT(a){return av[a]}function Qe(a){const r={};a.rewind();let s=a.next(),o=s.code;if(r.x=s.value,o+=10,s=a.next(),s.code!=o)throw new Error("Expected code for point value to be "+o+" but got "+s.code+".");return r.y=s.value,o+=10,s=a.next(),s.code!=o?(a.rewind(),r):(r.z=s.value,r)}function ma(a,r,s){switch(r.code){case 0:a.type=r.value;break;case 5:a.handle=r.value;break;case 6:a.lineType=r.value;break;case 8:a.layer=r.value;break;case 48:a.lineTypeScale=r.value;break;case 60:a.visible=r.value===0;break;case 62:a.colorIndex=r.value,a.color=hT(Math.abs(r.value));break;case 67:a.inPaperSpace=r.value!==0;break;case 100:break;case 101:for(;r.code!=0;)r=s.next();s.rewind();break;case 330:a.ownerHandle=r.value;break;case 347:a.materialObjectHandle=r.value;break;case 370:a.lineweight=r.value;break;case 420:a.color=r.value;break;case 1e3:a.extendedData=a.extendedData||{},a.extendedData.customStrings=a.extendedData.customStrings||[],a.extendedData.customStrings.push(r.value);break;case 1001:a.extendedData=a.extendedData||{},a.extendedData.applicationName=r.value;break;default:return!1}return!0}class gT{constructor(){this.ForEntityName="3DFACE"}parseEntity(r,s){const o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 70:o.shape=(s.value&1)===1,o.hasContinuousLinetypePattern=(s.value&128)===128;break;case 10:o.vertices=mT(r,s),s=r.lastReadGroup;break;default:ma(o,s,r);break}s=r.next()}return o}}function mT(a,r){var s=[],o=!1,l=!1,u=4;for(let f=0;f<=u;f++){for(var m={};!a.isEOF()&&!(r.code===0||l);){switch(r.code){case 10:case 11:case 12:case 13:if(o){l=!0;continue}m.x=r.value,o=!0;break;case 20:case 21:case 22:case 23:m.y=r.value;break;case 30:case 31:case 32:case 33:m.z=r.value;break;default:return s}r=a.next()}s.push(m),o=!1,l=!1}return a.rewind(),s}class yT{constructor(){this.ForEntityName="ARC"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=Qe(r);break;case 40:o.radius=s.value;break;case 50:o.startAngle=Math.PI/180*s.value;break;case 51:o.endAngle=Math.PI/180*s.value,o.angleLength=o.endAngle-o.startAngle;break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ma(o,s,r);break}s=r.next()}return o}}class bT{constructor(){this.ForEntityName="ATTDEF"}parseEntity(r,s){var o={type:s.value,scale:1,textStyle:"STANDARD"};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 1:o.text=s.value;break;case 2:o.tag=s.value;break;case 3:o.prompt=s.value;break;case 7:o.textStyle=s.value;break;case 10:o.startPoint=Qe(r);break;case 11:o.endPoint=Qe(r);break;case 39:o.thickness=s.value;break;case 40:o.textHeight=s.value;break;case 41:o.scale=s.value;break;case 50:o.rotation=s.value;break;case 51:o.obliqueAngle=s.value;break;case 70:o.invisible=!!(s.value&1),o.constant=!!(s.value&2),o.verificationRequired=!!(s.value&4),o.preset=!!(s.value&8);break;case 71:o.backwards=!!(s.value&2),o.mirrored=!!(s.value&4);break;case 72:o.horizontalJustification=s.value;break;case 73:o.fieldLength=s.value;break;case 74:o.verticalJustification=s.value;break;case 100:break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ma(o,s,r);break}s=r.next()}return o}}class vT{constructor(){this.ForEntityName="CIRCLE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=Qe(r);break;case 40:o.radius=s.value;break;case 50:o.startAngle=Math.PI/180*s.value;break;case 51:const l=Math.PI/180*s.value;l<o.startAngle?o.angleLength=l+2*Math.PI-o.startAngle:o.angleLength=l-o.startAngle,o.endAngle=l;break;default:ma(o,s,r);break}s=r.next()}return o}}class ET{constructor(){this.ForEntityName="DIMENSION"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 2:o.block=s.value;break;case 10:o.anchorPoint=Qe(r);break;case 11:o.middleOfText=Qe(r);break;case 12:o.insertionPoint=Qe(r);break;case 13:o.linearOrAngularPoint1=Qe(r);break;case 14:o.linearOrAngularPoint2=Qe(r);break;case 15:o.diameterOrRadiusPoint=Qe(r);break;case 16:o.arcPoint=Qe(r);break;case 70:o.dimensionType=s.value;break;case 71:o.attachmentPoint=s.value;break;case 42:o.actualMeasurement=s.value;break;case 1:o.text=s.value;break;case 50:o.angle=s.value;break;default:ma(o,s,r);break}s=r.next()}return o}}class wT{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=Qe(r);break;case 11:o.majorAxisEndPoint=Qe(r);break;case 40:o.axisRatio=s.value;break;case 41:o.startAngle=s.value;break;case 42:o.endAngle=s.value;break;case 2:o.name=s.value;break;default:ma(o,s,r);break}s=r.next()}return o}}class xT{constructor(){this.ForEntityName="INSERT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 2:o.name=s.value;break;case 41:o.xScale=s.value;break;case 42:o.yScale=s.value;break;case 43:o.zScale=s.value;break;case 10:o.position=Qe(r);break;case 50:o.rotation=s.value;break;case 70:o.columnCount=s.value;break;case 71:o.rowCount=s.value;break;case 44:o.columnSpacing=s.value;break;case 45:o.rowSpacing=s.value;break;case 210:o.extrusionDirection=Qe(r);break;default:ma(o,s,r);break}s=r.next()}return o}}class ST{constructor(){this.ForEntityName="LINE"}parseEntity(r,s){const o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.vertices.unshift(Qe(r));break;case 11:o.vertices.push(Qe(r));break;case 210:o.extrusionDirection=Qe(r);break;case 100:break;default:ma(o,s,r);break}s=r.next()}return o}}class TT{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(r,s){const o={type:s.value,vertices:[]};let l=0;for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 38:o.elevation=s.value;break;case 39:o.depth=s.value;break;case 70:o.shape=(s.value&1)===1,o.hasContinuousLinetypePattern=(s.value&128)===128;break;case 90:l=s.value;break;case 10:o.vertices=AT(l,r);break;case 43:s.value!==0&&(o.width=s.value);break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ma(o,s,r);break}s=r.next()}return o}}function AT(a,r){if(!a||a<=0)throw Error("n must be greater than 0 verticies");const s=[];let o=!1,l=!1,u=r.lastReadGroup;for(let m=0;m<a;m++){const f={};for(;!r.isEOF()&&!(u.code===0||l);){switch(u.code){case 10:if(o){l=!0;continue}f.x=u.value,o=!0;break;case 20:f.y=u.value;break;case 30:f.z=u.value;break;case 40:f.startWidth=u.value;break;case 41:f.endWidth=u.value;break;case 42:u.value!=0&&(f.bulge=u.value);break;default:return r.rewind(),o&&s.push(f),r.rewind(),s}u=r.next()}s.push(f),o=!1,l=!1}return r.rewind(),s}class DT{constructor(){this.ForEntityName="MTEXT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 3:o.text?o.text+=s.value:o.text=s.value;break;case 1:o.text?o.text+=s.value:o.text=s.value;break;case 10:o.position=Qe(r);break;case 11:o.directionVector=Qe(r);break;case 40:o.height=s.value;break;case 41:o.width=s.value;break;case 50:o.rotation=s.value;break;case 71:o.attachmentPoint=s.value;break;case 72:o.drawingDirection=s.value;break;default:ma(o,s,r);break}s=r.next()}return o}}class NT{constructor(){this.ForEntityName="POINT"}parseEntity(r,s){const l={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:l.position=Qe(r);break;case 39:l.thickness=s.value;break;case 210:l.extrusionDirection=Qe(r);break;case 100:break;default:ma(l,s,r);break}s=r.next()}return l}}class CT{constructor(){this.ForEntityName="VERTEX"}parseEntity(r,s){var o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.x=s.value;break;case 20:o.y=s.value;break;case 30:o.z=s.value;break;case 40:break;case 41:break;case 42:s.value!=0&&(o.bulge=s.value);break;case 70:o.curveFittingVertex=(s.value&1)!==0,o.curveFitTangent=(s.value&2)!==0,o.splineVertex=(s.value&8)!==0,o.splineControlPoint=(s.value&16)!==0,o.threeDPolylineVertex=(s.value&32)!==0,o.threeDPolylineMesh=(s.value&64)!==0,o.polyfaceMeshVertex=(s.value&128)!==0;break;case 50:break;case 71:o.faceA=s.value;break;case 72:o.faceB=s.value;break;case 73:o.faceC=s.value;break;case 74:o.faceD=s.value;break;default:ma(o,s,r);break}s=r.next()}return o}}class RT{constructor(){this.ForEntityName="POLYLINE"}parseEntity(r,s){var o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:break;case 20:break;case 30:break;case 39:o.thickness=s.value;break;case 40:break;case 41:break;case 70:o.shape=(s.value&1)!==0,o.includesCurveFitVertices=(s.value&2)!==0,o.includesSplineFitVertices=(s.value&4)!==0,o.is3dPolyline=(s.value&8)!==0,o.is3dPolygonMesh=(s.value&16)!==0,o.is3dPolygonMeshClosed=(s.value&32)!==0,o.isPolyfaceMesh=(s.value&64)!==0,o.hasContinuousLinetypePattern=(s.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:o.extrusionDirection=Qe(r);break;default:ma(o,s,r);break}s=r.next()}return o.vertices=_T(r,s),o}}function _T(a,r){const s=new CT,o=[];for(;!a.isEOF();)if(r.code===0){if(r.value==="VERTEX")o.push(s.parseEntity(a,r)),r=a.lastReadGroup;else if(r.value==="SEQEND"){IT(a,r);break}}return o}function IT(a,r){const s={type:r.value};for(r=a.next();!a.isEOF()&&r.code!=0;)ma(s,r,a),r=a.next();return s}class LT{constructor(){this.ForEntityName="SOLID"}parseEntity(r,s){const o={type:s.value,points:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.points[0]=Qe(r);break;case 11:o.points[1]=Qe(r);break;case 12:o.points[2]=Qe(r);break;case 13:o.points[3]=Qe(r);break;case 210:o.extrusionDirection=Qe(r);break;default:ma(o,s,r);break}s=r.next()}return o}}class PT{constructor(){this.ForEntityName="SPLINE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.controlPoints||(o.controlPoints=[]),o.controlPoints.push(Qe(r));break;case 11:o.fitPoints||(o.fitPoints=[]),o.fitPoints.push(Qe(r));break;case 12:o.startTangent=Qe(r);break;case 13:o.endTangent=Qe(r);break;case 40:o.knotValues||(o.knotValues=[]),o.knotValues.push(s.value);break;case 70:(s.value&1)!=0&&(o.closed=!0),(s.value&2)!=0&&(o.periodic=!0),(s.value&4)!=0&&(o.rational=!0),(s.value&8)!=0&&(o.planar=!0),(s.value&16)!=0&&(o.planar=!0,o.linear=!0);break;case 71:o.degreeOfSplineCurve=s.value;break;case 72:o.numberOfKnots=s.value;break;case 73:o.numberOfControlPoints=s.value;break;case 74:o.numberOfFitPoints=s.value;break;case 210:o.normalVector=Qe(r);break;default:ma(o,s,r);break}s=r.next()}return o}}class kT{constructor(){this.ForEntityName="TEXT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.startPoint=Qe(r);break;case 11:o.endPoint=Qe(r);break;case 40:o.textHeight=s.value;break;case 41:o.xScale=s.value;break;case 50:o.rotation=s.value;break;case 1:o.text=s.value;break;case 72:o.halign=s.value;break;case 73:o.valign=s.value;break;default:ma(o,s,r);break}s=r.next()}return o}}var Vl={exports:{}},OT=Vl.exports,Ay;function jT(){return Ay||(Ay=1,(function(a){(function(r,s){a.exports?a.exports=s():r.log=s()})(OT,function(){var r=function(){},s="undefined",o=typeof window!==s&&typeof window.navigator!==s&&/Trident\/|MSIE /.test(window.navigator.userAgent),l=["trace","debug","info","warn","error"],u={},m=null;function f(D,S){var T=D[S];if(typeof T.bind=="function")return T.bind(D);try{return Function.prototype.bind.call(T,D)}catch{return function(){return Function.prototype.apply.apply(T,[D,arguments])}}}function g(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function y(D){return D==="debug"&&(D="log"),typeof console===s?!1:D==="trace"&&o?g:console[D]!==void 0?f(console,D):console.log!==void 0?f(console,"log"):r}function p(){for(var D=this.getLevel(),S=0;S<l.length;S++){var T=l[S];this[T]=S<D?r:this.methodFactory(T,D,this.name)}if(this.log=this.debug,typeof console===s&&D<this.levels.SILENT)return"No console available for logging"}function b(D){return function(){typeof console!==s&&(p.call(this),this[D].apply(this,arguments))}}function v(D,S,T){return y(D)||b.apply(this,arguments)}function w(D,S){var T=this,L,_,N,x="loglevel";typeof D=="string"?x+=":"+D:typeof D=="symbol"&&(x=void 0);function O(X){var ae=(l[X]||"silent").toUpperCase();if(!(typeof window===s||!x)){try{window.localStorage[x]=ae;return}catch{}try{window.document.cookie=encodeURIComponent(x)+"="+ae+";"}catch{}}}function C(){var X;if(!(typeof window===s||!x)){try{X=window.localStorage[x]}catch{}if(typeof X===s)try{var ae=window.document.cookie,pe=encodeURIComponent(x),oe=ae.indexOf(pe+"=");oe!==-1&&(X=/^([^;]+)/.exec(ae.slice(oe+pe.length+1))[1])}catch{}return T.levels[X]===void 0&&(X=void 0),X}}function P(){if(!(typeof window===s||!x)){try{window.localStorage.removeItem(x)}catch{}try{window.document.cookie=encodeURIComponent(x)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function k(X){var ae=X;if(typeof ae=="string"&&T.levels[ae.toUpperCase()]!==void 0&&(ae=T.levels[ae.toUpperCase()]),typeof ae=="number"&&ae>=0&&ae<=T.levels.SILENT)return ae;throw new TypeError("log.setLevel() called with invalid level: "+X)}T.name=D,T.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},T.methodFactory=S||v,T.getLevel=function(){return N??_??L},T.setLevel=function(X,ae){return N=k(X),ae!==!1&&O(N),p.call(T)},T.setDefaultLevel=function(X){_=k(X),C()||T.setLevel(X,!1)},T.resetLevel=function(){N=null,P(),p.call(T)},T.enableAll=function(X){T.setLevel(T.levels.TRACE,X)},T.disableAll=function(X){T.setLevel(T.levels.SILENT,X)},T.rebuild=function(){if(m!==T&&(L=k(m.getLevel())),p.call(T),m===T)for(var X in u)u[X].rebuild()},L=k(m?m.getLevel():"WARN");var te=C();te!=null&&(N=k(te)),p.call(T)}m=new w,m.getLogger=function(S){if(typeof S!="symbol"&&typeof S!="string"||S==="")throw new TypeError("You must supply a name when creating a logger.");var T=u[S];return T||(T=u[S]=new w(S,m.methodFactory)),T};var R=typeof window!==s?window.log:void 0;return m.noConflict=function(){return typeof window!==s&&window.log===m&&(window.log=R),m},m.getLoggers=function(){return u},m.default=m,m})})(Vl)),Vl.exports}var qT=jT();const Ze=xi(qT);Ze.setLevel("error");function MT(a){a.registerEntityHandler(gT),a.registerEntityHandler(yT),a.registerEntityHandler(bT),a.registerEntityHandler(vT),a.registerEntityHandler(ET),a.registerEntityHandler(wT),a.registerEntityHandler(xT),a.registerEntityHandler(ST),a.registerEntityHandler(TT),a.registerEntityHandler(DT),a.registerEntityHandler(NT),a.registerEntityHandler(RT),a.registerEntityHandler(LT),a.registerEntityHandler(PT),a.registerEntityHandler(kT)}class nv{constructor(){this._entityHandlers={},MT(this)}parse(r){return typeof r=="string"?this._parse(r):(console.error("Cannot read dxf source of type `"+typeof r),null)}registerEntityHandler(r){const s=new r;this._entityHandlers[s.ForEntityName]=s}parseSync(r){return this.parse(r)}parseStream(r){let s="";const o=this;return new Promise((l,u)=>{r.on("data",m=>{s+=m}),r.on("end",()=>{try{l(o._parse(s))}catch(m){u(m)}}),r.on("error",m=>{u(m)})})}_parse(r){const s={};let o=0;const l=r.split(/\r\n|\r|\n/g),u=new pT(l);if(!u.hasNext())throw Error("Empty file");const m=this;let f;function g(){for(f=u.next();!u.isEOF();)if(f.code===0&&f.value==="SECTION"){if(f=u.next(),f.code!==2){console.error("Unexpected code %s after 0:SECTION",rv(f)),f=u.next();continue}f.value==="HEADER"?(Ze.debug("> HEADER"),s.header=y(),Ze.debug("<")):f.value==="BLOCKS"?(Ze.debug("> BLOCKS"),s.blocks=p(),Ze.debug("<")):f.value==="ENTITIES"?(Ze.debug("> ENTITIES"),s.entities=_(!1),Ze.debug("<")):f.value==="TABLES"?(Ze.debug("> TABLES"),s.tables=v(),Ze.debug("<")):f.value==="EOF"?Ze.debug("EOF"):Ze.warn("Skipping section '%s'",f.value)}else f=u.next()}function y(){let O=null,C=null;const P={};for(f=u.next();;){if(En(f,0,"ENDSEC")){O&&(P[O]=C);break}else f.code===9?(O&&(P[O]=C),O=f.value):f.code===10?C={x:f.value}:f.code===20?C.y=f.value:f.code===30?C.z=f.value:C=f.value;f=u.next()}return f=u.next(),P}function p(){const O={};for(f=u.next();f.value!=="EOF"&&!En(f,0,"ENDSEC");)if(En(f,0,"BLOCK")){Ze.debug("block {");const C=b();Ze.debug("}"),x(C),C.name?O[C.name]=C:Ze.error('block with handle "'+C.handle+'" is missing a name.')}else Zr(f),f=u.next();return O}function b(){const O={};for(f=u.next();f.value!=="EOF";){switch(f.code){case 1:O.xrefPath=f.value,f=u.next();break;case 2:O.name=f.value,f=u.next();break;case 3:O.name2=f.value,f=u.next();break;case 5:O.handle=f.value,f=u.next();break;case 8:O.layer=f.value,f=u.next();break;case 10:O.position=N(f),f=u.next();break;case 67:O.paperSpace=!!(f.value&&f.value==1),f=u.next();break;case 70:f.value!=0&&(O.type=f.value),f=u.next();break;case 100:f=u.next();break;case 330:O.ownerHandle=f.value,f=u.next();break;case 0:if(f.value=="ENDBLK")break;O.entities=_(!0);break;default:Zr(f),f=u.next()}if(En(f,0,"ENDBLK")){f=u.next();break}}return O}function v(){const O={};for(f=u.next();f.value!=="EOF"&&!En(f,0,"ENDSEC");)En(f,0,"TABLE")?(f=u.next(),L[f.value]?(Ze.debug(f.value+" Table {"),O[L[f.value].tableName]=R(f),Ze.debug("}")):Ze.debug("Unhandled Table "+f.value)):f=u.next();return f=u.next(),O}const w="ENDTAB";function R(O){const C=L[O.value],P={};let k=0;for(f=u.next();!En(f,0,w);)switch(f.code){case 5:P.handle=f.value,f=u.next();break;case 330:P.ownerHandle=f.value,f=u.next();break;case 100:f.value==="AcDbSymbolTable"||Zr(f),f=u.next();break;case 70:k=f.value,f=u.next();break;case 0:f.value===C.dxfSymbolName?P[C.tableRecordsProperty]=C.parseTableRecords():(Zr(f),f=u.next());break;default:Zr(f),f=u.next()}const te=P[C.tableRecordsProperty];if(te){let X=(()=>{if(te.constructor===Array)return te.length;if(typeof te=="object")return Object.keys(te).length})();k!==X&&Ze.warn("Parsed "+X+" "+C.dxfSymbolName+"'s but expected "+k)}return f=u.next(),P}function D(){const O=[];let C={};for(Ze.debug("ViewPort {"),f=u.next();!En(f,0,w);)switch(f.code){case 2:C.name=f.value,f=u.next();break;case 10:C.lowerLeftCorner=N(f),f=u.next();break;case 11:C.upperRightCorner=N(f),f=u.next();break;case 12:C.center=N(f),f=u.next();break;case 13:C.snapBasePoint=N(f),f=u.next();break;case 14:C.snapSpacing=N(f),f=u.next();break;case 15:C.gridSpacing=N(f),f=u.next();break;case 16:C.viewDirectionFromTarget=N(f),f=u.next();break;case 17:C.viewTarget=N(f),f=u.next();break;case 42:C.lensLength=f.value,f=u.next();break;case 43:C.frontClippingPlane=f.value,f=u.next();break;case 44:C.backClippingPlane=f.value,f=u.next();break;case 45:C.viewHeight=f.value,f=u.next();break;case 50:C.snapRotationAngle=f.value,f=u.next();break;case 51:C.viewTwistAngle=f.value,f=u.next();break;case 79:C.orthographicType=f.value,f=u.next();break;case 110:C.ucsOrigin=N(f),f=u.next();break;case 111:C.ucsXAxis=N(f),f=u.next();break;case 112:C.ucsYAxis=N(f),f=u.next();break;case 110:C.ucsOrigin=N(f),f=u.next();break;case 281:C.renderMode=f.value,f=u.next();break;case 281:C.defaultLightingType=f.value,f=u.next();break;case 292:C.defaultLightingOn=f.value,f=u.next();break;case 330:C.ownerHandle=f.value,f=u.next();break;case 63:case 421:case 431:C.ambientColor=f.value,f=u.next();break;case 0:f.value==="VPORT"&&(Ze.debug("}"),O.push(C),Ze.debug("ViewPort {"),C={},f=u.next());break;default:Zr(f),f=u.next();break}return Ze.debug("}"),O.push(C),O}function S(){const O={};let C={},P=0,k;for(Ze.debug("LType {"),f=u.next();!En(f,0,"ENDTAB");)switch(f.code){case 2:C.name=f.value,k=f.value,f=u.next();break;case 3:C.description=f.value,f=u.next();break;case 73:P=f.value,P>0&&(C.pattern=[]),f=u.next();break;case 40:C.patternLength=f.value,f=u.next();break;case 49:C.pattern.push(f.value),f=u.next();break;case 0:Ze.debug("}"),P>0&&P!==C.pattern.length&&Ze.warn("lengths do not match on LTYPE pattern"),O[k]=C,C={},Ze.debug("LType {"),f=u.next();break;default:f=u.next()}return Ze.debug("}"),O[k]=C,O}function T(){const O={};let C={},P;for(Ze.debug("Layer {"),f=u.next();!En(f,0,"ENDTAB");)switch(f.code){case 2:C.name=f.value,P=f.value,f=u.next();break;case 62:C.visible=f.value>=0,C.colorIndex=Math.abs(f.value),C.color=$T(C.colorIndex),f=u.next();break;case 70:C.frozen=(f.value&1)!=0||(f.value&2)!=0,f=u.next();break;case 0:f.value==="LAYER"&&(Ze.debug("}"),O[P]=C,Ze.debug("Layer {"),C={},P=void 0,f=u.next());break;default:Zr(f),f=u.next();break}return Ze.debug("}"),O[P]=C,O}const L={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:D},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:S},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:T}};function _(O){const C=[],P=O?"ENDBLK":"ENDSEC";for(O||(f=u.next());;)if(f.code===0){if(f.value===P)break;const k=m._entityHandlers[f.value];if(k!=null){Ze.debug(f.value+" {");const te=k.parseEntity(u,f);f=u.lastReadGroup,Ze.debug("}"),x(te),C.push(te)}else{Ze.warn("Unhandled entity "+f.value),f=u.next();continue}}else f=u.next();return P=="ENDSEC"&&(f=u.next()),C}function N(O){const C={};let P=O.code;if(C.x=O.value,P+=10,O=u.next(),O.code!=P)throw new Error("Expected code for point value to be "+P+" but got "+O.code+".");return C.y=O.value,P+=10,O=u.next(),O.code!=P?(u.rewind(),C):(C.z=O.value,C)}function x(O){if(!O)throw new TypeError("entity cannot be undefined or null");O.handle||(O.handle=o++)}return g(),s}}function En(a,r,s){return a.code===r&&a.value===s}function Zr(a){Ze.debug("unhandled group "+rv(a))}function rv(a){return a.code+":"+a.value}function $T(a){return av[a]}const Fl=360,Jo=210,Bs=16,FT="#78d8b0",UT=[1,0,0,1,0,0],BT=new Set(["0","PIPE_PRI","F_PIPE_PRI","PIPE_PRIMARY","F_PIPE_PRIMARY","PRIMARY PIPING"]);function zT(a){const r=String(a??"").trim().toUpperCase().replace(/\s+/g," ");return!r||BT.has(r)}function Vp(a){return/\barrow\b/i.test(a.replace(/[_-]+/g," "))}function sv(a){return Vp(a)}function Na(a){if(!a||typeof a!="object")return null;const r=a;return typeof r.x=="number"&&Number.isFinite(r.x)&&typeof r.y=="number"&&Number.isFinite(r.y)?{x:r.x,y:r.y}:null}function ov(a,r){return{x:a[0]*r.x+a[2]*r.y+a[4],y:a[1]*r.x+a[3]*r.y+a[5]}}function YT(a,r){return[a[0]*r[0]+a[2]*r[1],a[1]*r[0]+a[3]*r[1],a[0]*r[2]+a[2]*r[3],a[1]*r[2]+a[3]*r[3],a[0]*r[4]+a[2]*r[5]+a[4],a[1]*r[4]+a[3]*r[5]+a[5]]}function Ft(a,r){return typeof a=="number"&&Number.isFinite(a)?a:r}function ei(a){return Array.isArray(a)?a.map(Na).filter(r=>r!==null):[]}function bp(a){const r=Na(a);return r?{...r,z:Ft(a.z,0)}:null}function HT(a,r,s){const o={},l=(f,g)=>{const y=bp(g);y&&(o[f]=y)},u=(f,g)=>{Array.isArray(g)&&(o[f]=g.flatMap(y=>{const p=bp(y);return p?[p]:[]}))},m=(f,g)=>{typeof g=="number"&&Number.isFinite(g)&&(o[f]=g)};if(a==="LINE")u("vertices",r.vertices);else if(a==="ARC"||a==="CIRCLE")l("center",r.center),m("radius",r.radius),a==="ARC"&&(m("startAngle",r.startAngle),m("endAngle",r.endAngle));else if(a==="LWPOLYLINE"||a==="POLYLINE")Array.isArray(r.vertices)&&(o.vertices=r.vertices.flatMap(f=>{if(!f||typeof f!="object")return[];const g=f;return typeof g.x!="number"||typeof g.y!="number"||!Number.isFinite(g.x)||!Number.isFinite(g.y)?[]:[{x:g.x,y:g.y,z:Ft(g.z,0),bulge:Ft(g.bulge,0)}]})),o.closed=r.shape===!0||(Number(r.shape)&1)===1;else if(a==="ELLIPSE")l("center",r.center),l("majorAxisEndPoint",r.majorAxisEndPoint),m("axisRatio",r.axisRatio),m("startAngle",r.startAngle),m("endAngle",r.endAngle);else if(a==="SPLINE"){u("fitPoints",r.fitPoints),u("controlPoints",r.controlPoints);for(const f of["degreeOfSplineCurve","closed","periodic","knots","weights"]){const g=r[f];(typeof g=="number"||typeof g=="boolean"||Array.isArray(g)&&g.every(y=>typeof y=="number"&&Number.isFinite(y)))&&(o[f]=g)}}else return null;return{type:a,transform:[...s],geometry:o}}function iv(a){return typeof a!="string"?"":a.replace(/\\P/gi," ").replace(/\\[A-Za-z][^;]*;/g,"").replace(/[{}]/g,"").replace(/\s+/g," ").trim()}function VT(a,r,s){return a.layer&&a.layer!=="0"?r.get(a.layer)??s:s}function GT(a){const r=Math.max(0,Math.min(16777215,Math.trunc(a))),s=`#${r.toString(16).padStart(6,"0")}`,o=r>>16&255,l=r>>8&255,u=r&255;return o+l+u<72?"#d5e1e8":s}function XT(a){const r=new Map;for(const s of Object.values(a.tables?.layer?.layers??{}))Number.isFinite(s.color)&&r.set(s.name,GT(s.color));return r}function WT(a,r,s,o){const l=o-s;if(!Number.isFinite(l))return[];const u=(l%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,m=Math.max(8,Math.min(96,Math.ceil(Math.abs(u)/(Math.PI/24))));return Array.from({length:m+1},(f,g)=>{const y=s+u*g/m;return{x:a.x+Math.cos(y)*r,y:a.y+Math.sin(y)*r}})}function KT(a,r){if(!Array.isArray(a))return[];const s=a.map(u=>{if(!u||typeof u!="object")return null;const m=u,f=Na(m);return f?{...f,bulge:Ft(m.bulge,0)}:null}).filter(u=>u!==null);if(s.length<2)return s.map(({x:u,y:m})=>({x:u,y:m}));const o=[{x:s[0].x,y:s[0].y}],l=r?s.length:s.length-1;for(let u=0;u<l;u+=1){const m=s[u],f=s[(u+1)%s.length],g=m.bulge,y=f.x-m.x,p=f.y-m.y,b=Math.hypot(y,p);if(Math.abs(g)<1e-5||b<1e-8){o.push({x:f.x,y:f.y});continue}const v=4*Math.atan(g),w=b*(1-g*g)/(4*g),R={x:(m.x+f.x)/2-p/b*w,y:(m.y+f.y)/2+y/b*w},D=Math.atan2(m.y-R.y,m.x-R.x),S=Math.max(4,Math.min(48,Math.ceil(Math.abs(v)/(Math.PI/16))));for(let T=1;T<=S;T+=1){const L=D+v*T/S;o.push({x:R.x+Math.cos(L)*Math.hypot(m.x-R.x,m.y-R.y),y:R.y+Math.sin(L)*Math.hypot(m.x-R.x,m.y-R.y)})}}return r&&o.length>1&&o.pop(),o}function ZT(a,r){const s=Na(a.position)??{x:0,y:0},o=Na(r.position)??{x:0,y:0},l=Ft(a.xScale,1),u=Ft(a.yScale,1),m=Ft(a.rotation,0)*Math.PI/180,f=Math.cos(m),g=Math.sin(m),y=f*l,p=g*l,b=-g*u,v=f*u;return[y,p,b,v,s.x-y*o.x-b*o.y,s.y-p*o.x-v*o.y]}function Dr(a,r,s,o,l){const u=r.map(m=>ov(o,m));u.length>=2&&a.paths.push({points:u,closed:s,color:l})}function lv(a,r,s,o,l,u,m=new Set,f=0){if(f>8){u.unsupported.add("nested block depth");return}for(const g of a){if(!g)continue;const y=g,p=String(y.type??"").toUpperCase();if(!p||y.visible===!1)continue;const b=VT(y,s,l);if(p==="INSERT"){const w=String(y.name??""),R=Object.entries(r).find(([L])=>L.toUpperCase()===w.toUpperCase())?.[1];if(!R||m.has(w.toUpperCase())){u.unsupported.add(p);continue}u.nestedInsertCount+=1;const D=YT(o,ZT(y,R)),S=y.layer&&y.layer!=="0"?s.get(y.layer)??l:l,T=new Set(m);T.add(w.toUpperCase()),lv(R.entities??[],r,s,D,S,u,T,f+1);continue}const v=HT(p,y,o);if(v&&u.primitives.push(v),p==="LINE"){Dr(u,ei(y.vertices),!1,o,b);continue}if(p==="CIRCLE"||p==="ARC"){const w=Na(y.center),R=Ft(y.radius,0);if(!w||R<=0)continue;const D=p==="ARC"?Ft(y.startAngle,0):0,S=p==="ARC"?Ft(y.endAngle,Math.PI*2):Math.PI*2;Dr(u,WT(w,R,D,S),p==="CIRCLE",o,b);continue}if(p==="ELLIPSE"){const w=Na(y.center),R=Na(y.majorAxisEndPoint),D=Ft(y.axisRatio,1);if(!w||!R||D<=0)continue;const S=Ft(y.startAngle,0),T=Ft(y.endAngle,Math.PI*2)-S;if(!Number.isFinite(T))continue;const L=(T%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,_=S+L,N=Math.max(12,Math.min(96,Math.ceil((_-S)*24))),x=Array.from({length:N+1},(O,C)=>{const P=S+(_-S)*C/N;return{x:w.x+R.x*Math.cos(P)-R.y*D*Math.sin(P),y:w.y+R.y*Math.cos(P)+R.x*D*Math.sin(P)}});Dr(u,x,Math.abs(_-S-Math.PI*2)<.03,o,b);continue}if(p==="LWPOLYLINE"||p==="POLYLINE"){const w=y.shape===!0||(Number(y.shape)&1)===1,R=KT(y.vertices,w);Dr(u,R,w,o,b);continue}if(p==="SOLID"||p==="3DFACE"){const w=ei(y.points??y.vertices);Dr(u,w,!0,o,b);continue}if(p==="SPLINE"){const w=ei(y.fitPoints).length>=2?ei(y.fitPoints):ei(y.controlPoints);Dr(u,w,y.closed===!0,o,b),w.length&&u.unsupported.add("SPLINE approximation");continue}if(p==="TEXT"||p==="MTEXT"||p==="ATTDEF"){const w=iv(y.text),R=Na(y.startPoint)??Na(y.position);if(!R||!w)continue;const D=ov(o,R),S=Math.max(1,Ft(y.textHeight,Ft(y.height,2.5))),T=Math.max(Math.hypot(o[0],o[1]),Math.hypot(o[2],o[3]),.1);u.texts.push({point:D,text:w,height:S*T,rotation:Ft(y.rotation,0)-Math.atan2(o[1],o[0])*180/Math.PI,color:b});continue}if(p==="POINT"){const w=Na(y.position);w&&(Dr(u,[{x:w.x-.5,y:w.y},{x:w.x+.5,y:w.y}],!1,o,b),Dr(u,[{x:w.x,y:w.y-.5},{x:w.x,y:w.y+.5}],!1,o,b));continue}u.unsupported.add(p)}}function cv(a){const r=[...a.paths.flatMap(s=>s.points),...a.texts.map(s=>s.point)];return r.length?{minX:Math.min(...r.map(s=>s.x)),minY:Math.min(...r.map(s=>s.y)),maxX:Math.max(...r.map(s=>s.x)),maxY:Math.max(...r.map(s=>s.y))}:null}function QT(a){const r=cv(a);if(!r)return;const s=Math.max(r.maxX-r.minX,1e-6),o=Math.max(r.maxY-r.minY,1e-6),l=Math.min((Fl-Bs*2)/s,(Jo-Bs*2)/o),u=p=>Bs+(p-r.minX)*l+(Fl-Bs*2-s*l)/2,m=p=>Jo-Bs-(p-r.minY)*l-(Jo-Bs*2-o*l)/2,f=p=>p.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;"),g=a.paths.map(p=>{const b=p.points.map((v,w)=>`${w?"L":"M"}${u(v.x).toFixed(2)} ${m(v.y).toFixed(2)}`);return p.closed&&b.push("Z"),`<path d="${b.join(" ")}" fill="none" stroke="${p.color}" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>`}).join(""),y=a.texts.map(p=>{const b=u(p.point.x),v=m(p.point.y),w=Math.max(4,Math.min(20,p.height*l));return`<text x="${b.toFixed(2)}" y="${v.toFixed(2)}" fill="${p.color}" font-family="Arial Narrow,sans-serif" font-size="${w.toFixed(2)}" transform="rotate(${-p.rotation.toFixed(2)} ${b.toFixed(2)} ${v.toFixed(2)})">${f(p.text)}</text>`}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Fl} ${Jo}" role="img"><rect width="${Fl}" height="${Jo}" fill="#0d1722"/>${g}${y}</svg>`}function JT(a,r,s){const o=Na(s.position)??{x:0,y:0},l=Na(r.position)??{x:0,y:0},u=Ft(s.xScale,1),m=Ft(s.yScale,1),f=Ft(s.rotation,0)*Math.PI/180,g=Math.cos(f),y=Math.sin(f),p=[{x:a.minX,y:a.minY},{x:a.minX,y:a.maxY},{x:a.maxX,y:a.minY},{x:a.maxX,y:a.maxY}].map(b=>{const v=(b.x-l.x)*u,w=(b.y-l.y)*m;return{x:o.x+g*v-y*w,y:o.y+y*v+g*w}});return{minX:Math.min(...p.map(b=>b.x)),minY:Math.min(...p.map(b=>b.y)),maxX:Math.max(...p.map(b=>b.x)),maxY:Math.max(...p.map(b=>b.y))}}function eA(a){return Na(a.startPoint)??Na(a.position)}function tA(a){return iv(a.text)}function dv(a,r){return r.map(s=>s).filter(s=>s.type?.toUpperCase()==="INSERT"&&String(s.name??"").toUpperCase()===a.toUpperCase())}function aA(a){const r=new Map;for(const s of a){const o=String(s.layer??"0").trim()||"0",l=Ft(s.rotation,0),u=Math.round((l%360+360)%360),m=`${o.toUpperCase()}|${u}`,f=r.get(m);f?f.count+=1:r.set(m,{layer:o,rotationDegrees:u,count:1})}return[...r.values()].sort((s,o)=>s.layer.localeCompare(o.layer)||s.rotationDegrees-o.rotationDegrees)}function nA(a,r,s,o){const l=dv(a,o),u=l.filter(b=>!zT(b.layer)),m=l.length>0&&u.length===0;if(sv(a))return{labels:[],skippedContextOnly:m};const f=o.map(b=>b).filter(b=>["TEXT","MTEXT","ATTRIB"].includes(String(b.type??"").toUpperCase())).map(b=>({text:tA(b),point:eA(b),height:Math.max(1,Ft(b.textHeight,Ft(b.height,2.5)))})).filter(b=>!!(b.text&&b.point)&&!Vp(b.text)),g=[];for(const b of u){const v=JT(s,r,b),w=(v.minY+v.maxY)/2,R=Math.max(v.maxX-v.minX,1),D=Math.max(v.maxY-v.minY,1),T=f.map(P=>{const k=P.point.x-v.maxX,te=Math.abs(P.point.y-w),X=Math.max(R*8,P.height*40,30),ae=Math.max(D*1.1,P.height*7);return{...P,dx:k,dy:te,score:Math.max(0,k)+te*1.75,maxGap:X,maxVertical:ae}}).filter(P=>P.dx>=-P.height*.5&&P.dx<=P.maxGap&&P.dy<=P.maxVertical).filter(P=>P.dx>=0).sort((P,k)=>P.score-k.score),L=T.length?T:f.map(P=>({...P,dx:P.point.x-v.maxX,dy:Math.abs(P.point.y-w),score:Math.hypot(P.point.x-(v.minX+v.maxX)/2,P.point.y-w),maxGap:Math.max(R*10,P.height*50,40),maxVertical:Math.max(D*2,P.height*10)})).filter(P=>P.score<=Math.max(R*8,D*10,P.height*60)).sort((P,k)=>P.score-k.score),_=L[0];if(!_)continue;const N=Math.max(_.height*2,R*.04,.5),x=Math.max(_.height*7,D*.8),O=L.filter(P=>Math.abs(P.point.x-_.point.x)<=N&&Math.abs(P.point.y-_.point.y)<=x).sort((P,k)=>k.point.y-P.point.y).slice(0,8),C=[...new Set(O.map(P=>P.text))].join(" · ");C&&g.push({text:C,score:_.score})}const y=new Map;for(const b of g){const v=b.text.toLowerCase().replace(/\s+/g," ").trim(),w=y.get(v);(w===void 0||b.score<w.score)&&y.set(v,b)}const p=u.length>1&&y.size>1;return{labels:p?[]:[...y.values()].sort((b,v)=>b.score-v.score).slice(0,4).map(b=>b.text),skippedContextOnly:m,...p?{ambiguous:!0}:{}}}function ac(a,r){let s;try{s=new nv().parseSync(a)}catch(m){const f=m instanceof Error?m.message:"Unknown DXF parser error";throw new Error(`The overview DXF could not be read: ${f}`)}if(!s?.blocks||!Array.isArray(s.entities))throw new Error("The overview DXF does not contain readable block and model-space data.");const o=XT(s),l=new Map(Object.entries(s.blocks).map(([m,f])=>[m.toUpperCase(),f])),u=new Map;for(const m of new Set(r)){const f=l.get(m.toUpperCase());if(!f||m.startsWith("*"))continue;const g={paths:[],texts:[],unsupported:new Set,primitives:[],nestedInsertCount:0};lv(f.entities??[],s.blocks,o,UT,FT,g,new Set([f.name.toUpperCase()]));const y=cv(g),p=g.paths.flatMap(N=>N.points),b=p.length?{minX:Math.min(...p.map(N=>N.x)),minY:Math.min(...p.map(N=>N.y)),maxX:Math.max(...p.map(N=>N.x)),maxY:Math.max(...p.map(N=>N.y))}:null,v=b?b.maxX-b.minX:null,w=b?b.maxY-b.minY:null,R=g.primitives.reduce((N,x)=>(N[x.type]=(N[x.type]??0)+1,N),{}),D=s.header?.$INSUNITS,S={schemaVersion:1,blockName:m,unitsCode:typeof D=="number"&&Number.isInteger(D)?D:null,basePoint:bp(f.position)??{x:0,y:0,z:0},bounds:b,width:v,height:w,aspectRatio:v!==null&&w!==null&&w>0?v/w:null,primitiveCounts:R,primitives:g.primitives,nestedInsertCount:g.nestedInsertCount,unsupportedEntities:[...g.unsupported].sort(),transformPolicy:{allowedRotationsDegrees:null,mirrorAllowed:null,uniformScalingAllowed:null,nonUniformScalingAllowed:null,status:"UNSPECIFIED_REQUIRES_REVIEW"}},T=QT(g),L=aA(dv(m,s.entities)),_=y?nA(m,f,y,s.entities):{labels:[],skippedContextOnly:!1};u.set(m,{...T?{previewSvg:T}:{},geometryDescriptor:S,nearbyLabels:_.labels,..._.skippedContextOnly?{labelMatchSkipped:!0}:{},..._.ambiguous?{labelMatchAmbiguous:!0}:{},...L.length?{sourcePlacements:L}:{}})}return u}const ft=(a,r)=>a.find(s=>s.code===r)?.value.trim()??"",fa=a=>ft(a,0).toUpperCase(),zs=a=>ft(a,fa(a)==="DIMSTYLE"?105:5).toUpperCase(),Vn=(...a)=>{const r=[];for(let s=0;s<a.length;s+=2)r.push({code:Number(a[s]),value:String(a[s+1])});return r},Dy=a=>a>=330&&a<=369||a>=390&&a<=399||a===480||a===481||a===1005,zu=a=>["DICTIONARY","ACDBDICTIONARYWDFLT"].includes(fa(a)),rA=new Set(["BLOCK","ENDBLK","LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE","VERTEX","SEQEND","SPLINE","POINT","SOLID","TRACE","3DFACE","TEXT","MTEXT","ATTDEF","ATTRIB","INSERT","HATCH","DIMENSION","LEADER","TOLERANCE"]),sA=["VPORT","LTYPE","LAYER","STYLE","VIEW","UCS","APPID","DIMSTYLE","BLOCK_RECORD"];function Gn(a){const r=[];for(const s of a){if(s.code===0&&r.push([]),!r.length)throw new Error("Invalid DXF record boundary.");r[r.length-1].push(s)}return r}function oA(a){let r=0;return a.filter(s=>s.code===102&&s.value.trim()==="{BLKREFS"?(r=1,!1):r?(s.code===102&&s.value.trim().startsWith("{")&&r++,s.code===102&&s.value.trim()==="}"&&r--,!1):!0)}class Gp{sections=new Map;tables=new Map;blocks=new Map;modelRecords;text;objects;recordsByHandle=new Map;blockForRecord=new Map;tableForRecord=new Map;tableHandles=new Set;maxHandle=0;constructor(r){const s=Zs(r);let o="";for(let p=0;p<s.content.length;p+=16384)o+=String.fromCharCode(...s.content.subarray(p,p+16384));this.text=o;const l=o.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;l.length&&l.at(-1)==="";)l.pop();if(l.length%2)throw new Error("DXF has an incomplete group-code/value pair.");const u=[];for(let p=0;p<l.length;p+=2){const b=Number(l[p].trim());if(!Number.isInteger(b))throw new Error("DXF has an invalid group code.");u.push({code:b,value:l[p+1]})}let m="";for(let p=0;p<u.length;p++){const b=u[p];if(b.code===0&&b.value.trim()==="SECTION"){if(m||u[p+1]?.code!==2)throw new Error("Invalid DXF section.");if(m=u[++p].value.trim().toUpperCase(),this.sections.has(m))throw new Error("Duplicate DXF section.");this.sections.set(m,[])}else b.code===0&&b.value.trim()==="ENDSEC"?m="":m&&this.sections.get(m).push(b)}if(m||!this.sections.has("BLOCKS")||!this.sections.has("ENTITIES"))throw new Error("A complete ASCII source DXF with BLOCKS and ENTITIES is required.");const f=Gn(this.sections.get("TABLES")??[]);let g;for(const p of f)if(fa(p)==="TABLE")g={name:ft(p,2).toUpperCase(),header:p,records:[]},this.tables.set(g.name,g),this.tableHandles.add(zs(p));else if(fa(p)==="ENDTAB")g=void 0;else if(g){const b=fa(p)==="BLOCK_RECORD"?oA(p):p;g.records.push(b),this.tableForRecord.set(b,g)}let y;for(const p of Gn(this.sections.get("BLOCKS"))){if(fa(p)==="BLOCK"){const b=ft(p,2);if(y={name:b,records:[]},this.blocks.has(b.toUpperCase()))throw new Error("Duplicate source block definition.");this.blocks.set(b.toUpperCase(),y)}if(!y)throw new Error("DXF block definition is incomplete.");y.records.push(p),this.blockForRecord.set(p,y.name.toUpperCase()),fa(p)==="ENDBLK"&&(y=void 0)}if(y)throw new Error("DXF block definition has no ENDBLK.");this.modelRecords=Gn(this.sections.get("ENTITIES")),this.objects=Gn(this.sections.get("OBJECTS")??[]);for(const p of[...[...this.tables.values()].flatMap(b=>b.records),...[...this.blocks.values()].flatMap(b=>b.records),...this.modelRecords,...this.objects]){const b=zs(p);if(b){if(this.recordsByHandle.has(b))throw new Error("Duplicate DXF entity handle.");this.recordsByHandle.set(b,p),this.maxHandle=Math.max(this.maxHandle,parseInt(b,16)||0)}}for(const p of this.tableHandles)this.maxHandle=Math.max(this.maxHandle,parseInt(p,16)||0)}placements(){const r=new Map;for(const s of this.modelRecords){if(fa(s)!=="INSERT"||ft(s,67)==="1"||ft(s,410)&&ft(s,410).toUpperCase()!=="MODEL")continue;const o=ft(s,2);if(!o||o.startsWith("*"))continue;const l=this.blocks.get(o.toUpperCase())?.name??o,u=r.get(l)??new Set;u.add(ft(s,8)||"0"),r.set(l,u)}return r}layerDetails(r){const s=this.tables.get("LAYER")?.records.find(o=>ft(o,2).toUpperCase()===r.toUpperCase());return s?`color=${Math.abs(Number(ft(s,62)||"7"))};lineweight=${ft(s,370)||"-3"};linetype=${ft(s,6)||"CONTINUOUS"}`:null}nativeAssetInfo(){const r=this.modelRecords.filter(l=>!["ATTRIB","VERTEX","SEQEND"].includes(fa(l))),s=r.length?zs(r[0]):"";if(!r.length||!s)throw new Error("Native symbol DXF has no verifiable model-space geometry.");const o=this.tables.get("STYLE")?.records.flatMap(l=>[ft(l,3),ft(l,4)].filter(Boolean).flatMap(u=>/\.shx$/i.test(u)?[u]:u.includes(".")?[]:[`${u}.shx`]))??[];return{entityCount:r.length,firstHandle:s,requiredShapeFonts:[...new Set(o)]}}isolate(r){let s=this.maxHandle+1;const o=()=>(s++).toString(16).toUpperCase(),l=new Set,u=new Set,m=new Set,f=new Set,g=[],y=(B,V=!0)=>{zu(B)&&V&&!m.has(B)&&(m.add(B),l.has(B)&&g.push(B)),l.has(B)||(l.add(B),g.push(B));const ie=this.tableForRecord.get(B);ie&&f.add(ie)},p=B=>{const V=B.toUpperCase();if(u.has(V))return;const ie=this.blocks.get(V);if(!ie||V.startsWith("*MODEL_SPACE")||V.startsWith("*PAPER_SPACE"))throw new Error(`Missing or external block dependency: ${B}`);if(Number(ft(ie.records[0],70))&28)throw new Error("External-reference blocks require native AutoCAD extraction.");u.add(V),ie.records.forEach(ve=>{if(!rA.has(fa(ve)))throw new Error(`Unsupported native block entity: ${fa(ve)}`);y(ve)});const de=this.tables.get("BLOCK_RECORD")?.records.find(ve=>ft(ve,2).toUpperCase()===V);if(!de)throw new Error("Source block has no BLOCK_RECORD; save a modern ASCII DXF first.");y(de)},b=(B,V,ie=!0)=>{const de=this.tables.get(B)?.records.find(ve=>ft(ve,2).toUpperCase()===V.toUpperCase());if(de)B==="BLOCK_RECORD"?p(ft(de,2)):y(de);else if(ie)throw new Error(`Missing ${B} dependency: ${V}`)};p(r);for(const B of sA){const V=this.tables.get(B);if(!V)throw new Error(`Native symbol DXF is missing required ${B} table after safe repair.`);if(f.add(V),B==="VPORT"){const ie=V.records.find(de=>ft(de,2).toUpperCase()==="*ACTIVE");if(!ie)throw new Error("Native symbol DXF has no active *ACTIVE VPORT record after safe repair.");y(ie)}}b("LAYER","0");for(const B of["CONTINUOUS","BYLAYER","BYBLOCK"])b("LTYPE",B,!1);for(b("STYLE","STANDARD",!1),b("APPID","ACAD",!1),b("DIMSTYLE","STANDARD",!1);g.length;){const B=g.shift(),V=fa(B);if(/IMAGEDEF|UNDERLAY|PDFDEFINITION|DGNDEFINITION|DWFDEFINITION|PROXY/.test(V))throw new Error(`External/proxy dependency ${V} requires native AutoCAD extraction.`);(V==="INSERT"||V==="DIMENSION")&&p(ft(B,2)),V==="DIMENSION"&&b("DIMSTYLE",ft(B,3)||"STANDARD");for(let ie=0;ie<B.length;ie++){const de=B[ie];if(de.code===8&&b("LAYER",de.value.trim()||"0"),de.code===6&&!["BYLAYER","BYBLOCK",""].includes(de.value.trim().toUpperCase())&&b("LTYPE",de.value.trim()),de.code===7&&de.value.trim()&&b("STYLE",de.value.trim()),de.code===1001&&b("APPID",de.value.trim()),!Dy(de.code)||!de.value.trim()||de.value.trim()==="0"||zu(B)&&[350,360].includes(de.code)&&B[ie-1]?.code===3&&!m.has(B))continue;const ve=de.value.trim().toUpperCase();if(this.tableHandles.has(ve))continue;const Pe=this.recordsByHandle.get(ve);if(!Pe)throw new Error(`Unresolved native DXF handle reference (${de.code}).`);const ke=this.blockForRecord.get(Pe);if(ke&&!u.has(ke))throw new Error("Block metadata references unrelated drawing geometry; use native AutoCAD extraction.");if(this.modelRecords.includes(Pe))throw new Error("Block metadata references source model-space geometry; use native AutoCAD extraction.");fa(Pe)==="BLOCK_RECORD"?p(ft(Pe,2)):y(Pe,de.code!==330)}}const v=new Set,w=new Set,R=B=>{if(v.has(B))throw new Error("Circular block references cannot be isolated safely.");if(!w.has(B)){v.add(B);for(const V of this.blocks.get(B).records)["INSERT","DIMENSION"].includes(fa(V))&&R(ft(V,2).toUpperCase());v.delete(B),w.add(B)}};if(R(r.toUpperCase()),[...l].some(B=>/BLOCK.*(?:PARAMETER|ACTION)|BLOCKREPRESENTATION|EVALUATION_GRAPH/.test(fa(B))||B.some(V=>V.code===3&&/ACAD_ENHANCEDBLOCK/i.test(V.value))))throw new Error("Dynamic blocks require native AutoCAD extraction; their behavior is not approximated.");const D=this.tables.get("BLOCK_RECORD");f.add(D);const S=this.blocks.get(r.toUpperCase()),T=D.records.find(B=>ft(B,2).toUpperCase()===r.toUpperCase()),L=o(),_=(B,V)=>Vn(0,"BLOCK_RECORD",5,V,330,zs(D.header),100,"AcDbSymbolTableRecord",100,"AcDbBlockTableRecord",2,B,70,0,280,1,281,0),N=B=>B.map(V=>[2,3].includes(V.code)?{...V,value:"*Model_Space"}:fa(B)==="BLOCK"&&[10,20,30,70].includes(V.code)?{...V,value:"0"}:V),x=[];for(const B of[...f].sort((V,ie)=>V.name==="BLOCK_RECORD"?1:ie.name==="BLOCK_RECORD"?-1:0)){const V=B.records.filter(ie=>l.has(ie)).map(ie=>ie===T?N(ie):ie);B.name==="BLOCK_RECORD"&&V.push(_("*Paper_Space",L)),x.push(...Vn(0,"TABLE",2,B.name,5,zs(B.header),330,"0",100,"AcDbSymbolTable",70,V.length),...B.name==="DIMSTYLE"?Vn(100,"AcDbDimStyleTable"):[],...V.flat(),...Vn(0,"ENDTAB"))}const O=[...N(S.records[0]),...S.records.at(-1),...Vn(0,"BLOCK",5,o(),330,L,100,"AcDbEntity",8,"0",100,"AcDbBlockBegin",2,"*Paper_Space",70,0,10,0,20,0,30,0,3,"*Paper_Space",1,"",0,"ENDBLK",5,o(),330,L,100,"AcDbEntity",8,"0",100,"AcDbBlockEnd")];for(const B of u)B!==r.toUpperCase()&&O.push(...this.blocks.get(B).records.flat());const C=this.objects.filter(B=>l.has(B)).map(B=>!zu(B)||m.has(B)?B:B.filter((V,ie)=>V.code===3&&[350,360].includes(B[ie+1]?.code)?l.has(this.recordsByHandle.get(B[ie+1].value.trim().toUpperCase())):[350,360].includes(V.code)&&B[ie-1]?.code===3?l.has(this.recordsByHandle.get(V.value.trim().toUpperCase())):!0)).flat(),P=S.records.slice(1,-1).flat();if(!P.length)throw new Error("The selected block contains no native entities.");const k=new Set(["$ACADVER","$DWGCODEPAGE","$INSUNITS","$MEASUREMENT","$LTSCALE","$CELTSCALE","$PSLTSCALE"]),te=[];let X=!1;for(const B of this.sections.get("HEADER")??[])B.code===9&&(X=k.has(B.value.trim())),X&&te.push(B);te.push(...Vn(9,"$HANDSEED",5,o(),9,"$INSBASE",10,ft(S.records[0],10)||"0",20,ft(S.records[0],20)||"0",30,ft(S.records[0],30)||"0"));const ae=new Set([...l].map(B=>fa(B))),pe=Gn(this.sections.get("CLASSES")??[]).filter(B=>ae.has(ft(B,1).toUpperCase())).flat(),oe=(B,V)=>[...Vn(0,"SECTION",2,B),...V,...Vn(0,"ENDSEC")],ne=[...oe("HEADER",te),...pe.length?oe("CLASSES",pe):[],...oe("TABLES",x),...oe("BLOCKS",O),...oe("ENTITIES",P),...C.length?oe("OBJECTS",C):[],...Vn(0,"EOF")],Y=new Set;for(const B of[...Gn(x),...Gn(O),...Gn(P),...Gn(C)]){const V=zs(B);if(V){if(Y.has(V))throw new Error("Duplicate handle in isolated DXF.");Y.add(V)}}for(const B of ne)if(Dy(B.code)&&B.value.trim()&&B.value.trim()!=="0"&&!Y.has(B.value.trim().toUpperCase()))throw new Error(`A required DXF reference was not retained (${B.code}).`);const Z=ne.map(B=>`${B.code}\r
${B.value}\r
`).join(""),ge=new Uint8Array(Z.length);for(let B=0;B<Z.length;B++)ge[B]=Z.charCodeAt(B);const xe=Zs(ge).content;let j="";for(let B=0;B<xe.length;B+=16384)j+=String.fromCharCode(...xe.subarray(B,B+16384));Yp(j);const ee=new nv().parseSync(j);if(!ee?.entities.length||!ee.blocks?.["*Model_Space"])throw new Error("The isolated block DXF failed its structural round-trip validation.");return xe}}const Yu=(a,r)=>a.item.fields.find(s=>s.label===r)?.value.trim()??"";function Ny(a,r){const o=a.reviewCandidates.filter(f=>f.sourceGroup===r).filter(f=>f.item.category==="symbol"),u=[...a.companyItems,...Object.values(a.projects).flatMap(f=>f.items)].filter(f=>f.category==="symbol"&&f.fields.some(g=>g.label==="Source drawing ID"&&g.value===r)).filter(f=>f.reviewStatus==="reviewed"),m=[...new Set(u.flatMap(f=>f.fields.filter(g=>g.label==="Target CAD layer"||g.label==="Source insert layer(s)").map(g=>g.value).filter(Boolean)))];return{pending:o.filter(f=>f.status==="needs-review").length,approved:u.length,dismissed:o.filter(f=>f.status==="dismissed").length,layers:m}}function iA(a,r,s,o=new Set){if(a.format!=="DXF"||a.category!=="company-standard")throw new Error("Select a saved DXF classified as a Legends Library standard. DWG still uses the AutoCAD extractor.");const l=new Gp(r),u=l.placements(),m=[...u].filter(([,S])=>S.size===1&&!!gp[[...S][0].trim().toUpperCase()]),f=ac(l.text,m.map(([S])=>S)),g=[],y=[],p=new Map,b=[];let v=0;const w=new Set,R=[...s.reviewCandidates],D=(S,T,L,_=[])=>{const N=`extract-${a.id}-${S}-${T}`;return{id:N,proposedScope:"company",sourceGroup:a.id,status:"needs-review",item:{id:N,category:S==="BLOCK"?"symbol":"layer",name:`${S==="BLOCK"?"Block":"LAYER"} · ${T}`,summary:"Extracted from the saved DXF on this device. Only verified placement layers can be batch-approved.",sourceFile:a.label,sourceKind:"extracted-dwg",scope:"company",reviewStatus:"needs-review",canPromote:!1,fields:[{label:S==="BLOCK"?"Block name":"CAD name",value:T},{label:"Source drawing ID",value:a.id},{label:"Source discipline",value:a.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:L},..._]}}};for(const[S,T]of u){const L=[...T][0];if(T.size!==1||!gp[L.trim().toUpperCase()]){b.push({blockName:S,reason:T.size>1?"Mixed placement layers; review required.":"Internal or unsupported placement layer."});continue}const _=R.find(C=>C.sourceGroup===a.id&&Yu(C,"Block name").toUpperCase()===S.toUpperCase()),N=[...s.companyItems,...Object.values(s.projects).flatMap(C=>C.items)].some(C=>C.fields.some(P=>P.label==="Source drawing ID"&&P.value===a.id)&&C.fields.some(P=>P.label==="Block name"&&P.value.trim().toUpperCase()===S.toUpperCase()));if(_&&_.status!=="needs-review"||N){v++;continue}if(!l.layerDetails(L)){b.push({blockName:S,reason:"The placement layer has no LAYER table record."});continue}const O=_&&Yu(_,"Block asset ID")||`${a.id}|${S}`;try{if(!o.has(O)){const P=l.isolate(S),k=f.get(S);g.push({id:O,sourceId:a.id,blockName:S,content:P,format:"DXF",previewSvg:k?.previewSvg??null,nearbyLabels:k?.nearbyLabels??[],labelMatchAmbiguous:k?.labelMatchAmbiguous??!1,labelMatchSkipped:k?.labelMatchSkipped??!0,sourcePlacements:k?.sourcePlacements??[],...k?.geometryDescriptor?{geometryDescriptor:k.geometryDescriptor}:{}})}const C=D("BLOCK",S,`sourceLayer=${L};nativeIsolatedDxf=true`,[{label:"Block asset ID",value:O},{label:"Fallback category",value:""},{label:"Source insert layer(s)",value:L}]);if(_){const P=new Set(["Extracted details","Source insert layer(s)","Block asset ID"]);p.set(_.id,{..._,item:{..._.item,fields:[..._.item.fields.filter(k=>!P.has(k.label)),...C.item.fields.filter(k=>P.has(k.label))]}})}else y.push(C);w.add(L)}catch(C){b.push({blockName:S,reason:C instanceof Error?C.message:"Native DXF isolation failed."})}}for(const S of w){const T=R.some(_=>_.sourceGroup===a.id&&_.item.category==="layer"&&Yu(_,"CAD name").toUpperCase()===S.toUpperCase()),L=s.companyItems.some(_=>_.category==="layer"&&_.fields.some(N=>N.label==="Source drawing ID"&&N.value===a.id)&&_.fields.some(N=>N.label==="CAD name"&&N.value.toUpperCase()===S.toUpperCase()));!T&&!L&&y.push(D("LAYER",S,l.layerDetails(S)))}return{library:{...s,reviewCandidates:[...s.reviewCandidates.map(S=>p.get(S.id)??S),...y]},assets:g,skipped:b,preserved:v,prepared:w.size?g.length:0,eligibleSymbols:m.length,addedSymbols:y.filter(S=>S.item.category==="symbol").length,updatedSymbols:p.size,detectedLayers:[...new Set([...u.values()].flatMap(S=>[...S]))]}}const lA=40*1024*1024,cA=40*1024*1024,dA=48,uA=15,pA=32;function fA(a){const r=[];let s=0;for(;s<a.length;){const o=a[s];if(/\s/.test(o)){s+=1;continue}if(o==="("||o===")"){r.push(o),s+=1;continue}if(o==="."&&(s+1===a.length||/[\s)]/.test(a[s+1]))){r.push(o),s+=1;continue}if(o==='"'){let u="";for(s+=1;s<a.length&&a[s]!=='"';)if(a[s]==="\\"&&s+1<a.length){s+=1;const m=a[s];u+=m==="n"?`
`:m==="r"?"\r":m,s+=1}else u+=a[s],s+=1;if(a[s]!=='"')throw new Error("The AutoCAD geometry log contains an unfinished string value.");s+=1,r.push(JSON.stringify(u));continue}const l=s;for(;s<a.length&&!/[\s()]/.test(a[s]);)s+=1;if(l===s)throw new Error("The AutoCAD geometry log contains an invalid value.");r.push(a.slice(l,s))}return r}function vp(a,r,s=0){if(s>40)throw new Error("The AutoCAD geometry log nesting is too deep to read safely.");const o=a[r.index++];if(o===void 0)throw new Error("The AutoCAD geometry log contains an incomplete geometry record.");if(o!=="("){if(o===")")throw new Error("The AutoCAD geometry log contains an unexpected closing bracket.");return o.startsWith('"')?JSON.parse(o):/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(o)?Number(o):o.toLowerCase()==="nil"?null:o.toUpperCase()==="T"?!0:o}const l=[];for(;r.index<a.length&&a[r.index]!==")";){if(a[r.index]==="."){if(l.length!==1)throw new Error("The AutoCAD geometry log contains a malformed pair.");r.index+=1;const u=vp(a,r,s+1);if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains a malformed pair.");return{kind:"pair",first:l[0],rest:u}}l.push(vp(a,r,s+1))}if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains an incomplete list.");return l}function Gl(a){const r=fA(a),s={index:0},o=vp(r,s);if(s.index!==r.length)throw new Error("The AutoCAD geometry log has trailing geometry data.");return o}function Xl(a,r){if(Array.isArray(a))for(const s of a){if(s&&typeof s=="object"&&!Array.isArray(s)&&"kind"in s&&String(s.first)===r)return s.rest;if(Array.isArray(s)&&s.length>=2&&s[0]===r)return s.length===2?s[1]:s.slice(1)}}function hA(a,r){return!Array.isArray(a)||a.length<r||a.slice(0,r).some(s=>typeof s!="number"||!Number.isFinite(s))?null:a.slice(0,r)}function gA(a){if(!Array.isArray(a))return{};const r={};for(const s of a){if(s&&typeof s=="object"&&!Array.isArray(s)&&"kind"in s){const o=s;typeof o.first=="string"&&typeof o.rest=="number"&&Number.isFinite(o.rest)&&(r[o.first]=o.rest);continue}!Array.isArray(s)||typeof s[0]!="string"||typeof s[1]!="number"||!Number.isFinite(s[1])||(r[s[0]]=s[1])}return r}function mA(a){const r=Gl(a);return Array.isArray(r)?r.filter(s=>typeof s=="string"):[]}function yA(a){if(new TextEncoder().encode(a).byteLength>lA)throw new Error("The AutoCAD geometry log is over the 40 MB local review limit.");const r=new Map,s=[],o=new Set;for(const l of a.split(/\r?\n/)){if(l.startsWith("SCAN|")){const D=l.split("|");D[1]&&Number.isInteger(Number(D[2]))&&o.add(`${D[1]}:${Number(D[2])}`);continue}if(l.startsWith("ENTITY|")){const D=l.indexOf("|NORMALIZED=");if(D<0)continue;const S=l.slice(0,D).split("|"),T=S[3]?.trim(),L=S[4]?.trim().toUpperCase();if(!T||!L)continue;const _=Gl(l.slice(D+12));r.set(T,{handle:T,type:L,descriptor:_});continue}if(!l.startsWith("CANDIDATE|"))continue;const u=l.split("|"),m=D=>u.find(S=>S.startsWith(`${D}=`))?.slice(D.length+1),f=u[3]?.trim(),g=u[1]?.trim(),y=Number(u[2]),p=m("SOURCE_HANDLES"),b=m("BOUNDS"),v=m("PRIMITIVE_COUNTS");if(!f||!g||!Number.isInteger(y)||!p)continue;const w=b?Gl(b):null,R=hA(w,4);s.push({id:f,sourceAlias:g,page:y,handles:mA(p),bounds:R,primitiveCounts:v?gA(Gl(v)):{}})}if(r.size===0||o.size===0)throw new Error("This log has no readable geometry scans. Use AUTOCAD_GEOMETRY_SCAN.log from a current runner.");return{entities:r,candidates:s,pages:o.size}}function Ep(a){return typeof a=="number"&&Number.isFinite(a)?[a]:Array.isArray(a)?a.flatMap(Ep):[]}function uv(a){return Array.isArray(a)?a.flatMap(r=>{if(r&&typeof r=="object"&&!Array.isArray(r)&&"kind"in r){const s=r;return typeof s.first=="number"&&Number.isFinite(s.first)?[{code:s.first,values:Ep(s.rest)}]:[]}return Array.isArray(r)&&typeof r[0]=="number"?[{code:r[0],values:r.slice(1).flatMap(Ep)}]:[]}):[]}function bA(a){return uv(Xl(a,"properties"))}function Ys(a,r,s=0){const o=a.filter(l=>l.code===r)[s];return!o||o.values.length<2?null:{x:o.values[0],y:o.values[1]}}function wp(a,r,s){if(!Number.isFinite(s)||Math.abs(s)<1e-5)return[a,r];const o=r.x-a.x,l=r.y-a.y,u=Math.hypot(o,l);if(u<1e-9)return[a,r];const m=4*Math.atan(s),f=u*(1-s*s)/(4*s),g={x:(a.x+r.x)/2-l/u*f,y:(a.y+r.y)/2+o/u*f},y=Math.atan2(a.y-g.y,a.x-g.x),p=Math.hypot(a.x-g.x,a.y-g.y),b=Math.max(4,Math.min(32,Math.ceil(Math.abs(m)/(Math.PI/12))));return Array.from({length:b+1},(v,w)=>{const R=y+m*w/b;return{x:g.x+Math.cos(R)*p,y:g.y+Math.sin(R)*p}})}function pv(a){const r=bA(a.descriptor),s=a.type;if(s==="LINE"){const o=Ys(r,10),l=Ys(r,11);return o&&l?[o,l]:[]}if(s==="CIRCLE"||s==="ARC"){const o=Ys(r,10),l=r.find(b=>b.code===40)?.values[0]??0;if(!o||l<=0)return[];const u=r.find(b=>b.code===50)?.values[0]??0,m=r.find(b=>b.code===51)?.values[0]??Math.PI*2,f=b=>Math.abs(b)>Math.PI*2+.1?b*Math.PI/180:b,g=s==="CIRCLE"?0:f(u);let y=s==="CIRCLE"?Math.PI*2:f(m)-g;for(;y<=0;)y+=Math.PI*2;const p=Math.max(12,Math.min(48,Math.ceil(y/(Math.PI/12))));return Array.from({length:p+1},(b,v)=>{const w=g+y*v/p;return{x:o.x+Math.cos(w)*l,y:o.y+Math.sin(w)*l}})}if(s==="LWPOLYLINE"){const o=[];let l=null;for(const g of r)g.code===10&&g.values.length>=2?(l={point:{x:g.values[0],y:g.values[1]},bulge:0},o.push(l)):g.code===42&&l&&(l.bulge=g.values[0]??0);const u=Xl(a.descriptor,"closed")===!0;if(o.length<2)return o.map(g=>g.point);const m=[],f=u?o.length:o.length-1;for(let g=0;g<f;g+=1){const y=o[g],p=o[(g+1)%o.length],b=wp(y.point,p.point,y.bulge);m.push(...g?b.slice(1):b)}return u||m.push(o[o.length-1].point),m}if(s==="POLYLINE"){const o=Xl(a.descriptor,"polylineVertices");if(!Array.isArray(o))return[];const l=o.flatMap(g=>{const y=uv(g),p=Ys(y,10);return p?[{point:p,bulge:y.find(b=>b.code===42)?.values[0]??0}]:[]});if(l.length<2)return l.map(g=>g.point);const u=Xl(a.descriptor,"closed")===!0,m=u?l.length:l.length-1,f=[];for(let g=0;g<m;g+=1){const y=l[g],p=l[(g+1)%l.length],b=wp(y.point,p.point,y.bulge);f.push(...g?b.slice(1):b)}return u||f.push(l[l.length-1].point),f}if(s==="ELLIPSE"){const o=Ys(r,10),l=Ys(r,11),u=r.find(p=>p.code===40)?.values[0]??0;if(!o||!l||u<=0)return[];const m=r.find(p=>p.code===41)?.values[0]??0;let g=(r.find(p=>p.code===42)?.values[0]??Math.PI*2)-m;for(;g<=0;)g+=Math.PI*2;if(!Number.isFinite(g)||g>Math.PI*2+1e-6)return[];const y=Math.max(12,Math.min(96,Math.ceil(g/(Math.PI/24))));return Array.from({length:y+1},(p,b)=>{const v=m+g*b/y,w=Math.cos(v),R=Math.sin(v)*u;return{x:o.x+l.x*w-l.y*R,y:o.y+l.y*w+l.x*R}})}return s==="SPLINE"?r.filter(o=>o.code===11&&o.values.length>=2).map(o=>({x:o.values[0],y:o.values[1]})):[]}function fv(a){const r=a.geometry,s=a.transform,o=u=>({x:s[0]*u.x+s[2]*u.y+s[4],y:s[1]*u.x+s[3]*u.y+s[5]}),l=r.vertices??r.fitPoints??r.controlPoints;if((a.type==="LINE"||a.type==="SPLINE")&&l?.length)return l.map(o);if(a.type==="LWPOLYLINE"||a.type==="POLYLINE"){if(!l?.length)return[];const u=r.closed===!0,m=[],f=u?l.length:l.length-1;for(let g=0;g<f;g+=1){const y=l[g],p=l[(g+1)%l.length],b=wp(y,p,y.bulge??0).map(o);m.push(...g?b.slice(1):b)}return u||m.push(o(l[l.length-1])),m}if(a.type==="CIRCLE"||a.type==="ARC"){const u=r.center,m=Number(r.radius);if(!u||!Number.isFinite(m)||m<=0)return[];const f=a.type==="ARC"?Number(r.startAngle??0):0;let g=a.type==="ARC"?Number(r.endAngle??f+Math.PI*2)-f:Math.PI*2;for(;g<=0;)g+=Math.PI*2;const y=Math.max(12,Math.min(48,Math.ceil(g/(Math.PI/12))));return Array.from({length:y+1},(p,b)=>{const v=f+g*b/y;return o({x:u.x+Math.cos(v)*m,y:u.y+Math.sin(v)*m})})}if(a.type==="ELLIPSE"){const u=r.center,m=r.majorAxisEndPoint,f=Number(r.axisRatio);if(!u||!m||!Number.isFinite(f)||f<=0)return[];const g=Number(r.startAngle??0);let p=Number(r.endAngle??Math.PI*2)-g;for(;p<=0;)p+=Math.PI*2;if(!Number.isFinite(p)||p>Math.PI*2+1e-6)return[];const b=Math.max(12,Math.min(96,Math.ceil(p/(Math.PI/24))));return Array.from({length:b+1},(v,w)=>{const R=g+p*w/b;return o({x:u.x+m.x*Math.cos(R)-m.y*f*Math.sin(R),y:u.y+m.y*Math.cos(R)+m.x*f*Math.sin(R)})})}return[]}function hv(a,r=dA){return a.length<=r?a:Array.from({length:r},(s,o)=>a[Math.floor(o*(a.length-1)/(r-1))])}function xp(a){const r=hv(a.filter(l=>Number.isFinite(l.x)&&Number.isFinite(l.y)));if(r.length<2)return[];const s={x:r.reduce((l,u)=>l+u.x,0)/r.length,y:r.reduce((l,u)=>l+u.y,0)/r.length},o=Math.sqrt(r.reduce((l,u)=>l+(u.x-s.x)**2+(u.y-s.y)**2,0)/r.length);return!Number.isFinite(o)||o<1e-9?[]:r.map(l=>({x:(l.x-s.x)/o,y:(l.y-s.y)/o}))}function Sp(a){return a.length?{minX:Math.min(...a.map(r=>r.x)),minY:Math.min(...a.map(r=>r.y)),maxX:Math.max(...a.map(r=>r.x)),maxY:Math.max(...a.map(r=>r.y))}:null}function Cy(a){return a?Math.hypot(a.maxX-a.minX,a.maxY-a.minY):0}function Ry(a,r){const s=new Set([...Object.keys(a),...Object.keys(r)]);let o=0,l=0;for(const u of s){const m=a[u]??0,f=r[u]??0;o+=Math.max(m,f),l+=Math.abs(m-f)}return o===0?0:Math.max(0,1-l/(2*o))}function _y(a,r){if(!a||!r)return 0;const s=Math.max(a.maxX-a.minX,1e-9),o=Math.max(a.maxY-a.minY,1e-9),l=Math.max(r.maxX-r.minX,1e-9),u=Math.max(r.maxY-r.minY,1e-9),m=Math.max(s/o,o/s),f=Math.max(l/u,u/l);return Math.exp(-Math.abs(Math.log(m/f)))}function Iy(a,r){let s=0;for(const o of a){let l=Number.POSITIVE_INFINITY;for(const u of r){const m=(o.x-u.x)**2+(o.y-u.y)**2;m<l&&(l=m)}s+=l}return s/a.length}function vA(a,r){let s=Number.POSITIVE_INFINITY,o=0;for(let l=0;l<360;l+=uA){const u=l*Math.PI/180,m=Math.cos(u),f=Math.sin(u),g=r.map(p=>({x:m*p.x-f*p.y,y:f*p.x+m*p.y})),y=Math.sqrt((Iy(a,g)+Iy(g,a))/2);y<s&&(s=y,o=l)}return{residual:s,rotation:o}}function EA(a,r){return a.handles.flatMap(s=>{const o=r.get(s);return o?pv(o):[]})}function wA(a,r){const s=new Set;for(const o of a.handles){const l=r.get(o);(!l||pv(l).length<2)&&s.add(l?.type??"MISSING_ENTITY")}return[...s].sort()}function Ly(a){return a.primitives.flatMap(fv)}function xA(a){const r=new Set(["LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE"]),s=new Set(["TEXT","MTEXT","ATTRIB","ATTDEF","HATCH","DIMENSION","LEADER","MLEADER"]),o=a.unsupportedEntities.filter(b=>!s.has(b.toUpperCase())),l=a.primitives.filter(b=>r.has(b.type));if(o.length>0||l.length===0)return null;for(const b of l)if((b.type==="LWPOLYLINE"||b.type==="POLYLINE")&&(b.geometry.vertices??[]).some(v=>Math.abs(v.bulge??0)>1e-6))return null;const u=l.flatMap(fv),m=hv(xp(u),24);if(m.length<2)return null;const f=Sp(u);if(!f)return null;const g={PATH:0,CURVE:0};for(const b of l)b.type==="LINE"||b.type==="LWPOLYLINE"||b.type==="POLYLINE"?g.PATH+=1:g.CURVE+=1;const y=f.maxX-f.minX,p=f.maxY-f.minY;return y<=1e-9||p<=1e-9?null:{points:m.map(b=>[b.x,b.y]),primitiveClasses:g,aspectRatio:Math.max(y/p,p/y)}}function SA(a,r){if(new TextEncoder().encode(a).byteLength>cA)throw new Error("The CAD block geometry index is over the 40 MB local review limit.");let s;try{s=JSON.parse(a)}catch{throw new Error("The selected file is not valid CAD_BLOCK_GEOMETRY_INDEX.json.")}if(!s||typeof s!="object"||s.localOnly!==!0||!Array.isArray(s.blocks))throw new Error("This is not a local-only CAD block geometry index from the runner package.");return s.blocks.filter(o=>o.indexStatus==="INDEXED"&&(o.discipline===r||o.discipline==="Shared")&&typeof o.blockName=="string"&&typeof o.blockAssetId=="string"&&o.geometry&&typeof o.geometry=="object")}function TA(a,r,s){const o=yA(a),u=SA(r,s).flatMap(f=>{const g=f.geometry,y=xp(Ly(g));return!y.length||!g.bounds?[]:[{block:f,geometry:g,cloud:y,bounds:Sp(Ly(g)),primitiveCounts:g.primitiveCounts??{}}]}),m=o.candidates.map(f=>{const g=wA(f,o.entities);if(g.length)return{...f,best:null,second:null,status:"UNMATCHED",reason:`Matching withheld because candidate geometry is incomplete or unsupported: ${g.join(", ")}.`};const y=EA(f,o.entities),p=xp(y),b=f.bounds?{minX:f.bounds[0],minY:f.bounds[1],maxX:f.bounds[2],maxY:f.bounds[3]}:Sp(y);if(u.length===0)return{...f,best:null,second:null,status:"NO_INDEXED_BLOCKS",reason:"No indexed approved blocks for this discipline."};if(p.length<2||!b)return{...f,best:null,second:null,status:"UNMATCHED",reason:"Candidate has too little supported geometry to compare."};const w=u.map(_=>({prepared:_,coarse:_y(b,_.geometry.bounds)*.75+Ry(f.primitiveCounts,_.primitiveCounts)*.25})).sort((_,N)=>N.coarse-_.coarse).slice(0,pA).map(({prepared:_})=>_).map(_=>{const N=Ry(f.primitiveCounts,_.primitiveCounts),x=_y(b,_.geometry.bounds),O=vA(p,_.cloud),C=Math.exp(-O.residual*2.5),P=Math.max(0,Math.min(1,C*.7+N*.2+x*.1)),k=Cy(b),te=Cy(_.geometry.bounds),X=String(_.block.category??""),ae=/\b(equipment|tower|vessel|tank|exchanger|column|drum)\b/i.test(X);return{blockAssetId:String(_.block.blockAssetId),blockName:String(_.block.blockName),category:X,targetLayer:String(_.block.targetLayer??""),score:P,geometryResidual:O.residual,primitiveSimilarity:N,aspectSimilarity:x,rotationDegrees:O.rotation,estimatedUniformScale:ae||te<=1e-9?null:k/te,indexStatus:String(_.block.indexStatus)}}).sort((_,N)=>N.score-_.score||_.blockName.localeCompare(N.blockName)),R=w[0]??null,D=w[1]??null,S=R&&D?R.score-D.score:Number.POSITIVE_INFINITY,T=!R||R.score<.9?"UNMATCHED":S<.02?"AMBIGUOUS_REVIEW":R.score>=.97?"HIGH_CANDIDATE_REVIEW":"REVIEW";return{...f,best:R,second:D,status:T,reason:T==="AMBIGUOUS_REVIEW"?"Top library shapes are too close to identify safely.":T==="UNMATCHED"?"No geometry match reached the initial review threshold.":"Experimental shape score only; human confirmation is required."}});return{scan:o,candidates:m,indexedBlockCount:u.length}}function AA(a,r){return JSON.stringify({schemaVersion:1,localOnly:!0,discipline:r,generatedAt:new Date().toISOString(),note:"Experimental geometry similarity rankings. Scores are not probabilities or approvals. Source geometry was not changed; every candidate requires human review.",pagesScanned:a.scan.pages,indexedBlocks:a.indexedBlockCount,candidates:a.candidates},null,2)}function Py(a){return a===void 0?"—":`${(a*100).toFixed(1)}%`}function DA(a){return a==null?"Review":`${a.toFixed(3)}×`}function NA({discipline:a}){const[r,s]=M.useState(null),[o,l]=M.useState(null),[u,m]=M.useState(null),[f,g]=M.useState(""),[y,p]=M.useState(!1),b=async()=>{if(!r||!o){g("Choose both AUTOCAD_GEOMETRY_SCAN.log and CAD_BLOCK_GEOMETRY_INDEX.json.");return}p(!0),g(""),m(null);try{const[w,R]=await Promise.all([r.text(),o.text()]),D=TA(w,R,a);m({scanName:r.name,indexName:o.name,discipline:a,indexedBlockCount:D.indexedBlockCount,pagesScanned:D.scan.pages,candidates:D.candidates})}catch(w){g(w instanceof Error?w.message:"The local geometry report could not be compared.")}finally{p(!1)}},v=()=>{if(!u)return;const w=AA({scan:{entities:new Map,candidates:[],pages:u.pagesScanned},candidates:u.candidates,indexedBlockCount:u.indexedBlockCount},u.discipline),R=URL.createObjectURL(new Blob([w],{type:"application/json"})),D=document.createElement("a");D.href=R,D.download="LOCAL_GEOMETRY_MATCH_REVIEW.json",D.click(),URL.revokeObjectURL(R)};return c.jsxs("section",{className:"geometry-match-review","aria-labelledby":"geometry-match-title","data-testid":"panel-geometry-match-review",children:[c.jsxs("div",{className:"geometry-match-heading",children:[c.jsx("span",{className:"geometry-match-icon",children:c.jsx(Nw,{size:16})}),c.jsxs("div",{children:[c.jsx("h3",{id:"geometry-match-title",children:"Review geometry matches"}),c.jsx("p",{children:"Compare a local AutoCAD scan with indexed approved blocks. Source drawings are not changed."})]})]}),c.jsxs("div",{className:"geometry-match-privacy",children:[c.jsx(Zu,{size:14})," Both files are read and compared in this browser; nothing is uploaded."]}),c.jsx("p",{className:"geometry-match-instructions",children:"Use the scan log from AutoCAD and the index file from that same runner kit. The result is a local review aid only."}),c.jsxs("div",{className:"geometry-match-inputs",children:[c.jsxs("label",{children:[c.jsx("span",{children:"AutoCAD geometry scan log"}),c.jsx("input",{type:"file",accept:".log,.txt","aria-label":"Select AutoCAD geometry scan log",onChange:w=>{s(w.currentTarget.files?.[0]??null),m(null),g("")},"data-testid":"input-geometry-scan-log"})]}),c.jsxs("label",{children:[c.jsx("span",{children:"CAD block geometry index"}),c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Select CAD block geometry index",onChange:w=>{l(w.currentTarget.files?.[0]??null),m(null),g("")},"data-testid":"input-cad-geometry-index"})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:y||!r||!o,"data-testid":"button-build-geometry-match-report",children:[c.jsx(es,{size:14}),y?"Comparing…":"Compare geometry"]})]}),f&&c.jsx("p",{className:"geometry-match-error",role:"alert",children:f}),u&&c.jsxs("div",{className:"geometry-match-results","data-testid":"geometry-match-results",children:[c.jsxs("div",{className:"geometry-match-summary",role:"status",children:[u.discipline,": ",u.candidates.length," candidate group(s) across ",u.pagesScanned," page(s); ",u.indexedBlockCount," indexed approved block(s)."]}),u.indexedBlockCount===0&&c.jsx("p",{className:"geometry-match-warning",children:"No matching indexed blocks were found for this discipline. Check that the selected index came from the same local runner package."}),u.indexedBlockCount>0&&u.candidates.length===0&&c.jsx("p",{className:"geometry-match-warning",children:"AutoCAD found no geometry candidate groups on the scanned pages. No blocks were inserted or drawings changed."}),u.candidates.map(w=>c.jsxs("article",{className:"geometry-match-card",children:[c.jsxs("div",{className:"geometry-match-card-head",children:[c.jsx("strong",{children:w.id}),c.jsx("span",{className:`geometry-match-status status-${w.status.toLowerCase()}`,children:w.status.replaceAll("_"," ")})]}),c.jsxs("div",{className:"geometry-match-card-meta",children:["Page ",w.page," · ",w.handles.length," source entities · ",w.sourceAlias]}),c.jsxs("div",{className:"geometry-match-ranking",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Best shape match"}),c.jsx("strong",{children:w.best?.blockName??"No match"}),c.jsxs("small",{children:[Py(w.best?.score)," · ",w.best?.targetLayer||"no target layer"," ·"," ",w.best?.rotationDegrees??"—","° · scale ",DA(w.best?.estimatedUniformScale)]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Second match"}),c.jsx("strong",{children:w.second?.blockName??"—"}),c.jsx("small",{children:Py(w.second?.score)})]})]}),c.jsx("p",{children:w.reason})]},`${w.sourceAlias}-${w.page}-${w.id}`)),c.jsxs("div",{className:"geometry-match-foot",children:[c.jsx("span",{children:"Experimental shape scores are not probabilities or approvals. Every result needs a person to verify it."}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:v,"data-testid":"button-download-geometry-match-report",children:[c.jsx(_r,{size:13})," Download local report"]})]})]})]})}const ky=250*1024*1024,Oy=500*1024*1024,Tp={"needs-review":"Needs review","company-standard":"Legends Library standard","project-example":"Project example","markup-reference":"Markup reference",ignore:"Do not use"};function jy(a,r){return r&&a==="project-example"?"Client-specific library source":Tp[a]}function Hu(){return globalThis.crypto?.randomUUID?.()??`source-${Date.now()}-${Math.random().toString(36).slice(2)}`}function Vu(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(2)} MB`}function qy(a){return(a.replace(/\\/g,"/").split("/").pop()??"").replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,"").trim().slice(0,180)||"Unnamed CAD drawing"}function CA({onAddPdfs:a,discipline:r,clientFolderId:s,clientFolderLabel:o}){const[l,u]=M.useState([]),[m,f]=M.useState({}),[g,y]=M.useState([]),[p,b]=M.useState([]),[v,w]=M.useState(""),[R,D]=M.useState(""),[S,T]=M.useState(!1),[L,_]=M.useState(!1),[N,x]=M.useState(""),[O,C]=M.useState(!1),[P,k]=M.useState(()=>{try{return xn().reviewCandidates.filter($=>$.status==="needs-review").length}catch{return 0}}),[te,X]=M.useState(!1),[ae,pe]=M.useState(""),[oe,ne]=M.useState(!1),[Y,Z]=M.useState(!1),[ge,xe]=M.useState(0),[j,ee]=M.useState([]);M.useEffect(()=>{const $=()=>xe(fe=>fe+1);return window.addEventListener(yi,$),window.addEventListener("storage",$),window.addEventListener("focus",$),()=>{window.removeEventListener(yi,$),window.removeEventListener("storage",$),window.removeEventListener("focus",$)}},[]);const B=M.useMemo(()=>{try{const $=xn();return Object.fromEntries(l.map(fe=>[fe.id,Ny($,fe.id)]))}catch{return{}}},[l,ge]);M.useEffect(()=>{tc().then($=>{u($),f(Object.fromEntries($.map(fe=>[fe.id,{category:fe.category,discipline:fe.discipline,projectLabel:fe.projectLabel}])))}).catch($=>{x($ instanceof Error?$.message:"The local CAD library could not be opened.")})},[]);const V=M.useMemo(()=>XS(l,r,s),[l,r,s]),ie=M.useMemo(()=>V.filter($=>$.category==="company-standard"||!!s&&$.category==="project-example"&&$.projectLabel===s),[V,s]);M.useEffect(()=>{ie.some($=>$.id===ae)||pe(ie[0]?.id??"")},[ie,ae]);const de=M.useMemo(()=>V.reduce(($,fe)=>($[fe.category]+=1,$),{"needs-review":0,"company-standard":0,"project-example":0,"markup-reference":0,ignore:0}),[V]),ve=g.some($=>s?$.projectLabel!==s:!!$.projectLabel),Pe=async $=>{T(!0),D(""),x(""),w(""),C(!1),y([]),b([]);try{if($.size>ky)throw new Error("The archive is larger than the 250 MB limit for this local test.");const fe=hy(new Uint8Array(await $.arrayBuffer())),he=Object.entries(fe).filter(([Fe])=>!Fe.endsWith("/")),z=he.filter(([Fe])=>/\.(dwg|dxf)$/i.test(Fe)&&!/_OVERVIEW\.dxf$/i.test(Fe)),ue=he.filter(([Fe])=>/\.pdf$/i.test(Fe)),Ne=he.filter(([Fe])=>/\.bak$/i.test(Fe)).length;if([...z,...ue].reduce((Fe,[,Be])=>Fe+Be.byteLength,0)>Oy)throw new Error("The PDF and CAD source files together exceed the 500 MB local test limit.");if(z.length===0&&ue.length===0)throw new Error("No PDF, DWG, or source DXF files were found in this ZIP. Overview DXFs and other file types are not saved as source drawings.");const Me=z.map(([Fe,Be],ya)=>({id:Hu(),label:`Source CAD ${String(l.length+ya+1).padStart(3,"0")}`,reviewFilename:qy(Fe),category:"needs-review",discipline:r,format:/\.dxf$/i.test(Fe)?"DXF":"DWG",projectLabel:s??"",bytes:Be.byteLength,content:Be})),et=ue.map(([,Fe],Be)=>({id:Hu(),label:`PDF ${String(Be+1).padStart(2,"0")}`,file:new File([Fe],`SOURCE_${String(Be+1).padStart(2,"0")}.pdf`,{type:"application/pdf"})}));y(Me),b(et),w(`Found ${z.length} CAD drawing file(s) and ${ue.length} PDF file(s). ${Ne} backup file(s) ignored.`),z.length?D("Assign a use to each CAD drawing before saving it. ZIP filenames are shown only during review; the saved library keeps generic source IDs."):D("No CAD drawings to add. You can add the extracted PDF to the conversion queue.")}catch(fe){x(fe instanceof Error?fe.message:"The ZIP could not be read. Check that it is not damaged or password-protected.")}finally{T(!1)}},ke=async $=>{x(""),w(""),D(""),y([]),b([]),C(!1);const fe=$.filter(z=>/\.(dwg|dxf)$/i.test(z.name)&&!/_OVERVIEW\.dxf$/i.test(z.name));if(fe.length!==$.length){x("Choose source DWG/DXF files only. Overview DXFs are not source drawings.");return}if(fe.reduce((z,ue)=>z+ue.size,0)>Oy){x("The selected CAD source files exceed the 500 MB local test limit.");return}if(!fe.length){x("Choose at least one DWG or DXF source drawing.");return}T(!0);try{const z=await Promise.all(fe.map(async(ue,Ne)=>({id:Hu(),label:`Source CAD ${String(l.length+Ne+1).padStart(3,"0")}`,reviewFilename:qy(ue.name),category:"needs-review",discipline:r,format:/\.dxf$/i.test(ue.name)?"DXF":"DWG",projectLabel:s??"",bytes:ue.size,content:new Uint8Array(await ue.arrayBuffer())})));y(z),w(`Prepared ${z.length} CAD source file(s) for local review.`),D("Choose the correct discipline and local library category for each file. Filenames are discarded when saved.")}catch(z){x(z instanceof Error?z.message:"The CAD files could not be read locally.")}finally{T(!1)}},bt=async()=>{if(ve){x("The selected client folder changed after these files were staged. Re-select the original client folder or add the files again.");return}if(g.some($=>$.category==="needs-review")){x("Choose a category for every CAD drawing before saving the library.");return}if(g.some($=>["project-example","markup-reference"].includes($.category)&&!$.projectLabel?.trim())){x("Enter a neutral project code for every project example and markup reference.");return}_(!0),x("");try{let $=0;const fe=g.filter(ue=>ue.category!=="ignore").map(ue=>{const Ne=ue.format==="DXF"?Zs(ue.content):null;return $+=Ne?.repairs.length??0,{id:ue.id,label:ue.label,category:ue.category,discipline:ue.discipline,format:ue.format,projectLabel:ue.projectLabel,bytes:Ne?.content.byteLength??ue.bytes,content:Ne?.content??ue.content}});await aT(fe);const he=await tc();u(he),f(Object.fromEntries(he.map(ue=>[ue.id,{category:ue.category,discipline:ue.discipline,projectLabel:ue.projectLabel}])));const z=g.length-fe.length;y([]),D(`${fe.length} source CAD drawing(s) saved in this browser's local library. ${z} marked “Do not use”. ${$} DXF symbol name(s) repaired in local copies; original disk files unchanged.`)}catch($){x($ instanceof Error?$.message:"The CAD sources could not be saved locally.")}finally{_(!1)}},rt=($,fe)=>{f(he=>({...he,[$.id]:{...$,...he[$.id],...fe}}))},dt=async $=>{const fe=m[$.id]??{category:$.category,discipline:$.discipline,projectLabel:$.projectLabel,standardsMaster:$.standardsMaster};if(["project-example","markup-reference"].includes(fe.category)&&!fe.projectLabel?.trim()){x("Enter a neutral project code before saving this project-specific source.");return}x("");try{await nT($.id,fe),u(he=>he.map(z=>z.id===$.id?{...z,...fe,...fe.projectLabel?.trim()?{projectLabel:fe.projectLabel.trim()}:{projectLabel:void 0}}:z))}catch(he){x(he instanceof Error?he.message:"The source drawing category could not be changed.")}},ht=async()=>{if(!(!ie.length||te)){X(!0),x("");try{const $=await uT(ie),fe=URL.createObjectURL($),he=document.createElement("a");he.href=fe,he.download="local-cad-extractor-kit.zip",he.click(),window.setTimeout(()=>URL.revokeObjectURL(fe),1e3),D(`Local extractor kit prepared with ${ie.length} source CAD drawing(s).`)}catch($){x($ instanceof Error?$.message:"The local extractor kit could not be prepared.")}finally{X(!1)}}},Ut=async $=>{const fe=ie.some(z=>z.id===ae)?ae:ie[0]?.id,he=ie.find(z=>z.id===fe);if(!he){x("Choose a reviewed source drawing before importing its extraction.");return}if(he.category==="project-example"&&!he.projectLabel?.trim()){x("Add a neutral project code to this source drawing before importing its extraction.");return}ne(!0),x("");try{if($.size>ky)throw new Error("The extraction ZIP is larger than the 250 MB limit for this local test.");const z=hy(new Uint8Array(await $.arrayBuffer())),ue=Object.entries(z).find(([at])=>/\.tsv$/i.test(at));if(!ue)throw new Error("The ZIP must contain CAD_STANDARDS.tsv from PIDEXTRACTSTANDARDS.");const ye=new TextDecoder().decode(ue[1]).split(/\r?\n/).filter(Boolean);if(ye.length<2||!ye[0].toUpperCase().includes("KIND")||!ye[0].toUpperCase().includes("NAME"))throw new Error("The ZIP contains an invalid CAD_STANDARDS.tsv extraction.");const Me=xn(),et=Object.entries(z).filter(([at])=>/_OVERVIEW\.dxf$/i.test(at)),Fe=ye[1]?.split("	")[0]?.trim()??"",Be=et.find(([at])=>at.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===`${Fe}_OVERVIEW.dxf`.toLowerCase());if(et.length&&(!Be||et.length!==1))throw new Error("Include exactly one overview DXF for this extraction, named with the same SOURCE alias as the TSV (for example SOURCE_001_OVERVIEW.dxf).");const ya=ye.slice(1).flatMap(at=>{const[,ba,kt]=at.split("	");return ba?.trim().toUpperCase()==="BLOCK"&&kt?.trim()?[kt.trim()]:[]});if(Be&&Be[1].byteLength>30*1024*1024)throw new Error("The overview DXF exceeds the 30 MB preview limit. Keep the original extraction unchanged and export a smaller Legends-only overview.");let we=null,Ye="",Re=!1;if(Be)we=new TextDecoder("windows-1252").decode(Be[1]),Ye="overview DXF";else if(he.format==="DXF"&&he.bytes<=30*1024*1024)try{we=new TextDecoder("windows-1252").decode(await Ws(he.id)),Ye="saved source DXF"}catch{Re=!0}else he.format==="DXF"&&(Re=!0);let aa=new Map;if(we)try{aa=ac(we,ya)}catch{Re=!0}const Oe=[],Oa=[],Bt=[];for(const at of ye.slice(1)){const[,ba,kt,ja=""]=at.split("	"),Gt=ba?.trim().toUpperCase(),wt=kt?.trim();if(!wt||!My[Gt])continue;const _t=Gt==="BLOCK"&&sv(wt)?"directionArrow":My[Gt],At=Gt==="BLOCK"?aa.get(wt):void 0;let rn;if(Gt==="BLOCK"){const va=ja.match(/(?:^|;)asset=([^;]+)/i)?.[1]?.trim();if(!va){Bt.push(wt);continue}const Ea=va.replaceAll("\\","/").split("/").at(-1),Ot=Object.entries(z).find(([jt])=>jt.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===Ea?.toLowerCase());if(!Ea||!Ot){Bt.push(wt);continue}rn=`${he.id}|${wt}`,Oa.push({id:rn,sourceId:he.id,blockName:wt,content:Ot[1],format:"DWG",...we&&!Re?{previewSvg:At?.previewSvg??null,nearbyLabels:At?.nearbyLabels??[],labelMatchSkipped:At?.labelMatchSkipped??!1,labelMatchAmbiguous:At?.labelMatchAmbiguous??!1,sourcePlacements:At?.sourcePlacements??[],...At?.geometryDescriptor?{geometryDescriptor:At.geometryDescriptor}:{}}:{}})}const sn=`extract-${he.id}-${Gt}-${wt}`;if(Me.reviewCandidates.find(va=>va.id===sn))continue;const Ra=he.category==="project-example",Rn=[{label:Gt==="BLOCK"?"Block name":"CAD name",value:wt},{label:"Source drawing ID",value:he.id},{label:"Source discipline",value:he.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:ja.replace(/(?:^|;)asset=[^;]*/i,"").trim()||"No additional table details"},...Gt==="BLOCK"?[{label:"Block asset ID",value:rn??""},{label:"Fallback category",value:""},...At?.sourcePlacements?.length?[{label:"Source insert layer(s)",value:[...new Set(At.sourcePlacements.map(va=>va.layer))].join(", ")},{label:"Source insert rotation(s)",value:At.sourcePlacements.map(va=>`${va.rotationDegrees}° on ${va.layer} (${va.count})`).join("; ")}]:[]]:[]];Oe.push({id:sn,item:{id:sn,category:_t,name:`${_t==="directionArrow"?"Direction Arrow":Gt==="BLOCK"?"Block":Gt.replaceAll("_"," ")} · ${wt}`,summary:"Extracted locally from a source CAD drawing; confirm each value before use.",sourceFile:he.label,sourceKind:"extracted-dwg",scope:Ra?"project":"company",reviewStatus:"needs-review",...Ra?{projectId:he.projectLabel,projectName:he.projectLabel===s&&o||he.projectLabel}:{},canPromote:!1,fields:Rn},proposedScope:Ra?"project":"company",sourceGroup:he.id,...Ra?{projectId:he.projectLabel,projectName:he.projectLabel===s&&o||he.projectLabel}:{},status:"needs-review"})}const Vt={...Me,reviewCandidates:[...Me.reviewCandidates,...Oe],auditTrail:Oe.length?[{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:"Local CAD extraction added for review",detail:`${Oe.length} extracted records from ${he.label} were added as pending review.`,...he.projectLabel?{projectName:he.projectLabel===s&&o||he.projectLabel}:{}},...Me.auditTrail]:Me.auditTrail},Tt=we&&!Re?Sy(Vt,he.id,aa).library:Vt;await yp(Oa),bi(Tt),k(Tt.reviewCandidates.filter(at=>at.status==="needs-review").length),D((Oe.length?`${Oe.length} extracted record(s) added to Drafting standards for review. Nothing was approved automatically.`:"No new records found; the extracted names are already in the review queue or standards library.")+(aa.size?` ${aa.size} local block previews and source placement-layer details read from the ${Ye}. Nearby labels remain suggestions and need confirmation.`:Re?" The source preview could not be read; the valid extracted records were still imported without preview-based layer evidence.":he.format==="DWG"&&!Be?" To identify DWG blocks and their placement layers, include the source *_OVERVIEW.dxf exported with PIDEXPORTOVERVIEW.":"")+(Bt.length?` ${Bt.length} block asset(s) were missing and skipped: ${[...new Set(Bt)].slice(0,5).join(", ")}${Bt.length>5?", …":""}. Other valid records were kept.`:""))}catch(z){x(z instanceof Error?z.message:"The CAD extraction could not be imported.")}finally{ne(!1)}},vt=async()=>{const $=ie.find(he=>he.id===ae&&he.category==="company-standard"),fe=$?[$.id]:[];if(!(!$||Y)){Z(!0),x(""),D(""),ee([]);try{let he=xn();const z=JSON.stringify(he);let ue="";if($.format==="DXF"){D(`${$.label}: extracting native blocks from the saved DXF on this device…`),await new Promise(Re=>window.setTimeout(Re,0));const we=await QS(),Ye=iA($,await Ws($.id),he,we);if(JSON.stringify(xn())!==z)throw new Error("The library changed during DXF preparation. No records were changed; retry with the latest library.");await yp(Ye.assets,!0),he=Ye.library,ee(Ye.skipped),ue=`${Ye.addedSymbols} new symbol record(s), ${Ye.assets.length} native block file(s) saved; ${Ye.preserved} previously reviewed symbol(s) preserved. ${Ye.skipped.length} item(s) excluded or need native extraction/review. `}const Ne=he.reviewCandidates.filter(we=>we.sourceGroup===$.id&&we.status==="needs-review"&&we.proposedScope==="company"&&we.item.category==="symbol"&&we.item.sourceKind==="extracted-dwg");if(!Ne.length){const we=Ny(he,$.id);D(`${$.label}: ${ue}No pending symbols to approve. ${we.approved} already approved; ${we.dismissed} dismissed. ${$.format==="DXF"?"Only named model-space INSERTs on supported placement layers can be extracted. See excluded items below; loose geometry is not guessed into blocks.":"For DWG, import this source’s extraction ZIP with its individual block files."}`);return}let ye="";if($.format==="DXF"){if($.bytes>30*1024*1024)throw new Error("This saved source DXF exceeds the 30 MB recovery limit. Import its extraction with a smaller Legends-only overview DXF.");const we=await Ws($.id),Ye=Ne.map(Oe=>Oe.item.fields.find(Oa=>Oa.label==="Block name")?.value.trim()??"").filter(Boolean),Re=ac(new TextDecoder("windows-1252").decode(we),Ye),aa=Sy(he,$.id,Re);he=aa.library,ye=`${aa.recoveredSymbols} pending symbol(s) have INSERT-layer evidence in the saved DXF; ${aa.updatedRecords} existing record(s) updated. `}const Me=new Set(fe),et=new Set(he.reviewCandidates.filter(we=>we.status==="needs-review"&&Me.has(we.sourceGroup)&&we.item.category==="symbol").map(we=>we.item.fields.find(Ye=>Ye.label==="Block asset ID")?.value.trim()??"").filter(Boolean)),Fe=new Set;await Promise.all([...et].map(async we=>{try{await tv(we),Fe.add(we)}catch{}}));const Be=FS(he,fe,Fe);if(JSON.stringify(xn())!==z)throw new Error("The local standards library changed while this source was being checked. No approval changes were saved; retry to use the latest records.");bi(Be.library),k(Be.library.reviewCandidates.filter(we=>we.status==="needs-review").length);const ya=Object.values(Be.skipped).reduce((we,Ye)=>we+Ye,0);D(`${$.label}: ${ue}${ye}`+(Be.approvedSymbols?`${Be.approvedSymbols} layer-matched symbol(s) approved for shared PFD/P&ID use; ${Be.approvedLayers} placement layer(s) approved or updated.`:"0 symbols approved. Only exact placement layers with local block files and a matching layer record can be approved.")),ya&&D(we=>`${we} ${Be.skipped.missingAsset} missing asset(s), ${Be.skipped.unsupportedLayer} internal/unsupported layer item(s), ${Be.skipped.ambiguousLayer} ambiguous layer item(s), ${Be.skipped.missingLayer} missing layer record(s), and ${Be.skipped.invalidCandidate} invalid item(s) stayed unapproved.`)}catch(he){D(""),x(he instanceof Error?he.message:"The categorized CAD mappings could not be approved locally.")}finally{Z(!1)}}};return c.jsxs("section",{className:"local-cad-library","aria-labelledby":"local-library-title","data-testid":"panel-local-cad-library",children:[c.jsxs("div",{className:"local-library-heading",children:[c.jsx("div",{className:"local-library-icon",children:c.jsx(jp,{size:17})}),c.jsxs("div",{className:"local-library-title",children:[c.jsx("div",{className:"pdf-kicker",children:"SOURCE DRAWINGS · LOCAL ONLY"}),c.jsx("h3",{id:"local-library-title",children:s?"Client Source Library":"Legends Library"}),c.jsx("p",{children:s?`Manage CAD sources for ${o||"this client folder"}. Company standards remain the common default.`:"Add common company standards here. Select a Client folder first to add client-specific sources."})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-files",children:[S?c.jsx(ka,{size:14,className:"pdf-spin"}):c.jsx(es,{size:14}),S?"Reading…":"Add DWG/DXF",c.jsx("input",{type:"file",accept:".dwg,.dxf,application/acad,application/x-dwg,application/dxf",multiple:!0,"aria-label":"Add local DWG or DXF source files",disabled:S,onChange:$=>{const fe=[...$.currentTarget.files??[]];fe.length&&ke(fe),$.currentTarget.value=""},"data-testid":"input-add-cad-files"})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-archive",children:[S?c.jsx(ka,{size:14,className:"pdf-spin"}):c.jsx(kp,{size:14}),S?"Reading ZIP…":"Add ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Add a ZIP with PDF and DWG/DXF source files",disabled:S,onChange:$=>{const fe=$.currentTarget.files?.[0];fe&&Pe(fe),$.currentTarget.value=""},"data-testid":"input-add-cad-archive"})]})]}),c.jsxs("div",{className:"local-library-privacy",children:[c.jsx(Zn,{size:14}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay in this browser."})," ",s?"This client source list is separate from the company Legends Library and other client folders.":"Company-standard sources remain shared defaults; project/client examples stay separate from them."]})]}),c.jsxs("div",{className:"local-library-extraction",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:[c.jsx(Tw,{size:14})," Extract drawing standards locally"]}),c.jsx("span",{children:"Package eligible DWG/DXF drawings with a Windows AutoCAD script. It exports only blocks actually inserted on approved equipment, instrument, or inline-component layers—unused internal definitions are skipped. Source drawings are not uploaded or changed."})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{ht()},disabled:!ie.length||te,"data-testid":"button-download-cad-extractor",children:[te?c.jsx(ka,{size:13,className:"pdf-spin"}):c.jsx(_r,{size:13}),te?"Preparing…":"Download extractor kit"]})]}),ie.length>0&&c.jsxs("div",{className:"local-library-import",children:[c.jsxs("label",{children:[c.jsx("span",{children:"Import AutoCAD extraction"}),c.jsx("select",{value:ae||ie[0].id,disabled:Y||oe,onChange:$=>{pe($.target.value),D(""),ee([])},"aria-label":"Source drawing for extracted CAD standards",children:ie.map($=>c.jsxs("option",{value:$.id,children:[$.label," · ",$.format??"DWG"," · ",B[$.id]?.pending??0," pending / ",B[$.id]?.approved??0," approved",$.projectLabel?` · ${$.projectLabel}`:""]},$.id))})]}),c.jsxs("label",{className:"btn subtle local-library-import-button",children:[oe?c.jsx(ka,{size:13,className:"pdf-spin"}):c.jsx(es,{size:13}),oe?"Importing…":"Import extraction ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Import AutoCAD extraction ZIP",disabled:oe||Y,onChange:$=>{const fe=$.currentTarget.files?.[0];fe&&Ut(fe),$.currentTarget.value=""}})]})]}),!s&&ie.some($=>$.category==="company-standard")&&c.jsxs("div",{className:"local-library-approval",children:[c.jsxs("div",{children:[c.jsx("strong",{children:"Approve supplied company symbols by placement layer"}),c.jsxs("span",{"data-testid":"status-selected-cad-source",children:[ie.find($=>$.id===ae)?.label,": ",B[ae]?.pending??0," pending symbols · ",B[ae]?.approved??0," approved · ",B[ae]?.dismissed??0," dismissed.",B[ae]?.layers.length?` Approved placement layers: ${B[ae].layers.join(", ")}.`:""]}),c.jsx("span",{children:"Saved DXF: this action first extracts individual native blocks locally, then approves eligible placement-layer mappings. Existing approvals, dismissed records and saved block files are not replaced. DWG: import its AutoCAD extraction ZIP first."}),c.jsx("span",{children:"Approves only the selected company source; repeat for each source. EQUIP/f_Equip → equipment, f_Inst → instruments, f_Pipe_Inline → inline components. Mappings are shared across PFD and P&ID; internal, ambiguous, and missing-asset items stay pending."})]}),c.jsxs("button",{className:"btn primary",type:"button",disabled:Y||oe||!ie.some($=>$.id===ae&&$.category==="company-standard"),onClick:()=>{vt()},"data-testid":"button-approve-categorized-company-symbols",children:[Y?c.jsx(ka,{size:13,className:"pdf-spin"}):c.jsx(Gs,{size:13}),Y?"Extracting / approving locally…":"Approve selected source"]})]}),N&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-library-error",children:[c.jsx(Ir,{size:15}),c.jsx("span",{children:N})]}),R&&c.jsx("p",{className:"local-library-message",role:"status","aria-live":"polite","data-testid":"status-cad-source-action",children:R}),j.length>0&&c.jsxs("details",{className:"local-library-message",children:[c.jsxs("summary",{children:[j.length," excluded / review-required DXF items — show reasons"]}),c.jsx("ul",{children:j.map($=>c.jsxs("li",{children:[$.blockName,": ",$.reason]},$.blockName))})]}),c.jsxs("div",{className:"local-library-summary","aria-label":"Local library totals",children:[c.jsxs("span",{children:[c.jsx("strong",{children:V.length})," saved CAD sources",s?` for ${o||"this client"}`:` for ${r}`]}),c.jsxs("span",{children:[c.jsx("strong",{children:de["company-standard"]})," Legends Library sources"]}),c.jsxs("span",{children:[c.jsx("strong",{children:de["project-example"]+de["markup-reference"]})," reference drawings"]}),de["needs-review"]>0&&c.jsxs("span",{className:"local-library-review-count",children:[c.jsx("strong",{children:de["needs-review"]})," need review"]})]}),c.jsx(NA,{discipline:r}),P>0&&c.jsxs(ga,{href:r==="PFD"?"/standards-review/pfd":"/standards-review/pid",className:"btn primary local-library-review-link","data-testid":"link-review-extracted-standards",children:[c.jsx(mw,{size:15}),"Review extracted standards",c.jsx("span",{children:P})]}),ve&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-source-folder-mismatch",children:[c.jsx(Ir,{size:15}),c.jsx("span",{children:"These staged drawings belong to a different folder. Re-select that client or add them again here."})]}),v&&c.jsx("div",{className:"local-library-archive-summary",role:"status",children:v}),p.length>0&&c.jsxs("div",{className:"local-library-pdf-list","aria-label":"PDF files found in ZIP",children:[p.map($=>c.jsxs("div",{className:"local-library-pdf-row",children:[c.jsx(Kn,{size:15}),c.jsx("span",{children:$.label}),c.jsx("span",{className:"pdf-file-meta",children:Vu($.file.size)})]},$.id)),c.jsxs("button",{className:"btn subtle",type:"button",disabled:O,onClick:()=>{a(p.map(({file:$})=>$)),C(!0)},"data-testid":"button-add-archive-pdfs",children:[O?c.jsx(Gs,{size:14}):c.jsx(es,{size:14}),O?"PDFs added to queue":"Add PDF(s) to conversion queue"]})]}),g.length>0&&c.jsxs("div",{className:"local-library-staging",children:[c.jsxs("div",{className:"local-library-staging-title",children:[c.jsx("strong",{children:s?"Choose how each client CAD drawing will be used":"Choose what each CAD drawing is for"}),c.jsx("span",{children:"Unmarked files will not be saved."})]}),g.map($=>c.jsxs("label",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-name",children:[c.jsx("span",{className:"local-library-source-id",children:$.label}),c.jsxs("span",{className:"local-library-review-filename",title:$.reviewFilename,children:["Selected filename: ",$.reviewFilename]})]}),c.jsx("span",{className:"pdf-file-meta",children:Vu($.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Category for ${$.label}`,value:$.category,onChange:fe=>{const he=fe.target.value;y(z=>z.map(ue=>ue.id===$.id?{...ue,category:he}:ue))},"data-testid":`select-category-${$.id}`,children:Object.entries(Tp).filter(([fe])=>s?["needs-review","project-example","markup-reference","ignore"].includes(fe):["needs-review","company-standard","ignore"].includes(fe)).map(([fe,he])=>c.jsx("option",{value:fe,children:jy(fe,s)},fe))}),c.jsx("select",{"aria-label":`Discipline for ${$.label}`,value:$.discipline,onChange:fe=>{const he=fe.target.value;y(z=>z.map(ue=>ue.id===$.id?{...ue,discipline:he}:ue))},"data-testid":`select-discipline-${$.id}`,children:["PFD","P&ID","Shared"].map(fe=>c.jsx("option",{value:fe,children:fe},fe))}),["project-example","markup-reference"].includes($.category)&&!s&&c.jsx("input",{"aria-label":`Project code for ${$.label}`,placeholder:"Neutral project code",value:$.projectLabel,onChange:fe=>y(he=>he.map(z=>z.id===$.id?{...z,projectLabel:fe.target.value}:z)),"data-testid":`input-project-${$.id}`}),s&&["project-example","markup-reference"].includes($.category)&&c.jsx("span",{className:"local-library-scope-tag",children:"Saved only in this client folder"})]})]},$.id)),c.jsxs("button",{className:"btn primary local-library-save",type:"button",disabled:L||ve||g.some($=>$.category==="needs-review"||["project-example","markup-reference"].includes($.category)&&!$.projectLabel?.trim()),onClick:()=>{bt()},"data-testid":"button-save-local-library",children:[L?c.jsx(ka,{size:14,className:"pdf-spin"}):c.jsx(Mm,{size:14}),L?"Saving locally…":"Save reviewed sources locally"]})]}),V.length>0&&c.jsxs("details",{className:"local-library-saved-list",children:[c.jsxs("summary",{children:["Saved source drawings for ",r," (",V.length,")"]}),c.jsx("div",{className:"local-library-saved-items",children:V.map($=>c.jsxs("div",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-id",children:[$.label," · ",$.format??"DWG",s?` · ${$.category==="company-standard"?"Company standard":"This client"}`:$.projectLabel?` · ${$.projectLabel}`:""]}),c.jsx("span",{className:"pdf-file-meta",children:Vu($.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Change category for ${$.label}`,value:(m[$.id]??$).category,disabled:!!(s&&$.category==="company-standard"),onChange:fe=>rt($,{category:fe.target.value}),"data-testid":`saved-category-${$.id}`,children:Object.entries(Tp).filter(([fe])=>!s||["project-example","markup-reference","ignore"].includes(fe)||$.category==="company-standard"&&fe==="company-standard").map(([fe,he])=>c.jsx("option",{value:fe,children:jy(fe,s)},fe))}),c.jsx("select",{"aria-label":`Change discipline for ${$.label}`,value:(m[$.id]??$).discipline,disabled:!!(s&&$.category==="company-standard"),onChange:fe=>rt($,{discipline:fe.target.value}),"data-testid":`saved-discipline-${$.id}`,children:["PFD","P&ID","Shared"].map(fe=>c.jsx("option",{value:fe,children:fe},fe))}),!s&&$.format==="DXF"&&(m[$.id]??$).category==="company-standard"&&c.jsxs("label",{children:[c.jsx("input",{type:"checkbox","aria-label":`Use ${$.label} as global Legends master`,checked:!!(m[$.id]??$).standardsMaster,onChange:fe=>rt($,{standardsMaster:fe.target.checked})}),"Global Legends master · all ",$.discipline==="Shared"?"PFD/P&ID":$.discipline," projects"]}),!s&&["project-example","markup-reference"].includes((m[$.id]??$).category)&&c.jsx("input",{"aria-label":`Neutral project code for ${$.label}`,placeholder:"Neutral project code",value:(m[$.id]??$).projectLabel??"",onChange:fe=>rt($,{projectLabel:fe.target.value}),"data-testid":`saved-project-${$.id}`}),c.jsxs("button",{className:"btn subtle local-library-save-row",type:"button",disabled:!!(s&&$.category==="company-standard"),onClick:()=>{dt($)},"data-testid":`button-save-source-${$.id}`,children:[c.jsx(Mm,{size:12})," Save"]})]})]},$.id))})]}),c.jsx("p",{className:"local-library-limit",children:"Extracted records enter the standards review queue. Only approved mappings are offered to the matching PFD or P&ID runner. Original DWG/DXF sources stay local; only individually exported block files are included with approved mappings."})]})}const My={BLOCK:"symbol",LAYER:"layer",TEXT_STYLE:"textStyle",LINETYPE:"linetype",DIMENSION_STYLE:"dimensionStyle"},Ap=100*1024*1024,Dp=500*1024*1024,RA="pid-studio-local-pdfs",fn="meta",as="bytes",vi="extractedText";class ta extends Error{code;constructor(r,s){super(s),this.code=r}}let Hs=null,$y=Promise.resolve();function ss(){return Hs||(Hs=new Promise((a,r)=>{if(typeof indexedDB>"u"){r(new ta("storage","This browser does not allow local file storage."));return}const s=indexedDB.open(RA,2);s.onupgradeneeded=o=>{const l=s.result;o.oldVersion<1&&(l.createObjectStore(fn,{keyPath:"id"}).createIndex("discipline","discipline"),l.createObjectStore(as)),o.oldVersion<2&&l.createObjectStore(vi)},s.onsuccess=()=>{s.result.onversionchange=()=>{s.result.close(),Hs=null},a(s.result)},s.onerror=()=>{Hs=null,r(new ta("storage","Local storage could not be opened."))},s.onblocked=()=>{Hs=null,r(new ta("storage","Local file storage is busy in another tab. Close that tab and reload."))}})),Hs}function _i(a){return new Promise((r,s)=>{a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)})}function yc(a){return new Promise((r,s)=>{a.oncomplete=()=>r(),a.onerror=()=>s(a.error),a.onabort=()=>s(a.error??new ta("storage","Local storage write was stopped."))})}function bc(a){const r=$y.then(a,a);return $y=r.catch(()=>{}),r}async function gv(a){const r=await ss();return(await _i(r.transaction(fn).objectStore(fn).index("discipline").getAll(a))).sort((o,l)=>o.aliasNumber-l.aliasNumber)}async function _A(){const a=await ss();return(await _i(a.transaction(fn).objectStore(fn).getAll())).reduce((s,o)=>s+o.size,0)}async function Fy(a){const r=globalThis.crypto?.subtle;if(!r)throw new Error("hash-unsupported");const s=await r.digest("SHA-256",a);return Array.from(new Uint8Array(s)).map(o=>o.toString(16).padStart(2,"0")).join("")}function IA(a,r){return bc(async()=>{if(!r())throw new ta("cancelled","Cancelled.");const s=a.bytes.byteLength;if(s>Ap)throw new ta("too-large","This PDF is larger than 100 MB.");const l=(await ss()).transaction([fn,as],"readwrite"),u=yc(l);u.catch(()=>{});const m=l.objectStore(fn),f=await _i(m.getAll());if(!r())throw l.abort(),new ta("cancelled","Cancelled.");if(f.some(b=>b.discipline===a.discipline&&b.hash===a.hash))throw l.abort(),new ta("duplicate","This PDF has the same content as a saved file.");if(f.reduce((b,v)=>b+v.size,0)+s>Dp)throw l.abort(),new ta("total-limit","Saved PDFs would pass the 500 MB total limit.");const y=f.filter(b=>b.discipline===a.discipline).reduce((b,v)=>Math.max(b,v.aliasNumber),0)+1,p={id:globalThis.crypto?.randomUUID?.()??`pdf-${Date.now()}-${Math.random().toString(36).slice(2)}`,discipline:a.discipline,aliasNumber:y,alias:`PDF ${y}`,originalName:a.originalName?.trim()||void 0,size:s,pageCount:a.pageCount,hash:a.hash,addedAt:Date.now(),analysisStatus:"queued",analysisPagesDone:0,analysisRecordCount:0,autocadStatus:"not-connected"};m.put(p),l.objectStore(as).put(a.bytes,p.id);try{await u}catch(b){throw b instanceof ta?b:new ta("storage","The browser could not save this PDF. Storage may be full.")}return p})}async function ti(a){const r=await ss(),s=await _i(r.transaction(as).objectStore(as).get(a));if(!s)throw new ta("storage","Saved PDF data was not found.");return s}function LA(a,r){return bc(async()=>{const o=(await ss()).transaction(vi,"readwrite"),l=yc(o);o.objectStore(vi).put({pdfId:a,pages:r,savedAt:Date.now()},a);try{await l}catch{throw new ta("storage","PDF text was read, but the browser could not save the full text index. The original PDF remains saved; free browser storage and retry EDE.")}})}function Ul(a,r){return bc(async()=>{const o=(await ss()).transaction(fn,"readwrite"),l=yc(o),u=o.objectStore(fn),m=await _i(u.get(a));if(!m)throw o.abort(),new ta("storage","The saved PDF record could not be found.");const f={...m,...r};return u.put(f),await l,f})}function mv(a){return bc(async()=>{const s=(await ss()).transaction([fn,as,vi],"readwrite");a.forEach(o=>{s.objectStore(fn).delete(o),s.objectStore(as).delete(o),s.objectStore(vi).delete(o)}),await yc(s)})}async function PA(a){const r=await gv(a);await mv(r.map(s=>s.id))}class Wl extends Error{constructor(r,s,o){super(`Page ${r}: ${s} failed.`,{cause:o}),this.page=r,this.stage=s,this.name="PdfExtractionError"}page;stage}function Uy(a){const r=a instanceof Wl?a.cause:a,s=r instanceof Error?r.name:"",o=r instanceof Error?r.message:typeof r=="string"?r:"",l=a instanceof Wl?`Page ${a.page} stopped during ${a.stage}. `:"EDE extraction stopped. ";return s==="QuotaExceededError"?`${l}Browser storage is full. Back up your records before freeing space, then retry EDE. Your PDF remains saved.`:/memory|allocation|out of bounds/i.test(o)?`${l}The browser ran out of processing memory. Close other tabs and retry, or use a desktop browser. Your PDF remains saved.`:/fetch|network|importscripts|load.*(worker|core|language)|failed to load/i.test(o)||a instanceof Wl&&a.stage==="OCR startup"?`${l}The OCR engine could not start. Check internet access to the OCR downloads, then retry EDE. Your PDF remains saved.`:`${l}The PDF could not be processed${s?` (${s.replace(/[^a-zA-Z0-9]/g,"").slice(0,60)})`:""}. Retry EDE; if it repeats, report this message. Your PDF remains saved.`}const kA=/\b(?:[A-Z]{1,8}\s*[-–]\s*)+\d{1,6}[A-Z0-9]*(?:\s*[-–]\s*[A-Z0-9]{1,8}){0,3}\b/g,yv=/^(?:AI|DI|FI|FIC|FIT|FQI|LI|LIC|LS|LSH|LSL|PI|PIC|PDI|PSH|PSL|TI|TIC|TSH|TSL|TT|PT|FT|LT|FC|PC|TC|LC|AT|AIT|XV|ZSO|ZSC)$/,OA=/^(?:XV|HV|BV|CV|PCV|FCV|LCV|TCV|PSV|PRV|MOV|SDV|BDV|NRV)$/,jA=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/g,qA=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/i;function bv(a){const r=a.map((g,y)=>({token:g,index:y,value:g.text.trim().toUpperCase()})).filter(({value:g})=>yv.test(g)),s=a.map((g,y)=>({token:g,index:y,value:g.text.trim().toUpperCase()})).filter(({value:g})=>/^\d{2,5}[A-Z]?$/.test(g)),o=[];for(const g of r){const y=g.token.location,p=y.x+y.width/2,b=y.y+y.height/2;for(const v of s){if(g.index===v.index)continue;const w=v.token.location,R=w.x+w.width/2,D=w.y+w.height/2,S=Math.max(y.height,w.height,.004),T=R-p,L=D-b,_=Math.abs(L)<=S*.55&&T>=-S*.4&&T<=S*4,N=L>S*.35&&L<=S*3.2&&Math.abs(T)<=S*1.8;if(!_&&!N)continue;const x=_?1-Math.abs(L)/(S*.55)-Math.max(0,T)/(S*8):.85-L/(S*10)-Math.abs(T)/(S*8);o.push({functionToken:g.token,numberToken:v.token,score:x})}}const l=new Map,u=new Map,m=g=>{const y=[...g].sort((p,b)=>b.score-p.score);if(y.length&&!(y.length>1&&y[0].score-y[1].score<.18))return y[0]};for(const g of r.map(({token:y})=>y)){const y=m(o.filter(p=>p.functionToken===g));y&&l.set(g,y)}for(const g of s.map(({token:y})=>y)){const y=m(o.filter(p=>p.numberToken===g));y&&u.set(g,y)}const f=[];for(const g of o){if(l.get(g.functionToken)!==g||u.get(g.numberToken)!==g)continue;const y=g.functionToken.text.trim().toUpperCase(),p=g.numberToken.text.trim().toUpperCase();f.push({tag:`${y}-${p}`,type:"Instrument",tagPrefix:y,tagSequence:p,tagSuffix:"",pageNumber:g.functionToken.location.pageNumber,sourceLocations:[g.functionToken.location,g.numberToken.location]})}return f}function vv(a,r,s,o,l,u,m){const f=Math.max(0,Math.min(1,o/r)),g=Math.max(0,Math.min(1,l/s)),y=Math.max(f,Math.min(1,u/r)),p=Math.max(g,Math.min(1,m/s));return y-f<1e-4||p-g<1e-4?null:{pageNumber:a,x:f,y:g,width:y-f,height:p-g}}function By(a,r,s){const o=[s.convertToViewportPoint(a.x,a.y),s.convertToViewportPoint(a.x+a.width,a.y),s.convertToViewportPoint(a.x,a.y+a.height),s.convertToViewportPoint(a.x+a.width,a.y+a.height)];return vv(r,s.width,s.height,Math.min(...o.map(l=>l[0]??0)),Math.min(...o.map(l=>l[1]??0)),Math.max(...o.map(l=>l[0]??0)),Math.max(...o.map(l=>l[1]??0)))}function MA(a,r,s){const o=[],l=[];for(const u of a){if(!u.text||!u.bbox)continue;const m=vv(r,s.pageWidth,s.pageHeight,s.left+u.bbox.x0,s.top+u.bbox.y0,s.left+u.bbox.x1,s.top+u.bbox.y1);m&&(l.push({text:u.text,location:m}),o.push(...Kl(u.text,r).map(f=>({...f,sourceLocations:[m]}))))}return[...o,...bv(l)]}function $A(a,r){const s=new Map;for(const o of[...a??[],...r??[]]){const l=[o.pageNumber,o.x.toFixed(4),o.y.toFixed(4),o.width.toFixed(4),o.height.toFixed(4)].join(":");!s.has(l)&&s.size<500&&s.set(l,o)}return[...s.values()]}function FA(a){let r="",s;for(const o of a){const l=o.str.replace(/\s+/g," ").trim();if(l){if(s){const u=Math.max(1,(s.fontSize+o.fontSize)/2),m=Math.abs(o.y-s.y)<=Math.max(1,u*.3),f=o.x-(s.x+s.width),g=m&&f>=-u*.5&&f<=u*.35;r+=g?"":m?" ":`
`,s.hasEOL&&!r.endsWith(`
`)&&(r+=`
`)}r+=l,s=o}}return r}function zy(a,r=1700,s=120){if(a<=r+s)return[0];const o=r-s,l=[];for(let u=0;u<a;u+=o){const m=a-(u+r);if(m>0&&m<=s&&(u=a-r),l.push(u),u+r>=a)break}return l}function Kl(a,r){const s=new Map,o=a.toUpperCase();for(const l of o.matchAll(kA)){const u=l[0].replace(/[–\s]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),m=u.split("-").filter(Boolean),f=u.match(/^([A-Z]{1,8})-(\d{1,6})(.*)$/);if(!f||u.length<3||m.length>6)continue;const g=f[1],y=/^OPC$/.test(g)?"OPC":OA.test(g)?"Valve":yv.test(g)?"Instrument":m.length>=4||/^(?:L|LINE|PIPE)$/.test(g)?"Pipe Run":"Equipment",p=Math.max(0,(l.index??0)-180),b=Math.min(o.length,(l.index??0)+l[0].length+180),v=o.slice(p,b),w=v.match(/\b(?:NOMINAL\s*(?:DIA(?:METER)?|SIZE)|NPS|DN)\s*[:#=-]?\s*((?:(?:NPS|DN)\s*)?\d{1,3}(?:\s*\/\s*\d{1,2})?(?:\.\d+)?\s*(?:MM|IN(?:CH)?)?["”]?)/i)?.[1]??"",R=v.match(/\b(?:PIPING|PIPE)\s*(?:MATERIAL|MATL)\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})/i)?.[1]??"",D=v.match(/\b(?:DESIGN\s+FLOW|FLOW(?:\s+RATE)?)\s*[:=]?\s*([\d.,]+\s*(?:KG\/H|M3\/H|NM3\/H|T\/H|L\/S|M3\/D|GPM|M\/S)?)/i)?.[1]??"",S=v.match(/\b(?:HEAT\s+TRACING|HEAT\s+TRACE)\s*[:=]?\s*(YES|NO|ELECTRIC|STEAM|NONE|N\/A)\b/i)?.[1]??"",T=v.match(/\bINSULATION\s*[:=]?\s*([A-Z0-9][A-Z0-9._/-]{0,12})/i)?.[1]??"",_=f[3].split("-").filter(Boolean).at(-1)??"",N=y==="Pipe Run"&&/[A-Z]/i.test(_)&&/\d/.test(_)?_:"",x=v.match(qA)?.[1]??N,O=`${y}:${u.toLowerCase()}`;s.has(O)||s.set(O,{tag:u,type:y,tagPrefix:g,tagSequence:f[2],tagSuffix:f[3].replace(/^-/,""),pageNumber:r,nominalDiameter:w.replace(/\s+/g," ").trim(),pipingMaterial:R,lineSpec:x,flow:D,heatTracing:S,insulation:T})}for(const l of o.matchAll(jA)){const u=l[1].replace(/\s+/g,"").toUpperCase(),m=`Line Spec:${u.toLowerCase()}`;s.has(m)||s.set(m,{tag:u,type:"Line Spec",tagPrefix:"LINE SPEC",tagSequence:u,tagSuffix:"",lineSpec:u,pageNumber:r})}return[...s.values()]}const UA=/^(?:(?:GENERAL|PROCESS|DESIGN|SAFETY|OPERATING|CONSTRUCTION)\s+)?NOTES?\s*[:.-]?\s*(.*)$/i,BA=/^(?:LEGENDS?|ABBREVIATIONS?|SYMBOLS?|REFERENCES?|REVISION(?:S)?|DRAWING\s+(?:TITLE|NO|NUMBER)|PROJECT|CLIENT|SCALE|TITLE\s*BLOCK|EQUIPMENT\s+LIST|LINE\s+LIST)\b/i,zA=/^(?:(?:NOTE\s*)?\d{1,3}\s*[.)-]\s+|[A-Z]\s*[.)]\s+).+/i,YA=/^(?:GENERAL\s+)?NOTE(?:\s+\d+)?\s*[:#-]\s*.+/i;function HA(a){const r=[];for(const s of a){const o=[{text:s.searchableText,label:"PDF text"},...s.ocrTiles.map(f=>({text:f,label:"OCR text"}))],l=new Set,u=[];for(const f of o){let g=!1,y="";const p=()=>{const b=y.replace(/\s+/g," ").trim();if(b.length>=8){const v=b.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();v&&!l.has(v)&&(l.add(v),u.push({text:b,label:f.label}))}y=""};for(const b of f.text.replace(/\r/g,`
`).split(`
`)){const v=b.replace(/\s+/g," ").trim();if(!v)continue;const w=v.match(UA);if(w){p(),g=!0,w[1]&&(y=w[1].trim());continue}if(g&&BA.test(v)){p(),g=!1;continue}if(YA.test(v)){p(),y=v,g=!0;continue}if(zA.test(v)){const R=v.length>=36&&v.split(/\s+/).length>=7;g||R?(p(),y=v,g=!0):p();continue}g?y=y?`${y} ${v}`:v:p()}p()}let m=0;for(const f of u){const g=[];for(let y=0;y<f.text.length;){let p=Math.min(y+1500,f.text.length);if(p<f.text.length){const b=f.text.lastIndexOf(" ",p);b>y+700&&(p=b)}g.push(f.text.slice(y,p)),y=p}for(const y of g){const p=y.trim();p&&(m+=1,r.push({tag:`NOTE-P${s.pageNumber}-${m}`,type:"Item Note",tagPrefix:"NOTE",tagSequence:String(m),tagSuffix:`P${s.pageNumber}`,pageNumber:s.pageNumber,description:`${f.label} note — review against source: ${p}`}))}}}return r}function Gu(a,r){const s=new Map(a.map(o=>[`${o.type}:${o.tag.toLowerCase()}`,{...o}]));for(const o of r){const l=`${o.type}:${o.tag.toLowerCase()}`,u=s.get(l);if(!u){s.set(l,{...o});continue}u.sourceLocations=$A(u.sourceLocations,o.sourceLocations);for(const m of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])!u[m]&&o[m]&&(u[m]=o[m])}return[...s.values()]}async function VA(a,r,s=()=>!0){const[o,l]=await Promise.all([pn(()=>import("./pdf-TYrZqVzP.js"),[]),pn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);o.GlobalWorkerOptions.workerSrc=l.default;const u=o.getDocument({data:new Uint8Array(a.slice(0))}),m=await u.promise;let f=null;const g=new Map,y=[];let p=0,b=1,v="PDF text";try{for(let w=1;w<=m.numPages;w++){if(b=w,v="PDF text",!s())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const R=await m.getPage(w),D=await R.getTextContent(),S=R.getViewport({scale:1}),T=D.items.flatMap(C=>{if(!("str"in C)||typeof C.str!="string"||!C.str||!("transform"in C)||!Array.isArray(C.transform))return[];const P=C.transform;return[{str:C.str,x:P[4]??0,y:P[5]??0,width:"width"in C&&typeof C.width=="number"?C.width:0,height:"height"in C&&typeof C.height=="number"?C.height:0,fontSize:Math.hypot(P[0]??0,P[1]??0)||10,hasEOL:"hasEOL"in C&&C.hasEOL===!0}]}),L=FA(T),_=[];let N=Kl(L,w);const x=T.flatMap(C=>{const P=By({...C,height:C.height||C.fontSize},w,S);return P?Kl(C.str,w).map(k=>({...k,sourceLocations:[P]})):[]}),O=T.flatMap(C=>{const P=By({...C,height:C.height||C.fontSize},w,S);return P?[{text:C.str,location:P}]:[]});if(N=Gu(N,[...x,...bv(O)]),L.replace(/\s/g,"").length<800||N.length<20){if(r?.(w,m.numPages,"OCR"),!f){v="OCR startup";const{createWorker:pe,PSM:oe}=await pn(async()=>{const{createWorker:ne,PSM:Y}=await import("./index-CUO-o09j.js").then(Z=>Z.i);return{createWorker:ne,PSM:Y}},__vite__mapDeps([0,1]));f=await pe("eng",1,{workerPath:"https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js",corePath:"https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0",langPath:"https://tessdata.projectnaptha.com/4.0.0"}),await f.setParameters({tessedit_pageseg_mode:oe.SPARSE_TEXT,preserve_interword_spaces:"1"})}const C=R.getViewport({scale:1});v="page image";const P=Math.min(3.5,3200/Math.max(C.width,C.height)),k=R.getViewport({scale:P}),te=document.createElement("canvas"),X=document.createElement("canvas");te.width=Math.ceil(k.width),te.height=Math.ceil(k.height);const ae=te.getContext("2d",{willReadFrequently:!1});if(!ae)throw new Error("This browser cannot prepare a page image for local OCR.");try{await R.render({canvas:te,canvasContext:ae,viewport:k}).promise;const pe=1700,oe=120,ne=[],Y=zy(te.width,pe,oe),Z=zy(te.height,pe,oe);for(const ge of Z)for(const xe of Y){if(!s())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const j=Math.min(te.width<=pe+oe?te.width:pe,te.width-xe),ee=Math.min(te.height<=pe+oe?te.height:pe,te.height-ge);X.width=j,X.height=ee;const B=X.getContext("2d",{willReadFrequently:!1});if(!B)throw new Error("This browser cannot prepare a page image for local OCR.");B.drawImage(te,xe,ge,j,ee,0,0,j,ee),v="OCR reading";const V=await f.recognize(X);_.push(V.data.text),ne.push(...Kl(V.data.text,w)),ne.push(...MA(V.data.words??[],w,{left:xe,top:ge,pageWidth:te.width,pageHeight:te.height}))}p+=1,N=Gu(N,ne)}finally{te.width=0,te.height=0,X.width=0,X.height=0}}else r?.(w,m.numPages,"PDF text");for(const C of N){const P=`${C.type}:${C.tag.toLowerCase()}`,k=g.get(P);g.set(P,k?Gu([k],[C])[0]:C)}y.push({pageNumber:w,searchableText:L,ocrTiles:_}),R.cleanup()}return{candidates:[...g.values()],pages:m.numPages,ocrPages:p,pageText:y}}catch(w){throw s()?new Wl(b,v,w):w}finally{await f?.terminate().catch(()=>{}),await u.destroy().catch(()=>{})}}const Ev=["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef","placementDrawingRef","nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description","notes","sourcePage","reviewStatus"],Xn=[...Ev,"stableId"],wv=/^[0-9A-F]{32}$/,GA=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,XA=["plantGroup","fluidService","nominalDiameter","pipingMaterial","lineSpec","insulation","heatTracing","groupStatus"],WA=["","Start","Continue","Branch","Merge","End-of-Group"];function xv(){return crypto.randomUUID().replaceAll("-","").toUpperCase()}function Xp(a){const r=a.toUpperCase();if(wv.test(r))return r;if(GA.test(a))return r.replaceAll("-","");throw new Error("A Stable ID must contain exactly 32 letters or numbers (A–F, 0–9).")}function Sn(a,r){return r==="stableId"?a.id:a[r]}function KA(a,r){const s=a.placementDrawingRef.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase();return s?[r.id,r.name].map(l=>l.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase()).includes(s)?"current":"another":"available"}const Pt={itemTag:"Item Tag",tagPrefix:"Tag Prefix",tagSequence:"Tag Sequence",tagSuffix:"Tag Suffix",equipmentClass:"Equipment Class",equipmentType:"Equipment Type",equipmentName:"Equipment Name",drawingRef:"Source Drawing / Page",placementDrawingRef:"Placed on Drawing",nominalDiameter:"Nominal Diameter",plantGroup:"Plant Group",fluidService:"Fluid / Service",pipingMaterial:"Piping Material Class",lineSpec:"Line Spec",flow:"Flow",flowDirection:"Flow Direction",heatTracing:"Heat Tracing",insulation:"Insulation",fromTag:"From",toTag:"To",groupStatus:"Group Status",opcDrawing:"OPC Drawing",connection:"Connection",description:"Description",notes:"Notes",sourcePage:"Source page",reviewStatus:"Review status",stableId:"Stable ID"},nc=Ev,Vs={itemTag:"The tag printed beside the equipment, line, valve, or instrument. A repeated Pipe Run tag needs different line data.",tagPrefix:"The letter code at the start of the tag.",tagSequence:"The main number in the tag.",tagSuffix:"Extra letters or numbers after the main tag number.",equipmentClass:"The approved class or family for this equipment.",equipmentType:"What the equipment is, such as a pump or vessel, when the drawing states it.",equipmentName:"The equipment name or service, only when the source clearly labels it.",drawingRef:"The source drawing or PDF page where this record came from.",placementDrawingRef:"The CAD drawing that contains this object. Blank means available or not placed. This is a reference only; it does not place or move CAD entities.",nominalDiameter:"The stated pipe or nozzle size, such as DN50 or 2 inch.",plantGroup:"The plant, unit, or area group, if stated.",fluidService:"The stated fluid or process service for this line.",pipingMaterial:"The approved piping material class or code.",lineSpec:"The piping line class/specification code. It is separate from the pipe run tag.",flow:"The stated flow value or direction. A line arrow alone is not converted to a value.",flowDirection:"The confirmed upstream/downstream flow direction.",heatTracing:"The stated heat-tracing requirement or type.",insulation:"The stated insulation requirement or code.",fromTag:"The connected source tag or point shown for this pipe run.",toTag:"The connected destination tag or point shown for this pipe run.",groupStatus:"Start, Continue, Branch, Merge, or End-of-Group for the pipe run.",opcDrawing:"The linked off-page connector drawing number, if shown.",connection:"A stated connection or connected item; line geometry is not inferred here.",description:"A short object description from the source. Blank means no clear value was found.",notes:"Drawing notes or additional comments associated with this record.",sourcePage:"The page in the original PDF where this candidate was found.",reviewStatus:"Needs review means check the tag and fields before using them.",stableId:"Permanent object identity. It stays the same when the tag, drawing, size, or geometry changes."},Ei=["Equipment","Equipment Component","Equipment Heat Transfer","Equipment Mechanical","Equipment Other","Equipment Vessel","Hydraulic Circuit","Instrument","Instrument Loop","Item Note","Line Spec","Nozzle","OPC","Package","Pipe Run","Valve"],rc=a=>`pid-mapping-studio:engineering-workspace:v2:${a}`;function Sv(a,r){if(!Array.isArray(a))return Np(a);const s=a.map(o=>!o||typeof o!="object"||!Array.isArray(o.rows)?o:{...o,rows:o.rows.map(l=>{if(!l||typeof l!="object")return l;const u=typeof l.id=="string"?l.id:"";let m;try{m=Xp(u)}catch{m=xv()}m!==l.id&&r?.();const f=typeof l.description=="string"?l.description:"",g=typeof l.notes=="string",y=/^(?:PDF text|OCR text) note — review against source:\s*/iu,p=g?l.notes:l.type==="Item Note"?f.replace(y,""):"",b=!g&&l.type==="Item Note"&&f?y.test(f)?"Drawing note extracted from PDF; check the source page.":"":f;return(!g||b!==f)&&r?.(),{...l,id:m,description:b,notes:p,sourcePage:typeof l.sourcePage=="string"?l.sourcePage:"",placementDrawingRef:typeof l.placementDrawingRef=="string"?l.placementDrawingRef:"",lineSpec:typeof l.lineSpec=="string"?l.lineSpec:"",plantGroup:typeof l.plantGroup=="string"?l.plantGroup:"",fluidService:typeof l.fluidService=="string"?l.fluidService:"",flowDirection:typeof l.flowDirection=="string"?l.flowDirection:"",fromTag:typeof l.fromTag=="string"?l.fromTag:"",toTag:typeof l.toTag=="string"?l.toTag:"",groupStatus:typeof l.groupStatus=="string"?l.groupStatus:"",...l.sourceLocations===void 0?{}:{sourceLocations:l.sourceLocations},reviewStatus:l.reviewStatus==="Needs review"||l.reviewStatus==="Reviewed"?l.reviewStatus:"Manual"}})});return Np(s)}function Np(a){if(!Array.isArray(a)||a.length>500)throw new Error("Invalid drawing catalog. Keep a backup and do not overwrite saved data.");const r=new Set,s=new Set;let o=0;for(const l of a){if(!l||typeof l!="object"||typeof l.id!="string"||typeof l.name!="string"||!l.name.trim()||l.name.length>160||typeof l.revision!="string"||l.revision.length>80||!Array.isArray(l.rows)||r.has(l.id))throw new Error("The drawing catalog contains an invalid or duplicate drawing.");r.add(l.id);const u=new Map;for(const m of l.rows){if(m?.type==="Pipe Run"&&!WA.includes(m.groupStatus))throw new Error("Pipe Run group status must be Start, Continue, Branch, Merge, or End-of-Group.");if(!m||typeof m!="object"||typeof m.id!="string"||!wv.test(m.id)||s.has(m.id)||!Ei.includes(m.type)||nc.some(y=>typeof m[y]!="string"||m[y].length>2e3)||!["Manual","Needs review","Reviewed"].includes(m.reviewStatus)||m.sourcePdfId!==void 0&&typeof m.sourcePdfId!="string"||m.sourceLocations!==void 0&&(!Array.isArray(m.sourceLocations)||m.sourceLocations.length>500||m.sourceLocations.some(y=>{if(!y||typeof y!="object")return!0;const p=y;return!Number.isInteger(p.pageNumber)||p.pageNumber<1||!["x","y","width","height"].every(b=>typeof p[b]=="number"&&Number.isFinite(p[b]))||p.x<0||p.y<0||p.width<=0||p.height<=0||p.x>1||p.y>1||p.x+p.width>1.02||p.y+p.height>1.02}))||!m.itemTag.trim())throw new Error("Each record needs a valid Stable ID, object type, and text fields.");const f=m.itemTag.trim().toLowerCase(),g=u.get(f)??[];if(g.length&&(m.type!=="Pipe Run"||g.some(y=>y.type!=="Pipe Run"||!XA.some(p=>y[p]!==m[p]))))throw new Error("This tag is already used. Repeated Pipe Run tags need different line-defining data.");if(typeof m.x!="number"||typeof m.y!="number"||!Number.isFinite(m.x)||!Number.isFinite(m.y))throw new Error("A record contains invalid coordinates.");u.set(f,[...g,m]),s.add(m.id),o+=1}}if(o>2e4)throw new Error("This local workspace supports up to 20,000 engineering records.");return a}function wi(a){const r=window.localStorage.getItem(rc(a));if(!r)return[];let s=!1;const o=Sv(JSON.parse(r),()=>{s=!0});if(s)try{window.localStorage.setItem(rc(a),JSON.stringify(o))}catch{throw new Error("Saved records were read, but the data-format update could not be saved because browser storage is full. The original saved data was not overwritten; download a backup before freeing space.")}return o}function Ks(a){return window.localStorage.getItem(rc(a))}function Cp(a,r,s){if(Np(r),Ks(a)!==s)throw new Error("This workspace changed in another tab. Reload before editing to avoid overwriting its records.");const o=JSON.stringify(r);return window.localStorage.setItem(rc(a),o),o}function Wp(a,r,s){return{...Object.fromEntries(nc.map(o=>[o,""])),id:xv(),type:a,itemTag:r.trim(),drawingRef:s,reviewStatus:"Manual",x:0,y:0}}function ZA(a,r){return JSON.stringify({version:5,discipline:a,drawings:r},null,2)}function QA(a,r){const s=JSON.parse(a);if(![2,3,4,5].includes(s?.version)||s?.discipline!==r)throw new Error(`Choose a ${r.toUpperCase()} workspace backup. PFD and P&ID backups stay separate.`);return Sv(s.drawings)}function JA(a,r){const s=new Map;for(const o of[...a??[],...r??[]]){const l=[o.pageNumber,o.x.toFixed(4),o.y.toFixed(4),o.width.toFixed(4),o.height.toFixed(4)].join(":");!s.has(l)&&s.size<500&&s.set(l,o)}return[...s.values()]}function Yy(a,r){const s=Wp(a.type,a.tag,`${r.alias} · Page ${a.pageNumber}`);s.tagPrefix=a.tagPrefix??"",s.tagSequence=a.tagSequence??"",s.tagSuffix=a.tagSuffix??"";for(const o of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])s[o]=a[o]??"";return s.sourcePage=String(a.pageNumber),s.sourcePdfId=r.id,s.sourceLocations=a.sourceLocations?.slice(0,500),s.reviewStatus="Needs review",a.type==="Item Note"?(s.notes=(a.description??"").replace(/^(?:PDF text|OCR text) note — review against source:\s*/iu,""),s.description="Drawing note extracted from PDF; check the source page."):s.description=a.description??"Tag candidate found in the PDF. Confirm the object type and details before using it.",s}function e2(a,r,s){const o=wi(a),l=o.find(w=>w.sourcePdfId===r.id);if(l){const w=new Map(s.map(L=>[L.tag.trim().toLowerCase(),L])),R=new Set(l.rows.map(L=>L.itemTag.trim().toLowerCase()));let D=!1;const S=l.rows.map(L=>{const _=w.get(L.itemTag.trim().toLowerCase());if(!_)return L;const N=JA(L.sourceLocations,_.sourceLocations),x=L.sourcePage||String(_.pageNumber);return N.length===(L.sourceLocations?.length??0)&&x===L.sourcePage?L:(D=!0,{...L,sourcePage:x,sourceLocations:N})}),T=s.flatMap(L=>{const _=L.tag.trim().toLowerCase();return!_||R.has(_)?[]:(R.add(_),D=!0,[Yy(L,r)])});if(D){const L=o.map(_=>_.id===l.id?{..._,rows:[...S,...T]}:_);Cp(a,L,Ks(a))}return{drawingId:l.id,recordCount:S.length+T.length}}const u=new Set(o.map(w=>w.name.toLowerCase())),m=`${r.alias} · Extracted data`;let f=m,g=2;for(;u.has(f.toLowerCase());)f=`${m} (${g++})`;const y=new Set,p=s.flatMap(w=>{const R=w.tag.trim().toLowerCase();return!R||y.has(R)?[]:(y.add(R),[Yy(w,r)])}),b={id:crypto.randomUUID(),name:f,revision:"Local PDF extraction · review required",sourcePdfId:r.id,sourceAlias:r.alias,rows:p},v=Ks(a);return Cp(a,[...o,b],v),{drawingId:b.id,recordCount:p.length}}function Bl(a,r,s){const o=URL.createObjectURL(new Blob([r],{type:s})),l=document.createElement("a");l.href=o,l.download=a,l.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}function t2(a){return Tv(["Object type",...Xn.map(r=>Pt[r])],a.map(r=>[r.type,...Xn.map(s=>Sn(r,s))]))}function Tv(a,r){const s=o=>`"${(/^[\s]*[=+\-@\t\r]/.test(o)?`'${o}`:o).replaceAll('"','""')}"`;return"\uFEFF"+[a,...r].map(o=>o.map(l=>s(String(l))).join(",")).join(`\r
`)}function a2(a,r){const s=[];let o=[],l="",u=!1;const m=a.replace(/^\uFEFF/,"");for(let v=0;v<m.length;v++){const w=m[v];if(w==='"')if(u&&m[v+1]==='"')l+='"',v++;else{if(!u&&l!=="")throw new Error("Invalid CSV quoting.");u=!u}else!u&&w===","?(o.push(l),l=""):!u&&(w===`
`||w==="\r")?(o.push(l),o.some(R=>R.trim())&&s.push(o),o=[],l="",w==="\r"&&m[v+1]===`
`&&v++):l+=w}if(u)throw new Error("The CSV has an unclosed quoted cell.");o.push(l),o.some(v=>v.trim())&&s.push(o);const f=s.shift()?.map(v=>v.trim().toLowerCase())??[],g=f.findIndex(v=>v==="object type"||v==="type"),y=nc.map(v=>f.findIndex(w=>w===v.toLowerCase()||w===Pt[v].toLowerCase())),p=f.findIndex(v=>v==="stableid"||v===Pt.stableId.toLowerCase());if(g<0||y[0]<0)throw new Error("CSV needs Object type and Item Tag columns. Download the template first.");if(!s.length)throw new Error("The CSV contains no records.");if(s.length>2e4)throw new Error("Import at most 20,000 records.");const b=new Set;return s.map((v,w)=>{if(v.length!==f.length)throw new Error(`CSV row ${w+2} has the wrong number of columns.`);const R=Ei.find(S=>S.toLowerCase()===v[g]?.trim().toLowerCase());if(!R)throw new Error(`CSV row ${w+2} has an unsupported object type.`);const D=Wp(R,v[y[0]]??"",r);if(p>=0&&v[p]?.trim())try{D.id=Xp(v[p].trim())}catch{throw new Error(`CSV row ${w+2} has an invalid Stable ID.`)}if(b.has(D.id))throw new Error(`CSV row ${w+2} repeats a Stable ID.`);return b.add(D.id),nc.forEach((S,T)=>{if(y[T]<0)return;const L=v[y[T]].trim();S==="reviewStatus"?D.reviewStatus=["Needs review","Reviewed","Manual"].includes(L)?L:"Manual":D[S]=L}),D.drawingRef||(D.drawingRef=r),D})}function Xu(a){const r=a.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);for(const s of[/^(?:drawing|dwg|drg)\.?\s*(?:number|no\.?|#)\s*[:：-]?\s*(.*)$/i,/^(?:drawing\s*(?:title|name)|title)\s*[:：-]?\s*(.*)$/i]){const o=new Set;if(r.forEach((l,u)=>{const m=l.match(s);if(!m)return;const f=(m[1]||r[u+1]||"").trim();f&&f.length<=120&&!/^(?:rev(?:ision)?|scale|sheet|date|drawn|checked|drawing|dwg|title)\b/i.test(f)&&o.add(f)}),o.size===1)return[...o][0];if(o.size>1)return null}return null}function n2(a){const r=a.normalize("NFKC").replace(/[<>:"/\\|?*\u0000-\u001f]/g,"_").replace(/\s+/g," ").replace(/[. ]+$/g,"").trim().slice(0,120).replace(/[. ]+$/g,"");return/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(r)?`_${r}`:r}function r2(a){const r=[],s=/^(?:(?:drawing|dwg|drg)\.?\s*(?:number|no\.?|#|title|name)|title)\s*[:：-]?\s*$/i,o=l=>l.match(/\b(?:[A-Z]{1,6}\d{0,4}[-_/][A-Z0-9]+(?:[-_/][A-Z0-9]+)*|\d{3,}[-_/][A-Z0-9]+(?:[-_/][A-Z0-9]+)*)\b/i)?.[0]??null;for(const l of a){if(Xu(l.text)){r.push(l.text);continue}if(!s.test(l.text.trim()))continue;const m=Math.max(l.height,1),f=(p,b)=>{if(p===l||!p.text.trim()||s.test(p.text.trim()))return!1;const v=p.x-(l.x+l.width),w=l.y-p.y;return b?Math.abs(p.y-l.y)<=m*.6&&v>=-m&&v<=m*10:w>m*.6&&w<=m*3&&Math.abs(p.x-l.x)<=m*3},g=a.filter(p=>f(p,!0)).sort((p,b)=>p.x-b.x);if(g.length){const p=`${l.text}
${g.map(R=>R.text).join(" ")}`,b=Xu(p),v=b&&o(b),w=a.filter(R=>f(R,!1)&&!/\b(?:last\s+saved|date|revision|rev)\b/i.test(R.text)).map(R=>o(R.text)).some(R=>R&&v&&R.toUpperCase()!==v.toUpperCase());b&&!w&&r.push(p);continue}const y=a.filter(p=>f(p,!1));y.length===1&&r.push(`${l.text}
${y[0].text}`)}return Xu(r.join(`
`))}function Av(a){const r=new Set(["project_title_block"]);return a.map((s,o)=>Array.from({length:s.pageCount},(l,u)=>{const m=`doc-${String(o+1).padStart(2,"0")}_page-${String(u+1).padStart(3,"0")}`;let f=n2(s.pageDrawingNames?.[u]??"")||`drawing-batch_${m}`;/_working-\d+$/i.test(f)&&(f=`sheet_${f}`);let g=f,y=0;for(;r.has(g.toLowerCase());)g=`${f}_${m}${y?`_${y}`:""}`,y++;return r.add(g.toLowerCase()),`${g}.dwg`}))}const ns="P2DWG-RUNNER-2026.11.06.20",s2=`autocad-runner-${ns}-with-source-pdfs.zip`;function ai(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function o2(a,r=!1,s="",o=[]){const l=Av(a),u=a.map((f,g)=>`("${String(f.documentNumber).padStart(2,"0")}" ${ai(f.sourceFile)} ${ai(f.sourceId)} ${ai(f.sourceName)} ${ai(f.sha256.toLowerCase())} ${f.pageCount} (${l[g].map(ai).join(" ")}))`).join(`
  `),m=o.map(f=>`("${String(f.documentNumber).padStart(2,"0")}" ${f.pageNumber} ${f.scaleFactor} "${f.method}" ${f.pageWidthMm} ${f.pageHeightMm} ${f.targetWidthMm} ${f.targetHeightMm})`).join(`
  `);return`; Single working drawing PDF batch runner.
; Each approved page is saved to a separate, never-overwritten DWG.
(vl-load-com)
(setq *p2dwg-project-title-block-enabled* ${r?"T":"nil"})
(setq *p2dwg-batch-run-id* "${s}")
(setq *p2dwg-runner-build-version* "${ns}")
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
`}const i2=[{field:"sourceFile",xdataIndex:1,global:"*p2dwg-source-alias*"},{field:"pageNumber",xdataIndex:2,global:"*p2dwg-source-page*"},{field:"jobId",xdataIndex:3,global:"*p2dwg-job-id*"},{field:"sourceId",xdataIndex:4,global:"*p2dwg-source-id*"},{field:"sourceSha256",xdataIndex:5,global:"*p2dwg-source-hash*"},{field:"sourceName",xdataIndex:6,global:"*p2dwg-source-name*"}];function l2(a,r){const s=String(a).padStart(2,"0"),o=`p2dwg${s}`,l=i2.map(({xdataIndex:u,global:m})=>`(= (cdr (nth ${u} app-data)) ${m})`).join(`
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
`}function c2(a){return`
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
`}const Rp="f_Pipe_Pri",Dv=240,d2="f_Inst",u2=115;function p2(a){return[]}function f2(a,r=[]){return`
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
  (setq target-layer "${d2}")
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
        "|COLOR=${u2}|SOURCE_LINETYPE=iComputerLink"
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
  (setq target-layer "${Rp}")
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
  (setq target "${Rp}" spec nil mapped 0 unresolved 0 index 0)
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
${c2(a)}
`}const Hy=25.4/72,h2=1e-6,g2=1e3,un={width:841,height:594};function m2(a,r){if(!Number.isFinite(a.width)||!Number.isFinite(a.height)||a.width<1||a.height<1||a.width>1e5||a.height>1e5)return null;const s=a.width*Hy,o=a.height*Hy,l=un.width/(a.width/72),u=un.height/(a.height/72),m=Math.min(l,u);return!Number.isFinite(m)||m<h2||m>g2?null:{scaleFactor:m,method:"FIXED_SHEET_SIZE",pageWidthMm:s,pageHeightMm:o,targetWidthMm:un.width,targetHeightMm:un.height}}function y2(a,r){const s=(p,b=0,v=0)=>({valid:!1,reason:p,outputWidthMm:b,outputHeightMm:v});if(!Number.isFinite(r.scaleFactor)||r.scaleFactor<=0)return s("INVALID_SCALE_FACTOR");const o=a.width/72*r.scaleFactor,l=a.height/72*r.scaleFactor;if(!Number.isFinite(o)||!Number.isFinite(l)||o<=0||l<=0)return s("INVALID_SCALED_PAGE_EXTENTS",o,l);const u=un.width,m=un.height,f=.005;if(o>u*(1+f)||l>m*(1+f))return s("SCALED_PAGE_EXCEEDS_FIXED_SHEET",o,l);const g=Math.abs(o-u)/u<=f,y=Math.abs(l-m)/m<=f;return!g&&!y?s("SCALED_PAGE_DOES_NOT_REACH_SHEET_EDGE",o,l):r.targetWidthMm!==u||r.targetHeightMm!==m?s("PLAN_TARGET_DOES_NOT_MATCH_FIXED_SHEET",o,l):{valid:!0,reason:"FIXED_SHEET_FIT_VERIFIED",outputWidthMm:o,outputHeightMm:l}}const b2=["RAW","CANDIDATE","MATCHED","CONFIRMED","UNMATCHED","NEEDS_REVIEW"];function v2(a){return`
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
`}function E2(a){return`
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
`}function w2(a){return`
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
`}function x2(a){return`
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
`}function S2(a){return`
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
`}function T2(a){return["PROJECT_TITLE_BLOCK_SCOPE_V1",`workspaceType=${a.workspaceType}`,`projectId=${a.groupId}`,`titleBlockId=${a.titleBlockId}`,`titleBlockPath=${a.titleBlockPath}`,`xrefName=${a.xrefName}`,`expectedSizeMm=${un.width}x${un.height}`,`version=${a.version}`,""].join(`
`)}function Wn(a,r){return a.match(new RegExp(`(?:^|;)${r}=([^;]*)`,"i"))?.[1]?.trim()??null}function A2(a){const r=a.flatMap(o=>{if(o.category!=="textStyle")return[];const m=(Wn(o.detail,"font")?.split(/[\\/]/).pop()?.replace(/\.(ttf|shx|otf)$/i,"")??"").replace(/[\s_-]/g,"").toUpperCase(),f=Wn(o.detail,"height"),g=Wn(o.detail,"width"),y=Wn(o.detail,"oblique");if(!["ARIALN","ARIALNARROW"].includes(m)||f===null||g===null||y===null||Number(f)!==0)return[];const p=Number(g),b=Number(y);return!Number.isFinite(p)||p<=0||!Number.isFinite(b)?[]:[{name:o.name.trim(),signature:`${m}|${p}|${b}|${Wn(o.detail,"bigfont")??""}`}]});if(r.length===0)return null;if(new Set(r.map(o=>o.signature)).size>1)throw new Error("Legends Library has conflicting variable-height Arial Narrow text styles. Keep one approved general style or resolve the conflicting standards before downloading the runner.");return r.map(o=>o.name).sort((o,l)=>o.localeCompare(l))[0]}function D2(a){return a.filter(r=>{if(r.category!=="textStyle")return!1;const s=Wn(r.detail,"font")??"",o=Wn(r.detail,"bigfont")??"";return/\.shx$/i.test(s)||/\.shx$/i.test(o)})}function N2(a){for(const r of a)if(r.category==="textStyle"){if(!Wn(r.detail,"font"))throw new Error(`Approved text style "${r.name}" has no font.`);for(const s of["height","width","oblique"]){const o=Wn(r.detail,s);if(o===null)continue;const l=Number(o);if(!Number.isFinite(l)||s==="height"&&l<0||s==="width"&&l<=0)throw new Error(`Approved text style "${r.name}" has an invalid ${s}.`)}}}const zl={name:"P2DWG_ARIAL_NARROW_GLOBAL",category:"textStyle",detail:"font=arialn.ttf;height=0;width=1;oblique=0;bigfont=",discipline:"Shared"};function C2(a,r=!1){const s=A2(a),o=D2(a),l=[...a,...o.filter(u=>!a.some(m=>m.category==="textStyle"&&m.name.toUpperCase()===u.name.toUpperCase()))];if(s)return{standards:l,styleName:s,source:"LEGENDS_LIBRARY"};if(r)throw new Error("LEGENDS_LIBRARY_INCOMPLETE: the active Legends Library has no reviewed variable-height Arial Narrow style. The runner will not replace its text standards with a generic style.");if(a.some(u=>u.category==="textStyle"&&u.name.trim().toUpperCase()===zl.name.toUpperCase()))throw new Error(`Legends Library text style "${zl.name}" conflicts with the fixed Arial Narrow default.`);return{standards:[...l,zl],styleName:zl.name,source:"GLOBAL_USER_APPROVED_DEFAULT"}}function R2(a){const r=a.flatMap(l=>{if(l.category!=="layer")return[];const u=l.name.trim(),m=u.toUpperCase();if(!u||m==="0"||/^(PDF|P2DWG)|TITLE|LOGO|BORDER|FRAME/.test(m))return[];const f=m.replace(/[^A-Z0-9]/g,""),g=f==="FGENTEXT"?100:f==="GENTEXT"?90:/TEXT|ANNOT|NOTE/.test(m)?50:0;return g?[{name:u,priority:g}]:[]});if(r.length===0)return null;const s=Math.max(...r.map(l=>l.priority)),o=r.filter(l=>l.priority===s);if(o.length>1)throw new Error(`Legends Library has multiple equally suitable general text layers: ${o.map(l=>l.name).join(", ")}. Resolve the default text layer before downloading the runner.`);return o[0].name}function _2(a,r,s,o,l=[],u=[],m=[],f=!1){const g=String(a).padStart(2,"0"),y=`PDF2DWG${g}`,p=`p2dwg${g}`,b=b2.map(ot).join(" ");N2(o);const v=C2(o,f),w=v.standards,R=R2(o),D=s.map(k=>`(${ot(k.fallbackCategory.toLowerCase())} ${ot(k.blockName)} ${ot(k.sourcePath)} ${ot(k.targetLayer)} ${k.wipeoutBoundary?_S(k.wipeoutBoundary):"nil"} ${ot(k.blockAssetId)} (${(k.requiredShapeFonts??[]).map(ot).join(" ")}) ${k.autoPlacementSignature?`(${k.autoPlacementSignature.points.map(te=>`(${Yl(te[0])} ${Yl(te[1])})`).join(" ")})`:"nil"} ${k.autoPlacementSignature?`(("PATH" . ${k.autoPlacementSignature.primitiveClasses.PATH}) ("CURVE" . ${k.autoPlacementSignature.primitiveClasses.CURVE}))`:"nil"} ${k.autoPlacementSignature?Yl(k.autoPlacementSignature.aspectRatio):"nil"})`).join(`
    `),S=o.filter(k=>k.category==="layer").map(k=>{const te=k.detail.match(/(?:^|;)color=(\d+)/i)?.[1],X=k.detail.match(/(?:^|;)lineweight=(-?\d+)/i)?.[1],ae=k.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!te||!X||!ae)throw new Error(`Approved layer "${k.name}" is missing its Legends color, lineweight, or linetype. Re-extract the layer instead of substituting defaults.`);const pe=Number(te),oe=Number(X),ne=[-3,-2,-1].includes(oe)||Number.isInteger(oe)&&oe>=0&&oe<=211;if(!Number.isInteger(pe)||pe<1||pe>255||!ne)throw new Error(`Approved layer "${k.name}" has invalid color or lineweight values.`);return`(${ot(k.name)} ${pe} ${oe} ${ot(ae)})`}).join(`
    `);o.filter(k=>k.category==="layer").map(k=>k.name.trim()).filter(Boolean);const T=p2(),L=w.filter(k=>k.category==="textStyle").map(k=>{const te=(pe,oe)=>k.detail.match(new RegExp(`(?:^|;)${pe}=([^;]*)`,"i"))?.[1]??oe,X=(pe,oe)=>{const ne=Number(te(pe,String(oe)));if(!Number.isFinite(ne)||pe==="height"&&ne<0||pe==="width"&&ne<=0)throw new Error(`Approved text style "${k.name}" has an invalid ${pe}. Re-review the supplied CAD text format.`);return String(ne)},ae=te("font","").trim();if(!ae)throw new Error(`Approved text style "${k.name}" has no font. Re-review it instead of substituting a default font.`);return`(${ot(k.name)} ${X("height",0)} ${X("width",1)} ${X("oblique",0)} ${ot(ae)} ${ot(te("bigfont",""))})`}).join(`
    `),_=o.filter(k=>k.category==="linetype").filter(k=>!["CONTINUOUS","BYLAYER","BYBLOCK"].includes(k.name.trim().toUpperCase())).flatMap(k=>{const te=Cv(k.name,k.detail);if(!te)throw new Error(`Approved linetype "${k.name}" has an unsupported or incomplete definition. Re-extract it with the current extractor; the runner will not omit its marks or substitute Continuous.`);const X=k.detail.match(/(?:^|;)description=([^;]*)/i)?.[1]?.trim()||k.name,ae=te.segments.map(pe=>{const oe=[String(pe.length),String(pe.flags)];return pe.flags===4&&oe.push(String(pe.shapeNumber),ot(pe.styleName),ot(pe.shapeFile),String(pe.scale),String(pe.rotation),String(pe.offsetX),String(pe.offsetY)),`(${oe.join(" ")})`}).join(" ");return[`(${ot(k.name)} ${ot(X)} ${String(te.patternLength)} (${ae}))`]}).join(`
    `),N=o.filter(k=>k.category==="dimensionStyle").map(k=>{const te=oT(k.name,k.detail),X=pe=>pe.map(([oe,ne])=>`(${oe} . ${typeof ne=="string"?ot(ne):Yl(ne)})`).join(" "),ae=te.resources.map(([pe,oe])=>[pe,pe===340?v.styleName:oe]);return`(${ot(k.name)} (${X(te.properties)}) (${X(ae)}))`}).join(`
    `),x=l.map(k=>`(${ot(k.stableId.toUpperCase())} ${ot(k.itemTag.trim())} ${ot(k.type)} ${k.pageNumber} (${Ri.map(te=>`(${ot(te.toUpperCase())} . ${ot(te==="itemTag"?k.itemTag.trim():k.fields?.[te]??"")})`).join(" ")}))`).join(`
    `);B2(o);const O=`; Local AutoCAD runner. The matching source PDF is packaged separately.
; Copyright (c) 2026 gaurav.cbiindia.
; Run command ${y} in AutoCAD for Windows.
; Each imported entity is stamped with a generic source alias and source page.

(vl-load-com)
(setq *p2dwg-attribute-rules* '(${u.map(k=>`(${ot(k.attributeTag)} ${ot(k.edeField.toUpperCase())} ${ot(k.valueType)} ${ot(k.textZone)})`).join(" ")}))
(setq *p2dwg-conflicting-tags* '(${m.map(k=>ot(k.toUpperCase())).join(" ")}))
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
(setq *p2dwg-approved-text-style-name* ${ot(v.styleName)})
(setq *p2dwg-approved-text-style-source* ${ot(v.source)})
(setq *p2dwg-approved-text-layer-name* ${R?ot(R):"nil"})
(setq *p2dwg-approved-linetypes* '(
    ${_}
))
(setq *p2dwg-approved-dimension-styles* '(
    ${N}
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

${v2(p)}
${w2(p)}
${x2(p)}
${S2(p)}
${E2(p)}
${f2(p,T)}
${l2(a,r)}
`,C=O.indexOf(`(defun ${p}-manual-reference-calibration-archive`),P=O.indexOf(`(defun ${p}-calibrate-import`);return C<0||P<C?O:`${O.slice(0,C)}${O.slice(P)}`}function I2(a,r,s){const o=a.map((u,m)=>{const f=m+1;return{documentNumber:f,sourceId:u.sourceId??`SOURCE_${String(f).padStart(2,"0")}`,sourceFile:`SOURCE_${String(f).padStart(2,"0")}.pdf`,sourceName:u.sourceName??`PDF ${f}`,sha256:u.sourceHash??"",pageCount:u.pageCount,pageDrawingNames:u.pageDrawingNames}}),l=a.flatMap((u,m)=>(u.pageSizesPoints??[]).flatMap((f,g)=>{const y=m2(f);return!y||!y2(f,y).valid?[{documentNumber:m+1,pageNumber:g+1,scaleFactor:1,method:"FIXED_SHEET_SIZE",pageWidthMm:0,pageHeightMm:0,targetWidthMm:841,targetHeightMm:594}]:[{documentNumber:m+1,pageNumber:g+1,scaleFactor:y.scaleFactor,method:y.method,pageWidthMm:y.pageWidthMm,pageHeightMm:y.pageHeightMm,targetWidthMm:y.targetWidthMm,targetHeightMm:y.targetHeightMm}]}));return o2(o,!!r,s,l)}function L2(){return`param(
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
`}function P2(a,r){const s=m=>{const f=[2166136261,2654435769,2246822507,3266489909],g=[16777619,1540483477,668265261,374761393];for(const y of m)for(let p=0;p<f.length;p+=1)f[p]=Math.imul(f[p]^y,g[p])>>>0;return f.map(y=>y.toString(16).padStart(8,"0")).join("")},o=a.map((m,f)=>[f+1,m.sourceHash?.toLowerCase()??s(m.pdfBytes),m.pageCount,m.discipline,m.sourceId??"",m.sourceName??"",m.originalName??"",m.projectId??"",m.titleBlockGroupId??"",JSON.stringify(m.pageSizesPoints??[]),JSON.stringify(m.pageDrawingNames??[])].join("|")),l=[];for(const m of r)m.path==="RUN_BATCH.lsp"||m.path==="README_LOCAL_AUTOCAD.txt"||/^SOURCE_\d+\.pdf$/i.test(m.path)||l.push(`${m.path}|${m.content.length}|${s(m.content)}`);const u=["LOCAL_AUTOCAD_BATCH_V1",`RUNNER_BUILD|${ns}`,...o.map(m=>`JOB|${m}`),...l.map(m=>`FILE|${m}`)].join(`
`);return s(new TextEncoder().encode(u))}function k2(a,r){const s=a.map((l,u)=>`- PDF ${u+1} (${l.discipline}): ${l.pageCount} page(s) -> ${l.pageCount} native DWG file(s)`).join(`
`)+`

OUTPUT NAMES
Page DWGs use detected Drawing No/Title labels from the source PDF, not equipment tags.
Duplicate names get a document/page suffix; existing DWGs are never overwritten.
Missing, scanned or ambiguous labels use unique fallback names marked FALLBACK_REVIEW.
See each PDF pageOutputs entry in batch_manifest.json for the exact filenames.
`;return`LOCAL AUTOCAD PDF-TO-DWG RUNNER
 ---------------------------------
Runner build: ${ns}

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
`}function O2(a,r=[],s=[],o=[],l){if(a.length===0||a.some(N=>!Number.isInteger(N.pageCount)||N.pageCount<1||!["PFD","P&ID"].includes(N.discipline)||!(N.pdfBytes instanceof Uint8Array)||N.pdfBytes.length===0||N.pageSizesPoints!==void 0&&(N.pageSizesPoints.length!==N.pageCount||N.pageSizesPoints.some(x=>!Number.isFinite(x.width)||!Number.isFinite(x.height)||x.width<=0||x.height<=0))||typeof N.sourceHash!="string"||!/^[a-f0-9]{64}$/i.test(N.sourceHash)||N.pageDrawingNames!==void 0&&(N.pageDrawingNames.length!==N.pageCount||N.pageDrawingNames.some(x=>x!==null&&typeof x!="string"))||N.sourceId!==void 0&&!N.sourceId.trim()||N.sourceName!==void 0&&!N.sourceName.trim()))throw new Error("Every runner PDF needs readable bytes and a verified SHA-256 source hash.");const u=a.map((N,x)=>N.sourceId??`SOURCE_${String(x+1).padStart(2,"0")}`);if(new Set(u).size!==u.length)throw new Error("Each selected PDF must have a unique source ID before the runner can be prepared.");if(a.some(N=>(N.edeRecords??[]).some(x=>!/^[0-9A-F]{32}$/i.test(x.stableId)||typeof x.itemTag!="string"||!x.type.trim()||Object.entries(x.fields??{}).some(([O,C])=>!Ri.includes(O)||typeof C!="string")||!Number.isInteger(x.pageNumber)||x.pageNumber<1||x.pageNumber>N.pageCount)))throw new Error("An EDE link in the AutoCAD runner is invalid. Reopen the EDE record and prepare a fresh runner.");if(a.some(N=>(N.conflictingTags??[]).some(x=>typeof x!="string")))throw new Error("The runner duplicate-tag registry is invalid.");const m=new Set(a.map(N=>N.titleBlockGroupId?.trim()??""));if(m.size>1)throw new Error("Prepare one AutoCAD runner per group so each batch uses only its own title block.");const f=[...m][0]??"";if(f){if(!l||l.groupId!==f)throw new Error("Upload a standalone DWG title block for the selected group before preparing its AutoCAD runner.");const N=new Set(a.map(O=>O.discipline));if(N.size!==1)throw new Error("Prepare separate PFD and P&ID runners so each workspace keeps its own shared title block.");if(l.workspaceType!==[...N][0])throw new Error(`The selected title block belongs to ${l.workspaceType}; choose the matching workspace title block.`);if(!(l.content instanceof Uint8Array)||!l.content.length)throw new Error("The selected group title block is not a valid AutoCAD DWG file.");const x=new TextDecoder().decode(l.content.subarray(0,6));if(!/^AC10\d{2}$/.test(x))throw new Error("The selected group title block is not a valid AutoCAD DWG file.");if(l.titleBlockPath!=="PROJECT_TITLE_BLOCK.dwg"||l.xrefName!=="P2DWG_PROJECT_TITLE_BLOCK"||!l.titleBlockId.trim()||!Number.isInteger(l.version)||l.version<1||!Number.isFinite(l.expectedSize.widthMm)||!Number.isFinite(l.expectedSize.heightMm)||l.expectedSize.widthMm<=0||l.expectedSize.heightMm<=0)throw new Error("The project title-block record is incomplete. Save the title block again in the selected workspace.");if(l.expectedSize.widthMm!==un.width||l.expectedSize.heightMm!==un.height)throw new Error("The project title block must use the fixed 841 x 594 mm sheet size.")}else if(l)throw new Error("A project title block can only be used with PDFs from the same selected group.");const g=a.map(N=>r.filter(x=>(x.discipline===N.discipline||x.discipline==="Shared")&&(x.projectId?x.projectId===N.projectId:!0))),y=[...new Map(g.flat().map(N=>[`${N.blockAssetId}|${N.blockName}|${N.fallbackCategory}`,N])).values()];for(const N of y)if(N.fallbackCategory.trim().toLowerCase()==="valve"){if(!N.wipeoutBoundary)throw new Error(`Valve "${N.blockName}" has no reviewed body mask outline. Re-review the valve in the Legends Library before preparing the AutoCAD runner.`);try{ts(N.wipeoutBoundary.map(([x,O])=>`${x},${O}`).join(";"))}catch(x){throw new Error(`Valve "${N.blockName}" has an invalid reviewed body mask outline. ${x instanceof Error?x.message:"Re-review the valve mask."}`)}}const p=new Set(s.map(N=>N.id));if(y.some(N=>!p.has(N.blockAssetId)))throw new Error("An approved symbol refers to a missing locally extracted block drawing.");if(y.some(N=>!N.targetLayer.trim()||N.targetLayer.trim().toUpperCase()==="0"))throw new Error("Every approved block needs an approved non-zero target CAD layer before the AutoCAD runner can be prepared.");const b=new Map,v=new Map,w=new Map,R=new Map,D=[...new Set(y.map(N=>N.blockAssetId))];D.forEach((N,x)=>{const O=s.find(P=>P.id===N),C=`CAD_SYMBOLS/SYMBOL_${String(x+1).padStart(3,"0")}`;if(O.format==="DXF"){const P=Zs(O.content).content,k=new Gp(P).nativeAssetInfo();v.set(N,`${C}.dxf`),b.set(N,`${C}.dxf`),w.set(N,k.requiredShapeFonts),R.set(N,P)}else b.set(N,`${C}.dwg`),v.set(N,`${C}.dwg`),w.set(N,[])});const S=Av(a),T={schemaVersion:1,runnerBuildVersion:ns,pdfs:a.map((N,x)=>({sourceId:N.sourceId??`SOURCE_${String(x+1).padStart(2,"0")}`,sourceFile:`SOURCE_${String(x+1).padStart(2,"0")}.pdf`,originalName:N.originalName??N.sourceName??`PDF ${x+1}`,originalAlias:N.sourceName??`PDF ${x+1}`,sha256:N.sourceHash.toLowerCase(),pageCount:N.pageCount,pageOutputs:S[x].map((O,C)=>({page:C+1,outputDwg:O,drawingName:N.pageDrawingNames?.[C]??null,namingStatus:N.pageDrawingNames?.[C]?"DETECTED_LABEL":"FALLBACK_REVIEW"}))}))},L=[{path:"RUN_BATCH.lsp",content:new Uint8Array},{path:"batch_manifest.json",content:new TextEncoder().encode(JSON.stringify(T,null,2))},{path:"VERIFY_BATCH.ps1",content:new TextEncoder().encode(L2())},...l?[{path:"PROJECT_TITLE_BLOCK.dwg",content:l.content},{path:"PROJECT_TITLE_BLOCK_SCOPE.txt",content:new TextEncoder().encode(T2(l))}]:[],...s.filter(N=>D.includes(N.id)).map(N=>({path:v.get(N.id),content:R.get(N.id)??N.content})),...y.length?[{path:"CAD_BLOCK_GEOMETRY_INDEX.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,note:"Descriptors are local geometry data, not validated match signatures. Missing or empty descriptors require re-importing the extraction ZIP with its overview DXF or reviewing unsupported geometry.",blocks:y.map(N=>{const x=s.find(k=>k.id===N.blockAssetId),O=x?.geometryDescriptor??null,P=!!(O?.primitives.length&&O.bounds)?"INDEXED":x?.geometryIndexError??(O?"EMPTY_OR_UNSUPPORTED":"OVERVIEW_DXF_REQUIRED");return{blockAssetId:N.blockAssetId,blockName:N.blockName,category:N.fallbackCategory,discipline:N.discipline,targetLayer:N.targetLayer,targetLayerRules:o.find(k=>k.category==="layer"&&k.name.trim().toLowerCase()===N.targetLayer.trim().toLowerCase())?.detail??null,projectScope:N.projectId?"project":"company",indexStatus:P,indexError:x?.geometryIndexError??null,geometry:O}})},null,2))}]:[],...a.flatMap((N,x)=>{const O=String(x+1).padStart(2,"0"),C=r.filter(X=>(X.discipline===N.discipline||X.discipline==="Shared")&&(X.projectId?X.projectId===N.projectId:!0)&&X.blockAssetId&&b.has(X.blockAssetId)).map(X=>{const ae=b.get(X.blockAssetId),pe=ae.split("/").at(-1)?.replace(/\.(?:dwg|dxf)$/i,"")??"APPROVED_SYMBOL",oe=s.find(ne=>ne.id===X.blockAssetId)?.geometryDescriptor;return{...X,blockName:pe,sourcePath:ae,requiredShapeFonts:w.get(X.blockAssetId)??[],autoPlacementSignature:oe?xA(oe):null}}),P=o.filter(X=>(X.discipline===N.discipline||X.discipline==="Shared")&&(X.projectId?X.projectId===N.projectId:!0)),k=Gy(P,N.projectId,N.requireLegendsLibrary);if(N.requireLegendsLibrary){const X=["f_Pipe_Pri","f_Inst","f_gen_Text"].filter(ae=>!k.some(pe=>pe.category==="layer"&&pe.name.toUpperCase()===ae.toUpperCase()));if(X.length)throw new Error(`LEGENDS_LIBRARY_INCOMPLETE: required reviewed layers are missing: ${X.join(", ")}. No approximate layer defaults were substituted.`)}const te=C.find(X=>!k.some(ae=>ae.category==="layer"&&ae.name.toLowerCase()===X.targetLayer.toLowerCase()));if(te)throw new Error(`Approved CAD layer "${te.targetLayer}" is not included in this runner page's approved standards.`);return[{path:`DOC_${O}.lsp`,content:new TextEncoder().encode(_2(x+1,N.pageCount,C,k,N.edeRecords??[],Xs(N.attributeRules??[]),N.conflictingTags??[],N.requireLegendsLibrary??!1))},{path:`SOURCE_${O}.pdf`,content:N.pdfBytes}]})];L.push({path:"CAD_STANDARDS_MANIFEST.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,fontPolicy:"ARIAL_NARROW",sheetSizeMm:un,documents:a.map((N,x)=>{const O=Gy(o.filter(C=>(C.discipline===N.discipline||C.discipline==="Shared")&&(!C.projectId||C.projectId===N.projectId)),N.projectId,N.requireLegendsLibrary);return{documentNumber:x+1,discipline:N.discipline,policy:N.requireLegendsLibrary?"STRICT_LEGENDS_LIBRARY":"COMPATIBILITY_DEFAULTS",counts:Object.fromEntries(["layer","linetype","textStyle","dimensionStyle"].map(C=>[C,O.filter(P=>P.category===C).length])),standards:O}})},null,2))});const _=P2(a,L);return L[0].content=new TextEncoder().encode(I2(a,l,_)),L.push({path:"README_LOCAL_AUTOCAD.txt",content:new TextEncoder().encode(k2(a,!!l))}),L}function j2(a,r=[],s=[],o=[],l,u){return GS(O2(a,r,s,o,l),u)}const Nv={name:Rp,category:"layer",detail:`color=${Dv};lineweight=-3;linetype=CONTINUOUS`,discipline:"Shared"},q2=[Nv,{name:"f_Pipe_Inline",category:"layer",detail:"color=60;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Equip",category:"layer",detail:"color=80;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Equip_Int",category:"layer",detail:"color=74;lineweight=-3;linetype=HIDDEN2",discipline:"Shared"},{name:"f_gen_Text",category:"layer",detail:"color=50;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"ATT_HID",category:"layer",detail:"color=11;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Misc",category:"layer",detail:"color=9;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Inst",category:"layer",detail:"color=115;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Elec",category:"layer",detail:"color=115;lineweight=-3;linetype=HIDDEN2",discipline:"Shared"},{name:"f_Vendor",category:"layer",detail:"color=164;lineweight=-3;linetype=CENTER2",discipline:"Shared"},{name:"f_Batt_Lim",category:"layer",detail:"color=194;lineweight=-3;linetype=PHANTOM2",discipline:"Shared"},{name:"f_gen_Hatch",category:"layer",detail:"color=7;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"FIRE",category:"layer",detail:"color=22;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"F_FIRE_SAFETY",category:"layer",detail:"color=1;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"}],M2=[{name:"HIDDEN2",category:"linetype",detail:"description=Hidden (.5x);patternLength=4.7625;pattern=(3.175,-1.5875);patternFlags=(0,0)",discipline:"Shared"},{name:"CENTER2",category:"linetype",detail:"description=Center (.5x);patternLength=28.575;pattern=(19.05,-3.175,3.175,-3.175);patternFlags=(0,0,0,0)",discipline:"Shared"},{name:"PHANTOM2",category:"linetype",detail:"description=Phantom (.5x);patternLength=31.75;pattern=(15.875,-3.175,3.175,-3.175,3.175,-3.175);patternFlags=(0,0,0,0,0,0)",discipline:"Shared"}];function Vy(a){return`${a.category}:${a.name.trim().toUpperCase()}`}function Gy(a,r,s=!1){const o=s?[]:[...q2,...M2],l=new Map;for(const f of o)l.set(Vy(f),f);const u=new Map,m=f=>(f.projectId===r&&f.projectId?2:0)+(f.discipline==="Shared"?0:1);for(const f of a){if(f.projectId&&f.projectId!==r)continue;const g=Vy(f),y=u.get(g);if(y&&m(y)===m(f)&&y.detail!==f.detail)throw new Error(`Conflicting approved Legends ${f.category} records named "${f.name}". No arbitrary record was selected.`);(!y||m(f)>m(y))&&u.set(g,f)}for(const[f,g]of u)l.set(f,g);return[...l.values()].map($2)}function $2(a){if(a.category!=="layer"||a.name.trim().toLowerCase()!==Nv.name.toLowerCase())return a;const r=a.detail.split(";").map(o=>o.trim()).filter(Boolean),s=r.findIndex(o=>/^linetype\s*=/i.test(o));return s>=0?r[s]="linetype=CONTINUOUS":r.push("linetype=CONTINUOUS"),{...a,detail:r.join(";")}}function Xy(a,r){const s=a.match(new RegExp(`(?:^|;)${r}=\\(([^)]*)\\)`,"i"));if(!s)return null;const o=s[1].trim();return!o||/^nil$/i.test(o)?[]:o.split(/[\s,]+/)}function F2(a,r){const s=a.match(new RegExp(`(?:^|;)${r}=(.*?)(?=;[A-Za-z][A-Za-z0-9_]*=|$)`,"i"));if(!s)return null;const o=[],l=/\(\s*(\d+)\s*\.\s*(?:"((?:\\.|[^"])*)"|([^\s)]+))\s*\)/g;let u;for(;(u=l.exec(s[1]))!==null;){const m=u[2]===void 0?u[3]:u[2].replaceAll('\\"','"').replaceAll("\\\\","\\");o.push({code:Number(u[1]),value:m})}return o}function U2(a){let r=0;for(const o of a.toUpperCase())r=r*31+o.charCodeAt(0)>>>0;return`P2DWG_${a.toUpperCase().replace(/[^A-Z0-9_-]/g,"_").slice(0,16)||"SHAPE"}_${r.toString(36).toUpperCase()}`}function Cv(a,r){const s=Xy(r,"pattern"),o=Xy(r,"patternFlags")??[];if(!s?.length||o.length>0&&o.length!==s.length)return null;const l=s.map(Number),u=o.map(Number);if(l.some(S=>!Number.isFinite(S))||l.every(S=>S===0)||l.reduce((S,T)=>S+Math.abs(T),0)<=0||u.some(S=>!Number.isInteger(S)))return null;const m=F2(r,"complexData"),f=new Map,g=/\(\s*"((?:\\.|[^"])*)"\s*\.\s*"((?:\\.|[^"])*)"\s*\)/g,y=r.match(/(?:^|;)shapeFonts=(.*)$/i);let p;if(y)for(;(p=g.exec(y[1]))!==null;)f.set(p[1].replaceAll('\\"','"').toUpperCase(),p[2].replaceAll('\\"','"'));const b=[];let v=0;for(let S=0;S<l.length;S+=1){const T=u[S]??0;let L=m?.findIndex((oe,ne)=>ne>=v&&oe.code===49)??-1;if(L<0||!m){if(T!==0)return null;b.push({length:l[S],flags:0});continue}const _=m[L];if(Math.abs(Number(_.value)-l[S])>1e-8)return null;const N=m[L+1];if(!N||N.code!==74)return null;const x=Number(N.value);if(!Number.isInteger(x)||x!==T)return null;if(v=L+2,x===0){b.push({length:l[S],flags:0});continue}if(x!==4)return null;const O=oe=>{for(;v<m.length&&m[v].code!==oe&&m[v].code!==49;)v+=1;if(v>=m.length||m[v].code!==oe)return null;const ne=m[v].value;return v+=1,ne},C=Number(O(75)),P=O(340),k=Number(O(46)),te=Number(O(50)),X=Number(O(44)),ae=Number(O(45)),pe=P?f.get(P.toUpperCase()):void 0;if(!Number.isInteger(C)||C<=0||!P||!pe||!/^[a-z0-9_.-]+\.shx$/i.test(pe)||![k,te,X,ae].every(Number.isFinite)||k<=0)return null;b.push({length:l[S],flags:4,shapeNumber:C,styleName:U2(a),shapeFile:pe,scale:k,rotation:te,offsetX:X,offsetY:ae})}const w=l.reduce((S,T)=>S+Math.abs(T),0),R=r.match(/(?:^|;)patternLength=([^;]+)/i)?.[1],D=R===void 0?w:Number(R);return!Number.isFinite(D)||D<=0||Math.abs(D-w)>Math.max(1e-7,w*1e-7)?null:{patternLength:D,segments:b}}function B2(a){const r=new Set(["CONTINUOUS","BYLAYER","BYBLOCK"]),s=new Map(a.filter(o=>o.category==="linetype").map(o=>[o.name.trim().toUpperCase(),o]));for(const o of a.filter(l=>l.category==="layer")){const l=o.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!l||r.has(l.toUpperCase()))continue;const u=s.get(l.toUpperCase());if(!u||!Cv(u.name,u.detail))throw new Error(`Layer "${o.name}" requires linetype "${l}", but its complete supported definition is not approved. Review/re-extract that linetype first; the runner will not silently substitute Continuous.`)}}function ot(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function Yl(a){if(!Number.isFinite(a))throw new Error("An approved block has a non-finite geometry signature. Re-index it before preparing the runner.");return Number(a.toFixed(8)).toString()}function z2(a,r){return a===null||a.has(r)}function Y2(a,r){return r===null?[...a]:a.filter(s=>r.has(s))}function H2(a,r,s){const o=new Set(a??r);return o.has(s)?o.delete(s):o.add(s),o}function V2(a,r,s){if(a===null)return null;const o=new Set(s),l=new Set([...a].filter(u=>o.has(u)));for(const u of s)r.has(u)||l.add(u);return l}const pa=(a,r,s="")=>a.find(o=>o.code===r)?.value.trim()??s,ni=a=>`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`,Wu=a=>a.replaceAll("\\","/").split("/").at(-1)??a,pi=a=>{const r=Number(a);if(!a.trim()||!Number.isFinite(r))throw new Error("Legends DXF contains an invalid numeric table property.");return r},G2=a=>a>=40&&a<=99&&a!==70||a>=140&&a<=149||a>=170&&a<=179||a>=270&&a<=299||a>=370&&a<=389||a>=420&&a<=429||a>=440&&a<=459,X2=a=>a.code>=50&&a.code<=58?pi(a.value)*Math.PI/180:pi(a.value),Wy=a=>`(${a.code} . ${X2(a)})`;function W2(a,r){const s=new Gp(a),o=[...s.tables.values()].flatMap(f=>f.records),l=new Map(o.map(f=>[pa(f,pa(f,0)==="DIMSTYLE"?105:5).toUpperCase(),f])),u=[],m=(f,g,y)=>{u.push({category:f,name:g,detail:y,discipline:r.discipline,sourceId:r.id})};for(const f of s.tables.get("LAYER")?.records??[]){const g=pa(f,2);if(pa(f,420))throw new Error(`Legends layer "${g}" uses TrueColor; explicit ACI conversion approval is required instead of silently dropping its color.`);m("layer",g,s.layerDetails(g))}for(const f of s.tables.get("STYLE")?.records??[]){const g=pa(f,2);g&&m("textStyle",g,`font=${Wu(pa(f,3))};bigfont=${Wu(pa(f,4))};height=${pa(f,40,"0")};width=${pa(f,41,"1")};oblique=${pi(pa(f,50,"0"))*Math.PI/180}`)}for(const f of s.tables.get("LTYPE")?.records??[]){const g=f.filter(v=>v.code===49).map(v=>pi(v.value)),y=f.filter(v=>v.code===74).map(v=>pi(v.value)),p=f.filter(v=>[9,40,44,45,46,49,50,73,74,75,340].includes(v.code)).map(v=>[9,340].includes(v.code)?`(${v.code} . ${ni(v.value.trim())})`:Wy(v)),b=f.filter(v=>v.code===340).map(v=>{const w=l.get(v.value.trim().toUpperCase());if(!w)throw new Error(`Legends linetype "${pa(f,2)}" has an unresolved shape-font reference.`);return`(${ni(v.value.trim())} . ${ni(Wu(pa(w,3)))})`});m("linetype",pa(f,2),`description=${pa(f,3).replaceAll(";"," ")};patternLength=${pa(f,40,"0")};pattern=(${g.join(" ")});patternFlags=(${y.join(" ")});complexData=(${p.join(" ")});shapeFonts=(${b.join(" ")})`)}for(const f of s.tables.get("DIMSTYLE")?.records??[]){const g=[],y=[],p=[];for(const b of f)if(![-1,0,2,5,70,100,102,105,330].includes(b.code))if(G2(b.code))g.push(Wy(b));else if([3,4].includes(b.code))g.push(`(${b.code} . ${ni(b.value)})`);else if(b.code>=340&&b.code<=347){const v=l.get(b.value.trim().toUpperCase()),w=v?pa(v,2):"";w?y.push(`(${b.code} . ${ni(w)})`):p.push(b.code)}else p.push(b.code);m("dimensionStyle",pa(f,2),`format=DXF_PROPERTIES_V1;recordComplete=1;dxfData=(${g.join(" ")});resources=(${y.join(" ")});unsupportedCodes=(${p.join(" ")})`)}return u}async function K2(a,r,s,o,l){const u=o.filter(v=>v.category==="company-standard"&&v.format==="DXF"&&["Shared",s].includes(v.discipline)),m=u.filter(v=>v.standardsMaster);if(m.length>1)throw new Error("LEGENDS_SOURCE_CONFLICT: more than one global Legends master is selected for this discipline. Keep one master; no source was chosen arbitrarily.");const f=m[0]??(u.length===1?u[0]:void 0),g=Zb(f?{...a,companyItems:[]}:a,r,s).map(v=>{const w=R=>v.fields.find(D=>D.label===R)?.value.trim()??"";return{name:w("CAD name"),category:v.category,detail:w("Extracted details"),discipline:w("Source discipline"),libraryItemId:v.id,sourceId:w("Source drawing ID"),...v.projectId?{projectId:v.projectId}:{}}});if(!f){if(u.length>1)throw new Error("LEGENDS_SOURCE_REQUIRED: select one saved DXF as the global Legends master once in the Legends Library. It will then be used by every project automatically.");return PS(a,r,s),g}if(f.bytes>50*1024*1024)throw new Error("The private Legends DXF exceeds the supported 50 MB table-reader limit.");const y=W2(await l(f.id),f),p=v=>`${v.category}:${v.name.toUpperCase()}`,b=new Map(y.map(v=>[p(v),v]));for(const v of g)r&&v.projectId===r&&b.set(p(v),v);return[...b.values()]}function Z2(a,r,s=""){const o=a.filter(y=>y.reviewStatus==="reviewed"&&y.sourceKind==="extracted-dwg"&&(y.scope!=="project"||!!(s&&y.projectId===s))),l=(y,p)=>y.fields.find(b=>b.label===p)?.value?.trim()??"",u=o.filter(y=>[r,"Shared"].includes(l(y,"Source discipline"))),m=u.filter(y=>y.category==="layer"&&l(y,"CAD name")&&l(y,"CAD name").toUpperCase()!=="0"),f=new Set(m.map(y=>l(y,"CAD name").toLowerCase()));return{symbols:u.filter(y=>y.category==="symbol"&&["Source drawing ID","Block asset ID","Block name","Fallback category"].every(p=>l(y,p))&&f.has(l(y,"Target CAD layer").toLowerCase())).length,layers:m.length,textStyles:u.filter(y=>y.category==="textStyle").length,otherDisciplineSymbols:o.filter(y=>y.category==="symbol"&&["PFD","P&ID"].includes(l(y,"Source discipline"))&&l(y,"Source discipline")!==r).length}}const _p=1024*1024,Q2=500*_p;function Nr(a){return a<1024?`${a} B`:a<_p?`${(a/1024).toFixed(1)} KB`:`${(a/_p).toFixed(1)} MB`}function J2(a){const r=a.type.split(";",1)[0].trim().toLowerCase(),s=a.name.trim().toLowerCase().endsWith(".pdf");return r==="application/pdf"||s}async function eD(a){const[r,s]=await Promise.all([pn(()=>import("./pdf-TYrZqVzP.js"),[]),pn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);r.GlobalWorkerOptions.workerSrc=s.default;const o=r.getDocument({data:new Uint8Array(a.slice(0))});try{return(await o.promise).numPages}finally{await o.destroy().catch(()=>{})}}async function tD(a,r){const[s,o]=await Promise.all([pn(()=>import("./pdf-TYrZqVzP.js"),[]),pn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);s.GlobalWorkerOptions.workerSrc=o.default;const u=await s.getDocument({data:new Uint8Array(a.slice(0))}).promise;try{const m=[],f=[];for(let g=1;g<=u.numPages;g+=1){r?.(g,u.numPages);const y=await u.getPage(g),p=y.getViewport({scale:1});m.push({width:p.width,height:p.height});const b=await y.getTextContent(),v=[];for(const w of b.items)"str"in w&&v.push({text:w.str,x:w.transform[4],y:w.transform[5],width:w.width,height:w.height||Math.hypot(w.transform[2],w.transform[3])});f.push(r2(v)),y.cleanup()}return{pageSizes:m,pageDrawingNames:f}}finally{await u.destroy().catch(()=>{})}}function aD({discipline:a,groups:r,selectedClientId:s,selectedClientLabel:o,onSelectClient:l}){const[u,m]=M.useState([]),[f,g]=M.useState(null),[y,p]=M.useState(!0),[b,v]=M.useState(""),[w,R]=M.useState(0),[D,S]=M.useState([]),[T,L]=M.useState(null),[_,N]=M.useState(null),[x,O]=M.useState(null),[C,P]=M.useState(null),[k,te]=M.useState(0),[X,ae]=M.useState(1),[pe,oe]=M.useState(null),[ne,Y]=M.useState(""),[Z,ge]=M.useState(""),[xe,j]=M.useState([]),[ee,B]=M.useState(0),[V,ie]=M.useState(""),[de,ve]=M.useState(null),[Pe,ke]=M.useState(null),[bt,rt]=M.useState(!1),[dt,ht]=M.useState(!1),[Ut,vt]=M.useState(""),[$,fe]=M.useState(!1),[he,z]=M.useState(""),[ue,Ne]=M.useState(null),[ye,Me]=M.useState(!1),[et,Fe]=M.useState(""),[Be,ya]=M.useState("1"),we=M.useRef([]),Ye=M.useRef(null),Re=M.useRef(!0),aa=M.useRef(!1),Oe=M.useRef(0),Oa=M.useRef(new Set),Bt=M.useRef(a);Bt.current=a;const Vt=typeof globalThis.crypto?.subtle<"u",Tt=M.useMemo(()=>jb(r),[r]),at=M.useMemo(()=>{const F=new Set(Y2(u.map(be=>be.id),f));return u.filter(be=>F.has(be.id))},[f,u]),ba=M.useMemo(()=>JSON.stringify({discipline:a,mappingProjectId:ne,titleBlockGroupId:Z,titleBlockId:Pe?.titleBlockId??null,titleBlockVersion:Pe?.version??null,sourceRevision:k,sources:at.map(F=>[F.id,F.hash,F.alias,F.originalName])}),[a,ne,Z,Pe?.titleBlockId,Pe?.version,at,k]);M.useEffect(()=>{!ue||ue.inputSignature===ba||(Ne(null),z("Runner inputs changed. Prepare a new ZIP before downloading the current selection."))},[ue,ba]),M.useEffect(()=>()=>{ue&&URL.revokeObjectURL(ue.url)},[ue]);const kt=ue?.inputSignature===ba?ue:null,ja=()=>g(null),Gt=()=>g(new Set),wt=F=>{g(be=>H2(be,u.map(Ee=>Ee.id),F))};M.useEffect(()=>{if(ge(s),!s){Y("");return}try{const F=xn();Y(F.projects[s]?s:"")}catch{Y("")}},[s]);const _t=M.useCallback((F,be)=>{if(!Re.current)return;Oe.current+=1;const Ee=Oe.current;S(Se=>[...Se.slice(-5),{id:Ee,kind:F,text:be}])},[]);M.useEffect(()=>{const F=()=>{try{const be=xn(),Ee=s&&be.projects[s]?[s]:[];j(Ee.map((Se,Ue)=>({id:Se,label:Tt.find(Ke=>Ke.id===Se)?.label??`Project ${String(Ue+1).padStart(2,"0")}`}))),ve(Z2([...be.companyItems,...ne?be.projects[ne]?.items??[]:[]],a,ne)),ie(new Date().toLocaleTimeString())}catch(be){ve(null),_t("error",be instanceof Error?be.message:"The approved CAD library could not be loaded.")}};return F(),window.addEventListener("focus",F),window.addEventListener("storage",F),window.addEventListener(yi,F),()=>{window.removeEventListener("focus",F),window.removeEventListener("storage",F),window.removeEventListener(yi,F)}},[_t,Tt,a,ne,ee,s]),M.useEffect(()=>{let F=!0;return ke(null),vt(""),Z?(rt(!0),wy(Z,a).then(be=>{F&&ke(be)}).catch(be=>{F&&vt(be instanceof Error?be.message:"The local project title block could not be read.")}).finally(()=>{F&&rt(!1)}),()=>{F=!1}):(rt(!1),()=>{F=!1})},[a,Z]),M.useEffect(()=>{Z&&!Tt.some(F=>F.id===Z)&&(ge(""),ke(null),vt(""))},[Tt,Z]);const At=M.useCallback(async()=>{try{const[F,be]=await Promise.all([gv(a),_A()]);if(!Re.current||Bt.current!==a)return;const Ee=F.map(Ue=>Ue.id),Se=Oa.current;g(Ue=>V2(Ue,Se,Ee)),Oa.current=new Set(Ee),m(F),R(be),v("")}catch(F){Re.current&&v(F instanceof Error?F.message:"Saved PDFs could not be loaded.")}finally{Re.current&&p(!1)}},[a]),rn=async(F,be,Ee,Se)=>{await Ul(F.id,{analysisStatus:"extracting",analysisPagesDone:0,analysisRecordCount:0,analysisMessage:"",autocadStatus:"not-connected"}),Re.current&&await At();let Ue;try{Ue=await VA(be,Se,Ee)}catch(It){throw Ee()?It:new ta("cancelled","EDE extraction paused.")}if(!Ee())throw new ta("cancelled","EDE extraction paused.");await LA(F.id,Ue.pageText);const Ke=HA(Ue.pageText),tt=e2(a==="PFD"?"pfd":"pid",{id:F.id,alias:F.alias},[...Ue.candidates,...Ke]);Re.current&&te(It=>It+1);const Dt=Ue.pageText.some(It=>It.searchableText.trim()||It.ocrTiles.some(na=>na.trim())),Ta=tt.recordCount||Dt?"needs-review":"no-tags";return await Ul(F.id,{analysisStatus:Ta,analysisPagesDone:Ue.pages,analysisRecordCount:tt.recordCount,analysisMessage:Ue.ocrPages?`Page text and OCR from ${Ue.ocrPages} page(s) are saved locally. ${Ue.candidates.length} tag candidate(s) and ${Ke.length} note(s) need review.`:`Page text is saved locally. ${Ue.candidates.length} tag candidate(s) and ${Ke.length} note(s) need review.`,autocadStatus:"not-connected"}),{...tt,tagCount:Ue.candidates.length,noteCount:Ke.length}};M.useEffect(()=>{Re.current=!0,p(!0),O(null),ae(1),At();const F=()=>{At()};return window.addEventListener("focus",F),()=>{window.removeEventListener("focus",F),Re.current=!1,we.current.forEach(be=>{be.cancelled=!0}),we.current=[]}},[At]),M.useEffect(()=>{if(aa.current)return;const F=new URLSearchParams(window.location.search).get("pdf"),be=u.find(Ue=>Ue.id===F);if(!be)return;const Ee=new URLSearchParams(window.location.search).get("record");Ee&&P(Ee),aa.current=!0,O(be.id);const Se=Number(new URLSearchParams(window.location.search).get("page"));ae(Number.isInteger(Se)&&Se>=1&&Se<=be.pageCount?Se:1),window.setTimeout(()=>document.querySelector('[data-testid="panel-source-page"]')?.scrollIntoView({behavior:"smooth",block:"center"}),100)},[u]);const sn=async(F,be,Ee)=>{const Se=a,Ue=()=>!F.cancelled&&Re.current&&Bt.current===Se;F.state="working";try{if(F.file.size>Ap)throw new ta("too-large","A PDF is larger than 100 MB and was skipped.");const Ke=await F.file.arrayBuffer();if(!Ue())return;let tt;try{tt=await eD(Ke)}catch(It){const na=It?.name;throw na==="PasswordException"?new Error("A PDF is password-protected. Remove the password and add it again."):na==="InvalidPDFException"||na==="FormatError"?new Error("A file is not a valid PDF, or it is damaged."):new Error("A PDF could not be read. It may be damaged.")}if(!Ue())return;if(tt<1)throw new Error("A PDF has no pages.");let Dt;try{Dt=await Fy(Ke)}catch{throw new Error("Duplicate check is not supported in this browser, so the PDF was not saved.")}if(!Ue())return;const Ta=await IA({discipline:Se,bytes:Ke,pageCount:tt,hash:Dt,originalName:F.file.name},Ue);be.pagesDone+=tt,Re.current&&(L({total:Ee,done:be.done,pagesDone:be.pagesDone,active:1,phase:"extracting",currentAlias:Ta.alias,pageNow:0,pageTotal:tt}),await At());try{const It=await rn(Ta,Ke,Ue,(na,Qn)=>{Re.current&&L(Xa=>Xa&&{...Xa,phase:"extracting",currentAlias:Ta.alias,pageNow:na,pageTotal:Qn})});Ue()&&_t("info",`${Ta.alias}: ${It.tagCount} tag candidate(s) and ${It.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(It){const na=It instanceof ta&&It.code==="cancelled",Qn=na?"Extraction paused. Resume it from this saved PDF.":Uy(It);await Ul(Ta.id,{analysisStatus:na?"paused":"failed",analysisMessage:Qn}).catch(()=>{}),!na&&Ue()&&_t("error",`${Ta.alias}: ${Qn}`)}F.state="done",Re.current&&await At()}catch(Ke){F.state="failed",!(Ke instanceof ta&&Ke.code==="cancelled")&&Ue()&&_t("error",Ke instanceof Error?Ke.message:"A PDF could not be added.")}finally{be.done+=1,Re.current&&L(Ke=>Ke&&{...Ke,total:Ee,done:be.done,pagesDone:be.pagesDone,active:0})}},Cn=F=>{if(T||y||b||!F.length)return;const be=F.filter(J2);if(be.length<F.length&&_t("error",`${F.length-be.length} file(s) skipped. Choose PDF files only.`),!be.length)return;const Ee=be.map(tt=>({id:++Oe.current,file:tt,cancelled:!1,state:"queued"}));we.current=[...we.current,...Ee];const Se={done:0,pagesDone:0};L({total:Ee.length,done:0,pagesDone:0,active:0,phase:"checking"});let Ue=0;(async()=>{for(;Ue<Ee.length&&Re.current;){const tt=Ee[Ue++];if(tt.cancelled){Se.done+=1;continue}await sn(tt,Se,Ee.length)}})().then(()=>{if(we.current=we.current.filter(Dt=>!Ee.includes(Dt)),!Re.current)return;const tt=Ee.filter(Dt=>Dt.state==="done").length;tt&&_t("info",`${tt} PDF(s) saved on this device. Check each PDF's EDE status below; AutoCAD is not connected.`),L(null)})},Ra=async F=>{if(!(T||_)){N(F.id),L({total:1,done:0,pagesDone:0,active:1,phase:"extracting",currentAlias:F.alias,pageNow:0,pageTotal:F.pageCount});try{const be=await ti(F.id),Ee=await rn(F,be,()=>Re.current,(Se,Ue)=>{Re.current&&L(Ke=>Ke&&{...Ke,phase:"extracting",pageNow:Se,pageTotal:Ue})});_t("info",`${F.alias}: ${Ee.tagCount} tag candidate(s) and ${Ee.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(be){const Ee=Uy(be);await Ul(F.id,{analysisStatus:"failed",analysisMessage:Ee}).catch(()=>{}),_t("error",`${F.alias}: ${Ee}`)}finally{L(null),N(null),await At()}}},Rn=()=>{we.current.forEach(F=>{F.state!=="done"&&(F.cancelled=!0)}),_t("info","Remaining imports were cancelled. Finished files stay saved.")},va=async F=>{oe(null);try{await mv([F]),x===F&&O(null),await At()}catch{_t("error","The PDF could not be deleted from local storage.")}},Ea=async()=>{oe(null),we.current.forEach(F=>{F.cancelled=!0});try{await PA(a),O(null),await At()}catch{_t("error","Saved PDFs could not be cleared.")}},Ot=async F=>{try{const be=await ti(F.id),Ee=URL.createObjectURL(new Blob([be],{type:"application/pdf"})),Se=document.createElement("a");Se.href=Ee,Se.download=`original-source-${a==="PFD"?"pfd":"pid"}-pdf-${F.aliasNumber}.pdf`,document.body.appendChild(Se),Se.click(),Se.remove(),setTimeout(()=>URL.revokeObjectURL(Ee),4e3)}catch{_t("error","The original PDF could not be read for download.")}},jt=async F=>{if(!(!F||!Z)){if(F.size>Jb){vt("The project title block is larger than the 100 MB local upload limit."),Ye.current&&(Ye.current.value="");return}if(Pe&&!window.confirm("Replace the saved title block for this project in this browser? The previous local file will be replaced.")){Ye.current&&(Ye.current.value="");return}ht(!0),vt("");try{await eT(Z,a,F.name,new Uint8Array(await F.arrayBuffer())),ke(await wy(Z,a)),vt("Title block saved for this group in this browser.")}catch(be){vt(be instanceof Error?be.message:"The project title block could not be saved locally.")}finally{ht(!1),Ye.current&&(Ye.current.value="")}}},I=async()=>{if(!(!Z||!Pe)&&window.confirm("Remove this client folder title block from this browser? Existing generated DWGs are not changed.")){vt("");try{await tT(Z,a),ke(null),vt("Group title block removed from this browser.")}catch(F){vt(F instanceof Error?F.message:"The project title block could not be removed.")}}},J=async()=>{if(!at.length){z("Select at least one PDF to include in the AutoCAD runner.");return}if(!Z){z("Choose the project folder and its saved title block. Every drawing page needs the shared title-block XREF for automatic scaling.");return}if(T!==null||$||dt||y||b)return;fe(!0),Ne(null);const F=async be=>{Re.current&&(z(be),await new Promise(Ee=>window.setTimeout(Ee,0)))};try{await F("Checking selected PDFs and project title block…");const be=at.reduce((Ae,Ce)=>Ae+Ce.size,0);await F("Reading the saved project title block…");const Ee=Z?await JS(Z,a):null;if(!Ee)throw new Error("Upload a standalone DWG title block for the selected client folder before preparing its AutoCAD runner.");if(be+(Ee?.bytes??0)>Q2)throw new Error("The saved source PDFs and client title block exceed the 500 MB limit for this local AutoCAD runner package.");await F("Loading approved Legends and project mappings…");const Se=xn();if(ne&&!Se.projects[ne])throw new Error("That project library is no longer available. Select a current project mapping or use Legends Library only.");const tt=[...Se.companyItems,...ne?Se.projects[ne]?.items??[]:[]].filter(Ae=>Ae.category==="symbol"&&Ae.reviewStatus==="reviewed"&&Ae.sourceKind==="extracted-dwg"&&[a,"Shared"].includes(Ae.fields.find(Ce=>Ce.label==="Source discipline")?.value?.trim()??"")).flatMap(Ae=>{const Ce=Wa=>Ae.fields.find(tr=>tr.label===Wa)?.value?.trim()??"",Zt=Ce("Source drawing ID"),xt=Ce("Block asset ID"),Nt=Ce("Block name"),ra=Ce("Fallback category"),_n=Ce("Target CAD layer"),Ct=Ce("Source discipline");if(!Zt||!xt||!Nt||!ra||Ct!=="PFD"&&Ct!=="P&ID"&&Ct!=="Shared")return[];if(!_n||_n.toUpperCase()==="0")throw new Error(`Approved block "${Nt}" has no valid target CAD layer. Re-review it and select an approved non-zero layer.`);let Ma;if(ra.toLowerCase()==="valve"){const Wa=Ce("Wipeout mask boundary");try{Ma=ts(Wa)}catch(tr){throw new Error(`Approved valve "${Nt}" has no valid reviewed body mask. Re-review the valve outline before preparing the AutoCAD runner. ${tr instanceof Error?tr.message:""}`)}}return[{sourceId:Zt,blockAssetId:xt,blockName:Nt,fallbackCategory:ra,targetLayer:_n,discipline:Ct,...Ma?{wipeoutBoundary:Ma}:{},...Ae.scope==="project"&&Ae.projectId?{projectId:Ae.projectId}:{}}]});await F("Checking the approved Legends layer, text, and linetype standards…");const Dt=await K2(Se,ne||void 0,a,await tc(),Ws),Ta=[...new Set(tt.map(Ae=>Ae.blockAssetId))],It=[];for(const[Ae,Ce]of Ta.entries()){await F(`Loading approved CAD block ${Ae+1} of ${Ta.length}…`);const[Zt,xt]=await Promise.all([tv(Ce),ev(Ce)]);It.push({id:Ce,content:Zt,format:xt.format??"DWG",...xt.geometryDescriptor?{geometryDescriptor:xt.geometryDescriptor}:{}})}const na=new Map(It.map(Ae=>[Ae.id,Ae])),Qn=new Map((await tc()).map(Ae=>[Ae.id,Ae])),Xa=new Map;for(const Ae of tt){const Ce=na.get(Ae.blockAssetId)?.geometryDescriptor;if(Ce?.primitives.length&&Ce.bounds)continue;const Zt=Xa.get(Ae.sourceId)??[];Zt.push(Ae),Xa.set(Ae.sourceId,Zt)}const Jn=[];for(const[Ae,Ce]of Xa){await F("Checking approved block geometry against its local source drawing…");const Zt=Qn.get(Ae),xt=Ce.map(Nt=>na.get(Nt.blockAssetId)).filter(Nt=>!!Nt);if(!Zt||Zt.format!=="DXF"){for(const Nt of xt)Nt.geometryIndexError=Zt?"SOURCE_DWG_REQUIRES_OVERVIEW_DXF":"SOURCE_NOT_AVAILABLE";continue}try{const Nt=await Ws(Ae);if(Nt.byteLength>50*1024*1024){for(const Ct of xt)Ct.geometryIndexError="SOURCE_DXF_TOO_LARGE";continue}const ra=new TextDecoder("windows-1252").decode(Nt),_n=ac(ra,[...new Set(Ce.map(Ct=>Ct.blockName))]);for(const Ct of Ce){const Ma=na.get(Ct.blockAssetId);if(!Ma)continue;const Wa=_n.get(Ct.blockName)?.geometryDescriptor;if(!Wa||!Wa.primitives.length||!Wa.bounds){Ma.geometryIndexError="BLOCK_NOT_FOUND_OR_UNSUPPORTED";continue}Ma.geometryDescriptor=Wa,Jn.push({id:Ma.id,sourceId:Ae,blockName:Ct.blockName,content:Ma.content,geometryDescriptor:Wa})}}catch{for(const Nt of xt)Nt.geometryIndexError="SOURCE_DXF_UNREADABLE"}}Jn.length&&(await F("Saving verified block geometry locally…"),await yp(Jn));const qa=new Map;await F("Linking reviewed EDE records to the selected PDFs…");const os=wi(a==="PFD"?"pfd":"pid"),Ii=TS(os.flatMap(Ae=>Ae.rows.map(Ce=>({stableId:Ce.id,itemTag:Ce.itemTag})))),er=DS(a,ne||void 0);for(const Ae of os)for(const Ce of Ae.rows){if(!Ce.sourcePdfId)continue;const Zt=new Set([Number(Ce.sourcePage),...(Ce.sourceLocations??[]).map(xt=>xt.pageNumber)].filter(xt=>Number.isInteger(xt)&&xt>0));for(const xt of Zt){const Nt=qa.get(Ce.sourcePdfId)??[];Nt.some(ra=>ra.stableId===Ce.id&&ra.pageNumber===xt)||(Nt.push({stableId:Ce.id,itemTag:Ce.itemTag,type:Ce.type,pageNumber:xt,fields:Object.fromEntries(Ri.map(ra=>[ra,Ce[ra]]))}),qa.set(Ce.sourcePdfId,Nt))}}const is=[];for(const[Ae,Ce]of at.entries()){await F(`Reading PDF ${Ae+1} of ${at.length}: ${Ce.alias}…`);const Zt=await ti(Ce.id),xt=await Fy(Zt);if(xt.toLowerCase()!==Ce.hash.toLowerCase())throw new Error(`${Ce.alias} changed in local storage. Re-upload it before creating the AutoCAD runner.`);const Nt=await tD(Zt,(ra,_n)=>{Re.current&&z(`Reading ${Ce.alias} · page ${ra} of ${_n} · checking sheet size and drawing number…`)});is.push({pageCount:Ce.pageCount,pageSizesPoints:Nt.pageSizes,pageDrawingNames:Nt.pageDrawingNames,pdfBytes:new Uint8Array(Zt),sourceHash:xt,sourceId:Ce.id,sourceName:Ce.alias,originalName:Ce.originalName??Ce.alias,discipline:a,edeRecords:qa.get(Ce.id)??[],attributeRules:er,conflictingTags:Ii,requireLegendsLibrary:!0,...ne?{projectId:ne}:{},...Z?{titleBlockGroupId:Z}:{}})}await F("Building the runner and packaging PDFs in the background…");const ls=await j2(is,tt,It,Dt,Ee?{groupId:Ee.projectId,workspaceType:Ee.workspaceType,titleBlockId:Ee.titleBlockId,titleBlockPath:Ee.titleBlockPath,xrefName:Ee.xrefName,expectedSize:Ee.expectedSize,version:Ee.version,content:Ee.content}:void 0,Ae=>{Re.current&&z(`Packaging runner ZIP · file ${Ae.fileIndex} of ${Ae.fileCount} · ${Ae.path} · ${Nr(Ae.processedBytes)} of ${Nr(Ae.fileBytes)}`)}),vc=URL.createObjectURL(ls),eo=at.reduce((Ae,Ce)=>Ae+Ce.pageCount,0);Ne({url:vc,filename:s2,version:ns,bytes:ls.size,sourceCount:at.length,pageCount:eo,inputSignature:ba}),z(`Runner ${ns} is ready. Click Download ZIP below to start the browser download. It contains ${at.length} selected PDF(s) and can create ${eo} separate DWG file(s). DWG filenames use detected Drawing No/Title labels. Missing or ambiguous labels use unique fallback names; check pageOutputs in batch_manifest.json. Duplicate names receive a page suffix. ${tt.filter(Ae=>(Ae.discipline===a||Ae.discipline==="Shared")&&(!Ae.projectId||Ae.projectId===ne)).length} reviewed symbol mapping(s) and ${Dt.length} approved-source Legends layer/text/linetype/dimension standard(s) are included; exact records are in CAD_STANDARDS_MANIFEST.json. No generic layer defaults were substituted. Each page is uniformly calibrated to the shared title-block XREF frame; approved symbol/text checks run automatically and no calibration input is requested.`+(Ee?" The selected client title block is included for 1:1 XREF attachment; keep its output companion DWG beside the generated pages.":""))}catch(be){z(be instanceof Error?be.message:"The AutoCAD runner could not be prepared. Try a smaller PDF batch.")}finally{fe(!1)}},me=async F=>{const be=Number(Be);if(!Number.isFinite(be)||be<=0){Fe("Enter a scale multiplier greater than zero.");return}Me(!0),Fe("Reading PDF vector geometry…");try{const{buildPdfDxfPackage:Ee}=await pn(async()=>{const{buildPdfDxfPackage:Dt}=await import("./pdf-dxf-export-CHPL391B.js");return{buildPdfDxfPackage:Dt}},[]),Se=await Ee((F?[F]:u).map(Dt=>({aliasNumber:Dt.aliasNumber,bytes:()=>ti(Dt.id)})),be,(Dt,Ta,It)=>{Re.current&&Fe(`Creating DXF: PDF ${Dt} · page ${Ta} of ${It}…`)},()=>Re.current&&Bt.current===a);if(!Re.current||Bt.current!==a)return;const Ue=URL.createObjectURL(Se.blob),Ke=document.createElement("a");Ke.href=Ue,Ke.download="pdf-dxf-pages.zip",document.body.append(Ke),Ke.click(),Ke.remove(),window.setTimeout(()=>URL.revokeObjectURL(Ue),1e3);const tt=Se.reports.length-Se.exported;Fe(`${Se.exported} DXF page(s) created${tt?`; ${tt} page(s) skipped—read the report`:""}. Raw vector output—not a verified exact PDF match. Compare each page with its source; library replacement and engineering scale are not verified.`)}catch(Ee){Re.current&&Fe(Ee instanceof Error?Ee.message:"DXF export failed; no CAD output was confirmed.")}finally{Re.current&&Me(!1)}},Ie=M.useMemo(()=>u.find(F=>F.id===x)??null,[u,x]),it=M.useMemo(()=>{if(!x||!C)return[];try{const Ee=wi(a==="PFD"?"pfd":"pid").find(Se=>Se.sourcePdfId===x)?.rows.find(Se=>Se.id===C);return(Ee?.sourceLocations??[]).filter(Se=>Se.pageNumber===X).map(Se=>({id:Ee.id,label:Ee.itemTag,location:Se}))}catch{return[]}},[a,X,x,k,C]),je=u.reduce((F,be)=>F+be.pageCount,0),We=T!==null,lt=Math.min(100,w/Dp*100);return c.jsxs("section",{className:"pdf-workflow","aria-labelledby":"pdf-workflow-title","data-testid":"panel-pdf-workflow",children:[c.jsxs("div",{className:"pdf-panel-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"pdf-kicker",children:["PDF INPUT · LOCAL SOURCE FILES · ",a]}),c.jsx("h2",{id:"pdf-workflow-title",children:"Source PDF files"}),c.jsxs("p",{children:["Add PDFs for this ",a," workspace. They stay in this browser and appear as PDF 1, PDF 2, and so on."]})]}),c.jsxs("div",{className:"pdf-actions",children:[c.jsxs("label",{className:"btn primary pdf-add-control","data-testid":"label-add-pdfs",children:[c.jsx(qm,{size:15})," Add PDFs",c.jsx("input",{type:"file",accept:"application/pdf,.pdf",multiple:!0,"aria-label":"Add PDF files",disabled:We||y||!!b||!Vt,onChange:F=>{Cn(Array.from(F.currentTarget.files??[])),F.currentTarget.value=""},"data-testid":"input-add-pdfs"})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>oe({type:"all"}),disabled:!u.length,"aria-label":"Clear all saved PDFs","data-testid":"button-clear-pdfs",children:[c.jsx(gi,{size:14})," Clear all"]})]})]}),c.jsxs("div",{className:"pdf-trust-note","data-testid":"text-pdf-local-only",children:[c.jsx(Zn,{size:15}),c.jsxs("div",{className:"pdf-trust-copy",children:[c.jsxs("span",{children:[c.jsx("strong",{children:"Saved on this device only."})," PDFs are not uploaded, backed up, or synced. Clearing browser data removes them.",!Vt&&" New PDFs cannot be added in this browser because duplicate checking needs a secure connection."]}),c.jsxs("details",{className:"pdf-privacy-details",children:[c.jsx("summary",{children:"Privacy and scanned PDFs"}),c.jsxs("p",{children:["Original PDFs are not changed. Searchable text and scanned pages are read in this browser. The OCR code and language files may be downloaded, but the PDF itself is not sent. PDF aliases hide file names only; names and logos printed inside the pages remain visible."," ","Download an original if you need a separate copy."]})]})]})]}),c.jsx(pS,{}),c.jsxs("div",{className:"pdf-storage-line","data-testid":"text-pdf-storage",children:[c.jsxs("span",{children:[Nr(w)," of ",Nr(Dp)," used (all disciplines)"]}),c.jsxs("span",{children:["Limit ",Nr(Ap)," per PDF"]})]}),c.jsx("div",{className:"pdf-meter",role:"progressbar","aria-label":"Local storage used","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(lt),children:c.jsx("span",{style:{width:`${lt}%`}})}),c.jsx("div",{style:{height:12}}),T&&c.jsxs("div",{className:"pdf-progress",role:"status","aria-live":"polite","data-testid":"status-pdf-progress",children:[c.jsxs("div",{className:"pdf-progress-top",children:[c.jsxs("span",{children:[c.jsx(ka,{size:12,className:"pdf-spin"})," ",T.phase==="checking"?`Checking and saving: ${T.done} of ${T.total} file(s) finished · ${T.pagesDone} page(s) verified`:`${T.currentAlias??"PDF"} · reading page ${T.pageNow??0} of ${T.pageTotal??0} for EDE`]}),c.jsx("button",{type:"button",className:"btn",onClick:Rn,"data-testid":"button-cancel-import","aria-label":"Cancel remaining imports",children:"Cancel"})]}),c.jsx("div",{className:"pdf-meter",children:c.jsx("span",{style:{width:`${T.phase==="checking"?T.done/T.total*100:(T.done+(T.pageTotal?(T.pageNow??0)/T.pageTotal:0))/T.total*100}%`}})})]}),D.length>0&&c.jsx("ul",{className:"pdf-notes","aria-live":"polite","data-testid":"list-pdf-notes",children:D.map(F=>c.jsxs("li",{className:F.kind==="info"?"info":"",role:F.kind==="error"?"alert":void 0,"data-testid":`status-pdf-note-${F.id}`,children:[F.kind==="error"?c.jsx(Ir,{size:14}):c.jsx(Kn,{size:14}),c.jsx("span",{children:F.text}),c.jsx("button",{type:"button","aria-label":"Dismiss message",onClick:()=>S(be=>be.filter(Ee=>Ee.id!==F.id)),children:c.jsx(Ju,{size:13})})]},F.id))}),u.length>0&&c.jsxs("div",{className:"pdf-batch-controls","data-testid":"pdf-batch-controls",children:[c.jsxs("div",{className:"pdf-batch-controls-copy",children:[c.jsx("strong",{children:"Choose PDFs for AutoCAD"}),c.jsxs("span",{"aria-live":"polite","data-testid":"text-pdf-batch-selection-count",children:[at.length," of ",u.length," selected"]}),c.jsx("small",{children:"Only checked PDFs go into the runner. Select one or several."})]}),c.jsxs("div",{className:"pdf-batch-control-actions",children:[c.jsx("button",{type:"button",className:"btn",onClick:ja,disabled:We||$,"data-testid":"button-select-all-pdfs",children:"Select all"}),c.jsx("button",{type:"button",className:"btn",onClick:Gt,disabled:We||$,"data-testid":"button-deselect-all-pdfs",children:"Deselect all"})]})]}),u.length>0&&at.length===0&&c.jsx("p",{className:"pdf-batch-empty",role:"status","data-testid":"status-no-pdfs-selected",children:"No PDFs selected. Use Select all or tick a PDF row before downloading the runner."}),c.jsxs("div",{className:"pdf-queue","aria-label":"Saved PDF files",children:[pe&&c.jsxs("div",{className:"pdf-confirm",role:"alertdialog","aria-label":"Confirm delete","data-testid":"dialog-confirm-delete",children:[c.jsx("span",{children:pe.type==="all"?`Delete all ${u.length} saved ${a} PDF(s) from this device? This cannot be undone.`:"Delete this PDF from this device? This cannot be undone."}),c.jsx("button",{type:"button",className:"btn danger","data-testid":"button-confirm-delete",onClick:()=>pe.type==="all"?void Ea():void va(pe.id),children:"Delete"}),c.jsx("button",{type:"button",className:"btn","data-testid":"button-cancel-delete",onClick:()=>oe(null),children:"Keep"})]}),y?c.jsxs("div",{className:"pdf-queue-empty",role:"status","data-testid":"status-pdf-loading",children:[c.jsx(ka,{size:16,className:"pdf-spin"})," Loading saved PDFs"]}):b?c.jsxs("div",{className:"pdf-queue-empty",role:"alert","data-testid":"status-pdf-load-error",children:[c.jsx(Ir,{size:16})," ",b,c.jsx("button",{type:"button",className:"btn",onClick:()=>{p(!0),At()},"data-testid":"button-retry-load",children:"Try again"})]}):u.length?u.map(F=>c.jsxs("div",{className:`pdf-file-row${F.id===x?" is-selected":""}`,"data-testid":`row-pdf-file-${F.id}`,children:[c.jsxs("button",{type:"button",className:"pdf-select",onClick:()=>{O(F.id),P(null),ae(1)},"aria-label":`Preview ${F.alias}`,"aria-pressed":F.id===x,"data-testid":`button-select-pdf-${F.id}`,children:[c.jsx("span",{className:"pdf-file-icon",children:c.jsx(Kn,{size:17})}),c.jsxs("span",{className:"pdf-file-details",children:[c.jsx("strong",{className:"pdf-filename","data-testid":`text-pdf-name-${F.id}`,children:F.alias}),c.jsxs("span",{className:"pdf-file-meta",children:[F.pageCount," page(s) · ",Nr(F.size)," · saved locally"]}),c.jsxs("span",{className:"pdf-analysis-state","data-testid":`status-ede-${F.id}`,children:["EDE: ",F.analysisStatus==="needs-review"?`${F.analysisRecordCount??0} candidate(s) · review required`:F.analysisStatus==="no-tags"?"No tag candidates found":F.analysisStatus==="extracting"?_===F.id?"Extraction in progress":"Paused · resume available":F.analysisStatus==="failed"?"Extraction failed":F.analysisStatus==="paused"?"Paused · resume available":"Not extracted yet"," · AutoCAD: not connected"]}),F.analysisStatus==="failed"&&F.analysisMessage&&c.jsx("span",{className:"pdf-analysis-state",role:"status",children:F.analysisMessage})]})]}),c.jsxs("span",{className:"pdf-row-actions",children:[c.jsxs("label",{className:"pdf-batch-choice",children:[c.jsx("input",{type:"checkbox",checked:z2(f,F.id),disabled:We||$,onChange:()=>wt(F.id),"aria-label":`Process ${F.alias} in the AutoCAD batch`,"data-testid":`checkbox-batch-pdf-${F.id}`}),c.jsx("span",{children:"Process"})]}),F.analysisStatus!=="needs-review"&&_!==F.id&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:We,onClick:()=>{Ra(F)},"data-testid":`button-extract-ede-${F.id}`,children:[c.jsx(Kn,{size:13})," ",F.analysisStatus==="failed"?"Retry EDE":F.analysisStatus==="paused"||F.analysisStatus==="extracting"?"Resume EDE":"Create EDE data"]}),(F.analysisStatus==="needs-review"||F.analysisStatus==="no-tags")&&c.jsx(ga,{className:"btn pdf-extract-btn",href:`/workspace/${a==="PFD"?"pfd":"pid"}/engineering-data?source=${encodeURIComponent(F.id)}`,children:"Open EDE"}),F.analysisStatus==="needs-review"&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:We,onClick:()=>{Ra(F)},"data-testid":`button-refresh-source-links-${F.id}`,children:[c.jsx(Uw,{size:13})," Recheck tags & locations"]}),_===F.id&&c.jsxs("span",{className:"pdf-running-label",children:[c.jsx(ka,{size:13,className:"pdf-spin"})," Reading"]}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Preview ${F.alias}`,onClick:()=>{O(F.id),P(null),ae(1)},"data-testid":`button-preview-pdf-${F.id}`,children:c.jsx(Ew,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Download original source ${F.alias}`,onClick:()=>{Ot(F)},"data-testid":`button-download-pdf-${F.id}`,children:c.jsx(_r,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn danger","aria-label":`Remove ${F.alias}`,onClick:()=>oe({type:"one",id:F.id}),"data-testid":`button-remove-pdf-${F.id}`,children:c.jsx(Ju,{size:15})})]})]},F.id)):c.jsxs("div",{className:"pdf-queue-empty","data-testid":"empty-pdf-queue",children:[c.jsx(Kn,{size:18}),c.jsxs("span",{children:["No saved PDFs for ",a]}),c.jsx("small",{children:"Add PDFs to keep them on this device. You can add several at once."})]})]}),c.jsx("div",{className:"pdf-page-summary",style:{marginTop:10},"data-testid":"text-pdf-page-summary",children:u.length?`${u.length} PDF(s) · ${je} total page(s)`:We?"Working on your files":"No readable PDFs saved yet"}),u.length>=100&&c.jsxs("div",{className:"pdf-trust-note",role:"note","data-testid":"text-large-batch-resume",children:[c.jsx(Zn,{size:15}),c.jsxs("span",{children:["This batch contains ",u.length," PDFs and ",je," pages. The AutoCAD runner tracks every page in a local journal beside the DWGs, so you can resume later with the same unchanged kit and output name. Progress is recorded on the Windows workstation, not in this browser."]})]}),Ie&&c.jsxs("div",{className:"pdf-source-box","data-testid":"panel-source-page",children:[c.jsxs("div",{className:"pdf-page-select",children:[c.jsx("label",{htmlFor:"pdf-page-picker",children:"Source page"}),c.jsx("select",{id:"pdf-page-picker",value:X,onChange:F=>ae(Number(F.target.value)),"data-testid":"select-source-page","aria-label":"Select source page",children:Array.from({length:Ie.pageCount},(F,be)=>c.jsxs("option",{value:be+1,children:["Page ",be+1]},be+1))}),c.jsxs("span",{children:["of ",Ie.pageCount," in ",Ie.alias]})]}),c.jsx($1,{fileId:Ie.id,alias:Ie.alias,pageCount:Ie.pageCount,page:X,onPageChange:ae,loadBytes:ti,markers:it,onMarkerClick:F=>{const be=a==="PFD"?"pfd":"pid";window.location.assign(`/workspace/${be}/engineering-data?source=${encodeURIComponent(Ie.id)}&record=${encodeURIComponent(F)}`)}})]}),c.jsxs("div",{className:"pdf-capabilities",children:[c.jsxs("div",{className:"pdf-capability-storage pdf-dxf-export",children:[c.jsx("div",{className:"capability-heading",children:c.jsx("strong",{children:"Create DXF — no AutoCAD needed"})}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Scale multiplier · 1 = PDF paper size in mm"}),c.jsx("input",{type:"number",min:"0.000001",step:"any",value:Be,onChange:F=>ya(F.target.value),"aria-label":"DXF scale multiplier"})]}),c.jsx("button",{className:"btn primary",type:"button",disabled:!u.length||We||y||ye||$||!!b,onClick:()=>{me(Ie??void 0)},"data-testid":"button-export-dxf",children:ye?c.jsxs(c.Fragment,{children:[c.jsx(ka,{size:14,className:"pdf-spin"})," Creating DXF…"]}):c.jsxs(c.Fragment,{children:[c.jsx(_r,{size:14})," ",Ie?`${Ie.alias} · Download DXF pages`:"Download all DXF pages"]})}),Ie&&u.length>1&&c.jsx("button",{className:"btn",type:"button",disabled:We||y||ye||$||!!b,onClick:()=>{me()},"data-testid":"button-export-all-dxf",children:"All PDFs · Download DXF pages"}),c.jsx("p",{children:"One editable DXF per vector PDF page. Scanned pages are not automatically traced. This exports raw PDF geometry, not library-standard symbols. Source details may remain—review/redact before sharing."}),et&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:et}),c.jsx(SS,{})]}),c.jsxs("div",{className:"pdf-capability-convert",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"01"}),c.jsx("strong",{children:"Page check"})]}),c.jsx("div",{className:"pdf-page-summary","data-testid":"text-pdf-page-summary",children:u.length?`${u.length} PDF(s) · ${je} total page(s)`:"Add PDFs to prepare an AutoCAD runner."})]}),c.jsxs("div",{className:"pdf-capability-storage",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"02"}),c.jsx("strong",{children:"Local AutoCAD runner"})]}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Approved CAD mappings"}),c.jsxs("select",{value:ne,disabled:dt,onChange:F=>Y(F.target.value),"aria-label":"Approved CAD mappings for this runner",children:[c.jsx("option",{value:"",children:"Legends Library only"}),xe.map(F=>c.jsx("option",{value:F.id,children:F.label},F.id))]})]}),c.jsxs("div",{className:"runner-group-hint","aria-live":"polite","data-testid":"runner-mapping-inventory",children:[de?c.jsxs(c.Fragment,{children:[c.jsxs("strong",{children:[de.symbols," usable approved blocks · ",de.layers," layers · ",de.textStyles," Legends text styles for ",a]}),de.symbols===0&&c.jsxs("p",{role:"status",children:["No compatible approved blocks: this kit cannot convert PDF symbols into approved CAD blocks. Approve ",a," or Shared symbols with an approved target layer first. Other-discipline symbols are not reused automatically."]}),de.textStyles===0&&c.jsx("p",{children:"The runner uses the fixed global Arial Narrow style automatically; imported text height and position stay unchanged. Unconfirmed PDF text stays visible for review, and loose text needs an approved final text layer after review."}),de.otherDisciplineSymbols>0&&c.jsxs("p",{children:[de.otherDisciplineSymbols," approved symbol(s) belong to the other discipline and are excluded."]})]}):c.jsx("p",{children:"The mapping library could not be checked. Do not assume blocks or text formatting are available."}),c.jsx("button",{type:"button",className:"btn btn-ghost btn-small",onClick:()=>B(F=>F+1),children:"Refresh mapping counts"}),V&&c.jsxs("p",{role:"status",children:["Local mapping counts checked at ",V,". Refresh recounts saved approvals; it does not approve symbols."]})]}),c.jsxs("label",{className:"runner-group-choice",children:[c.jsxs("span",{children:[a," client folder for this batch"]}),c.jsxs("select",{value:Z,disabled:!Tt.length||dt||$,onChange:F=>l(F.target.value),"aria-label":`${a} client folder for title block`,children:[c.jsx("option",{value:"",children:Tt.length?`Choose a ${a} client folder`:`Create a ${a} client folder first`}),Tt.map(F=>c.jsx("option",{value:F.id,children:F.label},F.id))]})]}),c.jsx("p",{className:"runner-group-hint",children:"Choose the client folder for this batch. All selected PDFs will use its title block, so select PDFs from one project."}),Z?c.jsxs("div",{className:"runner-title-block","aria-label":"Project title block",children:[c.jsxs("div",{className:"runner-title-block-heading",children:[c.jsxs("strong",{children:["Client title block",o&&Z===s?` · ${o}`:""]}),bt?c.jsx("span",{children:"Checking this browser…"}):Pe?c.jsxs("span",{children:["Saved locally · ",Nr(Pe.bytes)]}):c.jsx("span",{children:"Required for this project"})]}),!bt&&!Pe&&c.jsx("p",{children:"Upload a standalone .DWG for this project. The runner attaches it as a model-space XREF at (0,0,0), rotation 0, scale 1:1, preserving its layers. Use matching drawing units."}),c.jsx("input",{ref:Ye,className:"runner-title-block-file",type:"file",accept:".dwg,application/acad","aria-label":"Choose project title block DWG",onChange:F=>{jt(F.currentTarget.files?.[0])}}),c.jsxs("div",{className:"runner-title-block-actions",children:[c.jsx("button",{className:"btn",type:"button",disabled:bt||dt||$,onClick:()=>Ye.current?.click(),children:dt?c.jsxs(c.Fragment,{children:[c.jsx(ka,{size:14,className:"pdf-spin"})," Saving locally…"]}):c.jsxs(c.Fragment,{children:[c.jsx(qm,{size:14})," ",Pe?"Replace title block DWG":"Upload title block DWG"]})}),Pe&&c.jsx("button",{className:"btn",type:"button",disabled:dt||$,onClick:()=>{I()},children:"Remove"})]}),c.jsxs("p",{className:"runner-title-block-note",children:["The file stays in this browser and is added only to this ",a," workspace’s local runner. Use the same project output folder for future batches: all page DWGs reuse one PROJECT_TITLE_BLOCK.dwg by relative XREF. The runner keeps a local scope marker beside it; upload the shared DWG once, not the marker. Existing numbered copies are only reported, never deleted."]}),Ut&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:Ut})]}):c.jsx("p",{className:"runner-title-block-empty",children:Tt.length?`Select a ${a} client folder above to upload or use its title block.`:"Create a Technology, Project or Proposal, and Client folder to use a client title block."}),c.jsx(NS,{scope:`${a}:${ne||"legends-default"}`},`${a}:${ne}`),c.jsx("button",{className:"btn primary",type:"button",disabled:!at.length||!Z||!Pe||We||y||$||bt||dt||!!b,"aria-describedby":"runner-description",onClick:()=>{J()},"data-testid":"button-convert-to-dwg",children:$?c.jsxs(c.Fragment,{children:[c.jsx(ka,{size:14,className:"pdf-spin"})," Preparing…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Qw,{size:14})," Prepare AutoCAD batch runner"]})}),c.jsx("p",{id:"runner-description",children:"The ZIP contains only the checked PDFs, individually exported approved blocks, and the selected project’s one shared title-block DWG XREF. A project folder and its saved title block are required for automatic 841 × 594 mm scaling. It does not include original mapping source DWGs. Run it in Windows AutoCAD. Unmatched symbols retain source geometry or use an approved same-category fallback with a red review cloud and source-page reference. A local journal tracks each page and lets the same unchanged batch resume without overwriting completed DWGs."}),kt&&c.jsxs("div",{className:"pdf-runner-download-ready","data-testid":"prepared-runner-download",children:[c.jsxs("div",{className:"pdf-runner-download-copy",children:[c.jsx("strong",{children:"Runner ZIP ready to save"}),c.jsxs("span",{children:[kt.filename," · ",Nr(kt.bytes)," · ",kt.sourceCount," PDF(s) · ",kt.pageCount," page(s)"]})]}),c.jsxs("a",{className:"btn primary",href:kt.url,download:kt.filename,"data-testid":"button-download-prepared-runner",onClick:()=>z(`Browser download requested for ${kt.filename}. If the ZIP does not appear, click Download ZIP again or check your browser's Downloads list.`),children:[c.jsx(_r,{size:14})," Download ZIP"]})]}),he&&c.jsx("p",{role:"status","aria-live":"polite",className:"pdf-runner-message",children:he})]})]}),c.jsxs("div",{className:"pdf-final-status",role:"note","data-testid":"text-conversion-unavailable",children:[c.jsxs("strong",{children:[c.jsx(Mw,{size:13,style:{verticalAlign:"-2px"}})," AutoCAD 2020 is not connected to this browser."]})," ","DXF vector export runs directly in this browser. Native DWG still requires the downloaded helper to run in Windows AutoCAD; the browser does not connect to AutoCAD."]}),c.jsx(CA,{discipline:a,onAddPdfs:Cn,clientFolderId:s||void 0,clientFolderLabel:o||void 0})]})}function Ky({discipline:a}){const[r]=M.useState(()=>{try{return{hierarchy:k1(),recovery:null}}catch(oe){const ne=oe instanceof ui?oe:new ui("Saved groups could not be loaded from this browser.");return{hierarchy:ep(),recovery:{message:ne.message,rawValue:ne.rawValue}}}}),[s,o]=M.useState(r.hierarchy),[l,u]=M.useState(r.recovery),[m,f]=M.useState(""),[g,y]=M.useState(null),[p,b]=M.useState(""),[v,w]=M.useState(null),R=s[a],D=a==="pfd"?"PFD":"P&ID",S=np(R,v),T=S&&(S.kind==="client"||S.kind==="legacy")?S.id:"",L=T?jb(R).find(oe=>oe.id===T)?.label??S?.name??"":"",_=oe=>w(oe||null);M.useEffect(()=>{if(!l)try{O1(s),f("")}catch(oe){f(oe instanceof Error?oe.message:"Groups could not be saved in this browser.")}},[s,l]);const N=(oe,ne,Y=[])=>({id:globalThis.crypto?.randomUUID?.()??`group-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:oe,kind:ne,expanded:!0,children:Y}),x=(oe,ne)=>{b(ne),y(oe)},O=()=>{const oe=N("New technology","technology",[N("Projects","projects"),N("Proposals","proposals")]);o(ne=>({...ne,[a]:[...ne[a],oe]})),x(oe.id,oe.name),w(oe.id)},C=oe=>{const ne=np(R,oe);if(!ne)return;const Y=ne.kind==="projects"?"project":ne.kind==="proposals"?"proposal":ne.kind==="project"||ne.kind==="proposal"?"client":null;if(!Y)return;const ge=N(Y==="project"?"New project":Y==="proposal"?"New proposal":"New client",Y);o(xe=>({...xe,[a]:Hl(xe[a],oe,j=>({...j,expanded:!0,children:[...j.children,ge]}))})),x(ge.id,ge.name),w(ge.id)},P=oe=>{const ne=p.trim();if(!ne||ne.length>Ql){f(`Folder names must be 1–${Ql} characters.`),y(null);return}o(Y=>({...Y,[a]:Hl(Y[a],oe,Z=>({...Z,name:ne}))})),y(null),f("")},k=()=>y(null),te=oe=>o(ne=>({...ne,[a]:Hl(ne[a],oe,Y=>({...Y,expanded:!Y.expanded}))})),X=oe=>{window.confirm(`Delete “${oe.name}” and all folders inside it? Saved title blocks and CAD sources are not deleted.`)&&(kb(oe,v)&&w(null),Rv(oe,g)&&y(null),o(ne=>({...ne,[a]:Pb(ne[a],oe.id)})))},ae=()=>{if(l?.rawValue===null||l?.rawValue===void 0)return;const oe=new Blob([l.rawValue],{type:"application/json;charset=utf-8"}),ne=URL.createObjectURL(oe),Y=document.createElement("a");Y.href=ne,Y.download="mapping-studio-hierarchy-backup.json",Y.click(),window.setTimeout(()=>URL.revokeObjectURL(ne),1e3)},pe=()=>{if(window.confirm("Clear the unreadable hierarchy saved in this browser? This cannot be undone. Download a backup first if you may need the saved data."))try{window.localStorage.removeItem(Fp),window.localStorage.removeItem(Ib),o(ep()),u(null),f("")}catch{f("Browser storage could not be cleared. The saved hierarchy remains locked and unchanged.")}};return c.jsxs("main",{className:"hierarchy-page","data-discipline":a,children:[c.jsxs("header",{className:"hierarchy-topbar",children:[c.jsxs(ga,{href:"/",className:"studio-wordmark","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),c.jsxs("div",{className:"hierarchy-top-actions",children:[c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Saved on this device"]}),c.jsxs(ga,{href:"/",className:"btn subtle","data-testid":"link-discipline-selection",children:[c.jsx(cb,{size:14})," Disciplines"]})]})]}),c.jsxs("div",{className:"hierarchy-frame",children:[c.jsxs("aside",{className:"hierarchy-sidebar",children:[c.jsx("div",{className:"sidebar-label",children:"DISCIPLINES"}),c.jsxs(ga,{href:"/workspace/pfd",className:`discipline-nav ${a==="pfd"?"active":""}`,"data-testid":"nav-pfd",children:[c.jsx(Pw,{size:16})," PFD"]}),c.jsxs(ga,{href:"/workspace/pid",className:`discipline-nav ${a==="pid"?"active":""}`,"data-testid":"nav-pid",children:[c.jsx(si,{size:16})," P&ID"]}),c.jsxs("div",{className:"sidebar-local-note",children:[c.jsx(Zn,{size:14}),c.jsx("span",{children:"PFD and P&ID groups stay separate."})]})]}),c.jsxs("section",{className:"hierarchy-main","aria-label":`${D} workspace`,children:[c.jsxs("div",{className:"hierarchy-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[D," workspace"]}),c.jsx("h1",{children:D}),c.jsx("p",{children:"Organize technology, project/proposal and client folders. Common standards stay in the company library."})]}),c.jsxs("div",{className:"hierarchy-heading-actions",children:[c.jsxs(ga,{href:`/workspace/${a}/engineering-data`,className:"btn edm-entry-link","data-testid":`link-engineering-data-${a}`,children:[c.jsx(jp,{size:14})," Engineering data"]}),c.jsxs("button",{className:"btn primary",onClick:O,disabled:!!l,"data-testid":"button-add-group",children:[c.jsx(fi,{size:15})," New technology"]})]})]}),l&&c.jsxs("div",{className:"hierarchy-recovery",role:"alert","data-testid":"status-hierarchy-recovery",children:[c.jsxs("div",{className:"recovery-title",children:[c.jsx(Ir,{size:17}),c.jsx("strong",{children:"Saved groups need recovery"})]}),c.jsxs("p",{children:[l.message," Editing is disabled to protect the saved data."]}),l.rawValue!==null?c.jsx("button",{className:"btn",onClick:ae,"data-testid":"button-download-hierarchy-backup",children:"Download raw backup"}):c.jsx("p",{className:"recovery-unavailable",children:"A raw backup is unavailable because browser storage could not be read."}),c.jsx("button",{className:"btn danger",onClick:pe,"data-testid":"button-clear-hierarchy-storage",children:"Clear saved data and start over"})]}),m&&!l&&c.jsxs("div",{className:"storage-banner",role:"alert","data-testid":"status-hierarchy-storage",children:[c.jsx(Ir,{size:15}),m]}),c.jsxs("div",{className:"hierarchy-panel",children:[c.jsxs("div",{className:"tree-head",children:[c.jsx("span",{children:"TECHNOLOGY · PROJECTS · PROPOSALS · CLIENTS"}),c.jsxs("span",{"data-testid":"text-group-count",children:[ap(R)," ",ap(R)===1?"folder":"folders"]})]}),R.length===0?c.jsxs("div",{className:"hierarchy-empty","data-testid":"empty-hierarchy",children:[c.jsx("div",{className:"empty-folder",children:c.jsx(Ku,{size:23})}),c.jsx("strong",{children:l?"Folders are locked":"No technology folders yet"}),c.jsx("p",{children:l?"Recover or clear the saved data to continue.":"Create a technology folder, then add projects or proposals and their clients."}),!l&&c.jsxs("button",{className:"btn",onClick:O,"data-testid":"button-create-first-group",children:[c.jsx(fi,{size:14})," Create first technology"]})]}):c.jsx("div",{className:"tree-list",role:"tree","aria-label":`${D} project folders`,children:R.map(oe=>c.jsx(_v,{node:oe,depth:0,selectedId:v,editingId:g,editName:p,setEditName:b,onSelect:w,onToggle:te,onAdd:C,onRename:x,onCommit:P,onCancel:k,onDelete:X,disabled:!!l},oe.id))})]}),T&&c.jsxs("div",{className:"hierarchy-client-context",role:"status","data-testid":"selected-client-folder",children:[c.jsx(Ku,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:L})," selected. Its title block and client source library will be used below."]})]}),c.jsxs("div",{className:"hierarchy-footnote",children:[c.jsx(Zn,{size:14}),c.jsx("span",{children:"Saved in this browser. PFD and P&ID folder trees stay separate."})]}),c.jsx(aD,{discipline:a==="pfd"?"PFD":"P&ID",groups:R,selectedClientId:T,selectedClientLabel:L,onSelectClient:_},a)]})]})]})}function Rv(a,r){return r!==null&&(a.id===r||a.children.some(s=>Rv(s,r)))}function _v({node:a,depth:r,selectedId:s,editingId:o,editName:l,setEditName:u,onSelect:m,onToggle:f,onAdd:g,onRename:y,onCommit:p,onCancel:b,onDelete:v,disabled:w}){const R=o===a.id,D=["projects","proposals","project","proposal"].includes(a.kind),S=!["projects","proposals"].includes(a.kind),T=a.kind==="projects"?"Add project":a.kind==="proposals"?"Add proposal":a.kind==="project"||a.kind==="proposal"?"Add client":"Add folder",L={technology:"Technology",projects:"Projects",proposals:"Proposals",project:"Project",proposal:"Proposal",client:"Client",legacy:"Existing group"},_=M.useRef(null),N=()=>{_.current!==a.id&&(_.current=a.id,p(a.id))},x=()=>{_.current!==a.id&&(_.current=a.id,b())};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`tree-row ${s===a.id?"selected":""}`,role:"treeitem","aria-expanded":a.children.length?a.expanded:void 0,"aria-level":r+1,style:{"--tree-depth":r},"data-testid":`tree-group-${a.id}`,children:[c.jsx("button",{className:"tree-toggle","aria-label":`${a.expanded?"Collapse":"Expand"} ${a.name}`,disabled:w,onClick:()=>f(a.id),"data-testid":`button-toggle-group-${a.id}`,children:a.expanded?c.jsx(Rr,{size:15}):c.jsx(Op,{size:15})}),c.jsx(Ku,{className:"tree-folder",size:16}),R?c.jsx("input",{autoFocus:!0,maxLength:Ql,className:"tree-rename-input","aria-label":"Folder name",value:l,disabled:w,onChange:O=>u(O.target.value),onFocus:()=>{_.current=null},onBlur:N,onKeyDown:O=>{O.key==="Enter"&&N(),O.key==="Escape"&&(O.preventDefault(),x())},"data-testid":`input-rename-group-${a.id}`}):c.jsx("button",{className:"tree-name",disabled:w,onClick:()=>m(a.id),onDoubleClick:()=>S&&y(a.id,a.name),title:"Select folder; double-click to rename","data-testid":`button-select-group-${a.id}`,children:a.name}),c.jsx("span",{className:"tree-kind-badge",children:L[a.kind]}),c.jsxs("span",{className:"tree-actions",children:[D&&c.jsx("button",{"aria-label":`${T} under ${a.name}`,title:T,disabled:w,onClick:()=>g(a.id),"data-testid":`button-add-subgroup-${a.id}`,children:c.jsx(fi,{size:14})}),S&&c.jsx("button",{"aria-label":`Rename ${a.name}`,title:"Rename folder",disabled:w,onClick:()=>y(a.id,a.name),"data-testid":`button-rename-group-${a.id}`,children:c.jsx(Hw,{size:13})}),S&&c.jsx("button",{"aria-label":`Delete ${a.name}`,title:"Delete folder",disabled:w,onClick:()=>v(a),"data-testid":`button-delete-group-${a.id}`,children:c.jsx(gi,{size:13})})]})]}),a.expanded&&a.children.map(O=>c.jsx(_v,{node:O,depth:r+1,selectedId:s,editingId:o,editName:l,setEditName:u,onSelect:m,onToggle:f,onAdd:g,onRename:y,onCommit:p,onCancel:b,onDelete:v,disabled:w},O.id))]})}function nD({order:a,hidden:r,onChange:s}){const o=(l,u)=>{const m=[...a];[m[l],m[l+u]]=[m[l+u],m[l]],s(m,r)};return c.jsxs("details",{className:"edm-column-picker",children:[c.jsxs("summary",{children:["Columns (",a.length-r.length,")"]}),c.jsxs("div",{className:"edm-column-options",children:[c.jsx("p",{children:"Use these checkboxes to show or hide columns. The filter icon in each heading filters row values, including (Blanks), and does not hide the column."}),a.map((l,u)=>c.jsxs("div",{className:"edm-column-option",children:[c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:!r.includes(l),"aria-label":`Show ${Pt[l]}`,disabled:!r.includes(l)&&r.length===a.length-1,onChange:()=>s(a,r.includes(l)?r.filter(m=>m!==l):[...r,l])}),Pt[l]]}),c.jsx("button",{type:"button",disabled:u===0,onClick:()=>o(u,-1),"aria-label":`Move ${Pt[l]} up`,children:c.jsx(cw,{size:14})}),c.jsx("button",{type:"button",disabled:u===a.length-1,onClick:()=>o(u,1),"aria-label":`Move ${Pt[l]} down`,children:c.jsx(rw,{size:14})})]},l)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>s([...Xn],[]),children:"Reset columns"})]})]})}function Zy(a){const r=Math.min(272,window.innerWidth-16),s=Math.min(360,window.innerHeight-16),o=Math.max(8,Math.min(a.left,window.innerWidth-r-8)),l=a.bottom+4;return{top:l+s<=window.innerHeight-8?l:Math.max(8,a.top-s-4),left:o}}function Qy({label:a,options:r,selectedValues:s,onApply:o}){const l=M.useRef(null),u=M.useRef(null),m=M.useRef(null),[f,g]=M.useState(!1),[y,p]=M.useState(null),[b,v]=M.useState([]),[w,R]=M.useState(""),D=s!==void 0,S=M.useMemo(()=>r.map(C=>C.value),[r]),T=M.useMemo(()=>{const C=w.trim().toLowerCase();return C?r.filter(P=>(P.value||"(Blanks)").toLowerCase().includes(C)):r},[r,w]),L=r.reduce((C,P)=>C+Number(b.includes(P.value)),0),_=r.length>0&&L===r.length;M.useEffect(()=>{m.current&&(m.current.indeterminate=L>0&&L<r.length)},[b,r.length,L]),M.useEffect(()=>{if(!f)return;const C=()=>{const te=l.current?.getBoundingClientRect();te&&p(Zy(te))},P=te=>{const X=te.target;!u.current?.contains(X)&&!l.current?.contains(X)&&g(!1)},k=te=>{te.key==="Escape"&&g(!1)};return C(),document.addEventListener("pointerdown",P),document.addEventListener("keydown",k),window.addEventListener("resize",C),window.addEventListener("scroll",C,!0),()=>{document.removeEventListener("pointerdown",P),document.removeEventListener("keydown",k),window.removeEventListener("resize",C),window.removeEventListener("scroll",C,!0)}},[f]);const N=()=>{if(f){g(!1);return}const C=l.current?.getBoundingClientRect();C&&p(Zy(C)),v(s?[...s]:S),R(""),g(!0)},x=C=>{v(P=>P.includes(C)?P.filter(k=>k!==C):[...P,C])},O=()=>{o(b),g(!1)};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{ref:l,type:"button",className:`edm-column-filter-trigger${D?" active":""}`,title:`${D?"Filtered":"Filter"} ${a}`,"aria-label":`${D?"Edit filter for":"Filter"} ${a}`,"aria-expanded":f,onClick:N,"data-testid":`button-filter-${a.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[c.jsx(Iw,{size:12}),c.jsx(Rr,{size:10})]}),f&&y&&lc.createPortal(c.jsxs("div",{ref:u,className:"edm-column-filter-menu",style:{top:y.top,left:y.left},role:"dialog","aria-label":`${a} filter`,"data-testid":"menu-column-filter",children:[c.jsxs("strong",{className:"edm-column-filter-title",children:["Filter: ",a]}),c.jsxs("label",{className:"edm-column-filter-search",children:[c.jsx(hi,{size:14}),c.jsx("input",{value:w,onChange:C=>R(C.target.value),placeholder:"Search values…","aria-label":`Search ${a} values`})]}),c.jsxs("label",{className:"edm-column-filter-select-all",children:[c.jsx("input",{ref:m,type:"checkbox",checked:_,disabled:!r.length,onChange:()=>v(_?[]:S)}),c.jsx("span",{children:"Select all"})]}),c.jsxs("div",{className:"edm-column-filter-options",role:"group","aria-label":`${a} values`,children:[!T.length&&c.jsx("p",{className:"edm-column-filter-empty",children:r.length?"No matching values.":"No values in this drawing yet."}),T.map(C=>c.jsxs("label",{className:"edm-column-filter-option",children:[c.jsx("input",{type:"checkbox",checked:b.includes(C.value),onChange:()=>x(C.value)}),c.jsx("span",{children:C.value||"(Blanks)"}),c.jsx("small",{children:C.count})]},JSON.stringify(C.value)))]}),c.jsxs("div",{className:"edm-column-filter-actions",children:[c.jsx("button",{type:"button",className:"edm-column-filter-clear",disabled:!D,onClick:()=>{o(void 0),g(!1)},children:"Clear filter"}),c.jsx("span",{}),c.jsx("button",{type:"button",onClick:()=>g(!1),children:"Cancel"}),c.jsx("button",{type:"button",className:"apply",disabled:!r.length,onClick:O,children:"Apply"})]})]}),document.body)]})}function Iv(a){return{headers:["#","Object type",...a.fields.map(r=>Pt[r])],rows:a.rows.map((r,s)=>[s+1,r.type,...a.fields.map(o=>Sn(r,o))])}}function Lv(a){return a.groups.map(r=>{const s=new Map;for(const o of a.rows){const l=Sn(o,r)||"—";s.set(l,(s.get(l)??0)+1)}return{field:r,label:Pt[r],values:[...s].map(([o,l])=>({value:o,count:l}))}})}function rD(a){const r=Iv(a);return Tv(r.headers,r.rows)}async function sD(a,r){const{default:s}=await pn(async()=>{const{default:p}=await import("./exceljs.min-BBohMlGo.js").then(b=>b.e);return{default:p}},__vite__mapDeps([2,1])),o=new s.Workbook;o.creator="gaurav.cbiindia";const l=o.addWorksheet("Engineering data",{pageSetup:{orientation:"landscape",fitToPage:!0,fitToWidth:1,fitToHeight:0}}),u=Iv(a),m=Lv(a),f=u.headers.length;["Engineering Data Editor",`${r.discipline} · ${r.drawing}${r.revision?` · ${r.revision}`:""} · ${a.rows.length} records`,`Object type: ${r.filter} · Search: ${r.search||"(none)"} · Sort: ${r.sort}`,...m.map(p=>{const b=p.values.map(({value:v,count:w})=>`${v} (${w})`).join(" · ");return`${p.label}: ${b.length>1500?b.slice(0,1500)+"… (see Group summaries sheet)":b}`})].forEach((p,b)=>{const v=l.addRow([p]);l.mergeCells(v.number,1,v.number,f),v.height=b===0?30:32,v.getCell(1).font={name:"Calibri",size:b===0?16:10,bold:b===0,color:{argb:b===0?"FFF0F0E8":"FF405A55"}},v.getCell(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:b===0?"FF203940":"FFF9F8F2"}},v.getCell(1).alignment={vertical:"middle",wrapText:!0}});const y=l.addRow(u.headers);if(y.height=30,y.eachCell(p=>{p.font={name:"Calibri",bold:!0,size:10,color:{argb:"FF405A55"}},p.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFF0F1E9"}},p.alignment={vertical:"middle",wrapText:!0},p.border={bottom:{style:"thin",color:{argb:"FFD9DED5"}}}}),u.rows.forEach((p,b)=>{const v=l.addRow(p);v.height=30,v.eachCell({includeEmpty:!0},(w,R)=>{w.numFmt=R===1?"0":"@",w.font={name:R>2&&a.fields[R-3]==="itemTag"?"Consolas":"Calibri",size:10,color:{argb:"FF405A55"}},w.alignment={vertical:"middle",wrapText:!0},w.fill={type:"pattern",pattern:"solid",fgColor:{argb:b%2?"FFF2F5EE":"FFFBFAF6"}},w.border={right:{style:"thin",color:{argb:"FFECEEE8"}},bottom:{style:"thin",color:{argb:"FFE7E9E2"}}}})}),l.columns.forEach((p,b)=>{const v=a.fields[b-2];p.width=b===0?7:b===1?18:v==="notes"?52:v==="description"||v==="connection"?38:Math.max(18,u.headers[b].length+3)}),l.views=[{state:"frozen",ySplit:y.number,xSplit:2}],l.autoFilter={from:{row:y.number,column:1},to:{row:y.number+u.rows.length,column:f}},l.pageSetup.printTitlesRow=`${y.number}:${y.number}`,l.headerFooter.oddFooter="© gaurav.cbiindia | &P of &N",m.length){const p=o.addWorksheet("Group summaries");p.columns=[{header:"Group field",width:25},{header:"Value",width:42},{header:"Records",width:12}],m.forEach(b=>b.values.forEach(({value:v,count:w})=>p.addRow([b.label,v,w]))),p.getRow(1).font={bold:!0},p.views=[{state:"frozen",ySplit:1}],p.autoFilter="A1:C1"}return new Uint8Array(await o.xlsx.writeBuffer())}function Pv(a,r){const s=String(r==="type"?a.type:Sn(a,r));return s.trim()?s:""}function oD(a,r){const s=new Map;for(const o of a){const l=Pv(o,r);s.set(l,(s.get(l)??0)+1)}return[...s.entries()].map(([o,l])=>({value:o,count:l})).sort((o,l)=>o.value===""?l.value===""?0:1:l.value===""?-1:o.value.localeCompare(l.value,void 0,{numeric:!0,sensitivity:"base"}))}function Jy(a,r){return Object.entries(r).every(([s,o])=>o===void 0||o.includes(Pv(a,s)))}const iD=["All types",...Ei],lD=["type",...Xn],kv="pid-mapping-studio:engineering-column-widths:v1",Ip=44,Lp=720,cD=a=>a==="rowNumber"?44:a==="type"?154:a==="itemTag"?250:a==="notes"?300:a==="description"||a==="stableId"?220:a==="drawingRef"?180:a==="sourcePage"?100:a==="reviewStatus"?150:136;function dD(){try{const a=JSON.parse(window.localStorage.getItem(kv)??"{}");return!a||typeof a!="object"||Array.isArray(a)?{}:Object.fromEntries(Object.entries(a).filter(r=>typeof r[1]=="number"&&Number.isFinite(r[1])).map(([r,s])=>[r,Math.max(Ip,Math.min(Lp,s))]))}catch{return{}}}function eb(a){try{window.localStorage.setItem(kv,JSON.stringify(a))}catch{}}const uD=a=>a.split(/\s+/).map(r=>r[0]).join("").slice(0,2).toUpperCase();function tb({discipline:a}){const[r]=M.useState(()=>{try{return{drawings:wi(a),raw:Ks(a),error:""}}catch{return{drawings:[],raw:null,error:"Saved engineering data could not be read. Editing is blocked to protect it. Export a raw backup before recovery."}}}),[s,o]=M.useState(r.drawings),l=M.useRef(s),u=M.useRef(!0),m=M.useRef(r.raw),[f,g]=M.useState(s[0]?.id??""),y=s.find(I=>I.id===f)??s[0]??{id:"",name:"No drawing selected",revision:"",rows:[]};M.useEffect(()=>{const I=new URLSearchParams(window.location.search).get("source"),J=I?s.find(me=>me.sourcePdfId===I):void 0;J&&J.id!==f&&g(J.id)},[s,f]),M.useEffect(()=>{j({}),O(""),te("All types"),ae(0)},[f,a]);const p=y.rows,[b,v]=M.useState(p[0]?.id??""),[w,R]=M.useState(""),[D,S]=M.useState("Rev 0"),[T,L]=M.useState(""),[_,N]=M.useState("Equipment"),[x,O]=M.useState(""),[C,P]=M.useState(""),[k,te]=M.useState("All types"),[X,ae]=M.useState(0),[pe,oe]=M.useState(12),[ne,Y]=M.useState({field:"itemTag",direction:1}),[Z,ge]=M.useState([]),[xe,j]=M.useState({}),[ee,B]=M.useState([...Xn]),[V,ie]=M.useState([]),[de,ve]=M.useState(dD),Pe=M.useRef(de),ke=M.useRef(null),bt=M.useRef(null),[rt,dt]=M.useState("records"),ht=ee.filter(I=>!V.includes(I)),Ut=["rowNumber","type",...ht],vt=I=>de[I]??cD(I),$=Ut.reduce((I,J)=>I+vt(J),0),[fe,he]=M.useState(!1),[z,ue]=M.useState(""),[Ne,ye]=M.useState(""),[Me,et]=M.useState(r.error),Fe=(I,J,me=!1)=>{const Ie={...Pe.current,[I]:Math.max(Ip,Math.min(Lp,Math.round(J)))};Pe.current=Ie,ve(Ie),me&&eb(Ie)},Be=I=>{const J=document.createElement("canvas").getContext("2d"),me=ke.current?getComputedStyle(ke.current).font:"";J&&(J.font=me||"12px sans-serif");const Ie=I==="rowNumber"?"#":I==="type"?"Object type":Pt[I],it=I==="rowNumber"?[]:I==="type"?p.map(F=>F.type):p.map(F=>Sn(F,I)),je=F=>F.split(/\r?\n/).reduce((be,Ee)=>Math.max(be,J?J.measureText(Ee||"—").width:Ee.length*7),0),We=it.reduce((F,be)=>Math.max(F,je(be)),je(Ie));Fe(I,We+(I==="itemTag"?158:I==="rowNumber"?18:54),!0)},ya=(I,J)=>{J.preventDefault(),J.stopPropagation(),J.currentTarget.setPointerCapture(J.pointerId),bt.current={column:I,pointerId:J.pointerId,startX:J.clientX,startWidth:vt(I)}},we=(I,J)=>{const me=bt.current;!me||me.column!==I||me.pointerId!==J.pointerId||(J.preventDefault(),Fe(I,me.startWidth+J.clientX-me.startX))},Ye=(I,J)=>{const me=bt.current;!me||me.column!==I||me.pointerId!==J.pointerId||(bt.current=null,eb(Pe.current),J.currentTarget.hasPointerCapture(J.pointerId)&&J.currentTarget.releasePointerCapture(J.pointerId))},Re=(I,J)=>{J.key==="Enter"?(J.preventDefault(),Be(I)):(J.key==="ArrowLeft"||J.key==="ArrowRight")&&(J.preventDefault(),Fe(I,vt(I)+(J.key==="ArrowRight"?16:-16),!0))},aa=(I,J)=>c.jsx("span",{className:"edm-column-resize-handle",role:"separator","aria-orientation":"vertical","aria-label":`Resize ${J} column`,"aria-valuenow":vt(I),"aria-valuemin":Ip,"aria-valuemax":Lp,title:"Drag to resize · double-click to fit text",tabIndex:0,onPointerDown:me=>ya(I,me),onPointerMove:me=>we(I,me),onPointerUp:me=>Ye(I,me),onPointerCancel:me=>Ye(I,me),onDoubleClick:me=>{me.preventDefault(),me.stopPropagation(),Be(I)},onKeyDown:me=>Re(I,me),"data-testid":`resize-column-${I}`});M.useEffect(()=>{u.current=!0;const I=J=>{if(J.key===`pid-mapping-studio:engineering-workspace:v2:${a}`)try{const me=wi(a);l.current=me,o(me),m.current=Ks(a),et("")}catch{et("Saved data changed and could not be read. Reload this page before editing.")}};return window.addEventListener("storage",I),()=>{u.current=!1,window.removeEventListener("storage",I)}},[a]);const Oe=p.find(I=>I.id===b)??null;M.useEffect(()=>{const I=new URLSearchParams(window.location.search).get("record");if(!I)return;let J=I;try{J=Xp(I)}catch{}const me=p.find(Ie=>Ie.id===J);me&&me.id!==b&&v(me.id)},[p,b]);const Oa=M.useMemo(()=>{const I=x.trim().toLowerCase();return Object.fromEntries(lD.map(J=>{const me={...xe};delete me[J];const Ie=p.filter(it=>(k==="All types"||it.type===k)&&(!I||Object.values(it).join(" ").toLowerCase().includes(I))&&Jy(it,me));return[J,oD(Ie,J)]}))},[p,x,k,xe]),Bt=M.useMemo(()=>{const I=x.trim().toLowerCase();return p.filter(J=>(k==="All types"||J.type===k)&&(!I||Object.values(J).join(" ").toLowerCase().includes(I))&&Jy(J,xe))},[p,x,k,xe]),Vt=M.useMemo(()=>[...Bt].sort((I,J)=>{for(const me of Z){const Ie=Sn(I,me).localeCompare(Sn(J,me)||"—",void 0,{numeric:!0});if(Ie)return Ie}return Sn(I,ne.field).localeCompare(Sn(J,ne.field),void 0,{numeric:!0})*ne.direction}),[Bt,ne,Z]),Tt=Math.max(1,Math.ceil(Vt.length/pe)),at={fields:ht,rows:Vt,groups:Z},ba=Lv(at),kt=Vt.slice(X*pe,(X+1)*pe);M.useEffect(()=>{kt.length&&!kt.some(I=>I.id===b)?v(kt[0].id):!kt.length&&b&&v("")},[kt,b]),M.useEffect(()=>ae(I=>Math.min(I,Tt-1)),[Tt]);const ja=I=>{if(r.error)return!1;try{return m.current=Cp(a,I,m.current),l.current=I,o(I),et(""),!0}catch(J){return et(J instanceof Error&&J.name!=="QuotaExceededError"?J.message:"Device storage is full or unavailable. This change was not saved. Download a backup and free space."),!1}},Gt=I=>ja(s.map(J=>J.id===y.id?{...J,rows:I}:J)),wt=(I,J,me)=>{Gt(p.map(Ie=>Ie.id===I?{...Ie,[J]:me}:Ie))},_t=I=>{I.preventDefault();const J=w.trim();if(!J||s.some(Ie=>Ie.name.toLowerCase()===J.toLowerCase())){et("Enter a new, unique drawing reference.");return}const me={id:crypto.randomUUID(),name:J,revision:D.trim()||"Rev 0",rows:[]};ja([...s,me])&&(g(me.id),R(""),ae(0))},At=I=>{if(I.preventDefault(),!y.id)return;const J=Wp(_,T,y.name);if(Gt([...p,J])){L(""),O(""),te("All types"),Y({field:"itemTag",direction:1}),ge([]);const me=[...p,J].sort((Ie,it)=>Ie.itemTag.localeCompare(it.itemTag,void 0,{numeric:!0})).findIndex(Ie=>Ie.id===J.id);ae(Math.floor(me/pe)),v(J.id)}},rn=()=>{!Oe||!window.confirm(`Delete record ${Oe.itemTag}? This cannot be undone without a backup.`)||Gt(p.filter(I=>I.id!==Oe.id))&&v("")},sn=async(I,J)=>{if(I.size>5*1024*1024){et("Import a file smaller than 5 MB.");return}try{const me=y.id,Ie=await I.text();if(!u.current)return;if(J==="csv"){const it=l.current.find(We=>We.id===me);if(!it)throw new Error("The target drawing no longer exists. Choose a drawing and try again.");const je=a2(Ie,it.name);ja(l.current.map(We=>We.id===me?{...We,rows:[...We.rows,...je]}:We))&&(O(""),te("All types"),ae(0))}else{const it=QA(Ie,a);ja([...l.current,...it])&&(g(it[0]?.id??y.id),ae(0))}}catch(me){et(me instanceof Error?me.message:"This file could not be imported. No records were changed.")}},Cn=I=>Y(J=>({field:I,direction:J.field===I&&J.direction===1?-1:1})),Ra=(I,J)=>{const me=Oa[I].map(it=>it.value),Ie=J!==void 0&&me.every(it=>J.includes(it))&&J.length===me.length;j(it=>{const je={...it};return J===void 0||Ie?delete je[I]:je[I]=J,je}),ae(0)},Rn=I=>ge(J=>J.includes(I)?J:[...J,I]),va=I=>{I.preventDefault();const J=I.dataTransfer.getData("text/engineering-field");Xn.includes(J)&&Rn(J)},Ea=I=>{const J=Math.max(0,Math.min(Tt-1,I));ae(J);const me=Vt.slice(J*pe,(J+1)*pe)[0];me&&v(me.id)},Ot=I=>{g(I),O(""),ae(0)},jt=async(I,J=!1)=>{if(fe)return;const me=J?{fields:Xn,rows:s.flatMap(je=>je.rows),groups:[]}:at,Ie=J?"all-records":"current-view",it={discipline:a==="pid"?"P&ID":"PFD",drawing:J?"All drawings":y.name,revision:J?void 0:y.revision,filter:J?"All types":k,search:J?"":x.trim(),sort:J?"Drawing order":`${Pt[ne.field]} ${ne.direction===1?"ascending":"descending"}`};he(!0),ue(""),ye("");try{const je=I==="csv"?rD(me):await sD(me,it);Bl(`engineering-${a}-${Ie}.${I}`,je,I==="csv"?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),u.current&&ue(`Prepared ${I==="csv"?"CSV":"Excel"}: ${me.rows.length} records · ${J?"all records":"current view"}.`)}catch(je){u.current&&ye(je instanceof Error?je.message:"Export could not be prepared. Your saved records have not changed.")}finally{u.current&&he(!1)}};return c.jsxs("main",{className:"edm-page","data-mobile-panel":rt,children:[c.jsxs("header",{className:"edm-topbar",children:[c.jsxs(ga,{href:`/workspace/${a}`,className:"edm-brand","data-testid":"link-edm-workspace",children:[c.jsx("span",{className:"edm-mark",children:"ED"}),c.jsxs("span",{children:["Engineering Data Manager",c.jsx("small",{children:"Mapping Studio / browser-local workspace"})]})]}),c.jsxs("div",{className:"edm-toplinks",children:[c.jsxs("nav",{className:"edm-disciplines","aria-label":"Discipline navigation",children:[c.jsx(ga,{href:"/workspace/pfd/engineering-data",className:a==="pfd"?"active":"","data-testid":"link-edm-pfd",children:"PFD"}),c.jsx(ga,{href:"/workspace/pid/engineering-data",className:a==="pid"?"active":"","data-testid":"link-edm-pid",children:"P&ID"})]}),c.jsxs("span",{className:"edm-local",children:[c.jsx(Zn,{size:13}),"Saved on this device"]}),c.jsxs(ga,{href:`/workspace/${a}`,className:"btn subtle","aria-label":"Back to the PFD or P&ID workspace","data-testid":"link-back-workspace",children:[c.jsx(cb,{size:13})," Workspace"]})]})]}),c.jsxs("nav",{className:"edm-mobile-tabs","aria-label":"Engineering data panels",children:[c.jsx("button",{type:"button",className:rt==="catalog"?"active":"","aria-pressed":rt==="catalog",onClick:()=>dt("catalog"),"data-testid":"tab-edm-catalog",children:"Catalog"}),c.jsx("button",{type:"button",className:rt==="records"?"active":"","aria-pressed":rt==="records",onClick:()=>dt("records"),"data-testid":"tab-edm-records",children:"Records"}),c.jsx("button",{type:"button",className:rt==="properties"?"active":"","aria-pressed":rt==="properties",onClick:()=>dt("properties"),"data-testid":"tab-edm-properties",children:"Properties"})]}),c.jsxs("div",{className:"edm-titlebar",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"edm-eyebrow",children:[a==="pfd"?"PROCESS FLOW DIAGRAM":"PIPING & INSTRUMENTATION"," / YOUR RECORDS"]}),c.jsx("h1",{children:"Engineering data"}),c.jsx("p",{children:"Add or import your records. PFD and P&ID stay separate on this device."})]}),c.jsxs("div",{className:"edm-object-select",children:[c.jsx("span",{children:"Object type"}),c.jsx("select",{value:k,onChange:I=>{te(I.target.value),ae(0)},"aria-label":"Object type filter","data-testid":"select-object-type",children:iD.map(I=>c.jsx("option",{children:I},I))}),c.jsx(Rr,{size:14})]})]}),c.jsxs("div",{className:"edm-file-actions",children:[c.jsxs("button",{className:"btn",disabled:!s.length,onClick:()=>Bl(`engineering-${a}-backup.json`,ZA(a,s),"application/json"),"data-testid":"button-backup-data",children:[c.jsx(_r,{size:14})," Download backup"]}),c.jsxs("label",{className:"btn",children:[c.jsx(es,{size:14})," Import backup",c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Import engineering backup",disabled:!!r.error,onChange:I=>{const J=I.currentTarget.files?.[0];I.currentTarget.value="",J&&sn(J,"backup")}})]}),c.jsx("button",{className:"btn",disabled:fe||!s.some(I=>I.rows.length),onClick:()=>{jt("csv",!0)},"data-testid":"button-report-all",children:"All records · CSV"}),c.jsx("button",{className:"btn",disabled:fe||!s.some(I=>I.rows.length),onClick:()=>{jt("xlsx",!0)},"data-testid":"button-report-all-excel",children:"All records · Excel"}),r.error&&c.jsx("button",{className:"btn",onClick:()=>{try{const I=Ks(a);I&&Bl(`engineering-${a}-raw.json`,I,"application/json")}catch{et("Device storage cannot be accessed. The saved data has not been changed.")}},children:"Export raw backup"}),r.error&&c.jsx("button",{className:"btn danger",onClick:()=>{if(window.confirm("Delete unreadable engineering data for this discipline? Download a raw backup first. This cannot be undone and does not delete PDFs or the old demo data."))try{window.localStorage.removeItem(`pid-mapping-studio:engineering-workspace:v2:${a}`),window.location.reload()}catch{et("Device storage cannot be cleared. The saved data has not been changed.")}},children:"Reset unreadable data"}),c.jsx("span",{children:"Local storage only · download backups regularly"})]}),c.jsxs("div",{className:"edm-workspace",children:[c.jsxs("aside",{className:"edm-catalog",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsxs("span",{children:[c.jsx(jp,{size:15})," Catalog"]}),c.jsx("span",{className:"edm-counter",children:s.length})]}),c.jsxs("div",{className:"edm-catalog-search",children:[c.jsx(hi,{size:13}),c.jsx("input",{"aria-label":"Filter drawings",placeholder:"Filter drawings…",value:C,onChange:I=>P(I.target.value),"data-testid":"input-catalog-filter"})]}),c.jsxs("div",{className:"edm-catalog-label",children:["DRAWINGS · ",a.toUpperCase()]}),c.jsxs("div",{className:"edm-drawing-list",children:[s.filter(I=>I.name.toLowerCase().includes(C.toLowerCase())).map(I=>c.jsxs("button",{className:`edm-drawing-item ${y.id===I.id?"selected":""}`,onClick:()=>Ot(I.id),"data-testid":`button-drawing-${I.id}`,children:[c.jsx(Kn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:I.name}),c.jsxs("small",{children:[I.revision," · ",I.rows.length," records"]})]})]},I.id)),!s.some(I=>I.name.toLowerCase().includes(C.toLowerCase()))&&c.jsx("div",{className:"edm-empty",children:"No drawings match."})]}),c.jsxs("form",{className:"edm-create-drawing",onSubmit:_t,children:[c.jsxs("label",{children:["Drawing reference",c.jsx("input",{value:w,onChange:I=>R(I.target.value),maxLength:160,required:!0,placeholder:"e.g. PID-001","aria-label":"New drawing reference","data-testid":"input-new-drawing"})]}),c.jsxs("label",{children:["Revision",c.jsx("input",{value:D,onChange:I=>S(I.target.value),maxLength:80,"aria-label":"New drawing revision"})]}),c.jsxs("button",{className:"btn primary",disabled:!!r.error,"data-testid":"button-add-drawing",children:[c.jsx(fi,{size:14})," Add drawing"]})]}),y.id&&c.jsxs("button",{className:"btn danger edm-delete-drawing",disabled:!!r.error,onClick:()=>{if(!window.confirm(`Delete drawing ${y.name} and its ${p.length} records? Download a backup first. This does not delete source PDFs.`))return;const I=s.filter(J=>J.id!==y.id);ja(I)&&(g(I[0]?.id??""),v(""),ae(0))},"data-testid":"button-delete-drawing",children:[c.jsx(gi,{size:14})," Delete drawing"]}),c.jsxs("div",{className:"edm-catalog-foot",children:["No invented sample records.",c.jsx("br",{}),"Source PDFs stay in your workspace."]})]}),c.jsxs("section",{className:"edm-main",children:[c.jsxs("section",{className:"edm-preview panel edm-source-summary",children:[c.jsxs("header",{children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"ACTIVE DRAWING RECORD"}),c.jsx("strong",{"data-testid":"text-active-drawing",children:y.name})]}),c.jsx("span",{className:"edm-revision",children:y.revision})]}),c.jsx("p",{children:y.sourcePdfId?`${y.sourceAlias??"PDF"} tag candidates and clearly labelled values are stored here. Every extracted record needs review. Blank fields mean the PDF text/OCR did not provide a clear value.`:"Add records manually or import them from CSV. New PDF tag candidates appear here with a source page and a review status."}),c.jsxs(ga,{href:y.sourcePdfId?`/workspace/${a}?pdf=${encodeURIComponent(y.sourcePdfId)}&page=${encodeURIComponent(y.rows.find(I=>I.sourcePdfId)?.sourcePage||"1")}#pdf-workflow-title`:`/workspace/${a}`,className:"btn subtle",children:[c.jsx(Kn,{size:14})," ",y.sourcePdfId?"Open source PDF page":"View original PDFs"]}),c.jsxs("div",{className:"edm-autocad-status",role:"note",children:[c.jsx("strong",{children:"AutoCAD 2020: not connected."})," EDE extraction does not create a DWG."]})]}),c.jsxs("section",{className:"edm-editor panel",children:[c.jsxs("div",{className:"edm-editor-title",children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"DATA WORKSPACE"}),c.jsx("h2",{children:"Engineering Data Editor"})]}),c.jsx("div",{className:"edm-type-chip",children:k})]}),c.jsxs("form",{className:"edm-add-record",onSubmit:At,children:[c.jsxs("label",{children:["Object type",c.jsx("select",{value:_,onChange:I=>N(I.target.value),"aria-label":"New record type",children:Ei.map(I=>c.jsx("option",{children:I},I))})]}),c.jsxs("label",{children:["Item tag",c.jsx("input",{value:T,onChange:I=>L(I.target.value),maxLength:160,required:!0,placeholder:"e.g. P-101","aria-label":"New item tag","data-testid":"input-new-tag"})]}),c.jsxs("button",{className:"btn primary",disabled:!y.id||!!r.error,"data-testid":"button-add-record",children:[c.jsx(fi,{size:14})," Add record"]})]}),c.jsxs("div",{className:"edm-report-actions",children:[c.jsxs("button",{className:"btn",disabled:fe||!Vt.length,onClick:()=>{jt("csv")},"data-testid":"button-export-report",children:[c.jsx(_r,{size:14})," Current view · CSV"]}),c.jsxs("button",{className:"btn",disabled:fe||!Vt.length,onClick:()=>{jt("xlsx")},"data-testid":"button-export-excel",children:[c.jsx(_r,{size:14})," Current view · Excel"]}),c.jsxs("label",{className:"btn",children:[c.jsx(es,{size:14})," Import CSV",c.jsx("input",{type:"file",accept:".csv,text/csv","aria-label":"Import engineering CSV",disabled:!y.id||!!r.error,onChange:I=>{const J=I.currentTarget.files?.[0];I.currentTarget.value="",J&&sn(J,"csv")}})]}),c.jsx("button",{className:"btn subtle",onClick:()=>Bl("engineering-import-template.csv",t2([]),"text/csv;charset=utf-8"),"data-testid":"button-csv-template",children:"CSV template"}),c.jsxs("button",{className:"btn danger",disabled:!Oe||!!r.error,onClick:rn,"data-testid":"button-delete-record",children:[c.jsx(gi,{size:14})," Delete selected"]})]}),c.jsxs("div",{className:"edm-export-note","aria-live":"polite",children:[c.jsx("span",{children:"Current view: shown columns, filters, sorting and all matching rows across pages. Excel also includes group summaries. CSV has no visual formatting."}),fe&&c.jsx("strong",{role:"status",children:"Preparing export…"}),z&&c.jsx("strong",{role:"status",children:z}),Ne&&c.jsx("strong",{role:"alert",children:Ne})]}),c.jsx(nD,{order:ee,hidden:V,onChange:(I,J)=>{B(I),ie(J)}}),c.jsxs("div",{className:"edm-placement-legend","aria-label":"CAD placement status legend",children:[c.jsxs("span",{children:[c.jsx("i",{className:"available","aria-hidden":"true",children:"●"})," Available / not placed"]}),c.jsxs("span",{children:[c.jsx("i",{className:"current","aria-hidden":"true",children:"●"})," On this drawing"]}),c.jsxs("span",{children:[c.jsx("i",{className:"another","aria-hidden":"true",children:"●"})," On another drawing"]}),c.jsx("small",{children:"Based on the saved reference only; CAD is not connected for live verification."})]}),c.jsxs("div",{className:"edm-grid-toolbar",children:[c.jsxs("label",{className:"edm-global-search",children:[c.jsx(hi,{size:14}),c.jsx("input",{placeholder:"Search all fields…","aria-label":"Search engineering data",value:x,onChange:I=>{O(I.target.value),ae(0)},"data-testid":"input-engineering-search"})]}),c.jsxs("span",{className:"edm-result-total","data-testid":"text-result-count",children:[Bt.length," records"]}),c.jsxs("button",{className:"edm-toolbar-button",onClick:()=>{O(""),te("All types"),j({}),ae(0)},"data-testid":"button-clear-filters",children:[c.jsx(Qu,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"edm-groups",onDragOver:I=>I.preventDefault(),onDrop:va,"data-testid":"drop-column-group",children:[c.jsx("span",{children:"GROUP BY"}),Z.length?Z.map(I=>c.jsxs("button",{onClick:()=>ge(J=>J.filter(me=>me!==I)),title:"Remove group",children:[Pt[I]," ",c.jsx("b",{children:"×"})]},I)):c.jsx("em",{children:"Drag a column header here to group records"})]}),c.jsxs("label",{className:"edm-group-select",children:["Add group",c.jsxs("select",{value:"","aria-label":"Add group",onChange:I=>{I.target.value&&(Rn(I.target.value),ae(0))},children:[c.jsx("option",{value:"",children:"Choose a column…"}),Xn.filter(I=>!Z.includes(I)).map(I=>c.jsx("option",{value:I,children:Pt[I]},I))]})]}),c.jsx("p",{className:"edm-table-sizing-help",children:"Drag a column edge to resize it. Double-click an edge to fit the text."}),ba.map(I=>c.jsxs("div",{className:"edm-group-summary",children:[c.jsx("strong",{children:I.label}),I.values.map(({value:J,count:me})=>c.jsxs("span",{children:[J,c.jsx("i",{children:me})]},J))]},I.field)),c.jsx("div",{className:"edm-table-wrap",children:c.jsxs("table",{ref:ke,className:"edm-table",style:{width:$,minWidth:$},children:[c.jsx("colgroup",{children:Ut.map(I=>c.jsx("col",{style:{width:vt(I)}},I))}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsxs("th",{className:"edm-rownum",children:[c.jsx("div",{className:"edm-column-heading",children:c.jsx("span",{className:"edm-column-heading-label",children:"#"})}),aa("rowNumber","row number")]}),c.jsxs("th",{children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsx("span",{className:"edm-column-heading-label",children:"Object type"}),c.jsx(Qy,{label:"Object type",options:Oa.type,selectedValues:xe.type,onApply:I=>Ra("type",I)})]}),aa("type","Object type")]}),ht.map(I=>c.jsxs("th",{draggable:!0,onDragStart:J=>J.dataTransfer.setData("text/engineering-field",I),children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsxs("button",{className:"edm-column-sort",title:Vs[I],onClick:()=>Cn(I),"data-testid":`button-sort-${I}`,children:[Pt[I],c.jsx("span",{children:ne.field===I?ne.direction===1?"↑":"↓":"↕"})]}),c.jsx(Qy,{label:Pt[I],options:Oa[I],selectedValues:xe[I],onApply:J=>Ra(I,J)})]}),aa(I,Pt[I])]},I))]})}),c.jsxs("tbody",{children:[kt.map((I,J)=>{const me=b===I.id,Ie=KA(I,y),it=Ie==="current"?"On this drawing":Ie==="another"?"On another drawing":"Available / not placed";return c.jsxs("tr",{className:me?"selected":"","data-stable-id":I.id,"data-placement-status":Ie,onClick:()=>v(I.id),"data-testid":`row-engineering-${I.id}`,children:[c.jsx("td",{className:"edm-rownum",children:X*pe+J+1}),c.jsx("td",{children:c.jsx("span",{className:`edm-type-badge ${I.type.toLowerCase().replace(/\s+/g,"-")}`,children:I.type})}),ht.map(je=>{const We=Sn(I,je);return je==="notes"?c.jsx("td",{className:"edm-notes-cell",children:me?c.jsx("textarea",{"aria-label":`Notes for ${I.itemTag}`,rows:2,maxLength:2e3,value:We,onClick:lt=>lt.stopPropagation(),onChange:lt=>wt(I.id,je,lt.target.value),"data-testid":`input-cell-${I.id}-${je}`}):c.jsx("span",{title:We,children:We||"—"})},je):je==="itemTag"?c.jsxs("td",{className:"mono edm-item-tag-cell",children:[c.jsxs("span",{className:`edm-placement-indicator ${Ie}`,"aria-label":`Placement: ${it}`,title:`Placement: ${it}`,children:[c.jsx("i",{"aria-hidden":"true",children:"●"}),c.jsx("span",{children:it})]}),me?c.jsx("input",{className:"edm-item-tag-editor","aria-label":`${Pt[je]} for ${I.itemTag}`,value:We,onClick:lt=>lt.stopPropagation(),onChange:lt=>wt(I.id,je,lt.target.value),"data-testid":`input-cell-${I.id}-${je}`}):c.jsx("span",{className:`edm-tag-value ${Ie}`,"data-testid":`text-item-tag-${I.id}`,children:We})]},je):c.jsx("td",{className:je==="stableId"?"mono":"",children:je==="stableId"?c.jsx("span",{className:"edm-stable-id-value",title:We,"aria-label":`Stable ID ${We}`,children:We}):me&&(je==="reviewStatus"||je==="groupStatus")?c.jsx("select",{"aria-label":`${Pt[je]} for ${I.itemTag}`,value:We,onClick:lt=>lt.stopPropagation(),onChange:lt=>wt(I.id,je,lt.target.value),"data-testid":`input-cell-${I.id}-${je}`,children:(je==="reviewStatus"?["Needs review","Reviewed","Manual"]:["","Start","Continue","Branch","Merge","End-of-Group"]).map(lt=>c.jsx("option",{value:lt,children:lt||"Not set"},lt))}):me?c.jsx("input",{"aria-label":`${Pt[je]} for ${I.itemTag}`,value:We,onClick:lt=>lt.stopPropagation(),onChange:lt=>wt(I.id,je,lt.target.value),"data-testid":`input-cell-${I.id}-${je}`}):c.jsx("span",{title:We,children:We||"—"})},je)})]},I.id)}),!kt.length&&c.jsx("tr",{children:c.jsx("td",{colSpan:ht.length+2,children:c.jsx("div",{className:"edm-empty",children:"No records match these filters."})})})]})]})}),c.jsxs("footer",{className:"edm-pagination",children:[c.jsxs("span",{children:["Showing ",c.jsxs("strong",{children:[Vt.length?X*pe+1:0,"–",Math.min((X+1)*pe,Vt.length)]})," of ",c.jsx("strong",{children:Vt.length})]}),c.jsxs("label",{children:["Rows ",c.jsx("select",{value:pe,onChange:I=>{oe(Number(I.target.value)),ae(0)},"aria-label":"Rows per page","data-testid":"select-page-size",children:[8,12,24,36].map(I=>c.jsx("option",{value:I,children:I},I))})," per page"]}),c.jsxs("div",{className:"edm-page-controls",children:[c.jsx("button",{disabled:X===0,onClick:()=>Ea(X-1),"aria-label":"Previous page","data-testid":"button-page-previous",children:c.jsx(db,{size:15})}),c.jsxs("span",{children:["Page ",X+1," of ",Tt]}),c.jsx("button",{disabled:X>=Tt-1,onClick:()=>Ea(X+1),"aria-label":"Next page","data-testid":"button-page-next",children:c.jsx(Op,{size:15})})]})]})]})]}),c.jsxs("aside",{className:"edm-properties panel",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsx("span",{children:"Properties"}),c.jsx("span",{className:"edm-counter",children:Oe?"EDIT":""})]}),c.jsxs("details",{className:"edm-field-guide",children:[c.jsx("summary",{children:"What do these fields mean?"}),c.jsx("dl",{children:Xn.map(I=>c.jsxs("div",{children:[c.jsx("dt",{children:Pt[I]}),c.jsx("dd",{children:Vs[I]})]},I))})]}),Oe&&c.jsxs("label",{className:"edm-record-type",children:["Object type",c.jsx("select",{value:Oe.type,"aria-label":"Selected record type",disabled:!!r.error,onChange:I=>Gt(p.map(J=>J.id===Oe.id?{...J,type:I.target.value}:J)),children:Ei.map(I=>c.jsx("option",{children:I},I))})]}),Oe?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"edm-property-summary",children:[c.jsx("span",{className:"edm-property-icon",children:uD(Oe.type)}),c.jsxs("div",{children:[c.jsx("strong",{"data-testid":"text-selected-tag",children:Oe.itemTag}),c.jsxs("small",{children:[Oe.type," · ",y.revision]})]})]}),(Oe.sourcePdfId??y.sourcePdfId)&&c.jsxs(ga,{className:"btn subtle edm-source-locate",href:`/workspace/${a}?pdf=${encodeURIComponent(Oe.sourcePdfId??y.sourcePdfId??"")}&page=${encodeURIComponent(String(Oe.sourceLocations?.[0]?.pageNumber??Oe.sourcePage??"1"))}&record=${encodeURIComponent(Oe.id)}#pdf-workflow-title`,"data-testid":"link-selected-source-location",children:[c.jsx(Kn,{size:13})," Locate on source PDF",c.jsx("small",{children:Oe.sourceLocations?.length?`${Oe.sourceLocations.length} OCR location(s) · review required`:`Page ${Oe.sourcePage||"1"} · no exact position saved`})]}),c.jsxs("div",{className:"edm-stable-id-panel",children:[c.jsx("span",{children:"STABLE ID"}),c.jsx("code",{"data-testid":"text-stable-id",children:Oe.id}),c.jsx("small",{children:"Permanent record identity. It does not change with the tag or drawing."})]}),c.jsxs("div",{className:"edm-property-scroll",children:[c.jsx("div",{className:"edm-property-group",children:"IDENTIFICATION"}),["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef"].map(I=>c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Vs[I],children:Pt[I]}),c.jsx("input",{value:Oe[I],onChange:J=>wt(Oe.id,I,J.target.value),"data-testid":`property-${I}`})]},I)),c.jsx("div",{className:"edm-property-group",children:"CAD PLACEMENT"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Vs.placementDrawingRef,children:Pt.placementDrawingRef}),c.jsx("input",{list:"edm-placement-drawings",value:Oe.placementDrawingRef,onChange:I=>wt(Oe.id,"placementDrawingRef",I.target.value),"data-testid":"property-placementDrawingRef",placeholder:"Blank = available / not placed"}),c.jsx("small",{children:"Reference only. This browser is not connected to CAD geometry."})]}),c.jsx("datalist",{id:"edm-placement-drawings",children:s.map(I=>c.jsx("option",{value:I.name},I.id))}),c.jsx("div",{className:"edm-property-group",children:Oe.type==="Pipe Run"?"PIPE RUN & PROCESS":"PROCESS & CONNECTION"}),(Oe.type==="Pipe Run"?["nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description"]:["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","opcDrawing","connection","description"]).map(I=>{const J=I;return c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Vs[J],children:Pt[J]}),J==="groupStatus"?c.jsx("select",{value:Oe.groupStatus,onChange:me=>wt(Oe.id,"groupStatus",me.target.value),"aria-label":"Pipe run group status",children:["","Start","Continue","Branch","Merge","End-of-Group"].map(me=>c.jsx("option",{value:me,children:me||"Not set"},me))}):c.jsx("input",{value:Oe[J],onChange:me=>wt(Oe.id,J,me.target.value),"data-testid":`property-${J}`})]},J)}),c.jsx("div",{className:"edm-property-group",children:"NOTES"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Vs.notes,children:Pt.notes}),c.jsx("textarea",{rows:5,maxLength:2e3,value:Oe.notes,onChange:I=>wt(Oe.id,"notes",I.target.value),"data-testid":"property-notes"})]})]}),c.jsxs("div",{className:"edm-save-state",role:"status","data-testid":"status-local-save",children:[c.jsx("span",{})," Edits save automatically in this browser"]})]}):c.jsx("div",{className:"edm-empty",children:"Select a graphic or table row to inspect properties."})]})]}),c.jsxs("footer",{className:"edm-footnote",children:[c.jsx("span",{children:"© 2026 gaurav.cbiindia · DEVICE-LOCAL DATA"}),c.jsxs("span",{children:[p.length," records · ",y.name," · ",a.toUpperCase(),"-isolated browser storage"]})]}),Me&&c.jsx("div",{className:"edm-storage-error",role:"alert","data-testid":"status-storage-error",children:Me})]})}function pD({assetId:a,candidateId:r,blockName:s,entityType:o,description:l,disabled:u,onDescriptionChange:m}){const[f,g]=M.useState(null),[y,p]=M.useState("");M.useEffect(()=>{let v=!0;return g(null),p(""),ev(a).then(w=>{v&&g(w)},w=>{v&&p(w instanceof Error?w.message:"Preview could not be read.")}),()=>{v=!1}},[a]);const b=o==="directionArrow"?[]:(f?.nearbyLabels??[]).filter(v=>!Vp(v));return c.jsxs("section",{className:"cad-block-review-visual","aria-label":`Identify block ${s}`,"data-testid":`preview-block-${r}`,children:[c.jsxs("div",{className:"cad-block-review-image",children:[f?.previewSvg?c.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(f.previewSvg)}`,alt:`DXF geometry preview of block ${s}`,"data-testid":`img-block-${r}`}):c.jsxs("div",{className:"cad-block-preview-empty",role:"status",children:[c.jsx("strong",{children:y?"Preview could not load":f?"Overview DXF needed":"Loading local preview…"}),c.jsx("span",{children:y||(f?"Run PIDEXPORTOVERVIEW on the original SOURCE drawing. Add its *_OVERVIEW.dxf to the existing extraction ZIP and import again. Do not repeat the full block extraction.":"")})]}),c.jsx("small",{children:"Visual aid only—not a fidelity check. Fonts, hatches, masks and some CAD entities may be simplified or absent."})]}),c.jsxs("div",{className:"cad-block-review-labels",children:[c.jsx("strong",{children:o==="directionArrow"?"Direction Arrow":"Nearby legend text"}),c.jsx("small",{children:o==="directionArrow"?"Kept as its own P&ID entity; no equipment, instrument, or component name is inferred from nearby text.":"Suggested by position, not confirmed identity. Multiple parts may share one assembly description."}),b.length?c.jsx("div",{className:"cad-block-label-choices",children:b.map((v,w)=>c.jsx("button",{type:"button",className:"btn subtle",disabled:u,onClick:()=>m(v),"data-testid":`button-use-label-${r}-${w}`,children:v},`${v}-${w}`))}):c.jsx("p",{"data-testid":`status-no-label-${r}`,children:o==="directionArrow"?f?.sourcePlacements?.length?`Source insert context retained: ${f.sourcePlacements.map(v=>`${v.layer}, ${v.rotationDegrees}° (${v.count})`).join("; ")}.`:"Source rotation and layer context will be used if an overview DXF is available.":f?.labelMatchAmbiguous?"Ambiguous: this block is used beside different legend labels. No item name is suggested; verify it from the source.":f?.labelMatchSkipped?"Skipped: this insert is on layer 0 or a primary process-pipe layer, so its nearby label is not used as an item mapping.":f?.previewSvg?"No nearby label found. Verify the source drawing and enter the description below.":"Label suggestions appear after an overview DXF is imported."}),c.jsxs("label",{children:[c.jsx("span",{children:"Confirmed item description"}),c.jsx("input",{value:l,onChange:v=>m(v.target.value),placeholder:"Verify the source, then enter the real item name",disabled:u,"data-testid":`input-item-description-${r}`})]}),c.jsx("small",{children:"Saved only when you approve this record. A label does not automatically choose a category or CAD layer."})]})]})}const Ov={titleBlock:"Title block",layer:"Layer",textStyle:"Text style",linetype:"Linetype",dimensionStyle:"Dimension style",symbol:"Symbol",directionArrow:"Direction Arrow",legend:"Legend"};function ri(a){return Ov[a]??"CAD standard"}function fD(a,r){if(a.proposedScope==="project"&&a.projectId){const s=[...new Set(r.filter(o=>o.proposedScope==="project"&&o.projectId).map(o=>o.projectId))].sort();return`Project ${String(s.indexOf(a.projectId)+1).padStart(2,"0")}`}if(a.proposedScope==="company"){const s=[...new Set(r.filter(o=>o.proposedScope==="company").map(o=>o.sourceGroup))].sort();return`Legends Library source ${String(s.indexOf(a.sourceGroup)+1).padStart(2,"0")}`}return"Unclassified source"}function ab(a,r){return`Project ${String(r.indexOf(a)+1).padStart(2,"0")}`}function wn(a,r){return a.find(s=>s.label===r)?.value.trim()??""}function nb({value:a,disabled:r,onChange:s}){let o=null,l="";try{o=ts(a)}catch(D){l=D instanceof Error?D.message:"Enter a valid X,Y outline."}const u=o?.map(([D])=>D)??[],m=o?.map(([,D])=>D)??[],f=Math.min(...u),g=Math.max(...u),y=Math.min(...m),p=Math.max(...m),b=g-f||1,v=p-y||1,w=9,R=o?.map(([D,S])=>`${w+(D-f)/b*(160-w*2)},${90-w-(S-y)/v*(90-w*2)}`).join(" ");return c.jsxs("label",{className:"candidate-fallback-category valve-mask-editor",children:[c.jsxs("span",{children:["Valve-body Wipeout outline ",c.jsx("small",{children:"Reviewed block-local X,Y points; do not include pipe tails. Separate points with semicolons."})]}),c.jsx("textarea",{value:a,onChange:D=>s(D.target.value),placeholder:"x,y; x,y; x,y; …","aria-label":"Valve-body Wipeout outline points",rows:3,disabled:r}),c.jsx("small",{className:"candidate-layer-help",children:"Enter vertices in order using the valve block’s local drawing units. The small preview shows only the mask contour, not the source CAD block."}),o&&R?c.jsx("svg",{className:"valve-mask-preview",viewBox:"0 0 160 90",role:"img","aria-label":"Preview of the saved valve mask outline",children:c.jsx("polygon",{points:R})}):c.jsx("small",{className:"candidate-layer-help",children:l}),c.jsx("small",{className:"candidate-layer-help",children:"The runner masks only inside this polygon, leaves the underlying Pipe Run continuous, and draws the valve block on top."})]})}function Cr(a,r){const s=wn(a.item.fields,"Source discipline");if(s!=="PFD"&&s!=="P&ID"&&s!=="Shared")return[];const m=[...(a.proposedScope==="company"?"company":"project")==="project"&&a.projectId?r.projects[a.projectId]?.items??[]:[],...r.companyItems].filter(f=>{if(f.category!=="layer"||f.sourceKind!=="extracted-dwg"||f.reviewStatus!=="reviewed")return!1;const g=wn(f.fields,"Source discipline");return s==="Shared"?g==="Shared":g==="Shared"||g===s}).map(f=>wn(f.fields,"CAD name")).filter(f=>f&&f.toUpperCase()!=="0");return[...new Set(m)].sort((f,g)=>f.localeCompare(g))}function hD({library:a,reviewCandidates:r,onApproveCompany:s,onApproveProject:o,onDismiss:l,onUpdateReviewedItem:u,onSetCompanyDefault:m,onSetProjectDefault:f,storageNotice:g="",readOnly:y=!1,reviewOnly:p=!1,backHref:b="/"}){const[v,w]=M.useState("company"),[R,D]=M.useState(""),[S,T]=M.useState("all"),[L,_]=M.useState(""),[N,x]=M.useState(0),[O,C]=M.useState(""),[P,k]=M.useState({}),[te,X]=M.useState({}),[ae,pe]=M.useState({}),[oe,ne]=M.useState({}),[Y,Z]=M.useState({}),[ge,xe]=M.useState({}),j=20,ee=M.useMemo(()=>Object.keys(a.projects).sort(),[a.projects]),B=ee.includes(L)?L:ee[0]??"",V=r.filter(z=>z.status==="needs-review"),ie=r.filter(z=>z.status==="approved").length,de=r.filter(z=>z.status==="dismissed").length,ve=z=>ge[z.id]??z.item.category,Pe=(z,ue)=>{const Ne=ve(z),ye=z.item.sourceKind==="extracted-dwg"&&!!z.item.fields.find(we=>we.label==="Block asset ID")?.value.trim(),Me=(P[z.id]??z.item.fields.find(we=>we.label==="Fallback category")?.value??"").trim(),et=te[z.id]??z.item.fields.find(we=>we.label==="Target CAD layer")?.value??"";if(Ne==="symbol"&&ye&&!Me){C("Enter the real equipment category (such as pump or valve) before approving an extracted block.");return}if(Ne==="symbol"&&ye&&!Cr(z,a).includes(et)){C(Cr(z,a).length?"Choose an approved non-zero CAD layer for this block before approving it.":"Approve a matching Equipment, Instrument, or other placement layer first. Layer 0 cannot be used for block placement.");return}const Fe=ae[z.id]??z.item.fields.find(we=>we.label==="Wipeout mask boundary")?.value??"";if(Ne==="symbol"&&Me.toLowerCase()==="valve")try{ts(Fe)}catch(we){C(we instanceof Error?we.message:"Enter and review a valve-body Wipeout outline before approval.");return}C("");const Be=ye?Ne==="directionArrow"?[{label:"Entity type",value:"Direction Arrow"},{label:"Item description",value:Y[z.id]||"Direction Arrow"}]:[{label:"Fallback category",value:Me},{label:"Target CAD layer",value:et},{label:"Item description",value:Y[z.id]??wn(z.item.fields,"Item description")},...Me.toLowerCase()==="valve"?[{label:"Wipeout mask boundary",value:Fe}]:[]]:void 0;(ue==="company"?s:o)(z.id,Be,ye?Ne:void 0)&&C(ue==="company"?"Approved and added to the Legends Library.":"Approved and added to the project library.")},ke=z=>{l(z)&&C("Record dismissed from the review queue.")},bt=(z,ue)=>{const Ne=oe[z]??ue.find(ye=>ye.label==="Wipeout mask boundary")?.value??"";try{ts(Ne)}catch(ye){C(ye instanceof Error?ye.message:"Enter a valid valve-body mask outline.");return}u(z,[{label:"Wipeout mask boundary",value:Ne}])&&C("Reviewed valve-body mask saved to the Legends Library.")},rt=M.useMemo(()=>{const z=R.trim().toLowerCase();return V.filter(ue=>{const Ne=ve(ue),ye=S==="all"||Ne===S,Me=ue.item.fields.some(et=>`${et.label} ${et.value}`.toLowerCase().includes(z));return ye&&(!z||Me||ri(Ne).toLowerCase().includes(z))})},[V,R,S,ge]),dt=Math.max(1,Math.ceil(rt.length/j)),ht=Math.min(N,dt-1),Ut=rt.slice(ht*j,(ht+1)*j);M.useEffect(()=>x(0),[R,S]);const $=(v==="company"?a.companyItems:a.projects[B]?.items??[]).filter(z=>{const ue=R.trim().toLowerCase(),Ne=S==="all"||z.category===S,ye=z.fields.some(Me=>`${Me.label} ${Me.value}`.toLowerCase().includes(ue));return Ne&&(!ue||ye||ri(z.category).toLowerCase().includes(ue))}),fe=(z,ue)=>{if(!Jr.includes(ue))return;const Ne=ue,ye=a.companyItems.some(Me=>Me.category==="titleBlock"&&Me.reviewStatus==="reviewed"&&(Me.sheetSize===Ne||Me.fields.some(et=>et.label==="Sheet size"&&et.value===Ne)));if(Ne!==a.companyDefaults[z]&&!ye){C(`Approve a company title-block mapping for ${Ne} before changing this default.`);return}C(""),m(z,Ne)},he=(z,ue,Ne)=>{if(!Jr.includes(Ne))return;const ye=Ne;if(![...a.projects[z]?.items??[],...a.companyItems].some(Fe=>Fe.category==="titleBlock"&&Fe.reviewStatus==="reviewed"&&(Fe.sheetSize===ye||Fe.fields.some(Be=>Be.label==="Sheet size"&&Be.value===ye)))){C(`Approve a title-block mapping for ${ye} before saving this project default.`);return}C(""),f(z,ue,ye)};return c.jsxs("main",{className:`standards-page${p?" standards-review-only":""}`,children:[c.jsxs("header",{className:"standards-topbar",children:[c.jsxs(ga,{href:p?b:"/",className:"standards-brand","data-testid":"link-standards-home",children:[c.jsx("span",{className:"standards-mark",children:"PM"}),c.jsxs("span",{children:["Mapping Studio",c.jsx("small",{children:p?"Legends Library / review":"Drafting standards / browser-local"})]})]}),c.jsxs("div",{className:"standards-top-meta",children:[c.jsxs("span",{className:"standards-local",children:[c.jsx("i",{}),y?"Read only · storage issue":"Browser-local"]}),c.jsx("span",{className:"standards-version",children:"LIBRARY · 1.0"})]})]}),c.jsxs("div",{className:"standards-content",children:[c.jsxs("section",{className:"standards-intro",children:[c.jsxs("div",{children:[p&&c.jsxs(ga,{className:"standards-return",href:b,children:["← Back to ",b.endsWith("/pfd")?"PFD":"P&ID"," workspace"]}),c.jsxs("div",{className:"standards-eyebrow",children:[p?"Legends Library":"Standards library"," ",c.jsx("span",{children:"/"})," human review"]}),c.jsx("h1",{children:p?"Review extracted standards":"Drafting standards"}),c.jsx("p",{children:p?"Check extracted blocks, layers, text styles, and line types. Nothing becomes part of the Legends Library until you approve it.":"Inspect source-derived CAD values before they become defaults. Project choices stay separate from the Legends Library."})]}),c.jsxs("div",{className:"standards-local-seal",children:[c.jsx(Zn,{size:15}),c.jsxs("span",{children:["LOCAL ONLY",c.jsx("small",{children:"Nothing is uploaded or shared"})]})]})]}),c.jsxs("div",{className:"standards-trust-note",children:[c.jsx(Zu,{size:16}),c.jsxs("span",{children:[c.jsx("strong",{children:"Review before use."})," ",p?"Each extracted record remains pending until you approve it to the Legends Library or dismiss it. Source filenames are hidden.":"Source-derived values remain unapproved until you choose a scope. Company/client identifiers and source file names are hidden here."]}),c.jsxs("span",{className:"standards-schema",children:["SCHEMA ",a.schemaVersion]})]}),g&&c.jsx("div",{className:"standards-storage-banner",role:"alert",children:g}),c.jsxs("section",{className:"standards-metrics","aria-label":"Review summary",children:[c.jsxs("div",{className:"standards-metric metric-pending",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(Ir,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Awaiting review"}),c.jsx("strong",{children:V.length.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"SOURCE MAPPINGS"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(jm,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Approved from queue"}),c.jsx("strong",{children:ie.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"HUMAN CONFIRMED"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(kp,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Dismissed"}),c.jsx("strong",{children:de.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"NOT IN LIBRARY"})]})]}),c.jsxs("div",{className:"standards-layout",children:[c.jsxs("section",{className:"standards-review panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"INBOX / SOURCE-DERIVED"}),c.jsxs("h2",{children:[c.jsx(xw,{size:17}),"Review queue"]})]}),c.jsxs("span",{className:"standards-count",children:[V.length," pending"]})]}),c.jsxs("div",{className:"standards-controls",children:[c.jsxs("label",{className:"standards-search",children:[c.jsx(hi,{size:14}),c.jsx("input",{value:R,onChange:z=>D(z.target.value),placeholder:"Search CAD field values…","aria-label":"Search standards","data-testid":"input-standards-search"})]}),c.jsxs("label",{className:"standards-filter",children:[c.jsx(Qu,{size:13}),c.jsxs("select",{"aria-label":"Filter by category",value:S,onChange:z=>T(z.target.value),"data-testid":"select-standards-category",children:[c.jsx("option",{value:"all",children:"All categories"}),Object.entries(Ov).map(([z,ue])=>c.jsx("option",{value:z,children:ue},z))]}),c.jsx(Rr,{size:13})]})]}),O&&c.jsx("div",{className:"standards-action-note",role:"status",children:O}),c.jsxs("div",{className:"standards-candidate-list",children:[Ut.map(z=>{const ue=ve(z),Ne=z.item.sourceKind==="extracted-dwg"&&!!wn(z.item.fields,"Block asset ID");return c.jsxs("article",{className:"candidate-card","data-testid":`candidate-${z.id}`,children:[c.jsxs("div",{className:"candidate-top",children:[c.jsxs("div",{className:"candidate-category",children:[c.jsx("span",{className:"candidate-glyph",children:c.jsx(si,{size:15})}),c.jsxs("span",{children:[c.jsx("strong",{children:ri(ue)}),c.jsxs("small",{children:[fD(z,r)," · ",z.proposedScope==="project"?"Project proposal":z.proposedScope==="company"?"Pending review":"Scope not classified"]})]})]}),c.jsxs("span",{className:"candidate-status",children:[c.jsx("i",{}),"Needs review"]})]}),Ne&&c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsx("span",{children:"Review entity as"}),c.jsxs("select",{value:ue==="directionArrow"?"directionArrow":"symbol",onChange:ye=>{C(""),xe(Me=>({...Me,[z.id]:ye.target.value}))},"aria-label":`Review entity type for ${z.item.name}`,disabled:y,"data-testid":`select-entity-role-${z.id}`,children:[c.jsx("option",{value:"symbol",children:"Equipment / instrument / component symbol"}),c.jsx("option",{value:"directionArrow",children:"Direction Arrow"})]}),ue==="directionArrow"&&c.jsx("small",{children:"Kept separate from equipment matching. Source insert layers and rotations are retained for later pipe alignment."})]}),(ue==="symbol"||ue==="directionArrow")&&z.item.sourceKind==="extracted-dwg"&&wn(z.item.fields,"Block asset ID")&&c.jsx(pD,{assetId:wn(z.item.fields,"Block asset ID"),candidateId:z.id,blockName:wn(z.item.fields,"Block name"),entityType:ue,description:Y[z.id]??(ue==="directionArrow"?"Direction Arrow":wn(z.item.fields,"Item description")),disabled:y,onDescriptionChange:ye=>Z(Me=>({...Me,[z.id]:ye}))}),c.jsx("div",{className:"candidate-fields","aria-label":`${ri(ue)} CAD standard values`,children:z.item.fields.filter(ye=>ue!=="directionArrow"||!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(ye.label)).map((ye,Me)=>c.jsxs("div",{className:"candidate-field",children:[c.jsx("span",{children:ye.label}),c.jsx("strong",{children:ye.value||"—"})]},`${ye.label}-${Me}`))}),ue==="symbol"&&Ne&&c.jsxs(c.Fragment,{children:[c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Fallback category ",c.jsx("small",{children:"Required for safe same-category substitution"})]}),c.jsx("input",{value:P[z.id]??z.item.fields.find(ye=>ye.label==="Fallback category")?.value??"",onChange:ye=>{C(""),k(Me=>({...Me,[z.id]:ye.target.value}))},placeholder:"For example: pump, valve, or instrument","aria-label":`Fallback category for ${z.item.name}`})]}),(P[z.id]??z.item.fields.find(ye=>ye.label==="Fallback category")?.value??"").trim().toLowerCase()==="valve"&&c.jsx(nb,{value:ae[z.id]??z.item.fields.find(ye=>ye.label==="Wipeout mask boundary")?.value??"",disabled:y,onChange:ye=>{C(""),pe(Me=>({...Me,[z.id]:ye}))}}),c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Target CAD layer ",c.jsx("small",{children:"Actual approved layer; layer 0 is not allowed"})]}),c.jsxs("select",{value:te[z.id]??z.item.fields.find(ye=>ye.label==="Target CAD layer")?.value??"",onChange:ye=>{C(""),X(Me=>({...Me,[z.id]:ye.target.value}))},"aria-label":`Target CAD layer for ${z.item.name}`,disabled:y||Cr(z,a).length===0,children:[c.jsx("option",{value:"",children:Cr(z,a).length?"Select an approved CAD layer…":"Approve a compatible layer first"}),Cr(z,a).map(ye=>c.jsx("option",{value:ye,children:ye},ye))]}),c.jsx("small",{className:"candidate-layer-help",children:Cr(z,a).length?"The AutoCAD runner will put the inserted block reference on this layer.":"Review and approve the matching source layer first. No layer is guessed automatically."}),c.jsx("small",{className:"candidate-layer-help",children:"Stated Legends layers: equipment uses EQUIP or f_EQUIP; instruments use f_Inst. Extract and approve the matching layer before it appears here."})]})]}),c.jsxs("div",{className:"candidate-actions",children:[c.jsx("span",{className:"candidate-scope-note",children:z.proposedScope==="project"?"Approve into isolated project library":z.proposedScope==="company"?"Approve to the Legends Library":"Unclassified source · project-only approval"}),(()=>{const ye=ue==="symbol"&&Ne;return z.proposedScope==="company"?c.jsxs("button",{className:"btn primary",onClick:()=>Pe(z,"company"),disabled:y,title:ye&&Cr(z,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-company-${z.id}`,children:[c.jsx(Gs,{size:14}),"Approve to Legends Library"]}):c.jsxs("button",{className:"btn primary",onClick:()=>Pe(z,"project"),disabled:y,title:ye&&Cr(z,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-project-${z.id}`,children:[c.jsx(Gs,{size:14}),"Approve to project"]})})(),c.jsx("button",{className:"btn subtle",onClick:()=>ke(z.id),disabled:y,"data-testid":`button-dismiss-${z.id}`,children:"Dismiss"})]})]},z.id)}),!Ut.length&&c.jsxs("div",{className:"standards-empty",children:[c.jsx("span",{className:"empty-seal",children:V.length?c.jsx(hi,{size:20}):c.jsx(jm,{size:20})}),c.jsx("strong",{children:V.length?"No source mappings match":"Review queue is clear"}),c.jsx("p",{children:V.length?"Try another field value or category.":"New source-derived standards will appear here for human review."}),R||S!=="all"?c.jsx("button",{className:"btn subtle",onClick:()=>{D(""),T("all")},children:"Clear filters"}):null]})]}),rt.length>j&&c.jsxs("div",{className:"candidate-pagination",children:[c.jsxs("span",{children:["Showing ",ht*j+1,"–",Math.min((ht+1)*j,rt.length)," of ",rt.length," matching mappings"]}),c.jsxs("div",{children:[c.jsx("button",{className:"btn subtle",onClick:()=>x(z=>Math.max(0,z-1)),disabled:ht===0,children:"Previous"}),c.jsxs("span",{children:["Page ",ht+1," of ",dt]}),c.jsx("button",{className:"btn subtle",onClick:()=>x(z=>Math.min(dt-1,z+1)),disabled:ht>=dt-1,children:"Next"})]})]}),c.jsxs("footer",{className:"standards-list-foot",children:[c.jsx("span",{children:"CAD field values only"}),c.jsx("span",{children:"Source labels anonymized"})]})]}),!p&&c.jsxs("aside",{className:"standards-side",children:[c.jsxs("section",{className:"defaults-panel panel",children:[c.jsx("div",{className:"standards-panel-head",children:c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"ACTIVE CONFIGURATION"}),c.jsxs("h2",{children:[c.jsx(Qu,{size:16}),"Sheet-size defaults"]})]})}),c.jsxs("div",{className:"default-scope-tabs",role:"tablist","aria-label":"Defaults scope",children:[c.jsx("button",{role:"tab","aria-selected":v==="company",className:v==="company"?"selected":"",onClick:()=>w("company"),children:"Company"}),c.jsxs("button",{role:"tab","aria-selected":v==="projects",className:v==="projects"?"selected":"",onClick:()=>w("projects"),children:["Projects ",c.jsx("span",{children:ee.length})]})]}),v==="projects"&&c.jsx("div",{className:"project-picker",children:ee.length?c.jsxs("label",{children:[c.jsx("span",{children:"PROJECT LIBRARY"}),c.jsxs("div",{children:[c.jsx("select",{value:B,onChange:z=>_(z.target.value),"aria-label":"Select project library",children:ee.map(z=>c.jsx("option",{value:z,children:ab(z,ee)},z))}),c.jsx(Rr,{size:14})]})]}):c.jsxs("div",{className:"project-none",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(si,{size:17})}),c.jsx("strong",{children:"No project overrides yet"}),c.jsx("small",{children:"Project-specific standards will appear here once available."})]})}),c.jsxs("div",{className:"default-table",children:[c.jsxs("div",{className:"default-table-head",children:[c.jsx("span",{children:"DRAWING PURPOSE"}),c.jsx("span",{children:"SIZE"})]}),pp.map(z=>{const ue=v==="projects"&&B?a.projects[B]?.defaults[z]:void 0,Ne=ue??a.companyDefaults[z];return c.jsxs("div",{className:"default-row",children:[c.jsxs("div",{children:[c.jsx("strong",{children:z}),v==="projects"&&c.jsx("small",{children:ue?"Project override":"Inherited company default"})]}),v==="company"?c.jsxs("label",{className:"size-select",children:[c.jsx("select",{"aria-label":`${z} company sheet size`,value:a.companyDefaults[z],onChange:ye=>fe(z,ye.target.value),disabled:y,children:Jr.map(ye=>c.jsx("option",{value:ye,children:ye},ye))}),c.jsx(Rr,{size:13})]}):B?c.jsxs("label",{className:`size-select ${ue?"override":""}`,children:[c.jsx("select",{"aria-label":`${z} project sheet size`,value:Ne,onChange:ye=>he(B,z,ye.target.value),disabled:y,children:Jr.map(ye=>c.jsx("option",{value:ye,children:ye},ye))}),c.jsx(Rr,{size:13})]}):c.jsx("span",{className:"default-value",children:"—"})]},z)})]}),c.jsxs("div",{className:"defaults-note",children:[c.jsx(Zu,{size:14}),c.jsx("span",{children:"Project selections change only that project. Legends Library defaults remain unchanged."})]})]}),c.jsxs("section",{className:"library-panel panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"APPROVED STANDARDS"}),c.jsxs("h2",{children:[c.jsx(si,{size:16}),v==="company"?"Legends Library":"Project library"]})]}),c.jsx("span",{className:"standards-count",children:$.length})]}),c.jsxs("div",{className:"approved-list",children:[$.map(z=>c.jsxs("article",{className:"approved-item",children:[c.jsxs("div",{className:"approved-item-head",children:[c.jsx("span",{className:"approved-glyph",children:c.jsx(Gs,{size:13})}),c.jsxs("div",{children:[c.jsx("strong",{children:ri(z.category)}),c.jsx("small",{children:v==="company"?"Legends Library standard":`${ab(B,ee)} · project-only`})]})]}),c.jsx("div",{className:"approved-fields",children:z.fields.map((ue,Ne)=>c.jsxs("div",{children:[c.jsx("span",{children:ue.label}),c.jsx("strong",{children:ue.value||"—"})]},`${ue.label}-${Ne}`))}),z.category==="symbol"&&z.sourceKind==="extracted-dwg"&&wn(z.fields,"Fallback category").toLowerCase()==="valve"&&c.jsxs(c.Fragment,{children:[c.jsx(nb,{value:oe[z.id]??z.fields.find(ue=>ue.label==="Wipeout mask boundary")?.value??"",disabled:y,onChange:ue=>{C(""),ne(Ne=>({...Ne,[z.id]:ue}))}}),c.jsx("div",{className:"approved-mask-actions",children:c.jsxs("button",{type:"button",className:"btn primary",disabled:y,onClick:()=>bt(z.id,z.fields),"data-testid":`button-save-valve-mask-${z.id}`,children:[c.jsx(Gs,{size:13}),"Save reviewed outline"]})})]})]},z.id)),!$.length&&c.jsxs("div",{className:"approved-empty",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(si,{size:18})}),c.jsx("strong",{children:v==="company"?"No approved Legends Library standards":"No standards in this project"}),c.jsx("small",{children:v==="company"?"Review and approve source mappings to build the Legends Library.":"Project-approved standards remain isolated from Legends Library defaults."})]})]}),c.jsxs("footer",{className:"library-foot",children:[c.jsx("span",{children:"Visible values are standards fields"}),c.jsx("span",{children:"Descriptions hidden"})]})]})]})]}),c.jsxs("footer",{className:"standards-page-foot",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:p?"Only approved mappings are offered to the CAD runner":"Legends Library and project standards are reviewed separately"})]})]})]})}function rb({backHref:a}){const[r]=M.useState(()=>{try{return{library:xn(),canSave:!0,error:""}}catch(S){return{library:IS(),canSave:!1,error:S instanceof Error?S.message:"The local standards library could not be loaded."}}}),[s,o]=M.useState(r.library),l=M.useRef(r.library),[u,m]=M.useState(r.canSave),[f,g]=M.useState(r.error),y=S=>{if(!u)return g("The local library could not be read safely. Its saved contents were left unchanged."),!1;let T;try{T=S(l.current)}catch(L){return g(L instanceof Error?L.message:"The standards change could not be applied."),!1}try{return bi(T),l.current=T,o(T),g(""),!0}catch(L){const _=L instanceof Error?L.message:"The standards change could not be saved locally.";return _.startsWith("This browser could not save the CAD standards locally.")&&m(!1),g(_),!1}},p=(S,T,L)=>y(_=>ec(_,S,"company",T,L)),b=(S,T,L)=>y(_=>ec(_,S,"project",T,L)),v=(S,T)=>y(L=>US(L,S,T)),w=S=>y(T=>BS(T,S)),R=(S,T)=>y(L=>OS(L,S,T)),D=(S,T,L)=>{const _=l.current.projects[S]?.projectName??`Project ${String(Object.keys(l.current.projects).sort().indexOf(S)+1).padStart(2,"0")}`;y(N=>zS(N,S,_,T,L))};return c.jsx(hD,{library:s,reviewCandidates:s.reviewCandidates,reviewOnly:!0,backHref:a,onApproveCompany:p,onApproveProject:b,onUpdateReviewedItem:v,onDismiss:w,onSetCompanyDefault:R,onSetProjectDefault:D,storageNotice:f,readOnly:!u})}const gD="/pid-mapping-studio-app/".replace(/\/$/,"");function mD(){const[a]=mb();return a==="/admin/library"||a.startsWith("/sign-in")||a.startsWith("/sign-up")?c.jsx(mx,{to:"/"}):a==="/portal"||a==="/library"||a==="/"?c.jsx(N1,{}):a==="/workspace/pfd"?c.jsx(Ky,{discipline:"pfd"}):a==="/workspace/pid"?c.jsx(Ky,{discipline:"pid"}):a==="/workspace/pfd/engineering-data"?c.jsx(tb,{discipline:"pfd"}):a==="/workspace/pid/engineering-data"?c.jsx(tb,{discipline:"pid"}):a==="/standards-review/pfd"?c.jsx(rb,{backHref:"/workspace/pfd"}):a==="/standards-review/pid"?c.jsx(rb,{backHref:"/workspace/pid"}):c.jsx(C1,{})}function yD(){return c.jsx(gx,{base:gD,children:c.jsx(D1,{children:c.jsx(mD,{})})})}Pp.createRoot(document.getElementById("root"),{onCaughtError:(a,r)=>{console.error(a,r.componentStack)}}).render(c.jsx(yD,{}));export{pn as _,bD as a,VS as c,xi as g,Yp as v,ED as w};
