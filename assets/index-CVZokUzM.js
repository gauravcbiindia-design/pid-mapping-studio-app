const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-FgznAYNU.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/exceljs.min-CerR561A.js"])))=>i.map(i=>d[i]);
function $l(a,s){for(var o=0;o<s.length;o++){const i=s[o];if(typeof i!="string"&&!Array.isArray(i)){for(const l in i)if(l!=="default"&&!(l in a)){const p=Object.getOwnPropertyDescriptor(i,l);p&&Object.defineProperty(a,l,p.get?p:{enumerable:!0,get:()=>i[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const p of l)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function o(l){const p={};return l.integrity&&(p.integrity=l.integrity),l.referrerPolicy&&(p.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?p.credentials="include":l.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function i(l){if(l.ep)return;l.ep=!0;const p=o(l);fetch(l.href,p)}})();var H2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ai(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function by(a){if(Object.prototype.hasOwnProperty.call(a,"__esModule"))return a;var s=a.default;if(typeof s=="function"){var o=function i(){var l=!1;try{l=this instanceof i}catch{}return l?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};o.prototype=s.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(a).forEach(function(i){var l=Object.getOwnPropertyDescriptor(a,i);Object.defineProperty(o,i,l.get?l:{enumerable:!0,get:function(){return a[i]}})}),o}var tu={exports:{}},Oo={};var Vg;function K0(){if(Vg)return Oo;Vg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function o(i,l,p){var g=null;if(p!==void 0&&(g=""+p),l.key!==void 0&&(g=""+l.key),"key"in l){p={};for(var h in l)h!=="key"&&(p[h]=l[h])}else p=l;return l=p.ref,{$$typeof:a,type:i,key:g,ref:l!==void 0?l:null,props:p}}return Oo.Fragment=s,Oo.jsx=o,Oo.jsxs=o,Oo}var Xg;function W0(){return Xg||(Xg=1,tu.exports=K0()),tu.exports}var c=W0();const Z0=ai(c),Q0=$l({__proto__:null,default:Z0},[c]);var au={exports:{}},_o={},nu={exports:{}},su={};var Gg;function J0(){return Gg||(Gg=1,(function(a){function s(Y,Q){var be=Y.length;Y.push(Q);e:for(;0<be;){var Ae=be-1>>>1,O=Y[Ae];if(0<l(O,Q))Y[Ae]=Q,Y[be]=O,be=Ae;else break e}}function o(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var Q=Y[0],be=Y.pop();if(be!==Q){Y[0]=be;e:for(var Ae=0,O=Y.length,J=O>>>1;Ae<J;){var F=2*(Ae+1)-1,X=Y[F],ie=F+1,ge=Y[ie];if(0>l(X,be))ie<O&&0>l(ge,X)?(Y[Ae]=ge,Y[ie]=be,Ae=ie):(Y[Ae]=X,Y[F]=be,Ae=F);else if(ie<O&&0>l(ge,be))Y[Ae]=ge,Y[ie]=be,Ae=ie;else break e}}return Q}function l(Y,Q){var be=Y.sortIndex-Q.sortIndex;return be!==0?be:Y.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var g=Date,h=g.now();a.unstable_now=function(){return g.now()-h}}var m=[],u=[],y=1,b=null,E=3,x=!1,R=!1,C=!1,D=!1,S=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function _(Y){for(var Q=o(u);Q!==null;){if(Q.callback===null)i(u);else if(Q.startTime<=Y)i(u),Q.sortIndex=Q.expirationTime,s(m,Q);else break;Q=o(u)}}function w(Y){if(C=!1,_(Y),!R)if(o(m)!==null)R=!0,P||(P=!0,le());else{var Q=o(u);Q!==null&&de(w,Q.startTime-Y)}}var P=!1,k=-1,I=5,Z=-1;function se(){return D?!0:!(a.unstable_now()-Z<I)}function ee(){if(D=!1,P){var Y=a.unstable_now();Z=Y;var Q=!0;try{e:{R=!1,C&&(C=!1,N(k),k=-1),x=!0;var be=E;try{t:{for(_(Y),b=o(m);b!==null&&!(b.expirationTime>Y&&se());){var Ae=b.callback;if(typeof Ae=="function"){b.callback=null,E=b.priorityLevel;var O=Ae(b.expirationTime<=Y);if(Y=a.unstable_now(),typeof O=="function"){b.callback=O,_(Y),Q=!0;break t}b===o(m)&&i(m),_(Y)}else i(m);b=o(m)}if(b!==null)Q=!0;else{var J=o(u);J!==null&&de(w,J.startTime-Y),Q=!1}}break e}finally{b=null,E=be,x=!1}Q=void 0}}finally{Q?le():P=!1}}}var le;if(typeof T=="function")le=function(){T(ee)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,he=Te.port2;Te.port1.onmessage=ee,le=function(){he.postMessage(null)}}else le=function(){S(ee,0)};function de(Y,Q){k=S(function(){Y(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(Y){Y.callback=null},a.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<Y?Math.floor(1e3/Y):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(Y){switch(E){case 1:case 2:case 3:var Q=3;break;default:Q=E}var be=E;E=Q;try{return Y()}finally{E=be}},a.unstable_requestPaint=function(){D=!0},a.unstable_runWithPriority=function(Y,Q){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var be=E;E=Y;try{return Q()}finally{E=be}},a.unstable_scheduleCallback=function(Y,Q,be){var Ae=a.unstable_now();switch(typeof be=="object"&&be!==null?(be=be.delay,be=typeof be=="number"&&0<be?Ae+be:Ae):be=Ae,Y){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=be+O,Y={id:y++,callback:Q,priorityLevel:Y,startTime:be,expirationTime:O,sortIndex:-1},be>Ae?(Y.sortIndex=be,s(u,Y),o(m)===null&&Y===o(u)&&(C?(N(k),k=-1):C=!0,de(w,be-Ae))):(Y.sortIndex=O,s(m,Y),R||x||(R=!0,P||(P=!0,le()))),Y},a.unstable_shouldYield=se,a.unstable_wrapCallback=function(Y){var Q=E;return function(){var be=E;E=Q;try{return Y.apply(this,arguments)}finally{E=be}}}})(su)),su}var Kg;function eE(){return Kg||(Kg=1,nu.exports=J0()),nu.exports}var ru={exports:{}},$e={};var Wg;function tE(){if(Wg)return $e;Wg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function E(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,C={};function D(O,J,F){this.props=O,this.context=J,this.refs=C,this.updater=F||x}D.prototype.isReactComponent={},D.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},D.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=D.prototype;function N(O,J,F){this.props=O,this.context=J,this.refs=C,this.updater=F||x}var T=N.prototype=new S;T.constructor=N,R(T,D.prototype),T.isPureReactComponent=!0;var _=Array.isArray,w={H:null,A:null,T:null,S:null,V:null},P=Object.prototype.hasOwnProperty;function k(O,J,F,X,ie,ge){return F=ge.ref,{$$typeof:a,type:O,key:J,ref:F!==void 0?F:null,props:ge}}function I(O,J){return k(O.type,J,void 0,void 0,void 0,O.props)}function Z(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function se(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(F){return J[F]})}var ee=/\/+/g;function le(O,J){return typeof O=="object"&&O!==null&&O.key!=null?se(""+O.key):J.toString(36)}function Te(){}function he(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(Te,Te):(O.status="pending",O.then(function(J){O.status==="pending"&&(O.status="fulfilled",O.value=J)},function(J){O.status==="pending"&&(O.status="rejected",O.reason=J)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function de(O,J,F,X,ie){var ge=typeof O;(ge==="undefined"||ge==="boolean")&&(O=null);var we=!1;if(O===null)we=!0;else switch(ge){case"bigint":case"string":case"number":we=!0;break;case"object":switch(O.$$typeof){case a:case s:we=!0;break;case y:return we=O._init,de(we(O._payload),J,F,X,ie)}}if(we)return ie=ie(O),we=X===""?"."+le(O,0):X,_(ie)?(F="",we!=null&&(F=we.replace(ee,"$&/")+"/"),de(ie,J,F,"",function(wt){return wt})):ie!=null&&(Z(ie)&&(ie=I(ie,F+(ie.key==null||O&&O.key===ie.key?"":(""+ie.key).replace(ee,"$&/")+"/")+we)),J.push(ie)),1;we=0;var Me=X===""?".":X+":";if(_(O))for(var qe=0;qe<O.length;qe++)X=O[qe],ge=Me+le(X,qe),we+=de(X,J,F,ge,ie);else if(qe=E(O),typeof qe=="function")for(O=qe.call(O),qe=0;!(X=O.next()).done;)X=X.value,ge=Me+le(X,qe++),we+=de(X,J,F,ge,ie);else if(ge==="object"){if(typeof O.then=="function")return de(he(O),J,F,X,ie);throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return we}function Y(O,J,F){if(O==null)return O;var X=[],ie=0;return de(O,X,"","",function(ge){return J.call(F,ge,ie++)}),X}function Q(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(F){(O._status===0||O._status===-1)&&(O._status=1,O._result=F)},function(F){(O._status===0||O._status===-1)&&(O._status=2,O._result=F)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var be=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)};function Ae(){}return $e.Children={map:Y,forEach:function(O,J,F){Y(O,function(){J.apply(this,arguments)},F)},count:function(O){var J=0;return Y(O,function(){J++}),J},toArray:function(O){return Y(O,function(J){return J})||[]},only:function(O){if(!Z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},$e.Component=D,$e.Fragment=o,$e.Profiler=l,$e.PureComponent=N,$e.StrictMode=i,$e.Suspense=m,$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,$e.__COMPILER_RUNTIME={__proto__:null,c:function(O){return w.H.useMemoCache(O)}},$e.cache=function(O){return function(){return O.apply(null,arguments)}},$e.cloneElement=function(O,J,F){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var X=R({},O.props),ie=O.key,ge=void 0;if(J!=null)for(we in J.ref!==void 0&&(ge=void 0),J.key!==void 0&&(ie=""+J.key),J)!P.call(J,we)||we==="key"||we==="__self"||we==="__source"||we==="ref"&&J.ref===void 0||(X[we]=J[we]);var we=arguments.length-2;if(we===1)X.children=F;else if(1<we){for(var Me=Array(we),qe=0;qe<we;qe++)Me[qe]=arguments[qe+2];X.children=Me}return k(O.type,ie,void 0,void 0,ge,X)},$e.createContext=function(O){return O={$$typeof:g,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:p,_context:O},O},$e.createElement=function(O,J,F){var X,ie={},ge=null;if(J!=null)for(X in J.key!==void 0&&(ge=""+J.key),J)P.call(J,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ie[X]=J[X]);var we=arguments.length-2;if(we===1)ie.children=F;else if(1<we){for(var Me=Array(we),qe=0;qe<we;qe++)Me[qe]=arguments[qe+2];ie.children=Me}if(O&&O.defaultProps)for(X in we=O.defaultProps,we)ie[X]===void 0&&(ie[X]=we[X]);return k(O,ge,void 0,void 0,null,ie)},$e.createRef=function(){return{current:null}},$e.forwardRef=function(O){return{$$typeof:h,render:O}},$e.isValidElement=Z,$e.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:Q}},$e.memo=function(O,J){return{$$typeof:u,type:O,compare:J===void 0?null:J}},$e.startTransition=function(O){var J=w.T,F={};w.T=F;try{var X=O(),ie=w.S;ie!==null&&ie(F,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(Ae,be)}catch(ge){be(ge)}finally{w.T=J}},$e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},$e.use=function(O){return w.H.use(O)},$e.useActionState=function(O,J,F){return w.H.useActionState(O,J,F)},$e.useCallback=function(O,J){return w.H.useCallback(O,J)},$e.useContext=function(O){return w.H.useContext(O)},$e.useDebugValue=function(){},$e.useDeferredValue=function(O,J){return w.H.useDeferredValue(O,J)},$e.useEffect=function(O,J,F){var X=w.H;if(typeof F=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return X.useEffect(O,J)},$e.useId=function(){return w.H.useId()},$e.useImperativeHandle=function(O,J,F){return w.H.useImperativeHandle(O,J,F)},$e.useInsertionEffect=function(O,J){return w.H.useInsertionEffect(O,J)},$e.useLayoutEffect=function(O,J){return w.H.useLayoutEffect(O,J)},$e.useMemo=function(O,J){return w.H.useMemo(O,J)},$e.useOptimistic=function(O,J){return w.H.useOptimistic(O,J)},$e.useReducer=function(O,J,F){return w.H.useReducer(O,J,F)},$e.useRef=function(O){return w.H.useRef(O)},$e.useState=function(O){return w.H.useState(O)},$e.useSyncExternalStore=function(O,J,F){return w.H.useSyncExternalStore(O,J,F)},$e.useTransition=function(){return w.H.useTransition()},$e.version="19.1.4",$e}var Zg;function Ul(){return Zg||(Zg=1,ru.exports=tE()),ru.exports}var ou={exports:{}},ha={};var Qg;function aE(){if(Qg)return ha;Qg=1;var a=Ul();function s(m){var u="https://react.dev/errors/"+m;if(1<arguments.length){u+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)u+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var i={d:{f:o,r:function(){throw Error(s(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},l=Symbol.for("react.portal");function p(m,u,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:m,containerInfo:u,implementation:y}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,u){if(m==="font")return"";if(typeof u=="string")return u==="use-credentials"?u:""}return ha.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,ha.createPortal=function(m,u){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!u||u.nodeType!==1&&u.nodeType!==9&&u.nodeType!==11)throw Error(s(299));return p(m,u,null,y)},ha.flushSync=function(m){var u=g.T,y=i.p;try{if(g.T=null,i.p=2,m)return m()}finally{g.T=u,i.p=y,i.d.f()}},ha.preconnect=function(m,u){typeof m=="string"&&(u?(u=u.crossOrigin,u=typeof u=="string"?u==="use-credentials"?u:"":void 0):u=null,i.d.C(m,u))},ha.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},ha.preinit=function(m,u){if(typeof m=="string"&&u&&typeof u.as=="string"){var y=u.as,b=h(y,u.crossOrigin),E=typeof u.integrity=="string"?u.integrity:void 0,x=typeof u.fetchPriority=="string"?u.fetchPriority:void 0;y==="style"?i.d.S(m,typeof u.precedence=="string"?u.precedence:void 0,{crossOrigin:b,integrity:E,fetchPriority:x}):y==="script"&&i.d.X(m,{crossOrigin:b,integrity:E,fetchPriority:x,nonce:typeof u.nonce=="string"?u.nonce:void 0})}},ha.preinitModule=function(m,u){if(typeof m=="string")if(typeof u=="object"&&u!==null){if(u.as==null||u.as==="script"){var y=h(u.as,u.crossOrigin);i.d.M(m,{crossOrigin:y,integrity:typeof u.integrity=="string"?u.integrity:void 0,nonce:typeof u.nonce=="string"?u.nonce:void 0})}}else u==null&&i.d.M(m)},ha.preload=function(m,u){if(typeof m=="string"&&typeof u=="object"&&u!==null&&typeof u.as=="string"){var y=u.as,b=h(y,u.crossOrigin);i.d.L(m,y,{crossOrigin:b,integrity:typeof u.integrity=="string"?u.integrity:void 0,nonce:typeof u.nonce=="string"?u.nonce:void 0,type:typeof u.type=="string"?u.type:void 0,fetchPriority:typeof u.fetchPriority=="string"?u.fetchPriority:void 0,referrerPolicy:typeof u.referrerPolicy=="string"?u.referrerPolicy:void 0,imageSrcSet:typeof u.imageSrcSet=="string"?u.imageSrcSet:void 0,imageSizes:typeof u.imageSizes=="string"?u.imageSizes:void 0,media:typeof u.media=="string"?u.media:void 0})}},ha.preloadModule=function(m,u){if(typeof m=="string")if(u){var y=h(u.as,u.crossOrigin);i.d.m(m,{as:typeof u.as=="string"&&u.as!=="script"?u.as:void 0,crossOrigin:y,integrity:typeof u.integrity=="string"?u.integrity:void 0})}else i.d.m(m)},ha.requestFormReset=function(m){i.d.r(m)},ha.unstable_batchedUpdates=function(m,u){return m(u)},ha.useFormState=function(m,u,y){return g.H.useFormState(m,u,y)},ha.useFormStatus=function(){return g.H.useHostTransitionStatus()},ha.version="19.1.4",ha}var Jg;function vy(){if(Jg)return ou.exports;Jg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),ou.exports=aE(),ou.exports}var em;function nE(){if(em)return _o;em=1;var a=eE(),s=Ul(),o=vy();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(p(e)!==e)throw Error(i(188))}function m(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var d=n.return;if(d===null)break;var f=d.alternate;if(f===null){if(r=d.return,r!==null){n=r;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===n)return h(d),e;if(f===r)return h(d),t;f=f.sibling}throw Error(i(188))}if(n.return!==r.return)n=d,r=f;else{for(var v=!1,A=d.child;A;){if(A===n){v=!0,n=d,r=f;break}if(A===r){v=!0,r=d,n=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===n){v=!0,n=f,r=d;break}if(A===r){v=!0,r=f,n=d;break}A=A.sibling}if(!v)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function u(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=u(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),T=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),I=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),ee=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case D:return"Profiler";case C:return"StrictMode";case w:return"Suspense";case P:return"SuspenseList";case Z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case T:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case _:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return t=e.displayName||null,t!==null?t:he(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}var de=Array.isArray,Y=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be={pending:!1,data:null,method:null,action:null},Ae=[],O=-1;function J(e){return{current:e}}function F(e){0>O||(e.current=Ae[O],Ae[O]=null,O--)}function X(e,t){O++,Ae[O]=e.current,e.current=t}var ie=J(null),ge=J(null),we=J(null),Me=J(null);function qe(e,t){switch(X(we,t),X(ge,e),X(ie,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Eg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Eg(t),e=wg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}F(ie),X(ie,e)}function wt(){F(ie),F(ge),F(we)}function pt(e){e.memoizedState!==null&&X(Me,e);var t=ie.current,n=wg(t,e.type);t!==n&&(X(ge,e),X(ie,n))}function gt(e){ge.current===e&&(F(ie),F(ge)),Me.current===e&&(F(Me),No._currentValue=be)}var xt=Object.prototype.hasOwnProperty,aa=a.unstable_scheduleCallback,Rt=a.unstable_cancelCallback,U=a.unstable_shouldYield,ce=a.unstable_requestPaint,fe=a.unstable_now,B=a.unstable_getCurrentPriorityLevel,ue=a.unstable_ImmediatePriority,Ce=a.unstable_UserBlockingPriority,me=a.unstable_NormalPriority,Le=a.unstable_LowPriority,Qe=a.unstable_IdlePriority,Ve=a.log,Ie=a.unstable_setDisableYieldValue,jt=null,ye=null;function et(e){if(typeof Ve=="function"&&Ie(e),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(jt,e)}catch{}}var nt=Math.clz32?Math.clz32:Da,Wt=Math.log,Re=Math.LN2;function Da(e){return e>>>=0,e===0?32:31-(Wt(e)/Re|0)|0}var Tt=256,mt=4194304;function Zt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function qt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var d=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?d=Zt(r):(v&=A,v!==0?d=Zt(v):n||(n=A&~e,n!==0&&(d=Zt(n))))):(A=r&~f,A!==0?d=Zt(A):v!==0?d=Zt(v):n||(n=r&~e,n!==0&&(d=Zt(n)))),d===0?0:t!==0&&t!==d&&(t&f)===0&&(f=d&-d,n=t&-t,f>=n||f===32&&(n&4194048)!==0)?t:d}function Ca(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function lt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=Tt;return Tt<<=1,(Tt&4194048)===0&&(Tt=256),e}function Mt(){var e=mt;return mt<<=1,(mt&62914560)===0&&(mt=4194304),e}function yt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function na(e,t,n,r,d,f){var v=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var A=e.entanglements,L=e.expirationTimes,V=e.hiddenUpdates;for(n=v&~n;0<n;){var ne=31-nt(n),oe=1<<ne;A[ne]=0,L[ne]=-1;var G=V[ne];if(G!==null)for(V[ne]=null,ne=0;ne<G.length;ne++){var K=G[ne];K!==null&&(K.lane&=-536870913)}n&=~oe}r!==0&&on(e,r,0),f!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~t))}function on(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-nt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194090}function Qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-nt(n),d=1<<r;d&t|e[r]&t&&(e[r]|=t),n&=~d}}function Fn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ka(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function En(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Ug(e.type))}function da(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var ua=Math.random().toString(36).slice(2),At="__reactFiber$"+ua,We="__reactProps$"+ua,j="__reactContainer$"+ua,W="__reactEvents$"+ua,pe="__reactListeners$"+ua,Ue="__reactHandles$"+ua,M="__reactResources$"+ua,ae="__reactMarker$"+ua;function ve(e){delete e[At],delete e[We],delete e[W],delete e[pe],delete e[Ue]}function xe(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[j]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ag(e);e!==null;){if(n=e[At])return n;e=Ag(e)}return t}e=n,n=e.parentNode}return null}function Ne(e){if(e=e[At]||e[j]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Pe(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Je(e){var t=e[M];return t||(t=e[M]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[ae]=!0}var pa=new Set,Dt={};function $t(e,t){ga(e,t),ga(e+"Capture",t)}function ga(e,t){for(Dt[e]=t,e=0;e<t.length;e++)pa.add(t[e])}var wn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Hs={},$r={};function Zl(e){return xt.call($r,e)?!0:xt.call(Hs,e)?!1:wn.test(e)?$r[e]=!0:(Hs[e]=!0,!1)}function Vs(e,t,n){if(Zl(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Xs(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Fa(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}var xn,ui;function Ee(e){if(xn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xn=t&&t[1]||"",ui=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xn+e+ui}var Oe=!1;function ft(e,t){if(!e||Oe)return"";Oe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var oe=function(){throw Error()};if(Object.defineProperty(oe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(oe,[])}catch(K){var G=K}Reflect.construct(e,[],oe)}else{try{oe.call()}catch(K){G=K}e.call(oe.prototype)}}else{try{throw Error()}catch(K){G=K}(oe=e())&&typeof oe.catch=="function"&&oe.catch(function(){})}}catch(K){if(K&&G&&typeof K.stack=="string")return[K.stack,G.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var L=v.split(`
`),V=A.split(`
`);for(d=r=0;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;for(;d<V.length&&!V[d].includes("DetermineComponentFrameRoot");)d++;if(r===L.length||d===V.length)for(r=L.length-1,d=V.length-1;1<=r&&0<=d&&L[r]!==V[d];)d--;for(;1<=r&&0<=d;r--,d--)if(L[r]!==V[d]){if(r!==1||d!==1)do if(r--,d--,0>d||L[r]!==V[d]){var ne=`
`+L[r].replace(" at new "," at ");return e.displayName&&ne.includes("<anonymous>")&&(ne=ne.replace("<anonymous>",e.displayName)),ne}while(1<=r&&0<=d);break}}}finally{Oe=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ee(n):""}function Ht(e){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee("Lazy");case 13:return Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return ft(e.type,!1);case 11:return ft(e.type.render,!1);case 1:return ft(e.type,!0);case 31:return Ee("Activity");default:return""}}function Ct(e){try{var t="";do t+=Ht(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Bn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ea(e){var t=Bn(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var d=n.get,f=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(v){r=""+v,f.call(this,v)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(v){r=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wa(e){e._valueTracker||(e._valueTracker=Ea(e))}function Ba(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Bn(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hb=/[\n"\\]/g;function za(e){return e.replace(Hb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ql(e,t,n,r,d,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),t!=null?v==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bt(t)):e.value!==""+bt(t)&&(e.value=""+bt(t)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),t!=null?Jl(e,v,bt(t)):n!=null?Jl(e,v,bt(n)):r!=null&&e.removeAttribute("value"),d==null&&f!=null&&(e.defaultChecked=!!f),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+bt(A):e.removeAttribute("name")}function mp(e,t,n,r,d,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||n!=null){if(!(f!=="submit"&&f!=="reset"||t!=null))return;n=n!=null?""+bt(n):"",t=t!=null?""+bt(t):n,A||t===e.value||(e.value=t),e.defaultValue=t}r=r??d,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Jl(e,t,n){t==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Gs(e,t,n,r){if(e=e.options,t){t={};for(var d=0;d<n.length;d++)t["$"+n[d]]=!0;for(n=0;n<e.length;n++)d=t.hasOwnProperty("$"+e[n].value),e[n].selected!==d&&(e[n].selected=d),d&&r&&(e[n].defaultSelected=!0)}else{for(n=""+bt(n),t=null,d=0;d<e.length;d++){if(e[d].value===n){e[d].selected=!0,r&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function yp(e,t,n){if(t!=null&&(t=""+bt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+bt(n):""}function bp(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(de(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=bt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function Ks(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function vp(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||Vb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ep(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var d in t)r=t[d],t.hasOwnProperty(d)&&n[d]!==r&&vp(e,d,r)}else for(var f in t)t.hasOwnProperty(f)&&vp(e,f,t[f])}function ec(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xb=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pi(e){return Gb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var tc=null;function ac(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,Zs=null;function wp(e){var t=Ne(e);if(t&&(e=t.stateNode)){var n=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ql(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+za(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var d=r[We]||null;if(!d)throw Error(i(90));Ql(r,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ba(r)}break e;case"textarea":yp(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Gs(e,!!n.multiple,t,!1)}}}var nc=!1;function xp(e,t,n){if(nc)return e(t,n);nc=!0;try{var r=e(t);return r}finally{if(nc=!1,(Ws!==null||Zs!==null)&&(Zi(),Ws&&(t=Ws,e=Zs,Zs=Ws=null,wp(t),e)))for(t=0;t<e.length;t++)wp(e[t])}}function Ur(e,t){var n=e.stateNode;if(n===null)return null;var r=n[We]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=!1;if(Tn)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){sc=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{sc=!1}var zn=null,rc=null,fi=null;function Sp(){if(fi)return fi;var e,t=rc,n=t.length,r,d="value"in zn?zn.value:zn.textContent,f=d.length;for(e=0;e<n&&t[e]===d[e];e++);var v=n-e;for(r=1;r<=v&&t[n-r]===d[f-r];r++);return fi=d.slice(e,1<r?1-r:void 0)}function hi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function gi(){return!0}function Tp(){return!1}function xa(e){function t(n,r,d,f,v){this._reactName=n,this._targetInst=d,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(n=e[A],this[A]=n?n(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?gi:Tp,this.isPropagationStopped=Tp,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=gi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=gi)},persist:function(){},isPersistent:gi}),t}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mi=xa(Es),Br=y({},Es,{view:0,detail:0}),Kb=xa(Br),oc,ic,zr,yi=y({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zr&&(zr&&e.type==="mousemove"?(oc=e.screenX-zr.screenX,ic=e.screenY-zr.screenY):ic=oc=0,zr=e),oc)},movementY:function(e){return"movementY"in e?e.movementY:ic}}),Ap=xa(yi),Wb=y({},yi,{dataTransfer:0}),Zb=xa(Wb),Qb=y({},Br,{relatedTarget:0}),lc=xa(Qb),Jb=y({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),ev=xa(Jb),tv=y({},Es,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),av=xa(tv),nv=y({},Es,{data:0}),Dp=xa(nv),sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function iv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ov[e])?!!t[e]:!1}function cc(){return iv}var lv=y({},Br,{key:function(e){if(e.key){var t=sv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=hi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(e){return e.type==="keypress"?hi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cv=xa(lv),dv=y({},yi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=xa(dv),uv=y({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),pv=xa(uv),fv=y({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),hv=xa(fv),gv=y({},yi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mv=xa(gv),yv=y({},Es,{newState:0,oldState:0}),bv=xa(yv),vv=[9,13,27,32],dc=Tn&&"CompositionEvent"in window,Yr=null;Tn&&"documentMode"in document&&(Yr=document.documentMode);var Ev=Tn&&"TextEvent"in window&&!Yr,Np=Tn&&(!dc||Yr&&8<Yr&&11>=Yr),kp=" ",Rp=!1;function jp(e,t){switch(e){case"keyup":return vv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qs=!1;function wv(e,t){switch(e){case"compositionend":return Lp(t);case"keypress":return t.which!==32?null:(Rp=!0,kp);case"textInput":return e=t.data,e===kp&&Rp?null:e;default:return null}}function xv(e,t){if(Qs)return e==="compositionend"||!dc&&jp(e,t)?(e=Sp(),fi=rc=zn=null,Qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Np&&t.locale!=="ko"?null:t.data;default:return null}}var Sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Sv[e.type]:t==="textarea"}function _p(e,t,n,r){Ws?Zs?Zs.push(r):Zs=[r]:Ws=r,t=nl(t,"onChange"),0<t.length&&(n=new mi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,Vr=null;function Tv(e){gg(e,0)}function bi(e){var t=Pe(e);if(Ba(t))return e}function Pp(e,t){if(e==="change")return t}var Ip=!1;if(Tn){var uc;if(Tn){var pc="oninput"in document;if(!pc){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),pc=typeof qp.oninput=="function"}uc=pc}else uc=!1;Ip=uc&&(!document.documentMode||9<document.documentMode)}function Mp(){Hr&&(Hr.detachEvent("onpropertychange",$p),Vr=Hr=null)}function $p(e){if(e.propertyName==="value"&&bi(Vr)){var t=[];_p(t,Vr,e,ac(e)),xp(Tv,t)}}function Av(e,t,n){e==="focusin"?(Mp(),Hr=t,Vr=n,Hr.attachEvent("onpropertychange",$p)):e==="focusout"&&Mp()}function Dv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(Vr)}function Cv(e,t){if(e==="click")return bi(t)}function Nv(e,t){if(e==="input"||e==="change")return bi(t)}function kv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ra=typeof Object.is=="function"?Object.is:kv;function Xr(e,t){if(Ra(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var d=n[r];if(!xt.call(t,d)||!Ra(e[d],t[d]))return!1}return!0}function Up(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fp(e,t){var n=Up(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Up(n)}}function Bp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Sn(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sn(e.document)}return t}function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Rv=Tn&&"documentMode"in document&&11>=document.documentMode,Js=null,hc=null,Gr=null,gc=!1;function Yp(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;gc||Js==null||Js!==Sn(r)||(r=Js,"selectionStart"in r&&fc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&Xr(Gr,r)||(Gr=r,r=nl(hc,"onSelect"),0<r.length&&(t=new mi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Js)))}function ws(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var er={animationend:ws("Animation","AnimationEnd"),animationiteration:ws("Animation","AnimationIteration"),animationstart:ws("Animation","AnimationStart"),transitionrun:ws("Transition","TransitionRun"),transitionstart:ws("Transition","TransitionStart"),transitioncancel:ws("Transition","TransitionCancel"),transitionend:ws("Transition","TransitionEnd")},mc={},Hp={};Tn&&(Hp=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function xs(e){if(mc[e])return mc[e];if(!er[e])return e;var t=er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hp)return mc[e]=t[n];return e}var Vp=xs("animationend"),Xp=xs("animationiteration"),Gp=xs("animationstart"),jv=xs("transitionrun"),Lv=xs("transitionstart"),Ov=xs("transitioncancel"),Kp=xs("transitionend"),Wp=new Map,yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yc.push("scrollEnd");function Ja(e,t){Wp.set(e,t),$t(t,[e])}var Zp=new WeakMap;function Ya(e,t){if(typeof e=="object"&&e!==null){var n=Zp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ct(t)},Zp.set(e,t),t)}return{value:e,source:t,stack:Ct(t)}}var Ha=[],tr=0,bc=0;function vi(){for(var e=tr,t=bc=tr=0;t<e;){var n=Ha[t];Ha[t++]=null;var r=Ha[t];Ha[t++]=null;var d=Ha[t];Ha[t++]=null;var f=Ha[t];if(Ha[t++]=null,r!==null&&d!==null){var v=r.pending;v===null?d.next=d:(d.next=v.next,v.next=d),r.pending=d}f!==0&&Qp(n,d,f)}}function Ei(e,t,n,r){Ha[tr++]=e,Ha[tr++]=t,Ha[tr++]=n,Ha[tr++]=r,bc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function vc(e,t,n,r){return Ei(e,t,n,r),wi(e)}function ar(e,t){return Ei(e,null,null,t),wi(e)}function Qp(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var d=!1,f=e.return;f!==null;)f.childLanes|=n,r=f.alternate,r!==null&&(r.childLanes|=n),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(d=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,d&&t!==null&&(d=31-nt(n),e=f.hiddenUpdates,r=e[d],r===null?e[d]=[t]:r.push(t),t.lane=n|536870912),f):null}function wi(e){if(50<Eo)throw Eo=0,Ad=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nr={};function _v(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ja(e,t,n,r){return new _v(e,t,n,r)}function Ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function An(e,t){var n=e.alternate;return n===null?(n=ja(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Jp(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function xi(e,t,n,r,d,f){var v=0;if(r=e,typeof e=="function")Ec(e)&&(v=1);else if(typeof e=="string")v=I0(e,n,ie.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Z:return e=ja(31,n,t,d),e.elementType=Z,e.lanes=f,e;case R:return Ss(n.children,d,f,t);case C:v=8,d|=24;break;case D:return e=ja(12,n,t,d|2),e.elementType=D,e.lanes=f,e;case w:return e=ja(13,n,t,d),e.elementType=w,e.lanes=f,e;case P:return e=ja(19,n,t,d),e.elementType=P,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case T:v=10;break e;case N:v=9;break e;case _:v=11;break e;case k:v=14;break e;case I:v=16,r=null;break e}v=29,n=Error(i(130,e===null?"null":typeof e,"")),r=null}return t=ja(v,n,t,d),t.elementType=e,t.type=r,t.lanes=f,t}function Ss(e,t,n,r){return e=ja(7,e,r,t),e.lanes=n,e}function wc(e,t,n){return e=ja(6,e,null,t),e.lanes=n,e}function xc(e,t,n){return t=ja(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var sr=[],rr=0,Si=null,Ti=0,Va=[],Xa=0,Ts=null,Dn=1,Cn="";function As(e,t){sr[rr++]=Ti,sr[rr++]=Si,Si=e,Ti=t}function ef(e,t,n){Va[Xa++]=Dn,Va[Xa++]=Cn,Va[Xa++]=Ts,Ts=e;var r=Dn;e=Cn;var d=32-nt(r)-1;r&=~(1<<d),n+=1;var f=32-nt(t)+d;if(30<f){var v=d-d%5;f=(r&(1<<v)-1).toString(32),r>>=v,d-=v,Dn=1<<32-nt(t)+d|n<<d|r,Cn=f+e}else Dn=1<<f|n<<d|r,Cn=e}function Sc(e){e.return!==null&&(As(e,1),ef(e,1,0))}function Tc(e){for(;e===Si;)Si=sr[--rr],sr[rr]=null,Ti=sr[--rr],sr[rr]=null;for(;e===Ts;)Ts=Va[--Xa],Va[Xa]=null,Cn=Va[--Xa],Va[Xa]=null,Dn=Va[--Xa],Va[Xa]=null}var ma=null,_t=null,at=!1,Ds=null,ln=!1,Ac=Error(i(519));function Cs(e){var t=Error(i(418,""));throw Zr(Ya(t,e)),Ac}function tf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[At]=e,t[We]=r,n){case"dialog":He("cancel",t),He("close",t);break;case"iframe":case"object":case"embed":He("load",t);break;case"video":case"audio":for(n=0;n<xo.length;n++)He(xo[n],t);break;case"source":He("error",t);break;case"img":case"image":case"link":He("error",t),He("load",t);break;case"details":He("toggle",t);break;case"input":He("invalid",t),mp(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),wa(t);break;case"select":He("invalid",t);break;case"textarea":He("invalid",t),bp(t,r.value,r.defaultValue,r.children),wa(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||vg(t.textContent,n)?(r.popover!=null&&(He("beforetoggle",t),He("toggle",t)),r.onScroll!=null&&He("scroll",t),r.onScrollEnd!=null&&He("scrollend",t),r.onClick!=null&&(t.onclick=sl),t=!0):t=!1,t||Cs(e)}function af(e){for(ma=e.return;ma;)switch(ma.tag){case 5:case 13:ln=!1;return;case 27:case 3:ln=!0;return;default:ma=ma.return}}function Kr(e){if(e!==ma)return!1;if(!at)return af(e),at=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Fd(e.type,e.memoizedProps)),n=!n),n&&_t&&Cs(e),af(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){_t=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}_t=null}}else t===27?(t=_t,rs(e.type)?(e=Hd,Hd=null,_t=e):_t=t):_t=ma?tn(e.stateNode.nextSibling):null;return!0}function Wr(){_t=ma=null,at=!1}function nf(){var e=Ds;return e!==null&&(Aa===null?Aa=e:Aa.push.apply(Aa,e),Ds=null),e}function Zr(e){Ds===null?Ds=[e]:Ds.push(e)}var Dc=J(null),Ns=null,Nn=null;function Yn(e,t,n){X(Dc,t._currentValue),t._currentValue=n}function kn(e){e._currentValue=Dc.current,F(Dc)}function Cc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nc(e,t,n,r){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var f=d.dependencies;if(f!==null){var v=d.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=d;for(var L=0;L<t.length;L++)if(A.context===t[L]){f.lanes|=n,A=f.alternate,A!==null&&(A.lanes|=n),Cc(f.return,n,e),r||(v=null);break e}f=A.next}}else if(d.tag===18){if(v=d.return,v===null)throw Error(i(341));v.lanes|=n,f=v.alternate,f!==null&&(f.lanes|=n),Cc(v,n,e),v=null}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===e){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}}function Qr(e,t,n,r){e=null;for(var d=t,f=!1;d!==null;){if(!f){if((d.flags&524288)!==0)f=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var v=d.alternate;if(v===null)throw Error(i(387));if(v=v.memoizedProps,v!==null){var A=d.type;Ra(d.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(d===Me.current){if(v=d.alternate,v===null)throw Error(i(387));v.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(No):e=[No])}d=d.return}e!==null&&Nc(t,e,n,r),t.flags|=262144}function Ai(e){for(e=e.firstContext;e!==null;){if(!Ra(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ks(e){Ns=e,Nn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fa(e){return sf(Ns,e)}function Di(e,t){return Ns===null&&ks(e),sf(e,t)}function sf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Nn===null){if(e===null)throw Error(i(308));Nn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nn=Nn.next=t;return n}var Pv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Iv=a.unstable_scheduleCallback,qv=a.unstable_NormalPriority,Vt={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kc(){return{controller:new Pv,data:new Map,refCount:0}}function Jr(e){e.refCount--,e.refCount===0&&Iv(qv,function(){e.controller.abort()})}var eo=null,Rc=0,or=0,ir=null;function Mv(e,t){if(eo===null){var n=eo=[];Rc=0,or=Ld(),ir={status:"pending",value:void 0,then:function(r){n.push(r)}}}return Rc++,t.then(rf,rf),t}function rf(){if(--Rc===0&&eo!==null){ir!==null&&(ir.status="fulfilled");var e=eo;eo=null,or=0,ir=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function $v(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(d){n.push(d)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var d=0;d<n.length;d++)(0,n[d])(t)},function(d){for(r.status="rejected",r.reason=d,d=0;d<n.length;d++)(0,n[d])(void 0)}),r}var of=Y.S;Y.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Mv(e,t),of!==null&&of(e,t)};var Rs=J(null);function jc(){var e=Rs.current;return e!==null?e:vt.pooledCache}function Ci(e,t){t===null?X(Rs,Rs.current):X(Rs,t.pool)}function lf(){var e=jc();return e===null?null:{parent:Vt._currentValue,pool:e}}var to=Error(i(460)),cf=Error(i(474)),Ni=Error(i(542)),Lc={then:function(){}};function df(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ki(){}function uf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(ki,ki),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ff(e),e;default:if(typeof t.status=="string")t.then(ki,ki);else{if(e=vt,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=r}},function(r){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ff(e),e}throw ao=t,to}}var ao=null;function pf(){if(ao===null)throw Error(i(459));var e=ao;return ao=null,e}function ff(e){if(e===to||e===Ni)throw Error(i(483))}var Hn=!1;function Oc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(rt&2)!==0){var d=r.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),r.pending=t,t=wi(e),Qp(e,null,n),t}return Ei(e,r,t,n),wi(e)}function no(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}function Pc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var d=null,f=null;if(n=n.firstBaseUpdate,n!==null){do{var v={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};f===null?d=f=v:f=f.next=v,n=n.next}while(n!==null);f===null?d=f=t:f=f.next=t}else d=f=t;n={baseState:r.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ic=!1;function so(){if(Ic){var e=ir;if(e!==null)throw e}}function ro(e,t,n,r){Ic=!1;var d=e.updateQueue;Hn=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var L=A,V=L.next;L.next=null,v===null?f=V:v.next=V,v=L;var ne=e.alternate;ne!==null&&(ne=ne.updateQueue,A=ne.lastBaseUpdate,A!==v&&(A===null?ne.firstBaseUpdate=V:A.next=V,ne.lastBaseUpdate=L))}if(f!==null){var oe=d.baseState;v=0,ne=V=L=null,A=f;do{var G=A.lane&-536870913,K=G!==A.lane;if(K?(Ze&G)===G:(r&G)===G){G!==0&&G===or&&(Ic=!0),ne!==null&&(ne=ne.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var _e=e,ke=A;G=t;var ut=n;switch(ke.tag){case 1:if(_e=ke.payload,typeof _e=="function"){oe=_e.call(ut,oe,G);break e}oe=_e;break e;case 3:_e.flags=_e.flags&-65537|128;case 0:if(_e=ke.payload,G=typeof _e=="function"?_e.call(ut,oe,G):_e,G==null)break e;oe=y({},oe,G);break e;case 2:Hn=!0}}G=A.callback,G!==null&&(e.flags|=64,K&&(e.flags|=8192),K=d.callbacks,K===null?d.callbacks=[G]:K.push(G))}else K={lane:G,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ne===null?(V=ne=K,L=oe):ne=ne.next=K,v|=G;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;K=A,A=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);ne===null&&(L=oe),d.baseState=L,d.firstBaseUpdate=V,d.lastBaseUpdate=ne,f===null&&(d.shared.lanes=0),ts|=v,e.lanes=v,e.memoizedState=oe}}function hf(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function gf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)hf(n[e],t)}var lr=J(null),Ri=J(0);function mf(e,t){e=In,X(Ri,e),X(lr,t),In=e|t.baseLanes}function qc(){X(Ri,In),X(lr,lr.current)}function Mc(){In=Ri.current,F(lr),F(Ri)}var Gn=0,Fe=null,ct=null,Bt=null,ji=!1,cr=!1,js=!1,Li=0,oo=0,dr=null,Uv=0;function Ut(){throw Error(i(321))}function $c(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ra(e[n],t[n]))return!1;return!0}function Uc(e,t,n,r,d,f){return Gn=f,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=e===null||e.memoizedState===null?Jf:eh,js=!1,f=n(r,d),js=!1,cr&&(f=bf(t,n,r,d)),yf(e),f}function yf(e){Y.H=Mi;var t=ct!==null&&ct.next!==null;if(Gn=0,Bt=ct=Fe=null,ji=!1,oo=0,dr=null,t)throw Error(i(300));e===null||Qt||(e=e.dependencies,e!==null&&Ai(e)&&(Qt=!0))}function bf(e,t,n,r){Fe=e;var d=0;do{if(cr&&(dr=null),oo=0,cr=!1,25<=d)throw Error(i(301));if(d+=1,Bt=ct=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Y.H=Xv,f=t(n,r)}while(cr);return f}function Fv(){var e=Y.H,t=e.useState()[0];return t=typeof t.then=="function"?io(t):t,e=e.useState()[0],(ct!==null?ct.memoizedState:null)!==e&&(Fe.flags|=1024),t}function Fc(){var e=Li!==0;return Li=0,e}function Bc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function zc(e){if(ji){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ji=!1}Gn=0,Bt=ct=Fe=null,cr=!1,oo=Li=0,dr=null}function Sa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Fe.memoizedState=Bt=e:Bt=Bt.next=e,Bt}function zt(){if(ct===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=Bt===null?Fe.memoizedState:Bt.next;if(t!==null)Bt=t,ct=e;else{if(e===null)throw Fe.alternate===null?Error(i(467)):Error(i(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Bt===null?Fe.memoizedState=Bt=e:Bt=Bt.next=e}return Bt}function Yc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(e){var t=oo;return oo+=1,dr===null&&(dr=[]),e=uf(dr,e,t),t=Fe,(Bt===null?t.memoizedState:Bt.next)===null&&(t=t.alternate,Y.H=t===null||t.memoizedState===null?Jf:eh),e}function Oi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return io(e);if(e.$$typeof===T)return fa(e)}throw Error(i(438,String(e)))}function Hc(e){var t=null,n=Fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=Fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Yc(),Fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=se;return t.index++,n}function Rn(e,t){return typeof t=="function"?t(e):t}function _i(e){var t=zt();return Vc(t,ct,e)}function Vc(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var d=e.baseQueue,f=r.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}t.baseQueue=d=f,r.pending=null}if(f=e.baseState,d===null)e.memoizedState=f;else{t=d.next;var A=v=null,L=null,V=t,ne=!1;do{var oe=V.lane&-536870913;if(oe!==V.lane?(Ze&oe)===oe:(Gn&oe)===oe){var G=V.revertLane;if(G===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),oe===or&&(ne=!0);else if((Gn&G)===G){V=V.next,G===or&&(ne=!0);continue}else oe={lane:0,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},L===null?(A=L=oe,v=f):L=L.next=oe,Fe.lanes|=G,ts|=G;oe=V.action,js&&n(f,oe),f=V.hasEagerState?V.eagerState:n(f,oe)}else G={lane:oe,revertLane:V.revertLane,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},L===null?(A=L=G,v=f):L=L.next=G,Fe.lanes|=oe,ts|=oe;V=V.next}while(V!==null&&V!==t);if(L===null?v=f:L.next=A,!Ra(f,e.memoizedState)&&(Qt=!0,ne&&(n=ir,n!==null)))throw n;e.memoizedState=f,e.baseState=v,e.baseQueue=L,r.lastRenderedState=f}return d===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Xc(e){var t=zt(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,d=n.pending,f=t.memoizedState;if(d!==null){n.pending=null;var v=d=d.next;do f=e(f,v.action),v=v.next;while(v!==d);Ra(f,t.memoizedState)||(Qt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),n.lastRenderedState=f}return[f,r]}function vf(e,t,n){var r=Fe,d=zt(),f=at;if(f){if(n===void 0)throw Error(i(407));n=n()}else n=t();var v=!Ra((ct||d).memoizedState,n);v&&(d.memoizedState=n,Qt=!0),d=d.queue;var A=xf.bind(null,r,d,e);if(lo(2048,8,A,[e]),d.getSnapshot!==t||v||Bt!==null&&Bt.memoizedState.tag&1){if(r.flags|=2048,ur(9,Pi(),wf.bind(null,r,d,n,t),null),vt===null)throw Error(i(349));f||(Gn&124)!==0||Ef(r,t,n)}return n}function Ef(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t=Yc(),Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function wf(e,t,n,r){t.value=n,t.getSnapshot=r,Sf(t)&&Tf(e)}function xf(e,t,n){return n(function(){Sf(t)&&Tf(e)})}function Sf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ra(e,n)}catch{return!0}}function Tf(e){var t=ar(e,2);t!==null&&Ia(t,e,2)}function Gc(e){var t=Sa();if(typeof e=="function"){var n=e;if(e=n(),js){et(!0);try{n()}finally{et(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:e},t}function Af(e,t,n,r){return e.baseState=n,Vc(e,ct,typeof r=="function"?r:Rn)}function Bv(e,t,n,r,d){if(qi(e))throw Error(i(485));if(e=t.action,e!==null){var f={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};Y.T!==null?n(!0):f.isTransition=!1,r(f),n=t.pending,n===null?(f.next=t.pending=f,Df(t,f)):(f.next=n.next,t.pending=n.next=f)}}function Df(e,t){var n=t.action,r=t.payload,d=e.state;if(t.isTransition){var f=Y.T,v={};Y.T=v;try{var A=n(d,r),L=Y.S;L!==null&&L(v,A),Cf(e,t,A)}catch(V){Kc(e,t,V)}finally{Y.T=f}}else try{f=n(d,r),Cf(e,t,f)}catch(V){Kc(e,t,V)}}function Cf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Nf(e,t,r)},function(r){return Kc(e,t,r)}):Nf(e,t,n)}function Nf(e,t,n){t.status="fulfilled",t.value=n,kf(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Df(e,n)))}function Kc(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,kf(t),t=t.next;while(t!==r)}e.action=null}function kf(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rf(e,t){return t}function jf(e,t){if(at){var n=vt.formState;if(n!==null){e:{var r=Fe;if(at){if(_t){t:{for(var d=_t,f=ln;d.nodeType!==8;){if(!f){d=null;break t}if(d=tn(d.nextSibling),d===null){d=null;break t}}f=d.data,d=f==="F!"||f==="F"?d:null}if(d){_t=tn(d.nextSibling),r=d.data==="F!";break e}}Cs(r)}r=!1}r&&(t=n[0])}}return n=Sa(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rf,lastRenderedState:t},n.queue=r,n=Wf.bind(null,Fe,r),r.dispatch=n,r=Gc(!1),f=ed.bind(null,Fe,!1,r.queue),r=Sa(),d={state:t,dispatch:null,action:e,pending:null},r.queue=d,n=Bv.bind(null,Fe,d,f,n),d.dispatch=n,r.memoizedState=e,[t,n,!1]}function Lf(e){var t=zt();return Of(t,ct,e)}function Of(e,t,n){if(t=Vc(e,t,Rf)[0],e=_i(Rn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=io(t)}catch(v){throw v===to?Ni:v}else r=t;t=zt();var d=t.queue,f=d.dispatch;return n!==t.memoizedState&&(Fe.flags|=2048,ur(9,Pi(),zv.bind(null,d,n),null)),[r,f,e]}function zv(e,t){e.action=t}function _f(e){var t=zt(),n=ct;if(n!==null)return Of(t,n,e);zt(),t=t.memoizedState,n=zt();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ur(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=Fe.updateQueue,t===null&&(t=Yc(),Fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Pi(){return{destroy:void 0,resource:void 0}}function Pf(){return zt().memoizedState}function Ii(e,t,n,r){var d=Sa();r=r===void 0?null:r,Fe.flags|=e,d.memoizedState=ur(1|t,Pi(),n,r)}function lo(e,t,n,r){var d=zt();r=r===void 0?null:r;var f=d.memoizedState.inst;ct!==null&&r!==null&&$c(r,ct.memoizedState.deps)?d.memoizedState=ur(t,f,n,r):(Fe.flags|=e,d.memoizedState=ur(1|t,f,n,r))}function If(e,t){Ii(8390656,8,e,t)}function qf(e,t){lo(2048,8,e,t)}function Mf(e,t){return lo(4,2,e,t)}function $f(e,t){return lo(4,4,e,t)}function Uf(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ff(e,t,n){n=n!=null?n.concat([e]):null,lo(4,4,Uf.bind(null,t,e),n)}function Wc(){}function Bf(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&$c(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zf(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&$c(t,r[1]))return r[0];if(r=e(),js){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[r,t],r}function Zc(e,t,n){return n===void 0||(Gn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=Vh(),Fe.lanes|=e,ts|=e,n)}function Yf(e,t,n,r){return Ra(n,t)?n:lr.current!==null?(e=Zc(e,n,r),Ra(e,t)||(Qt=!0),e):(Gn&42)===0?(Qt=!0,e.memoizedState=n):(e=Vh(),Fe.lanes|=e,ts|=e,t)}function Hf(e,t,n,r,d){var f=Q.p;Q.p=f!==0&&8>f?f:8;var v=Y.T,A={};Y.T=A,ed(e,!1,t,n);try{var L=d(),V=Y.S;if(V!==null&&V(A,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ne=$v(L,r);co(e,t,ne,Pa(e))}else co(e,t,r,Pa(e))}catch(oe){co(e,t,{then:function(){},status:"rejected",reason:oe},Pa())}finally{Q.p=f,Y.T=v}}function Yv(){}function Qc(e,t,n,r){if(e.tag!==5)throw Error(i(476));var d=Vf(e).queue;Hf(e,d,t,be,n===null?Yv:function(){return Xf(e),n(r)})}function Vf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:be,baseState:be,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:be},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xf(e){var t=Vf(e).next.queue;co(e,t,{},Pa())}function Jc(){return fa(No)}function Gf(){return zt().memoizedState}function Kf(){return zt().memoizedState}function Hv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Pa();e=Vn(n);var r=Xn(t,e,n);r!==null&&(Ia(r,t,n),no(r,t,n)),t={cache:kc()},e.payload=t;return}t=t.return}}function Vv(e,t,n){var r=Pa();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},qi(e)?Zf(t,n):(n=vc(e,t,n,r),n!==null&&(Ia(n,e,r),Qf(n,t,r)))}function Wf(e,t,n){var r=Pa();co(e,t,n,r)}function co(e,t,n,r){var d={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(qi(e))Zf(t,d);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var v=t.lastRenderedState,A=f(v,n);if(d.hasEagerState=!0,d.eagerState=A,Ra(A,v))return Ei(e,t,d,0),vt===null&&vi(),!1}catch{}if(n=vc(e,t,d,r),n!==null)return Ia(n,e,r),Qf(n,t,r),!0}return!1}function ed(e,t,n,r){if(r={lane:2,revertLane:Ld(),action:r,hasEagerState:!1,eagerState:null,next:null},qi(e)){if(t)throw Error(i(479))}else t=vc(e,n,r,2),t!==null&&Ia(t,e,2)}function qi(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function Zf(e,t){cr=ji=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qf(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}var Mi={readContext:fa,use:Oi,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut},Jf={readContext:fa,use:Oi,useCallback:function(e,t){return Sa().memoizedState=[e,t===void 0?null:t],e},useContext:fa,useEffect:If,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ii(4194308,4,Uf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ii(4194308,4,e,t)},useInsertionEffect:function(e,t){Ii(4,2,e,t)},useMemo:function(e,t){var n=Sa();t=t===void 0?null:t;var r=e();if(js){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Sa();if(n!==void 0){var d=n(t);if(js){et(!0);try{n(t)}finally{et(!1)}}}else d=t;return r.memoizedState=r.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},r.queue=e,e=e.dispatch=Vv.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=Sa();return e={current:e},t.memoizedState=e},useState:function(e){e=Gc(e);var t=e.queue,n=Wf.bind(null,Fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Wc,useDeferredValue:function(e,t){var n=Sa();return Zc(n,e,t)},useTransition:function(){var e=Gc(!1);return e=Hf.bind(null,Fe,e.queue,!0,!1),Sa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=Fe,d=Sa();if(at){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),vt===null)throw Error(i(349));(Ze&124)!==0||Ef(r,t,n)}d.memoizedState=n;var f={value:n,getSnapshot:t};return d.queue=f,If(xf.bind(null,r,f,e),[e]),r.flags|=2048,ur(9,Pi(),wf.bind(null,r,f,n,t),null),n},useId:function(){var e=Sa(),t=vt.identifierPrefix;if(at){var n=Cn,r=Dn;n=(r&~(1<<32-nt(r)-1)).toString(32)+n,t="«"+t+"R"+n,n=Li++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Uv++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Jc,useFormState:jf,useActionState:jf,useOptimistic:function(e){var t=Sa();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ed.bind(null,Fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Hc,useCacheRefresh:function(){return Sa().memoizedState=Hv.bind(null,Fe)}},eh={readContext:fa,use:Oi,useCallback:Bf,useContext:fa,useEffect:qf,useImperativeHandle:Ff,useInsertionEffect:Mf,useLayoutEffect:$f,useMemo:zf,useReducer:_i,useRef:Pf,useState:function(){return _i(Rn)},useDebugValue:Wc,useDeferredValue:function(e,t){var n=zt();return Yf(n,ct.memoizedState,e,t)},useTransition:function(){var e=_i(Rn)[0],t=zt().memoizedState;return[typeof e=="boolean"?e:io(e),t]},useSyncExternalStore:vf,useId:Gf,useHostTransitionStatus:Jc,useFormState:Lf,useActionState:Lf,useOptimistic:function(e,t){var n=zt();return Af(n,ct,e,t)},useMemoCache:Hc,useCacheRefresh:Kf},Xv={readContext:fa,use:Oi,useCallback:Bf,useContext:fa,useEffect:qf,useImperativeHandle:Ff,useInsertionEffect:Mf,useLayoutEffect:$f,useMemo:zf,useReducer:Xc,useRef:Pf,useState:function(){return Xc(Rn)},useDebugValue:Wc,useDeferredValue:function(e,t){var n=zt();return ct===null?Zc(n,e,t):Yf(n,ct.memoizedState,e,t)},useTransition:function(){var e=Xc(Rn)[0],t=zt().memoizedState;return[typeof e=="boolean"?e:io(e),t]},useSyncExternalStore:vf,useId:Gf,useHostTransitionStatus:Jc,useFormState:_f,useActionState:_f,useOptimistic:function(e,t){var n=zt();return ct!==null?Af(n,ct,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Hc,useCacheRefresh:Kf},pr=null,uo=0;function $i(e){var t=uo;return uo+=1,pr===null&&(pr=[]),uf(pr,e,t)}function po(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ui(e,t){throw t.$$typeof===b?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function th(e){var t=e._init;return t(e._payload)}function ah(e){function t(z,$){if(e){var H=z.deletions;H===null?(z.deletions=[$],z.flags|=16):H.push($)}}function n(z,$){if(!e)return null;for(;$!==null;)t(z,$),$=$.sibling;return null}function r(z){for(var $=new Map;z!==null;)z.key!==null?$.set(z.key,z):$.set(z.index,z),z=z.sibling;return $}function d(z,$){return z=An(z,$),z.index=0,z.sibling=null,z}function f(z,$,H){return z.index=H,e?(H=z.alternate,H!==null?(H=H.index,H<$?(z.flags|=67108866,$):H):(z.flags|=67108866,$)):(z.flags|=1048576,$)}function v(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function A(z,$,H,re){return $===null||$.tag!==6?($=wc(H,z.mode,re),$.return=z,$):($=d($,H),$.return=z,$)}function L(z,$,H,re){var Se=H.type;return Se===R?ne(z,$,H.props.children,re,H.key):$!==null&&($.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===I&&th(Se)===$.type)?($=d($,H.props),po($,H),$.return=z,$):($=xi(H.type,H.key,H.props,null,z.mode,re),po($,H),$.return=z,$)}function V(z,$,H,re){return $===null||$.tag!==4||$.stateNode.containerInfo!==H.containerInfo||$.stateNode.implementation!==H.implementation?($=xc(H,z.mode,re),$.return=z,$):($=d($,H.children||[]),$.return=z,$)}function ne(z,$,H,re,Se){return $===null||$.tag!==7?($=Ss(H,z.mode,re,Se),$.return=z,$):($=d($,H),$.return=z,$)}function oe(z,$,H){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=wc(""+$,z.mode,H),$.return=z,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return H=xi($.type,$.key,$.props,null,z.mode,H),po(H,$),H.return=z,H;case x:return $=xc($,z.mode,H),$.return=z,$;case I:var re=$._init;return $=re($._payload),oe(z,$,H)}if(de($)||le($))return $=Ss($,z.mode,H,null),$.return=z,$;if(typeof $.then=="function")return oe(z,$i($),H);if($.$$typeof===T)return oe(z,Di(z,$),H);Ui(z,$)}return null}function G(z,$,H,re){var Se=$!==null?$.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return Se!==null?null:A(z,$,""+H,re);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case E:return H.key===Se?L(z,$,H,re):null;case x:return H.key===Se?V(z,$,H,re):null;case I:return Se=H._init,H=Se(H._payload),G(z,$,H,re)}if(de(H)||le(H))return Se!==null?null:ne(z,$,H,re,null);if(typeof H.then=="function")return G(z,$,$i(H),re);if(H.$$typeof===T)return G(z,$,Di(z,H),re);Ui(z,H)}return null}function K(z,$,H,re,Se){if(typeof re=="string"&&re!==""||typeof re=="number"||typeof re=="bigint")return z=z.get(H)||null,A($,z,""+re,Se);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case E:return z=z.get(re.key===null?H:re.key)||null,L($,z,re,Se);case x:return z=z.get(re.key===null?H:re.key)||null,V($,z,re,Se);case I:var Be=re._init;return re=Be(re._payload),K(z,$,H,re,Se)}if(de(re)||le(re))return z=z.get(H)||null,ne($,z,re,Se,null);if(typeof re.then=="function")return K(z,$,H,$i(re),Se);if(re.$$typeof===T)return K(z,$,H,Di($,re),Se);Ui($,re)}return null}function _e(z,$,H,re){for(var Se=null,Be=null,De=$,je=$=0,ea=null;De!==null&&je<H.length;je++){De.index>je?(ea=De,De=null):ea=De.sibling;var tt=G(z,De,H[je],re);if(tt===null){De===null&&(De=ea);break}e&&De&&tt.alternate===null&&t(z,De),$=f(tt,$,je),Be===null?Se=tt:Be.sibling=tt,Be=tt,De=ea}if(je===H.length)return n(z,De),at&&As(z,je),Se;if(De===null){for(;je<H.length;je++)De=oe(z,H[je],re),De!==null&&($=f(De,$,je),Be===null?Se=De:Be.sibling=De,Be=De);return at&&As(z,je),Se}for(De=r(De);je<H.length;je++)ea=K(De,z,je,H[je],re),ea!==null&&(e&&ea.alternate!==null&&De.delete(ea.key===null?je:ea.key),$=f(ea,$,je),Be===null?Se=ea:Be.sibling=ea,Be=ea);return e&&De.forEach(function(ds){return t(z,ds)}),at&&As(z,je),Se}function ke(z,$,H,re){if(H==null)throw Error(i(151));for(var Se=null,Be=null,De=$,je=$=0,ea=null,tt=H.next();De!==null&&!tt.done;je++,tt=H.next()){De.index>je?(ea=De,De=null):ea=De.sibling;var ds=G(z,De,tt.value,re);if(ds===null){De===null&&(De=ea);break}e&&De&&ds.alternate===null&&t(z,De),$=f(ds,$,je),Be===null?Se=ds:Be.sibling=ds,Be=ds,De=ea}if(tt.done)return n(z,De),at&&As(z,je),Se;if(De===null){for(;!tt.done;je++,tt=H.next())tt=oe(z,tt.value,re),tt!==null&&($=f(tt,$,je),Be===null?Se=tt:Be.sibling=tt,Be=tt);return at&&As(z,je),Se}for(De=r(De);!tt.done;je++,tt=H.next())tt=K(De,z,je,tt.value,re),tt!==null&&(e&&tt.alternate!==null&&De.delete(tt.key===null?je:tt.key),$=f(tt,$,je),Be===null?Se=tt:Be.sibling=tt,Be=tt);return e&&De.forEach(function(G0){return t(z,G0)}),at&&As(z,je),Se}function ut(z,$,H,re){if(typeof H=="object"&&H!==null&&H.type===R&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case E:e:{for(var Se=H.key;$!==null;){if($.key===Se){if(Se=H.type,Se===R){if($.tag===7){n(z,$.sibling),re=d($,H.props.children),re.return=z,z=re;break e}}else if($.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===I&&th(Se)===$.type){n(z,$.sibling),re=d($,H.props),po(re,H),re.return=z,z=re;break e}n(z,$);break}else t(z,$);$=$.sibling}H.type===R?(re=Ss(H.props.children,z.mode,re,H.key),re.return=z,z=re):(re=xi(H.type,H.key,H.props,null,z.mode,re),po(re,H),re.return=z,z=re)}return v(z);case x:e:{for(Se=H.key;$!==null;){if($.key===Se)if($.tag===4&&$.stateNode.containerInfo===H.containerInfo&&$.stateNode.implementation===H.implementation){n(z,$.sibling),re=d($,H.children||[]),re.return=z,z=re;break e}else{n(z,$);break}else t(z,$);$=$.sibling}re=xc(H,z.mode,re),re.return=z,z=re}return v(z);case I:return Se=H._init,H=Se(H._payload),ut(z,$,H,re)}if(de(H))return _e(z,$,H,re);if(le(H)){if(Se=le(H),typeof Se!="function")throw Error(i(150));return H=Se.call(H),ke(z,$,H,re)}if(typeof H.then=="function")return ut(z,$,$i(H),re);if(H.$$typeof===T)return ut(z,$,Di(z,H),re);Ui(z,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,$!==null&&$.tag===6?(n(z,$.sibling),re=d($,H),re.return=z,z=re):(n(z,$),re=wc(H,z.mode,re),re.return=z,z=re),v(z)):n(z,$)}return function(z,$,H,re){try{uo=0;var Se=ut(z,$,H,re);return pr=null,Se}catch(De){if(De===to||De===Ni)throw De;var Be=ja(29,De,null,z.mode);return Be.lanes=re,Be.return=z,Be}}}var fr=ah(!0),nh=ah(!1),Ga=J(null),cn=null;function Kn(e){var t=e.alternate;X(Xt,Xt.current&1),X(Ga,e),cn===null&&(t===null||lr.current!==null||t.memoizedState!==null)&&(cn=e)}function sh(e){if(e.tag===22){if(X(Xt,Xt.current),X(Ga,e),cn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(cn=e)}}else Wn()}function Wn(){X(Xt,Xt.current),X(Ga,Ga.current)}function jn(e){F(Ga),cn===e&&(cn=null),F(Xt)}var Xt=J(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Yd(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function td(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ad={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Pa(),d=Vn(r);d.payload=t,n!=null&&(d.callback=n),t=Xn(e,d,r),t!==null&&(Ia(t,e,r),no(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Pa(),d=Vn(r);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=Xn(e,d,r),t!==null&&(Ia(t,e,r),no(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pa(),r=Vn(n);r.tag=2,t!=null&&(r.callback=t),t=Xn(e,r,n),t!==null&&(Ia(t,e,n),no(t,e,n))}};function rh(e,t,n,r,d,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):t.prototype&&t.prototype.isPureReactComponent?!Xr(n,r)||!Xr(d,f):!0}function oh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ad.enqueueReplaceState(t,t.state,null)}function Ls(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var d in e)n[d]===void 0&&(n[d]=e[d])}return n}var Bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function ih(e){Bi(e)}function lh(e){console.error(e)}function ch(e){Bi(e)}function zi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function dh(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function nd(e,t,n){return n=Vn(n),n.tag=3,n.payload={element:null},n.callback=function(){zi(e,t)},n}function uh(e){return e=Vn(e),e.tag=3,e}function ph(e,t,n,r){var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var f=r.value;e.payload=function(){return d(f)},e.callback=function(){dh(t,n,r)}}var v=n.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){dh(t,n,r),typeof d!="function"&&(as===null?as=new Set([this]):as.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function Gv(e,t,n,r,d){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Qr(t,n,d,!0),n=Ga.current,n!==null){switch(n.tag){case 13:return cn===null?Cd():n.alternate===null&&Pt===0&&(Pt=3),n.flags&=-257,n.flags|=65536,n.lanes=d,r===Lc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),kd(e,r,d)),!1;case 22:return n.flags|=65536,r===Lc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),kd(e,r,d)),!1}throw Error(i(435,n.tag))}return kd(e,r,d),Cd(),!1}if(at)return t=Ga.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,r!==Ac&&(e=Error(i(422),{cause:r}),Zr(Ya(e,n)))):(r!==Ac&&(t=Error(i(423),{cause:r}),Zr(Ya(t,n))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,r=Ya(r,n),d=nd(e.stateNode,r,d),Pc(e,d),Pt!==4&&(Pt=2)),!1;var f=Error(i(520),{cause:r});if(f=Ya(f,n),vo===null?vo=[f]:vo.push(f),Pt!==4&&(Pt=2),t===null)return!0;r=Ya(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=d&-d,n.lanes|=e,e=nd(n.stateNode,r,e),Pc(n,e),!1;case 1:if(t=n.type,f=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(as===null||!as.has(f))))return n.flags|=65536,d&=-d,n.lanes|=d,d=uh(d),ph(d,e,n,r),Pc(n,d),!1}n=n.return}while(n!==null);return!1}var fh=Error(i(461)),Qt=!1;function sa(e,t,n,r){t.child=e===null?nh(t,null,n,r):fr(t,e.child,n,r)}function hh(e,t,n,r,d){n=n.render;var f=t.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return ks(t),r=Uc(e,t,n,v,f,d),A=Fc(),e!==null&&!Qt?(Bc(e,t,d),Ln(e,t,d)):(at&&A&&Sc(t),t.flags|=1,sa(e,t,r,d),t.child)}function gh(e,t,n,r,d){if(e===null){var f=n.type;return typeof f=="function"&&!Ec(f)&&f.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=f,mh(e,t,f,r,d)):(e=xi(n.type,null,r,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!ud(e,d)){var v=f.memoizedProps;if(n=n.compare,n=n!==null?n:Xr,n(v,r)&&e.ref===t.ref)return Ln(e,t,d)}return t.flags|=1,e=An(f,r),e.ref=t.ref,e.return=t,t.child=e}function mh(e,t,n,r,d){if(e!==null){var f=e.memoizedProps;if(Xr(f,r)&&e.ref===t.ref)if(Qt=!1,t.pendingProps=r=f,ud(e,d))(e.flags&131072)!==0&&(Qt=!0);else return t.lanes=e.lanes,Ln(e,t,d)}return sd(e,t,n,r,d)}function yh(e,t,n){var r=t.pendingProps,d=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((t.flags&128)!==0){if(r=f!==null?f.baseLanes|n:n,e!==null){for(d=t.child=e.child,f=0;d!==null;)f=f|d.lanes|d.childLanes,d=d.sibling;t.childLanes=f&~r}else t.childLanes=0,t.child=null;return bh(e,t,r,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ci(t,f!==null?f.cachePool:null),f!==null?mf(t,f):qc(),sh(t);else return t.lanes=t.childLanes=536870912,bh(e,t,f!==null?f.baseLanes|n:n,n)}else f!==null?(Ci(t,f.cachePool),mf(t,f),Wn(),t.memoizedState=null):(e!==null&&Ci(t,null),qc(),Wn());return sa(e,t,d,n),t.child}function bh(e,t,n,r){var d=jc();return d=d===null?null:{parent:Vt._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&Ci(t,null),qc(),sh(t),e!==null&&Qr(e,t,r,!0),null}function Yi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function sd(e,t,n,r,d){return ks(t),n=Uc(e,t,n,r,void 0,d),r=Fc(),e!==null&&!Qt?(Bc(e,t,d),Ln(e,t,d)):(at&&r&&Sc(t),t.flags|=1,sa(e,t,n,d),t.child)}function vh(e,t,n,r,d,f){return ks(t),t.updateQueue=null,n=bf(t,r,n,d),yf(e),r=Fc(),e!==null&&!Qt?(Bc(e,t,f),Ln(e,t,f)):(at&&r&&Sc(t),t.flags|=1,sa(e,t,n,f),t.child)}function Eh(e,t,n,r,d){if(ks(t),t.stateNode===null){var f=nr,v=n.contextType;typeof v=="object"&&v!==null&&(f=fa(v)),f=new n(r,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ad,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=r,f.state=t.memoizedState,f.refs={},Oc(t),v=n.contextType,f.context=typeof v=="object"&&v!==null?fa(v):nr,f.state=t.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(td(t,n,v,r),f.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&ad.enqueueReplaceState(f,f.state,null),ro(t,r,f,d),so(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){f=t.stateNode;var A=t.memoizedProps,L=Ls(n,A);f.props=L;var V=f.context,ne=n.contextType;v=nr,typeof ne=="object"&&ne!==null&&(v=fa(ne));var oe=n.getDerivedStateFromProps;ne=typeof oe=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=t.pendingProps!==A,ne||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||V!==v)&&oh(t,f,r,v),Hn=!1;var G=t.memoizedState;f.state=G,ro(t,r,f,d),so(),V=t.memoizedState,A||G!==V||Hn?(typeof oe=="function"&&(td(t,n,oe,r),V=t.memoizedState),(L=Hn||rh(t,n,L,r,G,V,v))?(ne||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=V),f.props=r,f.state=V,f.context=v,r=L):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{f=t.stateNode,_c(e,t),v=t.memoizedProps,ne=Ls(n,v),f.props=ne,oe=t.pendingProps,G=f.context,V=n.contextType,L=nr,typeof V=="object"&&V!==null&&(L=fa(V)),A=n.getDerivedStateFromProps,(V=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==oe||G!==L)&&oh(t,f,r,L),Hn=!1,G=t.memoizedState,f.state=G,ro(t,r,f,d),so();var K=t.memoizedState;v!==oe||G!==K||Hn||e!==null&&e.dependencies!==null&&Ai(e.dependencies)?(typeof A=="function"&&(td(t,n,A,r),K=t.memoizedState),(ne=Hn||rh(t,n,ne,r,G,K,L)||e!==null&&e.dependencies!==null&&Ai(e.dependencies))?(V||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,K,L),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,K,L)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=K),f.props=r,f.state=K,f.context=L,r=ne):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&G===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&G===e.memoizedState||(t.flags|=1024),r=!1)}return f=r,Yi(e,t),r=(t.flags&128)!==0,f||r?(f=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&r?(t.child=fr(t,e.child,null,d),t.child=fr(t,null,n,d)):sa(e,t,n,d),t.memoizedState=f.state,e=t.child):e=Ln(e,t,d),e}function wh(e,t,n,r){return Wr(),t.flags|=256,sa(e,t,n,r),t.child}var rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function od(e){return{baseLanes:e,cachePool:lf()}}function id(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ka),e}function xh(e,t,n){var r=t.pendingProps,d=!1,f=(t.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Xt.current&2)!==0),v&&(d=!0,t.flags&=-129),v=(t.flags&32)!==0,t.flags&=-33,e===null){if(at){if(d?Kn(t):Wn(),at){var A=_t,L;if(L=A){e:{for(L=A,A=ln;L.nodeType!==8;){if(!A){A=null;break e}if(L=tn(L.nextSibling),L===null){A=null;break e}}A=L}A!==null?(t.memoizedState={dehydrated:A,treeContext:Ts!==null?{id:Dn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},L=ja(18,null,null,0),L.stateNode=A,L.return=t,t.child=L,ma=t,_t=null,L=!0):L=!1}L||Cs(t)}if(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Yd(A)?t.lanes=32:t.lanes=536870912,null;jn(t)}return A=r.children,r=r.fallback,d?(Wn(),d=t.mode,A=Hi({mode:"hidden",children:A},d),r=Ss(r,d,n,null),A.return=t,r.return=t,A.sibling=r,t.child=A,d=t.child,d.memoizedState=od(n),d.childLanes=id(e,v,n),t.memoizedState=rd,r):(Kn(t),ld(t,A))}if(L=e.memoizedState,L!==null&&(A=L.dehydrated,A!==null)){if(f)t.flags&256?(Kn(t),t.flags&=-257,t=cd(e,t,n)):t.memoizedState!==null?(Wn(),t.child=e.child,t.flags|=128,t=null):(Wn(),d=r.fallback,A=t.mode,r=Hi({mode:"visible",children:r.children},A),d=Ss(d,A,n,null),d.flags|=2,r.return=t,d.return=t,r.sibling=d,t.child=r,fr(t,e.child,null,n),r=t.child,r.memoizedState=od(n),r.childLanes=id(e,v,n),t.memoizedState=rd,t=d);else if(Kn(t),Yd(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var V=v.dgst;v=V,r=Error(i(419)),r.stack="",r.digest=v,Zr({value:r,source:null,stack:null}),t=cd(e,t,n)}else if(Qt||Qr(e,t,n,!1),v=(n&e.childLanes)!==0,Qt||v){if(v=vt,v!==null&&(r=n&-n,r=(r&42)!==0?1:Fn(r),r=(r&(v.suspendedLanes|n))!==0?0:r,r!==0&&r!==L.retryLane))throw L.retryLane=r,ar(e,r),Ia(v,e,r),fh;A.data==="$?"||Cd(),t=cd(e,t,n)}else A.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=L.treeContext,_t=tn(A.nextSibling),ma=t,at=!0,Ds=null,ln=!1,e!==null&&(Va[Xa++]=Dn,Va[Xa++]=Cn,Va[Xa++]=Ts,Dn=e.id,Cn=e.overflow,Ts=t),t=ld(t,r.children),t.flags|=4096);return t}return d?(Wn(),d=r.fallback,A=t.mode,L=e.child,V=L.sibling,r=An(L,{mode:"hidden",children:r.children}),r.subtreeFlags=L.subtreeFlags&65011712,V!==null?d=An(V,d):(d=Ss(d,A,n,null),d.flags|=2),d.return=t,r.return=t,r.sibling=d,t.child=r,r=d,d=t.child,A=e.child.memoizedState,A===null?A=od(n):(L=A.cachePool,L!==null?(V=Vt._currentValue,L=L.parent!==V?{parent:V,pool:V}:L):L=lf(),A={baseLanes:A.baseLanes|n,cachePool:L}),d.memoizedState=A,d.childLanes=id(e,v,n),t.memoizedState=rd,r):(Kn(t),n=e.child,e=n.sibling,n=An(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(v=t.deletions,v===null?(t.deletions=[e],t.flags|=16):v.push(e)),t.child=n,t.memoizedState=null,n)}function ld(e,t){return t=Hi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Hi(e,t){return e=ja(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function cd(e,t,n){return fr(t,e.child,null,n),e=ld(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Sh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Cc(e.return,t,n)}function dd(e,t,n,r,d){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:d}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=n,f.tailMode=d)}function Th(e,t,n){var r=t.pendingProps,d=r.revealOrder,f=r.tail;if(sa(e,t,r.children,n),r=Xt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sh(e,n,t);else if(e.tag===19)Sh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(X(Xt,r),d){case"forwards":for(n=t.child,d=null;n!==null;)e=n.alternate,e!==null&&Fi(e)===null&&(d=n),n=n.sibling;n=d,n===null?(d=t.child,t.child=null):(d=n.sibling,n.sibling=null),dd(t,!1,d,n,f);break;case"backwards":for(n=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Fi(e)===null){t.child=d;break}e=d.sibling,d.sibling=n,n=d,d=e}dd(t,!0,n,null,f);break;case"together":dd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ts|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Qr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ud(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ai(e)))}function Kv(e,t,n){switch(t.tag){case 3:qe(t,t.stateNode.containerInfo),Yn(t,Vt,e.memoizedState.cache),Wr();break;case 27:case 5:pt(t);break;case 4:qe(t,t.stateNode.containerInfo);break;case 10:Yn(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Kn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?xh(e,t,n):(Kn(t),e=Ln(e,t,n),e!==null?e.sibling:null);Kn(t);break;case 19:var d=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Qr(e,t,n,!1),r=(n&t.childLanes)!==0),d){if(r)return Th(e,t,n);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),X(Xt,Xt.current),r)break;return null;case 22:case 23:return t.lanes=0,yh(e,t,n);case 24:Yn(t,Vt,e.memoizedState.cache)}return Ln(e,t,n)}function Ah(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qt=!0;else{if(!ud(e,n)&&(t.flags&128)===0)return Qt=!1,Kv(e,t,n);Qt=(e.flags&131072)!==0}else Qt=!1,at&&(t.flags&1048576)!==0&&ef(t,Ti,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,d=r._init;if(r=d(r._payload),t.type=r,typeof r=="function")Ec(r)?(e=Ls(r,e),t.tag=1,t=Eh(null,t,r,e,n)):(t.tag=0,t=sd(null,t,r,e,n));else{if(r!=null){if(d=r.$$typeof,d===_){t.tag=11,t=hh(null,t,r,e,n);break e}else if(d===k){t.tag=14,t=gh(null,t,r,e,n);break e}}throw t=he(r)||r,Error(i(306,t,""))}}return t;case 0:return sd(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,d=Ls(r,t.pendingProps),Eh(e,t,r,d,n);case 3:e:{if(qe(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var f=t.memoizedState;d=f.element,_c(e,t),ro(t,r,null,n);var v=t.memoizedState;if(r=v.cache,Yn(t,Vt,r),r!==f.cache&&Nc(t,[Vt],n,!0),so(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=wh(e,t,r,n);break e}else if(r!==d){d=Ya(Error(i(424)),t),Zr(d),t=wh(e,t,r,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_t=tn(e.firstChild),ma=t,at=!0,Ds=null,ln=!0,n=nh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Wr(),r===d){t=Ln(e,t,n);break e}sa(e,t,r,n)}t=t.child}return t;case 26:return Yi(e,t),e===null?(n=kg(t.type,null,t.pendingProps,null))?t.memoizedState=n:at||(n=t.type,e=t.pendingProps,r=rl(we.current).createElement(n),r[At]=t,r[We]=e,oa(r,n,e),Xe(r),t.stateNode=r):t.memoizedState=kg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pt(t),e===null&&at&&(r=t.stateNode=Dg(t.type,t.pendingProps,we.current),ma=t,ln=!0,d=_t,rs(t.type)?(Hd=d,_t=tn(r.firstChild)):_t=d),sa(e,t,t.pendingProps.children,n),Yi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&at&&((d=r=_t)&&(r=S0(r,t.type,t.pendingProps,ln),r!==null?(t.stateNode=r,ma=t,_t=tn(r.firstChild),ln=!1,d=!0):d=!1),d||Cs(t)),pt(t),d=t.type,f=t.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Fd(d,f)?r=null:v!==null&&Fd(d,v)&&(t.flags|=32),t.memoizedState!==null&&(d=Uc(e,t,Fv,null,null,n),No._currentValue=d),Yi(e,t),sa(e,t,r,n),t.child;case 6:return e===null&&at&&((e=n=_t)&&(n=T0(n,t.pendingProps,ln),n!==null?(t.stateNode=n,ma=t,_t=null,e=!0):e=!1),e||Cs(t)),null;case 13:return xh(e,t,n);case 4:return qe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=fr(t,null,r,n):sa(e,t,r,n),t.child;case 11:return hh(e,t,t.type,t.pendingProps,n);case 7:return sa(e,t,t.pendingProps,n),t.child;case 8:return sa(e,t,t.pendingProps.children,n),t.child;case 12:return sa(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Yn(t,t.type,r.value),sa(e,t,r.children,n),t.child;case 9:return d=t.type._context,r=t.pendingProps.children,ks(t),d=fa(d),r=r(d),t.flags|=1,sa(e,t,r,n),t.child;case 14:return gh(e,t,t.type,t.pendingProps,n);case 15:return mh(e,t,t.type,t.pendingProps,n);case 19:return Th(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},e===null?(n=Hi(r,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=An(e.child,r),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return yh(e,t,n);case 24:return ks(t),r=fa(Vt),e===null?(d=jc(),d===null&&(d=vt,f=kc(),d.pooledCache=f,f.refCount++,f!==null&&(d.pooledCacheLanes|=n),d=f),t.memoizedState={parent:r,cache:d},Oc(t),Yn(t,Vt,d)):((e.lanes&n)!==0&&(_c(e,t),ro(t,null,null,n),so()),d=e.memoizedState,f=t.memoizedState,d.parent!==r?(d={parent:r,cache:r},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),Yn(t,Vt,r)):(r=f.cache,Yn(t,Vt,r),r!==d.cache&&Nc(t,[Vt],n,!0))),sa(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function On(e){e.flags|=4}function Dh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_g(t)){if(t=Ga.current,t!==null&&((Ze&4194048)===Ze?cn!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||t!==cn))throw ao=Lc,cf;e.flags|=8192}}function Vi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Mt():536870912,e.lanes|=t,yr|=t)}function fo(e,t){if(!at)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var d=e.child;d!==null;)n|=d.lanes|d.childLanes,r|=d.subtreeFlags&65011712,r|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)n|=d.lanes|d.childLanes,r|=d.subtreeFlags,r|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Wv(e,t,n){var r=t.pendingProps;switch(Tc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(t),null;case 1:return Lt(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),kn(Vt),wt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Kr(t)?On(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,nf())),Lt(t),null;case 26:return n=t.memoizedState,e===null?(On(t),n!==null?(Lt(t),Dh(t,n)):(Lt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(On(t),Lt(t),Dh(t,n)):(Lt(t),t.flags&=-16777217):(e.memoizedProps!==r&&On(t),Lt(t),t.flags&=-16777217),null;case 27:gt(t),n=we.current;var d=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&On(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Lt(t),null}e=ie.current,Kr(t)?tf(t):(e=Dg(d,r,n),t.stateNode=e,On(t))}return Lt(t),null;case 5:if(gt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&On(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Lt(t),null}if(e=ie.current,Kr(t))tf(t);else{switch(d=rl(we.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?d.createElement("select",{is:r.is}):d.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?d.createElement(n,{is:r.is}):d.createElement(n)}}e[At]=t,e[We]=r;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=e;e:switch(oa(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&On(t)}}return Lt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&On(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(i(166));if(e=we.current,Kr(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,d=ma,d!==null)switch(d.tag){case 27:case 5:r=d.memoizedProps}e[At]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||vg(e.nodeValue,n)),e||Cs(t)}else e=rl(e).createTextNode(r),e[At]=t,t.stateNode=e}return Lt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Kr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[At]=t}else Wr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Lt(t),d=!1}else d=nf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(jn(t),t):(jn(t),null)}if(jn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,d=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(d=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==d&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Vi(t,t.updateQueue),Lt(t),null;case 4:return wt(),e===null&&Id(t.stateNode.containerInfo),Lt(t),null;case 10:return kn(t.type),Lt(t),null;case 19:if(F(Xt),d=t.memoizedState,d===null)return Lt(t),null;if(r=(t.flags&128)!==0,f=d.rendering,f===null)if(r)fo(d,!1);else{if(Pt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Fi(e),f!==null){for(t.flags|=128,fo(d,!1),e=f.updateQueue,t.updateQueue=e,Vi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Jp(n,e),n=n.sibling;return X(Xt,Xt.current&1|2),t.child}e=e.sibling}d.tail!==null&&fe()>Ki&&(t.flags|=128,r=!0,fo(d,!1),t.lanes=4194304)}else{if(!r)if(e=Fi(f),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Vi(t,e),fo(d,!0),d.tail===null&&d.tailMode==="hidden"&&!f.alternate&&!at)return Lt(t),null}else 2*fe()-d.renderingStartTime>Ki&&n!==536870912&&(t.flags|=128,r=!0,fo(d,!1),t.lanes=4194304);d.isBackwards?(f.sibling=t.child,t.child=f):(e=d.last,e!==null?e.sibling=f:t.child=f,d.last=f)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=fe(),t.sibling=null,e=Xt.current,X(Xt,r?e&1|2:e&1),t):(Lt(t),null);case 22:case 23:return jn(t),Mc(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(Lt(t),t.subtreeFlags&6&&(t.flags|=8192)):Lt(t),n=t.updateQueue,n!==null&&Vi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&F(Rs),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),kn(Vt),Lt(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Zv(e,t){switch(Tc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(Vt),wt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return gt(t),null;case 13:if(jn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return F(Xt),null;case 4:return wt(),null;case 10:return kn(t.type),null;case 22:case 23:return jn(t),Mc(),e!==null&&F(Rs),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kn(Vt),null;case 25:return null;default:return null}}function Ch(e,t){switch(Tc(t),t.tag){case 3:kn(Vt),wt();break;case 26:case 27:case 5:gt(t);break;case 4:wt();break;case 13:jn(t);break;case 19:F(Xt);break;case 10:kn(t.type);break;case 22:case 23:jn(t),Mc(),e!==null&&F(Rs);break;case 24:kn(Vt)}}function ho(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var d=r.next;n=d;do{if((n.tag&e)===e){r=void 0;var f=n.create,v=n.inst;r=f(),v.destroy=r}n=n.next}while(n!==d)}}catch(A){ht(t,t.return,A)}}function Zn(e,t,n){try{var r=t.updateQueue,d=r!==null?r.lastEffect:null;if(d!==null){var f=d.next;r=f;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,d=t;var L=n,V=A;try{V()}catch(ne){ht(d,L,ne)}}}r=r.next}while(r!==f)}}catch(ne){ht(t,t.return,ne)}}function Nh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{gf(t,n)}catch(r){ht(e,e.return,r)}}}function kh(e,t,n){n.props=Ls(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){ht(e,t,r)}}function go(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(d){ht(e,t,d)}}function dn(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(d){ht(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(d){ht(e,t,d)}else n.current=null}function Rh(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(d){ht(e,e.return,d)}}function pd(e,t,n){try{var r=e.stateNode;b0(r,e.type,n,t),r[We]=t}catch(d){ht(e,e.return,d)}}function jh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rs(e.type)||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rs(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hd(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=sl));else if(r!==4&&(r===27&&rs(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(hd(e,t,n),e=e.sibling;e!==null;)hd(e,t,n),e=e.sibling}function Xi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&rs(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xi(e,t,n),e=e.sibling;e!==null;)Xi(e,t,n),e=e.sibling}function Lh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);oa(t,r,n),t[At]=e,t[We]=n}catch(f){ht(e,e.return,f)}}var _n=!1,Ft=!1,gd=!1,Oh=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function Qv(e,t){if(e=e.containerInfo,$d=ul,e=zp(e),fc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var d=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{n.nodeType,f.nodeType}catch{n=null;break e}var v=0,A=-1,L=-1,V=0,ne=0,oe=e,G=null;t:for(;;){for(var K;oe!==n||d!==0&&oe.nodeType!==3||(A=v+d),oe!==f||r!==0&&oe.nodeType!==3||(L=v+r),oe.nodeType===3&&(v+=oe.nodeValue.length),(K=oe.firstChild)!==null;)G=oe,oe=K;for(;;){if(oe===e)break t;if(G===n&&++V===d&&(A=v),G===f&&++ne===r&&(L=v),(K=oe.nextSibling)!==null)break;oe=G,G=oe.parentNode}oe=K}n=A===-1||L===-1?null:{start:A,end:L}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ud={focusedElem:e,selectionRange:n},ul=!1,Jt=t;Jt!==null;)if(t=Jt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Jt=e;else for(;Jt!==null;){switch(t=Jt,f=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,n=t,d=f.memoizedProps,f=f.memoizedState,r=n.stateNode;try{var _e=Ls(n.type,d,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(_e,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ke){ht(n,n.return,ke)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)zd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,Jt=e;break}Jt=t.return}}function _h(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Qn(e,n),r&4&&ho(5,n);break;case 1:if(Qn(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(v){ht(n,n.return,v)}else{var d=Ls(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ht(n,n.return,v)}}r&64&&Nh(n),r&512&&go(n,n.return);break;case 3:if(Qn(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{gf(e,t)}catch(v){ht(n,n.return,v)}}break;case 27:t===null&&r&4&&Lh(n);case 26:case 5:Qn(e,n),t===null&&r&4&&Rh(n),r&512&&go(n,n.return);break;case 12:Qn(e,n);break;case 13:Qn(e,n),r&4&&qh(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=i0.bind(null,n),A0(e,n))));break;case 22:if(r=n.memoizedState!==null||_n,!r){t=t!==null&&t.memoizedState!==null||Ft,d=_n;var f=Ft;_n=r,(Ft=t)&&!f?Jn(e,n,(n.subtreeFlags&8772)!==0):Qn(e,n),_n=d,Ft=f}break;case 30:break;default:Qn(e,n)}}function Ph(e){var t=e.alternate;t!==null&&(e.alternate=null,Ph(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ve(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Nt=null,Ta=!1;function Pn(e,t,n){for(n=n.child;n!==null;)Ih(e,t,n),n=n.sibling}function Ih(e,t,n){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(jt,n)}catch{}switch(n.tag){case 26:Ft||dn(n,t),Pn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ft||dn(n,t);var r=Nt,d=Ta;rs(n.type)&&(Nt=n.stateNode,Ta=!1),Pn(e,t,n),To(n.stateNode),Nt=r,Ta=d;break;case 5:Ft||dn(n,t);case 6:if(r=Nt,d=Ta,Nt=null,Pn(e,t,n),Nt=r,Ta=d,Nt!==null)if(Ta)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(n.stateNode)}catch(f){ht(n,t,f)}else try{Nt.removeChild(n.stateNode)}catch(f){ht(n,t,f)}break;case 18:Nt!==null&&(Ta?(e=Nt,Tg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Lo(e)):Tg(Nt,n.stateNode));break;case 4:r=Nt,d=Ta,Nt=n.stateNode.containerInfo,Ta=!0,Pn(e,t,n),Nt=r,Ta=d;break;case 0:case 11:case 14:case 15:Ft||Zn(2,n,t),Ft||Zn(4,n,t),Pn(e,t,n);break;case 1:Ft||(dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&kh(n,t,r)),Pn(e,t,n);break;case 21:Pn(e,t,n);break;case 22:Ft=(r=Ft)||n.memoizedState!==null,Pn(e,t,n),Ft=r;break;default:Pn(e,t,n)}}function qh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Lo(e)}catch(n){ht(t,t.return,n)}}function Jv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Oh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Oh),t;default:throw Error(i(435,e.tag))}}function md(e,t){var n=Jv(e);t.forEach(function(r){var d=l0.bind(null,e,r);n.has(r)||(n.add(r),r.then(d,d))})}function La(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var d=n[r],f=e,v=t,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(rs(A.type)){Nt=A.stateNode,Ta=!1;break e}break;case 5:Nt=A.stateNode,Ta=!1;break e;case 3:case 4:Nt=A.stateNode.containerInfo,Ta=!0;break e}A=A.return}if(Nt===null)throw Error(i(160));Ih(f,v,d),Nt=null,Ta=!1,f=d.alternate,f!==null&&(f.return=null),d.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Mh(t,e),t=t.sibling}var en=null;function Mh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:La(t,e),Oa(e),r&4&&(Zn(3,e,e.return),ho(3,e),Zn(5,e,e.return));break;case 1:La(t,e),Oa(e),r&512&&(Ft||n===null||dn(n,n.return)),r&64&&_n&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var d=en;if(La(t,e),Oa(e),r&512&&(Ft||n===null||dn(n,n.return)),r&4){var f=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,d=d.ownerDocument||d;t:switch(r){case"title":f=d.getElementsByTagName("title")[0],(!f||f[ae]||f[At]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=d.createElement(r),d.head.insertBefore(f,d.querySelector("head > title"))),oa(f,r,n),f[At]=e,Xe(f),r=f;break e;case"link":var v=Lg("link","href",d).get(r+(n.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&f.getAttribute("rel")===(n.rel==null?null:n.rel)&&f.getAttribute("title")===(n.title==null?null:n.title)&&f.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){v.splice(A,1);break t}}f=d.createElement(r),oa(f,r,n),d.head.appendChild(f);break;case"meta":if(v=Lg("meta","content",d).get(r+(n.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(n.content==null?null:""+n.content)&&f.getAttribute("name")===(n.name==null?null:n.name)&&f.getAttribute("property")===(n.property==null?null:n.property)&&f.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&f.getAttribute("charset")===(n.charSet==null?null:n.charSet)){v.splice(A,1);break t}}f=d.createElement(r),oa(f,r,n),d.head.appendChild(f);break;default:throw Error(i(468,r))}f[At]=e,Xe(f),r=f}e.stateNode=r}else Og(d,e.type,e.stateNode);else e.stateNode=jg(d,r,e.memoizedProps);else f!==r?(f===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):f.count--,r===null?Og(d,e.type,e.stateNode):jg(d,r,e.memoizedProps)):r===null&&e.stateNode!==null&&pd(e,e.memoizedProps,n.memoizedProps)}break;case 27:La(t,e),Oa(e),r&512&&(Ft||n===null||dn(n,n.return)),n!==null&&r&4&&pd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(La(t,e),Oa(e),r&512&&(Ft||n===null||dn(n,n.return)),e.flags&32){d=e.stateNode;try{Ks(d,"")}catch(K){ht(e,e.return,K)}}r&4&&e.stateNode!=null&&(d=e.memoizedProps,pd(e,d,n!==null?n.memoizedProps:d)),r&1024&&(gd=!0);break;case 6:if(La(t,e),Oa(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(K){ht(e,e.return,K)}}break;case 3:if(ll=null,d=en,en=ol(t.containerInfo),La(t,e),en=d,Oa(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(t.containerInfo)}catch(K){ht(e,e.return,K)}gd&&(gd=!1,$h(e));break;case 4:r=en,en=ol(e.stateNode.containerInfo),La(t,e),Oa(e),en=r;break;case 12:La(t,e),Oa(e);break;case 13:La(t,e),Oa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(xd=fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,md(e,r)));break;case 22:d=e.memoizedState!==null;var L=n!==null&&n.memoizedState!==null,V=_n,ne=Ft;if(_n=V||d,Ft=ne||L,La(t,e),Ft=ne,_n=V,Oa(e),r&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(n===null||L||_n||Ft||Os(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){L=n=t;try{if(f=L.stateNode,d)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=L.stateNode;var oe=L.memoizedProps.style,G=oe!=null&&oe.hasOwnProperty("display")?oe.display:null;A.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(K){ht(L,L.return,K)}}}else if(t.tag===6){if(n===null){L=t;try{L.stateNode.nodeValue=d?"":L.memoizedProps}catch(K){ht(L,L.return,K)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,md(e,n))));break;case 19:La(t,e),Oa(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,md(e,r)));break;case 30:break;case 21:break;default:La(t,e),Oa(e)}}function Oa(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(jh(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var d=n.stateNode,f=fd(e);Xi(e,f,d);break;case 5:var v=n.stateNode;n.flags&32&&(Ks(v,""),n.flags&=-33);var A=fd(e);Xi(e,A,v);break;case 3:case 4:var L=n.stateNode.containerInfo,V=fd(e);hd(e,V,L);break;default:throw Error(i(161))}}catch(ne){ht(e,e.return,ne)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function $h(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;$h(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)_h(e,t.alternate,t),t=t.sibling}function Os(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zn(4,t,t.return),Os(t);break;case 1:dn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&kh(t,t.return,n),Os(t);break;case 27:To(t.stateNode);case 26:case 5:dn(t,t.return),Os(t);break;case 22:t.memoizedState===null&&Os(t);break;case 30:Os(t);break;default:Os(t)}e=e.sibling}}function Jn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,d=e,f=t,v=f.flags;switch(f.tag){case 0:case 11:case 15:Jn(d,f,n),ho(4,f);break;case 1:if(Jn(d,f,n),r=f,d=r.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(V){ht(r,r.return,V)}if(r=f,d=r.updateQueue,d!==null){var A=r.stateNode;try{var L=d.shared.hiddenCallbacks;if(L!==null)for(d.shared.hiddenCallbacks=null,d=0;d<L.length;d++)hf(L[d],A)}catch(V){ht(r,r.return,V)}}n&&v&64&&Nh(f),go(f,f.return);break;case 27:Lh(f);case 26:case 5:Jn(d,f,n),n&&r===null&&v&4&&Rh(f),go(f,f.return);break;case 12:Jn(d,f,n);break;case 13:Jn(d,f,n),n&&v&4&&qh(d,f);break;case 22:f.memoizedState===null&&Jn(d,f,n),go(f,f.return);break;case 30:break;default:Jn(d,f,n)}t=t.sibling}}function yd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Jr(n))}function bd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jr(e))}function un(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Uh(e,t,n,r),t=t.sibling}function Uh(e,t,n,r){var d=t.flags;switch(t.tag){case 0:case 11:case 15:un(e,t,n,r),d&2048&&ho(9,t);break;case 1:un(e,t,n,r);break;case 3:un(e,t,n,r),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jr(e)));break;case 12:if(d&2048){un(e,t,n,r),e=t.stateNode;try{var f=t.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(L){ht(t,t.return,L)}}else un(e,t,n,r);break;case 13:un(e,t,n,r);break;case 23:break;case 22:f=t.stateNode,v=t.alternate,t.memoizedState!==null?f._visibility&2?un(e,t,n,r):mo(e,t):f._visibility&2?un(e,t,n,r):(f._visibility|=2,hr(e,t,n,r,(t.subtreeFlags&10256)!==0)),d&2048&&yd(v,t);break;case 24:un(e,t,n,r),d&2048&&bd(t.alternate,t);break;default:un(e,t,n,r)}}function hr(e,t,n,r,d){for(d=d&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var f=e,v=t,A=n,L=r,V=v.flags;switch(v.tag){case 0:case 11:case 15:hr(f,v,A,L,d),ho(8,v);break;case 23:break;case 22:var ne=v.stateNode;v.memoizedState!==null?ne._visibility&2?hr(f,v,A,L,d):mo(f,v):(ne._visibility|=2,hr(f,v,A,L,d)),d&&V&2048&&yd(v.alternate,v);break;case 24:hr(f,v,A,L,d),d&&V&2048&&bd(v.alternate,v);break;default:hr(f,v,A,L,d)}t=t.sibling}}function mo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,d=r.flags;switch(r.tag){case 22:mo(n,r),d&2048&&yd(r.alternate,r);break;case 24:mo(n,r),d&2048&&bd(r.alternate,r);break;default:mo(n,r)}t=t.sibling}}var yo=8192;function gr(e){if(e.subtreeFlags&yo)for(e=e.child;e!==null;)Fh(e),e=e.sibling}function Fh(e){switch(e.tag){case 26:gr(e),e.flags&yo&&e.memoizedState!==null&&M0(en,e.memoizedState,e.memoizedProps);break;case 5:gr(e);break;case 3:case 4:var t=en;en=ol(e.stateNode.containerInfo),gr(e),en=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=yo,yo=16777216,gr(e),yo=t):gr(e));break;default:gr(e)}}function Bh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function bo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Jt=r,Yh(r,e)}Bh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zh(e),e=e.sibling}function zh(e){switch(e.tag){case 0:case 11:case 15:bo(e),e.flags&2048&&Zn(9,e,e.return);break;case 3:bo(e);break;case 12:bo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gi(e)):bo(e);break;default:bo(e)}}function Gi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Jt=r,Yh(r,e)}Bh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zn(8,t,t.return),Gi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gi(t));break;default:Gi(t)}e=e.sibling}}function Yh(e,t){for(;Jt!==null;){var n=Jt;switch(n.tag){case 0:case 11:case 15:Zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Jr(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Jt=r;else e:for(n=e;Jt!==null;){r=Jt;var d=r.sibling,f=r.return;if(Ph(r),r===n){Jt=null;break e}if(d!==null){d.return=f,Jt=d;break e}Jt=f}}}var e0={getCacheForType:function(e){var t=fa(Vt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},t0=typeof WeakMap=="function"?WeakMap:Map,rt=0,vt=null,Ye=null,Ze=0,ot=0,_a=null,es=!1,mr=!1,vd=!1,In=0,Pt=0,ts=0,_s=0,Ed=0,Ka=0,yr=0,vo=null,Aa=null,wd=!1,xd=0,Ki=1/0,Wi=null,as=null,ra=0,ns=null,br=null,vr=0,Sd=0,Td=null,Hh=null,Eo=0,Ad=null;function Pa(){if((rt&2)!==0&&Ze!==0)return Ze&-Ze;if(Y.T!==null){var e=or;return e!==0?e:Ld()}return En()}function Vh(){Ka===0&&(Ka=(Ze&536870912)===0||at?Ot():536870912);var e=Ga.current;return e!==null&&(e.flags|=32),Ka}function Ia(e,t,n){(e===vt&&(ot===2||ot===9)||e.cancelPendingCommit!==null)&&(Er(e,0),ss(e,Ze,Ka,!1)),Na(e,n),((rt&2)===0||e!==vt)&&(e===vt&&((rt&2)===0&&(_s|=n),Pt===4&&ss(e,Ze,Ka,!1)),pn(e))}function Xh(e,t,n){if((rt&6)!==0)throw Error(i(327));var r=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ca(e,t),d=r?s0(e,t):Nd(e,t,!0),f=r;do{if(d===0){mr&&!r&&ss(e,t,0,!1);break}else{if(n=e.current.alternate,f&&!a0(n)){d=Nd(e,t,!1),f=!1;continue}if(d===2){if(f=t,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){t=v;e:{var A=e;d=vo;var L=A.current.memoizedState.isDehydrated;if(L&&(Er(A,v).flags|=256),v=Nd(A,v,!1),v!==2){if(vd&&!L){A.errorRecoveryDisabledLanes|=f,_s|=f,d=4;break e}f=Aa,Aa=d,f!==null&&(Aa===null?Aa=f:Aa.push.apply(Aa,f))}d=v}if(f=!1,d!==2)continue}}if(d===1){Er(e,0),ss(e,t,0,!0);break}e:{switch(r=e,f=d,f){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:ss(r,t,Ka,!es);break e;case 2:Aa=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(d=xd+300-fe(),10<d)){if(ss(r,t,Ka,!es),qt(r,0,!0)!==0)break e;r.timeoutHandle=xg(Gh.bind(null,r,n,Aa,Wi,wd,t,Ka,_s,yr,es,f,2,-0,0),d);break e}Gh(r,n,Aa,Wi,wd,t,Ka,_s,yr,es,f,0,-0,0)}}break}while(!0);pn(e)}function Gh(e,t,n,r,d,f,v,A,L,V,ne,oe,G,K){if(e.timeoutHandle=-1,oe=t.subtreeFlags,(oe&8192||(oe&16785408)===16785408)&&(Co={stylesheets:null,count:0,unsuspend:q0},Fh(t),oe=$0(),oe!==null)){e.cancelPendingCommit=oe(tg.bind(null,e,t,f,n,r,d,v,A,L,ne,1,G,K)),ss(e,f,v,!V);return}tg(e,t,f,n,r,d,v,A,L)}function a0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var d=n[r],f=d.getSnapshot;d=d.value;try{if(!Ra(f(),d))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ss(e,t,n,r){t&=~Ed,t&=~_s,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var d=t;0<d;){var f=31-nt(d),v=1<<f;r[f]=-1,d&=~v}n!==0&&on(e,n,t)}function Zi(){return(rt&6)===0?(wo(0),!1):!0}function Dd(){if(Ye!==null){if(ot===0)var e=Ye.return;else e=Ye,Nn=Ns=null,zc(e),pr=null,uo=0,e=Ye;for(;e!==null;)Ch(e.alternate,e),e=e.return;Ye=null}}function Er(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,E0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dd(),vt=e,Ye=n=An(e.current,null),Ze=t,ot=0,_a=null,es=!1,mr=Ca(e,t),vd=!1,yr=Ka=Ed=_s=ts=Pt=0,Aa=vo=null,wd=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var d=31-nt(r),f=1<<d;t|=e[d],r&=~f}return In=t,vi(),n}function Kh(e,t){Fe=null,Y.H=Mi,t===to||t===Ni?(t=pf(),ot=3):t===cf?(t=pf(),ot=4):ot=t===fh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_a=t,Ye===null&&(Pt=1,zi(e,Ya(t,e.current)))}function Wh(){var e=Y.H;return Y.H=Mi,e===null?Mi:e}function Zh(){var e=Y.A;return Y.A=e0,e}function Cd(){Pt=4,es||(Ze&4194048)!==Ze&&Ga.current!==null||(mr=!0),(ts&134217727)===0&&(_s&134217727)===0||vt===null||ss(vt,Ze,Ka,!1)}function Nd(e,t,n){var r=rt;rt|=2;var d=Wh(),f=Zh();(vt!==e||Ze!==t)&&(Wi=null,Er(e,t)),t=!1;var v=Pt;e:do try{if(ot!==0&&Ye!==null){var A=Ye,L=_a;switch(ot){case 8:Dd(),v=6;break e;case 3:case 2:case 9:case 6:Ga.current===null&&(t=!0);var V=ot;if(ot=0,_a=null,wr(e,A,L,V),n&&mr){v=0;break e}break;default:V=ot,ot=0,_a=null,wr(e,A,L,V)}}n0(),v=Pt;break}catch(ne){Kh(e,ne)}while(!0);return t&&e.shellSuspendCounter++,Nn=Ns=null,rt=r,Y.H=d,Y.A=f,Ye===null&&(vt=null,Ze=0,vi()),v}function n0(){for(;Ye!==null;)Qh(Ye)}function s0(e,t){var n=rt;rt|=2;var r=Wh(),d=Zh();vt!==e||Ze!==t?(Wi=null,Ki=fe()+500,Er(e,t)):mr=Ca(e,t);e:do try{if(ot!==0&&Ye!==null){t=Ye;var f=_a;t:switch(ot){case 1:ot=0,_a=null,wr(e,t,f,1);break;case 2:case 9:if(df(f)){ot=0,_a=null,Jh(t);break}t=function(){ot!==2&&ot!==9||vt!==e||(ot=7),pn(e)},f.then(t,t);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:df(f)?(ot=0,_a=null,Jh(t)):(ot=0,_a=null,wr(e,t,f,7));break;case 5:var v=null;switch(Ye.tag){case 26:v=Ye.memoizedState;case 5:case 27:var A=Ye;if(!v||_g(v)){ot=0,_a=null;var L=A.sibling;if(L!==null)Ye=L;else{var V=A.return;V!==null?(Ye=V,Qi(V)):Ye=null}break t}}ot=0,_a=null,wr(e,t,f,5);break;case 6:ot=0,_a=null,wr(e,t,f,6);break;case 8:Dd(),Pt=6;break e;default:throw Error(i(462))}}r0();break}catch(ne){Kh(e,ne)}while(!0);return Nn=Ns=null,Y.H=r,Y.A=d,rt=n,Ye!==null?0:(vt=null,Ze=0,vi(),Pt)}function r0(){for(;Ye!==null&&!U();)Qh(Ye)}function Qh(e){var t=Ah(e.alternate,e,In);e.memoizedProps=e.pendingProps,t===null?Qi(e):Ye=t}function Jh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vh(n,t,t.pendingProps,t.type,void 0,Ze);break;case 11:t=vh(n,t,t.pendingProps,t.type.render,t.ref,Ze);break;case 5:zc(t);default:Ch(n,t),t=Ye=Jp(t,In),t=Ah(n,t,In)}e.memoizedProps=e.pendingProps,t===null?Qi(e):Ye=t}function wr(e,t,n,r){Nn=Ns=null,zc(t),pr=null,uo=0;var d=t.return;try{if(Gv(e,d,t,n,Ze)){Pt=1,zi(e,Ya(n,e.current)),Ye=null;return}}catch(f){if(d!==null)throw Ye=d,f;Pt=1,zi(e,Ya(n,e.current)),Ye=null;return}t.flags&32768?(at||r===1?e=!0:mr||(Ze&536870912)!==0?e=!1:(es=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ga.current,r!==null&&r.tag===13&&(r.flags|=16384))),eg(t,e)):Qi(t)}function Qi(e){var t=e;do{if((t.flags&32768)!==0){eg(t,es);return}e=t.return;var n=Wv(t.alternate,t,In);if(n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Pt===0&&(Pt=5)}function eg(e,t){do{var n=Zv(e.alternate,e);if(n!==null){n.flags&=32767,Ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ye=e;return}Ye=e=n}while(e!==null);Pt=6,Ye=null}function tg(e,t,n,r,d,f,v,A,L){e.cancelPendingCommit=null;do Ji();while(ra!==0);if((rt&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(f=t.lanes|t.childLanes,f|=bc,na(e,n,f,v,A,L),e===vt&&(Ye=vt=null,Ze=0),br=t,ns=e,vr=n,Sd=f,Td=d,Hh=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,c0(me,function(){return og(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=Y.T,Y.T=null,d=Q.p,Q.p=2,v=rt,rt|=4;try{Qv(e,t,n)}finally{rt=v,Q.p=d,Y.T=r}}ra=1,ag(),ng(),sg()}}function ag(){if(ra===1){ra=0;var e=ns,t=br,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Y.T,Y.T=null;var r=Q.p;Q.p=2;var d=rt;rt|=4;try{Mh(t,e);var f=Ud,v=zp(e.containerInfo),A=f.focusedElem,L=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&Bp(A.ownerDocument.documentElement,A)){if(L!==null&&fc(A)){var V=L.start,ne=L.end;if(ne===void 0&&(ne=V),"selectionStart"in A)A.selectionStart=V,A.selectionEnd=Math.min(ne,A.value.length);else{var oe=A.ownerDocument||document,G=oe&&oe.defaultView||window;if(G.getSelection){var K=G.getSelection(),_e=A.textContent.length,ke=Math.min(L.start,_e),ut=L.end===void 0?ke:Math.min(L.end,_e);!K.extend&&ke>ut&&(v=ut,ut=ke,ke=v);var z=Fp(A,ke),$=Fp(A,ut);if(z&&$&&(K.rangeCount!==1||K.anchorNode!==z.node||K.anchorOffset!==z.offset||K.focusNode!==$.node||K.focusOffset!==$.offset)){var H=oe.createRange();H.setStart(z.node,z.offset),K.removeAllRanges(),ke>ut?(K.addRange(H),K.extend($.node,$.offset)):(H.setEnd($.node,$.offset),K.addRange(H))}}}}for(oe=[],K=A;K=K.parentNode;)K.nodeType===1&&oe.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<oe.length;A++){var re=oe[A];re.element.scrollLeft=re.left,re.element.scrollTop=re.top}}ul=!!$d,Ud=$d=null}finally{rt=d,Q.p=r,Y.T=n}}e.current=t,ra=2}}function ng(){if(ra===2){ra=0;var e=ns,t=br,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Y.T,Y.T=null;var r=Q.p;Q.p=2;var d=rt;rt|=4;try{_h(e,t.alternate,t)}finally{rt=d,Q.p=r,Y.T=n}}ra=3}}function sg(){if(ra===4||ra===3){ra=0,ce();var e=ns,t=br,n=vr,r=Hh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?ra=5:(ra=0,br=ns=null,rg(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(as=null),ka(n),t=t.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(jt,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=Y.T,d=Q.p,Q.p=2,Y.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];f(A.value,{componentStack:A.stack})}}finally{Y.T=t,Q.p=d}}(vr&3)!==0&&Ji(),pn(e),d=e.pendingLanes,(n&4194090)!==0&&(d&42)!==0?e===Ad?Eo++:(Eo=0,Ad=e):Eo=0,wo(0)}}function rg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jr(t)))}function Ji(e){return ag(),ng(),sg(),og()}function og(){if(ra!==5)return!1;var e=ns,t=Sd;Sd=0;var n=ka(vr),r=Y.T,d=Q.p;try{Q.p=32>n?32:n,Y.T=null,n=Td,Td=null;var f=ns,v=vr;if(ra=0,br=ns=null,vr=0,(rt&6)!==0)throw Error(i(331));var A=rt;if(rt|=4,zh(f.current),Uh(f,f.current,v,n),rt=A,wo(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{Q.p=d,Y.T=r,rg(e,t)}}function ig(e,t,n){t=Ya(n,t),t=nd(e.stateNode,t,2),e=Xn(e,t,2),e!==null&&(Na(e,2),pn(e))}function ht(e,t,n){if(e.tag===3)ig(e,e,n);else for(;t!==null;){if(t.tag===3){ig(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(as===null||!as.has(r))){e=Ya(n,e),n=uh(2),r=Xn(t,n,2),r!==null&&(ph(n,r,t,e),Na(r,2),pn(r));break}}t=t.return}}function kd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new t0;var d=new Set;r.set(t,d)}else d=r.get(t),d===void 0&&(d=new Set,r.set(t,d));d.has(n)||(vd=!0,d.add(n),e=o0.bind(null,e,t,n),t.then(e,e))}function o0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,vt===e&&(Ze&n)===n&&(Pt===4||Pt===3&&(Ze&62914560)===Ze&&300>fe()-xd?(rt&2)===0&&Er(e,0):Ed|=n,yr===Ze&&(yr=0)),pn(e)}function lg(e,t){t===0&&(t=Mt()),e=ar(e,t),e!==null&&(Na(e,t),pn(e))}function i0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),lg(e,n)}function l0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,d=e.memoizedState;d!==null&&(n=d.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),lg(e,n)}function c0(e,t){return aa(e,t)}var el=null,xr=null,Rd=!1,tl=!1,jd=!1,Ps=0;function pn(e){e!==xr&&e.next===null&&(xr===null?el=xr=e:xr=xr.next=e),tl=!0,Rd||(Rd=!0,u0())}function wo(e,t){if(!jd&&tl){jd=!0;do for(var n=!1,r=el;r!==null;){if(e!==0){var d=r.pendingLanes;if(d===0)var f=0;else{var v=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-nt(42|e)+1)-1,f&=d&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(n=!0,pg(r,f))}else f=Ze,f=qt(r,r===vt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ca(r,f)||(n=!0,pg(r,f));r=r.next}while(n);jd=!1}}function d0(){cg()}function cg(){tl=Rd=!1;var e=0;Ps!==0&&(v0()&&(e=Ps),Ps=0);for(var t=fe(),n=null,r=el;r!==null;){var d=r.next,f=dg(r,t);f===0?(r.next=null,n===null?el=d:n.next=d,d===null&&(xr=n)):(n=r,(e!==0||(f&3)!==0)&&(tl=!0)),r=d}wo(e)}function dg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,d=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-nt(f),A=1<<v,L=d[v];L===-1?((A&n)===0||(A&r)!==0)&&(d[v]=lt(A,t)):L<=t&&(e.expiredLanes|=A),f&=~A}if(t=vt,n=Ze,n=qt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(ot===2||ot===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Rt(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ca(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Rt(r),ka(n)){case 2:case 8:n=Ce;break;case 32:n=me;break;case 268435456:n=Qe;break;default:n=me}return r=ug.bind(null,e),n=aa(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Rt(r),e.callbackPriority=2,e.callbackNode=null,2}function ug(e,t){if(ra!==0&&ra!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ji()&&e.callbackNode!==n)return null;var r=Ze;return r=qt(e,e===vt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Xh(e,r,t),dg(e,fe()),e.callbackNode!=null&&e.callbackNode===n?ug.bind(null,e):null)}function pg(e,t){if(Ji())return null;Xh(e,t,!0)}function u0(){w0(function(){(rt&6)!==0?aa(ue,d0):cg()})}function Ld(){return Ps===0&&(Ps=Ot()),Ps}function fg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pi(""+e)}function hg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function p0(e,t,n,r,d){if(t==="submit"&&n&&n.stateNode===d){var f=fg((d[We]||null).action),v=r.submitter;v&&(t=(t=v[We]||null)?fg(t.formAction):v.getAttribute("formAction"),t!==null&&(f=t,v=null));var A=new mi("action","action",null,r,d);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ps!==0){var L=v?hg(d,v):new FormData(d);Qc(n,{pending:!0,data:L,method:d.method,action:f},null,L)}}else typeof f=="function"&&(A.preventDefault(),L=v?hg(d,v):new FormData(d),Qc(n,{pending:!0,data:L,method:d.method,action:f},f,L))},currentTarget:d}]})}}for(var Od=0;Od<yc.length;Od++){var _d=yc[Od],f0=_d.toLowerCase(),h0=_d[0].toUpperCase()+_d.slice(1);Ja(f0,"on"+h0)}Ja(Vp,"onAnimationEnd"),Ja(Xp,"onAnimationIteration"),Ja(Gp,"onAnimationStart"),Ja("dblclick","onDoubleClick"),Ja("focusin","onFocus"),Ja("focusout","onBlur"),Ja(jv,"onTransitionRun"),Ja(Lv,"onTransitionStart"),Ja(Ov,"onTransitionCancel"),Ja(Kp,"onTransitionEnd"),ga("onMouseEnter",["mouseout","mouseover"]),ga("onMouseLeave",["mouseout","mouseover"]),ga("onPointerEnter",["pointerout","pointerover"]),ga("onPointerLeave",["pointerout","pointerover"]),$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$t("onBeforeInput",["compositionend","keypress","textInput","paste"]),$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function gg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],d=r.event;r=r.listeners;e:{var f=void 0;if(t)for(var v=r.length-1;0<=v;v--){var A=r[v],L=A.instance,V=A.currentTarget;if(A=A.listener,L!==f&&d.isPropagationStopped())break e;f=A,d.currentTarget=V;try{f(d)}catch(ne){Bi(ne)}d.currentTarget=null,f=L}else for(v=0;v<r.length;v++){if(A=r[v],L=A.instance,V=A.currentTarget,A=A.listener,L!==f&&d.isPropagationStopped())break e;f=A,d.currentTarget=V;try{f(d)}catch(ne){Bi(ne)}d.currentTarget=null,f=L}}}}function He(e,t){var n=t[W];n===void 0&&(n=t[W]=new Set);var r=e+"__bubble";n.has(r)||(mg(t,e,2,!1),n.add(r))}function Pd(e,t,n){var r=0;t&&(r|=4),mg(n,e,r,t)}var al="_reactListening"+Math.random().toString(36).slice(2);function Id(e){if(!e[al]){e[al]=!0,pa.forEach(function(n){n!=="selectionchange"&&(g0.has(n)||Pd(n,!1,e),Pd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[al]||(t[al]=!0,Pd("selectionchange",!1,t))}}function mg(e,t,n,r){switch(Ug(t)){case 2:var d=B0;break;case 8:d=z0;break;default:d=Wd}n=d.bind(null,t,n,e),d=void 0,!sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),r?d!==void 0?e.addEventListener(t,n,{capture:!0,passive:d}):e.addEventListener(t,n,!0):d!==void 0?e.addEventListener(t,n,{passive:d}):e.addEventListener(t,n,!1)}function qd(e,t,n,r,d){var f=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===d)break;if(v===4)for(v=r.return;v!==null;){var L=v.tag;if((L===3||L===4)&&v.stateNode.containerInfo===d)return;v=v.return}for(;A!==null;){if(v=xe(A),v===null)return;if(L=v.tag,L===5||L===6||L===26||L===27){r=f=v;continue e}A=A.parentNode}}r=r.return}xp(function(){var V=f,ne=ac(n),oe=[];e:{var G=Wp.get(e);if(G!==void 0){var K=mi,_e=e;switch(e){case"keypress":if(hi(n)===0)break e;case"keydown":case"keyup":K=cv;break;case"focusin":_e="focus",K=lc;break;case"focusout":_e="blur",K=lc;break;case"beforeblur":case"afterblur":K=lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Zb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=pv;break;case Vp:case Xp:case Gp:K=ev;break;case Kp:K=hv;break;case"scroll":case"scrollend":K=Kb;break;case"wheel":K=mv;break;case"copy":case"cut":case"paste":K=av;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Cp;break;case"toggle":case"beforetoggle":K=bv}var ke=(t&4)!==0,ut=!ke&&(e==="scroll"||e==="scrollend"),z=ke?G!==null?G+"Capture":null:G;ke=[];for(var $=V,H;$!==null;){var re=$;if(H=re.stateNode,re=re.tag,re!==5&&re!==26&&re!==27||H===null||z===null||(re=Ur($,z),re!=null&&ke.push(So($,re,H))),ut)break;$=$.return}0<ke.length&&(G=new K(G,_e,null,n,ne),oe.push({event:G,listeners:ke}))}}if((t&7)===0){e:{if(G=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",G&&n!==tc&&(_e=n.relatedTarget||n.fromElement)&&(xe(_e)||_e[j]))break e;if((K||G)&&(G=ne.window===ne?ne:(G=ne.ownerDocument)?G.defaultView||G.parentWindow:window,K?(_e=n.relatedTarget||n.toElement,K=V,_e=_e?xe(_e):null,_e!==null&&(ut=p(_e),ke=_e.tag,_e!==ut||ke!==5&&ke!==27&&ke!==6)&&(_e=null)):(K=null,_e=V),K!==_e)){if(ke=Ap,re="onMouseLeave",z="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(ke=Cp,re="onPointerLeave",z="onPointerEnter",$="pointer"),ut=K==null?G:Pe(K),H=_e==null?G:Pe(_e),G=new ke(re,$+"leave",K,n,ne),G.target=ut,G.relatedTarget=H,re=null,xe(ne)===V&&(ke=new ke(z,$+"enter",_e,n,ne),ke.target=H,ke.relatedTarget=ut,re=ke),ut=re,K&&_e)t:{for(ke=K,z=_e,$=0,H=ke;H;H=Sr(H))$++;for(H=0,re=z;re;re=Sr(re))H++;for(;0<$-H;)ke=Sr(ke),$--;for(;0<H-$;)z=Sr(z),H--;for(;$--;){if(ke===z||z!==null&&ke===z.alternate)break t;ke=Sr(ke),z=Sr(z)}ke=null}else ke=null;K!==null&&yg(oe,G,K,ke,!1),_e!==null&&ut!==null&&yg(oe,ut,_e,ke,!0)}}e:{if(G=V?Pe(V):window,K=G.nodeName&&G.nodeName.toLowerCase(),K==="select"||K==="input"&&G.type==="file")var Se=Pp;else if(Op(G))if(Ip)Se=Nv;else{Se=Dv;var Be=Av}else K=G.nodeName,!K||K.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?V&&ec(V.elementType)&&(Se=Pp):Se=Cv;if(Se&&(Se=Se(e,V))){_p(oe,Se,n,ne);break e}Be&&Be(e,G,V),e==="focusout"&&V&&G.type==="number"&&V.memoizedProps.value!=null&&Jl(G,"number",G.value)}switch(Be=V?Pe(V):window,e){case"focusin":(Op(Be)||Be.contentEditable==="true")&&(Js=Be,hc=V,Gr=null);break;case"focusout":Gr=hc=Js=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,Yp(oe,n,ne);break;case"selectionchange":if(Rv)break;case"keydown":case"keyup":Yp(oe,n,ne)}var De;if(dc)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Qs?jp(e,n)&&(je="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(je="onCompositionStart");je&&(Np&&n.locale!=="ko"&&(Qs||je!=="onCompositionStart"?je==="onCompositionEnd"&&Qs&&(De=Sp()):(zn=ne,rc="value"in zn?zn.value:zn.textContent,Qs=!0)),Be=nl(V,je),0<Be.length&&(je=new Dp(je,e,null,n,ne),oe.push({event:je,listeners:Be}),De?je.data=De:(De=Lp(n),De!==null&&(je.data=De)))),(De=Ev?wv(e,n):xv(e,n))&&(je=nl(V,"onBeforeInput"),0<je.length&&(Be=new Dp("onBeforeInput","beforeinput",null,n,ne),oe.push({event:Be,listeners:je}),Be.data=De)),p0(oe,e,V,n,ne)}gg(oe,t)})}function So(e,t,n){return{instance:e,listener:t,currentTarget:n}}function nl(e,t){for(var n=t+"Capture",r=[];e!==null;){var d=e,f=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||f===null||(d=Ur(e,n),d!=null&&r.unshift(So(e,d,f)),d=Ur(e,t),d!=null&&r.push(So(e,d,f))),e.tag===3)return r;e=e.return}return[]}function Sr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function yg(e,t,n,r,d){for(var f=t._reactName,v=[];n!==null&&n!==r;){var A=n,L=A.alternate,V=A.stateNode;if(A=A.tag,L!==null&&L===r)break;A!==5&&A!==26&&A!==27||V===null||(L=V,d?(V=Ur(n,f),V!=null&&v.unshift(So(n,V,L))):d||(V=Ur(n,f),V!=null&&v.push(So(n,V,L)))),n=n.return}v.length!==0&&e.push({event:t,listeners:v})}var m0=/\r\n?/g,y0=/\u0000|\uFFFD/g;function bg(e){return(typeof e=="string"?e:""+e).replace(m0,`
`).replace(y0,"")}function vg(e,t){return t=bg(t),bg(e)===t}function sl(){}function dt(e,t,n,r,d,f){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||Ks(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&Ks(e,""+r);break;case"className":Xs(e,"class",r);break;case"tabIndex":Xs(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Xs(e,n,r);break;case"style":Ep(e,r,f);break;case"data":if(t!=="object"){Xs(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=pi(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(n==="formAction"?(t!=="input"&&dt(e,t,"name",d.name,d,null),dt(e,t,"formEncType",d.formEncType,d,null),dt(e,t,"formMethod",d.formMethod,d,null),dt(e,t,"formTarget",d.formTarget,d,null)):(dt(e,t,"encType",d.encType,d,null),dt(e,t,"method",d.method,d,null),dt(e,t,"target",d.target,d,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=pi(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=sl);break;case"onScroll":r!=null&&He("scroll",e);break;case"onScrollEnd":r!=null&&He("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(i(61));if(n=r.__html,n!=null){if(d.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=pi(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":He("beforetoggle",e),He("toggle",e),Vs(e,"popover",r);break;case"xlinkActuate":Fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Fa(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Fa(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Fa(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Fa(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Vs(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Xb.get(n)||n,Vs(e,n,r))}}function Md(e,t,n,r,d,f){switch(n){case"style":Ep(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(i(61));if(n=r.__html,n!=null){if(d.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof r=="string"?Ks(e,r):(typeof r=="number"||typeof r=="bigint")&&Ks(e,""+r);break;case"onScroll":r!=null&&He("scroll",e);break;case"onScrollEnd":r!=null&&He("scrollend",e);break;case"onClick":r!=null&&(e.onclick=sl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dt.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(d=n.endsWith("Capture"),t=n.slice(2,d?n.length-7:void 0),f=e[We]||null,f=f!=null?f[n]:null,typeof f=="function"&&e.removeEventListener(t,f,d),typeof r=="function")){typeof f!="function"&&f!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,d);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):Vs(e,n,r)}}}function oa(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",e),He("load",e);var r=!1,d=!1,f;for(f in n)if(n.hasOwnProperty(f)){var v=n[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:dt(e,t,f,v,n,null)}}d&&dt(e,t,"srcSet",n.srcSet,n,null),r&&dt(e,t,"src",n.src,n,null);return;case"input":He("invalid",e);var A=f=v=d=null,L=null,V=null;for(r in n)if(n.hasOwnProperty(r)){var ne=n[r];if(ne!=null)switch(r){case"name":d=ne;break;case"type":v=ne;break;case"checked":L=ne;break;case"defaultChecked":V=ne;break;case"value":f=ne;break;case"defaultValue":A=ne;break;case"children":case"dangerouslySetInnerHTML":if(ne!=null)throw Error(i(137,t));break;default:dt(e,t,r,ne,n,null)}}mp(e,f,A,L,V,v,d,!1),wa(e);return;case"select":He("invalid",e),r=v=f=null;for(d in n)if(n.hasOwnProperty(d)&&(A=n[d],A!=null))switch(d){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:dt(e,t,d,A,n,null)}t=f,n=v,e.multiple=!!r,t!=null?Gs(e,!!r,t,!1):n!=null&&Gs(e,!!r,n,!0);return;case"textarea":He("invalid",e),f=d=r=null;for(v in n)if(n.hasOwnProperty(v)&&(A=n[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":d=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(i(91));break;default:dt(e,t,v,A,n,null)}bp(e,r,d,f),wa(e);return;case"option":for(L in n)n.hasOwnProperty(L)&&(r=n[L],r!=null)&&(L==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":dt(e,t,L,r,n,null));return;case"dialog":He("beforetoggle",e),He("toggle",e),He("cancel",e),He("close",e);break;case"iframe":case"object":He("load",e);break;case"video":case"audio":for(r=0;r<xo.length;r++)He(xo[r],e);break;case"image":He("error",e),He("load",e);break;case"details":He("toggle",e);break;case"embed":case"source":case"link":He("error",e),He("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in n)if(n.hasOwnProperty(V)&&(r=n[V],r!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:dt(e,t,V,r,n,null)}return;default:if(ec(t)){for(ne in n)n.hasOwnProperty(ne)&&(r=n[ne],r!==void 0&&Md(e,t,ne,r,n,void 0));return}}for(A in n)n.hasOwnProperty(A)&&(r=n[A],r!=null&&dt(e,t,A,r,n,null))}function b0(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,f=null,v=null,A=null,L=null,V=null,ne=null;for(K in n){var oe=n[K];if(n.hasOwnProperty(K)&&oe!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":L=oe;default:r.hasOwnProperty(K)||dt(e,t,K,null,r,oe)}}for(var G in r){var K=r[G];if(oe=n[G],r.hasOwnProperty(G)&&(K!=null||oe!=null))switch(G){case"type":f=K;break;case"name":d=K;break;case"checked":V=K;break;case"defaultChecked":ne=K;break;case"value":v=K;break;case"defaultValue":A=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,t));break;default:K!==oe&&dt(e,t,G,K,r,oe)}}Ql(e,v,A,L,V,ne,f,d);return;case"select":K=v=A=G=null;for(f in n)if(L=n[f],n.hasOwnProperty(f)&&L!=null)switch(f){case"value":break;case"multiple":K=L;default:r.hasOwnProperty(f)||dt(e,t,f,null,r,L)}for(d in r)if(f=r[d],L=n[d],r.hasOwnProperty(d)&&(f!=null||L!=null))switch(d){case"value":G=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==L&&dt(e,t,d,f,r,L)}t=A,n=v,r=K,G!=null?Gs(e,!!n,G,!1):!!r!=!!n&&(t!=null?Gs(e,!!n,t,!0):Gs(e,!!n,n?[]:"",!1));return;case"textarea":K=G=null;for(A in n)if(d=n[A],n.hasOwnProperty(A)&&d!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:dt(e,t,A,null,r,d)}for(v in r)if(d=r[v],f=n[v],r.hasOwnProperty(v)&&(d!=null||f!=null))switch(v){case"value":G=d;break;case"defaultValue":K=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==f&&dt(e,t,v,d,r,f)}yp(e,G,K);return;case"option":for(var _e in n)G=n[_e],n.hasOwnProperty(_e)&&G!=null&&!r.hasOwnProperty(_e)&&(_e==="selected"?e.selected=!1:dt(e,t,_e,null,r,G));for(L in r)G=r[L],K=n[L],r.hasOwnProperty(L)&&G!==K&&(G!=null||K!=null)&&(L==="selected"?e.selected=G&&typeof G!="function"&&typeof G!="symbol":dt(e,t,L,G,r,K));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ke in n)G=n[ke],n.hasOwnProperty(ke)&&G!=null&&!r.hasOwnProperty(ke)&&dt(e,t,ke,null,r,G);for(V in r)if(G=r[V],K=n[V],r.hasOwnProperty(V)&&G!==K&&(G!=null||K!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(i(137,t));break;default:dt(e,t,V,G,r,K)}return;default:if(ec(t)){for(var ut in n)G=n[ut],n.hasOwnProperty(ut)&&G!==void 0&&!r.hasOwnProperty(ut)&&Md(e,t,ut,void 0,r,G);for(ne in r)G=r[ne],K=n[ne],!r.hasOwnProperty(ne)||G===K||G===void 0&&K===void 0||Md(e,t,ne,G,r,K);return}}for(var z in n)G=n[z],n.hasOwnProperty(z)&&G!=null&&!r.hasOwnProperty(z)&&dt(e,t,z,null,r,G);for(oe in r)G=r[oe],K=n[oe],!r.hasOwnProperty(oe)||G===K||G==null&&K==null||dt(e,t,oe,G,r,K)}var $d=null,Ud=null;function rl(e){return e.nodeType===9?e:e.ownerDocument}function Eg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Fd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bd=null;function v0(){var e=window.event;return e&&e.type==="popstate"?e===Bd?!1:(Bd=e,!0):(Bd=null,!1)}var xg=typeof setTimeout=="function"?setTimeout:void 0,E0=typeof clearTimeout=="function"?clearTimeout:void 0,Sg=typeof Promise=="function"?Promise:void 0,w0=typeof queueMicrotask=="function"?queueMicrotask:typeof Sg<"u"?function(e){return Sg.resolve(null).then(e).catch(x0)}:xg;function x0(e){setTimeout(function(){throw e})}function rs(e){return e==="head"}function Tg(e,t){var n=t,r=0,d=0;do{var f=n.nextSibling;if(e.removeChild(n),f&&f.nodeType===8)if(n=f.data,n==="/$"){if(0<r&&8>r){n=r;var v=e.ownerDocument;if(n&1&&To(v.documentElement),n&2&&To(v.body),n&4)for(n=v.head,To(n),v=n.firstChild;v;){var A=v.nextSibling,L=v.nodeName;v[ae]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&v.rel.toLowerCase()==="stylesheet"||n.removeChild(v),v=A}}if(d===0){e.removeChild(f),Lo(t);return}d--}else n==="$"||n==="$?"||n==="$!"?d++:r=n.charCodeAt(0)-48;else r=0;n=f}while(n);Lo(t)}function zd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":zd(n),ve(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function S0(e,t,n,r){for(;e.nodeType===1;){var d=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ae])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=tn(e.nextSibling),e===null)break}return null}function T0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=tn(e.nextSibling),e===null))return null;return e}function Yd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function A0(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Hd=null;function Ag(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Dg(e,t,n){switch(t=rl(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function To(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ve(e)}var Wa=new Map,Cg=new Set;function ol(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var qn=Q.d;Q.d={f:D0,r:C0,D:N0,C:k0,L:R0,m:j0,X:O0,S:L0,M:_0};function D0(){var e=qn.f(),t=Zi();return e||t}function C0(e){var t=Ne(e);t!==null&&t.tag===5&&t.type==="form"?Xf(t):qn.r(e)}var Tr=typeof document>"u"?null:document;function Ng(e,t,n){var r=Tr;if(r&&typeof t=="string"&&t){var d=za(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof n=="string"&&(d+='[crossorigin="'+n+'"]'),Cg.has(d)||(Cg.add(d),e={rel:e,crossOrigin:n,href:t},r.querySelector(d)===null&&(t=r.createElement("link"),oa(t,"link",e),Xe(t),r.head.appendChild(t)))}}function N0(e){qn.D(e),Ng("dns-prefetch",e,null)}function k0(e,t){qn.C(e,t),Ng("preconnect",e,t)}function R0(e,t,n){qn.L(e,t,n);var r=Tr;if(r&&e&&t){var d='link[rel="preload"][as="'+za(t)+'"]';t==="image"&&n&&n.imageSrcSet?(d+='[imagesrcset="'+za(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(d+='[imagesizes="'+za(n.imageSizes)+'"]')):d+='[href="'+za(e)+'"]';var f=d;switch(t){case"style":f=Ar(e);break;case"script":f=Dr(e)}Wa.has(f)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wa.set(f,e),r.querySelector(d)!==null||t==="style"&&r.querySelector(Ao(f))||t==="script"&&r.querySelector(Do(f))||(t=r.createElement("link"),oa(t,"link",e),Xe(t),r.head.appendChild(t)))}}function j0(e,t){qn.m(e,t);var n=Tr;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+za(r)+'"][href="'+za(e)+'"]',f=d;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Dr(e)}if(!Wa.has(f)&&(e=y({rel:"modulepreload",href:e},t),Wa.set(f,e),n.querySelector(d)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Do(f)))return}r=n.createElement("link"),oa(r,"link",e),Xe(r),n.head.appendChild(r)}}}function L0(e,t,n){qn.S(e,t,n);var r=Tr;if(r&&e){var d=Je(r).hoistableStyles,f=Ar(e);t=t||"default";var v=d.get(f);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(Ao(f)))A.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wa.get(f))&&Vd(e,n);var L=v=r.createElement("link");Xe(L),oa(L,"link",e),L._p=new Promise(function(V,ne){L.onload=V,L.onerror=ne}),L.addEventListener("load",function(){A.loading|=1}),L.addEventListener("error",function(){A.loading|=2}),A.loading|=4,il(v,t,r)}v={type:"stylesheet",instance:v,count:1,state:A},d.set(f,v)}}}function O0(e,t){qn.X(e,t);var n=Tr;if(n&&e){var r=Je(n).hoistableScripts,d=Dr(e),f=r.get(d);f||(f=n.querySelector(Do(d)),f||(e=y({src:e,async:!0},t),(t=Wa.get(d))&&Xd(e,t),f=n.createElement("script"),Xe(f),oa(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(d,f))}}function _0(e,t){qn.M(e,t);var n=Tr;if(n&&e){var r=Je(n).hoistableScripts,d=Dr(e),f=r.get(d);f||(f=n.querySelector(Do(d)),f||(e=y({src:e,async:!0,type:"module"},t),(t=Wa.get(d))&&Xd(e,t),f=n.createElement("script"),Xe(f),oa(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(d,f))}}function kg(e,t,n,r){var d=(d=we.current)?ol(d):null;if(!d)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ar(n.href),n=Je(d).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ar(n.href);var f=Je(d).hoistableStyles,v=f.get(e);if(v||(d=d.ownerDocument||d,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=d.querySelector(Ao(e)))&&!f._p&&(v.instance=f,v.state.loading=5),Wa.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wa.set(e,n),f||P0(d,e,n,v.state))),t&&r===null)throw Error(i(528,""));return v}if(t&&r!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Dr(n),n=Je(d).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Ar(e){return'href="'+za(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function Rg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function P0(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),oa(t,"link",n),Xe(t),e.head.appendChild(t))}function Dr(e){return'[src="'+za(e)+'"]'}function Do(e){return"script[async]"+e}function jg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+za(n.href)+'"]');if(r)return t.instance=r,Xe(r),r;var d=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Xe(r),oa(r,"style",d),il(r,n.precedence,e),t.instance=r;case"stylesheet":d=Ar(n.href);var f=e.querySelector(Ao(d));if(f)return t.state.loading|=4,t.instance=f,Xe(f),f;r=Rg(n),(d=Wa.get(d))&&Vd(r,d),f=(e.ownerDocument||e).createElement("link"),Xe(f);var v=f;return v._p=new Promise(function(A,L){v.onload=A,v.onerror=L}),oa(f,"link",r),t.state.loading|=4,il(f,n.precedence,e),t.instance=f;case"script":return f=Dr(n.src),(d=e.querySelector(Do(f)))?(t.instance=d,Xe(d),d):(r=n,(d=Wa.get(f))&&(r=y({},n),Xd(r,d)),e=e.ownerDocument||e,d=e.createElement("script"),Xe(d),oa(d,"link",r),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,il(r,n.precedence,e));return t.instance}function il(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=r.length?r[r.length-1]:null,f=d,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===t)f=A;else if(f!==d)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Xd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ll=null;function Lg(e,t,n){if(ll===null){var r=new Map,d=ll=new Map;d.set(n,r)}else d=ll,r=d.get(n),r||(r=new Map,d.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),d=0;d<n.length;d++){var f=n[d];if(!(f[ae]||f[At]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(t)||"";v=e+v;var A=r.get(v);A?A.push(f):r.set(v,[f])}}return r}function Og(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function I0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function _g(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Co=null;function q0(){}function M0(e,t,n){if(Co===null)throw Error(i(475));var r=Co;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var d=Ar(n.href),f=e.querySelector(Ao(d));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=cl.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=f,Xe(f);return}f=e.ownerDocument||e,n=Rg(n),(d=Wa.get(d))&&Vd(n,d),f=f.createElement("link"),Xe(f);var v=f;v._p=new Promise(function(A,L){v.onload=A,v.onerror=L}),oa(f,"link",n),t.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=cl.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function $0(){if(Co===null)throw Error(i(475));var e=Co;return e.stylesheets&&e.count===0&&Gd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Gd(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function cl(){if(this.count--,this.count===0){if(this.stylesheets)Gd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dl=null;function Gd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dl=new Map,t.forEach(U0,e),dl=null,cl.call(e))}function U0(e,t){if(!(t.state.loading&4)){var n=dl.get(e);if(n)var r=n.get(null);else{n=new Map,dl.set(e,n);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<d.length;f++){var v=d[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(n.set(v.dataset.precedence,v),r=v)}r&&n.set(null,r)}d=t.instance,v=d.getAttribute("data-precedence"),f=n.get(v)||r,f===r&&n.set(null,d),n.set(v,d),this.count++,r=cl.bind(this),d.addEventListener("load",r),d.addEventListener("error",r),f?f.parentNode.insertBefore(d,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var No={$$typeof:T,Provider:null,Consumer:null,_currentValue:be,_currentValue2:be,_threadCount:0};function F0(e,t,n,r,d,f,v,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yt(0),this.hiddenUpdates=yt(null),this.identifierPrefix=r,this.onUncaughtError=d,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Pg(e,t,n,r,d,f,v,A,L,V,ne,oe){return e=new F0(e,t,n,v,A,L,V,oe),t=1,f===!0&&(t|=24),f=ja(3,null,null,t),e.current=f,f.stateNode=e,t=kc(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:r,isDehydrated:n,cache:t},Oc(f),e}function Ig(e){return e?(e=nr,e):nr}function qg(e,t,n,r,d,f){d=Ig(d),r.context===null?r.context=d:r.pendingContext=d,r=Vn(t),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Xn(e,r,t),n!==null&&(Ia(n,e,t),no(n,e,t))}function Mg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Kd(e,t){Mg(e,t),(e=e.alternate)&&Mg(e,t)}function $g(e){if(e.tag===13){var t=ar(e,67108864);t!==null&&Ia(t,e,67108864),Kd(e,67108864)}}var ul=!0;function B0(e,t,n,r){var d=Y.T;Y.T=null;var f=Q.p;try{Q.p=2,Wd(e,t,n,r)}finally{Q.p=f,Y.T=d}}function z0(e,t,n,r){var d=Y.T;Y.T=null;var f=Q.p;try{Q.p=8,Wd(e,t,n,r)}finally{Q.p=f,Y.T=d}}function Wd(e,t,n,r){if(ul){var d=Zd(r);if(d===null)qd(e,t,r,pl,n),Fg(e,r);else if(H0(d,e,t,n,r))r.stopPropagation();else if(Fg(e,r),t&4&&-1<Y0.indexOf(e)){for(;d!==null;){var f=Ne(d);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Zt(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var L=1<<31-nt(v);A.entanglements[1]|=L,v&=~L}pn(f),(rt&6)===0&&(Ki=fe()+500,wo(0))}}break;case 13:A=ar(f,2),A!==null&&Ia(A,f,2),Zi(),Kd(f,2)}if(f=Zd(r),f===null&&qd(e,t,r,pl,n),f===d)break;d=f}d!==null&&r.stopPropagation()}else qd(e,t,r,null,n)}}function Zd(e){return e=ac(e),Qd(e)}var pl=null;function Qd(e){if(pl=null,e=xe(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return pl=e,null}function Ug(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(B()){case ue:return 2;case Ce:return 8;case me:case Le:return 32;case Qe:return 268435456;default:return 32}default:return 32}}var Jd=!1,os=null,is=null,ls=null,ko=new Map,Ro=new Map,cs=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fg(e,t){switch(e){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":ls=null;break;case"pointerover":case"pointerout":ko.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ro.delete(t.pointerId)}}function jo(e,t,n,r,d,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:f,targetContainers:[d]},t!==null&&(t=Ne(t),t!==null&&$g(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function H0(e,t,n,r,d){switch(t){case"focusin":return os=jo(os,e,t,n,r,d),!0;case"dragenter":return is=jo(is,e,t,n,r,d),!0;case"mouseover":return ls=jo(ls,e,t,n,r,d),!0;case"pointerover":var f=d.pointerId;return ko.set(f,jo(ko.get(f)||null,e,t,n,r,d)),!0;case"gotpointercapture":return f=d.pointerId,Ro.set(f,jo(Ro.get(f)||null,e,t,n,r,d)),!0}return!1}function Bg(e){var t=xe(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,da(e.priority,function(){if(n.tag===13){var r=Pa();r=Fn(r);var d=ar(n,r);d!==null&&Ia(d,n,r),Kd(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Zd(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);tc=r,n.target.dispatchEvent(r),tc=null}else return t=Ne(n),t!==null&&$g(t),e.blockedOn=n,!1;t.shift()}return!0}function zg(e,t,n){fl(e)&&n.delete(t)}function V0(){Jd=!1,os!==null&&fl(os)&&(os=null),is!==null&&fl(is)&&(is=null),ls!==null&&fl(ls)&&(ls=null),ko.forEach(zg),Ro.forEach(zg)}function hl(e,t){e.blockedOn===t&&(e.blockedOn=null,Jd||(Jd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,V0)))}var gl=null;function Yg(e){gl!==e&&(gl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){gl===e&&(gl=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],d=e[t+2];if(typeof r!="function"){if(Qd(r||n)===null)continue;break}var f=Ne(n);f!==null&&(e.splice(t,3),t-=3,Qc(f,{pending:!0,data:d,method:n.method,action:r},r,d))}}))}function Lo(e){function t(L){return hl(L,e)}os!==null&&hl(os,e),is!==null&&hl(is,e),ls!==null&&hl(ls,e),ko.forEach(t),Ro.forEach(t);for(var n=0;n<cs.length;n++){var r=cs[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<cs.length&&(n=cs[0],n.blockedOn===null);)Bg(n),n.blockedOn===null&&cs.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var d=n[r],f=n[r+1],v=d[We]||null;if(typeof f=="function")v||Yg(n);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(d=f,v=f[We]||null)A=v.formAction;else if(Qd(d)!==null)continue}else A=v.action;typeof A=="function"?n[r+1]=A:(n.splice(r,3),r-=3),Yg(n)}}}function eu(e){this._internalRoot=e}ml.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,r=Pa();qg(n,r,e,t,null,null)},ml.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qg(e.current,2,null,e,null,null),Zi(),t[j]=null}};function ml(e){this._internalRoot=e}ml.prototype.unstable_scheduleHydration=function(e){if(e){var t=En();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cs.length&&t!==0&&t<cs[n].priority;n++);cs.splice(n,0,e),n===0&&Bg(e)}};var Hg=s.version;if(Hg!=="19.1.4")throw Error(i(527,Hg,"19.1.4"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=m(t),e=e!==null?u(e):null,e=e===null?null:e.stateNode,e};var X0={bundleType:0,version:"19.1.4",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yl.isDisabled&&yl.supportsFiber)try{jt=yl.inject(X0),ye=yl}catch{}}return _o.createRoot=function(e,t){if(!l(e))throw Error(i(299));var n=!1,r="",d=ih,f=lh,v=ch,A=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(A=t.unstable_transitionCallbacks)),t=Pg(e,1,!1,null,null,n,r,d,f,v,A,null),e[j]=t.current,Id(e),new eu(t)},_o.hydrateRoot=function(e,t,n){if(!l(e))throw Error(i(299));var r=!1,d="",f=ih,v=lh,A=ch,L=null,V=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(v=n.onCaughtError),n.onRecoverableError!==void 0&&(A=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(L=n.unstable_transitionCallbacks),n.formState!==void 0&&(V=n.formState)),t=Pg(e,1,!0,t,n??null,r,d,f,v,A,L,V),t.context=Ig(null),n=t.current,r=Pa(),r=Fn(r),d=Vn(r),d.callback=null,Xn(n,d,r),n=r,t.current.lanes=n,Na(t,n),pn(t),e[j]=t.current,Id(e),new ml(t)},_o.version="19.1.4",_o}var tm;function sE(){if(tm)return au.exports;tm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),au.exports=nE(),au.exports}var tp=sE();const rE=ai(tp),oE=$l({__proto__:null,default:rE},[tp]);var q=Ul();const te=ai(q),Ey=$l({__proto__:null,default:te},[q]);const iE=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lE=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,o,i)=>i?i.toUpperCase():o.toLowerCase()),am=a=>{const s=lE(a);return s.charAt(0).toUpperCase()+s.slice(1)},wy=(...a)=>a.filter((s,o,i)=>!!s&&s.trim()!==""&&i.indexOf(s)===o).join(" ").trim(),cE=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};var dE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const uE=q.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:l="",children:p,iconNode:g,...h},m)=>q.createElement("svg",{ref:m,...dE,width:s,height:s,stroke:a,strokeWidth:i?Number(o)*24/Number(s):o,className:wy("lucide",l),...!p&&!cE(h)&&{"aria-hidden":"true"},...h},[...g.map(([u,y])=>q.createElement(u,y)),...Array.isArray(p)?p:[p]]));const ze=(a,s)=>{const o=q.forwardRef(({className:i,...l},p)=>q.createElement(uE,{ref:p,iconNode:s,className:wy(`lucide-${iE(am(a))}`,`lucide-${a}`,i),...l}));return o.displayName=am(a),o};const pE=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],xy=ze("archive",pE);const fE=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],hE=ze("arrow-down",fE);const gE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Sy=ze("arrow-left",gE);const mE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],yE=ze("arrow-right",mE);const bE=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],vE=ze("arrow-up",bE);const EE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Lr=ze("check",EE);const wE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],gs=ze("chevron-down",wE);const xE=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ty=ze("chevron-left",xE);const SE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ap=ze("chevron-right",SE);const TE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nm=ze("circle-check",TE);const AE=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],DE=ze("clipboard-check",AE);const CE=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],np=ze("database",CE);const NE=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Us=ze("download",NE);const kE=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],RE=ze("eye",kE);const jE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],LE=ze("file-check-2",jE);const OE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],_E=ze("file-code-2",OE);const PE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],sm=ze("file-plus-2",PE);const IE=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],qE=ze("file-search",IE);const ME=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],ms=ze("file-text",ME);const $E=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Cu=ze("folder",$E);const UE=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],FE=ze("funnel",UE);const BE=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],zE=ze("git-branch",BE);const YE=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],ys=ze("hard-drive",YE);const HE=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Uo=ze("layers",HE);const VE=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],$a=ze("loader-circle",VE);const XE=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],GE=ze("monitor",XE);const KE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ko=ze("plus",KE);const WE=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ZE=ze("refresh-cw",WE);const QE=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],rm=ze("save",QE);const JE=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Wo=ze("search",JE);const ew=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],tw=ze("settings-2",ew);const aw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Nu=ze("shield-check",aw);const nw=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],ku=ze("sliders-horizontal",nw);const sw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],jl=ze("trash-2",sw);const rw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],bs=ze("triangle-alert",rw);const ow=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],_r=ze("upload",ow);const iw=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],lw=ze("wrench",iw);const cw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],om=ze("x",cw);function dw(a,s){if(a instanceof RegExp)return{keys:!1,pattern:a};var o,i,l,p,g=[],h="",m=a.split("/");for(m[0]||m.shift();l=m.shift();)o=l[0],o==="*"?(g.push(o),h+=l[1]==="?"?"(?:/(.*))?":"/(.*)"):o===":"?(i=l.indexOf("?",1),p=l.indexOf(".",1),g.push(l.substring(1,~i?i:~p?p:l.length)),h+=~i&&!~p?"(?:/([^/]+?))?":"/([^/]+?)",~p&&(h+=(~i?"?":"")+"\\"+l.substring(p))):h+="/"+l;return{keys:g,pattern:new RegExp("^"+h+(s?"(?=$|/)":"/?$"),"i")}}var iu={exports:{}},lu={};var im;function uw(){if(im)return lu;im=1;var a=Ul();function s(b,E){return b===E&&(b!==0||1/b===1/E)||b!==b&&E!==E}var o=typeof Object.is=="function"?Object.is:s,i=a.useState,l=a.useEffect,p=a.useLayoutEffect,g=a.useDebugValue;function h(b,E){var x=E(),R=i({inst:{value:x,getSnapshot:E}}),C=R[0].inst,D=R[1];return p(function(){C.value=x,C.getSnapshot=E,m(C)&&D({inst:C})},[b,x,E]),l(function(){return m(C)&&D({inst:C}),b(function(){m(C)&&D({inst:C})})},[b]),g(x),x}function m(b){var E=b.getSnapshot;b=b.value;try{var x=E();return!o(b,x)}catch{return!0}}function u(b,E){return E()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?u:h;return lu.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:y,lu}var lm;function pw(){return lm||(lm=1,iu.exports=uw()),iu.exports}var fw=pw();const hw=Ey.useInsertionEffect,gw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ay=gw?q.useLayoutEffect:q.useEffect,mw=hw||Ay,sp=a=>{const s=q.useRef([a,(...o)=>s[0](...o)]).current;return mw(()=>{s[0]=a}),s[1]},cm=["popstate","pushState","replaceState","hashchange"];let Fo=[];const dm=()=>Fo.forEach(a=>a()),yw=a=>(Fo.push(a)===1&&cm.forEach(s=>addEventListener(s,dm)),()=>{Fo=Fo.filter(s=>s!==a),Fo.length||cm.forEach(s=>removeEventListener(s,dm))}),Dy=(a,s)=>fw.useSyncExternalStore(yw,a,s),um=()=>location.search,bw=({ssrSearch:a}={})=>Dy(um,a!=null?()=>a:um),pm=()=>location.pathname,vw=({ssrPath:a}={})=>Dy(pm,a!=null?()=>a:pm),Ew=(a,{replace:s=!1,state:o=null}={})=>history[s?"replaceState":"pushState"](o,"",a),ww=a=>[vw(a),Ew],fm=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[fm]>"u"){for(const a of["pushState","replaceState"]){const s=history[a];history[a]=function(){const o=s.apply(this,arguments),i=new Event(a);return i.arguments=arguments,dispatchEvent(i),o}}Object.defineProperty(window,fm,{value:!0})}const Cy=(a="")=>a==="/"?"":a,xw=(a,s)=>a[0]==="~"?a.slice(1):Cy(s)+a,Sw=(a,s)=>(a=hm(Cy(a)),s=hm(s),!a||(s.toLowerCase()+"/").startsWith(a.toLowerCase()+"/")?s.slice(a.length)||"/":"~"+s),hm=a=>{try{return a.includes("%")?decodeURI(a):a}catch{return a}},Ny={hook:ww,searchHook:bw,parser:dw,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:a=>a,aroundNav:(a,s,o)=>a(s,o)},ky=q.createContext(Ny),Fl=()=>q.useContext(ky),Tw={};q.createContext(Tw);const rp=a=>{const[s,o]=a.hook(a);return[Sw(a.base,s),sp((i,l)=>a.aroundNav(o,xw(i,a.base),l))]},Ry=()=>rp(Fl()),Aw=({children:a,...s})=>{const o=Fl(),i=s.hook?Ny:o;let l=i;if(s.ssrPath){const[m,u=s.ssrSearch??""]=s.ssrPath.split("?");m&&(s.ssrSearch=u,s.ssrPath=m)}s.hrefs=s.hrefs??s.hook?.hrefs,s.searchHook=s.searchHook??s.hook?.searchHook;let p=q.useRef(i),g=p.current,h=g;for(let m in i){const u=m==="base"?i[m]+(s[m]??""):s[m]??i[m];u!==h[m]&&(g===h&&(p.current=h={...h}),h[m]=u),(u!==i[m]||u!==l[m])&&(l=h)}return q.createElement(ky.Provider,{value:l},a)},la=q.forwardRef((a,s)=>{const o=Fl(),[i,l]=rp(o),{to:p="",href:g=p,onClick:h,asChild:m,children:u,className:y,replace:b,state:E,transition:x,...R}=a;return R.onClick=sp(C=>{C.ctrlKey||C.metaKey||C.altKey||C.shiftKey||C.button!==0||(h?.(C),C.defaultPrevented||(C.preventDefault(),l(g,a)))}),R.href=o.hrefs(g[0]==="~"?g.slice(1):o.base+g,o),y!==void 0&&(R.className=y?.call?y(i===g):y),s&&(R.ref=s),m&&q.isValidElement(u)?q.cloneElement(u,R):q.createElement("a",R,u)}),Dw=a=>{const{to:s,href:o=s}=a,i=Fl(),[,l]=rp(i),p=sp(()=>l(s||o,a)),{ssrContext:g}=i;return Ay(()=>{p()},[]),g&&(g.redirectTo=s),null},jy=`To use an existing Clerk app, run:
npx clerk@latest link
npx clerk@latest env pull

For production keys, run:
npx clerk@latest env pull --instance prod`,Ly="Or copy keys from https://dashboard.clerk.com/~/api-keys into your .env file.",gm=`To create a new Clerk app, run:
npx clerk@latest init

'npx clerk@latest init' does not need a Clerk account and writes temporary dev keys.

${jy}

${Ly}`,Cw=`${jy}

${Ly}`,Nw=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:`The publishableKey passed to Clerk is invalid (key={{key}}, expected format: pk_test_... or pk_live_...).

${gm}`,MissingPublishableKeyErrorMessage:`Clerk keys are missing from your environment.

${gm}`,MissingSecretKeyErrorMessage:`Missing secretKey.

${Cw}`,MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function Oy({packageName:a,customMessages:s}){let o=a;function i(p,g){if(!g)return`${o}: ${p}`;let h=p;const m=p.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const u of m){const y=(g[u[1]]||"").toString();h=h.replace(`{{${u[1]}}}`,y)}return`${o}: ${h}`}const l={...Nw,...s};return{setPackageName({packageName:p}){return typeof p=="string"&&(o=p),this},setMessages({customMessages:p}){return Object.assign(l,p||{}),this},throwInvalidPublishableKeyError(p){throw new Error(i(l.InvalidPublishableKeyErrorMessage,p))},throwInvalidProxyUrl(p){throw new Error(i(l.InvalidProxyUrlErrorMessage,p))},throwMissingPublishableKeyError(){throw new Error(i(l.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(i(l.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(p){throw new Error(i(l.MissingClerkProvider,p))},throw(p){throw new Error(i(p))}}}const kw=()=>{try{return!1}catch{}return!1},Rw=()=>{try{return!1}catch{}return!1},jw=()=>{try{return!0}catch{}return!1};var mm=Object.prototype.hasOwnProperty;function ym(a,s,o){for(o of a.keys())if(Yo(o,s))return o}function Yo(a,s){var o,i,l;if(a===s)return!0;if(a&&s&&(o=a.constructor)===s.constructor){if(o===Date)return a.getTime()===s.getTime();if(o===RegExp)return a.toString()===s.toString();if(o===Array){if((i=a.length)===s.length)for(;i--&&Yo(a[i],s[i]););return i===-1}if(o===Set){if(a.size!==s.size)return!1;for(i of a)if(l=i,l&&typeof l=="object"&&(l=ym(s,l),!l)||!s.has(l))return!1;return!0}if(o===Map){if(a.size!==s.size)return!1;for(i of a)if(l=i[0],l&&typeof l=="object"&&(l=ym(s,l),!l)||!Yo(i[1],s.get(l)))return!1;return!0}if(o===ArrayBuffer)a=new Uint8Array(a),s=new Uint8Array(s);else if(o===DataView){if((i=a.byteLength)===s.byteLength)for(;i--&&a.getInt8(i)===s.getInt8(i););return i===-1}if(ArrayBuffer.isView(a)){if((i=a.byteLength)===s.byteLength)for(;i--&&a[i]===s[i];);return i===-1}if(!o||typeof a=="object"){i=0;for(o in a)if(mm.call(a,o)&&++i&&!mm.call(s,o)||!(o in s)||!Yo(a[o],s[o]))return!1;return Object.keys(s).length===i}}return a!==a&&s!==s}function Lw(a,s){if(!a)throw typeof s=="string"?new Error(s):new Error(`${s.displayName} not found`)}const qr=(a,s)=>{const{assertCtxFn:o=Lw}={},i=te.createContext(void 0);return i.displayName=a,[i,()=>{const g=te.useContext(i);return o(g,`${a} not found`),g.value},()=>{const g=te.useContext(i);return g?g.value:{}}]},[Ow,_w]=qr("ClerkInstanceContext");qr("InitialStateContext");te.createContext({});qr("CheckoutContext");function Pw(a){if(!te.useContext(Ow)){if(typeof a=="function"){a();return}throw new Error(`${a} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}function Iw(a){const s=function(){};let o;return o=new Proxy(s,{get(i,l){if(l!=="then")return l==="toString"?()=>`[${a}]`:l===Symbol.toPrimitive?()=>0:o},apply(){return o},construct(){return o},has(){return!1},set(){return!1}}),o}Iw("ClerkMockQueryClient");typeof window<"u"?te.useLayoutEffect:te.useEffect;const bm=Yo,qw=a=>{const s=q.useRef(a);return q.useEffect(()=>{s.current=a},[a]),s.current},qa=(a,s,o)=>{const i=!!o,l=q.useRef(o);q.useEffect(()=>{l.current=o},[o]),q.useEffect(()=>{if(!i||!a)return()=>{};const p=(...g)=>{l.current&&l.current(...g)};return a.on(s,p),()=>{a.off(s,p)}},[i,s,a,l])},_y=te.createContext(null);_y.displayName="ElementsContext";const Mw=(a,s)=>{if(!a)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${s} in an <Elements> provider.`);return a},Ll=a=>a!==null&&typeof a=="object",$w=(a,s,o)=>Ll(a)?Object.keys(a).reduce((i,l)=>{const p=!Ll(s)||!Py(a[l],s[l]);return o.includes(l)?(p&&console.warn(`Unsupported prop change: options.${l} is not a mutable property.`),i):p?{...i||{},[l]:a[l]}:i},null):null,vm="[object Object]",Py=(a,s)=>{if(!Ll(a)||!Ll(s))return a===s;const o=Array.isArray(a);if(o!==Array.isArray(s))return!1;const i=Object.prototype.toString.call(a)===vm;if(i!==(Object.prototype.toString.call(s)===vm))return!1;if(!i&&!o)return a===s;const l=Object.keys(a),p=Object.keys(s);if(l.length!==p.length)return!1;const g={};for(let b=0;b<l.length;b+=1)g[l[b]]=!0;for(let b=0;b<p.length;b+=1)g[p[b]]=!0;const h=Object.keys(g);if(h.length!==l.length)return!1;const m=a,u=s,y=b=>Py(m[b],u[b]);return h.every(y)},Em=a=>Mw(te.useContext(_y),a),Uw=a=>a.charAt(0).toUpperCase()+a.slice(1),Fw=(a,s)=>{const o=`${Uw(a)}Element`,p=s?g=>{Em(`mounts <${o}>`);const{id:h,className:m}=g;return te.createElement("div",{id:h,className:m})}:({id:g,className:h,fallback:m,options:u={},onBlur:y,onFocus:b,onReady:E,onChange:x,onEscape:R,onClick:C,onLoadError:D,onLoaderStart:S,onNetworksChange:N,onConfirm:T,onCancel:_,onShippingAddressChange:w,onShippingRateChange:P})=>{const k=Em(`mounts <${o}>`),I="elements"in k?k.elements:null,[Z,se]=te.useState(null),ee=te.useRef(null),le=te.useRef(null),[Te,he]=q.useState(!1);qa(Z,"blur",y),qa(Z,"focus",b),qa(Z,"escape",R),qa(Z,"click",C),qa(Z,"loaderror",D),qa(Z,"loaderstart",S),qa(Z,"networkschange",N),qa(Z,"confirm",T),qa(Z,"cancel",_),qa(Z,"shippingaddresschange",w),qa(Z,"shippingratechange",P),qa(Z,"change",x);let de;E&&(de=()=>{he(!0),E(Z)}),qa(Z,"ready",de),te.useLayoutEffect(()=>{if(ee.current===null&&le.current!==null&&I){let Q=null;I&&(Q=I.create(a,u)),ee.current=Q,se(Q),Q&&Q.mount(le.current)}},[I,u]);const Y=qw(u);return te.useEffect(()=>{if(!ee.current)return;const Q=$w(u,Y,["paymentRequest"]);Q&&"update"in ee.current&&ee.current.update(Q)},[u,Y]),te.useLayoutEffect(()=>()=>{if(ee.current&&typeof ee.current.destroy=="function")try{ee.current.destroy(),ee.current=null}catch{}},[]),te.createElement(te.Fragment,null,!Te&&m,te.createElement("div",{id:g,style:{height:Te?"unset":"0px",visibility:Te?"visible":"hidden"},className:h,ref:le}))};return p.displayName=o,p.__elementType=a,p};Fw("payment",typeof window>"u");qr("PaymentElementContext");qr("StripeUtilsContext");const[V2,,Bw]=qr("PortalProvider"),zw=()=>{const a=Bw();return a&&"getContainer"in a&&a.getContainer?a.getContainer:()=>null},op=Oy({packageName:"@clerk/react"});function Yw(a){op.setMessages(a).setPackageName(a)}const Hw=_w,Vw=a=>{Pw(()=>{op.throwMissingClerkProviderError({source:a})})};var Bl=vy();const Xw=ai(Bl),Gw=$l({__proto__:null,default:Xw},[Bl]),va=a=>{kw()&&console.error(`Clerk: ${a}`)},wm=(a,...s)=>{const o={...a};for(const i of s)delete o[i];return o},Kw=a=>`You've passed multiple children components to <${a}/>. You can only pass a single child component or text.`,Ww="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Zw="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Qw="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",Jw="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",ex=a=>`<${a} /> can only accept <${a}.Page /> and <${a}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,tx=a=>`Missing props. <${a}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,ax=a=>`Missing props. <${a}.Link /> component requires the following props: url, label and labelIcon.`,nx="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",sx="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",rx="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",ox="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",ix="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",lx="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",cx="Missing props. <UserButton.Action /> component requires the following props: label.",ni=a=>s=>{try{return te.Children.only(a)}catch{const o=te.Children.toArray(a);return o.length===1&&te.isValidElement(o[0])?o[0]:op.throw(Kw(s))}},si=(a,s)=>(a||(a=s),typeof a=="string"&&(a=te.createElement("button",null,a)),a),ri=a=>(...s)=>{if(a&&typeof a=="function")return a(...s)},Ho=a=>{const[s,o]=q.useState(new Map),i=q.useRef(s),l=q.useRef(new Map),p=q.useRef(new Map);i.current=s,l.current=new Map(a.map(h=>[h.id,h.component]));const g=new Set(a.map(h=>h.id));return p.current.forEach((h,m)=>{g.has(m)||p.current.delete(m)}),a.map(h=>{const m=h.id,u=p.current.get(m);if(u)return u;const y=()=>{const E=i.current.get(m),x=l.current.get(m);return E?Bl.createPortal(x,E):null},b={id:h.id,mount:E=>o(x=>new Map(x).set(m,E)),unmount:()=>o(E=>{const x=new Map(E);return x.set(m,null),x}),portal:y};return p.current.set(m,b),b})},ya=(a,s)=>!!a&&te.isValidElement(a)&&a?.type===s,Iy=(a,s)=>$y({children:a,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:ii,PageComponent:oi,MenuItemsComponent:Yl,componentName:"UserProfile"},s),qy=(a,s)=>$y({children:a,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:Vl,PageComponent:Hl,componentName:"OrganizationProfile"},s),My=a=>{const s=[],o=[Vl,Hl,Yl,oi,ii];return te.Children.forEach(a,i=>{o.some(l=>ya(i,l))||s.push(i)}),s},$y=(a,s)=>{const{children:o,LinkComponent:i,PageComponent:l,MenuItemsComponent:p,reorderItemsLabels:g,componentName:h}=a,{allowForAnyChildren:m=!1}=s||{},u=[],y=new Map;te.Children.forEach(o,T=>{if(!ya(T,l)&&!ya(T,i)&&!ya(T,p)){T&&!m&&va(ex(h));return}const{props:_}=T,{children:w,label:P,url:k,labelIcon:I}=_,Z=T.key;if(ya(T,l))if(Sm(_,g))u.push({label:P});else if(cu(_))u.push({label:P,labelIcon:I,children:w,url:k,portalId:xm("page",_,Z,y)});else{va(tx(h));return}if(ya(T,i))if(du(_))u.push({label:P,labelIcon:I,url:k,portalId:xm("link",_,Z,y)});else{va(ax(h));return}});const b=[],E=[],x=[];u.forEach((T,_)=>{if(cu(T)){b.push({component:T.children,id:T.portalId||_}),E.push({component:T.labelIcon,id:T.portalId||_});return}du(T)&&x.push({component:T.labelIcon,id:T.portalId||_})});const R=Ho(b),C=Ho(E),D=Ho(x),S=[],N=[];return u.forEach((T,_)=>{if(Sm(T,g)){S.push({label:T.label});return}if(cu(T)){const{portal:w,mount:P,unmount:k}=R.find(ee=>ee.id===(T.portalId||_)),{portal:I,mount:Z,unmount:se}=C.find(ee=>ee.id===(T.portalId||_));S.push({label:T.label,url:T.url,mount:P,unmount:k,mountIcon:Z,unmountIcon:se}),N.push({key:`content:${T.portalId||_}`,portal:w}),N.push({key:`label:${T.portalId||_}`,portal:I});return}if(du(T)){const{portal:w,mount:P,unmount:k}=D.find(I=>I.id===(T.portalId||_));S.push({label:T.label,url:T.url,mountIcon:P,unmountIcon:k}),N.push({key:`label:${T.portalId||_}`,portal:w});return}}),{customPages:S,customPagesPortals:N}},xm=(a,s,o,i)=>{if(o!=null)return`${a}:key:${o}`;const l=`${a}:${s.label}:${s.url}`,p=i.get(l)??0;return i.set(l,p+1),`${l}:${p}`},Sm=(a,s)=>{const{children:o,label:i,url:l,labelIcon:p}=a;return!o&&!l&&!p&&s.some(g=>g===i)},cu=a=>{const{children:s,label:o,url:i,labelIcon:l}=a;return!!s&&!!i&&!!l&&!!o},du=a=>{const{children:s,label:o,url:i,labelIcon:l}=a;return!s&&!!i&&!!l&&!!o},dx=(a,s)=>ux({children:a,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:Yl,MenuActionComponent:Fy,MenuLinkComponent:By,UserProfileLinkComponent:ii,UserProfilePageComponent:oi,allowForAnyChildren:s?.allowForAnyChildren??!1}),ux=({children:a,MenuItemsComponent:s,MenuActionComponent:o,MenuLinkComponent:i,UserProfileLinkComponent:l,UserProfilePageComponent:p,reorderItemsLabels:g,allowForAnyChildren:h=!1})=>{const m=[],u=[],y=[],b=new Map;te.Children.forEach(a,D=>{if(!ya(D,s)&&!ya(D,l)&&!ya(D,p)){D&&!h&&va(nx);return}if(ya(D,l)||ya(D,p))return;const{props:S}=D;te.Children.forEach(S.children,N=>{if(!ya(N,o)&&!ya(N,i)){N&&va(sx);return}const{props:T}=N,_=N.key,{label:w,labelIcon:P,href:k,onClick:I,open:Z}=T;if(ya(N,o))if(Tm(T,g))m.push({label:w});else if(pu(T)){const se={label:w,labelIcon:P};if(I!==void 0)m.push({...se,onClick:I,portalId:uu("action",T,_,b)});else if(Z!==void 0)m.push({...se,open:Z.startsWith("/")?Z:`/${Z}`,portalId:uu("action",T,_,b)});else{va("Custom menu item must have either onClick or open property");return}}else{va(cx);return}if(ya(N,i))if(fu(T))m.push({label:w,labelIcon:P,href:k,portalId:uu("link",T,_,b)});else{va(lx);return}})});const E=[],x=[];m.forEach((D,S)=>{pu(D)&&E.push({component:D.labelIcon,id:D.portalId||S}),fu(D)&&x.push({component:D.labelIcon,id:D.portalId||S})});const R=Ho(E),C=Ho(x);return m.forEach((D,S)=>{if(Tm(D,g)&&u.push({label:D.label}),pu(D)){const{portal:N,mount:T,unmount:_}=R.find(P=>P.id===(D.portalId||S)),w={label:D.label,mountIcon:T,unmountIcon:_};"onClick"in D?w.onClick=D.onClick:"open"in D&&(w.open=D.open),u.push(w),y.push({key:`icon:${D.portalId||S}`,portal:N})}if(fu(D)){const{portal:N,mount:T,unmount:_}=C.find(w=>w.id===(D.portalId||S));u.push({label:D.label,href:D.href,mountIcon:T,unmountIcon:_}),y.push({key:`icon:${D.portalId||S}`,portal:N})}}),{customMenuItems:u,customMenuItemsPortals:y}},uu=(a,s,o,i)=>{if(o!=null)return`${a}:key:${o}`;const l=s.href||s.open||"",p=`${a}:${s.label}:${l}`,g=i.get(p)??0;return i.set(p,g+1),`${p}:${g}`},Tm=(a,s)=>{const{children:o,label:i,onClick:l,labelIcon:p}=a;return!o&&!l&&!p&&s.some(g=>g===i)},pu=a=>{const{label:s,labelIcon:o,onClick:i,open:l}=a;return!!o&&!!s&&(typeof i=="function"||typeof l=="string")},fu=a=>{const{label:s,href:o,labelIcon:i}=a;return!!o&&!!i&&!!s},px=a=>{const s=a?.isReady;return o=>new Promise((i,l)=>{const{root:p=document?.body,selector:g,timeout:h=0}=o;if(!p){l(new Error("No root element provided"));return}let m=p;if(g&&(m=p?.querySelector(g)),s(m,g)){i();return}const u=new MutationObserver(y=>{for(const b of y)if(!m&&g&&(m=p?.querySelector(g)),(a.childList&&b.type==="childList"||a.attributes&&b.type==="attributes")&&s(m,g)){u.disconnect(),i();return}});u.observe(p,a),h>0&&setTimeout(()=>{u.disconnect(),l(new Error(`Timeout waiting for ${g}`))},h)})},fx=px({childList:!0,subtree:!0,isReady:(a,s)=>!!a?.childElementCount&&a?.matches?.(s)&&a.childElementCount>0});function ta(a,s){const o=q.useRef(),[i,l]=q.useState("rendering");return q.useEffect(()=>{if(!a)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!o.current){const p=`[data-clerk-component="${a}"]`,g=s?.selector;o.current=fx({selector:g?p+g:p}).then(()=>{l("rendered")}).catch(()=>{l("error")})}},[a,s?.selector]),i}const bl=a=>"mount"in a,Am=a=>"open"in a,Dm=a=>a?.map(({mountIcon:s,unmountIcon:o,...i})=>i);var Yt=class extends te.PureComponent{constructor(...a){super(...a),this.rootRef=te.createRef()}componentDidUpdate(a){if(!bl(a)||!bl(this.props))return;const s=wm(a.props||{},"customPages","customMenuItems","children"),o=wm(this.props.props||{},"customPages","customMenuItems","children"),i=a.props?.customPages?.length!==this.props.props?.customPages?.length,l=a.props?.customMenuItems?.length!==this.props.props?.customMenuItems?.length,p=Dm(a.props?.customMenuItems),g=Dm(this.props.props?.customMenuItems);(!bm(s,o)||!bm(p,g)||i||l)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(bl(this.props)&&this.props.mount(this.rootRef.current,this.props.props),Am(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(bl(this.props)&&this.props.unmount(this.rootRef.current),Am(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:a=!1}=this.props,s={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return te.createElement(te.Fragment,null,!a&&te.createElement("div",s),this.props.children)}};const st=(a,s)=>{const o=(typeof s=="string"?s:s?.component)||a.displayName||a.name||"Component";a.displayName=o;const i=typeof s=="string"?void 0:s,l=p=>{Vw(o||"withClerk");const g=Hw(),h=zw();return!g.loaded&&!i?.renderWhileLoading?null:te.createElement(a,{getContainer:h,...p,component:o,clerk:g})};return l.displayName=`withClerk(${o})`,l},zl=a=>te.createElement(te.Fragment,null,a?.customPagesPortals?.map(({key:s,portal:o})=>q.createElement(o,{key:s})),a?.customMenuItemsPortals?.map(({key:s,portal:o})=>q.createElement(o,{key:s})));st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountSignIn,unmount:a.unmountSignIn,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"SignIn",renderWhileLoading:!0});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountSignUp,unmount:a.unmountSignUp,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"SignUp",renderWhileLoading:!0});function oi({children:a}){return va(Ww),te.createElement(te.Fragment,null,a)}function ii({children:a}){return va(Zw),te.createElement(te.Fragment,null,a)}const hx=st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=Iy(i.children);return te.createElement(te.Fragment,null,l&&o,te.createElement(Yt,{component:s,mount:a.mountUserProfile,unmount:a.unmountUserProfile,updateProps:a.__internal_updateProps,props:{...i,customPages:g},rootProps:p},te.createElement(zl,{customPagesPortals:h})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(hx,{Page:oi,Link:ii});const Uy=q.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),gx=st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=Iy(i.children,{allowForAnyChildren:!!i.__experimental_asProvider}),m={...i.userProfileProps,customPages:g},{customMenuItems:u,customMenuItemsPortals:y}=dx(i.children,{allowForAnyChildren:!!i.__experimental_asProvider}),b=My(i.children),E={mount:a.mountUserButton,unmount:a.unmountUserButton,updateProps:a.__internal_updateProps,props:{...i,userProfileProps:m,customMenuItems:u}},x={customPagesPortals:h,customMenuItemsPortals:y};return te.createElement(Uy.Provider,{value:E},l&&o,a.loaded&&te.createElement(Yt,{component:s,...E,hideRootHtmlElement:!!i.__experimental_asProvider,rootProps:p},i.__experimental_asProvider?b:null,te.createElement(zl,x)))},{component:"UserButton",renderWhileLoading:!0});function Yl({children:a}){return va(rx),te.createElement(te.Fragment,null,a)}function Fy({children:a}){return va(ox),te.createElement(te.Fragment,null,a)}function By({children:a}){return va(ix),te.createElement(te.Fragment,null,a)}function mx(a){const s=q.useContext(Uy),o={...s,props:{...s.props,...a}};return te.createElement(Yt,o)}Object.assign(gx,{UserProfilePage:oi,UserProfileLink:ii,MenuItems:Yl,Action:Fy,Link:By,__experimental_Outlet:mx});function Hl({children:a}){return va(Qw),te.createElement(te.Fragment,null,a)}function Vl({children:a}){return va(Jw),te.createElement(te.Fragment,null,a)}const yx=st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=qy(i.children);return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountOrganizationProfile,unmount:a.unmountOrganizationProfile,updateProps:a.__internal_updateProps,props:{...i,customPages:g},rootProps:p},te.createElement(zl,{customPagesPortals:h})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(yx,{Page:Hl,Link:Vl});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountCreateOrganization,unmount:a.unmountCreateOrganization,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"CreateOrganization",renderWhileLoading:!0});const zy=q.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),bx=st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=qy(i.children,{allowForAnyChildren:!!i.__experimental_asProvider}),m={...i.organizationProfileProps,customPages:g},u=My(i.children),y={mount:a.mountOrganizationSwitcher,unmount:a.unmountOrganizationSwitcher,updateProps:a.__internal_updateProps,props:{...i,organizationProfileProps:m},rootProps:p,component:s};return a.__experimental_prefetchOrganizationSwitcher(),te.createElement(zy.Provider,{value:y},te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{...y,hideRootHtmlElement:!!i.__experimental_asProvider},i.__experimental_asProvider?u:null,te.createElement(zl,{customPagesPortals:h}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function vx(a){const s=q.useContext(zy),o={...s,props:{...s.props,...a}};return te.createElement(Yt,o)}Object.assign(bx,{OrganizationProfilePage:Hl,OrganizationProfileLink:Vl,__experimental_Outlet:vx});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountOrganizationList,unmount:a.unmountOrganizationList,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"OrganizationList",renderWhileLoading:!0});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,open:a.openGoogleOneTap,close:a.closeGoogleOneTap,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"GoogleOneTap",renderWhileLoading:!0});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountWaitlist,unmount:a.unmountWaitlist,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"Waitlist",renderWhileLoading:!0});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s,{selector:'[data-component-status="ready"]'})==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountPricingTable,unmount:a.unmountPricingTable,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"PricingTable",renderWhileLoading:!0});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountAPIKeys,unmount:a.unmountAPIKeys,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"ApiKeys",renderWhileLoading:!0});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.__internal_mountOAuthConsent,unmount:a.__internal_unmountOAuthConsent,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"OAuthConsent",renderWhileLoading:!0});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.__internal_mountOAuthDeviceVerification,unmount:a.__internal_unmountOAuthDeviceVerification,updateProps:g=>{a.__internal_updateProps(g)},props:i,rootProps:p}))},{component:"OAuthDeviceVerification",renderWhileLoading:!0});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountUserAvatar,unmount:a.unmountUserAvatar,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"UserAvatar",renderWhileLoading:!0});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountTaskChooseOrganization,unmount:a.unmountTaskChooseOrganization,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountTaskResetPassword,unmount:a.unmountTaskResetPassword,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"TaskResetPassword",renderWhileLoading:!0});st(({clerk:a,component:s,fallback:o,...i})=>{const l=ta(s)==="rendering"||!a.loaded,p={...l&&o&&{style:{display:"none"}}};return te.createElement(te.Fragment,null,l&&o,a.loaded&&te.createElement(Yt,{component:s,mount:a.mountTaskSetupMFA,unmount:a.unmountTaskSetupMFA,updateProps:a.__internal_updateProps,props:i,rootProps:p}))},{component:"TaskSetupMFA",renderWhileLoading:!0});const Ex=Oy({packageName:"@clerk/shared"});function wx(a){Ex.setPackageName({packageName:a})}const Cm=new Set,Xl=(a,s,o)=>{const i=Rw()||jw(),l=a;Cm.has(l)||i||(Cm.add(l),console.warn(`Clerk - DEPRECATION WARNING: "${a}" is deprecated and will be removed in the next major release.
${s}`))};function xx(a){const s=a.match(/^(\d+)\.(\d+)\.(\d+)/);if(!s)return null;const[,o,i,l]=s;return{major:parseInt(o,10),minor:parseInt(i,10),patch:parseInt(l,10)}}function Sx(a,s){const{major:o,minor:i,patch:l}=a;return s.some(([p,g,h,m])=>o!==p?!1:h===-1?i>g||i===g&&l>=m:i===h&&l>=m)}function Tx(a,s){const o=xx(a);return o?Sx(o,s):!1}st(({clerk:a,...s})=>{const{client:o,session:i}=a,l=(o.signedInSessions?.length??0)>0;return te.useEffect(()=>{i===null&&l?a.redirectToAfterSignOut():a.redirectToSignIn(s)},[]),null},"RedirectToSignIn");st(({clerk:a,...s})=>(te.useEffect(()=>{a.redirectToSignUp(s)},[]),null),"RedirectToSignUp");st(({clerk:a,...s})=>(te.useEffect(()=>{a.redirectToTasks(s)},[]),null),"RedirectToTasks");st(({clerk:a})=>(te.useEffect(()=>{Xl("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),a.redirectToUserProfile()},[]),null),"RedirectToUserProfile");st(({clerk:a})=>(te.useEffect(()=>{Xl("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),a.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");st(({clerk:a})=>(te.useEffect(()=>{Xl("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),a.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");st(({clerk:a,...s})=>(te.useEffect(()=>{a.handleRedirectCallback(s)},[]),null),"AuthenticateWithRedirectCallback");typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);function Ax(){try{return Tx(te.version,[[18,0,-1,0],[19,0,0,3],[19,1,1,4],[19,2,2,3],[19,3,3,0]])}catch{return!1}}Ax();typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);if(globalThis.__clerkSharedModules){const a=globalThis.__clerkSharedModules.react?.version;a&&a!==q.version&&console.warn(`[@clerk/ui/register] React version mismatch detected. Already registered: ${a}, current import: ${q.version}. This may cause issues with the shared @clerk/ui variant.`)}else globalThis.__clerkSharedModules={react:Ey,"react-dom":Gw,"react-dom/client":oE,"react/jsx-runtime":Q0};st(({clerk:a,children:s,...o})=>{const{appearance:i,getContainer:l,component:p,...g}=o;s=si(s,"Invite members");const h=ni(s)("InviteMembersButton"),m=()=>a.openInviteMembers({appearance:i,getContainer:l}),y={...g,onClick:async b=>(h&&typeof h=="object"&&"props"in h&&await ri(h.props.onClick)(b),m())};return te.cloneElement(h,y)},{component:"InviteMembersButton",renderWhileLoading:!0});st(({clerk:a,children:s,...o})=>{const{appearance:i,getContainer:l,component:p,signUpFallbackRedirectUrl:g,forceRedirectUrl:h,fallbackRedirectUrl:m,signUpForceRedirectUrl:u,mode:y,initialValues:b,withSignUp:E,oauthFlow:x,...R}=o;s=si(s,"Sign in");const C=ni(s)("SignInButton"),D=()=>{const T={forceRedirectUrl:h,fallbackRedirectUrl:m,signUpFallbackRedirectUrl:g,signUpForceRedirectUrl:u,initialValues:b,withSignUp:E,oauthFlow:x};return y==="modal"?a.openSignIn({...T,appearance:i,getContainer:l}):a.redirectToSignIn({...T,signInFallbackRedirectUrl:m,signInForceRedirectUrl:h})},N={...R,onClick:async T=>(C&&typeof C=="object"&&"props"in C&&await ri(C.props.onClick)(T),D())};return te.cloneElement(C,N)},{component:"SignInButton",renderWhileLoading:!0});st(({clerk:a,children:s,...o})=>{const{redirectUrl:i,getContainer:l,component:p,...g}=o;s=si(s,"Sign in with Metamask");const h=ni(s)("SignInWithMetamaskButton"),m=async()=>{async function b(){await a.authenticateWithMetamask({redirectUrl:i||void 0})}b()},y={...g,onClick:async b=>(await ri(h.props.onClick)(b),m())};return te.cloneElement(h,y)},{component:"SignInWithMetamask",renderWhileLoading:!0});st(({clerk:a,children:s,...o})=>{const{redirectUrl:i="/",sessionId:l,signOutOptions:p,getContainer:g,component:h,...m}=o;p&&Xl("SignOutButton `signOutOptions`","Use the `redirectUrl` and `sessionId` props directly instead."),s=si(s,"Sign out");const u=ni(s)("SignOutButton"),y=()=>a.signOut({redirectUrl:i,...l!==void 0&&{sessionId:l},...p}),E={...m,onClick:async x=>(await ri(u.props.onClick)(x),y())};return te.cloneElement(u,E)},{component:"SignOutButton",renderWhileLoading:!0});st(({clerk:a,children:s,...o})=>{const{appearance:i,unsafeMetadata:l,getContainer:p,component:g,fallbackRedirectUrl:h,forceRedirectUrl:m,signInFallbackRedirectUrl:u,signInForceRedirectUrl:y,mode:b,initialValues:E,oauthFlow:x,...R}=o;s=si(s,"Sign up");const C=ni(s)("SignUpButton"),D=()=>{const T={fallbackRedirectUrl:h,forceRedirectUrl:m,signInFallbackRedirectUrl:u,signInForceRedirectUrl:y,initialValues:E,oauthFlow:x};return b==="modal"?a.openSignUp({...T,appearance:i,unsafeMetadata:l,getContainer:p}):a.redirectToSignUp({...T,signUpFallbackRedirectUrl:h,signUpForceRedirectUrl:m})},N={...R,onClick:async T=>(C&&typeof C=="object"&&"props"in C&&await ri(C.props.onClick)(T),D())};return te.cloneElement(C,N)},{component:"SignUpButton",renderWhileLoading:!0});Yw({packageName:"@clerk/react"});wx("@clerk/react");var hu={exports:{}};const Mr=a=>({...a,__type:"prebuilt_appearance"}),Dx=Object.freeze(Object.defineProperty({__proto__:null,experimental_createTheme:Mr},Symbol.toStringTag,{value:"Module"})),Cx=by(Dx),Yy=Mr({name:"dark",variables:{colorBackground:"#212126",colorNeutral:"white",colorPrimary:"#ffffff",colorPrimaryForeground:"black",colorForeground:"white",colorInputForeground:"white",colorInput:"#26262B"},elements:{providerIcon__apple:{filter:"invert(1)"},providerIcon__github:{filter:"invert(1)"},providerIcon__okx_wallet:{filter:"invert(1)"},providerIcon__vercel:{filter:"invert(1)"},activeDeviceIcon:{"--cl-chassis-bottom":"#d2d2d2","--cl-chassis-back":"#e6e6e6","--cl-chassis-screen":"#e6e6e6","--cl-screen":"#111111"}}}),Nx=Mr({name:"shadesOfPurple",baseTheme:Yy,variables:{colorBackground:"#3f3c77",colorPrimary:"#f8d80d",colorPrimaryForeground:"#38375f",colorInputForeground:"#a1fdfe",colorShimmer:"rgba(161,253,254,0.36)"}}),us={boxShadow:"3px 3px 0px #000",border:"2px solid #000","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:active":{boxShadow:"2px 2px 0px #000",transform:"translate(1px)"}},Is={boxShadow:"3px 3px 0px #000",border:"2px solid #000"},kx=Mr({name:"neobrutalism",simpleStyles:!0,variables:{colorPrimary:"#DF1B1B",colorShimmer:"rgba(255,255,255,0.64)",fontWeight:{normal:500,medium:600,bold:700}},elements:{cardBox:{boxShadow:"7px 7px 0px #000",border:"3px solid #000"},card:{borderRadius:"0"},headerSubtitle:{color:"#212126"},alternativeMethodsBlockButton:us,socialButtonsIconButton:{...us},selectButton:{...us,...Is,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"}},socialButtonsBlockButton:{...us,color:"#212126"},profileSectionPrimaryButton:us,profileSectionItem:{color:"#212126"},avatarImageActionsUpload:us,menuButton:Is,menuList:Is,formButtonPrimary:us,navbarButton:us,formFieldAction:{fontWeight:"700"},formFieldInput:{...Is,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:hover":{...Is,transform:"scale(1.01)"}},table:Is,tableHead:{color:"#212126"},dividerLine:{background:"#000"},dividerText:{fontWeight:"700",color:"#212126"},footer:{background:"#fff","& div":{color:"#212126"}},footerActionText:{color:"#212126"},footerActionLink:{fontWeight:"700",borderBottom:"3px solid","&:focus":{boxShadow:"none"}},actionCard:{...Is},badge:{border:"1px solid #000",background:"#fff",color:"#212126"}}}),Rx=Mr({name:"shadcn",cssLayerName:"components",variables:{colorBackground:"var(--card)",colorDanger:"var(--destructive)",colorForeground:"var(--card-foreground)",colorInput:"var(--input)",colorInputForeground:"var(--card-foreground)",colorModalBackdrop:"var(--color-black)",colorMuted:"var(--muted)",colorMutedForeground:"var(--muted-foreground)",colorNeutral:"var(--foreground)",colorPrimary:"var(--primary)",colorPrimaryForeground:"var(--primary-foreground)",colorRing:"var(--ring)",fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",semibold:"var(--font-weight-semibold)",bold:"var(--font-weight-semibold)"}},elements:{input:"bg-transparent dark:bg-input/30",cardBox:"shadow-sm border",popoverBox:"shadow-sm border",button:{'&[data-variant="solid"]::after':{display:"none"}},providerIcon__apple:"dark:invert",providerIcon__github:"dark:invert",providerIcon__okx_wallet:"dark:invert",providerIcon__vercel:"dark:invert"}}),jx=Mr({name:"simple",simpleStyles:!0}),Lx=Object.freeze(Object.defineProperty({__proto__:null,dark:Yy,experimental__simple:jx,neobrutalism:kx,shadcn:Rx,shadesOfPurple:Nx},Symbol.toStringTag,{value:"Module"})),Ox=by(Lx);var Nm;function _x(){return Nm||(Nm=1,(function(a){var s=Object.defineProperty,o=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,p=(u,y,b,E)=>{if(y&&typeof y=="object"||typeof y=="function")for(let x of i(y))!l.call(u,x)&&x!==b&&s(u,x,{get:()=>y[x],enumerable:!(E=o(y,x))||E.enumerable});return u},g=(u,y,b)=>(p(u,y,"default"),b&&p(b,y,"default")),h=u=>p(s({},"__esModule",{value:!0}),u),m={};a.exports=h(m),g(m,Cx,a.exports),g(m,Ox,a.exports)})(hu)),hu.exports}_x();function km(a){if(a instanceof Error)return a;if(typeof a=="string")return new Error(a);try{return new Error(JSON.stringify(a))}catch{return new Error(String(a))}}function Px({error:a,resetError:s}){return c.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50 p-6",children:c.jsxs("div",{className:"max-w-lg w-full text-center",children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Something went wrong"}),c.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"This part of the app hit an error. The rest of the app is still running."}),null,c.jsx("button",{type:"button",onClick:s,className:"mt-4 rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700",children:"Try again"})]})})}class Ix extends q.Component{state={error:null};static getDerivedStateFromError(s){return{error:km(s)}}componentDidCatch(s,o){console.error("ErrorBoundary caught an error:",km(s),o.componentStack)}componentDidUpdate(s){this.state.error!==null&&s.resetKey!==this.props.resetKey&&this.resetError()}resetError=()=>{this.setState({error:null})};render(){const{error:s}=this.state;if(s===null)return this.props.children;const o=this.props.FallbackComponent??Px;return c.jsx(o,{error:s,resetError:this.resetError})}}function qx({showLocalChip:a=!0}){const[s,o]=q.useState(""),[,i]=Ry(),l=p=>{p.preventDefault(),s&&i(`/workspace/${s}`)};return c.jsxs("main",{className:"chooser-page",children:[c.jsxs("header",{className:"chooser-top",children:[c.jsxs(la,{href:"/",className:"studio-wordmark","aria-label":"Mapping Studio home","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),a&&c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Browser-local workspace"]})]}),c.jsxs("section",{className:"chooser-content","aria-labelledby":"chooser-title",children:[c.jsxs("div",{className:"chooser-intro",children:[c.jsx("div",{className:"eyebrow",children:"Engineering workspace"}),c.jsx("h1",{id:"chooser-title",children:"Choose a discipline"}),c.jsx("p",{children:"Keep drawing groups organized and traceable on this device."})]}),c.jsxs("form",{className:"discipline-picker",onSubmit:l,"data-testid":"form-discipline-picker",children:[c.jsxs("div",{className:"discipline-field",children:[c.jsx("label",{htmlFor:"discipline-select",children:"Drawing type"}),c.jsxs("div",{className:"discipline-select-control",children:[c.jsxs("select",{id:"discipline-select",value:s,onChange:p=>o(p.target.value),"aria-label":"Drawing type","data-testid":"select-discipline",children:[c.jsx("option",{value:"",disabled:!0,children:"Select PFD or P&ID"}),c.jsx("option",{value:"pfd",children:"PFD — Process Flow Diagram"}),c.jsx("option",{value:"pid",children:"P&ID — Piping and Instrumentation Diagram"})]}),c.jsx(gs,{size:17,"aria-hidden":"true"})]})]}),c.jsxs("button",{className:"btn primary discipline-submit",type:"submit",disabled:!s,"data-testid":"button-open-discipline",children:["Open workspace ",c.jsx(yE,{size:16,"aria-hidden":"true"})]})]}),c.jsxs("div",{className:"chooser-foot",children:[c.jsx(ys,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Stored in this browser only."})," Nothing is uploaded or shared."]})]})]}),c.jsxs("footer",{className:"chooser-footer",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:"PDFs and project data stay in this browser"}),c.jsx("span",{children:"© 2026 gaurav.cbiindia"})]})]})}function Mx(){return c.jsx("main",{className:"chooser-page not-found",children:c.jsxs("div",{className:"not-found-card",children:[c.jsx("div",{className:"eyebrow",children:"Page not found"}),c.jsx("h1",{children:"This workspace does not exist."}),c.jsx(la,{href:"/",className:"btn primary","data-testid":"link-not-found-home",children:"Return to disciplines"})]})})}const ip="pid-mapping-studio:hierarchies:v2",Hy="pid-mapping-studio:hierarchies:v1",Ol=80,$x=128,Ux=5e3,Fx=64;class Vo extends Error{rawValue;constructor(s,o=null){super(s),this.name="HierarchyLoadError",this.rawValue=o}}function Ru(){return{version:2,pfd:[],pid:[]}}function lp(a,s){return Object.keys(a).length===s.length&&s.every(i=>Object.prototype.hasOwnProperty.call(a,i))}function _l(a,s,o=new Set){let i=0;const l=(p,g)=>{if(g>Fx)return!1;for(const h of p){if(!h||typeof h!="object"||Array.isArray(h))return!1;const m=h;if(!lp(m,s?["id","name","kind","expanded","children"]:["id","name","expanded","children"])||typeof m.id!="string"||m.id.length===0||m.id.length>$x||typeof m.name!="string"||m.name.trim().length===0||m.name!==m.name.trim()||m.name.length>Ol||s&&!["technology","projects","proposals","project","proposal","client","legacy"].includes(String(m.kind))||typeof m.expanded!="boolean"||!Array.isArray(m.children)||o.has(m.id)||(o.add(m.id),i+=1,i>Ux||!l(m.children,g+1)))return!1}return!0};return l(a,0)}function Bo(a,s){if(a.kind==="legacy")return(s===null||s==="legacy")&&a.children.every(i=>Bo(i,"legacy"));const o={technology:null,projects:"technology",proposals:"technology",project:"projects",proposal:"proposals",client:"project"};return a.kind==="client"&&s!=="project"&&s!=="proposal"||a.kind!=="client"&&o[a.kind]!==s?!1:a.kind==="technology"?a.children.filter(i=>i.kind==="projects").length===1&&a.children.filter(i=>i.kind==="proposals").length===1&&a.children.every(i=>Bo(i,"technology")):a.kind==="projects"||a.kind==="proposals"?a.children.every(i=>Bo(i,a.kind)):a.kind==="project"||a.kind==="proposal"?a.children.every(i=>Bo(i,a.kind)):a.children.length===0}function Vy(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const s=a;if(!lp(s,["version","pfd","pid"])||s.version!==2||!Array.isArray(s.pfd)||!Array.isArray(s.pid))return!1;const o=new Set;return _l(s.pfd,!0,o)&&_l(s.pid,!0,o)&&[...s.pfd,...s.pid].every(i=>Bo(i,null))}function Bx(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const s=a;if(!lp(s,["version","pfd","pid"])||s.version!==1||!Array.isArray(s.pfd)||!Array.isArray(s.pid))return!1;const o=new Set;return _l(s.pfd,!1,o)&&_l(s.pid,!1,o)}function ju(a){return a.map(s=>({id:s.id,name:s.name,kind:"legacy",expanded:s.expanded,children:ju(s.children)}))}function zx(a){return{version:2,pfd:ju(a.pfd),pid:ju(a.pid)}}function Yx(){let a;try{a=window.localStorage.getItem(ip),a===null&&(a=window.localStorage.getItem(Hy))}catch{throw new Vo("Saved groups could not be read from browser storage.")}if(a===null)return Ru();let s;try{s=JSON.parse(a)}catch{throw new Vo("Saved group data is not valid JSON.",a)}if(Vy(s))return s;if(Bx(s))return zx(s);throw new Vo("Saved group data is malformed or uses an unsupported format.",a)}function Hx(a){if(!Vy(a))throw new Error("Groups could not be saved because the hierarchy is invalid.");window.localStorage.setItem(ip,JSON.stringify(a))}function Al(a,s,o){return a.map(i=>i.id===s?o(i):{...i,children:Al(i.children,s,o)})}function Xy(a,s){return a.filter(o=>o.id!==s).map(o=>({...o,children:Xy(o.children,s)}))}function Gy(a,s){return s?a.id===s||a.children.some(o=>Gy(o,s)):!1}function Lu(a){return a.reduce((s,o)=>s+1+Lu(o.children),0)}function Ou(a,s){if(!s)return null;for(const o of a){if(o.id===s)return o;const i=Ou(o.children,s);if(i)return i}return null}function Ky(a,s,o){return a.flatMap(i=>{const l=s?`${s} / ${i.name}`:i.name;return[...o(i)?[{id:i.id,label:l}]:[],...Ky(i.children,l,o)]})}function Wy(a){return Ky(a,"",s=>s.kind==="client"||s.kind==="legacy")}const Vx="modulepreload",Xx=function(a){return"/pid-mapping-studio-app/"+a},Rm={},nn=function(s,o,i){let l=Promise.resolve();if(o&&o.length>0){let m=function(u){return Promise.all(u.map(y=>Promise.resolve(y).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),h=g?.nonce||g?.getAttribute("nonce");l=m(o.map(u=>{if(u=Xx(u),u in Rm)return;Rm[u]=!0;const y=u.endsWith(".css"),b=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${b}`))return;const E=document.createElement("link");if(E.rel=y?"stylesheet":Vx,y||(E.as="script"),E.crossOrigin="",E.href=u,h&&E.setAttribute("nonce",h),document.head.appendChild(E),y)return new Promise((x,R)=>{E.addEventListener("load",x),E.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function p(g){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=g,window.dispatchEvent(h),!h.defaultPrevented)throw g}return l.then(g=>{for(const h of g||[])h.status==="rejected"&&p(h.reason);return s().catch(p)})};async function Gx(){const[a,s]=await Promise.all([nn(()=>import("./pdf-TYrZqVzP.js"),[]),nn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);return a.GlobalWorkerOptions.workerSrc=s.default,a}function Kx({fileId:a,alias:s,pageCount:o,page:i,onPageChange:l,loadBytes:p,markers:g=[],onMarkerClick:h}){const m=q.useRef(null),u=q.useRef(null),[y,b]=q.useState(0),[E,x]=q.useState("loading"),[R,C]=q.useState(0),D=q.useRef(p);return D.current=p,q.useEffect(()=>{const S=u.current;if(!S)return;b(S.clientWidth);const N=new ResizeObserver(()=>b(Math.round(S.clientWidth/24)*24));return N.observe(S),()=>N.disconnect()},[]),q.useEffect(()=>{if(!y)return;let S=!1,N=null,T=null;return x("loading"),(async()=>{try{const[_,w]=await Promise.all([Gx(),D.current(a)]);if(S)return;T=_.getDocument({data:new Uint8Array(w.slice(0))});const P=await T.promise;if(S)return;const k=await P.getPage(Math.min(Math.max(i,1),P.numPages)),I=k.getViewport({scale:1}),Z=Math.min(window.devicePixelRatio||1,2),se=y/I.width*Z,ee=k.getViewport({scale:se}),le=m.current;if(!le||S)return;le.width=Math.floor(ee.width),le.height=Math.floor(ee.height),le.style.width="100%";const Te=k.render({canvas:le,canvasContext:le.getContext("2d"),viewport:ee});N=Te,await Te.promise,S||x("ready")}catch(_){if(S||_?.name==="RenderingCancelledException")return;x("error")}})(),()=>{S=!0,N?.cancel(),T?.destroy().catch(()=>{})}},[a,i,y,R]),c.jsxs("div",{className:"ppv","data-testid":"panel-source-preview",children:[c.jsxs("div",{className:"ppv-bar",children:[c.jsx("span",{className:"ppv-label","data-testid":"text-preview-label",children:"Original source PDF · not generated CAD"}),c.jsxs("div",{className:"ppv-nav",children:[c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Previous page",disabled:i<=1,onClick:()=>l(i-1),"data-testid":"button-preview-prev",children:c.jsx(Ty,{size:15})}),c.jsxs("span",{"data-testid":"text-preview-page","aria-live":"polite",children:[s," · page ",i," of ",o]}),c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Next page",disabled:i>=o,onClick:()=>l(i+1),"data-testid":"button-preview-next",children:c.jsx(ap,{size:15})})]})]}),c.jsxs("div",{className:"ppv-stage",ref:u,children:[c.jsxs("div",{className:"ppv-canvas-wrap",style:{visibility:E==="ready"?"visible":"hidden"},children:[c.jsx("canvas",{ref:m,"aria-label":`Original source page ${i} of ${s}`,"data-testid":"canvas-source-preview"}),E==="ready"&&g.length>0&&c.jsx("div",{className:"ppv-markers","aria-label":"Extracted tag source locations",children:g.map((S,N)=>c.jsx("button",{className:"ppv-marker",type:"button",style:{left:`${S.location.x*100}%`,top:`${S.location.y*100}%`,width:`${Math.max(S.location.width*100,1.1)}%`,height:`${Math.max(S.location.height*100,1.2)}%`},"aria-label":`OCR location for ${S.label}; verify against the PDF`,title:`${S.label} · OCR candidate location`,onClick:()=>h?.(S.id),"data-testid":`marker-source-${S.id}-${N}`,children:c.jsx("span",{children:S.label})},`${S.id}-${S.location.pageNumber}-${N}`))})]}),g.length>0&&c.jsx("div",{className:"ppv-marker-note",role:"note",children:"Red boxes show OCR candidate locations. Confirm each tag against the original PDF."}),E==="loading"&&c.jsxs("div",{className:"ppv-overlay",role:"status","data-testid":"status-preview-loading",children:[c.jsx($a,{size:18,className:"pdf-spin"})," Rendering page"]}),E==="error"&&c.jsxs("div",{className:"ppv-overlay ppv-error",role:"alert","data-testid":"status-preview-error",children:[c.jsx(bs,{size:18})," This page could not be shown.",c.jsx("button",{type:"button",className:"btn",onClick:()=>C(S=>S+1),"data-testid":"button-preview-retry",children:"Try again"})]})]})]})}const gu="STANDARD",Wx="STANDARD";function Zx(a,s,o){const i=a(),l=a(),p=a(),g=a(),h=a(),m=a(),u=a(),y=a(),b=a();function E(w,P,k){const I=a();return w(0,"TABLE"),w(2,P),w(5,I),w(330,"0"),w(100,"AcDbSymbolTable"),w(70,k),I}function x(w,P,k,I,Z=a()){return w(0,P),w(P==="DIMSTYLE"?105:5,Z),w(330,k),w(100,"AcDbSymbolTableRecord"),w(100,I),Z}function R(w){const P=E(w,"VPORT",1);x(w,"VPORT",P,"AcDbViewportTableRecord"),w(2,"*ACTIVE"),w(70,0),w(10,0),w(20,0),w(11,1),w(21,1),w(12,s/2),w(22,o/2),w(13,0),w(23,0),w(14,10),w(24,10),w(15,10),w(25,10),w(16,0),w(26,0),w(36,1),w(17,0),w(27,0),w(37,0),w(40,o*1.1),w(41,s/o),w(42,50),w(43,0),w(44,0),w(50,0),w(51,0),w(71,0),w(72,1e3),w(73,1),w(74,3),w(75,0),w(76,0),w(77,0),w(78,0),w(281,0),w(0,"ENDTAB")}function C(w,P){for(const se of["VIEW","UCS"])E(w,se,0),w(0,"ENDTAB");const k=E(w,"APPID",1);x(w,"APPID",k,"AcDbRegAppTableRecord"),w(2,"ACAD"),w(70,0),w(0,"ENDTAB");const I=E(w,"DIMSTYLE",1);w(100,"AcDbDimStyleTable"),w(71,0),x(w,"DIMSTYLE",I,"AcDbDimStyleTableRecord"),w(2,Wx),w(70,0),w(40,1),w(140,2.5),w(340,P),w(0,"ENDTAB");const Z=E(w,"BLOCK_RECORD",2);for(const[se,ee,le]of[["*Model_Space",m,y],["*Paper_Space",u,b]])x(w,"BLOCK_RECORD",Z,"AcDbBlockTableRecord",ee),w(2,se),w(340,le),w(70,4),w(280,1),w(281,0);w(0,"ENDTAB")}function D(w){w(0,"SECTION"),w(2,"BLOCKS");for(const[P,k]of[["*Model_Space",m],["*Paper_Space",u]])w(0,"BLOCK"),w(5,a()),w(330,k),w(100,"AcDbEntity"),w(8,"0"),w(100,"AcDbBlockBegin"),w(2,P),w(70,0),w(10,0),w(20,0),w(30,0),w(3,P),w(1,""),w(0,"ENDBLK"),w(5,a()),w(330,k),w(100,"AcDbEntity"),w(8,"0"),w(100,"AcDbBlockEnd");w(0,"ENDSEC")}function S(w,P,k,I,Z=!1){w(0,Z?"ACDBDICTIONARYWDFLT":"DICTIONARY"),w(5,P),w(330,k),w(100,"AcDbDictionary"),w(280,0),w(281,1);for(const[se,ee]of I)w(3,se),w(350,ee);Z&&(w(100,"AcDbDictionaryWithDefault"),w(340,h))}function N(w,P,k,I,Z){w(0,"LAYOUT"),w(5,k),w(330,p),w(100,"AcDbPlotSettings"),w(1,""),w(4,""),w(6,"");for(const se of[40,41,42,43])w(se,0);w(44,s),w(45,o);for(const se of[46,47,48,49,140,141])w(se,0);w(142,1),w(143,1),w(70,Z===0?1024:0),w(72,1),w(73,0),w(74,5),w(7,""),w(75,16),w(76,0),w(77,2),w(78,300),w(147,1),w(148,0),w(149,0),w(100,"AcDbLayout"),w(1,P),w(70,1),w(71,Z),w(10,0),w(20,0),w(11,s),w(21,o),w(12,0),w(22,0),w(32,0),w(14,0),w(24,0),w(34,0),w(15,s),w(25,o),w(35,0),w(146,0),w(13,0),w(23,0),w(33,0),w(16,1),w(26,0),w(36,0),w(17,0),w(27,1),w(37,0),w(76,1),w(330,I)}function T(w){w(0,"SECTION"),w(2,"OBJECTS"),S(w,i,"0",[["ACAD_GROUP",l],["ACAD_LAYOUT",p],["ACAD_PLOTSTYLENAME",g]]),S(w,l,i,[]),S(w,p,i,[["Model",y],["Layout1",b]]),S(w,g,i,[["Normal",h]],!0),w(0,"ACDBPLACEHOLDER"),w(5,h),w(330,g),N(w,"Model",y,m,0),N(w,"Layout1",b,u,1),w(0,"ENDSEC")}function _(w){w(0,"SECTION"),w(2,"CLASSES");for(const[P,k,I]of[["LAYOUT","AcDbLayout",2],["ACDBDICTIONARYWDFLT","AcDbDictionaryWithDefault",1],["ACDBPLACEHOLDER","AcDbPlaceHolder",1]])w(0,"CLASS"),w(1,P),w(2,k),w(3,"ObjectDBX Classes"),w(90,0),w(91,I),w(280,0),w(281,0);w(0,"ENDSEC")}return{modelSpace:m,normalPlotStyle:h,beginTable:E,tableRecord:x,writeViewport:R,writeRemainingTables:C,writeBlocks:D,writeObjects:T,writeClasses:_}}function mu(a){if(!Number.isFinite(a))throw new Error("A PDF coordinate is not a finite number.");return Number(a.toFixed(7)).toString()}function Qx(a){return a.replace(/[\r\n\t]/g," ").replace(/\\/g,"\\\\").replace(/[^\x20-\x7e]/g,s=>`\\U+${s.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")}`)}const jm=/[<>\/\\":;?*|,=\u0000-\u001f\u007f]/;function Zy(a){const s=a.replace(/^\uFEFF/,"").split(/\r?\n/);for(;s.at(-1)==="";)s.pop();if(!s.length||s.length%2!==0)throw new Error("DXF export rejected: the output does not contain complete group-code/value pairs.");const o=[];for(let i=0;i<s.length;i+=2){const l=Number(s[i].trim());if(!/^\d+$/.test(s[i].trim())||!Number.isInteger(l)||s[i+1]===void 0)throw new Error(`DXF export rejected: malformed group-code/value pair at line ${i+1}.`);o.push({code:l,value:s[i+1]})}if(o.at(-1)?.code!==0||o.at(-1)?.value!=="EOF")throw new Error("DXF export rejected: the output is incomplete (missing EOF).");return o}function Jx(a,s,o=0){return!a||a.trim()!==a||a.length>255?!1:s==="BLOCK_RECORD"&&/^\*[A-Za-z0-9_.$-]+$/.test(a)||s==="VPORT"&&a.toUpperCase()==="*ACTIVE"?!0:o&16&&a.includes("|")?a.split("|").every(i=>i.length>0&&!jm.test(i)):!jm.test(a)}function Qy(a,s,o,i=[]){const l=new Set;let p=!1,g=!1;for(let h=0;h<a.length;h+=1){const m=a[h];if(m.code===0&&m.value==="SECTION"&&a[h+1]?.code===2&&a[h+1]?.value==="TABLES"){p=!0,g=!0,h+=1;continue}if(!p)continue;if(m.code===0&&m.value==="ENDSEC"){p=!1;continue}if(m.code!==0||m.value!=="TABLE")continue;const u=a[h+1];if(u?.code!==2||!u.value.trim())throw new Error("DXF export rejected: a symbol table has a blank or missing table name.");const y=u.value.toUpperCase();if(l.has(y))throw new Error(`DXF export rejected: the ${y} symbol table is duplicated.`);l.add(y);const b=new Set;let E=h+1;for(;E<a.length&&a[E].code!==0;)E+=1;const x=new Set;for(let D=E;D<a.length&&!(a[D].code===0&&["ENDTAB","ENDSEC"].includes(a[D].value));D+=1)a[D].code===2&&a[D].value.trim()&&x.add(a[D].value.toUpperCase());let R=0,C=!1;for(;E<a.length&&a[E].code===0;){if(a[E].value==="ENDTAB"){C=!0,h=E;break}if(a[E].value==="ENDSEC")break;R+=1;let D=E+1;for(;D<a.length&&a[D].code!==0;)D+=1;if(a[E].value!==y)throw new Error(`DXF export rejected: ${y} contains an unexpected ${a[E].value} record at line ${E*2+2}.`);let S=-1,N=0,T="";for(let I=E+1;I<D;I+=1){if(a[I].code===2){if(S>=0)throw new Error(`DXF export rejected: ${y} record has multiple name fields at line ${I*2+1}.`);S=I}a[I].code===70&&(N=Number(a[I].value)),a[I].code===3&&(T=a[I].value)}const _=S>=0?a[S].value:"",w=!_.trim();let P=_;if(y==="STYLE"&&(N&1)!==0){const I=(S>=0?S:E)*2+2;if(S<0)throw new Error(`DXF export rejected: STYLE shape-file record is missing its group-2 name field at line ${I}.`);if(!T.trim())throw new Error(`DXF export rejected: STYLE shape-file record has no font file in group 3 at line ${I}.`);if(_!==""){if(!s)throw new Error(`DXF export rejected: STYLE shape-file record must have an empty name per DXF format at line ${I}.`);i.push({table:y,line:I,previousName:_,name:""}),a[S].value="",P=""}}else if(w||!Jx(_,y,N)){const I=(S>=0?S:E)*2+2;if(!w||!["STYLE","DIMSTYLE"].includes(y))throw new Error(`DXF export rejected: ${y} table record ${R} has ${w?"a blank name":`an invalid name ${JSON.stringify(_)}`} at line ${I}. Correct the source value before exporting.`);if(!s)throw new Error(`DXF export rejected: ${y} table record ${R} still has ${w?"a blank name":"an invalid name"} after repair at line ${I}.`);const Z=y==="DIMSTYLE"?"AUTOMATION_DIMSTYLE":"AUTOMATION_TEXTSTYLE";P=Z;let se=2;for(;x.has(P.toUpperCase());)P=`${Z}_${se++}`;if(x.add(P.toUpperCase()),i.push({table:y,line:I,previousName:_,name:P}),S>=0)a[S].value=P;else{let ee=E+1;for(;ee<D&&[5,105,330,100].includes(a[ee].code);)ee+=1;o.push({index:ee,pair:{code:2,value:P}})}}if(P){const I=P.toUpperCase();if(b.has(I))throw new Error(`DXF export rejected: ${y} table record ${R} duplicates the name ${JSON.stringify(P)}.`);b.add(I)}E=D}if(!C)throw new Error(`DXF export rejected: the ${y} symbol table is missing ENDTAB.`)}if(!g)throw new Error("DXF export rejected: the output has no TABLES section to validate.");if(p)throw new Error("DXF export rejected: TABLES section is missing ENDSEC.");for(const h of["STYLE","DIMSTYLE"])if(!l.has(h))throw new Error(`DXF export rejected: the required ${h} symbol table is missing.`)}function e1(a){return Jy(a).dxf}function Jy(a){const s=Zy(a),o=[],i=[];Qy(s,!0,o,i),o.sort((p,g)=>g.index-p.index);for(const p of o)s.splice(p.index,0,p.pair);const l=`${s.flatMap(({code:p,value:g})=>[String(p),g]).join(`\r
`)}\r
`;return cp(l),{dxf:l,repairs:i}}function cp(a){Qy(Zy(a),!1,[])}function t1(a){const s=Number.parseInt(a.replace("#",""),16);return Number.isFinite(s)?s:0}function X2(a,s,o){if(!Number.isFinite(s)||!Number.isFinite(o)||s<=0||o<=0)throw new Error("A DXF page must have positive finite dimensions.");const i=[],l=(S,N)=>i.push(String(S),typeof N=="number"?mu(N):N);let p=256;const g=()=>(p++).toString(16).toUpperCase(),h=Zx(g,s,o),m=new Map;for(const S of a)if(S.kind==="polyline"&&S.dash?.some(N=>N>0)){const N=S.dash.map(T=>mu(T)).join(",");m.has(N)||m.set(N,{name:`PDF_DASH_${m.size+1}`,pattern:S.dash})}const u=S=>S.trim()||"0",y=S=>{l(5,g()),l(330,h.modelSpace),l(100,"AcDbEntity"),l(67,0),l(410,"Model"),l(8,u(S.layer));const N=t1(S.color);(N>>16&255)<16&&(N>>8&255)<16&&(N&255)<16?l(62,7):(l(62,256),l(420,N)),S.opacity!==void 0&&S.opacity<1&&l(440,33554432|Math.round(Math.max(0,S.opacity)*255))};h.writeClasses(l),l(0,"SECTION"),l(2,"TABLES"),h.writeViewport(l);const b=h.beginTable(l,"LTYPE",3+m.size);for(const S of["BYBLOCK","BYLAYER","CONTINUOUS"])h.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,S),l(70,0),l(3,S==="CONTINUOUS"?"Solid line":""),l(72,65),l(73,0),l(40,0);for(const{name:S,pattern:N}of m.values()){const T=N.length%2?[...N,...N]:N;h.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,S),l(70,0),l(3,"Source PDF dash pattern"),l(72,65),l(73,T.length),l(40,T.reduce((_,w)=>_+Math.abs(w),0)),T.forEach((_,w)=>{l(49,w%2?-_:_),l(74,0)})}l(0,"ENDTAB");const E=[...new Set(["0",...a.map(S=>u(S.layer))])],x=h.beginTable(l,"LAYER",E.length);for(const S of E)h.tableRecord(l,"LAYER",x,"AcDbLayerTableRecord"),l(2,S),l(70,0),l(62,7),l(6,"CONTINUOUS"),l(290,1),l(370,-3),l(390,h.normalPlotStyle);l(0,"ENDTAB");const R=h.beginTable(l,"STYLE",1),C=h.tableRecord(l,"STYLE",R,"AcDbTextStyleTableRecord");l(2,gu),l(70,0),l(40,0),l(41,1),l(50,0),l(71,0),l(42,2.5),l(3,"txt.shx"),l(4,""),l(0,"ENDTAB"),h.writeRemainingTables(l,C),l(0,"ENDSEC"),h.writeBlocks(l),l(0,"SECTION"),l(2,"ENTITIES");for(const S of a)if(S.kind==="polyline"){if(S.points.length<2)continue;l(0,"LWPOLYLINE"),y(S),l(370,S.lineWeight);const N=S.dash?.length?m.get(S.dash.map(T=>mu(T)).join(",")):void 0;N&&l(6,N.name),l(100,"AcDbPolyline"),l(90,S.points.length),l(70,(S.closed?1:0)|(N?128:0));for(const T of S.points)l(10,T.x),l(20,T.y)}else if(S.kind==="hatch"){const N=S.loops.filter(T=>T.length>=3);if(!N.length)continue;l(0,"HATCH"),y(S),l(100,"AcDbHatch"),l(10,0),l(20,0),l(30,0),l(210,0),l(220,0),l(230,1),l(2,"SOLID"),l(70,1),l(71,0),l(91,N.length);for(const T of N){l(92,2),l(72,0),l(73,1),l(93,T.length);for(const _ of T)l(10,_.x),l(20,_.y);l(97,0)}l(75,0),l(76,1),l(98,0)}else{if(!S.text.trim()||!(S.height>0))continue;const N=S.text.match(/[\s\S]{1,180}/g)??[];let T=0;for(const _ of N){const w=T/S.text.length,P=(T+_.length)/S.text.length,k={x:S.start.x+(S.end.x-S.start.x)*w,y:S.start.y+(S.end.y-S.start.y)*w},I={x:S.start.x+(S.end.x-S.start.x)*P,y:S.start.y+(S.end.y-S.start.y)*P};l(0,"TEXT"),y(S),l(100,"AcDbText"),l(10,k.x),l(20,k.y),l(30,0),l(40,S.height),l(1,Qx(_)),l(50,S.rotation),l(7,gu),l(72,Math.hypot(I.x-k.x,I.y-k.y)>1e-8?5:0),l(11,I.x),l(21,I.y),l(31,0),l(100,"AcDbText"),l(73,0),T+=_.length}}l(0,"ENDSEC"),h.writeObjects(l),l(0,"EOF");const D=i.splice(0);return l(0,"SECTION"),l(2,"HEADER"),l(9,"$ACADVER"),l(1,"AC1018"),l(9,"$DWGCODEPAGE"),l(3,"ANSI_1252"),l(9,"$HANDSEED"),l(5,p.toString(16).toUpperCase()),l(9,"$INSUNITS"),l(70,4),l(9,"$MEASUREMENT"),l(70,1),l(9,"$INSBASE"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMIN"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMAX"),l(10,s),l(20,o),l(30,0),l(9,"$LIMMIN"),l(10,0),l(20,0),l(9,"$LIMMAX"),l(10,s),l(20,o),l(9,"$TILEMODE"),l(70,1),l(9,"$CTAB"),l(1,"Model"),l(9,"$CLAYER"),l(8,"0"),l(9,"$CELTYPE"),l(6,"BYLAYER"),l(9,"$TEXTSTYLE"),l(7,gu),l(9,"$CECOLOR"),l(62,256),l(9,"$LTSCALE"),l(40,1),l(9,"$CELTSCALE"),l(40,1),l(9,"$PSLTSCALE"),l(70,0),l(0,"ENDSEC"),e1(`${i.concat(D).join(`\r
`)}\r
`)}const a1=["LTYPE","LAYER","STYLE","APPID","DIMSTYLE","BLOCK_RECORD"];function n1(a){const s=a.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;s.at(-1)==="";)s.pop();if(!s.length||s.length%2!==0)throw new Error("DXF structural repair rejected: incomplete group-code/value pairs.");const o=[];for(let i=0;i<s.length;i+=2){const l=Number(s[i].trim());if(!/^\d+$/.test(s[i].trim())||!Number.isInteger(l))throw new Error(`DXF structural repair rejected: invalid group code at line ${i+1}.`);o.push({code:l,value:s[i+1]})}return o}function s1(a){return`${a.flatMap(({code:s,value:o})=>[String(s),o]).join(`\r
`)}\r
`}function r1(a){const s=n1(a),o=new Map;let i="",l=-1;for(let C=0;C<s.length;C+=1){const D=s[C];if(D.code===0&&D.value.trim().toUpperCase()==="SECTION"&&s[C+1]?.code===2){i=s[++C].value.trim().toUpperCase();continue}if(D.code===0&&D.value.trim().toUpperCase()==="ENDSEC"){i==="TABLES"&&(l=C),i="";continue}if(i!=="TABLES"||D.code!==0||D.value.trim().toUpperCase()!=="TABLE")continue;const S=s[C+1]?.code===2?s[C+1].value.trim().toUpperCase():"";if(!S)throw new Error("DXF structural repair rejected: a TABLES record has no table name.");let N=C+1;for(;N<s.length&&!(s[N].code===0&&s[N].value.trim().toUpperCase()==="ENDTAB");)N+=1;if(N>=s.length)throw new Error(`DXF structural repair rejected: ${S} table is missing ENDTAB.`);o.set(S,{start:C,end:N,name:S})}if(l<0)throw new Error("DXF structural repair rejected: TABLES section is missing ENDSEC.");for(const C of a1)if(!o.has(C))throw new Error(`DXF structural repair rejected: required ${C} symbol table is missing; re-save the source as a modern ASCII DXF.`);const p=new Set(s.filter(C=>C.code===5||C.code===105).map(C=>C.value.trim().toUpperCase()).filter(C=>/^[0-9A-F]+$/.test(C)));let g=0n;for(const C of p){const D=BigInt(`0x${C}`);D>g&&(g=D)}const h=()=>{do g+=1n;while(p.has(g.toString(16).toUpperCase()));const C=g.toString(16).toUpperCase();return p.add(C),C},m=(...C)=>{const D=[];for(let S=0;S<C.length;S+=2)D.push({code:Number(C[S]),value:String(C[S+1])});return D},u=[],y=C=>m(0,"TABLE",2,C,5,h(),330,"0",100,"AcDbSymbolTable",70,0,0,"ENDTAB"),b=()=>{const C=h();return m(0,"TABLE",2,"VPORT",5,C,330,"0",100,"AcDbSymbolTable",70,1,0,"VPORT",5,h(),330,C,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0,0,"ENDTAB")},E=["VPORT","VIEW","UCS"].filter(C=>!o.has(C));for(const C of E){const D=C==="VPORT"?b():y(C);s.splice(l,0,...D),l+=D.length,u.push(C)}const x=o.get("VPORT");if(x){let C=!1;for(let D=x.start+1;D<x.end;D+=1){if(s[D].code!==0||s[D].value.trim().toUpperCase()!=="VPORT")continue;let S=D+1;for(;S<x.end&&s[S].code!==0;)S+=1;if(s.slice(D,S).some(N=>N.code===2&&N.value.trim().toUpperCase()==="*ACTIVE")){C=!0;break}D=S-1}if(!C){const D=s.findIndex((w,P)=>P>x.start&&P<x.end&&w.code===0),S=s.slice(x.start+1,D).find(w=>w.code===5)?.value.trim();if(!S)throw new Error("DXF structural repair rejected: VPORT table header has no handle.");const N=s.findIndex((w,P)=>P>x.start&&P<D&&w.code===70);N<0?s.splice(D,0,{code:70,value:"1"}):s[N].value=String(Number(s[N].value)+1);const T=m(0,"VPORT",5,h(),330,S,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0),_=s.findIndex((w,P)=>P>x.start&&w.code===0&&w.value.trim().toUpperCase()==="ENDTAB");s.splice(_,0,...T),u.push("VPORT:*ACTIVE")}}if(!u.length)return{dxf:a,addedTables:u};const R=s1(s);return cp(R),{dxf:R,addedTables:u}}function Ir(a){if(a.byteLength>50*1024*1024)throw new Error("DXF repair limit is 50 MB per file. The original file was not changed.");let s="";const o=a[0]===239&&a[1]===187&&a[2]===191?3:0;for(let h=o;h<a.length;h+=16384)s+=String.fromCharCode(...a.subarray(h,h+16384));if(s.startsWith("AutoCAD Binary DXF"))throw new Error("Binary DXF cannot be repaired in this browser. Save an ASCII DXF copy in AutoCAD first.");const i=Jy(s),l=r1(i.dxf);if(!i.repairs.length&&!l.addedTables.length)return{content:a,repairs:[],addedTables:[]};const p=l.addedTables.length?l.dxf:i.dxf,g=new Uint8Array(p.length);for(let h=0;h<p.length;h+=1)g[h]=p.charCodeAt(h);return{content:g,repairs:i.repairs,addedTables:l.addedTables}}function o1(){const[a,s]=q.useState(""),[o,i]=q.useState(!1),[l,p]=q.useState(!1),g=q.useRef(null);async function h(m){i(!0),p(!1),s("");try{const u=Ir(new Uint8Array(await m.arrayBuffer())),y=new Blob([new Uint8Array(u.content)],{type:"application/dxf"}),b=URL.createObjectURL(y),E=document.createElement("a");E.href=b,E.download="REPAIRED_DRAWING.dxf",document.body.appendChild(E),E.click(),E.remove(),window.setTimeout(()=>URL.revokeObjectURL(b),1e4),s(`${u.repairs.length} symbol-table name(s) repaired; validated copy downloaded. Original file unchanged. AutoCAD open test still required.`)}catch(u){p(!0),s(u instanceof Error?u.message:"DXF repair failed. No download was created.")}finally{i(!1)}}return c.jsxs("div",{className:"dxf-repair-control",children:[c.jsx("button",{className:"btn",type:"button",disabled:o,onClick:()=>g.current?.click(),children:o?"Checking DXF…":"Repair an existing DXF"}),c.jsx("input",{ref:g,type:"file",accept:".dxf",disabled:o,"aria-label":"DXF to repair",hidden:!0,onChange:m=>{const u=m.target.files?.[0];m.target.value="",u&&h(u)}}),c.jsx("p",{children:"Local only · Repairs blank ordinary STYLE/DIMSTYLE names and preserves anonymous SHX shape-font STYLE records as DXF requires. Geometry, layers and SHX definitions stay unchanged. Maximum 50 MB."}),a&&c.jsx("p",{role:l?"alert":"status",children:a})]})}const li=["itemTag","description","equipmentName","equipmentType","nominalDiameter","fluidService","lineSpec","fromTag","toTag","notes"];function dp(a){if(!Array.isArray(a)||a.length>64)throw new Error("Use at most 64 explicit attribute rules.");const s=new Set;return a.map(o=>{const i=o,l=typeof i?.attributeTag=="string"?i.attributeTag.trim().toUpperCase():"";if(!/^[A-Z][A-Z0-9_-]{0,63}$/.test(l)||s.has(l))throw new Error("Attribute tags must be unique, nonblank CAD field names (for example TAG_NO).");if(!li.includes(i.edeField)||!["tag","text","number"].includes(i.valueType)||!["inside","above","below"].includes(i.textZone))throw new Error(`Attribute rule ${l} has an unsupported field, value type or text zone.`);return s.add(l),{attributeTag:l,edeField:i.edeField,valueType:i.valueType,textZone:i.textZone}})}function i1(a){const s=new Map;for(const o of a){const i=o.itemTag.trim().toUpperCase();if(!i)continue;const l=s.get(i)??new Set;l.add(o.stableId.toUpperCase()),s.set(i,l)}return[...s].filter(([,o])=>o.size>1).map(([o])=>o).sort()}const eb=a=>`pid-cad-attribute-rules:v1:${a||"legends-default"}`;function tb(a){const s=localStorage.getItem(eb(a));return s?dp(JSON.parse(s)):[]}function l1({scope:a}){const[s,o]=q.useState(()=>{try{return tb(a)}catch{return[]}}),[i,l]=q.useState(""),[p,g]=q.useState(!1);function h(m,u){o(y=>y.map((b,E)=>E===m?{...b,...u}:b)),g(!0),l("Unsaved changes: save these rules before downloading a runner.")}return c.jsxs("details",{className:"runner-group-hint",children:[c.jsx("summary",{children:"Block attributes · Arial Narrow text"}),c.jsx("p",{children:"Final text keeps its imported height and position. AutoCAD must have Arial Narrow installed. Attribute rules belong only to the selected mapping scope. No saved rule means review—not guessing."}),s.map((m,u)=>c.jsxs("fieldset",{style:{marginBlock:8},children:[c.jsxs("legend",{children:["Attribute rule ",u+1]}),c.jsxs("label",{children:["Block field ",c.jsx("input",{"aria-label":`Attribute tag ${u+1}`,value:m.attributeTag,onChange:y=>h(u,{attributeTag:y.target.value})})]}),c.jsxs("label",{children:["EDE value ",c.jsx("select",{value:m.edeField,onChange:y=>h(u,{edeField:y.target.value}),children:li.map(y=>c.jsx("option",{children:y},y))})]}),c.jsxs("label",{children:["Expected type ",c.jsxs("select",{value:m.valueType,onChange:y=>h(u,{valueType:y.target.value}),children:[c.jsx("option",{value:"tag",children:"Tag"}),c.jsx("option",{value:"text",children:"Text"}),c.jsx("option",{value:"number",children:"Number"})]})]}),c.jsxs("label",{children:["PDF text location ",c.jsxs("select",{value:m.textZone,onChange:y=>h(u,{textZone:y.target.value}),children:[c.jsx("option",{value:"inside",children:"Inside symbol"}),c.jsx("option",{value:"above",children:"Above symbol"}),c.jsx("option",{value:"below",children:"Below symbol"})]})]}),c.jsx("button",{className:"btn subtle danger",type:"button",onClick:()=>{o(y=>y.filter((b,E)=>E!==u)),g(!0),l("Save to apply the removal.")},children:"Remove rule"})]},u)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>{o(m=>[...m,{attributeTag:"TAG_NO",edeField:"itemTag",valueType:"tag",textZone:"above"}]),g(!0),l("Save rules before downloading a runner.")},disabled:s.length>=64,children:"Add attribute rule"})," ",c.jsx("button",{className:"btn primary",type:"button",disabled:!p,onClick:()=>{try{const m=dp(s);localStorage.setItem(eb(a),JSON.stringify(m)),o(m),g(!1),l("Rules saved locally for this mapping scope.")}catch(m){l(m instanceof Error?m.message:"Rules could not be saved.")}},children:"Save rules"}),i&&c.jsx("p",{role:"status",children:i})]})}var Ua=Uint8Array,Or=Uint16Array,c1=Int32Array,ab=new Ua([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),nb=new Ua([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),d1=new Ua([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),sb=function(a,s){for(var o=new Or(31),i=0;i<31;++i)o[i]=s+=1<<a[i-1];for(var l=new c1(o[30]),i=1;i<30;++i)for(var p=o[i];p<o[i+1];++p)l[p]=p-o[i]<<5|i;return{b:o,r:l}},rb=sb(ab,2),ob=rb.b,u1=rb.r;ob[28]=258,u1[258]=28;var p1=sb(nb,0),f1=p1.b,_u=new Or(32768);for(var St=0;St<32768;++St){var ps=(St&43690)>>1|(St&21845)<<1;ps=(ps&52428)>>2|(ps&13107)<<2,ps=(ps&61680)>>4|(ps&3855)<<4,_u[St]=((ps&65280)>>8|(ps&255)<<8)>>1}var Xo=(function(a,s,o){for(var i=a.length,l=0,p=new Or(s);l<i;++l)a[l]&&++p[a[l]-1];var g=new Or(s);for(l=1;l<s;++l)g[l]=g[l-1]+p[l-1]<<1;var h;if(o){h=new Or(1<<s);var m=15-s;for(l=0;l<i;++l)if(a[l])for(var u=l<<4|a[l],y=s-a[l],b=g[a[l]-1]++<<y,E=b|(1<<y)-1;b<=E;++b)h[_u[b]>>m]=u}else for(h=new Or(i),l=0;l<i;++l)a[l]&&(h[l]=_u[g[a[l]-1]++]>>15-a[l]);return h}),ci=new Ua(288);for(var St=0;St<144;++St)ci[St]=8;for(var St=144;St<256;++St)ci[St]=9;for(var St=256;St<280;++St)ci[St]=7;for(var St=280;St<288;++St)ci[St]=8;var ib=new Ua(32);for(var St=0;St<32;++St)ib[St]=5;var h1=Xo(ci,9,1),g1=Xo(ib,5,1),yu=function(a){for(var s=a[0],o=1;o<a.length;++o)a[o]>s&&(s=a[o]);return s},an=function(a,s,o){var i=s/8|0;return(a[i]|a[i+1]<<8)>>(s&7)&o},bu=function(a,s){var o=s/8|0;return(a[o]|a[o+1]<<8|a[o+2]<<16)>>(s&7)},m1=function(a){return(a+7)/8|0},up=function(a,s,o){return(s==null||s<0)&&(s=0),(o==null||o>a.length)&&(o=a.length),new Ua(a.subarray(s,o))},y1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ma=function(a,s,o){var i=new Error(s||y1[a]);if(i.code=a,Error.captureStackTrace&&Error.captureStackTrace(i,Ma),!o)throw i;return i},b1=function(a,s,o,i){var l=a.length,p=i?i.length:0;if(!l||s.f&&!s.l)return o||new Ua(0);var g=!o,h=g||s.i!=2,m=s.i;g&&(o=new Ua(l*3));var u=function(gt){var xt=o.length;if(gt>xt){var aa=new Ua(Math.max(xt*2,gt));aa.set(o),o=aa}},y=s.f||0,b=s.p||0,E=s.b||0,x=s.l,R=s.d,C=s.m,D=s.n,S=l*8;do{if(!x){y=an(a,b,1);var N=an(a,b+1,3);if(b+=3,N)if(N==1)x=h1,R=g1,C=9,D=5;else if(N==2){var P=an(a,b,31)+257,k=an(a,b+10,15)+4,I=P+an(a,b+5,31)+1;b+=14;for(var Z=new Ua(I),se=new Ua(19),ee=0;ee<k;++ee)se[d1[ee]]=an(a,b+ee*3,7);b+=k*3;for(var le=yu(se),Te=(1<<le)-1,he=Xo(se,le,1),ee=0;ee<I;){var de=he[an(a,b,Te)];b+=de&15;var T=de>>4;if(T<16)Z[ee++]=T;else{var Y=0,Q=0;for(T==16?(Q=3+an(a,b,3),b+=2,Y=Z[ee-1]):T==17?(Q=3+an(a,b,7),b+=3):T==18&&(Q=11+an(a,b,127),b+=7);Q--;)Z[ee++]=Y}}var be=Z.subarray(0,P),Ae=Z.subarray(P);C=yu(be),D=yu(Ae),x=Xo(be,C,1),R=Xo(Ae,D,1)}else Ma(1);else{var T=m1(b)+4,_=a[T-4]|a[T-3]<<8,w=T+_;if(w>l){m&&Ma(0);break}h&&u(E+_),o.set(a.subarray(T,w),E),s.b=E+=_,s.p=b=w*8,s.f=y;continue}if(b>S){m&&Ma(0);break}}h&&u(E+131072);for(var O=(1<<C)-1,J=(1<<D)-1,F=b;;F=b){var Y=x[bu(a,b)&O],X=Y>>4;if(b+=Y&15,b>S){m&&Ma(0);break}if(Y||Ma(2),X<256)o[E++]=X;else if(X==256){F=b,x=null;break}else{var ie=X-254;if(X>264){var ee=X-257,ge=ab[ee];ie=an(a,b,(1<<ge)-1)+ob[ee],b+=ge}var we=R[bu(a,b)&J],Me=we>>4;we||Ma(3),b+=we&15;var Ae=f1[Me];if(Me>3){var ge=nb[Me];Ae+=bu(a,b)&(1<<ge)-1,b+=ge}if(b>S){m&&Ma(0);break}h&&u(E+131072);var qe=E+ie;if(E<Ae){var wt=p-Ae,pt=Math.min(Ae,qe);for(wt+E<0&&Ma(3);E<pt;++E)o[E]=i[wt+E]}for(;E<qe;++E)o[E]=o[E-Ae]}}s.l=x,s.p=F,s.b=E,s.f=y,x&&(y=1,s.m=C,s.d=R,s.n=D)}while(!y);return E!=o.length&&g?up(o,0,E):o.subarray(0,E)},v1=new Ua(0),yn=function(a,s){return a[s]|a[s+1]<<8},Za=function(a,s){return(a[s]|a[s+1]<<8|a[s+2]<<16|a[s+3]<<24)>>>0},vu=function(a,s){return Za(a,s)+Za(a,s+4)*4294967296};function E1(a,s){return b1(a,{i:2},s&&s.out,s&&s.dictionary)}var Pu=typeof TextDecoder<"u"&&new TextDecoder,w1=0;try{Pu.decode(v1,{stream:!0}),w1=1}catch{}var x1=function(a){for(var s="",o=0;;){var i=a[o++],l=(i>127)+(i>223)+(i>239);if(o+l>a.length)return{s,r:up(a,o-1)};l?l==3?(i=((i&15)<<18|(a[o++]&63)<<12|(a[o++]&63)<<6|a[o++]&63)-65536,s+=String.fromCharCode(55296|i>>10,56320|i&1023)):l&1?s+=String.fromCharCode((i&31)<<6|a[o++]&63):s+=String.fromCharCode((i&15)<<12|(a[o++]&63)<<6|a[o++]&63):s+=String.fromCharCode(i)}};function S1(a,s){if(s){for(var o="",i=0;i<a.length;i+=16384)o+=String.fromCharCode.apply(null,a.subarray(i,i+16384));return o}else{if(Pu)return Pu.decode(a);var l=x1(a),p=l.s,o=l.r;return o.length&&Ma(8),p}}var T1=function(a,s){return s+30+yn(a,s+26)+yn(a,s+28)},A1=function(a,s,o){var i=yn(a,s+28),l=yn(a,s+30),p=S1(a.subarray(s+46,s+46+i),!(yn(a,s+8)&2048)),g=s+46+i,h=D1(a,g,l,o,Za(a,s+20),Za(a,s+24),Za(a,s+42)),m=h[0],u=h[1],y=h[2];return[yn(a,s+10),m,u,p,g+l+yn(a,s+32),y]},D1=function(a,s,o,i,l,p,g){var h=l==4294967295,m=p==4294967295,u=g==4294967295,y=s+o,b=h+m+u;if(i&&b){for(;s+4<y;s+=4+yn(a,s+2))if(yn(a,s)==1)return[h?vu(a,s+4+8*m):l,m?vu(a,s+4):p,u?vu(a,s+4+8*(m+h)):g,1];i<2&&Ma(13)}return[l,p,g,0]};function Lm(a,s){for(var o={},i=a.length-22;Za(a,i)!=101010256;--i)(!i||a.length-i>65558)&&Ma(13);var l=yn(a,i+8);if(!l)return{};var p=Za(a,i+16),g=Za(a,i-20)==117853008;if(g){var h=Za(a,i-12);g=Za(a,h)==101075792,g&&(l=Za(a,h+32),p=Za(a,h+48))}for(var m=0;m<l;++m){var u=A1(a,p,g),y=u[0],b=u[1],E=u[2],x=u[3],R=u[4],C=u[5],D=T1(a,C);p=R,y?y==8?o[x]=E1(a.subarray(D,D+b),{out:new Ua(E)}):Ma(14,"unknown compression type "+y):o[x]=up(a,D,D+b)}return o}const Om=128,Gt=1e-9;function zo(a,s,o){return(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0])}function vl(a,s,o){return Math.abs(zo(a,s,o))<=Gt&&o[0]>=Math.min(a[0],s[0])-Gt&&o[0]<=Math.max(a[0],s[0])+Gt&&o[1]>=Math.min(a[1],s[1])-Gt&&o[1]<=Math.max(a[1],s[1])+Gt}function C1(a,s,o,i){const l=zo(a,s,o),p=zo(a,s,i),g=zo(o,i,a),h=zo(o,i,s);return(l>Gt&&p<-Gt||l<-Gt&&p>Gt)&&(g>Gt&&h<-Gt||g<-Gt&&h>Gt)?!0:Math.abs(l)<=Gt&&vl(a,s,o)||Math.abs(p)<=Gt&&vl(a,s,i)||Math.abs(g)<=Gt&&vl(o,i,a)||Math.abs(h)<=Gt&&vl(o,i,s)}function N1(a){return a.reduce((s,o,i)=>{const l=a[(i+1)%a.length];return s+o[0]*l[1]-l[0]*o[1]},0)/2}function Fs(a){const s=a.split(";").map(i=>i.trim()).filter(Boolean);if(s.length<3||s.length>Om)throw new Error(`Enter 3-${Om} valve-body outline points.`);const o=s.map((i,l)=>{const p=i.split(",").map(h=>h.trim());if(p.length!==2||!p[0]||!p[1])throw new Error(`Mask point ${l+1} must be written as X,Y.`);const g=[Number(p[0]),Number(p[1])];if(!g.every(Number.isFinite))throw new Error(`Mask point ${l+1} must contain finite X,Y values.`);return g});if(o.some((i,l)=>{const p=o[(l+1)%o.length];return Math.hypot(i[0]-p[0],i[1]-p[1])<=Gt}))throw new Error("The valve mask outline cannot contain duplicate adjacent points.");for(let i=0;i<o.length;i+=1){const l=(i+1)%o.length;for(let p=i+1;p<o.length;p+=1){const g=(p+1)%o.length;if(!(i===p||l===p||g===i)&&C1(o[i],o[l],o[p],o[g]))throw new Error("The valve mask outline must not cross or touch itself.")}}if(Math.abs(N1(o))<=Gt)throw new Error("The valve mask outline must enclose an area.");return o}function k1(a){return`(${a.map(([s,o])=>`(${s} ${o})`).join(" ")})`}const Iu=["PFD","P&ID","Data sheet"],$s=["A0","A1","A2","A3","A4"],lb="pid-mapping-studio:cad-standards:v1";function qu(){return{schemaVersion:"1.0.0",companyDefaults:{PFD:"A1","P&ID":"A1","Data sheet":"A4"},companyItems:[],projects:{},reviewCandidates:[],auditTrail:[]}}function R1(){return qu()}function zs(a,s,o){return{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:a,detail:s,...o?{projectName:o}:{}}}function Mu(a){if(!a||typeof a!="object")return!1;const s=a;return!!(typeof s.id=="string"&&typeof s.name=="string"&&typeof s.summary=="string"&&typeof s.sourceFile=="string"&&["titleBlock","layer","textStyle","linetype","dimensionStyle","symbol","directionArrow","legend"].includes(String(s.category))&&["extracted-dwg","approved-source-drawing","synthetic-demo"].includes(String(s.sourceKind))&&["company","project"].includes(String(s.scope))&&["reviewed","needs-review"].includes(String(s.reviewStatus))&&typeof s.canPromote=="boolean"&&Array.isArray(s.fields)&&s.fields.every(o=>typeof o?.label=="string"&&typeof o?.value=="string")&&(s.sheetSize===void 0||$s.includes(s.sheetSize))&&(s.scope!=="project"||typeof s.projectId=="string"&&typeof s.projectName=="string"))}function j1(a){if(!a||typeof a!="object")return!1;const s=a;return!!(typeof s.id=="string"&&Mu(s.item)&&["company","project","unclassified"].includes(String(s.proposedScope))&&typeof s.sourceGroup=="string"&&["needs-review","approved","dismissed"].includes(String(s.status))&&(s.proposedScope==="company"||typeof s.projectId=="string"&&typeof s.projectName=="string"))}function cb(a){if(!a||typeof a!="object")return!1;const s=a;return s.schemaVersion!=="1.0.0"||!s.companyDefaults||!s.companyItems||!Array.isArray(s.companyItems)||!s.projects||typeof s.projects!="object"||s.reviewCandidates!==void 0&&!Array.isArray(s.reviewCandidates)||!Array.isArray(s.auditTrail)||!Iu.every(o=>$s.includes(s.companyDefaults[o]))||!s.companyItems.every(o=>Mu(o)&&o.scope==="company")||!(s.reviewCandidates??[]).every(o=>j1(o))||!s.auditTrail.every(o=>!!(o&&typeof o.id=="string"&&typeof o.at=="string"&&typeof o.action=="string"&&typeof o.detail=="string"))?!1:Object.entries(s.projects).every(([o,i])=>!!(o&&i&&typeof i.projectName=="string"&&i.defaults&&Object.entries(i.defaults).every(([l,p])=>Iu.includes(l)&&$s.includes(p))&&Array.isArray(i.items)&&i.items.every(l=>Mu(l)&&l.scope==="project"&&l.projectId===o)))}const Zo="cad-standards-changed";function Qo(a){if(!cb(a))throw new Error("CAD standards could not be saved because the library data is invalid.");try{window.localStorage.setItem(lb,JSON.stringify(a))}catch{throw new Error("This browser could not save the CAD standards locally. Export or back up the library before leaving this page.")}typeof window.dispatchEvent=="function"&&window.dispatchEvent(new Event(Zo))}function gn(){let a;try{a=window.localStorage.getItem(lb)}catch{throw new Error("This browser could not read its local CAD standards library.")}if(a===null){const m=qu();return Qo(m),m}let s;try{s=JSON.parse(a)}catch{throw new Error("The locally saved CAD standards library is not valid JSON. It was left unchanged.")}if(!cb(s))throw new Error("The locally saved CAD standards library has invalid fields. It was left unchanged.");const o={...s,reviewCandidates:s.reviewCandidates??[]},i=qu(),l=i.companyItems.filter(m=>!o.companyItems.some(u=>u.id===m.id)),p=new Set(o.reviewCandidates.map(m=>m.id)),g=i.reviewCandidates.filter(m=>!p.has(m.id));if(!l.length&&!g.length)return o;const h={...o,companyItems:[...o.companyItems,...l],reviewCandidates:[...o.reviewCandidates,...g],auditTrail:[...o.auditTrail,zs("Source mappings added to review queue",`${g.length} anonymized source mappings were added as pending review. Existing approvals, dismissals, and project settings were preserved.`)]};return Qo(h),h}function L1(a,s){return a.some(o=>o.category==="titleBlock"&&o.reviewStatus==="reviewed"&&(o.sheetSize===s||o.fields.some(i=>i.label==="Sheet size"&&i.value===s)))}function O1(a,s,o){if(a.companyDefaults[s]===o)return a;if(!L1(a.companyItems,o))throw new Error(`Approve a company title-block mapping for ${o} before making it a company default.`);return{...a,companyDefaults:{...a.companyDefaults,[s]:o},auditTrail:[zs("Company sheet-size default changed",`${s} changed to ${o} after an approved company title-block mapping was available.`),...a.auditTrail]}}function Pl(a,s,o,i=[],l){const p=a.reviewCandidates.find(x=>x.id===s);if(!p||p.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");if(o==="company"&&p.proposedScope!=="company")throw new Error("Only a source classified for the Legends Library can be approved there.");if(o==="project"&&p.proposedScope==="company")throw new Error("Legends Library source mappings must be approved to the Legends Library.");if(l&&!(p.item.sourceKind==="extracted-dwg"&&["symbol","directionArrow"].includes(p.item.category)&&["symbol","directionArrow"].includes(l)))throw new Error("Only an extracted CAD block can be reviewed as a Direction Arrow or a standard symbol.");const g=l??p.item.category;let h=[...p.item.fields.filter(x=>!i.some(R=>R.label===x.label)),...i];if(g==="directionArrow"&&(h=h.filter(x=>!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(x.label))),g==="symbol"&&p.item.sourceKind==="extracted-dwg"&&(!h.some(x=>x.label==="Fallback category"&&x.value.trim())||!h.some(x=>x.label==="Block asset ID"&&x.value.trim())))throw new Error("A fallback category and locally extracted block file are required before approving this symbol.");if(g==="symbol"&&p.item.sourceKind==="extracted-dwg"&&h.find(x=>x.label==="Fallback category")?.value.trim().toLowerCase()==="valve"){const x=h.find(R=>R.label==="Wipeout mask boundary")?.value??"";try{Fs(x)}catch(R){throw new Error(`A reviewed valve-body mask outline is required before approving this valve. ${R instanceof Error?R.message:"Check the X,Y point list."}`)}}if(g==="symbol"&&p.item.sourceKind==="extracted-dwg"){const x=h.find(S=>S.label==="Target CAD layer")?.value.trim()??"",R=h.find(S=>S.label==="Source discipline")?.value.trim()??"";if(!(o==="company"?a.companyItems:[...p.projectId?a.projects[p.projectId]?.items??[]:[],...a.companyItems]).some(S=>{if(S.category!=="layer"||S.sourceKind!=="extracted-dwg"||S.reviewStatus!=="reviewed")return!1;const N=S.fields.find(w=>w.label==="CAD name")?.value.trim()??"",T=S.fields.find(w=>w.label==="Source discipline")?.value.trim()??"",_=R==="Shared"?T==="Shared":T==="Shared"||T===R;return x&&x.toUpperCase()!=="0"&&N.toLowerCase()===x.toLowerCase()&&_}))throw new Error("Approve a compatible non-zero CAD layer before approving this symbol. Layer 0 cannot be used for block placement.")}const m={...p.item,category:g,fields:h,scope:o,reviewStatus:"reviewed",canPromote:!1,...o==="project"?{projectId:p.projectId,projectName:p.projectName}:{projectId:void 0,projectName:void 0}};let u=a.companyItems,y=a.projects;if(o==="company")u=[...a.companyItems.filter(x=>x.id!==m.id),m];else{const x=p.projectId,R=p.projectName;if(!x||!R)throw new Error("The isolated project scope is not available for this mapping.");const C=a.projects[x]??{projectName:R,defaults:{},items:[]};y={...a.projects,[x]:{...C,projectName:R,items:[...C.items.filter(D=>D.id!==m.id),m]}}}const b=a.reviewCandidates.map(x=>x.id===s?{...x,status:"approved"}:x),E=o==="company"?"Legends Library":`isolated ${p.projectName} library`;return{...a,companyItems:u,projects:y,reviewCandidates:b,auditTrail:[zs("Source mapping approved",`${g} mapping ${p.item.name} was approved to ${E}.`,p.projectName),...a.auditTrail]}}const $u={EQUIP:{layerName:"EQUIP",fallbackCategory:"equipment"},F_EQUIP:{layerName:"f_Equip",fallbackCategory:"equipment"},F_INST:{layerName:"f_Inst",fallbackCategory:"instrument"},F_PIPE_INLINE:{layerName:"f_Pipe_Inline",fallbackCategory:"inline component"}};function Uu(a,s){return a.item.fields.find(o=>o.label===s)?.value.trim()??""}function _1(a,s,o){return[...a.filter(i=>i.label!==s),{label:s,value:o}]}function P1(a){const i=Uu(a,"Extracted details").match(/(?:^|;)sourceLayer=([^;]*)/i)?.[1]??Uu(a,"Source insert layer(s)");return[...new Set(i.split(",").map(l=>l.trim().toUpperCase()).filter(Boolean))]}function Ms(a){return a.fields.find(s=>s.label==="CAD name")?.value.trim()??""}function I1(a){return a.fields.find(s=>s.label==="Source drawing ID")?.value.trim()??""}function _m(a){return a.fields.find(s=>s.label==="Extracted details")?.value.trim()??""}function db(a){return a.fields.find(s=>s.label==="Source discipline")?.value.trim()??""}function q1(a,s){return a.category==="layer"&&a.sourceKind==="extracted-dwg"&&a.reviewStatus==="reviewed"&&a.scope==="company"&&Ms(a).toUpperCase()===s.toUpperCase()&&db(a).toUpperCase()==="SHARED"}function M1(a,s,o){const i=new Set(s),l={unsupportedLayer:0,ambiguousLayer:0,missingAsset:0,missingLayer:0,invalidCandidate:0},p=a.reviewCandidates.filter(E=>E.status==="needs-review"&&E.proposedScope==="company"&&i.has(E.sourceGroup)),g=new Map,h=[];for(const E of p){if(E.item.category!=="symbol"||E.item.sourceKind!=="extracted-dwg")continue;const x=P1(E);if(x.length!==1){l.ambiguousLayer+=x.length>1?1:0,l.unsupportedLayer+=x.length===0?1:0;continue}const R=x[0].toUpperCase(),C=$u[R];if(!C){l.unsupportedLayer+=1;continue}const D=Uu(E,"Block asset ID");if(!D||!o.has(D)){l.missingAsset+=1;continue}const S=`${E.sourceGroup}|${R}`;g.set(S,{sourceId:E.sourceGroup,layerName:C.layerName}),h.push({candidateId:E.id,sourceId:E.sourceGroup,layerKey:S,fallbackCategory:C.fallbackCategory,blockAssetId:D})}let m=a;const u=new Map;let y=0;for(const[E,x]of g){const R=m.companyItems.find(S=>S.category==="layer"&&S.sourceKind==="extracted-dwg"&&S.reviewStatus==="reviewed"&&I1(S)===x.sourceId&&Ms(S).toUpperCase()===x.layerName.toUpperCase());if(R){const S={...R,fields:_1(R.fields,"Source discipline","Shared")};m={...m,companyItems:m.companyItems.map(N=>N.id===R.id?S:N),reviewCandidates:m.reviewCandidates.map(N=>N.id===R.id?{...N,item:S}:N)},db(R).toUpperCase()!=="SHARED"&&(y+=1),u.set(E,Ms(S));continue}const C=m.reviewCandidates.find(S=>S.status==="needs-review"&&S.proposedScope==="company"&&S.sourceGroup===x.sourceId&&S.item.category==="layer"&&S.item.sourceKind==="extracted-dwg"&&Ms(S.item).toUpperCase()===x.layerName.toUpperCase()),D=m.companyItems.find(S=>q1(S,x.layerName));if(D){const S=C?_m(C.item):"",N=_m(D);if(!C||S&&S===N){u.set(E,Ms(D));continue}l.invalidCandidate+=1;continue}if(!C){l.missingLayer+=1;continue}try{m=Pl(m,C.id,"company",[{label:"Source discipline",value:"Shared"}]);const S=m.companyItems.find(T=>T.id===C.item.id),N=Ms(S||C.item);u.set(E,N),y+=1}catch{l.invalidCandidate+=1}}let b=0;for(const E of h){const x=u.get(E.layerKey);if(!x){l.missingLayer+=1;continue}try{m=Pl(m,E.candidateId,"company",[{label:"Source discipline",value:"Shared"},{label:"Fallback category",value:E.fallbackCategory},{label:"Target CAD layer",value:x}]),b+=1}catch{l.invalidCandidate+=1}}return(y||b)&&(m={...m,auditTrail:[zs("Categorized CAD source batch approved",`${y} placement layer(s) and ${b} layer-matched symbol(s) approved for shared PFD/P&ID use.`),...a.auditTrail]}),{library:m,approvedLayers:y,approvedSymbols:b,skipped:l}}function $1(a,s,o){const i=a.companyItems.find(y=>y.id===s),l=Object.entries(a.projects).find(([,y])=>y.items.some(b=>b.id===s)),p=i??l?.[1].items.find(y=>y.id===s);if(!p||p.reviewStatus!=="reviewed")throw new Error("The selected approved CAD mapping is no longer available.");if(p.category!=="symbol"||p.sourceKind!=="extracted-dwg")throw new Error("Only reviewed extracted symbol mappings can be updated here.");const g=[...p.fields.filter(y=>!o.some(b=>b.label===y.label)),...o];if(g.find(y=>y.label==="Fallback category")?.value.trim().toLowerCase()==="valve")try{Fs(g.find(y=>y.label==="Wipeout mask boundary")?.value??"")}catch(y){throw new Error(`A reviewed valve-body mask outline is required. ${y instanceof Error?y.message:"Check the X,Y point list."}`)}const h={...p,fields:g},m=i?a.companyItems.map(y=>y.id===s?h:y):a.companyItems,u=l?{...a.projects,[l[0]]:{...l[1],items:l[1].items.map(y=>y.id===s?h:y)}}:a.projects;return{...a,companyItems:m,projects:u,auditTrail:[zs("Reviewed valve mask updated",`The approved symbol mapping ${p.name} received a reviewed Wipeout mask outline.`,p.projectName),...a.auditTrail]}}function U1(a,s){const o=a.reviewCandidates.find(i=>i.id===s);if(!o||o.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");return{...a,reviewCandidates:a.reviewCandidates.map(i=>i.id===s?{...i,status:"dismissed"}:i),auditTrail:[zs("Source mapping dismissed",`${o.item.category} mapping ${o.item.name} was dismissed from the review queue.`,o.projectName),...a.auditTrail]}}function F1(a,s,o,i,l){if(!s.trim()||!o.trim())throw new Error("Choose a project before saving its title-block override.");const p=a.projects[s]??{defaults:{},items:[]},g={...p.defaults,[i]:l},h=[...a.projects[s]?.items??[],...a.companyItems].find(b=>b.category==="titleBlock"&&b.reviewStatus==="reviewed"&&(b.sheetSize===l||b.fields.some(E=>E.label==="Sheet size"&&E.value===l)));if(!h)throw new Error(`Approve a title-block mapping for ${l} before saving this project default.`);const m=`project-default-${i.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,u={...h,id:m,name:`${l} · ${i} project default`,summary:`Project-only choice for ${i}. The company default remains ${a.companyDefaults[i]}.`,scope:"project",projectId:s,projectName:o,canPromote:!1,fields:[...h.fields,{label:"Override purpose",value:i},{label:"Project choice",value:l},{label:"Company default",value:a.companyDefaults[i]}]};return{...a,projects:{...a.projects,[s]:{projectName:o,defaults:g,items:[...p.items.filter(b=>b.id!==m),u]}},auditTrail:[zs("Project title-block override saved",`${i} set to ${l}; company default remains ${a.companyDefaults[i]}. Other project libraries are unchanged.`,o),...a.auditTrail]}}const B1=(()=>{const a=new Uint32Array(256);for(let s=0;s<a.length;s+=1){let o=s;for(let i=0;i<8;i+=1)o=o&1?3988292384^o>>>1:o>>>1;a[s]=o>>>0}return a})();function z1(a){let s=4294967295;for(const o of a)s=B1[(s^o)&255]^s>>>8;return(s^4294967295)>>>0}function Eu(a,s){const o=new Uint8Array(a);return s(new DataView(o.buffer)),o}function ub(a){if(a.length>65535)throw new Error("The local ZIP cannot contain more than 65,535 files.");const s=new TextEncoder,o=[],i=[];let l=0,p=0;for(const u of a){const y=s.encode(u.path),b=z1(u.content),E=Eu(30+y.length,R=>{R.setUint32(0,67324752,!0),R.setUint16(4,20,!0),R.setUint16(6,2048,!0),R.setUint16(8,0,!0),R.setUint16(10,0,!0),R.setUint16(12,33,!0),R.setUint32(14,b,!0),R.setUint32(18,u.content.length,!0),R.setUint32(22,u.content.length,!0),R.setUint16(26,y.length,!0),R.setUint16(28,0,!0),new Uint8Array(R.buffer,30,y.length).set(y)});o.push(E,u.content);const x=Eu(46+y.length,R=>{R.setUint32(0,33639248,!0),R.setUint16(4,20,!0),R.setUint16(6,20,!0),R.setUint16(8,2048,!0),R.setUint16(10,0,!0),R.setUint16(12,0,!0),R.setUint16(14,33,!0),R.setUint32(16,b,!0),R.setUint32(20,u.content.length,!0),R.setUint32(24,u.content.length,!0),R.setUint16(28,y.length,!0),R.setUint16(30,0,!0),R.setUint16(32,0,!0),R.setUint16(34,0,!0),R.setUint16(36,0,!0),R.setUint32(38,0,!0),R.setUint32(42,l,!0),new Uint8Array(R.buffer,46,y.length).set(y)});i.push(x),p+=x.length,l+=E.length+u.content.length}const g=Eu(22,u=>{u.setUint32(0,101010256,!0),u.setUint16(4,0,!0),u.setUint16(6,0,!0),u.setUint16(8,a.length,!0),u.setUint16(10,a.length,!0),u.setUint32(12,p,!0),u.setUint32(16,l,!0),u.setUint16(20,0,!0)}),m=[...o,...i,g].map(u=>{const y=new ArrayBuffer(u.byteLength);return new Uint8Array(y).set(u),y});return new Blob(m,{type:"application/zip"})}function Y1(a,s,o){return a.filter(i=>(i.discipline===s||i.discipline==="Shared")&&(!o||i.category==="company-standard"||i.projectLabel===o))}const H1="pid-mapping-studio-local-cad-library",V1=3,bn="source-drawings",vn="extracted-block-assets",vs="project-title-blocks",pb=100*1024*1024;function X1(a,s){if(!/\.dwg$/i.test(a.trim()))throw new Error("Upload a standalone AutoCAD DWG title block. Save a DWT as DWG first.");if(s.byteLength>pb)throw new Error("The project title block is larger than the 100 MB local upload limit.");const o=new TextDecoder().decode(s.subarray(0,6));if(!/^AC10\d{2}$/.test(o))throw new Error("This file does not have a recognized AutoCAD DWG header.")}function rn(){return typeof indexedDB>"u"?Promise.reject(new Error("This browser does not support local drawing-library storage.")):new Promise((a,s)=>{const o=indexedDB.open(H1,V1);o.onupgradeneeded=()=>{const i=o.result;i.objectStoreNames.contains(bn)||i.createObjectStore(bn,{keyPath:"id"}),i.objectStoreNames.contains(vn)||i.createObjectStore(vn,{keyPath:"id"}),i.objectStoreNames.contains(vs)||i.createObjectStore(vs,{keyPath:"projectId"})},o.onsuccess=()=>a(o.result),o.onerror=()=>s(o.error??new Error("The local drawing library could not be opened.")),o.onblocked=()=>s(new Error("The local drawing library is busy in another browser tab. Close the other tab and try again."))})}async function Fu(){const a=await rn();try{return await new Promise((s,o)=>{const l=a.transaction(bn,"readonly").objectStore(bn).getAll();l.onsuccess=()=>{const p=l.result;s(p.map(({id:g,label:h,category:m,discipline:u,format:y,bytes:b,projectLabel:E})=>({id:g,label:h,category:m,discipline:u??"Shared",format:y??"DWG",bytes:b,...E?{projectLabel:E}:{}})).sort((g,h)=>g.label.localeCompare(h.label)))},l.onerror=()=>o(l.error??new Error("The local drawing library could not be read."))})}finally{a.close()}}async function Go(a){const s=await rn();try{return await new Promise((o,i)=>{const l=s.transaction(bn,"readonly").objectStore(bn).get(a);l.onsuccess=()=>{const p=l.result;if(!p){i(new Error("An approved mapping refers to a source DWG that is no longer in the local library."));return}o(new Uint8Array(p.content))},l.onerror=()=>i(l.error??new Error("The local source drawing could not be read."))})}finally{s.close()}}async function Bu(a,s=!1){if(!a.length)return;const o=await rn();try{await new Promise((i,l)=>{const p=o.transaction(vn,"readwrite"),g=p.objectStore(vn);for(const h of a){const m=g.get(h.id);m.onsuccess=()=>{const u=m.result;if(s&&u)return;const y={id:h.id,sourceId:h.sourceId,blockName:h.blockName,content:h.content.slice().buffer,format:h.format??u?.format??"DWG",...h.previewSvg===null?{}:h.previewSvg!==void 0?{previewSvg:h.previewSvg}:u?.previewSvg?{previewSvg:u.previewSvg}:{},...h.nearbyLabels!==void 0?{nearbyLabels:h.nearbyLabels}:u?.nearbyLabels?{nearbyLabels:u.nearbyLabels}:{},...h.labelMatchSkipped!==void 0?{labelMatchSkipped:h.labelMatchSkipped}:u?.labelMatchSkipped!==void 0?{labelMatchSkipped:u.labelMatchSkipped}:{},...h.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:h.labelMatchAmbiguous}:u?.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:u.labelMatchAmbiguous}:{},...h.sourcePlacements!==void 0?{sourcePlacements:h.sourcePlacements}:u?.sourcePlacements?{sourcePlacements:u.sourcePlacements}:{},...h.geometryDescriptor!==void 0?{geometryDescriptor:h.geometryDescriptor}:u?.geometryDescriptor?{geometryDescriptor:u.geometryDescriptor}:{}};g.put(y)}}p.oncomplete=()=>i(),p.onerror=()=>l(p.error??new Error("Extracted symbol blocks could not be saved locally.")),p.onabort=()=>l(p.error??new Error("Saving extracted symbol blocks was cancelled."))})}finally{o.close()}}async function G1(){const a=await rn();try{return await new Promise((s,o)=>{const i=a.transaction(vn,"readonly").objectStore(vn).getAllKeys();i.onsuccess=()=>s(new Set(i.result.map(String))),i.onerror=()=>o(i.error??new Error("Local block availability could not be checked."))})}finally{a.close()}}async function fb(a){const s=await rn();try{return await new Promise((o,i)=>{const l=s.transaction(vn,"readonly").objectStore(vn).get(a);l.onsuccess=()=>{const p=l.result;if(!p){o({nearbyLabels:[],labelMatchSkipped:!1});return}o({format:p.format??"DWG",...p.previewSvg?{previewSvg:p.previewSvg}:{},nearbyLabels:p.nearbyLabels??[],labelMatchSkipped:p.labelMatchSkipped??!1,...p.labelMatchAmbiguous?{labelMatchAmbiguous:!0}:{},...p.sourcePlacements?{sourcePlacements:p.sourcePlacements}:{},...p.geometryDescriptor?{geometryDescriptor:p.geometryDescriptor}:{}})},l.onerror=()=>i(l.error??new Error("The local block preview could not be read."))})}finally{s.close()}}async function hb(a){const s=await rn();try{return await new Promise((o,i)=>{const l=s.transaction(vn,"readonly").objectStore(vn).get(a);l.onsuccess=()=>{const p=l.result;if(!p){i(new Error("An approved symbol block is missing from this browser’s local CAD library. Re-import its extraction package."));return}o(new Uint8Array(p.content))},l.onerror=()=>i(l.error??new Error("The approved symbol block could not be read locally."))})}finally{s.close()}}async function Gl(a){if(!a.trim())return null;const s=await rn();try{return await new Promise((o,i)=>{const l=s.transaction(vs,"readonly").objectStore(vs).get(a);l.onsuccess=()=>o(l.result??null),l.onerror=()=>i(l.error??new Error("The project title block could not be read locally."))})}finally{s.close()}}function pp(a,s){if(a.workspaceType&&a.workspaceType!==s)throw new Error(`This title block belongs to ${a.workspaceType}, not ${s}. Upload a separate title block for each workspace.`);return{projectId:a.projectId,workspaceType:s,titleBlockId:a.titleBlockId??`legacy-${a.projectId}-${a.uploadedAt}`,titleBlockPath:a.titleBlockPath??"PROJECT_TITLE_BLOCK.dwg",xrefName:a.xrefName??"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:a.expectedSize??{widthMm:841,heightMm:594},version:a.version??1,bytes:a.bytes,uploadedAt:a.uploadedAt}}async function Pm(a,s){const o=await Gl(a);return o?pp(o,s):null}async function K1(a,s){const o=await Gl(a);return o?{...pp(o,s),content:new Uint8Array(o.content)}:null}async function W1(a,s,o,i){if(!a.trim())throw new Error("Select a project before uploading its title block.");if(!["PFD","P&ID"].includes(s))throw new Error("Choose either a PFD or P&ID workspace for this title block.");X1(o,i);const l=await Gl(a);if(l?.workspaceType&&l.workspaceType!==s)throw new Error(`This folder already has a ${l.workspaceType} title block. Keep PFD and P&ID title blocks in separate workspaces.`);const p=new Date().toISOString(),g=(l?.version??(l?1:0))+1,h={projectId:a,workspaceType:s,titleBlockId:globalThis.crypto?.randomUUID?.()??`title-block-${Date.now()}`,titleBlockPath:"PROJECT_TITLE_BLOCK.dwg",xrefName:"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:{widthMm:841,heightMm:594},version:g,bytes:i.byteLength,uploadedAt:p,content:i.slice().buffer},m=await rn();try{await new Promise((u,y)=>{const b=m.transaction(vs,"readwrite");b.objectStore(vs).put(h),b.oncomplete=()=>u(),b.onerror=()=>y(b.error??new Error("The project title block could not be saved locally.")),b.onabort=()=>y(b.error??new Error("Saving the project title block was cancelled."))})}finally{m.close()}return{...pp(h,s)}}async function Z1(a,s){if(!a.trim())return;const o=await Gl(a);if(o?.workspaceType&&o.workspaceType!==s)throw new Error(`This title block belongs to ${o.workspaceType}; it was not removed from the ${s} workspace.`);const i=await rn();try{await new Promise((l,p)=>{const g=i.transaction(vs,"readwrite");g.objectStore(vs).delete(a),g.oncomplete=()=>l(),g.onerror=()=>p(g.error??new Error("The project title block could not be removed locally.")),g.onabort=()=>p(g.error??new Error("Removing the project title block was cancelled."))})}finally{i.close()}}async function Q1(a){if(!a.length)return;const s=await rn();try{await new Promise((o,i)=>{const l=s.transaction(bn,"readwrite"),p=l.objectStore(bn);for(const g of a){const h=g.content.slice().buffer,{content:m,...u}=g;p.put({...u,content:h,createdAt:new Date().toISOString()})}l.oncomplete=()=>o(),l.onerror=()=>i(l.error??new Error("The local drawing library could not be saved.")),l.onabort=()=>i(l.error??new Error("The local drawing library save was cancelled."))})}finally{s.close()}}async function J1(a,s){const o=await rn();try{await new Promise((i,l)=>{const p=o.transaction(bn,"readwrite"),g=p.objectStore(bn),h=g.get(a);h.onsuccess=()=>{const m=h.result;if(!m){p.abort(),l(new Error("That source drawing is no longer in the local library."));return}g.put({...m,...s,projectLabel:s.projectLabel?.trim()||void 0})},h.onerror=()=>l(h.error??new Error("The source drawing could not be updated.")),p.oncomplete=()=>i(),p.onerror=()=>l(p.error??new Error("The source drawing update failed.")),p.onabort=()=>l(p.error??new Error("The source drawing update was cancelled."))})}finally{o.close()}}const eS=String.raw`
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
`,tS=eS+String.raw`; Local CAD standards extractor. Run in Windows AutoCAD on each source drawing.
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
`;function aS(a,s){return`SOURCE_${String(a+1).padStart(3,"0")}.${s==="DXF"?"dxf":"dwg"}`}async function nS(a){if(a.length===0)throw new Error("There are no eligible local source drawings to package.");const s=[{path:"EXTRACT_CAD_STANDARDS.lsp",content:new TextEncoder().encode(tS)},{path:"README_LOCAL_EXTRACTION.txt",content:new TextEncoder().encode(`LOCAL CAD STANDARDS EXTRACTION

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
`)}],o=await Promise.all(a.map(i=>Go(i.id)));return a.forEach((i,l)=>{const p=i.format==="DXF"?Ir(o[l]):null;s.push({path:aS(l,i.format),content:p?.content??o[l]})}),ub(s)}function Im(a,s,o){let i=0,l=0;const p=new Map([...o].map(([h,m])=>[h.toUpperCase(),m])),g=a.reviewCandidates.map(h=>{if(h.sourceGroup!==s||h.status!=="needs-review"||h.proposedScope!=="company"||h.item.category!=="symbol"||h.item.sourceKind!=="extracted-dwg")return h;const m=h.item.fields,u=m.find(C=>C.label==="Block name")?.value.trim()??"";if(!u)return h;const y=p.get(u.toUpperCase())?.sourcePlacements??[],b=[...new Set(y.map(C=>C.layer.trim()).filter(Boolean))];b.length&&(l+=1);const x=(m.find(C=>C.label==="Extracted details")?.value??"").split(";").filter(C=>!/^\s*sourceLayer=/i.test(C)).join(";"),R=[...m.filter(C=>!["Extracted details","Source insert layer(s)","Source insert rotation(s)"].includes(C.label)),{label:"Extracted details",value:x+(b.length?`;sourceLayer=${b.join(", ")}`:"")},...b.length?[{label:"Source insert layer(s)",value:b.join(", ")},{label:"Source insert rotation(s)",value:y.map(C=>`${C.rotationDegrees}° on ${C.layer} (${C.count})`).join("; ")}]:[]];return JSON.stringify(m)===JSON.stringify(R)?h:(i+=1,{...h,item:{...h.item,fields:R}})});return{library:i?{...a,reviewCandidates:g}:a,updatedRecords:i,recoveredSymbols:l}}class sS{constructor(s){this._pointer=0,this._eof=!1,this._data=s}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const s={code:parseInt(this._data[this._pointer])};return this._pointer++,s.value=qm(s.code,this._data[this._pointer].trim()),this._pointer++,s.code===0&&s.value==="EOF"&&(this._eof=!0),this.lastReadGroup=s,s}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const s={code:parseInt(this._data[this._pointer])};return s.value=qm(s.code,this._data[this._pointer+1].trim()),s}rewind(s=1){this._pointer=this._pointer-s*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}function qm(a,s){return a<=9?s:a>=10&&a<=59?parseFloat(s):a>=60&&a<=99?parseInt(s):a>=100&&a<=109?s:a>=110&&a<=149?parseFloat(s):a>=160&&a<=179?parseInt(s):a>=210&&a<=239?parseFloat(s):a>=270&&a<=289?parseInt(s):a>=290&&a<=299?rS(s):a>=300&&a<=369?s:a>=370&&a<=389?parseInt(s):a>=390&&a<=399?s:a>=400&&a<=409?parseInt(s):a>=410&&a<=419?s:a>=420&&a<=429?parseInt(s):a>=430&&a<=439?s:a>=440&&a<=459?parseInt(s):a>=460&&a<=469?parseFloat(s):a>=470&&a<=481||a===999||a>=1e3&&a<=1009?s:a>=1010&&a<=1059?parseFloat(s):a>=1060&&a<=1071?parseInt(s):(console.log("WARNING: Group code does not have a defined type: %j",{code:a,value:s}),s)}function rS(a){if(a==="0")return!1;if(a==="1")return!0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")}const gb=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function oS(a){return gb[a]}function Ke(a){const s={};a.rewind();let o=a.next(),i=o.code;if(s.x=o.value,i+=10,o=a.next(),o.code!=i)throw new Error("Expected code for point value to be "+i+" but got "+o.code+".");return s.y=o.value,i+=10,o=a.next(),o.code!=i?(a.rewind(),s):(s.z=o.value,s)}function ca(a,s,o){switch(s.code){case 0:a.type=s.value;break;case 5:a.handle=s.value;break;case 6:a.lineType=s.value;break;case 8:a.layer=s.value;break;case 48:a.lineTypeScale=s.value;break;case 60:a.visible=s.value===0;break;case 62:a.colorIndex=s.value,a.color=oS(Math.abs(s.value));break;case 67:a.inPaperSpace=s.value!==0;break;case 100:break;case 101:for(;s.code!=0;)s=o.next();o.rewind();break;case 330:a.ownerHandle=s.value;break;case 347:a.materialObjectHandle=s.value;break;case 370:a.lineweight=s.value;break;case 420:a.color=s.value;break;case 1e3:a.extendedData=a.extendedData||{},a.extendedData.customStrings=a.extendedData.customStrings||[],a.extendedData.customStrings.push(s.value);break;case 1001:a.extendedData=a.extendedData||{},a.extendedData.applicationName=s.value;break;default:return!1}return!0}class iS{constructor(){this.ForEntityName="3DFACE"}parseEntity(s,o){const i={type:o.value,vertices:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 70:i.shape=(o.value&1)===1,i.hasContinuousLinetypePattern=(o.value&128)===128;break;case 10:i.vertices=lS(s,o),o=s.lastReadGroup;break;default:ca(i,o,s);break}o=s.next()}return i}}function lS(a,s){var o=[],i=!1,l=!1,p=4;for(let h=0;h<=p;h++){for(var g={};!a.isEOF()&&!(s.code===0||l);){switch(s.code){case 10:case 11:case 12:case 13:if(i){l=!0;continue}g.x=s.value,i=!0;break;case 20:case 21:case 22:case 23:g.y=s.value;break;case 30:case 31:case 32:case 33:g.z=s.value;break;default:return o}s=a.next()}o.push(g),i=!1,l=!1}return a.rewind(),o}class cS{constructor(){this.ForEntityName="ARC"}parseEntity(s,o){const i={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:i.center=Ke(s);break;case 40:i.radius=o.value;break;case 50:i.startAngle=Math.PI/180*o.value;break;case 51:i.endAngle=Math.PI/180*o.value,i.angleLength=i.endAngle-i.startAngle;break;case 210:i.extrusionDirectionX=o.value;break;case 220:i.extrusionDirectionY=o.value;break;case 230:i.extrusionDirectionZ=o.value;break;default:ca(i,o,s);break}o=s.next()}return i}}class dS{constructor(){this.ForEntityName="ATTDEF"}parseEntity(s,o){var i={type:o.value,scale:1,textStyle:"STANDARD"};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 1:i.text=o.value;break;case 2:i.tag=o.value;break;case 3:i.prompt=o.value;break;case 7:i.textStyle=o.value;break;case 10:i.startPoint=Ke(s);break;case 11:i.endPoint=Ke(s);break;case 39:i.thickness=o.value;break;case 40:i.textHeight=o.value;break;case 41:i.scale=o.value;break;case 50:i.rotation=o.value;break;case 51:i.obliqueAngle=o.value;break;case 70:i.invisible=!!(o.value&1),i.constant=!!(o.value&2),i.verificationRequired=!!(o.value&4),i.preset=!!(o.value&8);break;case 71:i.backwards=!!(o.value&2),i.mirrored=!!(o.value&4);break;case 72:i.horizontalJustification=o.value;break;case 73:i.fieldLength=o.value;break;case 74:i.verticalJustification=o.value;break;case 100:break;case 210:i.extrusionDirectionX=o.value;break;case 220:i.extrusionDirectionY=o.value;break;case 230:i.extrusionDirectionZ=o.value;break;default:ca(i,o,s);break}o=s.next()}return i}}class uS{constructor(){this.ForEntityName="CIRCLE"}parseEntity(s,o){const i={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:i.center=Ke(s);break;case 40:i.radius=o.value;break;case 50:i.startAngle=Math.PI/180*o.value;break;case 51:const l=Math.PI/180*o.value;l<i.startAngle?i.angleLength=l+2*Math.PI-i.startAngle:i.angleLength=l-i.startAngle,i.endAngle=l;break;default:ca(i,o,s);break}o=s.next()}return i}}class pS{constructor(){this.ForEntityName="DIMENSION"}parseEntity(s,o){const i={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 2:i.block=o.value;break;case 10:i.anchorPoint=Ke(s);break;case 11:i.middleOfText=Ke(s);break;case 12:i.insertionPoint=Ke(s);break;case 13:i.linearOrAngularPoint1=Ke(s);break;case 14:i.linearOrAngularPoint2=Ke(s);break;case 15:i.diameterOrRadiusPoint=Ke(s);break;case 16:i.arcPoint=Ke(s);break;case 70:i.dimensionType=o.value;break;case 71:i.attachmentPoint=o.value;break;case 42:i.actualMeasurement=o.value;break;case 1:i.text=o.value;break;case 50:i.angle=o.value;break;default:ca(i,o,s);break}o=s.next()}return i}}class fS{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(s,o){const i={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:i.center=Ke(s);break;case 11:i.majorAxisEndPoint=Ke(s);break;case 40:i.axisRatio=o.value;break;case 41:i.startAngle=o.value;break;case 42:i.endAngle=o.value;break;case 2:i.name=o.value;break;default:ca(i,o,s);break}o=s.next()}return i}}class hS{constructor(){this.ForEntityName="INSERT"}parseEntity(s,o){const i={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 2:i.name=o.value;break;case 41:i.xScale=o.value;break;case 42:i.yScale=o.value;break;case 43:i.zScale=o.value;break;case 10:i.position=Ke(s);break;case 50:i.rotation=o.value;break;case 70:i.columnCount=o.value;break;case 71:i.rowCount=o.value;break;case 44:i.columnSpacing=o.value;break;case 45:i.rowSpacing=o.value;break;case 210:i.extrusionDirection=Ke(s);break;default:ca(i,o,s);break}o=s.next()}return i}}class gS{constructor(){this.ForEntityName="LINE"}parseEntity(s,o){const i={type:o.value,vertices:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:i.vertices.unshift(Ke(s));break;case 11:i.vertices.push(Ke(s));break;case 210:i.extrusionDirection=Ke(s);break;case 100:break;default:ca(i,o,s);break}o=s.next()}return i}}class mS{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(s,o){const i={type:o.value,vertices:[]};let l=0;for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 38:i.elevation=o.value;break;case 39:i.depth=o.value;break;case 70:i.shape=(o.value&1)===1,i.hasContinuousLinetypePattern=(o.value&128)===128;break;case 90:l=o.value;break;case 10:i.vertices=yS(l,s);break;case 43:o.value!==0&&(i.width=o.value);break;case 210:i.extrusionDirectionX=o.value;break;case 220:i.extrusionDirectionY=o.value;break;case 230:i.extrusionDirectionZ=o.value;break;default:ca(i,o,s);break}o=s.next()}return i}}function yS(a,s){if(!a||a<=0)throw Error("n must be greater than 0 verticies");const o=[];let i=!1,l=!1,p=s.lastReadGroup;for(let g=0;g<a;g++){const h={};for(;!s.isEOF()&&!(p.code===0||l);){switch(p.code){case 10:if(i){l=!0;continue}h.x=p.value,i=!0;break;case 20:h.y=p.value;break;case 30:h.z=p.value;break;case 40:h.startWidth=p.value;break;case 41:h.endWidth=p.value;break;case 42:p.value!=0&&(h.bulge=p.value);break;default:return s.rewind(),i&&o.push(h),s.rewind(),o}p=s.next()}o.push(h),i=!1,l=!1}return s.rewind(),o}class bS{constructor(){this.ForEntityName="MTEXT"}parseEntity(s,o){const i={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 3:i.text?i.text+=o.value:i.text=o.value;break;case 1:i.text?i.text+=o.value:i.text=o.value;break;case 10:i.position=Ke(s);break;case 11:i.directionVector=Ke(s);break;case 40:i.height=o.value;break;case 41:i.width=o.value;break;case 50:i.rotation=o.value;break;case 71:i.attachmentPoint=o.value;break;case 72:i.drawingDirection=o.value;break;default:ca(i,o,s);break}o=s.next()}return i}}class vS{constructor(){this.ForEntityName="POINT"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.position=Ke(s);break;case 39:l.thickness=o.value;break;case 210:l.extrusionDirection=Ke(s);break;case 100:break;default:ca(l,o,s);break}o=s.next()}return l}}class ES{constructor(){this.ForEntityName="VERTEX"}parseEntity(s,o){var i={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:i.x=o.value;break;case 20:i.y=o.value;break;case 30:i.z=o.value;break;case 40:break;case 41:break;case 42:o.value!=0&&(i.bulge=o.value);break;case 70:i.curveFittingVertex=(o.value&1)!==0,i.curveFitTangent=(o.value&2)!==0,i.splineVertex=(o.value&8)!==0,i.splineControlPoint=(o.value&16)!==0,i.threeDPolylineVertex=(o.value&32)!==0,i.threeDPolylineMesh=(o.value&64)!==0,i.polyfaceMeshVertex=(o.value&128)!==0;break;case 50:break;case 71:i.faceA=o.value;break;case 72:i.faceB=o.value;break;case 73:i.faceC=o.value;break;case 74:i.faceD=o.value;break;default:ca(i,o,s);break}o=s.next()}return i}}class wS{constructor(){this.ForEntityName="POLYLINE"}parseEntity(s,o){var i={type:o.value,vertices:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:break;case 20:break;case 30:break;case 39:i.thickness=o.value;break;case 40:break;case 41:break;case 70:i.shape=(o.value&1)!==0,i.includesCurveFitVertices=(o.value&2)!==0,i.includesSplineFitVertices=(o.value&4)!==0,i.is3dPolyline=(o.value&8)!==0,i.is3dPolygonMesh=(o.value&16)!==0,i.is3dPolygonMeshClosed=(o.value&32)!==0,i.isPolyfaceMesh=(o.value&64)!==0,i.hasContinuousLinetypePattern=(o.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:i.extrusionDirection=Ke(s);break;default:ca(i,o,s);break}o=s.next()}return i.vertices=xS(s,o),i}}function xS(a,s){const o=new ES,i=[];for(;!a.isEOF();)if(s.code===0){if(s.value==="VERTEX")i.push(o.parseEntity(a,s)),s=a.lastReadGroup;else if(s.value==="SEQEND"){SS(a,s);break}}return i}function SS(a,s){const o={type:s.value};for(s=a.next();!a.isEOF()&&s.code!=0;)ca(o,s,a),s=a.next();return o}class TS{constructor(){this.ForEntityName="SOLID"}parseEntity(s,o){const i={type:o.value,points:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:i.points[0]=Ke(s);break;case 11:i.points[1]=Ke(s);break;case 12:i.points[2]=Ke(s);break;case 13:i.points[3]=Ke(s);break;case 210:i.extrusionDirection=Ke(s);break;default:ca(i,o,s);break}o=s.next()}return i}}class AS{constructor(){this.ForEntityName="SPLINE"}parseEntity(s,o){const i={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:i.controlPoints||(i.controlPoints=[]),i.controlPoints.push(Ke(s));break;case 11:i.fitPoints||(i.fitPoints=[]),i.fitPoints.push(Ke(s));break;case 12:i.startTangent=Ke(s);break;case 13:i.endTangent=Ke(s);break;case 40:i.knotValues||(i.knotValues=[]),i.knotValues.push(o.value);break;case 70:(o.value&1)!=0&&(i.closed=!0),(o.value&2)!=0&&(i.periodic=!0),(o.value&4)!=0&&(i.rational=!0),(o.value&8)!=0&&(i.planar=!0),(o.value&16)!=0&&(i.planar=!0,i.linear=!0);break;case 71:i.degreeOfSplineCurve=o.value;break;case 72:i.numberOfKnots=o.value;break;case 73:i.numberOfControlPoints=o.value;break;case 74:i.numberOfFitPoints=o.value;break;case 210:i.normalVector=Ke(s);break;default:ca(i,o,s);break}o=s.next()}return i}}class DS{constructor(){this.ForEntityName="TEXT"}parseEntity(s,o){const i={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:i.startPoint=Ke(s);break;case 11:i.endPoint=Ke(s);break;case 40:i.textHeight=o.value;break;case 41:i.xScale=o.value;break;case 50:i.rotation=o.value;break;case 1:i.text=o.value;break;case 72:i.halign=o.value;break;case 73:i.valign=o.value;break;default:ca(i,o,s);break}o=s.next()}return i}}var Dl={exports:{}},CS=Dl.exports,Mm;function NS(){return Mm||(Mm=1,(function(a){(function(s,o){a.exports?a.exports=o():s.log=o()})(CS,function(){var s=function(){},o="undefined",i=typeof window!==o&&typeof window.navigator!==o&&/Trident\/|MSIE /.test(window.navigator.userAgent),l=["trace","debug","info","warn","error"],p={},g=null;function h(C,D){var S=C[D];if(typeof S.bind=="function")return S.bind(C);try{return Function.prototype.bind.call(S,C)}catch{return function(){return Function.prototype.apply.apply(S,[C,arguments])}}}function m(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function u(C){return C==="debug"&&(C="log"),typeof console===o?!1:C==="trace"&&i?m:console[C]!==void 0?h(console,C):console.log!==void 0?h(console,"log"):s}function y(){for(var C=this.getLevel(),D=0;D<l.length;D++){var S=l[D];this[S]=D<C?s:this.methodFactory(S,C,this.name)}if(this.log=this.debug,typeof console===o&&C<this.levels.SILENT)return"No console available for logging"}function b(C){return function(){typeof console!==o&&(y.call(this),this[C].apply(this,arguments))}}function E(C,D,S){return u(C)||b.apply(this,arguments)}function x(C,D){var S=this,N,T,_,w="loglevel";typeof C=="string"?w+=":"+C:typeof C=="symbol"&&(w=void 0);function P(ee){var le=(l[ee]||"silent").toUpperCase();if(!(typeof window===o||!w)){try{window.localStorage[w]=le;return}catch{}try{window.document.cookie=encodeURIComponent(w)+"="+le+";"}catch{}}}function k(){var ee;if(!(typeof window===o||!w)){try{ee=window.localStorage[w]}catch{}if(typeof ee===o)try{var le=window.document.cookie,Te=encodeURIComponent(w),he=le.indexOf(Te+"=");he!==-1&&(ee=/^([^;]+)/.exec(le.slice(he+Te.length+1))[1])}catch{}return S.levels[ee]===void 0&&(ee=void 0),ee}}function I(){if(!(typeof window===o||!w)){try{window.localStorage.removeItem(w)}catch{}try{window.document.cookie=encodeURIComponent(w)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function Z(ee){var le=ee;if(typeof le=="string"&&S.levels[le.toUpperCase()]!==void 0&&(le=S.levels[le.toUpperCase()]),typeof le=="number"&&le>=0&&le<=S.levels.SILENT)return le;throw new TypeError("log.setLevel() called with invalid level: "+ee)}S.name=C,S.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},S.methodFactory=D||E,S.getLevel=function(){return _??T??N},S.setLevel=function(ee,le){return _=Z(ee),le!==!1&&P(_),y.call(S)},S.setDefaultLevel=function(ee){T=Z(ee),k()||S.setLevel(ee,!1)},S.resetLevel=function(){_=null,I(),y.call(S)},S.enableAll=function(ee){S.setLevel(S.levels.TRACE,ee)},S.disableAll=function(ee){S.setLevel(S.levels.SILENT,ee)},S.rebuild=function(){if(g!==S&&(N=Z(g.getLevel())),y.call(S),g===S)for(var ee in p)p[ee].rebuild()},N=Z(g?g.getLevel():"WARN");var se=k();se!=null&&(_=Z(se)),y.call(S)}g=new x,g.getLogger=function(D){if(typeof D!="symbol"&&typeof D!="string"||D==="")throw new TypeError("You must supply a name when creating a logger.");var S=p[D];return S||(S=p[D]=new x(D,g.methodFactory)),S};var R=typeof window!==o?window.log:void 0;return g.noConflict=function(){return typeof window!==o&&window.log===g&&(window.log=R),g},g.getLoggers=function(){return p},g.default=g,g})})(Dl)),Dl.exports}var kS=NS();const Ge=ai(kS);Ge.setLevel("error");function RS(a){a.registerEntityHandler(iS),a.registerEntityHandler(cS),a.registerEntityHandler(dS),a.registerEntityHandler(uS),a.registerEntityHandler(pS),a.registerEntityHandler(fS),a.registerEntityHandler(hS),a.registerEntityHandler(gS),a.registerEntityHandler(mS),a.registerEntityHandler(bS),a.registerEntityHandler(vS),a.registerEntityHandler(wS),a.registerEntityHandler(TS),a.registerEntityHandler(AS),a.registerEntityHandler(DS)}class mb{constructor(){this._entityHandlers={},RS(this)}parse(s){return typeof s=="string"?this._parse(s):(console.error("Cannot read dxf source of type `"+typeof s),null)}registerEntityHandler(s){const o=new s;this._entityHandlers[o.ForEntityName]=o}parseSync(s){return this.parse(s)}parseStream(s){let o="";const i=this;return new Promise((l,p)=>{s.on("data",g=>{o+=g}),s.on("end",()=>{try{l(i._parse(o))}catch(g){p(g)}}),s.on("error",g=>{p(g)})})}_parse(s){const o={};let i=0;const l=s.split(/\r\n|\r|\n/g),p=new sS(l);if(!p.hasNext())throw Error("Empty file");const g=this;let h;function m(){for(h=p.next();!p.isEOF();)if(h.code===0&&h.value==="SECTION"){if(h=p.next(),h.code!==2){console.error("Unexpected code %s after 0:SECTION",yb(h)),h=p.next();continue}h.value==="HEADER"?(Ge.debug("> HEADER"),o.header=u(),Ge.debug("<")):h.value==="BLOCKS"?(Ge.debug("> BLOCKS"),o.blocks=y(),Ge.debug("<")):h.value==="ENTITIES"?(Ge.debug("> ENTITIES"),o.entities=T(!1),Ge.debug("<")):h.value==="TABLES"?(Ge.debug("> TABLES"),o.tables=E(),Ge.debug("<")):h.value==="EOF"?Ge.debug("EOF"):Ge.warn("Skipping section '%s'",h.value)}else h=p.next()}function u(){let P=null,k=null;const I={};for(h=p.next();;){if(fn(h,0,"ENDSEC")){P&&(I[P]=k);break}else h.code===9?(P&&(I[P]=k),P=h.value):h.code===10?k={x:h.value}:h.code===20?k.y=h.value:h.code===30?k.z=h.value:k=h.value;h=p.next()}return h=p.next(),I}function y(){const P={};for(h=p.next();h.value!=="EOF"&&!fn(h,0,"ENDSEC");)if(fn(h,0,"BLOCK")){Ge.debug("block {");const k=b();Ge.debug("}"),w(k),k.name?P[k.name]=k:Ge.error('block with handle "'+k.handle+'" is missing a name.')}else qs(h),h=p.next();return P}function b(){const P={};for(h=p.next();h.value!=="EOF";){switch(h.code){case 1:P.xrefPath=h.value,h=p.next();break;case 2:P.name=h.value,h=p.next();break;case 3:P.name2=h.value,h=p.next();break;case 5:P.handle=h.value,h=p.next();break;case 8:P.layer=h.value,h=p.next();break;case 10:P.position=_(h),h=p.next();break;case 67:P.paperSpace=!!(h.value&&h.value==1),h=p.next();break;case 70:h.value!=0&&(P.type=h.value),h=p.next();break;case 100:h=p.next();break;case 330:P.ownerHandle=h.value,h=p.next();break;case 0:if(h.value=="ENDBLK")break;P.entities=T(!0);break;default:qs(h),h=p.next()}if(fn(h,0,"ENDBLK")){h=p.next();break}}return P}function E(){const P={};for(h=p.next();h.value!=="EOF"&&!fn(h,0,"ENDSEC");)fn(h,0,"TABLE")?(h=p.next(),N[h.value]?(Ge.debug(h.value+" Table {"),P[N[h.value].tableName]=R(h),Ge.debug("}")):Ge.debug("Unhandled Table "+h.value)):h=p.next();return h=p.next(),P}const x="ENDTAB";function R(P){const k=N[P.value],I={};let Z=0;for(h=p.next();!fn(h,0,x);)switch(h.code){case 5:I.handle=h.value,h=p.next();break;case 330:I.ownerHandle=h.value,h=p.next();break;case 100:h.value==="AcDbSymbolTable"||qs(h),h=p.next();break;case 70:Z=h.value,h=p.next();break;case 0:h.value===k.dxfSymbolName?I[k.tableRecordsProperty]=k.parseTableRecords():(qs(h),h=p.next());break;default:qs(h),h=p.next()}const se=I[k.tableRecordsProperty];if(se){let ee=(()=>{if(se.constructor===Array)return se.length;if(typeof se=="object")return Object.keys(se).length})();Z!==ee&&Ge.warn("Parsed "+ee+" "+k.dxfSymbolName+"'s but expected "+Z)}return h=p.next(),I}function C(){const P=[];let k={};for(Ge.debug("ViewPort {"),h=p.next();!fn(h,0,x);)switch(h.code){case 2:k.name=h.value,h=p.next();break;case 10:k.lowerLeftCorner=_(h),h=p.next();break;case 11:k.upperRightCorner=_(h),h=p.next();break;case 12:k.center=_(h),h=p.next();break;case 13:k.snapBasePoint=_(h),h=p.next();break;case 14:k.snapSpacing=_(h),h=p.next();break;case 15:k.gridSpacing=_(h),h=p.next();break;case 16:k.viewDirectionFromTarget=_(h),h=p.next();break;case 17:k.viewTarget=_(h),h=p.next();break;case 42:k.lensLength=h.value,h=p.next();break;case 43:k.frontClippingPlane=h.value,h=p.next();break;case 44:k.backClippingPlane=h.value,h=p.next();break;case 45:k.viewHeight=h.value,h=p.next();break;case 50:k.snapRotationAngle=h.value,h=p.next();break;case 51:k.viewTwistAngle=h.value,h=p.next();break;case 79:k.orthographicType=h.value,h=p.next();break;case 110:k.ucsOrigin=_(h),h=p.next();break;case 111:k.ucsXAxis=_(h),h=p.next();break;case 112:k.ucsYAxis=_(h),h=p.next();break;case 110:k.ucsOrigin=_(h),h=p.next();break;case 281:k.renderMode=h.value,h=p.next();break;case 281:k.defaultLightingType=h.value,h=p.next();break;case 292:k.defaultLightingOn=h.value,h=p.next();break;case 330:k.ownerHandle=h.value,h=p.next();break;case 63:case 421:case 431:k.ambientColor=h.value,h=p.next();break;case 0:h.value==="VPORT"&&(Ge.debug("}"),P.push(k),Ge.debug("ViewPort {"),k={},h=p.next());break;default:qs(h),h=p.next();break}return Ge.debug("}"),P.push(k),P}function D(){const P={};let k={},I=0,Z;for(Ge.debug("LType {"),h=p.next();!fn(h,0,"ENDTAB");)switch(h.code){case 2:k.name=h.value,Z=h.value,h=p.next();break;case 3:k.description=h.value,h=p.next();break;case 73:I=h.value,I>0&&(k.pattern=[]),h=p.next();break;case 40:k.patternLength=h.value,h=p.next();break;case 49:k.pattern.push(h.value),h=p.next();break;case 0:Ge.debug("}"),I>0&&I!==k.pattern.length&&Ge.warn("lengths do not match on LTYPE pattern"),P[Z]=k,k={},Ge.debug("LType {"),h=p.next();break;default:h=p.next()}return Ge.debug("}"),P[Z]=k,P}function S(){const P={};let k={},I;for(Ge.debug("Layer {"),h=p.next();!fn(h,0,"ENDTAB");)switch(h.code){case 2:k.name=h.value,I=h.value,h=p.next();break;case 62:k.visible=h.value>=0,k.colorIndex=Math.abs(h.value),k.color=jS(k.colorIndex),h=p.next();break;case 70:k.frozen=(h.value&1)!=0||(h.value&2)!=0,h=p.next();break;case 0:h.value==="LAYER"&&(Ge.debug("}"),P[I]=k,Ge.debug("Layer {"),k={},I=void 0,h=p.next());break;default:qs(h),h=p.next();break}return Ge.debug("}"),P[I]=k,P}const N={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:C},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:D},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:S}};function T(P){const k=[],I=P?"ENDBLK":"ENDSEC";for(P||(h=p.next());;)if(h.code===0){if(h.value===I)break;const Z=g._entityHandlers[h.value];if(Z!=null){Ge.debug(h.value+" {");const se=Z.parseEntity(p,h);h=p.lastReadGroup,Ge.debug("}"),w(se),k.push(se)}else{Ge.warn("Unhandled entity "+h.value),h=p.next();continue}}else h=p.next();return I=="ENDSEC"&&(h=p.next()),k}function _(P){const k={};let I=P.code;if(k.x=P.value,I+=10,P=p.next(),P.code!=I)throw new Error("Expected code for point value to be "+I+" but got "+P.code+".");return k.y=P.value,I+=10,P=p.next(),P.code!=I?(p.rewind(),k):(k.z=P.value,k)}function w(P){if(!P)throw new TypeError("entity cannot be undefined or null");P.handle||(P.handle=i++)}return m(),o}}function fn(a,s,o){return a.code===s&&a.value===o}function qs(a){Ge.debug("unhandled group "+yb(a))}function yb(a){return a.code+":"+a.value}function jS(a){return gb[a]}const El=360,Po=210,Cr=16,LS="#78d8b0",OS=[1,0,0,1,0,0],_S=new Set(["0","PIPE_PRI","F_PIPE_PRI","PIPE_PRIMARY","F_PIPE_PRIMARY","PRIMARY PIPING"]);function PS(a){const s=String(a??"").trim().toUpperCase().replace(/\s+/g," ");return!s||_S.has(s)}function fp(a){return/\barrow\b/i.test(a.replace(/[_-]+/g," "))}function bb(a){return fp(a)}function ba(a){if(!a||typeof a!="object")return null;const s=a;return typeof s.x=="number"&&Number.isFinite(s.x)&&typeof s.y=="number"&&Number.isFinite(s.y)?{x:s.x,y:s.y}:null}function vb(a,s){return{x:a[0]*s.x+a[2]*s.y+a[4],y:a[1]*s.x+a[3]*s.y+a[5]}}function IS(a,s){return[a[0]*s[0]+a[2]*s[1],a[1]*s[0]+a[3]*s[1],a[0]*s[2]+a[2]*s[3],a[1]*s[2]+a[3]*s[3],a[0]*s[4]+a[2]*s[5]+a[4],a[1]*s[4]+a[3]*s[5]+a[5]]}function It(a,s){return typeof a=="number"&&Number.isFinite(a)?a:s}function Io(a){return Array.isArray(a)?a.map(ba).filter(s=>s!==null):[]}function zu(a){const s=ba(a);return s?{...s,z:It(a.z,0)}:null}function qS(a,s,o){const i={},l=(h,m)=>{const u=zu(m);u&&(i[h]=u)},p=(h,m)=>{Array.isArray(m)&&(i[h]=m.flatMap(u=>{const y=zu(u);return y?[y]:[]}))},g=(h,m)=>{typeof m=="number"&&Number.isFinite(m)&&(i[h]=m)};if(a==="LINE")p("vertices",s.vertices);else if(a==="ARC"||a==="CIRCLE")l("center",s.center),g("radius",s.radius),a==="ARC"&&(g("startAngle",s.startAngle),g("endAngle",s.endAngle));else if(a==="LWPOLYLINE"||a==="POLYLINE")Array.isArray(s.vertices)&&(i.vertices=s.vertices.flatMap(h=>{if(!h||typeof h!="object")return[];const m=h;return typeof m.x!="number"||typeof m.y!="number"||!Number.isFinite(m.x)||!Number.isFinite(m.y)?[]:[{x:m.x,y:m.y,z:It(m.z,0),bulge:It(m.bulge,0)}]})),i.closed=s.shape===!0||(Number(s.shape)&1)===1;else if(a==="ELLIPSE")l("center",s.center),l("majorAxisEndPoint",s.majorAxisEndPoint),g("axisRatio",s.axisRatio),g("startAngle",s.startAngle),g("endAngle",s.endAngle);else if(a==="SPLINE"){p("fitPoints",s.fitPoints),p("controlPoints",s.controlPoints);for(const h of["degreeOfSplineCurve","closed","periodic","knots","weights"]){const m=s[h];(typeof m=="number"||typeof m=="boolean"||Array.isArray(m)&&m.every(u=>typeof u=="number"&&Number.isFinite(u)))&&(i[h]=m)}}else return null;return{type:a,transform:[...o],geometry:i}}function Eb(a){return typeof a!="string"?"":a.replace(/\\P/gi," ").replace(/\\[A-Za-z][^;]*;/g,"").replace(/[{}]/g,"").replace(/\s+/g," ").trim()}function MS(a,s,o){return a.layer&&a.layer!=="0"?s.get(a.layer)??o:o}function $S(a){const s=Math.max(0,Math.min(16777215,Math.trunc(a))),o=`#${s.toString(16).padStart(6,"0")}`,i=s>>16&255,l=s>>8&255,p=s&255;return i+l+p<72?"#d5e1e8":o}function US(a){const s=new Map;for(const o of Object.values(a.tables?.layer?.layers??{}))Number.isFinite(o.color)&&s.set(o.name,$S(o.color));return s}function FS(a,s,o,i){const l=i-o;if(!Number.isFinite(l))return[];const p=(l%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,g=Math.max(8,Math.min(96,Math.ceil(Math.abs(p)/(Math.PI/24))));return Array.from({length:g+1},(h,m)=>{const u=o+p*m/g;return{x:a.x+Math.cos(u)*s,y:a.y+Math.sin(u)*s}})}function BS(a,s){if(!Array.isArray(a))return[];const o=a.map(p=>{if(!p||typeof p!="object")return null;const g=p,h=ba(g);return h?{...h,bulge:It(g.bulge,0)}:null}).filter(p=>p!==null);if(o.length<2)return o.map(({x:p,y:g})=>({x:p,y:g}));const i=[{x:o[0].x,y:o[0].y}],l=s?o.length:o.length-1;for(let p=0;p<l;p+=1){const g=o[p],h=o[(p+1)%o.length],m=g.bulge,u=h.x-g.x,y=h.y-g.y,b=Math.hypot(u,y);if(Math.abs(m)<1e-5||b<1e-8){i.push({x:h.x,y:h.y});continue}const E=4*Math.atan(m),x=b*(1-m*m)/(4*m),R={x:(g.x+h.x)/2-y/b*x,y:(g.y+h.y)/2+u/b*x},C=Math.atan2(g.y-R.y,g.x-R.x),D=Math.max(4,Math.min(48,Math.ceil(Math.abs(E)/(Math.PI/16))));for(let S=1;S<=D;S+=1){const N=C+E*S/D;i.push({x:R.x+Math.cos(N)*Math.hypot(g.x-R.x,g.y-R.y),y:R.y+Math.sin(N)*Math.hypot(g.x-R.x,g.y-R.y)})}}return s&&i.length>1&&i.pop(),i}function zS(a,s){const o=ba(a.position)??{x:0,y:0},i=ba(s.position)??{x:0,y:0},l=It(a.xScale,1),p=It(a.yScale,1),g=It(a.rotation,0)*Math.PI/180,h=Math.cos(g),m=Math.sin(g),u=h*l,y=m*l,b=-m*p,E=h*p;return[u,y,b,E,o.x-u*i.x-b*i.y,o.y-y*i.x-E*i.y]}function fs(a,s,o,i,l){const p=s.map(g=>vb(i,g));p.length>=2&&a.paths.push({points:p,closed:o,color:l})}function wb(a,s,o,i,l,p,g=new Set,h=0){if(h>8){p.unsupported.add("nested block depth");return}for(const m of a){if(!m)continue;const u=m,y=String(u.type??"").toUpperCase();if(!y||u.visible===!1)continue;const b=MS(u,o,l);if(y==="INSERT"){const x=String(u.name??""),R=Object.entries(s).find(([N])=>N.toUpperCase()===x.toUpperCase())?.[1];if(!R||g.has(x.toUpperCase())){p.unsupported.add(y);continue}p.nestedInsertCount+=1;const C=IS(i,zS(u,R)),D=u.layer&&u.layer!=="0"?o.get(u.layer)??l:l,S=new Set(g);S.add(x.toUpperCase()),wb(R.entities??[],s,o,C,D,p,S,h+1);continue}const E=qS(y,u,i);if(E&&p.primitives.push(E),y==="LINE"){fs(p,Io(u.vertices),!1,i,b);continue}if(y==="CIRCLE"||y==="ARC"){const x=ba(u.center),R=It(u.radius,0);if(!x||R<=0)continue;const C=y==="ARC"?It(u.startAngle,0):0,D=y==="ARC"?It(u.endAngle,Math.PI*2):Math.PI*2;fs(p,FS(x,R,C,D),y==="CIRCLE",i,b);continue}if(y==="ELLIPSE"){const x=ba(u.center),R=ba(u.majorAxisEndPoint),C=It(u.axisRatio,1);if(!x||!R||C<=0)continue;const D=It(u.startAngle,0),S=It(u.endAngle,Math.PI*2)-D;if(!Number.isFinite(S))continue;const N=(S%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,T=D+N,_=Math.max(12,Math.min(96,Math.ceil((T-D)*24))),w=Array.from({length:_+1},(P,k)=>{const I=D+(T-D)*k/_;return{x:x.x+R.x*Math.cos(I)-R.y*C*Math.sin(I),y:x.y+R.y*Math.cos(I)+R.x*C*Math.sin(I)}});fs(p,w,Math.abs(T-D-Math.PI*2)<.03,i,b);continue}if(y==="LWPOLYLINE"||y==="POLYLINE"){const x=u.shape===!0||(Number(u.shape)&1)===1,R=BS(u.vertices,x);fs(p,R,x,i,b);continue}if(y==="SOLID"||y==="3DFACE"){const x=Io(u.points??u.vertices);fs(p,x,!0,i,b);continue}if(y==="SPLINE"){const x=Io(u.fitPoints).length>=2?Io(u.fitPoints):Io(u.controlPoints);fs(p,x,u.closed===!0,i,b),x.length&&p.unsupported.add("SPLINE approximation");continue}if(y==="TEXT"||y==="MTEXT"||y==="ATTDEF"){const x=Eb(u.text),R=ba(u.startPoint)??ba(u.position);if(!R||!x)continue;const C=vb(i,R),D=Math.max(1,It(u.textHeight,It(u.height,2.5))),S=Math.max(Math.hypot(i[0],i[1]),Math.hypot(i[2],i[3]),.1);p.texts.push({point:C,text:x,height:D*S,rotation:It(u.rotation,0)-Math.atan2(i[1],i[0])*180/Math.PI,color:b});continue}if(y==="POINT"){const x=ba(u.position);x&&(fs(p,[{x:x.x-.5,y:x.y},{x:x.x+.5,y:x.y}],!1,i,b),fs(p,[{x:x.x,y:x.y-.5},{x:x.x,y:x.y+.5}],!1,i,b));continue}p.unsupported.add(y)}}function xb(a){const s=[...a.paths.flatMap(o=>o.points),...a.texts.map(o=>o.point)];return s.length?{minX:Math.min(...s.map(o=>o.x)),minY:Math.min(...s.map(o=>o.y)),maxX:Math.max(...s.map(o=>o.x)),maxY:Math.max(...s.map(o=>o.y))}:null}function YS(a){const s=xb(a);if(!s)return;const o=Math.max(s.maxX-s.minX,1e-6),i=Math.max(s.maxY-s.minY,1e-6),l=Math.min((El-Cr*2)/o,(Po-Cr*2)/i),p=y=>Cr+(y-s.minX)*l+(El-Cr*2-o*l)/2,g=y=>Po-Cr-(y-s.minY)*l-(Po-Cr*2-i*l)/2,h=y=>y.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;"),m=a.paths.map(y=>{const b=y.points.map((E,x)=>`${x?"L":"M"}${p(E.x).toFixed(2)} ${g(E.y).toFixed(2)}`);return y.closed&&b.push("Z"),`<path d="${b.join(" ")}" fill="none" stroke="${y.color}" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>`}).join(""),u=a.texts.map(y=>{const b=p(y.point.x),E=g(y.point.y),x=Math.max(4,Math.min(20,y.height*l));return`<text x="${b.toFixed(2)}" y="${E.toFixed(2)}" fill="${y.color}" font-family="Arial,sans-serif" font-size="${x.toFixed(2)}" transform="rotate(${-y.rotation.toFixed(2)} ${b.toFixed(2)} ${E.toFixed(2)})">${h(y.text)}</text>`}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${El} ${Po}" role="img"><rect width="${El}" height="${Po}" fill="#0d1722"/>${m}${u}</svg>`}function HS(a,s,o){const i=ba(o.position)??{x:0,y:0},l=ba(s.position)??{x:0,y:0},p=It(o.xScale,1),g=It(o.yScale,1),h=It(o.rotation,0)*Math.PI/180,m=Math.cos(h),u=Math.sin(h),y=[{x:a.minX,y:a.minY},{x:a.minX,y:a.maxY},{x:a.maxX,y:a.minY},{x:a.maxX,y:a.maxY}].map(b=>{const E=(b.x-l.x)*p,x=(b.y-l.y)*g;return{x:i.x+m*E-u*x,y:i.y+u*E+m*x}});return{minX:Math.min(...y.map(b=>b.x)),minY:Math.min(...y.map(b=>b.y)),maxX:Math.max(...y.map(b=>b.x)),maxY:Math.max(...y.map(b=>b.y))}}function VS(a){return ba(a.startPoint)??ba(a.position)}function XS(a){return Eb(a.text)}function Sb(a,s){return s.map(o=>o).filter(o=>o.type?.toUpperCase()==="INSERT"&&String(o.name??"").toUpperCase()===a.toUpperCase())}function GS(a){const s=new Map;for(const o of a){const i=String(o.layer??"0").trim()||"0",l=It(o.rotation,0),p=Math.round((l%360+360)%360),g=`${i.toUpperCase()}|${p}`,h=s.get(g);h?h.count+=1:s.set(g,{layer:i,rotationDegrees:p,count:1})}return[...s.values()].sort((o,i)=>o.layer.localeCompare(i.layer)||o.rotationDegrees-i.rotationDegrees)}function KS(a,s,o,i){const l=Sb(a,i),p=l.filter(b=>!PS(b.layer)),g=l.length>0&&p.length===0;if(bb(a))return{labels:[],skippedContextOnly:g};const h=i.map(b=>b).filter(b=>["TEXT","MTEXT","ATTRIB"].includes(String(b.type??"").toUpperCase())).map(b=>({text:XS(b),point:VS(b),height:Math.max(1,It(b.textHeight,It(b.height,2.5)))})).filter(b=>!!(b.text&&b.point)&&!fp(b.text)),m=[];for(const b of p){const E=HS(o,s,b),x=(E.minY+E.maxY)/2,R=Math.max(E.maxX-E.minX,1),C=Math.max(E.maxY-E.minY,1),S=h.map(I=>{const Z=I.point.x-E.maxX,se=Math.abs(I.point.y-x),ee=Math.max(R*8,I.height*40,30),le=Math.max(C*1.1,I.height*7);return{...I,dx:Z,dy:se,score:Math.max(0,Z)+se*1.75,maxGap:ee,maxVertical:le}}).filter(I=>I.dx>=-I.height*.5&&I.dx<=I.maxGap&&I.dy<=I.maxVertical).filter(I=>I.dx>=0).sort((I,Z)=>I.score-Z.score),N=S.length?S:h.map(I=>({...I,dx:I.point.x-E.maxX,dy:Math.abs(I.point.y-x),score:Math.hypot(I.point.x-(E.minX+E.maxX)/2,I.point.y-x),maxGap:Math.max(R*10,I.height*50,40),maxVertical:Math.max(C*2,I.height*10)})).filter(I=>I.score<=Math.max(R*8,C*10,I.height*60)).sort((I,Z)=>I.score-Z.score),T=N[0];if(!T)continue;const _=Math.max(T.height*2,R*.04,.5),w=Math.max(T.height*7,C*.8),P=N.filter(I=>Math.abs(I.point.x-T.point.x)<=_&&Math.abs(I.point.y-T.point.y)<=w).sort((I,Z)=>Z.point.y-I.point.y).slice(0,8),k=[...new Set(P.map(I=>I.text))].join(" · ");k&&m.push({text:k,score:T.score})}const u=new Map;for(const b of m){const E=b.text.toLowerCase().replace(/\s+/g," ").trim(),x=u.get(E);(x===void 0||b.score<x.score)&&u.set(E,b)}const y=p.length>1&&u.size>1;return{labels:y?[]:[...u.values()].sort((b,E)=>b.score-E.score).slice(0,4).map(b=>b.text),skippedContextOnly:g,...y?{ambiguous:!0}:{}}}function Il(a,s){let o;try{o=new mb().parseSync(a)}catch(g){const h=g instanceof Error?g.message:"Unknown DXF parser error";throw new Error(`The overview DXF could not be read: ${h}`)}if(!o?.blocks||!Array.isArray(o.entities))throw new Error("The overview DXF does not contain readable block and model-space data.");const i=US(o),l=new Map(Object.entries(o.blocks).map(([g,h])=>[g.toUpperCase(),h])),p=new Map;for(const g of new Set(s)){const h=l.get(g.toUpperCase());if(!h||g.startsWith("*"))continue;const m={paths:[],texts:[],unsupported:new Set,primitives:[],nestedInsertCount:0};wb(h.entities??[],o.blocks,i,OS,LS,m,new Set([h.name.toUpperCase()]));const u=xb(m),y=m.paths.flatMap(_=>_.points),b=y.length?{minX:Math.min(...y.map(_=>_.x)),minY:Math.min(...y.map(_=>_.y)),maxX:Math.max(...y.map(_=>_.x)),maxY:Math.max(...y.map(_=>_.y))}:null,E=b?b.maxX-b.minX:null,x=b?b.maxY-b.minY:null,R=m.primitives.reduce((_,w)=>(_[w.type]=(_[w.type]??0)+1,_),{}),C=o.header?.$INSUNITS,D={schemaVersion:1,blockName:g,unitsCode:typeof C=="number"&&Number.isInteger(C)?C:null,basePoint:zu(h.position)??{x:0,y:0,z:0},bounds:b,width:E,height:x,aspectRatio:E!==null&&x!==null&&x>0?E/x:null,primitiveCounts:R,primitives:m.primitives,nestedInsertCount:m.nestedInsertCount,unsupportedEntities:[...m.unsupported].sort(),transformPolicy:{allowedRotationsDegrees:null,mirrorAllowed:null,uniformScalingAllowed:null,nonUniformScalingAllowed:null,status:"UNSPECIFIED_REQUIRES_REVIEW"}},S=YS(m),N=GS(Sb(g,o.entities)),T=u?KS(g,h,u,o.entities):{labels:[],skippedContextOnly:!1};p.set(g,{...S?{previewSvg:S}:{},geometryDescriptor:D,nearbyLabels:T.labels,...T.skippedContextOnly?{labelMatchSkipped:!0}:{},...T.ambiguous?{labelMatchAmbiguous:!0}:{},...N.length?{sourcePlacements:N}:{}})}return p}const it=(a,s)=>a.find(o=>o.code===s)?.value.trim()??"",ia=a=>it(a,0).toUpperCase(),Nr=a=>it(a,ia(a)==="DIMSTYLE"?105:5).toUpperCase(),Mn=(...a)=>{const s=[];for(let o=0;o<a.length;o+=2)s.push({code:Number(a[o]),value:String(a[o+1])});return s},$m=a=>a>=330&&a<=369||a>=390&&a<=399||a===480||a===481||a===1005,wu=a=>["DICTIONARY","ACDBDICTIONARYWDFLT"].includes(ia(a)),WS=new Set(["BLOCK","ENDBLK","LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE","VERTEX","SEQEND","SPLINE","POINT","SOLID","TRACE","3DFACE","TEXT","MTEXT","ATTDEF","ATTRIB","INSERT","HATCH","DIMENSION","LEADER","TOLERANCE"]),ZS=["VPORT","LTYPE","LAYER","STYLE","VIEW","UCS","APPID","DIMSTYLE","BLOCK_RECORD"];function $n(a){const s=[];for(const o of a){if(o.code===0&&s.push([]),!s.length)throw new Error("Invalid DXF record boundary.");s[s.length-1].push(o)}return s}function QS(a){let s=0;return a.filter(o=>o.code===102&&o.value.trim()==="{BLKREFS"?(s=1,!1):s?(o.code===102&&o.value.trim().startsWith("{")&&s++,o.code===102&&o.value.trim()==="}"&&s--,!1):!0)}class Tb{sections=new Map;tables=new Map;blocks=new Map;modelRecords;text;objects;recordsByHandle=new Map;blockForRecord=new Map;tableForRecord=new Map;tableHandles=new Set;maxHandle=0;constructor(s){const o=Ir(s);let i="";for(let y=0;y<o.content.length;y+=16384)i+=String.fromCharCode(...o.content.subarray(y,y+16384));this.text=i;const l=i.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;l.length&&l.at(-1)==="";)l.pop();if(l.length%2)throw new Error("DXF has an incomplete group-code/value pair.");const p=[];for(let y=0;y<l.length;y+=2){const b=Number(l[y].trim());if(!Number.isInteger(b))throw new Error("DXF has an invalid group code.");p.push({code:b,value:l[y+1]})}let g="";for(let y=0;y<p.length;y++){const b=p[y];if(b.code===0&&b.value.trim()==="SECTION"){if(g||p[y+1]?.code!==2)throw new Error("Invalid DXF section.");if(g=p[++y].value.trim().toUpperCase(),this.sections.has(g))throw new Error("Duplicate DXF section.");this.sections.set(g,[])}else b.code===0&&b.value.trim()==="ENDSEC"?g="":g&&this.sections.get(g).push(b)}if(g||!this.sections.has("BLOCKS")||!this.sections.has("ENTITIES"))throw new Error("A complete ASCII source DXF with BLOCKS and ENTITIES is required.");const h=$n(this.sections.get("TABLES")??[]);let m;for(const y of h)if(ia(y)==="TABLE")m={name:it(y,2).toUpperCase(),header:y,records:[]},this.tables.set(m.name,m),this.tableHandles.add(Nr(y));else if(ia(y)==="ENDTAB")m=void 0;else if(m){const b=ia(y)==="BLOCK_RECORD"?QS(y):y;m.records.push(b),this.tableForRecord.set(b,m)}let u;for(const y of $n(this.sections.get("BLOCKS"))){if(ia(y)==="BLOCK"){const b=it(y,2);if(u={name:b,records:[]},this.blocks.has(b.toUpperCase()))throw new Error("Duplicate source block definition.");this.blocks.set(b.toUpperCase(),u)}if(!u)throw new Error("DXF block definition is incomplete.");u.records.push(y),this.blockForRecord.set(y,u.name.toUpperCase()),ia(y)==="ENDBLK"&&(u=void 0)}if(u)throw new Error("DXF block definition has no ENDBLK.");this.modelRecords=$n(this.sections.get("ENTITIES")),this.objects=$n(this.sections.get("OBJECTS")??[]);for(const y of[...[...this.tables.values()].flatMap(b=>b.records),...[...this.blocks.values()].flatMap(b=>b.records),...this.modelRecords,...this.objects]){const b=Nr(y);if(b){if(this.recordsByHandle.has(b))throw new Error("Duplicate DXF entity handle.");this.recordsByHandle.set(b,y),this.maxHandle=Math.max(this.maxHandle,parseInt(b,16)||0)}}for(const y of this.tableHandles)this.maxHandle=Math.max(this.maxHandle,parseInt(y,16)||0)}placements(){const s=new Map;for(const o of this.modelRecords){if(ia(o)!=="INSERT"||it(o,67)==="1"||it(o,410)&&it(o,410).toUpperCase()!=="MODEL")continue;const i=it(o,2);if(!i||i.startsWith("*"))continue;const l=this.blocks.get(i.toUpperCase())?.name??i,p=s.get(l)??new Set;p.add(it(o,8)||"0"),s.set(l,p)}return s}layerDetails(s){const o=this.tables.get("LAYER")?.records.find(i=>it(i,2).toUpperCase()===s.toUpperCase());return o?`color=${Math.abs(Number(it(o,62)||"7"))};lineweight=${it(o,370)||"-3"};linetype=${it(o,6)||"CONTINUOUS"}`:null}nativeAssetInfo(){const s=this.modelRecords.filter(l=>!["ATTRIB","VERTEX","SEQEND"].includes(ia(l))),o=s.length?Nr(s[0]):"";if(!s.length||!o)throw new Error("Native symbol DXF has no verifiable model-space geometry.");const i=this.tables.get("STYLE")?.records.flatMap(l=>[it(l,3),it(l,4)].filter(Boolean).flatMap(p=>/\.shx$/i.test(p)?[p]:p.includes(".")?[]:[`${p}.shx`]))??[];return{entityCount:s.length,firstHandle:o,requiredShapeFonts:[...new Set(i)]}}isolate(s){let o=this.maxHandle+1;const i=()=>(o++).toString(16).toUpperCase(),l=new Set,p=new Set,g=new Set,h=new Set,m=[],u=(F,X=!0)=>{wu(F)&&X&&!g.has(F)&&(g.add(F),l.has(F)&&m.push(F)),l.has(F)||(l.add(F),m.push(F));const ie=this.tableForRecord.get(F);ie&&h.add(ie)},y=F=>{const X=F.toUpperCase();if(p.has(X))return;const ie=this.blocks.get(X);if(!ie||X.startsWith("*MODEL_SPACE")||X.startsWith("*PAPER_SPACE"))throw new Error(`Missing or external block dependency: ${F}`);if(Number(it(ie.records[0],70))&28)throw new Error("External-reference blocks require native AutoCAD extraction.");p.add(X),ie.records.forEach(we=>{if(!WS.has(ia(we)))throw new Error(`Unsupported native block entity: ${ia(we)}`);u(we)});const ge=this.tables.get("BLOCK_RECORD")?.records.find(we=>it(we,2).toUpperCase()===X);if(!ge)throw new Error("Source block has no BLOCK_RECORD; save a modern ASCII DXF first.");u(ge)},b=(F,X,ie=!0)=>{const ge=this.tables.get(F)?.records.find(we=>it(we,2).toUpperCase()===X.toUpperCase());if(ge)F==="BLOCK_RECORD"?y(it(ge,2)):u(ge);else if(ie)throw new Error(`Missing ${F} dependency: ${X}`)};y(s);for(const F of ZS){const X=this.tables.get(F);if(!X)throw new Error(`Native symbol DXF is missing required ${F} table after safe repair.`);if(h.add(X),F==="VPORT"){const ie=X.records.find(ge=>it(ge,2).toUpperCase()==="*ACTIVE");if(!ie)throw new Error("Native symbol DXF has no active *ACTIVE VPORT record after safe repair.");u(ie)}}b("LAYER","0");for(const F of["CONTINUOUS","BYLAYER","BYBLOCK"])b("LTYPE",F,!1);for(b("STYLE","STANDARD",!1),b("APPID","ACAD",!1),b("DIMSTYLE","STANDARD",!1);m.length;){const F=m.shift(),X=ia(F);if(/IMAGEDEF|UNDERLAY|PDFDEFINITION|DGNDEFINITION|DWFDEFINITION|PROXY/.test(X))throw new Error(`External/proxy dependency ${X} requires native AutoCAD extraction.`);(X==="INSERT"||X==="DIMENSION")&&y(it(F,2)),X==="DIMENSION"&&b("DIMSTYLE",it(F,3)||"STANDARD");for(let ie=0;ie<F.length;ie++){const ge=F[ie];if(ge.code===8&&b("LAYER",ge.value.trim()||"0"),ge.code===6&&!["BYLAYER","BYBLOCK",""].includes(ge.value.trim().toUpperCase())&&b("LTYPE",ge.value.trim()),ge.code===7&&ge.value.trim()&&b("STYLE",ge.value.trim()),ge.code===1001&&b("APPID",ge.value.trim()),!$m(ge.code)||!ge.value.trim()||ge.value.trim()==="0"||wu(F)&&[350,360].includes(ge.code)&&F[ie-1]?.code===3&&!g.has(F))continue;const we=ge.value.trim().toUpperCase();if(this.tableHandles.has(we))continue;const Me=this.recordsByHandle.get(we);if(!Me)throw new Error(`Unresolved native DXF handle reference (${ge.code}).`);const qe=this.blockForRecord.get(Me);if(qe&&!p.has(qe))throw new Error("Block metadata references unrelated drawing geometry; use native AutoCAD extraction.");if(this.modelRecords.includes(Me))throw new Error("Block metadata references source model-space geometry; use native AutoCAD extraction.");ia(Me)==="BLOCK_RECORD"?y(it(Me,2)):u(Me,ge.code!==330)}}const E=new Set,x=new Set,R=F=>{if(E.has(F))throw new Error("Circular block references cannot be isolated safely.");if(!x.has(F)){E.add(F);for(const X of this.blocks.get(F).records)["INSERT","DIMENSION"].includes(ia(X))&&R(it(X,2).toUpperCase());E.delete(F),x.add(F)}};if(R(s.toUpperCase()),[...l].some(F=>/BLOCK.*(?:PARAMETER|ACTION)|BLOCKREPRESENTATION|EVALUATION_GRAPH/.test(ia(F))||F.some(X=>X.code===3&&/ACAD_ENHANCEDBLOCK/i.test(X.value))))throw new Error("Dynamic blocks require native AutoCAD extraction; their behavior is not approximated.");const C=this.tables.get("BLOCK_RECORD");h.add(C);const D=this.blocks.get(s.toUpperCase()),S=C.records.find(F=>it(F,2).toUpperCase()===s.toUpperCase()),N=i(),T=(F,X)=>Mn(0,"BLOCK_RECORD",5,X,330,Nr(C.header),100,"AcDbSymbolTableRecord",100,"AcDbBlockTableRecord",2,F,70,0,280,1,281,0),_=F=>F.map(X=>[2,3].includes(X.code)?{...X,value:"*Model_Space"}:ia(F)==="BLOCK"&&[10,20,30,70].includes(X.code)?{...X,value:"0"}:X),w=[];for(const F of[...h].sort((X,ie)=>X.name==="BLOCK_RECORD"?1:ie.name==="BLOCK_RECORD"?-1:0)){const X=F.records.filter(ie=>l.has(ie)).map(ie=>ie===S?_(ie):ie);F.name==="BLOCK_RECORD"&&X.push(T("*Paper_Space",N)),w.push(...Mn(0,"TABLE",2,F.name,5,Nr(F.header),330,"0",100,"AcDbSymbolTable",70,X.length),...F.name==="DIMSTYLE"?Mn(100,"AcDbDimStyleTable"):[],...X.flat(),...Mn(0,"ENDTAB"))}const P=[..._(D.records[0]),...D.records.at(-1),...Mn(0,"BLOCK",5,i(),330,N,100,"AcDbEntity",8,"0",100,"AcDbBlockBegin",2,"*Paper_Space",70,0,10,0,20,0,30,0,3,"*Paper_Space",1,"",0,"ENDBLK",5,i(),330,N,100,"AcDbEntity",8,"0",100,"AcDbBlockEnd")];for(const F of p)F!==s.toUpperCase()&&P.push(...this.blocks.get(F).records.flat());const k=this.objects.filter(F=>l.has(F)).map(F=>!wu(F)||g.has(F)?F:F.filter((X,ie)=>X.code===3&&[350,360].includes(F[ie+1]?.code)?l.has(this.recordsByHandle.get(F[ie+1].value.trim().toUpperCase())):[350,360].includes(X.code)&&F[ie-1]?.code===3?l.has(this.recordsByHandle.get(X.value.trim().toUpperCase())):!0)).flat(),I=D.records.slice(1,-1).flat();if(!I.length)throw new Error("The selected block contains no native entities.");const Z=new Set(["$ACADVER","$DWGCODEPAGE","$INSUNITS","$MEASUREMENT","$LTSCALE","$CELTSCALE","$PSLTSCALE"]),se=[];let ee=!1;for(const F of this.sections.get("HEADER")??[])F.code===9&&(ee=Z.has(F.value.trim())),ee&&se.push(F);se.push(...Mn(9,"$HANDSEED",5,i(),9,"$INSBASE",10,it(D.records[0],10)||"0",20,it(D.records[0],20)||"0",30,it(D.records[0],30)||"0"));const le=new Set([...l].map(F=>ia(F))),Te=$n(this.sections.get("CLASSES")??[]).filter(F=>le.has(it(F,1).toUpperCase())).flat(),he=(F,X)=>[...Mn(0,"SECTION",2,F),...X,...Mn(0,"ENDSEC")],de=[...he("HEADER",se),...Te.length?he("CLASSES",Te):[],...he("TABLES",w),...he("BLOCKS",P),...he("ENTITIES",I),...k.length?he("OBJECTS",k):[],...Mn(0,"EOF")],Y=new Set;for(const F of[...$n(w),...$n(P),...$n(I),...$n(k)]){const X=Nr(F);if(X){if(Y.has(X))throw new Error("Duplicate handle in isolated DXF.");Y.add(X)}}for(const F of de)if($m(F.code)&&F.value.trim()&&F.value.trim()!=="0"&&!Y.has(F.value.trim().toUpperCase()))throw new Error(`A required DXF reference was not retained (${F.code}).`);const Q=de.map(F=>`${F.code}\r
${F.value}\r
`).join(""),be=new Uint8Array(Q.length);for(let F=0;F<Q.length;F++)be[F]=Q.charCodeAt(F);const Ae=Ir(be).content;let O="";for(let F=0;F<Ae.length;F+=16384)O+=String.fromCharCode(...Ae.subarray(F,F+16384));cp(O);const J=new mb().parseSync(O);if(!J?.entities.length||!J.blocks?.["*Model_Space"])throw new Error("The isolated block DXF failed its structural round-trip validation.");return Ae}}const xu=(a,s)=>a.item.fields.find(o=>o.label===s)?.value.trim()??"";function Um(a,s){const i=a.reviewCandidates.filter(h=>h.sourceGroup===s).filter(h=>h.item.category==="symbol"),p=[...a.companyItems,...Object.values(a.projects).flatMap(h=>h.items)].filter(h=>h.category==="symbol"&&h.fields.some(m=>m.label==="Source drawing ID"&&m.value===s)).filter(h=>h.reviewStatus==="reviewed"),g=[...new Set(p.flatMap(h=>h.fields.filter(m=>m.label==="Target CAD layer"||m.label==="Source insert layer(s)").map(m=>m.value).filter(Boolean)))];return{pending:i.filter(h=>h.status==="needs-review").length,approved:p.length,dismissed:i.filter(h=>h.status==="dismissed").length,layers:g}}function JS(a,s,o,i=new Set){if(a.format!=="DXF"||a.category!=="company-standard")throw new Error("Select a saved DXF classified as a Legends Library standard. DWG still uses the AutoCAD extractor.");const l=new Tb(s),p=l.placements(),g=[...p].filter(([,D])=>D.size===1&&!!$u[[...D][0].trim().toUpperCase()]),h=Il(l.text,g.map(([D])=>D)),m=[],u=[],y=new Map,b=[];let E=0;const x=new Set,R=[...o.reviewCandidates],C=(D,S,N,T=[])=>{const _=`extract-${a.id}-${D}-${S}`;return{id:_,proposedScope:"company",sourceGroup:a.id,status:"needs-review",item:{id:_,category:D==="BLOCK"?"symbol":"layer",name:`${D==="BLOCK"?"Block":"LAYER"} · ${S}`,summary:"Extracted from the saved DXF on this device. Only verified placement layers can be batch-approved.",sourceFile:a.label,sourceKind:"extracted-dwg",scope:"company",reviewStatus:"needs-review",canPromote:!1,fields:[{label:D==="BLOCK"?"Block name":"CAD name",value:S},{label:"Source drawing ID",value:a.id},{label:"Source discipline",value:a.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:N},...T]}}};for(const[D,S]of p){const N=[...S][0];if(S.size!==1||!$u[N.trim().toUpperCase()]){b.push({blockName:D,reason:S.size>1?"Mixed placement layers; review required.":"Internal or unsupported placement layer."});continue}const T=R.find(k=>k.sourceGroup===a.id&&xu(k,"Block name").toUpperCase()===D.toUpperCase()),_=[...o.companyItems,...Object.values(o.projects).flatMap(k=>k.items)].some(k=>k.fields.some(I=>I.label==="Source drawing ID"&&I.value===a.id)&&k.fields.some(I=>I.label==="Block name"&&I.value.trim().toUpperCase()===D.toUpperCase()));if(T&&T.status!=="needs-review"||_){E++;continue}if(!l.layerDetails(N)){b.push({blockName:D,reason:"The placement layer has no LAYER table record."});continue}const P=T&&xu(T,"Block asset ID")||`${a.id}|${D}`;try{if(!i.has(P)){const I=l.isolate(D),Z=h.get(D);m.push({id:P,sourceId:a.id,blockName:D,content:I,format:"DXF",previewSvg:Z?.previewSvg??null,nearbyLabels:Z?.nearbyLabels??[],labelMatchAmbiguous:Z?.labelMatchAmbiguous??!1,labelMatchSkipped:Z?.labelMatchSkipped??!0,sourcePlacements:Z?.sourcePlacements??[],...Z?.geometryDescriptor?{geometryDescriptor:Z.geometryDescriptor}:{}})}const k=C("BLOCK",D,`sourceLayer=${N};nativeIsolatedDxf=true`,[{label:"Block asset ID",value:P},{label:"Fallback category",value:""},{label:"Source insert layer(s)",value:N}]);if(T){const I=new Set(["Extracted details","Source insert layer(s)","Block asset ID"]);y.set(T.id,{...T,item:{...T.item,fields:[...T.item.fields.filter(Z=>!I.has(Z.label)),...k.item.fields.filter(Z=>I.has(Z.label))]}})}else u.push(k);x.add(N)}catch(k){b.push({blockName:D,reason:k instanceof Error?k.message:"Native DXF isolation failed."})}}for(const D of x){const S=R.some(T=>T.sourceGroup===a.id&&T.item.category==="layer"&&xu(T,"CAD name").toUpperCase()===D.toUpperCase()),N=o.companyItems.some(T=>T.category==="layer"&&T.fields.some(_=>_.label==="Source drawing ID"&&_.value===a.id)&&T.fields.some(_=>_.label==="CAD name"&&_.value.toUpperCase()===D.toUpperCase()));!S&&!N&&u.push(C("LAYER",D,l.layerDetails(D)))}return{library:{...o,reviewCandidates:[...o.reviewCandidates.map(D=>y.get(D.id)??D),...u]},assets:m,skipped:b,preserved:E,prepared:x.size?m.length:0,eligibleSymbols:g.length,addedSymbols:u.filter(D=>D.item.category==="symbol").length,updatedSymbols:y.size,detectedLayers:[...new Set([...p.values()].flatMap(D=>[...D]))]}}const eT=40*1024*1024,tT=40*1024*1024,Su=48,aT=15,nT=32;function sT(a){const s=[];let o=0;for(;o<a.length;){const i=a[o];if(/\s/.test(i)){o+=1;continue}if(i==="("||i===")"){s.push(i),o+=1;continue}if(i==="."&&(o+1===a.length||/[\s)]/.test(a[o+1]))){s.push(i),o+=1;continue}if(i==='"'){let p="";for(o+=1;o<a.length&&a[o]!=='"';)if(a[o]==="\\"&&o+1<a.length){o+=1;const g=a[o];p+=g==="n"?`
`:g==="r"?"\r":g,o+=1}else p+=a[o],o+=1;if(a[o]!=='"')throw new Error("The AutoCAD geometry log contains an unfinished string value.");o+=1,s.push(JSON.stringify(p));continue}const l=o;for(;o<a.length&&!/[\s()]/.test(a[o]);)o+=1;if(l===o)throw new Error("The AutoCAD geometry log contains an invalid value.");s.push(a.slice(l,o))}return s}function Yu(a,s,o=0){if(o>40)throw new Error("The AutoCAD geometry log nesting is too deep to read safely.");const i=a[s.index++];if(i===void 0)throw new Error("The AutoCAD geometry log contains an incomplete geometry record.");if(i!=="("){if(i===")")throw new Error("The AutoCAD geometry log contains an unexpected closing bracket.");return i.startsWith('"')?JSON.parse(i):/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(i)?Number(i):i.toLowerCase()==="nil"?null:i.toUpperCase()==="T"?!0:i}const l=[];for(;s.index<a.length&&a[s.index]!==")";){if(a[s.index]==="."){if(l.length!==1)throw new Error("The AutoCAD geometry log contains a malformed pair.");s.index+=1;const p=Yu(a,s,o+1);if(a[s.index++]!==")")throw new Error("The AutoCAD geometry log contains a malformed pair.");return{kind:"pair",first:l[0],rest:p}}l.push(Yu(a,s,o+1))}if(a[s.index++]!==")")throw new Error("The AutoCAD geometry log contains an incomplete list.");return l}function Cl(a){const s=sT(a),o={index:0},i=Yu(s,o);if(o.index!==s.length)throw new Error("The AutoCAD geometry log has trailing geometry data.");return i}function Nl(a,s){if(Array.isArray(a))for(const o of a){if(o&&typeof o=="object"&&!Array.isArray(o)&&"kind"in o&&String(o.first)===s)return o.rest;if(Array.isArray(o)&&o.length>=2&&o[0]===s)return o.length===2?o[1]:o.slice(1)}}function rT(a,s){return!Array.isArray(a)||a.length<s||a.slice(0,s).some(o=>typeof o!="number"||!Number.isFinite(o))?null:a.slice(0,s)}function oT(a){if(!Array.isArray(a))return{};const s={};for(const o of a){if(o&&typeof o=="object"&&!Array.isArray(o)&&"kind"in o){const i=o;typeof i.first=="string"&&typeof i.rest=="number"&&Number.isFinite(i.rest)&&(s[i.first]=i.rest);continue}!Array.isArray(o)||typeof o[0]!="string"||typeof o[1]!="number"||!Number.isFinite(o[1])||(s[o[0]]=o[1])}return s}function iT(a){const s=Cl(a);return Array.isArray(s)?s.filter(o=>typeof o=="string"):[]}function lT(a){if(new TextEncoder().encode(a).byteLength>eT)throw new Error("The AutoCAD geometry log is over the 40 MB local review limit.");const s=new Map,o=[],i=new Set;for(const l of a.split(/\r?\n/)){if(l.startsWith("SCAN|")){const C=l.split("|");C[1]&&Number.isInteger(Number(C[2]))&&i.add(`${C[1]}:${Number(C[2])}`);continue}if(l.startsWith("ENTITY|")){const C=l.indexOf("|NORMALIZED=");if(C<0)continue;const D=l.slice(0,C).split("|"),S=D[3]?.trim(),N=D[4]?.trim().toUpperCase();if(!S||!N)continue;const T=Cl(l.slice(C+12));s.set(S,{handle:S,type:N,descriptor:T});continue}if(!l.startsWith("CANDIDATE|"))continue;const p=l.split("|"),g=C=>p.find(D=>D.startsWith(`${C}=`))?.slice(C.length+1),h=p[3]?.trim(),m=p[1]?.trim(),u=Number(p[2]),y=g("SOURCE_HANDLES"),b=g("BOUNDS"),E=g("PRIMITIVE_COUNTS");if(!h||!m||!Number.isInteger(u)||!y)continue;const x=b?Cl(b):null,R=rT(x,4);o.push({id:h,sourceAlias:m,page:u,handles:iT(y),bounds:R,primitiveCounts:E?oT(Cl(E)):{}})}if(s.size===0||i.size===0)throw new Error("This log has no readable geometry scans. Use AUTOCAD_GEOMETRY_SCAN.log from a current runner.");return{entities:s,candidates:o,pages:i.size}}function Hu(a){return typeof a=="number"&&Number.isFinite(a)?[a]:Array.isArray(a)?a.flatMap(Hu):[]}function Ab(a){return Array.isArray(a)?a.flatMap(s=>{if(s&&typeof s=="object"&&!Array.isArray(s)&&"kind"in s){const o=s;return typeof o.first=="number"&&Number.isFinite(o.first)?[{code:o.first,values:Hu(o.rest)}]:[]}return Array.isArray(s)&&typeof s[0]=="number"?[{code:s[0],values:s.slice(1).flatMap(Hu)}]:[]}):[]}function cT(a){return Ab(Nl(a,"properties"))}function kr(a,s,o=0){const i=a.filter(l=>l.code===s)[o];return!i||i.values.length<2?null:{x:i.values[0],y:i.values[1]}}function Vu(a,s,o){if(!Number.isFinite(o)||Math.abs(o)<1e-5)return[a,s];const i=s.x-a.x,l=s.y-a.y,p=Math.hypot(i,l);if(p<1e-9)return[a,s];const g=4*Math.atan(o),h=p*(1-o*o)/(4*o),m={x:(a.x+s.x)/2-l/p*h,y:(a.y+s.y)/2+i/p*h},u=Math.atan2(a.y-m.y,a.x-m.x),y=Math.hypot(a.x-m.x,a.y-m.y),b=Math.max(4,Math.min(32,Math.ceil(Math.abs(g)/(Math.PI/12))));return Array.from({length:b+1},(E,x)=>{const R=u+g*x/b;return{x:m.x+Math.cos(R)*y,y:m.y+Math.sin(R)*y}})}function Db(a){const s=cT(a.descriptor),o=a.type;if(o==="LINE"){const i=kr(s,10),l=kr(s,11);return i&&l?[i,l]:[]}if(o==="CIRCLE"||o==="ARC"){const i=kr(s,10),l=s.find(b=>b.code===40)?.values[0]??0;if(!i||l<=0)return[];const p=s.find(b=>b.code===50)?.values[0]??0,g=s.find(b=>b.code===51)?.values[0]??Math.PI*2,h=b=>Math.abs(b)>Math.PI*2+.1?b*Math.PI/180:b,m=o==="CIRCLE"?0:h(p);let u=o==="CIRCLE"?Math.PI*2:h(g)-m;for(;u<=0;)u+=Math.PI*2;const y=Math.max(12,Math.min(48,Math.ceil(u/(Math.PI/12))));return Array.from({length:y+1},(b,E)=>{const x=m+u*E/y;return{x:i.x+Math.cos(x)*l,y:i.y+Math.sin(x)*l}})}if(o==="LWPOLYLINE"){const i=[];let l=null;for(const m of s)m.code===10&&m.values.length>=2?(l={point:{x:m.values[0],y:m.values[1]},bulge:0},i.push(l)):m.code===42&&l&&(l.bulge=m.values[0]??0);const p=Nl(a.descriptor,"closed")===!0;if(i.length<2)return i.map(m=>m.point);const g=[],h=p?i.length:i.length-1;for(let m=0;m<h;m+=1){const u=i[m],y=i[(m+1)%i.length],b=Vu(u.point,y.point,u.bulge);g.push(...m?b.slice(1):b)}return p||g.push(i[i.length-1].point),g}if(o==="POLYLINE"){const i=Nl(a.descriptor,"polylineVertices");if(!Array.isArray(i))return[];const l=i.flatMap(m=>{const u=Ab(m),y=kr(u,10);return y?[{point:y,bulge:u.find(b=>b.code===42)?.values[0]??0}]:[]});if(l.length<2)return l.map(m=>m.point);const p=Nl(a.descriptor,"closed")===!0,g=p?l.length:l.length-1,h=[];for(let m=0;m<g;m+=1){const u=l[m],y=l[(m+1)%l.length],b=Vu(u.point,y.point,u.bulge);h.push(...m?b.slice(1):b)}return p||h.push(l[l.length-1].point),h}if(o==="ELLIPSE"){const i=kr(s,10),l=kr(s,11),p=s.find(y=>y.code===40)?.values[0]??0;if(!i||!l||p<=0)return[];const g=s.find(y=>y.code===41)?.values[0]??0;let m=(s.find(y=>y.code===42)?.values[0]??Math.PI*2)-g;for(;m<=0;)m+=Math.PI*2;if(!Number.isFinite(m)||m>Math.PI*2+1e-6)return[];const u=Math.max(12,Math.min(96,Math.ceil(m/(Math.PI/24))));return Array.from({length:u+1},(y,b)=>{const E=g+m*b/u,x=Math.cos(E),R=Math.sin(E)*p;return{x:i.x+l.x*x-l.y*R,y:i.y+l.y*x+l.x*R}})}return o==="SPLINE"?s.filter(i=>i.code===11&&i.values.length>=2).map(i=>({x:i.values[0],y:i.values[1]})):[]}function dT(a){const s=a.geometry,o=a.transform,i=p=>({x:o[0]*p.x+o[2]*p.y+o[4],y:o[1]*p.x+o[3]*p.y+o[5]}),l=s.vertices??s.fitPoints??s.controlPoints;if((a.type==="LINE"||a.type==="SPLINE")&&l?.length)return l.map(i);if(a.type==="LWPOLYLINE"||a.type==="POLYLINE"){if(!l?.length)return[];const p=s.closed===!0,g=[],h=p?l.length:l.length-1;for(let m=0;m<h;m+=1){const u=l[m],y=l[(m+1)%l.length],b=Vu(u,y,u.bulge??0).map(i);g.push(...m?b.slice(1):b)}return p||g.push(i(l[l.length-1])),g}if(a.type==="CIRCLE"||a.type==="ARC"){const p=s.center,g=Number(s.radius);if(!p||!Number.isFinite(g)||g<=0)return[];const h=a.type==="ARC"?Number(s.startAngle??0):0;let m=a.type==="ARC"?Number(s.endAngle??h+Math.PI*2)-h:Math.PI*2;for(;m<=0;)m+=Math.PI*2;const u=Math.max(12,Math.min(48,Math.ceil(m/(Math.PI/12))));return Array.from({length:u+1},(y,b)=>{const E=h+m*b/u;return i({x:p.x+Math.cos(E)*g,y:p.y+Math.sin(E)*g})})}if(a.type==="ELLIPSE"){const p=s.center,g=s.majorAxisEndPoint,h=Number(s.axisRatio);if(!p||!g||!Number.isFinite(h)||h<=0)return[];const m=Number(s.startAngle??0);let y=Number(s.endAngle??Math.PI*2)-m;for(;y<=0;)y+=Math.PI*2;if(!Number.isFinite(y)||y>Math.PI*2+1e-6)return[];const b=Math.max(12,Math.min(96,Math.ceil(y/(Math.PI/24))));return Array.from({length:b+1},(E,x)=>{const R=m+y*x/b;return i({x:p.x+g.x*Math.cos(R)-g.y*h*Math.sin(R),y:p.y+g.y*Math.cos(R)+g.x*h*Math.sin(R)})})}return[]}function uT(a){return a.length<=Su?a:Array.from({length:Su},(s,o)=>a[Math.floor(o*(a.length-1)/(Su-1))])}function Fm(a){const s=uT(a.filter(l=>Number.isFinite(l.x)&&Number.isFinite(l.y)));if(s.length<2)return[];const o={x:s.reduce((l,p)=>l+p.x,0)/s.length,y:s.reduce((l,p)=>l+p.y,0)/s.length},i=Math.sqrt(s.reduce((l,p)=>l+(p.x-o.x)**2+(p.y-o.y)**2,0)/s.length);return!Number.isFinite(i)||i<1e-9?[]:s.map(l=>({x:(l.x-o.x)/i,y:(l.y-o.y)/i}))}function Bm(a){return a.length?{minX:Math.min(...a.map(s=>s.x)),minY:Math.min(...a.map(s=>s.y)),maxX:Math.max(...a.map(s=>s.x)),maxY:Math.max(...a.map(s=>s.y))}:null}function zm(a){return a?Math.hypot(a.maxX-a.minX,a.maxY-a.minY):0}function Ym(a,s){const o=new Set([...Object.keys(a),...Object.keys(s)]);let i=0,l=0;for(const p of o){const g=a[p]??0,h=s[p]??0;i+=Math.max(g,h),l+=Math.abs(g-h)}return i===0?0:Math.max(0,1-l/(2*i))}function Hm(a,s){if(!a||!s)return 0;const o=Math.max(a.maxX-a.minX,1e-9),i=Math.max(a.maxY-a.minY,1e-9),l=Math.max(s.maxX-s.minX,1e-9),p=Math.max(s.maxY-s.minY,1e-9),g=Math.max(o/i,i/o),h=Math.max(l/p,p/l);return Math.exp(-Math.abs(Math.log(g/h)))}function Vm(a,s){let o=0;for(const i of a){let l=Number.POSITIVE_INFINITY;for(const p of s){const g=(i.x-p.x)**2+(i.y-p.y)**2;g<l&&(l=g)}o+=l}return o/a.length}function pT(a,s){let o=Number.POSITIVE_INFINITY,i=0;for(let l=0;l<360;l+=aT){const p=l*Math.PI/180,g=Math.cos(p),h=Math.sin(p),m=s.map(y=>({x:g*y.x-h*y.y,y:h*y.x+g*y.y})),u=Math.sqrt((Vm(a,m)+Vm(m,a))/2);u<o&&(o=u,i=l)}return{residual:o,rotation:i}}function fT(a,s){return a.handles.flatMap(o=>{const i=s.get(o);return i?Db(i):[]})}function hT(a,s){const o=new Set;for(const i of a.handles){const l=s.get(i);(!l||Db(l).length<2)&&o.add(l?.type??"MISSING_ENTITY")}return[...o].sort()}function Xm(a){return a.primitives.flatMap(dT)}function gT(a,s){if(new TextEncoder().encode(a).byteLength>tT)throw new Error("The CAD block geometry index is over the 40 MB local review limit.");let o;try{o=JSON.parse(a)}catch{throw new Error("The selected file is not valid CAD_BLOCK_GEOMETRY_INDEX.json.")}if(!o||typeof o!="object"||o.localOnly!==!0||!Array.isArray(o.blocks))throw new Error("This is not a local-only CAD block geometry index from the runner package.");return o.blocks.filter(i=>i.indexStatus==="INDEXED"&&(i.discipline===s||i.discipline==="Shared")&&typeof i.blockName=="string"&&typeof i.blockAssetId=="string"&&i.geometry&&typeof i.geometry=="object")}function mT(a,s,o){const i=lT(a),p=gT(s,o).flatMap(h=>{const m=h.geometry,u=Fm(Xm(m));return!u.length||!m.bounds?[]:[{block:h,geometry:m,cloud:u,bounds:Bm(Xm(m)),primitiveCounts:m.primitiveCounts??{}}]}),g=i.candidates.map(h=>{const m=hT(h,i.entities);if(m.length)return{...h,best:null,second:null,status:"UNMATCHED",reason:`Matching withheld because candidate geometry is incomplete or unsupported: ${m.join(", ")}.`};const u=fT(h,i.entities),y=Fm(u),b=h.bounds?{minX:h.bounds[0],minY:h.bounds[1],maxX:h.bounds[2],maxY:h.bounds[3]}:Bm(u);if(p.length===0)return{...h,best:null,second:null,status:"NO_INDEXED_BLOCKS",reason:"No indexed approved blocks for this discipline."};if(y.length<2||!b)return{...h,best:null,second:null,status:"UNMATCHED",reason:"Candidate has too little supported geometry to compare."};const x=p.map(T=>({prepared:T,coarse:Hm(b,T.geometry.bounds)*.75+Ym(h.primitiveCounts,T.primitiveCounts)*.25})).sort((T,_)=>_.coarse-T.coarse).slice(0,nT).map(({prepared:T})=>T).map(T=>{const _=Ym(h.primitiveCounts,T.primitiveCounts),w=Hm(b,T.geometry.bounds),P=pT(y,T.cloud),k=Math.exp(-P.residual*2.5),I=Math.max(0,Math.min(1,k*.7+_*.2+w*.1)),Z=zm(b),se=zm(T.geometry.bounds),ee=String(T.block.category??""),le=/\b(equipment|tower|vessel|tank|exchanger|column|drum)\b/i.test(ee);return{blockAssetId:String(T.block.blockAssetId),blockName:String(T.block.blockName),category:ee,targetLayer:String(T.block.targetLayer??""),score:I,geometryResidual:P.residual,primitiveSimilarity:_,aspectSimilarity:w,rotationDegrees:P.rotation,estimatedUniformScale:le||se<=1e-9?null:Z/se,indexStatus:String(T.block.indexStatus)}}).sort((T,_)=>_.score-T.score||T.blockName.localeCompare(_.blockName)),R=x[0]??null,C=x[1]??null,D=R&&C?R.score-C.score:Number.POSITIVE_INFINITY,S=!R||R.score<.9?"UNMATCHED":D<.02?"AMBIGUOUS_REVIEW":R.score>=.97?"HIGH_CANDIDATE_REVIEW":"REVIEW";return{...h,best:R,second:C,status:S,reason:S==="AMBIGUOUS_REVIEW"?"Top library shapes are too close to identify safely.":S==="UNMATCHED"?"No geometry match reached the initial review threshold.":"Experimental shape score only; human confirmation is required."}});return{scan:i,candidates:g,indexedBlockCount:p.length}}function yT(a,s){return JSON.stringify({schemaVersion:1,localOnly:!0,discipline:s,generatedAt:new Date().toISOString(),note:"Experimental geometry similarity rankings. Scores are not probabilities or approvals. Source geometry was not changed; every candidate requires human review.",pagesScanned:a.scan.pages,indexedBlocks:a.indexedBlockCount,candidates:a.candidates},null,2)}function Gm(a){return a===void 0?"—":`${(a*100).toFixed(1)}%`}function bT(a){return a==null?"Review":`${a.toFixed(3)}×`}function vT({discipline:a}){const[s,o]=q.useState(null),[i,l]=q.useState(null),[p,g]=q.useState(null),[h,m]=q.useState(""),[u,y]=q.useState(!1),b=async()=>{if(!s||!i){m("Choose both AUTOCAD_GEOMETRY_SCAN.log and CAD_BLOCK_GEOMETRY_INDEX.json.");return}y(!0),m(""),g(null);try{const[x,R]=await Promise.all([s.text(),i.text()]),C=mT(x,R,a);g({scanName:s.name,indexName:i.name,discipline:a,indexedBlockCount:C.indexedBlockCount,pagesScanned:C.scan.pages,candidates:C.candidates})}catch(x){m(x instanceof Error?x.message:"The local geometry report could not be compared.")}finally{y(!1)}},E=()=>{if(!p)return;const x=yT({scan:{entities:new Map,candidates:[],pages:p.pagesScanned},candidates:p.candidates,indexedBlockCount:p.indexedBlockCount},p.discipline),R=URL.createObjectURL(new Blob([x],{type:"application/json"})),C=document.createElement("a");C.href=R,C.download="LOCAL_GEOMETRY_MATCH_REVIEW.json",C.click(),URL.revokeObjectURL(R)};return c.jsxs("section",{className:"geometry-match-review","aria-labelledby":"geometry-match-title","data-testid":"panel-geometry-match-review",children:[c.jsxs("div",{className:"geometry-match-heading",children:[c.jsx("span",{className:"geometry-match-icon",children:c.jsx(qE,{size:16})}),c.jsxs("div",{children:[c.jsx("h3",{id:"geometry-match-title",children:"Review geometry matches"}),c.jsx("p",{children:"Compare a local AutoCAD scan with indexed approved blocks. Source drawings are not changed."})]})]}),c.jsxs("div",{className:"geometry-match-privacy",children:[c.jsx(Nu,{size:14})," Both files are read and compared in this browser; nothing is uploaded."]}),c.jsx("p",{className:"geometry-match-instructions",children:"Use the scan log from AutoCAD and the index file from that same runner kit. The result is a local review aid only."}),c.jsxs("div",{className:"geometry-match-inputs",children:[c.jsxs("label",{children:[c.jsx("span",{children:"AutoCAD geometry scan log"}),c.jsx("input",{type:"file",accept:".log,.txt","aria-label":"Select AutoCAD geometry scan log",onChange:x=>{o(x.currentTarget.files?.[0]??null),g(null),m("")},"data-testid":"input-geometry-scan-log"})]}),c.jsxs("label",{children:[c.jsx("span",{children:"CAD block geometry index"}),c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Select CAD block geometry index",onChange:x=>{l(x.currentTarget.files?.[0]??null),g(null),m("")},"data-testid":"input-cad-geometry-index"})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:u||!s||!i,"data-testid":"button-build-geometry-match-report",children:[c.jsx(_r,{size:14}),u?"Comparing…":"Compare geometry"]})]}),h&&c.jsx("p",{className:"geometry-match-error",role:"alert",children:h}),p&&c.jsxs("div",{className:"geometry-match-results","data-testid":"geometry-match-results",children:[c.jsxs("div",{className:"geometry-match-summary",role:"status",children:[p.discipline,": ",p.candidates.length," candidate group(s) across ",p.pagesScanned," page(s); ",p.indexedBlockCount," indexed approved block(s)."]}),p.indexedBlockCount===0&&c.jsx("p",{className:"geometry-match-warning",children:"No matching indexed blocks were found for this discipline. Check that the selected index came from the same local runner package."}),p.indexedBlockCount>0&&p.candidates.length===0&&c.jsx("p",{className:"geometry-match-warning",children:"AutoCAD found no geometry candidate groups on the scanned pages. No blocks were inserted or drawings changed."}),p.candidates.map(x=>c.jsxs("article",{className:"geometry-match-card",children:[c.jsxs("div",{className:"geometry-match-card-head",children:[c.jsx("strong",{children:x.id}),c.jsx("span",{className:`geometry-match-status status-${x.status.toLowerCase()}`,children:x.status.replaceAll("_"," ")})]}),c.jsxs("div",{className:"geometry-match-card-meta",children:["Page ",x.page," · ",x.handles.length," source entities · ",x.sourceAlias]}),c.jsxs("div",{className:"geometry-match-ranking",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Best shape match"}),c.jsx("strong",{children:x.best?.blockName??"No match"}),c.jsxs("small",{children:[Gm(x.best?.score)," · ",x.best?.targetLayer||"no target layer"," ·"," ",x.best?.rotationDegrees??"—","° · scale ",bT(x.best?.estimatedUniformScale)]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Second match"}),c.jsx("strong",{children:x.second?.blockName??"—"}),c.jsx("small",{children:Gm(x.second?.score)})]})]}),c.jsx("p",{children:x.reason})]},`${x.sourceAlias}-${x.page}-${x.id}`)),c.jsxs("div",{className:"geometry-match-foot",children:[c.jsx("span",{children:"Experimental shape scores are not probabilities or approvals. Every result needs a person to verify it."}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:E,"data-testid":"button-download-geometry-match-report",children:[c.jsx(Us,{size:13})," Download local report"]})]})]})]})}const Km=250*1024*1024,Wm=500*1024*1024,Xu={"needs-review":"Needs review","company-standard":"Legends Library standard","project-example":"Project example","markup-reference":"Markup reference",ignore:"Do not use"};function Zm(a,s){return s&&a==="project-example"?"Client-specific library source":Xu[a]}function Tu(){return globalThis.crypto?.randomUUID?.()??`source-${Date.now()}-${Math.random().toString(36).slice(2)}`}function Au(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(2)} MB`}function Qm(a){return(a.replace(/\\/g,"/").split("/").pop()??"").replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,"").trim().slice(0,180)||"Unnamed CAD drawing"}function ET({onAddPdfs:a,discipline:s,clientFolderId:o,clientFolderLabel:i}){const[l,p]=q.useState([]),[g,h]=q.useState({}),[m,u]=q.useState([]),[y,b]=q.useState([]),[E,x]=q.useState(""),[R,C]=q.useState(""),[D,S]=q.useState(!1),[N,T]=q.useState(!1),[_,w]=q.useState(""),[P,k]=q.useState(!1),[I,Z]=q.useState(()=>{try{return gn().reviewCandidates.filter(U=>U.status==="needs-review").length}catch{return 0}}),[se,ee]=q.useState(!1),[le,Te]=q.useState(""),[he,de]=q.useState(!1),[Y,Q]=q.useState(!1),[be,Ae]=q.useState(0),[O,J]=q.useState([]);q.useEffect(()=>{const U=()=>Ae(ce=>ce+1);return window.addEventListener(Zo,U),window.addEventListener("storage",U),window.addEventListener("focus",U),()=>{window.removeEventListener(Zo,U),window.removeEventListener("storage",U),window.removeEventListener("focus",U)}},[]);const F=q.useMemo(()=>{try{const U=gn();return Object.fromEntries(l.map(ce=>[ce.id,Um(U,ce.id)]))}catch{return{}}},[l,be]);q.useEffect(()=>{Fu().then(U=>{p(U),h(Object.fromEntries(U.map(ce=>[ce.id,{category:ce.category,discipline:ce.discipline,projectLabel:ce.projectLabel}])))}).catch(U=>{w(U instanceof Error?U.message:"The local CAD library could not be opened.")})},[]);const X=q.useMemo(()=>Y1(l,s,o),[l,s,o]),ie=q.useMemo(()=>X.filter(U=>U.category==="company-standard"||!!o&&U.category==="project-example"&&U.projectLabel===o),[X,o]);q.useEffect(()=>{ie.some(U=>U.id===le)||Te(ie[0]?.id??"")},[ie,le]);const ge=q.useMemo(()=>X.reduce((U,ce)=>(U[ce.category]+=1,U),{"needs-review":0,"company-standard":0,"project-example":0,"markup-reference":0,ignore:0}),[X]),we=m.some(U=>o?U.projectLabel!==o:!!U.projectLabel),Me=async U=>{S(!0),C(""),w(""),x(""),k(!1),u([]),b([]);try{if(U.size>Km)throw new Error("The archive is larger than the 250 MB limit for this local test.");const ce=Lm(new Uint8Array(await U.arrayBuffer())),fe=Object.entries(ce).filter(([Ve])=>!Ve.endsWith("/")),B=fe.filter(([Ve])=>/\.(dwg|dxf)$/i.test(Ve)&&!/_OVERVIEW\.dxf$/i.test(Ve)),ue=fe.filter(([Ve])=>/\.pdf$/i.test(Ve)),Ce=fe.filter(([Ve])=>/\.bak$/i.test(Ve)).length;if([...B,...ue].reduce((Ve,[,Ie])=>Ve+Ie.byteLength,0)>Wm)throw new Error("The PDF and CAD source files together exceed the 500 MB local test limit.");if(B.length===0&&ue.length===0)throw new Error("No PDF, DWG, or source DXF files were found in this ZIP. Overview DXFs and other file types are not saved as source drawings.");const Le=B.map(([Ve,Ie],jt)=>({id:Tu(),label:`Source CAD ${String(l.length+jt+1).padStart(3,"0")}`,reviewFilename:Qm(Ve),category:"needs-review",discipline:s,format:/\.dxf$/i.test(Ve)?"DXF":"DWG",projectLabel:o??"",bytes:Ie.byteLength,content:Ie})),Qe=ue.map(([,Ve],Ie)=>({id:Tu(),label:`PDF ${String(Ie+1).padStart(2,"0")}`,file:new File([Ve],`SOURCE_${String(Ie+1).padStart(2,"0")}.pdf`,{type:"application/pdf"})}));u(Le),b(Qe),x(`Found ${B.length} CAD drawing file(s) and ${ue.length} PDF file(s). ${Ce} backup file(s) ignored.`),B.length?C("Assign a use to each CAD drawing before saving it. ZIP filenames are shown only during review; the saved library keeps generic source IDs."):C("No CAD drawings to add. You can add the extracted PDF to the conversion queue.")}catch(ce){w(ce instanceof Error?ce.message:"The ZIP could not be read. Check that it is not damaged or password-protected.")}finally{S(!1)}},qe=async U=>{w(""),x(""),C(""),u([]),b([]),k(!1);const ce=U.filter(B=>/\.(dwg|dxf)$/i.test(B.name)&&!/_OVERVIEW\.dxf$/i.test(B.name));if(ce.length!==U.length){w("Choose source DWG/DXF files only. Overview DXFs are not source drawings.");return}if(ce.reduce((B,ue)=>B+ue.size,0)>Wm){w("The selected CAD source files exceed the 500 MB local test limit.");return}if(!ce.length){w("Choose at least one DWG or DXF source drawing.");return}S(!0);try{const B=await Promise.all(ce.map(async(ue,Ce)=>({id:Tu(),label:`Source CAD ${String(l.length+Ce+1).padStart(3,"0")}`,reviewFilename:Qm(ue.name),category:"needs-review",discipline:s,format:/\.dxf$/i.test(ue.name)?"DXF":"DWG",projectLabel:o??"",bytes:ue.size,content:new Uint8Array(await ue.arrayBuffer())})));u(B),x(`Prepared ${B.length} CAD source file(s) for local review.`),C("Choose the correct discipline and local library category for each file. Filenames are discarded when saved.")}catch(B){w(B instanceof Error?B.message:"The CAD files could not be read locally.")}finally{S(!1)}},wt=async()=>{if(we){w("The selected client folder changed after these files were staged. Re-select the original client folder or add the files again.");return}if(m.some(U=>U.category==="needs-review")){w("Choose a category for every CAD drawing before saving the library.");return}if(m.some(U=>["project-example","markup-reference"].includes(U.category)&&!U.projectLabel?.trim())){w("Enter a neutral project code for every project example and markup reference.");return}T(!0),w("");try{let U=0;const ce=m.filter(ue=>ue.category!=="ignore").map(ue=>{const Ce=ue.format==="DXF"?Ir(ue.content):null;return U+=Ce?.repairs.length??0,{id:ue.id,label:ue.label,category:ue.category,discipline:ue.discipline,format:ue.format,projectLabel:ue.projectLabel,bytes:Ce?.content.byteLength??ue.bytes,content:Ce?.content??ue.content}});await Q1(ce);const fe=await Fu();p(fe),h(Object.fromEntries(fe.map(ue=>[ue.id,{category:ue.category,discipline:ue.discipline,projectLabel:ue.projectLabel}])));const B=m.length-ce.length;u([]),C(`${ce.length} source CAD drawing(s) saved in this browser's local library. ${B} marked “Do not use”. ${U} DXF symbol name(s) repaired in local copies; original disk files unchanged.`)}catch(U){w(U instanceof Error?U.message:"The CAD sources could not be saved locally.")}finally{T(!1)}},pt=(U,ce)=>{h(fe=>({...fe,[U.id]:{...U,...fe[U.id],...ce}}))},gt=async U=>{const ce=g[U.id]??{category:U.category,discipline:U.discipline,projectLabel:U.projectLabel};if(["project-example","markup-reference"].includes(ce.category)&&!ce.projectLabel?.trim()){w("Enter a neutral project code before saving this project-specific source.");return}w("");try{await J1(U.id,ce),p(fe=>fe.map(B=>B.id===U.id?{...B,...ce,...ce.projectLabel?.trim()?{projectLabel:ce.projectLabel.trim()}:{projectLabel:void 0}}:B))}catch(fe){w(fe instanceof Error?fe.message:"The source drawing category could not be changed.")}},xt=async()=>{if(!(!ie.length||se)){ee(!0),w("");try{const U=await nS(ie),ce=URL.createObjectURL(U),fe=document.createElement("a");fe.href=ce,fe.download="local-cad-extractor-kit.zip",fe.click(),window.setTimeout(()=>URL.revokeObjectURL(ce),1e3),C(`Local extractor kit prepared with ${ie.length} source CAD drawing(s).`)}catch(U){w(U instanceof Error?U.message:"The local extractor kit could not be prepared.")}finally{ee(!1)}}},aa=async U=>{const ce=ie.some(B=>B.id===le)?le:ie[0]?.id,fe=ie.find(B=>B.id===ce);if(!fe){w("Choose a reviewed source drawing before importing its extraction.");return}if(fe.category==="project-example"&&!fe.projectLabel?.trim()){w("Add a neutral project code to this source drawing before importing its extraction.");return}de(!0),w("");try{if(U.size>Km)throw new Error("The extraction ZIP is larger than the 250 MB limit for this local test.");const B=Lm(new Uint8Array(await U.arrayBuffer())),ue=Object.entries(B).find(([qt])=>/\.tsv$/i.test(qt));if(!ue)throw new Error("The ZIP must contain CAD_STANDARDS.tsv from PIDEXTRACTSTANDARDS.");const me=new TextDecoder().decode(ue[1]).split(/\r?\n/).filter(Boolean);if(me.length<2||!me[0].toUpperCase().includes("KIND")||!me[0].toUpperCase().includes("NAME"))throw new Error("The ZIP contains an invalid CAD_STANDARDS.tsv extraction.");const Le=gn(),Qe=Object.entries(B).filter(([qt])=>/_OVERVIEW\.dxf$/i.test(qt)),Ve=me[1]?.split("	")[0]?.trim()??"",Ie=Qe.find(([qt])=>qt.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===`${Ve}_OVERVIEW.dxf`.toLowerCase());if(Qe.length&&(!Ie||Qe.length!==1))throw new Error("Include exactly one overview DXF for this extraction, named with the same SOURCE alias as the TSV (for example SOURCE_001_OVERVIEW.dxf).");const jt=me.slice(1).flatMap(qt=>{const[,Ca,lt]=qt.split("	");return Ca?.trim().toUpperCase()==="BLOCK"&&lt?.trim()?[lt.trim()]:[]});if(Ie&&Ie[1].byteLength>30*1024*1024)throw new Error("The overview DXF exceeds the 30 MB preview limit. Keep the original extraction unchanged and export a smaller Legends-only overview.");let ye=null,et="",nt=!1;if(Ie)ye=new TextDecoder("windows-1252").decode(Ie[1]),et="overview DXF";else if(fe.format==="DXF"&&fe.bytes<=30*1024*1024)try{ye=new TextDecoder("windows-1252").decode(await Go(fe.id)),et="saved source DXF"}catch{nt=!0}else fe.format==="DXF"&&(nt=!0);let Wt=new Map;if(ye)try{Wt=Il(ye,jt)}catch{nt=!0}const Re=[],Da=[],Tt=[];for(const qt of me.slice(1)){const[,Ca,lt,Ot=""]=qt.split("	"),Mt=Ca?.trim().toUpperCase(),yt=lt?.trim();if(!yt||!Jm[Mt])continue;const Na=Mt==="BLOCK"&&bb(yt)?"directionArrow":Jm[Mt],na=Mt==="BLOCK"?Wt.get(yt):void 0;let on;if(Mt==="BLOCK"){const da=Ot.match(/(?:^|;)asset=([^;]+)/i)?.[1]?.trim();if(!da){Tt.push(yt);continue}const ua=da.replaceAll("\\","/").split("/").at(-1),At=Object.entries(B).find(([We])=>We.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===ua?.toLowerCase());if(!ua||!At){Tt.push(yt);continue}on=`${fe.id}|${yt}`,Da.push({id:on,sourceId:fe.id,blockName:yt,content:At[1],format:"DWG",...ye&&!nt?{previewSvg:na?.previewSvg??null,nearbyLabels:na?.nearbyLabels??[],labelMatchSkipped:na?.labelMatchSkipped??!1,labelMatchAmbiguous:na?.labelMatchAmbiguous??!1,sourcePlacements:na?.sourcePlacements??[],...na?.geometryDescriptor?{geometryDescriptor:na.geometryDescriptor}:{}}:{}})}const Qa=`extract-${fe.id}-${Mt}-${yt}`;if(Le.reviewCandidates.find(da=>da.id===Qa))continue;const ka=fe.category==="project-example",En=[{label:Mt==="BLOCK"?"Block name":"CAD name",value:yt},{label:"Source drawing ID",value:fe.id},{label:"Source discipline",value:fe.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:Ot.replace(/(?:^|;)asset=[^;]*/i,"").trim()||"No additional table details"},...Mt==="BLOCK"?[{label:"Block asset ID",value:on??""},{label:"Fallback category",value:""},...na?.sourcePlacements?.length?[{label:"Source insert layer(s)",value:[...new Set(na.sourcePlacements.map(da=>da.layer))].join(", ")},{label:"Source insert rotation(s)",value:na.sourcePlacements.map(da=>`${da.rotationDegrees}° on ${da.layer} (${da.count})`).join("; ")}]:[]]:[]];Re.push({id:Qa,item:{id:Qa,category:Na,name:`${Na==="directionArrow"?"Direction Arrow":Mt==="BLOCK"?"Block":Mt.replaceAll("_"," ")} · ${yt}`,summary:"Extracted locally from a source CAD drawing; confirm each value before use.",sourceFile:fe.label,sourceKind:"extracted-dwg",scope:ka?"project":"company",reviewStatus:"needs-review",...ka?{projectId:fe.projectLabel,projectName:fe.projectLabel===o&&i||fe.projectLabel}:{},canPromote:!1,fields:En},proposedScope:ka?"project":"company",sourceGroup:fe.id,...ka?{projectId:fe.projectLabel,projectName:fe.projectLabel===o&&i||fe.projectLabel}:{},status:"needs-review"})}const mt={...Le,reviewCandidates:[...Le.reviewCandidates,...Re],auditTrail:Re.length?[{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:"Local CAD extraction added for review",detail:`${Re.length} extracted records from ${fe.label} were added as pending review.`,...fe.projectLabel?{projectName:fe.projectLabel===o&&i||fe.projectLabel}:{}},...Le.auditTrail]:Le.auditTrail},Zt=ye&&!nt?Im(mt,fe.id,Wt).library:mt;await Bu(Da),Qo(Zt),Z(Zt.reviewCandidates.filter(qt=>qt.status==="needs-review").length),C((Re.length?`${Re.length} extracted record(s) added to Drafting standards for review. Nothing was approved automatically.`:"No new records found; the extracted names are already in the review queue or standards library.")+(Wt.size?` ${Wt.size} local block previews and source placement-layer details read from the ${et}. Nearby labels remain suggestions and need confirmation.`:nt?" The source preview could not be read; the valid extracted records were still imported without preview-based layer evidence.":fe.format==="DWG"&&!Ie?" To identify DWG blocks and their placement layers, include the source *_OVERVIEW.dxf exported with PIDEXPORTOVERVIEW.":"")+(Tt.length?` ${Tt.length} block asset(s) were missing and skipped: ${[...new Set(Tt)].slice(0,5).join(", ")}${Tt.length>5?", …":""}. Other valid records were kept.`:""))}catch(B){w(B instanceof Error?B.message:"The CAD extraction could not be imported.")}finally{de(!1)}},Rt=async()=>{const U=ie.find(fe=>fe.id===le&&fe.category==="company-standard"),ce=U?[U.id]:[];if(!(!U||Y)){Q(!0),w(""),C(""),J([]);try{let fe=gn();const B=JSON.stringify(fe);let ue="";if(U.format==="DXF"){C(`${U.label}: extracting native blocks from the saved DXF on this device…`),await new Promise(nt=>window.setTimeout(nt,0));const ye=await G1(),et=JS(U,await Go(U.id),fe,ye);if(JSON.stringify(gn())!==B)throw new Error("The library changed during DXF preparation. No records were changed; retry with the latest library.");await Bu(et.assets,!0),fe=et.library,J(et.skipped),ue=`${et.addedSymbols} new symbol record(s), ${et.assets.length} native block file(s) saved; ${et.preserved} previously reviewed symbol(s) preserved. ${et.skipped.length} item(s) excluded or need native extraction/review. `}const Ce=fe.reviewCandidates.filter(ye=>ye.sourceGroup===U.id&&ye.status==="needs-review"&&ye.proposedScope==="company"&&ye.item.category==="symbol"&&ye.item.sourceKind==="extracted-dwg");if(!Ce.length){const ye=Um(fe,U.id);C(`${U.label}: ${ue}No pending symbols to approve. ${ye.approved} already approved; ${ye.dismissed} dismissed. ${U.format==="DXF"?"Only named model-space INSERTs on supported placement layers can be extracted. See excluded items below; loose geometry is not guessed into blocks.":"For DWG, import this source’s extraction ZIP with its individual block files."}`);return}let me="";if(U.format==="DXF"){if(U.bytes>30*1024*1024)throw new Error("This saved source DXF exceeds the 30 MB recovery limit. Import its extraction with a smaller Legends-only overview DXF.");const ye=await Go(U.id),et=Ce.map(Re=>Re.item.fields.find(Da=>Da.label==="Block name")?.value.trim()??"").filter(Boolean),nt=Il(new TextDecoder("windows-1252").decode(ye),et),Wt=Im(fe,U.id,nt);fe=Wt.library,me=`${Wt.recoveredSymbols} pending symbol(s) have INSERT-layer evidence in the saved DXF; ${Wt.updatedRecords} existing record(s) updated. `}const Le=new Set(ce),Qe=new Set(fe.reviewCandidates.filter(ye=>ye.status==="needs-review"&&Le.has(ye.sourceGroup)&&ye.item.category==="symbol").map(ye=>ye.item.fields.find(et=>et.label==="Block asset ID")?.value.trim()??"").filter(Boolean)),Ve=new Set;await Promise.all([...Qe].map(async ye=>{try{await hb(ye),Ve.add(ye)}catch{}}));const Ie=M1(fe,ce,Ve);if(JSON.stringify(gn())!==B)throw new Error("The local standards library changed while this source was being checked. No approval changes were saved; retry to use the latest records.");Qo(Ie.library),Z(Ie.library.reviewCandidates.filter(ye=>ye.status==="needs-review").length);const jt=Object.values(Ie.skipped).reduce((ye,et)=>ye+et,0);C(`${U.label}: ${ue}${me}`+(Ie.approvedSymbols?`${Ie.approvedSymbols} layer-matched symbol(s) approved for shared PFD/P&ID use; ${Ie.approvedLayers} placement layer(s) approved or updated.`:"0 symbols approved. Only exact placement layers with local block files and a matching layer record can be approved.")),jt&&C(ye=>`${ye} ${Ie.skipped.missingAsset} missing asset(s), ${Ie.skipped.unsupportedLayer} internal/unsupported layer item(s), ${Ie.skipped.ambiguousLayer} ambiguous layer item(s), ${Ie.skipped.missingLayer} missing layer record(s), and ${Ie.skipped.invalidCandidate} invalid item(s) stayed unapproved.`)}catch(fe){C(""),w(fe instanceof Error?fe.message:"The categorized CAD mappings could not be approved locally.")}finally{Q(!1)}}};return c.jsxs("section",{className:"local-cad-library","aria-labelledby":"local-library-title","data-testid":"panel-local-cad-library",children:[c.jsxs("div",{className:"local-library-heading",children:[c.jsx("div",{className:"local-library-icon",children:c.jsx(np,{size:17})}),c.jsxs("div",{className:"local-library-title",children:[c.jsx("div",{className:"pdf-kicker",children:"SOURCE DRAWINGS · LOCAL ONLY"}),c.jsx("h3",{id:"local-library-title",children:o?"Client Source Library":"Legends Library"}),c.jsx("p",{children:o?`Manage CAD sources for ${i||"this client folder"}. Company standards remain the common default.`:"Add common company standards here. Select a Client folder first to add client-specific sources."})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-files",children:[D?c.jsx($a,{size:14,className:"pdf-spin"}):c.jsx(_r,{size:14}),D?"Reading…":"Add DWG/DXF",c.jsx("input",{type:"file",accept:".dwg,.dxf,application/acad,application/x-dwg,application/dxf",multiple:!0,"aria-label":"Add local DWG or DXF source files",disabled:D,onChange:U=>{const ce=[...U.currentTarget.files??[]];ce.length&&qe(ce),U.currentTarget.value=""},"data-testid":"input-add-cad-files"})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-archive",children:[D?c.jsx($a,{size:14,className:"pdf-spin"}):c.jsx(xy,{size:14}),D?"Reading ZIP…":"Add ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Add a ZIP with PDF and DWG/DXF source files",disabled:D,onChange:U=>{const ce=U.currentTarget.files?.[0];ce&&Me(ce),U.currentTarget.value=""},"data-testid":"input-add-cad-archive"})]})]}),c.jsxs("div",{className:"local-library-privacy",children:[c.jsx(ys,{size:14}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay in this browser."})," ",o?"This client source list is separate from the company Legends Library and other client folders.":"Company-standard sources remain shared defaults; project/client examples stay separate from them."]})]}),c.jsxs("div",{className:"local-library-extraction",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:[c.jsx(_E,{size:14})," Extract drawing standards locally"]}),c.jsx("span",{children:"Package eligible DWG/DXF drawings with a Windows AutoCAD script. It exports only blocks actually inserted on approved equipment, instrument, or inline-component layers—unused internal definitions are skipped. Source drawings are not uploaded or changed."})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{xt()},disabled:!ie.length||se,"data-testid":"button-download-cad-extractor",children:[se?c.jsx($a,{size:13,className:"pdf-spin"}):c.jsx(Us,{size:13}),se?"Preparing…":"Download extractor kit"]})]}),ie.length>0&&c.jsxs("div",{className:"local-library-import",children:[c.jsxs("label",{children:[c.jsx("span",{children:"Import AutoCAD extraction"}),c.jsx("select",{value:le||ie[0].id,disabled:Y||he,onChange:U=>{Te(U.target.value),C(""),J([])},"aria-label":"Source drawing for extracted CAD standards",children:ie.map(U=>c.jsxs("option",{value:U.id,children:[U.label," · ",U.format??"DWG"," · ",F[U.id]?.pending??0," pending / ",F[U.id]?.approved??0," approved",U.projectLabel?` · ${U.projectLabel}`:""]},U.id))})]}),c.jsxs("label",{className:"btn subtle local-library-import-button",children:[he?c.jsx($a,{size:13,className:"pdf-spin"}):c.jsx(_r,{size:13}),he?"Importing…":"Import extraction ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Import AutoCAD extraction ZIP",disabled:he||Y,onChange:U=>{const ce=U.currentTarget.files?.[0];ce&&aa(ce),U.currentTarget.value=""}})]})]}),!o&&ie.some(U=>U.category==="company-standard")&&c.jsxs("div",{className:"local-library-approval",children:[c.jsxs("div",{children:[c.jsx("strong",{children:"Approve supplied company symbols by placement layer"}),c.jsxs("span",{"data-testid":"status-selected-cad-source",children:[ie.find(U=>U.id===le)?.label,": ",F[le]?.pending??0," pending symbols · ",F[le]?.approved??0," approved · ",F[le]?.dismissed??0," dismissed.",F[le]?.layers.length?` Approved placement layers: ${F[le].layers.join(", ")}.`:""]}),c.jsx("span",{children:"Saved DXF: this action first extracts individual native blocks locally, then approves eligible placement-layer mappings. Existing approvals, dismissed records and saved block files are not replaced. DWG: import its AutoCAD extraction ZIP first."}),c.jsx("span",{children:"Approves only the selected company source; repeat for each source. EQUIP/f_Equip → equipment, f_Inst → instruments, f_Pipe_Inline → inline components. Mappings are shared across PFD and P&ID; internal, ambiguous, and missing-asset items stay pending."})]}),c.jsxs("button",{className:"btn primary",type:"button",disabled:Y||he||!ie.some(U=>U.id===le&&U.category==="company-standard"),onClick:()=>{Rt()},"data-testid":"button-approve-categorized-company-symbols",children:[Y?c.jsx($a,{size:13,className:"pdf-spin"}):c.jsx(Lr,{size:13}),Y?"Extracting / approving locally…":"Approve selected source"]})]}),_&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-library-error",children:[c.jsx(bs,{size:15}),c.jsx("span",{children:_})]}),R&&c.jsx("p",{className:"local-library-message",role:"status","aria-live":"polite","data-testid":"status-cad-source-action",children:R}),O.length>0&&c.jsxs("details",{className:"local-library-message",children:[c.jsxs("summary",{children:[O.length," excluded / review-required DXF items — show reasons"]}),c.jsx("ul",{children:O.map(U=>c.jsxs("li",{children:[U.blockName,": ",U.reason]},U.blockName))})]}),c.jsxs("div",{className:"local-library-summary","aria-label":"Local library totals",children:[c.jsxs("span",{children:[c.jsx("strong",{children:X.length})," saved CAD sources",o?` for ${i||"this client"}`:` for ${s}`]}),c.jsxs("span",{children:[c.jsx("strong",{children:ge["company-standard"]})," Legends Library sources"]}),c.jsxs("span",{children:[c.jsx("strong",{children:ge["project-example"]+ge["markup-reference"]})," reference drawings"]}),ge["needs-review"]>0&&c.jsxs("span",{className:"local-library-review-count",children:[c.jsx("strong",{children:ge["needs-review"]})," need review"]})]}),c.jsx(vT,{discipline:s}),I>0&&c.jsxs(la,{href:s==="PFD"?"/standards-review/pfd":"/standards-review/pid",className:"btn primary local-library-review-link","data-testid":"link-review-extracted-standards",children:[c.jsx(DE,{size:15}),"Review extracted standards",c.jsx("span",{children:I})]}),we&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-source-folder-mismatch",children:[c.jsx(bs,{size:15}),c.jsx("span",{children:"These staged drawings belong to a different folder. Re-select that client or add them again here."})]}),E&&c.jsx("div",{className:"local-library-archive-summary",role:"status",children:E}),y.length>0&&c.jsxs("div",{className:"local-library-pdf-list","aria-label":"PDF files found in ZIP",children:[y.map(U=>c.jsxs("div",{className:"local-library-pdf-row",children:[c.jsx(ms,{size:15}),c.jsx("span",{children:U.label}),c.jsx("span",{className:"pdf-file-meta",children:Au(U.file.size)})]},U.id)),c.jsxs("button",{className:"btn subtle",type:"button",disabled:P,onClick:()=>{a(y.map(({file:U})=>U)),k(!0)},"data-testid":"button-add-archive-pdfs",children:[P?c.jsx(Lr,{size:14}):c.jsx(_r,{size:14}),P?"PDFs added to queue":"Add PDF(s) to conversion queue"]})]}),m.length>0&&c.jsxs("div",{className:"local-library-staging",children:[c.jsxs("div",{className:"local-library-staging-title",children:[c.jsx("strong",{children:o?"Choose how each client CAD drawing will be used":"Choose what each CAD drawing is for"}),c.jsx("span",{children:"Unmarked files will not be saved."})]}),m.map(U=>c.jsxs("label",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-name",children:[c.jsx("span",{className:"local-library-source-id",children:U.label}),c.jsxs("span",{className:"local-library-review-filename",title:U.reviewFilename,children:["Selected filename: ",U.reviewFilename]})]}),c.jsx("span",{className:"pdf-file-meta",children:Au(U.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Category for ${U.label}`,value:U.category,onChange:ce=>{const fe=ce.target.value;u(B=>B.map(ue=>ue.id===U.id?{...ue,category:fe}:ue))},"data-testid":`select-category-${U.id}`,children:Object.entries(Xu).filter(([ce])=>o?["needs-review","project-example","markup-reference","ignore"].includes(ce):["needs-review","company-standard","ignore"].includes(ce)).map(([ce,fe])=>c.jsx("option",{value:ce,children:Zm(ce,o)},ce))}),c.jsx("select",{"aria-label":`Discipline for ${U.label}`,value:U.discipline,onChange:ce=>{const fe=ce.target.value;u(B=>B.map(ue=>ue.id===U.id?{...ue,discipline:fe}:ue))},"data-testid":`select-discipline-${U.id}`,children:["PFD","P&ID","Shared"].map(ce=>c.jsx("option",{value:ce,children:ce},ce))}),["project-example","markup-reference"].includes(U.category)&&!o&&c.jsx("input",{"aria-label":`Project code for ${U.label}`,placeholder:"Neutral project code",value:U.projectLabel,onChange:ce=>u(fe=>fe.map(B=>B.id===U.id?{...B,projectLabel:ce.target.value}:B)),"data-testid":`input-project-${U.id}`}),o&&["project-example","markup-reference"].includes(U.category)&&c.jsx("span",{className:"local-library-scope-tag",children:"Saved only in this client folder"})]})]},U.id)),c.jsxs("button",{className:"btn primary local-library-save",type:"button",disabled:N||we||m.some(U=>U.category==="needs-review"||["project-example","markup-reference"].includes(U.category)&&!U.projectLabel?.trim()),onClick:()=>{wt()},"data-testid":"button-save-local-library",children:[N?c.jsx($a,{size:14,className:"pdf-spin"}):c.jsx(rm,{size:14}),N?"Saving locally…":"Save reviewed sources locally"]})]}),X.length>0&&c.jsxs("details",{className:"local-library-saved-list",children:[c.jsxs("summary",{children:["Saved source drawings for ",s," (",X.length,")"]}),c.jsx("div",{className:"local-library-saved-items",children:X.map(U=>c.jsxs("div",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-id",children:[U.label," · ",U.format??"DWG",o?` · ${U.category==="company-standard"?"Company standard":"This client"}`:U.projectLabel?` · ${U.projectLabel}`:""]}),c.jsx("span",{className:"pdf-file-meta",children:Au(U.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Change category for ${U.label}`,value:(g[U.id]??U).category,disabled:!!(o&&U.category==="company-standard"),onChange:ce=>pt(U,{category:ce.target.value}),"data-testid":`saved-category-${U.id}`,children:Object.entries(Xu).filter(([ce])=>!o||["project-example","markup-reference","ignore"].includes(ce)||U.category==="company-standard"&&ce==="company-standard").map(([ce,fe])=>c.jsx("option",{value:ce,children:Zm(ce,o)},ce))}),c.jsx("select",{"aria-label":`Change discipline for ${U.label}`,value:(g[U.id]??U).discipline,disabled:!!(o&&U.category==="company-standard"),onChange:ce=>pt(U,{discipline:ce.target.value}),"data-testid":`saved-discipline-${U.id}`,children:["PFD","P&ID","Shared"].map(ce=>c.jsx("option",{value:ce,children:ce},ce))}),!o&&["project-example","markup-reference"].includes((g[U.id]??U).category)&&c.jsx("input",{"aria-label":`Neutral project code for ${U.label}`,placeholder:"Neutral project code",value:(g[U.id]??U).projectLabel??"",onChange:ce=>pt(U,{projectLabel:ce.target.value}),"data-testid":`saved-project-${U.id}`}),c.jsxs("button",{className:"btn subtle local-library-save-row",type:"button",disabled:!!(o&&U.category==="company-standard"),onClick:()=>{gt(U)},"data-testid":`button-save-source-${U.id}`,children:[c.jsx(rm,{size:12})," Save"]})]})]},U.id))})]}),c.jsx("p",{className:"local-library-limit",children:"Extracted records enter the standards review queue. Only approved mappings are offered to the matching PFD or P&ID runner. Original DWG/DXF sources stay local; only individually exported block files are included with approved mappings."})]})}const Jm={BLOCK:"symbol",LAYER:"layer",TEXT_STYLE:"textStyle",LINETYPE:"linetype",DIMENSION_STYLE:"dimensionStyle"},Gu=100*1024*1024,Ku=500*1024*1024,wT="pid-studio-local-pdfs",sn="meta",Bs="bytes",Jo="extractedText";class Kt extends Error{code;constructor(s,o){super(o),this.code=s}}let Rr=null,ey=Promise.resolve();function Ys(){return Rr||(Rr=new Promise((a,s)=>{if(typeof indexedDB>"u"){s(new Kt("storage","This browser does not allow local file storage."));return}const o=indexedDB.open(wT,2);o.onupgradeneeded=i=>{const l=o.result;i.oldVersion<1&&(l.createObjectStore(sn,{keyPath:"id"}).createIndex("discipline","discipline"),l.createObjectStore(Bs)),i.oldVersion<2&&l.createObjectStore(Jo)},o.onsuccess=()=>{o.result.onversionchange=()=>{o.result.close(),Rr=null},a(o.result)},o.onerror=()=>{Rr=null,s(new Kt("storage","Local storage could not be opened."))},o.onblocked=()=>{Rr=null,s(new Kt("storage","Local file storage is busy in another tab. Close that tab and reload."))}})),Rr}function di(a){return new Promise((s,o)=>{a.onsuccess=()=>s(a.result),a.onerror=()=>o(a.error)})}function Kl(a){return new Promise((s,o)=>{a.oncomplete=()=>s(),a.onerror=()=>o(a.error),a.onabort=()=>o(a.error??new Kt("storage","Local storage write was stopped."))})}function Wl(a){const s=ey.then(a,a);return ey=s.catch(()=>{}),s}async function Cb(a){const s=await Ys();return(await di(s.transaction(sn).objectStore(sn).index("discipline").getAll(a))).sort((i,l)=>i.aliasNumber-l.aliasNumber)}async function xT(){const a=await Ys();return(await di(a.transaction(sn).objectStore(sn).getAll())).reduce((o,i)=>o+i.size,0)}async function ty(a){const s=globalThis.crypto?.subtle;if(!s)throw new Error("hash-unsupported");const o=await s.digest("SHA-256",a);return Array.from(new Uint8Array(o)).map(i=>i.toString(16).padStart(2,"0")).join("")}function ST(a,s){return Wl(async()=>{if(!s())throw new Kt("cancelled","Cancelled.");const o=a.bytes.byteLength;if(o>Gu)throw new Kt("too-large","This PDF is larger than 100 MB.");const l=(await Ys()).transaction([sn,Bs],"readwrite"),p=Kl(l);p.catch(()=>{});const g=l.objectStore(sn),h=await di(g.getAll());if(!s())throw l.abort(),new Kt("cancelled","Cancelled.");if(h.some(b=>b.discipline===a.discipline&&b.hash===a.hash))throw l.abort(),new Kt("duplicate","This PDF has the same content as a saved file.");if(h.reduce((b,E)=>b+E.size,0)+o>Ku)throw l.abort(),new Kt("total-limit","Saved PDFs would pass the 500 MB total limit.");const u=h.filter(b=>b.discipline===a.discipline).reduce((b,E)=>Math.max(b,E.aliasNumber),0)+1,y={id:globalThis.crypto?.randomUUID?.()??`pdf-${Date.now()}-${Math.random().toString(36).slice(2)}`,discipline:a.discipline,aliasNumber:u,alias:`PDF ${u}`,originalName:a.originalName?.trim()||void 0,size:o,pageCount:a.pageCount,hash:a.hash,addedAt:Date.now(),analysisStatus:"queued",analysisPagesDone:0,analysisRecordCount:0,autocadStatus:"not-connected"};g.put(y),l.objectStore(Bs).put(a.bytes,y.id);try{await p}catch(b){throw b instanceof Kt?b:new Kt("storage","The browser could not save this PDF. Storage may be full.")}return y})}async function qo(a){const s=await Ys(),o=await di(s.transaction(Bs).objectStore(Bs).get(a));if(!o)throw new Kt("storage","Saved PDF data was not found.");return o}function TT(a,s){return Wl(async()=>{const i=(await Ys()).transaction(Jo,"readwrite"),l=Kl(i);i.objectStore(Jo).put({pdfId:a,pages:s,savedAt:Date.now()},a);try{await l}catch{throw new Kt("storage","PDF text was read, but the browser could not save the full text index. The original PDF remains saved; free browser storage and retry EDE.")}})}function wl(a,s){return Wl(async()=>{const i=(await Ys()).transaction(sn,"readwrite"),l=Kl(i),p=i.objectStore(sn),g=await di(p.get(a));if(!g)throw i.abort(),new Kt("storage","The saved PDF record could not be found.");const h={...g,...s};return p.put(h),await l,h})}function Nb(a){return Wl(async()=>{const o=(await Ys()).transaction([sn,Bs,Jo],"readwrite");a.forEach(i=>{o.objectStore(sn).delete(i),o.objectStore(Bs).delete(i),o.objectStore(Jo).delete(i)}),await Kl(o)})}async function AT(a){const s=await Cb(a);await Nb(s.map(o=>o.id))}class kl extends Error{constructor(s,o,i){super(`Page ${s}: ${o} failed.`,{cause:i}),this.page=s,this.stage=o,this.name="PdfExtractionError"}page;stage}function ay(a){const s=a instanceof kl?a.cause:a,o=s instanceof Error?s.name:"",i=s instanceof Error?s.message:typeof s=="string"?s:"",l=a instanceof kl?`Page ${a.page} stopped during ${a.stage}. `:"EDE extraction stopped. ";return o==="QuotaExceededError"?`${l}Browser storage is full. Back up your records before freeing space, then retry EDE. Your PDF remains saved.`:/memory|allocation|out of bounds/i.test(i)?`${l}The browser ran out of processing memory. Close other tabs and retry, or use a desktop browser. Your PDF remains saved.`:/fetch|network|importscripts|load.*(worker|core|language)|failed to load/i.test(i)||a instanceof kl&&a.stage==="OCR startup"?`${l}The OCR engine could not start. Check internet access to the OCR downloads, then retry EDE. Your PDF remains saved.`:`${l}The PDF could not be processed${o?` (${o.replace(/[^a-zA-Z0-9]/g,"").slice(0,60)})`:""}. Retry EDE; if it repeats, report this message. Your PDF remains saved.`}const DT=/\b(?:[A-Z]{1,8}\s*[-–]\s*)+\d{1,6}[A-Z0-9]*(?:\s*[-–]\s*[A-Z0-9]{1,8}){0,3}\b/g,kb=/^(?:AI|DI|FI|FIC|FIT|FQI|LI|LIC|LS|LSH|LSL|PI|PIC|PDI|PSH|PSL|TI|TIC|TSH|TSL|TT|PT|FT|LT|FC|PC|TC|LC|AT|AIT|XV|ZSO|ZSC)$/,CT=/^(?:XV|HV|BV|CV|PCV|FCV|LCV|TCV|PSV|PRV|MOV|SDV|BDV|NRV)$/,NT=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/g,kT=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/i;function Rb(a){const s=a.map((m,u)=>({token:m,index:u,value:m.text.trim().toUpperCase()})).filter(({value:m})=>kb.test(m)),o=a.map((m,u)=>({token:m,index:u,value:m.text.trim().toUpperCase()})).filter(({value:m})=>/^\d{2,5}[A-Z]?$/.test(m)),i=[];for(const m of s){const u=m.token.location,y=u.x+u.width/2,b=u.y+u.height/2;for(const E of o){if(m.index===E.index)continue;const x=E.token.location,R=x.x+x.width/2,C=x.y+x.height/2,D=Math.max(u.height,x.height,.004),S=R-y,N=C-b,T=Math.abs(N)<=D*.55&&S>=-D*.4&&S<=D*4,_=N>D*.35&&N<=D*3.2&&Math.abs(S)<=D*1.8;if(!T&&!_)continue;const w=T?1-Math.abs(N)/(D*.55)-Math.max(0,S)/(D*8):.85-N/(D*10)-Math.abs(S)/(D*8);i.push({functionToken:m.token,numberToken:E.token,score:w})}}const l=new Map,p=new Map,g=m=>{const u=[...m].sort((y,b)=>b.score-y.score);if(u.length&&!(u.length>1&&u[0].score-u[1].score<.18))return u[0]};for(const m of s.map(({token:u})=>u)){const u=g(i.filter(y=>y.functionToken===m));u&&l.set(m,u)}for(const m of o.map(({token:u})=>u)){const u=g(i.filter(y=>y.numberToken===m));u&&p.set(m,u)}const h=[];for(const m of i){if(l.get(m.functionToken)!==m||p.get(m.numberToken)!==m)continue;const u=m.functionToken.text.trim().toUpperCase(),y=m.numberToken.text.trim().toUpperCase();h.push({tag:`${u}-${y}`,type:"Instrument",tagPrefix:u,tagSequence:y,tagSuffix:"",pageNumber:m.functionToken.location.pageNumber,sourceLocations:[m.functionToken.location,m.numberToken.location]})}return h}function jb(a,s,o,i,l,p,g){const h=Math.max(0,Math.min(1,i/s)),m=Math.max(0,Math.min(1,l/o)),u=Math.max(h,Math.min(1,p/s)),y=Math.max(m,Math.min(1,g/o));return u-h<1e-4||y-m<1e-4?null:{pageNumber:a,x:h,y:m,width:u-h,height:y-m}}function ny(a,s,o){const i=[o.convertToViewportPoint(a.x,a.y),o.convertToViewportPoint(a.x+a.width,a.y),o.convertToViewportPoint(a.x,a.y+a.height),o.convertToViewportPoint(a.x+a.width,a.y+a.height)];return jb(s,o.width,o.height,Math.min(...i.map(l=>l[0]??0)),Math.min(...i.map(l=>l[1]??0)),Math.max(...i.map(l=>l[0]??0)),Math.max(...i.map(l=>l[1]??0)))}function RT(a,s,o){const i=[],l=[];for(const p of a){if(!p.text||!p.bbox)continue;const g=jb(s,o.pageWidth,o.pageHeight,o.left+p.bbox.x0,o.top+p.bbox.y0,o.left+p.bbox.x1,o.top+p.bbox.y1);g&&(l.push({text:p.text,location:g}),i.push(...Rl(p.text,s).map(h=>({...h,sourceLocations:[g]}))))}return[...i,...Rb(l)]}function jT(a,s){const o=new Map;for(const i of[...a??[],...s??[]]){const l=[i.pageNumber,i.x.toFixed(4),i.y.toFixed(4),i.width.toFixed(4),i.height.toFixed(4)].join(":");!o.has(l)&&o.size<500&&o.set(l,i)}return[...o.values()]}function LT(a){let s="",o;for(const i of a){const l=i.str.replace(/\s+/g," ").trim();if(l){if(o){const p=Math.max(1,(o.fontSize+i.fontSize)/2),g=Math.abs(i.y-o.y)<=Math.max(1,p*.3),h=i.x-(o.x+o.width),m=g&&h>=-p*.5&&h<=p*.35;s+=m?"":g?" ":`
`,o.hasEOL&&!s.endsWith(`
`)&&(s+=`
`)}s+=l,o=i}}return s}function sy(a,s=1700,o=120){if(a<=s+o)return[0];const i=s-o,l=[];for(let p=0;p<a;p+=i){const g=a-(p+s);if(g>0&&g<=o&&(p=a-s),l.push(p),p+s>=a)break}return l}function Rl(a,s){const o=new Map,i=a.toUpperCase();for(const l of i.matchAll(DT)){const p=l[0].replace(/[–\s]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),g=p.split("-").filter(Boolean),h=p.match(/^([A-Z]{1,8})-(\d{1,6})(.*)$/);if(!h||p.length<3||g.length>6)continue;const m=h[1],u=/^OPC$/.test(m)?"OPC":CT.test(m)?"Valve":kb.test(m)?"Instrument":g.length>=4||/^(?:L|LINE|PIPE)$/.test(m)?"Pipe Run":"Equipment",y=Math.max(0,(l.index??0)-180),b=Math.min(i.length,(l.index??0)+l[0].length+180),E=i.slice(y,b),x=E.match(/\b(?:NOMINAL\s*(?:DIA(?:METER)?|SIZE)|NPS|DN)\s*[:#=-]?\s*((?:(?:NPS|DN)\s*)?\d{1,3}(?:\s*\/\s*\d{1,2})?(?:\.\d+)?\s*(?:MM|IN(?:CH)?)?["”]?)/i)?.[1]??"",R=E.match(/\b(?:PIPING|PIPE)\s*(?:MATERIAL|MATL)\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})/i)?.[1]??"",C=E.match(/\b(?:DESIGN\s+FLOW|FLOW(?:\s+RATE)?)\s*[:=]?\s*([\d.,]+\s*(?:KG\/H|M3\/H|NM3\/H|T\/H|L\/S|M3\/D|GPM|M\/S)?)/i)?.[1]??"",D=E.match(/\b(?:HEAT\s+TRACING|HEAT\s+TRACE)\s*[:=]?\s*(YES|NO|ELECTRIC|STEAM|NONE|N\/A)\b/i)?.[1]??"",S=E.match(/\bINSULATION\s*[:=]?\s*([A-Z0-9][A-Z0-9._/-]{0,12})/i)?.[1]??"",T=h[3].split("-").filter(Boolean).at(-1)??"",_=u==="Pipe Run"&&/[A-Z]/i.test(T)&&/\d/.test(T)?T:"",w=E.match(kT)?.[1]??_,P=`${u}:${p.toLowerCase()}`;o.has(P)||o.set(P,{tag:p,type:u,tagPrefix:m,tagSequence:h[2],tagSuffix:h[3].replace(/^-/,""),pageNumber:s,nominalDiameter:x.replace(/\s+/g," ").trim(),pipingMaterial:R,lineSpec:w,flow:C,heatTracing:D,insulation:S})}for(const l of i.matchAll(NT)){const p=l[1].replace(/\s+/g,"").toUpperCase(),g=`Line Spec:${p.toLowerCase()}`;o.has(g)||o.set(g,{tag:p,type:"Line Spec",tagPrefix:"LINE SPEC",tagSequence:p,tagSuffix:"",lineSpec:p,pageNumber:s})}return[...o.values()]}const OT=/^(?:(?:GENERAL|PROCESS|DESIGN|SAFETY|OPERATING|CONSTRUCTION)\s+)?NOTES?\s*[:.-]?\s*(.*)$/i,_T=/^(?:LEGENDS?|ABBREVIATIONS?|SYMBOLS?|REFERENCES?|REVISION(?:S)?|DRAWING\s+(?:TITLE|NO|NUMBER)|PROJECT|CLIENT|SCALE|TITLE\s*BLOCK|EQUIPMENT\s+LIST|LINE\s+LIST)\b/i,PT=/^(?:(?:NOTE\s*)?\d{1,3}\s*[.)-]\s+|[A-Z]\s*[.)]\s+).+/i,IT=/^(?:GENERAL\s+)?NOTE(?:\s+\d+)?\s*[:#-]\s*.+/i;function qT(a){const s=[];for(const o of a){const i=[{text:o.searchableText,label:"PDF text"},...o.ocrTiles.map(h=>({text:h,label:"OCR text"}))],l=new Set,p=[];for(const h of i){let m=!1,u="";const y=()=>{const b=u.replace(/\s+/g," ").trim();if(b.length>=8){const E=b.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();E&&!l.has(E)&&(l.add(E),p.push({text:b,label:h.label}))}u=""};for(const b of h.text.replace(/\r/g,`
`).split(`
`)){const E=b.replace(/\s+/g," ").trim();if(!E)continue;const x=E.match(OT);if(x){y(),m=!0,x[1]&&(u=x[1].trim());continue}if(m&&_T.test(E)){y(),m=!1;continue}if(IT.test(E)){y(),u=E,m=!0;continue}if(PT.test(E)){const R=E.length>=36&&E.split(/\s+/).length>=7;m||R?(y(),u=E,m=!0):y();continue}m?u=u?`${u} ${E}`:E:y()}y()}let g=0;for(const h of p){const m=[];for(let u=0;u<h.text.length;){let y=Math.min(u+1500,h.text.length);if(y<h.text.length){const b=h.text.lastIndexOf(" ",y);b>u+700&&(y=b)}m.push(h.text.slice(u,y)),u=y}for(const u of m){const y=u.trim();y&&(g+=1,s.push({tag:`NOTE-P${o.pageNumber}-${g}`,type:"Item Note",tagPrefix:"NOTE",tagSequence:String(g),tagSuffix:`P${o.pageNumber}`,pageNumber:o.pageNumber,description:`${h.label} note — review against source: ${y}`}))}}}return s}function Du(a,s){const o=new Map(a.map(i=>[`${i.type}:${i.tag.toLowerCase()}`,{...i}]));for(const i of s){const l=`${i.type}:${i.tag.toLowerCase()}`,p=o.get(l);if(!p){o.set(l,{...i});continue}p.sourceLocations=jT(p.sourceLocations,i.sourceLocations);for(const g of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])!p[g]&&i[g]&&(p[g]=i[g])}return[...o.values()]}async function MT(a,s,o=()=>!0){const[i,l]=await Promise.all([nn(()=>import("./pdf-TYrZqVzP.js"),[]),nn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);i.GlobalWorkerOptions.workerSrc=l.default;const p=i.getDocument({data:new Uint8Array(a.slice(0))}),g=await p.promise;let h=null;const m=new Map,u=[];let y=0,b=1,E="PDF text";try{for(let x=1;x<=g.numPages;x++){if(b=x,E="PDF text",!o())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const R=await g.getPage(x),C=await R.getTextContent(),D=R.getViewport({scale:1}),S=C.items.flatMap(k=>{if(!("str"in k)||typeof k.str!="string"||!k.str||!("transform"in k)||!Array.isArray(k.transform))return[];const I=k.transform;return[{str:k.str,x:I[4]??0,y:I[5]??0,width:"width"in k&&typeof k.width=="number"?k.width:0,height:"height"in k&&typeof k.height=="number"?k.height:0,fontSize:Math.hypot(I[0]??0,I[1]??0)||10,hasEOL:"hasEOL"in k&&k.hasEOL===!0}]}),N=LT(S),T=[];let _=Rl(N,x);const w=S.flatMap(k=>{const I=ny({...k,height:k.height||k.fontSize},x,D);return I?Rl(k.str,x).map(Z=>({...Z,sourceLocations:[I]})):[]}),P=S.flatMap(k=>{const I=ny({...k,height:k.height||k.fontSize},x,D);return I?[{text:k.str,location:I}]:[]});if(_=Du(_,[...w,...Rb(P)]),N.replace(/\s/g,"").length<800||_.length<20){if(s?.(x,g.numPages,"OCR"),!h){E="OCR startup";const{createWorker:Te,PSM:he}=await nn(async()=>{const{createWorker:de,PSM:Y}=await import("./index-FgznAYNU.js").then(Q=>Q.i);return{createWorker:de,PSM:Y}},__vite__mapDeps([0,1]));h=await Te("eng",1,{workerPath:"https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js",corePath:"https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0",langPath:"https://tessdata.projectnaptha.com/4.0.0"}),await h.setParameters({tessedit_pageseg_mode:he.SPARSE_TEXT,preserve_interword_spaces:"1"})}const k=R.getViewport({scale:1});E="page image";const I=Math.min(3.5,3200/Math.max(k.width,k.height)),Z=R.getViewport({scale:I}),se=document.createElement("canvas"),ee=document.createElement("canvas");se.width=Math.ceil(Z.width),se.height=Math.ceil(Z.height);const le=se.getContext("2d",{willReadFrequently:!1});if(!le)throw new Error("This browser cannot prepare a page image for local OCR.");try{await R.render({canvas:se,canvasContext:le,viewport:Z}).promise;const Te=1700,he=120,de=[],Y=sy(se.width,Te,he),Q=sy(se.height,Te,he);for(const be of Q)for(const Ae of Y){if(!o())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const O=Math.min(se.width<=Te+he?se.width:Te,se.width-Ae),J=Math.min(se.height<=Te+he?se.height:Te,se.height-be);ee.width=O,ee.height=J;const F=ee.getContext("2d",{willReadFrequently:!1});if(!F)throw new Error("This browser cannot prepare a page image for local OCR.");F.drawImage(se,Ae,be,O,J,0,0,O,J),E="OCR reading";const X=await h.recognize(ee);T.push(X.data.text),de.push(...Rl(X.data.text,x)),de.push(...RT(X.data.words??[],x,{left:Ae,top:be,pageWidth:se.width,pageHeight:se.height}))}y+=1,_=Du(_,de)}finally{se.width=0,se.height=0,ee.width=0,ee.height=0}}else s?.(x,g.numPages,"PDF text");for(const k of _){const I=`${k.type}:${k.tag.toLowerCase()}`,Z=m.get(I);m.set(I,Z?Du([Z],[k])[0]:k)}u.push({pageNumber:x,searchableText:N,ocrTiles:T}),R.cleanup()}return{candidates:[...m.values()],pages:g.numPages,ocrPages:y,pageText:u}}catch(x){throw o()?new kl(b,E,x):x}finally{await h?.terminate().catch(()=>{}),await p.destroy().catch(()=>{})}}const Lb=["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef","placementDrawingRef","nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description","notes","sourcePage","reviewStatus"],Un=[...Lb,"stableId"],Ob=/^[0-9A-F]{32}$/,$T=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,UT=["plantGroup","fluidService","nominalDiameter","pipingMaterial","lineSpec","insulation","heatTracing","groupStatus"],FT=["","Start","Continue","Branch","Merge","End-of-Group"];function _b(){return crypto.randomUUID().replaceAll("-","").toUpperCase()}function hp(a){const s=a.toUpperCase();if(Ob.test(s))return s;if($T.test(a))return s.replaceAll("-","");throw new Error("A Stable ID must contain exactly 32 letters or numbers (A–F, 0–9).")}function mn(a,s){return s==="stableId"?a.id:a[s]}function BT(a,s){const o=a.placementDrawingRef.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase();return o?[s.id,s.name].map(l=>l.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase()).includes(o)?"current":"another":"available"}const kt={itemTag:"Item Tag",tagPrefix:"Tag Prefix",tagSequence:"Tag Sequence",tagSuffix:"Tag Suffix",equipmentClass:"Equipment Class",equipmentType:"Equipment Type",equipmentName:"Equipment Name",drawingRef:"Source Drawing / Page",placementDrawingRef:"Placed on Drawing",nominalDiameter:"Nominal Diameter",plantGroup:"Plant Group",fluidService:"Fluid / Service",pipingMaterial:"Piping Material Class",lineSpec:"Line Spec",flow:"Flow",flowDirection:"Flow Direction",heatTracing:"Heat Tracing",insulation:"Insulation",fromTag:"From",toTag:"To",groupStatus:"Group Status",opcDrawing:"OPC Drawing",connection:"Connection",description:"Description",notes:"Notes",sourcePage:"Source page",reviewStatus:"Review status",stableId:"Stable ID"},ql=Lb,jr={itemTag:"The tag printed beside the equipment, line, valve, or instrument. A repeated Pipe Run tag needs different line data.",tagPrefix:"The letter code at the start of the tag.",tagSequence:"The main number in the tag.",tagSuffix:"Extra letters or numbers after the main tag number.",equipmentClass:"The approved class or family for this equipment.",equipmentType:"What the equipment is, such as a pump or vessel, when the drawing states it.",equipmentName:"The equipment name or service, only when the source clearly labels it.",drawingRef:"The source drawing or PDF page where this record came from.",placementDrawingRef:"The CAD drawing that contains this object. Blank means available or not placed. This is a reference only; it does not place or move CAD entities.",nominalDiameter:"The stated pipe or nozzle size, such as DN50 or 2 inch.",plantGroup:"The plant, unit, or area group, if stated.",fluidService:"The stated fluid or process service for this line.",pipingMaterial:"The approved piping material class or code.",lineSpec:"The piping line class/specification code. It is separate from the pipe run tag.",flow:"The stated flow value or direction. A line arrow alone is not converted to a value.",flowDirection:"The confirmed upstream/downstream flow direction.",heatTracing:"The stated heat-tracing requirement or type.",insulation:"The stated insulation requirement or code.",fromTag:"The connected source tag or point shown for this pipe run.",toTag:"The connected destination tag or point shown for this pipe run.",groupStatus:"Start, Continue, Branch, Merge, or End-of-Group for the pipe run.",opcDrawing:"The linked off-page connector drawing number, if shown.",connection:"A stated connection or connected item; line geometry is not inferred here.",description:"A short object description from the source. Blank means no clear value was found.",notes:"Drawing notes or additional comments associated with this record.",sourcePage:"The page in the original PDF where this candidate was found.",reviewStatus:"Needs review means check the tag and fields before using them.",stableId:"Permanent object identity. It stays the same when the tag, drawing, size, or geometry changes."},ei=["Equipment","Equipment Component","Equipment Heat Transfer","Equipment Mechanical","Equipment Other","Equipment Vessel","Hydraulic Circuit","Instrument","Instrument Loop","Item Note","Line Spec","Nozzle","OPC","Package","Pipe Run","Valve"],Ml=a=>`pid-mapping-studio:engineering-workspace:v2:${a}`;function Pb(a,s){if(!Array.isArray(a))return Wu(a);const o=a.map(i=>!i||typeof i!="object"||!Array.isArray(i.rows)?i:{...i,rows:i.rows.map(l=>{if(!l||typeof l!="object")return l;const p=typeof l.id=="string"?l.id:"";let g;try{g=hp(p)}catch{g=_b()}g!==l.id&&s?.();const h=typeof l.description=="string"?l.description:"",m=typeof l.notes=="string",u=/^(?:PDF text|OCR text) note — review against source:\s*/iu,y=m?l.notes:l.type==="Item Note"?h.replace(u,""):"",b=!m&&l.type==="Item Note"&&h?u.test(h)?"Drawing note extracted from PDF; check the source page.":"":h;return(!m||b!==h)&&s?.(),{...l,id:g,description:b,notes:y,sourcePage:typeof l.sourcePage=="string"?l.sourcePage:"",placementDrawingRef:typeof l.placementDrawingRef=="string"?l.placementDrawingRef:"",lineSpec:typeof l.lineSpec=="string"?l.lineSpec:"",plantGroup:typeof l.plantGroup=="string"?l.plantGroup:"",fluidService:typeof l.fluidService=="string"?l.fluidService:"",flowDirection:typeof l.flowDirection=="string"?l.flowDirection:"",fromTag:typeof l.fromTag=="string"?l.fromTag:"",toTag:typeof l.toTag=="string"?l.toTag:"",groupStatus:typeof l.groupStatus=="string"?l.groupStatus:"",...l.sourceLocations===void 0?{}:{sourceLocations:l.sourceLocations},reviewStatus:l.reviewStatus==="Needs review"||l.reviewStatus==="Reviewed"?l.reviewStatus:"Manual"}})});return Wu(o)}function Wu(a){if(!Array.isArray(a)||a.length>500)throw new Error("Invalid drawing catalog. Keep a backup and do not overwrite saved data.");const s=new Set,o=new Set;let i=0;for(const l of a){if(!l||typeof l!="object"||typeof l.id!="string"||typeof l.name!="string"||!l.name.trim()||l.name.length>160||typeof l.revision!="string"||l.revision.length>80||!Array.isArray(l.rows)||s.has(l.id))throw new Error("The drawing catalog contains an invalid or duplicate drawing.");s.add(l.id);const p=new Map;for(const g of l.rows){if(g?.type==="Pipe Run"&&!FT.includes(g.groupStatus))throw new Error("Pipe Run group status must be Start, Continue, Branch, Merge, or End-of-Group.");if(!g||typeof g!="object"||typeof g.id!="string"||!Ob.test(g.id)||o.has(g.id)||!ei.includes(g.type)||ql.some(u=>typeof g[u]!="string"||g[u].length>2e3)||!["Manual","Needs review","Reviewed"].includes(g.reviewStatus)||g.sourcePdfId!==void 0&&typeof g.sourcePdfId!="string"||g.sourceLocations!==void 0&&(!Array.isArray(g.sourceLocations)||g.sourceLocations.length>500||g.sourceLocations.some(u=>{if(!u||typeof u!="object")return!0;const y=u;return!Number.isInteger(y.pageNumber)||y.pageNumber<1||!["x","y","width","height"].every(b=>typeof y[b]=="number"&&Number.isFinite(y[b]))||y.x<0||y.y<0||y.width<=0||y.height<=0||y.x>1||y.y>1||y.x+y.width>1.02||y.y+y.height>1.02}))||!g.itemTag.trim())throw new Error("Each record needs a valid Stable ID, object type, and text fields.");const h=g.itemTag.trim().toLowerCase(),m=p.get(h)??[];if(m.length&&(g.type!=="Pipe Run"||m.some(u=>u.type!=="Pipe Run"||!UT.some(y=>u[y]!==g[y]))))throw new Error("This tag is already used. Repeated Pipe Run tags need different line-defining data.");if(typeof g.x!="number"||typeof g.y!="number"||!Number.isFinite(g.x)||!Number.isFinite(g.y))throw new Error("A record contains invalid coordinates.");p.set(h,[...m,g]),o.add(g.id),i+=1}}if(i>2e4)throw new Error("This local workspace supports up to 20,000 engineering records.");return a}function ti(a){const s=window.localStorage.getItem(Ml(a));if(!s)return[];let o=!1;const i=Pb(JSON.parse(s),()=>{o=!0});if(o)try{window.localStorage.setItem(Ml(a),JSON.stringify(i))}catch{throw new Error("Saved records were read, but the data-format update could not be saved because browser storage is full. The original saved data was not overwritten; download a backup before freeing space.")}return i}function Pr(a){return window.localStorage.getItem(Ml(a))}function Zu(a,s,o){if(Wu(s),Pr(a)!==o)throw new Error("This workspace changed in another tab. Reload before editing to avoid overwriting its records.");const i=JSON.stringify(s);return window.localStorage.setItem(Ml(a),i),i}function gp(a,s,o){return{...Object.fromEntries(ql.map(i=>[i,""])),id:_b(),type:a,itemTag:s.trim(),drawingRef:o,reviewStatus:"Manual",x:0,y:0}}function zT(a,s){return JSON.stringify({version:5,discipline:a,drawings:s},null,2)}function YT(a,s){const o=JSON.parse(a);if(![2,3,4,5].includes(o?.version)||o?.discipline!==s)throw new Error(`Choose a ${s.toUpperCase()} workspace backup. PFD and P&ID backups stay separate.`);return Pb(o.drawings)}function HT(a,s){const o=new Map;for(const i of[...a??[],...s??[]]){const l=[i.pageNumber,i.x.toFixed(4),i.y.toFixed(4),i.width.toFixed(4),i.height.toFixed(4)].join(":");!o.has(l)&&o.size<500&&o.set(l,i)}return[...o.values()]}function ry(a,s){const o=gp(a.type,a.tag,`${s.alias} · Page ${a.pageNumber}`);o.tagPrefix=a.tagPrefix??"",o.tagSequence=a.tagSequence??"",o.tagSuffix=a.tagSuffix??"";for(const i of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])o[i]=a[i]??"";return o.sourcePage=String(a.pageNumber),o.sourcePdfId=s.id,o.sourceLocations=a.sourceLocations?.slice(0,500),o.reviewStatus="Needs review",a.type==="Item Note"?(o.notes=(a.description??"").replace(/^(?:PDF text|OCR text) note — review against source:\s*/iu,""),o.description="Drawing note extracted from PDF; check the source page."):o.description=a.description??"Tag candidate found in the PDF. Confirm the object type and details before using it.",o}function VT(a,s,o){const i=ti(a),l=i.find(x=>x.sourcePdfId===s.id);if(l){const x=new Map(o.map(N=>[N.tag.trim().toLowerCase(),N])),R=new Set(l.rows.map(N=>N.itemTag.trim().toLowerCase()));let C=!1;const D=l.rows.map(N=>{const T=x.get(N.itemTag.trim().toLowerCase());if(!T)return N;const _=HT(N.sourceLocations,T.sourceLocations),w=N.sourcePage||String(T.pageNumber);return _.length===(N.sourceLocations?.length??0)&&w===N.sourcePage?N:(C=!0,{...N,sourcePage:w,sourceLocations:_})}),S=o.flatMap(N=>{const T=N.tag.trim().toLowerCase();return!T||R.has(T)?[]:(R.add(T),C=!0,[ry(N,s)])});if(C){const N=i.map(T=>T.id===l.id?{...T,rows:[...D,...S]}:T);Zu(a,N,Pr(a))}return{drawingId:l.id,recordCount:D.length+S.length}}const p=new Set(i.map(x=>x.name.toLowerCase())),g=`${s.alias} · Extracted data`;let h=g,m=2;for(;p.has(h.toLowerCase());)h=`${g} (${m++})`;const u=new Set,y=o.flatMap(x=>{const R=x.tag.trim().toLowerCase();return!R||u.has(R)?[]:(u.add(R),[ry(x,s)])}),b={id:crypto.randomUUID(),name:h,revision:"Local PDF extraction · review required",sourcePdfId:s.id,sourceAlias:s.alias,rows:y},E=Pr(a);return Zu(a,[...i,b],E),{drawingId:b.id,recordCount:y.length}}function xl(a,s,o){const i=URL.createObjectURL(new Blob([s],{type:o})),l=document.createElement("a");l.href=i,l.download=a,l.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function XT(a){return Ib(["Object type",...Un.map(s=>kt[s])],a.map(s=>[s.type,...Un.map(o=>mn(s,o))]))}function Ib(a,s){const o=i=>`"${(/^[\s]*[=+\-@\t\r]/.test(i)?`'${i}`:i).replaceAll('"','""')}"`;return"\uFEFF"+[a,...s].map(i=>i.map(l=>o(String(l))).join(",")).join(`\r
`)}function GT(a,s){const o=[];let i=[],l="",p=!1;const g=a.replace(/^\uFEFF/,"");for(let E=0;E<g.length;E++){const x=g[E];if(x==='"')if(p&&g[E+1]==='"')l+='"',E++;else{if(!p&&l!=="")throw new Error("Invalid CSV quoting.");p=!p}else!p&&x===","?(i.push(l),l=""):!p&&(x===`
`||x==="\r")?(i.push(l),i.some(R=>R.trim())&&o.push(i),i=[],l="",x==="\r"&&g[E+1]===`
`&&E++):l+=x}if(p)throw new Error("The CSV has an unclosed quoted cell.");i.push(l),i.some(E=>E.trim())&&o.push(i);const h=o.shift()?.map(E=>E.trim().toLowerCase())??[],m=h.findIndex(E=>E==="object type"||E==="type"),u=ql.map(E=>h.findIndex(x=>x===E.toLowerCase()||x===kt[E].toLowerCase())),y=h.findIndex(E=>E==="stableid"||E===kt.stableId.toLowerCase());if(m<0||u[0]<0)throw new Error("CSV needs Object type and Item Tag columns. Download the template first.");if(!o.length)throw new Error("The CSV contains no records.");if(o.length>2e4)throw new Error("Import at most 20,000 records.");const b=new Set;return o.map((E,x)=>{if(E.length!==h.length)throw new Error(`CSV row ${x+2} has the wrong number of columns.`);const R=ei.find(D=>D.toLowerCase()===E[m]?.trim().toLowerCase());if(!R)throw new Error(`CSV row ${x+2} has an unsupported object type.`);const C=gp(R,E[u[0]]??"",s);if(y>=0&&E[y]?.trim())try{C.id=hp(E[y].trim())}catch{throw new Error(`CSV row ${x+2} has an invalid Stable ID.`)}if(b.has(C.id))throw new Error(`CSV row ${x+2} repeats a Stable ID.`);return b.add(C.id),ql.forEach((D,S)=>{if(u[S]<0)return;const N=E[u[S]].trim();D==="reviewStatus"?C.reviewStatus=["Needs review","Reviewed","Manual"].includes(N)?N:"Manual":C[D]=N}),C.drawingRef||(C.drawingRef=s),C})}function Sl(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function KT(a,s=!1,o="",i=[]){const l=a.map(g=>`("${String(g.documentNumber).padStart(2,"0")}" ${Sl(g.sourceFile)} ${Sl(g.sourceId)} ${Sl(g.sourceName)} ${Sl(g.sha256.toLowerCase())} ${g.pageCount})`).join(`
  `),p=i.map(g=>`("${String(g.documentNumber).padStart(2,"0")}" ${g.pageNumber} ${g.scaleFactor} "${g.method}" ${g.pageWidthMm} ${g.pageHeightMm} ${g.targetWidthMm} ${g.targetHeightMm})`).join(`
  `);return`; Single working drawing PDF batch runner.
; Each approved page is saved to a separate, never-overwritten DWG.
(vl-load-com)
(setq *p2dwg-project-title-block-enabled* ${s?"T":"nil"})
(setq *p2dwg-batch-run-id* "${o}")
(setq *p2dwg-page-scale-plans* '(
  ${p}
))
(setq *p2dwg-page-states* nil)
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

(defun p2dwg-verify-batch-package (directory expectedCount / scriptPath command shell result)
  (setq scriptPath (strcat directory "/VERIFY_BATCH.ps1"))
  (if (or (not (findfile scriptPath))
          (not (findfile (strcat directory "/batch_manifest.json"))))
    (p2dwg-raise "The extracted batch is missing its PDF manifest or verifier. Extract a fresh complete ZIP."))
  (setq command
    (strcat "powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File "
      (p2dwg-script-path scriptPath) " -ExpectedCount " (itoa expectedCount)))
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
        )
      )
      (close handle)
      (if (/= storedRunId *p2dwg-batch-run-id*)
        (p2dwg-raise "This progress journal belongs to a different or older PDF/mapping batch. No DWGs were changed."))
    )
    (p2dwg-log path (strcat "BATCH_ID|" *p2dwg-batch-run-id*))
  )
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
                          stopped workingPath pageResult message titleBlockOutput titleBlockAttached
                          pageScalePlan pageScaleFactor pageScaleMode sourceName sourceHash sourceId
                          jobId outputName)
  (setq currentDoc (vla-get-ActiveDocument (vlax-get-acad-object)))
  (setq settings (mapcar '(lambda (name) (cons name (getvar name)))
    '("FILEDIA" "CMDECHO" "OSMODE")))
  (setq baseline (p2dwg-layout-entities))
  (setq baselineBlocks (p2dwg-block-names))
  (setq owned nil)
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
        (p2dwg-log logPath "BATCH_STARTED|SINGLE_WORKING_DRAWING")
        (while (and queue (not stopped))
          (setq job (car queue))
          (setq *p2dwg-current-token* (car job))
          (setq *p2dwg-current-page* (nth 1 job))
          (setq *p2dwg-current-output* (nth 5 job))
          (setq *p2dwg-failure-state* nil)
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
            (if (= (p2dwg-page-state (car job) (nth 1 job)) "COMPLETED")
              (p2dwg-log logPath
                (strcat "SKIPPED_COMPLETED|JOB=" (nth 6 job)
                  "|SOURCE_ID=" (nth 7 job) "|SOURCE=" (nth 8 job)
                  "|SOURCE_NAME=" (nth 9 job) "|SHA256=" (nth 10 job)
                  "|PAGE=" (itoa (nth 1 job))
                  "|OUTPUT=" (nth 5 job)))
              (p2dwg-set-page-state logPath (car job) (nth 1 job)
                "NEEDS_REVIEW" (nth 5 job)))
            (progn
              (p2dwg-set-page-state logPath (car job) (nth 1 job)
                "RUNNING" (nth 5 job))
              (setq *p2dwg-stage* "WORKING_COPY")
              ; Detach from the last saved page BEFORE changing any of its objects.
              ; A fresh scratch filename avoids overwriting outputs or old scratch files.
              (setq workingPath (p2dwg-next-working-path directory base))
              (if (findfile workingPath)
                (p2dwg-raise "Working-copy path already exists. Nothing was overwritten."))
              (vla-SaveAs currentDoc workingPath)
              (p2dwg-log logPath (strcat "WORKING_COPY|" workingPath))
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
                   (p2dwg-log logPath "PROJECT_TITLE_BLOCK_ATTACHED|MODELSPACE|0,0,0|SCALE=1")
                 )
               )
              (setq *p2dwg-stage* "CLEAR_PREVIOUS_PAGE")
              (p2dwg-clear-owned owned)
              (p2dwg-clear-owned-blocks baselineBlocks)
              (if (p2dwg-owned-entities baseline)
                (p2dwg-raise "Working drawing is not clear. No next PDF page was imported."))
              (setq owned nil)
              (setq *p2dwg-stage* "HELPER_LOAD")
              (p2dwg-log logPath
                (strcat "WORKER_STARTED|JOB=" jobId "|SOURCE=" (nth 8 job)
                  "|PAGE=" (itoa (nth 1 job)) "|OUTPUT=" outputName))
              (load (nth 2 job))
              (setq worker (read (nth 3 job)))
              (setq pageScalePlan (p2dwg-page-scale-plan (car job) (nth 1 job)))
              (setq pageScaleFactor (if pageScalePlan (nth 2 pageScalePlan) scaleFactor))
              (setq pageScaleMode (if pageScalePlan (nth 3 pageScalePlan) "MANUAL_REFERENCE"))
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
                    "|METHOD=MANUAL_REFERENCE|REASON=PAGE_SIZE_NOT_COMPATIBLE")))
              (setq pageResult
                (apply worker
                  (list (nth 4 job) (nth 1 job) (nth 5 job)
                    pageScaleFactor pageScaleMode jobId sourceId
                    (nth 8 job) sourceName sourceHash workingPath)))
              (setq owned (p2dwg-owned-entities baseline))
              (if pageResult
                (progn
                  (if (not (findfile (nth 5 job)))
                    (p2dwg-raise "Page worker returned without a saved DWG. Batch stopped."))
                  (p2dwg-set-page-state logPath (car job) (nth 1 job)
                    "COMPLETED" (nth 5 job))
                  (p2dwg-log logPath
                    (strcat "JOB_COMPLETED|jobId=" jobId "|sourceId=" sourceId
                      "|sourceFile=" (nth 8 job) "|sourceSha256=" sourceHash
                      "|page=" (itoa (nth 1 job)) "|outputDwg=" outputName))
                  ; This uniquely created scratch file is not a final page output.
                  (if (not (vl-file-delete workingPath))
                    (p2dwg-log logPath (strcat "WORKING_COPY_RETAINED|" workingPath)))
                )
                (progn
                  (setq stopped T)
                  (p2dwg-set-page-state logPath (car job) (nth 1 job)
                    (if (= *p2dwg-failure-state* "FAILED") "FAILED" "NEEDS_REVIEW")
                    (nth 5 job))
                  (if (= *p2dwg-failure-state* "FAILED")
                    (p2dwg-log logPath (strcat "FAILED|jobId=" jobId
                      "|sourceId=" sourceId "|reason=" *p2dwg-failure-message*))
                    (p2dwg-log logPath (strcat "REVIEW_STOPPED|" *p2dwg-stage*)))
                  (prompt "\\nPage was not completed. Batch stopped; previously completed DWGs remain unchanged.")
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
            (p2dwg-log logPath "BATCH_FINISHED")
            (prompt "\\nBatch finished. Each approved PDF page has a separate DWG. The last page stays open.")))
      )
      nil
    )
  )
  ; Cancel incomplete native commands before restoring the working environment.
  (repeat 3
    (if (/= 0 (logand 1 (getvar "CMDACTIVE"))) (command)))
  (foreach entry settings
    (vl-catch-all-apply 'setvar (list (car entry) (cdr entry))))
  (setq *p2dwg-controller-active* nil)
  (setq *p2dwg-batch-mode* nil)
  (if (vl-catch-all-error-p result)
    (progn
      (if (and *p2dwg-current-token* *p2dwg-current-page*
               (= (p2dwg-page-state *p2dwg-current-token* *p2dwg-current-page*) "RUNNING"))
        (vl-catch-all-apply 'p2dwg-set-page-state
          (list logPath *p2dwg-current-token* *p2dwg-current-page*
            (if (= *p2dwg-failure-state* "FAILED") "FAILED" "NEEDS_REVIEW")
            *p2dwg-current-output*)))
      (setq message (strcat "BATCH_STOPPED|" *p2dwg-stage* "|"
        (p2dwg-error-message result)))
      (vl-catch-all-apply 'p2dwg-log (list logPath message))
      (prompt (strcat "\\n" message
        "\\nUnfinished working drawing stays open. Previously saved page DWGs were not modified."))))
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
  (p2dwg-verify-batch-package directory (length documentSpecs))
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
              (strcat outputDirectory "/" outputBase "_doc-" token "_page-"
                (p2dwg-pad page 3) ".dwg")
              jobId sourceId sourceFile sourceName sourceHash)
            queue))
          (setq page (1+ page))
        )
      )
      (p2dwg-load-page-states logPath)
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
          (p2dwg-start '(${l}) firstPdf)))
      nil))
  (if (vl-catch-all-error-p result)
    (prompt (strcat "\\nBatch not started: " (p2dwg-error-message result))))
  (princ)
)
(princ "\\nLoaded PDF2DWGBATCH (single working drawing). Start only in a NEW unsaved blank DWT drawing.")
(princ)
`}const WT=[{field:"sourceFile",xdataIndex:1,global:"*p2dwg-source-alias*"},{field:"pageNumber",xdataIndex:2,global:"*p2dwg-source-page*"},{field:"jobId",xdataIndex:3,global:"*p2dwg-job-id*"},{field:"sourceId",xdataIndex:4,global:"*p2dwg-source-id*"},{field:"sourceSha256",xdataIndex:5,global:"*p2dwg-source-hash*"},{field:"sourceName",xdataIndex:6,global:"*p2dwg-source-name*"}];function ZT(a,s){const o=String(a).padStart(2,"0"),i=`p2dwg${o}`,l=WT.map(({xdataIndex:p,global:g})=>`(= (cdr (nth ${p} app-data)) ${g})`).join(`
    `);return`
(defun ${i}-job-entity-matches (entity / data record app-data)
  (setq data (entget entity '("PIDPAGE")))
  (setq record (assoc -3 data))
  (setq app-data (if record (car (cdr record)) nil))
  (and app-data
    (= (car app-data) "PIDPAGE")
    ${l})
)

(defun ${i}-verify-job-entities (selection / index entity checked valid)
  (setq index 0 checked 0 valid T)
  (while (and selection (< index (sslength selection)) valid)
    (setq entity (ssname selection index))
    (if (entget entity)
      (progn
        (setq checked (1+ checked))
        (if (not (${i}-job-entity-matches entity))
          (setq valid nil))))
    (setq index (1+ index)))
  (and valid (> checked 0))
)

(defun ${i}-pdf-input (value)
  ; Do not feed arguments to AutoCAD if PDFIMPORT stopped or never started.
  (if (not (wcmatch (strcase (getvar "CMDNAMES")) "*PDFIMPORT*"))
    (p2dwg-raise "PDFIMPORT is no longer active; remaining inputs were not sent."))
  (command value)
)

(defun ${i}-run-page (pdfPath page outputPath scaleFactor scaleMode
                           jobId sourceId sourceFile sourceName sourceHash workingPath /
                           currentDoc beforeEntity importedEntities redactions
                           scrubAnswer pipeConfirmed reviewConfirmed oldOsMode
                           recoveryPath rollbackResult expectedFullName actualFullName
                           identityResult)
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
  (${i}-apply-approved-cad-standards)
  (${i}-batch-log (strcat "MAPPING_PREFLIGHT|BLOCKS="
    (itoa (length *p2dwg-approved-symbols*)) "|TEXT_STYLES="
    (itoa (length *p2dwg-approved-text-styles*))))
  (if (null *p2dwg-approved-symbols*)
    (progn
      (initget "Yes No")
      (if (/= (getkword "\\nNo compatible approved blocks are available. This run can only retain RAW PDF geometry. Continue a raw-only test? [Yes/No] <No>: ") "Yes")
        (p2dwg-raise "No approved blocks for this discipline/project. Approve compatible Legends Library symbols before a mapped CAD test."))))
  (setq *p2dwg-stage* "PDFIMPORT_START")
  (${i}-batch-log
    (strcat "PDFIMPORT_SOURCE|jobId=" jobId "|sourceId=" sourceId
      "|sourceFile=" sourceFile "|sourceName=" sourceName
      "|sourceSha256=" (strcase sourceHash) "|page=" (itoa page)))
  (${i}-batch-log (strcat "IMPORT_STARTED|SOURCE_${o}.pdf|" (itoa page)))
  (prompt (strcat "\\nImporting PDF page " (itoa page) " of ${s}..."))
  (setq beforeEntity (entlast))
  (command "_.-PDFIMPORT")
  (setq *p2dwg-stage* "PDFIMPORT_FILE_OPTION")
  (${i}-pdf-input "_File")
  (setq *p2dwg-stage* "PDFIMPORT_PATH")
  (${i}-pdf-input pdfPath)
  (setq *p2dwg-stage* "PDFIMPORT_PAGE")
  (${i}-pdf-input (itoa page))
  (setq *p2dwg-stage* "PDFIMPORT_ORIGIN")
  (${i}-pdf-input '(0.0 0.0 0.0))
  (setq *p2dwg-stage* "PDFIMPORT_SCALE")
  (${i}-pdf-input scaleFactor)
  (setq *p2dwg-stage* "PDFIMPORT_ROTATION")
  (${i}-pdf-input 0.0)
  (if (wcmatch (strcase (getvar "CMDNAMES")) "*PDFIMPORT*")
    (p2dwg-raise "PDFIMPORT did not finish after rotation. No page was saved."))
  (setvar "OSMODE" oldOsMode)
  (setq importedEntities (${i}-collect-imported-entities beforeEntity))
  (if (null importedEntities)
    (p2dwg-raise "PDFIMPORT produced no usable drawing entities. PDF underlays or raster-only pages are not accepted as editable CAD."))
  (${i}-normalize-pdf-import-layers importedEntities)
  (${i}-batch-log (strcat "IMPORT_COMPLETED|SOURCE_${o}.pdf|"
    (itoa page) "|ENTITIES=" (itoa (sslength importedEntities))))
  (${i}-record-mapping importedEntities "RAW" nil nil)
  (if (= (strcase scaleMode) "TITLE_BLOCK_PAGE_SIZE")
    (progn
      (setq *p2dwg-stage* "SCALE_PAGE_SIZE")
      (setq *p2dwg-scale-status* "VERIFIED")
      (setq *p2dwg-effective-scale* scaleFactor)
      (${i}-batch-log
        (strcat "SCALE_VERIFIED|SOURCE_${o}.pdf|" (itoa page)
          "|METHOD=" scaleMode "|FACTOR=" (rtos scaleFactor 2 10)))
      (prompt
        (strcat "\\nScale verified from PDF page dimensions ("
          scaleMode "). Imported PDF geometry only was scaled; the title block is unchanged.")))
    (progn
      (setq *p2dwg-stage* "SCALE_REVIEW")
      (${i}-batch-log (strcat "SCALE_REVIEW_REQUIRED|SOURCE_${o}.pdf|" (itoa page)))
      (prompt "\\nScale needs review. Choose a known 12 mm instrument side or 6/3 mm valve side; no guessed scale will be saved.")
      (command "_.ZOOM" "_Extents")
      (${i}-calibrate-import importedEntities)))
  (${i}-stamp-page importedEntities)
  (command "_.ZOOM" "_Extents")
  (setq *p2dwg-stage* "CONFIDENTIALITY_REVIEW")
  (prompt "\\nSelect company/client names, logos, and descriptions to remove, then press Enter.")
  (setq redactions (ssget))
  (if redactions (command "_.ERASE" redactions ""))
  (initget "Yes No")
  (setq scrubAnswer (getkword
    "\\nConfirm this page was checked and confidential company/client details removed? [Yes/No] <No>: "))
  (if (/= (strcase (if scrubAnswer scrubAnswer "No")) "YES")
    nil
    (progn
      (setq *p2dwg-stage* "APPROVED_BLOCK_REVIEW")
      (${i}-review-approved-blocks importedEntities)
      (setq *p2dwg-stage* "TEXT_FORMAT_REVIEW")
      (setq *p2dwg-stage* "PIPE_RUN_REVIEW")
      (setq pipeConfirmed (${i}-tag-pipe-runs importedEntities))
      (setq *p2dwg-stage* "SYMBOL_REVIEW")
      (setq reviewConfirmed
        (if pipeConfirmed (${i}-review-unsupported importedEntities) nil))
      (if reviewConfirmed
        (progn
          ; Attribute association has first refusal; remaining text is reviewed loose.
          (${i}-review-text importedEntities)
          (setq *p2dwg-stage* "SAVE_DWG")
          (${i}-finalize-source-layer-states)
            (setq identityResult
              (vl-catch-all-apply
                '(lambda () (${i}-verify-job-entities importedEntities))
                nil))
            (if (or (vl-catch-all-error-p identityResult) (not identityResult))
             (progn
               (setq *p2dwg-failure-state* "FAILED")
               (p2dwg-raise
                 (strcat "Imported entity identity does not match job " jobId
                   ". The page was not saved under the requested output name.")))
           )
          (if (/= (strcase *p2dwg-scale-status*) "VERIFIED")
            (p2dwg-raise "Final DWG save blocked because this page's scale is not VERIFIED.")
          )
          (if (findfile outputPath)
            (p2dwg-raise "Output already exists. No DWG was overwritten."))
           (vla-SaveAs currentDoc outputPath)
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
                    (${i}-verify-job-entities importedEntities)))
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
                     (${i}-batch-log
                       (strcat "IDENTITY_ROLLBACK|jobId=" jobId "|OUTPUT_REMOVED"))
                     (${i}-batch-log
                       (strcat "IDENTITY_ROLLBACK_FAILED|jobId=" jobId
                         "|OUTPUT_RETAINED_AS_FAILED"))
                   )
                 )
                 (${i}-batch-log
                   (strcat "IDENTITY_ROLLBACK_FAILED|jobId=" jobId
                     "|RECOVERY=" recoveryPath))
               )
               (p2dwg-raise *p2dwg-failure-message*))
           )
           (${i}-batch-log
             (strcat "SAVEAS_CONFIRMED|jobId=" jobId "|sourceId=" sourceId
               "|sourceFile=" sourceFile "|sourceSha256=" (strcase sourceHash)
               "|page=" (itoa page) "|outputDwg="
               (strcat (vl-filename-base outputPath) ".dwg")))
          (${i}-batch-log
             (strcat "SAVED|jobId=" jobId "|sourceId=" sourceId
               "|sourceFile=" sourceFile "|sourceName=" sourceName
               "|sourceSha256=" (strcase sourceHash)
               "|SOURCE_${o}.pdf|" (itoa page) "|" outputPath
              "|SCALE=" *p2dwg-scale-status* "|"
              (rtos *p2dwg-effective-scale* 2 8)))
          (prompt (strcat "\\nSaved native DWG: " outputPath))
          T
        )
        nil
      )
    )
  )
)

(defun c:PDF2DWG${o} (/ pdfPath runnerPath result)
  (setq pdfPath (getfiled "Select SOURCE_${o}.pdf from the extracted runner folder" "" "pdf" 0))
  (if pdfPath
    (progn
      (setq runnerPath (strcat (vl-filename-directory pdfPath) "/RUN_BATCH.lsp"))
      (if (findfile runnerPath)
        (progn
          (load runnerPath)
          (setq *p2dwg-failure-message* nil)
          (setq result (vl-catch-all-apply 'p2dwg-start
            (list '((${a} ${s})) pdfPath)))
          (if (vl-catch-all-error-p result)
            (prompt (strcat "\\nBatch not started: " (p2dwg-error-message result))))
        )
        (prompt "\\nMissing RUN_BATCH.lsp. Extract the complete kit into one folder.")
      )
    )
  )
  (princ)
)
(princ "\\nLoaded PDF2DWG${o} (single working drawing page worker).")
(princ)
`}const QT=[["EQUIP","f_Equip"],["EQUIP_INT","f_Equip_Int"],["INST","f_Inst"],["PIPE_INLINE","f_Pipe_Inline"],["PIPE_PRI","f_Pipe_Pri"],["PIPE_SEC","f_Pipe_Sec"],["MISC","f_Misc"],["TEXT","f_gen_Text"]];function JT(a){const s=new Map(a.map(o=>[o.trim().toUpperCase(),o.trim()]));return QT.flatMap(([o,i])=>{if(s.has(o.toUpperCase()))return[];const l=s.get(i.toUpperCase());return l?[[o,l]]:[]})}function oy(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function e2(a,s){const o=s.map(([i,l])=>`(${oy(i.toUpperCase())} . ${oy(l)})`).join(`
    `);return`
(setq *${a}-pdf-layer-aliases* '(
    ${o}
))

(defun ${a}-approved-layer (name)
  (car
    (vl-remove-if-not
      '(lambda (entry) (= (strcase (car entry)) (strcase name)))
      *p2dwg-approved-layers*
    )
  )
)

(defun ${a}-valid-layer-name-p (name / forbidden character)
  (setq forbidden '("<" ">" "/" "\\\\" "\\"" ":" ";" "?" "*" "|" "=" ","))
  (and
    name
    (/= name "")
    (<= (strlen name) 255)
    (not
      (vl-some
        '(lambda (character) (vl-string-search character name))
        forbidden
      )
    )
  )
)

(defun ${a}-pdf-layer-target (source / suffix approved alias)
  (if (and
        (>= (strlen source) 4)
        (= (strcase (substr source 1 4)) "PDF_")
      )
    (progn
      (setq suffix (substr source 5))
      (setq approved (${a}-approved-layer suffix))
      (if approved
        (car approved)
        (progn
          (setq alias (assoc (strcase suffix) *${a}-pdf-layer-aliases*))
          (if alias
            (progn
              (setq approved (${a}-approved-layer (cdr alias)))
              (if approved (car approved) suffix)
            )
            suffix
          )
        )
      )
    )
    nil
  )
)

(defun ${a}-set-imported-layer-and-bylayer (selection source target / index entity data layer-name updated changed)
  (setq index 0 changed 0)
  (while (< index (sslength selection))
    (setq entity (ssname selection index))
    (setq data (entget entity))
    (setq layer-name (if (assoc 8 data) (cdr (assoc 8 data)) ""))
    (if (member (strcase layer-name) (list (strcase source) (strcase target)))
      (progn
        ; Remove explicit true-color overrides so the destination layer controls appearance.
        (setq updated
          (vl-remove-if
            '(lambda (pair) (member (car pair) '(420 430)))
            data
          )
        )
        (setq updated (${a}-put-group 8 target updated))
        (setq updated (${a}-put-group 62 256 updated))
        (if (not (entmod updated))
          (p2dwg-raise
            (strcat "Could not move imported geometry from layer " source
              " to " target " and set its color ByLayer."))
        )
        (entupd entity)
        (setq changed (1+ changed))
      )
    )
    (setq index (1+ index))
  )
  changed
)

(defun ${a}-pdf-layer-sources (selection / index entity data name result)
  (setq index 0 result nil)
  (while (< index (sslength selection))
    (setq entity (ssname selection index))
    (setq data (entget entity))
    (setq name (if (assoc 8 data) (cdr (assoc 8 data)) ""))
    (if (and
          (>= (strlen name) 4)
          (= (strcase (substr name 1 4)) "PDF_")
          (not (member (strcase name) (mapcar 'strcase result)))
        )
      (setq result (cons name result))
    )
    (setq index (1+ index))
  )
  (reverse result)
)

(defun ${a}-preserve-pdf-source-layer (selection source target / source-record target-record updated color linetype weight count)
  ; Keep selected raw geometry on PDF_* layers so a confirmed replacement can
  ; archive only its own source entities later. Copy visual standards, not names.
  (setq source-record (tblobjname "LAYER" source))
  (setq target-record (tblsearch "LAYER" target))
  (if (and source-record target-record)
    (progn
      (setq color (cdr (assoc 62 target-record)))
      (setq linetype (cdr (assoc 6 target-record)))
      (setq weight (cdr (assoc 370 target-record)))
      (setq updated (entget source-record))
      (if color (setq updated (${a}-put-group 62 (abs color) updated)))
      (if linetype (setq updated (${a}-put-group 6 linetype updated)))
      (if weight (setq updated (${a}-put-group 370 weight updated)))
      (if (not (entmod updated))
        (p2dwg-raise (strcat "Could not apply approved appearance to source layer " source ".")))
      (setq count (${a}-set-imported-layer-and-bylayer selection source source))
      (list count "SOURCE_PRESERVED")
    )
    nil
  )
)

(defun ${a}-normalize-pdf-import-layers (selection / sources source target count mode preserved)
  (setq sources (${a}-pdf-layer-sources selection))
  (foreach source sources
    (setq count 0)
    (setq target (${a}-pdf-layer-target source))
    (if (and target (${a}-valid-layer-name-p target))
      (progn
        (setq preserved (${a}-preserve-pdf-source-layer selection source target))
        (if preserved
          (progn
            (setq count (car preserved))
            (setq mode (cadr preserved))
          )
          (progn
            (setq count (${a}-set-imported-layer-and-bylayer selection source source))
            (setq mode "SOURCE_PRESERVED_STYLE_UNAVAILABLE")
          )
        )
        (${a}-batch-log
          (strcat "PDF_SOURCE_LAYER_PRESERVED|" source "|" target "|MODE=" mode
            "|ENTITIES=" (itoa (if count count 0)))
        )
      )
      (progn
        (setq count (${a}-set-imported-layer-and-bylayer selection source source))
        (${a}-batch-log
          (strcat "PDF_LAYER_NORMALIZATION_SKIPPED|" source
            "|REASON=INVALID_STRIPPED_LAYER_NAME|ENTITIES=" (itoa count))
        )
      )
    )
  )
  (prompt
    (strcat "\\nPDF import layer cleanup complete: " (itoa (length sources))
      " PDF-prefixed layer(s) checked; entity colors use ByLayer."))
  T
)
`}const iy=25.4/72,Tl=.005,t2=1e-6,a2=1e3;function n2(a,s){if(!Number.isFinite(a.width)||!Number.isFinite(a.height)||a.width<1||a.height<1||a.width>1e5||a.height>1e5)return null;const o=a.width*iy,i=a.height*iy;if(!s)return null;const{widthMm:l,heightMm:p}=s;if(!Number.isFinite(l)||!Number.isFinite(p)||l<=0||p<=0)return null;const g=Math.abs(o-l)/l,h=Math.abs(i-p)/p;if(g>Tl||h>Tl)return null;const m=a.width/a.height,u=l/p;if(Math.abs(m-u)/u>Tl)return null;const b=l/a.width,E=p/a.height,x=(b+E)/2,R=Math.abs(b-E)/x;return!Number.isFinite(x)||x<t2||x>a2||R>Tl?null:{scaleFactor:1,method:"TITLE_BLOCK_PAGE_SIZE",pageWidthMm:o,pageHeightMm:i,targetWidthMm:l,targetHeightMm:p}}const s2=["RAW","CANDIDATE","MATCHED","CONFIRMED","UNMATCHED","NEEDS_REVIEW"];function r2(a){return`
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
                (setq signatures (cons signature signatures))
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
                (setq candidate-index (1+ candidate-index))
                (setq candidate-id (strcat "C-" (if (< candidate-index 10) "000" (if (< candidate-index 100) "00" (if (< candidate-index 1000) "0" ""))) (itoa candidate-index)))
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
                                                  geometry-records page-bounds candidate-count)
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
      "|AUTO_MATCH=GATED"))
  (if (not *p2dwg-geometry-scan-path*)
    (p2dwg-raise "Geometry scan output path is unavailable; page not saved."))
  (${a}-record-mapping active-imported "NEEDS_REVIEW" "AUTO-GROUPING-GATE" nil)
  (setq log-handle (open *p2dwg-geometry-scan-path* "a"))
  (if (null log-handle)
    (p2dwg-raise "Cannot write AUTOCAD_GEOMETRY_SCAN.log. Choose a writable output folder."))
  (write-line
    (strcat "SCAN|" *p2dwg-source-alias* "|" (itoa *p2dwg-source-page*)
      "|ENTITIES=" (itoa (sslength active-imported))
      "|STATUS=CANDIDATES_REVIEW_REQUIRED|AUTO_MATCH=GATED")
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
  (setq candidate-count
    (${a}-candidate-groups (reverse geometry-records) page-bounds log-handle))
  (close log-handle)
   (${a}-write-text-snapshot active-imported)
  (prompt
    (strcat
      "\\nWhole-page geometry inventory complete for " (itoa (sslength active-imported))
      " imported entities; " (itoa candidate-count)
      " non-destructive geometry candidate group(s) logged. Automatic matching is advisory only; the next prompt supports manual, one-symbol-at-a-time block insertion after confirmation."))
  (${a}-batch-log
    (strcat "WHOLE_PAGE_GEOMETRY_SCAN_COMPLETED|" *p2dwg-source-alias* "|"
      (itoa *p2dwg-source-page*) "|STATUS=CANDIDATES_REVIEW_REQUIRED|CANDIDATES="
      (itoa candidate-count) "|AUTO_MATCH=GATED"))
  T)
`}function o2(a){return`
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

(defun ${a}-review-text (imported / style selection index entity role answer record target-layer choice entry count layers)
  (setq style (${a}-arial-style) count 0)
  (setq layers (vl-remove-if-not '(lambda (entry)
    (and (not (wcmatch (strcase (car entry)) "PDF_*"))
      (wcmatch (strcase (car entry)) "*TEXT*,*ANNOT*,*NOTE*,*TAG*"))) *p2dwg-approved-layers*))
  (if (null layers)
    (prompt "\\nNEEDS_REVIEW: approve a final text/annotation layer before standardizing loose text. PDF text remains visible."))
  (if (and style layers)
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
                (setq record (${a}-choose-text-record) target-layer nil index 1)
                (foreach entry layers
                  (prompt (strcat "\\n  " (itoa index) ") Approved final text layer: " (car entry)))
                  (setq index (1+ index)))
                (if (and record layers)
                  (progn
                    (initget 6) (setq choice (getint "\\nChoose the correct approved final text layer: "))
                    (if (and choice (<= choice (length layers)))
                      (setq target-layer (car (nth (1- choice) layers))))))
                (if (and record target-layer)
                  (if (${a}-review-one-text entity style target-layer record role) (setq count (1+ count)))))))
          (prompt "\\nSelect one live imported TEXT/MTEXT item, not a title block, archive or geometry."))
        (${a}-prepare-source-layer-review)
        (prompt "\\nSelect another loose PDF text item, or Enter to finish:")
        (setq selection (ssget)))
      (${a}-batch-log (strcat "TEXT_FINALIZED|COUNT=" (itoa count) "|FONT=Arial Narrow|HEIGHT=PRESERVED"))))
  T)
`}function i2(a){return`
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

(defun ${a}-arial-style-worker (/ font styles style entry typeface bold italic charset pitch)
  (setq font (findfile "arialn.ttf"))
  (if (and (null font) (getenv "WINDIR"))
    (setq font (findfile (strcat (getenv "WINDIR") "/Fonts/arialn.ttf"))))
  (if (null font) (p2dwg-raise "Arial Narrow (arialn.ttf) is missing. No font substitution is allowed."))
  (setq styles (vla-get-TextStyles (vla-get-ActiveDocument (vlax-get-acad-object))))
  (setq entry (tblsearch "STYLE" "P2DWG_ARIAL_NARROW"))
  (if entry
    (progn
      (setq style (vla-item styles "P2DWG_ARIAL_NARROW"))
      ; Never silently change an existing shared style, including XREF styles.
      (vla-GetFont style 'typeface 'bold 'italic 'charset 'pitch)
      (if (or (/= (strcase typeface) "ARIAL NARROW")
              (= bold :vlax-true) (= italic :vlax-true)
              (/= (cdr (assoc 40 entry)) 0.0)
              (/= (cdr (assoc 41 entry)) 1.0)
              (/= (cdr (assoc 50 entry)) 0.0))
        (p2dwg-raise "P2DWG_ARIAL_NARROW already exists with incompatible settings. Review it; it was not overwritten.")))
    (progn
      (setq style (vla-Add styles "P2DWG_ARIAL_NARROW"))
      (vla-put-FontFile style font)
      (vla-SetFont style "Arial Narrow" :vlax-false :vlax-false 0 34)
      (vla-put-Height style 0.0)
      (vla-put-Width style 1.0)
      (vla-put-ObliqueAngle style 0.0)))
  (vla-GetFont style 'typeface 'bold 'italic 'charset 'pitch)
  (if (or (/= (strcase typeface) "ARIAL NARROW")
          (/= (strcase (vl-filename-base (vla-get-FontFile style))) "ARIALN"))
    (p2dwg-raise "AutoCAD did not confirm Arial Narrow. Text remains in review."))
  "P2DWG_ARIAL_NARROW")

(defun ${a}-arial-style (/ result)
  (setq result (vl-catch-all-apply '${a}-arial-style-worker nil))
  (if (vl-catch-all-error-p result)
    (progn
      (${a}-batch-log (strcat "NEEDS_REVIEW|ARIAL_NARROW|" (vl-catch-all-error-message result)))
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
  (setq data (${a}-put-group 7 style data))
  (if target-layer (setq data (${a}-put-group 8 target-layer data)))
  (if (= kind "MTEXT")
    (progn
      (setq content (${a}-font-only-content (${a}-text-content entity)) parts nil)
      (while (> (strlen content) 250)
        (setq parts (append parts (list (cons 3 (substr content 1 250)))) content (substr content 251)))
      (setq data (vl-remove-if '(lambda (pair) (member (car pair) '(1 3))) data)
        data (append data parts (list (cons 1 content))))))
  (if (not (and (entmod data) (entupd entity)
                (equal before (${a}-text-geometry entity) 0.00000001)
                (= (cdr (assoc 7 (entget entity))) style)))
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
`}function l2(a){return`
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

(defun ${a}-write-text-snapshot (imported / path stream index entity data layer record count first)
  ; Snapshot failures never fail or modify the DWG; this is a separate local audit file.
  (setq path *p2dwg-text-snapshot-path* stream nil count 0 first T)
  (if (and path (not (findfile path)))
    (setq stream (open path "w")))
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
                 (wcmatch (strcase layer) "PDF_*")
                 (not (wcmatch (strcase layer) "PDF_DONE_*")))
          (progn
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
        (strcat "TEXT_SNAPSHOT_WRITTEN|PATH=" path "|RECORDS=" (itoa count)))
      (prompt (strcat "\\nLocal PDF text snapshot written: " path))
      T)
    (progn
      (${a}-batch-log
        (strcat "TEXT_SNAPSHOT_SKIPPED|PATH="
          (if path path "UNAVAILABLE")
          "|REASON=" (if (and path (findfile path)) "EXISTS" "OPEN_FAILED")))
      nil))
)
`}function c2(a){return`
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
`}function d2(a){return["PROJECT_TITLE_BLOCK_SCOPE_V1",`workspaceType=${a.workspaceType}`,`projectId=${a.groupId}`,`titleBlockId=${a.titleBlockId}`,`titleBlockPath=${a.titleBlockPath}`,`xrefName=${a.xrefName}`,`expectedSizeMm=${a.expectedSize.widthMm}x${a.expectedSize.heightMm}`,`version=${a.version}`,""].join(`
`)}function u2(a,s,o,i,l=[],p=[],g=[]){const h=String(a).padStart(2,"0"),m=`PDF2DWG${h}`,u=`p2dwg${h}`,y=s2.map(Et).join(" "),b=o.map(N=>`(${Et(N.fallbackCategory.toLowerCase())} ${Et(N.blockName)} ${Et(N.sourcePath)} ${Et(N.targetLayer)} ${N.wipeoutBoundary?k1(N.wipeoutBoundary):"nil"} ${Et(N.blockAssetId)} (${(N.requiredShapeFonts??[]).map(Et).join(" ")}))`).join(`
    `),E=i.filter(N=>N.category==="layer").filter(N=>N.name.trim().toUpperCase()!=="0").map(N=>{const T=Number(N.detail.match(/(?:^|;)color=(\d+)/i)?.[1]??7),_=Number(N.detail.match(/(?:^|;)lineweight=(-?\d+)/i)?.[1]??25),w=[-3,-2,-1].includes(_)||Number.isInteger(_)&&_>=0&&_<=211,P=N.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]??"CONTINUOUS";return`(${Et(N.name)} ${Number.isInteger(T)&&T>0&&T<=255?T:7} ${w?_:25} ${Et(P)})`}).join(`
    `),x=i.filter(N=>N.category==="layer").map(N=>N.name.trim()).filter(Boolean),R=JT(x),C=i.filter(N=>N.category==="textStyle").map(N=>{const T=(P,k)=>N.detail.match(new RegExp(`(?:^|;)${P}=([^;]*)`,"i"))?.[1]??k,_=(P,k)=>{const I=Number(T(P,String(k)));if(!Number.isFinite(I)||P==="height"&&I<0||P==="width"&&I<=0)throw new Error(`Approved text style "${N.name}" has an invalid ${P}. Re-review the supplied CAD text format.`);return String(I)},w=T("font","").trim();if(!w)throw new Error(`Approved text style "${N.name}" has no font. Re-review it instead of substituting a default font.`);return`(${Et(N.name)} ${_("height",0)} ${_("width",1)} ${_("oblique",0)} ${Et(w)} ${Et(T("bigfont",""))})`}).join(`
    `),D=i.filter(N=>N.category==="linetype").filter(N=>!["CONTINUOUS","BYLAYER","BYBLOCK"].includes(N.name.trim().toUpperCase())).flatMap(N=>{const T=qb(N.name,N.detail);if(!T)throw new Error(`Approved linetype "${N.name}" has an unsupported or incomplete definition. Re-extract it with the current extractor; the runner will not omit its marks or substitute Continuous.`);const _=N.detail.match(/(?:^|;)description=([^;]*)/i)?.[1]?.trim()||N.name,w=T.segments.map(P=>{const k=[String(P.length),String(P.flags)];return P.flags===4&&k.push(String(P.shapeNumber),Et(P.styleName),Et(P.shapeFile),String(P.scale),String(P.rotation),String(P.offsetX),String(P.offsetY)),`(${k.join(" ")})`}).join(" ");return[`(${Et(N.name)} ${Et(_)} ${String(T.patternLength)} (${w}))`]}).join(`
    `),S=l.map(N=>`(${Et(N.stableId.toUpperCase())} ${Et(N.itemTag.trim())} ${Et(N.type)} ${N.pageNumber} (${li.map(T=>`(${Et(T.toUpperCase())} . ${Et(T==="itemTag"?N.itemTag.trim():N.fields?.[T]??"")})`).join(" ")}))`).join(`
    `);return v2(i),`; Local AutoCAD runner. The matching source PDF is packaged separately.
; Copyright (c) 2026 gaurav.cbiindia.
; Run command ${m} in AutoCAD for Windows.
; Each imported entity is stamped with a generic source alias and source page.

(vl-load-com)
(setq *p2dwg-attribute-rules* '(${p.map(N=>`(${Et(N.attributeTag)} ${Et(N.edeField.toUpperCase())} ${Et(N.valueType)} ${Et(N.textZone)})`).join(" ")}))
(setq *p2dwg-conflicting-tags* '(${g.map(N=>Et(N.toUpperCase())).join(" ")}))
(if (not (boundp '*p2dwg-batch-mode*)) (setq *p2dwg-batch-mode* nil))
(setq *p2dwg-approved-symbols* '(
    ${b}
))
(setq *p2dwg-approved-layers* '(
    ${E}
))
(setq *p2dwg-approved-text-styles* '(
    ${C}
))
(setq *p2dwg-approved-linetypes* '(
    ${D}
))
(setq *p2dwg-ede-records* '(
    ${S}
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

(defun ${u}-set-layer-standard (name color weight linetype / data updated)
  (setq data (tblsearch "LAYER" name))
  (if data
    (progn
      (setq updated (${u}-put-group 62 color data))
      (setq updated (${u}-put-group 6 linetype updated))
      (setq updated (${u}-put-group 370 weight updated))
      (entmod updated)
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

(defun ${u}-set-insert-layer (entity layer-name / data entity-type)
  (if (and entity (tblsearch "LAYER" layer-name))
    (progn
      (setq data (entget entity))
      (setq entity-type (cdr (assoc 0 data)))
      (if (equal (strcase entity-type) "INSERT")
        (progn
          (if (assoc 8 data)
            (setq data (subst (cons 8 layer-name) (assoc 8 data) data))
            (setq data (append data (list (cons 8 layer-name))))
          )
          (if (entmod data)
            (progn
              (entupd entity)
              (equal (strcase (cdr (assoc 8 (entget entity)))) (strcase layer-name))
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

(defun ${u}-pdf-source-layer-p (name / normalized)
  (setq normalized (if name (strcase name) ""))
  (and
    (>= (strlen normalized) 4)
    (= (substr normalized 1 4) "PDF_")
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
        ; An omitted regapp does not erase its XData. Explicitly clear only our
        ; link app before restoring the full pre-transaction entity snapshot.
        (entmod (append (entget entity) (list (list -3 (list "PIDMAPLINK")))))
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

(defun ${u}-tag-page-entity (entity / data)
  (if (and entity (regapp "PIDPAGE"))
    (progn
      (setq data (entget entity))
      (entmod
        (append
          data
          (list
            (list
              -3
              (list
                "PIDPAGE"
                (cons 1000 *p2dwg-source-alias*)
                (cons 1070 *p2dwg-source-page*)
                (cons 1000 *p2dwg-job-id*)
                (cons 1000 *p2dwg-source-id*)
                (cons 1000 *p2dwg-source-hash*)
                (cons 1000 *p2dwg-source-name*)
                (cons 1000 *p2dwg-scale-status*)
                (cons 1040 *p2dwg-effective-scale*)
              )
            )
          )
        )
      )
      (entupd entity)
    )
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

(defun ${u}-stamp-page (selection / index entity)
  (if selection
    (progn
      (setq index 0)
      (while (< index (sslength selection))
        (setq entity (ssname selection index))
        (${u}-tag-page-entity entity)
        (setq index (1+ index))
      )
    )
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

(defun ${u}-calibrate-import (selection / reference reference-name known-length
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
        (strcat "SCALE_UNVERIFIED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*)
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
        (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*) "|CALIBRATION_INPUT"))
      (p2dwg-raise "Scale calibration was cancelled. This page was not saved.")
    )
  )
  (setq measured (distance first-point second-point))
  (if (<= measured 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*) "|INVALID_MEASUREMENT"))
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
        (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*) "|VERIFY_INPUT"))
      (p2dwg-raise "Scale verification was cancelled. This page was not saved.")
    )
  )
  (setq checked-length (distance check-first check-second))
  (if (<= checked-length 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${u}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*) "|ZERO_REMEASUREMENT"))
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
        (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*)
          "|PRIMARY=" reference-name "|ERROR_PERCENT=" (rtos error-percent 2 4)))
      (p2dwg-raise
        (strcat "Scale verification missed the 0.5% tolerance ("
          (rtos error-percent 2 4) "%). This page was not saved.")
    )
  )
  )
  (${u}-batch-log
    (strcat "SCALE_PRIMARY_REFERENCE|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*)
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
            (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_INPUT|" cross-name))
          (p2dwg-raise "The standard cross-check was cancelled. This page was not saved.")
        )
      )
      (setq cross-measured (distance cross-first cross-second))
      (if (<= cross-measured 0.0)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${u}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_ZERO_LENGTH|" cross-name))
          (p2dwg-raise "The standard cross-check could not measure the symbol side.")
        )
      )
      (setq cross-error
        (* 100.0 (/ (abs (- cross-measured cross-length)) cross-length))
      )
      (${u}-batch-log
        (strcat "SCALE_REFERENCE_CROSSCHECK|SOURCE_${h}.pdf|"
          (itoa *p2dwg-source-page*) "|REFERENCE=" cross-name
          "|KNOWN_MM=" (rtos cross-length 2 4)
          "|REMEASURED_MM=" (rtos cross-measured 2 4)
          "|ERROR_PERCENT=" (rtos cross-error 2 4)
          "|TOLERANCE_PERCENT=0.5"))
      (if (> cross-error 0.5)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${u}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*)
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
      (strcat "SCALE_REFERENCE_CROSSCHECK_SKIPPED|SOURCE_${h}.pdf|"
        (itoa *p2dwg-source-page*) "|OTHER_STANDARD_NOT_PRESENT"))
  )
  (setq *p2dwg-scale-status* "VERIFIED")
  (${u}-batch-log
    (strcat "SCALE_VERIFIED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*)
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
          "\\nConfirm this page was checked for confidential details and PDF symbols; every uncertain item remains visible or clouded for review? [Yes/No]: "
        )
      )
      (= (strcase (if answer answer "No")) "YES")
  )
)

${r2(u)}
${i2(u)}
${l2(u)}
${c2(u)}
${o2(u)}
${e2(u,R)}
${ZT(a,s)}
`}function p2(a,s,o){const i=a.map((p,g)=>{const h=g+1;return{documentNumber:h,sourceId:p.sourceId??`SOURCE_${String(h).padStart(2,"0")}`,sourceFile:`SOURCE_${String(h).padStart(2,"0")}.pdf`,sourceName:p.sourceName??`PDF ${h}`,sha256:p.sourceHash??"",pageCount:p.pageCount}}),l=a.flatMap((p,g)=>(p.pageSizesPoints??[]).flatMap((h,m)=>{const u=n2(h,s?.expectedSize);return u?[{documentNumber:g+1,pageNumber:m+1,scaleFactor:u.scaleFactor,method:u.method,pageWidthMm:u.pageWidthMm,pageHeightMm:u.pageHeightMm,targetWidthMm:u.targetWidthMm,targetHeightMm:u.targetHeightMm}]:[]}));return KT(i,!!s,o,l)}function f2(){return`param([Parameter(Mandatory=$true)][int]$ExpectedCount)
$ErrorActionPreference = 'Stop'
try {
  $manifestPath = Join-Path $PSScriptRoot 'batch_manifest.json'
  if (-not (Test-Path -LiteralPath $manifestPath -PathType Leaf)) { throw 'batch_manifest.json is missing' }
  $manifest = Get-Content -LiteralPath $manifestPath -Raw | ConvertFrom-Json
  if ($manifest.schemaVersion -ne 1) { throw 'Unsupported batch manifest schema' }
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
  Write-Output "BATCH_MANIFEST_VERIFIED|PDFS=$($entries.Count)"
  exit 0
} catch {
  [Console]::Error.WriteLine("BATCH_MANIFEST_FAILED|$($_.Exception.Message)")
  exit 1
}
`}function h2(a,s){const o=g=>{const h=[2166136261,2654435769,2246822507,3266489909],m=[16777619,1540483477,668265261,374761393];for(const u of g)for(let y=0;y<h.length;y+=1)h[y]=Math.imul(h[y]^u,m[y])>>>0;return h.map(u=>u.toString(16).padStart(8,"0")).join("")},i=a.map((g,h)=>[h+1,g.sourceHash?.toLowerCase()??o(g.pdfBytes),g.pageCount,g.discipline,g.sourceId??"",g.sourceName??"",g.originalName??"",g.projectId??"",g.titleBlockGroupId??"",JSON.stringify(g.pageSizesPoints??[])].join("|")),l=[];for(const g of s)g.path==="RUN_BATCH.lsp"||g.path==="README_LOCAL_AUTOCAD.txt"||/^SOURCE_\d+\.pdf$/i.test(g.path)||l.push(`${g.path}|${g.content.length}|${o(g.content)}`);const p=["LOCAL_AUTOCAD_BATCH_V1",...i.map(g=>`JOB|${g}`),...l.map(g=>`FILE|${g}`)].join(`
`);return o(new TextEncoder().encode(p))}function g2(a,s){return`LOCAL AUTOCAD PDF-TO-DWG RUNNER
 ---------------------------------

This package contains the selected source PDFs and AutoLISP helpers. It does
not contain pre-generated DWG files. The ZIP is prepared in your browser and
is not uploaded to the app. Keep it private because it contains source PDFs.

${a.map((l,p)=>`- PDF ${p+1} (${l.discipline}): ${l.pageCount} page(s) -> ${l.pageCount} native DWG file(s)`).join(`
`)}

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
   neutral output name. The initial PDF scale is derived from
   each page's physical dimensions; no arbitrary scale number is requested.
   The runner no longer asks for a DWT or opens new drawing tabs.
4. The companion processes the queued PDFs sequentially and creates one DWG
   per page. A page that matches the selected title block's sheet ratio is
   at native 1:1 import scale only when the PDF page's physical dimensions
   match its recorded millimetre size. Otherwise, including when no title
   block is selected, AutoCAD asks for a known 12 mm instrument side or
   6/3 mm valve side; without a reliable reference the page is not saved.
   Each page also asks about confidential-detail review, optional Pipe Run
   tagging, and operator-confirmed PDF symbol/block review; keep AutoCAD
   open until the batch finishes. Do not switch drawing tabs during the batch.
   The same working drawing is reused, but each page has a separate output
   filename: BASE_doc-01_page-001.dwg, BASE_doc-01_page-002.dwg, and so on.
   Before clearing a saved page, the runner detaches to a uniquely named
   BASE_working-N.dwg scratch copy. It clears only batch-created objects and
   block definitions, not template objects. Successful scratch copies are
   deleted; any retained scratch file is identified in the progress log.
   The loaded message must include "single working drawing". Old extracted
   helpers do not receive fixes automatically; extract a fresh complete kit.
  ${s?`PROJECT TITLE BLOCK
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
    completed DWG. No later page is processed after failure or unconfirmed
    review. Previously saved page DWGs are not modified. Existing output
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
- AUTOCAD_BATCH_PROGRESS.log records DIRECT_IMPORT_REQUEST,
  DIRECT_IMPORT_CONFIRMED, and FAILED: entries. A failed insert is removed;
  the original page geometry remains for review.

NON-DESTRUCTIVE SOURCE CLEANUP
- Only the manual, operator-confirmed replacement path archives source.
  Whole-page automatic recognition remains gated; a bounding-box fit alone is
  NOT identity evidence. Select only ONE source symbol, confirm the approved
  identity, choose rotation, inspect the fitted preview and confirm its actual
  shape/coverage. The preview must also pass position/scale/rotation/layer checks.
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
  MTEXT font controls change without stripping height/width/oblique overrides.
  No text is turned into outlines; outlined PDF lettering stays for review.
  Missing fonts or a conflicting existing style cause review, not substitution.
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
- Geometry matching is advisory and is not automatic. For each page, answer
  Yes to the PDF symbol review prompt, select one source symbol at a time, and
  choose its matching approved Legends Library block. The source layer selects
  the allowed category (PDF_EQUIP -> equipment, PDF_INST -> instrument,
  PDF_PIPE_INLINE -> inline component). Confirm the block identity and fitted
  preview; uncertain or unmatched source geometry stays visible for review.
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
  Text-format review handles notes, tags and headings separately. Choose the
  approved style and approved text layer for each group. Fixed style heights,
  width factors, oblique settings and fonts are applied to editable TEXT/MTEXT;
  a variable-height style requires the approved height for that role. MTEXT
  font/height/width/oblique/color overrides are removed so they cannot override
  the selected format. Text becomes BYLAYER; contents, placement and rotation
  are retained. Outlined letters are NOT treated as editable text or repaired
  automatically; the log reports skipped non-text objects.
   Other unselected PDF geometry remains in place on its preserved source layer.
   Before saving each page, choose a standard reference visible on that page:
   an instrument side of 12 mm, a valve's long side of 6 mm, or its short side
   of 3 mm. The runner computes one uniform scale factor and applies it only to
   the imported PDF geometry; the selected project title block is not scaled.
   Equipment has no fixed target dimension and retains its depicted relative
   size and proportions. Re-pick the same reference within 0.5%; when the other
   standard category is present, cross-check it with the same tolerance. If the
   standards disagree, the page is not saved and no second scale is applied.
   Skipping, canceling, or failing calibration stops that page. Each page is
   checked independently; do not assume one page's calibrated scale applies to
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
`}function m2(a,s=[],o=[],i=[],l){if(a.length===0||a.some(T=>!Number.isInteger(T.pageCount)||T.pageCount<1||!["PFD","P&ID"].includes(T.discipline)||!(T.pdfBytes instanceof Uint8Array)||T.pdfBytes.length===0||T.pageSizesPoints!==void 0&&(T.pageSizesPoints.length!==T.pageCount||T.pageSizesPoints.some(_=>!Number.isFinite(_.width)||!Number.isFinite(_.height)||_.width<=0||_.height<=0))||typeof T.sourceHash!="string"||!/^[a-f0-9]{64}$/i.test(T.sourceHash)||T.sourceId!==void 0&&!T.sourceId.trim()||T.sourceName!==void 0&&!T.sourceName.trim()))throw new Error("Every runner PDF needs readable bytes and a verified SHA-256 source hash.");const p=a.map((T,_)=>T.sourceId??`SOURCE_${String(_+1).padStart(2,"0")}`);if(new Set(p).size!==p.length)throw new Error("Each selected PDF must have a unique source ID before the runner can be prepared.");if(a.some(T=>(T.edeRecords??[]).some(_=>!/^[0-9A-F]{32}$/i.test(_.stableId)||typeof _.itemTag!="string"||!_.type.trim()||Object.entries(_.fields??{}).some(([w,P])=>!li.includes(w)||typeof P!="string")||!Number.isInteger(_.pageNumber)||_.pageNumber<1||_.pageNumber>T.pageCount)))throw new Error("An EDE link in the AutoCAD runner is invalid. Reopen the EDE record and prepare a fresh runner.");if(a.some(T=>(T.conflictingTags??[]).some(_=>typeof _!="string")))throw new Error("The runner duplicate-tag registry is invalid.");const g=new Set(a.map(T=>T.titleBlockGroupId?.trim()??""));if(g.size>1)throw new Error("Prepare one AutoCAD runner per group so each batch uses only its own title block.");const h=[...g][0]??"";if(h){if(!l||l.groupId!==h)throw new Error("Upload a standalone DWG title block for the selected group before preparing its AutoCAD runner.");const T=new Set(a.map(w=>w.discipline));if(T.size!==1)throw new Error("Prepare separate PFD and P&ID runners so each workspace keeps its own shared title block.");if(l.workspaceType!==[...T][0])throw new Error(`The selected title block belongs to ${l.workspaceType}; choose the matching workspace title block.`);if(!(l.content instanceof Uint8Array)||!l.content.length)throw new Error("The selected group title block is not a valid AutoCAD DWG file.");const _=new TextDecoder().decode(l.content.subarray(0,6));if(!/^AC10\d{2}$/.test(_))throw new Error("The selected group title block is not a valid AutoCAD DWG file.");if(l.titleBlockPath!=="PROJECT_TITLE_BLOCK.dwg"||l.xrefName!=="P2DWG_PROJECT_TITLE_BLOCK"||!l.titleBlockId.trim()||!Number.isInteger(l.version)||l.version<1||!Number.isFinite(l.expectedSize.widthMm)||!Number.isFinite(l.expectedSize.heightMm)||l.expectedSize.widthMm<=0||l.expectedSize.heightMm<=0)throw new Error("The project title-block record is incomplete. Save the title block again in the selected workspace.")}else if(l)throw new Error("A project title block can only be used with PDFs from the same selected group.");const m=a.map(T=>s.filter(_=>(_.discipline===T.discipline||_.discipline==="Shared")&&(_.projectId?_.projectId===T.projectId:!0))),u=[...new Map(m.flat().map(T=>[`${T.blockAssetId}|${T.blockName}|${T.fallbackCategory}`,T])).values()];for(const T of u)if(T.fallbackCategory.trim().toLowerCase()==="valve"){if(!T.wipeoutBoundary)throw new Error(`Valve "${T.blockName}" has no reviewed body mask outline. Re-review the valve in the Legends Library before preparing the AutoCAD runner.`);try{Fs(T.wipeoutBoundary.map(([_,w])=>`${_},${w}`).join(";"))}catch(_){throw new Error(`Valve "${T.blockName}" has an invalid reviewed body mask outline. ${_ instanceof Error?_.message:"Re-review the valve mask."}`)}}const y=new Set(o.map(T=>T.id));if(u.some(T=>!y.has(T.blockAssetId)))throw new Error("An approved symbol refers to a missing locally extracted block drawing.");if(u.some(T=>!T.targetLayer.trim()||T.targetLayer.trim().toUpperCase()==="0"))throw new Error("Every approved block needs an approved non-zero target CAD layer before the AutoCAD runner can be prepared.");const b=new Map,E=new Map,x=new Map,R=new Map,C=[...new Set(u.map(T=>T.blockAssetId))];C.forEach((T,_)=>{const w=o.find(k=>k.id===T),P=`CAD_SYMBOLS/SYMBOL_${String(_+1).padStart(3,"0")}`;if(w.format==="DXF"){const k=Ir(w.content).content,I=new Tb(k).nativeAssetInfo();E.set(T,`${P}.dxf`),b.set(T,`${P}.dxf`),x.set(T,I.requiredShapeFonts),R.set(T,k)}else b.set(T,`${P}.dwg`),E.set(T,`${P}.dwg`),x.set(T,[])});const D={schemaVersion:1,pdfs:a.map((T,_)=>({sourceId:T.sourceId??`SOURCE_${String(_+1).padStart(2,"0")}`,sourceFile:`SOURCE_${String(_+1).padStart(2,"0")}.pdf`,originalName:T.originalName??T.sourceName??`PDF ${_+1}`,originalAlias:T.sourceName??`PDF ${_+1}`,sha256:T.sourceHash.toLowerCase(),pageCount:T.pageCount}))},S=[{path:"RUN_BATCH.lsp",content:new Uint8Array},{path:"batch_manifest.json",content:new TextEncoder().encode(JSON.stringify(D,null,2))},{path:"VERIFY_BATCH.ps1",content:new TextEncoder().encode(f2())},...l?[{path:"PROJECT_TITLE_BLOCK.dwg",content:l.content},{path:"PROJECT_TITLE_BLOCK_SCOPE.txt",content:new TextEncoder().encode(d2(l))}]:[],...o.filter(T=>C.includes(T.id)).map(T=>({path:E.get(T.id),content:R.get(T.id)??T.content})),...u.length?[{path:"CAD_BLOCK_GEOMETRY_INDEX.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,note:"Descriptors are local geometry data, not validated match signatures. Missing or empty descriptors require re-importing the extraction ZIP with its overview DXF or reviewing unsupported geometry.",blocks:u.map(T=>{const _=o.find(I=>I.id===T.blockAssetId),w=_?.geometryDescriptor??null,k=!!(w?.primitives.length&&w.bounds)?"INDEXED":_?.geometryIndexError??(w?"EMPTY_OR_UNSUPPORTED":"OVERVIEW_DXF_REQUIRED");return{blockAssetId:T.blockAssetId,blockName:T.blockName,category:T.fallbackCategory,discipline:T.discipline,targetLayer:T.targetLayer,targetLayerRules:i.find(I=>I.category==="layer"&&I.name.trim().toLowerCase()===T.targetLayer.trim().toLowerCase())?.detail??null,projectScope:T.projectId?"project":"company",indexStatus:k,indexError:_?.geometryIndexError??null,geometry:w}})},null,2))}]:[],...a.flatMap((T,_)=>{const w=String(_+1).padStart(2,"0"),P=s.filter(se=>(se.discipline===T.discipline||se.discipline==="Shared")&&(se.projectId?se.projectId===T.projectId:!0)&&se.blockAssetId&&b.has(se.blockAssetId)).map(se=>{const ee=b.get(se.blockAssetId),le=ee.split("/").at(-1)?.replace(/\.(?:dwg|dxf)$/i,"")??"APPROVED_SYMBOL";return{...se,blockName:le,sourcePath:ee,requiredShapeFonts:x.get(se.blockAssetId)??[]}}),k=i.filter(se=>(se.discipline===T.discipline||se.discipline==="Shared")&&(se.projectId?se.projectId===T.projectId:!0)),I=[...new Map(k.map(se=>[`${se.category}:${se.name.toLowerCase()}`,se])).values()],Z=P.find(se=>!I.some(ee=>ee.category==="layer"&&ee.name.toLowerCase()===se.targetLayer.toLowerCase()));if(Z)throw new Error(`Approved CAD layer "${Z.targetLayer}" is not included in this runner page's approved standards.`);return[{path:`DOC_${w}.lsp`,content:new TextEncoder().encode(u2(_+1,T.pageCount,P,I,T.edeRecords??[],dp(T.attributeRules??[]),T.conflictingTags??[]))},{path:`SOURCE_${w}.pdf`,content:T.pdfBytes}]})],N=h2(a,S);return S[0].content=new TextEncoder().encode(p2(a,l,N)),S.push({path:"README_LOCAL_AUTOCAD.txt",content:new TextEncoder().encode(g2(a,!!l))}),ub(S)}function ly(a,s){const o=a.match(new RegExp(`(?:^|;)${s}=\\(([^)]*)\\)`,"i"));if(!o)return null;const i=o[1].trim();return!i||/^nil$/i.test(i)?[]:i.split(/[\s,]+/)}function y2(a,s){const o=a.match(new RegExp(`(?:^|;)${s}=(.*?)(?=;[A-Za-z][A-Za-z0-9_]*=|$)`,"i"));if(!o)return null;const i=[],l=/\(\s*(\d+)\s*\.\s*(?:"((?:\\.|[^"])*)"|([^\s)]+))\s*\)/g;let p;for(;(p=l.exec(o[1]))!==null;){const g=p[2]===void 0?p[3]:p[2].replaceAll('\\"','"').replaceAll("\\\\","\\");i.push({code:Number(p[1]),value:g})}return i}function b2(a){let s=0;for(const i of a.toUpperCase())s=s*31+i.charCodeAt(0)>>>0;return`P2DWG_${a.toUpperCase().replace(/[^A-Z0-9_-]/g,"_").slice(0,16)||"SHAPE"}_${s.toString(36).toUpperCase()}`}function qb(a,s){const o=ly(s,"pattern"),i=ly(s,"patternFlags")??[];if(!o?.length||i.length>0&&i.length!==o.length)return null;const l=o.map(Number),p=i.map(Number);if(l.some(D=>!Number.isFinite(D))||l.every(D=>D===0)||l.reduce((D,S)=>D+Math.abs(S),0)<=0||p.some(D=>!Number.isInteger(D)))return null;const g=y2(s,"complexData"),h=new Map,m=/\(\s*"((?:\\.|[^"])*)"\s*\.\s*"((?:\\.|[^"])*)"\s*\)/g,u=s.match(/(?:^|;)shapeFonts=(.*)$/i);let y;if(u)for(;(y=m.exec(u[1]))!==null;)h.set(y[1].replaceAll('\\"','"').toUpperCase(),y[2].replaceAll('\\"','"'));const b=[];let E=0;for(let D=0;D<l.length;D+=1){const S=p[D]??0;let N=g?.findIndex((he,de)=>de>=E&&he.code===49)??-1;if(N<0||!g){if(S!==0)return null;b.push({length:l[D],flags:0});continue}const T=g[N];if(Math.abs(Number(T.value)-l[D])>1e-8)return null;const _=g[N+1];if(!_||_.code!==74)return null;const w=Number(_.value);if(!Number.isInteger(w)||w!==S)return null;if(E=N+2,w===0){b.push({length:l[D],flags:0});continue}if(w!==4)return null;const P=he=>{for(;E<g.length&&g[E].code!==he&&g[E].code!==49;)E+=1;if(E>=g.length||g[E].code!==he)return null;const de=g[E].value;return E+=1,de},k=Number(P(75)),I=P(340),Z=Number(P(46)),se=Number(P(50)),ee=Number(P(44)),le=Number(P(45)),Te=I?h.get(I.toUpperCase()):void 0;if(!Number.isInteger(k)||k<=0||!I||!Te||!/^[a-z0-9_.-]+\.shx$/i.test(Te)||![Z,se,ee,le].every(Number.isFinite)||Z<=0)return null;b.push({length:l[D],flags:4,shapeNumber:k,styleName:b2(a),shapeFile:Te,scale:Z,rotation:se,offsetX:ee,offsetY:le})}const x=l.reduce((D,S)=>D+Math.abs(S),0),R=s.match(/(?:^|;)patternLength=([^;]+)/i)?.[1],C=R===void 0?x:Number(R);return!Number.isFinite(C)||C<=0||Math.abs(C-x)>Math.max(1e-7,x*1e-7)?null:{patternLength:C,segments:b}}function v2(a){const s=new Set(["CONTINUOUS","BYLAYER","BYBLOCK"]),o=new Map(a.filter(i=>i.category==="linetype").map(i=>[i.name.trim().toUpperCase(),i]));for(const i of a.filter(l=>l.category==="layer")){const l=i.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!l||s.has(l.toUpperCase()))continue;const p=o.get(l.toUpperCase());if(!p||!qb(p.name,p.detail))throw new Error(`Layer "${i.name}" requires linetype "${l}", but its complete supported definition is not approved. Review/re-extract that linetype first; the runner will not silently substitute Continuous.`)}}function Et(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function E2(a,s){return a===null||a.has(s)}function w2(a,s){return s===null?[...a]:a.filter(o=>s.has(o))}function x2(a,s,o){const i=new Set(a??s);return i.has(o)?i.delete(o):i.add(o),i}function S2(a,s,o){if(a===null)return null;const i=new Set(o),l=new Set([...a].filter(p=>i.has(p)));for(const p of o)s.has(p)||l.add(p);return l}function T2(a,s,o=""){const i=a.filter(u=>u.reviewStatus==="reviewed"&&u.sourceKind==="extracted-dwg"&&(u.scope!=="project"||!!(o&&u.projectId===o))),l=(u,y)=>u.fields.find(b=>b.label===y)?.value?.trim()??"",p=i.filter(u=>[s,"Shared"].includes(l(u,"Source discipline"))),g=p.filter(u=>u.category==="layer"&&l(u,"CAD name")&&l(u,"CAD name").toUpperCase()!=="0"),h=new Set(g.map(u=>l(u,"CAD name").toLowerCase()));return{symbols:p.filter(u=>u.category==="symbol"&&["Source drawing ID","Block asset ID","Block name","Fallback category"].every(y=>l(u,y))&&h.has(l(u,"Target CAD layer").toLowerCase())).length,layers:g.length,textStyles:p.filter(u=>u.category==="textStyle").length,otherDisciplineSymbols:i.filter(u=>u.category==="symbol"&&["PFD","P&ID"].includes(l(u,"Source discipline"))&&l(u,"Source discipline")!==s).length}}const Qu=1024*1024,A2=500*Qu;function Mo(a){return a<1024?`${a} B`:a<Qu?`${(a/1024).toFixed(1)} KB`:`${(a/Qu).toFixed(1)} MB`}function D2(a){const s=a.type.split(";",1)[0].trim().toLowerCase(),o=a.name.trim().toLowerCase().endsWith(".pdf");return s==="application/pdf"||o}async function C2(a){const[s,o]=await Promise.all([nn(()=>import("./pdf-TYrZqVzP.js"),[]),nn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);s.GlobalWorkerOptions.workerSrc=o.default;const i=s.getDocument({data:new Uint8Array(a.slice(0))});try{return(await i.promise).numPages}finally{await i.destroy().catch(()=>{})}}async function N2(a){const[s,o]=await Promise.all([nn(()=>import("./pdf-TYrZqVzP.js"),[]),nn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);s.GlobalWorkerOptions.workerSrc=o.default;const l=await s.getDocument({data:new Uint8Array(a.slice(0))}).promise;try{const p=[];for(let g=1;g<=l.numPages;g+=1){const h=await l.getPage(g),m=h.getViewport({scale:1});p.push({width:m.width,height:m.height}),h.cleanup()}return p}finally{await l.destroy().catch(()=>{})}}function k2({discipline:a,groups:s,selectedClientId:o,selectedClientLabel:i,onSelectClient:l}){const[p,g]=q.useState([]),[h,m]=q.useState(null),[u,y]=q.useState(!0),[b,E]=q.useState(""),[x,R]=q.useState(0),[C,D]=q.useState([]),[S,N]=q.useState(null),[T,_]=q.useState(null),[w,P]=q.useState(null),[k,I]=q.useState(null),[Z,se]=q.useState(0),[ee,le]=q.useState(1),[Te,he]=q.useState(null),[de,Y]=q.useState(""),[Q,be]=q.useState(""),[Ae,O]=q.useState([]),[J,F]=q.useState(0),[X,ie]=q.useState(""),[ge,we]=q.useState(null),[Me,qe]=q.useState(null),[wt,pt]=q.useState(!1),[gt,xt]=q.useState(!1),[aa,Rt]=q.useState(""),[U,ce]=q.useState(!1),[fe,B]=q.useState(""),[ue,Ce]=q.useState(!1),[me,Le]=q.useState(""),[Qe,Ve]=q.useState("1"),Ie=q.useRef([]),jt=q.useRef(null),ye=q.useRef(!0),et=q.useRef(!1),nt=q.useRef(0),Wt=q.useRef(new Set),Re=q.useRef(a);Re.current=a;const Da=typeof globalThis.crypto?.subtle<"u",Tt=q.useMemo(()=>Wy(s),[s]),mt=q.useMemo(()=>{const M=new Set(w2(p.map(ae=>ae.id),h));return p.filter(ae=>M.has(ae.id))},[h,p]),Zt=()=>m(null),qt=()=>m(new Set),Ca=M=>{m(ae=>x2(ae,p.map(ve=>ve.id),M))};q.useEffect(()=>{if(be(o),!o){Y("");return}try{const M=gn();Y(M.projects[o]?o:"")}catch{Y("")}},[o]);const lt=q.useCallback((M,ae)=>{if(!ye.current)return;nt.current+=1;const ve=nt.current;D(xe=>[...xe.slice(-5),{id:ve,kind:M,text:ae}])},[]);q.useEffect(()=>{const M=()=>{try{const ae=gn(),ve=o&&ae.projects[o]?[o]:[];O(ve.map((xe,Ne)=>({id:xe,label:Tt.find(Pe=>Pe.id===xe)?.label??`Project ${String(Ne+1).padStart(2,"0")}`}))),we(T2([...ae.companyItems,...de?ae.projects[de]?.items??[]:[]],a,de)),ie(new Date().toLocaleTimeString())}catch(ae){we(null),lt("error",ae instanceof Error?ae.message:"The approved CAD library could not be loaded.")}};return M(),window.addEventListener("focus",M),window.addEventListener("storage",M),window.addEventListener(Zo,M),()=>{window.removeEventListener("focus",M),window.removeEventListener("storage",M),window.removeEventListener(Zo,M)}},[lt,Tt,a,de,J,o]),q.useEffect(()=>{let M=!0;return qe(null),Rt(""),Q?(pt(!0),Pm(Q,a).then(ae=>{M&&qe(ae)}).catch(ae=>{M&&Rt(ae instanceof Error?ae.message:"The local project title block could not be read.")}).finally(()=>{M&&pt(!1)}),()=>{M=!1}):(pt(!1),()=>{M=!1})},[a,Q]),q.useEffect(()=>{Q&&!Tt.some(M=>M.id===Q)&&(be(""),qe(null),Rt(""))},[Tt,Q]);const Ot=q.useCallback(async()=>{try{const[M,ae]=await Promise.all([Cb(a),xT()]);if(!ye.current||Re.current!==a)return;const ve=M.map(Ne=>Ne.id),xe=Wt.current;m(Ne=>S2(Ne,xe,ve)),Wt.current=new Set(ve),g(M),R(ae),E("")}catch(M){ye.current&&E(M instanceof Error?M.message:"Saved PDFs could not be loaded.")}finally{ye.current&&y(!1)}},[a]),Mt=async(M,ae,ve,xe)=>{await wl(M.id,{analysisStatus:"extracting",analysisPagesDone:0,analysisRecordCount:0,analysisMessage:"",autocadStatus:"not-connected"}),ye.current&&await Ot();let Ne;try{Ne=await MT(ae,xe,ve)}catch(Dt){throw ve()?Dt:new Kt("cancelled","EDE extraction paused.")}if(!ve())throw new Kt("cancelled","EDE extraction paused.");await TT(M.id,Ne.pageText);const Pe=qT(Ne.pageText),Je=VT(a==="PFD"?"pfd":"pid",{id:M.id,alias:M.alias},[...Ne.candidates,...Pe]);ye.current&&se(Dt=>Dt+1);const Xe=Ne.pageText.some(Dt=>Dt.searchableText.trim()||Dt.ocrTiles.some($t=>$t.trim())),pa=Je.recordCount||Xe?"needs-review":"no-tags";return await wl(M.id,{analysisStatus:pa,analysisPagesDone:Ne.pages,analysisRecordCount:Je.recordCount,analysisMessage:Ne.ocrPages?`Page text and OCR from ${Ne.ocrPages} page(s) are saved locally. ${Ne.candidates.length} tag candidate(s) and ${Pe.length} note(s) need review.`:`Page text is saved locally. ${Ne.candidates.length} tag candidate(s) and ${Pe.length} note(s) need review.`,autocadStatus:"not-connected"}),{...Je,tagCount:Ne.candidates.length,noteCount:Pe.length}};q.useEffect(()=>{ye.current=!0,y(!0),P(null),le(1),Ot();const M=()=>{Ot()};return window.addEventListener("focus",M),()=>{window.removeEventListener("focus",M),ye.current=!1,Ie.current.forEach(ae=>{ae.cancelled=!0}),Ie.current=[]}},[Ot]),q.useEffect(()=>{if(et.current)return;const M=new URLSearchParams(window.location.search).get("pdf"),ae=p.find(Ne=>Ne.id===M);if(!ae)return;const ve=new URLSearchParams(window.location.search).get("record");ve&&I(ve),et.current=!0,P(ae.id);const xe=Number(new URLSearchParams(window.location.search).get("page"));le(Number.isInteger(xe)&&xe>=1&&xe<=ae.pageCount?xe:1),window.setTimeout(()=>document.querySelector('[data-testid="panel-source-page"]')?.scrollIntoView({behavior:"smooth",block:"center"}),100)},[p]);const yt=async(M,ae,ve)=>{const xe=a,Ne=()=>!M.cancelled&&ye.current&&Re.current===xe;M.state="working";try{if(M.file.size>Gu)throw new Kt("too-large","A PDF is larger than 100 MB and was skipped.");const Pe=await M.file.arrayBuffer();if(!Ne())return;let Je;try{Je=await C2(Pe)}catch(Dt){const $t=Dt?.name;throw $t==="PasswordException"?new Error("A PDF is password-protected. Remove the password and add it again."):$t==="InvalidPDFException"||$t==="FormatError"?new Error("A file is not a valid PDF, or it is damaged."):new Error("A PDF could not be read. It may be damaged.")}if(!Ne())return;if(Je<1)throw new Error("A PDF has no pages.");let Xe;try{Xe=await ty(Pe)}catch{throw new Error("Duplicate check is not supported in this browser, so the PDF was not saved.")}if(!Ne())return;const pa=await ST({discipline:xe,bytes:Pe,pageCount:Je,hash:Xe,originalName:M.file.name},Ne);ae.pagesDone+=Je,ye.current&&(N({total:ve,done:ae.done,pagesDone:ae.pagesDone,active:1,phase:"extracting",currentAlias:pa.alias,pageNow:0,pageTotal:Je}),await Ot());try{const Dt=await Mt(pa,Pe,Ne,($t,ga)=>{ye.current&&N(wn=>wn&&{...wn,phase:"extracting",currentAlias:pa.alias,pageNow:$t,pageTotal:ga})});Ne()&&lt("info",`${pa.alias}: ${Dt.tagCount} tag candidate(s) and ${Dt.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(Dt){const $t=Dt instanceof Kt&&Dt.code==="cancelled",ga=$t?"Extraction paused. Resume it from this saved PDF.":ay(Dt);await wl(pa.id,{analysisStatus:$t?"paused":"failed",analysisMessage:ga}).catch(()=>{}),!$t&&Ne()&&lt("error",`${pa.alias}: ${ga}`)}M.state="done",ye.current&&await Ot()}catch(Pe){M.state="failed",!(Pe instanceof Kt&&Pe.code==="cancelled")&&Ne()&&lt("error",Pe instanceof Error?Pe.message:"A PDF could not be added.")}finally{ae.done+=1,ye.current&&N(Pe=>Pe&&{...Pe,total:ve,done:ae.done,pagesDone:ae.pagesDone,active:0})}},Na=M=>{if(S||u||b||!M.length)return;const ae=M.filter(D2);if(ae.length<M.length&&lt("error",`${M.length-ae.length} file(s) skipped. Choose PDF files only.`),!ae.length)return;const ve=ae.map(Je=>({id:++nt.current,file:Je,cancelled:!1,state:"queued"}));Ie.current=[...Ie.current,...ve];const xe={done:0,pagesDone:0};N({total:ve.length,done:0,pagesDone:0,active:0,phase:"checking"});let Ne=0;(async()=>{for(;Ne<ve.length&&ye.current;){const Je=ve[Ne++];if(Je.cancelled){xe.done+=1;continue}await yt(Je,xe,ve.length)}})().then(()=>{if(Ie.current=Ie.current.filter(Xe=>!ve.includes(Xe)),!ye.current)return;const Je=ve.filter(Xe=>Xe.state==="done").length;Je&&lt("info",`${Je} PDF(s) saved on this device. Check each PDF's EDE status below; AutoCAD is not connected.`),N(null)})},na=async M=>{if(!(S||T)){_(M.id),N({total:1,done:0,pagesDone:0,active:1,phase:"extracting",currentAlias:M.alias,pageNow:0,pageTotal:M.pageCount});try{const ae=await qo(M.id),ve=await Mt(M,ae,()=>ye.current,(xe,Ne)=>{ye.current&&N(Pe=>Pe&&{...Pe,phase:"extracting",pageNow:xe,pageTotal:Ne})});lt("info",`${M.alias}: ${ve.tagCount} tag candidate(s) and ${ve.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(ae){const ve=ay(ae);await wl(M.id,{analysisStatus:"failed",analysisMessage:ve}).catch(()=>{}),lt("error",`${M.alias}: ${ve}`)}finally{N(null),_(null),await Ot()}}},on=()=>{Ie.current.forEach(M=>{M.state!=="done"&&(M.cancelled=!0)}),lt("info","Remaining imports were cancelled. Finished files stay saved.")},Qa=async M=>{he(null);try{await Nb([M]),w===M&&P(null),await Ot()}catch{lt("error","The PDF could not be deleted from local storage.")}},Fn=async()=>{he(null),Ie.current.forEach(M=>{M.cancelled=!0});try{await AT(a),P(null),await Ot()}catch{lt("error","Saved PDFs could not be cleared.")}},ka=async M=>{try{const ae=await qo(M.id),ve=URL.createObjectURL(new Blob([ae],{type:"application/pdf"})),xe=document.createElement("a");xe.href=ve,xe.download=`original-source-${a==="PFD"?"pfd":"pid"}-pdf-${M.aliasNumber}.pdf`,document.body.appendChild(xe),xe.click(),xe.remove(),setTimeout(()=>URL.revokeObjectURL(ve),4e3)}catch{lt("error","The original PDF could not be read for download.")}},En=async M=>{if(!(!M||!Q)){if(M.size>pb){Rt("The project title block is larger than the 100 MB local upload limit."),jt.current&&(jt.current.value="");return}if(Me&&!window.confirm("Replace the saved title block for this project in this browser? The previous local file will be replaced.")){jt.current&&(jt.current.value="");return}xt(!0),Rt("");try{await W1(Q,a,M.name,new Uint8Array(await M.arrayBuffer())),qe(await Pm(Q,a)),Rt("Title block saved for this group in this browser.")}catch(ae){Rt(ae instanceof Error?ae.message:"The project title block could not be saved locally.")}finally{xt(!1),jt.current&&(jt.current.value="")}}},da=async()=>{if(!(!Q||!Me)&&window.confirm("Remove this client folder title block from this browser? Existing generated DWGs are not changed.")){Rt("");try{await Z1(Q,a),qe(null),Rt("Group title block removed from this browser.")}catch(M){Rt(M instanceof Error?M.message:"The project title block could not be removed.")}}},ua=async()=>{if(!mt.length){B("Select at least one PDF to include in the AutoCAD runner.");return}if(!(S!==null||U||gt||u||b)){ce(!0),B("");try{const M=mt.reduce((Ee,Oe)=>Ee+Oe.size,0),ae=Q?await K1(Q,a):null;if(Q&&!ae)throw new Error("Upload a standalone DWG title block for the selected client folder before preparing its AutoCAD runner.");if(M+(ae?.bytes??0)>A2)throw new Error("The saved source PDFs and client title block exceed the 500 MB limit for this local AutoCAD runner package.");const ve=gn();if(de&&!ve.projects[de])throw new Error("That project library is no longer available. Select a current project mapping or use Legends Library only.");const xe=[...ve.companyItems,...de?ve.projects[de]?.items??[]:[]],Pe=xe.filter(Ee=>Ee.category==="symbol"&&Ee.reviewStatus==="reviewed"&&Ee.sourceKind==="extracted-dwg"&&[a,"Shared"].includes(Ee.fields.find(Oe=>Oe.label==="Source discipline")?.value?.trim()??"")).flatMap(Ee=>{const Oe=Ba=>Ee.fields.find(Sn=>Sn.label===Ba)?.value?.trim()??"",ft=Oe("Source drawing ID"),Ht=Oe("Block asset ID"),Ct=Oe("Block name"),bt=Oe("Fallback category"),Bn=Oe("Target CAD layer"),Ea=Oe("Source discipline");if(!ft||!Ht||!Ct||!bt||Ea!=="PFD"&&Ea!=="P&ID"&&Ea!=="Shared")return[];if(!Bn||Bn.toUpperCase()==="0")throw new Error(`Approved block "${Ct}" has no valid target CAD layer. Re-review it and select an approved non-zero layer.`);let wa;if(bt.toLowerCase()==="valve"){const Ba=Oe("Wipeout mask boundary");try{wa=Fs(Ba)}catch(Sn){throw new Error(`Approved valve "${Ct}" has no valid reviewed body mask. Re-review the valve outline before preparing the AutoCAD runner. ${Sn instanceof Error?Sn.message:""}`)}}return[{sourceId:ft,blockAssetId:Ht,blockName:Ct,fallbackCategory:bt,targetLayer:Bn,discipline:Ea,...wa?{wipeoutBoundary:wa}:{},...Ee.scope==="project"&&Ee.projectId?{projectId:Ee.projectId}:{}}]}),Je=xe.flatMap(Ee=>{if(Ee.sourceKind!=="extracted-dwg"||Ee.reviewStatus!=="reviewed"||Ee.category!=="layer"&&Ee.category!=="textStyle"&&Ee.category!=="linetype")return[];const Oe=Ct=>Ee.fields.find(bt=>bt.label===Ct)?.value?.trim()??"",ft=Oe("Source discipline"),Ht=Oe("CAD name");return!Ht||ft!=="PFD"&&ft!=="P&ID"&&ft!=="Shared"?[]:[{name:Ht,category:Ee.category,detail:Oe("Extracted details"),discipline:ft,...Ee.scope==="project"&&Ee.projectId?{projectId:Ee.projectId}:{}}]}),Xe=[...new Set(Pe.map(Ee=>Ee.blockAssetId))],pa=await Promise.all(Xe.map(async Ee=>{const[Oe,ft]=await Promise.all([hb(Ee),fb(Ee)]);return{id:Ee,content:Oe,format:ft.format??"DWG",...ft.geometryDescriptor?{geometryDescriptor:ft.geometryDescriptor}:{}}})),Dt=new Map(pa.map(Ee=>[Ee.id,Ee])),$t=new Map((await Fu()).map(Ee=>[Ee.id,Ee])),ga=new Map;for(const Ee of Pe){const Oe=Dt.get(Ee.blockAssetId)?.geometryDescriptor;if(Oe?.primitives.length&&Oe.bounds)continue;const ft=ga.get(Ee.sourceId)??[];ft.push(Ee),ga.set(Ee.sourceId,ft)}const wn=[];for(const[Ee,Oe]of ga){const ft=$t.get(Ee),Ht=Oe.map(Ct=>Dt.get(Ct.blockAssetId)).filter(Ct=>!!Ct);if(!ft||ft.format!=="DXF"){for(const Ct of Ht)Ct.geometryIndexError=ft?"SOURCE_DWG_REQUIRES_OVERVIEW_DXF":"SOURCE_NOT_AVAILABLE";continue}try{const Ct=await Go(Ee);if(Ct.byteLength>50*1024*1024){for(const Ea of Ht)Ea.geometryIndexError="SOURCE_DXF_TOO_LARGE";continue}const bt=new TextDecoder("windows-1252").decode(Ct),Bn=Il(bt,[...new Set(Oe.map(Ea=>Ea.blockName))]);for(const Ea of Oe){const wa=Dt.get(Ea.blockAssetId);if(!wa)continue;const Ba=Bn.get(Ea.blockName)?.geometryDescriptor;if(!Ba||!Ba.primitives.length||!Ba.bounds){wa.geometryIndexError="BLOCK_NOT_FOUND_OR_UNSUPPORTED";continue}wa.geometryDescriptor=Ba,wn.push({id:wa.id,sourceId:Ee,blockName:Ea.blockName,content:wa.content,geometryDescriptor:Ba})}}catch{for(const Ct of Ht)Ct.geometryIndexError="SOURCE_DXF_UNREADABLE"}}wn.length&&await Bu(wn);const Hs=new Map,$r=ti(a==="PFD"?"pfd":"pid"),Zl=i1($r.flatMap(Ee=>Ee.rows.map(Oe=>({stableId:Oe.id,itemTag:Oe.itemTag})))),Vs=tb(`${a}:${de||"legends-default"}`);for(const Ee of $r)for(const Oe of Ee.rows){if(!Oe.sourcePdfId)continue;const ft=new Set([Number(Oe.sourcePage),...(Oe.sourceLocations??[]).map(Ht=>Ht.pageNumber)].filter(Ht=>Number.isInteger(Ht)&&Ht>0));for(const Ht of ft){const Ct=Hs.get(Oe.sourcePdfId)??[];Ct.some(bt=>bt.stableId===Oe.id&&bt.pageNumber===Ht)||(Ct.push({stableId:Oe.id,itemTag:Oe.itemTag,type:Oe.type,pageNumber:Ht,fields:Object.fromEntries(li.map(bt=>[bt,Oe[bt]]))}),Hs.set(Oe.sourcePdfId,Ct))}}const Xs=await m2(await Promise.all(mt.map(async Ee=>{const Oe=await qo(Ee.id),ft=await ty(Oe);if(ft.toLowerCase()!==Ee.hash.toLowerCase())throw new Error(`${Ee.alias} changed in local storage. Re-upload it before creating the AutoCAD runner.`);return{pageCount:Ee.pageCount,pageSizesPoints:await N2(Oe),pdfBytes:new Uint8Array(Oe),sourceHash:ft,sourceId:Ee.id,sourceName:Ee.alias,originalName:Ee.originalName??Ee.alias,discipline:a,edeRecords:Hs.get(Ee.id)??[],attributeRules:Vs,conflictingTags:Zl,...de?{projectId:de}:{},...Q?{titleBlockGroupId:Q}:{}}})),Pe,pa,Je,ae?{groupId:ae.projectId,workspaceType:ae.workspaceType,titleBlockId:ae.titleBlockId,titleBlockPath:ae.titleBlockPath,xrefName:ae.xrefName,expectedSize:ae.expectedSize,version:ae.version,content:ae.content}:void 0),Fa=URL.createObjectURL(Xs),xn=document.createElement("a");xn.href=Fa,xn.download="autocad-runner-with-source-pdfs.zip",document.body.append(xn),xn.click(),xn.remove(),window.setTimeout(()=>URL.revokeObjectURL(Fa),1e3);const ui=mt.reduce((Ee,Oe)=>Ee+Oe.pageCount,0);B(`Runner and ${mt.length} selected source PDF(s) downloaded. It can create ${ui} separate DWG file(s). ${Pe.filter(Ee=>(Ee.discipline===a||Ee.discipline==="Shared")&&(!Ee.projectId||Ee.projectId===de)).length} reviewed symbol mapping(s) and ${Je.filter(Ee=>(Ee.discipline===a||Ee.discipline==="Shared")&&(!Ee.projectId||Ee.projectId===de)).length} reviewed layer/text-style/linetype mapping(s) are available to this ${a} run. AutoCAD uses native 1:1 PDFIMPORT scale only when the PDF page size matches the selected title block; otherwise it asks for a known reference instead of guessing.`+(ae?" The selected client title block is included for 1:1 XREF attachment; keep its output companion DWG beside the generated pages.":""))}catch(M){B(M instanceof Error?M.message:"The AutoCAD runner could not be prepared. Try a smaller PDF batch.")}finally{ce(!1)}}},At=async M=>{const ae=Number(Qe);if(!Number.isFinite(ae)||ae<=0){Le("Enter a scale multiplier greater than zero.");return}Ce(!0),Le("Reading PDF vector geometry…");try{const{buildPdfDxfPackage:ve}=await nn(async()=>{const{buildPdfDxfPackage:Xe}=await import("./pdf-dxf-export-84KYIaAC.js");return{buildPdfDxfPackage:Xe}},[]),xe=await ve((M?[M]:p).map(Xe=>({aliasNumber:Xe.aliasNumber,bytes:()=>qo(Xe.id)})),ae,(Xe,pa,Dt)=>{ye.current&&Le(`Creating DXF: PDF ${Xe} · page ${pa} of ${Dt}…`)},()=>ye.current&&Re.current===a);if(!ye.current||Re.current!==a)return;const Ne=URL.createObjectURL(xe.blob),Pe=document.createElement("a");Pe.href=Ne,Pe.download="pdf-dxf-pages.zip",document.body.append(Pe),Pe.click(),Pe.remove(),window.setTimeout(()=>URL.revokeObjectURL(Ne),1e3);const Je=xe.reports.length-xe.exported;Le(`${xe.exported} DXF page(s) created${Je?`; ${Je} page(s) skipped—read the report`:""}. Raw vector output—not a verified exact PDF match. Compare each page with its source; library replacement and engineering scale are not verified.`)}catch(ve){ye.current&&Le(ve instanceof Error?ve.message:"DXF export failed; no CAD output was confirmed.")}finally{ye.current&&Ce(!1)}},We=q.useMemo(()=>p.find(M=>M.id===w)??null,[p,w]),j=q.useMemo(()=>{if(!w||!k)return[];try{const ve=ti(a==="PFD"?"pfd":"pid").find(xe=>xe.sourcePdfId===w)?.rows.find(xe=>xe.id===k);return(ve?.sourceLocations??[]).filter(xe=>xe.pageNumber===ee).map(xe=>({id:ve.id,label:ve.itemTag,location:xe}))}catch{return[]}},[a,ee,w,Z,k]),W=p.reduce((M,ae)=>M+ae.pageCount,0),pe=S!==null,Ue=Math.min(100,x/Ku*100);return c.jsxs("section",{className:"pdf-workflow","aria-labelledby":"pdf-workflow-title","data-testid":"panel-pdf-workflow",children:[c.jsxs("div",{className:"pdf-panel-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"pdf-kicker",children:["PDF INPUT · LOCAL SOURCE FILES · ",a]}),c.jsx("h2",{id:"pdf-workflow-title",children:"Source PDF files"}),c.jsxs("p",{children:["Add PDFs for this ",a," workspace. They stay in this browser and appear as PDF 1, PDF 2, and so on."]})]}),c.jsxs("div",{className:"pdf-actions",children:[c.jsxs("label",{className:"btn primary pdf-add-control","data-testid":"label-add-pdfs",children:[c.jsx(sm,{size:15})," Add PDFs",c.jsx("input",{type:"file",accept:"application/pdf,.pdf",multiple:!0,"aria-label":"Add PDF files",disabled:pe||u||!!b||!Da,onChange:M=>{Na(Array.from(M.currentTarget.files??[])),M.currentTarget.value=""},"data-testid":"input-add-pdfs"})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>he({type:"all"}),disabled:!p.length,"aria-label":"Clear all saved PDFs","data-testid":"button-clear-pdfs",children:[c.jsx(jl,{size:14})," Clear all"]})]})]}),c.jsxs("div",{className:"pdf-trust-note","data-testid":"text-pdf-local-only",children:[c.jsx(ys,{size:15}),c.jsxs("div",{className:"pdf-trust-copy",children:[c.jsxs("span",{children:[c.jsx("strong",{children:"Saved on this device only."})," PDFs are not uploaded, backed up, or synced. Clearing browser data removes them.",!Da&&" New PDFs cannot be added in this browser because duplicate checking needs a secure connection."]}),c.jsxs("details",{className:"pdf-privacy-details",children:[c.jsx("summary",{children:"Privacy and scanned PDFs"}),c.jsxs("p",{children:["Original PDFs are not changed. Searchable text and scanned pages are read in this browser. The OCR code and language files may be downloaded, but the PDF itself is not sent. PDF aliases hide file names only; names and logos printed inside the pages remain visible."," ","Download an original if you need a separate copy."]})]})]})]}),c.jsxs("div",{className:"pdf-storage-line","data-testid":"text-pdf-storage",children:[c.jsxs("span",{children:[Mo(x)," of ",Mo(Ku)," used (all disciplines)"]}),c.jsxs("span",{children:["Limit ",Mo(Gu)," per PDF"]})]}),c.jsx("div",{className:"pdf-meter",role:"progressbar","aria-label":"Local storage used","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Ue),children:c.jsx("span",{style:{width:`${Ue}%`}})}),c.jsx("div",{style:{height:12}}),S&&c.jsxs("div",{className:"pdf-progress",role:"status","aria-live":"polite","data-testid":"status-pdf-progress",children:[c.jsxs("div",{className:"pdf-progress-top",children:[c.jsxs("span",{children:[c.jsx($a,{size:12,className:"pdf-spin"})," ",S.phase==="checking"?`Checking and saving: ${S.done} of ${S.total} file(s) finished · ${S.pagesDone} page(s) verified`:`${S.currentAlias??"PDF"} · reading page ${S.pageNow??0} of ${S.pageTotal??0} for EDE`]}),c.jsx("button",{type:"button",className:"btn",onClick:on,"data-testid":"button-cancel-import","aria-label":"Cancel remaining imports",children:"Cancel"})]}),c.jsx("div",{className:"pdf-meter",children:c.jsx("span",{style:{width:`${S.phase==="checking"?S.done/S.total*100:(S.done+(S.pageTotal?(S.pageNow??0)/S.pageTotal:0))/S.total*100}%`}})})]}),C.length>0&&c.jsx("ul",{className:"pdf-notes","aria-live":"polite","data-testid":"list-pdf-notes",children:C.map(M=>c.jsxs("li",{className:M.kind==="info"?"info":"",role:M.kind==="error"?"alert":void 0,"data-testid":`status-pdf-note-${M.id}`,children:[M.kind==="error"?c.jsx(bs,{size:14}):c.jsx(ms,{size:14}),c.jsx("span",{children:M.text}),c.jsx("button",{type:"button","aria-label":"Dismiss message",onClick:()=>D(ae=>ae.filter(ve=>ve.id!==M.id)),children:c.jsx(om,{size:13})})]},M.id))}),p.length>0&&c.jsxs("div",{className:"pdf-batch-controls","data-testid":"pdf-batch-controls",children:[c.jsxs("div",{className:"pdf-batch-controls-copy",children:[c.jsx("strong",{children:"Choose PDFs for AutoCAD"}),c.jsxs("span",{"aria-live":"polite","data-testid":"text-pdf-batch-selection-count",children:[mt.length," of ",p.length," selected"]}),c.jsx("small",{children:"Only checked PDFs go into the runner. Select one or several."})]}),c.jsxs("div",{className:"pdf-batch-control-actions",children:[c.jsx("button",{type:"button",className:"btn",onClick:Zt,disabled:pe||U,"data-testid":"button-select-all-pdfs",children:"Select all"}),c.jsx("button",{type:"button",className:"btn",onClick:qt,disabled:pe||U,"data-testid":"button-deselect-all-pdfs",children:"Deselect all"})]})]}),p.length>0&&mt.length===0&&c.jsx("p",{className:"pdf-batch-empty",role:"status","data-testid":"status-no-pdfs-selected",children:"No PDFs selected. Use Select all or tick a PDF row before downloading the runner."}),c.jsxs("div",{className:"pdf-queue","aria-label":"Saved PDF files",children:[Te&&c.jsxs("div",{className:"pdf-confirm",role:"alertdialog","aria-label":"Confirm delete","data-testid":"dialog-confirm-delete",children:[c.jsx("span",{children:Te.type==="all"?`Delete all ${p.length} saved ${a} PDF(s) from this device? This cannot be undone.`:"Delete this PDF from this device? This cannot be undone."}),c.jsx("button",{type:"button",className:"btn danger","data-testid":"button-confirm-delete",onClick:()=>Te.type==="all"?void Fn():void Qa(Te.id),children:"Delete"}),c.jsx("button",{type:"button",className:"btn","data-testid":"button-cancel-delete",onClick:()=>he(null),children:"Keep"})]}),u?c.jsxs("div",{className:"pdf-queue-empty",role:"status","data-testid":"status-pdf-loading",children:[c.jsx($a,{size:16,className:"pdf-spin"})," Loading saved PDFs"]}):b?c.jsxs("div",{className:"pdf-queue-empty",role:"alert","data-testid":"status-pdf-load-error",children:[c.jsx(bs,{size:16})," ",b,c.jsx("button",{type:"button",className:"btn",onClick:()=>{y(!0),Ot()},"data-testid":"button-retry-load",children:"Try again"})]}):p.length?p.map(M=>c.jsxs("div",{className:`pdf-file-row${M.id===w?" is-selected":""}`,"data-testid":`row-pdf-file-${M.id}`,children:[c.jsxs("button",{type:"button",className:"pdf-select",onClick:()=>{P(M.id),I(null),le(1)},"aria-label":`Preview ${M.alias}`,"aria-pressed":M.id===w,"data-testid":`button-select-pdf-${M.id}`,children:[c.jsx("span",{className:"pdf-file-icon",children:c.jsx(ms,{size:17})}),c.jsxs("span",{className:"pdf-file-details",children:[c.jsx("strong",{className:"pdf-filename","data-testid":`text-pdf-name-${M.id}`,children:M.alias}),c.jsxs("span",{className:"pdf-file-meta",children:[M.pageCount," page(s) · ",Mo(M.size)," · saved locally"]}),c.jsxs("span",{className:"pdf-analysis-state","data-testid":`status-ede-${M.id}`,children:["EDE: ",M.analysisStatus==="needs-review"?`${M.analysisRecordCount??0} candidate(s) · review required`:M.analysisStatus==="no-tags"?"No tag candidates found":M.analysisStatus==="extracting"?T===M.id?"Extraction in progress":"Paused · resume available":M.analysisStatus==="failed"?"Extraction failed":M.analysisStatus==="paused"?"Paused · resume available":"Not extracted yet"," · AutoCAD: not connected"]}),M.analysisStatus==="failed"&&M.analysisMessage&&c.jsx("span",{className:"pdf-analysis-state",role:"status",children:M.analysisMessage})]})]}),c.jsxs("span",{className:"pdf-row-actions",children:[c.jsxs("label",{className:"pdf-batch-choice",children:[c.jsx("input",{type:"checkbox",checked:E2(h,M.id),disabled:pe||U,onChange:()=>Ca(M.id),"aria-label":`Process ${M.alias} in the AutoCAD batch`,"data-testid":`checkbox-batch-pdf-${M.id}`}),c.jsx("span",{children:"Process"})]}),M.analysisStatus!=="needs-review"&&T!==M.id&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:pe,onClick:()=>{na(M)},"data-testid":`button-extract-ede-${M.id}`,children:[c.jsx(ms,{size:13})," ",M.analysisStatus==="failed"?"Retry EDE":M.analysisStatus==="paused"||M.analysisStatus==="extracting"?"Resume EDE":"Create EDE data"]}),(M.analysisStatus==="needs-review"||M.analysisStatus==="no-tags")&&c.jsx(la,{className:"btn pdf-extract-btn",href:`/workspace/${a==="PFD"?"pfd":"pid"}/engineering-data?source=${encodeURIComponent(M.id)}`,children:"Open EDE"}),M.analysisStatus==="needs-review"&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:pe,onClick:()=>{na(M)},"data-testid":`button-refresh-source-links-${M.id}`,children:[c.jsx(ZE,{size:13})," Recheck tags & locations"]}),T===M.id&&c.jsxs("span",{className:"pdf-running-label",children:[c.jsx($a,{size:13,className:"pdf-spin"})," Reading"]}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Preview ${M.alias}`,onClick:()=>{P(M.id),I(null),le(1)},"data-testid":`button-preview-pdf-${M.id}`,children:c.jsx(RE,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Download original source ${M.alias}`,onClick:()=>{ka(M)},"data-testid":`button-download-pdf-${M.id}`,children:c.jsx(Us,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn danger","aria-label":`Remove ${M.alias}`,onClick:()=>he({type:"one",id:M.id}),"data-testid":`button-remove-pdf-${M.id}`,children:c.jsx(om,{size:15})})]})]},M.id)):c.jsxs("div",{className:"pdf-queue-empty","data-testid":"empty-pdf-queue",children:[c.jsx(ms,{size:18}),c.jsxs("span",{children:["No saved PDFs for ",a]}),c.jsx("small",{children:"Add PDFs to keep them on this device. You can add several at once."})]})]}),c.jsx("div",{className:"pdf-page-summary",style:{marginTop:10},"data-testid":"text-pdf-page-summary",children:p.length?`${p.length} PDF(s) · ${W} total page(s)`:pe?"Working on your files":"No readable PDFs saved yet"}),p.length>=100&&c.jsxs("div",{className:"pdf-trust-note",role:"note","data-testid":"text-large-batch-resume",children:[c.jsx(ys,{size:15}),c.jsxs("span",{children:["This batch contains ",p.length," PDFs and ",W," pages. The AutoCAD runner tracks every page in a local journal beside the DWGs, so you can resume later with the same unchanged kit and output name. Progress is recorded on the Windows workstation, not in this browser."]})]}),We&&c.jsxs("div",{className:"pdf-source-box","data-testid":"panel-source-page",children:[c.jsxs("div",{className:"pdf-page-select",children:[c.jsx("label",{htmlFor:"pdf-page-picker",children:"Source page"}),c.jsx("select",{id:"pdf-page-picker",value:ee,onChange:M=>le(Number(M.target.value)),"data-testid":"select-source-page","aria-label":"Select source page",children:Array.from({length:We.pageCount},(M,ae)=>c.jsxs("option",{value:ae+1,children:["Page ",ae+1]},ae+1))}),c.jsxs("span",{children:["of ",We.pageCount," in ",We.alias]})]}),c.jsx(Kx,{fileId:We.id,alias:We.alias,pageCount:We.pageCount,page:ee,onPageChange:le,loadBytes:qo,markers:j,onMarkerClick:M=>{const ae=a==="PFD"?"pfd":"pid";window.location.assign(`/workspace/${ae}/engineering-data?source=${encodeURIComponent(We.id)}&record=${encodeURIComponent(M)}`)}})]}),c.jsxs("div",{className:"pdf-capabilities",children:[c.jsxs("div",{className:"pdf-capability-storage pdf-dxf-export",children:[c.jsx("div",{className:"capability-heading",children:c.jsx("strong",{children:"Create DXF — no AutoCAD needed"})}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Scale multiplier · 1 = PDF paper size in mm"}),c.jsx("input",{type:"number",min:"0.000001",step:"any",value:Qe,onChange:M=>Ve(M.target.value),"aria-label":"DXF scale multiplier"})]}),c.jsx("button",{className:"btn primary",type:"button",disabled:!p.length||pe||u||ue||U||!!b,onClick:()=>{At(We??void 0)},"data-testid":"button-export-dxf",children:ue?c.jsxs(c.Fragment,{children:[c.jsx($a,{size:14,className:"pdf-spin"})," Creating DXF…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Us,{size:14})," ",We?`${We.alias} · Download DXF pages`:"Download all DXF pages"]})}),We&&p.length>1&&c.jsx("button",{className:"btn",type:"button",disabled:pe||u||ue||U||!!b,onClick:()=>{At()},"data-testid":"button-export-all-dxf",children:"All PDFs · Download DXF pages"}),c.jsx("p",{children:"One editable DXF per vector PDF page. Scanned pages are not automatically traced. This exports raw PDF geometry, not library-standard symbols. Source details may remain—review/redact before sharing."}),me&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:me}),c.jsx(o1,{})]}),c.jsxs("div",{className:"pdf-capability-convert",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"01"}),c.jsx("strong",{children:"Page check"})]}),c.jsx("div",{className:"pdf-page-summary","data-testid":"text-pdf-page-summary",children:p.length?`${p.length} PDF(s) · ${W} total page(s)`:"Add PDFs to prepare an AutoCAD runner."})]}),c.jsxs("div",{className:"pdf-capability-storage",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"02"}),c.jsx("strong",{children:"Local AutoCAD runner"})]}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Approved CAD mappings"}),c.jsxs("select",{value:de,disabled:gt,onChange:M=>Y(M.target.value),"aria-label":"Approved CAD mappings for this runner",children:[c.jsx("option",{value:"",children:"Legends Library only"}),Ae.map(M=>c.jsx("option",{value:M.id,children:M.label},M.id))]})]}),c.jsxs("div",{className:"runner-group-hint","aria-live":"polite","data-testid":"runner-mapping-inventory",children:[ge?c.jsxs(c.Fragment,{children:[c.jsxs("strong",{children:[ge.symbols," usable approved blocks · ",ge.layers," layers · ",ge.textStyles," text styles for ",a]}),ge.symbols===0&&c.jsxs("p",{role:"status",children:["No compatible approved blocks: this kit cannot convert PDF symbols into approved CAD blocks. Approve ",a," or Shared symbols with an approved target layer first. Other-discipline symbols are not reused automatically."]}),ge.textStyles===0&&c.jsx("p",{children:"Confirmed final text uses Arial Narrow at its existing height and position. Unconfirmed PDF text stays visible for review. An approved final text layer is required for loose text."}),ge.otherDisciplineSymbols>0&&c.jsxs("p",{children:[ge.otherDisciplineSymbols," approved symbol(s) belong to the other discipline and are excluded."]})]}):c.jsx("p",{children:"The mapping library could not be checked. Do not assume blocks or text formatting are available."}),c.jsx("button",{type:"button",className:"btn btn-ghost btn-small",onClick:()=>F(M=>M+1),children:"Refresh mapping counts"}),X&&c.jsxs("p",{role:"status",children:["Local mapping counts checked at ",X,". Refresh recounts saved approvals; it does not approve symbols."]})]}),c.jsxs("label",{className:"runner-group-choice",children:[c.jsxs("span",{children:[a," client folder for this batch"]}),c.jsxs("select",{value:Q,disabled:!Tt.length||gt||U,onChange:M=>l(M.target.value),"aria-label":`${a} client folder for title block`,children:[c.jsx("option",{value:"",children:Tt.length?`Choose a ${a} client folder`:`Create a ${a} client folder first`}),Tt.map(M=>c.jsx("option",{value:M.id,children:M.label},M.id))]})]}),c.jsx("p",{className:"runner-group-hint",children:"Choose the client folder for this batch. All selected PDFs will use its title block, so select PDFs from one project."}),Q?c.jsxs("div",{className:"runner-title-block","aria-label":"Project title block",children:[c.jsxs("div",{className:"runner-title-block-heading",children:[c.jsxs("strong",{children:["Client title block",i&&Q===o?` · ${i}`:""]}),wt?c.jsx("span",{children:"Checking this browser…"}):Me?c.jsxs("span",{children:["Saved locally · ",Mo(Me.bytes)]}):c.jsx("span",{children:"Required for this project"})]}),!wt&&!Me&&c.jsx("p",{children:"Upload a standalone .DWG for this project. The runner attaches it as a model-space XREF at (0,0,0), rotation 0, scale 1:1, preserving its layers. Use matching drawing units."}),c.jsx("input",{ref:jt,className:"runner-title-block-file",type:"file",accept:".dwg,application/acad","aria-label":"Choose project title block DWG",onChange:M=>{En(M.currentTarget.files?.[0])}}),c.jsxs("div",{className:"runner-title-block-actions",children:[c.jsx("button",{className:"btn",type:"button",disabled:wt||gt||U,onClick:()=>jt.current?.click(),children:gt?c.jsxs(c.Fragment,{children:[c.jsx($a,{size:14,className:"pdf-spin"})," Saving locally…"]}):c.jsxs(c.Fragment,{children:[c.jsx(sm,{size:14})," ",Me?"Replace title block DWG":"Upload title block DWG"]})}),Me&&c.jsx("button",{className:"btn",type:"button",disabled:gt||U,onClick:()=>{da()},children:"Remove"})]}),c.jsxs("p",{className:"runner-title-block-note",children:["The file stays in this browser and is added only to this ",a," workspace’s local runner. Use the same project output folder for future batches: all page DWGs reuse one PROJECT_TITLE_BLOCK.dwg by relative XREF. The runner keeps a local scope marker beside it; upload the shared DWG once, not the marker. Existing numbered copies are only reported, never deleted."]}),aa&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:aa})]}):c.jsx("p",{className:"runner-title-block-empty",children:Tt.length?`Select a ${a} client folder above to upload or use its title block.`:"Create a Technology, Project or Proposal, and Client folder to use a client title block."}),c.jsx(l1,{scope:`${a}:${de||"legends-default"}`},`${a}:${de}`),c.jsx("button",{className:"btn primary",type:"button",disabled:!mt.length||pe||u||U||wt||gt||!!Q&&!Me||!!b,"aria-describedby":"runner-description",onClick:()=>{ua()},"data-testid":"button-convert-to-dwg",children:U?c.jsxs(c.Fragment,{children:[c.jsx($a,{size:14,className:"pdf-spin"})," Preparing…"]}):c.jsxs(c.Fragment,{children:[c.jsx(lw,{size:14})," Download AutoCAD batch runner"]})}),c.jsx("p",{id:"runner-description",children:"The ZIP contains only the checked PDFs, individually exported approved blocks, and—when a PFD/P&ID group is selected—its title block DWG. One or several PDFs can be selected. It does not include original mapping source DWGs. Run it in Windows AutoCAD. Unmatched symbols retain source geometry or use an approved same-category fallback with a red review cloud and source-page reference. A local journal tracks each page and lets the same unchanged batch resume without overwriting completed DWGs."}),fe&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:fe})]})]}),c.jsxs("div",{className:"pdf-final-status",role:"note","data-testid":"text-conversion-unavailable",children:[c.jsxs("strong",{children:[c.jsx(GE,{size:13,style:{verticalAlign:"-2px"}})," AutoCAD 2020 is not connected to this browser."]})," ","DXF vector export runs directly in this browser. Native DWG still requires the downloaded helper to run in Windows AutoCAD; the browser does not connect to AutoCAD."]}),c.jsx(ET,{discipline:a,onAddPdfs:Na,clientFolderId:o||void 0,clientFolderLabel:i||void 0})]})}function cy({discipline:a}){const[s]=q.useState(()=>{try{return{hierarchy:Yx(),recovery:null}}catch(he){const de=he instanceof Vo?he:new Vo("Saved groups could not be loaded from this browser.");return{hierarchy:Ru(),recovery:{message:de.message,rawValue:de.rawValue}}}}),[o,i]=q.useState(s.hierarchy),[l,p]=q.useState(s.recovery),[g,h]=q.useState(""),[m,u]=q.useState(null),[y,b]=q.useState(""),[E,x]=q.useState(null),R=o[a],C=a==="pfd"?"PFD":"P&ID",D=Ou(R,E),S=D&&(D.kind==="client"||D.kind==="legacy")?D.id:"",N=S?Wy(R).find(he=>he.id===S)?.label??D?.name??"":"",T=he=>x(he||null);q.useEffect(()=>{if(!l)try{Hx(o),h("")}catch(he){h(he instanceof Error?he.message:"Groups could not be saved in this browser.")}},[o,l]);const _=(he,de,Y=[])=>({id:globalThis.crypto?.randomUUID?.()??`group-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:he,kind:de,expanded:!0,children:Y}),w=(he,de)=>{b(de),u(he)},P=()=>{const he=_("New technology","technology",[_("Projects","projects"),_("Proposals","proposals")]);i(de=>({...de,[a]:[...de[a],he]})),w(he.id,he.name),x(he.id)},k=he=>{const de=Ou(R,he);if(!de)return;const Y=de.kind==="projects"?"project":de.kind==="proposals"?"proposal":de.kind==="project"||de.kind==="proposal"?"client":null;if(!Y)return;const be=_(Y==="project"?"New project":Y==="proposal"?"New proposal":"New client",Y);i(Ae=>({...Ae,[a]:Al(Ae[a],he,O=>({...O,expanded:!0,children:[...O.children,be]}))})),w(be.id,be.name),x(be.id)},I=he=>{const de=y.trim();if(!de||de.length>Ol){h(`Folder names must be 1–${Ol} characters.`),u(null);return}i(Y=>({...Y,[a]:Al(Y[a],he,Q=>({...Q,name:de}))})),u(null),h("")},Z=()=>u(null),se=he=>i(de=>({...de,[a]:Al(de[a],he,Y=>({...Y,expanded:!Y.expanded}))})),ee=he=>{window.confirm(`Delete “${he.name}” and all folders inside it? Saved title blocks and CAD sources are not deleted.`)&&(Gy(he,E)&&x(null),Mb(he,m)&&u(null),i(de=>({...de,[a]:Xy(de[a],he.id)})))},le=()=>{if(l?.rawValue===null||l?.rawValue===void 0)return;const he=new Blob([l.rawValue],{type:"application/json;charset=utf-8"}),de=URL.createObjectURL(he),Y=document.createElement("a");Y.href=de,Y.download="mapping-studio-hierarchy-backup.json",Y.click(),window.setTimeout(()=>URL.revokeObjectURL(de),1e3)},Te=()=>{if(window.confirm("Clear the unreadable hierarchy saved in this browser? This cannot be undone. Download a backup first if you may need the saved data."))try{window.localStorage.removeItem(ip),window.localStorage.removeItem(Hy),i(Ru()),p(null),h("")}catch{h("Browser storage could not be cleared. The saved hierarchy remains locked and unchanged.")}};return c.jsxs("main",{className:"hierarchy-page","data-discipline":a,children:[c.jsxs("header",{className:"hierarchy-topbar",children:[c.jsxs(la,{href:"/",className:"studio-wordmark","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),c.jsxs("div",{className:"hierarchy-top-actions",children:[c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Saved on this device"]}),c.jsxs(la,{href:"/",className:"btn subtle","data-testid":"link-discipline-selection",children:[c.jsx(Sy,{size:14})," Disciplines"]})]})]}),c.jsxs("div",{className:"hierarchy-frame",children:[c.jsxs("aside",{className:"hierarchy-sidebar",children:[c.jsx("div",{className:"sidebar-label",children:"DISCIPLINES"}),c.jsxs(la,{href:"/workspace/pfd",className:`discipline-nav ${a==="pfd"?"active":""}`,"data-testid":"nav-pfd",children:[c.jsx(zE,{size:16})," PFD"]}),c.jsxs(la,{href:"/workspace/pid",className:`discipline-nav ${a==="pid"?"active":""}`,"data-testid":"nav-pid",children:[c.jsx(Uo,{size:16})," P&ID"]}),c.jsxs("div",{className:"sidebar-local-note",children:[c.jsx(ys,{size:14}),c.jsx("span",{children:"PFD and P&ID groups stay separate."})]})]}),c.jsxs("section",{className:"hierarchy-main","aria-label":`${C} workspace`,children:[c.jsxs("div",{className:"hierarchy-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[C," workspace"]}),c.jsx("h1",{children:C}),c.jsx("p",{children:"Organize technology, project/proposal and client folders. Common standards stay in the company library."})]}),c.jsxs("div",{className:"hierarchy-heading-actions",children:[c.jsxs(la,{href:`/workspace/${a}/engineering-data`,className:"btn edm-entry-link","data-testid":`link-engineering-data-${a}`,children:[c.jsx(np,{size:14})," Engineering data"]}),c.jsxs("button",{className:"btn primary",onClick:P,disabled:!!l,"data-testid":"button-add-group",children:[c.jsx(Ko,{size:15})," New technology"]})]})]}),l&&c.jsxs("div",{className:"hierarchy-recovery",role:"alert","data-testid":"status-hierarchy-recovery",children:[c.jsxs("div",{className:"recovery-title",children:[c.jsx(bs,{size:17}),c.jsx("strong",{children:"Saved groups need recovery"})]}),c.jsxs("p",{children:[l.message," Editing is disabled to protect the saved data."]}),l.rawValue!==null?c.jsx("button",{className:"btn",onClick:le,"data-testid":"button-download-hierarchy-backup",children:"Download raw backup"}):c.jsx("p",{className:"recovery-unavailable",children:"A raw backup is unavailable because browser storage could not be read."}),c.jsx("button",{className:"btn danger",onClick:Te,"data-testid":"button-clear-hierarchy-storage",children:"Clear saved data and start over"})]}),g&&!l&&c.jsxs("div",{className:"storage-banner",role:"alert","data-testid":"status-hierarchy-storage",children:[c.jsx(bs,{size:15}),g]}),c.jsxs("div",{className:"hierarchy-panel",children:[c.jsxs("div",{className:"tree-head",children:[c.jsx("span",{children:"TECHNOLOGY · PROJECTS · PROPOSALS · CLIENTS"}),c.jsxs("span",{"data-testid":"text-group-count",children:[Lu(R)," ",Lu(R)===1?"folder":"folders"]})]}),R.length===0?c.jsxs("div",{className:"hierarchy-empty","data-testid":"empty-hierarchy",children:[c.jsx("div",{className:"empty-folder",children:c.jsx(Cu,{size:23})}),c.jsx("strong",{children:l?"Folders are locked":"No technology folders yet"}),c.jsx("p",{children:l?"Recover or clear the saved data to continue.":"Create a technology folder, then add projects or proposals and their clients."}),!l&&c.jsxs("button",{className:"btn",onClick:P,"data-testid":"button-create-first-group",children:[c.jsx(Ko,{size:14})," Create first technology"]})]}):c.jsx("div",{className:"tree-list",role:"tree","aria-label":`${C} project folders`,children:R.map(he=>c.jsx($b,{node:he,depth:0,selectedId:E,editingId:m,editName:y,setEditName:b,onSelect:x,onToggle:se,onAdd:k,onRename:w,onCommit:I,onCancel:Z,onDelete:ee,disabled:!!l},he.id))})]}),S&&c.jsxs("div",{className:"hierarchy-client-context",role:"status","data-testid":"selected-client-folder",children:[c.jsx(Cu,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:N})," selected. Its title block and client source library will be used below."]})]}),c.jsxs("div",{className:"hierarchy-footnote",children:[c.jsx(ys,{size:14}),c.jsx("span",{children:"Saved in this browser. PFD and P&ID folder trees stay separate."})]}),c.jsx(k2,{discipline:a==="pfd"?"PFD":"P&ID",groups:R,selectedClientId:S,selectedClientLabel:N,onSelectClient:T},a)]})]})]})}function Mb(a,s){return s!==null&&(a.id===s||a.children.some(o=>Mb(o,s)))}function $b({node:a,depth:s,selectedId:o,editingId:i,editName:l,setEditName:p,onSelect:g,onToggle:h,onAdd:m,onRename:u,onCommit:y,onCancel:b,onDelete:E,disabled:x}){const R=i===a.id,C=["projects","proposals","project","proposal"].includes(a.kind),D=!["projects","proposals"].includes(a.kind),S=a.kind==="projects"?"Add project":a.kind==="proposals"?"Add proposal":a.kind==="project"||a.kind==="proposal"?"Add client":"Add folder",N={technology:"Technology",projects:"Projects",proposals:"Proposals",project:"Project",proposal:"Proposal",client:"Client",legacy:"Existing group"},T=q.useRef(null),_=()=>{T.current!==a.id&&(T.current=a.id,y(a.id))},w=()=>{T.current!==a.id&&(T.current=a.id,b())};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`tree-row ${o===a.id?"selected":""}`,role:"treeitem","aria-expanded":a.children.length?a.expanded:void 0,"aria-level":s+1,style:{"--tree-depth":s},"data-testid":`tree-group-${a.id}`,children:[c.jsx("button",{className:"tree-toggle","aria-label":`${a.expanded?"Collapse":"Expand"} ${a.name}`,disabled:x,onClick:()=>h(a.id),"data-testid":`button-toggle-group-${a.id}`,children:a.expanded?c.jsx(gs,{size:15}):c.jsx(ap,{size:15})}),c.jsx(Cu,{className:"tree-folder",size:16}),R?c.jsx("input",{autoFocus:!0,maxLength:Ol,className:"tree-rename-input","aria-label":"Folder name",value:l,disabled:x,onChange:P=>p(P.target.value),onFocus:()=>{T.current=null},onBlur:_,onKeyDown:P=>{P.key==="Enter"&&_(),P.key==="Escape"&&(P.preventDefault(),w())},"data-testid":`input-rename-group-${a.id}`}):c.jsx("button",{className:"tree-name",disabled:x,onClick:()=>g(a.id),onDoubleClick:()=>D&&u(a.id,a.name),title:"Select folder; double-click to rename","data-testid":`button-select-group-${a.id}`,children:a.name}),c.jsx("span",{className:"tree-kind-badge",children:N[a.kind]}),c.jsxs("span",{className:"tree-actions",children:[C&&c.jsx("button",{"aria-label":`${S} under ${a.name}`,title:S,disabled:x,onClick:()=>m(a.id),"data-testid":`button-add-subgroup-${a.id}`,children:c.jsx(Ko,{size:14})}),D&&c.jsx("button",{"aria-label":`Rename ${a.name}`,title:"Rename folder",disabled:x,onClick:()=>u(a.id,a.name),"data-testid":`button-rename-group-${a.id}`,children:c.jsx(tw,{size:13})}),D&&c.jsx("button",{"aria-label":`Delete ${a.name}`,title:"Delete folder",disabled:x,onClick:()=>E(a),"data-testid":`button-delete-group-${a.id}`,children:c.jsx(jl,{size:13})})]})]}),a.expanded&&a.children.map(P=>c.jsx($b,{node:P,depth:s+1,selectedId:o,editingId:i,editName:l,setEditName:p,onSelect:g,onToggle:h,onAdd:m,onRename:u,onCommit:y,onCancel:b,onDelete:E,disabled:x},P.id))]})}function R2({order:a,hidden:s,onChange:o}){const i=(l,p)=>{const g=[...a];[g[l],g[l+p]]=[g[l+p],g[l]],o(g,s)};return c.jsxs("details",{className:"edm-column-picker",children:[c.jsxs("summary",{children:["Columns (",a.length-s.length,")"]}),c.jsxs("div",{className:"edm-column-options",children:[c.jsx("p",{children:"Use these checkboxes to show or hide columns. The filter icon in each heading filters row values, including (Blanks), and does not hide the column."}),a.map((l,p)=>c.jsxs("div",{className:"edm-column-option",children:[c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:!s.includes(l),"aria-label":`Show ${kt[l]}`,disabled:!s.includes(l)&&s.length===a.length-1,onChange:()=>o(a,s.includes(l)?s.filter(g=>g!==l):[...s,l])}),kt[l]]}),c.jsx("button",{type:"button",disabled:p===0,onClick:()=>i(p,-1),"aria-label":`Move ${kt[l]} up`,children:c.jsx(vE,{size:14})}),c.jsx("button",{type:"button",disabled:p===a.length-1,onClick:()=>i(p,1),"aria-label":`Move ${kt[l]} down`,children:c.jsx(hE,{size:14})})]},l)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>o([...Un],[]),children:"Reset columns"})]})]})}function dy(a){const s=Math.min(272,window.innerWidth-16),o=Math.min(360,window.innerHeight-16),i=Math.max(8,Math.min(a.left,window.innerWidth-s-8)),l=a.bottom+4;return{top:l+o<=window.innerHeight-8?l:Math.max(8,a.top-o-4),left:i}}function uy({label:a,options:s,selectedValues:o,onApply:i}){const l=q.useRef(null),p=q.useRef(null),g=q.useRef(null),[h,m]=q.useState(!1),[u,y]=q.useState(null),[b,E]=q.useState([]),[x,R]=q.useState(""),C=o!==void 0,D=q.useMemo(()=>s.map(k=>k.value),[s]),S=q.useMemo(()=>{const k=x.trim().toLowerCase();return k?s.filter(I=>(I.value||"(Blanks)").toLowerCase().includes(k)):s},[s,x]),N=s.reduce((k,I)=>k+Number(b.includes(I.value)),0),T=s.length>0&&N===s.length;q.useEffect(()=>{g.current&&(g.current.indeterminate=N>0&&N<s.length)},[b,s.length,N]),q.useEffect(()=>{if(!h)return;const k=()=>{const se=l.current?.getBoundingClientRect();se&&y(dy(se))},I=se=>{const ee=se.target;!p.current?.contains(ee)&&!l.current?.contains(ee)&&m(!1)},Z=se=>{se.key==="Escape"&&m(!1)};return k(),document.addEventListener("pointerdown",I),document.addEventListener("keydown",Z),window.addEventListener("resize",k),window.addEventListener("scroll",k,!0),()=>{document.removeEventListener("pointerdown",I),document.removeEventListener("keydown",Z),window.removeEventListener("resize",k),window.removeEventListener("scroll",k,!0)}},[h]);const _=()=>{if(h){m(!1);return}const k=l.current?.getBoundingClientRect();k&&y(dy(k)),E(o?[...o]:D),R(""),m(!0)},w=k=>{E(I=>I.includes(k)?I.filter(Z=>Z!==k):[...I,k])},P=()=>{i(b),m(!1)};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{ref:l,type:"button",className:`edm-column-filter-trigger${C?" active":""}`,title:`${C?"Filtered":"Filter"} ${a}`,"aria-label":`${C?"Edit filter for":"Filter"} ${a}`,"aria-expanded":h,onClick:_,"data-testid":`button-filter-${a.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[c.jsx(FE,{size:12}),c.jsx(gs,{size:10})]}),h&&u&&Bl.createPortal(c.jsxs("div",{ref:p,className:"edm-column-filter-menu",style:{top:u.top,left:u.left},role:"dialog","aria-label":`${a} filter`,"data-testid":"menu-column-filter",children:[c.jsxs("strong",{className:"edm-column-filter-title",children:["Filter: ",a]}),c.jsxs("label",{className:"edm-column-filter-search",children:[c.jsx(Wo,{size:14}),c.jsx("input",{value:x,onChange:k=>R(k.target.value),placeholder:"Search values…","aria-label":`Search ${a} values`})]}),c.jsxs("label",{className:"edm-column-filter-select-all",children:[c.jsx("input",{ref:g,type:"checkbox",checked:T,disabled:!s.length,onChange:()=>E(T?[]:D)}),c.jsx("span",{children:"Select all"})]}),c.jsxs("div",{className:"edm-column-filter-options",role:"group","aria-label":`${a} values`,children:[!S.length&&c.jsx("p",{className:"edm-column-filter-empty",children:s.length?"No matching values.":"No values in this drawing yet."}),S.map(k=>c.jsxs("label",{className:"edm-column-filter-option",children:[c.jsx("input",{type:"checkbox",checked:b.includes(k.value),onChange:()=>w(k.value)}),c.jsx("span",{children:k.value||"(Blanks)"}),c.jsx("small",{children:k.count})]},JSON.stringify(k.value)))]}),c.jsxs("div",{className:"edm-column-filter-actions",children:[c.jsx("button",{type:"button",className:"edm-column-filter-clear",disabled:!C,onClick:()=>{i(void 0),m(!1)},children:"Clear filter"}),c.jsx("span",{}),c.jsx("button",{type:"button",onClick:()=>m(!1),children:"Cancel"}),c.jsx("button",{type:"button",className:"apply",disabled:!s.length,onClick:P,children:"Apply"})]})]}),document.body)]})}function Ub(a){return{headers:["#","Object type",...a.fields.map(s=>kt[s])],rows:a.rows.map((s,o)=>[o+1,s.type,...a.fields.map(i=>mn(s,i))])}}function Fb(a){return a.groups.map(s=>{const o=new Map;for(const i of a.rows){const l=mn(i,s)||"—";o.set(l,(o.get(l)??0)+1)}return{field:s,label:kt[s],values:[...o].map(([i,l])=>({value:i,count:l}))}})}function j2(a){const s=Ub(a);return Ib(s.headers,s.rows)}async function L2(a,s){const{default:o}=await nn(async()=>{const{default:y}=await import("./exceljs.min-CerR561A.js").then(b=>b.e);return{default:y}},__vite__mapDeps([2,1])),i=new o.Workbook;i.creator="gaurav.cbiindia";const l=i.addWorksheet("Engineering data",{pageSetup:{orientation:"landscape",fitToPage:!0,fitToWidth:1,fitToHeight:0}}),p=Ub(a),g=Fb(a),h=p.headers.length;["Engineering Data Editor",`${s.discipline} · ${s.drawing}${s.revision?` · ${s.revision}`:""} · ${a.rows.length} records`,`Object type: ${s.filter} · Search: ${s.search||"(none)"} · Sort: ${s.sort}`,...g.map(y=>{const b=y.values.map(({value:E,count:x})=>`${E} (${x})`).join(" · ");return`${y.label}: ${b.length>1500?b.slice(0,1500)+"… (see Group summaries sheet)":b}`})].forEach((y,b)=>{const E=l.addRow([y]);l.mergeCells(E.number,1,E.number,h),E.height=b===0?30:32,E.getCell(1).font={name:"Calibri",size:b===0?16:10,bold:b===0,color:{argb:b===0?"FFF0F0E8":"FF405A55"}},E.getCell(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:b===0?"FF203940":"FFF9F8F2"}},E.getCell(1).alignment={vertical:"middle",wrapText:!0}});const u=l.addRow(p.headers);if(u.height=30,u.eachCell(y=>{y.font={name:"Calibri",bold:!0,size:10,color:{argb:"FF405A55"}},y.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFF0F1E9"}},y.alignment={vertical:"middle",wrapText:!0},y.border={bottom:{style:"thin",color:{argb:"FFD9DED5"}}}}),p.rows.forEach((y,b)=>{const E=l.addRow(y);E.height=30,E.eachCell({includeEmpty:!0},(x,R)=>{x.numFmt=R===1?"0":"@",x.font={name:R>2&&a.fields[R-3]==="itemTag"?"Consolas":"Calibri",size:10,color:{argb:"FF405A55"}},x.alignment={vertical:"middle",wrapText:!0},x.fill={type:"pattern",pattern:"solid",fgColor:{argb:b%2?"FFF2F5EE":"FFFBFAF6"}},x.border={right:{style:"thin",color:{argb:"FFECEEE8"}},bottom:{style:"thin",color:{argb:"FFE7E9E2"}}}})}),l.columns.forEach((y,b)=>{const E=a.fields[b-2];y.width=b===0?7:b===1?18:E==="notes"?52:E==="description"||E==="connection"?38:Math.max(18,p.headers[b].length+3)}),l.views=[{state:"frozen",ySplit:u.number,xSplit:2}],l.autoFilter={from:{row:u.number,column:1},to:{row:u.number+p.rows.length,column:h}},l.pageSetup.printTitlesRow=`${u.number}:${u.number}`,l.headerFooter.oddFooter="© gaurav.cbiindia | &P of &N",g.length){const y=i.addWorksheet("Group summaries");y.columns=[{header:"Group field",width:25},{header:"Value",width:42},{header:"Records",width:12}],g.forEach(b=>b.values.forEach(({value:E,count:x})=>y.addRow([b.label,E,x]))),y.getRow(1).font={bold:!0},y.views=[{state:"frozen",ySplit:1}],y.autoFilter="A1:C1"}return new Uint8Array(await i.xlsx.writeBuffer())}function Bb(a,s){const o=String(s==="type"?a.type:mn(a,s));return o.trim()?o:""}function O2(a,s){const o=new Map;for(const i of a){const l=Bb(i,s);o.set(l,(o.get(l)??0)+1)}return[...o.entries()].map(([i,l])=>({value:i,count:l})).sort((i,l)=>i.value===""?l.value===""?0:1:l.value===""?-1:i.value.localeCompare(l.value,void 0,{numeric:!0,sensitivity:"base"}))}function py(a,s){return Object.entries(s).every(([o,i])=>i===void 0||i.includes(Bb(a,o)))}const _2=["All types",...ei],P2=["type",...Un],zb="pid-mapping-studio:engineering-column-widths:v1",Ju=44,ep=720,I2=a=>a==="rowNumber"?44:a==="type"?154:a==="itemTag"?250:a==="notes"?300:a==="description"||a==="stableId"?220:a==="drawingRef"?180:a==="sourcePage"?100:a==="reviewStatus"?150:136;function q2(){try{const a=JSON.parse(window.localStorage.getItem(zb)??"{}");return!a||typeof a!="object"||Array.isArray(a)?{}:Object.fromEntries(Object.entries(a).filter(s=>typeof s[1]=="number"&&Number.isFinite(s[1])).map(([s,o])=>[s,Math.max(Ju,Math.min(ep,o))]))}catch{return{}}}function fy(a){try{window.localStorage.setItem(zb,JSON.stringify(a))}catch{}}const M2=a=>a.split(/\s+/).map(s=>s[0]).join("").slice(0,2).toUpperCase();function hy({discipline:a}){const[s]=q.useState(()=>{try{return{drawings:ti(a),raw:Pr(a),error:""}}catch{return{drawings:[],raw:null,error:"Saved engineering data could not be read. Editing is blocked to protect it. Export a raw backup before recovery."}}}),[o,i]=q.useState(s.drawings),l=q.useRef(o),p=q.useRef(!0),g=q.useRef(s.raw),[h,m]=q.useState(o[0]?.id??""),u=o.find(j=>j.id===h)??o[0]??{id:"",name:"No drawing selected",revision:"",rows:[]};q.useEffect(()=>{const j=new URLSearchParams(window.location.search).get("source"),W=j?o.find(pe=>pe.sourcePdfId===j):void 0;W&&W.id!==h&&m(W.id)},[o,h]),q.useEffect(()=>{O({}),P(""),se("All types"),le(0)},[h,a]);const y=u.rows,[b,E]=q.useState(y[0]?.id??""),[x,R]=q.useState(""),[C,D]=q.useState("Rev 0"),[S,N]=q.useState(""),[T,_]=q.useState("Equipment"),[w,P]=q.useState(""),[k,I]=q.useState(""),[Z,se]=q.useState("All types"),[ee,le]=q.useState(0),[Te,he]=q.useState(12),[de,Y]=q.useState({field:"itemTag",direction:1}),[Q,be]=q.useState([]),[Ae,O]=q.useState({}),[J,F]=q.useState([...Un]),[X,ie]=q.useState([]),[ge,we]=q.useState(q2),Me=q.useRef(ge),qe=q.useRef(null),wt=q.useRef(null),[pt,gt]=q.useState("records"),xt=J.filter(j=>!X.includes(j)),aa=["rowNumber","type",...xt],Rt=j=>ge[j]??I2(j),U=aa.reduce((j,W)=>j+Rt(W),0),[ce,fe]=q.useState(!1),[B,ue]=q.useState(""),[Ce,me]=q.useState(""),[Le,Qe]=q.useState(s.error),Ve=(j,W,pe=!1)=>{const Ue={...Me.current,[j]:Math.max(Ju,Math.min(ep,Math.round(W)))};Me.current=Ue,we(Ue),pe&&fy(Ue)},Ie=j=>{const W=document.createElement("canvas").getContext("2d"),pe=qe.current?getComputedStyle(qe.current).font:"";W&&(W.font=pe||"12px sans-serif");const Ue=j==="rowNumber"?"#":j==="type"?"Object type":kt[j],M=j==="rowNumber"?[]:j==="type"?y.map(Ne=>Ne.type):y.map(Ne=>mn(Ne,j)),ae=Ne=>Ne.split(/\r?\n/).reduce((Pe,Je)=>Math.max(Pe,W?W.measureText(Je||"—").width:Je.length*7),0),ve=M.reduce((Ne,Pe)=>Math.max(Ne,ae(Pe)),ae(Ue));Ve(j,ve+(j==="itemTag"?158:j==="rowNumber"?18:54),!0)},jt=(j,W)=>{W.preventDefault(),W.stopPropagation(),W.currentTarget.setPointerCapture(W.pointerId),wt.current={column:j,pointerId:W.pointerId,startX:W.clientX,startWidth:Rt(j)}},ye=(j,W)=>{const pe=wt.current;!pe||pe.column!==j||pe.pointerId!==W.pointerId||(W.preventDefault(),Ve(j,pe.startWidth+W.clientX-pe.startX))},et=(j,W)=>{const pe=wt.current;!pe||pe.column!==j||pe.pointerId!==W.pointerId||(wt.current=null,fy(Me.current),W.currentTarget.hasPointerCapture(W.pointerId)&&W.currentTarget.releasePointerCapture(W.pointerId))},nt=(j,W)=>{W.key==="Enter"?(W.preventDefault(),Ie(j)):(W.key==="ArrowLeft"||W.key==="ArrowRight")&&(W.preventDefault(),Ve(j,Rt(j)+(W.key==="ArrowRight"?16:-16),!0))},Wt=(j,W)=>c.jsx("span",{className:"edm-column-resize-handle",role:"separator","aria-orientation":"vertical","aria-label":`Resize ${W} column`,"aria-valuenow":Rt(j),"aria-valuemin":Ju,"aria-valuemax":ep,title:"Drag to resize · double-click to fit text",tabIndex:0,onPointerDown:pe=>jt(j,pe),onPointerMove:pe=>ye(j,pe),onPointerUp:pe=>et(j,pe),onPointerCancel:pe=>et(j,pe),onDoubleClick:pe=>{pe.preventDefault(),pe.stopPropagation(),Ie(j)},onKeyDown:pe=>nt(j,pe),"data-testid":`resize-column-${j}`});q.useEffect(()=>{p.current=!0;const j=W=>{if(W.key===`pid-mapping-studio:engineering-workspace:v2:${a}`)try{const pe=ti(a);l.current=pe,i(pe),g.current=Pr(a),Qe("")}catch{Qe("Saved data changed and could not be read. Reload this page before editing.")}};return window.addEventListener("storage",j),()=>{p.current=!1,window.removeEventListener("storage",j)}},[a]);const Re=y.find(j=>j.id===b)??null;q.useEffect(()=>{const j=new URLSearchParams(window.location.search).get("record");if(!j)return;let W=j;try{W=hp(j)}catch{}const pe=y.find(Ue=>Ue.id===W);pe&&pe.id!==b&&E(pe.id)},[y,b]);const Da=q.useMemo(()=>{const j=w.trim().toLowerCase();return Object.fromEntries(P2.map(W=>{const pe={...Ae};delete pe[W];const Ue=y.filter(M=>(Z==="All types"||M.type===Z)&&(!j||Object.values(M).join(" ").toLowerCase().includes(j))&&py(M,pe));return[W,O2(Ue,W)]}))},[y,w,Z,Ae]),Tt=q.useMemo(()=>{const j=w.trim().toLowerCase();return y.filter(W=>(Z==="All types"||W.type===Z)&&(!j||Object.values(W).join(" ").toLowerCase().includes(j))&&py(W,Ae))},[y,w,Z,Ae]),mt=q.useMemo(()=>[...Tt].sort((j,W)=>{for(const pe of Q){const Ue=mn(j,pe).localeCompare(mn(W,pe)||"—",void 0,{numeric:!0});if(Ue)return Ue}return mn(j,de.field).localeCompare(mn(W,de.field),void 0,{numeric:!0})*de.direction}),[Tt,de,Q]),Zt=Math.max(1,Math.ceil(mt.length/Te)),qt={fields:xt,rows:mt,groups:Q},Ca=Fb(qt),lt=mt.slice(ee*Te,(ee+1)*Te);q.useEffect(()=>{lt.length&&!lt.some(j=>j.id===b)?E(lt[0].id):!lt.length&&b&&E("")},[lt,b]),q.useEffect(()=>le(j=>Math.min(j,Zt-1)),[Zt]);const Ot=j=>{if(s.error)return!1;try{return g.current=Zu(a,j,g.current),l.current=j,i(j),Qe(""),!0}catch(W){return Qe(W instanceof Error&&W.name!=="QuotaExceededError"?W.message:"Device storage is full or unavailable. This change was not saved. Download a backup and free space."),!1}},Mt=j=>Ot(o.map(W=>W.id===u.id?{...W,rows:j}:W)),yt=(j,W,pe)=>{Mt(y.map(Ue=>Ue.id===j?{...Ue,[W]:pe}:Ue))},Na=j=>{j.preventDefault();const W=x.trim();if(!W||o.some(Ue=>Ue.name.toLowerCase()===W.toLowerCase())){Qe("Enter a new, unique drawing reference.");return}const pe={id:crypto.randomUUID(),name:W,revision:C.trim()||"Rev 0",rows:[]};Ot([...o,pe])&&(m(pe.id),R(""),le(0))},na=j=>{if(j.preventDefault(),!u.id)return;const W=gp(T,S,u.name);if(Mt([...y,W])){N(""),P(""),se("All types"),Y({field:"itemTag",direction:1}),be([]);const pe=[...y,W].sort((Ue,M)=>Ue.itemTag.localeCompare(M.itemTag,void 0,{numeric:!0})).findIndex(Ue=>Ue.id===W.id);le(Math.floor(pe/Te)),E(W.id)}},on=()=>{!Re||!window.confirm(`Delete record ${Re.itemTag}? This cannot be undone without a backup.`)||Mt(y.filter(j=>j.id!==Re.id))&&E("")},Qa=async(j,W)=>{if(j.size>5*1024*1024){Qe("Import a file smaller than 5 MB.");return}try{const pe=u.id,Ue=await j.text();if(!p.current)return;if(W==="csv"){const M=l.current.find(ve=>ve.id===pe);if(!M)throw new Error("The target drawing no longer exists. Choose a drawing and try again.");const ae=GT(Ue,M.name);Ot(l.current.map(ve=>ve.id===pe?{...ve,rows:[...ve.rows,...ae]}:ve))&&(P(""),se("All types"),le(0))}else{const M=YT(Ue,a);Ot([...l.current,...M])&&(m(M[0]?.id??u.id),le(0))}}catch(pe){Qe(pe instanceof Error?pe.message:"This file could not be imported. No records were changed.")}},Fn=j=>Y(W=>({field:j,direction:W.field===j&&W.direction===1?-1:1})),ka=(j,W)=>{const pe=Da[j].map(M=>M.value),Ue=W!==void 0&&pe.every(M=>W.includes(M))&&W.length===pe.length;O(M=>{const ae={...M};return W===void 0||Ue?delete ae[j]:ae[j]=W,ae}),le(0)},En=j=>be(W=>W.includes(j)?W:[...W,j]),da=j=>{j.preventDefault();const W=j.dataTransfer.getData("text/engineering-field");Un.includes(W)&&En(W)},ua=j=>{const W=Math.max(0,Math.min(Zt-1,j));le(W);const pe=mt.slice(W*Te,(W+1)*Te)[0];pe&&E(pe.id)},At=j=>{m(j),P(""),le(0)},We=async(j,W=!1)=>{if(ce)return;const pe=W?{fields:Un,rows:o.flatMap(ae=>ae.rows),groups:[]}:qt,Ue=W?"all-records":"current-view",M={discipline:a==="pid"?"P&ID":"PFD",drawing:W?"All drawings":u.name,revision:W?void 0:u.revision,filter:W?"All types":Z,search:W?"":w.trim(),sort:W?"Drawing order":`${kt[de.field]} ${de.direction===1?"ascending":"descending"}`};fe(!0),ue(""),me("");try{const ae=j==="csv"?j2(pe):await L2(pe,M);xl(`engineering-${a}-${Ue}.${j}`,ae,j==="csv"?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),p.current&&ue(`Prepared ${j==="csv"?"CSV":"Excel"}: ${pe.rows.length} records · ${W?"all records":"current view"}.`)}catch(ae){p.current&&me(ae instanceof Error?ae.message:"Export could not be prepared. Your saved records have not changed.")}finally{p.current&&fe(!1)}};return c.jsxs("main",{className:"edm-page","data-mobile-panel":pt,children:[c.jsxs("header",{className:"edm-topbar",children:[c.jsxs(la,{href:`/workspace/${a}`,className:"edm-brand","data-testid":"link-edm-workspace",children:[c.jsx("span",{className:"edm-mark",children:"ED"}),c.jsxs("span",{children:["Engineering Data Manager",c.jsx("small",{children:"Mapping Studio / browser-local workspace"})]})]}),c.jsxs("div",{className:"edm-toplinks",children:[c.jsxs("nav",{className:"edm-disciplines","aria-label":"Discipline navigation",children:[c.jsx(la,{href:"/workspace/pfd/engineering-data",className:a==="pfd"?"active":"","data-testid":"link-edm-pfd",children:"PFD"}),c.jsx(la,{href:"/workspace/pid/engineering-data",className:a==="pid"?"active":"","data-testid":"link-edm-pid",children:"P&ID"})]}),c.jsxs("span",{className:"edm-local",children:[c.jsx(ys,{size:13}),"Saved on this device"]}),c.jsxs(la,{href:`/workspace/${a}`,className:"btn subtle","aria-label":"Back to the PFD or P&ID workspace","data-testid":"link-back-workspace",children:[c.jsx(Sy,{size:13})," Workspace"]})]})]}),c.jsxs("nav",{className:"edm-mobile-tabs","aria-label":"Engineering data panels",children:[c.jsx("button",{type:"button",className:pt==="catalog"?"active":"","aria-pressed":pt==="catalog",onClick:()=>gt("catalog"),"data-testid":"tab-edm-catalog",children:"Catalog"}),c.jsx("button",{type:"button",className:pt==="records"?"active":"","aria-pressed":pt==="records",onClick:()=>gt("records"),"data-testid":"tab-edm-records",children:"Records"}),c.jsx("button",{type:"button",className:pt==="properties"?"active":"","aria-pressed":pt==="properties",onClick:()=>gt("properties"),"data-testid":"tab-edm-properties",children:"Properties"})]}),c.jsxs("div",{className:"edm-titlebar",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"edm-eyebrow",children:[a==="pfd"?"PROCESS FLOW DIAGRAM":"PIPING & INSTRUMENTATION"," / YOUR RECORDS"]}),c.jsx("h1",{children:"Engineering data"}),c.jsx("p",{children:"Add or import your records. PFD and P&ID stay separate on this device."})]}),c.jsxs("div",{className:"edm-object-select",children:[c.jsx("span",{children:"Object type"}),c.jsx("select",{value:Z,onChange:j=>{se(j.target.value),le(0)},"aria-label":"Object type filter","data-testid":"select-object-type",children:_2.map(j=>c.jsx("option",{children:j},j))}),c.jsx(gs,{size:14})]})]}),c.jsxs("div",{className:"edm-file-actions",children:[c.jsxs("button",{className:"btn",disabled:!o.length,onClick:()=>xl(`engineering-${a}-backup.json`,zT(a,o),"application/json"),"data-testid":"button-backup-data",children:[c.jsx(Us,{size:14})," Download backup"]}),c.jsxs("label",{className:"btn",children:[c.jsx(_r,{size:14})," Import backup",c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Import engineering backup",disabled:!!s.error,onChange:j=>{const W=j.currentTarget.files?.[0];j.currentTarget.value="",W&&Qa(W,"backup")}})]}),c.jsx("button",{className:"btn",disabled:ce||!o.some(j=>j.rows.length),onClick:()=>{We("csv",!0)},"data-testid":"button-report-all",children:"All records · CSV"}),c.jsx("button",{className:"btn",disabled:ce||!o.some(j=>j.rows.length),onClick:()=>{We("xlsx",!0)},"data-testid":"button-report-all-excel",children:"All records · Excel"}),s.error&&c.jsx("button",{className:"btn",onClick:()=>{try{const j=Pr(a);j&&xl(`engineering-${a}-raw.json`,j,"application/json")}catch{Qe("Device storage cannot be accessed. The saved data has not been changed.")}},children:"Export raw backup"}),s.error&&c.jsx("button",{className:"btn danger",onClick:()=>{if(window.confirm("Delete unreadable engineering data for this discipline? Download a raw backup first. This cannot be undone and does not delete PDFs or the old demo data."))try{window.localStorage.removeItem(`pid-mapping-studio:engineering-workspace:v2:${a}`),window.location.reload()}catch{Qe("Device storage cannot be cleared. The saved data has not been changed.")}},children:"Reset unreadable data"}),c.jsx("span",{children:"Local storage only · download backups regularly"})]}),c.jsxs("div",{className:"edm-workspace",children:[c.jsxs("aside",{className:"edm-catalog",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsxs("span",{children:[c.jsx(np,{size:15})," Catalog"]}),c.jsx("span",{className:"edm-counter",children:o.length})]}),c.jsxs("div",{className:"edm-catalog-search",children:[c.jsx(Wo,{size:13}),c.jsx("input",{"aria-label":"Filter drawings",placeholder:"Filter drawings…",value:k,onChange:j=>I(j.target.value),"data-testid":"input-catalog-filter"})]}),c.jsxs("div",{className:"edm-catalog-label",children:["DRAWINGS · ",a.toUpperCase()]}),c.jsxs("div",{className:"edm-drawing-list",children:[o.filter(j=>j.name.toLowerCase().includes(k.toLowerCase())).map(j=>c.jsxs("button",{className:`edm-drawing-item ${u.id===j.id?"selected":""}`,onClick:()=>At(j.id),"data-testid":`button-drawing-${j.id}`,children:[c.jsx(ms,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:j.name}),c.jsxs("small",{children:[j.revision," · ",j.rows.length," records"]})]})]},j.id)),!o.some(j=>j.name.toLowerCase().includes(k.toLowerCase()))&&c.jsx("div",{className:"edm-empty",children:"No drawings match."})]}),c.jsxs("form",{className:"edm-create-drawing",onSubmit:Na,children:[c.jsxs("label",{children:["Drawing reference",c.jsx("input",{value:x,onChange:j=>R(j.target.value),maxLength:160,required:!0,placeholder:"e.g. PID-001","aria-label":"New drawing reference","data-testid":"input-new-drawing"})]}),c.jsxs("label",{children:["Revision",c.jsx("input",{value:C,onChange:j=>D(j.target.value),maxLength:80,"aria-label":"New drawing revision"})]}),c.jsxs("button",{className:"btn primary",disabled:!!s.error,"data-testid":"button-add-drawing",children:[c.jsx(Ko,{size:14})," Add drawing"]})]}),u.id&&c.jsxs("button",{className:"btn danger edm-delete-drawing",disabled:!!s.error,onClick:()=>{if(!window.confirm(`Delete drawing ${u.name} and its ${y.length} records? Download a backup first. This does not delete source PDFs.`))return;const j=o.filter(W=>W.id!==u.id);Ot(j)&&(m(j[0]?.id??""),E(""),le(0))},"data-testid":"button-delete-drawing",children:[c.jsx(jl,{size:14})," Delete drawing"]}),c.jsxs("div",{className:"edm-catalog-foot",children:["No invented sample records.",c.jsx("br",{}),"Source PDFs stay in your workspace."]})]}),c.jsxs("section",{className:"edm-main",children:[c.jsxs("section",{className:"edm-preview panel edm-source-summary",children:[c.jsxs("header",{children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"ACTIVE DRAWING RECORD"}),c.jsx("strong",{"data-testid":"text-active-drawing",children:u.name})]}),c.jsx("span",{className:"edm-revision",children:u.revision})]}),c.jsx("p",{children:u.sourcePdfId?`${u.sourceAlias??"PDF"} tag candidates and clearly labelled values are stored here. Every extracted record needs review. Blank fields mean the PDF text/OCR did not provide a clear value.`:"Add records manually or import them from CSV. New PDF tag candidates appear here with a source page and a review status."}),c.jsxs(la,{href:u.sourcePdfId?`/workspace/${a}?pdf=${encodeURIComponent(u.sourcePdfId)}&page=${encodeURIComponent(u.rows.find(j=>j.sourcePdfId)?.sourcePage||"1")}#pdf-workflow-title`:`/workspace/${a}`,className:"btn subtle",children:[c.jsx(ms,{size:14})," ",u.sourcePdfId?"Open source PDF page":"View original PDFs"]}),c.jsxs("div",{className:"edm-autocad-status",role:"note",children:[c.jsx("strong",{children:"AutoCAD 2020: not connected."})," EDE extraction does not create a DWG."]})]}),c.jsxs("section",{className:"edm-editor panel",children:[c.jsxs("div",{className:"edm-editor-title",children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"DATA WORKSPACE"}),c.jsx("h2",{children:"Engineering Data Editor"})]}),c.jsx("div",{className:"edm-type-chip",children:Z})]}),c.jsxs("form",{className:"edm-add-record",onSubmit:na,children:[c.jsxs("label",{children:["Object type",c.jsx("select",{value:T,onChange:j=>_(j.target.value),"aria-label":"New record type",children:ei.map(j=>c.jsx("option",{children:j},j))})]}),c.jsxs("label",{children:["Item tag",c.jsx("input",{value:S,onChange:j=>N(j.target.value),maxLength:160,required:!0,placeholder:"e.g. P-101","aria-label":"New item tag","data-testid":"input-new-tag"})]}),c.jsxs("button",{className:"btn primary",disabled:!u.id||!!s.error,"data-testid":"button-add-record",children:[c.jsx(Ko,{size:14})," Add record"]})]}),c.jsxs("div",{className:"edm-report-actions",children:[c.jsxs("button",{className:"btn",disabled:ce||!mt.length,onClick:()=>{We("csv")},"data-testid":"button-export-report",children:[c.jsx(Us,{size:14})," Current view · CSV"]}),c.jsxs("button",{className:"btn",disabled:ce||!mt.length,onClick:()=>{We("xlsx")},"data-testid":"button-export-excel",children:[c.jsx(Us,{size:14})," Current view · Excel"]}),c.jsxs("label",{className:"btn",children:[c.jsx(_r,{size:14})," Import CSV",c.jsx("input",{type:"file",accept:".csv,text/csv","aria-label":"Import engineering CSV",disabled:!u.id||!!s.error,onChange:j=>{const W=j.currentTarget.files?.[0];j.currentTarget.value="",W&&Qa(W,"csv")}})]}),c.jsx("button",{className:"btn subtle",onClick:()=>xl("engineering-import-template.csv",XT([]),"text/csv;charset=utf-8"),"data-testid":"button-csv-template",children:"CSV template"}),c.jsxs("button",{className:"btn danger",disabled:!Re||!!s.error,onClick:on,"data-testid":"button-delete-record",children:[c.jsx(jl,{size:14})," Delete selected"]})]}),c.jsxs("div",{className:"edm-export-note","aria-live":"polite",children:[c.jsx("span",{children:"Current view: shown columns, filters, sorting and all matching rows across pages. Excel also includes group summaries. CSV has no visual formatting."}),ce&&c.jsx("strong",{role:"status",children:"Preparing export…"}),B&&c.jsx("strong",{role:"status",children:B}),Ce&&c.jsx("strong",{role:"alert",children:Ce})]}),c.jsx(R2,{order:J,hidden:X,onChange:(j,W)=>{F(j),ie(W)}}),c.jsxs("div",{className:"edm-placement-legend","aria-label":"CAD placement status legend",children:[c.jsxs("span",{children:[c.jsx("i",{className:"available","aria-hidden":"true",children:"●"})," Available / not placed"]}),c.jsxs("span",{children:[c.jsx("i",{className:"current","aria-hidden":"true",children:"●"})," On this drawing"]}),c.jsxs("span",{children:[c.jsx("i",{className:"another","aria-hidden":"true",children:"●"})," On another drawing"]}),c.jsx("small",{children:"Based on the saved reference only; CAD is not connected for live verification."})]}),c.jsxs("div",{className:"edm-grid-toolbar",children:[c.jsxs("label",{className:"edm-global-search",children:[c.jsx(Wo,{size:14}),c.jsx("input",{placeholder:"Search all fields…","aria-label":"Search engineering data",value:w,onChange:j=>{P(j.target.value),le(0)},"data-testid":"input-engineering-search"})]}),c.jsxs("span",{className:"edm-result-total","data-testid":"text-result-count",children:[Tt.length," records"]}),c.jsxs("button",{className:"edm-toolbar-button",onClick:()=>{P(""),se("All types"),O({}),le(0)},"data-testid":"button-clear-filters",children:[c.jsx(ku,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"edm-groups",onDragOver:j=>j.preventDefault(),onDrop:da,"data-testid":"drop-column-group",children:[c.jsx("span",{children:"GROUP BY"}),Q.length?Q.map(j=>c.jsxs("button",{onClick:()=>be(W=>W.filter(pe=>pe!==j)),title:"Remove group",children:[kt[j]," ",c.jsx("b",{children:"×"})]},j)):c.jsx("em",{children:"Drag a column header here to group records"})]}),c.jsxs("label",{className:"edm-group-select",children:["Add group",c.jsxs("select",{value:"","aria-label":"Add group",onChange:j=>{j.target.value&&(En(j.target.value),le(0))},children:[c.jsx("option",{value:"",children:"Choose a column…"}),Un.filter(j=>!Q.includes(j)).map(j=>c.jsx("option",{value:j,children:kt[j]},j))]})]}),c.jsx("p",{className:"edm-table-sizing-help",children:"Drag a column edge to resize it. Double-click an edge to fit the text."}),Ca.map(j=>c.jsxs("div",{className:"edm-group-summary",children:[c.jsx("strong",{children:j.label}),j.values.map(({value:W,count:pe})=>c.jsxs("span",{children:[W,c.jsx("i",{children:pe})]},W))]},j.field)),c.jsx("div",{className:"edm-table-wrap",children:c.jsxs("table",{ref:qe,className:"edm-table",style:{width:U,minWidth:U},children:[c.jsx("colgroup",{children:aa.map(j=>c.jsx("col",{style:{width:Rt(j)}},j))}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsxs("th",{className:"edm-rownum",children:[c.jsx("div",{className:"edm-column-heading",children:c.jsx("span",{className:"edm-column-heading-label",children:"#"})}),Wt("rowNumber","row number")]}),c.jsxs("th",{children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsx("span",{className:"edm-column-heading-label",children:"Object type"}),c.jsx(uy,{label:"Object type",options:Da.type,selectedValues:Ae.type,onApply:j=>ka("type",j)})]}),Wt("type","Object type")]}),xt.map(j=>c.jsxs("th",{draggable:!0,onDragStart:W=>W.dataTransfer.setData("text/engineering-field",j),children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsxs("button",{className:"edm-column-sort",title:jr[j],onClick:()=>Fn(j),"data-testid":`button-sort-${j}`,children:[kt[j],c.jsx("span",{children:de.field===j?de.direction===1?"↑":"↓":"↕"})]}),c.jsx(uy,{label:kt[j],options:Da[j],selectedValues:Ae[j],onApply:W=>ka(j,W)})]}),Wt(j,kt[j])]},j))]})}),c.jsxs("tbody",{children:[lt.map((j,W)=>{const pe=b===j.id,Ue=BT(j,u),M=Ue==="current"?"On this drawing":Ue==="another"?"On another drawing":"Available / not placed";return c.jsxs("tr",{className:pe?"selected":"","data-stable-id":j.id,"data-placement-status":Ue,onClick:()=>E(j.id),"data-testid":`row-engineering-${j.id}`,children:[c.jsx("td",{className:"edm-rownum",children:ee*Te+W+1}),c.jsx("td",{children:c.jsx("span",{className:`edm-type-badge ${j.type.toLowerCase().replace(/\s+/g,"-")}`,children:j.type})}),xt.map(ae=>{const ve=mn(j,ae);return ae==="notes"?c.jsx("td",{className:"edm-notes-cell",children:pe?c.jsx("textarea",{"aria-label":`Notes for ${j.itemTag}`,rows:2,maxLength:2e3,value:ve,onClick:xe=>xe.stopPropagation(),onChange:xe=>yt(j.id,ae,xe.target.value),"data-testid":`input-cell-${j.id}-${ae}`}):c.jsx("span",{title:ve,children:ve||"—"})},ae):ae==="itemTag"?c.jsxs("td",{className:"mono edm-item-tag-cell",children:[c.jsxs("span",{className:`edm-placement-indicator ${Ue}`,"aria-label":`Placement: ${M}`,title:`Placement: ${M}`,children:[c.jsx("i",{"aria-hidden":"true",children:"●"}),c.jsx("span",{children:M})]}),pe?c.jsx("input",{className:"edm-item-tag-editor","aria-label":`${kt[ae]} for ${j.itemTag}`,value:ve,onClick:xe=>xe.stopPropagation(),onChange:xe=>yt(j.id,ae,xe.target.value),"data-testid":`input-cell-${j.id}-${ae}`}):c.jsx("span",{className:`edm-tag-value ${Ue}`,"data-testid":`text-item-tag-${j.id}`,children:ve})]},ae):c.jsx("td",{className:ae==="stableId"?"mono":"",children:ae==="stableId"?c.jsx("span",{className:"edm-stable-id-value",title:ve,"aria-label":`Stable ID ${ve}`,children:ve}):pe&&(ae==="reviewStatus"||ae==="groupStatus")?c.jsx("select",{"aria-label":`${kt[ae]} for ${j.itemTag}`,value:ve,onClick:xe=>xe.stopPropagation(),onChange:xe=>yt(j.id,ae,xe.target.value),"data-testid":`input-cell-${j.id}-${ae}`,children:(ae==="reviewStatus"?["Needs review","Reviewed","Manual"]:["","Start","Continue","Branch","Merge","End-of-Group"]).map(xe=>c.jsx("option",{value:xe,children:xe||"Not set"},xe))}):pe?c.jsx("input",{"aria-label":`${kt[ae]} for ${j.itemTag}`,value:ve,onClick:xe=>xe.stopPropagation(),onChange:xe=>yt(j.id,ae,xe.target.value),"data-testid":`input-cell-${j.id}-${ae}`}):c.jsx("span",{title:ve,children:ve||"—"})},ae)})]},j.id)}),!lt.length&&c.jsx("tr",{children:c.jsx("td",{colSpan:xt.length+2,children:c.jsx("div",{className:"edm-empty",children:"No records match these filters."})})})]})]})}),c.jsxs("footer",{className:"edm-pagination",children:[c.jsxs("span",{children:["Showing ",c.jsxs("strong",{children:[mt.length?ee*Te+1:0,"–",Math.min((ee+1)*Te,mt.length)]})," of ",c.jsx("strong",{children:mt.length})]}),c.jsxs("label",{children:["Rows ",c.jsx("select",{value:Te,onChange:j=>{he(Number(j.target.value)),le(0)},"aria-label":"Rows per page","data-testid":"select-page-size",children:[8,12,24,36].map(j=>c.jsx("option",{value:j,children:j},j))})," per page"]}),c.jsxs("div",{className:"edm-page-controls",children:[c.jsx("button",{disabled:ee===0,onClick:()=>ua(ee-1),"aria-label":"Previous page","data-testid":"button-page-previous",children:c.jsx(Ty,{size:15})}),c.jsxs("span",{children:["Page ",ee+1," of ",Zt]}),c.jsx("button",{disabled:ee>=Zt-1,onClick:()=>ua(ee+1),"aria-label":"Next page","data-testid":"button-page-next",children:c.jsx(ap,{size:15})})]})]})]})]}),c.jsxs("aside",{className:"edm-properties panel",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsx("span",{children:"Properties"}),c.jsx("span",{className:"edm-counter",children:Re?"EDIT":""})]}),c.jsxs("details",{className:"edm-field-guide",children:[c.jsx("summary",{children:"What do these fields mean?"}),c.jsx("dl",{children:Un.map(j=>c.jsxs("div",{children:[c.jsx("dt",{children:kt[j]}),c.jsx("dd",{children:jr[j]})]},j))})]}),Re&&c.jsxs("label",{className:"edm-record-type",children:["Object type",c.jsx("select",{value:Re.type,"aria-label":"Selected record type",disabled:!!s.error,onChange:j=>Mt(y.map(W=>W.id===Re.id?{...W,type:j.target.value}:W)),children:ei.map(j=>c.jsx("option",{children:j},j))})]}),Re?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"edm-property-summary",children:[c.jsx("span",{className:"edm-property-icon",children:M2(Re.type)}),c.jsxs("div",{children:[c.jsx("strong",{"data-testid":"text-selected-tag",children:Re.itemTag}),c.jsxs("small",{children:[Re.type," · ",u.revision]})]})]}),(Re.sourcePdfId??u.sourcePdfId)&&c.jsxs(la,{className:"btn subtle edm-source-locate",href:`/workspace/${a}?pdf=${encodeURIComponent(Re.sourcePdfId??u.sourcePdfId??"")}&page=${encodeURIComponent(String(Re.sourceLocations?.[0]?.pageNumber??Re.sourcePage??"1"))}&record=${encodeURIComponent(Re.id)}#pdf-workflow-title`,"data-testid":"link-selected-source-location",children:[c.jsx(ms,{size:13})," Locate on source PDF",c.jsx("small",{children:Re.sourceLocations?.length?`${Re.sourceLocations.length} OCR location(s) · review required`:`Page ${Re.sourcePage||"1"} · no exact position saved`})]}),c.jsxs("div",{className:"edm-stable-id-panel",children:[c.jsx("span",{children:"STABLE ID"}),c.jsx("code",{"data-testid":"text-stable-id",children:Re.id}),c.jsx("small",{children:"Permanent record identity. It does not change with the tag or drawing."})]}),c.jsxs("div",{className:"edm-property-scroll",children:[c.jsx("div",{className:"edm-property-group",children:"IDENTIFICATION"}),["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef"].map(j=>c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:jr[j],children:kt[j]}),c.jsx("input",{value:Re[j],onChange:W=>yt(Re.id,j,W.target.value),"data-testid":`property-${j}`})]},j)),c.jsx("div",{className:"edm-property-group",children:"CAD PLACEMENT"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:jr.placementDrawingRef,children:kt.placementDrawingRef}),c.jsx("input",{list:"edm-placement-drawings",value:Re.placementDrawingRef,onChange:j=>yt(Re.id,"placementDrawingRef",j.target.value),"data-testid":"property-placementDrawingRef",placeholder:"Blank = available / not placed"}),c.jsx("small",{children:"Reference only. This browser is not connected to CAD geometry."})]}),c.jsx("datalist",{id:"edm-placement-drawings",children:o.map(j=>c.jsx("option",{value:j.name},j.id))}),c.jsx("div",{className:"edm-property-group",children:Re.type==="Pipe Run"?"PIPE RUN & PROCESS":"PROCESS & CONNECTION"}),(Re.type==="Pipe Run"?["nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description"]:["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","opcDrawing","connection","description"]).map(j=>{const W=j;return c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:jr[W],children:kt[W]}),W==="groupStatus"?c.jsx("select",{value:Re.groupStatus,onChange:pe=>yt(Re.id,"groupStatus",pe.target.value),"aria-label":"Pipe run group status",children:["","Start","Continue","Branch","Merge","End-of-Group"].map(pe=>c.jsx("option",{value:pe,children:pe||"Not set"},pe))}):c.jsx("input",{value:Re[W],onChange:pe=>yt(Re.id,W,pe.target.value),"data-testid":`property-${W}`})]},W)}),c.jsx("div",{className:"edm-property-group",children:"NOTES"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:jr.notes,children:kt.notes}),c.jsx("textarea",{rows:5,maxLength:2e3,value:Re.notes,onChange:j=>yt(Re.id,"notes",j.target.value),"data-testid":"property-notes"})]})]}),c.jsxs("div",{className:"edm-save-state",role:"status","data-testid":"status-local-save",children:[c.jsx("span",{})," Edits save automatically in this browser"]})]}):c.jsx("div",{className:"edm-empty",children:"Select a graphic or table row to inspect properties."})]})]}),c.jsxs("footer",{className:"edm-footnote",children:[c.jsx("span",{children:"© 2026 gaurav.cbiindia · DEVICE-LOCAL DATA"}),c.jsxs("span",{children:[y.length," records · ",u.name," · ",a.toUpperCase(),"-isolated browser storage"]})]}),Le&&c.jsx("div",{className:"edm-storage-error",role:"alert","data-testid":"status-storage-error",children:Le})]})}function $2({assetId:a,candidateId:s,blockName:o,entityType:i,description:l,disabled:p,onDescriptionChange:g}){const[h,m]=q.useState(null),[u,y]=q.useState("");q.useEffect(()=>{let E=!0;return m(null),y(""),fb(a).then(x=>{E&&m(x)},x=>{E&&y(x instanceof Error?x.message:"Preview could not be read.")}),()=>{E=!1}},[a]);const b=i==="directionArrow"?[]:(h?.nearbyLabels??[]).filter(E=>!fp(E));return c.jsxs("section",{className:"cad-block-review-visual","aria-label":`Identify block ${o}`,"data-testid":`preview-block-${s}`,children:[c.jsxs("div",{className:"cad-block-review-image",children:[h?.previewSvg?c.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(h.previewSvg)}`,alt:`DXF geometry preview of block ${o}`,"data-testid":`img-block-${s}`}):c.jsxs("div",{className:"cad-block-preview-empty",role:"status",children:[c.jsx("strong",{children:u?"Preview could not load":h?"Overview DXF needed":"Loading local preview…"}),c.jsx("span",{children:u||(h?"Run PIDEXPORTOVERVIEW on the original SOURCE drawing. Add its *_OVERVIEW.dxf to the existing extraction ZIP and import again. Do not repeat the full block extraction.":"")})]}),c.jsx("small",{children:"Visual aid only—not a fidelity check. Fonts, hatches, masks and some CAD entities may be simplified or absent."})]}),c.jsxs("div",{className:"cad-block-review-labels",children:[c.jsx("strong",{children:i==="directionArrow"?"Direction Arrow":"Nearby legend text"}),c.jsx("small",{children:i==="directionArrow"?"Kept as its own P&ID entity; no equipment, instrument, or component name is inferred from nearby text.":"Suggested by position, not confirmed identity. Multiple parts may share one assembly description."}),b.length?c.jsx("div",{className:"cad-block-label-choices",children:b.map((E,x)=>c.jsx("button",{type:"button",className:"btn subtle",disabled:p,onClick:()=>g(E),"data-testid":`button-use-label-${s}-${x}`,children:E},`${E}-${x}`))}):c.jsx("p",{"data-testid":`status-no-label-${s}`,children:i==="directionArrow"?h?.sourcePlacements?.length?`Source insert context retained: ${h.sourcePlacements.map(E=>`${E.layer}, ${E.rotationDegrees}° (${E.count})`).join("; ")}.`:"Source rotation and layer context will be used if an overview DXF is available.":h?.labelMatchAmbiguous?"Ambiguous: this block is used beside different legend labels. No item name is suggested; verify it from the source.":h?.labelMatchSkipped?"Skipped: this insert is on layer 0 or a primary process-pipe layer, so its nearby label is not used as an item mapping.":h?.previewSvg?"No nearby label found. Verify the source drawing and enter the description below.":"Label suggestions appear after an overview DXF is imported."}),c.jsxs("label",{children:[c.jsx("span",{children:"Confirmed item description"}),c.jsx("input",{value:l,onChange:E=>g(E.target.value),placeholder:"Verify the source, then enter the real item name",disabled:p,"data-testid":`input-item-description-${s}`})]}),c.jsx("small",{children:"Saved only when you approve this record. A label does not automatically choose a category or CAD layer."})]})]})}const Yb={titleBlock:"Title block",layer:"Layer",textStyle:"Text style",linetype:"Linetype",dimensionStyle:"Dimension style",symbol:"Symbol",directionArrow:"Direction Arrow",legend:"Legend"};function $o(a){return Yb[a]??"CAD standard"}function U2(a,s){if(a.proposedScope==="project"&&a.projectId){const o=[...new Set(s.filter(i=>i.proposedScope==="project"&&i.projectId).map(i=>i.projectId))].sort();return`Project ${String(o.indexOf(a.projectId)+1).padStart(2,"0")}`}if(a.proposedScope==="company"){const o=[...new Set(s.filter(i=>i.proposedScope==="company").map(i=>i.sourceGroup))].sort();return`Legends Library source ${String(o.indexOf(a.sourceGroup)+1).padStart(2,"0")}`}return"Unclassified source"}function gy(a,s){return`Project ${String(s.indexOf(a)+1).padStart(2,"0")}`}function hn(a,s){return a.find(o=>o.label===s)?.value.trim()??""}function my({value:a,disabled:s,onChange:o}){let i=null,l="";try{i=Fs(a)}catch(C){l=C instanceof Error?C.message:"Enter a valid X,Y outline."}const p=i?.map(([C])=>C)??[],g=i?.map(([,C])=>C)??[],h=Math.min(...p),m=Math.max(...p),u=Math.min(...g),y=Math.max(...g),b=m-h||1,E=y-u||1,x=9,R=i?.map(([C,D])=>`${x+(C-h)/b*(160-x*2)},${90-x-(D-u)/E*(90-x*2)}`).join(" ");return c.jsxs("label",{className:"candidate-fallback-category valve-mask-editor",children:[c.jsxs("span",{children:["Valve-body Wipeout outline ",c.jsx("small",{children:"Reviewed block-local X,Y points; do not include pipe tails. Separate points with semicolons."})]}),c.jsx("textarea",{value:a,onChange:C=>o(C.target.value),placeholder:"x,y; x,y; x,y; …","aria-label":"Valve-body Wipeout outline points",rows:3,disabled:s}),c.jsx("small",{className:"candidate-layer-help",children:"Enter vertices in order using the valve block’s local drawing units. The small preview shows only the mask contour, not the source CAD block."}),i&&R?c.jsx("svg",{className:"valve-mask-preview",viewBox:"0 0 160 90",role:"img","aria-label":"Preview of the saved valve mask outline",children:c.jsx("polygon",{points:R})}):c.jsx("small",{className:"candidate-layer-help",children:l}),c.jsx("small",{className:"candidate-layer-help",children:"The runner masks only inside this polygon, leaves the underlying Pipe Run continuous, and draws the valve block on top."})]})}function hs(a,s){const o=hn(a.item.fields,"Source discipline");if(o!=="PFD"&&o!=="P&ID"&&o!=="Shared")return[];const g=[...(a.proposedScope==="company"?"company":"project")==="project"&&a.projectId?s.projects[a.projectId]?.items??[]:[],...s.companyItems].filter(h=>{if(h.category!=="layer"||h.sourceKind!=="extracted-dwg"||h.reviewStatus!=="reviewed")return!1;const m=hn(h.fields,"Source discipline");return o==="Shared"?m==="Shared":m==="Shared"||m===o}).map(h=>hn(h.fields,"CAD name")).filter(h=>h&&h.toUpperCase()!=="0");return[...new Set(g)].sort((h,m)=>h.localeCompare(m))}function F2({library:a,reviewCandidates:s,onApproveCompany:o,onApproveProject:i,onDismiss:l,onUpdateReviewedItem:p,onSetCompanyDefault:g,onSetProjectDefault:h,storageNotice:m="",readOnly:u=!1,reviewOnly:y=!1,backHref:b="/"}){const[E,x]=q.useState("company"),[R,C]=q.useState(""),[D,S]=q.useState("all"),[N,T]=q.useState(""),[_,w]=q.useState(0),[P,k]=q.useState(""),[I,Z]=q.useState({}),[se,ee]=q.useState({}),[le,Te]=q.useState({}),[he,de]=q.useState({}),[Y,Q]=q.useState({}),[be,Ae]=q.useState({}),O=20,J=q.useMemo(()=>Object.keys(a.projects).sort(),[a.projects]),F=J.includes(N)?N:J[0]??"",X=s.filter(B=>B.status==="needs-review"),ie=s.filter(B=>B.status==="approved").length,ge=s.filter(B=>B.status==="dismissed").length,we=B=>be[B.id]??B.item.category,Me=(B,ue)=>{const Ce=we(B),me=B.item.sourceKind==="extracted-dwg"&&!!B.item.fields.find(ye=>ye.label==="Block asset ID")?.value.trim(),Le=(I[B.id]??B.item.fields.find(ye=>ye.label==="Fallback category")?.value??"").trim(),Qe=se[B.id]??B.item.fields.find(ye=>ye.label==="Target CAD layer")?.value??"";if(Ce==="symbol"&&me&&!Le){k("Enter the real equipment category (such as pump or valve) before approving an extracted block.");return}if(Ce==="symbol"&&me&&!hs(B,a).includes(Qe)){k(hs(B,a).length?"Choose an approved non-zero CAD layer for this block before approving it.":"Approve a matching Equipment, Instrument, or other placement layer first. Layer 0 cannot be used for block placement.");return}const Ve=le[B.id]??B.item.fields.find(ye=>ye.label==="Wipeout mask boundary")?.value??"";if(Ce==="symbol"&&Le.toLowerCase()==="valve")try{Fs(Ve)}catch(ye){k(ye instanceof Error?ye.message:"Enter and review a valve-body Wipeout outline before approval.");return}k("");const Ie=me?Ce==="directionArrow"?[{label:"Entity type",value:"Direction Arrow"},{label:"Item description",value:Y[B.id]||"Direction Arrow"}]:[{label:"Fallback category",value:Le},{label:"Target CAD layer",value:Qe},{label:"Item description",value:Y[B.id]??hn(B.item.fields,"Item description")},...Le.toLowerCase()==="valve"?[{label:"Wipeout mask boundary",value:Ve}]:[]]:void 0;(ue==="company"?o:i)(B.id,Ie,me?Ce:void 0)&&k(ue==="company"?"Approved and added to the Legends Library.":"Approved and added to the project library.")},qe=B=>{l(B)&&k("Record dismissed from the review queue.")},wt=(B,ue)=>{const Ce=he[B]??ue.find(me=>me.label==="Wipeout mask boundary")?.value??"";try{Fs(Ce)}catch(me){k(me instanceof Error?me.message:"Enter a valid valve-body mask outline.");return}p(B,[{label:"Wipeout mask boundary",value:Ce}])&&k("Reviewed valve-body mask saved to the Legends Library.")},pt=q.useMemo(()=>{const B=R.trim().toLowerCase();return X.filter(ue=>{const Ce=we(ue),me=D==="all"||Ce===D,Le=ue.item.fields.some(Qe=>`${Qe.label} ${Qe.value}`.toLowerCase().includes(B));return me&&(!B||Le||$o(Ce).toLowerCase().includes(B))})},[X,R,D,be]),gt=Math.max(1,Math.ceil(pt.length/O)),xt=Math.min(_,gt-1),aa=pt.slice(xt*O,(xt+1)*O);q.useEffect(()=>w(0),[R,D]);const U=(E==="company"?a.companyItems:a.projects[F]?.items??[]).filter(B=>{const ue=R.trim().toLowerCase(),Ce=D==="all"||B.category===D,me=B.fields.some(Le=>`${Le.label} ${Le.value}`.toLowerCase().includes(ue));return Ce&&(!ue||me||$o(B.category).toLowerCase().includes(ue))}),ce=(B,ue)=>{if(!$s.includes(ue))return;const Ce=ue,me=a.companyItems.some(Le=>Le.category==="titleBlock"&&Le.reviewStatus==="reviewed"&&(Le.sheetSize===Ce||Le.fields.some(Qe=>Qe.label==="Sheet size"&&Qe.value===Ce)));if(Ce!==a.companyDefaults[B]&&!me){k(`Approve a company title-block mapping for ${Ce} before changing this default.`);return}k(""),g(B,Ce)},fe=(B,ue,Ce)=>{if(!$s.includes(Ce))return;const me=Ce;if(![...a.projects[B]?.items??[],...a.companyItems].some(Ve=>Ve.category==="titleBlock"&&Ve.reviewStatus==="reviewed"&&(Ve.sheetSize===me||Ve.fields.some(Ie=>Ie.label==="Sheet size"&&Ie.value===me)))){k(`Approve a title-block mapping for ${me} before saving this project default.`);return}k(""),h(B,ue,me)};return c.jsxs("main",{className:`standards-page${y?" standards-review-only":""}`,children:[c.jsxs("header",{className:"standards-topbar",children:[c.jsxs(la,{href:y?b:"/",className:"standards-brand","data-testid":"link-standards-home",children:[c.jsx("span",{className:"standards-mark",children:"PM"}),c.jsxs("span",{children:["Mapping Studio",c.jsx("small",{children:y?"Legends Library / review":"Drafting standards / browser-local"})]})]}),c.jsxs("div",{className:"standards-top-meta",children:[c.jsxs("span",{className:"standards-local",children:[c.jsx("i",{}),u?"Read only · storage issue":"Browser-local"]}),c.jsx("span",{className:"standards-version",children:"LIBRARY · 1.0"})]})]}),c.jsxs("div",{className:"standards-content",children:[c.jsxs("section",{className:"standards-intro",children:[c.jsxs("div",{children:[y&&c.jsxs(la,{className:"standards-return",href:b,children:["← Back to ",b.endsWith("/pfd")?"PFD":"P&ID"," workspace"]}),c.jsxs("div",{className:"standards-eyebrow",children:[y?"Legends Library":"Standards library"," ",c.jsx("span",{children:"/"})," human review"]}),c.jsx("h1",{children:y?"Review extracted standards":"Drafting standards"}),c.jsx("p",{children:y?"Check extracted blocks, layers, text styles, and line types. Nothing becomes part of the Legends Library until you approve it.":"Inspect source-derived CAD values before they become defaults. Project choices stay separate from the Legends Library."})]}),c.jsxs("div",{className:"standards-local-seal",children:[c.jsx(ys,{size:15}),c.jsxs("span",{children:["LOCAL ONLY",c.jsx("small",{children:"Nothing is uploaded or shared"})]})]})]}),c.jsxs("div",{className:"standards-trust-note",children:[c.jsx(Nu,{size:16}),c.jsxs("span",{children:[c.jsx("strong",{children:"Review before use."})," ",y?"Each extracted record remains pending until you approve it to the Legends Library or dismiss it. Source filenames are hidden.":"Source-derived values remain unapproved until you choose a scope. Company/client identifiers and source file names are hidden here."]}),c.jsxs("span",{className:"standards-schema",children:["SCHEMA ",a.schemaVersion]})]}),m&&c.jsx("div",{className:"standards-storage-banner",role:"alert",children:m}),c.jsxs("section",{className:"standards-metrics","aria-label":"Review summary",children:[c.jsxs("div",{className:"standards-metric metric-pending",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(bs,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Awaiting review"}),c.jsx("strong",{children:X.length.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"SOURCE MAPPINGS"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(nm,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Approved from queue"}),c.jsx("strong",{children:ie.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"HUMAN CONFIRMED"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(xy,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Dismissed"}),c.jsx("strong",{children:ge.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"NOT IN LIBRARY"})]})]}),c.jsxs("div",{className:"standards-layout",children:[c.jsxs("section",{className:"standards-review panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"INBOX / SOURCE-DERIVED"}),c.jsxs("h2",{children:[c.jsx(LE,{size:17}),"Review queue"]})]}),c.jsxs("span",{className:"standards-count",children:[X.length," pending"]})]}),c.jsxs("div",{className:"standards-controls",children:[c.jsxs("label",{className:"standards-search",children:[c.jsx(Wo,{size:14}),c.jsx("input",{value:R,onChange:B=>C(B.target.value),placeholder:"Search CAD field values…","aria-label":"Search standards","data-testid":"input-standards-search"})]}),c.jsxs("label",{className:"standards-filter",children:[c.jsx(ku,{size:13}),c.jsxs("select",{"aria-label":"Filter by category",value:D,onChange:B=>S(B.target.value),"data-testid":"select-standards-category",children:[c.jsx("option",{value:"all",children:"All categories"}),Object.entries(Yb).map(([B,ue])=>c.jsx("option",{value:B,children:ue},B))]}),c.jsx(gs,{size:13})]})]}),P&&c.jsx("div",{className:"standards-action-note",role:"status",children:P}),c.jsxs("div",{className:"standards-candidate-list",children:[aa.map(B=>{const ue=we(B),Ce=B.item.sourceKind==="extracted-dwg"&&!!hn(B.item.fields,"Block asset ID");return c.jsxs("article",{className:"candidate-card","data-testid":`candidate-${B.id}`,children:[c.jsxs("div",{className:"candidate-top",children:[c.jsxs("div",{className:"candidate-category",children:[c.jsx("span",{className:"candidate-glyph",children:c.jsx(Uo,{size:15})}),c.jsxs("span",{children:[c.jsx("strong",{children:$o(ue)}),c.jsxs("small",{children:[U2(B,s)," · ",B.proposedScope==="project"?"Project proposal":B.proposedScope==="company"?"Pending review":"Scope not classified"]})]})]}),c.jsxs("span",{className:"candidate-status",children:[c.jsx("i",{}),"Needs review"]})]}),Ce&&c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsx("span",{children:"Review entity as"}),c.jsxs("select",{value:ue==="directionArrow"?"directionArrow":"symbol",onChange:me=>{k(""),Ae(Le=>({...Le,[B.id]:me.target.value}))},"aria-label":`Review entity type for ${B.item.name}`,disabled:u,"data-testid":`select-entity-role-${B.id}`,children:[c.jsx("option",{value:"symbol",children:"Equipment / instrument / component symbol"}),c.jsx("option",{value:"directionArrow",children:"Direction Arrow"})]}),ue==="directionArrow"&&c.jsx("small",{children:"Kept separate from equipment matching. Source insert layers and rotations are retained for later pipe alignment."})]}),(ue==="symbol"||ue==="directionArrow")&&B.item.sourceKind==="extracted-dwg"&&hn(B.item.fields,"Block asset ID")&&c.jsx($2,{assetId:hn(B.item.fields,"Block asset ID"),candidateId:B.id,blockName:hn(B.item.fields,"Block name"),entityType:ue,description:Y[B.id]??(ue==="directionArrow"?"Direction Arrow":hn(B.item.fields,"Item description")),disabled:u,onDescriptionChange:me=>Q(Le=>({...Le,[B.id]:me}))}),c.jsx("div",{className:"candidate-fields","aria-label":`${$o(ue)} CAD standard values`,children:B.item.fields.filter(me=>ue!=="directionArrow"||!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(me.label)).map((me,Le)=>c.jsxs("div",{className:"candidate-field",children:[c.jsx("span",{children:me.label}),c.jsx("strong",{children:me.value||"—"})]},`${me.label}-${Le}`))}),ue==="symbol"&&Ce&&c.jsxs(c.Fragment,{children:[c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Fallback category ",c.jsx("small",{children:"Required for safe same-category substitution"})]}),c.jsx("input",{value:I[B.id]??B.item.fields.find(me=>me.label==="Fallback category")?.value??"",onChange:me=>{k(""),Z(Le=>({...Le,[B.id]:me.target.value}))},placeholder:"For example: pump, valve, or instrument","aria-label":`Fallback category for ${B.item.name}`})]}),(I[B.id]??B.item.fields.find(me=>me.label==="Fallback category")?.value??"").trim().toLowerCase()==="valve"&&c.jsx(my,{value:le[B.id]??B.item.fields.find(me=>me.label==="Wipeout mask boundary")?.value??"",disabled:u,onChange:me=>{k(""),Te(Le=>({...Le,[B.id]:me}))}}),c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Target CAD layer ",c.jsx("small",{children:"Actual approved layer; layer 0 is not allowed"})]}),c.jsxs("select",{value:se[B.id]??B.item.fields.find(me=>me.label==="Target CAD layer")?.value??"",onChange:me=>{k(""),ee(Le=>({...Le,[B.id]:me.target.value}))},"aria-label":`Target CAD layer for ${B.item.name}`,disabled:u||hs(B,a).length===0,children:[c.jsx("option",{value:"",children:hs(B,a).length?"Select an approved CAD layer…":"Approve a compatible layer first"}),hs(B,a).map(me=>c.jsx("option",{value:me,children:me},me))]}),c.jsx("small",{className:"candidate-layer-help",children:hs(B,a).length?"The AutoCAD runner will put the inserted block reference on this layer.":"Review and approve the matching source layer first. No layer is guessed automatically."}),c.jsx("small",{className:"candidate-layer-help",children:"Stated Legends layers: equipment uses EQUIP or f_EQUIP; instruments use f_Inst. Extract and approve the matching layer before it appears here."})]})]}),c.jsxs("div",{className:"candidate-actions",children:[c.jsx("span",{className:"candidate-scope-note",children:B.proposedScope==="project"?"Approve into isolated project library":B.proposedScope==="company"?"Approve to the Legends Library":"Unclassified source · project-only approval"}),(()=>{const me=ue==="symbol"&&Ce;return B.proposedScope==="company"?c.jsxs("button",{className:"btn primary",onClick:()=>Me(B,"company"),disabled:u,title:me&&hs(B,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-company-${B.id}`,children:[c.jsx(Lr,{size:14}),"Approve to Legends Library"]}):c.jsxs("button",{className:"btn primary",onClick:()=>Me(B,"project"),disabled:u,title:me&&hs(B,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-project-${B.id}`,children:[c.jsx(Lr,{size:14}),"Approve to project"]})})(),c.jsx("button",{className:"btn subtle",onClick:()=>qe(B.id),disabled:u,"data-testid":`button-dismiss-${B.id}`,children:"Dismiss"})]})]},B.id)}),!aa.length&&c.jsxs("div",{className:"standards-empty",children:[c.jsx("span",{className:"empty-seal",children:X.length?c.jsx(Wo,{size:20}):c.jsx(nm,{size:20})}),c.jsx("strong",{children:X.length?"No source mappings match":"Review queue is clear"}),c.jsx("p",{children:X.length?"Try another field value or category.":"New source-derived standards will appear here for human review."}),R||D!=="all"?c.jsx("button",{className:"btn subtle",onClick:()=>{C(""),S("all")},children:"Clear filters"}):null]})]}),pt.length>O&&c.jsxs("div",{className:"candidate-pagination",children:[c.jsxs("span",{children:["Showing ",xt*O+1,"–",Math.min((xt+1)*O,pt.length)," of ",pt.length," matching mappings"]}),c.jsxs("div",{children:[c.jsx("button",{className:"btn subtle",onClick:()=>w(B=>Math.max(0,B-1)),disabled:xt===0,children:"Previous"}),c.jsxs("span",{children:["Page ",xt+1," of ",gt]}),c.jsx("button",{className:"btn subtle",onClick:()=>w(B=>Math.min(gt-1,B+1)),disabled:xt>=gt-1,children:"Next"})]})]}),c.jsxs("footer",{className:"standards-list-foot",children:[c.jsx("span",{children:"CAD field values only"}),c.jsx("span",{children:"Source labels anonymized"})]})]}),!y&&c.jsxs("aside",{className:"standards-side",children:[c.jsxs("section",{className:"defaults-panel panel",children:[c.jsx("div",{className:"standards-panel-head",children:c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"ACTIVE CONFIGURATION"}),c.jsxs("h2",{children:[c.jsx(ku,{size:16}),"Sheet-size defaults"]})]})}),c.jsxs("div",{className:"default-scope-tabs",role:"tablist","aria-label":"Defaults scope",children:[c.jsx("button",{role:"tab","aria-selected":E==="company",className:E==="company"?"selected":"",onClick:()=>x("company"),children:"Company"}),c.jsxs("button",{role:"tab","aria-selected":E==="projects",className:E==="projects"?"selected":"",onClick:()=>x("projects"),children:["Projects ",c.jsx("span",{children:J.length})]})]}),E==="projects"&&c.jsx("div",{className:"project-picker",children:J.length?c.jsxs("label",{children:[c.jsx("span",{children:"PROJECT LIBRARY"}),c.jsxs("div",{children:[c.jsx("select",{value:F,onChange:B=>T(B.target.value),"aria-label":"Select project library",children:J.map(B=>c.jsx("option",{value:B,children:gy(B,J)},B))}),c.jsx(gs,{size:14})]})]}):c.jsxs("div",{className:"project-none",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(Uo,{size:17})}),c.jsx("strong",{children:"No project overrides yet"}),c.jsx("small",{children:"Project-specific standards will appear here once available."})]})}),c.jsxs("div",{className:"default-table",children:[c.jsxs("div",{className:"default-table-head",children:[c.jsx("span",{children:"DRAWING PURPOSE"}),c.jsx("span",{children:"SIZE"})]}),Iu.map(B=>{const ue=E==="projects"&&F?a.projects[F]?.defaults[B]:void 0,Ce=ue??a.companyDefaults[B];return c.jsxs("div",{className:"default-row",children:[c.jsxs("div",{children:[c.jsx("strong",{children:B}),E==="projects"&&c.jsx("small",{children:ue?"Project override":"Inherited company default"})]}),E==="company"?c.jsxs("label",{className:"size-select",children:[c.jsx("select",{"aria-label":`${B} company sheet size`,value:a.companyDefaults[B],onChange:me=>ce(B,me.target.value),disabled:u,children:$s.map(me=>c.jsx("option",{value:me,children:me},me))}),c.jsx(gs,{size:13})]}):F?c.jsxs("label",{className:`size-select ${ue?"override":""}`,children:[c.jsx("select",{"aria-label":`${B} project sheet size`,value:Ce,onChange:me=>fe(F,B,me.target.value),disabled:u,children:$s.map(me=>c.jsx("option",{value:me,children:me},me))}),c.jsx(gs,{size:13})]}):c.jsx("span",{className:"default-value",children:"—"})]},B)})]}),c.jsxs("div",{className:"defaults-note",children:[c.jsx(Nu,{size:14}),c.jsx("span",{children:"Project selections change only that project. Legends Library defaults remain unchanged."})]})]}),c.jsxs("section",{className:"library-panel panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"APPROVED STANDARDS"}),c.jsxs("h2",{children:[c.jsx(Uo,{size:16}),E==="company"?"Legends Library":"Project library"]})]}),c.jsx("span",{className:"standards-count",children:U.length})]}),c.jsxs("div",{className:"approved-list",children:[U.map(B=>c.jsxs("article",{className:"approved-item",children:[c.jsxs("div",{className:"approved-item-head",children:[c.jsx("span",{className:"approved-glyph",children:c.jsx(Lr,{size:13})}),c.jsxs("div",{children:[c.jsx("strong",{children:$o(B.category)}),c.jsx("small",{children:E==="company"?"Legends Library standard":`${gy(F,J)} · project-only`})]})]}),c.jsx("div",{className:"approved-fields",children:B.fields.map((ue,Ce)=>c.jsxs("div",{children:[c.jsx("span",{children:ue.label}),c.jsx("strong",{children:ue.value||"—"})]},`${ue.label}-${Ce}`))}),B.category==="symbol"&&B.sourceKind==="extracted-dwg"&&hn(B.fields,"Fallback category").toLowerCase()==="valve"&&c.jsxs(c.Fragment,{children:[c.jsx(my,{value:he[B.id]??B.fields.find(ue=>ue.label==="Wipeout mask boundary")?.value??"",disabled:u,onChange:ue=>{k(""),de(Ce=>({...Ce,[B.id]:ue}))}}),c.jsx("div",{className:"approved-mask-actions",children:c.jsxs("button",{type:"button",className:"btn primary",disabled:u,onClick:()=>wt(B.id,B.fields),"data-testid":`button-save-valve-mask-${B.id}`,children:[c.jsx(Lr,{size:13}),"Save reviewed outline"]})})]})]},B.id)),!U.length&&c.jsxs("div",{className:"approved-empty",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(Uo,{size:18})}),c.jsx("strong",{children:E==="company"?"No approved Legends Library standards":"No standards in this project"}),c.jsx("small",{children:E==="company"?"Review and approve source mappings to build the Legends Library.":"Project-approved standards remain isolated from Legends Library defaults."})]})]}),c.jsxs("footer",{className:"library-foot",children:[c.jsx("span",{children:"Visible values are standards fields"}),c.jsx("span",{children:"Descriptions hidden"})]})]})]})]}),c.jsxs("footer",{className:"standards-page-foot",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:y?"Only approved mappings are offered to the CAD runner":"Legends Library and project standards are reviewed separately"})]})]})]})}function yy({backHref:a}){const[s]=q.useState(()=>{try{return{library:gn(),canSave:!0,error:""}}catch(D){return{library:R1(),canSave:!1,error:D instanceof Error?D.message:"The local standards library could not be loaded."}}}),[o,i]=q.useState(s.library),l=q.useRef(s.library),[p,g]=q.useState(s.canSave),[h,m]=q.useState(s.error),u=D=>{if(!p)return m("The local library could not be read safely. Its saved contents were left unchanged."),!1;let S;try{S=D(l.current)}catch(N){return m(N instanceof Error?N.message:"The standards change could not be applied."),!1}try{return Qo(S),l.current=S,i(S),m(""),!0}catch(N){const T=N instanceof Error?N.message:"The standards change could not be saved locally.";return T.startsWith("This browser could not save the CAD standards locally.")&&g(!1),m(T),!1}},y=(D,S,N)=>u(T=>Pl(T,D,"company",S,N)),b=(D,S,N)=>u(T=>Pl(T,D,"project",S,N)),E=(D,S)=>u(N=>$1(N,D,S)),x=D=>u(S=>U1(S,D)),R=(D,S)=>u(N=>O1(N,D,S)),C=(D,S,N)=>{const T=l.current.projects[D]?.projectName??`Project ${String(Object.keys(l.current.projects).sort().indexOf(D)+1).padStart(2,"0")}`;u(_=>F1(_,D,T,S,N))};return c.jsx(F2,{library:o,reviewCandidates:o.reviewCandidates,reviewOnly:!0,backHref:a,onApproveCompany:y,onApproveProject:b,onUpdateReviewedItem:E,onDismiss:x,onSetCompanyDefault:R,onSetProjectDefault:C,storageNotice:h,readOnly:!p})}const B2="/pid-mapping-studio-app/".replace(/\/$/,"");function z2(){const[a]=Ry();return a==="/admin/library"||a.startsWith("/sign-in")||a.startsWith("/sign-up")?c.jsx(Dw,{to:"/"}):a==="/portal"||a==="/library"||a==="/"?c.jsx(qx,{}):a==="/workspace/pfd"?c.jsx(cy,{discipline:"pfd"}):a==="/workspace/pid"?c.jsx(cy,{discipline:"pid"}):a==="/workspace/pfd/engineering-data"?c.jsx(hy,{discipline:"pfd"}):a==="/workspace/pid/engineering-data"?c.jsx(hy,{discipline:"pid"}):a==="/standards-review/pfd"?c.jsx(yy,{backHref:"/workspace/pfd"}):a==="/standards-review/pid"?c.jsx(yy,{backHref:"/workspace/pid"}):c.jsx(Mx,{})}function Y2(){return c.jsx(Aw,{base:B2,children:c.jsx(Ix,{children:c.jsx(z2,{})})})}tp.createRoot(document.getElementById("root"),{onCaughtError:(a,s)=>{console.error(a,s.componentStack)}}).render(c.jsx(Y2,{}));export{nn as _,H2 as a,ub as c,ai as g,cp as v,X2 as w};
