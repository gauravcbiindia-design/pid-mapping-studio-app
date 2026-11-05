const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cggiygbx.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/exceljs.min-CSjoC5iA.js"])))=>i.map(i=>d[i]);
function rc(a,r){for(var s=0;s<r.length;s++){const o=r[s];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in a)){const u=Object.getOwnPropertyDescriptor(o,l);u&&Object.defineProperty(a,l,u.get?u:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const g of u.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function s(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function o(l){if(l.ep)return;l.ep=!0;const u=s(l);fetch(l.href,u)}})();var hD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function wi(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function nb(a){if(Object.prototype.hasOwnProperty.call(a,"__esModule"))return a;var r=a.default;if(typeof r=="function"){var s=function o(){var l=!1;try{l=this instanceof o}catch{}return l?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};s.prototype=r.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(a).forEach(function(o){var l=Object.getOwnPropertyDescriptor(a,o);Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:function(){return a[o]}})}),s}var Eu={exports:{}},Go={};var Tm;function ME(){if(Tm)return Go;Tm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,l,u){var g=null;if(u!==void 0&&(g=""+u),l.key!==void 0&&(g=""+l.key),"key"in l){u={};for(var f in l)f!=="key"&&(u[f]=l[f])}else u=l;return l=u.ref,{$$typeof:a,type:o,key:g,ref:l!==void 0?l:null,props:u}}return Go.Fragment=r,Go.jsx=s,Go.jsxs=s,Go}var Am;function $E(){return Am||(Am=1,Eu.exports=ME()),Eu.exports}var c=$E();const FE=wi(c),UE=rc({__proto__:null,default:FE},[c]);var wu={exports:{}},Xo={},xu={exports:{}},Su={};var Dm;function BE(){return Dm||(Dm=1,(function(a){function r(Y,Z){var ge=Y.length;Y.push(Z);e:for(;0<ge;){var we=ge-1>>>1,j=Y[we];if(0<l(j,Z))Y[we]=Z,Y[ge]=j,ge=we;else break e}}function s(Y){return Y.length===0?null:Y[0]}function o(Y){if(Y.length===0)return null;var Z=Y[0],ge=Y.pop();if(ge!==Z){Y[0]=ge;e:for(var we=0,j=Y.length,ee=j>>>1;we<ee;){var U=2*(we+1)-1,V=Y[U],ie=U+1,de=Y[ie];if(0>l(V,ge))ie<j&&0>l(de,V)?(Y[we]=de,Y[ie]=ge,we=ie):(Y[we]=V,Y[U]=ge,we=U);else if(ie<j&&0>l(de,ge))Y[we]=de,Y[ie]=ge,we=ie;else break e}}return Z}function l(Y,Z){var ge=Y.sortIndex-Z.sortIndex;return ge!==0?ge:Y.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var g=Date,f=g.now();a.unstable_now=function(){return g.now()-f}}var y=[],m=[],p=1,b=null,v=3,x=!1,N=!1,D=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function C(Y){for(var Z=s(m);Z!==null;){if(Z.callback===null)o(m);else if(Z.startTime<=Y)o(m),Z.sortIndex=Z.expirationTime,r(y,Z);else break;Z=s(m)}}function w(Y){if(D=!1,C(Y),!N)if(s(y)!==null)N=!0,O||(O=!0,ae());else{var Z=s(m);Z!==null&&ne(w,Z.startTime-Y)}}var O=!1,R=-1,P=5,k=-1;function te(){return A?!0:!(a.unstable_now()-k<P)}function X(){if(A=!1,O){var Y=a.unstable_now();k=Y;var Z=!0;try{e:{N=!1,D&&(D=!1,L(R),R=-1),x=!0;var ge=v;try{t:{for(C(Y),b=s(y);b!==null&&!(b.expirationTime>Y&&te());){var we=b.callback;if(typeof we=="function"){b.callback=null,v=b.priorityLevel;var j=we(b.expirationTime<=Y);if(Y=a.unstable_now(),typeof j=="function"){b.callback=j,C(Y),Z=!0;break t}b===s(y)&&o(y),C(Y)}else o(y);b=s(y)}if(b!==null)Z=!0;else{var ee=s(m);ee!==null&&ne(w,ee.startTime-Y),Z=!1}}break e}finally{b=null,v=ge,x=!1}Z=void 0}}finally{Z?ae():O=!1}}}var ae;if(typeof _=="function")ae=function(){_(X)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,oe=pe.port2;pe.port1.onmessage=X,ae=function(){oe.postMessage(null)}}else ae=function(){S(X,0)};function ne(Y,Z){R=S(function(){Y(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(Y){Y.callback=null},a.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<Y?Math.floor(1e3/Y):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(Y){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var ge=v;v=Z;try{return Y()}finally{v=ge}},a.unstable_requestPaint=function(){A=!0},a.unstable_runWithPriority=function(Y,Z){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ge=v;v=Y;try{return Z()}finally{v=ge}},a.unstable_scheduleCallback=function(Y,Z,ge){var we=a.unstable_now();switch(typeof ge=="object"&&ge!==null?(ge=ge.delay,ge=typeof ge=="number"&&0<ge?we+ge:we):ge=we,Y){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=ge+j,Y={id:p++,callback:Z,priorityLevel:Y,startTime:ge,expirationTime:j,sortIndex:-1},ge>we?(Y.sortIndex=ge,r(m,Y),s(y)===null&&Y===s(m)&&(D?(L(R),R=-1):D=!0,ne(w,ge-we))):(Y.sortIndex=j,r(y,Y),N||x||(N=!0,O||(O=!0,ae()))),Y},a.unstable_shouldYield=te,a.unstable_wrapCallback=function(Y){var Z=v;return function(){var ge=v;v=Z;try{return Y.apply(this,arguments)}finally{v=ge}}}})(Su)),Su}var Nm;function zE(){return Nm||(Nm=1,xu.exports=BE()),xu.exports}var Tu={exports:{}},$e={};var Cm;function YE(){if(Cm)return $e;Cm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),g=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),b=Symbol.iterator;function v(j){return j===null||typeof j!="object"?null:(j=b&&j[b]||j["@@iterator"],typeof j=="function"?j:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,D={};function A(j,ee,U){this.props=j,this.context=ee,this.refs=D,this.updater=U||x}A.prototype.isReactComponent={},A.prototype.setState=function(j,ee){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,ee,"setState")},A.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function S(){}S.prototype=A.prototype;function L(j,ee,U){this.props=j,this.context=ee,this.refs=D,this.updater=U||x}var _=L.prototype=new S;_.constructor=L,N(_,A.prototype),_.isPureReactComponent=!0;var C=Array.isArray,w={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function R(j,ee,U,V,ie,de){return U=de.ref,{$$typeof:a,type:j,key:ee,ref:U!==void 0?U:null,props:de}}function P(j,ee){return R(j.type,ee,void 0,void 0,void 0,j.props)}function k(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function te(j){var ee={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(U){return ee[U]})}var X=/\/+/g;function ae(j,ee){return typeof j=="object"&&j!==null&&j.key!=null?te(""+j.key):ee.toString(36)}function pe(){}function oe(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(pe,pe):(j.status="pending",j.then(function(ee){j.status==="pending"&&(j.status="fulfilled",j.value=ee)},function(ee){j.status==="pending"&&(j.status="rejected",j.reason=ee)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function ne(j,ee,U,V,ie){var de=typeof j;(de==="undefined"||de==="boolean")&&(j=null);var ve=!1;if(j===null)ve=!0;else switch(de){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(j.$$typeof){case a:case r:ve=!0;break;case p:return ve=j._init,ne(ve(j._payload),ee,U,V,ie)}}if(ve)return ie=ie(j),ve=V===""?"."+ae(j,0):V,C(ie)?(U="",ve!=null&&(U=ve.replace(X,"$&/")+"/"),ne(ie,ee,U,"",function(vt){return vt})):ie!=null&&(k(ie)&&(ie=P(ie,U+(ie.key==null||j&&j.key===ie.key?"":(""+ie.key).replace(X,"$&/")+"/")+ve)),ee.push(ie)),1;ve=0;var Ie=V===""?".":V+":";if(C(j))for(var Pe=0;Pe<j.length;Pe++)V=j[Pe],de=Ie+ae(V,Pe),ve+=ne(V,ee,U,de,ie);else if(Pe=v(j),typeof Pe=="function")for(j=Pe.call(j),Pe=0;!(V=j.next()).done;)V=V.value,de=Ie+ae(V,Pe++),ve+=ne(V,ee,U,de,ie);else if(de==="object"){if(typeof j.then=="function")return ne(oe(j),ee,U,V,ie);throw ee=String(j),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Y(j,ee,U){if(j==null)return j;var V=[],ie=0;return ne(j,V,"","",function(de){return ee.call(U,de,ie++)}),V}function Z(j){if(j._status===-1){var ee=j._result;ee=ee(),ee.then(function(U){(j._status===0||j._status===-1)&&(j._status=1,j._result=U)},function(U){(j._status===0||j._status===-1)&&(j._status=2,j._result=U)}),j._status===-1&&(j._status=0,j._result=ee)}if(j._status===1)return j._result.default;throw j._result}var ge=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ee=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(ee))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function we(){}return $e.Children={map:Y,forEach:function(j,ee,U){Y(j,function(){ee.apply(this,arguments)},U)},count:function(j){var ee=0;return Y(j,function(){ee++}),ee},toArray:function(j){return Y(j,function(ee){return ee})||[]},only:function(j){if(!k(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},$e.Component=A,$e.Fragment=s,$e.Profiler=l,$e.PureComponent=L,$e.StrictMode=o,$e.Suspense=y,$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,$e.__COMPILER_RUNTIME={__proto__:null,c:function(j){return w.H.useMemoCache(j)}},$e.cache=function(j){return function(){return j.apply(null,arguments)}},$e.cloneElement=function(j,ee,U){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var V=N({},j.props),ie=j.key,de=void 0;if(ee!=null)for(ve in ee.ref!==void 0&&(de=void 0),ee.key!==void 0&&(ie=""+ee.key),ee)!O.call(ee,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&ee.ref===void 0||(V[ve]=ee[ve]);var ve=arguments.length-2;if(ve===1)V.children=U;else if(1<ve){for(var Ie=Array(ve),Pe=0;Pe<ve;Pe++)Ie[Pe]=arguments[Pe+2];V.children=Ie}return R(j.type,ie,void 0,void 0,de,V)},$e.createContext=function(j){return j={$$typeof:g,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:u,_context:j},j},$e.createElement=function(j,ee,U){var V,ie={},de=null;if(ee!=null)for(V in ee.key!==void 0&&(de=""+ee.key),ee)O.call(ee,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ie[V]=ee[V]);var ve=arguments.length-2;if(ve===1)ie.children=U;else if(1<ve){for(var Ie=Array(ve),Pe=0;Pe<ve;Pe++)Ie[Pe]=arguments[Pe+2];ie.children=Ie}if(j&&j.defaultProps)for(V in ve=j.defaultProps,ve)ie[V]===void 0&&(ie[V]=ve[V]);return R(j,de,void 0,void 0,null,ie)},$e.createRef=function(){return{current:null}},$e.forwardRef=function(j){return{$$typeof:f,render:j}},$e.isValidElement=k,$e.lazy=function(j){return{$$typeof:p,_payload:{_status:-1,_result:j},_init:Z}},$e.memo=function(j,ee){return{$$typeof:m,type:j,compare:ee===void 0?null:ee}},$e.startTransition=function(j){var ee=w.T,U={};w.T=U;try{var V=j(),ie=w.S;ie!==null&&ie(U,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(we,ge)}catch(de){ge(de)}finally{w.T=ee}},$e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},$e.use=function(j){return w.H.use(j)},$e.useActionState=function(j,ee,U){return w.H.useActionState(j,ee,U)},$e.useCallback=function(j,ee){return w.H.useCallback(j,ee)},$e.useContext=function(j){return w.H.useContext(j)},$e.useDebugValue=function(){},$e.useDeferredValue=function(j,ee){return w.H.useDeferredValue(j,ee)},$e.useEffect=function(j,ee,U){var V=w.H;if(typeof U=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(j,ee)},$e.useId=function(){return w.H.useId()},$e.useImperativeHandle=function(j,ee,U){return w.H.useImperativeHandle(j,ee,U)},$e.useInsertionEffect=function(j,ee){return w.H.useInsertionEffect(j,ee)},$e.useLayoutEffect=function(j,ee){return w.H.useLayoutEffect(j,ee)},$e.useMemo=function(j,ee){return w.H.useMemo(j,ee)},$e.useOptimistic=function(j,ee){return w.H.useOptimistic(j,ee)},$e.useReducer=function(j,ee,U){return w.H.useReducer(j,ee,U)},$e.useRef=function(j){return w.H.useRef(j)},$e.useState=function(j){return w.H.useState(j)},$e.useSyncExternalStore=function(j,ee,U){return w.H.useSyncExternalStore(j,ee,U)},$e.useTransition=function(){return w.H.useTransition()},$e.version="19.1.4",$e}var Rm;function sc(){return Rm||(Rm=1,Tu.exports=YE()),Tu.exports}var Au={exports:{}},Sa={};var _m;function HE(){if(_m)return Sa;_m=1;var a=sc();function r(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var p=2;p<arguments.length;p++)m+="&args[]="+encodeURIComponent(arguments[p])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(y,m,p){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:y,containerInfo:m,implementation:p}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Sa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Sa.createPortal=function(y,m){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(r(299));return u(y,m,null,p)},Sa.flushSync=function(y){var m=g.T,p=o.p;try{if(g.T=null,o.p=2,y)return y()}finally{g.T=m,o.p=p,o.d.f()}},Sa.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(y,m))},Sa.prefetchDNS=function(y){typeof y=="string"&&o.d.D(y)},Sa.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var p=m.as,b=f(p,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;p==="style"?o.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:x}):p==="script"&&o.d.X(y,{crossOrigin:b,integrity:v,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Sa.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var p=f(m.as,m.crossOrigin);o.d.M(y,{crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(y)},Sa.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var p=m.as,b=f(p,m.crossOrigin);o.d.L(y,p,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Sa.preloadModule=function(y,m){if(typeof y=="string")if(m){var p=f(m.as,m.crossOrigin);o.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:p,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(y)},Sa.requestFormReset=function(y){o.d.r(y)},Sa.unstable_batchedUpdates=function(y,m){return y(m)},Sa.useFormState=function(y,m,p){return g.H.useFormState(y,m,p)},Sa.useFormStatus=function(){return g.H.useHostTransitionStatus()},Sa.version="19.1.4",Sa}var Im;function rb(){if(Im)return Au.exports;Im=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),Au.exports=HE(),Au.exports}var Lm;function VE(){if(Lm)return Xo;Lm=1;var a=zE(),r=sc(),s=rb();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(u(e)!==e)throw Error(o(188))}function y(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var d=n.return;if(d===null)break;var h=d.alternate;if(h===null){if(i=d.return,i!==null){n=i;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===n)return f(d),e;if(h===i)return f(d),t;h=h.sibling}throw Error(o(188))}if(n.return!==i.return)n=d,i=h;else{for(var E=!1,T=d.child;T;){if(T===n){E=!0,n=d,i=h;break}if(T===i){E=!0,i=d,n=h;break}T=T.sibling}if(!E){for(T=h.child;T;){if(T===n){E=!0,n=h,i=d;break}if(T===i){E=!0,i=h,n=d;break}T=T.sibling}if(!E)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var p=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),L=Symbol.for("react.consumer"),_=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),k=Symbol.for("react.activity"),te=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var pe=Symbol.for("react.client.reference");function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===pe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case A:return"Profiler";case D:return"StrictMode";case w:return"Suspense";case O:return"SuspenseList";case k:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case _:return(e.displayName||"Context")+".Provider";case L:return(e._context.displayName||"Context")+".Consumer";case C:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}var ne=Array.isArray,Y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge={pending:!1,data:null,method:null,action:null},we=[],j=-1;function ee(e){return{current:e}}function U(e){0>j||(e.current=we[j],we[j]=null,j--)}function V(e,t){j++,we[j]=e.current,e.current=t}var ie=ee(null),de=ee(null),ve=ee(null),Ie=ee(null);function Pe(e,t){switch(V(ve,t),V(de,e),V(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Qg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Qg(t),e=Jg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(ie),V(ie,e)}function vt(){U(ie),U(de),U(ve)}function at(e){e.memoizedState!==null&&V(Ie,e);var t=ie.current,n=Jg(t,e.type);t!==n&&(V(de,e),V(ie,n))}function ut(e){de.current===e&&(U(ie),U(de)),Ie.current===e&&(U(Ie),Bo._currentValue=ge)}var gt=Object.prototype.hasOwnProperty,Ft=a.unstable_scheduleCallback,Et=a.unstable_cancelCallback,$=a.unstable_shouldYield,fe=a.unstable_requestPaint,he=a.unstable_now,z=a.unstable_getCurrentPriorityLevel,ue=a.unstable_ImmediatePriority,Ne=a.unstable_UserBlockingPriority,be=a.unstable_NormalPriority,qe=a.unstable_LowPriority,et=a.unstable_IdlePriority,Fe=a.log,Be=a.unstable_setDisableYieldValue,ma=null,Ee=null;function He(e){if(typeof Fe=="function"&&Be(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(ma,e)}catch{}}var Le=Math.clz32?Math.clz32:ja,aa=Math.log,ke=Math.LN2;function ja(e){return e>>>=0,e===0?32:31-(aa(e)/ke|0)|0}var Ut=256,Vt=4194304;function Tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var d=0,h=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var T=i&134217727;return T!==0?(i=T&~h,i!==0?d=Tt(i):(E&=T,E!==0?d=Tt(E):n||(n=T&~e,n!==0&&(d=Tt(n))))):(T=i&~h,T!==0?d=Tt(T):E!==0?d=Tt(E):n||(n=i&~e,n!==0&&(d=Tt(n)))),d===0?0:t!==0&&t!==d&&(t&h)===0&&(h=d&-d,n=t&-t,h>=n||h===32&&(n&4194048)!==0)?t:d}function ya(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Lt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qa(){var e=Ut;return Ut<<=1,(Ut&4194048)===0&&(Ut=256),e}function Gt(){var e=Vt;return Vt<<=1,(Vt&62914560)===0&&(Vt=4194304),e}function xt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function At(e,t,n,i,d,h){var E=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var T=e.entanglements,q=e.expirationTimes,W=e.hiddenUpdates;for(n=E&~n;0<n;){var se=31-Le(n),ce=1<<se;T[se]=0,q[se]=-1;var K=W[se];if(K!==null)for(W[se]=null,se=0;se<K.length;se++){var Q=K[se];Q!==null&&(Q.lane&=-536870913)}n&=~ce}i!==0&&nn(e,i,0),h!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=h&~(E&~t))}function nn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Le(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function rn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-Le(n),d=1<<i;d&t|e[i]&t&&(e[i]|=t),n&=~d}}function Rn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function _a(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _n(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:bm(e.type))}function ba(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var va=Math.random().toString(36).slice(2),Pt="__reactFiber$"+va,kt="__reactProps$"+va,I="__reactContainer$"+va,J="__reactEvents$"+va,ye="__reactListeners$"+va,Re="__reactHandles$"+va,lt="__reactResources$"+va,Oe="__reactMarker$"+va;function Ke(e){delete e[Pt],delete e[kt],delete e[J],delete e[ye],delete e[Re]}function ct(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[I]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=nm(e);e!==null;){if(n=e[Pt])return n;e=nm(e)}return t}e=n,n=e.parentNode}return null}function B(e){if(e=e[Pt]||e[I]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function me(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Se(e){var t=e[lt];return t||(t=e[lt]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Te(e){e[Oe]=!0}var Ue=new Set,ze={};function rt(e,t){Ct(e,t),Ct(e+"Capture",t)}function Ct(e,t){for(ze[e]=t,e=0;e<t.length;e++)Ue.add(t[e])}var Aa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rt={},Ea={};function gn(e){return gt.call(Ea,e)?!0:gt.call(Rt,e)?!1:Aa.test(e)?Ea[e]=!0:(Rt[e]=!0,!1)}function Ga(e,t,n){if(gn(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Jn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Xa(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var Qs,_i;function In(e){if(Qs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qs=t&&t[1]||"",_i=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qs+e+_i}var Js=!1;function ss(e,t){if(!e||Js)return"";Js=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var ce=function(){throw Error()};if(Object.defineProperty(ce.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ce,[])}catch(Q){var K=Q}Reflect.construct(e,[],ce)}else{try{ce.call()}catch(Q){K=Q}e.call(ce.prototype)}}else{try{throw Error()}catch(Q){K=Q}(ce=e())&&typeof ce.catch=="function"&&ce.catch(function(){})}}catch(Q){if(Q&&K&&typeof Q.stack=="string")return[Q.stack,K.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=i.DetermineComponentFrameRoot(),E=h[0],T=h[1];if(E&&T){var q=E.split(`
`),W=T.split(`
`);for(d=i=0;i<q.length&&!q[i].includes("DetermineComponentFrameRoot");)i++;for(;d<W.length&&!W[d].includes("DetermineComponentFrameRoot");)d++;if(i===q.length||d===W.length)for(i=q.length-1,d=W.length-1;1<=i&&0<=d&&q[i]!==W[d];)d--;for(;1<=i&&0<=d;i--,d--)if(q[i]!==W[d]){if(i!==1||d!==1)do if(i--,d--,0>d||q[i]!==W[d]){var se=`
`+q[i].replace(" at new "," at ");return e.displayName&&se.includes("<anonymous>")&&(se=se.replace("<anonymous>",e.displayName)),se}while(1<=i&&0<=d);break}}}finally{Js=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?In(n):""}function De(e){switch(e.tag){case 26:case 27:case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 15:return ss(e.type,!1);case 11:return ss(e.type.render,!1);case 1:return ss(e.type,!0);case 31:return In("Activity");default:return""}}function Me(e){try{var t="";do t+=De(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bt(e){var t=Xt(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var d=n.get,h=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(E){i=""+E,h.call(this,E)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(E){i=""+E},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wa(e){e._valueTracker||(e._valueTracker=Bt(e))}function er(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Xt(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function ia(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sn=/[\n"\\]/g;function jt(e){return e.replace(sn,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function tr(e,t,n,i,d,h,E,T){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),t!=null?E==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),t!=null?bc(e,E,st(t)):n!=null?bc(e,E,st(n)):i!=null&&e.removeAttribute("value"),d==null&&h!=null&&(e.defaultChecked=!!h),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+st(T):e.removeAttribute("name")}function Xp(e,t,n,i,d,h,E,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),t!=null||n!=null){if(!(h!=="submit"&&h!=="reset"||t!=null))return;n=n!=null?""+st(n):"",t=t!=null?""+st(t):n,T||t===e.value||(e.value=t),e.defaultValue=t}i=i??d,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=T?e.checked:!!i,e.defaultChecked=!!i,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function bc(e,t,n){t==="number"&&ia(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function os(e,t,n,i){if(e=e.options,t){t={};for(var d=0;d<n.length;d++)t["$"+n[d]]=!0;for(n=0;n<e.length;n++)d=t.hasOwnProperty("$"+e[n].value),e[n].selected!==d&&(e[n].selected=d),d&&i&&(e[n].defaultSelected=!0)}else{for(n=""+st(n),t=null,d=0;d<e.length;d++){if(e[d].value===n){e[d].selected=!0,i&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function Wp(e,t,n){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+st(n):""}function Kp(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(ne(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=st(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function is(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ov=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zp(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||Ov.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Qp(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var d in t)i=t[d],t.hasOwnProperty(d)&&n[d]!==i&&Zp(e,d,i)}else for(var h in t)t.hasOwnProperty(h)&&Zp(e,h,t[h])}function vc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ii(e){return qv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ec=null;function wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ls=null,cs=null;function Jp(e){var t=B(e);if(t&&(e=t.stateNode)){var n=e[kt]||null;e:switch(e=t.stateNode,t.type){case"input":if(tr(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+jt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var d=i[kt]||null;if(!d)throw Error(o(90));tr(i,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&er(i)}break e;case"textarea":Wp(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&os(e,!!n.multiple,t,!1)}}}var xc=!1;function ef(e,t,n){if(xc)return e(t,n);xc=!0;try{var i=e(t);return i}finally{if(xc=!1,(ls!==null||cs!==null)&&(ml(),ls&&(t=ls,e=cs,cs=ls=null,Jp(t),e)))for(t=0;t<e.length;t++)Jp(e[t])}}function eo(e,t){var n=e.stateNode;if(n===null)return null;var i=n[kt]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sc=!1;if(Ln)try{var to={};Object.defineProperty(to,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{Sc=!1}var ar=null,Tc=null,Li=null;function tf(){if(Li)return Li;var e,t=Tc,n=t.length,i,d="value"in ar?ar.value:ar.textContent,h=d.length;for(e=0;e<n&&t[e]===d[e];e++);var E=n-e;for(i=1;i<=E&&t[n-i]===d[h-i];i++);return Li=d.slice(e,1<i?1-i:void 0)}function Pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ki(){return!0}function af(){return!1}function Ia(e){function t(n,i,d,h,E){this._reactName=n,this._targetInst=d,this.type=i,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(n=e[T],this[T]=n?n(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ki:af,this.isPropagationStopped=af,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ki)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ki)},persist:function(){},isPersistent:ki}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=Ia(Pr),ao=p({},Pr,{view:0,detail:0}),Mv=Ia(ao),Ac,Dc,no,ji=p({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(Ac=e.screenX-no.screenX,Dc=e.screenY-no.screenY):Dc=Ac=0,no=e),Ac)},movementY:function(e){return"movementY"in e?e.movementY:Dc}}),nf=Ia(ji),$v=p({},ji,{dataTransfer:0}),Fv=Ia($v),Uv=p({},ao,{relatedTarget:0}),Nc=Ia(Uv),Bv=p({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=Ia(Bv),Yv=p({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hv=Ia(Yv),Vv=p({},Pr,{data:0}),rf=Ia(Vv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wv[e])?!!t[e]:!1}function Cc(){return Kv}var Zv=p({},ao,{key:function(e){if(e.key){var t=Gv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cc,charCode:function(e){return e.type==="keypress"?Pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Qv=Ia(Zv),Jv=p({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=Ia(Jv),e0=p({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cc}),t0=Ia(e0),a0=p({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),n0=Ia(a0),r0=p({},ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s0=Ia(r0),o0=p({},Pr,{newState:0,oldState:0}),i0=Ia(o0),l0=[9,13,27,32],Rc=Ln&&"CompositionEvent"in window,ro=null;Ln&&"documentMode"in document&&(ro=document.documentMode);var c0=Ln&&"TextEvent"in window&&!ro,of=Ln&&(!Rc||ro&&8<ro&&11>=ro),lf=" ",cf=!1;function df(e,t){switch(e){case"keyup":return l0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function uf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ds=!1;function d0(e,t){switch(e){case"compositionend":return uf(t);case"keypress":return t.which!==32?null:(cf=!0,lf);case"textInput":return e=t.data,e===lf&&cf?null:e;default:return null}}function u0(e,t){if(ds)return e==="compositionend"||!Rc&&df(e,t)?(e=tf(),Li=Tc=ar=null,ds=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return of&&t.locale!=="ko"?null:t.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!p0[e.type]:t==="textarea"}function ff(e,t,n,i){ls?cs?cs.push(i):cs=[i]:ls=i,t=xl(t,"onChange"),0<t.length&&(n=new Oi("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var so=null,oo=null;function f0(e){Gg(e,0)}function qi(e){var t=me(e);if(er(t))return e}function hf(e,t){if(e==="change")return t}var gf=!1;if(Ln){var _c;if(Ln){var Ic="oninput"in document;if(!Ic){var mf=document.createElement("div");mf.setAttribute("oninput","return;"),Ic=typeof mf.oninput=="function"}_c=Ic}else _c=!1;gf=_c&&(!document.documentMode||9<document.documentMode)}function yf(){so&&(so.detachEvent("onpropertychange",bf),oo=so=null)}function bf(e){if(e.propertyName==="value"&&qi(oo)){var t=[];ff(t,oo,e,wc(e)),ef(f0,t)}}function h0(e,t,n){e==="focusin"?(yf(),so=t,oo=n,so.attachEvent("onpropertychange",bf)):e==="focusout"&&yf()}function g0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(oo)}function m0(e,t){if(e==="click")return qi(t)}function y0(e,t){if(e==="input"||e==="change")return qi(t)}function b0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ma=typeof Object.is=="function"?Object.is:b0;function io(e,t){if(Ma(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var d=n[i];if(!gt.call(t,d)||!Ma(e[d],t[d]))return!1}return!0}function vf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ef(e,t){var n=vf(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vf(n)}}function wf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ia(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ia(e.document)}return t}function Lc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var v0=Ln&&"documentMode"in document&&11>=document.documentMode,us=null,Pc=null,lo=null,kc=!1;function Sf(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;kc||us==null||us!==ia(i)||(i=us,"selectionStart"in i&&Lc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),lo&&io(lo,i)||(lo=i,i=xl(Pc,"onSelect"),0<i.length&&(t=new Oi("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=us)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ps={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionrun:kr("Transition","TransitionRun"),transitionstart:kr("Transition","TransitionStart"),transitioncancel:kr("Transition","TransitionCancel"),transitionend:kr("Transition","TransitionEnd")},Oc={},Tf={};Ln&&(Tf=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Or(e){if(Oc[e])return Oc[e];if(!ps[e])return e;var t=ps[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Tf)return Oc[e]=t[n];return e}var Af=Or("animationend"),Df=Or("animationiteration"),Nf=Or("animationstart"),E0=Or("transitionrun"),w0=Or("transitionstart"),x0=Or("transitioncancel"),Cf=Or("transitionend"),Rf=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function on(e,t){Rf.set(e,t),rt(t,[e])}var _f=new WeakMap;function Wa(e,t){if(typeof e=="object"&&e!==null){var n=_f.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Me(t)},_f.set(e,t),t)}return{value:e,source:t,stack:Me(t)}}var Ka=[],fs=0,qc=0;function Mi(){for(var e=fs,t=qc=fs=0;t<e;){var n=Ka[t];Ka[t++]=null;var i=Ka[t];Ka[t++]=null;var d=Ka[t];Ka[t++]=null;var h=Ka[t];if(Ka[t++]=null,i!==null&&d!==null){var E=i.pending;E===null?d.next=d:(d.next=E.next,E.next=d),i.pending=d}h!==0&&If(n,d,h)}}function $i(e,t,n,i){Ka[fs++]=e,Ka[fs++]=t,Ka[fs++]=n,Ka[fs++]=i,qc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Mc(e,t,n,i){return $i(e,t,n,i),Fi(e)}function hs(e,t){return $i(e,null,null,t),Fi(e)}function If(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var d=!1,h=e.return;h!==null;)h.childLanes|=n,i=h.alternate,i!==null&&(i.childLanes|=n),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(d=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,d&&t!==null&&(d=31-Le(n),e=h.hiddenUpdates,i=e[d],i===null?e[d]=[t]:i.push(t),t.lane=n|536870912),h):null}function Fi(e){if(50<ko)throw ko=0,Yd=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gs={};function S0(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $a(e,t,n,i){return new S0(e,t,n,i)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Pn(e,t){var n=e.alternate;return n===null?(n=$a(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Lf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ui(e,t,n,i,d,h){var E=0;if(i=e,typeof e=="function")$c(e)&&(E=1);else if(typeof e=="string")E=AE(e,n,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case k:return e=$a(31,n,t,d),e.elementType=k,e.lanes=h,e;case N:return jr(n.children,d,h,t);case D:E=8,d|=24;break;case A:return e=$a(12,n,t,d|2),e.elementType=A,e.lanes=h,e;case w:return e=$a(13,n,t,d),e.elementType=w,e.lanes=h,e;case O:return e=$a(19,n,t,d),e.elementType=O,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case _:E=10;break e;case L:E=9;break e;case C:E=11;break e;case R:E=14;break e;case P:E=16,i=null;break e}E=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=$a(E,n,t,d),t.elementType=e,t.type=i,t.lanes=h,t}function jr(e,t,n,i){return e=$a(7,e,i,t),e.lanes=n,e}function Fc(e,t,n){return e=$a(6,e,null,t),e.lanes=n,e}function Uc(e,t,n){return t=$a(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ms=[],ys=0,Bi=null,zi=0,Za=[],Qa=0,qr=null,kn=1,On="";function Mr(e,t){ms[ys++]=zi,ms[ys++]=Bi,Bi=e,zi=t}function Pf(e,t,n){Za[Qa++]=kn,Za[Qa++]=On,Za[Qa++]=qr,qr=e;var i=kn;e=On;var d=32-Le(i)-1;i&=~(1<<d),n+=1;var h=32-Le(t)+d;if(30<h){var E=d-d%5;h=(i&(1<<E)-1).toString(32),i>>=E,d-=E,kn=1<<32-Le(t)+d|n<<d|i,On=h+e}else kn=1<<h|n<<d|i,On=e}function Bc(e){e.return!==null&&(Mr(e,1),Pf(e,1,0))}function zc(e){for(;e===Bi;)Bi=ms[--ys],ms[ys]=null,zi=ms[--ys],ms[ys]=null;for(;e===qr;)qr=Za[--Qa],Za[Qa]=null,On=Za[--Qa],Za[Qa]=null,kn=Za[--Qa],Za[Qa]=null}var Da=null,qt=null,ot=!1,$r=null,mn=!1,Yc=Error(o(519));function Fr(e){var t=Error(o(418,""));throw po(Wa(t,e)),Yc}function kf(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Pt]=e,t[kt]=i,n){case"dialog":We("cancel",t),We("close",t);break;case"iframe":case"object":case"embed":We("load",t);break;case"video":case"audio":for(n=0;n<jo.length;n++)We(jo[n],t);break;case"source":We("error",t);break;case"img":case"image":case"link":We("error",t),We("load",t);break;case"details":We("toggle",t);break;case"input":We("invalid",t),Xp(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),wa(t);break;case"select":We("invalid",t);break;case"textarea":We("invalid",t),Kp(t,i.value,i.defaultValue,i.children),wa(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Zg(t.textContent,n)?(i.popover!=null&&(We("beforetoggle",t),We("toggle",t)),i.onScroll!=null&&We("scroll",t),i.onScrollEnd!=null&&We("scrollend",t),i.onClick!=null&&(t.onclick=Sl),t=!0):t=!1,t||Fr(e)}function Of(e){for(Da=e.return;Da;)switch(Da.tag){case 5:case 13:mn=!1;return;case 27:case 3:mn=!0;return;default:Da=Da.return}}function co(e){if(e!==Da)return!1;if(!ot)return Of(e),ot=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||ou(e.type,e.memoizedProps)),n=!n),n&&qt&&Fr(e),Of(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){qt=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}qt=null}}else t===27?(t=qt,br(e.type)?(e=du,du=null,qt=e):qt=t):qt=Da?cn(e.stateNode.nextSibling):null;return!0}function uo(){qt=Da=null,ot=!1}function jf(){var e=$r;return e!==null&&(ka===null?ka=e:ka.push.apply(ka,e),$r=null),e}function po(e){$r===null?$r=[e]:$r.push(e)}var Hc=ee(null),Ur=null,jn=null;function nr(e,t,n){V(Hc,t._currentValue),t._currentValue=n}function qn(e){e._currentValue=Hc.current,U(Hc)}function Vc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Gc(e,t,n,i){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var h=d.dependencies;if(h!==null){var E=d.child;h=h.firstContext;e:for(;h!==null;){var T=h;h=d;for(var q=0;q<t.length;q++)if(T.context===t[q]){h.lanes|=n,T=h.alternate,T!==null&&(T.lanes|=n),Vc(h.return,n,e),i||(E=null);break e}h=T.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(o(341));E.lanes|=n,h=E.alternate,h!==null&&(h.lanes|=n),Vc(E,n,e),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===e){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function fo(e,t,n,i){e=null;for(var d=t,h=!1;d!==null;){if(!h){if((d.flags&524288)!==0)h=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(o(387));if(E=E.memoizedProps,E!==null){var T=d.type;Ma(d.pendingProps.value,E.value)||(e!==null?e.push(T):e=[T])}}else if(d===Ie.current){if(E=d.alternate,E===null)throw Error(o(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}d=d.return}e!==null&&Gc(t,e,n,i),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!Ma(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Br(e){Ur=e,jn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function xa(e){return qf(Ur,e)}function Hi(e,t){return Ur===null&&Br(e),qf(e,t)}function qf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},jn===null){if(e===null)throw Error(o(308));jn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jn=jn.next=t;return n}var T0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},A0=a.unstable_scheduleCallback,D0=a.unstable_NormalPriority,Qt={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Xc(){return{controller:new T0,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&A0(D0,function(){e.controller.abort()})}var go=null,Wc=0,bs=0,vs=null;function N0(e,t){if(go===null){var n=go=[];Wc=0,bs=Zd(),vs={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Wc++,t.then(Mf,Mf),t}function Mf(){if(--Wc===0&&go!==null){vs!==null&&(vs.status="fulfilled");var e=go;go=null,bs=0,vs=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function C0(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(d){n.push(d)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var d=0;d<n.length;d++)(0,n[d])(t)},function(d){for(i.status="rejected",i.reason=d,d=0;d<n.length;d++)(0,n[d])(void 0)}),i}var $f=Y.S;Y.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&N0(e,t),$f!==null&&$f(e,t)};var zr=ee(null);function Kc(){var e=zr.current;return e!==null?e:St.pooledCache}function Vi(e,t){t===null?V(zr,zr.current):V(zr,t.pool)}function Ff(){var e=Kc();return e===null?null:{parent:Qt._currentValue,pool:e}}var mo=Error(o(460)),Uf=Error(o(474)),Gi=Error(o(542)),Zc={then:function(){}};function Bf(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xi(){}function zf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Xi,Xi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hf(e),e;default:if(typeof t.status=="string")t.then(Xi,Xi);else{if(e=St,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=i}},function(i){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Hf(e),e}throw yo=t,mo}}var yo=null;function Yf(){if(yo===null)throw Error(o(459));var e=yo;return yo=null,e}function Hf(e){if(e===mo||e===Gi)throw Error(o(483))}var rr=!1;function Qc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function sr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function or(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(pt&2)!==0){var d=i.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),i.pending=t,t=Fi(e),If(e,null,n),t}return $i(e,i,t,n),Fi(e)}function bo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,rn(e,n)}}function ed(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var d=null,h=null;if(n=n.firstBaseUpdate,n!==null){do{var E={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};h===null?d=h=E:h=h.next=E,n=n.next}while(n!==null);h===null?d=h=t:h=h.next=t}else d=h=t;n={baseState:i.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var td=!1;function vo(){if(td){var e=vs;if(e!==null)throw e}}function Eo(e,t,n,i){td=!1;var d=e.updateQueue;rr=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var q=T,W=q.next;q.next=null,E===null?h=W:E.next=W,E=q;var se=e.alternate;se!==null&&(se=se.updateQueue,T=se.lastBaseUpdate,T!==E&&(T===null?se.firstBaseUpdate=W:T.next=W,se.lastBaseUpdate=q))}if(h!==null){var ce=d.baseState;E=0,se=W=q=null,T=h;do{var K=T.lane&-536870913,Q=K!==T.lane;if(Q?(Je&K)===K:(i&K)===K){K!==0&&K===bs&&(td=!0),se!==null&&(se=se.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var je=e,Ce=T;K=t;var bt=n;switch(Ce.tag){case 1:if(je=Ce.payload,typeof je=="function"){ce=je.call(bt,ce,K);break e}ce=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ce.payload,K=typeof je=="function"?je.call(bt,ce,K):je,K==null)break e;ce=p({},ce,K);break e;case 2:rr=!0}}K=T.callback,K!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=d.callbacks,Q===null?d.callbacks=[K]:Q.push(K))}else Q={lane:K,tag:T.tag,payload:T.payload,callback:T.callback,next:null},se===null?(W=se=Q,q=ce):se=se.next=Q,E|=K;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;Q=T,T=Q.next,Q.next=null,d.lastBaseUpdate=Q,d.shared.pending=null}}while(!0);se===null&&(q=ce),d.baseState=q,d.firstBaseUpdate=W,d.lastBaseUpdate=se,h===null&&(d.shared.lanes=0),hr|=E,e.lanes=E,e.memoizedState=ce}}function Vf(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Gf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Vf(n[e],t)}var Es=ee(null),Wi=ee(0);function Xf(e,t){e=Yn,V(Wi,e),V(Es,t),Yn=e|t.baseLanes}function ad(){V(Wi,Yn),V(Es,Es.current)}function nd(){Yn=Wi.current,U(Es),U(Wi)}var ir=0,Ye=null,mt=null,Wt=null,Ki=!1,ws=!1,Yr=!1,Zi=0,wo=0,xs=null,R0=0;function zt(){throw Error(o(321))}function rd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ma(e[n],t[n]))return!1;return!0}function sd(e,t,n,i,d,h){return ir=h,Ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=e===null||e.memoizedState===null?Ih:Lh,Yr=!1,h=n(i,d),Yr=!1,ws&&(h=Kf(t,n,i,d)),Wf(e),h}function Wf(e){Y.H=nl;var t=mt!==null&&mt.next!==null;if(ir=0,Wt=mt=Ye=null,Ki=!1,wo=0,xs=null,t)throw Error(o(300));e===null||na||(e=e.dependencies,e!==null&&Yi(e)&&(na=!0))}function Kf(e,t,n,i){Ye=e;var d=0;do{if(ws&&(xs=null),wo=0,ws=!1,25<=d)throw Error(o(301));if(d+=1,Wt=mt=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}Y.H=j0,h=t(n,i)}while(ws);return h}function _0(){var e=Y.H,t=e.useState()[0];return t=typeof t.then=="function"?xo(t):t,e=e.useState()[0],(mt!==null?mt.memoizedState:null)!==e&&(Ye.flags|=1024),t}function od(){var e=Zi!==0;return Zi=0,e}function id(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ld(e){if(Ki){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Ki=!1}ir=0,Wt=mt=Ye=null,ws=!1,wo=Zi=0,xs=null}function La(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?Ye.memoizedState=Wt=e:Wt=Wt.next=e,Wt}function Kt(){if(mt===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=mt.next;var t=Wt===null?Ye.memoizedState:Wt.next;if(t!==null)Wt=t,mt=e;else{if(e===null)throw Ye.alternate===null?Error(o(467)):Error(o(310));mt=e,e={memoizedState:mt.memoizedState,baseState:mt.baseState,baseQueue:mt.baseQueue,queue:mt.queue,next:null},Wt===null?Ye.memoizedState=Wt=e:Wt=Wt.next=e}return Wt}function cd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(e){var t=wo;return wo+=1,xs===null&&(xs=[]),e=zf(xs,e,t),t=Ye,(Wt===null?t.memoizedState:Wt.next)===null&&(t=t.alternate,Y.H=t===null||t.memoizedState===null?Ih:Lh),e}function Qi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xo(e);if(e.$$typeof===_)return xa(e)}throw Error(o(438,String(e)))}function dd(e){var t=null,n=Ye.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Ye.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=cd(),Ye.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=te;return t.index++,n}function Mn(e,t){return typeof t=="function"?t(e):t}function Ji(e){var t=Kt();return ud(t,mt,e)}function ud(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var d=e.baseQueue,h=i.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}t.baseQueue=d=h,i.pending=null}if(h=e.baseState,d===null)e.memoizedState=h;else{t=d.next;var T=E=null,q=null,W=t,se=!1;do{var ce=W.lane&-536870913;if(ce!==W.lane?(Je&ce)===ce:(ir&ce)===ce){var K=W.revertLane;if(K===0)q!==null&&(q=q.next={lane:0,revertLane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),ce===bs&&(se=!0);else if((ir&K)===K){W=W.next,K===bs&&(se=!0);continue}else ce={lane:0,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},q===null?(T=q=ce,E=h):q=q.next=ce,Ye.lanes|=K,hr|=K;ce=W.action,Yr&&n(h,ce),h=W.hasEagerState?W.eagerState:n(h,ce)}else K={lane:ce,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},q===null?(T=q=K,E=h):q=q.next=K,Ye.lanes|=ce,hr|=ce;W=W.next}while(W!==null&&W!==t);if(q===null?E=h:q.next=T,!Ma(h,e.memoizedState)&&(na=!0,se&&(n=vs,n!==null)))throw n;e.memoizedState=h,e.baseState=E,e.baseQueue=q,i.lastRenderedState=h}return d===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function pd(e){var t=Kt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,d=n.pending,h=t.memoizedState;if(d!==null){n.pending=null;var E=d=d.next;do h=e(h,E.action),E=E.next;while(E!==d);Ma(h,t.memoizedState)||(na=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),n.lastRenderedState=h}return[h,i]}function Zf(e,t,n){var i=Ye,d=Kt(),h=ot;if(h){if(n===void 0)throw Error(o(407));n=n()}else n=t();var E=!Ma((mt||d).memoizedState,n);E&&(d.memoizedState=n,na=!0),d=d.queue;var T=eh.bind(null,i,d,e);if(So(2048,8,T,[e]),d.getSnapshot!==t||E||Wt!==null&&Wt.memoizedState.tag&1){if(i.flags|=2048,Ss(9,el(),Jf.bind(null,i,d,n,t),null),St===null)throw Error(o(349));h||(ir&124)!==0||Qf(i,t,n)}return n}function Qf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ye.updateQueue,t===null?(t=cd(),Ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jf(e,t,n,i){t.value=n,t.getSnapshot=i,th(t)&&ah(e)}function eh(e,t,n){return n(function(){th(t)&&ah(e)})}function th(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ma(e,n)}catch{return!0}}function ah(e){var t=hs(e,2);t!==null&&Ya(t,e,2)}function fd(e){var t=La();if(typeof e=="function"){var n=e;if(e=n(),Yr){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:e},t}function nh(e,t,n,i){return e.baseState=n,ud(e,mt,typeof i=="function"?i:Mn)}function I0(e,t,n,i,d){if(al(e))throw Error(o(485));if(e=t.action,e!==null){var h={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};Y.T!==null?n(!0):h.isTransition=!1,i(h),n=t.pending,n===null?(h.next=t.pending=h,rh(t,h)):(h.next=n.next,t.pending=n.next=h)}}function rh(e,t){var n=t.action,i=t.payload,d=e.state;if(t.isTransition){var h=Y.T,E={};Y.T=E;try{var T=n(d,i),q=Y.S;q!==null&&q(E,T),sh(e,t,T)}catch(W){hd(e,t,W)}finally{Y.T=h}}else try{h=n(d,i),sh(e,t,h)}catch(W){hd(e,t,W)}}function sh(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){oh(e,t,i)},function(i){return hd(e,t,i)}):oh(e,t,n)}function oh(e,t,n){t.status="fulfilled",t.value=n,ih(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,rh(e,n)))}function hd(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,ih(t),t=t.next;while(t!==i)}e.action=null}function ih(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lh(e,t){return t}function ch(e,t){if(ot){var n=St.formState;if(n!==null){e:{var i=Ye;if(ot){if(qt){t:{for(var d=qt,h=mn;d.nodeType!==8;){if(!h){d=null;break t}if(d=cn(d.nextSibling),d===null){d=null;break t}}h=d.data,d=h==="F!"||h==="F"?d:null}if(d){qt=cn(d.nextSibling),i=d.data==="F!";break e}}Fr(i)}i=!1}i&&(t=n[0])}}return n=La(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lh,lastRenderedState:t},n.queue=i,n=Ch.bind(null,Ye,i),i.dispatch=n,i=fd(!1),h=vd.bind(null,Ye,!1,i.queue),i=La(),d={state:t,dispatch:null,action:e,pending:null},i.queue=d,n=I0.bind(null,Ye,d,h,n),d.dispatch=n,i.memoizedState=e,[t,n,!1]}function dh(e){var t=Kt();return uh(t,mt,e)}function uh(e,t,n){if(t=ud(e,t,lh)[0],e=Ji(Mn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=xo(t)}catch(E){throw E===mo?Gi:E}else i=t;t=Kt();var d=t.queue,h=d.dispatch;return n!==t.memoizedState&&(Ye.flags|=2048,Ss(9,el(),L0.bind(null,d,n),null)),[i,h,e]}function L0(e,t){e.action=t}function ph(e){var t=Kt(),n=mt;if(n!==null)return uh(t,n,e);Kt(),t=t.memoizedState,n=Kt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function Ss(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Ye.updateQueue,t===null&&(t=cd(),Ye.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function el(){return{destroy:void 0,resource:void 0}}function fh(){return Kt().memoizedState}function tl(e,t,n,i){var d=La();i=i===void 0?null:i,Ye.flags|=e,d.memoizedState=Ss(1|t,el(),n,i)}function So(e,t,n,i){var d=Kt();i=i===void 0?null:i;var h=d.memoizedState.inst;mt!==null&&i!==null&&rd(i,mt.memoizedState.deps)?d.memoizedState=Ss(t,h,n,i):(Ye.flags|=e,d.memoizedState=Ss(1|t,h,n,i))}function hh(e,t){tl(8390656,8,e,t)}function gh(e,t){So(2048,8,e,t)}function mh(e,t){return So(4,2,e,t)}function yh(e,t){return So(4,4,e,t)}function bh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vh(e,t,n){n=n!=null?n.concat([e]):null,So(4,4,bh.bind(null,t,e),n)}function gd(){}function Eh(e,t){var n=Kt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&rd(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function wh(e,t){var n=Kt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&rd(t,i[1]))return i[0];if(i=e(),Yr){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[i,t],i}function md(e,t,n){return n===void 0||(ir&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Tg(),Ye.lanes|=e,hr|=e,n)}function xh(e,t,n,i){return Ma(n,t)?n:Es.current!==null?(e=md(e,n,i),Ma(e,t)||(na=!0),e):(ir&42)===0?(na=!0,e.memoizedState=n):(e=Tg(),Ye.lanes|=e,hr|=e,t)}function Sh(e,t,n,i,d){var h=Z.p;Z.p=h!==0&&8>h?h:8;var E=Y.T,T={};Y.T=T,vd(e,!1,t,n);try{var q=d(),W=Y.S;if(W!==null&&W(T,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var se=C0(q,i);To(e,t,se,za(e))}else To(e,t,i,za(e))}catch(ce){To(e,t,{then:function(){},status:"rejected",reason:ce},za())}finally{Z.p=h,Y.T=E}}function P0(){}function yd(e,t,n,i){if(e.tag!==5)throw Error(o(476));var d=Th(e).queue;Sh(e,d,t,ge,n===null?P0:function(){return Ah(e),n(i)})}function Th(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ge,baseState:ge,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:ge},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ah(e){var t=Th(e).next.queue;To(e,t,{},za())}function bd(){return xa(Bo)}function Dh(){return Kt().memoizedState}function Nh(){return Kt().memoizedState}function k0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=za();e=sr(n);var i=or(t,e,n);i!==null&&(Ya(i,t,n),bo(i,t,n)),t={cache:Xc()},e.payload=t;return}t=t.return}}function O0(e,t,n){var i=za();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},al(e)?Rh(t,n):(n=Mc(e,t,n,i),n!==null&&(Ya(n,e,i),_h(n,t,i)))}function Ch(e,t,n){var i=za();To(e,t,n,i)}function To(e,t,n,i){var d={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(al(e))Rh(t,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var E=t.lastRenderedState,T=h(E,n);if(d.hasEagerState=!0,d.eagerState=T,Ma(T,E))return $i(e,t,d,0),St===null&&Mi(),!1}catch{}if(n=Mc(e,t,d,i),n!==null)return Ya(n,e,i),_h(n,t,i),!0}return!1}function vd(e,t,n,i){if(i={lane:2,revertLane:Zd(),action:i,hasEagerState:!1,eagerState:null,next:null},al(e)){if(t)throw Error(o(479))}else t=Mc(e,n,i,2),t!==null&&Ya(t,e,2)}function al(e){var t=e.alternate;return e===Ye||t!==null&&t===Ye}function Rh(e,t){ws=Ki=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _h(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,rn(e,n)}}var nl={readContext:xa,use:Qi,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useLayoutEffect:zt,useInsertionEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useSyncExternalStore:zt,useId:zt,useHostTransitionStatus:zt,useFormState:zt,useActionState:zt,useOptimistic:zt,useMemoCache:zt,useCacheRefresh:zt},Ih={readContext:xa,use:Qi,useCallback:function(e,t){return La().memoizedState=[e,t===void 0?null:t],e},useContext:xa,useEffect:hh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,tl(4194308,4,bh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return tl(4194308,4,e,t)},useInsertionEffect:function(e,t){tl(4,2,e,t)},useMemo:function(e,t){var n=La();t=t===void 0?null:t;var i=e();if(Yr){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=La();if(n!==void 0){var d=n(t);if(Yr){He(!0);try{n(t)}finally{He(!1)}}}else d=t;return i.memoizedState=i.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},i.queue=e,e=e.dispatch=O0.bind(null,Ye,e),[i.memoizedState,e]},useRef:function(e){var t=La();return e={current:e},t.memoizedState=e},useState:function(e){e=fd(e);var t=e.queue,n=Ch.bind(null,Ye,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gd,useDeferredValue:function(e,t){var n=La();return md(n,e,t)},useTransition:function(){var e=fd(!1);return e=Sh.bind(null,Ye,e.queue,!0,!1),La().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Ye,d=La();if(ot){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),St===null)throw Error(o(349));(Je&124)!==0||Qf(i,t,n)}d.memoizedState=n;var h={value:n,getSnapshot:t};return d.queue=h,hh(eh.bind(null,i,h,e),[e]),i.flags|=2048,Ss(9,el(),Jf.bind(null,i,h,n,t),null),n},useId:function(){var e=La(),t=St.identifierPrefix;if(ot){var n=On,i=kn;n=(i&~(1<<32-Le(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=Zi++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=R0++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:bd,useFormState:ch,useActionState:ch,useOptimistic:function(e){var t=La();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=vd.bind(null,Ye,!0,n),n.dispatch=t,[e,t]},useMemoCache:dd,useCacheRefresh:function(){return La().memoizedState=k0.bind(null,Ye)}},Lh={readContext:xa,use:Qi,useCallback:Eh,useContext:xa,useEffect:gh,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:yh,useMemo:wh,useReducer:Ji,useRef:fh,useState:function(){return Ji(Mn)},useDebugValue:gd,useDeferredValue:function(e,t){var n=Kt();return xh(n,mt.memoizedState,e,t)},useTransition:function(){var e=Ji(Mn)[0],t=Kt().memoizedState;return[typeof e=="boolean"?e:xo(e),t]},useSyncExternalStore:Zf,useId:Dh,useHostTransitionStatus:bd,useFormState:dh,useActionState:dh,useOptimistic:function(e,t){var n=Kt();return nh(n,mt,e,t)},useMemoCache:dd,useCacheRefresh:Nh},j0={readContext:xa,use:Qi,useCallback:Eh,useContext:xa,useEffect:gh,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:yh,useMemo:wh,useReducer:pd,useRef:fh,useState:function(){return pd(Mn)},useDebugValue:gd,useDeferredValue:function(e,t){var n=Kt();return mt===null?md(n,e,t):xh(n,mt.memoizedState,e,t)},useTransition:function(){var e=pd(Mn)[0],t=Kt().memoizedState;return[typeof e=="boolean"?e:xo(e),t]},useSyncExternalStore:Zf,useId:Dh,useHostTransitionStatus:bd,useFormState:ph,useActionState:ph,useOptimistic:function(e,t){var n=Kt();return mt!==null?nh(n,mt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:dd,useCacheRefresh:Nh},Ts=null,Ao=0;function rl(e){var t=Ao;return Ao+=1,Ts===null&&(Ts=[]),zf(Ts,e,t)}function Do(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function sl(e,t){throw t.$$typeof===b?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ph(e){var t=e._init;return t(e._payload)}function kh(e){function t(H,F){if(e){var G=H.deletions;G===null?(H.deletions=[F],H.flags|=16):G.push(F)}}function n(H,F){if(!e)return null;for(;F!==null;)t(H,F),F=F.sibling;return null}function i(H){for(var F=new Map;H!==null;)H.key!==null?F.set(H.key,H):F.set(H.index,H),H=H.sibling;return F}function d(H,F){return H=Pn(H,F),H.index=0,H.sibling=null,H}function h(H,F,G){return H.index=G,e?(G=H.alternate,G!==null?(G=G.index,G<F?(H.flags|=67108866,F):G):(H.flags|=67108866,F)):(H.flags|=1048576,F)}function E(H){return e&&H.alternate===null&&(H.flags|=67108866),H}function T(H,F,G,le){return F===null||F.tag!==6?(F=Fc(G,H.mode,le),F.return=H,F):(F=d(F,G),F.return=H,F)}function q(H,F,G,le){var xe=G.type;return xe===N?se(H,F,G.props.children,le,G.key):F!==null&&(F.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===P&&Ph(xe)===F.type)?(F=d(F,G.props),Do(F,G),F.return=H,F):(F=Ui(G.type,G.key,G.props,null,H.mode,le),Do(F,G),F.return=H,F)}function W(H,F,G,le){return F===null||F.tag!==4||F.stateNode.containerInfo!==G.containerInfo||F.stateNode.implementation!==G.implementation?(F=Uc(G,H.mode,le),F.return=H,F):(F=d(F,G.children||[]),F.return=H,F)}function se(H,F,G,le,xe){return F===null||F.tag!==7?(F=jr(G,H.mode,le,xe),F.return=H,F):(F=d(F,G),F.return=H,F)}function ce(H,F,G){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=Fc(""+F,H.mode,G),F.return=H,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case v:return G=Ui(F.type,F.key,F.props,null,H.mode,G),Do(G,F),G.return=H,G;case x:return F=Uc(F,H.mode,G),F.return=H,F;case P:var le=F._init;return F=le(F._payload),ce(H,F,G)}if(ne(F)||ae(F))return F=jr(F,H.mode,G,null),F.return=H,F;if(typeof F.then=="function")return ce(H,rl(F),G);if(F.$$typeof===_)return ce(H,Hi(H,F),G);sl(H,F)}return null}function K(H,F,G,le){var xe=F!==null?F.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return xe!==null?null:T(H,F,""+G,le);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return G.key===xe?q(H,F,G,le):null;case x:return G.key===xe?W(H,F,G,le):null;case P:return xe=G._init,G=xe(G._payload),K(H,F,G,le)}if(ne(G)||ae(G))return xe!==null?null:se(H,F,G,le,null);if(typeof G.then=="function")return K(H,F,rl(G),le);if(G.$$typeof===_)return K(H,F,Hi(H,G),le);sl(H,G)}return null}function Q(H,F,G,le,xe){if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return H=H.get(G)||null,T(F,H,""+le,xe);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case v:return H=H.get(le.key===null?G:le.key)||null,q(F,H,le,xe);case x:return H=H.get(le.key===null?G:le.key)||null,W(F,H,le,xe);case P:var Ve=le._init;return le=Ve(le._payload),Q(H,F,G,le,xe)}if(ne(le)||ae(le))return H=H.get(G)||null,se(F,H,le,xe,null);if(typeof le.then=="function")return Q(H,F,G,rl(le),xe);if(le.$$typeof===_)return Q(H,F,G,Hi(F,le),xe);sl(F,le)}return null}function je(H,F,G,le){for(var xe=null,Ve=null,Ae=F,_e=F=0,sa=null;Ae!==null&&_e<G.length;_e++){Ae.index>_e?(sa=Ae,Ae=null):sa=Ae.sibling;var tt=K(H,Ae,G[_e],le);if(tt===null){Ae===null&&(Ae=sa);break}e&&Ae&&tt.alternate===null&&t(H,Ae),F=h(tt,F,_e),Ve===null?xe=tt:Ve.sibling=tt,Ve=tt,Ae=sa}if(_e===G.length)return n(H,Ae),ot&&Mr(H,_e),xe;if(Ae===null){for(;_e<G.length;_e++)Ae=ce(H,G[_e],le),Ae!==null&&(F=h(Ae,F,_e),Ve===null?xe=Ae:Ve.sibling=Ae,Ve=Ae);return ot&&Mr(H,_e),xe}for(Ae=i(Ae);_e<G.length;_e++)sa=Q(Ae,H,_e,G[_e],le),sa!==null&&(e&&sa.alternate!==null&&Ae.delete(sa.key===null?_e:sa.key),F=h(sa,F,_e),Ve===null?xe=sa:Ve.sibling=sa,Ve=sa);return e&&Ae.forEach(function(Sr){return t(H,Sr)}),ot&&Mr(H,_e),xe}function Ce(H,F,G,le){if(G==null)throw Error(o(151));for(var xe=null,Ve=null,Ae=F,_e=F=0,sa=null,tt=G.next();Ae!==null&&!tt.done;_e++,tt=G.next()){Ae.index>_e?(sa=Ae,Ae=null):sa=Ae.sibling;var Sr=K(H,Ae,tt.value,le);if(Sr===null){Ae===null&&(Ae=sa);break}e&&Ae&&Sr.alternate===null&&t(H,Ae),F=h(Sr,F,_e),Ve===null?xe=Sr:Ve.sibling=Sr,Ve=Sr,Ae=sa}if(tt.done)return n(H,Ae),ot&&Mr(H,_e),xe;if(Ae===null){for(;!tt.done;_e++,tt=G.next())tt=ce(H,tt.value,le),tt!==null&&(F=h(tt,F,_e),Ve===null?xe=tt:Ve.sibling=tt,Ve=tt);return ot&&Mr(H,_e),xe}for(Ae=i(Ae);!tt.done;_e++,tt=G.next())tt=Q(Ae,H,_e,tt.value,le),tt!==null&&(e&&tt.alternate!==null&&Ae.delete(tt.key===null?_e:tt.key),F=h(tt,F,_e),Ve===null?xe=tt:Ve.sibling=tt,Ve=tt);return e&&Ae.forEach(function(qE){return t(H,qE)}),ot&&Mr(H,_e),xe}function bt(H,F,G,le){if(typeof G=="object"&&G!==null&&G.type===N&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case v:e:{for(var xe=G.key;F!==null;){if(F.key===xe){if(xe=G.type,xe===N){if(F.tag===7){n(H,F.sibling),le=d(F,G.props.children),le.return=H,H=le;break e}}else if(F.elementType===xe||typeof xe=="object"&&xe!==null&&xe.$$typeof===P&&Ph(xe)===F.type){n(H,F.sibling),le=d(F,G.props),Do(le,G),le.return=H,H=le;break e}n(H,F);break}else t(H,F);F=F.sibling}G.type===N?(le=jr(G.props.children,H.mode,le,G.key),le.return=H,H=le):(le=Ui(G.type,G.key,G.props,null,H.mode,le),Do(le,G),le.return=H,H=le)}return E(H);case x:e:{for(xe=G.key;F!==null;){if(F.key===xe)if(F.tag===4&&F.stateNode.containerInfo===G.containerInfo&&F.stateNode.implementation===G.implementation){n(H,F.sibling),le=d(F,G.children||[]),le.return=H,H=le;break e}else{n(H,F);break}else t(H,F);F=F.sibling}le=Uc(G,H.mode,le),le.return=H,H=le}return E(H);case P:return xe=G._init,G=xe(G._payload),bt(H,F,G,le)}if(ne(G))return je(H,F,G,le);if(ae(G)){if(xe=ae(G),typeof xe!="function")throw Error(o(150));return G=xe.call(G),Ce(H,F,G,le)}if(typeof G.then=="function")return bt(H,F,rl(G),le);if(G.$$typeof===_)return bt(H,F,Hi(H,G),le);sl(H,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,F!==null&&F.tag===6?(n(H,F.sibling),le=d(F,G),le.return=H,H=le):(n(H,F),le=Fc(G,H.mode,le),le.return=H,H=le),E(H)):n(H,F)}return function(H,F,G,le){try{Ao=0;var xe=bt(H,F,G,le);return Ts=null,xe}catch(Ae){if(Ae===mo||Ae===Gi)throw Ae;var Ve=$a(29,Ae,null,H.mode);return Ve.lanes=le,Ve.return=H,Ve}}}var As=kh(!0),Oh=kh(!1),Ja=ee(null),yn=null;function lr(e){var t=e.alternate;V(Jt,Jt.current&1),V(Ja,e),yn===null&&(t===null||Es.current!==null||t.memoizedState!==null)&&(yn=e)}function jh(e){if(e.tag===22){if(V(Jt,Jt.current),V(Ja,e),yn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(yn=e)}}else cr()}function cr(){V(Jt,Jt.current),V(Ja,Ja.current)}function $n(e){U(Ja),yn===e&&(yn=null),U(Jt)}var Jt=ee(0);function ol(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||cu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Ed(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:p({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=za(),d=sr(i);d.payload=t,n!=null&&(d.callback=n),t=or(e,d,i),t!==null&&(Ya(t,e,i),bo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=za(),d=sr(i);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=or(e,d,i),t!==null&&(Ya(t,e,i),bo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=za(),i=sr(n);i.tag=2,t!=null&&(i.callback=t),t=or(e,i,n),t!==null&&(Ya(t,e,n),bo(t,e,n))}};function qh(e,t,n,i,d,h,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,h,E):t.prototype&&t.prototype.isPureReactComponent?!io(n,i)||!io(d,h):!0}function Mh(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&wd.enqueueReplaceState(t,t.state,null)}function Hr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=p({},n));for(var d in e)n[d]===void 0&&(n[d]=e[d])}return n}var il=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $h(e){il(e)}function Fh(e){console.error(e)}function Uh(e){il(e)}function ll(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Bh(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function xd(e,t,n){return n=sr(n),n.tag=3,n.payload={element:null},n.callback=function(){ll(e,t)},n}function zh(e){return e=sr(e),e.tag=3,e}function Yh(e,t,n,i){var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var h=i.value;e.payload=function(){return d(h)},e.callback=function(){Bh(t,n,i)}}var E=n.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Bh(t,n,i),typeof d!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})})}function q0(e,t,n,i,d){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&fo(t,n,d,!0),n=Ja.current,n!==null){switch(n.tag){case 13:return yn===null?Vd():n.alternate===null&&Mt===0&&(Mt=3),n.flags&=-257,n.flags|=65536,n.lanes=d,i===Zc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),Xd(e,i,d)),!1;case 22:return n.flags|=65536,i===Zc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),Xd(e,i,d)),!1}throw Error(o(435,n.tag))}return Xd(e,i,d),Vd(),!1}if(ot)return t=Ja.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,i!==Yc&&(e=Error(o(422),{cause:i}),po(Wa(e,n)))):(i!==Yc&&(t=Error(o(423),{cause:i}),po(Wa(t,n))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,i=Wa(i,n),d=xd(e.stateNode,i,d),ed(e,d),Mt!==4&&(Mt=2)),!1;var h=Error(o(520),{cause:i});if(h=Wa(h,n),Po===null?Po=[h]:Po.push(h),Mt!==4&&(Mt=2),t===null)return!0;i=Wa(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=d&-d,n.lanes|=e,e=xd(n.stateNode,i,e),ed(n,e),!1;case 1:if(t=n.type,h=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(gr===null||!gr.has(h))))return n.flags|=65536,d&=-d,n.lanes|=d,d=zh(d),Yh(d,e,n,i),ed(n,d),!1}n=n.return}while(n!==null);return!1}var Hh=Error(o(461)),na=!1;function la(e,t,n,i){t.child=e===null?Oh(t,null,n,i):As(t,e.child,n,i)}function Vh(e,t,n,i,d){n=n.render;var h=t.ref;if("ref"in i){var E={};for(var T in i)T!=="ref"&&(E[T]=i[T])}else E=i;return Br(t),i=sd(e,t,n,E,h,d),T=od(),e!==null&&!na?(id(e,t,d),Fn(e,t,d)):(ot&&T&&Bc(t),t.flags|=1,la(e,t,i,d),t.child)}function Gh(e,t,n,i,d){if(e===null){var h=n.type;return typeof h=="function"&&!$c(h)&&h.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=h,Xh(e,t,h,i,d)):(e=Ui(n.type,null,i,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!_d(e,d)){var E=h.memoizedProps;if(n=n.compare,n=n!==null?n:io,n(E,i)&&e.ref===t.ref)return Fn(e,t,d)}return t.flags|=1,e=Pn(h,i),e.ref=t.ref,e.return=t,t.child=e}function Xh(e,t,n,i,d){if(e!==null){var h=e.memoizedProps;if(io(h,i)&&e.ref===t.ref)if(na=!1,t.pendingProps=i=h,_d(e,d))(e.flags&131072)!==0&&(na=!0);else return t.lanes=e.lanes,Fn(e,t,d)}return Sd(e,t,n,i,d)}function Wh(e,t,n){var i=t.pendingProps,d=i.children,h=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=h!==null?h.baseLanes|n:n,e!==null){for(d=t.child=e.child,h=0;d!==null;)h=h|d.lanes|d.childLanes,d=d.sibling;t.childLanes=h&~i}else t.childLanes=0,t.child=null;return Kh(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vi(t,h!==null?h.cachePool:null),h!==null?Xf(t,h):ad(),jh(t);else return t.lanes=t.childLanes=536870912,Kh(e,t,h!==null?h.baseLanes|n:n,n)}else h!==null?(Vi(t,h.cachePool),Xf(t,h),cr(),t.memoizedState=null):(e!==null&&Vi(t,null),ad(),cr());return la(e,t,d,n),t.child}function Kh(e,t,n,i){var d=Kc();return d=d===null?null:{parent:Qt._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&Vi(t,null),ad(),jh(t),e!==null&&fo(e,t,i,!0),null}function cl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Sd(e,t,n,i,d){return Br(t),n=sd(e,t,n,i,void 0,d),i=od(),e!==null&&!na?(id(e,t,d),Fn(e,t,d)):(ot&&i&&Bc(t),t.flags|=1,la(e,t,n,d),t.child)}function Zh(e,t,n,i,d,h){return Br(t),t.updateQueue=null,n=Kf(t,i,n,d),Wf(e),i=od(),e!==null&&!na?(id(e,t,h),Fn(e,t,h)):(ot&&i&&Bc(t),t.flags|=1,la(e,t,n,h),t.child)}function Qh(e,t,n,i,d){if(Br(t),t.stateNode===null){var h=gs,E=n.contextType;typeof E=="object"&&E!==null&&(h=xa(E)),h=new n(i,h),t.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=wd,t.stateNode=h,h._reactInternals=t,h=t.stateNode,h.props=i,h.state=t.memoizedState,h.refs={},Qc(t),E=n.contextType,h.context=typeof E=="object"&&E!==null?xa(E):gs,h.state=t.memoizedState,E=n.getDerivedStateFromProps,typeof E=="function"&&(Ed(t,n,E,i),h.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&wd.enqueueReplaceState(h,h.state,null),Eo(t,i,h,d),vo(),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){h=t.stateNode;var T=t.memoizedProps,q=Hr(n,T);h.props=q;var W=h.context,se=n.contextType;E=gs,typeof se=="object"&&se!==null&&(E=xa(se));var ce=n.getDerivedStateFromProps;se=typeof ce=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=t.pendingProps!==T,se||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||W!==E)&&Mh(t,h,i,E),rr=!1;var K=t.memoizedState;h.state=K,Eo(t,i,h,d),vo(),W=t.memoizedState,T||K!==W||rr?(typeof ce=="function"&&(Ed(t,n,ce,i),W=t.memoizedState),(q=rr||qh(t,n,q,i,K,W,E))?(se||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=W),h.props=i,h.state=W,h.context=E,i=q):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{h=t.stateNode,Jc(e,t),E=t.memoizedProps,se=Hr(n,E),h.props=se,ce=t.pendingProps,K=h.context,W=n.contextType,q=gs,typeof W=="object"&&W!==null&&(q=xa(W)),T=n.getDerivedStateFromProps,(W=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==ce||K!==q)&&Mh(t,h,i,q),rr=!1,K=t.memoizedState,h.state=K,Eo(t,i,h,d),vo();var Q=t.memoizedState;E!==ce||K!==Q||rr||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof T=="function"&&(Ed(t,n,T,i),Q=t.memoizedState),(se=rr||qh(t,n,se,i,K,Q,q)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(W||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(i,Q,q),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(i,Q,q)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Q),h.props=i,h.state=Q,h.context=q,i=se):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),i=!1)}return h=i,cl(e,t),i=(t.flags&128)!==0,h||i?(h=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:h.render(),t.flags|=1,e!==null&&i?(t.child=As(t,e.child,null,d),t.child=As(t,null,n,d)):la(e,t,n,d),t.memoizedState=h.state,e=t.child):e=Fn(e,t,d),e}function Jh(e,t,n,i){return uo(),t.flags|=256,la(e,t,n,i),t.child}var Td={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ad(e){return{baseLanes:e,cachePool:Ff()}}function Dd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=en),e}function eg(e,t,n){var i=t.pendingProps,d=!1,h=(t.flags&128)!==0,E;if((E=h)||(E=e!==null&&e.memoizedState===null?!1:(Jt.current&2)!==0),E&&(d=!0,t.flags&=-129),E=(t.flags&32)!==0,t.flags&=-33,e===null){if(ot){if(d?lr(t):cr(),ot){var T=qt,q;if(q=T){e:{for(q=T,T=mn;q.nodeType!==8;){if(!T){T=null;break e}if(q=cn(q.nextSibling),q===null){T=null;break e}}T=q}T!==null?(t.memoizedState={dehydrated:T,treeContext:qr!==null?{id:kn,overflow:On}:null,retryLane:536870912,hydrationErrors:null},q=$a(18,null,null,0),q.stateNode=T,q.return=t,t.child=q,Da=t,qt=null,q=!0):q=!1}q||Fr(t)}if(T=t.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return cu(T)?t.lanes=32:t.lanes=536870912,null;$n(t)}return T=i.children,i=i.fallback,d?(cr(),d=t.mode,T=dl({mode:"hidden",children:T},d),i=jr(i,d,n,null),T.return=t,i.return=t,T.sibling=i,t.child=T,d=t.child,d.memoizedState=Ad(n),d.childLanes=Dd(e,E,n),t.memoizedState=Td,i):(lr(t),Nd(t,T))}if(q=e.memoizedState,q!==null&&(T=q.dehydrated,T!==null)){if(h)t.flags&256?(lr(t),t.flags&=-257,t=Cd(e,t,n)):t.memoizedState!==null?(cr(),t.child=e.child,t.flags|=128,t=null):(cr(),d=i.fallback,T=t.mode,i=dl({mode:"visible",children:i.children},T),d=jr(d,T,n,null),d.flags|=2,i.return=t,d.return=t,i.sibling=d,t.child=i,As(t,e.child,null,n),i=t.child,i.memoizedState=Ad(n),i.childLanes=Dd(e,E,n),t.memoizedState=Td,t=d);else if(lr(t),cu(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var W=E.dgst;E=W,i=Error(o(419)),i.stack="",i.digest=E,po({value:i,source:null,stack:null}),t=Cd(e,t,n)}else if(na||fo(e,t,n,!1),E=(n&e.childLanes)!==0,na||E){if(E=St,E!==null&&(i=n&-n,i=(i&42)!==0?1:Rn(i),i=(i&(E.suspendedLanes|n))!==0?0:i,i!==0&&i!==q.retryLane))throw q.retryLane=i,hs(e,i),Ya(E,e,i),Hh;T.data==="$?"||Vd(),t=Cd(e,t,n)}else T.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=q.treeContext,qt=cn(T.nextSibling),Da=t,ot=!0,$r=null,mn=!1,e!==null&&(Za[Qa++]=kn,Za[Qa++]=On,Za[Qa++]=qr,kn=e.id,On=e.overflow,qr=t),t=Nd(t,i.children),t.flags|=4096);return t}return d?(cr(),d=i.fallback,T=t.mode,q=e.child,W=q.sibling,i=Pn(q,{mode:"hidden",children:i.children}),i.subtreeFlags=q.subtreeFlags&65011712,W!==null?d=Pn(W,d):(d=jr(d,T,n,null),d.flags|=2),d.return=t,i.return=t,i.sibling=d,t.child=i,i=d,d=t.child,T=e.child.memoizedState,T===null?T=Ad(n):(q=T.cachePool,q!==null?(W=Qt._currentValue,q=q.parent!==W?{parent:W,pool:W}:q):q=Ff(),T={baseLanes:T.baseLanes|n,cachePool:q}),d.memoizedState=T,d.childLanes=Dd(e,E,n),t.memoizedState=Td,i):(lr(t),n=e.child,e=n.sibling,n=Pn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(E=t.deletions,E===null?(t.deletions=[e],t.flags|=16):E.push(e)),t.child=n,t.memoizedState=null,n)}function Nd(e,t){return t=dl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function dl(e,t){return e=$a(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Cd(e,t,n){return As(t,e.child,null,n),e=Nd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tg(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Vc(e.return,t,n)}function Rd(e,t,n,i,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:d}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=n,h.tailMode=d)}function ag(e,t,n){var i=t.pendingProps,d=i.revealOrder,h=i.tail;if(la(e,t,i.children,n),i=Jt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tg(e,n,t);else if(e.tag===19)tg(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(V(Jt,i),d){case"forwards":for(n=t.child,d=null;n!==null;)e=n.alternate,e!==null&&ol(e)===null&&(d=n),n=n.sibling;n=d,n===null?(d=t.child,t.child=null):(d=n.sibling,n.sibling=null),Rd(t,!1,d,n,h);break;case"backwards":for(n=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&ol(e)===null){t.child=d;break}e=d.sibling,d.sibling=n,n=d,d=e}Rd(t,!0,n,null,h);break;case"together":Rd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),hr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(fo(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Pn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Pn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function _d(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Yi(e)))}function M0(e,t,n){switch(t.tag){case 3:Pe(t,t.stateNode.containerInfo),nr(t,Qt,e.memoizedState.cache),uo();break;case 27:case 5:at(t);break;case 4:Pe(t,t.stateNode.containerInfo);break;case 10:nr(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(lr(t),t.flags|=128,null):(n&t.child.childLanes)!==0?eg(e,t,n):(lr(t),e=Fn(e,t,n),e!==null?e.sibling:null);lr(t);break;case 19:var d=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(fo(e,t,n,!1),i=(n&t.childLanes)!==0),d){if(i)return ag(e,t,n);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),V(Jt,Jt.current),i)break;return null;case 22:case 23:return t.lanes=0,Wh(e,t,n);case 24:nr(t,Qt,e.memoizedState.cache)}return Fn(e,t,n)}function ng(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)na=!0;else{if(!_d(e,n)&&(t.flags&128)===0)return na=!1,M0(e,t,n);na=(e.flags&131072)!==0}else na=!1,ot&&(t.flags&1048576)!==0&&Pf(t,zi,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,d=i._init;if(i=d(i._payload),t.type=i,typeof i=="function")$c(i)?(e=Hr(i,e),t.tag=1,t=Qh(null,t,i,e,n)):(t.tag=0,t=Sd(null,t,i,e,n));else{if(i!=null){if(d=i.$$typeof,d===C){t.tag=11,t=Vh(null,t,i,e,n);break e}else if(d===R){t.tag=14,t=Gh(null,t,i,e,n);break e}}throw t=oe(i)||i,Error(o(306,t,""))}}return t;case 0:return Sd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,d=Hr(i,t.pendingProps),Qh(e,t,i,d,n);case 3:e:{if(Pe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var h=t.memoizedState;d=h.element,Jc(e,t),Eo(t,i,null,n);var E=t.memoizedState;if(i=E.cache,nr(t,Qt,i),i!==h.cache&&Gc(t,[Qt],n,!0),vo(),i=E.element,h.isDehydrated)if(h={element:i,isDehydrated:!1,cache:E.cache},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){t=Jh(e,t,i,n);break e}else if(i!==d){d=Wa(Error(o(424)),t),po(d),t=Jh(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qt=cn(e.firstChild),Da=t,ot=!0,$r=null,mn=!0,n=Oh(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(uo(),i===d){t=Fn(e,t,n);break e}la(e,t,i,n)}t=t.child}return t;case 26:return cl(e,t),e===null?(n=im(t.type,null,t.pendingProps,null))?t.memoizedState=n:ot||(n=t.type,e=t.pendingProps,i=Tl(ve.current).createElement(n),i[Pt]=t,i[kt]=e,da(i,n,e),Te(i),t.stateNode=i):t.memoizedState=im(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return at(t),e===null&&ot&&(i=t.stateNode=rm(t.type,t.pendingProps,ve.current),Da=t,mn=!0,d=qt,br(t.type)?(du=d,qt=cn(i.firstChild)):qt=d),la(e,t,t.pendingProps.children,n),cl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ot&&((d=i=qt)&&(i=pE(i,t.type,t.pendingProps,mn),i!==null?(t.stateNode=i,Da=t,qt=cn(i.firstChild),mn=!1,d=!0):d=!1),d||Fr(t)),at(t),d=t.type,h=t.pendingProps,E=e!==null?e.memoizedProps:null,i=h.children,ou(d,h)?i=null:E!==null&&ou(d,E)&&(t.flags|=32),t.memoizedState!==null&&(d=sd(e,t,_0,null,null,n),Bo._currentValue=d),cl(e,t),la(e,t,i,n),t.child;case 6:return e===null&&ot&&((e=n=qt)&&(n=fE(n,t.pendingProps,mn),n!==null?(t.stateNode=n,Da=t,qt=null,e=!0):e=!1),e||Fr(t)),null;case 13:return eg(e,t,n);case 4:return Pe(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=As(t,null,i,n):la(e,t,i,n),t.child;case 11:return Vh(e,t,t.type,t.pendingProps,n);case 7:return la(e,t,t.pendingProps,n),t.child;case 8:return la(e,t,t.pendingProps.children,n),t.child;case 12:return la(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,nr(t,t.type,i.value),la(e,t,i.children,n),t.child;case 9:return d=t.type._context,i=t.pendingProps.children,Br(t),d=xa(d),i=i(d),t.flags|=1,la(e,t,i,n),t.child;case 14:return Gh(e,t,t.type,t.pendingProps,n);case 15:return Xh(e,t,t.type,t.pendingProps,n);case 19:return ag(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=dl(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Pn(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Wh(e,t,n);case 24:return Br(t),i=xa(Qt),e===null?(d=Kc(),d===null&&(d=St,h=Xc(),d.pooledCache=h,h.refCount++,h!==null&&(d.pooledCacheLanes|=n),d=h),t.memoizedState={parent:i,cache:d},Qc(t),nr(t,Qt,d)):((e.lanes&n)!==0&&(Jc(e,t),Eo(t,null,null,n),vo()),d=e.memoizedState,h=t.memoizedState,d.parent!==i?(d={parent:i,cache:i},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),nr(t,Qt,i)):(i=h.cache,nr(t,Qt,i),i!==d.cache&&Gc(t,[Qt],n,!0))),la(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Un(e){e.flags|=4}function rg(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!pm(t)){if(t=Ja.current,t!==null&&((Je&4194048)===Je?yn!==null:(Je&62914560)!==Je&&(Je&536870912)===0||t!==yn))throw yo=Zc,Uf;e.flags|=8192}}function ul(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Gt():536870912,e.lanes|=t,Rs|=t)}function No(e,t){if(!ot)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var d=e.child;d!==null;)n|=d.lanes|d.childLanes,i|=d.subtreeFlags&65011712,i|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)n|=d.lanes|d.childLanes,i|=d.subtreeFlags,i|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function $0(e,t,n){var i=t.pendingProps;switch(zc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Ot(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),qn(Qt),vt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(co(t)?Un(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jf())),Ot(t),null;case 26:return n=t.memoizedState,e===null?(Un(t),n!==null?(Ot(t),rg(t,n)):(Ot(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Un(t),Ot(t),rg(t,n)):(Ot(t),t.flags&=-16777217):(e.memoizedProps!==i&&Un(t),Ot(t),t.flags&=-16777217),null;case 27:ut(t),n=ve.current;var d=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ot(t),null}e=ie.current,co(t)?kf(t):(e=rm(d,i,n),t.stateNode=e,Un(t))}return Ot(t),null;case 5:if(ut(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Ot(t),null}if(e=ie.current,co(t))kf(t);else{switch(d=Tl(ve.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?d.createElement(n,{is:i.is}):d.createElement(n)}}e[Pt]=t,e[kt]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=e;e:switch(da(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Un(t)}}return Ot(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Un(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ve.current,co(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,d=Da,d!==null)switch(d.tag){case 27:case 5:i=d.memoizedProps}e[Pt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Zg(e.nodeValue,n)),e||Fr(t)}else e=Tl(e).createTextNode(i),e[Pt]=t,t.stateNode=e}return Ot(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=co(t),i!==null&&i.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Pt]=t}else uo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ot(t),d=!1}else d=jf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?($n(t),t):($n(t),null)}if($n(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,d=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(d=i.alternate.memoizedState.cachePool.pool);var h=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(h=i.memoizedState.cachePool.pool),h!==d&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),ul(t,t.updateQueue),Ot(t),null;case 4:return vt(),e===null&&tu(t.stateNode.containerInfo),Ot(t),null;case 10:return qn(t.type),Ot(t),null;case 19:if(U(Jt),d=t.memoizedState,d===null)return Ot(t),null;if(i=(t.flags&128)!==0,h=d.rendering,h===null)if(i)No(d,!1);else{if(Mt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=ol(e),h!==null){for(t.flags|=128,No(d,!1),e=h.updateQueue,t.updateQueue=e,ul(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Lf(n,e),n=n.sibling;return V(Jt,Jt.current&1|2),t.child}e=e.sibling}d.tail!==null&&he()>hl&&(t.flags|=128,i=!0,No(d,!1),t.lanes=4194304)}else{if(!i)if(e=ol(h),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ul(t,e),No(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!ot)return Ot(t),null}else 2*he()-d.renderingStartTime>hl&&n!==536870912&&(t.flags|=128,i=!0,No(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(e=d.last,e!==null?e.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=he(),t.sibling=null,e=Jt.current,V(Jt,i?e&1|2:e&1),t):(Ot(t),null);case 22:case 23:return $n(t),nd(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),n=t.updateQueue,n!==null&&ul(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&U(zr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qn(Qt),Ot(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function F0(e,t){switch(zc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qn(Qt),vt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ut(t),null;case 13:if($n(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));uo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Jt),null;case 4:return vt(),null;case 10:return qn(t.type),null;case 22:case 23:return $n(t),nd(),e!==null&&U(zr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qn(Qt),null;case 25:return null;default:return null}}function sg(e,t){switch(zc(t),t.tag){case 3:qn(Qt),vt();break;case 26:case 27:case 5:ut(t);break;case 4:vt();break;case 13:$n(t);break;case 19:U(Jt);break;case 10:qn(t.type);break;case 22:case 23:$n(t),nd(),e!==null&&U(zr);break;case 24:qn(Qt)}}function Co(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var d=i.next;n=d;do{if((n.tag&e)===e){i=void 0;var h=n.create,E=n.inst;i=h(),E.destroy=i}n=n.next}while(n!==d)}}catch(T){wt(t,t.return,T)}}function dr(e,t,n){try{var i=t.updateQueue,d=i!==null?i.lastEffect:null;if(d!==null){var h=d.next;i=h;do{if((i.tag&e)===e){var E=i.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,d=t;var q=n,W=T;try{W()}catch(se){wt(d,q,se)}}}i=i.next}while(i!==h)}}catch(se){wt(t,t.return,se)}}function og(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Gf(t,n)}catch(i){wt(e,e.return,i)}}}function ig(e,t,n){n.props=Hr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){wt(e,t,i)}}function Ro(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(d){wt(e,t,d)}}function bn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(d){wt(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(d){wt(e,t,d)}else n.current=null}function lg(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(d){wt(e,e.return,d)}}function Id(e,t,n){try{var i=e.stateNode;iE(i,e.type,n,t),i[kt]=t}catch(d){wt(e,e.return,d)}}function cg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&br(e.type)||e.tag===4}function Ld(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&br(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pd(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Sl));else if(i!==4&&(i===27&&br(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Pd(e,t,n),e=e.sibling;e!==null;)Pd(e,t,n),e=e.sibling}function pl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&br(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(pl(e,t,n),e=e.sibling;e!==null;)pl(e,t,n),e=e.sibling}function dg(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);da(t,i,n),t[Pt]=e,t[kt]=n}catch(h){wt(e,e.return,h)}}var Bn=!1,Yt=!1,kd=!1,ug=typeof WeakSet=="function"?WeakSet:Set,ra=null;function U0(e,t){if(e=e.containerInfo,ru=_l,e=xf(e),Lc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var d=i.anchorOffset,h=i.focusNode;i=i.focusOffset;try{n.nodeType,h.nodeType}catch{n=null;break e}var E=0,T=-1,q=-1,W=0,se=0,ce=e,K=null;t:for(;;){for(var Q;ce!==n||d!==0&&ce.nodeType!==3||(T=E+d),ce!==h||i!==0&&ce.nodeType!==3||(q=E+i),ce.nodeType===3&&(E+=ce.nodeValue.length),(Q=ce.firstChild)!==null;)K=ce,ce=Q;for(;;){if(ce===e)break t;if(K===n&&++W===d&&(T=E),K===h&&++se===i&&(q=E),(Q=ce.nextSibling)!==null)break;ce=K,K=ce.parentNode}ce=Q}n=T===-1||q===-1?null:{start:T,end:q}}else n=null}n=n||{start:0,end:0}}else n=null;for(su={focusedElem:e,selectionRange:n},_l=!1,ra=t;ra!==null;)if(t=ra,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ra=e;else for(;ra!==null;){switch(t=ra,h=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,n=t,d=h.memoizedProps,h=h.memoizedState,i=n.stateNode;try{var je=Hr(n.type,d,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(je,h),i.__reactInternalSnapshotBeforeUpdate=e}catch(Ce){wt(n,n.return,Ce)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)lu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":lu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,ra=e;break}ra=t.return}}function pg(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ur(e,n),i&4&&Co(5,n);break;case 1:if(ur(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(E){wt(n,n.return,E)}else{var d=Hr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(E){wt(n,n.return,E)}}i&64&&og(n),i&512&&Ro(n,n.return);break;case 3:if(ur(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Gf(e,t)}catch(E){wt(n,n.return,E)}}break;case 27:t===null&&i&4&&dg(n);case 26:case 5:ur(e,n),t===null&&i&4&&lg(n),i&512&&Ro(n,n.return);break;case 12:ur(e,n);break;case 13:ur(e,n),i&4&&gg(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=K0.bind(null,n),hE(e,n))));break;case 22:if(i=n.memoizedState!==null||Bn,!i){t=t!==null&&t.memoizedState!==null||Yt,d=Bn;var h=Yt;Bn=i,(Yt=t)&&!h?pr(e,n,(n.subtreeFlags&8772)!==0):ur(e,n),Bn=d,Yt=h}break;case 30:break;default:ur(e,n)}}function fg(e){var t=e.alternate;t!==null&&(e.alternate=null,fg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ke(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _t=null,Pa=!1;function zn(e,t,n){for(n=n.child;n!==null;)hg(e,t,n),n=n.sibling}function hg(e,t,n){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(ma,n)}catch{}switch(n.tag){case 26:Yt||bn(n,t),zn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Yt||bn(n,t);var i=_t,d=Pa;br(n.type)&&(_t=n.stateNode,Pa=!1),zn(e,t,n),Mo(n.stateNode),_t=i,Pa=d;break;case 5:Yt||bn(n,t);case 6:if(i=_t,d=Pa,_t=null,zn(e,t,n),_t=i,Pa=d,_t!==null)if(Pa)try{(_t.nodeType===9?_t.body:_t.nodeName==="HTML"?_t.ownerDocument.body:_t).removeChild(n.stateNode)}catch(h){wt(n,t,h)}else try{_t.removeChild(n.stateNode)}catch(h){wt(n,t,h)}break;case 18:_t!==null&&(Pa?(e=_t,am(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Vo(e)):am(_t,n.stateNode));break;case 4:i=_t,d=Pa,_t=n.stateNode.containerInfo,Pa=!0,zn(e,t,n),_t=i,Pa=d;break;case 0:case 11:case 14:case 15:Yt||dr(2,n,t),Yt||dr(4,n,t),zn(e,t,n);break;case 1:Yt||(bn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&ig(n,t,i)),zn(e,t,n);break;case 21:zn(e,t,n);break;case 22:Yt=(i=Yt)||n.memoizedState!==null,zn(e,t,n),Yt=i;break;default:zn(e,t,n)}}function gg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Vo(e)}catch(n){wt(t,t.return,n)}}function B0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ug),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ug),t;default:throw Error(o(435,e.tag))}}function Od(e,t){var n=B0(e);t.forEach(function(i){var d=Z0.bind(null,e,i);n.has(i)||(n.add(i),i.then(d,d))})}function Fa(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var d=n[i],h=e,E=t,T=E;e:for(;T!==null;){switch(T.tag){case 27:if(br(T.type)){_t=T.stateNode,Pa=!1;break e}break;case 5:_t=T.stateNode,Pa=!1;break e;case 3:case 4:_t=T.stateNode.containerInfo,Pa=!0;break e}T=T.return}if(_t===null)throw Error(o(160));hg(h,E,d),_t=null,Pa=!1,h=d.alternate,h!==null&&(h.return=null),d.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)mg(t,e),t=t.sibling}var ln=null;function mg(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fa(t,e),Ua(e),i&4&&(dr(3,e,e.return),Co(3,e),dr(5,e,e.return));break;case 1:Fa(t,e),Ua(e),i&512&&(Yt||n===null||bn(n,n.return)),i&64&&Bn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var d=ln;if(Fa(t,e),Ua(e),i&512&&(Yt||n===null||bn(n,n.return)),i&4){var h=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,d=d.ownerDocument||d;t:switch(i){case"title":h=d.getElementsByTagName("title")[0],(!h||h[Oe]||h[Pt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=d.createElement(i),d.head.insertBefore(h,d.querySelector("head > title"))),da(h,i,n),h[Pt]=e,Te(h),i=h;break e;case"link":var E=dm("link","href",d).get(i+(n.href||""));if(E){for(var T=0;T<E.length;T++)if(h=E[T],h.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&h.getAttribute("rel")===(n.rel==null?null:n.rel)&&h.getAttribute("title")===(n.title==null?null:n.title)&&h.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){E.splice(T,1);break t}}h=d.createElement(i),da(h,i,n),d.head.appendChild(h);break;case"meta":if(E=dm("meta","content",d).get(i+(n.content||""))){for(T=0;T<E.length;T++)if(h=E[T],h.getAttribute("content")===(n.content==null?null:""+n.content)&&h.getAttribute("name")===(n.name==null?null:n.name)&&h.getAttribute("property")===(n.property==null?null:n.property)&&h.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&h.getAttribute("charset")===(n.charSet==null?null:n.charSet)){E.splice(T,1);break t}}h=d.createElement(i),da(h,i,n),d.head.appendChild(h);break;default:throw Error(o(468,i))}h[Pt]=e,Te(h),i=h}e.stateNode=i}else um(d,e.type,e.stateNode);else e.stateNode=cm(d,i,e.memoizedProps);else h!==i?(h===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):h.count--,i===null?um(d,e.type,e.stateNode):cm(d,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Id(e,e.memoizedProps,n.memoizedProps)}break;case 27:Fa(t,e),Ua(e),i&512&&(Yt||n===null||bn(n,n.return)),n!==null&&i&4&&Id(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Fa(t,e),Ua(e),i&512&&(Yt||n===null||bn(n,n.return)),e.flags&32){d=e.stateNode;try{is(d,"")}catch(Q){wt(e,e.return,Q)}}i&4&&e.stateNode!=null&&(d=e.memoizedProps,Id(e,d,n!==null?n.memoizedProps:d)),i&1024&&(kd=!0);break;case 6:if(Fa(t,e),Ua(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(Q){wt(e,e.return,Q)}}break;case 3:if(Nl=null,d=ln,ln=Al(t.containerInfo),Fa(t,e),ln=d,Ua(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(t.containerInfo)}catch(Q){wt(e,e.return,Q)}kd&&(kd=!1,yg(e));break;case 4:i=ln,ln=Al(e.stateNode.containerInfo),Fa(t,e),Ua(e),ln=i;break;case 12:Fa(t,e),Ua(e);break;case 13:Fa(t,e),Ua(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ud=he()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Od(e,i)));break;case 22:d=e.memoizedState!==null;var q=n!==null&&n.memoizedState!==null,W=Bn,se=Yt;if(Bn=W||d,Yt=se||q,Fa(t,e),Yt=se,Bn=W,Ua(e),i&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(n===null||q||Bn||Yt||Vr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){q=n=t;try{if(h=q.stateNode,d)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=q.stateNode;var ce=q.memoizedProps.style,K=ce!=null&&ce.hasOwnProperty("display")?ce.display:null;T.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(Q){wt(q,q.return,Q)}}}else if(t.tag===6){if(n===null){q=t;try{q.stateNode.nodeValue=d?"":q.memoizedProps}catch(Q){wt(q,q.return,Q)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Od(e,n))));break;case 19:Fa(t,e),Ua(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Od(e,i)));break;case 30:break;case 21:break;default:Fa(t,e),Ua(e)}}function Ua(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(cg(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var d=n.stateNode,h=Ld(e);pl(e,h,d);break;case 5:var E=n.stateNode;n.flags&32&&(is(E,""),n.flags&=-33);var T=Ld(e);pl(e,T,E);break;case 3:case 4:var q=n.stateNode.containerInfo,W=Ld(e);Pd(e,W,q);break;default:throw Error(o(161))}}catch(se){wt(e,e.return,se)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yg(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ur(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)pg(e,t.alternate,t),t=t.sibling}function Vr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:dr(4,t,t.return),Vr(t);break;case 1:bn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&ig(t,t.return,n),Vr(t);break;case 27:Mo(t.stateNode);case 26:case 5:bn(t,t.return),Vr(t);break;case 22:t.memoizedState===null&&Vr(t);break;case 30:Vr(t);break;default:Vr(t)}e=e.sibling}}function pr(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,d=e,h=t,E=h.flags;switch(h.tag){case 0:case 11:case 15:pr(d,h,n),Co(4,h);break;case 1:if(pr(d,h,n),i=h,d=i.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(W){wt(i,i.return,W)}if(i=h,d=i.updateQueue,d!==null){var T=i.stateNode;try{var q=d.shared.hiddenCallbacks;if(q!==null)for(d.shared.hiddenCallbacks=null,d=0;d<q.length;d++)Vf(q[d],T)}catch(W){wt(i,i.return,W)}}n&&E&64&&og(h),Ro(h,h.return);break;case 27:dg(h);case 26:case 5:pr(d,h,n),n&&i===null&&E&4&&lg(h),Ro(h,h.return);break;case 12:pr(d,h,n);break;case 13:pr(d,h,n),n&&E&4&&gg(d,h);break;case 22:h.memoizedState===null&&pr(d,h,n),Ro(h,h.return);break;case 30:break;default:pr(d,h,n)}t=t.sibling}}function jd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ho(n))}function qd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ho(e))}function vn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)bg(e,t,n,i),t=t.sibling}function bg(e,t,n,i){var d=t.flags;switch(t.tag){case 0:case 11:case 15:vn(e,t,n,i),d&2048&&Co(9,t);break;case 1:vn(e,t,n,i);break;case 3:vn(e,t,n,i),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ho(e)));break;case 12:if(d&2048){vn(e,t,n,i),e=t.stateNode;try{var h=t.memoizedProps,E=h.id,T=h.onPostCommit;typeof T=="function"&&T(E,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(q){wt(t,t.return,q)}}else vn(e,t,n,i);break;case 13:vn(e,t,n,i);break;case 23:break;case 22:h=t.stateNode,E=t.alternate,t.memoizedState!==null?h._visibility&2?vn(e,t,n,i):_o(e,t):h._visibility&2?vn(e,t,n,i):(h._visibility|=2,Ds(e,t,n,i,(t.subtreeFlags&10256)!==0)),d&2048&&jd(E,t);break;case 24:vn(e,t,n,i),d&2048&&qd(t.alternate,t);break;default:vn(e,t,n,i)}}function Ds(e,t,n,i,d){for(d=d&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var h=e,E=t,T=n,q=i,W=E.flags;switch(E.tag){case 0:case 11:case 15:Ds(h,E,T,q,d),Co(8,E);break;case 23:break;case 22:var se=E.stateNode;E.memoizedState!==null?se._visibility&2?Ds(h,E,T,q,d):_o(h,E):(se._visibility|=2,Ds(h,E,T,q,d)),d&&W&2048&&jd(E.alternate,E);break;case 24:Ds(h,E,T,q,d),d&&W&2048&&qd(E.alternate,E);break;default:Ds(h,E,T,q,d)}t=t.sibling}}function _o(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,d=i.flags;switch(i.tag){case 22:_o(n,i),d&2048&&jd(i.alternate,i);break;case 24:_o(n,i),d&2048&&qd(i.alternate,i);break;default:_o(n,i)}t=t.sibling}}var Io=8192;function Ns(e){if(e.subtreeFlags&Io)for(e=e.child;e!==null;)vg(e),e=e.sibling}function vg(e){switch(e.tag){case 26:Ns(e),e.flags&Io&&e.memoizedState!==null&&NE(ln,e.memoizedState,e.memoizedProps);break;case 5:Ns(e);break;case 3:case 4:var t=ln;ln=Al(e.stateNode.containerInfo),Ns(e),ln=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Io,Io=16777216,Ns(e),Io=t):Ns(e));break;default:Ns(e)}}function Eg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Lo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ra=i,xg(i,e)}Eg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wg(e),e=e.sibling}function wg(e){switch(e.tag){case 0:case 11:case 15:Lo(e),e.flags&2048&&dr(9,e,e.return);break;case 3:Lo(e);break;case 12:Lo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,fl(e)):Lo(e);break;default:Lo(e)}}function fl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ra=i,xg(i,e)}Eg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:dr(8,t,t.return),fl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,fl(t));break;default:fl(t)}e=e.sibling}}function xg(e,t){for(;ra!==null;){var n=ra;switch(n.tag){case 0:case 11:case 15:dr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ho(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ra=i;else e:for(n=e;ra!==null;){i=ra;var d=i.sibling,h=i.return;if(fg(i),i===n){ra=null;break e}if(d!==null){d.return=h,ra=d;break e}ra=h}}}var z0={getCacheForType:function(e){var t=xa(Qt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Y0=typeof WeakMap=="function"?WeakMap:Map,pt=0,St=null,Xe=null,Je=0,ft=0,Ba=null,fr=!1,Cs=!1,Md=!1,Yn=0,Mt=0,hr=0,Gr=0,$d=0,en=0,Rs=0,Po=null,ka=null,Fd=!1,Ud=0,hl=1/0,gl=null,gr=null,ca=0,mr=null,_s=null,Is=0,Bd=0,zd=null,Sg=null,ko=0,Yd=null;function za(){if((pt&2)!==0&&Je!==0)return Je&-Je;if(Y.T!==null){var e=bs;return e!==0?e:Zd()}return _n()}function Tg(){en===0&&(en=(Je&536870912)===0||ot?qa():536870912);var e=Ja.current;return e!==null&&(e.flags|=32),en}function Ya(e,t,n){(e===St&&(ft===2||ft===9)||e.cancelPendingCommit!==null)&&(Ls(e,0),yr(e,Je,en,!1)),Nt(e,n),((pt&2)===0||e!==St)&&(e===St&&((pt&2)===0&&(Gr|=n),Mt===4&&yr(e,Je,en,!1)),En(e))}function Ag(e,t,n){if((pt&6)!==0)throw Error(o(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||ya(e,t),d=i?G0(e,t):Gd(e,t,!0),h=i;do{if(d===0){Cs&&!i&&yr(e,t,0,!1);break}else{if(n=e.current.alternate,h&&!H0(n)){d=Gd(e,t,!1),h=!1;continue}if(d===2){if(h=t,e.errorRecoveryDisabledLanes&h)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){t=E;e:{var T=e;d=Po;var q=T.current.memoizedState.isDehydrated;if(q&&(Ls(T,E).flags|=256),E=Gd(T,E,!1),E!==2){if(Md&&!q){T.errorRecoveryDisabledLanes|=h,Gr|=h,d=4;break e}h=ka,ka=d,h!==null&&(ka===null?ka=h:ka.push.apply(ka,h))}d=E}if(h=!1,d!==2)continue}}if(d===1){Ls(e,0),yr(e,t,0,!0);break}e:{switch(i=e,h=d,h){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:yr(i,t,en,!fr);break e;case 2:ka=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(d=Ud+300-he(),10<d)){if(yr(i,t,en,!fr),nt(i,0,!0)!==0)break e;i.timeoutHandle=em(Dg.bind(null,i,n,ka,gl,Fd,t,en,Gr,Rs,fr,h,2,-0,0),d);break e}Dg(i,n,ka,gl,Fd,t,en,Gr,Rs,fr,h,0,-0,0)}}break}while(!0);En(e)}function Dg(e,t,n,i,d,h,E,T,q,W,se,ce,K,Q){if(e.timeoutHandle=-1,ce=t.subtreeFlags,(ce&8192||(ce&16785408)===16785408)&&(Uo={stylesheets:null,count:0,unsuspend:DE},vg(t),ce=CE(),ce!==null)){e.cancelPendingCommit=ce(Pg.bind(null,e,t,h,n,i,d,E,T,q,se,1,K,Q)),yr(e,h,E,!W);return}Pg(e,t,h,n,i,d,E,T,q)}function H0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var d=n[i],h=d.getSnapshot;d=d.value;try{if(!Ma(h(),d))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yr(e,t,n,i){t&=~$d,t&=~Gr,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var d=t;0<d;){var h=31-Le(d),E=1<<h;i[h]=-1,d&=~E}n!==0&&nn(e,n,t)}function ml(){return(pt&6)===0?(Oo(0),!1):!0}function Hd(){if(Xe!==null){if(ft===0)var e=Xe.return;else e=Xe,jn=Ur=null,ld(e),Ts=null,Ao=0,e=Xe;for(;e!==null;)sg(e.alternate,e),e=e.return;Xe=null}}function Ls(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,cE(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Hd(),St=e,Xe=n=Pn(e.current,null),Je=t,ft=0,Ba=null,fr=!1,Cs=ya(e,t),Md=!1,Rs=en=$d=Gr=hr=Mt=0,ka=Po=null,Fd=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var d=31-Le(i),h=1<<d;t|=e[d],i&=~h}return Yn=t,Mi(),n}function Ng(e,t){Ye=null,Y.H=nl,t===mo||t===Gi?(t=Yf(),ft=3):t===Uf?(t=Yf(),ft=4):ft=t===Hh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ba=t,Xe===null&&(Mt=1,ll(e,Wa(t,e.current)))}function Cg(){var e=Y.H;return Y.H=nl,e===null?nl:e}function Rg(){var e=Y.A;return Y.A=z0,e}function Vd(){Mt=4,fr||(Je&4194048)!==Je&&Ja.current!==null||(Cs=!0),(hr&134217727)===0&&(Gr&134217727)===0||St===null||yr(St,Je,en,!1)}function Gd(e,t,n){var i=pt;pt|=2;var d=Cg(),h=Rg();(St!==e||Je!==t)&&(gl=null,Ls(e,t)),t=!1;var E=Mt;e:do try{if(ft!==0&&Xe!==null){var T=Xe,q=Ba;switch(ft){case 8:Hd(),E=6;break e;case 3:case 2:case 9:case 6:Ja.current===null&&(t=!0);var W=ft;if(ft=0,Ba=null,Ps(e,T,q,W),n&&Cs){E=0;break e}break;default:W=ft,ft=0,Ba=null,Ps(e,T,q,W)}}V0(),E=Mt;break}catch(se){Ng(e,se)}while(!0);return t&&e.shellSuspendCounter++,jn=Ur=null,pt=i,Y.H=d,Y.A=h,Xe===null&&(St=null,Je=0,Mi()),E}function V0(){for(;Xe!==null;)_g(Xe)}function G0(e,t){var n=pt;pt|=2;var i=Cg(),d=Rg();St!==e||Je!==t?(gl=null,hl=he()+500,Ls(e,t)):Cs=ya(e,t);e:do try{if(ft!==0&&Xe!==null){t=Xe;var h=Ba;t:switch(ft){case 1:ft=0,Ba=null,Ps(e,t,h,1);break;case 2:case 9:if(Bf(h)){ft=0,Ba=null,Ig(t);break}t=function(){ft!==2&&ft!==9||St!==e||(ft=7),En(e)},h.then(t,t);break e;case 3:ft=7;break e;case 4:ft=5;break e;case 7:Bf(h)?(ft=0,Ba=null,Ig(t)):(ft=0,Ba=null,Ps(e,t,h,7));break;case 5:var E=null;switch(Xe.tag){case 26:E=Xe.memoizedState;case 5:case 27:var T=Xe;if(!E||pm(E)){ft=0,Ba=null;var q=T.sibling;if(q!==null)Xe=q;else{var W=T.return;W!==null?(Xe=W,yl(W)):Xe=null}break t}}ft=0,Ba=null,Ps(e,t,h,5);break;case 6:ft=0,Ba=null,Ps(e,t,h,6);break;case 8:Hd(),Mt=6;break e;default:throw Error(o(462))}}X0();break}catch(se){Ng(e,se)}while(!0);return jn=Ur=null,Y.H=i,Y.A=d,pt=n,Xe!==null?0:(St=null,Je=0,Mi(),Mt)}function X0(){for(;Xe!==null&&!$();)_g(Xe)}function _g(e){var t=ng(e.alternate,e,Yn);e.memoizedProps=e.pendingProps,t===null?yl(e):Xe=t}function Ig(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Zh(n,t,t.pendingProps,t.type,void 0,Je);break;case 11:t=Zh(n,t,t.pendingProps,t.type.render,t.ref,Je);break;case 5:ld(t);default:sg(n,t),t=Xe=Lf(t,Yn),t=ng(n,t,Yn)}e.memoizedProps=e.pendingProps,t===null?yl(e):Xe=t}function Ps(e,t,n,i){jn=Ur=null,ld(t),Ts=null,Ao=0;var d=t.return;try{if(q0(e,d,t,n,Je)){Mt=1,ll(e,Wa(n,e.current)),Xe=null;return}}catch(h){if(d!==null)throw Xe=d,h;Mt=1,ll(e,Wa(n,e.current)),Xe=null;return}t.flags&32768?(ot||i===1?e=!0:Cs||(Je&536870912)!==0?e=!1:(fr=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ja.current,i!==null&&i.tag===13&&(i.flags|=16384))),Lg(t,e)):yl(t)}function yl(e){var t=e;do{if((t.flags&32768)!==0){Lg(t,fr);return}e=t.return;var n=$0(t.alternate,t,Yn);if(n!==null){Xe=n;return}if(t=t.sibling,t!==null){Xe=t;return}Xe=t=e}while(t!==null);Mt===0&&(Mt=5)}function Lg(e,t){do{var n=F0(e.alternate,e);if(n!==null){n.flags&=32767,Xe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Xe=e;return}Xe=e=n}while(e!==null);Mt=6,Xe=null}function Pg(e,t,n,i,d,h,E,T,q){e.cancelPendingCommit=null;do bl();while(ca!==0);if((pt&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(h=t.lanes|t.childLanes,h|=qc,At(e,n,h,E,T,q),e===St&&(Xe=St=null,Je=0),_s=t,mr=e,Is=n,Bd=h,zd=d,Sg=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Q0(be,function(){return Mg(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Y.T,Y.T=null,d=Z.p,Z.p=2,E=pt,pt|=4;try{U0(e,t,n)}finally{pt=E,Z.p=d,Y.T=i}}ca=1,kg(),Og(),jg()}}function kg(){if(ca===1){ca=0;var e=mr,t=_s,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Y.T,Y.T=null;var i=Z.p;Z.p=2;var d=pt;pt|=4;try{mg(t,e);var h=su,E=xf(e.containerInfo),T=h.focusedElem,q=h.selectionRange;if(E!==T&&T&&T.ownerDocument&&wf(T.ownerDocument.documentElement,T)){if(q!==null&&Lc(T)){var W=q.start,se=q.end;if(se===void 0&&(se=W),"selectionStart"in T)T.selectionStart=W,T.selectionEnd=Math.min(se,T.value.length);else{var ce=T.ownerDocument||document,K=ce&&ce.defaultView||window;if(K.getSelection){var Q=K.getSelection(),je=T.textContent.length,Ce=Math.min(q.start,je),bt=q.end===void 0?Ce:Math.min(q.end,je);!Q.extend&&Ce>bt&&(E=bt,bt=Ce,Ce=E);var H=Ef(T,Ce),F=Ef(T,bt);if(H&&F&&(Q.rangeCount!==1||Q.anchorNode!==H.node||Q.anchorOffset!==H.offset||Q.focusNode!==F.node||Q.focusOffset!==F.offset)){var G=ce.createRange();G.setStart(H.node,H.offset),Q.removeAllRanges(),Ce>bt?(Q.addRange(G),Q.extend(F.node,F.offset)):(G.setEnd(F.node,F.offset),Q.addRange(G))}}}}for(ce=[],Q=T;Q=Q.parentNode;)Q.nodeType===1&&ce.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ce.length;T++){var le=ce[T];le.element.scrollLeft=le.left,le.element.scrollTop=le.top}}_l=!!ru,su=ru=null}finally{pt=d,Z.p=i,Y.T=n}}e.current=t,ca=2}}function Og(){if(ca===2){ca=0;var e=mr,t=_s,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Y.T,Y.T=null;var i=Z.p;Z.p=2;var d=pt;pt|=4;try{pg(e,t.alternate,t)}finally{pt=d,Z.p=i,Y.T=n}}ca=3}}function jg(){if(ca===4||ca===3){ca=0,fe();var e=mr,t=_s,n=Is,i=Sg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ca=5:(ca=0,_s=mr=null,qg(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(gr=null),_a(n),t=t.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(ma,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Y.T,d=Z.p,Z.p=2,Y.T=null;try{for(var h=e.onRecoverableError,E=0;E<i.length;E++){var T=i[E];h(T.value,{componentStack:T.stack})}}finally{Y.T=t,Z.p=d}}(Is&3)!==0&&bl(),En(e),d=e.pendingLanes,(n&4194090)!==0&&(d&42)!==0?e===Yd?ko++:(ko=0,Yd=e):ko=0,Oo(0)}}function qg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ho(t)))}function bl(e){return kg(),Og(),jg(),Mg()}function Mg(){if(ca!==5)return!1;var e=mr,t=Bd;Bd=0;var n=_a(Is),i=Y.T,d=Z.p;try{Z.p=32>n?32:n,Y.T=null,n=zd,zd=null;var h=mr,E=Is;if(ca=0,_s=mr=null,Is=0,(pt&6)!==0)throw Error(o(331));var T=pt;if(pt|=4,wg(h.current),bg(h,h.current,E,n),pt=T,Oo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(ma,h)}catch{}return!0}finally{Z.p=d,Y.T=i,qg(e,t)}}function $g(e,t,n){t=Wa(n,t),t=xd(e.stateNode,t,2),e=or(e,t,2),e!==null&&(Nt(e,2),En(e))}function wt(e,t,n){if(e.tag===3)$g(e,e,n);else for(;t!==null;){if(t.tag===3){$g(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){e=Wa(n,e),n=zh(2),i=or(t,n,2),i!==null&&(Yh(n,i,t,e),Nt(i,2),En(i));break}}t=t.return}}function Xd(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Y0;var d=new Set;i.set(t,d)}else d=i.get(t),d===void 0&&(d=new Set,i.set(t,d));d.has(n)||(Md=!0,d.add(n),e=W0.bind(null,e,t,n),t.then(e,e))}function W0(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,St===e&&(Je&n)===n&&(Mt===4||Mt===3&&(Je&62914560)===Je&&300>he()-Ud?(pt&2)===0&&Ls(e,0):$d|=n,Rs===Je&&(Rs=0)),En(e)}function Fg(e,t){t===0&&(t=Gt()),e=hs(e,t),e!==null&&(Nt(e,t),En(e))}function K0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fg(e,n)}function Z0(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,d=e.memoizedState;d!==null&&(n=d.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Fg(e,n)}function Q0(e,t){return Ft(e,t)}var vl=null,ks=null,Wd=!1,El=!1,Kd=!1,Xr=0;function En(e){e!==ks&&e.next===null&&(ks===null?vl=ks=e:ks=ks.next=e),El=!0,Wd||(Wd=!0,eE())}function Oo(e,t){if(!Kd&&El){Kd=!0;do for(var n=!1,i=vl;i!==null;){if(e!==0){var d=i.pendingLanes;if(d===0)var h=0;else{var E=i.suspendedLanes,T=i.pingedLanes;h=(1<<31-Le(42|e)+1)-1,h&=d&~(E&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(n=!0,Yg(i,h))}else h=Je,h=nt(i,i===St?h:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(h&3)===0||ya(i,h)||(n=!0,Yg(i,h));i=i.next}while(n);Kd=!1}}function J0(){Ug()}function Ug(){El=Wd=!1;var e=0;Xr!==0&&(lE()&&(e=Xr),Xr=0);for(var t=he(),n=null,i=vl;i!==null;){var d=i.next,h=Bg(i,t);h===0?(i.next=null,n===null?vl=d:n.next=d,d===null&&(ks=n)):(n=i,(e!==0||(h&3)!==0)&&(El=!0)),i=d}Oo(e)}function Bg(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var E=31-Le(h),T=1<<E,q=d[E];q===-1?((T&n)===0||(T&i)!==0)&&(d[E]=Lt(T,t)):q<=t&&(e.expiredLanes|=T),h&=~T}if(t=St,n=Je,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(ft===2||ft===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Et(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ya(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&Et(i),_a(n)){case 2:case 8:n=Ne;break;case 32:n=be;break;case 268435456:n=et;break;default:n=be}return i=zg.bind(null,e),n=Ft(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&Et(i),e.callbackPriority=2,e.callbackNode=null,2}function zg(e,t){if(ca!==0&&ca!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(bl()&&e.callbackNode!==n)return null;var i=Je;return i=nt(e,e===St?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ag(e,i,t),Bg(e,he()),e.callbackNode!=null&&e.callbackNode===n?zg.bind(null,e):null)}function Yg(e,t){if(bl())return null;Ag(e,t,!0)}function eE(){dE(function(){(pt&6)!==0?Ft(ue,J0):Ug()})}function Zd(){return Xr===0&&(Xr=qa()),Xr}function Hg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ii(""+e)}function Vg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function tE(e,t,n,i,d){if(t==="submit"&&n&&n.stateNode===d){var h=Hg((d[kt]||null).action),E=i.submitter;E&&(t=(t=E[kt]||null)?Hg(t.formAction):E.getAttribute("formAction"),t!==null&&(h=t,E=null));var T=new Oi("action","action",null,i,d);e.push({event:T,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Xr!==0){var q=E?Vg(d,E):new FormData(d);yd(n,{pending:!0,data:q,method:d.method,action:h},null,q)}}else typeof h=="function"&&(T.preventDefault(),q=E?Vg(d,E):new FormData(d),yd(n,{pending:!0,data:q,method:d.method,action:h},h,q))},currentTarget:d}]})}}for(var Qd=0;Qd<jc.length;Qd++){var Jd=jc[Qd],aE=Jd.toLowerCase(),nE=Jd[0].toUpperCase()+Jd.slice(1);on(aE,"on"+nE)}on(Af,"onAnimationEnd"),on(Df,"onAnimationIteration"),on(Nf,"onAnimationStart"),on("dblclick","onDoubleClick"),on("focusin","onFocus"),on("focusout","onBlur"),on(E0,"onTransitionRun"),on(w0,"onTransitionStart"),on(x0,"onTransitionCancel"),on(Cf,"onTransitionEnd"),Ct("onMouseEnter",["mouseout","mouseover"]),Ct("onMouseLeave",["mouseout","mouseover"]),Ct("onPointerEnter",["pointerout","pointerover"]),Ct("onPointerLeave",["pointerout","pointerover"]),rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rE=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jo));function Gg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],d=i.event;i=i.listeners;e:{var h=void 0;if(t)for(var E=i.length-1;0<=E;E--){var T=i[E],q=T.instance,W=T.currentTarget;if(T=T.listener,q!==h&&d.isPropagationStopped())break e;h=T,d.currentTarget=W;try{h(d)}catch(se){il(se)}d.currentTarget=null,h=q}else for(E=0;E<i.length;E++){if(T=i[E],q=T.instance,W=T.currentTarget,T=T.listener,q!==h&&d.isPropagationStopped())break e;h=T,d.currentTarget=W;try{h(d)}catch(se){il(se)}d.currentTarget=null,h=q}}}}function We(e,t){var n=t[J];n===void 0&&(n=t[J]=new Set);var i=e+"__bubble";n.has(i)||(Xg(t,e,2,!1),n.add(i))}function eu(e,t,n){var i=0;t&&(i|=4),Xg(n,e,i,t)}var wl="_reactListening"+Math.random().toString(36).slice(2);function tu(e){if(!e[wl]){e[wl]=!0,Ue.forEach(function(n){n!=="selectionchange"&&(rE.has(n)||eu(n,!1,e),eu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wl]||(t[wl]=!0,eu("selectionchange",!1,t))}}function Xg(e,t,n,i){switch(bm(t)){case 2:var d=IE;break;case 8:d=LE;break;default:d=gu}n=d.bind(null,t,n,e),d=void 0,!Sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),i?d!==void 0?e.addEventListener(t,n,{capture:!0,passive:d}):e.addEventListener(t,n,!0):d!==void 0?e.addEventListener(t,n,{passive:d}):e.addEventListener(t,n,!1)}function au(e,t,n,i,d){var h=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var E=i.tag;if(E===3||E===4){var T=i.stateNode.containerInfo;if(T===d)break;if(E===4)for(E=i.return;E!==null;){var q=E.tag;if((q===3||q===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;T!==null;){if(E=ct(T),E===null)return;if(q=E.tag,q===5||q===6||q===26||q===27){i=h=E;continue e}T=T.parentNode}}i=i.return}ef(function(){var W=h,se=wc(n),ce=[];e:{var K=Rf.get(e);if(K!==void 0){var Q=Oi,je=e;switch(e){case"keypress":if(Pi(n)===0)break e;case"keydown":case"keyup":Q=Qv;break;case"focusin":je="focus",Q=Nc;break;case"focusout":je="blur",Q=Nc;break;case"beforeblur":case"afterblur":Q=Nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=t0;break;case Af:case Df:case Nf:Q=zv;break;case Cf:Q=n0;break;case"scroll":case"scrollend":Q=Mv;break;case"wheel":Q=s0;break;case"copy":case"cut":case"paste":Q=Hv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=sf;break;case"toggle":case"beforetoggle":Q=i0}var Ce=(t&4)!==0,bt=!Ce&&(e==="scroll"||e==="scrollend"),H=Ce?K!==null?K+"Capture":null:K;Ce=[];for(var F=W,G;F!==null;){var le=F;if(G=le.stateNode,le=le.tag,le!==5&&le!==26&&le!==27||G===null||H===null||(le=eo(F,H),le!=null&&Ce.push(qo(F,le,G))),bt)break;F=F.return}0<Ce.length&&(K=new Q(K,je,null,n,se),ce.push({event:K,listeners:Ce}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",K&&n!==Ec&&(je=n.relatedTarget||n.fromElement)&&(ct(je)||je[I]))break e;if((Q||K)&&(K=se.window===se?se:(K=se.ownerDocument)?K.defaultView||K.parentWindow:window,Q?(je=n.relatedTarget||n.toElement,Q=W,je=je?ct(je):null,je!==null&&(bt=u(je),Ce=je.tag,je!==bt||Ce!==5&&Ce!==27&&Ce!==6)&&(je=null)):(Q=null,je=W),Q!==je)){if(Ce=nf,le="onMouseLeave",H="onMouseEnter",F="mouse",(e==="pointerout"||e==="pointerover")&&(Ce=sf,le="onPointerLeave",H="onPointerEnter",F="pointer"),bt=Q==null?K:me(Q),G=je==null?K:me(je),K=new Ce(le,F+"leave",Q,n,se),K.target=bt,K.relatedTarget=G,le=null,ct(se)===W&&(Ce=new Ce(H,F+"enter",je,n,se),Ce.target=G,Ce.relatedTarget=bt,le=Ce),bt=le,Q&&je)t:{for(Ce=Q,H=je,F=0,G=Ce;G;G=Os(G))F++;for(G=0,le=H;le;le=Os(le))G++;for(;0<F-G;)Ce=Os(Ce),F--;for(;0<G-F;)H=Os(H),G--;for(;F--;){if(Ce===H||H!==null&&Ce===H.alternate)break t;Ce=Os(Ce),H=Os(H)}Ce=null}else Ce=null;Q!==null&&Wg(ce,K,Q,Ce,!1),je!==null&&bt!==null&&Wg(ce,bt,je,Ce,!0)}}e:{if(K=W?me(W):window,Q=K.nodeName&&K.nodeName.toLowerCase(),Q==="select"||Q==="input"&&K.type==="file")var xe=hf;else if(pf(K))if(gf)xe=y0;else{xe=g0;var Ve=h0}else Q=K.nodeName,!Q||Q.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?W&&vc(W.elementType)&&(xe=hf):xe=m0;if(xe&&(xe=xe(e,W))){ff(ce,xe,n,se);break e}Ve&&Ve(e,K,W),e==="focusout"&&W&&K.type==="number"&&W.memoizedProps.value!=null&&bc(K,"number",K.value)}switch(Ve=W?me(W):window,e){case"focusin":(pf(Ve)||Ve.contentEditable==="true")&&(us=Ve,Pc=W,lo=null);break;case"focusout":lo=Pc=us=null;break;case"mousedown":kc=!0;break;case"contextmenu":case"mouseup":case"dragend":kc=!1,Sf(ce,n,se);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":Sf(ce,n,se)}var Ae;if(Rc)e:{switch(e){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else ds?df(e,n)&&(_e="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_e="onCompositionStart");_e&&(of&&n.locale!=="ko"&&(ds||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&ds&&(Ae=tf()):(ar=se,Tc="value"in ar?ar.value:ar.textContent,ds=!0)),Ve=xl(W,_e),0<Ve.length&&(_e=new rf(_e,e,null,n,se),ce.push({event:_e,listeners:Ve}),Ae?_e.data=Ae:(Ae=uf(n),Ae!==null&&(_e.data=Ae)))),(Ae=c0?d0(e,n):u0(e,n))&&(_e=xl(W,"onBeforeInput"),0<_e.length&&(Ve=new rf("onBeforeInput","beforeinput",null,n,se),ce.push({event:Ve,listeners:_e}),Ve.data=Ae)),tE(ce,e,W,n,se)}Gg(ce,t)})}function qo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xl(e,t){for(var n=t+"Capture",i=[];e!==null;){var d=e,h=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||h===null||(d=eo(e,n),d!=null&&i.unshift(qo(e,d,h)),d=eo(e,t),d!=null&&i.push(qo(e,d,h))),e.tag===3)return i;e=e.return}return[]}function Os(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wg(e,t,n,i,d){for(var h=t._reactName,E=[];n!==null&&n!==i;){var T=n,q=T.alternate,W=T.stateNode;if(T=T.tag,q!==null&&q===i)break;T!==5&&T!==26&&T!==27||W===null||(q=W,d?(W=eo(n,h),W!=null&&E.unshift(qo(n,W,q))):d||(W=eo(n,h),W!=null&&E.push(qo(n,W,q)))),n=n.return}E.length!==0&&e.push({event:t,listeners:E})}var sE=/\r\n?/g,oE=/\u0000|\uFFFD/g;function Kg(e){return(typeof e=="string"?e:""+e).replace(sE,`
`).replace(oE,"")}function Zg(e,t){return t=Kg(t),Kg(e)===t}function Sl(){}function yt(e,t,n,i,d,h){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||is(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&is(e,""+i);break;case"className":Jn(e,"class",i);break;case"tabIndex":Jn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Jn(e,n,i);break;case"style":Qp(e,i,h);break;case"data":if(t!=="object"){Jn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ii(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(n==="formAction"?(t!=="input"&&yt(e,t,"name",d.name,d,null),yt(e,t,"formEncType",d.formEncType,d,null),yt(e,t,"formMethod",d.formMethod,d,null),yt(e,t,"formTarget",d.formTarget,d,null)):(yt(e,t,"encType",d.encType,d,null),yt(e,t,"method",d.method,d,null),yt(e,t,"target",d.target,d,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Ii(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Sl);break;case"onScroll":i!=null&&We("scroll",e);break;case"onScrollEnd":i!=null&&We("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(d.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Ii(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":We("beforetoggle",e),We("toggle",e),Ga(e,"popover",i);break;case"xlinkActuate":Xa(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Xa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Xa(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Xa(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Xa(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Xa(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Xa(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Xa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Xa(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Ga(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=jv.get(n)||n,Ga(e,n,i))}}function nu(e,t,n,i,d,h){switch(n){case"style":Qp(e,i,h);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(d.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?is(e,i):(typeof i=="number"||typeof i=="bigint")&&is(e,""+i);break;case"onScroll":i!=null&&We("scroll",e);break;case"onScrollEnd":i!=null&&We("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Sl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ze.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(d=n.endsWith("Capture"),t=n.slice(2,d?n.length-7:void 0),h=e[kt]||null,h=h!=null?h[n]:null,typeof h=="function"&&e.removeEventListener(t,h,d),typeof i=="function")){typeof h!="function"&&h!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,d);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Ga(e,n,i)}}}function da(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":We("error",e),We("load",e);var i=!1,d=!1,h;for(h in n)if(n.hasOwnProperty(h)){var E=n[h];if(E!=null)switch(h){case"src":i=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:yt(e,t,h,E,n,null)}}d&&yt(e,t,"srcSet",n.srcSet,n,null),i&&yt(e,t,"src",n.src,n,null);return;case"input":We("invalid",e);var T=h=E=d=null,q=null,W=null;for(i in n)if(n.hasOwnProperty(i)){var se=n[i];if(se!=null)switch(i){case"name":d=se;break;case"type":E=se;break;case"checked":q=se;break;case"defaultChecked":W=se;break;case"value":h=se;break;case"defaultValue":T=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(o(137,t));break;default:yt(e,t,i,se,n,null)}}Xp(e,h,T,q,W,E,d,!1),wa(e);return;case"select":We("invalid",e),i=E=h=null;for(d in n)if(n.hasOwnProperty(d)&&(T=n[d],T!=null))switch(d){case"value":h=T;break;case"defaultValue":E=T;break;case"multiple":i=T;default:yt(e,t,d,T,n,null)}t=h,n=E,e.multiple=!!i,t!=null?os(e,!!i,t,!1):n!=null&&os(e,!!i,n,!0);return;case"textarea":We("invalid",e),h=d=i=null;for(E in n)if(n.hasOwnProperty(E)&&(T=n[E],T!=null))switch(E){case"value":i=T;break;case"defaultValue":d=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(91));break;default:yt(e,t,E,T,n,null)}Kp(e,i,d,h),wa(e);return;case"option":for(q in n)n.hasOwnProperty(q)&&(i=n[q],i!=null)&&(q==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":yt(e,t,q,i,n,null));return;case"dialog":We("beforetoggle",e),We("toggle",e),We("cancel",e),We("close",e);break;case"iframe":case"object":We("load",e);break;case"video":case"audio":for(i=0;i<jo.length;i++)We(jo[i],e);break;case"image":We("error",e),We("load",e);break;case"details":We("toggle",e);break;case"embed":case"source":case"link":We("error",e),We("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in n)if(n.hasOwnProperty(W)&&(i=n[W],i!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:yt(e,t,W,i,n,null)}return;default:if(vc(t)){for(se in n)n.hasOwnProperty(se)&&(i=n[se],i!==void 0&&nu(e,t,se,i,n,void 0));return}}for(T in n)n.hasOwnProperty(T)&&(i=n[T],i!=null&&yt(e,t,T,i,n,null))}function iE(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,h=null,E=null,T=null,q=null,W=null,se=null;for(Q in n){var ce=n[Q];if(n.hasOwnProperty(Q)&&ce!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":q=ce;default:i.hasOwnProperty(Q)||yt(e,t,Q,null,i,ce)}}for(var K in i){var Q=i[K];if(ce=n[K],i.hasOwnProperty(K)&&(Q!=null||ce!=null))switch(K){case"type":h=Q;break;case"name":d=Q;break;case"checked":W=Q;break;case"defaultChecked":se=Q;break;case"value":E=Q;break;case"defaultValue":T=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(o(137,t));break;default:Q!==ce&&yt(e,t,K,Q,i,ce)}}tr(e,E,T,q,W,se,h,d);return;case"select":Q=E=T=K=null;for(h in n)if(q=n[h],n.hasOwnProperty(h)&&q!=null)switch(h){case"value":break;case"multiple":Q=q;default:i.hasOwnProperty(h)||yt(e,t,h,null,i,q)}for(d in i)if(h=i[d],q=n[d],i.hasOwnProperty(d)&&(h!=null||q!=null))switch(d){case"value":K=h;break;case"defaultValue":T=h;break;case"multiple":E=h;default:h!==q&&yt(e,t,d,h,i,q)}t=T,n=E,i=Q,K!=null?os(e,!!n,K,!1):!!i!=!!n&&(t!=null?os(e,!!n,t,!0):os(e,!!n,n?[]:"",!1));return;case"textarea":Q=K=null;for(T in n)if(d=n[T],n.hasOwnProperty(T)&&d!=null&&!i.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:yt(e,t,T,null,i,d)}for(E in i)if(d=i[E],h=n[E],i.hasOwnProperty(E)&&(d!=null||h!=null))switch(E){case"value":K=d;break;case"defaultValue":Q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:d!==h&&yt(e,t,E,d,i,h)}Wp(e,K,Q);return;case"option":for(var je in n)K=n[je],n.hasOwnProperty(je)&&K!=null&&!i.hasOwnProperty(je)&&(je==="selected"?e.selected=!1:yt(e,t,je,null,i,K));for(q in i)K=i[q],Q=n[q],i.hasOwnProperty(q)&&K!==Q&&(K!=null||Q!=null)&&(q==="selected"?e.selected=K&&typeof K!="function"&&typeof K!="symbol":yt(e,t,q,K,i,Q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ce in n)K=n[Ce],n.hasOwnProperty(Ce)&&K!=null&&!i.hasOwnProperty(Ce)&&yt(e,t,Ce,null,i,K);for(W in i)if(K=i[W],Q=n[W],i.hasOwnProperty(W)&&K!==Q&&(K!=null||Q!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(o(137,t));break;default:yt(e,t,W,K,i,Q)}return;default:if(vc(t)){for(var bt in n)K=n[bt],n.hasOwnProperty(bt)&&K!==void 0&&!i.hasOwnProperty(bt)&&nu(e,t,bt,void 0,i,K);for(se in i)K=i[se],Q=n[se],!i.hasOwnProperty(se)||K===Q||K===void 0&&Q===void 0||nu(e,t,se,K,i,Q);return}}for(var H in n)K=n[H],n.hasOwnProperty(H)&&K!=null&&!i.hasOwnProperty(H)&&yt(e,t,H,null,i,K);for(ce in i)K=i[ce],Q=n[ce],!i.hasOwnProperty(ce)||K===Q||K==null&&Q==null||yt(e,t,ce,K,i,Q)}var ru=null,su=null;function Tl(e){return e.nodeType===9?e:e.ownerDocument}function Qg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Jg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var iu=null;function lE(){var e=window.event;return e&&e.type==="popstate"?e===iu?!1:(iu=e,!0):(iu=null,!1)}var em=typeof setTimeout=="function"?setTimeout:void 0,cE=typeof clearTimeout=="function"?clearTimeout:void 0,tm=typeof Promise=="function"?Promise:void 0,dE=typeof queueMicrotask=="function"?queueMicrotask:typeof tm<"u"?function(e){return tm.resolve(null).then(e).catch(uE)}:em;function uE(e){setTimeout(function(){throw e})}function br(e){return e==="head"}function am(e,t){var n=t,i=0,d=0;do{var h=n.nextSibling;if(e.removeChild(n),h&&h.nodeType===8)if(n=h.data,n==="/$"){if(0<i&&8>i){n=i;var E=e.ownerDocument;if(n&1&&Mo(E.documentElement),n&2&&Mo(E.body),n&4)for(n=E.head,Mo(n),E=n.firstChild;E;){var T=E.nextSibling,q=E.nodeName;E[Oe]||q==="SCRIPT"||q==="STYLE"||q==="LINK"&&E.rel.toLowerCase()==="stylesheet"||n.removeChild(E),E=T}}if(d===0){e.removeChild(h),Vo(t);return}d--}else n==="$"||n==="$?"||n==="$!"?d++:i=n.charCodeAt(0)-48;else i=0;n=h}while(n);Vo(t)}function lu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":lu(n),Ke(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function pE(e,t,n,i){for(;e.nodeType===1;){var d=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Oe])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var h=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=cn(e.nextSibling),e===null)break}return null}function fE(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=cn(e.nextSibling),e===null))return null;return e}function cu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function hE(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var du=null;function nm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function rm(e,t,n){switch(t=Tl(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Mo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ke(e)}var tn=new Map,sm=new Set;function Al(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Hn=Z.d;Z.d={f:gE,r:mE,D:yE,C:bE,L:vE,m:EE,X:xE,S:wE,M:SE};function gE(){var e=Hn.f(),t=ml();return e||t}function mE(e){var t=B(e);t!==null&&t.tag===5&&t.type==="form"?Ah(t):Hn.r(e)}var js=typeof document>"u"?null:document;function om(e,t,n){var i=js;if(i&&typeof t=="string"&&t){var d=jt(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof n=="string"&&(d+='[crossorigin="'+n+'"]'),sm.has(d)||(sm.add(d),e={rel:e,crossOrigin:n,href:t},i.querySelector(d)===null&&(t=i.createElement("link"),da(t,"link",e),Te(t),i.head.appendChild(t)))}}function yE(e){Hn.D(e),om("dns-prefetch",e,null)}function bE(e,t){Hn.C(e,t),om("preconnect",e,t)}function vE(e,t,n){Hn.L(e,t,n);var i=js;if(i&&e&&t){var d='link[rel="preload"][as="'+jt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(d+='[imagesrcset="'+jt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(d+='[imagesizes="'+jt(n.imageSizes)+'"]')):d+='[href="'+jt(e)+'"]';var h=d;switch(t){case"style":h=qs(e);break;case"script":h=Ms(e)}tn.has(h)||(e=p({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),tn.set(h,e),i.querySelector(d)!==null||t==="style"&&i.querySelector($o(h))||t==="script"&&i.querySelector(Fo(h))||(t=i.createElement("link"),da(t,"link",e),Te(t),i.head.appendChild(t)))}}function EE(e,t){Hn.m(e,t);var n=js;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+jt(i)+'"][href="'+jt(e)+'"]',h=d;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ms(e)}if(!tn.has(h)&&(e=p({rel:"modulepreload",href:e},t),tn.set(h,e),n.querySelector(d)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Fo(h)))return}i=n.createElement("link"),da(i,"link",e),Te(i),n.head.appendChild(i)}}}function wE(e,t,n){Hn.S(e,t,n);var i=js;if(i&&e){var d=Se(i).hoistableStyles,h=qs(e);t=t||"default";var E=d.get(h);if(!E){var T={loading:0,preload:null};if(E=i.querySelector($o(h)))T.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=tn.get(h))&&uu(e,n);var q=E=i.createElement("link");Te(q),da(q,"link",e),q._p=new Promise(function(W,se){q.onload=W,q.onerror=se}),q.addEventListener("load",function(){T.loading|=1}),q.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Dl(E,t,i)}E={type:"stylesheet",instance:E,count:1,state:T},d.set(h,E)}}}function xE(e,t){Hn.X(e,t);var n=js;if(n&&e){var i=Se(n).hoistableScripts,d=Ms(e),h=i.get(d);h||(h=n.querySelector(Fo(d)),h||(e=p({src:e,async:!0},t),(t=tn.get(d))&&pu(e,t),h=n.createElement("script"),Te(h),da(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(d,h))}}function SE(e,t){Hn.M(e,t);var n=js;if(n&&e){var i=Se(n).hoistableScripts,d=Ms(e),h=i.get(d);h||(h=n.querySelector(Fo(d)),h||(e=p({src:e,async:!0,type:"module"},t),(t=tn.get(d))&&pu(e,t),h=n.createElement("script"),Te(h),da(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(d,h))}}function im(e,t,n,i){var d=(d=ve.current)?Al(d):null;if(!d)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=qs(n.href),n=Se(d).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=qs(n.href);var h=Se(d).hoistableStyles,E=h.get(e);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,E),(h=d.querySelector($o(e)))&&!h._p&&(E.instance=h,E.state.loading=5),tn.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},tn.set(e,n),h||TE(d,e,n,E.state))),t&&i===null)throw Error(o(528,""));return E}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ms(n),n=Se(d).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function qs(e){return'href="'+jt(e)+'"'}function $o(e){return'link[rel="stylesheet"]['+e+"]"}function lm(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function TE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),da(t,"link",n),Te(t),e.head.appendChild(t))}function Ms(e){return'[src="'+jt(e)+'"]'}function Fo(e){return"script[async]"+e}function cm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+jt(n.href)+'"]');if(i)return t.instance=i,Te(i),i;var d=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Te(i),da(i,"style",d),Dl(i,n.precedence,e),t.instance=i;case"stylesheet":d=qs(n.href);var h=e.querySelector($o(d));if(h)return t.state.loading|=4,t.instance=h,Te(h),h;i=lm(n),(d=tn.get(d))&&uu(i,d),h=(e.ownerDocument||e).createElement("link"),Te(h);var E=h;return E._p=new Promise(function(T,q){E.onload=T,E.onerror=q}),da(h,"link",i),t.state.loading|=4,Dl(h,n.precedence,e),t.instance=h;case"script":return h=Ms(n.src),(d=e.querySelector(Fo(h)))?(t.instance=d,Te(d),d):(i=n,(d=tn.get(h))&&(i=p({},n),pu(i,d)),e=e.ownerDocument||e,d=e.createElement("script"),Te(d),da(d,"link",i),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Dl(i,n.precedence,e));return t.instance}function Dl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=i.length?i[i.length-1]:null,h=d,E=0;E<i.length;E++){var T=i[E];if(T.dataset.precedence===t)h=T;else if(h!==d)break}h?h.parentNode.insertBefore(e,h.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function uu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function pu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Nl=null;function dm(e,t,n){if(Nl===null){var i=new Map,d=Nl=new Map;d.set(n,i)}else d=Nl,i=d.get(n),i||(i=new Map,d.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),d=0;d<n.length;d++){var h=n[d];if(!(h[Oe]||h[Pt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(t)||"";E=e+E;var T=i.get(E);T?T.push(h):i.set(E,[h])}}return i}function um(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function AE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function pm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Uo=null;function DE(){}function NE(e,t,n){if(Uo===null)throw Error(o(475));var i=Uo;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var d=qs(n.href),h=e.querySelector($o(d));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=Cl.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=h,Te(h);return}h=e.ownerDocument||e,n=lm(n),(d=tn.get(d))&&uu(n,d),h=h.createElement("link"),Te(h);var E=h;E._p=new Promise(function(T,q){E.onload=T,E.onerror=q}),da(h,"link",n),t.instance=h}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=Cl.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function CE(){if(Uo===null)throw Error(o(475));var e=Uo;return e.stylesheets&&e.count===0&&fu(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&fu(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function Cl(){if(this.count--,this.count===0){if(this.stylesheets)fu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Rl=null;function fu(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rl=new Map,t.forEach(RE,e),Rl=null,Cl.call(e))}function RE(e,t){if(!(t.state.loading&4)){var n=Rl.get(e);if(n)var i=n.get(null);else{n=new Map,Rl.set(e,n);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<d.length;h++){var E=d[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(n.set(E.dataset.precedence,E),i=E)}i&&n.set(null,i)}d=t.instance,E=d.getAttribute("data-precedence"),h=n.get(E)||i,h===i&&n.set(null,d),n.set(E,d),this.count++,i=Cl.bind(this),d.addEventListener("load",i),d.addEventListener("error",i),h?h.parentNode.insertBefore(d,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var Bo={$$typeof:_,Provider:null,Consumer:null,_currentValue:ge,_currentValue2:ge,_threadCount:0};function _E(e,t,n,i,d,h,E,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xt(0),this.hiddenUpdates=xt(null),this.identifierPrefix=i,this.onUncaughtError=d,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function fm(e,t,n,i,d,h,E,T,q,W,se,ce){return e=new _E(e,t,n,E,T,q,W,ce),t=1,h===!0&&(t|=24),h=$a(3,null,null,t),e.current=h,h.stateNode=e,t=Xc(),t.refCount++,e.pooledCache=t,t.refCount++,h.memoizedState={element:i,isDehydrated:n,cache:t},Qc(h),e}function hm(e){return e?(e=gs,e):gs}function gm(e,t,n,i,d,h){d=hm(d),i.context===null?i.context=d:i.pendingContext=d,i=sr(t),i.payload={element:n},h=h===void 0?null:h,h!==null&&(i.callback=h),n=or(e,i,t),n!==null&&(Ya(n,e,t),bo(n,e,t))}function mm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function hu(e,t){mm(e,t),(e=e.alternate)&&mm(e,t)}function ym(e){if(e.tag===13){var t=hs(e,67108864);t!==null&&Ya(t,e,67108864),hu(e,67108864)}}var _l=!0;function IE(e,t,n,i){var d=Y.T;Y.T=null;var h=Z.p;try{Z.p=2,gu(e,t,n,i)}finally{Z.p=h,Y.T=d}}function LE(e,t,n,i){var d=Y.T;Y.T=null;var h=Z.p;try{Z.p=8,gu(e,t,n,i)}finally{Z.p=h,Y.T=d}}function gu(e,t,n,i){if(_l){var d=mu(i);if(d===null)au(e,t,i,Il,n),vm(e,i);else if(kE(d,e,t,n,i))i.stopPropagation();else if(vm(e,i),t&4&&-1<PE.indexOf(e)){for(;d!==null;){var h=B(d);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=Tt(h.pendingLanes);if(E!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var q=1<<31-Le(E);T.entanglements[1]|=q,E&=~q}En(h),(pt&6)===0&&(hl=he()+500,Oo(0))}}break;case 13:T=hs(h,2),T!==null&&Ya(T,h,2),ml(),hu(h,2)}if(h=mu(i),h===null&&au(e,t,i,Il,n),h===d)break;d=h}d!==null&&i.stopPropagation()}else au(e,t,i,null,n)}}function mu(e){return e=wc(e),yu(e)}var Il=null;function yu(e){if(Il=null,e=ct(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Il=e,null}function bm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z()){case ue:return 2;case Ne:return 8;case be:case qe:return 32;case et:return 268435456;default:return 32}default:return 32}}var bu=!1,vr=null,Er=null,wr=null,zo=new Map,Yo=new Map,xr=[],PE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vm(e,t){switch(e){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":zo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(t.pointerId)}}function Ho(e,t,n,i,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:h,targetContainers:[d]},t!==null&&(t=B(t),t!==null&&ym(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function kE(e,t,n,i,d){switch(t){case"focusin":return vr=Ho(vr,e,t,n,i,d),!0;case"dragenter":return Er=Ho(Er,e,t,n,i,d),!0;case"mouseover":return wr=Ho(wr,e,t,n,i,d),!0;case"pointerover":var h=d.pointerId;return zo.set(h,Ho(zo.get(h)||null,e,t,n,i,d)),!0;case"gotpointercapture":return h=d.pointerId,Yo.set(h,Ho(Yo.get(h)||null,e,t,n,i,d)),!0}return!1}function Em(e){var t=ct(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,ba(e.priority,function(){if(n.tag===13){var i=za();i=Rn(i);var d=hs(n,i);d!==null&&Ya(d,n,i),hu(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ll(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=mu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ec=i,n.target.dispatchEvent(i),Ec=null}else return t=B(n),t!==null&&ym(t),e.blockedOn=n,!1;t.shift()}return!0}function wm(e,t,n){Ll(e)&&n.delete(t)}function OE(){bu=!1,vr!==null&&Ll(vr)&&(vr=null),Er!==null&&Ll(Er)&&(Er=null),wr!==null&&Ll(wr)&&(wr=null),zo.forEach(wm),Yo.forEach(wm)}function Pl(e,t){e.blockedOn===t&&(e.blockedOn=null,bu||(bu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,OE)))}var kl=null;function xm(e){kl!==e&&(kl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){kl===e&&(kl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],d=e[t+2];if(typeof i!="function"){if(yu(i||n)===null)continue;break}var h=B(n);h!==null&&(e.splice(t,3),t-=3,yd(h,{pending:!0,data:d,method:n.method,action:i},i,d))}}))}function Vo(e){function t(q){return Pl(q,e)}vr!==null&&Pl(vr,e),Er!==null&&Pl(Er,e),wr!==null&&Pl(wr,e),zo.forEach(t),Yo.forEach(t);for(var n=0;n<xr.length;n++){var i=xr[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)Em(n),n.blockedOn===null&&xr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var d=n[i],h=n[i+1],E=d[kt]||null;if(typeof h=="function")E||xm(n);else if(E){var T=null;if(h&&h.hasAttribute("formAction")){if(d=h,E=h[kt]||null)T=E.formAction;else if(yu(d)!==null)continue}else T=E.action;typeof T=="function"?n[i+1]=T:(n.splice(i,3),i-=3),xm(n)}}}function vu(e){this._internalRoot=e}Ol.prototype.render=vu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=za();gm(n,i,e,t,null,null)},Ol.prototype.unmount=vu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;gm(e.current,2,null,e,null,null),ml(),t[I]=null}};function Ol(e){this._internalRoot=e}Ol.prototype.unstable_scheduleHydration=function(e){if(e){var t=_n();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xr.length&&t!==0&&t<xr[n].priority;n++);xr.splice(n,0,e),n===0&&Em(e)}};var Sm=r.version;if(Sm!=="19.1.4")throw Error(o(527,Sm,"19.1.4"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=y(t),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var jE={bundleType:0,version:"19.1.4",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{ma=jl.inject(jE),Ee=jl}catch{}}return Xo.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,i="",d=$h,h=Fh,E=Uh,T=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(E=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(T=t.unstable_transitionCallbacks)),t=fm(e,1,!1,null,null,n,i,d,h,E,T,null),e[I]=t.current,tu(e),new vu(t)},Xo.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var i=!1,d="",h=$h,E=Fh,T=Uh,q=null,W=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(E=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(q=n.unstable_transitionCallbacks),n.formState!==void 0&&(W=n.formState)),t=fm(e,1,!0,t,n??null,i,d,h,E,T,q,W),t.context=hm(null),n=t.current,i=za(),i=Rn(i),d=sr(i),d.callback=null,or(n,d,i),n=i,t.current.lanes=n,Nt(t,n),En(t),e[I]=t.current,tu(e),new Ol(t)},Xo.version="19.1.4",Xo}var Pm;function GE(){if(Pm)return wu.exports;Pm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),wu.exports=VE(),wu.exports}var Ip=GE();const XE=wi(Ip),WE=rc({__proto__:null,default:XE},[Ip]);var M=sc();const re=wi(M),sb=rc({__proto__:null,default:re},[M]);const KE=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZE=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase()),km=a=>{const r=ZE(a);return r.charAt(0).toUpperCase()+r.slice(1)},ob=(...a)=>a.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim(),QE=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var JE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const ew=M.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:u,iconNode:g,...f},y)=>M.createElement("svg",{ref:y,...JE,width:r,height:r,stroke:a,strokeWidth:o?Number(s)*24/Number(r):s,className:ob("lucide",l),...!u&&!QE(f)&&{"aria-hidden":"true"},...f},[...g.map(([m,p])=>M.createElement(m,p)),...Array.isArray(u)?u:[u]]));const Ge=(a,r)=>{const s=M.forwardRef(({className:o,...l},u)=>M.createElement(ew,{ref:u,iconNode:r,className:ob(`lucide-${KE(km(a))}`,`lucide-${a}`,o),...l}));return s.displayName=km(a),s};const tw=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],Lp=Ge("archive",tw);const aw=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],nw=Ge("arrow-down",aw);const rw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ib=Ge("arrow-left",rw);const sw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],ow=Ge("arrow-right",sw);const iw=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],lw=Ge("arrow-up",iw);const cw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Hs=Ge("check",cw);const dw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Cr=Ge("chevron-down",dw);const uw=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],lb=Ge("chevron-left",uw);const pw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Pp=Ge("chevron-right",pw);const fw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Om=Ge("circle-check",fw);const hw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],gw=Ge("clipboard-check",hw);const mw=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],kp=Ge("database",mw);const yw=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Rr=Ge("download",yw);const bw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],vw=Ge("eye",bw);const Ew=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],ww=Ge("file-check-2",Ew);const xw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],Sw=Ge("file-code-2",xw);const Tw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],jm=Ge("file-plus-2",Tw);const Aw=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],Dw=Ge("file-search",Aw);const Nw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Zn=Ge("file-text",Nw);const Cw=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Xu=Ge("folder",Cw);const Rw=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],_w=Ge("funnel",Rw);const Iw=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],Lw=Ge("git-branch",Iw);const Pw=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Qn=Ge("hard-drive",Pw);const kw=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ri=Ge("layers",kw);const Ow=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Oa=Ge("loader-circle",Ow);const jw=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],qw=Ge("monitor",jw);const Mw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],pi=Ge("plus",Mw);const $w=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Fw=Ge("refresh-cw",$w);const Uw=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],qm=Ge("save",Uw);const Bw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],fi=Ge("search",Bw);const zw=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Yw=Ge("settings-2",zw);const Hw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Wu=Ge("shield-check",Hw);const Vw=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Ku=Ge("sliders-horizontal",Vw);const Gw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],hi=Ge("trash-2",Gw);const Xw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_r=Ge("triangle-alert",Xw);const Ww=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Jr=Ge("upload",Ww);const Kw=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Zw=Ge("wrench",Kw);const Qw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Zu=Ge("x",Qw);function Jw(a,r){if(a instanceof RegExp)return{keys:!1,pattern:a};var s,o,l,u,g=[],f="",y=a.split("/");for(y[0]||y.shift();l=y.shift();)s=l[0],s==="*"?(g.push(s),f+=l[1]==="?"?"(?:/(.*))?":"/(.*)"):s===":"?(o=l.indexOf("?",1),u=l.indexOf(".",1),g.push(l.substring(1,~o?o:~u?u:l.length)),f+=~o&&!~u?"(?:/([^/]+?))?":"/([^/]+?)",~u&&(f+=(~o?"?":"")+"\\"+l.substring(u))):f+="/"+l;return{keys:g,pattern:new RegExp("^"+f+(r?"(?=$|/)":"/?$"),"i")}}var Du={exports:{}},Nu={};var Mm;function ex(){if(Mm)return Nu;Mm=1;var a=sc();function r(b,v){return b===v&&(b!==0||1/b===1/v)||b!==b&&v!==v}var s=typeof Object.is=="function"?Object.is:r,o=a.useState,l=a.useEffect,u=a.useLayoutEffect,g=a.useDebugValue;function f(b,v){var x=v(),N=o({inst:{value:x,getSnapshot:v}}),D=N[0].inst,A=N[1];return u(function(){D.value=x,D.getSnapshot=v,y(D)&&A({inst:D})},[b,x,v]),l(function(){return y(D)&&A({inst:D}),b(function(){y(D)&&A({inst:D})})},[b]),g(x),x}function y(b){var v=b.getSnapshot;b=b.value;try{var x=v();return!s(b,x)}catch{return!0}}function m(b,v){return v()}var p=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?m:f;return Nu.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:p,Nu}var $m;function tx(){return $m||($m=1,Du.exports=ex()),Du.exports}var ax=tx();const nx=sb.useInsertionEffect,rx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cb=rx?M.useLayoutEffect:M.useEffect,sx=nx||cb,Op=a=>{const r=M.useRef([a,(...s)=>r[0](...s)]).current;return sx(()=>{r[0]=a}),r[1]},Fm=["popstate","pushState","replaceState","hashchange"];let si=[];const Um=()=>si.forEach(a=>a()),ox=a=>(si.push(a)===1&&Fm.forEach(r=>addEventListener(r,Um)),()=>{si=si.filter(r=>r!==a),si.length||Fm.forEach(r=>removeEventListener(r,Um))}),db=(a,r)=>ax.useSyncExternalStore(ox,a,r),Bm=()=>location.search,ix=({ssrSearch:a}={})=>db(Bm,a!=null?()=>a:Bm),zm=()=>location.pathname,lx=({ssrPath:a}={})=>db(zm,a!=null?()=>a:zm),cx=(a,{replace:r=!1,state:s=null}={})=>history[r?"replaceState":"pushState"](s,"",a),dx=a=>[lx(a),cx],Ym=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Ym]>"u"){for(const a of["pushState","replaceState"]){const r=history[a];history[a]=function(){const s=r.apply(this,arguments),o=new Event(a);return o.arguments=arguments,dispatchEvent(o),s}}Object.defineProperty(window,Ym,{value:!0})}const ub=(a="")=>a==="/"?"":a,ux=(a,r)=>a[0]==="~"?a.slice(1):ub(r)+a,px=(a,r)=>(a=Hm(ub(a)),r=Hm(r),!a||(r.toLowerCase()+"/").startsWith(a.toLowerCase()+"/")?r.slice(a.length)||"/":"~"+r),Hm=a=>{try{return a.includes("%")?decodeURI(a):a}catch{return a}},pb={hook:dx,searchHook:ix,parser:Jw,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:a=>a,aroundNav:(a,r,s)=>a(r,s)},fb=M.createContext(pb),oc=()=>M.useContext(fb),fx={};M.createContext(fx);const jp=a=>{const[r,s]=a.hook(a);return[px(a.base,r),Op((o,l)=>a.aroundNav(s,ux(o,a.base),l))]},hb=()=>jp(oc()),hx=({children:a,...r})=>{const s=oc(),o=r.hook?pb:s;let l=o;if(r.ssrPath){const[y,m=r.ssrSearch??""]=r.ssrPath.split("?");y&&(r.ssrSearch=m,r.ssrPath=y)}r.hrefs=r.hrefs??r.hook?.hrefs,r.searchHook=r.searchHook??r.hook?.searchHook;let u=M.useRef(o),g=u.current,f=g;for(let y in o){const m=y==="base"?o[y]+(r[y]??""):r[y]??o[y];m!==f[y]&&(g===f&&(u.current=f={...f}),f[y]=m),(m!==o[y]||m!==l[y])&&(l=f)}return M.createElement(fb.Provider,{value:l},a)},ha=M.forwardRef((a,r)=>{const s=oc(),[o,l]=jp(s),{to:u="",href:g=u,onClick:f,asChild:y,children:m,className:p,replace:b,state:v,transition:x,...N}=a;return N.onClick=Op(D=>{D.ctrlKey||D.metaKey||D.altKey||D.shiftKey||D.button!==0||(f?.(D),D.defaultPrevented||(D.preventDefault(),l(g,a)))}),N.href=s.hrefs(g[0]==="~"?g.slice(1):s.base+g,s),p!==void 0&&(N.className=p?.call?p(o===g):p),r&&(N.ref=r),y&&M.isValidElement(m)?M.cloneElement(m,N):M.createElement("a",N,m)}),gx=a=>{const{to:r,href:s=r}=a,o=oc(),[,l]=jp(o),u=Op(()=>l(r||s,a)),{ssrContext:g}=o;return cb(()=>{u()},[]),g&&(g.redirectTo=r),null},gb=`To use an existing Clerk app, run:
npx clerk@latest link
npx clerk@latest env pull

For production keys, run:
npx clerk@latest env pull --instance prod`,mb="Or copy keys from https://dashboard.clerk.com/~/api-keys into your .env file.",Vm=`To create a new Clerk app, run:
npx clerk@latest init

'npx clerk@latest init' does not need a Clerk account and writes temporary dev keys.

${gb}

${mb}`,mx=`${gb}

${mb}`,yx=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:`The publishableKey passed to Clerk is invalid (key={{key}}, expected format: pk_test_... or pk_live_...).

${Vm}`,MissingPublishableKeyErrorMessage:`Clerk keys are missing from your environment.

${Vm}`,MissingSecretKeyErrorMessage:`Missing secretKey.

${mx}`,MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function yb({packageName:a,customMessages:r}){let s=a;function o(u,g){if(!g)return`${s}: ${u}`;let f=u;const y=u.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const m of y){const p=(g[m[1]]||"").toString();f=f.replace(`{{${m[1]}}}`,p)}return`${s}: ${f}`}const l={...yx,...r};return{setPackageName({packageName:u}){return typeof u=="string"&&(s=u),this},setMessages({customMessages:u}){return Object.assign(l,u||{}),this},throwInvalidPublishableKeyError(u){throw new Error(o(l.InvalidPublishableKeyErrorMessage,u))},throwInvalidProxyUrl(u){throw new Error(o(l.InvalidProxyUrlErrorMessage,u))},throwMissingPublishableKeyError(){throw new Error(o(l.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(o(l.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(u){throw new Error(o(l.MissingClerkProvider,u))},throw(u){throw new Error(o(u))}}}const bx=()=>{try{return!1}catch{}return!1},vx=()=>{try{return!1}catch{}return!1},Ex=()=>{try{return!0}catch{}return!1};var Gm=Object.prototype.hasOwnProperty;function Xm(a,r,s){for(s of a.keys())if(li(s,r))return s}function li(a,r){var s,o,l;if(a===r)return!0;if(a&&r&&(s=a.constructor)===r.constructor){if(s===Date)return a.getTime()===r.getTime();if(s===RegExp)return a.toString()===r.toString();if(s===Array){if((o=a.length)===r.length)for(;o--&&li(a[o],r[o]););return o===-1}if(s===Set){if(a.size!==r.size)return!1;for(o of a)if(l=o,l&&typeof l=="object"&&(l=Xm(r,l),!l)||!r.has(l))return!1;return!0}if(s===Map){if(a.size!==r.size)return!1;for(o of a)if(l=o[0],l&&typeof l=="object"&&(l=Xm(r,l),!l)||!li(o[1],r.get(l)))return!1;return!0}if(s===ArrayBuffer)a=new Uint8Array(a),r=new Uint8Array(r);else if(s===DataView){if((o=a.byteLength)===r.byteLength)for(;o--&&a.getInt8(o)===r.getInt8(o););return o===-1}if(ArrayBuffer.isView(a)){if((o=a.byteLength)===r.byteLength)for(;o--&&a[o]===r[o];);return o===-1}if(!s||typeof a=="object"){o=0;for(s in a)if(Gm.call(a,s)&&++o&&!Gm.call(r,s)||!(s in r)||!li(a[s],r[s]))return!1;return Object.keys(r).length===o}}return a!==a&&r!==r}function wx(a,r){if(!a)throw typeof r=="string"?new Error(r):new Error(`${r.displayName} not found`)}const Ks=(a,r)=>{const{assertCtxFn:s=wx}={},o=re.createContext(void 0);return o.displayName=a,[o,()=>{const g=re.useContext(o);return s(g,`${a} not found`),g.value},()=>{const g=re.useContext(o);return g?g.value:{}}]},[xx,Sx]=Ks("ClerkInstanceContext");Ks("InitialStateContext");re.createContext({});Ks("CheckoutContext");function Tx(a){if(!re.useContext(xx)){if(typeof a=="function"){a();return}throw new Error(`${a} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}function Ax(a){const r=function(){};let s;return s=new Proxy(r,{get(o,l){if(l!=="then")return l==="toString"?()=>`[${a}]`:l===Symbol.toPrimitive?()=>0:s},apply(){return s},construct(){return s},has(){return!1},set(){return!1}}),s}Ax("ClerkMockQueryClient");typeof window<"u"?re.useLayoutEffect:re.useEffect;const Wm=li,Dx=a=>{const r=M.useRef(a);return M.useEffect(()=>{r.current=a},[a]),r.current},Ha=(a,r,s)=>{const o=!!s,l=M.useRef(s);M.useEffect(()=>{l.current=s},[s]),M.useEffect(()=>{if(!o||!a)return()=>{};const u=(...g)=>{l.current&&l.current(...g)};return a.on(r,u),()=>{a.off(r,u)}},[o,r,a,l])},bb=re.createContext(null);bb.displayName="ElementsContext";const Nx=(a,r)=>{if(!a)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${r} in an <Elements> provider.`);return a},Kl=a=>a!==null&&typeof a=="object",Cx=(a,r,s)=>Kl(a)?Object.keys(a).reduce((o,l)=>{const u=!Kl(r)||!vb(a[l],r[l]);return s.includes(l)?(u&&console.warn(`Unsupported prop change: options.${l} is not a mutable property.`),o):u?{...o||{},[l]:a[l]}:o},null):null,Km="[object Object]",vb=(a,r)=>{if(!Kl(a)||!Kl(r))return a===r;const s=Array.isArray(a);if(s!==Array.isArray(r))return!1;const o=Object.prototype.toString.call(a)===Km;if(o!==(Object.prototype.toString.call(r)===Km))return!1;if(!o&&!s)return a===r;const l=Object.keys(a),u=Object.keys(r);if(l.length!==u.length)return!1;const g={};for(let b=0;b<l.length;b+=1)g[l[b]]=!0;for(let b=0;b<u.length;b+=1)g[u[b]]=!0;const f=Object.keys(g);if(f.length!==l.length)return!1;const y=a,m=r,p=b=>vb(y[b],m[b]);return f.every(p)},Zm=a=>Nx(re.useContext(bb),a),Rx=a=>a.charAt(0).toUpperCase()+a.slice(1),_x=(a,r)=>{const s=`${Rx(a)}Element`,u=r?g=>{Zm(`mounts <${s}>`);const{id:f,className:y}=g;return re.createElement("div",{id:f,className:y})}:({id:g,className:f,fallback:y,options:m={},onBlur:p,onFocus:b,onReady:v,onChange:x,onEscape:N,onClick:D,onLoadError:A,onLoaderStart:S,onNetworksChange:L,onConfirm:_,onCancel:C,onShippingAddressChange:w,onShippingRateChange:O})=>{const R=Zm(`mounts <${s}>`),P="elements"in R?R.elements:null,[k,te]=re.useState(null),X=re.useRef(null),ae=re.useRef(null),[pe,oe]=M.useState(!1);Ha(k,"blur",p),Ha(k,"focus",b),Ha(k,"escape",N),Ha(k,"click",D),Ha(k,"loaderror",A),Ha(k,"loaderstart",S),Ha(k,"networkschange",L),Ha(k,"confirm",_),Ha(k,"cancel",C),Ha(k,"shippingaddresschange",w),Ha(k,"shippingratechange",O),Ha(k,"change",x);let ne;v&&(ne=()=>{oe(!0),v(k)}),Ha(k,"ready",ne),re.useLayoutEffect(()=>{if(X.current===null&&ae.current!==null&&P){let Z=null;P&&(Z=P.create(a,m)),X.current=Z,te(Z),Z&&Z.mount(ae.current)}},[P,m]);const Y=Dx(m);return re.useEffect(()=>{if(!X.current)return;const Z=Cx(m,Y,["paymentRequest"]);Z&&"update"in X.current&&X.current.update(Z)},[m,Y]),re.useLayoutEffect(()=>()=>{if(X.current&&typeof X.current.destroy=="function")try{X.current.destroy(),X.current=null}catch{}},[]),re.createElement(re.Fragment,null,!pe&&y,re.createElement("div",{id:g,style:{height:pe?"unset":"0px",visibility:pe?"visible":"hidden"},className:f,ref:ae}))};return u.displayName=s,u.__elementType=a,u};_x("payment",typeof window>"u");Ks("PaymentElementContext");Ks("StripeUtilsContext");const[gD,,Ix]=Ks("PortalProvider"),Lx=()=>{const a=Ix();return a&&"getContainer"in a&&a.getContainer?a.getContainer:()=>null},qp=yb({packageName:"@clerk/react"});function Px(a){qp.setMessages(a).setPackageName(a)}const kx=Sx,Ox=a=>{Tx(()=>{qp.throwMissingClerkProviderError({source:a})})};var ic=rb();const jx=wi(ic),qx=rc({__proto__:null,default:jx},[ic]),Ra=a=>{bx()&&console.error(`Clerk: ${a}`)},Qm=(a,...r)=>{const s={...a};for(const o of r)delete s[o];return s},Mx=a=>`You've passed multiple children components to <${a}/>. You can only pass a single child component or text.`,$x="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Fx="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Ux="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",Bx="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",zx=a=>`<${a} /> can only accept <${a}.Page /> and <${a}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,Yx=a=>`Missing props. <${a}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,Hx=a=>`Missing props. <${a}.Link /> component requires the following props: url, label and labelIcon.`,Vx="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Gx="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Xx="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",Wx="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",Kx="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",Zx="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",Qx="Missing props. <UserButton.Action /> component requires the following props: label.",xi=a=>r=>{try{return re.Children.only(a)}catch{const s=re.Children.toArray(a);return s.length===1&&re.isValidElement(s[0])?s[0]:qp.throw(Mx(r))}},Si=(a,r)=>(a||(a=r),typeof a=="string"&&(a=re.createElement("button",null,a)),a),Ti=a=>(...r)=>{if(a&&typeof a=="function")return a(...r)},ci=a=>{const[r,s]=M.useState(new Map),o=M.useRef(r),l=M.useRef(new Map),u=M.useRef(new Map);o.current=r,l.current=new Map(a.map(f=>[f.id,f.component]));const g=new Set(a.map(f=>f.id));return u.current.forEach((f,y)=>{g.has(y)||u.current.delete(y)}),a.map(f=>{const y=f.id,m=u.current.get(y);if(m)return m;const p=()=>{const v=o.current.get(y),x=l.current.get(y);return v?ic.createPortal(x,v):null},b={id:f.id,mount:v=>s(x=>new Map(x).set(y,v)),unmount:()=>s(v=>{const x=new Map(v);return x.set(y,null),x}),portal:p};return u.current.set(y,b),b})},Na=(a,r)=>!!a&&re.isValidElement(a)&&a?.type===r,Eb=(a,r)=>Sb({children:a,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:Di,PageComponent:Ai,MenuItemsComponent:cc,componentName:"UserProfile"},r),wb=(a,r)=>Sb({children:a,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:uc,PageComponent:dc,componentName:"OrganizationProfile"},r),xb=a=>{const r=[],s=[uc,dc,cc,Ai,Di];return re.Children.forEach(a,o=>{s.some(l=>Na(o,l))||r.push(o)}),r},Sb=(a,r)=>{const{children:s,LinkComponent:o,PageComponent:l,MenuItemsComponent:u,reorderItemsLabels:g,componentName:f}=a,{allowForAnyChildren:y=!1}=r||{},m=[],p=new Map;re.Children.forEach(s,_=>{if(!Na(_,l)&&!Na(_,o)&&!Na(_,u)){_&&!y&&Ra(zx(f));return}const{props:C}=_,{children:w,label:O,url:R,labelIcon:P}=C,k=_.key;if(Na(_,l))if(ey(C,g))m.push({label:O});else if(Cu(C))m.push({label:O,labelIcon:P,children:w,url:R,portalId:Jm("page",C,k,p)});else{Ra(Yx(f));return}if(Na(_,o))if(Ru(C))m.push({label:O,labelIcon:P,url:R,portalId:Jm("link",C,k,p)});else{Ra(Hx(f));return}});const b=[],v=[],x=[];m.forEach((_,C)=>{if(Cu(_)){b.push({component:_.children,id:_.portalId||C}),v.push({component:_.labelIcon,id:_.portalId||C});return}Ru(_)&&x.push({component:_.labelIcon,id:_.portalId||C})});const N=ci(b),D=ci(v),A=ci(x),S=[],L=[];return m.forEach((_,C)=>{if(ey(_,g)){S.push({label:_.label});return}if(Cu(_)){const{portal:w,mount:O,unmount:R}=N.find(X=>X.id===(_.portalId||C)),{portal:P,mount:k,unmount:te}=D.find(X=>X.id===(_.portalId||C));S.push({label:_.label,url:_.url,mount:O,unmount:R,mountIcon:k,unmountIcon:te}),L.push({key:`content:${_.portalId||C}`,portal:w}),L.push({key:`label:${_.portalId||C}`,portal:P});return}if(Ru(_)){const{portal:w,mount:O,unmount:R}=A.find(P=>P.id===(_.portalId||C));S.push({label:_.label,url:_.url,mountIcon:O,unmountIcon:R}),L.push({key:`label:${_.portalId||C}`,portal:w});return}}),{customPages:S,customPagesPortals:L}},Jm=(a,r,s,o)=>{if(s!=null)return`${a}:key:${s}`;const l=`${a}:${r.label}:${r.url}`,u=o.get(l)??0;return o.set(l,u+1),`${l}:${u}`},ey=(a,r)=>{const{children:s,label:o,url:l,labelIcon:u}=a;return!s&&!l&&!u&&r.some(g=>g===o)},Cu=a=>{const{children:r,label:s,url:o,labelIcon:l}=a;return!!r&&!!o&&!!l&&!!s},Ru=a=>{const{children:r,label:s,url:o,labelIcon:l}=a;return!r&&!!o&&!!l&&!!s},Jx=(a,r)=>e1({children:a,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:cc,MenuActionComponent:Ab,MenuLinkComponent:Db,UserProfileLinkComponent:Di,UserProfilePageComponent:Ai,allowForAnyChildren:r?.allowForAnyChildren??!1}),e1=({children:a,MenuItemsComponent:r,MenuActionComponent:s,MenuLinkComponent:o,UserProfileLinkComponent:l,UserProfilePageComponent:u,reorderItemsLabels:g,allowForAnyChildren:f=!1})=>{const y=[],m=[],p=[],b=new Map;re.Children.forEach(a,A=>{if(!Na(A,r)&&!Na(A,l)&&!Na(A,u)){A&&!f&&Ra(Vx);return}if(Na(A,l)||Na(A,u))return;const{props:S}=A;re.Children.forEach(S.children,L=>{if(!Na(L,s)&&!Na(L,o)){L&&Ra(Gx);return}const{props:_}=L,C=L.key,{label:w,labelIcon:O,href:R,onClick:P,open:k}=_;if(Na(L,s))if(ty(_,g))y.push({label:w});else if(Iu(_)){const te={label:w,labelIcon:O};if(P!==void 0)y.push({...te,onClick:P,portalId:_u("action",_,C,b)});else if(k!==void 0)y.push({...te,open:k.startsWith("/")?k:`/${k}`,portalId:_u("action",_,C,b)});else{Ra("Custom menu item must have either onClick or open property");return}}else{Ra(Qx);return}if(Na(L,o))if(Lu(_))y.push({label:w,labelIcon:O,href:R,portalId:_u("link",_,C,b)});else{Ra(Zx);return}})});const v=[],x=[];y.forEach((A,S)=>{Iu(A)&&v.push({component:A.labelIcon,id:A.portalId||S}),Lu(A)&&x.push({component:A.labelIcon,id:A.portalId||S})});const N=ci(v),D=ci(x);return y.forEach((A,S)=>{if(ty(A,g)&&m.push({label:A.label}),Iu(A)){const{portal:L,mount:_,unmount:C}=N.find(O=>O.id===(A.portalId||S)),w={label:A.label,mountIcon:_,unmountIcon:C};"onClick"in A?w.onClick=A.onClick:"open"in A&&(w.open=A.open),m.push(w),p.push({key:`icon:${A.portalId||S}`,portal:L})}if(Lu(A)){const{portal:L,mount:_,unmount:C}=D.find(w=>w.id===(A.portalId||S));m.push({label:A.label,href:A.href,mountIcon:_,unmountIcon:C}),p.push({key:`icon:${A.portalId||S}`,portal:L})}}),{customMenuItems:m,customMenuItemsPortals:p}},_u=(a,r,s,o)=>{if(s!=null)return`${a}:key:${s}`;const l=r.href||r.open||"",u=`${a}:${r.label}:${l}`,g=o.get(u)??0;return o.set(u,g+1),`${u}:${g}`},ty=(a,r)=>{const{children:s,label:o,onClick:l,labelIcon:u}=a;return!s&&!l&&!u&&r.some(g=>g===o)},Iu=a=>{const{label:r,labelIcon:s,onClick:o,open:l}=a;return!!s&&!!r&&(typeof o=="function"||typeof l=="string")},Lu=a=>{const{label:r,href:s,labelIcon:o}=a;return!!s&&!!o&&!!r},t1=a=>{const r=a?.isReady;return s=>new Promise((o,l)=>{const{root:u=document?.body,selector:g,timeout:f=0}=s;if(!u){l(new Error("No root element provided"));return}let y=u;if(g&&(y=u?.querySelector(g)),r(y,g)){o();return}const m=new MutationObserver(p=>{for(const b of p)if(!y&&g&&(y=u?.querySelector(g)),(a.childList&&b.type==="childList"||a.attributes&&b.type==="attributes")&&r(y,g)){m.disconnect(),o();return}});m.observe(u,a),f>0&&setTimeout(()=>{m.disconnect(),l(new Error(`Timeout waiting for ${g}`))},f)})},a1=t1({childList:!0,subtree:!0,isReady:(a,r)=>!!a?.childElementCount&&a?.matches?.(r)&&a.childElementCount>0});function oa(a,r){const s=M.useRef(),[o,l]=M.useState("rendering");return M.useEffect(()=>{if(!a)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!s.current){const u=`[data-clerk-component="${a}"]`,g=r?.selector;s.current=a1({selector:g?u+g:u}).then(()=>{l("rendered")}).catch(()=>{l("error")})}},[a,r?.selector]),o}const ql=a=>"mount"in a,ay=a=>"open"in a,ny=a=>a?.map(({mountIcon:r,unmountIcon:s,...o})=>o);var Zt=class extends re.PureComponent{constructor(...a){super(...a),this.rootRef=re.createRef()}componentDidUpdate(a){if(!ql(a)||!ql(this.props))return;const r=Qm(a.props||{},"customPages","customMenuItems","children"),s=Qm(this.props.props||{},"customPages","customMenuItems","children"),o=a.props?.customPages?.length!==this.props.props?.customPages?.length,l=a.props?.customMenuItems?.length!==this.props.props?.customMenuItems?.length,u=ny(a.props?.customMenuItems),g=ny(this.props.props?.customMenuItems);(!Wm(r,s)||!Wm(u,g)||o||l)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(ql(this.props)&&this.props.mount(this.rootRef.current,this.props.props),ay(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(ql(this.props)&&this.props.unmount(this.rootRef.current),ay(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:a=!1}=this.props,r={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return re.createElement(re.Fragment,null,!a&&re.createElement("div",r),this.props.children)}};const dt=(a,r)=>{const s=(typeof r=="string"?r:r?.component)||a.displayName||a.name||"Component";a.displayName=s;const o=typeof r=="string"?void 0:r,l=u=>{Ox(s||"withClerk");const g=kx(),f=Lx();return!g.loaded&&!o?.renderWhileLoading?null:re.createElement(a,{getContainer:f,...u,component:s,clerk:g})};return l.displayName=`withClerk(${s})`,l},lc=a=>re.createElement(re.Fragment,null,a?.customPagesPortals?.map(({key:r,portal:s})=>M.createElement(s,{key:r})),a?.customMenuItemsPortals?.map(({key:r,portal:s})=>M.createElement(s,{key:r})));dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountSignIn,unmount:a.unmountSignIn,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"SignIn",renderWhileLoading:!0});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountSignUp,unmount:a.unmountSignUp,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"SignUp",renderWhileLoading:!0});function Ai({children:a}){return Ra($x),re.createElement(re.Fragment,null,a)}function Di({children:a}){return Ra(Fx),re.createElement(re.Fragment,null,a)}const n1=dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:f}=Eb(o.children);return re.createElement(re.Fragment,null,l&&s,re.createElement(Zt,{component:r,mount:a.mountUserProfile,unmount:a.unmountUserProfile,updateProps:a.__internal_updateProps,props:{...o,customPages:g},rootProps:u},re.createElement(lc,{customPagesPortals:f})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(n1,{Page:Ai,Link:Di});const Tb=M.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),r1=dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:f}=Eb(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),y={...o.userProfileProps,customPages:g},{customMenuItems:m,customMenuItemsPortals:p}=Jx(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),b=xb(o.children),v={mount:a.mountUserButton,unmount:a.unmountUserButton,updateProps:a.__internal_updateProps,props:{...o,userProfileProps:y,customMenuItems:m}},x={customPagesPortals:f,customMenuItemsPortals:p};return re.createElement(Tb.Provider,{value:v},l&&s,a.loaded&&re.createElement(Zt,{component:r,...v,hideRootHtmlElement:!!o.__experimental_asProvider,rootProps:u},o.__experimental_asProvider?b:null,re.createElement(lc,x)))},{component:"UserButton",renderWhileLoading:!0});function cc({children:a}){return Ra(Xx),re.createElement(re.Fragment,null,a)}function Ab({children:a}){return Ra(Wx),re.createElement(re.Fragment,null,a)}function Db({children:a}){return Ra(Kx),re.createElement(re.Fragment,null,a)}function s1(a){const r=M.useContext(Tb),s={...r,props:{...r.props,...a}};return re.createElement(Zt,s)}Object.assign(r1,{UserProfilePage:Ai,UserProfileLink:Di,MenuItems:cc,Action:Ab,Link:Db,__experimental_Outlet:s1});function dc({children:a}){return Ra(Ux),re.createElement(re.Fragment,null,a)}function uc({children:a}){return Ra(Bx),re.createElement(re.Fragment,null,a)}const o1=dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:f}=wb(o.children);return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountOrganizationProfile,unmount:a.unmountOrganizationProfile,updateProps:a.__internal_updateProps,props:{...o,customPages:g},rootProps:u},re.createElement(lc,{customPagesPortals:f})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(o1,{Page:dc,Link:uc});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountCreateOrganization,unmount:a.unmountCreateOrganization,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"CreateOrganization",renderWhileLoading:!0});const Nb=M.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),i1=dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:f}=wb(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),y={...o.organizationProfileProps,customPages:g},m=xb(o.children),p={mount:a.mountOrganizationSwitcher,unmount:a.unmountOrganizationSwitcher,updateProps:a.__internal_updateProps,props:{...o,organizationProfileProps:y},rootProps:u,component:r};return a.__experimental_prefetchOrganizationSwitcher(),re.createElement(Nb.Provider,{value:p},re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{...p,hideRootHtmlElement:!!o.__experimental_asProvider},o.__experimental_asProvider?m:null,re.createElement(lc,{customPagesPortals:f}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function l1(a){const r=M.useContext(Nb),s={...r,props:{...r.props,...a}};return re.createElement(Zt,s)}Object.assign(i1,{OrganizationProfilePage:dc,OrganizationProfileLink:uc,__experimental_Outlet:l1});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountOrganizationList,unmount:a.unmountOrganizationList,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"OrganizationList",renderWhileLoading:!0});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,open:a.openGoogleOneTap,close:a.closeGoogleOneTap,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"GoogleOneTap",renderWhileLoading:!0});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountWaitlist,unmount:a.unmountWaitlist,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"Waitlist",renderWhileLoading:!0});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r,{selector:'[data-component-status="ready"]'})==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountPricingTable,unmount:a.unmountPricingTable,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"PricingTable",renderWhileLoading:!0});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountAPIKeys,unmount:a.unmountAPIKeys,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"ApiKeys",renderWhileLoading:!0});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.__internal_mountOAuthConsent,unmount:a.__internal_unmountOAuthConsent,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"OAuthConsent",renderWhileLoading:!0});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.__internal_mountOAuthDeviceVerification,unmount:a.__internal_unmountOAuthDeviceVerification,updateProps:g=>{a.__internal_updateProps(g)},props:o,rootProps:u}))},{component:"OAuthDeviceVerification",renderWhileLoading:!0});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountUserAvatar,unmount:a.unmountUserAvatar,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"UserAvatar",renderWhileLoading:!0});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountTaskChooseOrganization,unmount:a.unmountTaskChooseOrganization,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountTaskResetPassword,unmount:a.unmountTaskResetPassword,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"TaskResetPassword",renderWhileLoading:!0});dt(({clerk:a,component:r,fallback:s,...o})=>{const l=oa(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return re.createElement(re.Fragment,null,l&&s,a.loaded&&re.createElement(Zt,{component:r,mount:a.mountTaskSetupMFA,unmount:a.unmountTaskSetupMFA,updateProps:a.__internal_updateProps,props:o,rootProps:u}))},{component:"TaskSetupMFA",renderWhileLoading:!0});const c1=yb({packageName:"@clerk/shared"});function d1(a){c1.setPackageName({packageName:a})}const ry=new Set,pc=(a,r,s)=>{const o=vx()||Ex(),l=a;ry.has(l)||o||(ry.add(l),console.warn(`Clerk - DEPRECATION WARNING: "${a}" is deprecated and will be removed in the next major release.
${r}`))};function u1(a){const r=a.match(/^(\d+)\.(\d+)\.(\d+)/);if(!r)return null;const[,s,o,l]=r;return{major:parseInt(s,10),minor:parseInt(o,10),patch:parseInt(l,10)}}function p1(a,r){const{major:s,minor:o,patch:l}=a;return r.some(([u,g,f,y])=>s!==u?!1:f===-1?o>g||o===g&&l>=y:o===f&&l>=y)}function f1(a,r){const s=u1(a);return s?p1(s,r):!1}dt(({clerk:a,...r})=>{const{client:s,session:o}=a,l=(s.signedInSessions?.length??0)>0;return re.useEffect(()=>{o===null&&l?a.redirectToAfterSignOut():a.redirectToSignIn(r)},[]),null},"RedirectToSignIn");dt(({clerk:a,...r})=>(re.useEffect(()=>{a.redirectToSignUp(r)},[]),null),"RedirectToSignUp");dt(({clerk:a,...r})=>(re.useEffect(()=>{a.redirectToTasks(r)},[]),null),"RedirectToTasks");dt(({clerk:a})=>(re.useEffect(()=>{pc("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),a.redirectToUserProfile()},[]),null),"RedirectToUserProfile");dt(({clerk:a})=>(re.useEffect(()=>{pc("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),a.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");dt(({clerk:a})=>(re.useEffect(()=>{pc("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),a.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");dt(({clerk:a,...r})=>(re.useEffect(()=>{a.handleRedirectCallback(r)},[]),null),"AuthenticateWithRedirectCallback");typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);function h1(){try{return f1(re.version,[[18,0,-1,0],[19,0,0,3],[19,1,1,4],[19,2,2,3],[19,3,3,0]])}catch{return!1}}h1();typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);if(globalThis.__clerkSharedModules){const a=globalThis.__clerkSharedModules.react?.version;a&&a!==M.version&&console.warn(`[@clerk/ui/register] React version mismatch detected. Already registered: ${a}, current import: ${M.version}. This may cause issues with the shared @clerk/ui variant.`)}else globalThis.__clerkSharedModules={react:sb,"react-dom":qx,"react-dom/client":WE,"react/jsx-runtime":UE};dt(({clerk:a,children:r,...s})=>{const{appearance:o,getContainer:l,component:u,...g}=s;r=Si(r,"Invite members");const f=xi(r)("InviteMembersButton"),y=()=>a.openInviteMembers({appearance:o,getContainer:l}),p={...g,onClick:async b=>(f&&typeof f=="object"&&"props"in f&&await Ti(f.props.onClick)(b),y())};return re.cloneElement(f,p)},{component:"InviteMembersButton",renderWhileLoading:!0});dt(({clerk:a,children:r,...s})=>{const{appearance:o,getContainer:l,component:u,signUpFallbackRedirectUrl:g,forceRedirectUrl:f,fallbackRedirectUrl:y,signUpForceRedirectUrl:m,mode:p,initialValues:b,withSignUp:v,oauthFlow:x,...N}=s;r=Si(r,"Sign in");const D=xi(r)("SignInButton"),A=()=>{const _={forceRedirectUrl:f,fallbackRedirectUrl:y,signUpFallbackRedirectUrl:g,signUpForceRedirectUrl:m,initialValues:b,withSignUp:v,oauthFlow:x};return p==="modal"?a.openSignIn({..._,appearance:o,getContainer:l}):a.redirectToSignIn({..._,signInFallbackRedirectUrl:y,signInForceRedirectUrl:f})},L={...N,onClick:async _=>(D&&typeof D=="object"&&"props"in D&&await Ti(D.props.onClick)(_),A())};return re.cloneElement(D,L)},{component:"SignInButton",renderWhileLoading:!0});dt(({clerk:a,children:r,...s})=>{const{redirectUrl:o,getContainer:l,component:u,...g}=s;r=Si(r,"Sign in with Metamask");const f=xi(r)("SignInWithMetamaskButton"),y=async()=>{async function b(){await a.authenticateWithMetamask({redirectUrl:o||void 0})}b()},p={...g,onClick:async b=>(await Ti(f.props.onClick)(b),y())};return re.cloneElement(f,p)},{component:"SignInWithMetamask",renderWhileLoading:!0});dt(({clerk:a,children:r,...s})=>{const{redirectUrl:o="/",sessionId:l,signOutOptions:u,getContainer:g,component:f,...y}=s;u&&pc("SignOutButton `signOutOptions`","Use the `redirectUrl` and `sessionId` props directly instead."),r=Si(r,"Sign out");const m=xi(r)("SignOutButton"),p=()=>a.signOut({redirectUrl:o,...l!==void 0&&{sessionId:l},...u}),v={...y,onClick:async x=>(await Ti(m.props.onClick)(x),p())};return re.cloneElement(m,v)},{component:"SignOutButton",renderWhileLoading:!0});dt(({clerk:a,children:r,...s})=>{const{appearance:o,unsafeMetadata:l,getContainer:u,component:g,fallbackRedirectUrl:f,forceRedirectUrl:y,signInFallbackRedirectUrl:m,signInForceRedirectUrl:p,mode:b,initialValues:v,oauthFlow:x,...N}=s;r=Si(r,"Sign up");const D=xi(r)("SignUpButton"),A=()=>{const _={fallbackRedirectUrl:f,forceRedirectUrl:y,signInFallbackRedirectUrl:m,signInForceRedirectUrl:p,initialValues:v,oauthFlow:x};return b==="modal"?a.openSignUp({..._,appearance:o,unsafeMetadata:l,getContainer:u}):a.redirectToSignUp({..._,signUpFallbackRedirectUrl:f,signUpForceRedirectUrl:y})},L={...N,onClick:async _=>(D&&typeof D=="object"&&"props"in D&&await Ti(D.props.onClick)(_),A())};return re.cloneElement(D,L)},{component:"SignUpButton",renderWhileLoading:!0});Px({packageName:"@clerk/react"});d1("@clerk/react");var Pu={exports:{}};const Zs=a=>({...a,__type:"prebuilt_appearance"}),g1=Object.freeze(Object.defineProperty({__proto__:null,experimental_createTheme:Zs},Symbol.toStringTag,{value:"Module"})),m1=nb(g1),Cb=Zs({name:"dark",variables:{colorBackground:"#212126",colorNeutral:"white",colorPrimary:"#ffffff",colorPrimaryForeground:"black",colorForeground:"white",colorInputForeground:"white",colorInput:"#26262B"},elements:{providerIcon__apple:{filter:"invert(1)"},providerIcon__github:{filter:"invert(1)"},providerIcon__okx_wallet:{filter:"invert(1)"},providerIcon__vercel:{filter:"invert(1)"},activeDeviceIcon:{"--cl-chassis-bottom":"#d2d2d2","--cl-chassis-back":"#e6e6e6","--cl-chassis-screen":"#e6e6e6","--cl-screen":"#111111"}}}),y1=Zs({name:"shadesOfPurple",baseTheme:Cb,variables:{colorBackground:"#3f3c77",colorPrimary:"#f8d80d",colorPrimaryForeground:"#38375f",colorInputForeground:"#a1fdfe",colorShimmer:"rgba(161,253,254,0.36)"}}),Tr={boxShadow:"3px 3px 0px #000",border:"2px solid #000","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:active":{boxShadow:"2px 2px 0px #000",transform:"translate(1px)"}},Wr={boxShadow:"3px 3px 0px #000",border:"2px solid #000"},b1=Zs({name:"neobrutalism",simpleStyles:!0,variables:{colorPrimary:"#DF1B1B",colorShimmer:"rgba(255,255,255,0.64)",fontWeight:{normal:500,medium:600,bold:700}},elements:{cardBox:{boxShadow:"7px 7px 0px #000",border:"3px solid #000"},card:{borderRadius:"0"},headerSubtitle:{color:"#212126"},alternativeMethodsBlockButton:Tr,socialButtonsIconButton:{...Tr},selectButton:{...Tr,...Wr,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"}},socialButtonsBlockButton:{...Tr,color:"#212126"},profileSectionPrimaryButton:Tr,profileSectionItem:{color:"#212126"},avatarImageActionsUpload:Tr,menuButton:Wr,menuList:Wr,formButtonPrimary:Tr,navbarButton:Tr,formFieldAction:{fontWeight:"700"},formFieldInput:{...Wr,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:hover":{...Wr,transform:"scale(1.01)"}},table:Wr,tableHead:{color:"#212126"},dividerLine:{background:"#000"},dividerText:{fontWeight:"700",color:"#212126"},footer:{background:"#fff","& div":{color:"#212126"}},footerActionText:{color:"#212126"},footerActionLink:{fontWeight:"700",borderBottom:"3px solid","&:focus":{boxShadow:"none"}},actionCard:{...Wr},badge:{border:"1px solid #000",background:"#fff",color:"#212126"}}}),v1=Zs({name:"shadcn",cssLayerName:"components",variables:{colorBackground:"var(--card)",colorDanger:"var(--destructive)",colorForeground:"var(--card-foreground)",colorInput:"var(--input)",colorInputForeground:"var(--card-foreground)",colorModalBackdrop:"var(--color-black)",colorMuted:"var(--muted)",colorMutedForeground:"var(--muted-foreground)",colorNeutral:"var(--foreground)",colorPrimary:"var(--primary)",colorPrimaryForeground:"var(--primary-foreground)",colorRing:"var(--ring)",fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",semibold:"var(--font-weight-semibold)",bold:"var(--font-weight-semibold)"}},elements:{input:"bg-transparent dark:bg-input/30",cardBox:"shadow-sm border",popoverBox:"shadow-sm border",button:{'&[data-variant="solid"]::after':{display:"none"}},providerIcon__apple:"dark:invert",providerIcon__github:"dark:invert",providerIcon__okx_wallet:"dark:invert",providerIcon__vercel:"dark:invert"}}),E1=Zs({name:"simple",simpleStyles:!0}),w1=Object.freeze(Object.defineProperty({__proto__:null,dark:Cb,experimental__simple:E1,neobrutalism:b1,shadcn:v1,shadesOfPurple:y1},Symbol.toStringTag,{value:"Module"})),x1=nb(w1);var sy;function S1(){return sy||(sy=1,(function(a){var r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,u=(m,p,b,v)=>{if(p&&typeof p=="object"||typeof p=="function")for(let x of o(p))!l.call(m,x)&&x!==b&&r(m,x,{get:()=>p[x],enumerable:!(v=s(p,x))||v.enumerable});return m},g=(m,p,b)=>(u(m,p,"default"),b&&u(b,p,"default")),f=m=>u(r({},"__esModule",{value:!0}),m),y={};a.exports=f(y),g(y,m1,a.exports),g(y,x1,a.exports)})(Pu)),Pu.exports}S1();function oy(a){if(a instanceof Error)return a;if(typeof a=="string")return new Error(a);try{return new Error(JSON.stringify(a))}catch{return new Error(String(a))}}function T1({error:a,resetError:r}){return c.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50 p-6",children:c.jsxs("div",{className:"max-w-lg w-full text-center",children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Something went wrong"}),c.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"This part of the app hit an error. The rest of the app is still running."}),null,c.jsx("button",{type:"button",onClick:r,className:"mt-4 rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700",children:"Try again"})]})})}class A1 extends M.Component{state={error:null};static getDerivedStateFromError(r){return{error:oy(r)}}componentDidCatch(r,s){console.error("ErrorBoundary caught an error:",oy(r),s.componentStack)}componentDidUpdate(r){this.state.error!==null&&r.resetKey!==this.props.resetKey&&this.resetError()}resetError=()=>{this.setState({error:null})};render(){const{error:r}=this.state;if(r===null)return this.props.children;const s=this.props.FallbackComponent??T1;return c.jsx(s,{error:r,resetError:this.resetError})}}function D1({showLocalChip:a=!0}){const[r,s]=M.useState(""),[,o]=hb(),l=u=>{u.preventDefault(),r&&o(`/workspace/${r}`)};return c.jsxs("main",{className:"chooser-page",children:[c.jsxs("header",{className:"chooser-top",children:[c.jsxs(ha,{href:"/",className:"studio-wordmark","aria-label":"Mapping Studio home","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),a&&c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Browser-local workspace"]})]}),c.jsxs("section",{className:"chooser-content","aria-labelledby":"chooser-title",children:[c.jsxs("div",{className:"chooser-intro",children:[c.jsx("div",{className:"eyebrow",children:"Engineering workspace"}),c.jsx("h1",{id:"chooser-title",children:"Choose a discipline"}),c.jsx("p",{children:"Keep drawing groups organized and traceable on this device."})]}),c.jsxs("form",{className:"discipline-picker",onSubmit:l,"data-testid":"form-discipline-picker",children:[c.jsxs("div",{className:"discipline-field",children:[c.jsx("label",{htmlFor:"discipline-select",children:"Drawing type"}),c.jsxs("div",{className:"discipline-select-control",children:[c.jsxs("select",{id:"discipline-select",value:r,onChange:u=>s(u.target.value),"aria-label":"Drawing type","data-testid":"select-discipline",children:[c.jsx("option",{value:"",disabled:!0,children:"Select PFD or P&ID"}),c.jsx("option",{value:"pfd",children:"PFD — Process Flow Diagram"}),c.jsx("option",{value:"pid",children:"P&ID — Piping and Instrumentation Diagram"})]}),c.jsx(Cr,{size:17,"aria-hidden":"true"})]})]}),c.jsxs("button",{className:"btn primary discipline-submit",type:"submit",disabled:!r,"data-testid":"button-open-discipline",children:["Open workspace ",c.jsx(ow,{size:16,"aria-hidden":"true"})]})]}),c.jsxs("div",{className:"chooser-foot",children:[c.jsx(Qn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Stored in this browser only."})," Nothing is uploaded or shared."]})]})]}),c.jsxs("footer",{className:"chooser-footer",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:"PDFs and project data stay in this browser"}),c.jsx("span",{children:"© 2026 gaurav.cbiindia"})]})]})}function N1(){return c.jsx("main",{className:"chooser-page not-found",children:c.jsxs("div",{className:"not-found-card",children:[c.jsx("div",{className:"eyebrow",children:"Page not found"}),c.jsx("h1",{children:"This workspace does not exist."}),c.jsx(ha,{href:"/",className:"btn primary","data-testid":"link-not-found-home",children:"Return to disciplines"})]})})}const Mp="pid-mapping-studio:hierarchies:v2",Rb="pid-mapping-studio:hierarchies:v1",Zl=80,C1=128,R1=5e3,_1=64;class di extends Error{rawValue;constructor(r,s=null){super(r),this.name="HierarchyLoadError",this.rawValue=s}}function Qu(){return{version:2,pfd:[],pid:[]}}function $p(a,r){return Object.keys(a).length===r.length&&r.every(o=>Object.prototype.hasOwnProperty.call(a,o))}function Ql(a,r,s=new Set){let o=0;const l=(u,g)=>{if(g>_1)return!1;for(const f of u){if(!f||typeof f!="object"||Array.isArray(f))return!1;const y=f;if(!$p(y,r?["id","name","kind","expanded","children"]:["id","name","expanded","children"])||typeof y.id!="string"||y.id.length===0||y.id.length>C1||typeof y.name!="string"||y.name.trim().length===0||y.name!==y.name.trim()||y.name.length>Zl||r&&!["technology","projects","proposals","project","proposal","client","legacy"].includes(String(y.kind))||typeof y.expanded!="boolean"||!Array.isArray(y.children)||s.has(y.id)||(s.add(y.id),o+=1,o>R1||!l(y.children,g+1)))return!1}return!0};return l(a,0)}function oi(a,r){if(a.kind==="legacy")return(r===null||r==="legacy")&&a.children.every(o=>oi(o,"legacy"));const s={technology:null,projects:"technology",proposals:"technology",project:"projects",proposal:"proposals",client:"project"};return a.kind==="client"&&r!=="project"&&r!=="proposal"||a.kind!=="client"&&s[a.kind]!==r?!1:a.kind==="technology"?a.children.filter(o=>o.kind==="projects").length===1&&a.children.filter(o=>o.kind==="proposals").length===1&&a.children.every(o=>oi(o,"technology")):a.kind==="projects"||a.kind==="proposals"?a.children.every(o=>oi(o,a.kind)):a.kind==="project"||a.kind==="proposal"?a.children.every(o=>oi(o,a.kind)):a.children.length===0}function _b(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!$p(r,["version","pfd","pid"])||r.version!==2||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const s=new Set;return Ql(r.pfd,!0,s)&&Ql(r.pid,!0,s)&&[...r.pfd,...r.pid].every(o=>oi(o,null))}function I1(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!$p(r,["version","pfd","pid"])||r.version!==1||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const s=new Set;return Ql(r.pfd,!1,s)&&Ql(r.pid,!1,s)}function Ju(a){return a.map(r=>({id:r.id,name:r.name,kind:"legacy",expanded:r.expanded,children:Ju(r.children)}))}function L1(a){return{version:2,pfd:Ju(a.pfd),pid:Ju(a.pid)}}function P1(){let a;try{a=window.localStorage.getItem(Mp),a===null&&(a=window.localStorage.getItem(Rb))}catch{throw new di("Saved groups could not be read from browser storage.")}if(a===null)return Qu();let r;try{r=JSON.parse(a)}catch{throw new di("Saved group data is not valid JSON.",a)}if(_b(r))return r;if(I1(r))return L1(r);throw new di("Saved group data is malformed or uses an unsupported format.",a)}function k1(a){if(!_b(a))throw new Error("Groups could not be saved because the hierarchy is invalid.");window.localStorage.setItem(Mp,JSON.stringify(a))}function Yl(a,r,s){return a.map(o=>o.id===r?s(o):{...o,children:Yl(o.children,r,s)})}function Ib(a,r){return a.filter(s=>s.id!==r).map(s=>({...s,children:Ib(s.children,r)}))}function Lb(a,r){return r?a.id===r||a.children.some(s=>Lb(s,r)):!1}function ep(a){return a.reduce((r,s)=>r+1+ep(s.children),0)}function tp(a,r){if(!r)return null;for(const s of a){if(s.id===r)return s;const o=tp(s.children,r);if(o)return o}return null}function Pb(a,r,s){return a.flatMap(o=>{const l=r?`${r} / ${o.name}`:o.name;return[...s(o)?[{id:o.id,label:l}]:[],...Pb(o.children,l,s)]})}function kb(a){return Pb(a,"",r=>r.kind==="client"||r.kind==="legacy")}const O1="modulepreload",j1=function(a){return"/pid-mapping-studio-app/"+a},iy={},pn=function(r,s,o){let l=Promise.resolve();if(s&&s.length>0){let y=function(m){return Promise.all(m.map(p=>Promise.resolve(p).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),f=g?.nonce||g?.getAttribute("nonce");l=y(s.map(m=>{if(m=j1(m),m in iy)return;iy[m]=!0;const p=m.endsWith(".css"),b=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${b}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":O1,p||(v.as="script"),v.crossOrigin="",v.href=m,f&&v.setAttribute("nonce",f),document.head.appendChild(v),p)return new Promise((x,N)=>{v.addEventListener("load",x),v.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${m}`)))})}))}function u(g){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=g,window.dispatchEvent(f),!f.defaultPrevented)throw g}return l.then(g=>{for(const f of g||[])f.status==="rejected"&&u(f.reason);return r().catch(u)})};async function q1(){const[a,r]=await Promise.all([pn(()=>import("./pdf-TYrZqVzP.js"),[]),pn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);return a.GlobalWorkerOptions.workerSrc=r.default,a}function M1({fileId:a,alias:r,pageCount:s,page:o,onPageChange:l,loadBytes:u,markers:g=[],onMarkerClick:f}){const y=M.useRef(null),m=M.useRef(null),[p,b]=M.useState(0),[v,x]=M.useState("loading"),[N,D]=M.useState(0),A=M.useRef(u);return A.current=u,M.useEffect(()=>{const S=m.current;if(!S)return;b(S.clientWidth);const L=new ResizeObserver(()=>b(Math.round(S.clientWidth/24)*24));return L.observe(S),()=>L.disconnect()},[]),M.useEffect(()=>{if(!p)return;let S=!1,L=null,_=null;return x("loading"),(async()=>{try{const[C,w]=await Promise.all([q1(),A.current(a)]);if(S)return;_=C.getDocument({data:new Uint8Array(w.slice(0))});const O=await _.promise;if(S)return;const R=await O.getPage(Math.min(Math.max(o,1),O.numPages)),P=R.getViewport({scale:1}),k=Math.min(window.devicePixelRatio||1,2),te=p/P.width*k,X=R.getViewport({scale:te}),ae=y.current;if(!ae||S)return;ae.width=Math.floor(X.width),ae.height=Math.floor(X.height),ae.style.width="100%";const pe=R.render({canvas:ae,canvasContext:ae.getContext("2d"),viewport:X});L=pe,await pe.promise,S||x("ready")}catch(C){if(S||C?.name==="RenderingCancelledException")return;x("error")}})(),()=>{S=!0,L?.cancel(),_?.destroy().catch(()=>{})}},[a,o,p,N]),c.jsxs("div",{className:"ppv","data-testid":"panel-source-preview",children:[c.jsxs("div",{className:"ppv-bar",children:[c.jsx("span",{className:"ppv-label","data-testid":"text-preview-label",children:"Original source PDF · not generated CAD"}),c.jsxs("div",{className:"ppv-nav",children:[c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Previous page",disabled:o<=1,onClick:()=>l(o-1),"data-testid":"button-preview-prev",children:c.jsx(lb,{size:15})}),c.jsxs("span",{"data-testid":"text-preview-page","aria-live":"polite",children:[r," · page ",o," of ",s]}),c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Next page",disabled:o>=s,onClick:()=>l(o+1),"data-testid":"button-preview-next",children:c.jsx(Pp,{size:15})})]})]}),c.jsxs("div",{className:"ppv-stage",ref:m,children:[c.jsxs("div",{className:"ppv-canvas-wrap",style:{visibility:v==="ready"?"visible":"hidden"},children:[c.jsx("canvas",{ref:y,"aria-label":`Original source page ${o} of ${r}`,"data-testid":"canvas-source-preview"}),v==="ready"&&g.length>0&&c.jsx("div",{className:"ppv-markers","aria-label":"Extracted tag source locations",children:g.map((S,L)=>c.jsx("button",{className:"ppv-marker",type:"button",style:{left:`${S.location.x*100}%`,top:`${S.location.y*100}%`,width:`${Math.max(S.location.width*100,1.1)}%`,height:`${Math.max(S.location.height*100,1.2)}%`},"aria-label":`OCR location for ${S.label}; verify against the PDF`,title:`${S.label} · OCR candidate location`,onClick:()=>f?.(S.id),"data-testid":`marker-source-${S.id}-${L}`,children:c.jsx("span",{children:S.label})},`${S.id}-${S.location.pageNumber}-${L}`))})]}),g.length>0&&c.jsx("div",{className:"ppv-marker-note",role:"note",children:"Red boxes show OCR candidate locations. Confirm each tag against the original PDF."}),v==="loading"&&c.jsxs("div",{className:"ppv-overlay",role:"status","data-testid":"status-preview-loading",children:[c.jsx(Oa,{size:18,className:"pdf-spin"})," Rendering page"]}),v==="error"&&c.jsxs("div",{className:"ppv-overlay ppv-error",role:"alert","data-testid":"status-preview-error",children:[c.jsx(_r,{size:18})," This page could not be shown.",c.jsx("button",{type:"button",className:"btn",onClick:()=>D(S=>S+1),"data-testid":"button-preview-retry",children:"Try again"})]})]})]})}var Ht=Uint8Array,Va=Uint16Array,Fp=Int32Array,fc=new Ht([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),hc=new Ht([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ap=new Ht([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ob=function(a,r){for(var s=new Va(31),o=0;o<31;++o)s[o]=r+=1<<a[o-1];for(var l=new Fp(s[30]),o=1;o<30;++o)for(var u=s[o];u<s[o+1];++u)l[u]=u-s[o]<<5|o;return{b:s,r:l}},jb=Ob(fc,2),qb=jb.b,np=jb.r;qb[28]=258,np[258]=28;var Mb=Ob(hc,0),$1=Mb.b,ly=Mb.r,rp=new Va(32768);for(var Dt=0;Dt<32768;++Dt){var Ar=(Dt&43690)>>1|(Dt&21845)<<1;Ar=(Ar&52428)>>2|(Ar&13107)<<2,Ar=(Ar&61680)>>4|(Ar&3855)<<4,rp[Dt]=((Ar&65280)>>8|(Ar&255)<<8)>>1}var Dn=(function(a,r,s){for(var o=a.length,l=0,u=new Va(r);l<o;++l)a[l]&&++u[a[l]-1];var g=new Va(r);for(l=1;l<r;++l)g[l]=g[l-1]+u[l-1]<<1;var f;if(s){f=new Va(1<<r);var y=15-r;for(l=0;l<o;++l)if(a[l])for(var m=l<<4|a[l],p=r-a[l],b=g[a[l]-1]++<<p,v=b|(1<<p)-1;b<=v;++b)f[rp[b]>>y]=m}else for(f=new Va(o),l=0;l<o;++l)a[l]&&(f[l]=rp[g[a[l]-1]++]>>15-a[l]);return f}),Ir=new Ht(288);for(var Dt=0;Dt<144;++Dt)Ir[Dt]=8;for(var Dt=144;Dt<256;++Dt)Ir[Dt]=9;for(var Dt=256;Dt<280;++Dt)Ir[Dt]=7;for(var Dt=280;Dt<288;++Dt)Ir[Dt]=8;var gi=new Ht(32);for(var Dt=0;Dt<32;++Dt)gi[Dt]=5;var F1=Dn(Ir,9,0),U1=Dn(Ir,9,1),B1=Dn(gi,5,0),z1=Dn(gi,5,1),ku=function(a){for(var r=a[0],s=1;s<a.length;++s)a[s]>r&&(r=a[s]);return r},dn=function(a,r,s){var o=r/8|0;return(a[o]|a[o+1]<<8)>>(r&7)&s},Ou=function(a,r){var s=r/8|0;return(a[s]|a[s+1]<<8|a[s+2]<<16)>>(r&7)},Up=function(a){return(a+7)/8|0},Ni=function(a,r,s){return(r==null||r<0)&&(r=0),(s==null||s>a.length)&&(s=a.length),new Ht(a.subarray(r,s))},Y1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ta=function(a,r,s){var o=new Error(r||Y1[a]);if(o.code=a,Error.captureStackTrace&&Error.captureStackTrace(o,Ta),!s)throw o;return o},H1=function(a,r,s,o){var l=a.length,u=o?o.length:0;if(!l||r.f&&!r.l)return s||new Ht(0);var g=!s,f=g||r.i!=2,y=r.i;g&&(s=new Ht(l*3));var m=function(ut){var gt=s.length;if(ut>gt){var Ft=new Ht(Math.max(gt*2,ut));Ft.set(s),s=Ft}},p=r.f||0,b=r.p||0,v=r.b||0,x=r.l,N=r.d,D=r.m,A=r.n,S=l*8;do{if(!x){p=dn(a,b,1);var L=dn(a,b+1,3);if(b+=3,L)if(L==1)x=U1,N=z1,D=9,A=5;else if(L==2){var O=dn(a,b,31)+257,R=dn(a,b+10,15)+4,P=O+dn(a,b+5,31)+1;b+=14;for(var k=new Ht(P),te=new Ht(19),X=0;X<R;++X)te[ap[X]]=dn(a,b+X*3,7);b+=R*3;for(var ae=ku(te),pe=(1<<ae)-1,oe=Dn(te,ae,1),X=0;X<P;){var ne=oe[dn(a,b,pe)];b+=ne&15;var _=ne>>4;if(_<16)k[X++]=_;else{var Y=0,Z=0;for(_==16?(Z=3+dn(a,b,3),b+=2,Y=k[X-1]):_==17?(Z=3+dn(a,b,7),b+=3):_==18&&(Z=11+dn(a,b,127),b+=7);Z--;)k[X++]=Y}}var ge=k.subarray(0,O),we=k.subarray(O);D=ku(ge),A=ku(we),x=Dn(ge,D,1),N=Dn(we,A,1)}else Ta(1);else{var _=Up(b)+4,C=a[_-4]|a[_-3]<<8,w=_+C;if(w>l){y&&Ta(0);break}f&&m(v+C),s.set(a.subarray(_,w),v),r.b=v+=C,r.p=b=w*8,r.f=p;continue}if(b>S){y&&Ta(0);break}}f&&m(v+131072);for(var j=(1<<D)-1,ee=(1<<A)-1,U=b;;U=b){var Y=x[Ou(a,b)&j],V=Y>>4;if(b+=Y&15,b>S){y&&Ta(0);break}if(Y||Ta(2),V<256)s[v++]=V;else if(V==256){U=b,x=null;break}else{var ie=V-254;if(V>264){var X=V-257,de=fc[X];ie=dn(a,b,(1<<de)-1)+qb[X],b+=de}var ve=N[Ou(a,b)&ee],Ie=ve>>4;ve||Ta(3),b+=ve&15;var we=$1[Ie];if(Ie>3){var de=hc[Ie];we+=Ou(a,b)&(1<<de)-1,b+=de}if(b>S){y&&Ta(0);break}f&&m(v+131072);var Pe=v+ie;if(v<we){var vt=u-we,at=Math.min(we,Pe);for(vt+v<0&&Ta(3);v<at;++v)s[v]=o[vt+v]}for(;v<Pe;++v)s[v]=s[v-we]}}r.l=x,r.p=U,r.b=v,r.f=p,x&&(p=1,r.m=D,r.d=N,r.n=A)}while(!p);return v!=s.length&&g?Ni(s,0,v):s.subarray(0,v)},Vn=function(a,r,s){s<<=r&7;var o=r/8|0;a[o]|=s,a[o+1]|=s>>8},Wo=function(a,r,s){s<<=r&7;var o=r/8|0;a[o]|=s,a[o+1]|=s>>8,a[o+2]|=s>>16},ju=function(a,r){for(var s=[],o=0;o<a.length;++o)a[o]&&s.push({s:o,f:a[o]});var l=s.length,u=s.slice();if(!l)return{t:Fb,l:0};if(l==1){var g=new Ht(s[0].s+1);return g[s[0].s]=1,{t:g,l:1}}s.sort(function(w,O){return w.f-O.f}),s.push({s:-1,f:25001});var f=s[0],y=s[1],m=0,p=1,b=2;for(s[0]={s:-1,f:f.f+y.f,l:f,r:y};p!=l-1;)f=s[s[m].f<s[b].f?m++:b++],y=s[m!=p&&s[m].f<s[b].f?m++:b++],s[p++]={s:-1,f:f.f+y.f,l:f,r:y};for(var v=u[0].s,o=1;o<l;++o)u[o].s>v&&(v=u[o].s);var x=new Va(v+1),N=sp(s[p-1],x,0);if(N>r){var o=0,D=0,A=N-r,S=1<<A;for(u.sort(function(O,R){return x[R.s]-x[O.s]||O.f-R.f});o<l;++o){var L=u[o].s;if(x[L]>r)D+=S-(1<<N-x[L]),x[L]=r;else break}for(D>>=A;D>0;){var _=u[o].s;x[_]<r?D-=1<<r-x[_]++-1:++o}for(;o>=0&&D;--o){var C=u[o].s;x[C]==r&&(--x[C],++D)}N=r}return{t:new Ht(x),l:N}},sp=function(a,r,s){return a.s==-1?Math.max(sp(a.l,r,s+1),sp(a.r,r,s+1)):r[a.s]=s},cy=function(a){for(var r=a.length;r&&!a[--r];);for(var s=new Va(++r),o=0,l=a[0],u=1,g=function(y){s[o++]=y},f=1;f<=r;++f)if(a[f]==l&&f!=r)++u;else{if(!l&&u>2){for(;u>138;u-=138)g(32754);u>2&&(g(u>10?u-11<<5|28690:u-3<<5|12305),u=0)}else if(u>3){for(g(l),--u;u>6;u-=6)g(8304);u>2&&(g(u-3<<5|8208),u=0)}for(;u--;)g(l);u=1,l=a[f]}return{c:s.subarray(0,o),n:r}},Ko=function(a,r){for(var s=0,o=0;o<r.length;++o)s+=a[o]*r[o];return s},$b=function(a,r,s){var o=s.length,l=Up(r+2);a[l]=o&255,a[l+1]=o>>8,a[l+2]=a[l]^255,a[l+3]=a[l+1]^255;for(var u=0;u<o;++u)a[l+u+4]=s[u];return(l+4+o)*8},dy=function(a,r,s,o,l,u,g,f,y,m,p){Vn(r,p++,s),++l[256];for(var b=ju(l,15),v=b.t,x=b.l,N=ju(u,15),D=N.t,A=N.l,S=cy(v),L=S.c,_=S.n,C=cy(D),w=C.c,O=C.n,R=new Va(19),P=0;P<L.length;++P)++R[L[P]&31];for(var P=0;P<w.length;++P)++R[w[P]&31];for(var k=ju(R,7),te=k.t,X=k.l,ae=19;ae>4&&!te[ap[ae-1]];--ae);var pe=m+5<<3,oe=Ko(l,Ir)+Ko(u,gi)+g,ne=Ko(l,v)+Ko(u,D)+g+14+3*ae+Ko(R,te)+2*R[16]+3*R[17]+7*R[18];if(y>=0&&pe<=oe&&pe<=ne)return $b(r,p,a.subarray(y,y+m));var Y,Z,ge,we;if(Vn(r,p,1+(ne<oe)),p+=2,ne<oe){Y=Dn(v,x,0),Z=v,ge=Dn(D,A,0),we=D;var j=Dn(te,X,0);Vn(r,p,_-257),Vn(r,p+5,O-1),Vn(r,p+10,ae-4),p+=14;for(var P=0;P<ae;++P)Vn(r,p+3*P,te[ap[P]]);p+=3*ae;for(var ee=[L,w],U=0;U<2;++U)for(var V=ee[U],P=0;P<V.length;++P){var ie=V[P]&31;Vn(r,p,j[ie]),p+=te[ie],ie>15&&(Vn(r,p,V[P]>>5&127),p+=V[P]>>12)}}else Y=F1,Z=Ir,ge=B1,we=gi;for(var P=0;P<f;++P){var de=o[P];if(de>255){var ie=de>>18&31;Wo(r,p,Y[ie+257]),p+=Z[ie+257],ie>7&&(Vn(r,p,de>>23&31),p+=fc[ie]);var ve=de&31;Wo(r,p,ge[ve]),p+=we[ve],ve>3&&(Wo(r,p,de>>5&8191),p+=hc[ve])}else Wo(r,p,Y[de]),p+=Z[de]}return Wo(r,p,Y[256]),p+Z[256]},V1=new Fp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Fb=new Ht(0),G1=function(a,r,s,o,l,u){var g=u.z||a.length,f=new Ht(o+g+5*(1+Math.ceil(g/7e3))+l),y=f.subarray(o,f.length-l),m=u.l,p=(u.r||0)&7;if(r){p&&(y[0]=u.r>>3);for(var b=V1[r-1],v=b>>13,x=b&8191,N=(1<<s)-1,D=u.p||new Va(32768),A=u.h||new Va(N+1),S=Math.ceil(s/3),L=2*S,_=function(Et){return(a[Et]^a[Et+1]<<S^a[Et+2]<<L)&N},C=new Fp(25e3),w=new Va(288),O=new Va(32),R=0,P=0,k=u.i||0,te=0,X=u.w||0,ae=0;k+2<g;++k){var pe=_(k),oe=k&32767,ne=A[pe];if(D[oe]=ne,A[pe]=oe,X<=k){var Y=g-k;if((R>7e3||te>24576)&&(Y>423||!m)){p=dy(a,y,0,C,w,O,P,te,ae,k-ae,p),te=R=P=0,ae=k;for(var Z=0;Z<286;++Z)w[Z]=0;for(var Z=0;Z<30;++Z)O[Z]=0}var ge=2,we=0,j=x,ee=oe-ne&32767;if(Y>2&&pe==_(k-ee))for(var U=Math.min(v,Y)-1,V=Math.min(32767,k),ie=Math.min(258,Y);ee<=V&&--j&&oe!=ne;){if(a[k+ge]==a[k+ge-ee]){for(var de=0;de<ie&&a[k+de]==a[k+de-ee];++de);if(de>ge){if(ge=de,we=ee,de>U)break;for(var ve=Math.min(ee,de-2),Ie=0,Z=0;Z<ve;++Z){var Pe=k-ee+Z&32767,vt=D[Pe],at=Pe-vt&32767;at>Ie&&(Ie=at,ne=Pe)}}}oe=ne,ne=D[oe],ee+=oe-ne&32767}if(we){C[te++]=268435456|np[ge]<<18|ly[we];var ut=np[ge]&31,gt=ly[we]&31;P+=fc[ut]+hc[gt],++w[257+ut],++O[gt],X=k+ge,++R}else C[te++]=a[k],++w[a[k]]}}for(k=Math.max(k,X);k<g;++k)C[te++]=a[k],++w[a[k]];p=dy(a,y,m,C,w,O,P,te,ae,k-ae,p),m||(u.r=p&7|y[p/8|0]<<3,p-=7,u.h=A,u.p=D,u.i=k,u.w=X)}else{for(var k=u.w||0;k<g+m;k+=65535){var Ft=k+65535;Ft>=g&&(y[p/8|0]=m,Ft=g),p=$b(y,p+1,a.subarray(k,Ft))}u.i=g}return Ni(f,0,o+Up(p)+l)},X1=(function(){for(var a=new Int32Array(256),r=0;r<256;++r){for(var s=r,o=9;--o;)s=(s&1&&-306674912)^s>>>1;a[r]=s}return a})(),W1=function(){var a=-1;return{p:function(r){for(var s=a,o=0;o<r.length;++o)s=X1[s&255^r[o]]^s>>>8;a=s},d:function(){return~a}}},K1=function(a,r,s,o,l){if(!l&&(l={l:1},r.dictionary)){var u=r.dictionary.subarray(-32768),g=new Ht(u.length+a.length);g.set(u),g.set(a,u.length),a=g,l.w=u.length}return G1(a,r.level==null?6:r.level,r.mem==null?l.l?Math.ceil(Math.max(8,Math.min(13,Math.log(a.length)))*1.5):20:12+r.mem,s,o,l)},Ub=function(a,r){var s={};for(var o in a)s[o]=a[o];for(var o in r)s[o]=r[o];return s},An=function(a,r){return a[r]|a[r+1]<<8},an=function(a,r){return(a[r]|a[r+1]<<8|a[r+2]<<16|a[r+3]<<24)>>>0},qu=function(a,r){return an(a,r)+an(a,r+4)*4294967296},fa=function(a,r,s){for(;s;++r)a[r]=s,s>>>=8};function Z1(a,r){return K1(a,r||{},0,0)}function Q1(a,r){return H1(a,{i:2},r&&r.out,r&&r.dictionary)}var Bb=function(a,r,s,o){for(var l in a){var u=a[l],g=r+l,f=o;Array.isArray(u)&&(f=Ub(o,u[1]),u=u[0]),ArrayBuffer.isView(u)?s[g]=[u,f]:(s[g+="/"]=[new Ht(0),f],Bb(u,g,s,o))}},uy=typeof TextEncoder<"u"&&new TextEncoder,op=typeof TextDecoder<"u"&&new TextDecoder,J1=0;try{op.decode(Fb,{stream:!0}),J1=1}catch{}var eS=function(a){for(var r="",s=0;;){var o=a[s++],l=(o>127)+(o>223)+(o>239);if(s+l>a.length)return{s:r,r:Ni(a,s-1)};l?l==3?(o=((o&15)<<18|(a[s++]&63)<<12|(a[s++]&63)<<6|a[s++]&63)-65536,r+=String.fromCharCode(55296|o>>10,56320|o&1023)):l&1?r+=String.fromCharCode((o&31)<<6|a[s++]&63):r+=String.fromCharCode((o&15)<<12|(a[s++]&63)<<6|a[s++]&63):r+=String.fromCharCode(o)}};function ip(a,r){var s;if(uy)return uy.encode(a);for(var o=a.length,l=new Ht(a.length+(a.length>>1)),u=0,g=function(m){l[u++]=m},s=0;s<o;++s){if(u+5>l.length){var f=new Ht(u+8+(o-s<<1));f.set(l),l=f}var y=a.charCodeAt(s);y<128||r?g(y):y<2048?(g(192|y>>6),g(128|y&63)):y>55295&&y<57344?(y=65536+(y&1047552)|a.charCodeAt(++s)&1023,g(240|y>>18),g(128|y>>12&63),g(128|y>>6&63),g(128|y&63)):(g(224|y>>12),g(128|y>>6&63),g(128|y&63))}return Ni(l,0,u)}function tS(a,r){if(r){for(var s="",o=0;o<a.length;o+=16384)s+=String.fromCharCode.apply(null,a.subarray(o,o+16384));return s}else{if(op)return op.decode(a);var l=eS(a),u=l.s,s=l.r;return s.length&&Ta(8),u}}var aS=function(a,r){return r+30+An(a,r+26)+An(a,r+28)},nS=function(a,r,s){var o=An(a,r+28),l=An(a,r+30),u=tS(a.subarray(r+46,r+46+o),!(An(a,r+8)&2048)),g=r+46+o,f=rS(a,g,l,s,an(a,r+20),an(a,r+24),an(a,r+42)),y=f[0],m=f[1],p=f[2];return[An(a,r+10),y,m,u,g+l+An(a,r+32),p]},rS=function(a,r,s,o,l,u,g){var f=l==4294967295,y=u==4294967295,m=g==4294967295,p=r+s,b=f+y+m;if(o&&b){for(;r+4<p;r+=4+An(a,r+2))if(An(a,r)==1)return[f?qu(a,r+4+8*y):l,y?qu(a,r+4):u,m?qu(a,r+4+8*(y+f)):g,1];o<2&&Ta(13)}return[l,u,g,0]},lp=function(a){var r=0;if(a)for(var s in a){var o=a[s].length;o>65535&&Ta(9),r+=o+4}return r},py=function(a,r,s,o,l,u,g,f){var y=o.length,m=s.extra,p=f&&f.length,b=lp(m);fa(a,r,g!=null?33639248:67324752),r+=4,g!=null&&(a[r++]=20,a[r++]=s.os),a[r]=20,r+=2,a[r++]=s.flag<<1|(u<0&&8),a[r++]=l&&8,a[r++]=s.compression&255,a[r++]=s.compression>>8;var v=new Date(s.mtime==null?Date.now():s.mtime),x=v.getFullYear()-1980;if((x<0||x>119)&&Ta(10),fa(a,r,x<<25|v.getMonth()+1<<21|v.getDate()<<16|v.getHours()<<11|v.getMinutes()<<5|v.getSeconds()>>1),r+=4,u!=-1&&(fa(a,r,s.crc),fa(a,r+4,u<0?-u-2:u),fa(a,r+8,s.size)),fa(a,r+12,y),fa(a,r+14,b),r+=16,g!=null&&(fa(a,r,p),fa(a,r+6,s.attrs),fa(a,r+10,g),r+=14),a.set(o,r),r+=y,b)for(var N in m){var D=m[N],A=D.length;fa(a,r,+N),fa(a,r+2,A),a.set(D,r+4),r+=4+A}return p&&(a.set(f,r),r+=p),r},sS=function(a,r,s,o,l){fa(a,r,101010256),fa(a,r+8,s),fa(a,r+10,s),fa(a,r+12,o),fa(a,r+16,l)};function oS(a,r){r||(r={});var s={},o=[];Bb(a,"",s,r);var l=0,u=0;for(var g in s){var f=s[g],y=f[0],m=f[1],p=m.level==0?0:8,b=ip(g),v=b.length,x=m.comment,N=x&&ip(x),D=N&&N.length,A=lp(m.extra);v>65535&&Ta(11);var S=p?Z1(y,m):y,L=S.length,_=W1();_.p(y),o.push(Ub(m,{size:y.length,crc:_.d(),c:S,f:b,m:N,u:v!=g.length||N&&x.length!=D,o:l,compression:p})),l+=30+v+A+L,u+=76+2*(v+A)+(D||0)+L}for(var C=new Ht(u+22),w=l,O=u-l,R=0;R<o.length;++R){var b=o[R];py(C,b.o,b,b.f,b.u,b.c.length);var P=30+b.f.length+lp(b.extra);C.set(b.c,b.o+P),py(C,l,b,b.f,b.u,b.c.length,b.o,b.m),l+=16+P+(b.m?b.m.length:0)}return sS(C,l,o.length,O,w),C}function fy(a,r){for(var s={},o=a.length-22;an(a,o)!=101010256;--o)(!o||a.length-o>65558)&&Ta(13);var l=An(a,o+8);if(!l)return{};var u=an(a,o+16),g=an(a,o-20)==117853008;if(g){var f=an(a,o-12);g=an(a,f)==101075792,g&&(l=an(a,f+32),u=an(a,f+48))}for(var y=0;y<l;++y){var m=nS(a,u,g),p=m[0],b=m[1],v=m[2],x=m[3],N=m[4],D=m[5],A=aS(a,D);u=N,p?p==8?s[x]=Q1(a.subarray(A,A+b),{out:new Ht(v)}):Ta(14,"unknown compression type "+p):s[x]=Ni(a,A,A+b)}return s}const hy="DIAGNOSTIC_README.txt";function iS(a){return(a.split(/[\\/]/).pop()??"").replace(/[\u0000-\u001f<>:"/\\|?*]/g,"_").trim().replace(/^[. ]+|[. ]+$/g,"")||"diagnostic-file"}function lS(a,r){const s=a.lastIndexOf("."),o=s>0?a.slice(0,s):a,l=s>0?a.slice(s):"";let u=a,g=2;for(;r.has(u.toLocaleLowerCase());)u=`${o}-${g}${l}`,g+=1;return r.add(u.toLocaleLowerCase()),u}function cS(a){if(a.length===0)throw new Error("Add at least one diagnostic file before downloading the ZIP.");const r=Object.create(null),s=new Set([hy.toLocaleLowerCase()]),o=[];return a.forEach((l,u)=>{const g=lS(iS(l.name),s);r[g]=l.bytes,o.push(`${String(u+1).padStart(2,"0")}. ${g} | ${l.bytes.byteLength} bytes | ${l.mimeType||"type not provided"}`)}),r[hy]=ip(["P&ID Mapping Studio diagnostic bundle","Files were selected locally. The app did not upload them to a server.","","Files included:",...o,""].join(`
`)),oS(r,{level:1})}const dS=200*1024*1024;function gy(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(1)} MB`}function uS(){const[a,r]=M.useState([]),[s,o]=M.useState(!1),[l,u]=M.useState(""),[g,f]=M.useState(""),y=M.useMemo(()=>a.reduce((v,x)=>v+x.size,0),[a]),m=v=>{if(u(""),f(""),v.length===0)return;const x=new Set(a.map(A=>`${A.name}:${A.size}:${A.lastModified}`)),N=v.filter(A=>{const S=`${A.name}:${A.size}:${A.lastModified}`;return x.has(S)?!1:(x.add(S),!0)});if(y+N.reduce((A,S)=>A+S.size,0)>dS){f("The selected files exceed the 200 MB bundle limit. Remove some files and try again.");return}r(A=>[...A,...N]),N.length<v.length&&u(`${v.length-N.length} duplicate file(s) were skipped.`)},p=v=>{r(x=>x.filter(N=>N!==v)),u(""),f("")},b=async()=>{if(!(a.length===0||s)){o(!0),u(""),f("");try{const v=await Promise.all(a.map(async L=>({name:L.name,mimeType:L.type,bytes:new Uint8Array(await L.arrayBuffer())}))),x=cS(v),N=new Uint8Array(x.byteLength);N.set(x);const D=new Blob([N.buffer],{type:"application/zip"}),A=URL.createObjectURL(D),S=document.createElement("a");S.href=A,S.download="pid-mapping-diagnostics.zip",S.click(),window.setTimeout(()=>URL.revokeObjectURL(A),5e3),u(`ZIP ready with ${a.length} file(s). Attach pid-mapping-diagnostics.zip to the chat.`)}catch(v){f(v instanceof Error?v.message:"The diagnostic ZIP could not be created.")}finally{o(!1)}}};return c.jsxs("section",{className:"diagnostic-upload-panel","aria-labelledby":"diagnostic-upload-title","data-testid":"panel-diagnostic-upload",children:[c.jsxs("div",{className:"diagnostic-upload-heading",children:[c.jsxs("div",{className:"diagnostic-upload-copy",children:[c.jsx("span",{className:"diagnostic-upload-kicker",children:"LOCAL DIAGNOSTICS"}),c.jsx("h3",{id:"diagnostic-upload-title",children:"Share run files"}),c.jsx("p",{children:"Select AutoCAD logs, DXF/DWG, ZIP, JSON, scripts, screenshots, or other files."})]}),c.jsxs("div",{className:"diagnostic-upload-actions",children:[c.jsxs("label",{className:"btn primary diagnostic-upload-select","data-testid":"label-add-diagnostic-files",children:[c.jsx(Jr,{size:16})," Add files",c.jsx("input",{type:"file",multiple:!0,"aria-label":"Choose diagnostic files from this device","data-testid":"input-add-diagnostic-files",onChange:v=>{m(Array.from(v.currentTarget.files??[])),v.currentTarget.value=""}})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:a.length===0||s,"data-testid":"button-download-diagnostic-zip",children:[s?c.jsx(Oa,{size:16,className:"diagnostic-upload-spin"}):c.jsx(Lp,{size:16}),s?"Preparing ZIP…":"Download one ZIP"]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{r([]),u(""),f("")},disabled:a.length===0||s,"data-testid":"button-clear-diagnostic-files",children:[c.jsx(hi,{size:15})," Clear"]})]})]}),c.jsxs("div",{className:"diagnostic-upload-privacy","data-testid":"text-diagnostic-local-only",children:[c.jsx(Qn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay on this device."})," Nothing is sent to a server. Download one ZIP, then attach it to the chat to share it."]})]}),c.jsxs("div",{className:"diagnostic-upload-count","data-testid":"text-diagnostic-file-count",children:[a.length," file(s) selected · ",gy(y)," of 200 MB"]}),a.length>0&&c.jsx("ul",{className:"diagnostic-upload-list","aria-label":"Selected diagnostic files","data-testid":"list-diagnostic-files",children:a.map((v,x)=>c.jsxs("li",{"data-testid":`row-diagnostic-file-${x}`,children:[c.jsx(Zn,{size:15,"aria-hidden":"true"}),c.jsx("span",{className:"diagnostic-upload-file-name",title:v.name,children:v.name}),c.jsx("span",{className:"diagnostic-upload-file-size",children:gy(v.size)}),c.jsx("button",{type:"button",className:"diagnostic-upload-remove",onClick:()=>p(v),"aria-label":`Remove ${v.name}`,"data-testid":`button-remove-diagnostic-file-${x}`,children:c.jsx(Zu,{size:16})})]},`${v.name}:${v.size}:${v.lastModified}:${x}`))}),l&&c.jsx("p",{className:"diagnostic-upload-status",role:"status","data-testid":"status-diagnostic-upload",children:l}),g&&c.jsx("p",{className:"diagnostic-upload-error",role:"alert","data-testid":"error-diagnostic-upload",children:g})]})}const Mu="STANDARD",pS="STANDARD";function fS(a,r,s){const o=a(),l=a(),u=a(),g=a(),f=a(),y=a(),m=a(),p=a(),b=a();function v(w,O,R){const P=a();return w(0,"TABLE"),w(2,O),w(5,P),w(330,"0"),w(100,"AcDbSymbolTable"),w(70,R),P}function x(w,O,R,P,k=a()){return w(0,O),w(O==="DIMSTYLE"?105:5,k),w(330,R),w(100,"AcDbSymbolTableRecord"),w(100,P),k}function N(w){const O=v(w,"VPORT",1);x(w,"VPORT",O,"AcDbViewportTableRecord"),w(2,"*ACTIVE"),w(70,0),w(10,0),w(20,0),w(11,1),w(21,1),w(12,r/2),w(22,s/2),w(13,0),w(23,0),w(14,10),w(24,10),w(15,10),w(25,10),w(16,0),w(26,0),w(36,1),w(17,0),w(27,0),w(37,0),w(40,s*1.1),w(41,r/s),w(42,50),w(43,0),w(44,0),w(50,0),w(51,0),w(71,0),w(72,1e3),w(73,1),w(74,3),w(75,0),w(76,0),w(77,0),w(78,0),w(281,0),w(0,"ENDTAB")}function D(w,O){for(const te of["VIEW","UCS"])v(w,te,0),w(0,"ENDTAB");const R=v(w,"APPID",1);x(w,"APPID",R,"AcDbRegAppTableRecord"),w(2,"ACAD"),w(70,0),w(0,"ENDTAB");const P=v(w,"DIMSTYLE",1);w(100,"AcDbDimStyleTable"),w(71,0),x(w,"DIMSTYLE",P,"AcDbDimStyleTableRecord"),w(2,pS),w(70,0),w(40,1),w(140,2.5),w(340,O),w(0,"ENDTAB");const k=v(w,"BLOCK_RECORD",2);for(const[te,X,ae]of[["*Model_Space",y,p],["*Paper_Space",m,b]])x(w,"BLOCK_RECORD",k,"AcDbBlockTableRecord",X),w(2,te),w(340,ae),w(70,4),w(280,1),w(281,0);w(0,"ENDTAB")}function A(w){w(0,"SECTION"),w(2,"BLOCKS");for(const[O,R]of[["*Model_Space",y],["*Paper_Space",m]])w(0,"BLOCK"),w(5,a()),w(330,R),w(100,"AcDbEntity"),w(8,"0"),w(100,"AcDbBlockBegin"),w(2,O),w(70,0),w(10,0),w(20,0),w(30,0),w(3,O),w(1,""),w(0,"ENDBLK"),w(5,a()),w(330,R),w(100,"AcDbEntity"),w(8,"0"),w(100,"AcDbBlockEnd");w(0,"ENDSEC")}function S(w,O,R,P,k=!1){w(0,k?"ACDBDICTIONARYWDFLT":"DICTIONARY"),w(5,O),w(330,R),w(100,"AcDbDictionary"),w(280,0),w(281,1);for(const[te,X]of P)w(3,te),w(350,X);k&&(w(100,"AcDbDictionaryWithDefault"),w(340,f))}function L(w,O,R,P,k){w(0,"LAYOUT"),w(5,R),w(330,u),w(100,"AcDbPlotSettings"),w(1,""),w(4,""),w(6,"");for(const te of[40,41,42,43])w(te,0);w(44,r),w(45,s);for(const te of[46,47,48,49,140,141])w(te,0);w(142,1),w(143,1),w(70,k===0?1024:0),w(72,1),w(73,0),w(74,5),w(7,""),w(75,16),w(76,0),w(77,2),w(78,300),w(147,1),w(148,0),w(149,0),w(100,"AcDbLayout"),w(1,O),w(70,1),w(71,k),w(10,0),w(20,0),w(11,r),w(21,s),w(12,0),w(22,0),w(32,0),w(14,0),w(24,0),w(34,0),w(15,r),w(25,s),w(35,0),w(146,0),w(13,0),w(23,0),w(33,0),w(16,1),w(26,0),w(36,0),w(17,0),w(27,1),w(37,0),w(76,1),w(330,P)}function _(w){w(0,"SECTION"),w(2,"OBJECTS"),S(w,o,"0",[["ACAD_GROUP",l],["ACAD_LAYOUT",u],["ACAD_PLOTSTYLENAME",g]]),S(w,l,o,[]),S(w,u,o,[["Model",p],["Layout1",b]]),S(w,g,o,[["Normal",f]],!0),w(0,"ACDBPLACEHOLDER"),w(5,f),w(330,g),L(w,"Model",p,y,0),L(w,"Layout1",b,m,1),w(0,"ENDSEC")}function C(w){w(0,"SECTION"),w(2,"CLASSES");for(const[O,R,P]of[["LAYOUT","AcDbLayout",2],["ACDBDICTIONARYWDFLT","AcDbDictionaryWithDefault",1],["ACDBPLACEHOLDER","AcDbPlaceHolder",1]])w(0,"CLASS"),w(1,O),w(2,R),w(3,"ObjectDBX Classes"),w(90,0),w(91,P),w(280,0),w(281,0);w(0,"ENDSEC")}return{modelSpace:y,normalPlotStyle:f,beginTable:v,tableRecord:x,writeViewport:N,writeRemainingTables:D,writeBlocks:A,writeObjects:_,writeClasses:C}}function $u(a){if(!Number.isFinite(a))throw new Error("A PDF coordinate is not a finite number.");return Number(a.toFixed(7)).toString()}function hS(a){return a.replace(/[\r\n\t]/g," ").replace(/\\/g,"\\\\").replace(/[^\x20-\x7e]/g,r=>`\\U+${r.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")}`)}const my=/[<>\/\\":;?*|,=\u0000-\u001f\u007f]/;function zb(a){const r=a.replace(/^\uFEFF/,"").split(/\r?\n/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF export rejected: the output does not contain complete group-code/value pairs.");const s=[];for(let o=0;o<r.length;o+=2){const l=Number(r[o].trim());if(!/^\d+$/.test(r[o].trim())||!Number.isInteger(l)||r[o+1]===void 0)throw new Error(`DXF export rejected: malformed group-code/value pair at line ${o+1}.`);s.push({code:l,value:r[o+1]})}if(s.at(-1)?.code!==0||s.at(-1)?.value!=="EOF")throw new Error("DXF export rejected: the output is incomplete (missing EOF).");return s}function gS(a,r,s=0){return!a||a.trim()!==a||a.length>255?!1:r==="BLOCK_RECORD"&&/^\*[A-Za-z0-9_.$-]+$/.test(a)||r==="VPORT"&&a.toUpperCase()==="*ACTIVE"?!0:s&16&&a.includes("|")?a.split("|").every(o=>o.length>0&&!my.test(o)):!my.test(a)}function Yb(a,r,s,o=[]){const l=new Set;let u=!1,g=!1;for(let f=0;f<a.length;f+=1){const y=a[f];if(y.code===0&&y.value==="SECTION"&&a[f+1]?.code===2&&a[f+1]?.value==="TABLES"){u=!0,g=!0,f+=1;continue}if(!u)continue;if(y.code===0&&y.value==="ENDSEC"){u=!1;continue}if(y.code!==0||y.value!=="TABLE")continue;const m=a[f+1];if(m?.code!==2||!m.value.trim())throw new Error("DXF export rejected: a symbol table has a blank or missing table name.");const p=m.value.toUpperCase();if(l.has(p))throw new Error(`DXF export rejected: the ${p} symbol table is duplicated.`);l.add(p);const b=new Set;let v=f+1;for(;v<a.length&&a[v].code!==0;)v+=1;const x=new Set;for(let A=v;A<a.length&&!(a[A].code===0&&["ENDTAB","ENDSEC"].includes(a[A].value));A+=1)a[A].code===2&&a[A].value.trim()&&x.add(a[A].value.toUpperCase());let N=0,D=!1;for(;v<a.length&&a[v].code===0;){if(a[v].value==="ENDTAB"){D=!0,f=v;break}if(a[v].value==="ENDSEC")break;N+=1;let A=v+1;for(;A<a.length&&a[A].code!==0;)A+=1;if(a[v].value!==p)throw new Error(`DXF export rejected: ${p} contains an unexpected ${a[v].value} record at line ${v*2+2}.`);let S=-1,L=0,_="";for(let P=v+1;P<A;P+=1){if(a[P].code===2){if(S>=0)throw new Error(`DXF export rejected: ${p} record has multiple name fields at line ${P*2+1}.`);S=P}a[P].code===70&&(L=Number(a[P].value)),a[P].code===3&&(_=a[P].value)}const C=S>=0?a[S].value:"",w=!C.trim();let O=C;if(p==="STYLE"&&(L&1)!==0){const P=(S>=0?S:v)*2+2;if(S<0)throw new Error(`DXF export rejected: STYLE shape-file record is missing its group-2 name field at line ${P}.`);if(!_.trim())throw new Error(`DXF export rejected: STYLE shape-file record has no font file in group 3 at line ${P}.`);if(C!==""){if(!r)throw new Error(`DXF export rejected: STYLE shape-file record must have an empty name per DXF format at line ${P}.`);o.push({table:p,line:P,previousName:C,name:""}),a[S].value="",O=""}}else if(w||!gS(C,p,L)){const P=(S>=0?S:v)*2+2;if(!w||!["STYLE","DIMSTYLE"].includes(p))throw new Error(`DXF export rejected: ${p} table record ${N} has ${w?"a blank name":`an invalid name ${JSON.stringify(C)}`} at line ${P}. Correct the source value before exporting.`);if(!r)throw new Error(`DXF export rejected: ${p} table record ${N} still has ${w?"a blank name":"an invalid name"} after repair at line ${P}.`);const k=p==="DIMSTYLE"?"AUTOMATION_DIMSTYLE":"AUTOMATION_TEXTSTYLE";O=k;let te=2;for(;x.has(O.toUpperCase());)O=`${k}_${te++}`;if(x.add(O.toUpperCase()),o.push({table:p,line:P,previousName:C,name:O}),S>=0)a[S].value=O;else{let X=v+1;for(;X<A&&[5,105,330,100].includes(a[X].code);)X+=1;s.push({index:X,pair:{code:2,value:O}})}}if(O){const P=O.toUpperCase();if(b.has(P))throw new Error(`DXF export rejected: ${p} table record ${N} duplicates the name ${JSON.stringify(O)}.`);b.add(P)}v=A}if(!D)throw new Error(`DXF export rejected: the ${p} symbol table is missing ENDTAB.`)}if(!g)throw new Error("DXF export rejected: the output has no TABLES section to validate.");if(u)throw new Error("DXF export rejected: TABLES section is missing ENDSEC.");for(const f of["STYLE","DIMSTYLE"])if(!l.has(f))throw new Error(`DXF export rejected: the required ${f} symbol table is missing.`)}function mS(a){return Hb(a).dxf}function Hb(a){const r=zb(a),s=[],o=[];Yb(r,!0,s,o),s.sort((u,g)=>g.index-u.index);for(const u of s)r.splice(u.index,0,u.pair);const l=`${r.flatMap(({code:u,value:g})=>[String(u),g]).join(`\r
`)}\r
`;return Bp(l),{dxf:l,repairs:o}}function Bp(a){Yb(zb(a),!1,[])}function yS(a){const r=Number.parseInt(a.replace("#",""),16);return Number.isFinite(r)?r:0}function mD(a,r,s){if(!Number.isFinite(r)||!Number.isFinite(s)||r<=0||s<=0)throw new Error("A DXF page must have positive finite dimensions.");const o=[],l=(S,L)=>o.push(String(S),typeof L=="number"?$u(L):L);let u=256;const g=()=>(u++).toString(16).toUpperCase(),f=fS(g,r,s),y=new Map;for(const S of a)if(S.kind==="polyline"&&S.dash?.some(L=>L>0)){const L=S.dash.map(_=>$u(_)).join(",");y.has(L)||y.set(L,{name:`PDF_DASH_${y.size+1}`,pattern:S.dash})}const m=S=>S.trim()||"0",p=S=>{l(5,g()),l(330,f.modelSpace),l(100,"AcDbEntity"),l(67,0),l(410,"Model"),l(8,m(S.layer));const L=yS(S.color);(L>>16&255)<16&&(L>>8&255)<16&&(L&255)<16?l(62,7):(l(62,256),l(420,L)),S.opacity!==void 0&&S.opacity<1&&l(440,33554432|Math.round(Math.max(0,S.opacity)*255))};f.writeClasses(l),l(0,"SECTION"),l(2,"TABLES"),f.writeViewport(l);const b=f.beginTable(l,"LTYPE",3+y.size);for(const S of["BYBLOCK","BYLAYER","CONTINUOUS"])f.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,S),l(70,0),l(3,S==="CONTINUOUS"?"Solid line":""),l(72,65),l(73,0),l(40,0);for(const{name:S,pattern:L}of y.values()){const _=L.length%2?[...L,...L]:L;f.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,S),l(70,0),l(3,"Source PDF dash pattern"),l(72,65),l(73,_.length),l(40,_.reduce((C,w)=>C+Math.abs(w),0)),_.forEach((C,w)=>{l(49,w%2?-C:C),l(74,0)})}l(0,"ENDTAB");const v=[...new Set(["0",...a.map(S=>m(S.layer))])],x=f.beginTable(l,"LAYER",v.length);for(const S of v)f.tableRecord(l,"LAYER",x,"AcDbLayerTableRecord"),l(2,S),l(70,0),l(62,7),l(6,"CONTINUOUS"),l(290,1),l(370,-3),l(390,f.normalPlotStyle);l(0,"ENDTAB");const N=f.beginTable(l,"STYLE",1),D=f.tableRecord(l,"STYLE",N,"AcDbTextStyleTableRecord");l(2,Mu),l(70,0),l(40,0),l(41,1),l(50,0),l(71,0),l(42,2.5),l(3,"txt.shx"),l(4,""),l(0,"ENDTAB"),f.writeRemainingTables(l,D),l(0,"ENDSEC"),f.writeBlocks(l),l(0,"SECTION"),l(2,"ENTITIES");for(const S of a)if(S.kind==="polyline"){if(S.points.length<2)continue;l(0,"LWPOLYLINE"),p(S),l(370,S.lineWeight);const L=S.dash?.length?y.get(S.dash.map(_=>$u(_)).join(",")):void 0;L&&l(6,L.name),l(100,"AcDbPolyline"),l(90,S.points.length),l(70,(S.closed?1:0)|(L?128:0));for(const _ of S.points)l(10,_.x),l(20,_.y)}else if(S.kind==="hatch"){const L=S.loops.filter(_=>_.length>=3);if(!L.length)continue;l(0,"HATCH"),p(S),l(100,"AcDbHatch"),l(10,0),l(20,0),l(30,0),l(210,0),l(220,0),l(230,1),l(2,"SOLID"),l(70,1),l(71,0),l(91,L.length);for(const _ of L){l(92,2),l(72,0),l(73,1),l(93,_.length);for(const C of _)l(10,C.x),l(20,C.y);l(97,0)}l(75,0),l(76,1),l(98,0)}else{if(!S.text.trim()||!(S.height>0))continue;const L=S.text.match(/[\s\S]{1,180}/g)??[];let _=0;for(const C of L){const w=_/S.text.length,O=(_+C.length)/S.text.length,R={x:S.start.x+(S.end.x-S.start.x)*w,y:S.start.y+(S.end.y-S.start.y)*w},P={x:S.start.x+(S.end.x-S.start.x)*O,y:S.start.y+(S.end.y-S.start.y)*O};l(0,"TEXT"),p(S),l(100,"AcDbText"),l(10,R.x),l(20,R.y),l(30,0),l(40,S.height),l(1,hS(C)),l(50,S.rotation),l(7,Mu),l(72,Math.hypot(P.x-R.x,P.y-R.y)>1e-8?5:0),l(11,P.x),l(21,P.y),l(31,0),l(100,"AcDbText"),l(73,0),_+=C.length}}l(0,"ENDSEC"),f.writeObjects(l),l(0,"EOF");const A=o.splice(0);return l(0,"SECTION"),l(2,"HEADER"),l(9,"$ACADVER"),l(1,"AC1018"),l(9,"$DWGCODEPAGE"),l(3,"ANSI_1252"),l(9,"$HANDSEED"),l(5,u.toString(16).toUpperCase()),l(9,"$INSUNITS"),l(70,4),l(9,"$MEASUREMENT"),l(70,1),l(9,"$INSBASE"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMIN"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMAX"),l(10,r),l(20,s),l(30,0),l(9,"$LIMMIN"),l(10,0),l(20,0),l(9,"$LIMMAX"),l(10,r),l(20,s),l(9,"$TILEMODE"),l(70,1),l(9,"$CTAB"),l(1,"Model"),l(9,"$CLAYER"),l(8,"0"),l(9,"$CELTYPE"),l(6,"BYLAYER"),l(9,"$TEXTSTYLE"),l(7,Mu),l(9,"$CECOLOR"),l(62,256),l(9,"$LTSCALE"),l(40,1),l(9,"$CELTSCALE"),l(40,1),l(9,"$PSLTSCALE"),l(70,0),l(0,"ENDSEC"),mS(`${o.concat(A).join(`\r
`)}\r
`)}const bS=["LTYPE","LAYER","STYLE","APPID","DIMSTYLE","BLOCK_RECORD"];function vS(a){const r=a.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF structural repair rejected: incomplete group-code/value pairs.");const s=[];for(let o=0;o<r.length;o+=2){const l=Number(r[o].trim());if(!/^\d+$/.test(r[o].trim())||!Number.isInteger(l))throw new Error(`DXF structural repair rejected: invalid group code at line ${o+1}.`);s.push({code:l,value:r[o+1]})}return s}function ES(a){return`${a.flatMap(({code:r,value:s})=>[String(r),s]).join(`\r
`)}\r
`}function wS(a){const r=vS(a),s=new Map;let o="",l=-1;for(let D=0;D<r.length;D+=1){const A=r[D];if(A.code===0&&A.value.trim().toUpperCase()==="SECTION"&&r[D+1]?.code===2){o=r[++D].value.trim().toUpperCase();continue}if(A.code===0&&A.value.trim().toUpperCase()==="ENDSEC"){o==="TABLES"&&(l=D),o="";continue}if(o!=="TABLES"||A.code!==0||A.value.trim().toUpperCase()!=="TABLE")continue;const S=r[D+1]?.code===2?r[D+1].value.trim().toUpperCase():"";if(!S)throw new Error("DXF structural repair rejected: a TABLES record has no table name.");let L=D+1;for(;L<r.length&&!(r[L].code===0&&r[L].value.trim().toUpperCase()==="ENDTAB");)L+=1;if(L>=r.length)throw new Error(`DXF structural repair rejected: ${S} table is missing ENDTAB.`);s.set(S,{start:D,end:L,name:S})}if(l<0)throw new Error("DXF structural repair rejected: TABLES section is missing ENDSEC.");for(const D of bS)if(!s.has(D))throw new Error(`DXF structural repair rejected: required ${D} symbol table is missing; re-save the source as a modern ASCII DXF.`);const u=new Set(r.filter(D=>D.code===5||D.code===105).map(D=>D.value.trim().toUpperCase()).filter(D=>/^[0-9A-F]+$/.test(D)));let g=0n;for(const D of u){const A=BigInt(`0x${D}`);A>g&&(g=A)}const f=()=>{do g+=1n;while(u.has(g.toString(16).toUpperCase()));const D=g.toString(16).toUpperCase();return u.add(D),D},y=(...D)=>{const A=[];for(let S=0;S<D.length;S+=2)A.push({code:Number(D[S]),value:String(D[S+1])});return A},m=[],p=D=>y(0,"TABLE",2,D,5,f(),330,"0",100,"AcDbSymbolTable",70,0,0,"ENDTAB"),b=()=>{const D=f();return y(0,"TABLE",2,"VPORT",5,D,330,"0",100,"AcDbSymbolTable",70,1,0,"VPORT",5,f(),330,D,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0,0,"ENDTAB")},v=["VPORT","VIEW","UCS"].filter(D=>!s.has(D));for(const D of v){const A=D==="VPORT"?b():p(D);r.splice(l,0,...A),l+=A.length,m.push(D)}const x=s.get("VPORT");if(x){let D=!1;for(let A=x.start+1;A<x.end;A+=1){if(r[A].code!==0||r[A].value.trim().toUpperCase()!=="VPORT")continue;let S=A+1;for(;S<x.end&&r[S].code!==0;)S+=1;if(r.slice(A,S).some(L=>L.code===2&&L.value.trim().toUpperCase()==="*ACTIVE")){D=!0;break}A=S-1}if(!D){const A=r.findIndex((w,O)=>O>x.start&&O<x.end&&w.code===0),S=r.slice(x.start+1,A).find(w=>w.code===5)?.value.trim();if(!S)throw new Error("DXF structural repair rejected: VPORT table header has no handle.");const L=r.findIndex((w,O)=>O>x.start&&O<A&&w.code===70);L<0?r.splice(A,0,{code:70,value:"1"}):r[L].value=String(Number(r[L].value)+1);const _=y(0,"VPORT",5,f(),330,S,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0),C=r.findIndex((w,O)=>O>x.start&&w.code===0&&w.value.trim().toUpperCase()==="ENDTAB");r.splice(C,0,..._),m.push("VPORT:*ACTIVE")}}if(!m.length)return{dxf:a,addedTables:m};const N=ES(r);return Bp(N),{dxf:N,addedTables:m}}function Ws(a){if(a.byteLength>50*1024*1024)throw new Error("DXF repair limit is 50 MB per file. The original file was not changed.");let r="";const s=a[0]===239&&a[1]===187&&a[2]===191?3:0;for(let f=s;f<a.length;f+=16384)r+=String.fromCharCode(...a.subarray(f,f+16384));if(r.startsWith("AutoCAD Binary DXF"))throw new Error("Binary DXF cannot be repaired in this browser. Save an ASCII DXF copy in AutoCAD first.");const o=Hb(r),l=wS(o.dxf);if(!o.repairs.length&&!l.addedTables.length)return{content:a,repairs:[],addedTables:[]};const u=l.addedTables.length?l.dxf:o.dxf,g=new Uint8Array(u.length);for(let f=0;f<u.length;f+=1)g[f]=u.charCodeAt(f);return{content:g,repairs:o.repairs,addedTables:l.addedTables}}function xS(){const[a,r]=M.useState(""),[s,o]=M.useState(!1),[l,u]=M.useState(!1),g=M.useRef(null);async function f(y){o(!0),u(!1),r("");try{const m=Ws(new Uint8Array(await y.arrayBuffer())),p=new Blob([new Uint8Array(m.content)],{type:"application/dxf"}),b=URL.createObjectURL(p),v=document.createElement("a");v.href=b,v.download="REPAIRED_DRAWING.dxf",document.body.appendChild(v),v.click(),v.remove(),window.setTimeout(()=>URL.revokeObjectURL(b),1e4),r(`${m.repairs.length} symbol-table name(s) repaired; validated copy downloaded. Original file unchanged. AutoCAD open test still required.`)}catch(m){u(!0),r(m instanceof Error?m.message:"DXF repair failed. No download was created.")}finally{o(!1)}}return c.jsxs("div",{className:"dxf-repair-control",children:[c.jsx("button",{className:"btn",type:"button",disabled:s,onClick:()=>g.current?.click(),children:s?"Checking DXF…":"Repair an existing DXF"}),c.jsx("input",{ref:g,type:"file",accept:".dxf",disabled:s,"aria-label":"DXF to repair",hidden:!0,onChange:y=>{const m=y.target.files?.[0];y.target.value="",m&&f(m)}}),c.jsx("p",{children:"Local only · Repairs blank ordinary STYLE/DIMSTYLE names and preserves anonymous SHX shape-font STYLE records as DXF requires. Geometry, layers and SHX definitions stay unchanged. Maximum 50 MB."}),a&&c.jsx("p",{role:l?"alert":"status",children:a})]})}const Ci=["itemTag","description","equipmentName","equipmentType","nominalDiameter","fluidService","lineSpec","fromTag","toTag","notes"];function Vs(a){if(!Array.isArray(a)||a.length>64)throw new Error("Use at most 64 explicit attribute rules.");const r=new Set;return a.map(s=>{const o=s,l=typeof o?.attributeTag=="string"?o.attributeTag.trim().toUpperCase():"";if(!/^[A-Z][A-Z0-9_-]{0,63}$/.test(l)||r.has(l))throw new Error("Attribute tags must be unique, nonblank CAD field names (for example TAG_NO).");if(!Ci.includes(o.edeField)||!["tag","text","number"].includes(o.valueType)||!["inside","above","below"].includes(o.textZone))throw new Error(`Attribute rule ${l} has an unsupported field, value type or text zone.`);return r.add(l),{attributeTag:l,edeField:o.edeField,valueType:o.valueType,textZone:o.textZone}})}function SS(a){const r=new Map;for(const s of a){const o=s.itemTag.trim().toUpperCase();if(!o)continue;const l=r.get(o)??new Set;l.add(s.stableId.toUpperCase()),r.set(o,l)}return[...r].filter(([,s])=>s.size>1).map(([s])=>s).sort()}const Vb=a=>`pid-cad-attribute-rules:v1:${a||"legends-default"}`;function cp(a){const r=localStorage.getItem(Vb(a));return r?Vs(JSON.parse(r)):[]}function TS(a,r){const s=new Map(Vs(a).map(o=>[o.attributeTag,o]));for(const o of Vs(r))s.set(o.attributeTag,o);return Vs([...s.values()])}function AS(a,r){return TS(cp(`${a}:legends-default`),r?cp(`${a}:${r}`):[])}function DS({scope:a}){const[r,s]=M.useState(()=>{try{return cp(a)}catch{return[]}}),[o,l]=M.useState(""),[u,g]=M.useState(!1);function f(y,m){s(p=>p.map((b,v)=>v===y?{...b,...m}:b)),g(!0),l("Unsaved changes: save these rules before downloading a runner.")}return c.jsxs("details",{className:"runner-group-hint",children:[c.jsx("summary",{children:"Block attributes · Arial Narrow text"}),c.jsx("p",{children:"Final text keeps its imported height and position. AutoCAD must have Arial Narrow installed. Global Legends attribute rules are inherited by every project automatically. Rules saved here override the same attribute tags only for this scope. No proven value means review—not guessing."}),r.map((y,m)=>c.jsxs("fieldset",{style:{marginBlock:8},children:[c.jsxs("legend",{children:["Attribute rule ",m+1]}),c.jsxs("label",{children:["Block field ",c.jsx("input",{"aria-label":`Attribute tag ${m+1}`,value:y.attributeTag,onChange:p=>f(m,{attributeTag:p.target.value})})]}),c.jsxs("label",{children:["EDE value ",c.jsx("select",{value:y.edeField,onChange:p=>f(m,{edeField:p.target.value}),children:Ci.map(p=>c.jsx("option",{children:p},p))})]}),c.jsxs("label",{children:["Expected type ",c.jsxs("select",{value:y.valueType,onChange:p=>f(m,{valueType:p.target.value}),children:[c.jsx("option",{value:"tag",children:"Tag"}),c.jsx("option",{value:"text",children:"Text"}),c.jsx("option",{value:"number",children:"Number"})]})]}),c.jsxs("label",{children:["PDF text location ",c.jsxs("select",{value:y.textZone,onChange:p=>f(m,{textZone:p.target.value}),children:[c.jsx("option",{value:"inside",children:"Inside symbol"}),c.jsx("option",{value:"above",children:"Above symbol"}),c.jsx("option",{value:"below",children:"Below symbol"})]})]}),c.jsx("button",{className:"btn subtle danger",type:"button",onClick:()=>{s(p=>p.filter((b,v)=>v!==m)),g(!0),l("Save to apply the removal.")},children:"Remove rule"})]},m)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>{s(y=>[...y,{attributeTag:"TAG_NO",edeField:"itemTag",valueType:"tag",textZone:"above"}]),g(!0),l("Save rules before downloading a runner.")},disabled:r.length>=64,children:"Add attribute rule"})," ",c.jsx("button",{className:"btn primary",type:"button",disabled:!u,onClick:()=>{try{const y=Vs(r);localStorage.setItem(Vb(a),JSON.stringify(y)),s(y),g(!1),l("Rules saved locally for this mapping scope.")}catch(y){l(y instanceof Error?y.message:"Rules could not be saved.")}},children:"Save rules"}),o&&c.jsx("p",{role:"status",children:o})]})}const yy=128,ea=1e-9;function ii(a,r,s){return(r[0]-a[0])*(s[1]-a[1])-(r[1]-a[1])*(s[0]-a[0])}function Ml(a,r,s){return Math.abs(ii(a,r,s))<=ea&&s[0]>=Math.min(a[0],r[0])-ea&&s[0]<=Math.max(a[0],r[0])+ea&&s[1]>=Math.min(a[1],r[1])-ea&&s[1]<=Math.max(a[1],r[1])+ea}function NS(a,r,s,o){const l=ii(a,r,s),u=ii(a,r,o),g=ii(s,o,a),f=ii(s,o,r);return(l>ea&&u<-ea||l<-ea&&u>ea)&&(g>ea&&f<-ea||g<-ea&&f>ea)?!0:Math.abs(l)<=ea&&Ml(a,r,s)||Math.abs(u)<=ea&&Ml(a,r,o)||Math.abs(g)<=ea&&Ml(s,o,a)||Math.abs(f)<=ea&&Ml(s,o,r)}function CS(a){return a.reduce((r,s,o)=>{const l=a[(o+1)%a.length];return r+s[0]*l[1]-l[0]*s[1]},0)/2}function es(a){const r=a.split(";").map(o=>o.trim()).filter(Boolean);if(r.length<3||r.length>yy)throw new Error(`Enter 3-${yy} valve-body outline points.`);const s=r.map((o,l)=>{const u=o.split(",").map(f=>f.trim());if(u.length!==2||!u[0]||!u[1])throw new Error(`Mask point ${l+1} must be written as X,Y.`);const g=[Number(u[0]),Number(u[1])];if(!g.every(Number.isFinite))throw new Error(`Mask point ${l+1} must contain finite X,Y values.`);return g});if(s.some((o,l)=>{const u=s[(l+1)%s.length];return Math.hypot(o[0]-u[0],o[1]-u[1])<=ea}))throw new Error("The valve mask outline cannot contain duplicate adjacent points.");for(let o=0;o<s.length;o+=1){const l=(o+1)%s.length;for(let u=o+1;u<s.length;u+=1){const g=(u+1)%s.length;if(!(o===u||l===u||g===o)&&NS(s[o],s[l],s[u],s[g]))throw new Error("The valve mask outline must not cross or touch itself.")}}if(Math.abs(CS(s))<=ea)throw new Error("The valve mask outline must enclose an area.");return s}function RS(a){return`(${a.map(([r,s])=>`(${r} ${s})`).join(" ")})`}const dp=["PFD","P&ID","Data sheet"],Qr=["A0","A1","A2","A3","A4"],Gb="pid-mapping-studio:cad-standards:v1";function up(){return{schemaVersion:"1.0.0",companyDefaults:{PFD:"A1","P&ID":"A1","Data sheet":"A4"},companyItems:[],projects:{},reviewCandidates:[],auditTrail:[]}}function _S(){return up()}function ns(a,r,s){return{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:a,detail:r,...s?{projectName:s}:{}}}function pp(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&typeof r.name=="string"&&typeof r.summary=="string"&&typeof r.sourceFile=="string"&&["titleBlock","layer","textStyle","linetype","dimensionStyle","symbol","directionArrow","legend"].includes(String(r.category))&&["extracted-dwg","approved-source-drawing","synthetic-demo"].includes(String(r.sourceKind))&&["company","project"].includes(String(r.scope))&&["reviewed","needs-review"].includes(String(r.reviewStatus))&&typeof r.canPromote=="boolean"&&Array.isArray(r.fields)&&r.fields.every(s=>typeof s?.label=="string"&&typeof s?.value=="string")&&(r.sheetSize===void 0||Qr.includes(r.sheetSize))&&(r.scope!=="project"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function IS(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&pp(r.item)&&["company","project","unclassified"].includes(String(r.proposedScope))&&typeof r.sourceGroup=="string"&&["needs-review","approved","dismissed"].includes(String(r.status))&&(r.proposedScope==="company"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function Xb(a){if(!a||typeof a!="object")return!1;const r=a;return r.schemaVersion!=="1.0.0"||!r.companyDefaults||!r.companyItems||!Array.isArray(r.companyItems)||!r.projects||typeof r.projects!="object"||r.reviewCandidates!==void 0&&!Array.isArray(r.reviewCandidates)||!Array.isArray(r.auditTrail)||!dp.every(s=>Qr.includes(r.companyDefaults[s]))||!r.companyItems.every(s=>pp(s)&&s.scope==="company")||!(r.reviewCandidates??[]).every(s=>IS(s))||!r.auditTrail.every(s=>!!(s&&typeof s.id=="string"&&typeof s.at=="string"&&typeof s.action=="string"&&typeof s.detail=="string"))?!1:Object.entries(r.projects).every(([s,o])=>!!(s&&o&&typeof o.projectName=="string"&&o.defaults&&Object.entries(o.defaults).every(([l,u])=>dp.includes(l)&&Qr.includes(u))&&Array.isArray(o.items)&&o.items.every(l=>pp(l)&&l.scope==="project"&&l.projectId===s)))}const mi="cad-standards-changed";function yi(a){if(!Xb(a))throw new Error("CAD standards could not be saved because the library data is invalid.");try{window.localStorage.setItem(Gb,JSON.stringify(a))}catch{throw new Error("This browser could not save the CAD standards locally. Export or back up the library before leaving this page.")}typeof window.dispatchEvent=="function"&&window.dispatchEvent(new Event(mi))}function Sn(){let a;try{a=window.localStorage.getItem(Gb)}catch{throw new Error("This browser could not read its local CAD standards library.")}if(a===null){const y=up();return yi(y),y}let r;try{r=JSON.parse(a)}catch{throw new Error("The locally saved CAD standards library is not valid JSON. It was left unchanged.")}if(!Xb(r))throw new Error("The locally saved CAD standards library has invalid fields. It was left unchanged.");const s={...r,reviewCandidates:r.reviewCandidates??[]},o=up(),l=o.companyItems.filter(y=>!s.companyItems.some(m=>m.id===y.id)),u=new Set(s.reviewCandidates.map(y=>y.id)),g=o.reviewCandidates.filter(y=>!u.has(y.id));if(!l.length&&!g.length)return s;const f={...s,companyItems:[...s.companyItems,...l],reviewCandidates:[...s.reviewCandidates,...g],auditTrail:[...s.auditTrail,ns("Source mappings added to review queue",`${g.length} anonymized source mappings were added as pending review. Existing approvals, dismissals, and project settings were preserved.`)]};return yi(f),f}function Wb(a,r,s){const o=[...a.companyItems.map(g=>({item:g,scopePriority:0})),...r?(a.projects[r]?.items??[]).map(g=>({item:g,scopePriority:2})):[]],l=new Map;for(const{item:g,scopePriority:f}of o){if(!["layer","textStyle","linetype","dimensionStyle"].includes(g.category)||g.sourceKind!=="extracted-dwg"||g.reviewStatus!=="reviewed")continue;const y=N=>g.fields.find(D=>D.label===N)?.value?.trim()??"",m=y("CAD name"),p=y("Source discipline");if(!m)throw new Error(`Reviewed Legends Library ${g.category} standard "${g.name}" has no CAD name. Re-extract it before generating the runner.`);if(!["Shared",s].includes(p))continue;const b=y("Extracted details"),v=`${g.category}:${m.toUpperCase()}`,x=l.get(v)??[];x.push({item:g,priority:f+(p===s?1:0),cadName:m,sourceDiscipline:p,detail:b}),l.set(v,x)}const u=[];for(const g of l.values()){const f=Math.max(...g.map(p=>p.priority)),y=g.filter(p=>p.priority===f).sort((p,b)=>p.item.id.localeCompare(b.item.id));if(new Set(y.map(p=>p.detail)).size>1){const p=y[0];throw new Error(`Conflicting reviewed Legends Library ${p.item.category} standards named "${p.cadName}" for ${p.sourceDiscipline}. Resolve the duplicate before generating the runner.`)}u.push(y[0].item)}return u.sort((g,f)=>g.category.localeCompare(f.category)||g.name.localeCompare(f.name))}function LS(a,r,s){const o=Wb(a,r,s),l=(f,y)=>f.fields.find(m=>m.label===y)?.value?.trim()??"";if(!o.some(f=>f.category==="layer")||!o.some(f=>f.category==="textStyle"&&/(?:^|;)font=(?:[^;]*[\\/])?arial(?:n|narrow)(?:\.ttf)?(?:;|$)/i.test(l(f,"Extracted details"))))throw new Error("LEGENDS_LIBRARY_INCOMPLETE: reviewed CAD layers and Arial Narrow text styles are required. Import/review the private Legends Library once in this browser; company approvals then apply to every project automatically. No approximate runner was downloaded.");const u=new Set(o.map(f=>l(f,"Source drawing ID")).filter(Boolean)),g=a.reviewCandidates.filter(f=>f.status==="needs-review"&&["layer","textStyle","linetype","dimensionStyle"].includes(f.item.category)&&u.has(l(f.item,"Source drawing ID"))&&(f.proposedScope!=="project"||f.projectId===r)&&["Shared",s].includes(l(f.item,"Source discipline")));if(g.length)throw new Error(`LEGENDS_LIBRARY_INCOMPLETE: ${g.length} standard record(s) from the active Legends source still need review. Existing approvals were preserved; no partial standards runner was downloaded.`);return o}function PS(a,r){return a.some(s=>s.category==="titleBlock"&&s.reviewStatus==="reviewed"&&(s.sheetSize===r||s.fields.some(o=>o.label==="Sheet size"&&o.value===r)))}function kS(a,r,s){if(a.companyDefaults[r]===s)return a;if(!PS(a.companyItems,s))throw new Error(`Approve a company title-block mapping for ${s} before making it a company default.`);return{...a,companyDefaults:{...a.companyDefaults,[r]:s},auditTrail:[ns("Company sheet-size default changed",`${r} changed to ${s} after an approved company title-block mapping was available.`),...a.auditTrail]}}function Jl(a,r,s,o=[],l){const u=a.reviewCandidates.find(x=>x.id===r);if(!u||u.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");if(s==="company"&&u.proposedScope!=="company")throw new Error("Only a source classified for the Legends Library can be approved there.");if(s==="project"&&u.proposedScope==="company")throw new Error("Legends Library source mappings must be approved to the Legends Library.");if(l&&!(u.item.sourceKind==="extracted-dwg"&&["symbol","directionArrow"].includes(u.item.category)&&["symbol","directionArrow"].includes(l)))throw new Error("Only an extracted CAD block can be reviewed as a Direction Arrow or a standard symbol.");const g=l??u.item.category;let f=[...u.item.fields.filter(x=>!o.some(N=>N.label===x.label)),...o];if(g==="directionArrow"&&(f=f.filter(x=>!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(x.label))),g==="symbol"&&u.item.sourceKind==="extracted-dwg"&&(!f.some(x=>x.label==="Fallback category"&&x.value.trim())||!f.some(x=>x.label==="Block asset ID"&&x.value.trim())))throw new Error("A fallback category and locally extracted block file are required before approving this symbol.");if(g==="symbol"&&u.item.sourceKind==="extracted-dwg"&&f.find(x=>x.label==="Fallback category")?.value.trim().toLowerCase()==="valve"){const x=f.find(N=>N.label==="Wipeout mask boundary")?.value??"";try{es(x)}catch(N){throw new Error(`A reviewed valve-body mask outline is required before approving this valve. ${N instanceof Error?N.message:"Check the X,Y point list."}`)}}if(g==="symbol"&&u.item.sourceKind==="extracted-dwg"){const x=f.find(S=>S.label==="Target CAD layer")?.value.trim()??"",N=f.find(S=>S.label==="Source discipline")?.value.trim()??"";if(!(s==="company"?a.companyItems:[...u.projectId?a.projects[u.projectId]?.items??[]:[],...a.companyItems]).some(S=>{if(S.category!=="layer"||S.sourceKind!=="extracted-dwg"||S.reviewStatus!=="reviewed")return!1;const L=S.fields.find(w=>w.label==="CAD name")?.value.trim()??"",_=S.fields.find(w=>w.label==="Source discipline")?.value.trim()??"",C=N==="Shared"?_==="Shared":_==="Shared"||_===N;return x&&x.toUpperCase()!=="0"&&L.toLowerCase()===x.toLowerCase()&&C}))throw new Error("Approve a compatible non-zero CAD layer before approving this symbol. Layer 0 cannot be used for block placement.")}const y={...u.item,category:g,fields:f,scope:s,reviewStatus:"reviewed",canPromote:!1,...s==="project"?{projectId:u.projectId,projectName:u.projectName}:{projectId:void 0,projectName:void 0}};let m=a.companyItems,p=a.projects;if(s==="company")m=[...a.companyItems.filter(x=>x.id!==y.id),y];else{const x=u.projectId,N=u.projectName;if(!x||!N)throw new Error("The isolated project scope is not available for this mapping.");const D=a.projects[x]??{projectName:N,defaults:{},items:[]};p={...a.projects,[x]:{...D,projectName:N,items:[...D.items.filter(A=>A.id!==y.id),y]}}}const b=a.reviewCandidates.map(x=>x.id===r?{...x,status:"approved"}:x),v=s==="company"?"Legends Library":`isolated ${u.projectName} library`;return{...a,companyItems:m,projects:p,reviewCandidates:b,auditTrail:[ns("Source mapping approved",`${g} mapping ${u.item.name} was approved to ${v}.`,u.projectName),...a.auditTrail]}}const fp={EQUIP:{layerName:"EQUIP",fallbackCategory:"equipment"},F_EQUIP:{layerName:"f_Equip",fallbackCategory:"equipment"},F_INST:{layerName:"f_Inst",fallbackCategory:"instrument"},F_PIPE_INLINE:{layerName:"f_Pipe_Inline",fallbackCategory:"inline component"}};function hp(a,r){return a.item.fields.find(s=>s.label===r)?.value.trim()??""}function OS(a,r,s){return[...a.filter(o=>o.label!==r),{label:r,value:s}]}function jS(a){const o=hp(a,"Extracted details").match(/(?:^|;)sourceLayer=([^;]*)/i)?.[1]??hp(a,"Source insert layer(s)");return[...new Set(o.split(",").map(l=>l.trim().toUpperCase()).filter(Boolean))]}function Zr(a){return a.fields.find(r=>r.label==="CAD name")?.value.trim()??""}function qS(a){return a.fields.find(r=>r.label==="Source drawing ID")?.value.trim()??""}function by(a){return a.fields.find(r=>r.label==="Extracted details")?.value.trim()??""}function Kb(a){return a.fields.find(r=>r.label==="Source discipline")?.value.trim()??""}function MS(a,r){return a.category==="layer"&&a.sourceKind==="extracted-dwg"&&a.reviewStatus==="reviewed"&&a.scope==="company"&&Zr(a).toUpperCase()===r.toUpperCase()&&Kb(a).toUpperCase()==="SHARED"}function $S(a,r,s){const o=new Set(r),l={unsupportedLayer:0,ambiguousLayer:0,missingAsset:0,missingLayer:0,invalidCandidate:0},u=a.reviewCandidates.filter(v=>v.status==="needs-review"&&v.proposedScope==="company"&&o.has(v.sourceGroup)),g=new Map,f=[];for(const v of u){if(v.item.category!=="symbol"||v.item.sourceKind!=="extracted-dwg")continue;const x=jS(v);if(x.length!==1){l.ambiguousLayer+=x.length>1?1:0,l.unsupportedLayer+=x.length===0?1:0;continue}const N=x[0].toUpperCase(),D=fp[N];if(!D){l.unsupportedLayer+=1;continue}const A=hp(v,"Block asset ID");if(!A||!s.has(A)){l.missingAsset+=1;continue}const S=`${v.sourceGroup}|${N}`;g.set(S,{sourceId:v.sourceGroup,layerName:D.layerName}),f.push({candidateId:v.id,sourceId:v.sourceGroup,layerKey:S,fallbackCategory:D.fallbackCategory,blockAssetId:A})}let y=a;const m=new Map;let p=0;for(const[v,x]of g){const N=y.companyItems.find(S=>S.category==="layer"&&S.sourceKind==="extracted-dwg"&&S.reviewStatus==="reviewed"&&qS(S)===x.sourceId&&Zr(S).toUpperCase()===x.layerName.toUpperCase());if(N){const S={...N,fields:OS(N.fields,"Source discipline","Shared")};y={...y,companyItems:y.companyItems.map(L=>L.id===N.id?S:L),reviewCandidates:y.reviewCandidates.map(L=>L.id===N.id?{...L,item:S}:L)},Kb(N).toUpperCase()!=="SHARED"&&(p+=1),m.set(v,Zr(S));continue}const D=y.reviewCandidates.find(S=>S.status==="needs-review"&&S.proposedScope==="company"&&S.sourceGroup===x.sourceId&&S.item.category==="layer"&&S.item.sourceKind==="extracted-dwg"&&Zr(S.item).toUpperCase()===x.layerName.toUpperCase()),A=y.companyItems.find(S=>MS(S,x.layerName));if(A){const S=D?by(D.item):"",L=by(A);if(!D||S&&S===L){m.set(v,Zr(A));continue}l.invalidCandidate+=1;continue}if(!D){l.missingLayer+=1;continue}try{y=Jl(y,D.id,"company",[{label:"Source discipline",value:"Shared"}]);const S=y.companyItems.find(_=>_.id===D.item.id),L=Zr(S||D.item);m.set(v,L),p+=1}catch{l.invalidCandidate+=1}}let b=0;for(const v of f){const x=m.get(v.layerKey);if(!x){l.missingLayer+=1;continue}try{y=Jl(y,v.candidateId,"company",[{label:"Source discipline",value:"Shared"},{label:"Fallback category",value:v.fallbackCategory},{label:"Target CAD layer",value:x}]),b+=1}catch{l.invalidCandidate+=1}}return(p||b)&&(y={...y,auditTrail:[ns("Categorized CAD source batch approved",`${p} placement layer(s) and ${b} layer-matched symbol(s) approved for shared PFD/P&ID use.`),...a.auditTrail]}),{library:y,approvedLayers:p,approvedSymbols:b,skipped:l}}function FS(a,r,s){const o=a.companyItems.find(p=>p.id===r),l=Object.entries(a.projects).find(([,p])=>p.items.some(b=>b.id===r)),u=o??l?.[1].items.find(p=>p.id===r);if(!u||u.reviewStatus!=="reviewed")throw new Error("The selected approved CAD mapping is no longer available.");if(u.category!=="symbol"||u.sourceKind!=="extracted-dwg")throw new Error("Only reviewed extracted symbol mappings can be updated here.");const g=[...u.fields.filter(p=>!s.some(b=>b.label===p.label)),...s];if(g.find(p=>p.label==="Fallback category")?.value.trim().toLowerCase()==="valve")try{es(g.find(p=>p.label==="Wipeout mask boundary")?.value??"")}catch(p){throw new Error(`A reviewed valve-body mask outline is required. ${p instanceof Error?p.message:"Check the X,Y point list."}`)}const f={...u,fields:g},y=o?a.companyItems.map(p=>p.id===r?f:p):a.companyItems,m=l?{...a.projects,[l[0]]:{...l[1],items:l[1].items.map(p=>p.id===r?f:p)}}:a.projects;return{...a,companyItems:y,projects:m,auditTrail:[ns("Reviewed valve mask updated",`The approved symbol mapping ${u.name} received a reviewed Wipeout mask outline.`,u.projectName),...a.auditTrail]}}function US(a,r){const s=a.reviewCandidates.find(o=>o.id===r);if(!s||s.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");return{...a,reviewCandidates:a.reviewCandidates.map(o=>o.id===r?{...o,status:"dismissed"}:o),auditTrail:[ns("Source mapping dismissed",`${s.item.category} mapping ${s.item.name} was dismissed from the review queue.`,s.projectName),...a.auditTrail]}}function BS(a,r,s,o,l){if(!r.trim()||!s.trim())throw new Error("Choose a project before saving its title-block override.");const u=a.projects[r]??{defaults:{},items:[]},g={...u.defaults,[o]:l},f=[...a.projects[r]?.items??[],...a.companyItems].find(b=>b.category==="titleBlock"&&b.reviewStatus==="reviewed"&&(b.sheetSize===l||b.fields.some(v=>v.label==="Sheet size"&&v.value===l)));if(!f)throw new Error(`Approve a title-block mapping for ${l} before saving this project default.`);const y=`project-default-${o.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,m={...f,id:y,name:`${l} · ${o} project default`,summary:`Project-only choice for ${o}. The company default remains ${a.companyDefaults[o]}.`,scope:"project",projectId:r,projectName:s,canPromote:!1,fields:[...f.fields,{label:"Override purpose",value:o},{label:"Project choice",value:l},{label:"Company default",value:a.companyDefaults[o]}]};return{...a,projects:{...a.projects,[r]:{projectName:s,defaults:g,items:[...u.items.filter(b=>b.id!==y),m]}},auditTrail:[ns("Project title-block override saved",`${o} set to ${l}; company default remains ${a.companyDefaults[o]}. Other project libraries are unchanged.`,s),...a.auditTrail]}}const zS=(()=>{const a=new Uint32Array(256);for(let r=0;r<a.length;r+=1){let s=r;for(let o=0;o<8;o+=1)s=s&1?3988292384^s>>>1:s>>>1;a[r]=s>>>0}return a})();function YS(a){let r=4294967295;for(const s of a)r=zS[(r^s)&255]^r>>>8;return(r^4294967295)>>>0}function Fu(a,r){const s=new Uint8Array(a);return r(new DataView(s.buffer)),s}function Zb(a){if(a.length>65535)throw new Error("The local ZIP cannot contain more than 65,535 files.");const r=new TextEncoder,s=[],o=[];let l=0,u=0;for(const m of a){const p=r.encode(m.path),b=YS(m.content),v=Fu(30+p.length,N=>{N.setUint32(0,67324752,!0),N.setUint16(4,20,!0),N.setUint16(6,2048,!0),N.setUint16(8,0,!0),N.setUint16(10,0,!0),N.setUint16(12,33,!0),N.setUint32(14,b,!0),N.setUint32(18,m.content.length,!0),N.setUint32(22,m.content.length,!0),N.setUint16(26,p.length,!0),N.setUint16(28,0,!0),new Uint8Array(N.buffer,30,p.length).set(p)});s.push(v,m.content);const x=Fu(46+p.length,N=>{N.setUint32(0,33639248,!0),N.setUint16(4,20,!0),N.setUint16(6,20,!0),N.setUint16(8,2048,!0),N.setUint16(10,0,!0),N.setUint16(12,0,!0),N.setUint16(14,33,!0),N.setUint32(16,b,!0),N.setUint32(20,m.content.length,!0),N.setUint32(24,m.content.length,!0),N.setUint16(28,p.length,!0),N.setUint16(30,0,!0),N.setUint16(32,0,!0),N.setUint16(34,0,!0),N.setUint16(36,0,!0),N.setUint32(38,0,!0),N.setUint32(42,l,!0),new Uint8Array(N.buffer,46,p.length).set(p)});o.push(x),u+=x.length,l+=v.length+m.content.length}const g=Fu(22,m=>{m.setUint32(0,101010256,!0),m.setUint16(4,0,!0),m.setUint16(6,0,!0),m.setUint16(8,a.length,!0),m.setUint16(10,a.length,!0),m.setUint32(12,u,!0),m.setUint32(16,l,!0),m.setUint16(20,0,!0)}),y=[...s,...o,g].map(m=>{const p=new ArrayBuffer(m.byteLength);return new Uint8Array(p).set(m),p});return new Blob(y,{type:"application/zip"})}function HS(a,r,s){return a.filter(o=>(o.discipline===r||o.discipline==="Shared")&&(!s||o.category==="company-standard"||o.projectLabel===s))}const VS="pid-mapping-studio-local-cad-library",GS=3,Nn="source-drawings",Cn="extracted-block-assets",Lr="project-title-blocks",Qb=100*1024*1024;function XS(a,r){if(!/\.dwg$/i.test(a.trim()))throw new Error("Upload a standalone AutoCAD DWG title block. Save a DWT as DWG first.");if(r.byteLength>Qb)throw new Error("The project title block is larger than the 100 MB local upload limit.");const s=new TextDecoder().decode(r.subarray(0,6));if(!/^AC10\d{2}$/.test(s))throw new Error("This file does not have a recognized AutoCAD DWG header.")}function hn(){return typeof indexedDB>"u"?Promise.reject(new Error("This browser does not support local drawing-library storage.")):new Promise((a,r)=>{const s=indexedDB.open(VS,GS);s.onupgradeneeded=()=>{const o=s.result;o.objectStoreNames.contains(Nn)||o.createObjectStore(Nn,{keyPath:"id"}),o.objectStoreNames.contains(Cn)||o.createObjectStore(Cn,{keyPath:"id"}),o.objectStoreNames.contains(Lr)||o.createObjectStore(Lr,{keyPath:"projectId"})},s.onsuccess=()=>a(s.result),s.onerror=()=>r(s.error??new Error("The local drawing library could not be opened.")),s.onblocked=()=>r(new Error("The local drawing library is busy in another browser tab. Close the other tab and try again."))})}async function ec(){const a=await hn();try{return await new Promise((r,s)=>{const l=a.transaction(Nn,"readonly").objectStore(Nn).getAll();l.onsuccess=()=>{const u=l.result;r(u.map(({id:g,label:f,category:y,discipline:m,format:p,bytes:b,projectLabel:v,standardsMaster:x})=>({id:g,label:f,category:y,discipline:m??"Shared",format:p??"DWG",bytes:b,...v?{projectLabel:v}:{},...x?{standardsMaster:!0}:{}})).sort((g,f)=>g.label.localeCompare(f.label)))},l.onerror=()=>s(l.error??new Error("The local drawing library could not be read."))})}finally{a.close()}}async function Gs(a){const r=await hn();try{return await new Promise((s,o)=>{const l=r.transaction(Nn,"readonly").objectStore(Nn).get(a);l.onsuccess=()=>{const u=l.result;if(!u){o(new Error("An approved mapping refers to a source DWG that is no longer in the local library."));return}s(new Uint8Array(u.content))},l.onerror=()=>o(l.error??new Error("The local source drawing could not be read."))})}finally{r.close()}}async function gp(a,r=!1){if(!a.length)return;const s=await hn();try{await new Promise((o,l)=>{const u=s.transaction(Cn,"readwrite"),g=u.objectStore(Cn);for(const f of a){const y=g.get(f.id);y.onsuccess=()=>{const m=y.result;if(r&&m)return;const p={id:f.id,sourceId:f.sourceId,blockName:f.blockName,content:f.content.slice().buffer,format:f.format??m?.format??"DWG",...f.previewSvg===null?{}:f.previewSvg!==void 0?{previewSvg:f.previewSvg}:m?.previewSvg?{previewSvg:m.previewSvg}:{},...f.nearbyLabels!==void 0?{nearbyLabels:f.nearbyLabels}:m?.nearbyLabels?{nearbyLabels:m.nearbyLabels}:{},...f.labelMatchSkipped!==void 0?{labelMatchSkipped:f.labelMatchSkipped}:m?.labelMatchSkipped!==void 0?{labelMatchSkipped:m.labelMatchSkipped}:{},...f.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:f.labelMatchAmbiguous}:m?.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:m.labelMatchAmbiguous}:{},...f.sourcePlacements!==void 0?{sourcePlacements:f.sourcePlacements}:m?.sourcePlacements?{sourcePlacements:m.sourcePlacements}:{},...f.geometryDescriptor!==void 0?{geometryDescriptor:f.geometryDescriptor}:m?.geometryDescriptor?{geometryDescriptor:m.geometryDescriptor}:{}};g.put(p)}}u.oncomplete=()=>o(),u.onerror=()=>l(u.error??new Error("Extracted symbol blocks could not be saved locally.")),u.onabort=()=>l(u.error??new Error("Saving extracted symbol blocks was cancelled."))})}finally{s.close()}}async function WS(){const a=await hn();try{return await new Promise((r,s)=>{const o=a.transaction(Cn,"readonly").objectStore(Cn).getAllKeys();o.onsuccess=()=>r(new Set(o.result.map(String))),o.onerror=()=>s(o.error??new Error("Local block availability could not be checked."))})}finally{a.close()}}async function Jb(a){const r=await hn();try{return await new Promise((s,o)=>{const l=r.transaction(Cn,"readonly").objectStore(Cn).get(a);l.onsuccess=()=>{const u=l.result;if(!u){s({nearbyLabels:[],labelMatchSkipped:!1});return}s({format:u.format??"DWG",...u.previewSvg?{previewSvg:u.previewSvg}:{},nearbyLabels:u.nearbyLabels??[],labelMatchSkipped:u.labelMatchSkipped??!1,...u.labelMatchAmbiguous?{labelMatchAmbiguous:!0}:{},...u.sourcePlacements?{sourcePlacements:u.sourcePlacements}:{},...u.geometryDescriptor?{geometryDescriptor:u.geometryDescriptor}:{}})},l.onerror=()=>o(l.error??new Error("The local block preview could not be read."))})}finally{r.close()}}async function ev(a){const r=await hn();try{return await new Promise((s,o)=>{const l=r.transaction(Cn,"readonly").objectStore(Cn).get(a);l.onsuccess=()=>{const u=l.result;if(!u){o(new Error("An approved symbol block is missing from this browser’s local CAD library. Re-import its extraction package."));return}s(new Uint8Array(u.content))},l.onerror=()=>o(l.error??new Error("The approved symbol block could not be read locally."))})}finally{r.close()}}async function gc(a){if(!a.trim())return null;const r=await hn();try{return await new Promise((s,o)=>{const l=r.transaction(Lr,"readonly").objectStore(Lr).get(a);l.onsuccess=()=>s(l.result??null),l.onerror=()=>o(l.error??new Error("The project title block could not be read locally."))})}finally{r.close()}}function zp(a,r){if(a.workspaceType&&a.workspaceType!==r)throw new Error(`This title block belongs to ${a.workspaceType}, not ${r}. Upload a separate title block for each workspace.`);return{projectId:a.projectId,workspaceType:r,titleBlockId:a.titleBlockId??`legacy-${a.projectId}-${a.uploadedAt}`,titleBlockPath:a.titleBlockPath??"PROJECT_TITLE_BLOCK.dwg",xrefName:a.xrefName??"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:a.expectedSize??{widthMm:841,heightMm:594},version:a.version??1,bytes:a.bytes,uploadedAt:a.uploadedAt}}async function vy(a,r){const s=await gc(a);return s?zp(s,r):null}async function KS(a,r){const s=await gc(a);return s?{...zp(s,r),content:new Uint8Array(s.content)}:null}async function ZS(a,r,s,o){if(!a.trim())throw new Error("Select a project before uploading its title block.");if(!["PFD","P&ID"].includes(r))throw new Error("Choose either a PFD or P&ID workspace for this title block.");XS(s,o);const l=await gc(a);if(l?.workspaceType&&l.workspaceType!==r)throw new Error(`This folder already has a ${l.workspaceType} title block. Keep PFD and P&ID title blocks in separate workspaces.`);const u=new Date().toISOString(),g=(l?.version??(l?1:0))+1,f={projectId:a,workspaceType:r,titleBlockId:globalThis.crypto?.randomUUID?.()??`title-block-${Date.now()}`,titleBlockPath:"PROJECT_TITLE_BLOCK.dwg",xrefName:"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:{widthMm:841,heightMm:594},version:g,bytes:o.byteLength,uploadedAt:u,content:o.slice().buffer},y=await hn();try{await new Promise((m,p)=>{const b=y.transaction(Lr,"readwrite");b.objectStore(Lr).put(f),b.oncomplete=()=>m(),b.onerror=()=>p(b.error??new Error("The project title block could not be saved locally.")),b.onabort=()=>p(b.error??new Error("Saving the project title block was cancelled."))})}finally{y.close()}return{...zp(f,r)}}async function QS(a,r){if(!a.trim())return;const s=await gc(a);if(s?.workspaceType&&s.workspaceType!==r)throw new Error(`This title block belongs to ${s.workspaceType}; it was not removed from the ${r} workspace.`);const o=await hn();try{await new Promise((l,u)=>{const g=o.transaction(Lr,"readwrite");g.objectStore(Lr).delete(a),g.oncomplete=()=>l(),g.onerror=()=>u(g.error??new Error("The project title block could not be removed locally.")),g.onabort=()=>u(g.error??new Error("Removing the project title block was cancelled."))})}finally{o.close()}}async function JS(a){if(!a.length)return;const r=await hn();try{await new Promise((s,o)=>{const l=r.transaction(Nn,"readwrite"),u=l.objectStore(Nn);for(const g of a){const f=g.content.slice().buffer,{content:y,...m}=g;u.put({...m,content:f,createdAt:new Date().toISOString()})}l.oncomplete=()=>s(),l.onerror=()=>o(l.error??new Error("The local drawing library could not be saved.")),l.onabort=()=>o(l.error??new Error("The local drawing library save was cancelled."))})}finally{r.close()}}async function eT(a,r){const s=await hn();try{await new Promise((o,l)=>{const u=s.transaction(Nn,"readwrite"),g=u.objectStore(Nn),f=g.get(a);f.onsuccess=()=>{const y=f.result;if(!y){u.abort(),l(new Error("That source drawing is no longer in the local library."));return}g.put({...y,...r,standardsMaster:r.category==="company-standard"&&y.format==="DXF"?r.standardsMaster??y.standardsMaster:!1,projectLabel:r.projectLabel?.trim()||void 0})},f.onerror=()=>l(f.error??new Error("The source drawing could not be updated.")),u.oncomplete=()=>o(),u.onerror=()=>l(u.error??new Error("The source drawing update failed.")),u.onabort=()=>l(u.error??new Error("The source drawing update was cancelled."))})}finally{s.close()}}const tT=String.raw`
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
`;function Zo(a,r){let s=0,o=!1,l=!1,u=0;for(let g=0;g<=a.length;g+=1){const f=a[g];if(o?l?l=!1:f==="\\"?l=!0:f==='"'&&(o=!1):f==='"'?o=!0:f==="("?u+=1:f===")"&&(u-=1),g===a.length||f===";"&&!o&&u===0){const y=a.slice(s,g).trim(),m=y.indexOf("=");if(y.slice(0,m).trim().toLowerCase()===r.toLowerCase())return y.slice(m+1).trim();s=g+1}}}function Ey(a){if(/^nil$/i.test(a.trim()))return[];let r=0;const s=()=>{for(;/\s/.test(a[r]??"")&&r<a.length;)r+=1},o=y=>{if(s(),!a.startsWith(y,r))throw new Error("Invalid DXF property list.");r+=y.length},l=()=>{s();const y=a.slice(r).match(/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/i)?.[0];if(!y||!Number.isFinite(Number(y)))throw new Error("Invalid DXF numeric property.");return r+=y.length,Number(y)},u=()=>{o('"');let y="";for(;r<a.length;){const m=a[r++];if(m==='"')return y;if(m==="\\"){const p=a[r++];if(p!=="\\"&&p!=='"')throw new Error("Unsupported DXF string escape.");y+=p}else{if(m.charCodeAt(0)<32)throw new Error("Invalid control character in DXF property.");y+=m}}throw new Error("Unterminated DXF string.")};o("(");const g=[],f=new Set;for(;;){if(s(),a[r]===")"){r+=1;break}o("(");const y=l();if(!Number.isInteger(y)||f.has(y))throw new Error("Duplicate or invalid DXF property code.");f.add(y),o("."),s();const m=a[r]==='"'?u():l();if(o(")"),g.push([y,m]),g.length>200)throw new Error("Too many DXF properties.")}if(s(),r!==a.length)throw new Error("Unexpected code after DXF properties.");return g}function aT(a){return a>=40&&a<=99&&a!==70||a>=140&&a<=149||a>=170&&a<=179||a>=270&&a<=299||a>=370&&a<=389||a>=420&&a<=429||a>=440&&a<=459}function nT(a,r){const s=o=>{throw new Error(`Legends dimension style "${a}": ${o} Re-extract it with the current local extractor; partial dimension settings are not substituted.`)};Zo(r,"format")!=="DXF_PROPERTIES_V1"&&s("complete DXF properties are missing."),Zo(r,"recordComplete")!=="1"&&s("the complete native DXF table-record declaration is missing."),/^(?:\(\s*\)|nil)$/i.test(Zo(r,"unsupportedCodes")??"")||s("unsupported source properties were reported.");try{const o=Ey(Zo(r,"dxfData")??""),l=Ey(Zo(r,"resources")??"");return o.every(([u,g])=>aT(u)&&typeof g=="number"||[3,4].includes(u)&&typeof g=="string")||s("invalid property type."),l.every(([u,g])=>u>=340&&u<=347&&typeof g=="string"&&g.trim())||s("invalid named resource."),l.some(([u])=>u===340)||s("the source text-style reference is missing."),{properties:o,resources:l}}catch(o){if(o instanceof Error&&o.message.startsWith("Legends dimension style"))throw o;return s(o instanceof Error?o.message:"invalid DXF properties.")}}const rT=String.raw`
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
`;function sT(a){return`
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
`}const oT=tT+rT+String.raw`; Local CAD standards extractor. Run in Windows AutoCAD on each source drawing.
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
`;function iT(a,r){return`SOURCE_${String(a+1).padStart(3,"0")}.${r==="DXF"?"dxf":"dwg"}`}async function lT(a){if(a.length===0)throw new Error("There are no eligible local source drawings to package.");const r=[{path:"EXTRACT_CAD_STANDARDS.lsp",content:new TextEncoder().encode(oT)},{path:"README_LOCAL_EXTRACTION.txt",content:new TextEncoder().encode(`LOCAL CAD STANDARDS EXTRACTION

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
`)}],s=await Promise.all(a.map(o=>Gs(o.id)));return a.forEach((o,l)=>{const u=o.format==="DXF"?Ws(s[l]):null;r.push({path:iT(l,o.format),content:u?.content??s[l]})}),Zb(r)}function wy(a,r,s){let o=0,l=0;const u=new Map([...s].map(([f,y])=>[f.toUpperCase(),y])),g=a.reviewCandidates.map(f=>{if(f.sourceGroup!==r||f.status!=="needs-review"||f.proposedScope!=="company"||f.item.category!=="symbol"||f.item.sourceKind!=="extracted-dwg")return f;const y=f.item.fields,m=y.find(D=>D.label==="Block name")?.value.trim()??"";if(!m)return f;const p=u.get(m.toUpperCase())?.sourcePlacements??[],b=[...new Set(p.map(D=>D.layer.trim()).filter(Boolean))];b.length&&(l+=1);const x=(y.find(D=>D.label==="Extracted details")?.value??"").split(";").filter(D=>!/^\s*sourceLayer=/i.test(D)).join(";"),N=[...y.filter(D=>!["Extracted details","Source insert layer(s)","Source insert rotation(s)"].includes(D.label)),{label:"Extracted details",value:x+(b.length?`;sourceLayer=${b.join(", ")}`:"")},...b.length?[{label:"Source insert layer(s)",value:b.join(", ")},{label:"Source insert rotation(s)",value:p.map(D=>`${D.rotationDegrees}° on ${D.layer} (${D.count})`).join("; ")}]:[]];return JSON.stringify(y)===JSON.stringify(N)?f:(o+=1,{...f,item:{...f.item,fields:N}})});return{library:o?{...a,reviewCandidates:g}:a,updatedRecords:o,recoveredSymbols:l}}class cT{constructor(r){this._pointer=0,this._eof=!1,this._data=r}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return this._pointer++,r.value=xy(r.code,this._data[this._pointer].trim()),this._pointer++,r.code===0&&r.value==="EOF"&&(this._eof=!0),this.lastReadGroup=r,r}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return r.value=xy(r.code,this._data[this._pointer+1].trim()),r}rewind(r=1){this._pointer=this._pointer-r*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}function xy(a,r){return a<=9?r:a>=10&&a<=59?parseFloat(r):a>=60&&a<=99?parseInt(r):a>=100&&a<=109?r:a>=110&&a<=149?parseFloat(r):a>=160&&a<=179?parseInt(r):a>=210&&a<=239?parseFloat(r):a>=270&&a<=289?parseInt(r):a>=290&&a<=299?dT(r):a>=300&&a<=369?r:a>=370&&a<=389?parseInt(r):a>=390&&a<=399?r:a>=400&&a<=409?parseInt(r):a>=410&&a<=419?r:a>=420&&a<=429?parseInt(r):a>=430&&a<=439?r:a>=440&&a<=459?parseInt(r):a>=460&&a<=469?parseFloat(r):a>=470&&a<=481||a===999||a>=1e3&&a<=1009?r:a>=1010&&a<=1059?parseFloat(r):a>=1060&&a<=1071?parseInt(r):(console.log("WARNING: Group code does not have a defined type: %j",{code:a,value:r}),r)}function dT(a){if(a==="0")return!1;if(a==="1")return!0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")}const tv=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function uT(a){return tv[a]}function Qe(a){const r={};a.rewind();let s=a.next(),o=s.code;if(r.x=s.value,o+=10,s=a.next(),s.code!=o)throw new Error("Expected code for point value to be "+o+" but got "+s.code+".");return r.y=s.value,o+=10,s=a.next(),s.code!=o?(a.rewind(),r):(r.z=s.value,r)}function ga(a,r,s){switch(r.code){case 0:a.type=r.value;break;case 5:a.handle=r.value;break;case 6:a.lineType=r.value;break;case 8:a.layer=r.value;break;case 48:a.lineTypeScale=r.value;break;case 60:a.visible=r.value===0;break;case 62:a.colorIndex=r.value,a.color=uT(Math.abs(r.value));break;case 67:a.inPaperSpace=r.value!==0;break;case 100:break;case 101:for(;r.code!=0;)r=s.next();s.rewind();break;case 330:a.ownerHandle=r.value;break;case 347:a.materialObjectHandle=r.value;break;case 370:a.lineweight=r.value;break;case 420:a.color=r.value;break;case 1e3:a.extendedData=a.extendedData||{},a.extendedData.customStrings=a.extendedData.customStrings||[],a.extendedData.customStrings.push(r.value);break;case 1001:a.extendedData=a.extendedData||{},a.extendedData.applicationName=r.value;break;default:return!1}return!0}class pT{constructor(){this.ForEntityName="3DFACE"}parseEntity(r,s){const o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 70:o.shape=(s.value&1)===1,o.hasContinuousLinetypePattern=(s.value&128)===128;break;case 10:o.vertices=fT(r,s),s=r.lastReadGroup;break;default:ga(o,s,r);break}s=r.next()}return o}}function fT(a,r){var s=[],o=!1,l=!1,u=4;for(let f=0;f<=u;f++){for(var g={};!a.isEOF()&&!(r.code===0||l);){switch(r.code){case 10:case 11:case 12:case 13:if(o){l=!0;continue}g.x=r.value,o=!0;break;case 20:case 21:case 22:case 23:g.y=r.value;break;case 30:case 31:case 32:case 33:g.z=r.value;break;default:return s}r=a.next()}s.push(g),o=!1,l=!1}return a.rewind(),s}class hT{constructor(){this.ForEntityName="ARC"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=Qe(r);break;case 40:o.radius=s.value;break;case 50:o.startAngle=Math.PI/180*s.value;break;case 51:o.endAngle=Math.PI/180*s.value,o.angleLength=o.endAngle-o.startAngle;break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ga(o,s,r);break}s=r.next()}return o}}class gT{constructor(){this.ForEntityName="ATTDEF"}parseEntity(r,s){var o={type:s.value,scale:1,textStyle:"STANDARD"};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 1:o.text=s.value;break;case 2:o.tag=s.value;break;case 3:o.prompt=s.value;break;case 7:o.textStyle=s.value;break;case 10:o.startPoint=Qe(r);break;case 11:o.endPoint=Qe(r);break;case 39:o.thickness=s.value;break;case 40:o.textHeight=s.value;break;case 41:o.scale=s.value;break;case 50:o.rotation=s.value;break;case 51:o.obliqueAngle=s.value;break;case 70:o.invisible=!!(s.value&1),o.constant=!!(s.value&2),o.verificationRequired=!!(s.value&4),o.preset=!!(s.value&8);break;case 71:o.backwards=!!(s.value&2),o.mirrored=!!(s.value&4);break;case 72:o.horizontalJustification=s.value;break;case 73:o.fieldLength=s.value;break;case 74:o.verticalJustification=s.value;break;case 100:break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ga(o,s,r);break}s=r.next()}return o}}class mT{constructor(){this.ForEntityName="CIRCLE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=Qe(r);break;case 40:o.radius=s.value;break;case 50:o.startAngle=Math.PI/180*s.value;break;case 51:const l=Math.PI/180*s.value;l<o.startAngle?o.angleLength=l+2*Math.PI-o.startAngle:o.angleLength=l-o.startAngle,o.endAngle=l;break;default:ga(o,s,r);break}s=r.next()}return o}}class yT{constructor(){this.ForEntityName="DIMENSION"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 2:o.block=s.value;break;case 10:o.anchorPoint=Qe(r);break;case 11:o.middleOfText=Qe(r);break;case 12:o.insertionPoint=Qe(r);break;case 13:o.linearOrAngularPoint1=Qe(r);break;case 14:o.linearOrAngularPoint2=Qe(r);break;case 15:o.diameterOrRadiusPoint=Qe(r);break;case 16:o.arcPoint=Qe(r);break;case 70:o.dimensionType=s.value;break;case 71:o.attachmentPoint=s.value;break;case 42:o.actualMeasurement=s.value;break;case 1:o.text=s.value;break;case 50:o.angle=s.value;break;default:ga(o,s,r);break}s=r.next()}return o}}class bT{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=Qe(r);break;case 11:o.majorAxisEndPoint=Qe(r);break;case 40:o.axisRatio=s.value;break;case 41:o.startAngle=s.value;break;case 42:o.endAngle=s.value;break;case 2:o.name=s.value;break;default:ga(o,s,r);break}s=r.next()}return o}}class vT{constructor(){this.ForEntityName="INSERT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 2:o.name=s.value;break;case 41:o.xScale=s.value;break;case 42:o.yScale=s.value;break;case 43:o.zScale=s.value;break;case 10:o.position=Qe(r);break;case 50:o.rotation=s.value;break;case 70:o.columnCount=s.value;break;case 71:o.rowCount=s.value;break;case 44:o.columnSpacing=s.value;break;case 45:o.rowSpacing=s.value;break;case 210:o.extrusionDirection=Qe(r);break;default:ga(o,s,r);break}s=r.next()}return o}}class ET{constructor(){this.ForEntityName="LINE"}parseEntity(r,s){const o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.vertices.unshift(Qe(r));break;case 11:o.vertices.push(Qe(r));break;case 210:o.extrusionDirection=Qe(r);break;case 100:break;default:ga(o,s,r);break}s=r.next()}return o}}class wT{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(r,s){const o={type:s.value,vertices:[]};let l=0;for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 38:o.elevation=s.value;break;case 39:o.depth=s.value;break;case 70:o.shape=(s.value&1)===1,o.hasContinuousLinetypePattern=(s.value&128)===128;break;case 90:l=s.value;break;case 10:o.vertices=xT(l,r);break;case 43:s.value!==0&&(o.width=s.value);break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ga(o,s,r);break}s=r.next()}return o}}function xT(a,r){if(!a||a<=0)throw Error("n must be greater than 0 verticies");const s=[];let o=!1,l=!1,u=r.lastReadGroup;for(let g=0;g<a;g++){const f={};for(;!r.isEOF()&&!(u.code===0||l);){switch(u.code){case 10:if(o){l=!0;continue}f.x=u.value,o=!0;break;case 20:f.y=u.value;break;case 30:f.z=u.value;break;case 40:f.startWidth=u.value;break;case 41:f.endWidth=u.value;break;case 42:u.value!=0&&(f.bulge=u.value);break;default:return r.rewind(),o&&s.push(f),r.rewind(),s}u=r.next()}s.push(f),o=!1,l=!1}return r.rewind(),s}class ST{constructor(){this.ForEntityName="MTEXT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 3:o.text?o.text+=s.value:o.text=s.value;break;case 1:o.text?o.text+=s.value:o.text=s.value;break;case 10:o.position=Qe(r);break;case 11:o.directionVector=Qe(r);break;case 40:o.height=s.value;break;case 41:o.width=s.value;break;case 50:o.rotation=s.value;break;case 71:o.attachmentPoint=s.value;break;case 72:o.drawingDirection=s.value;break;default:ga(o,s,r);break}s=r.next()}return o}}class TT{constructor(){this.ForEntityName="POINT"}parseEntity(r,s){const l={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:l.position=Qe(r);break;case 39:l.thickness=s.value;break;case 210:l.extrusionDirection=Qe(r);break;case 100:break;default:ga(l,s,r);break}s=r.next()}return l}}class AT{constructor(){this.ForEntityName="VERTEX"}parseEntity(r,s){var o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.x=s.value;break;case 20:o.y=s.value;break;case 30:o.z=s.value;break;case 40:break;case 41:break;case 42:s.value!=0&&(o.bulge=s.value);break;case 70:o.curveFittingVertex=(s.value&1)!==0,o.curveFitTangent=(s.value&2)!==0,o.splineVertex=(s.value&8)!==0,o.splineControlPoint=(s.value&16)!==0,o.threeDPolylineVertex=(s.value&32)!==0,o.threeDPolylineMesh=(s.value&64)!==0,o.polyfaceMeshVertex=(s.value&128)!==0;break;case 50:break;case 71:o.faceA=s.value;break;case 72:o.faceB=s.value;break;case 73:o.faceC=s.value;break;case 74:o.faceD=s.value;break;default:ga(o,s,r);break}s=r.next()}return o}}class DT{constructor(){this.ForEntityName="POLYLINE"}parseEntity(r,s){var o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:break;case 20:break;case 30:break;case 39:o.thickness=s.value;break;case 40:break;case 41:break;case 70:o.shape=(s.value&1)!==0,o.includesCurveFitVertices=(s.value&2)!==0,o.includesSplineFitVertices=(s.value&4)!==0,o.is3dPolyline=(s.value&8)!==0,o.is3dPolygonMesh=(s.value&16)!==0,o.is3dPolygonMeshClosed=(s.value&32)!==0,o.isPolyfaceMesh=(s.value&64)!==0,o.hasContinuousLinetypePattern=(s.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:o.extrusionDirection=Qe(r);break;default:ga(o,s,r);break}s=r.next()}return o.vertices=NT(r,s),o}}function NT(a,r){const s=new AT,o=[];for(;!a.isEOF();)if(r.code===0){if(r.value==="VERTEX")o.push(s.parseEntity(a,r)),r=a.lastReadGroup;else if(r.value==="SEQEND"){CT(a,r);break}}return o}function CT(a,r){const s={type:r.value};for(r=a.next();!a.isEOF()&&r.code!=0;)ga(s,r,a),r=a.next();return s}class RT{constructor(){this.ForEntityName="SOLID"}parseEntity(r,s){const o={type:s.value,points:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.points[0]=Qe(r);break;case 11:o.points[1]=Qe(r);break;case 12:o.points[2]=Qe(r);break;case 13:o.points[3]=Qe(r);break;case 210:o.extrusionDirection=Qe(r);break;default:ga(o,s,r);break}s=r.next()}return o}}class _T{constructor(){this.ForEntityName="SPLINE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.controlPoints||(o.controlPoints=[]),o.controlPoints.push(Qe(r));break;case 11:o.fitPoints||(o.fitPoints=[]),o.fitPoints.push(Qe(r));break;case 12:o.startTangent=Qe(r);break;case 13:o.endTangent=Qe(r);break;case 40:o.knotValues||(o.knotValues=[]),o.knotValues.push(s.value);break;case 70:(s.value&1)!=0&&(o.closed=!0),(s.value&2)!=0&&(o.periodic=!0),(s.value&4)!=0&&(o.rational=!0),(s.value&8)!=0&&(o.planar=!0),(s.value&16)!=0&&(o.planar=!0,o.linear=!0);break;case 71:o.degreeOfSplineCurve=s.value;break;case 72:o.numberOfKnots=s.value;break;case 73:o.numberOfControlPoints=s.value;break;case 74:o.numberOfFitPoints=s.value;break;case 210:o.normalVector=Qe(r);break;default:ga(o,s,r);break}s=r.next()}return o}}class IT{constructor(){this.ForEntityName="TEXT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.startPoint=Qe(r);break;case 11:o.endPoint=Qe(r);break;case 40:o.textHeight=s.value;break;case 41:o.xScale=s.value;break;case 50:o.rotation=s.value;break;case 1:o.text=s.value;break;case 72:o.halign=s.value;break;case 73:o.valign=s.value;break;default:ga(o,s,r);break}s=r.next()}return o}}var Hl={exports:{}},LT=Hl.exports,Sy;function PT(){return Sy||(Sy=1,(function(a){(function(r,s){a.exports?a.exports=s():r.log=s()})(LT,function(){var r=function(){},s="undefined",o=typeof window!==s&&typeof window.navigator!==s&&/Trident\/|MSIE /.test(window.navigator.userAgent),l=["trace","debug","info","warn","error"],u={},g=null;function f(D,A){var S=D[A];if(typeof S.bind=="function")return S.bind(D);try{return Function.prototype.bind.call(S,D)}catch{return function(){return Function.prototype.apply.apply(S,[D,arguments])}}}function y(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function m(D){return D==="debug"&&(D="log"),typeof console===s?!1:D==="trace"&&o?y:console[D]!==void 0?f(console,D):console.log!==void 0?f(console,"log"):r}function p(){for(var D=this.getLevel(),A=0;A<l.length;A++){var S=l[A];this[S]=A<D?r:this.methodFactory(S,D,this.name)}if(this.log=this.debug,typeof console===s&&D<this.levels.SILENT)return"No console available for logging"}function b(D){return function(){typeof console!==s&&(p.call(this),this[D].apply(this,arguments))}}function v(D,A,S){return m(D)||b.apply(this,arguments)}function x(D,A){var S=this,L,_,C,w="loglevel";typeof D=="string"?w+=":"+D:typeof D=="symbol"&&(w=void 0);function O(X){var ae=(l[X]||"silent").toUpperCase();if(!(typeof window===s||!w)){try{window.localStorage[w]=ae;return}catch{}try{window.document.cookie=encodeURIComponent(w)+"="+ae+";"}catch{}}}function R(){var X;if(!(typeof window===s||!w)){try{X=window.localStorage[w]}catch{}if(typeof X===s)try{var ae=window.document.cookie,pe=encodeURIComponent(w),oe=ae.indexOf(pe+"=");oe!==-1&&(X=/^([^;]+)/.exec(ae.slice(oe+pe.length+1))[1])}catch{}return S.levels[X]===void 0&&(X=void 0),X}}function P(){if(!(typeof window===s||!w)){try{window.localStorage.removeItem(w)}catch{}try{window.document.cookie=encodeURIComponent(w)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function k(X){var ae=X;if(typeof ae=="string"&&S.levels[ae.toUpperCase()]!==void 0&&(ae=S.levels[ae.toUpperCase()]),typeof ae=="number"&&ae>=0&&ae<=S.levels.SILENT)return ae;throw new TypeError("log.setLevel() called with invalid level: "+X)}S.name=D,S.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},S.methodFactory=A||v,S.getLevel=function(){return C??_??L},S.setLevel=function(X,ae){return C=k(X),ae!==!1&&O(C),p.call(S)},S.setDefaultLevel=function(X){_=k(X),R()||S.setLevel(X,!1)},S.resetLevel=function(){C=null,P(),p.call(S)},S.enableAll=function(X){S.setLevel(S.levels.TRACE,X)},S.disableAll=function(X){S.setLevel(S.levels.SILENT,X)},S.rebuild=function(){if(g!==S&&(L=k(g.getLevel())),p.call(S),g===S)for(var X in u)u[X].rebuild()},L=k(g?g.getLevel():"WARN");var te=R();te!=null&&(C=k(te)),p.call(S)}g=new x,g.getLogger=function(A){if(typeof A!="symbol"&&typeof A!="string"||A==="")throw new TypeError("You must supply a name when creating a logger.");var S=u[A];return S||(S=u[A]=new x(A,g.methodFactory)),S};var N=typeof window!==s?window.log:void 0;return g.noConflict=function(){return typeof window!==s&&window.log===g&&(window.log=N),g},g.getLoggers=function(){return u},g.default=g,g})})(Hl)),Hl.exports}var kT=PT();const Ze=wi(kT);Ze.setLevel("error");function OT(a){a.registerEntityHandler(pT),a.registerEntityHandler(hT),a.registerEntityHandler(gT),a.registerEntityHandler(mT),a.registerEntityHandler(yT),a.registerEntityHandler(bT),a.registerEntityHandler(vT),a.registerEntityHandler(ET),a.registerEntityHandler(wT),a.registerEntityHandler(ST),a.registerEntityHandler(TT),a.registerEntityHandler(DT),a.registerEntityHandler(RT),a.registerEntityHandler(_T),a.registerEntityHandler(IT)}class av{constructor(){this._entityHandlers={},OT(this)}parse(r){return typeof r=="string"?this._parse(r):(console.error("Cannot read dxf source of type `"+typeof r),null)}registerEntityHandler(r){const s=new r;this._entityHandlers[s.ForEntityName]=s}parseSync(r){return this.parse(r)}parseStream(r){let s="";const o=this;return new Promise((l,u)=>{r.on("data",g=>{s+=g}),r.on("end",()=>{try{l(o._parse(s))}catch(g){u(g)}}),r.on("error",g=>{u(g)})})}_parse(r){const s={};let o=0;const l=r.split(/\r\n|\r|\n/g),u=new cT(l);if(!u.hasNext())throw Error("Empty file");const g=this;let f;function y(){for(f=u.next();!u.isEOF();)if(f.code===0&&f.value==="SECTION"){if(f=u.next(),f.code!==2){console.error("Unexpected code %s after 0:SECTION",nv(f)),f=u.next();continue}f.value==="HEADER"?(Ze.debug("> HEADER"),s.header=m(),Ze.debug("<")):f.value==="BLOCKS"?(Ze.debug("> BLOCKS"),s.blocks=p(),Ze.debug("<")):f.value==="ENTITIES"?(Ze.debug("> ENTITIES"),s.entities=_(!1),Ze.debug("<")):f.value==="TABLES"?(Ze.debug("> TABLES"),s.tables=v(),Ze.debug("<")):f.value==="EOF"?Ze.debug("EOF"):Ze.warn("Skipping section '%s'",f.value)}else f=u.next()}function m(){let O=null,R=null;const P={};for(f=u.next();;){if(wn(f,0,"ENDSEC")){O&&(P[O]=R);break}else f.code===9?(O&&(P[O]=R),O=f.value):f.code===10?R={x:f.value}:f.code===20?R.y=f.value:f.code===30?R.z=f.value:R=f.value;f=u.next()}return f=u.next(),P}function p(){const O={};for(f=u.next();f.value!=="EOF"&&!wn(f,0,"ENDSEC");)if(wn(f,0,"BLOCK")){Ze.debug("block {");const R=b();Ze.debug("}"),w(R),R.name?O[R.name]=R:Ze.error('block with handle "'+R.handle+'" is missing a name.')}else Kr(f),f=u.next();return O}function b(){const O={};for(f=u.next();f.value!=="EOF";){switch(f.code){case 1:O.xrefPath=f.value,f=u.next();break;case 2:O.name=f.value,f=u.next();break;case 3:O.name2=f.value,f=u.next();break;case 5:O.handle=f.value,f=u.next();break;case 8:O.layer=f.value,f=u.next();break;case 10:O.position=C(f),f=u.next();break;case 67:O.paperSpace=!!(f.value&&f.value==1),f=u.next();break;case 70:f.value!=0&&(O.type=f.value),f=u.next();break;case 100:f=u.next();break;case 330:O.ownerHandle=f.value,f=u.next();break;case 0:if(f.value=="ENDBLK")break;O.entities=_(!0);break;default:Kr(f),f=u.next()}if(wn(f,0,"ENDBLK")){f=u.next();break}}return O}function v(){const O={};for(f=u.next();f.value!=="EOF"&&!wn(f,0,"ENDSEC");)wn(f,0,"TABLE")?(f=u.next(),L[f.value]?(Ze.debug(f.value+" Table {"),O[L[f.value].tableName]=N(f),Ze.debug("}")):Ze.debug("Unhandled Table "+f.value)):f=u.next();return f=u.next(),O}const x="ENDTAB";function N(O){const R=L[O.value],P={};let k=0;for(f=u.next();!wn(f,0,x);)switch(f.code){case 5:P.handle=f.value,f=u.next();break;case 330:P.ownerHandle=f.value,f=u.next();break;case 100:f.value==="AcDbSymbolTable"||Kr(f),f=u.next();break;case 70:k=f.value,f=u.next();break;case 0:f.value===R.dxfSymbolName?P[R.tableRecordsProperty]=R.parseTableRecords():(Kr(f),f=u.next());break;default:Kr(f),f=u.next()}const te=P[R.tableRecordsProperty];if(te){let X=(()=>{if(te.constructor===Array)return te.length;if(typeof te=="object")return Object.keys(te).length})();k!==X&&Ze.warn("Parsed "+X+" "+R.dxfSymbolName+"'s but expected "+k)}return f=u.next(),P}function D(){const O=[];let R={};for(Ze.debug("ViewPort {"),f=u.next();!wn(f,0,x);)switch(f.code){case 2:R.name=f.value,f=u.next();break;case 10:R.lowerLeftCorner=C(f),f=u.next();break;case 11:R.upperRightCorner=C(f),f=u.next();break;case 12:R.center=C(f),f=u.next();break;case 13:R.snapBasePoint=C(f),f=u.next();break;case 14:R.snapSpacing=C(f),f=u.next();break;case 15:R.gridSpacing=C(f),f=u.next();break;case 16:R.viewDirectionFromTarget=C(f),f=u.next();break;case 17:R.viewTarget=C(f),f=u.next();break;case 42:R.lensLength=f.value,f=u.next();break;case 43:R.frontClippingPlane=f.value,f=u.next();break;case 44:R.backClippingPlane=f.value,f=u.next();break;case 45:R.viewHeight=f.value,f=u.next();break;case 50:R.snapRotationAngle=f.value,f=u.next();break;case 51:R.viewTwistAngle=f.value,f=u.next();break;case 79:R.orthographicType=f.value,f=u.next();break;case 110:R.ucsOrigin=C(f),f=u.next();break;case 111:R.ucsXAxis=C(f),f=u.next();break;case 112:R.ucsYAxis=C(f),f=u.next();break;case 110:R.ucsOrigin=C(f),f=u.next();break;case 281:R.renderMode=f.value,f=u.next();break;case 281:R.defaultLightingType=f.value,f=u.next();break;case 292:R.defaultLightingOn=f.value,f=u.next();break;case 330:R.ownerHandle=f.value,f=u.next();break;case 63:case 421:case 431:R.ambientColor=f.value,f=u.next();break;case 0:f.value==="VPORT"&&(Ze.debug("}"),O.push(R),Ze.debug("ViewPort {"),R={},f=u.next());break;default:Kr(f),f=u.next();break}return Ze.debug("}"),O.push(R),O}function A(){const O={};let R={},P=0,k;for(Ze.debug("LType {"),f=u.next();!wn(f,0,"ENDTAB");)switch(f.code){case 2:R.name=f.value,k=f.value,f=u.next();break;case 3:R.description=f.value,f=u.next();break;case 73:P=f.value,P>0&&(R.pattern=[]),f=u.next();break;case 40:R.patternLength=f.value,f=u.next();break;case 49:R.pattern.push(f.value),f=u.next();break;case 0:Ze.debug("}"),P>0&&P!==R.pattern.length&&Ze.warn("lengths do not match on LTYPE pattern"),O[k]=R,R={},Ze.debug("LType {"),f=u.next();break;default:f=u.next()}return Ze.debug("}"),O[k]=R,O}function S(){const O={};let R={},P;for(Ze.debug("Layer {"),f=u.next();!wn(f,0,"ENDTAB");)switch(f.code){case 2:R.name=f.value,P=f.value,f=u.next();break;case 62:R.visible=f.value>=0,R.colorIndex=Math.abs(f.value),R.color=jT(R.colorIndex),f=u.next();break;case 70:R.frozen=(f.value&1)!=0||(f.value&2)!=0,f=u.next();break;case 0:f.value==="LAYER"&&(Ze.debug("}"),O[P]=R,Ze.debug("Layer {"),R={},P=void 0,f=u.next());break;default:Kr(f),f=u.next();break}return Ze.debug("}"),O[P]=R,O}const L={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:D},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:A},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:S}};function _(O){const R=[],P=O?"ENDBLK":"ENDSEC";for(O||(f=u.next());;)if(f.code===0){if(f.value===P)break;const k=g._entityHandlers[f.value];if(k!=null){Ze.debug(f.value+" {");const te=k.parseEntity(u,f);f=u.lastReadGroup,Ze.debug("}"),w(te),R.push(te)}else{Ze.warn("Unhandled entity "+f.value),f=u.next();continue}}else f=u.next();return P=="ENDSEC"&&(f=u.next()),R}function C(O){const R={};let P=O.code;if(R.x=O.value,P+=10,O=u.next(),O.code!=P)throw new Error("Expected code for point value to be "+P+" but got "+O.code+".");return R.y=O.value,P+=10,O=u.next(),O.code!=P?(u.rewind(),R):(R.z=O.value,R)}function w(O){if(!O)throw new TypeError("entity cannot be undefined or null");O.handle||(O.handle=o++)}return y(),s}}function wn(a,r,s){return a.code===r&&a.value===s}function Kr(a){Ze.debug("unhandled group "+nv(a))}function nv(a){return a.code+":"+a.value}function jT(a){return tv[a]}const $l=360,Qo=210,$s=16,qT="#78d8b0",MT=[1,0,0,1,0,0],$T=new Set(["0","PIPE_PRI","F_PIPE_PRI","PIPE_PRIMARY","F_PIPE_PRIMARY","PRIMARY PIPING"]);function FT(a){const r=String(a??"").trim().toUpperCase().replace(/\s+/g," ");return!r||$T.has(r)}function Yp(a){return/\barrow\b/i.test(a.replace(/[_-]+/g," "))}function rv(a){return Yp(a)}function Ca(a){if(!a||typeof a!="object")return null;const r=a;return typeof r.x=="number"&&Number.isFinite(r.x)&&typeof r.y=="number"&&Number.isFinite(r.y)?{x:r.x,y:r.y}:null}function sv(a,r){return{x:a[0]*r.x+a[2]*r.y+a[4],y:a[1]*r.x+a[3]*r.y+a[5]}}function UT(a,r){return[a[0]*r[0]+a[2]*r[1],a[1]*r[0]+a[3]*r[1],a[0]*r[2]+a[2]*r[3],a[1]*r[2]+a[3]*r[3],a[0]*r[4]+a[2]*r[5]+a[4],a[1]*r[4]+a[3]*r[5]+a[5]]}function $t(a,r){return typeof a=="number"&&Number.isFinite(a)?a:r}function Jo(a){return Array.isArray(a)?a.map(Ca).filter(r=>r!==null):[]}function mp(a){const r=Ca(a);return r?{...r,z:$t(a.z,0)}:null}function BT(a,r,s){const o={},l=(f,y)=>{const m=mp(y);m&&(o[f]=m)},u=(f,y)=>{Array.isArray(y)&&(o[f]=y.flatMap(m=>{const p=mp(m);return p?[p]:[]}))},g=(f,y)=>{typeof y=="number"&&Number.isFinite(y)&&(o[f]=y)};if(a==="LINE")u("vertices",r.vertices);else if(a==="ARC"||a==="CIRCLE")l("center",r.center),g("radius",r.radius),a==="ARC"&&(g("startAngle",r.startAngle),g("endAngle",r.endAngle));else if(a==="LWPOLYLINE"||a==="POLYLINE")Array.isArray(r.vertices)&&(o.vertices=r.vertices.flatMap(f=>{if(!f||typeof f!="object")return[];const y=f;return typeof y.x!="number"||typeof y.y!="number"||!Number.isFinite(y.x)||!Number.isFinite(y.y)?[]:[{x:y.x,y:y.y,z:$t(y.z,0),bulge:$t(y.bulge,0)}]})),o.closed=r.shape===!0||(Number(r.shape)&1)===1;else if(a==="ELLIPSE")l("center",r.center),l("majorAxisEndPoint",r.majorAxisEndPoint),g("axisRatio",r.axisRatio),g("startAngle",r.startAngle),g("endAngle",r.endAngle);else if(a==="SPLINE"){u("fitPoints",r.fitPoints),u("controlPoints",r.controlPoints);for(const f of["degreeOfSplineCurve","closed","periodic","knots","weights"]){const y=r[f];(typeof y=="number"||typeof y=="boolean"||Array.isArray(y)&&y.every(m=>typeof m=="number"&&Number.isFinite(m)))&&(o[f]=y)}}else return null;return{type:a,transform:[...s],geometry:o}}function ov(a){return typeof a!="string"?"":a.replace(/\\P/gi," ").replace(/\\[A-Za-z][^;]*;/g,"").replace(/[{}]/g,"").replace(/\s+/g," ").trim()}function zT(a,r,s){return a.layer&&a.layer!=="0"?r.get(a.layer)??s:s}function YT(a){const r=Math.max(0,Math.min(16777215,Math.trunc(a))),s=`#${r.toString(16).padStart(6,"0")}`,o=r>>16&255,l=r>>8&255,u=r&255;return o+l+u<72?"#d5e1e8":s}function HT(a){const r=new Map;for(const s of Object.values(a.tables?.layer?.layers??{}))Number.isFinite(s.color)&&r.set(s.name,YT(s.color));return r}function VT(a,r,s,o){const l=o-s;if(!Number.isFinite(l))return[];const u=(l%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,g=Math.max(8,Math.min(96,Math.ceil(Math.abs(u)/(Math.PI/24))));return Array.from({length:g+1},(f,y)=>{const m=s+u*y/g;return{x:a.x+Math.cos(m)*r,y:a.y+Math.sin(m)*r}})}function GT(a,r){if(!Array.isArray(a))return[];const s=a.map(u=>{if(!u||typeof u!="object")return null;const g=u,f=Ca(g);return f?{...f,bulge:$t(g.bulge,0)}:null}).filter(u=>u!==null);if(s.length<2)return s.map(({x:u,y:g})=>({x:u,y:g}));const o=[{x:s[0].x,y:s[0].y}],l=r?s.length:s.length-1;for(let u=0;u<l;u+=1){const g=s[u],f=s[(u+1)%s.length],y=g.bulge,m=f.x-g.x,p=f.y-g.y,b=Math.hypot(m,p);if(Math.abs(y)<1e-5||b<1e-8){o.push({x:f.x,y:f.y});continue}const v=4*Math.atan(y),x=b*(1-y*y)/(4*y),N={x:(g.x+f.x)/2-p/b*x,y:(g.y+f.y)/2+m/b*x},D=Math.atan2(g.y-N.y,g.x-N.x),A=Math.max(4,Math.min(48,Math.ceil(Math.abs(v)/(Math.PI/16))));for(let S=1;S<=A;S+=1){const L=D+v*S/A;o.push({x:N.x+Math.cos(L)*Math.hypot(g.x-N.x,g.y-N.y),y:N.y+Math.sin(L)*Math.hypot(g.x-N.x,g.y-N.y)})}}return r&&o.length>1&&o.pop(),o}function XT(a,r){const s=Ca(a.position)??{x:0,y:0},o=Ca(r.position)??{x:0,y:0},l=$t(a.xScale,1),u=$t(a.yScale,1),g=$t(a.rotation,0)*Math.PI/180,f=Math.cos(g),y=Math.sin(g),m=f*l,p=y*l,b=-y*u,v=f*u;return[m,p,b,v,s.x-m*o.x-b*o.y,s.y-p*o.x-v*o.y]}function Dr(a,r,s,o,l){const u=r.map(g=>sv(o,g));u.length>=2&&a.paths.push({points:u,closed:s,color:l})}function iv(a,r,s,o,l,u,g=new Set,f=0){if(f>8){u.unsupported.add("nested block depth");return}for(const y of a){if(!y)continue;const m=y,p=String(m.type??"").toUpperCase();if(!p||m.visible===!1)continue;const b=zT(m,s,l);if(p==="INSERT"){const x=String(m.name??""),N=Object.entries(r).find(([L])=>L.toUpperCase()===x.toUpperCase())?.[1];if(!N||g.has(x.toUpperCase())){u.unsupported.add(p);continue}u.nestedInsertCount+=1;const D=UT(o,XT(m,N)),A=m.layer&&m.layer!=="0"?s.get(m.layer)??l:l,S=new Set(g);S.add(x.toUpperCase()),iv(N.entities??[],r,s,D,A,u,S,f+1);continue}const v=BT(p,m,o);if(v&&u.primitives.push(v),p==="LINE"){Dr(u,Jo(m.vertices),!1,o,b);continue}if(p==="CIRCLE"||p==="ARC"){const x=Ca(m.center),N=$t(m.radius,0);if(!x||N<=0)continue;const D=p==="ARC"?$t(m.startAngle,0):0,A=p==="ARC"?$t(m.endAngle,Math.PI*2):Math.PI*2;Dr(u,VT(x,N,D,A),p==="CIRCLE",o,b);continue}if(p==="ELLIPSE"){const x=Ca(m.center),N=Ca(m.majorAxisEndPoint),D=$t(m.axisRatio,1);if(!x||!N||D<=0)continue;const A=$t(m.startAngle,0),S=$t(m.endAngle,Math.PI*2)-A;if(!Number.isFinite(S))continue;const L=(S%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,_=A+L,C=Math.max(12,Math.min(96,Math.ceil((_-A)*24))),w=Array.from({length:C+1},(O,R)=>{const P=A+(_-A)*R/C;return{x:x.x+N.x*Math.cos(P)-N.y*D*Math.sin(P),y:x.y+N.y*Math.cos(P)+N.x*D*Math.sin(P)}});Dr(u,w,Math.abs(_-A-Math.PI*2)<.03,o,b);continue}if(p==="LWPOLYLINE"||p==="POLYLINE"){const x=m.shape===!0||(Number(m.shape)&1)===1,N=GT(m.vertices,x);Dr(u,N,x,o,b);continue}if(p==="SOLID"||p==="3DFACE"){const x=Jo(m.points??m.vertices);Dr(u,x,!0,o,b);continue}if(p==="SPLINE"){const x=Jo(m.fitPoints).length>=2?Jo(m.fitPoints):Jo(m.controlPoints);Dr(u,x,m.closed===!0,o,b),x.length&&u.unsupported.add("SPLINE approximation");continue}if(p==="TEXT"||p==="MTEXT"||p==="ATTDEF"){const x=ov(m.text),N=Ca(m.startPoint)??Ca(m.position);if(!N||!x)continue;const D=sv(o,N),A=Math.max(1,$t(m.textHeight,$t(m.height,2.5))),S=Math.max(Math.hypot(o[0],o[1]),Math.hypot(o[2],o[3]),.1);u.texts.push({point:D,text:x,height:A*S,rotation:$t(m.rotation,0)-Math.atan2(o[1],o[0])*180/Math.PI,color:b});continue}if(p==="POINT"){const x=Ca(m.position);x&&(Dr(u,[{x:x.x-.5,y:x.y},{x:x.x+.5,y:x.y}],!1,o,b),Dr(u,[{x:x.x,y:x.y-.5},{x:x.x,y:x.y+.5}],!1,o,b));continue}u.unsupported.add(p)}}function lv(a){const r=[...a.paths.flatMap(s=>s.points),...a.texts.map(s=>s.point)];return r.length?{minX:Math.min(...r.map(s=>s.x)),minY:Math.min(...r.map(s=>s.y)),maxX:Math.max(...r.map(s=>s.x)),maxY:Math.max(...r.map(s=>s.y))}:null}function WT(a){const r=lv(a);if(!r)return;const s=Math.max(r.maxX-r.minX,1e-6),o=Math.max(r.maxY-r.minY,1e-6),l=Math.min(($l-$s*2)/s,(Qo-$s*2)/o),u=p=>$s+(p-r.minX)*l+($l-$s*2-s*l)/2,g=p=>Qo-$s-(p-r.minY)*l-(Qo-$s*2-o*l)/2,f=p=>p.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;"),y=a.paths.map(p=>{const b=p.points.map((v,x)=>`${x?"L":"M"}${u(v.x).toFixed(2)} ${g(v.y).toFixed(2)}`);return p.closed&&b.push("Z"),`<path d="${b.join(" ")}" fill="none" stroke="${p.color}" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>`}).join(""),m=a.texts.map(p=>{const b=u(p.point.x),v=g(p.point.y),x=Math.max(4,Math.min(20,p.height*l));return`<text x="${b.toFixed(2)}" y="${v.toFixed(2)}" fill="${p.color}" font-family="Arial Narrow,sans-serif" font-size="${x.toFixed(2)}" transform="rotate(${-p.rotation.toFixed(2)} ${b.toFixed(2)} ${v.toFixed(2)})">${f(p.text)}</text>`}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${$l} ${Qo}" role="img"><rect width="${$l}" height="${Qo}" fill="#0d1722"/>${y}${m}</svg>`}function KT(a,r,s){const o=Ca(s.position)??{x:0,y:0},l=Ca(r.position)??{x:0,y:0},u=$t(s.xScale,1),g=$t(s.yScale,1),f=$t(s.rotation,0)*Math.PI/180,y=Math.cos(f),m=Math.sin(f),p=[{x:a.minX,y:a.minY},{x:a.minX,y:a.maxY},{x:a.maxX,y:a.minY},{x:a.maxX,y:a.maxY}].map(b=>{const v=(b.x-l.x)*u,x=(b.y-l.y)*g;return{x:o.x+y*v-m*x,y:o.y+m*v+y*x}});return{minX:Math.min(...p.map(b=>b.x)),minY:Math.min(...p.map(b=>b.y)),maxX:Math.max(...p.map(b=>b.x)),maxY:Math.max(...p.map(b=>b.y))}}function ZT(a){return Ca(a.startPoint)??Ca(a.position)}function QT(a){return ov(a.text)}function cv(a,r){return r.map(s=>s).filter(s=>s.type?.toUpperCase()==="INSERT"&&String(s.name??"").toUpperCase()===a.toUpperCase())}function JT(a){const r=new Map;for(const s of a){const o=String(s.layer??"0").trim()||"0",l=$t(s.rotation,0),u=Math.round((l%360+360)%360),g=`${o.toUpperCase()}|${u}`,f=r.get(g);f?f.count+=1:r.set(g,{layer:o,rotationDegrees:u,count:1})}return[...r.values()].sort((s,o)=>s.layer.localeCompare(o.layer)||s.rotationDegrees-o.rotationDegrees)}function eA(a,r,s,o){const l=cv(a,o),u=l.filter(b=>!FT(b.layer)),g=l.length>0&&u.length===0;if(rv(a))return{labels:[],skippedContextOnly:g};const f=o.map(b=>b).filter(b=>["TEXT","MTEXT","ATTRIB"].includes(String(b.type??"").toUpperCase())).map(b=>({text:QT(b),point:ZT(b),height:Math.max(1,$t(b.textHeight,$t(b.height,2.5)))})).filter(b=>!!(b.text&&b.point)&&!Yp(b.text)),y=[];for(const b of u){const v=KT(s,r,b),x=(v.minY+v.maxY)/2,N=Math.max(v.maxX-v.minX,1),D=Math.max(v.maxY-v.minY,1),S=f.map(P=>{const k=P.point.x-v.maxX,te=Math.abs(P.point.y-x),X=Math.max(N*8,P.height*40,30),ae=Math.max(D*1.1,P.height*7);return{...P,dx:k,dy:te,score:Math.max(0,k)+te*1.75,maxGap:X,maxVertical:ae}}).filter(P=>P.dx>=-P.height*.5&&P.dx<=P.maxGap&&P.dy<=P.maxVertical).filter(P=>P.dx>=0).sort((P,k)=>P.score-k.score),L=S.length?S:f.map(P=>({...P,dx:P.point.x-v.maxX,dy:Math.abs(P.point.y-x),score:Math.hypot(P.point.x-(v.minX+v.maxX)/2,P.point.y-x),maxGap:Math.max(N*10,P.height*50,40),maxVertical:Math.max(D*2,P.height*10)})).filter(P=>P.score<=Math.max(N*8,D*10,P.height*60)).sort((P,k)=>P.score-k.score),_=L[0];if(!_)continue;const C=Math.max(_.height*2,N*.04,.5),w=Math.max(_.height*7,D*.8),O=L.filter(P=>Math.abs(P.point.x-_.point.x)<=C&&Math.abs(P.point.y-_.point.y)<=w).sort((P,k)=>k.point.y-P.point.y).slice(0,8),R=[...new Set(O.map(P=>P.text))].join(" · ");R&&y.push({text:R,score:_.score})}const m=new Map;for(const b of y){const v=b.text.toLowerCase().replace(/\s+/g," ").trim(),x=m.get(v);(x===void 0||b.score<x.score)&&m.set(v,b)}const p=u.length>1&&m.size>1;return{labels:p?[]:[...m.values()].sort((b,v)=>b.score-v.score).slice(0,4).map(b=>b.text),skippedContextOnly:g,...p?{ambiguous:!0}:{}}}function tc(a,r){let s;try{s=new av().parseSync(a)}catch(g){const f=g instanceof Error?g.message:"Unknown DXF parser error";throw new Error(`The overview DXF could not be read: ${f}`)}if(!s?.blocks||!Array.isArray(s.entities))throw new Error("The overview DXF does not contain readable block and model-space data.");const o=HT(s),l=new Map(Object.entries(s.blocks).map(([g,f])=>[g.toUpperCase(),f])),u=new Map;for(const g of new Set(r)){const f=l.get(g.toUpperCase());if(!f||g.startsWith("*"))continue;const y={paths:[],texts:[],unsupported:new Set,primitives:[],nestedInsertCount:0};iv(f.entities??[],s.blocks,o,MT,qT,y,new Set([f.name.toUpperCase()]));const m=lv(y),p=y.paths.flatMap(C=>C.points),b=p.length?{minX:Math.min(...p.map(C=>C.x)),minY:Math.min(...p.map(C=>C.y)),maxX:Math.max(...p.map(C=>C.x)),maxY:Math.max(...p.map(C=>C.y))}:null,v=b?b.maxX-b.minX:null,x=b?b.maxY-b.minY:null,N=y.primitives.reduce((C,w)=>(C[w.type]=(C[w.type]??0)+1,C),{}),D=s.header?.$INSUNITS,A={schemaVersion:1,blockName:g,unitsCode:typeof D=="number"&&Number.isInteger(D)?D:null,basePoint:mp(f.position)??{x:0,y:0,z:0},bounds:b,width:v,height:x,aspectRatio:v!==null&&x!==null&&x>0?v/x:null,primitiveCounts:N,primitives:y.primitives,nestedInsertCount:y.nestedInsertCount,unsupportedEntities:[...y.unsupported].sort(),transformPolicy:{allowedRotationsDegrees:null,mirrorAllowed:null,uniformScalingAllowed:null,nonUniformScalingAllowed:null,status:"UNSPECIFIED_REQUIRES_REVIEW"}},S=WT(y),L=JT(cv(g,s.entities)),_=m?eA(g,f,m,s.entities):{labels:[],skippedContextOnly:!1};u.set(g,{...S?{previewSvg:S}:{},geometryDescriptor:A,nearbyLabels:_.labels,..._.skippedContextOnly?{labelMatchSkipped:!0}:{},..._.ambiguous?{labelMatchAmbiguous:!0}:{},...L.length?{sourcePlacements:L}:{}})}return u}const ht=(a,r)=>a.find(s=>s.code===r)?.value.trim()??"",pa=a=>ht(a,0).toUpperCase(),Fs=a=>ht(a,pa(a)==="DIMSTYLE"?105:5).toUpperCase(),Gn=(...a)=>{const r=[];for(let s=0;s<a.length;s+=2)r.push({code:Number(a[s]),value:String(a[s+1])});return r},Ty=a=>a>=330&&a<=369||a>=390&&a<=399||a===480||a===481||a===1005,Uu=a=>["DICTIONARY","ACDBDICTIONARYWDFLT"].includes(pa(a)),tA=new Set(["BLOCK","ENDBLK","LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE","VERTEX","SEQEND","SPLINE","POINT","SOLID","TRACE","3DFACE","TEXT","MTEXT","ATTDEF","ATTRIB","INSERT","HATCH","DIMENSION","LEADER","TOLERANCE"]),aA=["VPORT","LTYPE","LAYER","STYLE","VIEW","UCS","APPID","DIMSTYLE","BLOCK_RECORD"];function Xn(a){const r=[];for(const s of a){if(s.code===0&&r.push([]),!r.length)throw new Error("Invalid DXF record boundary.");r[r.length-1].push(s)}return r}function nA(a){let r=0;return a.filter(s=>s.code===102&&s.value.trim()==="{BLKREFS"?(r=1,!1):r?(s.code===102&&s.value.trim().startsWith("{")&&r++,s.code===102&&s.value.trim()==="}"&&r--,!1):!0)}class Hp{sections=new Map;tables=new Map;blocks=new Map;modelRecords;text;objects;recordsByHandle=new Map;blockForRecord=new Map;tableForRecord=new Map;tableHandles=new Set;maxHandle=0;constructor(r){const s=Ws(r);let o="";for(let p=0;p<s.content.length;p+=16384)o+=String.fromCharCode(...s.content.subarray(p,p+16384));this.text=o;const l=o.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;l.length&&l.at(-1)==="";)l.pop();if(l.length%2)throw new Error("DXF has an incomplete group-code/value pair.");const u=[];for(let p=0;p<l.length;p+=2){const b=Number(l[p].trim());if(!Number.isInteger(b))throw new Error("DXF has an invalid group code.");u.push({code:b,value:l[p+1]})}let g="";for(let p=0;p<u.length;p++){const b=u[p];if(b.code===0&&b.value.trim()==="SECTION"){if(g||u[p+1]?.code!==2)throw new Error("Invalid DXF section.");if(g=u[++p].value.trim().toUpperCase(),this.sections.has(g))throw new Error("Duplicate DXF section.");this.sections.set(g,[])}else b.code===0&&b.value.trim()==="ENDSEC"?g="":g&&this.sections.get(g).push(b)}if(g||!this.sections.has("BLOCKS")||!this.sections.has("ENTITIES"))throw new Error("A complete ASCII source DXF with BLOCKS and ENTITIES is required.");const f=Xn(this.sections.get("TABLES")??[]);let y;for(const p of f)if(pa(p)==="TABLE")y={name:ht(p,2).toUpperCase(),header:p,records:[]},this.tables.set(y.name,y),this.tableHandles.add(Fs(p));else if(pa(p)==="ENDTAB")y=void 0;else if(y){const b=pa(p)==="BLOCK_RECORD"?nA(p):p;y.records.push(b),this.tableForRecord.set(b,y)}let m;for(const p of Xn(this.sections.get("BLOCKS"))){if(pa(p)==="BLOCK"){const b=ht(p,2);if(m={name:b,records:[]},this.blocks.has(b.toUpperCase()))throw new Error("Duplicate source block definition.");this.blocks.set(b.toUpperCase(),m)}if(!m)throw new Error("DXF block definition is incomplete.");m.records.push(p),this.blockForRecord.set(p,m.name.toUpperCase()),pa(p)==="ENDBLK"&&(m=void 0)}if(m)throw new Error("DXF block definition has no ENDBLK.");this.modelRecords=Xn(this.sections.get("ENTITIES")),this.objects=Xn(this.sections.get("OBJECTS")??[]);for(const p of[...[...this.tables.values()].flatMap(b=>b.records),...[...this.blocks.values()].flatMap(b=>b.records),...this.modelRecords,...this.objects]){const b=Fs(p);if(b){if(this.recordsByHandle.has(b))throw new Error("Duplicate DXF entity handle.");this.recordsByHandle.set(b,p),this.maxHandle=Math.max(this.maxHandle,parseInt(b,16)||0)}}for(const p of this.tableHandles)this.maxHandle=Math.max(this.maxHandle,parseInt(p,16)||0)}placements(){const r=new Map;for(const s of this.modelRecords){if(pa(s)!=="INSERT"||ht(s,67)==="1"||ht(s,410)&&ht(s,410).toUpperCase()!=="MODEL")continue;const o=ht(s,2);if(!o||o.startsWith("*"))continue;const l=this.blocks.get(o.toUpperCase())?.name??o,u=r.get(l)??new Set;u.add(ht(s,8)||"0"),r.set(l,u)}return r}layerDetails(r){const s=this.tables.get("LAYER")?.records.find(o=>ht(o,2).toUpperCase()===r.toUpperCase());return s?`color=${Math.abs(Number(ht(s,62)||"7"))};lineweight=${ht(s,370)||"-3"};linetype=${ht(s,6)||"CONTINUOUS"}`:null}nativeAssetInfo(){const r=this.modelRecords.filter(l=>!["ATTRIB","VERTEX","SEQEND"].includes(pa(l))),s=r.length?Fs(r[0]):"";if(!r.length||!s)throw new Error("Native symbol DXF has no verifiable model-space geometry.");const o=this.tables.get("STYLE")?.records.flatMap(l=>[ht(l,3),ht(l,4)].filter(Boolean).flatMap(u=>/\.shx$/i.test(u)?[u]:u.includes(".")?[]:[`${u}.shx`]))??[];return{entityCount:r.length,firstHandle:s,requiredShapeFonts:[...new Set(o)]}}isolate(r){let s=this.maxHandle+1;const o=()=>(s++).toString(16).toUpperCase(),l=new Set,u=new Set,g=new Set,f=new Set,y=[],m=(U,V=!0)=>{Uu(U)&&V&&!g.has(U)&&(g.add(U),l.has(U)&&y.push(U)),l.has(U)||(l.add(U),y.push(U));const ie=this.tableForRecord.get(U);ie&&f.add(ie)},p=U=>{const V=U.toUpperCase();if(u.has(V))return;const ie=this.blocks.get(V);if(!ie||V.startsWith("*MODEL_SPACE")||V.startsWith("*PAPER_SPACE"))throw new Error(`Missing or external block dependency: ${U}`);if(Number(ht(ie.records[0],70))&28)throw new Error("External-reference blocks require native AutoCAD extraction.");u.add(V),ie.records.forEach(ve=>{if(!tA.has(pa(ve)))throw new Error(`Unsupported native block entity: ${pa(ve)}`);m(ve)});const de=this.tables.get("BLOCK_RECORD")?.records.find(ve=>ht(ve,2).toUpperCase()===V);if(!de)throw new Error("Source block has no BLOCK_RECORD; save a modern ASCII DXF first.");m(de)},b=(U,V,ie=!0)=>{const de=this.tables.get(U)?.records.find(ve=>ht(ve,2).toUpperCase()===V.toUpperCase());if(de)U==="BLOCK_RECORD"?p(ht(de,2)):m(de);else if(ie)throw new Error(`Missing ${U} dependency: ${V}`)};p(r);for(const U of aA){const V=this.tables.get(U);if(!V)throw new Error(`Native symbol DXF is missing required ${U} table after safe repair.`);if(f.add(V),U==="VPORT"){const ie=V.records.find(de=>ht(de,2).toUpperCase()==="*ACTIVE");if(!ie)throw new Error("Native symbol DXF has no active *ACTIVE VPORT record after safe repair.");m(ie)}}b("LAYER","0");for(const U of["CONTINUOUS","BYLAYER","BYBLOCK"])b("LTYPE",U,!1);for(b("STYLE","STANDARD",!1),b("APPID","ACAD",!1),b("DIMSTYLE","STANDARD",!1);y.length;){const U=y.shift(),V=pa(U);if(/IMAGEDEF|UNDERLAY|PDFDEFINITION|DGNDEFINITION|DWFDEFINITION|PROXY/.test(V))throw new Error(`External/proxy dependency ${V} requires native AutoCAD extraction.`);(V==="INSERT"||V==="DIMENSION")&&p(ht(U,2)),V==="DIMENSION"&&b("DIMSTYLE",ht(U,3)||"STANDARD");for(let ie=0;ie<U.length;ie++){const de=U[ie];if(de.code===8&&b("LAYER",de.value.trim()||"0"),de.code===6&&!["BYLAYER","BYBLOCK",""].includes(de.value.trim().toUpperCase())&&b("LTYPE",de.value.trim()),de.code===7&&de.value.trim()&&b("STYLE",de.value.trim()),de.code===1001&&b("APPID",de.value.trim()),!Ty(de.code)||!de.value.trim()||de.value.trim()==="0"||Uu(U)&&[350,360].includes(de.code)&&U[ie-1]?.code===3&&!g.has(U))continue;const ve=de.value.trim().toUpperCase();if(this.tableHandles.has(ve))continue;const Ie=this.recordsByHandle.get(ve);if(!Ie)throw new Error(`Unresolved native DXF handle reference (${de.code}).`);const Pe=this.blockForRecord.get(Ie);if(Pe&&!u.has(Pe))throw new Error("Block metadata references unrelated drawing geometry; use native AutoCAD extraction.");if(this.modelRecords.includes(Ie))throw new Error("Block metadata references source model-space geometry; use native AutoCAD extraction.");pa(Ie)==="BLOCK_RECORD"?p(ht(Ie,2)):m(Ie,de.code!==330)}}const v=new Set,x=new Set,N=U=>{if(v.has(U))throw new Error("Circular block references cannot be isolated safely.");if(!x.has(U)){v.add(U);for(const V of this.blocks.get(U).records)["INSERT","DIMENSION"].includes(pa(V))&&N(ht(V,2).toUpperCase());v.delete(U),x.add(U)}};if(N(r.toUpperCase()),[...l].some(U=>/BLOCK.*(?:PARAMETER|ACTION)|BLOCKREPRESENTATION|EVALUATION_GRAPH/.test(pa(U))||U.some(V=>V.code===3&&/ACAD_ENHANCEDBLOCK/i.test(V.value))))throw new Error("Dynamic blocks require native AutoCAD extraction; their behavior is not approximated.");const D=this.tables.get("BLOCK_RECORD");f.add(D);const A=this.blocks.get(r.toUpperCase()),S=D.records.find(U=>ht(U,2).toUpperCase()===r.toUpperCase()),L=o(),_=(U,V)=>Gn(0,"BLOCK_RECORD",5,V,330,Fs(D.header),100,"AcDbSymbolTableRecord",100,"AcDbBlockTableRecord",2,U,70,0,280,1,281,0),C=U=>U.map(V=>[2,3].includes(V.code)?{...V,value:"*Model_Space"}:pa(U)==="BLOCK"&&[10,20,30,70].includes(V.code)?{...V,value:"0"}:V),w=[];for(const U of[...f].sort((V,ie)=>V.name==="BLOCK_RECORD"?1:ie.name==="BLOCK_RECORD"?-1:0)){const V=U.records.filter(ie=>l.has(ie)).map(ie=>ie===S?C(ie):ie);U.name==="BLOCK_RECORD"&&V.push(_("*Paper_Space",L)),w.push(...Gn(0,"TABLE",2,U.name,5,Fs(U.header),330,"0",100,"AcDbSymbolTable",70,V.length),...U.name==="DIMSTYLE"?Gn(100,"AcDbDimStyleTable"):[],...V.flat(),...Gn(0,"ENDTAB"))}const O=[...C(A.records[0]),...A.records.at(-1),...Gn(0,"BLOCK",5,o(),330,L,100,"AcDbEntity",8,"0",100,"AcDbBlockBegin",2,"*Paper_Space",70,0,10,0,20,0,30,0,3,"*Paper_Space",1,"",0,"ENDBLK",5,o(),330,L,100,"AcDbEntity",8,"0",100,"AcDbBlockEnd")];for(const U of u)U!==r.toUpperCase()&&O.push(...this.blocks.get(U).records.flat());const R=this.objects.filter(U=>l.has(U)).map(U=>!Uu(U)||g.has(U)?U:U.filter((V,ie)=>V.code===3&&[350,360].includes(U[ie+1]?.code)?l.has(this.recordsByHandle.get(U[ie+1].value.trim().toUpperCase())):[350,360].includes(V.code)&&U[ie-1]?.code===3?l.has(this.recordsByHandle.get(V.value.trim().toUpperCase())):!0)).flat(),P=A.records.slice(1,-1).flat();if(!P.length)throw new Error("The selected block contains no native entities.");const k=new Set(["$ACADVER","$DWGCODEPAGE","$INSUNITS","$MEASUREMENT","$LTSCALE","$CELTSCALE","$PSLTSCALE"]),te=[];let X=!1;for(const U of this.sections.get("HEADER")??[])U.code===9&&(X=k.has(U.value.trim())),X&&te.push(U);te.push(...Gn(9,"$HANDSEED",5,o(),9,"$INSBASE",10,ht(A.records[0],10)||"0",20,ht(A.records[0],20)||"0",30,ht(A.records[0],30)||"0"));const ae=new Set([...l].map(U=>pa(U))),pe=Xn(this.sections.get("CLASSES")??[]).filter(U=>ae.has(ht(U,1).toUpperCase())).flat(),oe=(U,V)=>[...Gn(0,"SECTION",2,U),...V,...Gn(0,"ENDSEC")],ne=[...oe("HEADER",te),...pe.length?oe("CLASSES",pe):[],...oe("TABLES",w),...oe("BLOCKS",O),...oe("ENTITIES",P),...R.length?oe("OBJECTS",R):[],...Gn(0,"EOF")],Y=new Set;for(const U of[...Xn(w),...Xn(O),...Xn(P),...Xn(R)]){const V=Fs(U);if(V){if(Y.has(V))throw new Error("Duplicate handle in isolated DXF.");Y.add(V)}}for(const U of ne)if(Ty(U.code)&&U.value.trim()&&U.value.trim()!=="0"&&!Y.has(U.value.trim().toUpperCase()))throw new Error(`A required DXF reference was not retained (${U.code}).`);const Z=ne.map(U=>`${U.code}\r
${U.value}\r
`).join(""),ge=new Uint8Array(Z.length);for(let U=0;U<Z.length;U++)ge[U]=Z.charCodeAt(U);const we=Ws(ge).content;let j="";for(let U=0;U<we.length;U+=16384)j+=String.fromCharCode(...we.subarray(U,U+16384));Bp(j);const ee=new av().parseSync(j);if(!ee?.entities.length||!ee.blocks?.["*Model_Space"])throw new Error("The isolated block DXF failed its structural round-trip validation.");return we}}const Bu=(a,r)=>a.item.fields.find(s=>s.label===r)?.value.trim()??"";function Ay(a,r){const o=a.reviewCandidates.filter(f=>f.sourceGroup===r).filter(f=>f.item.category==="symbol"),u=[...a.companyItems,...Object.values(a.projects).flatMap(f=>f.items)].filter(f=>f.category==="symbol"&&f.fields.some(y=>y.label==="Source drawing ID"&&y.value===r)).filter(f=>f.reviewStatus==="reviewed"),g=[...new Set(u.flatMap(f=>f.fields.filter(y=>y.label==="Target CAD layer"||y.label==="Source insert layer(s)").map(y=>y.value).filter(Boolean)))];return{pending:o.filter(f=>f.status==="needs-review").length,approved:u.length,dismissed:o.filter(f=>f.status==="dismissed").length,layers:g}}function rA(a,r,s,o=new Set){if(a.format!=="DXF"||a.category!=="company-standard")throw new Error("Select a saved DXF classified as a Legends Library standard. DWG still uses the AutoCAD extractor.");const l=new Hp(r),u=l.placements(),g=[...u].filter(([,A])=>A.size===1&&!!fp[[...A][0].trim().toUpperCase()]),f=tc(l.text,g.map(([A])=>A)),y=[],m=[],p=new Map,b=[];let v=0;const x=new Set,N=[...s.reviewCandidates],D=(A,S,L,_=[])=>{const C=`extract-${a.id}-${A}-${S}`;return{id:C,proposedScope:"company",sourceGroup:a.id,status:"needs-review",item:{id:C,category:A==="BLOCK"?"symbol":"layer",name:`${A==="BLOCK"?"Block":"LAYER"} · ${S}`,summary:"Extracted from the saved DXF on this device. Only verified placement layers can be batch-approved.",sourceFile:a.label,sourceKind:"extracted-dwg",scope:"company",reviewStatus:"needs-review",canPromote:!1,fields:[{label:A==="BLOCK"?"Block name":"CAD name",value:S},{label:"Source drawing ID",value:a.id},{label:"Source discipline",value:a.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:L},..._]}}};for(const[A,S]of u){const L=[...S][0];if(S.size!==1||!fp[L.trim().toUpperCase()]){b.push({blockName:A,reason:S.size>1?"Mixed placement layers; review required.":"Internal or unsupported placement layer."});continue}const _=N.find(R=>R.sourceGroup===a.id&&Bu(R,"Block name").toUpperCase()===A.toUpperCase()),C=[...s.companyItems,...Object.values(s.projects).flatMap(R=>R.items)].some(R=>R.fields.some(P=>P.label==="Source drawing ID"&&P.value===a.id)&&R.fields.some(P=>P.label==="Block name"&&P.value.trim().toUpperCase()===A.toUpperCase()));if(_&&_.status!=="needs-review"||C){v++;continue}if(!l.layerDetails(L)){b.push({blockName:A,reason:"The placement layer has no LAYER table record."});continue}const O=_&&Bu(_,"Block asset ID")||`${a.id}|${A}`;try{if(!o.has(O)){const P=l.isolate(A),k=f.get(A);y.push({id:O,sourceId:a.id,blockName:A,content:P,format:"DXF",previewSvg:k?.previewSvg??null,nearbyLabels:k?.nearbyLabels??[],labelMatchAmbiguous:k?.labelMatchAmbiguous??!1,labelMatchSkipped:k?.labelMatchSkipped??!0,sourcePlacements:k?.sourcePlacements??[],...k?.geometryDescriptor?{geometryDescriptor:k.geometryDescriptor}:{}})}const R=D("BLOCK",A,`sourceLayer=${L};nativeIsolatedDxf=true`,[{label:"Block asset ID",value:O},{label:"Fallback category",value:""},{label:"Source insert layer(s)",value:L}]);if(_){const P=new Set(["Extracted details","Source insert layer(s)","Block asset ID"]);p.set(_.id,{..._,item:{..._.item,fields:[..._.item.fields.filter(k=>!P.has(k.label)),...R.item.fields.filter(k=>P.has(k.label))]}})}else m.push(R);x.add(L)}catch(R){b.push({blockName:A,reason:R instanceof Error?R.message:"Native DXF isolation failed."})}}for(const A of x){const S=N.some(_=>_.sourceGroup===a.id&&_.item.category==="layer"&&Bu(_,"CAD name").toUpperCase()===A.toUpperCase()),L=s.companyItems.some(_=>_.category==="layer"&&_.fields.some(C=>C.label==="Source drawing ID"&&C.value===a.id)&&_.fields.some(C=>C.label==="CAD name"&&C.value.toUpperCase()===A.toUpperCase()));!S&&!L&&m.push(D("LAYER",A,l.layerDetails(A)))}return{library:{...s,reviewCandidates:[...s.reviewCandidates.map(A=>p.get(A.id)??A),...m]},assets:y,skipped:b,preserved:v,prepared:x.size?y.length:0,eligibleSymbols:g.length,addedSymbols:m.filter(A=>A.item.category==="symbol").length,updatedSymbols:p.size,detectedLayers:[...new Set([...u.values()].flatMap(A=>[...A]))]}}const sA=40*1024*1024,oA=40*1024*1024,iA=48,lA=15,cA=32;function dA(a){const r=[];let s=0;for(;s<a.length;){const o=a[s];if(/\s/.test(o)){s+=1;continue}if(o==="("||o===")"){r.push(o),s+=1;continue}if(o==="."&&(s+1===a.length||/[\s)]/.test(a[s+1]))){r.push(o),s+=1;continue}if(o==='"'){let u="";for(s+=1;s<a.length&&a[s]!=='"';)if(a[s]==="\\"&&s+1<a.length){s+=1;const g=a[s];u+=g==="n"?`
`:g==="r"?"\r":g,s+=1}else u+=a[s],s+=1;if(a[s]!=='"')throw new Error("The AutoCAD geometry log contains an unfinished string value.");s+=1,r.push(JSON.stringify(u));continue}const l=s;for(;s<a.length&&!/[\s()]/.test(a[s]);)s+=1;if(l===s)throw new Error("The AutoCAD geometry log contains an invalid value.");r.push(a.slice(l,s))}return r}function yp(a,r,s=0){if(s>40)throw new Error("The AutoCAD geometry log nesting is too deep to read safely.");const o=a[r.index++];if(o===void 0)throw new Error("The AutoCAD geometry log contains an incomplete geometry record.");if(o!=="("){if(o===")")throw new Error("The AutoCAD geometry log contains an unexpected closing bracket.");return o.startsWith('"')?JSON.parse(o):/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(o)?Number(o):o.toLowerCase()==="nil"?null:o.toUpperCase()==="T"?!0:o}const l=[];for(;r.index<a.length&&a[r.index]!==")";){if(a[r.index]==="."){if(l.length!==1)throw new Error("The AutoCAD geometry log contains a malformed pair.");r.index+=1;const u=yp(a,r,s+1);if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains a malformed pair.");return{kind:"pair",first:l[0],rest:u}}l.push(yp(a,r,s+1))}if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains an incomplete list.");return l}function Vl(a){const r=dA(a),s={index:0},o=yp(r,s);if(s.index!==r.length)throw new Error("The AutoCAD geometry log has trailing geometry data.");return o}function Gl(a,r){if(Array.isArray(a))for(const s of a){if(s&&typeof s=="object"&&!Array.isArray(s)&&"kind"in s&&String(s.first)===r)return s.rest;if(Array.isArray(s)&&s.length>=2&&s[0]===r)return s.length===2?s[1]:s.slice(1)}}function uA(a,r){return!Array.isArray(a)||a.length<r||a.slice(0,r).some(s=>typeof s!="number"||!Number.isFinite(s))?null:a.slice(0,r)}function pA(a){if(!Array.isArray(a))return{};const r={};for(const s of a){if(s&&typeof s=="object"&&!Array.isArray(s)&&"kind"in s){const o=s;typeof o.first=="string"&&typeof o.rest=="number"&&Number.isFinite(o.rest)&&(r[o.first]=o.rest);continue}!Array.isArray(s)||typeof s[0]!="string"||typeof s[1]!="number"||!Number.isFinite(s[1])||(r[s[0]]=s[1])}return r}function fA(a){const r=Vl(a);return Array.isArray(r)?r.filter(s=>typeof s=="string"):[]}function hA(a){if(new TextEncoder().encode(a).byteLength>sA)throw new Error("The AutoCAD geometry log is over the 40 MB local review limit.");const r=new Map,s=[],o=new Set;for(const l of a.split(/\r?\n/)){if(l.startsWith("SCAN|")){const D=l.split("|");D[1]&&Number.isInteger(Number(D[2]))&&o.add(`${D[1]}:${Number(D[2])}`);continue}if(l.startsWith("ENTITY|")){const D=l.indexOf("|NORMALIZED=");if(D<0)continue;const A=l.slice(0,D).split("|"),S=A[3]?.trim(),L=A[4]?.trim().toUpperCase();if(!S||!L)continue;const _=Vl(l.slice(D+12));r.set(S,{handle:S,type:L,descriptor:_});continue}if(!l.startsWith("CANDIDATE|"))continue;const u=l.split("|"),g=D=>u.find(A=>A.startsWith(`${D}=`))?.slice(D.length+1),f=u[3]?.trim(),y=u[1]?.trim(),m=Number(u[2]),p=g("SOURCE_HANDLES"),b=g("BOUNDS"),v=g("PRIMITIVE_COUNTS");if(!f||!y||!Number.isInteger(m)||!p)continue;const x=b?Vl(b):null,N=uA(x,4);s.push({id:f,sourceAlias:y,page:m,handles:fA(p),bounds:N,primitiveCounts:v?pA(Vl(v)):{}})}if(r.size===0||o.size===0)throw new Error("This log has no readable geometry scans. Use AUTOCAD_GEOMETRY_SCAN.log from a current runner.");return{entities:r,candidates:s,pages:o.size}}function bp(a){return typeof a=="number"&&Number.isFinite(a)?[a]:Array.isArray(a)?a.flatMap(bp):[]}function dv(a){return Array.isArray(a)?a.flatMap(r=>{if(r&&typeof r=="object"&&!Array.isArray(r)&&"kind"in r){const s=r;return typeof s.first=="number"&&Number.isFinite(s.first)?[{code:s.first,values:bp(s.rest)}]:[]}return Array.isArray(r)&&typeof r[0]=="number"?[{code:r[0],values:r.slice(1).flatMap(bp)}]:[]}):[]}function gA(a){return dv(Gl(a,"properties"))}function Us(a,r,s=0){const o=a.filter(l=>l.code===r)[s];return!o||o.values.length<2?null:{x:o.values[0],y:o.values[1]}}function vp(a,r,s){if(!Number.isFinite(s)||Math.abs(s)<1e-5)return[a,r];const o=r.x-a.x,l=r.y-a.y,u=Math.hypot(o,l);if(u<1e-9)return[a,r];const g=4*Math.atan(s),f=u*(1-s*s)/(4*s),y={x:(a.x+r.x)/2-l/u*f,y:(a.y+r.y)/2+o/u*f},m=Math.atan2(a.y-y.y,a.x-y.x),p=Math.hypot(a.x-y.x,a.y-y.y),b=Math.max(4,Math.min(32,Math.ceil(Math.abs(g)/(Math.PI/12))));return Array.from({length:b+1},(v,x)=>{const N=m+g*x/b;return{x:y.x+Math.cos(N)*p,y:y.y+Math.sin(N)*p}})}function uv(a){const r=gA(a.descriptor),s=a.type;if(s==="LINE"){const o=Us(r,10),l=Us(r,11);return o&&l?[o,l]:[]}if(s==="CIRCLE"||s==="ARC"){const o=Us(r,10),l=r.find(b=>b.code===40)?.values[0]??0;if(!o||l<=0)return[];const u=r.find(b=>b.code===50)?.values[0]??0,g=r.find(b=>b.code===51)?.values[0]??Math.PI*2,f=b=>Math.abs(b)>Math.PI*2+.1?b*Math.PI/180:b,y=s==="CIRCLE"?0:f(u);let m=s==="CIRCLE"?Math.PI*2:f(g)-y;for(;m<=0;)m+=Math.PI*2;const p=Math.max(12,Math.min(48,Math.ceil(m/(Math.PI/12))));return Array.from({length:p+1},(b,v)=>{const x=y+m*v/p;return{x:o.x+Math.cos(x)*l,y:o.y+Math.sin(x)*l}})}if(s==="LWPOLYLINE"){const o=[];let l=null;for(const y of r)y.code===10&&y.values.length>=2?(l={point:{x:y.values[0],y:y.values[1]},bulge:0},o.push(l)):y.code===42&&l&&(l.bulge=y.values[0]??0);const u=Gl(a.descriptor,"closed")===!0;if(o.length<2)return o.map(y=>y.point);const g=[],f=u?o.length:o.length-1;for(let y=0;y<f;y+=1){const m=o[y],p=o[(y+1)%o.length],b=vp(m.point,p.point,m.bulge);g.push(...y?b.slice(1):b)}return u||g.push(o[o.length-1].point),g}if(s==="POLYLINE"){const o=Gl(a.descriptor,"polylineVertices");if(!Array.isArray(o))return[];const l=o.flatMap(y=>{const m=dv(y),p=Us(m,10);return p?[{point:p,bulge:m.find(b=>b.code===42)?.values[0]??0}]:[]});if(l.length<2)return l.map(y=>y.point);const u=Gl(a.descriptor,"closed")===!0,g=u?l.length:l.length-1,f=[];for(let y=0;y<g;y+=1){const m=l[y],p=l[(y+1)%l.length],b=vp(m.point,p.point,m.bulge);f.push(...y?b.slice(1):b)}return u||f.push(l[l.length-1].point),f}if(s==="ELLIPSE"){const o=Us(r,10),l=Us(r,11),u=r.find(p=>p.code===40)?.values[0]??0;if(!o||!l||u<=0)return[];const g=r.find(p=>p.code===41)?.values[0]??0;let y=(r.find(p=>p.code===42)?.values[0]??Math.PI*2)-g;for(;y<=0;)y+=Math.PI*2;if(!Number.isFinite(y)||y>Math.PI*2+1e-6)return[];const m=Math.max(12,Math.min(96,Math.ceil(y/(Math.PI/24))));return Array.from({length:m+1},(p,b)=>{const v=g+y*b/m,x=Math.cos(v),N=Math.sin(v)*u;return{x:o.x+l.x*x-l.y*N,y:o.y+l.y*x+l.x*N}})}return s==="SPLINE"?r.filter(o=>o.code===11&&o.values.length>=2).map(o=>({x:o.values[0],y:o.values[1]})):[]}function pv(a){const r=a.geometry,s=a.transform,o=u=>({x:s[0]*u.x+s[2]*u.y+s[4],y:s[1]*u.x+s[3]*u.y+s[5]}),l=r.vertices??r.fitPoints??r.controlPoints;if((a.type==="LINE"||a.type==="SPLINE")&&l?.length)return l.map(o);if(a.type==="LWPOLYLINE"||a.type==="POLYLINE"){if(!l?.length)return[];const u=r.closed===!0,g=[],f=u?l.length:l.length-1;for(let y=0;y<f;y+=1){const m=l[y],p=l[(y+1)%l.length],b=vp(m,p,m.bulge??0).map(o);g.push(...y?b.slice(1):b)}return u||g.push(o(l[l.length-1])),g}if(a.type==="CIRCLE"||a.type==="ARC"){const u=r.center,g=Number(r.radius);if(!u||!Number.isFinite(g)||g<=0)return[];const f=a.type==="ARC"?Number(r.startAngle??0):0;let y=a.type==="ARC"?Number(r.endAngle??f+Math.PI*2)-f:Math.PI*2;for(;y<=0;)y+=Math.PI*2;const m=Math.max(12,Math.min(48,Math.ceil(y/(Math.PI/12))));return Array.from({length:m+1},(p,b)=>{const v=f+y*b/m;return o({x:u.x+Math.cos(v)*g,y:u.y+Math.sin(v)*g})})}if(a.type==="ELLIPSE"){const u=r.center,g=r.majorAxisEndPoint,f=Number(r.axisRatio);if(!u||!g||!Number.isFinite(f)||f<=0)return[];const y=Number(r.startAngle??0);let p=Number(r.endAngle??Math.PI*2)-y;for(;p<=0;)p+=Math.PI*2;if(!Number.isFinite(p)||p>Math.PI*2+1e-6)return[];const b=Math.max(12,Math.min(96,Math.ceil(p/(Math.PI/24))));return Array.from({length:b+1},(v,x)=>{const N=y+p*x/b;return o({x:u.x+g.x*Math.cos(N)-g.y*f*Math.sin(N),y:u.y+g.y*Math.cos(N)+g.x*f*Math.sin(N)})})}return[]}function fv(a,r=iA){return a.length<=r?a:Array.from({length:r},(s,o)=>a[Math.floor(o*(a.length-1)/(r-1))])}function Ep(a){const r=fv(a.filter(l=>Number.isFinite(l.x)&&Number.isFinite(l.y)));if(r.length<2)return[];const s={x:r.reduce((l,u)=>l+u.x,0)/r.length,y:r.reduce((l,u)=>l+u.y,0)/r.length},o=Math.sqrt(r.reduce((l,u)=>l+(u.x-s.x)**2+(u.y-s.y)**2,0)/r.length);return!Number.isFinite(o)||o<1e-9?[]:r.map(l=>({x:(l.x-s.x)/o,y:(l.y-s.y)/o}))}function wp(a){return a.length?{minX:Math.min(...a.map(r=>r.x)),minY:Math.min(...a.map(r=>r.y)),maxX:Math.max(...a.map(r=>r.x)),maxY:Math.max(...a.map(r=>r.y))}:null}function Dy(a){return a?Math.hypot(a.maxX-a.minX,a.maxY-a.minY):0}function Ny(a,r){const s=new Set([...Object.keys(a),...Object.keys(r)]);let o=0,l=0;for(const u of s){const g=a[u]??0,f=r[u]??0;o+=Math.max(g,f),l+=Math.abs(g-f)}return o===0?0:Math.max(0,1-l/(2*o))}function Cy(a,r){if(!a||!r)return 0;const s=Math.max(a.maxX-a.minX,1e-9),o=Math.max(a.maxY-a.minY,1e-9),l=Math.max(r.maxX-r.minX,1e-9),u=Math.max(r.maxY-r.minY,1e-9),g=Math.max(s/o,o/s),f=Math.max(l/u,u/l);return Math.exp(-Math.abs(Math.log(g/f)))}function Ry(a,r){let s=0;for(const o of a){let l=Number.POSITIVE_INFINITY;for(const u of r){const g=(o.x-u.x)**2+(o.y-u.y)**2;g<l&&(l=g)}s+=l}return s/a.length}function mA(a,r){let s=Number.POSITIVE_INFINITY,o=0;for(let l=0;l<360;l+=lA){const u=l*Math.PI/180,g=Math.cos(u),f=Math.sin(u),y=r.map(p=>({x:g*p.x-f*p.y,y:f*p.x+g*p.y})),m=Math.sqrt((Ry(a,y)+Ry(y,a))/2);m<s&&(s=m,o=l)}return{residual:s,rotation:o}}function yA(a,r){return a.handles.flatMap(s=>{const o=r.get(s);return o?uv(o):[]})}function bA(a,r){const s=new Set;for(const o of a.handles){const l=r.get(o);(!l||uv(l).length<2)&&s.add(l?.type??"MISSING_ENTITY")}return[...s].sort()}function _y(a){return a.primitives.flatMap(pv)}function vA(a){const r=new Set(["LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE"]),s=new Set(["TEXT","MTEXT","ATTRIB","ATTDEF","HATCH","DIMENSION","LEADER","MLEADER"]),o=a.unsupportedEntities.filter(b=>!s.has(b.toUpperCase())),l=a.primitives.filter(b=>r.has(b.type));if(o.length>0||l.length===0)return null;for(const b of l)if((b.type==="LWPOLYLINE"||b.type==="POLYLINE")&&(b.geometry.vertices??[]).some(v=>Math.abs(v.bulge??0)>1e-6))return null;const u=l.flatMap(pv),g=fv(Ep(u),24);if(g.length<2)return null;const f=wp(u);if(!f)return null;const y={PATH:0,CURVE:0};for(const b of l)b.type==="LINE"||b.type==="LWPOLYLINE"||b.type==="POLYLINE"?y.PATH+=1:y.CURVE+=1;const m=f.maxX-f.minX,p=f.maxY-f.minY;return m<=1e-9||p<=1e-9?null:{points:g.map(b=>[b.x,b.y]),primitiveClasses:y,aspectRatio:Math.max(m/p,p/m)}}function EA(a,r){if(new TextEncoder().encode(a).byteLength>oA)throw new Error("The CAD block geometry index is over the 40 MB local review limit.");let s;try{s=JSON.parse(a)}catch{throw new Error("The selected file is not valid CAD_BLOCK_GEOMETRY_INDEX.json.")}if(!s||typeof s!="object"||s.localOnly!==!0||!Array.isArray(s.blocks))throw new Error("This is not a local-only CAD block geometry index from the runner package.");return s.blocks.filter(o=>o.indexStatus==="INDEXED"&&(o.discipline===r||o.discipline==="Shared")&&typeof o.blockName=="string"&&typeof o.blockAssetId=="string"&&o.geometry&&typeof o.geometry=="object")}function wA(a,r,s){const o=hA(a),u=EA(r,s).flatMap(f=>{const y=f.geometry,m=Ep(_y(y));return!m.length||!y.bounds?[]:[{block:f,geometry:y,cloud:m,bounds:wp(_y(y)),primitiveCounts:y.primitiveCounts??{}}]}),g=o.candidates.map(f=>{const y=bA(f,o.entities);if(y.length)return{...f,best:null,second:null,status:"UNMATCHED",reason:`Matching withheld because candidate geometry is incomplete or unsupported: ${y.join(", ")}.`};const m=yA(f,o.entities),p=Ep(m),b=f.bounds?{minX:f.bounds[0],minY:f.bounds[1],maxX:f.bounds[2],maxY:f.bounds[3]}:wp(m);if(u.length===0)return{...f,best:null,second:null,status:"NO_INDEXED_BLOCKS",reason:"No indexed approved blocks for this discipline."};if(p.length<2||!b)return{...f,best:null,second:null,status:"UNMATCHED",reason:"Candidate has too little supported geometry to compare."};const x=u.map(_=>({prepared:_,coarse:Cy(b,_.geometry.bounds)*.75+Ny(f.primitiveCounts,_.primitiveCounts)*.25})).sort((_,C)=>C.coarse-_.coarse).slice(0,cA).map(({prepared:_})=>_).map(_=>{const C=Ny(f.primitiveCounts,_.primitiveCounts),w=Cy(b,_.geometry.bounds),O=mA(p,_.cloud),R=Math.exp(-O.residual*2.5),P=Math.max(0,Math.min(1,R*.7+C*.2+w*.1)),k=Dy(b),te=Dy(_.geometry.bounds),X=String(_.block.category??""),ae=/\b(equipment|tower|vessel|tank|exchanger|column|drum)\b/i.test(X);return{blockAssetId:String(_.block.blockAssetId),blockName:String(_.block.blockName),category:X,targetLayer:String(_.block.targetLayer??""),score:P,geometryResidual:O.residual,primitiveSimilarity:C,aspectSimilarity:w,rotationDegrees:O.rotation,estimatedUniformScale:ae||te<=1e-9?null:k/te,indexStatus:String(_.block.indexStatus)}}).sort((_,C)=>C.score-_.score||_.blockName.localeCompare(C.blockName)),N=x[0]??null,D=x[1]??null,A=N&&D?N.score-D.score:Number.POSITIVE_INFINITY,S=!N||N.score<.9?"UNMATCHED":A<.02?"AMBIGUOUS_REVIEW":N.score>=.97?"HIGH_CANDIDATE_REVIEW":"REVIEW";return{...f,best:N,second:D,status:S,reason:S==="AMBIGUOUS_REVIEW"?"Top library shapes are too close to identify safely.":S==="UNMATCHED"?"No geometry match reached the initial review threshold.":"Experimental shape score only; human confirmation is required."}});return{scan:o,candidates:g,indexedBlockCount:u.length}}function xA(a,r){return JSON.stringify({schemaVersion:1,localOnly:!0,discipline:r,generatedAt:new Date().toISOString(),note:"Experimental geometry similarity rankings. Scores are not probabilities or approvals. Source geometry was not changed; every candidate requires human review.",pagesScanned:a.scan.pages,indexedBlocks:a.indexedBlockCount,candidates:a.candidates},null,2)}function Iy(a){return a===void 0?"—":`${(a*100).toFixed(1)}%`}function SA(a){return a==null?"Review":`${a.toFixed(3)}×`}function TA({discipline:a}){const[r,s]=M.useState(null),[o,l]=M.useState(null),[u,g]=M.useState(null),[f,y]=M.useState(""),[m,p]=M.useState(!1),b=async()=>{if(!r||!o){y("Choose both AUTOCAD_GEOMETRY_SCAN.log and CAD_BLOCK_GEOMETRY_INDEX.json.");return}p(!0),y(""),g(null);try{const[x,N]=await Promise.all([r.text(),o.text()]),D=wA(x,N,a);g({scanName:r.name,indexName:o.name,discipline:a,indexedBlockCount:D.indexedBlockCount,pagesScanned:D.scan.pages,candidates:D.candidates})}catch(x){y(x instanceof Error?x.message:"The local geometry report could not be compared.")}finally{p(!1)}},v=()=>{if(!u)return;const x=xA({scan:{entities:new Map,candidates:[],pages:u.pagesScanned},candidates:u.candidates,indexedBlockCount:u.indexedBlockCount},u.discipline),N=URL.createObjectURL(new Blob([x],{type:"application/json"})),D=document.createElement("a");D.href=N,D.download="LOCAL_GEOMETRY_MATCH_REVIEW.json",D.click(),URL.revokeObjectURL(N)};return c.jsxs("section",{className:"geometry-match-review","aria-labelledby":"geometry-match-title","data-testid":"panel-geometry-match-review",children:[c.jsxs("div",{className:"geometry-match-heading",children:[c.jsx("span",{className:"geometry-match-icon",children:c.jsx(Dw,{size:16})}),c.jsxs("div",{children:[c.jsx("h3",{id:"geometry-match-title",children:"Review geometry matches"}),c.jsx("p",{children:"Compare a local AutoCAD scan with indexed approved blocks. Source drawings are not changed."})]})]}),c.jsxs("div",{className:"geometry-match-privacy",children:[c.jsx(Wu,{size:14})," Both files are read and compared in this browser; nothing is uploaded."]}),c.jsx("p",{className:"geometry-match-instructions",children:"Use the scan log from AutoCAD and the index file from that same runner kit. The result is a local review aid only."}),c.jsxs("div",{className:"geometry-match-inputs",children:[c.jsxs("label",{children:[c.jsx("span",{children:"AutoCAD geometry scan log"}),c.jsx("input",{type:"file",accept:".log,.txt","aria-label":"Select AutoCAD geometry scan log",onChange:x=>{s(x.currentTarget.files?.[0]??null),g(null),y("")},"data-testid":"input-geometry-scan-log"})]}),c.jsxs("label",{children:[c.jsx("span",{children:"CAD block geometry index"}),c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Select CAD block geometry index",onChange:x=>{l(x.currentTarget.files?.[0]??null),g(null),y("")},"data-testid":"input-cad-geometry-index"})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:m||!r||!o,"data-testid":"button-build-geometry-match-report",children:[c.jsx(Jr,{size:14}),m?"Comparing…":"Compare geometry"]})]}),f&&c.jsx("p",{className:"geometry-match-error",role:"alert",children:f}),u&&c.jsxs("div",{className:"geometry-match-results","data-testid":"geometry-match-results",children:[c.jsxs("div",{className:"geometry-match-summary",role:"status",children:[u.discipline,": ",u.candidates.length," candidate group(s) across ",u.pagesScanned," page(s); ",u.indexedBlockCount," indexed approved block(s)."]}),u.indexedBlockCount===0&&c.jsx("p",{className:"geometry-match-warning",children:"No matching indexed blocks were found for this discipline. Check that the selected index came from the same local runner package."}),u.indexedBlockCount>0&&u.candidates.length===0&&c.jsx("p",{className:"geometry-match-warning",children:"AutoCAD found no geometry candidate groups on the scanned pages. No blocks were inserted or drawings changed."}),u.candidates.map(x=>c.jsxs("article",{className:"geometry-match-card",children:[c.jsxs("div",{className:"geometry-match-card-head",children:[c.jsx("strong",{children:x.id}),c.jsx("span",{className:`geometry-match-status status-${x.status.toLowerCase()}`,children:x.status.replaceAll("_"," ")})]}),c.jsxs("div",{className:"geometry-match-card-meta",children:["Page ",x.page," · ",x.handles.length," source entities · ",x.sourceAlias]}),c.jsxs("div",{className:"geometry-match-ranking",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Best shape match"}),c.jsx("strong",{children:x.best?.blockName??"No match"}),c.jsxs("small",{children:[Iy(x.best?.score)," · ",x.best?.targetLayer||"no target layer"," ·"," ",x.best?.rotationDegrees??"—","° · scale ",SA(x.best?.estimatedUniformScale)]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Second match"}),c.jsx("strong",{children:x.second?.blockName??"—"}),c.jsx("small",{children:Iy(x.second?.score)})]})]}),c.jsx("p",{children:x.reason})]},`${x.sourceAlias}-${x.page}-${x.id}`)),c.jsxs("div",{className:"geometry-match-foot",children:[c.jsx("span",{children:"Experimental shape scores are not probabilities or approvals. Every result needs a person to verify it."}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:v,"data-testid":"button-download-geometry-match-report",children:[c.jsx(Rr,{size:13})," Download local report"]})]})]})]})}const Ly=250*1024*1024,Py=500*1024*1024,xp={"needs-review":"Needs review","company-standard":"Legends Library standard","project-example":"Project example","markup-reference":"Markup reference",ignore:"Do not use"};function ky(a,r){return r&&a==="project-example"?"Client-specific library source":xp[a]}function zu(){return globalThis.crypto?.randomUUID?.()??`source-${Date.now()}-${Math.random().toString(36).slice(2)}`}function Yu(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(2)} MB`}function Oy(a){return(a.replace(/\\/g,"/").split("/").pop()??"").replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,"").trim().slice(0,180)||"Unnamed CAD drawing"}function AA({onAddPdfs:a,discipline:r,clientFolderId:s,clientFolderLabel:o}){const[l,u]=M.useState([]),[g,f]=M.useState({}),[y,m]=M.useState([]),[p,b]=M.useState([]),[v,x]=M.useState(""),[N,D]=M.useState(""),[A,S]=M.useState(!1),[L,_]=M.useState(!1),[C,w]=M.useState(""),[O,R]=M.useState(!1),[P,k]=M.useState(()=>{try{return Sn().reviewCandidates.filter($=>$.status==="needs-review").length}catch{return 0}}),[te,X]=M.useState(!1),[ae,pe]=M.useState(""),[oe,ne]=M.useState(!1),[Y,Z]=M.useState(!1),[ge,we]=M.useState(0),[j,ee]=M.useState([]);M.useEffect(()=>{const $=()=>we(fe=>fe+1);return window.addEventListener(mi,$),window.addEventListener("storage",$),window.addEventListener("focus",$),()=>{window.removeEventListener(mi,$),window.removeEventListener("storage",$),window.removeEventListener("focus",$)}},[]);const U=M.useMemo(()=>{try{const $=Sn();return Object.fromEntries(l.map(fe=>[fe.id,Ay($,fe.id)]))}catch{return{}}},[l,ge]);M.useEffect(()=>{ec().then($=>{u($),f(Object.fromEntries($.map(fe=>[fe.id,{category:fe.category,discipline:fe.discipline,projectLabel:fe.projectLabel}])))}).catch($=>{w($ instanceof Error?$.message:"The local CAD library could not be opened.")})},[]);const V=M.useMemo(()=>HS(l,r,s),[l,r,s]),ie=M.useMemo(()=>V.filter($=>$.category==="company-standard"||!!s&&$.category==="project-example"&&$.projectLabel===s),[V,s]);M.useEffect(()=>{ie.some($=>$.id===ae)||pe(ie[0]?.id??"")},[ie,ae]);const de=M.useMemo(()=>V.reduce(($,fe)=>($[fe.category]+=1,$),{"needs-review":0,"company-standard":0,"project-example":0,"markup-reference":0,ignore:0}),[V]),ve=y.some($=>s?$.projectLabel!==s:!!$.projectLabel),Ie=async $=>{S(!0),D(""),w(""),x(""),R(!1),m([]),b([]);try{if($.size>Ly)throw new Error("The archive is larger than the 250 MB limit for this local test.");const fe=fy(new Uint8Array(await $.arrayBuffer())),he=Object.entries(fe).filter(([Fe])=>!Fe.endsWith("/")),z=he.filter(([Fe])=>/\.(dwg|dxf)$/i.test(Fe)&&!/_OVERVIEW\.dxf$/i.test(Fe)),ue=he.filter(([Fe])=>/\.pdf$/i.test(Fe)),Ne=he.filter(([Fe])=>/\.bak$/i.test(Fe)).length;if([...z,...ue].reduce((Fe,[,Be])=>Fe+Be.byteLength,0)>Py)throw new Error("The PDF and CAD source files together exceed the 500 MB local test limit.");if(z.length===0&&ue.length===0)throw new Error("No PDF, DWG, or source DXF files were found in this ZIP. Overview DXFs and other file types are not saved as source drawings.");const qe=z.map(([Fe,Be],ma)=>({id:zu(),label:`Source CAD ${String(l.length+ma+1).padStart(3,"0")}`,reviewFilename:Oy(Fe),category:"needs-review",discipline:r,format:/\.dxf$/i.test(Fe)?"DXF":"DWG",projectLabel:s??"",bytes:Be.byteLength,content:Be})),et=ue.map(([,Fe],Be)=>({id:zu(),label:`PDF ${String(Be+1).padStart(2,"0")}`,file:new File([Fe],`SOURCE_${String(Be+1).padStart(2,"0")}.pdf`,{type:"application/pdf"})}));m(qe),b(et),x(`Found ${z.length} CAD drawing file(s) and ${ue.length} PDF file(s). ${Ne} backup file(s) ignored.`),z.length?D("Assign a use to each CAD drawing before saving it. ZIP filenames are shown only during review; the saved library keeps generic source IDs."):D("No CAD drawings to add. You can add the extracted PDF to the conversion queue.")}catch(fe){w(fe instanceof Error?fe.message:"The ZIP could not be read. Check that it is not damaged or password-protected.")}finally{S(!1)}},Pe=async $=>{w(""),x(""),D(""),m([]),b([]),R(!1);const fe=$.filter(z=>/\.(dwg|dxf)$/i.test(z.name)&&!/_OVERVIEW\.dxf$/i.test(z.name));if(fe.length!==$.length){w("Choose source DWG/DXF files only. Overview DXFs are not source drawings.");return}if(fe.reduce((z,ue)=>z+ue.size,0)>Py){w("The selected CAD source files exceed the 500 MB local test limit.");return}if(!fe.length){w("Choose at least one DWG or DXF source drawing.");return}S(!0);try{const z=await Promise.all(fe.map(async(ue,Ne)=>({id:zu(),label:`Source CAD ${String(l.length+Ne+1).padStart(3,"0")}`,reviewFilename:Oy(ue.name),category:"needs-review",discipline:r,format:/\.dxf$/i.test(ue.name)?"DXF":"DWG",projectLabel:s??"",bytes:ue.size,content:new Uint8Array(await ue.arrayBuffer())})));m(z),x(`Prepared ${z.length} CAD source file(s) for local review.`),D("Choose the correct discipline and local library category for each file. Filenames are discarded when saved.")}catch(z){w(z instanceof Error?z.message:"The CAD files could not be read locally.")}finally{S(!1)}},vt=async()=>{if(ve){w("The selected client folder changed after these files were staged. Re-select the original client folder or add the files again.");return}if(y.some($=>$.category==="needs-review")){w("Choose a category for every CAD drawing before saving the library.");return}if(y.some($=>["project-example","markup-reference"].includes($.category)&&!$.projectLabel?.trim())){w("Enter a neutral project code for every project example and markup reference.");return}_(!0),w("");try{let $=0;const fe=y.filter(ue=>ue.category!=="ignore").map(ue=>{const Ne=ue.format==="DXF"?Ws(ue.content):null;return $+=Ne?.repairs.length??0,{id:ue.id,label:ue.label,category:ue.category,discipline:ue.discipline,format:ue.format,projectLabel:ue.projectLabel,bytes:Ne?.content.byteLength??ue.bytes,content:Ne?.content??ue.content}});await JS(fe);const he=await ec();u(he),f(Object.fromEntries(he.map(ue=>[ue.id,{category:ue.category,discipline:ue.discipline,projectLabel:ue.projectLabel}])));const z=y.length-fe.length;m([]),D(`${fe.length} source CAD drawing(s) saved in this browser's local library. ${z} marked “Do not use”. ${$} DXF symbol name(s) repaired in local copies; original disk files unchanged.`)}catch($){w($ instanceof Error?$.message:"The CAD sources could not be saved locally.")}finally{_(!1)}},at=($,fe)=>{f(he=>({...he,[$.id]:{...$,...he[$.id],...fe}}))},ut=async $=>{const fe=g[$.id]??{category:$.category,discipline:$.discipline,projectLabel:$.projectLabel,standardsMaster:$.standardsMaster};if(["project-example","markup-reference"].includes(fe.category)&&!fe.projectLabel?.trim()){w("Enter a neutral project code before saving this project-specific source.");return}w("");try{await eT($.id,fe),u(he=>he.map(z=>z.id===$.id?{...z,...fe,...fe.projectLabel?.trim()?{projectLabel:fe.projectLabel.trim()}:{projectLabel:void 0}}:z))}catch(he){w(he instanceof Error?he.message:"The source drawing category could not be changed.")}},gt=async()=>{if(!(!ie.length||te)){X(!0),w("");try{const $=await lT(ie),fe=URL.createObjectURL($),he=document.createElement("a");he.href=fe,he.download="local-cad-extractor-kit.zip",he.click(),window.setTimeout(()=>URL.revokeObjectURL(fe),1e3),D(`Local extractor kit prepared with ${ie.length} source CAD drawing(s).`)}catch($){w($ instanceof Error?$.message:"The local extractor kit could not be prepared.")}finally{X(!1)}}},Ft=async $=>{const fe=ie.some(z=>z.id===ae)?ae:ie[0]?.id,he=ie.find(z=>z.id===fe);if(!he){w("Choose a reviewed source drawing before importing its extraction.");return}if(he.category==="project-example"&&!he.projectLabel?.trim()){w("Add a neutral project code to this source drawing before importing its extraction.");return}ne(!0),w("");try{if($.size>Ly)throw new Error("The extraction ZIP is larger than the 250 MB limit for this local test.");const z=fy(new Uint8Array(await $.arrayBuffer())),ue=Object.entries(z).find(([nt])=>/\.tsv$/i.test(nt));if(!ue)throw new Error("The ZIP must contain CAD_STANDARDS.tsv from PIDEXTRACTSTANDARDS.");const be=new TextDecoder().decode(ue[1]).split(/\r?\n/).filter(Boolean);if(be.length<2||!be[0].toUpperCase().includes("KIND")||!be[0].toUpperCase().includes("NAME"))throw new Error("The ZIP contains an invalid CAD_STANDARDS.tsv extraction.");const qe=Sn(),et=Object.entries(z).filter(([nt])=>/_OVERVIEW\.dxf$/i.test(nt)),Fe=be[1]?.split("	")[0]?.trim()??"",Be=et.find(([nt])=>nt.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===`${Fe}_OVERVIEW.dxf`.toLowerCase());if(et.length&&(!Be||et.length!==1))throw new Error("Include exactly one overview DXF for this extraction, named with the same SOURCE alias as the TSV (for example SOURCE_001_OVERVIEW.dxf).");const ma=be.slice(1).flatMap(nt=>{const[,ya,Lt]=nt.split("	");return ya?.trim().toUpperCase()==="BLOCK"&&Lt?.trim()?[Lt.trim()]:[]});if(Be&&Be[1].byteLength>30*1024*1024)throw new Error("The overview DXF exceeds the 30 MB preview limit. Keep the original extraction unchanged and export a smaller Legends-only overview.");let Ee=null,He="",Le=!1;if(Be)Ee=new TextDecoder("windows-1252").decode(Be[1]),He="overview DXF";else if(he.format==="DXF"&&he.bytes<=30*1024*1024)try{Ee=new TextDecoder("windows-1252").decode(await Gs(he.id)),He="saved source DXF"}catch{Le=!0}else he.format==="DXF"&&(Le=!0);let aa=new Map;if(Ee)try{aa=tc(Ee,ma)}catch{Le=!0}const ke=[],ja=[],Ut=[];for(const nt of be.slice(1)){const[,ya,Lt,qa=""]=nt.split("	"),Gt=ya?.trim().toUpperCase(),xt=Lt?.trim();if(!xt||!jy[Gt])continue;const Nt=Gt==="BLOCK"&&rv(xt)?"directionArrow":jy[Gt],At=Gt==="BLOCK"?aa.get(xt):void 0;let nn;if(Gt==="BLOCK"){const ba=qa.match(/(?:^|;)asset=([^;]+)/i)?.[1]?.trim();if(!ba){Ut.push(xt);continue}const va=ba.replaceAll("\\","/").split("/").at(-1),Pt=Object.entries(z).find(([kt])=>kt.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===va?.toLowerCase());if(!va||!Pt){Ut.push(xt);continue}nn=`${he.id}|${xt}`,ja.push({id:nn,sourceId:he.id,blockName:xt,content:Pt[1],format:"DWG",...Ee&&!Le?{previewSvg:At?.previewSvg??null,nearbyLabels:At?.nearbyLabels??[],labelMatchSkipped:At?.labelMatchSkipped??!1,labelMatchAmbiguous:At?.labelMatchAmbiguous??!1,sourcePlacements:At?.sourcePlacements??[],...At?.geometryDescriptor?{geometryDescriptor:At.geometryDescriptor}:{}}:{}})}const rn=`extract-${he.id}-${Gt}-${xt}`;if(qe.reviewCandidates.find(ba=>ba.id===rn))continue;const _a=he.category==="project-example",_n=[{label:Gt==="BLOCK"?"Block name":"CAD name",value:xt},{label:"Source drawing ID",value:he.id},{label:"Source discipline",value:he.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:qa.replace(/(?:^|;)asset=[^;]*/i,"").trim()||"No additional table details"},...Gt==="BLOCK"?[{label:"Block asset ID",value:nn??""},{label:"Fallback category",value:""},...At?.sourcePlacements?.length?[{label:"Source insert layer(s)",value:[...new Set(At.sourcePlacements.map(ba=>ba.layer))].join(", ")},{label:"Source insert rotation(s)",value:At.sourcePlacements.map(ba=>`${ba.rotationDegrees}° on ${ba.layer} (${ba.count})`).join("; ")}]:[]]:[]];ke.push({id:rn,item:{id:rn,category:Nt,name:`${Nt==="directionArrow"?"Direction Arrow":Gt==="BLOCK"?"Block":Gt.replaceAll("_"," ")} · ${xt}`,summary:"Extracted locally from a source CAD drawing; confirm each value before use.",sourceFile:he.label,sourceKind:"extracted-dwg",scope:_a?"project":"company",reviewStatus:"needs-review",..._a?{projectId:he.projectLabel,projectName:he.projectLabel===s&&o||he.projectLabel}:{},canPromote:!1,fields:_n},proposedScope:_a?"project":"company",sourceGroup:he.id,..._a?{projectId:he.projectLabel,projectName:he.projectLabel===s&&o||he.projectLabel}:{},status:"needs-review"})}const Vt={...qe,reviewCandidates:[...qe.reviewCandidates,...ke],auditTrail:ke.length?[{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:"Local CAD extraction added for review",detail:`${ke.length} extracted records from ${he.label} were added as pending review.`,...he.projectLabel?{projectName:he.projectLabel===s&&o||he.projectLabel}:{}},...qe.auditTrail]:qe.auditTrail},Tt=Ee&&!Le?wy(Vt,he.id,aa).library:Vt;await gp(ja),yi(Tt),k(Tt.reviewCandidates.filter(nt=>nt.status==="needs-review").length),D((ke.length?`${ke.length} extracted record(s) added to Drafting standards for review. Nothing was approved automatically.`:"No new records found; the extracted names are already in the review queue or standards library.")+(aa.size?` ${aa.size} local block previews and source placement-layer details read from the ${He}. Nearby labels remain suggestions and need confirmation.`:Le?" The source preview could not be read; the valid extracted records were still imported without preview-based layer evidence.":he.format==="DWG"&&!Be?" To identify DWG blocks and their placement layers, include the source *_OVERVIEW.dxf exported with PIDEXPORTOVERVIEW.":"")+(Ut.length?` ${Ut.length} block asset(s) were missing and skipped: ${[...new Set(Ut)].slice(0,5).join(", ")}${Ut.length>5?", …":""}. Other valid records were kept.`:""))}catch(z){w(z instanceof Error?z.message:"The CAD extraction could not be imported.")}finally{ne(!1)}},Et=async()=>{const $=ie.find(he=>he.id===ae&&he.category==="company-standard"),fe=$?[$.id]:[];if(!(!$||Y)){Z(!0),w(""),D(""),ee([]);try{let he=Sn();const z=JSON.stringify(he);let ue="";if($.format==="DXF"){D(`${$.label}: extracting native blocks from the saved DXF on this device…`),await new Promise(Le=>window.setTimeout(Le,0));const Ee=await WS(),He=rA($,await Gs($.id),he,Ee);if(JSON.stringify(Sn())!==z)throw new Error("The library changed during DXF preparation. No records were changed; retry with the latest library.");await gp(He.assets,!0),he=He.library,ee(He.skipped),ue=`${He.addedSymbols} new symbol record(s), ${He.assets.length} native block file(s) saved; ${He.preserved} previously reviewed symbol(s) preserved. ${He.skipped.length} item(s) excluded or need native extraction/review. `}const Ne=he.reviewCandidates.filter(Ee=>Ee.sourceGroup===$.id&&Ee.status==="needs-review"&&Ee.proposedScope==="company"&&Ee.item.category==="symbol"&&Ee.item.sourceKind==="extracted-dwg");if(!Ne.length){const Ee=Ay(he,$.id);D(`${$.label}: ${ue}No pending symbols to approve. ${Ee.approved} already approved; ${Ee.dismissed} dismissed. ${$.format==="DXF"?"Only named model-space INSERTs on supported placement layers can be extracted. See excluded items below; loose geometry is not guessed into blocks.":"For DWG, import this source’s extraction ZIP with its individual block files."}`);return}let be="";if($.format==="DXF"){if($.bytes>30*1024*1024)throw new Error("This saved source DXF exceeds the 30 MB recovery limit. Import its extraction with a smaller Legends-only overview DXF.");const Ee=await Gs($.id),He=Ne.map(ke=>ke.item.fields.find(ja=>ja.label==="Block name")?.value.trim()??"").filter(Boolean),Le=tc(new TextDecoder("windows-1252").decode(Ee),He),aa=wy(he,$.id,Le);he=aa.library,be=`${aa.recoveredSymbols} pending symbol(s) have INSERT-layer evidence in the saved DXF; ${aa.updatedRecords} existing record(s) updated. `}const qe=new Set(fe),et=new Set(he.reviewCandidates.filter(Ee=>Ee.status==="needs-review"&&qe.has(Ee.sourceGroup)&&Ee.item.category==="symbol").map(Ee=>Ee.item.fields.find(He=>He.label==="Block asset ID")?.value.trim()??"").filter(Boolean)),Fe=new Set;await Promise.all([...et].map(async Ee=>{try{await ev(Ee),Fe.add(Ee)}catch{}}));const Be=$S(he,fe,Fe);if(JSON.stringify(Sn())!==z)throw new Error("The local standards library changed while this source was being checked. No approval changes were saved; retry to use the latest records.");yi(Be.library),k(Be.library.reviewCandidates.filter(Ee=>Ee.status==="needs-review").length);const ma=Object.values(Be.skipped).reduce((Ee,He)=>Ee+He,0);D(`${$.label}: ${ue}${be}`+(Be.approvedSymbols?`${Be.approvedSymbols} layer-matched symbol(s) approved for shared PFD/P&ID use; ${Be.approvedLayers} placement layer(s) approved or updated.`:"0 symbols approved. Only exact placement layers with local block files and a matching layer record can be approved.")),ma&&D(Ee=>`${Ee} ${Be.skipped.missingAsset} missing asset(s), ${Be.skipped.unsupportedLayer} internal/unsupported layer item(s), ${Be.skipped.ambiguousLayer} ambiguous layer item(s), ${Be.skipped.missingLayer} missing layer record(s), and ${Be.skipped.invalidCandidate} invalid item(s) stayed unapproved.`)}catch(he){D(""),w(he instanceof Error?he.message:"The categorized CAD mappings could not be approved locally.")}finally{Z(!1)}}};return c.jsxs("section",{className:"local-cad-library","aria-labelledby":"local-library-title","data-testid":"panel-local-cad-library",children:[c.jsxs("div",{className:"local-library-heading",children:[c.jsx("div",{className:"local-library-icon",children:c.jsx(kp,{size:17})}),c.jsxs("div",{className:"local-library-title",children:[c.jsx("div",{className:"pdf-kicker",children:"SOURCE DRAWINGS · LOCAL ONLY"}),c.jsx("h3",{id:"local-library-title",children:s?"Client Source Library":"Legends Library"}),c.jsx("p",{children:s?`Manage CAD sources for ${o||"this client folder"}. Company standards remain the common default.`:"Add common company standards here. Select a Client folder first to add client-specific sources."})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-files",children:[A?c.jsx(Oa,{size:14,className:"pdf-spin"}):c.jsx(Jr,{size:14}),A?"Reading…":"Add DWG/DXF",c.jsx("input",{type:"file",accept:".dwg,.dxf,application/acad,application/x-dwg,application/dxf",multiple:!0,"aria-label":"Add local DWG or DXF source files",disabled:A,onChange:$=>{const fe=[...$.currentTarget.files??[]];fe.length&&Pe(fe),$.currentTarget.value=""},"data-testid":"input-add-cad-files"})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-archive",children:[A?c.jsx(Oa,{size:14,className:"pdf-spin"}):c.jsx(Lp,{size:14}),A?"Reading ZIP…":"Add ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Add a ZIP with PDF and DWG/DXF source files",disabled:A,onChange:$=>{const fe=$.currentTarget.files?.[0];fe&&Ie(fe),$.currentTarget.value=""},"data-testid":"input-add-cad-archive"})]})]}),c.jsxs("div",{className:"local-library-privacy",children:[c.jsx(Qn,{size:14}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay in this browser."})," ",s?"This client source list is separate from the company Legends Library and other client folders.":"Company-standard sources remain shared defaults; project/client examples stay separate from them."]})]}),c.jsxs("div",{className:"local-library-extraction",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:[c.jsx(Sw,{size:14})," Extract drawing standards locally"]}),c.jsx("span",{children:"Package eligible DWG/DXF drawings with a Windows AutoCAD script. It exports only blocks actually inserted on approved equipment, instrument, or inline-component layers—unused internal definitions are skipped. Source drawings are not uploaded or changed."})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{gt()},disabled:!ie.length||te,"data-testid":"button-download-cad-extractor",children:[te?c.jsx(Oa,{size:13,className:"pdf-spin"}):c.jsx(Rr,{size:13}),te?"Preparing…":"Download extractor kit"]})]}),ie.length>0&&c.jsxs("div",{className:"local-library-import",children:[c.jsxs("label",{children:[c.jsx("span",{children:"Import AutoCAD extraction"}),c.jsx("select",{value:ae||ie[0].id,disabled:Y||oe,onChange:$=>{pe($.target.value),D(""),ee([])},"aria-label":"Source drawing for extracted CAD standards",children:ie.map($=>c.jsxs("option",{value:$.id,children:[$.label," · ",$.format??"DWG"," · ",U[$.id]?.pending??0," pending / ",U[$.id]?.approved??0," approved",$.projectLabel?` · ${$.projectLabel}`:""]},$.id))})]}),c.jsxs("label",{className:"btn subtle local-library-import-button",children:[oe?c.jsx(Oa,{size:13,className:"pdf-spin"}):c.jsx(Jr,{size:13}),oe?"Importing…":"Import extraction ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Import AutoCAD extraction ZIP",disabled:oe||Y,onChange:$=>{const fe=$.currentTarget.files?.[0];fe&&Ft(fe),$.currentTarget.value=""}})]})]}),!s&&ie.some($=>$.category==="company-standard")&&c.jsxs("div",{className:"local-library-approval",children:[c.jsxs("div",{children:[c.jsx("strong",{children:"Approve supplied company symbols by placement layer"}),c.jsxs("span",{"data-testid":"status-selected-cad-source",children:[ie.find($=>$.id===ae)?.label,": ",U[ae]?.pending??0," pending symbols · ",U[ae]?.approved??0," approved · ",U[ae]?.dismissed??0," dismissed.",U[ae]?.layers.length?` Approved placement layers: ${U[ae].layers.join(", ")}.`:""]}),c.jsx("span",{children:"Saved DXF: this action first extracts individual native blocks locally, then approves eligible placement-layer mappings. Existing approvals, dismissed records and saved block files are not replaced. DWG: import its AutoCAD extraction ZIP first."}),c.jsx("span",{children:"Approves only the selected company source; repeat for each source. EQUIP/f_Equip → equipment, f_Inst → instruments, f_Pipe_Inline → inline components. Mappings are shared across PFD and P&ID; internal, ambiguous, and missing-asset items stay pending."})]}),c.jsxs("button",{className:"btn primary",type:"button",disabled:Y||oe||!ie.some($=>$.id===ae&&$.category==="company-standard"),onClick:()=>{Et()},"data-testid":"button-approve-categorized-company-symbols",children:[Y?c.jsx(Oa,{size:13,className:"pdf-spin"}):c.jsx(Hs,{size:13}),Y?"Extracting / approving locally…":"Approve selected source"]})]}),C&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-library-error",children:[c.jsx(_r,{size:15}),c.jsx("span",{children:C})]}),N&&c.jsx("p",{className:"local-library-message",role:"status","aria-live":"polite","data-testid":"status-cad-source-action",children:N}),j.length>0&&c.jsxs("details",{className:"local-library-message",children:[c.jsxs("summary",{children:[j.length," excluded / review-required DXF items — show reasons"]}),c.jsx("ul",{children:j.map($=>c.jsxs("li",{children:[$.blockName,": ",$.reason]},$.blockName))})]}),c.jsxs("div",{className:"local-library-summary","aria-label":"Local library totals",children:[c.jsxs("span",{children:[c.jsx("strong",{children:V.length})," saved CAD sources",s?` for ${o||"this client"}`:` for ${r}`]}),c.jsxs("span",{children:[c.jsx("strong",{children:de["company-standard"]})," Legends Library sources"]}),c.jsxs("span",{children:[c.jsx("strong",{children:de["project-example"]+de["markup-reference"]})," reference drawings"]}),de["needs-review"]>0&&c.jsxs("span",{className:"local-library-review-count",children:[c.jsx("strong",{children:de["needs-review"]})," need review"]})]}),c.jsx(TA,{discipline:r}),P>0&&c.jsxs(ha,{href:r==="PFD"?"/standards-review/pfd":"/standards-review/pid",className:"btn primary local-library-review-link","data-testid":"link-review-extracted-standards",children:[c.jsx(gw,{size:15}),"Review extracted standards",c.jsx("span",{children:P})]}),ve&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-source-folder-mismatch",children:[c.jsx(_r,{size:15}),c.jsx("span",{children:"These staged drawings belong to a different folder. Re-select that client or add them again here."})]}),v&&c.jsx("div",{className:"local-library-archive-summary",role:"status",children:v}),p.length>0&&c.jsxs("div",{className:"local-library-pdf-list","aria-label":"PDF files found in ZIP",children:[p.map($=>c.jsxs("div",{className:"local-library-pdf-row",children:[c.jsx(Zn,{size:15}),c.jsx("span",{children:$.label}),c.jsx("span",{className:"pdf-file-meta",children:Yu($.file.size)})]},$.id)),c.jsxs("button",{className:"btn subtle",type:"button",disabled:O,onClick:()=>{a(p.map(({file:$})=>$)),R(!0)},"data-testid":"button-add-archive-pdfs",children:[O?c.jsx(Hs,{size:14}):c.jsx(Jr,{size:14}),O?"PDFs added to queue":"Add PDF(s) to conversion queue"]})]}),y.length>0&&c.jsxs("div",{className:"local-library-staging",children:[c.jsxs("div",{className:"local-library-staging-title",children:[c.jsx("strong",{children:s?"Choose how each client CAD drawing will be used":"Choose what each CAD drawing is for"}),c.jsx("span",{children:"Unmarked files will not be saved."})]}),y.map($=>c.jsxs("label",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-name",children:[c.jsx("span",{className:"local-library-source-id",children:$.label}),c.jsxs("span",{className:"local-library-review-filename",title:$.reviewFilename,children:["Selected filename: ",$.reviewFilename]})]}),c.jsx("span",{className:"pdf-file-meta",children:Yu($.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Category for ${$.label}`,value:$.category,onChange:fe=>{const he=fe.target.value;m(z=>z.map(ue=>ue.id===$.id?{...ue,category:he}:ue))},"data-testid":`select-category-${$.id}`,children:Object.entries(xp).filter(([fe])=>s?["needs-review","project-example","markup-reference","ignore"].includes(fe):["needs-review","company-standard","ignore"].includes(fe)).map(([fe,he])=>c.jsx("option",{value:fe,children:ky(fe,s)},fe))}),c.jsx("select",{"aria-label":`Discipline for ${$.label}`,value:$.discipline,onChange:fe=>{const he=fe.target.value;m(z=>z.map(ue=>ue.id===$.id?{...ue,discipline:he}:ue))},"data-testid":`select-discipline-${$.id}`,children:["PFD","P&ID","Shared"].map(fe=>c.jsx("option",{value:fe,children:fe},fe))}),["project-example","markup-reference"].includes($.category)&&!s&&c.jsx("input",{"aria-label":`Project code for ${$.label}`,placeholder:"Neutral project code",value:$.projectLabel,onChange:fe=>m(he=>he.map(z=>z.id===$.id?{...z,projectLabel:fe.target.value}:z)),"data-testid":`input-project-${$.id}`}),s&&["project-example","markup-reference"].includes($.category)&&c.jsx("span",{className:"local-library-scope-tag",children:"Saved only in this client folder"})]})]},$.id)),c.jsxs("button",{className:"btn primary local-library-save",type:"button",disabled:L||ve||y.some($=>$.category==="needs-review"||["project-example","markup-reference"].includes($.category)&&!$.projectLabel?.trim()),onClick:()=>{vt()},"data-testid":"button-save-local-library",children:[L?c.jsx(Oa,{size:14,className:"pdf-spin"}):c.jsx(qm,{size:14}),L?"Saving locally…":"Save reviewed sources locally"]})]}),V.length>0&&c.jsxs("details",{className:"local-library-saved-list",children:[c.jsxs("summary",{children:["Saved source drawings for ",r," (",V.length,")"]}),c.jsx("div",{className:"local-library-saved-items",children:V.map($=>c.jsxs("div",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-id",children:[$.label," · ",$.format??"DWG",s?` · ${$.category==="company-standard"?"Company standard":"This client"}`:$.projectLabel?` · ${$.projectLabel}`:""]}),c.jsx("span",{className:"pdf-file-meta",children:Yu($.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Change category for ${$.label}`,value:(g[$.id]??$).category,disabled:!!(s&&$.category==="company-standard"),onChange:fe=>at($,{category:fe.target.value}),"data-testid":`saved-category-${$.id}`,children:Object.entries(xp).filter(([fe])=>!s||["project-example","markup-reference","ignore"].includes(fe)||$.category==="company-standard"&&fe==="company-standard").map(([fe,he])=>c.jsx("option",{value:fe,children:ky(fe,s)},fe))}),c.jsx("select",{"aria-label":`Change discipline for ${$.label}`,value:(g[$.id]??$).discipline,disabled:!!(s&&$.category==="company-standard"),onChange:fe=>at($,{discipline:fe.target.value}),"data-testid":`saved-discipline-${$.id}`,children:["PFD","P&ID","Shared"].map(fe=>c.jsx("option",{value:fe,children:fe},fe))}),!s&&$.format==="DXF"&&(g[$.id]??$).category==="company-standard"&&c.jsxs("label",{children:[c.jsx("input",{type:"checkbox","aria-label":`Use ${$.label} as global Legends master`,checked:!!(g[$.id]??$).standardsMaster,onChange:fe=>at($,{standardsMaster:fe.target.checked})}),"Global Legends master · all ",$.discipline==="Shared"?"PFD/P&ID":$.discipline," projects"]}),!s&&["project-example","markup-reference"].includes((g[$.id]??$).category)&&c.jsx("input",{"aria-label":`Neutral project code for ${$.label}`,placeholder:"Neutral project code",value:(g[$.id]??$).projectLabel??"",onChange:fe=>at($,{projectLabel:fe.target.value}),"data-testid":`saved-project-${$.id}`}),c.jsxs("button",{className:"btn subtle local-library-save-row",type:"button",disabled:!!(s&&$.category==="company-standard"),onClick:()=>{ut($)},"data-testid":`button-save-source-${$.id}`,children:[c.jsx(qm,{size:12})," Save"]})]})]},$.id))})]}),c.jsx("p",{className:"local-library-limit",children:"Extracted records enter the standards review queue. Only approved mappings are offered to the matching PFD or P&ID runner. Original DWG/DXF sources stay local; only individually exported block files are included with approved mappings."})]})}const jy={BLOCK:"symbol",LAYER:"layer",TEXT_STYLE:"textStyle",LINETYPE:"linetype",DIMENSION_STYLE:"dimensionStyle"},Sp=100*1024*1024,Tp=500*1024*1024,DA="pid-studio-local-pdfs",fn="meta",ts="bytes",bi="extractedText";class ta extends Error{code;constructor(r,s){super(s),this.code=r}}let Bs=null,qy=Promise.resolve();function rs(){return Bs||(Bs=new Promise((a,r)=>{if(typeof indexedDB>"u"){r(new ta("storage","This browser does not allow local file storage."));return}const s=indexedDB.open(DA,2);s.onupgradeneeded=o=>{const l=s.result;o.oldVersion<1&&(l.createObjectStore(fn,{keyPath:"id"}).createIndex("discipline","discipline"),l.createObjectStore(ts)),o.oldVersion<2&&l.createObjectStore(bi)},s.onsuccess=()=>{s.result.onversionchange=()=>{s.result.close(),Bs=null},a(s.result)},s.onerror=()=>{Bs=null,r(new ta("storage","Local storage could not be opened."))},s.onblocked=()=>{Bs=null,r(new ta("storage","Local file storage is busy in another tab. Close that tab and reload."))}})),Bs}function Ri(a){return new Promise((r,s)=>{a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)})}function mc(a){return new Promise((r,s)=>{a.oncomplete=()=>r(),a.onerror=()=>s(a.error),a.onabort=()=>s(a.error??new ta("storage","Local storage write was stopped."))})}function yc(a){const r=qy.then(a,a);return qy=r.catch(()=>{}),r}async function hv(a){const r=await rs();return(await Ri(r.transaction(fn).objectStore(fn).index("discipline").getAll(a))).sort((o,l)=>o.aliasNumber-l.aliasNumber)}async function NA(){const a=await rs();return(await Ri(a.transaction(fn).objectStore(fn).getAll())).reduce((s,o)=>s+o.size,0)}async function My(a){const r=globalThis.crypto?.subtle;if(!r)throw new Error("hash-unsupported");const s=await r.digest("SHA-256",a);return Array.from(new Uint8Array(s)).map(o=>o.toString(16).padStart(2,"0")).join("")}function CA(a,r){return yc(async()=>{if(!r())throw new ta("cancelled","Cancelled.");const s=a.bytes.byteLength;if(s>Sp)throw new ta("too-large","This PDF is larger than 100 MB.");const l=(await rs()).transaction([fn,ts],"readwrite"),u=mc(l);u.catch(()=>{});const g=l.objectStore(fn),f=await Ri(g.getAll());if(!r())throw l.abort(),new ta("cancelled","Cancelled.");if(f.some(b=>b.discipline===a.discipline&&b.hash===a.hash))throw l.abort(),new ta("duplicate","This PDF has the same content as a saved file.");if(f.reduce((b,v)=>b+v.size,0)+s>Tp)throw l.abort(),new ta("total-limit","Saved PDFs would pass the 500 MB total limit.");const m=f.filter(b=>b.discipline===a.discipline).reduce((b,v)=>Math.max(b,v.aliasNumber),0)+1,p={id:globalThis.crypto?.randomUUID?.()??`pdf-${Date.now()}-${Math.random().toString(36).slice(2)}`,discipline:a.discipline,aliasNumber:m,alias:`PDF ${m}`,originalName:a.originalName?.trim()||void 0,size:s,pageCount:a.pageCount,hash:a.hash,addedAt:Date.now(),analysisStatus:"queued",analysisPagesDone:0,analysisRecordCount:0,autocadStatus:"not-connected"};g.put(p),l.objectStore(ts).put(a.bytes,p.id);try{await u}catch(b){throw b instanceof ta?b:new ta("storage","The browser could not save this PDF. Storage may be full.")}return p})}async function ei(a){const r=await rs(),s=await Ri(r.transaction(ts).objectStore(ts).get(a));if(!s)throw new ta("storage","Saved PDF data was not found.");return s}function RA(a,r){return yc(async()=>{const o=(await rs()).transaction(bi,"readwrite"),l=mc(o);o.objectStore(bi).put({pdfId:a,pages:r,savedAt:Date.now()},a);try{await l}catch{throw new ta("storage","PDF text was read, but the browser could not save the full text index. The original PDF remains saved; free browser storage and retry EDE.")}})}function Fl(a,r){return yc(async()=>{const o=(await rs()).transaction(fn,"readwrite"),l=mc(o),u=o.objectStore(fn),g=await Ri(u.get(a));if(!g)throw o.abort(),new ta("storage","The saved PDF record could not be found.");const f={...g,...r};return u.put(f),await l,f})}function gv(a){return yc(async()=>{const s=(await rs()).transaction([fn,ts,bi],"readwrite");a.forEach(o=>{s.objectStore(fn).delete(o),s.objectStore(ts).delete(o),s.objectStore(bi).delete(o)}),await mc(s)})}async function _A(a){const r=await hv(a);await gv(r.map(s=>s.id))}class Xl extends Error{constructor(r,s,o){super(`Page ${r}: ${s} failed.`,{cause:o}),this.page=r,this.stage=s,this.name="PdfExtractionError"}page;stage}function $y(a){const r=a instanceof Xl?a.cause:a,s=r instanceof Error?r.name:"",o=r instanceof Error?r.message:typeof r=="string"?r:"",l=a instanceof Xl?`Page ${a.page} stopped during ${a.stage}. `:"EDE extraction stopped. ";return s==="QuotaExceededError"?`${l}Browser storage is full. Back up your records before freeing space, then retry EDE. Your PDF remains saved.`:/memory|allocation|out of bounds/i.test(o)?`${l}The browser ran out of processing memory. Close other tabs and retry, or use a desktop browser. Your PDF remains saved.`:/fetch|network|importscripts|load.*(worker|core|language)|failed to load/i.test(o)||a instanceof Xl&&a.stage==="OCR startup"?`${l}The OCR engine could not start. Check internet access to the OCR downloads, then retry EDE. Your PDF remains saved.`:`${l}The PDF could not be processed${s?` (${s.replace(/[^a-zA-Z0-9]/g,"").slice(0,60)})`:""}. Retry EDE; if it repeats, report this message. Your PDF remains saved.`}const IA=/\b(?:[A-Z]{1,8}\s*[-–]\s*)+\d{1,6}[A-Z0-9]*(?:\s*[-–]\s*[A-Z0-9]{1,8}){0,3}\b/g,mv=/^(?:AI|DI|FI|FIC|FIT|FQI|LI|LIC|LS|LSH|LSL|PI|PIC|PDI|PSH|PSL|TI|TIC|TSH|TSL|TT|PT|FT|LT|FC|PC|TC|LC|AT|AIT|XV|ZSO|ZSC)$/,LA=/^(?:XV|HV|BV|CV|PCV|FCV|LCV|TCV|PSV|PRV|MOV|SDV|BDV|NRV)$/,PA=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/g,kA=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/i;function yv(a){const r=a.map((y,m)=>({token:y,index:m,value:y.text.trim().toUpperCase()})).filter(({value:y})=>mv.test(y)),s=a.map((y,m)=>({token:y,index:m,value:y.text.trim().toUpperCase()})).filter(({value:y})=>/^\d{2,5}[A-Z]?$/.test(y)),o=[];for(const y of r){const m=y.token.location,p=m.x+m.width/2,b=m.y+m.height/2;for(const v of s){if(y.index===v.index)continue;const x=v.token.location,N=x.x+x.width/2,D=x.y+x.height/2,A=Math.max(m.height,x.height,.004),S=N-p,L=D-b,_=Math.abs(L)<=A*.55&&S>=-A*.4&&S<=A*4,C=L>A*.35&&L<=A*3.2&&Math.abs(S)<=A*1.8;if(!_&&!C)continue;const w=_?1-Math.abs(L)/(A*.55)-Math.max(0,S)/(A*8):.85-L/(A*10)-Math.abs(S)/(A*8);o.push({functionToken:y.token,numberToken:v.token,score:w})}}const l=new Map,u=new Map,g=y=>{const m=[...y].sort((p,b)=>b.score-p.score);if(m.length&&!(m.length>1&&m[0].score-m[1].score<.18))return m[0]};for(const y of r.map(({token:m})=>m)){const m=g(o.filter(p=>p.functionToken===y));m&&l.set(y,m)}for(const y of s.map(({token:m})=>m)){const m=g(o.filter(p=>p.numberToken===y));m&&u.set(y,m)}const f=[];for(const y of o){if(l.get(y.functionToken)!==y||u.get(y.numberToken)!==y)continue;const m=y.functionToken.text.trim().toUpperCase(),p=y.numberToken.text.trim().toUpperCase();f.push({tag:`${m}-${p}`,type:"Instrument",tagPrefix:m,tagSequence:p,tagSuffix:"",pageNumber:y.functionToken.location.pageNumber,sourceLocations:[y.functionToken.location,y.numberToken.location]})}return f}function bv(a,r,s,o,l,u,g){const f=Math.max(0,Math.min(1,o/r)),y=Math.max(0,Math.min(1,l/s)),m=Math.max(f,Math.min(1,u/r)),p=Math.max(y,Math.min(1,g/s));return m-f<1e-4||p-y<1e-4?null:{pageNumber:a,x:f,y,width:m-f,height:p-y}}function Fy(a,r,s){const o=[s.convertToViewportPoint(a.x,a.y),s.convertToViewportPoint(a.x+a.width,a.y),s.convertToViewportPoint(a.x,a.y+a.height),s.convertToViewportPoint(a.x+a.width,a.y+a.height)];return bv(r,s.width,s.height,Math.min(...o.map(l=>l[0]??0)),Math.min(...o.map(l=>l[1]??0)),Math.max(...o.map(l=>l[0]??0)),Math.max(...o.map(l=>l[1]??0)))}function OA(a,r,s){const o=[],l=[];for(const u of a){if(!u.text||!u.bbox)continue;const g=bv(r,s.pageWidth,s.pageHeight,s.left+u.bbox.x0,s.top+u.bbox.y0,s.left+u.bbox.x1,s.top+u.bbox.y1);g&&(l.push({text:u.text,location:g}),o.push(...Wl(u.text,r).map(f=>({...f,sourceLocations:[g]}))))}return[...o,...yv(l)]}function jA(a,r){const s=new Map;for(const o of[...a??[],...r??[]]){const l=[o.pageNumber,o.x.toFixed(4),o.y.toFixed(4),o.width.toFixed(4),o.height.toFixed(4)].join(":");!s.has(l)&&s.size<500&&s.set(l,o)}return[...s.values()]}function qA(a){let r="",s;for(const o of a){const l=o.str.replace(/\s+/g," ").trim();if(l){if(s){const u=Math.max(1,(s.fontSize+o.fontSize)/2),g=Math.abs(o.y-s.y)<=Math.max(1,u*.3),f=o.x-(s.x+s.width),y=g&&f>=-u*.5&&f<=u*.35;r+=y?"":g?" ":`
`,s.hasEOL&&!r.endsWith(`
`)&&(r+=`
`)}r+=l,s=o}}return r}function Uy(a,r=1700,s=120){if(a<=r+s)return[0];const o=r-s,l=[];for(let u=0;u<a;u+=o){const g=a-(u+r);if(g>0&&g<=s&&(u=a-r),l.push(u),u+r>=a)break}return l}function Wl(a,r){const s=new Map,o=a.toUpperCase();for(const l of o.matchAll(IA)){const u=l[0].replace(/[–\s]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),g=u.split("-").filter(Boolean),f=u.match(/^([A-Z]{1,8})-(\d{1,6})(.*)$/);if(!f||u.length<3||g.length>6)continue;const y=f[1],m=/^OPC$/.test(y)?"OPC":LA.test(y)?"Valve":mv.test(y)?"Instrument":g.length>=4||/^(?:L|LINE|PIPE)$/.test(y)?"Pipe Run":"Equipment",p=Math.max(0,(l.index??0)-180),b=Math.min(o.length,(l.index??0)+l[0].length+180),v=o.slice(p,b),x=v.match(/\b(?:NOMINAL\s*(?:DIA(?:METER)?|SIZE)|NPS|DN)\s*[:#=-]?\s*((?:(?:NPS|DN)\s*)?\d{1,3}(?:\s*\/\s*\d{1,2})?(?:\.\d+)?\s*(?:MM|IN(?:CH)?)?["”]?)/i)?.[1]??"",N=v.match(/\b(?:PIPING|PIPE)\s*(?:MATERIAL|MATL)\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})/i)?.[1]??"",D=v.match(/\b(?:DESIGN\s+FLOW|FLOW(?:\s+RATE)?)\s*[:=]?\s*([\d.,]+\s*(?:KG\/H|M3\/H|NM3\/H|T\/H|L\/S|M3\/D|GPM|M\/S)?)/i)?.[1]??"",A=v.match(/\b(?:HEAT\s+TRACING|HEAT\s+TRACE)\s*[:=]?\s*(YES|NO|ELECTRIC|STEAM|NONE|N\/A)\b/i)?.[1]??"",S=v.match(/\bINSULATION\s*[:=]?\s*([A-Z0-9][A-Z0-9._/-]{0,12})/i)?.[1]??"",_=f[3].split("-").filter(Boolean).at(-1)??"",C=m==="Pipe Run"&&/[A-Z]/i.test(_)&&/\d/.test(_)?_:"",w=v.match(kA)?.[1]??C,O=`${m}:${u.toLowerCase()}`;s.has(O)||s.set(O,{tag:u,type:m,tagPrefix:y,tagSequence:f[2],tagSuffix:f[3].replace(/^-/,""),pageNumber:r,nominalDiameter:x.replace(/\s+/g," ").trim(),pipingMaterial:N,lineSpec:w,flow:D,heatTracing:A,insulation:S})}for(const l of o.matchAll(PA)){const u=l[1].replace(/\s+/g,"").toUpperCase(),g=`Line Spec:${u.toLowerCase()}`;s.has(g)||s.set(g,{tag:u,type:"Line Spec",tagPrefix:"LINE SPEC",tagSequence:u,tagSuffix:"",lineSpec:u,pageNumber:r})}return[...s.values()]}const MA=/^(?:(?:GENERAL|PROCESS|DESIGN|SAFETY|OPERATING|CONSTRUCTION)\s+)?NOTES?\s*[:.-]?\s*(.*)$/i,$A=/^(?:LEGENDS?|ABBREVIATIONS?|SYMBOLS?|REFERENCES?|REVISION(?:S)?|DRAWING\s+(?:TITLE|NO|NUMBER)|PROJECT|CLIENT|SCALE|TITLE\s*BLOCK|EQUIPMENT\s+LIST|LINE\s+LIST)\b/i,FA=/^(?:(?:NOTE\s*)?\d{1,3}\s*[.)-]\s+|[A-Z]\s*[.)]\s+).+/i,UA=/^(?:GENERAL\s+)?NOTE(?:\s+\d+)?\s*[:#-]\s*.+/i;function BA(a){const r=[];for(const s of a){const o=[{text:s.searchableText,label:"PDF text"},...s.ocrTiles.map(f=>({text:f,label:"OCR text"}))],l=new Set,u=[];for(const f of o){let y=!1,m="";const p=()=>{const b=m.replace(/\s+/g," ").trim();if(b.length>=8){const v=b.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();v&&!l.has(v)&&(l.add(v),u.push({text:b,label:f.label}))}m=""};for(const b of f.text.replace(/\r/g,`
`).split(`
`)){const v=b.replace(/\s+/g," ").trim();if(!v)continue;const x=v.match(MA);if(x){p(),y=!0,x[1]&&(m=x[1].trim());continue}if(y&&$A.test(v)){p(),y=!1;continue}if(UA.test(v)){p(),m=v,y=!0;continue}if(FA.test(v)){const N=v.length>=36&&v.split(/\s+/).length>=7;y||N?(p(),m=v,y=!0):p();continue}y?m=m?`${m} ${v}`:v:p()}p()}let g=0;for(const f of u){const y=[];for(let m=0;m<f.text.length;){let p=Math.min(m+1500,f.text.length);if(p<f.text.length){const b=f.text.lastIndexOf(" ",p);b>m+700&&(p=b)}y.push(f.text.slice(m,p)),m=p}for(const m of y){const p=m.trim();p&&(g+=1,r.push({tag:`NOTE-P${s.pageNumber}-${g}`,type:"Item Note",tagPrefix:"NOTE",tagSequence:String(g),tagSuffix:`P${s.pageNumber}`,pageNumber:s.pageNumber,description:`${f.label} note — review against source: ${p}`}))}}}return r}function Hu(a,r){const s=new Map(a.map(o=>[`${o.type}:${o.tag.toLowerCase()}`,{...o}]));for(const o of r){const l=`${o.type}:${o.tag.toLowerCase()}`,u=s.get(l);if(!u){s.set(l,{...o});continue}u.sourceLocations=jA(u.sourceLocations,o.sourceLocations);for(const g of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])!u[g]&&o[g]&&(u[g]=o[g])}return[...s.values()]}async function zA(a,r,s=()=>!0){const[o,l]=await Promise.all([pn(()=>import("./pdf-TYrZqVzP.js"),[]),pn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);o.GlobalWorkerOptions.workerSrc=l.default;const u=o.getDocument({data:new Uint8Array(a.slice(0))}),g=await u.promise;let f=null;const y=new Map,m=[];let p=0,b=1,v="PDF text";try{for(let x=1;x<=g.numPages;x++){if(b=x,v="PDF text",!s())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const N=await g.getPage(x),D=await N.getTextContent(),A=N.getViewport({scale:1}),S=D.items.flatMap(R=>{if(!("str"in R)||typeof R.str!="string"||!R.str||!("transform"in R)||!Array.isArray(R.transform))return[];const P=R.transform;return[{str:R.str,x:P[4]??0,y:P[5]??0,width:"width"in R&&typeof R.width=="number"?R.width:0,height:"height"in R&&typeof R.height=="number"?R.height:0,fontSize:Math.hypot(P[0]??0,P[1]??0)||10,hasEOL:"hasEOL"in R&&R.hasEOL===!0}]}),L=qA(S),_=[];let C=Wl(L,x);const w=S.flatMap(R=>{const P=Fy({...R,height:R.height||R.fontSize},x,A);return P?Wl(R.str,x).map(k=>({...k,sourceLocations:[P]})):[]}),O=S.flatMap(R=>{const P=Fy({...R,height:R.height||R.fontSize},x,A);return P?[{text:R.str,location:P}]:[]});if(C=Hu(C,[...w,...yv(O)]),L.replace(/\s/g,"").length<800||C.length<20){if(r?.(x,g.numPages,"OCR"),!f){v="OCR startup";const{createWorker:pe,PSM:oe}=await pn(async()=>{const{createWorker:ne,PSM:Y}=await import("./index-Cggiygbx.js").then(Z=>Z.i);return{createWorker:ne,PSM:Y}},__vite__mapDeps([0,1]));f=await pe("eng",1,{workerPath:"https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js",corePath:"https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0",langPath:"https://tessdata.projectnaptha.com/4.0.0"}),await f.setParameters({tessedit_pageseg_mode:oe.SPARSE_TEXT,preserve_interword_spaces:"1"})}const R=N.getViewport({scale:1});v="page image";const P=Math.min(3.5,3200/Math.max(R.width,R.height)),k=N.getViewport({scale:P}),te=document.createElement("canvas"),X=document.createElement("canvas");te.width=Math.ceil(k.width),te.height=Math.ceil(k.height);const ae=te.getContext("2d",{willReadFrequently:!1});if(!ae)throw new Error("This browser cannot prepare a page image for local OCR.");try{await N.render({canvas:te,canvasContext:ae,viewport:k}).promise;const pe=1700,oe=120,ne=[],Y=Uy(te.width,pe,oe),Z=Uy(te.height,pe,oe);for(const ge of Z)for(const we of Y){if(!s())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const j=Math.min(te.width<=pe+oe?te.width:pe,te.width-we),ee=Math.min(te.height<=pe+oe?te.height:pe,te.height-ge);X.width=j,X.height=ee;const U=X.getContext("2d",{willReadFrequently:!1});if(!U)throw new Error("This browser cannot prepare a page image for local OCR.");U.drawImage(te,we,ge,j,ee,0,0,j,ee),v="OCR reading";const V=await f.recognize(X);_.push(V.data.text),ne.push(...Wl(V.data.text,x)),ne.push(...OA(V.data.words??[],x,{left:we,top:ge,pageWidth:te.width,pageHeight:te.height}))}p+=1,C=Hu(C,ne)}finally{te.width=0,te.height=0,X.width=0,X.height=0}}else r?.(x,g.numPages,"PDF text");for(const R of C){const P=`${R.type}:${R.tag.toLowerCase()}`,k=y.get(P);y.set(P,k?Hu([k],[R])[0]:R)}m.push({pageNumber:x,searchableText:L,ocrTiles:_}),N.cleanup()}return{candidates:[...y.values()],pages:g.numPages,ocrPages:p,pageText:m}}catch(x){throw s()?new Xl(b,v,x):x}finally{await f?.terminate().catch(()=>{}),await u.destroy().catch(()=>{})}}const vv=["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef","placementDrawingRef","nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description","notes","sourcePage","reviewStatus"],Wn=[...vv,"stableId"],Ev=/^[0-9A-F]{32}$/,YA=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,HA=["plantGroup","fluidService","nominalDiameter","pipingMaterial","lineSpec","insulation","heatTracing","groupStatus"],VA=["","Start","Continue","Branch","Merge","End-of-Group"];function wv(){return crypto.randomUUID().replaceAll("-","").toUpperCase()}function Vp(a){const r=a.toUpperCase();if(Ev.test(r))return r;if(YA.test(a))return r.replaceAll("-","");throw new Error("A Stable ID must contain exactly 32 letters or numbers (A–F, 0–9).")}function Tn(a,r){return r==="stableId"?a.id:a[r]}function GA(a,r){const s=a.placementDrawingRef.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase();return s?[r.id,r.name].map(l=>l.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase()).includes(s)?"current":"another":"available"}const It={itemTag:"Item Tag",tagPrefix:"Tag Prefix",tagSequence:"Tag Sequence",tagSuffix:"Tag Suffix",equipmentClass:"Equipment Class",equipmentType:"Equipment Type",equipmentName:"Equipment Name",drawingRef:"Source Drawing / Page",placementDrawingRef:"Placed on Drawing",nominalDiameter:"Nominal Diameter",plantGroup:"Plant Group",fluidService:"Fluid / Service",pipingMaterial:"Piping Material Class",lineSpec:"Line Spec",flow:"Flow",flowDirection:"Flow Direction",heatTracing:"Heat Tracing",insulation:"Insulation",fromTag:"From",toTag:"To",groupStatus:"Group Status",opcDrawing:"OPC Drawing",connection:"Connection",description:"Description",notes:"Notes",sourcePage:"Source page",reviewStatus:"Review status",stableId:"Stable ID"},ac=vv,zs={itemTag:"The tag printed beside the equipment, line, valve, or instrument. A repeated Pipe Run tag needs different line data.",tagPrefix:"The letter code at the start of the tag.",tagSequence:"The main number in the tag.",tagSuffix:"Extra letters or numbers after the main tag number.",equipmentClass:"The approved class or family for this equipment.",equipmentType:"What the equipment is, such as a pump or vessel, when the drawing states it.",equipmentName:"The equipment name or service, only when the source clearly labels it.",drawingRef:"The source drawing or PDF page where this record came from.",placementDrawingRef:"The CAD drawing that contains this object. Blank means available or not placed. This is a reference only; it does not place or move CAD entities.",nominalDiameter:"The stated pipe or nozzle size, such as DN50 or 2 inch.",plantGroup:"The plant, unit, or area group, if stated.",fluidService:"The stated fluid or process service for this line.",pipingMaterial:"The approved piping material class or code.",lineSpec:"The piping line class/specification code. It is separate from the pipe run tag.",flow:"The stated flow value or direction. A line arrow alone is not converted to a value.",flowDirection:"The confirmed upstream/downstream flow direction.",heatTracing:"The stated heat-tracing requirement or type.",insulation:"The stated insulation requirement or code.",fromTag:"The connected source tag or point shown for this pipe run.",toTag:"The connected destination tag or point shown for this pipe run.",groupStatus:"Start, Continue, Branch, Merge, or End-of-Group for the pipe run.",opcDrawing:"The linked off-page connector drawing number, if shown.",connection:"A stated connection or connected item; line geometry is not inferred here.",description:"A short object description from the source. Blank means no clear value was found.",notes:"Drawing notes or additional comments associated with this record.",sourcePage:"The page in the original PDF where this candidate was found.",reviewStatus:"Needs review means check the tag and fields before using them.",stableId:"Permanent object identity. It stays the same when the tag, drawing, size, or geometry changes."},vi=["Equipment","Equipment Component","Equipment Heat Transfer","Equipment Mechanical","Equipment Other","Equipment Vessel","Hydraulic Circuit","Instrument","Instrument Loop","Item Note","Line Spec","Nozzle","OPC","Package","Pipe Run","Valve"],nc=a=>`pid-mapping-studio:engineering-workspace:v2:${a}`;function xv(a,r){if(!Array.isArray(a))return Ap(a);const s=a.map(o=>!o||typeof o!="object"||!Array.isArray(o.rows)?o:{...o,rows:o.rows.map(l=>{if(!l||typeof l!="object")return l;const u=typeof l.id=="string"?l.id:"";let g;try{g=Vp(u)}catch{g=wv()}g!==l.id&&r?.();const f=typeof l.description=="string"?l.description:"",y=typeof l.notes=="string",m=/^(?:PDF text|OCR text) note — review against source:\s*/iu,p=y?l.notes:l.type==="Item Note"?f.replace(m,""):"",b=!y&&l.type==="Item Note"&&f?m.test(f)?"Drawing note extracted from PDF; check the source page.":"":f;return(!y||b!==f)&&r?.(),{...l,id:g,description:b,notes:p,sourcePage:typeof l.sourcePage=="string"?l.sourcePage:"",placementDrawingRef:typeof l.placementDrawingRef=="string"?l.placementDrawingRef:"",lineSpec:typeof l.lineSpec=="string"?l.lineSpec:"",plantGroup:typeof l.plantGroup=="string"?l.plantGroup:"",fluidService:typeof l.fluidService=="string"?l.fluidService:"",flowDirection:typeof l.flowDirection=="string"?l.flowDirection:"",fromTag:typeof l.fromTag=="string"?l.fromTag:"",toTag:typeof l.toTag=="string"?l.toTag:"",groupStatus:typeof l.groupStatus=="string"?l.groupStatus:"",...l.sourceLocations===void 0?{}:{sourceLocations:l.sourceLocations},reviewStatus:l.reviewStatus==="Needs review"||l.reviewStatus==="Reviewed"?l.reviewStatus:"Manual"}})});return Ap(s)}function Ap(a){if(!Array.isArray(a)||a.length>500)throw new Error("Invalid drawing catalog. Keep a backup and do not overwrite saved data.");const r=new Set,s=new Set;let o=0;for(const l of a){if(!l||typeof l!="object"||typeof l.id!="string"||typeof l.name!="string"||!l.name.trim()||l.name.length>160||typeof l.revision!="string"||l.revision.length>80||!Array.isArray(l.rows)||r.has(l.id))throw new Error("The drawing catalog contains an invalid or duplicate drawing.");r.add(l.id);const u=new Map;for(const g of l.rows){if(g?.type==="Pipe Run"&&!VA.includes(g.groupStatus))throw new Error("Pipe Run group status must be Start, Continue, Branch, Merge, or End-of-Group.");if(!g||typeof g!="object"||typeof g.id!="string"||!Ev.test(g.id)||s.has(g.id)||!vi.includes(g.type)||ac.some(m=>typeof g[m]!="string"||g[m].length>2e3)||!["Manual","Needs review","Reviewed"].includes(g.reviewStatus)||g.sourcePdfId!==void 0&&typeof g.sourcePdfId!="string"||g.sourceLocations!==void 0&&(!Array.isArray(g.sourceLocations)||g.sourceLocations.length>500||g.sourceLocations.some(m=>{if(!m||typeof m!="object")return!0;const p=m;return!Number.isInteger(p.pageNumber)||p.pageNumber<1||!["x","y","width","height"].every(b=>typeof p[b]=="number"&&Number.isFinite(p[b]))||p.x<0||p.y<0||p.width<=0||p.height<=0||p.x>1||p.y>1||p.x+p.width>1.02||p.y+p.height>1.02}))||!g.itemTag.trim())throw new Error("Each record needs a valid Stable ID, object type, and text fields.");const f=g.itemTag.trim().toLowerCase(),y=u.get(f)??[];if(y.length&&(g.type!=="Pipe Run"||y.some(m=>m.type!=="Pipe Run"||!HA.some(p=>m[p]!==g[p]))))throw new Error("This tag is already used. Repeated Pipe Run tags need different line-defining data.");if(typeof g.x!="number"||typeof g.y!="number"||!Number.isFinite(g.x)||!Number.isFinite(g.y))throw new Error("A record contains invalid coordinates.");u.set(f,[...y,g]),s.add(g.id),o+=1}}if(o>2e4)throw new Error("This local workspace supports up to 20,000 engineering records.");return a}function Ei(a){const r=window.localStorage.getItem(nc(a));if(!r)return[];let s=!1;const o=xv(JSON.parse(r),()=>{s=!0});if(s)try{window.localStorage.setItem(nc(a),JSON.stringify(o))}catch{throw new Error("Saved records were read, but the data-format update could not be saved because browser storage is full. The original saved data was not overwritten; download a backup before freeing space.")}return o}function Xs(a){return window.localStorage.getItem(nc(a))}function Dp(a,r,s){if(Ap(r),Xs(a)!==s)throw new Error("This workspace changed in another tab. Reload before editing to avoid overwriting its records.");const o=JSON.stringify(r);return window.localStorage.setItem(nc(a),o),o}function Gp(a,r,s){return{...Object.fromEntries(ac.map(o=>[o,""])),id:wv(),type:a,itemTag:r.trim(),drawingRef:s,reviewStatus:"Manual",x:0,y:0}}function XA(a,r){return JSON.stringify({version:5,discipline:a,drawings:r},null,2)}function WA(a,r){const s=JSON.parse(a);if(![2,3,4,5].includes(s?.version)||s?.discipline!==r)throw new Error(`Choose a ${r.toUpperCase()} workspace backup. PFD and P&ID backups stay separate.`);return xv(s.drawings)}function KA(a,r){const s=new Map;for(const o of[...a??[],...r??[]]){const l=[o.pageNumber,o.x.toFixed(4),o.y.toFixed(4),o.width.toFixed(4),o.height.toFixed(4)].join(":");!s.has(l)&&s.size<500&&s.set(l,o)}return[...s.values()]}function By(a,r){const s=Gp(a.type,a.tag,`${r.alias} · Page ${a.pageNumber}`);s.tagPrefix=a.tagPrefix??"",s.tagSequence=a.tagSequence??"",s.tagSuffix=a.tagSuffix??"";for(const o of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])s[o]=a[o]??"";return s.sourcePage=String(a.pageNumber),s.sourcePdfId=r.id,s.sourceLocations=a.sourceLocations?.slice(0,500),s.reviewStatus="Needs review",a.type==="Item Note"?(s.notes=(a.description??"").replace(/^(?:PDF text|OCR text) note — review against source:\s*/iu,""),s.description="Drawing note extracted from PDF; check the source page."):s.description=a.description??"Tag candidate found in the PDF. Confirm the object type and details before using it.",s}function ZA(a,r,s){const o=Ei(a),l=o.find(x=>x.sourcePdfId===r.id);if(l){const x=new Map(s.map(L=>[L.tag.trim().toLowerCase(),L])),N=new Set(l.rows.map(L=>L.itemTag.trim().toLowerCase()));let D=!1;const A=l.rows.map(L=>{const _=x.get(L.itemTag.trim().toLowerCase());if(!_)return L;const C=KA(L.sourceLocations,_.sourceLocations),w=L.sourcePage||String(_.pageNumber);return C.length===(L.sourceLocations?.length??0)&&w===L.sourcePage?L:(D=!0,{...L,sourcePage:w,sourceLocations:C})}),S=s.flatMap(L=>{const _=L.tag.trim().toLowerCase();return!_||N.has(_)?[]:(N.add(_),D=!0,[By(L,r)])});if(D){const L=o.map(_=>_.id===l.id?{..._,rows:[...A,...S]}:_);Dp(a,L,Xs(a))}return{drawingId:l.id,recordCount:A.length+S.length}}const u=new Set(o.map(x=>x.name.toLowerCase())),g=`${r.alias} · Extracted data`;let f=g,y=2;for(;u.has(f.toLowerCase());)f=`${g} (${y++})`;const m=new Set,p=s.flatMap(x=>{const N=x.tag.trim().toLowerCase();return!N||m.has(N)?[]:(m.add(N),[By(x,r)])}),b={id:crypto.randomUUID(),name:f,revision:"Local PDF extraction · review required",sourcePdfId:r.id,sourceAlias:r.alias,rows:p},v=Xs(a);return Dp(a,[...o,b],v),{drawingId:b.id,recordCount:p.length}}function Ul(a,r,s){const o=URL.createObjectURL(new Blob([r],{type:s})),l=document.createElement("a");l.href=o,l.download=a,l.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}function QA(a){return Sv(["Object type",...Wn.map(r=>It[r])],a.map(r=>[r.type,...Wn.map(s=>Tn(r,s))]))}function Sv(a,r){const s=o=>`"${(/^[\s]*[=+\-@\t\r]/.test(o)?`'${o}`:o).replaceAll('"','""')}"`;return"\uFEFF"+[a,...r].map(o=>o.map(l=>s(String(l))).join(",")).join(`\r
`)}function JA(a,r){const s=[];let o=[],l="",u=!1;const g=a.replace(/^\uFEFF/,"");for(let v=0;v<g.length;v++){const x=g[v];if(x==='"')if(u&&g[v+1]==='"')l+='"',v++;else{if(!u&&l!=="")throw new Error("Invalid CSV quoting.");u=!u}else!u&&x===","?(o.push(l),l=""):!u&&(x===`
`||x==="\r")?(o.push(l),o.some(N=>N.trim())&&s.push(o),o=[],l="",x==="\r"&&g[v+1]===`
`&&v++):l+=x}if(u)throw new Error("The CSV has an unclosed quoted cell.");o.push(l),o.some(v=>v.trim())&&s.push(o);const f=s.shift()?.map(v=>v.trim().toLowerCase())??[],y=f.findIndex(v=>v==="object type"||v==="type"),m=ac.map(v=>f.findIndex(x=>x===v.toLowerCase()||x===It[v].toLowerCase())),p=f.findIndex(v=>v==="stableid"||v===It.stableId.toLowerCase());if(y<0||m[0]<0)throw new Error("CSV needs Object type and Item Tag columns. Download the template first.");if(!s.length)throw new Error("The CSV contains no records.");if(s.length>2e4)throw new Error("Import at most 20,000 records.");const b=new Set;return s.map((v,x)=>{if(v.length!==f.length)throw new Error(`CSV row ${x+2} has the wrong number of columns.`);const N=vi.find(A=>A.toLowerCase()===v[y]?.trim().toLowerCase());if(!N)throw new Error(`CSV row ${x+2} has an unsupported object type.`);const D=Gp(N,v[m[0]]??"",r);if(p>=0&&v[p]?.trim())try{D.id=Vp(v[p].trim())}catch{throw new Error(`CSV row ${x+2} has an invalid Stable ID.`)}if(b.has(D.id))throw new Error(`CSV row ${x+2} repeats a Stable ID.`);return b.add(D.id),ac.forEach((A,S)=>{if(m[S]<0)return;const L=v[m[S]].trim();A==="reviewStatus"?D.reviewStatus=["Needs review","Reviewed","Manual"].includes(L)?L:"Manual":D[A]=L}),D.drawingRef||(D.drawingRef=r),D})}function Vu(a){const r=a.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);for(const s of[/^(?:drawing|dwg|drg)\.?\s*(?:number|no\.?|#)\s*[:：-]?\s*(.*)$/i,/^(?:drawing\s*(?:title|name)|title)\s*[:：-]?\s*(.*)$/i]){const o=new Set;if(r.forEach((l,u)=>{const g=l.match(s);if(!g)return;const f=(g[1]||r[u+1]||"").trim();f&&f.length<=120&&!/^(?:rev(?:ision)?|scale|sheet|date|drawn|checked|drawing|dwg|title)\b/i.test(f)&&o.add(f)}),o.size===1)return[...o][0];if(o.size>1)return null}return null}function e2(a){const r=a.normalize("NFKC").replace(/[<>:"/\\|?*\u0000-\u001f]/g,"_").replace(/\s+/g," ").replace(/[. ]+$/g,"").trim().slice(0,120).replace(/[. ]+$/g,"");return/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(r)?`_${r}`:r}function t2(a){const r=[],s=/^(?:(?:drawing|dwg|drg)\.?\s*(?:number|no\.?|#|title|name)|title)\s*[:：-]?\s*$/i,o=l=>l.match(/\b(?:[A-Z]{1,6}\d{0,4}[-_/][A-Z0-9]+(?:[-_/][A-Z0-9]+)*|\d{3,}[-_/][A-Z0-9]+(?:[-_/][A-Z0-9]+)*)\b/i)?.[0]??null;for(const l of a){if(Vu(l.text)){r.push(l.text);continue}if(!s.test(l.text.trim()))continue;const g=Math.max(l.height,1),f=(p,b)=>{if(p===l||!p.text.trim()||s.test(p.text.trim()))return!1;const v=p.x-(l.x+l.width),x=l.y-p.y;return b?Math.abs(p.y-l.y)<=g*.6&&v>=-g&&v<=g*10:x>g*.6&&x<=g*3&&Math.abs(p.x-l.x)<=g*3},y=a.filter(p=>f(p,!0)).sort((p,b)=>p.x-b.x);if(y.length){const p=`${l.text}
${y.map(N=>N.text).join(" ")}`,b=Vu(p),v=b&&o(b),x=a.filter(N=>f(N,!1)&&!/\b(?:last\s+saved|date|revision|rev)\b/i.test(N.text)).map(N=>o(N.text)).some(N=>N&&v&&N.toUpperCase()!==v.toUpperCase());b&&!x&&r.push(p);continue}const m=a.filter(p=>f(p,!1));m.length===1&&r.push(`${l.text}
${m[0].text}`)}return Vu(r.join(`
`))}function Tv(a){const r=new Set(["project_title_block"]);return a.map((s,o)=>Array.from({length:s.pageCount},(l,u)=>{const g=`doc-${String(o+1).padStart(2,"0")}_page-${String(u+1).padStart(3,"0")}`;let f=e2(s.pageDrawingNames?.[u]??"")||`drawing-batch_${g}`;/_working-\d+$/i.test(f)&&(f=`sheet_${f}`);let y=f,m=0;for(;r.has(y.toLowerCase());)y=`${f}_${g}${m?`_${m}`:""}`,m++;return r.add(y.toLowerCase()),`${y}.dwg`}))}const as="P2DWG-RUNNER-2026.11.05.19",a2=`autocad-runner-${as}-with-source-pdfs.zip`;function ti(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function n2(a,r=!1,s="",o=[]){const l=Tv(a),u=a.map((f,y)=>`("${String(f.documentNumber).padStart(2,"0")}" ${ti(f.sourceFile)} ${ti(f.sourceId)} ${ti(f.sourceName)} ${ti(f.sha256.toLowerCase())} ${f.pageCount} (${l[y].map(ti).join(" ")}))`).join(`
  `),g=o.map(f=>`("${String(f.documentNumber).padStart(2,"0")}" ${f.pageNumber} ${f.scaleFactor} "${f.method}" ${f.pageWidthMm} ${f.pageHeightMm} ${f.targetWidthMm} ${f.targetHeightMm})`).join(`
  `);return`; Single working drawing PDF batch runner.
; Each approved page is saved to a separate, never-overwritten DWG.
(vl-load-com)
(setq *p2dwg-project-title-block-enabled* ${r?"T":"nil"})
(setq *p2dwg-batch-run-id* "${s}")
(setq *p2dwg-runner-build-version* "${as}")
(setq *p2dwg-page-scale-plans* '(
  ${g}
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
`}const r2=[{field:"sourceFile",xdataIndex:1,global:"*p2dwg-source-alias*"},{field:"pageNumber",xdataIndex:2,global:"*p2dwg-source-page*"},{field:"jobId",xdataIndex:3,global:"*p2dwg-job-id*"},{field:"sourceId",xdataIndex:4,global:"*p2dwg-source-id*"},{field:"sourceSha256",xdataIndex:5,global:"*p2dwg-source-hash*"},{field:"sourceName",xdataIndex:6,global:"*p2dwg-source-name*"}];function s2(a,r){const s=String(a).padStart(2,"0"),o=`p2dwg${s}`,l=r2.map(({xdataIndex:u,global:g})=>`(= (cdr (nth ${u} app-data)) ${g})`).join(`
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
`}function o2(a){return`
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
`}const Np="f_Pipe_Pri",Av=240,i2="f_Inst",l2=115;function c2(a){return[]}function d2(a,r=[]){return`
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
  (setq target-layer "${i2}")
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
        "|COLOR=${l2}|SOURCE_LINETYPE=iComputerLink"
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
  (setq target-layer "${Np}")
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
      (strcat "PRIMARY_PIPE_MAPPING|STATUS=CONFIRMED|LAYER=" target-layer "|COLOR=${Av}"
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
  (setq target "${Np}" spec nil mapped 0 unresolved 0 index 0)
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
${o2(a)}
`}const zy=25.4/72,u2=1e-6,p2=1e3,un={width:841,height:594};function f2(a,r){if(!Number.isFinite(a.width)||!Number.isFinite(a.height)||a.width<1||a.height<1||a.width>1e5||a.height>1e5)return null;const s=a.width*zy,o=a.height*zy,l=un.width/(a.width/72),u=un.height/(a.height/72),g=Math.min(l,u);return!Number.isFinite(g)||g<u2||g>p2?null:{scaleFactor:g,method:"FIXED_SHEET_SIZE",pageWidthMm:s,pageHeightMm:o,targetWidthMm:un.width,targetHeightMm:un.height}}function h2(a,r){const s=(p,b=0,v=0)=>({valid:!1,reason:p,outputWidthMm:b,outputHeightMm:v});if(!Number.isFinite(r.scaleFactor)||r.scaleFactor<=0)return s("INVALID_SCALE_FACTOR");const o=a.width/72*r.scaleFactor,l=a.height/72*r.scaleFactor;if(!Number.isFinite(o)||!Number.isFinite(l)||o<=0||l<=0)return s("INVALID_SCALED_PAGE_EXTENTS",o,l);const u=un.width,g=un.height,f=.005;if(o>u*(1+f)||l>g*(1+f))return s("SCALED_PAGE_EXCEEDS_FIXED_SHEET",o,l);const y=Math.abs(o-u)/u<=f,m=Math.abs(l-g)/g<=f;return!y&&!m?s("SCALED_PAGE_DOES_NOT_REACH_SHEET_EDGE",o,l):r.targetWidthMm!==u||r.targetHeightMm!==g?s("PLAN_TARGET_DOES_NOT_MATCH_FIXED_SHEET",o,l):{valid:!0,reason:"FIXED_SHEET_FIT_VERIFIED",outputWidthMm:o,outputHeightMm:l}}const g2=["RAW","CANDIDATE","MATCHED","CONFIRMED","UNMATCHED","NEEDS_REVIEW"];function m2(a){return`
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
`}function y2(a){return`
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
`}function b2(a){return`
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
`}function v2(a){return`
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
`}function E2(a){return`
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
`}function w2(a){return["PROJECT_TITLE_BLOCK_SCOPE_V1",`workspaceType=${a.workspaceType}`,`projectId=${a.groupId}`,`titleBlockId=${a.titleBlockId}`,`titleBlockPath=${a.titleBlockPath}`,`xrefName=${a.xrefName}`,`expectedSizeMm=${un.width}x${un.height}`,`version=${a.version}`,""].join(`
`)}function Kn(a,r){return a.match(new RegExp(`(?:^|;)${r}=([^;]*)`,"i"))?.[1]?.trim()??null}function x2(a){const r=a.flatMap(o=>{if(o.category!=="textStyle")return[];const g=(Kn(o.detail,"font")?.split(/[\\/]/).pop()?.replace(/\.(ttf|shx|otf)$/i,"")??"").replace(/[\s_-]/g,"").toUpperCase(),f=Kn(o.detail,"height"),y=Kn(o.detail,"width"),m=Kn(o.detail,"oblique");if(!["ARIALN","ARIALNARROW"].includes(g)||f===null||y===null||m===null||Number(f)!==0)return[];const p=Number(y),b=Number(m);return!Number.isFinite(p)||p<=0||!Number.isFinite(b)?[]:[{name:o.name.trim(),signature:`${g}|${p}|${b}|${Kn(o.detail,"bigfont")??""}`}]});if(r.length===0)return null;if(new Set(r.map(o=>o.signature)).size>1)throw new Error("Legends Library has conflicting variable-height Arial Narrow text styles. Keep one approved general style or resolve the conflicting standards before downloading the runner.");return r.map(o=>o.name).sort((o,l)=>o.localeCompare(l))[0]}function S2(a){return a.filter(r=>{if(r.category!=="textStyle")return!1;const s=Kn(r.detail,"font")??"",o=Kn(r.detail,"bigfont")??"";return/\.shx$/i.test(s)||/\.shx$/i.test(o)})}function T2(a){for(const r of a)if(r.category==="textStyle"){if(!Kn(r.detail,"font"))throw new Error(`Approved text style "${r.name}" has no font.`);for(const s of["height","width","oblique"]){const o=Kn(r.detail,s);if(o===null)continue;const l=Number(o);if(!Number.isFinite(l)||s==="height"&&l<0||s==="width"&&l<=0)throw new Error(`Approved text style "${r.name}" has an invalid ${s}.`)}}}const Bl={name:"P2DWG_ARIAL_NARROW_GLOBAL",category:"textStyle",detail:"font=arialn.ttf;height=0;width=1;oblique=0;bigfont=",discipline:"Shared"};function A2(a,r=!1){const s=x2(a),o=S2(a),l=[...a,...o.filter(u=>!a.some(g=>g.category==="textStyle"&&g.name.toUpperCase()===u.name.toUpperCase()))];if(s)return{standards:l,styleName:s,source:"LEGENDS_LIBRARY"};if(r)throw new Error("LEGENDS_LIBRARY_INCOMPLETE: the active Legends Library has no reviewed variable-height Arial Narrow style. The runner will not replace its text standards with a generic style.");if(a.some(u=>u.category==="textStyle"&&u.name.trim().toUpperCase()===Bl.name.toUpperCase()))throw new Error(`Legends Library text style "${Bl.name}" conflicts with the fixed Arial Narrow default.`);return{standards:[...l,Bl],styleName:Bl.name,source:"GLOBAL_USER_APPROVED_DEFAULT"}}function D2(a){const r=a.flatMap(l=>{if(l.category!=="layer")return[];const u=l.name.trim(),g=u.toUpperCase();if(!u||g==="0"||/^(PDF|P2DWG)|TITLE|LOGO|BORDER|FRAME/.test(g))return[];const f=g.replace(/[^A-Z0-9]/g,""),y=f==="FGENTEXT"?100:f==="GENTEXT"?90:/TEXT|ANNOT|NOTE/.test(g)?50:0;return y?[{name:u,priority:y}]:[]});if(r.length===0)return null;const s=Math.max(...r.map(l=>l.priority)),o=r.filter(l=>l.priority===s);if(o.length>1)throw new Error(`Legends Library has multiple equally suitable general text layers: ${o.map(l=>l.name).join(", ")}. Resolve the default text layer before downloading the runner.`);return o[0].name}function N2(a,r,s,o,l=[],u=[],g=[],f=!1){const y=String(a).padStart(2,"0"),m=`PDF2DWG${y}`,p=`p2dwg${y}`,b=g2.map(it).join(" ");T2(o);const v=A2(o,f),x=v.standards,N=D2(o),D=s.map(k=>`(${it(k.fallbackCategory.toLowerCase())} ${it(k.blockName)} ${it(k.sourcePath)} ${it(k.targetLayer)} ${k.wipeoutBoundary?RS(k.wipeoutBoundary):"nil"} ${it(k.blockAssetId)} (${(k.requiredShapeFonts??[]).map(it).join(" ")}) ${k.autoPlacementSignature?`(${k.autoPlacementSignature.points.map(te=>`(${zl(te[0])} ${zl(te[1])})`).join(" ")})`:"nil"} ${k.autoPlacementSignature?`(("PATH" . ${k.autoPlacementSignature.primitiveClasses.PATH}) ("CURVE" . ${k.autoPlacementSignature.primitiveClasses.CURVE}))`:"nil"} ${k.autoPlacementSignature?zl(k.autoPlacementSignature.aspectRatio):"nil"})`).join(`
    `),A=o.filter(k=>k.category==="layer").map(k=>{const te=k.detail.match(/(?:^|;)color=(\d+)/i)?.[1],X=k.detail.match(/(?:^|;)lineweight=(-?\d+)/i)?.[1],ae=k.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!te||!X||!ae)throw new Error(`Approved layer "${k.name}" is missing its Legends color, lineweight, or linetype. Re-extract the layer instead of substituting defaults.`);const pe=Number(te),oe=Number(X),ne=[-3,-2,-1].includes(oe)||Number.isInteger(oe)&&oe>=0&&oe<=211;if(!Number.isInteger(pe)||pe<1||pe>255||!ne)throw new Error(`Approved layer "${k.name}" has invalid color or lineweight values.`);return`(${it(k.name)} ${pe} ${oe} ${it(ae)})`}).join(`
    `);o.filter(k=>k.category==="layer").map(k=>k.name.trim()).filter(Boolean);const S=c2(),L=x.filter(k=>k.category==="textStyle").map(k=>{const te=(pe,oe)=>k.detail.match(new RegExp(`(?:^|;)${pe}=([^;]*)`,"i"))?.[1]??oe,X=(pe,oe)=>{const ne=Number(te(pe,String(oe)));if(!Number.isFinite(ne)||pe==="height"&&ne<0||pe==="width"&&ne<=0)throw new Error(`Approved text style "${k.name}" has an invalid ${pe}. Re-review the supplied CAD text format.`);return String(ne)},ae=te("font","").trim();if(!ae)throw new Error(`Approved text style "${k.name}" has no font. Re-review it instead of substituting a default font.`);return`(${it(k.name)} ${X("height",0)} ${X("width",1)} ${X("oblique",0)} ${it(ae)} ${it(te("bigfont",""))})`}).join(`
    `),_=o.filter(k=>k.category==="linetype").filter(k=>!["CONTINUOUS","BYLAYER","BYBLOCK"].includes(k.name.trim().toUpperCase())).flatMap(k=>{const te=Nv(k.name,k.detail);if(!te)throw new Error(`Approved linetype "${k.name}" has an unsupported or incomplete definition. Re-extract it with the current extractor; the runner will not omit its marks or substitute Continuous.`);const X=k.detail.match(/(?:^|;)description=([^;]*)/i)?.[1]?.trim()||k.name,ae=te.segments.map(pe=>{const oe=[String(pe.length),String(pe.flags)];return pe.flags===4&&oe.push(String(pe.shapeNumber),it(pe.styleName),it(pe.shapeFile),String(pe.scale),String(pe.rotation),String(pe.offsetX),String(pe.offsetY)),`(${oe.join(" ")})`}).join(" ");return[`(${it(k.name)} ${it(X)} ${String(te.patternLength)} (${ae}))`]}).join(`
    `),C=o.filter(k=>k.category==="dimensionStyle").map(k=>{const te=nT(k.name,k.detail),X=pe=>pe.map(([oe,ne])=>`(${oe} . ${typeof ne=="string"?it(ne):zl(ne)})`).join(" "),ae=te.resources.map(([pe,oe])=>[pe,pe===340?v.styleName:oe]);return`(${it(k.name)} (${X(te.properties)}) (${X(ae)}))`}).join(`
    `),w=l.map(k=>`(${it(k.stableId.toUpperCase())} ${it(k.itemTag.trim())} ${it(k.type)} ${k.pageNumber} (${Ci.map(te=>`(${it(te.toUpperCase())} . ${it(te==="itemTag"?k.itemTag.trim():k.fields?.[te]??"")})`).join(" ")}))`).join(`
    `);M2(o);const O=`; Local AutoCAD runner. The matching source PDF is packaged separately.
; Copyright (c) 2026 gaurav.cbiindia.
; Run command ${m} in AutoCAD for Windows.
; Each imported entity is stamped with a generic source alias and source page.

(vl-load-com)
(setq *p2dwg-attribute-rules* '(${u.map(k=>`(${it(k.attributeTag)} ${it(k.edeField.toUpperCase())} ${it(k.valueType)} ${it(k.textZone)})`).join(" ")}))
(setq *p2dwg-conflicting-tags* '(${g.map(k=>it(k.toUpperCase())).join(" ")}))
(if (not (boundp '*p2dwg-batch-mode*)) (setq *p2dwg-batch-mode* nil))
(setq *p2dwg-approved-symbols* '(
    ${D}
))
(setq *p2dwg-approved-layers* '(
    ${A}
))
(setq *p2dwg-approved-text-styles* '(
    ${L}
))
(setq *p2dwg-approved-text-style-name* ${it(v.styleName)})
(setq *p2dwg-approved-text-style-source* ${it(v.source)})
(setq *p2dwg-approved-text-layer-name* ${N?it(N):"nil"})
(setq *p2dwg-approved-linetypes* '(
    ${_}
))
(setq *p2dwg-approved-dimension-styles* '(
    ${C}
))
(setq *p2dwg-ede-records* '(
    ${w}
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

${sT(p)}

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
        (strcat "SCALE_UNVERIFIED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*) "|CALIBRATION_INPUT"))
      (p2dwg-raise "Scale calibration was cancelled. This page was not saved.")
    )
  )
  (setq measured (distance first-point second-point))
  (if (<= measured 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*) "|INVALID_MEASUREMENT"))
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
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*) "|VERIFY_INPUT"))
      (p2dwg-raise "Scale verification was cancelled. This page was not saved.")
    )
  )
  (setq checked-length (distance check-first check-second))
  (if (<= checked-length 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*) "|ZERO_REMEASUREMENT"))
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
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
          "|PRIMARY=" reference-name "|ERROR_PERCENT=" (rtos error-percent 2 4)))
      (p2dwg-raise
        (strcat "Scale verification missed the 0.5% tolerance ("
          (rtos error-percent 2 4) "%). This page was not saved.")
    )
  )
  )
  (${p}-batch-log
    (strcat "SCALE_PRIMARY_REFERENCE|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
            (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_INPUT|" cross-name))
          (p2dwg-raise "The standard cross-check was cancelled. This page was not saved.")
        )
      )
      (setq cross-measured (distance cross-first cross-second))
      (if (<= cross-measured 0.0)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${p}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_ZERO_LENGTH|" cross-name))
          (p2dwg-raise "The standard cross-check could not measure the symbol side.")
        )
      )
      (setq cross-error
        (* 100.0 (/ (abs (- cross-measured cross-length)) cross-length))
      )
      (${p}-batch-log
        (strcat "SCALE_REFERENCE_CROSSCHECK|SOURCE_${y}.pdf|"
          (itoa *p2dwg-source-page*) "|REFERENCE=" cross-name
          "|KNOWN_MM=" (rtos cross-length 2 4)
          "|REMEASURED_MM=" (rtos cross-measured 2 4)
          "|ERROR_PERCENT=" (rtos cross-error 2 4)
          "|TOLERANCE_PERCENT=0.5"))
      (if (> cross-error 0.5)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${p}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
      (strcat "SCALE_REFERENCE_CROSSCHECK_SKIPPED|SOURCE_${y}.pdf|"
        (itoa *p2dwg-source-page*) "|OTHER_STANDARD_NOT_PRESENT"))
  )
  (setq *p2dwg-scale-status* "PLAN_VERIFIED")
  (${p}-batch-log
    (strcat "SCALE_PLAN_VERIFIED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=FIXED_SHEET_PLAN_MISSING|MODE=" scaleMode))
      (p2dwg-raise "Automatic scale failed: no valid PDF page-size plan. No block placement or DWG save was attempted."))
    ((or (<= scaleFactor 0.0) (<= pageWidthMm 0.0) (<= pageHeightMm 0.0)
         (/= targetWidthMm 841.0) (/= targetHeightMm 594.0))
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=INVALID_FIXED_SHEET_INPUT"))
      (p2dwg-raise "Automatic scale failed: invalid scale or nonstandard sheet dimensions. No block placement or DWG save was attempted."))
  )
  (if (or (null selection) (= (sslength selection) 0))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=TITLE_BLOCK_XREF_BOUNDS_UNAVAILABLE"))
      (p2dwg-raise "Automatic scale failed: the single approved title-block XREF could not be measured."))
  )
  (setq beforeBounds (${p}-selection-bounds selection))
  (if (null beforeBounds)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=PAGE_ALIGNMENT_TO_TITLE_BLOCK_FAILED"))
      (p2dwg-raise "Automatic page alignment to the title-block XREF failed. No block placement or DWG save was attempted."))
  )
  (setq afterBounds (${p}-selection-bounds selection))
  (if (null afterBounds)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${p}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
        (strcat "SCALE_FAILED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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
    (strcat "SCALE_APPLIED|SOURCE_${y}.pdf|" (itoa *p2dwg-source-page*)
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

${m2(p)}
${b2(p)}
${v2(p)}
${E2(p)}
${y2(p)}
${d2(p,S)}
${s2(a,r)}
`,R=O.indexOf(`(defun ${p}-manual-reference-calibration-archive`),P=O.indexOf(`(defun ${p}-calibrate-import`);return R<0||P<R?O:`${O.slice(0,R)}${O.slice(P)}`}function C2(a,r,s){const o=a.map((u,g)=>{const f=g+1;return{documentNumber:f,sourceId:u.sourceId??`SOURCE_${String(f).padStart(2,"0")}`,sourceFile:`SOURCE_${String(f).padStart(2,"0")}.pdf`,sourceName:u.sourceName??`PDF ${f}`,sha256:u.sourceHash??"",pageCount:u.pageCount,pageDrawingNames:u.pageDrawingNames}}),l=a.flatMap((u,g)=>(u.pageSizesPoints??[]).flatMap((f,y)=>{const m=f2(f);return!m||!h2(f,m).valid?[{documentNumber:g+1,pageNumber:y+1,scaleFactor:1,method:"FIXED_SHEET_SIZE",pageWidthMm:0,pageHeightMm:0,targetWidthMm:841,targetHeightMm:594}]:[{documentNumber:g+1,pageNumber:y+1,scaleFactor:m.scaleFactor,method:m.method,pageWidthMm:m.pageWidthMm,pageHeightMm:m.pageHeightMm,targetWidthMm:m.targetWidthMm,targetHeightMm:m.targetHeightMm}]}));return n2(o,!!r,s,l)}function R2(){return`param(
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
`}function _2(a,r){const s=g=>{const f=[2166136261,2654435769,2246822507,3266489909],y=[16777619,1540483477,668265261,374761393];for(const m of g)for(let p=0;p<f.length;p+=1)f[p]=Math.imul(f[p]^m,y[p])>>>0;return f.map(m=>m.toString(16).padStart(8,"0")).join("")},o=a.map((g,f)=>[f+1,g.sourceHash?.toLowerCase()??s(g.pdfBytes),g.pageCount,g.discipline,g.sourceId??"",g.sourceName??"",g.originalName??"",g.projectId??"",g.titleBlockGroupId??"",JSON.stringify(g.pageSizesPoints??[]),JSON.stringify(g.pageDrawingNames??[])].join("|")),l=[];for(const g of r)g.path==="RUN_BATCH.lsp"||g.path==="README_LOCAL_AUTOCAD.txt"||/^SOURCE_\d+\.pdf$/i.test(g.path)||l.push(`${g.path}|${g.content.length}|${s(g.content)}`);const u=["LOCAL_AUTOCAD_BATCH_V1",`RUNNER_BUILD|${as}`,...o.map(g=>`JOB|${g}`),...l.map(g=>`FILE|${g}`)].join(`
`);return s(new TextEncoder().encode(u))}function I2(a,r){const s=a.map((l,u)=>`- PDF ${u+1} (${l.discipline}): ${l.pageCount} page(s) -> ${l.pageCount} native DWG file(s)`).join(`
`)+`

OUTPUT NAMES
Page DWGs use detected Drawing No/Title labels from the source PDF, not equipment tags.
Duplicate names get a document/page suffix; existing DWGs are never overwritten.
Missing, scanned or ambiguous labels use unique fallback names marked FALLBACK_REVIEW.
See each PDF pageOutputs entry in batch_manifest.json for the exact filenames.
`;return`LOCAL AUTOCAD PDF-TO-DWG RUNNER
 ---------------------------------
Runner build: ${as}

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
`}function L2(a,r=[],s=[],o=[],l){if(a.length===0||a.some(C=>!Number.isInteger(C.pageCount)||C.pageCount<1||!["PFD","P&ID"].includes(C.discipline)||!(C.pdfBytes instanceof Uint8Array)||C.pdfBytes.length===0||C.pageSizesPoints!==void 0&&(C.pageSizesPoints.length!==C.pageCount||C.pageSizesPoints.some(w=>!Number.isFinite(w.width)||!Number.isFinite(w.height)||w.width<=0||w.height<=0))||typeof C.sourceHash!="string"||!/^[a-f0-9]{64}$/i.test(C.sourceHash)||C.pageDrawingNames!==void 0&&(C.pageDrawingNames.length!==C.pageCount||C.pageDrawingNames.some(w=>w!==null&&typeof w!="string"))||C.sourceId!==void 0&&!C.sourceId.trim()||C.sourceName!==void 0&&!C.sourceName.trim()))throw new Error("Every runner PDF needs readable bytes and a verified SHA-256 source hash.");const u=a.map((C,w)=>C.sourceId??`SOURCE_${String(w+1).padStart(2,"0")}`);if(new Set(u).size!==u.length)throw new Error("Each selected PDF must have a unique source ID before the runner can be prepared.");if(a.some(C=>(C.edeRecords??[]).some(w=>!/^[0-9A-F]{32}$/i.test(w.stableId)||typeof w.itemTag!="string"||!w.type.trim()||Object.entries(w.fields??{}).some(([O,R])=>!Ci.includes(O)||typeof R!="string")||!Number.isInteger(w.pageNumber)||w.pageNumber<1||w.pageNumber>C.pageCount)))throw new Error("An EDE link in the AutoCAD runner is invalid. Reopen the EDE record and prepare a fresh runner.");if(a.some(C=>(C.conflictingTags??[]).some(w=>typeof w!="string")))throw new Error("The runner duplicate-tag registry is invalid.");const g=new Set(a.map(C=>C.titleBlockGroupId?.trim()??""));if(g.size>1)throw new Error("Prepare one AutoCAD runner per group so each batch uses only its own title block.");const f=[...g][0]??"";if(f){if(!l||l.groupId!==f)throw new Error("Upload a standalone DWG title block for the selected group before preparing its AutoCAD runner.");const C=new Set(a.map(O=>O.discipline));if(C.size!==1)throw new Error("Prepare separate PFD and P&ID runners so each workspace keeps its own shared title block.");if(l.workspaceType!==[...C][0])throw new Error(`The selected title block belongs to ${l.workspaceType}; choose the matching workspace title block.`);if(!(l.content instanceof Uint8Array)||!l.content.length)throw new Error("The selected group title block is not a valid AutoCAD DWG file.");const w=new TextDecoder().decode(l.content.subarray(0,6));if(!/^AC10\d{2}$/.test(w))throw new Error("The selected group title block is not a valid AutoCAD DWG file.");if(l.titleBlockPath!=="PROJECT_TITLE_BLOCK.dwg"||l.xrefName!=="P2DWG_PROJECT_TITLE_BLOCK"||!l.titleBlockId.trim()||!Number.isInteger(l.version)||l.version<1||!Number.isFinite(l.expectedSize.widthMm)||!Number.isFinite(l.expectedSize.heightMm)||l.expectedSize.widthMm<=0||l.expectedSize.heightMm<=0)throw new Error("The project title-block record is incomplete. Save the title block again in the selected workspace.");if(l.expectedSize.widthMm!==un.width||l.expectedSize.heightMm!==un.height)throw new Error("The project title block must use the fixed 841 x 594 mm sheet size.")}else if(l)throw new Error("A project title block can only be used with PDFs from the same selected group.");const y=a.map(C=>r.filter(w=>(w.discipline===C.discipline||w.discipline==="Shared")&&(w.projectId?w.projectId===C.projectId:!0))),m=[...new Map(y.flat().map(C=>[`${C.blockAssetId}|${C.blockName}|${C.fallbackCategory}`,C])).values()];for(const C of m)if(C.fallbackCategory.trim().toLowerCase()==="valve"){if(!C.wipeoutBoundary)throw new Error(`Valve "${C.blockName}" has no reviewed body mask outline. Re-review the valve in the Legends Library before preparing the AutoCAD runner.`);try{es(C.wipeoutBoundary.map(([w,O])=>`${w},${O}`).join(";"))}catch(w){throw new Error(`Valve "${C.blockName}" has an invalid reviewed body mask outline. ${w instanceof Error?w.message:"Re-review the valve mask."}`)}}const p=new Set(s.map(C=>C.id));if(m.some(C=>!p.has(C.blockAssetId)))throw new Error("An approved symbol refers to a missing locally extracted block drawing.");if(m.some(C=>!C.targetLayer.trim()||C.targetLayer.trim().toUpperCase()==="0"))throw new Error("Every approved block needs an approved non-zero target CAD layer before the AutoCAD runner can be prepared.");const b=new Map,v=new Map,x=new Map,N=new Map,D=[...new Set(m.map(C=>C.blockAssetId))];D.forEach((C,w)=>{const O=s.find(P=>P.id===C),R=`CAD_SYMBOLS/SYMBOL_${String(w+1).padStart(3,"0")}`;if(O.format==="DXF"){const P=Ws(O.content).content,k=new Hp(P).nativeAssetInfo();v.set(C,`${R}.dxf`),b.set(C,`${R}.dxf`),x.set(C,k.requiredShapeFonts),N.set(C,P)}else b.set(C,`${R}.dwg`),v.set(C,`${R}.dwg`),x.set(C,[])});const A=Tv(a),S={schemaVersion:1,runnerBuildVersion:as,pdfs:a.map((C,w)=>({sourceId:C.sourceId??`SOURCE_${String(w+1).padStart(2,"0")}`,sourceFile:`SOURCE_${String(w+1).padStart(2,"0")}.pdf`,originalName:C.originalName??C.sourceName??`PDF ${w+1}`,originalAlias:C.sourceName??`PDF ${w+1}`,sha256:C.sourceHash.toLowerCase(),pageCount:C.pageCount,pageOutputs:A[w].map((O,R)=>({page:R+1,outputDwg:O,drawingName:C.pageDrawingNames?.[R]??null,namingStatus:C.pageDrawingNames?.[R]?"DETECTED_LABEL":"FALLBACK_REVIEW"}))}))},L=[{path:"RUN_BATCH.lsp",content:new Uint8Array},{path:"batch_manifest.json",content:new TextEncoder().encode(JSON.stringify(S,null,2))},{path:"VERIFY_BATCH.ps1",content:new TextEncoder().encode(R2())},...l?[{path:"PROJECT_TITLE_BLOCK.dwg",content:l.content},{path:"PROJECT_TITLE_BLOCK_SCOPE.txt",content:new TextEncoder().encode(w2(l))}]:[],...s.filter(C=>D.includes(C.id)).map(C=>({path:v.get(C.id),content:N.get(C.id)??C.content})),...m.length?[{path:"CAD_BLOCK_GEOMETRY_INDEX.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,note:"Descriptors are local geometry data, not validated match signatures. Missing or empty descriptors require re-importing the extraction ZIP with its overview DXF or reviewing unsupported geometry.",blocks:m.map(C=>{const w=s.find(k=>k.id===C.blockAssetId),O=w?.geometryDescriptor??null,P=!!(O?.primitives.length&&O.bounds)?"INDEXED":w?.geometryIndexError??(O?"EMPTY_OR_UNSUPPORTED":"OVERVIEW_DXF_REQUIRED");return{blockAssetId:C.blockAssetId,blockName:C.blockName,category:C.fallbackCategory,discipline:C.discipline,targetLayer:C.targetLayer,targetLayerRules:o.find(k=>k.category==="layer"&&k.name.trim().toLowerCase()===C.targetLayer.trim().toLowerCase())?.detail??null,projectScope:C.projectId?"project":"company",indexStatus:P,indexError:w?.geometryIndexError??null,geometry:O}})},null,2))}]:[],...a.flatMap((C,w)=>{const O=String(w+1).padStart(2,"0"),R=r.filter(X=>(X.discipline===C.discipline||X.discipline==="Shared")&&(X.projectId?X.projectId===C.projectId:!0)&&X.blockAssetId&&b.has(X.blockAssetId)).map(X=>{const ae=b.get(X.blockAssetId),pe=ae.split("/").at(-1)?.replace(/\.(?:dwg|dxf)$/i,"")??"APPROVED_SYMBOL",oe=s.find(ne=>ne.id===X.blockAssetId)?.geometryDescriptor;return{...X,blockName:pe,sourcePath:ae,requiredShapeFonts:x.get(X.blockAssetId)??[],autoPlacementSignature:oe?vA(oe):null}}),P=o.filter(X=>(X.discipline===C.discipline||X.discipline==="Shared")&&(X.projectId?X.projectId===C.projectId:!0)),k=Hy(P,C.projectId,C.requireLegendsLibrary);if(C.requireLegendsLibrary){const X=["f_Pipe_Pri","f_Inst","f_gen_Text"].filter(ae=>!k.some(pe=>pe.category==="layer"&&pe.name.toUpperCase()===ae.toUpperCase()));if(X.length)throw new Error(`LEGENDS_LIBRARY_INCOMPLETE: required reviewed layers are missing: ${X.join(", ")}. No approximate layer defaults were substituted.`)}const te=R.find(X=>!k.some(ae=>ae.category==="layer"&&ae.name.toLowerCase()===X.targetLayer.toLowerCase()));if(te)throw new Error(`Approved CAD layer "${te.targetLayer}" is not included in this runner page's approved standards.`);return[{path:`DOC_${O}.lsp`,content:new TextEncoder().encode(N2(w+1,C.pageCount,R,k,C.edeRecords??[],Vs(C.attributeRules??[]),C.conflictingTags??[],C.requireLegendsLibrary??!1))},{path:`SOURCE_${O}.pdf`,content:C.pdfBytes}]})];L.push({path:"CAD_STANDARDS_MANIFEST.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,fontPolicy:"ARIAL_NARROW",sheetSizeMm:un,documents:a.map((C,w)=>{const O=Hy(o.filter(R=>(R.discipline===C.discipline||R.discipline==="Shared")&&(!R.projectId||R.projectId===C.projectId)),C.projectId,C.requireLegendsLibrary);return{documentNumber:w+1,discipline:C.discipline,policy:C.requireLegendsLibrary?"STRICT_LEGENDS_LIBRARY":"COMPATIBILITY_DEFAULTS",counts:Object.fromEntries(["layer","linetype","textStyle","dimensionStyle"].map(R=>[R,O.filter(P=>P.category===R).length])),standards:O}})},null,2))});const _=_2(a,L);return L[0].content=new TextEncoder().encode(C2(a,l,_)),L.push({path:"README_LOCAL_AUTOCAD.txt",content:new TextEncoder().encode(I2(a,!!l))}),Zb(L)}const Dv={name:Np,category:"layer",detail:`color=${Av};lineweight=-3;linetype=CONTINUOUS`,discipline:"Shared"},P2=[Dv,{name:"f_Pipe_Inline",category:"layer",detail:"color=60;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Equip",category:"layer",detail:"color=80;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Equip_Int",category:"layer",detail:"color=74;lineweight=-3;linetype=HIDDEN2",discipline:"Shared"},{name:"f_gen_Text",category:"layer",detail:"color=50;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"ATT_HID",category:"layer",detail:"color=11;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Misc",category:"layer",detail:"color=9;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Inst",category:"layer",detail:"color=115;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"f_Elec",category:"layer",detail:"color=115;lineweight=-3;linetype=HIDDEN2",discipline:"Shared"},{name:"f_Vendor",category:"layer",detail:"color=164;lineweight=-3;linetype=CENTER2",discipline:"Shared"},{name:"f_Batt_Lim",category:"layer",detail:"color=194;lineweight=-3;linetype=PHANTOM2",discipline:"Shared"},{name:"f_gen_Hatch",category:"layer",detail:"color=7;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"FIRE",category:"layer",detail:"color=22;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"},{name:"F_FIRE_SAFETY",category:"layer",detail:"color=1;lineweight=-3;linetype=CONTINUOUS",discipline:"Shared"}],k2=[{name:"HIDDEN2",category:"linetype",detail:"description=Hidden (.5x);patternLength=4.7625;pattern=(3.175,-1.5875);patternFlags=(0,0)",discipline:"Shared"},{name:"CENTER2",category:"linetype",detail:"description=Center (.5x);patternLength=28.575;pattern=(19.05,-3.175,3.175,-3.175);patternFlags=(0,0,0,0)",discipline:"Shared"},{name:"PHANTOM2",category:"linetype",detail:"description=Phantom (.5x);patternLength=31.75;pattern=(15.875,-3.175,3.175,-3.175,3.175,-3.175);patternFlags=(0,0,0,0,0,0)",discipline:"Shared"}];function Yy(a){return`${a.category}:${a.name.trim().toUpperCase()}`}function Hy(a,r,s=!1){const o=s?[]:[...P2,...k2],l=new Map;for(const f of o)l.set(Yy(f),f);const u=new Map,g=f=>(f.projectId===r&&f.projectId?2:0)+(f.discipline==="Shared"?0:1);for(const f of a){if(f.projectId&&f.projectId!==r)continue;const y=Yy(f),m=u.get(y);if(m&&g(m)===g(f)&&m.detail!==f.detail)throw new Error(`Conflicting approved Legends ${f.category} records named "${f.name}". No arbitrary record was selected.`);(!m||g(f)>g(m))&&u.set(y,f)}for(const[f,y]of u)l.set(f,y);return[...l.values()].map(O2)}function O2(a){if(a.category!=="layer"||a.name.trim().toLowerCase()!==Dv.name.toLowerCase())return a;const r=a.detail.split(";").map(o=>o.trim()).filter(Boolean),s=r.findIndex(o=>/^linetype\s*=/i.test(o));return s>=0?r[s]="linetype=CONTINUOUS":r.push("linetype=CONTINUOUS"),{...a,detail:r.join(";")}}function Vy(a,r){const s=a.match(new RegExp(`(?:^|;)${r}=\\(([^)]*)\\)`,"i"));if(!s)return null;const o=s[1].trim();return!o||/^nil$/i.test(o)?[]:o.split(/[\s,]+/)}function j2(a,r){const s=a.match(new RegExp(`(?:^|;)${r}=(.*?)(?=;[A-Za-z][A-Za-z0-9_]*=|$)`,"i"));if(!s)return null;const o=[],l=/\(\s*(\d+)\s*\.\s*(?:"((?:\\.|[^"])*)"|([^\s)]+))\s*\)/g;let u;for(;(u=l.exec(s[1]))!==null;){const g=u[2]===void 0?u[3]:u[2].replaceAll('\\"','"').replaceAll("\\\\","\\");o.push({code:Number(u[1]),value:g})}return o}function q2(a){let r=0;for(const o of a.toUpperCase())r=r*31+o.charCodeAt(0)>>>0;return`P2DWG_${a.toUpperCase().replace(/[^A-Z0-9_-]/g,"_").slice(0,16)||"SHAPE"}_${r.toString(36).toUpperCase()}`}function Nv(a,r){const s=Vy(r,"pattern"),o=Vy(r,"patternFlags")??[];if(!s?.length||o.length>0&&o.length!==s.length)return null;const l=s.map(Number),u=o.map(Number);if(l.some(A=>!Number.isFinite(A))||l.every(A=>A===0)||l.reduce((A,S)=>A+Math.abs(S),0)<=0||u.some(A=>!Number.isInteger(A)))return null;const g=j2(r,"complexData"),f=new Map,y=/\(\s*"((?:\\.|[^"])*)"\s*\.\s*"((?:\\.|[^"])*)"\s*\)/g,m=r.match(/(?:^|;)shapeFonts=(.*)$/i);let p;if(m)for(;(p=y.exec(m[1]))!==null;)f.set(p[1].replaceAll('\\"','"').toUpperCase(),p[2].replaceAll('\\"','"'));const b=[];let v=0;for(let A=0;A<l.length;A+=1){const S=u[A]??0;let L=g?.findIndex((oe,ne)=>ne>=v&&oe.code===49)??-1;if(L<0||!g){if(S!==0)return null;b.push({length:l[A],flags:0});continue}const _=g[L];if(Math.abs(Number(_.value)-l[A])>1e-8)return null;const C=g[L+1];if(!C||C.code!==74)return null;const w=Number(C.value);if(!Number.isInteger(w)||w!==S)return null;if(v=L+2,w===0){b.push({length:l[A],flags:0});continue}if(w!==4)return null;const O=oe=>{for(;v<g.length&&g[v].code!==oe&&g[v].code!==49;)v+=1;if(v>=g.length||g[v].code!==oe)return null;const ne=g[v].value;return v+=1,ne},R=Number(O(75)),P=O(340),k=Number(O(46)),te=Number(O(50)),X=Number(O(44)),ae=Number(O(45)),pe=P?f.get(P.toUpperCase()):void 0;if(!Number.isInteger(R)||R<=0||!P||!pe||!/^[a-z0-9_.-]+\.shx$/i.test(pe)||![k,te,X,ae].every(Number.isFinite)||k<=0)return null;b.push({length:l[A],flags:4,shapeNumber:R,styleName:q2(a),shapeFile:pe,scale:k,rotation:te,offsetX:X,offsetY:ae})}const x=l.reduce((A,S)=>A+Math.abs(S),0),N=r.match(/(?:^|;)patternLength=([^;]+)/i)?.[1],D=N===void 0?x:Number(N);return!Number.isFinite(D)||D<=0||Math.abs(D-x)>Math.max(1e-7,x*1e-7)?null:{patternLength:D,segments:b}}function M2(a){const r=new Set(["CONTINUOUS","BYLAYER","BYBLOCK"]),s=new Map(a.filter(o=>o.category==="linetype").map(o=>[o.name.trim().toUpperCase(),o]));for(const o of a.filter(l=>l.category==="layer")){const l=o.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!l||r.has(l.toUpperCase()))continue;const u=s.get(l.toUpperCase());if(!u||!Nv(u.name,u.detail))throw new Error(`Layer "${o.name}" requires linetype "${l}", but its complete supported definition is not approved. Review/re-extract that linetype first; the runner will not silently substitute Continuous.`)}}function it(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function zl(a){if(!Number.isFinite(a))throw new Error("An approved block has a non-finite geometry signature. Re-index it before preparing the runner.");return Number(a.toFixed(8)).toString()}function $2(a,r){return a===null||a.has(r)}function F2(a,r){return r===null?[...a]:a.filter(s=>r.has(s))}function U2(a,r,s){const o=new Set(a??r);return o.has(s)?o.delete(s):o.add(s),o}function B2(a,r,s){if(a===null)return null;const o=new Set(s),l=new Set([...a].filter(u=>o.has(u)));for(const u of s)r.has(u)||l.add(u);return l}const ua=(a,r,s="")=>a.find(o=>o.code===r)?.value.trim()??s,ai=a=>`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`,Gu=a=>a.replaceAll("\\","/").split("/").at(-1)??a,ui=a=>{const r=Number(a);if(!a.trim()||!Number.isFinite(r))throw new Error("Legends DXF contains an invalid numeric table property.");return r},z2=a=>a>=40&&a<=99&&a!==70||a>=140&&a<=149||a>=170&&a<=179||a>=270&&a<=299||a>=370&&a<=389||a>=420&&a<=429||a>=440&&a<=459,Y2=a=>a.code>=50&&a.code<=58?ui(a.value)*Math.PI/180:ui(a.value),Gy=a=>`(${a.code} . ${Y2(a)})`;function H2(a,r){const s=new Hp(a),o=[...s.tables.values()].flatMap(f=>f.records),l=new Map(o.map(f=>[ua(f,ua(f,0)==="DIMSTYLE"?105:5).toUpperCase(),f])),u=[],g=(f,y,m)=>{u.push({category:f,name:y,detail:m,discipline:r.discipline,sourceId:r.id})};for(const f of s.tables.get("LAYER")?.records??[]){const y=ua(f,2);if(ua(f,420))throw new Error(`Legends layer "${y}" uses TrueColor; explicit ACI conversion approval is required instead of silently dropping its color.`);g("layer",y,s.layerDetails(y))}for(const f of s.tables.get("STYLE")?.records??[]){const y=ua(f,2);y&&g("textStyle",y,`font=${Gu(ua(f,3))};bigfont=${Gu(ua(f,4))};height=${ua(f,40,"0")};width=${ua(f,41,"1")};oblique=${ui(ua(f,50,"0"))*Math.PI/180}`)}for(const f of s.tables.get("LTYPE")?.records??[]){const y=f.filter(v=>v.code===49).map(v=>ui(v.value)),m=f.filter(v=>v.code===74).map(v=>ui(v.value)),p=f.filter(v=>[9,40,44,45,46,49,50,73,74,75,340].includes(v.code)).map(v=>[9,340].includes(v.code)?`(${v.code} . ${ai(v.value.trim())})`:Gy(v)),b=f.filter(v=>v.code===340).map(v=>{const x=l.get(v.value.trim().toUpperCase());if(!x)throw new Error(`Legends linetype "${ua(f,2)}" has an unresolved shape-font reference.`);return`(${ai(v.value.trim())} . ${ai(Gu(ua(x,3)))})`});g("linetype",ua(f,2),`description=${ua(f,3).replaceAll(";"," ")};patternLength=${ua(f,40,"0")};pattern=(${y.join(" ")});patternFlags=(${m.join(" ")});complexData=(${p.join(" ")});shapeFonts=(${b.join(" ")})`)}for(const f of s.tables.get("DIMSTYLE")?.records??[]){const y=[],m=[],p=[];for(const b of f)if(![-1,0,2,5,70,100,102,105,330].includes(b.code))if(z2(b.code))y.push(Gy(b));else if([3,4].includes(b.code))y.push(`(${b.code} . ${ai(b.value)})`);else if(b.code>=340&&b.code<=347){const v=l.get(b.value.trim().toUpperCase()),x=v?ua(v,2):"";x?m.push(`(${b.code} . ${ai(x)})`):p.push(b.code)}else p.push(b.code);g("dimensionStyle",ua(f,2),`format=DXF_PROPERTIES_V1;recordComplete=1;dxfData=(${y.join(" ")});resources=(${m.join(" ")});unsupportedCodes=(${p.join(" ")})`)}return u}async function V2(a,r,s,o,l){const u=o.filter(v=>v.category==="company-standard"&&v.format==="DXF"&&["Shared",s].includes(v.discipline)),g=u.filter(v=>v.standardsMaster);if(g.length>1)throw new Error("LEGENDS_SOURCE_CONFLICT: more than one global Legends master is selected for this discipline. Keep one master; no source was chosen arbitrarily.");const f=g[0]??(u.length===1?u[0]:void 0),y=Wb(f?{...a,companyItems:[]}:a,r,s).map(v=>{const x=N=>v.fields.find(D=>D.label===N)?.value.trim()??"";return{name:x("CAD name"),category:v.category,detail:x("Extracted details"),discipline:x("Source discipline"),libraryItemId:v.id,sourceId:x("Source drawing ID"),...v.projectId?{projectId:v.projectId}:{}}});if(!f){if(u.length>1)throw new Error("LEGENDS_SOURCE_REQUIRED: select one saved DXF as the global Legends master once in the Legends Library. It will then be used by every project automatically.");return LS(a,r,s),y}if(f.bytes>50*1024*1024)throw new Error("The private Legends DXF exceeds the supported 50 MB table-reader limit.");const m=H2(await l(f.id),f),p=v=>`${v.category}:${v.name.toUpperCase()}`,b=new Map(m.map(v=>[p(v),v]));for(const v of y)r&&v.projectId===r&&b.set(p(v),v);return[...b.values()]}function G2(a,r,s=""){const o=a.filter(m=>m.reviewStatus==="reviewed"&&m.sourceKind==="extracted-dwg"&&(m.scope!=="project"||!!(s&&m.projectId===s))),l=(m,p)=>m.fields.find(b=>b.label===p)?.value?.trim()??"",u=o.filter(m=>[r,"Shared"].includes(l(m,"Source discipline"))),g=u.filter(m=>m.category==="layer"&&l(m,"CAD name")&&l(m,"CAD name").toUpperCase()!=="0"),f=new Set(g.map(m=>l(m,"CAD name").toLowerCase()));return{symbols:u.filter(m=>m.category==="symbol"&&["Source drawing ID","Block asset ID","Block name","Fallback category"].every(p=>l(m,p))&&f.has(l(m,"Target CAD layer").toLowerCase())).length,layers:g.length,textStyles:u.filter(m=>m.category==="textStyle").length,otherDisciplineSymbols:o.filter(m=>m.category==="symbol"&&["PFD","P&ID"].includes(l(m,"Source discipline"))&&l(m,"Source discipline")!==r).length}}const Cp=1024*1024,X2=500*Cp;function Ys(a){return a<1024?`${a} B`:a<Cp?`${(a/1024).toFixed(1)} KB`:`${(a/Cp).toFixed(1)} MB`}function W2(a){const r=a.type.split(";",1)[0].trim().toLowerCase(),s=a.name.trim().toLowerCase().endsWith(".pdf");return r==="application/pdf"||s}async function K2(a){const[r,s]=await Promise.all([pn(()=>import("./pdf-TYrZqVzP.js"),[]),pn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);r.GlobalWorkerOptions.workerSrc=s.default;const o=r.getDocument({data:new Uint8Array(a.slice(0))});try{return(await o.promise).numPages}finally{await o.destroy().catch(()=>{})}}async function Z2(a){const[r,s]=await Promise.all([pn(()=>import("./pdf-TYrZqVzP.js"),[]),pn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);r.GlobalWorkerOptions.workerSrc=s.default;const l=await r.getDocument({data:new Uint8Array(a.slice(0))}).promise;try{const u=[],g=[];for(let f=1;f<=l.numPages;f+=1){const y=await l.getPage(f),m=y.getViewport({scale:1});u.push({width:m.width,height:m.height});const p=await y.getTextContent(),b=[];for(const v of p.items)"str"in v&&b.push({text:v.str,x:v.transform[4],y:v.transform[5],width:v.width,height:v.height||Math.hypot(v.transform[2],v.transform[3])});g.push(t2(b)),y.cleanup()}return{pageSizes:u,pageDrawingNames:g}}finally{await l.destroy().catch(()=>{})}}function Q2({discipline:a,groups:r,selectedClientId:s,selectedClientLabel:o,onSelectClient:l}){const[u,g]=M.useState([]),[f,y]=M.useState(null),[m,p]=M.useState(!0),[b,v]=M.useState(""),[x,N]=M.useState(0),[D,A]=M.useState([]),[S,L]=M.useState(null),[_,C]=M.useState(null),[w,O]=M.useState(null),[R,P]=M.useState(null),[k,te]=M.useState(0),[X,ae]=M.useState(1),[pe,oe]=M.useState(null),[ne,Y]=M.useState(""),[Z,ge]=M.useState(""),[we,j]=M.useState([]),[ee,U]=M.useState(0),[V,ie]=M.useState(""),[de,ve]=M.useState(null),[Ie,Pe]=M.useState(null),[vt,at]=M.useState(!1),[ut,gt]=M.useState(!1),[Ft,Et]=M.useState(""),[$,fe]=M.useState(!1),[he,z]=M.useState(""),[ue,Ne]=M.useState(null),[be,qe]=M.useState(!1),[et,Fe]=M.useState(""),[Be,ma]=M.useState("1"),Ee=M.useRef([]),He=M.useRef(null),Le=M.useRef(!0),aa=M.useRef(!1),ke=M.useRef(0),ja=M.useRef(new Set),Ut=M.useRef(a);Ut.current=a;const Vt=typeof globalThis.crypto?.subtle<"u",Tt=M.useMemo(()=>kb(r),[r]),nt=M.useMemo(()=>{const B=new Set(F2(u.map(me=>me.id),f));return u.filter(me=>B.has(me.id))},[f,u]),ya=M.useMemo(()=>JSON.stringify({discipline:a,mappingProjectId:ne,titleBlockGroupId:Z,titleBlockId:Ie?.titleBlockId??null,titleBlockVersion:Ie?.version??null,sourceRevision:k,sources:nt.map(B=>[B.id,B.hash,B.alias,B.originalName])}),[a,ne,Z,Ie?.titleBlockId,Ie?.version,nt,k]);M.useEffect(()=>{!ue||ue.inputSignature===ya||(Ne(null),z("Runner inputs changed. Prepare a new ZIP before downloading the current selection."))},[ue,ya]),M.useEffect(()=>()=>{ue&&URL.revokeObjectURL(ue.url)},[ue]);const Lt=ue?.inputSignature===ya?ue:null,qa=()=>y(null),Gt=()=>y(new Set),xt=B=>{y(me=>U2(me,u.map(Se=>Se.id),B))};M.useEffect(()=>{if(ge(s),!s){Y("");return}try{const B=Sn();Y(B.projects[s]?s:"")}catch{Y("")}},[s]);const Nt=M.useCallback((B,me)=>{if(!Le.current)return;ke.current+=1;const Se=ke.current;A(Te=>[...Te.slice(-5),{id:Se,kind:B,text:me}])},[]);M.useEffect(()=>{const B=()=>{try{const me=Sn(),Se=s&&me.projects[s]?[s]:[];j(Se.map((Te,Ue)=>({id:Te,label:Tt.find(ze=>ze.id===Te)?.label??`Project ${String(Ue+1).padStart(2,"0")}`}))),ve(G2([...me.companyItems,...ne?me.projects[ne]?.items??[]:[]],a,ne)),ie(new Date().toLocaleTimeString())}catch(me){ve(null),Nt("error",me instanceof Error?me.message:"The approved CAD library could not be loaded.")}};return B(),window.addEventListener("focus",B),window.addEventListener("storage",B),window.addEventListener(mi,B),()=>{window.removeEventListener("focus",B),window.removeEventListener("storage",B),window.removeEventListener(mi,B)}},[Nt,Tt,a,ne,ee,s]),M.useEffect(()=>{let B=!0;return Pe(null),Et(""),Z?(at(!0),vy(Z,a).then(me=>{B&&Pe(me)}).catch(me=>{B&&Et(me instanceof Error?me.message:"The local project title block could not be read.")}).finally(()=>{B&&at(!1)}),()=>{B=!1}):(at(!1),()=>{B=!1})},[a,Z]),M.useEffect(()=>{Z&&!Tt.some(B=>B.id===Z)&&(ge(""),Pe(null),Et(""))},[Tt,Z]);const At=M.useCallback(async()=>{try{const[B,me]=await Promise.all([hv(a),NA()]);if(!Le.current||Ut.current!==a)return;const Se=B.map(Ue=>Ue.id),Te=ja.current;y(Ue=>B2(Ue,Te,Se)),ja.current=new Set(Se),g(B),N(me),v("")}catch(B){Le.current&&v(B instanceof Error?B.message:"Saved PDFs could not be loaded.")}finally{Le.current&&p(!1)}},[a]),nn=async(B,me,Se,Te)=>{await Fl(B.id,{analysisStatus:"extracting",analysisPagesDone:0,analysisRecordCount:0,analysisMessage:"",autocadStatus:"not-connected"}),Le.current&&await At();let Ue;try{Ue=await zA(me,Te,Se)}catch(Rt){throw Se()?Rt:new ta("cancelled","EDE extraction paused.")}if(!Se())throw new ta("cancelled","EDE extraction paused.");await RA(B.id,Ue.pageText);const ze=BA(Ue.pageText),rt=ZA(a==="PFD"?"pfd":"pid",{id:B.id,alias:B.alias},[...Ue.candidates,...ze]);Le.current&&te(Rt=>Rt+1);const Ct=Ue.pageText.some(Rt=>Rt.searchableText.trim()||Rt.ocrTiles.some(Ea=>Ea.trim())),Aa=rt.recordCount||Ct?"needs-review":"no-tags";return await Fl(B.id,{analysisStatus:Aa,analysisPagesDone:Ue.pages,analysisRecordCount:rt.recordCount,analysisMessage:Ue.ocrPages?`Page text and OCR from ${Ue.ocrPages} page(s) are saved locally. ${Ue.candidates.length} tag candidate(s) and ${ze.length} note(s) need review.`:`Page text is saved locally. ${Ue.candidates.length} tag candidate(s) and ${ze.length} note(s) need review.`,autocadStatus:"not-connected"}),{...rt,tagCount:Ue.candidates.length,noteCount:ze.length}};M.useEffect(()=>{Le.current=!0,p(!0),O(null),ae(1),At();const B=()=>{At()};return window.addEventListener("focus",B),()=>{window.removeEventListener("focus",B),Le.current=!1,Ee.current.forEach(me=>{me.cancelled=!0}),Ee.current=[]}},[At]),M.useEffect(()=>{if(aa.current)return;const B=new URLSearchParams(window.location.search).get("pdf"),me=u.find(Ue=>Ue.id===B);if(!me)return;const Se=new URLSearchParams(window.location.search).get("record");Se&&P(Se),aa.current=!0,O(me.id);const Te=Number(new URLSearchParams(window.location.search).get("page"));ae(Number.isInteger(Te)&&Te>=1&&Te<=me.pageCount?Te:1),window.setTimeout(()=>document.querySelector('[data-testid="panel-source-page"]')?.scrollIntoView({behavior:"smooth",block:"center"}),100)},[u]);const rn=async(B,me,Se)=>{const Te=a,Ue=()=>!B.cancelled&&Le.current&&Ut.current===Te;B.state="working";try{if(B.file.size>Sp)throw new ta("too-large","A PDF is larger than 100 MB and was skipped.");const ze=await B.file.arrayBuffer();if(!Ue())return;let rt;try{rt=await K2(ze)}catch(Rt){const Ea=Rt?.name;throw Ea==="PasswordException"?new Error("A PDF is password-protected. Remove the password and add it again."):Ea==="InvalidPDFException"||Ea==="FormatError"?new Error("A file is not a valid PDF, or it is damaged."):new Error("A PDF could not be read. It may be damaged.")}if(!Ue())return;if(rt<1)throw new Error("A PDF has no pages.");let Ct;try{Ct=await My(ze)}catch{throw new Error("Duplicate check is not supported in this browser, so the PDF was not saved.")}if(!Ue())return;const Aa=await CA({discipline:Te,bytes:ze,pageCount:rt,hash:Ct,originalName:B.file.name},Ue);me.pagesDone+=rt,Le.current&&(L({total:Se,done:me.done,pagesDone:me.pagesDone,active:1,phase:"extracting",currentAlias:Aa.alias,pageNow:0,pageTotal:rt}),await At());try{const Rt=await nn(Aa,ze,Ue,(Ea,gn)=>{Le.current&&L(Ga=>Ga&&{...Ga,phase:"extracting",currentAlias:Aa.alias,pageNow:Ea,pageTotal:gn})});Ue()&&Nt("info",`${Aa.alias}: ${Rt.tagCount} tag candidate(s) and ${Rt.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(Rt){const Ea=Rt instanceof ta&&Rt.code==="cancelled",gn=Ea?"Extraction paused. Resume it from this saved PDF.":$y(Rt);await Fl(Aa.id,{analysisStatus:Ea?"paused":"failed",analysisMessage:gn}).catch(()=>{}),!Ea&&Ue()&&Nt("error",`${Aa.alias}: ${gn}`)}B.state="done",Le.current&&await At()}catch(ze){B.state="failed",!(ze instanceof ta&&ze.code==="cancelled")&&Ue()&&Nt("error",ze instanceof Error?ze.message:"A PDF could not be added.")}finally{me.done+=1,Le.current&&L(ze=>ze&&{...ze,total:Se,done:me.done,pagesDone:me.pagesDone,active:0})}},Rn=B=>{if(S||m||b||!B.length)return;const me=B.filter(W2);if(me.length<B.length&&Nt("error",`${B.length-me.length} file(s) skipped. Choose PDF files only.`),!me.length)return;const Se=me.map(rt=>({id:++ke.current,file:rt,cancelled:!1,state:"queued"}));Ee.current=[...Ee.current,...Se];const Te={done:0,pagesDone:0};L({total:Se.length,done:0,pagesDone:0,active:0,phase:"checking"});let Ue=0;(async()=>{for(;Ue<Se.length&&Le.current;){const rt=Se[Ue++];if(rt.cancelled){Te.done+=1;continue}await rn(rt,Te,Se.length)}})().then(()=>{if(Ee.current=Ee.current.filter(Ct=>!Se.includes(Ct)),!Le.current)return;const rt=Se.filter(Ct=>Ct.state==="done").length;rt&&Nt("info",`${rt} PDF(s) saved on this device. Check each PDF's EDE status below; AutoCAD is not connected.`),L(null)})},_a=async B=>{if(!(S||_)){C(B.id),L({total:1,done:0,pagesDone:0,active:1,phase:"extracting",currentAlias:B.alias,pageNow:0,pageTotal:B.pageCount});try{const me=await ei(B.id),Se=await nn(B,me,()=>Le.current,(Te,Ue)=>{Le.current&&L(ze=>ze&&{...ze,phase:"extracting",pageNow:Te,pageTotal:Ue})});Nt("info",`${B.alias}: ${Se.tagCount} tag candidate(s) and ${Se.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(me){const Se=$y(me);await Fl(B.id,{analysisStatus:"failed",analysisMessage:Se}).catch(()=>{}),Nt("error",`${B.alias}: ${Se}`)}finally{L(null),C(null),await At()}}},_n=()=>{Ee.current.forEach(B=>{B.state!=="done"&&(B.cancelled=!0)}),Nt("info","Remaining imports were cancelled. Finished files stay saved.")},ba=async B=>{oe(null);try{await gv([B]),w===B&&O(null),await At()}catch{Nt("error","The PDF could not be deleted from local storage.")}},va=async()=>{oe(null),Ee.current.forEach(B=>{B.cancelled=!0});try{await _A(a),O(null),await At()}catch{Nt("error","Saved PDFs could not be cleared.")}},Pt=async B=>{try{const me=await ei(B.id),Se=URL.createObjectURL(new Blob([me],{type:"application/pdf"})),Te=document.createElement("a");Te.href=Se,Te.download=`original-source-${a==="PFD"?"pfd":"pid"}-pdf-${B.aliasNumber}.pdf`,document.body.appendChild(Te),Te.click(),Te.remove(),setTimeout(()=>URL.revokeObjectURL(Se),4e3)}catch{Nt("error","The original PDF could not be read for download.")}},kt=async B=>{if(!(!B||!Z)){if(B.size>Qb){Et("The project title block is larger than the 100 MB local upload limit."),He.current&&(He.current.value="");return}if(Ie&&!window.confirm("Replace the saved title block for this project in this browser? The previous local file will be replaced.")){He.current&&(He.current.value="");return}gt(!0),Et("");try{await ZS(Z,a,B.name,new Uint8Array(await B.arrayBuffer())),Pe(await vy(Z,a)),Et("Title block saved for this group in this browser.")}catch(me){Et(me instanceof Error?me.message:"The project title block could not be saved locally.")}finally{gt(!1),He.current&&(He.current.value="")}}},I=async()=>{if(!(!Z||!Ie)&&window.confirm("Remove this client folder title block from this browser? Existing generated DWGs are not changed.")){Et("");try{await QS(Z,a),Pe(null),Et("Group title block removed from this browser.")}catch(B){Et(B instanceof Error?B.message:"The project title block could not be removed.")}}},J=async()=>{if(!nt.length){z("Select at least one PDF to include in the AutoCAD runner.");return}if(!Z){z("Choose the project folder and its saved title block. Every drawing page needs the shared title-block XREF for automatic scaling.");return}if(!(S!==null||$||ut||m||b)){fe(!0),Ne(null),z("");try{const B=nt.reduce((De,Me)=>De+Me.size,0),me=Z?await KS(Z,a):null;if(!me)throw new Error("Upload a standalone DWG title block for the selected client folder before preparing its AutoCAD runner.");if(B+(me?.bytes??0)>X2)throw new Error("The saved source PDFs and client title block exceed the 500 MB limit for this local AutoCAD runner package.");const Se=Sn();if(ne&&!Se.projects[ne])throw new Error("That project library is no longer available. Select a current project mapping or use Legends Library only.");const ze=[...Se.companyItems,...ne?Se.projects[ne]?.items??[]:[]].filter(De=>De.category==="symbol"&&De.reviewStatus==="reviewed"&&De.sourceKind==="extracted-dwg"&&[a,"Shared"].includes(De.fields.find(Me=>Me.label==="Source discipline")?.value?.trim()??"")).flatMap(De=>{const Me=jt=>De.fields.find(tr=>tr.label===jt)?.value?.trim()??"",st=Me("Source drawing ID"),Xt=Me("Block asset ID"),Bt=Me("Block name"),wa=Me("Fallback category"),er=Me("Target CAD layer"),ia=Me("Source discipline");if(!st||!Xt||!Bt||!wa||ia!=="PFD"&&ia!=="P&ID"&&ia!=="Shared")return[];if(!er||er.toUpperCase()==="0")throw new Error(`Approved block "${Bt}" has no valid target CAD layer. Re-review it and select an approved non-zero layer.`);let sn;if(wa.toLowerCase()==="valve"){const jt=Me("Wipeout mask boundary");try{sn=es(jt)}catch(tr){throw new Error(`Approved valve "${Bt}" has no valid reviewed body mask. Re-review the valve outline before preparing the AutoCAD runner. ${tr instanceof Error?tr.message:""}`)}}return[{sourceId:st,blockAssetId:Xt,blockName:Bt,fallbackCategory:wa,targetLayer:er,discipline:ia,...sn?{wipeoutBoundary:sn}:{},...De.scope==="project"&&De.projectId?{projectId:De.projectId}:{}}]}),rt=await V2(Se,ne||void 0,a,await ec(),Gs),Ct=[...new Set(ze.map(De=>De.blockAssetId))],Aa=await Promise.all(Ct.map(async De=>{const[Me,st]=await Promise.all([ev(De),Jb(De)]);return{id:De,content:Me,format:st.format??"DWG",...st.geometryDescriptor?{geometryDescriptor:st.geometryDescriptor}:{}}})),Rt=new Map(Aa.map(De=>[De.id,De])),Ea=new Map((await ec()).map(De=>[De.id,De])),gn=new Map;for(const De of ze){const Me=Rt.get(De.blockAssetId)?.geometryDescriptor;if(Me?.primitives.length&&Me.bounds)continue;const st=gn.get(De.sourceId)??[];st.push(De),gn.set(De.sourceId,st)}const Ga=[];for(const[De,Me]of gn){const st=Ea.get(De),Xt=Me.map(Bt=>Rt.get(Bt.blockAssetId)).filter(Bt=>!!Bt);if(!st||st.format!=="DXF"){for(const Bt of Xt)Bt.geometryIndexError=st?"SOURCE_DWG_REQUIRES_OVERVIEW_DXF":"SOURCE_NOT_AVAILABLE";continue}try{const Bt=await Gs(De);if(Bt.byteLength>50*1024*1024){for(const ia of Xt)ia.geometryIndexError="SOURCE_DXF_TOO_LARGE";continue}const wa=new TextDecoder("windows-1252").decode(Bt),er=tc(wa,[...new Set(Me.map(ia=>ia.blockName))]);for(const ia of Me){const sn=Rt.get(ia.blockAssetId);if(!sn)continue;const jt=er.get(ia.blockName)?.geometryDescriptor;if(!jt||!jt.primitives.length||!jt.bounds){sn.geometryIndexError="BLOCK_NOT_FOUND_OR_UNSUPPORTED";continue}sn.geometryDescriptor=jt,Ga.push({id:sn.id,sourceId:De,blockName:ia.blockName,content:sn.content,geometryDescriptor:jt})}}catch{for(const Bt of Xt)Bt.geometryIndexError="SOURCE_DXF_UNREADABLE"}}Ga.length&&await gp(Ga);const Jn=new Map,Xa=Ei(a==="PFD"?"pfd":"pid"),Qs=SS(Xa.flatMap(De=>De.rows.map(Me=>({stableId:Me.id,itemTag:Me.itemTag})))),_i=AS(a,ne||void 0);for(const De of Xa)for(const Me of De.rows){if(!Me.sourcePdfId)continue;const st=new Set([Number(Me.sourcePage),...(Me.sourceLocations??[]).map(Xt=>Xt.pageNumber)].filter(Xt=>Number.isInteger(Xt)&&Xt>0));for(const Xt of st){const Bt=Jn.get(Me.sourcePdfId)??[];Bt.some(wa=>wa.stableId===Me.id&&wa.pageNumber===Xt)||(Bt.push({stableId:Me.id,itemTag:Me.itemTag,type:Me.type,pageNumber:Xt,fields:Object.fromEntries(Ci.map(wa=>[wa,Me[wa]]))}),Jn.set(Me.sourcePdfId,Bt))}}const In=await L2(await Promise.all(nt.map(async De=>{const Me=await ei(De.id),st=await My(Me);if(st.toLowerCase()!==De.hash.toLowerCase())throw new Error(`${De.alias} changed in local storage. Re-upload it before creating the AutoCAD runner.`);const Xt=await Z2(Me);return{pageCount:De.pageCount,pageSizesPoints:Xt.pageSizes,pageDrawingNames:Xt.pageDrawingNames,pdfBytes:new Uint8Array(Me),sourceHash:st,sourceId:De.id,sourceName:De.alias,originalName:De.originalName??De.alias,discipline:a,edeRecords:Jn.get(De.id)??[],attributeRules:_i,conflictingTags:Qs,requireLegendsLibrary:!0,...ne?{projectId:ne}:{},...Z?{titleBlockGroupId:Z}:{}}})),ze,Aa,rt,me?{groupId:me.projectId,workspaceType:me.workspaceType,titleBlockId:me.titleBlockId,titleBlockPath:me.titleBlockPath,xrefName:me.xrefName,expectedSize:me.expectedSize,version:me.version,content:me.content}:void 0),Js=URL.createObjectURL(In),ss=nt.reduce((De,Me)=>De+Me.pageCount,0);Ne({url:Js,filename:a2,version:as,bytes:In.size,sourceCount:nt.length,pageCount:ss,inputSignature:ya}),z(`Runner ${as} is ready. Click Download ZIP below to start the browser download. It contains ${nt.length} selected PDF(s) and can create ${ss} separate DWG file(s). DWG filenames use detected Drawing No/Title labels. Missing or ambiguous labels use unique fallback names; check pageOutputs in batch_manifest.json. Duplicate names receive a page suffix. ${ze.filter(De=>(De.discipline===a||De.discipline==="Shared")&&(!De.projectId||De.projectId===ne)).length} reviewed symbol mapping(s) and ${rt.length} approved-source Legends layer/text/linetype/dimension standard(s) are included; exact records are in CAD_STANDARDS_MANIFEST.json. No generic layer defaults were substituted. Each page is uniformly calibrated to the shared title-block XREF frame; approved symbol/text checks run automatically and no calibration input is requested.`+(me?" The selected client title block is included for 1:1 XREF attachment; keep its output companion DWG beside the generated pages.":""))}catch(B){z(B instanceof Error?B.message:"The AutoCAD runner could not be prepared. Try a smaller PDF batch.")}finally{fe(!1)}}},ye=async B=>{const me=Number(Be);if(!Number.isFinite(me)||me<=0){Fe("Enter a scale multiplier greater than zero.");return}qe(!0),Fe("Reading PDF vector geometry…");try{const{buildPdfDxfPackage:Se}=await pn(async()=>{const{buildPdfDxfPackage:Ct}=await import("./pdf-dxf-export-BWuxV2si.js");return{buildPdfDxfPackage:Ct}},[]),Te=await Se((B?[B]:u).map(Ct=>({aliasNumber:Ct.aliasNumber,bytes:()=>ei(Ct.id)})),me,(Ct,Aa,Rt)=>{Le.current&&Fe(`Creating DXF: PDF ${Ct} · page ${Aa} of ${Rt}…`)},()=>Le.current&&Ut.current===a);if(!Le.current||Ut.current!==a)return;const Ue=URL.createObjectURL(Te.blob),ze=document.createElement("a");ze.href=Ue,ze.download="pdf-dxf-pages.zip",document.body.append(ze),ze.click(),ze.remove(),window.setTimeout(()=>URL.revokeObjectURL(Ue),1e3);const rt=Te.reports.length-Te.exported;Fe(`${Te.exported} DXF page(s) created${rt?`; ${rt} page(s) skipped—read the report`:""}. Raw vector output—not a verified exact PDF match. Compare each page with its source; library replacement and engineering scale are not verified.`)}catch(Se){Le.current&&Fe(Se instanceof Error?Se.message:"DXF export failed; no CAD output was confirmed.")}finally{Le.current&&qe(!1)}},Re=M.useMemo(()=>u.find(B=>B.id===w)??null,[u,w]),lt=M.useMemo(()=>{if(!w||!R)return[];try{const Se=Ei(a==="PFD"?"pfd":"pid").find(Te=>Te.sourcePdfId===w)?.rows.find(Te=>Te.id===R);return(Se?.sourceLocations??[]).filter(Te=>Te.pageNumber===X).map(Te=>({id:Se.id,label:Se.itemTag,location:Te}))}catch{return[]}},[a,X,w,k,R]),Oe=u.reduce((B,me)=>B+me.pageCount,0),Ke=S!==null,ct=Math.min(100,x/Tp*100);return c.jsxs("section",{className:"pdf-workflow","aria-labelledby":"pdf-workflow-title","data-testid":"panel-pdf-workflow",children:[c.jsxs("div",{className:"pdf-panel-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"pdf-kicker",children:["PDF INPUT · LOCAL SOURCE FILES · ",a]}),c.jsx("h2",{id:"pdf-workflow-title",children:"Source PDF files"}),c.jsxs("p",{children:["Add PDFs for this ",a," workspace. They stay in this browser and appear as PDF 1, PDF 2, and so on."]})]}),c.jsxs("div",{className:"pdf-actions",children:[c.jsxs("label",{className:"btn primary pdf-add-control","data-testid":"label-add-pdfs",children:[c.jsx(jm,{size:15})," Add PDFs",c.jsx("input",{type:"file",accept:"application/pdf,.pdf",multiple:!0,"aria-label":"Add PDF files",disabled:Ke||m||!!b||!Vt,onChange:B=>{Rn(Array.from(B.currentTarget.files??[])),B.currentTarget.value=""},"data-testid":"input-add-pdfs"})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>oe({type:"all"}),disabled:!u.length,"aria-label":"Clear all saved PDFs","data-testid":"button-clear-pdfs",children:[c.jsx(hi,{size:14})," Clear all"]})]})]}),c.jsxs("div",{className:"pdf-trust-note","data-testid":"text-pdf-local-only",children:[c.jsx(Qn,{size:15}),c.jsxs("div",{className:"pdf-trust-copy",children:[c.jsxs("span",{children:[c.jsx("strong",{children:"Saved on this device only."})," PDFs are not uploaded, backed up, or synced. Clearing browser data removes them.",!Vt&&" New PDFs cannot be added in this browser because duplicate checking needs a secure connection."]}),c.jsxs("details",{className:"pdf-privacy-details",children:[c.jsx("summary",{children:"Privacy and scanned PDFs"}),c.jsxs("p",{children:["Original PDFs are not changed. Searchable text and scanned pages are read in this browser. The OCR code and language files may be downloaded, but the PDF itself is not sent. PDF aliases hide file names only; names and logos printed inside the pages remain visible."," ","Download an original if you need a separate copy."]})]})]})]}),c.jsx(uS,{}),c.jsxs("div",{className:"pdf-storage-line","data-testid":"text-pdf-storage",children:[c.jsxs("span",{children:[Ys(x)," of ",Ys(Tp)," used (all disciplines)"]}),c.jsxs("span",{children:["Limit ",Ys(Sp)," per PDF"]})]}),c.jsx("div",{className:"pdf-meter",role:"progressbar","aria-label":"Local storage used","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(ct),children:c.jsx("span",{style:{width:`${ct}%`}})}),c.jsx("div",{style:{height:12}}),S&&c.jsxs("div",{className:"pdf-progress",role:"status","aria-live":"polite","data-testid":"status-pdf-progress",children:[c.jsxs("div",{className:"pdf-progress-top",children:[c.jsxs("span",{children:[c.jsx(Oa,{size:12,className:"pdf-spin"})," ",S.phase==="checking"?`Checking and saving: ${S.done} of ${S.total} file(s) finished · ${S.pagesDone} page(s) verified`:`${S.currentAlias??"PDF"} · reading page ${S.pageNow??0} of ${S.pageTotal??0} for EDE`]}),c.jsx("button",{type:"button",className:"btn",onClick:_n,"data-testid":"button-cancel-import","aria-label":"Cancel remaining imports",children:"Cancel"})]}),c.jsx("div",{className:"pdf-meter",children:c.jsx("span",{style:{width:`${S.phase==="checking"?S.done/S.total*100:(S.done+(S.pageTotal?(S.pageNow??0)/S.pageTotal:0))/S.total*100}%`}})})]}),D.length>0&&c.jsx("ul",{className:"pdf-notes","aria-live":"polite","data-testid":"list-pdf-notes",children:D.map(B=>c.jsxs("li",{className:B.kind==="info"?"info":"",role:B.kind==="error"?"alert":void 0,"data-testid":`status-pdf-note-${B.id}`,children:[B.kind==="error"?c.jsx(_r,{size:14}):c.jsx(Zn,{size:14}),c.jsx("span",{children:B.text}),c.jsx("button",{type:"button","aria-label":"Dismiss message",onClick:()=>A(me=>me.filter(Se=>Se.id!==B.id)),children:c.jsx(Zu,{size:13})})]},B.id))}),u.length>0&&c.jsxs("div",{className:"pdf-batch-controls","data-testid":"pdf-batch-controls",children:[c.jsxs("div",{className:"pdf-batch-controls-copy",children:[c.jsx("strong",{children:"Choose PDFs for AutoCAD"}),c.jsxs("span",{"aria-live":"polite","data-testid":"text-pdf-batch-selection-count",children:[nt.length," of ",u.length," selected"]}),c.jsx("small",{children:"Only checked PDFs go into the runner. Select one or several."})]}),c.jsxs("div",{className:"pdf-batch-control-actions",children:[c.jsx("button",{type:"button",className:"btn",onClick:qa,disabled:Ke||$,"data-testid":"button-select-all-pdfs",children:"Select all"}),c.jsx("button",{type:"button",className:"btn",onClick:Gt,disabled:Ke||$,"data-testid":"button-deselect-all-pdfs",children:"Deselect all"})]})]}),u.length>0&&nt.length===0&&c.jsx("p",{className:"pdf-batch-empty",role:"status","data-testid":"status-no-pdfs-selected",children:"No PDFs selected. Use Select all or tick a PDF row before downloading the runner."}),c.jsxs("div",{className:"pdf-queue","aria-label":"Saved PDF files",children:[pe&&c.jsxs("div",{className:"pdf-confirm",role:"alertdialog","aria-label":"Confirm delete","data-testid":"dialog-confirm-delete",children:[c.jsx("span",{children:pe.type==="all"?`Delete all ${u.length} saved ${a} PDF(s) from this device? This cannot be undone.`:"Delete this PDF from this device? This cannot be undone."}),c.jsx("button",{type:"button",className:"btn danger","data-testid":"button-confirm-delete",onClick:()=>pe.type==="all"?void va():void ba(pe.id),children:"Delete"}),c.jsx("button",{type:"button",className:"btn","data-testid":"button-cancel-delete",onClick:()=>oe(null),children:"Keep"})]}),m?c.jsxs("div",{className:"pdf-queue-empty",role:"status","data-testid":"status-pdf-loading",children:[c.jsx(Oa,{size:16,className:"pdf-spin"})," Loading saved PDFs"]}):b?c.jsxs("div",{className:"pdf-queue-empty",role:"alert","data-testid":"status-pdf-load-error",children:[c.jsx(_r,{size:16})," ",b,c.jsx("button",{type:"button",className:"btn",onClick:()=>{p(!0),At()},"data-testid":"button-retry-load",children:"Try again"})]}):u.length?u.map(B=>c.jsxs("div",{className:`pdf-file-row${B.id===w?" is-selected":""}`,"data-testid":`row-pdf-file-${B.id}`,children:[c.jsxs("button",{type:"button",className:"pdf-select",onClick:()=>{O(B.id),P(null),ae(1)},"aria-label":`Preview ${B.alias}`,"aria-pressed":B.id===w,"data-testid":`button-select-pdf-${B.id}`,children:[c.jsx("span",{className:"pdf-file-icon",children:c.jsx(Zn,{size:17})}),c.jsxs("span",{className:"pdf-file-details",children:[c.jsx("strong",{className:"pdf-filename","data-testid":`text-pdf-name-${B.id}`,children:B.alias}),c.jsxs("span",{className:"pdf-file-meta",children:[B.pageCount," page(s) · ",Ys(B.size)," · saved locally"]}),c.jsxs("span",{className:"pdf-analysis-state","data-testid":`status-ede-${B.id}`,children:["EDE: ",B.analysisStatus==="needs-review"?`${B.analysisRecordCount??0} candidate(s) · review required`:B.analysisStatus==="no-tags"?"No tag candidates found":B.analysisStatus==="extracting"?_===B.id?"Extraction in progress":"Paused · resume available":B.analysisStatus==="failed"?"Extraction failed":B.analysisStatus==="paused"?"Paused · resume available":"Not extracted yet"," · AutoCAD: not connected"]}),B.analysisStatus==="failed"&&B.analysisMessage&&c.jsx("span",{className:"pdf-analysis-state",role:"status",children:B.analysisMessage})]})]}),c.jsxs("span",{className:"pdf-row-actions",children:[c.jsxs("label",{className:"pdf-batch-choice",children:[c.jsx("input",{type:"checkbox",checked:$2(f,B.id),disabled:Ke||$,onChange:()=>xt(B.id),"aria-label":`Process ${B.alias} in the AutoCAD batch`,"data-testid":`checkbox-batch-pdf-${B.id}`}),c.jsx("span",{children:"Process"})]}),B.analysisStatus!=="needs-review"&&_!==B.id&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:Ke,onClick:()=>{_a(B)},"data-testid":`button-extract-ede-${B.id}`,children:[c.jsx(Zn,{size:13})," ",B.analysisStatus==="failed"?"Retry EDE":B.analysisStatus==="paused"||B.analysisStatus==="extracting"?"Resume EDE":"Create EDE data"]}),(B.analysisStatus==="needs-review"||B.analysisStatus==="no-tags")&&c.jsx(ha,{className:"btn pdf-extract-btn",href:`/workspace/${a==="PFD"?"pfd":"pid"}/engineering-data?source=${encodeURIComponent(B.id)}`,children:"Open EDE"}),B.analysisStatus==="needs-review"&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:Ke,onClick:()=>{_a(B)},"data-testid":`button-refresh-source-links-${B.id}`,children:[c.jsx(Fw,{size:13})," Recheck tags & locations"]}),_===B.id&&c.jsxs("span",{className:"pdf-running-label",children:[c.jsx(Oa,{size:13,className:"pdf-spin"})," Reading"]}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Preview ${B.alias}`,onClick:()=>{O(B.id),P(null),ae(1)},"data-testid":`button-preview-pdf-${B.id}`,children:c.jsx(vw,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Download original source ${B.alias}`,onClick:()=>{Pt(B)},"data-testid":`button-download-pdf-${B.id}`,children:c.jsx(Rr,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn danger","aria-label":`Remove ${B.alias}`,onClick:()=>oe({type:"one",id:B.id}),"data-testid":`button-remove-pdf-${B.id}`,children:c.jsx(Zu,{size:15})})]})]},B.id)):c.jsxs("div",{className:"pdf-queue-empty","data-testid":"empty-pdf-queue",children:[c.jsx(Zn,{size:18}),c.jsxs("span",{children:["No saved PDFs for ",a]}),c.jsx("small",{children:"Add PDFs to keep them on this device. You can add several at once."})]})]}),c.jsx("div",{className:"pdf-page-summary",style:{marginTop:10},"data-testid":"text-pdf-page-summary",children:u.length?`${u.length} PDF(s) · ${Oe} total page(s)`:Ke?"Working on your files":"No readable PDFs saved yet"}),u.length>=100&&c.jsxs("div",{className:"pdf-trust-note",role:"note","data-testid":"text-large-batch-resume",children:[c.jsx(Qn,{size:15}),c.jsxs("span",{children:["This batch contains ",u.length," PDFs and ",Oe," pages. The AutoCAD runner tracks every page in a local journal beside the DWGs, so you can resume later with the same unchanged kit and output name. Progress is recorded on the Windows workstation, not in this browser."]})]}),Re&&c.jsxs("div",{className:"pdf-source-box","data-testid":"panel-source-page",children:[c.jsxs("div",{className:"pdf-page-select",children:[c.jsx("label",{htmlFor:"pdf-page-picker",children:"Source page"}),c.jsx("select",{id:"pdf-page-picker",value:X,onChange:B=>ae(Number(B.target.value)),"data-testid":"select-source-page","aria-label":"Select source page",children:Array.from({length:Re.pageCount},(B,me)=>c.jsxs("option",{value:me+1,children:["Page ",me+1]},me+1))}),c.jsxs("span",{children:["of ",Re.pageCount," in ",Re.alias]})]}),c.jsx(M1,{fileId:Re.id,alias:Re.alias,pageCount:Re.pageCount,page:X,onPageChange:ae,loadBytes:ei,markers:lt,onMarkerClick:B=>{const me=a==="PFD"?"pfd":"pid";window.location.assign(`/workspace/${me}/engineering-data?source=${encodeURIComponent(Re.id)}&record=${encodeURIComponent(B)}`)}})]}),c.jsxs("div",{className:"pdf-capabilities",children:[c.jsxs("div",{className:"pdf-capability-storage pdf-dxf-export",children:[c.jsx("div",{className:"capability-heading",children:c.jsx("strong",{children:"Create DXF — no AutoCAD needed"})}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Scale multiplier · 1 = PDF paper size in mm"}),c.jsx("input",{type:"number",min:"0.000001",step:"any",value:Be,onChange:B=>ma(B.target.value),"aria-label":"DXF scale multiplier"})]}),c.jsx("button",{className:"btn primary",type:"button",disabled:!u.length||Ke||m||be||$||!!b,onClick:()=>{ye(Re??void 0)},"data-testid":"button-export-dxf",children:be?c.jsxs(c.Fragment,{children:[c.jsx(Oa,{size:14,className:"pdf-spin"})," Creating DXF…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Rr,{size:14})," ",Re?`${Re.alias} · Download DXF pages`:"Download all DXF pages"]})}),Re&&u.length>1&&c.jsx("button",{className:"btn",type:"button",disabled:Ke||m||be||$||!!b,onClick:()=>{ye()},"data-testid":"button-export-all-dxf",children:"All PDFs · Download DXF pages"}),c.jsx("p",{children:"One editable DXF per vector PDF page. Scanned pages are not automatically traced. This exports raw PDF geometry, not library-standard symbols. Source details may remain—review/redact before sharing."}),et&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:et}),c.jsx(xS,{})]}),c.jsxs("div",{className:"pdf-capability-convert",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"01"}),c.jsx("strong",{children:"Page check"})]}),c.jsx("div",{className:"pdf-page-summary","data-testid":"text-pdf-page-summary",children:u.length?`${u.length} PDF(s) · ${Oe} total page(s)`:"Add PDFs to prepare an AutoCAD runner."})]}),c.jsxs("div",{className:"pdf-capability-storage",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"02"}),c.jsx("strong",{children:"Local AutoCAD runner"})]}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Approved CAD mappings"}),c.jsxs("select",{value:ne,disabled:ut,onChange:B=>Y(B.target.value),"aria-label":"Approved CAD mappings for this runner",children:[c.jsx("option",{value:"",children:"Legends Library only"}),we.map(B=>c.jsx("option",{value:B.id,children:B.label},B.id))]})]}),c.jsxs("div",{className:"runner-group-hint","aria-live":"polite","data-testid":"runner-mapping-inventory",children:[de?c.jsxs(c.Fragment,{children:[c.jsxs("strong",{children:[de.symbols," usable approved blocks · ",de.layers," layers · ",de.textStyles," Legends text styles for ",a]}),de.symbols===0&&c.jsxs("p",{role:"status",children:["No compatible approved blocks: this kit cannot convert PDF symbols into approved CAD blocks. Approve ",a," or Shared symbols with an approved target layer first. Other-discipline symbols are not reused automatically."]}),de.textStyles===0&&c.jsx("p",{children:"The runner uses the fixed global Arial Narrow style automatically; imported text height and position stay unchanged. Unconfirmed PDF text stays visible for review, and loose text needs an approved final text layer after review."}),de.otherDisciplineSymbols>0&&c.jsxs("p",{children:[de.otherDisciplineSymbols," approved symbol(s) belong to the other discipline and are excluded."]})]}):c.jsx("p",{children:"The mapping library could not be checked. Do not assume blocks or text formatting are available."}),c.jsx("button",{type:"button",className:"btn btn-ghost btn-small",onClick:()=>U(B=>B+1),children:"Refresh mapping counts"}),V&&c.jsxs("p",{role:"status",children:["Local mapping counts checked at ",V,". Refresh recounts saved approvals; it does not approve symbols."]})]}),c.jsxs("label",{className:"runner-group-choice",children:[c.jsxs("span",{children:[a," client folder for this batch"]}),c.jsxs("select",{value:Z,disabled:!Tt.length||ut||$,onChange:B=>l(B.target.value),"aria-label":`${a} client folder for title block`,children:[c.jsx("option",{value:"",children:Tt.length?`Choose a ${a} client folder`:`Create a ${a} client folder first`}),Tt.map(B=>c.jsx("option",{value:B.id,children:B.label},B.id))]})]}),c.jsx("p",{className:"runner-group-hint",children:"Choose the client folder for this batch. All selected PDFs will use its title block, so select PDFs from one project."}),Z?c.jsxs("div",{className:"runner-title-block","aria-label":"Project title block",children:[c.jsxs("div",{className:"runner-title-block-heading",children:[c.jsxs("strong",{children:["Client title block",o&&Z===s?` · ${o}`:""]}),vt?c.jsx("span",{children:"Checking this browser…"}):Ie?c.jsxs("span",{children:["Saved locally · ",Ys(Ie.bytes)]}):c.jsx("span",{children:"Required for this project"})]}),!vt&&!Ie&&c.jsx("p",{children:"Upload a standalone .DWG for this project. The runner attaches it as a model-space XREF at (0,0,0), rotation 0, scale 1:1, preserving its layers. Use matching drawing units."}),c.jsx("input",{ref:He,className:"runner-title-block-file",type:"file",accept:".dwg,application/acad","aria-label":"Choose project title block DWG",onChange:B=>{kt(B.currentTarget.files?.[0])}}),c.jsxs("div",{className:"runner-title-block-actions",children:[c.jsx("button",{className:"btn",type:"button",disabled:vt||ut||$,onClick:()=>He.current?.click(),children:ut?c.jsxs(c.Fragment,{children:[c.jsx(Oa,{size:14,className:"pdf-spin"})," Saving locally…"]}):c.jsxs(c.Fragment,{children:[c.jsx(jm,{size:14})," ",Ie?"Replace title block DWG":"Upload title block DWG"]})}),Ie&&c.jsx("button",{className:"btn",type:"button",disabled:ut||$,onClick:()=>{I()},children:"Remove"})]}),c.jsxs("p",{className:"runner-title-block-note",children:["The file stays in this browser and is added only to this ",a," workspace’s local runner. Use the same project output folder for future batches: all page DWGs reuse one PROJECT_TITLE_BLOCK.dwg by relative XREF. The runner keeps a local scope marker beside it; upload the shared DWG once, not the marker. Existing numbered copies are only reported, never deleted."]}),Ft&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:Ft})]}):c.jsx("p",{className:"runner-title-block-empty",children:Tt.length?`Select a ${a} client folder above to upload or use its title block.`:"Create a Technology, Project or Proposal, and Client folder to use a client title block."}),c.jsx(DS,{scope:`${a}:${ne||"legends-default"}`},`${a}:${ne}`),c.jsx("button",{className:"btn primary",type:"button",disabled:!nt.length||!Z||!Ie||Ke||m||$||vt||ut||!!b,"aria-describedby":"runner-description",onClick:()=>{J()},"data-testid":"button-convert-to-dwg",children:$?c.jsxs(c.Fragment,{children:[c.jsx(Oa,{size:14,className:"pdf-spin"})," Preparing…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Zw,{size:14})," Prepare AutoCAD batch runner"]})}),c.jsx("p",{id:"runner-description",children:"The ZIP contains only the checked PDFs, individually exported approved blocks, and the selected project’s one shared title-block DWG XREF. A project folder and its saved title block are required for automatic 841 × 594 mm scaling. It does not include original mapping source DWGs. Run it in Windows AutoCAD. Unmatched symbols retain source geometry or use an approved same-category fallback with a red review cloud and source-page reference. A local journal tracks each page and lets the same unchanged batch resume without overwriting completed DWGs."}),Lt&&c.jsxs("div",{className:"pdf-runner-download-ready","data-testid":"prepared-runner-download",children:[c.jsxs("div",{className:"pdf-runner-download-copy",children:[c.jsx("strong",{children:"Runner ZIP ready to save"}),c.jsxs("span",{children:[Lt.filename," · ",Ys(Lt.bytes)," · ",Lt.sourceCount," PDF(s) · ",Lt.pageCount," page(s)"]})]}),c.jsxs("a",{className:"btn primary",href:Lt.url,download:Lt.filename,"data-testid":"button-download-prepared-runner",onClick:()=>z(`Browser download requested for ${Lt.filename}. If the ZIP does not appear, click Download ZIP again or check your browser's Downloads list.`),children:[c.jsx(Rr,{size:14})," Download ZIP"]})]}),he&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:he})]})]}),c.jsxs("div",{className:"pdf-final-status",role:"note","data-testid":"text-conversion-unavailable",children:[c.jsxs("strong",{children:[c.jsx(qw,{size:13,style:{verticalAlign:"-2px"}})," AutoCAD 2020 is not connected to this browser."]})," ","DXF vector export runs directly in this browser. Native DWG still requires the downloaded helper to run in Windows AutoCAD; the browser does not connect to AutoCAD."]}),c.jsx(AA,{discipline:a,onAddPdfs:Rn,clientFolderId:s||void 0,clientFolderLabel:o||void 0})]})}function Xy({discipline:a}){const[r]=M.useState(()=>{try{return{hierarchy:P1(),recovery:null}}catch(oe){const ne=oe instanceof di?oe:new di("Saved groups could not be loaded from this browser.");return{hierarchy:Qu(),recovery:{message:ne.message,rawValue:ne.rawValue}}}}),[s,o]=M.useState(r.hierarchy),[l,u]=M.useState(r.recovery),[g,f]=M.useState(""),[y,m]=M.useState(null),[p,b]=M.useState(""),[v,x]=M.useState(null),N=s[a],D=a==="pfd"?"PFD":"P&ID",A=tp(N,v),S=A&&(A.kind==="client"||A.kind==="legacy")?A.id:"",L=S?kb(N).find(oe=>oe.id===S)?.label??A?.name??"":"",_=oe=>x(oe||null);M.useEffect(()=>{if(!l)try{k1(s),f("")}catch(oe){f(oe instanceof Error?oe.message:"Groups could not be saved in this browser.")}},[s,l]);const C=(oe,ne,Y=[])=>({id:globalThis.crypto?.randomUUID?.()??`group-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:oe,kind:ne,expanded:!0,children:Y}),w=(oe,ne)=>{b(ne),m(oe)},O=()=>{const oe=C("New technology","technology",[C("Projects","projects"),C("Proposals","proposals")]);o(ne=>({...ne,[a]:[...ne[a],oe]})),w(oe.id,oe.name),x(oe.id)},R=oe=>{const ne=tp(N,oe);if(!ne)return;const Y=ne.kind==="projects"?"project":ne.kind==="proposals"?"proposal":ne.kind==="project"||ne.kind==="proposal"?"client":null;if(!Y)return;const ge=C(Y==="project"?"New project":Y==="proposal"?"New proposal":"New client",Y);o(we=>({...we,[a]:Yl(we[a],oe,j=>({...j,expanded:!0,children:[...j.children,ge]}))})),w(ge.id,ge.name),x(ge.id)},P=oe=>{const ne=p.trim();if(!ne||ne.length>Zl){f(`Folder names must be 1–${Zl} characters.`),m(null);return}o(Y=>({...Y,[a]:Yl(Y[a],oe,Z=>({...Z,name:ne}))})),m(null),f("")},k=()=>m(null),te=oe=>o(ne=>({...ne,[a]:Yl(ne[a],oe,Y=>({...Y,expanded:!Y.expanded}))})),X=oe=>{window.confirm(`Delete “${oe.name}” and all folders inside it? Saved title blocks and CAD sources are not deleted.`)&&(Lb(oe,v)&&x(null),Cv(oe,y)&&m(null),o(ne=>({...ne,[a]:Ib(ne[a],oe.id)})))},ae=()=>{if(l?.rawValue===null||l?.rawValue===void 0)return;const oe=new Blob([l.rawValue],{type:"application/json;charset=utf-8"}),ne=URL.createObjectURL(oe),Y=document.createElement("a");Y.href=ne,Y.download="mapping-studio-hierarchy-backup.json",Y.click(),window.setTimeout(()=>URL.revokeObjectURL(ne),1e3)},pe=()=>{if(window.confirm("Clear the unreadable hierarchy saved in this browser? This cannot be undone. Download a backup first if you may need the saved data."))try{window.localStorage.removeItem(Mp),window.localStorage.removeItem(Rb),o(Qu()),u(null),f("")}catch{f("Browser storage could not be cleared. The saved hierarchy remains locked and unchanged.")}};return c.jsxs("main",{className:"hierarchy-page","data-discipline":a,children:[c.jsxs("header",{className:"hierarchy-topbar",children:[c.jsxs(ha,{href:"/",className:"studio-wordmark","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),c.jsxs("div",{className:"hierarchy-top-actions",children:[c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Saved on this device"]}),c.jsxs(ha,{href:"/",className:"btn subtle","data-testid":"link-discipline-selection",children:[c.jsx(ib,{size:14})," Disciplines"]})]})]}),c.jsxs("div",{className:"hierarchy-frame",children:[c.jsxs("aside",{className:"hierarchy-sidebar",children:[c.jsx("div",{className:"sidebar-label",children:"DISCIPLINES"}),c.jsxs(ha,{href:"/workspace/pfd",className:`discipline-nav ${a==="pfd"?"active":""}`,"data-testid":"nav-pfd",children:[c.jsx(Lw,{size:16})," PFD"]}),c.jsxs(ha,{href:"/workspace/pid",className:`discipline-nav ${a==="pid"?"active":""}`,"data-testid":"nav-pid",children:[c.jsx(ri,{size:16})," P&ID"]}),c.jsxs("div",{className:"sidebar-local-note",children:[c.jsx(Qn,{size:14}),c.jsx("span",{children:"PFD and P&ID groups stay separate."})]})]}),c.jsxs("section",{className:"hierarchy-main","aria-label":`${D} workspace`,children:[c.jsxs("div",{className:"hierarchy-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[D," workspace"]}),c.jsx("h1",{children:D}),c.jsx("p",{children:"Organize technology, project/proposal and client folders. Common standards stay in the company library."})]}),c.jsxs("div",{className:"hierarchy-heading-actions",children:[c.jsxs(ha,{href:`/workspace/${a}/engineering-data`,className:"btn edm-entry-link","data-testid":`link-engineering-data-${a}`,children:[c.jsx(kp,{size:14})," Engineering data"]}),c.jsxs("button",{className:"btn primary",onClick:O,disabled:!!l,"data-testid":"button-add-group",children:[c.jsx(pi,{size:15})," New technology"]})]})]}),l&&c.jsxs("div",{className:"hierarchy-recovery",role:"alert","data-testid":"status-hierarchy-recovery",children:[c.jsxs("div",{className:"recovery-title",children:[c.jsx(_r,{size:17}),c.jsx("strong",{children:"Saved groups need recovery"})]}),c.jsxs("p",{children:[l.message," Editing is disabled to protect the saved data."]}),l.rawValue!==null?c.jsx("button",{className:"btn",onClick:ae,"data-testid":"button-download-hierarchy-backup",children:"Download raw backup"}):c.jsx("p",{className:"recovery-unavailable",children:"A raw backup is unavailable because browser storage could not be read."}),c.jsx("button",{className:"btn danger",onClick:pe,"data-testid":"button-clear-hierarchy-storage",children:"Clear saved data and start over"})]}),g&&!l&&c.jsxs("div",{className:"storage-banner",role:"alert","data-testid":"status-hierarchy-storage",children:[c.jsx(_r,{size:15}),g]}),c.jsxs("div",{className:"hierarchy-panel",children:[c.jsxs("div",{className:"tree-head",children:[c.jsx("span",{children:"TECHNOLOGY · PROJECTS · PROPOSALS · CLIENTS"}),c.jsxs("span",{"data-testid":"text-group-count",children:[ep(N)," ",ep(N)===1?"folder":"folders"]})]}),N.length===0?c.jsxs("div",{className:"hierarchy-empty","data-testid":"empty-hierarchy",children:[c.jsx("div",{className:"empty-folder",children:c.jsx(Xu,{size:23})}),c.jsx("strong",{children:l?"Folders are locked":"No technology folders yet"}),c.jsx("p",{children:l?"Recover or clear the saved data to continue.":"Create a technology folder, then add projects or proposals and their clients."}),!l&&c.jsxs("button",{className:"btn",onClick:O,"data-testid":"button-create-first-group",children:[c.jsx(pi,{size:14})," Create first technology"]})]}):c.jsx("div",{className:"tree-list",role:"tree","aria-label":`${D} project folders`,children:N.map(oe=>c.jsx(Rv,{node:oe,depth:0,selectedId:v,editingId:y,editName:p,setEditName:b,onSelect:x,onToggle:te,onAdd:R,onRename:w,onCommit:P,onCancel:k,onDelete:X,disabled:!!l},oe.id))})]}),S&&c.jsxs("div",{className:"hierarchy-client-context",role:"status","data-testid":"selected-client-folder",children:[c.jsx(Xu,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:L})," selected. Its title block and client source library will be used below."]})]}),c.jsxs("div",{className:"hierarchy-footnote",children:[c.jsx(Qn,{size:14}),c.jsx("span",{children:"Saved in this browser. PFD and P&ID folder trees stay separate."})]}),c.jsx(Q2,{discipline:a==="pfd"?"PFD":"P&ID",groups:N,selectedClientId:S,selectedClientLabel:L,onSelectClient:_},a)]})]})]})}function Cv(a,r){return r!==null&&(a.id===r||a.children.some(s=>Cv(s,r)))}function Rv({node:a,depth:r,selectedId:s,editingId:o,editName:l,setEditName:u,onSelect:g,onToggle:f,onAdd:y,onRename:m,onCommit:p,onCancel:b,onDelete:v,disabled:x}){const N=o===a.id,D=["projects","proposals","project","proposal"].includes(a.kind),A=!["projects","proposals"].includes(a.kind),S=a.kind==="projects"?"Add project":a.kind==="proposals"?"Add proposal":a.kind==="project"||a.kind==="proposal"?"Add client":"Add folder",L={technology:"Technology",projects:"Projects",proposals:"Proposals",project:"Project",proposal:"Proposal",client:"Client",legacy:"Existing group"},_=M.useRef(null),C=()=>{_.current!==a.id&&(_.current=a.id,p(a.id))},w=()=>{_.current!==a.id&&(_.current=a.id,b())};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`tree-row ${s===a.id?"selected":""}`,role:"treeitem","aria-expanded":a.children.length?a.expanded:void 0,"aria-level":r+1,style:{"--tree-depth":r},"data-testid":`tree-group-${a.id}`,children:[c.jsx("button",{className:"tree-toggle","aria-label":`${a.expanded?"Collapse":"Expand"} ${a.name}`,disabled:x,onClick:()=>f(a.id),"data-testid":`button-toggle-group-${a.id}`,children:a.expanded?c.jsx(Cr,{size:15}):c.jsx(Pp,{size:15})}),c.jsx(Xu,{className:"tree-folder",size:16}),N?c.jsx("input",{autoFocus:!0,maxLength:Zl,className:"tree-rename-input","aria-label":"Folder name",value:l,disabled:x,onChange:O=>u(O.target.value),onFocus:()=>{_.current=null},onBlur:C,onKeyDown:O=>{O.key==="Enter"&&C(),O.key==="Escape"&&(O.preventDefault(),w())},"data-testid":`input-rename-group-${a.id}`}):c.jsx("button",{className:"tree-name",disabled:x,onClick:()=>g(a.id),onDoubleClick:()=>A&&m(a.id,a.name),title:"Select folder; double-click to rename","data-testid":`button-select-group-${a.id}`,children:a.name}),c.jsx("span",{className:"tree-kind-badge",children:L[a.kind]}),c.jsxs("span",{className:"tree-actions",children:[D&&c.jsx("button",{"aria-label":`${S} under ${a.name}`,title:S,disabled:x,onClick:()=>y(a.id),"data-testid":`button-add-subgroup-${a.id}`,children:c.jsx(pi,{size:14})}),A&&c.jsx("button",{"aria-label":`Rename ${a.name}`,title:"Rename folder",disabled:x,onClick:()=>m(a.id,a.name),"data-testid":`button-rename-group-${a.id}`,children:c.jsx(Yw,{size:13})}),A&&c.jsx("button",{"aria-label":`Delete ${a.name}`,title:"Delete folder",disabled:x,onClick:()=>v(a),"data-testid":`button-delete-group-${a.id}`,children:c.jsx(hi,{size:13})})]})]}),a.expanded&&a.children.map(O=>c.jsx(Rv,{node:O,depth:r+1,selectedId:s,editingId:o,editName:l,setEditName:u,onSelect:g,onToggle:f,onAdd:y,onRename:m,onCommit:p,onCancel:b,onDelete:v,disabled:x},O.id))]})}function J2({order:a,hidden:r,onChange:s}){const o=(l,u)=>{const g=[...a];[g[l],g[l+u]]=[g[l+u],g[l]],s(g,r)};return c.jsxs("details",{className:"edm-column-picker",children:[c.jsxs("summary",{children:["Columns (",a.length-r.length,")"]}),c.jsxs("div",{className:"edm-column-options",children:[c.jsx("p",{children:"Use these checkboxes to show or hide columns. The filter icon in each heading filters row values, including (Blanks), and does not hide the column."}),a.map((l,u)=>c.jsxs("div",{className:"edm-column-option",children:[c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:!r.includes(l),"aria-label":`Show ${It[l]}`,disabled:!r.includes(l)&&r.length===a.length-1,onChange:()=>s(a,r.includes(l)?r.filter(g=>g!==l):[...r,l])}),It[l]]}),c.jsx("button",{type:"button",disabled:u===0,onClick:()=>o(u,-1),"aria-label":`Move ${It[l]} up`,children:c.jsx(lw,{size:14})}),c.jsx("button",{type:"button",disabled:u===a.length-1,onClick:()=>o(u,1),"aria-label":`Move ${It[l]} down`,children:c.jsx(nw,{size:14})})]},l)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>s([...Wn],[]),children:"Reset columns"})]})]})}function Wy(a){const r=Math.min(272,window.innerWidth-16),s=Math.min(360,window.innerHeight-16),o=Math.max(8,Math.min(a.left,window.innerWidth-r-8)),l=a.bottom+4;return{top:l+s<=window.innerHeight-8?l:Math.max(8,a.top-s-4),left:o}}function Ky({label:a,options:r,selectedValues:s,onApply:o}){const l=M.useRef(null),u=M.useRef(null),g=M.useRef(null),[f,y]=M.useState(!1),[m,p]=M.useState(null),[b,v]=M.useState([]),[x,N]=M.useState(""),D=s!==void 0,A=M.useMemo(()=>r.map(R=>R.value),[r]),S=M.useMemo(()=>{const R=x.trim().toLowerCase();return R?r.filter(P=>(P.value||"(Blanks)").toLowerCase().includes(R)):r},[r,x]),L=r.reduce((R,P)=>R+Number(b.includes(P.value)),0),_=r.length>0&&L===r.length;M.useEffect(()=>{g.current&&(g.current.indeterminate=L>0&&L<r.length)},[b,r.length,L]),M.useEffect(()=>{if(!f)return;const R=()=>{const te=l.current?.getBoundingClientRect();te&&p(Wy(te))},P=te=>{const X=te.target;!u.current?.contains(X)&&!l.current?.contains(X)&&y(!1)},k=te=>{te.key==="Escape"&&y(!1)};return R(),document.addEventListener("pointerdown",P),document.addEventListener("keydown",k),window.addEventListener("resize",R),window.addEventListener("scroll",R,!0),()=>{document.removeEventListener("pointerdown",P),document.removeEventListener("keydown",k),window.removeEventListener("resize",R),window.removeEventListener("scroll",R,!0)}},[f]);const C=()=>{if(f){y(!1);return}const R=l.current?.getBoundingClientRect();R&&p(Wy(R)),v(s?[...s]:A),N(""),y(!0)},w=R=>{v(P=>P.includes(R)?P.filter(k=>k!==R):[...P,R])},O=()=>{o(b),y(!1)};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{ref:l,type:"button",className:`edm-column-filter-trigger${D?" active":""}`,title:`${D?"Filtered":"Filter"} ${a}`,"aria-label":`${D?"Edit filter for":"Filter"} ${a}`,"aria-expanded":f,onClick:C,"data-testid":`button-filter-${a.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[c.jsx(_w,{size:12}),c.jsx(Cr,{size:10})]}),f&&m&&ic.createPortal(c.jsxs("div",{ref:u,className:"edm-column-filter-menu",style:{top:m.top,left:m.left},role:"dialog","aria-label":`${a} filter`,"data-testid":"menu-column-filter",children:[c.jsxs("strong",{className:"edm-column-filter-title",children:["Filter: ",a]}),c.jsxs("label",{className:"edm-column-filter-search",children:[c.jsx(fi,{size:14}),c.jsx("input",{value:x,onChange:R=>N(R.target.value),placeholder:"Search values…","aria-label":`Search ${a} values`})]}),c.jsxs("label",{className:"edm-column-filter-select-all",children:[c.jsx("input",{ref:g,type:"checkbox",checked:_,disabled:!r.length,onChange:()=>v(_?[]:A)}),c.jsx("span",{children:"Select all"})]}),c.jsxs("div",{className:"edm-column-filter-options",role:"group","aria-label":`${a} values`,children:[!S.length&&c.jsx("p",{className:"edm-column-filter-empty",children:r.length?"No matching values.":"No values in this drawing yet."}),S.map(R=>c.jsxs("label",{className:"edm-column-filter-option",children:[c.jsx("input",{type:"checkbox",checked:b.includes(R.value),onChange:()=>w(R.value)}),c.jsx("span",{children:R.value||"(Blanks)"}),c.jsx("small",{children:R.count})]},JSON.stringify(R.value)))]}),c.jsxs("div",{className:"edm-column-filter-actions",children:[c.jsx("button",{type:"button",className:"edm-column-filter-clear",disabled:!D,onClick:()=>{o(void 0),y(!1)},children:"Clear filter"}),c.jsx("span",{}),c.jsx("button",{type:"button",onClick:()=>y(!1),children:"Cancel"}),c.jsx("button",{type:"button",className:"apply",disabled:!r.length,onClick:O,children:"Apply"})]})]}),document.body)]})}function _v(a){return{headers:["#","Object type",...a.fields.map(r=>It[r])],rows:a.rows.map((r,s)=>[s+1,r.type,...a.fields.map(o=>Tn(r,o))])}}function Iv(a){return a.groups.map(r=>{const s=new Map;for(const o of a.rows){const l=Tn(o,r)||"—";s.set(l,(s.get(l)??0)+1)}return{field:r,label:It[r],values:[...s].map(([o,l])=>({value:o,count:l}))}})}function eD(a){const r=_v(a);return Sv(r.headers,r.rows)}async function tD(a,r){const{default:s}=await pn(async()=>{const{default:p}=await import("./exceljs.min-CSjoC5iA.js").then(b=>b.e);return{default:p}},__vite__mapDeps([2,1])),o=new s.Workbook;o.creator="gaurav.cbiindia";const l=o.addWorksheet("Engineering data",{pageSetup:{orientation:"landscape",fitToPage:!0,fitToWidth:1,fitToHeight:0}}),u=_v(a),g=Iv(a),f=u.headers.length;["Engineering Data Editor",`${r.discipline} · ${r.drawing}${r.revision?` · ${r.revision}`:""} · ${a.rows.length} records`,`Object type: ${r.filter} · Search: ${r.search||"(none)"} · Sort: ${r.sort}`,...g.map(p=>{const b=p.values.map(({value:v,count:x})=>`${v} (${x})`).join(" · ");return`${p.label}: ${b.length>1500?b.slice(0,1500)+"… (see Group summaries sheet)":b}`})].forEach((p,b)=>{const v=l.addRow([p]);l.mergeCells(v.number,1,v.number,f),v.height=b===0?30:32,v.getCell(1).font={name:"Calibri",size:b===0?16:10,bold:b===0,color:{argb:b===0?"FFF0F0E8":"FF405A55"}},v.getCell(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:b===0?"FF203940":"FFF9F8F2"}},v.getCell(1).alignment={vertical:"middle",wrapText:!0}});const m=l.addRow(u.headers);if(m.height=30,m.eachCell(p=>{p.font={name:"Calibri",bold:!0,size:10,color:{argb:"FF405A55"}},p.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFF0F1E9"}},p.alignment={vertical:"middle",wrapText:!0},p.border={bottom:{style:"thin",color:{argb:"FFD9DED5"}}}}),u.rows.forEach((p,b)=>{const v=l.addRow(p);v.height=30,v.eachCell({includeEmpty:!0},(x,N)=>{x.numFmt=N===1?"0":"@",x.font={name:N>2&&a.fields[N-3]==="itemTag"?"Consolas":"Calibri",size:10,color:{argb:"FF405A55"}},x.alignment={vertical:"middle",wrapText:!0},x.fill={type:"pattern",pattern:"solid",fgColor:{argb:b%2?"FFF2F5EE":"FFFBFAF6"}},x.border={right:{style:"thin",color:{argb:"FFECEEE8"}},bottom:{style:"thin",color:{argb:"FFE7E9E2"}}}})}),l.columns.forEach((p,b)=>{const v=a.fields[b-2];p.width=b===0?7:b===1?18:v==="notes"?52:v==="description"||v==="connection"?38:Math.max(18,u.headers[b].length+3)}),l.views=[{state:"frozen",ySplit:m.number,xSplit:2}],l.autoFilter={from:{row:m.number,column:1},to:{row:m.number+u.rows.length,column:f}},l.pageSetup.printTitlesRow=`${m.number}:${m.number}`,l.headerFooter.oddFooter="© gaurav.cbiindia | &P of &N",g.length){const p=o.addWorksheet("Group summaries");p.columns=[{header:"Group field",width:25},{header:"Value",width:42},{header:"Records",width:12}],g.forEach(b=>b.values.forEach(({value:v,count:x})=>p.addRow([b.label,v,x]))),p.getRow(1).font={bold:!0},p.views=[{state:"frozen",ySplit:1}],p.autoFilter="A1:C1"}return new Uint8Array(await o.xlsx.writeBuffer())}function Lv(a,r){const s=String(r==="type"?a.type:Tn(a,r));return s.trim()?s:""}function aD(a,r){const s=new Map;for(const o of a){const l=Lv(o,r);s.set(l,(s.get(l)??0)+1)}return[...s.entries()].map(([o,l])=>({value:o,count:l})).sort((o,l)=>o.value===""?l.value===""?0:1:l.value===""?-1:o.value.localeCompare(l.value,void 0,{numeric:!0,sensitivity:"base"}))}function Zy(a,r){return Object.entries(r).every(([s,o])=>o===void 0||o.includes(Lv(a,s)))}const nD=["All types",...vi],rD=["type",...Wn],Pv="pid-mapping-studio:engineering-column-widths:v1",Rp=44,_p=720,sD=a=>a==="rowNumber"?44:a==="type"?154:a==="itemTag"?250:a==="notes"?300:a==="description"||a==="stableId"?220:a==="drawingRef"?180:a==="sourcePage"?100:a==="reviewStatus"?150:136;function oD(){try{const a=JSON.parse(window.localStorage.getItem(Pv)??"{}");return!a||typeof a!="object"||Array.isArray(a)?{}:Object.fromEntries(Object.entries(a).filter(r=>typeof r[1]=="number"&&Number.isFinite(r[1])).map(([r,s])=>[r,Math.max(Rp,Math.min(_p,s))]))}catch{return{}}}function Qy(a){try{window.localStorage.setItem(Pv,JSON.stringify(a))}catch{}}const iD=a=>a.split(/\s+/).map(r=>r[0]).join("").slice(0,2).toUpperCase();function Jy({discipline:a}){const[r]=M.useState(()=>{try{return{drawings:Ei(a),raw:Xs(a),error:""}}catch{return{drawings:[],raw:null,error:"Saved engineering data could not be read. Editing is blocked to protect it. Export a raw backup before recovery."}}}),[s,o]=M.useState(r.drawings),l=M.useRef(s),u=M.useRef(!0),g=M.useRef(r.raw),[f,y]=M.useState(s[0]?.id??""),m=s.find(I=>I.id===f)??s[0]??{id:"",name:"No drawing selected",revision:"",rows:[]};M.useEffect(()=>{const I=new URLSearchParams(window.location.search).get("source"),J=I?s.find(ye=>ye.sourcePdfId===I):void 0;J&&J.id!==f&&y(J.id)},[s,f]),M.useEffect(()=>{j({}),O(""),te("All types"),ae(0)},[f,a]);const p=m.rows,[b,v]=M.useState(p[0]?.id??""),[x,N]=M.useState(""),[D,A]=M.useState("Rev 0"),[S,L]=M.useState(""),[_,C]=M.useState("Equipment"),[w,O]=M.useState(""),[R,P]=M.useState(""),[k,te]=M.useState("All types"),[X,ae]=M.useState(0),[pe,oe]=M.useState(12),[ne,Y]=M.useState({field:"itemTag",direction:1}),[Z,ge]=M.useState([]),[we,j]=M.useState({}),[ee,U]=M.useState([...Wn]),[V,ie]=M.useState([]),[de,ve]=M.useState(oD),Ie=M.useRef(de),Pe=M.useRef(null),vt=M.useRef(null),[at,ut]=M.useState("records"),gt=ee.filter(I=>!V.includes(I)),Ft=["rowNumber","type",...gt],Et=I=>de[I]??sD(I),$=Ft.reduce((I,J)=>I+Et(J),0),[fe,he]=M.useState(!1),[z,ue]=M.useState(""),[Ne,be]=M.useState(""),[qe,et]=M.useState(r.error),Fe=(I,J,ye=!1)=>{const Re={...Ie.current,[I]:Math.max(Rp,Math.min(_p,Math.round(J)))};Ie.current=Re,ve(Re),ye&&Qy(Re)},Be=I=>{const J=document.createElement("canvas").getContext("2d"),ye=Pe.current?getComputedStyle(Pe.current).font:"";J&&(J.font=ye||"12px sans-serif");const Re=I==="rowNumber"?"#":I==="type"?"Object type":It[I],lt=I==="rowNumber"?[]:I==="type"?p.map(B=>B.type):p.map(B=>Tn(B,I)),Oe=B=>B.split(/\r?\n/).reduce((me,Se)=>Math.max(me,J?J.measureText(Se||"—").width:Se.length*7),0),Ke=lt.reduce((B,me)=>Math.max(B,Oe(me)),Oe(Re));Fe(I,Ke+(I==="itemTag"?158:I==="rowNumber"?18:54),!0)},ma=(I,J)=>{J.preventDefault(),J.stopPropagation(),J.currentTarget.setPointerCapture(J.pointerId),vt.current={column:I,pointerId:J.pointerId,startX:J.clientX,startWidth:Et(I)}},Ee=(I,J)=>{const ye=vt.current;!ye||ye.column!==I||ye.pointerId!==J.pointerId||(J.preventDefault(),Fe(I,ye.startWidth+J.clientX-ye.startX))},He=(I,J)=>{const ye=vt.current;!ye||ye.column!==I||ye.pointerId!==J.pointerId||(vt.current=null,Qy(Ie.current),J.currentTarget.hasPointerCapture(J.pointerId)&&J.currentTarget.releasePointerCapture(J.pointerId))},Le=(I,J)=>{J.key==="Enter"?(J.preventDefault(),Be(I)):(J.key==="ArrowLeft"||J.key==="ArrowRight")&&(J.preventDefault(),Fe(I,Et(I)+(J.key==="ArrowRight"?16:-16),!0))},aa=(I,J)=>c.jsx("span",{className:"edm-column-resize-handle",role:"separator","aria-orientation":"vertical","aria-label":`Resize ${J} column`,"aria-valuenow":Et(I),"aria-valuemin":Rp,"aria-valuemax":_p,title:"Drag to resize · double-click to fit text",tabIndex:0,onPointerDown:ye=>ma(I,ye),onPointerMove:ye=>Ee(I,ye),onPointerUp:ye=>He(I,ye),onPointerCancel:ye=>He(I,ye),onDoubleClick:ye=>{ye.preventDefault(),ye.stopPropagation(),Be(I)},onKeyDown:ye=>Le(I,ye),"data-testid":`resize-column-${I}`});M.useEffect(()=>{u.current=!0;const I=J=>{if(J.key===`pid-mapping-studio:engineering-workspace:v2:${a}`)try{const ye=Ei(a);l.current=ye,o(ye),g.current=Xs(a),et("")}catch{et("Saved data changed and could not be read. Reload this page before editing.")}};return window.addEventListener("storage",I),()=>{u.current=!1,window.removeEventListener("storage",I)}},[a]);const ke=p.find(I=>I.id===b)??null;M.useEffect(()=>{const I=new URLSearchParams(window.location.search).get("record");if(!I)return;let J=I;try{J=Vp(I)}catch{}const ye=p.find(Re=>Re.id===J);ye&&ye.id!==b&&v(ye.id)},[p,b]);const ja=M.useMemo(()=>{const I=w.trim().toLowerCase();return Object.fromEntries(rD.map(J=>{const ye={...we};delete ye[J];const Re=p.filter(lt=>(k==="All types"||lt.type===k)&&(!I||Object.values(lt).join(" ").toLowerCase().includes(I))&&Zy(lt,ye));return[J,aD(Re,J)]}))},[p,w,k,we]),Ut=M.useMemo(()=>{const I=w.trim().toLowerCase();return p.filter(J=>(k==="All types"||J.type===k)&&(!I||Object.values(J).join(" ").toLowerCase().includes(I))&&Zy(J,we))},[p,w,k,we]),Vt=M.useMemo(()=>[...Ut].sort((I,J)=>{for(const ye of Z){const Re=Tn(I,ye).localeCompare(Tn(J,ye)||"—",void 0,{numeric:!0});if(Re)return Re}return Tn(I,ne.field).localeCompare(Tn(J,ne.field),void 0,{numeric:!0})*ne.direction}),[Ut,ne,Z]),Tt=Math.max(1,Math.ceil(Vt.length/pe)),nt={fields:gt,rows:Vt,groups:Z},ya=Iv(nt),Lt=Vt.slice(X*pe,(X+1)*pe);M.useEffect(()=>{Lt.length&&!Lt.some(I=>I.id===b)?v(Lt[0].id):!Lt.length&&b&&v("")},[Lt,b]),M.useEffect(()=>ae(I=>Math.min(I,Tt-1)),[Tt]);const qa=I=>{if(r.error)return!1;try{return g.current=Dp(a,I,g.current),l.current=I,o(I),et(""),!0}catch(J){return et(J instanceof Error&&J.name!=="QuotaExceededError"?J.message:"Device storage is full or unavailable. This change was not saved. Download a backup and free space."),!1}},Gt=I=>qa(s.map(J=>J.id===m.id?{...J,rows:I}:J)),xt=(I,J,ye)=>{Gt(p.map(Re=>Re.id===I?{...Re,[J]:ye}:Re))},Nt=I=>{I.preventDefault();const J=x.trim();if(!J||s.some(Re=>Re.name.toLowerCase()===J.toLowerCase())){et("Enter a new, unique drawing reference.");return}const ye={id:crypto.randomUUID(),name:J,revision:D.trim()||"Rev 0",rows:[]};qa([...s,ye])&&(y(ye.id),N(""),ae(0))},At=I=>{if(I.preventDefault(),!m.id)return;const J=Gp(_,S,m.name);if(Gt([...p,J])){L(""),O(""),te("All types"),Y({field:"itemTag",direction:1}),ge([]);const ye=[...p,J].sort((Re,lt)=>Re.itemTag.localeCompare(lt.itemTag,void 0,{numeric:!0})).findIndex(Re=>Re.id===J.id);ae(Math.floor(ye/pe)),v(J.id)}},nn=()=>{!ke||!window.confirm(`Delete record ${ke.itemTag}? This cannot be undone without a backup.`)||Gt(p.filter(I=>I.id!==ke.id))&&v("")},rn=async(I,J)=>{if(I.size>5*1024*1024){et("Import a file smaller than 5 MB.");return}try{const ye=m.id,Re=await I.text();if(!u.current)return;if(J==="csv"){const lt=l.current.find(Ke=>Ke.id===ye);if(!lt)throw new Error("The target drawing no longer exists. Choose a drawing and try again.");const Oe=JA(Re,lt.name);qa(l.current.map(Ke=>Ke.id===ye?{...Ke,rows:[...Ke.rows,...Oe]}:Ke))&&(O(""),te("All types"),ae(0))}else{const lt=WA(Re,a);qa([...l.current,...lt])&&(y(lt[0]?.id??m.id),ae(0))}}catch(ye){et(ye instanceof Error?ye.message:"This file could not be imported. No records were changed.")}},Rn=I=>Y(J=>({field:I,direction:J.field===I&&J.direction===1?-1:1})),_a=(I,J)=>{const ye=ja[I].map(lt=>lt.value),Re=J!==void 0&&ye.every(lt=>J.includes(lt))&&J.length===ye.length;j(lt=>{const Oe={...lt};return J===void 0||Re?delete Oe[I]:Oe[I]=J,Oe}),ae(0)},_n=I=>ge(J=>J.includes(I)?J:[...J,I]),ba=I=>{I.preventDefault();const J=I.dataTransfer.getData("text/engineering-field");Wn.includes(J)&&_n(J)},va=I=>{const J=Math.max(0,Math.min(Tt-1,I));ae(J);const ye=Vt.slice(J*pe,(J+1)*pe)[0];ye&&v(ye.id)},Pt=I=>{y(I),O(""),ae(0)},kt=async(I,J=!1)=>{if(fe)return;const ye=J?{fields:Wn,rows:s.flatMap(Oe=>Oe.rows),groups:[]}:nt,Re=J?"all-records":"current-view",lt={discipline:a==="pid"?"P&ID":"PFD",drawing:J?"All drawings":m.name,revision:J?void 0:m.revision,filter:J?"All types":k,search:J?"":w.trim(),sort:J?"Drawing order":`${It[ne.field]} ${ne.direction===1?"ascending":"descending"}`};he(!0),ue(""),be("");try{const Oe=I==="csv"?eD(ye):await tD(ye,lt);Ul(`engineering-${a}-${Re}.${I}`,Oe,I==="csv"?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),u.current&&ue(`Prepared ${I==="csv"?"CSV":"Excel"}: ${ye.rows.length} records · ${J?"all records":"current view"}.`)}catch(Oe){u.current&&be(Oe instanceof Error?Oe.message:"Export could not be prepared. Your saved records have not changed.")}finally{u.current&&he(!1)}};return c.jsxs("main",{className:"edm-page","data-mobile-panel":at,children:[c.jsxs("header",{className:"edm-topbar",children:[c.jsxs(ha,{href:`/workspace/${a}`,className:"edm-brand","data-testid":"link-edm-workspace",children:[c.jsx("span",{className:"edm-mark",children:"ED"}),c.jsxs("span",{children:["Engineering Data Manager",c.jsx("small",{children:"Mapping Studio / browser-local workspace"})]})]}),c.jsxs("div",{className:"edm-toplinks",children:[c.jsxs("nav",{className:"edm-disciplines","aria-label":"Discipline navigation",children:[c.jsx(ha,{href:"/workspace/pfd/engineering-data",className:a==="pfd"?"active":"","data-testid":"link-edm-pfd",children:"PFD"}),c.jsx(ha,{href:"/workspace/pid/engineering-data",className:a==="pid"?"active":"","data-testid":"link-edm-pid",children:"P&ID"})]}),c.jsxs("span",{className:"edm-local",children:[c.jsx(Qn,{size:13}),"Saved on this device"]}),c.jsxs(ha,{href:`/workspace/${a}`,className:"btn subtle","aria-label":"Back to the PFD or P&ID workspace","data-testid":"link-back-workspace",children:[c.jsx(ib,{size:13})," Workspace"]})]})]}),c.jsxs("nav",{className:"edm-mobile-tabs","aria-label":"Engineering data panels",children:[c.jsx("button",{type:"button",className:at==="catalog"?"active":"","aria-pressed":at==="catalog",onClick:()=>ut("catalog"),"data-testid":"tab-edm-catalog",children:"Catalog"}),c.jsx("button",{type:"button",className:at==="records"?"active":"","aria-pressed":at==="records",onClick:()=>ut("records"),"data-testid":"tab-edm-records",children:"Records"}),c.jsx("button",{type:"button",className:at==="properties"?"active":"","aria-pressed":at==="properties",onClick:()=>ut("properties"),"data-testid":"tab-edm-properties",children:"Properties"})]}),c.jsxs("div",{className:"edm-titlebar",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"edm-eyebrow",children:[a==="pfd"?"PROCESS FLOW DIAGRAM":"PIPING & INSTRUMENTATION"," / YOUR RECORDS"]}),c.jsx("h1",{children:"Engineering data"}),c.jsx("p",{children:"Add or import your records. PFD and P&ID stay separate on this device."})]}),c.jsxs("div",{className:"edm-object-select",children:[c.jsx("span",{children:"Object type"}),c.jsx("select",{value:k,onChange:I=>{te(I.target.value),ae(0)},"aria-label":"Object type filter","data-testid":"select-object-type",children:nD.map(I=>c.jsx("option",{children:I},I))}),c.jsx(Cr,{size:14})]})]}),c.jsxs("div",{className:"edm-file-actions",children:[c.jsxs("button",{className:"btn",disabled:!s.length,onClick:()=>Ul(`engineering-${a}-backup.json`,XA(a,s),"application/json"),"data-testid":"button-backup-data",children:[c.jsx(Rr,{size:14})," Download backup"]}),c.jsxs("label",{className:"btn",children:[c.jsx(Jr,{size:14})," Import backup",c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Import engineering backup",disabled:!!r.error,onChange:I=>{const J=I.currentTarget.files?.[0];I.currentTarget.value="",J&&rn(J,"backup")}})]}),c.jsx("button",{className:"btn",disabled:fe||!s.some(I=>I.rows.length),onClick:()=>{kt("csv",!0)},"data-testid":"button-report-all",children:"All records · CSV"}),c.jsx("button",{className:"btn",disabled:fe||!s.some(I=>I.rows.length),onClick:()=>{kt("xlsx",!0)},"data-testid":"button-report-all-excel",children:"All records · Excel"}),r.error&&c.jsx("button",{className:"btn",onClick:()=>{try{const I=Xs(a);I&&Ul(`engineering-${a}-raw.json`,I,"application/json")}catch{et("Device storage cannot be accessed. The saved data has not been changed.")}},children:"Export raw backup"}),r.error&&c.jsx("button",{className:"btn danger",onClick:()=>{if(window.confirm("Delete unreadable engineering data for this discipline? Download a raw backup first. This cannot be undone and does not delete PDFs or the old demo data."))try{window.localStorage.removeItem(`pid-mapping-studio:engineering-workspace:v2:${a}`),window.location.reload()}catch{et("Device storage cannot be cleared. The saved data has not been changed.")}},children:"Reset unreadable data"}),c.jsx("span",{children:"Local storage only · download backups regularly"})]}),c.jsxs("div",{className:"edm-workspace",children:[c.jsxs("aside",{className:"edm-catalog",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsxs("span",{children:[c.jsx(kp,{size:15})," Catalog"]}),c.jsx("span",{className:"edm-counter",children:s.length})]}),c.jsxs("div",{className:"edm-catalog-search",children:[c.jsx(fi,{size:13}),c.jsx("input",{"aria-label":"Filter drawings",placeholder:"Filter drawings…",value:R,onChange:I=>P(I.target.value),"data-testid":"input-catalog-filter"})]}),c.jsxs("div",{className:"edm-catalog-label",children:["DRAWINGS · ",a.toUpperCase()]}),c.jsxs("div",{className:"edm-drawing-list",children:[s.filter(I=>I.name.toLowerCase().includes(R.toLowerCase())).map(I=>c.jsxs("button",{className:`edm-drawing-item ${m.id===I.id?"selected":""}`,onClick:()=>Pt(I.id),"data-testid":`button-drawing-${I.id}`,children:[c.jsx(Zn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:I.name}),c.jsxs("small",{children:[I.revision," · ",I.rows.length," records"]})]})]},I.id)),!s.some(I=>I.name.toLowerCase().includes(R.toLowerCase()))&&c.jsx("div",{className:"edm-empty",children:"No drawings match."})]}),c.jsxs("form",{className:"edm-create-drawing",onSubmit:Nt,children:[c.jsxs("label",{children:["Drawing reference",c.jsx("input",{value:x,onChange:I=>N(I.target.value),maxLength:160,required:!0,placeholder:"e.g. PID-001","aria-label":"New drawing reference","data-testid":"input-new-drawing"})]}),c.jsxs("label",{children:["Revision",c.jsx("input",{value:D,onChange:I=>A(I.target.value),maxLength:80,"aria-label":"New drawing revision"})]}),c.jsxs("button",{className:"btn primary",disabled:!!r.error,"data-testid":"button-add-drawing",children:[c.jsx(pi,{size:14})," Add drawing"]})]}),m.id&&c.jsxs("button",{className:"btn danger edm-delete-drawing",disabled:!!r.error,onClick:()=>{if(!window.confirm(`Delete drawing ${m.name} and its ${p.length} records? Download a backup first. This does not delete source PDFs.`))return;const I=s.filter(J=>J.id!==m.id);qa(I)&&(y(I[0]?.id??""),v(""),ae(0))},"data-testid":"button-delete-drawing",children:[c.jsx(hi,{size:14})," Delete drawing"]}),c.jsxs("div",{className:"edm-catalog-foot",children:["No invented sample records.",c.jsx("br",{}),"Source PDFs stay in your workspace."]})]}),c.jsxs("section",{className:"edm-main",children:[c.jsxs("section",{className:"edm-preview panel edm-source-summary",children:[c.jsxs("header",{children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"ACTIVE DRAWING RECORD"}),c.jsx("strong",{"data-testid":"text-active-drawing",children:m.name})]}),c.jsx("span",{className:"edm-revision",children:m.revision})]}),c.jsx("p",{children:m.sourcePdfId?`${m.sourceAlias??"PDF"} tag candidates and clearly labelled values are stored here. Every extracted record needs review. Blank fields mean the PDF text/OCR did not provide a clear value.`:"Add records manually or import them from CSV. New PDF tag candidates appear here with a source page and a review status."}),c.jsxs(ha,{href:m.sourcePdfId?`/workspace/${a}?pdf=${encodeURIComponent(m.sourcePdfId)}&page=${encodeURIComponent(m.rows.find(I=>I.sourcePdfId)?.sourcePage||"1")}#pdf-workflow-title`:`/workspace/${a}`,className:"btn subtle",children:[c.jsx(Zn,{size:14})," ",m.sourcePdfId?"Open source PDF page":"View original PDFs"]}),c.jsxs("div",{className:"edm-autocad-status",role:"note",children:[c.jsx("strong",{children:"AutoCAD 2020: not connected."})," EDE extraction does not create a DWG."]})]}),c.jsxs("section",{className:"edm-editor panel",children:[c.jsxs("div",{className:"edm-editor-title",children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"DATA WORKSPACE"}),c.jsx("h2",{children:"Engineering Data Editor"})]}),c.jsx("div",{className:"edm-type-chip",children:k})]}),c.jsxs("form",{className:"edm-add-record",onSubmit:At,children:[c.jsxs("label",{children:["Object type",c.jsx("select",{value:_,onChange:I=>C(I.target.value),"aria-label":"New record type",children:vi.map(I=>c.jsx("option",{children:I},I))})]}),c.jsxs("label",{children:["Item tag",c.jsx("input",{value:S,onChange:I=>L(I.target.value),maxLength:160,required:!0,placeholder:"e.g. P-101","aria-label":"New item tag","data-testid":"input-new-tag"})]}),c.jsxs("button",{className:"btn primary",disabled:!m.id||!!r.error,"data-testid":"button-add-record",children:[c.jsx(pi,{size:14})," Add record"]})]}),c.jsxs("div",{className:"edm-report-actions",children:[c.jsxs("button",{className:"btn",disabled:fe||!Vt.length,onClick:()=>{kt("csv")},"data-testid":"button-export-report",children:[c.jsx(Rr,{size:14})," Current view · CSV"]}),c.jsxs("button",{className:"btn",disabled:fe||!Vt.length,onClick:()=>{kt("xlsx")},"data-testid":"button-export-excel",children:[c.jsx(Rr,{size:14})," Current view · Excel"]}),c.jsxs("label",{className:"btn",children:[c.jsx(Jr,{size:14})," Import CSV",c.jsx("input",{type:"file",accept:".csv,text/csv","aria-label":"Import engineering CSV",disabled:!m.id||!!r.error,onChange:I=>{const J=I.currentTarget.files?.[0];I.currentTarget.value="",J&&rn(J,"csv")}})]}),c.jsx("button",{className:"btn subtle",onClick:()=>Ul("engineering-import-template.csv",QA([]),"text/csv;charset=utf-8"),"data-testid":"button-csv-template",children:"CSV template"}),c.jsxs("button",{className:"btn danger",disabled:!ke||!!r.error,onClick:nn,"data-testid":"button-delete-record",children:[c.jsx(hi,{size:14})," Delete selected"]})]}),c.jsxs("div",{className:"edm-export-note","aria-live":"polite",children:[c.jsx("span",{children:"Current view: shown columns, filters, sorting and all matching rows across pages. Excel also includes group summaries. CSV has no visual formatting."}),fe&&c.jsx("strong",{role:"status",children:"Preparing export…"}),z&&c.jsx("strong",{role:"status",children:z}),Ne&&c.jsx("strong",{role:"alert",children:Ne})]}),c.jsx(J2,{order:ee,hidden:V,onChange:(I,J)=>{U(I),ie(J)}}),c.jsxs("div",{className:"edm-placement-legend","aria-label":"CAD placement status legend",children:[c.jsxs("span",{children:[c.jsx("i",{className:"available","aria-hidden":"true",children:"●"})," Available / not placed"]}),c.jsxs("span",{children:[c.jsx("i",{className:"current","aria-hidden":"true",children:"●"})," On this drawing"]}),c.jsxs("span",{children:[c.jsx("i",{className:"another","aria-hidden":"true",children:"●"})," On another drawing"]}),c.jsx("small",{children:"Based on the saved reference only; CAD is not connected for live verification."})]}),c.jsxs("div",{className:"edm-grid-toolbar",children:[c.jsxs("label",{className:"edm-global-search",children:[c.jsx(fi,{size:14}),c.jsx("input",{placeholder:"Search all fields…","aria-label":"Search engineering data",value:w,onChange:I=>{O(I.target.value),ae(0)},"data-testid":"input-engineering-search"})]}),c.jsxs("span",{className:"edm-result-total","data-testid":"text-result-count",children:[Ut.length," records"]}),c.jsxs("button",{className:"edm-toolbar-button",onClick:()=>{O(""),te("All types"),j({}),ae(0)},"data-testid":"button-clear-filters",children:[c.jsx(Ku,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"edm-groups",onDragOver:I=>I.preventDefault(),onDrop:ba,"data-testid":"drop-column-group",children:[c.jsx("span",{children:"GROUP BY"}),Z.length?Z.map(I=>c.jsxs("button",{onClick:()=>ge(J=>J.filter(ye=>ye!==I)),title:"Remove group",children:[It[I]," ",c.jsx("b",{children:"×"})]},I)):c.jsx("em",{children:"Drag a column header here to group records"})]}),c.jsxs("label",{className:"edm-group-select",children:["Add group",c.jsxs("select",{value:"","aria-label":"Add group",onChange:I=>{I.target.value&&(_n(I.target.value),ae(0))},children:[c.jsx("option",{value:"",children:"Choose a column…"}),Wn.filter(I=>!Z.includes(I)).map(I=>c.jsx("option",{value:I,children:It[I]},I))]})]}),c.jsx("p",{className:"edm-table-sizing-help",children:"Drag a column edge to resize it. Double-click an edge to fit the text."}),ya.map(I=>c.jsxs("div",{className:"edm-group-summary",children:[c.jsx("strong",{children:I.label}),I.values.map(({value:J,count:ye})=>c.jsxs("span",{children:[J,c.jsx("i",{children:ye})]},J))]},I.field)),c.jsx("div",{className:"edm-table-wrap",children:c.jsxs("table",{ref:Pe,className:"edm-table",style:{width:$,minWidth:$},children:[c.jsx("colgroup",{children:Ft.map(I=>c.jsx("col",{style:{width:Et(I)}},I))}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsxs("th",{className:"edm-rownum",children:[c.jsx("div",{className:"edm-column-heading",children:c.jsx("span",{className:"edm-column-heading-label",children:"#"})}),aa("rowNumber","row number")]}),c.jsxs("th",{children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsx("span",{className:"edm-column-heading-label",children:"Object type"}),c.jsx(Ky,{label:"Object type",options:ja.type,selectedValues:we.type,onApply:I=>_a("type",I)})]}),aa("type","Object type")]}),gt.map(I=>c.jsxs("th",{draggable:!0,onDragStart:J=>J.dataTransfer.setData("text/engineering-field",I),children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsxs("button",{className:"edm-column-sort",title:zs[I],onClick:()=>Rn(I),"data-testid":`button-sort-${I}`,children:[It[I],c.jsx("span",{children:ne.field===I?ne.direction===1?"↑":"↓":"↕"})]}),c.jsx(Ky,{label:It[I],options:ja[I],selectedValues:we[I],onApply:J=>_a(I,J)})]}),aa(I,It[I])]},I))]})}),c.jsxs("tbody",{children:[Lt.map((I,J)=>{const ye=b===I.id,Re=GA(I,m),lt=Re==="current"?"On this drawing":Re==="another"?"On another drawing":"Available / not placed";return c.jsxs("tr",{className:ye?"selected":"","data-stable-id":I.id,"data-placement-status":Re,onClick:()=>v(I.id),"data-testid":`row-engineering-${I.id}`,children:[c.jsx("td",{className:"edm-rownum",children:X*pe+J+1}),c.jsx("td",{children:c.jsx("span",{className:`edm-type-badge ${I.type.toLowerCase().replace(/\s+/g,"-")}`,children:I.type})}),gt.map(Oe=>{const Ke=Tn(I,Oe);return Oe==="notes"?c.jsx("td",{className:"edm-notes-cell",children:ye?c.jsx("textarea",{"aria-label":`Notes for ${I.itemTag}`,rows:2,maxLength:2e3,value:Ke,onClick:ct=>ct.stopPropagation(),onChange:ct=>xt(I.id,Oe,ct.target.value),"data-testid":`input-cell-${I.id}-${Oe}`}):c.jsx("span",{title:Ke,children:Ke||"—"})},Oe):Oe==="itemTag"?c.jsxs("td",{className:"mono edm-item-tag-cell",children:[c.jsxs("span",{className:`edm-placement-indicator ${Re}`,"aria-label":`Placement: ${lt}`,title:`Placement: ${lt}`,children:[c.jsx("i",{"aria-hidden":"true",children:"●"}),c.jsx("span",{children:lt})]}),ye?c.jsx("input",{className:"edm-item-tag-editor","aria-label":`${It[Oe]} for ${I.itemTag}`,value:Ke,onClick:ct=>ct.stopPropagation(),onChange:ct=>xt(I.id,Oe,ct.target.value),"data-testid":`input-cell-${I.id}-${Oe}`}):c.jsx("span",{className:`edm-tag-value ${Re}`,"data-testid":`text-item-tag-${I.id}`,children:Ke})]},Oe):c.jsx("td",{className:Oe==="stableId"?"mono":"",children:Oe==="stableId"?c.jsx("span",{className:"edm-stable-id-value",title:Ke,"aria-label":`Stable ID ${Ke}`,children:Ke}):ye&&(Oe==="reviewStatus"||Oe==="groupStatus")?c.jsx("select",{"aria-label":`${It[Oe]} for ${I.itemTag}`,value:Ke,onClick:ct=>ct.stopPropagation(),onChange:ct=>xt(I.id,Oe,ct.target.value),"data-testid":`input-cell-${I.id}-${Oe}`,children:(Oe==="reviewStatus"?["Needs review","Reviewed","Manual"]:["","Start","Continue","Branch","Merge","End-of-Group"]).map(ct=>c.jsx("option",{value:ct,children:ct||"Not set"},ct))}):ye?c.jsx("input",{"aria-label":`${It[Oe]} for ${I.itemTag}`,value:Ke,onClick:ct=>ct.stopPropagation(),onChange:ct=>xt(I.id,Oe,ct.target.value),"data-testid":`input-cell-${I.id}-${Oe}`}):c.jsx("span",{title:Ke,children:Ke||"—"})},Oe)})]},I.id)}),!Lt.length&&c.jsx("tr",{children:c.jsx("td",{colSpan:gt.length+2,children:c.jsx("div",{className:"edm-empty",children:"No records match these filters."})})})]})]})}),c.jsxs("footer",{className:"edm-pagination",children:[c.jsxs("span",{children:["Showing ",c.jsxs("strong",{children:[Vt.length?X*pe+1:0,"–",Math.min((X+1)*pe,Vt.length)]})," of ",c.jsx("strong",{children:Vt.length})]}),c.jsxs("label",{children:["Rows ",c.jsx("select",{value:pe,onChange:I=>{oe(Number(I.target.value)),ae(0)},"aria-label":"Rows per page","data-testid":"select-page-size",children:[8,12,24,36].map(I=>c.jsx("option",{value:I,children:I},I))})," per page"]}),c.jsxs("div",{className:"edm-page-controls",children:[c.jsx("button",{disabled:X===0,onClick:()=>va(X-1),"aria-label":"Previous page","data-testid":"button-page-previous",children:c.jsx(lb,{size:15})}),c.jsxs("span",{children:["Page ",X+1," of ",Tt]}),c.jsx("button",{disabled:X>=Tt-1,onClick:()=>va(X+1),"aria-label":"Next page","data-testid":"button-page-next",children:c.jsx(Pp,{size:15})})]})]})]})]}),c.jsxs("aside",{className:"edm-properties panel",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsx("span",{children:"Properties"}),c.jsx("span",{className:"edm-counter",children:ke?"EDIT":""})]}),c.jsxs("details",{className:"edm-field-guide",children:[c.jsx("summary",{children:"What do these fields mean?"}),c.jsx("dl",{children:Wn.map(I=>c.jsxs("div",{children:[c.jsx("dt",{children:It[I]}),c.jsx("dd",{children:zs[I]})]},I))})]}),ke&&c.jsxs("label",{className:"edm-record-type",children:["Object type",c.jsx("select",{value:ke.type,"aria-label":"Selected record type",disabled:!!r.error,onChange:I=>Gt(p.map(J=>J.id===ke.id?{...J,type:I.target.value}:J)),children:vi.map(I=>c.jsx("option",{children:I},I))})]}),ke?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"edm-property-summary",children:[c.jsx("span",{className:"edm-property-icon",children:iD(ke.type)}),c.jsxs("div",{children:[c.jsx("strong",{"data-testid":"text-selected-tag",children:ke.itemTag}),c.jsxs("small",{children:[ke.type," · ",m.revision]})]})]}),(ke.sourcePdfId??m.sourcePdfId)&&c.jsxs(ha,{className:"btn subtle edm-source-locate",href:`/workspace/${a}?pdf=${encodeURIComponent(ke.sourcePdfId??m.sourcePdfId??"")}&page=${encodeURIComponent(String(ke.sourceLocations?.[0]?.pageNumber??ke.sourcePage??"1"))}&record=${encodeURIComponent(ke.id)}#pdf-workflow-title`,"data-testid":"link-selected-source-location",children:[c.jsx(Zn,{size:13})," Locate on source PDF",c.jsx("small",{children:ke.sourceLocations?.length?`${ke.sourceLocations.length} OCR location(s) · review required`:`Page ${ke.sourcePage||"1"} · no exact position saved`})]}),c.jsxs("div",{className:"edm-stable-id-panel",children:[c.jsx("span",{children:"STABLE ID"}),c.jsx("code",{"data-testid":"text-stable-id",children:ke.id}),c.jsx("small",{children:"Permanent record identity. It does not change with the tag or drawing."})]}),c.jsxs("div",{className:"edm-property-scroll",children:[c.jsx("div",{className:"edm-property-group",children:"IDENTIFICATION"}),["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef"].map(I=>c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:zs[I],children:It[I]}),c.jsx("input",{value:ke[I],onChange:J=>xt(ke.id,I,J.target.value),"data-testid":`property-${I}`})]},I)),c.jsx("div",{className:"edm-property-group",children:"CAD PLACEMENT"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:zs.placementDrawingRef,children:It.placementDrawingRef}),c.jsx("input",{list:"edm-placement-drawings",value:ke.placementDrawingRef,onChange:I=>xt(ke.id,"placementDrawingRef",I.target.value),"data-testid":"property-placementDrawingRef",placeholder:"Blank = available / not placed"}),c.jsx("small",{children:"Reference only. This browser is not connected to CAD geometry."})]}),c.jsx("datalist",{id:"edm-placement-drawings",children:s.map(I=>c.jsx("option",{value:I.name},I.id))}),c.jsx("div",{className:"edm-property-group",children:ke.type==="Pipe Run"?"PIPE RUN & PROCESS":"PROCESS & CONNECTION"}),(ke.type==="Pipe Run"?["nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description"]:["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","opcDrawing","connection","description"]).map(I=>{const J=I;return c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:zs[J],children:It[J]}),J==="groupStatus"?c.jsx("select",{value:ke.groupStatus,onChange:ye=>xt(ke.id,"groupStatus",ye.target.value),"aria-label":"Pipe run group status",children:["","Start","Continue","Branch","Merge","End-of-Group"].map(ye=>c.jsx("option",{value:ye,children:ye||"Not set"},ye))}):c.jsx("input",{value:ke[J],onChange:ye=>xt(ke.id,J,ye.target.value),"data-testid":`property-${J}`})]},J)}),c.jsx("div",{className:"edm-property-group",children:"NOTES"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:zs.notes,children:It.notes}),c.jsx("textarea",{rows:5,maxLength:2e3,value:ke.notes,onChange:I=>xt(ke.id,"notes",I.target.value),"data-testid":"property-notes"})]})]}),c.jsxs("div",{className:"edm-save-state",role:"status","data-testid":"status-local-save",children:[c.jsx("span",{})," Edits save automatically in this browser"]})]}):c.jsx("div",{className:"edm-empty",children:"Select a graphic or table row to inspect properties."})]})]}),c.jsxs("footer",{className:"edm-footnote",children:[c.jsx("span",{children:"© 2026 gaurav.cbiindia · DEVICE-LOCAL DATA"}),c.jsxs("span",{children:[p.length," records · ",m.name," · ",a.toUpperCase(),"-isolated browser storage"]})]}),qe&&c.jsx("div",{className:"edm-storage-error",role:"alert","data-testid":"status-storage-error",children:qe})]})}function lD({assetId:a,candidateId:r,blockName:s,entityType:o,description:l,disabled:u,onDescriptionChange:g}){const[f,y]=M.useState(null),[m,p]=M.useState("");M.useEffect(()=>{let v=!0;return y(null),p(""),Jb(a).then(x=>{v&&y(x)},x=>{v&&p(x instanceof Error?x.message:"Preview could not be read.")}),()=>{v=!1}},[a]);const b=o==="directionArrow"?[]:(f?.nearbyLabels??[]).filter(v=>!Yp(v));return c.jsxs("section",{className:"cad-block-review-visual","aria-label":`Identify block ${s}`,"data-testid":`preview-block-${r}`,children:[c.jsxs("div",{className:"cad-block-review-image",children:[f?.previewSvg?c.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(f.previewSvg)}`,alt:`DXF geometry preview of block ${s}`,"data-testid":`img-block-${r}`}):c.jsxs("div",{className:"cad-block-preview-empty",role:"status",children:[c.jsx("strong",{children:m?"Preview could not load":f?"Overview DXF needed":"Loading local preview…"}),c.jsx("span",{children:m||(f?"Run PIDEXPORTOVERVIEW on the original SOURCE drawing. Add its *_OVERVIEW.dxf to the existing extraction ZIP and import again. Do not repeat the full block extraction.":"")})]}),c.jsx("small",{children:"Visual aid only—not a fidelity check. Fonts, hatches, masks and some CAD entities may be simplified or absent."})]}),c.jsxs("div",{className:"cad-block-review-labels",children:[c.jsx("strong",{children:o==="directionArrow"?"Direction Arrow":"Nearby legend text"}),c.jsx("small",{children:o==="directionArrow"?"Kept as its own P&ID entity; no equipment, instrument, or component name is inferred from nearby text.":"Suggested by position, not confirmed identity. Multiple parts may share one assembly description."}),b.length?c.jsx("div",{className:"cad-block-label-choices",children:b.map((v,x)=>c.jsx("button",{type:"button",className:"btn subtle",disabled:u,onClick:()=>g(v),"data-testid":`button-use-label-${r}-${x}`,children:v},`${v}-${x}`))}):c.jsx("p",{"data-testid":`status-no-label-${r}`,children:o==="directionArrow"?f?.sourcePlacements?.length?`Source insert context retained: ${f.sourcePlacements.map(v=>`${v.layer}, ${v.rotationDegrees}° (${v.count})`).join("; ")}.`:"Source rotation and layer context will be used if an overview DXF is available.":f?.labelMatchAmbiguous?"Ambiguous: this block is used beside different legend labels. No item name is suggested; verify it from the source.":f?.labelMatchSkipped?"Skipped: this insert is on layer 0 or a primary process-pipe layer, so its nearby label is not used as an item mapping.":f?.previewSvg?"No nearby label found. Verify the source drawing and enter the description below.":"Label suggestions appear after an overview DXF is imported."}),c.jsxs("label",{children:[c.jsx("span",{children:"Confirmed item description"}),c.jsx("input",{value:l,onChange:v=>g(v.target.value),placeholder:"Verify the source, then enter the real item name",disabled:u,"data-testid":`input-item-description-${r}`})]}),c.jsx("small",{children:"Saved only when you approve this record. A label does not automatically choose a category or CAD layer."})]})]})}const kv={titleBlock:"Title block",layer:"Layer",textStyle:"Text style",linetype:"Linetype",dimensionStyle:"Dimension style",symbol:"Symbol",directionArrow:"Direction Arrow",legend:"Legend"};function ni(a){return kv[a]??"CAD standard"}function cD(a,r){if(a.proposedScope==="project"&&a.projectId){const s=[...new Set(r.filter(o=>o.proposedScope==="project"&&o.projectId).map(o=>o.projectId))].sort();return`Project ${String(s.indexOf(a.projectId)+1).padStart(2,"0")}`}if(a.proposedScope==="company"){const s=[...new Set(r.filter(o=>o.proposedScope==="company").map(o=>o.sourceGroup))].sort();return`Legends Library source ${String(s.indexOf(a.sourceGroup)+1).padStart(2,"0")}`}return"Unclassified source"}function eb(a,r){return`Project ${String(r.indexOf(a)+1).padStart(2,"0")}`}function xn(a,r){return a.find(s=>s.label===r)?.value.trim()??""}function tb({value:a,disabled:r,onChange:s}){let o=null,l="";try{o=es(a)}catch(D){l=D instanceof Error?D.message:"Enter a valid X,Y outline."}const u=o?.map(([D])=>D)??[],g=o?.map(([,D])=>D)??[],f=Math.min(...u),y=Math.max(...u),m=Math.min(...g),p=Math.max(...g),b=y-f||1,v=p-m||1,x=9,N=o?.map(([D,A])=>`${x+(D-f)/b*(160-x*2)},${90-x-(A-m)/v*(90-x*2)}`).join(" ");return c.jsxs("label",{className:"candidate-fallback-category valve-mask-editor",children:[c.jsxs("span",{children:["Valve-body Wipeout outline ",c.jsx("small",{children:"Reviewed block-local X,Y points; do not include pipe tails. Separate points with semicolons."})]}),c.jsx("textarea",{value:a,onChange:D=>s(D.target.value),placeholder:"x,y; x,y; x,y; …","aria-label":"Valve-body Wipeout outline points",rows:3,disabled:r}),c.jsx("small",{className:"candidate-layer-help",children:"Enter vertices in order using the valve block’s local drawing units. The small preview shows only the mask contour, not the source CAD block."}),o&&N?c.jsx("svg",{className:"valve-mask-preview",viewBox:"0 0 160 90",role:"img","aria-label":"Preview of the saved valve mask outline",children:c.jsx("polygon",{points:N})}):c.jsx("small",{className:"candidate-layer-help",children:l}),c.jsx("small",{className:"candidate-layer-help",children:"The runner masks only inside this polygon, leaves the underlying Pipe Run continuous, and draws the valve block on top."})]})}function Nr(a,r){const s=xn(a.item.fields,"Source discipline");if(s!=="PFD"&&s!=="P&ID"&&s!=="Shared")return[];const g=[...(a.proposedScope==="company"?"company":"project")==="project"&&a.projectId?r.projects[a.projectId]?.items??[]:[],...r.companyItems].filter(f=>{if(f.category!=="layer"||f.sourceKind!=="extracted-dwg"||f.reviewStatus!=="reviewed")return!1;const y=xn(f.fields,"Source discipline");return s==="Shared"?y==="Shared":y==="Shared"||y===s}).map(f=>xn(f.fields,"CAD name")).filter(f=>f&&f.toUpperCase()!=="0");return[...new Set(g)].sort((f,y)=>f.localeCompare(y))}function dD({library:a,reviewCandidates:r,onApproveCompany:s,onApproveProject:o,onDismiss:l,onUpdateReviewedItem:u,onSetCompanyDefault:g,onSetProjectDefault:f,storageNotice:y="",readOnly:m=!1,reviewOnly:p=!1,backHref:b="/"}){const[v,x]=M.useState("company"),[N,D]=M.useState(""),[A,S]=M.useState("all"),[L,_]=M.useState(""),[C,w]=M.useState(0),[O,R]=M.useState(""),[P,k]=M.useState({}),[te,X]=M.useState({}),[ae,pe]=M.useState({}),[oe,ne]=M.useState({}),[Y,Z]=M.useState({}),[ge,we]=M.useState({}),j=20,ee=M.useMemo(()=>Object.keys(a.projects).sort(),[a.projects]),U=ee.includes(L)?L:ee[0]??"",V=r.filter(z=>z.status==="needs-review"),ie=r.filter(z=>z.status==="approved").length,de=r.filter(z=>z.status==="dismissed").length,ve=z=>ge[z.id]??z.item.category,Ie=(z,ue)=>{const Ne=ve(z),be=z.item.sourceKind==="extracted-dwg"&&!!z.item.fields.find(Ee=>Ee.label==="Block asset ID")?.value.trim(),qe=(P[z.id]??z.item.fields.find(Ee=>Ee.label==="Fallback category")?.value??"").trim(),et=te[z.id]??z.item.fields.find(Ee=>Ee.label==="Target CAD layer")?.value??"";if(Ne==="symbol"&&be&&!qe){R("Enter the real equipment category (such as pump or valve) before approving an extracted block.");return}if(Ne==="symbol"&&be&&!Nr(z,a).includes(et)){R(Nr(z,a).length?"Choose an approved non-zero CAD layer for this block before approving it.":"Approve a matching Equipment, Instrument, or other placement layer first. Layer 0 cannot be used for block placement.");return}const Fe=ae[z.id]??z.item.fields.find(Ee=>Ee.label==="Wipeout mask boundary")?.value??"";if(Ne==="symbol"&&qe.toLowerCase()==="valve")try{es(Fe)}catch(Ee){R(Ee instanceof Error?Ee.message:"Enter and review a valve-body Wipeout outline before approval.");return}R("");const Be=be?Ne==="directionArrow"?[{label:"Entity type",value:"Direction Arrow"},{label:"Item description",value:Y[z.id]||"Direction Arrow"}]:[{label:"Fallback category",value:qe},{label:"Target CAD layer",value:et},{label:"Item description",value:Y[z.id]??xn(z.item.fields,"Item description")},...qe.toLowerCase()==="valve"?[{label:"Wipeout mask boundary",value:Fe}]:[]]:void 0;(ue==="company"?s:o)(z.id,Be,be?Ne:void 0)&&R(ue==="company"?"Approved and added to the Legends Library.":"Approved and added to the project library.")},Pe=z=>{l(z)&&R("Record dismissed from the review queue.")},vt=(z,ue)=>{const Ne=oe[z]??ue.find(be=>be.label==="Wipeout mask boundary")?.value??"";try{es(Ne)}catch(be){R(be instanceof Error?be.message:"Enter a valid valve-body mask outline.");return}u(z,[{label:"Wipeout mask boundary",value:Ne}])&&R("Reviewed valve-body mask saved to the Legends Library.")},at=M.useMemo(()=>{const z=N.trim().toLowerCase();return V.filter(ue=>{const Ne=ve(ue),be=A==="all"||Ne===A,qe=ue.item.fields.some(et=>`${et.label} ${et.value}`.toLowerCase().includes(z));return be&&(!z||qe||ni(Ne).toLowerCase().includes(z))})},[V,N,A,ge]),ut=Math.max(1,Math.ceil(at.length/j)),gt=Math.min(C,ut-1),Ft=at.slice(gt*j,(gt+1)*j);M.useEffect(()=>w(0),[N,A]);const $=(v==="company"?a.companyItems:a.projects[U]?.items??[]).filter(z=>{const ue=N.trim().toLowerCase(),Ne=A==="all"||z.category===A,be=z.fields.some(qe=>`${qe.label} ${qe.value}`.toLowerCase().includes(ue));return Ne&&(!ue||be||ni(z.category).toLowerCase().includes(ue))}),fe=(z,ue)=>{if(!Qr.includes(ue))return;const Ne=ue,be=a.companyItems.some(qe=>qe.category==="titleBlock"&&qe.reviewStatus==="reviewed"&&(qe.sheetSize===Ne||qe.fields.some(et=>et.label==="Sheet size"&&et.value===Ne)));if(Ne!==a.companyDefaults[z]&&!be){R(`Approve a company title-block mapping for ${Ne} before changing this default.`);return}R(""),g(z,Ne)},he=(z,ue,Ne)=>{if(!Qr.includes(Ne))return;const be=Ne;if(![...a.projects[z]?.items??[],...a.companyItems].some(Fe=>Fe.category==="titleBlock"&&Fe.reviewStatus==="reviewed"&&(Fe.sheetSize===be||Fe.fields.some(Be=>Be.label==="Sheet size"&&Be.value===be)))){R(`Approve a title-block mapping for ${be} before saving this project default.`);return}R(""),f(z,ue,be)};return c.jsxs("main",{className:`standards-page${p?" standards-review-only":""}`,children:[c.jsxs("header",{className:"standards-topbar",children:[c.jsxs(ha,{href:p?b:"/",className:"standards-brand","data-testid":"link-standards-home",children:[c.jsx("span",{className:"standards-mark",children:"PM"}),c.jsxs("span",{children:["Mapping Studio",c.jsx("small",{children:p?"Legends Library / review":"Drafting standards / browser-local"})]})]}),c.jsxs("div",{className:"standards-top-meta",children:[c.jsxs("span",{className:"standards-local",children:[c.jsx("i",{}),m?"Read only · storage issue":"Browser-local"]}),c.jsx("span",{className:"standards-version",children:"LIBRARY · 1.0"})]})]}),c.jsxs("div",{className:"standards-content",children:[c.jsxs("section",{className:"standards-intro",children:[c.jsxs("div",{children:[p&&c.jsxs(ha,{className:"standards-return",href:b,children:["← Back to ",b.endsWith("/pfd")?"PFD":"P&ID"," workspace"]}),c.jsxs("div",{className:"standards-eyebrow",children:[p?"Legends Library":"Standards library"," ",c.jsx("span",{children:"/"})," human review"]}),c.jsx("h1",{children:p?"Review extracted standards":"Drafting standards"}),c.jsx("p",{children:p?"Check extracted blocks, layers, text styles, and line types. Nothing becomes part of the Legends Library until you approve it.":"Inspect source-derived CAD values before they become defaults. Project choices stay separate from the Legends Library."})]}),c.jsxs("div",{className:"standards-local-seal",children:[c.jsx(Qn,{size:15}),c.jsxs("span",{children:["LOCAL ONLY",c.jsx("small",{children:"Nothing is uploaded or shared"})]})]})]}),c.jsxs("div",{className:"standards-trust-note",children:[c.jsx(Wu,{size:16}),c.jsxs("span",{children:[c.jsx("strong",{children:"Review before use."})," ",p?"Each extracted record remains pending until you approve it to the Legends Library or dismiss it. Source filenames are hidden.":"Source-derived values remain unapproved until you choose a scope. Company/client identifiers and source file names are hidden here."]}),c.jsxs("span",{className:"standards-schema",children:["SCHEMA ",a.schemaVersion]})]}),y&&c.jsx("div",{className:"standards-storage-banner",role:"alert",children:y}),c.jsxs("section",{className:"standards-metrics","aria-label":"Review summary",children:[c.jsxs("div",{className:"standards-metric metric-pending",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(_r,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Awaiting review"}),c.jsx("strong",{children:V.length.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"SOURCE MAPPINGS"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(Om,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Approved from queue"}),c.jsx("strong",{children:ie.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"HUMAN CONFIRMED"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(Lp,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Dismissed"}),c.jsx("strong",{children:de.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"NOT IN LIBRARY"})]})]}),c.jsxs("div",{className:"standards-layout",children:[c.jsxs("section",{className:"standards-review panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"INBOX / SOURCE-DERIVED"}),c.jsxs("h2",{children:[c.jsx(ww,{size:17}),"Review queue"]})]}),c.jsxs("span",{className:"standards-count",children:[V.length," pending"]})]}),c.jsxs("div",{className:"standards-controls",children:[c.jsxs("label",{className:"standards-search",children:[c.jsx(fi,{size:14}),c.jsx("input",{value:N,onChange:z=>D(z.target.value),placeholder:"Search CAD field values…","aria-label":"Search standards","data-testid":"input-standards-search"})]}),c.jsxs("label",{className:"standards-filter",children:[c.jsx(Ku,{size:13}),c.jsxs("select",{"aria-label":"Filter by category",value:A,onChange:z=>S(z.target.value),"data-testid":"select-standards-category",children:[c.jsx("option",{value:"all",children:"All categories"}),Object.entries(kv).map(([z,ue])=>c.jsx("option",{value:z,children:ue},z))]}),c.jsx(Cr,{size:13})]})]}),O&&c.jsx("div",{className:"standards-action-note",role:"status",children:O}),c.jsxs("div",{className:"standards-candidate-list",children:[Ft.map(z=>{const ue=ve(z),Ne=z.item.sourceKind==="extracted-dwg"&&!!xn(z.item.fields,"Block asset ID");return c.jsxs("article",{className:"candidate-card","data-testid":`candidate-${z.id}`,children:[c.jsxs("div",{className:"candidate-top",children:[c.jsxs("div",{className:"candidate-category",children:[c.jsx("span",{className:"candidate-glyph",children:c.jsx(ri,{size:15})}),c.jsxs("span",{children:[c.jsx("strong",{children:ni(ue)}),c.jsxs("small",{children:[cD(z,r)," · ",z.proposedScope==="project"?"Project proposal":z.proposedScope==="company"?"Pending review":"Scope not classified"]})]})]}),c.jsxs("span",{className:"candidate-status",children:[c.jsx("i",{}),"Needs review"]})]}),Ne&&c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsx("span",{children:"Review entity as"}),c.jsxs("select",{value:ue==="directionArrow"?"directionArrow":"symbol",onChange:be=>{R(""),we(qe=>({...qe,[z.id]:be.target.value}))},"aria-label":`Review entity type for ${z.item.name}`,disabled:m,"data-testid":`select-entity-role-${z.id}`,children:[c.jsx("option",{value:"symbol",children:"Equipment / instrument / component symbol"}),c.jsx("option",{value:"directionArrow",children:"Direction Arrow"})]}),ue==="directionArrow"&&c.jsx("small",{children:"Kept separate from equipment matching. Source insert layers and rotations are retained for later pipe alignment."})]}),(ue==="symbol"||ue==="directionArrow")&&z.item.sourceKind==="extracted-dwg"&&xn(z.item.fields,"Block asset ID")&&c.jsx(lD,{assetId:xn(z.item.fields,"Block asset ID"),candidateId:z.id,blockName:xn(z.item.fields,"Block name"),entityType:ue,description:Y[z.id]??(ue==="directionArrow"?"Direction Arrow":xn(z.item.fields,"Item description")),disabled:m,onDescriptionChange:be=>Z(qe=>({...qe,[z.id]:be}))}),c.jsx("div",{className:"candidate-fields","aria-label":`${ni(ue)} CAD standard values`,children:z.item.fields.filter(be=>ue!=="directionArrow"||!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(be.label)).map((be,qe)=>c.jsxs("div",{className:"candidate-field",children:[c.jsx("span",{children:be.label}),c.jsx("strong",{children:be.value||"—"})]},`${be.label}-${qe}`))}),ue==="symbol"&&Ne&&c.jsxs(c.Fragment,{children:[c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Fallback category ",c.jsx("small",{children:"Required for safe same-category substitution"})]}),c.jsx("input",{value:P[z.id]??z.item.fields.find(be=>be.label==="Fallback category")?.value??"",onChange:be=>{R(""),k(qe=>({...qe,[z.id]:be.target.value}))},placeholder:"For example: pump, valve, or instrument","aria-label":`Fallback category for ${z.item.name}`})]}),(P[z.id]??z.item.fields.find(be=>be.label==="Fallback category")?.value??"").trim().toLowerCase()==="valve"&&c.jsx(tb,{value:ae[z.id]??z.item.fields.find(be=>be.label==="Wipeout mask boundary")?.value??"",disabled:m,onChange:be=>{R(""),pe(qe=>({...qe,[z.id]:be}))}}),c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Target CAD layer ",c.jsx("small",{children:"Actual approved layer; layer 0 is not allowed"})]}),c.jsxs("select",{value:te[z.id]??z.item.fields.find(be=>be.label==="Target CAD layer")?.value??"",onChange:be=>{R(""),X(qe=>({...qe,[z.id]:be.target.value}))},"aria-label":`Target CAD layer for ${z.item.name}`,disabled:m||Nr(z,a).length===0,children:[c.jsx("option",{value:"",children:Nr(z,a).length?"Select an approved CAD layer…":"Approve a compatible layer first"}),Nr(z,a).map(be=>c.jsx("option",{value:be,children:be},be))]}),c.jsx("small",{className:"candidate-layer-help",children:Nr(z,a).length?"The AutoCAD runner will put the inserted block reference on this layer.":"Review and approve the matching source layer first. No layer is guessed automatically."}),c.jsx("small",{className:"candidate-layer-help",children:"Stated Legends layers: equipment uses EQUIP or f_EQUIP; instruments use f_Inst. Extract and approve the matching layer before it appears here."})]})]}),c.jsxs("div",{className:"candidate-actions",children:[c.jsx("span",{className:"candidate-scope-note",children:z.proposedScope==="project"?"Approve into isolated project library":z.proposedScope==="company"?"Approve to the Legends Library":"Unclassified source · project-only approval"}),(()=>{const be=ue==="symbol"&&Ne;return z.proposedScope==="company"?c.jsxs("button",{className:"btn primary",onClick:()=>Ie(z,"company"),disabled:m,title:be&&Nr(z,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-company-${z.id}`,children:[c.jsx(Hs,{size:14}),"Approve to Legends Library"]}):c.jsxs("button",{className:"btn primary",onClick:()=>Ie(z,"project"),disabled:m,title:be&&Nr(z,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-project-${z.id}`,children:[c.jsx(Hs,{size:14}),"Approve to project"]})})(),c.jsx("button",{className:"btn subtle",onClick:()=>Pe(z.id),disabled:m,"data-testid":`button-dismiss-${z.id}`,children:"Dismiss"})]})]},z.id)}),!Ft.length&&c.jsxs("div",{className:"standards-empty",children:[c.jsx("span",{className:"empty-seal",children:V.length?c.jsx(fi,{size:20}):c.jsx(Om,{size:20})}),c.jsx("strong",{children:V.length?"No source mappings match":"Review queue is clear"}),c.jsx("p",{children:V.length?"Try another field value or category.":"New source-derived standards will appear here for human review."}),N||A!=="all"?c.jsx("button",{className:"btn subtle",onClick:()=>{D(""),S("all")},children:"Clear filters"}):null]})]}),at.length>j&&c.jsxs("div",{className:"candidate-pagination",children:[c.jsxs("span",{children:["Showing ",gt*j+1,"–",Math.min((gt+1)*j,at.length)," of ",at.length," matching mappings"]}),c.jsxs("div",{children:[c.jsx("button",{className:"btn subtle",onClick:()=>w(z=>Math.max(0,z-1)),disabled:gt===0,children:"Previous"}),c.jsxs("span",{children:["Page ",gt+1," of ",ut]}),c.jsx("button",{className:"btn subtle",onClick:()=>w(z=>Math.min(ut-1,z+1)),disabled:gt>=ut-1,children:"Next"})]})]}),c.jsxs("footer",{className:"standards-list-foot",children:[c.jsx("span",{children:"CAD field values only"}),c.jsx("span",{children:"Source labels anonymized"})]})]}),!p&&c.jsxs("aside",{className:"standards-side",children:[c.jsxs("section",{className:"defaults-panel panel",children:[c.jsx("div",{className:"standards-panel-head",children:c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"ACTIVE CONFIGURATION"}),c.jsxs("h2",{children:[c.jsx(Ku,{size:16}),"Sheet-size defaults"]})]})}),c.jsxs("div",{className:"default-scope-tabs",role:"tablist","aria-label":"Defaults scope",children:[c.jsx("button",{role:"tab","aria-selected":v==="company",className:v==="company"?"selected":"",onClick:()=>x("company"),children:"Company"}),c.jsxs("button",{role:"tab","aria-selected":v==="projects",className:v==="projects"?"selected":"",onClick:()=>x("projects"),children:["Projects ",c.jsx("span",{children:ee.length})]})]}),v==="projects"&&c.jsx("div",{className:"project-picker",children:ee.length?c.jsxs("label",{children:[c.jsx("span",{children:"PROJECT LIBRARY"}),c.jsxs("div",{children:[c.jsx("select",{value:U,onChange:z=>_(z.target.value),"aria-label":"Select project library",children:ee.map(z=>c.jsx("option",{value:z,children:eb(z,ee)},z))}),c.jsx(Cr,{size:14})]})]}):c.jsxs("div",{className:"project-none",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(ri,{size:17})}),c.jsx("strong",{children:"No project overrides yet"}),c.jsx("small",{children:"Project-specific standards will appear here once available."})]})}),c.jsxs("div",{className:"default-table",children:[c.jsxs("div",{className:"default-table-head",children:[c.jsx("span",{children:"DRAWING PURPOSE"}),c.jsx("span",{children:"SIZE"})]}),dp.map(z=>{const ue=v==="projects"&&U?a.projects[U]?.defaults[z]:void 0,Ne=ue??a.companyDefaults[z];return c.jsxs("div",{className:"default-row",children:[c.jsxs("div",{children:[c.jsx("strong",{children:z}),v==="projects"&&c.jsx("small",{children:ue?"Project override":"Inherited company default"})]}),v==="company"?c.jsxs("label",{className:"size-select",children:[c.jsx("select",{"aria-label":`${z} company sheet size`,value:a.companyDefaults[z],onChange:be=>fe(z,be.target.value),disabled:m,children:Qr.map(be=>c.jsx("option",{value:be,children:be},be))}),c.jsx(Cr,{size:13})]}):U?c.jsxs("label",{className:`size-select ${ue?"override":""}`,children:[c.jsx("select",{"aria-label":`${z} project sheet size`,value:Ne,onChange:be=>he(U,z,be.target.value),disabled:m,children:Qr.map(be=>c.jsx("option",{value:be,children:be},be))}),c.jsx(Cr,{size:13})]}):c.jsx("span",{className:"default-value",children:"—"})]},z)})]}),c.jsxs("div",{className:"defaults-note",children:[c.jsx(Wu,{size:14}),c.jsx("span",{children:"Project selections change only that project. Legends Library defaults remain unchanged."})]})]}),c.jsxs("section",{className:"library-panel panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"APPROVED STANDARDS"}),c.jsxs("h2",{children:[c.jsx(ri,{size:16}),v==="company"?"Legends Library":"Project library"]})]}),c.jsx("span",{className:"standards-count",children:$.length})]}),c.jsxs("div",{className:"approved-list",children:[$.map(z=>c.jsxs("article",{className:"approved-item",children:[c.jsxs("div",{className:"approved-item-head",children:[c.jsx("span",{className:"approved-glyph",children:c.jsx(Hs,{size:13})}),c.jsxs("div",{children:[c.jsx("strong",{children:ni(z.category)}),c.jsx("small",{children:v==="company"?"Legends Library standard":`${eb(U,ee)} · project-only`})]})]}),c.jsx("div",{className:"approved-fields",children:z.fields.map((ue,Ne)=>c.jsxs("div",{children:[c.jsx("span",{children:ue.label}),c.jsx("strong",{children:ue.value||"—"})]},`${ue.label}-${Ne}`))}),z.category==="symbol"&&z.sourceKind==="extracted-dwg"&&xn(z.fields,"Fallback category").toLowerCase()==="valve"&&c.jsxs(c.Fragment,{children:[c.jsx(tb,{value:oe[z.id]??z.fields.find(ue=>ue.label==="Wipeout mask boundary")?.value??"",disabled:m,onChange:ue=>{R(""),ne(Ne=>({...Ne,[z.id]:ue}))}}),c.jsx("div",{className:"approved-mask-actions",children:c.jsxs("button",{type:"button",className:"btn primary",disabled:m,onClick:()=>vt(z.id,z.fields),"data-testid":`button-save-valve-mask-${z.id}`,children:[c.jsx(Hs,{size:13}),"Save reviewed outline"]})})]})]},z.id)),!$.length&&c.jsxs("div",{className:"approved-empty",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(ri,{size:18})}),c.jsx("strong",{children:v==="company"?"No approved Legends Library standards":"No standards in this project"}),c.jsx("small",{children:v==="company"?"Review and approve source mappings to build the Legends Library.":"Project-approved standards remain isolated from Legends Library defaults."})]})]}),c.jsxs("footer",{className:"library-foot",children:[c.jsx("span",{children:"Visible values are standards fields"}),c.jsx("span",{children:"Descriptions hidden"})]})]})]})]}),c.jsxs("footer",{className:"standards-page-foot",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:p?"Only approved mappings are offered to the CAD runner":"Legends Library and project standards are reviewed separately"})]})]})]})}function ab({backHref:a}){const[r]=M.useState(()=>{try{return{library:Sn(),canSave:!0,error:""}}catch(A){return{library:_S(),canSave:!1,error:A instanceof Error?A.message:"The local standards library could not be loaded."}}}),[s,o]=M.useState(r.library),l=M.useRef(r.library),[u,g]=M.useState(r.canSave),[f,y]=M.useState(r.error),m=A=>{if(!u)return y("The local library could not be read safely. Its saved contents were left unchanged."),!1;let S;try{S=A(l.current)}catch(L){return y(L instanceof Error?L.message:"The standards change could not be applied."),!1}try{return yi(S),l.current=S,o(S),y(""),!0}catch(L){const _=L instanceof Error?L.message:"The standards change could not be saved locally.";return _.startsWith("This browser could not save the CAD standards locally.")&&g(!1),y(_),!1}},p=(A,S,L)=>m(_=>Jl(_,A,"company",S,L)),b=(A,S,L)=>m(_=>Jl(_,A,"project",S,L)),v=(A,S)=>m(L=>FS(L,A,S)),x=A=>m(S=>US(S,A)),N=(A,S)=>m(L=>kS(L,A,S)),D=(A,S,L)=>{const _=l.current.projects[A]?.projectName??`Project ${String(Object.keys(l.current.projects).sort().indexOf(A)+1).padStart(2,"0")}`;m(C=>BS(C,A,_,S,L))};return c.jsx(dD,{library:s,reviewCandidates:s.reviewCandidates,reviewOnly:!0,backHref:a,onApproveCompany:p,onApproveProject:b,onUpdateReviewedItem:v,onDismiss:x,onSetCompanyDefault:N,onSetProjectDefault:D,storageNotice:f,readOnly:!u})}const uD="/pid-mapping-studio-app/".replace(/\/$/,"");function pD(){const[a]=hb();return a==="/admin/library"||a.startsWith("/sign-in")||a.startsWith("/sign-up")?c.jsx(gx,{to:"/"}):a==="/portal"||a==="/library"||a==="/"?c.jsx(D1,{}):a==="/workspace/pfd"?c.jsx(Xy,{discipline:"pfd"}):a==="/workspace/pid"?c.jsx(Xy,{discipline:"pid"}):a==="/workspace/pfd/engineering-data"?c.jsx(Jy,{discipline:"pfd"}):a==="/workspace/pid/engineering-data"?c.jsx(Jy,{discipline:"pid"}):a==="/standards-review/pfd"?c.jsx(ab,{backHref:"/workspace/pfd"}):a==="/standards-review/pid"?c.jsx(ab,{backHref:"/workspace/pid"}):c.jsx(N1,{})}function fD(){return c.jsx(hx,{base:uD,children:c.jsx(A1,{children:c.jsx(pD,{})})})}Ip.createRoot(document.getElementById("root"),{onCaughtError:(a,r)=>{console.error(a,r.componentStack)}}).render(c.jsx(fD,{}));export{pn as _,hD as a,Zb as c,wi as g,Bp as v,mD as w};
