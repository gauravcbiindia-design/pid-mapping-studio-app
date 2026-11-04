const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C90jncKX.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/exceljs.min-De4UQp8C.js"])))=>i.map(i=>d[i]);
function Xl(a,r){for(var s=0;s<r.length;s++){const o=r[s];if(typeof o!="string"&&!Array.isArray(o)){for(const l in o)if(l!=="default"&&!(l in a)){const p=Object.getOwnPropertyDescriptor(o,l);p&&Object.defineProperty(a,l,p.get?p:{enumerable:!0,get:()=>o[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const p of l)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function s(l){const p={};return l.integrity&&(p.integrity=l.integrity),l.referrerPolicy&&(p.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?p.credentials="include":l.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function o(l){if(l.ep)return;l.ep=!0;const p=s(l);fetch(l.href,p)}})();var jA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fi(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function zy(a){if(Object.prototype.hasOwnProperty.call(a,"__esModule"))return a;var r=a.default;if(typeof r=="function"){var s=function o(){var l=!1;try{l=this instanceof o}catch{}return l?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};s.prototype=r.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(a).forEach(function(o){var l=Object.getOwnPropertyDescriptor(a,o);Object.defineProperty(s,o,l.get?l:{enumerable:!0,get:function(){return a[o]}})}),s}var uu={exports:{}},$o={};var fm;function TE(){if(fm)return $o;fm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(o,l,p){var g=null;if(p!==void 0&&(g=""+p),l.key!==void 0&&(g=""+l.key),"key"in l){p={};for(var f in l)f!=="key"&&(p[f]=l[f])}else p=l;return l=p.ref,{$$typeof:a,type:o,key:g,ref:l!==void 0?l:null,props:p}}return $o.Fragment=r,$o.jsx=s,$o.jsxs=s,$o}var hm;function AE(){return hm||(hm=1,uu.exports=TE()),uu.exports}var c=AE();const DE=fi(c),CE=Xl({__proto__:null,default:DE},[c]);var pu={exports:{}},Uo={},fu={exports:{}},hu={};var gm;function NE(){return gm||(gm=1,(function(a){function r(Y,Q){var me=Y.length;Y.push(Q);e:for(;0<me;){var xe=me-1>>>1,j=Y[xe];if(0<l(j,Q))Y[xe]=Q,Y[me]=j,me=xe;else break e}}function s(Y){return Y.length===0?null:Y[0]}function o(Y){if(Y.length===0)return null;var Q=Y[0],me=Y.pop();if(me!==Q){Y[0]=me;e:for(var xe=0,j=Y.length,te=j>>>1;xe<te;){var U=2*(xe+1)-1,V=Y[U],oe=U+1,de=Y[oe];if(0>l(V,me))oe<j&&0>l(de,V)?(Y[xe]=de,Y[oe]=me,xe=oe):(Y[xe]=V,Y[U]=me,xe=U);else if(oe<j&&0>l(de,me))Y[xe]=de,Y[oe]=me,xe=oe;else break e}}return Q}function l(Y,Q){var me=Y.sortIndex-Q.sortIndex;return me!==0?me:Y.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var g=Date,f=g.now();a.unstable_now=function(){return g.now()-f}}var m=[],u=[],y=1,b=null,v=3,x=!1,R=!1,D=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;function N(Y){for(var Q=s(u);Q!==null;){if(Q.callback===null)o(u);else if(Q.startTime<=Y)o(u),Q.sortIndex=Q.expirationTime,r(m,Q);else break;Q=s(u)}}function w(Y){if(D=!1,N(Y),!R)if(s(m)!==null)R=!0,k||(k=!0,ae());else{var Q=s(u);Q!==null&&ce(w,Q.startTime-Y)}}var k=!1,C=-1,L=5,B=-1;function ee(){return A?!0:!(a.unstable_now()-B<L)}function X(){if(A=!1,k){var Y=a.unstable_now();B=Y;var Q=!0;try{e:{R=!1,D&&(D=!1,P(C),C=-1),x=!0;var me=v;try{t:{for(N(Y),b=s(m);b!==null&&!(b.expirationTime>Y&&ee());){var xe=b.callback;if(typeof xe=="function"){b.callback=null,v=b.priorityLevel;var j=xe(b.expirationTime<=Y);if(Y=a.unstable_now(),typeof j=="function"){b.callback=j,N(Y),Q=!0;break t}b===s(m)&&o(m),N(Y)}else o(m);b=s(m)}if(b!==null)Q=!0;else{var te=s(u);te!==null&&ce(w,te.startTime-Y),Q=!1}}break e}finally{b=null,v=me,x=!1}Q=void 0}}finally{Q?ae():k=!1}}}var ae;if(typeof _=="function")ae=function(){_(X)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,ue=we.port2;we.port1.onmessage=X,ae=function(){ue.postMessage(null)}}else ae=function(){S(X,0)};function ce(Y,Q){C=S(function(){Y(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(Y){Y.callback=null},a.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<Y?Math.floor(1e3/Y):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(Y){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var me=v;v=Q;try{return Y()}finally{v=me}},a.unstable_requestPaint=function(){A=!0},a.unstable_runWithPriority=function(Y,Q){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var me=v;v=Y;try{return Q()}finally{v=me}},a.unstable_scheduleCallback=function(Y,Q,me){var xe=a.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?xe+me:xe):me=xe,Y){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=me+j,Y={id:y++,callback:Q,priorityLevel:Y,startTime:me,expirationTime:j,sortIndex:-1},me>xe?(Y.sortIndex=me,r(u,Y),s(m)===null&&Y===s(u)&&(D?(P(C),C=-1):D=!0,ce(w,me-xe))):(Y.sortIndex=j,r(m,Y),R||x||(R=!0,k||(k=!0,ae()))),Y},a.unstable_shouldYield=ee,a.unstable_wrapCallback=function(Y){var Q=v;return function(){var me=v;v=Q;try{return Y.apply(this,arguments)}finally{v=me}}}})(hu)),hu}var mm;function RE(){return mm||(mm=1,fu.exports=NE()),fu.exports}var gu={exports:{}},$e={};var ym;function kE(){if(ym)return $e;ym=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function v(j){return j===null||typeof j!="object"?null:(j=b&&j[b]||j["@@iterator"],typeof j=="function"?j:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,D={};function A(j,te,U){this.props=j,this.context=te,this.refs=D,this.updater=U||x}A.prototype.isReactComponent={},A.prototype.setState=function(j,te){if(typeof j!="object"&&typeof j!="function"&&j!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,j,te,"setState")},A.prototype.forceUpdate=function(j){this.updater.enqueueForceUpdate(this,j,"forceUpdate")};function S(){}S.prototype=A.prototype;function P(j,te,U){this.props=j,this.context=te,this.refs=D,this.updater=U||x}var _=P.prototype=new S;_.constructor=P,R(_,A.prototype),_.isPureReactComponent=!0;var N=Array.isArray,w={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function C(j,te,U,V,oe,de){return U=de.ref,{$$typeof:a,type:j,key:te,ref:U!==void 0?U:null,props:de}}function L(j,te){return C(j.type,te,void 0,void 0,void 0,j.props)}function B(j){return typeof j=="object"&&j!==null&&j.$$typeof===a}function ee(j){var te={"=":"=0",":":"=2"};return"$"+j.replace(/[=:]/g,function(U){return te[U]})}var X=/\/+/g;function ae(j,te){return typeof j=="object"&&j!==null&&j.key!=null?ee(""+j.key):te.toString(36)}function we(){}function ue(j){switch(j.status){case"fulfilled":return j.value;case"rejected":throw j.reason;default:switch(typeof j.status=="string"?j.then(we,we):(j.status="pending",j.then(function(te){j.status==="pending"&&(j.status="fulfilled",j.value=te)},function(te){j.status==="pending"&&(j.status="rejected",j.reason=te)})),j.status){case"fulfilled":return j.value;case"rejected":throw j.reason}}throw j}function ce(j,te,U,V,oe){var de=typeof j;(de==="undefined"||de==="boolean")&&(j=null);var ve=!1;if(j===null)ve=!0;else switch(de){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(j.$$typeof){case a:case r:ve=!0;break;case y:return ve=j._init,ce(ve(j._payload),te,U,V,oe)}}if(ve)return oe=oe(j),ve=V===""?"."+ae(j,0):V,N(oe)?(U="",ve!=null&&(U=ve.replace(X,"$&/")+"/"),ce(oe,te,U,"",function(mt){return mt})):oe!=null&&(B(oe)&&(oe=L(oe,U+(oe.key==null||j&&j.key===oe.key?"":(""+oe.key).replace(X,"$&/")+"/")+ve)),te.push(oe)),1;ve=0;var qe=V===""?".":V+":";if(N(j))for(var Le=0;Le<j.length;Le++)V=j[Le],de=qe+ae(V,Le),ve+=ce(V,te,U,de,oe);else if(Le=v(j),typeof Le=="function")for(j=Le.call(j),Le=0;!(V=j.next()).done;)V=V.value,de=qe+ae(V,Le++),ve+=ce(V,te,U,de,oe);else if(de==="object"){if(typeof j.then=="function")return ce(ue(j),te,U,V,oe);throw te=String(j),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(j).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.")}return ve}function Y(j,te,U){if(j==null)return j;var V=[],oe=0;return ce(j,V,"","",function(de){return te.call(U,de,oe++)}),V}function Q(j){if(j._status===-1){var te=j._result;te=te(),te.then(function(U){(j._status===0||j._status===-1)&&(j._status=1,j._result=U)},function(U){(j._status===0||j._status===-1)&&(j._status=2,j._result=U)}),j._status===-1&&(j._status=0,j._result=te)}if(j._status===1)return j._result.default;throw j._result}var me=typeof reportError=="function"?reportError:function(j){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var te=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof j=="object"&&j!==null&&typeof j.message=="string"?String(j.message):String(j),error:j});if(!window.dispatchEvent(te))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",j);return}console.error(j)};function xe(){}return $e.Children={map:Y,forEach:function(j,te,U){Y(j,function(){te.apply(this,arguments)},U)},count:function(j){var te=0;return Y(j,function(){te++}),te},toArray:function(j){return Y(j,function(te){return te})||[]},only:function(j){if(!B(j))throw Error("React.Children.only expected to receive a single React element child.");return j}},$e.Component=A,$e.Fragment=s,$e.Profiler=l,$e.PureComponent=P,$e.StrictMode=o,$e.Suspense=m,$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,$e.__COMPILER_RUNTIME={__proto__:null,c:function(j){return w.H.useMemoCache(j)}},$e.cache=function(j){return function(){return j.apply(null,arguments)}},$e.cloneElement=function(j,te,U){if(j==null)throw Error("The argument must be a React element, but you passed "+j+".");var V=R({},j.props),oe=j.key,de=void 0;if(te!=null)for(ve in te.ref!==void 0&&(de=void 0),te.key!==void 0&&(oe=""+te.key),te)!k.call(te,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&te.ref===void 0||(V[ve]=te[ve]);var ve=arguments.length-2;if(ve===1)V.children=U;else if(1<ve){for(var qe=Array(ve),Le=0;Le<ve;Le++)qe[Le]=arguments[Le+2];V.children=qe}return C(j.type,oe,void 0,void 0,de,V)},$e.createContext=function(j){return j={$$typeof:g,_currentValue:j,_currentValue2:j,_threadCount:0,Provider:null,Consumer:null},j.Provider=j,j.Consumer={$$typeof:p,_context:j},j},$e.createElement=function(j,te,U){var V,oe={},de=null;if(te!=null)for(V in te.key!==void 0&&(de=""+te.key),te)k.call(te,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(oe[V]=te[V]);var ve=arguments.length-2;if(ve===1)oe.children=U;else if(1<ve){for(var qe=Array(ve),Le=0;Le<ve;Le++)qe[Le]=arguments[Le+2];oe.children=qe}if(j&&j.defaultProps)for(V in ve=j.defaultProps,ve)oe[V]===void 0&&(oe[V]=ve[V]);return C(j,de,void 0,void 0,null,oe)},$e.createRef=function(){return{current:null}},$e.forwardRef=function(j){return{$$typeof:f,render:j}},$e.isValidElement=B,$e.lazy=function(j){return{$$typeof:y,_payload:{_status:-1,_result:j},_init:Q}},$e.memo=function(j,te){return{$$typeof:u,type:j,compare:te===void 0?null:te}},$e.startTransition=function(j){var te=w.T,U={};w.T=U;try{var V=j(),oe=w.S;oe!==null&&oe(U,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(xe,me)}catch(de){me(de)}finally{w.T=te}},$e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},$e.use=function(j){return w.H.use(j)},$e.useActionState=function(j,te,U){return w.H.useActionState(j,te,U)},$e.useCallback=function(j,te){return w.H.useCallback(j,te)},$e.useContext=function(j){return w.H.useContext(j)},$e.useDebugValue=function(){},$e.useDeferredValue=function(j,te){return w.H.useDeferredValue(j,te)},$e.useEffect=function(j,te,U){var V=w.H;if(typeof U=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(j,te)},$e.useId=function(){return w.H.useId()},$e.useImperativeHandle=function(j,te,U){return w.H.useImperativeHandle(j,te,U)},$e.useInsertionEffect=function(j,te){return w.H.useInsertionEffect(j,te)},$e.useLayoutEffect=function(j,te){return w.H.useLayoutEffect(j,te)},$e.useMemo=function(j,te){return w.H.useMemo(j,te)},$e.useOptimistic=function(j,te){return w.H.useOptimistic(j,te)},$e.useReducer=function(j,te,U){return w.H.useReducer(j,te,U)},$e.useRef=function(j){return w.H.useRef(j)},$e.useState=function(j){return w.H.useState(j)},$e.useSyncExternalStore=function(j,te,U){return w.H.useSyncExternalStore(j,te,U)},$e.useTransition=function(){return w.H.useTransition()},$e.version="19.1.4",$e}var bm;function Gl(){return bm||(bm=1,gu.exports=kE()),gu.exports}var mu={exports:{}},ma={};var vm;function _E(){if(vm)return ma;vm=1;var a=Gl();function r(m){var u="https://react.dev/errors/"+m;if(1<arguments.length){u+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)u+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},l=Symbol.for("react.portal");function p(m,u,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:m,containerInfo:u,implementation:y}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,u){if(m==="font")return"";if(typeof u=="string")return u==="use-credentials"?u:""}return ma.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ma.createPortal=function(m,u){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!u||u.nodeType!==1&&u.nodeType!==9&&u.nodeType!==11)throw Error(r(299));return p(m,u,null,y)},ma.flushSync=function(m){var u=g.T,y=o.p;try{if(g.T=null,o.p=2,m)return m()}finally{g.T=u,o.p=y,o.d.f()}},ma.preconnect=function(m,u){typeof m=="string"&&(u?(u=u.crossOrigin,u=typeof u=="string"?u==="use-credentials"?u:"":void 0):u=null,o.d.C(m,u))},ma.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},ma.preinit=function(m,u){if(typeof m=="string"&&u&&typeof u.as=="string"){var y=u.as,b=f(y,u.crossOrigin),v=typeof u.integrity=="string"?u.integrity:void 0,x=typeof u.fetchPriority=="string"?u.fetchPriority:void 0;y==="style"?o.d.S(m,typeof u.precedence=="string"?u.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:x}):y==="script"&&o.d.X(m,{crossOrigin:b,integrity:v,fetchPriority:x,nonce:typeof u.nonce=="string"?u.nonce:void 0})}},ma.preinitModule=function(m,u){if(typeof m=="string")if(typeof u=="object"&&u!==null){if(u.as==null||u.as==="script"){var y=f(u.as,u.crossOrigin);o.d.M(m,{crossOrigin:y,integrity:typeof u.integrity=="string"?u.integrity:void 0,nonce:typeof u.nonce=="string"?u.nonce:void 0})}}else u==null&&o.d.M(m)},ma.preload=function(m,u){if(typeof m=="string"&&typeof u=="object"&&u!==null&&typeof u.as=="string"){var y=u.as,b=f(y,u.crossOrigin);o.d.L(m,y,{crossOrigin:b,integrity:typeof u.integrity=="string"?u.integrity:void 0,nonce:typeof u.nonce=="string"?u.nonce:void 0,type:typeof u.type=="string"?u.type:void 0,fetchPriority:typeof u.fetchPriority=="string"?u.fetchPriority:void 0,referrerPolicy:typeof u.referrerPolicy=="string"?u.referrerPolicy:void 0,imageSrcSet:typeof u.imageSrcSet=="string"?u.imageSrcSet:void 0,imageSizes:typeof u.imageSizes=="string"?u.imageSizes:void 0,media:typeof u.media=="string"?u.media:void 0})}},ma.preloadModule=function(m,u){if(typeof m=="string")if(u){var y=f(u.as,u.crossOrigin);o.d.m(m,{as:typeof u.as=="string"&&u.as!=="script"?u.as:void 0,crossOrigin:y,integrity:typeof u.integrity=="string"?u.integrity:void 0})}else o.d.m(m)},ma.requestFormReset=function(m){o.d.r(m)},ma.unstable_batchedUpdates=function(m,u){return m(u)},ma.useFormState=function(m,u,y){return g.H.useFormState(m,u,y)},ma.useFormStatus=function(){return g.H.useHostTransitionStatus()},ma.version="19.1.4",ma}var Em;function Yy(){if(Em)return mu.exports;Em=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),mu.exports=_E(),mu.exports}var wm;function LE(){if(wm)return Uo;wm=1;var a=RE(),r=Gl(),s=Yy();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(p(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,i=t;;){var d=n.return;if(d===null)break;var h=d.alternate;if(h===null){if(i=d.return,i!==null){n=i;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===n)return f(d),e;if(h===i)return f(d),t;h=h.sibling}throw Error(o(188))}if(n.return!==i.return)n=d,i=h;else{for(var E=!1,T=d.child;T;){if(T===n){E=!0,n=d,i=h;break}if(T===i){E=!0,i=d,n=h;break}T=T.sibling}if(!E){for(T=h.child;T;){if(T===n){E=!0,n=h,i=d;break}if(T===i){E=!0,i=h,n=d;break}T=T.sibling}if(!E)throw Error(o(189))}}if(n.alternate!==i)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function u(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=u(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),_=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),B=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),X=Symbol.iterator;function ae(e){return e===null||typeof e!="object"?null:(e=X&&e[X]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case A:return"Profiler";case D:return"StrictMode";case w:return"Suspense";case k:return"SuspenseList";case B:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case _:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case N:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var ce=Array.isArray,Y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},xe=[],j=-1;function te(e){return{current:e}}function U(e){0>j||(e.current=xe[j],xe[j]=null,j--)}function V(e,t){j++,xe[j]=e.current,e.current=t}var oe=te(null),de=te(null),ve=te(null),qe=te(null);function Le(e,t){switch(V(ve,t),V(de,e),V(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Fg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Fg(t),e=Bg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(oe),V(oe,e)}function mt(){U(oe),U(de),U(ve)}function nt(e){e.memoizedState!==null&&V(qe,e);var t=oe.current,n=Bg(t,e.type);t!==n&&(V(de,e),V(oe,n))}function ot(e){de.current===e&&(U(oe),U(de)),qe.current===e&&(U(qe),Po._currentValue=me)}var dt=Object.prototype.hasOwnProperty,Mt=a.unstable_scheduleCallback,yt=a.unstable_cancelCallback,F=a.unstable_shouldYield,pe=a.unstable_requestPaint,ge=a.unstable_now,z=a.unstable_getCurrentPriorityLevel,fe=a.unstable_ImmediatePriority,Ce=a.unstable_UserBlockingPriority,ye=a.unstable_NormalPriority,Ie=a.unstable_LowPriority,Qe=a.unstable_IdlePriority,Ve=a.log,Me=a.unstable_setDisableYieldValue,_t=null,be=null;function et(e){if(typeof Ve=="function"&&Me(e),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(_t,e)}catch{}}var rt=Math.clz32?Math.clz32:ka,Qt=Math.log,ke=Math.LN2;function ka(e){return e>>>=0,e===0?32:31-(Qt(e)/ke|0)|0}var At=256,Et=4194304;function Jt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $t(e,t,n){var i=e.pendingLanes;if(i===0)return 0;var d=0,h=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var T=i&134217727;return T!==0?(i=T&~h,i!==0?d=Jt(i):(E&=T,E!==0?d=Jt(E):n||(n=T&~e,n!==0&&(d=Jt(n))))):(T=i&~h,T!==0?d=Jt(T):E!==0?d=Jt(E):n||(n=i&~e,n!==0&&(d=Jt(n)))),d===0?0:t!==0&&t!==d&&(t&h)===0&&(h=d&-d,n=t&-t,h>=n||h===32&&(n&4194048)!==0)?t:d}function _a(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ut(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(){var e=At;return At<<=1,(At&4194048)===0&&(At=256),e}function Ut(){var e=Et;return Et<<=1,(Et&62914560)===0&&(Et=4194304),e}function wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function La(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ra(e,t,n,i,d,h){var E=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var T=e.entanglements,O=e.expirationTimes,W=e.hiddenUpdates;for(n=E&~n;0<n;){var se=31-rt(n),le=1<<se;T[se]=0,O[se]=-1;var K=W[se];if(K!==null)for(W[se]=null,se=0;se<K.length;se++){var Z=K[se];Z!==null&&(Z.lane&=-536870913)}n&=~le}i!==0&&cn(e,i,0),h!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=h&~(E&~t))}function cn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-rt(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|n&4194090}function en(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var i=31-rt(n),d=1<<i;d&t|e[i]&t&&(e[i]|=t),n&=~d}}function Gn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ia(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Tn(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:im(e.type))}function pa(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var fa=Math.random().toString(36).slice(2),Dt="__reactFiber$"+fa,Ke="__reactProps$"+fa,I="__reactContainer$"+fa,J="__reactEvents$"+fa,he="__reactListeners$"+fa,Ue="__reactHandles$"+fa,M="__reactResources$"+fa,re="__reactMarker$"+fa;function Ee(e){delete e[Dt],delete e[Ke],delete e[J],delete e[he],delete e[Ue]}function Se(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[I]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vg(e);e!==null;){if(n=e[Dt])return n;e=Vg(e)}return t}e=n,n=e.parentNode}return null}function Ne(e){if(e=e[Dt]||e[I]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Oe(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Je(e){var t=e[M];return t||(t=e[M]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[re]=!0}var ha=new Set,Ct={};function Ft(e,t){ba(e,t),ba(e+"Capture",t)}function ba(e,t){for(Ct[e]=t,e=0;e<t.length;e++)ha.add(t[e])}var An=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qr={},Hs={};function ic(e){return dt.call(Hs,e)?!0:dt.call(Qr,e)?!1:An.test(e)?Hs[e]=!0:(Qr[e]=!0,!1)}function Jr(e,t,n){if(ic(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function es(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function za(e,t,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+i)}}var Dn,xi;function Te(e){if(Dn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Dn=t&&t[1]||"",xi=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Dn+e+xi}var Pe=!1;function bt(e,t){if(!e||Pe)return"";Pe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(Z){var K=Z}Reflect.construct(e,[],le)}else{try{le.call()}catch(Z){K=Z}e.call(le.prototype)}}else{try{throw Error()}catch(Z){K=Z}(le=e())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(Z){if(Z&&K&&typeof Z.stack=="string")return[Z.stack,K.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=i.DetermineComponentFrameRoot(),E=h[0],T=h[1];if(E&&T){var O=E.split(`
`),W=T.split(`
`);for(d=i=0;i<O.length&&!O[i].includes("DetermineComponentFrameRoot");)i++;for(;d<W.length&&!W[d].includes("DetermineComponentFrameRoot");)d++;if(i===O.length||d===W.length)for(i=O.length-1,d=W.length-1;1<=i&&0<=d&&O[i]!==W[d];)d--;for(;1<=i&&0<=d;i--,d--)if(O[i]!==W[d]){if(i!==1||d!==1)do if(i--,d--,0>d||O[i]!==W[d]){var se=`
`+O[i].replace(" at new "," at ");return e.displayName&&se.includes("<anonymous>")&&(se=se.replace("<anonymous>",e.displayName)),se}while(1<=i&&0<=d);break}}}finally{Pe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Te(n):""}function Pt(e){switch(e.tag){case 26:case 27:case 5:return Te(e.type);case 16:return Te("Lazy");case 13:return Te("Suspense");case 19:return Te("SuspenseList");case 0:case 15:return bt(e.type,!1);case 11:return bt(e.type.render,!1);case 1:return bt(e.type,!0);case 31:return Te("Activity");default:return""}}function Nt(e){try{var t="";do t+=Pt(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function xt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sa(e){var t=Wn(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),i=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var d=n.get,h=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(E){i=""+E,h.call(this,E)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(E){i=""+E},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ta(e){e._valueTracker||(e._valueTracker=Sa(e))}function Ya(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),i="";return e&&(i=Wn(e)?e.checked?"true":"false":e.value),e=i,e!==n?(t.setValue(e),!0):!1}function Cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ev=/[\n"\\]/g;function Ha(e){return e.replace(Ev,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function lc(e,t,n,i,d,h,E,T){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),t!=null?E==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+xt(t)):e.value!==""+xt(t)&&(e.value=""+xt(t)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),t!=null?cc(e,E,xt(t)):n!=null?cc(e,E,xt(n)):i!=null&&e.removeAttribute("value"),d==null&&h!=null&&(e.defaultChecked=!!h),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+xt(T):e.removeAttribute("name")}function qp(e,t,n,i,d,h,E,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),t!=null||n!=null){if(!(h!=="submit"&&h!=="reset"||t!=null))return;n=n!=null?""+xt(n):"",t=t!=null?""+xt(t):n,T||t===e.value||(e.value=t),e.defaultValue=t}i=i??d,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=T?e.checked:!!i,e.defaultChecked=!!i,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E)}function cc(e,t,n){t==="number"&&Cn(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function ts(e,t,n,i){if(e=e.options,t){t={};for(var d=0;d<n.length;d++)t["$"+n[d]]=!0;for(n=0;n<e.length;n++)d=t.hasOwnProperty("$"+e[n].value),e[n].selected!==d&&(e[n].selected=d),d&&i&&(e[n].defaultSelected=!0)}else{for(n=""+xt(n),t=null,d=0;d<e.length;d++){if(e[d].value===n){e[d].selected=!0,i&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function Mp(e,t,n){if(t!=null&&(t=""+xt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+xt(n):""}function $p(e,t,n,i){if(t==null){if(i!=null){if(n!=null)throw Error(o(92));if(ce(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),t=n}n=xt(t),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i)}function as(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var wv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Up(e,t,n){var i=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,n):typeof n!="number"||n===0||wv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Fp(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var d in t)i=t[d],t.hasOwnProperty(d)&&n[d]!==i&&Up(e,d,i)}else for(var h in t)t.hasOwnProperty(h)&&Up(e,h,t[h])}function dc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Si(e){return Sv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var uc=null;function pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ns=null,rs=null;function Bp(e){var t=Ne(e);if(t&&(e=t.stateNode)){var n=e[Ke]||null;e:switch(e=t.stateNode,t.type){case"input":if(lc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ha(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var d=i[Ke]||null;if(!d)throw Error(o(90));lc(i,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<n.length;t++)i=n[t],i.form===e.form&&Ya(i)}break e;case"textarea":Mp(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&ts(e,!!n.multiple,t,!1)}}}var fc=!1;function zp(e,t,n){if(fc)return e(t,n);fc=!0;try{var i=e(t);return i}finally{if(fc=!1,(ns!==null||rs!==null)&&(ll(),ns&&(t=ns,e=rs,rs=ns=null,Bp(t),e)))for(t=0;t<e.length;t++)Bp(e[t])}}function Vs(e,t){var n=e.stateNode;if(n===null)return null;var i=n[Ke]||null;if(i===null)return null;n=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hc=!1;if(Nn)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){hc=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{hc=!1}var Kn=null,gc=null,Ti=null;function Yp(){if(Ti)return Ti;var e,t=gc,n=t.length,i,d="value"in Kn?Kn.value:Kn.textContent,h=d.length;for(e=0;e<n&&t[e]===d[e];e++);var E=n-e;for(i=1;i<=E&&t[n-i]===d[h-i];i++);return Ti=d.slice(e,1<i?1-i:void 0)}function Ai(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Di(){return!0}function Hp(){return!1}function Aa(e){function t(n,i,d,h,E){this._reactName=n,this._targetInst=d,this.type=i,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(n=e[T],this[T]=n?n(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Di:Hp,this.isPropagationStopped=Hp,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Di)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Di)},persist:function(){},isPersistent:Di}),t}var Dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ci=Aa(Dr),Gs=y({},Dr,{view:0,detail:0}),Tv=Aa(Gs),mc,yc,Ws,Ni=y({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ws&&(Ws&&e.type==="mousemove"?(mc=e.screenX-Ws.screenX,yc=e.screenY-Ws.screenY):yc=mc=0,Ws=e),mc)},movementY:function(e){return"movementY"in e?e.movementY:yc}}),Vp=Aa(Ni),Av=y({},Ni,{dataTransfer:0}),Dv=Aa(Av),Cv=y({},Gs,{relatedTarget:0}),bc=Aa(Cv),Nv=y({},Dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=Aa(Nv),kv=y({},Dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_v=Aa(kv),Lv=y({},Dr,{data:0}),Xp=Aa(Lv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jv[e])?!!t[e]:!1}function vc(){return Ov}var qv=y({},Gs,{key:function(e){if(e.key){var t=Iv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ai(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Pv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vc,charCode:function(e){return e.type==="keypress"?Ai(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ai(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Mv=Aa(qv),$v=y({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gp=Aa($v),Uv=y({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vc}),Fv=Aa(Uv),Bv=y({},Dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=Aa(Bv),Yv=y({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Hv=Aa(Yv),Vv=y({},Dr,{newState:0,oldState:0}),Xv=Aa(Vv),Gv=[9,13,27,32],Ec=Nn&&"CompositionEvent"in window,Ks=null;Nn&&"documentMode"in document&&(Ks=document.documentMode);var Wv=Nn&&"TextEvent"in window&&!Ks,Wp=Nn&&(!Ec||Ks&&8<Ks&&11>=Ks),Kp=" ",Zp=!1;function Qp(e,t){switch(e){case"keyup":return Gv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ss=!1;function Kv(e,t){switch(e){case"compositionend":return Jp(t);case"keypress":return t.which!==32?null:(Zp=!0,Kp);case"textInput":return e=t.data,e===Kp&&Zp?null:e;default:return null}}function Zv(e,t){if(ss)return e==="compositionend"||!Ec&&Qp(e,t)?(e=Yp(),Ti=gc=Kn=null,ss=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Wp&&t.locale!=="ko"?null:t.data;default:return null}}var Qv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Qv[e.type]:t==="textarea"}function tf(e,t,n,i){ns?rs?rs.push(i):rs=[i]:ns=i,t=hl(t,"onChange"),0<t.length&&(n=new Ci("onChange","change",null,n,i),e.push({event:n,listeners:t}))}var Zs=null,Qs=null;function Jv(e){Og(e,0)}function Ri(e){var t=Oe(e);if(Ya(t))return e}function af(e,t){if(e==="change")return t}var nf=!1;if(Nn){var wc;if(Nn){var xc="oninput"in document;if(!xc){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),xc=typeof rf.oninput=="function"}wc=xc}else wc=!1;nf=wc&&(!document.documentMode||9<document.documentMode)}function sf(){Zs&&(Zs.detachEvent("onpropertychange",of),Qs=Zs=null)}function of(e){if(e.propertyName==="value"&&Ri(Qs)){var t=[];tf(t,Qs,e,pc(e)),zp(Jv,t)}}function e0(e,t,n){e==="focusin"?(sf(),Zs=t,Qs=n,Zs.attachEvent("onpropertychange",of)):e==="focusout"&&sf()}function t0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ri(Qs)}function a0(e,t){if(e==="click")return Ri(t)}function n0(e,t){if(e==="input"||e==="change")return Ri(t)}function r0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pa=typeof Object.is=="function"?Object.is:r0;function Js(e,t){if(Pa(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),i=Object.keys(t);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var d=n[i];if(!dt.call(t,d)||!Pa(e[d],t[d]))return!1}return!0}function lf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cf(e,t){var n=lf(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=t&&i>=t)return{node:n,offset:t-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lf(n)}}function df(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?df(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uf(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Cn(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cn(e.document)}return t}function Sc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var s0=Nn&&"documentMode"in document&&11>=document.documentMode,os=null,Tc=null,eo=null,Ac=!1;function pf(e,t,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ac||os==null||os!==Cn(i)||(i=os,"selectionStart"in i&&Sc(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),eo&&Js(eo,i)||(eo=i,i=hl(Tc,"onSelect"),0<i.length&&(t=new Ci("onSelect","select",null,t,n),e.push({event:t,listeners:i}),t.target=os)))}function Cr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var is={animationend:Cr("Animation","AnimationEnd"),animationiteration:Cr("Animation","AnimationIteration"),animationstart:Cr("Animation","AnimationStart"),transitionrun:Cr("Transition","TransitionRun"),transitionstart:Cr("Transition","TransitionStart"),transitioncancel:Cr("Transition","TransitionCancel"),transitionend:Cr("Transition","TransitionEnd")},Dc={},ff={};Nn&&(ff=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Nr(e){if(Dc[e])return Dc[e];if(!is[e])return e;var t=is[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ff)return Dc[e]=t[n];return e}var hf=Nr("animationend"),gf=Nr("animationiteration"),mf=Nr("animationstart"),o0=Nr("transitionrun"),i0=Nr("transitionstart"),l0=Nr("transitioncancel"),yf=Nr("transitionend"),bf=new Map,Cc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cc.push("scrollEnd");function tn(e,t){bf.set(e,t),Ft(t,[e])}var vf=new WeakMap;function Va(e,t){if(typeof e=="object"&&e!==null){var n=vf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Nt(t)},vf.set(e,t),t)}return{value:e,source:t,stack:Nt(t)}}var Xa=[],ls=0,Nc=0;function ki(){for(var e=ls,t=Nc=ls=0;t<e;){var n=Xa[t];Xa[t++]=null;var i=Xa[t];Xa[t++]=null;var d=Xa[t];Xa[t++]=null;var h=Xa[t];if(Xa[t++]=null,i!==null&&d!==null){var E=i.pending;E===null?d.next=d:(d.next=E.next,E.next=d),i.pending=d}h!==0&&Ef(n,d,h)}}function _i(e,t,n,i){Xa[ls++]=e,Xa[ls++]=t,Xa[ls++]=n,Xa[ls++]=i,Nc|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Rc(e,t,n,i){return _i(e,t,n,i),Li(e)}function cs(e,t){return _i(e,null,null,t),Li(e)}function Ef(e,t,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var d=!1,h=e.return;h!==null;)h.childLanes|=n,i=h.alternate,i!==null&&(i.childLanes|=n),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(d=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,d&&t!==null&&(d=31-rt(n),e=h.hiddenUpdates,i=e[d],i===null?e[d]=[t]:i.push(t),t.lane=n|536870912),h):null}function Li(e){if(50<Do)throw Do=0,jd=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ds={};function c0(e,t,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ja(e,t,n,i){return new c0(e,t,n,i)}function kc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Rn(e,t){var n=e.alternate;return n===null?(n=ja(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function wf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ii(e,t,n,i,d,h){var E=0;if(i=e,typeof e=="function")kc(e)&&(E=1);else if(typeof e=="string")E=uE(e,n,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case B:return e=ja(31,n,t,d),e.elementType=B,e.lanes=h,e;case R:return Rr(n.children,d,h,t);case D:E=8,d|=24;break;case A:return e=ja(12,n,t,d|2),e.elementType=A,e.lanes=h,e;case w:return e=ja(13,n,t,d),e.elementType=w,e.lanes=h,e;case k:return e=ja(19,n,t,d),e.elementType=k,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case _:E=10;break e;case P:E=9;break e;case N:E=11;break e;case C:E=14;break e;case L:E=16,i=null;break e}E=29,n=Error(o(130,e===null?"null":typeof e,"")),i=null}return t=ja(E,n,t,d),t.elementType=e,t.type=i,t.lanes=h,t}function Rr(e,t,n,i){return e=ja(7,e,i,t),e.lanes=n,e}function _c(e,t,n){return e=ja(6,e,null,t),e.lanes=n,e}function Lc(e,t,n){return t=ja(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var us=[],ps=0,Pi=null,ji=0,Ga=[],Wa=0,kr=null,kn=1,_n="";function _r(e,t){us[ps++]=ji,us[ps++]=Pi,Pi=e,ji=t}function xf(e,t,n){Ga[Wa++]=kn,Ga[Wa++]=_n,Ga[Wa++]=kr,kr=e;var i=kn;e=_n;var d=32-rt(i)-1;i&=~(1<<d),n+=1;var h=32-rt(t)+d;if(30<h){var E=d-d%5;h=(i&(1<<E)-1).toString(32),i>>=E,d-=E,kn=1<<32-rt(t)+d|n<<d|i,_n=h+e}else kn=1<<h|n<<d|i,_n=e}function Ic(e){e.return!==null&&(_r(e,1),xf(e,1,0))}function Pc(e){for(;e===Pi;)Pi=us[--ps],us[ps]=null,ji=us[--ps],us[ps]=null;for(;e===kr;)kr=Ga[--Wa],Ga[Wa]=null,_n=Ga[--Wa],Ga[Wa]=null,kn=Ga[--Wa],Ga[Wa]=null}var va=null,jt=null,at=!1,Lr=null,dn=!1,jc=Error(o(519));function Ir(e){var t=Error(o(418,""));throw no(Va(t,e)),jc}function Sf(e){var t=e.stateNode,n=e.type,i=e.memoizedProps;switch(t[Dt]=e,t[Ke]=i,n){case"dialog":He("cancel",t),He("close",t);break;case"iframe":case"object":case"embed":He("load",t);break;case"video":case"audio":for(n=0;n<No.length;n++)He(No[n],t);break;case"source":He("error",t);break;case"img":case"image":case"link":He("error",t),He("load",t);break;case"details":He("toggle",t);break;case"input":He("invalid",t),qp(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0),Ta(t);break;case"select":He("invalid",t);break;case"textarea":He("invalid",t),$p(t,i.value,i.defaultValue,i.children),Ta(t)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||i.suppressHydrationWarning===!0||Ug(t.textContent,n)?(i.popover!=null&&(He("beforetoggle",t),He("toggle",t)),i.onScroll!=null&&He("scroll",t),i.onScrollEnd!=null&&He("scrollend",t),i.onClick!=null&&(t.onclick=gl),t=!0):t=!1,t||Ir(e)}function Tf(e){for(va=e.return;va;)switch(va.tag){case 5:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:va=va.return}}function to(e){if(e!==va)return!1;if(!at)return Tf(e),at=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Zd(e.type,e.memoizedProps)),n=!n),n&&jt&&Ir(e),Tf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){jt=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}jt=null}}else t===27?(t=jt,pr(e.type)?(e=tu,tu=null,jt=e):jt=t):jt=va?nn(e.stateNode.nextSibling):null;return!0}function ao(){jt=va=null,at=!1}function Af(){var e=Lr;return e!==null&&(Na===null?Na=e:Na.push.apply(Na,e),Lr=null),e}function no(e){Lr===null?Lr=[e]:Lr.push(e)}var Oc=te(null),Pr=null,Ln=null;function Zn(e,t,n){V(Oc,t._currentValue),t._currentValue=n}function In(e){e._currentValue=Oc.current,U(Oc)}function qc(e,t,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===n)break;e=e.return}}function Mc(e,t,n,i){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var h=d.dependencies;if(h!==null){var E=d.child;h=h.firstContext;e:for(;h!==null;){var T=h;h=d;for(var O=0;O<t.length;O++)if(T.context===t[O]){h.lanes|=n,T=h.alternate,T!==null&&(T.lanes|=n),qc(h.return,n,e),i||(E=null);break e}h=T.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(o(341));E.lanes|=n,h=E.alternate,h!==null&&(h.lanes|=n),qc(E,n,e),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===e){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function ro(e,t,n,i){e=null;for(var d=t,h=!1;d!==null;){if(!h){if((d.flags&524288)!==0)h=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(o(387));if(E=E.memoizedProps,E!==null){var T=d.type;Pa(d.pendingProps.value,E.value)||(e!==null?e.push(T):e=[T])}}else if(d===qe.current){if(E=d.alternate,E===null)throw Error(o(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Po):e=[Po])}d=d.return}e!==null&&Mc(t,e,n,i),t.flags|=262144}function Oi(e){for(e=e.firstContext;e!==null;){if(!Pa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function jr(e){Pr=e,Ln=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ga(e){return Df(Pr,e)}function qi(e,t){return Pr===null&&jr(e),Df(e,t)}function Df(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Ln===null){if(e===null)throw Error(o(308));Ln=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Ln=Ln.next=t;return n}var d0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},u0=a.unstable_scheduleCallback,p0=a.unstable_NormalPriority,Gt={$$typeof:_,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $c(){return{controller:new d0,data:new Map,refCount:0}}function so(e){e.refCount--,e.refCount===0&&u0(p0,function(){e.controller.abort()})}var oo=null,Uc=0,fs=0,hs=null;function f0(e,t){if(oo===null){var n=oo=[];Uc=0,fs=Bd(),hs={status:"pending",value:void 0,then:function(i){n.push(i)}}}return Uc++,t.then(Cf,Cf),t}function Cf(){if(--Uc===0&&oo!==null){hs!==null&&(hs.status="fulfilled");var e=oo;oo=null,fs=0,hs=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function h0(e,t){var n=[],i={status:"pending",value:null,reason:null,then:function(d){n.push(d)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var d=0;d<n.length;d++)(0,n[d])(t)},function(d){for(i.status="rejected",i.reason=d,d=0;d<n.length;d++)(0,n[d])(void 0)}),i}var Nf=Y.S;Y.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&f0(e,t),Nf!==null&&Nf(e,t)};var Or=te(null);function Fc(){var e=Or.current;return e!==null?e:St.pooledCache}function Mi(e,t){t===null?V(Or,Or.current):V(Or,t.pool)}function Rf(){var e=Fc();return e===null?null:{parent:Gt._currentValue,pool:e}}var io=Error(o(460)),kf=Error(o(474)),$i=Error(o(542)),Bc={then:function(){}};function _f(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ui(){}function Lf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ui,Ui),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pf(e),e;default:if(typeof t.status=="string")t.then(Ui,Ui);else{if(e=St,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=i}},function(i){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pf(e),e}throw lo=t,io}}var lo=null;function If(){if(lo===null)throw Error(o(459));var e=lo;return lo=null,e}function Pf(e){if(e===io||e===$i)throw Error(o(483))}var Qn=!1;function zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Jn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function er(e,t,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(it&2)!==0){var d=i.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),i.pending=t,t=Li(e),Ef(e,null,n),t}return _i(e,i,t,n),Li(e)}function co(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,en(e,n)}}function Hc(e,t){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var d=null,h=null;if(n=n.firstBaseUpdate,n!==null){do{var E={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};h===null?d=h=E:h=h.next=E,n=n.next}while(n!==null);h===null?d=h=t:h=h.next=t}else d=h=t;n={baseState:i.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Vc=!1;function uo(){if(Vc){var e=hs;if(e!==null)throw e}}function po(e,t,n,i){Vc=!1;var d=e.updateQueue;Qn=!1;var h=d.firstBaseUpdate,E=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var O=T,W=O.next;O.next=null,E===null?h=W:E.next=W,E=O;var se=e.alternate;se!==null&&(se=se.updateQueue,T=se.lastBaseUpdate,T!==E&&(T===null?se.firstBaseUpdate=W:T.next=W,se.lastBaseUpdate=O))}if(h!==null){var le=d.baseState;E=0,se=W=O=null,T=h;do{var K=T.lane&-536870913,Z=K!==T.lane;if(Z?(Ze&K)===K:(i&K)===K){K!==0&&K===fs&&(Vc=!0),se!==null&&(se=se.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var je=e,Re=T;K=t;var ht=n;switch(Re.tag){case 1:if(je=Re.payload,typeof je=="function"){le=je.call(ht,le,K);break e}le=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Re.payload,K=typeof je=="function"?je.call(ht,le,K):je,K==null)break e;le=y({},le,K);break e;case 2:Qn=!0}}K=T.callback,K!==null&&(e.flags|=64,Z&&(e.flags|=8192),Z=d.callbacks,Z===null?d.callbacks=[K]:Z.push(K))}else Z={lane:K,tag:T.tag,payload:T.payload,callback:T.callback,next:null},se===null?(W=se=Z,O=le):se=se.next=Z,E|=K;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;Z=T,T=Z.next,Z.next=null,d.lastBaseUpdate=Z,d.shared.pending=null}}while(!0);se===null&&(O=le),d.baseState=O,d.firstBaseUpdate=W,d.lastBaseUpdate=se,h===null&&(d.shared.lanes=0),lr|=E,e.lanes=E,e.memoizedState=le}}function jf(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Of(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)jf(n[e],t)}var gs=te(null),Fi=te(0);function qf(e,t){e=Un,V(Fi,e),V(gs,t),Un=e|t.baseLanes}function Xc(){V(Fi,Un),V(gs,gs.current)}function Gc(){Un=Fi.current,U(gs),U(Fi)}var tr=0,Fe=null,pt=null,Ht=null,Bi=!1,ms=!1,qr=!1,zi=0,fo=0,ys=null,g0=0;function Bt(){throw Error(o(321))}function Wc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pa(e[n],t[n]))return!1;return!0}function Kc(e,t,n,i,d,h){return tr=h,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=e===null||e.memoizedState===null?Eh:wh,qr=!1,h=n(i,d),qr=!1,ms&&(h=$f(t,n,i,d)),Mf(e),h}function Mf(e){Y.H=Wi;var t=pt!==null&&pt.next!==null;if(tr=0,Ht=pt=Fe=null,Bi=!1,fo=0,ys=null,t)throw Error(o(300));e===null||ea||(e=e.dependencies,e!==null&&Oi(e)&&(ea=!0))}function $f(e,t,n,i){Fe=e;var d=0;do{if(ms&&(ys=null),fo=0,ms=!1,25<=d)throw Error(o(301));if(d+=1,Ht=pt=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}Y.H=x0,h=t(n,i)}while(ms);return h}function m0(){var e=Y.H,t=e.useState()[0];return t=typeof t.then=="function"?ho(t):t,e=e.useState()[0],(pt!==null?pt.memoizedState:null)!==e&&(Fe.flags|=1024),t}function Zc(){var e=zi!==0;return zi=0,e}function Qc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Jc(e){if(Bi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Bi=!1}tr=0,Ht=pt=Fe=null,ms=!1,fo=zi=0,ys=null}function Da(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Fe.memoizedState=Ht=e:Ht=Ht.next=e,Ht}function Vt(){if(pt===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=pt.next;var t=Ht===null?Fe.memoizedState:Ht.next;if(t!==null)Ht=t,pt=e;else{if(e===null)throw Fe.alternate===null?Error(o(467)):Error(o(310));pt=e,e={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Ht===null?Fe.memoizedState=Ht=e:Ht=Ht.next=e}return Ht}function ed(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ho(e){var t=fo;return fo+=1,ys===null&&(ys=[]),e=Lf(ys,e,t),t=Fe,(Ht===null?t.memoizedState:Ht.next)===null&&(t=t.alternate,Y.H=t===null||t.memoizedState===null?Eh:wh),e}function Yi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ho(e);if(e.$$typeof===_)return ga(e)}throw Error(o(438,String(e)))}function td(e){var t=null,n=Fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var i=Fe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=ed(),Fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),i=0;i<e;i++)n[i]=ee;return t.index++,n}function Pn(e,t){return typeof t=="function"?t(e):t}function Hi(e){var t=Vt();return ad(t,pt,e)}function ad(e,t,n){var i=e.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=n;var d=e.baseQueue,h=i.pending;if(h!==null){if(d!==null){var E=d.next;d.next=h.next,h.next=E}t.baseQueue=d=h,i.pending=null}if(h=e.baseState,d===null)e.memoizedState=h;else{t=d.next;var T=E=null,O=null,W=t,se=!1;do{var le=W.lane&-536870913;if(le!==W.lane?(Ze&le)===le:(tr&le)===le){var K=W.revertLane;if(K===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),le===fs&&(se=!0);else if((tr&K)===K){W=W.next,K===fs&&(se=!0);continue}else le={lane:0,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},O===null?(T=O=le,E=h):O=O.next=le,Fe.lanes|=K,lr|=K;le=W.action,qr&&n(h,le),h=W.hasEagerState?W.eagerState:n(h,le)}else K={lane:le,revertLane:W.revertLane,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},O===null?(T=O=K,E=h):O=O.next=K,Fe.lanes|=le,lr|=le;W=W.next}while(W!==null&&W!==t);if(O===null?E=h:O.next=T,!Pa(h,e.memoizedState)&&(ea=!0,se&&(n=hs,n!==null)))throw n;e.memoizedState=h,e.baseState=E,e.baseQueue=O,i.lastRenderedState=h}return d===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function nd(e){var t=Vt(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var i=n.dispatch,d=n.pending,h=t.memoizedState;if(d!==null){n.pending=null;var E=d=d.next;do h=e(h,E.action),E=E.next;while(E!==d);Pa(h,t.memoizedState)||(ea=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),n.lastRenderedState=h}return[h,i]}function Uf(e,t,n){var i=Fe,d=Vt(),h=at;if(h){if(n===void 0)throw Error(o(407));n=n()}else n=t();var E=!Pa((pt||d).memoizedState,n);E&&(d.memoizedState=n,ea=!0),d=d.queue;var T=zf.bind(null,i,d,e);if(go(2048,8,T,[e]),d.getSnapshot!==t||E||Ht!==null&&Ht.memoizedState.tag&1){if(i.flags|=2048,bs(9,Vi(),Bf.bind(null,i,d,n,t),null),St===null)throw Error(o(349));h||(tr&124)!==0||Ff(i,t,n)}return n}function Ff(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t=ed(),Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bf(e,t,n,i){t.value=n,t.getSnapshot=i,Yf(t)&&Hf(e)}function zf(e,t,n){return n(function(){Yf(t)&&Hf(e)})}function Yf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pa(e,n)}catch{return!0}}function Hf(e){var t=cs(e,2);t!==null&&Ua(t,e,2)}function rd(e){var t=Da();if(typeof e=="function"){var n=e;if(e=n(),qr){et(!0);try{n()}finally{et(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:e},t}function Vf(e,t,n,i){return e.baseState=n,ad(e,pt,typeof i=="function"?i:Pn)}function y0(e,t,n,i,d){if(Gi(e))throw Error(o(485));if(e=t.action,e!==null){var h={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){h.listeners.push(E)}};Y.T!==null?n(!0):h.isTransition=!1,i(h),n=t.pending,n===null?(h.next=t.pending=h,Xf(t,h)):(h.next=n.next,t.pending=n.next=h)}}function Xf(e,t){var n=t.action,i=t.payload,d=e.state;if(t.isTransition){var h=Y.T,E={};Y.T=E;try{var T=n(d,i),O=Y.S;O!==null&&O(E,T),Gf(e,t,T)}catch(W){sd(e,t,W)}finally{Y.T=h}}else try{h=n(d,i),Gf(e,t,h)}catch(W){sd(e,t,W)}}function Gf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Wf(e,t,i)},function(i){return sd(e,t,i)}):Wf(e,t,n)}function Wf(e,t,n){t.status="fulfilled",t.value=n,Kf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Xf(e,n)))}function sd(e,t,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=n,Kf(t),t=t.next;while(t!==i)}e.action=null}function Kf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zf(e,t){return t}function Qf(e,t){if(at){var n=St.formState;if(n!==null){e:{var i=Fe;if(at){if(jt){t:{for(var d=jt,h=dn;d.nodeType!==8;){if(!h){d=null;break t}if(d=nn(d.nextSibling),d===null){d=null;break t}}h=d.data,d=h==="F!"||h==="F"?d:null}if(d){jt=nn(d.nextSibling),i=d.data==="F!";break e}}Ir(i)}i=!1}i&&(t=n[0])}}return n=Da(),n.memoizedState=n.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zf,lastRenderedState:t},n.queue=i,n=yh.bind(null,Fe,i),i.dispatch=n,i=rd(!1),h=dd.bind(null,Fe,!1,i.queue),i=Da(),d={state:t,dispatch:null,action:e,pending:null},i.queue=d,n=y0.bind(null,Fe,d,h,n),d.dispatch=n,i.memoizedState=e,[t,n,!1]}function Jf(e){var t=Vt();return eh(t,pt,e)}function eh(e,t,n){if(t=ad(e,t,Zf)[0],e=Hi(Pn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=ho(t)}catch(E){throw E===io?$i:E}else i=t;t=Vt();var d=t.queue,h=d.dispatch;return n!==t.memoizedState&&(Fe.flags|=2048,bs(9,Vi(),b0.bind(null,d,n),null)),[i,h,e]}function b0(e,t){e.action=t}function th(e){var t=Vt(),n=pt;if(n!==null)return eh(t,n,e);Vt(),t=t.memoizedState,n=Vt();var i=n.queue.dispatch;return n.memoizedState=e,[t,i,!1]}function bs(e,t,n,i){return e={tag:e,create:n,deps:i,inst:t,next:null},t=Fe.updateQueue,t===null&&(t=ed(),Fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,t.lastEffect=e),e}function Vi(){return{destroy:void 0,resource:void 0}}function ah(){return Vt().memoizedState}function Xi(e,t,n,i){var d=Da();i=i===void 0?null:i,Fe.flags|=e,d.memoizedState=bs(1|t,Vi(),n,i)}function go(e,t,n,i){var d=Vt();i=i===void 0?null:i;var h=d.memoizedState.inst;pt!==null&&i!==null&&Wc(i,pt.memoizedState.deps)?d.memoizedState=bs(t,h,n,i):(Fe.flags|=e,d.memoizedState=bs(1|t,h,n,i))}function nh(e,t){Xi(8390656,8,e,t)}function rh(e,t){go(2048,8,e,t)}function sh(e,t){return go(4,2,e,t)}function oh(e,t){return go(4,4,e,t)}function ih(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lh(e,t,n){n=n!=null?n.concat([e]):null,go(4,4,ih.bind(null,t,e),n)}function od(){}function ch(e,t){var n=Vt();t=t===void 0?null:t;var i=n.memoizedState;return t!==null&&Wc(t,i[1])?i[0]:(n.memoizedState=[e,t],e)}function dh(e,t){var n=Vt();t=t===void 0?null:t;var i=n.memoizedState;if(t!==null&&Wc(t,i[1]))return i[0];if(i=e(),qr){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[i,t],i}function id(e,t,n){return n===void 0||(tr&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=fg(),Fe.lanes|=e,lr|=e,n)}function uh(e,t,n,i){return Pa(n,t)?n:gs.current!==null?(e=id(e,n,i),Pa(e,t)||(ea=!0),e):(tr&42)===0?(ea=!0,e.memoizedState=n):(e=fg(),Fe.lanes|=e,lr|=e,t)}function ph(e,t,n,i,d){var h=Q.p;Q.p=h!==0&&8>h?h:8;var E=Y.T,T={};Y.T=T,dd(e,!1,t,n);try{var O=d(),W=Y.S;if(W!==null&&W(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var se=h0(O,i);mo(e,t,se,$a(e))}else mo(e,t,i,$a(e))}catch(le){mo(e,t,{then:function(){},status:"rejected",reason:le},$a())}finally{Q.p=h,Y.T=E}}function v0(){}function ld(e,t,n,i){if(e.tag!==5)throw Error(o(476));var d=fh(e).queue;ph(e,d,t,me,n===null?v0:function(){return hh(e),n(i)})}function fh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:me},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function hh(e){var t=fh(e).next.queue;mo(e,t,{},$a())}function cd(){return ga(Po)}function gh(){return Vt().memoizedState}function mh(){return Vt().memoizedState}function E0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=$a();e=Jn(n);var i=er(t,e,n);i!==null&&(Ua(i,t,n),co(i,t,n)),t={cache:$c()},e.payload=t;return}t=t.return}}function w0(e,t,n){var i=$a();n={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Gi(e)?bh(t,n):(n=Rc(e,t,n,i),n!==null&&(Ua(n,e,i),vh(n,t,i)))}function yh(e,t,n){var i=$a();mo(e,t,n,i)}function mo(e,t,n,i){var d={lane:i,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gi(e))bh(t,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var E=t.lastRenderedState,T=h(E,n);if(d.hasEagerState=!0,d.eagerState=T,Pa(T,E))return _i(e,t,d,0),St===null&&ki(),!1}catch{}if(n=Rc(e,t,d,i),n!==null)return Ua(n,e,i),vh(n,t,i),!0}return!1}function dd(e,t,n,i){if(i={lane:2,revertLane:Bd(),action:i,hasEagerState:!1,eagerState:null,next:null},Gi(e)){if(t)throw Error(o(479))}else t=Rc(e,n,i,2),t!==null&&Ua(t,e,2)}function Gi(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function bh(e,t){ms=Bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vh(e,t,n){if((n&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,n|=i,t.lanes=n,en(e,n)}}var Wi={readContext:ga,use:Yi,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useLayoutEffect:Bt,useInsertionEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useSyncExternalStore:Bt,useId:Bt,useHostTransitionStatus:Bt,useFormState:Bt,useActionState:Bt,useOptimistic:Bt,useMemoCache:Bt,useCacheRefresh:Bt},Eh={readContext:ga,use:Yi,useCallback:function(e,t){return Da().memoizedState=[e,t===void 0?null:t],e},useContext:ga,useEffect:nh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Xi(4194308,4,ih.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Xi(4194308,4,e,t)},useInsertionEffect:function(e,t){Xi(4,2,e,t)},useMemo:function(e,t){var n=Da();t=t===void 0?null:t;var i=e();if(qr){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[i,t],i},useReducer:function(e,t,n){var i=Da();if(n!==void 0){var d=n(t);if(qr){et(!0);try{n(t)}finally{et(!1)}}}else d=t;return i.memoizedState=i.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},i.queue=e,e=e.dispatch=w0.bind(null,Fe,e),[i.memoizedState,e]},useRef:function(e){var t=Da();return e={current:e},t.memoizedState=e},useState:function(e){e=rd(e);var t=e.queue,n=yh.bind(null,Fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:od,useDeferredValue:function(e,t){var n=Da();return id(n,e,t)},useTransition:function(){var e=rd(!1);return e=ph.bind(null,Fe,e.queue,!0,!1),Da().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var i=Fe,d=Da();if(at){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),St===null)throw Error(o(349));(Ze&124)!==0||Ff(i,t,n)}d.memoizedState=n;var h={value:n,getSnapshot:t};return d.queue=h,nh(zf.bind(null,i,h,e),[e]),i.flags|=2048,bs(9,Vi(),Bf.bind(null,i,h,n,t),null),n},useId:function(){var e=Da(),t=St.identifierPrefix;if(at){var n=_n,i=kn;n=(i&~(1<<32-rt(i)-1)).toString(32)+n,t="«"+t+"R"+n,n=zi++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=g0++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:cd,useFormState:Qf,useActionState:Qf,useOptimistic:function(e){var t=Da();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=dd.bind(null,Fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:td,useCacheRefresh:function(){return Da().memoizedState=E0.bind(null,Fe)}},wh={readContext:ga,use:Yi,useCallback:ch,useContext:ga,useEffect:rh,useImperativeHandle:lh,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:dh,useReducer:Hi,useRef:ah,useState:function(){return Hi(Pn)},useDebugValue:od,useDeferredValue:function(e,t){var n=Vt();return uh(n,pt.memoizedState,e,t)},useTransition:function(){var e=Hi(Pn)[0],t=Vt().memoizedState;return[typeof e=="boolean"?e:ho(e),t]},useSyncExternalStore:Uf,useId:gh,useHostTransitionStatus:cd,useFormState:Jf,useActionState:Jf,useOptimistic:function(e,t){var n=Vt();return Vf(n,pt,e,t)},useMemoCache:td,useCacheRefresh:mh},x0={readContext:ga,use:Yi,useCallback:ch,useContext:ga,useEffect:rh,useImperativeHandle:lh,useInsertionEffect:sh,useLayoutEffect:oh,useMemo:dh,useReducer:nd,useRef:ah,useState:function(){return nd(Pn)},useDebugValue:od,useDeferredValue:function(e,t){var n=Vt();return pt===null?id(n,e,t):uh(n,pt.memoizedState,e,t)},useTransition:function(){var e=nd(Pn)[0],t=Vt().memoizedState;return[typeof e=="boolean"?e:ho(e),t]},useSyncExternalStore:Uf,useId:gh,useHostTransitionStatus:cd,useFormState:th,useActionState:th,useOptimistic:function(e,t){var n=Vt();return pt!==null?Vf(n,pt,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:td,useCacheRefresh:mh},vs=null,yo=0;function Ki(e){var t=yo;return yo+=1,vs===null&&(vs=[]),Lf(vs,e,t)}function bo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Zi(e,t){throw t.$$typeof===b?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function xh(e){var t=e._init;return t(e._payload)}function Sh(e){function t(H,$){if(e){var G=H.deletions;G===null?(H.deletions=[$],H.flags|=16):G.push($)}}function n(H,$){if(!e)return null;for(;$!==null;)t(H,$),$=$.sibling;return null}function i(H){for(var $=new Map;H!==null;)H.key!==null?$.set(H.key,H):$.set(H.index,H),H=H.sibling;return $}function d(H,$){return H=Rn(H,$),H.index=0,H.sibling=null,H}function h(H,$,G){return H.index=G,e?(G=H.alternate,G!==null?(G=G.index,G<$?(H.flags|=67108866,$):G):(H.flags|=67108866,$)):(H.flags|=1048576,$)}function E(H){return e&&H.alternate===null&&(H.flags|=67108866),H}function T(H,$,G,ie){return $===null||$.tag!==6?($=_c(G,H.mode,ie),$.return=H,$):($=d($,G),$.return=H,$)}function O(H,$,G,ie){var Ae=G.type;return Ae===R?se(H,$,G.props.children,ie,G.key):$!==null&&($.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===L&&xh(Ae)===$.type)?($=d($,G.props),bo($,G),$.return=H,$):($=Ii(G.type,G.key,G.props,null,H.mode,ie),bo($,G),$.return=H,$)}function W(H,$,G,ie){return $===null||$.tag!==4||$.stateNode.containerInfo!==G.containerInfo||$.stateNode.implementation!==G.implementation?($=Lc(G,H.mode,ie),$.return=H,$):($=d($,G.children||[]),$.return=H,$)}function se(H,$,G,ie,Ae){return $===null||$.tag!==7?($=Rr(G,H.mode,ie,Ae),$.return=H,$):($=d($,G),$.return=H,$)}function le(H,$,G){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=_c(""+$,H.mode,G),$.return=H,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return G=Ii($.type,$.key,$.props,null,H.mode,G),bo(G,$),G.return=H,G;case x:return $=Lc($,H.mode,G),$.return=H,$;case L:var ie=$._init;return $=ie($._payload),le(H,$,G)}if(ce($)||ae($))return $=Rr($,H.mode,G,null),$.return=H,$;if(typeof $.then=="function")return le(H,Ki($),G);if($.$$typeof===_)return le(H,qi(H,$),G);Zi(H,$)}return null}function K(H,$,G,ie){var Ae=$!==null?$.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return Ae!==null?null:T(H,$,""+G,ie);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case v:return G.key===Ae?O(H,$,G,ie):null;case x:return G.key===Ae?W(H,$,G,ie):null;case L:return Ae=G._init,G=Ae(G._payload),K(H,$,G,ie)}if(ce(G)||ae(G))return Ae!==null?null:se(H,$,G,ie,null);if(typeof G.then=="function")return K(H,$,Ki(G),ie);if(G.$$typeof===_)return K(H,$,qi(H,G),ie);Zi(H,G)}return null}function Z(H,$,G,ie,Ae){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return H=H.get(G)||null,T($,H,""+ie,Ae);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case v:return H=H.get(ie.key===null?G:ie.key)||null,O($,H,ie,Ae);case x:return H=H.get(ie.key===null?G:ie.key)||null,W($,H,ie,Ae);case L:var Be=ie._init;return ie=Be(ie._payload),Z(H,$,G,ie,Ae)}if(ce(ie)||ae(ie))return H=H.get(G)||null,se($,H,ie,Ae,null);if(typeof ie.then=="function")return Z(H,$,G,Ki(ie),Ae);if(ie.$$typeof===_)return Z(H,$,G,qi($,ie),Ae);Zi($,ie)}return null}function je(H,$,G,ie){for(var Ae=null,Be=null,De=$,_e=$=0,aa=null;De!==null&&_e<G.length;_e++){De.index>_e?(aa=De,De=null):aa=De.sibling;var tt=K(H,De,G[_e],ie);if(tt===null){De===null&&(De=aa);break}e&&De&&tt.alternate===null&&t(H,De),$=h(tt,$,_e),Be===null?Ae=tt:Be.sibling=tt,Be=tt,De=aa}if(_e===G.length)return n(H,De),at&&_r(H,_e),Ae;if(De===null){for(;_e<G.length;_e++)De=le(H,G[_e],ie),De!==null&&($=h(De,$,_e),Be===null?Ae=De:Be.sibling=De,Be=De);return at&&_r(H,_e),Ae}for(De=i(De);_e<G.length;_e++)aa=Z(De,H,_e,G[_e],ie),aa!==null&&(e&&aa.alternate!==null&&De.delete(aa.key===null?_e:aa.key),$=h(aa,$,_e),Be===null?Ae=aa:Be.sibling=aa,Be=aa);return e&&De.forEach(function(yr){return t(H,yr)}),at&&_r(H,_e),Ae}function Re(H,$,G,ie){if(G==null)throw Error(o(151));for(var Ae=null,Be=null,De=$,_e=$=0,aa=null,tt=G.next();De!==null&&!tt.done;_e++,tt=G.next()){De.index>_e?(aa=De,De=null):aa=De.sibling;var yr=K(H,De,tt.value,ie);if(yr===null){De===null&&(De=aa);break}e&&De&&yr.alternate===null&&t(H,De),$=h(yr,$,_e),Be===null?Ae=yr:Be.sibling=yr,Be=yr,De=aa}if(tt.done)return n(H,De),at&&_r(H,_e),Ae;if(De===null){for(;!tt.done;_e++,tt=G.next())tt=le(H,tt.value,ie),tt!==null&&($=h(tt,$,_e),Be===null?Ae=tt:Be.sibling=tt,Be=tt);return at&&_r(H,_e),Ae}for(De=i(De);!tt.done;_e++,tt=G.next())tt=Z(De,H,_e,tt.value,ie),tt!==null&&(e&&tt.alternate!==null&&De.delete(tt.key===null?_e:tt.key),$=h(tt,$,_e),Be===null?Ae=tt:Be.sibling=tt,Be=tt);return e&&De.forEach(function(SE){return t(H,SE)}),at&&_r(H,_e),Ae}function ht(H,$,G,ie){if(typeof G=="object"&&G!==null&&G.type===R&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case v:e:{for(var Ae=G.key;$!==null;){if($.key===Ae){if(Ae=G.type,Ae===R){if($.tag===7){n(H,$.sibling),ie=d($,G.props.children),ie.return=H,H=ie;break e}}else if($.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===L&&xh(Ae)===$.type){n(H,$.sibling),ie=d($,G.props),bo(ie,G),ie.return=H,H=ie;break e}n(H,$);break}else t(H,$);$=$.sibling}G.type===R?(ie=Rr(G.props.children,H.mode,ie,G.key),ie.return=H,H=ie):(ie=Ii(G.type,G.key,G.props,null,H.mode,ie),bo(ie,G),ie.return=H,H=ie)}return E(H);case x:e:{for(Ae=G.key;$!==null;){if($.key===Ae)if($.tag===4&&$.stateNode.containerInfo===G.containerInfo&&$.stateNode.implementation===G.implementation){n(H,$.sibling),ie=d($,G.children||[]),ie.return=H,H=ie;break e}else{n(H,$);break}else t(H,$);$=$.sibling}ie=Lc(G,H.mode,ie),ie.return=H,H=ie}return E(H);case L:return Ae=G._init,G=Ae(G._payload),ht(H,$,G,ie)}if(ce(G))return je(H,$,G,ie);if(ae(G)){if(Ae=ae(G),typeof Ae!="function")throw Error(o(150));return G=Ae.call(G),Re(H,$,G,ie)}if(typeof G.then=="function")return ht(H,$,Ki(G),ie);if(G.$$typeof===_)return ht(H,$,qi(H,G),ie);Zi(H,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,$!==null&&$.tag===6?(n(H,$.sibling),ie=d($,G),ie.return=H,H=ie):(n(H,$),ie=_c(G,H.mode,ie),ie.return=H,H=ie),E(H)):n(H,$)}return function(H,$,G,ie){try{yo=0;var Ae=ht(H,$,G,ie);return vs=null,Ae}catch(De){if(De===io||De===$i)throw De;var Be=ja(29,De,null,H.mode);return Be.lanes=ie,Be.return=H,Be}}}var Es=Sh(!0),Th=Sh(!1),Ka=te(null),un=null;function ar(e){var t=e.alternate;V(Wt,Wt.current&1),V(Ka,e),un===null&&(t===null||gs.current!==null||t.memoizedState!==null)&&(un=e)}function Ah(e){if(e.tag===22){if(V(Wt,Wt.current),V(Ka,e),un===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(un=e)}}else nr()}function nr(){V(Wt,Wt.current),V(Ka,Ka.current)}function jn(e){U(Ka),un===e&&(un=null),U(Wt)}var Wt=te(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||eu(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ud(e,t,n,i){t=e.memoizedState,n=n(i,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pd={enqueueSetState:function(e,t,n){e=e._reactInternals;var i=$a(),d=Jn(i);d.payload=t,n!=null&&(d.callback=n),t=er(e,d,i),t!==null&&(Ua(t,e,i),co(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var i=$a(),d=Jn(i);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=er(e,d,i),t!==null&&(Ua(t,e,i),co(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$a(),i=Jn(n);i.tag=2,t!=null&&(i.callback=t),t=er(e,i,n),t!==null&&(Ua(t,e,n),co(t,e,n))}};function Dh(e,t,n,i,d,h,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,h,E):t.prototype&&t.prototype.isPureReactComponent?!Js(n,i)||!Js(d,h):!0}function Ch(e,t,n,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,i),t.state!==e&&pd.enqueueReplaceState(t,t.state,null)}function Mr(e,t){var n=t;if("ref"in t){n={};for(var i in t)i!=="ref"&&(n[i]=t[i])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var d in e)n[d]===void 0&&(n[d]=e[d])}return n}var Ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Nh(e){Ji(e)}function Rh(e){console.error(e)}function kh(e){Ji(e)}function el(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function _h(e,t,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function fd(e,t,n){return n=Jn(n),n.tag=3,n.payload={element:null},n.callback=function(){el(e,t)},n}function Lh(e){return e=Jn(e),e.tag=3,e}function Ih(e,t,n,i){var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var h=i.value;e.payload=function(){return d(h)},e.callback=function(){_h(t,n,i)}}var E=n.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){_h(t,n,i),typeof d!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})})}function S0(e,t,n,i,d){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=n.alternate,t!==null&&ro(t,n,d,!0),n=Ka.current,n!==null){switch(n.tag){case 13:return un===null?qd():n.alternate===null&&Ot===0&&(Ot=3),n.flags&=-257,n.flags|=65536,n.lanes=d,i===Bc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([i]):t.add(i),$d(e,i,d)),!1;case 22:return n.flags|=65536,i===Bc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([i]):n.add(i)),$d(e,i,d)),!1}throw Error(o(435,n.tag))}return $d(e,i,d),qd(),!1}if(at)return t=Ka.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,i!==jc&&(e=Error(o(422),{cause:i}),no(Va(e,n)))):(i!==jc&&(t=Error(o(423),{cause:i}),no(Va(t,n))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,i=Va(i,n),d=fd(e.stateNode,i,d),Hc(e,d),Ot!==4&&(Ot=2)),!1;var h=Error(o(520),{cause:i});if(h=Va(h,n),Ao===null?Ao=[h]:Ao.push(h),Ot!==4&&(Ot=2),t===null)return!0;i=Va(i,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=d&-d,n.lanes|=e,e=fd(n.stateNode,i,e),Hc(n,e),!1;case 1:if(t=n.type,h=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(cr===null||!cr.has(h))))return n.flags|=65536,d&=-d,n.lanes|=d,d=Lh(d),Ih(d,e,n,i),Hc(n,d),!1}n=n.return}while(n!==null);return!1}var Ph=Error(o(461)),ea=!1;function sa(e,t,n,i){t.child=e===null?Th(t,null,n,i):Es(t,e.child,n,i)}function jh(e,t,n,i,d){n=n.render;var h=t.ref;if("ref"in i){var E={};for(var T in i)T!=="ref"&&(E[T]=i[T])}else E=i;return jr(t),i=Kc(e,t,n,E,h,d),T=Zc(),e!==null&&!ea?(Qc(e,t,d),On(e,t,d)):(at&&T&&Ic(t),t.flags|=1,sa(e,t,i,d),t.child)}function Oh(e,t,n,i,d){if(e===null){var h=n.type;return typeof h=="function"&&!kc(h)&&h.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=h,qh(e,t,h,i,d)):(e=Ii(n.type,null,i,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!wd(e,d)){var E=h.memoizedProps;if(n=n.compare,n=n!==null?n:Js,n(E,i)&&e.ref===t.ref)return On(e,t,d)}return t.flags|=1,e=Rn(h,i),e.ref=t.ref,e.return=t,t.child=e}function qh(e,t,n,i,d){if(e!==null){var h=e.memoizedProps;if(Js(h,i)&&e.ref===t.ref)if(ea=!1,t.pendingProps=i=h,wd(e,d))(e.flags&131072)!==0&&(ea=!0);else return t.lanes=e.lanes,On(e,t,d)}return hd(e,t,n,i,d)}function Mh(e,t,n){var i=t.pendingProps,d=i.children,h=e!==null?e.memoizedState:null;if(i.mode==="hidden"){if((t.flags&128)!==0){if(i=h!==null?h.baseLanes|n:n,e!==null){for(d=t.child=e.child,h=0;d!==null;)h=h|d.lanes|d.childLanes,d=d.sibling;t.childLanes=h&~i}else t.childLanes=0,t.child=null;return $h(e,t,i,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Mi(t,h!==null?h.cachePool:null),h!==null?qf(t,h):Xc(),Ah(t);else return t.lanes=t.childLanes=536870912,$h(e,t,h!==null?h.baseLanes|n:n,n)}else h!==null?(Mi(t,h.cachePool),qf(t,h),nr(),t.memoizedState=null):(e!==null&&Mi(t,null),Xc(),nr());return sa(e,t,d,n),t.child}function $h(e,t,n,i){var d=Fc();return d=d===null?null:{parent:Gt._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&Mi(t,null),Xc(),Ah(t),e!==null&&ro(e,t,i,!0),null}function tl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function hd(e,t,n,i,d){return jr(t),n=Kc(e,t,n,i,void 0,d),i=Zc(),e!==null&&!ea?(Qc(e,t,d),On(e,t,d)):(at&&i&&Ic(t),t.flags|=1,sa(e,t,n,d),t.child)}function Uh(e,t,n,i,d,h){return jr(t),t.updateQueue=null,n=$f(t,i,n,d),Mf(e),i=Zc(),e!==null&&!ea?(Qc(e,t,h),On(e,t,h)):(at&&i&&Ic(t),t.flags|=1,sa(e,t,n,h),t.child)}function Fh(e,t,n,i,d){if(jr(t),t.stateNode===null){var h=ds,E=n.contextType;typeof E=="object"&&E!==null&&(h=ga(E)),h=new n(i,h),t.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=pd,t.stateNode=h,h._reactInternals=t,h=t.stateNode,h.props=i,h.state=t.memoizedState,h.refs={},zc(t),E=n.contextType,h.context=typeof E=="object"&&E!==null?ga(E):ds,h.state=t.memoizedState,E=n.getDerivedStateFromProps,typeof E=="function"&&(ud(t,n,E,i),h.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(E=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),E!==h.state&&pd.enqueueReplaceState(h,h.state,null),po(t,i,h,d),uo(),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){h=t.stateNode;var T=t.memoizedProps,O=Mr(n,T);h.props=O;var W=h.context,se=n.contextType;E=ds,typeof se=="object"&&se!==null&&(E=ga(se));var le=n.getDerivedStateFromProps;se=typeof le=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=t.pendingProps!==T,se||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||W!==E)&&Ch(t,h,i,E),Qn=!1;var K=t.memoizedState;h.state=K,po(t,i,h,d),uo(),W=t.memoizedState,T||K!==W||Qn?(typeof le=="function"&&(ud(t,n,le,i),W=t.memoizedState),(O=Qn||Dh(t,n,O,i,K,W,E))?(se||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=W),h.props=i,h.state=W,h.context=E,i=O):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{h=t.stateNode,Yc(e,t),E=t.memoizedProps,se=Mr(n,E),h.props=se,le=t.pendingProps,K=h.context,W=n.contextType,O=ds,typeof W=="object"&&W!==null&&(O=ga(W)),T=n.getDerivedStateFromProps,(W=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(E!==le||K!==O)&&Ch(t,h,i,O),Qn=!1,K=t.memoizedState,h.state=K,po(t,i,h,d),uo();var Z=t.memoizedState;E!==le||K!==Z||Qn||e!==null&&e.dependencies!==null&&Oi(e.dependencies)?(typeof T=="function"&&(ud(t,n,T,i),Z=t.memoizedState),(se=Qn||Dh(t,n,se,i,K,Z,O)||e!==null&&e.dependencies!==null&&Oi(e.dependencies))?(W||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(i,Z,O),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(i,Z,O)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=Z),h.props=i,h.state=Z,h.context=O,i=se):(typeof h.componentDidUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),i=!1)}return h=i,tl(e,t),i=(t.flags&128)!==0,h||i?(h=t.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:h.render(),t.flags|=1,e!==null&&i?(t.child=Es(t,e.child,null,d),t.child=Es(t,null,n,d)):sa(e,t,n,d),t.memoizedState=h.state,e=t.child):e=On(e,t,d),e}function Bh(e,t,n,i){return ao(),t.flags|=256,sa(e,t,n,i),t.child}var gd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function md(e){return{baseLanes:e,cachePool:Rf()}}function yd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Za),e}function zh(e,t,n){var i=t.pendingProps,d=!1,h=(t.flags&128)!==0,E;if((E=h)||(E=e!==null&&e.memoizedState===null?!1:(Wt.current&2)!==0),E&&(d=!0,t.flags&=-129),E=(t.flags&32)!==0,t.flags&=-33,e===null){if(at){if(d?ar(t):nr(),at){var T=jt,O;if(O=T){e:{for(O=T,T=dn;O.nodeType!==8;){if(!T){T=null;break e}if(O=nn(O.nextSibling),O===null){T=null;break e}}T=O}T!==null?(t.memoizedState={dehydrated:T,treeContext:kr!==null?{id:kn,overflow:_n}:null,retryLane:536870912,hydrationErrors:null},O=ja(18,null,null,0),O.stateNode=T,O.return=t,t.child=O,va=t,jt=null,O=!0):O=!1}O||Ir(t)}if(T=t.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return eu(T)?t.lanes=32:t.lanes=536870912,null;jn(t)}return T=i.children,i=i.fallback,d?(nr(),d=t.mode,T=al({mode:"hidden",children:T},d),i=Rr(i,d,n,null),T.return=t,i.return=t,T.sibling=i,t.child=T,d=t.child,d.memoizedState=md(n),d.childLanes=yd(e,E,n),t.memoizedState=gd,i):(ar(t),bd(t,T))}if(O=e.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(h)t.flags&256?(ar(t),t.flags&=-257,t=vd(e,t,n)):t.memoizedState!==null?(nr(),t.child=e.child,t.flags|=128,t=null):(nr(),d=i.fallback,T=t.mode,i=al({mode:"visible",children:i.children},T),d=Rr(d,T,n,null),d.flags|=2,i.return=t,d.return=t,i.sibling=d,t.child=i,Es(t,e.child,null,n),i=t.child,i.memoizedState=md(n),i.childLanes=yd(e,E,n),t.memoizedState=gd,t=d);else if(ar(t),eu(T)){if(E=T.nextSibling&&T.nextSibling.dataset,E)var W=E.dgst;E=W,i=Error(o(419)),i.stack="",i.digest=E,no({value:i,source:null,stack:null}),t=vd(e,t,n)}else if(ea||ro(e,t,n,!1),E=(n&e.childLanes)!==0,ea||E){if(E=St,E!==null&&(i=n&-n,i=(i&42)!==0?1:Gn(i),i=(i&(E.suspendedLanes|n))!==0?0:i,i!==0&&i!==O.retryLane))throw O.retryLane=i,cs(e,i),Ua(E,e,i),Ph;T.data==="$?"||qd(),t=vd(e,t,n)}else T.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=O.treeContext,jt=nn(T.nextSibling),va=t,at=!0,Lr=null,dn=!1,e!==null&&(Ga[Wa++]=kn,Ga[Wa++]=_n,Ga[Wa++]=kr,kn=e.id,_n=e.overflow,kr=t),t=bd(t,i.children),t.flags|=4096);return t}return d?(nr(),d=i.fallback,T=t.mode,O=e.child,W=O.sibling,i=Rn(O,{mode:"hidden",children:i.children}),i.subtreeFlags=O.subtreeFlags&65011712,W!==null?d=Rn(W,d):(d=Rr(d,T,n,null),d.flags|=2),d.return=t,i.return=t,i.sibling=d,t.child=i,i=d,d=t.child,T=e.child.memoizedState,T===null?T=md(n):(O=T.cachePool,O!==null?(W=Gt._currentValue,O=O.parent!==W?{parent:W,pool:W}:O):O=Rf(),T={baseLanes:T.baseLanes|n,cachePool:O}),d.memoizedState=T,d.childLanes=yd(e,E,n),t.memoizedState=gd,i):(ar(t),n=e.child,e=n.sibling,n=Rn(n,{mode:"visible",children:i.children}),n.return=t,n.sibling=null,e!==null&&(E=t.deletions,E===null?(t.deletions=[e],t.flags|=16):E.push(e)),t.child=n,t.memoizedState=null,n)}function bd(e,t){return t=al({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function al(e,t){return e=ja(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function vd(e,t,n){return Es(t,e.child,null,n),e=bd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Yh(e,t,n){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),qc(e.return,t,n)}function Ed(e,t,n,i,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:d}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=i,h.tail=n,h.tailMode=d)}function Hh(e,t,n){var i=t.pendingProps,d=i.revealOrder,h=i.tail;if(sa(e,t,i.children,n),i=Wt.current,(i&2)!==0)i=i&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Yh(e,n,t);else if(e.tag===19)Yh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}switch(V(Wt,i),d){case"forwards":for(n=t.child,d=null;n!==null;)e=n.alternate,e!==null&&Qi(e)===null&&(d=n),n=n.sibling;n=d,n===null?(d=t.child,t.child=null):(d=n.sibling,n.sibling=null),Ed(t,!1,d,n,h);break;case"backwards":for(n=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Qi(e)===null){t.child=d;break}e=d.sibling,d.sibling=n,n=d,d=e}Ed(t,!0,n,null,h);break;case"together":Ed(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function On(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ro(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function wd(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Oi(e)))}function T0(e,t,n){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),Zn(t,Gt,e.memoizedState.cache),ao();break;case 27:case 5:nt(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:Zn(t,t.type,t.memoizedProps.value);break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(ar(t),t.flags|=128,null):(n&t.child.childLanes)!==0?zh(e,t,n):(ar(t),e=On(e,t,n),e!==null?e.sibling:null);ar(t);break;case 19:var d=(e.flags&128)!==0;if(i=(n&t.childLanes)!==0,i||(ro(e,t,n,!1),i=(n&t.childLanes)!==0),d){if(i)return Hh(e,t,n);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),V(Wt,Wt.current),i)break;return null;case 22:case 23:return t.lanes=0,Mh(e,t,n);case 24:Zn(t,Gt,e.memoizedState.cache)}return On(e,t,n)}function Vh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ea=!0;else{if(!wd(e,n)&&(t.flags&128)===0)return ea=!1,T0(e,t,n);ea=(e.flags&131072)!==0}else ea=!1,at&&(t.flags&1048576)!==0&&xf(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var i=t.elementType,d=i._init;if(i=d(i._payload),t.type=i,typeof i=="function")kc(i)?(e=Mr(i,e),t.tag=1,t=Fh(null,t,i,e,n)):(t.tag=0,t=hd(null,t,i,e,n));else{if(i!=null){if(d=i.$$typeof,d===N){t.tag=11,t=jh(null,t,i,e,n);break e}else if(d===C){t.tag=14,t=Oh(null,t,i,e,n);break e}}throw t=ue(i)||i,Error(o(306,t,""))}}return t;case 0:return hd(e,t,t.type,t.pendingProps,n);case 1:return i=t.type,d=Mr(i,t.pendingProps),Fh(e,t,i,d,n);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(o(387));i=t.pendingProps;var h=t.memoizedState;d=h.element,Yc(e,t),po(t,i,null,n);var E=t.memoizedState;if(i=E.cache,Zn(t,Gt,i),i!==h.cache&&Mc(t,[Gt],n,!0),uo(),i=E.element,h.isDehydrated)if(h={element:i,isDehydrated:!1,cache:E.cache},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){t=Bh(e,t,i,n);break e}else if(i!==d){d=Va(Error(o(424)),t),no(d),t=Bh(e,t,i,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,jt=nn(e.firstChild),va=t,at=!0,Lr=null,dn=!0,n=Th(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ao(),i===d){t=On(e,t,n);break e}sa(e,t,i,n)}t=t.child}return t;case 26:return tl(e,t),e===null?(n=Kg(t.type,null,t.pendingProps,null))?t.memoizedState=n:at||(n=t.type,e=t.pendingProps,i=ml(ve.current).createElement(n),i[Dt]=t,i[Ke]=e,ia(i,n,e),Xe(i),t.stateNode=i):t.memoizedState=Kg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nt(t),e===null&&at&&(i=t.stateNode=Xg(t.type,t.pendingProps,ve.current),va=t,dn=!0,d=jt,pr(t.type)?(tu=d,jt=nn(i.firstChild)):jt=d),sa(e,t,t.pendingProps.children,n),tl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&at&&((d=i=jt)&&(i=Q0(i,t.type,t.pendingProps,dn),i!==null?(t.stateNode=i,va=t,jt=nn(i.firstChild),dn=!1,d=!0):d=!1),d||Ir(t)),nt(t),d=t.type,h=t.pendingProps,E=e!==null?e.memoizedProps:null,i=h.children,Zd(d,h)?i=null:E!==null&&Zd(d,E)&&(t.flags|=32),t.memoizedState!==null&&(d=Kc(e,t,m0,null,null,n),Po._currentValue=d),tl(e,t),sa(e,t,i,n),t.child;case 6:return e===null&&at&&((e=n=jt)&&(n=J0(n,t.pendingProps,dn),n!==null?(t.stateNode=n,va=t,jt=null,e=!0):e=!1),e||Ir(t)),null;case 13:return zh(e,t,n);case 4:return Le(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Es(t,null,i,n):sa(e,t,i,n),t.child;case 11:return jh(e,t,t.type,t.pendingProps,n);case 7:return sa(e,t,t.pendingProps,n),t.child;case 8:return sa(e,t,t.pendingProps.children,n),t.child;case 12:return sa(e,t,t.pendingProps.children,n),t.child;case 10:return i=t.pendingProps,Zn(t,t.type,i.value),sa(e,t,i.children,n),t.child;case 9:return d=t.type._context,i=t.pendingProps.children,jr(t),d=ga(d),i=i(d),t.flags|=1,sa(e,t,i,n),t.child;case 14:return Oh(e,t,t.type,t.pendingProps,n);case 15:return qh(e,t,t.type,t.pendingProps,n);case 19:return Hh(e,t,n);case 31:return i=t.pendingProps,n=t.mode,i={mode:i.mode,children:i.children},e===null?(n=al(i,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Rn(e.child,i),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Mh(e,t,n);case 24:return jr(t),i=ga(Gt),e===null?(d=Fc(),d===null&&(d=St,h=$c(),d.pooledCache=h,h.refCount++,h!==null&&(d.pooledCacheLanes|=n),d=h),t.memoizedState={parent:i,cache:d},zc(t),Zn(t,Gt,d)):((e.lanes&n)!==0&&(Yc(e,t),po(t,null,null,n),uo()),d=e.memoizedState,h=t.memoizedState,d.parent!==i?(d={parent:i,cache:i},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),Zn(t,Gt,i)):(i=h.cache,Zn(t,Gt,i),i!==d.cache&&Mc(t,[Gt],n,!0))),sa(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function qn(e){e.flags|=4}function Xh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tm(t)){if(t=Ka.current,t!==null&&((Ze&4194048)===Ze?un!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||t!==un))throw lo=Bc,kf;e.flags|=8192}}function nl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ut():536870912,e.lanes|=t,Ts|=t)}function vo(e,t){if(!at)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function Lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(t)for(var d=e.child;d!==null;)n|=d.lanes|d.childLanes,i|=d.subtreeFlags&65011712,i|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)n|=d.lanes|d.childLanes,i|=d.subtreeFlags,i|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=i,e.childLanes=n,t}function A0(e,t,n){var i=t.pendingProps;switch(Pc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(t),null;case 1:return Lt(t),null;case 3:return n=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),In(Gt),mt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(to(t)?qn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Af())),Lt(t),null;case 26:return n=t.memoizedState,e===null?(qn(t),n!==null?(Lt(t),Xh(t,n)):(Lt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(qn(t),Lt(t),Xh(t,n)):(Lt(t),t.flags&=-16777217):(e.memoizedProps!==i&&qn(t),Lt(t),t.flags&=-16777217),null;case 27:ot(t),n=ve.current;var d=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==i&&qn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Lt(t),null}e=oe.current,to(t)?Sf(t):(e=Xg(d,i,n),t.stateNode=e,qn(t))}return Lt(t),null;case 5:if(ot(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&qn(t);else{if(!i){if(t.stateNode===null)throw Error(o(166));return Lt(t),null}if(e=oe.current,to(t))Sf(t);else{switch(d=ml(ve.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof i.is=="string"?d.createElement("select",{is:i.is}):d.createElement("select"),i.multiple?e.multiple=!0:i.size&&(e.size=i.size);break;default:e=typeof i.is=="string"?d.createElement(n,{is:i.is}):d.createElement(n)}}e[Dt]=t,e[Ke]=i;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=e;e:switch(ia(e,n,i),n){case"button":case"input":case"select":case"textarea":e=!!i.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&qn(t)}}return Lt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&qn(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(o(166));if(e=ve.current,to(t)){if(e=t.stateNode,n=t.memoizedProps,i=null,d=va,d!==null)switch(d.tag){case 27:case 5:i=d.memoizedProps}e[Dt]=t,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Ug(e.nodeValue,n)),e||Ir(t)}else e=ml(e).createTextNode(i),e[Dt]=t,t.stateNode=e}return Lt(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=to(t),i!==null&&i.dehydrated!==null){if(e===null){if(!d)throw Error(o(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(o(317));d[Dt]=t}else ao(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Lt(t),d=!1}else d=Af(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(jn(t),t):(jn(t),null)}if(jn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=i!==null,e=e!==null&&e.memoizedState!==null,n){i=t.child,d=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(d=i.alternate.memoizedState.cachePool.pool);var h=null;i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(h=i.memoizedState.cachePool.pool),h!==d&&(i.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),nl(t,t.updateQueue),Lt(t),null;case 4:return mt(),e===null&&Vd(t.stateNode.containerInfo),Lt(t),null;case 10:return In(t.type),Lt(t),null;case 19:if(U(Wt),d=t.memoizedState,d===null)return Lt(t),null;if(i=(t.flags&128)!==0,h=d.rendering,h===null)if(i)vo(d,!1);else{if(Ot!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=Qi(e),h!==null){for(t.flags|=128,vo(d,!1),e=h.updateQueue,t.updateQueue=e,nl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)wf(n,e),n=n.sibling;return V(Wt,Wt.current&1|2),t.child}e=e.sibling}d.tail!==null&&ge()>ol&&(t.flags|=128,i=!0,vo(d,!1),t.lanes=4194304)}else{if(!i)if(e=Qi(h),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,nl(t,e),vo(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!at)return Lt(t),null}else 2*ge()-d.renderingStartTime>ol&&n!==536870912&&(t.flags|=128,i=!0,vo(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(e=d.last,e!==null?e.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=ge(),t.sibling=null,e=Wt.current,V(Wt,i?e&1|2:e&1),t):(Lt(t),null);case 22:case 23:return jn(t),Gc(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(n&536870912)!==0&&(t.flags&128)===0&&(Lt(t),t.subtreeFlags&6&&(t.flags|=8192)):Lt(t),n=t.updateQueue,n!==null&&nl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==n&&(t.flags|=2048),e!==null&&U(Or),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),In(Gt),Lt(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function D0(e,t){switch(Pc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return In(Gt),mt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ot(t),null;case 13:if(jn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ao()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Wt),null;case 4:return mt(),null;case 10:return In(t.type),null;case 22:case 23:return jn(t),Gc(),e!==null&&U(Or),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return In(Gt),null;case 25:return null;default:return null}}function Gh(e,t){switch(Pc(t),t.tag){case 3:In(Gt),mt();break;case 26:case 27:case 5:ot(t);break;case 4:mt();break;case 13:jn(t);break;case 19:U(Wt);break;case 10:In(t.type);break;case 22:case 23:jn(t),Gc(),e!==null&&U(Or);break;case 24:In(Gt)}}function Eo(e,t){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var d=i.next;n=d;do{if((n.tag&e)===e){i=void 0;var h=n.create,E=n.inst;i=h(),E.destroy=i}n=n.next}while(n!==d)}}catch(T){vt(t,t.return,T)}}function rr(e,t,n){try{var i=t.updateQueue,d=i!==null?i.lastEffect:null;if(d!==null){var h=d.next;i=h;do{if((i.tag&e)===e){var E=i.inst,T=E.destroy;if(T!==void 0){E.destroy=void 0,d=t;var O=n,W=T;try{W()}catch(se){vt(d,O,se)}}}i=i.next}while(i!==h)}}catch(se){vt(t,t.return,se)}}function Wh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Of(t,n)}catch(i){vt(e,e.return,i)}}}function Kh(e,t,n){n.props=Mr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){vt(e,t,i)}}function wo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(d){vt(e,t,d)}}function pn(e,t){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(d){vt(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(d){vt(e,t,d)}else n.current=null}function Zh(e){var t=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(d){vt(e,e.return,d)}}function xd(e,t,n){try{var i=e.stateNode;X0(i,e.type,n,t),i[Ke]=t}catch(d){vt(e,e.return,d)}}function Qh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pr(e.type)||e.tag===4}function Sd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Td(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=gl));else if(i!==4&&(i===27&&pr(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Td(e,t,n),e=e.sibling;e!==null;)Td(e,t,n),e=e.sibling}function rl(e,t,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(i!==4&&(i===27&&pr(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(rl(e,t,n),e=e.sibling;e!==null;)rl(e,t,n),e=e.sibling}function Jh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);ia(t,i,n),t[Dt]=e,t[Ke]=n}catch(h){vt(e,e.return,h)}}var Mn=!1,zt=!1,Ad=!1,eg=typeof WeakSet=="function"?WeakSet:Set,ta=null;function C0(e,t){if(e=e.containerInfo,Wd=xl,e=uf(e),Sc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var d=i.anchorOffset,h=i.focusNode;i=i.focusOffset;try{n.nodeType,h.nodeType}catch{n=null;break e}var E=0,T=-1,O=-1,W=0,se=0,le=e,K=null;t:for(;;){for(var Z;le!==n||d!==0&&le.nodeType!==3||(T=E+d),le!==h||i!==0&&le.nodeType!==3||(O=E+i),le.nodeType===3&&(E+=le.nodeValue.length),(Z=le.firstChild)!==null;)K=le,le=Z;for(;;){if(le===e)break t;if(K===n&&++W===d&&(T=E),K===h&&++se===i&&(O=E),(Z=le.nextSibling)!==null)break;le=K,K=le.parentNode}le=Z}n=T===-1||O===-1?null:{start:T,end:O}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kd={focusedElem:e,selectionRange:n},xl=!1,ta=t;ta!==null;)if(t=ta,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ta=e;else for(;ta!==null;){switch(t=ta,h=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,n=t,d=h.memoizedProps,h=h.memoizedState,i=n.stateNode;try{var je=Mr(n.type,d,n.elementType===n.type);e=i.getSnapshotBeforeUpdate(je,h),i.__reactInternalSnapshotBeforeUpdate=e}catch(Re){vt(n,n.return,Re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Jd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Jd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,ta=e;break}ta=t.return}}function tg(e,t,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:sr(e,n),i&4&&Eo(5,n);break;case 1:if(sr(e,n),i&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(E){vt(n,n.return,E)}else{var d=Mr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(E){vt(n,n.return,E)}}i&64&&Wh(n),i&512&&wo(n,n.return);break;case 3:if(sr(e,n),i&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Of(e,t)}catch(E){vt(n,n.return,E)}}break;case 27:t===null&&i&4&&Jh(n);case 26:case 5:sr(e,n),t===null&&i&4&&Zh(n),i&512&&wo(n,n.return);break;case 12:sr(e,n);break;case 13:sr(e,n),i&4&&rg(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=O0.bind(null,n),eE(e,n))));break;case 22:if(i=n.memoizedState!==null||Mn,!i){t=t!==null&&t.memoizedState!==null||zt,d=Mn;var h=zt;Mn=i,(zt=t)&&!h?or(e,n,(n.subtreeFlags&8772)!==0):sr(e,n),Mn=d,zt=h}break;case 30:break;default:sr(e,n)}}function ag(e){var t=e.alternate;t!==null&&(e.alternate=null,ag(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ee(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Rt=null,Ca=!1;function $n(e,t,n){for(n=n.child;n!==null;)ng(e,t,n),n=n.sibling}function ng(e,t,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(_t,n)}catch{}switch(n.tag){case 26:zt||pn(n,t),$n(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:zt||pn(n,t);var i=Rt,d=Ca;pr(n.type)&&(Rt=n.stateNode,Ca=!1),$n(e,t,n),ko(n.stateNode),Rt=i,Ca=d;break;case 5:zt||pn(n,t);case 6:if(i=Rt,d=Ca,Rt=null,$n(e,t,n),Rt=i,Ca=d,Rt!==null)if(Ca)try{(Rt.nodeType===9?Rt.body:Rt.nodeName==="HTML"?Rt.ownerDocument.body:Rt).removeChild(n.stateNode)}catch(h){vt(n,t,h)}else try{Rt.removeChild(n.stateNode)}catch(h){vt(n,t,h)}break;case 18:Rt!==null&&(Ca?(e=Rt,Hg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Mo(e)):Hg(Rt,n.stateNode));break;case 4:i=Rt,d=Ca,Rt=n.stateNode.containerInfo,Ca=!0,$n(e,t,n),Rt=i,Ca=d;break;case 0:case 11:case 14:case 15:zt||rr(2,n,t),zt||rr(4,n,t),$n(e,t,n);break;case 1:zt||(pn(n,t),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Kh(n,t,i)),$n(e,t,n);break;case 21:$n(e,t,n);break;case 22:zt=(i=zt)||n.memoizedState!==null,$n(e,t,n),zt=i;break;default:$n(e,t,n)}}function rg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Mo(e)}catch(n){vt(t,t.return,n)}}function N0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new eg),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new eg),t;default:throw Error(o(435,e.tag))}}function Dd(e,t){var n=N0(e);t.forEach(function(i){var d=q0.bind(null,e,i);n.has(i)||(n.add(i),i.then(d,d))})}function Oa(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var d=n[i],h=e,E=t,T=E;e:for(;T!==null;){switch(T.tag){case 27:if(pr(T.type)){Rt=T.stateNode,Ca=!1;break e}break;case 5:Rt=T.stateNode,Ca=!1;break e;case 3:case 4:Rt=T.stateNode.containerInfo,Ca=!0;break e}T=T.return}if(Rt===null)throw Error(o(160));ng(h,E,d),Rt=null,Ca=!1,h=d.alternate,h!==null&&(h.return=null),d.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)sg(t,e),t=t.sibling}var an=null;function sg(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Oa(t,e),qa(e),i&4&&(rr(3,e,e.return),Eo(3,e),rr(5,e,e.return));break;case 1:Oa(t,e),qa(e),i&512&&(zt||n===null||pn(n,n.return)),i&64&&Mn&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var d=an;if(Oa(t,e),qa(e),i&512&&(zt||n===null||pn(n,n.return)),i&4){var h=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,d=d.ownerDocument||d;t:switch(i){case"title":h=d.getElementsByTagName("title")[0],(!h||h[re]||h[Dt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=d.createElement(i),d.head.insertBefore(h,d.querySelector("head > title"))),ia(h,i,n),h[Dt]=e,Xe(h),i=h;break e;case"link":var E=Jg("link","href",d).get(i+(n.href||""));if(E){for(var T=0;T<E.length;T++)if(h=E[T],h.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&h.getAttribute("rel")===(n.rel==null?null:n.rel)&&h.getAttribute("title")===(n.title==null?null:n.title)&&h.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){E.splice(T,1);break t}}h=d.createElement(i),ia(h,i,n),d.head.appendChild(h);break;case"meta":if(E=Jg("meta","content",d).get(i+(n.content||""))){for(T=0;T<E.length;T++)if(h=E[T],h.getAttribute("content")===(n.content==null?null:""+n.content)&&h.getAttribute("name")===(n.name==null?null:n.name)&&h.getAttribute("property")===(n.property==null?null:n.property)&&h.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&h.getAttribute("charset")===(n.charSet==null?null:n.charSet)){E.splice(T,1);break t}}h=d.createElement(i),ia(h,i,n),d.head.appendChild(h);break;default:throw Error(o(468,i))}h[Dt]=e,Xe(h),i=h}e.stateNode=i}else em(d,e.type,e.stateNode);else e.stateNode=Qg(d,i,e.memoizedProps);else h!==i?(h===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):h.count--,i===null?em(d,e.type,e.stateNode):Qg(d,i,e.memoizedProps)):i===null&&e.stateNode!==null&&xd(e,e.memoizedProps,n.memoizedProps)}break;case 27:Oa(t,e),qa(e),i&512&&(zt||n===null||pn(n,n.return)),n!==null&&i&4&&xd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Oa(t,e),qa(e),i&512&&(zt||n===null||pn(n,n.return)),e.flags&32){d=e.stateNode;try{as(d,"")}catch(Z){vt(e,e.return,Z)}}i&4&&e.stateNode!=null&&(d=e.memoizedProps,xd(e,d,n!==null?n.memoizedProps:d)),i&1024&&(Ad=!0);break;case 6:if(Oa(t,e),qa(e),i&4){if(e.stateNode===null)throw Error(o(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(Z){vt(e,e.return,Z)}}break;case 3:if(vl=null,d=an,an=yl(t.containerInfo),Oa(t,e),an=d,qa(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(t.containerInfo)}catch(Z){vt(e,e.return,Z)}Ad&&(Ad=!1,og(e));break;case 4:i=an,an=yl(e.stateNode.containerInfo),Oa(t,e),qa(e),an=i;break;case 12:Oa(t,e),qa(e);break;case 13:Oa(t,e),qa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ld=ge()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Dd(e,i)));break;case 22:d=e.memoizedState!==null;var O=n!==null&&n.memoizedState!==null,W=Mn,se=zt;if(Mn=W||d,zt=se||O,Oa(t,e),zt=se,Mn=W,qa(e),i&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(n===null||O||Mn||zt||$r(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){O=n=t;try{if(h=O.stateNode,d)E=h.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{T=O.stateNode;var le=O.memoizedProps.style,K=le!=null&&le.hasOwnProperty("display")?le.display:null;T.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(Z){vt(O,O.return,Z)}}}else if(t.tag===6){if(n===null){O=t;try{O.stateNode.nodeValue=d?"":O.memoizedProps}catch(Z){vt(O,O.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Dd(e,n))));break;case 19:Oa(t,e),qa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Dd(e,i)));break;case 30:break;case 21:break;default:Oa(t,e),qa(e)}}function qa(e){var t=e.flags;if(t&2){try{for(var n,i=e.return;i!==null;){if(Qh(i)){n=i;break}i=i.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var d=n.stateNode,h=Sd(e);rl(e,h,d);break;case 5:var E=n.stateNode;n.flags&32&&(as(E,""),n.flags&=-33);var T=Sd(e);rl(e,T,E);break;case 3:case 4:var O=n.stateNode.containerInfo,W=Sd(e);Td(e,W,O);break;default:throw Error(o(161))}}catch(se){vt(e,e.return,se)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function og(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;og(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function sr(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)tg(e,t.alternate,t),t=t.sibling}function $r(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:rr(4,t,t.return),$r(t);break;case 1:pn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Kh(t,t.return,n),$r(t);break;case 27:ko(t.stateNode);case 26:case 5:pn(t,t.return),$r(t);break;case 22:t.memoizedState===null&&$r(t);break;case 30:$r(t);break;default:$r(t)}e=e.sibling}}function or(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,d=e,h=t,E=h.flags;switch(h.tag){case 0:case 11:case 15:or(d,h,n),Eo(4,h);break;case 1:if(or(d,h,n),i=h,d=i.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(W){vt(i,i.return,W)}if(i=h,d=i.updateQueue,d!==null){var T=i.stateNode;try{var O=d.shared.hiddenCallbacks;if(O!==null)for(d.shared.hiddenCallbacks=null,d=0;d<O.length;d++)jf(O[d],T)}catch(W){vt(i,i.return,W)}}n&&E&64&&Wh(h),wo(h,h.return);break;case 27:Jh(h);case 26:case 5:or(d,h,n),n&&i===null&&E&4&&Zh(h),wo(h,h.return);break;case 12:or(d,h,n);break;case 13:or(d,h,n),n&&E&4&&rg(d,h);break;case 22:h.memoizedState===null&&or(d,h,n),wo(h,h.return);break;case 30:break;default:or(d,h,n)}t=t.sibling}}function Cd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&so(n))}function Nd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&so(e))}function fn(e,t,n,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ig(e,t,n,i),t=t.sibling}function ig(e,t,n,i){var d=t.flags;switch(t.tag){case 0:case 11:case 15:fn(e,t,n,i),d&2048&&Eo(9,t);break;case 1:fn(e,t,n,i);break;case 3:fn(e,t,n,i),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&so(e)));break;case 12:if(d&2048){fn(e,t,n,i),e=t.stateNode;try{var h=t.memoizedProps,E=h.id,T=h.onPostCommit;typeof T=="function"&&T(E,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){vt(t,t.return,O)}}else fn(e,t,n,i);break;case 13:fn(e,t,n,i);break;case 23:break;case 22:h=t.stateNode,E=t.alternate,t.memoizedState!==null?h._visibility&2?fn(e,t,n,i):xo(e,t):h._visibility&2?fn(e,t,n,i):(h._visibility|=2,ws(e,t,n,i,(t.subtreeFlags&10256)!==0)),d&2048&&Cd(E,t);break;case 24:fn(e,t,n,i),d&2048&&Nd(t.alternate,t);break;default:fn(e,t,n,i)}}function ws(e,t,n,i,d){for(d=d&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var h=e,E=t,T=n,O=i,W=E.flags;switch(E.tag){case 0:case 11:case 15:ws(h,E,T,O,d),Eo(8,E);break;case 23:break;case 22:var se=E.stateNode;E.memoizedState!==null?se._visibility&2?ws(h,E,T,O,d):xo(h,E):(se._visibility|=2,ws(h,E,T,O,d)),d&&W&2048&&Cd(E.alternate,E);break;case 24:ws(h,E,T,O,d),d&&W&2048&&Nd(E.alternate,E);break;default:ws(h,E,T,O,d)}t=t.sibling}}function xo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,i=t,d=i.flags;switch(i.tag){case 22:xo(n,i),d&2048&&Cd(i.alternate,i);break;case 24:xo(n,i),d&2048&&Nd(i.alternate,i);break;default:xo(n,i)}t=t.sibling}}var So=8192;function xs(e){if(e.subtreeFlags&So)for(e=e.child;e!==null;)lg(e),e=e.sibling}function lg(e){switch(e.tag){case 26:xs(e),e.flags&So&&e.memoizedState!==null&&fE(an,e.memoizedState,e.memoizedProps);break;case 5:xs(e);break;case 3:case 4:var t=an;an=yl(e.stateNode.containerInfo),xs(e),an=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=So,So=16777216,xs(e),So=t):xs(e));break;default:xs(e)}}function cg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function To(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ta=i,ug(i,e)}cg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dg(e),e=e.sibling}function dg(e){switch(e.tag){case 0:case 11:case 15:To(e),e.flags&2048&&rr(9,e,e.return);break;case 3:To(e);break;case 12:To(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,sl(e)):To(e);break;default:To(e)}}function sl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];ta=i,ug(i,e)}cg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:rr(8,t,t.return),sl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,sl(t));break;default:sl(t)}e=e.sibling}}function ug(e,t){for(;ta!==null;){var n=ta;switch(n.tag){case 0:case 11:case 15:rr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:so(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ta=i;else e:for(n=e;ta!==null;){i=ta;var d=i.sibling,h=i.return;if(ag(i),i===n){ta=null;break e}if(d!==null){d.return=h,ta=d;break e}ta=h}}}var R0={getCacheForType:function(e){var t=ga(Gt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},k0=typeof WeakMap=="function"?WeakMap:Map,it=0,St=null,Ye=null,Ze=0,lt=0,Ma=null,ir=!1,Ss=!1,Rd=!1,Un=0,Ot=0,lr=0,Ur=0,kd=0,Za=0,Ts=0,Ao=null,Na=null,_d=!1,Ld=0,ol=1/0,il=null,cr=null,oa=0,dr=null,As=null,Ds=0,Id=0,Pd=null,pg=null,Do=0,jd=null;function $a(){if((it&2)!==0&&Ze!==0)return Ze&-Ze;if(Y.T!==null){var e=fs;return e!==0?e:Bd()}return Tn()}function fg(){Za===0&&(Za=(Ze&536870912)===0||at?It():536870912);var e=Ka.current;return e!==null&&(e.flags|=32),Za}function Ua(e,t,n){(e===St&&(lt===2||lt===9)||e.cancelPendingCommit!==null)&&(Cs(e,0),ur(e,Ze,Za,!1)),La(e,n),((it&2)===0||e!==St)&&(e===St&&((it&2)===0&&(Ur|=n),Ot===4&&ur(e,Ze,Za,!1)),hn(e))}function hg(e,t,n){if((it&6)!==0)throw Error(o(327));var i=!n&&(t&124)===0&&(t&e.expiredLanes)===0||_a(e,t),d=i?I0(e,t):Md(e,t,!0),h=i;do{if(d===0){Ss&&!i&&ur(e,t,0,!1);break}else{if(n=e.current.alternate,h&&!_0(n)){d=Md(e,t,!1),h=!1;continue}if(d===2){if(h=t,e.errorRecoveryDisabledLanes&h)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){t=E;e:{var T=e;d=Ao;var O=T.current.memoizedState.isDehydrated;if(O&&(Cs(T,E).flags|=256),E=Md(T,E,!1),E!==2){if(Rd&&!O){T.errorRecoveryDisabledLanes|=h,Ur|=h,d=4;break e}h=Na,Na=d,h!==null&&(Na===null?Na=h:Na.push.apply(Na,h))}d=E}if(h=!1,d!==2)continue}}if(d===1){Cs(e,0),ur(e,t,0,!0);break}e:{switch(i=e,h=d,h){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ur(i,t,Za,!ir);break e;case 2:Na=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(d=Ld+300-ge(),10<d)){if(ur(i,t,Za,!ir),$t(i,0,!0)!==0)break e;i.timeoutHandle=zg(gg.bind(null,i,n,Na,il,_d,t,Za,Ur,Ts,ir,h,2,-0,0),d);break e}gg(i,n,Na,il,_d,t,Za,Ur,Ts,ir,h,0,-0,0)}}break}while(!0);hn(e)}function gg(e,t,n,i,d,h,E,T,O,W,se,le,K,Z){if(e.timeoutHandle=-1,le=t.subtreeFlags,(le&8192||(le&16785408)===16785408)&&(Io={stylesheets:null,count:0,unsuspend:pE},lg(t),le=hE(),le!==null)){e.cancelPendingCommit=le(xg.bind(null,e,t,h,n,i,d,E,T,O,se,1,K,Z)),ur(e,h,E,!W);return}xg(e,t,h,n,i,d,E,T,O)}function _0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var d=n[i],h=d.getSnapshot;d=d.value;try{if(!Pa(h(),d))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ur(e,t,n,i){t&=~kd,t&=~Ur,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var d=t;0<d;){var h=31-rt(d),E=1<<h;i[h]=-1,d&=~E}n!==0&&cn(e,n,t)}function ll(){return(it&6)===0?(Co(0),!1):!0}function Od(){if(Ye!==null){if(lt===0)var e=Ye.return;else e=Ye,Ln=Pr=null,Jc(e),vs=null,yo=0,e=Ye;for(;e!==null;)Gh(e.alternate,e),e=e.return;Ye=null}}function Cs(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,W0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Od(),St=e,Ye=n=Rn(e.current,null),Ze=t,lt=0,Ma=null,ir=!1,Ss=_a(e,t),Rd=!1,Ts=Za=kd=Ur=lr=Ot=0,Na=Ao=null,_d=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var d=31-rt(i),h=1<<d;t|=e[d],i&=~h}return Un=t,ki(),n}function mg(e,t){Fe=null,Y.H=Wi,t===io||t===$i?(t=If(),lt=3):t===kf?(t=If(),lt=4):lt=t===Ph?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ma=t,Ye===null&&(Ot=1,el(e,Va(t,e.current)))}function yg(){var e=Y.H;return Y.H=Wi,e===null?Wi:e}function bg(){var e=Y.A;return Y.A=R0,e}function qd(){Ot=4,ir||(Ze&4194048)!==Ze&&Ka.current!==null||(Ss=!0),(lr&134217727)===0&&(Ur&134217727)===0||St===null||ur(St,Ze,Za,!1)}function Md(e,t,n){var i=it;it|=2;var d=yg(),h=bg();(St!==e||Ze!==t)&&(il=null,Cs(e,t)),t=!1;var E=Ot;e:do try{if(lt!==0&&Ye!==null){var T=Ye,O=Ma;switch(lt){case 8:Od(),E=6;break e;case 3:case 2:case 9:case 6:Ka.current===null&&(t=!0);var W=lt;if(lt=0,Ma=null,Ns(e,T,O,W),n&&Ss){E=0;break e}break;default:W=lt,lt=0,Ma=null,Ns(e,T,O,W)}}L0(),E=Ot;break}catch(se){mg(e,se)}while(!0);return t&&e.shellSuspendCounter++,Ln=Pr=null,it=i,Y.H=d,Y.A=h,Ye===null&&(St=null,Ze=0,ki()),E}function L0(){for(;Ye!==null;)vg(Ye)}function I0(e,t){var n=it;it|=2;var i=yg(),d=bg();St!==e||Ze!==t?(il=null,ol=ge()+500,Cs(e,t)):Ss=_a(e,t);e:do try{if(lt!==0&&Ye!==null){t=Ye;var h=Ma;t:switch(lt){case 1:lt=0,Ma=null,Ns(e,t,h,1);break;case 2:case 9:if(_f(h)){lt=0,Ma=null,Eg(t);break}t=function(){lt!==2&&lt!==9||St!==e||(lt=7),hn(e)},h.then(t,t);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:_f(h)?(lt=0,Ma=null,Eg(t)):(lt=0,Ma=null,Ns(e,t,h,7));break;case 5:var E=null;switch(Ye.tag){case 26:E=Ye.memoizedState;case 5:case 27:var T=Ye;if(!E||tm(E)){lt=0,Ma=null;var O=T.sibling;if(O!==null)Ye=O;else{var W=T.return;W!==null?(Ye=W,cl(W)):Ye=null}break t}}lt=0,Ma=null,Ns(e,t,h,5);break;case 6:lt=0,Ma=null,Ns(e,t,h,6);break;case 8:Od(),Ot=6;break e;default:throw Error(o(462))}}P0();break}catch(se){mg(e,se)}while(!0);return Ln=Pr=null,Y.H=i,Y.A=d,it=n,Ye!==null?0:(St=null,Ze=0,ki(),Ot)}function P0(){for(;Ye!==null&&!F();)vg(Ye)}function vg(e){var t=Vh(e.alternate,e,Un);e.memoizedProps=e.pendingProps,t===null?cl(e):Ye=t}function Eg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Uh(n,t,t.pendingProps,t.type,void 0,Ze);break;case 11:t=Uh(n,t,t.pendingProps,t.type.render,t.ref,Ze);break;case 5:Jc(t);default:Gh(n,t),t=Ye=wf(t,Un),t=Vh(n,t,Un)}e.memoizedProps=e.pendingProps,t===null?cl(e):Ye=t}function Ns(e,t,n,i){Ln=Pr=null,Jc(t),vs=null,yo=0;var d=t.return;try{if(S0(e,d,t,n,Ze)){Ot=1,el(e,Va(n,e.current)),Ye=null;return}}catch(h){if(d!==null)throw Ye=d,h;Ot=1,el(e,Va(n,e.current)),Ye=null;return}t.flags&32768?(at||i===1?e=!0:Ss||(Ze&536870912)!==0?e=!1:(ir=e=!0,(i===2||i===9||i===3||i===6)&&(i=Ka.current,i!==null&&i.tag===13&&(i.flags|=16384))),wg(t,e)):cl(t)}function cl(e){var t=e;do{if((t.flags&32768)!==0){wg(t,ir);return}e=t.return;var n=A0(t.alternate,t,Un);if(n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Ot===0&&(Ot=5)}function wg(e,t){do{var n=D0(e.alternate,e);if(n!==null){n.flags&=32767,Ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ye=e;return}Ye=e=n}while(e!==null);Ot=6,Ye=null}function xg(e,t,n,i,d,h,E,T,O){e.cancelPendingCommit=null;do dl();while(oa!==0);if((it&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(h=t.lanes|t.childLanes,h|=Nc,ra(e,n,h,E,T,O),e===St&&(Ye=St=null,Ze=0),As=t,dr=e,Ds=n,Id=h,Pd=d,pg=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,M0(ye,function(){return Cg(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=Y.T,Y.T=null,d=Q.p,Q.p=2,E=it,it|=4;try{C0(e,t,n)}finally{it=E,Q.p=d,Y.T=i}}oa=1,Sg(),Tg(),Ag()}}function Sg(){if(oa===1){oa=0;var e=dr,t=As,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Y.T,Y.T=null;var i=Q.p;Q.p=2;var d=it;it|=4;try{sg(t,e);var h=Kd,E=uf(e.containerInfo),T=h.focusedElem,O=h.selectionRange;if(E!==T&&T&&T.ownerDocument&&df(T.ownerDocument.documentElement,T)){if(O!==null&&Sc(T)){var W=O.start,se=O.end;if(se===void 0&&(se=W),"selectionStart"in T)T.selectionStart=W,T.selectionEnd=Math.min(se,T.value.length);else{var le=T.ownerDocument||document,K=le&&le.defaultView||window;if(K.getSelection){var Z=K.getSelection(),je=T.textContent.length,Re=Math.min(O.start,je),ht=O.end===void 0?Re:Math.min(O.end,je);!Z.extend&&Re>ht&&(E=ht,ht=Re,Re=E);var H=cf(T,Re),$=cf(T,ht);if(H&&$&&(Z.rangeCount!==1||Z.anchorNode!==H.node||Z.anchorOffset!==H.offset||Z.focusNode!==$.node||Z.focusOffset!==$.offset)){var G=le.createRange();G.setStart(H.node,H.offset),Z.removeAllRanges(),Re>ht?(Z.addRange(G),Z.extend($.node,$.offset)):(G.setEnd($.node,$.offset),Z.addRange(G))}}}}for(le=[],Z=T;Z=Z.parentNode;)Z.nodeType===1&&le.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<le.length;T++){var ie=le[T];ie.element.scrollLeft=ie.left,ie.element.scrollTop=ie.top}}xl=!!Wd,Kd=Wd=null}finally{it=d,Q.p=i,Y.T=n}}e.current=t,oa=2}}function Tg(){if(oa===2){oa=0;var e=dr,t=As,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Y.T,Y.T=null;var i=Q.p;Q.p=2;var d=it;it|=4;try{tg(e,t.alternate,t)}finally{it=d,Q.p=i,Y.T=n}}oa=3}}function Ag(){if(oa===4||oa===3){oa=0,pe();var e=dr,t=As,n=Ds,i=pg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?oa=5:(oa=0,As=dr=null,Dg(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(cr=null),Ia(n),t=t.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(_t,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=Y.T,d=Q.p,Q.p=2,Y.T=null;try{for(var h=e.onRecoverableError,E=0;E<i.length;E++){var T=i[E];h(T.value,{componentStack:T.stack})}}finally{Y.T=t,Q.p=d}}(Ds&3)!==0&&dl(),hn(e),d=e.pendingLanes,(n&4194090)!==0&&(d&42)!==0?e===jd?Do++:(Do=0,jd=e):Do=0,Co(0)}}function Dg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,so(t)))}function dl(e){return Sg(),Tg(),Ag(),Cg()}function Cg(){if(oa!==5)return!1;var e=dr,t=Id;Id=0;var n=Ia(Ds),i=Y.T,d=Q.p;try{Q.p=32>n?32:n,Y.T=null,n=Pd,Pd=null;var h=dr,E=Ds;if(oa=0,As=dr=null,Ds=0,(it&6)!==0)throw Error(o(331));var T=it;if(it|=4,dg(h.current),ig(h,h.current,E,n),it=T,Co(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(_t,h)}catch{}return!0}finally{Q.p=d,Y.T=i,Dg(e,t)}}function Ng(e,t,n){t=Va(n,t),t=fd(e.stateNode,t,2),e=er(e,t,2),e!==null&&(La(e,2),hn(e))}function vt(e,t,n){if(e.tag===3)Ng(e,e,n);else for(;t!==null;){if(t.tag===3){Ng(t,e,n);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){e=Va(n,e),n=Lh(2),i=er(t,n,2),i!==null&&(Ih(n,i,t,e),La(i,2),hn(i));break}}t=t.return}}function $d(e,t,n){var i=e.pingCache;if(i===null){i=e.pingCache=new k0;var d=new Set;i.set(t,d)}else d=i.get(t),d===void 0&&(d=new Set,i.set(t,d));d.has(n)||(Rd=!0,d.add(n),e=j0.bind(null,e,t,n),t.then(e,e))}function j0(e,t,n){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,St===e&&(Ze&n)===n&&(Ot===4||Ot===3&&(Ze&62914560)===Ze&&300>ge()-Ld?(it&2)===0&&Cs(e,0):kd|=n,Ts===Ze&&(Ts=0)),hn(e)}function Rg(e,t){t===0&&(t=Ut()),e=cs(e,t),e!==null&&(La(e,t),hn(e))}function O0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Rg(e,n)}function q0(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,d=e.memoizedState;d!==null&&(n=d.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(o(314))}i!==null&&i.delete(t),Rg(e,n)}function M0(e,t){return Mt(e,t)}var ul=null,Rs=null,Ud=!1,pl=!1,Fd=!1,Fr=0;function hn(e){e!==Rs&&e.next===null&&(Rs===null?ul=Rs=e:Rs=Rs.next=e),pl=!0,Ud||(Ud=!0,U0())}function Co(e,t){if(!Fd&&pl){Fd=!0;do for(var n=!1,i=ul;i!==null;){if(e!==0){var d=i.pendingLanes;if(d===0)var h=0;else{var E=i.suspendedLanes,T=i.pingedLanes;h=(1<<31-rt(42|e)+1)-1,h&=d&~(E&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(n=!0,Ig(i,h))}else h=Ze,h=$t(i,i===St?h:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(h&3)===0||_a(i,h)||(n=!0,Ig(i,h));i=i.next}while(n);Fd=!1}}function $0(){kg()}function kg(){pl=Ud=!1;var e=0;Fr!==0&&(G0()&&(e=Fr),Fr=0);for(var t=ge(),n=null,i=ul;i!==null;){var d=i.next,h=_g(i,t);h===0?(i.next=null,n===null?ul=d:n.next=d,d===null&&(Rs=n)):(n=i,(e!==0||(h&3)!==0)&&(pl=!0)),i=d}Co(e)}function _g(e,t){for(var n=e.suspendedLanes,i=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var E=31-rt(h),T=1<<E,O=d[E];O===-1?((T&n)===0||(T&i)!==0)&&(d[E]=ut(T,t)):O<=t&&(e.expiredLanes|=T),h&=~T}if(t=St,n=Ze,n=$t(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===t&&(lt===2||lt===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&yt(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||_a(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(i!==null&&yt(i),Ia(n)){case 2:case 8:n=Ce;break;case 32:n=ye;break;case 268435456:n=Qe;break;default:n=ye}return i=Lg.bind(null,e),n=Mt(n,i),e.callbackPriority=t,e.callbackNode=n,t}return i!==null&&i!==null&&yt(i),e.callbackPriority=2,e.callbackNode=null,2}function Lg(e,t){if(oa!==0&&oa!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(dl()&&e.callbackNode!==n)return null;var i=Ze;return i=$t(e,e===St?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(hg(e,i,t),_g(e,ge()),e.callbackNode!=null&&e.callbackNode===n?Lg.bind(null,e):null)}function Ig(e,t){if(dl())return null;hg(e,t,!0)}function U0(){K0(function(){(it&6)!==0?Mt(fe,$0):kg()})}function Bd(){return Fr===0&&(Fr=It()),Fr}function Pg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Si(""+e)}function jg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function F0(e,t,n,i,d){if(t==="submit"&&n&&n.stateNode===d){var h=Pg((d[Ke]||null).action),E=i.submitter;E&&(t=(t=E[Ke]||null)?Pg(t.formAction):E.getAttribute("formAction"),t!==null&&(h=t,E=null));var T=new Ci("action","action",null,i,d);e.push({event:T,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Fr!==0){var O=E?jg(d,E):new FormData(d);ld(n,{pending:!0,data:O,method:d.method,action:h},null,O)}}else typeof h=="function"&&(T.preventDefault(),O=E?jg(d,E):new FormData(d),ld(n,{pending:!0,data:O,method:d.method,action:h},h,O))},currentTarget:d}]})}}for(var zd=0;zd<Cc.length;zd++){var Yd=Cc[zd],B0=Yd.toLowerCase(),z0=Yd[0].toUpperCase()+Yd.slice(1);tn(B0,"on"+z0)}tn(hf,"onAnimationEnd"),tn(gf,"onAnimationIteration"),tn(mf,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(o0,"onTransitionRun"),tn(i0,"onTransitionStart"),tn(l0,"onTransitionCancel"),tn(yf,"onTransitionEnd"),ba("onMouseEnter",["mouseout","mouseover"]),ba("onMouseLeave",["mouseout","mouseover"]),ba("onPointerEnter",["pointerout","pointerover"]),ba("onPointerLeave",["pointerout","pointerover"]),Ft("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ft("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ft("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ft("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ft("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Y0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function Og(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],d=i.event;i=i.listeners;e:{var h=void 0;if(t)for(var E=i.length-1;0<=E;E--){var T=i[E],O=T.instance,W=T.currentTarget;if(T=T.listener,O!==h&&d.isPropagationStopped())break e;h=T,d.currentTarget=W;try{h(d)}catch(se){Ji(se)}d.currentTarget=null,h=O}else for(E=0;E<i.length;E++){if(T=i[E],O=T.instance,W=T.currentTarget,T=T.listener,O!==h&&d.isPropagationStopped())break e;h=T,d.currentTarget=W;try{h(d)}catch(se){Ji(se)}d.currentTarget=null,h=O}}}}function He(e,t){var n=t[J];n===void 0&&(n=t[J]=new Set);var i=e+"__bubble";n.has(i)||(qg(t,e,2,!1),n.add(i))}function Hd(e,t,n){var i=0;t&&(i|=4),qg(n,e,i,t)}var fl="_reactListening"+Math.random().toString(36).slice(2);function Vd(e){if(!e[fl]){e[fl]=!0,ha.forEach(function(n){n!=="selectionchange"&&(Y0.has(n)||Hd(n,!1,e),Hd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[fl]||(t[fl]=!0,Hd("selectionchange",!1,t))}}function qg(e,t,n,i){switch(im(t)){case 2:var d=yE;break;case 8:d=bE;break;default:d=ou}n=d.bind(null,t,n,e),d=void 0,!hc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),i?d!==void 0?e.addEventListener(t,n,{capture:!0,passive:d}):e.addEventListener(t,n,!0):d!==void 0?e.addEventListener(t,n,{passive:d}):e.addEventListener(t,n,!1)}function Xd(e,t,n,i,d){var h=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var E=i.tag;if(E===3||E===4){var T=i.stateNode.containerInfo;if(T===d)break;if(E===4)for(E=i.return;E!==null;){var O=E.tag;if((O===3||O===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;T!==null;){if(E=Se(T),E===null)return;if(O=E.tag,O===5||O===6||O===26||O===27){i=h=E;continue e}T=T.parentNode}}i=i.return}zp(function(){var W=h,se=pc(n),le=[];e:{var K=bf.get(e);if(K!==void 0){var Z=Ci,je=e;switch(e){case"keypress":if(Ai(n)===0)break e;case"keydown":case"keyup":Z=Mv;break;case"focusin":je="focus",Z=bc;break;case"focusout":je="blur",Z=bc;break;case"beforeblur":case"afterblur":Z=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=Vp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=Fv;break;case hf:case gf:case mf:Z=Rv;break;case yf:Z=zv;break;case"scroll":case"scrollend":Z=Tv;break;case"wheel":Z=Hv;break;case"copy":case"cut":case"paste":Z=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=Gp;break;case"toggle":case"beforetoggle":Z=Xv}var Re=(t&4)!==0,ht=!Re&&(e==="scroll"||e==="scrollend"),H=Re?K!==null?K+"Capture":null:K;Re=[];for(var $=W,G;$!==null;){var ie=$;if(G=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||G===null||H===null||(ie=Vs($,H),ie!=null&&Re.push(Ro($,ie,G))),ht)break;$=$.return}0<Re.length&&(K=new Z(K,je,null,n,se),le.push({event:K,listeners:Re}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",K&&n!==uc&&(je=n.relatedTarget||n.fromElement)&&(Se(je)||je[I]))break e;if((Z||K)&&(K=se.window===se?se:(K=se.ownerDocument)?K.defaultView||K.parentWindow:window,Z?(je=n.relatedTarget||n.toElement,Z=W,je=je?Se(je):null,je!==null&&(ht=p(je),Re=je.tag,je!==ht||Re!==5&&Re!==27&&Re!==6)&&(je=null)):(Z=null,je=W),Z!==je)){if(Re=Vp,ie="onMouseLeave",H="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(Re=Gp,ie="onPointerLeave",H="onPointerEnter",$="pointer"),ht=Z==null?K:Oe(Z),G=je==null?K:Oe(je),K=new Re(ie,$+"leave",Z,n,se),K.target=ht,K.relatedTarget=G,ie=null,Se(se)===W&&(Re=new Re(H,$+"enter",je,n,se),Re.target=G,Re.relatedTarget=ht,ie=Re),ht=ie,Z&&je)t:{for(Re=Z,H=je,$=0,G=Re;G;G=ks(G))$++;for(G=0,ie=H;ie;ie=ks(ie))G++;for(;0<$-G;)Re=ks(Re),$--;for(;0<G-$;)H=ks(H),G--;for(;$--;){if(Re===H||H!==null&&Re===H.alternate)break t;Re=ks(Re),H=ks(H)}Re=null}else Re=null;Z!==null&&Mg(le,K,Z,Re,!1),je!==null&&ht!==null&&Mg(le,ht,je,Re,!0)}}e:{if(K=W?Oe(W):window,Z=K.nodeName&&K.nodeName.toLowerCase(),Z==="select"||Z==="input"&&K.type==="file")var Ae=af;else if(ef(K))if(nf)Ae=n0;else{Ae=t0;var Be=e0}else Z=K.nodeName,!Z||Z.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?W&&dc(W.elementType)&&(Ae=af):Ae=a0;if(Ae&&(Ae=Ae(e,W))){tf(le,Ae,n,se);break e}Be&&Be(e,K,W),e==="focusout"&&W&&K.type==="number"&&W.memoizedProps.value!=null&&cc(K,"number",K.value)}switch(Be=W?Oe(W):window,e){case"focusin":(ef(Be)||Be.contentEditable==="true")&&(os=Be,Tc=W,eo=null);break;case"focusout":eo=Tc=os=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,pf(le,n,se);break;case"selectionchange":if(s0)break;case"keydown":case"keyup":pf(le,n,se)}var De;if(Ec)e:{switch(e){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else ss?Qp(e,n)&&(_e="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_e="onCompositionStart");_e&&(Wp&&n.locale!=="ko"&&(ss||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&ss&&(De=Yp()):(Kn=se,gc="value"in Kn?Kn.value:Kn.textContent,ss=!0)),Be=hl(W,_e),0<Be.length&&(_e=new Xp(_e,e,null,n,se),le.push({event:_e,listeners:Be}),De?_e.data=De:(De=Jp(n),De!==null&&(_e.data=De)))),(De=Wv?Kv(e,n):Zv(e,n))&&(_e=hl(W,"onBeforeInput"),0<_e.length&&(Be=new Xp("onBeforeInput","beforeinput",null,n,se),le.push({event:Be,listeners:_e}),Be.data=De)),F0(le,e,W,n,se)}Og(le,t)})}function Ro(e,t,n){return{instance:e,listener:t,currentTarget:n}}function hl(e,t){for(var n=t+"Capture",i=[];e!==null;){var d=e,h=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||h===null||(d=Vs(e,n),d!=null&&i.unshift(Ro(e,d,h)),d=Vs(e,t),d!=null&&i.push(Ro(e,d,h))),e.tag===3)return i;e=e.return}return[]}function ks(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Mg(e,t,n,i,d){for(var h=t._reactName,E=[];n!==null&&n!==i;){var T=n,O=T.alternate,W=T.stateNode;if(T=T.tag,O!==null&&O===i)break;T!==5&&T!==26&&T!==27||W===null||(O=W,d?(W=Vs(n,h),W!=null&&E.unshift(Ro(n,W,O))):d||(W=Vs(n,h),W!=null&&E.push(Ro(n,W,O)))),n=n.return}E.length!==0&&e.push({event:t,listeners:E})}var H0=/\r\n?/g,V0=/\u0000|\uFFFD/g;function $g(e){return(typeof e=="string"?e:""+e).replace(H0,`
`).replace(V0,"")}function Ug(e,t){return t=$g(t),$g(e)===t}function gl(){}function ft(e,t,n,i,d,h){switch(n){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||as(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&as(e,""+i);break;case"className":es(e,"class",i);break;case"tabIndex":es(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":es(e,n,i);break;case"style":Fp(e,i,h);break;case"data":if(t!=="object"){es(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Si(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(n==="formAction"?(t!=="input"&&ft(e,t,"name",d.name,d,null),ft(e,t,"formEncType",d.formEncType,d,null),ft(e,t,"formMethod",d.formMethod,d,null),ft(e,t,"formTarget",d.formTarget,d,null)):(ft(e,t,"encType",d.encType,d,null),ft(e,t,"method",d.method,d,null),ft(e,t,"target",d.target,d,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=Si(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=gl);break;case"onScroll":i!=null&&He("scroll",e);break;case"onScrollEnd":i!=null&&He("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(d.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=Si(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":He("beforetoggle",e),He("toggle",e),Jr(e,"popover",i);break;case"xlinkActuate":za(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":za(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":za(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":za(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":za(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":za(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":za(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":za(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":za(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Jr(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=xv.get(n)||n,Jr(e,n,i))}}function Gd(e,t,n,i,d,h){switch(n){case"style":Fp(e,i,h);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(o(61));if(n=i.__html,n!=null){if(d.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof i=="string"?as(e,i):(typeof i=="number"||typeof i=="bigint")&&as(e,""+i);break;case"onScroll":i!=null&&He("scroll",e);break;case"onScrollEnd":i!=null&&He("scrollend",e);break;case"onClick":i!=null&&(e.onclick=gl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ct.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(d=n.endsWith("Capture"),t=n.slice(2,d?n.length-7:void 0),h=e[Ke]||null,h=h!=null?h[n]:null,typeof h=="function"&&e.removeEventListener(t,h,d),typeof i=="function")){typeof h!="function"&&h!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,i,d);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):Jr(e,n,i)}}}function ia(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",e),He("load",e);var i=!1,d=!1,h;for(h in n)if(n.hasOwnProperty(h)){var E=n[h];if(E!=null)switch(h){case"src":i=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ft(e,t,h,E,n,null)}}d&&ft(e,t,"srcSet",n.srcSet,n,null),i&&ft(e,t,"src",n.src,n,null);return;case"input":He("invalid",e);var T=h=E=d=null,O=null,W=null;for(i in n)if(n.hasOwnProperty(i)){var se=n[i];if(se!=null)switch(i){case"name":d=se;break;case"type":E=se;break;case"checked":O=se;break;case"defaultChecked":W=se;break;case"value":h=se;break;case"defaultValue":T=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(o(137,t));break;default:ft(e,t,i,se,n,null)}}qp(e,h,T,O,W,E,d,!1),Ta(e);return;case"select":He("invalid",e),i=E=h=null;for(d in n)if(n.hasOwnProperty(d)&&(T=n[d],T!=null))switch(d){case"value":h=T;break;case"defaultValue":E=T;break;case"multiple":i=T;default:ft(e,t,d,T,n,null)}t=h,n=E,e.multiple=!!i,t!=null?ts(e,!!i,t,!1):n!=null&&ts(e,!!i,n,!0);return;case"textarea":He("invalid",e),h=d=i=null;for(E in n)if(n.hasOwnProperty(E)&&(T=n[E],T!=null))switch(E){case"value":i=T;break;case"defaultValue":d=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(91));break;default:ft(e,t,E,T,n,null)}$p(e,i,d,h),Ta(e);return;case"option":for(O in n)n.hasOwnProperty(O)&&(i=n[O],i!=null)&&(O==="selected"?e.selected=i&&typeof i!="function"&&typeof i!="symbol":ft(e,t,O,i,n,null));return;case"dialog":He("beforetoggle",e),He("toggle",e),He("cancel",e),He("close",e);break;case"iframe":case"object":He("load",e);break;case"video":case"audio":for(i=0;i<No.length;i++)He(No[i],e);break;case"image":He("error",e),He("load",e);break;case"details":He("toggle",e);break;case"embed":case"source":case"link":He("error",e),He("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in n)if(n.hasOwnProperty(W)&&(i=n[W],i!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ft(e,t,W,i,n,null)}return;default:if(dc(t)){for(se in n)n.hasOwnProperty(se)&&(i=n[se],i!==void 0&&Gd(e,t,se,i,n,void 0));return}}for(T in n)n.hasOwnProperty(T)&&(i=n[T],i!=null&&ft(e,t,T,i,n,null))}function X0(e,t,n,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,h=null,E=null,T=null,O=null,W=null,se=null;for(Z in n){var le=n[Z];if(n.hasOwnProperty(Z)&&le!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":O=le;default:i.hasOwnProperty(Z)||ft(e,t,Z,null,i,le)}}for(var K in i){var Z=i[K];if(le=n[K],i.hasOwnProperty(K)&&(Z!=null||le!=null))switch(K){case"type":h=Z;break;case"name":d=Z;break;case"checked":W=Z;break;case"defaultChecked":se=Z;break;case"value":E=Z;break;case"defaultValue":T=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(o(137,t));break;default:Z!==le&&ft(e,t,K,Z,i,le)}}lc(e,E,T,O,W,se,h,d);return;case"select":Z=E=T=K=null;for(h in n)if(O=n[h],n.hasOwnProperty(h)&&O!=null)switch(h){case"value":break;case"multiple":Z=O;default:i.hasOwnProperty(h)||ft(e,t,h,null,i,O)}for(d in i)if(h=i[d],O=n[d],i.hasOwnProperty(d)&&(h!=null||O!=null))switch(d){case"value":K=h;break;case"defaultValue":T=h;break;case"multiple":E=h;default:h!==O&&ft(e,t,d,h,i,O)}t=T,n=E,i=Z,K!=null?ts(e,!!n,K,!1):!!i!=!!n&&(t!=null?ts(e,!!n,t,!0):ts(e,!!n,n?[]:"",!1));return;case"textarea":Z=K=null;for(T in n)if(d=n[T],n.hasOwnProperty(T)&&d!=null&&!i.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ft(e,t,T,null,i,d)}for(E in i)if(d=i[E],h=n[E],i.hasOwnProperty(E)&&(d!=null||h!=null))switch(E){case"value":K=d;break;case"defaultValue":Z=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:d!==h&&ft(e,t,E,d,i,h)}Mp(e,K,Z);return;case"option":for(var je in n)K=n[je],n.hasOwnProperty(je)&&K!=null&&!i.hasOwnProperty(je)&&(je==="selected"?e.selected=!1:ft(e,t,je,null,i,K));for(O in i)K=i[O],Z=n[O],i.hasOwnProperty(O)&&K!==Z&&(K!=null||Z!=null)&&(O==="selected"?e.selected=K&&typeof K!="function"&&typeof K!="symbol":ft(e,t,O,K,i,Z));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in n)K=n[Re],n.hasOwnProperty(Re)&&K!=null&&!i.hasOwnProperty(Re)&&ft(e,t,Re,null,i,K);for(W in i)if(K=i[W],Z=n[W],i.hasOwnProperty(W)&&K!==Z&&(K!=null||Z!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(o(137,t));break;default:ft(e,t,W,K,i,Z)}return;default:if(dc(t)){for(var ht in n)K=n[ht],n.hasOwnProperty(ht)&&K!==void 0&&!i.hasOwnProperty(ht)&&Gd(e,t,ht,void 0,i,K);for(se in i)K=i[se],Z=n[se],!i.hasOwnProperty(se)||K===Z||K===void 0&&Z===void 0||Gd(e,t,se,K,i,Z);return}}for(var H in n)K=n[H],n.hasOwnProperty(H)&&K!=null&&!i.hasOwnProperty(H)&&ft(e,t,H,null,i,K);for(le in i)K=i[le],Z=n[le],!i.hasOwnProperty(le)||K===Z||K==null&&Z==null||ft(e,t,le,K,i,Z)}var Wd=null,Kd=null;function ml(e){return e.nodeType===9?e:e.ownerDocument}function Fg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qd=null;function G0(){var e=window.event;return e&&e.type==="popstate"?e===Qd?!1:(Qd=e,!0):(Qd=null,!1)}var zg=typeof setTimeout=="function"?setTimeout:void 0,W0=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,K0=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(e){return Yg.resolve(null).then(e).catch(Z0)}:zg;function Z0(e){setTimeout(function(){throw e})}function pr(e){return e==="head"}function Hg(e,t){var n=t,i=0,d=0;do{var h=n.nextSibling;if(e.removeChild(n),h&&h.nodeType===8)if(n=h.data,n==="/$"){if(0<i&&8>i){n=i;var E=e.ownerDocument;if(n&1&&ko(E.documentElement),n&2&&ko(E.body),n&4)for(n=E.head,ko(n),E=n.firstChild;E;){var T=E.nextSibling,O=E.nodeName;E[re]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&E.rel.toLowerCase()==="stylesheet"||n.removeChild(E),E=T}}if(d===0){e.removeChild(h),Mo(t);return}d--}else n==="$"||n==="$?"||n==="$!"?d++:i=n.charCodeAt(0)-48;else i=0;n=h}while(n);Mo(t)}function Jd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Jd(n),Ee(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Q0(e,t,n,i){for(;e.nodeType===1;){var d=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[re])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var h=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=nn(e.nextSibling),e===null)break}return null}function J0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=nn(e.nextSibling),e===null))return null;return e}function eu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function eE(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var i=function(){t(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var tu=null;function Vg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Xg(e,t,n){switch(t=ml(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function ko(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ee(e)}var Qa=new Map,Gg=new Set;function yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Fn=Q.d;Q.d={f:tE,r:aE,D:nE,C:rE,L:sE,m:oE,X:lE,S:iE,M:cE};function tE(){var e=Fn.f(),t=ll();return e||t}function aE(e){var t=Ne(e);t!==null&&t.tag===5&&t.type==="form"?hh(t):Fn.r(e)}var _s=typeof document>"u"?null:document;function Wg(e,t,n){var i=_s;if(i&&typeof t=="string"&&t){var d=Ha(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof n=="string"&&(d+='[crossorigin="'+n+'"]'),Gg.has(d)||(Gg.add(d),e={rel:e,crossOrigin:n,href:t},i.querySelector(d)===null&&(t=i.createElement("link"),ia(t,"link",e),Xe(t),i.head.appendChild(t)))}}function nE(e){Fn.D(e),Wg("dns-prefetch",e,null)}function rE(e,t){Fn.C(e,t),Wg("preconnect",e,t)}function sE(e,t,n){Fn.L(e,t,n);var i=_s;if(i&&e&&t){var d='link[rel="preload"][as="'+Ha(t)+'"]';t==="image"&&n&&n.imageSrcSet?(d+='[imagesrcset="'+Ha(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(d+='[imagesizes="'+Ha(n.imageSizes)+'"]')):d+='[href="'+Ha(e)+'"]';var h=d;switch(t){case"style":h=Ls(e);break;case"script":h=Is(e)}Qa.has(h)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qa.set(h,e),i.querySelector(d)!==null||t==="style"&&i.querySelector(_o(h))||t==="script"&&i.querySelector(Lo(h))||(t=i.createElement("link"),ia(t,"link",e),Xe(t),i.head.appendChild(t)))}}function oE(e,t){Fn.m(e,t);var n=_s;if(n&&e){var i=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+Ha(i)+'"][href="'+Ha(e)+'"]',h=d;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Is(e)}if(!Qa.has(h)&&(e=y({rel:"modulepreload",href:e},t),Qa.set(h,e),n.querySelector(d)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Lo(h)))return}i=n.createElement("link"),ia(i,"link",e),Xe(i),n.head.appendChild(i)}}}function iE(e,t,n){Fn.S(e,t,n);var i=_s;if(i&&e){var d=Je(i).hoistableStyles,h=Ls(e);t=t||"default";var E=d.get(h);if(!E){var T={loading:0,preload:null};if(E=i.querySelector(_o(h)))T.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qa.get(h))&&au(e,n);var O=E=i.createElement("link");Xe(O),ia(O,"link",e),O._p=new Promise(function(W,se){O.onload=W,O.onerror=se}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,bl(E,t,i)}E={type:"stylesheet",instance:E,count:1,state:T},d.set(h,E)}}}function lE(e,t){Fn.X(e,t);var n=_s;if(n&&e){var i=Je(n).hoistableScripts,d=Is(e),h=i.get(d);h||(h=n.querySelector(Lo(d)),h||(e=y({src:e,async:!0},t),(t=Qa.get(d))&&nu(e,t),h=n.createElement("script"),Xe(h),ia(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(d,h))}}function cE(e,t){Fn.M(e,t);var n=_s;if(n&&e){var i=Je(n).hoistableScripts,d=Is(e),h=i.get(d);h||(h=n.querySelector(Lo(d)),h||(e=y({src:e,async:!0,type:"module"},t),(t=Qa.get(d))&&nu(e,t),h=n.createElement("script"),Xe(h),ia(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},i.set(d,h))}}function Kg(e,t,n,i){var d=(d=ve.current)?yl(d):null;if(!d)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ls(n.href),n=Je(d).hoistableStyles,i=n.get(t),i||(i={type:"style",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ls(n.href);var h=Je(d).hoistableStyles,E=h.get(e);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,E),(h=d.querySelector(_o(e)))&&!h._p&&(E.instance=h,E.state.loading=5),Qa.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qa.set(e,n),h||dE(d,e,n,E.state))),t&&i===null)throw Error(o(528,""));return E}if(t&&i!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Is(n),n=Je(d).hoistableScripts,i=n.get(t),i||(i={type:"script",instance:null,count:0,state:null},n.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ls(e){return'href="'+Ha(e)+'"'}function _o(e){return'link[rel="stylesheet"]['+e+"]"}function Zg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function dE(e,t,n,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),ia(t,"link",n),Xe(t),e.head.appendChild(t))}function Is(e){return'[src="'+Ha(e)+'"]'}function Lo(e){return"script[async]"+e}function Qg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+Ha(n.href)+'"]');if(i)return t.instance=i,Xe(i),i;var d=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Xe(i),ia(i,"style",d),bl(i,n.precedence,e),t.instance=i;case"stylesheet":d=Ls(n.href);var h=e.querySelector(_o(d));if(h)return t.state.loading|=4,t.instance=h,Xe(h),h;i=Zg(n),(d=Qa.get(d))&&au(i,d),h=(e.ownerDocument||e).createElement("link"),Xe(h);var E=h;return E._p=new Promise(function(T,O){E.onload=T,E.onerror=O}),ia(h,"link",i),t.state.loading|=4,bl(h,n.precedence,e),t.instance=h;case"script":return h=Is(n.src),(d=e.querySelector(Lo(h)))?(t.instance=d,Xe(d),d):(i=n,(d=Qa.get(h))&&(i=y({},n),nu(i,d)),e=e.ownerDocument||e,d=e.createElement("script"),Xe(d),ia(d,"link",i),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,bl(i,n.precedence,e));return t.instance}function bl(e,t,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=i.length?i[i.length-1]:null,h=d,E=0;E<i.length;E++){var T=i[E];if(T.dataset.precedence===t)h=T;else if(h!==d)break}h?h.parentNode.insertBefore(e,h.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function au(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function nu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var vl=null;function Jg(e,t,n){if(vl===null){var i=new Map,d=vl=new Map;d.set(n,i)}else d=vl,i=d.get(n),i||(i=new Map,d.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),d=0;d<n.length;d++){var h=n[d];if(!(h[re]||h[Dt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var E=h.getAttribute(t)||"";E=e+E;var T=i.get(E);T?T.push(h):i.set(E,[h])}}return i}function em(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function uE(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function tm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Io=null;function pE(){}function fE(e,t,n){if(Io===null)throw Error(o(475));var i=Io;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var d=Ls(n.href),h=e.querySelector(_o(d));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(i.count++,i=El.bind(i),e.then(i,i)),t.state.loading|=4,t.instance=h,Xe(h);return}h=e.ownerDocument||e,n=Zg(n),(d=Qa.get(d))&&au(n,d),h=h.createElement("link"),Xe(h);var E=h;E._p=new Promise(function(T,O){E.onload=T,E.onerror=O}),ia(h,"link",n),t.instance=h}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(i.count++,t=El.bind(i),e.addEventListener("load",t),e.addEventListener("error",t))}}function hE(){if(Io===null)throw Error(o(475));var e=Io;return e.stylesheets&&e.count===0&&ru(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&ru(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function El(){if(this.count--,this.count===0){if(this.stylesheets)ru(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wl=null;function ru(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wl=new Map,t.forEach(gE,e),wl=null,El.call(e))}function gE(e,t){if(!(t.state.loading&4)){var n=wl.get(e);if(n)var i=n.get(null);else{n=new Map,wl.set(e,n);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<d.length;h++){var E=d[h];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(n.set(E.dataset.precedence,E),i=E)}i&&n.set(null,i)}d=t.instance,E=d.getAttribute("data-precedence"),h=n.get(E)||i,h===i&&n.set(null,d),n.set(E,d),this.count++,i=El.bind(this),d.addEventListener("load",i),d.addEventListener("error",i),h?h.parentNode.insertBefore(d,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var Po={$$typeof:_,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function mE(e,t,n,i,d,h,E,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=i,this.onUncaughtError=d,this.onCaughtError=h,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function am(e,t,n,i,d,h,E,T,O,W,se,le){return e=new mE(e,t,n,E,T,O,W,le),t=1,h===!0&&(t|=24),h=ja(3,null,null,t),e.current=h,h.stateNode=e,t=$c(),t.refCount++,e.pooledCache=t,t.refCount++,h.memoizedState={element:i,isDehydrated:n,cache:t},zc(h),e}function nm(e){return e?(e=ds,e):ds}function rm(e,t,n,i,d,h){d=nm(d),i.context===null?i.context=d:i.pendingContext=d,i=Jn(t),i.payload={element:n},h=h===void 0?null:h,h!==null&&(i.callback=h),n=er(e,i,t),n!==null&&(Ua(n,e,t),co(n,e,t))}function sm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function su(e,t){sm(e,t),(e=e.alternate)&&sm(e,t)}function om(e){if(e.tag===13){var t=cs(e,67108864);t!==null&&Ua(t,e,67108864),su(e,67108864)}}var xl=!0;function yE(e,t,n,i){var d=Y.T;Y.T=null;var h=Q.p;try{Q.p=2,ou(e,t,n,i)}finally{Q.p=h,Y.T=d}}function bE(e,t,n,i){var d=Y.T;Y.T=null;var h=Q.p;try{Q.p=8,ou(e,t,n,i)}finally{Q.p=h,Y.T=d}}function ou(e,t,n,i){if(xl){var d=iu(i);if(d===null)Xd(e,t,i,Sl,n),lm(e,i);else if(EE(d,e,t,n,i))i.stopPropagation();else if(lm(e,i),t&4&&-1<vE.indexOf(e)){for(;d!==null;){var h=Ne(d);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var E=Jt(h.pendingLanes);if(E!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;E;){var O=1<<31-rt(E);T.entanglements[1]|=O,E&=~O}hn(h),(it&6)===0&&(ol=ge()+500,Co(0))}}break;case 13:T=cs(h,2),T!==null&&Ua(T,h,2),ll(),su(h,2)}if(h=iu(i),h===null&&Xd(e,t,i,Sl,n),h===d)break;d=h}d!==null&&i.stopPropagation()}else Xd(e,t,i,null,n)}}function iu(e){return e=pc(e),lu(e)}var Sl=null;function lu(e){if(Sl=null,e=Se(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Sl=e,null}function im(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z()){case fe:return 2;case Ce:return 8;case ye:case Ie:return 32;case Qe:return 268435456;default:return 32}default:return 32}}var cu=!1,fr=null,hr=null,gr=null,jo=new Map,Oo=new Map,mr=[],vE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lm(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":hr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":jo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(t.pointerId)}}function qo(e,t,n,i,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:n,eventSystemFlags:i,nativeEvent:h,targetContainers:[d]},t!==null&&(t=Ne(t),t!==null&&om(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function EE(e,t,n,i,d){switch(t){case"focusin":return fr=qo(fr,e,t,n,i,d),!0;case"dragenter":return hr=qo(hr,e,t,n,i,d),!0;case"mouseover":return gr=qo(gr,e,t,n,i,d),!0;case"pointerover":var h=d.pointerId;return jo.set(h,qo(jo.get(h)||null,e,t,n,i,d)),!0;case"gotpointercapture":return h=d.pointerId,Oo.set(h,qo(Oo.get(h)||null,e,t,n,i,d)),!0}return!1}function cm(e){var t=Se(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,pa(e.priority,function(){if(n.tag===13){var i=$a();i=Gn(i);var d=cs(n,i);d!==null&&Ua(d,n,i),su(n,i)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Tl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=iu(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);uc=i,n.target.dispatchEvent(i),uc=null}else return t=Ne(n),t!==null&&om(t),e.blockedOn=n,!1;t.shift()}return!0}function dm(e,t,n){Tl(e)&&n.delete(t)}function wE(){cu=!1,fr!==null&&Tl(fr)&&(fr=null),hr!==null&&Tl(hr)&&(hr=null),gr!==null&&Tl(gr)&&(gr=null),jo.forEach(dm),Oo.forEach(dm)}function Al(e,t){e.blockedOn===t&&(e.blockedOn=null,cu||(cu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,wE)))}var Dl=null;function um(e){Dl!==e&&(Dl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Dl===e&&(Dl=null);for(var t=0;t<e.length;t+=3){var n=e[t],i=e[t+1],d=e[t+2];if(typeof i!="function"){if(lu(i||n)===null)continue;break}var h=Ne(n);h!==null&&(e.splice(t,3),t-=3,ld(h,{pending:!0,data:d,method:n.method,action:i},i,d))}}))}function Mo(e){function t(O){return Al(O,e)}fr!==null&&Al(fr,e),hr!==null&&Al(hr,e),gr!==null&&Al(gr,e),jo.forEach(t),Oo.forEach(t);for(var n=0;n<mr.length;n++){var i=mr[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<mr.length&&(n=mr[0],n.blockedOn===null);)cm(n),n.blockedOn===null&&mr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var d=n[i],h=n[i+1],E=d[Ke]||null;if(typeof h=="function")E||um(n);else if(E){var T=null;if(h&&h.hasAttribute("formAction")){if(d=h,E=h[Ke]||null)T=E.formAction;else if(lu(d)!==null)continue}else T=E.action;typeof T=="function"?n[i+1]=T:(n.splice(i,3),i-=3),um(n)}}}function du(e){this._internalRoot=e}Cl.prototype.render=du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,i=$a();rm(n,i,e,t,null,null)},Cl.prototype.unmount=du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rm(e.current,2,null,e,null,null),ll(),t[I]=null}};function Cl(e){this._internalRoot=e}Cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<mr.length&&t!==0&&t<mr[n].priority;n++);mr.splice(n,0,e),n===0&&cm(e)}};var pm=r.version;if(pm!=="19.1.4")throw Error(o(527,pm,"19.1.4"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?u(e):null,e=e===null?null:e.stateNode,e};var xE={bundleType:0,version:"19.1.4",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{_t=Nl.inject(xE),be=Nl}catch{}}return Uo.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,i="",d=Nh,h=Rh,E=kh,T=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(E=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(T=t.unstable_transitionCallbacks)),t=am(e,1,!1,null,null,n,i,d,h,E,T,null),e[I]=t.current,Vd(e),new du(t)},Uo.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var i=!1,d="",h=Nh,E=Rh,T=kh,O=null,W=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(E=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(O=n.unstable_transitionCallbacks),n.formState!==void 0&&(W=n.formState)),t=am(e,1,!0,t,n??null,i,d,h,E,T,O,W),t.context=nm(null),n=t.current,i=$a(),i=Gn(i),d=Jn(i),d.callback=null,er(n,d,i),n=i,t.current.lanes=n,La(t,n),hn(t),e[I]=t.current,Vd(e),new Cl(t)},Uo.version="19.1.4",Uo}var xm;function IE(){if(xm)return pu.exports;xm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),pu.exports=LE(),pu.exports}var Ep=IE();const PE=fi(Ep),jE=Xl({__proto__:null,default:PE},[Ep]);var q=Gl();const ne=fi(q),Hy=Xl({__proto__:null,default:ne},[q]);const OE=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qE=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase()),Sm=a=>{const r=qE(a);return r.charAt(0).toUpperCase()+r.slice(1)},Vy=(...a)=>a.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim(),ME=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var $E={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const UE=q.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:l="",children:p,iconNode:g,...f},m)=>q.createElement("svg",{ref:m,...$E,width:r,height:r,stroke:a,strokeWidth:o?Number(s)*24/Number(r):s,className:Vy("lucide",l),...!p&&!ME(f)&&{"aria-hidden":"true"},...f},[...g.map(([u,y])=>q.createElement(u,y)),...Array.isArray(p)?p:[p]]));const ze=(a,r)=>{const s=q.forwardRef(({className:o,...l},p)=>q.createElement(UE,{ref:p,iconNode:r,className:Vy(`lucide-${OE(Sm(a))}`,`lucide-${a}`,o),...l}));return s.displayName=Sm(a),s};const FE=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],wp=ze("archive",FE);const BE=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],zE=ze("arrow-down",BE);const YE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Xy=ze("arrow-left",YE);const HE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],VE=ze("arrow-right",HE);const XE=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],GE=ze("arrow-up",XE);const WE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],$s=ze("check",WE);const KE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],xr=ze("chevron-down",KE);const ZE=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Gy=ze("chevron-left",ZE);const QE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],xp=ze("chevron-right",QE);const JE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Tm=ze("circle-check",JE);const ew=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],tw=ze("clipboard-check",ew);const aw=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Sp=ze("database",aw);const nw=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Vr=ze("download",nw);const rw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],sw=ze("eye",rw);const ow=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],iw=ze("file-check-2",ow);const lw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],cw=ze("file-code-2",lw);const dw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],Am=ze("file-plus-2",dw);const uw=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],pw=ze("file-search",uw);const fw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Vn=ze("file-text",fw);const hw=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Mu=ze("folder",hw);const gw=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],mw=ze("funnel",gw);const yw=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],bw=ze("git-branch",yw);const vw=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Xn=ze("hard-drive",vw);const Ew=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Ko=ze("layers",Ew);const ww=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Ra=ze("loader-circle",ww);const xw=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Sw=ze("monitor",xw);const Tw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ri=ze("plus",Tw);const Aw=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Dw=ze("refresh-cw",Aw);const Cw=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Dm=ze("save",Cw);const Nw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],si=ze("search",Nw);const Rw=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],kw=ze("settings-2",Rw);const _w=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],$u=ze("shield-check",_w);const Lw=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Uu=ze("sliders-horizontal",Lw);const Iw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],oi=ze("trash-2",Iw);const Pw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Sr=ze("triangle-alert",Pw);const jw=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Xr=ze("upload",jw);const Ow=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],qw=ze("wrench",Ow);const Mw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Fu=ze("x",Mw);function $w(a,r){if(a instanceof RegExp)return{keys:!1,pattern:a};var s,o,l,p,g=[],f="",m=a.split("/");for(m[0]||m.shift();l=m.shift();)s=l[0],s==="*"?(g.push(s),f+=l[1]==="?"?"(?:/(.*))?":"/(.*)"):s===":"?(o=l.indexOf("?",1),p=l.indexOf(".",1),g.push(l.substring(1,~o?o:~p?p:l.length)),f+=~o&&!~p?"(?:/([^/]+?))?":"/([^/]+?)",~p&&(f+=(~o?"?":"")+"\\"+l.substring(p))):f+="/"+l;return{keys:g,pattern:new RegExp("^"+f+(r?"(?=$|/)":"/?$"),"i")}}var yu={exports:{}},bu={};var Cm;function Uw(){if(Cm)return bu;Cm=1;var a=Gl();function r(b,v){return b===v&&(b!==0||1/b===1/v)||b!==b&&v!==v}var s=typeof Object.is=="function"?Object.is:r,o=a.useState,l=a.useEffect,p=a.useLayoutEffect,g=a.useDebugValue;function f(b,v){var x=v(),R=o({inst:{value:x,getSnapshot:v}}),D=R[0].inst,A=R[1];return p(function(){D.value=x,D.getSnapshot=v,m(D)&&A({inst:D})},[b,x,v]),l(function(){return m(D)&&A({inst:D}),b(function(){m(D)&&A({inst:D})})},[b]),g(x),x}function m(b){var v=b.getSnapshot;b=b.value;try{var x=v();return!s(b,x)}catch{return!0}}function u(b,v){return v()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?u:f;return bu.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:y,bu}var Nm;function Fw(){return Nm||(Nm=1,yu.exports=Uw()),yu.exports}var Bw=Fw();const zw=Hy.useInsertionEffect,Yw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Wy=Yw?q.useLayoutEffect:q.useEffect,Hw=zw||Wy,Tp=a=>{const r=q.useRef([a,(...s)=>r[0](...s)]).current;return Hw(()=>{r[0]=a}),r[1]},Rm=["popstate","pushState","replaceState","hashchange"];let Zo=[];const km=()=>Zo.forEach(a=>a()),Vw=a=>(Zo.push(a)===1&&Rm.forEach(r=>addEventListener(r,km)),()=>{Zo=Zo.filter(r=>r!==a),Zo.length||Rm.forEach(r=>removeEventListener(r,km))}),Ky=(a,r)=>Bw.useSyncExternalStore(Vw,a,r),_m=()=>location.search,Xw=({ssrSearch:a}={})=>Ky(_m,a!=null?()=>a:_m),Lm=()=>location.pathname,Gw=({ssrPath:a}={})=>Ky(Lm,a!=null?()=>a:Lm),Ww=(a,{replace:r=!1,state:s=null}={})=>history[r?"replaceState":"pushState"](s,"",a),Kw=a=>[Gw(a),Ww],Im=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[Im]>"u"){for(const a of["pushState","replaceState"]){const r=history[a];history[a]=function(){const s=r.apply(this,arguments),o=new Event(a);return o.arguments=arguments,dispatchEvent(o),s}}Object.defineProperty(window,Im,{value:!0})}const Zy=(a="")=>a==="/"?"":a,Zw=(a,r)=>a[0]==="~"?a.slice(1):Zy(r)+a,Qw=(a,r)=>(a=Pm(Zy(a)),r=Pm(r),!a||(r.toLowerCase()+"/").startsWith(a.toLowerCase()+"/")?r.slice(a.length)||"/":"~"+r),Pm=a=>{try{return a.includes("%")?decodeURI(a):a}catch{return a}},Qy={hook:Kw,searchHook:Xw,parser:$w,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:a=>a,aroundNav:(a,r,s)=>a(r,s)},Jy=q.createContext(Qy),Wl=()=>q.useContext(Jy),Jw={};q.createContext(Jw);const Ap=a=>{const[r,s]=a.hook(a);return[Qw(a.base,r),Tp((o,l)=>a.aroundNav(s,Zw(o,a.base),l))]},eb=()=>Ap(Wl()),ex=({children:a,...r})=>{const s=Wl(),o=r.hook?Qy:s;let l=o;if(r.ssrPath){const[m,u=r.ssrSearch??""]=r.ssrPath.split("?");m&&(r.ssrSearch=u,r.ssrPath=m)}r.hrefs=r.hrefs??r.hook?.hrefs,r.searchHook=r.searchHook??r.hook?.searchHook;let p=q.useRef(o),g=p.current,f=g;for(let m in o){const u=m==="base"?o[m]+(r[m]??""):r[m]??o[m];u!==f[m]&&(g===f&&(p.current=f={...f}),f[m]=u),(u!==o[m]||u!==l[m])&&(l=f)}return q.createElement(Jy.Provider,{value:l},a)},da=q.forwardRef((a,r)=>{const s=Wl(),[o,l]=Ap(s),{to:p="",href:g=p,onClick:f,asChild:m,children:u,className:y,replace:b,state:v,transition:x,...R}=a;return R.onClick=Tp(D=>{D.ctrlKey||D.metaKey||D.altKey||D.shiftKey||D.button!==0||(f?.(D),D.defaultPrevented||(D.preventDefault(),l(g,a)))}),R.href=s.hrefs(g[0]==="~"?g.slice(1):s.base+g,s),y!==void 0&&(R.className=y?.call?y(o===g):y),r&&(R.ref=r),m&&q.isValidElement(u)?q.cloneElement(u,R):q.createElement("a",R,u)}),tx=a=>{const{to:r,href:s=r}=a,o=Wl(),[,l]=Ap(o),p=Tp(()=>l(r||s,a)),{ssrContext:g}=o;return Wy(()=>{p()},[]),g&&(g.redirectTo=r),null},tb=`To use an existing Clerk app, run:
npx clerk@latest link
npx clerk@latest env pull

For production keys, run:
npx clerk@latest env pull --instance prod`,ab="Or copy keys from https://dashboard.clerk.com/~/api-keys into your .env file.",jm=`To create a new Clerk app, run:
npx clerk@latest init

'npx clerk@latest init' does not need a Clerk account and writes temporary dev keys.

${tb}

${ab}`,ax=`${tb}

${ab}`,nx=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:`The publishableKey passed to Clerk is invalid (key={{key}}, expected format: pk_test_... or pk_live_...).

${jm}`,MissingPublishableKeyErrorMessage:`Clerk keys are missing from your environment.

${jm}`,MissingSecretKeyErrorMessage:`Missing secretKey.

${ax}`,MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function nb({packageName:a,customMessages:r}){let s=a;function o(p,g){if(!g)return`${s}: ${p}`;let f=p;const m=p.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const u of m){const y=(g[u[1]]||"").toString();f=f.replace(`{{${u[1]}}}`,y)}return`${s}: ${f}`}const l={...nx,...r};return{setPackageName({packageName:p}){return typeof p=="string"&&(s=p),this},setMessages({customMessages:p}){return Object.assign(l,p||{}),this},throwInvalidPublishableKeyError(p){throw new Error(o(l.InvalidPublishableKeyErrorMessage,p))},throwInvalidProxyUrl(p){throw new Error(o(l.InvalidProxyUrlErrorMessage,p))},throwMissingPublishableKeyError(){throw new Error(o(l.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(o(l.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(p){throw new Error(o(l.MissingClerkProvider,p))},throw(p){throw new Error(o(p))}}}const rx=()=>{try{return!1}catch{}return!1},sx=()=>{try{return!1}catch{}return!1},ox=()=>{try{return!0}catch{}return!1};var Om=Object.prototype.hasOwnProperty;function qm(a,r,s){for(s of a.keys())if(ei(s,r))return s}function ei(a,r){var s,o,l;if(a===r)return!0;if(a&&r&&(s=a.constructor)===r.constructor){if(s===Date)return a.getTime()===r.getTime();if(s===RegExp)return a.toString()===r.toString();if(s===Array){if((o=a.length)===r.length)for(;o--&&ei(a[o],r[o]););return o===-1}if(s===Set){if(a.size!==r.size)return!1;for(o of a)if(l=o,l&&typeof l=="object"&&(l=qm(r,l),!l)||!r.has(l))return!1;return!0}if(s===Map){if(a.size!==r.size)return!1;for(o of a)if(l=o[0],l&&typeof l=="object"&&(l=qm(r,l),!l)||!ei(o[1],r.get(l)))return!1;return!0}if(s===ArrayBuffer)a=new Uint8Array(a),r=new Uint8Array(r);else if(s===DataView){if((o=a.byteLength)===r.byteLength)for(;o--&&a.getInt8(o)===r.getInt8(o););return o===-1}if(ArrayBuffer.isView(a)){if((o=a.byteLength)===r.byteLength)for(;o--&&a[o]===r[o];);return o===-1}if(!s||typeof a=="object"){o=0;for(s in a)if(Om.call(a,s)&&++o&&!Om.call(r,s)||!(s in r)||!ei(a[s],r[s]))return!1;return Object.keys(r).length===o}}return a!==a&&r!==r}function ix(a,r){if(!a)throw typeof r=="string"?new Error(r):new Error(`${r.displayName} not found`)}const Bs=(a,r)=>{const{assertCtxFn:s=ix}={},o=ne.createContext(void 0);return o.displayName=a,[o,()=>{const g=ne.useContext(o);return s(g,`${a} not found`),g.value},()=>{const g=ne.useContext(o);return g?g.value:{}}]},[lx,cx]=Bs("ClerkInstanceContext");Bs("InitialStateContext");ne.createContext({});Bs("CheckoutContext");function dx(a){if(!ne.useContext(lx)){if(typeof a=="function"){a();return}throw new Error(`${a} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}function ux(a){const r=function(){};let s;return s=new Proxy(r,{get(o,l){if(l!=="then")return l==="toString"?()=>`[${a}]`:l===Symbol.toPrimitive?()=>0:s},apply(){return s},construct(){return s},has(){return!1},set(){return!1}}),s}ux("ClerkMockQueryClient");typeof window<"u"?ne.useLayoutEffect:ne.useEffect;const Mm=ei,px=a=>{const r=q.useRef(a);return q.useEffect(()=>{r.current=a},[a]),r.current},Fa=(a,r,s)=>{const o=!!s,l=q.useRef(s);q.useEffect(()=>{l.current=s},[s]),q.useEffect(()=>{if(!o||!a)return()=>{};const p=(...g)=>{l.current&&l.current(...g)};return a.on(r,p),()=>{a.off(r,p)}},[o,r,a,l])},rb=ne.createContext(null);rb.displayName="ElementsContext";const fx=(a,r)=>{if(!a)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${r} in an <Elements> provider.`);return a},Ul=a=>a!==null&&typeof a=="object",hx=(a,r,s)=>Ul(a)?Object.keys(a).reduce((o,l)=>{const p=!Ul(r)||!sb(a[l],r[l]);return s.includes(l)?(p&&console.warn(`Unsupported prop change: options.${l} is not a mutable property.`),o):p?{...o||{},[l]:a[l]}:o},null):null,$m="[object Object]",sb=(a,r)=>{if(!Ul(a)||!Ul(r))return a===r;const s=Array.isArray(a);if(s!==Array.isArray(r))return!1;const o=Object.prototype.toString.call(a)===$m;if(o!==(Object.prototype.toString.call(r)===$m))return!1;if(!o&&!s)return a===r;const l=Object.keys(a),p=Object.keys(r);if(l.length!==p.length)return!1;const g={};for(let b=0;b<l.length;b+=1)g[l[b]]=!0;for(let b=0;b<p.length;b+=1)g[p[b]]=!0;const f=Object.keys(g);if(f.length!==l.length)return!1;const m=a,u=r,y=b=>sb(m[b],u[b]);return f.every(y)},Um=a=>fx(ne.useContext(rb),a),gx=a=>a.charAt(0).toUpperCase()+a.slice(1),mx=(a,r)=>{const s=`${gx(a)}Element`,p=r?g=>{Um(`mounts <${s}>`);const{id:f,className:m}=g;return ne.createElement("div",{id:f,className:m})}:({id:g,className:f,fallback:m,options:u={},onBlur:y,onFocus:b,onReady:v,onChange:x,onEscape:R,onClick:D,onLoadError:A,onLoaderStart:S,onNetworksChange:P,onConfirm:_,onCancel:N,onShippingAddressChange:w,onShippingRateChange:k})=>{const C=Um(`mounts <${s}>`),L="elements"in C?C.elements:null,[B,ee]=ne.useState(null),X=ne.useRef(null),ae=ne.useRef(null),[we,ue]=q.useState(!1);Fa(B,"blur",y),Fa(B,"focus",b),Fa(B,"escape",R),Fa(B,"click",D),Fa(B,"loaderror",A),Fa(B,"loaderstart",S),Fa(B,"networkschange",P),Fa(B,"confirm",_),Fa(B,"cancel",N),Fa(B,"shippingaddresschange",w),Fa(B,"shippingratechange",k),Fa(B,"change",x);let ce;v&&(ce=()=>{ue(!0),v(B)}),Fa(B,"ready",ce),ne.useLayoutEffect(()=>{if(X.current===null&&ae.current!==null&&L){let Q=null;L&&(Q=L.create(a,u)),X.current=Q,ee(Q),Q&&Q.mount(ae.current)}},[L,u]);const Y=px(u);return ne.useEffect(()=>{if(!X.current)return;const Q=hx(u,Y,["paymentRequest"]);Q&&"update"in X.current&&X.current.update(Q)},[u,Y]),ne.useLayoutEffect(()=>()=>{if(X.current&&typeof X.current.destroy=="function")try{X.current.destroy(),X.current=null}catch{}},[]),ne.createElement(ne.Fragment,null,!we&&m,ne.createElement("div",{id:g,style:{height:we?"unset":"0px",visibility:we?"visible":"hidden"},className:f,ref:ae}))};return p.displayName=s,p.__elementType=a,p};mx("payment",typeof window>"u");Bs("PaymentElementContext");Bs("StripeUtilsContext");const[OA,,yx]=Bs("PortalProvider"),bx=()=>{const a=yx();return a&&"getContainer"in a&&a.getContainer?a.getContainer:()=>null},Dp=nb({packageName:"@clerk/react"});function vx(a){Dp.setMessages(a).setPackageName(a)}const Ex=cx,wx=a=>{dx(()=>{Dp.throwMissingClerkProviderError({source:a})})};var Kl=Yy();const xx=fi(Kl),Sx=Xl({__proto__:null,default:xx},[Kl]),xa=a=>{rx()&&console.error(`Clerk: ${a}`)},Fm=(a,...r)=>{const s={...a};for(const o of r)delete s[o];return s},Tx=a=>`You've passed multiple children components to <${a}/>. You can only pass a single child component or text.`,Ax="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Dx="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Cx="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",Nx="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",Rx=a=>`<${a} /> can only accept <${a}.Page /> and <${a}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,kx=a=>`Missing props. <${a}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,_x=a=>`Missing props. <${a}.Link /> component requires the following props: url, label and labelIcon.`,Lx="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Ix="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Px="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",jx="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",Ox="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",qx="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",Mx="Missing props. <UserButton.Action /> component requires the following props: label.",hi=a=>r=>{try{return ne.Children.only(a)}catch{const s=ne.Children.toArray(a);return s.length===1&&ne.isValidElement(s[0])?s[0]:Dp.throw(Tx(r))}},gi=(a,r)=>(a||(a=r),typeof a=="string"&&(a=ne.createElement("button",null,a)),a),mi=a=>(...r)=>{if(a&&typeof a=="function")return a(...r)},ti=a=>{const[r,s]=q.useState(new Map),o=q.useRef(r),l=q.useRef(new Map),p=q.useRef(new Map);o.current=r,l.current=new Map(a.map(f=>[f.id,f.component]));const g=new Set(a.map(f=>f.id));return p.current.forEach((f,m)=>{g.has(m)||p.current.delete(m)}),a.map(f=>{const m=f.id,u=p.current.get(m);if(u)return u;const y=()=>{const v=o.current.get(m),x=l.current.get(m);return v?Kl.createPortal(x,v):null},b={id:f.id,mount:v=>s(x=>new Map(x).set(m,v)),unmount:()=>s(v=>{const x=new Map(v);return x.set(m,null),x}),portal:y};return p.current.set(m,b),b})},Ea=(a,r)=>!!a&&ne.isValidElement(a)&&a?.type===r,ob=(a,r)=>cb({children:a,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:bi,PageComponent:yi,MenuItemsComponent:Ql,componentName:"UserProfile"},r),ib=(a,r)=>cb({children:a,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:ec,PageComponent:Jl,componentName:"OrganizationProfile"},r),lb=a=>{const r=[],s=[ec,Jl,Ql,yi,bi];return ne.Children.forEach(a,o=>{s.some(l=>Ea(o,l))||r.push(o)}),r},cb=(a,r)=>{const{children:s,LinkComponent:o,PageComponent:l,MenuItemsComponent:p,reorderItemsLabels:g,componentName:f}=a,{allowForAnyChildren:m=!1}=r||{},u=[],y=new Map;ne.Children.forEach(s,_=>{if(!Ea(_,l)&&!Ea(_,o)&&!Ea(_,p)){_&&!m&&xa(Rx(f));return}const{props:N}=_,{children:w,label:k,url:C,labelIcon:L}=N,B=_.key;if(Ea(_,l))if(zm(N,g))u.push({label:k});else if(vu(N))u.push({label:k,labelIcon:L,children:w,url:C,portalId:Bm("page",N,B,y)});else{xa(kx(f));return}if(Ea(_,o))if(Eu(N))u.push({label:k,labelIcon:L,url:C,portalId:Bm("link",N,B,y)});else{xa(_x(f));return}});const b=[],v=[],x=[];u.forEach((_,N)=>{if(vu(_)){b.push({component:_.children,id:_.portalId||N}),v.push({component:_.labelIcon,id:_.portalId||N});return}Eu(_)&&x.push({component:_.labelIcon,id:_.portalId||N})});const R=ti(b),D=ti(v),A=ti(x),S=[],P=[];return u.forEach((_,N)=>{if(zm(_,g)){S.push({label:_.label});return}if(vu(_)){const{portal:w,mount:k,unmount:C}=R.find(X=>X.id===(_.portalId||N)),{portal:L,mount:B,unmount:ee}=D.find(X=>X.id===(_.portalId||N));S.push({label:_.label,url:_.url,mount:k,unmount:C,mountIcon:B,unmountIcon:ee}),P.push({key:`content:${_.portalId||N}`,portal:w}),P.push({key:`label:${_.portalId||N}`,portal:L});return}if(Eu(_)){const{portal:w,mount:k,unmount:C}=A.find(L=>L.id===(_.portalId||N));S.push({label:_.label,url:_.url,mountIcon:k,unmountIcon:C}),P.push({key:`label:${_.portalId||N}`,portal:w});return}}),{customPages:S,customPagesPortals:P}},Bm=(a,r,s,o)=>{if(s!=null)return`${a}:key:${s}`;const l=`${a}:${r.label}:${r.url}`,p=o.get(l)??0;return o.set(l,p+1),`${l}:${p}`},zm=(a,r)=>{const{children:s,label:o,url:l,labelIcon:p}=a;return!s&&!l&&!p&&r.some(g=>g===o)},vu=a=>{const{children:r,label:s,url:o,labelIcon:l}=a;return!!r&&!!o&&!!l&&!!s},Eu=a=>{const{children:r,label:s,url:o,labelIcon:l}=a;return!r&&!!o&&!!l&&!!s},$x=(a,r)=>Ux({children:a,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:Ql,MenuActionComponent:ub,MenuLinkComponent:pb,UserProfileLinkComponent:bi,UserProfilePageComponent:yi,allowForAnyChildren:r?.allowForAnyChildren??!1}),Ux=({children:a,MenuItemsComponent:r,MenuActionComponent:s,MenuLinkComponent:o,UserProfileLinkComponent:l,UserProfilePageComponent:p,reorderItemsLabels:g,allowForAnyChildren:f=!1})=>{const m=[],u=[],y=[],b=new Map;ne.Children.forEach(a,A=>{if(!Ea(A,r)&&!Ea(A,l)&&!Ea(A,p)){A&&!f&&xa(Lx);return}if(Ea(A,l)||Ea(A,p))return;const{props:S}=A;ne.Children.forEach(S.children,P=>{if(!Ea(P,s)&&!Ea(P,o)){P&&xa(Ix);return}const{props:_}=P,N=P.key,{label:w,labelIcon:k,href:C,onClick:L,open:B}=_;if(Ea(P,s))if(Ym(_,g))m.push({label:w});else if(xu(_)){const ee={label:w,labelIcon:k};if(L!==void 0)m.push({...ee,onClick:L,portalId:wu("action",_,N,b)});else if(B!==void 0)m.push({...ee,open:B.startsWith("/")?B:`/${B}`,portalId:wu("action",_,N,b)});else{xa("Custom menu item must have either onClick or open property");return}}else{xa(Mx);return}if(Ea(P,o))if(Su(_))m.push({label:w,labelIcon:k,href:C,portalId:wu("link",_,N,b)});else{xa(qx);return}})});const v=[],x=[];m.forEach((A,S)=>{xu(A)&&v.push({component:A.labelIcon,id:A.portalId||S}),Su(A)&&x.push({component:A.labelIcon,id:A.portalId||S})});const R=ti(v),D=ti(x);return m.forEach((A,S)=>{if(Ym(A,g)&&u.push({label:A.label}),xu(A)){const{portal:P,mount:_,unmount:N}=R.find(k=>k.id===(A.portalId||S)),w={label:A.label,mountIcon:_,unmountIcon:N};"onClick"in A?w.onClick=A.onClick:"open"in A&&(w.open=A.open),u.push(w),y.push({key:`icon:${A.portalId||S}`,portal:P})}if(Su(A)){const{portal:P,mount:_,unmount:N}=D.find(w=>w.id===(A.portalId||S));u.push({label:A.label,href:A.href,mountIcon:_,unmountIcon:N}),y.push({key:`icon:${A.portalId||S}`,portal:P})}}),{customMenuItems:u,customMenuItemsPortals:y}},wu=(a,r,s,o)=>{if(s!=null)return`${a}:key:${s}`;const l=r.href||r.open||"",p=`${a}:${r.label}:${l}`,g=o.get(p)??0;return o.set(p,g+1),`${p}:${g}`},Ym=(a,r)=>{const{children:s,label:o,onClick:l,labelIcon:p}=a;return!s&&!l&&!p&&r.some(g=>g===o)},xu=a=>{const{label:r,labelIcon:s,onClick:o,open:l}=a;return!!s&&!!r&&(typeof o=="function"||typeof l=="string")},Su=a=>{const{label:r,href:s,labelIcon:o}=a;return!!s&&!!o&&!!r},Fx=a=>{const r=a?.isReady;return s=>new Promise((o,l)=>{const{root:p=document?.body,selector:g,timeout:f=0}=s;if(!p){l(new Error("No root element provided"));return}let m=p;if(g&&(m=p?.querySelector(g)),r(m,g)){o();return}const u=new MutationObserver(y=>{for(const b of y)if(!m&&g&&(m=p?.querySelector(g)),(a.childList&&b.type==="childList"||a.attributes&&b.type==="attributes")&&r(m,g)){u.disconnect(),o();return}});u.observe(p,a),f>0&&setTimeout(()=>{u.disconnect(),l(new Error(`Timeout waiting for ${g}`))},f)})},Bx=Fx({childList:!0,subtree:!0,isReady:(a,r)=>!!a?.childElementCount&&a?.matches?.(r)&&a.childElementCount>0});function na(a,r){const s=q.useRef(),[o,l]=q.useState("rendering");return q.useEffect(()=>{if(!a)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!s.current){const p=`[data-clerk-component="${a}"]`,g=r?.selector;s.current=Bx({selector:g?p+g:p}).then(()=>{l("rendered")}).catch(()=>{l("error")})}},[a,r?.selector]),o}const Rl=a=>"mount"in a,Hm=a=>"open"in a,Vm=a=>a?.map(({mountIcon:r,unmountIcon:s,...o})=>o);var Xt=class extends ne.PureComponent{constructor(...a){super(...a),this.rootRef=ne.createRef()}componentDidUpdate(a){if(!Rl(a)||!Rl(this.props))return;const r=Fm(a.props||{},"customPages","customMenuItems","children"),s=Fm(this.props.props||{},"customPages","customMenuItems","children"),o=a.props?.customPages?.length!==this.props.props?.customPages?.length,l=a.props?.customMenuItems?.length!==this.props.props?.customMenuItems?.length,p=Vm(a.props?.customMenuItems),g=Vm(this.props.props?.customMenuItems);(!Mm(r,s)||!Mm(p,g)||o||l)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(Rl(this.props)&&this.props.mount(this.rootRef.current,this.props.props),Hm(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(Rl(this.props)&&this.props.unmount(this.rootRef.current),Hm(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:a=!1}=this.props,r={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return ne.createElement(ne.Fragment,null,!a&&ne.createElement("div",r),this.props.children)}};const st=(a,r)=>{const s=(typeof r=="string"?r:r?.component)||a.displayName||a.name||"Component";a.displayName=s;const o=typeof r=="string"?void 0:r,l=p=>{wx(s||"withClerk");const g=Ex(),f=bx();return!g.loaded&&!o?.renderWhileLoading?null:ne.createElement(a,{getContainer:f,...p,component:s,clerk:g})};return l.displayName=`withClerk(${s})`,l},Zl=a=>ne.createElement(ne.Fragment,null,a?.customPagesPortals?.map(({key:r,portal:s})=>q.createElement(s,{key:r})),a?.customMenuItemsPortals?.map(({key:r,portal:s})=>q.createElement(s,{key:r})));st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountSignIn,unmount:a.unmountSignIn,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"SignIn",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountSignUp,unmount:a.unmountSignUp,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"SignUp",renderWhileLoading:!0});function yi({children:a}){return xa(Ax),ne.createElement(ne.Fragment,null,a)}function bi({children:a}){return xa(Dx),ne.createElement(ne.Fragment,null,a)}const zx=st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:f}=ob(o.children);return ne.createElement(ne.Fragment,null,l&&s,ne.createElement(Xt,{component:r,mount:a.mountUserProfile,unmount:a.unmountUserProfile,updateProps:a.__internal_updateProps,props:{...o,customPages:g},rootProps:p},ne.createElement(Zl,{customPagesPortals:f})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(zx,{Page:yi,Link:bi});const db=q.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),Yx=st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:f}=ob(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),m={...o.userProfileProps,customPages:g},{customMenuItems:u,customMenuItemsPortals:y}=$x(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),b=lb(o.children),v={mount:a.mountUserButton,unmount:a.unmountUserButton,updateProps:a.__internal_updateProps,props:{...o,userProfileProps:m,customMenuItems:u}},x={customPagesPortals:f,customMenuItemsPortals:y};return ne.createElement(db.Provider,{value:v},l&&s,a.loaded&&ne.createElement(Xt,{component:r,...v,hideRootHtmlElement:!!o.__experimental_asProvider,rootProps:p},o.__experimental_asProvider?b:null,ne.createElement(Zl,x)))},{component:"UserButton",renderWhileLoading:!0});function Ql({children:a}){return xa(Px),ne.createElement(ne.Fragment,null,a)}function ub({children:a}){return xa(jx),ne.createElement(ne.Fragment,null,a)}function pb({children:a}){return xa(Ox),ne.createElement(ne.Fragment,null,a)}function Hx(a){const r=q.useContext(db),s={...r,props:{...r.props,...a}};return ne.createElement(Xt,s)}Object.assign(Yx,{UserProfilePage:yi,UserProfileLink:bi,MenuItems:Ql,Action:ub,Link:pb,__experimental_Outlet:Hx});function Jl({children:a}){return xa(Cx),ne.createElement(ne.Fragment,null,a)}function ec({children:a}){return xa(Nx),ne.createElement(ne.Fragment,null,a)}const Vx=st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:f}=ib(o.children);return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountOrganizationProfile,unmount:a.unmountOrganizationProfile,updateProps:a.__internal_updateProps,props:{...o,customPages:g},rootProps:p},ne.createElement(Zl,{customPagesPortals:f})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(Vx,{Page:Jl,Link:ec});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountCreateOrganization,unmount:a.unmountCreateOrganization,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"CreateOrganization",renderWhileLoading:!0});const fb=q.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),Xx=st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:f}=ib(o.children,{allowForAnyChildren:!!o.__experimental_asProvider}),m={...o.organizationProfileProps,customPages:g},u=lb(o.children),y={mount:a.mountOrganizationSwitcher,unmount:a.unmountOrganizationSwitcher,updateProps:a.__internal_updateProps,props:{...o,organizationProfileProps:m},rootProps:p,component:r};return a.__experimental_prefetchOrganizationSwitcher(),ne.createElement(fb.Provider,{value:y},ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{...y,hideRootHtmlElement:!!o.__experimental_asProvider},o.__experimental_asProvider?u:null,ne.createElement(Zl,{customPagesPortals:f}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function Gx(a){const r=q.useContext(fb),s={...r,props:{...r.props,...a}};return ne.createElement(Xt,s)}Object.assign(Xx,{OrganizationProfilePage:Jl,OrganizationProfileLink:ec,__experimental_Outlet:Gx});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountOrganizationList,unmount:a.unmountOrganizationList,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"OrganizationList",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,open:a.openGoogleOneTap,close:a.closeGoogleOneTap,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"GoogleOneTap",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountWaitlist,unmount:a.unmountWaitlist,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"Waitlist",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r,{selector:'[data-component-status="ready"]'})==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountPricingTable,unmount:a.unmountPricingTable,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"PricingTable",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountAPIKeys,unmount:a.unmountAPIKeys,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"ApiKeys",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.__internal_mountOAuthConsent,unmount:a.__internal_unmountOAuthConsent,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"OAuthConsent",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.__internal_mountOAuthDeviceVerification,unmount:a.__internal_unmountOAuthDeviceVerification,updateProps:g=>{a.__internal_updateProps(g)},props:o,rootProps:p}))},{component:"OAuthDeviceVerification",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountUserAvatar,unmount:a.unmountUserAvatar,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"UserAvatar",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountTaskChooseOrganization,unmount:a.unmountTaskChooseOrganization,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountTaskResetPassword,unmount:a.unmountTaskResetPassword,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"TaskResetPassword",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...o})=>{const l=na(r)==="rendering"||!a.loaded,p={...l&&s&&{style:{display:"none"}}};return ne.createElement(ne.Fragment,null,l&&s,a.loaded&&ne.createElement(Xt,{component:r,mount:a.mountTaskSetupMFA,unmount:a.unmountTaskSetupMFA,updateProps:a.__internal_updateProps,props:o,rootProps:p}))},{component:"TaskSetupMFA",renderWhileLoading:!0});const Wx=nb({packageName:"@clerk/shared"});function Kx(a){Wx.setPackageName({packageName:a})}const Xm=new Set,tc=(a,r,s)=>{const o=sx()||ox(),l=a;Xm.has(l)||o||(Xm.add(l),console.warn(`Clerk - DEPRECATION WARNING: "${a}" is deprecated and will be removed in the next major release.
${r}`))};function Zx(a){const r=a.match(/^(\d+)\.(\d+)\.(\d+)/);if(!r)return null;const[,s,o,l]=r;return{major:parseInt(s,10),minor:parseInt(o,10),patch:parseInt(l,10)}}function Qx(a,r){const{major:s,minor:o,patch:l}=a;return r.some(([p,g,f,m])=>s!==p?!1:f===-1?o>g||o===g&&l>=m:o===f&&l>=m)}function Jx(a,r){const s=Zx(a);return s?Qx(s,r):!1}st(({clerk:a,...r})=>{const{client:s,session:o}=a,l=(s.signedInSessions?.length??0)>0;return ne.useEffect(()=>{o===null&&l?a.redirectToAfterSignOut():a.redirectToSignIn(r)},[]),null},"RedirectToSignIn");st(({clerk:a,...r})=>(ne.useEffect(()=>{a.redirectToSignUp(r)},[]),null),"RedirectToSignUp");st(({clerk:a,...r})=>(ne.useEffect(()=>{a.redirectToTasks(r)},[]),null),"RedirectToTasks");st(({clerk:a})=>(ne.useEffect(()=>{tc("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),a.redirectToUserProfile()},[]),null),"RedirectToUserProfile");st(({clerk:a})=>(ne.useEffect(()=>{tc("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),a.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");st(({clerk:a})=>(ne.useEffect(()=>{tc("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),a.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");st(({clerk:a,...r})=>(ne.useEffect(()=>{a.handleRedirectCallback(r)},[]),null),"AuthenticateWithRedirectCallback");typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);function e1(){try{return Jx(ne.version,[[18,0,-1,0],[19,0,0,3],[19,1,1,4],[19,2,2,3],[19,3,3,0]])}catch{return!1}}e1();typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);if(globalThis.__clerkSharedModules){const a=globalThis.__clerkSharedModules.react?.version;a&&a!==q.version&&console.warn(`[@clerk/ui/register] React version mismatch detected. Already registered: ${a}, current import: ${q.version}. This may cause issues with the shared @clerk/ui variant.`)}else globalThis.__clerkSharedModules={react:Hy,"react-dom":Sx,"react-dom/client":jE,"react/jsx-runtime":CE};st(({clerk:a,children:r,...s})=>{const{appearance:o,getContainer:l,component:p,...g}=s;r=gi(r,"Invite members");const f=hi(r)("InviteMembersButton"),m=()=>a.openInviteMembers({appearance:o,getContainer:l}),y={...g,onClick:async b=>(f&&typeof f=="object"&&"props"in f&&await mi(f.props.onClick)(b),m())};return ne.cloneElement(f,y)},{component:"InviteMembersButton",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{appearance:o,getContainer:l,component:p,signUpFallbackRedirectUrl:g,forceRedirectUrl:f,fallbackRedirectUrl:m,signUpForceRedirectUrl:u,mode:y,initialValues:b,withSignUp:v,oauthFlow:x,...R}=s;r=gi(r,"Sign in");const D=hi(r)("SignInButton"),A=()=>{const _={forceRedirectUrl:f,fallbackRedirectUrl:m,signUpFallbackRedirectUrl:g,signUpForceRedirectUrl:u,initialValues:b,withSignUp:v,oauthFlow:x};return y==="modal"?a.openSignIn({..._,appearance:o,getContainer:l}):a.redirectToSignIn({..._,signInFallbackRedirectUrl:m,signInForceRedirectUrl:f})},P={...R,onClick:async _=>(D&&typeof D=="object"&&"props"in D&&await mi(D.props.onClick)(_),A())};return ne.cloneElement(D,P)},{component:"SignInButton",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{redirectUrl:o,getContainer:l,component:p,...g}=s;r=gi(r,"Sign in with Metamask");const f=hi(r)("SignInWithMetamaskButton"),m=async()=>{async function b(){await a.authenticateWithMetamask({redirectUrl:o||void 0})}b()},y={...g,onClick:async b=>(await mi(f.props.onClick)(b),m())};return ne.cloneElement(f,y)},{component:"SignInWithMetamask",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{redirectUrl:o="/",sessionId:l,signOutOptions:p,getContainer:g,component:f,...m}=s;p&&tc("SignOutButton `signOutOptions`","Use the `redirectUrl` and `sessionId` props directly instead."),r=gi(r,"Sign out");const u=hi(r)("SignOutButton"),y=()=>a.signOut({redirectUrl:o,...l!==void 0&&{sessionId:l},...p}),v={...m,onClick:async x=>(await mi(u.props.onClick)(x),y())};return ne.cloneElement(u,v)},{component:"SignOutButton",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{appearance:o,unsafeMetadata:l,getContainer:p,component:g,fallbackRedirectUrl:f,forceRedirectUrl:m,signInFallbackRedirectUrl:u,signInForceRedirectUrl:y,mode:b,initialValues:v,oauthFlow:x,...R}=s;r=gi(r,"Sign up");const D=hi(r)("SignUpButton"),A=()=>{const _={fallbackRedirectUrl:f,forceRedirectUrl:m,signInFallbackRedirectUrl:u,signInForceRedirectUrl:y,initialValues:v,oauthFlow:x};return b==="modal"?a.openSignUp({..._,appearance:o,unsafeMetadata:l,getContainer:p}):a.redirectToSignUp({..._,signUpFallbackRedirectUrl:f,signUpForceRedirectUrl:m})},P={...R,onClick:async _=>(D&&typeof D=="object"&&"props"in D&&await mi(D.props.onClick)(_),A())};return ne.cloneElement(D,P)},{component:"SignUpButton",renderWhileLoading:!0});vx({packageName:"@clerk/react"});Kx("@clerk/react");var Tu={exports:{}};const zs=a=>({...a,__type:"prebuilt_appearance"}),t1=Object.freeze(Object.defineProperty({__proto__:null,experimental_createTheme:zs},Symbol.toStringTag,{value:"Module"})),a1=zy(t1),hb=zs({name:"dark",variables:{colorBackground:"#212126",colorNeutral:"white",colorPrimary:"#ffffff",colorPrimaryForeground:"black",colorForeground:"white",colorInputForeground:"white",colorInput:"#26262B"},elements:{providerIcon__apple:{filter:"invert(1)"},providerIcon__github:{filter:"invert(1)"},providerIcon__okx_wallet:{filter:"invert(1)"},providerIcon__vercel:{filter:"invert(1)"},activeDeviceIcon:{"--cl-chassis-bottom":"#d2d2d2","--cl-chassis-back":"#e6e6e6","--cl-chassis-screen":"#e6e6e6","--cl-screen":"#111111"}}}),n1=zs({name:"shadesOfPurple",baseTheme:hb,variables:{colorBackground:"#3f3c77",colorPrimary:"#f8d80d",colorPrimaryForeground:"#38375f",colorInputForeground:"#a1fdfe",colorShimmer:"rgba(161,253,254,0.36)"}}),br={boxShadow:"3px 3px 0px #000",border:"2px solid #000","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:active":{boxShadow:"2px 2px 0px #000",transform:"translate(1px)"}},Br={boxShadow:"3px 3px 0px #000",border:"2px solid #000"},r1=zs({name:"neobrutalism",simpleStyles:!0,variables:{colorPrimary:"#DF1B1B",colorShimmer:"rgba(255,255,255,0.64)",fontWeight:{normal:500,medium:600,bold:700}},elements:{cardBox:{boxShadow:"7px 7px 0px #000",border:"3px solid #000"},card:{borderRadius:"0"},headerSubtitle:{color:"#212126"},alternativeMethodsBlockButton:br,socialButtonsIconButton:{...br},selectButton:{...br,...Br,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"}},socialButtonsBlockButton:{...br,color:"#212126"},profileSectionPrimaryButton:br,profileSectionItem:{color:"#212126"},avatarImageActionsUpload:br,menuButton:Br,menuList:Br,formButtonPrimary:br,navbarButton:br,formFieldAction:{fontWeight:"700"},formFieldInput:{...Br,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:hover":{...Br,transform:"scale(1.01)"}},table:Br,tableHead:{color:"#212126"},dividerLine:{background:"#000"},dividerText:{fontWeight:"700",color:"#212126"},footer:{background:"#fff","& div":{color:"#212126"}},footerActionText:{color:"#212126"},footerActionLink:{fontWeight:"700",borderBottom:"3px solid","&:focus":{boxShadow:"none"}},actionCard:{...Br},badge:{border:"1px solid #000",background:"#fff",color:"#212126"}}}),s1=zs({name:"shadcn",cssLayerName:"components",variables:{colorBackground:"var(--card)",colorDanger:"var(--destructive)",colorForeground:"var(--card-foreground)",colorInput:"var(--input)",colorInputForeground:"var(--card-foreground)",colorModalBackdrop:"var(--color-black)",colorMuted:"var(--muted)",colorMutedForeground:"var(--muted-foreground)",colorNeutral:"var(--foreground)",colorPrimary:"var(--primary)",colorPrimaryForeground:"var(--primary-foreground)",colorRing:"var(--ring)",fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",semibold:"var(--font-weight-semibold)",bold:"var(--font-weight-semibold)"}},elements:{input:"bg-transparent dark:bg-input/30",cardBox:"shadow-sm border",popoverBox:"shadow-sm border",button:{'&[data-variant="solid"]::after':{display:"none"}},providerIcon__apple:"dark:invert",providerIcon__github:"dark:invert",providerIcon__okx_wallet:"dark:invert",providerIcon__vercel:"dark:invert"}}),o1=zs({name:"simple",simpleStyles:!0}),i1=Object.freeze(Object.defineProperty({__proto__:null,dark:hb,experimental__simple:o1,neobrutalism:r1,shadcn:s1,shadesOfPurple:n1},Symbol.toStringTag,{value:"Module"})),l1=zy(i1);var Gm;function c1(){return Gm||(Gm=1,(function(a){var r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,p=(u,y,b,v)=>{if(y&&typeof y=="object"||typeof y=="function")for(let x of o(y))!l.call(u,x)&&x!==b&&r(u,x,{get:()=>y[x],enumerable:!(v=s(y,x))||v.enumerable});return u},g=(u,y,b)=>(p(u,y,"default"),b&&p(b,y,"default")),f=u=>p(r({},"__esModule",{value:!0}),u),m={};a.exports=f(m),g(m,a1,a.exports),g(m,l1,a.exports)})(Tu)),Tu.exports}c1();function Wm(a){if(a instanceof Error)return a;if(typeof a=="string")return new Error(a);try{return new Error(JSON.stringify(a))}catch{return new Error(String(a))}}function d1({error:a,resetError:r}){return c.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50 p-6",children:c.jsxs("div",{className:"max-w-lg w-full text-center",children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Something went wrong"}),c.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"This part of the app hit an error. The rest of the app is still running."}),null,c.jsx("button",{type:"button",onClick:r,className:"mt-4 rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700",children:"Try again"})]})})}class u1 extends q.Component{state={error:null};static getDerivedStateFromError(r){return{error:Wm(r)}}componentDidCatch(r,s){console.error("ErrorBoundary caught an error:",Wm(r),s.componentStack)}componentDidUpdate(r){this.state.error!==null&&r.resetKey!==this.props.resetKey&&this.resetError()}resetError=()=>{this.setState({error:null})};render(){const{error:r}=this.state;if(r===null)return this.props.children;const s=this.props.FallbackComponent??d1;return c.jsx(s,{error:r,resetError:this.resetError})}}function p1({showLocalChip:a=!0}){const[r,s]=q.useState(""),[,o]=eb(),l=p=>{p.preventDefault(),r&&o(`/workspace/${r}`)};return c.jsxs("main",{className:"chooser-page",children:[c.jsxs("header",{className:"chooser-top",children:[c.jsxs(da,{href:"/",className:"studio-wordmark","aria-label":"Mapping Studio home","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),a&&c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Browser-local workspace"]})]}),c.jsxs("section",{className:"chooser-content","aria-labelledby":"chooser-title",children:[c.jsxs("div",{className:"chooser-intro",children:[c.jsx("div",{className:"eyebrow",children:"Engineering workspace"}),c.jsx("h1",{id:"chooser-title",children:"Choose a discipline"}),c.jsx("p",{children:"Keep drawing groups organized and traceable on this device."})]}),c.jsxs("form",{className:"discipline-picker",onSubmit:l,"data-testid":"form-discipline-picker",children:[c.jsxs("div",{className:"discipline-field",children:[c.jsx("label",{htmlFor:"discipline-select",children:"Drawing type"}),c.jsxs("div",{className:"discipline-select-control",children:[c.jsxs("select",{id:"discipline-select",value:r,onChange:p=>s(p.target.value),"aria-label":"Drawing type","data-testid":"select-discipline",children:[c.jsx("option",{value:"",disabled:!0,children:"Select PFD or P&ID"}),c.jsx("option",{value:"pfd",children:"PFD — Process Flow Diagram"}),c.jsx("option",{value:"pid",children:"P&ID — Piping and Instrumentation Diagram"})]}),c.jsx(xr,{size:17,"aria-hidden":"true"})]})]}),c.jsxs("button",{className:"btn primary discipline-submit",type:"submit",disabled:!r,"data-testid":"button-open-discipline",children:["Open workspace ",c.jsx(VE,{size:16,"aria-hidden":"true"})]})]}),c.jsxs("div",{className:"chooser-foot",children:[c.jsx(Xn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Stored in this browser only."})," Nothing is uploaded or shared."]})]})]}),c.jsxs("footer",{className:"chooser-footer",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:"PDFs and project data stay in this browser"}),c.jsx("span",{children:"© 2026 gaurav.cbiindia"})]})]})}function f1(){return c.jsx("main",{className:"chooser-page not-found",children:c.jsxs("div",{className:"not-found-card",children:[c.jsx("div",{className:"eyebrow",children:"Page not found"}),c.jsx("h1",{children:"This workspace does not exist."}),c.jsx(da,{href:"/",className:"btn primary","data-testid":"link-not-found-home",children:"Return to disciplines"})]})})}const Cp="pid-mapping-studio:hierarchies:v2",gb="pid-mapping-studio:hierarchies:v1",Fl=80,h1=128,g1=5e3,m1=64;class ai extends Error{rawValue;constructor(r,s=null){super(r),this.name="HierarchyLoadError",this.rawValue=s}}function Bu(){return{version:2,pfd:[],pid:[]}}function Np(a,r){return Object.keys(a).length===r.length&&r.every(o=>Object.prototype.hasOwnProperty.call(a,o))}function Bl(a,r,s=new Set){let o=0;const l=(p,g)=>{if(g>m1)return!1;for(const f of p){if(!f||typeof f!="object"||Array.isArray(f))return!1;const m=f;if(!Np(m,r?["id","name","kind","expanded","children"]:["id","name","expanded","children"])||typeof m.id!="string"||m.id.length===0||m.id.length>h1||typeof m.name!="string"||m.name.trim().length===0||m.name!==m.name.trim()||m.name.length>Fl||r&&!["technology","projects","proposals","project","proposal","client","legacy"].includes(String(m.kind))||typeof m.expanded!="boolean"||!Array.isArray(m.children)||s.has(m.id)||(s.add(m.id),o+=1,o>g1||!l(m.children,g+1)))return!1}return!0};return l(a,0)}function Qo(a,r){if(a.kind==="legacy")return(r===null||r==="legacy")&&a.children.every(o=>Qo(o,"legacy"));const s={technology:null,projects:"technology",proposals:"technology",project:"projects",proposal:"proposals",client:"project"};return a.kind==="client"&&r!=="project"&&r!=="proposal"||a.kind!=="client"&&s[a.kind]!==r?!1:a.kind==="technology"?a.children.filter(o=>o.kind==="projects").length===1&&a.children.filter(o=>o.kind==="proposals").length===1&&a.children.every(o=>Qo(o,"technology")):a.kind==="projects"||a.kind==="proposals"?a.children.every(o=>Qo(o,a.kind)):a.kind==="project"||a.kind==="proposal"?a.children.every(o=>Qo(o,a.kind)):a.children.length===0}function mb(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!Np(r,["version","pfd","pid"])||r.version!==2||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const s=new Set;return Bl(r.pfd,!0,s)&&Bl(r.pid,!0,s)&&[...r.pfd,...r.pid].every(o=>Qo(o,null))}function y1(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!Np(r,["version","pfd","pid"])||r.version!==1||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const s=new Set;return Bl(r.pfd,!1,s)&&Bl(r.pid,!1,s)}function zu(a){return a.map(r=>({id:r.id,name:r.name,kind:"legacy",expanded:r.expanded,children:zu(r.children)}))}function b1(a){return{version:2,pfd:zu(a.pfd),pid:zu(a.pid)}}function v1(){let a;try{a=window.localStorage.getItem(Cp),a===null&&(a=window.localStorage.getItem(gb))}catch{throw new ai("Saved groups could not be read from browser storage.")}if(a===null)return Bu();let r;try{r=JSON.parse(a)}catch{throw new ai("Saved group data is not valid JSON.",a)}if(mb(r))return r;if(y1(r))return b1(r);throw new ai("Saved group data is malformed or uses an unsupported format.",a)}function E1(a){if(!mb(a))throw new Error("Groups could not be saved because the hierarchy is invalid.");window.localStorage.setItem(Cp,JSON.stringify(a))}function Pl(a,r,s){return a.map(o=>o.id===r?s(o):{...o,children:Pl(o.children,r,s)})}function yb(a,r){return a.filter(s=>s.id!==r).map(s=>({...s,children:yb(s.children,r)}))}function bb(a,r){return r?a.id===r||a.children.some(s=>bb(s,r)):!1}function Yu(a){return a.reduce((r,s)=>r+1+Yu(s.children),0)}function Hu(a,r){if(!r)return null;for(const s of a){if(s.id===r)return s;const o=Hu(s.children,r);if(o)return o}return null}function vb(a,r,s){return a.flatMap(o=>{const l=r?`${r} / ${o.name}`:o.name;return[...s(o)?[{id:o.id,label:l}]:[],...vb(o.children,l,s)]})}function Eb(a){return vb(a,"",r=>r.kind==="client"||r.kind==="legacy")}const w1="modulepreload",x1=function(a){return"/pid-mapping-studio-app/"+a},Km={},sn=function(r,s,o){let l=Promise.resolve();if(s&&s.length>0){let m=function(u){return Promise.all(u.map(y=>Promise.resolve(y).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),f=g?.nonce||g?.getAttribute("nonce");l=m(s.map(u=>{if(u=x1(u),u in Km)return;Km[u]=!0;const y=u.endsWith(".css"),b=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${b}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":w1,y||(v.as="script"),v.crossOrigin="",v.href=u,f&&v.setAttribute("nonce",f),document.head.appendChild(v),y)return new Promise((x,R)=>{v.addEventListener("load",x),v.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function p(g){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=g,window.dispatchEvent(f),!f.defaultPrevented)throw g}return l.then(g=>{for(const f of g||[])f.status==="rejected"&&p(f.reason);return r().catch(p)})};async function S1(){const[a,r]=await Promise.all([sn(()=>import("./pdf-TYrZqVzP.js"),[]),sn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);return a.GlobalWorkerOptions.workerSrc=r.default,a}function T1({fileId:a,alias:r,pageCount:s,page:o,onPageChange:l,loadBytes:p,markers:g=[],onMarkerClick:f}){const m=q.useRef(null),u=q.useRef(null),[y,b]=q.useState(0),[v,x]=q.useState("loading"),[R,D]=q.useState(0),A=q.useRef(p);return A.current=p,q.useEffect(()=>{const S=u.current;if(!S)return;b(S.clientWidth);const P=new ResizeObserver(()=>b(Math.round(S.clientWidth/24)*24));return P.observe(S),()=>P.disconnect()},[]),q.useEffect(()=>{if(!y)return;let S=!1,P=null,_=null;return x("loading"),(async()=>{try{const[N,w]=await Promise.all([S1(),A.current(a)]);if(S)return;_=N.getDocument({data:new Uint8Array(w.slice(0))});const k=await _.promise;if(S)return;const C=await k.getPage(Math.min(Math.max(o,1),k.numPages)),L=C.getViewport({scale:1}),B=Math.min(window.devicePixelRatio||1,2),ee=y/L.width*B,X=C.getViewport({scale:ee}),ae=m.current;if(!ae||S)return;ae.width=Math.floor(X.width),ae.height=Math.floor(X.height),ae.style.width="100%";const we=C.render({canvas:ae,canvasContext:ae.getContext("2d"),viewport:X});P=we,await we.promise,S||x("ready")}catch(N){if(S||N?.name==="RenderingCancelledException")return;x("error")}})(),()=>{S=!0,P?.cancel(),_?.destroy().catch(()=>{})}},[a,o,y,R]),c.jsxs("div",{className:"ppv","data-testid":"panel-source-preview",children:[c.jsxs("div",{className:"ppv-bar",children:[c.jsx("span",{className:"ppv-label","data-testid":"text-preview-label",children:"Original source PDF · not generated CAD"}),c.jsxs("div",{className:"ppv-nav",children:[c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Previous page",disabled:o<=1,onClick:()=>l(o-1),"data-testid":"button-preview-prev",children:c.jsx(Gy,{size:15})}),c.jsxs("span",{"data-testid":"text-preview-page","aria-live":"polite",children:[r," · page ",o," of ",s]}),c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Next page",disabled:o>=s,onClick:()=>l(o+1),"data-testid":"button-preview-next",children:c.jsx(xp,{size:15})})]})]}),c.jsxs("div",{className:"ppv-stage",ref:u,children:[c.jsxs("div",{className:"ppv-canvas-wrap",style:{visibility:v==="ready"?"visible":"hidden"},children:[c.jsx("canvas",{ref:m,"aria-label":`Original source page ${o} of ${r}`,"data-testid":"canvas-source-preview"}),v==="ready"&&g.length>0&&c.jsx("div",{className:"ppv-markers","aria-label":"Extracted tag source locations",children:g.map((S,P)=>c.jsx("button",{className:"ppv-marker",type:"button",style:{left:`${S.location.x*100}%`,top:`${S.location.y*100}%`,width:`${Math.max(S.location.width*100,1.1)}%`,height:`${Math.max(S.location.height*100,1.2)}%`},"aria-label":`OCR location for ${S.label}; verify against the PDF`,title:`${S.label} · OCR candidate location`,onClick:()=>f?.(S.id),"data-testid":`marker-source-${S.id}-${P}`,children:c.jsx("span",{children:S.label})},`${S.id}-${S.location.pageNumber}-${P}`))})]}),g.length>0&&c.jsx("div",{className:"ppv-marker-note",role:"note",children:"Red boxes show OCR candidate locations. Confirm each tag against the original PDF."}),v==="loading"&&c.jsxs("div",{className:"ppv-overlay",role:"status","data-testid":"status-preview-loading",children:[c.jsx(Ra,{size:18,className:"pdf-spin"})," Rendering page"]}),v==="error"&&c.jsxs("div",{className:"ppv-overlay ppv-error",role:"alert","data-testid":"status-preview-error",children:[c.jsx(Sr,{size:18})," This page could not be shown.",c.jsx("button",{type:"button",className:"btn",onClick:()=>D(S=>S+1),"data-testid":"button-preview-retry",children:"Try again"})]})]})]})}var Yt=Uint8Array,Ba=Uint16Array,Rp=Int32Array,ac=new Yt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),nc=new Yt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Vu=new Yt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wb=function(a,r){for(var s=new Ba(31),o=0;o<31;++o)s[o]=r+=1<<a[o-1];for(var l=new Rp(s[30]),o=1;o<30;++o)for(var p=s[o];p<s[o+1];++p)l[p]=p-s[o]<<5|o;return{b:s,r:l}},xb=wb(ac,2),Sb=xb.b,Xu=xb.r;Sb[28]=258,Xu[258]=28;var Tb=wb(nc,0),A1=Tb.b,Zm=Tb.r,Gu=new Ba(32768);for(var Tt=0;Tt<32768;++Tt){var vr=(Tt&43690)>>1|(Tt&21845)<<1;vr=(vr&52428)>>2|(vr&13107)<<2,vr=(vr&61680)>>4|(vr&3855)<<4,Gu[Tt]=((vr&65280)>>8|(vr&255)<<8)>>1}var wn=(function(a,r,s){for(var o=a.length,l=0,p=new Ba(r);l<o;++l)a[l]&&++p[a[l]-1];var g=new Ba(r);for(l=1;l<r;++l)g[l]=g[l-1]+p[l-1]<<1;var f;if(s){f=new Ba(1<<r);var m=15-r;for(l=0;l<o;++l)if(a[l])for(var u=l<<4|a[l],y=r-a[l],b=g[a[l]-1]++<<y,v=b|(1<<y)-1;b<=v;++b)f[Gu[b]>>m]=u}else for(f=new Ba(o),l=0;l<o;++l)a[l]&&(f[l]=Gu[g[a[l]-1]++]>>15-a[l]);return f}),Tr=new Yt(288);for(var Tt=0;Tt<144;++Tt)Tr[Tt]=8;for(var Tt=144;Tt<256;++Tt)Tr[Tt]=9;for(var Tt=256;Tt<280;++Tt)Tr[Tt]=7;for(var Tt=280;Tt<288;++Tt)Tr[Tt]=8;var ii=new Yt(32);for(var Tt=0;Tt<32;++Tt)ii[Tt]=5;var D1=wn(Tr,9,0),C1=wn(Tr,9,1),N1=wn(ii,5,0),R1=wn(ii,5,1),Au=function(a){for(var r=a[0],s=1;s<a.length;++s)a[s]>r&&(r=a[s]);return r},rn=function(a,r,s){var o=r/8|0;return(a[o]|a[o+1]<<8)>>(r&7)&s},Du=function(a,r){var s=r/8|0;return(a[s]|a[s+1]<<8|a[s+2]<<16)>>(r&7)},kp=function(a){return(a+7)/8|0},vi=function(a,r,s){return(r==null||r<0)&&(r=0),(s==null||s>a.length)&&(s=a.length),new Yt(a.subarray(r,s))},k1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ya=function(a,r,s){var o=new Error(r||k1[a]);if(o.code=a,Error.captureStackTrace&&Error.captureStackTrace(o,ya),!s)throw o;return o},_1=function(a,r,s,o){var l=a.length,p=o?o.length:0;if(!l||r.f&&!r.l)return s||new Yt(0);var g=!s,f=g||r.i!=2,m=r.i;g&&(s=new Yt(l*3));var u=function(ot){var dt=s.length;if(ot>dt){var Mt=new Yt(Math.max(dt*2,ot));Mt.set(s),s=Mt}},y=r.f||0,b=r.p||0,v=r.b||0,x=r.l,R=r.d,D=r.m,A=r.n,S=l*8;do{if(!x){y=rn(a,b,1);var P=rn(a,b+1,3);if(b+=3,P)if(P==1)x=C1,R=R1,D=9,A=5;else if(P==2){var k=rn(a,b,31)+257,C=rn(a,b+10,15)+4,L=k+rn(a,b+5,31)+1;b+=14;for(var B=new Yt(L),ee=new Yt(19),X=0;X<C;++X)ee[Vu[X]]=rn(a,b+X*3,7);b+=C*3;for(var ae=Au(ee),we=(1<<ae)-1,ue=wn(ee,ae,1),X=0;X<L;){var ce=ue[rn(a,b,we)];b+=ce&15;var _=ce>>4;if(_<16)B[X++]=_;else{var Y=0,Q=0;for(_==16?(Q=3+rn(a,b,3),b+=2,Y=B[X-1]):_==17?(Q=3+rn(a,b,7),b+=3):_==18&&(Q=11+rn(a,b,127),b+=7);Q--;)B[X++]=Y}}var me=B.subarray(0,k),xe=B.subarray(k);D=Au(me),A=Au(xe),x=wn(me,D,1),R=wn(xe,A,1)}else ya(1);else{var _=kp(b)+4,N=a[_-4]|a[_-3]<<8,w=_+N;if(w>l){m&&ya(0);break}f&&u(v+N),s.set(a.subarray(_,w),v),r.b=v+=N,r.p=b=w*8,r.f=y;continue}if(b>S){m&&ya(0);break}}f&&u(v+131072);for(var j=(1<<D)-1,te=(1<<A)-1,U=b;;U=b){var Y=x[Du(a,b)&j],V=Y>>4;if(b+=Y&15,b>S){m&&ya(0);break}if(Y||ya(2),V<256)s[v++]=V;else if(V==256){U=b,x=null;break}else{var oe=V-254;if(V>264){var X=V-257,de=ac[X];oe=rn(a,b,(1<<de)-1)+Sb[X],b+=de}var ve=R[Du(a,b)&te],qe=ve>>4;ve||ya(3),b+=ve&15;var xe=A1[qe];if(qe>3){var de=nc[qe];xe+=Du(a,b)&(1<<de)-1,b+=de}if(b>S){m&&ya(0);break}f&&u(v+131072);var Le=v+oe;if(v<xe){var mt=p-xe,nt=Math.min(xe,Le);for(mt+v<0&&ya(3);v<nt;++v)s[v]=o[mt+v]}for(;v<Le;++v)s[v]=s[v-xe]}}r.l=x,r.p=U,r.b=v,r.f=y,x&&(y=1,r.m=D,r.d=R,r.n=A)}while(!y);return v!=s.length&&g?vi(s,0,v):s.subarray(0,v)},Bn=function(a,r,s){s<<=r&7;var o=r/8|0;a[o]|=s,a[o+1]|=s>>8},Fo=function(a,r,s){s<<=r&7;var o=r/8|0;a[o]|=s,a[o+1]|=s>>8,a[o+2]|=s>>16},Cu=function(a,r){for(var s=[],o=0;o<a.length;++o)a[o]&&s.push({s:o,f:a[o]});var l=s.length,p=s.slice();if(!l)return{t:Db,l:0};if(l==1){var g=new Yt(s[0].s+1);return g[s[0].s]=1,{t:g,l:1}}s.sort(function(w,k){return w.f-k.f}),s.push({s:-1,f:25001});var f=s[0],m=s[1],u=0,y=1,b=2;for(s[0]={s:-1,f:f.f+m.f,l:f,r:m};y!=l-1;)f=s[s[u].f<s[b].f?u++:b++],m=s[u!=y&&s[u].f<s[b].f?u++:b++],s[y++]={s:-1,f:f.f+m.f,l:f,r:m};for(var v=p[0].s,o=1;o<l;++o)p[o].s>v&&(v=p[o].s);var x=new Ba(v+1),R=Wu(s[y-1],x,0);if(R>r){var o=0,D=0,A=R-r,S=1<<A;for(p.sort(function(k,C){return x[C.s]-x[k.s]||k.f-C.f});o<l;++o){var P=p[o].s;if(x[P]>r)D+=S-(1<<R-x[P]),x[P]=r;else break}for(D>>=A;D>0;){var _=p[o].s;x[_]<r?D-=1<<r-x[_]++-1:++o}for(;o>=0&&D;--o){var N=p[o].s;x[N]==r&&(--x[N],++D)}R=r}return{t:new Yt(x),l:R}},Wu=function(a,r,s){return a.s==-1?Math.max(Wu(a.l,r,s+1),Wu(a.r,r,s+1)):r[a.s]=s},Qm=function(a){for(var r=a.length;r&&!a[--r];);for(var s=new Ba(++r),o=0,l=a[0],p=1,g=function(m){s[o++]=m},f=1;f<=r;++f)if(a[f]==l&&f!=r)++p;else{if(!l&&p>2){for(;p>138;p-=138)g(32754);p>2&&(g(p>10?p-11<<5|28690:p-3<<5|12305),p=0)}else if(p>3){for(g(l),--p;p>6;p-=6)g(8304);p>2&&(g(p-3<<5|8208),p=0)}for(;p--;)g(l);p=1,l=a[f]}return{c:s.subarray(0,o),n:r}},Bo=function(a,r){for(var s=0,o=0;o<r.length;++o)s+=a[o]*r[o];return s},Ab=function(a,r,s){var o=s.length,l=kp(r+2);a[l]=o&255,a[l+1]=o>>8,a[l+2]=a[l]^255,a[l+3]=a[l+1]^255;for(var p=0;p<o;++p)a[l+p+4]=s[p];return(l+4+o)*8},Jm=function(a,r,s,o,l,p,g,f,m,u,y){Bn(r,y++,s),++l[256];for(var b=Cu(l,15),v=b.t,x=b.l,R=Cu(p,15),D=R.t,A=R.l,S=Qm(v),P=S.c,_=S.n,N=Qm(D),w=N.c,k=N.n,C=new Ba(19),L=0;L<P.length;++L)++C[P[L]&31];for(var L=0;L<w.length;++L)++C[w[L]&31];for(var B=Cu(C,7),ee=B.t,X=B.l,ae=19;ae>4&&!ee[Vu[ae-1]];--ae);var we=u+5<<3,ue=Bo(l,Tr)+Bo(p,ii)+g,ce=Bo(l,v)+Bo(p,D)+g+14+3*ae+Bo(C,ee)+2*C[16]+3*C[17]+7*C[18];if(m>=0&&we<=ue&&we<=ce)return Ab(r,y,a.subarray(m,m+u));var Y,Q,me,xe;if(Bn(r,y,1+(ce<ue)),y+=2,ce<ue){Y=wn(v,x,0),Q=v,me=wn(D,A,0),xe=D;var j=wn(ee,X,0);Bn(r,y,_-257),Bn(r,y+5,k-1),Bn(r,y+10,ae-4),y+=14;for(var L=0;L<ae;++L)Bn(r,y+3*L,ee[Vu[L]]);y+=3*ae;for(var te=[P,w],U=0;U<2;++U)for(var V=te[U],L=0;L<V.length;++L){var oe=V[L]&31;Bn(r,y,j[oe]),y+=ee[oe],oe>15&&(Bn(r,y,V[L]>>5&127),y+=V[L]>>12)}}else Y=D1,Q=Tr,me=N1,xe=ii;for(var L=0;L<f;++L){var de=o[L];if(de>255){var oe=de>>18&31;Fo(r,y,Y[oe+257]),y+=Q[oe+257],oe>7&&(Bn(r,y,de>>23&31),y+=ac[oe]);var ve=de&31;Fo(r,y,me[ve]),y+=xe[ve],ve>3&&(Fo(r,y,de>>5&8191),y+=nc[ve])}else Fo(r,y,Y[de]),y+=Q[de]}return Fo(r,y,Y[256]),y+Q[256]},L1=new Rp([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Db=new Yt(0),I1=function(a,r,s,o,l,p){var g=p.z||a.length,f=new Yt(o+g+5*(1+Math.ceil(g/7e3))+l),m=f.subarray(o,f.length-l),u=p.l,y=(p.r||0)&7;if(r){y&&(m[0]=p.r>>3);for(var b=L1[r-1],v=b>>13,x=b&8191,R=(1<<s)-1,D=p.p||new Ba(32768),A=p.h||new Ba(R+1),S=Math.ceil(s/3),P=2*S,_=function(yt){return(a[yt]^a[yt+1]<<S^a[yt+2]<<P)&R},N=new Rp(25e3),w=new Ba(288),k=new Ba(32),C=0,L=0,B=p.i||0,ee=0,X=p.w||0,ae=0;B+2<g;++B){var we=_(B),ue=B&32767,ce=A[we];if(D[ue]=ce,A[we]=ue,X<=B){var Y=g-B;if((C>7e3||ee>24576)&&(Y>423||!u)){y=Jm(a,m,0,N,w,k,L,ee,ae,B-ae,y),ee=C=L=0,ae=B;for(var Q=0;Q<286;++Q)w[Q]=0;for(var Q=0;Q<30;++Q)k[Q]=0}var me=2,xe=0,j=x,te=ue-ce&32767;if(Y>2&&we==_(B-te))for(var U=Math.min(v,Y)-1,V=Math.min(32767,B),oe=Math.min(258,Y);te<=V&&--j&&ue!=ce;){if(a[B+me]==a[B+me-te]){for(var de=0;de<oe&&a[B+de]==a[B+de-te];++de);if(de>me){if(me=de,xe=te,de>U)break;for(var ve=Math.min(te,de-2),qe=0,Q=0;Q<ve;++Q){var Le=B-te+Q&32767,mt=D[Le],nt=Le-mt&32767;nt>qe&&(qe=nt,ce=Le)}}}ue=ce,ce=D[ue],te+=ue-ce&32767}if(xe){N[ee++]=268435456|Xu[me]<<18|Zm[xe];var ot=Xu[me]&31,dt=Zm[xe]&31;L+=ac[ot]+nc[dt],++w[257+ot],++k[dt],X=B+me,++C}else N[ee++]=a[B],++w[a[B]]}}for(B=Math.max(B,X);B<g;++B)N[ee++]=a[B],++w[a[B]];y=Jm(a,m,u,N,w,k,L,ee,ae,B-ae,y),u||(p.r=y&7|m[y/8|0]<<3,y-=7,p.h=A,p.p=D,p.i=B,p.w=X)}else{for(var B=p.w||0;B<g+u;B+=65535){var Mt=B+65535;Mt>=g&&(m[y/8|0]=u,Mt=g),y=Ab(m,y+1,a.subarray(B,Mt))}p.i=g}return vi(f,0,o+kp(y)+l)},P1=(function(){for(var a=new Int32Array(256),r=0;r<256;++r){for(var s=r,o=9;--o;)s=(s&1&&-306674912)^s>>>1;a[r]=s}return a})(),j1=function(){var a=-1;return{p:function(r){for(var s=a,o=0;o<r.length;++o)s=P1[s&255^r[o]]^s>>>8;a=s},d:function(){return~a}}},O1=function(a,r,s,o,l){if(!l&&(l={l:1},r.dictionary)){var p=r.dictionary.subarray(-32768),g=new Yt(p.length+a.length);g.set(p),g.set(a,p.length),a=g,l.w=p.length}return I1(a,r.level==null?6:r.level,r.mem==null?l.l?Math.ceil(Math.max(8,Math.min(13,Math.log(a.length)))*1.5):20:12+r.mem,s,o,l)},Cb=function(a,r){var s={};for(var o in a)s[o]=a[o];for(var o in r)s[o]=r[o];return s},vn=function(a,r){return a[r]|a[r+1]<<8},Ja=function(a,r){return(a[r]|a[r+1]<<8|a[r+2]<<16|a[r+3]<<24)>>>0},Nu=function(a,r){return Ja(a,r)+Ja(a,r+4)*4294967296},ca=function(a,r,s){for(;s;++r)a[r]=s,s>>>=8};function q1(a,r){return O1(a,r||{},0,0)}function M1(a,r){return _1(a,{i:2},r&&r.out,r&&r.dictionary)}var Nb=function(a,r,s,o){for(var l in a){var p=a[l],g=r+l,f=o;Array.isArray(p)&&(f=Cb(o,p[1]),p=p[0]),ArrayBuffer.isView(p)?s[g]=[p,f]:(s[g+="/"]=[new Yt(0),f],Nb(p,g,s,o))}},ey=typeof TextEncoder<"u"&&new TextEncoder,Ku=typeof TextDecoder<"u"&&new TextDecoder,$1=0;try{Ku.decode(Db,{stream:!0}),$1=1}catch{}var U1=function(a){for(var r="",s=0;;){var o=a[s++],l=(o>127)+(o>223)+(o>239);if(s+l>a.length)return{s:r,r:vi(a,s-1)};l?l==3?(o=((o&15)<<18|(a[s++]&63)<<12|(a[s++]&63)<<6|a[s++]&63)-65536,r+=String.fromCharCode(55296|o>>10,56320|o&1023)):l&1?r+=String.fromCharCode((o&31)<<6|a[s++]&63):r+=String.fromCharCode((o&15)<<12|(a[s++]&63)<<6|a[s++]&63):r+=String.fromCharCode(o)}};function Zu(a,r){var s;if(ey)return ey.encode(a);for(var o=a.length,l=new Yt(a.length+(a.length>>1)),p=0,g=function(u){l[p++]=u},s=0;s<o;++s){if(p+5>l.length){var f=new Yt(p+8+(o-s<<1));f.set(l),l=f}var m=a.charCodeAt(s);m<128||r?g(m):m<2048?(g(192|m>>6),g(128|m&63)):m>55295&&m<57344?(m=65536+(m&1047552)|a.charCodeAt(++s)&1023,g(240|m>>18),g(128|m>>12&63),g(128|m>>6&63),g(128|m&63)):(g(224|m>>12),g(128|m>>6&63),g(128|m&63))}return vi(l,0,p)}function F1(a,r){if(r){for(var s="",o=0;o<a.length;o+=16384)s+=String.fromCharCode.apply(null,a.subarray(o,o+16384));return s}else{if(Ku)return Ku.decode(a);var l=U1(a),p=l.s,s=l.r;return s.length&&ya(8),p}}var B1=function(a,r){return r+30+vn(a,r+26)+vn(a,r+28)},z1=function(a,r,s){var o=vn(a,r+28),l=vn(a,r+30),p=F1(a.subarray(r+46,r+46+o),!(vn(a,r+8)&2048)),g=r+46+o,f=Y1(a,g,l,s,Ja(a,r+20),Ja(a,r+24),Ja(a,r+42)),m=f[0],u=f[1],y=f[2];return[vn(a,r+10),m,u,p,g+l+vn(a,r+32),y]},Y1=function(a,r,s,o,l,p,g){var f=l==4294967295,m=p==4294967295,u=g==4294967295,y=r+s,b=f+m+u;if(o&&b){for(;r+4<y;r+=4+vn(a,r+2))if(vn(a,r)==1)return[f?Nu(a,r+4+8*m):l,m?Nu(a,r+4):p,u?Nu(a,r+4+8*(m+f)):g,1];o<2&&ya(13)}return[l,p,g,0]},Qu=function(a){var r=0;if(a)for(var s in a){var o=a[s].length;o>65535&&ya(9),r+=o+4}return r},ty=function(a,r,s,o,l,p,g,f){var m=o.length,u=s.extra,y=f&&f.length,b=Qu(u);ca(a,r,g!=null?33639248:67324752),r+=4,g!=null&&(a[r++]=20,a[r++]=s.os),a[r]=20,r+=2,a[r++]=s.flag<<1|(p<0&&8),a[r++]=l&&8,a[r++]=s.compression&255,a[r++]=s.compression>>8;var v=new Date(s.mtime==null?Date.now():s.mtime),x=v.getFullYear()-1980;if((x<0||x>119)&&ya(10),ca(a,r,x<<25|v.getMonth()+1<<21|v.getDate()<<16|v.getHours()<<11|v.getMinutes()<<5|v.getSeconds()>>1),r+=4,p!=-1&&(ca(a,r,s.crc),ca(a,r+4,p<0?-p-2:p),ca(a,r+8,s.size)),ca(a,r+12,m),ca(a,r+14,b),r+=16,g!=null&&(ca(a,r,y),ca(a,r+6,s.attrs),ca(a,r+10,g),r+=14),a.set(o,r),r+=m,b)for(var R in u){var D=u[R],A=D.length;ca(a,r,+R),ca(a,r+2,A),a.set(D,r+4),r+=4+A}return y&&(a.set(f,r),r+=y),r},H1=function(a,r,s,o,l){ca(a,r,101010256),ca(a,r+8,s),ca(a,r+10,s),ca(a,r+12,o),ca(a,r+16,l)};function V1(a,r){r||(r={});var s={},o=[];Nb(a,"",s,r);var l=0,p=0;for(var g in s){var f=s[g],m=f[0],u=f[1],y=u.level==0?0:8,b=Zu(g),v=b.length,x=u.comment,R=x&&Zu(x),D=R&&R.length,A=Qu(u.extra);v>65535&&ya(11);var S=y?q1(m,u):m,P=S.length,_=j1();_.p(m),o.push(Cb(u,{size:m.length,crc:_.d(),c:S,f:b,m:R,u:v!=g.length||R&&x.length!=D,o:l,compression:y})),l+=30+v+A+P,p+=76+2*(v+A)+(D||0)+P}for(var N=new Yt(p+22),w=l,k=p-l,C=0;C<o.length;++C){var b=o[C];ty(N,b.o,b,b.f,b.u,b.c.length);var L=30+b.f.length+Qu(b.extra);N.set(b.c,b.o+L),ty(N,l,b,b.f,b.u,b.c.length,b.o,b.m),l+=16+L+(b.m?b.m.length:0)}return H1(N,l,o.length,k,w),N}function ay(a,r){for(var s={},o=a.length-22;Ja(a,o)!=101010256;--o)(!o||a.length-o>65558)&&ya(13);var l=vn(a,o+8);if(!l)return{};var p=Ja(a,o+16),g=Ja(a,o-20)==117853008;if(g){var f=Ja(a,o-12);g=Ja(a,f)==101075792,g&&(l=Ja(a,f+32),p=Ja(a,f+48))}for(var m=0;m<l;++m){var u=z1(a,p,g),y=u[0],b=u[1],v=u[2],x=u[3],R=u[4],D=u[5],A=B1(a,D);p=R,y?y==8?s[x]=M1(a.subarray(A,A+b),{out:new Yt(v)}):ya(14,"unknown compression type "+y):s[x]=vi(a,A,A+b)}return s}const ny="DIAGNOSTIC_README.txt";function X1(a){return(a.split(/[\\/]/).pop()??"").replace(/[\u0000-\u001f<>:"/\\|?*]/g,"_").trim().replace(/^[. ]+|[. ]+$/g,"")||"diagnostic-file"}function G1(a,r){const s=a.lastIndexOf("."),o=s>0?a.slice(0,s):a,l=s>0?a.slice(s):"";let p=a,g=2;for(;r.has(p.toLocaleLowerCase());)p=`${o}-${g}${l}`,g+=1;return r.add(p.toLocaleLowerCase()),p}function W1(a){if(a.length===0)throw new Error("Add at least one diagnostic file before downloading the ZIP.");const r=Object.create(null),s=new Set([ny.toLocaleLowerCase()]),o=[];return a.forEach((l,p)=>{const g=G1(X1(l.name),s);r[g]=l.bytes,o.push(`${String(p+1).padStart(2,"0")}. ${g} | ${l.bytes.byteLength} bytes | ${l.mimeType||"type not provided"}`)}),r[ny]=Zu(["P&ID Mapping Studio diagnostic bundle","Files were selected locally. The app did not upload them to a server.","","Files included:",...o,""].join(`
`)),V1(r,{level:1})}const K1=200*1024*1024;function ry(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(1)} MB`}function Z1(){const[a,r]=q.useState([]),[s,o]=q.useState(!1),[l,p]=q.useState(""),[g,f]=q.useState(""),m=q.useMemo(()=>a.reduce((v,x)=>v+x.size,0),[a]),u=v=>{if(p(""),f(""),v.length===0)return;const x=new Set(a.map(A=>`${A.name}:${A.size}:${A.lastModified}`)),R=v.filter(A=>{const S=`${A.name}:${A.size}:${A.lastModified}`;return x.has(S)?!1:(x.add(S),!0)});if(m+R.reduce((A,S)=>A+S.size,0)>K1){f("The selected files exceed the 200 MB bundle limit. Remove some files and try again.");return}r(A=>[...A,...R]),R.length<v.length&&p(`${v.length-R.length} duplicate file(s) were skipped.`)},y=v=>{r(x=>x.filter(R=>R!==v)),p(""),f("")},b=async()=>{if(!(a.length===0||s)){o(!0),p(""),f("");try{const v=await Promise.all(a.map(async P=>({name:P.name,mimeType:P.type,bytes:new Uint8Array(await P.arrayBuffer())}))),x=W1(v),R=new Uint8Array(x.byteLength);R.set(x);const D=new Blob([R.buffer],{type:"application/zip"}),A=URL.createObjectURL(D),S=document.createElement("a");S.href=A,S.download="pid-mapping-diagnostics.zip",S.click(),window.setTimeout(()=>URL.revokeObjectURL(A),5e3),p(`ZIP ready with ${a.length} file(s). Attach pid-mapping-diagnostics.zip to the chat.`)}catch(v){f(v instanceof Error?v.message:"The diagnostic ZIP could not be created.")}finally{o(!1)}}};return c.jsxs("section",{className:"diagnostic-upload-panel","aria-labelledby":"diagnostic-upload-title","data-testid":"panel-diagnostic-upload",children:[c.jsxs("div",{className:"diagnostic-upload-heading",children:[c.jsxs("div",{className:"diagnostic-upload-copy",children:[c.jsx("span",{className:"diagnostic-upload-kicker",children:"LOCAL DIAGNOSTICS"}),c.jsx("h3",{id:"diagnostic-upload-title",children:"Share run files"}),c.jsx("p",{children:"Select AutoCAD logs, DXF/DWG, ZIP, JSON, scripts, screenshots, or other files."})]}),c.jsxs("div",{className:"diagnostic-upload-actions",children:[c.jsxs("label",{className:"btn primary diagnostic-upload-select","data-testid":"label-add-diagnostic-files",children:[c.jsx(Xr,{size:16})," Add files",c.jsx("input",{type:"file",multiple:!0,"aria-label":"Choose diagnostic files from this device","data-testid":"input-add-diagnostic-files",onChange:v=>{u(Array.from(v.currentTarget.files??[])),v.currentTarget.value=""}})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:a.length===0||s,"data-testid":"button-download-diagnostic-zip",children:[s?c.jsx(Ra,{size:16,className:"diagnostic-upload-spin"}):c.jsx(wp,{size:16}),s?"Preparing ZIP…":"Download one ZIP"]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{r([]),p(""),f("")},disabled:a.length===0||s,"data-testid":"button-clear-diagnostic-files",children:[c.jsx(oi,{size:15})," Clear"]})]})]}),c.jsxs("div",{className:"diagnostic-upload-privacy","data-testid":"text-diagnostic-local-only",children:[c.jsx(Xn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay on this device."})," Nothing is sent to a server. Download one ZIP, then attach it to the chat to share it."]})]}),c.jsxs("div",{className:"diagnostic-upload-count","data-testid":"text-diagnostic-file-count",children:[a.length," file(s) selected · ",ry(m)," of 200 MB"]}),a.length>0&&c.jsx("ul",{className:"diagnostic-upload-list","aria-label":"Selected diagnostic files","data-testid":"list-diagnostic-files",children:a.map((v,x)=>c.jsxs("li",{"data-testid":`row-diagnostic-file-${x}`,children:[c.jsx(Vn,{size:15,"aria-hidden":"true"}),c.jsx("span",{className:"diagnostic-upload-file-name",title:v.name,children:v.name}),c.jsx("span",{className:"diagnostic-upload-file-size",children:ry(v.size)}),c.jsx("button",{type:"button",className:"diagnostic-upload-remove",onClick:()=>y(v),"aria-label":`Remove ${v.name}`,"data-testid":`button-remove-diagnostic-file-${x}`,children:c.jsx(Fu,{size:16})})]},`${v.name}:${v.size}:${v.lastModified}:${x}`))}),l&&c.jsx("p",{className:"diagnostic-upload-status",role:"status","data-testid":"status-diagnostic-upload",children:l}),g&&c.jsx("p",{className:"diagnostic-upload-error",role:"alert","data-testid":"error-diagnostic-upload",children:g})]})}const Ru="STANDARD",Q1="STANDARD";function J1(a,r,s){const o=a(),l=a(),p=a(),g=a(),f=a(),m=a(),u=a(),y=a(),b=a();function v(w,k,C){const L=a();return w(0,"TABLE"),w(2,k),w(5,L),w(330,"0"),w(100,"AcDbSymbolTable"),w(70,C),L}function x(w,k,C,L,B=a()){return w(0,k),w(k==="DIMSTYLE"?105:5,B),w(330,C),w(100,"AcDbSymbolTableRecord"),w(100,L),B}function R(w){const k=v(w,"VPORT",1);x(w,"VPORT",k,"AcDbViewportTableRecord"),w(2,"*ACTIVE"),w(70,0),w(10,0),w(20,0),w(11,1),w(21,1),w(12,r/2),w(22,s/2),w(13,0),w(23,0),w(14,10),w(24,10),w(15,10),w(25,10),w(16,0),w(26,0),w(36,1),w(17,0),w(27,0),w(37,0),w(40,s*1.1),w(41,r/s),w(42,50),w(43,0),w(44,0),w(50,0),w(51,0),w(71,0),w(72,1e3),w(73,1),w(74,3),w(75,0),w(76,0),w(77,0),w(78,0),w(281,0),w(0,"ENDTAB")}function D(w,k){for(const ee of["VIEW","UCS"])v(w,ee,0),w(0,"ENDTAB");const C=v(w,"APPID",1);x(w,"APPID",C,"AcDbRegAppTableRecord"),w(2,"ACAD"),w(70,0),w(0,"ENDTAB");const L=v(w,"DIMSTYLE",1);w(100,"AcDbDimStyleTable"),w(71,0),x(w,"DIMSTYLE",L,"AcDbDimStyleTableRecord"),w(2,Q1),w(70,0),w(40,1),w(140,2.5),w(340,k),w(0,"ENDTAB");const B=v(w,"BLOCK_RECORD",2);for(const[ee,X,ae]of[["*Model_Space",m,y],["*Paper_Space",u,b]])x(w,"BLOCK_RECORD",B,"AcDbBlockTableRecord",X),w(2,ee),w(340,ae),w(70,4),w(280,1),w(281,0);w(0,"ENDTAB")}function A(w){w(0,"SECTION"),w(2,"BLOCKS");for(const[k,C]of[["*Model_Space",m],["*Paper_Space",u]])w(0,"BLOCK"),w(5,a()),w(330,C),w(100,"AcDbEntity"),w(8,"0"),w(100,"AcDbBlockBegin"),w(2,k),w(70,0),w(10,0),w(20,0),w(30,0),w(3,k),w(1,""),w(0,"ENDBLK"),w(5,a()),w(330,C),w(100,"AcDbEntity"),w(8,"0"),w(100,"AcDbBlockEnd");w(0,"ENDSEC")}function S(w,k,C,L,B=!1){w(0,B?"ACDBDICTIONARYWDFLT":"DICTIONARY"),w(5,k),w(330,C),w(100,"AcDbDictionary"),w(280,0),w(281,1);for(const[ee,X]of L)w(3,ee),w(350,X);B&&(w(100,"AcDbDictionaryWithDefault"),w(340,f))}function P(w,k,C,L,B){w(0,"LAYOUT"),w(5,C),w(330,p),w(100,"AcDbPlotSettings"),w(1,""),w(4,""),w(6,"");for(const ee of[40,41,42,43])w(ee,0);w(44,r),w(45,s);for(const ee of[46,47,48,49,140,141])w(ee,0);w(142,1),w(143,1),w(70,B===0?1024:0),w(72,1),w(73,0),w(74,5),w(7,""),w(75,16),w(76,0),w(77,2),w(78,300),w(147,1),w(148,0),w(149,0),w(100,"AcDbLayout"),w(1,k),w(70,1),w(71,B),w(10,0),w(20,0),w(11,r),w(21,s),w(12,0),w(22,0),w(32,0),w(14,0),w(24,0),w(34,0),w(15,r),w(25,s),w(35,0),w(146,0),w(13,0),w(23,0),w(33,0),w(16,1),w(26,0),w(36,0),w(17,0),w(27,1),w(37,0),w(76,1),w(330,L)}function _(w){w(0,"SECTION"),w(2,"OBJECTS"),S(w,o,"0",[["ACAD_GROUP",l],["ACAD_LAYOUT",p],["ACAD_PLOTSTYLENAME",g]]),S(w,l,o,[]),S(w,p,o,[["Model",y],["Layout1",b]]),S(w,g,o,[["Normal",f]],!0),w(0,"ACDBPLACEHOLDER"),w(5,f),w(330,g),P(w,"Model",y,m,0),P(w,"Layout1",b,u,1),w(0,"ENDSEC")}function N(w){w(0,"SECTION"),w(2,"CLASSES");for(const[k,C,L]of[["LAYOUT","AcDbLayout",2],["ACDBDICTIONARYWDFLT","AcDbDictionaryWithDefault",1],["ACDBPLACEHOLDER","AcDbPlaceHolder",1]])w(0,"CLASS"),w(1,k),w(2,C),w(3,"ObjectDBX Classes"),w(90,0),w(91,L),w(280,0),w(281,0);w(0,"ENDSEC")}return{modelSpace:m,normalPlotStyle:f,beginTable:v,tableRecord:x,writeViewport:R,writeRemainingTables:D,writeBlocks:A,writeObjects:_,writeClasses:N}}function ku(a){if(!Number.isFinite(a))throw new Error("A PDF coordinate is not a finite number.");return Number(a.toFixed(7)).toString()}function eS(a){return a.replace(/[\r\n\t]/g," ").replace(/\\/g,"\\\\").replace(/[^\x20-\x7e]/g,r=>`\\U+${r.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")}`)}const sy=/[<>\/\\":;?*|,=\u0000-\u001f\u007f]/;function Rb(a){const r=a.replace(/^\uFEFF/,"").split(/\r?\n/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF export rejected: the output does not contain complete group-code/value pairs.");const s=[];for(let o=0;o<r.length;o+=2){const l=Number(r[o].trim());if(!/^\d+$/.test(r[o].trim())||!Number.isInteger(l)||r[o+1]===void 0)throw new Error(`DXF export rejected: malformed group-code/value pair at line ${o+1}.`);s.push({code:l,value:r[o+1]})}if(s.at(-1)?.code!==0||s.at(-1)?.value!=="EOF")throw new Error("DXF export rejected: the output is incomplete (missing EOF).");return s}function tS(a,r,s=0){return!a||a.trim()!==a||a.length>255?!1:r==="BLOCK_RECORD"&&/^\*[A-Za-z0-9_.$-]+$/.test(a)||r==="VPORT"&&a.toUpperCase()==="*ACTIVE"?!0:s&16&&a.includes("|")?a.split("|").every(o=>o.length>0&&!sy.test(o)):!sy.test(a)}function kb(a,r,s,o=[]){const l=new Set;let p=!1,g=!1;for(let f=0;f<a.length;f+=1){const m=a[f];if(m.code===0&&m.value==="SECTION"&&a[f+1]?.code===2&&a[f+1]?.value==="TABLES"){p=!0,g=!0,f+=1;continue}if(!p)continue;if(m.code===0&&m.value==="ENDSEC"){p=!1;continue}if(m.code!==0||m.value!=="TABLE")continue;const u=a[f+1];if(u?.code!==2||!u.value.trim())throw new Error("DXF export rejected: a symbol table has a blank or missing table name.");const y=u.value.toUpperCase();if(l.has(y))throw new Error(`DXF export rejected: the ${y} symbol table is duplicated.`);l.add(y);const b=new Set;let v=f+1;for(;v<a.length&&a[v].code!==0;)v+=1;const x=new Set;for(let A=v;A<a.length&&!(a[A].code===0&&["ENDTAB","ENDSEC"].includes(a[A].value));A+=1)a[A].code===2&&a[A].value.trim()&&x.add(a[A].value.toUpperCase());let R=0,D=!1;for(;v<a.length&&a[v].code===0;){if(a[v].value==="ENDTAB"){D=!0,f=v;break}if(a[v].value==="ENDSEC")break;R+=1;let A=v+1;for(;A<a.length&&a[A].code!==0;)A+=1;if(a[v].value!==y)throw new Error(`DXF export rejected: ${y} contains an unexpected ${a[v].value} record at line ${v*2+2}.`);let S=-1,P=0,_="";for(let L=v+1;L<A;L+=1){if(a[L].code===2){if(S>=0)throw new Error(`DXF export rejected: ${y} record has multiple name fields at line ${L*2+1}.`);S=L}a[L].code===70&&(P=Number(a[L].value)),a[L].code===3&&(_=a[L].value)}const N=S>=0?a[S].value:"",w=!N.trim();let k=N;if(y==="STYLE"&&(P&1)!==0){const L=(S>=0?S:v)*2+2;if(S<0)throw new Error(`DXF export rejected: STYLE shape-file record is missing its group-2 name field at line ${L}.`);if(!_.trim())throw new Error(`DXF export rejected: STYLE shape-file record has no font file in group 3 at line ${L}.`);if(N!==""){if(!r)throw new Error(`DXF export rejected: STYLE shape-file record must have an empty name per DXF format at line ${L}.`);o.push({table:y,line:L,previousName:N,name:""}),a[S].value="",k=""}}else if(w||!tS(N,y,P)){const L=(S>=0?S:v)*2+2;if(!w||!["STYLE","DIMSTYLE"].includes(y))throw new Error(`DXF export rejected: ${y} table record ${R} has ${w?"a blank name":`an invalid name ${JSON.stringify(N)}`} at line ${L}. Correct the source value before exporting.`);if(!r)throw new Error(`DXF export rejected: ${y} table record ${R} still has ${w?"a blank name":"an invalid name"} after repair at line ${L}.`);const B=y==="DIMSTYLE"?"AUTOMATION_DIMSTYLE":"AUTOMATION_TEXTSTYLE";k=B;let ee=2;for(;x.has(k.toUpperCase());)k=`${B}_${ee++}`;if(x.add(k.toUpperCase()),o.push({table:y,line:L,previousName:N,name:k}),S>=0)a[S].value=k;else{let X=v+1;for(;X<A&&[5,105,330,100].includes(a[X].code);)X+=1;s.push({index:X,pair:{code:2,value:k}})}}if(k){const L=k.toUpperCase();if(b.has(L))throw new Error(`DXF export rejected: ${y} table record ${R} duplicates the name ${JSON.stringify(k)}.`);b.add(L)}v=A}if(!D)throw new Error(`DXF export rejected: the ${y} symbol table is missing ENDTAB.`)}if(!g)throw new Error("DXF export rejected: the output has no TABLES section to validate.");if(p)throw new Error("DXF export rejected: TABLES section is missing ENDSEC.");for(const f of["STYLE","DIMSTYLE"])if(!l.has(f))throw new Error(`DXF export rejected: the required ${f} symbol table is missing.`)}function aS(a){return _b(a).dxf}function _b(a){const r=Rb(a),s=[],o=[];kb(r,!0,s,o),s.sort((p,g)=>g.index-p.index);for(const p of s)r.splice(p.index,0,p.pair);const l=`${r.flatMap(({code:p,value:g})=>[String(p),g]).join(`\r
`)}\r
`;return _p(l),{dxf:l,repairs:o}}function _p(a){kb(Rb(a),!1,[])}function nS(a){const r=Number.parseInt(a.replace("#",""),16);return Number.isFinite(r)?r:0}function qA(a,r,s){if(!Number.isFinite(r)||!Number.isFinite(s)||r<=0||s<=0)throw new Error("A DXF page must have positive finite dimensions.");const o=[],l=(S,P)=>o.push(String(S),typeof P=="number"?ku(P):P);let p=256;const g=()=>(p++).toString(16).toUpperCase(),f=J1(g,r,s),m=new Map;for(const S of a)if(S.kind==="polyline"&&S.dash?.some(P=>P>0)){const P=S.dash.map(_=>ku(_)).join(",");m.has(P)||m.set(P,{name:`PDF_DASH_${m.size+1}`,pattern:S.dash})}const u=S=>S.trim()||"0",y=S=>{l(5,g()),l(330,f.modelSpace),l(100,"AcDbEntity"),l(67,0),l(410,"Model"),l(8,u(S.layer));const P=nS(S.color);(P>>16&255)<16&&(P>>8&255)<16&&(P&255)<16?l(62,7):(l(62,256),l(420,P)),S.opacity!==void 0&&S.opacity<1&&l(440,33554432|Math.round(Math.max(0,S.opacity)*255))};f.writeClasses(l),l(0,"SECTION"),l(2,"TABLES"),f.writeViewport(l);const b=f.beginTable(l,"LTYPE",3+m.size);for(const S of["BYBLOCK","BYLAYER","CONTINUOUS"])f.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,S),l(70,0),l(3,S==="CONTINUOUS"?"Solid line":""),l(72,65),l(73,0),l(40,0);for(const{name:S,pattern:P}of m.values()){const _=P.length%2?[...P,...P]:P;f.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,S),l(70,0),l(3,"Source PDF dash pattern"),l(72,65),l(73,_.length),l(40,_.reduce((N,w)=>N+Math.abs(w),0)),_.forEach((N,w)=>{l(49,w%2?-N:N),l(74,0)})}l(0,"ENDTAB");const v=[...new Set(["0",...a.map(S=>u(S.layer))])],x=f.beginTable(l,"LAYER",v.length);for(const S of v)f.tableRecord(l,"LAYER",x,"AcDbLayerTableRecord"),l(2,S),l(70,0),l(62,7),l(6,"CONTINUOUS"),l(290,1),l(370,-3),l(390,f.normalPlotStyle);l(0,"ENDTAB");const R=f.beginTable(l,"STYLE",1),D=f.tableRecord(l,"STYLE",R,"AcDbTextStyleTableRecord");l(2,Ru),l(70,0),l(40,0),l(41,1),l(50,0),l(71,0),l(42,2.5),l(3,"txt.shx"),l(4,""),l(0,"ENDTAB"),f.writeRemainingTables(l,D),l(0,"ENDSEC"),f.writeBlocks(l),l(0,"SECTION"),l(2,"ENTITIES");for(const S of a)if(S.kind==="polyline"){if(S.points.length<2)continue;l(0,"LWPOLYLINE"),y(S),l(370,S.lineWeight);const P=S.dash?.length?m.get(S.dash.map(_=>ku(_)).join(",")):void 0;P&&l(6,P.name),l(100,"AcDbPolyline"),l(90,S.points.length),l(70,(S.closed?1:0)|(P?128:0));for(const _ of S.points)l(10,_.x),l(20,_.y)}else if(S.kind==="hatch"){const P=S.loops.filter(_=>_.length>=3);if(!P.length)continue;l(0,"HATCH"),y(S),l(100,"AcDbHatch"),l(10,0),l(20,0),l(30,0),l(210,0),l(220,0),l(230,1),l(2,"SOLID"),l(70,1),l(71,0),l(91,P.length);for(const _ of P){l(92,2),l(72,0),l(73,1),l(93,_.length);for(const N of _)l(10,N.x),l(20,N.y);l(97,0)}l(75,0),l(76,1),l(98,0)}else{if(!S.text.trim()||!(S.height>0))continue;const P=S.text.match(/[\s\S]{1,180}/g)??[];let _=0;for(const N of P){const w=_/S.text.length,k=(_+N.length)/S.text.length,C={x:S.start.x+(S.end.x-S.start.x)*w,y:S.start.y+(S.end.y-S.start.y)*w},L={x:S.start.x+(S.end.x-S.start.x)*k,y:S.start.y+(S.end.y-S.start.y)*k};l(0,"TEXT"),y(S),l(100,"AcDbText"),l(10,C.x),l(20,C.y),l(30,0),l(40,S.height),l(1,eS(N)),l(50,S.rotation),l(7,Ru),l(72,Math.hypot(L.x-C.x,L.y-C.y)>1e-8?5:0),l(11,L.x),l(21,L.y),l(31,0),l(100,"AcDbText"),l(73,0),_+=N.length}}l(0,"ENDSEC"),f.writeObjects(l),l(0,"EOF");const A=o.splice(0);return l(0,"SECTION"),l(2,"HEADER"),l(9,"$ACADVER"),l(1,"AC1018"),l(9,"$DWGCODEPAGE"),l(3,"ANSI_1252"),l(9,"$HANDSEED"),l(5,p.toString(16).toUpperCase()),l(9,"$INSUNITS"),l(70,4),l(9,"$MEASUREMENT"),l(70,1),l(9,"$INSBASE"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMIN"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMAX"),l(10,r),l(20,s),l(30,0),l(9,"$LIMMIN"),l(10,0),l(20,0),l(9,"$LIMMAX"),l(10,r),l(20,s),l(9,"$TILEMODE"),l(70,1),l(9,"$CTAB"),l(1,"Model"),l(9,"$CLAYER"),l(8,"0"),l(9,"$CELTYPE"),l(6,"BYLAYER"),l(9,"$TEXTSTYLE"),l(7,Ru),l(9,"$CECOLOR"),l(62,256),l(9,"$LTSCALE"),l(40,1),l(9,"$CELTSCALE"),l(40,1),l(9,"$PSLTSCALE"),l(70,0),l(0,"ENDSEC"),aS(`${o.concat(A).join(`\r
`)}\r
`)}const rS=["LTYPE","LAYER","STYLE","APPID","DIMSTYLE","BLOCK_RECORD"];function sS(a){const r=a.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF structural repair rejected: incomplete group-code/value pairs.");const s=[];for(let o=0;o<r.length;o+=2){const l=Number(r[o].trim());if(!/^\d+$/.test(r[o].trim())||!Number.isInteger(l))throw new Error(`DXF structural repair rejected: invalid group code at line ${o+1}.`);s.push({code:l,value:r[o+1]})}return s}function oS(a){return`${a.flatMap(({code:r,value:s})=>[String(r),s]).join(`\r
`)}\r
`}function iS(a){const r=sS(a),s=new Map;let o="",l=-1;for(let D=0;D<r.length;D+=1){const A=r[D];if(A.code===0&&A.value.trim().toUpperCase()==="SECTION"&&r[D+1]?.code===2){o=r[++D].value.trim().toUpperCase();continue}if(A.code===0&&A.value.trim().toUpperCase()==="ENDSEC"){o==="TABLES"&&(l=D),o="";continue}if(o!=="TABLES"||A.code!==0||A.value.trim().toUpperCase()!=="TABLE")continue;const S=r[D+1]?.code===2?r[D+1].value.trim().toUpperCase():"";if(!S)throw new Error("DXF structural repair rejected: a TABLES record has no table name.");let P=D+1;for(;P<r.length&&!(r[P].code===0&&r[P].value.trim().toUpperCase()==="ENDTAB");)P+=1;if(P>=r.length)throw new Error(`DXF structural repair rejected: ${S} table is missing ENDTAB.`);s.set(S,{start:D,end:P,name:S})}if(l<0)throw new Error("DXF structural repair rejected: TABLES section is missing ENDSEC.");for(const D of rS)if(!s.has(D))throw new Error(`DXF structural repair rejected: required ${D} symbol table is missing; re-save the source as a modern ASCII DXF.`);const p=new Set(r.filter(D=>D.code===5||D.code===105).map(D=>D.value.trim().toUpperCase()).filter(D=>/^[0-9A-F]+$/.test(D)));let g=0n;for(const D of p){const A=BigInt(`0x${D}`);A>g&&(g=A)}const f=()=>{do g+=1n;while(p.has(g.toString(16).toUpperCase()));const D=g.toString(16).toUpperCase();return p.add(D),D},m=(...D)=>{const A=[];for(let S=0;S<D.length;S+=2)A.push({code:Number(D[S]),value:String(D[S+1])});return A},u=[],y=D=>m(0,"TABLE",2,D,5,f(),330,"0",100,"AcDbSymbolTable",70,0,0,"ENDTAB"),b=()=>{const D=f();return m(0,"TABLE",2,"VPORT",5,D,330,"0",100,"AcDbSymbolTable",70,1,0,"VPORT",5,f(),330,D,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0,0,"ENDTAB")},v=["VPORT","VIEW","UCS"].filter(D=>!s.has(D));for(const D of v){const A=D==="VPORT"?b():y(D);r.splice(l,0,...A),l+=A.length,u.push(D)}const x=s.get("VPORT");if(x){let D=!1;for(let A=x.start+1;A<x.end;A+=1){if(r[A].code!==0||r[A].value.trim().toUpperCase()!=="VPORT")continue;let S=A+1;for(;S<x.end&&r[S].code!==0;)S+=1;if(r.slice(A,S).some(P=>P.code===2&&P.value.trim().toUpperCase()==="*ACTIVE")){D=!0;break}A=S-1}if(!D){const A=r.findIndex((w,k)=>k>x.start&&k<x.end&&w.code===0),S=r.slice(x.start+1,A).find(w=>w.code===5)?.value.trim();if(!S)throw new Error("DXF structural repair rejected: VPORT table header has no handle.");const P=r.findIndex((w,k)=>k>x.start&&k<A&&w.code===70);P<0?r.splice(A,0,{code:70,value:"1"}):r[P].value=String(Number(r[P].value)+1);const _=m(0,"VPORT",5,f(),330,S,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0),N=r.findIndex((w,k)=>k>x.start&&w.code===0&&w.value.trim().toUpperCase()==="ENDTAB");r.splice(N,0,..._),u.push("VPORT:*ACTIVE")}}if(!u.length)return{dxf:a,addedTables:u};const R=oS(r);return _p(R),{dxf:R,addedTables:u}}function Fs(a){if(a.byteLength>50*1024*1024)throw new Error("DXF repair limit is 50 MB per file. The original file was not changed.");let r="";const s=a[0]===239&&a[1]===187&&a[2]===191?3:0;for(let f=s;f<a.length;f+=16384)r+=String.fromCharCode(...a.subarray(f,f+16384));if(r.startsWith("AutoCAD Binary DXF"))throw new Error("Binary DXF cannot be repaired in this browser. Save an ASCII DXF copy in AutoCAD first.");const o=_b(r),l=iS(o.dxf);if(!o.repairs.length&&!l.addedTables.length)return{content:a,repairs:[],addedTables:[]};const p=l.addedTables.length?l.dxf:o.dxf,g=new Uint8Array(p.length);for(let f=0;f<p.length;f+=1)g[f]=p.charCodeAt(f);return{content:g,repairs:o.repairs,addedTables:l.addedTables}}function lS(){const[a,r]=q.useState(""),[s,o]=q.useState(!1),[l,p]=q.useState(!1),g=q.useRef(null);async function f(m){o(!0),p(!1),r("");try{const u=Fs(new Uint8Array(await m.arrayBuffer())),y=new Blob([new Uint8Array(u.content)],{type:"application/dxf"}),b=URL.createObjectURL(y),v=document.createElement("a");v.href=b,v.download="REPAIRED_DRAWING.dxf",document.body.appendChild(v),v.click(),v.remove(),window.setTimeout(()=>URL.revokeObjectURL(b),1e4),r(`${u.repairs.length} symbol-table name(s) repaired; validated copy downloaded. Original file unchanged. AutoCAD open test still required.`)}catch(u){p(!0),r(u instanceof Error?u.message:"DXF repair failed. No download was created.")}finally{o(!1)}}return c.jsxs("div",{className:"dxf-repair-control",children:[c.jsx("button",{className:"btn",type:"button",disabled:s,onClick:()=>g.current?.click(),children:s?"Checking DXF…":"Repair an existing DXF"}),c.jsx("input",{ref:g,type:"file",accept:".dxf",disabled:s,"aria-label":"DXF to repair",hidden:!0,onChange:m=>{const u=m.target.files?.[0];m.target.value="",u&&f(u)}}),c.jsx("p",{children:"Local only · Repairs blank ordinary STYLE/DIMSTYLE names and preserves anonymous SHX shape-font STYLE records as DXF requires. Geometry, layers and SHX definitions stay unchanged. Maximum 50 MB."}),a&&c.jsx("p",{role:l?"alert":"status",children:a})]})}const Ei=["itemTag","description","equipmentName","equipmentType","nominalDiameter","fluidService","lineSpec","fromTag","toTag","notes"];function Lp(a){if(!Array.isArray(a)||a.length>64)throw new Error("Use at most 64 explicit attribute rules.");const r=new Set;return a.map(s=>{const o=s,l=typeof o?.attributeTag=="string"?o.attributeTag.trim().toUpperCase():"";if(!/^[A-Z][A-Z0-9_-]{0,63}$/.test(l)||r.has(l))throw new Error("Attribute tags must be unique, nonblank CAD field names (for example TAG_NO).");if(!Ei.includes(o.edeField)||!["tag","text","number"].includes(o.valueType)||!["inside","above","below"].includes(o.textZone))throw new Error(`Attribute rule ${l} has an unsupported field, value type or text zone.`);return r.add(l),{attributeTag:l,edeField:o.edeField,valueType:o.valueType,textZone:o.textZone}})}function cS(a){const r=new Map;for(const s of a){const o=s.itemTag.trim().toUpperCase();if(!o)continue;const l=r.get(o)??new Set;l.add(s.stableId.toUpperCase()),r.set(o,l)}return[...r].filter(([,s])=>s.size>1).map(([s])=>s).sort()}const Lb=a=>`pid-cad-attribute-rules:v1:${a||"legends-default"}`;function Ib(a){const r=localStorage.getItem(Lb(a));return r?Lp(JSON.parse(r)):[]}function dS({scope:a}){const[r,s]=q.useState(()=>{try{return Ib(a)}catch{return[]}}),[o,l]=q.useState(""),[p,g]=q.useState(!1);function f(m,u){s(y=>y.map((b,v)=>v===m?{...b,...u}:b)),g(!0),l("Unsaved changes: save these rules before downloading a runner.")}return c.jsxs("details",{className:"runner-group-hint",children:[c.jsx("summary",{children:"Block attributes · Arial Narrow text"}),c.jsx("p",{children:"Final text keeps its imported height and position. AutoCAD must have Arial Narrow installed. Attribute rules belong only to the selected mapping scope. No saved rule means review—not guessing."}),r.map((m,u)=>c.jsxs("fieldset",{style:{marginBlock:8},children:[c.jsxs("legend",{children:["Attribute rule ",u+1]}),c.jsxs("label",{children:["Block field ",c.jsx("input",{"aria-label":`Attribute tag ${u+1}`,value:m.attributeTag,onChange:y=>f(u,{attributeTag:y.target.value})})]}),c.jsxs("label",{children:["EDE value ",c.jsx("select",{value:m.edeField,onChange:y=>f(u,{edeField:y.target.value}),children:Ei.map(y=>c.jsx("option",{children:y},y))})]}),c.jsxs("label",{children:["Expected type ",c.jsxs("select",{value:m.valueType,onChange:y=>f(u,{valueType:y.target.value}),children:[c.jsx("option",{value:"tag",children:"Tag"}),c.jsx("option",{value:"text",children:"Text"}),c.jsx("option",{value:"number",children:"Number"})]})]}),c.jsxs("label",{children:["PDF text location ",c.jsxs("select",{value:m.textZone,onChange:y=>f(u,{textZone:y.target.value}),children:[c.jsx("option",{value:"inside",children:"Inside symbol"}),c.jsx("option",{value:"above",children:"Above symbol"}),c.jsx("option",{value:"below",children:"Below symbol"})]})]}),c.jsx("button",{className:"btn subtle danger",type:"button",onClick:()=>{s(y=>y.filter((b,v)=>v!==u)),g(!0),l("Save to apply the removal.")},children:"Remove rule"})]},u)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>{s(m=>[...m,{attributeTag:"TAG_NO",edeField:"itemTag",valueType:"tag",textZone:"above"}]),g(!0),l("Save rules before downloading a runner.")},disabled:r.length>=64,children:"Add attribute rule"})," ",c.jsx("button",{className:"btn primary",type:"button",disabled:!p,onClick:()=>{try{const m=Lp(r);localStorage.setItem(Lb(a),JSON.stringify(m)),s(m),g(!1),l("Rules saved locally for this mapping scope.")}catch(m){l(m instanceof Error?m.message:"Rules could not be saved.")}},children:"Save rules"}),o&&c.jsx("p",{role:"status",children:o})]})}const oy=128,Kt=1e-9;function Jo(a,r,s){return(r[0]-a[0])*(s[1]-a[1])-(r[1]-a[1])*(s[0]-a[0])}function kl(a,r,s){return Math.abs(Jo(a,r,s))<=Kt&&s[0]>=Math.min(a[0],r[0])-Kt&&s[0]<=Math.max(a[0],r[0])+Kt&&s[1]>=Math.min(a[1],r[1])-Kt&&s[1]<=Math.max(a[1],r[1])+Kt}function uS(a,r,s,o){const l=Jo(a,r,s),p=Jo(a,r,o),g=Jo(s,o,a),f=Jo(s,o,r);return(l>Kt&&p<-Kt||l<-Kt&&p>Kt)&&(g>Kt&&f<-Kt||g<-Kt&&f>Kt)?!0:Math.abs(l)<=Kt&&kl(a,r,s)||Math.abs(p)<=Kt&&kl(a,r,o)||Math.abs(g)<=Kt&&kl(s,o,a)||Math.abs(f)<=Kt&&kl(s,o,r)}function pS(a){return a.reduce((r,s,o)=>{const l=a[(o+1)%a.length];return r+s[0]*l[1]-l[0]*s[1]},0)/2}function Gr(a){const r=a.split(";").map(o=>o.trim()).filter(Boolean);if(r.length<3||r.length>oy)throw new Error(`Enter 3-${oy} valve-body outline points.`);const s=r.map((o,l)=>{const p=o.split(",").map(f=>f.trim());if(p.length!==2||!p[0]||!p[1])throw new Error(`Mask point ${l+1} must be written as X,Y.`);const g=[Number(p[0]),Number(p[1])];if(!g.every(Number.isFinite))throw new Error(`Mask point ${l+1} must contain finite X,Y values.`);return g});if(s.some((o,l)=>{const p=s[(l+1)%s.length];return Math.hypot(o[0]-p[0],o[1]-p[1])<=Kt}))throw new Error("The valve mask outline cannot contain duplicate adjacent points.");for(let o=0;o<s.length;o+=1){const l=(o+1)%s.length;for(let p=o+1;p<s.length;p+=1){const g=(p+1)%s.length;if(!(o===p||l===p||g===o)&&uS(s[o],s[l],s[p],s[g]))throw new Error("The valve mask outline must not cross or touch itself.")}}if(Math.abs(pS(s))<=Kt)throw new Error("The valve mask outline must enclose an area.");return s}function fS(a){return`(${a.map(([r,s])=>`(${r} ${s})`).join(" ")})`}const Ju=["PFD","P&ID","Data sheet"],Hr=["A0","A1","A2","A3","A4"],Pb="pid-mapping-studio:cad-standards:v1";function ep(){return{schemaVersion:"1.0.0",companyDefaults:{PFD:"A1","P&ID":"A1","Data sheet":"A4"},companyItems:[],projects:{},reviewCandidates:[],auditTrail:[]}}function hS(){return ep()}function Kr(a,r,s){return{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:a,detail:r,...s?{projectName:s}:{}}}function tp(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&typeof r.name=="string"&&typeof r.summary=="string"&&typeof r.sourceFile=="string"&&["titleBlock","layer","textStyle","linetype","dimensionStyle","symbol","directionArrow","legend"].includes(String(r.category))&&["extracted-dwg","approved-source-drawing","synthetic-demo"].includes(String(r.sourceKind))&&["company","project"].includes(String(r.scope))&&["reviewed","needs-review"].includes(String(r.reviewStatus))&&typeof r.canPromote=="boolean"&&Array.isArray(r.fields)&&r.fields.every(s=>typeof s?.label=="string"&&typeof s?.value=="string")&&(r.sheetSize===void 0||Hr.includes(r.sheetSize))&&(r.scope!=="project"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function gS(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&tp(r.item)&&["company","project","unclassified"].includes(String(r.proposedScope))&&typeof r.sourceGroup=="string"&&["needs-review","approved","dismissed"].includes(String(r.status))&&(r.proposedScope==="company"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function jb(a){if(!a||typeof a!="object")return!1;const r=a;return r.schemaVersion!=="1.0.0"||!r.companyDefaults||!r.companyItems||!Array.isArray(r.companyItems)||!r.projects||typeof r.projects!="object"||r.reviewCandidates!==void 0&&!Array.isArray(r.reviewCandidates)||!Array.isArray(r.auditTrail)||!Ju.every(s=>Hr.includes(r.companyDefaults[s]))||!r.companyItems.every(s=>tp(s)&&s.scope==="company")||!(r.reviewCandidates??[]).every(s=>gS(s))||!r.auditTrail.every(s=>!!(s&&typeof s.id=="string"&&typeof s.at=="string"&&typeof s.action=="string"&&typeof s.detail=="string"))?!1:Object.entries(r.projects).every(([s,o])=>!!(s&&o&&typeof o.projectName=="string"&&o.defaults&&Object.entries(o.defaults).every(([l,p])=>Ju.includes(l)&&Hr.includes(p))&&Array.isArray(o.items)&&o.items.every(l=>tp(l)&&l.scope==="project"&&l.projectId===s)))}const li="cad-standards-changed";function ci(a){if(!jb(a))throw new Error("CAD standards could not be saved because the library data is invalid.");try{window.localStorage.setItem(Pb,JSON.stringify(a))}catch{throw new Error("This browser could not save the CAD standards locally. Export or back up the library before leaving this page.")}typeof window.dispatchEvent=="function"&&window.dispatchEvent(new Event(li))}function yn(){let a;try{a=window.localStorage.getItem(Pb)}catch{throw new Error("This browser could not read its local CAD standards library.")}if(a===null){const m=ep();return ci(m),m}let r;try{r=JSON.parse(a)}catch{throw new Error("The locally saved CAD standards library is not valid JSON. It was left unchanged.")}if(!jb(r))throw new Error("The locally saved CAD standards library has invalid fields. It was left unchanged.");const s={...r,reviewCandidates:r.reviewCandidates??[]},o=ep(),l=o.companyItems.filter(m=>!s.companyItems.some(u=>u.id===m.id)),p=new Set(s.reviewCandidates.map(m=>m.id)),g=o.reviewCandidates.filter(m=>!p.has(m.id));if(!l.length&&!g.length)return s;const f={...s,companyItems:[...s.companyItems,...l],reviewCandidates:[...s.reviewCandidates,...g],auditTrail:[...s.auditTrail,Kr("Source mappings added to review queue",`${g.length} anonymized source mappings were added as pending review. Existing approvals, dismissals, and project settings were preserved.`)]};return ci(f),f}function mS(a,r,s){const o=[...a.companyItems.map(g=>({item:g,scopePriority:0})),...r?(a.projects[r]?.items??[]).map(g=>({item:g,scopePriority:2})):[]],l=new Map;for(const{item:g,scopePriority:f}of o){if(!["layer","textStyle","linetype"].includes(g.category)||g.sourceKind!=="extracted-dwg"||g.reviewStatus!=="reviewed")continue;const m=R=>g.fields.find(D=>D.label===R)?.value?.trim()??"",u=m("CAD name"),y=m("Source discipline");if(!u)throw new Error(`Reviewed Legends Library ${g.category} standard "${g.name}" has no CAD name. Re-extract it before generating the runner.`);if(!["Shared",s].includes(y))continue;const b=m("Extracted details"),v=`${g.category}:${u.toUpperCase()}`,x=l.get(v)??[];x.push({item:g,priority:f+(y===s?1:0),cadName:u,sourceDiscipline:y,detail:b}),l.set(v,x)}const p=[];for(const g of l.values()){const f=Math.max(...g.map(y=>y.priority)),m=g.filter(y=>y.priority===f).sort((y,b)=>y.item.id.localeCompare(b.item.id));if(new Set(m.map(y=>y.detail)).size>1){const y=m[0];throw new Error(`Conflicting reviewed Legends Library ${y.item.category} standards named "${y.cadName}" for ${y.sourceDiscipline}. Resolve the duplicate before generating the runner.`)}p.push(m[0].item)}return p.sort((g,f)=>g.category.localeCompare(f.category)||g.name.localeCompare(f.name))}function yS(a,r){return a.some(s=>s.category==="titleBlock"&&s.reviewStatus==="reviewed"&&(s.sheetSize===r||s.fields.some(o=>o.label==="Sheet size"&&o.value===r)))}function bS(a,r,s){if(a.companyDefaults[r]===s)return a;if(!yS(a.companyItems,s))throw new Error(`Approve a company title-block mapping for ${s} before making it a company default.`);return{...a,companyDefaults:{...a.companyDefaults,[r]:s},auditTrail:[Kr("Company sheet-size default changed",`${r} changed to ${s} after an approved company title-block mapping was available.`),...a.auditTrail]}}function zl(a,r,s,o=[],l){const p=a.reviewCandidates.find(x=>x.id===r);if(!p||p.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");if(s==="company"&&p.proposedScope!=="company")throw new Error("Only a source classified for the Legends Library can be approved there.");if(s==="project"&&p.proposedScope==="company")throw new Error("Legends Library source mappings must be approved to the Legends Library.");if(l&&!(p.item.sourceKind==="extracted-dwg"&&["symbol","directionArrow"].includes(p.item.category)&&["symbol","directionArrow"].includes(l)))throw new Error("Only an extracted CAD block can be reviewed as a Direction Arrow or a standard symbol.");const g=l??p.item.category;let f=[...p.item.fields.filter(x=>!o.some(R=>R.label===x.label)),...o];if(g==="directionArrow"&&(f=f.filter(x=>!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(x.label))),g==="symbol"&&p.item.sourceKind==="extracted-dwg"&&(!f.some(x=>x.label==="Fallback category"&&x.value.trim())||!f.some(x=>x.label==="Block asset ID"&&x.value.trim())))throw new Error("A fallback category and locally extracted block file are required before approving this symbol.");if(g==="symbol"&&p.item.sourceKind==="extracted-dwg"&&f.find(x=>x.label==="Fallback category")?.value.trim().toLowerCase()==="valve"){const x=f.find(R=>R.label==="Wipeout mask boundary")?.value??"";try{Gr(x)}catch(R){throw new Error(`A reviewed valve-body mask outline is required before approving this valve. ${R instanceof Error?R.message:"Check the X,Y point list."}`)}}if(g==="symbol"&&p.item.sourceKind==="extracted-dwg"){const x=f.find(S=>S.label==="Target CAD layer")?.value.trim()??"",R=f.find(S=>S.label==="Source discipline")?.value.trim()??"";if(!(s==="company"?a.companyItems:[...p.projectId?a.projects[p.projectId]?.items??[]:[],...a.companyItems]).some(S=>{if(S.category!=="layer"||S.sourceKind!=="extracted-dwg"||S.reviewStatus!=="reviewed")return!1;const P=S.fields.find(w=>w.label==="CAD name")?.value.trim()??"",_=S.fields.find(w=>w.label==="Source discipline")?.value.trim()??"",N=R==="Shared"?_==="Shared":_==="Shared"||_===R;return x&&x.toUpperCase()!=="0"&&P.toLowerCase()===x.toLowerCase()&&N}))throw new Error("Approve a compatible non-zero CAD layer before approving this symbol. Layer 0 cannot be used for block placement.")}const m={...p.item,category:g,fields:f,scope:s,reviewStatus:"reviewed",canPromote:!1,...s==="project"?{projectId:p.projectId,projectName:p.projectName}:{projectId:void 0,projectName:void 0}};let u=a.companyItems,y=a.projects;if(s==="company")u=[...a.companyItems.filter(x=>x.id!==m.id),m];else{const x=p.projectId,R=p.projectName;if(!x||!R)throw new Error("The isolated project scope is not available for this mapping.");const D=a.projects[x]??{projectName:R,defaults:{},items:[]};y={...a.projects,[x]:{...D,projectName:R,items:[...D.items.filter(A=>A.id!==m.id),m]}}}const b=a.reviewCandidates.map(x=>x.id===r?{...x,status:"approved"}:x),v=s==="company"?"Legends Library":`isolated ${p.projectName} library`;return{...a,companyItems:u,projects:y,reviewCandidates:b,auditTrail:[Kr("Source mapping approved",`${g} mapping ${p.item.name} was approved to ${v}.`,p.projectName),...a.auditTrail]}}const ap={EQUIP:{layerName:"EQUIP",fallbackCategory:"equipment"},F_EQUIP:{layerName:"f_Equip",fallbackCategory:"equipment"},F_INST:{layerName:"f_Inst",fallbackCategory:"instrument"},F_PIPE_INLINE:{layerName:"f_Pipe_Inline",fallbackCategory:"inline component"}};function np(a,r){return a.item.fields.find(s=>s.label===r)?.value.trim()??""}function vS(a,r,s){return[...a.filter(o=>o.label!==r),{label:r,value:s}]}function ES(a){const o=np(a,"Extracted details").match(/(?:^|;)sourceLayer=([^;]*)/i)?.[1]??np(a,"Source insert layer(s)");return[...new Set(o.split(",").map(l=>l.trim().toUpperCase()).filter(Boolean))]}function Yr(a){return a.fields.find(r=>r.label==="CAD name")?.value.trim()??""}function wS(a){return a.fields.find(r=>r.label==="Source drawing ID")?.value.trim()??""}function iy(a){return a.fields.find(r=>r.label==="Extracted details")?.value.trim()??""}function Ob(a){return a.fields.find(r=>r.label==="Source discipline")?.value.trim()??""}function xS(a,r){return a.category==="layer"&&a.sourceKind==="extracted-dwg"&&a.reviewStatus==="reviewed"&&a.scope==="company"&&Yr(a).toUpperCase()===r.toUpperCase()&&Ob(a).toUpperCase()==="SHARED"}function SS(a,r,s){const o=new Set(r),l={unsupportedLayer:0,ambiguousLayer:0,missingAsset:0,missingLayer:0,invalidCandidate:0},p=a.reviewCandidates.filter(v=>v.status==="needs-review"&&v.proposedScope==="company"&&o.has(v.sourceGroup)),g=new Map,f=[];for(const v of p){if(v.item.category!=="symbol"||v.item.sourceKind!=="extracted-dwg")continue;const x=ES(v);if(x.length!==1){l.ambiguousLayer+=x.length>1?1:0,l.unsupportedLayer+=x.length===0?1:0;continue}const R=x[0].toUpperCase(),D=ap[R];if(!D){l.unsupportedLayer+=1;continue}const A=np(v,"Block asset ID");if(!A||!s.has(A)){l.missingAsset+=1;continue}const S=`${v.sourceGroup}|${R}`;g.set(S,{sourceId:v.sourceGroup,layerName:D.layerName}),f.push({candidateId:v.id,sourceId:v.sourceGroup,layerKey:S,fallbackCategory:D.fallbackCategory,blockAssetId:A})}let m=a;const u=new Map;let y=0;for(const[v,x]of g){const R=m.companyItems.find(S=>S.category==="layer"&&S.sourceKind==="extracted-dwg"&&S.reviewStatus==="reviewed"&&wS(S)===x.sourceId&&Yr(S).toUpperCase()===x.layerName.toUpperCase());if(R){const S={...R,fields:vS(R.fields,"Source discipline","Shared")};m={...m,companyItems:m.companyItems.map(P=>P.id===R.id?S:P),reviewCandidates:m.reviewCandidates.map(P=>P.id===R.id?{...P,item:S}:P)},Ob(R).toUpperCase()!=="SHARED"&&(y+=1),u.set(v,Yr(S));continue}const D=m.reviewCandidates.find(S=>S.status==="needs-review"&&S.proposedScope==="company"&&S.sourceGroup===x.sourceId&&S.item.category==="layer"&&S.item.sourceKind==="extracted-dwg"&&Yr(S.item).toUpperCase()===x.layerName.toUpperCase()),A=m.companyItems.find(S=>xS(S,x.layerName));if(A){const S=D?iy(D.item):"",P=iy(A);if(!D||S&&S===P){u.set(v,Yr(A));continue}l.invalidCandidate+=1;continue}if(!D){l.missingLayer+=1;continue}try{m=zl(m,D.id,"company",[{label:"Source discipline",value:"Shared"}]);const S=m.companyItems.find(_=>_.id===D.item.id),P=Yr(S||D.item);u.set(v,P),y+=1}catch{l.invalidCandidate+=1}}let b=0;for(const v of f){const x=u.get(v.layerKey);if(!x){l.missingLayer+=1;continue}try{m=zl(m,v.candidateId,"company",[{label:"Source discipline",value:"Shared"},{label:"Fallback category",value:v.fallbackCategory},{label:"Target CAD layer",value:x}]),b+=1}catch{l.invalidCandidate+=1}}return(y||b)&&(m={...m,auditTrail:[Kr("Categorized CAD source batch approved",`${y} placement layer(s) and ${b} layer-matched symbol(s) approved for shared PFD/P&ID use.`),...a.auditTrail]}),{library:m,approvedLayers:y,approvedSymbols:b,skipped:l}}function TS(a,r,s){const o=a.companyItems.find(y=>y.id===r),l=Object.entries(a.projects).find(([,y])=>y.items.some(b=>b.id===r)),p=o??l?.[1].items.find(y=>y.id===r);if(!p||p.reviewStatus!=="reviewed")throw new Error("The selected approved CAD mapping is no longer available.");if(p.category!=="symbol"||p.sourceKind!=="extracted-dwg")throw new Error("Only reviewed extracted symbol mappings can be updated here.");const g=[...p.fields.filter(y=>!s.some(b=>b.label===y.label)),...s];if(g.find(y=>y.label==="Fallback category")?.value.trim().toLowerCase()==="valve")try{Gr(g.find(y=>y.label==="Wipeout mask boundary")?.value??"")}catch(y){throw new Error(`A reviewed valve-body mask outline is required. ${y instanceof Error?y.message:"Check the X,Y point list."}`)}const f={...p,fields:g},m=o?a.companyItems.map(y=>y.id===r?f:y):a.companyItems,u=l?{...a.projects,[l[0]]:{...l[1],items:l[1].items.map(y=>y.id===r?f:y)}}:a.projects;return{...a,companyItems:m,projects:u,auditTrail:[Kr("Reviewed valve mask updated",`The approved symbol mapping ${p.name} received a reviewed Wipeout mask outline.`,p.projectName),...a.auditTrail]}}function AS(a,r){const s=a.reviewCandidates.find(o=>o.id===r);if(!s||s.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");return{...a,reviewCandidates:a.reviewCandidates.map(o=>o.id===r?{...o,status:"dismissed"}:o),auditTrail:[Kr("Source mapping dismissed",`${s.item.category} mapping ${s.item.name} was dismissed from the review queue.`,s.projectName),...a.auditTrail]}}function DS(a,r,s,o,l){if(!r.trim()||!s.trim())throw new Error("Choose a project before saving its title-block override.");const p=a.projects[r]??{defaults:{},items:[]},g={...p.defaults,[o]:l},f=[...a.projects[r]?.items??[],...a.companyItems].find(b=>b.category==="titleBlock"&&b.reviewStatus==="reviewed"&&(b.sheetSize===l||b.fields.some(v=>v.label==="Sheet size"&&v.value===l)));if(!f)throw new Error(`Approve a title-block mapping for ${l} before saving this project default.`);const m=`project-default-${o.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,u={...f,id:m,name:`${l} · ${o} project default`,summary:`Project-only choice for ${o}. The company default remains ${a.companyDefaults[o]}.`,scope:"project",projectId:r,projectName:s,canPromote:!1,fields:[...f.fields,{label:"Override purpose",value:o},{label:"Project choice",value:l},{label:"Company default",value:a.companyDefaults[o]}]};return{...a,projects:{...a.projects,[r]:{projectName:s,defaults:g,items:[...p.items.filter(b=>b.id!==m),u]}},auditTrail:[Kr("Project title-block override saved",`${o} set to ${l}; company default remains ${a.companyDefaults[o]}. Other project libraries are unchanged.`,s),...a.auditTrail]}}const CS=(()=>{const a=new Uint32Array(256);for(let r=0;r<a.length;r+=1){let s=r;for(let o=0;o<8;o+=1)s=s&1?3988292384^s>>>1:s>>>1;a[r]=s>>>0}return a})();function NS(a){let r=4294967295;for(const s of a)r=CS[(r^s)&255]^r>>>8;return(r^4294967295)>>>0}function _u(a,r){const s=new Uint8Array(a);return r(new DataView(s.buffer)),s}function qb(a){if(a.length>65535)throw new Error("The local ZIP cannot contain more than 65,535 files.");const r=new TextEncoder,s=[],o=[];let l=0,p=0;for(const u of a){const y=r.encode(u.path),b=NS(u.content),v=_u(30+y.length,R=>{R.setUint32(0,67324752,!0),R.setUint16(4,20,!0),R.setUint16(6,2048,!0),R.setUint16(8,0,!0),R.setUint16(10,0,!0),R.setUint16(12,33,!0),R.setUint32(14,b,!0),R.setUint32(18,u.content.length,!0),R.setUint32(22,u.content.length,!0),R.setUint16(26,y.length,!0),R.setUint16(28,0,!0),new Uint8Array(R.buffer,30,y.length).set(y)});s.push(v,u.content);const x=_u(46+y.length,R=>{R.setUint32(0,33639248,!0),R.setUint16(4,20,!0),R.setUint16(6,20,!0),R.setUint16(8,2048,!0),R.setUint16(10,0,!0),R.setUint16(12,0,!0),R.setUint16(14,33,!0),R.setUint32(16,b,!0),R.setUint32(20,u.content.length,!0),R.setUint32(24,u.content.length,!0),R.setUint16(28,y.length,!0),R.setUint16(30,0,!0),R.setUint16(32,0,!0),R.setUint16(34,0,!0),R.setUint16(36,0,!0),R.setUint32(38,0,!0),R.setUint32(42,l,!0),new Uint8Array(R.buffer,46,y.length).set(y)});o.push(x),p+=x.length,l+=v.length+u.content.length}const g=_u(22,u=>{u.setUint32(0,101010256,!0),u.setUint16(4,0,!0),u.setUint16(6,0,!0),u.setUint16(8,a.length,!0),u.setUint16(10,a.length,!0),u.setUint32(12,p,!0),u.setUint32(16,l,!0),u.setUint16(20,0,!0)}),m=[...s,...o,g].map(u=>{const y=new ArrayBuffer(u.byteLength);return new Uint8Array(y).set(u),y});return new Blob(m,{type:"application/zip"})}function RS(a,r,s){return a.filter(o=>(o.discipline===r||o.discipline==="Shared")&&(!s||o.category==="company-standard"||o.projectLabel===s))}const kS="pid-mapping-studio-local-cad-library",_S=3,xn="source-drawings",Sn="extracted-block-assets",Ar="project-title-blocks",Mb=100*1024*1024;function LS(a,r){if(!/\.dwg$/i.test(a.trim()))throw new Error("Upload a standalone AutoCAD DWG title block. Save a DWT as DWG first.");if(r.byteLength>Mb)throw new Error("The project title block is larger than the 100 MB local upload limit.");const s=new TextDecoder().decode(r.subarray(0,6));if(!/^AC10\d{2}$/.test(s))throw new Error("This file does not have a recognized AutoCAD DWG header.")}function ln(){return typeof indexedDB>"u"?Promise.reject(new Error("This browser does not support local drawing-library storage.")):new Promise((a,r)=>{const s=indexedDB.open(kS,_S);s.onupgradeneeded=()=>{const o=s.result;o.objectStoreNames.contains(xn)||o.createObjectStore(xn,{keyPath:"id"}),o.objectStoreNames.contains(Sn)||o.createObjectStore(Sn,{keyPath:"id"}),o.objectStoreNames.contains(Ar)||o.createObjectStore(Ar,{keyPath:"projectId"})},s.onsuccess=()=>a(s.result),s.onerror=()=>r(s.error??new Error("The local drawing library could not be opened.")),s.onblocked=()=>r(new Error("The local drawing library is busy in another browser tab. Close the other tab and try again."))})}async function rp(){const a=await ln();try{return await new Promise((r,s)=>{const l=a.transaction(xn,"readonly").objectStore(xn).getAll();l.onsuccess=()=>{const p=l.result;r(p.map(({id:g,label:f,category:m,discipline:u,format:y,bytes:b,projectLabel:v})=>({id:g,label:f,category:m,discipline:u??"Shared",format:y??"DWG",bytes:b,...v?{projectLabel:v}:{}})).sort((g,f)=>g.label.localeCompare(f.label)))},l.onerror=()=>s(l.error??new Error("The local drawing library could not be read."))})}finally{a.close()}}async function ni(a){const r=await ln();try{return await new Promise((s,o)=>{const l=r.transaction(xn,"readonly").objectStore(xn).get(a);l.onsuccess=()=>{const p=l.result;if(!p){o(new Error("An approved mapping refers to a source DWG that is no longer in the local library."));return}s(new Uint8Array(p.content))},l.onerror=()=>o(l.error??new Error("The local source drawing could not be read."))})}finally{r.close()}}async function sp(a,r=!1){if(!a.length)return;const s=await ln();try{await new Promise((o,l)=>{const p=s.transaction(Sn,"readwrite"),g=p.objectStore(Sn);for(const f of a){const m=g.get(f.id);m.onsuccess=()=>{const u=m.result;if(r&&u)return;const y={id:f.id,sourceId:f.sourceId,blockName:f.blockName,content:f.content.slice().buffer,format:f.format??u?.format??"DWG",...f.previewSvg===null?{}:f.previewSvg!==void 0?{previewSvg:f.previewSvg}:u?.previewSvg?{previewSvg:u.previewSvg}:{},...f.nearbyLabels!==void 0?{nearbyLabels:f.nearbyLabels}:u?.nearbyLabels?{nearbyLabels:u.nearbyLabels}:{},...f.labelMatchSkipped!==void 0?{labelMatchSkipped:f.labelMatchSkipped}:u?.labelMatchSkipped!==void 0?{labelMatchSkipped:u.labelMatchSkipped}:{},...f.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:f.labelMatchAmbiguous}:u?.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:u.labelMatchAmbiguous}:{},...f.sourcePlacements!==void 0?{sourcePlacements:f.sourcePlacements}:u?.sourcePlacements?{sourcePlacements:u.sourcePlacements}:{},...f.geometryDescriptor!==void 0?{geometryDescriptor:f.geometryDescriptor}:u?.geometryDescriptor?{geometryDescriptor:u.geometryDescriptor}:{}};g.put(y)}}p.oncomplete=()=>o(),p.onerror=()=>l(p.error??new Error("Extracted symbol blocks could not be saved locally.")),p.onabort=()=>l(p.error??new Error("Saving extracted symbol blocks was cancelled."))})}finally{s.close()}}async function IS(){const a=await ln();try{return await new Promise((r,s)=>{const o=a.transaction(Sn,"readonly").objectStore(Sn).getAllKeys();o.onsuccess=()=>r(new Set(o.result.map(String))),o.onerror=()=>s(o.error??new Error("Local block availability could not be checked."))})}finally{a.close()}}async function $b(a){const r=await ln();try{return await new Promise((s,o)=>{const l=r.transaction(Sn,"readonly").objectStore(Sn).get(a);l.onsuccess=()=>{const p=l.result;if(!p){s({nearbyLabels:[],labelMatchSkipped:!1});return}s({format:p.format??"DWG",...p.previewSvg?{previewSvg:p.previewSvg}:{},nearbyLabels:p.nearbyLabels??[],labelMatchSkipped:p.labelMatchSkipped??!1,...p.labelMatchAmbiguous?{labelMatchAmbiguous:!0}:{},...p.sourcePlacements?{sourcePlacements:p.sourcePlacements}:{},...p.geometryDescriptor?{geometryDescriptor:p.geometryDescriptor}:{}})},l.onerror=()=>o(l.error??new Error("The local block preview could not be read."))})}finally{r.close()}}async function Ub(a){const r=await ln();try{return await new Promise((s,o)=>{const l=r.transaction(Sn,"readonly").objectStore(Sn).get(a);l.onsuccess=()=>{const p=l.result;if(!p){o(new Error("An approved symbol block is missing from this browser’s local CAD library. Re-import its extraction package."));return}s(new Uint8Array(p.content))},l.onerror=()=>o(l.error??new Error("The approved symbol block could not be read locally."))})}finally{r.close()}}async function rc(a){if(!a.trim())return null;const r=await ln();try{return await new Promise((s,o)=>{const l=r.transaction(Ar,"readonly").objectStore(Ar).get(a);l.onsuccess=()=>s(l.result??null),l.onerror=()=>o(l.error??new Error("The project title block could not be read locally."))})}finally{r.close()}}function Ip(a,r){if(a.workspaceType&&a.workspaceType!==r)throw new Error(`This title block belongs to ${a.workspaceType}, not ${r}. Upload a separate title block for each workspace.`);return{projectId:a.projectId,workspaceType:r,titleBlockId:a.titleBlockId??`legacy-${a.projectId}-${a.uploadedAt}`,titleBlockPath:a.titleBlockPath??"PROJECT_TITLE_BLOCK.dwg",xrefName:a.xrefName??"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:a.expectedSize??{widthMm:841,heightMm:594},version:a.version??1,bytes:a.bytes,uploadedAt:a.uploadedAt}}async function ly(a,r){const s=await rc(a);return s?Ip(s,r):null}async function PS(a,r){const s=await rc(a);return s?{...Ip(s,r),content:new Uint8Array(s.content)}:null}async function jS(a,r,s,o){if(!a.trim())throw new Error("Select a project before uploading its title block.");if(!["PFD","P&ID"].includes(r))throw new Error("Choose either a PFD or P&ID workspace for this title block.");LS(s,o);const l=await rc(a);if(l?.workspaceType&&l.workspaceType!==r)throw new Error(`This folder already has a ${l.workspaceType} title block. Keep PFD and P&ID title blocks in separate workspaces.`);const p=new Date().toISOString(),g=(l?.version??(l?1:0))+1,f={projectId:a,workspaceType:r,titleBlockId:globalThis.crypto?.randomUUID?.()??`title-block-${Date.now()}`,titleBlockPath:"PROJECT_TITLE_BLOCK.dwg",xrefName:"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:{widthMm:841,heightMm:594},version:g,bytes:o.byteLength,uploadedAt:p,content:o.slice().buffer},m=await ln();try{await new Promise((u,y)=>{const b=m.transaction(Ar,"readwrite");b.objectStore(Ar).put(f),b.oncomplete=()=>u(),b.onerror=()=>y(b.error??new Error("The project title block could not be saved locally.")),b.onabort=()=>y(b.error??new Error("Saving the project title block was cancelled."))})}finally{m.close()}return{...Ip(f,r)}}async function OS(a,r){if(!a.trim())return;const s=await rc(a);if(s?.workspaceType&&s.workspaceType!==r)throw new Error(`This title block belongs to ${s.workspaceType}; it was not removed from the ${r} workspace.`);const o=await ln();try{await new Promise((l,p)=>{const g=o.transaction(Ar,"readwrite");g.objectStore(Ar).delete(a),g.oncomplete=()=>l(),g.onerror=()=>p(g.error??new Error("The project title block could not be removed locally.")),g.onabort=()=>p(g.error??new Error("Removing the project title block was cancelled."))})}finally{o.close()}}async function qS(a){if(!a.length)return;const r=await ln();try{await new Promise((s,o)=>{const l=r.transaction(xn,"readwrite"),p=l.objectStore(xn);for(const g of a){const f=g.content.slice().buffer,{content:m,...u}=g;p.put({...u,content:f,createdAt:new Date().toISOString()})}l.oncomplete=()=>s(),l.onerror=()=>o(l.error??new Error("The local drawing library could not be saved.")),l.onabort=()=>o(l.error??new Error("The local drawing library save was cancelled."))})}finally{r.close()}}async function MS(a,r){const s=await ln();try{await new Promise((o,l)=>{const p=s.transaction(xn,"readwrite"),g=p.objectStore(xn),f=g.get(a);f.onsuccess=()=>{const m=f.result;if(!m){p.abort(),l(new Error("That source drawing is no longer in the local library."));return}g.put({...m,...r,projectLabel:r.projectLabel?.trim()||void 0})},f.onerror=()=>l(f.error??new Error("The source drawing could not be updated.")),p.oncomplete=()=>o(),p.onerror=()=>l(p.error??new Error("The source drawing update failed.")),p.onabort=()=>l(p.error??new Error("The source drawing update was cancelled."))})}finally{s.close()}}const $S=String.raw`
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
`,US=$S+String.raw`; Local CAD standards extractor. Run in Windows AutoCAD on each source drawing.
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
                        (strcat "scale=" (rtos (if (cdr (assoc 40 row)) (cdr (assoc 40 row)) 1.0) 2 4)
                                ";arrowSize=" (rtos (if (cdr (assoc 41 row)) (cdr (assoc 41 row)) 0.0) 2 4)
                                ";textHeight=" (rtos (if (cdr (assoc 140 row)) (cdr (assoc 140 row)) 0.0) 2 4)))
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
`;function FS(a,r){return`SOURCE_${String(a+1).padStart(3,"0")}.${r==="DXF"?"dxf":"dwg"}`}async function BS(a){if(a.length===0)throw new Error("There are no eligible local source drawings to package.");const r=[{path:"EXTRACT_CAD_STANDARDS.lsp",content:new TextEncoder().encode(US)},{path:"README_LOCAL_EXTRACTION.txt",content:new TextEncoder().encode(`LOCAL CAD STANDARDS EXTRACTION

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
`)}],s=await Promise.all(a.map(o=>ni(o.id)));return a.forEach((o,l)=>{const p=o.format==="DXF"?Fs(s[l]):null;r.push({path:FS(l,o.format),content:p?.content??s[l]})}),qb(r)}function cy(a,r,s){let o=0,l=0;const p=new Map([...s].map(([f,m])=>[f.toUpperCase(),m])),g=a.reviewCandidates.map(f=>{if(f.sourceGroup!==r||f.status!=="needs-review"||f.proposedScope!=="company"||f.item.category!=="symbol"||f.item.sourceKind!=="extracted-dwg")return f;const m=f.item.fields,u=m.find(D=>D.label==="Block name")?.value.trim()??"";if(!u)return f;const y=p.get(u.toUpperCase())?.sourcePlacements??[],b=[...new Set(y.map(D=>D.layer.trim()).filter(Boolean))];b.length&&(l+=1);const x=(m.find(D=>D.label==="Extracted details")?.value??"").split(";").filter(D=>!/^\s*sourceLayer=/i.test(D)).join(";"),R=[...m.filter(D=>!["Extracted details","Source insert layer(s)","Source insert rotation(s)"].includes(D.label)),{label:"Extracted details",value:x+(b.length?`;sourceLayer=${b.join(", ")}`:"")},...b.length?[{label:"Source insert layer(s)",value:b.join(", ")},{label:"Source insert rotation(s)",value:y.map(D=>`${D.rotationDegrees}° on ${D.layer} (${D.count})`).join("; ")}]:[]];return JSON.stringify(m)===JSON.stringify(R)?f:(o+=1,{...f,item:{...f.item,fields:R}})});return{library:o?{...a,reviewCandidates:g}:a,updatedRecords:o,recoveredSymbols:l}}class zS{constructor(r){this._pointer=0,this._eof=!1,this._data=r}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return this._pointer++,r.value=dy(r.code,this._data[this._pointer].trim()),this._pointer++,r.code===0&&r.value==="EOF"&&(this._eof=!0),this.lastReadGroup=r,r}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return r.value=dy(r.code,this._data[this._pointer+1].trim()),r}rewind(r=1){this._pointer=this._pointer-r*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}function dy(a,r){return a<=9?r:a>=10&&a<=59?parseFloat(r):a>=60&&a<=99?parseInt(r):a>=100&&a<=109?r:a>=110&&a<=149?parseFloat(r):a>=160&&a<=179?parseInt(r):a>=210&&a<=239?parseFloat(r):a>=270&&a<=289?parseInt(r):a>=290&&a<=299?YS(r):a>=300&&a<=369?r:a>=370&&a<=389?parseInt(r):a>=390&&a<=399?r:a>=400&&a<=409?parseInt(r):a>=410&&a<=419?r:a>=420&&a<=429?parseInt(r):a>=430&&a<=439?r:a>=440&&a<=459?parseInt(r):a>=460&&a<=469?parseFloat(r):a>=470&&a<=481||a===999||a>=1e3&&a<=1009?r:a>=1010&&a<=1059?parseFloat(r):a>=1060&&a<=1071?parseInt(r):(console.log("WARNING: Group code does not have a defined type: %j",{code:a,value:r}),r)}function YS(a){if(a==="0")return!1;if(a==="1")return!0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")}const Fb=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function HS(a){return Fb[a]}function We(a){const r={};a.rewind();let s=a.next(),o=s.code;if(r.x=s.value,o+=10,s=a.next(),s.code!=o)throw new Error("Expected code for point value to be "+o+" but got "+s.code+".");return r.y=s.value,o+=10,s=a.next(),s.code!=o?(a.rewind(),r):(r.z=s.value,r)}function ua(a,r,s){switch(r.code){case 0:a.type=r.value;break;case 5:a.handle=r.value;break;case 6:a.lineType=r.value;break;case 8:a.layer=r.value;break;case 48:a.lineTypeScale=r.value;break;case 60:a.visible=r.value===0;break;case 62:a.colorIndex=r.value,a.color=HS(Math.abs(r.value));break;case 67:a.inPaperSpace=r.value!==0;break;case 100:break;case 101:for(;r.code!=0;)r=s.next();s.rewind();break;case 330:a.ownerHandle=r.value;break;case 347:a.materialObjectHandle=r.value;break;case 370:a.lineweight=r.value;break;case 420:a.color=r.value;break;case 1e3:a.extendedData=a.extendedData||{},a.extendedData.customStrings=a.extendedData.customStrings||[],a.extendedData.customStrings.push(r.value);break;case 1001:a.extendedData=a.extendedData||{},a.extendedData.applicationName=r.value;break;default:return!1}return!0}class VS{constructor(){this.ForEntityName="3DFACE"}parseEntity(r,s){const o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 70:o.shape=(s.value&1)===1,o.hasContinuousLinetypePattern=(s.value&128)===128;break;case 10:o.vertices=XS(r,s),s=r.lastReadGroup;break;default:ua(o,s,r);break}s=r.next()}return o}}function XS(a,r){var s=[],o=!1,l=!1,p=4;for(let f=0;f<=p;f++){for(var g={};!a.isEOF()&&!(r.code===0||l);){switch(r.code){case 10:case 11:case 12:case 13:if(o){l=!0;continue}g.x=r.value,o=!0;break;case 20:case 21:case 22:case 23:g.y=r.value;break;case 30:case 31:case 32:case 33:g.z=r.value;break;default:return s}r=a.next()}s.push(g),o=!1,l=!1}return a.rewind(),s}class GS{constructor(){this.ForEntityName="ARC"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=We(r);break;case 40:o.radius=s.value;break;case 50:o.startAngle=Math.PI/180*s.value;break;case 51:o.endAngle=Math.PI/180*s.value,o.angleLength=o.endAngle-o.startAngle;break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ua(o,s,r);break}s=r.next()}return o}}class WS{constructor(){this.ForEntityName="ATTDEF"}parseEntity(r,s){var o={type:s.value,scale:1,textStyle:"STANDARD"};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 1:o.text=s.value;break;case 2:o.tag=s.value;break;case 3:o.prompt=s.value;break;case 7:o.textStyle=s.value;break;case 10:o.startPoint=We(r);break;case 11:o.endPoint=We(r);break;case 39:o.thickness=s.value;break;case 40:o.textHeight=s.value;break;case 41:o.scale=s.value;break;case 50:o.rotation=s.value;break;case 51:o.obliqueAngle=s.value;break;case 70:o.invisible=!!(s.value&1),o.constant=!!(s.value&2),o.verificationRequired=!!(s.value&4),o.preset=!!(s.value&8);break;case 71:o.backwards=!!(s.value&2),o.mirrored=!!(s.value&4);break;case 72:o.horizontalJustification=s.value;break;case 73:o.fieldLength=s.value;break;case 74:o.verticalJustification=s.value;break;case 100:break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ua(o,s,r);break}s=r.next()}return o}}class KS{constructor(){this.ForEntityName="CIRCLE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=We(r);break;case 40:o.radius=s.value;break;case 50:o.startAngle=Math.PI/180*s.value;break;case 51:const l=Math.PI/180*s.value;l<o.startAngle?o.angleLength=l+2*Math.PI-o.startAngle:o.angleLength=l-o.startAngle,o.endAngle=l;break;default:ua(o,s,r);break}s=r.next()}return o}}class ZS{constructor(){this.ForEntityName="DIMENSION"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 2:o.block=s.value;break;case 10:o.anchorPoint=We(r);break;case 11:o.middleOfText=We(r);break;case 12:o.insertionPoint=We(r);break;case 13:o.linearOrAngularPoint1=We(r);break;case 14:o.linearOrAngularPoint2=We(r);break;case 15:o.diameterOrRadiusPoint=We(r);break;case 16:o.arcPoint=We(r);break;case 70:o.dimensionType=s.value;break;case 71:o.attachmentPoint=s.value;break;case 42:o.actualMeasurement=s.value;break;case 1:o.text=s.value;break;case 50:o.angle=s.value;break;default:ua(o,s,r);break}s=r.next()}return o}}class QS{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.center=We(r);break;case 11:o.majorAxisEndPoint=We(r);break;case 40:o.axisRatio=s.value;break;case 41:o.startAngle=s.value;break;case 42:o.endAngle=s.value;break;case 2:o.name=s.value;break;default:ua(o,s,r);break}s=r.next()}return o}}class JS{constructor(){this.ForEntityName="INSERT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 2:o.name=s.value;break;case 41:o.xScale=s.value;break;case 42:o.yScale=s.value;break;case 43:o.zScale=s.value;break;case 10:o.position=We(r);break;case 50:o.rotation=s.value;break;case 70:o.columnCount=s.value;break;case 71:o.rowCount=s.value;break;case 44:o.columnSpacing=s.value;break;case 45:o.rowSpacing=s.value;break;case 210:o.extrusionDirection=We(r);break;default:ua(o,s,r);break}s=r.next()}return o}}class eT{constructor(){this.ForEntityName="LINE"}parseEntity(r,s){const o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.vertices.unshift(We(r));break;case 11:o.vertices.push(We(r));break;case 210:o.extrusionDirection=We(r);break;case 100:break;default:ua(o,s,r);break}s=r.next()}return o}}class tT{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(r,s){const o={type:s.value,vertices:[]};let l=0;for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 38:o.elevation=s.value;break;case 39:o.depth=s.value;break;case 70:o.shape=(s.value&1)===1,o.hasContinuousLinetypePattern=(s.value&128)===128;break;case 90:l=s.value;break;case 10:o.vertices=aT(l,r);break;case 43:s.value!==0&&(o.width=s.value);break;case 210:o.extrusionDirectionX=s.value;break;case 220:o.extrusionDirectionY=s.value;break;case 230:o.extrusionDirectionZ=s.value;break;default:ua(o,s,r);break}s=r.next()}return o}}function aT(a,r){if(!a||a<=0)throw Error("n must be greater than 0 verticies");const s=[];let o=!1,l=!1,p=r.lastReadGroup;for(let g=0;g<a;g++){const f={};for(;!r.isEOF()&&!(p.code===0||l);){switch(p.code){case 10:if(o){l=!0;continue}f.x=p.value,o=!0;break;case 20:f.y=p.value;break;case 30:f.z=p.value;break;case 40:f.startWidth=p.value;break;case 41:f.endWidth=p.value;break;case 42:p.value!=0&&(f.bulge=p.value);break;default:return r.rewind(),o&&s.push(f),r.rewind(),s}p=r.next()}s.push(f),o=!1,l=!1}return r.rewind(),s}class nT{constructor(){this.ForEntityName="MTEXT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 3:o.text?o.text+=s.value:o.text=s.value;break;case 1:o.text?o.text+=s.value:o.text=s.value;break;case 10:o.position=We(r);break;case 11:o.directionVector=We(r);break;case 40:o.height=s.value;break;case 41:o.width=s.value;break;case 50:o.rotation=s.value;break;case 71:o.attachmentPoint=s.value;break;case 72:o.drawingDirection=s.value;break;default:ua(o,s,r);break}s=r.next()}return o}}class rT{constructor(){this.ForEntityName="POINT"}parseEntity(r,s){const l={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:l.position=We(r);break;case 39:l.thickness=s.value;break;case 210:l.extrusionDirection=We(r);break;case 100:break;default:ua(l,s,r);break}s=r.next()}return l}}class sT{constructor(){this.ForEntityName="VERTEX"}parseEntity(r,s){var o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.x=s.value;break;case 20:o.y=s.value;break;case 30:o.z=s.value;break;case 40:break;case 41:break;case 42:s.value!=0&&(o.bulge=s.value);break;case 70:o.curveFittingVertex=(s.value&1)!==0,o.curveFitTangent=(s.value&2)!==0,o.splineVertex=(s.value&8)!==0,o.splineControlPoint=(s.value&16)!==0,o.threeDPolylineVertex=(s.value&32)!==0,o.threeDPolylineMesh=(s.value&64)!==0,o.polyfaceMeshVertex=(s.value&128)!==0;break;case 50:break;case 71:o.faceA=s.value;break;case 72:o.faceB=s.value;break;case 73:o.faceC=s.value;break;case 74:o.faceD=s.value;break;default:ua(o,s,r);break}s=r.next()}return o}}class oT{constructor(){this.ForEntityName="POLYLINE"}parseEntity(r,s){var o={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:break;case 20:break;case 30:break;case 39:o.thickness=s.value;break;case 40:break;case 41:break;case 70:o.shape=(s.value&1)!==0,o.includesCurveFitVertices=(s.value&2)!==0,o.includesSplineFitVertices=(s.value&4)!==0,o.is3dPolyline=(s.value&8)!==0,o.is3dPolygonMesh=(s.value&16)!==0,o.is3dPolygonMeshClosed=(s.value&32)!==0,o.isPolyfaceMesh=(s.value&64)!==0,o.hasContinuousLinetypePattern=(s.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:o.extrusionDirection=We(r);break;default:ua(o,s,r);break}s=r.next()}return o.vertices=iT(r,s),o}}function iT(a,r){const s=new sT,o=[];for(;!a.isEOF();)if(r.code===0){if(r.value==="VERTEX")o.push(s.parseEntity(a,r)),r=a.lastReadGroup;else if(r.value==="SEQEND"){lT(a,r);break}}return o}function lT(a,r){const s={type:r.value};for(r=a.next();!a.isEOF()&&r.code!=0;)ua(s,r,a),r=a.next();return s}class cT{constructor(){this.ForEntityName="SOLID"}parseEntity(r,s){const o={type:s.value,points:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.points[0]=We(r);break;case 11:o.points[1]=We(r);break;case 12:o.points[2]=We(r);break;case 13:o.points[3]=We(r);break;case 210:o.extrusionDirection=We(r);break;default:ua(o,s,r);break}s=r.next()}return o}}class dT{constructor(){this.ForEntityName="SPLINE"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.controlPoints||(o.controlPoints=[]),o.controlPoints.push(We(r));break;case 11:o.fitPoints||(o.fitPoints=[]),o.fitPoints.push(We(r));break;case 12:o.startTangent=We(r);break;case 13:o.endTangent=We(r);break;case 40:o.knotValues||(o.knotValues=[]),o.knotValues.push(s.value);break;case 70:(s.value&1)!=0&&(o.closed=!0),(s.value&2)!=0&&(o.periodic=!0),(s.value&4)!=0&&(o.rational=!0),(s.value&8)!=0&&(o.planar=!0),(s.value&16)!=0&&(o.planar=!0,o.linear=!0);break;case 71:o.degreeOfSplineCurve=s.value;break;case 72:o.numberOfKnots=s.value;break;case 73:o.numberOfControlPoints=s.value;break;case 74:o.numberOfFitPoints=s.value;break;case 210:o.normalVector=We(r);break;default:ua(o,s,r);break}s=r.next()}return o}}class uT{constructor(){this.ForEntityName="TEXT"}parseEntity(r,s){const o={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:o.startPoint=We(r);break;case 11:o.endPoint=We(r);break;case 40:o.textHeight=s.value;break;case 41:o.xScale=s.value;break;case 50:o.rotation=s.value;break;case 1:o.text=s.value;break;case 72:o.halign=s.value;break;case 73:o.valign=s.value;break;default:ua(o,s,r);break}s=r.next()}return o}}var jl={exports:{}},pT=jl.exports,uy;function fT(){return uy||(uy=1,(function(a){(function(r,s){a.exports?a.exports=s():r.log=s()})(pT,function(){var r=function(){},s="undefined",o=typeof window!==s&&typeof window.navigator!==s&&/Trident\/|MSIE /.test(window.navigator.userAgent),l=["trace","debug","info","warn","error"],p={},g=null;function f(D,A){var S=D[A];if(typeof S.bind=="function")return S.bind(D);try{return Function.prototype.bind.call(S,D)}catch{return function(){return Function.prototype.apply.apply(S,[D,arguments])}}}function m(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function u(D){return D==="debug"&&(D="log"),typeof console===s?!1:D==="trace"&&o?m:console[D]!==void 0?f(console,D):console.log!==void 0?f(console,"log"):r}function y(){for(var D=this.getLevel(),A=0;A<l.length;A++){var S=l[A];this[S]=A<D?r:this.methodFactory(S,D,this.name)}if(this.log=this.debug,typeof console===s&&D<this.levels.SILENT)return"No console available for logging"}function b(D){return function(){typeof console!==s&&(y.call(this),this[D].apply(this,arguments))}}function v(D,A,S){return u(D)||b.apply(this,arguments)}function x(D,A){var S=this,P,_,N,w="loglevel";typeof D=="string"?w+=":"+D:typeof D=="symbol"&&(w=void 0);function k(X){var ae=(l[X]||"silent").toUpperCase();if(!(typeof window===s||!w)){try{window.localStorage[w]=ae;return}catch{}try{window.document.cookie=encodeURIComponent(w)+"="+ae+";"}catch{}}}function C(){var X;if(!(typeof window===s||!w)){try{X=window.localStorage[w]}catch{}if(typeof X===s)try{var ae=window.document.cookie,we=encodeURIComponent(w),ue=ae.indexOf(we+"=");ue!==-1&&(X=/^([^;]+)/.exec(ae.slice(ue+we.length+1))[1])}catch{}return S.levels[X]===void 0&&(X=void 0),X}}function L(){if(!(typeof window===s||!w)){try{window.localStorage.removeItem(w)}catch{}try{window.document.cookie=encodeURIComponent(w)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function B(X){var ae=X;if(typeof ae=="string"&&S.levels[ae.toUpperCase()]!==void 0&&(ae=S.levels[ae.toUpperCase()]),typeof ae=="number"&&ae>=0&&ae<=S.levels.SILENT)return ae;throw new TypeError("log.setLevel() called with invalid level: "+X)}S.name=D,S.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},S.methodFactory=A||v,S.getLevel=function(){return N??_??P},S.setLevel=function(X,ae){return N=B(X),ae!==!1&&k(N),y.call(S)},S.setDefaultLevel=function(X){_=B(X),C()||S.setLevel(X,!1)},S.resetLevel=function(){N=null,L(),y.call(S)},S.enableAll=function(X){S.setLevel(S.levels.TRACE,X)},S.disableAll=function(X){S.setLevel(S.levels.SILENT,X)},S.rebuild=function(){if(g!==S&&(P=B(g.getLevel())),y.call(S),g===S)for(var X in p)p[X].rebuild()},P=B(g?g.getLevel():"WARN");var ee=C();ee!=null&&(N=B(ee)),y.call(S)}g=new x,g.getLogger=function(A){if(typeof A!="symbol"&&typeof A!="string"||A==="")throw new TypeError("You must supply a name when creating a logger.");var S=p[A];return S||(S=p[A]=new x(A,g.methodFactory)),S};var R=typeof window!==s?window.log:void 0;return g.noConflict=function(){return typeof window!==s&&window.log===g&&(window.log=R),g},g.getLoggers=function(){return p},g.default=g,g})})(jl)),jl.exports}var hT=fT();const Ge=fi(hT);Ge.setLevel("error");function gT(a){a.registerEntityHandler(VS),a.registerEntityHandler(GS),a.registerEntityHandler(WS),a.registerEntityHandler(KS),a.registerEntityHandler(ZS),a.registerEntityHandler(QS),a.registerEntityHandler(JS),a.registerEntityHandler(eT),a.registerEntityHandler(tT),a.registerEntityHandler(nT),a.registerEntityHandler(rT),a.registerEntityHandler(oT),a.registerEntityHandler(cT),a.registerEntityHandler(dT),a.registerEntityHandler(uT)}class Bb{constructor(){this._entityHandlers={},gT(this)}parse(r){return typeof r=="string"?this._parse(r):(console.error("Cannot read dxf source of type `"+typeof r),null)}registerEntityHandler(r){const s=new r;this._entityHandlers[s.ForEntityName]=s}parseSync(r){return this.parse(r)}parseStream(r){let s="";const o=this;return new Promise((l,p)=>{r.on("data",g=>{s+=g}),r.on("end",()=>{try{l(o._parse(s))}catch(g){p(g)}}),r.on("error",g=>{p(g)})})}_parse(r){const s={};let o=0;const l=r.split(/\r\n|\r|\n/g),p=new zS(l);if(!p.hasNext())throw Error("Empty file");const g=this;let f;function m(){for(f=p.next();!p.isEOF();)if(f.code===0&&f.value==="SECTION"){if(f=p.next(),f.code!==2){console.error("Unexpected code %s after 0:SECTION",zb(f)),f=p.next();continue}f.value==="HEADER"?(Ge.debug("> HEADER"),s.header=u(),Ge.debug("<")):f.value==="BLOCKS"?(Ge.debug("> BLOCKS"),s.blocks=y(),Ge.debug("<")):f.value==="ENTITIES"?(Ge.debug("> ENTITIES"),s.entities=_(!1),Ge.debug("<")):f.value==="TABLES"?(Ge.debug("> TABLES"),s.tables=v(),Ge.debug("<")):f.value==="EOF"?Ge.debug("EOF"):Ge.warn("Skipping section '%s'",f.value)}else f=p.next()}function u(){let k=null,C=null;const L={};for(f=p.next();;){if(gn(f,0,"ENDSEC")){k&&(L[k]=C);break}else f.code===9?(k&&(L[k]=C),k=f.value):f.code===10?C={x:f.value}:f.code===20?C.y=f.value:f.code===30?C.z=f.value:C=f.value;f=p.next()}return f=p.next(),L}function y(){const k={};for(f=p.next();f.value!=="EOF"&&!gn(f,0,"ENDSEC");)if(gn(f,0,"BLOCK")){Ge.debug("block {");const C=b();Ge.debug("}"),w(C),C.name?k[C.name]=C:Ge.error('block with handle "'+C.handle+'" is missing a name.')}else zr(f),f=p.next();return k}function b(){const k={};for(f=p.next();f.value!=="EOF";){switch(f.code){case 1:k.xrefPath=f.value,f=p.next();break;case 2:k.name=f.value,f=p.next();break;case 3:k.name2=f.value,f=p.next();break;case 5:k.handle=f.value,f=p.next();break;case 8:k.layer=f.value,f=p.next();break;case 10:k.position=N(f),f=p.next();break;case 67:k.paperSpace=!!(f.value&&f.value==1),f=p.next();break;case 70:f.value!=0&&(k.type=f.value),f=p.next();break;case 100:f=p.next();break;case 330:k.ownerHandle=f.value,f=p.next();break;case 0:if(f.value=="ENDBLK")break;k.entities=_(!0);break;default:zr(f),f=p.next()}if(gn(f,0,"ENDBLK")){f=p.next();break}}return k}function v(){const k={};for(f=p.next();f.value!=="EOF"&&!gn(f,0,"ENDSEC");)gn(f,0,"TABLE")?(f=p.next(),P[f.value]?(Ge.debug(f.value+" Table {"),k[P[f.value].tableName]=R(f),Ge.debug("}")):Ge.debug("Unhandled Table "+f.value)):f=p.next();return f=p.next(),k}const x="ENDTAB";function R(k){const C=P[k.value],L={};let B=0;for(f=p.next();!gn(f,0,x);)switch(f.code){case 5:L.handle=f.value,f=p.next();break;case 330:L.ownerHandle=f.value,f=p.next();break;case 100:f.value==="AcDbSymbolTable"||zr(f),f=p.next();break;case 70:B=f.value,f=p.next();break;case 0:f.value===C.dxfSymbolName?L[C.tableRecordsProperty]=C.parseTableRecords():(zr(f),f=p.next());break;default:zr(f),f=p.next()}const ee=L[C.tableRecordsProperty];if(ee){let X=(()=>{if(ee.constructor===Array)return ee.length;if(typeof ee=="object")return Object.keys(ee).length})();B!==X&&Ge.warn("Parsed "+X+" "+C.dxfSymbolName+"'s but expected "+B)}return f=p.next(),L}function D(){const k=[];let C={};for(Ge.debug("ViewPort {"),f=p.next();!gn(f,0,x);)switch(f.code){case 2:C.name=f.value,f=p.next();break;case 10:C.lowerLeftCorner=N(f),f=p.next();break;case 11:C.upperRightCorner=N(f),f=p.next();break;case 12:C.center=N(f),f=p.next();break;case 13:C.snapBasePoint=N(f),f=p.next();break;case 14:C.snapSpacing=N(f),f=p.next();break;case 15:C.gridSpacing=N(f),f=p.next();break;case 16:C.viewDirectionFromTarget=N(f),f=p.next();break;case 17:C.viewTarget=N(f),f=p.next();break;case 42:C.lensLength=f.value,f=p.next();break;case 43:C.frontClippingPlane=f.value,f=p.next();break;case 44:C.backClippingPlane=f.value,f=p.next();break;case 45:C.viewHeight=f.value,f=p.next();break;case 50:C.snapRotationAngle=f.value,f=p.next();break;case 51:C.viewTwistAngle=f.value,f=p.next();break;case 79:C.orthographicType=f.value,f=p.next();break;case 110:C.ucsOrigin=N(f),f=p.next();break;case 111:C.ucsXAxis=N(f),f=p.next();break;case 112:C.ucsYAxis=N(f),f=p.next();break;case 110:C.ucsOrigin=N(f),f=p.next();break;case 281:C.renderMode=f.value,f=p.next();break;case 281:C.defaultLightingType=f.value,f=p.next();break;case 292:C.defaultLightingOn=f.value,f=p.next();break;case 330:C.ownerHandle=f.value,f=p.next();break;case 63:case 421:case 431:C.ambientColor=f.value,f=p.next();break;case 0:f.value==="VPORT"&&(Ge.debug("}"),k.push(C),Ge.debug("ViewPort {"),C={},f=p.next());break;default:zr(f),f=p.next();break}return Ge.debug("}"),k.push(C),k}function A(){const k={};let C={},L=0,B;for(Ge.debug("LType {"),f=p.next();!gn(f,0,"ENDTAB");)switch(f.code){case 2:C.name=f.value,B=f.value,f=p.next();break;case 3:C.description=f.value,f=p.next();break;case 73:L=f.value,L>0&&(C.pattern=[]),f=p.next();break;case 40:C.patternLength=f.value,f=p.next();break;case 49:C.pattern.push(f.value),f=p.next();break;case 0:Ge.debug("}"),L>0&&L!==C.pattern.length&&Ge.warn("lengths do not match on LTYPE pattern"),k[B]=C,C={},Ge.debug("LType {"),f=p.next();break;default:f=p.next()}return Ge.debug("}"),k[B]=C,k}function S(){const k={};let C={},L;for(Ge.debug("Layer {"),f=p.next();!gn(f,0,"ENDTAB");)switch(f.code){case 2:C.name=f.value,L=f.value,f=p.next();break;case 62:C.visible=f.value>=0,C.colorIndex=Math.abs(f.value),C.color=mT(C.colorIndex),f=p.next();break;case 70:C.frozen=(f.value&1)!=0||(f.value&2)!=0,f=p.next();break;case 0:f.value==="LAYER"&&(Ge.debug("}"),k[L]=C,Ge.debug("Layer {"),C={},L=void 0,f=p.next());break;default:zr(f),f=p.next();break}return Ge.debug("}"),k[L]=C,k}const P={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:D},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:A},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:S}};function _(k){const C=[],L=k?"ENDBLK":"ENDSEC";for(k||(f=p.next());;)if(f.code===0){if(f.value===L)break;const B=g._entityHandlers[f.value];if(B!=null){Ge.debug(f.value+" {");const ee=B.parseEntity(p,f);f=p.lastReadGroup,Ge.debug("}"),w(ee),C.push(ee)}else{Ge.warn("Unhandled entity "+f.value),f=p.next();continue}}else f=p.next();return L=="ENDSEC"&&(f=p.next()),C}function N(k){const C={};let L=k.code;if(C.x=k.value,L+=10,k=p.next(),k.code!=L)throw new Error("Expected code for point value to be "+L+" but got "+k.code+".");return C.y=k.value,L+=10,k=p.next(),k.code!=L?(p.rewind(),C):(C.z=k.value,C)}function w(k){if(!k)throw new TypeError("entity cannot be undefined or null");k.handle||(k.handle=o++)}return m(),s}}function gn(a,r,s){return a.code===r&&a.value===s}function zr(a){Ge.debug("unhandled group "+zb(a))}function zb(a){return a.code+":"+a.value}function mT(a){return Fb[a]}const _l=360,zo=210,Ps=16,yT="#78d8b0",bT=[1,0,0,1,0,0],vT=new Set(["0","PIPE_PRI","F_PIPE_PRI","PIPE_PRIMARY","F_PIPE_PRIMARY","PRIMARY PIPING"]);function ET(a){const r=String(a??"").trim().toUpperCase().replace(/\s+/g," ");return!r||vT.has(r)}function Pp(a){return/\barrow\b/i.test(a.replace(/[_-]+/g," "))}function Yb(a){return Pp(a)}function wa(a){if(!a||typeof a!="object")return null;const r=a;return typeof r.x=="number"&&Number.isFinite(r.x)&&typeof r.y=="number"&&Number.isFinite(r.y)?{x:r.x,y:r.y}:null}function Hb(a,r){return{x:a[0]*r.x+a[2]*r.y+a[4],y:a[1]*r.x+a[3]*r.y+a[5]}}function wT(a,r){return[a[0]*r[0]+a[2]*r[1],a[1]*r[0]+a[3]*r[1],a[0]*r[2]+a[2]*r[3],a[1]*r[2]+a[3]*r[3],a[0]*r[4]+a[2]*r[5]+a[4],a[1]*r[4]+a[3]*r[5]+a[5]]}function qt(a,r){return typeof a=="number"&&Number.isFinite(a)?a:r}function Yo(a){return Array.isArray(a)?a.map(wa).filter(r=>r!==null):[]}function op(a){const r=wa(a);return r?{...r,z:qt(a.z,0)}:null}function xT(a,r,s){const o={},l=(f,m)=>{const u=op(m);u&&(o[f]=u)},p=(f,m)=>{Array.isArray(m)&&(o[f]=m.flatMap(u=>{const y=op(u);return y?[y]:[]}))},g=(f,m)=>{typeof m=="number"&&Number.isFinite(m)&&(o[f]=m)};if(a==="LINE")p("vertices",r.vertices);else if(a==="ARC"||a==="CIRCLE")l("center",r.center),g("radius",r.radius),a==="ARC"&&(g("startAngle",r.startAngle),g("endAngle",r.endAngle));else if(a==="LWPOLYLINE"||a==="POLYLINE")Array.isArray(r.vertices)&&(o.vertices=r.vertices.flatMap(f=>{if(!f||typeof f!="object")return[];const m=f;return typeof m.x!="number"||typeof m.y!="number"||!Number.isFinite(m.x)||!Number.isFinite(m.y)?[]:[{x:m.x,y:m.y,z:qt(m.z,0),bulge:qt(m.bulge,0)}]})),o.closed=r.shape===!0||(Number(r.shape)&1)===1;else if(a==="ELLIPSE")l("center",r.center),l("majorAxisEndPoint",r.majorAxisEndPoint),g("axisRatio",r.axisRatio),g("startAngle",r.startAngle),g("endAngle",r.endAngle);else if(a==="SPLINE"){p("fitPoints",r.fitPoints),p("controlPoints",r.controlPoints);for(const f of["degreeOfSplineCurve","closed","periodic","knots","weights"]){const m=r[f];(typeof m=="number"||typeof m=="boolean"||Array.isArray(m)&&m.every(u=>typeof u=="number"&&Number.isFinite(u)))&&(o[f]=m)}}else return null;return{type:a,transform:[...s],geometry:o}}function Vb(a){return typeof a!="string"?"":a.replace(/\\P/gi," ").replace(/\\[A-Za-z][^;]*;/g,"").replace(/[{}]/g,"").replace(/\s+/g," ").trim()}function ST(a,r,s){return a.layer&&a.layer!=="0"?r.get(a.layer)??s:s}function TT(a){const r=Math.max(0,Math.min(16777215,Math.trunc(a))),s=`#${r.toString(16).padStart(6,"0")}`,o=r>>16&255,l=r>>8&255,p=r&255;return o+l+p<72?"#d5e1e8":s}function AT(a){const r=new Map;for(const s of Object.values(a.tables?.layer?.layers??{}))Number.isFinite(s.color)&&r.set(s.name,TT(s.color));return r}function DT(a,r,s,o){const l=o-s;if(!Number.isFinite(l))return[];const p=(l%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,g=Math.max(8,Math.min(96,Math.ceil(Math.abs(p)/(Math.PI/24))));return Array.from({length:g+1},(f,m)=>{const u=s+p*m/g;return{x:a.x+Math.cos(u)*r,y:a.y+Math.sin(u)*r}})}function CT(a,r){if(!Array.isArray(a))return[];const s=a.map(p=>{if(!p||typeof p!="object")return null;const g=p,f=wa(g);return f?{...f,bulge:qt(g.bulge,0)}:null}).filter(p=>p!==null);if(s.length<2)return s.map(({x:p,y:g})=>({x:p,y:g}));const o=[{x:s[0].x,y:s[0].y}],l=r?s.length:s.length-1;for(let p=0;p<l;p+=1){const g=s[p],f=s[(p+1)%s.length],m=g.bulge,u=f.x-g.x,y=f.y-g.y,b=Math.hypot(u,y);if(Math.abs(m)<1e-5||b<1e-8){o.push({x:f.x,y:f.y});continue}const v=4*Math.atan(m),x=b*(1-m*m)/(4*m),R={x:(g.x+f.x)/2-y/b*x,y:(g.y+f.y)/2+u/b*x},D=Math.atan2(g.y-R.y,g.x-R.x),A=Math.max(4,Math.min(48,Math.ceil(Math.abs(v)/(Math.PI/16))));for(let S=1;S<=A;S+=1){const P=D+v*S/A;o.push({x:R.x+Math.cos(P)*Math.hypot(g.x-R.x,g.y-R.y),y:R.y+Math.sin(P)*Math.hypot(g.x-R.x,g.y-R.y)})}}return r&&o.length>1&&o.pop(),o}function NT(a,r){const s=wa(a.position)??{x:0,y:0},o=wa(r.position)??{x:0,y:0},l=qt(a.xScale,1),p=qt(a.yScale,1),g=qt(a.rotation,0)*Math.PI/180,f=Math.cos(g),m=Math.sin(g),u=f*l,y=m*l,b=-m*p,v=f*p;return[u,y,b,v,s.x-u*o.x-b*o.y,s.y-y*o.x-v*o.y]}function Er(a,r,s,o,l){const p=r.map(g=>Hb(o,g));p.length>=2&&a.paths.push({points:p,closed:s,color:l})}function Xb(a,r,s,o,l,p,g=new Set,f=0){if(f>8){p.unsupported.add("nested block depth");return}for(const m of a){if(!m)continue;const u=m,y=String(u.type??"").toUpperCase();if(!y||u.visible===!1)continue;const b=ST(u,s,l);if(y==="INSERT"){const x=String(u.name??""),R=Object.entries(r).find(([P])=>P.toUpperCase()===x.toUpperCase())?.[1];if(!R||g.has(x.toUpperCase())){p.unsupported.add(y);continue}p.nestedInsertCount+=1;const D=wT(o,NT(u,R)),A=u.layer&&u.layer!=="0"?s.get(u.layer)??l:l,S=new Set(g);S.add(x.toUpperCase()),Xb(R.entities??[],r,s,D,A,p,S,f+1);continue}const v=xT(y,u,o);if(v&&p.primitives.push(v),y==="LINE"){Er(p,Yo(u.vertices),!1,o,b);continue}if(y==="CIRCLE"||y==="ARC"){const x=wa(u.center),R=qt(u.radius,0);if(!x||R<=0)continue;const D=y==="ARC"?qt(u.startAngle,0):0,A=y==="ARC"?qt(u.endAngle,Math.PI*2):Math.PI*2;Er(p,DT(x,R,D,A),y==="CIRCLE",o,b);continue}if(y==="ELLIPSE"){const x=wa(u.center),R=wa(u.majorAxisEndPoint),D=qt(u.axisRatio,1);if(!x||!R||D<=0)continue;const A=qt(u.startAngle,0),S=qt(u.endAngle,Math.PI*2)-A;if(!Number.isFinite(S))continue;const P=(S%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,_=A+P,N=Math.max(12,Math.min(96,Math.ceil((_-A)*24))),w=Array.from({length:N+1},(k,C)=>{const L=A+(_-A)*C/N;return{x:x.x+R.x*Math.cos(L)-R.y*D*Math.sin(L),y:x.y+R.y*Math.cos(L)+R.x*D*Math.sin(L)}});Er(p,w,Math.abs(_-A-Math.PI*2)<.03,o,b);continue}if(y==="LWPOLYLINE"||y==="POLYLINE"){const x=u.shape===!0||(Number(u.shape)&1)===1,R=CT(u.vertices,x);Er(p,R,x,o,b);continue}if(y==="SOLID"||y==="3DFACE"){const x=Yo(u.points??u.vertices);Er(p,x,!0,o,b);continue}if(y==="SPLINE"){const x=Yo(u.fitPoints).length>=2?Yo(u.fitPoints):Yo(u.controlPoints);Er(p,x,u.closed===!0,o,b),x.length&&p.unsupported.add("SPLINE approximation");continue}if(y==="TEXT"||y==="MTEXT"||y==="ATTDEF"){const x=Vb(u.text),R=wa(u.startPoint)??wa(u.position);if(!R||!x)continue;const D=Hb(o,R),A=Math.max(1,qt(u.textHeight,qt(u.height,2.5))),S=Math.max(Math.hypot(o[0],o[1]),Math.hypot(o[2],o[3]),.1);p.texts.push({point:D,text:x,height:A*S,rotation:qt(u.rotation,0)-Math.atan2(o[1],o[0])*180/Math.PI,color:b});continue}if(y==="POINT"){const x=wa(u.position);x&&(Er(p,[{x:x.x-.5,y:x.y},{x:x.x+.5,y:x.y}],!1,o,b),Er(p,[{x:x.x,y:x.y-.5},{x:x.x,y:x.y+.5}],!1,o,b));continue}p.unsupported.add(y)}}function Gb(a){const r=[...a.paths.flatMap(s=>s.points),...a.texts.map(s=>s.point)];return r.length?{minX:Math.min(...r.map(s=>s.x)),minY:Math.min(...r.map(s=>s.y)),maxX:Math.max(...r.map(s=>s.x)),maxY:Math.max(...r.map(s=>s.y))}:null}function RT(a){const r=Gb(a);if(!r)return;const s=Math.max(r.maxX-r.minX,1e-6),o=Math.max(r.maxY-r.minY,1e-6),l=Math.min((_l-Ps*2)/s,(zo-Ps*2)/o),p=y=>Ps+(y-r.minX)*l+(_l-Ps*2-s*l)/2,g=y=>zo-Ps-(y-r.minY)*l-(zo-Ps*2-o*l)/2,f=y=>y.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;"),m=a.paths.map(y=>{const b=y.points.map((v,x)=>`${x?"L":"M"}${p(v.x).toFixed(2)} ${g(v.y).toFixed(2)}`);return y.closed&&b.push("Z"),`<path d="${b.join(" ")}" fill="none" stroke="${y.color}" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>`}).join(""),u=a.texts.map(y=>{const b=p(y.point.x),v=g(y.point.y),x=Math.max(4,Math.min(20,y.height*l));return`<text x="${b.toFixed(2)}" y="${v.toFixed(2)}" fill="${y.color}" font-family="Arial,sans-serif" font-size="${x.toFixed(2)}" transform="rotate(${-y.rotation.toFixed(2)} ${b.toFixed(2)} ${v.toFixed(2)})">${f(y.text)}</text>`}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${_l} ${zo}" role="img"><rect width="${_l}" height="${zo}" fill="#0d1722"/>${m}${u}</svg>`}function kT(a,r,s){const o=wa(s.position)??{x:0,y:0},l=wa(r.position)??{x:0,y:0},p=qt(s.xScale,1),g=qt(s.yScale,1),f=qt(s.rotation,0)*Math.PI/180,m=Math.cos(f),u=Math.sin(f),y=[{x:a.minX,y:a.minY},{x:a.minX,y:a.maxY},{x:a.maxX,y:a.minY},{x:a.maxX,y:a.maxY}].map(b=>{const v=(b.x-l.x)*p,x=(b.y-l.y)*g;return{x:o.x+m*v-u*x,y:o.y+u*v+m*x}});return{minX:Math.min(...y.map(b=>b.x)),minY:Math.min(...y.map(b=>b.y)),maxX:Math.max(...y.map(b=>b.x)),maxY:Math.max(...y.map(b=>b.y))}}function _T(a){return wa(a.startPoint)??wa(a.position)}function LT(a){return Vb(a.text)}function Wb(a,r){return r.map(s=>s).filter(s=>s.type?.toUpperCase()==="INSERT"&&String(s.name??"").toUpperCase()===a.toUpperCase())}function IT(a){const r=new Map;for(const s of a){const o=String(s.layer??"0").trim()||"0",l=qt(s.rotation,0),p=Math.round((l%360+360)%360),g=`${o.toUpperCase()}|${p}`,f=r.get(g);f?f.count+=1:r.set(g,{layer:o,rotationDegrees:p,count:1})}return[...r.values()].sort((s,o)=>s.layer.localeCompare(o.layer)||s.rotationDegrees-o.rotationDegrees)}function PT(a,r,s,o){const l=Wb(a,o),p=l.filter(b=>!ET(b.layer)),g=l.length>0&&p.length===0;if(Yb(a))return{labels:[],skippedContextOnly:g};const f=o.map(b=>b).filter(b=>["TEXT","MTEXT","ATTRIB"].includes(String(b.type??"").toUpperCase())).map(b=>({text:LT(b),point:_T(b),height:Math.max(1,qt(b.textHeight,qt(b.height,2.5)))})).filter(b=>!!(b.text&&b.point)&&!Pp(b.text)),m=[];for(const b of p){const v=kT(s,r,b),x=(v.minY+v.maxY)/2,R=Math.max(v.maxX-v.minX,1),D=Math.max(v.maxY-v.minY,1),S=f.map(L=>{const B=L.point.x-v.maxX,ee=Math.abs(L.point.y-x),X=Math.max(R*8,L.height*40,30),ae=Math.max(D*1.1,L.height*7);return{...L,dx:B,dy:ee,score:Math.max(0,B)+ee*1.75,maxGap:X,maxVertical:ae}}).filter(L=>L.dx>=-L.height*.5&&L.dx<=L.maxGap&&L.dy<=L.maxVertical).filter(L=>L.dx>=0).sort((L,B)=>L.score-B.score),P=S.length?S:f.map(L=>({...L,dx:L.point.x-v.maxX,dy:Math.abs(L.point.y-x),score:Math.hypot(L.point.x-(v.minX+v.maxX)/2,L.point.y-x),maxGap:Math.max(R*10,L.height*50,40),maxVertical:Math.max(D*2,L.height*10)})).filter(L=>L.score<=Math.max(R*8,D*10,L.height*60)).sort((L,B)=>L.score-B.score),_=P[0];if(!_)continue;const N=Math.max(_.height*2,R*.04,.5),w=Math.max(_.height*7,D*.8),k=P.filter(L=>Math.abs(L.point.x-_.point.x)<=N&&Math.abs(L.point.y-_.point.y)<=w).sort((L,B)=>B.point.y-L.point.y).slice(0,8),C=[...new Set(k.map(L=>L.text))].join(" · ");C&&m.push({text:C,score:_.score})}const u=new Map;for(const b of m){const v=b.text.toLowerCase().replace(/\s+/g," ").trim(),x=u.get(v);(x===void 0||b.score<x.score)&&u.set(v,b)}const y=p.length>1&&u.size>1;return{labels:y?[]:[...u.values()].sort((b,v)=>b.score-v.score).slice(0,4).map(b=>b.text),skippedContextOnly:g,...y?{ambiguous:!0}:{}}}function Yl(a,r){let s;try{s=new Bb().parseSync(a)}catch(g){const f=g instanceof Error?g.message:"Unknown DXF parser error";throw new Error(`The overview DXF could not be read: ${f}`)}if(!s?.blocks||!Array.isArray(s.entities))throw new Error("The overview DXF does not contain readable block and model-space data.");const o=AT(s),l=new Map(Object.entries(s.blocks).map(([g,f])=>[g.toUpperCase(),f])),p=new Map;for(const g of new Set(r)){const f=l.get(g.toUpperCase());if(!f||g.startsWith("*"))continue;const m={paths:[],texts:[],unsupported:new Set,primitives:[],nestedInsertCount:0};Xb(f.entities??[],s.blocks,o,bT,yT,m,new Set([f.name.toUpperCase()]));const u=Gb(m),y=m.paths.flatMap(N=>N.points),b=y.length?{minX:Math.min(...y.map(N=>N.x)),minY:Math.min(...y.map(N=>N.y)),maxX:Math.max(...y.map(N=>N.x)),maxY:Math.max(...y.map(N=>N.y))}:null,v=b?b.maxX-b.minX:null,x=b?b.maxY-b.minY:null,R=m.primitives.reduce((N,w)=>(N[w.type]=(N[w.type]??0)+1,N),{}),D=s.header?.$INSUNITS,A={schemaVersion:1,blockName:g,unitsCode:typeof D=="number"&&Number.isInteger(D)?D:null,basePoint:op(f.position)??{x:0,y:0,z:0},bounds:b,width:v,height:x,aspectRatio:v!==null&&x!==null&&x>0?v/x:null,primitiveCounts:R,primitives:m.primitives,nestedInsertCount:m.nestedInsertCount,unsupportedEntities:[...m.unsupported].sort(),transformPolicy:{allowedRotationsDegrees:null,mirrorAllowed:null,uniformScalingAllowed:null,nonUniformScalingAllowed:null,status:"UNSPECIFIED_REQUIRES_REVIEW"}},S=RT(m),P=IT(Wb(g,s.entities)),_=u?PT(g,f,u,s.entities):{labels:[],skippedContextOnly:!1};p.set(g,{...S?{previewSvg:S}:{},geometryDescriptor:A,nearbyLabels:_.labels,..._.skippedContextOnly?{labelMatchSkipped:!0}:{},..._.ambiguous?{labelMatchAmbiguous:!0}:{},...P.length?{sourcePlacements:P}:{}})}return p}const ct=(a,r)=>a.find(s=>s.code===r)?.value.trim()??"",la=a=>ct(a,0).toUpperCase(),js=a=>ct(a,la(a)==="DIMSTYLE"?105:5).toUpperCase(),zn=(...a)=>{const r=[];for(let s=0;s<a.length;s+=2)r.push({code:Number(a[s]),value:String(a[s+1])});return r},py=a=>a>=330&&a<=369||a>=390&&a<=399||a===480||a===481||a===1005,Lu=a=>["DICTIONARY","ACDBDICTIONARYWDFLT"].includes(la(a)),jT=new Set(["BLOCK","ENDBLK","LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE","VERTEX","SEQEND","SPLINE","POINT","SOLID","TRACE","3DFACE","TEXT","MTEXT","ATTDEF","ATTRIB","INSERT","HATCH","DIMENSION","LEADER","TOLERANCE"]),OT=["VPORT","LTYPE","LAYER","STYLE","VIEW","UCS","APPID","DIMSTYLE","BLOCK_RECORD"];function Yn(a){const r=[];for(const s of a){if(s.code===0&&r.push([]),!r.length)throw new Error("Invalid DXF record boundary.");r[r.length-1].push(s)}return r}function qT(a){let r=0;return a.filter(s=>s.code===102&&s.value.trim()==="{BLKREFS"?(r=1,!1):r?(s.code===102&&s.value.trim().startsWith("{")&&r++,s.code===102&&s.value.trim()==="}"&&r--,!1):!0)}class Kb{sections=new Map;tables=new Map;blocks=new Map;modelRecords;text;objects;recordsByHandle=new Map;blockForRecord=new Map;tableForRecord=new Map;tableHandles=new Set;maxHandle=0;constructor(r){const s=Fs(r);let o="";for(let y=0;y<s.content.length;y+=16384)o+=String.fromCharCode(...s.content.subarray(y,y+16384));this.text=o;const l=o.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;l.length&&l.at(-1)==="";)l.pop();if(l.length%2)throw new Error("DXF has an incomplete group-code/value pair.");const p=[];for(let y=0;y<l.length;y+=2){const b=Number(l[y].trim());if(!Number.isInteger(b))throw new Error("DXF has an invalid group code.");p.push({code:b,value:l[y+1]})}let g="";for(let y=0;y<p.length;y++){const b=p[y];if(b.code===0&&b.value.trim()==="SECTION"){if(g||p[y+1]?.code!==2)throw new Error("Invalid DXF section.");if(g=p[++y].value.trim().toUpperCase(),this.sections.has(g))throw new Error("Duplicate DXF section.");this.sections.set(g,[])}else b.code===0&&b.value.trim()==="ENDSEC"?g="":g&&this.sections.get(g).push(b)}if(g||!this.sections.has("BLOCKS")||!this.sections.has("ENTITIES"))throw new Error("A complete ASCII source DXF with BLOCKS and ENTITIES is required.");const f=Yn(this.sections.get("TABLES")??[]);let m;for(const y of f)if(la(y)==="TABLE")m={name:ct(y,2).toUpperCase(),header:y,records:[]},this.tables.set(m.name,m),this.tableHandles.add(js(y));else if(la(y)==="ENDTAB")m=void 0;else if(m){const b=la(y)==="BLOCK_RECORD"?qT(y):y;m.records.push(b),this.tableForRecord.set(b,m)}let u;for(const y of Yn(this.sections.get("BLOCKS"))){if(la(y)==="BLOCK"){const b=ct(y,2);if(u={name:b,records:[]},this.blocks.has(b.toUpperCase()))throw new Error("Duplicate source block definition.");this.blocks.set(b.toUpperCase(),u)}if(!u)throw new Error("DXF block definition is incomplete.");u.records.push(y),this.blockForRecord.set(y,u.name.toUpperCase()),la(y)==="ENDBLK"&&(u=void 0)}if(u)throw new Error("DXF block definition has no ENDBLK.");this.modelRecords=Yn(this.sections.get("ENTITIES")),this.objects=Yn(this.sections.get("OBJECTS")??[]);for(const y of[...[...this.tables.values()].flatMap(b=>b.records),...[...this.blocks.values()].flatMap(b=>b.records),...this.modelRecords,...this.objects]){const b=js(y);if(b){if(this.recordsByHandle.has(b))throw new Error("Duplicate DXF entity handle.");this.recordsByHandle.set(b,y),this.maxHandle=Math.max(this.maxHandle,parseInt(b,16)||0)}}for(const y of this.tableHandles)this.maxHandle=Math.max(this.maxHandle,parseInt(y,16)||0)}placements(){const r=new Map;for(const s of this.modelRecords){if(la(s)!=="INSERT"||ct(s,67)==="1"||ct(s,410)&&ct(s,410).toUpperCase()!=="MODEL")continue;const o=ct(s,2);if(!o||o.startsWith("*"))continue;const l=this.blocks.get(o.toUpperCase())?.name??o,p=r.get(l)??new Set;p.add(ct(s,8)||"0"),r.set(l,p)}return r}layerDetails(r){const s=this.tables.get("LAYER")?.records.find(o=>ct(o,2).toUpperCase()===r.toUpperCase());return s?`color=${Math.abs(Number(ct(s,62)||"7"))};lineweight=${ct(s,370)||"-3"};linetype=${ct(s,6)||"CONTINUOUS"}`:null}nativeAssetInfo(){const r=this.modelRecords.filter(l=>!["ATTRIB","VERTEX","SEQEND"].includes(la(l))),s=r.length?js(r[0]):"";if(!r.length||!s)throw new Error("Native symbol DXF has no verifiable model-space geometry.");const o=this.tables.get("STYLE")?.records.flatMap(l=>[ct(l,3),ct(l,4)].filter(Boolean).flatMap(p=>/\.shx$/i.test(p)?[p]:p.includes(".")?[]:[`${p}.shx`]))??[];return{entityCount:r.length,firstHandle:s,requiredShapeFonts:[...new Set(o)]}}isolate(r){let s=this.maxHandle+1;const o=()=>(s++).toString(16).toUpperCase(),l=new Set,p=new Set,g=new Set,f=new Set,m=[],u=(U,V=!0)=>{Lu(U)&&V&&!g.has(U)&&(g.add(U),l.has(U)&&m.push(U)),l.has(U)||(l.add(U),m.push(U));const oe=this.tableForRecord.get(U);oe&&f.add(oe)},y=U=>{const V=U.toUpperCase();if(p.has(V))return;const oe=this.blocks.get(V);if(!oe||V.startsWith("*MODEL_SPACE")||V.startsWith("*PAPER_SPACE"))throw new Error(`Missing or external block dependency: ${U}`);if(Number(ct(oe.records[0],70))&28)throw new Error("External-reference blocks require native AutoCAD extraction.");p.add(V),oe.records.forEach(ve=>{if(!jT.has(la(ve)))throw new Error(`Unsupported native block entity: ${la(ve)}`);u(ve)});const de=this.tables.get("BLOCK_RECORD")?.records.find(ve=>ct(ve,2).toUpperCase()===V);if(!de)throw new Error("Source block has no BLOCK_RECORD; save a modern ASCII DXF first.");u(de)},b=(U,V,oe=!0)=>{const de=this.tables.get(U)?.records.find(ve=>ct(ve,2).toUpperCase()===V.toUpperCase());if(de)U==="BLOCK_RECORD"?y(ct(de,2)):u(de);else if(oe)throw new Error(`Missing ${U} dependency: ${V}`)};y(r);for(const U of OT){const V=this.tables.get(U);if(!V)throw new Error(`Native symbol DXF is missing required ${U} table after safe repair.`);if(f.add(V),U==="VPORT"){const oe=V.records.find(de=>ct(de,2).toUpperCase()==="*ACTIVE");if(!oe)throw new Error("Native symbol DXF has no active *ACTIVE VPORT record after safe repair.");u(oe)}}b("LAYER","0");for(const U of["CONTINUOUS","BYLAYER","BYBLOCK"])b("LTYPE",U,!1);for(b("STYLE","STANDARD",!1),b("APPID","ACAD",!1),b("DIMSTYLE","STANDARD",!1);m.length;){const U=m.shift(),V=la(U);if(/IMAGEDEF|UNDERLAY|PDFDEFINITION|DGNDEFINITION|DWFDEFINITION|PROXY/.test(V))throw new Error(`External/proxy dependency ${V} requires native AutoCAD extraction.`);(V==="INSERT"||V==="DIMENSION")&&y(ct(U,2)),V==="DIMENSION"&&b("DIMSTYLE",ct(U,3)||"STANDARD");for(let oe=0;oe<U.length;oe++){const de=U[oe];if(de.code===8&&b("LAYER",de.value.trim()||"0"),de.code===6&&!["BYLAYER","BYBLOCK",""].includes(de.value.trim().toUpperCase())&&b("LTYPE",de.value.trim()),de.code===7&&de.value.trim()&&b("STYLE",de.value.trim()),de.code===1001&&b("APPID",de.value.trim()),!py(de.code)||!de.value.trim()||de.value.trim()==="0"||Lu(U)&&[350,360].includes(de.code)&&U[oe-1]?.code===3&&!g.has(U))continue;const ve=de.value.trim().toUpperCase();if(this.tableHandles.has(ve))continue;const qe=this.recordsByHandle.get(ve);if(!qe)throw new Error(`Unresolved native DXF handle reference (${de.code}).`);const Le=this.blockForRecord.get(qe);if(Le&&!p.has(Le))throw new Error("Block metadata references unrelated drawing geometry; use native AutoCAD extraction.");if(this.modelRecords.includes(qe))throw new Error("Block metadata references source model-space geometry; use native AutoCAD extraction.");la(qe)==="BLOCK_RECORD"?y(ct(qe,2)):u(qe,de.code!==330)}}const v=new Set,x=new Set,R=U=>{if(v.has(U))throw new Error("Circular block references cannot be isolated safely.");if(!x.has(U)){v.add(U);for(const V of this.blocks.get(U).records)["INSERT","DIMENSION"].includes(la(V))&&R(ct(V,2).toUpperCase());v.delete(U),x.add(U)}};if(R(r.toUpperCase()),[...l].some(U=>/BLOCK.*(?:PARAMETER|ACTION)|BLOCKREPRESENTATION|EVALUATION_GRAPH/.test(la(U))||U.some(V=>V.code===3&&/ACAD_ENHANCEDBLOCK/i.test(V.value))))throw new Error("Dynamic blocks require native AutoCAD extraction; their behavior is not approximated.");const D=this.tables.get("BLOCK_RECORD");f.add(D);const A=this.blocks.get(r.toUpperCase()),S=D.records.find(U=>ct(U,2).toUpperCase()===r.toUpperCase()),P=o(),_=(U,V)=>zn(0,"BLOCK_RECORD",5,V,330,js(D.header),100,"AcDbSymbolTableRecord",100,"AcDbBlockTableRecord",2,U,70,0,280,1,281,0),N=U=>U.map(V=>[2,3].includes(V.code)?{...V,value:"*Model_Space"}:la(U)==="BLOCK"&&[10,20,30,70].includes(V.code)?{...V,value:"0"}:V),w=[];for(const U of[...f].sort((V,oe)=>V.name==="BLOCK_RECORD"?1:oe.name==="BLOCK_RECORD"?-1:0)){const V=U.records.filter(oe=>l.has(oe)).map(oe=>oe===S?N(oe):oe);U.name==="BLOCK_RECORD"&&V.push(_("*Paper_Space",P)),w.push(...zn(0,"TABLE",2,U.name,5,js(U.header),330,"0",100,"AcDbSymbolTable",70,V.length),...U.name==="DIMSTYLE"?zn(100,"AcDbDimStyleTable"):[],...V.flat(),...zn(0,"ENDTAB"))}const k=[...N(A.records[0]),...A.records.at(-1),...zn(0,"BLOCK",5,o(),330,P,100,"AcDbEntity",8,"0",100,"AcDbBlockBegin",2,"*Paper_Space",70,0,10,0,20,0,30,0,3,"*Paper_Space",1,"",0,"ENDBLK",5,o(),330,P,100,"AcDbEntity",8,"0",100,"AcDbBlockEnd")];for(const U of p)U!==r.toUpperCase()&&k.push(...this.blocks.get(U).records.flat());const C=this.objects.filter(U=>l.has(U)).map(U=>!Lu(U)||g.has(U)?U:U.filter((V,oe)=>V.code===3&&[350,360].includes(U[oe+1]?.code)?l.has(this.recordsByHandle.get(U[oe+1].value.trim().toUpperCase())):[350,360].includes(V.code)&&U[oe-1]?.code===3?l.has(this.recordsByHandle.get(V.value.trim().toUpperCase())):!0)).flat(),L=A.records.slice(1,-1).flat();if(!L.length)throw new Error("The selected block contains no native entities.");const B=new Set(["$ACADVER","$DWGCODEPAGE","$INSUNITS","$MEASUREMENT","$LTSCALE","$CELTSCALE","$PSLTSCALE"]),ee=[];let X=!1;for(const U of this.sections.get("HEADER")??[])U.code===9&&(X=B.has(U.value.trim())),X&&ee.push(U);ee.push(...zn(9,"$HANDSEED",5,o(),9,"$INSBASE",10,ct(A.records[0],10)||"0",20,ct(A.records[0],20)||"0",30,ct(A.records[0],30)||"0"));const ae=new Set([...l].map(U=>la(U))),we=Yn(this.sections.get("CLASSES")??[]).filter(U=>ae.has(ct(U,1).toUpperCase())).flat(),ue=(U,V)=>[...zn(0,"SECTION",2,U),...V,...zn(0,"ENDSEC")],ce=[...ue("HEADER",ee),...we.length?ue("CLASSES",we):[],...ue("TABLES",w),...ue("BLOCKS",k),...ue("ENTITIES",L),...C.length?ue("OBJECTS",C):[],...zn(0,"EOF")],Y=new Set;for(const U of[...Yn(w),...Yn(k),...Yn(L),...Yn(C)]){const V=js(U);if(V){if(Y.has(V))throw new Error("Duplicate handle in isolated DXF.");Y.add(V)}}for(const U of ce)if(py(U.code)&&U.value.trim()&&U.value.trim()!=="0"&&!Y.has(U.value.trim().toUpperCase()))throw new Error(`A required DXF reference was not retained (${U.code}).`);const Q=ce.map(U=>`${U.code}\r
${U.value}\r
`).join(""),me=new Uint8Array(Q.length);for(let U=0;U<Q.length;U++)me[U]=Q.charCodeAt(U);const xe=Fs(me).content;let j="";for(let U=0;U<xe.length;U+=16384)j+=String.fromCharCode(...xe.subarray(U,U+16384));_p(j);const te=new Bb().parseSync(j);if(!te?.entities.length||!te.blocks?.["*Model_Space"])throw new Error("The isolated block DXF failed its structural round-trip validation.");return xe}}const Iu=(a,r)=>a.item.fields.find(s=>s.label===r)?.value.trim()??"";function fy(a,r){const o=a.reviewCandidates.filter(f=>f.sourceGroup===r).filter(f=>f.item.category==="symbol"),p=[...a.companyItems,...Object.values(a.projects).flatMap(f=>f.items)].filter(f=>f.category==="symbol"&&f.fields.some(m=>m.label==="Source drawing ID"&&m.value===r)).filter(f=>f.reviewStatus==="reviewed"),g=[...new Set(p.flatMap(f=>f.fields.filter(m=>m.label==="Target CAD layer"||m.label==="Source insert layer(s)").map(m=>m.value).filter(Boolean)))];return{pending:o.filter(f=>f.status==="needs-review").length,approved:p.length,dismissed:o.filter(f=>f.status==="dismissed").length,layers:g}}function MT(a,r,s,o=new Set){if(a.format!=="DXF"||a.category!=="company-standard")throw new Error("Select a saved DXF classified as a Legends Library standard. DWG still uses the AutoCAD extractor.");const l=new Kb(r),p=l.placements(),g=[...p].filter(([,A])=>A.size===1&&!!ap[[...A][0].trim().toUpperCase()]),f=Yl(l.text,g.map(([A])=>A)),m=[],u=[],y=new Map,b=[];let v=0;const x=new Set,R=[...s.reviewCandidates],D=(A,S,P,_=[])=>{const N=`extract-${a.id}-${A}-${S}`;return{id:N,proposedScope:"company",sourceGroup:a.id,status:"needs-review",item:{id:N,category:A==="BLOCK"?"symbol":"layer",name:`${A==="BLOCK"?"Block":"LAYER"} · ${S}`,summary:"Extracted from the saved DXF on this device. Only verified placement layers can be batch-approved.",sourceFile:a.label,sourceKind:"extracted-dwg",scope:"company",reviewStatus:"needs-review",canPromote:!1,fields:[{label:A==="BLOCK"?"Block name":"CAD name",value:S},{label:"Source drawing ID",value:a.id},{label:"Source discipline",value:a.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:P},..._]}}};for(const[A,S]of p){const P=[...S][0];if(S.size!==1||!ap[P.trim().toUpperCase()]){b.push({blockName:A,reason:S.size>1?"Mixed placement layers; review required.":"Internal or unsupported placement layer."});continue}const _=R.find(C=>C.sourceGroup===a.id&&Iu(C,"Block name").toUpperCase()===A.toUpperCase()),N=[...s.companyItems,...Object.values(s.projects).flatMap(C=>C.items)].some(C=>C.fields.some(L=>L.label==="Source drawing ID"&&L.value===a.id)&&C.fields.some(L=>L.label==="Block name"&&L.value.trim().toUpperCase()===A.toUpperCase()));if(_&&_.status!=="needs-review"||N){v++;continue}if(!l.layerDetails(P)){b.push({blockName:A,reason:"The placement layer has no LAYER table record."});continue}const k=_&&Iu(_,"Block asset ID")||`${a.id}|${A}`;try{if(!o.has(k)){const L=l.isolate(A),B=f.get(A);m.push({id:k,sourceId:a.id,blockName:A,content:L,format:"DXF",previewSvg:B?.previewSvg??null,nearbyLabels:B?.nearbyLabels??[],labelMatchAmbiguous:B?.labelMatchAmbiguous??!1,labelMatchSkipped:B?.labelMatchSkipped??!0,sourcePlacements:B?.sourcePlacements??[],...B?.geometryDescriptor?{geometryDescriptor:B.geometryDescriptor}:{}})}const C=D("BLOCK",A,`sourceLayer=${P};nativeIsolatedDxf=true`,[{label:"Block asset ID",value:k},{label:"Fallback category",value:""},{label:"Source insert layer(s)",value:P}]);if(_){const L=new Set(["Extracted details","Source insert layer(s)","Block asset ID"]);y.set(_.id,{..._,item:{..._.item,fields:[..._.item.fields.filter(B=>!L.has(B.label)),...C.item.fields.filter(B=>L.has(B.label))]}})}else u.push(C);x.add(P)}catch(C){b.push({blockName:A,reason:C instanceof Error?C.message:"Native DXF isolation failed."})}}for(const A of x){const S=R.some(_=>_.sourceGroup===a.id&&_.item.category==="layer"&&Iu(_,"CAD name").toUpperCase()===A.toUpperCase()),P=s.companyItems.some(_=>_.category==="layer"&&_.fields.some(N=>N.label==="Source drawing ID"&&N.value===a.id)&&_.fields.some(N=>N.label==="CAD name"&&N.value.toUpperCase()===A.toUpperCase()));!S&&!P&&u.push(D("LAYER",A,l.layerDetails(A)))}return{library:{...s,reviewCandidates:[...s.reviewCandidates.map(A=>y.get(A.id)??A),...u]},assets:m,skipped:b,preserved:v,prepared:x.size?m.length:0,eligibleSymbols:g.length,addedSymbols:u.filter(A=>A.item.category==="symbol").length,updatedSymbols:y.size,detectedLayers:[...new Set([...p.values()].flatMap(A=>[...A]))]}}const $T=40*1024*1024,UT=40*1024*1024,FT=48,BT=15,zT=32;function YT(a){const r=[];let s=0;for(;s<a.length;){const o=a[s];if(/\s/.test(o)){s+=1;continue}if(o==="("||o===")"){r.push(o),s+=1;continue}if(o==="."&&(s+1===a.length||/[\s)]/.test(a[s+1]))){r.push(o),s+=1;continue}if(o==='"'){let p="";for(s+=1;s<a.length&&a[s]!=='"';)if(a[s]==="\\"&&s+1<a.length){s+=1;const g=a[s];p+=g==="n"?`
`:g==="r"?"\r":g,s+=1}else p+=a[s],s+=1;if(a[s]!=='"')throw new Error("The AutoCAD geometry log contains an unfinished string value.");s+=1,r.push(JSON.stringify(p));continue}const l=s;for(;s<a.length&&!/[\s()]/.test(a[s]);)s+=1;if(l===s)throw new Error("The AutoCAD geometry log contains an invalid value.");r.push(a.slice(l,s))}return r}function ip(a,r,s=0){if(s>40)throw new Error("The AutoCAD geometry log nesting is too deep to read safely.");const o=a[r.index++];if(o===void 0)throw new Error("The AutoCAD geometry log contains an incomplete geometry record.");if(o!=="("){if(o===")")throw new Error("The AutoCAD geometry log contains an unexpected closing bracket.");return o.startsWith('"')?JSON.parse(o):/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(o)?Number(o):o.toLowerCase()==="nil"?null:o.toUpperCase()==="T"?!0:o}const l=[];for(;r.index<a.length&&a[r.index]!==")";){if(a[r.index]==="."){if(l.length!==1)throw new Error("The AutoCAD geometry log contains a malformed pair.");r.index+=1;const p=ip(a,r,s+1);if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains a malformed pair.");return{kind:"pair",first:l[0],rest:p}}l.push(ip(a,r,s+1))}if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains an incomplete list.");return l}function Ol(a){const r=YT(a),s={index:0},o=ip(r,s);if(s.index!==r.length)throw new Error("The AutoCAD geometry log has trailing geometry data.");return o}function ql(a,r){if(Array.isArray(a))for(const s of a){if(s&&typeof s=="object"&&!Array.isArray(s)&&"kind"in s&&String(s.first)===r)return s.rest;if(Array.isArray(s)&&s.length>=2&&s[0]===r)return s.length===2?s[1]:s.slice(1)}}function HT(a,r){return!Array.isArray(a)||a.length<r||a.slice(0,r).some(s=>typeof s!="number"||!Number.isFinite(s))?null:a.slice(0,r)}function VT(a){if(!Array.isArray(a))return{};const r={};for(const s of a){if(s&&typeof s=="object"&&!Array.isArray(s)&&"kind"in s){const o=s;typeof o.first=="string"&&typeof o.rest=="number"&&Number.isFinite(o.rest)&&(r[o.first]=o.rest);continue}!Array.isArray(s)||typeof s[0]!="string"||typeof s[1]!="number"||!Number.isFinite(s[1])||(r[s[0]]=s[1])}return r}function XT(a){const r=Ol(a);return Array.isArray(r)?r.filter(s=>typeof s=="string"):[]}function GT(a){if(new TextEncoder().encode(a).byteLength>$T)throw new Error("The AutoCAD geometry log is over the 40 MB local review limit.");const r=new Map,s=[],o=new Set;for(const l of a.split(/\r?\n/)){if(l.startsWith("SCAN|")){const D=l.split("|");D[1]&&Number.isInteger(Number(D[2]))&&o.add(`${D[1]}:${Number(D[2])}`);continue}if(l.startsWith("ENTITY|")){const D=l.indexOf("|NORMALIZED=");if(D<0)continue;const A=l.slice(0,D).split("|"),S=A[3]?.trim(),P=A[4]?.trim().toUpperCase();if(!S||!P)continue;const _=Ol(l.slice(D+12));r.set(S,{handle:S,type:P,descriptor:_});continue}if(!l.startsWith("CANDIDATE|"))continue;const p=l.split("|"),g=D=>p.find(A=>A.startsWith(`${D}=`))?.slice(D.length+1),f=p[3]?.trim(),m=p[1]?.trim(),u=Number(p[2]),y=g("SOURCE_HANDLES"),b=g("BOUNDS"),v=g("PRIMITIVE_COUNTS");if(!f||!m||!Number.isInteger(u)||!y)continue;const x=b?Ol(b):null,R=HT(x,4);s.push({id:f,sourceAlias:m,page:u,handles:XT(y),bounds:R,primitiveCounts:v?VT(Ol(v)):{}})}if(r.size===0||o.size===0)throw new Error("This log has no readable geometry scans. Use AUTOCAD_GEOMETRY_SCAN.log from a current runner.");return{entities:r,candidates:s,pages:o.size}}function lp(a){return typeof a=="number"&&Number.isFinite(a)?[a]:Array.isArray(a)?a.flatMap(lp):[]}function Zb(a){return Array.isArray(a)?a.flatMap(r=>{if(r&&typeof r=="object"&&!Array.isArray(r)&&"kind"in r){const s=r;return typeof s.first=="number"&&Number.isFinite(s.first)?[{code:s.first,values:lp(s.rest)}]:[]}return Array.isArray(r)&&typeof r[0]=="number"?[{code:r[0],values:r.slice(1).flatMap(lp)}]:[]}):[]}function WT(a){return Zb(ql(a,"properties"))}function Os(a,r,s=0){const o=a.filter(l=>l.code===r)[s];return!o||o.values.length<2?null:{x:o.values[0],y:o.values[1]}}function cp(a,r,s){if(!Number.isFinite(s)||Math.abs(s)<1e-5)return[a,r];const o=r.x-a.x,l=r.y-a.y,p=Math.hypot(o,l);if(p<1e-9)return[a,r];const g=4*Math.atan(s),f=p*(1-s*s)/(4*s),m={x:(a.x+r.x)/2-l/p*f,y:(a.y+r.y)/2+o/p*f},u=Math.atan2(a.y-m.y,a.x-m.x),y=Math.hypot(a.x-m.x,a.y-m.y),b=Math.max(4,Math.min(32,Math.ceil(Math.abs(g)/(Math.PI/12))));return Array.from({length:b+1},(v,x)=>{const R=u+g*x/b;return{x:m.x+Math.cos(R)*y,y:m.y+Math.sin(R)*y}})}function Qb(a){const r=WT(a.descriptor),s=a.type;if(s==="LINE"){const o=Os(r,10),l=Os(r,11);return o&&l?[o,l]:[]}if(s==="CIRCLE"||s==="ARC"){const o=Os(r,10),l=r.find(b=>b.code===40)?.values[0]??0;if(!o||l<=0)return[];const p=r.find(b=>b.code===50)?.values[0]??0,g=r.find(b=>b.code===51)?.values[0]??Math.PI*2,f=b=>Math.abs(b)>Math.PI*2+.1?b*Math.PI/180:b,m=s==="CIRCLE"?0:f(p);let u=s==="CIRCLE"?Math.PI*2:f(g)-m;for(;u<=0;)u+=Math.PI*2;const y=Math.max(12,Math.min(48,Math.ceil(u/(Math.PI/12))));return Array.from({length:y+1},(b,v)=>{const x=m+u*v/y;return{x:o.x+Math.cos(x)*l,y:o.y+Math.sin(x)*l}})}if(s==="LWPOLYLINE"){const o=[];let l=null;for(const m of r)m.code===10&&m.values.length>=2?(l={point:{x:m.values[0],y:m.values[1]},bulge:0},o.push(l)):m.code===42&&l&&(l.bulge=m.values[0]??0);const p=ql(a.descriptor,"closed")===!0;if(o.length<2)return o.map(m=>m.point);const g=[],f=p?o.length:o.length-1;for(let m=0;m<f;m+=1){const u=o[m],y=o[(m+1)%o.length],b=cp(u.point,y.point,u.bulge);g.push(...m?b.slice(1):b)}return p||g.push(o[o.length-1].point),g}if(s==="POLYLINE"){const o=ql(a.descriptor,"polylineVertices");if(!Array.isArray(o))return[];const l=o.flatMap(m=>{const u=Zb(m),y=Os(u,10);return y?[{point:y,bulge:u.find(b=>b.code===42)?.values[0]??0}]:[]});if(l.length<2)return l.map(m=>m.point);const p=ql(a.descriptor,"closed")===!0,g=p?l.length:l.length-1,f=[];for(let m=0;m<g;m+=1){const u=l[m],y=l[(m+1)%l.length],b=cp(u.point,y.point,u.bulge);f.push(...m?b.slice(1):b)}return p||f.push(l[l.length-1].point),f}if(s==="ELLIPSE"){const o=Os(r,10),l=Os(r,11),p=r.find(y=>y.code===40)?.values[0]??0;if(!o||!l||p<=0)return[];const g=r.find(y=>y.code===41)?.values[0]??0;let m=(r.find(y=>y.code===42)?.values[0]??Math.PI*2)-g;for(;m<=0;)m+=Math.PI*2;if(!Number.isFinite(m)||m>Math.PI*2+1e-6)return[];const u=Math.max(12,Math.min(96,Math.ceil(m/(Math.PI/24))));return Array.from({length:u+1},(y,b)=>{const v=g+m*b/u,x=Math.cos(v),R=Math.sin(v)*p;return{x:o.x+l.x*x-l.y*R,y:o.y+l.y*x+l.x*R}})}return s==="SPLINE"?r.filter(o=>o.code===11&&o.values.length>=2).map(o=>({x:o.values[0],y:o.values[1]})):[]}function Jb(a){const r=a.geometry,s=a.transform,o=p=>({x:s[0]*p.x+s[2]*p.y+s[4],y:s[1]*p.x+s[3]*p.y+s[5]}),l=r.vertices??r.fitPoints??r.controlPoints;if((a.type==="LINE"||a.type==="SPLINE")&&l?.length)return l.map(o);if(a.type==="LWPOLYLINE"||a.type==="POLYLINE"){if(!l?.length)return[];const p=r.closed===!0,g=[],f=p?l.length:l.length-1;for(let m=0;m<f;m+=1){const u=l[m],y=l[(m+1)%l.length],b=cp(u,y,u.bulge??0).map(o);g.push(...m?b.slice(1):b)}return p||g.push(o(l[l.length-1])),g}if(a.type==="CIRCLE"||a.type==="ARC"){const p=r.center,g=Number(r.radius);if(!p||!Number.isFinite(g)||g<=0)return[];const f=a.type==="ARC"?Number(r.startAngle??0):0;let m=a.type==="ARC"?Number(r.endAngle??f+Math.PI*2)-f:Math.PI*2;for(;m<=0;)m+=Math.PI*2;const u=Math.max(12,Math.min(48,Math.ceil(m/(Math.PI/12))));return Array.from({length:u+1},(y,b)=>{const v=f+m*b/u;return o({x:p.x+Math.cos(v)*g,y:p.y+Math.sin(v)*g})})}if(a.type==="ELLIPSE"){const p=r.center,g=r.majorAxisEndPoint,f=Number(r.axisRatio);if(!p||!g||!Number.isFinite(f)||f<=0)return[];const m=Number(r.startAngle??0);let y=Number(r.endAngle??Math.PI*2)-m;for(;y<=0;)y+=Math.PI*2;if(!Number.isFinite(y)||y>Math.PI*2+1e-6)return[];const b=Math.max(12,Math.min(96,Math.ceil(y/(Math.PI/24))));return Array.from({length:b+1},(v,x)=>{const R=m+y*x/b;return o({x:p.x+g.x*Math.cos(R)-g.y*f*Math.sin(R),y:p.y+g.y*Math.cos(R)+g.x*f*Math.sin(R)})})}return[]}function ev(a,r=FT){return a.length<=r?a:Array.from({length:r},(s,o)=>a[Math.floor(o*(a.length-1)/(r-1))])}function dp(a){const r=ev(a.filter(l=>Number.isFinite(l.x)&&Number.isFinite(l.y)));if(r.length<2)return[];const s={x:r.reduce((l,p)=>l+p.x,0)/r.length,y:r.reduce((l,p)=>l+p.y,0)/r.length},o=Math.sqrt(r.reduce((l,p)=>l+(p.x-s.x)**2+(p.y-s.y)**2,0)/r.length);return!Number.isFinite(o)||o<1e-9?[]:r.map(l=>({x:(l.x-s.x)/o,y:(l.y-s.y)/o}))}function up(a){return a.length?{minX:Math.min(...a.map(r=>r.x)),minY:Math.min(...a.map(r=>r.y)),maxX:Math.max(...a.map(r=>r.x)),maxY:Math.max(...a.map(r=>r.y))}:null}function hy(a){return a?Math.hypot(a.maxX-a.minX,a.maxY-a.minY):0}function gy(a,r){const s=new Set([...Object.keys(a),...Object.keys(r)]);let o=0,l=0;for(const p of s){const g=a[p]??0,f=r[p]??0;o+=Math.max(g,f),l+=Math.abs(g-f)}return o===0?0:Math.max(0,1-l/(2*o))}function my(a,r){if(!a||!r)return 0;const s=Math.max(a.maxX-a.minX,1e-9),o=Math.max(a.maxY-a.minY,1e-9),l=Math.max(r.maxX-r.minX,1e-9),p=Math.max(r.maxY-r.minY,1e-9),g=Math.max(s/o,o/s),f=Math.max(l/p,p/l);return Math.exp(-Math.abs(Math.log(g/f)))}function yy(a,r){let s=0;for(const o of a){let l=Number.POSITIVE_INFINITY;for(const p of r){const g=(o.x-p.x)**2+(o.y-p.y)**2;g<l&&(l=g)}s+=l}return s/a.length}function KT(a,r){let s=Number.POSITIVE_INFINITY,o=0;for(let l=0;l<360;l+=BT){const p=l*Math.PI/180,g=Math.cos(p),f=Math.sin(p),m=r.map(y=>({x:g*y.x-f*y.y,y:f*y.x+g*y.y})),u=Math.sqrt((yy(a,m)+yy(m,a))/2);u<s&&(s=u,o=l)}return{residual:s,rotation:o}}function ZT(a,r){return a.handles.flatMap(s=>{const o=r.get(s);return o?Qb(o):[]})}function QT(a,r){const s=new Set;for(const o of a.handles){const l=r.get(o);(!l||Qb(l).length<2)&&s.add(l?.type??"MISSING_ENTITY")}return[...s].sort()}function by(a){return a.primitives.flatMap(Jb)}function JT(a){const r=new Set(["LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE"]),s=new Set(["TEXT","MTEXT","ATTRIB","ATTDEF","HATCH","DIMENSION","LEADER","MLEADER"]),o=a.unsupportedEntities.filter(b=>!s.has(b.toUpperCase())),l=a.primitives.filter(b=>r.has(b.type));if(o.length>0||l.length===0)return null;for(const b of l)if((b.type==="LWPOLYLINE"||b.type==="POLYLINE")&&(b.geometry.vertices??[]).some(v=>Math.abs(v.bulge??0)>1e-6))return null;const p=l.flatMap(Jb),g=ev(dp(p),24);if(g.length<2)return null;const f=up(p);if(!f)return null;const m={PATH:0,CURVE:0};for(const b of l)b.type==="LINE"||b.type==="LWPOLYLINE"||b.type==="POLYLINE"?m.PATH+=1:m.CURVE+=1;const u=f.maxX-f.minX,y=f.maxY-f.minY;return u<=1e-9||y<=1e-9?null:{points:g.map(b=>[b.x,b.y]),primitiveClasses:m,aspectRatio:Math.max(u/y,y/u)}}function e2(a,r){if(new TextEncoder().encode(a).byteLength>UT)throw new Error("The CAD block geometry index is over the 40 MB local review limit.");let s;try{s=JSON.parse(a)}catch{throw new Error("The selected file is not valid CAD_BLOCK_GEOMETRY_INDEX.json.")}if(!s||typeof s!="object"||s.localOnly!==!0||!Array.isArray(s.blocks))throw new Error("This is not a local-only CAD block geometry index from the runner package.");return s.blocks.filter(o=>o.indexStatus==="INDEXED"&&(o.discipline===r||o.discipline==="Shared")&&typeof o.blockName=="string"&&typeof o.blockAssetId=="string"&&o.geometry&&typeof o.geometry=="object")}function t2(a,r,s){const o=GT(a),p=e2(r,s).flatMap(f=>{const m=f.geometry,u=dp(by(m));return!u.length||!m.bounds?[]:[{block:f,geometry:m,cloud:u,bounds:up(by(m)),primitiveCounts:m.primitiveCounts??{}}]}),g=o.candidates.map(f=>{const m=QT(f,o.entities);if(m.length)return{...f,best:null,second:null,status:"UNMATCHED",reason:`Matching withheld because candidate geometry is incomplete or unsupported: ${m.join(", ")}.`};const u=ZT(f,o.entities),y=dp(u),b=f.bounds?{minX:f.bounds[0],minY:f.bounds[1],maxX:f.bounds[2],maxY:f.bounds[3]}:up(u);if(p.length===0)return{...f,best:null,second:null,status:"NO_INDEXED_BLOCKS",reason:"No indexed approved blocks for this discipline."};if(y.length<2||!b)return{...f,best:null,second:null,status:"UNMATCHED",reason:"Candidate has too little supported geometry to compare."};const x=p.map(_=>({prepared:_,coarse:my(b,_.geometry.bounds)*.75+gy(f.primitiveCounts,_.primitiveCounts)*.25})).sort((_,N)=>N.coarse-_.coarse).slice(0,zT).map(({prepared:_})=>_).map(_=>{const N=gy(f.primitiveCounts,_.primitiveCounts),w=my(b,_.geometry.bounds),k=KT(y,_.cloud),C=Math.exp(-k.residual*2.5),L=Math.max(0,Math.min(1,C*.7+N*.2+w*.1)),B=hy(b),ee=hy(_.geometry.bounds),X=String(_.block.category??""),ae=/\b(equipment|tower|vessel|tank|exchanger|column|drum)\b/i.test(X);return{blockAssetId:String(_.block.blockAssetId),blockName:String(_.block.blockName),category:X,targetLayer:String(_.block.targetLayer??""),score:L,geometryResidual:k.residual,primitiveSimilarity:N,aspectSimilarity:w,rotationDegrees:k.rotation,estimatedUniformScale:ae||ee<=1e-9?null:B/ee,indexStatus:String(_.block.indexStatus)}}).sort((_,N)=>N.score-_.score||_.blockName.localeCompare(N.blockName)),R=x[0]??null,D=x[1]??null,A=R&&D?R.score-D.score:Number.POSITIVE_INFINITY,S=!R||R.score<.9?"UNMATCHED":A<.02?"AMBIGUOUS_REVIEW":R.score>=.97?"HIGH_CANDIDATE_REVIEW":"REVIEW";return{...f,best:R,second:D,status:S,reason:S==="AMBIGUOUS_REVIEW"?"Top library shapes are too close to identify safely.":S==="UNMATCHED"?"No geometry match reached the initial review threshold.":"Experimental shape score only; human confirmation is required."}});return{scan:o,candidates:g,indexedBlockCount:p.length}}function a2(a,r){return JSON.stringify({schemaVersion:1,localOnly:!0,discipline:r,generatedAt:new Date().toISOString(),note:"Experimental geometry similarity rankings. Scores are not probabilities or approvals. Source geometry was not changed; every candidate requires human review.",pagesScanned:a.scan.pages,indexedBlocks:a.indexedBlockCount,candidates:a.candidates},null,2)}function vy(a){return a===void 0?"—":`${(a*100).toFixed(1)}%`}function n2(a){return a==null?"Review":`${a.toFixed(3)}×`}function r2({discipline:a}){const[r,s]=q.useState(null),[o,l]=q.useState(null),[p,g]=q.useState(null),[f,m]=q.useState(""),[u,y]=q.useState(!1),b=async()=>{if(!r||!o){m("Choose both AUTOCAD_GEOMETRY_SCAN.log and CAD_BLOCK_GEOMETRY_INDEX.json.");return}y(!0),m(""),g(null);try{const[x,R]=await Promise.all([r.text(),o.text()]),D=t2(x,R,a);g({scanName:r.name,indexName:o.name,discipline:a,indexedBlockCount:D.indexedBlockCount,pagesScanned:D.scan.pages,candidates:D.candidates})}catch(x){m(x instanceof Error?x.message:"The local geometry report could not be compared.")}finally{y(!1)}},v=()=>{if(!p)return;const x=a2({scan:{entities:new Map,candidates:[],pages:p.pagesScanned},candidates:p.candidates,indexedBlockCount:p.indexedBlockCount},p.discipline),R=URL.createObjectURL(new Blob([x],{type:"application/json"})),D=document.createElement("a");D.href=R,D.download="LOCAL_GEOMETRY_MATCH_REVIEW.json",D.click(),URL.revokeObjectURL(R)};return c.jsxs("section",{className:"geometry-match-review","aria-labelledby":"geometry-match-title","data-testid":"panel-geometry-match-review",children:[c.jsxs("div",{className:"geometry-match-heading",children:[c.jsx("span",{className:"geometry-match-icon",children:c.jsx(pw,{size:16})}),c.jsxs("div",{children:[c.jsx("h3",{id:"geometry-match-title",children:"Review geometry matches"}),c.jsx("p",{children:"Compare a local AutoCAD scan with indexed approved blocks. Source drawings are not changed."})]})]}),c.jsxs("div",{className:"geometry-match-privacy",children:[c.jsx($u,{size:14})," Both files are read and compared in this browser; nothing is uploaded."]}),c.jsx("p",{className:"geometry-match-instructions",children:"Use the scan log from AutoCAD and the index file from that same runner kit. The result is a local review aid only."}),c.jsxs("div",{className:"geometry-match-inputs",children:[c.jsxs("label",{children:[c.jsx("span",{children:"AutoCAD geometry scan log"}),c.jsx("input",{type:"file",accept:".log,.txt","aria-label":"Select AutoCAD geometry scan log",onChange:x=>{s(x.currentTarget.files?.[0]??null),g(null),m("")},"data-testid":"input-geometry-scan-log"})]}),c.jsxs("label",{children:[c.jsx("span",{children:"CAD block geometry index"}),c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Select CAD block geometry index",onChange:x=>{l(x.currentTarget.files?.[0]??null),g(null),m("")},"data-testid":"input-cad-geometry-index"})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:u||!r||!o,"data-testid":"button-build-geometry-match-report",children:[c.jsx(Xr,{size:14}),u?"Comparing…":"Compare geometry"]})]}),f&&c.jsx("p",{className:"geometry-match-error",role:"alert",children:f}),p&&c.jsxs("div",{className:"geometry-match-results","data-testid":"geometry-match-results",children:[c.jsxs("div",{className:"geometry-match-summary",role:"status",children:[p.discipline,": ",p.candidates.length," candidate group(s) across ",p.pagesScanned," page(s); ",p.indexedBlockCount," indexed approved block(s)."]}),p.indexedBlockCount===0&&c.jsx("p",{className:"geometry-match-warning",children:"No matching indexed blocks were found for this discipline. Check that the selected index came from the same local runner package."}),p.indexedBlockCount>0&&p.candidates.length===0&&c.jsx("p",{className:"geometry-match-warning",children:"AutoCAD found no geometry candidate groups on the scanned pages. No blocks were inserted or drawings changed."}),p.candidates.map(x=>c.jsxs("article",{className:"geometry-match-card",children:[c.jsxs("div",{className:"geometry-match-card-head",children:[c.jsx("strong",{children:x.id}),c.jsx("span",{className:`geometry-match-status status-${x.status.toLowerCase()}`,children:x.status.replaceAll("_"," ")})]}),c.jsxs("div",{className:"geometry-match-card-meta",children:["Page ",x.page," · ",x.handles.length," source entities · ",x.sourceAlias]}),c.jsxs("div",{className:"geometry-match-ranking",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Best shape match"}),c.jsx("strong",{children:x.best?.blockName??"No match"}),c.jsxs("small",{children:[vy(x.best?.score)," · ",x.best?.targetLayer||"no target layer"," ·"," ",x.best?.rotationDegrees??"—","° · scale ",n2(x.best?.estimatedUniformScale)]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Second match"}),c.jsx("strong",{children:x.second?.blockName??"—"}),c.jsx("small",{children:vy(x.second?.score)})]})]}),c.jsx("p",{children:x.reason})]},`${x.sourceAlias}-${x.page}-${x.id}`)),c.jsxs("div",{className:"geometry-match-foot",children:[c.jsx("span",{children:"Experimental shape scores are not probabilities or approvals. Every result needs a person to verify it."}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:v,"data-testid":"button-download-geometry-match-report",children:[c.jsx(Vr,{size:13})," Download local report"]})]})]})]})}const Ey=250*1024*1024,wy=500*1024*1024,pp={"needs-review":"Needs review","company-standard":"Legends Library standard","project-example":"Project example","markup-reference":"Markup reference",ignore:"Do not use"};function xy(a,r){return r&&a==="project-example"?"Client-specific library source":pp[a]}function Pu(){return globalThis.crypto?.randomUUID?.()??`source-${Date.now()}-${Math.random().toString(36).slice(2)}`}function ju(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(2)} MB`}function Sy(a){return(a.replace(/\\/g,"/").split("/").pop()??"").replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,"").trim().slice(0,180)||"Unnamed CAD drawing"}function s2({onAddPdfs:a,discipline:r,clientFolderId:s,clientFolderLabel:o}){const[l,p]=q.useState([]),[g,f]=q.useState({}),[m,u]=q.useState([]),[y,b]=q.useState([]),[v,x]=q.useState(""),[R,D]=q.useState(""),[A,S]=q.useState(!1),[P,_]=q.useState(!1),[N,w]=q.useState(""),[k,C]=q.useState(!1),[L,B]=q.useState(()=>{try{return yn().reviewCandidates.filter(F=>F.status==="needs-review").length}catch{return 0}}),[ee,X]=q.useState(!1),[ae,we]=q.useState(""),[ue,ce]=q.useState(!1),[Y,Q]=q.useState(!1),[me,xe]=q.useState(0),[j,te]=q.useState([]);q.useEffect(()=>{const F=()=>xe(pe=>pe+1);return window.addEventListener(li,F),window.addEventListener("storage",F),window.addEventListener("focus",F),()=>{window.removeEventListener(li,F),window.removeEventListener("storage",F),window.removeEventListener("focus",F)}},[]);const U=q.useMemo(()=>{try{const F=yn();return Object.fromEntries(l.map(pe=>[pe.id,fy(F,pe.id)]))}catch{return{}}},[l,me]);q.useEffect(()=>{rp().then(F=>{p(F),f(Object.fromEntries(F.map(pe=>[pe.id,{category:pe.category,discipline:pe.discipline,projectLabel:pe.projectLabel}])))}).catch(F=>{w(F instanceof Error?F.message:"The local CAD library could not be opened.")})},[]);const V=q.useMemo(()=>RS(l,r,s),[l,r,s]),oe=q.useMemo(()=>V.filter(F=>F.category==="company-standard"||!!s&&F.category==="project-example"&&F.projectLabel===s),[V,s]);q.useEffect(()=>{oe.some(F=>F.id===ae)||we(oe[0]?.id??"")},[oe,ae]);const de=q.useMemo(()=>V.reduce((F,pe)=>(F[pe.category]+=1,F),{"needs-review":0,"company-standard":0,"project-example":0,"markup-reference":0,ignore:0}),[V]),ve=m.some(F=>s?F.projectLabel!==s:!!F.projectLabel),qe=async F=>{S(!0),D(""),w(""),x(""),C(!1),u([]),b([]);try{if(F.size>Ey)throw new Error("The archive is larger than the 250 MB limit for this local test.");const pe=ay(new Uint8Array(await F.arrayBuffer())),ge=Object.entries(pe).filter(([Ve])=>!Ve.endsWith("/")),z=ge.filter(([Ve])=>/\.(dwg|dxf)$/i.test(Ve)&&!/_OVERVIEW\.dxf$/i.test(Ve)),fe=ge.filter(([Ve])=>/\.pdf$/i.test(Ve)),Ce=ge.filter(([Ve])=>/\.bak$/i.test(Ve)).length;if([...z,...fe].reduce((Ve,[,Me])=>Ve+Me.byteLength,0)>wy)throw new Error("The PDF and CAD source files together exceed the 500 MB local test limit.");if(z.length===0&&fe.length===0)throw new Error("No PDF, DWG, or source DXF files were found in this ZIP. Overview DXFs and other file types are not saved as source drawings.");const Ie=z.map(([Ve,Me],_t)=>({id:Pu(),label:`Source CAD ${String(l.length+_t+1).padStart(3,"0")}`,reviewFilename:Sy(Ve),category:"needs-review",discipline:r,format:/\.dxf$/i.test(Ve)?"DXF":"DWG",projectLabel:s??"",bytes:Me.byteLength,content:Me})),Qe=fe.map(([,Ve],Me)=>({id:Pu(),label:`PDF ${String(Me+1).padStart(2,"0")}`,file:new File([Ve],`SOURCE_${String(Me+1).padStart(2,"0")}.pdf`,{type:"application/pdf"})}));u(Ie),b(Qe),x(`Found ${z.length} CAD drawing file(s) and ${fe.length} PDF file(s). ${Ce} backup file(s) ignored.`),z.length?D("Assign a use to each CAD drawing before saving it. ZIP filenames are shown only during review; the saved library keeps generic source IDs."):D("No CAD drawings to add. You can add the extracted PDF to the conversion queue.")}catch(pe){w(pe instanceof Error?pe.message:"The ZIP could not be read. Check that it is not damaged or password-protected.")}finally{S(!1)}},Le=async F=>{w(""),x(""),D(""),u([]),b([]),C(!1);const pe=F.filter(z=>/\.(dwg|dxf)$/i.test(z.name)&&!/_OVERVIEW\.dxf$/i.test(z.name));if(pe.length!==F.length){w("Choose source DWG/DXF files only. Overview DXFs are not source drawings.");return}if(pe.reduce((z,fe)=>z+fe.size,0)>wy){w("The selected CAD source files exceed the 500 MB local test limit.");return}if(!pe.length){w("Choose at least one DWG or DXF source drawing.");return}S(!0);try{const z=await Promise.all(pe.map(async(fe,Ce)=>({id:Pu(),label:`Source CAD ${String(l.length+Ce+1).padStart(3,"0")}`,reviewFilename:Sy(fe.name),category:"needs-review",discipline:r,format:/\.dxf$/i.test(fe.name)?"DXF":"DWG",projectLabel:s??"",bytes:fe.size,content:new Uint8Array(await fe.arrayBuffer())})));u(z),x(`Prepared ${z.length} CAD source file(s) for local review.`),D("Choose the correct discipline and local library category for each file. Filenames are discarded when saved.")}catch(z){w(z instanceof Error?z.message:"The CAD files could not be read locally.")}finally{S(!1)}},mt=async()=>{if(ve){w("The selected client folder changed after these files were staged. Re-select the original client folder or add the files again.");return}if(m.some(F=>F.category==="needs-review")){w("Choose a category for every CAD drawing before saving the library.");return}if(m.some(F=>["project-example","markup-reference"].includes(F.category)&&!F.projectLabel?.trim())){w("Enter a neutral project code for every project example and markup reference.");return}_(!0),w("");try{let F=0;const pe=m.filter(fe=>fe.category!=="ignore").map(fe=>{const Ce=fe.format==="DXF"?Fs(fe.content):null;return F+=Ce?.repairs.length??0,{id:fe.id,label:fe.label,category:fe.category,discipline:fe.discipline,format:fe.format,projectLabel:fe.projectLabel,bytes:Ce?.content.byteLength??fe.bytes,content:Ce?.content??fe.content}});await qS(pe);const ge=await rp();p(ge),f(Object.fromEntries(ge.map(fe=>[fe.id,{category:fe.category,discipline:fe.discipline,projectLabel:fe.projectLabel}])));const z=m.length-pe.length;u([]),D(`${pe.length} source CAD drawing(s) saved in this browser's local library. ${z} marked “Do not use”. ${F} DXF symbol name(s) repaired in local copies; original disk files unchanged.`)}catch(F){w(F instanceof Error?F.message:"The CAD sources could not be saved locally.")}finally{_(!1)}},nt=(F,pe)=>{f(ge=>({...ge,[F.id]:{...F,...ge[F.id],...pe}}))},ot=async F=>{const pe=g[F.id]??{category:F.category,discipline:F.discipline,projectLabel:F.projectLabel};if(["project-example","markup-reference"].includes(pe.category)&&!pe.projectLabel?.trim()){w("Enter a neutral project code before saving this project-specific source.");return}w("");try{await MS(F.id,pe),p(ge=>ge.map(z=>z.id===F.id?{...z,...pe,...pe.projectLabel?.trim()?{projectLabel:pe.projectLabel.trim()}:{projectLabel:void 0}}:z))}catch(ge){w(ge instanceof Error?ge.message:"The source drawing category could not be changed.")}},dt=async()=>{if(!(!oe.length||ee)){X(!0),w("");try{const F=await BS(oe),pe=URL.createObjectURL(F),ge=document.createElement("a");ge.href=pe,ge.download="local-cad-extractor-kit.zip",ge.click(),window.setTimeout(()=>URL.revokeObjectURL(pe),1e3),D(`Local extractor kit prepared with ${oe.length} source CAD drawing(s).`)}catch(F){w(F instanceof Error?F.message:"The local extractor kit could not be prepared.")}finally{X(!1)}}},Mt=async F=>{const pe=oe.some(z=>z.id===ae)?ae:oe[0]?.id,ge=oe.find(z=>z.id===pe);if(!ge){w("Choose a reviewed source drawing before importing its extraction.");return}if(ge.category==="project-example"&&!ge.projectLabel?.trim()){w("Add a neutral project code to this source drawing before importing its extraction.");return}ce(!0),w("");try{if(F.size>Ey)throw new Error("The extraction ZIP is larger than the 250 MB limit for this local test.");const z=ay(new Uint8Array(await F.arrayBuffer())),fe=Object.entries(z).find(([$t])=>/\.tsv$/i.test($t));if(!fe)throw new Error("The ZIP must contain CAD_STANDARDS.tsv from PIDEXTRACTSTANDARDS.");const ye=new TextDecoder().decode(fe[1]).split(/\r?\n/).filter(Boolean);if(ye.length<2||!ye[0].toUpperCase().includes("KIND")||!ye[0].toUpperCase().includes("NAME"))throw new Error("The ZIP contains an invalid CAD_STANDARDS.tsv extraction.");const Ie=yn(),Qe=Object.entries(z).filter(([$t])=>/_OVERVIEW\.dxf$/i.test($t)),Ve=ye[1]?.split("	")[0]?.trim()??"",Me=Qe.find(([$t])=>$t.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===`${Ve}_OVERVIEW.dxf`.toLowerCase());if(Qe.length&&(!Me||Qe.length!==1))throw new Error("Include exactly one overview DXF for this extraction, named with the same SOURCE alias as the TSV (for example SOURCE_001_OVERVIEW.dxf).");const _t=ye.slice(1).flatMap($t=>{const[,_a,ut]=$t.split("	");return _a?.trim().toUpperCase()==="BLOCK"&&ut?.trim()?[ut.trim()]:[]});if(Me&&Me[1].byteLength>30*1024*1024)throw new Error("The overview DXF exceeds the 30 MB preview limit. Keep the original extraction unchanged and export a smaller Legends-only overview.");let be=null,et="",rt=!1;if(Me)be=new TextDecoder("windows-1252").decode(Me[1]),et="overview DXF";else if(ge.format==="DXF"&&ge.bytes<=30*1024*1024)try{be=new TextDecoder("windows-1252").decode(await ni(ge.id)),et="saved source DXF"}catch{rt=!0}else ge.format==="DXF"&&(rt=!0);let Qt=new Map;if(be)try{Qt=Yl(be,_t)}catch{rt=!0}const ke=[],ka=[],At=[];for(const $t of ye.slice(1)){const[,_a,ut,It=""]=$t.split("	"),Ut=_a?.trim().toUpperCase(),wt=ut?.trim();if(!wt||!Ty[Ut])continue;const La=Ut==="BLOCK"&&Yb(wt)?"directionArrow":Ty[Ut],ra=Ut==="BLOCK"?Qt.get(wt):void 0;let cn;if(Ut==="BLOCK"){const pa=It.match(/(?:^|;)asset=([^;]+)/i)?.[1]?.trim();if(!pa){At.push(wt);continue}const fa=pa.replaceAll("\\","/").split("/").at(-1),Dt=Object.entries(z).find(([Ke])=>Ke.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===fa?.toLowerCase());if(!fa||!Dt){At.push(wt);continue}cn=`${ge.id}|${wt}`,ka.push({id:cn,sourceId:ge.id,blockName:wt,content:Dt[1],format:"DWG",...be&&!rt?{previewSvg:ra?.previewSvg??null,nearbyLabels:ra?.nearbyLabels??[],labelMatchSkipped:ra?.labelMatchSkipped??!1,labelMatchAmbiguous:ra?.labelMatchAmbiguous??!1,sourcePlacements:ra?.sourcePlacements??[],...ra?.geometryDescriptor?{geometryDescriptor:ra.geometryDescriptor}:{}}:{}})}const en=`extract-${ge.id}-${Ut}-${wt}`;if(Ie.reviewCandidates.find(pa=>pa.id===en))continue;const Ia=ge.category==="project-example",Tn=[{label:Ut==="BLOCK"?"Block name":"CAD name",value:wt},{label:"Source drawing ID",value:ge.id},{label:"Source discipline",value:ge.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:It.replace(/(?:^|;)asset=[^;]*/i,"").trim()||"No additional table details"},...Ut==="BLOCK"?[{label:"Block asset ID",value:cn??""},{label:"Fallback category",value:""},...ra?.sourcePlacements?.length?[{label:"Source insert layer(s)",value:[...new Set(ra.sourcePlacements.map(pa=>pa.layer))].join(", ")},{label:"Source insert rotation(s)",value:ra.sourcePlacements.map(pa=>`${pa.rotationDegrees}° on ${pa.layer} (${pa.count})`).join("; ")}]:[]]:[]];ke.push({id:en,item:{id:en,category:La,name:`${La==="directionArrow"?"Direction Arrow":Ut==="BLOCK"?"Block":Ut.replaceAll("_"," ")} · ${wt}`,summary:"Extracted locally from a source CAD drawing; confirm each value before use.",sourceFile:ge.label,sourceKind:"extracted-dwg",scope:Ia?"project":"company",reviewStatus:"needs-review",...Ia?{projectId:ge.projectLabel,projectName:ge.projectLabel===s&&o||ge.projectLabel}:{},canPromote:!1,fields:Tn},proposedScope:Ia?"project":"company",sourceGroup:ge.id,...Ia?{projectId:ge.projectLabel,projectName:ge.projectLabel===s&&o||ge.projectLabel}:{},status:"needs-review"})}const Et={...Ie,reviewCandidates:[...Ie.reviewCandidates,...ke],auditTrail:ke.length?[{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:"Local CAD extraction added for review",detail:`${ke.length} extracted records from ${ge.label} were added as pending review.`,...ge.projectLabel?{projectName:ge.projectLabel===s&&o||ge.projectLabel}:{}},...Ie.auditTrail]:Ie.auditTrail},Jt=be&&!rt?cy(Et,ge.id,Qt).library:Et;await sp(ka),ci(Jt),B(Jt.reviewCandidates.filter($t=>$t.status==="needs-review").length),D((ke.length?`${ke.length} extracted record(s) added to Drafting standards for review. Nothing was approved automatically.`:"No new records found; the extracted names are already in the review queue or standards library.")+(Qt.size?` ${Qt.size} local block previews and source placement-layer details read from the ${et}. Nearby labels remain suggestions and need confirmation.`:rt?" The source preview could not be read; the valid extracted records were still imported without preview-based layer evidence.":ge.format==="DWG"&&!Me?" To identify DWG blocks and their placement layers, include the source *_OVERVIEW.dxf exported with PIDEXPORTOVERVIEW.":"")+(At.length?` ${At.length} block asset(s) were missing and skipped: ${[...new Set(At)].slice(0,5).join(", ")}${At.length>5?", …":""}. Other valid records were kept.`:""))}catch(z){w(z instanceof Error?z.message:"The CAD extraction could not be imported.")}finally{ce(!1)}},yt=async()=>{const F=oe.find(ge=>ge.id===ae&&ge.category==="company-standard"),pe=F?[F.id]:[];if(!(!F||Y)){Q(!0),w(""),D(""),te([]);try{let ge=yn();const z=JSON.stringify(ge);let fe="";if(F.format==="DXF"){D(`${F.label}: extracting native blocks from the saved DXF on this device…`),await new Promise(rt=>window.setTimeout(rt,0));const be=await IS(),et=MT(F,await ni(F.id),ge,be);if(JSON.stringify(yn())!==z)throw new Error("The library changed during DXF preparation. No records were changed; retry with the latest library.");await sp(et.assets,!0),ge=et.library,te(et.skipped),fe=`${et.addedSymbols} new symbol record(s), ${et.assets.length} native block file(s) saved; ${et.preserved} previously reviewed symbol(s) preserved. ${et.skipped.length} item(s) excluded or need native extraction/review. `}const Ce=ge.reviewCandidates.filter(be=>be.sourceGroup===F.id&&be.status==="needs-review"&&be.proposedScope==="company"&&be.item.category==="symbol"&&be.item.sourceKind==="extracted-dwg");if(!Ce.length){const be=fy(ge,F.id);D(`${F.label}: ${fe}No pending symbols to approve. ${be.approved} already approved; ${be.dismissed} dismissed. ${F.format==="DXF"?"Only named model-space INSERTs on supported placement layers can be extracted. See excluded items below; loose geometry is not guessed into blocks.":"For DWG, import this source’s extraction ZIP with its individual block files."}`);return}let ye="";if(F.format==="DXF"){if(F.bytes>30*1024*1024)throw new Error("This saved source DXF exceeds the 30 MB recovery limit. Import its extraction with a smaller Legends-only overview DXF.");const be=await ni(F.id),et=Ce.map(ke=>ke.item.fields.find(ka=>ka.label==="Block name")?.value.trim()??"").filter(Boolean),rt=Yl(new TextDecoder("windows-1252").decode(be),et),Qt=cy(ge,F.id,rt);ge=Qt.library,ye=`${Qt.recoveredSymbols} pending symbol(s) have INSERT-layer evidence in the saved DXF; ${Qt.updatedRecords} existing record(s) updated. `}const Ie=new Set(pe),Qe=new Set(ge.reviewCandidates.filter(be=>be.status==="needs-review"&&Ie.has(be.sourceGroup)&&be.item.category==="symbol").map(be=>be.item.fields.find(et=>et.label==="Block asset ID")?.value.trim()??"").filter(Boolean)),Ve=new Set;await Promise.all([...Qe].map(async be=>{try{await Ub(be),Ve.add(be)}catch{}}));const Me=SS(ge,pe,Ve);if(JSON.stringify(yn())!==z)throw new Error("The local standards library changed while this source was being checked. No approval changes were saved; retry to use the latest records.");ci(Me.library),B(Me.library.reviewCandidates.filter(be=>be.status==="needs-review").length);const _t=Object.values(Me.skipped).reduce((be,et)=>be+et,0);D(`${F.label}: ${fe}${ye}`+(Me.approvedSymbols?`${Me.approvedSymbols} layer-matched symbol(s) approved for shared PFD/P&ID use; ${Me.approvedLayers} placement layer(s) approved or updated.`:"0 symbols approved. Only exact placement layers with local block files and a matching layer record can be approved.")),_t&&D(be=>`${be} ${Me.skipped.missingAsset} missing asset(s), ${Me.skipped.unsupportedLayer} internal/unsupported layer item(s), ${Me.skipped.ambiguousLayer} ambiguous layer item(s), ${Me.skipped.missingLayer} missing layer record(s), and ${Me.skipped.invalidCandidate} invalid item(s) stayed unapproved.`)}catch(ge){D(""),w(ge instanceof Error?ge.message:"The categorized CAD mappings could not be approved locally.")}finally{Q(!1)}}};return c.jsxs("section",{className:"local-cad-library","aria-labelledby":"local-library-title","data-testid":"panel-local-cad-library",children:[c.jsxs("div",{className:"local-library-heading",children:[c.jsx("div",{className:"local-library-icon",children:c.jsx(Sp,{size:17})}),c.jsxs("div",{className:"local-library-title",children:[c.jsx("div",{className:"pdf-kicker",children:"SOURCE DRAWINGS · LOCAL ONLY"}),c.jsx("h3",{id:"local-library-title",children:s?"Client Source Library":"Legends Library"}),c.jsx("p",{children:s?`Manage CAD sources for ${o||"this client folder"}. Company standards remain the common default.`:"Add common company standards here. Select a Client folder first to add client-specific sources."})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-files",children:[A?c.jsx(Ra,{size:14,className:"pdf-spin"}):c.jsx(Xr,{size:14}),A?"Reading…":"Add DWG/DXF",c.jsx("input",{type:"file",accept:".dwg,.dxf,application/acad,application/x-dwg,application/dxf",multiple:!0,"aria-label":"Add local DWG or DXF source files",disabled:A,onChange:F=>{const pe=[...F.currentTarget.files??[]];pe.length&&Le(pe),F.currentTarget.value=""},"data-testid":"input-add-cad-files"})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-archive",children:[A?c.jsx(Ra,{size:14,className:"pdf-spin"}):c.jsx(wp,{size:14}),A?"Reading ZIP…":"Add ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Add a ZIP with PDF and DWG/DXF source files",disabled:A,onChange:F=>{const pe=F.currentTarget.files?.[0];pe&&qe(pe),F.currentTarget.value=""},"data-testid":"input-add-cad-archive"})]})]}),c.jsxs("div",{className:"local-library-privacy",children:[c.jsx(Xn,{size:14}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay in this browser."})," ",s?"This client source list is separate from the company Legends Library and other client folders.":"Company-standard sources remain shared defaults; project/client examples stay separate from them."]})]}),c.jsxs("div",{className:"local-library-extraction",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:[c.jsx(cw,{size:14})," Extract drawing standards locally"]}),c.jsx("span",{children:"Package eligible DWG/DXF drawings with a Windows AutoCAD script. It exports only blocks actually inserted on approved equipment, instrument, or inline-component layers—unused internal definitions are skipped. Source drawings are not uploaded or changed."})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{dt()},disabled:!oe.length||ee,"data-testid":"button-download-cad-extractor",children:[ee?c.jsx(Ra,{size:13,className:"pdf-spin"}):c.jsx(Vr,{size:13}),ee?"Preparing…":"Download extractor kit"]})]}),oe.length>0&&c.jsxs("div",{className:"local-library-import",children:[c.jsxs("label",{children:[c.jsx("span",{children:"Import AutoCAD extraction"}),c.jsx("select",{value:ae||oe[0].id,disabled:Y||ue,onChange:F=>{we(F.target.value),D(""),te([])},"aria-label":"Source drawing for extracted CAD standards",children:oe.map(F=>c.jsxs("option",{value:F.id,children:[F.label," · ",F.format??"DWG"," · ",U[F.id]?.pending??0," pending / ",U[F.id]?.approved??0," approved",F.projectLabel?` · ${F.projectLabel}`:""]},F.id))})]}),c.jsxs("label",{className:"btn subtle local-library-import-button",children:[ue?c.jsx(Ra,{size:13,className:"pdf-spin"}):c.jsx(Xr,{size:13}),ue?"Importing…":"Import extraction ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Import AutoCAD extraction ZIP",disabled:ue||Y,onChange:F=>{const pe=F.currentTarget.files?.[0];pe&&Mt(pe),F.currentTarget.value=""}})]})]}),!s&&oe.some(F=>F.category==="company-standard")&&c.jsxs("div",{className:"local-library-approval",children:[c.jsxs("div",{children:[c.jsx("strong",{children:"Approve supplied company symbols by placement layer"}),c.jsxs("span",{"data-testid":"status-selected-cad-source",children:[oe.find(F=>F.id===ae)?.label,": ",U[ae]?.pending??0," pending symbols · ",U[ae]?.approved??0," approved · ",U[ae]?.dismissed??0," dismissed.",U[ae]?.layers.length?` Approved placement layers: ${U[ae].layers.join(", ")}.`:""]}),c.jsx("span",{children:"Saved DXF: this action first extracts individual native blocks locally, then approves eligible placement-layer mappings. Existing approvals, dismissed records and saved block files are not replaced. DWG: import its AutoCAD extraction ZIP first."}),c.jsx("span",{children:"Approves only the selected company source; repeat for each source. EQUIP/f_Equip → equipment, f_Inst → instruments, f_Pipe_Inline → inline components. Mappings are shared across PFD and P&ID; internal, ambiguous, and missing-asset items stay pending."})]}),c.jsxs("button",{className:"btn primary",type:"button",disabled:Y||ue||!oe.some(F=>F.id===ae&&F.category==="company-standard"),onClick:()=>{yt()},"data-testid":"button-approve-categorized-company-symbols",children:[Y?c.jsx(Ra,{size:13,className:"pdf-spin"}):c.jsx($s,{size:13}),Y?"Extracting / approving locally…":"Approve selected source"]})]}),N&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-library-error",children:[c.jsx(Sr,{size:15}),c.jsx("span",{children:N})]}),R&&c.jsx("p",{className:"local-library-message",role:"status","aria-live":"polite","data-testid":"status-cad-source-action",children:R}),j.length>0&&c.jsxs("details",{className:"local-library-message",children:[c.jsxs("summary",{children:[j.length," excluded / review-required DXF items — show reasons"]}),c.jsx("ul",{children:j.map(F=>c.jsxs("li",{children:[F.blockName,": ",F.reason]},F.blockName))})]}),c.jsxs("div",{className:"local-library-summary","aria-label":"Local library totals",children:[c.jsxs("span",{children:[c.jsx("strong",{children:V.length})," saved CAD sources",s?` for ${o||"this client"}`:` for ${r}`]}),c.jsxs("span",{children:[c.jsx("strong",{children:de["company-standard"]})," Legends Library sources"]}),c.jsxs("span",{children:[c.jsx("strong",{children:de["project-example"]+de["markup-reference"]})," reference drawings"]}),de["needs-review"]>0&&c.jsxs("span",{className:"local-library-review-count",children:[c.jsx("strong",{children:de["needs-review"]})," need review"]})]}),c.jsx(r2,{discipline:r}),L>0&&c.jsxs(da,{href:r==="PFD"?"/standards-review/pfd":"/standards-review/pid",className:"btn primary local-library-review-link","data-testid":"link-review-extracted-standards",children:[c.jsx(tw,{size:15}),"Review extracted standards",c.jsx("span",{children:L})]}),ve&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-source-folder-mismatch",children:[c.jsx(Sr,{size:15}),c.jsx("span",{children:"These staged drawings belong to a different folder. Re-select that client or add them again here."})]}),v&&c.jsx("div",{className:"local-library-archive-summary",role:"status",children:v}),y.length>0&&c.jsxs("div",{className:"local-library-pdf-list","aria-label":"PDF files found in ZIP",children:[y.map(F=>c.jsxs("div",{className:"local-library-pdf-row",children:[c.jsx(Vn,{size:15}),c.jsx("span",{children:F.label}),c.jsx("span",{className:"pdf-file-meta",children:ju(F.file.size)})]},F.id)),c.jsxs("button",{className:"btn subtle",type:"button",disabled:k,onClick:()=>{a(y.map(({file:F})=>F)),C(!0)},"data-testid":"button-add-archive-pdfs",children:[k?c.jsx($s,{size:14}):c.jsx(Xr,{size:14}),k?"PDFs added to queue":"Add PDF(s) to conversion queue"]})]}),m.length>0&&c.jsxs("div",{className:"local-library-staging",children:[c.jsxs("div",{className:"local-library-staging-title",children:[c.jsx("strong",{children:s?"Choose how each client CAD drawing will be used":"Choose what each CAD drawing is for"}),c.jsx("span",{children:"Unmarked files will not be saved."})]}),m.map(F=>c.jsxs("label",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-name",children:[c.jsx("span",{className:"local-library-source-id",children:F.label}),c.jsxs("span",{className:"local-library-review-filename",title:F.reviewFilename,children:["Selected filename: ",F.reviewFilename]})]}),c.jsx("span",{className:"pdf-file-meta",children:ju(F.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Category for ${F.label}`,value:F.category,onChange:pe=>{const ge=pe.target.value;u(z=>z.map(fe=>fe.id===F.id?{...fe,category:ge}:fe))},"data-testid":`select-category-${F.id}`,children:Object.entries(pp).filter(([pe])=>s?["needs-review","project-example","markup-reference","ignore"].includes(pe):["needs-review","company-standard","ignore"].includes(pe)).map(([pe,ge])=>c.jsx("option",{value:pe,children:xy(pe,s)},pe))}),c.jsx("select",{"aria-label":`Discipline for ${F.label}`,value:F.discipline,onChange:pe=>{const ge=pe.target.value;u(z=>z.map(fe=>fe.id===F.id?{...fe,discipline:ge}:fe))},"data-testid":`select-discipline-${F.id}`,children:["PFD","P&ID","Shared"].map(pe=>c.jsx("option",{value:pe,children:pe},pe))}),["project-example","markup-reference"].includes(F.category)&&!s&&c.jsx("input",{"aria-label":`Project code for ${F.label}`,placeholder:"Neutral project code",value:F.projectLabel,onChange:pe=>u(ge=>ge.map(z=>z.id===F.id?{...z,projectLabel:pe.target.value}:z)),"data-testid":`input-project-${F.id}`}),s&&["project-example","markup-reference"].includes(F.category)&&c.jsx("span",{className:"local-library-scope-tag",children:"Saved only in this client folder"})]})]},F.id)),c.jsxs("button",{className:"btn primary local-library-save",type:"button",disabled:P||ve||m.some(F=>F.category==="needs-review"||["project-example","markup-reference"].includes(F.category)&&!F.projectLabel?.trim()),onClick:()=>{mt()},"data-testid":"button-save-local-library",children:[P?c.jsx(Ra,{size:14,className:"pdf-spin"}):c.jsx(Dm,{size:14}),P?"Saving locally…":"Save reviewed sources locally"]})]}),V.length>0&&c.jsxs("details",{className:"local-library-saved-list",children:[c.jsxs("summary",{children:["Saved source drawings for ",r," (",V.length,")"]}),c.jsx("div",{className:"local-library-saved-items",children:V.map(F=>c.jsxs("div",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-id",children:[F.label," · ",F.format??"DWG",s?` · ${F.category==="company-standard"?"Company standard":"This client"}`:F.projectLabel?` · ${F.projectLabel}`:""]}),c.jsx("span",{className:"pdf-file-meta",children:ju(F.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Change category for ${F.label}`,value:(g[F.id]??F).category,disabled:!!(s&&F.category==="company-standard"),onChange:pe=>nt(F,{category:pe.target.value}),"data-testid":`saved-category-${F.id}`,children:Object.entries(pp).filter(([pe])=>!s||["project-example","markup-reference","ignore"].includes(pe)||F.category==="company-standard"&&pe==="company-standard").map(([pe,ge])=>c.jsx("option",{value:pe,children:xy(pe,s)},pe))}),c.jsx("select",{"aria-label":`Change discipline for ${F.label}`,value:(g[F.id]??F).discipline,disabled:!!(s&&F.category==="company-standard"),onChange:pe=>nt(F,{discipline:pe.target.value}),"data-testid":`saved-discipline-${F.id}`,children:["PFD","P&ID","Shared"].map(pe=>c.jsx("option",{value:pe,children:pe},pe))}),!s&&["project-example","markup-reference"].includes((g[F.id]??F).category)&&c.jsx("input",{"aria-label":`Neutral project code for ${F.label}`,placeholder:"Neutral project code",value:(g[F.id]??F).projectLabel??"",onChange:pe=>nt(F,{projectLabel:pe.target.value}),"data-testid":`saved-project-${F.id}`}),c.jsxs("button",{className:"btn subtle local-library-save-row",type:"button",disabled:!!(s&&F.category==="company-standard"),onClick:()=>{ot(F)},"data-testid":`button-save-source-${F.id}`,children:[c.jsx(Dm,{size:12})," Save"]})]})]},F.id))})]}),c.jsx("p",{className:"local-library-limit",children:"Extracted records enter the standards review queue. Only approved mappings are offered to the matching PFD or P&ID runner. Original DWG/DXF sources stay local; only individually exported block files are included with approved mappings."})]})}const Ty={BLOCK:"symbol",LAYER:"layer",TEXT_STYLE:"textStyle",LINETYPE:"linetype",DIMENSION_STYLE:"dimensionStyle"},fp=100*1024*1024,hp=500*1024*1024,o2="pid-studio-local-pdfs",on="meta",Wr="bytes",di="extractedText";class Zt extends Error{code;constructor(r,s){super(s),this.code=r}}let qs=null,Ay=Promise.resolve();function Zr(){return qs||(qs=new Promise((a,r)=>{if(typeof indexedDB>"u"){r(new Zt("storage","This browser does not allow local file storage."));return}const s=indexedDB.open(o2,2);s.onupgradeneeded=o=>{const l=s.result;o.oldVersion<1&&(l.createObjectStore(on,{keyPath:"id"}).createIndex("discipline","discipline"),l.createObjectStore(Wr)),o.oldVersion<2&&l.createObjectStore(di)},s.onsuccess=()=>{s.result.onversionchange=()=>{s.result.close(),qs=null},a(s.result)},s.onerror=()=>{qs=null,r(new Zt("storage","Local storage could not be opened."))},s.onblocked=()=>{qs=null,r(new Zt("storage","Local file storage is busy in another tab. Close that tab and reload."))}})),qs}function wi(a){return new Promise((r,s)=>{a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)})}function sc(a){return new Promise((r,s)=>{a.oncomplete=()=>r(),a.onerror=()=>s(a.error),a.onabort=()=>s(a.error??new Zt("storage","Local storage write was stopped."))})}function oc(a){const r=Ay.then(a,a);return Ay=r.catch(()=>{}),r}async function tv(a){const r=await Zr();return(await wi(r.transaction(on).objectStore(on).index("discipline").getAll(a))).sort((o,l)=>o.aliasNumber-l.aliasNumber)}async function i2(){const a=await Zr();return(await wi(a.transaction(on).objectStore(on).getAll())).reduce((s,o)=>s+o.size,0)}async function Dy(a){const r=globalThis.crypto?.subtle;if(!r)throw new Error("hash-unsupported");const s=await r.digest("SHA-256",a);return Array.from(new Uint8Array(s)).map(o=>o.toString(16).padStart(2,"0")).join("")}function l2(a,r){return oc(async()=>{if(!r())throw new Zt("cancelled","Cancelled.");const s=a.bytes.byteLength;if(s>fp)throw new Zt("too-large","This PDF is larger than 100 MB.");const l=(await Zr()).transaction([on,Wr],"readwrite"),p=sc(l);p.catch(()=>{});const g=l.objectStore(on),f=await wi(g.getAll());if(!r())throw l.abort(),new Zt("cancelled","Cancelled.");if(f.some(b=>b.discipline===a.discipline&&b.hash===a.hash))throw l.abort(),new Zt("duplicate","This PDF has the same content as a saved file.");if(f.reduce((b,v)=>b+v.size,0)+s>hp)throw l.abort(),new Zt("total-limit","Saved PDFs would pass the 500 MB total limit.");const u=f.filter(b=>b.discipline===a.discipline).reduce((b,v)=>Math.max(b,v.aliasNumber),0)+1,y={id:globalThis.crypto?.randomUUID?.()??`pdf-${Date.now()}-${Math.random().toString(36).slice(2)}`,discipline:a.discipline,aliasNumber:u,alias:`PDF ${u}`,originalName:a.originalName?.trim()||void 0,size:s,pageCount:a.pageCount,hash:a.hash,addedAt:Date.now(),analysisStatus:"queued",analysisPagesDone:0,analysisRecordCount:0,autocadStatus:"not-connected"};g.put(y),l.objectStore(Wr).put(a.bytes,y.id);try{await p}catch(b){throw b instanceof Zt?b:new Zt("storage","The browser could not save this PDF. Storage may be full.")}return y})}async function Ho(a){const r=await Zr(),s=await wi(r.transaction(Wr).objectStore(Wr).get(a));if(!s)throw new Zt("storage","Saved PDF data was not found.");return s}function c2(a,r){return oc(async()=>{const o=(await Zr()).transaction(di,"readwrite"),l=sc(o);o.objectStore(di).put({pdfId:a,pages:r,savedAt:Date.now()},a);try{await l}catch{throw new Zt("storage","PDF text was read, but the browser could not save the full text index. The original PDF remains saved; free browser storage and retry EDE.")}})}function Ll(a,r){return oc(async()=>{const o=(await Zr()).transaction(on,"readwrite"),l=sc(o),p=o.objectStore(on),g=await wi(p.get(a));if(!g)throw o.abort(),new Zt("storage","The saved PDF record could not be found.");const f={...g,...r};return p.put(f),await l,f})}function av(a){return oc(async()=>{const s=(await Zr()).transaction([on,Wr,di],"readwrite");a.forEach(o=>{s.objectStore(on).delete(o),s.objectStore(Wr).delete(o),s.objectStore(di).delete(o)}),await sc(s)})}async function d2(a){const r=await tv(a);await av(r.map(s=>s.id))}class Ml extends Error{constructor(r,s,o){super(`Page ${r}: ${s} failed.`,{cause:o}),this.page=r,this.stage=s,this.name="PdfExtractionError"}page;stage}function Cy(a){const r=a instanceof Ml?a.cause:a,s=r instanceof Error?r.name:"",o=r instanceof Error?r.message:typeof r=="string"?r:"",l=a instanceof Ml?`Page ${a.page} stopped during ${a.stage}. `:"EDE extraction stopped. ";return s==="QuotaExceededError"?`${l}Browser storage is full. Back up your records before freeing space, then retry EDE. Your PDF remains saved.`:/memory|allocation|out of bounds/i.test(o)?`${l}The browser ran out of processing memory. Close other tabs and retry, or use a desktop browser. Your PDF remains saved.`:/fetch|network|importscripts|load.*(worker|core|language)|failed to load/i.test(o)||a instanceof Ml&&a.stage==="OCR startup"?`${l}The OCR engine could not start. Check internet access to the OCR downloads, then retry EDE. Your PDF remains saved.`:`${l}The PDF could not be processed${s?` (${s.replace(/[^a-zA-Z0-9]/g,"").slice(0,60)})`:""}. Retry EDE; if it repeats, report this message. Your PDF remains saved.`}const u2=/\b(?:[A-Z]{1,8}\s*[-–]\s*)+\d{1,6}[A-Z0-9]*(?:\s*[-–]\s*[A-Z0-9]{1,8}){0,3}\b/g,nv=/^(?:AI|DI|FI|FIC|FIT|FQI|LI|LIC|LS|LSH|LSL|PI|PIC|PDI|PSH|PSL|TI|TIC|TSH|TSL|TT|PT|FT|LT|FC|PC|TC|LC|AT|AIT|XV|ZSO|ZSC)$/,p2=/^(?:XV|HV|BV|CV|PCV|FCV|LCV|TCV|PSV|PRV|MOV|SDV|BDV|NRV)$/,f2=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/g,h2=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/i;function rv(a){const r=a.map((m,u)=>({token:m,index:u,value:m.text.trim().toUpperCase()})).filter(({value:m})=>nv.test(m)),s=a.map((m,u)=>({token:m,index:u,value:m.text.trim().toUpperCase()})).filter(({value:m})=>/^\d{2,5}[A-Z]?$/.test(m)),o=[];for(const m of r){const u=m.token.location,y=u.x+u.width/2,b=u.y+u.height/2;for(const v of s){if(m.index===v.index)continue;const x=v.token.location,R=x.x+x.width/2,D=x.y+x.height/2,A=Math.max(u.height,x.height,.004),S=R-y,P=D-b,_=Math.abs(P)<=A*.55&&S>=-A*.4&&S<=A*4,N=P>A*.35&&P<=A*3.2&&Math.abs(S)<=A*1.8;if(!_&&!N)continue;const w=_?1-Math.abs(P)/(A*.55)-Math.max(0,S)/(A*8):.85-P/(A*10)-Math.abs(S)/(A*8);o.push({functionToken:m.token,numberToken:v.token,score:w})}}const l=new Map,p=new Map,g=m=>{const u=[...m].sort((y,b)=>b.score-y.score);if(u.length&&!(u.length>1&&u[0].score-u[1].score<.18))return u[0]};for(const m of r.map(({token:u})=>u)){const u=g(o.filter(y=>y.functionToken===m));u&&l.set(m,u)}for(const m of s.map(({token:u})=>u)){const u=g(o.filter(y=>y.numberToken===m));u&&p.set(m,u)}const f=[];for(const m of o){if(l.get(m.functionToken)!==m||p.get(m.numberToken)!==m)continue;const u=m.functionToken.text.trim().toUpperCase(),y=m.numberToken.text.trim().toUpperCase();f.push({tag:`${u}-${y}`,type:"Instrument",tagPrefix:u,tagSequence:y,tagSuffix:"",pageNumber:m.functionToken.location.pageNumber,sourceLocations:[m.functionToken.location,m.numberToken.location]})}return f}function sv(a,r,s,o,l,p,g){const f=Math.max(0,Math.min(1,o/r)),m=Math.max(0,Math.min(1,l/s)),u=Math.max(f,Math.min(1,p/r)),y=Math.max(m,Math.min(1,g/s));return u-f<1e-4||y-m<1e-4?null:{pageNumber:a,x:f,y:m,width:u-f,height:y-m}}function Ny(a,r,s){const o=[s.convertToViewportPoint(a.x,a.y),s.convertToViewportPoint(a.x+a.width,a.y),s.convertToViewportPoint(a.x,a.y+a.height),s.convertToViewportPoint(a.x+a.width,a.y+a.height)];return sv(r,s.width,s.height,Math.min(...o.map(l=>l[0]??0)),Math.min(...o.map(l=>l[1]??0)),Math.max(...o.map(l=>l[0]??0)),Math.max(...o.map(l=>l[1]??0)))}function g2(a,r,s){const o=[],l=[];for(const p of a){if(!p.text||!p.bbox)continue;const g=sv(r,s.pageWidth,s.pageHeight,s.left+p.bbox.x0,s.top+p.bbox.y0,s.left+p.bbox.x1,s.top+p.bbox.y1);g&&(l.push({text:p.text,location:g}),o.push(...$l(p.text,r).map(f=>({...f,sourceLocations:[g]}))))}return[...o,...rv(l)]}function m2(a,r){const s=new Map;for(const o of[...a??[],...r??[]]){const l=[o.pageNumber,o.x.toFixed(4),o.y.toFixed(4),o.width.toFixed(4),o.height.toFixed(4)].join(":");!s.has(l)&&s.size<500&&s.set(l,o)}return[...s.values()]}function y2(a){let r="",s;for(const o of a){const l=o.str.replace(/\s+/g," ").trim();if(l){if(s){const p=Math.max(1,(s.fontSize+o.fontSize)/2),g=Math.abs(o.y-s.y)<=Math.max(1,p*.3),f=o.x-(s.x+s.width),m=g&&f>=-p*.5&&f<=p*.35;r+=m?"":g?" ":`
`,s.hasEOL&&!r.endsWith(`
`)&&(r+=`
`)}r+=l,s=o}}return r}function Ry(a,r=1700,s=120){if(a<=r+s)return[0];const o=r-s,l=[];for(let p=0;p<a;p+=o){const g=a-(p+r);if(g>0&&g<=s&&(p=a-r),l.push(p),p+r>=a)break}return l}function $l(a,r){const s=new Map,o=a.toUpperCase();for(const l of o.matchAll(u2)){const p=l[0].replace(/[–\s]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),g=p.split("-").filter(Boolean),f=p.match(/^([A-Z]{1,8})-(\d{1,6})(.*)$/);if(!f||p.length<3||g.length>6)continue;const m=f[1],u=/^OPC$/.test(m)?"OPC":p2.test(m)?"Valve":nv.test(m)?"Instrument":g.length>=4||/^(?:L|LINE|PIPE)$/.test(m)?"Pipe Run":"Equipment",y=Math.max(0,(l.index??0)-180),b=Math.min(o.length,(l.index??0)+l[0].length+180),v=o.slice(y,b),x=v.match(/\b(?:NOMINAL\s*(?:DIA(?:METER)?|SIZE)|NPS|DN)\s*[:#=-]?\s*((?:(?:NPS|DN)\s*)?\d{1,3}(?:\s*\/\s*\d{1,2})?(?:\.\d+)?\s*(?:MM|IN(?:CH)?)?["”]?)/i)?.[1]??"",R=v.match(/\b(?:PIPING|PIPE)\s*(?:MATERIAL|MATL)\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})/i)?.[1]??"",D=v.match(/\b(?:DESIGN\s+FLOW|FLOW(?:\s+RATE)?)\s*[:=]?\s*([\d.,]+\s*(?:KG\/H|M3\/H|NM3\/H|T\/H|L\/S|M3\/D|GPM|M\/S)?)/i)?.[1]??"",A=v.match(/\b(?:HEAT\s+TRACING|HEAT\s+TRACE)\s*[:=]?\s*(YES|NO|ELECTRIC|STEAM|NONE|N\/A)\b/i)?.[1]??"",S=v.match(/\bINSULATION\s*[:=]?\s*([A-Z0-9][A-Z0-9._/-]{0,12})/i)?.[1]??"",_=f[3].split("-").filter(Boolean).at(-1)??"",N=u==="Pipe Run"&&/[A-Z]/i.test(_)&&/\d/.test(_)?_:"",w=v.match(h2)?.[1]??N,k=`${u}:${p.toLowerCase()}`;s.has(k)||s.set(k,{tag:p,type:u,tagPrefix:m,tagSequence:f[2],tagSuffix:f[3].replace(/^-/,""),pageNumber:r,nominalDiameter:x.replace(/\s+/g," ").trim(),pipingMaterial:R,lineSpec:w,flow:D,heatTracing:A,insulation:S})}for(const l of o.matchAll(f2)){const p=l[1].replace(/\s+/g,"").toUpperCase(),g=`Line Spec:${p.toLowerCase()}`;s.has(g)||s.set(g,{tag:p,type:"Line Spec",tagPrefix:"LINE SPEC",tagSequence:p,tagSuffix:"",lineSpec:p,pageNumber:r})}return[...s.values()]}const b2=/^(?:(?:GENERAL|PROCESS|DESIGN|SAFETY|OPERATING|CONSTRUCTION)\s+)?NOTES?\s*[:.-]?\s*(.*)$/i,v2=/^(?:LEGENDS?|ABBREVIATIONS?|SYMBOLS?|REFERENCES?|REVISION(?:S)?|DRAWING\s+(?:TITLE|NO|NUMBER)|PROJECT|CLIENT|SCALE|TITLE\s*BLOCK|EQUIPMENT\s+LIST|LINE\s+LIST)\b/i,E2=/^(?:(?:NOTE\s*)?\d{1,3}\s*[.)-]\s+|[A-Z]\s*[.)]\s+).+/i,w2=/^(?:GENERAL\s+)?NOTE(?:\s+\d+)?\s*[:#-]\s*.+/i;function x2(a){const r=[];for(const s of a){const o=[{text:s.searchableText,label:"PDF text"},...s.ocrTiles.map(f=>({text:f,label:"OCR text"}))],l=new Set,p=[];for(const f of o){let m=!1,u="";const y=()=>{const b=u.replace(/\s+/g," ").trim();if(b.length>=8){const v=b.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();v&&!l.has(v)&&(l.add(v),p.push({text:b,label:f.label}))}u=""};for(const b of f.text.replace(/\r/g,`
`).split(`
`)){const v=b.replace(/\s+/g," ").trim();if(!v)continue;const x=v.match(b2);if(x){y(),m=!0,x[1]&&(u=x[1].trim());continue}if(m&&v2.test(v)){y(),m=!1;continue}if(w2.test(v)){y(),u=v,m=!0;continue}if(E2.test(v)){const R=v.length>=36&&v.split(/\s+/).length>=7;m||R?(y(),u=v,m=!0):y();continue}m?u=u?`${u} ${v}`:v:y()}y()}let g=0;for(const f of p){const m=[];for(let u=0;u<f.text.length;){let y=Math.min(u+1500,f.text.length);if(y<f.text.length){const b=f.text.lastIndexOf(" ",y);b>u+700&&(y=b)}m.push(f.text.slice(u,y)),u=y}for(const u of m){const y=u.trim();y&&(g+=1,r.push({tag:`NOTE-P${s.pageNumber}-${g}`,type:"Item Note",tagPrefix:"NOTE",tagSequence:String(g),tagSuffix:`P${s.pageNumber}`,pageNumber:s.pageNumber,description:`${f.label} note — review against source: ${y}`}))}}}return r}function Ou(a,r){const s=new Map(a.map(o=>[`${o.type}:${o.tag.toLowerCase()}`,{...o}]));for(const o of r){const l=`${o.type}:${o.tag.toLowerCase()}`,p=s.get(l);if(!p){s.set(l,{...o});continue}p.sourceLocations=m2(p.sourceLocations,o.sourceLocations);for(const g of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])!p[g]&&o[g]&&(p[g]=o[g])}return[...s.values()]}async function S2(a,r,s=()=>!0){const[o,l]=await Promise.all([sn(()=>import("./pdf-TYrZqVzP.js"),[]),sn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);o.GlobalWorkerOptions.workerSrc=l.default;const p=o.getDocument({data:new Uint8Array(a.slice(0))}),g=await p.promise;let f=null;const m=new Map,u=[];let y=0,b=1,v="PDF text";try{for(let x=1;x<=g.numPages;x++){if(b=x,v="PDF text",!s())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const R=await g.getPage(x),D=await R.getTextContent(),A=R.getViewport({scale:1}),S=D.items.flatMap(C=>{if(!("str"in C)||typeof C.str!="string"||!C.str||!("transform"in C)||!Array.isArray(C.transform))return[];const L=C.transform;return[{str:C.str,x:L[4]??0,y:L[5]??0,width:"width"in C&&typeof C.width=="number"?C.width:0,height:"height"in C&&typeof C.height=="number"?C.height:0,fontSize:Math.hypot(L[0]??0,L[1]??0)||10,hasEOL:"hasEOL"in C&&C.hasEOL===!0}]}),P=y2(S),_=[];let N=$l(P,x);const w=S.flatMap(C=>{const L=Ny({...C,height:C.height||C.fontSize},x,A);return L?$l(C.str,x).map(B=>({...B,sourceLocations:[L]})):[]}),k=S.flatMap(C=>{const L=Ny({...C,height:C.height||C.fontSize},x,A);return L?[{text:C.str,location:L}]:[]});if(N=Ou(N,[...w,...rv(k)]),P.replace(/\s/g,"").length<800||N.length<20){if(r?.(x,g.numPages,"OCR"),!f){v="OCR startup";const{createWorker:we,PSM:ue}=await sn(async()=>{const{createWorker:ce,PSM:Y}=await import("./index-C90jncKX.js").then(Q=>Q.i);return{createWorker:ce,PSM:Y}},__vite__mapDeps([0,1]));f=await we("eng",1,{workerPath:"https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js",corePath:"https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0",langPath:"https://tessdata.projectnaptha.com/4.0.0"}),await f.setParameters({tessedit_pageseg_mode:ue.SPARSE_TEXT,preserve_interword_spaces:"1"})}const C=R.getViewport({scale:1});v="page image";const L=Math.min(3.5,3200/Math.max(C.width,C.height)),B=R.getViewport({scale:L}),ee=document.createElement("canvas"),X=document.createElement("canvas");ee.width=Math.ceil(B.width),ee.height=Math.ceil(B.height);const ae=ee.getContext("2d",{willReadFrequently:!1});if(!ae)throw new Error("This browser cannot prepare a page image for local OCR.");try{await R.render({canvas:ee,canvasContext:ae,viewport:B}).promise;const we=1700,ue=120,ce=[],Y=Ry(ee.width,we,ue),Q=Ry(ee.height,we,ue);for(const me of Q)for(const xe of Y){if(!s())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const j=Math.min(ee.width<=we+ue?ee.width:we,ee.width-xe),te=Math.min(ee.height<=we+ue?ee.height:we,ee.height-me);X.width=j,X.height=te;const U=X.getContext("2d",{willReadFrequently:!1});if(!U)throw new Error("This browser cannot prepare a page image for local OCR.");U.drawImage(ee,xe,me,j,te,0,0,j,te),v="OCR reading";const V=await f.recognize(X);_.push(V.data.text),ce.push(...$l(V.data.text,x)),ce.push(...g2(V.data.words??[],x,{left:xe,top:me,pageWidth:ee.width,pageHeight:ee.height}))}y+=1,N=Ou(N,ce)}finally{ee.width=0,ee.height=0,X.width=0,X.height=0}}else r?.(x,g.numPages,"PDF text");for(const C of N){const L=`${C.type}:${C.tag.toLowerCase()}`,B=m.get(L);m.set(L,B?Ou([B],[C])[0]:C)}u.push({pageNumber:x,searchableText:P,ocrTiles:_}),R.cleanup()}return{candidates:[...m.values()],pages:g.numPages,ocrPages:y,pageText:u}}catch(x){throw s()?new Ml(b,v,x):x}finally{await f?.terminate().catch(()=>{}),await p.destroy().catch(()=>{})}}const ov=["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef","placementDrawingRef","nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description","notes","sourcePage","reviewStatus"],Hn=[...ov,"stableId"],iv=/^[0-9A-F]{32}$/,T2=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,A2=["plantGroup","fluidService","nominalDiameter","pipingMaterial","lineSpec","insulation","heatTracing","groupStatus"],D2=["","Start","Continue","Branch","Merge","End-of-Group"];function lv(){return crypto.randomUUID().replaceAll("-","").toUpperCase()}function jp(a){const r=a.toUpperCase();if(iv.test(r))return r;if(T2.test(a))return r.replaceAll("-","");throw new Error("A Stable ID must contain exactly 32 letters or numbers (A–F, 0–9).")}function bn(a,r){return r==="stableId"?a.id:a[r]}function C2(a,r){const s=a.placementDrawingRef.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase();return s?[r.id,r.name].map(l=>l.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase()).includes(s)?"current":"another":"available"}const kt={itemTag:"Item Tag",tagPrefix:"Tag Prefix",tagSequence:"Tag Sequence",tagSuffix:"Tag Suffix",equipmentClass:"Equipment Class",equipmentType:"Equipment Type",equipmentName:"Equipment Name",drawingRef:"Source Drawing / Page",placementDrawingRef:"Placed on Drawing",nominalDiameter:"Nominal Diameter",plantGroup:"Plant Group",fluidService:"Fluid / Service",pipingMaterial:"Piping Material Class",lineSpec:"Line Spec",flow:"Flow",flowDirection:"Flow Direction",heatTracing:"Heat Tracing",insulation:"Insulation",fromTag:"From",toTag:"To",groupStatus:"Group Status",opcDrawing:"OPC Drawing",connection:"Connection",description:"Description",notes:"Notes",sourcePage:"Source page",reviewStatus:"Review status",stableId:"Stable ID"},Hl=ov,Ms={itemTag:"The tag printed beside the equipment, line, valve, or instrument. A repeated Pipe Run tag needs different line data.",tagPrefix:"The letter code at the start of the tag.",tagSequence:"The main number in the tag.",tagSuffix:"Extra letters or numbers after the main tag number.",equipmentClass:"The approved class or family for this equipment.",equipmentType:"What the equipment is, such as a pump or vessel, when the drawing states it.",equipmentName:"The equipment name or service, only when the source clearly labels it.",drawingRef:"The source drawing or PDF page where this record came from.",placementDrawingRef:"The CAD drawing that contains this object. Blank means available or not placed. This is a reference only; it does not place or move CAD entities.",nominalDiameter:"The stated pipe or nozzle size, such as DN50 or 2 inch.",plantGroup:"The plant, unit, or area group, if stated.",fluidService:"The stated fluid or process service for this line.",pipingMaterial:"The approved piping material class or code.",lineSpec:"The piping line class/specification code. It is separate from the pipe run tag.",flow:"The stated flow value or direction. A line arrow alone is not converted to a value.",flowDirection:"The confirmed upstream/downstream flow direction.",heatTracing:"The stated heat-tracing requirement or type.",insulation:"The stated insulation requirement or code.",fromTag:"The connected source tag or point shown for this pipe run.",toTag:"The connected destination tag or point shown for this pipe run.",groupStatus:"Start, Continue, Branch, Merge, or End-of-Group for the pipe run.",opcDrawing:"The linked off-page connector drawing number, if shown.",connection:"A stated connection or connected item; line geometry is not inferred here.",description:"A short object description from the source. Blank means no clear value was found.",notes:"Drawing notes or additional comments associated with this record.",sourcePage:"The page in the original PDF where this candidate was found.",reviewStatus:"Needs review means check the tag and fields before using them.",stableId:"Permanent object identity. It stays the same when the tag, drawing, size, or geometry changes."},ui=["Equipment","Equipment Component","Equipment Heat Transfer","Equipment Mechanical","Equipment Other","Equipment Vessel","Hydraulic Circuit","Instrument","Instrument Loop","Item Note","Line Spec","Nozzle","OPC","Package","Pipe Run","Valve"],Vl=a=>`pid-mapping-studio:engineering-workspace:v2:${a}`;function cv(a,r){if(!Array.isArray(a))return gp(a);const s=a.map(o=>!o||typeof o!="object"||!Array.isArray(o.rows)?o:{...o,rows:o.rows.map(l=>{if(!l||typeof l!="object")return l;const p=typeof l.id=="string"?l.id:"";let g;try{g=jp(p)}catch{g=lv()}g!==l.id&&r?.();const f=typeof l.description=="string"?l.description:"",m=typeof l.notes=="string",u=/^(?:PDF text|OCR text) note — review against source:\s*/iu,y=m?l.notes:l.type==="Item Note"?f.replace(u,""):"",b=!m&&l.type==="Item Note"&&f?u.test(f)?"Drawing note extracted from PDF; check the source page.":"":f;return(!m||b!==f)&&r?.(),{...l,id:g,description:b,notes:y,sourcePage:typeof l.sourcePage=="string"?l.sourcePage:"",placementDrawingRef:typeof l.placementDrawingRef=="string"?l.placementDrawingRef:"",lineSpec:typeof l.lineSpec=="string"?l.lineSpec:"",plantGroup:typeof l.plantGroup=="string"?l.plantGroup:"",fluidService:typeof l.fluidService=="string"?l.fluidService:"",flowDirection:typeof l.flowDirection=="string"?l.flowDirection:"",fromTag:typeof l.fromTag=="string"?l.fromTag:"",toTag:typeof l.toTag=="string"?l.toTag:"",groupStatus:typeof l.groupStatus=="string"?l.groupStatus:"",...l.sourceLocations===void 0?{}:{sourceLocations:l.sourceLocations},reviewStatus:l.reviewStatus==="Needs review"||l.reviewStatus==="Reviewed"?l.reviewStatus:"Manual"}})});return gp(s)}function gp(a){if(!Array.isArray(a)||a.length>500)throw new Error("Invalid drawing catalog. Keep a backup and do not overwrite saved data.");const r=new Set,s=new Set;let o=0;for(const l of a){if(!l||typeof l!="object"||typeof l.id!="string"||typeof l.name!="string"||!l.name.trim()||l.name.length>160||typeof l.revision!="string"||l.revision.length>80||!Array.isArray(l.rows)||r.has(l.id))throw new Error("The drawing catalog contains an invalid or duplicate drawing.");r.add(l.id);const p=new Map;for(const g of l.rows){if(g?.type==="Pipe Run"&&!D2.includes(g.groupStatus))throw new Error("Pipe Run group status must be Start, Continue, Branch, Merge, or End-of-Group.");if(!g||typeof g!="object"||typeof g.id!="string"||!iv.test(g.id)||s.has(g.id)||!ui.includes(g.type)||Hl.some(u=>typeof g[u]!="string"||g[u].length>2e3)||!["Manual","Needs review","Reviewed"].includes(g.reviewStatus)||g.sourcePdfId!==void 0&&typeof g.sourcePdfId!="string"||g.sourceLocations!==void 0&&(!Array.isArray(g.sourceLocations)||g.sourceLocations.length>500||g.sourceLocations.some(u=>{if(!u||typeof u!="object")return!0;const y=u;return!Number.isInteger(y.pageNumber)||y.pageNumber<1||!["x","y","width","height"].every(b=>typeof y[b]=="number"&&Number.isFinite(y[b]))||y.x<0||y.y<0||y.width<=0||y.height<=0||y.x>1||y.y>1||y.x+y.width>1.02||y.y+y.height>1.02}))||!g.itemTag.trim())throw new Error("Each record needs a valid Stable ID, object type, and text fields.");const f=g.itemTag.trim().toLowerCase(),m=p.get(f)??[];if(m.length&&(g.type!=="Pipe Run"||m.some(u=>u.type!=="Pipe Run"||!A2.some(y=>u[y]!==g[y]))))throw new Error("This tag is already used. Repeated Pipe Run tags need different line-defining data.");if(typeof g.x!="number"||typeof g.y!="number"||!Number.isFinite(g.x)||!Number.isFinite(g.y))throw new Error("A record contains invalid coordinates.");p.set(f,[...m,g]),s.add(g.id),o+=1}}if(o>2e4)throw new Error("This local workspace supports up to 20,000 engineering records.");return a}function pi(a){const r=window.localStorage.getItem(Vl(a));if(!r)return[];let s=!1;const o=cv(JSON.parse(r),()=>{s=!0});if(s)try{window.localStorage.setItem(Vl(a),JSON.stringify(o))}catch{throw new Error("Saved records were read, but the data-format update could not be saved because browser storage is full. The original saved data was not overwritten; download a backup before freeing space.")}return o}function Us(a){return window.localStorage.getItem(Vl(a))}function mp(a,r,s){if(gp(r),Us(a)!==s)throw new Error("This workspace changed in another tab. Reload before editing to avoid overwriting its records.");const o=JSON.stringify(r);return window.localStorage.setItem(Vl(a),o),o}function Op(a,r,s){return{...Object.fromEntries(Hl.map(o=>[o,""])),id:lv(),type:a,itemTag:r.trim(),drawingRef:s,reviewStatus:"Manual",x:0,y:0}}function N2(a,r){return JSON.stringify({version:5,discipline:a,drawings:r},null,2)}function R2(a,r){const s=JSON.parse(a);if(![2,3,4,5].includes(s?.version)||s?.discipline!==r)throw new Error(`Choose a ${r.toUpperCase()} workspace backup. PFD and P&ID backups stay separate.`);return cv(s.drawings)}function k2(a,r){const s=new Map;for(const o of[...a??[],...r??[]]){const l=[o.pageNumber,o.x.toFixed(4),o.y.toFixed(4),o.width.toFixed(4),o.height.toFixed(4)].join(":");!s.has(l)&&s.size<500&&s.set(l,o)}return[...s.values()]}function ky(a,r){const s=Op(a.type,a.tag,`${r.alias} · Page ${a.pageNumber}`);s.tagPrefix=a.tagPrefix??"",s.tagSequence=a.tagSequence??"",s.tagSuffix=a.tagSuffix??"";for(const o of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])s[o]=a[o]??"";return s.sourcePage=String(a.pageNumber),s.sourcePdfId=r.id,s.sourceLocations=a.sourceLocations?.slice(0,500),s.reviewStatus="Needs review",a.type==="Item Note"?(s.notes=(a.description??"").replace(/^(?:PDF text|OCR text) note — review against source:\s*/iu,""),s.description="Drawing note extracted from PDF; check the source page."):s.description=a.description??"Tag candidate found in the PDF. Confirm the object type and details before using it.",s}function _2(a,r,s){const o=pi(a),l=o.find(x=>x.sourcePdfId===r.id);if(l){const x=new Map(s.map(P=>[P.tag.trim().toLowerCase(),P])),R=new Set(l.rows.map(P=>P.itemTag.trim().toLowerCase()));let D=!1;const A=l.rows.map(P=>{const _=x.get(P.itemTag.trim().toLowerCase());if(!_)return P;const N=k2(P.sourceLocations,_.sourceLocations),w=P.sourcePage||String(_.pageNumber);return N.length===(P.sourceLocations?.length??0)&&w===P.sourcePage?P:(D=!0,{...P,sourcePage:w,sourceLocations:N})}),S=s.flatMap(P=>{const _=P.tag.trim().toLowerCase();return!_||R.has(_)?[]:(R.add(_),D=!0,[ky(P,r)])});if(D){const P=o.map(_=>_.id===l.id?{..._,rows:[...A,...S]}:_);mp(a,P,Us(a))}return{drawingId:l.id,recordCount:A.length+S.length}}const p=new Set(o.map(x=>x.name.toLowerCase())),g=`${r.alias} · Extracted data`;let f=g,m=2;for(;p.has(f.toLowerCase());)f=`${g} (${m++})`;const u=new Set,y=s.flatMap(x=>{const R=x.tag.trim().toLowerCase();return!R||u.has(R)?[]:(u.add(R),[ky(x,r)])}),b={id:crypto.randomUUID(),name:f,revision:"Local PDF extraction · review required",sourcePdfId:r.id,sourceAlias:r.alias,rows:y},v=Us(a);return mp(a,[...o,b],v),{drawingId:b.id,recordCount:y.length}}function Il(a,r,s){const o=URL.createObjectURL(new Blob([r],{type:s})),l=document.createElement("a");l.href=o,l.download=a,l.click(),setTimeout(()=>URL.revokeObjectURL(o),1e3)}function L2(a){return dv(["Object type",...Hn.map(r=>kt[r])],a.map(r=>[r.type,...Hn.map(s=>bn(r,s))]))}function dv(a,r){const s=o=>`"${(/^[\s]*[=+\-@\t\r]/.test(o)?`'${o}`:o).replaceAll('"','""')}"`;return"\uFEFF"+[a,...r].map(o=>o.map(l=>s(String(l))).join(",")).join(`\r
`)}function I2(a,r){const s=[];let o=[],l="",p=!1;const g=a.replace(/^\uFEFF/,"");for(let v=0;v<g.length;v++){const x=g[v];if(x==='"')if(p&&g[v+1]==='"')l+='"',v++;else{if(!p&&l!=="")throw new Error("Invalid CSV quoting.");p=!p}else!p&&x===","?(o.push(l),l=""):!p&&(x===`
`||x==="\r")?(o.push(l),o.some(R=>R.trim())&&s.push(o),o=[],l="",x==="\r"&&g[v+1]===`
`&&v++):l+=x}if(p)throw new Error("The CSV has an unclosed quoted cell.");o.push(l),o.some(v=>v.trim())&&s.push(o);const f=s.shift()?.map(v=>v.trim().toLowerCase())??[],m=f.findIndex(v=>v==="object type"||v==="type"),u=Hl.map(v=>f.findIndex(x=>x===v.toLowerCase()||x===kt[v].toLowerCase())),y=f.findIndex(v=>v==="stableid"||v===kt.stableId.toLowerCase());if(m<0||u[0]<0)throw new Error("CSV needs Object type and Item Tag columns. Download the template first.");if(!s.length)throw new Error("The CSV contains no records.");if(s.length>2e4)throw new Error("Import at most 20,000 records.");const b=new Set;return s.map((v,x)=>{if(v.length!==f.length)throw new Error(`CSV row ${x+2} has the wrong number of columns.`);const R=ui.find(A=>A.toLowerCase()===v[m]?.trim().toLowerCase());if(!R)throw new Error(`CSV row ${x+2} has an unsupported object type.`);const D=Op(R,v[u[0]]??"",r);if(y>=0&&v[y]?.trim())try{D.id=jp(v[y].trim())}catch{throw new Error(`CSV row ${x+2} has an invalid Stable ID.`)}if(b.has(D.id))throw new Error(`CSV row ${x+2} repeats a Stable ID.`);return b.add(D.id),Hl.forEach((A,S)=>{if(u[S]<0)return;const P=v[u[S]].trim();A==="reviewStatus"?D.reviewStatus=["Needs review","Reviewed","Manual"].includes(P)?P:"Manual":D[A]=P}),D.drawingRef||(D.drawingRef=r),D})}function _y(a){const r=a.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);for(const s of[/^(?:drawing|dwg|drg)\.?\s*(?:number|no\.?|#)\s*[:：-]?\s*(.*)$/i,/^(?:drawing\s*(?:title|name)|title)\s*[:：-]?\s*(.*)$/i]){const o=new Set;if(r.forEach((l,p)=>{const g=l.match(s);if(!g)return;const f=(g[1]||r[p+1]||"").trim();f&&f.length<=120&&!/^(?:rev(?:ision)?|scale|sheet|date|drawn|checked|drawing|dwg|title)\b/i.test(f)&&o.add(f)}),o.size===1)return[...o][0];if(o.size>1)return null}return null}function P2(a){const r=a.normalize("NFKC").replace(/[<>:"/\\|?*\u0000-\u001f]/g,"_").replace(/\s+/g," ").replace(/[. ]+$/g,"").trim().slice(0,120).replace(/[. ]+$/g,"");return/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(r)?`_${r}`:r}function j2(a){const r=[],s=/^(?:(?:drawing|dwg|drg)\.?\s*(?:number|no\.?|#|title|name)|title)\s*[:：-]?\s*$/i;for(const o of a){if(_y(o.text)){r.push(o.text);continue}if(!s.test(o.text.trim()))continue;const p=Math.max(o.height,1),g=a.filter(f=>{if(f===o||!f.text.trim()||s.test(f.text.trim()))return!1;const m=f.x-(o.x+o.width),u=o.y-f.y;return Math.abs(f.y-o.y)<=p*.6&&m>=-p&&m<=p*10||u>p*.6&&u<=p*3&&Math.abs(f.x-o.x)<=p*3});g.length===1&&r.push(`${o.text}
${g[0].text}`)}return _y(r.join(`
`))}function uv(a){const r=new Set(["project_title_block"]);return a.map((s,o)=>Array.from({length:s.pageCount},(l,p)=>{const g=`doc-${String(o+1).padStart(2,"0")}_page-${String(p+1).padStart(3,"0")}`;let f=P2(s.pageDrawingNames?.[p]??"")||`drawing-batch_${g}`;/_working-\d+$/i.test(f)&&(f=`sheet_${f}`);let m=f,u=0;for(;r.has(m.toLowerCase());)m=`${f}_${g}${u?`_${u}`:""}`,u++;return r.add(m.toLowerCase()),`${m}.dwg`}))}const Ys="P2DWG-RUNNER-2026.11.04.2",O2=`autocad-runner-${Ys}-with-source-pdfs.zip`;function Vo(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function q2(a,r=!1,s="",o=[]){const l=uv(a),p=a.map((f,m)=>`("${String(f.documentNumber).padStart(2,"0")}" ${Vo(f.sourceFile)} ${Vo(f.sourceId)} ${Vo(f.sourceName)} ${Vo(f.sha256.toLowerCase())} ${f.pageCount} (${l[m].map(Vo).join(" ")}))`).join(`
  `),g=o.map(f=>`("${String(f.documentNumber).padStart(2,"0")}" ${f.pageNumber} ${f.scaleFactor} "${f.method}" ${f.pageWidthMm} ${f.pageHeightMm} ${f.targetWidthMm} ${f.targetHeightMm})`).join(`
  `);return`; Single working drawing PDF batch runner.
; Each approved page is saved to a separate, never-overwritten DWG.
(vl-load-com)
(setq *p2dwg-project-title-block-enabled* ${r?"T":"nil"})
(setq *p2dwg-batch-run-id* "${s}")
(setq *p2dwg-runner-build-version* "${Ys}")
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
          (p2dwg-start '(${p}) firstPdf)))
      nil))
  (if (vl-catch-all-error-p result)
    (prompt (strcat "\\nBatch not started: " (p2dwg-error-message result))))
  (princ)
)
(princ "\\nLoaded PDF2DWGBATCH (single working drawing). Start only in a NEW unsaved blank DWT drawing.")
(princ)
`}const M2=[{field:"sourceFile",xdataIndex:1,global:"*p2dwg-source-alias*"},{field:"pageNumber",xdataIndex:2,global:"*p2dwg-source-page*"},{field:"jobId",xdataIndex:3,global:"*p2dwg-job-id*"},{field:"sourceId",xdataIndex:4,global:"*p2dwg-source-id*"},{field:"sourceSha256",xdataIndex:5,global:"*p2dwg-source-hash*"},{field:"sourceName",xdataIndex:6,global:"*p2dwg-source-name*"}];function $2(a,r){const s=String(a).padStart(2,"0"),o=`p2dwg${s}`,l=M2.map(({xdataIndex:p,global:g})=>`(= (cdr (nth ${p} app-data)) ${g})`).join(`
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
    (itoa (length *p2dwg-approved-text-styles*))))
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
`}function U2(a){return[]}function F2(a,r=[]){return`
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
      "|REASON=SOURCE_LAYER_IS_NOT_IDENTITY"))
  (prompt
    (strcat "\\nPDF source layers and colors preserved: "
      (itoa (length sources))
      " PDF-prefixed layer(s); approved layer/color mapping waits for a confirmed geometry match."))
  T
)
`}const Ly=25.4/72,B2=1e-6,z2=1e3,En={width:841,height:594};function Y2(a,r){if(!Number.isFinite(a.width)||!Number.isFinite(a.height)||a.width<1||a.height<1||a.width>1e5||a.height>1e5)return null;const s=a.width*Ly,o=a.height*Ly,l=En.width/(a.width/72),p=En.height/(a.height/72),g=Math.min(l,p);return!Number.isFinite(g)||g<B2||g>z2?null:{scaleFactor:g,method:"FIXED_SHEET_SIZE",pageWidthMm:s,pageHeightMm:o,targetWidthMm:En.width,targetHeightMm:En.height}}function H2(a,r){const s=(y,b=0,v=0)=>({valid:!1,reason:y,outputWidthMm:b,outputHeightMm:v});if(!Number.isFinite(r.scaleFactor)||r.scaleFactor<=0)return s("INVALID_SCALE_FACTOR");const o=a.width/72*r.scaleFactor,l=a.height/72*r.scaleFactor;if(!Number.isFinite(o)||!Number.isFinite(l)||o<=0||l<=0)return s("INVALID_SCALED_PAGE_EXTENTS",o,l);const p=En.width,g=En.height,f=.005;if(o>p*(1+f)||l>g*(1+f))return s("SCALED_PAGE_EXCEEDS_FIXED_SHEET",o,l);const m=Math.abs(o-p)/p<=f,u=Math.abs(l-g)/g<=f;return!m&&!u?s("SCALED_PAGE_DOES_NOT_REACH_SHEET_EDGE",o,l):r.targetWidthMm!==p||r.targetHeightMm!==g?s("PLAN_TARGET_DOES_NOT_MATCH_FIXED_SHEET",o,l):{valid:!0,reason:"FIXED_SHEET_FIT_VERIFIED",outputWidthMm:o,outputHeightMm:l}}const V2=["RAW","CANDIDATE","MATCHED","CONFIRMED","UNMATCHED","NEEDS_REVIEW"];function X2(a){return`
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
          (< text-matches 2))
      (setq *p2dwg-scale-status* "FAILED")
      (${a}-batch-log
        (strcat "SCALE_FAILED|" *p2dwg-source-alias* "|"
          (itoa *p2dwg-source-page*)
          "|REASON=APPROVED_TEXT_HEIGHT_REFERENCE_MISMATCH"
          "|TEXT_ENTITIES=" (itoa text-count)
          "|MATCHED_APPROVED_HEIGHTS=" (itoa text-matches)
          "|FIXED_APPROVED_HEIGHTS=" (itoa fixed-text-count)
          "|REQUIRED_MATCHES=2|TOLERANCE_PERCENT=5.0"))
      (p2dwg-raise
        "Scale verification failed: imported text heights do not match at least two approved fixed-height standards. No block placement or page save was attempted."))
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
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${a}-batch-log
        (strcat "SCALE_FAILED|" *p2dwg-source-alias* "|"
          (itoa *p2dwg-source-page*)
          "|REASON=NO_INDEPENDENT_SCALE_REFERENCE_PASSED"))
      (p2dwg-raise
        "Scale verification failed: no approved instrument, valve, or text-height reference could confirm the page scale. No block placement or page save was attempted.")))
  (${a}-batch-log
    (strcat "SCALE_REFERENCE_CROSSCHECK_SUMMARY|" *p2dwg-source-alias* "|"
      (itoa *p2dwg-source-page*) "|SHEET_PRIMARY=841x594"
      "|VERIFIED=" (itoa checked) "|SKIPPED=" (itoa skipped)
      "|TEXT_ENTITIES=" (itoa text-count)
      "|APPROVED_TEXT_HEIGHT_MATCHES=" (itoa text-matches)
      "|TOLERANCE_PERCENT=5.0"))
  (setq *p2dwg-scale-status* "VERIFIED")
  (${a}-batch-log
    (strcat "SCALE_VERIFIED|" *p2dwg-source-alias* "|"
      (itoa *p2dwg-source-page*)
      "|METHOD=FIXED_SHEET_WITH_APPROVED_REFERENCE_CHECKS"
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
`}function G2(a){return`
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
      (${a}-batch-log "NEEDS_REVIEW|LEGENDS_TEXT_STYLE_OR_LAYER_UNRESOLVED|PDF_TEXT_REMAINS_VISIBLE")
      (prompt "\\nNEEDS_REVIEW: the approved Legends Arial Narrow style and general text layer must both be resolved. No manual layer choice or guessed default was used."))
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
`}function W2(a){return`
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

(defun ${a}-arial-style-worker (/ styles style entry approved typeface bold italic charset pitch)
  (if (null *p2dwg-approved-text-style-name*)
    (p2dwg-raise "No unambiguous variable-height Arial Narrow style is approved in the Legends Library."))
  (setq approved (vl-some
    '(lambda (candidate)
       (if (= (strcase (car candidate)) (strcase *p2dwg-approved-text-style-name*)) candidate))
    *p2dwg-approved-text-styles*))
  (if (null approved)
    (p2dwg-raise "The chosen Arial Narrow style is not present in the approved Legends text standards."))
  (setq entry (tblsearch "STYLE" *p2dwg-approved-text-style-name*))
  (if (null entry)
    (p2dwg-raise "The approved Legends Arial Narrow style was not created in this drawing."))
  (setq styles (vla-get-TextStyles (vla-get-ActiveDocument (vlax-get-acad-object))))
  (setq style (vla-item styles *p2dwg-approved-text-style-name*))
  (vla-GetFont style 'typeface 'bold 'italic 'charset 'pitch)
  (if (or (/= (strcase typeface) "ARIAL NARROW")
          (= bold :vlax-true) (= italic :vlax-true)
          (/= (cdr (assoc 40 entry)) 0.0)
          (/= (cdr (assoc 41 entry)) (nth 2 approved))
          (/= (cdr (assoc 50 entry)) (nth 3 approved)))
    (p2dwg-raise "AutoCAD's text style does not match the approved Legends Arial Narrow record. Text remains in review."))
  *p2dwg-approved-text-style-name*)

(defun ${a}-arial-style (/ result)
  (setq result (vl-catch-all-apply '${a}-arial-style-worker nil))
  (if (vl-catch-all-error-p result)
    (progn
      (${a}-batch-log (strcat "NEEDS_REVIEW|LEGENDS_TEXT_STYLE|" (vl-catch-all-error-message result)))
      (prompt (strcat "\\n" (vl-catch-all-error-message result))) nil)
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

(defun ${a}-standardize-imported-text (selection finalize / index entity kind snapshots style failed rollback-failed count entry target-layer)
  ; Normalize every editable page TEXT/MTEXT/ATTRIB, including loose labels and
  ; block attributes. Before matching, preserve PDF source layers. After matching,
  ; only TEXT/MTEXT receive the approved general text layer and ByLayer properties.
  (setq index 0 snapshots nil count 0 failed nil rollback-failed nil)
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
        (p2dwg-raise "An approved Legends Arial Narrow style is required for imported editable text; this page was not saved."))
      (foreach entry (reverse snapshots)
        (setq kind (cdr (assoc 0 (entget (car entry))))
          target-layer (if (and finalize (member kind '("TEXT" "MTEXT")))
            *p2dwg-approved-text-layer-name* nil))
        (if (${a}-font-text (car entry) style target-layer)
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
              "|HEIGHT_POSITION_ROTATION=PRESERVED")))))
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
          (/= (cdr (assoc 7 (entget target))) "P2DWG_ARIAL_NARROW"))
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
        (= (cdr (assoc 7 (entget target))) "P2DWG_ARIAL_NARROW")
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
`}function K2(a){return`
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
`}function Z2(a){return`
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
`}function Q2(a){return["PROJECT_TITLE_BLOCK_SCOPE_V1",`workspaceType=${a.workspaceType}`,`projectId=${a.groupId}`,`titleBlockId=${a.titleBlockId}`,`titleBlockPath=${a.titleBlockPath}`,`xrefName=${a.xrefName}`,`expectedSizeMm=${En.width}x${En.height}`,`version=${a.version}`,""].join(`
`)}function Xo(a,r){return a.match(new RegExp(`(?:^|;)${r}=([^;]*)`,"i"))?.[1]?.trim()??null}function J2(a){const r=a.flatMap(o=>{if(o.category!=="textStyle")return[];const g=(Xo(o.detail,"font")?.split(/[\\/]/).pop()?.replace(/\.(ttf|shx|otf)$/i,"")??"").replace(/[\s_-]/g,"").toUpperCase(),f=Xo(o.detail,"height"),m=Xo(o.detail,"width"),u=Xo(o.detail,"oblique");if(!["ARIALN","ARIALNARROW"].includes(g)||f===null||m===null||u===null||Number(f)!==0)return[];const y=Number(m),b=Number(u);return!Number.isFinite(y)||y<=0||!Number.isFinite(b)?[]:[{name:o.name.trim(),signature:`${g}|${y}|${b}|${Xo(o.detail,"bigfont")??""}`}]});if(r.length===0)return null;if(new Set(r.map(o=>o.signature)).size>1)throw new Error("Legends Library has conflicting variable-height Arial Narrow text styles. Keep one approved general style or resolve the conflicting standards before downloading the runner.");return r.map(o=>o.name).sort((o,l)=>o.localeCompare(l))[0]}function eA(a){const r=a.flatMap(l=>{if(l.category!=="layer")return[];const p=l.name.trim(),g=p.toUpperCase();if(!p||g==="0"||/^(PDF|P2DWG)|TITLE|LOGO|BORDER|FRAME/.test(g))return[];const f=g.replace(/[^A-Z0-9]/g,""),m=f==="FGENTEXT"?100:f==="GENTEXT"?90:/TEXT|ANNOT|NOTE/.test(g)?50:0;return m?[{name:p,priority:m}]:[]});if(r.length===0)return null;const s=Math.max(...r.map(l=>l.priority)),o=r.filter(l=>l.priority===s);if(o.length>1)throw new Error(`Legends Library has multiple equally suitable general text layers: ${o.map(l=>l.name).join(", ")}. Resolve the default text layer before downloading the runner.`);return o[0].name}function tA(a,r,s,o,l=[],p=[],g=[]){const f=String(a).padStart(2,"0"),m=`PDF2DWG${f}`,u=`p2dwg${f}`,y=V2.map(gt).join(" "),b=J2(o),v=eA(o),x=s.map(k=>`(${gt(k.fallbackCategory.toLowerCase())} ${gt(k.blockName)} ${gt(k.sourcePath)} ${gt(k.targetLayer)} ${k.wipeoutBoundary?fS(k.wipeoutBoundary):"nil"} ${gt(k.blockAssetId)} (${(k.requiredShapeFonts??[]).map(gt).join(" ")}) ${k.autoPlacementSignature?`(${k.autoPlacementSignature.points.map(C=>`(${qu(C[0])} ${qu(C[1])})`).join(" ")})`:"nil"} ${k.autoPlacementSignature?`(("PATH" . ${k.autoPlacementSignature.primitiveClasses.PATH}) ("CURVE" . ${k.autoPlacementSignature.primitiveClasses.CURVE}))`:"nil"} ${k.autoPlacementSignature?qu(k.autoPlacementSignature.aspectRatio):"nil"})`).join(`
    `),R=o.filter(k=>k.category==="layer").filter(k=>k.name.trim().toUpperCase()!=="0").map(k=>{const C=k.detail.match(/(?:^|;)color=(\d+)/i)?.[1],L=k.detail.match(/(?:^|;)lineweight=(-?\d+)/i)?.[1],B=k.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!C||!L||!B)throw new Error(`Approved layer "${k.name}" is missing its Legends color, lineweight, or linetype. Re-extract the layer instead of substituting defaults.`);const ee=Number(C),X=Number(L),ae=[-3,-2,-1].includes(X)||Number.isInteger(X)&&X>=0&&X<=211;if(!Number.isInteger(ee)||ee<1||ee>255||!ae)throw new Error(`Approved layer "${k.name}" has invalid color or lineweight values.`);return`(${gt(k.name)} ${ee} ${X} ${gt(B)})`}).join(`
    `);o.filter(k=>k.category==="layer").map(k=>k.name.trim()).filter(Boolean);const D=U2(),A=o.filter(k=>k.category==="textStyle").map(k=>{const C=(ee,X)=>k.detail.match(new RegExp(`(?:^|;)${ee}=([^;]*)`,"i"))?.[1]??X,L=(ee,X)=>{const ae=Number(C(ee,String(X)));if(!Number.isFinite(ae)||ee==="height"&&ae<0||ee==="width"&&ae<=0)throw new Error(`Approved text style "${k.name}" has an invalid ${ee}. Re-review the supplied CAD text format.`);return String(ae)},B=C("font","").trim();if(!B)throw new Error(`Approved text style "${k.name}" has no font. Re-review it instead of substituting a default font.`);return`(${gt(k.name)} ${L("height",0)} ${L("width",1)} ${L("oblique",0)} ${gt(B)} ${gt(C("bigfont",""))})`}).join(`
    `),S=o.filter(k=>k.category==="linetype").filter(k=>!["CONTINUOUS","BYLAYER","BYBLOCK"].includes(k.name.trim().toUpperCase())).flatMap(k=>{const C=pv(k.name,k.detail);if(!C)throw new Error(`Approved linetype "${k.name}" has an unsupported or incomplete definition. Re-extract it with the current extractor; the runner will not omit its marks or substitute Continuous.`);const L=k.detail.match(/(?:^|;)description=([^;]*)/i)?.[1]?.trim()||k.name,B=C.segments.map(ee=>{const X=[String(ee.length),String(ee.flags)];return ee.flags===4&&X.push(String(ee.shapeNumber),gt(ee.styleName),gt(ee.shapeFile),String(ee.scale),String(ee.rotation),String(ee.offsetX),String(ee.offsetY)),`(${X.join(" ")})`}).join(" ");return[`(${gt(k.name)} ${gt(L)} ${String(C.patternLength)} (${B}))`]}).join(`
    `),P=l.map(k=>`(${gt(k.stableId.toUpperCase())} ${gt(k.itemTag.trim())} ${gt(k.type)} ${k.pageNumber} (${Ei.map(C=>`(${gt(C.toUpperCase())} . ${gt(C==="itemTag"?k.itemTag.trim():k.fields?.[C]??"")})`).join(" ")}))`).join(`
    `);cA(o);const _=`; Local AutoCAD runner. The matching source PDF is packaged separately.
; Copyright (c) 2026 gaurav.cbiindia.
; Run command ${m} in AutoCAD for Windows.
; Each imported entity is stamped with a generic source alias and source page.

(vl-load-com)
(setq *p2dwg-attribute-rules* '(${p.map(k=>`(${gt(k.attributeTag)} ${gt(k.edeField.toUpperCase())} ${gt(k.valueType)} ${gt(k.textZone)})`).join(" ")}))
(setq *p2dwg-conflicting-tags* '(${g.map(k=>gt(k.toUpperCase())).join(" ")}))
(if (not (boundp '*p2dwg-batch-mode*)) (setq *p2dwg-batch-mode* nil))
(setq *p2dwg-approved-symbols* '(
    ${x}
))
(setq *p2dwg-approved-layers* '(
    ${R}
))
(setq *p2dwg-approved-text-styles* '(
    ${A}
))
(setq *p2dwg-approved-text-style-name* ${b?gt(b):"nil"})
(setq *p2dwg-approved-text-layer-name* ${v?gt(v):"nil"})
(setq *p2dwg-approved-linetypes* '(
    ${S}
))
(setq *p2dwg-ede-records* '(
    ${P}
))

(defun ${u}-pad-page (value / text)
  (setq text (itoa value))
  (while (< (strlen text) 3)
    (setq text (strcat "0" text))
  )
  text
)

(defun ${u}-ensure-shape-style (styleName fontFile / data updated styleEntity)
  (if (not (findfile fontFile))
    (p2dwg-raise (strcat "Required linetype shape font " fontFile " was not found in AutoCAD's support paths. Install it, then rerun; the shape will not be omitted."))
  )
  (setq data (tblsearch "STYLE" styleName))
  (if data
    (progn
      (setq updated (${u}-put-group 3 fontFile data))
      (setq updated (${u}-put-group 4 "" updated))
      (setq updated (${u}-put-group 40 0.0 updated))
      (setq updated (${u}-put-group 41 1.0 updated))
      (setq updated (${u}-put-group 50 0.0 updated))
      (setq updated (${u}-put-group 71 0 updated))
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

(defun ${u}-ensure-layer (name color weight linetype)
  (if (or (= (strcase linetype) "BYLAYER") (= (strcase linetype) "BYBLOCK"))
    (setq linetype "CONTINUOUS")
  )
  (if (not (${u}-ensure-linetype linetype))
    (p2dwg-raise (strcat "Approved linetype " linetype " could not be loaded. Page canceled; no Continuous fallback was applied."))
  )
  (if (not (${u}-set-layer-standard name color weight linetype))
    (p2dwg-raise (strcat "Approved layer " name " could not be created or updated. Page canceled."))
  )
)

(defun ${u}-ensure-linetype (name / definition description segments total record
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
          (setq existing (tblsearch "LTYPE" name))
          (if existing
            (setq updated
              (vl-remove-if
                  '(lambda (entry) (member (car entry) '(3 9 40 44 45 46 49 50 72 73 74 75 340)))
                existing
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
                  (setq styleEntity (${u}-ensure-shape-style (nth 3 segment) (nth 4 segment)))
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

(defun ${u}-put-group (code value data / prior)
  (setq prior (assoc code data))
  (if prior (subst (cons code value) prior data) (append data (list (cons code value))))
)

(defun ${u}-set-layer-standard (name color weight linetype / layer-entity data updated verified)
  (setq layer-entity (tblobjname "LAYER" name))
  (if layer-entity
    (progn
      ; entmod needs the actual table-record entity data, not tblsearch's
      ; lookup result. The first page creates these layers; later pages update them.
      (setq data (entget layer-entity))
      (setq updated (${u}-put-group 62 color data))
      (setq updated (${u}-put-group 6 linetype updated))
      (setq updated (${u}-put-group 370 weight updated))
      (if (entmod updated)
        (progn
          (setq verified (entget layer-entity))
          (and verified
            (assoc 62 verified)
            (assoc 6 verified)
            (assoc 370 verified)
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

(defun ${u}-set-insert-layer (entity layer-name / data entity-type updated verified)
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
          (setq updated (${u}-put-group 8 layer-name updated))
          (setq updated (${u}-put-group 62 256 updated))
          (setq updated (${u}-put-group 6 "BYLAYER" updated))
          (setq updated (${u}-put-group 370 -1 updated))
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

(defun ${u}-set-layer-state (name visible locked / layer-entity data color flags updated)
  (setq layer-entity (tblobjname "LAYER" name))
  (if layer-entity
    (progn
      (setq data (entget layer-entity))
      (setq color (if (assoc 62 data) (abs (cdr (assoc 62 data))) 7))
      (if (= color 0) (setq color 7))
      (setq updated (${u}-put-group 62 (if visible color (- color)) data))
      (setq flags (if (assoc 70 data) (cdr (assoc 70 data)) 0))
      ; A source layer is never frozen by this workflow; it is only locked.
      (if (= 1 (logand flags 1)) (setq flags (1- flags)))
      (if locked
        (if (= 0 (logand flags 4)) (setq flags (+ flags 4)))
        (if (/= 0 (logand flags 4)) (setq flags (- flags 4)))
      )
      (setq updated (${u}-put-group 70 flags updated))
      (and (entmod updated) (tblsearch "LAYER" name))
    )
    nil
  )
)

(defun ${u}-source-layer-suffix (name)
  (cond
    ((= (strcase name) "PDF_EQUIP") "EQUIP")
    ((= (strcase name) "PDF_INST") "INST")
    ((= (strcase name) "PDF_PIPE_INLINE") "PIPE_INLINE")
    ((= (strcase name) "PDF_TEXT") "TEXT")
    (T nil)
  )
)

(defun ${u}-pdf-source-layer-p (name / normalized character index)
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

(defun ${u}-selection-source-layers (selection / index entity data name layers valid)
  (if selection
    (progn
      (setq index 0 layers nil valid T)
      (while (and valid (< index (sslength selection)))
        (setq entity (ssname selection index))
        (setq data (entget entity))
        (setq name (if (assoc 8 data) (cdr (assoc 8 data)) nil))
        (if (or
              (not (${u}-pdf-source-layer-p name))
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

(defun ${u}-auto-selection-source-layers (selection / index entity data name layers valid)
  (if selection
    (progn
      (setq index 0 layers nil valid T)
      (while (and valid (< index (sslength selection)))
        (setq entity (ssname selection index)
              data (entget entity)
              name (if (assoc 8 data) (strcase (cdr (assoc 8 data))) nil))
        (if (or (null name)
                (and (/= name "0") (not (${u}-pdf-source-layer-p name)))
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

(defun ${u}-category-for-source-layers (source-layers / category current suffix valid source-layer)
  (setq category nil valid T)
  (foreach source-layer source-layers
    (setq suffix (${u}-source-layer-suffix source-layer))
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

(defun ${u}-source-layer-for-category (category)
  (cond
    ((= (strcase category) "EQUIPMENT") "PDF_EQUIP")
    ((= (strcase category) "INSTRUMENT") "PDF_INST")
    ((= (strcase category) "INLINE COMPONENT") "PDF_PIPE_INLINE")
    (T nil)
  )
)

(defun ${u}-choose-source-category (/ answer)
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

(defun ${u}-snapshot-source-layer (entity snapshots / entry source-layer)
  (setq source-layer nil)
  (foreach entry snapshots
    (if (equal entity (car entry))
      (setq source-layer (nth 2 entry))
    )
  )
  source-layer
)

(defun ${u}-source-target-layer-compatible-p (source-layer target-layer / suffix accepted)
  (setq suffix (${u}-source-layer-suffix source-layer))
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

(defun ${u}-auto-source-target-layer-compatible-p
       (source-layers target-layer / category suffix accepted valid source-layer)
  (setq category (${u}-category-for-source-layers source-layers))
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
                   (not (${u}-pdf-source-layer-p source-layer)))
              (wcmatch (if suffix suffix "") "TEXT,BORDER*,ELEC,MISC,VENDOR,PIPE*,TITLE*,DEFPOINTS"))
          (setq valid nil)))
      valid))
)

(defun ${u}-ensure-archive-layer (source-layer archive-layer / source-record
                                               source-data color linetype weight made)
  (setq source-record (tblsearch "LAYER" source-layer))
  (if (not source-record)
    nil
    (if (tblsearch "LAYER" archive-layer)
      (${u}-set-layer-state archive-layer T nil)
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

(defun ${u}-bounds-center (bounds)
  (list
    (/ (+ (nth 0 bounds) (nth 2 bounds)) 2.0)
    (/ (+ (nth 1 bounds) (nth 3 bounds)) 2.0)
    0.0
  )
)

(defun ${u}-fit-block-to-source (block-reference source-bounds / object block-bounds
                                           source-width source-height block-width block-height
                                           scale-x scale-y scale-factor aspect-error position-error
                                           tolerance source-center block-center insertion-point new-point
                                           result final-bounds final-width final-height width-error
                                           height-error coverage-x coverage-y coverage)
  (setq *p2dwg-replacement-validation* nil)
  (setq object (vlax-ename->vla-object block-reference))
  (setq block-bounds (${u}-selection-bounds (ssadd block-reference)))
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
                      (setq final-bounds (${u}-selection-bounds (ssadd block-reference)))
                      (setq source-center (${u}-bounds-center source-bounds))
                      (setq block-center (${u}-bounds-center final-bounds))
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
                              (setq final-bounds (${u}-selection-bounds (ssadd block-reference)))
                              (setq final-width (- (nth 2 final-bounds) (nth 0 final-bounds)))
                              (setq final-height (- (nth 3 final-bounds) (nth 1 final-bounds)))
                              (setq source-center (${u}-bounds-center source-bounds))
                              (setq block-center (${u}-bounds-center final-bounds))
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

(defun ${u}-insert-approved-block (document source-path insertion-point source-bounds rotation layer-name block-name block-asset-id required-fonts / model-space block-reference entity result error-message missing-font font)
  (${u}-batch-log
    (strcat "DIRECT_IMPORT_REQUEST|" block-asset-id "|" block-name "|" source-path))
  (setq missing-font nil)
  (foreach font required-fonts
    (if (and (null missing-font) (not (findfile font)))
      (setq missing-font font))
  )
  (if missing-font
    (progn
      (${u}-batch-log
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
                  (${u}-set-insert-layer entity layer-name)
                  (${u}-fit-block-to-source entity source-bounds)
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
          (${u}-batch-log
            (strcat "FAILED: direct block import|" block-asset-id "|" block-name "|" error-message))
          nil
        )
        (if result
          (progn
            (${u}-batch-log
              (strcat "DIRECT_IMPORT_CONFIRMED|" block-asset-id "|" block-name "|" layer-name
                "|SCALE=" (rtos (nth 1 *p2dwg-replacement-validation*) 2 6)
                "|ROTATION=" (rtos rotation 2 6)
                "|POSITION_ERROR=" (rtos (nth 2 *p2dwg-replacement-validation*) 2 6)
                "|COVERAGE=" (rtos (nth 5 *p2dwg-replacement-validation*) 2 6)))
            result
          )
          (progn
            (${u}-batch-log
              (strcat "FAILED: AutoCAD did not create a verified Block Reference on layer "
                layer-name "|" block-asset-id "|" block-name))
            nil
          )
        )
      )
    )
  )
)

(defun ${u}-write-replacement-xdata (entity stable-id role source-layer archive-layer block-handle block-asset-id mapping-rule status / data updated block-data)
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

(defun ${u}-write-source-handle-links (block-reference handles / data payload updated)
  (setq data (entget block-reference))
  (setq payload (${u}-link-payload block-reference))
  (if payload
    (progn
      (setq payload
        (append
          (vl-remove-if '(lambda (pair) (and (listp pair) (= (car pair) 1005))) payload)
          (mapcar '(lambda (handle) (cons 1005 handle)) handles)))
      (and (entmod (append data (list (list -3 payload)))) T))
    nil)
)

(defun ${u}-current-overlay-valid-p (selection block-reference target-layer rotation validation / source-bounds block-bounds data sw sh bw bh tolerance center-error coverage)
  (setq source-bounds (${u}-selection-bounds selection))
  (setq block-bounds (${u}-selection-bounds (ssadd block-reference)))
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
            (distance (${u}-bounds-center source-bounds)
              (${u}-bounds-center block-bounds)))
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

(defun ${u}-auto-match-archive-suffix (category)
  (cond
    ((= (strcase category) "EQUIPMENT") "EQUIP")
    ((= (strcase category) "INSTRUMENT") "INST")
    ((= (strcase category) "INLINE COMPONENT") "PIPE_INLINE")
    (T nil)
  )
)

(defun ${u}-auto-xdata-group-p (pair)
  (and
    (= (car pair) -3)
    (vl-some
      '(lambda (entry)
         (and (listp entry)
              (= (type (car entry)) 'STR)
              (= (strcase (car entry)) "P2DWGAUTO")))
      (cdr pair)))
)

(defun ${u}-write-auto-match-xdata
       (entity candidate-id source-layer archive-layer block-handle block-asset-id target-layer / data updated)
  (if (and entity
           (entget entity)
           (or (tblsearch "APPID" "P2DWGAUTO") (regapp "P2DWGAUTO")))
    (progn
      (setq data (entget entity '("*")))
      (setq updated (vl-remove-if '${u}-auto-xdata-group-p data))
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

(defun ${u}-archive-auto-matched-source
       (selection candidate-id category block-reference block-asset-id target-layer rotation /
        suffix archive-layer archive-record archive-created source-layers snapshots index
        entity data source-layer updated block-data validation success archive-final snapshot)
  (setq suffix (${u}-auto-match-archive-suffix category)
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
        (${u}-current-overlay-valid-p selection block-reference target-layer rotation validation))
    (progn
      (setq index 0)
      (while (and success (< index (sslength selection)))
        (setq entity (ssname selection index)
              data (entget entity '("*"))
              source-layer (if (assoc 8 data) (cdr (assoc 8 data)) nil))
        (if (or (null data)
              (and (/= (strcase source-layer) "0")
                   (not (${u}-pdf-source-layer-p source-layer)))
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
          (if (not (${u}-ensure-archive-layer (car source-layers) archive-layer))
            (setq success nil)
            (if (null archive-record) (setq archive-created T)))
          (foreach snapshot snapshots
            (if success
              (progn
                (setq entity (car snapshot)
                      data (cadr snapshot)
                      source-layer (caddr snapshot)
                      updated (${u}-put-group 8 archive-layer data))
                (if (or
                      (not (entmod updated))
                      (not (${u}-write-auto-match-xdata
                        entity candidate-id source-layer archive-layer
                        (cdr (assoc 5 block-data)) block-asset-id target-layer))
                      (/= (strcase (cdr (assoc 8 (entget entity)))) (strcase archive-layer)))
                  (setq success nil)))))
          (if success
            (progn
              (setq archive-final (${u}-set-layer-state archive-layer nil T))
              (if (not archive-final) (setq success nil))))))
      (if success
        (${u}-batch-log
          (strcat "AUTO_SOURCE_ARCHIVED|candidate=" candidate-id
            "|BLOCK_ASSET=" block-asset-id
            "|SOURCE_HANDLES=" (vl-princ-to-string
              (mapcar '(lambda (entry) (cdr (assoc 5 (cadr entry)))) snapshots))
            "|SOURCE_LAYERS=" (vl-princ-to-string source-layers)
            "|ARCHIVE_LAYER=" archive-layer
            "|TARGET_LAYER=" target-layer
            "|ATTRIBUTES=PENDING_EDE|VALIDATION=PASS"))
        (progn
          (if snapshots (${u}-restore-source-snapshot snapshots))
          (if archive-record
            (entmod archive-record)
            (if (and archive-created (tblobjname "LAYER" archive-layer))
              (entdel (tblobjname "LAYER" archive-layer)))
          )
          (${u}-batch-log
            (strcat "AUTO_SOURCE_ARCHIVE_FAILED|candidate=" candidate-id
              "|REASON=VALIDATION_OR_LAYER_TRANSACTION_FAILED|SOURCE=VISIBLE"))))
      success)
    (progn
      (${u}-batch-log
        (strcat "AUTO_SOURCE_ARCHIVE_FAILED|candidate=" candidate-id
          "|REASON=BLOCK_OR_SOURCE_NOT_VALIDATED|SOURCE=VISIBLE"))
      nil))
)

(defun ${u}-write-replacement-log (stable-id item-tag source-handles block-handle
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

(defun ${u}-restore-source-snapshot (snapshots / entry entity restored)
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

(defun ${u}-archive-replaced-source-worker (selection source-layer stable-id item-tag
                                                 block-reference block-asset-id target-layer
                                                 rotation mask-reference / suffix archive-layer source-layers
                                                 source-records archive-record archive-created index entity data
                                                 handle handles snapshots updated moved success validation scale
                                                 source-final archive-final layer-entry original-source-layer)
  (setq suffix (${u}-source-layer-suffix source-layer))
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
        (${u}-source-target-layer-compatible-p source-layer target-layer)
        validation
        (car validation)
        (${u}-current-overlay-valid-p selection block-reference target-layer rotation validation)
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
              (not (${u}-pdf-source-layer-p original-source-layer))
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
            (if (not (${u}-set-layer-state (car layer-entry) T nil))
              (setq success nil)
            )
          )
          (if success
            (progn
              (if (not
                    (${u}-ensure-archive-layer
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
        (setq updated (${u}-put-group 8 archive-layer data))
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
              (${u}-snapshot-source-layer entity snapshots))
            (if (not
                  (${u}-write-replacement-xdata
                    entity stable-id "SOURCE" original-source-layer archive-layer
                    (cdr (assoc 5 (entget block-reference))) block-asset-id
                    "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "PASS"))
              (setq success nil)
            )
            (setq index (1+ index))
          )
          (if success
            (if (not
                  (${u}-write-replacement-xdata
                    block-reference stable-id "BLOCK" source-layer archive-layer
                    (cdr (assoc 5 (entget block-reference))) block-asset-id
                    "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "PASS"))
              (setq success nil)
            )
          )
          (if (and success mask-reference)
            (if (not
                  (${u}-write-replacement-xdata
                    mask-reference stable-id "MASK" source-layer archive-layer
                    (cdr (assoc 5 (entget block-reference))) block-asset-id
                    "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "PASS"))
              (setq success nil)))
          (if success
            (if (not (${u}-write-source-handle-links block-reference handles))
              (setq success nil)))
          (if success
            (progn
              (setq source-final T)
              (foreach layer-entry source-records
                (if (not (${u}-set-layer-state (car layer-entry) T T))
                  (setq source-final nil)
                )
              )
              (setq archive-final (${u}-set-layer-state archive-layer nil T))
              (if (not (and source-final archive-final)) (setq success nil))
            )
          )
          (if success
            (if (not
                  (${u}-write-replacement-log
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
          (${u}-batch-log
            (strcat "SOURCE_ARCHIVED|" stable-id "|" source-layer "|" archive-layer
              "|SOURCE_LAYERS=" (vl-princ-to-string source-layers)
              "|ENTITIES=" (itoa (length handles))))
          (setq *p2dwg-archive-created-doc* (vla-get-ActiveDocument (vlax-get-acad-object)))
          T
        )
        (progn
          (${u}-restore-source-snapshot snapshots)
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
          (${u}-write-replacement-xdata
            block-reference stable-id "BLOCK" source-layer archive-layer
            (cdr (assoc 5 (entget block-reference))) block-asset-id
            "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "NEEDS_REVIEW")
          (${u}-batch-log
            (strcat "FAILED: source archive transaction rolled back|" stable-id "|" source-layer))
          nil
        )
      )
    )
    (progn
      (${u}-batch-log
        (strcat "FAILED: replacement validation incomplete|" (if stable-id stable-id "-")
          "|" (if source-layer source-layer "-") "|" target-layer))
      nil
    )
  )
)

(defun ${u}-stable-id-in-use-p (stable-id / entity payload found)
  (setq entity (entnext) found nil)
  (while (and entity (not found))
    (setq payload (${u}-link-payload entity))
    (if (and payload (>= (length payload) 9)
             (= (cdr (nth 1 payload)) stable-id)
             (= (cdr (nth 2 payload)) "BLOCK")
             (= (cdr (nth 8 payload)) "PASS"))
      (setq found T))
    (setq entity (entnext entity)))
  found
)

(defun ${u}-archive-replaced-source (selection source-layer stable-id item-tag
                                                block-reference block-asset-id target-layer rotation
                                                mask-reference / index entity snapshots result archive-layer
                                                source-records archive-record source-restored layer-entity
                                                layer-name layer-record)
  ; Catch cancellation and unexpected ActiveX errors as well as explicit failures.
  ; Snapshot only the selected source entities; never UNDO an entire drawing.
  (setq snapshots nil source-records nil index 0)
  (setq archive-layer (strcat "PDF_DONE_" (${u}-source-layer-suffix source-layer)))
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
  (if (${u}-stable-id-in-use-p stable-id)
    (progn
      (prompt "\\nThis EDE StableID already has a replacement in this drawing. Source stays visible; review the duplicate.")
      nil)
    (progn
      (setq result
        (vl-catch-all-apply
          '${u}-archive-replaced-source-worker
          (list selection source-layer stable-id item-tag block-reference
            block-asset-id target-layer rotation mask-reference)))
       (if (or (vl-catch-all-error-p result) (null result))
         (progn
           (foreach layer-record source-records
             (${u}-set-layer-state (car layer-record) T nil))
          (if (tblsearch "LAYER" archive-layer)
            (${u}-set-layer-state archive-layer T nil))
          (setq source-restored (${u}-restore-source-snapshot snapshots))
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
                 (${u}-set-layer-state (car layer-record) T nil))
              (${u}-set-layer-state archive-layer T nil)))
          (${u}-write-replacement-xdata
            block-reference stable-id "BLOCK" source-layer archive-layer
            (cdr (assoc 5 (entget block-reference))) block-asset-id
            "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "NEEDS_REVIEW")
          (if mask-reference
            (${u}-write-replacement-xdata
              mask-reference stable-id "MASK" source-layer archive-layer
              (cdr (assoc 5 (entget block-reference))) block-asset-id
              "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "NEEDS_REVIEW"))
          (${u}-batch-log
            (strcat "NEEDS_REVIEW|ARCHIVE_ROLLBACK|" stable-id
              (if (vl-catch-all-error-p result)
                (strcat "|" (vl-catch-all-error-message result)) "")))
          (if (not source-restored)
            (p2dwg-raise "Archive rollback needs review. Source and archive layers remain visible; this page was not saved."))
          nil)
        T))
  )
)

(defun ${u}-ede-type-compatible-p (source-layer record-type / suffix)
  (setq suffix (${u}-source-layer-suffix source-layer))
  (cond
    ((= suffix "EQUIP") (wcmatch (strcase record-type) "EQUIPMENT*,PACKAGE"))
    ((= suffix "INST") (wcmatch (strcase record-type) "INSTRUMENT*"))
    ((= suffix "PIPE_INLINE") (= (strcase record-type) "VALVE"))
    ((= suffix "TEXT") (= (strcase record-type) "ITEM NOTE"))
    (T nil))
)

(defun ${u}-choose-ede-record (source-layer / options index entry choice)
  (setq options
    (vl-remove-if-not
      '(lambda (entry)
         (and (= (nth 3 entry) *p2dwg-source-page*)
              (${u}-ede-type-compatible-p source-layer (nth 2 entry))))
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

(defun ${u}-set-pdf-layer-prefix-visibility (prefix visible / record name count)
  (setq record (tblnext "LAYER" T) count 0)
  (while record
    (setq name (cdr (assoc 2 record)))
    (if (and name
             (>= (strlen name) (strlen prefix))
             (= (strcase (substr name 1 (strlen prefix))) (strcase prefix)))
      (progn
        (if (${u}-set-layer-state name visible T)
          (setq count (1+ count))
        )
      )
    )
    (setq record (tblnext "LAYER"))
  )
  count
)

(defun ${u}-prepare-source-layer-review (/ record name)
  (setq record (tblnext "LAYER" T))
  (while record
    (setq name (cdr (assoc 2 record)))
    (if (and name
             (>= (strlen name) 4)
             (= (strcase (substr name 1 4)) "PDF_")
             (/= (substr (strcase name) 1 9) "PDF_DONE_"))
      (${u}-set-layer-state name T nil)
    )
    (setq record (tblnext "LAYER"))
  )
  T
)

(defun ${u}-finalize-source-layer-states (/ record name)
  (setq record (tblnext "LAYER" T))
  (while record
    (setq name (cdr (assoc 2 record)))
    (cond
      ((and name
            (>= (strlen name) 9)
            (= (strcase (substr name 1 9)) "PDF_DONE_"))
        (if (not (${u}-set-layer-state name nil T))
          (p2dwg-raise (strcat "Could not hide and lock archived source layer " name "."))
        )
      )
      ((and name
            (>= (strlen name) 4)
            (= (strcase (substr name 1 4)) "PDF_"))
        (if (not (${u}-set-layer-state name T T))
          (p2dwg-raise (strcat "Could not keep pending source layer visible and locked: " name "."))
        )
      )
    )
    (setq record (tblnext "LAYER"))
  )
  T
)

(defun ${u}-link-payload (entity / data link)
  (setq data (entget entity '("PIDMAPLINK")))
  (setq link (assoc -3 data))
  (if (and link (listp (cadr link))
           (= (strcase (car (cadr link))) "PIDMAPLINK"))
    (cadr link)
    nil
  )
)

(defun ${u}-restore-replacement (stable-id remove-generated / entity payload role source-layer
                                              archive-layer block-handle sources blocks
                                              masks restored data updated value text-restored
                                              source-payload entity-source-layer)
  (setq text-restored (${u}-rollback-text-links stable-id remove-generated))
  (setq entity (entnext) sources nil blocks nil masks nil)
  (while entity
    (setq payload (${u}-link-payload entity))
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
          (${u}-link-payload (car blocks))
          (${u}-link-payload (car sources))))
      (setq source-layer (cdr (nth 3 payload)))
      (setq archive-layer (cdr (nth 4 payload)))
      (foreach entity sources
        (setq source-payload (${u}-link-payload entity))
        (setq entity-source-layer (cdr (nth 3 source-payload)))
        (${u}-set-layer-state entity-source-layer T nil))
      (${u}-set-layer-state archive-layer T nil)
      (setq restored T)
      (foreach entity sources
        (setq source-payload (${u}-link-payload entity))
        (setq entity-source-layer (cdr (nth 3 source-payload)))
        (setq data (entget entity))
        (setq updated (${u}-put-group 8 entity-source-layer data))
        (if (not (and (entmod updated)
                      (${u}-write-replacement-xdata
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
              (${u}-write-replacement-xdata
                entity stable-id role source-layer archive-layer
                (cdr (nth 5 payload)) (cdr (nth 6 payload))
                (cdr (nth 7 payload)) "NEEDS_REVIEW")))
          (foreach entity sources
            (setq source-payload (${u}-link-payload entity))
            (${u}-set-layer-state
              (cdr (nth 3 source-payload)) T T))
          (${u}-set-layer-state archive-layer nil T)
          (prompt
            (strcat "\\nRollback complete for StableID " stable-id
              ". Source entities are visible again; no PDF source was deleted."))
          T
        )
        (progn
          (foreach entity sources
            (setq source-payload (${u}-link-payload entity))
            (${u}-set-layer-state
              (cdr (nth 3 source-payload)) T nil))
          (${u}-set-layer-state archive-layer T nil)
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
        (${u}-restore-replacement stable-id T)))
    (prompt "\\nA 32-character StableID is required. Nothing was changed.")
  )
  (princ)
)

(defun ${u}-persisted-replacement-valid-p (block-reference / payload data source-layer archive-layer
                                                       source-state archive-state target-state
                                                        stable-id source-handle source source-payload count valid pair
                                                        entity-source-layer)
  (setq payload (${u}-link-payload block-reference))
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
          (${u}-source-target-layer-compatible-p source-layer (cdr (assoc 8 data)))
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
            (setq source-payload (if source (${u}-link-payload source) nil))
            (setq entity-source-layer
              (if source-payload (cdr (nth 3 source-payload)) nil))
            (setq source-state
              (if entity-source-layer (tblsearch "LAYER" entity-source-layer) nil))
            (if (not
                  (and source source-payload
                    (= (cdr (nth 1 source-payload)) stable-id)
                    (= (cdr (nth 2 source-payload)) "SOURCE")
                    (${u}-pdf-source-layer-p entity-source-layer)
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
            (setq payload (${u}-link-payload entity))
            (if (and payload (>= (length payload) 9)
                     (= (cdr (nth 2 payload)) "BLOCK")
                     (= (cdr (nth 8 payload)) "PASS"))
              (progn
                (setq stable-id (cdr (nth 1 payload)))
                (setq validation-result
                  (vl-catch-all-apply '${u}-persisted-replacement-valid-p (list entity)))
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
                    (${u}-restore-replacement stable-id nil)
                    (prompt (strcat "\\nNEEDS_REVIEW|REOPEN_VALIDATION_FAILED|" stable-id
                      "|Available source restored; CAD retained for review."))))))
            (setq entity next-entity))
          (${u}-validate-text-reopen)
          (prompt
            (strcat "\\nReopen validation: " (itoa passed) " passed, " (itoa failed)
              " need review. Source archives are retained; no purge is available."))))))
  (princ)
)

(defun c:P2DWGSOURCEVIEW ()
  (${u}-set-pdf-layer-prefix-visibility "PDF_" T)
  (prompt "\\nSource view: archived PDF source geometry is visible; CAD objects and pending source remain.")
  (princ)
)

(defun c:P2DWGMAPPEDVIEW ()
  (${u}-set-pdf-layer-prefix-visibility "PDF_" T)
  (${u}-set-pdf-layer-prefix-visibility "PDF_DONE_" nil)
  (${u}-set-layer-state "PID-REVIEW-CLOUD" nil T)
  (prompt "\\nMapped view: completed PDF source is hidden; approved CAD and pending source remain visible.")
  (princ)
)

(defun c:P2DWGREVIEWVIEW ()
  (${u}-set-pdf-layer-prefix-visibility "PDF_" T)
  (${u}-set-pdf-layer-prefix-visibility "PDF_DONE_" nil)
  (${u}-set-layer-state "PID-REVIEW-CLOUD" T T)
  (prompt "\\nReview view: approved CAD, pending PDF source, and review clouds are visible.")
  (princ)
)

(defun ${u}-make-valve-wipeout (boundary block-reference layer / vertices point polyline result wipeout data center scale-x scale-y rotation x y)
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

(defun ${u}-apply-approved-cad-standards (/ entry name color linetype style style-data style-entity)
  (foreach linetype *p2dwg-approved-linetypes*
    (if (not (${u}-ensure-linetype (car linetype)))
      (p2dwg-raise (strcat "Approved linetype " (car linetype) " could not be loaded."))
    )
  )
  (foreach entry *p2dwg-approved-layers*
    (${u}-ensure-layer (car entry) (cadr entry) (caddr entry) (cadddr entry))
  )
  (foreach style *p2dwg-approved-text-styles*
    (if (or (not (findfile (nth 4 style)))
            (and (/= (nth 5 style) "") (not (findfile (nth 5 style)))))
      (p2dwg-raise (strcat "Required approved text font is missing for " (car style)
        ". Install its font and bigfont in AutoCAD's support paths. Font substitution is not allowed.")))
    (setq style-entity (tblobjname "STYLE" (car style)))
    (if style-entity
      (progn
        (setq style-data (entget style-entity))
        (foreach entry (list (cons 40 (nth 1 style)) (cons 41 (nth 2 style))
                            (cons 50 (nth 3 style)) (cons 3 (nth 4 style))
                            (cons 4 (nth 5 style)))
          (setq style-data (${u}-put-group (car entry) (cdr entry) style-data)))
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
  (setvar "INSUNITS" 4)
  (setvar "MEASUREMENT" 1)
  (setvar "LTSCALE" 1.0)
  (setvar "CELTSCALE" 1.0)
  (setvar "MSLTSCALE" 1)
  (setvar "PSLTSCALE" 0)
)

(defun ${u}-tag-page-entity (entity / data layer-entity layer-data flags result restored)
  (setq data (entget entity))
  (setq layer-entity (if data (tblobjname "LAYER" (cdr (assoc 8 data))) nil))
  (setq layer-data (if layer-entity (entget layer-entity) nil))
  (setq flags (if layer-data (cdr (assoc 70 layer-data)) 0))
  ; Identity writes must work on locked PDF/archived layers without leaving them unlocked.
  (if (= 4 (logand flags 4))
    (if (not (entmod (${u}-put-group 70 (- flags 4) layer-data)))
      (p2dwg-raise "Could not temporarily unlock source layer for page identity.")))
  (setq result (vl-catch-all-apply '${u}-tag-page-entity-unlocked (list entity)))
  (setq restored
    (if (= 4 (logand flags 4)) (entmod layer-data) T))
  (if (not restored)
    (p2dwg-raise "Could not restore source layer lock after page identity."))
  (if (vl-catch-all-error-p result)
    (p2dwg-raise (vl-catch-all-error-message result))
    result)
)

(defun ${u}-tag-page-entity-unlocked (entity / data payloads)
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
        (${u}-job-entity-matches entity)
      )
    )
    nil
  )
)

(defun ${u}-collect-imported-entities (before-entity / entity data entity-type selection)
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

(defun ${u}-tag-review-entity (entity role item category block / data)
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

(defun ${u}-batch-log (message / handle)
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

(defun ${u}-record-mapping (selection status item block-asset-id / index entity data handle entity-type log-handle)
  (if (not (member (strcase status) '(${y})))
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

(defun ${u}-stamp-page (selection / index entity data handle entity-type)
  (if selection
    (progn
      (setq index 0)
      (while (< index (sslength selection))
        (setq entity (ssname selection index))
        (if (not (${u}-tag-page-entity entity))
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

(defun ${u}-selection-bounds (selection / index entity low high result
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

(defun ${u}-tag-pipe-runs (imported-selection / answer selection index entity
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
                            (${u}-pad-page *p2dwg-source-page*)
                            "-R"
                            (${u}-pad-page run-index)
                          )
                        )
                        (regapp "PIDPIPE")
                        (setq selection-index 0)
                        (while (< selection-index (sslength selection))
                          (setq entity (ssname selection selection-index))
                          (setq data (entget entity))
                          (setq updated (${u}-put-group 8 layer-name data))
                          (setq updated (${u}-put-group 6 "BYLAYER" updated))
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
                        (${u}-batch-log
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

(defun ${u}-manual-reference-calibration-archive (selection / reference reference-name known-length
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
      (${u}-batch-log
        (strcat "SCALE_UNVERIFIED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
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
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*) "|CALIBRATION_INPUT"))
      (p2dwg-raise "Scale calibration was cancelled. This page was not saved.")
    )
  )
  (setq measured (distance first-point second-point))
  (if (<= measured 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*) "|INVALID_MEASUREMENT"))
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
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*) "|VERIFY_INPUT"))
      (p2dwg-raise "Scale verification was cancelled. This page was not saved.")
    )
  )
  (setq checked-length (distance check-first check-second))
  (if (<= checked-length 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*) "|ZERO_REMEASUREMENT"))
      (p2dwg-raise "Scale verification could not measure the symbol side. This page was not saved.")
    )
  )
  (setq error-percent
    (* 100.0 (/ (abs (- checked-length known-length)) known-length))
  )
  (if (> error-percent 0.5)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
          "|PRIMARY=" reference-name "|ERROR_PERCENT=" (rtos error-percent 2 4)))
      (p2dwg-raise
        (strcat "Scale verification missed the 0.5% tolerance ("
          (rtos error-percent 2 4) "%). This page was not saved.")
    )
  )
  )
  (${u}-batch-log
    (strcat "SCALE_PRIMARY_REFERENCE|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
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
          (${u}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_INPUT|" cross-name))
          (p2dwg-raise "The standard cross-check was cancelled. This page was not saved.")
        )
      )
      (setq cross-measured (distance cross-first cross-second))
      (if (<= cross-measured 0.0)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${u}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_ZERO_LENGTH|" cross-name))
          (p2dwg-raise "The standard cross-check could not measure the symbol side.")
        )
      )
      (setq cross-error
        (* 100.0 (/ (abs (- cross-measured cross-length)) cross-length))
      )
      (${u}-batch-log
        (strcat "SCALE_REFERENCE_CROSSCHECK|SOURCE_${f}.pdf|"
          (itoa *p2dwg-source-page*) "|REFERENCE=" cross-name
          "|KNOWN_MM=" (rtos cross-length 2 4)
          "|REMEASURED_MM=" (rtos cross-measured 2 4)
          "|ERROR_PERCENT=" (rtos cross-error 2 4)
          "|TOLERANCE_PERCENT=0.5"))
      (if (> cross-error 0.5)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${u}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_ERROR_PERCENT=" (rtos cross-error 2 4)))
          (p2dwg-raise
            (strcat "The valve/instrument standards disagree by "
              (rtos cross-error 2 4)
              "%. No second scale was applied; this page was not saved.")
        )
      )
      )
    )
    (${u}-batch-log
      (strcat "SCALE_REFERENCE_CROSSCHECK_SKIPPED|SOURCE_${f}.pdf|"
        (itoa *p2dwg-source-page*) "|OTHER_STANDARD_NOT_PRESENT"))
  )
  (setq *p2dwg-scale-status* "PLAN_VERIFIED")
  (${u}-batch-log
    (strcat "SCALE_PLAN_VERIFIED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
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

(defun ${u}-calibrate-import (selection scaleFactor scaleMode
                                         pageWidthMm pageHeightMm targetWidthMm targetHeightMm /
                                         beforeBounds afterBounds beforeWidth beforeHeight
                                         afterWidth afterHeight widthRatio heightRatio
                                         expectedWidth expectedHeight fitError scaleError result)
  (setq *p2dwg-scale-status* "UNVERIFIED")
  (cond
    ((/= (strcase scaleMode) "FIXED_SHEET_SIZE")
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=FIXED_SHEET_PLAN_MISSING|MODE=" scaleMode))
      (p2dwg-raise "Automatic scale failed: no valid PDF page-size plan. No block placement or DWG save was attempted."))
    ((or (<= scaleFactor 0.0) (<= pageWidthMm 0.0) (<= pageHeightMm 0.0)
         (/= targetWidthMm 841.0) (/= targetHeightMm 594.0))
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=INVALID_FIXED_SHEET_INPUT"))
      (p2dwg-raise "Automatic scale failed: invalid scale or nonstandard sheet dimensions. No block placement or DWG save was attempted."))
  )
  (if (or (null selection) (= (sslength selection) 0))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=PDFIMPORT_EMPTY"))
      (p2dwg-raise "Automatic scale failed: PDFIMPORT returned no geometry."))
  )
  (setq expectedWidth (/ (* pageWidthMm scaleFactor) 25.4)
        expectedHeight (/ (* pageHeightMm scaleFactor) 25.4)
        fitError 0.005)
  (if (or (> expectedWidth (* targetWidthMm (+ 1.0 fitError)))
          (> expectedHeight (* targetHeightMm (+ 1.0 fitError)))
          (and (> (/ (abs (- expectedWidth targetWidthMm)) targetWidthMm) fitError)
               (> (/ (abs (- expectedHeight targetHeightMm)) targetHeightMm) fitError)))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=PAGE_DOES_NOT_FIT_FIXED_SHEET"
          "|EXPECTED_PAGE_MM=" (rtos expectedWidth 2 4) "x" (rtos expectedHeight 2 4)))
      (p2dwg-raise "Automatic scale failed: uniform page fit does not match the fixed 841x594 mm sheet."))
  )
  (setq beforeBounds (${u}-selection-bounds selection))
  (if (null beforeBounds)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=PRE_SCALE_EXTENTS_UNAVAILABLE"))
      (p2dwg-raise "Automatic scale failed: imported drawing extents could not be measured."))
  )
  (setq beforeWidth (- (nth 2 beforeBounds) (nth 0 beforeBounds))
        beforeHeight (- (nth 3 beforeBounds) (nth 1 beforeBounds)))
  (if (or (<= beforeWidth 0.000001) (<= beforeHeight 0.000001))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=DEGENERATE_PRE_SCALE_EXTENTS"))
      (p2dwg-raise "Automatic scale failed: imported drawing has zero-width or zero-height extents."))
  )
  (setq result
    (vl-catch-all-apply 'vl-cmdf
      (list "_.SCALE" selection "" '(0.0 0.0 0.0) scaleFactor)))
  (if (vl-catch-all-error-p result)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=UNIFORM_SCALE_COMMAND_FAILED"))
      (p2dwg-raise "Automatic uniform scale command failed. No block placement or DWG save was attempted."))
  )
  (setq afterBounds (${u}-selection-bounds selection))
  (if (null afterBounds)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=POST_SCALE_EXTENTS_UNAVAILABLE"))
      (p2dwg-raise "Automatic scale verification failed: post-scale extents could not be measured."))
  )
  (setq afterWidth (- (nth 2 afterBounds) (nth 0 afterBounds))
        afterHeight (- (nth 3 afterBounds) (nth 1 afterBounds))
        widthRatio (/ afterWidth beforeWidth)
        heightRatio (/ afterHeight beforeHeight)
        scaleError
          (max (/ (abs (- widthRatio scaleFactor)) scaleFactor)
               (/ (abs (- heightRatio scaleFactor)) scaleFactor)))
  (if (or (<= afterWidth 0.000001) (<= afterHeight 0.000001)
          (> scaleError 0.005))
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
          "|REASON=UNIFORM_SCALE_VERIFICATION_FAILED"
          "|EXPECTED_FACTOR=" (rtos scaleFactor 2 8)
          "|X_FACTOR=" (rtos widthRatio 2 8)
          "|Y_FACTOR=" (rtos heightRatio 2 8)
          "|ERROR_PERCENT=" (rtos (* scaleError 100.0) 2 4)))
      (p2dwg-raise "Automatic scale verification failed: imported geometry did not receive the same uniform scale on both axes."))
  )
  (setq *p2dwg-effective-scale* scaleFactor
        *p2dwg-scale-status* "APPLIED")
  (${u}-batch-log
    (strcat "SCALE_APPLIED|SOURCE_${f}.pdf|" (itoa *p2dwg-source-page*)
      "|METHOD=FIXED_SHEET_SIZE|FACTOR=" (rtos scaleFactor 2 10)
      "|TARGET_MM=841x594"
      "|EXPECTED_PAGE_MM=" (rtos expectedWidth 2 4) "x" (rtos expectedHeight 2 4)
      "|X_FACTOR=" (rtos widthRatio 2 8) "|Y_FACTOR=" (rtos heightRatio 2 8)
      "|EXTENTS_BEFORE=" (vl-princ-to-string beforeBounds)
      "|EXTENTS_AFTER=" (vl-princ-to-string afterBounds)))
  T
)

(defun ${u}-cloud-vertices (min-x min-y max-x max-y / step-x step-y
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

(defun ${u}-make-review-cloud (bounds item category block / min-x min-y
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
  (${u}-ensure-layer "PID-REVIEW-CLOUD" 1 35 "CONTINUOUS")
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
        (${u}-cloud-vertices min-x min-y max-x max-y)
      )
    )
  )
  (${u}-tag-page-entity cloud)
  (${u}-tag-review-entity cloud "RED_REVISION_CLOUD" item category block)
  cloud
)

(defun ${u}-category-for-source-layer (source-layer / suffix)
  (setq suffix
    (if source-layer (${u}-source-layer-suffix source-layer) nil))
  (cond
    ((equal suffix "EQUIP") "equipment")
    ((equal suffix "INST") "instrument")
    ((equal suffix "PIPE_INLINE") "inline component")
    (T nil)
  )
)

(defun ${u}-choose-approved-symbol (category / options index choice mask-note)
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

(defun ${u}-review-unsupported (imported / answer selection bounds index entity
                                            selection-index category block-name target-layer
                                            center fallback item choice source-path mask-boundary
                                            wipeout block-asset-id exact-match-answer
                                              exact-match-confirmed required-fonts source-layer source-layers
                                             rotation identity-confirmed overlay-answer ede-record stable-id
                                              attribute-plan candidate-id order-result)
  (${u}-prepare-source-layer-review)
  (${u}-ensure-layer "PID-PROVISIONAL-FALLBACK" 1 35 "CONTINUOUS")
  (initget "Yes No")
  (setq answer
    (getkword
      "\\nDo you want to replace any PDF-imported symbols with approved Legends Library blocks on this page? [Yes/No] <No>: "
    )
  )
  (if (null answer) (setq answer "No"))
  (progn
      (${u}-batch-log
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
            (${u}-prepare-source-layer-review)
            (setq selection (ssget))
            (if selection
              (progn
                ; Text has its own confirmation/attribute association path.
                (setq selection (${u}-geometry-only-selection selection))
                (setq source-layers (${u}-selection-source-layers selection))
                (setq bounds
                  (if (and source-layers (${u}-source-selection-p selection imported))
                    (${u}-selection-bounds selection)
                    nil))
                (if (null bounds)
                  (prompt "\\nSelect only live PDF_ source entities from this page, including any fills that belong to this one symbol. The selection was not changed.")
                  (progn
                    (setq wipeout nil stable-id nil ede-record nil)
                    (setq category
                      (${u}-category-for-source-layers source-layers))
                    (if (null category)
                      (progn
                        (prompt
                          (strcat
                            "\\nSelected PDF layer names do not identify the symbol category: "
                            (vl-princ-to-string source-layers)
                            ". Choose by the visible item only if you are sure."))
                        (setq category (${u}-choose-source-category))
                      )
                    )
                    (setq source-layer
                      (if category
                        (${u}-source-layer-for-category category)
                        nil))
                    (if category
                      (setq choice (${u}-choose-approved-symbol category))
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
                      (${u}-batch-log
                        (strcat "BLOCK_SELECTION_CONFIRMED|" *p2dwg-source-alias* "|"
                          (itoa *p2dwg-source-page*) "|CATEGORY=" category
                          "|BLOCK=" block-asset-id "|" block-name "|" target-layer))
                    )
                    (setq item
                      (strcat
                        "REV-${String(a).padStart(2,"0")}-"
                        (${u}-pad-page index)
                      )
                    )
                    (${u}-record-mapping selection "CANDIDATE" item nil)
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
                            (${u}-batch-log
                              (strcat "FAILED: approved target layer is unavailable|"
                                block-asset-id "|" target-layer))
                            (prompt "\\nThe approved target layer is not available. Source geometry will be preserved and clouded.")
                          )
                          ((not (findfile source-path))
                            (${u}-batch-log
                              (strcat "FAILED: approved block source is missing|" block-asset-id "|" source-path))
                            (prompt "\\nThe approved block DXF/DWG is missing from the runner folder. Source geometry will be preserved and clouded.")
                          )
                          ((and source-layer
                                (not (${u}-source-target-layer-compatible-p source-layer target-layer)))
                            (${u}-batch-log
                              (strcat "FAILED: incompatible source/approved layer|" source-layer "|" target-layer))
                            (prompt "\\nThe approved target layer is incompatible with this PDF source layer. Source stays visible for review.")
                          )
                          (T
                            (setq rotation (getangle "\\nApproved block rotation angle <0>: "))
                            (if (null rotation) (setq rotation 0.0))
                            (setq fallback
                              (${u}-insert-approved-block
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
                          (${u}-make-valve-wipeout mask-boundary fallback target-layer)
                        )
                        (if wipeout
                          (progn
                            (${u}-tag-page-entity wipeout)
                            (${u}-tag-review-entity
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
                            (setq ede-record (${u}-choose-ede-record source-layer))
                            (if ede-record
                              (progn
                                (setq stable-id (strcase (car ede-record)))
                                 (setq candidate-id
                                   (strcat *p2dwg-source-alias* "#" (itoa *p2dwg-source-page*)
                                     ":" (cdr (assoc 5 (entget (ssname selection 0))))))
                                (setq exact-match-confirmed
                                  (${u}-archive-replaced-source
                                    selection source-layer stable-id (nth 1 ede-record)
                                    fallback block-asset-id target-layer rotation wipeout))
                                 (if exact-match-confirmed
                                   (progn
                                     ; Body placement is independently verified first.
                                     ; Label width must never become a geometry-fit signal.
                                     (setq attribute-plan
                                       (${u}-prepare-attributes fallback ede-record bounds imported
                                         block-asset-id candidate-id))
                                     (${u}-commit-attributes attribute-plan fallback ede-record block-asset-id candidate-id))
                                   (progn
                                     (${u}-attribute-summary fallback ede-record block-asset-id candidate-id "NEEDS_REVIEW")))
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
                        (${u}-tag-page-entity fallback)
                        (${u}-tag-review-entity
                          fallback
                          (if exact-match-confirmed
                            "CONFIRMED_BLOCK_MAPPING"
                            "PROVISIONAL_SAME_CATEGORY_FALLBACK"
                          )
                          item category block-name
                        )
                        (${u}-record-mapping
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
                    (${u}-record-mapping
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
                        (${u}-tag-review-entity
                          entity "UNSUPPORTED_SOURCE_RETAINED" item category block-name))
                      (setq selection-index (1+ selection-index))
                    )
                    (if (not (and exact-match-confirmed fallback))
                      (${u}-make-review-cloud
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
        (${u}-batch-log
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

${X2(u)}
${W2(u)}
${K2(u)}
${Z2(u)}
${G2(u)}
${F2(u,D)}
${$2(a,r)}
`,N=_.indexOf(`(defun ${u}-manual-reference-calibration-archive`),w=_.indexOf(`(defun ${u}-calibrate-import`);return N<0||w<N?_:`${_.slice(0,N)}${_.slice(w)}`}function aA(a,r,s){const o=a.map((p,g)=>{const f=g+1;return{documentNumber:f,sourceId:p.sourceId??`SOURCE_${String(f).padStart(2,"0")}`,sourceFile:`SOURCE_${String(f).padStart(2,"0")}.pdf`,sourceName:p.sourceName??`PDF ${f}`,sha256:p.sourceHash??"",pageCount:p.pageCount,pageDrawingNames:p.pageDrawingNames}}),l=a.flatMap((p,g)=>(p.pageSizesPoints??[]).flatMap((f,m)=>{const u=Y2(f);return!u||!H2(f,u).valid?[{documentNumber:g+1,pageNumber:m+1,scaleFactor:1,method:"FIXED_SHEET_SIZE",pageWidthMm:0,pageHeightMm:0,targetWidthMm:841,targetHeightMm:594}]:[{documentNumber:g+1,pageNumber:m+1,scaleFactor:u.scaleFactor,method:u.method,pageWidthMm:u.pageWidthMm,pageHeightMm:u.pageHeightMm,targetWidthMm:u.targetWidthMm,targetHeightMm:u.targetHeightMm}]}));return q2(o,!!r,s,l)}function nA(){return`param(
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
`}function rA(a,r){const s=g=>{const f=[2166136261,2654435769,2246822507,3266489909],m=[16777619,1540483477,668265261,374761393];for(const u of g)for(let y=0;y<f.length;y+=1)f[y]=Math.imul(f[y]^u,m[y])>>>0;return f.map(u=>u.toString(16).padStart(8,"0")).join("")},o=a.map((g,f)=>[f+1,g.sourceHash?.toLowerCase()??s(g.pdfBytes),g.pageCount,g.discipline,g.sourceId??"",g.sourceName??"",g.originalName??"",g.projectId??"",g.titleBlockGroupId??"",JSON.stringify(g.pageSizesPoints??[]),JSON.stringify(g.pageDrawingNames??[])].join("|")),l=[];for(const g of r)g.path==="RUN_BATCH.lsp"||g.path==="README_LOCAL_AUTOCAD.txt"||/^SOURCE_\d+\.pdf$/i.test(g.path)||l.push(`${g.path}|${g.content.length}|${s(g.content)}`);const p=["LOCAL_AUTOCAD_BATCH_V1",`RUNNER_BUILD|${Ys}`,...o.map(g=>`JOB|${g}`),...l.map(g=>`FILE|${g}`)].join(`
`);return s(new TextEncoder().encode(p))}function sA(a,r){const s=a.map((l,p)=>`- PDF ${p+1} (${l.discipline}): ${l.pageCount} page(s) -> ${l.pageCount} native DWG file(s)`).join(`
`)+`

OUTPUT NAMES
Page DWGs use detected Drawing No/Title labels from the source PDF, not equipment tags.
Duplicate names get a document/page suffix; existing DWGs are never overwritten.
Missing, scanned or ambiguous labels use unique fallback names marked FALLBACK_REVIEW.
See each PDF pageOutputs entry in batch_manifest.json for the exact filenames.
`;return`LOCAL AUTOCAD PDF-TO-DWG RUNNER
 ---------------------------------
Runner build: ${Ys}

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
   neutral output name. Every page is fitted uniformly inside the fixed 841 x
   594 mm sheet. The entire PDFIMPORT result is scaled once; no valve,
   instrument, or calibration-value prompt appears.
   The runner no longer asks for a DWT or opens new drawing tabs.
 4. The companion processes the queued PDFs sequentially and creates one DWG
     per page. PDFIMPORT starts in native PDF-inch units, then the whole imported
     page receives one uniform fixed-sheet scale. The runner verifies both axes,
     the 841 x 594 mm fit, and detected 12 x 12 mm instrument / 6 x 3 mm valve
     references before block matching; a failed or unverified check stops that page.
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
  P2DWG_ARIAL_NARROW is variable-height. Final text keeps its imported height,
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
- Automatic matching uses a local geometry signature, compatible source/target
  layers, fit/rotation checks, and a unique-best-match margin. Only unique
  high-confidence matches are inserted as provisional native Block References.
  Unmatched, overlapping, unsupported, or ambiguous geometry stays visible.
  The source layer determines the allowed category (PDF_EQUIP -> equipment,
  PDF_INST -> instrument, PDF_PIPE_INLINE -> inline component).
  Auto-inserted blocks remain NEEDS_REVIEW until their EDE StableID and
  attributes are confirmed; no source entities are hidden or deleted here.
  Approved isolated DXFs are read directly and inserted into the output
  drawing as native Block References; source files are not opened or modified.
  If no approved compatible block is available, the source geometry is retained.
- Reviewed layers are created or updated to their approved color, lineweight,
  and linetype. Required text fonts and bigfonts must be installed; missing
  fonts stop the run rather than silently substituting a font. Existing styles
  with the same name are updated to the reviewed definition.
  After PDFIMPORT, PDF_ source layer names are preserved for per-item archival.
  Where an approved matching layer exists, its color/linetype/weight are copied
  to the source layer; otherwise the source appearance is retained. Imported
  entities use the source layer's color ByLayer, without renaming whole layers.
  Explicit entity true-color overrides are cleared.
  Project title-block layers are not changed. The batch log records each result.
  The supported-block stage writes a local geometry index for approved block
  definitions when an overview DXF was supplied during extraction. It scans
  imported PDF entities and emits normalized descriptors and conservative,
  non-destructive candidate groups. These candidate groups are not confirmed
  symbols and have no match scores. Automatic recognition and replacement stay
  gated until group boundaries and match thresholds are validated on labeled,
  anonymized AutoCAD pages. The heuristic may miss open or unusually spaced
  symbols and may include adjacent geometry, so every candidate requires review.
  Every imported entity remains in place; no approved block is inserted and no
  source geometry is removed. Text contents, layer names, colors, and nearby
  labels are excluded from candidate identity evidence.
  All editable PDFIMPORT TEXT/MTEXT receives Arial Narrow immediately after
  import, including loose text that has not been associated with a block.
  This font-only pass preserves content, height, location, rotation,
  justification, source layer, and MTEXT height/width/oblique overrides.
  Classification and association remain a separate review; unconfirmed text
  is not promoted, moved, or deleted. A failed item rolls back the whole
  page-level font pass and prevents that page from saving. Outlined letters
  are NOT editable text and are not repaired automatically.
   Other unselected PDF geometry remains in place on its preserved source layer.
   Before saving each page, choose a standard reference visible on that page:
   an instrument side of 12 mm, a valve's long side of 6 mm, or its short side
   of 3 mm. Each PDF page is fitted uniformly inside the fixed 841 x 594 mm
   sheet. Equipment keeps its depicted proportions. The runner never asks for
   calibration input; it stops with SCALE_FAILED if the page or an identified
   instrument/valve reference cannot be validated.
   the next page.
  Drawings use metric insertion units and approved reviewed linetype patterns.
  Simple dash/gap patterns and shape-based SHX segments are preserved. A missing
  SHX font or unsupported pattern stops the run rather than dropping its marks
  or silently substituting Continuous.
- The optional Pipe Run step is manual: select only 2D PDF-imported LINE,
  LWPOLYLINE, POLYLINE, or ARC segments for one run, choose a reviewed
  non-zero Legends Library layer, and enter the run tag. The runner applies
  that layer with BYLAYER linetype and adds PIDPIPE XData with one StableID to
  every selected segment. It does not infer line routes and does not create
  native Plant 3D intelligence or an automatic EDE row.
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
`}function oA(a,r=[],s=[],o=[],l){if(a.length===0||a.some(N=>!Number.isInteger(N.pageCount)||N.pageCount<1||!["PFD","P&ID"].includes(N.discipline)||!(N.pdfBytes instanceof Uint8Array)||N.pdfBytes.length===0||N.pageSizesPoints!==void 0&&(N.pageSizesPoints.length!==N.pageCount||N.pageSizesPoints.some(w=>!Number.isFinite(w.width)||!Number.isFinite(w.height)||w.width<=0||w.height<=0))||typeof N.sourceHash!="string"||!/^[a-f0-9]{64}$/i.test(N.sourceHash)||N.pageDrawingNames!==void 0&&(N.pageDrawingNames.length!==N.pageCount||N.pageDrawingNames.some(w=>w!==null&&typeof w!="string"))||N.sourceId!==void 0&&!N.sourceId.trim()||N.sourceName!==void 0&&!N.sourceName.trim()))throw new Error("Every runner PDF needs readable bytes and a verified SHA-256 source hash.");const p=a.map((N,w)=>N.sourceId??`SOURCE_${String(w+1).padStart(2,"0")}`);if(new Set(p).size!==p.length)throw new Error("Each selected PDF must have a unique source ID before the runner can be prepared.");if(a.some(N=>(N.edeRecords??[]).some(w=>!/^[0-9A-F]{32}$/i.test(w.stableId)||typeof w.itemTag!="string"||!w.type.trim()||Object.entries(w.fields??{}).some(([k,C])=>!Ei.includes(k)||typeof C!="string")||!Number.isInteger(w.pageNumber)||w.pageNumber<1||w.pageNumber>N.pageCount)))throw new Error("An EDE link in the AutoCAD runner is invalid. Reopen the EDE record and prepare a fresh runner.");if(a.some(N=>(N.conflictingTags??[]).some(w=>typeof w!="string")))throw new Error("The runner duplicate-tag registry is invalid.");const g=new Set(a.map(N=>N.titleBlockGroupId?.trim()??""));if(g.size>1)throw new Error("Prepare one AutoCAD runner per group so each batch uses only its own title block.");const f=[...g][0]??"";if(f){if(!l||l.groupId!==f)throw new Error("Upload a standalone DWG title block for the selected group before preparing its AutoCAD runner.");const N=new Set(a.map(k=>k.discipline));if(N.size!==1)throw new Error("Prepare separate PFD and P&ID runners so each workspace keeps its own shared title block.");if(l.workspaceType!==[...N][0])throw new Error(`The selected title block belongs to ${l.workspaceType}; choose the matching workspace title block.`);if(!(l.content instanceof Uint8Array)||!l.content.length)throw new Error("The selected group title block is not a valid AutoCAD DWG file.");const w=new TextDecoder().decode(l.content.subarray(0,6));if(!/^AC10\d{2}$/.test(w))throw new Error("The selected group title block is not a valid AutoCAD DWG file.");if(l.titleBlockPath!=="PROJECT_TITLE_BLOCK.dwg"||l.xrefName!=="P2DWG_PROJECT_TITLE_BLOCK"||!l.titleBlockId.trim()||!Number.isInteger(l.version)||l.version<1||!Number.isFinite(l.expectedSize.widthMm)||!Number.isFinite(l.expectedSize.heightMm)||l.expectedSize.widthMm<=0||l.expectedSize.heightMm<=0)throw new Error("The project title-block record is incomplete. Save the title block again in the selected workspace.");if(l.expectedSize.widthMm!==En.width||l.expectedSize.heightMm!==En.height)throw new Error("The project title block must use the fixed 841 x 594 mm sheet size.")}else if(l)throw new Error("A project title block can only be used with PDFs from the same selected group.");const m=a.map(N=>r.filter(w=>(w.discipline===N.discipline||w.discipline==="Shared")&&(w.projectId?w.projectId===N.projectId:!0))),u=[...new Map(m.flat().map(N=>[`${N.blockAssetId}|${N.blockName}|${N.fallbackCategory}`,N])).values()];for(const N of u)if(N.fallbackCategory.trim().toLowerCase()==="valve"){if(!N.wipeoutBoundary)throw new Error(`Valve "${N.blockName}" has no reviewed body mask outline. Re-review the valve in the Legends Library before preparing the AutoCAD runner.`);try{Gr(N.wipeoutBoundary.map(([w,k])=>`${w},${k}`).join(";"))}catch(w){throw new Error(`Valve "${N.blockName}" has an invalid reviewed body mask outline. ${w instanceof Error?w.message:"Re-review the valve mask."}`)}}const y=new Set(s.map(N=>N.id));if(u.some(N=>!y.has(N.blockAssetId)))throw new Error("An approved symbol refers to a missing locally extracted block drawing.");if(u.some(N=>!N.targetLayer.trim()||N.targetLayer.trim().toUpperCase()==="0"))throw new Error("Every approved block needs an approved non-zero target CAD layer before the AutoCAD runner can be prepared.");const b=new Map,v=new Map,x=new Map,R=new Map,D=[...new Set(u.map(N=>N.blockAssetId))];D.forEach((N,w)=>{const k=s.find(L=>L.id===N),C=`CAD_SYMBOLS/SYMBOL_${String(w+1).padStart(3,"0")}`;if(k.format==="DXF"){const L=Fs(k.content).content,B=new Kb(L).nativeAssetInfo();v.set(N,`${C}.dxf`),b.set(N,`${C}.dxf`),x.set(N,B.requiredShapeFonts),R.set(N,L)}else b.set(N,`${C}.dwg`),v.set(N,`${C}.dwg`),x.set(N,[])});const A=uv(a),S={schemaVersion:1,runnerBuildVersion:Ys,pdfs:a.map((N,w)=>({sourceId:N.sourceId??`SOURCE_${String(w+1).padStart(2,"0")}`,sourceFile:`SOURCE_${String(w+1).padStart(2,"0")}.pdf`,originalName:N.originalName??N.sourceName??`PDF ${w+1}`,originalAlias:N.sourceName??`PDF ${w+1}`,sha256:N.sourceHash.toLowerCase(),pageCount:N.pageCount,pageOutputs:A[w].map((k,C)=>({page:C+1,outputDwg:k,drawingName:N.pageDrawingNames?.[C]??null,namingStatus:N.pageDrawingNames?.[C]?"DETECTED_LABEL":"FALLBACK_REVIEW"}))}))},P=[{path:"RUN_BATCH.lsp",content:new Uint8Array},{path:"batch_manifest.json",content:new TextEncoder().encode(JSON.stringify(S,null,2))},{path:"VERIFY_BATCH.ps1",content:new TextEncoder().encode(nA())},...l?[{path:"PROJECT_TITLE_BLOCK.dwg",content:l.content},{path:"PROJECT_TITLE_BLOCK_SCOPE.txt",content:new TextEncoder().encode(Q2(l))}]:[],...s.filter(N=>D.includes(N.id)).map(N=>({path:v.get(N.id),content:R.get(N.id)??N.content})),...u.length?[{path:"CAD_BLOCK_GEOMETRY_INDEX.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,note:"Descriptors are local geometry data, not validated match signatures. Missing or empty descriptors require re-importing the extraction ZIP with its overview DXF or reviewing unsupported geometry.",blocks:u.map(N=>{const w=s.find(B=>B.id===N.blockAssetId),k=w?.geometryDescriptor??null,L=!!(k?.primitives.length&&k.bounds)?"INDEXED":w?.geometryIndexError??(k?"EMPTY_OR_UNSUPPORTED":"OVERVIEW_DXF_REQUIRED");return{blockAssetId:N.blockAssetId,blockName:N.blockName,category:N.fallbackCategory,discipline:N.discipline,targetLayer:N.targetLayer,targetLayerRules:o.find(B=>B.category==="layer"&&B.name.trim().toLowerCase()===N.targetLayer.trim().toLowerCase())?.detail??null,projectScope:N.projectId?"project":"company",indexStatus:L,indexError:w?.geometryIndexError??null,geometry:k}})},null,2))}]:[],...a.flatMap((N,w)=>{const k=String(w+1).padStart(2,"0"),C=r.filter(X=>(X.discipline===N.discipline||X.discipline==="Shared")&&(X.projectId?X.projectId===N.projectId:!0)&&X.blockAssetId&&b.has(X.blockAssetId)).map(X=>{const ae=b.get(X.blockAssetId),we=ae.split("/").at(-1)?.replace(/\.(?:dwg|dxf)$/i,"")??"APPROVED_SYMBOL",ue=s.find(ce=>ce.id===X.blockAssetId)?.geometryDescriptor;return{...X,blockName:we,sourcePath:ae,requiredShapeFonts:x.get(X.blockAssetId)??[],autoPlacementSignature:ue?JT(ue):null}}),L=o.filter(X=>(X.discipline===N.discipline||X.discipline==="Shared")&&(X.projectId?X.projectId===N.projectId:!0)),B=[...new Map(L.map(X=>[`${X.category}:${X.name.toLowerCase()}`,X])).values()],ee=C.find(X=>!B.some(ae=>ae.category==="layer"&&ae.name.toLowerCase()===X.targetLayer.toLowerCase()));if(ee)throw new Error(`Approved CAD layer "${ee.targetLayer}" is not included in this runner page's approved standards.`);return[{path:`DOC_${k}.lsp`,content:new TextEncoder().encode(tA(w+1,N.pageCount,C,B,N.edeRecords??[],Lp(N.attributeRules??[]),N.conflictingTags??[]))},{path:`SOURCE_${k}.pdf`,content:N.pdfBytes}]})],_=rA(a,P);return P[0].content=new TextEncoder().encode(aA(a,l,_)),P.push({path:"README_LOCAL_AUTOCAD.txt",content:new TextEncoder().encode(sA(a,!!l))}),qb(P)}function Iy(a,r){const s=a.match(new RegExp(`(?:^|;)${r}=\\(([^)]*)\\)`,"i"));if(!s)return null;const o=s[1].trim();return!o||/^nil$/i.test(o)?[]:o.split(/[\s,]+/)}function iA(a,r){const s=a.match(new RegExp(`(?:^|;)${r}=(.*?)(?=;[A-Za-z][A-Za-z0-9_]*=|$)`,"i"));if(!s)return null;const o=[],l=/\(\s*(\d+)\s*\.\s*(?:"((?:\\.|[^"])*)"|([^\s)]+))\s*\)/g;let p;for(;(p=l.exec(s[1]))!==null;){const g=p[2]===void 0?p[3]:p[2].replaceAll('\\"','"').replaceAll("\\\\","\\");o.push({code:Number(p[1]),value:g})}return o}function lA(a){let r=0;for(const o of a.toUpperCase())r=r*31+o.charCodeAt(0)>>>0;return`P2DWG_${a.toUpperCase().replace(/[^A-Z0-9_-]/g,"_").slice(0,16)||"SHAPE"}_${r.toString(36).toUpperCase()}`}function pv(a,r){const s=Iy(r,"pattern"),o=Iy(r,"patternFlags")??[];if(!s?.length||o.length>0&&o.length!==s.length)return null;const l=s.map(Number),p=o.map(Number);if(l.some(A=>!Number.isFinite(A))||l.every(A=>A===0)||l.reduce((A,S)=>A+Math.abs(S),0)<=0||p.some(A=>!Number.isInteger(A)))return null;const g=iA(r,"complexData"),f=new Map,m=/\(\s*"((?:\\.|[^"])*)"\s*\.\s*"((?:\\.|[^"])*)"\s*\)/g,u=r.match(/(?:^|;)shapeFonts=(.*)$/i);let y;if(u)for(;(y=m.exec(u[1]))!==null;)f.set(y[1].replaceAll('\\"','"').toUpperCase(),y[2].replaceAll('\\"','"'));const b=[];let v=0;for(let A=0;A<l.length;A+=1){const S=p[A]??0;let P=g?.findIndex((ue,ce)=>ce>=v&&ue.code===49)??-1;if(P<0||!g){if(S!==0)return null;b.push({length:l[A],flags:0});continue}const _=g[P];if(Math.abs(Number(_.value)-l[A])>1e-8)return null;const N=g[P+1];if(!N||N.code!==74)return null;const w=Number(N.value);if(!Number.isInteger(w)||w!==S)return null;if(v=P+2,w===0){b.push({length:l[A],flags:0});continue}if(w!==4)return null;const k=ue=>{for(;v<g.length&&g[v].code!==ue&&g[v].code!==49;)v+=1;if(v>=g.length||g[v].code!==ue)return null;const ce=g[v].value;return v+=1,ce},C=Number(k(75)),L=k(340),B=Number(k(46)),ee=Number(k(50)),X=Number(k(44)),ae=Number(k(45)),we=L?f.get(L.toUpperCase()):void 0;if(!Number.isInteger(C)||C<=0||!L||!we||!/^[a-z0-9_.-]+\.shx$/i.test(we)||![B,ee,X,ae].every(Number.isFinite)||B<=0)return null;b.push({length:l[A],flags:4,shapeNumber:C,styleName:lA(a),shapeFile:we,scale:B,rotation:ee,offsetX:X,offsetY:ae})}const x=l.reduce((A,S)=>A+Math.abs(S),0),R=r.match(/(?:^|;)patternLength=([^;]+)/i)?.[1],D=R===void 0?x:Number(R);return!Number.isFinite(D)||D<=0||Math.abs(D-x)>Math.max(1e-7,x*1e-7)?null:{patternLength:D,segments:b}}function cA(a){const r=new Set(["CONTINUOUS","BYLAYER","BYBLOCK"]),s=new Map(a.filter(o=>o.category==="linetype").map(o=>[o.name.trim().toUpperCase(),o]));for(const o of a.filter(l=>l.category==="layer")){const l=o.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!l||r.has(l.toUpperCase()))continue;const p=s.get(l.toUpperCase());if(!p||!pv(p.name,p.detail))throw new Error(`Layer "${o.name}" requires linetype "${l}", but its complete supported definition is not approved. Review/re-extract that linetype first; the runner will not silently substitute Continuous.`)}}function gt(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function qu(a){if(!Number.isFinite(a))throw new Error("An approved block has a non-finite geometry signature. Re-index it before preparing the runner.");return Number(a.toFixed(8)).toString()}function dA(a,r){return a===null||a.has(r)}function uA(a,r){return r===null?[...a]:a.filter(s=>r.has(s))}function pA(a,r,s){const o=new Set(a??r);return o.has(s)?o.delete(s):o.add(s),o}function fA(a,r,s){if(a===null)return null;const o=new Set(s),l=new Set([...a].filter(p=>o.has(p)));for(const p of s)r.has(p)||l.add(p);return l}function hA(a,r,s=""){const o=a.filter(u=>u.reviewStatus==="reviewed"&&u.sourceKind==="extracted-dwg"&&(u.scope!=="project"||!!(s&&u.projectId===s))),l=(u,y)=>u.fields.find(b=>b.label===y)?.value?.trim()??"",p=o.filter(u=>[r,"Shared"].includes(l(u,"Source discipline"))),g=p.filter(u=>u.category==="layer"&&l(u,"CAD name")&&l(u,"CAD name").toUpperCase()!=="0"),f=new Set(g.map(u=>l(u,"CAD name").toLowerCase()));return{symbols:p.filter(u=>u.category==="symbol"&&["Source drawing ID","Block asset ID","Block name","Fallback category"].every(y=>l(u,y))&&f.has(l(u,"Target CAD layer").toLowerCase())).length,layers:g.length,textStyles:p.filter(u=>u.category==="textStyle").length,otherDisciplineSymbols:o.filter(u=>u.category==="symbol"&&["PFD","P&ID"].includes(l(u,"Source discipline"))&&l(u,"Source discipline")!==r).length}}const yp=1024*1024,gA=500*yp;function Go(a){return a<1024?`${a} B`:a<yp?`${(a/1024).toFixed(1)} KB`:`${(a/yp).toFixed(1)} MB`}function mA(a){const r=a.type.split(";",1)[0].trim().toLowerCase(),s=a.name.trim().toLowerCase().endsWith(".pdf");return r==="application/pdf"||s}async function yA(a){const[r,s]=await Promise.all([sn(()=>import("./pdf-TYrZqVzP.js"),[]),sn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);r.GlobalWorkerOptions.workerSrc=s.default;const o=r.getDocument({data:new Uint8Array(a.slice(0))});try{return(await o.promise).numPages}finally{await o.destroy().catch(()=>{})}}async function bA(a){const[r,s]=await Promise.all([sn(()=>import("./pdf-TYrZqVzP.js"),[]),sn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);r.GlobalWorkerOptions.workerSrc=s.default;const l=await r.getDocument({data:new Uint8Array(a.slice(0))}).promise;try{const p=[],g=[];for(let f=1;f<=l.numPages;f+=1){const m=await l.getPage(f),u=m.getViewport({scale:1});p.push({width:u.width,height:u.height});const y=await m.getTextContent(),b=[];for(const v of y.items)"str"in v&&b.push({text:v.str,x:v.transform[4],y:v.transform[5],width:v.width,height:v.height||Math.hypot(v.transform[2],v.transform[3])});g.push(j2(b)),m.cleanup()}return{pageSizes:p,pageDrawingNames:g}}finally{await l.destroy().catch(()=>{})}}function vA({discipline:a,groups:r,selectedClientId:s,selectedClientLabel:o,onSelectClient:l}){const[p,g]=q.useState([]),[f,m]=q.useState(null),[u,y]=q.useState(!0),[b,v]=q.useState(""),[x,R]=q.useState(0),[D,A]=q.useState([]),[S,P]=q.useState(null),[_,N]=q.useState(null),[w,k]=q.useState(null),[C,L]=q.useState(null),[B,ee]=q.useState(0),[X,ae]=q.useState(1),[we,ue]=q.useState(null),[ce,Y]=q.useState(""),[Q,me]=q.useState(""),[xe,j]=q.useState([]),[te,U]=q.useState(0),[V,oe]=q.useState(""),[de,ve]=q.useState(null),[qe,Le]=q.useState(null),[mt,nt]=q.useState(!1),[ot,dt]=q.useState(!1),[Mt,yt]=q.useState(""),[F,pe]=q.useState(!1),[ge,z]=q.useState(""),[fe,Ce]=q.useState(!1),[ye,Ie]=q.useState(""),[Qe,Ve]=q.useState("1"),Me=q.useRef([]),_t=q.useRef(null),be=q.useRef(!0),et=q.useRef(!1),rt=q.useRef(0),Qt=q.useRef(new Set),ke=q.useRef(a);ke.current=a;const ka=typeof globalThis.crypto?.subtle<"u",At=q.useMemo(()=>Eb(r),[r]),Et=q.useMemo(()=>{const M=new Set(uA(p.map(re=>re.id),f));return p.filter(re=>M.has(re.id))},[f,p]),Jt=()=>m(null),$t=()=>m(new Set),_a=M=>{m(re=>pA(re,p.map(Ee=>Ee.id),M))};q.useEffect(()=>{if(me(s),!s){Y("");return}try{const M=yn();Y(M.projects[s]?s:"")}catch{Y("")}},[s]);const ut=q.useCallback((M,re)=>{if(!be.current)return;rt.current+=1;const Ee=rt.current;A(Se=>[...Se.slice(-5),{id:Ee,kind:M,text:re}])},[]);q.useEffect(()=>{const M=()=>{try{const re=yn(),Ee=s&&re.projects[s]?[s]:[];j(Ee.map((Se,Ne)=>({id:Se,label:At.find(Oe=>Oe.id===Se)?.label??`Project ${String(Ne+1).padStart(2,"0")}`}))),ve(hA([...re.companyItems,...ce?re.projects[ce]?.items??[]:[]],a,ce)),oe(new Date().toLocaleTimeString())}catch(re){ve(null),ut("error",re instanceof Error?re.message:"The approved CAD library could not be loaded.")}};return M(),window.addEventListener("focus",M),window.addEventListener("storage",M),window.addEventListener(li,M),()=>{window.removeEventListener("focus",M),window.removeEventListener("storage",M),window.removeEventListener(li,M)}},[ut,At,a,ce,te,s]),q.useEffect(()=>{let M=!0;return Le(null),yt(""),Q?(nt(!0),ly(Q,a).then(re=>{M&&Le(re)}).catch(re=>{M&&yt(re instanceof Error?re.message:"The local project title block could not be read.")}).finally(()=>{M&&nt(!1)}),()=>{M=!1}):(nt(!1),()=>{M=!1})},[a,Q]),q.useEffect(()=>{Q&&!At.some(M=>M.id===Q)&&(me(""),Le(null),yt(""))},[At,Q]);const It=q.useCallback(async()=>{try{const[M,re]=await Promise.all([tv(a),i2()]);if(!be.current||ke.current!==a)return;const Ee=M.map(Ne=>Ne.id),Se=Qt.current;m(Ne=>fA(Ne,Se,Ee)),Qt.current=new Set(Ee),g(M),R(re),v("")}catch(M){be.current&&v(M instanceof Error?M.message:"Saved PDFs could not be loaded.")}finally{be.current&&y(!1)}},[a]),Ut=async(M,re,Ee,Se)=>{await Ll(M.id,{analysisStatus:"extracting",analysisPagesDone:0,analysisRecordCount:0,analysisMessage:"",autocadStatus:"not-connected"}),be.current&&await It();let Ne;try{Ne=await S2(re,Se,Ee)}catch(Ct){throw Ee()?Ct:new Zt("cancelled","EDE extraction paused.")}if(!Ee())throw new Zt("cancelled","EDE extraction paused.");await c2(M.id,Ne.pageText);const Oe=x2(Ne.pageText),Je=_2(a==="PFD"?"pfd":"pid",{id:M.id,alias:M.alias},[...Ne.candidates,...Oe]);be.current&&ee(Ct=>Ct+1);const Xe=Ne.pageText.some(Ct=>Ct.searchableText.trim()||Ct.ocrTiles.some(Ft=>Ft.trim())),ha=Je.recordCount||Xe?"needs-review":"no-tags";return await Ll(M.id,{analysisStatus:ha,analysisPagesDone:Ne.pages,analysisRecordCount:Je.recordCount,analysisMessage:Ne.ocrPages?`Page text and OCR from ${Ne.ocrPages} page(s) are saved locally. ${Ne.candidates.length} tag candidate(s) and ${Oe.length} note(s) need review.`:`Page text is saved locally. ${Ne.candidates.length} tag candidate(s) and ${Oe.length} note(s) need review.`,autocadStatus:"not-connected"}),{...Je,tagCount:Ne.candidates.length,noteCount:Oe.length}};q.useEffect(()=>{be.current=!0,y(!0),k(null),ae(1),It();const M=()=>{It()};return window.addEventListener("focus",M),()=>{window.removeEventListener("focus",M),be.current=!1,Me.current.forEach(re=>{re.cancelled=!0}),Me.current=[]}},[It]),q.useEffect(()=>{if(et.current)return;const M=new URLSearchParams(window.location.search).get("pdf"),re=p.find(Ne=>Ne.id===M);if(!re)return;const Ee=new URLSearchParams(window.location.search).get("record");Ee&&L(Ee),et.current=!0,k(re.id);const Se=Number(new URLSearchParams(window.location.search).get("page"));ae(Number.isInteger(Se)&&Se>=1&&Se<=re.pageCount?Se:1),window.setTimeout(()=>document.querySelector('[data-testid="panel-source-page"]')?.scrollIntoView({behavior:"smooth",block:"center"}),100)},[p]);const wt=async(M,re,Ee)=>{const Se=a,Ne=()=>!M.cancelled&&be.current&&ke.current===Se;M.state="working";try{if(M.file.size>fp)throw new Zt("too-large","A PDF is larger than 100 MB and was skipped.");const Oe=await M.file.arrayBuffer();if(!Ne())return;let Je;try{Je=await yA(Oe)}catch(Ct){const Ft=Ct?.name;throw Ft==="PasswordException"?new Error("A PDF is password-protected. Remove the password and add it again."):Ft==="InvalidPDFException"||Ft==="FormatError"?new Error("A file is not a valid PDF, or it is damaged."):new Error("A PDF could not be read. It may be damaged.")}if(!Ne())return;if(Je<1)throw new Error("A PDF has no pages.");let Xe;try{Xe=await Dy(Oe)}catch{throw new Error("Duplicate check is not supported in this browser, so the PDF was not saved.")}if(!Ne())return;const ha=await l2({discipline:Se,bytes:Oe,pageCount:Je,hash:Xe,originalName:M.file.name},Ne);re.pagesDone+=Je,be.current&&(P({total:Ee,done:re.done,pagesDone:re.pagesDone,active:1,phase:"extracting",currentAlias:ha.alias,pageNow:0,pageTotal:Je}),await It());try{const Ct=await Ut(ha,Oe,Ne,(Ft,ba)=>{be.current&&P(An=>An&&{...An,phase:"extracting",currentAlias:ha.alias,pageNow:Ft,pageTotal:ba})});Ne()&&ut("info",`${ha.alias}: ${Ct.tagCount} tag candidate(s) and ${Ct.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(Ct){const Ft=Ct instanceof Zt&&Ct.code==="cancelled",ba=Ft?"Extraction paused. Resume it from this saved PDF.":Cy(Ct);await Ll(ha.id,{analysisStatus:Ft?"paused":"failed",analysisMessage:ba}).catch(()=>{}),!Ft&&Ne()&&ut("error",`${ha.alias}: ${ba}`)}M.state="done",be.current&&await It()}catch(Oe){M.state="failed",!(Oe instanceof Zt&&Oe.code==="cancelled")&&Ne()&&ut("error",Oe instanceof Error?Oe.message:"A PDF could not be added.")}finally{re.done+=1,be.current&&P(Oe=>Oe&&{...Oe,total:Ee,done:re.done,pagesDone:re.pagesDone,active:0})}},La=M=>{if(S||u||b||!M.length)return;const re=M.filter(mA);if(re.length<M.length&&ut("error",`${M.length-re.length} file(s) skipped. Choose PDF files only.`),!re.length)return;const Ee=re.map(Je=>({id:++rt.current,file:Je,cancelled:!1,state:"queued"}));Me.current=[...Me.current,...Ee];const Se={done:0,pagesDone:0};P({total:Ee.length,done:0,pagesDone:0,active:0,phase:"checking"});let Ne=0;(async()=>{for(;Ne<Ee.length&&be.current;){const Je=Ee[Ne++];if(Je.cancelled){Se.done+=1;continue}await wt(Je,Se,Ee.length)}})().then(()=>{if(Me.current=Me.current.filter(Xe=>!Ee.includes(Xe)),!be.current)return;const Je=Ee.filter(Xe=>Xe.state==="done").length;Je&&ut("info",`${Je} PDF(s) saved on this device. Check each PDF's EDE status below; AutoCAD is not connected.`),P(null)})},ra=async M=>{if(!(S||_)){N(M.id),P({total:1,done:0,pagesDone:0,active:1,phase:"extracting",currentAlias:M.alias,pageNow:0,pageTotal:M.pageCount});try{const re=await Ho(M.id),Ee=await Ut(M,re,()=>be.current,(Se,Ne)=>{be.current&&P(Oe=>Oe&&{...Oe,phase:"extracting",pageNow:Se,pageTotal:Ne})});ut("info",`${M.alias}: ${Ee.tagCount} tag candidate(s) and ${Ee.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(re){const Ee=Cy(re);await Ll(M.id,{analysisStatus:"failed",analysisMessage:Ee}).catch(()=>{}),ut("error",`${M.alias}: ${Ee}`)}finally{P(null),N(null),await It()}}},cn=()=>{Me.current.forEach(M=>{M.state!=="done"&&(M.cancelled=!0)}),ut("info","Remaining imports were cancelled. Finished files stay saved.")},en=async M=>{ue(null);try{await av([M]),w===M&&k(null),await It()}catch{ut("error","The PDF could not be deleted from local storage.")}},Gn=async()=>{ue(null),Me.current.forEach(M=>{M.cancelled=!0});try{await d2(a),k(null),await It()}catch{ut("error","Saved PDFs could not be cleared.")}},Ia=async M=>{try{const re=await Ho(M.id),Ee=URL.createObjectURL(new Blob([re],{type:"application/pdf"})),Se=document.createElement("a");Se.href=Ee,Se.download=`original-source-${a==="PFD"?"pfd":"pid"}-pdf-${M.aliasNumber}.pdf`,document.body.appendChild(Se),Se.click(),Se.remove(),setTimeout(()=>URL.revokeObjectURL(Ee),4e3)}catch{ut("error","The original PDF could not be read for download.")}},Tn=async M=>{if(!(!M||!Q)){if(M.size>Mb){yt("The project title block is larger than the 100 MB local upload limit."),_t.current&&(_t.current.value="");return}if(qe&&!window.confirm("Replace the saved title block for this project in this browser? The previous local file will be replaced.")){_t.current&&(_t.current.value="");return}dt(!0),yt("");try{await jS(Q,a,M.name,new Uint8Array(await M.arrayBuffer())),Le(await ly(Q,a)),yt("Title block saved for this group in this browser.")}catch(re){yt(re instanceof Error?re.message:"The project title block could not be saved locally.")}finally{dt(!1),_t.current&&(_t.current.value="")}}},pa=async()=>{if(!(!Q||!qe)&&window.confirm("Remove this client folder title block from this browser? Existing generated DWGs are not changed.")){yt("");try{await OS(Q,a),Le(null),yt("Group title block removed from this browser.")}catch(M){yt(M instanceof Error?M.message:"The project title block could not be removed.")}}},fa=async()=>{if(!Et.length){z("Select at least one PDF to include in the AutoCAD runner.");return}if(!(S!==null||F||ot||u||b)){pe(!0),z("");try{const M=Et.reduce((Te,Pe)=>Te+Pe.size,0),re=Q?await PS(Q,a):null;if(Q&&!re)throw new Error("Upload a standalone DWG title block for the selected client folder before preparing its AutoCAD runner.");if(M+(re?.bytes??0)>gA)throw new Error("The saved source PDFs and client title block exceed the 500 MB limit for this local AutoCAD runner package.");const Ee=yn();if(ce&&!Ee.projects[ce])throw new Error("That project library is no longer available. Select a current project mapping or use Legends Library only.");const Oe=[...Ee.companyItems,...ce?Ee.projects[ce]?.items??[]:[]].filter(Te=>Te.category==="symbol"&&Te.reviewStatus==="reviewed"&&Te.sourceKind==="extracted-dwg"&&[a,"Shared"].includes(Te.fields.find(Pe=>Pe.label==="Source discipline")?.value?.trim()??"")).flatMap(Te=>{const Pe=Ya=>Te.fields.find(Cn=>Cn.label===Ya)?.value?.trim()??"",bt=Pe("Source drawing ID"),Pt=Pe("Block asset ID"),Nt=Pe("Block name"),xt=Pe("Fallback category"),Wn=Pe("Target CAD layer"),Sa=Pe("Source discipline");if(!bt||!Pt||!Nt||!xt||Sa!=="PFD"&&Sa!=="P&ID"&&Sa!=="Shared")return[];if(!Wn||Wn.toUpperCase()==="0")throw new Error(`Approved block "${Nt}" has no valid target CAD layer. Re-review it and select an approved non-zero layer.`);let Ta;if(xt.toLowerCase()==="valve"){const Ya=Pe("Wipeout mask boundary");try{Ta=Gr(Ya)}catch(Cn){throw new Error(`Approved valve "${Nt}" has no valid reviewed body mask. Re-review the valve outline before preparing the AutoCAD runner. ${Cn instanceof Error?Cn.message:""}`)}}return[{sourceId:bt,blockAssetId:Pt,blockName:Nt,fallbackCategory:xt,targetLayer:Wn,discipline:Sa,...Ta?{wipeoutBoundary:Ta}:{},...Te.scope==="project"&&Te.projectId?{projectId:Te.projectId}:{}}]}),Je=mS(Ee,ce||void 0,a).map(Te=>{const Pe=Nt=>Te.fields.find(xt=>xt.label===Nt)?.value?.trim()??"",bt=Pe("Source discipline"),Pt=Pe("CAD name");if(!Pt||bt!=="PFD"&&bt!=="P&ID"&&bt!=="Shared")throw new Error(`Reviewed Legends standard "${Te.name}" is missing its CAD name or discipline.`);return{name:Pt,category:Te.category,detail:Pe("Extracted details"),discipline:bt,...Te.scope==="project"&&Te.projectId?{projectId:Te.projectId}:{}}}),Xe=[...new Set(Oe.map(Te=>Te.blockAssetId))],ha=await Promise.all(Xe.map(async Te=>{const[Pe,bt]=await Promise.all([Ub(Te),$b(Te)]);return{id:Te,content:Pe,format:bt.format??"DWG",...bt.geometryDescriptor?{geometryDescriptor:bt.geometryDescriptor}:{}}})),Ct=new Map(ha.map(Te=>[Te.id,Te])),Ft=new Map((await rp()).map(Te=>[Te.id,Te])),ba=new Map;for(const Te of Oe){const Pe=Ct.get(Te.blockAssetId)?.geometryDescriptor;if(Pe?.primitives.length&&Pe.bounds)continue;const bt=ba.get(Te.sourceId)??[];bt.push(Te),ba.set(Te.sourceId,bt)}const An=[];for(const[Te,Pe]of ba){const bt=Ft.get(Te),Pt=Pe.map(Nt=>Ct.get(Nt.blockAssetId)).filter(Nt=>!!Nt);if(!bt||bt.format!=="DXF"){for(const Nt of Pt)Nt.geometryIndexError=bt?"SOURCE_DWG_REQUIRES_OVERVIEW_DXF":"SOURCE_NOT_AVAILABLE";continue}try{const Nt=await ni(Te);if(Nt.byteLength>50*1024*1024){for(const Sa of Pt)Sa.geometryIndexError="SOURCE_DXF_TOO_LARGE";continue}const xt=new TextDecoder("windows-1252").decode(Nt),Wn=Yl(xt,[...new Set(Pe.map(Sa=>Sa.blockName))]);for(const Sa of Pe){const Ta=Ct.get(Sa.blockAssetId);if(!Ta)continue;const Ya=Wn.get(Sa.blockName)?.geometryDescriptor;if(!Ya||!Ya.primitives.length||!Ya.bounds){Ta.geometryIndexError="BLOCK_NOT_FOUND_OR_UNSUPPORTED";continue}Ta.geometryDescriptor=Ya,An.push({id:Ta.id,sourceId:Te,blockName:Sa.blockName,content:Ta.content,geometryDescriptor:Ya})}}catch{for(const Nt of Pt)Nt.geometryIndexError="SOURCE_DXF_UNREADABLE"}}An.length&&await sp(An);const Qr=new Map,Hs=pi(a==="PFD"?"pfd":"pid"),ic=cS(Hs.flatMap(Te=>Te.rows.map(Pe=>({stableId:Pe.id,itemTag:Pe.itemTag})))),Jr=Ib(`${a}:${ce||"legends-default"}`);for(const Te of Hs)for(const Pe of Te.rows){if(!Pe.sourcePdfId)continue;const bt=new Set([Number(Pe.sourcePage),...(Pe.sourceLocations??[]).map(Pt=>Pt.pageNumber)].filter(Pt=>Number.isInteger(Pt)&&Pt>0));for(const Pt of bt){const Nt=Qr.get(Pe.sourcePdfId)??[];Nt.some(xt=>xt.stableId===Pe.id&&xt.pageNumber===Pt)||(Nt.push({stableId:Pe.id,itemTag:Pe.itemTag,type:Pe.type,pageNumber:Pt,fields:Object.fromEntries(Ei.map(xt=>[xt,Pe[xt]]))}),Qr.set(Pe.sourcePdfId,Nt))}}const es=await oA(await Promise.all(Et.map(async Te=>{const Pe=await Ho(Te.id),bt=await Dy(Pe);if(bt.toLowerCase()!==Te.hash.toLowerCase())throw new Error(`${Te.alias} changed in local storage. Re-upload it before creating the AutoCAD runner.`);const Pt=await bA(Pe);return{pageCount:Te.pageCount,pageSizesPoints:Pt.pageSizes,pageDrawingNames:Pt.pageDrawingNames,pdfBytes:new Uint8Array(Pe),sourceHash:bt,sourceId:Te.id,sourceName:Te.alias,originalName:Te.originalName??Te.alias,discipline:a,edeRecords:Qr.get(Te.id)??[],attributeRules:Jr,conflictingTags:ic,...ce?{projectId:ce}:{},...Q?{titleBlockGroupId:Q}:{}}})),Oe,ha,Je,re?{groupId:re.projectId,workspaceType:re.workspaceType,titleBlockId:re.titleBlockId,titleBlockPath:re.titleBlockPath,xrefName:re.xrefName,expectedSize:re.expectedSize,version:re.version,content:re.content}:void 0),za=URL.createObjectURL(es),Dn=document.createElement("a");Dn.href=za,Dn.download=O2,document.body.append(Dn),Dn.click(),Dn.remove(),window.setTimeout(()=>URL.revokeObjectURL(za),1e3);const xi=Et.reduce((Te,Pe)=>Te+Pe.pageCount,0);z(`Runner ${Ys} and ${Et.length} selected source PDF(s) downloaded. It can create ${xi} separate DWG file(s). DWG filenames use detected Drawing No/Title labels. Missing or ambiguous labels use unique fallback names; check pageOutputs in batch_manifest.json. Duplicate names receive a page suffix. ${Oe.filter(Te=>(Te.discipline===a||Te.discipline==="Shared")&&(!Te.projectId||Te.projectId===ce)).length} reviewed symbol mapping(s) and ${Je.length} resolved Legends layer/text-style/linetype standard(s) are available to this ${a} run. Fixed sheet size and approved Legends text/style checks run automatically; no calibration input is requested.`+(re?" The selected client title block is included for 1:1 XREF attachment; keep its output companion DWG beside the generated pages.":""))}catch(M){z(M instanceof Error?M.message:"The AutoCAD runner could not be prepared. Try a smaller PDF batch.")}finally{pe(!1)}}},Dt=async M=>{const re=Number(Qe);if(!Number.isFinite(re)||re<=0){Ie("Enter a scale multiplier greater than zero.");return}Ce(!0),Ie("Reading PDF vector geometry…");try{const{buildPdfDxfPackage:Ee}=await sn(async()=>{const{buildPdfDxfPackage:Xe}=await import("./pdf-dxf-export-BayllooC.js");return{buildPdfDxfPackage:Xe}},[]),Se=await Ee((M?[M]:p).map(Xe=>({aliasNumber:Xe.aliasNumber,bytes:()=>Ho(Xe.id)})),re,(Xe,ha,Ct)=>{be.current&&Ie(`Creating DXF: PDF ${Xe} · page ${ha} of ${Ct}…`)},()=>be.current&&ke.current===a);if(!be.current||ke.current!==a)return;const Ne=URL.createObjectURL(Se.blob),Oe=document.createElement("a");Oe.href=Ne,Oe.download="pdf-dxf-pages.zip",document.body.append(Oe),Oe.click(),Oe.remove(),window.setTimeout(()=>URL.revokeObjectURL(Ne),1e3);const Je=Se.reports.length-Se.exported;Ie(`${Se.exported} DXF page(s) created${Je?`; ${Je} page(s) skipped—read the report`:""}. Raw vector output—not a verified exact PDF match. Compare each page with its source; library replacement and engineering scale are not verified.`)}catch(Ee){be.current&&Ie(Ee instanceof Error?Ee.message:"DXF export failed; no CAD output was confirmed.")}finally{be.current&&Ce(!1)}},Ke=q.useMemo(()=>p.find(M=>M.id===w)??null,[p,w]),I=q.useMemo(()=>{if(!w||!C)return[];try{const Ee=pi(a==="PFD"?"pfd":"pid").find(Se=>Se.sourcePdfId===w)?.rows.find(Se=>Se.id===C);return(Ee?.sourceLocations??[]).filter(Se=>Se.pageNumber===X).map(Se=>({id:Ee.id,label:Ee.itemTag,location:Se}))}catch{return[]}},[a,X,w,B,C]),J=p.reduce((M,re)=>M+re.pageCount,0),he=S!==null,Ue=Math.min(100,x/hp*100);return c.jsxs("section",{className:"pdf-workflow","aria-labelledby":"pdf-workflow-title","data-testid":"panel-pdf-workflow",children:[c.jsxs("div",{className:"pdf-panel-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"pdf-kicker",children:["PDF INPUT · LOCAL SOURCE FILES · ",a]}),c.jsx("h2",{id:"pdf-workflow-title",children:"Source PDF files"}),c.jsxs("p",{children:["Add PDFs for this ",a," workspace. They stay in this browser and appear as PDF 1, PDF 2, and so on."]})]}),c.jsxs("div",{className:"pdf-actions",children:[c.jsxs("label",{className:"btn primary pdf-add-control","data-testid":"label-add-pdfs",children:[c.jsx(Am,{size:15})," Add PDFs",c.jsx("input",{type:"file",accept:"application/pdf,.pdf",multiple:!0,"aria-label":"Add PDF files",disabled:he||u||!!b||!ka,onChange:M=>{La(Array.from(M.currentTarget.files??[])),M.currentTarget.value=""},"data-testid":"input-add-pdfs"})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>ue({type:"all"}),disabled:!p.length,"aria-label":"Clear all saved PDFs","data-testid":"button-clear-pdfs",children:[c.jsx(oi,{size:14})," Clear all"]})]})]}),c.jsxs("div",{className:"pdf-trust-note","data-testid":"text-pdf-local-only",children:[c.jsx(Xn,{size:15}),c.jsxs("div",{className:"pdf-trust-copy",children:[c.jsxs("span",{children:[c.jsx("strong",{children:"Saved on this device only."})," PDFs are not uploaded, backed up, or synced. Clearing browser data removes them.",!ka&&" New PDFs cannot be added in this browser because duplicate checking needs a secure connection."]}),c.jsxs("details",{className:"pdf-privacy-details",children:[c.jsx("summary",{children:"Privacy and scanned PDFs"}),c.jsxs("p",{children:["Original PDFs are not changed. Searchable text and scanned pages are read in this browser. The OCR code and language files may be downloaded, but the PDF itself is not sent. PDF aliases hide file names only; names and logos printed inside the pages remain visible."," ","Download an original if you need a separate copy."]})]})]})]}),c.jsx(Z1,{}),c.jsxs("div",{className:"pdf-storage-line","data-testid":"text-pdf-storage",children:[c.jsxs("span",{children:[Go(x)," of ",Go(hp)," used (all disciplines)"]}),c.jsxs("span",{children:["Limit ",Go(fp)," per PDF"]})]}),c.jsx("div",{className:"pdf-meter",role:"progressbar","aria-label":"Local storage used","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Ue),children:c.jsx("span",{style:{width:`${Ue}%`}})}),c.jsx("div",{style:{height:12}}),S&&c.jsxs("div",{className:"pdf-progress",role:"status","aria-live":"polite","data-testid":"status-pdf-progress",children:[c.jsxs("div",{className:"pdf-progress-top",children:[c.jsxs("span",{children:[c.jsx(Ra,{size:12,className:"pdf-spin"})," ",S.phase==="checking"?`Checking and saving: ${S.done} of ${S.total} file(s) finished · ${S.pagesDone} page(s) verified`:`${S.currentAlias??"PDF"} · reading page ${S.pageNow??0} of ${S.pageTotal??0} for EDE`]}),c.jsx("button",{type:"button",className:"btn",onClick:cn,"data-testid":"button-cancel-import","aria-label":"Cancel remaining imports",children:"Cancel"})]}),c.jsx("div",{className:"pdf-meter",children:c.jsx("span",{style:{width:`${S.phase==="checking"?S.done/S.total*100:(S.done+(S.pageTotal?(S.pageNow??0)/S.pageTotal:0))/S.total*100}%`}})})]}),D.length>0&&c.jsx("ul",{className:"pdf-notes","aria-live":"polite","data-testid":"list-pdf-notes",children:D.map(M=>c.jsxs("li",{className:M.kind==="info"?"info":"",role:M.kind==="error"?"alert":void 0,"data-testid":`status-pdf-note-${M.id}`,children:[M.kind==="error"?c.jsx(Sr,{size:14}):c.jsx(Vn,{size:14}),c.jsx("span",{children:M.text}),c.jsx("button",{type:"button","aria-label":"Dismiss message",onClick:()=>A(re=>re.filter(Ee=>Ee.id!==M.id)),children:c.jsx(Fu,{size:13})})]},M.id))}),p.length>0&&c.jsxs("div",{className:"pdf-batch-controls","data-testid":"pdf-batch-controls",children:[c.jsxs("div",{className:"pdf-batch-controls-copy",children:[c.jsx("strong",{children:"Choose PDFs for AutoCAD"}),c.jsxs("span",{"aria-live":"polite","data-testid":"text-pdf-batch-selection-count",children:[Et.length," of ",p.length," selected"]}),c.jsx("small",{children:"Only checked PDFs go into the runner. Select one or several."})]}),c.jsxs("div",{className:"pdf-batch-control-actions",children:[c.jsx("button",{type:"button",className:"btn",onClick:Jt,disabled:he||F,"data-testid":"button-select-all-pdfs",children:"Select all"}),c.jsx("button",{type:"button",className:"btn",onClick:$t,disabled:he||F,"data-testid":"button-deselect-all-pdfs",children:"Deselect all"})]})]}),p.length>0&&Et.length===0&&c.jsx("p",{className:"pdf-batch-empty",role:"status","data-testid":"status-no-pdfs-selected",children:"No PDFs selected. Use Select all or tick a PDF row before downloading the runner."}),c.jsxs("div",{className:"pdf-queue","aria-label":"Saved PDF files",children:[we&&c.jsxs("div",{className:"pdf-confirm",role:"alertdialog","aria-label":"Confirm delete","data-testid":"dialog-confirm-delete",children:[c.jsx("span",{children:we.type==="all"?`Delete all ${p.length} saved ${a} PDF(s) from this device? This cannot be undone.`:"Delete this PDF from this device? This cannot be undone."}),c.jsx("button",{type:"button",className:"btn danger","data-testid":"button-confirm-delete",onClick:()=>we.type==="all"?void Gn():void en(we.id),children:"Delete"}),c.jsx("button",{type:"button",className:"btn","data-testid":"button-cancel-delete",onClick:()=>ue(null),children:"Keep"})]}),u?c.jsxs("div",{className:"pdf-queue-empty",role:"status","data-testid":"status-pdf-loading",children:[c.jsx(Ra,{size:16,className:"pdf-spin"})," Loading saved PDFs"]}):b?c.jsxs("div",{className:"pdf-queue-empty",role:"alert","data-testid":"status-pdf-load-error",children:[c.jsx(Sr,{size:16})," ",b,c.jsx("button",{type:"button",className:"btn",onClick:()=>{y(!0),It()},"data-testid":"button-retry-load",children:"Try again"})]}):p.length?p.map(M=>c.jsxs("div",{className:`pdf-file-row${M.id===w?" is-selected":""}`,"data-testid":`row-pdf-file-${M.id}`,children:[c.jsxs("button",{type:"button",className:"pdf-select",onClick:()=>{k(M.id),L(null),ae(1)},"aria-label":`Preview ${M.alias}`,"aria-pressed":M.id===w,"data-testid":`button-select-pdf-${M.id}`,children:[c.jsx("span",{className:"pdf-file-icon",children:c.jsx(Vn,{size:17})}),c.jsxs("span",{className:"pdf-file-details",children:[c.jsx("strong",{className:"pdf-filename","data-testid":`text-pdf-name-${M.id}`,children:M.alias}),c.jsxs("span",{className:"pdf-file-meta",children:[M.pageCount," page(s) · ",Go(M.size)," · saved locally"]}),c.jsxs("span",{className:"pdf-analysis-state","data-testid":`status-ede-${M.id}`,children:["EDE: ",M.analysisStatus==="needs-review"?`${M.analysisRecordCount??0} candidate(s) · review required`:M.analysisStatus==="no-tags"?"No tag candidates found":M.analysisStatus==="extracting"?_===M.id?"Extraction in progress":"Paused · resume available":M.analysisStatus==="failed"?"Extraction failed":M.analysisStatus==="paused"?"Paused · resume available":"Not extracted yet"," · AutoCAD: not connected"]}),M.analysisStatus==="failed"&&M.analysisMessage&&c.jsx("span",{className:"pdf-analysis-state",role:"status",children:M.analysisMessage})]})]}),c.jsxs("span",{className:"pdf-row-actions",children:[c.jsxs("label",{className:"pdf-batch-choice",children:[c.jsx("input",{type:"checkbox",checked:dA(f,M.id),disabled:he||F,onChange:()=>_a(M.id),"aria-label":`Process ${M.alias} in the AutoCAD batch`,"data-testid":`checkbox-batch-pdf-${M.id}`}),c.jsx("span",{children:"Process"})]}),M.analysisStatus!=="needs-review"&&_!==M.id&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:he,onClick:()=>{ra(M)},"data-testid":`button-extract-ede-${M.id}`,children:[c.jsx(Vn,{size:13})," ",M.analysisStatus==="failed"?"Retry EDE":M.analysisStatus==="paused"||M.analysisStatus==="extracting"?"Resume EDE":"Create EDE data"]}),(M.analysisStatus==="needs-review"||M.analysisStatus==="no-tags")&&c.jsx(da,{className:"btn pdf-extract-btn",href:`/workspace/${a==="PFD"?"pfd":"pid"}/engineering-data?source=${encodeURIComponent(M.id)}`,children:"Open EDE"}),M.analysisStatus==="needs-review"&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:he,onClick:()=>{ra(M)},"data-testid":`button-refresh-source-links-${M.id}`,children:[c.jsx(Dw,{size:13})," Recheck tags & locations"]}),_===M.id&&c.jsxs("span",{className:"pdf-running-label",children:[c.jsx(Ra,{size:13,className:"pdf-spin"})," Reading"]}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Preview ${M.alias}`,onClick:()=>{k(M.id),L(null),ae(1)},"data-testid":`button-preview-pdf-${M.id}`,children:c.jsx(sw,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Download original source ${M.alias}`,onClick:()=>{Ia(M)},"data-testid":`button-download-pdf-${M.id}`,children:c.jsx(Vr,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn danger","aria-label":`Remove ${M.alias}`,onClick:()=>ue({type:"one",id:M.id}),"data-testid":`button-remove-pdf-${M.id}`,children:c.jsx(Fu,{size:15})})]})]},M.id)):c.jsxs("div",{className:"pdf-queue-empty","data-testid":"empty-pdf-queue",children:[c.jsx(Vn,{size:18}),c.jsxs("span",{children:["No saved PDFs for ",a]}),c.jsx("small",{children:"Add PDFs to keep them on this device. You can add several at once."})]})]}),c.jsx("div",{className:"pdf-page-summary",style:{marginTop:10},"data-testid":"text-pdf-page-summary",children:p.length?`${p.length} PDF(s) · ${J} total page(s)`:he?"Working on your files":"No readable PDFs saved yet"}),p.length>=100&&c.jsxs("div",{className:"pdf-trust-note",role:"note","data-testid":"text-large-batch-resume",children:[c.jsx(Xn,{size:15}),c.jsxs("span",{children:["This batch contains ",p.length," PDFs and ",J," pages. The AutoCAD runner tracks every page in a local journal beside the DWGs, so you can resume later with the same unchanged kit and output name. Progress is recorded on the Windows workstation, not in this browser."]})]}),Ke&&c.jsxs("div",{className:"pdf-source-box","data-testid":"panel-source-page",children:[c.jsxs("div",{className:"pdf-page-select",children:[c.jsx("label",{htmlFor:"pdf-page-picker",children:"Source page"}),c.jsx("select",{id:"pdf-page-picker",value:X,onChange:M=>ae(Number(M.target.value)),"data-testid":"select-source-page","aria-label":"Select source page",children:Array.from({length:Ke.pageCount},(M,re)=>c.jsxs("option",{value:re+1,children:["Page ",re+1]},re+1))}),c.jsxs("span",{children:["of ",Ke.pageCount," in ",Ke.alias]})]}),c.jsx(T1,{fileId:Ke.id,alias:Ke.alias,pageCount:Ke.pageCount,page:X,onPageChange:ae,loadBytes:Ho,markers:I,onMarkerClick:M=>{const re=a==="PFD"?"pfd":"pid";window.location.assign(`/workspace/${re}/engineering-data?source=${encodeURIComponent(Ke.id)}&record=${encodeURIComponent(M)}`)}})]}),c.jsxs("div",{className:"pdf-capabilities",children:[c.jsxs("div",{className:"pdf-capability-storage pdf-dxf-export",children:[c.jsx("div",{className:"capability-heading",children:c.jsx("strong",{children:"Create DXF — no AutoCAD needed"})}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Scale multiplier · 1 = PDF paper size in mm"}),c.jsx("input",{type:"number",min:"0.000001",step:"any",value:Qe,onChange:M=>Ve(M.target.value),"aria-label":"DXF scale multiplier"})]}),c.jsx("button",{className:"btn primary",type:"button",disabled:!p.length||he||u||fe||F||!!b,onClick:()=>{Dt(Ke??void 0)},"data-testid":"button-export-dxf",children:fe?c.jsxs(c.Fragment,{children:[c.jsx(Ra,{size:14,className:"pdf-spin"})," Creating DXF…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Vr,{size:14})," ",Ke?`${Ke.alias} · Download DXF pages`:"Download all DXF pages"]})}),Ke&&p.length>1&&c.jsx("button",{className:"btn",type:"button",disabled:he||u||fe||F||!!b,onClick:()=>{Dt()},"data-testid":"button-export-all-dxf",children:"All PDFs · Download DXF pages"}),c.jsx("p",{children:"One editable DXF per vector PDF page. Scanned pages are not automatically traced. This exports raw PDF geometry, not library-standard symbols. Source details may remain—review/redact before sharing."}),ye&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:ye}),c.jsx(lS,{})]}),c.jsxs("div",{className:"pdf-capability-convert",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"01"}),c.jsx("strong",{children:"Page check"})]}),c.jsx("div",{className:"pdf-page-summary","data-testid":"text-pdf-page-summary",children:p.length?`${p.length} PDF(s) · ${J} total page(s)`:"Add PDFs to prepare an AutoCAD runner."})]}),c.jsxs("div",{className:"pdf-capability-storage",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"02"}),c.jsx("strong",{children:"Local AutoCAD runner"})]}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Approved CAD mappings"}),c.jsxs("select",{value:ce,disabled:ot,onChange:M=>Y(M.target.value),"aria-label":"Approved CAD mappings for this runner",children:[c.jsx("option",{value:"",children:"Legends Library only"}),xe.map(M=>c.jsx("option",{value:M.id,children:M.label},M.id))]})]}),c.jsxs("div",{className:"runner-group-hint","aria-live":"polite","data-testid":"runner-mapping-inventory",children:[de?c.jsxs(c.Fragment,{children:[c.jsxs("strong",{children:[de.symbols," usable approved blocks · ",de.layers," layers · ",de.textStyles," text styles for ",a]}),de.symbols===0&&c.jsxs("p",{role:"status",children:["No compatible approved blocks: this kit cannot convert PDF symbols into approved CAD blocks. Approve ",a," or Shared symbols with an approved target layer first. Other-discipline symbols are not reused automatically."]}),de.textStyles===0&&c.jsx("p",{children:"Confirmed final text uses Arial Narrow at its existing height and position. Unconfirmed PDF text stays visible for review. An approved final text layer is required for loose text."}),de.otherDisciplineSymbols>0&&c.jsxs("p",{children:[de.otherDisciplineSymbols," approved symbol(s) belong to the other discipline and are excluded."]})]}):c.jsx("p",{children:"The mapping library could not be checked. Do not assume blocks or text formatting are available."}),c.jsx("button",{type:"button",className:"btn btn-ghost btn-small",onClick:()=>U(M=>M+1),children:"Refresh mapping counts"}),V&&c.jsxs("p",{role:"status",children:["Local mapping counts checked at ",V,". Refresh recounts saved approvals; it does not approve symbols."]})]}),c.jsxs("label",{className:"runner-group-choice",children:[c.jsxs("span",{children:[a," client folder for this batch"]}),c.jsxs("select",{value:Q,disabled:!At.length||ot||F,onChange:M=>l(M.target.value),"aria-label":`${a} client folder for title block`,children:[c.jsx("option",{value:"",children:At.length?`Choose a ${a} client folder`:`Create a ${a} client folder first`}),At.map(M=>c.jsx("option",{value:M.id,children:M.label},M.id))]})]}),c.jsx("p",{className:"runner-group-hint",children:"Choose the client folder for this batch. All selected PDFs will use its title block, so select PDFs from one project."}),Q?c.jsxs("div",{className:"runner-title-block","aria-label":"Project title block",children:[c.jsxs("div",{className:"runner-title-block-heading",children:[c.jsxs("strong",{children:["Client title block",o&&Q===s?` · ${o}`:""]}),mt?c.jsx("span",{children:"Checking this browser…"}):qe?c.jsxs("span",{children:["Saved locally · ",Go(qe.bytes)]}):c.jsx("span",{children:"Required for this project"})]}),!mt&&!qe&&c.jsx("p",{children:"Upload a standalone .DWG for this project. The runner attaches it as a model-space XREF at (0,0,0), rotation 0, scale 1:1, preserving its layers. Use matching drawing units."}),c.jsx("input",{ref:_t,className:"runner-title-block-file",type:"file",accept:".dwg,application/acad","aria-label":"Choose project title block DWG",onChange:M=>{Tn(M.currentTarget.files?.[0])}}),c.jsxs("div",{className:"runner-title-block-actions",children:[c.jsx("button",{className:"btn",type:"button",disabled:mt||ot||F,onClick:()=>_t.current?.click(),children:ot?c.jsxs(c.Fragment,{children:[c.jsx(Ra,{size:14,className:"pdf-spin"})," Saving locally…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Am,{size:14})," ",qe?"Replace title block DWG":"Upload title block DWG"]})}),qe&&c.jsx("button",{className:"btn",type:"button",disabled:ot||F,onClick:()=>{pa()},children:"Remove"})]}),c.jsxs("p",{className:"runner-title-block-note",children:["The file stays in this browser and is added only to this ",a," workspace’s local runner. Use the same project output folder for future batches: all page DWGs reuse one PROJECT_TITLE_BLOCK.dwg by relative XREF. The runner keeps a local scope marker beside it; upload the shared DWG once, not the marker. Existing numbered copies are only reported, never deleted."]}),Mt&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:Mt})]}):c.jsx("p",{className:"runner-title-block-empty",children:At.length?`Select a ${a} client folder above to upload or use its title block.`:"Create a Technology, Project or Proposal, and Client folder to use a client title block."}),c.jsx(dS,{scope:`${a}:${ce||"legends-default"}`},`${a}:${ce}`),c.jsx("button",{className:"btn primary",type:"button",disabled:!Et.length||he||u||F||mt||ot||!!Q&&!qe||!!b,"aria-describedby":"runner-description",onClick:()=>{fa()},"data-testid":"button-convert-to-dwg",children:F?c.jsxs(c.Fragment,{children:[c.jsx(Ra,{size:14,className:"pdf-spin"})," Preparing…"]}):c.jsxs(c.Fragment,{children:[c.jsx(qw,{size:14})," Download AutoCAD batch runner"]})}),c.jsx("p",{id:"runner-description",children:"The ZIP contains only the checked PDFs, individually exported approved blocks, and—when a PFD/P&ID group is selected—its title block DWG. One or several PDFs can be selected. It does not include original mapping source DWGs. Run it in Windows AutoCAD. Unmatched symbols retain source geometry or use an approved same-category fallback with a red review cloud and source-page reference. A local journal tracks each page and lets the same unchanged batch resume without overwriting completed DWGs."}),ge&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:ge})]})]}),c.jsxs("div",{className:"pdf-final-status",role:"note","data-testid":"text-conversion-unavailable",children:[c.jsxs("strong",{children:[c.jsx(Sw,{size:13,style:{verticalAlign:"-2px"}})," AutoCAD 2020 is not connected to this browser."]})," ","DXF vector export runs directly in this browser. Native DWG still requires the downloaded helper to run in Windows AutoCAD; the browser does not connect to AutoCAD."]}),c.jsx(s2,{discipline:a,onAddPdfs:La,clientFolderId:s||void 0,clientFolderLabel:o||void 0})]})}function Py({discipline:a}){const[r]=q.useState(()=>{try{return{hierarchy:v1(),recovery:null}}catch(ue){const ce=ue instanceof ai?ue:new ai("Saved groups could not be loaded from this browser.");return{hierarchy:Bu(),recovery:{message:ce.message,rawValue:ce.rawValue}}}}),[s,o]=q.useState(r.hierarchy),[l,p]=q.useState(r.recovery),[g,f]=q.useState(""),[m,u]=q.useState(null),[y,b]=q.useState(""),[v,x]=q.useState(null),R=s[a],D=a==="pfd"?"PFD":"P&ID",A=Hu(R,v),S=A&&(A.kind==="client"||A.kind==="legacy")?A.id:"",P=S?Eb(R).find(ue=>ue.id===S)?.label??A?.name??"":"",_=ue=>x(ue||null);q.useEffect(()=>{if(!l)try{E1(s),f("")}catch(ue){f(ue instanceof Error?ue.message:"Groups could not be saved in this browser.")}},[s,l]);const N=(ue,ce,Y=[])=>({id:globalThis.crypto?.randomUUID?.()??`group-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:ue,kind:ce,expanded:!0,children:Y}),w=(ue,ce)=>{b(ce),u(ue)},k=()=>{const ue=N("New technology","technology",[N("Projects","projects"),N("Proposals","proposals")]);o(ce=>({...ce,[a]:[...ce[a],ue]})),w(ue.id,ue.name),x(ue.id)},C=ue=>{const ce=Hu(R,ue);if(!ce)return;const Y=ce.kind==="projects"?"project":ce.kind==="proposals"?"proposal":ce.kind==="project"||ce.kind==="proposal"?"client":null;if(!Y)return;const me=N(Y==="project"?"New project":Y==="proposal"?"New proposal":"New client",Y);o(xe=>({...xe,[a]:Pl(xe[a],ue,j=>({...j,expanded:!0,children:[...j.children,me]}))})),w(me.id,me.name),x(me.id)},L=ue=>{const ce=y.trim();if(!ce||ce.length>Fl){f(`Folder names must be 1–${Fl} characters.`),u(null);return}o(Y=>({...Y,[a]:Pl(Y[a],ue,Q=>({...Q,name:ce}))})),u(null),f("")},B=()=>u(null),ee=ue=>o(ce=>({...ce,[a]:Pl(ce[a],ue,Y=>({...Y,expanded:!Y.expanded}))})),X=ue=>{window.confirm(`Delete “${ue.name}” and all folders inside it? Saved title blocks and CAD sources are not deleted.`)&&(bb(ue,v)&&x(null),fv(ue,m)&&u(null),o(ce=>({...ce,[a]:yb(ce[a],ue.id)})))},ae=()=>{if(l?.rawValue===null||l?.rawValue===void 0)return;const ue=new Blob([l.rawValue],{type:"application/json;charset=utf-8"}),ce=URL.createObjectURL(ue),Y=document.createElement("a");Y.href=ce,Y.download="mapping-studio-hierarchy-backup.json",Y.click(),window.setTimeout(()=>URL.revokeObjectURL(ce),1e3)},we=()=>{if(window.confirm("Clear the unreadable hierarchy saved in this browser? This cannot be undone. Download a backup first if you may need the saved data."))try{window.localStorage.removeItem(Cp),window.localStorage.removeItem(gb),o(Bu()),p(null),f("")}catch{f("Browser storage could not be cleared. The saved hierarchy remains locked and unchanged.")}};return c.jsxs("main",{className:"hierarchy-page","data-discipline":a,children:[c.jsxs("header",{className:"hierarchy-topbar",children:[c.jsxs(da,{href:"/",className:"studio-wordmark","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),c.jsxs("div",{className:"hierarchy-top-actions",children:[c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Saved on this device"]}),c.jsxs(da,{href:"/",className:"btn subtle","data-testid":"link-discipline-selection",children:[c.jsx(Xy,{size:14})," Disciplines"]})]})]}),c.jsxs("div",{className:"hierarchy-frame",children:[c.jsxs("aside",{className:"hierarchy-sidebar",children:[c.jsx("div",{className:"sidebar-label",children:"DISCIPLINES"}),c.jsxs(da,{href:"/workspace/pfd",className:`discipline-nav ${a==="pfd"?"active":""}`,"data-testid":"nav-pfd",children:[c.jsx(bw,{size:16})," PFD"]}),c.jsxs(da,{href:"/workspace/pid",className:`discipline-nav ${a==="pid"?"active":""}`,"data-testid":"nav-pid",children:[c.jsx(Ko,{size:16})," P&ID"]}),c.jsxs("div",{className:"sidebar-local-note",children:[c.jsx(Xn,{size:14}),c.jsx("span",{children:"PFD and P&ID groups stay separate."})]})]}),c.jsxs("section",{className:"hierarchy-main","aria-label":`${D} workspace`,children:[c.jsxs("div",{className:"hierarchy-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[D," workspace"]}),c.jsx("h1",{children:D}),c.jsx("p",{children:"Organize technology, project/proposal and client folders. Common standards stay in the company library."})]}),c.jsxs("div",{className:"hierarchy-heading-actions",children:[c.jsxs(da,{href:`/workspace/${a}/engineering-data`,className:"btn edm-entry-link","data-testid":`link-engineering-data-${a}`,children:[c.jsx(Sp,{size:14})," Engineering data"]}),c.jsxs("button",{className:"btn primary",onClick:k,disabled:!!l,"data-testid":"button-add-group",children:[c.jsx(ri,{size:15})," New technology"]})]})]}),l&&c.jsxs("div",{className:"hierarchy-recovery",role:"alert","data-testid":"status-hierarchy-recovery",children:[c.jsxs("div",{className:"recovery-title",children:[c.jsx(Sr,{size:17}),c.jsx("strong",{children:"Saved groups need recovery"})]}),c.jsxs("p",{children:[l.message," Editing is disabled to protect the saved data."]}),l.rawValue!==null?c.jsx("button",{className:"btn",onClick:ae,"data-testid":"button-download-hierarchy-backup",children:"Download raw backup"}):c.jsx("p",{className:"recovery-unavailable",children:"A raw backup is unavailable because browser storage could not be read."}),c.jsx("button",{className:"btn danger",onClick:we,"data-testid":"button-clear-hierarchy-storage",children:"Clear saved data and start over"})]}),g&&!l&&c.jsxs("div",{className:"storage-banner",role:"alert","data-testid":"status-hierarchy-storage",children:[c.jsx(Sr,{size:15}),g]}),c.jsxs("div",{className:"hierarchy-panel",children:[c.jsxs("div",{className:"tree-head",children:[c.jsx("span",{children:"TECHNOLOGY · PROJECTS · PROPOSALS · CLIENTS"}),c.jsxs("span",{"data-testid":"text-group-count",children:[Yu(R)," ",Yu(R)===1?"folder":"folders"]})]}),R.length===0?c.jsxs("div",{className:"hierarchy-empty","data-testid":"empty-hierarchy",children:[c.jsx("div",{className:"empty-folder",children:c.jsx(Mu,{size:23})}),c.jsx("strong",{children:l?"Folders are locked":"No technology folders yet"}),c.jsx("p",{children:l?"Recover or clear the saved data to continue.":"Create a technology folder, then add projects or proposals and their clients."}),!l&&c.jsxs("button",{className:"btn",onClick:k,"data-testid":"button-create-first-group",children:[c.jsx(ri,{size:14})," Create first technology"]})]}):c.jsx("div",{className:"tree-list",role:"tree","aria-label":`${D} project folders`,children:R.map(ue=>c.jsx(hv,{node:ue,depth:0,selectedId:v,editingId:m,editName:y,setEditName:b,onSelect:x,onToggle:ee,onAdd:C,onRename:w,onCommit:L,onCancel:B,onDelete:X,disabled:!!l},ue.id))})]}),S&&c.jsxs("div",{className:"hierarchy-client-context",role:"status","data-testid":"selected-client-folder",children:[c.jsx(Mu,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:P})," selected. Its title block and client source library will be used below."]})]}),c.jsxs("div",{className:"hierarchy-footnote",children:[c.jsx(Xn,{size:14}),c.jsx("span",{children:"Saved in this browser. PFD and P&ID folder trees stay separate."})]}),c.jsx(vA,{discipline:a==="pfd"?"PFD":"P&ID",groups:R,selectedClientId:S,selectedClientLabel:P,onSelectClient:_},a)]})]})]})}function fv(a,r){return r!==null&&(a.id===r||a.children.some(s=>fv(s,r)))}function hv({node:a,depth:r,selectedId:s,editingId:o,editName:l,setEditName:p,onSelect:g,onToggle:f,onAdd:m,onRename:u,onCommit:y,onCancel:b,onDelete:v,disabled:x}){const R=o===a.id,D=["projects","proposals","project","proposal"].includes(a.kind),A=!["projects","proposals"].includes(a.kind),S=a.kind==="projects"?"Add project":a.kind==="proposals"?"Add proposal":a.kind==="project"||a.kind==="proposal"?"Add client":"Add folder",P={technology:"Technology",projects:"Projects",proposals:"Proposals",project:"Project",proposal:"Proposal",client:"Client",legacy:"Existing group"},_=q.useRef(null),N=()=>{_.current!==a.id&&(_.current=a.id,y(a.id))},w=()=>{_.current!==a.id&&(_.current=a.id,b())};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`tree-row ${s===a.id?"selected":""}`,role:"treeitem","aria-expanded":a.children.length?a.expanded:void 0,"aria-level":r+1,style:{"--tree-depth":r},"data-testid":`tree-group-${a.id}`,children:[c.jsx("button",{className:"tree-toggle","aria-label":`${a.expanded?"Collapse":"Expand"} ${a.name}`,disabled:x,onClick:()=>f(a.id),"data-testid":`button-toggle-group-${a.id}`,children:a.expanded?c.jsx(xr,{size:15}):c.jsx(xp,{size:15})}),c.jsx(Mu,{className:"tree-folder",size:16}),R?c.jsx("input",{autoFocus:!0,maxLength:Fl,className:"tree-rename-input","aria-label":"Folder name",value:l,disabled:x,onChange:k=>p(k.target.value),onFocus:()=>{_.current=null},onBlur:N,onKeyDown:k=>{k.key==="Enter"&&N(),k.key==="Escape"&&(k.preventDefault(),w())},"data-testid":`input-rename-group-${a.id}`}):c.jsx("button",{className:"tree-name",disabled:x,onClick:()=>g(a.id),onDoubleClick:()=>A&&u(a.id,a.name),title:"Select folder; double-click to rename","data-testid":`button-select-group-${a.id}`,children:a.name}),c.jsx("span",{className:"tree-kind-badge",children:P[a.kind]}),c.jsxs("span",{className:"tree-actions",children:[D&&c.jsx("button",{"aria-label":`${S} under ${a.name}`,title:S,disabled:x,onClick:()=>m(a.id),"data-testid":`button-add-subgroup-${a.id}`,children:c.jsx(ri,{size:14})}),A&&c.jsx("button",{"aria-label":`Rename ${a.name}`,title:"Rename folder",disabled:x,onClick:()=>u(a.id,a.name),"data-testid":`button-rename-group-${a.id}`,children:c.jsx(kw,{size:13})}),A&&c.jsx("button",{"aria-label":`Delete ${a.name}`,title:"Delete folder",disabled:x,onClick:()=>v(a),"data-testid":`button-delete-group-${a.id}`,children:c.jsx(oi,{size:13})})]})]}),a.expanded&&a.children.map(k=>c.jsx(hv,{node:k,depth:r+1,selectedId:s,editingId:o,editName:l,setEditName:p,onSelect:g,onToggle:f,onAdd:m,onRename:u,onCommit:y,onCancel:b,onDelete:v,disabled:x},k.id))]})}function EA({order:a,hidden:r,onChange:s}){const o=(l,p)=>{const g=[...a];[g[l],g[l+p]]=[g[l+p],g[l]],s(g,r)};return c.jsxs("details",{className:"edm-column-picker",children:[c.jsxs("summary",{children:["Columns (",a.length-r.length,")"]}),c.jsxs("div",{className:"edm-column-options",children:[c.jsx("p",{children:"Use these checkboxes to show or hide columns. The filter icon in each heading filters row values, including (Blanks), and does not hide the column."}),a.map((l,p)=>c.jsxs("div",{className:"edm-column-option",children:[c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:!r.includes(l),"aria-label":`Show ${kt[l]}`,disabled:!r.includes(l)&&r.length===a.length-1,onChange:()=>s(a,r.includes(l)?r.filter(g=>g!==l):[...r,l])}),kt[l]]}),c.jsx("button",{type:"button",disabled:p===0,onClick:()=>o(p,-1),"aria-label":`Move ${kt[l]} up`,children:c.jsx(GE,{size:14})}),c.jsx("button",{type:"button",disabled:p===a.length-1,onClick:()=>o(p,1),"aria-label":`Move ${kt[l]} down`,children:c.jsx(zE,{size:14})})]},l)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>s([...Hn],[]),children:"Reset columns"})]})]})}function jy(a){const r=Math.min(272,window.innerWidth-16),s=Math.min(360,window.innerHeight-16),o=Math.max(8,Math.min(a.left,window.innerWidth-r-8)),l=a.bottom+4;return{top:l+s<=window.innerHeight-8?l:Math.max(8,a.top-s-4),left:o}}function Oy({label:a,options:r,selectedValues:s,onApply:o}){const l=q.useRef(null),p=q.useRef(null),g=q.useRef(null),[f,m]=q.useState(!1),[u,y]=q.useState(null),[b,v]=q.useState([]),[x,R]=q.useState(""),D=s!==void 0,A=q.useMemo(()=>r.map(C=>C.value),[r]),S=q.useMemo(()=>{const C=x.trim().toLowerCase();return C?r.filter(L=>(L.value||"(Blanks)").toLowerCase().includes(C)):r},[r,x]),P=r.reduce((C,L)=>C+Number(b.includes(L.value)),0),_=r.length>0&&P===r.length;q.useEffect(()=>{g.current&&(g.current.indeterminate=P>0&&P<r.length)},[b,r.length,P]),q.useEffect(()=>{if(!f)return;const C=()=>{const ee=l.current?.getBoundingClientRect();ee&&y(jy(ee))},L=ee=>{const X=ee.target;!p.current?.contains(X)&&!l.current?.contains(X)&&m(!1)},B=ee=>{ee.key==="Escape"&&m(!1)};return C(),document.addEventListener("pointerdown",L),document.addEventListener("keydown",B),window.addEventListener("resize",C),window.addEventListener("scroll",C,!0),()=>{document.removeEventListener("pointerdown",L),document.removeEventListener("keydown",B),window.removeEventListener("resize",C),window.removeEventListener("scroll",C,!0)}},[f]);const N=()=>{if(f){m(!1);return}const C=l.current?.getBoundingClientRect();C&&y(jy(C)),v(s?[...s]:A),R(""),m(!0)},w=C=>{v(L=>L.includes(C)?L.filter(B=>B!==C):[...L,C])},k=()=>{o(b),m(!1)};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{ref:l,type:"button",className:`edm-column-filter-trigger${D?" active":""}`,title:`${D?"Filtered":"Filter"} ${a}`,"aria-label":`${D?"Edit filter for":"Filter"} ${a}`,"aria-expanded":f,onClick:N,"data-testid":`button-filter-${a.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[c.jsx(mw,{size:12}),c.jsx(xr,{size:10})]}),f&&u&&Kl.createPortal(c.jsxs("div",{ref:p,className:"edm-column-filter-menu",style:{top:u.top,left:u.left},role:"dialog","aria-label":`${a} filter`,"data-testid":"menu-column-filter",children:[c.jsxs("strong",{className:"edm-column-filter-title",children:["Filter: ",a]}),c.jsxs("label",{className:"edm-column-filter-search",children:[c.jsx(si,{size:14}),c.jsx("input",{value:x,onChange:C=>R(C.target.value),placeholder:"Search values…","aria-label":`Search ${a} values`})]}),c.jsxs("label",{className:"edm-column-filter-select-all",children:[c.jsx("input",{ref:g,type:"checkbox",checked:_,disabled:!r.length,onChange:()=>v(_?[]:A)}),c.jsx("span",{children:"Select all"})]}),c.jsxs("div",{className:"edm-column-filter-options",role:"group","aria-label":`${a} values`,children:[!S.length&&c.jsx("p",{className:"edm-column-filter-empty",children:r.length?"No matching values.":"No values in this drawing yet."}),S.map(C=>c.jsxs("label",{className:"edm-column-filter-option",children:[c.jsx("input",{type:"checkbox",checked:b.includes(C.value),onChange:()=>w(C.value)}),c.jsx("span",{children:C.value||"(Blanks)"}),c.jsx("small",{children:C.count})]},JSON.stringify(C.value)))]}),c.jsxs("div",{className:"edm-column-filter-actions",children:[c.jsx("button",{type:"button",className:"edm-column-filter-clear",disabled:!D,onClick:()=>{o(void 0),m(!1)},children:"Clear filter"}),c.jsx("span",{}),c.jsx("button",{type:"button",onClick:()=>m(!1),children:"Cancel"}),c.jsx("button",{type:"button",className:"apply",disabled:!r.length,onClick:k,children:"Apply"})]})]}),document.body)]})}function gv(a){return{headers:["#","Object type",...a.fields.map(r=>kt[r])],rows:a.rows.map((r,s)=>[s+1,r.type,...a.fields.map(o=>bn(r,o))])}}function mv(a){return a.groups.map(r=>{const s=new Map;for(const o of a.rows){const l=bn(o,r)||"—";s.set(l,(s.get(l)??0)+1)}return{field:r,label:kt[r],values:[...s].map(([o,l])=>({value:o,count:l}))}})}function wA(a){const r=gv(a);return dv(r.headers,r.rows)}async function xA(a,r){const{default:s}=await sn(async()=>{const{default:y}=await import("./exceljs.min-De4UQp8C.js").then(b=>b.e);return{default:y}},__vite__mapDeps([2,1])),o=new s.Workbook;o.creator="gaurav.cbiindia";const l=o.addWorksheet("Engineering data",{pageSetup:{orientation:"landscape",fitToPage:!0,fitToWidth:1,fitToHeight:0}}),p=gv(a),g=mv(a),f=p.headers.length;["Engineering Data Editor",`${r.discipline} · ${r.drawing}${r.revision?` · ${r.revision}`:""} · ${a.rows.length} records`,`Object type: ${r.filter} · Search: ${r.search||"(none)"} · Sort: ${r.sort}`,...g.map(y=>{const b=y.values.map(({value:v,count:x})=>`${v} (${x})`).join(" · ");return`${y.label}: ${b.length>1500?b.slice(0,1500)+"… (see Group summaries sheet)":b}`})].forEach((y,b)=>{const v=l.addRow([y]);l.mergeCells(v.number,1,v.number,f),v.height=b===0?30:32,v.getCell(1).font={name:"Calibri",size:b===0?16:10,bold:b===0,color:{argb:b===0?"FFF0F0E8":"FF405A55"}},v.getCell(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:b===0?"FF203940":"FFF9F8F2"}},v.getCell(1).alignment={vertical:"middle",wrapText:!0}});const u=l.addRow(p.headers);if(u.height=30,u.eachCell(y=>{y.font={name:"Calibri",bold:!0,size:10,color:{argb:"FF405A55"}},y.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFF0F1E9"}},y.alignment={vertical:"middle",wrapText:!0},y.border={bottom:{style:"thin",color:{argb:"FFD9DED5"}}}}),p.rows.forEach((y,b)=>{const v=l.addRow(y);v.height=30,v.eachCell({includeEmpty:!0},(x,R)=>{x.numFmt=R===1?"0":"@",x.font={name:R>2&&a.fields[R-3]==="itemTag"?"Consolas":"Calibri",size:10,color:{argb:"FF405A55"}},x.alignment={vertical:"middle",wrapText:!0},x.fill={type:"pattern",pattern:"solid",fgColor:{argb:b%2?"FFF2F5EE":"FFFBFAF6"}},x.border={right:{style:"thin",color:{argb:"FFECEEE8"}},bottom:{style:"thin",color:{argb:"FFE7E9E2"}}}})}),l.columns.forEach((y,b)=>{const v=a.fields[b-2];y.width=b===0?7:b===1?18:v==="notes"?52:v==="description"||v==="connection"?38:Math.max(18,p.headers[b].length+3)}),l.views=[{state:"frozen",ySplit:u.number,xSplit:2}],l.autoFilter={from:{row:u.number,column:1},to:{row:u.number+p.rows.length,column:f}},l.pageSetup.printTitlesRow=`${u.number}:${u.number}`,l.headerFooter.oddFooter="© gaurav.cbiindia | &P of &N",g.length){const y=o.addWorksheet("Group summaries");y.columns=[{header:"Group field",width:25},{header:"Value",width:42},{header:"Records",width:12}],g.forEach(b=>b.values.forEach(({value:v,count:x})=>y.addRow([b.label,v,x]))),y.getRow(1).font={bold:!0},y.views=[{state:"frozen",ySplit:1}],y.autoFilter="A1:C1"}return new Uint8Array(await o.xlsx.writeBuffer())}function yv(a,r){const s=String(r==="type"?a.type:bn(a,r));return s.trim()?s:""}function SA(a,r){const s=new Map;for(const o of a){const l=yv(o,r);s.set(l,(s.get(l)??0)+1)}return[...s.entries()].map(([o,l])=>({value:o,count:l})).sort((o,l)=>o.value===""?l.value===""?0:1:l.value===""?-1:o.value.localeCompare(l.value,void 0,{numeric:!0,sensitivity:"base"}))}function qy(a,r){return Object.entries(r).every(([s,o])=>o===void 0||o.includes(yv(a,s)))}const TA=["All types",...ui],AA=["type",...Hn],bv="pid-mapping-studio:engineering-column-widths:v1",bp=44,vp=720,DA=a=>a==="rowNumber"?44:a==="type"?154:a==="itemTag"?250:a==="notes"?300:a==="description"||a==="stableId"?220:a==="drawingRef"?180:a==="sourcePage"?100:a==="reviewStatus"?150:136;function CA(){try{const a=JSON.parse(window.localStorage.getItem(bv)??"{}");return!a||typeof a!="object"||Array.isArray(a)?{}:Object.fromEntries(Object.entries(a).filter(r=>typeof r[1]=="number"&&Number.isFinite(r[1])).map(([r,s])=>[r,Math.max(bp,Math.min(vp,s))]))}catch{return{}}}function My(a){try{window.localStorage.setItem(bv,JSON.stringify(a))}catch{}}const NA=a=>a.split(/\s+/).map(r=>r[0]).join("").slice(0,2).toUpperCase();function $y({discipline:a}){const[r]=q.useState(()=>{try{return{drawings:pi(a),raw:Us(a),error:""}}catch{return{drawings:[],raw:null,error:"Saved engineering data could not be read. Editing is blocked to protect it. Export a raw backup before recovery."}}}),[s,o]=q.useState(r.drawings),l=q.useRef(s),p=q.useRef(!0),g=q.useRef(r.raw),[f,m]=q.useState(s[0]?.id??""),u=s.find(I=>I.id===f)??s[0]??{id:"",name:"No drawing selected",revision:"",rows:[]};q.useEffect(()=>{const I=new URLSearchParams(window.location.search).get("source"),J=I?s.find(he=>he.sourcePdfId===I):void 0;J&&J.id!==f&&m(J.id)},[s,f]),q.useEffect(()=>{j({}),k(""),ee("All types"),ae(0)},[f,a]);const y=u.rows,[b,v]=q.useState(y[0]?.id??""),[x,R]=q.useState(""),[D,A]=q.useState("Rev 0"),[S,P]=q.useState(""),[_,N]=q.useState("Equipment"),[w,k]=q.useState(""),[C,L]=q.useState(""),[B,ee]=q.useState("All types"),[X,ae]=q.useState(0),[we,ue]=q.useState(12),[ce,Y]=q.useState({field:"itemTag",direction:1}),[Q,me]=q.useState([]),[xe,j]=q.useState({}),[te,U]=q.useState([...Hn]),[V,oe]=q.useState([]),[de,ve]=q.useState(CA),qe=q.useRef(de),Le=q.useRef(null),mt=q.useRef(null),[nt,ot]=q.useState("records"),dt=te.filter(I=>!V.includes(I)),Mt=["rowNumber","type",...dt],yt=I=>de[I]??DA(I),F=Mt.reduce((I,J)=>I+yt(J),0),[pe,ge]=q.useState(!1),[z,fe]=q.useState(""),[Ce,ye]=q.useState(""),[Ie,Qe]=q.useState(r.error),Ve=(I,J,he=!1)=>{const Ue={...qe.current,[I]:Math.max(bp,Math.min(vp,Math.round(J)))};qe.current=Ue,ve(Ue),he&&My(Ue)},Me=I=>{const J=document.createElement("canvas").getContext("2d"),he=Le.current?getComputedStyle(Le.current).font:"";J&&(J.font=he||"12px sans-serif");const Ue=I==="rowNumber"?"#":I==="type"?"Object type":kt[I],M=I==="rowNumber"?[]:I==="type"?y.map(Ne=>Ne.type):y.map(Ne=>bn(Ne,I)),re=Ne=>Ne.split(/\r?\n/).reduce((Oe,Je)=>Math.max(Oe,J?J.measureText(Je||"—").width:Je.length*7),0),Ee=M.reduce((Ne,Oe)=>Math.max(Ne,re(Oe)),re(Ue));Ve(I,Ee+(I==="itemTag"?158:I==="rowNumber"?18:54),!0)},_t=(I,J)=>{J.preventDefault(),J.stopPropagation(),J.currentTarget.setPointerCapture(J.pointerId),mt.current={column:I,pointerId:J.pointerId,startX:J.clientX,startWidth:yt(I)}},be=(I,J)=>{const he=mt.current;!he||he.column!==I||he.pointerId!==J.pointerId||(J.preventDefault(),Ve(I,he.startWidth+J.clientX-he.startX))},et=(I,J)=>{const he=mt.current;!he||he.column!==I||he.pointerId!==J.pointerId||(mt.current=null,My(qe.current),J.currentTarget.hasPointerCapture(J.pointerId)&&J.currentTarget.releasePointerCapture(J.pointerId))},rt=(I,J)=>{J.key==="Enter"?(J.preventDefault(),Me(I)):(J.key==="ArrowLeft"||J.key==="ArrowRight")&&(J.preventDefault(),Ve(I,yt(I)+(J.key==="ArrowRight"?16:-16),!0))},Qt=(I,J)=>c.jsx("span",{className:"edm-column-resize-handle",role:"separator","aria-orientation":"vertical","aria-label":`Resize ${J} column`,"aria-valuenow":yt(I),"aria-valuemin":bp,"aria-valuemax":vp,title:"Drag to resize · double-click to fit text",tabIndex:0,onPointerDown:he=>_t(I,he),onPointerMove:he=>be(I,he),onPointerUp:he=>et(I,he),onPointerCancel:he=>et(I,he),onDoubleClick:he=>{he.preventDefault(),he.stopPropagation(),Me(I)},onKeyDown:he=>rt(I,he),"data-testid":`resize-column-${I}`});q.useEffect(()=>{p.current=!0;const I=J=>{if(J.key===`pid-mapping-studio:engineering-workspace:v2:${a}`)try{const he=pi(a);l.current=he,o(he),g.current=Us(a),Qe("")}catch{Qe("Saved data changed and could not be read. Reload this page before editing.")}};return window.addEventListener("storage",I),()=>{p.current=!1,window.removeEventListener("storage",I)}},[a]);const ke=y.find(I=>I.id===b)??null;q.useEffect(()=>{const I=new URLSearchParams(window.location.search).get("record");if(!I)return;let J=I;try{J=jp(I)}catch{}const he=y.find(Ue=>Ue.id===J);he&&he.id!==b&&v(he.id)},[y,b]);const ka=q.useMemo(()=>{const I=w.trim().toLowerCase();return Object.fromEntries(AA.map(J=>{const he={...xe};delete he[J];const Ue=y.filter(M=>(B==="All types"||M.type===B)&&(!I||Object.values(M).join(" ").toLowerCase().includes(I))&&qy(M,he));return[J,SA(Ue,J)]}))},[y,w,B,xe]),At=q.useMemo(()=>{const I=w.trim().toLowerCase();return y.filter(J=>(B==="All types"||J.type===B)&&(!I||Object.values(J).join(" ").toLowerCase().includes(I))&&qy(J,xe))},[y,w,B,xe]),Et=q.useMemo(()=>[...At].sort((I,J)=>{for(const he of Q){const Ue=bn(I,he).localeCompare(bn(J,he)||"—",void 0,{numeric:!0});if(Ue)return Ue}return bn(I,ce.field).localeCompare(bn(J,ce.field),void 0,{numeric:!0})*ce.direction}),[At,ce,Q]),Jt=Math.max(1,Math.ceil(Et.length/we)),$t={fields:dt,rows:Et,groups:Q},_a=mv($t),ut=Et.slice(X*we,(X+1)*we);q.useEffect(()=>{ut.length&&!ut.some(I=>I.id===b)?v(ut[0].id):!ut.length&&b&&v("")},[ut,b]),q.useEffect(()=>ae(I=>Math.min(I,Jt-1)),[Jt]);const It=I=>{if(r.error)return!1;try{return g.current=mp(a,I,g.current),l.current=I,o(I),Qe(""),!0}catch(J){return Qe(J instanceof Error&&J.name!=="QuotaExceededError"?J.message:"Device storage is full or unavailable. This change was not saved. Download a backup and free space."),!1}},Ut=I=>It(s.map(J=>J.id===u.id?{...J,rows:I}:J)),wt=(I,J,he)=>{Ut(y.map(Ue=>Ue.id===I?{...Ue,[J]:he}:Ue))},La=I=>{I.preventDefault();const J=x.trim();if(!J||s.some(Ue=>Ue.name.toLowerCase()===J.toLowerCase())){Qe("Enter a new, unique drawing reference.");return}const he={id:crypto.randomUUID(),name:J,revision:D.trim()||"Rev 0",rows:[]};It([...s,he])&&(m(he.id),R(""),ae(0))},ra=I=>{if(I.preventDefault(),!u.id)return;const J=Op(_,S,u.name);if(Ut([...y,J])){P(""),k(""),ee("All types"),Y({field:"itemTag",direction:1}),me([]);const he=[...y,J].sort((Ue,M)=>Ue.itemTag.localeCompare(M.itemTag,void 0,{numeric:!0})).findIndex(Ue=>Ue.id===J.id);ae(Math.floor(he/we)),v(J.id)}},cn=()=>{!ke||!window.confirm(`Delete record ${ke.itemTag}? This cannot be undone without a backup.`)||Ut(y.filter(I=>I.id!==ke.id))&&v("")},en=async(I,J)=>{if(I.size>5*1024*1024){Qe("Import a file smaller than 5 MB.");return}try{const he=u.id,Ue=await I.text();if(!p.current)return;if(J==="csv"){const M=l.current.find(Ee=>Ee.id===he);if(!M)throw new Error("The target drawing no longer exists. Choose a drawing and try again.");const re=I2(Ue,M.name);It(l.current.map(Ee=>Ee.id===he?{...Ee,rows:[...Ee.rows,...re]}:Ee))&&(k(""),ee("All types"),ae(0))}else{const M=R2(Ue,a);It([...l.current,...M])&&(m(M[0]?.id??u.id),ae(0))}}catch(he){Qe(he instanceof Error?he.message:"This file could not be imported. No records were changed.")}},Gn=I=>Y(J=>({field:I,direction:J.field===I&&J.direction===1?-1:1})),Ia=(I,J)=>{const he=ka[I].map(M=>M.value),Ue=J!==void 0&&he.every(M=>J.includes(M))&&J.length===he.length;j(M=>{const re={...M};return J===void 0||Ue?delete re[I]:re[I]=J,re}),ae(0)},Tn=I=>me(J=>J.includes(I)?J:[...J,I]),pa=I=>{I.preventDefault();const J=I.dataTransfer.getData("text/engineering-field");Hn.includes(J)&&Tn(J)},fa=I=>{const J=Math.max(0,Math.min(Jt-1,I));ae(J);const he=Et.slice(J*we,(J+1)*we)[0];he&&v(he.id)},Dt=I=>{m(I),k(""),ae(0)},Ke=async(I,J=!1)=>{if(pe)return;const he=J?{fields:Hn,rows:s.flatMap(re=>re.rows),groups:[]}:$t,Ue=J?"all-records":"current-view",M={discipline:a==="pid"?"P&ID":"PFD",drawing:J?"All drawings":u.name,revision:J?void 0:u.revision,filter:J?"All types":B,search:J?"":w.trim(),sort:J?"Drawing order":`${kt[ce.field]} ${ce.direction===1?"ascending":"descending"}`};ge(!0),fe(""),ye("");try{const re=I==="csv"?wA(he):await xA(he,M);Il(`engineering-${a}-${Ue}.${I}`,re,I==="csv"?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),p.current&&fe(`Prepared ${I==="csv"?"CSV":"Excel"}: ${he.rows.length} records · ${J?"all records":"current view"}.`)}catch(re){p.current&&ye(re instanceof Error?re.message:"Export could not be prepared. Your saved records have not changed.")}finally{p.current&&ge(!1)}};return c.jsxs("main",{className:"edm-page","data-mobile-panel":nt,children:[c.jsxs("header",{className:"edm-topbar",children:[c.jsxs(da,{href:`/workspace/${a}`,className:"edm-brand","data-testid":"link-edm-workspace",children:[c.jsx("span",{className:"edm-mark",children:"ED"}),c.jsxs("span",{children:["Engineering Data Manager",c.jsx("small",{children:"Mapping Studio / browser-local workspace"})]})]}),c.jsxs("div",{className:"edm-toplinks",children:[c.jsxs("nav",{className:"edm-disciplines","aria-label":"Discipline navigation",children:[c.jsx(da,{href:"/workspace/pfd/engineering-data",className:a==="pfd"?"active":"","data-testid":"link-edm-pfd",children:"PFD"}),c.jsx(da,{href:"/workspace/pid/engineering-data",className:a==="pid"?"active":"","data-testid":"link-edm-pid",children:"P&ID"})]}),c.jsxs("span",{className:"edm-local",children:[c.jsx(Xn,{size:13}),"Saved on this device"]}),c.jsxs(da,{href:`/workspace/${a}`,className:"btn subtle","aria-label":"Back to the PFD or P&ID workspace","data-testid":"link-back-workspace",children:[c.jsx(Xy,{size:13})," Workspace"]})]})]}),c.jsxs("nav",{className:"edm-mobile-tabs","aria-label":"Engineering data panels",children:[c.jsx("button",{type:"button",className:nt==="catalog"?"active":"","aria-pressed":nt==="catalog",onClick:()=>ot("catalog"),"data-testid":"tab-edm-catalog",children:"Catalog"}),c.jsx("button",{type:"button",className:nt==="records"?"active":"","aria-pressed":nt==="records",onClick:()=>ot("records"),"data-testid":"tab-edm-records",children:"Records"}),c.jsx("button",{type:"button",className:nt==="properties"?"active":"","aria-pressed":nt==="properties",onClick:()=>ot("properties"),"data-testid":"tab-edm-properties",children:"Properties"})]}),c.jsxs("div",{className:"edm-titlebar",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"edm-eyebrow",children:[a==="pfd"?"PROCESS FLOW DIAGRAM":"PIPING & INSTRUMENTATION"," / YOUR RECORDS"]}),c.jsx("h1",{children:"Engineering data"}),c.jsx("p",{children:"Add or import your records. PFD and P&ID stay separate on this device."})]}),c.jsxs("div",{className:"edm-object-select",children:[c.jsx("span",{children:"Object type"}),c.jsx("select",{value:B,onChange:I=>{ee(I.target.value),ae(0)},"aria-label":"Object type filter","data-testid":"select-object-type",children:TA.map(I=>c.jsx("option",{children:I},I))}),c.jsx(xr,{size:14})]})]}),c.jsxs("div",{className:"edm-file-actions",children:[c.jsxs("button",{className:"btn",disabled:!s.length,onClick:()=>Il(`engineering-${a}-backup.json`,N2(a,s),"application/json"),"data-testid":"button-backup-data",children:[c.jsx(Vr,{size:14})," Download backup"]}),c.jsxs("label",{className:"btn",children:[c.jsx(Xr,{size:14})," Import backup",c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Import engineering backup",disabled:!!r.error,onChange:I=>{const J=I.currentTarget.files?.[0];I.currentTarget.value="",J&&en(J,"backup")}})]}),c.jsx("button",{className:"btn",disabled:pe||!s.some(I=>I.rows.length),onClick:()=>{Ke("csv",!0)},"data-testid":"button-report-all",children:"All records · CSV"}),c.jsx("button",{className:"btn",disabled:pe||!s.some(I=>I.rows.length),onClick:()=>{Ke("xlsx",!0)},"data-testid":"button-report-all-excel",children:"All records · Excel"}),r.error&&c.jsx("button",{className:"btn",onClick:()=>{try{const I=Us(a);I&&Il(`engineering-${a}-raw.json`,I,"application/json")}catch{Qe("Device storage cannot be accessed. The saved data has not been changed.")}},children:"Export raw backup"}),r.error&&c.jsx("button",{className:"btn danger",onClick:()=>{if(window.confirm("Delete unreadable engineering data for this discipline? Download a raw backup first. This cannot be undone and does not delete PDFs or the old demo data."))try{window.localStorage.removeItem(`pid-mapping-studio:engineering-workspace:v2:${a}`),window.location.reload()}catch{Qe("Device storage cannot be cleared. The saved data has not been changed.")}},children:"Reset unreadable data"}),c.jsx("span",{children:"Local storage only · download backups regularly"})]}),c.jsxs("div",{className:"edm-workspace",children:[c.jsxs("aside",{className:"edm-catalog",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsxs("span",{children:[c.jsx(Sp,{size:15})," Catalog"]}),c.jsx("span",{className:"edm-counter",children:s.length})]}),c.jsxs("div",{className:"edm-catalog-search",children:[c.jsx(si,{size:13}),c.jsx("input",{"aria-label":"Filter drawings",placeholder:"Filter drawings…",value:C,onChange:I=>L(I.target.value),"data-testid":"input-catalog-filter"})]}),c.jsxs("div",{className:"edm-catalog-label",children:["DRAWINGS · ",a.toUpperCase()]}),c.jsxs("div",{className:"edm-drawing-list",children:[s.filter(I=>I.name.toLowerCase().includes(C.toLowerCase())).map(I=>c.jsxs("button",{className:`edm-drawing-item ${u.id===I.id?"selected":""}`,onClick:()=>Dt(I.id),"data-testid":`button-drawing-${I.id}`,children:[c.jsx(Vn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:I.name}),c.jsxs("small",{children:[I.revision," · ",I.rows.length," records"]})]})]},I.id)),!s.some(I=>I.name.toLowerCase().includes(C.toLowerCase()))&&c.jsx("div",{className:"edm-empty",children:"No drawings match."})]}),c.jsxs("form",{className:"edm-create-drawing",onSubmit:La,children:[c.jsxs("label",{children:["Drawing reference",c.jsx("input",{value:x,onChange:I=>R(I.target.value),maxLength:160,required:!0,placeholder:"e.g. PID-001","aria-label":"New drawing reference","data-testid":"input-new-drawing"})]}),c.jsxs("label",{children:["Revision",c.jsx("input",{value:D,onChange:I=>A(I.target.value),maxLength:80,"aria-label":"New drawing revision"})]}),c.jsxs("button",{className:"btn primary",disabled:!!r.error,"data-testid":"button-add-drawing",children:[c.jsx(ri,{size:14})," Add drawing"]})]}),u.id&&c.jsxs("button",{className:"btn danger edm-delete-drawing",disabled:!!r.error,onClick:()=>{if(!window.confirm(`Delete drawing ${u.name} and its ${y.length} records? Download a backup first. This does not delete source PDFs.`))return;const I=s.filter(J=>J.id!==u.id);It(I)&&(m(I[0]?.id??""),v(""),ae(0))},"data-testid":"button-delete-drawing",children:[c.jsx(oi,{size:14})," Delete drawing"]}),c.jsxs("div",{className:"edm-catalog-foot",children:["No invented sample records.",c.jsx("br",{}),"Source PDFs stay in your workspace."]})]}),c.jsxs("section",{className:"edm-main",children:[c.jsxs("section",{className:"edm-preview panel edm-source-summary",children:[c.jsxs("header",{children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"ACTIVE DRAWING RECORD"}),c.jsx("strong",{"data-testid":"text-active-drawing",children:u.name})]}),c.jsx("span",{className:"edm-revision",children:u.revision})]}),c.jsx("p",{children:u.sourcePdfId?`${u.sourceAlias??"PDF"} tag candidates and clearly labelled values are stored here. Every extracted record needs review. Blank fields mean the PDF text/OCR did not provide a clear value.`:"Add records manually or import them from CSV. New PDF tag candidates appear here with a source page and a review status."}),c.jsxs(da,{href:u.sourcePdfId?`/workspace/${a}?pdf=${encodeURIComponent(u.sourcePdfId)}&page=${encodeURIComponent(u.rows.find(I=>I.sourcePdfId)?.sourcePage||"1")}#pdf-workflow-title`:`/workspace/${a}`,className:"btn subtle",children:[c.jsx(Vn,{size:14})," ",u.sourcePdfId?"Open source PDF page":"View original PDFs"]}),c.jsxs("div",{className:"edm-autocad-status",role:"note",children:[c.jsx("strong",{children:"AutoCAD 2020: not connected."})," EDE extraction does not create a DWG."]})]}),c.jsxs("section",{className:"edm-editor panel",children:[c.jsxs("div",{className:"edm-editor-title",children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"DATA WORKSPACE"}),c.jsx("h2",{children:"Engineering Data Editor"})]}),c.jsx("div",{className:"edm-type-chip",children:B})]}),c.jsxs("form",{className:"edm-add-record",onSubmit:ra,children:[c.jsxs("label",{children:["Object type",c.jsx("select",{value:_,onChange:I=>N(I.target.value),"aria-label":"New record type",children:ui.map(I=>c.jsx("option",{children:I},I))})]}),c.jsxs("label",{children:["Item tag",c.jsx("input",{value:S,onChange:I=>P(I.target.value),maxLength:160,required:!0,placeholder:"e.g. P-101","aria-label":"New item tag","data-testid":"input-new-tag"})]}),c.jsxs("button",{className:"btn primary",disabled:!u.id||!!r.error,"data-testid":"button-add-record",children:[c.jsx(ri,{size:14})," Add record"]})]}),c.jsxs("div",{className:"edm-report-actions",children:[c.jsxs("button",{className:"btn",disabled:pe||!Et.length,onClick:()=>{Ke("csv")},"data-testid":"button-export-report",children:[c.jsx(Vr,{size:14})," Current view · CSV"]}),c.jsxs("button",{className:"btn",disabled:pe||!Et.length,onClick:()=>{Ke("xlsx")},"data-testid":"button-export-excel",children:[c.jsx(Vr,{size:14})," Current view · Excel"]}),c.jsxs("label",{className:"btn",children:[c.jsx(Xr,{size:14})," Import CSV",c.jsx("input",{type:"file",accept:".csv,text/csv","aria-label":"Import engineering CSV",disabled:!u.id||!!r.error,onChange:I=>{const J=I.currentTarget.files?.[0];I.currentTarget.value="",J&&en(J,"csv")}})]}),c.jsx("button",{className:"btn subtle",onClick:()=>Il("engineering-import-template.csv",L2([]),"text/csv;charset=utf-8"),"data-testid":"button-csv-template",children:"CSV template"}),c.jsxs("button",{className:"btn danger",disabled:!ke||!!r.error,onClick:cn,"data-testid":"button-delete-record",children:[c.jsx(oi,{size:14})," Delete selected"]})]}),c.jsxs("div",{className:"edm-export-note","aria-live":"polite",children:[c.jsx("span",{children:"Current view: shown columns, filters, sorting and all matching rows across pages. Excel also includes group summaries. CSV has no visual formatting."}),pe&&c.jsx("strong",{role:"status",children:"Preparing export…"}),z&&c.jsx("strong",{role:"status",children:z}),Ce&&c.jsx("strong",{role:"alert",children:Ce})]}),c.jsx(EA,{order:te,hidden:V,onChange:(I,J)=>{U(I),oe(J)}}),c.jsxs("div",{className:"edm-placement-legend","aria-label":"CAD placement status legend",children:[c.jsxs("span",{children:[c.jsx("i",{className:"available","aria-hidden":"true",children:"●"})," Available / not placed"]}),c.jsxs("span",{children:[c.jsx("i",{className:"current","aria-hidden":"true",children:"●"})," On this drawing"]}),c.jsxs("span",{children:[c.jsx("i",{className:"another","aria-hidden":"true",children:"●"})," On another drawing"]}),c.jsx("small",{children:"Based on the saved reference only; CAD is not connected for live verification."})]}),c.jsxs("div",{className:"edm-grid-toolbar",children:[c.jsxs("label",{className:"edm-global-search",children:[c.jsx(si,{size:14}),c.jsx("input",{placeholder:"Search all fields…","aria-label":"Search engineering data",value:w,onChange:I=>{k(I.target.value),ae(0)},"data-testid":"input-engineering-search"})]}),c.jsxs("span",{className:"edm-result-total","data-testid":"text-result-count",children:[At.length," records"]}),c.jsxs("button",{className:"edm-toolbar-button",onClick:()=>{k(""),ee("All types"),j({}),ae(0)},"data-testid":"button-clear-filters",children:[c.jsx(Uu,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"edm-groups",onDragOver:I=>I.preventDefault(),onDrop:pa,"data-testid":"drop-column-group",children:[c.jsx("span",{children:"GROUP BY"}),Q.length?Q.map(I=>c.jsxs("button",{onClick:()=>me(J=>J.filter(he=>he!==I)),title:"Remove group",children:[kt[I]," ",c.jsx("b",{children:"×"})]},I)):c.jsx("em",{children:"Drag a column header here to group records"})]}),c.jsxs("label",{className:"edm-group-select",children:["Add group",c.jsxs("select",{value:"","aria-label":"Add group",onChange:I=>{I.target.value&&(Tn(I.target.value),ae(0))},children:[c.jsx("option",{value:"",children:"Choose a column…"}),Hn.filter(I=>!Q.includes(I)).map(I=>c.jsx("option",{value:I,children:kt[I]},I))]})]}),c.jsx("p",{className:"edm-table-sizing-help",children:"Drag a column edge to resize it. Double-click an edge to fit the text."}),_a.map(I=>c.jsxs("div",{className:"edm-group-summary",children:[c.jsx("strong",{children:I.label}),I.values.map(({value:J,count:he})=>c.jsxs("span",{children:[J,c.jsx("i",{children:he})]},J))]},I.field)),c.jsx("div",{className:"edm-table-wrap",children:c.jsxs("table",{ref:Le,className:"edm-table",style:{width:F,minWidth:F},children:[c.jsx("colgroup",{children:Mt.map(I=>c.jsx("col",{style:{width:yt(I)}},I))}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsxs("th",{className:"edm-rownum",children:[c.jsx("div",{className:"edm-column-heading",children:c.jsx("span",{className:"edm-column-heading-label",children:"#"})}),Qt("rowNumber","row number")]}),c.jsxs("th",{children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsx("span",{className:"edm-column-heading-label",children:"Object type"}),c.jsx(Oy,{label:"Object type",options:ka.type,selectedValues:xe.type,onApply:I=>Ia("type",I)})]}),Qt("type","Object type")]}),dt.map(I=>c.jsxs("th",{draggable:!0,onDragStart:J=>J.dataTransfer.setData("text/engineering-field",I),children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsxs("button",{className:"edm-column-sort",title:Ms[I],onClick:()=>Gn(I),"data-testid":`button-sort-${I}`,children:[kt[I],c.jsx("span",{children:ce.field===I?ce.direction===1?"↑":"↓":"↕"})]}),c.jsx(Oy,{label:kt[I],options:ka[I],selectedValues:xe[I],onApply:J=>Ia(I,J)})]}),Qt(I,kt[I])]},I))]})}),c.jsxs("tbody",{children:[ut.map((I,J)=>{const he=b===I.id,Ue=C2(I,u),M=Ue==="current"?"On this drawing":Ue==="another"?"On another drawing":"Available / not placed";return c.jsxs("tr",{className:he?"selected":"","data-stable-id":I.id,"data-placement-status":Ue,onClick:()=>v(I.id),"data-testid":`row-engineering-${I.id}`,children:[c.jsx("td",{className:"edm-rownum",children:X*we+J+1}),c.jsx("td",{children:c.jsx("span",{className:`edm-type-badge ${I.type.toLowerCase().replace(/\s+/g,"-")}`,children:I.type})}),dt.map(re=>{const Ee=bn(I,re);return re==="notes"?c.jsx("td",{className:"edm-notes-cell",children:he?c.jsx("textarea",{"aria-label":`Notes for ${I.itemTag}`,rows:2,maxLength:2e3,value:Ee,onClick:Se=>Se.stopPropagation(),onChange:Se=>wt(I.id,re,Se.target.value),"data-testid":`input-cell-${I.id}-${re}`}):c.jsx("span",{title:Ee,children:Ee||"—"})},re):re==="itemTag"?c.jsxs("td",{className:"mono edm-item-tag-cell",children:[c.jsxs("span",{className:`edm-placement-indicator ${Ue}`,"aria-label":`Placement: ${M}`,title:`Placement: ${M}`,children:[c.jsx("i",{"aria-hidden":"true",children:"●"}),c.jsx("span",{children:M})]}),he?c.jsx("input",{className:"edm-item-tag-editor","aria-label":`${kt[re]} for ${I.itemTag}`,value:Ee,onClick:Se=>Se.stopPropagation(),onChange:Se=>wt(I.id,re,Se.target.value),"data-testid":`input-cell-${I.id}-${re}`}):c.jsx("span",{className:`edm-tag-value ${Ue}`,"data-testid":`text-item-tag-${I.id}`,children:Ee})]},re):c.jsx("td",{className:re==="stableId"?"mono":"",children:re==="stableId"?c.jsx("span",{className:"edm-stable-id-value",title:Ee,"aria-label":`Stable ID ${Ee}`,children:Ee}):he&&(re==="reviewStatus"||re==="groupStatus")?c.jsx("select",{"aria-label":`${kt[re]} for ${I.itemTag}`,value:Ee,onClick:Se=>Se.stopPropagation(),onChange:Se=>wt(I.id,re,Se.target.value),"data-testid":`input-cell-${I.id}-${re}`,children:(re==="reviewStatus"?["Needs review","Reviewed","Manual"]:["","Start","Continue","Branch","Merge","End-of-Group"]).map(Se=>c.jsx("option",{value:Se,children:Se||"Not set"},Se))}):he?c.jsx("input",{"aria-label":`${kt[re]} for ${I.itemTag}`,value:Ee,onClick:Se=>Se.stopPropagation(),onChange:Se=>wt(I.id,re,Se.target.value),"data-testid":`input-cell-${I.id}-${re}`}):c.jsx("span",{title:Ee,children:Ee||"—"})},re)})]},I.id)}),!ut.length&&c.jsx("tr",{children:c.jsx("td",{colSpan:dt.length+2,children:c.jsx("div",{className:"edm-empty",children:"No records match these filters."})})})]})]})}),c.jsxs("footer",{className:"edm-pagination",children:[c.jsxs("span",{children:["Showing ",c.jsxs("strong",{children:[Et.length?X*we+1:0,"–",Math.min((X+1)*we,Et.length)]})," of ",c.jsx("strong",{children:Et.length})]}),c.jsxs("label",{children:["Rows ",c.jsx("select",{value:we,onChange:I=>{ue(Number(I.target.value)),ae(0)},"aria-label":"Rows per page","data-testid":"select-page-size",children:[8,12,24,36].map(I=>c.jsx("option",{value:I,children:I},I))})," per page"]}),c.jsxs("div",{className:"edm-page-controls",children:[c.jsx("button",{disabled:X===0,onClick:()=>fa(X-1),"aria-label":"Previous page","data-testid":"button-page-previous",children:c.jsx(Gy,{size:15})}),c.jsxs("span",{children:["Page ",X+1," of ",Jt]}),c.jsx("button",{disabled:X>=Jt-1,onClick:()=>fa(X+1),"aria-label":"Next page","data-testid":"button-page-next",children:c.jsx(xp,{size:15})})]})]})]})]}),c.jsxs("aside",{className:"edm-properties panel",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsx("span",{children:"Properties"}),c.jsx("span",{className:"edm-counter",children:ke?"EDIT":""})]}),c.jsxs("details",{className:"edm-field-guide",children:[c.jsx("summary",{children:"What do these fields mean?"}),c.jsx("dl",{children:Hn.map(I=>c.jsxs("div",{children:[c.jsx("dt",{children:kt[I]}),c.jsx("dd",{children:Ms[I]})]},I))})]}),ke&&c.jsxs("label",{className:"edm-record-type",children:["Object type",c.jsx("select",{value:ke.type,"aria-label":"Selected record type",disabled:!!r.error,onChange:I=>Ut(y.map(J=>J.id===ke.id?{...J,type:I.target.value}:J)),children:ui.map(I=>c.jsx("option",{children:I},I))})]}),ke?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"edm-property-summary",children:[c.jsx("span",{className:"edm-property-icon",children:NA(ke.type)}),c.jsxs("div",{children:[c.jsx("strong",{"data-testid":"text-selected-tag",children:ke.itemTag}),c.jsxs("small",{children:[ke.type," · ",u.revision]})]})]}),(ke.sourcePdfId??u.sourcePdfId)&&c.jsxs(da,{className:"btn subtle edm-source-locate",href:`/workspace/${a}?pdf=${encodeURIComponent(ke.sourcePdfId??u.sourcePdfId??"")}&page=${encodeURIComponent(String(ke.sourceLocations?.[0]?.pageNumber??ke.sourcePage??"1"))}&record=${encodeURIComponent(ke.id)}#pdf-workflow-title`,"data-testid":"link-selected-source-location",children:[c.jsx(Vn,{size:13})," Locate on source PDF",c.jsx("small",{children:ke.sourceLocations?.length?`${ke.sourceLocations.length} OCR location(s) · review required`:`Page ${ke.sourcePage||"1"} · no exact position saved`})]}),c.jsxs("div",{className:"edm-stable-id-panel",children:[c.jsx("span",{children:"STABLE ID"}),c.jsx("code",{"data-testid":"text-stable-id",children:ke.id}),c.jsx("small",{children:"Permanent record identity. It does not change with the tag or drawing."})]}),c.jsxs("div",{className:"edm-property-scroll",children:[c.jsx("div",{className:"edm-property-group",children:"IDENTIFICATION"}),["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef"].map(I=>c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Ms[I],children:kt[I]}),c.jsx("input",{value:ke[I],onChange:J=>wt(ke.id,I,J.target.value),"data-testid":`property-${I}`})]},I)),c.jsx("div",{className:"edm-property-group",children:"CAD PLACEMENT"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Ms.placementDrawingRef,children:kt.placementDrawingRef}),c.jsx("input",{list:"edm-placement-drawings",value:ke.placementDrawingRef,onChange:I=>wt(ke.id,"placementDrawingRef",I.target.value),"data-testid":"property-placementDrawingRef",placeholder:"Blank = available / not placed"}),c.jsx("small",{children:"Reference only. This browser is not connected to CAD geometry."})]}),c.jsx("datalist",{id:"edm-placement-drawings",children:s.map(I=>c.jsx("option",{value:I.name},I.id))}),c.jsx("div",{className:"edm-property-group",children:ke.type==="Pipe Run"?"PIPE RUN & PROCESS":"PROCESS & CONNECTION"}),(ke.type==="Pipe Run"?["nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description"]:["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","opcDrawing","connection","description"]).map(I=>{const J=I;return c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Ms[J],children:kt[J]}),J==="groupStatus"?c.jsx("select",{value:ke.groupStatus,onChange:he=>wt(ke.id,"groupStatus",he.target.value),"aria-label":"Pipe run group status",children:["","Start","Continue","Branch","Merge","End-of-Group"].map(he=>c.jsx("option",{value:he,children:he||"Not set"},he))}):c.jsx("input",{value:ke[J],onChange:he=>wt(ke.id,J,he.target.value),"data-testid":`property-${J}`})]},J)}),c.jsx("div",{className:"edm-property-group",children:"NOTES"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Ms.notes,children:kt.notes}),c.jsx("textarea",{rows:5,maxLength:2e3,value:ke.notes,onChange:I=>wt(ke.id,"notes",I.target.value),"data-testid":"property-notes"})]})]}),c.jsxs("div",{className:"edm-save-state",role:"status","data-testid":"status-local-save",children:[c.jsx("span",{})," Edits save automatically in this browser"]})]}):c.jsx("div",{className:"edm-empty",children:"Select a graphic or table row to inspect properties."})]})]}),c.jsxs("footer",{className:"edm-footnote",children:[c.jsx("span",{children:"© 2026 gaurav.cbiindia · DEVICE-LOCAL DATA"}),c.jsxs("span",{children:[y.length," records · ",u.name," · ",a.toUpperCase(),"-isolated browser storage"]})]}),Ie&&c.jsx("div",{className:"edm-storage-error",role:"alert","data-testid":"status-storage-error",children:Ie})]})}function RA({assetId:a,candidateId:r,blockName:s,entityType:o,description:l,disabled:p,onDescriptionChange:g}){const[f,m]=q.useState(null),[u,y]=q.useState("");q.useEffect(()=>{let v=!0;return m(null),y(""),$b(a).then(x=>{v&&m(x)},x=>{v&&y(x instanceof Error?x.message:"Preview could not be read.")}),()=>{v=!1}},[a]);const b=o==="directionArrow"?[]:(f?.nearbyLabels??[]).filter(v=>!Pp(v));return c.jsxs("section",{className:"cad-block-review-visual","aria-label":`Identify block ${s}`,"data-testid":`preview-block-${r}`,children:[c.jsxs("div",{className:"cad-block-review-image",children:[f?.previewSvg?c.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(f.previewSvg)}`,alt:`DXF geometry preview of block ${s}`,"data-testid":`img-block-${r}`}):c.jsxs("div",{className:"cad-block-preview-empty",role:"status",children:[c.jsx("strong",{children:u?"Preview could not load":f?"Overview DXF needed":"Loading local preview…"}),c.jsx("span",{children:u||(f?"Run PIDEXPORTOVERVIEW on the original SOURCE drawing. Add its *_OVERVIEW.dxf to the existing extraction ZIP and import again. Do not repeat the full block extraction.":"")})]}),c.jsx("small",{children:"Visual aid only—not a fidelity check. Fonts, hatches, masks and some CAD entities may be simplified or absent."})]}),c.jsxs("div",{className:"cad-block-review-labels",children:[c.jsx("strong",{children:o==="directionArrow"?"Direction Arrow":"Nearby legend text"}),c.jsx("small",{children:o==="directionArrow"?"Kept as its own P&ID entity; no equipment, instrument, or component name is inferred from nearby text.":"Suggested by position, not confirmed identity. Multiple parts may share one assembly description."}),b.length?c.jsx("div",{className:"cad-block-label-choices",children:b.map((v,x)=>c.jsx("button",{type:"button",className:"btn subtle",disabled:p,onClick:()=>g(v),"data-testid":`button-use-label-${r}-${x}`,children:v},`${v}-${x}`))}):c.jsx("p",{"data-testid":`status-no-label-${r}`,children:o==="directionArrow"?f?.sourcePlacements?.length?`Source insert context retained: ${f.sourcePlacements.map(v=>`${v.layer}, ${v.rotationDegrees}° (${v.count})`).join("; ")}.`:"Source rotation and layer context will be used if an overview DXF is available.":f?.labelMatchAmbiguous?"Ambiguous: this block is used beside different legend labels. No item name is suggested; verify it from the source.":f?.labelMatchSkipped?"Skipped: this insert is on layer 0 or a primary process-pipe layer, so its nearby label is not used as an item mapping.":f?.previewSvg?"No nearby label found. Verify the source drawing and enter the description below.":"Label suggestions appear after an overview DXF is imported."}),c.jsxs("label",{children:[c.jsx("span",{children:"Confirmed item description"}),c.jsx("input",{value:l,onChange:v=>g(v.target.value),placeholder:"Verify the source, then enter the real item name",disabled:p,"data-testid":`input-item-description-${r}`})]}),c.jsx("small",{children:"Saved only when you approve this record. A label does not automatically choose a category or CAD layer."})]})]})}const vv={titleBlock:"Title block",layer:"Layer",textStyle:"Text style",linetype:"Linetype",dimensionStyle:"Dimension style",symbol:"Symbol",directionArrow:"Direction Arrow",legend:"Legend"};function Wo(a){return vv[a]??"CAD standard"}function kA(a,r){if(a.proposedScope==="project"&&a.projectId){const s=[...new Set(r.filter(o=>o.proposedScope==="project"&&o.projectId).map(o=>o.projectId))].sort();return`Project ${String(s.indexOf(a.projectId)+1).padStart(2,"0")}`}if(a.proposedScope==="company"){const s=[...new Set(r.filter(o=>o.proposedScope==="company").map(o=>o.sourceGroup))].sort();return`Legends Library source ${String(s.indexOf(a.sourceGroup)+1).padStart(2,"0")}`}return"Unclassified source"}function Uy(a,r){return`Project ${String(r.indexOf(a)+1).padStart(2,"0")}`}function mn(a,r){return a.find(s=>s.label===r)?.value.trim()??""}function Fy({value:a,disabled:r,onChange:s}){let o=null,l="";try{o=Gr(a)}catch(D){l=D instanceof Error?D.message:"Enter a valid X,Y outline."}const p=o?.map(([D])=>D)??[],g=o?.map(([,D])=>D)??[],f=Math.min(...p),m=Math.max(...p),u=Math.min(...g),y=Math.max(...g),b=m-f||1,v=y-u||1,x=9,R=o?.map(([D,A])=>`${x+(D-f)/b*(160-x*2)},${90-x-(A-u)/v*(90-x*2)}`).join(" ");return c.jsxs("label",{className:"candidate-fallback-category valve-mask-editor",children:[c.jsxs("span",{children:["Valve-body Wipeout outline ",c.jsx("small",{children:"Reviewed block-local X,Y points; do not include pipe tails. Separate points with semicolons."})]}),c.jsx("textarea",{value:a,onChange:D=>s(D.target.value),placeholder:"x,y; x,y; x,y; …","aria-label":"Valve-body Wipeout outline points",rows:3,disabled:r}),c.jsx("small",{className:"candidate-layer-help",children:"Enter vertices in order using the valve block’s local drawing units. The small preview shows only the mask contour, not the source CAD block."}),o&&R?c.jsx("svg",{className:"valve-mask-preview",viewBox:"0 0 160 90",role:"img","aria-label":"Preview of the saved valve mask outline",children:c.jsx("polygon",{points:R})}):c.jsx("small",{className:"candidate-layer-help",children:l}),c.jsx("small",{className:"candidate-layer-help",children:"The runner masks only inside this polygon, leaves the underlying Pipe Run continuous, and draws the valve block on top."})]})}function wr(a,r){const s=mn(a.item.fields,"Source discipline");if(s!=="PFD"&&s!=="P&ID"&&s!=="Shared")return[];const g=[...(a.proposedScope==="company"?"company":"project")==="project"&&a.projectId?r.projects[a.projectId]?.items??[]:[],...r.companyItems].filter(f=>{if(f.category!=="layer"||f.sourceKind!=="extracted-dwg"||f.reviewStatus!=="reviewed")return!1;const m=mn(f.fields,"Source discipline");return s==="Shared"?m==="Shared":m==="Shared"||m===s}).map(f=>mn(f.fields,"CAD name")).filter(f=>f&&f.toUpperCase()!=="0");return[...new Set(g)].sort((f,m)=>f.localeCompare(m))}function _A({library:a,reviewCandidates:r,onApproveCompany:s,onApproveProject:o,onDismiss:l,onUpdateReviewedItem:p,onSetCompanyDefault:g,onSetProjectDefault:f,storageNotice:m="",readOnly:u=!1,reviewOnly:y=!1,backHref:b="/"}){const[v,x]=q.useState("company"),[R,D]=q.useState(""),[A,S]=q.useState("all"),[P,_]=q.useState(""),[N,w]=q.useState(0),[k,C]=q.useState(""),[L,B]=q.useState({}),[ee,X]=q.useState({}),[ae,we]=q.useState({}),[ue,ce]=q.useState({}),[Y,Q]=q.useState({}),[me,xe]=q.useState({}),j=20,te=q.useMemo(()=>Object.keys(a.projects).sort(),[a.projects]),U=te.includes(P)?P:te[0]??"",V=r.filter(z=>z.status==="needs-review"),oe=r.filter(z=>z.status==="approved").length,de=r.filter(z=>z.status==="dismissed").length,ve=z=>me[z.id]??z.item.category,qe=(z,fe)=>{const Ce=ve(z),ye=z.item.sourceKind==="extracted-dwg"&&!!z.item.fields.find(be=>be.label==="Block asset ID")?.value.trim(),Ie=(L[z.id]??z.item.fields.find(be=>be.label==="Fallback category")?.value??"").trim(),Qe=ee[z.id]??z.item.fields.find(be=>be.label==="Target CAD layer")?.value??"";if(Ce==="symbol"&&ye&&!Ie){C("Enter the real equipment category (such as pump or valve) before approving an extracted block.");return}if(Ce==="symbol"&&ye&&!wr(z,a).includes(Qe)){C(wr(z,a).length?"Choose an approved non-zero CAD layer for this block before approving it.":"Approve a matching Equipment, Instrument, or other placement layer first. Layer 0 cannot be used for block placement.");return}const Ve=ae[z.id]??z.item.fields.find(be=>be.label==="Wipeout mask boundary")?.value??"";if(Ce==="symbol"&&Ie.toLowerCase()==="valve")try{Gr(Ve)}catch(be){C(be instanceof Error?be.message:"Enter and review a valve-body Wipeout outline before approval.");return}C("");const Me=ye?Ce==="directionArrow"?[{label:"Entity type",value:"Direction Arrow"},{label:"Item description",value:Y[z.id]||"Direction Arrow"}]:[{label:"Fallback category",value:Ie},{label:"Target CAD layer",value:Qe},{label:"Item description",value:Y[z.id]??mn(z.item.fields,"Item description")},...Ie.toLowerCase()==="valve"?[{label:"Wipeout mask boundary",value:Ve}]:[]]:void 0;(fe==="company"?s:o)(z.id,Me,ye?Ce:void 0)&&C(fe==="company"?"Approved and added to the Legends Library.":"Approved and added to the project library.")},Le=z=>{l(z)&&C("Record dismissed from the review queue.")},mt=(z,fe)=>{const Ce=ue[z]??fe.find(ye=>ye.label==="Wipeout mask boundary")?.value??"";try{Gr(Ce)}catch(ye){C(ye instanceof Error?ye.message:"Enter a valid valve-body mask outline.");return}p(z,[{label:"Wipeout mask boundary",value:Ce}])&&C("Reviewed valve-body mask saved to the Legends Library.")},nt=q.useMemo(()=>{const z=R.trim().toLowerCase();return V.filter(fe=>{const Ce=ve(fe),ye=A==="all"||Ce===A,Ie=fe.item.fields.some(Qe=>`${Qe.label} ${Qe.value}`.toLowerCase().includes(z));return ye&&(!z||Ie||Wo(Ce).toLowerCase().includes(z))})},[V,R,A,me]),ot=Math.max(1,Math.ceil(nt.length/j)),dt=Math.min(N,ot-1),Mt=nt.slice(dt*j,(dt+1)*j);q.useEffect(()=>w(0),[R,A]);const F=(v==="company"?a.companyItems:a.projects[U]?.items??[]).filter(z=>{const fe=R.trim().toLowerCase(),Ce=A==="all"||z.category===A,ye=z.fields.some(Ie=>`${Ie.label} ${Ie.value}`.toLowerCase().includes(fe));return Ce&&(!fe||ye||Wo(z.category).toLowerCase().includes(fe))}),pe=(z,fe)=>{if(!Hr.includes(fe))return;const Ce=fe,ye=a.companyItems.some(Ie=>Ie.category==="titleBlock"&&Ie.reviewStatus==="reviewed"&&(Ie.sheetSize===Ce||Ie.fields.some(Qe=>Qe.label==="Sheet size"&&Qe.value===Ce)));if(Ce!==a.companyDefaults[z]&&!ye){C(`Approve a company title-block mapping for ${Ce} before changing this default.`);return}C(""),g(z,Ce)},ge=(z,fe,Ce)=>{if(!Hr.includes(Ce))return;const ye=Ce;if(![...a.projects[z]?.items??[],...a.companyItems].some(Ve=>Ve.category==="titleBlock"&&Ve.reviewStatus==="reviewed"&&(Ve.sheetSize===ye||Ve.fields.some(Me=>Me.label==="Sheet size"&&Me.value===ye)))){C(`Approve a title-block mapping for ${ye} before saving this project default.`);return}C(""),f(z,fe,ye)};return c.jsxs("main",{className:`standards-page${y?" standards-review-only":""}`,children:[c.jsxs("header",{className:"standards-topbar",children:[c.jsxs(da,{href:y?b:"/",className:"standards-brand","data-testid":"link-standards-home",children:[c.jsx("span",{className:"standards-mark",children:"PM"}),c.jsxs("span",{children:["Mapping Studio",c.jsx("small",{children:y?"Legends Library / review":"Drafting standards / browser-local"})]})]}),c.jsxs("div",{className:"standards-top-meta",children:[c.jsxs("span",{className:"standards-local",children:[c.jsx("i",{}),u?"Read only · storage issue":"Browser-local"]}),c.jsx("span",{className:"standards-version",children:"LIBRARY · 1.0"})]})]}),c.jsxs("div",{className:"standards-content",children:[c.jsxs("section",{className:"standards-intro",children:[c.jsxs("div",{children:[y&&c.jsxs(da,{className:"standards-return",href:b,children:["← Back to ",b.endsWith("/pfd")?"PFD":"P&ID"," workspace"]}),c.jsxs("div",{className:"standards-eyebrow",children:[y?"Legends Library":"Standards library"," ",c.jsx("span",{children:"/"})," human review"]}),c.jsx("h1",{children:y?"Review extracted standards":"Drafting standards"}),c.jsx("p",{children:y?"Check extracted blocks, layers, text styles, and line types. Nothing becomes part of the Legends Library until you approve it.":"Inspect source-derived CAD values before they become defaults. Project choices stay separate from the Legends Library."})]}),c.jsxs("div",{className:"standards-local-seal",children:[c.jsx(Xn,{size:15}),c.jsxs("span",{children:["LOCAL ONLY",c.jsx("small",{children:"Nothing is uploaded or shared"})]})]})]}),c.jsxs("div",{className:"standards-trust-note",children:[c.jsx($u,{size:16}),c.jsxs("span",{children:[c.jsx("strong",{children:"Review before use."})," ",y?"Each extracted record remains pending until you approve it to the Legends Library or dismiss it. Source filenames are hidden.":"Source-derived values remain unapproved until you choose a scope. Company/client identifiers and source file names are hidden here."]}),c.jsxs("span",{className:"standards-schema",children:["SCHEMA ",a.schemaVersion]})]}),m&&c.jsx("div",{className:"standards-storage-banner",role:"alert",children:m}),c.jsxs("section",{className:"standards-metrics","aria-label":"Review summary",children:[c.jsxs("div",{className:"standards-metric metric-pending",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(Sr,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Awaiting review"}),c.jsx("strong",{children:V.length.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"SOURCE MAPPINGS"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(Tm,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Approved from queue"}),c.jsx("strong",{children:oe.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"HUMAN CONFIRMED"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(wp,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Dismissed"}),c.jsx("strong",{children:de.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"NOT IN LIBRARY"})]})]}),c.jsxs("div",{className:"standards-layout",children:[c.jsxs("section",{className:"standards-review panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"INBOX / SOURCE-DERIVED"}),c.jsxs("h2",{children:[c.jsx(iw,{size:17}),"Review queue"]})]}),c.jsxs("span",{className:"standards-count",children:[V.length," pending"]})]}),c.jsxs("div",{className:"standards-controls",children:[c.jsxs("label",{className:"standards-search",children:[c.jsx(si,{size:14}),c.jsx("input",{value:R,onChange:z=>D(z.target.value),placeholder:"Search CAD field values…","aria-label":"Search standards","data-testid":"input-standards-search"})]}),c.jsxs("label",{className:"standards-filter",children:[c.jsx(Uu,{size:13}),c.jsxs("select",{"aria-label":"Filter by category",value:A,onChange:z=>S(z.target.value),"data-testid":"select-standards-category",children:[c.jsx("option",{value:"all",children:"All categories"}),Object.entries(vv).map(([z,fe])=>c.jsx("option",{value:z,children:fe},z))]}),c.jsx(xr,{size:13})]})]}),k&&c.jsx("div",{className:"standards-action-note",role:"status",children:k}),c.jsxs("div",{className:"standards-candidate-list",children:[Mt.map(z=>{const fe=ve(z),Ce=z.item.sourceKind==="extracted-dwg"&&!!mn(z.item.fields,"Block asset ID");return c.jsxs("article",{className:"candidate-card","data-testid":`candidate-${z.id}`,children:[c.jsxs("div",{className:"candidate-top",children:[c.jsxs("div",{className:"candidate-category",children:[c.jsx("span",{className:"candidate-glyph",children:c.jsx(Ko,{size:15})}),c.jsxs("span",{children:[c.jsx("strong",{children:Wo(fe)}),c.jsxs("small",{children:[kA(z,r)," · ",z.proposedScope==="project"?"Project proposal":z.proposedScope==="company"?"Pending review":"Scope not classified"]})]})]}),c.jsxs("span",{className:"candidate-status",children:[c.jsx("i",{}),"Needs review"]})]}),Ce&&c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsx("span",{children:"Review entity as"}),c.jsxs("select",{value:fe==="directionArrow"?"directionArrow":"symbol",onChange:ye=>{C(""),xe(Ie=>({...Ie,[z.id]:ye.target.value}))},"aria-label":`Review entity type for ${z.item.name}`,disabled:u,"data-testid":`select-entity-role-${z.id}`,children:[c.jsx("option",{value:"symbol",children:"Equipment / instrument / component symbol"}),c.jsx("option",{value:"directionArrow",children:"Direction Arrow"})]}),fe==="directionArrow"&&c.jsx("small",{children:"Kept separate from equipment matching. Source insert layers and rotations are retained for later pipe alignment."})]}),(fe==="symbol"||fe==="directionArrow")&&z.item.sourceKind==="extracted-dwg"&&mn(z.item.fields,"Block asset ID")&&c.jsx(RA,{assetId:mn(z.item.fields,"Block asset ID"),candidateId:z.id,blockName:mn(z.item.fields,"Block name"),entityType:fe,description:Y[z.id]??(fe==="directionArrow"?"Direction Arrow":mn(z.item.fields,"Item description")),disabled:u,onDescriptionChange:ye=>Q(Ie=>({...Ie,[z.id]:ye}))}),c.jsx("div",{className:"candidate-fields","aria-label":`${Wo(fe)} CAD standard values`,children:z.item.fields.filter(ye=>fe!=="directionArrow"||!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(ye.label)).map((ye,Ie)=>c.jsxs("div",{className:"candidate-field",children:[c.jsx("span",{children:ye.label}),c.jsx("strong",{children:ye.value||"—"})]},`${ye.label}-${Ie}`))}),fe==="symbol"&&Ce&&c.jsxs(c.Fragment,{children:[c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Fallback category ",c.jsx("small",{children:"Required for safe same-category substitution"})]}),c.jsx("input",{value:L[z.id]??z.item.fields.find(ye=>ye.label==="Fallback category")?.value??"",onChange:ye=>{C(""),B(Ie=>({...Ie,[z.id]:ye.target.value}))},placeholder:"For example: pump, valve, or instrument","aria-label":`Fallback category for ${z.item.name}`})]}),(L[z.id]??z.item.fields.find(ye=>ye.label==="Fallback category")?.value??"").trim().toLowerCase()==="valve"&&c.jsx(Fy,{value:ae[z.id]??z.item.fields.find(ye=>ye.label==="Wipeout mask boundary")?.value??"",disabled:u,onChange:ye=>{C(""),we(Ie=>({...Ie,[z.id]:ye}))}}),c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Target CAD layer ",c.jsx("small",{children:"Actual approved layer; layer 0 is not allowed"})]}),c.jsxs("select",{value:ee[z.id]??z.item.fields.find(ye=>ye.label==="Target CAD layer")?.value??"",onChange:ye=>{C(""),X(Ie=>({...Ie,[z.id]:ye.target.value}))},"aria-label":`Target CAD layer for ${z.item.name}`,disabled:u||wr(z,a).length===0,children:[c.jsx("option",{value:"",children:wr(z,a).length?"Select an approved CAD layer…":"Approve a compatible layer first"}),wr(z,a).map(ye=>c.jsx("option",{value:ye,children:ye},ye))]}),c.jsx("small",{className:"candidate-layer-help",children:wr(z,a).length?"The AutoCAD runner will put the inserted block reference on this layer.":"Review and approve the matching source layer first. No layer is guessed automatically."}),c.jsx("small",{className:"candidate-layer-help",children:"Stated Legends layers: equipment uses EQUIP or f_EQUIP; instruments use f_Inst. Extract and approve the matching layer before it appears here."})]})]}),c.jsxs("div",{className:"candidate-actions",children:[c.jsx("span",{className:"candidate-scope-note",children:z.proposedScope==="project"?"Approve into isolated project library":z.proposedScope==="company"?"Approve to the Legends Library":"Unclassified source · project-only approval"}),(()=>{const ye=fe==="symbol"&&Ce;return z.proposedScope==="company"?c.jsxs("button",{className:"btn primary",onClick:()=>qe(z,"company"),disabled:u,title:ye&&wr(z,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-company-${z.id}`,children:[c.jsx($s,{size:14}),"Approve to Legends Library"]}):c.jsxs("button",{className:"btn primary",onClick:()=>qe(z,"project"),disabled:u,title:ye&&wr(z,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-project-${z.id}`,children:[c.jsx($s,{size:14}),"Approve to project"]})})(),c.jsx("button",{className:"btn subtle",onClick:()=>Le(z.id),disabled:u,"data-testid":`button-dismiss-${z.id}`,children:"Dismiss"})]})]},z.id)}),!Mt.length&&c.jsxs("div",{className:"standards-empty",children:[c.jsx("span",{className:"empty-seal",children:V.length?c.jsx(si,{size:20}):c.jsx(Tm,{size:20})}),c.jsx("strong",{children:V.length?"No source mappings match":"Review queue is clear"}),c.jsx("p",{children:V.length?"Try another field value or category.":"New source-derived standards will appear here for human review."}),R||A!=="all"?c.jsx("button",{className:"btn subtle",onClick:()=>{D(""),S("all")},children:"Clear filters"}):null]})]}),nt.length>j&&c.jsxs("div",{className:"candidate-pagination",children:[c.jsxs("span",{children:["Showing ",dt*j+1,"–",Math.min((dt+1)*j,nt.length)," of ",nt.length," matching mappings"]}),c.jsxs("div",{children:[c.jsx("button",{className:"btn subtle",onClick:()=>w(z=>Math.max(0,z-1)),disabled:dt===0,children:"Previous"}),c.jsxs("span",{children:["Page ",dt+1," of ",ot]}),c.jsx("button",{className:"btn subtle",onClick:()=>w(z=>Math.min(ot-1,z+1)),disabled:dt>=ot-1,children:"Next"})]})]}),c.jsxs("footer",{className:"standards-list-foot",children:[c.jsx("span",{children:"CAD field values only"}),c.jsx("span",{children:"Source labels anonymized"})]})]}),!y&&c.jsxs("aside",{className:"standards-side",children:[c.jsxs("section",{className:"defaults-panel panel",children:[c.jsx("div",{className:"standards-panel-head",children:c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"ACTIVE CONFIGURATION"}),c.jsxs("h2",{children:[c.jsx(Uu,{size:16}),"Sheet-size defaults"]})]})}),c.jsxs("div",{className:"default-scope-tabs",role:"tablist","aria-label":"Defaults scope",children:[c.jsx("button",{role:"tab","aria-selected":v==="company",className:v==="company"?"selected":"",onClick:()=>x("company"),children:"Company"}),c.jsxs("button",{role:"tab","aria-selected":v==="projects",className:v==="projects"?"selected":"",onClick:()=>x("projects"),children:["Projects ",c.jsx("span",{children:te.length})]})]}),v==="projects"&&c.jsx("div",{className:"project-picker",children:te.length?c.jsxs("label",{children:[c.jsx("span",{children:"PROJECT LIBRARY"}),c.jsxs("div",{children:[c.jsx("select",{value:U,onChange:z=>_(z.target.value),"aria-label":"Select project library",children:te.map(z=>c.jsx("option",{value:z,children:Uy(z,te)},z))}),c.jsx(xr,{size:14})]})]}):c.jsxs("div",{className:"project-none",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(Ko,{size:17})}),c.jsx("strong",{children:"No project overrides yet"}),c.jsx("small",{children:"Project-specific standards will appear here once available."})]})}),c.jsxs("div",{className:"default-table",children:[c.jsxs("div",{className:"default-table-head",children:[c.jsx("span",{children:"DRAWING PURPOSE"}),c.jsx("span",{children:"SIZE"})]}),Ju.map(z=>{const fe=v==="projects"&&U?a.projects[U]?.defaults[z]:void 0,Ce=fe??a.companyDefaults[z];return c.jsxs("div",{className:"default-row",children:[c.jsxs("div",{children:[c.jsx("strong",{children:z}),v==="projects"&&c.jsx("small",{children:fe?"Project override":"Inherited company default"})]}),v==="company"?c.jsxs("label",{className:"size-select",children:[c.jsx("select",{"aria-label":`${z} company sheet size`,value:a.companyDefaults[z],onChange:ye=>pe(z,ye.target.value),disabled:u,children:Hr.map(ye=>c.jsx("option",{value:ye,children:ye},ye))}),c.jsx(xr,{size:13})]}):U?c.jsxs("label",{className:`size-select ${fe?"override":""}`,children:[c.jsx("select",{"aria-label":`${z} project sheet size`,value:Ce,onChange:ye=>ge(U,z,ye.target.value),disabled:u,children:Hr.map(ye=>c.jsx("option",{value:ye,children:ye},ye))}),c.jsx(xr,{size:13})]}):c.jsx("span",{className:"default-value",children:"—"})]},z)})]}),c.jsxs("div",{className:"defaults-note",children:[c.jsx($u,{size:14}),c.jsx("span",{children:"Project selections change only that project. Legends Library defaults remain unchanged."})]})]}),c.jsxs("section",{className:"library-panel panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"APPROVED STANDARDS"}),c.jsxs("h2",{children:[c.jsx(Ko,{size:16}),v==="company"?"Legends Library":"Project library"]})]}),c.jsx("span",{className:"standards-count",children:F.length})]}),c.jsxs("div",{className:"approved-list",children:[F.map(z=>c.jsxs("article",{className:"approved-item",children:[c.jsxs("div",{className:"approved-item-head",children:[c.jsx("span",{className:"approved-glyph",children:c.jsx($s,{size:13})}),c.jsxs("div",{children:[c.jsx("strong",{children:Wo(z.category)}),c.jsx("small",{children:v==="company"?"Legends Library standard":`${Uy(U,te)} · project-only`})]})]}),c.jsx("div",{className:"approved-fields",children:z.fields.map((fe,Ce)=>c.jsxs("div",{children:[c.jsx("span",{children:fe.label}),c.jsx("strong",{children:fe.value||"—"})]},`${fe.label}-${Ce}`))}),z.category==="symbol"&&z.sourceKind==="extracted-dwg"&&mn(z.fields,"Fallback category").toLowerCase()==="valve"&&c.jsxs(c.Fragment,{children:[c.jsx(Fy,{value:ue[z.id]??z.fields.find(fe=>fe.label==="Wipeout mask boundary")?.value??"",disabled:u,onChange:fe=>{C(""),ce(Ce=>({...Ce,[z.id]:fe}))}}),c.jsx("div",{className:"approved-mask-actions",children:c.jsxs("button",{type:"button",className:"btn primary",disabled:u,onClick:()=>mt(z.id,z.fields),"data-testid":`button-save-valve-mask-${z.id}`,children:[c.jsx($s,{size:13}),"Save reviewed outline"]})})]})]},z.id)),!F.length&&c.jsxs("div",{className:"approved-empty",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(Ko,{size:18})}),c.jsx("strong",{children:v==="company"?"No approved Legends Library standards":"No standards in this project"}),c.jsx("small",{children:v==="company"?"Review and approve source mappings to build the Legends Library.":"Project-approved standards remain isolated from Legends Library defaults."})]})]}),c.jsxs("footer",{className:"library-foot",children:[c.jsx("span",{children:"Visible values are standards fields"}),c.jsx("span",{children:"Descriptions hidden"})]})]})]})]}),c.jsxs("footer",{className:"standards-page-foot",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:y?"Only approved mappings are offered to the CAD runner":"Legends Library and project standards are reviewed separately"})]})]})]})}function By({backHref:a}){const[r]=q.useState(()=>{try{return{library:yn(),canSave:!0,error:""}}catch(A){return{library:hS(),canSave:!1,error:A instanceof Error?A.message:"The local standards library could not be loaded."}}}),[s,o]=q.useState(r.library),l=q.useRef(r.library),[p,g]=q.useState(r.canSave),[f,m]=q.useState(r.error),u=A=>{if(!p)return m("The local library could not be read safely. Its saved contents were left unchanged."),!1;let S;try{S=A(l.current)}catch(P){return m(P instanceof Error?P.message:"The standards change could not be applied."),!1}try{return ci(S),l.current=S,o(S),m(""),!0}catch(P){const _=P instanceof Error?P.message:"The standards change could not be saved locally.";return _.startsWith("This browser could not save the CAD standards locally.")&&g(!1),m(_),!1}},y=(A,S,P)=>u(_=>zl(_,A,"company",S,P)),b=(A,S,P)=>u(_=>zl(_,A,"project",S,P)),v=(A,S)=>u(P=>TS(P,A,S)),x=A=>u(S=>AS(S,A)),R=(A,S)=>u(P=>bS(P,A,S)),D=(A,S,P)=>{const _=l.current.projects[A]?.projectName??`Project ${String(Object.keys(l.current.projects).sort().indexOf(A)+1).padStart(2,"0")}`;u(N=>DS(N,A,_,S,P))};return c.jsx(_A,{library:s,reviewCandidates:s.reviewCandidates,reviewOnly:!0,backHref:a,onApproveCompany:y,onApproveProject:b,onUpdateReviewedItem:v,onDismiss:x,onSetCompanyDefault:R,onSetProjectDefault:D,storageNotice:f,readOnly:!p})}const LA="/pid-mapping-studio-app/".replace(/\/$/,"");function IA(){const[a]=eb();return a==="/admin/library"||a.startsWith("/sign-in")||a.startsWith("/sign-up")?c.jsx(tx,{to:"/"}):a==="/portal"||a==="/library"||a==="/"?c.jsx(p1,{}):a==="/workspace/pfd"?c.jsx(Py,{discipline:"pfd"}):a==="/workspace/pid"?c.jsx(Py,{discipline:"pid"}):a==="/workspace/pfd/engineering-data"?c.jsx($y,{discipline:"pfd"}):a==="/workspace/pid/engineering-data"?c.jsx($y,{discipline:"pid"}):a==="/standards-review/pfd"?c.jsx(By,{backHref:"/workspace/pfd"}):a==="/standards-review/pid"?c.jsx(By,{backHref:"/workspace/pid"}):c.jsx(f1,{})}function PA(){return c.jsx(ex,{base:LA,children:c.jsx(u1,{children:c.jsx(IA,{})})})}Ep.createRoot(document.getElementById("root"),{onCaughtError:(a,r)=>{console.error(a,r.componentStack)}}).render(c.jsx(PA,{}));export{sn as _,jA as a,qb as c,fi as g,_p as v,qA as w};
