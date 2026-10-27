const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DUpRfPry.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/exceljs.min-DbFXNCeR.js"])))=>i.map(i=>d[i]);
function Ii(a,r){for(var o=0;o<r.length;o++){const l=r[o];if(typeof l!="string"&&!Array.isArray(l)){for(const i in l)if(i!=="default"&&!(i in a)){const p=Object.getOwnPropertyDescriptor(l,i);p&&Object.defineProperty(a,i,p.get?p:{enumerable:!0,get:()=>l[i]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function o(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerPolicy&&(p.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?p.credentials="include":i.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(i){if(i.ep)return;i.ep=!0;const p=o(i);fetch(i.href,p)}})();var I2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tl(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function hy(a){if(Object.prototype.hasOwnProperty.call(a,"__esModule"))return a;var r=a.default;if(typeof r=="function"){var o=function l(){var i=!1;try{i=this instanceof l}catch{}return i?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};o.prototype=r.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(a).forEach(function(l){var i=Object.getOwnPropertyDescriptor(a,l);Object.defineProperty(o,l,i.get?i:{enumerable:!0,get:function(){return a[l]}})}),o}var Jd={exports:{}},Lo={};var zg;function F0(){if(zg)return Lo;zg=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(l,i,p){var g=null;if(p!==void 0&&(g=""+p),i.key!==void 0&&(g=""+i.key),"key"in i){p={};for(var h in i)h!=="key"&&(p[h]=i[h])}else p=i;return i=p.ref,{$$typeof:a,type:l,key:g,ref:i!==void 0?i:null,props:p}}return Lo.Fragment=r,Lo.jsx=o,Lo.jsxs=o,Lo}var Yg;function z0(){return Yg||(Yg=1,Jd.exports=F0()),Jd.exports}var c=z0();const Y0=tl(c),V0=Ii({__proto__:null,default:Y0},[c]);var eu={exports:{}},Oo={},tu={exports:{}},au={};var Vg;function X0(){return Vg||(Vg=1,(function(a){function r(Y,Q){var be=Y.length;Y.push(Q);e:for(;0<be;){var Te=be-1>>>1,_=Y[Te];if(0<i(_,Q))Y[Te]=Q,Y[be]=_,be=Te;else break e}}function o(Y){return Y.length===0?null:Y[0]}function l(Y){if(Y.length===0)return null;var Q=Y[0],be=Y.pop();if(be!==Q){Y[0]=be;e:for(var Te=0,_=Y.length,J=_>>>1;Te<J;){var $=2*(Te+1)-1,G=Y[$],le=$+1,ge=Y[le];if(0>i(G,be))le<_&&0>i(ge,G)?(Y[Te]=ge,Y[le]=be,Te=le):(Y[Te]=G,Y[$]=be,Te=$);else if(le<_&&0>i(ge,be))Y[Te]=ge,Y[le]=be,Te=le;else break e}}return Q}function i(Y,Q){var be=Y.sortIndex-Q.sortIndex;return be!==0?be:Y.id-Q.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var g=Date,h=g.now();a.unstable_now=function(){return g.now()-h}}var m=[],u=[],y=1,b=null,w=3,S=!1,j=!1,C=!1,D=!1,E=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function B(Y){for(var Q=o(u);Q!==null;){if(Q.callback===null)l(u);else if(Q.startTime<=Y)l(u),Q.sortIndex=Q.expirationTime,r(m,Q);else break;Q=o(u)}}function x(Y){if(C=!1,B(Y),!j)if(o(m)!==null)j=!0,R||(R=!0,oe());else{var Q=o(u);Q!==null&&de(x,Q.startTime-Y)}}var R=!1,L=-1,P=5,H=-1;function fe(){return D?!0:!(a.unstable_now()-H<P)}function re(){if(D=!1,R){var Y=a.unstable_now();H=Y;var Q=!0;try{e:{j=!1,C&&(C=!1,A(L),L=-1),S=!0;var be=w;try{t:{for(B(Y),b=o(m);b!==null&&!(b.expirationTime>Y&&fe());){var Te=b.callback;if(typeof Te=="function"){b.callback=null,w=b.priorityLevel;var _=Te(b.expirationTime<=Y);if(Y=a.unstable_now(),typeof _=="function"){b.callback=_,B(Y),Q=!0;break t}b===o(m)&&l(m),B(Y)}else l(m);b=o(m)}if(b!==null)Q=!0;else{var J=o(u);J!==null&&de(x,J.startTime-Y),Q=!1}}break e}finally{b=null,w=be,S=!1}Q=void 0}}finally{Q?oe():R=!1}}}var oe;if(typeof N=="function")oe=function(){N(re)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,he=Ae.port2;Ae.port1.onmessage=re,oe=function(){he.postMessage(null)}}else oe=function(){E(re,0)};function de(Y,Q){L=E(function(){Y(a.unstable_now())},Q)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(Y){Y.callback=null},a.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<Y?Math.floor(1e3/Y):5},a.unstable_getCurrentPriorityLevel=function(){return w},a.unstable_next=function(Y){switch(w){case 1:case 2:case 3:var Q=3;break;default:Q=w}var be=w;w=Q;try{return Y()}finally{w=be}},a.unstable_requestPaint=function(){D=!0},a.unstable_runWithPriority=function(Y,Q){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var be=w;w=Y;try{return Q()}finally{w=be}},a.unstable_scheduleCallback=function(Y,Q,be){var Te=a.unstable_now();switch(typeof be=="object"&&be!==null?(be=be.delay,be=typeof be=="number"&&0<be?Te+be:Te):be=Te,Y){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=be+_,Y={id:y++,callback:Q,priorityLevel:Y,startTime:be,expirationTime:_,sortIndex:-1},be>Te?(Y.sortIndex=be,r(u,Y),o(m)===null&&Y===o(u)&&(C?(A(L),L=-1):C=!0,de(x,be-Te))):(Y.sortIndex=_,r(m,Y),j||S||(j=!0,R||(R=!0,oe()))),Y},a.unstable_shouldYield=fe,a.unstable_wrapCallback=function(Y){var Q=w;return function(){var be=w;w=Q;try{return Y.apply(this,arguments)}finally{w=be}}}})(au)),au}var Xg;function G0(){return Xg||(Xg=1,tu.exports=X0()),tu.exports}var nu={exports:{}},$e={};var Gg;function H0(){if(Gg)return $e;Gg=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function w(_){return _===null||typeof _!="object"?null:(_=b&&_[b]||_["@@iterator"],typeof _=="function"?_:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,C={};function D(_,J,$){this.props=_,this.context=J,this.refs=C,this.updater=$||S}D.prototype.isReactComponent={},D.prototype.setState=function(_,J){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,J,"setState")},D.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function E(){}E.prototype=D.prototype;function A(_,J,$){this.props=_,this.context=J,this.refs=C,this.updater=$||S}var N=A.prototype=new E;N.constructor=A,j(N,D.prototype),N.isPureReactComponent=!0;var B=Array.isArray,x={H:null,A:null,T:null,S:null,V:null},R=Object.prototype.hasOwnProperty;function L(_,J,$,G,le,ge){return $=ge.ref,{$$typeof:a,type:_,key:J,ref:$!==void 0?$:null,props:ge}}function P(_,J){return L(_.type,J,void 0,void 0,void 0,_.props)}function H(_){return typeof _=="object"&&_!==null&&_.$$typeof===a}function fe(_){var J={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function($){return J[$]})}var re=/\/+/g;function oe(_,J){return typeof _=="object"&&_!==null&&_.key!=null?fe(""+_.key):J.toString(36)}function Ae(){}function he(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(Ae,Ae):(_.status="pending",_.then(function(J){_.status==="pending"&&(_.status="fulfilled",_.value=J)},function(J){_.status==="pending"&&(_.status="rejected",_.reason=J)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function de(_,J,$,G,le){var ge=typeof _;(ge==="undefined"||ge==="boolean")&&(_=null);var Ee=!1;if(_===null)Ee=!0;else switch(ge){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(_.$$typeof){case a:case r:Ee=!0;break;case y:return Ee=_._init,de(Ee(_._payload),J,$,G,le)}}if(Ee)return le=le(_),Ee=G===""?"."+oe(_,0):G,B(le)?($="",Ee!=null&&($=Ee.replace(re,"$&/")+"/"),de(le,J,$,"",function(Et){return Et})):le!=null&&(H(le)&&(le=P(le,$+(le.key==null||_&&_.key===le.key?"":(""+le.key).replace(re,"$&/")+"/")+Ee)),J.push(le)),1;Ee=0;var Me=G===""?".":G+":";if(B(_))for(var Ie=0;Ie<_.length;Ie++)G=_[Ie],ge=Me+oe(G,Ie),Ee+=de(G,J,$,ge,le);else if(Ie=w(_),typeof Ie=="function")for(_=Ie.call(_),Ie=0;!(G=_.next()).done;)G=G.value,ge=Me+oe(G,Ie++),Ee+=de(G,J,$,ge,le);else if(ge==="object"){if(typeof _.then=="function")return de(he(_),J,$,G,le);throw J=String(_),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function Y(_,J,$){if(_==null)return _;var G=[],le=0;return de(_,G,"","",function(ge){return J.call($,ge,le++)}),G}function Q(_){if(_._status===-1){var J=_._result;J=J(),J.then(function($){(_._status===0||_._status===-1)&&(_._status=1,_._result=$)},function($){(_._status===0||_._status===-1)&&(_._status=2,_._result=$)}),_._status===-1&&(_._status=0,_._result=J)}if(_._status===1)return _._result.default;throw _._result}var be=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function Te(){}return $e.Children={map:Y,forEach:function(_,J,$){Y(_,function(){J.apply(this,arguments)},$)},count:function(_){var J=0;return Y(_,function(){J++}),J},toArray:function(_){return Y(_,function(J){return J})||[]},only:function(_){if(!H(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},$e.Component=D,$e.Fragment=o,$e.Profiler=i,$e.PureComponent=A,$e.StrictMode=l,$e.Suspense=m,$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,$e.__COMPILER_RUNTIME={__proto__:null,c:function(_){return x.H.useMemoCache(_)}},$e.cache=function(_){return function(){return _.apply(null,arguments)}},$e.cloneElement=function(_,J,$){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var G=j({},_.props),le=_.key,ge=void 0;if(J!=null)for(Ee in J.ref!==void 0&&(ge=void 0),J.key!==void 0&&(le=""+J.key),J)!R.call(J,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&J.ref===void 0||(G[Ee]=J[Ee]);var Ee=arguments.length-2;if(Ee===1)G.children=$;else if(1<Ee){for(var Me=Array(Ee),Ie=0;Ie<Ee;Ie++)Me[Ie]=arguments[Ie+2];G.children=Me}return L(_.type,le,void 0,void 0,ge,G)},$e.createContext=function(_){return _={$$typeof:g,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:p,_context:_},_},$e.createElement=function(_,J,$){var G,le={},ge=null;if(J!=null)for(G in J.key!==void 0&&(ge=""+J.key),J)R.call(J,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(le[G]=J[G]);var Ee=arguments.length-2;if(Ee===1)le.children=$;else if(1<Ee){for(var Me=Array(Ee),Ie=0;Ie<Ee;Ie++)Me[Ie]=arguments[Ie+2];le.children=Me}if(_&&_.defaultProps)for(G in Ee=_.defaultProps,Ee)le[G]===void 0&&(le[G]=Ee[G]);return L(_,ge,void 0,void 0,null,le)},$e.createRef=function(){return{current:null}},$e.forwardRef=function(_){return{$$typeof:h,render:_}},$e.isValidElement=H,$e.lazy=function(_){return{$$typeof:y,_payload:{_status:-1,_result:_},_init:Q}},$e.memo=function(_,J){return{$$typeof:u,type:_,compare:J===void 0?null:J}},$e.startTransition=function(_){var J=x.T,$={};x.T=$;try{var G=_(),le=x.S;le!==null&&le($,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Te,be)}catch(ge){be(ge)}finally{x.T=J}},$e.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},$e.use=function(_){return x.H.use(_)},$e.useActionState=function(_,J,$){return x.H.useActionState(_,J,$)},$e.useCallback=function(_,J){return x.H.useCallback(_,J)},$e.useContext=function(_){return x.H.useContext(_)},$e.useDebugValue=function(){},$e.useDeferredValue=function(_,J){return x.H.useDeferredValue(_,J)},$e.useEffect=function(_,J,$){var G=x.H;if(typeof $=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(_,J)},$e.useId=function(){return x.H.useId()},$e.useImperativeHandle=function(_,J,$){return x.H.useImperativeHandle(_,J,$)},$e.useInsertionEffect=function(_,J){return x.H.useInsertionEffect(_,J)},$e.useLayoutEffect=function(_,J){return x.H.useLayoutEffect(_,J)},$e.useMemo=function(_,J){return x.H.useMemo(_,J)},$e.useOptimistic=function(_,J){return x.H.useOptimistic(_,J)},$e.useReducer=function(_,J,$){return x.H.useReducer(_,J,$)},$e.useRef=function(_){return x.H.useRef(_)},$e.useState=function(_){return x.H.useState(_)},$e.useSyncExternalStore=function(_,J,$){return x.H.useSyncExternalStore(_,J,$)},$e.useTransition=function(){return x.H.useTransition()},$e.version="19.1.4",$e}var Hg;function Mi(){return Hg||(Hg=1,nu.exports=H0()),nu.exports}var ru={exports:{}},ha={};var Kg;function K0(){if(Kg)return ha;Kg=1;var a=Mi();function r(m){var u="https://react.dev/errors/"+m;if(1<arguments.length){u+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)u+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+u+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(r(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},i=Symbol.for("react.portal");function p(m,u,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i,key:b==null?null:""+b,children:m,containerInfo:u,implementation:y}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,u){if(m==="font")return"";if(typeof u=="string")return u==="use-credentials"?u:""}return ha.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ha.createPortal=function(m,u){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!u||u.nodeType!==1&&u.nodeType!==9&&u.nodeType!==11)throw Error(r(299));return p(m,u,null,y)},ha.flushSync=function(m){var u=g.T,y=l.p;try{if(g.T=null,l.p=2,m)return m()}finally{g.T=u,l.p=y,l.d.f()}},ha.preconnect=function(m,u){typeof m=="string"&&(u?(u=u.crossOrigin,u=typeof u=="string"?u==="use-credentials"?u:"":void 0):u=null,l.d.C(m,u))},ha.prefetchDNS=function(m){typeof m=="string"&&l.d.D(m)},ha.preinit=function(m,u){if(typeof m=="string"&&u&&typeof u.as=="string"){var y=u.as,b=h(y,u.crossOrigin),w=typeof u.integrity=="string"?u.integrity:void 0,S=typeof u.fetchPriority=="string"?u.fetchPriority:void 0;y==="style"?l.d.S(m,typeof u.precedence=="string"?u.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:S}):y==="script"&&l.d.X(m,{crossOrigin:b,integrity:w,fetchPriority:S,nonce:typeof u.nonce=="string"?u.nonce:void 0})}},ha.preinitModule=function(m,u){if(typeof m=="string")if(typeof u=="object"&&u!==null){if(u.as==null||u.as==="script"){var y=h(u.as,u.crossOrigin);l.d.M(m,{crossOrigin:y,integrity:typeof u.integrity=="string"?u.integrity:void 0,nonce:typeof u.nonce=="string"?u.nonce:void 0})}}else u==null&&l.d.M(m)},ha.preload=function(m,u){if(typeof m=="string"&&typeof u=="object"&&u!==null&&typeof u.as=="string"){var y=u.as,b=h(y,u.crossOrigin);l.d.L(m,y,{crossOrigin:b,integrity:typeof u.integrity=="string"?u.integrity:void 0,nonce:typeof u.nonce=="string"?u.nonce:void 0,type:typeof u.type=="string"?u.type:void 0,fetchPriority:typeof u.fetchPriority=="string"?u.fetchPriority:void 0,referrerPolicy:typeof u.referrerPolicy=="string"?u.referrerPolicy:void 0,imageSrcSet:typeof u.imageSrcSet=="string"?u.imageSrcSet:void 0,imageSizes:typeof u.imageSizes=="string"?u.imageSizes:void 0,media:typeof u.media=="string"?u.media:void 0})}},ha.preloadModule=function(m,u){if(typeof m=="string")if(u){var y=h(u.as,u.crossOrigin);l.d.m(m,{as:typeof u.as=="string"&&u.as!=="script"?u.as:void 0,crossOrigin:y,integrity:typeof u.integrity=="string"?u.integrity:void 0})}else l.d.m(m)},ha.requestFormReset=function(m){l.d.r(m)},ha.unstable_batchedUpdates=function(m,u){return m(u)},ha.useFormState=function(m,u,y){return g.H.useFormState(m,u,y)},ha.useFormStatus=function(){return g.H.useHostTransitionStatus()},ha.version="19.1.4",ha}var Wg;function gy(){if(Wg)return ru.exports;Wg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),ru.exports=K0(),ru.exports}var Zg;function W0(){if(Zg)return Oo;Zg=1;var a=G0(),r=Mi(),o=gy();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(p(e)!==e)throw Error(l(188))}function m(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,s=t;;){var d=n.return;if(d===null)break;var f=d.alternate;if(f===null){if(s=d.return,s!==null){n=s;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===n)return h(d),e;if(f===s)return h(d),t;f=f.sibling}throw Error(l(188))}if(n.return!==s.return)n=d,s=f;else{for(var v=!1,T=d.child;T;){if(T===n){v=!0,n=d,s=f;break}if(T===s){v=!0,s=d,n=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===n){v=!0,n=f,s=d;break}if(T===s){v=!0,s=f,n=d;break}T=T.sibling}if(!v)throw Error(l(189))}}if(n.alternate!==s)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function u(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=u(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),N=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),re=Symbol.iterator;function oe(e){return e===null||typeof e!="object"?null:(e=re&&e[re]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case D:return"Profiler";case C:return"StrictMode";case x:return"Suspense";case R:return"SuspenseList";case H:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case N:return(e.displayName||"Context")+".Provider";case A:return(e._context.displayName||"Context")+".Consumer";case B:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:he(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}var de=Array.isArray,Y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,be={pending:!1,data:null,method:null,action:null},Te=[],_=-1;function J(e){return{current:e}}function $(e){0>_||(e.current=Te[_],Te[_]=null,_--)}function G(e,t){_++,Te[_]=e.current,e.current=t}var le=J(null),ge=J(null),Ee=J(null),Me=J(null);function Ie(e,t){switch(G(Ee,t),G(ge,e),G(le,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?yg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=yg(t),e=bg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(le),G(le,e)}function Et(){$(le),$(ge),$(Ee)}function pt(e){e.memoizedState!==null&&G(Me,e);var t=le.current,n=bg(t,e.type);t!==n&&(G(ge,e),G(le,n))}function ht(e){ge.current===e&&($(le),$(ge)),Me.current===e&&($(Me),Co._currentValue=be)}var wt=Object.prototype.hasOwnProperty,aa=a.unstable_scheduleCallback,Rt=a.unstable_cancelCallback,U=a.unstable_shouldYield,ie=a.unstable_requestPaint,pe=a.unstable_now,F=a.unstable_getCurrentPriorityLevel,ce=a.unstable_ImmediatePriority,Ce=a.unstable_UserBlockingPriority,me=a.unstable_NormalPriority,Le=a.unstable_LowPriority,Qe=a.unstable_IdlePriority,Xe=a.log,qe=a.unstable_setDisableYieldValue,jt=null,ye=null;function et(e){if(typeof Xe=="function"&&qe(e),ye&&typeof ye.setStrictMode=="function")try{ye.setStrictMode(jt,e)}catch{}}var nt=Math.clz32?Math.clz32:Da,Wt=Math.log,Re=Math.LN2;function Da(e){return e>>>=0,e===0?32:31-(Wt(e)/Re|0)|0}var St=256,gt=4194304;function Zt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function It(e,t,n){var s=e.pendingLanes;if(s===0)return 0;var d=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?d=Zt(s):(v&=T,v!==0?d=Zt(v):n||(n=T&~e,n!==0&&(d=Zt(n))))):(T=s&~f,T!==0?d=Zt(T):v!==0?d=Zt(v):n||(n=s&~e,n!==0&&(d=Zt(n)))),d===0?0:t!==0&&t!==d&&(t&f)===0&&(f=d&-d,n=t&-t,f>=n||f===32&&(n&4194048)!==0)?t:d}function Ca(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=St;return St<<=1,(St&4194048)===0&&(St=256),e}function Mt(){var e=gt;return gt<<=1,(gt&62914560)===0&&(gt=4194304),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Na(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function na(e,t,n,s,d,f){var v=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var T=e.entanglements,O=e.expirationTimes,X=e.hiddenUpdates;for(n=v&~n;0<n;){var ae=31-nt(n),se=1<<ae;T[ae]=0,O[ae]=-1;var K=X[ae];if(K!==null)for(X[ae]=null,ae=0;ae<K.length;ae++){var W=K[ae];W!==null&&(W.lane&=-536870913)}n&=~se}s!==0&&on(e,s,0),f!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~t))}function on(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-nt(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|n&4194090}function Qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-nt(n),d=1<<s;d&t|e[s]&t&&(e[s]|=t),n&=~d}}function Bn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ka(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function En(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:Ig(e.type))}function da(e,t){var n=Q.p;try{return Q.p=e,t()}finally{Q.p=n}}var ua=Math.random().toString(36).slice(2),Tt="__reactFiber$"+ua,We="__reactProps$"+ua,k="__reactContainer$"+ua,Z="__reactEvents$"+ua,ue="__reactListeners$"+ua,Ue="__reactHandles$"+ua,I="__reactResources$"+ua,te="__reactMarker$"+ua;function ve(e){delete e[Tt],delete e[We],delete e[Z],delete e[ue],delete e[Ue]}function we(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[k]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=xg(e);e!==null;){if(n=e[Tt])return n;e=xg(e)}return t}e=n,n=e.parentNode}return null}function Ne(e){if(e=e[Tt]||e[k]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Pe(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Je(e){var t=e[I];return t||(t=e[I]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ge(e){e[te]=!0}var pa=new Set,At={};function $t(e,t){ga(e,t),ga(e+"Capture",t)}function ga(e,t){for(At[e]=t,e=0;e<t.length;e++)pa.add(t[e])}var wn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vr={},Ms={};function Ki(e){return wt.call(Ms,e)?!0:wt.call(Vr,e)?!1:wn.test(e)?Ms[e]=!0:(Vr[e]=!0,!1)}function Xr(e,t,n){if(Ki(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Gr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Ba(e,t,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+s)}}var xn,dl;function xe(e){if(xn===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);xn=t&&t[1]||"",dl=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+xn+e+dl}var _e=!1;function Dt(e,t){if(!e||_e)return"";_e=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var se=function(){throw Error()};if(Object.defineProperty(se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(se,[])}catch(W){var K=W}Reflect.construct(e,[],se)}else{try{se.call()}catch(W){K=W}e.call(se.prototype)}}else{try{throw Error()}catch(W){K=W}(se=e())&&typeof se.catch=="function"&&se.catch(function(){})}}catch(W){if(W&&K&&typeof W.stack=="string")return[W.stack,K.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var O=v.split(`
`),X=T.split(`
`);for(d=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;d<X.length&&!X[d].includes("DetermineComponentFrameRoot");)d++;if(s===O.length||d===X.length)for(s=O.length-1,d=X.length-1;1<=s&&0<=d&&O[s]!==X[d];)d--;for(;1<=s&&0<=d;s--,d--)if(O[s]!==X[d]){if(s!==1||d!==1)do if(s--,d--,0>d||O[s]!==X[d]){var ae=`
`+O[s].replace(" at new "," at ");return e.displayName&&ae.includes("<anonymous>")&&(ae=ae.replace("<anonymous>",e.displayName)),ae}while(1<=s&&0<=d);break}}}finally{_e=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?xe(n):""}function Vt(e){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe("Lazy");case 13:return xe("Suspense");case 19:return xe("SuspenseList");case 0:case 15:return Dt(e.type,!1);case 11:return Dt(e.type.render,!1);case 1:return Dt(e.type,!0);case 31:return xe("Activity");default:return""}}function Ct(e){try{var t="";do t+=Vt(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ea(e){var t=Fn(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var d=n.get,f=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(v){s=""+v,f.call(this,v)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return s},setValue:function(v){s=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wa(e){e._valueTracker||(e._valueTracker=Ea(e))}function Fa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=Fn(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Mb=/[\n"\\]/g;function za(e){return e.replace(Mb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Wi(e,t,n,s,d,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),t!=null?v==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+yt(t)):e.value!==""+yt(t)&&(e.value=""+yt(t)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),t!=null?Zi(e,v,yt(t)):n!=null?Zi(e,v,yt(n)):s!=null&&e.removeAttribute("value"),d==null&&f!=null&&(e.defaultChecked=!!f),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+yt(T):e.removeAttribute("name")}function fp(e,t,n,s,d,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||n!=null){if(!(f!=="submit"&&f!=="reset"||t!=null))return;n=n!=null?""+yt(n):"",t=t!=null?""+yt(t):n,T||t===e.value||(e.value=t),e.defaultValue=t}s=s??d,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=T?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v)}function Zi(e,t,n){t==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Hr(e,t,n,s){if(e=e.options,t){t={};for(var d=0;d<n.length;d++)t["$"+n[d]]=!0;for(n=0;n<e.length;n++)d=t.hasOwnProperty("$"+e[n].value),e[n].selected!==d&&(e[n].selected=d),d&&s&&(e[n].defaultSelected=!0)}else{for(n=""+yt(n),t=null,d=0;d<e.length;d++){if(e[d].value===n){e[d].selected=!0,s&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function hp(e,t,n){if(t!=null&&(t=""+yt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+yt(n):""}function gp(e,t,n,s){if(t==null){if(s!=null){if(n!=null)throw Error(l(92));if(de(s)){if(1<s.length)throw Error(l(93));s=s[0]}n=s}n==null&&(n=""),t=n}n=yt(t),e.defaultValue=n,s=e.textContent,s===n&&s!==""&&s!==null&&(e.value=s)}function Kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var $b=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mp(e,t,n){var s=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,n):typeof n!="number"||n===0||$b.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function yp(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var d in t)s=t[d],t.hasOwnProperty(d)&&n[d]!==s&&mp(e,d,s)}else for(var f in t)t.hasOwnProperty(f)&&mp(e,f,t[f])}function Qi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ub=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ul(e){return Bb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ji=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wr=null,Zr=null;function bp(e){var t=Ne(e);if(t&&(e=t.stateNode)){var n=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(Wi(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+za(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var d=s[We]||null;if(!d)throw Error(l(90));Wi(s,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<n.length;t++)s=n[t],s.form===e.form&&Fa(s)}break e;case"textarea":hp(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Hr(e,!!n.multiple,t,!1)}}}var tc=!1;function vp(e,t,n){if(tc)return e(t,n);tc=!0;try{var s=e(t);return s}finally{if(tc=!1,(Wr!==null||Zr!==null)&&(Wl(),Wr&&(t=Wr,e=Zr,Zr=Wr=null,bp(t),e)))for(t=0;t<e.length;t++)bp(e[t])}}function $s(e,t){var n=e.stateNode;if(n===null)return null;var s=n[We]||null;if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=!1;if(Tn)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){ac=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{ac=!1}var zn=null,nc=null,pl=null;function Ep(){if(pl)return pl;var e,t=nc,n=t.length,s,d="value"in zn?zn.value:zn.textContent,f=d.length;for(e=0;e<n&&t[e]===d[e];e++);var v=n-e;for(s=1;s<=v&&t[n-s]===d[f-s];s++);return pl=d.slice(e,1<s?1-s:void 0)}function fl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function wp(){return!1}function xa(e){function t(n,s,d,f,v){this._reactName=n,this._targetInst=d,this.type=s,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(n=e[T],this[T]=n?n(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?hl:wp,this.isPropagationStopped=wp,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gl=xa(Er),Bs=y({},Er,{view:0,detail:0}),Fb=xa(Bs),rc,sc,Fs,ml=y({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fs&&(Fs&&e.type==="mousemove"?(rc=e.screenX-Fs.screenX,sc=e.screenY-Fs.screenY):sc=rc=0,Fs=e),rc)},movementY:function(e){return"movementY"in e?e.movementY:sc}}),xp=xa(ml),zb=y({},ml,{dataTransfer:0}),Yb=xa(zb),Vb=y({},Bs,{relatedTarget:0}),oc=xa(Vb),Xb=y({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),Gb=xa(Xb),Hb=y({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Kb=xa(Hb),Wb=y({},Er,{data:0}),Sp=xa(Wb),Zb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ev(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jb[e])?!!t[e]:!1}function lc(){return ev}var tv=y({},Bs,{key:function(e){if(e.key){var t=Zb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),av=xa(tv),nv=y({},ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=xa(nv),rv=y({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),sv=xa(rv),ov=y({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),lv=xa(ov),iv=y({},ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cv=xa(iv),dv=y({},Er,{newState:0,oldState:0}),uv=xa(dv),pv=[9,13,27,32],ic=Tn&&"CompositionEvent"in window,zs=null;Tn&&"documentMode"in document&&(zs=document.documentMode);var fv=Tn&&"TextEvent"in window&&!zs,Ap=Tn&&(!ic||zs&&8<zs&&11>=zs),Dp=" ",Cp=!1;function Np(e,t){switch(e){case"keyup":return pv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qr=!1;function hv(e,t){switch(e){case"compositionend":return kp(t);case"keypress":return t.which!==32?null:(Cp=!0,Dp);case"textInput":return e=t.data,e===Dp&&Cp?null:e;default:return null}}function gv(e,t){if(Qr)return e==="compositionend"||!ic&&Np(e,t)?(e=Ep(),pl=nc=zn=null,Qr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ap&&t.locale!=="ko"?null:t.data;default:return null}}var mv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mv[e.type]:t==="textarea"}function jp(e,t,n,s){Wr?Zr?Zr.push(s):Zr=[s]:Wr=s,t=ai(t,"onChange"),0<t.length&&(n=new gl("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Ys=null,Vs=null;function yv(e){pg(e,0)}function yl(e){var t=Pe(e);if(Fa(t))return e}function Lp(e,t){if(e==="change")return t}var Op=!1;if(Tn){var cc;if(Tn){var dc="oninput"in document;if(!dc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),dc=typeof _p.oninput=="function"}cc=dc}else cc=!1;Op=cc&&(!document.documentMode||9<document.documentMode)}function Pp(){Ys&&(Ys.detachEvent("onpropertychange",qp),Vs=Ys=null)}function qp(e){if(e.propertyName==="value"&&yl(Vs)){var t=[];jp(t,Vs,e,ec(e)),vp(yv,t)}}function bv(e,t,n){e==="focusin"?(Pp(),Ys=t,Vs=n,Ys.attachEvent("onpropertychange",qp)):e==="focusout"&&Pp()}function vv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(Vs)}function Ev(e,t){if(e==="click")return yl(t)}function wv(e,t){if(e==="input"||e==="change")return yl(t)}function xv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ra=typeof Object.is=="function"?Object.is:xv;function Xs(e,t){if(Ra(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var d=n[s];if(!wt.call(t,d)||!Ra(e[d],t[d]))return!1}return!0}function Ip(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Mp(e,t){var n=Ip(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ip(n)}}function $p(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?$p(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Sn(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Sn(e.document)}return t}function uc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Sv=Tn&&"documentMode"in document&&11>=document.documentMode,Jr=null,pc=null,Gs=null,fc=!1;function Bp(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fc||Jr==null||Jr!==Sn(s)||(s=Jr,"selectionStart"in s&&uc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Gs&&Xs(Gs,s)||(Gs=s,s=ai(pc,"onSelect"),0<s.length&&(t=new gl("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Jr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var es={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionrun:wr("Transition","TransitionRun"),transitionstart:wr("Transition","TransitionStart"),transitioncancel:wr("Transition","TransitionCancel"),transitionend:wr("Transition","TransitionEnd")},hc={},Fp={};Tn&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function xr(e){if(hc[e])return hc[e];if(!es[e])return e;var t=es[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Fp)return hc[e]=t[n];return e}var zp=xr("animationend"),Yp=xr("animationiteration"),Vp=xr("animationstart"),Tv=xr("transitionrun"),Av=xr("transitionstart"),Dv=xr("transitioncancel"),Xp=xr("transitionend"),Gp=new Map,gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gc.push("scrollEnd");function Ja(e,t){Gp.set(e,t),$t(t,[e])}var Hp=new WeakMap;function Ya(e,t){if(typeof e=="object"&&e!==null){var n=Hp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ct(t)},Hp.set(e,t),t)}return{value:e,source:t,stack:Ct(t)}}var Va=[],ts=0,mc=0;function bl(){for(var e=ts,t=mc=ts=0;t<e;){var n=Va[t];Va[t++]=null;var s=Va[t];Va[t++]=null;var d=Va[t];Va[t++]=null;var f=Va[t];if(Va[t++]=null,s!==null&&d!==null){var v=s.pending;v===null?d.next=d:(d.next=v.next,v.next=d),s.pending=d}f!==0&&Kp(n,d,f)}}function vl(e,t,n,s){Va[ts++]=e,Va[ts++]=t,Va[ts++]=n,Va[ts++]=s,mc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function yc(e,t,n,s){return vl(e,t,n,s),El(e)}function as(e,t){return vl(e,null,null,t),El(e)}function Kp(e,t,n){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n);for(var d=!1,f=e.return;f!==null;)f.childLanes|=n,s=f.alternate,s!==null&&(s.childLanes|=n),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(d=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,d&&t!==null&&(d=31-nt(n),e=f.hiddenUpdates,s=e[d],s===null?e[d]=[t]:s.push(t),t.lane=n|536870912),f):null}function El(e){if(50<vo)throw vo=0,Sd=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ns={};function Cv(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ja(e,t,n,s){return new Cv(e,t,n,s)}function bc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function An(e,t){var n=e.alternate;return n===null?(n=ja(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Wp(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function wl(e,t,n,s,d,f){var v=0;if(s=e,typeof e=="function")bc(e)&&(v=1);else if(typeof e=="string")v=k0(e,n,le.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case H:return e=ja(31,n,t,d),e.elementType=H,e.lanes=f,e;case j:return Sr(n.children,d,f,t);case C:v=8,d|=24;break;case D:return e=ja(12,n,t,d|2),e.elementType=D,e.lanes=f,e;case x:return e=ja(13,n,t,d),e.elementType=x,e.lanes=f,e;case R:return e=ja(19,n,t,d),e.elementType=R,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case E:case N:v=10;break e;case A:v=9;break e;case B:v=11;break e;case L:v=14;break e;case P:v=16,s=null;break e}v=29,n=Error(l(130,e===null?"null":typeof e,"")),s=null}return t=ja(v,n,t,d),t.elementType=e,t.type=s,t.lanes=f,t}function Sr(e,t,n,s){return e=ja(7,e,s,t),e.lanes=n,e}function vc(e,t,n){return e=ja(6,e,null,t),e.lanes=n,e}function Ec(e,t,n){return t=ja(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var rs=[],ss=0,xl=null,Sl=0,Xa=[],Ga=0,Tr=null,Dn=1,Cn="";function Ar(e,t){rs[ss++]=Sl,rs[ss++]=xl,xl=e,Sl=t}function Zp(e,t,n){Xa[Ga++]=Dn,Xa[Ga++]=Cn,Xa[Ga++]=Tr,Tr=e;var s=Dn;e=Cn;var d=32-nt(s)-1;s&=~(1<<d),n+=1;var f=32-nt(t)+d;if(30<f){var v=d-d%5;f=(s&(1<<v)-1).toString(32),s>>=v,d-=v,Dn=1<<32-nt(t)+d|n<<d|s,Cn=f+e}else Dn=1<<f|n<<d|s,Cn=e}function wc(e){e.return!==null&&(Ar(e,1),Zp(e,1,0))}function xc(e){for(;e===xl;)xl=rs[--ss],rs[ss]=null,Sl=rs[--ss],rs[ss]=null;for(;e===Tr;)Tr=Xa[--Ga],Xa[Ga]=null,Cn=Xa[--Ga],Xa[Ga]=null,Dn=Xa[--Ga],Xa[Ga]=null}var ma=null,_t=null,at=!1,Dr=null,ln=!1,Sc=Error(l(519));function Cr(e){var t=Error(l(418,""));throw Ws(Ya(t,e)),Sc}function Qp(e){var t=e.stateNode,n=e.type,s=e.memoizedProps;switch(t[Tt]=e,t[We]=s,n){case"dialog":Ve("cancel",t),Ve("close",t);break;case"iframe":case"object":case"embed":Ve("load",t);break;case"video":case"audio":for(n=0;n<wo.length;n++)Ve(wo[n],t);break;case"source":Ve("error",t);break;case"img":case"image":case"link":Ve("error",t),Ve("load",t);break;case"details":Ve("toggle",t);break;case"input":Ve("invalid",t),fp(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),wa(t);break;case"select":Ve("invalid",t);break;case"textarea":Ve("invalid",t),gp(t,s.value,s.defaultValue,s.children),wa(t)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||s.suppressHydrationWarning===!0||mg(t.textContent,n)?(s.popover!=null&&(Ve("beforetoggle",t),Ve("toggle",t)),s.onScroll!=null&&Ve("scroll",t),s.onScrollEnd!=null&&Ve("scrollend",t),s.onClick!=null&&(t.onclick=ni),t=!0):t=!1,t||Cr(e)}function Jp(e){for(ma=e.return;ma;)switch(ma.tag){case 5:case 13:ln=!1;return;case 27:case 3:ln=!0;return;default:ma=ma.return}}function Hs(e){if(e!==ma)return!1;if(!at)return Jp(e),at=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||$d(e.type,e.memoizedProps)),n=!n),n&&_t&&Cr(e),Jp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){_t=tn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}_t=null}}else t===27?(t=_t,sr(e.type)?(e=zd,zd=null,_t=e):_t=t):_t=ma?tn(e.stateNode.nextSibling):null;return!0}function Ks(){_t=ma=null,at=!1}function ef(){var e=Dr;return e!==null&&(Aa===null?Aa=e:Aa.push.apply(Aa,e),Dr=null),e}function Ws(e){Dr===null?Dr=[e]:Dr.push(e)}var Tc=J(null),Nr=null,Nn=null;function Yn(e,t,n){G(Tc,t._currentValue),t._currentValue=n}function kn(e){e._currentValue=Tc.current,$(Tc)}function Ac(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Dc(e,t,n,s){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var f=d.dependencies;if(f!==null){var v=d.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=d;for(var O=0;O<t.length;O++)if(T.context===t[O]){f.lanes|=n,T=f.alternate,T!==null&&(T.lanes|=n),Ac(f.return,n,e),s||(v=null);break e}f=T.next}}else if(d.tag===18){if(v=d.return,v===null)throw Error(l(341));v.lanes|=n,f=v.alternate,f!==null&&(f.lanes|=n),Ac(v,n,e),v=null}else v=d.child;if(v!==null)v.return=d;else for(v=d;v!==null;){if(v===e){v=null;break}if(d=v.sibling,d!==null){d.return=v.return,v=d;break}v=v.return}d=v}}function Zs(e,t,n,s){e=null;for(var d=t,f=!1;d!==null;){if(!f){if((d.flags&524288)!==0)f=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var v=d.alternate;if(v===null)throw Error(l(387));if(v=v.memoizedProps,v!==null){var T=d.type;Ra(d.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(d===Me.current){if(v=d.alternate,v===null)throw Error(l(387));v.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Co):e=[Co])}d=d.return}e!==null&&Dc(t,e,n,s),t.flags|=262144}function Tl(e){for(e=e.firstContext;e!==null;){if(!Ra(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function kr(e){Nr=e,Nn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function fa(e){return tf(Nr,e)}function Al(e,t){return Nr===null&&kr(e),tf(e,t)}function tf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Nn===null){if(e===null)throw Error(l(308));Nn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nn=Nn.next=t;return n}var Nv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},kv=a.unstable_scheduleCallback,Rv=a.unstable_NormalPriority,Xt={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cc(){return{controller:new Nv,data:new Map,refCount:0}}function Qs(e){e.refCount--,e.refCount===0&&kv(Rv,function(){e.controller.abort()})}var Js=null,Nc=0,os=0,ls=null;function jv(e,t){if(Js===null){var n=Js=[];Nc=0,os=Rd(),ls={status:"pending",value:void 0,then:function(s){n.push(s)}}}return Nc++,t.then(af,af),t}function af(){if(--Nc===0&&Js!==null){ls!==null&&(ls.status="fulfilled");var e=Js;Js=null,os=0,ls=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Lv(e,t){var n=[],s={status:"pending",value:null,reason:null,then:function(d){n.push(d)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var d=0;d<n.length;d++)(0,n[d])(t)},function(d){for(s.status="rejected",s.reason=d,d=0;d<n.length;d++)(0,n[d])(void 0)}),s}var nf=Y.S;Y.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&jv(e,t),nf!==null&&nf(e,t)};var Rr=J(null);function kc(){var e=Rr.current;return e!==null?e:bt.pooledCache}function Dl(e,t){t===null?G(Rr,Rr.current):G(Rr,t.pool)}function rf(){var e=kc();return e===null?null:{parent:Xt._currentValue,pool:e}}var eo=Error(l(460)),sf=Error(l(474)),Cl=Error(l(542)),Rc={then:function(){}};function of(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Nl(){}function lf(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Nl,Nl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,df(e),e;default:if(typeof t.status=="string")t.then(Nl,Nl);else{if(e=bt,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=s}},function(s){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,df(e),e}throw to=t,eo}}var to=null;function cf(){if(to===null)throw Error(l(459));var e=to;return to=null,e}function df(e){if(e===eo||e===Cl)throw Error(l(483))}var Vn=!1;function jc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(st&2)!==0){var d=s.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),s.pending=t,t=El(e),Kp(e,null,n),t}return vl(e,s,t,n),El(e)}function ao(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Qa(e,n)}}function Oc(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var d=null,f=null;if(n=n.firstBaseUpdate,n!==null){do{var v={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};f===null?d=f=v:f=f.next=v,n=n.next}while(n!==null);f===null?d=f=t:f=f.next=t}else d=f=t;n={baseState:s.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var _c=!1;function no(){if(_c){var e=ls;if(e!==null)throw e}}function ro(e,t,n,s){_c=!1;var d=e.updateQueue;Vn=!1;var f=d.firstBaseUpdate,v=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var O=T,X=O.next;O.next=null,v===null?f=X:v.next=X,v=O;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,T=ae.lastBaseUpdate,T!==v&&(T===null?ae.firstBaseUpdate=X:T.next=X,ae.lastBaseUpdate=O))}if(f!==null){var se=d.baseState;v=0,ae=X=O=null,T=f;do{var K=T.lane&-536870913,W=K!==T.lane;if(W?(Ze&K)===K:(s&K)===K){K!==0&&K===os&&(_c=!0),ae!==null&&(ae=ae.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Oe=e,ke=T;K=t;var ut=n;switch(ke.tag){case 1:if(Oe=ke.payload,typeof Oe=="function"){se=Oe.call(ut,se,K);break e}se=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=ke.payload,K=typeof Oe=="function"?Oe.call(ut,se,K):Oe,K==null)break e;se=y({},se,K);break e;case 2:Vn=!0}}K=T.callback,K!==null&&(e.flags|=64,W&&(e.flags|=8192),W=d.callbacks,W===null?d.callbacks=[K]:W.push(K))}else W={lane:K,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ae===null?(X=ae=W,O=se):ae=ae.next=W,v|=K;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;W=T,T=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);ae===null&&(O=se),d.baseState=O,d.firstBaseUpdate=X,d.lastBaseUpdate=ae,f===null&&(d.shared.lanes=0),tr|=v,e.lanes=v,e.memoizedState=se}}function uf(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function pf(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)uf(n[e],t)}var is=J(null),kl=J(0);function ff(e,t){e=qn,G(kl,e),G(is,t),qn=e|t.baseLanes}function Pc(){G(kl,qn),G(is,is.current)}function qc(){qn=kl.current,$(is),$(kl)}var Hn=0,Be=null,ct=null,Ft=null,Rl=!1,cs=!1,jr=!1,jl=0,so=0,ds=null,Ov=0;function Ut(){throw Error(l(321))}function Ic(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ra(e[n],t[n]))return!1;return!0}function Mc(e,t,n,s,d,f){return Hn=f,Be=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Y.H=e===null||e.memoizedState===null?Wf:Zf,jr=!1,f=n(s,d),jr=!1,cs&&(f=gf(t,n,s,d)),hf(e),f}function hf(e){Y.H=Il;var t=ct!==null&&ct.next!==null;if(Hn=0,Ft=ct=Be=null,Rl=!1,so=0,ds=null,t)throw Error(l(300));e===null||Qt||(e=e.dependencies,e!==null&&Tl(e)&&(Qt=!0))}function gf(e,t,n,s){Be=e;var d=0;do{if(cs&&(ds=null),so=0,cs=!1,25<=d)throw Error(l(301));if(d+=1,Ft=ct=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}Y.H=Uv,f=t(n,s)}while(cs);return f}function _v(){var e=Y.H,t=e.useState()[0];return t=typeof t.then=="function"?oo(t):t,e=e.useState()[0],(ct!==null?ct.memoizedState:null)!==e&&(Be.flags|=1024),t}function $c(){var e=jl!==0;return jl=0,e}function Uc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Bc(e){if(Rl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Rl=!1}Hn=0,Ft=ct=Be=null,cs=!1,so=jl=0,ds=null}function Sa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?Be.memoizedState=Ft=e:Ft=Ft.next=e,Ft}function zt(){if(ct===null){var e=Be.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=Ft===null?Be.memoizedState:Ft.next;if(t!==null)Ft=t,ct=e;else{if(e===null)throw Be.alternate===null?Error(l(467)):Error(l(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},Ft===null?Be.memoizedState=Ft=e:Ft=Ft.next=e}return Ft}function Fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function oo(e){var t=so;return so+=1,ds===null&&(ds=[]),e=lf(ds,e,t),t=Be,(Ft===null?t.memoizedState:Ft.next)===null&&(t=t.alternate,Y.H=t===null||t.memoizedState===null?Wf:Zf),e}function Ll(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return oo(e);if(e.$$typeof===N)return fa(e)}throw Error(l(438,String(e)))}function zc(e){var t=null,n=Be.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var s=Be.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Fc(),Be.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),s=0;s<e;s++)n[s]=fe;return t.index++,n}function Rn(e,t){return typeof t=="function"?t(e):t}function Ol(e){var t=zt();return Yc(t,ct,e)}function Yc(e,t,n){var s=e.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=n;var d=e.baseQueue,f=s.pending;if(f!==null){if(d!==null){var v=d.next;d.next=f.next,f.next=v}t.baseQueue=d=f,s.pending=null}if(f=e.baseState,d===null)e.memoizedState=f;else{t=d.next;var T=v=null,O=null,X=t,ae=!1;do{var se=X.lane&-536870913;if(se!==X.lane?(Ze&se)===se:(Hn&se)===se){var K=X.revertLane;if(K===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),se===os&&(ae=!0);else if((Hn&K)===K){X=X.next,K===os&&(ae=!0);continue}else se={lane:0,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},O===null?(T=O=se,v=f):O=O.next=se,Be.lanes|=K,tr|=K;se=X.action,jr&&n(f,se),f=X.hasEagerState?X.eagerState:n(f,se)}else K={lane:se,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},O===null?(T=O=K,v=f):O=O.next=K,Be.lanes|=se,tr|=se;X=X.next}while(X!==null&&X!==t);if(O===null?v=f:O.next=T,!Ra(f,e.memoizedState)&&(Qt=!0,ae&&(n=ls,n!==null)))throw n;e.memoizedState=f,e.baseState=v,e.baseQueue=O,s.lastRenderedState=f}return d===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Vc(e){var t=zt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var s=n.dispatch,d=n.pending,f=t.memoizedState;if(d!==null){n.pending=null;var v=d=d.next;do f=e(f,v.action),v=v.next;while(v!==d);Ra(f,t.memoizedState)||(Qt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),n.lastRenderedState=f}return[f,s]}function mf(e,t,n){var s=Be,d=zt(),f=at;if(f){if(n===void 0)throw Error(l(407));n=n()}else n=t();var v=!Ra((ct||d).memoizedState,n);v&&(d.memoizedState=n,Qt=!0),d=d.queue;var T=vf.bind(null,s,d,e);if(lo(2048,8,T,[e]),d.getSnapshot!==t||v||Ft!==null&&Ft.memoizedState.tag&1){if(s.flags|=2048,us(9,_l(),bf.bind(null,s,d,n,t),null),bt===null)throw Error(l(349));f||(Hn&124)!==0||yf(s,t,n)}return n}function yf(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Be.updateQueue,t===null?(t=Fc(),Be.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function bf(e,t,n,s){t.value=n,t.getSnapshot=s,Ef(t)&&wf(e)}function vf(e,t,n){return n(function(){Ef(t)&&wf(e)})}function Ef(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ra(e,n)}catch{return!0}}function wf(e){var t=as(e,2);t!==null&&qa(t,e,2)}function Xc(e){var t=Sa();if(typeof e=="function"){var n=e;if(e=n(),jr){et(!0);try{n()}finally{et(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:e},t}function xf(e,t,n,s){return e.baseState=n,Yc(e,ct,typeof s=="function"?s:Rn)}function Pv(e,t,n,s,d){if(ql(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};Y.T!==null?n(!0):f.isTransition=!1,s(f),n=t.pending,n===null?(f.next=t.pending=f,Sf(t,f)):(f.next=n.next,t.pending=n.next=f)}}function Sf(e,t){var n=t.action,s=t.payload,d=e.state;if(t.isTransition){var f=Y.T,v={};Y.T=v;try{var T=n(d,s),O=Y.S;O!==null&&O(v,T),Tf(e,t,T)}catch(X){Gc(e,t,X)}finally{Y.T=f}}else try{f=n(d,s),Tf(e,t,f)}catch(X){Gc(e,t,X)}}function Tf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){Af(e,t,s)},function(s){return Gc(e,t,s)}):Af(e,t,n)}function Af(e,t,n){t.status="fulfilled",t.value=n,Df(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Sf(e,n)))}function Gc(e,t,n){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=n,Df(t),t=t.next;while(t!==s)}e.action=null}function Df(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Cf(e,t){return t}function Nf(e,t){if(at){var n=bt.formState;if(n!==null){e:{var s=Be;if(at){if(_t){t:{for(var d=_t,f=ln;d.nodeType!==8;){if(!f){d=null;break t}if(d=tn(d.nextSibling),d===null){d=null;break t}}f=d.data,d=f==="F!"||f==="F"?d:null}if(d){_t=tn(d.nextSibling),s=d.data==="F!";break e}}Cr(s)}s=!1}s&&(t=n[0])}}return n=Sa(),n.memoizedState=n.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cf,lastRenderedState:t},n.queue=s,n=Gf.bind(null,Be,s),s.dispatch=n,s=Xc(!1),f=Qc.bind(null,Be,!1,s.queue),s=Sa(),d={state:t,dispatch:null,action:e,pending:null},s.queue=d,n=Pv.bind(null,Be,d,f,n),d.dispatch=n,s.memoizedState=e,[t,n,!1]}function kf(e){var t=zt();return Rf(t,ct,e)}function Rf(e,t,n){if(t=Yc(e,t,Cf)[0],e=Ol(Rn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=oo(t)}catch(v){throw v===eo?Cl:v}else s=t;t=zt();var d=t.queue,f=d.dispatch;return n!==t.memoizedState&&(Be.flags|=2048,us(9,_l(),qv.bind(null,d,n),null)),[s,f,e]}function qv(e,t){e.action=t}function jf(e){var t=zt(),n=ct;if(n!==null)return Rf(t,n,e);zt(),t=t.memoizedState,n=zt();var s=n.queue.dispatch;return n.memoizedState=e,[t,s,!1]}function us(e,t,n,s){return e={tag:e,create:n,deps:s,inst:t,next:null},t=Be.updateQueue,t===null&&(t=Fc(),Be.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e),e}function _l(){return{destroy:void 0,resource:void 0}}function Lf(){return zt().memoizedState}function Pl(e,t,n,s){var d=Sa();s=s===void 0?null:s,Be.flags|=e,d.memoizedState=us(1|t,_l(),n,s)}function lo(e,t,n,s){var d=zt();s=s===void 0?null:s;var f=d.memoizedState.inst;ct!==null&&s!==null&&Ic(s,ct.memoizedState.deps)?d.memoizedState=us(t,f,n,s):(Be.flags|=e,d.memoizedState=us(1|t,f,n,s))}function Of(e,t){Pl(8390656,8,e,t)}function _f(e,t){lo(2048,8,e,t)}function Pf(e,t){return lo(4,2,e,t)}function qf(e,t){return lo(4,4,e,t)}function If(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mf(e,t,n){n=n!=null?n.concat([e]):null,lo(4,4,If.bind(null,t,e),n)}function Hc(){}function $f(e,t){var n=zt();t=t===void 0?null:t;var s=n.memoizedState;return t!==null&&Ic(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Uf(e,t){var n=zt();t=t===void 0?null:t;var s=n.memoizedState;if(t!==null&&Ic(t,s[1]))return s[0];if(s=e(),jr){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[s,t],s}function Kc(e,t,n){return n===void 0||(Hn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=zh(),Be.lanes|=e,tr|=e,n)}function Bf(e,t,n,s){return Ra(n,t)?n:is.current!==null?(e=Kc(e,n,s),Ra(e,t)||(Qt=!0),e):(Hn&42)===0?(Qt=!0,e.memoizedState=n):(e=zh(),Be.lanes|=e,tr|=e,t)}function Ff(e,t,n,s,d){var f=Q.p;Q.p=f!==0&&8>f?f:8;var v=Y.T,T={};Y.T=T,Qc(e,!1,t,n);try{var O=d(),X=Y.S;if(X!==null&&X(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ae=Lv(O,s);io(e,t,ae,Pa(e))}else io(e,t,s,Pa(e))}catch(se){io(e,t,{then:function(){},status:"rejected",reason:se},Pa())}finally{Q.p=f,Y.T=v}}function Iv(){}function Wc(e,t,n,s){if(e.tag!==5)throw Error(l(476));var d=zf(e).queue;Ff(e,d,t,be,n===null?Iv:function(){return Yf(e),n(s)})}function zf(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:be,baseState:be,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:be},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Yf(e){var t=zf(e).next.queue;io(e,t,{},Pa())}function Zc(){return fa(Co)}function Vf(){return zt().memoizedState}function Xf(){return zt().memoizedState}function Mv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Pa();e=Xn(n);var s=Gn(t,e,n);s!==null&&(qa(s,t,n),ao(s,t,n)),t={cache:Cc()},e.payload=t;return}t=t.return}}function $v(e,t,n){var s=Pa();n={lane:s,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},ql(e)?Hf(t,n):(n=yc(e,t,n,s),n!==null&&(qa(n,e,s),Kf(n,t,s)))}function Gf(e,t,n){var s=Pa();io(e,t,n,s)}function io(e,t,n,s){var d={lane:s,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(ql(e))Hf(t,d);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var v=t.lastRenderedState,T=f(v,n);if(d.hasEagerState=!0,d.eagerState=T,Ra(T,v))return vl(e,t,d,0),bt===null&&bl(),!1}catch{}if(n=yc(e,t,d,s),n!==null)return qa(n,e,s),Kf(n,t,s),!0}return!1}function Qc(e,t,n,s){if(s={lane:2,revertLane:Rd(),action:s,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(t)throw Error(l(479))}else t=yc(e,n,s,2),t!==null&&qa(t,e,2)}function ql(e){var t=e.alternate;return e===Be||t!==null&&t===Be}function Hf(e,t){cs=Rl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Kf(e,t,n){if((n&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,Qa(e,n)}}var Il={readContext:fa,use:Ll,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useLayoutEffect:Ut,useInsertionEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useSyncExternalStore:Ut,useId:Ut,useHostTransitionStatus:Ut,useFormState:Ut,useActionState:Ut,useOptimistic:Ut,useMemoCache:Ut,useCacheRefresh:Ut},Wf={readContext:fa,use:Ll,useCallback:function(e,t){return Sa().memoizedState=[e,t===void 0?null:t],e},useContext:fa,useEffect:Of,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Pl(4194308,4,If.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Pl(4194308,4,e,t)},useInsertionEffect:function(e,t){Pl(4,2,e,t)},useMemo:function(e,t){var n=Sa();t=t===void 0?null:t;var s=e();if(jr){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[s,t],s},useReducer:function(e,t,n){var s=Sa();if(n!==void 0){var d=n(t);if(jr){et(!0);try{n(t)}finally{et(!1)}}}else d=t;return s.memoizedState=s.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},s.queue=e,e=e.dispatch=$v.bind(null,Be,e),[s.memoizedState,e]},useRef:function(e){var t=Sa();return e={current:e},t.memoizedState=e},useState:function(e){e=Xc(e);var t=e.queue,n=Gf.bind(null,Be,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Hc,useDeferredValue:function(e,t){var n=Sa();return Kc(n,e,t)},useTransition:function(){var e=Xc(!1);return e=Ff.bind(null,Be,e.queue,!0,!1),Sa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var s=Be,d=Sa();if(at){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),bt===null)throw Error(l(349));(Ze&124)!==0||yf(s,t,n)}d.memoizedState=n;var f={value:n,getSnapshot:t};return d.queue=f,Of(vf.bind(null,s,f,e),[e]),s.flags|=2048,us(9,_l(),bf.bind(null,s,f,n,t),null),n},useId:function(){var e=Sa(),t=bt.identifierPrefix;if(at){var n=Cn,s=Dn;n=(s&~(1<<32-nt(s)-1)).toString(32)+n,t="«"+t+"R"+n,n=jl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Ov++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Zc,useFormState:Nf,useActionState:Nf,useOptimistic:function(e){var t=Sa();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Qc.bind(null,Be,!0,n),n.dispatch=t,[e,t]},useMemoCache:zc,useCacheRefresh:function(){return Sa().memoizedState=Mv.bind(null,Be)}},Zf={readContext:fa,use:Ll,useCallback:$f,useContext:fa,useEffect:_f,useImperativeHandle:Mf,useInsertionEffect:Pf,useLayoutEffect:qf,useMemo:Uf,useReducer:Ol,useRef:Lf,useState:function(){return Ol(Rn)},useDebugValue:Hc,useDeferredValue:function(e,t){var n=zt();return Bf(n,ct.memoizedState,e,t)},useTransition:function(){var e=Ol(Rn)[0],t=zt().memoizedState;return[typeof e=="boolean"?e:oo(e),t]},useSyncExternalStore:mf,useId:Vf,useHostTransitionStatus:Zc,useFormState:kf,useActionState:kf,useOptimistic:function(e,t){var n=zt();return xf(n,ct,e,t)},useMemoCache:zc,useCacheRefresh:Xf},Uv={readContext:fa,use:Ll,useCallback:$f,useContext:fa,useEffect:_f,useImperativeHandle:Mf,useInsertionEffect:Pf,useLayoutEffect:qf,useMemo:Uf,useReducer:Vc,useRef:Lf,useState:function(){return Vc(Rn)},useDebugValue:Hc,useDeferredValue:function(e,t){var n=zt();return ct===null?Kc(n,e,t):Bf(n,ct.memoizedState,e,t)},useTransition:function(){var e=Vc(Rn)[0],t=zt().memoizedState;return[typeof e=="boolean"?e:oo(e),t]},useSyncExternalStore:mf,useId:Vf,useHostTransitionStatus:Zc,useFormState:jf,useActionState:jf,useOptimistic:function(e,t){var n=zt();return ct!==null?xf(n,ct,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:zc,useCacheRefresh:Xf},ps=null,co=0;function Ml(e){var t=co;return co+=1,ps===null&&(ps=[]),lf(ps,e,t)}function uo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function $l(e,t){throw t.$$typeof===b?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Qf(e){var t=e._init;return t(e._payload)}function Jf(e){function t(z,M){if(e){var V=z.deletions;V===null?(z.deletions=[M],z.flags|=16):V.push(M)}}function n(z,M){if(!e)return null;for(;M!==null;)t(z,M),M=M.sibling;return null}function s(z){for(var M=new Map;z!==null;)z.key!==null?M.set(z.key,z):M.set(z.index,z),z=z.sibling;return M}function d(z,M){return z=An(z,M),z.index=0,z.sibling=null,z}function f(z,M,V){return z.index=V,e?(V=z.alternate,V!==null?(V=V.index,V<M?(z.flags|=67108866,M):V):(z.flags|=67108866,M)):(z.flags|=1048576,M)}function v(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function T(z,M,V,ne){return M===null||M.tag!==6?(M=vc(V,z.mode,ne),M.return=z,M):(M=d(M,V),M.return=z,M)}function O(z,M,V,ne){var Se=V.type;return Se===j?ae(z,M,V.props.children,ne,V.key):M!==null&&(M.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===P&&Qf(Se)===M.type)?(M=d(M,V.props),uo(M,V),M.return=z,M):(M=wl(V.type,V.key,V.props,null,z.mode,ne),uo(M,V),M.return=z,M)}function X(z,M,V,ne){return M===null||M.tag!==4||M.stateNode.containerInfo!==V.containerInfo||M.stateNode.implementation!==V.implementation?(M=Ec(V,z.mode,ne),M.return=z,M):(M=d(M,V.children||[]),M.return=z,M)}function ae(z,M,V,ne,Se){return M===null||M.tag!==7?(M=Sr(V,z.mode,ne,Se),M.return=z,M):(M=d(M,V),M.return=z,M)}function se(z,M,V){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=vc(""+M,z.mode,V),M.return=z,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return V=wl(M.type,M.key,M.props,null,z.mode,V),uo(V,M),V.return=z,V;case S:return M=Ec(M,z.mode,V),M.return=z,M;case P:var ne=M._init;return M=ne(M._payload),se(z,M,V)}if(de(M)||oe(M))return M=Sr(M,z.mode,V,null),M.return=z,M;if(typeof M.then=="function")return se(z,Ml(M),V);if(M.$$typeof===N)return se(z,Al(z,M),V);$l(z,M)}return null}function K(z,M,V,ne){var Se=M!==null?M.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return Se!==null?null:T(z,M,""+V,ne);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case w:return V.key===Se?O(z,M,V,ne):null;case S:return V.key===Se?X(z,M,V,ne):null;case P:return Se=V._init,V=Se(V._payload),K(z,M,V,ne)}if(de(V)||oe(V))return Se!==null?null:ae(z,M,V,ne,null);if(typeof V.then=="function")return K(z,M,Ml(V),ne);if(V.$$typeof===N)return K(z,M,Al(z,V),ne);$l(z,V)}return null}function W(z,M,V,ne,Se){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return z=z.get(V)||null,T(M,z,""+ne,Se);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case w:return z=z.get(ne.key===null?V:ne.key)||null,O(M,z,ne,Se);case S:return z=z.get(ne.key===null?V:ne.key)||null,X(M,z,ne,Se);case P:var Fe=ne._init;return ne=Fe(ne._payload),W(z,M,V,ne,Se)}if(de(ne)||oe(ne))return z=z.get(V)||null,ae(M,z,ne,Se,null);if(typeof ne.then=="function")return W(z,M,V,Ml(ne),Se);if(ne.$$typeof===N)return W(z,M,V,Al(M,ne),Se);$l(M,ne)}return null}function Oe(z,M,V,ne){for(var Se=null,Fe=null,De=M,je=M=0,ea=null;De!==null&&je<V.length;je++){De.index>je?(ea=De,De=null):ea=De.sibling;var tt=K(z,De,V[je],ne);if(tt===null){De===null&&(De=ea);break}e&&De&&tt.alternate===null&&t(z,De),M=f(tt,M,je),Fe===null?Se=tt:Fe.sibling=tt,Fe=tt,De=ea}if(je===V.length)return n(z,De),at&&Ar(z,je),Se;if(De===null){for(;je<V.length;je++)De=se(z,V[je],ne),De!==null&&(M=f(De,M,je),Fe===null?Se=De:Fe.sibling=De,Fe=De);return at&&Ar(z,je),Se}for(De=s(De);je<V.length;je++)ea=W(De,z,je,V[je],ne),ea!==null&&(e&&ea.alternate!==null&&De.delete(ea.key===null?je:ea.key),M=f(ea,M,je),Fe===null?Se=ea:Fe.sibling=ea,Fe=ea);return e&&De.forEach(function(dr){return t(z,dr)}),at&&Ar(z,je),Se}function ke(z,M,V,ne){if(V==null)throw Error(l(151));for(var Se=null,Fe=null,De=M,je=M=0,ea=null,tt=V.next();De!==null&&!tt.done;je++,tt=V.next()){De.index>je?(ea=De,De=null):ea=De.sibling;var dr=K(z,De,tt.value,ne);if(dr===null){De===null&&(De=ea);break}e&&De&&dr.alternate===null&&t(z,De),M=f(dr,M,je),Fe===null?Se=dr:Fe.sibling=dr,Fe=dr,De=ea}if(tt.done)return n(z,De),at&&Ar(z,je),Se;if(De===null){for(;!tt.done;je++,tt=V.next())tt=se(z,tt.value,ne),tt!==null&&(M=f(tt,M,je),Fe===null?Se=tt:Fe.sibling=tt,Fe=tt);return at&&Ar(z,je),Se}for(De=s(De);!tt.done;je++,tt=V.next())tt=W(De,z,je,tt.value,ne),tt!==null&&(e&&tt.alternate!==null&&De.delete(tt.key===null?je:tt.key),M=f(tt,M,je),Fe===null?Se=tt:Fe.sibling=tt,Fe=tt);return e&&De.forEach(function(B0){return t(z,B0)}),at&&Ar(z,je),Se}function ut(z,M,V,ne){if(typeof V=="object"&&V!==null&&V.type===j&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case w:e:{for(var Se=V.key;M!==null;){if(M.key===Se){if(Se=V.type,Se===j){if(M.tag===7){n(z,M.sibling),ne=d(M,V.props.children),ne.return=z,z=ne;break e}}else if(M.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===P&&Qf(Se)===M.type){n(z,M.sibling),ne=d(M,V.props),uo(ne,V),ne.return=z,z=ne;break e}n(z,M);break}else t(z,M);M=M.sibling}V.type===j?(ne=Sr(V.props.children,z.mode,ne,V.key),ne.return=z,z=ne):(ne=wl(V.type,V.key,V.props,null,z.mode,ne),uo(ne,V),ne.return=z,z=ne)}return v(z);case S:e:{for(Se=V.key;M!==null;){if(M.key===Se)if(M.tag===4&&M.stateNode.containerInfo===V.containerInfo&&M.stateNode.implementation===V.implementation){n(z,M.sibling),ne=d(M,V.children||[]),ne.return=z,z=ne;break e}else{n(z,M);break}else t(z,M);M=M.sibling}ne=Ec(V,z.mode,ne),ne.return=z,z=ne}return v(z);case P:return Se=V._init,V=Se(V._payload),ut(z,M,V,ne)}if(de(V))return Oe(z,M,V,ne);if(oe(V)){if(Se=oe(V),typeof Se!="function")throw Error(l(150));return V=Se.call(V),ke(z,M,V,ne)}if(typeof V.then=="function")return ut(z,M,Ml(V),ne);if(V.$$typeof===N)return ut(z,M,Al(z,V),ne);$l(z,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,M!==null&&M.tag===6?(n(z,M.sibling),ne=d(M,V),ne.return=z,z=ne):(n(z,M),ne=vc(V,z.mode,ne),ne.return=z,z=ne),v(z)):n(z,M)}return function(z,M,V,ne){try{co=0;var Se=ut(z,M,V,ne);return ps=null,Se}catch(De){if(De===eo||De===Cl)throw De;var Fe=ja(29,De,null,z.mode);return Fe.lanes=ne,Fe.return=z,Fe}}}var fs=Jf(!0),eh=Jf(!1),Ha=J(null),cn=null;function Kn(e){var t=e.alternate;G(Gt,Gt.current&1),G(Ha,e),cn===null&&(t===null||is.current!==null||t.memoizedState!==null)&&(cn=e)}function th(e){if(e.tag===22){if(G(Gt,Gt.current),G(Ha,e),cn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(cn=e)}}else Wn()}function Wn(){G(Gt,Gt.current),G(Ha,Ha.current)}function jn(e){$(Ha),cn===e&&(cn=null),$(Gt)}var Gt=J(0);function Ul(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Fd(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Jc(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ed={enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Pa(),d=Xn(s);d.payload=t,n!=null&&(d.callback=n),t=Gn(e,d,s),t!==null&&(qa(t,e,s),ao(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Pa(),d=Xn(s);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=Gn(e,d,s),t!==null&&(qa(t,e,s),ao(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Pa(),s=Xn(n);s.tag=2,t!=null&&(s.callback=t),t=Gn(e,s,n),t!==null&&(qa(t,e,n),ao(t,e,n))}};function ah(e,t,n,s,d,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,v):t.prototype&&t.prototype.isPureReactComponent?!Xs(n,s)||!Xs(d,f):!0}function nh(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&ed.enqueueReplaceState(t,t.state,null)}function Lr(e,t){var n=t;if("ref"in t){n={};for(var s in t)s!=="ref"&&(n[s]=t[s])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var d in e)n[d]===void 0&&(n[d]=e[d])}return n}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function rh(e){Bl(e)}function sh(e){console.error(e)}function oh(e){Bl(e)}function Fl(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function lh(e,t,n){try{var s=e.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function td(e,t,n){return n=Xn(n),n.tag=3,n.payload={element:null},n.callback=function(){Fl(e,t)},n}function ih(e){return e=Xn(e),e.tag=3,e}function ch(e,t,n,s){var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var f=s.value;e.payload=function(){return d(f)},e.callback=function(){lh(t,n,s)}}var v=n.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){lh(t,n,s),typeof d!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function Bv(e,t,n,s,d){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=n.alternate,t!==null&&Zs(t,n,d,!0),n=Ha.current,n!==null){switch(n.tag){case 13:return cn===null?Ad():n.alternate===null&&Pt===0&&(Pt=3),n.flags&=-257,n.flags|=65536,n.lanes=d,s===Rc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([s]):t.add(s),Cd(e,s,d)),!1;case 22:return n.flags|=65536,s===Rc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([s]):n.add(s)),Cd(e,s,d)),!1}throw Error(l(435,n.tag))}return Cd(e,s,d),Ad(),!1}if(at)return t=Ha.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,s!==Sc&&(e=Error(l(422),{cause:s}),Ws(Ya(e,n)))):(s!==Sc&&(t=Error(l(423),{cause:s}),Ws(Ya(t,n))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,s=Ya(s,n),d=td(e.stateNode,s,d),Oc(e,d),Pt!==4&&(Pt=2)),!1;var f=Error(l(520),{cause:s});if(f=Ya(f,n),bo===null?bo=[f]:bo.push(f),Pt!==4&&(Pt=2),t===null)return!0;s=Ya(s,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=d&-d,n.lanes|=e,e=td(n.stateNode,s,e),Oc(n,e),!1;case 1:if(t=n.type,f=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ar===null||!ar.has(f))))return n.flags|=65536,d&=-d,n.lanes|=d,d=ih(d),ch(d,e,n,s),Oc(n,d),!1}n=n.return}while(n!==null);return!1}var dh=Error(l(461)),Qt=!1;function ra(e,t,n,s){t.child=e===null?eh(t,null,n,s):fs(t,e.child,n,s)}function uh(e,t,n,s,d){n=n.render;var f=t.ref;if("ref"in s){var v={};for(var T in s)T!=="ref"&&(v[T]=s[T])}else v=s;return kr(t),s=Mc(e,t,n,v,f,d),T=$c(),e!==null&&!Qt?(Uc(e,t,d),Ln(e,t,d)):(at&&T&&wc(t),t.flags|=1,ra(e,t,s,d),t.child)}function ph(e,t,n,s,d){if(e===null){var f=n.type;return typeof f=="function"&&!bc(f)&&f.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=f,fh(e,t,f,s,d)):(e=wl(n.type,null,s,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!cd(e,d)){var v=f.memoizedProps;if(n=n.compare,n=n!==null?n:Xs,n(v,s)&&e.ref===t.ref)return Ln(e,t,d)}return t.flags|=1,e=An(f,s),e.ref=t.ref,e.return=t,t.child=e}function fh(e,t,n,s,d){if(e!==null){var f=e.memoizedProps;if(Xs(f,s)&&e.ref===t.ref)if(Qt=!1,t.pendingProps=s=f,cd(e,d))(e.flags&131072)!==0&&(Qt=!0);else return t.lanes=e.lanes,Ln(e,t,d)}return ad(e,t,n,s,d)}function hh(e,t,n){var s=t.pendingProps,d=s.children,f=e!==null?e.memoizedState:null;if(s.mode==="hidden"){if((t.flags&128)!==0){if(s=f!==null?f.baseLanes|n:n,e!==null){for(d=t.child=e.child,f=0;d!==null;)f=f|d.lanes|d.childLanes,d=d.sibling;t.childLanes=f&~s}else t.childLanes=0,t.child=null;return gh(e,t,s,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(t,f!==null?f.cachePool:null),f!==null?ff(t,f):Pc(),th(t);else return t.lanes=t.childLanes=536870912,gh(e,t,f!==null?f.baseLanes|n:n,n)}else f!==null?(Dl(t,f.cachePool),ff(t,f),Wn(),t.memoizedState=null):(e!==null&&Dl(t,null),Pc(),Wn());return ra(e,t,d,n),t.child}function gh(e,t,n,s){var d=kc();return d=d===null?null:{parent:Xt._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&Dl(t,null),Pc(),th(t),e!==null&&Zs(e,t,s,!0),null}function zl(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ad(e,t,n,s,d){return kr(t),n=Mc(e,t,n,s,void 0,d),s=$c(),e!==null&&!Qt?(Uc(e,t,d),Ln(e,t,d)):(at&&s&&wc(t),t.flags|=1,ra(e,t,n,d),t.child)}function mh(e,t,n,s,d,f){return kr(t),t.updateQueue=null,n=gf(t,s,n,d),hf(e),s=$c(),e!==null&&!Qt?(Uc(e,t,f),Ln(e,t,f)):(at&&s&&wc(t),t.flags|=1,ra(e,t,n,f),t.child)}function yh(e,t,n,s,d){if(kr(t),t.stateNode===null){var f=ns,v=n.contextType;typeof v=="object"&&v!==null&&(f=fa(v)),f=new n(s,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=ed,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=s,f.state=t.memoizedState,f.refs={},jc(t),v=n.contextType,f.context=typeof v=="object"&&v!==null?fa(v):ns,f.state=t.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(Jc(t,n,v,s),f.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&ed.enqueueReplaceState(f,f.state,null),ro(t,s,f,d),no(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){f=t.stateNode;var T=t.memoizedProps,O=Lr(n,T);f.props=O;var X=f.context,ae=n.contextType;v=ns,typeof ae=="object"&&ae!==null&&(v=fa(ae));var se=n.getDerivedStateFromProps;ae=typeof se=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=t.pendingProps!==T,ae||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||X!==v)&&nh(t,f,s,v),Vn=!1;var K=t.memoizedState;f.state=K,ro(t,s,f,d),no(),X=t.memoizedState,T||K!==X||Vn?(typeof se=="function"&&(Jc(t,n,se,s),X=t.memoizedState),(O=Vn||ah(t,n,O,s,K,X,v))?(ae||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=X),f.props=s,f.state=X,f.context=v,s=O):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{f=t.stateNode,Lc(e,t),v=t.memoizedProps,ae=Lr(n,v),f.props=ae,se=t.pendingProps,K=f.context,X=n.contextType,O=ns,typeof X=="object"&&X!==null&&(O=fa(X)),T=n.getDerivedStateFromProps,(X=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==se||K!==O)&&nh(t,f,s,O),Vn=!1,K=t.memoizedState,f.state=K,ro(t,s,f,d),no();var W=t.memoizedState;v!==se||K!==W||Vn||e!==null&&e.dependencies!==null&&Tl(e.dependencies)?(typeof T=="function"&&(Jc(t,n,T,s),W=t.memoizedState),(ae=Vn||ah(t,n,ae,s,K,W,O)||e!==null&&e.dependencies!==null&&Tl(e.dependencies))?(X||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,W,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,W,O)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=W),f.props=s,f.state=W,f.context=O,s=ae):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),s=!1)}return f=s,zl(e,t),s=(t.flags&128)!==0,f||s?(f=t.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&s?(t.child=fs(t,e.child,null,d),t.child=fs(t,null,n,d)):ra(e,t,n,d),t.memoizedState=f.state,e=t.child):e=Ln(e,t,d),e}function bh(e,t,n,s){return Ks(),t.flags|=256,ra(e,t,n,s),t.child}var nd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rd(e){return{baseLanes:e,cachePool:rf()}}function sd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ka),e}function vh(e,t,n){var s=t.pendingProps,d=!1,f=(t.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(Gt.current&2)!==0),v&&(d=!0,t.flags&=-129),v=(t.flags&32)!==0,t.flags&=-33,e===null){if(at){if(d?Kn(t):Wn(),at){var T=_t,O;if(O=T){e:{for(O=T,T=ln;O.nodeType!==8;){if(!T){T=null;break e}if(O=tn(O.nextSibling),O===null){T=null;break e}}T=O}T!==null?(t.memoizedState={dehydrated:T,treeContext:Tr!==null?{id:Dn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},O=ja(18,null,null,0),O.stateNode=T,O.return=t,t.child=O,ma=t,_t=null,O=!0):O=!1}O||Cr(t)}if(T=t.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Fd(T)?t.lanes=32:t.lanes=536870912,null;jn(t)}return T=s.children,s=s.fallback,d?(Wn(),d=t.mode,T=Yl({mode:"hidden",children:T},d),s=Sr(s,d,n,null),T.return=t,s.return=t,T.sibling=s,t.child=T,d=t.child,d.memoizedState=rd(n),d.childLanes=sd(e,v,n),t.memoizedState=nd,s):(Kn(t),od(t,T))}if(O=e.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(f)t.flags&256?(Kn(t),t.flags&=-257,t=ld(e,t,n)):t.memoizedState!==null?(Wn(),t.child=e.child,t.flags|=128,t=null):(Wn(),d=s.fallback,T=t.mode,s=Yl({mode:"visible",children:s.children},T),d=Sr(d,T,n,null),d.flags|=2,s.return=t,d.return=t,s.sibling=d,t.child=s,fs(t,e.child,null,n),s=t.child,s.memoizedState=rd(n),s.childLanes=sd(e,v,n),t.memoizedState=nd,t=d);else if(Kn(t),Fd(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var X=v.dgst;v=X,s=Error(l(419)),s.stack="",s.digest=v,Ws({value:s,source:null,stack:null}),t=ld(e,t,n)}else if(Qt||Zs(e,t,n,!1),v=(n&e.childLanes)!==0,Qt||v){if(v=bt,v!==null&&(s=n&-n,s=(s&42)!==0?1:Bn(s),s=(s&(v.suspendedLanes|n))!==0?0:s,s!==0&&s!==O.retryLane))throw O.retryLane=s,as(e,s),qa(v,e,s),dh;T.data==="$?"||Ad(),t=ld(e,t,n)}else T.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=O.treeContext,_t=tn(T.nextSibling),ma=t,at=!0,Dr=null,ln=!1,e!==null&&(Xa[Ga++]=Dn,Xa[Ga++]=Cn,Xa[Ga++]=Tr,Dn=e.id,Cn=e.overflow,Tr=t),t=od(t,s.children),t.flags|=4096);return t}return d?(Wn(),d=s.fallback,T=t.mode,O=e.child,X=O.sibling,s=An(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,X!==null?d=An(X,d):(d=Sr(d,T,n,null),d.flags|=2),d.return=t,s.return=t,s.sibling=d,t.child=s,s=d,d=t.child,T=e.child.memoizedState,T===null?T=rd(n):(O=T.cachePool,O!==null?(X=Xt._currentValue,O=O.parent!==X?{parent:X,pool:X}:O):O=rf(),T={baseLanes:T.baseLanes|n,cachePool:O}),d.memoizedState=T,d.childLanes=sd(e,v,n),t.memoizedState=nd,s):(Kn(t),n=e.child,e=n.sibling,n=An(n,{mode:"visible",children:s.children}),n.return=t,n.sibling=null,e!==null&&(v=t.deletions,v===null?(t.deletions=[e],t.flags|=16):v.push(e)),t.child=n,t.memoizedState=null,n)}function od(e,t){return t=Yl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Yl(e,t){return e=ja(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function ld(e,t,n){return fs(t,e.child,null,n),e=od(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Eh(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),Ac(e.return,t,n)}function id(e,t,n,s,d){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:d}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=n,f.tailMode=d)}function wh(e,t,n){var s=t.pendingProps,d=s.revealOrder,f=s.tail;if(ra(e,t,s.children,n),s=Gt.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Eh(e,n,t);else if(e.tag===19)Eh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(G(Gt,s),d){case"forwards":for(n=t.child,d=null;n!==null;)e=n.alternate,e!==null&&Ul(e)===null&&(d=n),n=n.sibling;n=d,n===null?(d=t.child,t.child=null):(d=n.sibling,n.sibling=null),id(t,!1,d,n,f);break;case"backwards":for(n=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Ul(e)===null){t.child=d;break}e=d.sibling,d.sibling=n,n=d,d=e}id(t,!0,n,null,f);break;case"together":id(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ln(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),tr|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Zs(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cd(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Tl(e)))}function Fv(e,t,n){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),Yn(t,Xt,e.memoizedState.cache),Ks();break;case 27:case 5:pt(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:Yn(t,t.type,t.memoizedProps.value);break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Kn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?vh(e,t,n):(Kn(t),e=Ln(e,t,n),e!==null?e.sibling:null);Kn(t);break;case 19:var d=(e.flags&128)!==0;if(s=(n&t.childLanes)!==0,s||(Zs(e,t,n,!1),s=(n&t.childLanes)!==0),d){if(s)return wh(e,t,n);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),G(Gt,Gt.current),s)break;return null;case 22:case 23:return t.lanes=0,hh(e,t,n);case 24:Yn(t,Xt,e.memoizedState.cache)}return Ln(e,t,n)}function xh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Qt=!0;else{if(!cd(e,n)&&(t.flags&128)===0)return Qt=!1,Fv(e,t,n);Qt=(e.flags&131072)!==0}else Qt=!1,at&&(t.flags&1048576)!==0&&Zp(t,Sl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var s=t.elementType,d=s._init;if(s=d(s._payload),t.type=s,typeof s=="function")bc(s)?(e=Lr(s,e),t.tag=1,t=yh(null,t,s,e,n)):(t.tag=0,t=ad(null,t,s,e,n));else{if(s!=null){if(d=s.$$typeof,d===B){t.tag=11,t=uh(null,t,s,e,n);break e}else if(d===L){t.tag=14,t=ph(null,t,s,e,n);break e}}throw t=he(s)||s,Error(l(306,t,""))}}return t;case 0:return ad(e,t,t.type,t.pendingProps,n);case 1:return s=t.type,d=Lr(s,t.pendingProps),yh(e,t,s,d,n);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(l(387));s=t.pendingProps;var f=t.memoizedState;d=f.element,Lc(e,t),ro(t,s,null,n);var v=t.memoizedState;if(s=v.cache,Yn(t,Xt,s),s!==f.cache&&Dc(t,[Xt],n,!0),no(),s=v.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:v.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=bh(e,t,s,n);break e}else if(s!==d){d=Ya(Error(l(424)),t),Ws(d),t=bh(e,t,s,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_t=tn(e.firstChild),ma=t,at=!0,Dr=null,ln=!0,n=eh(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),s===d){t=Ln(e,t,n);break e}ra(e,t,s,n)}t=t.child}return t;case 26:return zl(e,t),e===null?(n=Dg(t.type,null,t.pendingProps,null))?t.memoizedState=n:at||(n=t.type,e=t.pendingProps,s=ri(Ee.current).createElement(n),s[Tt]=t,s[We]=e,oa(s,n,e),Ge(s),t.stateNode=s):t.memoizedState=Dg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pt(t),e===null&&at&&(s=t.stateNode=Sg(t.type,t.pendingProps,Ee.current),ma=t,ln=!0,d=_t,sr(t.type)?(zd=d,_t=tn(s.firstChild)):_t=d),ra(e,t,t.pendingProps.children,n),zl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&at&&((d=s=_t)&&(s=m0(s,t.type,t.pendingProps,ln),s!==null?(t.stateNode=s,ma=t,_t=tn(s.firstChild),ln=!1,d=!0):d=!1),d||Cr(t)),pt(t),d=t.type,f=t.pendingProps,v=e!==null?e.memoizedProps:null,s=f.children,$d(d,f)?s=null:v!==null&&$d(d,v)&&(t.flags|=32),t.memoizedState!==null&&(d=Mc(e,t,_v,null,null,n),Co._currentValue=d),zl(e,t),ra(e,t,s,n),t.child;case 6:return e===null&&at&&((e=n=_t)&&(n=y0(n,t.pendingProps,ln),n!==null?(t.stateNode=n,ma=t,_t=null,e=!0):e=!1),e||Cr(t)),null;case 13:return vh(e,t,n);case 4:return Ie(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=fs(t,null,s,n):ra(e,t,s,n),t.child;case 11:return uh(e,t,t.type,t.pendingProps,n);case 7:return ra(e,t,t.pendingProps,n),t.child;case 8:return ra(e,t,t.pendingProps.children,n),t.child;case 12:return ra(e,t,t.pendingProps.children,n),t.child;case 10:return s=t.pendingProps,Yn(t,t.type,s.value),ra(e,t,s.children,n),t.child;case 9:return d=t.type._context,s=t.pendingProps.children,kr(t),d=fa(d),s=s(d),t.flags|=1,ra(e,t,s,n),t.child;case 14:return ph(e,t,t.type,t.pendingProps,n);case 15:return fh(e,t,t.type,t.pendingProps,n);case 19:return wh(e,t,n);case 31:return s=t.pendingProps,n=t.mode,s={mode:s.mode,children:s.children},e===null?(n=Yl(s,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=An(e.child,s),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return hh(e,t,n);case 24:return kr(t),s=fa(Xt),e===null?(d=kc(),d===null&&(d=bt,f=Cc(),d.pooledCache=f,f.refCount++,f!==null&&(d.pooledCacheLanes|=n),d=f),t.memoizedState={parent:s,cache:d},jc(t),Yn(t,Xt,d)):((e.lanes&n)!==0&&(Lc(e,t),ro(t,null,null,n),no()),d=e.memoizedState,f=t.memoizedState,d.parent!==s?(d={parent:s,cache:s},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),Yn(t,Xt,s)):(s=f.cache,Yn(t,Xt,s),s!==d.cache&&Dc(t,[Xt],n,!0))),ra(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function On(e){e.flags|=4}function Sh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!jg(t)){if(t=Ha.current,t!==null&&((Ze&4194048)===Ze?cn!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||t!==cn))throw to=Rc,sf;e.flags|=8192}}function Vl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Mt():536870912,e.lanes|=t,ys|=t)}function po(e,t){if(!at)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var d=e.child;d!==null;)n|=d.lanes|d.childLanes,s|=d.subtreeFlags&65011712,s|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)n|=d.lanes|d.childLanes,s|=d.subtreeFlags,s|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function zv(e,t,n){var s=t.pendingProps;switch(xc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(t),null;case 1:return Lt(t),null;case 3:return n=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),kn(Xt),Et(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hs(t)?On(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ef())),Lt(t),null;case 26:return n=t.memoizedState,e===null?(On(t),n!==null?(Lt(t),Sh(t,n)):(Lt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(On(t),Lt(t),Sh(t,n)):(Lt(t),t.flags&=-16777217):(e.memoizedProps!==s&&On(t),Lt(t),t.flags&=-16777217),null;case 27:ht(t),n=Ee.current;var d=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==s&&On(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Lt(t),null}e=le.current,Hs(t)?Qp(t):(e=Sg(d,s,n),t.stateNode=e,On(t))}return Lt(t),null;case 5:if(ht(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&On(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Lt(t),null}if(e=le.current,Hs(t))Qp(t);else{switch(d=ri(Ee.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?d.createElement("select",{is:s.is}):d.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?d.createElement(n,{is:s.is}):d.createElement(n)}}e[Tt]=t,e[We]=s;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=e;e:switch(oa(e,n,s),n){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&On(t)}}return Lt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&On(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(l(166));if(e=Ee.current,Hs(t)){if(e=t.stateNode,n=t.memoizedProps,s=null,d=ma,d!==null)switch(d.tag){case 27:case 5:s=d.memoizedProps}e[Tt]=t,e=!!(e.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||mg(e.nodeValue,n)),e||Cr(t)}else e=ri(e).createTextNode(s),e[Tt]=t,t.stateNode=e}return Lt(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Hs(t),s!==null&&s.dehydrated!==null){if(e===null){if(!d)throw Error(l(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(l(317));d[Tt]=t}else Ks(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Lt(t),d=!1}else d=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(jn(t),t):(jn(t),null)}if(jn(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=s!==null,e=e!==null&&e.memoizedState!==null,n){s=t.child,d=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(d=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==d&&(s.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Vl(t,t.updateQueue),Lt(t),null;case 4:return Et(),e===null&&_d(t.stateNode.containerInfo),Lt(t),null;case 10:return kn(t.type),Lt(t),null;case 19:if($(Gt),d=t.memoizedState,d===null)return Lt(t),null;if(s=(t.flags&128)!==0,f=d.rendering,f===null)if(s)po(d,!1);else{if(Pt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Ul(e),f!==null){for(t.flags|=128,po(d,!1),e=f.updateQueue,t.updateQueue=e,Vl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Wp(n,e),n=n.sibling;return G(Gt,Gt.current&1|2),t.child}e=e.sibling}d.tail!==null&&pe()>Hl&&(t.flags|=128,s=!0,po(d,!1),t.lanes=4194304)}else{if(!s)if(e=Ul(f),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,Vl(t,e),po(d,!0),d.tail===null&&d.tailMode==="hidden"&&!f.alternate&&!at)return Lt(t),null}else 2*pe()-d.renderingStartTime>Hl&&n!==536870912&&(t.flags|=128,s=!0,po(d,!1),t.lanes=4194304);d.isBackwards?(f.sibling=t.child,t.child=f):(e=d.last,e!==null?e.sibling=f:t.child=f,d.last=f)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=pe(),t.sibling=null,e=Gt.current,G(Gt,s?e&1|2:e&1),t):(Lt(t),null);case 22:case 23:return jn(t),qc(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(n&536870912)!==0&&(t.flags&128)===0&&(Lt(t),t.subtreeFlags&6&&(t.flags|=8192)):Lt(t),n=t.updateQueue,n!==null&&Vl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==n&&(t.flags|=2048),e!==null&&$(Rr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),kn(Xt),Lt(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Yv(e,t){switch(xc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kn(Xt),Et(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ht(t),null;case 13:if(jn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Ks()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(Gt),null;case 4:return Et(),null;case 10:return kn(t.type),null;case 22:case 23:return jn(t),qc(),e!==null&&$(Rr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kn(Xt),null;case 25:return null;default:return null}}function Th(e,t){switch(xc(t),t.tag){case 3:kn(Xt),Et();break;case 26:case 27:case 5:ht(t);break;case 4:Et();break;case 13:jn(t);break;case 19:$(Gt);break;case 10:kn(t.type);break;case 22:case 23:jn(t),qc(),e!==null&&$(Rr);break;case 24:kn(Xt)}}function fo(e,t){try{var n=t.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var d=s.next;n=d;do{if((n.tag&e)===e){s=void 0;var f=n.create,v=n.inst;s=f(),v.destroy=s}n=n.next}while(n!==d)}}catch(T){ft(t,t.return,T)}}function Zn(e,t,n){try{var s=t.updateQueue,d=s!==null?s.lastEffect:null;if(d!==null){var f=d.next;s=f;do{if((s.tag&e)===e){var v=s.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,d=t;var O=n,X=T;try{X()}catch(ae){ft(d,O,ae)}}}s=s.next}while(s!==f)}}catch(ae){ft(t,t.return,ae)}}function Ah(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{pf(t,n)}catch(s){ft(e,e.return,s)}}}function Dh(e,t,n){n.props=Lr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(s){ft(e,t,s)}}function ho(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof n=="function"?e.refCleanup=n(s):n.current=s}}catch(d){ft(e,t,d)}}function dn(e,t){var n=e.ref,s=e.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(d){ft(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(d){ft(e,t,d)}else n.current=null}function Ch(e){var t=e.type,n=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(d){ft(e,e.return,d)}}function dd(e,t,n){try{var s=e.stateNode;u0(s,e.type,n,t),s[We]=t}catch(d){ft(e,e.return,d)}}function Nh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sr(e.type)||e.tag===4}function ud(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sr(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pd(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ni));else if(s!==4&&(s===27&&sr(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(pd(e,t,n),e=e.sibling;e!==null;)pd(e,t,n),e=e.sibling}function Xl(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(s===27&&sr(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function kh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var s=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);oa(t,s,n),t[Tt]=e,t[We]=n}catch(f){ft(e,e.return,f)}}var _n=!1,Bt=!1,fd=!1,Rh=typeof WeakSet=="function"?WeakSet:Set,Jt=null;function Vv(e,t){if(e=e.containerInfo,Id=di,e=Up(e),uc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var d=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{n.nodeType,f.nodeType}catch{n=null;break e}var v=0,T=-1,O=-1,X=0,ae=0,se=e,K=null;t:for(;;){for(var W;se!==n||d!==0&&se.nodeType!==3||(T=v+d),se!==f||s!==0&&se.nodeType!==3||(O=v+s),se.nodeType===3&&(v+=se.nodeValue.length),(W=se.firstChild)!==null;)K=se,se=W;for(;;){if(se===e)break t;if(K===n&&++X===d&&(T=v),K===f&&++ae===s&&(O=v),(W=se.nextSibling)!==null)break;se=K,K=se.parentNode}se=W}n=T===-1||O===-1?null:{start:T,end:O}}else n=null}n=n||{start:0,end:0}}else n=null;for(Md={focusedElem:e,selectionRange:n},di=!1,Jt=t;Jt!==null;)if(t=Jt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Jt=e;else for(;Jt!==null;){switch(t=Jt,f=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,n=t,d=f.memoizedProps,f=f.memoizedState,s=n.stateNode;try{var Oe=Lr(n.type,d,n.elementType===n.type);e=s.getSnapshotBeforeUpdate(Oe,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ke){ft(n,n.return,ke)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Bd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Jt=e;break}Jt=t.return}}function jh(e,t,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:Qn(e,n),s&4&&fo(5,n);break;case 1:if(Qn(e,n),s&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(v){ft(n,n.return,v)}else{var d=Lr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){ft(n,n.return,v)}}s&64&&Ah(n),s&512&&ho(n,n.return);break;case 3:if(Qn(e,n),s&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{pf(e,t)}catch(v){ft(n,n.return,v)}}break;case 27:t===null&&s&4&&kh(n);case 26:case 5:Qn(e,n),t===null&&s&4&&Ch(n),s&512&&ho(n,n.return);break;case 12:Qn(e,n);break;case 13:Qn(e,n),s&4&&_h(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=e0.bind(null,n),b0(e,n))));break;case 22:if(s=n.memoizedState!==null||_n,!s){t=t!==null&&t.memoizedState!==null||Bt,d=_n;var f=Bt;_n=s,(Bt=t)&&!f?Jn(e,n,(n.subtreeFlags&8772)!==0):Qn(e,n),_n=d,Bt=f}break;case 30:break;default:Qn(e,n)}}function Lh(e){var t=e.alternate;t!==null&&(e.alternate=null,Lh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ve(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Nt=null,Ta=!1;function Pn(e,t,n){for(n=n.child;n!==null;)Oh(e,t,n),n=n.sibling}function Oh(e,t,n){if(ye&&typeof ye.onCommitFiberUnmount=="function")try{ye.onCommitFiberUnmount(jt,n)}catch{}switch(n.tag){case 26:Bt||dn(n,t),Pn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Bt||dn(n,t);var s=Nt,d=Ta;sr(n.type)&&(Nt=n.stateNode,Ta=!1),Pn(e,t,n),So(n.stateNode),Nt=s,Ta=d;break;case 5:Bt||dn(n,t);case 6:if(s=Nt,d=Ta,Nt=null,Pn(e,t,n),Nt=s,Ta=d,Nt!==null)if(Ta)try{(Nt.nodeType===9?Nt.body:Nt.nodeName==="HTML"?Nt.ownerDocument.body:Nt).removeChild(n.stateNode)}catch(f){ft(n,t,f)}else try{Nt.removeChild(n.stateNode)}catch(f){ft(n,t,f)}break;case 18:Nt!==null&&(Ta?(e=Nt,wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),jo(e)):wg(Nt,n.stateNode));break;case 4:s=Nt,d=Ta,Nt=n.stateNode.containerInfo,Ta=!0,Pn(e,t,n),Nt=s,Ta=d;break;case 0:case 11:case 14:case 15:Bt||Zn(2,n,t),Bt||Zn(4,n,t),Pn(e,t,n);break;case 1:Bt||(dn(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"&&Dh(n,t,s)),Pn(e,t,n);break;case 21:Pn(e,t,n);break;case 22:Bt=(s=Bt)||n.memoizedState!==null,Pn(e,t,n),Bt=s;break;default:Pn(e,t,n)}}function _h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jo(e)}catch(n){ft(t,t.return,n)}}function Xv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rh),t;default:throw Error(l(435,e.tag))}}function hd(e,t){var n=Xv(e);t.forEach(function(s){var d=t0.bind(null,e,s);n.has(s)||(n.add(s),s.then(d,d))})}function La(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var d=n[s],f=e,v=t,T=v;e:for(;T!==null;){switch(T.tag){case 27:if(sr(T.type)){Nt=T.stateNode,Ta=!1;break e}break;case 5:Nt=T.stateNode,Ta=!1;break e;case 3:case 4:Nt=T.stateNode.containerInfo,Ta=!0;break e}T=T.return}if(Nt===null)throw Error(l(160));Oh(f,v,d),Nt=null,Ta=!1,f=d.alternate,f!==null&&(f.return=null),d.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Ph(t,e),t=t.sibling}var en=null;function Ph(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:La(t,e),Oa(e),s&4&&(Zn(3,e,e.return),fo(3,e),Zn(5,e,e.return));break;case 1:La(t,e),Oa(e),s&512&&(Bt||n===null||dn(n,n.return)),s&64&&_n&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var d=en;if(La(t,e),Oa(e),s&512&&(Bt||n===null||dn(n,n.return)),s&4){var f=n!==null?n.memoizedState:null;if(s=e.memoizedState,n===null)if(s===null)if(e.stateNode===null){e:{s=e.type,n=e.memoizedProps,d=d.ownerDocument||d;t:switch(s){case"title":f=d.getElementsByTagName("title")[0],(!f||f[te]||f[Tt]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=d.createElement(s),d.head.insertBefore(f,d.querySelector("head > title"))),oa(f,s,n),f[Tt]=e,Ge(f),s=f;break e;case"link":var v=kg("link","href",d).get(s+(n.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&f.getAttribute("rel")===(n.rel==null?null:n.rel)&&f.getAttribute("title")===(n.title==null?null:n.title)&&f.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){v.splice(T,1);break t}}f=d.createElement(s),oa(f,s,n),d.head.appendChild(f);break;case"meta":if(v=kg("meta","content",d).get(s+(n.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(n.content==null?null:""+n.content)&&f.getAttribute("name")===(n.name==null?null:n.name)&&f.getAttribute("property")===(n.property==null?null:n.property)&&f.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&f.getAttribute("charset")===(n.charSet==null?null:n.charSet)){v.splice(T,1);break t}}f=d.createElement(s),oa(f,s,n),d.head.appendChild(f);break;default:throw Error(l(468,s))}f[Tt]=e,Ge(f),s=f}e.stateNode=s}else Rg(d,e.type,e.stateNode);else e.stateNode=Ng(d,s,e.memoizedProps);else f!==s?(f===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):f.count--,s===null?Rg(d,e.type,e.stateNode):Ng(d,s,e.memoizedProps)):s===null&&e.stateNode!==null&&dd(e,e.memoizedProps,n.memoizedProps)}break;case 27:La(t,e),Oa(e),s&512&&(Bt||n===null||dn(n,n.return)),n!==null&&s&4&&dd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(La(t,e),Oa(e),s&512&&(Bt||n===null||dn(n,n.return)),e.flags&32){d=e.stateNode;try{Kr(d,"")}catch(W){ft(e,e.return,W)}}s&4&&e.stateNode!=null&&(d=e.memoizedProps,dd(e,d,n!==null?n.memoizedProps:d)),s&1024&&(fd=!0);break;case 6:if(La(t,e),Oa(e),s&4){if(e.stateNode===null)throw Error(l(162));s=e.memoizedProps,n=e.stateNode;try{n.nodeValue=s}catch(W){ft(e,e.return,W)}}break;case 3:if(li=null,d=en,en=si(t.containerInfo),La(t,e),en=d,Oa(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{jo(t.containerInfo)}catch(W){ft(e,e.return,W)}fd&&(fd=!1,qh(e));break;case 4:s=en,en=si(e.stateNode.containerInfo),La(t,e),Oa(e),en=s;break;case 12:La(t,e),Oa(e);break;case 13:La(t,e),Oa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ed=pe()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hd(e,s)));break;case 22:d=e.memoizedState!==null;var O=n!==null&&n.memoizedState!==null,X=_n,ae=Bt;if(_n=X||d,Bt=ae||O,La(t,e),Bt=ae,_n=X,Oa(e),s&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(n===null||O||_n||Bt||Or(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){O=n=t;try{if(f=O.stateNode,d)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=O.stateNode;var se=O.memoizedProps.style,K=se!=null&&se.hasOwnProperty("display")?se.display:null;T.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(W){ft(O,O.return,W)}}}else if(t.tag===6){if(n===null){O=t;try{O.stateNode.nodeValue=d?"":O.memoizedProps}catch(W){ft(O,O.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,hd(e,n))));break;case 19:La(t,e),Oa(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,hd(e,s)));break;case 30:break;case 21:break;default:La(t,e),Oa(e)}}function Oa(e){var t=e.flags;if(t&2){try{for(var n,s=e.return;s!==null;){if(Nh(s)){n=s;break}s=s.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var d=n.stateNode,f=ud(e);Xl(e,f,d);break;case 5:var v=n.stateNode;n.flags&32&&(Kr(v,""),n.flags&=-33);var T=ud(e);Xl(e,T,v);break;case 3:case 4:var O=n.stateNode.containerInfo,X=ud(e);pd(e,X,O);break;default:throw Error(l(161))}}catch(ae){ft(e,e.return,ae)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function qh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;qh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jh(e,t.alternate,t),t=t.sibling}function Or(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Zn(4,t,t.return),Or(t);break;case 1:dn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Dh(t,t.return,n),Or(t);break;case 27:So(t.stateNode);case 26:case 5:dn(t,t.return),Or(t);break;case 22:t.memoizedState===null&&Or(t);break;case 30:Or(t);break;default:Or(t)}e=e.sibling}}function Jn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,d=e,f=t,v=f.flags;switch(f.tag){case 0:case 11:case 15:Jn(d,f,n),fo(4,f);break;case 1:if(Jn(d,f,n),s=f,d=s.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(X){ft(s,s.return,X)}if(s=f,d=s.updateQueue,d!==null){var T=s.stateNode;try{var O=d.shared.hiddenCallbacks;if(O!==null)for(d.shared.hiddenCallbacks=null,d=0;d<O.length;d++)uf(O[d],T)}catch(X){ft(s,s.return,X)}}n&&v&64&&Ah(f),ho(f,f.return);break;case 27:kh(f);case 26:case 5:Jn(d,f,n),n&&s===null&&v&4&&Ch(f),ho(f,f.return);break;case 12:Jn(d,f,n);break;case 13:Jn(d,f,n),n&&v&4&&_h(d,f);break;case 22:f.memoizedState===null&&Jn(d,f,n),ho(f,f.return);break;case 30:break;default:Jn(d,f,n)}t=t.sibling}}function gd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Qs(n))}function md(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qs(e))}function un(e,t,n,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ih(e,t,n,s),t=t.sibling}function Ih(e,t,n,s){var d=t.flags;switch(t.tag){case 0:case 11:case 15:un(e,t,n,s),d&2048&&fo(9,t);break;case 1:un(e,t,n,s);break;case 3:un(e,t,n,s),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qs(e)));break;case 12:if(d&2048){un(e,t,n,s),e=t.stateNode;try{var f=t.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){ft(t,t.return,O)}}else un(e,t,n,s);break;case 13:un(e,t,n,s);break;case 23:break;case 22:f=t.stateNode,v=t.alternate,t.memoizedState!==null?f._visibility&2?un(e,t,n,s):go(e,t):f._visibility&2?un(e,t,n,s):(f._visibility|=2,hs(e,t,n,s,(t.subtreeFlags&10256)!==0)),d&2048&&gd(v,t);break;case 24:un(e,t,n,s),d&2048&&md(t.alternate,t);break;default:un(e,t,n,s)}}function hs(e,t,n,s,d){for(d=d&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var f=e,v=t,T=n,O=s,X=v.flags;switch(v.tag){case 0:case 11:case 15:hs(f,v,T,O,d),fo(8,v);break;case 23:break;case 22:var ae=v.stateNode;v.memoizedState!==null?ae._visibility&2?hs(f,v,T,O,d):go(f,v):(ae._visibility|=2,hs(f,v,T,O,d)),d&&X&2048&&gd(v.alternate,v);break;case 24:hs(f,v,T,O,d),d&&X&2048&&md(v.alternate,v);break;default:hs(f,v,T,O,d)}t=t.sibling}}function go(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,s=t,d=s.flags;switch(s.tag){case 22:go(n,s),d&2048&&gd(s.alternate,s);break;case 24:go(n,s),d&2048&&md(s.alternate,s);break;default:go(n,s)}t=t.sibling}}var mo=8192;function gs(e){if(e.subtreeFlags&mo)for(e=e.child;e!==null;)Mh(e),e=e.sibling}function Mh(e){switch(e.tag){case 26:gs(e),e.flags&mo&&e.memoizedState!==null&&j0(en,e.memoizedState,e.memoizedProps);break;case 5:gs(e);break;case 3:case 4:var t=en;en=si(e.stateNode.containerInfo),gs(e),en=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=mo,mo=16777216,gs(e),mo=t):gs(e));break;default:gs(e)}}function $h(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function yo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];Jt=s,Bh(s,e)}$h(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uh(e),e=e.sibling}function Uh(e){switch(e.tag){case 0:case 11:case 15:yo(e),e.flags&2048&&Zn(9,e,e.return);break;case 3:yo(e);break;case 12:yo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Gl(e)):yo(e);break;default:yo(e)}}function Gl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];Jt=s,Bh(s,e)}$h(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Zn(8,t,t.return),Gl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Gl(t));break;default:Gl(t)}e=e.sibling}}function Bh(e,t){for(;Jt!==null;){var n=Jt;switch(n.tag){case 0:case 11:case 15:Zn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Qs(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,Jt=s;else e:for(n=e;Jt!==null;){s=Jt;var d=s.sibling,f=s.return;if(Lh(s),s===n){Jt=null;break e}if(d!==null){d.return=f,Jt=d;break e}Jt=f}}}var Gv={getCacheForType:function(e){var t=fa(Xt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Hv=typeof WeakMap=="function"?WeakMap:Map,st=0,bt=null,Ye=null,Ze=0,ot=0,_a=null,er=!1,ms=!1,yd=!1,qn=0,Pt=0,tr=0,_r=0,bd=0,Ka=0,ys=0,bo=null,Aa=null,vd=!1,Ed=0,Hl=1/0,Kl=null,ar=null,sa=0,nr=null,bs=null,vs=0,wd=0,xd=null,Fh=null,vo=0,Sd=null;function Pa(){if((st&2)!==0&&Ze!==0)return Ze&-Ze;if(Y.T!==null){var e=os;return e!==0?e:Rd()}return En()}function zh(){Ka===0&&(Ka=(Ze&536870912)===0||at?Ot():536870912);var e=Ha.current;return e!==null&&(e.flags|=32),Ka}function qa(e,t,n){(e===bt&&(ot===2||ot===9)||e.cancelPendingCommit!==null)&&(Es(e,0),rr(e,Ze,Ka,!1)),Na(e,n),((st&2)===0||e!==bt)&&(e===bt&&((st&2)===0&&(_r|=n),Pt===4&&rr(e,Ze,Ka,!1)),pn(e))}function Yh(e,t,n){if((st&6)!==0)throw Error(l(327));var s=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Ca(e,t),d=s?Zv(e,t):Dd(e,t,!0),f=s;do{if(d===0){ms&&!s&&rr(e,t,0,!1);break}else{if(n=e.current.alternate,f&&!Kv(n)){d=Dd(e,t,!1),f=!1;continue}if(d===2){if(f=t,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){t=v;e:{var T=e;d=bo;var O=T.current.memoizedState.isDehydrated;if(O&&(Es(T,v).flags|=256),v=Dd(T,v,!1),v!==2){if(yd&&!O){T.errorRecoveryDisabledLanes|=f,_r|=f,d=4;break e}f=Aa,Aa=d,f!==null&&(Aa===null?Aa=f:Aa.push.apply(Aa,f))}d=v}if(f=!1,d!==2)continue}}if(d===1){Es(e,0),rr(e,t,0,!0);break}e:{switch(s=e,f=d,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:rr(s,t,Ka,!er);break e;case 2:Aa=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(d=Ed+300-pe(),10<d)){if(rr(s,t,Ka,!er),It(s,0,!0)!==0)break e;s.timeoutHandle=vg(Vh.bind(null,s,n,Aa,Kl,vd,t,Ka,_r,ys,er,f,2,-0,0),d);break e}Vh(s,n,Aa,Kl,vd,t,Ka,_r,ys,er,f,0,-0,0)}}break}while(!0);pn(e)}function Vh(e,t,n,s,d,f,v,T,O,X,ae,se,K,W){if(e.timeoutHandle=-1,se=t.subtreeFlags,(se&8192||(se&16785408)===16785408)&&(Do={stylesheets:null,count:0,unsuspend:R0},Mh(t),se=L0(),se!==null)){e.cancelPendingCommit=se(Qh.bind(null,e,t,f,n,s,d,v,T,O,ae,1,K,W)),rr(e,f,v,!X);return}Qh(e,t,f,n,s,d,v,T,O)}function Kv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var d=n[s],f=d.getSnapshot;d=d.value;try{if(!Ra(f(),d))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rr(e,t,n,s){t&=~bd,t&=~_r,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var d=t;0<d;){var f=31-nt(d),v=1<<f;s[f]=-1,d&=~v}n!==0&&on(e,n,t)}function Wl(){return(st&6)===0?(Eo(0),!1):!0}function Td(){if(Ye!==null){if(ot===0)var e=Ye.return;else e=Ye,Nn=Nr=null,Bc(e),ps=null,co=0,e=Ye;for(;e!==null;)Th(e.alternate,e),e=e.return;Ye=null}}function Es(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,f0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Td(),bt=e,Ye=n=An(e.current,null),Ze=t,ot=0,_a=null,er=!1,ms=Ca(e,t),yd=!1,ys=Ka=bd=_r=tr=Pt=0,Aa=bo=null,vd=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var d=31-nt(s),f=1<<d;t|=e[d],s&=~f}return qn=t,bl(),n}function Xh(e,t){Be=null,Y.H=Il,t===eo||t===Cl?(t=cf(),ot=3):t===sf?(t=cf(),ot=4):ot=t===dh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,_a=t,Ye===null&&(Pt=1,Fl(e,Ya(t,e.current)))}function Gh(){var e=Y.H;return Y.H=Il,e===null?Il:e}function Hh(){var e=Y.A;return Y.A=Gv,e}function Ad(){Pt=4,er||(Ze&4194048)!==Ze&&Ha.current!==null||(ms=!0),(tr&134217727)===0&&(_r&134217727)===0||bt===null||rr(bt,Ze,Ka,!1)}function Dd(e,t,n){var s=st;st|=2;var d=Gh(),f=Hh();(bt!==e||Ze!==t)&&(Kl=null,Es(e,t)),t=!1;var v=Pt;e:do try{if(ot!==0&&Ye!==null){var T=Ye,O=_a;switch(ot){case 8:Td(),v=6;break e;case 3:case 2:case 9:case 6:Ha.current===null&&(t=!0);var X=ot;if(ot=0,_a=null,ws(e,T,O,X),n&&ms){v=0;break e}break;default:X=ot,ot=0,_a=null,ws(e,T,O,X)}}Wv(),v=Pt;break}catch(ae){Xh(e,ae)}while(!0);return t&&e.shellSuspendCounter++,Nn=Nr=null,st=s,Y.H=d,Y.A=f,Ye===null&&(bt=null,Ze=0,bl()),v}function Wv(){for(;Ye!==null;)Kh(Ye)}function Zv(e,t){var n=st;st|=2;var s=Gh(),d=Hh();bt!==e||Ze!==t?(Kl=null,Hl=pe()+500,Es(e,t)):ms=Ca(e,t);e:do try{if(ot!==0&&Ye!==null){t=Ye;var f=_a;t:switch(ot){case 1:ot=0,_a=null,ws(e,t,f,1);break;case 2:case 9:if(of(f)){ot=0,_a=null,Wh(t);break}t=function(){ot!==2&&ot!==9||bt!==e||(ot=7),pn(e)},f.then(t,t);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:of(f)?(ot=0,_a=null,Wh(t)):(ot=0,_a=null,ws(e,t,f,7));break;case 5:var v=null;switch(Ye.tag){case 26:v=Ye.memoizedState;case 5:case 27:var T=Ye;if(!v||jg(v)){ot=0,_a=null;var O=T.sibling;if(O!==null)Ye=O;else{var X=T.return;X!==null?(Ye=X,Zl(X)):Ye=null}break t}}ot=0,_a=null,ws(e,t,f,5);break;case 6:ot=0,_a=null,ws(e,t,f,6);break;case 8:Td(),Pt=6;break e;default:throw Error(l(462))}}Qv();break}catch(ae){Xh(e,ae)}while(!0);return Nn=Nr=null,Y.H=s,Y.A=d,st=n,Ye!==null?0:(bt=null,Ze=0,bl(),Pt)}function Qv(){for(;Ye!==null&&!U();)Kh(Ye)}function Kh(e){var t=xh(e.alternate,e,qn);e.memoizedProps=e.pendingProps,t===null?Zl(e):Ye=t}function Wh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mh(n,t,t.pendingProps,t.type,void 0,Ze);break;case 11:t=mh(n,t,t.pendingProps,t.type.render,t.ref,Ze);break;case 5:Bc(t);default:Th(n,t),t=Ye=Wp(t,qn),t=xh(n,t,qn)}e.memoizedProps=e.pendingProps,t===null?Zl(e):Ye=t}function ws(e,t,n,s){Nn=Nr=null,Bc(t),ps=null,co=0;var d=t.return;try{if(Bv(e,d,t,n,Ze)){Pt=1,Fl(e,Ya(n,e.current)),Ye=null;return}}catch(f){if(d!==null)throw Ye=d,f;Pt=1,Fl(e,Ya(n,e.current)),Ye=null;return}t.flags&32768?(at||s===1?e=!0:ms||(Ze&536870912)!==0?e=!1:(er=e=!0,(s===2||s===9||s===3||s===6)&&(s=Ha.current,s!==null&&s.tag===13&&(s.flags|=16384))),Zh(t,e)):Zl(t)}function Zl(e){var t=e;do{if((t.flags&32768)!==0){Zh(t,er);return}e=t.return;var n=zv(t.alternate,t,qn);if(n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Pt===0&&(Pt=5)}function Zh(e,t){do{var n=Yv(e.alternate,e);if(n!==null){n.flags&=32767,Ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ye=e;return}Ye=e=n}while(e!==null);Pt=6,Ye=null}function Qh(e,t,n,s,d,f,v,T,O){e.cancelPendingCommit=null;do Ql();while(sa!==0);if((st&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=mc,na(e,n,f,v,T,O),e===bt&&(Ye=bt=null,Ze=0),bs=t,nr=e,vs=n,wd=f,xd=d,Fh=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,a0(me,function(){return ng(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=Y.T,Y.T=null,d=Q.p,Q.p=2,v=st,st|=4;try{Vv(e,t,n)}finally{st=v,Q.p=d,Y.T=s}}sa=1,Jh(),eg(),tg()}}function Jh(){if(sa===1){sa=0;var e=nr,t=bs,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=Y.T,Y.T=null;var s=Q.p;Q.p=2;var d=st;st|=4;try{Ph(t,e);var f=Md,v=Up(e.containerInfo),T=f.focusedElem,O=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&$p(T.ownerDocument.documentElement,T)){if(O!==null&&uc(T)){var X=O.start,ae=O.end;if(ae===void 0&&(ae=X),"selectionStart"in T)T.selectionStart=X,T.selectionEnd=Math.min(ae,T.value.length);else{var se=T.ownerDocument||document,K=se&&se.defaultView||window;if(K.getSelection){var W=K.getSelection(),Oe=T.textContent.length,ke=Math.min(O.start,Oe),ut=O.end===void 0?ke:Math.min(O.end,Oe);!W.extend&&ke>ut&&(v=ut,ut=ke,ke=v);var z=Mp(T,ke),M=Mp(T,ut);if(z&&M&&(W.rangeCount!==1||W.anchorNode!==z.node||W.anchorOffset!==z.offset||W.focusNode!==M.node||W.focusOffset!==M.offset)){var V=se.createRange();V.setStart(z.node,z.offset),W.removeAllRanges(),ke>ut?(W.addRange(V),W.extend(M.node,M.offset)):(V.setEnd(M.node,M.offset),W.addRange(V))}}}}for(se=[],W=T;W=W.parentNode;)W.nodeType===1&&se.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<se.length;T++){var ne=se[T];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}di=!!Id,Md=Id=null}finally{st=d,Q.p=s,Y.T=n}}e.current=t,sa=2}}function eg(){if(sa===2){sa=0;var e=nr,t=bs,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=Y.T,Y.T=null;var s=Q.p;Q.p=2;var d=st;st|=4;try{jh(e,t.alternate,t)}finally{st=d,Q.p=s,Y.T=n}}sa=3}}function tg(){if(sa===4||sa===3){sa=0,ie();var e=nr,t=bs,n=vs,s=Fh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?sa=5:(sa=0,bs=nr=null,ag(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(ar=null),ka(n),t=t.stateNode,ye&&typeof ye.onCommitFiberRoot=="function")try{ye.onCommitFiberRoot(jt,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=Y.T,d=Q.p,Q.p=2,Y.T=null;try{for(var f=e.onRecoverableError,v=0;v<s.length;v++){var T=s[v];f(T.value,{componentStack:T.stack})}}finally{Y.T=t,Q.p=d}}(vs&3)!==0&&Ql(),pn(e),d=e.pendingLanes,(n&4194090)!==0&&(d&42)!==0?e===Sd?vo++:(vo=0,Sd=e):vo=0,Eo(0)}}function ag(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Qs(t)))}function Ql(e){return Jh(),eg(),tg(),ng()}function ng(){if(sa!==5)return!1;var e=nr,t=wd;wd=0;var n=ka(vs),s=Y.T,d=Q.p;try{Q.p=32>n?32:n,Y.T=null,n=xd,xd=null;var f=nr,v=vs;if(sa=0,bs=nr=null,vs=0,(st&6)!==0)throw Error(l(331));var T=st;if(st|=4,Uh(f.current),Ih(f,f.current,v,n),st=T,Eo(0,!1),ye&&typeof ye.onPostCommitFiberRoot=="function")try{ye.onPostCommitFiberRoot(jt,f)}catch{}return!0}finally{Q.p=d,Y.T=s,ag(e,t)}}function rg(e,t,n){t=Ya(n,t),t=td(e.stateNode,t,2),e=Gn(e,t,2),e!==null&&(Na(e,2),pn(e))}function ft(e,t,n){if(e.tag===3)rg(e,e,n);else for(;t!==null;){if(t.tag===3){rg(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ar===null||!ar.has(s))){e=Ya(n,e),n=ih(2),s=Gn(t,n,2),s!==null&&(ch(n,s,t,e),Na(s,2),pn(s));break}}t=t.return}}function Cd(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new Hv;var d=new Set;s.set(t,d)}else d=s.get(t),d===void 0&&(d=new Set,s.set(t,d));d.has(n)||(yd=!0,d.add(n),e=Jv.bind(null,e,t,n),t.then(e,e))}function Jv(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,bt===e&&(Ze&n)===n&&(Pt===4||Pt===3&&(Ze&62914560)===Ze&&300>pe()-Ed?(st&2)===0&&Es(e,0):bd|=n,ys===Ze&&(ys=0)),pn(e)}function sg(e,t){t===0&&(t=Mt()),e=as(e,t),e!==null&&(Na(e,t),pn(e))}function e0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sg(e,n)}function t0(e,t){var n=0;switch(e.tag){case 13:var s=e.stateNode,d=e.memoizedState;d!==null&&(n=d.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(t),sg(e,n)}function a0(e,t){return aa(e,t)}var Jl=null,xs=null,Nd=!1,ei=!1,kd=!1,Pr=0;function pn(e){e!==xs&&e.next===null&&(xs===null?Jl=xs=e:xs=xs.next=e),ei=!0,Nd||(Nd=!0,r0())}function Eo(e,t){if(!kd&&ei){kd=!0;do for(var n=!1,s=Jl;s!==null;){if(e!==0){var d=s.pendingLanes;if(d===0)var f=0;else{var v=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-nt(42|e)+1)-1,f&=d&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(n=!0,cg(s,f))}else f=Ze,f=It(s,s===bt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ca(s,f)||(n=!0,cg(s,f));s=s.next}while(n);kd=!1}}function n0(){og()}function og(){ei=Nd=!1;var e=0;Pr!==0&&(p0()&&(e=Pr),Pr=0);for(var t=pe(),n=null,s=Jl;s!==null;){var d=s.next,f=lg(s,t);f===0?(s.next=null,n===null?Jl=d:n.next=d,d===null&&(xs=n)):(n=s,(e!==0||(f&3)!==0)&&(ei=!0)),s=d}Eo(e)}function lg(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,d=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-nt(f),T=1<<v,O=d[v];O===-1?((T&n)===0||(T&s)!==0)&&(d[v]=it(T,t)):O<=t&&(e.expiredLanes|=T),f&=~T}if(t=bt,n=Ze,n=It(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,n===0||e===t&&(ot===2||ot===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Rt(s),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ca(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(s!==null&&Rt(s),ka(n)){case 2:case 8:n=Ce;break;case 32:n=me;break;case 268435456:n=Qe;break;default:n=me}return s=ig.bind(null,e),n=aa(n,s),e.callbackPriority=t,e.callbackNode=n,t}return s!==null&&s!==null&&Rt(s),e.callbackPriority=2,e.callbackNode=null,2}function ig(e,t){if(sa!==0&&sa!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ql()&&e.callbackNode!==n)return null;var s=Ze;return s=It(e,e===bt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(Yh(e,s,t),lg(e,pe()),e.callbackNode!=null&&e.callbackNode===n?ig.bind(null,e):null)}function cg(e,t){if(Ql())return null;Yh(e,t,!0)}function r0(){h0(function(){(st&6)!==0?aa(ce,n0):og()})}function Rd(){return Pr===0&&(Pr=Ot()),Pr}function dg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ul(""+e)}function ug(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function s0(e,t,n,s,d){if(t==="submit"&&n&&n.stateNode===d){var f=dg((d[We]||null).action),v=s.submitter;v&&(t=(t=v[We]||null)?dg(t.formAction):v.getAttribute("formAction"),t!==null&&(f=t,v=null));var T=new gl("action","action",null,s,d);e.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Pr!==0){var O=v?ug(d,v):new FormData(d);Wc(n,{pending:!0,data:O,method:d.method,action:f},null,O)}}else typeof f=="function"&&(T.preventDefault(),O=v?ug(d,v):new FormData(d),Wc(n,{pending:!0,data:O,method:d.method,action:f},f,O))},currentTarget:d}]})}}for(var jd=0;jd<gc.length;jd++){var Ld=gc[jd],o0=Ld.toLowerCase(),l0=Ld[0].toUpperCase()+Ld.slice(1);Ja(o0,"on"+l0)}Ja(zp,"onAnimationEnd"),Ja(Yp,"onAnimationIteration"),Ja(Vp,"onAnimationStart"),Ja("dblclick","onDoubleClick"),Ja("focusin","onFocus"),Ja("focusout","onBlur"),Ja(Tv,"onTransitionRun"),Ja(Av,"onTransitionStart"),Ja(Dv,"onTransitionCancel"),Ja(Xp,"onTransitionEnd"),ga("onMouseEnter",["mouseout","mouseover"]),ga("onMouseLeave",["mouseout","mouseover"]),ga("onPointerEnter",["pointerout","pointerover"]),ga("onPointerLeave",["pointerout","pointerover"]),$t("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$t("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$t("onBeforeInput",["compositionend","keypress","textInput","paste"]),$t("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$t("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wo));function pg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],d=s.event;s=s.listeners;e:{var f=void 0;if(t)for(var v=s.length-1;0<=v;v--){var T=s[v],O=T.instance,X=T.currentTarget;if(T=T.listener,O!==f&&d.isPropagationStopped())break e;f=T,d.currentTarget=X;try{f(d)}catch(ae){Bl(ae)}d.currentTarget=null,f=O}else for(v=0;v<s.length;v++){if(T=s[v],O=T.instance,X=T.currentTarget,T=T.listener,O!==f&&d.isPropagationStopped())break e;f=T,d.currentTarget=X;try{f(d)}catch(ae){Bl(ae)}d.currentTarget=null,f=O}}}}function Ve(e,t){var n=t[Z];n===void 0&&(n=t[Z]=new Set);var s=e+"__bubble";n.has(s)||(fg(t,e,2,!1),n.add(s))}function Od(e,t,n){var s=0;t&&(s|=4),fg(n,e,s,t)}var ti="_reactListening"+Math.random().toString(36).slice(2);function _d(e){if(!e[ti]){e[ti]=!0,pa.forEach(function(n){n!=="selectionchange"&&(i0.has(n)||Od(n,!1,e),Od(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,Od("selectionchange",!1,t))}}function fg(e,t,n,s){switch(Ig(t)){case 2:var d=P0;break;case 8:d=q0;break;default:d=Hd}n=d.bind(null,t,n,e),d=void 0,!ac||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),s?d!==void 0?e.addEventListener(t,n,{capture:!0,passive:d}):e.addEventListener(t,n,!0):d!==void 0?e.addEventListener(t,n,{passive:d}):e.addEventListener(t,n,!1)}function Pd(e,t,n,s,d){var f=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var T=s.stateNode.containerInfo;if(T===d)break;if(v===4)for(v=s.return;v!==null;){var O=v.tag;if((O===3||O===4)&&v.stateNode.containerInfo===d)return;v=v.return}for(;T!==null;){if(v=we(T),v===null)return;if(O=v.tag,O===5||O===6||O===26||O===27){s=f=v;continue e}T=T.parentNode}}s=s.return}vp(function(){var X=f,ae=ec(n),se=[];e:{var K=Gp.get(e);if(K!==void 0){var W=gl,Oe=e;switch(e){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":W=av;break;case"focusin":Oe="focus",W=oc;break;case"focusout":Oe="blur",W=oc;break;case"beforeblur":case"afterblur":W=oc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Yb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=sv;break;case zp:case Yp:case Vp:W=Gb;break;case Xp:W=lv;break;case"scroll":case"scrollend":W=Fb;break;case"wheel":W=cv;break;case"copy":case"cut":case"paste":W=Kb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Tp;break;case"toggle":case"beforetoggle":W=uv}var ke=(t&4)!==0,ut=!ke&&(e==="scroll"||e==="scrollend"),z=ke?K!==null?K+"Capture":null:K;ke=[];for(var M=X,V;M!==null;){var ne=M;if(V=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||V===null||z===null||(ne=$s(M,z),ne!=null&&ke.push(xo(M,ne,V))),ut)break;M=M.return}0<ke.length&&(K=new W(K,Oe,null,n,ae),se.push({event:K,listeners:ke}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",K&&n!==Ji&&(Oe=n.relatedTarget||n.fromElement)&&(we(Oe)||Oe[k]))break e;if((W||K)&&(K=ae.window===ae?ae:(K=ae.ownerDocument)?K.defaultView||K.parentWindow:window,W?(Oe=n.relatedTarget||n.toElement,W=X,Oe=Oe?we(Oe):null,Oe!==null&&(ut=p(Oe),ke=Oe.tag,Oe!==ut||ke!==5&&ke!==27&&ke!==6)&&(Oe=null)):(W=null,Oe=X),W!==Oe)){if(ke=xp,ne="onMouseLeave",z="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ke=Tp,ne="onPointerLeave",z="onPointerEnter",M="pointer"),ut=W==null?K:Pe(W),V=Oe==null?K:Pe(Oe),K=new ke(ne,M+"leave",W,n,ae),K.target=ut,K.relatedTarget=V,ne=null,we(ae)===X&&(ke=new ke(z,M+"enter",Oe,n,ae),ke.target=V,ke.relatedTarget=ut,ne=ke),ut=ne,W&&Oe)t:{for(ke=W,z=Oe,M=0,V=ke;V;V=Ss(V))M++;for(V=0,ne=z;ne;ne=Ss(ne))V++;for(;0<M-V;)ke=Ss(ke),M--;for(;0<V-M;)z=Ss(z),V--;for(;M--;){if(ke===z||z!==null&&ke===z.alternate)break t;ke=Ss(ke),z=Ss(z)}ke=null}else ke=null;W!==null&&hg(se,K,W,ke,!1),Oe!==null&&ut!==null&&hg(se,ut,Oe,ke,!0)}}e:{if(K=X?Pe(X):window,W=K.nodeName&&K.nodeName.toLowerCase(),W==="select"||W==="input"&&K.type==="file")var Se=Lp;else if(Rp(K))if(Op)Se=wv;else{Se=vv;var Fe=bv}else W=K.nodeName,!W||W.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?X&&Qi(X.elementType)&&(Se=Lp):Se=Ev;if(Se&&(Se=Se(e,X))){jp(se,Se,n,ae);break e}Fe&&Fe(e,K,X),e==="focusout"&&X&&K.type==="number"&&X.memoizedProps.value!=null&&Zi(K,"number",K.value)}switch(Fe=X?Pe(X):window,e){case"focusin":(Rp(Fe)||Fe.contentEditable==="true")&&(Jr=Fe,pc=X,Gs=null);break;case"focusout":Gs=pc=Jr=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Bp(se,n,ae);break;case"selectionchange":if(Sv)break;case"keydown":case"keyup":Bp(se,n,ae)}var De;if(ic)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else Qr?Np(e,n)&&(je="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(je="onCompositionStart");je&&(Ap&&n.locale!=="ko"&&(Qr||je!=="onCompositionStart"?je==="onCompositionEnd"&&Qr&&(De=Ep()):(zn=ae,nc="value"in zn?zn.value:zn.textContent,Qr=!0)),Fe=ai(X,je),0<Fe.length&&(je=new Sp(je,e,null,n,ae),se.push({event:je,listeners:Fe}),De?je.data=De:(De=kp(n),De!==null&&(je.data=De)))),(De=fv?hv(e,n):gv(e,n))&&(je=ai(X,"onBeforeInput"),0<je.length&&(Fe=new Sp("onBeforeInput","beforeinput",null,n,ae),se.push({event:Fe,listeners:je}),Fe.data=De)),s0(se,e,X,n,ae)}pg(se,t)})}function xo(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ai(e,t){for(var n=t+"Capture",s=[];e!==null;){var d=e,f=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||f===null||(d=$s(e,n),d!=null&&s.unshift(xo(e,d,f)),d=$s(e,t),d!=null&&s.push(xo(e,d,f))),e.tag===3)return s;e=e.return}return[]}function Ss(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hg(e,t,n,s,d){for(var f=t._reactName,v=[];n!==null&&n!==s;){var T=n,O=T.alternate,X=T.stateNode;if(T=T.tag,O!==null&&O===s)break;T!==5&&T!==26&&T!==27||X===null||(O=X,d?(X=$s(n,f),X!=null&&v.unshift(xo(n,X,O))):d||(X=$s(n,f),X!=null&&v.push(xo(n,X,O)))),n=n.return}v.length!==0&&e.push({event:t,listeners:v})}var c0=/\r\n?/g,d0=/\u0000|\uFFFD/g;function gg(e){return(typeof e=="string"?e:""+e).replace(c0,`
`).replace(d0,"")}function mg(e,t){return t=gg(t),gg(e)===t}function ni(){}function dt(e,t,n,s,d,f){switch(n){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||Kr(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&Kr(e,""+s);break;case"className":Gr(e,"class",s);break;case"tabIndex":Gr(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Gr(e,n,s);break;case"style":yp(e,s,f);break;case"data":if(t!=="object"){Gr(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=ul(""+s),e.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(n==="formAction"?(t!=="input"&&dt(e,t,"name",d.name,d,null),dt(e,t,"formEncType",d.formEncType,d,null),dt(e,t,"formMethod",d.formMethod,d,null),dt(e,t,"formTarget",d.formTarget,d,null)):(dt(e,t,"encType",d.encType,d,null),dt(e,t,"method",d.method,d,null),dt(e,t,"target",d.target,d,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=ul(""+s),e.setAttribute(n,s);break;case"onClick":s!=null&&(e.onclick=ni);break;case"onScroll":s!=null&&Ve("scroll",e);break;case"onScrollEnd":s!=null&&Ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(n=s.__html,n!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}n=ul(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""+s):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":s===!0?e.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,s):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(n,s):e.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(n):e.setAttribute(n,s);break;case"popover":Ve("beforetoggle",e),Ve("toggle",e),Xr(e,"popover",s);break;case"xlinkActuate":Ba(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ba(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ba(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ba(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ba(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ba(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ba(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ba(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ba(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Xr(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ub.get(n)||n,Xr(e,n,s))}}function qd(e,t,n,s,d,f){switch(n){case"style":yp(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(n=s.__html,n!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof s=="string"?Kr(e,s):(typeof s=="number"||typeof s=="bigint")&&Kr(e,""+s);break;case"onScroll":s!=null&&Ve("scroll",e);break;case"onScrollEnd":s!=null&&Ve("scrollend",e);break;case"onClick":s!=null&&(e.onclick=ni);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!At.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(d=n.endsWith("Capture"),t=n.slice(2,d?n.length-7:void 0),f=e[We]||null,f=f!=null?f[n]:null,typeof f=="function"&&e.removeEventListener(t,f,d),typeof s=="function")){typeof f!="function"&&f!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,s,d);break e}n in e?e[n]=s:s===!0?e.setAttribute(n,""):Xr(e,n,s)}}}function oa(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",e),Ve("load",e);var s=!1,d=!1,f;for(f in n)if(n.hasOwnProperty(f)){var v=n[f];if(v!=null)switch(f){case"src":s=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:dt(e,t,f,v,n,null)}}d&&dt(e,t,"srcSet",n.srcSet,n,null),s&&dt(e,t,"src",n.src,n,null);return;case"input":Ve("invalid",e);var T=f=v=d=null,O=null,X=null;for(s in n)if(n.hasOwnProperty(s)){var ae=n[s];if(ae!=null)switch(s){case"name":d=ae;break;case"type":v=ae;break;case"checked":O=ae;break;case"defaultChecked":X=ae;break;case"value":f=ae;break;case"defaultValue":T=ae;break;case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(l(137,t));break;default:dt(e,t,s,ae,n,null)}}fp(e,f,T,O,X,v,d,!1),wa(e);return;case"select":Ve("invalid",e),s=v=f=null;for(d in n)if(n.hasOwnProperty(d)&&(T=n[d],T!=null))switch(d){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":s=T;default:dt(e,t,d,T,n,null)}t=f,n=v,e.multiple=!!s,t!=null?Hr(e,!!s,t,!1):n!=null&&Hr(e,!!s,n,!0);return;case"textarea":Ve("invalid",e),f=d=s=null;for(v in n)if(n.hasOwnProperty(v)&&(T=n[v],T!=null))switch(v){case"value":s=T;break;case"defaultValue":d=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(l(91));break;default:dt(e,t,v,T,n,null)}gp(e,s,d,f),wa(e);return;case"option":for(O in n)n.hasOwnProperty(O)&&(s=n[O],s!=null)&&(O==="selected"?e.selected=s&&typeof s!="function"&&typeof s!="symbol":dt(e,t,O,s,n,null));return;case"dialog":Ve("beforetoggle",e),Ve("toggle",e),Ve("cancel",e),Ve("close",e);break;case"iframe":case"object":Ve("load",e);break;case"video":case"audio":for(s=0;s<wo.length;s++)Ve(wo[s],e);break;case"image":Ve("error",e),Ve("load",e);break;case"details":Ve("toggle",e);break;case"embed":case"source":case"link":Ve("error",e),Ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in n)if(n.hasOwnProperty(X)&&(s=n[X],s!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:dt(e,t,X,s,n,null)}return;default:if(Qi(t)){for(ae in n)n.hasOwnProperty(ae)&&(s=n[ae],s!==void 0&&qd(e,t,ae,s,n,void 0));return}}for(T in n)n.hasOwnProperty(T)&&(s=n[T],s!=null&&dt(e,t,T,s,n,null))}function u0(e,t,n,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,f=null,v=null,T=null,O=null,X=null,ae=null;for(W in n){var se=n[W];if(n.hasOwnProperty(W)&&se!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":O=se;default:s.hasOwnProperty(W)||dt(e,t,W,null,s,se)}}for(var K in s){var W=s[K];if(se=n[K],s.hasOwnProperty(K)&&(W!=null||se!=null))switch(K){case"type":f=W;break;case"name":d=W;break;case"checked":X=W;break;case"defaultChecked":ae=W;break;case"value":v=W;break;case"defaultValue":T=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(l(137,t));break;default:W!==se&&dt(e,t,K,W,s,se)}}Wi(e,v,T,O,X,ae,f,d);return;case"select":W=v=T=K=null;for(f in n)if(O=n[f],n.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":W=O;default:s.hasOwnProperty(f)||dt(e,t,f,null,s,O)}for(d in s)if(f=s[d],O=n[d],s.hasOwnProperty(d)&&(f!=null||O!=null))switch(d){case"value":K=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==O&&dt(e,t,d,f,s,O)}t=T,n=v,s=W,K!=null?Hr(e,!!n,K,!1):!!s!=!!n&&(t!=null?Hr(e,!!n,t,!0):Hr(e,!!n,n?[]:"",!1));return;case"textarea":W=K=null;for(T in n)if(d=n[T],n.hasOwnProperty(T)&&d!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:dt(e,t,T,null,s,d)}for(v in s)if(d=s[v],f=n[v],s.hasOwnProperty(v)&&(d!=null||f!=null))switch(v){case"value":K=d;break;case"defaultValue":W=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(l(91));break;default:d!==f&&dt(e,t,v,d,s,f)}hp(e,K,W);return;case"option":for(var Oe in n)K=n[Oe],n.hasOwnProperty(Oe)&&K!=null&&!s.hasOwnProperty(Oe)&&(Oe==="selected"?e.selected=!1:dt(e,t,Oe,null,s,K));for(O in s)K=s[O],W=n[O],s.hasOwnProperty(O)&&K!==W&&(K!=null||W!=null)&&(O==="selected"?e.selected=K&&typeof K!="function"&&typeof K!="symbol":dt(e,t,O,K,s,W));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ke in n)K=n[ke],n.hasOwnProperty(ke)&&K!=null&&!s.hasOwnProperty(ke)&&dt(e,t,ke,null,s,K);for(X in s)if(K=s[X],W=n[X],s.hasOwnProperty(X)&&K!==W&&(K!=null||W!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(l(137,t));break;default:dt(e,t,X,K,s,W)}return;default:if(Qi(t)){for(var ut in n)K=n[ut],n.hasOwnProperty(ut)&&K!==void 0&&!s.hasOwnProperty(ut)&&qd(e,t,ut,void 0,s,K);for(ae in s)K=s[ae],W=n[ae],!s.hasOwnProperty(ae)||K===W||K===void 0&&W===void 0||qd(e,t,ae,K,s,W);return}}for(var z in n)K=n[z],n.hasOwnProperty(z)&&K!=null&&!s.hasOwnProperty(z)&&dt(e,t,z,null,s,K);for(se in s)K=s[se],W=n[se],!s.hasOwnProperty(se)||K===W||K==null&&W==null||dt(e,t,se,K,s,W)}var Id=null,Md=null;function ri(e){return e.nodeType===9?e:e.ownerDocument}function yg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function $d(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ud=null;function p0(){var e=window.event;return e&&e.type==="popstate"?e===Ud?!1:(Ud=e,!0):(Ud=null,!1)}var vg=typeof setTimeout=="function"?setTimeout:void 0,f0=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,h0=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(e){return Eg.resolve(null).then(e).catch(g0)}:vg;function g0(e){setTimeout(function(){throw e})}function sr(e){return e==="head"}function wg(e,t){var n=t,s=0,d=0;do{var f=n.nextSibling;if(e.removeChild(n),f&&f.nodeType===8)if(n=f.data,n==="/$"){if(0<s&&8>s){n=s;var v=e.ownerDocument;if(n&1&&So(v.documentElement),n&2&&So(v.body),n&4)for(n=v.head,So(n),v=n.firstChild;v;){var T=v.nextSibling,O=v.nodeName;v[te]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&v.rel.toLowerCase()==="stylesheet"||n.removeChild(v),v=T}}if(d===0){e.removeChild(f),jo(t);return}d--}else n==="$"||n==="$?"||n==="$!"?d++:s=n.charCodeAt(0)-48;else s=0;n=f}while(n);jo(t)}function Bd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Bd(n),ve(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function m0(e,t,n,s){for(;e.nodeType===1;){var d=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[te])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=tn(e.nextSibling),e===null)break}return null}function y0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=tn(e.nextSibling),e===null))return null;return e}function Fd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function b0(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var s=function(){t(),n.removeEventListener("DOMContentLoaded",s)};n.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function tn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var zd=null;function xg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function Sg(e,t,n){switch(t=ri(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function So(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ve(e)}var Wa=new Map,Tg=new Set;function si(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var In=Q.d;Q.d={f:v0,r:E0,D:w0,C:x0,L:S0,m:T0,X:D0,S:A0,M:C0};function v0(){var e=In.f(),t=Wl();return e||t}function E0(e){var t=Ne(e);t!==null&&t.tag===5&&t.type==="form"?Yf(t):In.r(e)}var Ts=typeof document>"u"?null:document;function Ag(e,t,n){var s=Ts;if(s&&typeof t=="string"&&t){var d=za(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof n=="string"&&(d+='[crossorigin="'+n+'"]'),Tg.has(d)||(Tg.add(d),e={rel:e,crossOrigin:n,href:t},s.querySelector(d)===null&&(t=s.createElement("link"),oa(t,"link",e),Ge(t),s.head.appendChild(t)))}}function w0(e){In.D(e),Ag("dns-prefetch",e,null)}function x0(e,t){In.C(e,t),Ag("preconnect",e,t)}function S0(e,t,n){In.L(e,t,n);var s=Ts;if(s&&e&&t){var d='link[rel="preload"][as="'+za(t)+'"]';t==="image"&&n&&n.imageSrcSet?(d+='[imagesrcset="'+za(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(d+='[imagesizes="'+za(n.imageSizes)+'"]')):d+='[href="'+za(e)+'"]';var f=d;switch(t){case"style":f=As(e);break;case"script":f=Ds(e)}Wa.has(f)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Wa.set(f,e),s.querySelector(d)!==null||t==="style"&&s.querySelector(To(f))||t==="script"&&s.querySelector(Ao(f))||(t=s.createElement("link"),oa(t,"link",e),Ge(t),s.head.appendChild(t)))}}function T0(e,t){In.m(e,t);var n=Ts;if(n&&e){var s=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+za(s)+'"][href="'+za(e)+'"]',f=d;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ds(e)}if(!Wa.has(f)&&(e=y({rel:"modulepreload",href:e},t),Wa.set(f,e),n.querySelector(d)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ao(f)))return}s=n.createElement("link"),oa(s,"link",e),Ge(s),n.head.appendChild(s)}}}function A0(e,t,n){In.S(e,t,n);var s=Ts;if(s&&e){var d=Je(s).hoistableStyles,f=As(e);t=t||"default";var v=d.get(f);if(!v){var T={loading:0,preload:null};if(v=s.querySelector(To(f)))T.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Wa.get(f))&&Yd(e,n);var O=v=s.createElement("link");Ge(O),oa(O,"link",e),O._p=new Promise(function(X,ae){O.onload=X,O.onerror=ae}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,oi(v,t,s)}v={type:"stylesheet",instance:v,count:1,state:T},d.set(f,v)}}}function D0(e,t){In.X(e,t);var n=Ts;if(n&&e){var s=Je(n).hoistableScripts,d=Ds(e),f=s.get(d);f||(f=n.querySelector(Ao(d)),f||(e=y({src:e,async:!0},t),(t=Wa.get(d))&&Vd(e,t),f=n.createElement("script"),Ge(f),oa(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(d,f))}}function C0(e,t){In.M(e,t);var n=Ts;if(n&&e){var s=Je(n).hoistableScripts,d=Ds(e),f=s.get(d);f||(f=n.querySelector(Ao(d)),f||(e=y({src:e,async:!0,type:"module"},t),(t=Wa.get(d))&&Vd(e,t),f=n.createElement("script"),Ge(f),oa(f,"link",e),n.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(d,f))}}function Dg(e,t,n,s){var d=(d=Ee.current)?si(d):null;if(!d)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=As(n.href),n=Je(d).hoistableStyles,s=n.get(t),s||(s={type:"style",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=As(n.href);var f=Je(d).hoistableStyles,v=f.get(e);if(v||(d=d.ownerDocument||d,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=d.querySelector(To(e)))&&!f._p&&(v.instance=f,v.state.loading=5),Wa.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Wa.set(e,n),f||N0(d,e,n,v.state))),t&&s===null)throw Error(l(528,""));return v}if(t&&s!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ds(n),n=Je(d).hoistableScripts,s=n.get(t),s||(s={type:"script",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function As(e){return'href="'+za(e)+'"'}function To(e){return'link[rel="stylesheet"]['+e+"]"}function Cg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function N0(e,t,n,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),oa(t,"link",n),Ge(t),e.head.appendChild(t))}function Ds(e){return'[src="'+za(e)+'"]'}function Ao(e){return"script[async]"+e}function Ng(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+za(n.href)+'"]');if(s)return t.instance=s,Ge(s),s;var d=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Ge(s),oa(s,"style",d),oi(s,n.precedence,e),t.instance=s;case"stylesheet":d=As(n.href);var f=e.querySelector(To(d));if(f)return t.state.loading|=4,t.instance=f,Ge(f),f;s=Cg(n),(d=Wa.get(d))&&Yd(s,d),f=(e.ownerDocument||e).createElement("link"),Ge(f);var v=f;return v._p=new Promise(function(T,O){v.onload=T,v.onerror=O}),oa(f,"link",s),t.state.loading|=4,oi(f,n.precedence,e),t.instance=f;case"script":return f=Ds(n.src),(d=e.querySelector(Ao(f)))?(t.instance=d,Ge(d),d):(s=n,(d=Wa.get(f))&&(s=y({},n),Vd(s,d)),e=e.ownerDocument||e,d=e.createElement("script"),Ge(d),oa(d,"link",s),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,oi(s,n.precedence,e));return t.instance}function oi(e,t,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=s.length?s[s.length-1]:null,f=d,v=0;v<s.length;v++){var T=s[v];if(T.dataset.precedence===t)f=T;else if(f!==d)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Yd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var li=null;function kg(e,t,n){if(li===null){var s=new Map,d=li=new Map;d.set(n,s)}else d=li,s=d.get(n),s||(s=new Map,d.set(n,s));if(s.has(e))return s;for(s.set(e,null),n=n.getElementsByTagName(e),d=0;d<n.length;d++){var f=n[d];if(!(f[te]||f[Tt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(t)||"";v=e+v;var T=s.get(v);T?T.push(f):s.set(v,[f])}}return s}function Rg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function k0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function jg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Do=null;function R0(){}function j0(e,t,n){if(Do===null)throw Error(l(475));var s=Do;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var d=As(n.href),f=e.querySelector(To(d));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=ii.bind(s),e.then(s,s)),t.state.loading|=4,t.instance=f,Ge(f);return}f=e.ownerDocument||e,n=Cg(n),(d=Wa.get(d))&&Yd(n,d),f=f.createElement("link"),Ge(f);var v=f;v._p=new Promise(function(T,O){v.onload=T,v.onerror=O}),oa(f,"link",n),t.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(s.count++,t=ii.bind(s),e.addEventListener("load",t),e.addEventListener("error",t))}}function L0(){if(Do===null)throw Error(l(475));var e=Do;return e.stylesheets&&e.count===0&&Xd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Xd(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ii(){if(this.count--,this.count===0){if(this.stylesheets)Xd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ci=null;function Xd(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ci=new Map,t.forEach(O0,e),ci=null,ii.call(e))}function O0(e,t){if(!(t.state.loading&4)){var n=ci.get(e);if(n)var s=n.get(null);else{n=new Map,ci.set(e,n);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<d.length;f++){var v=d[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(n.set(v.dataset.precedence,v),s=v)}s&&n.set(null,s)}d=t.instance,v=d.getAttribute("data-precedence"),f=n.get(v)||s,f===s&&n.set(null,d),n.set(v,d),this.count++,s=ii.bind(this),d.addEventListener("load",s),d.addEventListener("error",s),f?f.parentNode.insertBefore(d,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var Co={$$typeof:N,Provider:null,Consumer:null,_currentValue:be,_currentValue2:be,_threadCount:0};function _0(e,t,n,s,d,f,v,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.hiddenUpdates=mt(null),this.identifierPrefix=s,this.onUncaughtError=d,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Lg(e,t,n,s,d,f,v,T,O,X,ae,se){return e=new _0(e,t,n,v,T,O,X,se),t=1,f===!0&&(t|=24),f=ja(3,null,null,t),e.current=f,f.stateNode=e,t=Cc(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:s,isDehydrated:n,cache:t},jc(f),e}function Og(e){return e?(e=ns,e):ns}function _g(e,t,n,s,d,f){d=Og(d),s.context===null?s.context=d:s.pendingContext=d,s=Xn(t),s.payload={element:n},f=f===void 0?null:f,f!==null&&(s.callback=f),n=Gn(e,s,t),n!==null&&(qa(n,e,t),ao(n,e,t))}function Pg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gd(e,t){Pg(e,t),(e=e.alternate)&&Pg(e,t)}function qg(e){if(e.tag===13){var t=as(e,67108864);t!==null&&qa(t,e,67108864),Gd(e,67108864)}}var di=!0;function P0(e,t,n,s){var d=Y.T;Y.T=null;var f=Q.p;try{Q.p=2,Hd(e,t,n,s)}finally{Q.p=f,Y.T=d}}function q0(e,t,n,s){var d=Y.T;Y.T=null;var f=Q.p;try{Q.p=8,Hd(e,t,n,s)}finally{Q.p=f,Y.T=d}}function Hd(e,t,n,s){if(di){var d=Kd(s);if(d===null)Pd(e,t,s,ui,n),Mg(e,s);else if(M0(d,e,t,n,s))s.stopPropagation();else if(Mg(e,s),t&4&&-1<I0.indexOf(e)){for(;d!==null;){var f=Ne(d);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Zt(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var O=1<<31-nt(v);T.entanglements[1]|=O,v&=~O}pn(f),(st&6)===0&&(Hl=pe()+500,Eo(0))}}break;case 13:T=as(f,2),T!==null&&qa(T,f,2),Wl(),Gd(f,2)}if(f=Kd(s),f===null&&Pd(e,t,s,ui,n),f===d)break;d=f}d!==null&&s.stopPropagation()}else Pd(e,t,s,null,n)}}function Kd(e){return e=ec(e),Wd(e)}var ui=null;function Wd(e){if(ui=null,e=we(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ui=e,null}function Ig(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(F()){case ce:return 2;case Ce:return 8;case me:case Le:return 32;case Qe:return 268435456;default:return 32}default:return 32}}var Zd=!1,or=null,lr=null,ir=null,No=new Map,ko=new Map,cr=[],I0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mg(e,t){switch(e){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":No.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(t.pointerId)}}function Ro(e,t,n,s,d,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:f,targetContainers:[d]},t!==null&&(t=Ne(t),t!==null&&qg(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function M0(e,t,n,s,d){switch(t){case"focusin":return or=Ro(or,e,t,n,s,d),!0;case"dragenter":return lr=Ro(lr,e,t,n,s,d),!0;case"mouseover":return ir=Ro(ir,e,t,n,s,d),!0;case"pointerover":var f=d.pointerId;return No.set(f,Ro(No.get(f)||null,e,t,n,s,d)),!0;case"gotpointercapture":return f=d.pointerId,ko.set(f,Ro(ko.get(f)||null,e,t,n,s,d)),!0}return!1}function $g(e){var t=we(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,da(e.priority,function(){if(n.tag===13){var s=Pa();s=Bn(s);var d=as(n,s);d!==null&&qa(d,n,s),Gd(n,s)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Kd(e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);Ji=s,n.target.dispatchEvent(s),Ji=null}else return t=Ne(n),t!==null&&qg(t),e.blockedOn=n,!1;t.shift()}return!0}function Ug(e,t,n){pi(e)&&n.delete(t)}function $0(){Zd=!1,or!==null&&pi(or)&&(or=null),lr!==null&&pi(lr)&&(lr=null),ir!==null&&pi(ir)&&(ir=null),No.forEach(Ug),ko.forEach(Ug)}function fi(e,t){e.blockedOn===t&&(e.blockedOn=null,Zd||(Zd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$0)))}var hi=null;function Bg(e){hi!==e&&(hi=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){hi===e&&(hi=null);for(var t=0;t<e.length;t+=3){var n=e[t],s=e[t+1],d=e[t+2];if(typeof s!="function"){if(Wd(s||n)===null)continue;break}var f=Ne(n);f!==null&&(e.splice(t,3),t-=3,Wc(f,{pending:!0,data:d,method:n.method,action:s},s,d))}}))}function jo(e){function t(O){return fi(O,e)}or!==null&&fi(or,e),lr!==null&&fi(lr,e),ir!==null&&fi(ir,e),No.forEach(t),ko.forEach(t);for(var n=0;n<cr.length;n++){var s=cr[n];s.blockedOn===e&&(s.blockedOn=null)}for(;0<cr.length&&(n=cr[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&cr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var d=n[s],f=n[s+1],v=d[We]||null;if(typeof f=="function")v||Bg(n);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(d=f,v=f[We]||null)T=v.formAction;else if(Wd(d)!==null)continue}else T=v.action;typeof T=="function"?n[s+1]=T:(n.splice(s,3),s-=3),Bg(n)}}}function Qd(e){this._internalRoot=e}gi.prototype.render=Qd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,s=Pa();_g(n,s,e,t,null,null)},gi.prototype.unmount=Qd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;_g(e.current,2,null,e,null,null),Wl(),t[k]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=En();e={blockedOn:null,target:e,priority:t};for(var n=0;n<cr.length&&t!==0&&t<cr[n].priority;n++);cr.splice(n,0,e),n===0&&$g(e)}};var Fg=r.version;if(Fg!=="19.1.4")throw Error(l(527,Fg,"19.1.4"));Q.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=m(t),e=e!==null?u(e):null,e=e===null?null:e.stateNode,e};var U0={bundleType:0,version:"19.1.4",rendererPackageName:"react-dom",currentDispatcherRef:Y,reconcilerVersion:"19.1.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mi.isDisabled&&mi.supportsFiber)try{jt=mi.inject(U0),ye=mi}catch{}}return Oo.createRoot=function(e,t){if(!i(e))throw Error(l(299));var n=!1,s="",d=rh,f=sh,v=oh,T=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(T=t.unstable_transitionCallbacks)),t=Lg(e,1,!1,null,null,n,s,d,f,v,T,null),e[k]=t.current,_d(e),new Qd(t)},Oo.hydrateRoot=function(e,t,n){if(!i(e))throw Error(l(299));var s=!1,d="",f=rh,v=sh,T=oh,O=null,X=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(v=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(O=n.unstable_transitionCallbacks),n.formState!==void 0&&(X=n.formState)),t=Lg(e,1,!0,t,n??null,s,d,f,v,T,O,X),t.context=Og(null),n=t.current,s=Pa(),s=Bn(s),d=Xn(s),d.callback=null,Gn(n,d,s),n=s,t.current.lanes=n,Na(t,n),pn(t),e[k]=t.current,_d(e),new gi(t)},Oo.version="19.1.4",Oo}var Qg;function Z0(){if(Qg)return eu.exports;Qg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),eu.exports=W0(),eu.exports}var Qu=Z0();const Q0=tl(Qu),J0=Ii({__proto__:null,default:Q0},[Qu]);var q=Mi();const ee=tl(q),my=Ii({__proto__:null,default:ee},[q]);const eE=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tE=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,o,l)=>l?l.toUpperCase():o.toLowerCase()),Jg=a=>{const r=tE(a);return r.charAt(0).toUpperCase()+r.slice(1)},yy=(...a)=>a.filter((r,o,l)=>!!r&&r.trim()!==""&&l.indexOf(r)===o).join(" ").trim(),aE=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var nE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const rE=q.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:i="",children:p,iconNode:g,...h},m)=>q.createElement("svg",{ref:m,...nE,width:r,height:r,stroke:a,strokeWidth:l?Number(o)*24/Number(r):o,className:yy("lucide",i),...!p&&!aE(h)&&{"aria-hidden":"true"},...h},[...g.map(([u,y])=>q.createElement(u,y)),...Array.isArray(p)?p:[p]]));const ze=(a,r)=>{const o=q.forwardRef(({className:l,...i},p)=>q.createElement(rE,{ref:p,iconNode:r,className:yy(`lucide-${eE(Jg(a))}`,`lucide-${a}`,l),...i}));return o.displayName=Jg(a),o};const sE=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],by=ze("archive",sE);const oE=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],lE=ze("arrow-down",oE);const iE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],vy=ze("arrow-left",iE);const cE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],dE=ze("arrow-right",cE);const uE=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],pE=ze("arrow-up",uE);const fE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],js=ze("check",fE);const hE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],gr=ze("chevron-down",hE);const gE=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Ey=ze("chevron-left",gE);const mE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Ju=ze("chevron-right",mE);const yE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],em=ze("circle-check",yE);const bE=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],vE=ze("clipboard-check",bE);const EE=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],ep=ze("database",EE);const wE=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ur=ze("download",wE);const xE=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],SE=ze("eye",xE);const TE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],AE=ze("file-check-2",TE);const DE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],CE=ze("file-code-2",DE);const NE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],tm=ze("file-plus-2",NE);const kE=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],RE=ze("file-search",kE);const jE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],mr=ze("file-text",jE);const LE=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Au=ze("folder",LE);const OE=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],_E=ze("funnel",OE);const PE=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],qE=ze("git-branch",PE);const IE=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],yr=ze("hard-drive",IE);const ME=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],$o=ze("layers",ME);const $E=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],$a=ze("loader-circle",$E);const UE=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],BE=ze("monitor",UE);const FE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Ho=ze("plus",FE);const zE=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],YE=ze("refresh-cw",zE);const VE=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],am=ze("save",VE);const XE=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ko=ze("search",XE);const GE=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],HE=ze("settings-2",GE);const KE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Du=ze("shield-check",KE);const WE=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Cu=ze("sliders-horizontal",WE);const ZE=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],ki=ze("trash-2",ZE);const QE=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],br=ze("triangle-alert",QE);const JE=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Os=ze("upload",JE);const ew=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],tw=ze("wrench",ew);const aw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],nm=ze("x",aw);function nw(a,r){if(a instanceof RegExp)return{keys:!1,pattern:a};var o,l,i,p,g=[],h="",m=a.split("/");for(m[0]||m.shift();i=m.shift();)o=i[0],o==="*"?(g.push(o),h+=i[1]==="?"?"(?:/(.*))?":"/(.*)"):o===":"?(l=i.indexOf("?",1),p=i.indexOf(".",1),g.push(i.substring(1,~l?l:~p?p:i.length)),h+=~l&&!~p?"(?:/([^/]+?))?":"/([^/]+?)",~p&&(h+=(~l?"?":"")+"\\"+i.substring(p))):h+="/"+i;return{keys:g,pattern:new RegExp("^"+h+(r?"(?=$|/)":"/?$"),"i")}}var su={exports:{}},ou={};var rm;function rw(){if(rm)return ou;rm=1;var a=Mi();function r(b,w){return b===w&&(b!==0||1/b===1/w)||b!==b&&w!==w}var o=typeof Object.is=="function"?Object.is:r,l=a.useState,i=a.useEffect,p=a.useLayoutEffect,g=a.useDebugValue;function h(b,w){var S=w(),j=l({inst:{value:S,getSnapshot:w}}),C=j[0].inst,D=j[1];return p(function(){C.value=S,C.getSnapshot=w,m(C)&&D({inst:C})},[b,S,w]),i(function(){return m(C)&&D({inst:C}),b(function(){m(C)&&D({inst:C})})},[b]),g(S),S}function m(b){var w=b.getSnapshot;b=b.value;try{var S=w();return!o(b,S)}catch{return!0}}function u(b,w){return w()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?u:h;return ou.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:y,ou}var sm;function sw(){return sm||(sm=1,su.exports=rw()),su.exports}var ow=sw();const lw=my.useInsertionEffect,iw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wy=iw?q.useLayoutEffect:q.useEffect,cw=lw||wy,tp=a=>{const r=q.useRef([a,(...o)=>r[0](...o)]).current;return cw(()=>{r[0]=a}),r[1]},om=["popstate","pushState","replaceState","hashchange"];let Uo=[];const lm=()=>Uo.forEach(a=>a()),dw=a=>(Uo.push(a)===1&&om.forEach(r=>addEventListener(r,lm)),()=>{Uo=Uo.filter(r=>r!==a),Uo.length||om.forEach(r=>removeEventListener(r,lm))}),xy=(a,r)=>ow.useSyncExternalStore(dw,a,r),im=()=>location.search,uw=({ssrSearch:a}={})=>xy(im,a!=null?()=>a:im),cm=()=>location.pathname,pw=({ssrPath:a}={})=>xy(cm,a!=null?()=>a:cm),fw=(a,{replace:r=!1,state:o=null}={})=>history[r?"replaceState":"pushState"](o,"",a),hw=a=>[pw(a),fw],dm=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[dm]>"u"){for(const a of["pushState","replaceState"]){const r=history[a];history[a]=function(){const o=r.apply(this,arguments),l=new Event(a);return l.arguments=arguments,dispatchEvent(l),o}}Object.defineProperty(window,dm,{value:!0})}const Sy=(a="")=>a==="/"?"":a,gw=(a,r)=>a[0]==="~"?a.slice(1):Sy(r)+a,mw=(a,r)=>(a=um(Sy(a)),r=um(r),!a||(r.toLowerCase()+"/").startsWith(a.toLowerCase()+"/")?r.slice(a.length)||"/":"~"+r),um=a=>{try{return a.includes("%")?decodeURI(a):a}catch{return a}},Ty={hook:hw,searchHook:uw,parser:nw,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:a=>a,aroundNav:(a,r,o)=>a(r,o)},Ay=q.createContext(Ty),$i=()=>q.useContext(Ay),yw={};q.createContext(yw);const ap=a=>{const[r,o]=a.hook(a);return[mw(a.base,r),tp((l,i)=>a.aroundNav(o,gw(l,a.base),i))]},Dy=()=>ap($i()),bw=({children:a,...r})=>{const o=$i(),l=r.hook?Ty:o;let i=l;if(r.ssrPath){const[m,u=r.ssrSearch??""]=r.ssrPath.split("?");m&&(r.ssrSearch=u,r.ssrPath=m)}r.hrefs=r.hrefs??r.hook?.hrefs,r.searchHook=r.searchHook??r.hook?.searchHook;let p=q.useRef(l),g=p.current,h=g;for(let m in l){const u=m==="base"?l[m]+(r[m]??""):r[m]??l[m];u!==h[m]&&(g===h&&(p.current=h={...h}),h[m]=u),(u!==l[m]||u!==i[m])&&(i=h)}return q.createElement(Ay.Provider,{value:i},a)},ia=q.forwardRef((a,r)=>{const o=$i(),[l,i]=ap(o),{to:p="",href:g=p,onClick:h,asChild:m,children:u,className:y,replace:b,state:w,transition:S,...j}=a;return j.onClick=tp(C=>{C.ctrlKey||C.metaKey||C.altKey||C.shiftKey||C.button!==0||(h?.(C),C.defaultPrevented||(C.preventDefault(),i(g,a)))}),j.href=o.hrefs(g[0]==="~"?g.slice(1):o.base+g,o),y!==void 0&&(j.className=y?.call?y(l===g):y),r&&(j.ref=r),m&&q.isValidElement(u)?q.cloneElement(u,j):q.createElement("a",j,u)}),vw=a=>{const{to:r,href:o=r}=a,l=$i(),[,i]=ap(l),p=tp(()=>i(r||o,a)),{ssrContext:g}=l;return wy(()=>{p()},[]),g&&(g.redirectTo=r),null},Cy=`To use an existing Clerk app, run:
npx clerk@latest link
npx clerk@latest env pull

For production keys, run:
npx clerk@latest env pull --instance prod`,Ny="Or copy keys from https://dashboard.clerk.com/~/api-keys into your .env file.",pm=`To create a new Clerk app, run:
npx clerk@latest init

'npx clerk@latest init' does not need a Clerk account and writes temporary dev keys.

${Cy}

${Ny}`,Ew=`${Cy}

${Ny}`,ww=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:`The publishableKey passed to Clerk is invalid (key={{key}}, expected format: pk_test_... or pk_live_...).

${pm}`,MissingPublishableKeyErrorMessage:`Clerk keys are missing from your environment.

${pm}`,MissingSecretKeyErrorMessage:`Missing secretKey.

${Ew}`,MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function ky({packageName:a,customMessages:r}){let o=a;function l(p,g){if(!g)return`${o}: ${p}`;let h=p;const m=p.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const u of m){const y=(g[u[1]]||"").toString();h=h.replace(`{{${u[1]}}}`,y)}return`${o}: ${h}`}const i={...ww,...r};return{setPackageName({packageName:p}){return typeof p=="string"&&(o=p),this},setMessages({customMessages:p}){return Object.assign(i,p||{}),this},throwInvalidPublishableKeyError(p){throw new Error(l(i.InvalidPublishableKeyErrorMessage,p))},throwInvalidProxyUrl(p){throw new Error(l(i.InvalidProxyUrlErrorMessage,p))},throwMissingPublishableKeyError(){throw new Error(l(i.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(l(i.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(p){throw new Error(l(i.MissingClerkProvider,p))},throw(p){throw new Error(l(p))}}}const xw=()=>{try{return!1}catch{}return!1},Sw=()=>{try{return!1}catch{}return!1},Tw=()=>{try{return!0}catch{}return!1};var fm=Object.prototype.hasOwnProperty;function hm(a,r,o){for(o of a.keys())if(zo(o,r))return o}function zo(a,r){var o,l,i;if(a===r)return!0;if(a&&r&&(o=a.constructor)===r.constructor){if(o===Date)return a.getTime()===r.getTime();if(o===RegExp)return a.toString()===r.toString();if(o===Array){if((l=a.length)===r.length)for(;l--&&zo(a[l],r[l]););return l===-1}if(o===Set){if(a.size!==r.size)return!1;for(l of a)if(i=l,i&&typeof i=="object"&&(i=hm(r,i),!i)||!r.has(i))return!1;return!0}if(o===Map){if(a.size!==r.size)return!1;for(l of a)if(i=l[0],i&&typeof i=="object"&&(i=hm(r,i),!i)||!zo(l[1],r.get(i)))return!1;return!0}if(o===ArrayBuffer)a=new Uint8Array(a),r=new Uint8Array(r);else if(o===DataView){if((l=a.byteLength)===r.byteLength)for(;l--&&a.getInt8(l)===r.getInt8(l););return l===-1}if(ArrayBuffer.isView(a)){if((l=a.byteLength)===r.byteLength)for(;l--&&a[l]===r[l];);return l===-1}if(!o||typeof a=="object"){l=0;for(o in a)if(fm.call(a,o)&&++l&&!fm.call(r,o)||!(o in r)||!zo(a[o],r[o]))return!1;return Object.keys(r).length===l}}return a!==a&&r!==r}function Aw(a,r){if(!a)throw typeof r=="string"?new Error(r):new Error(`${r.displayName} not found`)}const qs=(a,r)=>{const{assertCtxFn:o=Aw}={},l=ee.createContext(void 0);return l.displayName=a,[l,()=>{const g=ee.useContext(l);return o(g,`${a} not found`),g.value},()=>{const g=ee.useContext(l);return g?g.value:{}}]},[Dw,Cw]=qs("ClerkInstanceContext");qs("InitialStateContext");ee.createContext({});qs("CheckoutContext");function Nw(a){if(!ee.useContext(Dw)){if(typeof a=="function"){a();return}throw new Error(`${a} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}function kw(a){const r=function(){};let o;return o=new Proxy(r,{get(l,i){if(i!=="then")return i==="toString"?()=>`[${a}]`:i===Symbol.toPrimitive?()=>0:o},apply(){return o},construct(){return o},has(){return!1},set(){return!1}}),o}kw("ClerkMockQueryClient");typeof window<"u"?ee.useLayoutEffect:ee.useEffect;const gm=zo,Rw=a=>{const r=q.useRef(a);return q.useEffect(()=>{r.current=a},[a]),r.current},Ia=(a,r,o)=>{const l=!!o,i=q.useRef(o);q.useEffect(()=>{i.current=o},[o]),q.useEffect(()=>{if(!l||!a)return()=>{};const p=(...g)=>{i.current&&i.current(...g)};return a.on(r,p),()=>{a.off(r,p)}},[l,r,a,i])},Ry=ee.createContext(null);Ry.displayName="ElementsContext";const jw=(a,r)=>{if(!a)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${r} in an <Elements> provider.`);return a},Ri=a=>a!==null&&typeof a=="object",Lw=(a,r,o)=>Ri(a)?Object.keys(a).reduce((l,i)=>{const p=!Ri(r)||!jy(a[i],r[i]);return o.includes(i)?(p&&console.warn(`Unsupported prop change: options.${i} is not a mutable property.`),l):p?{...l||{},[i]:a[i]}:l},null):null,mm="[object Object]",jy=(a,r)=>{if(!Ri(a)||!Ri(r))return a===r;const o=Array.isArray(a);if(o!==Array.isArray(r))return!1;const l=Object.prototype.toString.call(a)===mm;if(l!==(Object.prototype.toString.call(r)===mm))return!1;if(!l&&!o)return a===r;const i=Object.keys(a),p=Object.keys(r);if(i.length!==p.length)return!1;const g={};for(let b=0;b<i.length;b+=1)g[i[b]]=!0;for(let b=0;b<p.length;b+=1)g[p[b]]=!0;const h=Object.keys(g);if(h.length!==i.length)return!1;const m=a,u=r,y=b=>jy(m[b],u[b]);return h.every(y)},ym=a=>jw(ee.useContext(Ry),a),Ow=a=>a.charAt(0).toUpperCase()+a.slice(1),_w=(a,r)=>{const o=`${Ow(a)}Element`,p=r?g=>{ym(`mounts <${o}>`);const{id:h,className:m}=g;return ee.createElement("div",{id:h,className:m})}:({id:g,className:h,fallback:m,options:u={},onBlur:y,onFocus:b,onReady:w,onChange:S,onEscape:j,onClick:C,onLoadError:D,onLoaderStart:E,onNetworksChange:A,onConfirm:N,onCancel:B,onShippingAddressChange:x,onShippingRateChange:R})=>{const L=ym(`mounts <${o}>`),P="elements"in L?L.elements:null,[H,fe]=ee.useState(null),re=ee.useRef(null),oe=ee.useRef(null),[Ae,he]=q.useState(!1);Ia(H,"blur",y),Ia(H,"focus",b),Ia(H,"escape",j),Ia(H,"click",C),Ia(H,"loaderror",D),Ia(H,"loaderstart",E),Ia(H,"networkschange",A),Ia(H,"confirm",N),Ia(H,"cancel",B),Ia(H,"shippingaddresschange",x),Ia(H,"shippingratechange",R),Ia(H,"change",S);let de;w&&(de=()=>{he(!0),w(H)}),Ia(H,"ready",de),ee.useLayoutEffect(()=>{if(re.current===null&&oe.current!==null&&P){let Q=null;P&&(Q=P.create(a,u)),re.current=Q,fe(Q),Q&&Q.mount(oe.current)}},[P,u]);const Y=Rw(u);return ee.useEffect(()=>{if(!re.current)return;const Q=Lw(u,Y,["paymentRequest"]);Q&&"update"in re.current&&re.current.update(Q)},[u,Y]),ee.useLayoutEffect(()=>()=>{if(re.current&&typeof re.current.destroy=="function")try{re.current.destroy(),re.current=null}catch{}},[]),ee.createElement(ee.Fragment,null,!Ae&&m,ee.createElement("div",{id:g,style:{height:Ae?"unset":"0px",visibility:Ae?"visible":"hidden"},className:h,ref:oe}))};return p.displayName=o,p.__elementType=a,p};_w("payment",typeof window>"u");qs("PaymentElementContext");qs("StripeUtilsContext");const[M2,,Pw]=qs("PortalProvider"),qw=()=>{const a=Pw();return a&&"getContainer"in a&&a.getContainer?a.getContainer:()=>null},np=ky({packageName:"@clerk/react"});function Iw(a){np.setMessages(a).setPackageName(a)}const Mw=Cw,$w=a=>{Nw(()=>{np.throwMissingClerkProviderError({source:a})})};var Ui=gy();const Uw=tl(Ui),Bw=Ii({__proto__:null,default:Uw},[Ui]),va=a=>{xw()&&console.error(`Clerk: ${a}`)},bm=(a,...r)=>{const o={...a};for(const l of r)delete o[l];return o},Fw=a=>`You've passed multiple children components to <${a}/>. You can only pass a single child component or text.`,zw="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Yw="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Vw="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",Xw="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",Gw=a=>`<${a} /> can only accept <${a}.Page /> and <${a}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,Hw=a=>`Missing props. <${a}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,Kw=a=>`Missing props. <${a}.Link /> component requires the following props: url, label and labelIcon.`,Ww="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Zw="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Qw="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",Jw="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",ex="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",tx="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",ax="Missing props. <UserButton.Action /> component requires the following props: label.",al=a=>r=>{try{return ee.Children.only(a)}catch{const o=ee.Children.toArray(a);return o.length===1&&ee.isValidElement(o[0])?o[0]:np.throw(Fw(r))}},nl=(a,r)=>(a||(a=r),typeof a=="string"&&(a=ee.createElement("button",null,a)),a),rl=a=>(...r)=>{if(a&&typeof a=="function")return a(...r)},Yo=a=>{const[r,o]=q.useState(new Map),l=q.useRef(r),i=q.useRef(new Map),p=q.useRef(new Map);l.current=r,i.current=new Map(a.map(h=>[h.id,h.component]));const g=new Set(a.map(h=>h.id));return p.current.forEach((h,m)=>{g.has(m)||p.current.delete(m)}),a.map(h=>{const m=h.id,u=p.current.get(m);if(u)return u;const y=()=>{const w=l.current.get(m),S=i.current.get(m);return w?Ui.createPortal(S,w):null},b={id:h.id,mount:w=>o(S=>new Map(S).set(m,w)),unmount:()=>o(w=>{const S=new Map(w);return S.set(m,null),S}),portal:y};return p.current.set(m,b),b})},ya=(a,r)=>!!a&&ee.isValidElement(a)&&a?.type===r,Ly=(a,r)=>Py({children:a,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:ol,PageComponent:sl,MenuItemsComponent:Fi,componentName:"UserProfile"},r),Oy=(a,r)=>Py({children:a,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:Yi,PageComponent:zi,componentName:"OrganizationProfile"},r),_y=a=>{const r=[],o=[Yi,zi,Fi,sl,ol];return ee.Children.forEach(a,l=>{o.some(i=>ya(l,i))||r.push(l)}),r},Py=(a,r)=>{const{children:o,LinkComponent:l,PageComponent:i,MenuItemsComponent:p,reorderItemsLabels:g,componentName:h}=a,{allowForAnyChildren:m=!1}=r||{},u=[],y=new Map;ee.Children.forEach(o,N=>{if(!ya(N,i)&&!ya(N,l)&&!ya(N,p)){N&&!m&&va(Gw(h));return}const{props:B}=N,{children:x,label:R,url:L,labelIcon:P}=B,H=N.key;if(ya(N,i))if(Em(B,g))u.push({label:R});else if(lu(B))u.push({label:R,labelIcon:P,children:x,url:L,portalId:vm("page",B,H,y)});else{va(Hw(h));return}if(ya(N,l))if(iu(B))u.push({label:R,labelIcon:P,url:L,portalId:vm("link",B,H,y)});else{va(Kw(h));return}});const b=[],w=[],S=[];u.forEach((N,B)=>{if(lu(N)){b.push({component:N.children,id:N.portalId||B}),w.push({component:N.labelIcon,id:N.portalId||B});return}iu(N)&&S.push({component:N.labelIcon,id:N.portalId||B})});const j=Yo(b),C=Yo(w),D=Yo(S),E=[],A=[];return u.forEach((N,B)=>{if(Em(N,g)){E.push({label:N.label});return}if(lu(N)){const{portal:x,mount:R,unmount:L}=j.find(re=>re.id===(N.portalId||B)),{portal:P,mount:H,unmount:fe}=C.find(re=>re.id===(N.portalId||B));E.push({label:N.label,url:N.url,mount:R,unmount:L,mountIcon:H,unmountIcon:fe}),A.push({key:`content:${N.portalId||B}`,portal:x}),A.push({key:`label:${N.portalId||B}`,portal:P});return}if(iu(N)){const{portal:x,mount:R,unmount:L}=D.find(P=>P.id===(N.portalId||B));E.push({label:N.label,url:N.url,mountIcon:R,unmountIcon:L}),A.push({key:`label:${N.portalId||B}`,portal:x});return}}),{customPages:E,customPagesPortals:A}},vm=(a,r,o,l)=>{if(o!=null)return`${a}:key:${o}`;const i=`${a}:${r.label}:${r.url}`,p=l.get(i)??0;return l.set(i,p+1),`${i}:${p}`},Em=(a,r)=>{const{children:o,label:l,url:i,labelIcon:p}=a;return!o&&!i&&!p&&r.some(g=>g===l)},lu=a=>{const{children:r,label:o,url:l,labelIcon:i}=a;return!!r&&!!l&&!!i&&!!o},iu=a=>{const{children:r,label:o,url:l,labelIcon:i}=a;return!r&&!!l&&!!i&&!!o},nx=(a,r)=>rx({children:a,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:Fi,MenuActionComponent:Iy,MenuLinkComponent:My,UserProfileLinkComponent:ol,UserProfilePageComponent:sl,allowForAnyChildren:r?.allowForAnyChildren??!1}),rx=({children:a,MenuItemsComponent:r,MenuActionComponent:o,MenuLinkComponent:l,UserProfileLinkComponent:i,UserProfilePageComponent:p,reorderItemsLabels:g,allowForAnyChildren:h=!1})=>{const m=[],u=[],y=[],b=new Map;ee.Children.forEach(a,D=>{if(!ya(D,r)&&!ya(D,i)&&!ya(D,p)){D&&!h&&va(Ww);return}if(ya(D,i)||ya(D,p))return;const{props:E}=D;ee.Children.forEach(E.children,A=>{if(!ya(A,o)&&!ya(A,l)){A&&va(Zw);return}const{props:N}=A,B=A.key,{label:x,labelIcon:R,href:L,onClick:P,open:H}=N;if(ya(A,o))if(wm(N,g))m.push({label:x});else if(du(N)){const fe={label:x,labelIcon:R};if(P!==void 0)m.push({...fe,onClick:P,portalId:cu("action",N,B,b)});else if(H!==void 0)m.push({...fe,open:H.startsWith("/")?H:`/${H}`,portalId:cu("action",N,B,b)});else{va("Custom menu item must have either onClick or open property");return}}else{va(ax);return}if(ya(A,l))if(uu(N))m.push({label:x,labelIcon:R,href:L,portalId:cu("link",N,B,b)});else{va(tx);return}})});const w=[],S=[];m.forEach((D,E)=>{du(D)&&w.push({component:D.labelIcon,id:D.portalId||E}),uu(D)&&S.push({component:D.labelIcon,id:D.portalId||E})});const j=Yo(w),C=Yo(S);return m.forEach((D,E)=>{if(wm(D,g)&&u.push({label:D.label}),du(D)){const{portal:A,mount:N,unmount:B}=j.find(R=>R.id===(D.portalId||E)),x={label:D.label,mountIcon:N,unmountIcon:B};"onClick"in D?x.onClick=D.onClick:"open"in D&&(x.open=D.open),u.push(x),y.push({key:`icon:${D.portalId||E}`,portal:A})}if(uu(D)){const{portal:A,mount:N,unmount:B}=C.find(x=>x.id===(D.portalId||E));u.push({label:D.label,href:D.href,mountIcon:N,unmountIcon:B}),y.push({key:`icon:${D.portalId||E}`,portal:A})}}),{customMenuItems:u,customMenuItemsPortals:y}},cu=(a,r,o,l)=>{if(o!=null)return`${a}:key:${o}`;const i=r.href||r.open||"",p=`${a}:${r.label}:${i}`,g=l.get(p)??0;return l.set(p,g+1),`${p}:${g}`},wm=(a,r)=>{const{children:o,label:l,onClick:i,labelIcon:p}=a;return!o&&!i&&!p&&r.some(g=>g===l)},du=a=>{const{label:r,labelIcon:o,onClick:l,open:i}=a;return!!o&&!!r&&(typeof l=="function"||typeof i=="string")},uu=a=>{const{label:r,href:o,labelIcon:l}=a;return!!o&&!!l&&!!r},sx=a=>{const r=a?.isReady;return o=>new Promise((l,i)=>{const{root:p=document?.body,selector:g,timeout:h=0}=o;if(!p){i(new Error("No root element provided"));return}let m=p;if(g&&(m=p?.querySelector(g)),r(m,g)){l();return}const u=new MutationObserver(y=>{for(const b of y)if(!m&&g&&(m=p?.querySelector(g)),(a.childList&&b.type==="childList"||a.attributes&&b.type==="attributes")&&r(m,g)){u.disconnect(),l();return}});u.observe(p,a),h>0&&setTimeout(()=>{u.disconnect(),i(new Error(`Timeout waiting for ${g}`))},h)})},ox=sx({childList:!0,subtree:!0,isReady:(a,r)=>!!a?.childElementCount&&a?.matches?.(r)&&a.childElementCount>0});function ta(a,r){const o=q.useRef(),[l,i]=q.useState("rendering");return q.useEffect(()=>{if(!a)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!o.current){const p=`[data-clerk-component="${a}"]`,g=r?.selector;o.current=ox({selector:g?p+g:p}).then(()=>{i("rendered")}).catch(()=>{i("error")})}},[a,r?.selector]),l}const yi=a=>"mount"in a,xm=a=>"open"in a,Sm=a=>a?.map(({mountIcon:r,unmountIcon:o,...l})=>l);var Yt=class extends ee.PureComponent{constructor(...a){super(...a),this.rootRef=ee.createRef()}componentDidUpdate(a){if(!yi(a)||!yi(this.props))return;const r=bm(a.props||{},"customPages","customMenuItems","children"),o=bm(this.props.props||{},"customPages","customMenuItems","children"),l=a.props?.customPages?.length!==this.props.props?.customPages?.length,i=a.props?.customMenuItems?.length!==this.props.props?.customMenuItems?.length,p=Sm(a.props?.customMenuItems),g=Sm(this.props.props?.customMenuItems);(!gm(r,o)||!gm(p,g)||l||i)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(yi(this.props)&&this.props.mount(this.rootRef.current,this.props.props),xm(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(yi(this.props)&&this.props.unmount(this.rootRef.current),xm(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:a=!1}=this.props,r={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return ee.createElement(ee.Fragment,null,!a&&ee.createElement("div",r),this.props.children)}};const rt=(a,r)=>{const o=(typeof r=="string"?r:r?.component)||a.displayName||a.name||"Component";a.displayName=o;const l=typeof r=="string"?void 0:r,i=p=>{$w(o||"withClerk");const g=Mw(),h=qw();return!g.loaded&&!l?.renderWhileLoading?null:ee.createElement(a,{getContainer:h,...p,component:o,clerk:g})};return i.displayName=`withClerk(${o})`,i},Bi=a=>ee.createElement(ee.Fragment,null,a?.customPagesPortals?.map(({key:r,portal:o})=>q.createElement(o,{key:r})),a?.customMenuItemsPortals?.map(({key:r,portal:o})=>q.createElement(o,{key:r})));rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountSignIn,unmount:a.unmountSignIn,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"SignIn",renderWhileLoading:!0});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountSignUp,unmount:a.unmountSignUp,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"SignUp",renderWhileLoading:!0});function sl({children:a}){return va(zw),ee.createElement(ee.Fragment,null,a)}function ol({children:a}){return va(Yw),ee.createElement(ee.Fragment,null,a)}const lx=rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=Ly(l.children);return ee.createElement(ee.Fragment,null,i&&o,ee.createElement(Yt,{component:r,mount:a.mountUserProfile,unmount:a.unmountUserProfile,updateProps:a.__internal_updateProps,props:{...l,customPages:g},rootProps:p},ee.createElement(Bi,{customPagesPortals:h})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(lx,{Page:sl,Link:ol});const qy=q.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),ix=rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=Ly(l.children,{allowForAnyChildren:!!l.__experimental_asProvider}),m={...l.userProfileProps,customPages:g},{customMenuItems:u,customMenuItemsPortals:y}=nx(l.children,{allowForAnyChildren:!!l.__experimental_asProvider}),b=_y(l.children),w={mount:a.mountUserButton,unmount:a.unmountUserButton,updateProps:a.__internal_updateProps,props:{...l,userProfileProps:m,customMenuItems:u}},S={customPagesPortals:h,customMenuItemsPortals:y};return ee.createElement(qy.Provider,{value:w},i&&o,a.loaded&&ee.createElement(Yt,{component:r,...w,hideRootHtmlElement:!!l.__experimental_asProvider,rootProps:p},l.__experimental_asProvider?b:null,ee.createElement(Bi,S)))},{component:"UserButton",renderWhileLoading:!0});function Fi({children:a}){return va(Qw),ee.createElement(ee.Fragment,null,a)}function Iy({children:a}){return va(Jw),ee.createElement(ee.Fragment,null,a)}function My({children:a}){return va(ex),ee.createElement(ee.Fragment,null,a)}function cx(a){const r=q.useContext(qy),o={...r,props:{...r.props,...a}};return ee.createElement(Yt,o)}Object.assign(ix,{UserProfilePage:sl,UserProfileLink:ol,MenuItems:Fi,Action:Iy,Link:My,__experimental_Outlet:cx});function zi({children:a}){return va(Vw),ee.createElement(ee.Fragment,null,a)}function Yi({children:a}){return va(Xw),ee.createElement(ee.Fragment,null,a)}const dx=rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=Oy(l.children);return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountOrganizationProfile,unmount:a.unmountOrganizationProfile,updateProps:a.__internal_updateProps,props:{...l,customPages:g},rootProps:p},ee.createElement(Bi,{customPagesPortals:h})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(dx,{Page:zi,Link:Yi});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountCreateOrganization,unmount:a.unmountCreateOrganization,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"CreateOrganization",renderWhileLoading:!0});const $y=q.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),ux=rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=Oy(l.children,{allowForAnyChildren:!!l.__experimental_asProvider}),m={...l.organizationProfileProps,customPages:g},u=_y(l.children),y={mount:a.mountOrganizationSwitcher,unmount:a.unmountOrganizationSwitcher,updateProps:a.__internal_updateProps,props:{...l,organizationProfileProps:m},rootProps:p,component:r};return a.__experimental_prefetchOrganizationSwitcher(),ee.createElement($y.Provider,{value:y},ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{...y,hideRootHtmlElement:!!l.__experimental_asProvider},l.__experimental_asProvider?u:null,ee.createElement(Bi,{customPagesPortals:h}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function px(a){const r=q.useContext($y),o={...r,props:{...r.props,...a}};return ee.createElement(Yt,o)}Object.assign(ux,{OrganizationProfilePage:zi,OrganizationProfileLink:Yi,__experimental_Outlet:px});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountOrganizationList,unmount:a.unmountOrganizationList,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"OrganizationList",renderWhileLoading:!0});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,open:a.openGoogleOneTap,close:a.closeGoogleOneTap,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"GoogleOneTap",renderWhileLoading:!0});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountWaitlist,unmount:a.unmountWaitlist,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"Waitlist",renderWhileLoading:!0});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r,{selector:'[data-component-status="ready"]'})==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountPricingTable,unmount:a.unmountPricingTable,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"PricingTable",renderWhileLoading:!0});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountAPIKeys,unmount:a.unmountAPIKeys,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"ApiKeys",renderWhileLoading:!0});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.__internal_mountOAuthConsent,unmount:a.__internal_unmountOAuthConsent,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"OAuthConsent",renderWhileLoading:!0});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.__internal_mountOAuthDeviceVerification,unmount:a.__internal_unmountOAuthDeviceVerification,updateProps:g=>{a.__internal_updateProps(g)},props:l,rootProps:p}))},{component:"OAuthDeviceVerification",renderWhileLoading:!0});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountUserAvatar,unmount:a.unmountUserAvatar,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"UserAvatar",renderWhileLoading:!0});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountTaskChooseOrganization,unmount:a.unmountTaskChooseOrganization,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountTaskResetPassword,unmount:a.unmountTaskResetPassword,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"TaskResetPassword",renderWhileLoading:!0});rt(({clerk:a,component:r,fallback:o,...l})=>{const i=ta(r)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return ee.createElement(ee.Fragment,null,i&&o,a.loaded&&ee.createElement(Yt,{component:r,mount:a.mountTaskSetupMFA,unmount:a.unmountTaskSetupMFA,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"TaskSetupMFA",renderWhileLoading:!0});const fx=ky({packageName:"@clerk/shared"});function hx(a){fx.setPackageName({packageName:a})}const Tm=new Set,Vi=(a,r,o)=>{const l=Sw()||Tw(),i=a;Tm.has(i)||l||(Tm.add(i),console.warn(`Clerk - DEPRECATION WARNING: "${a}" is deprecated and will be removed in the next major release.
${r}`))};function gx(a){const r=a.match(/^(\d+)\.(\d+)\.(\d+)/);if(!r)return null;const[,o,l,i]=r;return{major:parseInt(o,10),minor:parseInt(l,10),patch:parseInt(i,10)}}function mx(a,r){const{major:o,minor:l,patch:i}=a;return r.some(([p,g,h,m])=>o!==p?!1:h===-1?l>g||l===g&&i>=m:l===h&&i>=m)}function yx(a,r){const o=gx(a);return o?mx(o,r):!1}rt(({clerk:a,...r})=>{const{client:o,session:l}=a,i=(o.signedInSessions?.length??0)>0;return ee.useEffect(()=>{l===null&&i?a.redirectToAfterSignOut():a.redirectToSignIn(r)},[]),null},"RedirectToSignIn");rt(({clerk:a,...r})=>(ee.useEffect(()=>{a.redirectToSignUp(r)},[]),null),"RedirectToSignUp");rt(({clerk:a,...r})=>(ee.useEffect(()=>{a.redirectToTasks(r)},[]),null),"RedirectToTasks");rt(({clerk:a})=>(ee.useEffect(()=>{Vi("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),a.redirectToUserProfile()},[]),null),"RedirectToUserProfile");rt(({clerk:a})=>(ee.useEffect(()=>{Vi("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),a.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");rt(({clerk:a})=>(ee.useEffect(()=>{Vi("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),a.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");rt(({clerk:a,...r})=>(ee.useEffect(()=>{a.handleRedirectCallback(r)},[]),null),"AuthenticateWithRedirectCallback");typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);function bx(){try{return yx(ee.version,[[18,0,-1,0],[19,0,0,3],[19,1,1,4],[19,2,2,3],[19,3,3,0]])}catch{return!1}}bx();typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);if(globalThis.__clerkSharedModules){const a=globalThis.__clerkSharedModules.react?.version;a&&a!==q.version&&console.warn(`[@clerk/ui/register] React version mismatch detected. Already registered: ${a}, current import: ${q.version}. This may cause issues with the shared @clerk/ui variant.`)}else globalThis.__clerkSharedModules={react:my,"react-dom":Bw,"react-dom/client":J0,"react/jsx-runtime":V0};rt(({clerk:a,children:r,...o})=>{const{appearance:l,getContainer:i,component:p,...g}=o;r=nl(r,"Invite members");const h=al(r)("InviteMembersButton"),m=()=>a.openInviteMembers({appearance:l,getContainer:i}),y={...g,onClick:async b=>(h&&typeof h=="object"&&"props"in h&&await rl(h.props.onClick)(b),m())};return ee.cloneElement(h,y)},{component:"InviteMembersButton",renderWhileLoading:!0});rt(({clerk:a,children:r,...o})=>{const{appearance:l,getContainer:i,component:p,signUpFallbackRedirectUrl:g,forceRedirectUrl:h,fallbackRedirectUrl:m,signUpForceRedirectUrl:u,mode:y,initialValues:b,withSignUp:w,oauthFlow:S,...j}=o;r=nl(r,"Sign in");const C=al(r)("SignInButton"),D=()=>{const N={forceRedirectUrl:h,fallbackRedirectUrl:m,signUpFallbackRedirectUrl:g,signUpForceRedirectUrl:u,initialValues:b,withSignUp:w,oauthFlow:S};return y==="modal"?a.openSignIn({...N,appearance:l,getContainer:i}):a.redirectToSignIn({...N,signInFallbackRedirectUrl:m,signInForceRedirectUrl:h})},A={...j,onClick:async N=>(C&&typeof C=="object"&&"props"in C&&await rl(C.props.onClick)(N),D())};return ee.cloneElement(C,A)},{component:"SignInButton",renderWhileLoading:!0});rt(({clerk:a,children:r,...o})=>{const{redirectUrl:l,getContainer:i,component:p,...g}=o;r=nl(r,"Sign in with Metamask");const h=al(r)("SignInWithMetamaskButton"),m=async()=>{async function b(){await a.authenticateWithMetamask({redirectUrl:l||void 0})}b()},y={...g,onClick:async b=>(await rl(h.props.onClick)(b),m())};return ee.cloneElement(h,y)},{component:"SignInWithMetamask",renderWhileLoading:!0});rt(({clerk:a,children:r,...o})=>{const{redirectUrl:l="/",sessionId:i,signOutOptions:p,getContainer:g,component:h,...m}=o;p&&Vi("SignOutButton `signOutOptions`","Use the `redirectUrl` and `sessionId` props directly instead."),r=nl(r,"Sign out");const u=al(r)("SignOutButton"),y=()=>a.signOut({redirectUrl:l,...i!==void 0&&{sessionId:i},...p}),w={...m,onClick:async S=>(await rl(u.props.onClick)(S),y())};return ee.cloneElement(u,w)},{component:"SignOutButton",renderWhileLoading:!0});rt(({clerk:a,children:r,...o})=>{const{appearance:l,unsafeMetadata:i,getContainer:p,component:g,fallbackRedirectUrl:h,forceRedirectUrl:m,signInFallbackRedirectUrl:u,signInForceRedirectUrl:y,mode:b,initialValues:w,oauthFlow:S,...j}=o;r=nl(r,"Sign up");const C=al(r)("SignUpButton"),D=()=>{const N={fallbackRedirectUrl:h,forceRedirectUrl:m,signInFallbackRedirectUrl:u,signInForceRedirectUrl:y,initialValues:w,oauthFlow:S};return b==="modal"?a.openSignUp({...N,appearance:l,unsafeMetadata:i,getContainer:p}):a.redirectToSignUp({...N,signUpFallbackRedirectUrl:h,signUpForceRedirectUrl:m})},A={...j,onClick:async N=>(C&&typeof C=="object"&&"props"in C&&await rl(C.props.onClick)(N),D())};return ee.cloneElement(C,A)},{component:"SignUpButton",renderWhileLoading:!0});Iw({packageName:"@clerk/react"});hx("@clerk/react");var pu={exports:{}};const Is=a=>({...a,__type:"prebuilt_appearance"}),vx=Object.freeze(Object.defineProperty({__proto__:null,experimental_createTheme:Is},Symbol.toStringTag,{value:"Module"})),Ex=hy(vx),Uy=Is({name:"dark",variables:{colorBackground:"#212126",colorNeutral:"white",colorPrimary:"#ffffff",colorPrimaryForeground:"black",colorForeground:"white",colorInputForeground:"white",colorInput:"#26262B"},elements:{providerIcon__apple:{filter:"invert(1)"},providerIcon__github:{filter:"invert(1)"},providerIcon__okx_wallet:{filter:"invert(1)"},providerIcon__vercel:{filter:"invert(1)"},activeDeviceIcon:{"--cl-chassis-bottom":"#d2d2d2","--cl-chassis-back":"#e6e6e6","--cl-chassis-screen":"#e6e6e6","--cl-screen":"#111111"}}}),wx=Is({name:"shadesOfPurple",baseTheme:Uy,variables:{colorBackground:"#3f3c77",colorPrimary:"#f8d80d",colorPrimaryForeground:"#38375f",colorInputForeground:"#a1fdfe",colorShimmer:"rgba(161,253,254,0.36)"}}),ur={boxShadow:"3px 3px 0px #000",border:"2px solid #000","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:active":{boxShadow:"2px 2px 0px #000",transform:"translate(1px)"}},qr={boxShadow:"3px 3px 0px #000",border:"2px solid #000"},xx=Is({name:"neobrutalism",simpleStyles:!0,variables:{colorPrimary:"#DF1B1B",colorShimmer:"rgba(255,255,255,0.64)",fontWeight:{normal:500,medium:600,bold:700}},elements:{cardBox:{boxShadow:"7px 7px 0px #000",border:"3px solid #000"},card:{borderRadius:"0"},headerSubtitle:{color:"#212126"},alternativeMethodsBlockButton:ur,socialButtonsIconButton:{...ur},selectButton:{...ur,...qr,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"}},socialButtonsBlockButton:{...ur,color:"#212126"},profileSectionPrimaryButton:ur,profileSectionItem:{color:"#212126"},avatarImageActionsUpload:ur,menuButton:qr,menuList:qr,formButtonPrimary:ur,navbarButton:ur,formFieldAction:{fontWeight:"700"},formFieldInput:{...qr,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:hover":{...qr,transform:"scale(1.01)"}},table:qr,tableHead:{color:"#212126"},dividerLine:{background:"#000"},dividerText:{fontWeight:"700",color:"#212126"},footer:{background:"#fff","& div":{color:"#212126"}},footerActionText:{color:"#212126"},footerActionLink:{fontWeight:"700",borderBottom:"3px solid","&:focus":{boxShadow:"none"}},actionCard:{...qr},badge:{border:"1px solid #000",background:"#fff",color:"#212126"}}}),Sx=Is({name:"shadcn",cssLayerName:"components",variables:{colorBackground:"var(--card)",colorDanger:"var(--destructive)",colorForeground:"var(--card-foreground)",colorInput:"var(--input)",colorInputForeground:"var(--card-foreground)",colorModalBackdrop:"var(--color-black)",colorMuted:"var(--muted)",colorMutedForeground:"var(--muted-foreground)",colorNeutral:"var(--foreground)",colorPrimary:"var(--primary)",colorPrimaryForeground:"var(--primary-foreground)",colorRing:"var(--ring)",fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",semibold:"var(--font-weight-semibold)",bold:"var(--font-weight-semibold)"}},elements:{input:"bg-transparent dark:bg-input/30",cardBox:"shadow-sm border",popoverBox:"shadow-sm border",button:{'&[data-variant="solid"]::after':{display:"none"}},providerIcon__apple:"dark:invert",providerIcon__github:"dark:invert",providerIcon__okx_wallet:"dark:invert",providerIcon__vercel:"dark:invert"}}),Tx=Is({name:"simple",simpleStyles:!0}),Ax=Object.freeze(Object.defineProperty({__proto__:null,dark:Uy,experimental__simple:Tx,neobrutalism:xx,shadcn:Sx,shadesOfPurple:wx},Symbol.toStringTag,{value:"Module"})),Dx=hy(Ax);var Am;function Cx(){return Am||(Am=1,(function(a){var r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,p=(u,y,b,w)=>{if(y&&typeof y=="object"||typeof y=="function")for(let S of l(y))!i.call(u,S)&&S!==b&&r(u,S,{get:()=>y[S],enumerable:!(w=o(y,S))||w.enumerable});return u},g=(u,y,b)=>(p(u,y,"default"),b&&p(b,y,"default")),h=u=>p(r({},"__esModule",{value:!0}),u),m={};a.exports=h(m),g(m,Ex,a.exports),g(m,Dx,a.exports)})(pu)),pu.exports}Cx();function Dm(a){if(a instanceof Error)return a;if(typeof a=="string")return new Error(a);try{return new Error(JSON.stringify(a))}catch{return new Error(String(a))}}function Nx({error:a,resetError:r}){return c.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50 p-6",children:c.jsxs("div",{className:"max-w-lg w-full text-center",children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Something went wrong"}),c.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"This part of the app hit an error. The rest of the app is still running."}),null,c.jsx("button",{type:"button",onClick:r,className:"mt-4 rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700",children:"Try again"})]})})}class kx extends q.Component{state={error:null};static getDerivedStateFromError(r){return{error:Dm(r)}}componentDidCatch(r,o){console.error("ErrorBoundary caught an error:",Dm(r),o.componentStack)}componentDidUpdate(r){this.state.error!==null&&r.resetKey!==this.props.resetKey&&this.resetError()}resetError=()=>{this.setState({error:null})};render(){const{error:r}=this.state;if(r===null)return this.props.children;const o=this.props.FallbackComponent??Nx;return c.jsx(o,{error:r,resetError:this.resetError})}}function Rx({showLocalChip:a=!0}){const[r,o]=q.useState(""),[,l]=Dy(),i=p=>{p.preventDefault(),r&&l(`/workspace/${r}`)};return c.jsxs("main",{className:"chooser-page",children:[c.jsxs("header",{className:"chooser-top",children:[c.jsxs(ia,{href:"/",className:"studio-wordmark","aria-label":"Mapping Studio home","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),a&&c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Browser-local workspace"]})]}),c.jsxs("section",{className:"chooser-content","aria-labelledby":"chooser-title",children:[c.jsxs("div",{className:"chooser-intro",children:[c.jsx("div",{className:"eyebrow",children:"Engineering workspace"}),c.jsx("h1",{id:"chooser-title",children:"Choose a discipline"}),c.jsx("p",{children:"Keep drawing groups organized and traceable on this device."})]}),c.jsxs("form",{className:"discipline-picker",onSubmit:i,"data-testid":"form-discipline-picker",children:[c.jsxs("div",{className:"discipline-field",children:[c.jsx("label",{htmlFor:"discipline-select",children:"Drawing type"}),c.jsxs("div",{className:"discipline-select-control",children:[c.jsxs("select",{id:"discipline-select",value:r,onChange:p=>o(p.target.value),"aria-label":"Drawing type","data-testid":"select-discipline",children:[c.jsx("option",{value:"",disabled:!0,children:"Select PFD or P&ID"}),c.jsx("option",{value:"pfd",children:"PFD — Process Flow Diagram"}),c.jsx("option",{value:"pid",children:"P&ID — Piping and Instrumentation Diagram"})]}),c.jsx(gr,{size:17,"aria-hidden":"true"})]})]}),c.jsxs("button",{className:"btn primary discipline-submit",type:"submit",disabled:!r,"data-testid":"button-open-discipline",children:["Open workspace ",c.jsx(dE,{size:16,"aria-hidden":"true"})]})]}),c.jsxs("div",{className:"chooser-foot",children:[c.jsx(yr,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Stored in this browser only."})," Nothing is uploaded or shared."]})]})]}),c.jsxs("footer",{className:"chooser-footer",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:"PDFs and project data stay in this browser"}),c.jsx("span",{children:"© 2026 gaurav.cbiindia"})]})]})}function jx(){return c.jsx("main",{className:"chooser-page not-found",children:c.jsxs("div",{className:"not-found-card",children:[c.jsx("div",{className:"eyebrow",children:"Page not found"}),c.jsx("h1",{children:"This workspace does not exist."}),c.jsx(ia,{href:"/",className:"btn primary","data-testid":"link-not-found-home",children:"Return to disciplines"})]})})}const rp="pid-mapping-studio:hierarchies:v2",By="pid-mapping-studio:hierarchies:v1",ji=80,Lx=128,Ox=5e3,_x=64;class Vo extends Error{rawValue;constructor(r,o=null){super(r),this.name="HierarchyLoadError",this.rawValue=o}}function Nu(){return{version:2,pfd:[],pid:[]}}function sp(a,r){return Object.keys(a).length===r.length&&r.every(l=>Object.prototype.hasOwnProperty.call(a,l))}function Li(a,r,o=new Set){let l=0;const i=(p,g)=>{if(g>_x)return!1;for(const h of p){if(!h||typeof h!="object"||Array.isArray(h))return!1;const m=h;if(!sp(m,r?["id","name","kind","expanded","children"]:["id","name","expanded","children"])||typeof m.id!="string"||m.id.length===0||m.id.length>Lx||typeof m.name!="string"||m.name.trim().length===0||m.name!==m.name.trim()||m.name.length>ji||r&&!["technology","projects","proposals","project","proposal","client","legacy"].includes(String(m.kind))||typeof m.expanded!="boolean"||!Array.isArray(m.children)||o.has(m.id)||(o.add(m.id),l+=1,l>Ox||!i(m.children,g+1)))return!1}return!0};return i(a,0)}function Bo(a,r){if(a.kind==="legacy")return(r===null||r==="legacy")&&a.children.every(l=>Bo(l,"legacy"));const o={technology:null,projects:"technology",proposals:"technology",project:"projects",proposal:"proposals",client:"project"};return a.kind==="client"&&r!=="project"&&r!=="proposal"||a.kind!=="client"&&o[a.kind]!==r?!1:a.kind==="technology"?a.children.filter(l=>l.kind==="projects").length===1&&a.children.filter(l=>l.kind==="proposals").length===1&&a.children.every(l=>Bo(l,"technology")):a.kind==="projects"||a.kind==="proposals"?a.children.every(l=>Bo(l,a.kind)):a.kind==="project"||a.kind==="proposal"?a.children.every(l=>Bo(l,a.kind)):a.children.length===0}function Fy(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!sp(r,["version","pfd","pid"])||r.version!==2||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const o=new Set;return Li(r.pfd,!0,o)&&Li(r.pid,!0,o)&&[...r.pfd,...r.pid].every(l=>Bo(l,null))}function Px(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!sp(r,["version","pfd","pid"])||r.version!==1||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const o=new Set;return Li(r.pfd,!1,o)&&Li(r.pid,!1,o)}function ku(a){return a.map(r=>({id:r.id,name:r.name,kind:"legacy",expanded:r.expanded,children:ku(r.children)}))}function qx(a){return{version:2,pfd:ku(a.pfd),pid:ku(a.pid)}}function Ix(){let a;try{a=window.localStorage.getItem(rp),a===null&&(a=window.localStorage.getItem(By))}catch{throw new Vo("Saved groups could not be read from browser storage.")}if(a===null)return Nu();let r;try{r=JSON.parse(a)}catch{throw new Vo("Saved group data is not valid JSON.",a)}if(Fy(r))return r;if(Px(r))return qx(r);throw new Vo("Saved group data is malformed or uses an unsupported format.",a)}function Mx(a){if(!Fy(a))throw new Error("Groups could not be saved because the hierarchy is invalid.");window.localStorage.setItem(rp,JSON.stringify(a))}function Ti(a,r,o){return a.map(l=>l.id===r?o(l):{...l,children:Ti(l.children,r,o)})}function zy(a,r){return a.filter(o=>o.id!==r).map(o=>({...o,children:zy(o.children,r)}))}function Yy(a,r){return r?a.id===r||a.children.some(o=>Yy(o,r)):!1}function Ru(a){return a.reduce((r,o)=>r+1+Ru(o.children),0)}function ju(a,r){if(!r)return null;for(const o of a){if(o.id===r)return o;const l=ju(o.children,r);if(l)return l}return null}function Vy(a,r,o){return a.flatMap(l=>{const i=r?`${r} / ${l.name}`:l.name;return[...o(l)?[{id:l.id,label:i}]:[],...Vy(l.children,i,o)]})}function Xy(a){return Vy(a,"",r=>r.kind==="client"||r.kind==="legacy")}const $x="modulepreload",Ux=function(a){return"/pid-mapping-studio-app/"+a},Cm={},nn=function(r,o,l){let i=Promise.resolve();if(o&&o.length>0){let m=function(u){return Promise.all(u.map(y=>Promise.resolve(y).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),h=g?.nonce||g?.getAttribute("nonce");i=m(o.map(u=>{if(u=Ux(u),u in Cm)return;Cm[u]=!0;const y=u.endsWith(".css"),b=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${b}`))return;const w=document.createElement("link");if(w.rel=y?"stylesheet":$x,y||(w.as="script"),w.crossOrigin="",w.href=u,h&&w.setAttribute("nonce",h),document.head.appendChild(w),y)return new Promise((S,j)=>{w.addEventListener("load",S),w.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${u}`)))})}))}function p(g){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=g,window.dispatchEvent(h),!h.defaultPrevented)throw g}return i.then(g=>{for(const h of g||[])h.status==="rejected"&&p(h.reason);return r().catch(p)})};async function Bx(){const[a,r]=await Promise.all([nn(()=>import("./pdf-TYrZqVzP.js"),[]),nn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);return a.GlobalWorkerOptions.workerSrc=r.default,a}function Fx({fileId:a,alias:r,pageCount:o,page:l,onPageChange:i,loadBytes:p,markers:g=[],onMarkerClick:h}){const m=q.useRef(null),u=q.useRef(null),[y,b]=q.useState(0),[w,S]=q.useState("loading"),[j,C]=q.useState(0),D=q.useRef(p);return D.current=p,q.useEffect(()=>{const E=u.current;if(!E)return;b(E.clientWidth);const A=new ResizeObserver(()=>b(Math.round(E.clientWidth/24)*24));return A.observe(E),()=>A.disconnect()},[]),q.useEffect(()=>{if(!y)return;let E=!1,A=null,N=null;return S("loading"),(async()=>{try{const[B,x]=await Promise.all([Bx(),D.current(a)]);if(E)return;N=B.getDocument({data:new Uint8Array(x.slice(0))});const R=await N.promise;if(E)return;const L=await R.getPage(Math.min(Math.max(l,1),R.numPages)),P=L.getViewport({scale:1}),H=Math.min(window.devicePixelRatio||1,2),fe=y/P.width*H,re=L.getViewport({scale:fe}),oe=m.current;if(!oe||E)return;oe.width=Math.floor(re.width),oe.height=Math.floor(re.height),oe.style.width="100%";const Ae=L.render({canvas:oe,canvasContext:oe.getContext("2d"),viewport:re});A=Ae,await Ae.promise,E||S("ready")}catch(B){if(E||B?.name==="RenderingCancelledException")return;S("error")}})(),()=>{E=!0,A?.cancel(),N?.destroy().catch(()=>{})}},[a,l,y,j]),c.jsxs("div",{className:"ppv","data-testid":"panel-source-preview",children:[c.jsxs("div",{className:"ppv-bar",children:[c.jsx("span",{className:"ppv-label","data-testid":"text-preview-label",children:"Original source PDF · not generated CAD"}),c.jsxs("div",{className:"ppv-nav",children:[c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Previous page",disabled:l<=1,onClick:()=>i(l-1),"data-testid":"button-preview-prev",children:c.jsx(Ey,{size:15})}),c.jsxs("span",{"data-testid":"text-preview-page","aria-live":"polite",children:[r," · page ",l," of ",o]}),c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Next page",disabled:l>=o,onClick:()=>i(l+1),"data-testid":"button-preview-next",children:c.jsx(Ju,{size:15})})]})]}),c.jsxs("div",{className:"ppv-stage",ref:u,children:[c.jsxs("div",{className:"ppv-canvas-wrap",style:{visibility:w==="ready"?"visible":"hidden"},children:[c.jsx("canvas",{ref:m,"aria-label":`Original source page ${l} of ${r}`,"data-testid":"canvas-source-preview"}),w==="ready"&&g.length>0&&c.jsx("div",{className:"ppv-markers","aria-label":"Extracted tag source locations",children:g.map((E,A)=>c.jsx("button",{className:"ppv-marker",type:"button",style:{left:`${E.location.x*100}%`,top:`${E.location.y*100}%`,width:`${Math.max(E.location.width*100,1.1)}%`,height:`${Math.max(E.location.height*100,1.2)}%`},"aria-label":`OCR location for ${E.label}; verify against the PDF`,title:`${E.label} · OCR candidate location`,onClick:()=>h?.(E.id),"data-testid":`marker-source-${E.id}-${A}`,children:c.jsx("span",{children:E.label})},`${E.id}-${E.location.pageNumber}-${A}`))})]}),g.length>0&&c.jsx("div",{className:"ppv-marker-note",role:"note",children:"Red boxes show OCR candidate locations. Confirm each tag against the original PDF."}),w==="loading"&&c.jsxs("div",{className:"ppv-overlay",role:"status","data-testid":"status-preview-loading",children:[c.jsx($a,{size:18,className:"pdf-spin"})," Rendering page"]}),w==="error"&&c.jsxs("div",{className:"ppv-overlay ppv-error",role:"alert","data-testid":"status-preview-error",children:[c.jsx(br,{size:18})," This page could not be shown.",c.jsx("button",{type:"button",className:"btn",onClick:()=>C(E=>E+1),"data-testid":"button-preview-retry",children:"Try again"})]})]})]})}const fu="STANDARD",zx="STANDARD";function Yx(a,r,o){const l=a(),i=a(),p=a(),g=a(),h=a(),m=a(),u=a(),y=a(),b=a();function w(x,R,L){const P=a();return x(0,"TABLE"),x(2,R),x(5,P),x(330,"0"),x(100,"AcDbSymbolTable"),x(70,L),P}function S(x,R,L,P,H=a()){return x(0,R),x(R==="DIMSTYLE"?105:5,H),x(330,L),x(100,"AcDbSymbolTableRecord"),x(100,P),H}function j(x){const R=w(x,"VPORT",1);S(x,"VPORT",R,"AcDbViewportTableRecord"),x(2,"*ACTIVE"),x(70,0),x(10,0),x(20,0),x(11,1),x(21,1),x(12,r/2),x(22,o/2),x(13,0),x(23,0),x(14,10),x(24,10),x(15,10),x(25,10),x(16,0),x(26,0),x(36,1),x(17,0),x(27,0),x(37,0),x(40,o*1.1),x(41,r/o),x(42,50),x(43,0),x(44,0),x(50,0),x(51,0),x(71,0),x(72,1e3),x(73,1),x(74,3),x(75,0),x(76,0),x(77,0),x(78,0),x(281,0),x(0,"ENDTAB")}function C(x,R){for(const fe of["VIEW","UCS"])w(x,fe,0),x(0,"ENDTAB");const L=w(x,"APPID",1);S(x,"APPID",L,"AcDbRegAppTableRecord"),x(2,"ACAD"),x(70,0),x(0,"ENDTAB");const P=w(x,"DIMSTYLE",1);x(100,"AcDbDimStyleTable"),x(71,0),S(x,"DIMSTYLE",P,"AcDbDimStyleTableRecord"),x(2,zx),x(70,0),x(40,1),x(140,2.5),x(340,R),x(0,"ENDTAB");const H=w(x,"BLOCK_RECORD",2);for(const[fe,re,oe]of[["*Model_Space",m,y],["*Paper_Space",u,b]])S(x,"BLOCK_RECORD",H,"AcDbBlockTableRecord",re),x(2,fe),x(340,oe),x(70,4),x(280,1),x(281,0);x(0,"ENDTAB")}function D(x){x(0,"SECTION"),x(2,"BLOCKS");for(const[R,L]of[["*Model_Space",m],["*Paper_Space",u]])x(0,"BLOCK"),x(5,a()),x(330,L),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockBegin"),x(2,R),x(70,0),x(10,0),x(20,0),x(30,0),x(3,R),x(1,""),x(0,"ENDBLK"),x(5,a()),x(330,L),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockEnd");x(0,"ENDSEC")}function E(x,R,L,P,H=!1){x(0,H?"ACDBDICTIONARYWDFLT":"DICTIONARY"),x(5,R),x(330,L),x(100,"AcDbDictionary"),x(280,0),x(281,1);for(const[fe,re]of P)x(3,fe),x(350,re);H&&(x(100,"AcDbDictionaryWithDefault"),x(340,h))}function A(x,R,L,P,H){x(0,"LAYOUT"),x(5,L),x(330,p),x(100,"AcDbPlotSettings"),x(1,""),x(4,""),x(6,"");for(const fe of[40,41,42,43])x(fe,0);x(44,r),x(45,o);for(const fe of[46,47,48,49,140,141])x(fe,0);x(142,1),x(143,1),x(70,H===0?1024:0),x(72,1),x(73,0),x(74,5),x(7,""),x(75,16),x(76,0),x(77,2),x(78,300),x(147,1),x(148,0),x(149,0),x(100,"AcDbLayout"),x(1,R),x(70,1),x(71,H),x(10,0),x(20,0),x(11,r),x(21,o),x(12,0),x(22,0),x(32,0),x(14,0),x(24,0),x(34,0),x(15,r),x(25,o),x(35,0),x(146,0),x(13,0),x(23,0),x(33,0),x(16,1),x(26,0),x(36,0),x(17,0),x(27,1),x(37,0),x(76,1),x(330,P)}function N(x){x(0,"SECTION"),x(2,"OBJECTS"),E(x,l,"0",[["ACAD_GROUP",i],["ACAD_LAYOUT",p],["ACAD_PLOTSTYLENAME",g]]),E(x,i,l,[]),E(x,p,l,[["Model",y],["Layout1",b]]),E(x,g,l,[["Normal",h]],!0),x(0,"ACDBPLACEHOLDER"),x(5,h),x(330,g),A(x,"Model",y,m,0),A(x,"Layout1",b,u,1),x(0,"ENDSEC")}function B(x){x(0,"SECTION"),x(2,"CLASSES");for(const[R,L,P]of[["LAYOUT","AcDbLayout",2],["ACDBDICTIONARYWDFLT","AcDbDictionaryWithDefault",1],["ACDBPLACEHOLDER","AcDbPlaceHolder",1]])x(0,"CLASS"),x(1,R),x(2,L),x(3,"ObjectDBX Classes"),x(90,0),x(91,P),x(280,0),x(281,0);x(0,"ENDSEC")}return{modelSpace:m,normalPlotStyle:h,beginTable:w,tableRecord:S,writeViewport:j,writeRemainingTables:C,writeBlocks:D,writeObjects:N,writeClasses:B}}function hu(a){if(!Number.isFinite(a))throw new Error("A PDF coordinate is not a finite number.");return Number(a.toFixed(7)).toString()}function Vx(a){return a.replace(/[\r\n\t]/g," ").replace(/\\/g,"\\\\").replace(/[^\x20-\x7e]/g,r=>`\\U+${r.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")}`)}const Nm=/[<>\/\\":;?*|,=\u0000-\u001f\u007f]/;function Gy(a){const r=a.replace(/^\uFEFF/,"").split(/\r?\n/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF export rejected: the output does not contain complete group-code/value pairs.");const o=[];for(let l=0;l<r.length;l+=2){const i=Number(r[l].trim());if(!/^\d+$/.test(r[l].trim())||!Number.isInteger(i)||r[l+1]===void 0)throw new Error(`DXF export rejected: malformed group-code/value pair at line ${l+1}.`);o.push({code:i,value:r[l+1]})}if(o.at(-1)?.code!==0||o.at(-1)?.value!=="EOF")throw new Error("DXF export rejected: the output is incomplete (missing EOF).");return o}function Xx(a,r,o=0){return!a||a.trim()!==a||a.length>255?!1:r==="BLOCK_RECORD"&&/^\*[A-Za-z0-9_.$-]+$/.test(a)||r==="VPORT"&&a.toUpperCase()==="*ACTIVE"?!0:o&16&&a.includes("|")?a.split("|").every(l=>l.length>0&&!Nm.test(l)):!Nm.test(a)}function Hy(a,r,o,l=[]){const i=new Set;let p=!1,g=!1;for(let h=0;h<a.length;h+=1){const m=a[h];if(m.code===0&&m.value==="SECTION"&&a[h+1]?.code===2&&a[h+1]?.value==="TABLES"){p=!0,g=!0,h+=1;continue}if(!p)continue;if(m.code===0&&m.value==="ENDSEC"){p=!1;continue}if(m.code!==0||m.value!=="TABLE")continue;const u=a[h+1];if(u?.code!==2||!u.value.trim())throw new Error("DXF export rejected: a symbol table has a blank or missing table name.");const y=u.value.toUpperCase();if(i.has(y))throw new Error(`DXF export rejected: the ${y} symbol table is duplicated.`);i.add(y);const b=new Set;let w=h+1;for(;w<a.length&&a[w].code!==0;)w+=1;const S=new Set;for(let D=w;D<a.length&&!(a[D].code===0&&["ENDTAB","ENDSEC"].includes(a[D].value));D+=1)a[D].code===2&&a[D].value.trim()&&S.add(a[D].value.toUpperCase());let j=0,C=!1;for(;w<a.length&&a[w].code===0;){if(a[w].value==="ENDTAB"){C=!0,h=w;break}if(a[w].value==="ENDSEC")break;j+=1;let D=w+1;for(;D<a.length&&a[D].code!==0;)D+=1;if(a[w].value!==y)throw new Error(`DXF export rejected: ${y} contains an unexpected ${a[w].value} record at line ${w*2+2}.`);let E=-1,A=0,N="";for(let P=w+1;P<D;P+=1){if(a[P].code===2){if(E>=0)throw new Error(`DXF export rejected: ${y} record has multiple name fields at line ${P*2+1}.`);E=P}a[P].code===70&&(A=Number(a[P].value)),a[P].code===3&&(N=a[P].value)}const B=E>=0?a[E].value:"",x=!B.trim();let R=B;if(y==="STYLE"&&(A&1)!==0){const P=(E>=0?E:w)*2+2;if(E<0)throw new Error(`DXF export rejected: STYLE shape-file record is missing its group-2 name field at line ${P}.`);if(!N.trim())throw new Error(`DXF export rejected: STYLE shape-file record has no font file in group 3 at line ${P}.`);if(B!==""){if(!r)throw new Error(`DXF export rejected: STYLE shape-file record must have an empty name per DXF format at line ${P}.`);l.push({table:y,line:P,previousName:B,name:""}),a[E].value="",R=""}}else if(x||!Xx(B,y,A)){const P=(E>=0?E:w)*2+2;if(!x||!["STYLE","DIMSTYLE"].includes(y))throw new Error(`DXF export rejected: ${y} table record ${j} has ${x?"a blank name":`an invalid name ${JSON.stringify(B)}`} at line ${P}. Correct the source value before exporting.`);if(!r)throw new Error(`DXF export rejected: ${y} table record ${j} still has ${x?"a blank name":"an invalid name"} after repair at line ${P}.`);const H=y==="DIMSTYLE"?"AUTOMATION_DIMSTYLE":"AUTOMATION_TEXTSTYLE";R=H;let fe=2;for(;S.has(R.toUpperCase());)R=`${H}_${fe++}`;if(S.add(R.toUpperCase()),l.push({table:y,line:P,previousName:B,name:R}),E>=0)a[E].value=R;else{let re=w+1;for(;re<D&&[5,105,330,100].includes(a[re].code);)re+=1;o.push({index:re,pair:{code:2,value:R}})}}if(R){const P=R.toUpperCase();if(b.has(P))throw new Error(`DXF export rejected: ${y} table record ${j} duplicates the name ${JSON.stringify(R)}.`);b.add(P)}w=D}if(!C)throw new Error(`DXF export rejected: the ${y} symbol table is missing ENDTAB.`)}if(!g)throw new Error("DXF export rejected: the output has no TABLES section to validate.");if(p)throw new Error("DXF export rejected: TABLES section is missing ENDSEC.");for(const h of["STYLE","DIMSTYLE"])if(!i.has(h))throw new Error(`DXF export rejected: the required ${h} symbol table is missing.`)}function Gx(a){return Ky(a).dxf}function Ky(a){const r=Gy(a),o=[],l=[];Hy(r,!0,o,l),o.sort((p,g)=>g.index-p.index);for(const p of o)r.splice(p.index,0,p.pair);const i=`${r.flatMap(({code:p,value:g})=>[String(p),g]).join(`\r
`)}\r
`;return op(i),{dxf:i,repairs:l}}function op(a){Hy(Gy(a),!1,[])}function Hx(a){const r=Number.parseInt(a.replace("#",""),16);return Number.isFinite(r)?r:0}function $2(a,r,o){if(!Number.isFinite(r)||!Number.isFinite(o)||r<=0||o<=0)throw new Error("A DXF page must have positive finite dimensions.");const l=[],i=(E,A)=>l.push(String(E),typeof A=="number"?hu(A):A);let p=256;const g=()=>(p++).toString(16).toUpperCase(),h=Yx(g,r,o),m=new Map;for(const E of a)if(E.kind==="polyline"&&E.dash?.some(A=>A>0)){const A=E.dash.map(N=>hu(N)).join(",");m.has(A)||m.set(A,{name:`PDF_DASH_${m.size+1}`,pattern:E.dash})}const u=E=>E.trim()||"0",y=E=>{i(5,g()),i(330,h.modelSpace),i(100,"AcDbEntity"),i(67,0),i(410,"Model"),i(8,u(E.layer));const A=Hx(E.color);(A>>16&255)<16&&(A>>8&255)<16&&(A&255)<16?i(62,7):(i(62,256),i(420,A)),E.opacity!==void 0&&E.opacity<1&&i(440,33554432|Math.round(Math.max(0,E.opacity)*255))};h.writeClasses(i),i(0,"SECTION"),i(2,"TABLES"),h.writeViewport(i);const b=h.beginTable(i,"LTYPE",3+m.size);for(const E of["BYBLOCK","BYLAYER","CONTINUOUS"])h.tableRecord(i,"LTYPE",b,"AcDbLinetypeTableRecord"),i(2,E),i(70,0),i(3,E==="CONTINUOUS"?"Solid line":""),i(72,65),i(73,0),i(40,0);for(const{name:E,pattern:A}of m.values()){const N=A.length%2?[...A,...A]:A;h.tableRecord(i,"LTYPE",b,"AcDbLinetypeTableRecord"),i(2,E),i(70,0),i(3,"Source PDF dash pattern"),i(72,65),i(73,N.length),i(40,N.reduce((B,x)=>B+Math.abs(x),0)),N.forEach((B,x)=>{i(49,x%2?-B:B),i(74,0)})}i(0,"ENDTAB");const w=[...new Set(["0",...a.map(E=>u(E.layer))])],S=h.beginTable(i,"LAYER",w.length);for(const E of w)h.tableRecord(i,"LAYER",S,"AcDbLayerTableRecord"),i(2,E),i(70,0),i(62,7),i(6,"CONTINUOUS"),i(290,1),i(370,-3),i(390,h.normalPlotStyle);i(0,"ENDTAB");const j=h.beginTable(i,"STYLE",1),C=h.tableRecord(i,"STYLE",j,"AcDbTextStyleTableRecord");i(2,fu),i(70,0),i(40,0),i(41,1),i(50,0),i(71,0),i(42,2.5),i(3,"txt.shx"),i(4,""),i(0,"ENDTAB"),h.writeRemainingTables(i,C),i(0,"ENDSEC"),h.writeBlocks(i),i(0,"SECTION"),i(2,"ENTITIES");for(const E of a)if(E.kind==="polyline"){if(E.points.length<2)continue;i(0,"LWPOLYLINE"),y(E),i(370,E.lineWeight);const A=E.dash?.length?m.get(E.dash.map(N=>hu(N)).join(",")):void 0;A&&i(6,A.name),i(100,"AcDbPolyline"),i(90,E.points.length),i(70,(E.closed?1:0)|(A?128:0));for(const N of E.points)i(10,N.x),i(20,N.y)}else if(E.kind==="hatch"){const A=E.loops.filter(N=>N.length>=3);if(!A.length)continue;i(0,"HATCH"),y(E),i(100,"AcDbHatch"),i(10,0),i(20,0),i(30,0),i(210,0),i(220,0),i(230,1),i(2,"SOLID"),i(70,1),i(71,0),i(91,A.length);for(const N of A){i(92,2),i(72,0),i(73,1),i(93,N.length);for(const B of N)i(10,B.x),i(20,B.y);i(97,0)}i(75,0),i(76,1),i(98,0)}else{if(!E.text.trim()||!(E.height>0))continue;const A=E.text.match(/[\s\S]{1,180}/g)??[];let N=0;for(const B of A){const x=N/E.text.length,R=(N+B.length)/E.text.length,L={x:E.start.x+(E.end.x-E.start.x)*x,y:E.start.y+(E.end.y-E.start.y)*x},P={x:E.start.x+(E.end.x-E.start.x)*R,y:E.start.y+(E.end.y-E.start.y)*R};i(0,"TEXT"),y(E),i(100,"AcDbText"),i(10,L.x),i(20,L.y),i(30,0),i(40,E.height),i(1,Vx(B)),i(50,E.rotation),i(7,fu),i(72,Math.hypot(P.x-L.x,P.y-L.y)>1e-8?5:0),i(11,P.x),i(21,P.y),i(31,0),i(100,"AcDbText"),i(73,0),N+=B.length}}i(0,"ENDSEC"),h.writeObjects(i),i(0,"EOF");const D=l.splice(0);return i(0,"SECTION"),i(2,"HEADER"),i(9,"$ACADVER"),i(1,"AC1018"),i(9,"$DWGCODEPAGE"),i(3,"ANSI_1252"),i(9,"$HANDSEED"),i(5,p.toString(16).toUpperCase()),i(9,"$INSUNITS"),i(70,4),i(9,"$MEASUREMENT"),i(70,1),i(9,"$INSBASE"),i(10,0),i(20,0),i(30,0),i(9,"$EXTMIN"),i(10,0),i(20,0),i(30,0),i(9,"$EXTMAX"),i(10,r),i(20,o),i(30,0),i(9,"$LIMMIN"),i(10,0),i(20,0),i(9,"$LIMMAX"),i(10,r),i(20,o),i(9,"$TILEMODE"),i(70,1),i(9,"$CTAB"),i(1,"Model"),i(9,"$CLAYER"),i(8,"0"),i(9,"$CELTYPE"),i(6,"BYLAYER"),i(9,"$TEXTSTYLE"),i(7,fu),i(9,"$CECOLOR"),i(62,256),i(9,"$LTSCALE"),i(40,1),i(9,"$CELTSCALE"),i(40,1),i(9,"$PSLTSCALE"),i(70,0),i(0,"ENDSEC"),Gx(`${l.concat(D).join(`\r
`)}\r
`)}const Kx=["LTYPE","LAYER","STYLE","APPID","DIMSTYLE","BLOCK_RECORD"];function Wx(a){const r=a.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF structural repair rejected: incomplete group-code/value pairs.");const o=[];for(let l=0;l<r.length;l+=2){const i=Number(r[l].trim());if(!/^\d+$/.test(r[l].trim())||!Number.isInteger(i))throw new Error(`DXF structural repair rejected: invalid group code at line ${l+1}.`);o.push({code:i,value:r[l+1]})}return o}function Zx(a){return`${a.flatMap(({code:r,value:o})=>[String(r),o]).join(`\r
`)}\r
`}function Qx(a){const r=Wx(a),o=new Map;let l="",i=-1;for(let C=0;C<r.length;C+=1){const D=r[C];if(D.code===0&&D.value.trim().toUpperCase()==="SECTION"&&r[C+1]?.code===2){l=r[++C].value.trim().toUpperCase();continue}if(D.code===0&&D.value.trim().toUpperCase()==="ENDSEC"){l==="TABLES"&&(i=C),l="";continue}if(l!=="TABLES"||D.code!==0||D.value.trim().toUpperCase()!=="TABLE")continue;const E=r[C+1]?.code===2?r[C+1].value.trim().toUpperCase():"";if(!E)throw new Error("DXF structural repair rejected: a TABLES record has no table name.");let A=C+1;for(;A<r.length&&!(r[A].code===0&&r[A].value.trim().toUpperCase()==="ENDTAB");)A+=1;if(A>=r.length)throw new Error(`DXF structural repair rejected: ${E} table is missing ENDTAB.`);o.set(E,{start:C,end:A,name:E})}if(i<0)throw new Error("DXF structural repair rejected: TABLES section is missing ENDSEC.");for(const C of Kx)if(!o.has(C))throw new Error(`DXF structural repair rejected: required ${C} symbol table is missing; re-save the source as a modern ASCII DXF.`);const p=new Set(r.filter(C=>C.code===5||C.code===105).map(C=>C.value.trim().toUpperCase()).filter(C=>/^[0-9A-F]+$/.test(C)));let g=0n;for(const C of p){const D=BigInt(`0x${C}`);D>g&&(g=D)}const h=()=>{do g+=1n;while(p.has(g.toString(16).toUpperCase()));const C=g.toString(16).toUpperCase();return p.add(C),C},m=(...C)=>{const D=[];for(let E=0;E<C.length;E+=2)D.push({code:Number(C[E]),value:String(C[E+1])});return D},u=[],y=C=>m(0,"TABLE",2,C,5,h(),330,"0",100,"AcDbSymbolTable",70,0,0,"ENDTAB"),b=()=>{const C=h();return m(0,"TABLE",2,"VPORT",5,C,330,"0",100,"AcDbSymbolTable",70,1,0,"VPORT",5,h(),330,C,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0,0,"ENDTAB")},w=["VPORT","VIEW","UCS"].filter(C=>!o.has(C));for(const C of w){const D=C==="VPORT"?b():y(C);r.splice(i,0,...D),i+=D.length,u.push(C)}const S=o.get("VPORT");if(S){let C=!1;for(let D=S.start+1;D<S.end;D+=1){if(r[D].code!==0||r[D].value.trim().toUpperCase()!=="VPORT")continue;let E=D+1;for(;E<S.end&&r[E].code!==0;)E+=1;if(r.slice(D,E).some(A=>A.code===2&&A.value.trim().toUpperCase()==="*ACTIVE")){C=!0;break}D=E-1}if(!C){const D=r.findIndex((x,R)=>R>S.start&&R<S.end&&x.code===0),E=r.slice(S.start+1,D).find(x=>x.code===5)?.value.trim();if(!E)throw new Error("DXF structural repair rejected: VPORT table header has no handle.");const A=r.findIndex((x,R)=>R>S.start&&R<D&&x.code===70);A<0?r.splice(D,0,{code:70,value:"1"}):r[A].value=String(Number(r[A].value)+1);const N=m(0,"VPORT",5,h(),330,E,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0),B=r.findIndex((x,R)=>R>S.start&&x.code===0&&x.value.trim().toUpperCase()==="ENDTAB");r.splice(B,0,...N),u.push("VPORT:*ACTIVE")}}if(!u.length)return{dxf:a,addedTables:u};const j=Zx(r);return op(j),{dxf:j,addedTables:u}}function Ps(a){if(a.byteLength>50*1024*1024)throw new Error("DXF repair limit is 50 MB per file. The original file was not changed.");let r="";const o=a[0]===239&&a[1]===187&&a[2]===191?3:0;for(let h=o;h<a.length;h+=16384)r+=String.fromCharCode(...a.subarray(h,h+16384));if(r.startsWith("AutoCAD Binary DXF"))throw new Error("Binary DXF cannot be repaired in this browser. Save an ASCII DXF copy in AutoCAD first.");const l=Ky(r),i=Qx(l.dxf);if(!l.repairs.length&&!i.addedTables.length)return{content:a,repairs:[],addedTables:[]};const p=i.addedTables.length?i.dxf:l.dxf,g=new Uint8Array(p.length);for(let h=0;h<p.length;h+=1)g[h]=p.charCodeAt(h);return{content:g,repairs:l.repairs,addedTables:i.addedTables}}function Jx(){const[a,r]=q.useState(""),[o,l]=q.useState(!1),[i,p]=q.useState(!1),g=q.useRef(null);async function h(m){l(!0),p(!1),r("");try{const u=Ps(new Uint8Array(await m.arrayBuffer())),y=new Blob([new Uint8Array(u.content)],{type:"application/dxf"}),b=URL.createObjectURL(y),w=document.createElement("a");w.href=b,w.download="REPAIRED_DRAWING.dxf",document.body.appendChild(w),w.click(),w.remove(),window.setTimeout(()=>URL.revokeObjectURL(b),1e4),r(`${u.repairs.length} symbol-table name(s) repaired; validated copy downloaded. Original file unchanged. AutoCAD open test still required.`)}catch(u){p(!0),r(u instanceof Error?u.message:"DXF repair failed. No download was created.")}finally{l(!1)}}return c.jsxs("div",{className:"dxf-repair-control",children:[c.jsx("button",{className:"btn",type:"button",disabled:o,onClick:()=>g.current?.click(),children:o?"Checking DXF…":"Repair an existing DXF"}),c.jsx("input",{ref:g,type:"file",accept:".dxf",disabled:o,"aria-label":"DXF to repair",hidden:!0,onChange:m=>{const u=m.target.files?.[0];m.target.value="",u&&h(u)}}),c.jsx("p",{children:"Local only · Repairs blank ordinary STYLE/DIMSTYLE names and preserves anonymous SHX shape-font STYLE records as DXF requires. Geometry, layers and SHX definitions stay unchanged. Maximum 50 MB."}),a&&c.jsx("p",{role:i?"alert":"status",children:a})]})}const ll=["itemTag","description","equipmentName","equipmentType","nominalDiameter","fluidService","lineSpec","fromTag","toTag","notes"];function lp(a){if(!Array.isArray(a)||a.length>64)throw new Error("Use at most 64 explicit attribute rules.");const r=new Set;return a.map(o=>{const l=o,i=typeof l?.attributeTag=="string"?l.attributeTag.trim().toUpperCase():"";if(!/^[A-Z][A-Z0-9_-]{0,63}$/.test(i)||r.has(i))throw new Error("Attribute tags must be unique, nonblank CAD field names (for example TAG_NO).");if(!ll.includes(l.edeField)||!["tag","text","number"].includes(l.valueType)||!["inside","above","below"].includes(l.textZone))throw new Error(`Attribute rule ${i} has an unsupported field, value type or text zone.`);return r.add(i),{attributeTag:i,edeField:l.edeField,valueType:l.valueType,textZone:l.textZone}})}function e1(a){const r=new Map;for(const o of a){const l=o.itemTag.trim().toUpperCase();if(!l)continue;const i=r.get(l)??new Set;i.add(o.stableId.toUpperCase()),r.set(l,i)}return[...r].filter(([,o])=>o.size>1).map(([o])=>o).sort()}const Wy=a=>`pid-cad-attribute-rules:v1:${a||"legends-default"}`;function Zy(a){const r=localStorage.getItem(Wy(a));return r?lp(JSON.parse(r)):[]}function t1({scope:a}){const[r,o]=q.useState(()=>{try{return Zy(a)}catch{return[]}}),[l,i]=q.useState(""),[p,g]=q.useState(!1);function h(m,u){o(y=>y.map((b,w)=>w===m?{...b,...u}:b)),g(!0),i("Unsaved changes: save these rules before downloading a runner.")}return c.jsxs("details",{className:"runner-group-hint",children:[c.jsx("summary",{children:"Block attributes · Arial Narrow text"}),c.jsx("p",{children:"Final text keeps its imported height and position. AutoCAD must have Arial Narrow installed. Attribute rules belong only to the selected mapping scope. No saved rule means review—not guessing."}),r.map((m,u)=>c.jsxs("fieldset",{style:{marginBlock:8},children:[c.jsxs("legend",{children:["Attribute rule ",u+1]}),c.jsxs("label",{children:["Block field ",c.jsx("input",{"aria-label":`Attribute tag ${u+1}`,value:m.attributeTag,onChange:y=>h(u,{attributeTag:y.target.value})})]}),c.jsxs("label",{children:["EDE value ",c.jsx("select",{value:m.edeField,onChange:y=>h(u,{edeField:y.target.value}),children:ll.map(y=>c.jsx("option",{children:y},y))})]}),c.jsxs("label",{children:["Expected type ",c.jsxs("select",{value:m.valueType,onChange:y=>h(u,{valueType:y.target.value}),children:[c.jsx("option",{value:"tag",children:"Tag"}),c.jsx("option",{value:"text",children:"Text"}),c.jsx("option",{value:"number",children:"Number"})]})]}),c.jsxs("label",{children:["PDF text location ",c.jsxs("select",{value:m.textZone,onChange:y=>h(u,{textZone:y.target.value}),children:[c.jsx("option",{value:"inside",children:"Inside symbol"}),c.jsx("option",{value:"above",children:"Above symbol"}),c.jsx("option",{value:"below",children:"Below symbol"})]})]}),c.jsx("button",{className:"btn subtle danger",type:"button",onClick:()=>{o(y=>y.filter((b,w)=>w!==u)),g(!0),i("Save to apply the removal.")},children:"Remove rule"})]},u)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>{o(m=>[...m,{attributeTag:"TAG_NO",edeField:"itemTag",valueType:"tag",textZone:"above"}]),g(!0),i("Save rules before downloading a runner.")},disabled:r.length>=64,children:"Add attribute rule"})," ",c.jsx("button",{className:"btn primary",type:"button",disabled:!p,onClick:()=>{try{const m=lp(r);localStorage.setItem(Wy(a),JSON.stringify(m)),o(m),g(!1),i("Rules saved locally for this mapping scope.")}catch(m){i(m instanceof Error?m.message:"Rules could not be saved.")}},children:"Save rules"}),l&&c.jsx("p",{role:"status",children:l})]})}var Ua=Uint8Array,Ls=Uint16Array,a1=Int32Array,Qy=new Ua([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Jy=new Ua([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),n1=new Ua([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),eb=function(a,r){for(var o=new Ls(31),l=0;l<31;++l)o[l]=r+=1<<a[l-1];for(var i=new a1(o[30]),l=1;l<30;++l)for(var p=o[l];p<o[l+1];++p)i[p]=p-o[l]<<5|l;return{b:o,r:i}},tb=eb(Qy,2),ab=tb.b,r1=tb.r;ab[28]=258,r1[258]=28;var s1=eb(Jy,0),o1=s1.b,Lu=new Ls(32768);for(var xt=0;xt<32768;++xt){var pr=(xt&43690)>>1|(xt&21845)<<1;pr=(pr&52428)>>2|(pr&13107)<<2,pr=(pr&61680)>>4|(pr&3855)<<4,Lu[xt]=((pr&65280)>>8|(pr&255)<<8)>>1}var Xo=(function(a,r,o){for(var l=a.length,i=0,p=new Ls(r);i<l;++i)a[i]&&++p[a[i]-1];var g=new Ls(r);for(i=1;i<r;++i)g[i]=g[i-1]+p[i-1]<<1;var h;if(o){h=new Ls(1<<r);var m=15-r;for(i=0;i<l;++i)if(a[i])for(var u=i<<4|a[i],y=r-a[i],b=g[a[i]-1]++<<y,w=b|(1<<y)-1;b<=w;++b)h[Lu[b]>>m]=u}else for(h=new Ls(l),i=0;i<l;++i)a[i]&&(h[i]=Lu[g[a[i]-1]++]>>15-a[i]);return h}),il=new Ua(288);for(var xt=0;xt<144;++xt)il[xt]=8;for(var xt=144;xt<256;++xt)il[xt]=9;for(var xt=256;xt<280;++xt)il[xt]=7;for(var xt=280;xt<288;++xt)il[xt]=8;var nb=new Ua(32);for(var xt=0;xt<32;++xt)nb[xt]=5;var l1=Xo(il,9,1),i1=Xo(nb,5,1),gu=function(a){for(var r=a[0],o=1;o<a.length;++o)a[o]>r&&(r=a[o]);return r},an=function(a,r,o){var l=r/8|0;return(a[l]|a[l+1]<<8)>>(r&7)&o},mu=function(a,r){var o=r/8|0;return(a[o]|a[o+1]<<8|a[o+2]<<16)>>(r&7)},c1=function(a){return(a+7)/8|0},ip=function(a,r,o){return(r==null||r<0)&&(r=0),(o==null||o>a.length)&&(o=a.length),new Ua(a.subarray(r,o))},d1=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ma=function(a,r,o){var l=new Error(r||d1[a]);if(l.code=a,Error.captureStackTrace&&Error.captureStackTrace(l,Ma),!o)throw l;return l},u1=function(a,r,o,l){var i=a.length,p=l?l.length:0;if(!i||r.f&&!r.l)return o||new Ua(0);var g=!o,h=g||r.i!=2,m=r.i;g&&(o=new Ua(i*3));var u=function(ht){var wt=o.length;if(ht>wt){var aa=new Ua(Math.max(wt*2,ht));aa.set(o),o=aa}},y=r.f||0,b=r.p||0,w=r.b||0,S=r.l,j=r.d,C=r.m,D=r.n,E=i*8;do{if(!S){y=an(a,b,1);var A=an(a,b+1,3);if(b+=3,A)if(A==1)S=l1,j=i1,C=9,D=5;else if(A==2){var R=an(a,b,31)+257,L=an(a,b+10,15)+4,P=R+an(a,b+5,31)+1;b+=14;for(var H=new Ua(P),fe=new Ua(19),re=0;re<L;++re)fe[n1[re]]=an(a,b+re*3,7);b+=L*3;for(var oe=gu(fe),Ae=(1<<oe)-1,he=Xo(fe,oe,1),re=0;re<P;){var de=he[an(a,b,Ae)];b+=de&15;var N=de>>4;if(N<16)H[re++]=N;else{var Y=0,Q=0;for(N==16?(Q=3+an(a,b,3),b+=2,Y=H[re-1]):N==17?(Q=3+an(a,b,7),b+=3):N==18&&(Q=11+an(a,b,127),b+=7);Q--;)H[re++]=Y}}var be=H.subarray(0,R),Te=H.subarray(R);C=gu(be),D=gu(Te),S=Xo(be,C,1),j=Xo(Te,D,1)}else Ma(1);else{var N=c1(b)+4,B=a[N-4]|a[N-3]<<8,x=N+B;if(x>i){m&&Ma(0);break}h&&u(w+B),o.set(a.subarray(N,x),w),r.b=w+=B,r.p=b=x*8,r.f=y;continue}if(b>E){m&&Ma(0);break}}h&&u(w+131072);for(var _=(1<<C)-1,J=(1<<D)-1,$=b;;$=b){var Y=S[mu(a,b)&_],G=Y>>4;if(b+=Y&15,b>E){m&&Ma(0);break}if(Y||Ma(2),G<256)o[w++]=G;else if(G==256){$=b,S=null;break}else{var le=G-254;if(G>264){var re=G-257,ge=Qy[re];le=an(a,b,(1<<ge)-1)+ab[re],b+=ge}var Ee=j[mu(a,b)&J],Me=Ee>>4;Ee||Ma(3),b+=Ee&15;var Te=o1[Me];if(Me>3){var ge=Jy[Me];Te+=mu(a,b)&(1<<ge)-1,b+=ge}if(b>E){m&&Ma(0);break}h&&u(w+131072);var Ie=w+le;if(w<Te){var Et=p-Te,pt=Math.min(Te,Ie);for(Et+w<0&&Ma(3);w<pt;++w)o[w]=l[Et+w]}for(;w<Ie;++w)o[w]=o[w-Te]}}r.l=S,r.p=$,r.b=w,r.f=y,S&&(y=1,r.m=C,r.d=j,r.n=D)}while(!y);return w!=o.length&&g?ip(o,0,w):o.subarray(0,w)},p1=new Ua(0),yn=function(a,r){return a[r]|a[r+1]<<8},Za=function(a,r){return(a[r]|a[r+1]<<8|a[r+2]<<16|a[r+3]<<24)>>>0},yu=function(a,r){return Za(a,r)+Za(a,r+4)*4294967296};function f1(a,r){return u1(a,{i:2},r&&r.out,r&&r.dictionary)}var Ou=typeof TextDecoder<"u"&&new TextDecoder,h1=0;try{Ou.decode(p1,{stream:!0}),h1=1}catch{}var g1=function(a){for(var r="",o=0;;){var l=a[o++],i=(l>127)+(l>223)+(l>239);if(o+i>a.length)return{s:r,r:ip(a,o-1)};i?i==3?(l=((l&15)<<18|(a[o++]&63)<<12|(a[o++]&63)<<6|a[o++]&63)-65536,r+=String.fromCharCode(55296|l>>10,56320|l&1023)):i&1?r+=String.fromCharCode((l&31)<<6|a[o++]&63):r+=String.fromCharCode((l&15)<<12|(a[o++]&63)<<6|a[o++]&63):r+=String.fromCharCode(l)}};function m1(a,r){if(r){for(var o="",l=0;l<a.length;l+=16384)o+=String.fromCharCode.apply(null,a.subarray(l,l+16384));return o}else{if(Ou)return Ou.decode(a);var i=g1(a),p=i.s,o=i.r;return o.length&&Ma(8),p}}var y1=function(a,r){return r+30+yn(a,r+26)+yn(a,r+28)},b1=function(a,r,o){var l=yn(a,r+28),i=yn(a,r+30),p=m1(a.subarray(r+46,r+46+l),!(yn(a,r+8)&2048)),g=r+46+l,h=v1(a,g,i,o,Za(a,r+20),Za(a,r+24),Za(a,r+42)),m=h[0],u=h[1],y=h[2];return[yn(a,r+10),m,u,p,g+i+yn(a,r+32),y]},v1=function(a,r,o,l,i,p,g){var h=i==4294967295,m=p==4294967295,u=g==4294967295,y=r+o,b=h+m+u;if(l&&b){for(;r+4<y;r+=4+yn(a,r+2))if(yn(a,r)==1)return[h?yu(a,r+4+8*m):i,m?yu(a,r+4):p,u?yu(a,r+4+8*(m+h)):g,1];l<2&&Ma(13)}return[i,p,g,0]};function km(a,r){for(var o={},l=a.length-22;Za(a,l)!=101010256;--l)(!l||a.length-l>65558)&&Ma(13);var i=yn(a,l+8);if(!i)return{};var p=Za(a,l+16),g=Za(a,l-20)==117853008;if(g){var h=Za(a,l-12);g=Za(a,h)==101075792,g&&(i=Za(a,h+32),p=Za(a,h+48))}for(var m=0;m<i;++m){var u=b1(a,p,g),y=u[0],b=u[1],w=u[2],S=u[3],j=u[4],C=u[5],D=y1(a,C);p=j,y?y==8?o[S]=f1(a.subarray(D,D+b),{out:new Ua(w)}):Ma(14,"unknown compression type "+y):o[S]=ip(a,D,D+b)}return o}const Rm=128,Ht=1e-9;function Fo(a,r,o){return(r[0]-a[0])*(o[1]-a[1])-(r[1]-a[1])*(o[0]-a[0])}function bi(a,r,o){return Math.abs(Fo(a,r,o))<=Ht&&o[0]>=Math.min(a[0],r[0])-Ht&&o[0]<=Math.max(a[0],r[0])+Ht&&o[1]>=Math.min(a[1],r[1])-Ht&&o[1]<=Math.max(a[1],r[1])+Ht}function E1(a,r,o,l){const i=Fo(a,r,o),p=Fo(a,r,l),g=Fo(o,l,a),h=Fo(o,l,r);return(i>Ht&&p<-Ht||i<-Ht&&p>Ht)&&(g>Ht&&h<-Ht||g<-Ht&&h>Ht)?!0:Math.abs(i)<=Ht&&bi(a,r,o)||Math.abs(p)<=Ht&&bi(a,r,l)||Math.abs(g)<=Ht&&bi(o,l,a)||Math.abs(h)<=Ht&&bi(o,l,r)}function w1(a){return a.reduce((r,o,l)=>{const i=a[(l+1)%a.length];return r+o[0]*i[1]-i[0]*o[1]},0)/2}function Br(a){const r=a.split(";").map(l=>l.trim()).filter(Boolean);if(r.length<3||r.length>Rm)throw new Error(`Enter 3-${Rm} valve-body outline points.`);const o=r.map((l,i)=>{const p=l.split(",").map(h=>h.trim());if(p.length!==2||!p[0]||!p[1])throw new Error(`Mask point ${i+1} must be written as X,Y.`);const g=[Number(p[0]),Number(p[1])];if(!g.every(Number.isFinite))throw new Error(`Mask point ${i+1} must contain finite X,Y values.`);return g});if(o.some((l,i)=>{const p=o[(i+1)%o.length];return Math.hypot(l[0]-p[0],l[1]-p[1])<=Ht}))throw new Error("The valve mask outline cannot contain duplicate adjacent points.");for(let l=0;l<o.length;l+=1){const i=(l+1)%o.length;for(let p=l+1;p<o.length;p+=1){const g=(p+1)%o.length;if(!(l===p||i===p||g===l)&&E1(o[l],o[i],o[p],o[g]))throw new Error("The valve mask outline must not cross or touch itself.")}}if(Math.abs(w1(o))<=Ht)throw new Error("The valve mask outline must enclose an area.");return o}function x1(a){return`(${a.map(([r,o])=>`(${r} ${o})`).join(" ")})`}const _u=["PFD","P&ID","Data sheet"],$r=["A0","A1","A2","A3","A4"],rb="pid-mapping-studio:cad-standards:v1";function Pu(){return{schemaVersion:"1.0.0",companyDefaults:{PFD:"A1","P&ID":"A1","Data sheet":"A4"},companyItems:[],projects:{},reviewCandidates:[],auditTrail:[]}}function S1(){return Pu()}function zr(a,r,o){return{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:a,detail:r,...o?{projectName:o}:{}}}function qu(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&typeof r.name=="string"&&typeof r.summary=="string"&&typeof r.sourceFile=="string"&&["titleBlock","layer","textStyle","linetype","dimensionStyle","symbol","directionArrow","legend"].includes(String(r.category))&&["extracted-dwg","approved-source-drawing","synthetic-demo"].includes(String(r.sourceKind))&&["company","project"].includes(String(r.scope))&&["reviewed","needs-review"].includes(String(r.reviewStatus))&&typeof r.canPromote=="boolean"&&Array.isArray(r.fields)&&r.fields.every(o=>typeof o?.label=="string"&&typeof o?.value=="string")&&(r.sheetSize===void 0||$r.includes(r.sheetSize))&&(r.scope!=="project"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function T1(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&qu(r.item)&&["company","project","unclassified"].includes(String(r.proposedScope))&&typeof r.sourceGroup=="string"&&["needs-review","approved","dismissed"].includes(String(r.status))&&(r.proposedScope==="company"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function sb(a){if(!a||typeof a!="object")return!1;const r=a;return r.schemaVersion!=="1.0.0"||!r.companyDefaults||!r.companyItems||!Array.isArray(r.companyItems)||!r.projects||typeof r.projects!="object"||r.reviewCandidates!==void 0&&!Array.isArray(r.reviewCandidates)||!Array.isArray(r.auditTrail)||!_u.every(o=>$r.includes(r.companyDefaults[o]))||!r.companyItems.every(o=>qu(o)&&o.scope==="company")||!(r.reviewCandidates??[]).every(o=>T1(o))||!r.auditTrail.every(o=>!!(o&&typeof o.id=="string"&&typeof o.at=="string"&&typeof o.action=="string"&&typeof o.detail=="string"))?!1:Object.entries(r.projects).every(([o,l])=>!!(o&&l&&typeof l.projectName=="string"&&l.defaults&&Object.entries(l.defaults).every(([i,p])=>_u.includes(i)&&$r.includes(p))&&Array.isArray(l.items)&&l.items.every(i=>qu(i)&&i.scope==="project"&&i.projectId===o)))}const Wo="cad-standards-changed";function Zo(a){if(!sb(a))throw new Error("CAD standards could not be saved because the library data is invalid.");try{window.localStorage.setItem(rb,JSON.stringify(a))}catch{throw new Error("This browser could not save the CAD standards locally. Export or back up the library before leaving this page.")}typeof window.dispatchEvent=="function"&&window.dispatchEvent(new Event(Wo))}function gn(){let a;try{a=window.localStorage.getItem(rb)}catch{throw new Error("This browser could not read its local CAD standards library.")}if(a===null){const m=Pu();return Zo(m),m}let r;try{r=JSON.parse(a)}catch{throw new Error("The locally saved CAD standards library is not valid JSON. It was left unchanged.")}if(!sb(r))throw new Error("The locally saved CAD standards library has invalid fields. It was left unchanged.");const o={...r,reviewCandidates:r.reviewCandidates??[]},l=Pu(),i=l.companyItems.filter(m=>!o.companyItems.some(u=>u.id===m.id)),p=new Set(o.reviewCandidates.map(m=>m.id)),g=l.reviewCandidates.filter(m=>!p.has(m.id));if(!i.length&&!g.length)return o;const h={...o,companyItems:[...o.companyItems,...i],reviewCandidates:[...o.reviewCandidates,...g],auditTrail:[...o.auditTrail,zr("Source mappings added to review queue",`${g.length} anonymized source mappings were added as pending review. Existing approvals, dismissals, and project settings were preserved.`)]};return Zo(h),h}function A1(a,r){return a.some(o=>o.category==="titleBlock"&&o.reviewStatus==="reviewed"&&(o.sheetSize===r||o.fields.some(l=>l.label==="Sheet size"&&l.value===r)))}function D1(a,r,o){if(a.companyDefaults[r]===o)return a;if(!A1(a.companyItems,o))throw new Error(`Approve a company title-block mapping for ${o} before making it a company default.`);return{...a,companyDefaults:{...a.companyDefaults,[r]:o},auditTrail:[zr("Company sheet-size default changed",`${r} changed to ${o} after an approved company title-block mapping was available.`),...a.auditTrail]}}function Oi(a,r,o,l=[],i){const p=a.reviewCandidates.find(S=>S.id===r);if(!p||p.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");if(o==="company"&&p.proposedScope!=="company")throw new Error("Only a source classified for the Legends Library can be approved there.");if(o==="project"&&p.proposedScope==="company")throw new Error("Legends Library source mappings must be approved to the Legends Library.");if(i&&!(p.item.sourceKind==="extracted-dwg"&&["symbol","directionArrow"].includes(p.item.category)&&["symbol","directionArrow"].includes(i)))throw new Error("Only an extracted CAD block can be reviewed as a Direction Arrow or a standard symbol.");const g=i??p.item.category;let h=[...p.item.fields.filter(S=>!l.some(j=>j.label===S.label)),...l];if(g==="directionArrow"&&(h=h.filter(S=>!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(S.label))),g==="symbol"&&p.item.sourceKind==="extracted-dwg"&&(!h.some(S=>S.label==="Fallback category"&&S.value.trim())||!h.some(S=>S.label==="Block asset ID"&&S.value.trim())))throw new Error("A fallback category and locally extracted block file are required before approving this symbol.");if(g==="symbol"&&p.item.sourceKind==="extracted-dwg"&&h.find(S=>S.label==="Fallback category")?.value.trim().toLowerCase()==="valve"){const S=h.find(j=>j.label==="Wipeout mask boundary")?.value??"";try{Br(S)}catch(j){throw new Error(`A reviewed valve-body mask outline is required before approving this valve. ${j instanceof Error?j.message:"Check the X,Y point list."}`)}}if(g==="symbol"&&p.item.sourceKind==="extracted-dwg"){const S=h.find(E=>E.label==="Target CAD layer")?.value.trim()??"",j=h.find(E=>E.label==="Source discipline")?.value.trim()??"";if(!(o==="company"?a.companyItems:[...p.projectId?a.projects[p.projectId]?.items??[]:[],...a.companyItems]).some(E=>{if(E.category!=="layer"||E.sourceKind!=="extracted-dwg"||E.reviewStatus!=="reviewed")return!1;const A=E.fields.find(x=>x.label==="CAD name")?.value.trim()??"",N=E.fields.find(x=>x.label==="Source discipline")?.value.trim()??"",B=j==="Shared"?N==="Shared":N==="Shared"||N===j;return S&&S.toUpperCase()!=="0"&&A.toLowerCase()===S.toLowerCase()&&B}))throw new Error("Approve a compatible non-zero CAD layer before approving this symbol. Layer 0 cannot be used for block placement.")}const m={...p.item,category:g,fields:h,scope:o,reviewStatus:"reviewed",canPromote:!1,...o==="project"?{projectId:p.projectId,projectName:p.projectName}:{projectId:void 0,projectName:void 0}};let u=a.companyItems,y=a.projects;if(o==="company")u=[...a.companyItems.filter(S=>S.id!==m.id),m];else{const S=p.projectId,j=p.projectName;if(!S||!j)throw new Error("The isolated project scope is not available for this mapping.");const C=a.projects[S]??{projectName:j,defaults:{},items:[]};y={...a.projects,[S]:{...C,projectName:j,items:[...C.items.filter(D=>D.id!==m.id),m]}}}const b=a.reviewCandidates.map(S=>S.id===r?{...S,status:"approved"}:S),w=o==="company"?"Legends Library":`isolated ${p.projectName} library`;return{...a,companyItems:u,projects:y,reviewCandidates:b,auditTrail:[zr("Source mapping approved",`${g} mapping ${p.item.name} was approved to ${w}.`,p.projectName),...a.auditTrail]}}const Iu={EQUIP:{layerName:"EQUIP",fallbackCategory:"equipment"},F_EQUIP:{layerName:"f_Equip",fallbackCategory:"equipment"},F_INST:{layerName:"f_Inst",fallbackCategory:"instrument"},F_PIPE_INLINE:{layerName:"f_Pipe_Inline",fallbackCategory:"inline component"}};function Mu(a,r){return a.item.fields.find(o=>o.label===r)?.value.trim()??""}function C1(a,r,o){return[...a.filter(l=>l.label!==r),{label:r,value:o}]}function N1(a){const l=Mu(a,"Extracted details").match(/(?:^|;)sourceLayer=([^;]*)/i)?.[1]??Mu(a,"Source insert layer(s)");return[...new Set(l.split(",").map(i=>i.trim().toUpperCase()).filter(Boolean))]}function Mr(a){return a.fields.find(r=>r.label==="CAD name")?.value.trim()??""}function k1(a){return a.fields.find(r=>r.label==="Source drawing ID")?.value.trim()??""}function jm(a){return a.fields.find(r=>r.label==="Extracted details")?.value.trim()??""}function ob(a){return a.fields.find(r=>r.label==="Source discipline")?.value.trim()??""}function R1(a,r){return a.category==="layer"&&a.sourceKind==="extracted-dwg"&&a.reviewStatus==="reviewed"&&a.scope==="company"&&Mr(a).toUpperCase()===r.toUpperCase()&&ob(a).toUpperCase()==="SHARED"}function j1(a,r,o){const l=new Set(r),i={unsupportedLayer:0,ambiguousLayer:0,missingAsset:0,missingLayer:0,invalidCandidate:0},p=a.reviewCandidates.filter(w=>w.status==="needs-review"&&w.proposedScope==="company"&&l.has(w.sourceGroup)),g=new Map,h=[];for(const w of p){if(w.item.category!=="symbol"||w.item.sourceKind!=="extracted-dwg")continue;const S=N1(w);if(S.length!==1){i.ambiguousLayer+=S.length>1?1:0,i.unsupportedLayer+=S.length===0?1:0;continue}const j=S[0].toUpperCase(),C=Iu[j];if(!C){i.unsupportedLayer+=1;continue}const D=Mu(w,"Block asset ID");if(!D||!o.has(D)){i.missingAsset+=1;continue}const E=`${w.sourceGroup}|${j}`;g.set(E,{sourceId:w.sourceGroup,layerName:C.layerName}),h.push({candidateId:w.id,sourceId:w.sourceGroup,layerKey:E,fallbackCategory:C.fallbackCategory,blockAssetId:D})}let m=a;const u=new Map;let y=0;for(const[w,S]of g){const j=m.companyItems.find(E=>E.category==="layer"&&E.sourceKind==="extracted-dwg"&&E.reviewStatus==="reviewed"&&k1(E)===S.sourceId&&Mr(E).toUpperCase()===S.layerName.toUpperCase());if(j){const E={...j,fields:C1(j.fields,"Source discipline","Shared")};m={...m,companyItems:m.companyItems.map(A=>A.id===j.id?E:A),reviewCandidates:m.reviewCandidates.map(A=>A.id===j.id?{...A,item:E}:A)},ob(j).toUpperCase()!=="SHARED"&&(y+=1),u.set(w,Mr(E));continue}const C=m.reviewCandidates.find(E=>E.status==="needs-review"&&E.proposedScope==="company"&&E.sourceGroup===S.sourceId&&E.item.category==="layer"&&E.item.sourceKind==="extracted-dwg"&&Mr(E.item).toUpperCase()===S.layerName.toUpperCase()),D=m.companyItems.find(E=>R1(E,S.layerName));if(D){const E=C?jm(C.item):"",A=jm(D);if(!C||E&&E===A){u.set(w,Mr(D));continue}i.invalidCandidate+=1;continue}if(!C){i.missingLayer+=1;continue}try{m=Oi(m,C.id,"company",[{label:"Source discipline",value:"Shared"}]);const E=m.companyItems.find(N=>N.id===C.item.id),A=Mr(E||C.item);u.set(w,A),y+=1}catch{i.invalidCandidate+=1}}let b=0;for(const w of h){const S=u.get(w.layerKey);if(!S){i.missingLayer+=1;continue}try{m=Oi(m,w.candidateId,"company",[{label:"Source discipline",value:"Shared"},{label:"Fallback category",value:w.fallbackCategory},{label:"Target CAD layer",value:S}]),b+=1}catch{i.invalidCandidate+=1}}return(y||b)&&(m={...m,auditTrail:[zr("Categorized CAD source batch approved",`${y} placement layer(s) and ${b} layer-matched symbol(s) approved for shared PFD/P&ID use.`),...a.auditTrail]}),{library:m,approvedLayers:y,approvedSymbols:b,skipped:i}}function L1(a,r,o){const l=a.companyItems.find(y=>y.id===r),i=Object.entries(a.projects).find(([,y])=>y.items.some(b=>b.id===r)),p=l??i?.[1].items.find(y=>y.id===r);if(!p||p.reviewStatus!=="reviewed")throw new Error("The selected approved CAD mapping is no longer available.");if(p.category!=="symbol"||p.sourceKind!=="extracted-dwg")throw new Error("Only reviewed extracted symbol mappings can be updated here.");const g=[...p.fields.filter(y=>!o.some(b=>b.label===y.label)),...o];if(g.find(y=>y.label==="Fallback category")?.value.trim().toLowerCase()==="valve")try{Br(g.find(y=>y.label==="Wipeout mask boundary")?.value??"")}catch(y){throw new Error(`A reviewed valve-body mask outline is required. ${y instanceof Error?y.message:"Check the X,Y point list."}`)}const h={...p,fields:g},m=l?a.companyItems.map(y=>y.id===r?h:y):a.companyItems,u=i?{...a.projects,[i[0]]:{...i[1],items:i[1].items.map(y=>y.id===r?h:y)}}:a.projects;return{...a,companyItems:m,projects:u,auditTrail:[zr("Reviewed valve mask updated",`The approved symbol mapping ${p.name} received a reviewed Wipeout mask outline.`,p.projectName),...a.auditTrail]}}function O1(a,r){const o=a.reviewCandidates.find(l=>l.id===r);if(!o||o.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");return{...a,reviewCandidates:a.reviewCandidates.map(l=>l.id===r?{...l,status:"dismissed"}:l),auditTrail:[zr("Source mapping dismissed",`${o.item.category} mapping ${o.item.name} was dismissed from the review queue.`,o.projectName),...a.auditTrail]}}function _1(a,r,o,l,i){if(!r.trim()||!o.trim())throw new Error("Choose a project before saving its title-block override.");const p=a.projects[r]??{defaults:{},items:[]},g={...p.defaults,[l]:i},h=[...a.projects[r]?.items??[],...a.companyItems].find(b=>b.category==="titleBlock"&&b.reviewStatus==="reviewed"&&(b.sheetSize===i||b.fields.some(w=>w.label==="Sheet size"&&w.value===i)));if(!h)throw new Error(`Approve a title-block mapping for ${i} before saving this project default.`);const m=`project-default-${l.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,u={...h,id:m,name:`${i} · ${l} project default`,summary:`Project-only choice for ${l}. The company default remains ${a.companyDefaults[l]}.`,scope:"project",projectId:r,projectName:o,canPromote:!1,fields:[...h.fields,{label:"Override purpose",value:l},{label:"Project choice",value:i},{label:"Company default",value:a.companyDefaults[l]}]};return{...a,projects:{...a.projects,[r]:{projectName:o,defaults:g,items:[...p.items.filter(b=>b.id!==m),u]}},auditTrail:[zr("Project title-block override saved",`${l} set to ${i}; company default remains ${a.companyDefaults[l]}. Other project libraries are unchanged.`,o),...a.auditTrail]}}const P1=(()=>{const a=new Uint32Array(256);for(let r=0;r<a.length;r+=1){let o=r;for(let l=0;l<8;l+=1)o=o&1?3988292384^o>>>1:o>>>1;a[r]=o>>>0}return a})();function q1(a){let r=4294967295;for(const o of a)r=P1[(r^o)&255]^r>>>8;return(r^4294967295)>>>0}function bu(a,r){const o=new Uint8Array(a);return r(new DataView(o.buffer)),o}function lb(a){if(a.length>65535)throw new Error("The local ZIP cannot contain more than 65,535 files.");const r=new TextEncoder,o=[],l=[];let i=0,p=0;for(const u of a){const y=r.encode(u.path),b=q1(u.content),w=bu(30+y.length,j=>{j.setUint32(0,67324752,!0),j.setUint16(4,20,!0),j.setUint16(6,2048,!0),j.setUint16(8,0,!0),j.setUint16(10,0,!0),j.setUint16(12,33,!0),j.setUint32(14,b,!0),j.setUint32(18,u.content.length,!0),j.setUint32(22,u.content.length,!0),j.setUint16(26,y.length,!0),j.setUint16(28,0,!0),new Uint8Array(j.buffer,30,y.length).set(y)});o.push(w,u.content);const S=bu(46+y.length,j=>{j.setUint32(0,33639248,!0),j.setUint16(4,20,!0),j.setUint16(6,20,!0),j.setUint16(8,2048,!0),j.setUint16(10,0,!0),j.setUint16(12,0,!0),j.setUint16(14,33,!0),j.setUint32(16,b,!0),j.setUint32(20,u.content.length,!0),j.setUint32(24,u.content.length,!0),j.setUint16(28,y.length,!0),j.setUint16(30,0,!0),j.setUint16(32,0,!0),j.setUint16(34,0,!0),j.setUint16(36,0,!0),j.setUint32(38,0,!0),j.setUint32(42,i,!0),new Uint8Array(j.buffer,46,y.length).set(y)});l.push(S),p+=S.length,i+=w.length+u.content.length}const g=bu(22,u=>{u.setUint32(0,101010256,!0),u.setUint16(4,0,!0),u.setUint16(6,0,!0),u.setUint16(8,a.length,!0),u.setUint16(10,a.length,!0),u.setUint32(12,p,!0),u.setUint32(16,i,!0),u.setUint16(20,0,!0)}),m=[...o,...l,g].map(u=>{const y=new ArrayBuffer(u.byteLength);return new Uint8Array(y).set(u),y});return new Blob(m,{type:"application/zip"})}function I1(a,r,o){return a.filter(l=>(l.discipline===r||l.discipline==="Shared")&&(!o||l.category==="company-standard"||l.projectLabel===o))}const M1="pid-mapping-studio-local-cad-library",$1=3,bn="source-drawings",vn="extracted-block-assets",vr="project-title-blocks",ib=100*1024*1024;function U1(a,r){if(!/\.dwg$/i.test(a.trim()))throw new Error("Upload a standalone AutoCAD DWG title block. Save a DWT as DWG first.");if(r.byteLength>ib)throw new Error("The project title block is larger than the 100 MB local upload limit.");const o=new TextDecoder().decode(r.subarray(0,6));if(!/^AC10\d{2}$/.test(o))throw new Error("This file does not have a recognized AutoCAD DWG header.")}function sn(){return typeof indexedDB>"u"?Promise.reject(new Error("This browser does not support local drawing-library storage.")):new Promise((a,r)=>{const o=indexedDB.open(M1,$1);o.onupgradeneeded=()=>{const l=o.result;l.objectStoreNames.contains(bn)||l.createObjectStore(bn,{keyPath:"id"}),l.objectStoreNames.contains(vn)||l.createObjectStore(vn,{keyPath:"id"}),l.objectStoreNames.contains(vr)||l.createObjectStore(vr,{keyPath:"projectId"})},o.onsuccess=()=>a(o.result),o.onerror=()=>r(o.error??new Error("The local drawing library could not be opened.")),o.onblocked=()=>r(new Error("The local drawing library is busy in another browser tab. Close the other tab and try again."))})}async function $u(){const a=await sn();try{return await new Promise((r,o)=>{const i=a.transaction(bn,"readonly").objectStore(bn).getAll();i.onsuccess=()=>{const p=i.result;r(p.map(({id:g,label:h,category:m,discipline:u,format:y,bytes:b,projectLabel:w})=>({id:g,label:h,category:m,discipline:u??"Shared",format:y??"DWG",bytes:b,...w?{projectLabel:w}:{}})).sort((g,h)=>g.label.localeCompare(h.label)))},i.onerror=()=>o(i.error??new Error("The local drawing library could not be read."))})}finally{a.close()}}async function Go(a){const r=await sn();try{return await new Promise((o,l)=>{const i=r.transaction(bn,"readonly").objectStore(bn).get(a);i.onsuccess=()=>{const p=i.result;if(!p){l(new Error("An approved mapping refers to a source DWG that is no longer in the local library."));return}o(new Uint8Array(p.content))},i.onerror=()=>l(i.error??new Error("The local source drawing could not be read."))})}finally{r.close()}}async function Uu(a,r=!1){if(!a.length)return;const o=await sn();try{await new Promise((l,i)=>{const p=o.transaction(vn,"readwrite"),g=p.objectStore(vn);for(const h of a){const m=g.get(h.id);m.onsuccess=()=>{const u=m.result;if(r&&u)return;const y={id:h.id,sourceId:h.sourceId,blockName:h.blockName,content:h.content.slice().buffer,format:h.format??u?.format??"DWG",...h.previewSvg===null?{}:h.previewSvg!==void 0?{previewSvg:h.previewSvg}:u?.previewSvg?{previewSvg:u.previewSvg}:{},...h.nearbyLabels!==void 0?{nearbyLabels:h.nearbyLabels}:u?.nearbyLabels?{nearbyLabels:u.nearbyLabels}:{},...h.labelMatchSkipped!==void 0?{labelMatchSkipped:h.labelMatchSkipped}:u?.labelMatchSkipped!==void 0?{labelMatchSkipped:u.labelMatchSkipped}:{},...h.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:h.labelMatchAmbiguous}:u?.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:u.labelMatchAmbiguous}:{},...h.sourcePlacements!==void 0?{sourcePlacements:h.sourcePlacements}:u?.sourcePlacements?{sourcePlacements:u.sourcePlacements}:{},...h.geometryDescriptor!==void 0?{geometryDescriptor:h.geometryDescriptor}:u?.geometryDescriptor?{geometryDescriptor:u.geometryDescriptor}:{}};g.put(y)}}p.oncomplete=()=>l(),p.onerror=()=>i(p.error??new Error("Extracted symbol blocks could not be saved locally.")),p.onabort=()=>i(p.error??new Error("Saving extracted symbol blocks was cancelled."))})}finally{o.close()}}async function B1(){const a=await sn();try{return await new Promise((r,o)=>{const l=a.transaction(vn,"readonly").objectStore(vn).getAllKeys();l.onsuccess=()=>r(new Set(l.result.map(String))),l.onerror=()=>o(l.error??new Error("Local block availability could not be checked."))})}finally{a.close()}}async function cb(a){const r=await sn();try{return await new Promise((o,l)=>{const i=r.transaction(vn,"readonly").objectStore(vn).get(a);i.onsuccess=()=>{const p=i.result;if(!p){o({nearbyLabels:[],labelMatchSkipped:!1});return}o({format:p.format??"DWG",...p.previewSvg?{previewSvg:p.previewSvg}:{},nearbyLabels:p.nearbyLabels??[],labelMatchSkipped:p.labelMatchSkipped??!1,...p.labelMatchAmbiguous?{labelMatchAmbiguous:!0}:{},...p.sourcePlacements?{sourcePlacements:p.sourcePlacements}:{},...p.geometryDescriptor?{geometryDescriptor:p.geometryDescriptor}:{}})},i.onerror=()=>l(i.error??new Error("The local block preview could not be read."))})}finally{r.close()}}async function db(a){const r=await sn();try{return await new Promise((o,l)=>{const i=r.transaction(vn,"readonly").objectStore(vn).get(a);i.onsuccess=()=>{const p=i.result;if(!p){l(new Error("An approved symbol block is missing from this browser’s local CAD library. Re-import its extraction package."));return}o(new Uint8Array(p.content))},i.onerror=()=>l(i.error??new Error("The approved symbol block could not be read locally."))})}finally{r.close()}}async function Xi(a){if(!a.trim())return null;const r=await sn();try{return await new Promise((o,l)=>{const i=r.transaction(vr,"readonly").objectStore(vr).get(a);i.onsuccess=()=>o(i.result??null),i.onerror=()=>l(i.error??new Error("The project title block could not be read locally."))})}finally{r.close()}}function cp(a,r){if(a.workspaceType&&a.workspaceType!==r)throw new Error(`This title block belongs to ${a.workspaceType}, not ${r}. Upload a separate title block for each workspace.`);return{projectId:a.projectId,workspaceType:r,titleBlockId:a.titleBlockId??`legacy-${a.projectId}-${a.uploadedAt}`,titleBlockPath:a.titleBlockPath??"PROJECT_TITLE_BLOCK.dwg",xrefName:a.xrefName??"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:a.expectedSize??{widthMm:841,heightMm:594},version:a.version??1,bytes:a.bytes,uploadedAt:a.uploadedAt}}async function Lm(a,r){const o=await Xi(a);return o?cp(o,r):null}async function F1(a,r){const o=await Xi(a);return o?{...cp(o,r),content:new Uint8Array(o.content)}:null}async function z1(a,r,o,l){if(!a.trim())throw new Error("Select a project before uploading its title block.");if(!["PFD","P&ID"].includes(r))throw new Error("Choose either a PFD or P&ID workspace for this title block.");U1(o,l);const i=await Xi(a);if(i?.workspaceType&&i.workspaceType!==r)throw new Error(`This folder already has a ${i.workspaceType} title block. Keep PFD and P&ID title blocks in separate workspaces.`);const p=new Date().toISOString(),g=(i?.version??(i?1:0))+1,h={projectId:a,workspaceType:r,titleBlockId:globalThis.crypto?.randomUUID?.()??`title-block-${Date.now()}`,titleBlockPath:"PROJECT_TITLE_BLOCK.dwg",xrefName:"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:{widthMm:841,heightMm:594},version:g,bytes:l.byteLength,uploadedAt:p,content:l.slice().buffer},m=await sn();try{await new Promise((u,y)=>{const b=m.transaction(vr,"readwrite");b.objectStore(vr).put(h),b.oncomplete=()=>u(),b.onerror=()=>y(b.error??new Error("The project title block could not be saved locally.")),b.onabort=()=>y(b.error??new Error("Saving the project title block was cancelled."))})}finally{m.close()}return{...cp(h,r)}}async function Y1(a,r){if(!a.trim())return;const o=await Xi(a);if(o?.workspaceType&&o.workspaceType!==r)throw new Error(`This title block belongs to ${o.workspaceType}; it was not removed from the ${r} workspace.`);const l=await sn();try{await new Promise((i,p)=>{const g=l.transaction(vr,"readwrite");g.objectStore(vr).delete(a),g.oncomplete=()=>i(),g.onerror=()=>p(g.error??new Error("The project title block could not be removed locally.")),g.onabort=()=>p(g.error??new Error("Removing the project title block was cancelled."))})}finally{l.close()}}async function V1(a){if(!a.length)return;const r=await sn();try{await new Promise((o,l)=>{const i=r.transaction(bn,"readwrite"),p=i.objectStore(bn);for(const g of a){const h=g.content.slice().buffer,{content:m,...u}=g;p.put({...u,content:h,createdAt:new Date().toISOString()})}i.oncomplete=()=>o(),i.onerror=()=>l(i.error??new Error("The local drawing library could not be saved.")),i.onabort=()=>l(i.error??new Error("The local drawing library save was cancelled."))})}finally{r.close()}}async function X1(a,r){const o=await sn();try{await new Promise((l,i)=>{const p=o.transaction(bn,"readwrite"),g=p.objectStore(bn),h=g.get(a);h.onsuccess=()=>{const m=h.result;if(!m){p.abort(),i(new Error("That source drawing is no longer in the local library."));return}g.put({...m,...r,projectLabel:r.projectLabel?.trim()||void 0})},h.onerror=()=>i(h.error??new Error("The source drawing could not be updated.")),p.oncomplete=()=>l(),p.onerror=()=>i(p.error??new Error("The source drawing update failed.")),p.onabort=()=>i(p.error??new Error("The source drawing update was cancelled."))})}finally{o.close()}}const G1=String.raw`
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
`,H1=G1+String.raw`; Local CAD standards extractor. Run in Windows AutoCAD on each source drawing.
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
`;function K1(a,r){return`SOURCE_${String(a+1).padStart(3,"0")}.${r==="DXF"?"dxf":"dwg"}`}async function W1(a){if(a.length===0)throw new Error("There are no eligible local source drawings to package.");const r=[{path:"EXTRACT_CAD_STANDARDS.lsp",content:new TextEncoder().encode(H1)},{path:"README_LOCAL_EXTRACTION.txt",content:new TextEncoder().encode(`LOCAL CAD STANDARDS EXTRACTION

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
`)}],o=await Promise.all(a.map(l=>Go(l.id)));return a.forEach((l,i)=>{const p=l.format==="DXF"?Ps(o[i]):null;r.push({path:K1(i,l.format),content:p?.content??o[i]})}),lb(r)}function Om(a,r,o){let l=0,i=0;const p=new Map([...o].map(([h,m])=>[h.toUpperCase(),m])),g=a.reviewCandidates.map(h=>{if(h.sourceGroup!==r||h.status!=="needs-review"||h.proposedScope!=="company"||h.item.category!=="symbol"||h.item.sourceKind!=="extracted-dwg")return h;const m=h.item.fields,u=m.find(C=>C.label==="Block name")?.value.trim()??"";if(!u)return h;const y=p.get(u.toUpperCase())?.sourcePlacements??[],b=[...new Set(y.map(C=>C.layer.trim()).filter(Boolean))];b.length&&(i+=1);const S=(m.find(C=>C.label==="Extracted details")?.value??"").split(";").filter(C=>!/^\s*sourceLayer=/i.test(C)).join(";"),j=[...m.filter(C=>!["Extracted details","Source insert layer(s)","Source insert rotation(s)"].includes(C.label)),{label:"Extracted details",value:S+(b.length?`;sourceLayer=${b.join(", ")}`:"")},...b.length?[{label:"Source insert layer(s)",value:b.join(", ")},{label:"Source insert rotation(s)",value:y.map(C=>`${C.rotationDegrees}° on ${C.layer} (${C.count})`).join("; ")}]:[]];return JSON.stringify(m)===JSON.stringify(j)?h:(l+=1,{...h,item:{...h.item,fields:j}})});return{library:l?{...a,reviewCandidates:g}:a,updatedRecords:l,recoveredSymbols:i}}class Z1{constructor(r){this._pointer=0,this._eof=!1,this._data=r}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return this._pointer++,r.value=_m(r.code,this._data[this._pointer].trim()),this._pointer++,r.code===0&&r.value==="EOF"&&(this._eof=!0),this.lastReadGroup=r,r}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return r.value=_m(r.code,this._data[this._pointer+1].trim()),r}rewind(r=1){this._pointer=this._pointer-r*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}function _m(a,r){return a<=9?r:a>=10&&a<=59?parseFloat(r):a>=60&&a<=99?parseInt(r):a>=100&&a<=109?r:a>=110&&a<=149?parseFloat(r):a>=160&&a<=179?parseInt(r):a>=210&&a<=239?parseFloat(r):a>=270&&a<=289?parseInt(r):a>=290&&a<=299?Q1(r):a>=300&&a<=369?r:a>=370&&a<=389?parseInt(r):a>=390&&a<=399?r:a>=400&&a<=409?parseInt(r):a>=410&&a<=419?r:a>=420&&a<=429?parseInt(r):a>=430&&a<=439?r:a>=440&&a<=459?parseInt(r):a>=460&&a<=469?parseFloat(r):a>=470&&a<=481||a===999||a>=1e3&&a<=1009?r:a>=1010&&a<=1059?parseFloat(r):a>=1060&&a<=1071?parseInt(r):(console.log("WARNING: Group code does not have a defined type: %j",{code:a,value:r}),r)}function Q1(a){if(a==="0")return!1;if(a==="1")return!0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")}const ub=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function J1(a){return ub[a]}function Ke(a){const r={};a.rewind();let o=a.next(),l=o.code;if(r.x=o.value,l+=10,o=a.next(),o.code!=l)throw new Error("Expected code for point value to be "+l+" but got "+o.code+".");return r.y=o.value,l+=10,o=a.next(),o.code!=l?(a.rewind(),r):(r.z=o.value,r)}function ca(a,r,o){switch(r.code){case 0:a.type=r.value;break;case 5:a.handle=r.value;break;case 6:a.lineType=r.value;break;case 8:a.layer=r.value;break;case 48:a.lineTypeScale=r.value;break;case 60:a.visible=r.value===0;break;case 62:a.colorIndex=r.value,a.color=J1(Math.abs(r.value));break;case 67:a.inPaperSpace=r.value!==0;break;case 100:break;case 101:for(;r.code!=0;)r=o.next();o.rewind();break;case 330:a.ownerHandle=r.value;break;case 347:a.materialObjectHandle=r.value;break;case 370:a.lineweight=r.value;break;case 420:a.color=r.value;break;case 1e3:a.extendedData=a.extendedData||{},a.extendedData.customStrings=a.extendedData.customStrings||[],a.extendedData.customStrings.push(r.value);break;case 1001:a.extendedData=a.extendedData||{},a.extendedData.applicationName=r.value;break;default:return!1}return!0}class eS{constructor(){this.ForEntityName="3DFACE"}parseEntity(r,o){const l={type:o.value,vertices:[]};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 70:l.shape=(o.value&1)===1,l.hasContinuousLinetypePattern=(o.value&128)===128;break;case 10:l.vertices=tS(r,o),o=r.lastReadGroup;break;default:ca(l,o,r);break}o=r.next()}return l}}function tS(a,r){var o=[],l=!1,i=!1,p=4;for(let h=0;h<=p;h++){for(var g={};!a.isEOF()&&!(r.code===0||i);){switch(r.code){case 10:case 11:case 12:case 13:if(l){i=!0;continue}g.x=r.value,l=!0;break;case 20:case 21:case 22:case 23:g.y=r.value;break;case 30:case 31:case 32:case 33:g.z=r.value;break;default:return o}r=a.next()}o.push(g),l=!1,i=!1}return a.rewind(),o}class aS{constructor(){this.ForEntityName="ARC"}parseEntity(r,o){const l={type:o.value};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 10:l.center=Ke(r);break;case 40:l.radius=o.value;break;case 50:l.startAngle=Math.PI/180*o.value;break;case 51:l.endAngle=Math.PI/180*o.value,l.angleLength=l.endAngle-l.startAngle;break;case 210:l.extrusionDirectionX=o.value;break;case 220:l.extrusionDirectionY=o.value;break;case 230:l.extrusionDirectionZ=o.value;break;default:ca(l,o,r);break}o=r.next()}return l}}class nS{constructor(){this.ForEntityName="ATTDEF"}parseEntity(r,o){var l={type:o.value,scale:1,textStyle:"STANDARD"};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 1:l.text=o.value;break;case 2:l.tag=o.value;break;case 3:l.prompt=o.value;break;case 7:l.textStyle=o.value;break;case 10:l.startPoint=Ke(r);break;case 11:l.endPoint=Ke(r);break;case 39:l.thickness=o.value;break;case 40:l.textHeight=o.value;break;case 41:l.scale=o.value;break;case 50:l.rotation=o.value;break;case 51:l.obliqueAngle=o.value;break;case 70:l.invisible=!!(o.value&1),l.constant=!!(o.value&2),l.verificationRequired=!!(o.value&4),l.preset=!!(o.value&8);break;case 71:l.backwards=!!(o.value&2),l.mirrored=!!(o.value&4);break;case 72:l.horizontalJustification=o.value;break;case 73:l.fieldLength=o.value;break;case 74:l.verticalJustification=o.value;break;case 100:break;case 210:l.extrusionDirectionX=o.value;break;case 220:l.extrusionDirectionY=o.value;break;case 230:l.extrusionDirectionZ=o.value;break;default:ca(l,o,r);break}o=r.next()}return l}}class rS{constructor(){this.ForEntityName="CIRCLE"}parseEntity(r,o){const l={type:o.value};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 10:l.center=Ke(r);break;case 40:l.radius=o.value;break;case 50:l.startAngle=Math.PI/180*o.value;break;case 51:const i=Math.PI/180*o.value;i<l.startAngle?l.angleLength=i+2*Math.PI-l.startAngle:l.angleLength=i-l.startAngle,l.endAngle=i;break;default:ca(l,o,r);break}o=r.next()}return l}}class sS{constructor(){this.ForEntityName="DIMENSION"}parseEntity(r,o){const l={type:o.value};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 2:l.block=o.value;break;case 10:l.anchorPoint=Ke(r);break;case 11:l.middleOfText=Ke(r);break;case 12:l.insertionPoint=Ke(r);break;case 13:l.linearOrAngularPoint1=Ke(r);break;case 14:l.linearOrAngularPoint2=Ke(r);break;case 15:l.diameterOrRadiusPoint=Ke(r);break;case 16:l.arcPoint=Ke(r);break;case 70:l.dimensionType=o.value;break;case 71:l.attachmentPoint=o.value;break;case 42:l.actualMeasurement=o.value;break;case 1:l.text=o.value;break;case 50:l.angle=o.value;break;default:ca(l,o,r);break}o=r.next()}return l}}class oS{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(r,o){const l={type:o.value};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 10:l.center=Ke(r);break;case 11:l.majorAxisEndPoint=Ke(r);break;case 40:l.axisRatio=o.value;break;case 41:l.startAngle=o.value;break;case 42:l.endAngle=o.value;break;case 2:l.name=o.value;break;default:ca(l,o,r);break}o=r.next()}return l}}class lS{constructor(){this.ForEntityName="INSERT"}parseEntity(r,o){const l={type:o.value};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 2:l.name=o.value;break;case 41:l.xScale=o.value;break;case 42:l.yScale=o.value;break;case 43:l.zScale=o.value;break;case 10:l.position=Ke(r);break;case 50:l.rotation=o.value;break;case 70:l.columnCount=o.value;break;case 71:l.rowCount=o.value;break;case 44:l.columnSpacing=o.value;break;case 45:l.rowSpacing=o.value;break;case 210:l.extrusionDirection=Ke(r);break;default:ca(l,o,r);break}o=r.next()}return l}}class iS{constructor(){this.ForEntityName="LINE"}parseEntity(r,o){const l={type:o.value,vertices:[]};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 10:l.vertices.unshift(Ke(r));break;case 11:l.vertices.push(Ke(r));break;case 210:l.extrusionDirection=Ke(r);break;case 100:break;default:ca(l,o,r);break}o=r.next()}return l}}class cS{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(r,o){const l={type:o.value,vertices:[]};let i=0;for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 38:l.elevation=o.value;break;case 39:l.depth=o.value;break;case 70:l.shape=(o.value&1)===1,l.hasContinuousLinetypePattern=(o.value&128)===128;break;case 90:i=o.value;break;case 10:l.vertices=dS(i,r);break;case 43:o.value!==0&&(l.width=o.value);break;case 210:l.extrusionDirectionX=o.value;break;case 220:l.extrusionDirectionY=o.value;break;case 230:l.extrusionDirectionZ=o.value;break;default:ca(l,o,r);break}o=r.next()}return l}}function dS(a,r){if(!a||a<=0)throw Error("n must be greater than 0 verticies");const o=[];let l=!1,i=!1,p=r.lastReadGroup;for(let g=0;g<a;g++){const h={};for(;!r.isEOF()&&!(p.code===0||i);){switch(p.code){case 10:if(l){i=!0;continue}h.x=p.value,l=!0;break;case 20:h.y=p.value;break;case 30:h.z=p.value;break;case 40:h.startWidth=p.value;break;case 41:h.endWidth=p.value;break;case 42:p.value!=0&&(h.bulge=p.value);break;default:return r.rewind(),l&&o.push(h),r.rewind(),o}p=r.next()}o.push(h),l=!1,i=!1}return r.rewind(),o}class uS{constructor(){this.ForEntityName="MTEXT"}parseEntity(r,o){const l={type:o.value};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 3:l.text?l.text+=o.value:l.text=o.value;break;case 1:l.text?l.text+=o.value:l.text=o.value;break;case 10:l.position=Ke(r);break;case 11:l.directionVector=Ke(r);break;case 40:l.height=o.value;break;case 41:l.width=o.value;break;case 50:l.rotation=o.value;break;case 71:l.attachmentPoint=o.value;break;case 72:l.drawingDirection=o.value;break;default:ca(l,o,r);break}o=r.next()}return l}}class pS{constructor(){this.ForEntityName="POINT"}parseEntity(r,o){const i={type:o.value};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 10:i.position=Ke(r);break;case 39:i.thickness=o.value;break;case 210:i.extrusionDirection=Ke(r);break;case 100:break;default:ca(i,o,r);break}o=r.next()}return i}}class fS{constructor(){this.ForEntityName="VERTEX"}parseEntity(r,o){var l={type:o.value};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 10:l.x=o.value;break;case 20:l.y=o.value;break;case 30:l.z=o.value;break;case 40:break;case 41:break;case 42:o.value!=0&&(l.bulge=o.value);break;case 70:l.curveFittingVertex=(o.value&1)!==0,l.curveFitTangent=(o.value&2)!==0,l.splineVertex=(o.value&8)!==0,l.splineControlPoint=(o.value&16)!==0,l.threeDPolylineVertex=(o.value&32)!==0,l.threeDPolylineMesh=(o.value&64)!==0,l.polyfaceMeshVertex=(o.value&128)!==0;break;case 50:break;case 71:l.faceA=o.value;break;case 72:l.faceB=o.value;break;case 73:l.faceC=o.value;break;case 74:l.faceD=o.value;break;default:ca(l,o,r);break}o=r.next()}return l}}class hS{constructor(){this.ForEntityName="POLYLINE"}parseEntity(r,o){var l={type:o.value,vertices:[]};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 10:break;case 20:break;case 30:break;case 39:l.thickness=o.value;break;case 40:break;case 41:break;case 70:l.shape=(o.value&1)!==0,l.includesCurveFitVertices=(o.value&2)!==0,l.includesSplineFitVertices=(o.value&4)!==0,l.is3dPolyline=(o.value&8)!==0,l.is3dPolygonMesh=(o.value&16)!==0,l.is3dPolygonMeshClosed=(o.value&32)!==0,l.isPolyfaceMesh=(o.value&64)!==0,l.hasContinuousLinetypePattern=(o.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:l.extrusionDirection=Ke(r);break;default:ca(l,o,r);break}o=r.next()}return l.vertices=gS(r,o),l}}function gS(a,r){const o=new fS,l=[];for(;!a.isEOF();)if(r.code===0){if(r.value==="VERTEX")l.push(o.parseEntity(a,r)),r=a.lastReadGroup;else if(r.value==="SEQEND"){mS(a,r);break}}return l}function mS(a,r){const o={type:r.value};for(r=a.next();!a.isEOF()&&r.code!=0;)ca(o,r,a),r=a.next();return o}class yS{constructor(){this.ForEntityName="SOLID"}parseEntity(r,o){const l={type:o.value,points:[]};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 10:l.points[0]=Ke(r);break;case 11:l.points[1]=Ke(r);break;case 12:l.points[2]=Ke(r);break;case 13:l.points[3]=Ke(r);break;case 210:l.extrusionDirection=Ke(r);break;default:ca(l,o,r);break}o=r.next()}return l}}class bS{constructor(){this.ForEntityName="SPLINE"}parseEntity(r,o){const l={type:o.value};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 10:l.controlPoints||(l.controlPoints=[]),l.controlPoints.push(Ke(r));break;case 11:l.fitPoints||(l.fitPoints=[]),l.fitPoints.push(Ke(r));break;case 12:l.startTangent=Ke(r);break;case 13:l.endTangent=Ke(r);break;case 40:l.knotValues||(l.knotValues=[]),l.knotValues.push(o.value);break;case 70:(o.value&1)!=0&&(l.closed=!0),(o.value&2)!=0&&(l.periodic=!0),(o.value&4)!=0&&(l.rational=!0),(o.value&8)!=0&&(l.planar=!0),(o.value&16)!=0&&(l.planar=!0,l.linear=!0);break;case 71:l.degreeOfSplineCurve=o.value;break;case 72:l.numberOfKnots=o.value;break;case 73:l.numberOfControlPoints=o.value;break;case 74:l.numberOfFitPoints=o.value;break;case 210:l.normalVector=Ke(r);break;default:ca(l,o,r);break}o=r.next()}return l}}class vS{constructor(){this.ForEntityName="TEXT"}parseEntity(r,o){const l={type:o.value};for(o=r.next();!r.isEOF()&&o.code!==0;){switch(o.code){case 10:l.startPoint=Ke(r);break;case 11:l.endPoint=Ke(r);break;case 40:l.textHeight=o.value;break;case 41:l.xScale=o.value;break;case 50:l.rotation=o.value;break;case 1:l.text=o.value;break;case 72:l.halign=o.value;break;case 73:l.valign=o.value;break;default:ca(l,o,r);break}o=r.next()}return l}}var Ai={exports:{}},ES=Ai.exports,Pm;function wS(){return Pm||(Pm=1,(function(a){(function(r,o){a.exports?a.exports=o():r.log=o()})(ES,function(){var r=function(){},o="undefined",l=typeof window!==o&&typeof window.navigator!==o&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"],p={},g=null;function h(C,D){var E=C[D];if(typeof E.bind=="function")return E.bind(C);try{return Function.prototype.bind.call(E,C)}catch{return function(){return Function.prototype.apply.apply(E,[C,arguments])}}}function m(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function u(C){return C==="debug"&&(C="log"),typeof console===o?!1:C==="trace"&&l?m:console[C]!==void 0?h(console,C):console.log!==void 0?h(console,"log"):r}function y(){for(var C=this.getLevel(),D=0;D<i.length;D++){var E=i[D];this[E]=D<C?r:this.methodFactory(E,C,this.name)}if(this.log=this.debug,typeof console===o&&C<this.levels.SILENT)return"No console available for logging"}function b(C){return function(){typeof console!==o&&(y.call(this),this[C].apply(this,arguments))}}function w(C,D,E){return u(C)||b.apply(this,arguments)}function S(C,D){var E=this,A,N,B,x="loglevel";typeof C=="string"?x+=":"+C:typeof C=="symbol"&&(x=void 0);function R(re){var oe=(i[re]||"silent").toUpperCase();if(!(typeof window===o||!x)){try{window.localStorage[x]=oe;return}catch{}try{window.document.cookie=encodeURIComponent(x)+"="+oe+";"}catch{}}}function L(){var re;if(!(typeof window===o||!x)){try{re=window.localStorage[x]}catch{}if(typeof re===o)try{var oe=window.document.cookie,Ae=encodeURIComponent(x),he=oe.indexOf(Ae+"=");he!==-1&&(re=/^([^;]+)/.exec(oe.slice(he+Ae.length+1))[1])}catch{}return E.levels[re]===void 0&&(re=void 0),re}}function P(){if(!(typeof window===o||!x)){try{window.localStorage.removeItem(x)}catch{}try{window.document.cookie=encodeURIComponent(x)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function H(re){var oe=re;if(typeof oe=="string"&&E.levels[oe.toUpperCase()]!==void 0&&(oe=E.levels[oe.toUpperCase()]),typeof oe=="number"&&oe>=0&&oe<=E.levels.SILENT)return oe;throw new TypeError("log.setLevel() called with invalid level: "+re)}E.name=C,E.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},E.methodFactory=D||w,E.getLevel=function(){return B??N??A},E.setLevel=function(re,oe){return B=H(re),oe!==!1&&R(B),y.call(E)},E.setDefaultLevel=function(re){N=H(re),L()||E.setLevel(re,!1)},E.resetLevel=function(){B=null,P(),y.call(E)},E.enableAll=function(re){E.setLevel(E.levels.TRACE,re)},E.disableAll=function(re){E.setLevel(E.levels.SILENT,re)},E.rebuild=function(){if(g!==E&&(A=H(g.getLevel())),y.call(E),g===E)for(var re in p)p[re].rebuild()},A=H(g?g.getLevel():"WARN");var fe=L();fe!=null&&(B=H(fe)),y.call(E)}g=new S,g.getLogger=function(D){if(typeof D!="symbol"&&typeof D!="string"||D==="")throw new TypeError("You must supply a name when creating a logger.");var E=p[D];return E||(E=p[D]=new S(D,g.methodFactory)),E};var j=typeof window!==o?window.log:void 0;return g.noConflict=function(){return typeof window!==o&&window.log===g&&(window.log=j),g},g.getLoggers=function(){return p},g.default=g,g})})(Ai)),Ai.exports}var xS=wS();const He=tl(xS);He.setLevel("error");function SS(a){a.registerEntityHandler(eS),a.registerEntityHandler(aS),a.registerEntityHandler(nS),a.registerEntityHandler(rS),a.registerEntityHandler(sS),a.registerEntityHandler(oS),a.registerEntityHandler(lS),a.registerEntityHandler(iS),a.registerEntityHandler(cS),a.registerEntityHandler(uS),a.registerEntityHandler(pS),a.registerEntityHandler(hS),a.registerEntityHandler(yS),a.registerEntityHandler(bS),a.registerEntityHandler(vS)}class pb{constructor(){this._entityHandlers={},SS(this)}parse(r){return typeof r=="string"?this._parse(r):(console.error("Cannot read dxf source of type `"+typeof r),null)}registerEntityHandler(r){const o=new r;this._entityHandlers[o.ForEntityName]=o}parseSync(r){return this.parse(r)}parseStream(r){let o="";const l=this;return new Promise((i,p)=>{r.on("data",g=>{o+=g}),r.on("end",()=>{try{i(l._parse(o))}catch(g){p(g)}}),r.on("error",g=>{p(g)})})}_parse(r){const o={};let l=0;const i=r.split(/\r\n|\r|\n/g),p=new Z1(i);if(!p.hasNext())throw Error("Empty file");const g=this;let h;function m(){for(h=p.next();!p.isEOF();)if(h.code===0&&h.value==="SECTION"){if(h=p.next(),h.code!==2){console.error("Unexpected code %s after 0:SECTION",fb(h)),h=p.next();continue}h.value==="HEADER"?(He.debug("> HEADER"),o.header=u(),He.debug("<")):h.value==="BLOCKS"?(He.debug("> BLOCKS"),o.blocks=y(),He.debug("<")):h.value==="ENTITIES"?(He.debug("> ENTITIES"),o.entities=N(!1),He.debug("<")):h.value==="TABLES"?(He.debug("> TABLES"),o.tables=w(),He.debug("<")):h.value==="EOF"?He.debug("EOF"):He.warn("Skipping section '%s'",h.value)}else h=p.next()}function u(){let R=null,L=null;const P={};for(h=p.next();;){if(fn(h,0,"ENDSEC")){R&&(P[R]=L);break}else h.code===9?(R&&(P[R]=L),R=h.value):h.code===10?L={x:h.value}:h.code===20?L.y=h.value:h.code===30?L.z=h.value:L=h.value;h=p.next()}return h=p.next(),P}function y(){const R={};for(h=p.next();h.value!=="EOF"&&!fn(h,0,"ENDSEC");)if(fn(h,0,"BLOCK")){He.debug("block {");const L=b();He.debug("}"),x(L),L.name?R[L.name]=L:He.error('block with handle "'+L.handle+'" is missing a name.')}else Ir(h),h=p.next();return R}function b(){const R={};for(h=p.next();h.value!=="EOF";){switch(h.code){case 1:R.xrefPath=h.value,h=p.next();break;case 2:R.name=h.value,h=p.next();break;case 3:R.name2=h.value,h=p.next();break;case 5:R.handle=h.value,h=p.next();break;case 8:R.layer=h.value,h=p.next();break;case 10:R.position=B(h),h=p.next();break;case 67:R.paperSpace=!!(h.value&&h.value==1),h=p.next();break;case 70:h.value!=0&&(R.type=h.value),h=p.next();break;case 100:h=p.next();break;case 330:R.ownerHandle=h.value,h=p.next();break;case 0:if(h.value=="ENDBLK")break;R.entities=N(!0);break;default:Ir(h),h=p.next()}if(fn(h,0,"ENDBLK")){h=p.next();break}}return R}function w(){const R={};for(h=p.next();h.value!=="EOF"&&!fn(h,0,"ENDSEC");)fn(h,0,"TABLE")?(h=p.next(),A[h.value]?(He.debug(h.value+" Table {"),R[A[h.value].tableName]=j(h),He.debug("}")):He.debug("Unhandled Table "+h.value)):h=p.next();return h=p.next(),R}const S="ENDTAB";function j(R){const L=A[R.value],P={};let H=0;for(h=p.next();!fn(h,0,S);)switch(h.code){case 5:P.handle=h.value,h=p.next();break;case 330:P.ownerHandle=h.value,h=p.next();break;case 100:h.value==="AcDbSymbolTable"||Ir(h),h=p.next();break;case 70:H=h.value,h=p.next();break;case 0:h.value===L.dxfSymbolName?P[L.tableRecordsProperty]=L.parseTableRecords():(Ir(h),h=p.next());break;default:Ir(h),h=p.next()}const fe=P[L.tableRecordsProperty];if(fe){let re=(()=>{if(fe.constructor===Array)return fe.length;if(typeof fe=="object")return Object.keys(fe).length})();H!==re&&He.warn("Parsed "+re+" "+L.dxfSymbolName+"'s but expected "+H)}return h=p.next(),P}function C(){const R=[];let L={};for(He.debug("ViewPort {"),h=p.next();!fn(h,0,S);)switch(h.code){case 2:L.name=h.value,h=p.next();break;case 10:L.lowerLeftCorner=B(h),h=p.next();break;case 11:L.upperRightCorner=B(h),h=p.next();break;case 12:L.center=B(h),h=p.next();break;case 13:L.snapBasePoint=B(h),h=p.next();break;case 14:L.snapSpacing=B(h),h=p.next();break;case 15:L.gridSpacing=B(h),h=p.next();break;case 16:L.viewDirectionFromTarget=B(h),h=p.next();break;case 17:L.viewTarget=B(h),h=p.next();break;case 42:L.lensLength=h.value,h=p.next();break;case 43:L.frontClippingPlane=h.value,h=p.next();break;case 44:L.backClippingPlane=h.value,h=p.next();break;case 45:L.viewHeight=h.value,h=p.next();break;case 50:L.snapRotationAngle=h.value,h=p.next();break;case 51:L.viewTwistAngle=h.value,h=p.next();break;case 79:L.orthographicType=h.value,h=p.next();break;case 110:L.ucsOrigin=B(h),h=p.next();break;case 111:L.ucsXAxis=B(h),h=p.next();break;case 112:L.ucsYAxis=B(h),h=p.next();break;case 110:L.ucsOrigin=B(h),h=p.next();break;case 281:L.renderMode=h.value,h=p.next();break;case 281:L.defaultLightingType=h.value,h=p.next();break;case 292:L.defaultLightingOn=h.value,h=p.next();break;case 330:L.ownerHandle=h.value,h=p.next();break;case 63:case 421:case 431:L.ambientColor=h.value,h=p.next();break;case 0:h.value==="VPORT"&&(He.debug("}"),R.push(L),He.debug("ViewPort {"),L={},h=p.next());break;default:Ir(h),h=p.next();break}return He.debug("}"),R.push(L),R}function D(){const R={};let L={},P=0,H;for(He.debug("LType {"),h=p.next();!fn(h,0,"ENDTAB");)switch(h.code){case 2:L.name=h.value,H=h.value,h=p.next();break;case 3:L.description=h.value,h=p.next();break;case 73:P=h.value,P>0&&(L.pattern=[]),h=p.next();break;case 40:L.patternLength=h.value,h=p.next();break;case 49:L.pattern.push(h.value),h=p.next();break;case 0:He.debug("}"),P>0&&P!==L.pattern.length&&He.warn("lengths do not match on LTYPE pattern"),R[H]=L,L={},He.debug("LType {"),h=p.next();break;default:h=p.next()}return He.debug("}"),R[H]=L,R}function E(){const R={};let L={},P;for(He.debug("Layer {"),h=p.next();!fn(h,0,"ENDTAB");)switch(h.code){case 2:L.name=h.value,P=h.value,h=p.next();break;case 62:L.visible=h.value>=0,L.colorIndex=Math.abs(h.value),L.color=TS(L.colorIndex),h=p.next();break;case 70:L.frozen=(h.value&1)!=0||(h.value&2)!=0,h=p.next();break;case 0:h.value==="LAYER"&&(He.debug("}"),R[P]=L,He.debug("Layer {"),L={},P=void 0,h=p.next());break;default:Ir(h),h=p.next();break}return He.debug("}"),R[P]=L,R}const A={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:C},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:D},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:E}};function N(R){const L=[],P=R?"ENDBLK":"ENDSEC";for(R||(h=p.next());;)if(h.code===0){if(h.value===P)break;const H=g._entityHandlers[h.value];if(H!=null){He.debug(h.value+" {");const fe=H.parseEntity(p,h);h=p.lastReadGroup,He.debug("}"),x(fe),L.push(fe)}else{He.warn("Unhandled entity "+h.value),h=p.next();continue}}else h=p.next();return P=="ENDSEC"&&(h=p.next()),L}function B(R){const L={};let P=R.code;if(L.x=R.value,P+=10,R=p.next(),R.code!=P)throw new Error("Expected code for point value to be "+P+" but got "+R.code+".");return L.y=R.value,P+=10,R=p.next(),R.code!=P?(p.rewind(),L):(L.z=R.value,L)}function x(R){if(!R)throw new TypeError("entity cannot be undefined or null");R.handle||(R.handle=l++)}return m(),o}}function fn(a,r,o){return a.code===r&&a.value===o}function Ir(a){He.debug("unhandled group "+fb(a))}function fb(a){return a.code+":"+a.value}function TS(a){return ub[a]}const vi=360,_o=210,Cs=16,AS="#78d8b0",DS=[1,0,0,1,0,0],CS=new Set(["0","PIPE_PRI","F_PIPE_PRI","PIPE_PRIMARY","F_PIPE_PRIMARY","PRIMARY PIPING"]);function NS(a){const r=String(a??"").trim().toUpperCase().replace(/\s+/g," ");return!r||CS.has(r)}function dp(a){return/\barrow\b/i.test(a.replace(/[_-]+/g," "))}function hb(a){return dp(a)}function ba(a){if(!a||typeof a!="object")return null;const r=a;return typeof r.x=="number"&&Number.isFinite(r.x)&&typeof r.y=="number"&&Number.isFinite(r.y)?{x:r.x,y:r.y}:null}function gb(a,r){return{x:a[0]*r.x+a[2]*r.y+a[4],y:a[1]*r.x+a[3]*r.y+a[5]}}function kS(a,r){return[a[0]*r[0]+a[2]*r[1],a[1]*r[0]+a[3]*r[1],a[0]*r[2]+a[2]*r[3],a[1]*r[2]+a[3]*r[3],a[0]*r[4]+a[2]*r[5]+a[4],a[1]*r[4]+a[3]*r[5]+a[5]]}function qt(a,r){return typeof a=="number"&&Number.isFinite(a)?a:r}function Po(a){return Array.isArray(a)?a.map(ba).filter(r=>r!==null):[]}function Bu(a){const r=ba(a);return r?{...r,z:qt(a.z,0)}:null}function RS(a,r,o){const l={},i=(h,m)=>{const u=Bu(m);u&&(l[h]=u)},p=(h,m)=>{Array.isArray(m)&&(l[h]=m.flatMap(u=>{const y=Bu(u);return y?[y]:[]}))},g=(h,m)=>{typeof m=="number"&&Number.isFinite(m)&&(l[h]=m)};if(a==="LINE")p("vertices",r.vertices);else if(a==="ARC"||a==="CIRCLE")i("center",r.center),g("radius",r.radius),a==="ARC"&&(g("startAngle",r.startAngle),g("endAngle",r.endAngle));else if(a==="LWPOLYLINE"||a==="POLYLINE")Array.isArray(r.vertices)&&(l.vertices=r.vertices.flatMap(h=>{if(!h||typeof h!="object")return[];const m=h;return typeof m.x!="number"||typeof m.y!="number"||!Number.isFinite(m.x)||!Number.isFinite(m.y)?[]:[{x:m.x,y:m.y,z:qt(m.z,0),bulge:qt(m.bulge,0)}]})),l.closed=r.shape===!0||(Number(r.shape)&1)===1;else if(a==="ELLIPSE")i("center",r.center),i("majorAxisEndPoint",r.majorAxisEndPoint),g("axisRatio",r.axisRatio),g("startAngle",r.startAngle),g("endAngle",r.endAngle);else if(a==="SPLINE"){p("fitPoints",r.fitPoints),p("controlPoints",r.controlPoints);for(const h of["degreeOfSplineCurve","closed","periodic","knots","weights"]){const m=r[h];(typeof m=="number"||typeof m=="boolean"||Array.isArray(m)&&m.every(u=>typeof u=="number"&&Number.isFinite(u)))&&(l[h]=m)}}else return null;return{type:a,transform:[...o],geometry:l}}function mb(a){return typeof a!="string"?"":a.replace(/\\P/gi," ").replace(/\\[A-Za-z][^;]*;/g,"").replace(/[{}]/g,"").replace(/\s+/g," ").trim()}function jS(a,r,o){return a.layer&&a.layer!=="0"?r.get(a.layer)??o:o}function LS(a){const r=Math.max(0,Math.min(16777215,Math.trunc(a))),o=`#${r.toString(16).padStart(6,"0")}`,l=r>>16&255,i=r>>8&255,p=r&255;return l+i+p<72?"#d5e1e8":o}function OS(a){const r=new Map;for(const o of Object.values(a.tables?.layer?.layers??{}))Number.isFinite(o.color)&&r.set(o.name,LS(o.color));return r}function _S(a,r,o,l){const i=l-o;if(!Number.isFinite(i))return[];const p=(i%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,g=Math.max(8,Math.min(96,Math.ceil(Math.abs(p)/(Math.PI/24))));return Array.from({length:g+1},(h,m)=>{const u=o+p*m/g;return{x:a.x+Math.cos(u)*r,y:a.y+Math.sin(u)*r}})}function PS(a,r){if(!Array.isArray(a))return[];const o=a.map(p=>{if(!p||typeof p!="object")return null;const g=p,h=ba(g);return h?{...h,bulge:qt(g.bulge,0)}:null}).filter(p=>p!==null);if(o.length<2)return o.map(({x:p,y:g})=>({x:p,y:g}));const l=[{x:o[0].x,y:o[0].y}],i=r?o.length:o.length-1;for(let p=0;p<i;p+=1){const g=o[p],h=o[(p+1)%o.length],m=g.bulge,u=h.x-g.x,y=h.y-g.y,b=Math.hypot(u,y);if(Math.abs(m)<1e-5||b<1e-8){l.push({x:h.x,y:h.y});continue}const w=4*Math.atan(m),S=b*(1-m*m)/(4*m),j={x:(g.x+h.x)/2-y/b*S,y:(g.y+h.y)/2+u/b*S},C=Math.atan2(g.y-j.y,g.x-j.x),D=Math.max(4,Math.min(48,Math.ceil(Math.abs(w)/(Math.PI/16))));for(let E=1;E<=D;E+=1){const A=C+w*E/D;l.push({x:j.x+Math.cos(A)*Math.hypot(g.x-j.x,g.y-j.y),y:j.y+Math.sin(A)*Math.hypot(g.x-j.x,g.y-j.y)})}}return r&&l.length>1&&l.pop(),l}function qS(a,r){const o=ba(a.position)??{x:0,y:0},l=ba(r.position)??{x:0,y:0},i=qt(a.xScale,1),p=qt(a.yScale,1),g=qt(a.rotation,0)*Math.PI/180,h=Math.cos(g),m=Math.sin(g),u=h*i,y=m*i,b=-m*p,w=h*p;return[u,y,b,w,o.x-u*l.x-b*l.y,o.y-y*l.x-w*l.y]}function fr(a,r,o,l,i){const p=r.map(g=>gb(l,g));p.length>=2&&a.paths.push({points:p,closed:o,color:i})}function yb(a,r,o,l,i,p,g=new Set,h=0){if(h>8){p.unsupported.add("nested block depth");return}for(const m of a){if(!m)continue;const u=m,y=String(u.type??"").toUpperCase();if(!y||u.visible===!1)continue;const b=jS(u,o,i);if(y==="INSERT"){const S=String(u.name??""),j=Object.entries(r).find(([A])=>A.toUpperCase()===S.toUpperCase())?.[1];if(!j||g.has(S.toUpperCase())){p.unsupported.add(y);continue}p.nestedInsertCount+=1;const C=kS(l,qS(u,j)),D=u.layer&&u.layer!=="0"?o.get(u.layer)??i:i,E=new Set(g);E.add(S.toUpperCase()),yb(j.entities??[],r,o,C,D,p,E,h+1);continue}const w=RS(y,u,l);if(w&&p.primitives.push(w),y==="LINE"){fr(p,Po(u.vertices),!1,l,b);continue}if(y==="CIRCLE"||y==="ARC"){const S=ba(u.center),j=qt(u.radius,0);if(!S||j<=0)continue;const C=y==="ARC"?qt(u.startAngle,0):0,D=y==="ARC"?qt(u.endAngle,Math.PI*2):Math.PI*2;fr(p,_S(S,j,C,D),y==="CIRCLE",l,b);continue}if(y==="ELLIPSE"){const S=ba(u.center),j=ba(u.majorAxisEndPoint),C=qt(u.axisRatio,1);if(!S||!j||C<=0)continue;const D=qt(u.startAngle,0),E=qt(u.endAngle,Math.PI*2)-D;if(!Number.isFinite(E))continue;const A=(E%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,N=D+A,B=Math.max(12,Math.min(96,Math.ceil((N-D)*24))),x=Array.from({length:B+1},(R,L)=>{const P=D+(N-D)*L/B;return{x:S.x+j.x*Math.cos(P)-j.y*C*Math.sin(P),y:S.y+j.y*Math.cos(P)+j.x*C*Math.sin(P)}});fr(p,x,Math.abs(N-D-Math.PI*2)<.03,l,b);continue}if(y==="LWPOLYLINE"||y==="POLYLINE"){const S=u.shape===!0||(Number(u.shape)&1)===1,j=PS(u.vertices,S);fr(p,j,S,l,b);continue}if(y==="SOLID"||y==="3DFACE"){const S=Po(u.points??u.vertices);fr(p,S,!0,l,b);continue}if(y==="SPLINE"){const S=Po(u.fitPoints).length>=2?Po(u.fitPoints):Po(u.controlPoints);fr(p,S,u.closed===!0,l,b),S.length&&p.unsupported.add("SPLINE approximation");continue}if(y==="TEXT"||y==="MTEXT"||y==="ATTDEF"){const S=mb(u.text),j=ba(u.startPoint)??ba(u.position);if(!j||!S)continue;const C=gb(l,j),D=Math.max(1,qt(u.textHeight,qt(u.height,2.5))),E=Math.max(Math.hypot(l[0],l[1]),Math.hypot(l[2],l[3]),.1);p.texts.push({point:C,text:S,height:D*E,rotation:qt(u.rotation,0)-Math.atan2(l[1],l[0])*180/Math.PI,color:b});continue}if(y==="POINT"){const S=ba(u.position);S&&(fr(p,[{x:S.x-.5,y:S.y},{x:S.x+.5,y:S.y}],!1,l,b),fr(p,[{x:S.x,y:S.y-.5},{x:S.x,y:S.y+.5}],!1,l,b));continue}p.unsupported.add(y)}}function bb(a){const r=[...a.paths.flatMap(o=>o.points),...a.texts.map(o=>o.point)];return r.length?{minX:Math.min(...r.map(o=>o.x)),minY:Math.min(...r.map(o=>o.y)),maxX:Math.max(...r.map(o=>o.x)),maxY:Math.max(...r.map(o=>o.y))}:null}function IS(a){const r=bb(a);if(!r)return;const o=Math.max(r.maxX-r.minX,1e-6),l=Math.max(r.maxY-r.minY,1e-6),i=Math.min((vi-Cs*2)/o,(_o-Cs*2)/l),p=y=>Cs+(y-r.minX)*i+(vi-Cs*2-o*i)/2,g=y=>_o-Cs-(y-r.minY)*i-(_o-Cs*2-l*i)/2,h=y=>y.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;"),m=a.paths.map(y=>{const b=y.points.map((w,S)=>`${S?"L":"M"}${p(w.x).toFixed(2)} ${g(w.y).toFixed(2)}`);return y.closed&&b.push("Z"),`<path d="${b.join(" ")}" fill="none" stroke="${y.color}" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>`}).join(""),u=a.texts.map(y=>{const b=p(y.point.x),w=g(y.point.y),S=Math.max(4,Math.min(20,y.height*i));return`<text x="${b.toFixed(2)}" y="${w.toFixed(2)}" fill="${y.color}" font-family="Arial,sans-serif" font-size="${S.toFixed(2)}" transform="rotate(${-y.rotation.toFixed(2)} ${b.toFixed(2)} ${w.toFixed(2)})">${h(y.text)}</text>`}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vi} ${_o}" role="img"><rect width="${vi}" height="${_o}" fill="#0d1722"/>${m}${u}</svg>`}function MS(a,r,o){const l=ba(o.position)??{x:0,y:0},i=ba(r.position)??{x:0,y:0},p=qt(o.xScale,1),g=qt(o.yScale,1),h=qt(o.rotation,0)*Math.PI/180,m=Math.cos(h),u=Math.sin(h),y=[{x:a.minX,y:a.minY},{x:a.minX,y:a.maxY},{x:a.maxX,y:a.minY},{x:a.maxX,y:a.maxY}].map(b=>{const w=(b.x-i.x)*p,S=(b.y-i.y)*g;return{x:l.x+m*w-u*S,y:l.y+u*w+m*S}});return{minX:Math.min(...y.map(b=>b.x)),minY:Math.min(...y.map(b=>b.y)),maxX:Math.max(...y.map(b=>b.x)),maxY:Math.max(...y.map(b=>b.y))}}function $S(a){return ba(a.startPoint)??ba(a.position)}function US(a){return mb(a.text)}function vb(a,r){return r.map(o=>o).filter(o=>o.type?.toUpperCase()==="INSERT"&&String(o.name??"").toUpperCase()===a.toUpperCase())}function BS(a){const r=new Map;for(const o of a){const l=String(o.layer??"0").trim()||"0",i=qt(o.rotation,0),p=Math.round((i%360+360)%360),g=`${l.toUpperCase()}|${p}`,h=r.get(g);h?h.count+=1:r.set(g,{layer:l,rotationDegrees:p,count:1})}return[...r.values()].sort((o,l)=>o.layer.localeCompare(l.layer)||o.rotationDegrees-l.rotationDegrees)}function FS(a,r,o,l){const i=vb(a,l),p=i.filter(b=>!NS(b.layer)),g=i.length>0&&p.length===0;if(hb(a))return{labels:[],skippedContextOnly:g};const h=l.map(b=>b).filter(b=>["TEXT","MTEXT","ATTRIB"].includes(String(b.type??"").toUpperCase())).map(b=>({text:US(b),point:$S(b),height:Math.max(1,qt(b.textHeight,qt(b.height,2.5)))})).filter(b=>!!(b.text&&b.point)&&!dp(b.text)),m=[];for(const b of p){const w=MS(o,r,b),S=(w.minY+w.maxY)/2,j=Math.max(w.maxX-w.minX,1),C=Math.max(w.maxY-w.minY,1),E=h.map(P=>{const H=P.point.x-w.maxX,fe=Math.abs(P.point.y-S),re=Math.max(j*8,P.height*40,30),oe=Math.max(C*1.1,P.height*7);return{...P,dx:H,dy:fe,score:Math.max(0,H)+fe*1.75,maxGap:re,maxVertical:oe}}).filter(P=>P.dx>=-P.height*.5&&P.dx<=P.maxGap&&P.dy<=P.maxVertical).filter(P=>P.dx>=0).sort((P,H)=>P.score-H.score),A=E.length?E:h.map(P=>({...P,dx:P.point.x-w.maxX,dy:Math.abs(P.point.y-S),score:Math.hypot(P.point.x-(w.minX+w.maxX)/2,P.point.y-S),maxGap:Math.max(j*10,P.height*50,40),maxVertical:Math.max(C*2,P.height*10)})).filter(P=>P.score<=Math.max(j*8,C*10,P.height*60)).sort((P,H)=>P.score-H.score),N=A[0];if(!N)continue;const B=Math.max(N.height*2,j*.04,.5),x=Math.max(N.height*7,C*.8),R=A.filter(P=>Math.abs(P.point.x-N.point.x)<=B&&Math.abs(P.point.y-N.point.y)<=x).sort((P,H)=>H.point.y-P.point.y).slice(0,8),L=[...new Set(R.map(P=>P.text))].join(" · ");L&&m.push({text:L,score:N.score})}const u=new Map;for(const b of m){const w=b.text.toLowerCase().replace(/\s+/g," ").trim(),S=u.get(w);(S===void 0||b.score<S.score)&&u.set(w,b)}const y=p.length>1&&u.size>1;return{labels:y?[]:[...u.values()].sort((b,w)=>b.score-w.score).slice(0,4).map(b=>b.text),skippedContextOnly:g,...y?{ambiguous:!0}:{}}}function _i(a,r){let o;try{o=new pb().parseSync(a)}catch(g){const h=g instanceof Error?g.message:"Unknown DXF parser error";throw new Error(`The overview DXF could not be read: ${h}`)}if(!o?.blocks||!Array.isArray(o.entities))throw new Error("The overview DXF does not contain readable block and model-space data.");const l=OS(o),i=new Map(Object.entries(o.blocks).map(([g,h])=>[g.toUpperCase(),h])),p=new Map;for(const g of new Set(r)){const h=i.get(g.toUpperCase());if(!h||g.startsWith("*"))continue;const m={paths:[],texts:[],unsupported:new Set,primitives:[],nestedInsertCount:0};yb(h.entities??[],o.blocks,l,DS,AS,m,new Set([h.name.toUpperCase()]));const u=bb(m),y=m.paths.flatMap(B=>B.points),b=y.length?{minX:Math.min(...y.map(B=>B.x)),minY:Math.min(...y.map(B=>B.y)),maxX:Math.max(...y.map(B=>B.x)),maxY:Math.max(...y.map(B=>B.y))}:null,w=b?b.maxX-b.minX:null,S=b?b.maxY-b.minY:null,j=m.primitives.reduce((B,x)=>(B[x.type]=(B[x.type]??0)+1,B),{}),C=o.header?.$INSUNITS,D={schemaVersion:1,blockName:g,unitsCode:typeof C=="number"&&Number.isInteger(C)?C:null,basePoint:Bu(h.position)??{x:0,y:0,z:0},bounds:b,width:w,height:S,aspectRatio:w!==null&&S!==null&&S>0?w/S:null,primitiveCounts:j,primitives:m.primitives,nestedInsertCount:m.nestedInsertCount,unsupportedEntities:[...m.unsupported].sort(),transformPolicy:{allowedRotationsDegrees:null,mirrorAllowed:null,uniformScalingAllowed:null,nonUniformScalingAllowed:null,status:"UNSPECIFIED_REQUIRES_REVIEW"}},E=IS(m),A=BS(vb(g,o.entities)),N=u?FS(g,h,u,o.entities):{labels:[],skippedContextOnly:!1};p.set(g,{...E?{previewSvg:E}:{},geometryDescriptor:D,nearbyLabels:N.labels,...N.skippedContextOnly?{labelMatchSkipped:!0}:{},...N.ambiguous?{labelMatchAmbiguous:!0}:{},...A.length?{sourcePlacements:A}:{}})}return p}const lt=(a,r)=>a.find(o=>o.code===r)?.value.trim()??"",la=a=>lt(a,0).toUpperCase(),Ns=a=>lt(a,la(a)==="DIMSTYLE"?105:5).toUpperCase(),Mn=(...a)=>{const r=[];for(let o=0;o<a.length;o+=2)r.push({code:Number(a[o]),value:String(a[o+1])});return r},qm=a=>a>=330&&a<=369||a>=390&&a<=399||a===480||a===481||a===1005,vu=a=>["DICTIONARY","ACDBDICTIONARYWDFLT"].includes(la(a)),zS=new Set(["BLOCK","ENDBLK","LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE","VERTEX","SEQEND","SPLINE","POINT","SOLID","TRACE","3DFACE","TEXT","MTEXT","ATTDEF","ATTRIB","INSERT","HATCH","DIMENSION","LEADER","TOLERANCE"]),YS=["VPORT","LTYPE","LAYER","STYLE","VIEW","UCS","APPID","DIMSTYLE","BLOCK_RECORD"];function $n(a){const r=[];for(const o of a){if(o.code===0&&r.push([]),!r.length)throw new Error("Invalid DXF record boundary.");r[r.length-1].push(o)}return r}function VS(a){let r=0;return a.filter(o=>o.code===102&&o.value.trim()==="{BLKREFS"?(r=1,!1):r?(o.code===102&&o.value.trim().startsWith("{")&&r++,o.code===102&&o.value.trim()==="}"&&r--,!1):!0)}class Eb{sections=new Map;tables=new Map;blocks=new Map;modelRecords;text;objects;recordsByHandle=new Map;blockForRecord=new Map;tableForRecord=new Map;tableHandles=new Set;maxHandle=0;constructor(r){const o=Ps(r);let l="";for(let y=0;y<o.content.length;y+=16384)l+=String.fromCharCode(...o.content.subarray(y,y+16384));this.text=l;const i=l.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;i.length&&i.at(-1)==="";)i.pop();if(i.length%2)throw new Error("DXF has an incomplete group-code/value pair.");const p=[];for(let y=0;y<i.length;y+=2){const b=Number(i[y].trim());if(!Number.isInteger(b))throw new Error("DXF has an invalid group code.");p.push({code:b,value:i[y+1]})}let g="";for(let y=0;y<p.length;y++){const b=p[y];if(b.code===0&&b.value.trim()==="SECTION"){if(g||p[y+1]?.code!==2)throw new Error("Invalid DXF section.");if(g=p[++y].value.trim().toUpperCase(),this.sections.has(g))throw new Error("Duplicate DXF section.");this.sections.set(g,[])}else b.code===0&&b.value.trim()==="ENDSEC"?g="":g&&this.sections.get(g).push(b)}if(g||!this.sections.has("BLOCKS")||!this.sections.has("ENTITIES"))throw new Error("A complete ASCII source DXF with BLOCKS and ENTITIES is required.");const h=$n(this.sections.get("TABLES")??[]);let m;for(const y of h)if(la(y)==="TABLE")m={name:lt(y,2).toUpperCase(),header:y,records:[]},this.tables.set(m.name,m),this.tableHandles.add(Ns(y));else if(la(y)==="ENDTAB")m=void 0;else if(m){const b=la(y)==="BLOCK_RECORD"?VS(y):y;m.records.push(b),this.tableForRecord.set(b,m)}let u;for(const y of $n(this.sections.get("BLOCKS"))){if(la(y)==="BLOCK"){const b=lt(y,2);if(u={name:b,records:[]},this.blocks.has(b.toUpperCase()))throw new Error("Duplicate source block definition.");this.blocks.set(b.toUpperCase(),u)}if(!u)throw new Error("DXF block definition is incomplete.");u.records.push(y),this.blockForRecord.set(y,u.name.toUpperCase()),la(y)==="ENDBLK"&&(u=void 0)}if(u)throw new Error("DXF block definition has no ENDBLK.");this.modelRecords=$n(this.sections.get("ENTITIES")),this.objects=$n(this.sections.get("OBJECTS")??[]);for(const y of[...[...this.tables.values()].flatMap(b=>b.records),...[...this.blocks.values()].flatMap(b=>b.records),...this.modelRecords,...this.objects]){const b=Ns(y);if(b){if(this.recordsByHandle.has(b))throw new Error("Duplicate DXF entity handle.");this.recordsByHandle.set(b,y),this.maxHandle=Math.max(this.maxHandle,parseInt(b,16)||0)}}for(const y of this.tableHandles)this.maxHandle=Math.max(this.maxHandle,parseInt(y,16)||0)}placements(){const r=new Map;for(const o of this.modelRecords){if(la(o)!=="INSERT"||lt(o,67)==="1"||lt(o,410)&&lt(o,410).toUpperCase()!=="MODEL")continue;const l=lt(o,2);if(!l||l.startsWith("*"))continue;const i=this.blocks.get(l.toUpperCase())?.name??l,p=r.get(i)??new Set;p.add(lt(o,8)||"0"),r.set(i,p)}return r}layerDetails(r){const o=this.tables.get("LAYER")?.records.find(l=>lt(l,2).toUpperCase()===r.toUpperCase());return o?`color=${Math.abs(Number(lt(o,62)||"7"))};lineweight=${lt(o,370)||"-3"};linetype=${lt(o,6)||"CONTINUOUS"}`:null}nativeAssetInfo(){const r=this.modelRecords.filter(i=>!["ATTRIB","VERTEX","SEQEND"].includes(la(i))),o=r.length?Ns(r[0]):"";if(!r.length||!o)throw new Error("Native symbol DXF has no verifiable model-space geometry.");const l=this.tables.get("STYLE")?.records.flatMap(i=>[lt(i,3),lt(i,4)].filter(Boolean).flatMap(p=>/\.shx$/i.test(p)?[p]:p.includes(".")?[]:[`${p}.shx`]))??[];return{entityCount:r.length,firstHandle:o,requiredShapeFonts:[...new Set(l)]}}isolate(r){let o=this.maxHandle+1;const l=()=>(o++).toString(16).toUpperCase(),i=new Set,p=new Set,g=new Set,h=new Set,m=[],u=($,G=!0)=>{vu($)&&G&&!g.has($)&&(g.add($),i.has($)&&m.push($)),i.has($)||(i.add($),m.push($));const le=this.tableForRecord.get($);le&&h.add(le)},y=$=>{const G=$.toUpperCase();if(p.has(G))return;const le=this.blocks.get(G);if(!le||G.startsWith("*MODEL_SPACE")||G.startsWith("*PAPER_SPACE"))throw new Error(`Missing or external block dependency: ${$}`);if(Number(lt(le.records[0],70))&28)throw new Error("External-reference blocks require native AutoCAD extraction.");p.add(G),le.records.forEach(Ee=>{if(!zS.has(la(Ee)))throw new Error(`Unsupported native block entity: ${la(Ee)}`);u(Ee)});const ge=this.tables.get("BLOCK_RECORD")?.records.find(Ee=>lt(Ee,2).toUpperCase()===G);if(!ge)throw new Error("Source block has no BLOCK_RECORD; save a modern ASCII DXF first.");u(ge)},b=($,G,le=!0)=>{const ge=this.tables.get($)?.records.find(Ee=>lt(Ee,2).toUpperCase()===G.toUpperCase());if(ge)$==="BLOCK_RECORD"?y(lt(ge,2)):u(ge);else if(le)throw new Error(`Missing ${$} dependency: ${G}`)};y(r);for(const $ of YS){const G=this.tables.get($);if(!G)throw new Error(`Native symbol DXF is missing required ${$} table after safe repair.`);if(h.add(G),$==="VPORT"){const le=G.records.find(ge=>lt(ge,2).toUpperCase()==="*ACTIVE");if(!le)throw new Error("Native symbol DXF has no active *ACTIVE VPORT record after safe repair.");u(le)}}b("LAYER","0");for(const $ of["CONTINUOUS","BYLAYER","BYBLOCK"])b("LTYPE",$,!1);for(b("STYLE","STANDARD",!1),b("APPID","ACAD",!1),b("DIMSTYLE","STANDARD",!1);m.length;){const $=m.shift(),G=la($);if(/IMAGEDEF|UNDERLAY|PDFDEFINITION|DGNDEFINITION|DWFDEFINITION|PROXY/.test(G))throw new Error(`External/proxy dependency ${G} requires native AutoCAD extraction.`);(G==="INSERT"||G==="DIMENSION")&&y(lt($,2)),G==="DIMENSION"&&b("DIMSTYLE",lt($,3)||"STANDARD");for(let le=0;le<$.length;le++){const ge=$[le];if(ge.code===8&&b("LAYER",ge.value.trim()||"0"),ge.code===6&&!["BYLAYER","BYBLOCK",""].includes(ge.value.trim().toUpperCase())&&b("LTYPE",ge.value.trim()),ge.code===7&&ge.value.trim()&&b("STYLE",ge.value.trim()),ge.code===1001&&b("APPID",ge.value.trim()),!qm(ge.code)||!ge.value.trim()||ge.value.trim()==="0"||vu($)&&[350,360].includes(ge.code)&&$[le-1]?.code===3&&!g.has($))continue;const Ee=ge.value.trim().toUpperCase();if(this.tableHandles.has(Ee))continue;const Me=this.recordsByHandle.get(Ee);if(!Me)throw new Error(`Unresolved native DXF handle reference (${ge.code}).`);const Ie=this.blockForRecord.get(Me);if(Ie&&!p.has(Ie))throw new Error("Block metadata references unrelated drawing geometry; use native AutoCAD extraction.");if(this.modelRecords.includes(Me))throw new Error("Block metadata references source model-space geometry; use native AutoCAD extraction.");la(Me)==="BLOCK_RECORD"?y(lt(Me,2)):u(Me,ge.code!==330)}}const w=new Set,S=new Set,j=$=>{if(w.has($))throw new Error("Circular block references cannot be isolated safely.");if(!S.has($)){w.add($);for(const G of this.blocks.get($).records)["INSERT","DIMENSION"].includes(la(G))&&j(lt(G,2).toUpperCase());w.delete($),S.add($)}};if(j(r.toUpperCase()),[...i].some($=>/BLOCK.*(?:PARAMETER|ACTION)|BLOCKREPRESENTATION|EVALUATION_GRAPH/.test(la($))||$.some(G=>G.code===3&&/ACAD_ENHANCEDBLOCK/i.test(G.value))))throw new Error("Dynamic blocks require native AutoCAD extraction; their behavior is not approximated.");const C=this.tables.get("BLOCK_RECORD");h.add(C);const D=this.blocks.get(r.toUpperCase()),E=C.records.find($=>lt($,2).toUpperCase()===r.toUpperCase()),A=l(),N=($,G)=>Mn(0,"BLOCK_RECORD",5,G,330,Ns(C.header),100,"AcDbSymbolTableRecord",100,"AcDbBlockTableRecord",2,$,70,0,280,1,281,0),B=$=>$.map(G=>[2,3].includes(G.code)?{...G,value:"*Model_Space"}:la($)==="BLOCK"&&[10,20,30,70].includes(G.code)?{...G,value:"0"}:G),x=[];for(const $ of[...h].sort((G,le)=>G.name==="BLOCK_RECORD"?1:le.name==="BLOCK_RECORD"?-1:0)){const G=$.records.filter(le=>i.has(le)).map(le=>le===E?B(le):le);$.name==="BLOCK_RECORD"&&G.push(N("*Paper_Space",A)),x.push(...Mn(0,"TABLE",2,$.name,5,Ns($.header),330,"0",100,"AcDbSymbolTable",70,G.length),...$.name==="DIMSTYLE"?Mn(100,"AcDbDimStyleTable"):[],...G.flat(),...Mn(0,"ENDTAB"))}const R=[...B(D.records[0]),...D.records.at(-1),...Mn(0,"BLOCK",5,l(),330,A,100,"AcDbEntity",8,"0",100,"AcDbBlockBegin",2,"*Paper_Space",70,0,10,0,20,0,30,0,3,"*Paper_Space",1,"",0,"ENDBLK",5,l(),330,A,100,"AcDbEntity",8,"0",100,"AcDbBlockEnd")];for(const $ of p)$!==r.toUpperCase()&&R.push(...this.blocks.get($).records.flat());const L=this.objects.filter($=>i.has($)).map($=>!vu($)||g.has($)?$:$.filter((G,le)=>G.code===3&&[350,360].includes($[le+1]?.code)?i.has(this.recordsByHandle.get($[le+1].value.trim().toUpperCase())):[350,360].includes(G.code)&&$[le-1]?.code===3?i.has(this.recordsByHandle.get(G.value.trim().toUpperCase())):!0)).flat(),P=D.records.slice(1,-1).flat();if(!P.length)throw new Error("The selected block contains no native entities.");const H=new Set(["$ACADVER","$DWGCODEPAGE","$INSUNITS","$MEASUREMENT","$LTSCALE","$CELTSCALE","$PSLTSCALE"]),fe=[];let re=!1;for(const $ of this.sections.get("HEADER")??[])$.code===9&&(re=H.has($.value.trim())),re&&fe.push($);fe.push(...Mn(9,"$HANDSEED",5,l(),9,"$INSBASE",10,lt(D.records[0],10)||"0",20,lt(D.records[0],20)||"0",30,lt(D.records[0],30)||"0"));const oe=new Set([...i].map($=>la($))),Ae=$n(this.sections.get("CLASSES")??[]).filter($=>oe.has(lt($,1).toUpperCase())).flat(),he=($,G)=>[...Mn(0,"SECTION",2,$),...G,...Mn(0,"ENDSEC")],de=[...he("HEADER",fe),...Ae.length?he("CLASSES",Ae):[],...he("TABLES",x),...he("BLOCKS",R),...he("ENTITIES",P),...L.length?he("OBJECTS",L):[],...Mn(0,"EOF")],Y=new Set;for(const $ of[...$n(x),...$n(R),...$n(P),...$n(L)]){const G=Ns($);if(G){if(Y.has(G))throw new Error("Duplicate handle in isolated DXF.");Y.add(G)}}for(const $ of de)if(qm($.code)&&$.value.trim()&&$.value.trim()!=="0"&&!Y.has($.value.trim().toUpperCase()))throw new Error(`A required DXF reference was not retained (${$.code}).`);const Q=de.map($=>`${$.code}\r
${$.value}\r
`).join(""),be=new Uint8Array(Q.length);for(let $=0;$<Q.length;$++)be[$]=Q.charCodeAt($);const Te=Ps(be).content;let _="";for(let $=0;$<Te.length;$+=16384)_+=String.fromCharCode(...Te.subarray($,$+16384));op(_);const J=new pb().parseSync(_);if(!J?.entities.length||!J.blocks?.["*Model_Space"])throw new Error("The isolated block DXF failed its structural round-trip validation.");return Te}}const Eu=(a,r)=>a.item.fields.find(o=>o.label===r)?.value.trim()??"";function Im(a,r){const l=a.reviewCandidates.filter(h=>h.sourceGroup===r).filter(h=>h.item.category==="symbol"),p=[...a.companyItems,...Object.values(a.projects).flatMap(h=>h.items)].filter(h=>h.category==="symbol"&&h.fields.some(m=>m.label==="Source drawing ID"&&m.value===r)).filter(h=>h.reviewStatus==="reviewed"),g=[...new Set(p.flatMap(h=>h.fields.filter(m=>m.label==="Target CAD layer"||m.label==="Source insert layer(s)").map(m=>m.value).filter(Boolean)))];return{pending:l.filter(h=>h.status==="needs-review").length,approved:p.length,dismissed:l.filter(h=>h.status==="dismissed").length,layers:g}}function XS(a,r,o,l=new Set){if(a.format!=="DXF"||a.category!=="company-standard")throw new Error("Select a saved DXF classified as a Legends Library standard. DWG still uses the AutoCAD extractor.");const i=new Eb(r),p=i.placements(),g=[...p].filter(([,D])=>D.size===1&&!!Iu[[...D][0].trim().toUpperCase()]),h=_i(i.text,g.map(([D])=>D)),m=[],u=[],y=new Map,b=[];let w=0;const S=new Set,j=[...o.reviewCandidates],C=(D,E,A,N=[])=>{const B=`extract-${a.id}-${D}-${E}`;return{id:B,proposedScope:"company",sourceGroup:a.id,status:"needs-review",item:{id:B,category:D==="BLOCK"?"symbol":"layer",name:`${D==="BLOCK"?"Block":"LAYER"} · ${E}`,summary:"Extracted from the saved DXF on this device. Only verified placement layers can be batch-approved.",sourceFile:a.label,sourceKind:"extracted-dwg",scope:"company",reviewStatus:"needs-review",canPromote:!1,fields:[{label:D==="BLOCK"?"Block name":"CAD name",value:E},{label:"Source drawing ID",value:a.id},{label:"Source discipline",value:a.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:A},...N]}}};for(const[D,E]of p){const A=[...E][0];if(E.size!==1||!Iu[A.trim().toUpperCase()]){b.push({blockName:D,reason:E.size>1?"Mixed placement layers; review required.":"Internal or unsupported placement layer."});continue}const N=j.find(L=>L.sourceGroup===a.id&&Eu(L,"Block name").toUpperCase()===D.toUpperCase()),B=[...o.companyItems,...Object.values(o.projects).flatMap(L=>L.items)].some(L=>L.fields.some(P=>P.label==="Source drawing ID"&&P.value===a.id)&&L.fields.some(P=>P.label==="Block name"&&P.value.trim().toUpperCase()===D.toUpperCase()));if(N&&N.status!=="needs-review"||B){w++;continue}if(!i.layerDetails(A)){b.push({blockName:D,reason:"The placement layer has no LAYER table record."});continue}const R=N&&Eu(N,"Block asset ID")||`${a.id}|${D}`;try{if(!l.has(R)){const P=i.isolate(D),H=h.get(D);m.push({id:R,sourceId:a.id,blockName:D,content:P,format:"DXF",previewSvg:H?.previewSvg??null,nearbyLabels:H?.nearbyLabels??[],labelMatchAmbiguous:H?.labelMatchAmbiguous??!1,labelMatchSkipped:H?.labelMatchSkipped??!0,sourcePlacements:H?.sourcePlacements??[],...H?.geometryDescriptor?{geometryDescriptor:H.geometryDescriptor}:{}})}const L=C("BLOCK",D,`sourceLayer=${A};nativeIsolatedDxf=true`,[{label:"Block asset ID",value:R},{label:"Fallback category",value:""},{label:"Source insert layer(s)",value:A}]);if(N){const P=new Set(["Extracted details","Source insert layer(s)","Block asset ID"]);y.set(N.id,{...N,item:{...N.item,fields:[...N.item.fields.filter(H=>!P.has(H.label)),...L.item.fields.filter(H=>P.has(H.label))]}})}else u.push(L);S.add(A)}catch(L){b.push({blockName:D,reason:L instanceof Error?L.message:"Native DXF isolation failed."})}}for(const D of S){const E=j.some(N=>N.sourceGroup===a.id&&N.item.category==="layer"&&Eu(N,"CAD name").toUpperCase()===D.toUpperCase()),A=o.companyItems.some(N=>N.category==="layer"&&N.fields.some(B=>B.label==="Source drawing ID"&&B.value===a.id)&&N.fields.some(B=>B.label==="CAD name"&&B.value.toUpperCase()===D.toUpperCase()));!E&&!A&&u.push(C("LAYER",D,i.layerDetails(D)))}return{library:{...o,reviewCandidates:[...o.reviewCandidates.map(D=>y.get(D.id)??D),...u]},assets:m,skipped:b,preserved:w,prepared:S.size?m.length:0,eligibleSymbols:g.length,addedSymbols:u.filter(D=>D.item.category==="symbol").length,updatedSymbols:y.size,detectedLayers:[...new Set([...p.values()].flatMap(D=>[...D]))]}}const GS=40*1024*1024,HS=40*1024*1024,wu=48,KS=15,WS=32;function ZS(a){const r=[];let o=0;for(;o<a.length;){const l=a[o];if(/\s/.test(l)){o+=1;continue}if(l==="("||l===")"){r.push(l),o+=1;continue}if(l==="."&&(o+1===a.length||/[\s)]/.test(a[o+1]))){r.push(l),o+=1;continue}if(l==='"'){let p="";for(o+=1;o<a.length&&a[o]!=='"';)if(a[o]==="\\"&&o+1<a.length){o+=1;const g=a[o];p+=g==="n"?`
`:g==="r"?"\r":g,o+=1}else p+=a[o],o+=1;if(a[o]!=='"')throw new Error("The AutoCAD geometry log contains an unfinished string value.");o+=1,r.push(JSON.stringify(p));continue}const i=o;for(;o<a.length&&!/[\s()]/.test(a[o]);)o+=1;if(i===o)throw new Error("The AutoCAD geometry log contains an invalid value.");r.push(a.slice(i,o))}return r}function Fu(a,r,o=0){if(o>40)throw new Error("The AutoCAD geometry log nesting is too deep to read safely.");const l=a[r.index++];if(l===void 0)throw new Error("The AutoCAD geometry log contains an incomplete geometry record.");if(l!=="("){if(l===")")throw new Error("The AutoCAD geometry log contains an unexpected closing bracket.");return l.startsWith('"')?JSON.parse(l):/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(l)?Number(l):l.toLowerCase()==="nil"?null:l.toUpperCase()==="T"?!0:l}const i=[];for(;r.index<a.length&&a[r.index]!==")";){if(a[r.index]==="."){if(i.length!==1)throw new Error("The AutoCAD geometry log contains a malformed pair.");r.index+=1;const p=Fu(a,r,o+1);if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains a malformed pair.");return{kind:"pair",first:i[0],rest:p}}i.push(Fu(a,r,o+1))}if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains an incomplete list.");return i}function Di(a){const r=ZS(a),o={index:0},l=Fu(r,o);if(o.index!==r.length)throw new Error("The AutoCAD geometry log has trailing geometry data.");return l}function zu(a,r){if(Array.isArray(a))for(const o of a){if(o&&typeof o=="object"&&!Array.isArray(o)&&"kind"in o&&String(o.first)===r)return o.rest;if(Array.isArray(o)&&o.length>=2&&o[0]===r)return o.length===2?o[1]:o.slice(1)}}function QS(a,r){return!Array.isArray(a)||a.length<r||a.slice(0,r).some(o=>typeof o!="number"||!Number.isFinite(o))?null:a.slice(0,r)}function JS(a){if(!Array.isArray(a))return{};const r={};for(const o of a){if(o&&typeof o=="object"&&!Array.isArray(o)&&"kind"in o){const l=o;typeof l.first=="string"&&typeof l.rest=="number"&&Number.isFinite(l.rest)&&(r[l.first]=l.rest);continue}!Array.isArray(o)||typeof o[0]!="string"||typeof o[1]!="number"||!Number.isFinite(o[1])||(r[o[0]]=o[1])}return r}function eT(a){const r=Di(a);return Array.isArray(r)?r.filter(o=>typeof o=="string"):[]}function tT(a){if(new TextEncoder().encode(a).byteLength>GS)throw new Error("The AutoCAD geometry log is over the 40 MB local review limit.");const r=new Map,o=[],l=new Set;for(const i of a.split(/\r?\n/)){if(i.startsWith("SCAN|")){const C=i.split("|");C[1]&&Number.isInteger(Number(C[2]))&&l.add(`${C[1]}:${Number(C[2])}`);continue}if(i.startsWith("ENTITY|")){const C=i.indexOf("|NORMALIZED=");if(C<0)continue;const D=i.slice(0,C).split("|"),E=D[3]?.trim(),A=D[4]?.trim().toUpperCase();if(!E||!A)continue;const N=Di(i.slice(C+12));r.set(E,{handle:E,type:A,descriptor:N});continue}if(!i.startsWith("CANDIDATE|"))continue;const p=i.split("|"),g=C=>p.find(D=>D.startsWith(`${C}=`))?.slice(C.length+1),h=p[3]?.trim(),m=p[1]?.trim(),u=Number(p[2]),y=g("SOURCE_HANDLES"),b=g("BOUNDS"),w=g("PRIMITIVE_COUNTS");if(!h||!m||!Number.isInteger(u)||!y)continue;const S=b?Di(b):null,j=QS(S,4);o.push({id:h,sourceAlias:m,page:u,handles:eT(y),bounds:j,primitiveCounts:w?JS(Di(w)):{}})}if(r.size===0||l.size===0)throw new Error("This log has no readable geometry scans. Use AUTOCAD_GEOMETRY_SCAN.log from a current runner.");return{entities:r,candidates:o,pages:l.size}}function Mm(a){const r=zu(a,"properties");return Array.isArray(r)?r.flatMap(o=>{if(!Array.isArray(o)||typeof o[0]!="number")return[];const l=o.slice(1).flatMap(i=>typeof i=="number"&&Number.isFinite(i)?[i]:Array.isArray(i)?i.filter(p=>typeof p=="number"&&Number.isFinite(p)):[]);return[{code:o[0],values:l}]}):[]}function Ei(a,r,o=0){const l=a.filter(i=>i.code===r)[o];return!l||l.values.length<2?null:{x:l.values[0],y:l.values[1]}}function wb(a,r,o){if(!Number.isFinite(o)||Math.abs(o)<1e-5)return[a,r];const l=r.x-a.x,i=r.y-a.y,p=Math.hypot(l,i);if(p<1e-9)return[a,r];const g=4*Math.atan(o),h=p*(1-o*o)/(4*o),m={x:(a.x+r.x)/2-i/p*h,y:(a.y+r.y)/2+l/p*h},u=Math.atan2(a.y-m.y,a.x-m.x),y=Math.hypot(a.x-m.x,a.y-m.y),b=Math.max(4,Math.min(32,Math.ceil(Math.abs(g)/(Math.PI/12))));return Array.from({length:b+1},(w,S)=>{const j=u+g*S/b;return{x:m.x+Math.cos(j)*y,y:m.y+Math.sin(j)*y}})}function aT(a){const r=Mm(a.descriptor),o=a.type;if(o==="LINE"){const l=Ei(r,10),i=Ei(r,11);return l&&i?[l,i]:[]}if(o==="CIRCLE"||o==="ARC"){const l=Ei(r,10),i=r.find(b=>b.code===40)?.values[0]??0;if(!l||i<=0)return[];const p=r.find(b=>b.code===50)?.values[0]??0,g=r.find(b=>b.code===51)?.values[0]??Math.PI*2,h=b=>Math.abs(b)>Math.PI*2+.1?b*Math.PI/180:b,m=o==="CIRCLE"?0:h(p);let u=o==="CIRCLE"?Math.PI*2:h(g)-m;for(;u<=0;)u+=Math.PI*2;const y=Math.max(12,Math.min(48,Math.ceil(u/(Math.PI/12))));return Array.from({length:y+1},(b,w)=>{const S=m+u*w/y;return{x:l.x+Math.cos(S)*i,y:l.y+Math.sin(S)*i}})}if(o==="LWPOLYLINE"){const l=[];let i=null;for(const m of r)m.code===10&&m.values.length>=2?(i={point:{x:m.values[0],y:m.values[1]},bulge:0},l.push(i)):m.code===42&&i&&(i.bulge=m.values[0]??0);const p=zu(a.descriptor,"closed")===!0;if(l.length<2)return l.map(m=>m.point);const g=[],h=p?l.length:l.length-1;for(let m=0;m<h;m+=1){const u=l[m],y=l[(m+1)%l.length],b=wb(u.point,y.point,u.bulge);g.push(...m?b.slice(1):b)}return p||g.push(l[l.length-1].point),g}if(o==="POLYLINE"){const l=zu(a.descriptor,"polylineVertices");return Array.isArray(l)?l.flatMap(p=>{const g=Mm([["properties",p]]),h=Ei(g,10);return h?[h]:[]}):[]}return[]}function nT(a){const r=a.geometry,o=a.transform,l=p=>({x:o[0]*p.x+o[2]*p.y+o[4],y:o[1]*p.x+o[3]*p.y+o[5]}),i=r.vertices??r.fitPoints??r.controlPoints;if((a.type==="LINE"||a.type==="SPLINE")&&i?.length)return i.map(l);if(a.type==="LWPOLYLINE"||a.type==="POLYLINE"){if(!i?.length)return[];const p=r.closed===!0,g=[],h=p?i.length:i.length-1;for(let m=0;m<h;m+=1){const u=i[m],y=i[(m+1)%i.length],b=wb(u,y,u.bulge??0).map(l);g.push(...m?b.slice(1):b)}return p||g.push(l(i[i.length-1])),g}if(a.type==="CIRCLE"||a.type==="ARC"){const p=r.center,g=Number(r.radius);if(!p||!Number.isFinite(g)||g<=0)return[];const h=a.type==="ARC"?Number(r.startAngle??0):0;let m=a.type==="ARC"?Number(r.endAngle??h+Math.PI*2)-h:Math.PI*2;for(;m<=0;)m+=Math.PI*2;const u=Math.max(12,Math.min(48,Math.ceil(m/(Math.PI/12))));return Array.from({length:u+1},(y,b)=>{const w=h+m*b/u;return l({x:p.x+Math.cos(w)*g,y:p.y+Math.sin(w)*g})})}if(a.type==="ELLIPSE"){const p=r.center,g=r.majorAxisEndPoint,h=Number(r.axisRatio);if(!p||!g||!Number.isFinite(h)||h<=0)return[];const m=32;return Array.from({length:m},(u,y)=>{const b=Math.PI*2*y/m;return l({x:p.x+g.x*Math.cos(b)-g.y*h*Math.sin(b),y:p.y+g.y*Math.cos(b)+g.x*h*Math.sin(b)})})}return[]}function rT(a){return a.length<=wu?a:Array.from({length:wu},(r,o)=>a[Math.floor(o*(a.length-1)/(wu-1))])}function $m(a){const r=rT(a.filter(i=>Number.isFinite(i.x)&&Number.isFinite(i.y)));if(r.length<2)return[];const o={x:r.reduce((i,p)=>i+p.x,0)/r.length,y:r.reduce((i,p)=>i+p.y,0)/r.length},l=Math.sqrt(r.reduce((i,p)=>i+(p.x-o.x)**2+(p.y-o.y)**2,0)/r.length);return!Number.isFinite(l)||l<1e-9?[]:r.map(i=>({x:(i.x-o.x)/l,y:(i.y-o.y)/l}))}function Um(a){return a.length?{minX:Math.min(...a.map(r=>r.x)),minY:Math.min(...a.map(r=>r.y)),maxX:Math.max(...a.map(r=>r.x)),maxY:Math.max(...a.map(r=>r.y))}:null}function Bm(a){return a?Math.hypot(a.maxX-a.minX,a.maxY-a.minY):0}function Fm(a,r){const o=new Set([...Object.keys(a),...Object.keys(r)]);let l=0,i=0;for(const p of o){const g=a[p]??0,h=r[p]??0;l+=Math.max(g,h),i+=Math.abs(g-h)}return l===0?0:Math.max(0,1-i/(2*l))}function zm(a,r){if(!a||!r)return 0;const o=Math.max(a.maxX-a.minX,1e-9),l=Math.max(a.maxY-a.minY,1e-9),i=Math.max(r.maxX-r.minX,1e-9),p=Math.max(r.maxY-r.minY,1e-9),g=Math.max(o/l,l/o),h=Math.max(i/p,p/i);return Math.exp(-Math.abs(Math.log(g/h)))}function Ym(a,r){let o=0;for(const l of a){let i=Number.POSITIVE_INFINITY;for(const p of r){const g=(l.x-p.x)**2+(l.y-p.y)**2;g<i&&(i=g)}o+=i}return o/a.length}function sT(a,r){let o=Number.POSITIVE_INFINITY,l=0;for(let i=0;i<360;i+=KS){const p=i*Math.PI/180,g=Math.cos(p),h=Math.sin(p),m=r.map(y=>({x:g*y.x-h*y.y,y:h*y.x+g*y.y})),u=Math.sqrt((Ym(a,m)+Ym(m,a))/2);u<o&&(o=u,l=i)}return{residual:o,rotation:l}}function oT(a,r){return a.handles.flatMap(o=>{const l=r.get(o);return l?aT(l):[]})}function Vm(a){return a.primitives.flatMap(nT)}function lT(a,r){if(new TextEncoder().encode(a).byteLength>HS)throw new Error("The CAD block geometry index is over the 40 MB local review limit.");let o;try{o=JSON.parse(a)}catch{throw new Error("The selected file is not valid CAD_BLOCK_GEOMETRY_INDEX.json.")}if(!o||typeof o!="object"||o.localOnly!==!0||!Array.isArray(o.blocks))throw new Error("This is not a local-only CAD block geometry index from the runner package.");return o.blocks.filter(l=>l.indexStatus==="INDEXED"&&(l.discipline===r||l.discipline==="Shared")&&typeof l.blockName=="string"&&typeof l.blockAssetId=="string"&&l.geometry&&typeof l.geometry=="object")}function iT(a,r,o){const l=tT(a),p=lT(r,o).flatMap(h=>{const m=h.geometry,u=$m(Vm(m));return!u.length||!m.bounds?[]:[{block:h,geometry:m,cloud:u,bounds:Um(Vm(m)),primitiveCounts:m.primitiveCounts??{}}]}),g=l.candidates.map(h=>{const m=oT(h,l.entities),u=$m(m),y=h.bounds?{minX:h.bounds[0],minY:h.bounds[1],maxX:h.bounds[2],maxY:h.bounds[3]}:Um(m);if(p.length===0)return{...h,best:null,second:null,status:"NO_INDEXED_BLOCKS",reason:"No indexed approved blocks for this discipline."};if(u.length<2||!y)return{...h,best:null,second:null,status:"UNMATCHED",reason:"Candidate has too little supported geometry to compare."};const w=p.map(A=>({prepared:A,coarse:zm(y,A.geometry.bounds)*.75+Fm(h.primitiveCounts,A.primitiveCounts)*.25})).sort((A,N)=>N.coarse-A.coarse).slice(0,WS).map(({prepared:A})=>A).map(A=>{const N=Fm(h.primitiveCounts,A.primitiveCounts),B=zm(y,A.geometry.bounds),x=sT(u,A.cloud),R=Math.exp(-x.residual*2.5),L=Math.max(0,Math.min(1,R*.7+N*.2+B*.1)),P=Bm(y),H=Bm(A.geometry.bounds),fe=String(A.block.category??""),re=/\b(equipment|tower|vessel|tank|exchanger|column|drum)\b/i.test(fe);return{blockAssetId:String(A.block.blockAssetId),blockName:String(A.block.blockName),category:fe,targetLayer:String(A.block.targetLayer??""),score:L,geometryResidual:x.residual,primitiveSimilarity:N,aspectSimilarity:B,rotationDegrees:x.rotation,estimatedUniformScale:re||H<=1e-9?null:P/H,indexStatus:String(A.block.indexStatus)}}).sort((A,N)=>N.score-A.score||A.blockName.localeCompare(N.blockName)),S=w[0]??null,j=w[1]??null,C=S&&j?S.score-j.score:Number.POSITIVE_INFINITY,D=!S||S.score<.9?"UNMATCHED":C<.02?"AMBIGUOUS_REVIEW":S.score>=.97?"HIGH_CANDIDATE_REVIEW":"REVIEW";return{...h,best:S,second:j,status:D,reason:D==="AMBIGUOUS_REVIEW"?"Top library shapes are too close to identify safely.":D==="UNMATCHED"?"No geometry match reached the initial review threshold.":"Experimental shape score only; human confirmation is required."}});return{scan:l,candidates:g,indexedBlockCount:p.length}}function cT(a,r){return JSON.stringify({schemaVersion:1,localOnly:!0,discipline:r,generatedAt:new Date().toISOString(),note:"Experimental geometry similarity rankings. Scores are not probabilities or approvals. Source geometry was not changed; every candidate requires human review.",pagesScanned:a.scan.pages,indexedBlocks:a.indexedBlockCount,candidates:a.candidates},null,2)}function Xm(a){return a===void 0?"—":`${(a*100).toFixed(1)}%`}function dT(a){return a==null?"Review":`${a.toFixed(3)}×`}function uT({discipline:a}){const[r,o]=q.useState(null),[l,i]=q.useState(null),[p,g]=q.useState(null),[h,m]=q.useState(""),[u,y]=q.useState(!1),b=async()=>{if(!r||!l){m("Choose both AUTOCAD_GEOMETRY_SCAN.log and CAD_BLOCK_GEOMETRY_INDEX.json.");return}y(!0),m(""),g(null);try{const[S,j]=await Promise.all([r.text(),l.text()]),C=iT(S,j,a);g({scanName:r.name,indexName:l.name,discipline:a,indexedBlockCount:C.indexedBlockCount,pagesScanned:C.scan.pages,candidates:C.candidates})}catch(S){m(S instanceof Error?S.message:"The local geometry report could not be compared.")}finally{y(!1)}},w=()=>{if(!p)return;const S=cT({scan:{entities:new Map,candidates:[],pages:p.pagesScanned},candidates:p.candidates,indexedBlockCount:p.indexedBlockCount},p.discipline),j=URL.createObjectURL(new Blob([S],{type:"application/json"})),C=document.createElement("a");C.href=j,C.download="LOCAL_GEOMETRY_MATCH_REVIEW.json",C.click(),URL.revokeObjectURL(j)};return c.jsxs("section",{className:"geometry-match-review","aria-labelledby":"geometry-match-title","data-testid":"panel-geometry-match-review",children:[c.jsxs("div",{className:"geometry-match-heading",children:[c.jsx("span",{className:"geometry-match-icon",children:c.jsx(RE,{size:16})}),c.jsxs("div",{children:[c.jsx("h3",{id:"geometry-match-title",children:"Review geometry matches"}),c.jsx("p",{children:"Compare a local AutoCAD scan with indexed approved blocks. Source drawings are not changed."})]})]}),c.jsxs("div",{className:"geometry-match-privacy",children:[c.jsx(Du,{size:14})," Both files are read and compared in this browser; nothing is uploaded."]}),c.jsx("p",{className:"geometry-match-instructions",children:"Use the scan log from AutoCAD and the index file from that same runner kit. The result is a local review aid only."}),c.jsxs("div",{className:"geometry-match-inputs",children:[c.jsxs("label",{children:[c.jsx("span",{children:"AutoCAD geometry scan log"}),c.jsx("input",{type:"file",accept:".log,.txt","aria-label":"Select AutoCAD geometry scan log",onChange:S=>{o(S.currentTarget.files?.[0]??null),g(null),m("")},"data-testid":"input-geometry-scan-log"})]}),c.jsxs("label",{children:[c.jsx("span",{children:"CAD block geometry index"}),c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Select CAD block geometry index",onChange:S=>{i(S.currentTarget.files?.[0]??null),g(null),m("")},"data-testid":"input-cad-geometry-index"})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:u||!r||!l,"data-testid":"button-build-geometry-match-report",children:[c.jsx(Os,{size:14}),u?"Comparing…":"Compare geometry"]})]}),h&&c.jsx("p",{className:"geometry-match-error",role:"alert",children:h}),p&&c.jsxs("div",{className:"geometry-match-results","data-testid":"geometry-match-results",children:[c.jsxs("div",{className:"geometry-match-summary",role:"status",children:[p.discipline,": ",p.candidates.length," candidate group(s) across ",p.pagesScanned," page(s); ",p.indexedBlockCount," indexed approved block(s)."]}),p.indexedBlockCount===0&&c.jsx("p",{className:"geometry-match-warning",children:"No matching indexed blocks were found for this discipline. Check that the selected index came from the same local runner package."}),p.indexedBlockCount>0&&p.candidates.length===0&&c.jsx("p",{className:"geometry-match-warning",children:"AutoCAD found no geometry candidate groups on the scanned pages. No blocks were inserted or drawings changed."}),p.candidates.map(S=>c.jsxs("article",{className:"geometry-match-card",children:[c.jsxs("div",{className:"geometry-match-card-head",children:[c.jsx("strong",{children:S.id}),c.jsx("span",{className:`geometry-match-status status-${S.status.toLowerCase()}`,children:S.status.replaceAll("_"," ")})]}),c.jsxs("div",{className:"geometry-match-card-meta",children:["Page ",S.page," · ",S.handles.length," source entities · ",S.sourceAlias]}),c.jsxs("div",{className:"geometry-match-ranking",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Best shape match"}),c.jsx("strong",{children:S.best?.blockName??"No match"}),c.jsxs("small",{children:[Xm(S.best?.score)," · ",S.best?.targetLayer||"no target layer"," ·"," ",S.best?.rotationDegrees??"—","° · scale ",dT(S.best?.estimatedUniformScale)]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Second match"}),c.jsx("strong",{children:S.second?.blockName??"—"}),c.jsx("small",{children:Xm(S.second?.score)})]})]}),c.jsx("p",{children:S.reason})]},`${S.sourceAlias}-${S.page}-${S.id}`)),c.jsxs("div",{className:"geometry-match-foot",children:[c.jsx("span",{children:"Experimental shape scores are not probabilities or approvals. Every result needs a person to verify it."}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:w,"data-testid":"button-download-geometry-match-report",children:[c.jsx(Ur,{size:13})," Download local report"]})]})]})]})}const Gm=250*1024*1024,Hm=500*1024*1024,Yu={"needs-review":"Needs review","company-standard":"Legends Library standard","project-example":"Project example","markup-reference":"Markup reference",ignore:"Do not use"};function Km(a,r){return r&&a==="project-example"?"Client-specific library source":Yu[a]}function xu(){return globalThis.crypto?.randomUUID?.()??`source-${Date.now()}-${Math.random().toString(36).slice(2)}`}function Su(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(2)} MB`}function Wm(a){return(a.replace(/\\/g,"/").split("/").pop()??"").replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,"").trim().slice(0,180)||"Unnamed CAD drawing"}function pT({onAddPdfs:a,discipline:r,clientFolderId:o,clientFolderLabel:l}){const[i,p]=q.useState([]),[g,h]=q.useState({}),[m,u]=q.useState([]),[y,b]=q.useState([]),[w,S]=q.useState(""),[j,C]=q.useState(""),[D,E]=q.useState(!1),[A,N]=q.useState(!1),[B,x]=q.useState(""),[R,L]=q.useState(!1),[P,H]=q.useState(()=>{try{return gn().reviewCandidates.filter(U=>U.status==="needs-review").length}catch{return 0}}),[fe,re]=q.useState(!1),[oe,Ae]=q.useState(""),[he,de]=q.useState(!1),[Y,Q]=q.useState(!1),[be,Te]=q.useState(0),[_,J]=q.useState([]);q.useEffect(()=>{const U=()=>Te(ie=>ie+1);return window.addEventListener(Wo,U),window.addEventListener("storage",U),window.addEventListener("focus",U),()=>{window.removeEventListener(Wo,U),window.removeEventListener("storage",U),window.removeEventListener("focus",U)}},[]);const $=q.useMemo(()=>{try{const U=gn();return Object.fromEntries(i.map(ie=>[ie.id,Im(U,ie.id)]))}catch{return{}}},[i,be]);q.useEffect(()=>{$u().then(U=>{p(U),h(Object.fromEntries(U.map(ie=>[ie.id,{category:ie.category,discipline:ie.discipline,projectLabel:ie.projectLabel}])))}).catch(U=>{x(U instanceof Error?U.message:"The local CAD library could not be opened.")})},[]);const G=q.useMemo(()=>I1(i,r,o),[i,r,o]),le=q.useMemo(()=>G.filter(U=>U.category==="company-standard"||!!o&&U.category==="project-example"&&U.projectLabel===o),[G,o]);q.useEffect(()=>{le.some(U=>U.id===oe)||Ae(le[0]?.id??"")},[le,oe]);const ge=q.useMemo(()=>G.reduce((U,ie)=>(U[ie.category]+=1,U),{"needs-review":0,"company-standard":0,"project-example":0,"markup-reference":0,ignore:0}),[G]),Ee=m.some(U=>o?U.projectLabel!==o:!!U.projectLabel),Me=async U=>{E(!0),C(""),x(""),S(""),L(!1),u([]),b([]);try{if(U.size>Gm)throw new Error("The archive is larger than the 250 MB limit for this local test.");const ie=km(new Uint8Array(await U.arrayBuffer())),pe=Object.entries(ie).filter(([Xe])=>!Xe.endsWith("/")),F=pe.filter(([Xe])=>/\.(dwg|dxf)$/i.test(Xe)&&!/_OVERVIEW\.dxf$/i.test(Xe)),ce=pe.filter(([Xe])=>/\.pdf$/i.test(Xe)),Ce=pe.filter(([Xe])=>/\.bak$/i.test(Xe)).length;if([...F,...ce].reduce((Xe,[,qe])=>Xe+qe.byteLength,0)>Hm)throw new Error("The PDF and CAD source files together exceed the 500 MB local test limit.");if(F.length===0&&ce.length===0)throw new Error("No PDF, DWG, or source DXF files were found in this ZIP. Overview DXFs and other file types are not saved as source drawings.");const Le=F.map(([Xe,qe],jt)=>({id:xu(),label:`Source CAD ${String(i.length+jt+1).padStart(3,"0")}`,reviewFilename:Wm(Xe),category:"needs-review",discipline:r,format:/\.dxf$/i.test(Xe)?"DXF":"DWG",projectLabel:o??"",bytes:qe.byteLength,content:qe})),Qe=ce.map(([,Xe],qe)=>({id:xu(),label:`PDF ${String(qe+1).padStart(2,"0")}`,file:new File([Xe],`SOURCE_${String(qe+1).padStart(2,"0")}.pdf`,{type:"application/pdf"})}));u(Le),b(Qe),S(`Found ${F.length} CAD drawing file(s) and ${ce.length} PDF file(s). ${Ce} backup file(s) ignored.`),F.length?C("Assign a use to each CAD drawing before saving it. ZIP filenames are shown only during review; the saved library keeps generic source IDs."):C("No CAD drawings to add. You can add the extracted PDF to the conversion queue.")}catch(ie){x(ie instanceof Error?ie.message:"The ZIP could not be read. Check that it is not damaged or password-protected.")}finally{E(!1)}},Ie=async U=>{x(""),S(""),C(""),u([]),b([]),L(!1);const ie=U.filter(F=>/\.(dwg|dxf)$/i.test(F.name)&&!/_OVERVIEW\.dxf$/i.test(F.name));if(ie.length!==U.length){x("Choose source DWG/DXF files only. Overview DXFs are not source drawings.");return}if(ie.reduce((F,ce)=>F+ce.size,0)>Hm){x("The selected CAD source files exceed the 500 MB local test limit.");return}if(!ie.length){x("Choose at least one DWG or DXF source drawing.");return}E(!0);try{const F=await Promise.all(ie.map(async(ce,Ce)=>({id:xu(),label:`Source CAD ${String(i.length+Ce+1).padStart(3,"0")}`,reviewFilename:Wm(ce.name),category:"needs-review",discipline:r,format:/\.dxf$/i.test(ce.name)?"DXF":"DWG",projectLabel:o??"",bytes:ce.size,content:new Uint8Array(await ce.arrayBuffer())})));u(F),S(`Prepared ${F.length} CAD source file(s) for local review.`),C("Choose the correct discipline and local library category for each file. Filenames are discarded when saved.")}catch(F){x(F instanceof Error?F.message:"The CAD files could not be read locally.")}finally{E(!1)}},Et=async()=>{if(Ee){x("The selected client folder changed after these files were staged. Re-select the original client folder or add the files again.");return}if(m.some(U=>U.category==="needs-review")){x("Choose a category for every CAD drawing before saving the library.");return}if(m.some(U=>["project-example","markup-reference"].includes(U.category)&&!U.projectLabel?.trim())){x("Enter a neutral project code for every project example and markup reference.");return}N(!0),x("");try{let U=0;const ie=m.filter(ce=>ce.category!=="ignore").map(ce=>{const Ce=ce.format==="DXF"?Ps(ce.content):null;return U+=Ce?.repairs.length??0,{id:ce.id,label:ce.label,category:ce.category,discipline:ce.discipline,format:ce.format,projectLabel:ce.projectLabel,bytes:Ce?.content.byteLength??ce.bytes,content:Ce?.content??ce.content}});await V1(ie);const pe=await $u();p(pe),h(Object.fromEntries(pe.map(ce=>[ce.id,{category:ce.category,discipline:ce.discipline,projectLabel:ce.projectLabel}])));const F=m.length-ie.length;u([]),C(`${ie.length} source CAD drawing(s) saved in this browser's local library. ${F} marked “Do not use”. ${U} DXF symbol name(s) repaired in local copies; original disk files unchanged.`)}catch(U){x(U instanceof Error?U.message:"The CAD sources could not be saved locally.")}finally{N(!1)}},pt=(U,ie)=>{h(pe=>({...pe,[U.id]:{...U,...pe[U.id],...ie}}))},ht=async U=>{const ie=g[U.id]??{category:U.category,discipline:U.discipline,projectLabel:U.projectLabel};if(["project-example","markup-reference"].includes(ie.category)&&!ie.projectLabel?.trim()){x("Enter a neutral project code before saving this project-specific source.");return}x("");try{await X1(U.id,ie),p(pe=>pe.map(F=>F.id===U.id?{...F,...ie,...ie.projectLabel?.trim()?{projectLabel:ie.projectLabel.trim()}:{projectLabel:void 0}}:F))}catch(pe){x(pe instanceof Error?pe.message:"The source drawing category could not be changed.")}},wt=async()=>{if(!(!le.length||fe)){re(!0),x("");try{const U=await W1(le),ie=URL.createObjectURL(U),pe=document.createElement("a");pe.href=ie,pe.download="local-cad-extractor-kit.zip",pe.click(),window.setTimeout(()=>URL.revokeObjectURL(ie),1e3),C(`Local extractor kit prepared with ${le.length} source CAD drawing(s).`)}catch(U){x(U instanceof Error?U.message:"The local extractor kit could not be prepared.")}finally{re(!1)}}},aa=async U=>{const ie=le.some(F=>F.id===oe)?oe:le[0]?.id,pe=le.find(F=>F.id===ie);if(!pe){x("Choose a reviewed source drawing before importing its extraction.");return}if(pe.category==="project-example"&&!pe.projectLabel?.trim()){x("Add a neutral project code to this source drawing before importing its extraction.");return}de(!0),x("");try{if(U.size>Gm)throw new Error("The extraction ZIP is larger than the 250 MB limit for this local test.");const F=km(new Uint8Array(await U.arrayBuffer())),ce=Object.entries(F).find(([It])=>/\.tsv$/i.test(It));if(!ce)throw new Error("The ZIP must contain CAD_STANDARDS.tsv from PIDEXTRACTSTANDARDS.");const me=new TextDecoder().decode(ce[1]).split(/\r?\n/).filter(Boolean);if(me.length<2||!me[0].toUpperCase().includes("KIND")||!me[0].toUpperCase().includes("NAME"))throw new Error("The ZIP contains an invalid CAD_STANDARDS.tsv extraction.");const Le=gn(),Qe=Object.entries(F).filter(([It])=>/_OVERVIEW\.dxf$/i.test(It)),Xe=me[1]?.split("	")[0]?.trim()??"",qe=Qe.find(([It])=>It.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===`${Xe}_OVERVIEW.dxf`.toLowerCase());if(Qe.length&&(!qe||Qe.length!==1))throw new Error("Include exactly one overview DXF for this extraction, named with the same SOURCE alias as the TSV (for example SOURCE_001_OVERVIEW.dxf).");const jt=me.slice(1).flatMap(It=>{const[,Ca,it]=It.split("	");return Ca?.trim().toUpperCase()==="BLOCK"&&it?.trim()?[it.trim()]:[]});if(qe&&qe[1].byteLength>30*1024*1024)throw new Error("The overview DXF exceeds the 30 MB preview limit. Keep the original extraction unchanged and export a smaller Legends-only overview.");let ye=null,et="",nt=!1;if(qe)ye=new TextDecoder("windows-1252").decode(qe[1]),et="overview DXF";else if(pe.format==="DXF"&&pe.bytes<=30*1024*1024)try{ye=new TextDecoder("windows-1252").decode(await Go(pe.id)),et="saved source DXF"}catch{nt=!0}else pe.format==="DXF"&&(nt=!0);let Wt=new Map;if(ye)try{Wt=_i(ye,jt)}catch{nt=!0}const Re=[],Da=[],St=[];for(const It of me.slice(1)){const[,Ca,it,Ot=""]=It.split("	"),Mt=Ca?.trim().toUpperCase(),mt=it?.trim();if(!mt||!Zm[Mt])continue;const Na=Mt==="BLOCK"&&hb(mt)?"directionArrow":Zm[Mt],na=Mt==="BLOCK"?Wt.get(mt):void 0;let on;if(Mt==="BLOCK"){const da=Ot.match(/(?:^|;)asset=([^;]+)/i)?.[1]?.trim();if(!da){St.push(mt);continue}const ua=da.replaceAll("\\","/").split("/").at(-1),Tt=Object.entries(F).find(([We])=>We.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===ua?.toLowerCase());if(!ua||!Tt){St.push(mt);continue}on=`${pe.id}|${mt}`,Da.push({id:on,sourceId:pe.id,blockName:mt,content:Tt[1],format:"DWG",...ye&&!nt?{previewSvg:na?.previewSvg??null,nearbyLabels:na?.nearbyLabels??[],labelMatchSkipped:na?.labelMatchSkipped??!1,labelMatchAmbiguous:na?.labelMatchAmbiguous??!1,sourcePlacements:na?.sourcePlacements??[],...na?.geometryDescriptor?{geometryDescriptor:na.geometryDescriptor}:{}}:{}})}const Qa=`extract-${pe.id}-${Mt}-${mt}`;if(Le.reviewCandidates.find(da=>da.id===Qa))continue;const ka=pe.category==="project-example",En=[{label:Mt==="BLOCK"?"Block name":"CAD name",value:mt},{label:"Source drawing ID",value:pe.id},{label:"Source discipline",value:pe.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:Ot.replace(/(?:^|;)asset=[^;]*/i,"").trim()||"No additional table details"},...Mt==="BLOCK"?[{label:"Block asset ID",value:on??""},{label:"Fallback category",value:""},...na?.sourcePlacements?.length?[{label:"Source insert layer(s)",value:[...new Set(na.sourcePlacements.map(da=>da.layer))].join(", ")},{label:"Source insert rotation(s)",value:na.sourcePlacements.map(da=>`${da.rotationDegrees}° on ${da.layer} (${da.count})`).join("; ")}]:[]]:[]];Re.push({id:Qa,item:{id:Qa,category:Na,name:`${Na==="directionArrow"?"Direction Arrow":Mt==="BLOCK"?"Block":Mt.replaceAll("_"," ")} · ${mt}`,summary:"Extracted locally from a source CAD drawing; confirm each value before use.",sourceFile:pe.label,sourceKind:"extracted-dwg",scope:ka?"project":"company",reviewStatus:"needs-review",...ka?{projectId:pe.projectLabel,projectName:pe.projectLabel===o&&l||pe.projectLabel}:{},canPromote:!1,fields:En},proposedScope:ka?"project":"company",sourceGroup:pe.id,...ka?{projectId:pe.projectLabel,projectName:pe.projectLabel===o&&l||pe.projectLabel}:{},status:"needs-review"})}const gt={...Le,reviewCandidates:[...Le.reviewCandidates,...Re],auditTrail:Re.length?[{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:"Local CAD extraction added for review",detail:`${Re.length} extracted records from ${pe.label} were added as pending review.`,...pe.projectLabel?{projectName:pe.projectLabel===o&&l||pe.projectLabel}:{}},...Le.auditTrail]:Le.auditTrail},Zt=ye&&!nt?Om(gt,pe.id,Wt).library:gt;await Uu(Da),Zo(Zt),H(Zt.reviewCandidates.filter(It=>It.status==="needs-review").length),C((Re.length?`${Re.length} extracted record(s) added to Drafting standards for review. Nothing was approved automatically.`:"No new records found; the extracted names are already in the review queue or standards library.")+(Wt.size?` ${Wt.size} local block previews and source placement-layer details read from the ${et}. Nearby labels remain suggestions and need confirmation.`:nt?" The source preview could not be read; the valid extracted records were still imported without preview-based layer evidence.":pe.format==="DWG"&&!qe?" To identify DWG blocks and their placement layers, include the source *_OVERVIEW.dxf exported with PIDEXPORTOVERVIEW.":"")+(St.length?` ${St.length} block asset(s) were missing and skipped: ${[...new Set(St)].slice(0,5).join(", ")}${St.length>5?", …":""}. Other valid records were kept.`:""))}catch(F){x(F instanceof Error?F.message:"The CAD extraction could not be imported.")}finally{de(!1)}},Rt=async()=>{const U=le.find(pe=>pe.id===oe&&pe.category==="company-standard"),ie=U?[U.id]:[];if(!(!U||Y)){Q(!0),x(""),C(""),J([]);try{let pe=gn();const F=JSON.stringify(pe);let ce="";if(U.format==="DXF"){C(`${U.label}: extracting native blocks from the saved DXF on this device…`),await new Promise(nt=>window.setTimeout(nt,0));const ye=await B1(),et=XS(U,await Go(U.id),pe,ye);if(JSON.stringify(gn())!==F)throw new Error("The library changed during DXF preparation. No records were changed; retry with the latest library.");await Uu(et.assets,!0),pe=et.library,J(et.skipped),ce=`${et.addedSymbols} new symbol record(s), ${et.assets.length} native block file(s) saved; ${et.preserved} previously reviewed symbol(s) preserved. ${et.skipped.length} item(s) excluded or need native extraction/review. `}const Ce=pe.reviewCandidates.filter(ye=>ye.sourceGroup===U.id&&ye.status==="needs-review"&&ye.proposedScope==="company"&&ye.item.category==="symbol"&&ye.item.sourceKind==="extracted-dwg");if(!Ce.length){const ye=Im(pe,U.id);C(`${U.label}: ${ce}No pending symbols to approve. ${ye.approved} already approved; ${ye.dismissed} dismissed. ${U.format==="DXF"?"Only named model-space INSERTs on supported placement layers can be extracted. See excluded items below; loose geometry is not guessed into blocks.":"For DWG, import this source’s extraction ZIP with its individual block files."}`);return}let me="";if(U.format==="DXF"){if(U.bytes>30*1024*1024)throw new Error("This saved source DXF exceeds the 30 MB recovery limit. Import its extraction with a smaller Legends-only overview DXF.");const ye=await Go(U.id),et=Ce.map(Re=>Re.item.fields.find(Da=>Da.label==="Block name")?.value.trim()??"").filter(Boolean),nt=_i(new TextDecoder("windows-1252").decode(ye),et),Wt=Om(pe,U.id,nt);pe=Wt.library,me=`${Wt.recoveredSymbols} pending symbol(s) have INSERT-layer evidence in the saved DXF; ${Wt.updatedRecords} existing record(s) updated. `}const Le=new Set(ie),Qe=new Set(pe.reviewCandidates.filter(ye=>ye.status==="needs-review"&&Le.has(ye.sourceGroup)&&ye.item.category==="symbol").map(ye=>ye.item.fields.find(et=>et.label==="Block asset ID")?.value.trim()??"").filter(Boolean)),Xe=new Set;await Promise.all([...Qe].map(async ye=>{try{await db(ye),Xe.add(ye)}catch{}}));const qe=j1(pe,ie,Xe);if(JSON.stringify(gn())!==F)throw new Error("The local standards library changed while this source was being checked. No approval changes were saved; retry to use the latest records.");Zo(qe.library),H(qe.library.reviewCandidates.filter(ye=>ye.status==="needs-review").length);const jt=Object.values(qe.skipped).reduce((ye,et)=>ye+et,0);C(`${U.label}: ${ce}${me}`+(qe.approvedSymbols?`${qe.approvedSymbols} layer-matched symbol(s) approved for shared PFD/P&ID use; ${qe.approvedLayers} placement layer(s) approved or updated.`:"0 symbols approved. Only exact placement layers with local block files and a matching layer record can be approved.")),jt&&C(ye=>`${ye} ${qe.skipped.missingAsset} missing asset(s), ${qe.skipped.unsupportedLayer} internal/unsupported layer item(s), ${qe.skipped.ambiguousLayer} ambiguous layer item(s), ${qe.skipped.missingLayer} missing layer record(s), and ${qe.skipped.invalidCandidate} invalid item(s) stayed unapproved.`)}catch(pe){C(""),x(pe instanceof Error?pe.message:"The categorized CAD mappings could not be approved locally.")}finally{Q(!1)}}};return c.jsxs("section",{className:"local-cad-library","aria-labelledby":"local-library-title","data-testid":"panel-local-cad-library",children:[c.jsxs("div",{className:"local-library-heading",children:[c.jsx("div",{className:"local-library-icon",children:c.jsx(ep,{size:17})}),c.jsxs("div",{className:"local-library-title",children:[c.jsx("div",{className:"pdf-kicker",children:"SOURCE DRAWINGS · LOCAL ONLY"}),c.jsx("h3",{id:"local-library-title",children:o?"Client Source Library":"Legends Library"}),c.jsx("p",{children:o?`Manage CAD sources for ${l||"this client folder"}. Company standards remain the common default.`:"Add common company standards here. Select a Client folder first to add client-specific sources."})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-files",children:[D?c.jsx($a,{size:14,className:"pdf-spin"}):c.jsx(Os,{size:14}),D?"Reading…":"Add DWG/DXF",c.jsx("input",{type:"file",accept:".dwg,.dxf,application/acad,application/x-dwg,application/dxf",multiple:!0,"aria-label":"Add local DWG or DXF source files",disabled:D,onChange:U=>{const ie=[...U.currentTarget.files??[]];ie.length&&Ie(ie),U.currentTarget.value=""},"data-testid":"input-add-cad-files"})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-archive",children:[D?c.jsx($a,{size:14,className:"pdf-spin"}):c.jsx(by,{size:14}),D?"Reading ZIP…":"Add ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Add a ZIP with PDF and DWG/DXF source files",disabled:D,onChange:U=>{const ie=U.currentTarget.files?.[0];ie&&Me(ie),U.currentTarget.value=""},"data-testid":"input-add-cad-archive"})]})]}),c.jsxs("div",{className:"local-library-privacy",children:[c.jsx(yr,{size:14}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay in this browser."})," ",o?"This client source list is separate from the company Legends Library and other client folders.":"Company-standard sources remain shared defaults; project/client examples stay separate from them."]})]}),c.jsxs("div",{className:"local-library-extraction",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:[c.jsx(CE,{size:14})," Extract drawing standards locally"]}),c.jsx("span",{children:"Package eligible DWG/DXF drawings with a Windows AutoCAD script. It exports only blocks actually inserted on approved equipment, instrument, or inline-component layers—unused internal definitions are skipped. Source drawings are not uploaded or changed."})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{wt()},disabled:!le.length||fe,"data-testid":"button-download-cad-extractor",children:[fe?c.jsx($a,{size:13,className:"pdf-spin"}):c.jsx(Ur,{size:13}),fe?"Preparing…":"Download extractor kit"]})]}),le.length>0&&c.jsxs("div",{className:"local-library-import",children:[c.jsxs("label",{children:[c.jsx("span",{children:"Import AutoCAD extraction"}),c.jsx("select",{value:oe||le[0].id,disabled:Y||he,onChange:U=>{Ae(U.target.value),C(""),J([])},"aria-label":"Source drawing for extracted CAD standards",children:le.map(U=>c.jsxs("option",{value:U.id,children:[U.label," · ",U.format??"DWG"," · ",$[U.id]?.pending??0," pending / ",$[U.id]?.approved??0," approved",U.projectLabel?` · ${U.projectLabel}`:""]},U.id))})]}),c.jsxs("label",{className:"btn subtle local-library-import-button",children:[he?c.jsx($a,{size:13,className:"pdf-spin"}):c.jsx(Os,{size:13}),he?"Importing…":"Import extraction ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Import AutoCAD extraction ZIP",disabled:he||Y,onChange:U=>{const ie=U.currentTarget.files?.[0];ie&&aa(ie),U.currentTarget.value=""}})]})]}),!o&&le.some(U=>U.category==="company-standard")&&c.jsxs("div",{className:"local-library-approval",children:[c.jsxs("div",{children:[c.jsx("strong",{children:"Approve supplied company symbols by placement layer"}),c.jsxs("span",{"data-testid":"status-selected-cad-source",children:[le.find(U=>U.id===oe)?.label,": ",$[oe]?.pending??0," pending symbols · ",$[oe]?.approved??0," approved · ",$[oe]?.dismissed??0," dismissed.",$[oe]?.layers.length?` Approved placement layers: ${$[oe].layers.join(", ")}.`:""]}),c.jsx("span",{children:"Saved DXF: this action first extracts individual native blocks locally, then approves eligible placement-layer mappings. Existing approvals, dismissed records and saved block files are not replaced. DWG: import its AutoCAD extraction ZIP first."}),c.jsx("span",{children:"Approves only the selected company source; repeat for each source. EQUIP/f_Equip → equipment, f_Inst → instruments, f_Pipe_Inline → inline components. Mappings are shared across PFD and P&ID; internal, ambiguous, and missing-asset items stay pending."})]}),c.jsxs("button",{className:"btn primary",type:"button",disabled:Y||he||!le.some(U=>U.id===oe&&U.category==="company-standard"),onClick:()=>{Rt()},"data-testid":"button-approve-categorized-company-symbols",children:[Y?c.jsx($a,{size:13,className:"pdf-spin"}):c.jsx(js,{size:13}),Y?"Extracting / approving locally…":"Approve selected source"]})]}),B&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-library-error",children:[c.jsx(br,{size:15}),c.jsx("span",{children:B})]}),j&&c.jsx("p",{className:"local-library-message",role:"status","aria-live":"polite","data-testid":"status-cad-source-action",children:j}),_.length>0&&c.jsxs("details",{className:"local-library-message",children:[c.jsxs("summary",{children:[_.length," excluded / review-required DXF items — show reasons"]}),c.jsx("ul",{children:_.map(U=>c.jsxs("li",{children:[U.blockName,": ",U.reason]},U.blockName))})]}),c.jsxs("div",{className:"local-library-summary","aria-label":"Local library totals",children:[c.jsxs("span",{children:[c.jsx("strong",{children:G.length})," saved CAD sources",o?` for ${l||"this client"}`:` for ${r}`]}),c.jsxs("span",{children:[c.jsx("strong",{children:ge["company-standard"]})," Legends Library sources"]}),c.jsxs("span",{children:[c.jsx("strong",{children:ge["project-example"]+ge["markup-reference"]})," reference drawings"]}),ge["needs-review"]>0&&c.jsxs("span",{className:"local-library-review-count",children:[c.jsx("strong",{children:ge["needs-review"]})," need review"]})]}),c.jsx(uT,{discipline:r}),P>0&&c.jsxs(ia,{href:r==="PFD"?"/standards-review/pfd":"/standards-review/pid",className:"btn primary local-library-review-link","data-testid":"link-review-extracted-standards",children:[c.jsx(vE,{size:15}),"Review extracted standards",c.jsx("span",{children:P})]}),Ee&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-source-folder-mismatch",children:[c.jsx(br,{size:15}),c.jsx("span",{children:"These staged drawings belong to a different folder. Re-select that client or add them again here."})]}),w&&c.jsx("div",{className:"local-library-archive-summary",role:"status",children:w}),y.length>0&&c.jsxs("div",{className:"local-library-pdf-list","aria-label":"PDF files found in ZIP",children:[y.map(U=>c.jsxs("div",{className:"local-library-pdf-row",children:[c.jsx(mr,{size:15}),c.jsx("span",{children:U.label}),c.jsx("span",{className:"pdf-file-meta",children:Su(U.file.size)})]},U.id)),c.jsxs("button",{className:"btn subtle",type:"button",disabled:R,onClick:()=>{a(y.map(({file:U})=>U)),L(!0)},"data-testid":"button-add-archive-pdfs",children:[R?c.jsx(js,{size:14}):c.jsx(Os,{size:14}),R?"PDFs added to queue":"Add PDF(s) to conversion queue"]})]}),m.length>0&&c.jsxs("div",{className:"local-library-staging",children:[c.jsxs("div",{className:"local-library-staging-title",children:[c.jsx("strong",{children:o?"Choose how each client CAD drawing will be used":"Choose what each CAD drawing is for"}),c.jsx("span",{children:"Unmarked files will not be saved."})]}),m.map(U=>c.jsxs("label",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-name",children:[c.jsx("span",{className:"local-library-source-id",children:U.label}),c.jsxs("span",{className:"local-library-review-filename",title:U.reviewFilename,children:["Selected filename: ",U.reviewFilename]})]}),c.jsx("span",{className:"pdf-file-meta",children:Su(U.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Category for ${U.label}`,value:U.category,onChange:ie=>{const pe=ie.target.value;u(F=>F.map(ce=>ce.id===U.id?{...ce,category:pe}:ce))},"data-testid":`select-category-${U.id}`,children:Object.entries(Yu).filter(([ie])=>o?["needs-review","project-example","markup-reference","ignore"].includes(ie):["needs-review","company-standard","ignore"].includes(ie)).map(([ie,pe])=>c.jsx("option",{value:ie,children:Km(ie,o)},ie))}),c.jsx("select",{"aria-label":`Discipline for ${U.label}`,value:U.discipline,onChange:ie=>{const pe=ie.target.value;u(F=>F.map(ce=>ce.id===U.id?{...ce,discipline:pe}:ce))},"data-testid":`select-discipline-${U.id}`,children:["PFD","P&ID","Shared"].map(ie=>c.jsx("option",{value:ie,children:ie},ie))}),["project-example","markup-reference"].includes(U.category)&&!o&&c.jsx("input",{"aria-label":`Project code for ${U.label}`,placeholder:"Neutral project code",value:U.projectLabel,onChange:ie=>u(pe=>pe.map(F=>F.id===U.id?{...F,projectLabel:ie.target.value}:F)),"data-testid":`input-project-${U.id}`}),o&&["project-example","markup-reference"].includes(U.category)&&c.jsx("span",{className:"local-library-scope-tag",children:"Saved only in this client folder"})]})]},U.id)),c.jsxs("button",{className:"btn primary local-library-save",type:"button",disabled:A||Ee||m.some(U=>U.category==="needs-review"||["project-example","markup-reference"].includes(U.category)&&!U.projectLabel?.trim()),onClick:()=>{Et()},"data-testid":"button-save-local-library",children:[A?c.jsx($a,{size:14,className:"pdf-spin"}):c.jsx(am,{size:14}),A?"Saving locally…":"Save reviewed sources locally"]})]}),G.length>0&&c.jsxs("details",{className:"local-library-saved-list",children:[c.jsxs("summary",{children:["Saved source drawings for ",r," (",G.length,")"]}),c.jsx("div",{className:"local-library-saved-items",children:G.map(U=>c.jsxs("div",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-id",children:[U.label," · ",U.format??"DWG",o?` · ${U.category==="company-standard"?"Company standard":"This client"}`:U.projectLabel?` · ${U.projectLabel}`:""]}),c.jsx("span",{className:"pdf-file-meta",children:Su(U.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Change category for ${U.label}`,value:(g[U.id]??U).category,disabled:!!(o&&U.category==="company-standard"),onChange:ie=>pt(U,{category:ie.target.value}),"data-testid":`saved-category-${U.id}`,children:Object.entries(Yu).filter(([ie])=>!o||["project-example","markup-reference","ignore"].includes(ie)||U.category==="company-standard"&&ie==="company-standard").map(([ie,pe])=>c.jsx("option",{value:ie,children:Km(ie,o)},ie))}),c.jsx("select",{"aria-label":`Change discipline for ${U.label}`,value:(g[U.id]??U).discipline,disabled:!!(o&&U.category==="company-standard"),onChange:ie=>pt(U,{discipline:ie.target.value}),"data-testid":`saved-discipline-${U.id}`,children:["PFD","P&ID","Shared"].map(ie=>c.jsx("option",{value:ie,children:ie},ie))}),!o&&["project-example","markup-reference"].includes((g[U.id]??U).category)&&c.jsx("input",{"aria-label":`Neutral project code for ${U.label}`,placeholder:"Neutral project code",value:(g[U.id]??U).projectLabel??"",onChange:ie=>pt(U,{projectLabel:ie.target.value}),"data-testid":`saved-project-${U.id}`}),c.jsxs("button",{className:"btn subtle local-library-save-row",type:"button",disabled:!!(o&&U.category==="company-standard"),onClick:()=>{ht(U)},"data-testid":`button-save-source-${U.id}`,children:[c.jsx(am,{size:12})," Save"]})]})]},U.id))})]}),c.jsx("p",{className:"local-library-limit",children:"Extracted records enter the standards review queue. Only approved mappings are offered to the matching PFD or P&ID runner. Original DWG/DXF sources stay local; only individually exported block files are included with approved mappings."})]})}const Zm={BLOCK:"symbol",LAYER:"layer",TEXT_STYLE:"textStyle",LINETYPE:"linetype",DIMENSION_STYLE:"dimensionStyle"},Vu=100*1024*1024,Xu=500*1024*1024,fT="pid-studio-local-pdfs",rn="meta",Fr="bytes",Qo="extractedText";class Kt extends Error{code;constructor(r,o){super(o),this.code=r}}let ks=null,Qm=Promise.resolve();function Yr(){return ks||(ks=new Promise((a,r)=>{if(typeof indexedDB>"u"){r(new Kt("storage","This browser does not allow local file storage."));return}const o=indexedDB.open(fT,2);o.onupgradeneeded=l=>{const i=o.result;l.oldVersion<1&&(i.createObjectStore(rn,{keyPath:"id"}).createIndex("discipline","discipline"),i.createObjectStore(Fr)),l.oldVersion<2&&i.createObjectStore(Qo)},o.onsuccess=()=>{o.result.onversionchange=()=>{o.result.close(),ks=null},a(o.result)},o.onerror=()=>{ks=null,r(new Kt("storage","Local storage could not be opened."))},o.onblocked=()=>{ks=null,r(new Kt("storage","Local file storage is busy in another tab. Close that tab and reload."))}})),ks}function cl(a){return new Promise((r,o)=>{a.onsuccess=()=>r(a.result),a.onerror=()=>o(a.error)})}function Gi(a){return new Promise((r,o)=>{a.oncomplete=()=>r(),a.onerror=()=>o(a.error),a.onabort=()=>o(a.error??new Kt("storage","Local storage write was stopped."))})}function Hi(a){const r=Qm.then(a,a);return Qm=r.catch(()=>{}),r}async function xb(a){const r=await Yr();return(await cl(r.transaction(rn).objectStore(rn).index("discipline").getAll(a))).sort((l,i)=>l.aliasNumber-i.aliasNumber)}async function hT(){const a=await Yr();return(await cl(a.transaction(rn).objectStore(rn).getAll())).reduce((o,l)=>o+l.size,0)}async function gT(a){const r=globalThis.crypto?.subtle;if(!r)throw new Error("hash-unsupported");const o=await r.digest("SHA-256",a);return Array.from(new Uint8Array(o)).map(l=>l.toString(16).padStart(2,"0")).join("")}function mT(a,r){return Hi(async()=>{if(!r())throw new Kt("cancelled","Cancelled.");const o=a.bytes.byteLength;if(o>Vu)throw new Kt("too-large","This PDF is larger than 100 MB.");const i=(await Yr()).transaction([rn,Fr],"readwrite"),p=Gi(i);p.catch(()=>{});const g=i.objectStore(rn),h=await cl(g.getAll());if(!r())throw i.abort(),new Kt("cancelled","Cancelled.");if(h.some(b=>b.discipline===a.discipline&&b.hash===a.hash))throw i.abort(),new Kt("duplicate","This PDF has the same content as a saved file.");if(h.reduce((b,w)=>b+w.size,0)+o>Xu)throw i.abort(),new Kt("total-limit","Saved PDFs would pass the 500 MB total limit.");const u=h.filter(b=>b.discipline===a.discipline).reduce((b,w)=>Math.max(b,w.aliasNumber),0)+1,y={id:globalThis.crypto?.randomUUID?.()??`pdf-${Date.now()}-${Math.random().toString(36).slice(2)}`,discipline:a.discipline,aliasNumber:u,alias:`PDF ${u}`,size:o,pageCount:a.pageCount,hash:a.hash,addedAt:Date.now(),analysisStatus:"queued",analysisPagesDone:0,analysisRecordCount:0,autocadStatus:"not-connected"};g.put(y),i.objectStore(Fr).put(a.bytes,y.id);try{await p}catch(b){throw b instanceof Kt?b:new Kt("storage","The browser could not save this PDF. Storage may be full.")}return y})}async function qo(a){const r=await Yr(),o=await cl(r.transaction(Fr).objectStore(Fr).get(a));if(!o)throw new Kt("storage","Saved PDF data was not found.");return o}function yT(a,r){return Hi(async()=>{const l=(await Yr()).transaction(Qo,"readwrite"),i=Gi(l);l.objectStore(Qo).put({pdfId:a,pages:r,savedAt:Date.now()},a);try{await i}catch{throw new Kt("storage","PDF text was read, but the browser could not save the full text index. The original PDF remains saved; free browser storage and retry EDE.")}})}function wi(a,r){return Hi(async()=>{const l=(await Yr()).transaction(rn,"readwrite"),i=Gi(l),p=l.objectStore(rn),g=await cl(p.get(a));if(!g)throw l.abort(),new Kt("storage","The saved PDF record could not be found.");const h={...g,...r};return p.put(h),await i,h})}function Sb(a){return Hi(async()=>{const o=(await Yr()).transaction([rn,Fr,Qo],"readwrite");a.forEach(l=>{o.objectStore(rn).delete(l),o.objectStore(Fr).delete(l),o.objectStore(Qo).delete(l)}),await Gi(o)})}async function bT(a){const r=await xb(a);await Sb(r.map(o=>o.id))}class Ci extends Error{constructor(r,o,l){super(`Page ${r}: ${o} failed.`,{cause:l}),this.page=r,this.stage=o,this.name="PdfExtractionError"}page;stage}function Jm(a){const r=a instanceof Ci?a.cause:a,o=r instanceof Error?r.name:"",l=r instanceof Error?r.message:typeof r=="string"?r:"",i=a instanceof Ci?`Page ${a.page} stopped during ${a.stage}. `:"EDE extraction stopped. ";return o==="QuotaExceededError"?`${i}Browser storage is full. Back up your records before freeing space, then retry EDE. Your PDF remains saved.`:/memory|allocation|out of bounds/i.test(l)?`${i}The browser ran out of processing memory. Close other tabs and retry, or use a desktop browser. Your PDF remains saved.`:/fetch|network|importscripts|load.*(worker|core|language)|failed to load/i.test(l)||a instanceof Ci&&a.stage==="OCR startup"?`${i}The OCR engine could not start. Check internet access to the OCR downloads, then retry EDE. Your PDF remains saved.`:`${i}The PDF could not be processed${o?` (${o.replace(/[^a-zA-Z0-9]/g,"").slice(0,60)})`:""}. Retry EDE; if it repeats, report this message. Your PDF remains saved.`}const vT=/\b(?:[A-Z]{1,8}\s*[-–]\s*)+\d{1,6}[A-Z0-9]*(?:\s*[-–]\s*[A-Z0-9]{1,8}){0,3}\b/g,ET=/^(?:AI|DI|FI|FIC|FIT|FQI|LI|LIC|LS|LSH|LSL|PI|PIC|PDI|PSH|PSL|TI|TIC|TSH|TSL|TT|PT|FT|LT|FC|PC|TC|LC|AT|AIT|XV|ZSO|ZSC)$/,wT=/^(?:XV|HV|BV|CV|PCV|FCV|LCV|TCV|PSV|PRV|MOV|SDV|BDV|NRV)$/,xT=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/g,ST=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/i;function Tb(a,r,o,l,i,p,g){const h=Math.max(0,Math.min(1,l/r)),m=Math.max(0,Math.min(1,i/o)),u=Math.max(h,Math.min(1,p/r)),y=Math.max(m,Math.min(1,g/o));return u-h<1e-4||y-m<1e-4?null:{pageNumber:a,x:h,y:m,width:u-h,height:y-m}}function TT(a,r,o){const l=[o.convertToViewportPoint(a.x,a.y),o.convertToViewportPoint(a.x+a.width,a.y),o.convertToViewportPoint(a.x,a.y+a.height),o.convertToViewportPoint(a.x+a.width,a.y+a.height)];return Tb(r,o.width,o.height,Math.min(...l.map(i=>i[0]??0)),Math.min(...l.map(i=>i[1]??0)),Math.max(...l.map(i=>i[0]??0)),Math.max(...l.map(i=>i[1]??0)))}function AT(a,r,o){const l=[];for(const i of a){if(!i.text||!i.bbox)continue;const p=Tb(r,o.pageWidth,o.pageHeight,o.left+i.bbox.x0,o.top+i.bbox.y0,o.left+i.bbox.x1,o.top+i.bbox.y1);p&&l.push(...Ni(i.text,r).map(g=>({...g,sourceLocations:[p]})))}return l}function DT(a,r){const o=new Map;for(const l of[...a??[],...r??[]]){const i=[l.pageNumber,l.x.toFixed(4),l.y.toFixed(4),l.width.toFixed(4),l.height.toFixed(4)].join(":");!o.has(i)&&o.size<500&&o.set(i,l)}return[...o.values()]}function CT(a){let r="",o;for(const l of a){const i=l.str.replace(/\s+/g," ").trim();if(i){if(o){const p=Math.max(1,(o.fontSize+l.fontSize)/2),g=Math.abs(l.y-o.y)<=Math.max(1,p*.3),h=l.x-(o.x+o.width),m=g&&h>=-p*.5&&h<=p*.35;r+=m?"":g?" ":`
`,o.hasEOL&&!r.endsWith(`
`)&&(r+=`
`)}r+=i,o=l}}return r}function ey(a,r=1700,o=120){if(a<=r+o)return[0];const l=r-o,i=[];for(let p=0;p<a;p+=l){const g=a-(p+r);if(g>0&&g<=o&&(p=a-r),i.push(p),p+r>=a)break}return i}function Ni(a,r){const o=new Map,l=a.toUpperCase();for(const i of l.matchAll(vT)){const p=i[0].replace(/[–\s]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),g=p.split("-").filter(Boolean),h=p.match(/^([A-Z]{1,8})-(\d{1,6})(.*)$/);if(!h||p.length<3||g.length>6)continue;const m=h[1],u=/^OPC$/.test(m)?"OPC":wT.test(m)?"Valve":ET.test(m)?"Instrument":g.length>=4||/^(?:L|LINE|PIPE)$/.test(m)?"Pipe Run":"Equipment",y=Math.max(0,(i.index??0)-180),b=Math.min(l.length,(i.index??0)+i[0].length+180),w=l.slice(y,b),S=w.match(/\b(?:NOMINAL\s*(?:DIA(?:METER)?|SIZE)|NPS|DN)\s*[:#=-]?\s*((?:(?:NPS|DN)\s*)?\d{1,3}(?:\s*\/\s*\d{1,2})?(?:\.\d+)?\s*(?:MM|IN(?:CH)?)?["”]?)/i)?.[1]??"",j=w.match(/\b(?:PIPING|PIPE)\s*(?:MATERIAL|MATL)\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})/i)?.[1]??"",C=w.match(/\b(?:DESIGN\s+FLOW|FLOW(?:\s+RATE)?)\s*[:=]?\s*([\d.,]+\s*(?:KG\/H|M3\/H|NM3\/H|T\/H|L\/S|M3\/D|GPM|M\/S)?)/i)?.[1]??"",D=w.match(/\b(?:HEAT\s+TRACING|HEAT\s+TRACE)\s*[:=]?\s*(YES|NO|ELECTRIC|STEAM|NONE|N\/A)\b/i)?.[1]??"",E=w.match(/\bINSULATION\s*[:=]?\s*([A-Z0-9][A-Z0-9._/-]{0,12})/i)?.[1]??"",N=h[3].split("-").filter(Boolean).at(-1)??"",B=u==="Pipe Run"&&/[A-Z]/i.test(N)&&/\d/.test(N)?N:"",x=w.match(ST)?.[1]??B,R=`${u}:${p.toLowerCase()}`;o.has(R)||o.set(R,{tag:p,type:u,tagPrefix:m,tagSequence:h[2],tagSuffix:h[3].replace(/^-/,""),pageNumber:r,nominalDiameter:S.replace(/\s+/g," ").trim(),pipingMaterial:j,lineSpec:x,flow:C,heatTracing:D,insulation:E})}for(const i of l.matchAll(xT)){const p=i[1].replace(/\s+/g,"").toUpperCase(),g=`Line Spec:${p.toLowerCase()}`;o.has(g)||o.set(g,{tag:p,type:"Line Spec",tagPrefix:"LINE SPEC",tagSequence:p,tagSuffix:"",lineSpec:p,pageNumber:r})}return[...o.values()]}const NT=/^(?:(?:GENERAL|PROCESS|DESIGN|SAFETY|OPERATING|CONSTRUCTION)\s+)?NOTES?\s*[:.-]?\s*(.*)$/i,kT=/^(?:LEGENDS?|ABBREVIATIONS?|SYMBOLS?|REFERENCES?|REVISION(?:S)?|DRAWING\s+(?:TITLE|NO|NUMBER)|PROJECT|CLIENT|SCALE|TITLE\s*BLOCK|EQUIPMENT\s+LIST|LINE\s+LIST)\b/i,RT=/^(?:(?:NOTE\s*)?\d{1,3}\s*[.)-]\s+|[A-Z]\s*[.)]\s+).+/i,jT=/^(?:GENERAL\s+)?NOTE(?:\s+\d+)?\s*[:#-]\s*.+/i;function LT(a){const r=[];for(const o of a){const l=[{text:o.searchableText,label:"PDF text"},...o.ocrTiles.map(h=>({text:h,label:"OCR text"}))],i=new Set,p=[];for(const h of l){let m=!1,u="";const y=()=>{const b=u.replace(/\s+/g," ").trim();if(b.length>=8){const w=b.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();w&&!i.has(w)&&(i.add(w),p.push({text:b,label:h.label}))}u=""};for(const b of h.text.replace(/\r/g,`
`).split(`
`)){const w=b.replace(/\s+/g," ").trim();if(!w)continue;const S=w.match(NT);if(S){y(),m=!0,S[1]&&(u=S[1].trim());continue}if(m&&kT.test(w)){y(),m=!1;continue}if(jT.test(w)){y(),u=w,m=!0;continue}if(RT.test(w)){const j=w.length>=36&&w.split(/\s+/).length>=7;m||j?(y(),u=w,m=!0):y();continue}m?u=u?`${u} ${w}`:w:y()}y()}let g=0;for(const h of p){const m=[];for(let u=0;u<h.text.length;){let y=Math.min(u+1500,h.text.length);if(y<h.text.length){const b=h.text.lastIndexOf(" ",y);b>u+700&&(y=b)}m.push(h.text.slice(u,y)),u=y}for(const u of m){const y=u.trim();y&&(g+=1,r.push({tag:`NOTE-P${o.pageNumber}-${g}`,type:"Item Note",tagPrefix:"NOTE",tagSequence:String(g),tagSuffix:`P${o.pageNumber}`,pageNumber:o.pageNumber,description:`${h.label} note — review against source: ${y}`}))}}}return r}function Tu(a,r){const o=new Map(a.map(l=>[`${l.type}:${l.tag.toLowerCase()}`,{...l}]));for(const l of r){const i=`${l.type}:${l.tag.toLowerCase()}`,p=o.get(i);if(!p){o.set(i,{...l});continue}p.sourceLocations=DT(p.sourceLocations,l.sourceLocations);for(const g of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])!p[g]&&l[g]&&(p[g]=l[g])}return[...o.values()]}async function OT(a,r,o=()=>!0){const[l,i]=await Promise.all([nn(()=>import("./pdf-TYrZqVzP.js"),[]),nn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);l.GlobalWorkerOptions.workerSrc=i.default;const p=l.getDocument({data:new Uint8Array(a.slice(0))}),g=await p.promise;let h=null;const m=new Map,u=[];let y=0,b=1,w="PDF text";try{for(let S=1;S<=g.numPages;S++){if(b=S,w="PDF text",!o())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const j=await g.getPage(S),C=await j.getTextContent(),D=j.getViewport({scale:1}),E=C.items.flatMap(R=>{if(!("str"in R)||typeof R.str!="string"||!R.str||!("transform"in R)||!Array.isArray(R.transform))return[];const L=R.transform;return[{str:R.str,x:L[4]??0,y:L[5]??0,width:"width"in R&&typeof R.width=="number"?R.width:0,height:"height"in R&&typeof R.height=="number"?R.height:0,fontSize:Math.hypot(L[0]??0,L[1]??0)||10,hasEOL:"hasEOL"in R&&R.hasEOL===!0}]}),A=CT(E),N=[];let B=Ni(A,S);const x=E.flatMap(R=>{const L=TT({...R,height:R.height||R.fontSize},S,D);return L?Ni(R.str,S).map(P=>({...P,sourceLocations:[L]})):[]});if(B=Tu(B,x),A.replace(/\s/g,"").length<800||B.length<20){if(r?.(S,g.numPages,"OCR"),!h){w="OCR startup";const{createWorker:oe,PSM:Ae}=await nn(async()=>{const{createWorker:he,PSM:de}=await import("./index-DUpRfPry.js").then(Y=>Y.i);return{createWorker:he,PSM:de}},__vite__mapDeps([0,1]));h=await oe("eng",1,{workerPath:"https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js",corePath:"https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0",langPath:"https://tessdata.projectnaptha.com/4.0.0"}),await h.setParameters({tessedit_pageseg_mode:Ae.SPARSE_TEXT,preserve_interword_spaces:"1"})}const R=j.getViewport({scale:1});w="page image";const L=Math.min(3.5,3200/Math.max(R.width,R.height)),P=j.getViewport({scale:L}),H=document.createElement("canvas"),fe=document.createElement("canvas");H.width=Math.ceil(P.width),H.height=Math.ceil(P.height);const re=H.getContext("2d",{willReadFrequently:!1});if(!re)throw new Error("This browser cannot prepare a page image for local OCR.");try{await j.render({canvas:H,canvasContext:re,viewport:P}).promise;const oe=1700,Ae=120,he=[],de=ey(H.width,oe,Ae),Y=ey(H.height,oe,Ae);for(const Q of Y)for(const be of de){if(!o())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const Te=Math.min(H.width<=oe+Ae?H.width:oe,H.width-be),_=Math.min(H.height<=oe+Ae?H.height:oe,H.height-Q);fe.width=Te,fe.height=_;const J=fe.getContext("2d",{willReadFrequently:!1});if(!J)throw new Error("This browser cannot prepare a page image for local OCR.");J.drawImage(H,be,Q,Te,_,0,0,Te,_),w="OCR reading";const $=await h.recognize(fe);N.push($.data.text),he.push(...Ni($.data.text,S)),he.push(...AT($.data.words??[],S,{left:be,top:Q,pageWidth:H.width,pageHeight:H.height}))}y+=1,B=Tu(B,he)}finally{H.width=0,H.height=0,fe.width=0,fe.height=0}}else r?.(S,g.numPages,"PDF text");for(const R of B){const L=`${R.type}:${R.tag.toLowerCase()}`,P=m.get(L);m.set(L,P?Tu([P],[R])[0]:R)}u.push({pageNumber:S,searchableText:A,ocrTiles:N}),j.cleanup()}return{candidates:[...m.values()],pages:g.numPages,ocrPages:y,pageText:u}}catch(S){throw o()?new Ci(b,w,S):S}finally{await h?.terminate().catch(()=>{}),await p.destroy().catch(()=>{})}}const Ab=["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef","placementDrawingRef","nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description","notes","sourcePage","reviewStatus"],Un=[...Ab,"stableId"],Db=/^[0-9A-F]{32}$/,_T=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,PT=["plantGroup","fluidService","nominalDiameter","pipingMaterial","lineSpec","insulation","heatTracing","groupStatus"],qT=["","Start","Continue","Branch","Merge","End-of-Group"];function Cb(){return crypto.randomUUID().replaceAll("-","").toUpperCase()}function up(a){const r=a.toUpperCase();if(Db.test(r))return r;if(_T.test(a))return r.replaceAll("-","");throw new Error("A Stable ID must contain exactly 32 letters or numbers (A–F, 0–9).")}function mn(a,r){return r==="stableId"?a.id:a[r]}function IT(a,r){const o=a.placementDrawingRef.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase();return o?[r.id,r.name].map(i=>i.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase()).includes(o)?"current":"another":"available"}const kt={itemTag:"Item Tag",tagPrefix:"Tag Prefix",tagSequence:"Tag Sequence",tagSuffix:"Tag Suffix",equipmentClass:"Equipment Class",equipmentType:"Equipment Type",equipmentName:"Equipment Name",drawingRef:"Source Drawing / Page",placementDrawingRef:"Placed on Drawing",nominalDiameter:"Nominal Diameter",plantGroup:"Plant Group",fluidService:"Fluid / Service",pipingMaterial:"Piping Material Class",lineSpec:"Line Spec",flow:"Flow",flowDirection:"Flow Direction",heatTracing:"Heat Tracing",insulation:"Insulation",fromTag:"From",toTag:"To",groupStatus:"Group Status",opcDrawing:"OPC Drawing",connection:"Connection",description:"Description",notes:"Notes",sourcePage:"Source page",reviewStatus:"Review status",stableId:"Stable ID"},Pi=Ab,Rs={itemTag:"The tag printed beside the equipment, line, valve, or instrument. A repeated Pipe Run tag needs different line data.",tagPrefix:"The letter code at the start of the tag.",tagSequence:"The main number in the tag.",tagSuffix:"Extra letters or numbers after the main tag number.",equipmentClass:"The approved class or family for this equipment.",equipmentType:"What the equipment is, such as a pump or vessel, when the drawing states it.",equipmentName:"The equipment name or service, only when the source clearly labels it.",drawingRef:"The source drawing or PDF page where this record came from.",placementDrawingRef:"The CAD drawing that contains this object. Blank means available or not placed. This is a reference only; it does not place or move CAD entities.",nominalDiameter:"The stated pipe or nozzle size, such as DN50 or 2 inch.",plantGroup:"The plant, unit, or area group, if stated.",fluidService:"The stated fluid or process service for this line.",pipingMaterial:"The approved piping material class or code.",lineSpec:"The piping line class/specification code. It is separate from the pipe run tag.",flow:"The stated flow value or direction. A line arrow alone is not converted to a value.",flowDirection:"The confirmed upstream/downstream flow direction.",heatTracing:"The stated heat-tracing requirement or type.",insulation:"The stated insulation requirement or code.",fromTag:"The connected source tag or point shown for this pipe run.",toTag:"The connected destination tag or point shown for this pipe run.",groupStatus:"Start, Continue, Branch, Merge, or End-of-Group for the pipe run.",opcDrawing:"The linked off-page connector drawing number, if shown.",connection:"A stated connection or connected item; line geometry is not inferred here.",description:"A short object description from the source. Blank means no clear value was found.",notes:"Drawing notes or additional comments associated with this record.",sourcePage:"The page in the original PDF where this candidate was found.",reviewStatus:"Needs review means check the tag and fields before using them.",stableId:"Permanent object identity. It stays the same when the tag, drawing, size, or geometry changes."},Jo=["Equipment","Equipment Component","Equipment Heat Transfer","Equipment Mechanical","Equipment Other","Equipment Vessel","Hydraulic Circuit","Instrument","Instrument Loop","Item Note","Line Spec","Nozzle","OPC","Package","Pipe Run","Valve"],qi=a=>`pid-mapping-studio:engineering-workspace:v2:${a}`;function Nb(a,r){if(!Array.isArray(a))return Gu(a);const o=a.map(l=>!l||typeof l!="object"||!Array.isArray(l.rows)?l:{...l,rows:l.rows.map(i=>{if(!i||typeof i!="object")return i;const p=typeof i.id=="string"?i.id:"";let g;try{g=up(p)}catch{g=Cb()}g!==i.id&&r?.();const h=typeof i.description=="string"?i.description:"",m=typeof i.notes=="string",u=/^(?:PDF text|OCR text) note — review against source:\s*/iu,y=m?i.notes:i.type==="Item Note"?h.replace(u,""):"",b=!m&&i.type==="Item Note"&&h?u.test(h)?"Drawing note extracted from PDF; check the source page.":"":h;return(!m||b!==h)&&r?.(),{...i,id:g,description:b,notes:y,sourcePage:typeof i.sourcePage=="string"?i.sourcePage:"",placementDrawingRef:typeof i.placementDrawingRef=="string"?i.placementDrawingRef:"",lineSpec:typeof i.lineSpec=="string"?i.lineSpec:"",plantGroup:typeof i.plantGroup=="string"?i.plantGroup:"",fluidService:typeof i.fluidService=="string"?i.fluidService:"",flowDirection:typeof i.flowDirection=="string"?i.flowDirection:"",fromTag:typeof i.fromTag=="string"?i.fromTag:"",toTag:typeof i.toTag=="string"?i.toTag:"",groupStatus:typeof i.groupStatus=="string"?i.groupStatus:"",...i.sourceLocations===void 0?{}:{sourceLocations:i.sourceLocations},reviewStatus:i.reviewStatus==="Needs review"||i.reviewStatus==="Reviewed"?i.reviewStatus:"Manual"}})});return Gu(o)}function Gu(a){if(!Array.isArray(a)||a.length>500)throw new Error("Invalid drawing catalog. Keep a backup and do not overwrite saved data.");const r=new Set,o=new Set;let l=0;for(const i of a){if(!i||typeof i!="object"||typeof i.id!="string"||typeof i.name!="string"||!i.name.trim()||i.name.length>160||typeof i.revision!="string"||i.revision.length>80||!Array.isArray(i.rows)||r.has(i.id))throw new Error("The drawing catalog contains an invalid or duplicate drawing.");r.add(i.id);const p=new Map;for(const g of i.rows){if(g?.type==="Pipe Run"&&!qT.includes(g.groupStatus))throw new Error("Pipe Run group status must be Start, Continue, Branch, Merge, or End-of-Group.");if(!g||typeof g!="object"||typeof g.id!="string"||!Db.test(g.id)||o.has(g.id)||!Jo.includes(g.type)||Pi.some(u=>typeof g[u]!="string"||g[u].length>2e3)||!["Manual","Needs review","Reviewed"].includes(g.reviewStatus)||g.sourcePdfId!==void 0&&typeof g.sourcePdfId!="string"||g.sourceLocations!==void 0&&(!Array.isArray(g.sourceLocations)||g.sourceLocations.length>500||g.sourceLocations.some(u=>{if(!u||typeof u!="object")return!0;const y=u;return!Number.isInteger(y.pageNumber)||y.pageNumber<1||!["x","y","width","height"].every(b=>typeof y[b]=="number"&&Number.isFinite(y[b]))||y.x<0||y.y<0||y.width<=0||y.height<=0||y.x>1||y.y>1||y.x+y.width>1.02||y.y+y.height>1.02}))||!g.itemTag.trim())throw new Error("Each record needs a valid Stable ID, object type, and text fields.");const h=g.itemTag.trim().toLowerCase(),m=p.get(h)??[];if(m.length&&(g.type!=="Pipe Run"||m.some(u=>u.type!=="Pipe Run"||!PT.some(y=>u[y]!==g[y]))))throw new Error("This tag is already used. Repeated Pipe Run tags need different line-defining data.");if(typeof g.x!="number"||typeof g.y!="number"||!Number.isFinite(g.x)||!Number.isFinite(g.y))throw new Error("A record contains invalid coordinates.");p.set(h,[...m,g]),o.add(g.id),l+=1}}if(l>2e4)throw new Error("This local workspace supports up to 20,000 engineering records.");return a}function el(a){const r=window.localStorage.getItem(qi(a));if(!r)return[];let o=!1;const l=Nb(JSON.parse(r),()=>{o=!0});if(o)try{window.localStorage.setItem(qi(a),JSON.stringify(l))}catch{throw new Error("Saved records were read, but the data-format update could not be saved because browser storage is full. The original saved data was not overwritten; download a backup before freeing space.")}return l}function _s(a){return window.localStorage.getItem(qi(a))}function Hu(a,r,o){if(Gu(r),_s(a)!==o)throw new Error("This workspace changed in another tab. Reload before editing to avoid overwriting its records.");const l=JSON.stringify(r);return window.localStorage.setItem(qi(a),l),l}function pp(a,r,o){return{...Object.fromEntries(Pi.map(l=>[l,""])),id:Cb(),type:a,itemTag:r.trim(),drawingRef:o,reviewStatus:"Manual",x:0,y:0}}function MT(a,r){return JSON.stringify({version:5,discipline:a,drawings:r},null,2)}function $T(a,r){const o=JSON.parse(a);if(![2,3,4,5].includes(o?.version)||o?.discipline!==r)throw new Error(`Choose a ${r.toUpperCase()} workspace backup. PFD and P&ID backups stay separate.`);return Nb(o.drawings)}function UT(a,r){const o=new Map;for(const l of[...a??[],...r??[]]){const i=[l.pageNumber,l.x.toFixed(4),l.y.toFixed(4),l.width.toFixed(4),l.height.toFixed(4)].join(":");!o.has(i)&&o.size<500&&o.set(i,l)}return[...o.values()]}function ty(a,r){const o=pp(a.type,a.tag,`${r.alias} · Page ${a.pageNumber}`);o.tagPrefix=a.tagPrefix??"",o.tagSequence=a.tagSequence??"",o.tagSuffix=a.tagSuffix??"";for(const l of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])o[l]=a[l]??"";return o.sourcePage=String(a.pageNumber),o.sourcePdfId=r.id,o.sourceLocations=a.sourceLocations?.slice(0,500),o.reviewStatus="Needs review",a.type==="Item Note"?(o.notes=(a.description??"").replace(/^(?:PDF text|OCR text) note — review against source:\s*/iu,""),o.description="Drawing note extracted from PDF; check the source page."):o.description=a.description??"Tag candidate found in the PDF. Confirm the object type and details before using it.",o}function BT(a,r,o){const l=el(a),i=l.find(S=>S.sourcePdfId===r.id);if(i){const S=new Map(o.map(A=>[A.tag.trim().toLowerCase(),A])),j=new Set(i.rows.map(A=>A.itemTag.trim().toLowerCase()));let C=!1;const D=i.rows.map(A=>{const N=S.get(A.itemTag.trim().toLowerCase());if(!N)return A;const B=UT(A.sourceLocations,N.sourceLocations),x=A.sourcePage||String(N.pageNumber);return B.length===(A.sourceLocations?.length??0)&&x===A.sourcePage?A:(C=!0,{...A,sourcePage:x,sourceLocations:B})}),E=o.flatMap(A=>{const N=A.tag.trim().toLowerCase();return!N||j.has(N)?[]:(j.add(N),C=!0,[ty(A,r)])});if(C){const A=l.map(N=>N.id===i.id?{...N,rows:[...D,...E]}:N);Hu(a,A,_s(a))}return{drawingId:i.id,recordCount:D.length+E.length}}const p=new Set(l.map(S=>S.name.toLowerCase())),g=`${r.alias} · Extracted data`;let h=g,m=2;for(;p.has(h.toLowerCase());)h=`${g} (${m++})`;const u=new Set,y=o.flatMap(S=>{const j=S.tag.trim().toLowerCase();return!j||u.has(j)?[]:(u.add(j),[ty(S,r)])}),b={id:crypto.randomUUID(),name:h,revision:"Local PDF extraction · review required",sourcePdfId:r.id,sourceAlias:r.alias,rows:y},w=_s(a);return Hu(a,[...l,b],w),{drawingId:b.id,recordCount:y.length}}function xi(a,r,o){const l=URL.createObjectURL(new Blob([r],{type:o})),i=document.createElement("a");i.href=l,i.download=a,i.click(),setTimeout(()=>URL.revokeObjectURL(l),1e3)}function FT(a){return kb(["Object type",...Un.map(r=>kt[r])],a.map(r=>[r.type,...Un.map(o=>mn(r,o))]))}function kb(a,r){const o=l=>`"${(/^[\s]*[=+\-@\t\r]/.test(l)?`'${l}`:l).replaceAll('"','""')}"`;return"\uFEFF"+[a,...r].map(l=>l.map(i=>o(String(i))).join(",")).join(`\r
`)}function zT(a,r){const o=[];let l=[],i="",p=!1;const g=a.replace(/^\uFEFF/,"");for(let w=0;w<g.length;w++){const S=g[w];if(S==='"')if(p&&g[w+1]==='"')i+='"',w++;else{if(!p&&i!=="")throw new Error("Invalid CSV quoting.");p=!p}else!p&&S===","?(l.push(i),i=""):!p&&(S===`
`||S==="\r")?(l.push(i),l.some(j=>j.trim())&&o.push(l),l=[],i="",S==="\r"&&g[w+1]===`
`&&w++):i+=S}if(p)throw new Error("The CSV has an unclosed quoted cell.");l.push(i),l.some(w=>w.trim())&&o.push(l);const h=o.shift()?.map(w=>w.trim().toLowerCase())??[],m=h.findIndex(w=>w==="object type"||w==="type"),u=Pi.map(w=>h.findIndex(S=>S===w.toLowerCase()||S===kt[w].toLowerCase())),y=h.findIndex(w=>w==="stableid"||w===kt.stableId.toLowerCase());if(m<0||u[0]<0)throw new Error("CSV needs Object type and Item Tag columns. Download the template first.");if(!o.length)throw new Error("The CSV contains no records.");if(o.length>2e4)throw new Error("Import at most 20,000 records.");const b=new Set;return o.map((w,S)=>{if(w.length!==h.length)throw new Error(`CSV row ${S+2} has the wrong number of columns.`);const j=Jo.find(D=>D.toLowerCase()===w[m]?.trim().toLowerCase());if(!j)throw new Error(`CSV row ${S+2} has an unsupported object type.`);const C=pp(j,w[u[0]]??"",r);if(y>=0&&w[y]?.trim())try{C.id=up(w[y].trim())}catch{throw new Error(`CSV row ${S+2} has an invalid Stable ID.`)}if(b.has(C.id))throw new Error(`CSV row ${S+2} repeats a Stable ID.`);return b.add(C.id),Pi.forEach((D,E)=>{if(u[E]<0)return;const A=w[u[E]].trim();D==="reviewStatus"?C.reviewStatus=["Needs review","Reviewed","Manual"].includes(A)?A:"Manual":C[D]=A}),C.drawingRef||(C.drawingRef=r),C})}function YT(a,r=!1,o="",l=[]){const i=a.map((g,h)=>`(${h+1} ${g})`).join(" "),p=l.map(g=>`("${String(g.documentNumber).padStart(2,"0")}" ${g.pageNumber} ${g.scaleFactor} "${g.method}" ${g.pageWidthMm} ${g.pageHeightMm} ${g.targetWidthMm} ${g.targetHeightMm})`).join(`
  `);return`; Single working drawing PDF batch runner.
; Each approved page is saved to a separate, never-overwritten DWG.
(vl-load-com)
(setq *p2dwg-project-title-block-enabled* ${r?"T":"nil"})
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

(defun p2dwg-write-page-progress (path / completed total queued running review entry)
  (setq completed 0 total (length *p2dwg-page-states*) queued 0 running 0 review 0)
  (foreach entry *p2dwg-page-states*
    (cond
      ((= (cadr entry) "COMPLETED") (setq completed (1+ completed)))
      ((= (cadr entry) "QUEUED") (setq queued (1+ queued)))
      ((= (cadr entry) "RUNNING") (setq running (1+ running)))
      ((= (cadr entry) "NEEDS_REVIEW") (setq review (1+ review))))
  )
  (p2dwg-log path
    (strcat "PROGRESS|completed=" (itoa completed) "|total=" (itoa total)
      "|queued=" (itoa queued) "|running=" (itoa running)
      "|needs-review=" (itoa review)))
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
                          pageScalePlan pageScaleFactor pageScaleMode)
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
          (if (findfile (nth 5 job))
            (if (= (p2dwg-page-state (car job) (nth 1 job)) "COMPLETED")
              (p2dwg-log logPath
                (strcat "SKIPPED_COMPLETED|SOURCE_" (car job) ".pdf|"
                  (itoa (nth 1 job)) "|" (nth 5 job)))
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
                (strcat "WORKER_STARTED|SOURCE_" (car job) ".pdf|" (itoa (nth 1 job))))
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
                  (list (nth 4 job) (nth 1 job) (nth 5 job) pageScaleFactor pageScaleMode)))
              (setq owned (p2dwg-owned-entities baseline))
              (if pageResult
                (progn
                  (if (not (findfile (nth 5 job)))
                    (p2dwg-raise "Page worker returned without a saved DWG. Batch stopped."))
                  (p2dwg-set-page-state logPath (car job) (nth 1 job)
                    "COMPLETED" (nth 5 job))
                  ; This uniquely created scratch file is not a final page output.
                  (if (not (vl-file-delete workingPath))
                    (p2dwg-log logPath (strcat "WORKING_COPY_RETAINED|" workingPath)))
                )
                (progn
                  (setq stopped T)
                  (p2dwg-set-page-state logPath (car job) (nth 1 job)
                    "NEEDS_REVIEW" (nth 5 job))
                  (p2dwg-log logPath (strcat "REVIEW_STOPPED|" *p2dwg-stage*))
                  (prompt "\\nReview not confirmed. Batch stopped; unfinished page remains open.")
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
            "NEEDS_REVIEW" *p2dwg-current-output*)))
      (setq message (strcat "BATCH_STOPPED|" *p2dwg-stage* "|"
        (p2dwg-error-message result)))
      (vl-catch-all-apply 'p2dwg-log (list logPath message))
      (prompt (strcat "\\n" message
        "\\nUnfinished working drawing stays open. Previously saved page DWGs were not modified."))))
  (princ)
)

(defun p2dwg-start (documentSpecs firstPdf / outputChoice scaleFactor directory
                        outputDirectory outputBase spec token sourcePath helperPath
                        page queue logPath titleBlockPath titleBlockScopePath entry)
  (if (and (boundp '*p2dwg-controller-active*) *p2dwg-controller-active*)
    (p2dwg-raise "A batch is already running in this working drawing."))
  (p2dwg-assert-blank)
  (setq directory (vl-filename-directory firstPdf))
  (if (not (findfile (strcat directory "/RUN_BATCH.lsp")))
    (p2dwg-raise "RUN_BATCH.lsp must remain in the extracted folder with the source PDFs."))
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
        (setq token (p2dwg-pad (car spec) 2))
        (setq sourcePath (strcat directory "/SOURCE_" token ".pdf"))
        (setq helperPath (strcat directory "/DOC_" token ".lsp"))
        (if (or (not (findfile sourcePath)) (not (findfile helperPath)))
          (p2dwg-raise (strcat "Missing local input/helper for SOURCE_" token ".pdf")))
        (setq page 1)
        (repeat (cadr spec)
          (setq queue (cons
            (list token page helperPath (strcat "p2dwg" token "-run-page")
              sourcePath
              (strcat outputDirectory "/" outputBase "_doc-" token "_page-"
                (p2dwg-pad page 3) ".dwg"))
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
          (p2dwg-start '(${i}) firstPdf)))
      nil))
  (if (vl-catch-all-error-p result)
    (prompt (strcat "\\nBatch not started: " (p2dwg-error-message result))))
  (princ)
)
(princ "\\nLoaded PDF2DWGBATCH (single working drawing). Start only in a NEW unsaved blank DWT drawing.")
(princ)
`}function VT(a,r){const o=String(a).padStart(2,"0"),l=`p2dwg${o}`;return`
(defun ${l}-pdf-input (value)
  ; Do not feed arguments to AutoCAD if PDFIMPORT stopped or never started.
  (if (not (wcmatch (strcase (getvar "CMDNAMES")) "*PDFIMPORT*"))
    (p2dwg-raise "PDFIMPORT is no longer active; remaining inputs were not sent."))
  (command value)
)

(defun ${l}-run-page (pdfPath page outputPath scaleFactor scaleMode /
                             currentDoc beforeEntity importedEntities redactions
                             scrubAnswer pipeConfirmed reviewConfirmed oldOsMode)
  (setq currentDoc (vla-get-ActiveDocument (vlax-get-acad-object)))
  (if (findfile outputPath)
    (p2dwg-raise "Output appeared after queueing. It will not be overwritten."))
  (setq *p2dwg-batch-directory* (vl-filename-directory pdfPath))
  (setq *p2dwg-entity-map-path*
    (strcat (vl-filename-directory outputPath) "/AUTOCAD_ENTITY_MAP.log"))
  (setq *p2dwg-geometry-scan-path*
    (strcat (vl-filename-directory outputPath) "/AUTOCAD_GEOMETRY_SCAN.log"))
  (setq *p2dwg-source-alias* "SOURCE_${o}.pdf")
  (setq *p2dwg-source-page* page)
  (setq *p2dwg-scale-status* "UNVERIFIED")
  (setq *p2dwg-pipe-sequence* 0)
  (setvar "FILEDIA" 0)
  (setvar "CMDECHO" 1)
  (setq oldOsMode (getvar "OSMODE"))
  (setvar "OSMODE" 0)
  (setvar "TILEMODE" 1)
  (setq *p2dwg-stage* "APPROVED_STANDARDS")
  (${l}-apply-approved-cad-standards)
  (${l}-batch-log (strcat "MAPPING_PREFLIGHT|BLOCKS="
    (itoa (length *p2dwg-approved-symbols*)) "|TEXT_STYLES="
    (itoa (length *p2dwg-approved-text-styles*))))
  (if (null *p2dwg-approved-symbols*)
    (progn
      (initget "Yes No")
      (if (/= (getkword "\\nNo compatible approved blocks are available. This run can only retain RAW PDF geometry. Continue a raw-only test? [Yes/No] <No>: ") "Yes")
        (p2dwg-raise "No approved blocks for this discipline/project. Approve compatible Legends Library symbols before a mapped CAD test."))))
  (setq *p2dwg-stage* "PDFIMPORT_START")
  (${l}-batch-log (strcat "IMPORT_STARTED|SOURCE_${o}.pdf|" (itoa page)))
  (prompt (strcat "\\nImporting PDF page " (itoa page) " of ${r}..."))
  (setq beforeEntity (entlast))
  (command "_.-PDFIMPORT")
  (setq *p2dwg-stage* "PDFIMPORT_FILE_OPTION")
  (${l}-pdf-input "_File")
  (setq *p2dwg-stage* "PDFIMPORT_PATH")
  (${l}-pdf-input pdfPath)
  (setq *p2dwg-stage* "PDFIMPORT_PAGE")
  (${l}-pdf-input (itoa page))
  (setq *p2dwg-stage* "PDFIMPORT_ORIGIN")
  (${l}-pdf-input '(0.0 0.0 0.0))
  (setq *p2dwg-stage* "PDFIMPORT_SCALE")
  (${l}-pdf-input scaleFactor)
  (setq *p2dwg-stage* "PDFIMPORT_ROTATION")
  (${l}-pdf-input 0.0)
  (if (wcmatch (strcase (getvar "CMDNAMES")) "*PDFIMPORT*")
    (p2dwg-raise "PDFIMPORT did not finish after rotation. No page was saved."))
  (setvar "OSMODE" oldOsMode)
  (setq importedEntities (${l}-collect-imported-entities beforeEntity))
  (if (null importedEntities)
    (p2dwg-raise "PDFIMPORT produced no usable drawing entities. PDF underlays or raster-only pages are not accepted as editable CAD."))
  (${l}-normalize-pdf-import-layers importedEntities)
  (${l}-batch-log (strcat "IMPORT_COMPLETED|SOURCE_${o}.pdf|"
    (itoa page) "|ENTITIES=" (itoa (sslength importedEntities))))
  (${l}-record-mapping importedEntities "RAW" nil nil)
  (if (= (strcase scaleMode) "TITLE_BLOCK_PAGE_SIZE")
    (progn
      (setq *p2dwg-stage* "SCALE_PAGE_SIZE")
      (setq *p2dwg-scale-status* "VERIFIED")
      (setq *p2dwg-effective-scale* scaleFactor)
      (${l}-batch-log
        (strcat "SCALE_VERIFIED|SOURCE_${o}.pdf|" (itoa page)
          "|METHOD=" scaleMode "|FACTOR=" (rtos scaleFactor 2 10)))
      (prompt
        (strcat "\\nScale verified from PDF page dimensions ("
          scaleMode "). Imported PDF geometry only was scaled; the title block is unchanged.")))
    (progn
      (setq *p2dwg-stage* "SCALE_REVIEW")
      (${l}-batch-log (strcat "SCALE_REVIEW_REQUIRED|SOURCE_${o}.pdf|" (itoa page)))
      (prompt "\\nScale needs review. Choose a known 12 mm instrument side or 6/3 mm valve side; no guessed scale will be saved.")
      (command "_.ZOOM" "_Extents")
      (${l}-calibrate-import importedEntities)))
  (${l}-stamp-page importedEntities)
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
      (${l}-review-approved-blocks importedEntities)
      (setq *p2dwg-stage* "TEXT_FORMAT_REVIEW")
      (setq *p2dwg-stage* "PIPE_RUN_REVIEW")
      (setq pipeConfirmed (${l}-tag-pipe-runs importedEntities))
      (setq *p2dwg-stage* "SYMBOL_REVIEW")
      (setq reviewConfirmed
        (if pipeConfirmed (${l}-review-unsupported importedEntities) nil))
      (if reviewConfirmed
        (progn
          ; Attribute association has first refusal; remaining text is reviewed loose.
          (${l}-review-text importedEntities)
          (setq *p2dwg-stage* "SAVE_DWG")
          (${l}-finalize-source-layer-states)
          (if (/= (strcase *p2dwg-scale-status*) "VERIFIED")
            (p2dwg-raise "Final DWG save blocked because this page's scale is not VERIFIED.")
          )
          (if (findfile outputPath)
            (p2dwg-raise "Output already exists. No DWG was overwritten."))
          (vla-SaveAs currentDoc outputPath)
          (${l}-batch-log
            (strcat "SAVED|SOURCE_${o}.pdf|" (itoa page) "|" outputPath
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
(princ "\\nLoaded PDF2DWG${o} (single working drawing page worker).")
(princ)
`}const XT=[["EQUIP","f_Equip"],["EQUIP_INT","f_Equip_Int"],["INST","f_Inst"],["PIPE_INLINE","f_Pipe_Inline"],["PIPE_PRI","f_Pipe_Pri"],["PIPE_SEC","f_Pipe_Sec"],["MISC","f_Misc"],["TEXT","f_gen_Text"]];function GT(a){const r=new Map(a.map(o=>[o.trim().toUpperCase(),o.trim()]));return XT.flatMap(([o,l])=>{if(r.has(o.toUpperCase()))return[];const i=r.get(l.toUpperCase());return i?[[o,i]]:[]})}function ay(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function HT(a,r){const o=r.map(([l,i])=>`(${ay(l.toUpperCase())} . ${ay(i)})`).join(`
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
`}const ny=25.4/72,Si=.005,KT=1e-6,WT=1e3;function ZT(a,r){if(!Number.isFinite(a.width)||!Number.isFinite(a.height)||a.width<1||a.height<1||a.width>1e5||a.height>1e5)return null;const o=a.width*ny,l=a.height*ny;if(!r)return null;const{widthMm:i,heightMm:p}=r;if(!Number.isFinite(i)||!Number.isFinite(p)||i<=0||p<=0)return null;const g=Math.abs(o-i)/i,h=Math.abs(l-p)/p;if(g>Si||h>Si)return null;const m=a.width/a.height,u=i/p;if(Math.abs(m-u)/u>Si)return null;const b=i/a.width,w=p/a.height,S=(b+w)/2,j=Math.abs(b-w)/S;return!Number.isFinite(S)||S<KT||S>WT||j>Si?null:{scaleFactor:1,method:"TITLE_BLOCK_PAGE_SIZE",pageWidthMm:o,pageHeightMm:l,targetWidthMm:i,targetHeightMm:p}}const QT=["RAW","CANDIDATE","MATCHED","CONFIRMED","UNMATCHED","NEEDS_REVIEW"];function JT(a){return`
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
`}function e2(a){return`
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
`}function t2(a){return`
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
  (foreach app '("PIDTEXTLINK" "PIDATTRRULE" "PIDTEXTREOPEN")
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
`}function a2(a){return`
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

(defun ${a}-prepare-attributes-worker (reference record bounds imported approved-id candidate /
    definitions attributes definition attribute tag rules rule value source style snapshot original-geometry status flags
    entry same-definitions)
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
        (setq value (if rule (cdr (assoc (nth 1 rule) (nth 4 record))) nil))
        (setq source (if (and rule (${a}-attribute-value-valid-p value (nth 2 rule)))
          (${a}-attribute-source imported bounds value (nth 3 rule)) nil))
        (if (and attribute style rule source (= (length same-definitions) 1)
                 (not (wcmatch (vla-get-TextString attribute) "*%<*"))
                 (not (and (= (nth 2 rule) "tag") (${a}-duplicate-tag-p value reference))))
          (progn
            (setq snapshot (entget (vlax-vla-object->ename attribute) '("*"))
              original-geometry (${a}-text-geometry (vlax-vla-object->ename attribute)))
            ; Register rollback BEFORE the first mutation, including setter errors.
            (setq *p2dwg-pending-attributes*
              (cons (list (vlax-vla-object->ename attribute) snapshot source tag rule)
                *p2dwg-pending-attributes*))
            (vla-put-TextString attribute value)
            (if (not (and
                (= (vla-get-TextString attribute) value)
                (${a}-font-text (vlax-vla-object->ename attribute) style nil)
                (equal original-geometry (${a}-text-geometry (vlax-vla-object->ename attribute)) 0.00000001)))
              (p2dwg-raise "Attribute value/font changed its approved geometry.")))
          (progn
            (setq status "NEEDS_REVIEW")
            (prompt (strcat "\\nATTRIBUTE NEEDS_REVIEW: " tag
              " (missing/ambiguous definition, rule, bounded PDF evidence, EDE value or duplicate tag).")))))))
  (${a}-attribute-summary reference record approved-id candidate status)
  *p2dwg-pending-attributes*)

(defun ${a}-restore-pending-attributes (plan / entry)
  (foreach entry plan
    (if (not (${a}-text-restore (car entry) (cadr entry)))
      (p2dwg-raise "Attribute rollback failed; this page was not saved.")))
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

(defun ${a}-commit-attributes (plan reference record approved-id candidate / entry status)
  (setq status (cdr (nth 4 (${a}-app-data reference "PIDATTRSTATUS"))))
  (foreach entry plan
    (if (not (and
        (${a}-put-app (car entry) "PIDATTRRULE"
          (list (cons 1000 (car record)) (cons 1000 (nth 3 entry))
            (cons 1000 (nth 1 (nth 4 entry))) (cons 1000 (nth 2 (nth 4 entry)))
            (cons 1000 (nth 3 (nth 4 entry))) '(1000 . "BOUNDED_PDF_AND_CONFIRMED_EDE_V1")))
        (${a}-archive-text (nth 2 entry) (car entry) (car record) approved-id (nth 3 entry) candidate)))
      (progn
        (${a}-restore-pending-attributes (list entry))
        (setq status "NEEDS_REVIEW"))))
  (${a}-attribute-summary reference record approved-id candidate status)
  (setq *p2dwg-pending-attributes* nil)
  T)
`}function n2(a){return["PROJECT_TITLE_BLOCK_SCOPE_V1",`workspaceType=${a.workspaceType}`,`projectId=${a.groupId}`,`titleBlockId=${a.titleBlockId}`,`titleBlockPath=${a.titleBlockPath}`,`xrefName=${a.xrefName}`,`expectedSizeMm=${a.expectedSize.widthMm}x${a.expectedSize.heightMm}`,`version=${a.version}`,""].join(`
`)}function r2(a,r,o,l,i=[],p=[],g=[]){const h=String(a).padStart(2,"0"),m=`PDF2DWG${h}`,u=`p2dwg${h}`,y=QT.map(vt).join(" "),b=o.map(A=>`(${vt(A.fallbackCategory.toLowerCase())} ${vt(A.blockName)} ${vt(A.sourcePath)} ${vt(A.targetLayer)} ${A.wipeoutBoundary?x1(A.wipeoutBoundary):"nil"} ${vt(A.blockAssetId)} (${(A.requiredShapeFonts??[]).map(vt).join(" ")}))`).join(`
    `),w=l.filter(A=>A.category==="layer").filter(A=>A.name.trim().toUpperCase()!=="0").map(A=>{const N=Number(A.detail.match(/(?:^|;)color=(\d+)/i)?.[1]??7),B=Number(A.detail.match(/(?:^|;)lineweight=(-?\d+)/i)?.[1]??25),x=[-3,-2,-1].includes(B)||Number.isInteger(B)&&B>=0&&B<=211,R=A.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]??"CONTINUOUS";return`(${vt(A.name)} ${Number.isInteger(N)&&N>0&&N<=255?N:7} ${x?B:25} ${vt(R)})`}).join(`
    `),S=l.filter(A=>A.category==="layer").map(A=>A.name.trim()).filter(Boolean),j=GT(S),C=l.filter(A=>A.category==="textStyle").map(A=>{const N=(R,L)=>A.detail.match(new RegExp(`(?:^|;)${R}=([^;]*)`,"i"))?.[1]??L,B=(R,L)=>{const P=Number(N(R,String(L)));if(!Number.isFinite(P)||R==="height"&&P<0||R==="width"&&P<=0)throw new Error(`Approved text style "${A.name}" has an invalid ${R}. Re-review the supplied CAD text format.`);return String(P)},x=N("font","").trim();if(!x)throw new Error(`Approved text style "${A.name}" has no font. Re-review it instead of substituting a default font.`);return`(${vt(A.name)} ${B("height",0)} ${B("width",1)} ${B("oblique",0)} ${vt(x)} ${vt(N("bigfont",""))})`}).join(`
    `),D=l.filter(A=>A.category==="linetype").filter(A=>!["CONTINUOUS","BYLAYER","BYBLOCK"].includes(A.name.trim().toUpperCase())).flatMap(A=>{const N=Rb(A.name,A.detail);if(!N)throw new Error(`Approved linetype "${A.name}" has an unsupported or incomplete definition. Re-extract it with the current extractor; the runner will not omit its marks or substitute Continuous.`);const B=A.detail.match(/(?:^|;)description=([^;]*)/i)?.[1]?.trim()||A.name,x=N.segments.map(R=>{const L=[String(R.length),String(R.flags)];return R.flags===4&&L.push(String(R.shapeNumber),vt(R.styleName),vt(R.shapeFile),String(R.scale),String(R.rotation),String(R.offsetX),String(R.offsetY)),`(${L.join(" ")})`}).join(" ");return[`(${vt(A.name)} ${vt(B)} ${String(N.patternLength)} (${x}))`]}).join(`
    `),E=i.map(A=>`(${vt(A.stableId.toUpperCase())} ${vt(A.itemTag.trim())} ${vt(A.type)} ${A.pageNumber} (${ll.map(N=>`(${vt(N.toUpperCase())} . ${vt(N==="itemTag"?A.itemTag.trim():A.fields?.[N]??"")})`).join(" ")}))`).join(`
    `);return u2(l),`; Local AutoCAD runner. The matching source PDF is packaged separately.
; Copyright (c) 2026 gaurav.cbiindia.
; Run command ${m} in AutoCAD for Windows.
; Each imported entity is stamped with a generic source alias and source page.

(vl-load-com)
(setq *p2dwg-attribute-rules* '(${p.map(A=>`(${vt(A.attributeTag)} ${vt(A.edeField.toUpperCase())} ${vt(A.valueType)} ${vt(A.textZone)})`).join(" ")}))
(setq *p2dwg-conflicting-tags* '(${g.map(A=>vt(A.toUpperCase())).join(" ")}))
(if (not (boundp '*p2dwg-batch-mode*)) (setq *p2dwg-batch-mode* nil))
(setq *p2dwg-approved-symbols* '(
    ${b}
))
(setq *p2dwg-approved-layers* '(
    ${w}
))
(setq *p2dwg-approved-text-styles* '(
    ${C}
))
(setq *p2dwg-approved-linetypes* '(
    ${D}
))
(setq *p2dwg-ede-records* '(
    ${E}
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

${JT(u)}
${t2(u)}
${a2(u)}
${e2(u)}
${HT(u,j)}
${VT(a,r)}
`}function s2(a,r,o){const l=a.flatMap((i,p)=>(i.pageSizesPoints??[]).flatMap((g,h)=>{const m=ZT(g,r?.expectedSize);return m?[{documentNumber:p+1,pageNumber:h+1,scaleFactor:m.scaleFactor,method:m.method,pageWidthMm:m.pageWidthMm,pageHeightMm:m.pageHeightMm,targetWidthMm:m.targetWidthMm,targetHeightMm:m.targetHeightMm}]:[]}));return YT(a.map(i=>i.pageCount),!!r,o,l)}function o2(a,r){const o=g=>{const h=[2166136261,2654435769,2246822507,3266489909],m=[16777619,1540483477,668265261,374761393];for(const u of g)for(let y=0;y<h.length;y+=1)h[y]=Math.imul(h[y]^u,m[y])>>>0;return h.map(u=>u.toString(16).padStart(8,"0")).join("")},l=a.map((g,h)=>[h+1,g.sourceHash?.toLowerCase()??o(g.pdfBytes),g.pageCount,g.discipline,g.projectId??"",g.titleBlockGroupId??"",JSON.stringify(g.pageSizesPoints??[])].join("|")),i=[];for(const g of r)g.path==="RUN_BATCH.lsp"||g.path==="README_LOCAL_AUTOCAD.txt"||/^SOURCE_\d+\.pdf$/i.test(g.path)||i.push(`${g.path}|${g.content.length}|${o(g.content)}`);const p=["LOCAL_AUTOCAD_BATCH_V1",...l.map(g=>`JOB|${g}`),...i.map(g=>`FILE|${g}`)].join(`
`);return o(new TextEncoder().encode(p))}function l2(a,r){return`LOCAL AUTOCAD PDF-TO-DWG RUNNER
 ---------------------------------

This package contains the selected source PDFs and AutoLISP helpers. It does
not contain pre-generated DWG files. The ZIP is prepared in your browser and
is not uploaded to the app. Keep it private because it contains source PDFs.

${a.map((i,p)=>`- PDF ${p+1} (${i.discipline}): ${i.pageCount} page(s) -> ${i.pageCount} native DWG file(s)`).join(`
`)}

REQUIREMENTS
- Windows desktop AutoCAD with AutoLISP, ActiveX, and -PDFIMPORT.
- Start in a NEW, unsaved blank drawing made from an approved DWT template.
  Existing saved drawings or drawings containing objects are rejected.

RUN
1. Extract this package on the Windows workstation that has AutoCAD.
2. In AutoCAD, use NEW and choose your blank template (for example acadiso.dwt).
   Leave that drawing unsaved. Run APPLOAD and load RUN_BATCH.lsp in it.
3. Run PDF2DWGBATCH once. Select SOURCE_01.pdf to locate the extracted batch,
   then choose a neutral output name. The initial PDF scale is derived from
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
    page as QUEUED, RUNNING, COMPLETED, or NEEDS_REVIEW and includes batch
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
`}function i2(a,r=[],o=[],l=[],i){if(a.length===0||a.some(E=>!Number.isInteger(E.pageCount)||E.pageCount<1||!["PFD","P&ID"].includes(E.discipline)||!(E.pdfBytes instanceof Uint8Array)||E.pdfBytes.length===0||E.pageSizesPoints!==void 0&&(E.pageSizesPoints.length!==E.pageCount||E.pageSizesPoints.some(A=>!Number.isFinite(A.width)||!Number.isFinite(A.height)||A.width<=0||A.height<=0))||E.sourceHash!==void 0&&!/^[a-f0-9]{64}$/i.test(E.sourceHash)))throw new Error("Add at least one readable PDF before preparing an AutoCAD runner.");if(a.some(E=>(E.edeRecords??[]).some(A=>!/^[0-9A-F]{32}$/i.test(A.stableId)||typeof A.itemTag!="string"||!A.type.trim()||Object.entries(A.fields??{}).some(([N,B])=>!ll.includes(N)||typeof B!="string")||!Number.isInteger(A.pageNumber)||A.pageNumber<1||A.pageNumber>E.pageCount)))throw new Error("An EDE link in the AutoCAD runner is invalid. Reopen the EDE record and prepare a fresh runner.");if(a.some(E=>(E.conflictingTags??[]).some(A=>typeof A!="string")))throw new Error("The runner duplicate-tag registry is invalid.");const p=new Set(a.map(E=>E.titleBlockGroupId?.trim()??""));if(p.size>1)throw new Error("Prepare one AutoCAD runner per group so each batch uses only its own title block.");const g=[...p][0]??"";if(g){if(!i||i.groupId!==g)throw new Error("Upload a standalone DWG title block for the selected group before preparing its AutoCAD runner.");const E=new Set(a.map(N=>N.discipline));if(E.size!==1)throw new Error("Prepare separate PFD and P&ID runners so each workspace keeps its own shared title block.");if(i.workspaceType!==[...E][0])throw new Error(`The selected title block belongs to ${i.workspaceType}; choose the matching workspace title block.`);if(!(i.content instanceof Uint8Array)||!i.content.length)throw new Error("The selected group title block is not a valid AutoCAD DWG file.");const A=new TextDecoder().decode(i.content.subarray(0,6));if(!/^AC10\d{2}$/.test(A))throw new Error("The selected group title block is not a valid AutoCAD DWG file.");if(i.titleBlockPath!=="PROJECT_TITLE_BLOCK.dwg"||i.xrefName!=="P2DWG_PROJECT_TITLE_BLOCK"||!i.titleBlockId.trim()||!Number.isInteger(i.version)||i.version<1||!Number.isFinite(i.expectedSize.widthMm)||!Number.isFinite(i.expectedSize.heightMm)||i.expectedSize.widthMm<=0||i.expectedSize.heightMm<=0)throw new Error("The project title-block record is incomplete. Save the title block again in the selected workspace.")}else if(i)throw new Error("A project title block can only be used with PDFs from the same selected group.");const h=a.map(E=>r.filter(A=>(A.discipline===E.discipline||A.discipline==="Shared")&&(A.projectId?A.projectId===E.projectId:!0))),m=[...new Map(h.flat().map(E=>[`${E.blockAssetId}|${E.blockName}|${E.fallbackCategory}`,E])).values()];for(const E of m)if(E.fallbackCategory.trim().toLowerCase()==="valve"){if(!E.wipeoutBoundary)throw new Error(`Valve "${E.blockName}" has no reviewed body mask outline. Re-review the valve in the Legends Library before preparing the AutoCAD runner.`);try{Br(E.wipeoutBoundary.map(([A,N])=>`${A},${N}`).join(";"))}catch(A){throw new Error(`Valve "${E.blockName}" has an invalid reviewed body mask outline. ${A instanceof Error?A.message:"Re-review the valve mask."}`)}}const u=new Set(o.map(E=>E.id));if(m.some(E=>!u.has(E.blockAssetId)))throw new Error("An approved symbol refers to a missing locally extracted block drawing.");if(m.some(E=>!E.targetLayer.trim()||E.targetLayer.trim().toUpperCase()==="0"))throw new Error("Every approved block needs an approved non-zero target CAD layer before the AutoCAD runner can be prepared.");const y=new Map,b=new Map,w=new Map,S=new Map,j=[...new Set(m.map(E=>E.blockAssetId))];j.forEach((E,A)=>{const N=o.find(x=>x.id===E),B=`CAD_SYMBOLS/SYMBOL_${String(A+1).padStart(3,"0")}`;if(N.format==="DXF"){const x=Ps(N.content).content,R=new Eb(x).nativeAssetInfo();b.set(E,`${B}.dxf`),y.set(E,`${B}.dxf`),w.set(E,R.requiredShapeFonts),S.set(E,x)}else y.set(E,`${B}.dwg`),b.set(E,`${B}.dwg`),w.set(E,[])});const C=[{path:"RUN_BATCH.lsp",content:new Uint8Array},...i?[{path:"PROJECT_TITLE_BLOCK.dwg",content:i.content},{path:"PROJECT_TITLE_BLOCK_SCOPE.txt",content:new TextEncoder().encode(n2(i))}]:[],...o.filter(E=>j.includes(E.id)).map(E=>({path:b.get(E.id),content:S.get(E.id)??E.content})),...m.length?[{path:"CAD_BLOCK_GEOMETRY_INDEX.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,note:"Descriptors are local geometry data, not validated match signatures. Missing or empty descriptors require re-importing the extraction ZIP with its overview DXF or reviewing unsupported geometry.",blocks:m.map(E=>{const A=o.find(R=>R.id===E.blockAssetId),N=A?.geometryDescriptor??null,x=!!(N?.primitives.length&&N.bounds)?"INDEXED":A?.geometryIndexError??(N?"EMPTY_OR_UNSUPPORTED":"OVERVIEW_DXF_REQUIRED");return{blockAssetId:E.blockAssetId,blockName:E.blockName,category:E.fallbackCategory,discipline:E.discipline,targetLayer:E.targetLayer,targetLayerRules:l.find(R=>R.category==="layer"&&R.name.trim().toLowerCase()===E.targetLayer.trim().toLowerCase())?.detail??null,projectScope:E.projectId?"project":"company",indexStatus:x,indexError:A?.geometryIndexError??null,geometry:N}})},null,2))}]:[],...a.flatMap((E,A)=>{const N=String(A+1).padStart(2,"0"),B=r.filter(P=>(P.discipline===E.discipline||P.discipline==="Shared")&&(P.projectId?P.projectId===E.projectId:!0)&&P.blockAssetId&&y.has(P.blockAssetId)).map(P=>{const H=y.get(P.blockAssetId),fe=H.split("/").at(-1)?.replace(/\.(?:dwg|dxf)$/i,"")??"APPROVED_SYMBOL";return{...P,blockName:fe,sourcePath:H,requiredShapeFonts:w.get(P.blockAssetId)??[]}}),x=l.filter(P=>(P.discipline===E.discipline||P.discipline==="Shared")&&(P.projectId?P.projectId===E.projectId:!0)),R=[...new Map(x.map(P=>[`${P.category}:${P.name.toLowerCase()}`,P])).values()],L=B.find(P=>!R.some(H=>H.category==="layer"&&H.name.toLowerCase()===P.targetLayer.toLowerCase()));if(L)throw new Error(`Approved CAD layer "${L.targetLayer}" is not included in this runner page's approved standards.`);return[{path:`DOC_${N}.lsp`,content:new TextEncoder().encode(r2(A+1,E.pageCount,B,R,E.edeRecords??[],lp(E.attributeRules??[]),E.conflictingTags??[]))},{path:`SOURCE_${N}.pdf`,content:E.pdfBytes}]})],D=o2(a,C);return C[0].content=new TextEncoder().encode(s2(a,i,D)),C.push({path:"README_LOCAL_AUTOCAD.txt",content:new TextEncoder().encode(l2(a,!!i))}),lb(C)}function ry(a,r){const o=a.match(new RegExp(`(?:^|;)${r}=\\(([^)]*)\\)`,"i"));if(!o)return null;const l=o[1].trim();return!l||/^nil$/i.test(l)?[]:l.split(/[\s,]+/)}function c2(a,r){const o=a.match(new RegExp(`(?:^|;)${r}=(.*?)(?=;[A-Za-z][A-Za-z0-9_]*=|$)`,"i"));if(!o)return null;const l=[],i=/\(\s*(\d+)\s*\.\s*(?:"((?:\\.|[^"])*)"|([^\s)]+))\s*\)/g;let p;for(;(p=i.exec(o[1]))!==null;){const g=p[2]===void 0?p[3]:p[2].replaceAll('\\"','"').replaceAll("\\\\","\\");l.push({code:Number(p[1]),value:g})}return l}function d2(a){let r=0;for(const l of a.toUpperCase())r=r*31+l.charCodeAt(0)>>>0;return`P2DWG_${a.toUpperCase().replace(/[^A-Z0-9_-]/g,"_").slice(0,16)||"SHAPE"}_${r.toString(36).toUpperCase()}`}function Rb(a,r){const o=ry(r,"pattern"),l=ry(r,"patternFlags")??[];if(!o?.length||l.length>0&&l.length!==o.length)return null;const i=o.map(Number),p=l.map(Number);if(i.some(D=>!Number.isFinite(D))||i.every(D=>D===0)||i.reduce((D,E)=>D+Math.abs(E),0)<=0||p.some(D=>!Number.isInteger(D)))return null;const g=c2(r,"complexData"),h=new Map,m=/\(\s*"((?:\\.|[^"])*)"\s*\.\s*"((?:\\.|[^"])*)"\s*\)/g,u=r.match(/(?:^|;)shapeFonts=(.*)$/i);let y;if(u)for(;(y=m.exec(u[1]))!==null;)h.set(y[1].replaceAll('\\"','"').toUpperCase(),y[2].replaceAll('\\"','"'));const b=[];let w=0;for(let D=0;D<i.length;D+=1){const E=p[D]??0;let A=g?.findIndex((he,de)=>de>=w&&he.code===49)??-1;if(A<0||!g){if(E!==0)return null;b.push({length:i[D],flags:0});continue}const N=g[A];if(Math.abs(Number(N.value)-i[D])>1e-8)return null;const B=g[A+1];if(!B||B.code!==74)return null;const x=Number(B.value);if(!Number.isInteger(x)||x!==E)return null;if(w=A+2,x===0){b.push({length:i[D],flags:0});continue}if(x!==4)return null;const R=he=>{for(;w<g.length&&g[w].code!==he&&g[w].code!==49;)w+=1;if(w>=g.length||g[w].code!==he)return null;const de=g[w].value;return w+=1,de},L=Number(R(75)),P=R(340),H=Number(R(46)),fe=Number(R(50)),re=Number(R(44)),oe=Number(R(45)),Ae=P?h.get(P.toUpperCase()):void 0;if(!Number.isInteger(L)||L<=0||!P||!Ae||!/^[a-z0-9_.-]+\.shx$/i.test(Ae)||![H,fe,re,oe].every(Number.isFinite)||H<=0)return null;b.push({length:i[D],flags:4,shapeNumber:L,styleName:d2(a),shapeFile:Ae,scale:H,rotation:fe,offsetX:re,offsetY:oe})}const S=i.reduce((D,E)=>D+Math.abs(E),0),j=r.match(/(?:^|;)patternLength=([^;]+)/i)?.[1],C=j===void 0?S:Number(j);return!Number.isFinite(C)||C<=0||Math.abs(C-S)>Math.max(1e-7,S*1e-7)?null:{patternLength:C,segments:b}}function u2(a){const r=new Set(["CONTINUOUS","BYLAYER","BYBLOCK"]),o=new Map(a.filter(l=>l.category==="linetype").map(l=>[l.name.trim().toUpperCase(),l]));for(const l of a.filter(i=>i.category==="layer")){const i=l.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!i||r.has(i.toUpperCase()))continue;const p=o.get(i.toUpperCase());if(!p||!Rb(p.name,p.detail))throw new Error(`Layer "${l.name}" requires linetype "${i}", but its complete supported definition is not approved. Review/re-extract that linetype first; the runner will not silently substitute Continuous.`)}}function vt(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function p2(a,r){return a===null||a.has(r)}function f2(a,r){return r===null?[...a]:a.filter(o=>r.has(o))}function h2(a,r,o){const l=new Set(a??r);return l.has(o)?l.delete(o):l.add(o),l}function g2(a,r,o){if(a===null)return null;const l=new Set(o),i=new Set([...a].filter(p=>l.has(p)));for(const p of o)r.has(p)||i.add(p);return i}function m2(a,r,o=""){const l=a.filter(u=>u.reviewStatus==="reviewed"&&u.sourceKind==="extracted-dwg"&&(u.scope!=="project"||!!(o&&u.projectId===o))),i=(u,y)=>u.fields.find(b=>b.label===y)?.value?.trim()??"",p=l.filter(u=>[r,"Shared"].includes(i(u,"Source discipline"))),g=p.filter(u=>u.category==="layer"&&i(u,"CAD name")&&i(u,"CAD name").toUpperCase()!=="0"),h=new Set(g.map(u=>i(u,"CAD name").toLowerCase()));return{symbols:p.filter(u=>u.category==="symbol"&&["Source drawing ID","Block asset ID","Block name","Fallback category"].every(y=>i(u,y))&&h.has(i(u,"Target CAD layer").toLowerCase())).length,layers:g.length,textStyles:p.filter(u=>u.category==="textStyle").length,otherDisciplineSymbols:l.filter(u=>u.category==="symbol"&&["PFD","P&ID"].includes(i(u,"Source discipline"))&&i(u,"Source discipline")!==r).length}}const Ku=1024*1024,y2=500*Ku;function Io(a){return a<1024?`${a} B`:a<Ku?`${(a/1024).toFixed(1)} KB`:`${(a/Ku).toFixed(1)} MB`}function b2(a){const r=a.type.split(";",1)[0].trim().toLowerCase(),o=a.name.trim().toLowerCase().endsWith(".pdf");return r==="application/pdf"||o}async function v2(a){const[r,o]=await Promise.all([nn(()=>import("./pdf-TYrZqVzP.js"),[]),nn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);r.GlobalWorkerOptions.workerSrc=o.default;const l=r.getDocument({data:new Uint8Array(a.slice(0))});try{return(await l.promise).numPages}finally{await l.destroy().catch(()=>{})}}async function E2(a){const[r,o]=await Promise.all([nn(()=>import("./pdf-TYrZqVzP.js"),[]),nn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);r.GlobalWorkerOptions.workerSrc=o.default;const i=await r.getDocument({data:new Uint8Array(a.slice(0))}).promise;try{const p=[];for(let g=1;g<=i.numPages;g+=1){const h=await i.getPage(g),m=h.getViewport({scale:1});p.push({width:m.width,height:m.height}),h.cleanup()}return p}finally{await i.destroy().catch(()=>{})}}function w2({discipline:a,groups:r,selectedClientId:o,selectedClientLabel:l,onSelectClient:i}){const[p,g]=q.useState([]),[h,m]=q.useState(null),[u,y]=q.useState(!0),[b,w]=q.useState(""),[S,j]=q.useState(0),[C,D]=q.useState([]),[E,A]=q.useState(null),[N,B]=q.useState(null),[x,R]=q.useState(null),[L,P]=q.useState(null),[H,fe]=q.useState(0),[re,oe]=q.useState(1),[Ae,he]=q.useState(null),[de,Y]=q.useState(""),[Q,be]=q.useState(""),[Te,_]=q.useState([]),[J,$]=q.useState(0),[G,le]=q.useState(""),[ge,Ee]=q.useState(null),[Me,Ie]=q.useState(null),[Et,pt]=q.useState(!1),[ht,wt]=q.useState(!1),[aa,Rt]=q.useState(""),[U,ie]=q.useState(!1),[pe,F]=q.useState(""),[ce,Ce]=q.useState(!1),[me,Le]=q.useState(""),[Qe,Xe]=q.useState("1"),qe=q.useRef([]),jt=q.useRef(null),ye=q.useRef(!0),et=q.useRef(!1),nt=q.useRef(0),Wt=q.useRef(new Set),Re=q.useRef(a);Re.current=a;const Da=typeof globalThis.crypto?.subtle<"u",St=q.useMemo(()=>Xy(r),[r]),gt=q.useMemo(()=>{const I=new Set(f2(p.map(te=>te.id),h));return p.filter(te=>I.has(te.id))},[h,p]),Zt=()=>m(null),It=()=>m(new Set),Ca=I=>{m(te=>h2(te,p.map(ve=>ve.id),I))};q.useEffect(()=>{if(be(o),!o){Y("");return}try{const I=gn();Y(I.projects[o]?o:"")}catch{Y("")}},[o]);const it=q.useCallback((I,te)=>{if(!ye.current)return;nt.current+=1;const ve=nt.current;D(we=>[...we.slice(-5),{id:ve,kind:I,text:te}])},[]);q.useEffect(()=>{const I=()=>{try{const te=gn(),ve=o&&te.projects[o]?[o]:[];_(ve.map((we,Ne)=>({id:we,label:St.find(Pe=>Pe.id===we)?.label??`Project ${String(Ne+1).padStart(2,"0")}`}))),Ee(m2([...te.companyItems,...de?te.projects[de]?.items??[]:[]],a,de)),le(new Date().toLocaleTimeString())}catch(te){Ee(null),it("error",te instanceof Error?te.message:"The approved CAD library could not be loaded.")}};return I(),window.addEventListener("focus",I),window.addEventListener("storage",I),window.addEventListener(Wo,I),()=>{window.removeEventListener("focus",I),window.removeEventListener("storage",I),window.removeEventListener(Wo,I)}},[it,St,a,de,J,o]),q.useEffect(()=>{let I=!0;return Ie(null),Rt(""),Q?(pt(!0),Lm(Q,a).then(te=>{I&&Ie(te)}).catch(te=>{I&&Rt(te instanceof Error?te.message:"The local project title block could not be read.")}).finally(()=>{I&&pt(!1)}),()=>{I=!1}):(pt(!1),()=>{I=!1})},[a,Q]),q.useEffect(()=>{Q&&!St.some(I=>I.id===Q)&&(be(""),Ie(null),Rt(""))},[St,Q]);const Ot=q.useCallback(async()=>{try{const[I,te]=await Promise.all([xb(a),hT()]);if(!ye.current||Re.current!==a)return;const ve=I.map(Ne=>Ne.id),we=Wt.current;m(Ne=>g2(Ne,we,ve)),Wt.current=new Set(ve),g(I),j(te),w("")}catch(I){ye.current&&w(I instanceof Error?I.message:"Saved PDFs could not be loaded.")}finally{ye.current&&y(!1)}},[a]),Mt=async(I,te,ve,we)=>{await wi(I.id,{analysisStatus:"extracting",analysisPagesDone:0,analysisRecordCount:0,analysisMessage:"",autocadStatus:"not-connected"}),ye.current&&await Ot();let Ne;try{Ne=await OT(te,we,ve)}catch(At){throw ve()?At:new Kt("cancelled","EDE extraction paused.")}if(!ve())throw new Kt("cancelled","EDE extraction paused.");await yT(I.id,Ne.pageText);const Pe=LT(Ne.pageText),Je=BT(a==="PFD"?"pfd":"pid",{id:I.id,alias:I.alias},[...Ne.candidates,...Pe]);ye.current&&fe(At=>At+1);const Ge=Ne.pageText.some(At=>At.searchableText.trim()||At.ocrTiles.some($t=>$t.trim())),pa=Je.recordCount||Ge?"needs-review":"no-tags";return await wi(I.id,{analysisStatus:pa,analysisPagesDone:Ne.pages,analysisRecordCount:Je.recordCount,analysisMessage:Ne.ocrPages?`Page text and OCR from ${Ne.ocrPages} page(s) are saved locally. ${Ne.candidates.length} tag candidate(s) and ${Pe.length} note(s) need review.`:`Page text is saved locally. ${Ne.candidates.length} tag candidate(s) and ${Pe.length} note(s) need review.`,autocadStatus:"not-connected"}),{...Je,tagCount:Ne.candidates.length,noteCount:Pe.length}};q.useEffect(()=>{ye.current=!0,y(!0),R(null),oe(1),Ot();const I=()=>{Ot()};return window.addEventListener("focus",I),()=>{window.removeEventListener("focus",I),ye.current=!1,qe.current.forEach(te=>{te.cancelled=!0}),qe.current=[]}},[Ot]),q.useEffect(()=>{if(et.current)return;const I=new URLSearchParams(window.location.search).get("pdf"),te=p.find(Ne=>Ne.id===I);if(!te)return;const ve=new URLSearchParams(window.location.search).get("record");ve&&P(ve),et.current=!0,R(te.id);const we=Number(new URLSearchParams(window.location.search).get("page"));oe(Number.isInteger(we)&&we>=1&&we<=te.pageCount?we:1),window.setTimeout(()=>document.querySelector('[data-testid="panel-source-page"]')?.scrollIntoView({behavior:"smooth",block:"center"}),100)},[p]);const mt=async(I,te,ve)=>{const we=a,Ne=()=>!I.cancelled&&ye.current&&Re.current===we;I.state="working";try{if(I.file.size>Vu)throw new Kt("too-large","A PDF is larger than 100 MB and was skipped.");const Pe=await I.file.arrayBuffer();if(!Ne())return;let Je;try{Je=await v2(Pe)}catch(At){const $t=At?.name;throw $t==="PasswordException"?new Error("A PDF is password-protected. Remove the password and add it again."):$t==="InvalidPDFException"||$t==="FormatError"?new Error("A file is not a valid PDF, or it is damaged."):new Error("A PDF could not be read. It may be damaged.")}if(!Ne())return;if(Je<1)throw new Error("A PDF has no pages.");let Ge;try{Ge=await gT(Pe)}catch{throw new Error("Duplicate check is not supported in this browser, so the PDF was not saved.")}if(!Ne())return;const pa=await mT({discipline:we,bytes:Pe,pageCount:Je,hash:Ge},Ne);te.pagesDone+=Je,ye.current&&(A({total:ve,done:te.done,pagesDone:te.pagesDone,active:1,phase:"extracting",currentAlias:pa.alias,pageNow:0,pageTotal:Je}),await Ot());try{const At=await Mt(pa,Pe,Ne,($t,ga)=>{ye.current&&A(wn=>wn&&{...wn,phase:"extracting",currentAlias:pa.alias,pageNow:$t,pageTotal:ga})});Ne()&&it("info",`${pa.alias}: ${At.tagCount} tag candidate(s) and ${At.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(At){const $t=At instanceof Kt&&At.code==="cancelled",ga=$t?"Extraction paused. Resume it from this saved PDF.":Jm(At);await wi(pa.id,{analysisStatus:$t?"paused":"failed",analysisMessage:ga}).catch(()=>{}),!$t&&Ne()&&it("error",`${pa.alias}: ${ga}`)}I.state="done",ye.current&&await Ot()}catch(Pe){I.state="failed",!(Pe instanceof Kt&&Pe.code==="cancelled")&&Ne()&&it("error",Pe instanceof Error?Pe.message:"A PDF could not be added.")}finally{te.done+=1,ye.current&&A(Pe=>Pe&&{...Pe,total:ve,done:te.done,pagesDone:te.pagesDone,active:0})}},Na=I=>{if(E||u||b||!I.length)return;const te=I.filter(b2);if(te.length<I.length&&it("error",`${I.length-te.length} file(s) skipped. Choose PDF files only.`),!te.length)return;const ve=te.map(Je=>({id:++nt.current,file:Je,cancelled:!1,state:"queued"}));qe.current=[...qe.current,...ve];const we={done:0,pagesDone:0};A({total:ve.length,done:0,pagesDone:0,active:0,phase:"checking"});let Ne=0;(async()=>{for(;Ne<ve.length&&ye.current;){const Je=ve[Ne++];if(Je.cancelled){we.done+=1;continue}await mt(Je,we,ve.length)}})().then(()=>{if(qe.current=qe.current.filter(Ge=>!ve.includes(Ge)),!ye.current)return;const Je=ve.filter(Ge=>Ge.state==="done").length;Je&&it("info",`${Je} PDF(s) saved on this device. Check each PDF's EDE status below; AutoCAD is not connected.`),A(null)})},na=async I=>{if(!(E||N)){B(I.id),A({total:1,done:0,pagesDone:0,active:1,phase:"extracting",currentAlias:I.alias,pageNow:0,pageTotal:I.pageCount});try{const te=await qo(I.id),ve=await Mt(I,te,()=>ye.current,(we,Ne)=>{ye.current&&A(Pe=>Pe&&{...Pe,phase:"extracting",pageNow:we,pageTotal:Ne})});it("info",`${I.alias}: ${ve.tagCount} tag candidate(s) and ${ve.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(te){const ve=Jm(te);await wi(I.id,{analysisStatus:"failed",analysisMessage:ve}).catch(()=>{}),it("error",`${I.alias}: ${ve}`)}finally{A(null),B(null),await Ot()}}},on=()=>{qe.current.forEach(I=>{I.state!=="done"&&(I.cancelled=!0)}),it("info","Remaining imports were cancelled. Finished files stay saved.")},Qa=async I=>{he(null);try{await Sb([I]),x===I&&R(null),await Ot()}catch{it("error","The PDF could not be deleted from local storage.")}},Bn=async()=>{he(null),qe.current.forEach(I=>{I.cancelled=!0});try{await bT(a),R(null),await Ot()}catch{it("error","Saved PDFs could not be cleared.")}},ka=async I=>{try{const te=await qo(I.id),ve=URL.createObjectURL(new Blob([te],{type:"application/pdf"})),we=document.createElement("a");we.href=ve,we.download=`original-source-${a==="PFD"?"pfd":"pid"}-pdf-${I.aliasNumber}.pdf`,document.body.appendChild(we),we.click(),we.remove(),setTimeout(()=>URL.revokeObjectURL(ve),4e3)}catch{it("error","The original PDF could not be read for download.")}},En=async I=>{if(!(!I||!Q)){if(I.size>ib){Rt("The project title block is larger than the 100 MB local upload limit."),jt.current&&(jt.current.value="");return}if(Me&&!window.confirm("Replace the saved title block for this project in this browser? The previous local file will be replaced.")){jt.current&&(jt.current.value="");return}wt(!0),Rt("");try{await z1(Q,a,I.name,new Uint8Array(await I.arrayBuffer())),Ie(await Lm(Q,a)),Rt("Title block saved for this group in this browser.")}catch(te){Rt(te instanceof Error?te.message:"The project title block could not be saved locally.")}finally{wt(!1),jt.current&&(jt.current.value="")}}},da=async()=>{if(!(!Q||!Me)&&window.confirm("Remove this client folder title block from this browser? Existing generated DWGs are not changed.")){Rt("");try{await Y1(Q,a),Ie(null),Rt("Group title block removed from this browser.")}catch(I){Rt(I instanceof Error?I.message:"The project title block could not be removed.")}}},ua=async()=>{if(!gt.length){F("Select at least one PDF to include in the AutoCAD runner.");return}if(!(E!==null||U||ht||u||b)){ie(!0),F("");try{const I=gt.reduce((xe,_e)=>xe+_e.size,0),te=Q?await F1(Q,a):null;if(Q&&!te)throw new Error("Upload a standalone DWG title block for the selected client folder before preparing its AutoCAD runner.");if(I+(te?.bytes??0)>y2)throw new Error("The saved source PDFs and client title block exceed the 500 MB limit for this local AutoCAD runner package.");const ve=gn();if(de&&!ve.projects[de])throw new Error("That project library is no longer available. Select a current project mapping or use Legends Library only.");const we=[...ve.companyItems,...de?ve.projects[de]?.items??[]:[]],Pe=we.filter(xe=>xe.category==="symbol"&&xe.reviewStatus==="reviewed"&&xe.sourceKind==="extracted-dwg"&&[a,"Shared"].includes(xe.fields.find(_e=>_e.label==="Source discipline")?.value?.trim()??"")).flatMap(xe=>{const _e=Fa=>xe.fields.find(Sn=>Sn.label===Fa)?.value?.trim()??"",Dt=_e("Source drawing ID"),Vt=_e("Block asset ID"),Ct=_e("Block name"),yt=_e("Fallback category"),Fn=_e("Target CAD layer"),Ea=_e("Source discipline");if(!Dt||!Vt||!Ct||!yt||Ea!=="PFD"&&Ea!=="P&ID"&&Ea!=="Shared")return[];if(!Fn||Fn.toUpperCase()==="0")throw new Error(`Approved block "${Ct}" has no valid target CAD layer. Re-review it and select an approved non-zero layer.`);let wa;if(yt.toLowerCase()==="valve"){const Fa=_e("Wipeout mask boundary");try{wa=Br(Fa)}catch(Sn){throw new Error(`Approved valve "${Ct}" has no valid reviewed body mask. Re-review the valve outline before preparing the AutoCAD runner. ${Sn instanceof Error?Sn.message:""}`)}}return[{sourceId:Dt,blockAssetId:Vt,blockName:Ct,fallbackCategory:yt,targetLayer:Fn,discipline:Ea,...wa?{wipeoutBoundary:wa}:{},...xe.scope==="project"&&xe.projectId?{projectId:xe.projectId}:{}}]}),Je=we.flatMap(xe=>{if(xe.sourceKind!=="extracted-dwg"||xe.reviewStatus!=="reviewed"||xe.category!=="layer"&&xe.category!=="textStyle"&&xe.category!=="linetype")return[];const _e=Ct=>xe.fields.find(yt=>yt.label===Ct)?.value?.trim()??"",Dt=_e("Source discipline"),Vt=_e("CAD name");return!Vt||Dt!=="PFD"&&Dt!=="P&ID"&&Dt!=="Shared"?[]:[{name:Vt,category:xe.category,detail:_e("Extracted details"),discipline:Dt,...xe.scope==="project"&&xe.projectId?{projectId:xe.projectId}:{}}]}),Ge=[...new Set(Pe.map(xe=>xe.blockAssetId))],pa=await Promise.all(Ge.map(async xe=>{const[_e,Dt]=await Promise.all([db(xe),cb(xe)]);return{id:xe,content:_e,format:Dt.format??"DWG",...Dt.geometryDescriptor?{geometryDescriptor:Dt.geometryDescriptor}:{}}})),At=new Map(pa.map(xe=>[xe.id,xe])),$t=new Map((await $u()).map(xe=>[xe.id,xe])),ga=new Map;for(const xe of Pe){const _e=At.get(xe.blockAssetId)?.geometryDescriptor;if(_e?.primitives.length&&_e.bounds)continue;const Dt=ga.get(xe.sourceId)??[];Dt.push(xe),ga.set(xe.sourceId,Dt)}const wn=[];for(const[xe,_e]of ga){const Dt=$t.get(xe),Vt=_e.map(Ct=>At.get(Ct.blockAssetId)).filter(Ct=>!!Ct);if(!Dt||Dt.format!=="DXF"){for(const Ct of Vt)Ct.geometryIndexError=Dt?"SOURCE_DWG_REQUIRES_OVERVIEW_DXF":"SOURCE_NOT_AVAILABLE";continue}try{const Ct=await Go(xe);if(Ct.byteLength>50*1024*1024){for(const Ea of Vt)Ea.geometryIndexError="SOURCE_DXF_TOO_LARGE";continue}const yt=new TextDecoder("windows-1252").decode(Ct),Fn=_i(yt,[...new Set(_e.map(Ea=>Ea.blockName))]);for(const Ea of _e){const wa=At.get(Ea.blockAssetId);if(!wa)continue;const Fa=Fn.get(Ea.blockName)?.geometryDescriptor;if(!Fa||!Fa.primitives.length||!Fa.bounds){wa.geometryIndexError="BLOCK_NOT_FOUND_OR_UNSUPPORTED";continue}wa.geometryDescriptor=Fa,wn.push({id:wa.id,sourceId:xe,blockName:Ea.blockName,content:wa.content,geometryDescriptor:Fa})}}catch{for(const Ct of Vt)Ct.geometryIndexError="SOURCE_DXF_UNREADABLE"}}wn.length&&await Uu(wn);const Vr=new Map,Ms=el(a==="PFD"?"pfd":"pid"),Ki=e1(Ms.flatMap(xe=>xe.rows.map(_e=>({stableId:_e.id,itemTag:_e.itemTag})))),Xr=Zy(`${a}:${de||"legends-default"}`);for(const xe of Ms)for(const _e of xe.rows){if(!_e.sourcePdfId)continue;const Dt=new Set([Number(_e.sourcePage),...(_e.sourceLocations??[]).map(Vt=>Vt.pageNumber)].filter(Vt=>Number.isInteger(Vt)&&Vt>0));for(const Vt of Dt){const Ct=Vr.get(_e.sourcePdfId)??[];Ct.some(yt=>yt.stableId===_e.id&&yt.pageNumber===Vt)||(Ct.push({stableId:_e.id,itemTag:_e.itemTag,type:_e.type,pageNumber:Vt,fields:Object.fromEntries(ll.map(yt=>[yt,_e[yt]]))}),Vr.set(_e.sourcePdfId,Ct))}}const Gr=await i2(await Promise.all(gt.map(async xe=>{const _e=await qo(xe.id);return{pageCount:xe.pageCount,pageSizesPoints:await E2(_e),pdfBytes:new Uint8Array(_e),sourceHash:xe.hash,discipline:a,edeRecords:Vr.get(xe.id)??[],attributeRules:Xr,conflictingTags:Ki,...de?{projectId:de}:{},...Q?{titleBlockGroupId:Q}:{}}})),Pe,pa,Je,te?{groupId:te.projectId,workspaceType:te.workspaceType,titleBlockId:te.titleBlockId,titleBlockPath:te.titleBlockPath,xrefName:te.xrefName,expectedSize:te.expectedSize,version:te.version,content:te.content}:void 0),Ba=URL.createObjectURL(Gr),xn=document.createElement("a");xn.href=Ba,xn.download="autocad-runner-with-source-pdfs.zip",document.body.append(xn),xn.click(),xn.remove(),window.setTimeout(()=>URL.revokeObjectURL(Ba),1e3);const dl=gt.reduce((xe,_e)=>xe+_e.pageCount,0);F(`Runner and ${gt.length} selected source PDF(s) downloaded. It can create ${dl} separate DWG file(s). ${Pe.filter(xe=>(xe.discipline===a||xe.discipline==="Shared")&&(!xe.projectId||xe.projectId===de)).length} reviewed symbol mapping(s) and ${Je.filter(xe=>(xe.discipline===a||xe.discipline==="Shared")&&(!xe.projectId||xe.projectId===de)).length} reviewed layer/text-style/linetype mapping(s) are available to this ${a} run. AutoCAD uses native 1:1 PDFIMPORT scale only when the PDF page size matches the selected title block; otherwise it asks for a known reference instead of guessing.`+(te?" The selected client title block is included for 1:1 XREF attachment; keep its output companion DWG beside the generated pages.":""))}catch(I){F(I instanceof Error?I.message:"The AutoCAD runner could not be prepared. Try a smaller PDF batch.")}finally{ie(!1)}}},Tt=async I=>{const te=Number(Qe);if(!Number.isFinite(te)||te<=0){Le("Enter a scale multiplier greater than zero.");return}Ce(!0),Le("Reading PDF vector geometry…");try{const{buildPdfDxfPackage:ve}=await nn(async()=>{const{buildPdfDxfPackage:Ge}=await import("./pdf-dxf-export-CY_TKYV3.js");return{buildPdfDxfPackage:Ge}},[]),we=await ve((I?[I]:p).map(Ge=>({aliasNumber:Ge.aliasNumber,bytes:()=>qo(Ge.id)})),te,(Ge,pa,At)=>{ye.current&&Le(`Creating DXF: PDF ${Ge} · page ${pa} of ${At}…`)},()=>ye.current&&Re.current===a);if(!ye.current||Re.current!==a)return;const Ne=URL.createObjectURL(we.blob),Pe=document.createElement("a");Pe.href=Ne,Pe.download="pdf-dxf-pages.zip",document.body.append(Pe),Pe.click(),Pe.remove(),window.setTimeout(()=>URL.revokeObjectURL(Ne),1e3);const Je=we.reports.length-we.exported;Le(`${we.exported} DXF page(s) created${Je?`; ${Je} page(s) skipped—read the report`:""}. Raw vector output—not a verified exact PDF match. Compare each page with its source; library replacement and engineering scale are not verified.`)}catch(ve){ye.current&&Le(ve instanceof Error?ve.message:"DXF export failed; no CAD output was confirmed.")}finally{ye.current&&Ce(!1)}},We=q.useMemo(()=>p.find(I=>I.id===x)??null,[p,x]),k=q.useMemo(()=>{if(!x||!L)return[];try{const ve=el(a==="PFD"?"pfd":"pid").find(we=>we.sourcePdfId===x)?.rows.find(we=>we.id===L);return(ve?.sourceLocations??[]).filter(we=>we.pageNumber===re).map(we=>({id:ve.id,label:ve.itemTag,location:we}))}catch{return[]}},[a,re,x,H,L]),Z=p.reduce((I,te)=>I+te.pageCount,0),ue=E!==null,Ue=Math.min(100,S/Xu*100);return c.jsxs("section",{className:"pdf-workflow","aria-labelledby":"pdf-workflow-title","data-testid":"panel-pdf-workflow",children:[c.jsxs("div",{className:"pdf-panel-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"pdf-kicker",children:["PDF INPUT · LOCAL SOURCE FILES · ",a]}),c.jsx("h2",{id:"pdf-workflow-title",children:"Source PDF files"}),c.jsxs("p",{children:["Add PDFs for this ",a," workspace. They stay in this browser and appear as PDF 1, PDF 2, and so on."]})]}),c.jsxs("div",{className:"pdf-actions",children:[c.jsxs("label",{className:"btn primary pdf-add-control","data-testid":"label-add-pdfs",children:[c.jsx(tm,{size:15})," Add PDFs",c.jsx("input",{type:"file",accept:"application/pdf,.pdf",multiple:!0,"aria-label":"Add PDF files",disabled:ue||u||!!b||!Da,onChange:I=>{Na(Array.from(I.currentTarget.files??[])),I.currentTarget.value=""},"data-testid":"input-add-pdfs"})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>he({type:"all"}),disabled:!p.length,"aria-label":"Clear all saved PDFs","data-testid":"button-clear-pdfs",children:[c.jsx(ki,{size:14})," Clear all"]})]})]}),c.jsxs("div",{className:"pdf-trust-note","data-testid":"text-pdf-local-only",children:[c.jsx(yr,{size:15}),c.jsxs("div",{className:"pdf-trust-copy",children:[c.jsxs("span",{children:[c.jsx("strong",{children:"Saved on this device only."})," PDFs are not uploaded, backed up, or synced. Clearing browser data removes them.",!Da&&" New PDFs cannot be added in this browser because duplicate checking needs a secure connection."]}),c.jsxs("details",{className:"pdf-privacy-details",children:[c.jsx("summary",{children:"Privacy and scanned PDFs"}),c.jsxs("p",{children:["Original PDFs are not changed. Searchable text and scanned pages are read in this browser. The OCR code and language files may be downloaded, but the PDF itself is not sent. PDF aliases hide file names only; names and logos printed inside the pages remain visible."," ","Download an original if you need a separate copy."]})]})]})]}),c.jsxs("div",{className:"pdf-storage-line","data-testid":"text-pdf-storage",children:[c.jsxs("span",{children:[Io(S)," of ",Io(Xu)," used (all disciplines)"]}),c.jsxs("span",{children:["Limit ",Io(Vu)," per PDF"]})]}),c.jsx("div",{className:"pdf-meter",role:"progressbar","aria-label":"Local storage used","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Ue),children:c.jsx("span",{style:{width:`${Ue}%`}})}),c.jsx("div",{style:{height:12}}),E&&c.jsxs("div",{className:"pdf-progress",role:"status","aria-live":"polite","data-testid":"status-pdf-progress",children:[c.jsxs("div",{className:"pdf-progress-top",children:[c.jsxs("span",{children:[c.jsx($a,{size:12,className:"pdf-spin"})," ",E.phase==="checking"?`Checking and saving: ${E.done} of ${E.total} file(s) finished · ${E.pagesDone} page(s) verified`:`${E.currentAlias??"PDF"} · reading page ${E.pageNow??0} of ${E.pageTotal??0} for EDE`]}),c.jsx("button",{type:"button",className:"btn",onClick:on,"data-testid":"button-cancel-import","aria-label":"Cancel remaining imports",children:"Cancel"})]}),c.jsx("div",{className:"pdf-meter",children:c.jsx("span",{style:{width:`${E.phase==="checking"?E.done/E.total*100:(E.done+(E.pageTotal?(E.pageNow??0)/E.pageTotal:0))/E.total*100}%`}})})]}),C.length>0&&c.jsx("ul",{className:"pdf-notes","aria-live":"polite","data-testid":"list-pdf-notes",children:C.map(I=>c.jsxs("li",{className:I.kind==="info"?"info":"",role:I.kind==="error"?"alert":void 0,"data-testid":`status-pdf-note-${I.id}`,children:[I.kind==="error"?c.jsx(br,{size:14}):c.jsx(mr,{size:14}),c.jsx("span",{children:I.text}),c.jsx("button",{type:"button","aria-label":"Dismiss message",onClick:()=>D(te=>te.filter(ve=>ve.id!==I.id)),children:c.jsx(nm,{size:13})})]},I.id))}),p.length>0&&c.jsxs("div",{className:"pdf-batch-controls","data-testid":"pdf-batch-controls",children:[c.jsxs("div",{className:"pdf-batch-controls-copy",children:[c.jsx("strong",{children:"Choose PDFs for AutoCAD"}),c.jsxs("span",{"aria-live":"polite","data-testid":"text-pdf-batch-selection-count",children:[gt.length," of ",p.length," selected"]}),c.jsx("small",{children:"Only checked PDFs go into the runner. Select one or several."})]}),c.jsxs("div",{className:"pdf-batch-control-actions",children:[c.jsx("button",{type:"button",className:"btn",onClick:Zt,disabled:ue||U,"data-testid":"button-select-all-pdfs",children:"Select all"}),c.jsx("button",{type:"button",className:"btn",onClick:It,disabled:ue||U,"data-testid":"button-deselect-all-pdfs",children:"Deselect all"})]})]}),p.length>0&&gt.length===0&&c.jsx("p",{className:"pdf-batch-empty",role:"status","data-testid":"status-no-pdfs-selected",children:"No PDFs selected. Use Select all or tick a PDF row before downloading the runner."}),c.jsxs("div",{className:"pdf-queue","aria-label":"Saved PDF files",children:[Ae&&c.jsxs("div",{className:"pdf-confirm",role:"alertdialog","aria-label":"Confirm delete","data-testid":"dialog-confirm-delete",children:[c.jsx("span",{children:Ae.type==="all"?`Delete all ${p.length} saved ${a} PDF(s) from this device? This cannot be undone.`:"Delete this PDF from this device? This cannot be undone."}),c.jsx("button",{type:"button",className:"btn danger","data-testid":"button-confirm-delete",onClick:()=>Ae.type==="all"?void Bn():void Qa(Ae.id),children:"Delete"}),c.jsx("button",{type:"button",className:"btn","data-testid":"button-cancel-delete",onClick:()=>he(null),children:"Keep"})]}),u?c.jsxs("div",{className:"pdf-queue-empty",role:"status","data-testid":"status-pdf-loading",children:[c.jsx($a,{size:16,className:"pdf-spin"})," Loading saved PDFs"]}):b?c.jsxs("div",{className:"pdf-queue-empty",role:"alert","data-testid":"status-pdf-load-error",children:[c.jsx(br,{size:16})," ",b,c.jsx("button",{type:"button",className:"btn",onClick:()=>{y(!0),Ot()},"data-testid":"button-retry-load",children:"Try again"})]}):p.length?p.map(I=>c.jsxs("div",{className:`pdf-file-row${I.id===x?" is-selected":""}`,"data-testid":`row-pdf-file-${I.id}`,children:[c.jsxs("button",{type:"button",className:"pdf-select",onClick:()=>{R(I.id),P(null),oe(1)},"aria-label":`Preview ${I.alias}`,"aria-pressed":I.id===x,"data-testid":`button-select-pdf-${I.id}`,children:[c.jsx("span",{className:"pdf-file-icon",children:c.jsx(mr,{size:17})}),c.jsxs("span",{className:"pdf-file-details",children:[c.jsx("strong",{className:"pdf-filename","data-testid":`text-pdf-name-${I.id}`,children:I.alias}),c.jsxs("span",{className:"pdf-file-meta",children:[I.pageCount," page(s) · ",Io(I.size)," · saved locally"]}),c.jsxs("span",{className:"pdf-analysis-state","data-testid":`status-ede-${I.id}`,children:["EDE: ",I.analysisStatus==="needs-review"?`${I.analysisRecordCount??0} candidate(s) · review required`:I.analysisStatus==="no-tags"?"No tag candidates found":I.analysisStatus==="extracting"?N===I.id?"Extraction in progress":"Paused · resume available":I.analysisStatus==="failed"?"Extraction failed":I.analysisStatus==="paused"?"Paused · resume available":"Not extracted yet"," · AutoCAD: not connected"]}),I.analysisStatus==="failed"&&I.analysisMessage&&c.jsx("span",{className:"pdf-analysis-state",role:"status",children:I.analysisMessage})]})]}),c.jsxs("span",{className:"pdf-row-actions",children:[c.jsxs("label",{className:"pdf-batch-choice",children:[c.jsx("input",{type:"checkbox",checked:p2(h,I.id),disabled:ue||U,onChange:()=>Ca(I.id),"aria-label":`Process ${I.alias} in the AutoCAD batch`,"data-testid":`checkbox-batch-pdf-${I.id}`}),c.jsx("span",{children:"Process"})]}),I.analysisStatus!=="needs-review"&&N!==I.id&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:ue,onClick:()=>{na(I)},"data-testid":`button-extract-ede-${I.id}`,children:[c.jsx(mr,{size:13})," ",I.analysisStatus==="failed"?"Retry EDE":I.analysisStatus==="paused"||I.analysisStatus==="extracting"?"Resume EDE":"Create EDE data"]}),(I.analysisStatus==="needs-review"||I.analysisStatus==="no-tags")&&c.jsx(ia,{className:"btn pdf-extract-btn",href:`/workspace/${a==="PFD"?"pfd":"pid"}/engineering-data?source=${encodeURIComponent(I.id)}`,children:"Open EDE"}),I.analysisStatus==="needs-review"&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:ue,onClick:()=>{na(I)},"data-testid":`button-refresh-source-links-${I.id}`,children:[c.jsx(YE,{size:13})," Recheck tags & locations"]}),N===I.id&&c.jsxs("span",{className:"pdf-running-label",children:[c.jsx($a,{size:13,className:"pdf-spin"})," Reading"]}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Preview ${I.alias}`,onClick:()=>{R(I.id),P(null),oe(1)},"data-testid":`button-preview-pdf-${I.id}`,children:c.jsx(SE,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Download original source ${I.alias}`,onClick:()=>{ka(I)},"data-testid":`button-download-pdf-${I.id}`,children:c.jsx(Ur,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn danger","aria-label":`Remove ${I.alias}`,onClick:()=>he({type:"one",id:I.id}),"data-testid":`button-remove-pdf-${I.id}`,children:c.jsx(nm,{size:15})})]})]},I.id)):c.jsxs("div",{className:"pdf-queue-empty","data-testid":"empty-pdf-queue",children:[c.jsx(mr,{size:18}),c.jsxs("span",{children:["No saved PDFs for ",a]}),c.jsx("small",{children:"Add PDFs to keep them on this device. You can add several at once."})]})]}),c.jsx("div",{className:"pdf-page-summary",style:{marginTop:10},"data-testid":"text-pdf-page-summary",children:p.length?`${p.length} PDF(s) · ${Z} total page(s)`:ue?"Working on your files":"No readable PDFs saved yet"}),p.length>=100&&c.jsxs("div",{className:"pdf-trust-note",role:"note","data-testid":"text-large-batch-resume",children:[c.jsx(yr,{size:15}),c.jsxs("span",{children:["This batch contains ",p.length," PDFs and ",Z," pages. The AutoCAD runner tracks every page in a local journal beside the DWGs, so you can resume later with the same unchanged kit and output name. Progress is recorded on the Windows workstation, not in this browser."]})]}),We&&c.jsxs("div",{className:"pdf-source-box","data-testid":"panel-source-page",children:[c.jsxs("div",{className:"pdf-page-select",children:[c.jsx("label",{htmlFor:"pdf-page-picker",children:"Source page"}),c.jsx("select",{id:"pdf-page-picker",value:re,onChange:I=>oe(Number(I.target.value)),"data-testid":"select-source-page","aria-label":"Select source page",children:Array.from({length:We.pageCount},(I,te)=>c.jsxs("option",{value:te+1,children:["Page ",te+1]},te+1))}),c.jsxs("span",{children:["of ",We.pageCount," in ",We.alias]})]}),c.jsx(Fx,{fileId:We.id,alias:We.alias,pageCount:We.pageCount,page:re,onPageChange:oe,loadBytes:qo,markers:k,onMarkerClick:I=>{const te=a==="PFD"?"pfd":"pid";window.location.assign(`/workspace/${te}/engineering-data?source=${encodeURIComponent(We.id)}&record=${encodeURIComponent(I)}`)}})]}),c.jsxs("div",{className:"pdf-capabilities",children:[c.jsxs("div",{className:"pdf-capability-storage pdf-dxf-export",children:[c.jsx("div",{className:"capability-heading",children:c.jsx("strong",{children:"Create DXF — no AutoCAD needed"})}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Scale multiplier · 1 = PDF paper size in mm"}),c.jsx("input",{type:"number",min:"0.000001",step:"any",value:Qe,onChange:I=>Xe(I.target.value),"aria-label":"DXF scale multiplier"})]}),c.jsx("button",{className:"btn primary",type:"button",disabled:!p.length||ue||u||ce||U||!!b,onClick:()=>{Tt(We??void 0)},"data-testid":"button-export-dxf",children:ce?c.jsxs(c.Fragment,{children:[c.jsx($a,{size:14,className:"pdf-spin"})," Creating DXF…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Ur,{size:14})," ",We?`${We.alias} · Download DXF pages`:"Download all DXF pages"]})}),We&&p.length>1&&c.jsx("button",{className:"btn",type:"button",disabled:ue||u||ce||U||!!b,onClick:()=>{Tt()},"data-testid":"button-export-all-dxf",children:"All PDFs · Download DXF pages"}),c.jsx("p",{children:"One editable DXF per vector PDF page. Scanned pages are not automatically traced. This exports raw PDF geometry, not library-standard symbols. Source details may remain—review/redact before sharing."}),me&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:me}),c.jsx(Jx,{})]}),c.jsxs("div",{className:"pdf-capability-convert",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"01"}),c.jsx("strong",{children:"Page check"})]}),c.jsx("div",{className:"pdf-page-summary","data-testid":"text-pdf-page-summary",children:p.length?`${p.length} PDF(s) · ${Z} total page(s)`:"Add PDFs to prepare an AutoCAD runner."})]}),c.jsxs("div",{className:"pdf-capability-storage",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"02"}),c.jsx("strong",{children:"Local AutoCAD runner"})]}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Approved CAD mappings"}),c.jsxs("select",{value:de,disabled:ht,onChange:I=>Y(I.target.value),"aria-label":"Approved CAD mappings for this runner",children:[c.jsx("option",{value:"",children:"Legends Library only"}),Te.map(I=>c.jsx("option",{value:I.id,children:I.label},I.id))]})]}),c.jsxs("div",{className:"runner-group-hint","aria-live":"polite","data-testid":"runner-mapping-inventory",children:[ge?c.jsxs(c.Fragment,{children:[c.jsxs("strong",{children:[ge.symbols," usable approved blocks · ",ge.layers," layers · ",ge.textStyles," text styles for ",a]}),ge.symbols===0&&c.jsxs("p",{role:"status",children:["No compatible approved blocks: this kit cannot convert PDF symbols into approved CAD blocks. Approve ",a," or Shared symbols with an approved target layer first. Other-discipline symbols are not reused automatically."]}),ge.textStyles===0&&c.jsx("p",{children:"Confirmed final text uses Arial Narrow at its existing height and position. Unconfirmed PDF text stays visible for review. An approved final text layer is required for loose text."}),ge.otherDisciplineSymbols>0&&c.jsxs("p",{children:[ge.otherDisciplineSymbols," approved symbol(s) belong to the other discipline and are excluded."]})]}):c.jsx("p",{children:"The mapping library could not be checked. Do not assume blocks or text formatting are available."}),c.jsx("button",{type:"button",className:"btn btn-ghost btn-small",onClick:()=>$(I=>I+1),children:"Refresh mapping counts"}),G&&c.jsxs("p",{role:"status",children:["Local mapping counts checked at ",G,". Refresh recounts saved approvals; it does not approve symbols."]})]}),c.jsxs("label",{className:"runner-group-choice",children:[c.jsxs("span",{children:[a," client folder for this batch"]}),c.jsxs("select",{value:Q,disabled:!St.length||ht||U,onChange:I=>i(I.target.value),"aria-label":`${a} client folder for title block`,children:[c.jsx("option",{value:"",children:St.length?`Choose a ${a} client folder`:`Create a ${a} client folder first`}),St.map(I=>c.jsx("option",{value:I.id,children:I.label},I.id))]})]}),c.jsx("p",{className:"runner-group-hint",children:"Choose the client folder for this batch. All selected PDFs will use its title block, so select PDFs from one project."}),Q?c.jsxs("div",{className:"runner-title-block","aria-label":"Project title block",children:[c.jsxs("div",{className:"runner-title-block-heading",children:[c.jsxs("strong",{children:["Client title block",l&&Q===o?` · ${l}`:""]}),Et?c.jsx("span",{children:"Checking this browser…"}):Me?c.jsxs("span",{children:["Saved locally · ",Io(Me.bytes)]}):c.jsx("span",{children:"Required for this project"})]}),!Et&&!Me&&c.jsx("p",{children:"Upload a standalone .DWG for this project. The runner attaches it as a model-space XREF at (0,0,0), rotation 0, scale 1:1, preserving its layers. Use matching drawing units."}),c.jsx("input",{ref:jt,className:"runner-title-block-file",type:"file",accept:".dwg,application/acad","aria-label":"Choose project title block DWG",onChange:I=>{En(I.currentTarget.files?.[0])}}),c.jsxs("div",{className:"runner-title-block-actions",children:[c.jsx("button",{className:"btn",type:"button",disabled:Et||ht||U,onClick:()=>jt.current?.click(),children:ht?c.jsxs(c.Fragment,{children:[c.jsx($a,{size:14,className:"pdf-spin"})," Saving locally…"]}):c.jsxs(c.Fragment,{children:[c.jsx(tm,{size:14})," ",Me?"Replace title block DWG":"Upload title block DWG"]})}),Me&&c.jsx("button",{className:"btn",type:"button",disabled:ht||U,onClick:()=>{da()},children:"Remove"})]}),c.jsxs("p",{className:"runner-title-block-note",children:["The file stays in this browser and is added only to this ",a," workspace’s local runner. Use the same project output folder for future batches: all page DWGs reuse one PROJECT_TITLE_BLOCK.dwg by relative XREF. The runner keeps a local scope marker beside it; upload the shared DWG once, not the marker. Existing numbered copies are only reported, never deleted."]}),aa&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:aa})]}):c.jsx("p",{className:"runner-title-block-empty",children:St.length?`Select a ${a} client folder above to upload or use its title block.`:"Create a Technology, Project or Proposal, and Client folder to use a client title block."}),c.jsx(t1,{scope:`${a}:${de||"legends-default"}`},`${a}:${de}`),c.jsx("button",{className:"btn primary",type:"button",disabled:!gt.length||ue||u||U||Et||ht||!!Q&&!Me||!!b,"aria-describedby":"runner-description",onClick:()=>{ua()},"data-testid":"button-convert-to-dwg",children:U?c.jsxs(c.Fragment,{children:[c.jsx($a,{size:14,className:"pdf-spin"})," Preparing…"]}):c.jsxs(c.Fragment,{children:[c.jsx(tw,{size:14})," Download AutoCAD batch runner"]})}),c.jsx("p",{id:"runner-description",children:"The ZIP contains only the checked PDFs, individually exported approved blocks, and—when a PFD/P&ID group is selected—its title block DWG. One or several PDFs can be selected. It does not include original mapping source DWGs. Run it in Windows AutoCAD. Unmatched symbols retain source geometry or use an approved same-category fallback with a red review cloud and source-page reference. A local journal tracks each page and lets the same unchanged batch resume without overwriting completed DWGs."}),pe&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:pe})]})]}),c.jsxs("div",{className:"pdf-final-status",role:"note","data-testid":"text-conversion-unavailable",children:[c.jsxs("strong",{children:[c.jsx(BE,{size:13,style:{verticalAlign:"-2px"}})," AutoCAD 2020 is not connected to this browser."]})," ","DXF vector export runs directly in this browser. Native DWG still requires the downloaded helper to run in Windows AutoCAD; the browser does not connect to AutoCAD."]}),c.jsx(pT,{discipline:a,onAddPdfs:Na,clientFolderId:o||void 0,clientFolderLabel:l||void 0})]})}function sy({discipline:a}){const[r]=q.useState(()=>{try{return{hierarchy:Ix(),recovery:null}}catch(he){const de=he instanceof Vo?he:new Vo("Saved groups could not be loaded from this browser.");return{hierarchy:Nu(),recovery:{message:de.message,rawValue:de.rawValue}}}}),[o,l]=q.useState(r.hierarchy),[i,p]=q.useState(r.recovery),[g,h]=q.useState(""),[m,u]=q.useState(null),[y,b]=q.useState(""),[w,S]=q.useState(null),j=o[a],C=a==="pfd"?"PFD":"P&ID",D=ju(j,w),E=D&&(D.kind==="client"||D.kind==="legacy")?D.id:"",A=E?Xy(j).find(he=>he.id===E)?.label??D?.name??"":"",N=he=>S(he||null);q.useEffect(()=>{if(!i)try{Mx(o),h("")}catch(he){h(he instanceof Error?he.message:"Groups could not be saved in this browser.")}},[o,i]);const B=(he,de,Y=[])=>({id:globalThis.crypto?.randomUUID?.()??`group-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:he,kind:de,expanded:!0,children:Y}),x=(he,de)=>{b(de),u(he)},R=()=>{const he=B("New technology","technology",[B("Projects","projects"),B("Proposals","proposals")]);l(de=>({...de,[a]:[...de[a],he]})),x(he.id,he.name),S(he.id)},L=he=>{const de=ju(j,he);if(!de)return;const Y=de.kind==="projects"?"project":de.kind==="proposals"?"proposal":de.kind==="project"||de.kind==="proposal"?"client":null;if(!Y)return;const be=B(Y==="project"?"New project":Y==="proposal"?"New proposal":"New client",Y);l(Te=>({...Te,[a]:Ti(Te[a],he,_=>({..._,expanded:!0,children:[..._.children,be]}))})),x(be.id,be.name),S(be.id)},P=he=>{const de=y.trim();if(!de||de.length>ji){h(`Folder names must be 1–${ji} characters.`),u(null);return}l(Y=>({...Y,[a]:Ti(Y[a],he,Q=>({...Q,name:de}))})),u(null),h("")},H=()=>u(null),fe=he=>l(de=>({...de,[a]:Ti(de[a],he,Y=>({...Y,expanded:!Y.expanded}))})),re=he=>{window.confirm(`Delete “${he.name}” and all folders inside it? Saved title blocks and CAD sources are not deleted.`)&&(Yy(he,w)&&S(null),jb(he,m)&&u(null),l(de=>({...de,[a]:zy(de[a],he.id)})))},oe=()=>{if(i?.rawValue===null||i?.rawValue===void 0)return;const he=new Blob([i.rawValue],{type:"application/json;charset=utf-8"}),de=URL.createObjectURL(he),Y=document.createElement("a");Y.href=de,Y.download="mapping-studio-hierarchy-backup.json",Y.click(),window.setTimeout(()=>URL.revokeObjectURL(de),1e3)},Ae=()=>{if(window.confirm("Clear the unreadable hierarchy saved in this browser? This cannot be undone. Download a backup first if you may need the saved data."))try{window.localStorage.removeItem(rp),window.localStorage.removeItem(By),l(Nu()),p(null),h("")}catch{h("Browser storage could not be cleared. The saved hierarchy remains locked and unchanged.")}};return c.jsxs("main",{className:"hierarchy-page","data-discipline":a,children:[c.jsxs("header",{className:"hierarchy-topbar",children:[c.jsxs(ia,{href:"/",className:"studio-wordmark","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),c.jsxs("div",{className:"hierarchy-top-actions",children:[c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Saved on this device"]}),c.jsxs(ia,{href:"/",className:"btn subtle","data-testid":"link-discipline-selection",children:[c.jsx(vy,{size:14})," Disciplines"]})]})]}),c.jsxs("div",{className:"hierarchy-frame",children:[c.jsxs("aside",{className:"hierarchy-sidebar",children:[c.jsx("div",{className:"sidebar-label",children:"DISCIPLINES"}),c.jsxs(ia,{href:"/workspace/pfd",className:`discipline-nav ${a==="pfd"?"active":""}`,"data-testid":"nav-pfd",children:[c.jsx(qE,{size:16})," PFD"]}),c.jsxs(ia,{href:"/workspace/pid",className:`discipline-nav ${a==="pid"?"active":""}`,"data-testid":"nav-pid",children:[c.jsx($o,{size:16})," P&ID"]}),c.jsxs("div",{className:"sidebar-local-note",children:[c.jsx(yr,{size:14}),c.jsx("span",{children:"PFD and P&ID groups stay separate."})]})]}),c.jsxs("section",{className:"hierarchy-main","aria-label":`${C} workspace`,children:[c.jsxs("div",{className:"hierarchy-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[C," workspace"]}),c.jsx("h1",{children:C}),c.jsx("p",{children:"Organize technology, project/proposal and client folders. Common standards stay in the company library."})]}),c.jsxs("div",{className:"hierarchy-heading-actions",children:[c.jsxs(ia,{href:`/workspace/${a}/engineering-data`,className:"btn edm-entry-link","data-testid":`link-engineering-data-${a}`,children:[c.jsx(ep,{size:14})," Engineering data"]}),c.jsxs("button",{className:"btn primary",onClick:R,disabled:!!i,"data-testid":"button-add-group",children:[c.jsx(Ho,{size:15})," New technology"]})]})]}),i&&c.jsxs("div",{className:"hierarchy-recovery",role:"alert","data-testid":"status-hierarchy-recovery",children:[c.jsxs("div",{className:"recovery-title",children:[c.jsx(br,{size:17}),c.jsx("strong",{children:"Saved groups need recovery"})]}),c.jsxs("p",{children:[i.message," Editing is disabled to protect the saved data."]}),i.rawValue!==null?c.jsx("button",{className:"btn",onClick:oe,"data-testid":"button-download-hierarchy-backup",children:"Download raw backup"}):c.jsx("p",{className:"recovery-unavailable",children:"A raw backup is unavailable because browser storage could not be read."}),c.jsx("button",{className:"btn danger",onClick:Ae,"data-testid":"button-clear-hierarchy-storage",children:"Clear saved data and start over"})]}),g&&!i&&c.jsxs("div",{className:"storage-banner",role:"alert","data-testid":"status-hierarchy-storage",children:[c.jsx(br,{size:15}),g]}),c.jsxs("div",{className:"hierarchy-panel",children:[c.jsxs("div",{className:"tree-head",children:[c.jsx("span",{children:"TECHNOLOGY · PROJECTS · PROPOSALS · CLIENTS"}),c.jsxs("span",{"data-testid":"text-group-count",children:[Ru(j)," ",Ru(j)===1?"folder":"folders"]})]}),j.length===0?c.jsxs("div",{className:"hierarchy-empty","data-testid":"empty-hierarchy",children:[c.jsx("div",{className:"empty-folder",children:c.jsx(Au,{size:23})}),c.jsx("strong",{children:i?"Folders are locked":"No technology folders yet"}),c.jsx("p",{children:i?"Recover or clear the saved data to continue.":"Create a technology folder, then add projects or proposals and their clients."}),!i&&c.jsxs("button",{className:"btn",onClick:R,"data-testid":"button-create-first-group",children:[c.jsx(Ho,{size:14})," Create first technology"]})]}):c.jsx("div",{className:"tree-list",role:"tree","aria-label":`${C} project folders`,children:j.map(he=>c.jsx(Lb,{node:he,depth:0,selectedId:w,editingId:m,editName:y,setEditName:b,onSelect:S,onToggle:fe,onAdd:L,onRename:x,onCommit:P,onCancel:H,onDelete:re,disabled:!!i},he.id))})]}),E&&c.jsxs("div",{className:"hierarchy-client-context",role:"status","data-testid":"selected-client-folder",children:[c.jsx(Au,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:A})," selected. Its title block and client source library will be used below."]})]}),c.jsxs("div",{className:"hierarchy-footnote",children:[c.jsx(yr,{size:14}),c.jsx("span",{children:"Saved in this browser. PFD and P&ID folder trees stay separate."})]}),c.jsx(w2,{discipline:a==="pfd"?"PFD":"P&ID",groups:j,selectedClientId:E,selectedClientLabel:A,onSelectClient:N},a)]})]})]})}function jb(a,r){return r!==null&&(a.id===r||a.children.some(o=>jb(o,r)))}function Lb({node:a,depth:r,selectedId:o,editingId:l,editName:i,setEditName:p,onSelect:g,onToggle:h,onAdd:m,onRename:u,onCommit:y,onCancel:b,onDelete:w,disabled:S}){const j=l===a.id,C=["projects","proposals","project","proposal"].includes(a.kind),D=!["projects","proposals"].includes(a.kind),E=a.kind==="projects"?"Add project":a.kind==="proposals"?"Add proposal":a.kind==="project"||a.kind==="proposal"?"Add client":"Add folder",A={technology:"Technology",projects:"Projects",proposals:"Proposals",project:"Project",proposal:"Proposal",client:"Client",legacy:"Existing group"},N=q.useRef(null),B=()=>{N.current!==a.id&&(N.current=a.id,y(a.id))},x=()=>{N.current!==a.id&&(N.current=a.id,b())};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`tree-row ${o===a.id?"selected":""}`,role:"treeitem","aria-expanded":a.children.length?a.expanded:void 0,"aria-level":r+1,style:{"--tree-depth":r},"data-testid":`tree-group-${a.id}`,children:[c.jsx("button",{className:"tree-toggle","aria-label":`${a.expanded?"Collapse":"Expand"} ${a.name}`,disabled:S,onClick:()=>h(a.id),"data-testid":`button-toggle-group-${a.id}`,children:a.expanded?c.jsx(gr,{size:15}):c.jsx(Ju,{size:15})}),c.jsx(Au,{className:"tree-folder",size:16}),j?c.jsx("input",{autoFocus:!0,maxLength:ji,className:"tree-rename-input","aria-label":"Folder name",value:i,disabled:S,onChange:R=>p(R.target.value),onFocus:()=>{N.current=null},onBlur:B,onKeyDown:R=>{R.key==="Enter"&&B(),R.key==="Escape"&&(R.preventDefault(),x())},"data-testid":`input-rename-group-${a.id}`}):c.jsx("button",{className:"tree-name",disabled:S,onClick:()=>g(a.id),onDoubleClick:()=>D&&u(a.id,a.name),title:"Select folder; double-click to rename","data-testid":`button-select-group-${a.id}`,children:a.name}),c.jsx("span",{className:"tree-kind-badge",children:A[a.kind]}),c.jsxs("span",{className:"tree-actions",children:[C&&c.jsx("button",{"aria-label":`${E} under ${a.name}`,title:E,disabled:S,onClick:()=>m(a.id),"data-testid":`button-add-subgroup-${a.id}`,children:c.jsx(Ho,{size:14})}),D&&c.jsx("button",{"aria-label":`Rename ${a.name}`,title:"Rename folder",disabled:S,onClick:()=>u(a.id,a.name),"data-testid":`button-rename-group-${a.id}`,children:c.jsx(HE,{size:13})}),D&&c.jsx("button",{"aria-label":`Delete ${a.name}`,title:"Delete folder",disabled:S,onClick:()=>w(a),"data-testid":`button-delete-group-${a.id}`,children:c.jsx(ki,{size:13})})]})]}),a.expanded&&a.children.map(R=>c.jsx(Lb,{node:R,depth:r+1,selectedId:o,editingId:l,editName:i,setEditName:p,onSelect:g,onToggle:h,onAdd:m,onRename:u,onCommit:y,onCancel:b,onDelete:w,disabled:S},R.id))]})}function x2({order:a,hidden:r,onChange:o}){const l=(i,p)=>{const g=[...a];[g[i],g[i+p]]=[g[i+p],g[i]],o(g,r)};return c.jsxs("details",{className:"edm-column-picker",children:[c.jsxs("summary",{children:["Columns (",a.length-r.length,")"]}),c.jsxs("div",{className:"edm-column-options",children:[c.jsx("p",{children:"Use these checkboxes to show or hide columns. The filter icon in each heading filters row values, including (Blanks), and does not hide the column."}),a.map((i,p)=>c.jsxs("div",{className:"edm-column-option",children:[c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:!r.includes(i),"aria-label":`Show ${kt[i]}`,disabled:!r.includes(i)&&r.length===a.length-1,onChange:()=>o(a,r.includes(i)?r.filter(g=>g!==i):[...r,i])}),kt[i]]}),c.jsx("button",{type:"button",disabled:p===0,onClick:()=>l(p,-1),"aria-label":`Move ${kt[i]} up`,children:c.jsx(pE,{size:14})}),c.jsx("button",{type:"button",disabled:p===a.length-1,onClick:()=>l(p,1),"aria-label":`Move ${kt[i]} down`,children:c.jsx(lE,{size:14})})]},i)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>o([...Un],[]),children:"Reset columns"})]})]})}function oy(a){const r=Math.min(272,window.innerWidth-16),o=Math.min(360,window.innerHeight-16),l=Math.max(8,Math.min(a.left,window.innerWidth-r-8)),i=a.bottom+4;return{top:i+o<=window.innerHeight-8?i:Math.max(8,a.top-o-4),left:l}}function ly({label:a,options:r,selectedValues:o,onApply:l}){const i=q.useRef(null),p=q.useRef(null),g=q.useRef(null),[h,m]=q.useState(!1),[u,y]=q.useState(null),[b,w]=q.useState([]),[S,j]=q.useState(""),C=o!==void 0,D=q.useMemo(()=>r.map(L=>L.value),[r]),E=q.useMemo(()=>{const L=S.trim().toLowerCase();return L?r.filter(P=>(P.value||"(Blanks)").toLowerCase().includes(L)):r},[r,S]),A=r.reduce((L,P)=>L+Number(b.includes(P.value)),0),N=r.length>0&&A===r.length;q.useEffect(()=>{g.current&&(g.current.indeterminate=A>0&&A<r.length)},[b,r.length,A]),q.useEffect(()=>{if(!h)return;const L=()=>{const fe=i.current?.getBoundingClientRect();fe&&y(oy(fe))},P=fe=>{const re=fe.target;!p.current?.contains(re)&&!i.current?.contains(re)&&m(!1)},H=fe=>{fe.key==="Escape"&&m(!1)};return L(),document.addEventListener("pointerdown",P),document.addEventListener("keydown",H),window.addEventListener("resize",L),window.addEventListener("scroll",L,!0),()=>{document.removeEventListener("pointerdown",P),document.removeEventListener("keydown",H),window.removeEventListener("resize",L),window.removeEventListener("scroll",L,!0)}},[h]);const B=()=>{if(h){m(!1);return}const L=i.current?.getBoundingClientRect();L&&y(oy(L)),w(o?[...o]:D),j(""),m(!0)},x=L=>{w(P=>P.includes(L)?P.filter(H=>H!==L):[...P,L])},R=()=>{l(b),m(!1)};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{ref:i,type:"button",className:`edm-column-filter-trigger${C?" active":""}`,title:`${C?"Filtered":"Filter"} ${a}`,"aria-label":`${C?"Edit filter for":"Filter"} ${a}`,"aria-expanded":h,onClick:B,"data-testid":`button-filter-${a.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[c.jsx(_E,{size:12}),c.jsx(gr,{size:10})]}),h&&u&&Ui.createPortal(c.jsxs("div",{ref:p,className:"edm-column-filter-menu",style:{top:u.top,left:u.left},role:"dialog","aria-label":`${a} filter`,"data-testid":"menu-column-filter",children:[c.jsxs("strong",{className:"edm-column-filter-title",children:["Filter: ",a]}),c.jsxs("label",{className:"edm-column-filter-search",children:[c.jsx(Ko,{size:14}),c.jsx("input",{value:S,onChange:L=>j(L.target.value),placeholder:"Search values…","aria-label":`Search ${a} values`})]}),c.jsxs("label",{className:"edm-column-filter-select-all",children:[c.jsx("input",{ref:g,type:"checkbox",checked:N,disabled:!r.length,onChange:()=>w(N?[]:D)}),c.jsx("span",{children:"Select all"})]}),c.jsxs("div",{className:"edm-column-filter-options",role:"group","aria-label":`${a} values`,children:[!E.length&&c.jsx("p",{className:"edm-column-filter-empty",children:r.length?"No matching values.":"No values in this drawing yet."}),E.map(L=>c.jsxs("label",{className:"edm-column-filter-option",children:[c.jsx("input",{type:"checkbox",checked:b.includes(L.value),onChange:()=>x(L.value)}),c.jsx("span",{children:L.value||"(Blanks)"}),c.jsx("small",{children:L.count})]},JSON.stringify(L.value)))]}),c.jsxs("div",{className:"edm-column-filter-actions",children:[c.jsx("button",{type:"button",className:"edm-column-filter-clear",disabled:!C,onClick:()=>{l(void 0),m(!1)},children:"Clear filter"}),c.jsx("span",{}),c.jsx("button",{type:"button",onClick:()=>m(!1),children:"Cancel"}),c.jsx("button",{type:"button",className:"apply",disabled:!r.length,onClick:R,children:"Apply"})]})]}),document.body)]})}function Ob(a){return{headers:["#","Object type",...a.fields.map(r=>kt[r])],rows:a.rows.map((r,o)=>[o+1,r.type,...a.fields.map(l=>mn(r,l))])}}function _b(a){return a.groups.map(r=>{const o=new Map;for(const l of a.rows){const i=mn(l,r)||"—";o.set(i,(o.get(i)??0)+1)}return{field:r,label:kt[r],values:[...o].map(([l,i])=>({value:l,count:i}))}})}function S2(a){const r=Ob(a);return kb(r.headers,r.rows)}async function T2(a,r){const{default:o}=await nn(async()=>{const{default:y}=await import("./exceljs.min-DbFXNCeR.js").then(b=>b.e);return{default:y}},__vite__mapDeps([2,1])),l=new o.Workbook;l.creator="gaurav.cbiindia";const i=l.addWorksheet("Engineering data",{pageSetup:{orientation:"landscape",fitToPage:!0,fitToWidth:1,fitToHeight:0}}),p=Ob(a),g=_b(a),h=p.headers.length;["Engineering Data Editor",`${r.discipline} · ${r.drawing}${r.revision?` · ${r.revision}`:""} · ${a.rows.length} records`,`Object type: ${r.filter} · Search: ${r.search||"(none)"} · Sort: ${r.sort}`,...g.map(y=>{const b=y.values.map(({value:w,count:S})=>`${w} (${S})`).join(" · ");return`${y.label}: ${b.length>1500?b.slice(0,1500)+"… (see Group summaries sheet)":b}`})].forEach((y,b)=>{const w=i.addRow([y]);i.mergeCells(w.number,1,w.number,h),w.height=b===0?30:32,w.getCell(1).font={name:"Calibri",size:b===0?16:10,bold:b===0,color:{argb:b===0?"FFF0F0E8":"FF405A55"}},w.getCell(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:b===0?"FF203940":"FFF9F8F2"}},w.getCell(1).alignment={vertical:"middle",wrapText:!0}});const u=i.addRow(p.headers);if(u.height=30,u.eachCell(y=>{y.font={name:"Calibri",bold:!0,size:10,color:{argb:"FF405A55"}},y.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFF0F1E9"}},y.alignment={vertical:"middle",wrapText:!0},y.border={bottom:{style:"thin",color:{argb:"FFD9DED5"}}}}),p.rows.forEach((y,b)=>{const w=i.addRow(y);w.height=30,w.eachCell({includeEmpty:!0},(S,j)=>{S.numFmt=j===1?"0":"@",S.font={name:j>2&&a.fields[j-3]==="itemTag"?"Consolas":"Calibri",size:10,color:{argb:"FF405A55"}},S.alignment={vertical:"middle",wrapText:!0},S.fill={type:"pattern",pattern:"solid",fgColor:{argb:b%2?"FFF2F5EE":"FFFBFAF6"}},S.border={right:{style:"thin",color:{argb:"FFECEEE8"}},bottom:{style:"thin",color:{argb:"FFE7E9E2"}}}})}),i.columns.forEach((y,b)=>{const w=a.fields[b-2];y.width=b===0?7:b===1?18:w==="notes"?52:w==="description"||w==="connection"?38:Math.max(18,p.headers[b].length+3)}),i.views=[{state:"frozen",ySplit:u.number,xSplit:2}],i.autoFilter={from:{row:u.number,column:1},to:{row:u.number+p.rows.length,column:h}},i.pageSetup.printTitlesRow=`${u.number}:${u.number}`,i.headerFooter.oddFooter="© gaurav.cbiindia | &P of &N",g.length){const y=l.addWorksheet("Group summaries");y.columns=[{header:"Group field",width:25},{header:"Value",width:42},{header:"Records",width:12}],g.forEach(b=>b.values.forEach(({value:w,count:S})=>y.addRow([b.label,w,S]))),y.getRow(1).font={bold:!0},y.views=[{state:"frozen",ySplit:1}],y.autoFilter="A1:C1"}return new Uint8Array(await l.xlsx.writeBuffer())}function Pb(a,r){const o=String(r==="type"?a.type:mn(a,r));return o.trim()?o:""}function A2(a,r){const o=new Map;for(const l of a){const i=Pb(l,r);o.set(i,(o.get(i)??0)+1)}return[...o.entries()].map(([l,i])=>({value:l,count:i})).sort((l,i)=>l.value===""?i.value===""?0:1:i.value===""?-1:l.value.localeCompare(i.value,void 0,{numeric:!0,sensitivity:"base"}))}function iy(a,r){return Object.entries(r).every(([o,l])=>l===void 0||l.includes(Pb(a,o)))}const D2=["All types",...Jo],C2=["type",...Un],qb="pid-mapping-studio:engineering-column-widths:v1",Wu=44,Zu=720,N2=a=>a==="rowNumber"?44:a==="type"?154:a==="itemTag"?250:a==="notes"?300:a==="description"||a==="stableId"?220:a==="drawingRef"?180:a==="sourcePage"?100:a==="reviewStatus"?150:136;function k2(){try{const a=JSON.parse(window.localStorage.getItem(qb)??"{}");return!a||typeof a!="object"||Array.isArray(a)?{}:Object.fromEntries(Object.entries(a).filter(r=>typeof r[1]=="number"&&Number.isFinite(r[1])).map(([r,o])=>[r,Math.max(Wu,Math.min(Zu,o))]))}catch{return{}}}function cy(a){try{window.localStorage.setItem(qb,JSON.stringify(a))}catch{}}const R2=a=>a.split(/\s+/).map(r=>r[0]).join("").slice(0,2).toUpperCase();function dy({discipline:a}){const[r]=q.useState(()=>{try{return{drawings:el(a),raw:_s(a),error:""}}catch{return{drawings:[],raw:null,error:"Saved engineering data could not be read. Editing is blocked to protect it. Export a raw backup before recovery."}}}),[o,l]=q.useState(r.drawings),i=q.useRef(o),p=q.useRef(!0),g=q.useRef(r.raw),[h,m]=q.useState(o[0]?.id??""),u=o.find(k=>k.id===h)??o[0]??{id:"",name:"No drawing selected",revision:"",rows:[]};q.useEffect(()=>{const k=new URLSearchParams(window.location.search).get("source"),Z=k?o.find(ue=>ue.sourcePdfId===k):void 0;Z&&Z.id!==h&&m(Z.id)},[o,h]),q.useEffect(()=>{_({}),R(""),fe("All types"),oe(0)},[h,a]);const y=u.rows,[b,w]=q.useState(y[0]?.id??""),[S,j]=q.useState(""),[C,D]=q.useState("Rev 0"),[E,A]=q.useState(""),[N,B]=q.useState("Equipment"),[x,R]=q.useState(""),[L,P]=q.useState(""),[H,fe]=q.useState("All types"),[re,oe]=q.useState(0),[Ae,he]=q.useState(12),[de,Y]=q.useState({field:"itemTag",direction:1}),[Q,be]=q.useState([]),[Te,_]=q.useState({}),[J,$]=q.useState([...Un]),[G,le]=q.useState([]),[ge,Ee]=q.useState(k2),Me=q.useRef(ge),Ie=q.useRef(null),Et=q.useRef(null),[pt,ht]=q.useState("records"),wt=J.filter(k=>!G.includes(k)),aa=["rowNumber","type",...wt],Rt=k=>ge[k]??N2(k),U=aa.reduce((k,Z)=>k+Rt(Z),0),[ie,pe]=q.useState(!1),[F,ce]=q.useState(""),[Ce,me]=q.useState(""),[Le,Qe]=q.useState(r.error),Xe=(k,Z,ue=!1)=>{const Ue={...Me.current,[k]:Math.max(Wu,Math.min(Zu,Math.round(Z)))};Me.current=Ue,Ee(Ue),ue&&cy(Ue)},qe=k=>{const Z=document.createElement("canvas").getContext("2d"),ue=Ie.current?getComputedStyle(Ie.current).font:"";Z&&(Z.font=ue||"12px sans-serif");const Ue=k==="rowNumber"?"#":k==="type"?"Object type":kt[k],I=k==="rowNumber"?[]:k==="type"?y.map(Ne=>Ne.type):y.map(Ne=>mn(Ne,k)),te=Ne=>Ne.split(/\r?\n/).reduce((Pe,Je)=>Math.max(Pe,Z?Z.measureText(Je||"—").width:Je.length*7),0),ve=I.reduce((Ne,Pe)=>Math.max(Ne,te(Pe)),te(Ue));Xe(k,ve+(k==="itemTag"?158:k==="rowNumber"?18:54),!0)},jt=(k,Z)=>{Z.preventDefault(),Z.stopPropagation(),Z.currentTarget.setPointerCapture(Z.pointerId),Et.current={column:k,pointerId:Z.pointerId,startX:Z.clientX,startWidth:Rt(k)}},ye=(k,Z)=>{const ue=Et.current;!ue||ue.column!==k||ue.pointerId!==Z.pointerId||(Z.preventDefault(),Xe(k,ue.startWidth+Z.clientX-ue.startX))},et=(k,Z)=>{const ue=Et.current;!ue||ue.column!==k||ue.pointerId!==Z.pointerId||(Et.current=null,cy(Me.current),Z.currentTarget.hasPointerCapture(Z.pointerId)&&Z.currentTarget.releasePointerCapture(Z.pointerId))},nt=(k,Z)=>{Z.key==="Enter"?(Z.preventDefault(),qe(k)):(Z.key==="ArrowLeft"||Z.key==="ArrowRight")&&(Z.preventDefault(),Xe(k,Rt(k)+(Z.key==="ArrowRight"?16:-16),!0))},Wt=(k,Z)=>c.jsx("span",{className:"edm-column-resize-handle",role:"separator","aria-orientation":"vertical","aria-label":`Resize ${Z} column`,"aria-valuenow":Rt(k),"aria-valuemin":Wu,"aria-valuemax":Zu,title:"Drag to resize · double-click to fit text",tabIndex:0,onPointerDown:ue=>jt(k,ue),onPointerMove:ue=>ye(k,ue),onPointerUp:ue=>et(k,ue),onPointerCancel:ue=>et(k,ue),onDoubleClick:ue=>{ue.preventDefault(),ue.stopPropagation(),qe(k)},onKeyDown:ue=>nt(k,ue),"data-testid":`resize-column-${k}`});q.useEffect(()=>{p.current=!0;const k=Z=>{if(Z.key===`pid-mapping-studio:engineering-workspace:v2:${a}`)try{const ue=el(a);i.current=ue,l(ue),g.current=_s(a),Qe("")}catch{Qe("Saved data changed and could not be read. Reload this page before editing.")}};return window.addEventListener("storage",k),()=>{p.current=!1,window.removeEventListener("storage",k)}},[a]);const Re=y.find(k=>k.id===b)??null;q.useEffect(()=>{const k=new URLSearchParams(window.location.search).get("record");if(!k)return;let Z=k;try{Z=up(k)}catch{}const ue=y.find(Ue=>Ue.id===Z);ue&&ue.id!==b&&w(ue.id)},[y,b]);const Da=q.useMemo(()=>{const k=x.trim().toLowerCase();return Object.fromEntries(C2.map(Z=>{const ue={...Te};delete ue[Z];const Ue=y.filter(I=>(H==="All types"||I.type===H)&&(!k||Object.values(I).join(" ").toLowerCase().includes(k))&&iy(I,ue));return[Z,A2(Ue,Z)]}))},[y,x,H,Te]),St=q.useMemo(()=>{const k=x.trim().toLowerCase();return y.filter(Z=>(H==="All types"||Z.type===H)&&(!k||Object.values(Z).join(" ").toLowerCase().includes(k))&&iy(Z,Te))},[y,x,H,Te]),gt=q.useMemo(()=>[...St].sort((k,Z)=>{for(const ue of Q){const Ue=mn(k,ue).localeCompare(mn(Z,ue)||"—",void 0,{numeric:!0});if(Ue)return Ue}return mn(k,de.field).localeCompare(mn(Z,de.field),void 0,{numeric:!0})*de.direction}),[St,de,Q]),Zt=Math.max(1,Math.ceil(gt.length/Ae)),It={fields:wt,rows:gt,groups:Q},Ca=_b(It),it=gt.slice(re*Ae,(re+1)*Ae);q.useEffect(()=>{it.length&&!it.some(k=>k.id===b)?w(it[0].id):!it.length&&b&&w("")},[it,b]),q.useEffect(()=>oe(k=>Math.min(k,Zt-1)),[Zt]);const Ot=k=>{if(r.error)return!1;try{return g.current=Hu(a,k,g.current),i.current=k,l(k),Qe(""),!0}catch(Z){return Qe(Z instanceof Error&&Z.name!=="QuotaExceededError"?Z.message:"Device storage is full or unavailable. This change was not saved. Download a backup and free space."),!1}},Mt=k=>Ot(o.map(Z=>Z.id===u.id?{...Z,rows:k}:Z)),mt=(k,Z,ue)=>{Mt(y.map(Ue=>Ue.id===k?{...Ue,[Z]:ue}:Ue))},Na=k=>{k.preventDefault();const Z=S.trim();if(!Z||o.some(Ue=>Ue.name.toLowerCase()===Z.toLowerCase())){Qe("Enter a new, unique drawing reference.");return}const ue={id:crypto.randomUUID(),name:Z,revision:C.trim()||"Rev 0",rows:[]};Ot([...o,ue])&&(m(ue.id),j(""),oe(0))},na=k=>{if(k.preventDefault(),!u.id)return;const Z=pp(N,E,u.name);if(Mt([...y,Z])){A(""),R(""),fe("All types"),Y({field:"itemTag",direction:1}),be([]);const ue=[...y,Z].sort((Ue,I)=>Ue.itemTag.localeCompare(I.itemTag,void 0,{numeric:!0})).findIndex(Ue=>Ue.id===Z.id);oe(Math.floor(ue/Ae)),w(Z.id)}},on=()=>{!Re||!window.confirm(`Delete record ${Re.itemTag}? This cannot be undone without a backup.`)||Mt(y.filter(k=>k.id!==Re.id))&&w("")},Qa=async(k,Z)=>{if(k.size>5*1024*1024){Qe("Import a file smaller than 5 MB.");return}try{const ue=u.id,Ue=await k.text();if(!p.current)return;if(Z==="csv"){const I=i.current.find(ve=>ve.id===ue);if(!I)throw new Error("The target drawing no longer exists. Choose a drawing and try again.");const te=zT(Ue,I.name);Ot(i.current.map(ve=>ve.id===ue?{...ve,rows:[...ve.rows,...te]}:ve))&&(R(""),fe("All types"),oe(0))}else{const I=$T(Ue,a);Ot([...i.current,...I])&&(m(I[0]?.id??u.id),oe(0))}}catch(ue){Qe(ue instanceof Error?ue.message:"This file could not be imported. No records were changed.")}},Bn=k=>Y(Z=>({field:k,direction:Z.field===k&&Z.direction===1?-1:1})),ka=(k,Z)=>{const ue=Da[k].map(I=>I.value),Ue=Z!==void 0&&ue.every(I=>Z.includes(I))&&Z.length===ue.length;_(I=>{const te={...I};return Z===void 0||Ue?delete te[k]:te[k]=Z,te}),oe(0)},En=k=>be(Z=>Z.includes(k)?Z:[...Z,k]),da=k=>{k.preventDefault();const Z=k.dataTransfer.getData("text/engineering-field");Un.includes(Z)&&En(Z)},ua=k=>{const Z=Math.max(0,Math.min(Zt-1,k));oe(Z);const ue=gt.slice(Z*Ae,(Z+1)*Ae)[0];ue&&w(ue.id)},Tt=k=>{m(k),R(""),oe(0)},We=async(k,Z=!1)=>{if(ie)return;const ue=Z?{fields:Un,rows:o.flatMap(te=>te.rows),groups:[]}:It,Ue=Z?"all-records":"current-view",I={discipline:a==="pid"?"P&ID":"PFD",drawing:Z?"All drawings":u.name,revision:Z?void 0:u.revision,filter:Z?"All types":H,search:Z?"":x.trim(),sort:Z?"Drawing order":`${kt[de.field]} ${de.direction===1?"ascending":"descending"}`};pe(!0),ce(""),me("");try{const te=k==="csv"?S2(ue):await T2(ue,I);xi(`engineering-${a}-${Ue}.${k}`,te,k==="csv"?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),p.current&&ce(`Prepared ${k==="csv"?"CSV":"Excel"}: ${ue.rows.length} records · ${Z?"all records":"current view"}.`)}catch(te){p.current&&me(te instanceof Error?te.message:"Export could not be prepared. Your saved records have not changed.")}finally{p.current&&pe(!1)}};return c.jsxs("main",{className:"edm-page","data-mobile-panel":pt,children:[c.jsxs("header",{className:"edm-topbar",children:[c.jsxs(ia,{href:`/workspace/${a}`,className:"edm-brand","data-testid":"link-edm-workspace",children:[c.jsx("span",{className:"edm-mark",children:"ED"}),c.jsxs("span",{children:["Engineering Data Manager",c.jsx("small",{children:"Mapping Studio / browser-local workspace"})]})]}),c.jsxs("div",{className:"edm-toplinks",children:[c.jsxs("nav",{className:"edm-disciplines","aria-label":"Discipline navigation",children:[c.jsx(ia,{href:"/workspace/pfd/engineering-data",className:a==="pfd"?"active":"","data-testid":"link-edm-pfd",children:"PFD"}),c.jsx(ia,{href:"/workspace/pid/engineering-data",className:a==="pid"?"active":"","data-testid":"link-edm-pid",children:"P&ID"})]}),c.jsxs("span",{className:"edm-local",children:[c.jsx(yr,{size:13}),"Saved on this device"]}),c.jsxs(ia,{href:`/workspace/${a}`,className:"btn subtle","aria-label":"Back to the PFD or P&ID workspace","data-testid":"link-back-workspace",children:[c.jsx(vy,{size:13})," Workspace"]})]})]}),c.jsxs("nav",{className:"edm-mobile-tabs","aria-label":"Engineering data panels",children:[c.jsx("button",{type:"button",className:pt==="catalog"?"active":"","aria-pressed":pt==="catalog",onClick:()=>ht("catalog"),"data-testid":"tab-edm-catalog",children:"Catalog"}),c.jsx("button",{type:"button",className:pt==="records"?"active":"","aria-pressed":pt==="records",onClick:()=>ht("records"),"data-testid":"tab-edm-records",children:"Records"}),c.jsx("button",{type:"button",className:pt==="properties"?"active":"","aria-pressed":pt==="properties",onClick:()=>ht("properties"),"data-testid":"tab-edm-properties",children:"Properties"})]}),c.jsxs("div",{className:"edm-titlebar",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"edm-eyebrow",children:[a==="pfd"?"PROCESS FLOW DIAGRAM":"PIPING & INSTRUMENTATION"," / YOUR RECORDS"]}),c.jsx("h1",{children:"Engineering data"}),c.jsx("p",{children:"Add or import your records. PFD and P&ID stay separate on this device."})]}),c.jsxs("div",{className:"edm-object-select",children:[c.jsx("span",{children:"Object type"}),c.jsx("select",{value:H,onChange:k=>{fe(k.target.value),oe(0)},"aria-label":"Object type filter","data-testid":"select-object-type",children:D2.map(k=>c.jsx("option",{children:k},k))}),c.jsx(gr,{size:14})]})]}),c.jsxs("div",{className:"edm-file-actions",children:[c.jsxs("button",{className:"btn",disabled:!o.length,onClick:()=>xi(`engineering-${a}-backup.json`,MT(a,o),"application/json"),"data-testid":"button-backup-data",children:[c.jsx(Ur,{size:14})," Download backup"]}),c.jsxs("label",{className:"btn",children:[c.jsx(Os,{size:14})," Import backup",c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Import engineering backup",disabled:!!r.error,onChange:k=>{const Z=k.currentTarget.files?.[0];k.currentTarget.value="",Z&&Qa(Z,"backup")}})]}),c.jsx("button",{className:"btn",disabled:ie||!o.some(k=>k.rows.length),onClick:()=>{We("csv",!0)},"data-testid":"button-report-all",children:"All records · CSV"}),c.jsx("button",{className:"btn",disabled:ie||!o.some(k=>k.rows.length),onClick:()=>{We("xlsx",!0)},"data-testid":"button-report-all-excel",children:"All records · Excel"}),r.error&&c.jsx("button",{className:"btn",onClick:()=>{try{const k=_s(a);k&&xi(`engineering-${a}-raw.json`,k,"application/json")}catch{Qe("Device storage cannot be accessed. The saved data has not been changed.")}},children:"Export raw backup"}),r.error&&c.jsx("button",{className:"btn danger",onClick:()=>{if(window.confirm("Delete unreadable engineering data for this discipline? Download a raw backup first. This cannot be undone and does not delete PDFs or the old demo data."))try{window.localStorage.removeItem(`pid-mapping-studio:engineering-workspace:v2:${a}`),window.location.reload()}catch{Qe("Device storage cannot be cleared. The saved data has not been changed.")}},children:"Reset unreadable data"}),c.jsx("span",{children:"Local storage only · download backups regularly"})]}),c.jsxs("div",{className:"edm-workspace",children:[c.jsxs("aside",{className:"edm-catalog",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsxs("span",{children:[c.jsx(ep,{size:15})," Catalog"]}),c.jsx("span",{className:"edm-counter",children:o.length})]}),c.jsxs("div",{className:"edm-catalog-search",children:[c.jsx(Ko,{size:13}),c.jsx("input",{"aria-label":"Filter drawings",placeholder:"Filter drawings…",value:L,onChange:k=>P(k.target.value),"data-testid":"input-catalog-filter"})]}),c.jsxs("div",{className:"edm-catalog-label",children:["DRAWINGS · ",a.toUpperCase()]}),c.jsxs("div",{className:"edm-drawing-list",children:[o.filter(k=>k.name.toLowerCase().includes(L.toLowerCase())).map(k=>c.jsxs("button",{className:`edm-drawing-item ${u.id===k.id?"selected":""}`,onClick:()=>Tt(k.id),"data-testid":`button-drawing-${k.id}`,children:[c.jsx(mr,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:k.name}),c.jsxs("small",{children:[k.revision," · ",k.rows.length," records"]})]})]},k.id)),!o.some(k=>k.name.toLowerCase().includes(L.toLowerCase()))&&c.jsx("div",{className:"edm-empty",children:"No drawings match."})]}),c.jsxs("form",{className:"edm-create-drawing",onSubmit:Na,children:[c.jsxs("label",{children:["Drawing reference",c.jsx("input",{value:S,onChange:k=>j(k.target.value),maxLength:160,required:!0,placeholder:"e.g. PID-001","aria-label":"New drawing reference","data-testid":"input-new-drawing"})]}),c.jsxs("label",{children:["Revision",c.jsx("input",{value:C,onChange:k=>D(k.target.value),maxLength:80,"aria-label":"New drawing revision"})]}),c.jsxs("button",{className:"btn primary",disabled:!!r.error,"data-testid":"button-add-drawing",children:[c.jsx(Ho,{size:14})," Add drawing"]})]}),u.id&&c.jsxs("button",{className:"btn danger edm-delete-drawing",disabled:!!r.error,onClick:()=>{if(!window.confirm(`Delete drawing ${u.name} and its ${y.length} records? Download a backup first. This does not delete source PDFs.`))return;const k=o.filter(Z=>Z.id!==u.id);Ot(k)&&(m(k[0]?.id??""),w(""),oe(0))},"data-testid":"button-delete-drawing",children:[c.jsx(ki,{size:14})," Delete drawing"]}),c.jsxs("div",{className:"edm-catalog-foot",children:["No invented sample records.",c.jsx("br",{}),"Source PDFs stay in your workspace."]})]}),c.jsxs("section",{className:"edm-main",children:[c.jsxs("section",{className:"edm-preview panel edm-source-summary",children:[c.jsxs("header",{children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"ACTIVE DRAWING RECORD"}),c.jsx("strong",{"data-testid":"text-active-drawing",children:u.name})]}),c.jsx("span",{className:"edm-revision",children:u.revision})]}),c.jsx("p",{children:u.sourcePdfId?`${u.sourceAlias??"PDF"} tag candidates and clearly labelled values are stored here. Every extracted record needs review. Blank fields mean the PDF text/OCR did not provide a clear value.`:"Add records manually or import them from CSV. New PDF tag candidates appear here with a source page and a review status."}),c.jsxs(ia,{href:u.sourcePdfId?`/workspace/${a}?pdf=${encodeURIComponent(u.sourcePdfId)}&page=${encodeURIComponent(u.rows.find(k=>k.sourcePdfId)?.sourcePage||"1")}#pdf-workflow-title`:`/workspace/${a}`,className:"btn subtle",children:[c.jsx(mr,{size:14})," ",u.sourcePdfId?"Open source PDF page":"View original PDFs"]}),c.jsxs("div",{className:"edm-autocad-status",role:"note",children:[c.jsx("strong",{children:"AutoCAD 2020: not connected."})," EDE extraction does not create a DWG."]})]}),c.jsxs("section",{className:"edm-editor panel",children:[c.jsxs("div",{className:"edm-editor-title",children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"DATA WORKSPACE"}),c.jsx("h2",{children:"Engineering Data Editor"})]}),c.jsx("div",{className:"edm-type-chip",children:H})]}),c.jsxs("form",{className:"edm-add-record",onSubmit:na,children:[c.jsxs("label",{children:["Object type",c.jsx("select",{value:N,onChange:k=>B(k.target.value),"aria-label":"New record type",children:Jo.map(k=>c.jsx("option",{children:k},k))})]}),c.jsxs("label",{children:["Item tag",c.jsx("input",{value:E,onChange:k=>A(k.target.value),maxLength:160,required:!0,placeholder:"e.g. P-101","aria-label":"New item tag","data-testid":"input-new-tag"})]}),c.jsxs("button",{className:"btn primary",disabled:!u.id||!!r.error,"data-testid":"button-add-record",children:[c.jsx(Ho,{size:14})," Add record"]})]}),c.jsxs("div",{className:"edm-report-actions",children:[c.jsxs("button",{className:"btn",disabled:ie||!gt.length,onClick:()=>{We("csv")},"data-testid":"button-export-report",children:[c.jsx(Ur,{size:14})," Current view · CSV"]}),c.jsxs("button",{className:"btn",disabled:ie||!gt.length,onClick:()=>{We("xlsx")},"data-testid":"button-export-excel",children:[c.jsx(Ur,{size:14})," Current view · Excel"]}),c.jsxs("label",{className:"btn",children:[c.jsx(Os,{size:14})," Import CSV",c.jsx("input",{type:"file",accept:".csv,text/csv","aria-label":"Import engineering CSV",disabled:!u.id||!!r.error,onChange:k=>{const Z=k.currentTarget.files?.[0];k.currentTarget.value="",Z&&Qa(Z,"csv")}})]}),c.jsx("button",{className:"btn subtle",onClick:()=>xi("engineering-import-template.csv",FT([]),"text/csv;charset=utf-8"),"data-testid":"button-csv-template",children:"CSV template"}),c.jsxs("button",{className:"btn danger",disabled:!Re||!!r.error,onClick:on,"data-testid":"button-delete-record",children:[c.jsx(ki,{size:14})," Delete selected"]})]}),c.jsxs("div",{className:"edm-export-note","aria-live":"polite",children:[c.jsx("span",{children:"Current view: shown columns, filters, sorting and all matching rows across pages. Excel also includes group summaries. CSV has no visual formatting."}),ie&&c.jsx("strong",{role:"status",children:"Preparing export…"}),F&&c.jsx("strong",{role:"status",children:F}),Ce&&c.jsx("strong",{role:"alert",children:Ce})]}),c.jsx(x2,{order:J,hidden:G,onChange:(k,Z)=>{$(k),le(Z)}}),c.jsxs("div",{className:"edm-placement-legend","aria-label":"CAD placement status legend",children:[c.jsxs("span",{children:[c.jsx("i",{className:"available","aria-hidden":"true",children:"●"})," Available / not placed"]}),c.jsxs("span",{children:[c.jsx("i",{className:"current","aria-hidden":"true",children:"●"})," On this drawing"]}),c.jsxs("span",{children:[c.jsx("i",{className:"another","aria-hidden":"true",children:"●"})," On another drawing"]}),c.jsx("small",{children:"Based on the saved reference only; CAD is not connected for live verification."})]}),c.jsxs("div",{className:"edm-grid-toolbar",children:[c.jsxs("label",{className:"edm-global-search",children:[c.jsx(Ko,{size:14}),c.jsx("input",{placeholder:"Search all fields…","aria-label":"Search engineering data",value:x,onChange:k=>{R(k.target.value),oe(0)},"data-testid":"input-engineering-search"})]}),c.jsxs("span",{className:"edm-result-total","data-testid":"text-result-count",children:[St.length," records"]}),c.jsxs("button",{className:"edm-toolbar-button",onClick:()=>{R(""),fe("All types"),_({}),oe(0)},"data-testid":"button-clear-filters",children:[c.jsx(Cu,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"edm-groups",onDragOver:k=>k.preventDefault(),onDrop:da,"data-testid":"drop-column-group",children:[c.jsx("span",{children:"GROUP BY"}),Q.length?Q.map(k=>c.jsxs("button",{onClick:()=>be(Z=>Z.filter(ue=>ue!==k)),title:"Remove group",children:[kt[k]," ",c.jsx("b",{children:"×"})]},k)):c.jsx("em",{children:"Drag a column header here to group records"})]}),c.jsxs("label",{className:"edm-group-select",children:["Add group",c.jsxs("select",{value:"","aria-label":"Add group",onChange:k=>{k.target.value&&(En(k.target.value),oe(0))},children:[c.jsx("option",{value:"",children:"Choose a column…"}),Un.filter(k=>!Q.includes(k)).map(k=>c.jsx("option",{value:k,children:kt[k]},k))]})]}),c.jsx("p",{className:"edm-table-sizing-help",children:"Drag a column edge to resize it. Double-click an edge to fit the text."}),Ca.map(k=>c.jsxs("div",{className:"edm-group-summary",children:[c.jsx("strong",{children:k.label}),k.values.map(({value:Z,count:ue})=>c.jsxs("span",{children:[Z,c.jsx("i",{children:ue})]},Z))]},k.field)),c.jsx("div",{className:"edm-table-wrap",children:c.jsxs("table",{ref:Ie,className:"edm-table",style:{width:U,minWidth:U},children:[c.jsx("colgroup",{children:aa.map(k=>c.jsx("col",{style:{width:Rt(k)}},k))}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsxs("th",{className:"edm-rownum",children:[c.jsx("div",{className:"edm-column-heading",children:c.jsx("span",{className:"edm-column-heading-label",children:"#"})}),Wt("rowNumber","row number")]}),c.jsxs("th",{children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsx("span",{className:"edm-column-heading-label",children:"Object type"}),c.jsx(ly,{label:"Object type",options:Da.type,selectedValues:Te.type,onApply:k=>ka("type",k)})]}),Wt("type","Object type")]}),wt.map(k=>c.jsxs("th",{draggable:!0,onDragStart:Z=>Z.dataTransfer.setData("text/engineering-field",k),children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsxs("button",{className:"edm-column-sort",title:Rs[k],onClick:()=>Bn(k),"data-testid":`button-sort-${k}`,children:[kt[k],c.jsx("span",{children:de.field===k?de.direction===1?"↑":"↓":"↕"})]}),c.jsx(ly,{label:kt[k],options:Da[k],selectedValues:Te[k],onApply:Z=>ka(k,Z)})]}),Wt(k,kt[k])]},k))]})}),c.jsxs("tbody",{children:[it.map((k,Z)=>{const ue=b===k.id,Ue=IT(k,u),I=Ue==="current"?"On this drawing":Ue==="another"?"On another drawing":"Available / not placed";return c.jsxs("tr",{className:ue?"selected":"","data-stable-id":k.id,"data-placement-status":Ue,onClick:()=>w(k.id),"data-testid":`row-engineering-${k.id}`,children:[c.jsx("td",{className:"edm-rownum",children:re*Ae+Z+1}),c.jsx("td",{children:c.jsx("span",{className:`edm-type-badge ${k.type.toLowerCase().replace(/\s+/g,"-")}`,children:k.type})}),wt.map(te=>{const ve=mn(k,te);return te==="notes"?c.jsx("td",{className:"edm-notes-cell",children:ue?c.jsx("textarea",{"aria-label":`Notes for ${k.itemTag}`,rows:2,maxLength:2e3,value:ve,onClick:we=>we.stopPropagation(),onChange:we=>mt(k.id,te,we.target.value),"data-testid":`input-cell-${k.id}-${te}`}):c.jsx("span",{title:ve,children:ve||"—"})},te):te==="itemTag"?c.jsxs("td",{className:"mono edm-item-tag-cell",children:[c.jsxs("span",{className:`edm-placement-indicator ${Ue}`,"aria-label":`Placement: ${I}`,title:`Placement: ${I}`,children:[c.jsx("i",{"aria-hidden":"true",children:"●"}),c.jsx("span",{children:I})]}),ue?c.jsx("input",{className:"edm-item-tag-editor","aria-label":`${kt[te]} for ${k.itemTag}`,value:ve,onClick:we=>we.stopPropagation(),onChange:we=>mt(k.id,te,we.target.value),"data-testid":`input-cell-${k.id}-${te}`}):c.jsx("span",{className:`edm-tag-value ${Ue}`,"data-testid":`text-item-tag-${k.id}`,children:ve})]},te):c.jsx("td",{className:te==="stableId"?"mono":"",children:te==="stableId"?c.jsx("span",{className:"edm-stable-id-value",title:ve,"aria-label":`Stable ID ${ve}`,children:ve}):ue&&(te==="reviewStatus"||te==="groupStatus")?c.jsx("select",{"aria-label":`${kt[te]} for ${k.itemTag}`,value:ve,onClick:we=>we.stopPropagation(),onChange:we=>mt(k.id,te,we.target.value),"data-testid":`input-cell-${k.id}-${te}`,children:(te==="reviewStatus"?["Needs review","Reviewed","Manual"]:["","Start","Continue","Branch","Merge","End-of-Group"]).map(we=>c.jsx("option",{value:we,children:we||"Not set"},we))}):ue?c.jsx("input",{"aria-label":`${kt[te]} for ${k.itemTag}`,value:ve,onClick:we=>we.stopPropagation(),onChange:we=>mt(k.id,te,we.target.value),"data-testid":`input-cell-${k.id}-${te}`}):c.jsx("span",{title:ve,children:ve||"—"})},te)})]},k.id)}),!it.length&&c.jsx("tr",{children:c.jsx("td",{colSpan:wt.length+2,children:c.jsx("div",{className:"edm-empty",children:"No records match these filters."})})})]})]})}),c.jsxs("footer",{className:"edm-pagination",children:[c.jsxs("span",{children:["Showing ",c.jsxs("strong",{children:[gt.length?re*Ae+1:0,"–",Math.min((re+1)*Ae,gt.length)]})," of ",c.jsx("strong",{children:gt.length})]}),c.jsxs("label",{children:["Rows ",c.jsx("select",{value:Ae,onChange:k=>{he(Number(k.target.value)),oe(0)},"aria-label":"Rows per page","data-testid":"select-page-size",children:[8,12,24,36].map(k=>c.jsx("option",{value:k,children:k},k))})," per page"]}),c.jsxs("div",{className:"edm-page-controls",children:[c.jsx("button",{disabled:re===0,onClick:()=>ua(re-1),"aria-label":"Previous page","data-testid":"button-page-previous",children:c.jsx(Ey,{size:15})}),c.jsxs("span",{children:["Page ",re+1," of ",Zt]}),c.jsx("button",{disabled:re>=Zt-1,onClick:()=>ua(re+1),"aria-label":"Next page","data-testid":"button-page-next",children:c.jsx(Ju,{size:15})})]})]})]})]}),c.jsxs("aside",{className:"edm-properties panel",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsx("span",{children:"Properties"}),c.jsx("span",{className:"edm-counter",children:Re?"EDIT":""})]}),c.jsxs("details",{className:"edm-field-guide",children:[c.jsx("summary",{children:"What do these fields mean?"}),c.jsx("dl",{children:Un.map(k=>c.jsxs("div",{children:[c.jsx("dt",{children:kt[k]}),c.jsx("dd",{children:Rs[k]})]},k))})]}),Re&&c.jsxs("label",{className:"edm-record-type",children:["Object type",c.jsx("select",{value:Re.type,"aria-label":"Selected record type",disabled:!!r.error,onChange:k=>Mt(y.map(Z=>Z.id===Re.id?{...Z,type:k.target.value}:Z)),children:Jo.map(k=>c.jsx("option",{children:k},k))})]}),Re?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"edm-property-summary",children:[c.jsx("span",{className:"edm-property-icon",children:R2(Re.type)}),c.jsxs("div",{children:[c.jsx("strong",{"data-testid":"text-selected-tag",children:Re.itemTag}),c.jsxs("small",{children:[Re.type," · ",u.revision]})]})]}),(Re.sourcePdfId??u.sourcePdfId)&&c.jsxs(ia,{className:"btn subtle edm-source-locate",href:`/workspace/${a}?pdf=${encodeURIComponent(Re.sourcePdfId??u.sourcePdfId??"")}&page=${encodeURIComponent(String(Re.sourceLocations?.[0]?.pageNumber??Re.sourcePage??"1"))}&record=${encodeURIComponent(Re.id)}#pdf-workflow-title`,"data-testid":"link-selected-source-location",children:[c.jsx(mr,{size:13})," Locate on source PDF",c.jsx("small",{children:Re.sourceLocations?.length?`${Re.sourceLocations.length} OCR location(s) · review required`:`Page ${Re.sourcePage||"1"} · no exact position saved`})]}),c.jsxs("div",{className:"edm-stable-id-panel",children:[c.jsx("span",{children:"STABLE ID"}),c.jsx("code",{"data-testid":"text-stable-id",children:Re.id}),c.jsx("small",{children:"Permanent record identity. It does not change with the tag or drawing."})]}),c.jsxs("div",{className:"edm-property-scroll",children:[c.jsx("div",{className:"edm-property-group",children:"IDENTIFICATION"}),["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef"].map(k=>c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Rs[k],children:kt[k]}),c.jsx("input",{value:Re[k],onChange:Z=>mt(Re.id,k,Z.target.value),"data-testid":`property-${k}`})]},k)),c.jsx("div",{className:"edm-property-group",children:"CAD PLACEMENT"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Rs.placementDrawingRef,children:kt.placementDrawingRef}),c.jsx("input",{list:"edm-placement-drawings",value:Re.placementDrawingRef,onChange:k=>mt(Re.id,"placementDrawingRef",k.target.value),"data-testid":"property-placementDrawingRef",placeholder:"Blank = available / not placed"}),c.jsx("small",{children:"Reference only. This browser is not connected to CAD geometry."})]}),c.jsx("datalist",{id:"edm-placement-drawings",children:o.map(k=>c.jsx("option",{value:k.name},k.id))}),c.jsx("div",{className:"edm-property-group",children:Re.type==="Pipe Run"?"PIPE RUN & PROCESS":"PROCESS & CONNECTION"}),(Re.type==="Pipe Run"?["nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description"]:["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","opcDrawing","connection","description"]).map(k=>{const Z=k;return c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Rs[Z],children:kt[Z]}),Z==="groupStatus"?c.jsx("select",{value:Re.groupStatus,onChange:ue=>mt(Re.id,"groupStatus",ue.target.value),"aria-label":"Pipe run group status",children:["","Start","Continue","Branch","Merge","End-of-Group"].map(ue=>c.jsx("option",{value:ue,children:ue||"Not set"},ue))}):c.jsx("input",{value:Re[Z],onChange:ue=>mt(Re.id,Z,ue.target.value),"data-testid":`property-${Z}`})]},Z)}),c.jsx("div",{className:"edm-property-group",children:"NOTES"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Rs.notes,children:kt.notes}),c.jsx("textarea",{rows:5,maxLength:2e3,value:Re.notes,onChange:k=>mt(Re.id,"notes",k.target.value),"data-testid":"property-notes"})]})]}),c.jsxs("div",{className:"edm-save-state",role:"status","data-testid":"status-local-save",children:[c.jsx("span",{})," Edits save automatically in this browser"]})]}):c.jsx("div",{className:"edm-empty",children:"Select a graphic or table row to inspect properties."})]})]}),c.jsxs("footer",{className:"edm-footnote",children:[c.jsx("span",{children:"© 2026 gaurav.cbiindia · DEVICE-LOCAL DATA"}),c.jsxs("span",{children:[y.length," records · ",u.name," · ",a.toUpperCase(),"-isolated browser storage"]})]}),Le&&c.jsx("div",{className:"edm-storage-error",role:"alert","data-testid":"status-storage-error",children:Le})]})}function j2({assetId:a,candidateId:r,blockName:o,entityType:l,description:i,disabled:p,onDescriptionChange:g}){const[h,m]=q.useState(null),[u,y]=q.useState("");q.useEffect(()=>{let w=!0;return m(null),y(""),cb(a).then(S=>{w&&m(S)},S=>{w&&y(S instanceof Error?S.message:"Preview could not be read.")}),()=>{w=!1}},[a]);const b=l==="directionArrow"?[]:(h?.nearbyLabels??[]).filter(w=>!dp(w));return c.jsxs("section",{className:"cad-block-review-visual","aria-label":`Identify block ${o}`,"data-testid":`preview-block-${r}`,children:[c.jsxs("div",{className:"cad-block-review-image",children:[h?.previewSvg?c.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(h.previewSvg)}`,alt:`DXF geometry preview of block ${o}`,"data-testid":`img-block-${r}`}):c.jsxs("div",{className:"cad-block-preview-empty",role:"status",children:[c.jsx("strong",{children:u?"Preview could not load":h?"Overview DXF needed":"Loading local preview…"}),c.jsx("span",{children:u||(h?"Run PIDEXPORTOVERVIEW on the original SOURCE drawing. Add its *_OVERVIEW.dxf to the existing extraction ZIP and import again. Do not repeat the full block extraction.":"")})]}),c.jsx("small",{children:"Visual aid only—not a fidelity check. Fonts, hatches, masks and some CAD entities may be simplified or absent."})]}),c.jsxs("div",{className:"cad-block-review-labels",children:[c.jsx("strong",{children:l==="directionArrow"?"Direction Arrow":"Nearby legend text"}),c.jsx("small",{children:l==="directionArrow"?"Kept as its own P&ID entity; no equipment, instrument, or component name is inferred from nearby text.":"Suggested by position, not confirmed identity. Multiple parts may share one assembly description."}),b.length?c.jsx("div",{className:"cad-block-label-choices",children:b.map((w,S)=>c.jsx("button",{type:"button",className:"btn subtle",disabled:p,onClick:()=>g(w),"data-testid":`button-use-label-${r}-${S}`,children:w},`${w}-${S}`))}):c.jsx("p",{"data-testid":`status-no-label-${r}`,children:l==="directionArrow"?h?.sourcePlacements?.length?`Source insert context retained: ${h.sourcePlacements.map(w=>`${w.layer}, ${w.rotationDegrees}° (${w.count})`).join("; ")}.`:"Source rotation and layer context will be used if an overview DXF is available.":h?.labelMatchAmbiguous?"Ambiguous: this block is used beside different legend labels. No item name is suggested; verify it from the source.":h?.labelMatchSkipped?"Skipped: this insert is on layer 0 or a primary process-pipe layer, so its nearby label is not used as an item mapping.":h?.previewSvg?"No nearby label found. Verify the source drawing and enter the description below.":"Label suggestions appear after an overview DXF is imported."}),c.jsxs("label",{children:[c.jsx("span",{children:"Confirmed item description"}),c.jsx("input",{value:i,onChange:w=>g(w.target.value),placeholder:"Verify the source, then enter the real item name",disabled:p,"data-testid":`input-item-description-${r}`})]}),c.jsx("small",{children:"Saved only when you approve this record. A label does not automatically choose a category or CAD layer."})]})]})}const Ib={titleBlock:"Title block",layer:"Layer",textStyle:"Text style",linetype:"Linetype",dimensionStyle:"Dimension style",symbol:"Symbol",directionArrow:"Direction Arrow",legend:"Legend"};function Mo(a){return Ib[a]??"CAD standard"}function L2(a,r){if(a.proposedScope==="project"&&a.projectId){const o=[...new Set(r.filter(l=>l.proposedScope==="project"&&l.projectId).map(l=>l.projectId))].sort();return`Project ${String(o.indexOf(a.projectId)+1).padStart(2,"0")}`}if(a.proposedScope==="company"){const o=[...new Set(r.filter(l=>l.proposedScope==="company").map(l=>l.sourceGroup))].sort();return`Legends Library source ${String(o.indexOf(a.sourceGroup)+1).padStart(2,"0")}`}return"Unclassified source"}function uy(a,r){return`Project ${String(r.indexOf(a)+1).padStart(2,"0")}`}function hn(a,r){return a.find(o=>o.label===r)?.value.trim()??""}function py({value:a,disabled:r,onChange:o}){let l=null,i="";try{l=Br(a)}catch(C){i=C instanceof Error?C.message:"Enter a valid X,Y outline."}const p=l?.map(([C])=>C)??[],g=l?.map(([,C])=>C)??[],h=Math.min(...p),m=Math.max(...p),u=Math.min(...g),y=Math.max(...g),b=m-h||1,w=y-u||1,S=9,j=l?.map(([C,D])=>`${S+(C-h)/b*(160-S*2)},${90-S-(D-u)/w*(90-S*2)}`).join(" ");return c.jsxs("label",{className:"candidate-fallback-category valve-mask-editor",children:[c.jsxs("span",{children:["Valve-body Wipeout outline ",c.jsx("small",{children:"Reviewed block-local X,Y points; do not include pipe tails. Separate points with semicolons."})]}),c.jsx("textarea",{value:a,onChange:C=>o(C.target.value),placeholder:"x,y; x,y; x,y; …","aria-label":"Valve-body Wipeout outline points",rows:3,disabled:r}),c.jsx("small",{className:"candidate-layer-help",children:"Enter vertices in order using the valve block’s local drawing units. The small preview shows only the mask contour, not the source CAD block."}),l&&j?c.jsx("svg",{className:"valve-mask-preview",viewBox:"0 0 160 90",role:"img","aria-label":"Preview of the saved valve mask outline",children:c.jsx("polygon",{points:j})}):c.jsx("small",{className:"candidate-layer-help",children:i}),c.jsx("small",{className:"candidate-layer-help",children:"The runner masks only inside this polygon, leaves the underlying Pipe Run continuous, and draws the valve block on top."})]})}function hr(a,r){const o=hn(a.item.fields,"Source discipline");if(o!=="PFD"&&o!=="P&ID"&&o!=="Shared")return[];const g=[...(a.proposedScope==="company"?"company":"project")==="project"&&a.projectId?r.projects[a.projectId]?.items??[]:[],...r.companyItems].filter(h=>{if(h.category!=="layer"||h.sourceKind!=="extracted-dwg"||h.reviewStatus!=="reviewed")return!1;const m=hn(h.fields,"Source discipline");return o==="Shared"?m==="Shared":m==="Shared"||m===o}).map(h=>hn(h.fields,"CAD name")).filter(h=>h&&h.toUpperCase()!=="0");return[...new Set(g)].sort((h,m)=>h.localeCompare(m))}function O2({library:a,reviewCandidates:r,onApproveCompany:o,onApproveProject:l,onDismiss:i,onUpdateReviewedItem:p,onSetCompanyDefault:g,onSetProjectDefault:h,storageNotice:m="",readOnly:u=!1,reviewOnly:y=!1,backHref:b="/"}){const[w,S]=q.useState("company"),[j,C]=q.useState(""),[D,E]=q.useState("all"),[A,N]=q.useState(""),[B,x]=q.useState(0),[R,L]=q.useState(""),[P,H]=q.useState({}),[fe,re]=q.useState({}),[oe,Ae]=q.useState({}),[he,de]=q.useState({}),[Y,Q]=q.useState({}),[be,Te]=q.useState({}),_=20,J=q.useMemo(()=>Object.keys(a.projects).sort(),[a.projects]),$=J.includes(A)?A:J[0]??"",G=r.filter(F=>F.status==="needs-review"),le=r.filter(F=>F.status==="approved").length,ge=r.filter(F=>F.status==="dismissed").length,Ee=F=>be[F.id]??F.item.category,Me=(F,ce)=>{const Ce=Ee(F),me=F.item.sourceKind==="extracted-dwg"&&!!F.item.fields.find(ye=>ye.label==="Block asset ID")?.value.trim(),Le=(P[F.id]??F.item.fields.find(ye=>ye.label==="Fallback category")?.value??"").trim(),Qe=fe[F.id]??F.item.fields.find(ye=>ye.label==="Target CAD layer")?.value??"";if(Ce==="symbol"&&me&&!Le){L("Enter the real equipment category (such as pump or valve) before approving an extracted block.");return}if(Ce==="symbol"&&me&&!hr(F,a).includes(Qe)){L(hr(F,a).length?"Choose an approved non-zero CAD layer for this block before approving it.":"Approve a matching Equipment, Instrument, or other placement layer first. Layer 0 cannot be used for block placement.");return}const Xe=oe[F.id]??F.item.fields.find(ye=>ye.label==="Wipeout mask boundary")?.value??"";if(Ce==="symbol"&&Le.toLowerCase()==="valve")try{Br(Xe)}catch(ye){L(ye instanceof Error?ye.message:"Enter and review a valve-body Wipeout outline before approval.");return}L("");const qe=me?Ce==="directionArrow"?[{label:"Entity type",value:"Direction Arrow"},{label:"Item description",value:Y[F.id]||"Direction Arrow"}]:[{label:"Fallback category",value:Le},{label:"Target CAD layer",value:Qe},{label:"Item description",value:Y[F.id]??hn(F.item.fields,"Item description")},...Le.toLowerCase()==="valve"?[{label:"Wipeout mask boundary",value:Xe}]:[]]:void 0;(ce==="company"?o:l)(F.id,qe,me?Ce:void 0)&&L(ce==="company"?"Approved and added to the Legends Library.":"Approved and added to the project library.")},Ie=F=>{i(F)&&L("Record dismissed from the review queue.")},Et=(F,ce)=>{const Ce=he[F]??ce.find(me=>me.label==="Wipeout mask boundary")?.value??"";try{Br(Ce)}catch(me){L(me instanceof Error?me.message:"Enter a valid valve-body mask outline.");return}p(F,[{label:"Wipeout mask boundary",value:Ce}])&&L("Reviewed valve-body mask saved to the Legends Library.")},pt=q.useMemo(()=>{const F=j.trim().toLowerCase();return G.filter(ce=>{const Ce=Ee(ce),me=D==="all"||Ce===D,Le=ce.item.fields.some(Qe=>`${Qe.label} ${Qe.value}`.toLowerCase().includes(F));return me&&(!F||Le||Mo(Ce).toLowerCase().includes(F))})},[G,j,D,be]),ht=Math.max(1,Math.ceil(pt.length/_)),wt=Math.min(B,ht-1),aa=pt.slice(wt*_,(wt+1)*_);q.useEffect(()=>x(0),[j,D]);const U=(w==="company"?a.companyItems:a.projects[$]?.items??[]).filter(F=>{const ce=j.trim().toLowerCase(),Ce=D==="all"||F.category===D,me=F.fields.some(Le=>`${Le.label} ${Le.value}`.toLowerCase().includes(ce));return Ce&&(!ce||me||Mo(F.category).toLowerCase().includes(ce))}),ie=(F,ce)=>{if(!$r.includes(ce))return;const Ce=ce,me=a.companyItems.some(Le=>Le.category==="titleBlock"&&Le.reviewStatus==="reviewed"&&(Le.sheetSize===Ce||Le.fields.some(Qe=>Qe.label==="Sheet size"&&Qe.value===Ce)));if(Ce!==a.companyDefaults[F]&&!me){L(`Approve a company title-block mapping for ${Ce} before changing this default.`);return}L(""),g(F,Ce)},pe=(F,ce,Ce)=>{if(!$r.includes(Ce))return;const me=Ce;if(![...a.projects[F]?.items??[],...a.companyItems].some(Xe=>Xe.category==="titleBlock"&&Xe.reviewStatus==="reviewed"&&(Xe.sheetSize===me||Xe.fields.some(qe=>qe.label==="Sheet size"&&qe.value===me)))){L(`Approve a title-block mapping for ${me} before saving this project default.`);return}L(""),h(F,ce,me)};return c.jsxs("main",{className:`standards-page${y?" standards-review-only":""}`,children:[c.jsxs("header",{className:"standards-topbar",children:[c.jsxs(ia,{href:y?b:"/",className:"standards-brand","data-testid":"link-standards-home",children:[c.jsx("span",{className:"standards-mark",children:"PM"}),c.jsxs("span",{children:["Mapping Studio",c.jsx("small",{children:y?"Legends Library / review":"Drafting standards / browser-local"})]})]}),c.jsxs("div",{className:"standards-top-meta",children:[c.jsxs("span",{className:"standards-local",children:[c.jsx("i",{}),u?"Read only · storage issue":"Browser-local"]}),c.jsx("span",{className:"standards-version",children:"LIBRARY · 1.0"})]})]}),c.jsxs("div",{className:"standards-content",children:[c.jsxs("section",{className:"standards-intro",children:[c.jsxs("div",{children:[y&&c.jsxs(ia,{className:"standards-return",href:b,children:["← Back to ",b.endsWith("/pfd")?"PFD":"P&ID"," workspace"]}),c.jsxs("div",{className:"standards-eyebrow",children:[y?"Legends Library":"Standards library"," ",c.jsx("span",{children:"/"})," human review"]}),c.jsx("h1",{children:y?"Review extracted standards":"Drafting standards"}),c.jsx("p",{children:y?"Check extracted blocks, layers, text styles, and line types. Nothing becomes part of the Legends Library until you approve it.":"Inspect source-derived CAD values before they become defaults. Project choices stay separate from the Legends Library."})]}),c.jsxs("div",{className:"standards-local-seal",children:[c.jsx(yr,{size:15}),c.jsxs("span",{children:["LOCAL ONLY",c.jsx("small",{children:"Nothing is uploaded or shared"})]})]})]}),c.jsxs("div",{className:"standards-trust-note",children:[c.jsx(Du,{size:16}),c.jsxs("span",{children:[c.jsx("strong",{children:"Review before use."})," ",y?"Each extracted record remains pending until you approve it to the Legends Library or dismiss it. Source filenames are hidden.":"Source-derived values remain unapproved until you choose a scope. Company/client identifiers and source file names are hidden here."]}),c.jsxs("span",{className:"standards-schema",children:["SCHEMA ",a.schemaVersion]})]}),m&&c.jsx("div",{className:"standards-storage-banner",role:"alert",children:m}),c.jsxs("section",{className:"standards-metrics","aria-label":"Review summary",children:[c.jsxs("div",{className:"standards-metric metric-pending",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(br,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Awaiting review"}),c.jsx("strong",{children:G.length.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"SOURCE MAPPINGS"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(em,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Approved from queue"}),c.jsx("strong",{children:le.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"HUMAN CONFIRMED"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(by,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Dismissed"}),c.jsx("strong",{children:ge.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"NOT IN LIBRARY"})]})]}),c.jsxs("div",{className:"standards-layout",children:[c.jsxs("section",{className:"standards-review panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"INBOX / SOURCE-DERIVED"}),c.jsxs("h2",{children:[c.jsx(AE,{size:17}),"Review queue"]})]}),c.jsxs("span",{className:"standards-count",children:[G.length," pending"]})]}),c.jsxs("div",{className:"standards-controls",children:[c.jsxs("label",{className:"standards-search",children:[c.jsx(Ko,{size:14}),c.jsx("input",{value:j,onChange:F=>C(F.target.value),placeholder:"Search CAD field values…","aria-label":"Search standards","data-testid":"input-standards-search"})]}),c.jsxs("label",{className:"standards-filter",children:[c.jsx(Cu,{size:13}),c.jsxs("select",{"aria-label":"Filter by category",value:D,onChange:F=>E(F.target.value),"data-testid":"select-standards-category",children:[c.jsx("option",{value:"all",children:"All categories"}),Object.entries(Ib).map(([F,ce])=>c.jsx("option",{value:F,children:ce},F))]}),c.jsx(gr,{size:13})]})]}),R&&c.jsx("div",{className:"standards-action-note",role:"status",children:R}),c.jsxs("div",{className:"standards-candidate-list",children:[aa.map(F=>{const ce=Ee(F),Ce=F.item.sourceKind==="extracted-dwg"&&!!hn(F.item.fields,"Block asset ID");return c.jsxs("article",{className:"candidate-card","data-testid":`candidate-${F.id}`,children:[c.jsxs("div",{className:"candidate-top",children:[c.jsxs("div",{className:"candidate-category",children:[c.jsx("span",{className:"candidate-glyph",children:c.jsx($o,{size:15})}),c.jsxs("span",{children:[c.jsx("strong",{children:Mo(ce)}),c.jsxs("small",{children:[L2(F,r)," · ",F.proposedScope==="project"?"Project proposal":F.proposedScope==="company"?"Pending review":"Scope not classified"]})]})]}),c.jsxs("span",{className:"candidate-status",children:[c.jsx("i",{}),"Needs review"]})]}),Ce&&c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsx("span",{children:"Review entity as"}),c.jsxs("select",{value:ce==="directionArrow"?"directionArrow":"symbol",onChange:me=>{L(""),Te(Le=>({...Le,[F.id]:me.target.value}))},"aria-label":`Review entity type for ${F.item.name}`,disabled:u,"data-testid":`select-entity-role-${F.id}`,children:[c.jsx("option",{value:"symbol",children:"Equipment / instrument / component symbol"}),c.jsx("option",{value:"directionArrow",children:"Direction Arrow"})]}),ce==="directionArrow"&&c.jsx("small",{children:"Kept separate from equipment matching. Source insert layers and rotations are retained for later pipe alignment."})]}),(ce==="symbol"||ce==="directionArrow")&&F.item.sourceKind==="extracted-dwg"&&hn(F.item.fields,"Block asset ID")&&c.jsx(j2,{assetId:hn(F.item.fields,"Block asset ID"),candidateId:F.id,blockName:hn(F.item.fields,"Block name"),entityType:ce,description:Y[F.id]??(ce==="directionArrow"?"Direction Arrow":hn(F.item.fields,"Item description")),disabled:u,onDescriptionChange:me=>Q(Le=>({...Le,[F.id]:me}))}),c.jsx("div",{className:"candidate-fields","aria-label":`${Mo(ce)} CAD standard values`,children:F.item.fields.filter(me=>ce!=="directionArrow"||!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(me.label)).map((me,Le)=>c.jsxs("div",{className:"candidate-field",children:[c.jsx("span",{children:me.label}),c.jsx("strong",{children:me.value||"—"})]},`${me.label}-${Le}`))}),ce==="symbol"&&Ce&&c.jsxs(c.Fragment,{children:[c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Fallback category ",c.jsx("small",{children:"Required for safe same-category substitution"})]}),c.jsx("input",{value:P[F.id]??F.item.fields.find(me=>me.label==="Fallback category")?.value??"",onChange:me=>{L(""),H(Le=>({...Le,[F.id]:me.target.value}))},placeholder:"For example: pump, valve, or instrument","aria-label":`Fallback category for ${F.item.name}`})]}),(P[F.id]??F.item.fields.find(me=>me.label==="Fallback category")?.value??"").trim().toLowerCase()==="valve"&&c.jsx(py,{value:oe[F.id]??F.item.fields.find(me=>me.label==="Wipeout mask boundary")?.value??"",disabled:u,onChange:me=>{L(""),Ae(Le=>({...Le,[F.id]:me}))}}),c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Target CAD layer ",c.jsx("small",{children:"Actual approved layer; layer 0 is not allowed"})]}),c.jsxs("select",{value:fe[F.id]??F.item.fields.find(me=>me.label==="Target CAD layer")?.value??"",onChange:me=>{L(""),re(Le=>({...Le,[F.id]:me.target.value}))},"aria-label":`Target CAD layer for ${F.item.name}`,disabled:u||hr(F,a).length===0,children:[c.jsx("option",{value:"",children:hr(F,a).length?"Select an approved CAD layer…":"Approve a compatible layer first"}),hr(F,a).map(me=>c.jsx("option",{value:me,children:me},me))]}),c.jsx("small",{className:"candidate-layer-help",children:hr(F,a).length?"The AutoCAD runner will put the inserted block reference on this layer.":"Review and approve the matching source layer first. No layer is guessed automatically."}),c.jsx("small",{className:"candidate-layer-help",children:"Stated Legends layers: equipment uses EQUIP or f_EQUIP; instruments use f_Inst. Extract and approve the matching layer before it appears here."})]})]}),c.jsxs("div",{className:"candidate-actions",children:[c.jsx("span",{className:"candidate-scope-note",children:F.proposedScope==="project"?"Approve into isolated project library":F.proposedScope==="company"?"Approve to the Legends Library":"Unclassified source · project-only approval"}),(()=>{const me=ce==="symbol"&&Ce;return F.proposedScope==="company"?c.jsxs("button",{className:"btn primary",onClick:()=>Me(F,"company"),disabled:u,title:me&&hr(F,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-company-${F.id}`,children:[c.jsx(js,{size:14}),"Approve to Legends Library"]}):c.jsxs("button",{className:"btn primary",onClick:()=>Me(F,"project"),disabled:u,title:me&&hr(F,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-project-${F.id}`,children:[c.jsx(js,{size:14}),"Approve to project"]})})(),c.jsx("button",{className:"btn subtle",onClick:()=>Ie(F.id),disabled:u,"data-testid":`button-dismiss-${F.id}`,children:"Dismiss"})]})]},F.id)}),!aa.length&&c.jsxs("div",{className:"standards-empty",children:[c.jsx("span",{className:"empty-seal",children:G.length?c.jsx(Ko,{size:20}):c.jsx(em,{size:20})}),c.jsx("strong",{children:G.length?"No source mappings match":"Review queue is clear"}),c.jsx("p",{children:G.length?"Try another field value or category.":"New source-derived standards will appear here for human review."}),j||D!=="all"?c.jsx("button",{className:"btn subtle",onClick:()=>{C(""),E("all")},children:"Clear filters"}):null]})]}),pt.length>_&&c.jsxs("div",{className:"candidate-pagination",children:[c.jsxs("span",{children:["Showing ",wt*_+1,"–",Math.min((wt+1)*_,pt.length)," of ",pt.length," matching mappings"]}),c.jsxs("div",{children:[c.jsx("button",{className:"btn subtle",onClick:()=>x(F=>Math.max(0,F-1)),disabled:wt===0,children:"Previous"}),c.jsxs("span",{children:["Page ",wt+1," of ",ht]}),c.jsx("button",{className:"btn subtle",onClick:()=>x(F=>Math.min(ht-1,F+1)),disabled:wt>=ht-1,children:"Next"})]})]}),c.jsxs("footer",{className:"standards-list-foot",children:[c.jsx("span",{children:"CAD field values only"}),c.jsx("span",{children:"Source labels anonymized"})]})]}),!y&&c.jsxs("aside",{className:"standards-side",children:[c.jsxs("section",{className:"defaults-panel panel",children:[c.jsx("div",{className:"standards-panel-head",children:c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"ACTIVE CONFIGURATION"}),c.jsxs("h2",{children:[c.jsx(Cu,{size:16}),"Sheet-size defaults"]})]})}),c.jsxs("div",{className:"default-scope-tabs",role:"tablist","aria-label":"Defaults scope",children:[c.jsx("button",{role:"tab","aria-selected":w==="company",className:w==="company"?"selected":"",onClick:()=>S("company"),children:"Company"}),c.jsxs("button",{role:"tab","aria-selected":w==="projects",className:w==="projects"?"selected":"",onClick:()=>S("projects"),children:["Projects ",c.jsx("span",{children:J.length})]})]}),w==="projects"&&c.jsx("div",{className:"project-picker",children:J.length?c.jsxs("label",{children:[c.jsx("span",{children:"PROJECT LIBRARY"}),c.jsxs("div",{children:[c.jsx("select",{value:$,onChange:F=>N(F.target.value),"aria-label":"Select project library",children:J.map(F=>c.jsx("option",{value:F,children:uy(F,J)},F))}),c.jsx(gr,{size:14})]})]}):c.jsxs("div",{className:"project-none",children:[c.jsx("span",{className:"empty-seal",children:c.jsx($o,{size:17})}),c.jsx("strong",{children:"No project overrides yet"}),c.jsx("small",{children:"Project-specific standards will appear here once available."})]})}),c.jsxs("div",{className:"default-table",children:[c.jsxs("div",{className:"default-table-head",children:[c.jsx("span",{children:"DRAWING PURPOSE"}),c.jsx("span",{children:"SIZE"})]}),_u.map(F=>{const ce=w==="projects"&&$?a.projects[$]?.defaults[F]:void 0,Ce=ce??a.companyDefaults[F];return c.jsxs("div",{className:"default-row",children:[c.jsxs("div",{children:[c.jsx("strong",{children:F}),w==="projects"&&c.jsx("small",{children:ce?"Project override":"Inherited company default"})]}),w==="company"?c.jsxs("label",{className:"size-select",children:[c.jsx("select",{"aria-label":`${F} company sheet size`,value:a.companyDefaults[F],onChange:me=>ie(F,me.target.value),disabled:u,children:$r.map(me=>c.jsx("option",{value:me,children:me},me))}),c.jsx(gr,{size:13})]}):$?c.jsxs("label",{className:`size-select ${ce?"override":""}`,children:[c.jsx("select",{"aria-label":`${F} project sheet size`,value:Ce,onChange:me=>pe($,F,me.target.value),disabled:u,children:$r.map(me=>c.jsx("option",{value:me,children:me},me))}),c.jsx(gr,{size:13})]}):c.jsx("span",{className:"default-value",children:"—"})]},F)})]}),c.jsxs("div",{className:"defaults-note",children:[c.jsx(Du,{size:14}),c.jsx("span",{children:"Project selections change only that project. Legends Library defaults remain unchanged."})]})]}),c.jsxs("section",{className:"library-panel panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"APPROVED STANDARDS"}),c.jsxs("h2",{children:[c.jsx($o,{size:16}),w==="company"?"Legends Library":"Project library"]})]}),c.jsx("span",{className:"standards-count",children:U.length})]}),c.jsxs("div",{className:"approved-list",children:[U.map(F=>c.jsxs("article",{className:"approved-item",children:[c.jsxs("div",{className:"approved-item-head",children:[c.jsx("span",{className:"approved-glyph",children:c.jsx(js,{size:13})}),c.jsxs("div",{children:[c.jsx("strong",{children:Mo(F.category)}),c.jsx("small",{children:w==="company"?"Legends Library standard":`${uy($,J)} · project-only`})]})]}),c.jsx("div",{className:"approved-fields",children:F.fields.map((ce,Ce)=>c.jsxs("div",{children:[c.jsx("span",{children:ce.label}),c.jsx("strong",{children:ce.value||"—"})]},`${ce.label}-${Ce}`))}),F.category==="symbol"&&F.sourceKind==="extracted-dwg"&&hn(F.fields,"Fallback category").toLowerCase()==="valve"&&c.jsxs(c.Fragment,{children:[c.jsx(py,{value:he[F.id]??F.fields.find(ce=>ce.label==="Wipeout mask boundary")?.value??"",disabled:u,onChange:ce=>{L(""),de(Ce=>({...Ce,[F.id]:ce}))}}),c.jsx("div",{className:"approved-mask-actions",children:c.jsxs("button",{type:"button",className:"btn primary",disabled:u,onClick:()=>Et(F.id,F.fields),"data-testid":`button-save-valve-mask-${F.id}`,children:[c.jsx(js,{size:13}),"Save reviewed outline"]})})]})]},F.id)),!U.length&&c.jsxs("div",{className:"approved-empty",children:[c.jsx("span",{className:"empty-seal",children:c.jsx($o,{size:18})}),c.jsx("strong",{children:w==="company"?"No approved Legends Library standards":"No standards in this project"}),c.jsx("small",{children:w==="company"?"Review and approve source mappings to build the Legends Library.":"Project-approved standards remain isolated from Legends Library defaults."})]})]}),c.jsxs("footer",{className:"library-foot",children:[c.jsx("span",{children:"Visible values are standards fields"}),c.jsx("span",{children:"Descriptions hidden"})]})]})]})]}),c.jsxs("footer",{className:"standards-page-foot",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:y?"Only approved mappings are offered to the CAD runner":"Legends Library and project standards are reviewed separately"})]})]})]})}function fy({backHref:a}){const[r]=q.useState(()=>{try{return{library:gn(),canSave:!0,error:""}}catch(D){return{library:S1(),canSave:!1,error:D instanceof Error?D.message:"The local standards library could not be loaded."}}}),[o,l]=q.useState(r.library),i=q.useRef(r.library),[p,g]=q.useState(r.canSave),[h,m]=q.useState(r.error),u=D=>{if(!p)return m("The local library could not be read safely. Its saved contents were left unchanged."),!1;let E;try{E=D(i.current)}catch(A){return m(A instanceof Error?A.message:"The standards change could not be applied."),!1}try{return Zo(E),i.current=E,l(E),m(""),!0}catch(A){const N=A instanceof Error?A.message:"The standards change could not be saved locally.";return N.startsWith("This browser could not save the CAD standards locally.")&&g(!1),m(N),!1}},y=(D,E,A)=>u(N=>Oi(N,D,"company",E,A)),b=(D,E,A)=>u(N=>Oi(N,D,"project",E,A)),w=(D,E)=>u(A=>L1(A,D,E)),S=D=>u(E=>O1(E,D)),j=(D,E)=>u(A=>D1(A,D,E)),C=(D,E,A)=>{const N=i.current.projects[D]?.projectName??`Project ${String(Object.keys(i.current.projects).sort().indexOf(D)+1).padStart(2,"0")}`;u(B=>_1(B,D,N,E,A))};return c.jsx(O2,{library:o,reviewCandidates:o.reviewCandidates,reviewOnly:!0,backHref:a,onApproveCompany:y,onApproveProject:b,onUpdateReviewedItem:w,onDismiss:S,onSetCompanyDefault:j,onSetProjectDefault:C,storageNotice:h,readOnly:!p})}const _2="/pid-mapping-studio-app/".replace(/\/$/,"");function P2(){const[a]=Dy();return a==="/admin/library"||a.startsWith("/sign-in")||a.startsWith("/sign-up")?c.jsx(vw,{to:"/"}):a==="/portal"||a==="/library"||a==="/"?c.jsx(Rx,{}):a==="/workspace/pfd"?c.jsx(sy,{discipline:"pfd"}):a==="/workspace/pid"?c.jsx(sy,{discipline:"pid"}):a==="/workspace/pfd/engineering-data"?c.jsx(dy,{discipline:"pfd"}):a==="/workspace/pid/engineering-data"?c.jsx(dy,{discipline:"pid"}):a==="/standards-review/pfd"?c.jsx(fy,{backHref:"/workspace/pfd"}):a==="/standards-review/pid"?c.jsx(fy,{backHref:"/workspace/pid"}):c.jsx(jx,{})}function q2(){return c.jsx(bw,{base:_2,children:c.jsx(kx,{children:c.jsx(P2,{})})})}Qu.createRoot(document.getElementById("root"),{onCaughtError:(a,r)=>{console.error(a,r.componentStack)}}).render(c.jsx(q2,{}));export{nn as _,I2 as a,lb as c,tl as g,op as v,$2 as w};
