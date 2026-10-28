const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-DB8jjnUE.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/exceljs.min-DbJi6lJ7.js"])))=>i.map(i=>d[i]);
function Hl(a,r){for(var s=0;s<r.length;s++){const i=r[s];if(typeof i!="string"&&!Array.isArray(i)){for(const l in i)if(l!=="default"&&!(l in a)){const u=Object.getOwnPropertyDescriptor(i,l);u&&Object.defineProperty(a,l,u.get?u:{enumerable:!0,get:()=>i[l]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const g of u.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&i(g)}).observe(document,{childList:!0,subtree:!0});function s(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(l){if(l.ep)return;l.ep=!0;const u=s(l);fetch(l.href,u)}})();var TA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ci(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function Fy(a){if(Object.prototype.hasOwnProperty.call(a,"__esModule"))return a;var r=a.default;if(typeof r=="function"){var s=function i(){var l=!1;try{l=this instanceof i}catch{}return l?Reflect.construct(r,arguments,this.constructor):r.apply(this,arguments)};s.prototype=r.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(a).forEach(function(i){var l=Object.getOwnPropertyDescriptor(a,i);Object.defineProperty(s,i,l.get?l:{enumerable:!0,get:function(){return a[i]}})}),s}var cu={exports:{}},qo={};var cm;function vw(){if(cm)return qo;cm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function s(i,l,u){var g=null;if(u!==void 0&&(g=""+u),l.key!==void 0&&(g=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:a,type:i,key:g,ref:l!==void 0?l:null,props:u}}return qo.Fragment=r,qo.jsx=s,qo.jsxs=s,qo}var dm;function ww(){return dm||(dm=1,cu.exports=vw()),cu.exports}var c=ww();const Ew=ci(c),xw=Hl({__proto__:null,default:Ew},[c]);var du={exports:{}},Mo={},uu={exports:{}},fu={};var um;function Sw(){return um||(um=1,(function(a){function r(z,Z){var me=z.length;z.push(Z);e:for(;0<me;){var Se=me-1>>>1,P=z[Se];if(0<l(P,Z))z[Se]=Z,z[me]=P,me=Se;else break e}}function s(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var Z=z[0],me=z.pop();if(me!==Z){z[0]=me;e:for(var Se=0,P=z.length,J=P>>>1;Se<J;){var U=2*(Se+1)-1,V=z[U],oe=U+1,de=z[oe];if(0>l(V,me))oe<P&&0>l(de,V)?(z[Se]=de,z[oe]=me,Se=oe):(z[Se]=V,z[U]=me,Se=U);else if(oe<P&&0>l(de,me))z[Se]=de,z[oe]=me,Se=oe;else break e}}return Z}function l(z,Z){var me=z.sortIndex-Z.sortIndex;return me!==0?me:z.id-Z.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;a.unstable_now=function(){return u.now()}}else{var g=Date,p=g.now();a.unstable_now=function(){return g.now()-p}}var m=[],f=[],y=1,b=null,v=3,E=!1,R=!1,C=!1,D=!1,S=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;function O(z){for(var Z=s(f);Z!==null;){if(Z.callback===null)i(f);else if(Z.startTime<=z)i(f),Z.sortIndex=Z.expirationTime,r(m,Z);else break;Z=s(f)}}function x(z){if(C=!1,O(z),!R)if(s(m)!==null)R=!0,_||(_=!0,se());else{var Z=s(f);Z!==null&&ce(x,Z.startTime-z)}}var _=!1,k=-1,L=5,H=-1;function ee(){return D?!0:!(a.unstable_now()-H<L)}function te(){if(D=!1,_){var z=a.unstable_now();H=z;var Z=!0;try{e:{R=!1,C&&(C=!1,N(k),k=-1),E=!0;var me=v;try{t:{for(O(z),b=s(m);b!==null&&!(b.expirationTime>z&&ee());){var Se=b.callback;if(typeof Se=="function"){b.callback=null,v=b.priorityLevel;var P=Se(b.expirationTime<=z);if(z=a.unstable_now(),typeof P=="function"){b.callback=P,O(z),Z=!0;break t}b===s(m)&&i(m),O(z)}else i(m);b=s(m)}if(b!==null)Z=!0;else{var J=s(f);J!==null&&ce(x,J.startTime-z),Z=!1}}break e}finally{b=null,v=me,E=!1}Z=void 0}}finally{Z?se():_=!1}}}var se;if(typeof T=="function")se=function(){T(te)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,fe=Te.port2;Te.port1.onmessage=te,se=function(){fe.postMessage(null)}}else se=function(){S(te,0)};function ce(z,Z){k=S(function(){z(a.unstable_now())},Z)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return v},a.unstable_next=function(z){switch(v){case 1:case 2:case 3:var Z=3;break;default:Z=v}var me=v;v=Z;try{return z()}finally{v=me}},a.unstable_requestPaint=function(){D=!0},a.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var me=v;v=z;try{return Z()}finally{v=me}},a.unstable_scheduleCallback=function(z,Z,me){var Se=a.unstable_now();switch(typeof me=="object"&&me!==null?(me=me.delay,me=typeof me=="number"&&0<me?Se+me:Se):me=Se,z){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=me+P,z={id:y++,callback:Z,priorityLevel:z,startTime:me,expirationTime:P,sortIndex:-1},me>Se?(z.sortIndex=me,r(f,z),s(m)===null&&z===s(f)&&(C?(N(k),k=-1):C=!0,ce(x,me-Se))):(z.sortIndex=P,r(m,z),R||E||(R=!0,_||(_=!0,se()))),z},a.unstable_shouldYield=ee,a.unstable_wrapCallback=function(z){var Z=v;return function(){var me=v;v=Z;try{return z.apply(this,arguments)}finally{v=me}}}})(fu)),fu}var fm;function Tw(){return fm||(fm=1,uu.exports=Sw()),uu.exports}var pu={exports:{}},$e={};var pm;function Aw(){if(pm)return $e;pm=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),g=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.iterator;function v(P){return P===null||typeof P!="object"?null:(P=b&&P[b]||P["@@iterator"],typeof P=="function"?P:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,C={};function D(P,J,U){this.props=P,this.context=J,this.refs=C,this.updater=U||E}D.prototype.isReactComponent={},D.prototype.setState=function(P,J){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,J,"setState")},D.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function S(){}S.prototype=D.prototype;function N(P,J,U){this.props=P,this.context=J,this.refs=C,this.updater=U||E}var T=N.prototype=new S;T.constructor=N,R(T,D.prototype),T.isPureReactComponent=!0;var O=Array.isArray,x={H:null,A:null,T:null,S:null,V:null},_=Object.prototype.hasOwnProperty;function k(P,J,U,V,oe,de){return U=de.ref,{$$typeof:a,type:P,key:J,ref:U!==void 0?U:null,props:de}}function L(P,J){return k(P.type,J,void 0,void 0,void 0,P.props)}function H(P){return typeof P=="object"&&P!==null&&P.$$typeof===a}function ee(P){var J={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(U){return J[U]})}var te=/\/+/g;function se(P,J){return typeof P=="object"&&P!==null&&P.key!=null?ee(""+P.key):J.toString(36)}function Te(){}function fe(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(Te,Te):(P.status="pending",P.then(function(J){P.status==="pending"&&(P.status="fulfilled",P.value=J)},function(J){P.status==="pending"&&(P.status="rejected",P.reason=J)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function ce(P,J,U,V,oe){var de=typeof P;(de==="undefined"||de==="boolean")&&(P=null);var ve=!1;if(P===null)ve=!0;else switch(de){case"bigint":case"string":case"number":ve=!0;break;case"object":switch(P.$$typeof){case a:case r:ve=!0;break;case y:return ve=P._init,ce(ve(P._payload),J,U,V,oe)}}if(ve)return oe=oe(P),ve=V===""?"."+se(P,0):V,O(oe)?(U="",ve!=null&&(U=ve.replace(te,"$&/")+"/"),ce(oe,J,U,"",function(gt){return gt})):oe!=null&&(H(oe)&&(oe=L(oe,U+(oe.key==null||P&&P.key===oe.key?"":(""+oe.key).replace(te,"$&/")+"/")+ve)),J.push(oe)),1;ve=0;var qe=V===""?".":V+":";if(O(P))for(var Le=0;Le<P.length;Le++)V=P[Le],de=qe+se(V,Le),ve+=ce(V,J,U,de,oe);else if(Le=v(P),typeof Le=="function")for(P=Le.call(P),Le=0;!(V=P.next()).done;)V=V.value,de=qe+se(V,Le++),ve+=ce(V,J,U,de,oe);else if(de==="object"){if(typeof P.then=="function")return ce(fe(P),J,U,V,oe);throw J=String(P),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ve}function z(P,J,U){if(P==null)return P;var V=[],oe=0;return ce(P,V,"","",function(de){return J.call(U,de,oe++)}),V}function Z(P){if(P._status===-1){var J=P._result;J=J(),J.then(function(U){(P._status===0||P._status===-1)&&(P._status=1,P._result=U)},function(U){(P._status===0||P._status===-1)&&(P._status=2,P._result=U)}),P._status===-1&&(P._status=0,P._result=J)}if(P._status===1)return P._result.default;throw P._result}var me=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Se(){}return $e.Children={map:z,forEach:function(P,J,U){z(P,function(){J.apply(this,arguments)},U)},count:function(P){var J=0;return z(P,function(){J++}),J},toArray:function(P){return z(P,function(J){return J})||[]},only:function(P){if(!H(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},$e.Component=D,$e.Fragment=s,$e.Profiler=l,$e.PureComponent=N,$e.StrictMode=i,$e.Suspense=m,$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,$e.__COMPILER_RUNTIME={__proto__:null,c:function(P){return x.H.useMemoCache(P)}},$e.cache=function(P){return function(){return P.apply(null,arguments)}},$e.cloneElement=function(P,J,U){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var V=R({},P.props),oe=P.key,de=void 0;if(J!=null)for(ve in J.ref!==void 0&&(de=void 0),J.key!==void 0&&(oe=""+J.key),J)!_.call(J,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&J.ref===void 0||(V[ve]=J[ve]);var ve=arguments.length-2;if(ve===1)V.children=U;else if(1<ve){for(var qe=Array(ve),Le=0;Le<ve;Le++)qe[Le]=arguments[Le+2];V.children=qe}return k(P.type,oe,void 0,void 0,de,V)},$e.createContext=function(P){return P={$$typeof:g,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:u,_context:P},P},$e.createElement=function(P,J,U){var V,oe={},de=null;if(J!=null)for(V in J.key!==void 0&&(de=""+J.key),J)_.call(J,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(oe[V]=J[V]);var ve=arguments.length-2;if(ve===1)oe.children=U;else if(1<ve){for(var qe=Array(ve),Le=0;Le<ve;Le++)qe[Le]=arguments[Le+2];oe.children=qe}if(P&&P.defaultProps)for(V in ve=P.defaultProps,ve)oe[V]===void 0&&(oe[V]=ve[V]);return k(P,de,void 0,void 0,null,oe)},$e.createRef=function(){return{current:null}},$e.forwardRef=function(P){return{$$typeof:p,render:P}},$e.isValidElement=H,$e.lazy=function(P){return{$$typeof:y,_payload:{_status:-1,_result:P},_init:Z}},$e.memo=function(P,J){return{$$typeof:f,type:P,compare:J===void 0?null:J}},$e.startTransition=function(P){var J=x.T,U={};x.T=U;try{var V=P(),oe=x.S;oe!==null&&oe(U,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(Se,me)}catch(de){me(de)}finally{x.T=J}},$e.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},$e.use=function(P){return x.H.use(P)},$e.useActionState=function(P,J,U){return x.H.useActionState(P,J,U)},$e.useCallback=function(P,J){return x.H.useCallback(P,J)},$e.useContext=function(P){return x.H.useContext(P)},$e.useDebugValue=function(){},$e.useDeferredValue=function(P,J){return x.H.useDeferredValue(P,J)},$e.useEffect=function(P,J,U){var V=x.H;if(typeof U=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return V.useEffect(P,J)},$e.useId=function(){return x.H.useId()},$e.useImperativeHandle=function(P,J,U){return x.H.useImperativeHandle(P,J,U)},$e.useInsertionEffect=function(P,J){return x.H.useInsertionEffect(P,J)},$e.useLayoutEffect=function(P,J){return x.H.useLayoutEffect(P,J)},$e.useMemo=function(P,J){return x.H.useMemo(P,J)},$e.useOptimistic=function(P,J){return x.H.useOptimistic(P,J)},$e.useReducer=function(P,J,U){return x.H.useReducer(P,J,U)},$e.useRef=function(P){return x.H.useRef(P)},$e.useState=function(P){return x.H.useState(P)},$e.useSyncExternalStore=function(P,J,U){return x.H.useSyncExternalStore(P,J,U)},$e.useTransition=function(){return x.H.useTransition()},$e.version="19.1.4",$e}var hm;function Vl(){return hm||(hm=1,pu.exports=Aw()),pu.exports}var hu={exports:{}},ma={};var gm;function Dw(){if(gm)return ma;gm=1;var a=Vl();function r(m){var f="https://react.dev/errors/"+m;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)f+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var i={d:{f:s,r:function(){throw Error(r(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,f,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:m,containerInfo:f,implementation:y}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,f){if(m==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return ma.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,ma.createPortal=function(m,f){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(r(299));return u(m,f,null,y)},ma.flushSync=function(m){var f=g.T,y=i.p;try{if(g.T=null,i.p=2,m)return m()}finally{g.T=f,i.p=y,i.d.f()}},ma.preconnect=function(m,f){typeof m=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,i.d.C(m,f))},ma.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},ma.preinit=function(m,f){if(typeof m=="string"&&f&&typeof f.as=="string"){var y=f.as,b=p(y,f.crossOrigin),v=typeof f.integrity=="string"?f.integrity:void 0,E=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;y==="style"?i.d.S(m,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:b,integrity:v,fetchPriority:E}):y==="script"&&i.d.X(m,{crossOrigin:b,integrity:v,fetchPriority:E,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},ma.preinitModule=function(m,f){if(typeof m=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var y=p(f.as,f.crossOrigin);i.d.M(m,{crossOrigin:y,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&i.d.M(m)},ma.preload=function(m,f){if(typeof m=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var y=f.as,b=p(y,f.crossOrigin);i.d.L(m,y,{crossOrigin:b,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},ma.preloadModule=function(m,f){if(typeof m=="string")if(f){var y=p(f.as,f.crossOrigin);i.d.m(m,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:y,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else i.d.m(m)},ma.requestFormReset=function(m){i.d.r(m)},ma.unstable_batchedUpdates=function(m,f){return m(f)},ma.useFormState=function(m,f,y){return g.H.useFormState(m,f,y)},ma.useFormStatus=function(){return g.H.useHostTransitionStatus()},ma.version="19.1.4",ma}var mm;function By(){if(mm)return hu.exports;mm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),hu.exports=Dw(),hu.exports}var ym;function Cw(){if(ym)return Mo;ym=1;var a=Tw(),r=Vl(),s=By();function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(i(188))}function m(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(i(188));return t!==e?null:e}for(var n=e,o=t;;){var d=n.return;if(d===null)break;var h=d.alternate;if(h===null){if(o=d.return,o!==null){n=o;continue}break}if(d.child===h.child){for(h=d.child;h;){if(h===n)return p(d),e;if(h===o)return p(d),t;h=h.sibling}throw Error(i(188))}if(n.return!==o.return)n=d,o=h;else{for(var w=!1,A=d.child;A;){if(A===n){w=!0,n=d,o=h;break}if(A===o){w=!0,o=d,n=h;break}A=A.sibling}if(!w){for(A=h.child;A;){if(A===n){w=!0,n=h,o=d;break}if(A===o){w=!0,o=h,n=d;break}A=A.sibling}if(!w)throw Error(i(189))}}if(n.alternate!==o)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var y=Object.assign,b=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),T=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),_=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),L=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),ee=Symbol.for("react.memo_cache_sentinel"),te=Symbol.iterator;function se(e){return e===null||typeof e!="object"?null:(e=te&&e[te]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function fe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case D:return"Profiler";case C:return"StrictMode";case x:return"Suspense";case _:return"SuspenseList";case H:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case T:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case O:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case k:return t=e.displayName||null,t!==null?t:fe(e.type)||"Memo";case L:t=e._payload,e=e._init;try{return fe(e(t))}catch{}}return null}var ce=Array.isArray,z=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,me={pending:!1,data:null,method:null,action:null},Se=[],P=-1;function J(e){return{current:e}}function U(e){0>P||(e.current=Se[P],Se[P]=null,P--)}function V(e,t){P++,Se[P]=e.current,e.current=t}var oe=J(null),de=J(null),ve=J(null),qe=J(null);function Le(e,t){switch(V(ve,t),V(de,e),V(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?qg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=qg(t),e=Mg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(oe),V(oe,e)}function gt(){U(oe),U(de),U(ve)}function nt(e){e.memoizedState!==null&&V(qe,e);var t=oe.current,n=Mg(t,e.type);t!==n&&(V(de,e),V(oe,n))}function ot(e){de.current===e&&(U(oe),U(de)),qe.current===e&&(U(qe),Lo._currentValue=me)}var dt=Object.prototype.hasOwnProperty,qt=a.unstable_scheduleCallback,mt=a.unstable_cancelCallback,F=a.unstable_shouldYield,ue=a.unstable_requestPaint,ge=a.unstable_now,B=a.unstable_getCurrentPriorityLevel,pe=a.unstable_ImmediatePriority,Ce=a.unstable_UserBlockingPriority,ye=a.unstable_NormalPriority,Oe=a.unstable_LowPriority,Qe=a.unstable_IdlePriority,Ve=a.log,Me=a.unstable_setDisableYieldValue,jt=null,be=null;function et(e){if(typeof Ve=="function"&&Me(e),be&&typeof be.setStrictMode=="function")try{be.setStrictMode(jt,e)}catch{}}var rt=Math.clz32?Math.clz32:Ra,Qt=Math.log,Re=Math.LN2;function Ra(e){return e>>>=0,e===0?32:31-(Qt(e)/Re|0)|0}var At=256,vt=4194304;function Jt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Mt(e,t,n){var o=e.pendingLanes;if(o===0)return 0;var d=0,h=e.suspendedLanes,w=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?d=Jt(o):(w&=A,w!==0?d=Jt(w):n||(n=A&~e,n!==0&&(d=Jt(n))))):(A=o&~h,A!==0?d=Jt(A):w!==0?d=Jt(w):n||(n=o&~e,n!==0&&(d=Jt(n)))),d===0?0:t!==0&&t!==d&&(t&h)===0&&(h=d&-d,n=t&-t,h>=n||h===32&&(n&4194048)!==0)?t:d}function ja(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ut(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(){var e=At;return At<<=1,(At&4194048)===0&&(At=256),e}function $t(){var e=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),e}function wt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function La(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ra(e,t,n,o,d,h){var w=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,G=e.hiddenUpdates;for(n=w&~n;0<n;){var re=31-rt(n),le=1<<re;A[re]=0,I[re]=-1;var K=G[re];if(K!==null)for(G[re]=null,re=0;re<K.length;re++){var W=K[re];W!==null&&(W.lane&=-536870913)}n&=~le}o!==0&&cn(e,o,0),h!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=h&~(w&~t))}function cn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var o=31-rt(t);e.entangledLanes|=t,e.entanglements[o]=e.entanglements[o]|1073741824|n&4194090}function en(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var o=31-rt(n),d=1<<o;d&t|e[o]&t&&(e[o]|=t),n&=~d}}function Xn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Oa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sn(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:nm(e.type))}function fa(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var pa=Math.random().toString(36).slice(2),Dt="__reactFiber$"+pa,We="__reactProps$"+pa,j="__reactContainer$"+pa,Q="__reactEvents$"+pa,he="__reactListeners$"+pa,Ue="__reactHandles$"+pa,M="__reactResources$"+pa,ne="__reactMarker$"+pa;function we(e){delete e[Dt],delete e[We],delete e[Q],delete e[he],delete e[Ue]}function xe(e){var t=e[Dt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[j]||n[Dt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bg(e);e!==null;){if(n=e[Dt])return n;e=Bg(e)}return t}e=n,n=e.parentNode}return null}function Ne(e){if(e=e[Dt]||e[j]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ie(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Je(e){var t=e[M];return t||(t=e[M]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Xe(e){e[ne]=!0}var ha=new Set,Ct={};function Ut(e,t){ba(e,t),ba(e+"Capture",t)}function ba(e,t){for(Ct[e]=t,e=0;e<t.length;e++)ha.add(t[e])}var Tn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zr={},zs={};function sc(e){return dt.call(zs,e)?!0:dt.call(Zr,e)?!1:Tn.test(e)?zs[e]=!0:(Zr[e]=!0,!1)}function Qr(e,t,n){if(sc(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var o=t.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Jr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function za(e,t,n,o){if(o===null)e.removeAttribute(n);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+o)}}var An,bi;function Ee(e){if(An===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);An=t&&t[1]||"",bi=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+An+e+bi}var _e=!1;function yt(e,t){if(!e||_e)return"";_e=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(t){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(W){var K=W}Reflect.construct(e,[],le)}else{try{le.call()}catch(W){K=W}e.call(le.prototype)}}else{try{throw Error()}catch(W){K=W}(le=e())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(W){if(W&&K&&typeof W.stack=="string")return[W.stack,K.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),w=h[0],A=h[1];if(w&&A){var I=w.split(`
`),G=A.split(`
`);for(d=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;d<G.length&&!G[d].includes("DetermineComponentFrameRoot");)d++;if(o===I.length||d===G.length)for(o=I.length-1,d=G.length-1;1<=o&&0<=d&&I[o]!==G[d];)d--;for(;1<=o&&0<=d;o--,d--)if(I[o]!==G[d]){if(o!==1||d!==1)do if(o--,d--,0>d||I[o]!==G[d]){var re=`
`+I[o].replace(" at new "," at ");return e.displayName&&re.includes("<anonymous>")&&(re=re.replace("<anonymous>",e.displayName)),re}while(1<=o&&0<=d);break}}}finally{_e=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ee(n):""}function Xt(e){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee("Lazy");case 13:return Ee("Suspense");case 19:return Ee("SuspenseList");case 0:case 15:return yt(e.type,!1);case 11:return yt(e.type.render,!1);case 1:return yt(e.type,!0);case 31:return Ee("Activity");default:return""}}function Nt(e){try{var t="";do t+=Xt(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gn(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sa(e){var t=Gn(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var d=n.get,h=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(w){o=""+w,h.call(this,w)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return o},setValue:function(w){o=""+w},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ta(e){e._valueTracker||(e._valueTracker=Sa(e))}function Ya(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),o="";return e&&(o=Gn(e)?e.checked?"true":"false":e.value),e=o,e!==n?(t.setValue(e),!0):!1}function Dn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gv=/[\n"\\]/g;function Ha(e){return e.replace(gv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function oc(e,t,n,o,d,h,w,A){e.name="",w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.type=w:e.removeAttribute("type"),t!=null?w==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Et(t)):e.value!==""+Et(t)&&(e.value=""+Et(t)):w!=="submit"&&w!=="reset"||e.removeAttribute("value"),t!=null?ic(e,w,Et(t)):n!=null?ic(e,w,Et(n)):o!=null&&e.removeAttribute("value"),d==null&&h!=null&&(e.defaultChecked=!!h),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Et(A):e.removeAttribute("name")}function _f(e,t,n,o,d,h,w,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),t!=null||n!=null){if(!(h!=="submit"&&h!=="reset"||t!=null))return;n=n!=null?""+Et(n):"",t=t!=null?""+Et(t):n,A||t===e.value||(e.value=t),e.defaultValue=t}o=o??d,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"&&(e.name=w)}function ic(e,t,n){t==="number"&&Dn(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function es(e,t,n,o){if(e=e.options,t){t={};for(var d=0;d<n.length;d++)t["$"+n[d]]=!0;for(n=0;n<e.length;n++)d=t.hasOwnProperty("$"+e[n].value),e[n].selected!==d&&(e[n].selected=d),d&&o&&(e[n].defaultSelected=!0)}else{for(n=""+Et(n),t=null,d=0;d<e.length;d++){if(e[d].value===n){e[d].selected=!0,o&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function Pf(e,t,n){if(t!=null&&(t=""+Et(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Et(n):""}function If(e,t,n,o){if(t==null){if(o!=null){if(n!=null)throw Error(i(92));if(ce(o)){if(1<o.length)throw Error(i(93));o=o[0]}n=o}n==null&&(n=""),t=n}n=Et(t),e.defaultValue=n,o=e.textContent,o===n&&o!==""&&o!==null&&(e.value=o)}function ts(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var mv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qf(e,t,n){var o=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?o?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":o?e.setProperty(t,n):typeof n!="number"||n===0||mv.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Mf(e,t,n){if(t!=null&&typeof t!="object")throw Error(i(62));if(e=e.style,n!=null){for(var o in n)!n.hasOwnProperty(o)||t!=null&&t.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var d in t)o=t[d],t.hasOwnProperty(d)&&n[d]!==o&&qf(e,d,o)}else for(var h in t)t.hasOwnProperty(h)&&qf(e,h,t[h])}function lc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vi(e){return bv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var cc=null;function dc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var as=null,ns=null;function $f(e){var t=Ne(e);if(t&&(e=t.stateNode)){var n=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(oc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ha(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var o=n[t];if(o!==e&&o.form===e.form){var d=o[We]||null;if(!d)throw Error(i(90));oc(o,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<n.length;t++)o=n[t],o.form===e.form&&Ya(o)}break e;case"textarea":Pf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&es(e,!!n.multiple,t,!1)}}}var uc=!1;function Uf(e,t,n){if(uc)return e(t,n);uc=!0;try{var o=e(t);return o}finally{if(uc=!1,(as!==null||ns!==null)&&(rl(),as&&(t=as,e=ns,ns=as=null,$f(t),e)))for(t=0;t<e.length;t++)$f(e[t])}}function Ys(e,t){var n=e.stateNode;if(n===null)return null;var o=n[We]||null;if(o===null)return null;n=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(i(231,t,typeof n));return n}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fc=!1;if(Cn)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){fc=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{fc=!1}var Kn=null,pc=null,wi=null;function Ff(){if(wi)return wi;var e,t=pc,n=t.length,o,d="value"in Kn?Kn.value:Kn.textContent,h=d.length;for(e=0;e<n&&t[e]===d[e];e++);var w=n-e;for(o=1;o<=w&&t[n-o]===d[h-o];o++);return wi=d.slice(e,1<o?1-o:void 0)}function Ei(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function xi(){return!0}function Bf(){return!1}function Aa(e){function t(n,o,d,h,w){this._reactName=n,this._targetInst=d,this.type=o,this.nativeEvent=h,this.target=w,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(n=e[A],this[A]=n?n(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?xi:Bf,this.isPropagationStopped=Bf,this}return y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xi)},persist:function(){},isPersistent:xi}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Si=Aa(Ar),Vs=y({},Ar,{view:0,detail:0}),vv=Aa(Vs),hc,gc,Xs,Ti=y({},Vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xs&&(Xs&&e.type==="mousemove"?(hc=e.screenX-Xs.screenX,gc=e.screenY-Xs.screenY):gc=hc=0,Xs=e),hc)},movementY:function(e){return"movementY"in e?e.movementY:gc}}),zf=Aa(Ti),wv=y({},Ti,{dataTransfer:0}),Ev=Aa(wv),xv=y({},Vs,{relatedTarget:0}),mc=Aa(xv),Sv=y({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Tv=Aa(Sv),Av=y({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Dv=Aa(Av),Cv=y({},Ar,{data:0}),Yf=Aa(Cv),Nv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Rv[e])?!!t[e]:!1}function yc(){return jv}var Lv=y({},Vs,{key:function(e){if(e.key){var t=Nv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ei(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yc,charCode:function(e){return e.type==="keypress"?Ei(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ei(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ov=Aa(Lv),_v=y({},Ti,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hf=Aa(_v),Pv=y({},Vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yc}),Iv=Aa(Pv),qv=y({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=Aa(qv),$v=y({},Ti,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Uv=Aa($v),Fv=y({},Ar,{newState:0,oldState:0}),Bv=Aa(Fv),zv=[9,13,27,32],bc=Cn&&"CompositionEvent"in window,Gs=null;Cn&&"documentMode"in document&&(Gs=document.documentMode);var Yv=Cn&&"TextEvent"in window&&!Gs,Vf=Cn&&(!bc||Gs&&8<Gs&&11>=Gs),Xf=" ",Gf=!1;function Kf(e,t){switch(e){case"keyup":return zv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Wf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var rs=!1;function Hv(e,t){switch(e){case"compositionend":return Wf(t);case"keypress":return t.which!==32?null:(Gf=!0,Xf);case"textInput":return e=t.data,e===Xf&&Gf?null:e;default:return null}}function Vv(e,t){if(rs)return e==="compositionend"||!bc&&Kf(e,t)?(e=Ff(),wi=pc=Kn=null,rs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vf&&t.locale!=="ko"?null:t.data;default:return null}}var Xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Xv[e.type]:t==="textarea"}function Qf(e,t,n,o){as?ns?ns.push(o):ns=[o]:as=o,t=dl(t,"onChange"),0<t.length&&(n=new Si("onChange","change",null,n,o),e.push({event:n,listeners:t}))}var Ks=null,Ws=null;function Gv(e){Lg(e,0)}function Ai(e){var t=Ie(e);if(Ya(t))return e}function Jf(e,t){if(e==="change")return t}var ep=!1;if(Cn){var vc;if(Cn){var wc="oninput"in document;if(!wc){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),wc=typeof tp.oninput=="function"}vc=wc}else vc=!1;ep=vc&&(!document.documentMode||9<document.documentMode)}function ap(){Ks&&(Ks.detachEvent("onpropertychange",np),Ws=Ks=null)}function np(e){if(e.propertyName==="value"&&Ai(Ws)){var t=[];Qf(t,Ws,e,dc(e)),Uf(Gv,t)}}function Kv(e,t,n){e==="focusin"?(ap(),Ks=t,Ws=n,Ks.attachEvent("onpropertychange",np)):e==="focusout"&&ap()}function Wv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ai(Ws)}function Zv(e,t){if(e==="click")return Ai(t)}function Qv(e,t){if(e==="input"||e==="change")return Ai(t)}function Jv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var _a=typeof Object.is=="function"?Object.is:Jv;function Zs(e,t){if(_a(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),o=Object.keys(t);if(n.length!==o.length)return!1;for(o=0;o<n.length;o++){var d=n[o];if(!dt.call(t,d)||!_a(e[d],t[d]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sp(e,t){var n=rp(e);e=0;for(var o;n;){if(n.nodeType===3){if(o=e+n.textContent.length,e<=t&&o>=t)return{node:n,offset:t-e};e=o}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rp(n)}}function op(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?op(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ip(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Dn(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dn(e.document)}return t}function Ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var e0=Cn&&"documentMode"in document&&11>=document.documentMode,ss=null,xc=null,Qs=null,Sc=!1;function lp(e,t,n){var o=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sc||ss==null||ss!==Dn(o)||(o=ss,"selectionStart"in o&&Ec(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qs&&Zs(Qs,o)||(Qs=o,o=dl(xc,"onSelect"),0<o.length&&(t=new Si("onSelect","select",null,t,n),e.push({event:t,listeners:o}),t.target=ss)))}function Dr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var os={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionrun:Dr("Transition","TransitionRun"),transitionstart:Dr("Transition","TransitionStart"),transitioncancel:Dr("Transition","TransitionCancel"),transitionend:Dr("Transition","TransitionEnd")},Tc={},cp={};Cn&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Cr(e){if(Tc[e])return Tc[e];if(!os[e])return e;var t=os[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in cp)return Tc[e]=t[n];return e}var dp=Cr("animationend"),up=Cr("animationiteration"),fp=Cr("animationstart"),t0=Cr("transitionrun"),a0=Cr("transitionstart"),n0=Cr("transitioncancel"),pp=Cr("transitionend"),hp=new Map,Ac="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ac.push("scrollEnd");function tn(e,t){hp.set(e,t),Ut(t,[e])}var gp=new WeakMap;function Va(e,t){if(typeof e=="object"&&e!==null){var n=gp.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Nt(t)},gp.set(e,t),t)}return{value:e,source:t,stack:Nt(t)}}var Xa=[],is=0,Dc=0;function Di(){for(var e=is,t=Dc=is=0;t<e;){var n=Xa[t];Xa[t++]=null;var o=Xa[t];Xa[t++]=null;var d=Xa[t];Xa[t++]=null;var h=Xa[t];if(Xa[t++]=null,o!==null&&d!==null){var w=o.pending;w===null?d.next=d:(d.next=w.next,w.next=d),o.pending=d}h!==0&&mp(n,d,h)}}function Ci(e,t,n,o){Xa[is++]=e,Xa[is++]=t,Xa[is++]=n,Xa[is++]=o,Dc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Cc(e,t,n,o){return Ci(e,t,n,o),Ni(e)}function ls(e,t){return Ci(e,null,null,t),Ni(e)}function mp(e,t,n){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n);for(var d=!1,h=e.return;h!==null;)h.childLanes|=n,o=h.alternate,o!==null&&(o.childLanes|=n),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(d=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,d&&t!==null&&(d=31-rt(n),e=h.hiddenUpdates,o=e[d],o===null?e[d]=[t]:o.push(t),t.lane=n|536870912),h):null}function Ni(e){if(50<To)throw To=0,Od=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var cs={};function r0(e,t,n,o){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pa(e,t,n,o){return new r0(e,t,n,o)}function Nc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Nn(e,t){var n=e.alternate;return n===null?(n=Pa(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yp(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ki(e,t,n,o,d,h){var w=0;if(o=e,typeof e=="function")Nc(e)&&(w=1);else if(typeof e=="string")w=ow(e,n,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case H:return e=Pa(31,n,t,d),e.elementType=H,e.lanes=h,e;case R:return Nr(n.children,d,h,t);case C:w=8,d|=24;break;case D:return e=Pa(12,n,t,d|2),e.elementType=D,e.lanes=h,e;case x:return e=Pa(13,n,t,d),e.elementType=x,e.lanes=h,e;case _:return e=Pa(19,n,t,d),e.elementType=_,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case S:case T:w=10;break e;case N:w=9;break e;case O:w=11;break e;case k:w=14;break e;case L:w=16,o=null;break e}w=29,n=Error(i(130,e===null?"null":typeof e,"")),o=null}return t=Pa(w,n,t,d),t.elementType=e,t.type=o,t.lanes=h,t}function Nr(e,t,n,o){return e=Pa(7,e,o,t),e.lanes=n,e}function kc(e,t,n){return e=Pa(6,e,null,t),e.lanes=n,e}function Rc(e,t,n){return t=Pa(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ds=[],us=0,Ri=null,ji=0,Ga=[],Ka=0,kr=null,kn=1,Rn="";function Rr(e,t){ds[us++]=ji,ds[us++]=Ri,Ri=e,ji=t}function bp(e,t,n){Ga[Ka++]=kn,Ga[Ka++]=Rn,Ga[Ka++]=kr,kr=e;var o=kn;e=Rn;var d=32-rt(o)-1;o&=~(1<<d),n+=1;var h=32-rt(t)+d;if(30<h){var w=d-d%5;h=(o&(1<<w)-1).toString(32),o>>=w,d-=w,kn=1<<32-rt(t)+d|n<<d|o,Rn=h+e}else kn=1<<h|n<<d|o,Rn=e}function jc(e){e.return!==null&&(Rr(e,1),bp(e,1,0))}function Lc(e){for(;e===Ri;)Ri=ds[--us],ds[us]=null,ji=ds[--us],ds[us]=null;for(;e===kr;)kr=Ga[--Ka],Ga[Ka]=null,Rn=Ga[--Ka],Ga[Ka]=null,kn=Ga[--Ka],Ga[Ka]=null}var va=null,_t=null,at=!1,jr=null,dn=!1,Oc=Error(i(519));function Lr(e){var t=Error(i(418,""));throw to(Va(t,e)),Oc}function vp(e){var t=e.stateNode,n=e.type,o=e.memoizedProps;switch(t[Dt]=e,t[We]=o,n){case"dialog":He("cancel",t),He("close",t);break;case"iframe":case"object":case"embed":He("load",t);break;case"video":case"audio":for(n=0;n<Do.length;n++)He(Do[n],t);break;case"source":He("error",t);break;case"img":case"image":case"link":He("error",t),He("load",t);break;case"details":He("toggle",t);break;case"input":He("invalid",t),_f(t,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Ta(t);break;case"select":He("invalid",t);break;case"textarea":He("invalid",t),If(t,o.value,o.defaultValue,o.children),Ta(t)}n=o.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||o.suppressHydrationWarning===!0||Ig(t.textContent,n)?(o.popover!=null&&(He("beforetoggle",t),He("toggle",t)),o.onScroll!=null&&He("scroll",t),o.onScrollEnd!=null&&He("scrollend",t),o.onClick!=null&&(t.onclick=ul),t=!0):t=!1,t||Lr(e)}function wp(e){for(va=e.return;va;)switch(va.tag){case 5:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:va=va.return}}function Js(e){if(e!==va)return!1;if(!at)return wp(e),at=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Kd(e.type,e.memoizedProps)),n=!n),n&&_t&&Lr(e),wp(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){_t=nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}_t=null}}else t===27?(t=_t,ur(e.type)?(e=Jd,Jd=null,_t=e):_t=t):_t=va?nn(e.stateNode.nextSibling):null;return!0}function eo(){_t=va=null,at=!1}function Ep(){var e=jr;return e!==null&&(Na===null?Na=e:Na.push.apply(Na,e),jr=null),e}function to(e){jr===null?jr=[e]:jr.push(e)}var _c=J(null),Or=null,jn=null;function Wn(e,t,n){V(_c,t._currentValue),t._currentValue=n}function Ln(e){e._currentValue=_c.current,U(_c)}function Pc(e,t,n){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===n)break;e=e.return}}function Ic(e,t,n,o){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var h=d.dependencies;if(h!==null){var w=d.child;h=h.firstContext;e:for(;h!==null;){var A=h;h=d;for(var I=0;I<t.length;I++)if(A.context===t[I]){h.lanes|=n,A=h.alternate,A!==null&&(A.lanes|=n),Pc(h.return,n,e),o||(w=null);break e}h=A.next}}else if(d.tag===18){if(w=d.return,w===null)throw Error(i(341));w.lanes|=n,h=w.alternate,h!==null&&(h.lanes|=n),Pc(w,n,e),w=null}else w=d.child;if(w!==null)w.return=d;else for(w=d;w!==null;){if(w===e){w=null;break}if(d=w.sibling,d!==null){d.return=w.return,w=d;break}w=w.return}d=w}}function ao(e,t,n,o){e=null;for(var d=t,h=!1;d!==null;){if(!h){if((d.flags&524288)!==0)h=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var w=d.alternate;if(w===null)throw Error(i(387));if(w=w.memoizedProps,w!==null){var A=d.type;_a(d.pendingProps.value,w.value)||(e!==null?e.push(A):e=[A])}}else if(d===qe.current){if(w=d.alternate,w===null)throw Error(i(387));w.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Lo):e=[Lo])}d=d.return}e!==null&&Ic(t,e,n,o),t.flags|=262144}function Li(e){for(e=e.firstContext;e!==null;){if(!_a(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function _r(e){Or=e,jn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ga(e){return xp(Or,e)}function Oi(e,t){return Or===null&&_r(e),xp(e,t)}function xp(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},jn===null){if(e===null)throw Error(i(308));jn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else jn=jn.next=t;return n}var s0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,o){e.push(o)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},o0=a.unstable_scheduleCallback,i0=a.unstable_NormalPriority,Gt={$$typeof:T,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qc(){return{controller:new s0,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&o0(i0,function(){e.controller.abort()})}var ro=null,Mc=0,fs=0,ps=null;function l0(e,t){if(ro===null){var n=ro=[];Mc=0,fs=Ud(),ps={status:"pending",value:void 0,then:function(o){n.push(o)}}}return Mc++,t.then(Sp,Sp),t}function Sp(){if(--Mc===0&&ro!==null){ps!==null&&(ps.status="fulfilled");var e=ro;ro=null,fs=0,ps=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function c0(e,t){var n=[],o={status:"pending",value:null,reason:null,then:function(d){n.push(d)}};return e.then(function(){o.status="fulfilled",o.value=t;for(var d=0;d<n.length;d++)(0,n[d])(t)},function(d){for(o.status="rejected",o.reason=d,d=0;d<n.length;d++)(0,n[d])(void 0)}),o}var Tp=z.S;z.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&l0(e,t),Tp!==null&&Tp(e,t)};var Pr=J(null);function $c(){var e=Pr.current;return e!==null?e:xt.pooledCache}function _i(e,t){t===null?V(Pr,Pr.current):V(Pr,t.pool)}function Ap(){var e=$c();return e===null?null:{parent:Gt._currentValue,pool:e}}var so=Error(i(460)),Dp=Error(i(474)),Pi=Error(i(542)),Uc={then:function(){}};function Cp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ii(){}function Np(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ii,Ii),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rp(e),e;default:if(typeof t.status=="string")t.then(Ii,Ii);else{if(e=xt,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status="pending",e.then(function(o){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=o}},function(o){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=o}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Rp(e),e}throw oo=t,so}}var oo=null;function kp(){if(oo===null)throw Error(i(459));var e=oo;return oo=null,e}function Rp(e){if(e===so||e===Pi)throw Error(i(483))}var Zn=!1;function Fc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Qn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Jn(e,t,n){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(it&2)!==0){var d=o.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),o.pending=t,t=Ni(e),mp(e,null,n),t}return Ci(e,o,t,n),Ni(e)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,en(e,n)}}function zc(e,t){var n=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,n===o)){var d=null,h=null;if(n=n.firstBaseUpdate,n!==null){do{var w={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};h===null?d=h=w:h=h.next=w,n=n.next}while(n!==null);h===null?d=h=t:h=h.next=t}else d=h=t;n={baseState:o.baseState,firstBaseUpdate:d,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Yc=!1;function lo(){if(Yc){var e=ps;if(e!==null)throw e}}function co(e,t,n,o){Yc=!1;var d=e.updateQueue;Zn=!1;var h=d.firstBaseUpdate,w=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var I=A,G=I.next;I.next=null,w===null?h=G:w.next=G,w=I;var re=e.alternate;re!==null&&(re=re.updateQueue,A=re.lastBaseUpdate,A!==w&&(A===null?re.firstBaseUpdate=G:A.next=G,re.lastBaseUpdate=I))}if(h!==null){var le=d.baseState;w=0,re=G=I=null,A=h;do{var K=A.lane&-536870913,W=K!==A.lane;if(W?(Ze&K)===K:(o&K)===K){K!==0&&K===fs&&(Yc=!0),re!==null&&(re=re.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Pe=e,ke=A;K=t;var ht=n;switch(ke.tag){case 1:if(Pe=ke.payload,typeof Pe=="function"){le=Pe.call(ht,le,K);break e}le=Pe;break e;case 3:Pe.flags=Pe.flags&-65537|128;case 0:if(Pe=ke.payload,K=typeof Pe=="function"?Pe.call(ht,le,K):Pe,K==null)break e;le=y({},le,K);break e;case 2:Zn=!0}}K=A.callback,K!==null&&(e.flags|=64,W&&(e.flags|=8192),W=d.callbacks,W===null?d.callbacks=[K]:W.push(K))}else W={lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},re===null?(G=re=W,I=le):re=re.next=W,w|=K;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;W=A,A=W.next,W.next=null,d.lastBaseUpdate=W,d.shared.pending=null}}while(!0);re===null&&(I=le),d.baseState=I,d.firstBaseUpdate=G,d.lastBaseUpdate=re,h===null&&(d.shared.lanes=0),ir|=w,e.lanes=w,e.memoizedState=le}}function jp(e,t){if(typeof e!="function")throw Error(i(191,e));e.call(t)}function Lp(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)jp(n[e],t)}var hs=J(null),qi=J(0);function Op(e,t){e=$n,V(qi,e),V(hs,t),$n=e|t.baseLanes}function Hc(){V(qi,$n),V(hs,hs.current)}function Vc(){$n=qi.current,U(hs),U(qi)}var er=0,Fe=null,ft=null,Yt=null,Mi=!1,gs=!1,Ir=!1,$i=0,uo=0,ms=null,d0=0;function Ft(){throw Error(i(321))}function Xc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!_a(e[n],t[n]))return!1;return!0}function Gc(e,t,n,o,d,h){return er=h,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,z.H=e===null||e.memoizedState===null?mh:yh,Ir=!1,h=n(o,d),Ir=!1,gs&&(h=Pp(t,n,o,d)),_p(e),h}function _p(e){z.H=Hi;var t=ft!==null&&ft.next!==null;if(er=0,Yt=ft=Fe=null,Mi=!1,uo=0,ms=null,t)throw Error(i(300));e===null||ea||(e=e.dependencies,e!==null&&Li(e)&&(ea=!0))}function Pp(e,t,n,o){Fe=e;var d=0;do{if(gs&&(ms=null),uo=0,gs=!1,25<=d)throw Error(i(301));if(d+=1,Yt=ft=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=y0,h=t(n,o)}while(gs);return h}function u0(){var e=z.H,t=e.useState()[0];return t=typeof t.then=="function"?fo(t):t,e=e.useState()[0],(ft!==null?ft.memoizedState:null)!==e&&(Fe.flags|=1024),t}function Kc(){var e=$i!==0;return $i=0,e}function Wc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Zc(e){if(Mi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Mi=!1}er=0,Yt=ft=Fe=null,gs=!1,uo=$i=0,ms=null}function Da(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Yt===null?Fe.memoizedState=Yt=e:Yt=Yt.next=e,Yt}function Ht(){if(ft===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=ft.next;var t=Yt===null?Fe.memoizedState:Yt.next;if(t!==null)Yt=t,ft=e;else{if(e===null)throw Fe.alternate===null?Error(i(467)):Error(i(310));ft=e,e={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},Yt===null?Fe.memoizedState=Yt=e:Yt=Yt.next=e}return Yt}function Qc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function fo(e){var t=uo;return uo+=1,ms===null&&(ms=[]),e=Np(ms,e,t),t=Fe,(Yt===null?t.memoizedState:Yt.next)===null&&(t=t.alternate,z.H=t===null||t.memoizedState===null?mh:yh),e}function Ui(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return fo(e);if(e.$$typeof===T)return ga(e)}throw Error(i(438,String(e)))}function Jc(e){var t=null,n=Fe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var o=Fe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(t={data:o.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Qc(),Fe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),o=0;o<e;o++)n[o]=ee;return t.index++,n}function On(e,t){return typeof t=="function"?t(e):t}function Fi(e){var t=Ht();return ed(t,ft,e)}function ed(e,t,n){var o=e.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var d=e.baseQueue,h=o.pending;if(h!==null){if(d!==null){var w=d.next;d.next=h.next,h.next=w}t.baseQueue=d=h,o.pending=null}if(h=e.baseState,d===null)e.memoizedState=h;else{t=d.next;var A=w=null,I=null,G=t,re=!1;do{var le=G.lane&-536870913;if(le!==G.lane?(Ze&le)===le:(er&le)===le){var K=G.revertLane;if(K===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null}),le===fs&&(re=!0);else if((er&K)===K){G=G.next,K===fs&&(re=!0);continue}else le={lane:0,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},I===null?(A=I=le,w=h):I=I.next=le,Fe.lanes|=K,ir|=K;le=G.action,Ir&&n(h,le),h=G.hasEagerState?G.eagerState:n(h,le)}else K={lane:le,revertLane:G.revertLane,action:G.action,hasEagerState:G.hasEagerState,eagerState:G.eagerState,next:null},I===null?(A=I=K,w=h):I=I.next=K,Fe.lanes|=le,ir|=le;G=G.next}while(G!==null&&G!==t);if(I===null?w=h:I.next=A,!_a(h,e.memoizedState)&&(ea=!0,re&&(n=ps,n!==null)))throw n;e.memoizedState=h,e.baseState=w,e.baseQueue=I,o.lastRenderedState=h}return d===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function td(e){var t=Ht(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var o=n.dispatch,d=n.pending,h=t.memoizedState;if(d!==null){n.pending=null;var w=d=d.next;do h=e(h,w.action),w=w.next;while(w!==d);_a(h,t.memoizedState)||(ea=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),n.lastRenderedState=h}return[h,o]}function Ip(e,t,n){var o=Fe,d=Ht(),h=at;if(h){if(n===void 0)throw Error(i(407));n=n()}else n=t();var w=!_a((ft||d).memoizedState,n);w&&(d.memoizedState=n,ea=!0),d=d.queue;var A=$p.bind(null,o,d,e);if(po(2048,8,A,[e]),d.getSnapshot!==t||w||Yt!==null&&Yt.memoizedState.tag&1){if(o.flags|=2048,ys(9,Bi(),Mp.bind(null,o,d,n,t),null),xt===null)throw Error(i(349));h||(er&124)!==0||qp(o,t,n)}return n}function qp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Fe.updateQueue,t===null?(t=Qc(),Fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Mp(e,t,n,o){t.value=n,t.getSnapshot=o,Up(t)&&Fp(e)}function $p(e,t,n){return n(function(){Up(t)&&Fp(e)})}function Up(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!_a(e,n)}catch{return!0}}function Fp(e){var t=ls(e,2);t!==null&&Ua(t,e,2)}function ad(e){var t=Da();if(typeof e=="function"){var n=e;if(e=n(),Ir){et(!0);try{n()}finally{et(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:e},t}function Bp(e,t,n,o){return e.baseState=n,ed(e,ft,typeof o=="function"?o:On)}function f0(e,t,n,o,d){if(Yi(e))throw Error(i(485));if(e=t.action,e!==null){var h={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(w){h.listeners.push(w)}};z.T!==null?n(!0):h.isTransition=!1,o(h),n=t.pending,n===null?(h.next=t.pending=h,zp(t,h)):(h.next=n.next,t.pending=n.next=h)}}function zp(e,t){var n=t.action,o=t.payload,d=e.state;if(t.isTransition){var h=z.T,w={};z.T=w;try{var A=n(d,o),I=z.S;I!==null&&I(w,A),Yp(e,t,A)}catch(G){nd(e,t,G)}finally{z.T=h}}else try{h=n(d,o),Yp(e,t,h)}catch(G){nd(e,t,G)}}function Yp(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(o){Hp(e,t,o)},function(o){return nd(e,t,o)}):Hp(e,t,n)}function Hp(e,t,n){t.status="fulfilled",t.value=n,Vp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,zp(e,n)))}function nd(e,t,n){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do t.status="rejected",t.reason=n,Vp(t),t=t.next;while(t!==o)}e.action=null}function Vp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Xp(e,t){return t}function Gp(e,t){if(at){var n=xt.formState;if(n!==null){e:{var o=Fe;if(at){if(_t){t:{for(var d=_t,h=dn;d.nodeType!==8;){if(!h){d=null;break t}if(d=nn(d.nextSibling),d===null){d=null;break t}}h=d.data,d=h==="F!"||h==="F"?d:null}if(d){_t=nn(d.nextSibling),o=d.data==="F!";break e}}Lr(o)}o=!1}o&&(t=n[0])}}return n=Da(),n.memoizedState=n.baseState=t,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xp,lastRenderedState:t},n.queue=o,n=ph.bind(null,Fe,o),o.dispatch=n,o=ad(!1),h=ld.bind(null,Fe,!1,o.queue),o=Da(),d={state:t,dispatch:null,action:e,pending:null},o.queue=d,n=f0.bind(null,Fe,d,h,n),d.dispatch=n,o.memoizedState=e,[t,n,!1]}function Kp(e){var t=Ht();return Wp(t,ft,e)}function Wp(e,t,n){if(t=ed(e,t,Xp)[0],e=Fi(On)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var o=fo(t)}catch(w){throw w===so?Pi:w}else o=t;t=Ht();var d=t.queue,h=d.dispatch;return n!==t.memoizedState&&(Fe.flags|=2048,ys(9,Bi(),p0.bind(null,d,n),null)),[o,h,e]}function p0(e,t){e.action=t}function Zp(e){var t=Ht(),n=ft;if(n!==null)return Wp(t,n,e);Ht(),t=t.memoizedState,n=Ht();var o=n.queue.dispatch;return n.memoizedState=e,[t,o,!1]}function ys(e,t,n,o){return e={tag:e,create:n,deps:o,inst:t,next:null},t=Fe.updateQueue,t===null&&(t=Qc(),Fe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(o=n.next,n.next=e,e.next=o,t.lastEffect=e),e}function Bi(){return{destroy:void 0,resource:void 0}}function Qp(){return Ht().memoizedState}function zi(e,t,n,o){var d=Da();o=o===void 0?null:o,Fe.flags|=e,d.memoizedState=ys(1|t,Bi(),n,o)}function po(e,t,n,o){var d=Ht();o=o===void 0?null:o;var h=d.memoizedState.inst;ft!==null&&o!==null&&Xc(o,ft.memoizedState.deps)?d.memoizedState=ys(t,h,n,o):(Fe.flags|=e,d.memoizedState=ys(1|t,h,n,o))}function Jp(e,t){zi(8390656,8,e,t)}function eh(e,t){po(2048,8,e,t)}function th(e,t){return po(4,2,e,t)}function ah(e,t){return po(4,4,e,t)}function nh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rh(e,t,n){n=n!=null?n.concat([e]):null,po(4,4,nh.bind(null,t,e),n)}function rd(){}function sh(e,t){var n=Ht();t=t===void 0?null:t;var o=n.memoizedState;return t!==null&&Xc(t,o[1])?o[0]:(n.memoizedState=[e,t],e)}function oh(e,t){var n=Ht();t=t===void 0?null:t;var o=n.memoizedState;if(t!==null&&Xc(t,o[1]))return o[0];if(o=e(),Ir){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[o,t],o}function sd(e,t,n){return n===void 0||(er&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=cg(),Fe.lanes|=e,ir|=e,n)}function ih(e,t,n,o){return _a(n,t)?n:hs.current!==null?(e=sd(e,n,o),_a(e,t)||(ea=!0),e):(er&42)===0?(ea=!0,e.memoizedState=n):(e=cg(),Fe.lanes|=e,ir|=e,t)}function lh(e,t,n,o,d){var h=Z.p;Z.p=h!==0&&8>h?h:8;var w=z.T,A={};z.T=A,ld(e,!1,t,n);try{var I=d(),G=z.S;if(G!==null&&G(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var re=c0(I,o);ho(e,t,re,$a(e))}else ho(e,t,o,$a(e))}catch(le){ho(e,t,{then:function(){},status:"rejected",reason:le},$a())}finally{Z.p=h,z.T=w}}function h0(){}function od(e,t,n,o){if(e.tag!==5)throw Error(i(476));var d=ch(e).queue;lh(e,d,t,me,n===null?h0:function(){return dh(e),n(o)})}function ch(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:me,baseState:me,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:me},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:On,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function dh(e){var t=ch(e).next.queue;ho(e,t,{},$a())}function id(){return ga(Lo)}function uh(){return Ht().memoizedState}function fh(){return Ht().memoizedState}function g0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=$a();e=Qn(n);var o=Jn(t,e,n);o!==null&&(Ua(o,t,n),io(o,t,n)),t={cache:qc()},e.payload=t;return}t=t.return}}function m0(e,t,n){var o=$a();n={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Yi(e)?hh(t,n):(n=Cc(e,t,n,o),n!==null&&(Ua(n,e,o),gh(n,t,o)))}function ph(e,t,n){var o=$a();ho(e,t,n,o)}function ho(e,t,n,o){var d={lane:o,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yi(e))hh(t,d);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var w=t.lastRenderedState,A=h(w,n);if(d.hasEagerState=!0,d.eagerState=A,_a(A,w))return Ci(e,t,d,0),xt===null&&Di(),!1}catch{}if(n=Cc(e,t,d,o),n!==null)return Ua(n,e,o),gh(n,t,o),!0}return!1}function ld(e,t,n,o){if(o={lane:2,revertLane:Ud(),action:o,hasEagerState:!1,eagerState:null,next:null},Yi(e)){if(t)throw Error(i(479))}else t=Cc(e,n,o,2),t!==null&&Ua(t,e,2)}function Yi(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function hh(e,t){gs=Mi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function gh(e,t,n){if((n&4194048)!==0){var o=t.lanes;o&=e.pendingLanes,n|=o,t.lanes=n,en(e,n)}}var Hi={readContext:ga,use:Ui,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useLayoutEffect:Ft,useInsertionEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useSyncExternalStore:Ft,useId:Ft,useHostTransitionStatus:Ft,useFormState:Ft,useActionState:Ft,useOptimistic:Ft,useMemoCache:Ft,useCacheRefresh:Ft},mh={readContext:ga,use:Ui,useCallback:function(e,t){return Da().memoizedState=[e,t===void 0?null:t],e},useContext:ga,useEffect:Jp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,zi(4194308,4,nh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zi(4194308,4,e,t)},useInsertionEffect:function(e,t){zi(4,2,e,t)},useMemo:function(e,t){var n=Da();t=t===void 0?null:t;var o=e();if(Ir){et(!0);try{e()}finally{et(!1)}}return n.memoizedState=[o,t],o},useReducer:function(e,t,n){var o=Da();if(n!==void 0){var d=n(t);if(Ir){et(!0);try{n(t)}finally{et(!1)}}}else d=t;return o.memoizedState=o.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},o.queue=e,e=e.dispatch=m0.bind(null,Fe,e),[o.memoizedState,e]},useRef:function(e){var t=Da();return e={current:e},t.memoizedState=e},useState:function(e){e=ad(e);var t=e.queue,n=ph.bind(null,Fe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:rd,useDeferredValue:function(e,t){var n=Da();return sd(n,e,t)},useTransition:function(){var e=ad(!1);return e=lh.bind(null,Fe,e.queue,!0,!1),Da().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var o=Fe,d=Da();if(at){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),xt===null)throw Error(i(349));(Ze&124)!==0||qp(o,t,n)}d.memoizedState=n;var h={value:n,getSnapshot:t};return d.queue=h,Jp($p.bind(null,o,h,e),[e]),o.flags|=2048,ys(9,Bi(),Mp.bind(null,o,h,n,t),null),n},useId:function(){var e=Da(),t=xt.identifierPrefix;if(at){var n=Rn,o=kn;n=(o&~(1<<32-rt(o)-1)).toString(32)+n,t="«"+t+"R"+n,n=$i++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=d0++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:id,useFormState:Gp,useActionState:Gp,useOptimistic:function(e){var t=Da();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=ld.bind(null,Fe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Jc,useCacheRefresh:function(){return Da().memoizedState=g0.bind(null,Fe)}},yh={readContext:ga,use:Ui,useCallback:sh,useContext:ga,useEffect:eh,useImperativeHandle:rh,useInsertionEffect:th,useLayoutEffect:ah,useMemo:oh,useReducer:Fi,useRef:Qp,useState:function(){return Fi(On)},useDebugValue:rd,useDeferredValue:function(e,t){var n=Ht();return ih(n,ft.memoizedState,e,t)},useTransition:function(){var e=Fi(On)[0],t=Ht().memoizedState;return[typeof e=="boolean"?e:fo(e),t]},useSyncExternalStore:Ip,useId:uh,useHostTransitionStatus:id,useFormState:Kp,useActionState:Kp,useOptimistic:function(e,t){var n=Ht();return Bp(n,ft,e,t)},useMemoCache:Jc,useCacheRefresh:fh},y0={readContext:ga,use:Ui,useCallback:sh,useContext:ga,useEffect:eh,useImperativeHandle:rh,useInsertionEffect:th,useLayoutEffect:ah,useMemo:oh,useReducer:td,useRef:Qp,useState:function(){return td(On)},useDebugValue:rd,useDeferredValue:function(e,t){var n=Ht();return ft===null?sd(n,e,t):ih(n,ft.memoizedState,e,t)},useTransition:function(){var e=td(On)[0],t=Ht().memoizedState;return[typeof e=="boolean"?e:fo(e),t]},useSyncExternalStore:Ip,useId:uh,useHostTransitionStatus:id,useFormState:Zp,useActionState:Zp,useOptimistic:function(e,t){var n=Ht();return ft!==null?Bp(n,ft,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Jc,useCacheRefresh:fh},bs=null,go=0;function Vi(e){var t=go;return go+=1,bs===null&&(bs=[]),Np(bs,e,t)}function mo(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Xi(e,t){throw t.$$typeof===b?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function bh(e){var t=e._init;return t(e._payload)}function vh(e){function t(Y,$){if(e){var X=Y.deletions;X===null?(Y.deletions=[$],Y.flags|=16):X.push($)}}function n(Y,$){if(!e)return null;for(;$!==null;)t(Y,$),$=$.sibling;return null}function o(Y){for(var $=new Map;Y!==null;)Y.key!==null?$.set(Y.key,Y):$.set(Y.index,Y),Y=Y.sibling;return $}function d(Y,$){return Y=Nn(Y,$),Y.index=0,Y.sibling=null,Y}function h(Y,$,X){return Y.index=X,e?(X=Y.alternate,X!==null?(X=X.index,X<$?(Y.flags|=67108866,$):X):(Y.flags|=67108866,$)):(Y.flags|=1048576,$)}function w(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,$,X,ie){return $===null||$.tag!==6?($=kc(X,Y.mode,ie),$.return=Y,$):($=d($,X),$.return=Y,$)}function I(Y,$,X,ie){var Ae=X.type;return Ae===R?re(Y,$,X.props.children,ie,X.key):$!==null&&($.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===L&&bh(Ae)===$.type)?($=d($,X.props),mo($,X),$.return=Y,$):($=ki(X.type,X.key,X.props,null,Y.mode,ie),mo($,X),$.return=Y,$)}function G(Y,$,X,ie){return $===null||$.tag!==4||$.stateNode.containerInfo!==X.containerInfo||$.stateNode.implementation!==X.implementation?($=Rc(X,Y.mode,ie),$.return=Y,$):($=d($,X.children||[]),$.return=Y,$)}function re(Y,$,X,ie,Ae){return $===null||$.tag!==7?($=Nr(X,Y.mode,ie,Ae),$.return=Y,$):($=d($,X),$.return=Y,$)}function le(Y,$,X){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return $=kc(""+$,Y.mode,X),$.return=Y,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case v:return X=ki($.type,$.key,$.props,null,Y.mode,X),mo(X,$),X.return=Y,X;case E:return $=Rc($,Y.mode,X),$.return=Y,$;case L:var ie=$._init;return $=ie($._payload),le(Y,$,X)}if(ce($)||se($))return $=Nr($,Y.mode,X,null),$.return=Y,$;if(typeof $.then=="function")return le(Y,Vi($),X);if($.$$typeof===T)return le(Y,Oi(Y,$),X);Xi(Y,$)}return null}function K(Y,$,X,ie){var Ae=$!==null?$.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return Ae!==null?null:A(Y,$,""+X,ie);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case v:return X.key===Ae?I(Y,$,X,ie):null;case E:return X.key===Ae?G(Y,$,X,ie):null;case L:return Ae=X._init,X=Ae(X._payload),K(Y,$,X,ie)}if(ce(X)||se(X))return Ae!==null?null:re(Y,$,X,ie,null);if(typeof X.then=="function")return K(Y,$,Vi(X),ie);if(X.$$typeof===T)return K(Y,$,Oi(Y,X),ie);Xi(Y,X)}return null}function W(Y,$,X,ie,Ae){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return Y=Y.get(X)||null,A($,Y,""+ie,Ae);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case v:return Y=Y.get(ie.key===null?X:ie.key)||null,I($,Y,ie,Ae);case E:return Y=Y.get(ie.key===null?X:ie.key)||null,G($,Y,ie,Ae);case L:var Be=ie._init;return ie=Be(ie._payload),W(Y,$,X,ie,Ae)}if(ce(ie)||se(ie))return Y=Y.get(X)||null,re($,Y,ie,Ae,null);if(typeof ie.then=="function")return W(Y,$,X,Vi(ie),Ae);if(ie.$$typeof===T)return W(Y,$,X,Oi($,ie),Ae);Xi($,ie)}return null}function Pe(Y,$,X,ie){for(var Ae=null,Be=null,De=$,je=$=0,aa=null;De!==null&&je<X.length;je++){De.index>je?(aa=De,De=null):aa=De.sibling;var tt=K(Y,De,X[je],ie);if(tt===null){De===null&&(De=aa);break}e&&De&&tt.alternate===null&&t(Y,De),$=h(tt,$,je),Be===null?Ae=tt:Be.sibling=tt,Be=tt,De=aa}if(je===X.length)return n(Y,De),at&&Rr(Y,je),Ae;if(De===null){for(;je<X.length;je++)De=le(Y,X[je],ie),De!==null&&($=h(De,$,je),Be===null?Ae=De:Be.sibling=De,Be=De);return at&&Rr(Y,je),Ae}for(De=o(De);je<X.length;je++)aa=W(De,Y,je,X[je],ie),aa!==null&&(e&&aa.alternate!==null&&De.delete(aa.key===null?je:aa.key),$=h(aa,$,je),Be===null?Ae=aa:Be.sibling=aa,Be=aa);return e&&De.forEach(function(mr){return t(Y,mr)}),at&&Rr(Y,je),Ae}function ke(Y,$,X,ie){if(X==null)throw Error(i(151));for(var Ae=null,Be=null,De=$,je=$=0,aa=null,tt=X.next();De!==null&&!tt.done;je++,tt=X.next()){De.index>je?(aa=De,De=null):aa=De.sibling;var mr=K(Y,De,tt.value,ie);if(mr===null){De===null&&(De=aa);break}e&&De&&mr.alternate===null&&t(Y,De),$=h(mr,$,je),Be===null?Ae=mr:Be.sibling=mr,Be=mr,De=aa}if(tt.done)return n(Y,De),at&&Rr(Y,je),Ae;if(De===null){for(;!tt.done;je++,tt=X.next())tt=le(Y,tt.value,ie),tt!==null&&($=h(tt,$,je),Be===null?Ae=tt:Be.sibling=tt,Be=tt);return at&&Rr(Y,je),Ae}for(De=o(De);!tt.done;je++,tt=X.next())tt=W(De,Y,je,tt.value,ie),tt!==null&&(e&&tt.alternate!==null&&De.delete(tt.key===null?je:tt.key),$=h(tt,$,je),Be===null?Ae=tt:Be.sibling=tt,Be=tt);return e&&De.forEach(function(bw){return t(Y,bw)}),at&&Rr(Y,je),Ae}function ht(Y,$,X,ie){if(typeof X=="object"&&X!==null&&X.type===R&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case v:e:{for(var Ae=X.key;$!==null;){if($.key===Ae){if(Ae=X.type,Ae===R){if($.tag===7){n(Y,$.sibling),ie=d($,X.props.children),ie.return=Y,Y=ie;break e}}else if($.elementType===Ae||typeof Ae=="object"&&Ae!==null&&Ae.$$typeof===L&&bh(Ae)===$.type){n(Y,$.sibling),ie=d($,X.props),mo(ie,X),ie.return=Y,Y=ie;break e}n(Y,$);break}else t(Y,$);$=$.sibling}X.type===R?(ie=Nr(X.props.children,Y.mode,ie,X.key),ie.return=Y,Y=ie):(ie=ki(X.type,X.key,X.props,null,Y.mode,ie),mo(ie,X),ie.return=Y,Y=ie)}return w(Y);case E:e:{for(Ae=X.key;$!==null;){if($.key===Ae)if($.tag===4&&$.stateNode.containerInfo===X.containerInfo&&$.stateNode.implementation===X.implementation){n(Y,$.sibling),ie=d($,X.children||[]),ie.return=Y,Y=ie;break e}else{n(Y,$);break}else t(Y,$);$=$.sibling}ie=Rc(X,Y.mode,ie),ie.return=Y,Y=ie}return w(Y);case L:return Ae=X._init,X=Ae(X._payload),ht(Y,$,X,ie)}if(ce(X))return Pe(Y,$,X,ie);if(se(X)){if(Ae=se(X),typeof Ae!="function")throw Error(i(150));return X=Ae.call(X),ke(Y,$,X,ie)}if(typeof X.then=="function")return ht(Y,$,Vi(X),ie);if(X.$$typeof===T)return ht(Y,$,Oi(Y,X),ie);Xi(Y,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,$!==null&&$.tag===6?(n(Y,$.sibling),ie=d($,X),ie.return=Y,Y=ie):(n(Y,$),ie=kc(X,Y.mode,ie),ie.return=Y,Y=ie),w(Y)):n(Y,$)}return function(Y,$,X,ie){try{go=0;var Ae=ht(Y,$,X,ie);return bs=null,Ae}catch(De){if(De===so||De===Pi)throw De;var Be=Pa(29,De,null,Y.mode);return Be.lanes=ie,Be.return=Y,Be}}}var vs=vh(!0),wh=vh(!1),Wa=J(null),un=null;function tr(e){var t=e.alternate;V(Kt,Kt.current&1),V(Wa,e),un===null&&(t===null||hs.current!==null||t.memoizedState!==null)&&(un=e)}function Eh(e){if(e.tag===22){if(V(Kt,Kt.current),V(Wa,e),un===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(un=e)}}else ar()}function ar(){V(Kt,Kt.current),V(Wa,Wa.current)}function _n(e){U(Wa),un===e&&(un=null),U(Kt)}var Kt=J(0);function Gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Qd(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function cd(e,t,n,o){t=e.memoizedState,n=n(o,t),n=n==null?t:y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dd={enqueueSetState:function(e,t,n){e=e._reactInternals;var o=$a(),d=Qn(o);d.payload=t,n!=null&&(d.callback=n),t=Jn(e,d,o),t!==null&&(Ua(t,e,o),io(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var o=$a(),d=Qn(o);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=Jn(e,d,o),t!==null&&(Ua(t,e,o),io(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$a(),o=Qn(n);o.tag=2,t!=null&&(o.callback=t),t=Jn(e,o,n),t!==null&&(Ua(t,e,n),io(t,e,n))}};function xh(e,t,n,o,d,h,w){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,w):t.prototype&&t.prototype.isPureReactComponent?!Zs(n,o)||!Zs(d,h):!0}function Sh(e,t,n,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,o),t.state!==e&&dd.enqueueReplaceState(t,t.state,null)}function qr(e,t){var n=t;if("ref"in t){n={};for(var o in t)o!=="ref"&&(n[o]=t[o])}if(e=e.defaultProps){n===t&&(n=y({},n));for(var d in e)n[d]===void 0&&(n[d]=e[d])}return n}var Ki=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Th(e){Ki(e)}function Ah(e){console.error(e)}function Dh(e){Ki(e)}function Wi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(o){setTimeout(function(){throw o})}}function Ch(e,t,n){try{var o=e.onCaughtError;o(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function ud(e,t,n){return n=Qn(n),n.tag=3,n.payload={element:null},n.callback=function(){Wi(e,t)},n}function Nh(e){return e=Qn(e),e.tag=3,e}function kh(e,t,n,o){var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var h=o.value;e.payload=function(){return d(h)},e.callback=function(){Ch(t,n,o)}}var w=n.stateNode;w!==null&&typeof w.componentDidCatch=="function"&&(e.callback=function(){Ch(t,n,o),typeof d!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function b0(e,t,n,o,d){if(n.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(t=n.alternate,t!==null&&ao(t,n,d,!0),n=Wa.current,n!==null){switch(n.tag){case 13:return un===null?Pd():n.alternate===null&&Pt===0&&(Pt=3),n.flags&=-257,n.flags|=65536,n.lanes=d,o===Uc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([o]):t.add(o),qd(e,o,d)),!1;case 22:return n.flags|=65536,o===Uc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([o])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([o]):n.add(o)),qd(e,o,d)),!1}throw Error(i(435,n.tag))}return qd(e,o,d),Pd(),!1}if(at)return t=Wa.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,o!==Oc&&(e=Error(i(422),{cause:o}),to(Va(e,n)))):(o!==Oc&&(t=Error(i(423),{cause:o}),to(Va(t,n))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,o=Va(o,n),d=ud(e.stateNode,o,d),zc(e,d),Pt!==4&&(Pt=2)),!1;var h=Error(i(520),{cause:o});if(h=Va(h,n),So===null?So=[h]:So.push(h),Pt!==4&&(Pt=2),t===null)return!0;o=Va(o,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=d&-d,n.lanes|=e,e=ud(n.stateNode,o,e),zc(n,e),!1;case 1:if(t=n.type,h=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(lr===null||!lr.has(h))))return n.flags|=65536,d&=-d,n.lanes|=d,d=Nh(d),kh(d,e,n,o),zc(n,d),!1}n=n.return}while(n!==null);return!1}var Rh=Error(i(461)),ea=!1;function sa(e,t,n,o){t.child=e===null?wh(t,null,n,o):vs(t,e.child,n,o)}function jh(e,t,n,o,d){n=n.render;var h=t.ref;if("ref"in o){var w={};for(var A in o)A!=="ref"&&(w[A]=o[A])}else w=o;return _r(t),o=Gc(e,t,n,w,h,d),A=Kc(),e!==null&&!ea?(Wc(e,t,d),Pn(e,t,d)):(at&&A&&jc(t),t.flags|=1,sa(e,t,o,d),t.child)}function Lh(e,t,n,o,d){if(e===null){var h=n.type;return typeof h=="function"&&!Nc(h)&&h.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=h,Oh(e,t,h,o,d)):(e=ki(n.type,null,o,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!vd(e,d)){var w=h.memoizedProps;if(n=n.compare,n=n!==null?n:Zs,n(w,o)&&e.ref===t.ref)return Pn(e,t,d)}return t.flags|=1,e=Nn(h,o),e.ref=t.ref,e.return=t,t.child=e}function Oh(e,t,n,o,d){if(e!==null){var h=e.memoizedProps;if(Zs(h,o)&&e.ref===t.ref)if(ea=!1,t.pendingProps=o=h,vd(e,d))(e.flags&131072)!==0&&(ea=!0);else return t.lanes=e.lanes,Pn(e,t,d)}return fd(e,t,n,o,d)}function _h(e,t,n){var o=t.pendingProps,d=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((t.flags&128)!==0){if(o=h!==null?h.baseLanes|n:n,e!==null){for(d=t.child=e.child,h=0;d!==null;)h=h|d.lanes|d.childLanes,d=d.sibling;t.childLanes=h&~o}else t.childLanes=0,t.child=null;return Ph(e,t,o,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&_i(t,h!==null?h.cachePool:null),h!==null?Op(t,h):Hc(),Eh(t);else return t.lanes=t.childLanes=536870912,Ph(e,t,h!==null?h.baseLanes|n:n,n)}else h!==null?(_i(t,h.cachePool),Op(t,h),ar(),t.memoizedState=null):(e!==null&&_i(t,null),Hc(),ar());return sa(e,t,d,n),t.child}function Ph(e,t,n,o){var d=$c();return d=d===null?null:{parent:Gt._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&_i(t,null),Hc(),Eh(t),e!==null&&ao(e,t,o,!0),null}function Zi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function fd(e,t,n,o,d){return _r(t),n=Gc(e,t,n,o,void 0,d),o=Kc(),e!==null&&!ea?(Wc(e,t,d),Pn(e,t,d)):(at&&o&&jc(t),t.flags|=1,sa(e,t,n,d),t.child)}function Ih(e,t,n,o,d,h){return _r(t),t.updateQueue=null,n=Pp(t,o,n,d),_p(e),o=Kc(),e!==null&&!ea?(Wc(e,t,h),Pn(e,t,h)):(at&&o&&jc(t),t.flags|=1,sa(e,t,n,h),t.child)}function qh(e,t,n,o,d){if(_r(t),t.stateNode===null){var h=cs,w=n.contextType;typeof w=="object"&&w!==null&&(h=ga(w)),h=new n(o,h),t.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=dd,t.stateNode=h,h._reactInternals=t,h=t.stateNode,h.props=o,h.state=t.memoizedState,h.refs={},Fc(t),w=n.contextType,h.context=typeof w=="object"&&w!==null?ga(w):cs,h.state=t.memoizedState,w=n.getDerivedStateFromProps,typeof w=="function"&&(cd(t,n,w,o),h.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(w=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),w!==h.state&&dd.enqueueReplaceState(h,h.state,null),co(t,o,h,d),lo(),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308),o=!0}else if(e===null){h=t.stateNode;var A=t.memoizedProps,I=qr(n,A);h.props=I;var G=h.context,re=n.contextType;w=cs,typeof re=="object"&&re!==null&&(w=ga(re));var le=n.getDerivedStateFromProps;re=typeof le=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=t.pendingProps!==A,re||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||G!==w)&&Sh(t,h,o,w),Zn=!1;var K=t.memoizedState;h.state=K,co(t,o,h,d),lo(),G=t.memoizedState,A||K!==G||Zn?(typeof le=="function"&&(cd(t,n,le,o),G=t.memoizedState),(I=Zn||xh(t,n,I,o,K,G,w))?(re||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=G),h.props=o,h.state=G,h.context=w,o=I):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{h=t.stateNode,Bc(e,t),w=t.memoizedProps,re=qr(n,w),h.props=re,le=t.pendingProps,K=h.context,G=n.contextType,I=cs,typeof G=="object"&&G!==null&&(I=ga(G)),A=n.getDerivedStateFromProps,(G=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w!==le||K!==I)&&Sh(t,h,o,I),Zn=!1,K=t.memoizedState,h.state=K,co(t,o,h,d),lo();var W=t.memoizedState;w!==le||K!==W||Zn||e!==null&&e.dependencies!==null&&Li(e.dependencies)?(typeof A=="function"&&(cd(t,n,A,o),W=t.memoizedState),(re=Zn||xh(t,n,re,o,K,W,I)||e!==null&&e.dependencies!==null&&Li(e.dependencies))?(G||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,W,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,W,I)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=W),h.props=o,h.state=W,h.context=I,o=re):(typeof h.componentDidUpdate!="function"||w===e.memoizedProps&&K===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||w===e.memoizedProps&&K===e.memoizedState||(t.flags|=1024),o=!1)}return h=o,Zi(e,t),o=(t.flags&128)!==0,h||o?(h=t.stateNode,n=o&&typeof n.getDerivedStateFromError!="function"?null:h.render(),t.flags|=1,e!==null&&o?(t.child=vs(t,e.child,null,d),t.child=vs(t,null,n,d)):sa(e,t,n,d),t.memoizedState=h.state,e=t.child):e=Pn(e,t,d),e}function Mh(e,t,n,o){return eo(),t.flags|=256,sa(e,t,n,o),t.child}var pd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function hd(e){return{baseLanes:e,cachePool:Ap()}}function gd(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Za),e}function $h(e,t,n){var o=t.pendingProps,d=!1,h=(t.flags&128)!==0,w;if((w=h)||(w=e!==null&&e.memoizedState===null?!1:(Kt.current&2)!==0),w&&(d=!0,t.flags&=-129),w=(t.flags&32)!==0,t.flags&=-33,e===null){if(at){if(d?tr(t):ar(),at){var A=_t,I;if(I=A){e:{for(I=A,A=dn;I.nodeType!==8;){if(!A){A=null;break e}if(I=nn(I.nextSibling),I===null){A=null;break e}}A=I}A!==null?(t.memoizedState={dehydrated:A,treeContext:kr!==null?{id:kn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},I=Pa(18,null,null,0),I.stateNode=A,I.return=t,t.child=I,va=t,_t=null,I=!0):I=!1}I||Lr(t)}if(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Qd(A)?t.lanes=32:t.lanes=536870912,null;_n(t)}return A=o.children,o=o.fallback,d?(ar(),d=t.mode,A=Qi({mode:"hidden",children:A},d),o=Nr(o,d,n,null),A.return=t,o.return=t,A.sibling=o,t.child=A,d=t.child,d.memoizedState=hd(n),d.childLanes=gd(e,w,n),t.memoizedState=pd,o):(tr(t),md(t,A))}if(I=e.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(h)t.flags&256?(tr(t),t.flags&=-257,t=yd(e,t,n)):t.memoizedState!==null?(ar(),t.child=e.child,t.flags|=128,t=null):(ar(),d=o.fallback,A=t.mode,o=Qi({mode:"visible",children:o.children},A),d=Nr(d,A,n,null),d.flags|=2,o.return=t,d.return=t,o.sibling=d,t.child=o,vs(t,e.child,null,n),o=t.child,o.memoizedState=hd(n),o.childLanes=gd(e,w,n),t.memoizedState=pd,t=d);else if(tr(t),Qd(A)){if(w=A.nextSibling&&A.nextSibling.dataset,w)var G=w.dgst;w=G,o=Error(i(419)),o.stack="",o.digest=w,to({value:o,source:null,stack:null}),t=yd(e,t,n)}else if(ea||ao(e,t,n,!1),w=(n&e.childLanes)!==0,ea||w){if(w=xt,w!==null&&(o=n&-n,o=(o&42)!==0?1:Xn(o),o=(o&(w.suspendedLanes|n))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,ls(e,o),Ua(w,e,o),Rh;A.data==="$?"||Pd(),t=yd(e,t,n)}else A.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=I.treeContext,_t=nn(A.nextSibling),va=t,at=!0,jr=null,dn=!1,e!==null&&(Ga[Ka++]=kn,Ga[Ka++]=Rn,Ga[Ka++]=kr,kn=e.id,Rn=e.overflow,kr=t),t=md(t,o.children),t.flags|=4096);return t}return d?(ar(),d=o.fallback,A=t.mode,I=e.child,G=I.sibling,o=Nn(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,G!==null?d=Nn(G,d):(d=Nr(d,A,n,null),d.flags|=2),d.return=t,o.return=t,o.sibling=d,t.child=o,o=d,d=t.child,A=e.child.memoizedState,A===null?A=hd(n):(I=A.cachePool,I!==null?(G=Gt._currentValue,I=I.parent!==G?{parent:G,pool:G}:I):I=Ap(),A={baseLanes:A.baseLanes|n,cachePool:I}),d.memoizedState=A,d.childLanes=gd(e,w,n),t.memoizedState=pd,o):(tr(t),n=e.child,e=n.sibling,n=Nn(n,{mode:"visible",children:o.children}),n.return=t,n.sibling=null,e!==null&&(w=t.deletions,w===null?(t.deletions=[e],t.flags|=16):w.push(e)),t.child=n,t.memoizedState=null,n)}function md(e,t){return t=Qi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Qi(e,t){return e=Pa(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function yd(e,t,n){return vs(t,e.child,null,n),e=md(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uh(e,t,n){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),Pc(e.return,t,n)}function bd(e,t,n,o,d){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:n,tailMode:d}:(h.isBackwards=t,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=n,h.tailMode=d)}function Fh(e,t,n){var o=t.pendingProps,d=o.revealOrder,h=o.tail;if(sa(e,t,o.children,n),o=Kt.current,(o&2)!==0)o=o&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Uh(e,n,t);else if(e.tag===19)Uh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(V(Kt,o),d){case"forwards":for(n=t.child,d=null;n!==null;)e=n.alternate,e!==null&&Gi(e)===null&&(d=n),n=n.sibling;n=d,n===null?(d=t.child,t.child=null):(d=n.sibling,n.sibling=null),bd(t,!1,d,n,h);break;case"backwards":for(n=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Gi(e)===null){t.child=d;break}e=d.sibling,d.sibling=n,n=d,d=e}bd(t,!0,n,null,h);break;case"together":bd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ir|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(ao(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vd(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Li(e)))}function v0(e,t,n){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),Wn(t,Gt,e.memoizedState.cache),eo();break;case 27:case 5:nt(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:Wn(t,t.type,t.memoizedProps.value);break;case 13:var o=t.memoizedState;if(o!==null)return o.dehydrated!==null?(tr(t),t.flags|=128,null):(n&t.child.childLanes)!==0?$h(e,t,n):(tr(t),e=Pn(e,t,n),e!==null?e.sibling:null);tr(t);break;case 19:var d=(e.flags&128)!==0;if(o=(n&t.childLanes)!==0,o||(ao(e,t,n,!1),o=(n&t.childLanes)!==0),d){if(o)return Fh(e,t,n);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),V(Kt,Kt.current),o)break;return null;case 22:case 23:return t.lanes=0,_h(e,t,n);case 24:Wn(t,Gt,e.memoizedState.cache)}return Pn(e,t,n)}function Bh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ea=!0;else{if(!vd(e,n)&&(t.flags&128)===0)return ea=!1,v0(e,t,n);ea=(e.flags&131072)!==0}else ea=!1,at&&(t.flags&1048576)!==0&&bp(t,ji,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var o=t.elementType,d=o._init;if(o=d(o._payload),t.type=o,typeof o=="function")Nc(o)?(e=qr(o,e),t.tag=1,t=qh(null,t,o,e,n)):(t.tag=0,t=fd(null,t,o,e,n));else{if(o!=null){if(d=o.$$typeof,d===O){t.tag=11,t=jh(null,t,o,e,n);break e}else if(d===k){t.tag=14,t=Lh(null,t,o,e,n);break e}}throw t=fe(o)||o,Error(i(306,t,""))}}return t;case 0:return fd(e,t,t.type,t.pendingProps,n);case 1:return o=t.type,d=qr(o,t.pendingProps),qh(e,t,o,d,n);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(i(387));o=t.pendingProps;var h=t.memoizedState;d=h.element,Bc(e,t),co(t,o,null,n);var w=t.memoizedState;if(o=w.cache,Wn(t,Gt,o),o!==h.cache&&Ic(t,[Gt],n,!0),lo(),o=w.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:w.cache},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){t=Mh(e,t,o,n);break e}else if(o!==d){d=Va(Error(i(424)),t),to(d),t=Mh(e,t,o,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,_t=nn(e.firstChild),va=t,at=!0,jr=null,dn=!0,n=wh(t,null,o,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(eo(),o===d){t=Pn(e,t,n);break e}sa(e,t,o,n)}t=t.child}return t;case 26:return Zi(e,t),e===null?(n=Vg(t.type,null,t.pendingProps,null))?t.memoizedState=n:at||(n=t.type,e=t.pendingProps,o=fl(ve.current).createElement(n),o[Dt]=t,o[We]=e,ia(o,n,e),Xe(o),t.stateNode=o):t.memoizedState=Vg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return nt(t),e===null&&at&&(o=t.stateNode=zg(t.type,t.pendingProps,ve.current),va=t,dn=!0,d=_t,ur(t.type)?(Jd=d,_t=nn(o.firstChild)):_t=d),sa(e,t,t.pendingProps.children,n),Zi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&at&&((d=o=_t)&&(o=X0(o,t.type,t.pendingProps,dn),o!==null?(t.stateNode=o,va=t,_t=nn(o.firstChild),dn=!1,d=!0):d=!1),d||Lr(t)),nt(t),d=t.type,h=t.pendingProps,w=e!==null?e.memoizedProps:null,o=h.children,Kd(d,h)?o=null:w!==null&&Kd(d,w)&&(t.flags|=32),t.memoizedState!==null&&(d=Gc(e,t,u0,null,null,n),Lo._currentValue=d),Zi(e,t),sa(e,t,o,n),t.child;case 6:return e===null&&at&&((e=n=_t)&&(n=G0(n,t.pendingProps,dn),n!==null?(t.stateNode=n,va=t,_t=null,e=!0):e=!1),e||Lr(t)),null;case 13:return $h(e,t,n);case 4:return Le(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=vs(t,null,o,n):sa(e,t,o,n),t.child;case 11:return jh(e,t,t.type,t.pendingProps,n);case 7:return sa(e,t,t.pendingProps,n),t.child;case 8:return sa(e,t,t.pendingProps.children,n),t.child;case 12:return sa(e,t,t.pendingProps.children,n),t.child;case 10:return o=t.pendingProps,Wn(t,t.type,o.value),sa(e,t,o.children,n),t.child;case 9:return d=t.type._context,o=t.pendingProps.children,_r(t),d=ga(d),o=o(d),t.flags|=1,sa(e,t,o,n),t.child;case 14:return Lh(e,t,t.type,t.pendingProps,n);case 15:return Oh(e,t,t.type,t.pendingProps,n);case 19:return Fh(e,t,n);case 31:return o=t.pendingProps,n=t.mode,o={mode:o.mode,children:o.children},e===null?(n=Qi(o,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=Nn(e.child,o),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return _h(e,t,n);case 24:return _r(t),o=ga(Gt),e===null?(d=$c(),d===null&&(d=xt,h=qc(),d.pooledCache=h,h.refCount++,h!==null&&(d.pooledCacheLanes|=n),d=h),t.memoizedState={parent:o,cache:d},Fc(t),Wn(t,Gt,d)):((e.lanes&n)!==0&&(Bc(e,t),co(t,null,null,n),lo()),d=e.memoizedState,h=t.memoizedState,d.parent!==o?(d={parent:o,cache:o},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),Wn(t,Gt,o)):(o=h.cache,Wn(t,Gt,o),o!==d.cache&&Ic(t,[Gt],n,!0))),sa(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function In(e){e.flags|=4}function zh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zg(t)){if(t=Wa.current,t!==null&&((Ze&4194048)===Ze?un!==null:(Ze&62914560)!==Ze&&(Ze&536870912)===0||t!==un))throw oo=Uc,Dp;e.flags|=8192}}function Ji(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$t():536870912,e.lanes|=t,Ss|=t)}function yo(e,t){if(!at)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var o=null;n!==null;)n.alternate!==null&&(o=n),n=n.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,o=0;if(t)for(var d=e.child;d!==null;)n|=d.lanes|d.childLanes,o|=d.subtreeFlags&65011712,o|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)n|=d.lanes|d.childLanes,o|=d.subtreeFlags,o|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=o,e.childLanes=n,t}function w0(e,t,n){var o=t.pendingProps;switch(Lc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(t),null;case 1:return Lt(t),null;case 3:return n=t.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),t.memoizedState.cache!==o&&(t.flags|=2048),Ln(Gt),gt(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Js(t)?In(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ep())),Lt(t),null;case 26:return n=t.memoizedState,e===null?(In(t),n!==null?(Lt(t),zh(t,n)):(Lt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(In(t),Lt(t),zh(t,n)):(Lt(t),t.flags&=-16777217):(e.memoizedProps!==o&&In(t),Lt(t),t.flags&=-16777217),null;case 27:ot(t),n=ve.current;var d=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==o&&In(t);else{if(!o){if(t.stateNode===null)throw Error(i(166));return Lt(t),null}e=oe.current,Js(t)?vp(t):(e=zg(d,o,n),t.stateNode=e,In(t))}return Lt(t),null;case 5:if(ot(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==o&&In(t);else{if(!o){if(t.stateNode===null)throw Error(i(166));return Lt(t),null}if(e=oe.current,Js(t))vp(t);else{switch(d=fl(ve.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?d.createElement("select",{is:o.is}):d.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?d.createElement(n,{is:o.is}):d.createElement(n)}}e[Dt]=t,e[We]=o;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=e;e:switch(ia(e,n,o),n){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&In(t)}}return Lt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==o&&In(t);else{if(typeof o!="string"&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Js(t)){if(e=t.stateNode,n=t.memoizedProps,o=null,d=va,d!==null)switch(d.tag){case 27:case 5:o=d.memoizedProps}e[Dt]=t,e=!!(e.nodeValue===n||o!==null&&o.suppressHydrationWarning===!0||Ig(e.nodeValue,n)),e||Lr(t)}else e=fl(e).createTextNode(o),e[Dt]=t,t.stateNode=e}return Lt(t),null;case 13:if(o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Js(t),o!==null&&o.dehydrated!==null){if(e===null){if(!d)throw Error(i(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[Dt]=t}else eo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Lt(t),d=!1}else d=Ep(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(_n(t),t):(_n(t),null)}if(_n(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=o!==null,e=e!==null&&e.memoizedState!==null,n){o=t.child,d=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(d=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==d&&(o.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Ji(t,t.updateQueue),Lt(t),null;case 4:return gt(),e===null&&Yd(t.stateNode.containerInfo),Lt(t),null;case 10:return Ln(t.type),Lt(t),null;case 19:if(U(Kt),d=t.memoizedState,d===null)return Lt(t),null;if(o=(t.flags&128)!==0,h=d.rendering,h===null)if(o)yo(d,!1);else{if(Pt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=Gi(e),h!==null){for(t.flags|=128,yo(d,!1),e=h.updateQueue,t.updateQueue=e,Ji(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yp(n,e),n=n.sibling;return V(Kt,Kt.current&1|2),t.child}e=e.sibling}d.tail!==null&&ge()>al&&(t.flags|=128,o=!0,yo(d,!1),t.lanes=4194304)}else{if(!o)if(e=Gi(h),e!==null){if(t.flags|=128,o=!0,e=e.updateQueue,t.updateQueue=e,Ji(t,e),yo(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!at)return Lt(t),null}else 2*ge()-d.renderingStartTime>al&&n!==536870912&&(t.flags|=128,o=!0,yo(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(e=d.last,e!==null?e.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=ge(),t.sibling=null,e=Kt.current,V(Kt,o?e&1|2:e&1),t):(Lt(t),null);case 22:case 23:return _n(t),Vc(),o=t.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(t.flags|=8192):o&&(t.flags|=8192),o?(n&536870912)!==0&&(t.flags&128)===0&&(Lt(t),t.subtreeFlags&6&&(t.flags|=8192)):Lt(t),n=t.updateQueue,n!==null&&Ji(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),o=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(o=t.memoizedState.cachePool.pool),o!==n&&(t.flags|=2048),e!==null&&U(Pr),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ln(Gt),Lt(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function E0(e,t){switch(Lc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ln(Gt),gt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ot(t),null;case 13:if(_n(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));eo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Kt),null;case 4:return gt(),null;case 10:return Ln(t.type),null;case 22:case 23:return _n(t),Vc(),e!==null&&U(Pr),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ln(Gt),null;case 25:return null;default:return null}}function Yh(e,t){switch(Lc(t),t.tag){case 3:Ln(Gt),gt();break;case 26:case 27:case 5:ot(t);break;case 4:gt();break;case 13:_n(t);break;case 19:U(Kt);break;case 10:Ln(t.type);break;case 22:case 23:_n(t),Vc(),e!==null&&U(Pr);break;case 24:Ln(Gt)}}function bo(e,t){try{var n=t.updateQueue,o=n!==null?n.lastEffect:null;if(o!==null){var d=o.next;n=d;do{if((n.tag&e)===e){o=void 0;var h=n.create,w=n.inst;o=h(),w.destroy=o}n=n.next}while(n!==d)}}catch(A){bt(t,t.return,A)}}function nr(e,t,n){try{var o=t.updateQueue,d=o!==null?o.lastEffect:null;if(d!==null){var h=d.next;o=h;do{if((o.tag&e)===e){var w=o.inst,A=w.destroy;if(A!==void 0){w.destroy=void 0,d=t;var I=n,G=A;try{G()}catch(re){bt(d,I,re)}}}o=o.next}while(o!==h)}}catch(re){bt(t,t.return,re)}}function Hh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Lp(t,n)}catch(o){bt(e,e.return,o)}}}function Vh(e,t,n){n.props=qr(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(o){bt(e,t,o)}}function vo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof n=="function"?e.refCleanup=n(o):n.current=o}}catch(d){bt(e,t,d)}}function fn(e,t){var n=e.ref,o=e.refCleanup;if(n!==null)if(typeof o=="function")try{o()}catch(d){bt(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(d){bt(e,t,d)}else n.current=null}function Xh(e){var t=e.type,n=e.memoizedProps,o=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&o.focus();break e;case"img":n.src?o.src=n.src:n.srcSet&&(o.srcset=n.srcSet)}}catch(d){bt(e,e.return,d)}}function wd(e,t,n){try{var o=e.stateNode;B0(o,e.type,n,t),o[We]=t}catch(d){bt(e,e.return,d)}}function Gh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ur(e.type)||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ur(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xd(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ul));else if(o!==4&&(o===27&&ur(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(xd(e,t,n),e=e.sibling;e!==null;)xd(e,t,n),e=e.sibling}function el(e,t,n){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(o!==4&&(o===27&&ur(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function Kh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var o=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);ia(t,o,n),t[Dt]=e,t[We]=n}catch(h){bt(e,e.return,h)}}var qn=!1,Bt=!1,Sd=!1,Wh=typeof WeakSet=="function"?WeakSet:Set,ta=null;function x0(e,t){if(e=e.containerInfo,Xd=bl,e=ip(e),Ec(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var o=n.getSelection&&n.getSelection();if(o&&o.rangeCount!==0){n=o.anchorNode;var d=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{n.nodeType,h.nodeType}catch{n=null;break e}var w=0,A=-1,I=-1,G=0,re=0,le=e,K=null;t:for(;;){for(var W;le!==n||d!==0&&le.nodeType!==3||(A=w+d),le!==h||o!==0&&le.nodeType!==3||(I=w+o),le.nodeType===3&&(w+=le.nodeValue.length),(W=le.firstChild)!==null;)K=le,le=W;for(;;){if(le===e)break t;if(K===n&&++G===d&&(A=w),K===h&&++re===o&&(I=w),(W=le.nextSibling)!==null)break;le=K,K=le.parentNode}le=W}n=A===-1||I===-1?null:{start:A,end:I}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gd={focusedElem:e,selectionRange:n},bl=!1,ta=t;ta!==null;)if(t=ta,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,ta=e;else for(;ta!==null;){switch(t=ta,h=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,n=t,d=h.memoizedProps,h=h.memoizedState,o=n.stateNode;try{var Pe=qr(n.type,d,n.elementType===n.type);e=o.getSnapshotBeforeUpdate(Pe,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ke){bt(n,n.return,ke)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Zd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ta=e;break}ta=t.return}}function Zh(e,t,n){var o=n.flags;switch(n.tag){case 0:case 11:case 15:rr(e,n),o&4&&bo(5,n);break;case 1:if(rr(e,n),o&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(w){bt(n,n.return,w)}else{var d=qr(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(w){bt(n,n.return,w)}}o&64&&Hh(n),o&512&&vo(n,n.return);break;case 3:if(rr(e,n),o&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Lp(e,t)}catch(w){bt(n,n.return,w)}}break;case 27:t===null&&o&4&&Kh(n);case 26:case 5:rr(e,n),t===null&&o&4&&Xh(n),o&512&&vo(n,n.return);break;case 12:rr(e,n);break;case 13:rr(e,n),o&4&&eg(e,n),o&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=j0.bind(null,n),K0(e,n))));break;case 22:if(o=n.memoizedState!==null||qn,!o){t=t!==null&&t.memoizedState!==null||Bt,d=qn;var h=Bt;qn=o,(Bt=t)&&!h?sr(e,n,(n.subtreeFlags&8772)!==0):rr(e,n),qn=d,Bt=h}break;case 30:break;default:rr(e,n)}}function Qh(e){var t=e.alternate;t!==null&&(e.alternate=null,Qh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&we(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var kt=null,Ca=!1;function Mn(e,t,n){for(n=n.child;n!==null;)Jh(e,t,n),n=n.sibling}function Jh(e,t,n){if(be&&typeof be.onCommitFiberUnmount=="function")try{be.onCommitFiberUnmount(jt,n)}catch{}switch(n.tag){case 26:Bt||fn(n,t),Mn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Bt||fn(n,t);var o=kt,d=Ca;ur(n.type)&&(kt=n.stateNode,Ca=!1),Mn(e,t,n),No(n.stateNode),kt=o,Ca=d;break;case 5:Bt||fn(n,t);case 6:if(o=kt,d=Ca,kt=null,Mn(e,t,n),kt=o,Ca=d,kt!==null)if(Ca)try{(kt.nodeType===9?kt.body:kt.nodeName==="HTML"?kt.ownerDocument.body:kt).removeChild(n.stateNode)}catch(h){bt(n,t,h)}else try{kt.removeChild(n.stateNode)}catch(h){bt(n,t,h)}break;case 18:kt!==null&&(Ca?(e=kt,Fg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Io(e)):Fg(kt,n.stateNode));break;case 4:o=kt,d=Ca,kt=n.stateNode.containerInfo,Ca=!0,Mn(e,t,n),kt=o,Ca=d;break;case 0:case 11:case 14:case 15:Bt||nr(2,n,t),Bt||nr(4,n,t),Mn(e,t,n);break;case 1:Bt||(fn(n,t),o=n.stateNode,typeof o.componentWillUnmount=="function"&&Vh(n,t,o)),Mn(e,t,n);break;case 21:Mn(e,t,n);break;case 22:Bt=(o=Bt)||n.memoizedState!==null,Mn(e,t,n),Bt=o;break;default:Mn(e,t,n)}}function eg(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Io(e)}catch(n){bt(t,t.return,n)}}function S0(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Wh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Wh),t;default:throw Error(i(435,e.tag))}}function Td(e,t){var n=S0(e);t.forEach(function(o){var d=L0.bind(null,e,o);n.has(o)||(n.add(o),o.then(d,d))})}function Ia(e,t){var n=t.deletions;if(n!==null)for(var o=0;o<n.length;o++){var d=n[o],h=e,w=t,A=w;e:for(;A!==null;){switch(A.tag){case 27:if(ur(A.type)){kt=A.stateNode,Ca=!1;break e}break;case 5:kt=A.stateNode,Ca=!1;break e;case 3:case 4:kt=A.stateNode.containerInfo,Ca=!0;break e}A=A.return}if(kt===null)throw Error(i(160));Jh(h,w,d),kt=null,Ca=!1,h=d.alternate,h!==null&&(h.return=null),d.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)tg(t,e),t=t.sibling}var an=null;function tg(e,t){var n=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ia(t,e),qa(e),o&4&&(nr(3,e,e.return),bo(3,e),nr(5,e,e.return));break;case 1:Ia(t,e),qa(e),o&512&&(Bt||n===null||fn(n,n.return)),o&64&&qn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?o:n.concat(o))));break;case 26:var d=an;if(Ia(t,e),qa(e),o&512&&(Bt||n===null||fn(n,n.return)),o&4){var h=n!==null?n.memoizedState:null;if(o=e.memoizedState,n===null)if(o===null)if(e.stateNode===null){e:{o=e.type,n=e.memoizedProps,d=d.ownerDocument||d;t:switch(o){case"title":h=d.getElementsByTagName("title")[0],(!h||h[ne]||h[Dt]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=d.createElement(o),d.head.insertBefore(h,d.querySelector("head > title"))),ia(h,o,n),h[Dt]=e,Xe(h),o=h;break e;case"link":var w=Kg("link","href",d).get(o+(n.href||""));if(w){for(var A=0;A<w.length;A++)if(h=w[A],h.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&h.getAttribute("rel")===(n.rel==null?null:n.rel)&&h.getAttribute("title")===(n.title==null?null:n.title)&&h.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){w.splice(A,1);break t}}h=d.createElement(o),ia(h,o,n),d.head.appendChild(h);break;case"meta":if(w=Kg("meta","content",d).get(o+(n.content||""))){for(A=0;A<w.length;A++)if(h=w[A],h.getAttribute("content")===(n.content==null?null:""+n.content)&&h.getAttribute("name")===(n.name==null?null:n.name)&&h.getAttribute("property")===(n.property==null?null:n.property)&&h.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&h.getAttribute("charset")===(n.charSet==null?null:n.charSet)){w.splice(A,1);break t}}h=d.createElement(o),ia(h,o,n),d.head.appendChild(h);break;default:throw Error(i(468,o))}h[Dt]=e,Xe(h),o=h}e.stateNode=o}else Wg(d,e.type,e.stateNode);else e.stateNode=Gg(d,o,e.memoizedProps);else h!==o?(h===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):h.count--,o===null?Wg(d,e.type,e.stateNode):Gg(d,o,e.memoizedProps)):o===null&&e.stateNode!==null&&wd(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ia(t,e),qa(e),o&512&&(Bt||n===null||fn(n,n.return)),n!==null&&o&4&&wd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ia(t,e),qa(e),o&512&&(Bt||n===null||fn(n,n.return)),e.flags&32){d=e.stateNode;try{ts(d,"")}catch(W){bt(e,e.return,W)}}o&4&&e.stateNode!=null&&(d=e.memoizedProps,wd(e,d,n!==null?n.memoizedProps:d)),o&1024&&(Sd=!0);break;case 6:if(Ia(t,e),qa(e),o&4){if(e.stateNode===null)throw Error(i(162));o=e.memoizedProps,n=e.stateNode;try{n.nodeValue=o}catch(W){bt(e,e.return,W)}}break;case 3:if(gl=null,d=an,an=pl(t.containerInfo),Ia(t,e),an=d,qa(e),o&4&&n!==null&&n.memoizedState.isDehydrated)try{Io(t.containerInfo)}catch(W){bt(e,e.return,W)}Sd&&(Sd=!1,ag(e));break;case 4:o=an,an=pl(e.stateNode.containerInfo),Ia(t,e),qa(e),an=o;break;case 12:Ia(t,e),qa(e);break;case 13:Ia(t,e),qa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Rd=ge()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Td(e,o)));break;case 22:d=e.memoizedState!==null;var I=n!==null&&n.memoizedState!==null,G=qn,re=Bt;if(qn=G||d,Bt=re||I,Ia(t,e),Bt=re,qn=G,qa(e),o&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(n===null||I||qn||Bt||Mr(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){I=n=t;try{if(h=I.stateNode,d)w=h.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none";else{A=I.stateNode;var le=I.memoizedProps.style,K=le!=null&&le.hasOwnProperty("display")?le.display:null;A.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(W){bt(I,I.return,W)}}}else if(t.tag===6){if(n===null){I=t;try{I.stateNode.nodeValue=d?"":I.memoizedProps}catch(W){bt(I,I.return,W)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}o&4&&(o=e.updateQueue,o!==null&&(n=o.retryQueue,n!==null&&(o.retryQueue=null,Td(e,n))));break;case 19:Ia(t,e),qa(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Td(e,o)));break;case 30:break;case 21:break;default:Ia(t,e),qa(e)}}function qa(e){var t=e.flags;if(t&2){try{for(var n,o=e.return;o!==null;){if(Gh(o)){n=o;break}o=o.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var d=n.stateNode,h=Ed(e);el(e,h,d);break;case 5:var w=n.stateNode;n.flags&32&&(ts(w,""),n.flags&=-33);var A=Ed(e);el(e,A,w);break;case 3:case 4:var I=n.stateNode.containerInfo,G=Ed(e);xd(e,G,I);break;default:throw Error(i(161))}}catch(re){bt(e,e.return,re)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ag(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ag(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function rr(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zh(e,t.alternate,t),t=t.sibling}function Mr(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:nr(4,t,t.return),Mr(t);break;case 1:fn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Vh(t,t.return,n),Mr(t);break;case 27:No(t.stateNode);case 26:case 5:fn(t,t.return),Mr(t);break;case 22:t.memoizedState===null&&Mr(t);break;case 30:Mr(t);break;default:Mr(t)}e=e.sibling}}function sr(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var o=t.alternate,d=e,h=t,w=h.flags;switch(h.tag){case 0:case 11:case 15:sr(d,h,n),bo(4,h);break;case 1:if(sr(d,h,n),o=h,d=o.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(G){bt(o,o.return,G)}if(o=h,d=o.updateQueue,d!==null){var A=o.stateNode;try{var I=d.shared.hiddenCallbacks;if(I!==null)for(d.shared.hiddenCallbacks=null,d=0;d<I.length;d++)jp(I[d],A)}catch(G){bt(o,o.return,G)}}n&&w&64&&Hh(h),vo(h,h.return);break;case 27:Kh(h);case 26:case 5:sr(d,h,n),n&&o===null&&w&4&&Xh(h),vo(h,h.return);break;case 12:sr(d,h,n);break;case 13:sr(d,h,n),n&&w&4&&eg(d,h);break;case 22:h.memoizedState===null&&sr(d,h,n),vo(h,h.return);break;case 30:break;default:sr(d,h,n)}t=t.sibling}}function Ad(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&no(n))}function Dd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&no(e))}function pn(e,t,n,o){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ng(e,t,n,o),t=t.sibling}function ng(e,t,n,o){var d=t.flags;switch(t.tag){case 0:case 11:case 15:pn(e,t,n,o),d&2048&&bo(9,t);break;case 1:pn(e,t,n,o);break;case 3:pn(e,t,n,o),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&no(e)));break;case 12:if(d&2048){pn(e,t,n,o),e=t.stateNode;try{var h=t.memoizedProps,w=h.id,A=h.onPostCommit;typeof A=="function"&&A(w,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){bt(t,t.return,I)}}else pn(e,t,n,o);break;case 13:pn(e,t,n,o);break;case 23:break;case 22:h=t.stateNode,w=t.alternate,t.memoizedState!==null?h._visibility&2?pn(e,t,n,o):wo(e,t):h._visibility&2?pn(e,t,n,o):(h._visibility|=2,ws(e,t,n,o,(t.subtreeFlags&10256)!==0)),d&2048&&Ad(w,t);break;case 24:pn(e,t,n,o),d&2048&&Dd(t.alternate,t);break;default:pn(e,t,n,o)}}function ws(e,t,n,o,d){for(d=d&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var h=e,w=t,A=n,I=o,G=w.flags;switch(w.tag){case 0:case 11:case 15:ws(h,w,A,I,d),bo(8,w);break;case 23:break;case 22:var re=w.stateNode;w.memoizedState!==null?re._visibility&2?ws(h,w,A,I,d):wo(h,w):(re._visibility|=2,ws(h,w,A,I,d)),d&&G&2048&&Ad(w.alternate,w);break;case 24:ws(h,w,A,I,d),d&&G&2048&&Dd(w.alternate,w);break;default:ws(h,w,A,I,d)}t=t.sibling}}function wo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,o=t,d=o.flags;switch(o.tag){case 22:wo(n,o),d&2048&&Ad(o.alternate,o);break;case 24:wo(n,o),d&2048&&Dd(o.alternate,o);break;default:wo(n,o)}t=t.sibling}}var Eo=8192;function Es(e){if(e.subtreeFlags&Eo)for(e=e.child;e!==null;)rg(e),e=e.sibling}function rg(e){switch(e.tag){case 26:Es(e),e.flags&Eo&&e.memoizedState!==null&&lw(an,e.memoizedState,e.memoizedProps);break;case 5:Es(e);break;case 3:case 4:var t=an;an=pl(e.stateNode.containerInfo),Es(e),an=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=Eo,Eo=16777216,Es(e),Eo=t):Es(e));break;default:Es(e)}}function sg(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function xo(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];ta=o,ig(o,e)}sg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)og(e),e=e.sibling}function og(e){switch(e.tag){case 0:case 11:case 15:xo(e),e.flags&2048&&nr(9,e,e.return);break;case 3:xo(e);break;case 12:xo(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,tl(e)):xo(e);break;default:xo(e)}}function tl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var o=t[n];ta=o,ig(o,e)}sg(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:nr(8,t,t.return),tl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,tl(t));break;default:tl(t)}e=e.sibling}}function ig(e,t){for(;ta!==null;){var n=ta;switch(n.tag){case 0:case 11:case 15:nr(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var o=n.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:no(n.memoizedState.cache)}if(o=n.child,o!==null)o.return=n,ta=o;else e:for(n=e;ta!==null;){o=ta;var d=o.sibling,h=o.return;if(Qh(o),o===n){ta=null;break e}if(d!==null){d.return=h,ta=d;break e}ta=h}}}var T0={getCacheForType:function(e){var t=ga(Gt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},A0=typeof WeakMap=="function"?WeakMap:Map,it=0,xt=null,Ye=null,Ze=0,lt=0,Ma=null,or=!1,xs=!1,Cd=!1,$n=0,Pt=0,ir=0,$r=0,Nd=0,Za=0,Ss=0,So=null,Na=null,kd=!1,Rd=0,al=1/0,nl=null,lr=null,oa=0,cr=null,Ts=null,As=0,jd=0,Ld=null,lg=null,To=0,Od=null;function $a(){if((it&2)!==0&&Ze!==0)return Ze&-Ze;if(z.T!==null){var e=fs;return e!==0?e:Ud()}return Sn()}function cg(){Za===0&&(Za=(Ze&536870912)===0||at?Ot():536870912);var e=Wa.current;return e!==null&&(e.flags|=32),Za}function Ua(e,t,n){(e===xt&&(lt===2||lt===9)||e.cancelPendingCommit!==null)&&(Ds(e,0),dr(e,Ze,Za,!1)),La(e,n),((it&2)===0||e!==xt)&&(e===xt&&((it&2)===0&&($r|=n),Pt===4&&dr(e,Ze,Za,!1)),hn(e))}function dg(e,t,n){if((it&6)!==0)throw Error(i(327));var o=!n&&(t&124)===0&&(t&e.expiredLanes)===0||ja(e,t),d=o?N0(e,t):Id(e,t,!0),h=o;do{if(d===0){xs&&!o&&dr(e,t,0,!1);break}else{if(n=e.current.alternate,h&&!D0(n)){d=Id(e,t,!1),h=!1;continue}if(d===2){if(h=t,e.errorRecoveryDisabledLanes&h)var w=0;else w=e.pendingLanes&-536870913,w=w!==0?w:w&536870912?536870912:0;if(w!==0){t=w;e:{var A=e;d=So;var I=A.current.memoizedState.isDehydrated;if(I&&(Ds(A,w).flags|=256),w=Id(A,w,!1),w!==2){if(Cd&&!I){A.errorRecoveryDisabledLanes|=h,$r|=h,d=4;break e}h=Na,Na=d,h!==null&&(Na===null?Na=h:Na.push.apply(Na,h))}d=w}if(h=!1,d!==2)continue}}if(d===1){Ds(e,0),dr(e,t,0,!0);break}e:{switch(o=e,h=d,h){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:dr(o,t,Za,!or);break e;case 2:Na=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(d=Rd+300-ge(),10<d)){if(dr(o,t,Za,!or),Mt(o,0,!0)!==0)break e;o.timeoutHandle=$g(ug.bind(null,o,n,Na,nl,kd,t,Za,$r,Ss,or,h,2,-0,0),d);break e}ug(o,n,Na,nl,kd,t,Za,$r,Ss,or,h,0,-0,0)}}break}while(!0);hn(e)}function ug(e,t,n,o,d,h,w,A,I,G,re,le,K,W){if(e.timeoutHandle=-1,le=t.subtreeFlags,(le&8192||(le&16785408)===16785408)&&(jo={stylesheets:null,count:0,unsuspend:iw},rg(t),le=cw(),le!==null)){e.cancelPendingCommit=le(bg.bind(null,e,t,h,n,o,d,w,A,I,re,1,K,W)),dr(e,h,w,!G);return}bg(e,t,h,n,o,d,w,A,I)}function D0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var o=0;o<n.length;o++){var d=n[o],h=d.getSnapshot;d=d.value;try{if(!_a(h(),d))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function dr(e,t,n,o){t&=~Nd,t&=~$r,e.suspendedLanes|=t,e.pingedLanes&=~t,o&&(e.warmLanes|=t),o=e.expirationTimes;for(var d=t;0<d;){var h=31-rt(d),w=1<<h;o[h]=-1,d&=~w}n!==0&&cn(e,n,t)}function rl(){return(it&6)===0?(Ao(0),!1):!0}function _d(){if(Ye!==null){if(lt===0)var e=Ye.return;else e=Ye,jn=Or=null,Zc(e),bs=null,go=0,e=Ye;for(;e!==null;)Yh(e.alternate,e),e=e.return;Ye=null}}function Ds(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Y0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),_d(),xt=e,Ye=n=Nn(e.current,null),Ze=t,lt=0,Ma=null,or=!1,xs=ja(e,t),Cd=!1,Ss=Za=Nd=$r=ir=Pt=0,Na=So=null,kd=!1,(t&8)!==0&&(t|=t&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=t;0<o;){var d=31-rt(o),h=1<<d;t|=e[d],o&=~h}return $n=t,Di(),n}function fg(e,t){Fe=null,z.H=Hi,t===so||t===Pi?(t=kp(),lt=3):t===Dp?(t=kp(),lt=4):lt=t===Rh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ma=t,Ye===null&&(Pt=1,Wi(e,Va(t,e.current)))}function pg(){var e=z.H;return z.H=Hi,e===null?Hi:e}function hg(){var e=z.A;return z.A=T0,e}function Pd(){Pt=4,or||(Ze&4194048)!==Ze&&Wa.current!==null||(xs=!0),(ir&134217727)===0&&($r&134217727)===0||xt===null||dr(xt,Ze,Za,!1)}function Id(e,t,n){var o=it;it|=2;var d=pg(),h=hg();(xt!==e||Ze!==t)&&(nl=null,Ds(e,t)),t=!1;var w=Pt;e:do try{if(lt!==0&&Ye!==null){var A=Ye,I=Ma;switch(lt){case 8:_d(),w=6;break e;case 3:case 2:case 9:case 6:Wa.current===null&&(t=!0);var G=lt;if(lt=0,Ma=null,Cs(e,A,I,G),n&&xs){w=0;break e}break;default:G=lt,lt=0,Ma=null,Cs(e,A,I,G)}}C0(),w=Pt;break}catch(re){fg(e,re)}while(!0);return t&&e.shellSuspendCounter++,jn=Or=null,it=o,z.H=d,z.A=h,Ye===null&&(xt=null,Ze=0,Di()),w}function C0(){for(;Ye!==null;)gg(Ye)}function N0(e,t){var n=it;it|=2;var o=pg(),d=hg();xt!==e||Ze!==t?(nl=null,al=ge()+500,Ds(e,t)):xs=ja(e,t);e:do try{if(lt!==0&&Ye!==null){t=Ye;var h=Ma;t:switch(lt){case 1:lt=0,Ma=null,Cs(e,t,h,1);break;case 2:case 9:if(Cp(h)){lt=0,Ma=null,mg(t);break}t=function(){lt!==2&&lt!==9||xt!==e||(lt=7),hn(e)},h.then(t,t);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:Cp(h)?(lt=0,Ma=null,mg(t)):(lt=0,Ma=null,Cs(e,t,h,7));break;case 5:var w=null;switch(Ye.tag){case 26:w=Ye.memoizedState;case 5:case 27:var A=Ye;if(!w||Zg(w)){lt=0,Ma=null;var I=A.sibling;if(I!==null)Ye=I;else{var G=A.return;G!==null?(Ye=G,sl(G)):Ye=null}break t}}lt=0,Ma=null,Cs(e,t,h,5);break;case 6:lt=0,Ma=null,Cs(e,t,h,6);break;case 8:_d(),Pt=6;break e;default:throw Error(i(462))}}k0();break}catch(re){fg(e,re)}while(!0);return jn=Or=null,z.H=o,z.A=d,it=n,Ye!==null?0:(xt=null,Ze=0,Di(),Pt)}function k0(){for(;Ye!==null&&!F();)gg(Ye)}function gg(e){var t=Bh(e.alternate,e,$n);e.memoizedProps=e.pendingProps,t===null?sl(e):Ye=t}function mg(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ih(n,t,t.pendingProps,t.type,void 0,Ze);break;case 11:t=Ih(n,t,t.pendingProps,t.type.render,t.ref,Ze);break;case 5:Zc(t);default:Yh(n,t),t=Ye=yp(t,$n),t=Bh(n,t,$n)}e.memoizedProps=e.pendingProps,t===null?sl(e):Ye=t}function Cs(e,t,n,o){jn=Or=null,Zc(t),bs=null,go=0;var d=t.return;try{if(b0(e,d,t,n,Ze)){Pt=1,Wi(e,Va(n,e.current)),Ye=null;return}}catch(h){if(d!==null)throw Ye=d,h;Pt=1,Wi(e,Va(n,e.current)),Ye=null;return}t.flags&32768?(at||o===1?e=!0:xs||(Ze&536870912)!==0?e=!1:(or=e=!0,(o===2||o===9||o===3||o===6)&&(o=Wa.current,o!==null&&o.tag===13&&(o.flags|=16384))),yg(t,e)):sl(t)}function sl(e){var t=e;do{if((t.flags&32768)!==0){yg(t,or);return}e=t.return;var n=w0(t.alternate,t,$n);if(n!==null){Ye=n;return}if(t=t.sibling,t!==null){Ye=t;return}Ye=t=e}while(t!==null);Pt===0&&(Pt=5)}function yg(e,t){do{var n=E0(e.alternate,e);if(n!==null){n.flags&=32767,Ye=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ye=e;return}Ye=e=n}while(e!==null);Pt=6,Ye=null}function bg(e,t,n,o,d,h,w,A,I){e.cancelPendingCommit=null;do ol();while(oa!==0);if((it&6)!==0)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(h=t.lanes|t.childLanes,h|=Dc,ra(e,n,h,w,A,I),e===xt&&(Ye=xt=null,Ze=0),Ts=t,cr=e,As=n,jd=h,Ld=d,lg=o,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,O0(ye,function(){return Sg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,d=Z.p,Z.p=2,w=it,it|=4;try{x0(e,t,n)}finally{it=w,Z.p=d,z.T=o}}oa=1,vg(),wg(),Eg()}}function vg(){if(oa===1){oa=0;var e=cr,t=Ts,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=z.T,z.T=null;var o=Z.p;Z.p=2;var d=it;it|=4;try{tg(t,e);var h=Gd,w=ip(e.containerInfo),A=h.focusedElem,I=h.selectionRange;if(w!==A&&A&&A.ownerDocument&&op(A.ownerDocument.documentElement,A)){if(I!==null&&Ec(A)){var G=I.start,re=I.end;if(re===void 0&&(re=G),"selectionStart"in A)A.selectionStart=G,A.selectionEnd=Math.min(re,A.value.length);else{var le=A.ownerDocument||document,K=le&&le.defaultView||window;if(K.getSelection){var W=K.getSelection(),Pe=A.textContent.length,ke=Math.min(I.start,Pe),ht=I.end===void 0?ke:Math.min(I.end,Pe);!W.extend&&ke>ht&&(w=ht,ht=ke,ke=w);var Y=sp(A,ke),$=sp(A,ht);if(Y&&$&&(W.rangeCount!==1||W.anchorNode!==Y.node||W.anchorOffset!==Y.offset||W.focusNode!==$.node||W.focusOffset!==$.offset)){var X=le.createRange();X.setStart(Y.node,Y.offset),W.removeAllRanges(),ke>ht?(W.addRange(X),W.extend($.node,$.offset)):(X.setEnd($.node,$.offset),W.addRange(X))}}}}for(le=[],W=A;W=W.parentNode;)W.nodeType===1&&le.push({element:W,left:W.scrollLeft,top:W.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<le.length;A++){var ie=le[A];ie.element.scrollLeft=ie.left,ie.element.scrollTop=ie.top}}bl=!!Xd,Gd=Xd=null}finally{it=d,Z.p=o,z.T=n}}e.current=t,oa=2}}function wg(){if(oa===2){oa=0;var e=cr,t=Ts,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=z.T,z.T=null;var o=Z.p;Z.p=2;var d=it;it|=4;try{Zh(e,t.alternate,t)}finally{it=d,Z.p=o,z.T=n}}oa=3}}function Eg(){if(oa===4||oa===3){oa=0,ue();var e=cr,t=Ts,n=As,o=lg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?oa=5:(oa=0,Ts=cr=null,xg(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(lr=null),Oa(n),t=t.stateNode,be&&typeof be.onCommitFiberRoot=="function")try{be.onCommitFiberRoot(jt,t,void 0,(t.current.flags&128)===128)}catch{}if(o!==null){t=z.T,d=Z.p,Z.p=2,z.T=null;try{for(var h=e.onRecoverableError,w=0;w<o.length;w++){var A=o[w];h(A.value,{componentStack:A.stack})}}finally{z.T=t,Z.p=d}}(As&3)!==0&&ol(),hn(e),d=e.pendingLanes,(n&4194090)!==0&&(d&42)!==0?e===Od?To++:(To=0,Od=e):To=0,Ao(0)}}function xg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,no(t)))}function ol(e){return vg(),wg(),Eg(),Sg()}function Sg(){if(oa!==5)return!1;var e=cr,t=jd;jd=0;var n=Oa(As),o=z.T,d=Z.p;try{Z.p=32>n?32:n,z.T=null,n=Ld,Ld=null;var h=cr,w=As;if(oa=0,Ts=cr=null,As=0,(it&6)!==0)throw Error(i(331));var A=it;if(it|=4,og(h.current),ng(h,h.current,w,n),it=A,Ao(0,!1),be&&typeof be.onPostCommitFiberRoot=="function")try{be.onPostCommitFiberRoot(jt,h)}catch{}return!0}finally{Z.p=d,z.T=o,xg(e,t)}}function Tg(e,t,n){t=Va(n,t),t=ud(e.stateNode,t,2),e=Jn(e,t,2),e!==null&&(La(e,2),hn(e))}function bt(e,t,n){if(e.tag===3)Tg(e,e,n);else for(;t!==null;){if(t.tag===3){Tg(t,e,n);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(lr===null||!lr.has(o))){e=Va(n,e),n=Nh(2),o=Jn(t,n,2),o!==null&&(kh(n,o,t,e),La(o,2),hn(o));break}}t=t.return}}function qd(e,t,n){var o=e.pingCache;if(o===null){o=e.pingCache=new A0;var d=new Set;o.set(t,d)}else d=o.get(t),d===void 0&&(d=new Set,o.set(t,d));d.has(n)||(Cd=!0,d.add(n),e=R0.bind(null,e,t,n),t.then(e,e))}function R0(e,t,n){var o=e.pingCache;o!==null&&o.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,xt===e&&(Ze&n)===n&&(Pt===4||Pt===3&&(Ze&62914560)===Ze&&300>ge()-Rd?(it&2)===0&&Ds(e,0):Nd|=n,Ss===Ze&&(Ss=0)),hn(e)}function Ag(e,t){t===0&&(t=$t()),e=ls(e,t),e!==null&&(La(e,t),hn(e))}function j0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ag(e,n)}function L0(e,t){var n=0;switch(e.tag){case 13:var o=e.stateNode,d=e.memoizedState;d!==null&&(n=d.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(i(314))}o!==null&&o.delete(t),Ag(e,n)}function O0(e,t){return qt(e,t)}var il=null,Ns=null,Md=!1,ll=!1,$d=!1,Ur=0;function hn(e){e!==Ns&&e.next===null&&(Ns===null?il=Ns=e:Ns=Ns.next=e),ll=!0,Md||(Md=!0,P0())}function Ao(e,t){if(!$d&&ll){$d=!0;do for(var n=!1,o=il;o!==null;){if(e!==0){var d=o.pendingLanes;if(d===0)var h=0;else{var w=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-rt(42|e)+1)-1,h&=d&~(w&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(n=!0,kg(o,h))}else h=Ze,h=Mt(o,o===xt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ja(o,h)||(n=!0,kg(o,h));o=o.next}while(n);$d=!1}}function _0(){Dg()}function Dg(){ll=Md=!1;var e=0;Ur!==0&&(z0()&&(e=Ur),Ur=0);for(var t=ge(),n=null,o=il;o!==null;){var d=o.next,h=Cg(o,t);h===0?(o.next=null,n===null?il=d:n.next=d,d===null&&(Ns=n)):(n=o,(e!==0||(h&3)!==0)&&(ll=!0)),o=d}Ao(e)}function Cg(e,t){for(var n=e.suspendedLanes,o=e.pingedLanes,d=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var w=31-rt(h),A=1<<w,I=d[w];I===-1?((A&n)===0||(A&o)!==0)&&(d[w]=ut(A,t)):I<=t&&(e.expiredLanes|=A),h&=~A}if(t=xt,n=Ze,n=Mt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,n===0||e===t&&(lt===2||lt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&mt(o),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ja(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(o!==null&&mt(o),Oa(n)){case 2:case 8:n=Ce;break;case 32:n=ye;break;case 268435456:n=Qe;break;default:n=ye}return o=Ng.bind(null,e),n=qt(n,o),e.callbackPriority=t,e.callbackNode=n,t}return o!==null&&o!==null&&mt(o),e.callbackPriority=2,e.callbackNode=null,2}function Ng(e,t){if(oa!==0&&oa!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(ol()&&e.callbackNode!==n)return null;var o=Ze;return o=Mt(e,e===xt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(dg(e,o,t),Cg(e,ge()),e.callbackNode!=null&&e.callbackNode===n?Ng.bind(null,e):null)}function kg(e,t){if(ol())return null;dg(e,t,!0)}function P0(){H0(function(){(it&6)!==0?qt(pe,_0):Dg()})}function Ud(){return Ur===0&&(Ur=Ot()),Ur}function Rg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vi(""+e)}function jg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function I0(e,t,n,o,d){if(t==="submit"&&n&&n.stateNode===d){var h=Rg((d[We]||null).action),w=o.submitter;w&&(t=(t=w[We]||null)?Rg(t.formAction):w.getAttribute("formAction"),t!==null&&(h=t,w=null));var A=new Si("action","action",null,o,d);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ur!==0){var I=w?jg(d,w):new FormData(d);od(n,{pending:!0,data:I,method:d.method,action:h},null,I)}}else typeof h=="function"&&(A.preventDefault(),I=w?jg(d,w):new FormData(d),od(n,{pending:!0,data:I,method:d.method,action:h},h,I))},currentTarget:d}]})}}for(var Fd=0;Fd<Ac.length;Fd++){var Bd=Ac[Fd],q0=Bd.toLowerCase(),M0=Bd[0].toUpperCase()+Bd.slice(1);tn(q0,"on"+M0)}tn(dp,"onAnimationEnd"),tn(up,"onAnimationIteration"),tn(fp,"onAnimationStart"),tn("dblclick","onDoubleClick"),tn("focusin","onFocus"),tn("focusout","onBlur"),tn(t0,"onTransitionRun"),tn(a0,"onTransitionStart"),tn(n0,"onTransitionCancel"),tn(pp,"onTransitionEnd"),ba("onMouseEnter",["mouseout","mouseover"]),ba("onMouseLeave",["mouseout","mouseover"]),ba("onPointerEnter",["pointerout","pointerover"]),ba("onPointerLeave",["pointerout","pointerover"]),Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function Lg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var o=e[n],d=o.event;o=o.listeners;e:{var h=void 0;if(t)for(var w=o.length-1;0<=w;w--){var A=o[w],I=A.instance,G=A.currentTarget;if(A=A.listener,I!==h&&d.isPropagationStopped())break e;h=A,d.currentTarget=G;try{h(d)}catch(re){Ki(re)}d.currentTarget=null,h=I}else for(w=0;w<o.length;w++){if(A=o[w],I=A.instance,G=A.currentTarget,A=A.listener,I!==h&&d.isPropagationStopped())break e;h=A,d.currentTarget=G;try{h(d)}catch(re){Ki(re)}d.currentTarget=null,h=I}}}}function He(e,t){var n=t[Q];n===void 0&&(n=t[Q]=new Set);var o=e+"__bubble";n.has(o)||(Og(t,e,2,!1),n.add(o))}function zd(e,t,n){var o=0;t&&(o|=4),Og(n,e,o,t)}var cl="_reactListening"+Math.random().toString(36).slice(2);function Yd(e){if(!e[cl]){e[cl]=!0,ha.forEach(function(n){n!=="selectionchange"&&($0.has(n)||zd(n,!1,e),zd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cl]||(t[cl]=!0,zd("selectionchange",!1,t))}}function Og(e,t,n,o){switch(nm(t)){case 2:var d=fw;break;case 8:d=pw;break;default:d=ru}n=d.bind(null,t,n,e),d=void 0,!fc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),o?d!==void 0?e.addEventListener(t,n,{capture:!0,passive:d}):e.addEventListener(t,n,!0):d!==void 0?e.addEventListener(t,n,{passive:d}):e.addEventListener(t,n,!1)}function Hd(e,t,n,o,d){var h=o;if((t&1)===0&&(t&2)===0&&o!==null)e:for(;;){if(o===null)return;var w=o.tag;if(w===3||w===4){var A=o.stateNode.containerInfo;if(A===d)break;if(w===4)for(w=o.return;w!==null;){var I=w.tag;if((I===3||I===4)&&w.stateNode.containerInfo===d)return;w=w.return}for(;A!==null;){if(w=xe(A),w===null)return;if(I=w.tag,I===5||I===6||I===26||I===27){o=h=w;continue e}A=A.parentNode}}o=o.return}Uf(function(){var G=h,re=dc(n),le=[];e:{var K=hp.get(e);if(K!==void 0){var W=Si,Pe=e;switch(e){case"keypress":if(Ei(n)===0)break e;case"keydown":case"keyup":W=Ov;break;case"focusin":Pe="focus",W=mc;break;case"focusout":Pe="blur",W=mc;break;case"beforeblur":case"afterblur":W=mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":W=zf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":W=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":W=Iv;break;case dp:case up:case fp:W=Tv;break;case pp:W=Mv;break;case"scroll":case"scrollend":W=vv;break;case"wheel":W=Uv;break;case"copy":case"cut":case"paste":W=Dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":W=Hf;break;case"toggle":case"beforetoggle":W=Bv}var ke=(t&4)!==0,ht=!ke&&(e==="scroll"||e==="scrollend"),Y=ke?K!==null?K+"Capture":null:K;ke=[];for(var $=G,X;$!==null;){var ie=$;if(X=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||X===null||Y===null||(ie=Ys($,Y),ie!=null&&ke.push(Co($,ie,X))),ht)break;$=$.return}0<ke.length&&(K=new W(K,Pe,null,n,re),le.push({event:K,listeners:ke}))}}if((t&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",W=e==="mouseout"||e==="pointerout",K&&n!==cc&&(Pe=n.relatedTarget||n.fromElement)&&(xe(Pe)||Pe[j]))break e;if((W||K)&&(K=re.window===re?re:(K=re.ownerDocument)?K.defaultView||K.parentWindow:window,W?(Pe=n.relatedTarget||n.toElement,W=G,Pe=Pe?xe(Pe):null,Pe!==null&&(ht=u(Pe),ke=Pe.tag,Pe!==ht||ke!==5&&ke!==27&&ke!==6)&&(Pe=null)):(W=null,Pe=G),W!==Pe)){if(ke=zf,ie="onMouseLeave",Y="onMouseEnter",$="mouse",(e==="pointerout"||e==="pointerover")&&(ke=Hf,ie="onPointerLeave",Y="onPointerEnter",$="pointer"),ht=W==null?K:Ie(W),X=Pe==null?K:Ie(Pe),K=new ke(ie,$+"leave",W,n,re),K.target=ht,K.relatedTarget=X,ie=null,xe(re)===G&&(ke=new ke(Y,$+"enter",Pe,n,re),ke.target=X,ke.relatedTarget=ht,ie=ke),ht=ie,W&&Pe)t:{for(ke=W,Y=Pe,$=0,X=ke;X;X=ks(X))$++;for(X=0,ie=Y;ie;ie=ks(ie))X++;for(;0<$-X;)ke=ks(ke),$--;for(;0<X-$;)Y=ks(Y),X--;for(;$--;){if(ke===Y||Y!==null&&ke===Y.alternate)break t;ke=ks(ke),Y=ks(Y)}ke=null}else ke=null;W!==null&&_g(le,K,W,ke,!1),Pe!==null&&ht!==null&&_g(le,ht,Pe,ke,!0)}}e:{if(K=G?Ie(G):window,W=K.nodeName&&K.nodeName.toLowerCase(),W==="select"||W==="input"&&K.type==="file")var Ae=Jf;else if(Zf(K))if(ep)Ae=Qv;else{Ae=Wv;var Be=Kv}else W=K.nodeName,!W||W.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?G&&lc(G.elementType)&&(Ae=Jf):Ae=Zv;if(Ae&&(Ae=Ae(e,G))){Qf(le,Ae,n,re);break e}Be&&Be(e,K,G),e==="focusout"&&G&&K.type==="number"&&G.memoizedProps.value!=null&&ic(K,"number",K.value)}switch(Be=G?Ie(G):window,e){case"focusin":(Zf(Be)||Be.contentEditable==="true")&&(ss=Be,xc=G,Qs=null);break;case"focusout":Qs=xc=ss=null;break;case"mousedown":Sc=!0;break;case"contextmenu":case"mouseup":case"dragend":Sc=!1,lp(le,n,re);break;case"selectionchange":if(e0)break;case"keydown":case"keyup":lp(le,n,re)}var De;if(bc)e:{switch(e){case"compositionstart":var je="onCompositionStart";break e;case"compositionend":je="onCompositionEnd";break e;case"compositionupdate":je="onCompositionUpdate";break e}je=void 0}else rs?Kf(e,n)&&(je="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(je="onCompositionStart");je&&(Vf&&n.locale!=="ko"&&(rs||je!=="onCompositionStart"?je==="onCompositionEnd"&&rs&&(De=Ff()):(Kn=re,pc="value"in Kn?Kn.value:Kn.textContent,rs=!0)),Be=dl(G,je),0<Be.length&&(je=new Yf(je,e,null,n,re),le.push({event:je,listeners:Be}),De?je.data=De:(De=Wf(n),De!==null&&(je.data=De)))),(De=Yv?Hv(e,n):Vv(e,n))&&(je=dl(G,"onBeforeInput"),0<je.length&&(Be=new Yf("onBeforeInput","beforeinput",null,n,re),le.push({event:Be,listeners:je}),Be.data=De)),I0(le,e,G,n,re)}Lg(le,t)})}function Co(e,t,n){return{instance:e,listener:t,currentTarget:n}}function dl(e,t){for(var n=t+"Capture",o=[];e!==null;){var d=e,h=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||h===null||(d=Ys(e,n),d!=null&&o.unshift(Co(e,d,h)),d=Ys(e,t),d!=null&&o.push(Co(e,d,h))),e.tag===3)return o;e=e.return}return[]}function ks(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function _g(e,t,n,o,d){for(var h=t._reactName,w=[];n!==null&&n!==o;){var A=n,I=A.alternate,G=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||G===null||(I=G,d?(G=Ys(n,h),G!=null&&w.unshift(Co(n,G,I))):d||(G=Ys(n,h),G!=null&&w.push(Co(n,G,I)))),n=n.return}w.length!==0&&e.push({event:t,listeners:w})}var U0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function Pg(e){return(typeof e=="string"?e:""+e).replace(U0,`
`).replace(F0,"")}function Ig(e,t){return t=Pg(t),Pg(e)===t}function ul(){}function pt(e,t,n,o,d,h){switch(n){case"children":typeof o=="string"?t==="body"||t==="textarea"&&o===""||ts(e,o):(typeof o=="number"||typeof o=="bigint")&&t!=="body"&&ts(e,""+o);break;case"className":Jr(e,"class",o);break;case"tabIndex":Jr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Jr(e,n,o);break;case"style":Mf(e,o,h);break;case"data":if(t!=="object"){Jr(e,"data",o);break}case"src":case"href":if(o===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=vi(""+o),e.setAttribute(n,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(n==="formAction"?(t!=="input"&&pt(e,t,"name",d.name,d,null),pt(e,t,"formEncType",d.formEncType,d,null),pt(e,t,"formMethod",d.formMethod,d,null),pt(e,t,"formTarget",d.formTarget,d,null)):(pt(e,t,"encType",d.encType,d,null),pt(e,t,"method",d.method,d,null),pt(e,t,"target",d.target,d,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(n);break}o=vi(""+o),e.setAttribute(n,o);break;case"onClick":o!=null&&(e.onclick=ul);break;case"onScroll":o!=null&&He("scroll",e);break;case"onScrollEnd":o!=null&&He("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(n=o.__html,n!=null){if(d.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}n=vi(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""+o):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":o===!0?e.setAttribute(n,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(n,o):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(n,o):e.removeAttribute(n);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(n):e.setAttribute(n,o);break;case"popover":He("beforetoggle",e),He("toggle",e),Qr(e,"popover",o);break;case"xlinkActuate":za(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":za(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":za(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":za(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":za(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":za(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":za(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":za(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":za(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Qr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=yv.get(n)||n,Qr(e,n,o))}}function Vd(e,t,n,o,d,h){switch(n){case"style":Mf(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(i(61));if(n=o.__html,n!=null){if(d.children!=null)throw Error(i(60));e.innerHTML=n}}break;case"children":typeof o=="string"?ts(e,o):(typeof o=="number"||typeof o=="bigint")&&ts(e,""+o);break;case"onScroll":o!=null&&He("scroll",e);break;case"onScrollEnd":o!=null&&He("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ct.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(d=n.endsWith("Capture"),t=n.slice(2,d?n.length-7:void 0),h=e[We]||null,h=h!=null?h[n]:null,typeof h=="function"&&e.removeEventListener(t,h,d),typeof o=="function")){typeof h!="function"&&h!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,o,d);break e}n in e?e[n]=o:o===!0?e.setAttribute(n,""):Qr(e,n,o)}}}function ia(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",e),He("load",e);var o=!1,d=!1,h;for(h in n)if(n.hasOwnProperty(h)){var w=n[h];if(w!=null)switch(h){case"src":o=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:pt(e,t,h,w,n,null)}}d&&pt(e,t,"srcSet",n.srcSet,n,null),o&&pt(e,t,"src",n.src,n,null);return;case"input":He("invalid",e);var A=h=w=d=null,I=null,G=null;for(o in n)if(n.hasOwnProperty(o)){var re=n[o];if(re!=null)switch(o){case"name":d=re;break;case"type":w=re;break;case"checked":I=re;break;case"defaultChecked":G=re;break;case"value":h=re;break;case"defaultValue":A=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(i(137,t));break;default:pt(e,t,o,re,n,null)}}_f(e,h,A,I,G,w,d,!1),Ta(e);return;case"select":He("invalid",e),o=w=h=null;for(d in n)if(n.hasOwnProperty(d)&&(A=n[d],A!=null))switch(d){case"value":h=A;break;case"defaultValue":w=A;break;case"multiple":o=A;default:pt(e,t,d,A,n,null)}t=h,n=w,e.multiple=!!o,t!=null?es(e,!!o,t,!1):n!=null&&es(e,!!o,n,!0);return;case"textarea":He("invalid",e),h=d=o=null;for(w in n)if(n.hasOwnProperty(w)&&(A=n[w],A!=null))switch(w){case"value":o=A;break;case"defaultValue":d=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(i(91));break;default:pt(e,t,w,A,n,null)}If(e,o,d,h),Ta(e);return;case"option":for(I in n)n.hasOwnProperty(I)&&(o=n[I],o!=null)&&(I==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":pt(e,t,I,o,n,null));return;case"dialog":He("beforetoggle",e),He("toggle",e),He("cancel",e),He("close",e);break;case"iframe":case"object":He("load",e);break;case"video":case"audio":for(o=0;o<Do.length;o++)He(Do[o],e);break;case"image":He("error",e),He("load",e);break;case"details":He("toggle",e);break;case"embed":case"source":case"link":He("error",e),He("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(G in n)if(n.hasOwnProperty(G)&&(o=n[G],o!=null))switch(G){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,t));default:pt(e,t,G,o,n,null)}return;default:if(lc(t)){for(re in n)n.hasOwnProperty(re)&&(o=n[re],o!==void 0&&Vd(e,t,re,o,n,void 0));return}}for(A in n)n.hasOwnProperty(A)&&(o=n[A],o!=null&&pt(e,t,A,o,n,null))}function B0(e,t,n,o){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,h=null,w=null,A=null,I=null,G=null,re=null;for(W in n){var le=n[W];if(n.hasOwnProperty(W)&&le!=null)switch(W){case"checked":break;case"value":break;case"defaultValue":I=le;default:o.hasOwnProperty(W)||pt(e,t,W,null,o,le)}}for(var K in o){var W=o[K];if(le=n[K],o.hasOwnProperty(K)&&(W!=null||le!=null))switch(K){case"type":h=W;break;case"name":d=W;break;case"checked":G=W;break;case"defaultChecked":re=W;break;case"value":w=W;break;case"defaultValue":A=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,t));break;default:W!==le&&pt(e,t,K,W,o,le)}}oc(e,w,A,I,G,re,h,d);return;case"select":W=w=A=K=null;for(h in n)if(I=n[h],n.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":W=I;default:o.hasOwnProperty(h)||pt(e,t,h,null,o,I)}for(d in o)if(h=o[d],I=n[d],o.hasOwnProperty(d)&&(h!=null||I!=null))switch(d){case"value":K=h;break;case"defaultValue":A=h;break;case"multiple":w=h;default:h!==I&&pt(e,t,d,h,o,I)}t=A,n=w,o=W,K!=null?es(e,!!n,K,!1):!!o!=!!n&&(t!=null?es(e,!!n,t,!0):es(e,!!n,n?[]:"",!1));return;case"textarea":W=K=null;for(A in n)if(d=n[A],n.hasOwnProperty(A)&&d!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:pt(e,t,A,null,o,d)}for(w in o)if(d=o[w],h=n[w],o.hasOwnProperty(w)&&(d!=null||h!=null))switch(w){case"value":K=d;break;case"defaultValue":W=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==h&&pt(e,t,w,d,o,h)}Pf(e,K,W);return;case"option":for(var Pe in n)K=n[Pe],n.hasOwnProperty(Pe)&&K!=null&&!o.hasOwnProperty(Pe)&&(Pe==="selected"?e.selected=!1:pt(e,t,Pe,null,o,K));for(I in o)K=o[I],W=n[I],o.hasOwnProperty(I)&&K!==W&&(K!=null||W!=null)&&(I==="selected"?e.selected=K&&typeof K!="function"&&typeof K!="symbol":pt(e,t,I,K,o,W));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ke in n)K=n[ke],n.hasOwnProperty(ke)&&K!=null&&!o.hasOwnProperty(ke)&&pt(e,t,ke,null,o,K);for(G in o)if(K=o[G],W=n[G],o.hasOwnProperty(G)&&K!==W&&(K!=null||W!=null))switch(G){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,t));break;default:pt(e,t,G,K,o,W)}return;default:if(lc(t)){for(var ht in n)K=n[ht],n.hasOwnProperty(ht)&&K!==void 0&&!o.hasOwnProperty(ht)&&Vd(e,t,ht,void 0,o,K);for(re in o)K=o[re],W=n[re],!o.hasOwnProperty(re)||K===W||K===void 0&&W===void 0||Vd(e,t,re,K,o,W);return}}for(var Y in n)K=n[Y],n.hasOwnProperty(Y)&&K!=null&&!o.hasOwnProperty(Y)&&pt(e,t,Y,null,o,K);for(le in o)K=o[le],W=n[le],!o.hasOwnProperty(le)||K===W||K==null&&W==null||pt(e,t,le,K,o,W)}var Xd=null,Gd=null;function fl(e){return e.nodeType===9?e:e.ownerDocument}function qg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Kd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function z0(){var e=window.event;return e&&e.type==="popstate"?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var $g=typeof setTimeout=="function"?setTimeout:void 0,Y0=typeof clearTimeout=="function"?clearTimeout:void 0,Ug=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ug<"u"?function(e){return Ug.resolve(null).then(e).catch(V0)}:$g;function V0(e){setTimeout(function(){throw e})}function ur(e){return e==="head"}function Fg(e,t){var n=t,o=0,d=0;do{var h=n.nextSibling;if(e.removeChild(n),h&&h.nodeType===8)if(n=h.data,n==="/$"){if(0<o&&8>o){n=o;var w=e.ownerDocument;if(n&1&&No(w.documentElement),n&2&&No(w.body),n&4)for(n=w.head,No(n),w=n.firstChild;w;){var A=w.nextSibling,I=w.nodeName;w[ne]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&w.rel.toLowerCase()==="stylesheet"||n.removeChild(w),w=A}}if(d===0){e.removeChild(h),Io(t);return}d--}else n==="$"||n==="$?"||n==="$!"?d++:o=n.charCodeAt(0)-48;else o=0;n=h}while(n);Io(t)}function Zd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Zd(n),we(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function X0(e,t,n,o){for(;e.nodeType===1;){var d=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ne])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var h=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=nn(e.nextSibling),e===null)break}return null}function G0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=nn(e.nextSibling),e===null))return null;return e}function Qd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function K0(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var o=function(){t(),n.removeEventListener("DOMContentLoaded",o)};n.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Jd=null;function Bg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function zg(e,t,n){switch(t=fl(n),e){case"html":if(e=t.documentElement,!e)throw Error(i(452));return e;case"head":if(e=t.head,!e)throw Error(i(453));return e;case"body":if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function No(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);we(e)}var Qa=new Map,Yg=new Set;function pl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Un=Z.d;Z.d={f:W0,r:Z0,D:Q0,C:J0,L:ew,m:tw,X:nw,S:aw,M:rw};function W0(){var e=Un.f(),t=rl();return e||t}function Z0(e){var t=Ne(e);t!==null&&t.tag===5&&t.type==="form"?dh(t):Un.r(e)}var Rs=typeof document>"u"?null:document;function Hg(e,t,n){var o=Rs;if(o&&typeof t=="string"&&t){var d=Ha(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof n=="string"&&(d+='[crossorigin="'+n+'"]'),Yg.has(d)||(Yg.add(d),e={rel:e,crossOrigin:n,href:t},o.querySelector(d)===null&&(t=o.createElement("link"),ia(t,"link",e),Xe(t),o.head.appendChild(t)))}}function Q0(e){Un.D(e),Hg("dns-prefetch",e,null)}function J0(e,t){Un.C(e,t),Hg("preconnect",e,t)}function ew(e,t,n){Un.L(e,t,n);var o=Rs;if(o&&e&&t){var d='link[rel="preload"][as="'+Ha(t)+'"]';t==="image"&&n&&n.imageSrcSet?(d+='[imagesrcset="'+Ha(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(d+='[imagesizes="'+Ha(n.imageSizes)+'"]')):d+='[href="'+Ha(e)+'"]';var h=d;switch(t){case"style":h=js(e);break;case"script":h=Ls(e)}Qa.has(h)||(e=y({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Qa.set(h,e),o.querySelector(d)!==null||t==="style"&&o.querySelector(ko(h))||t==="script"&&o.querySelector(Ro(h))||(t=o.createElement("link"),ia(t,"link",e),Xe(t),o.head.appendChild(t)))}}function tw(e,t){Un.m(e,t);var n=Rs;if(n&&e){var o=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+Ha(o)+'"][href="'+Ha(e)+'"]',h=d;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Ls(e)}if(!Qa.has(h)&&(e=y({rel:"modulepreload",href:e},t),Qa.set(h,e),n.querySelector(d)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ro(h)))return}o=n.createElement("link"),ia(o,"link",e),Xe(o),n.head.appendChild(o)}}}function aw(e,t,n){Un.S(e,t,n);var o=Rs;if(o&&e){var d=Je(o).hoistableStyles,h=js(e);t=t||"default";var w=d.get(h);if(!w){var A={loading:0,preload:null};if(w=o.querySelector(ko(h)))A.loading=5;else{e=y({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Qa.get(h))&&eu(e,n);var I=w=o.createElement("link");Xe(I),ia(I,"link",e),I._p=new Promise(function(G,re){I.onload=G,I.onerror=re}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,hl(w,t,o)}w={type:"stylesheet",instance:w,count:1,state:A},d.set(h,w)}}}function nw(e,t){Un.X(e,t);var n=Rs;if(n&&e){var o=Je(n).hoistableScripts,d=Ls(e),h=o.get(d);h||(h=n.querySelector(Ro(d)),h||(e=y({src:e,async:!0},t),(t=Qa.get(d))&&tu(e,t),h=n.createElement("script"),Xe(h),ia(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(d,h))}}function rw(e,t){Un.M(e,t);var n=Rs;if(n&&e){var o=Je(n).hoistableScripts,d=Ls(e),h=o.get(d);h||(h=n.querySelector(Ro(d)),h||(e=y({src:e,async:!0,type:"module"},t),(t=Qa.get(d))&&tu(e,t),h=n.createElement("script"),Xe(h),ia(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(d,h))}}function Vg(e,t,n,o){var d=(d=ve.current)?pl(d):null;if(!d)throw Error(i(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=js(n.href),n=Je(d).hoistableStyles,o=n.get(t),o||(o={type:"style",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=js(n.href);var h=Je(d).hoistableStyles,w=h.get(e);if(w||(d=d.ownerDocument||d,w={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,w),(h=d.querySelector(ko(e)))&&!h._p&&(w.instance=h,w.state.loading=5),Qa.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Qa.set(e,n),h||sw(d,e,n,w.state))),t&&o===null)throw Error(i(528,""));return w}if(t&&o!==null)throw Error(i(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ls(n),n=Je(d).hoistableScripts,o=n.get(t),o||(o={type:"script",instance:null,count:0,state:null},n.set(t,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,e))}}function js(e){return'href="'+Ha(e)+'"'}function ko(e){return'link[rel="stylesheet"]['+e+"]"}function Xg(e){return y({},e,{"data-precedence":e.precedence,precedence:null})}function sw(e,t,n,o){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?o.loading=1:(t=e.createElement("link"),o.preload=t,t.addEventListener("load",function(){return o.loading|=1}),t.addEventListener("error",function(){return o.loading|=2}),ia(t,"link",n),Xe(t),e.head.appendChild(t))}function Ls(e){return'[src="'+Ha(e)+'"]'}function Ro(e){return"script[async]"+e}function Gg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var o=e.querySelector('style[data-href~="'+Ha(n.href)+'"]');if(o)return t.instance=o,Xe(o),o;var d=y({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Xe(o),ia(o,"style",d),hl(o,n.precedence,e),t.instance=o;case"stylesheet":d=js(n.href);var h=e.querySelector(ko(d));if(h)return t.state.loading|=4,t.instance=h,Xe(h),h;o=Xg(n),(d=Qa.get(d))&&eu(o,d),h=(e.ownerDocument||e).createElement("link"),Xe(h);var w=h;return w._p=new Promise(function(A,I){w.onload=A,w.onerror=I}),ia(h,"link",o),t.state.loading|=4,hl(h,n.precedence,e),t.instance=h;case"script":return h=Ls(n.src),(d=e.querySelector(Ro(h)))?(t.instance=d,Xe(d),d):(o=n,(d=Qa.get(h))&&(o=y({},n),tu(o,d)),e=e.ownerDocument||e,d=e.createElement("script"),Xe(d),ia(d,"link",o),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(i(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(o=t.instance,t.state.loading|=4,hl(o,n.precedence,e));return t.instance}function hl(e,t,n){for(var o=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=o.length?o[o.length-1]:null,h=d,w=0;w<o.length;w++){var A=o[w];if(A.dataset.precedence===t)h=A;else if(h!==d)break}h?h.parentNode.insertBefore(e,h.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function tu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var gl=null;function Kg(e,t,n){if(gl===null){var o=new Map,d=gl=new Map;d.set(n,o)}else d=gl,o=d.get(n),o||(o=new Map,d.set(n,o));if(o.has(e))return o;for(o.set(e,null),n=n.getElementsByTagName(e),d=0;d<n.length;d++){var h=n[d];if(!(h[ne]||h[Dt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var w=h.getAttribute(t)||"";w=e+w;var A=o.get(w);A?A.push(h):o.set(w,[h])}}return o}function Wg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ow(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jo=null;function iw(){}function lw(e,t,n){if(jo===null)throw Error(i(475));var o=jo;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var d=js(n.href),h=e.querySelector(ko(d));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=ml.bind(o),e.then(o,o)),t.state.loading|=4,t.instance=h,Xe(h);return}h=e.ownerDocument||e,n=Xg(n),(d=Qa.get(d))&&eu(n,d),h=h.createElement("link"),Xe(h);var w=h;w._p=new Promise(function(A,I){w.onload=A,w.onerror=I}),ia(h,"link",n),t.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(o.count++,t=ml.bind(o),e.addEventListener("load",t),e.addEventListener("error",t))}}function cw(){if(jo===null)throw Error(i(475));var e=jo;return e.stylesheets&&e.count===0&&au(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&au(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ml(){if(this.count--,this.count===0){if(this.stylesheets)au(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yl=null;function au(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yl=new Map,t.forEach(dw,e),yl=null,ml.call(e))}function dw(e,t){if(!(t.state.loading&4)){var n=yl.get(e);if(n)var o=n.get(null);else{n=new Map,yl.set(e,n);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<d.length;h++){var w=d[h];(w.nodeName==="LINK"||w.getAttribute("media")!=="not all")&&(n.set(w.dataset.precedence,w),o=w)}o&&n.set(null,o)}d=t.instance,w=d.getAttribute("data-precedence"),h=n.get(w)||o,h===o&&n.set(null,d),n.set(w,d),this.count++,o=ml.bind(this),d.addEventListener("load",o),d.addEventListener("error",o),h?h.parentNode.insertBefore(d,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var Lo={$$typeof:T,Provider:null,Consumer:null,_currentValue:me,_currentValue2:me,_threadCount:0};function uw(e,t,n,o,d,h,w,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=o,this.onUncaughtError=d,this.onCaughtError=h,this.onRecoverableError=w,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Qg(e,t,n,o,d,h,w,A,I,G,re,le){return e=new uw(e,t,n,w,A,I,G,le),t=1,h===!0&&(t|=24),h=Pa(3,null,null,t),e.current=h,h.stateNode=e,t=qc(),t.refCount++,e.pooledCache=t,t.refCount++,h.memoizedState={element:o,isDehydrated:n,cache:t},Fc(h),e}function Jg(e){return e?(e=cs,e):cs}function em(e,t,n,o,d,h){d=Jg(d),o.context===null?o.context=d:o.pendingContext=d,o=Qn(t),o.payload={element:n},h=h===void 0?null:h,h!==null&&(o.callback=h),n=Jn(e,o,t),n!==null&&(Ua(n,e,t),io(n,e,t))}function tm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nu(e,t){tm(e,t),(e=e.alternate)&&tm(e,t)}function am(e){if(e.tag===13){var t=ls(e,67108864);t!==null&&Ua(t,e,67108864),nu(e,67108864)}}var bl=!0;function fw(e,t,n,o){var d=z.T;z.T=null;var h=Z.p;try{Z.p=2,ru(e,t,n,o)}finally{Z.p=h,z.T=d}}function pw(e,t,n,o){var d=z.T;z.T=null;var h=Z.p;try{Z.p=8,ru(e,t,n,o)}finally{Z.p=h,z.T=d}}function ru(e,t,n,o){if(bl){var d=su(o);if(d===null)Hd(e,t,o,vl,n),rm(e,o);else if(gw(d,e,t,n,o))o.stopPropagation();else if(rm(e,o),t&4&&-1<hw.indexOf(e)){for(;d!==null;){var h=Ne(d);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var w=Jt(h.pendingLanes);if(w!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;w;){var I=1<<31-rt(w);A.entanglements[1]|=I,w&=~I}hn(h),(it&6)===0&&(al=ge()+500,Ao(0))}}break;case 13:A=ls(h,2),A!==null&&Ua(A,h,2),rl(),nu(h,2)}if(h=su(o),h===null&&Hd(e,t,o,vl,n),h===d)break;d=h}d!==null&&o.stopPropagation()}else Hd(e,t,o,null,n)}}function su(e){return e=dc(e),ou(e)}var vl=null;function ou(e){if(vl=null,e=xe(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return vl=e,null}function nm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(B()){case pe:return 2;case Ce:return 8;case ye:case Oe:return 32;case Qe:return 268435456;default:return 32}default:return 32}}var iu=!1,fr=null,pr=null,hr=null,Oo=new Map,_o=new Map,gr=[],hw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function rm(e,t){switch(e){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Oo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_o.delete(t.pointerId)}}function Po(e,t,n,o,d,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:n,eventSystemFlags:o,nativeEvent:h,targetContainers:[d]},t!==null&&(t=Ne(t),t!==null&&am(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function gw(e,t,n,o,d){switch(t){case"focusin":return fr=Po(fr,e,t,n,o,d),!0;case"dragenter":return pr=Po(pr,e,t,n,o,d),!0;case"mouseover":return hr=Po(hr,e,t,n,o,d),!0;case"pointerover":var h=d.pointerId;return Oo.set(h,Po(Oo.get(h)||null,e,t,n,o,d)),!0;case"gotpointercapture":return h=d.pointerId,_o.set(h,Po(_o.get(h)||null,e,t,n,o,d)),!0}return!1}function sm(e){var t=xe(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,fa(e.priority,function(){if(n.tag===13){var o=$a();o=Xn(o);var d=ls(n,o);d!==null&&Ua(d,n,o),nu(n,o)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=su(e.nativeEvent);if(n===null){n=e.nativeEvent;var o=new n.constructor(n.type,n);cc=o,n.target.dispatchEvent(o),cc=null}else return t=Ne(n),t!==null&&am(t),e.blockedOn=n,!1;t.shift()}return!0}function om(e,t,n){wl(e)&&n.delete(t)}function mw(){iu=!1,fr!==null&&wl(fr)&&(fr=null),pr!==null&&wl(pr)&&(pr=null),hr!==null&&wl(hr)&&(hr=null),Oo.forEach(om),_o.forEach(om)}function El(e,t){e.blockedOn===t&&(e.blockedOn=null,iu||(iu=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,mw)))}var xl=null;function im(e){xl!==e&&(xl=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){xl===e&&(xl=null);for(var t=0;t<e.length;t+=3){var n=e[t],o=e[t+1],d=e[t+2];if(typeof o!="function"){if(ou(o||n)===null)continue;break}var h=Ne(n);h!==null&&(e.splice(t,3),t-=3,od(h,{pending:!0,data:d,method:n.method,action:o},o,d))}}))}function Io(e){function t(I){return El(I,e)}fr!==null&&El(fr,e),pr!==null&&El(pr,e),hr!==null&&El(hr,e),Oo.forEach(t),_o.forEach(t);for(var n=0;n<gr.length;n++){var o=gr[n];o.blockedOn===e&&(o.blockedOn=null)}for(;0<gr.length&&(n=gr[0],n.blockedOn===null);)sm(n),n.blockedOn===null&&gr.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(o=0;o<n.length;o+=3){var d=n[o],h=n[o+1],w=d[We]||null;if(typeof h=="function")w||im(n);else if(w){var A=null;if(h&&h.hasAttribute("formAction")){if(d=h,w=h[We]||null)A=w.formAction;else if(ou(d)!==null)continue}else A=w.action;typeof A=="function"?n[o+1]=A:(n.splice(o,3),o-=3),im(n)}}}function lu(e){this._internalRoot=e}Sl.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current,o=$a();em(n,o,e,t,null,null)},Sl.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;em(e.current,2,null,e,null,null),rl(),t[j]=null}};function Sl(e){this._internalRoot=e}Sl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gr.length&&t!==0&&t<gr[n].priority;n++);gr.splice(n,0,e),n===0&&sm(e)}};var lm=r.version;if(lm!=="19.1.4")throw Error(i(527,lm,"19.1.4"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(i(188)):(e=Object.keys(e).join(","),Error(i(268,e)));return e=m(t),e=e!==null?f(e):null,e=e===null?null:e.stateNode,e};var yw={bundleType:0,version:"19.1.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{jt=Tl.inject(yw),be=Tl}catch{}}return Mo.createRoot=function(e,t){if(!l(e))throw Error(i(299));var n=!1,o="",d=Th,h=Ah,w=Dh,A=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(w=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(A=t.unstable_transitionCallbacks)),t=Qg(e,1,!1,null,null,n,o,d,h,w,A,null),e[j]=t.current,Yd(e),new lu(t)},Mo.hydrateRoot=function(e,t,n){if(!l(e))throw Error(i(299));var o=!1,d="",h=Th,w=Ah,A=Dh,I=null,G=null;return n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(w=n.onCaughtError),n.onRecoverableError!==void 0&&(A=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(I=n.unstable_transitionCallbacks),n.formState!==void 0&&(G=n.formState)),t=Qg(e,1,!0,t,n??null,o,d,h,w,A,I,G),t.context=Jg(null),n=t.current,o=$a(),o=Xn(o),d=Qn(o),d.callback=null,Jn(n,d,o),n=o,t.current.lanes=n,La(t,n),hn(t),e[j]=t.current,Yd(e),new Sl(t)},Mo.version="19.1.4",Mo}var bm;function Nw(){if(bm)return du.exports;bm=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),du.exports=Cw(),du.exports}var yf=Nw();const kw=ci(yf),Rw=Hl({__proto__:null,default:kw},[yf]);var q=Vl();const ae=ci(q),zy=Hl({__proto__:null,default:ae},[q]);const jw=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Lw=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,i)=>i?i.toUpperCase():s.toLowerCase()),vm=a=>{const r=Lw(a);return r.charAt(0).toUpperCase()+r.slice(1)},Yy=(...a)=>a.filter((r,s,i)=>!!r&&r.trim()!==""&&i.indexOf(r)===s).join(" ").trim(),Ow=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};var _w={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Pw=q.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:l="",children:u,iconNode:g,...p},m)=>q.createElement("svg",{ref:m,..._w,width:r,height:r,stroke:a,strokeWidth:i?Number(s)*24/Number(r):s,className:Yy("lucide",l),...!u&&!Ow(p)&&{"aria-hidden":"true"},...p},[...g.map(([f,y])=>q.createElement(f,y)),...Array.isArray(u)?u:[u]]));const ze=(a,r)=>{const s=q.forwardRef(({className:i,...l},u)=>q.createElement(Pw,{ref:u,iconNode:r,className:Yy(`lucide-${jw(vm(a))}`,`lucide-${a}`,i),...l}));return s.displayName=vm(a),s};const Iw=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],bf=ze("archive",Iw);const qw=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Mw=ze("arrow-down",qw);const $w=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],Hy=ze("arrow-left",$w);const Uw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Fw=ze("arrow-right",Uw);const Bw=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],zw=ze("arrow-up",Bw);const Yw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ms=ze("check",Yw);const Hw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Er=ze("chevron-down",Hw);const Vw=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Vy=ze("chevron-left",Vw);const Xw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],vf=ze("chevron-right",Xw);const Gw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],wm=ze("circle-check",Gw);const Kw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],Ww=ze("clipboard-check",Kw);const Zw=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],wf=ze("database",Zw);const Qw=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Hr=ze("download",Qw);const Jw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],eE=ze("eye",Jw);const tE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],aE=ze("file-check-2",tE);const nE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],rE=ze("file-code-2",nE);const sE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],Em=ze("file-plus-2",sE);const oE=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],iE=ze("file-search",oE);const lE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Hn=ze("file-text",lE);const cE=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Iu=ze("folder",cE);const dE=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],uE=ze("funnel",dE);const fE=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],pE=ze("git-branch",fE);const hE=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Vn=ze("hard-drive",hE);const gE=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Vo=ze("layers",gE);const mE=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],ka=ze("loader-circle",mE);const yE=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],bE=ze("monitor",yE);const vE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],ei=ze("plus",vE);const wE=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],EE=ze("refresh-cw",wE);const xE=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],xm=ze("save",xE);const SE=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ti=ze("search",SE);const TE=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],AE=ze("settings-2",TE);const DE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],qu=ze("shield-check",DE);const CE=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Mu=ze("sliders-horizontal",CE);const NE=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],ai=ze("trash-2",NE);const kE=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],xr=ze("triangle-alert",kE);const RE=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Vr=ze("upload",RE);const jE=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],LE=ze("wrench",jE);const OE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],$u=ze("x",OE);function _E(a,r){if(a instanceof RegExp)return{keys:!1,pattern:a};var s,i,l,u,g=[],p="",m=a.split("/");for(m[0]||m.shift();l=m.shift();)s=l[0],s==="*"?(g.push(s),p+=l[1]==="?"?"(?:/(.*))?":"/(.*)"):s===":"?(i=l.indexOf("?",1),u=l.indexOf(".",1),g.push(l.substring(1,~i?i:~u?u:l.length)),p+=~i&&!~u?"(?:/([^/]+?))?":"/([^/]+?)",~u&&(p+=(~i?"?":"")+"\\"+l.substring(u))):p+="/"+l;return{keys:g,pattern:new RegExp("^"+p+(r?"(?=$|/)":"/?$"),"i")}}var gu={exports:{}},mu={};var Sm;function PE(){if(Sm)return mu;Sm=1;var a=Vl();function r(b,v){return b===v&&(b!==0||1/b===1/v)||b!==b&&v!==v}var s=typeof Object.is=="function"?Object.is:r,i=a.useState,l=a.useEffect,u=a.useLayoutEffect,g=a.useDebugValue;function p(b,v){var E=v(),R=i({inst:{value:E,getSnapshot:v}}),C=R[0].inst,D=R[1];return u(function(){C.value=E,C.getSnapshot=v,m(C)&&D({inst:C})},[b,E,v]),l(function(){return m(C)&&D({inst:C}),b(function(){m(C)&&D({inst:C})})},[b]),g(E),E}function m(b){var v=b.getSnapshot;b=b.value;try{var E=v();return!s(b,E)}catch{return!0}}function f(b,v){return v()}var y=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:p;return mu.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:y,mu}var Tm;function IE(){return Tm||(Tm=1,gu.exports=PE()),gu.exports}var qE=IE();const ME=zy.useInsertionEffect,$E=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xy=$E?q.useLayoutEffect:q.useEffect,UE=ME||Xy,Ef=a=>{const r=q.useRef([a,(...s)=>r[0](...s)]).current;return UE(()=>{r[0]=a}),r[1]},Am=["popstate","pushState","replaceState","hashchange"];let Xo=[];const Dm=()=>Xo.forEach(a=>a()),FE=a=>(Xo.push(a)===1&&Am.forEach(r=>addEventListener(r,Dm)),()=>{Xo=Xo.filter(r=>r!==a),Xo.length||Am.forEach(r=>removeEventListener(r,Dm))}),Gy=(a,r)=>qE.useSyncExternalStore(FE,a,r),Cm=()=>location.search,BE=({ssrSearch:a}={})=>Gy(Cm,a!=null?()=>a:Cm),Nm=()=>location.pathname,zE=({ssrPath:a}={})=>Gy(Nm,a!=null?()=>a:Nm),YE=(a,{replace:r=!1,state:s=null}={})=>history[r?"replaceState":"pushState"](s,"",a),HE=a=>[zE(a),YE],km=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[km]>"u"){for(const a of["pushState","replaceState"]){const r=history[a];history[a]=function(){const s=r.apply(this,arguments),i=new Event(a);return i.arguments=arguments,dispatchEvent(i),s}}Object.defineProperty(window,km,{value:!0})}const Ky=(a="")=>a==="/"?"":a,VE=(a,r)=>a[0]==="~"?a.slice(1):Ky(r)+a,XE=(a,r)=>(a=Rm(Ky(a)),r=Rm(r),!a||(r.toLowerCase()+"/").startsWith(a.toLowerCase()+"/")?r.slice(a.length)||"/":"~"+r),Rm=a=>{try{return a.includes("%")?decodeURI(a):a}catch{return a}},Wy={hook:HE,searchHook:BE,parser:_E,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:a=>a,aroundNav:(a,r,s)=>a(r,s)},Zy=q.createContext(Wy),Xl=()=>q.useContext(Zy),GE={};q.createContext(GE);const xf=a=>{const[r,s]=a.hook(a);return[XE(a.base,r),Ef((i,l)=>a.aroundNav(s,VE(i,a.base),l))]},Qy=()=>xf(Xl()),KE=({children:a,...r})=>{const s=Xl(),i=r.hook?Wy:s;let l=i;if(r.ssrPath){const[m,f=r.ssrSearch??""]=r.ssrPath.split("?");m&&(r.ssrSearch=f,r.ssrPath=m)}r.hrefs=r.hrefs??r.hook?.hrefs,r.searchHook=r.searchHook??r.hook?.searchHook;let u=q.useRef(i),g=u.current,p=g;for(let m in i){const f=m==="base"?i[m]+(r[m]??""):r[m]??i[m];f!==p[m]&&(g===p&&(u.current=p={...p}),p[m]=f),(f!==i[m]||f!==l[m])&&(l=p)}return q.createElement(Zy.Provider,{value:l},a)},da=q.forwardRef((a,r)=>{const s=Xl(),[i,l]=xf(s),{to:u="",href:g=u,onClick:p,asChild:m,children:f,className:y,replace:b,state:v,transition:E,...R}=a;return R.onClick=Ef(C=>{C.ctrlKey||C.metaKey||C.altKey||C.shiftKey||C.button!==0||(p?.(C),C.defaultPrevented||(C.preventDefault(),l(g,a)))}),R.href=s.hrefs(g[0]==="~"?g.slice(1):s.base+g,s),y!==void 0&&(R.className=y?.call?y(i===g):y),r&&(R.ref=r),m&&q.isValidElement(f)?q.cloneElement(f,R):q.createElement("a",R,f)}),WE=a=>{const{to:r,href:s=r}=a,i=Xl(),[,l]=xf(i),u=Ef(()=>l(r||s,a)),{ssrContext:g}=i;return Xy(()=>{u()},[]),g&&(g.redirectTo=r),null},Jy=`To use an existing Clerk app, run:
npx clerk@latest link
npx clerk@latest env pull

For production keys, run:
npx clerk@latest env pull --instance prod`,eb="Or copy keys from https://dashboard.clerk.com/~/api-keys into your .env file.",jm=`To create a new Clerk app, run:
npx clerk@latest init

'npx clerk@latest init' does not need a Clerk account and writes temporary dev keys.

${Jy}

${eb}`,ZE=`${Jy}

${eb}`,QE=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:`The publishableKey passed to Clerk is invalid (key={{key}}, expected format: pk_test_... or pk_live_...).

${jm}`,MissingPublishableKeyErrorMessage:`Clerk keys are missing from your environment.

${jm}`,MissingSecretKeyErrorMessage:`Missing secretKey.

${ZE}`,MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function tb({packageName:a,customMessages:r}){let s=a;function i(u,g){if(!g)return`${s}: ${u}`;let p=u;const m=u.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const f of m){const y=(g[f[1]]||"").toString();p=p.replace(`{{${f[1]}}}`,y)}return`${s}: ${p}`}const l={...QE,...r};return{setPackageName({packageName:u}){return typeof u=="string"&&(s=u),this},setMessages({customMessages:u}){return Object.assign(l,u||{}),this},throwInvalidPublishableKeyError(u){throw new Error(i(l.InvalidPublishableKeyErrorMessage,u))},throwInvalidProxyUrl(u){throw new Error(i(l.InvalidProxyUrlErrorMessage,u))},throwMissingPublishableKeyError(){throw new Error(i(l.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(i(l.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(u){throw new Error(i(l.MissingClerkProvider,u))},throw(u){throw new Error(i(u))}}}const JE=()=>{try{return!1}catch{}return!1},e1=()=>{try{return!1}catch{}return!1},t1=()=>{try{return!0}catch{}return!1};var Lm=Object.prototype.hasOwnProperty;function Om(a,r,s){for(s of a.keys())if(Wo(s,r))return s}function Wo(a,r){var s,i,l;if(a===r)return!0;if(a&&r&&(s=a.constructor)===r.constructor){if(s===Date)return a.getTime()===r.getTime();if(s===RegExp)return a.toString()===r.toString();if(s===Array){if((i=a.length)===r.length)for(;i--&&Wo(a[i],r[i]););return i===-1}if(s===Set){if(a.size!==r.size)return!1;for(i of a)if(l=i,l&&typeof l=="object"&&(l=Om(r,l),!l)||!r.has(l))return!1;return!0}if(s===Map){if(a.size!==r.size)return!1;for(i of a)if(l=i[0],l&&typeof l=="object"&&(l=Om(r,l),!l)||!Wo(i[1],r.get(l)))return!1;return!0}if(s===ArrayBuffer)a=new Uint8Array(a),r=new Uint8Array(r);else if(s===DataView){if((i=a.byteLength)===r.byteLength)for(;i--&&a.getInt8(i)===r.getInt8(i););return i===-1}if(ArrayBuffer.isView(a)){if((i=a.byteLength)===r.byteLength)for(;i--&&a[i]===r[i];);return i===-1}if(!s||typeof a=="object"){i=0;for(s in a)if(Lm.call(a,s)&&++i&&!Lm.call(r,s)||!(s in r)||!Wo(a[s],r[s]))return!1;return Object.keys(r).length===i}}return a!==a&&r!==r}function a1(a,r){if(!a)throw typeof r=="string"?new Error(r):new Error(`${r.displayName} not found`)}const Fs=(a,r)=>{const{assertCtxFn:s=a1}={},i=ae.createContext(void 0);return i.displayName=a,[i,()=>{const g=ae.useContext(i);return s(g,`${a} not found`),g.value},()=>{const g=ae.useContext(i);return g?g.value:{}}]},[n1,r1]=Fs("ClerkInstanceContext");Fs("InitialStateContext");ae.createContext({});Fs("CheckoutContext");function s1(a){if(!ae.useContext(n1)){if(typeof a=="function"){a();return}throw new Error(`${a} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}function o1(a){const r=function(){};let s;return s=new Proxy(r,{get(i,l){if(l!=="then")return l==="toString"?()=>`[${a}]`:l===Symbol.toPrimitive?()=>0:s},apply(){return s},construct(){return s},has(){return!1},set(){return!1}}),s}o1("ClerkMockQueryClient");typeof window<"u"?ae.useLayoutEffect:ae.useEffect;const _m=Wo,i1=a=>{const r=q.useRef(a);return q.useEffect(()=>{r.current=a},[a]),r.current},Fa=(a,r,s)=>{const i=!!s,l=q.useRef(s);q.useEffect(()=>{l.current=s},[s]),q.useEffect(()=>{if(!i||!a)return()=>{};const u=(...g)=>{l.current&&l.current(...g)};return a.on(r,u),()=>{a.off(r,u)}},[i,r,a,l])},ab=ae.createContext(null);ab.displayName="ElementsContext";const l1=(a,r)=>{if(!a)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${r} in an <Elements> provider.`);return a},Ml=a=>a!==null&&typeof a=="object",c1=(a,r,s)=>Ml(a)?Object.keys(a).reduce((i,l)=>{const u=!Ml(r)||!nb(a[l],r[l]);return s.includes(l)?(u&&console.warn(`Unsupported prop change: options.${l} is not a mutable property.`),i):u?{...i||{},[l]:a[l]}:i},null):null,Pm="[object Object]",nb=(a,r)=>{if(!Ml(a)||!Ml(r))return a===r;const s=Array.isArray(a);if(s!==Array.isArray(r))return!1;const i=Object.prototype.toString.call(a)===Pm;if(i!==(Object.prototype.toString.call(r)===Pm))return!1;if(!i&&!s)return a===r;const l=Object.keys(a),u=Object.keys(r);if(l.length!==u.length)return!1;const g={};for(let b=0;b<l.length;b+=1)g[l[b]]=!0;for(let b=0;b<u.length;b+=1)g[u[b]]=!0;const p=Object.keys(g);if(p.length!==l.length)return!1;const m=a,f=r,y=b=>nb(m[b],f[b]);return p.every(y)},Im=a=>l1(ae.useContext(ab),a),d1=a=>a.charAt(0).toUpperCase()+a.slice(1),u1=(a,r)=>{const s=`${d1(a)}Element`,u=r?g=>{Im(`mounts <${s}>`);const{id:p,className:m}=g;return ae.createElement("div",{id:p,className:m})}:({id:g,className:p,fallback:m,options:f={},onBlur:y,onFocus:b,onReady:v,onChange:E,onEscape:R,onClick:C,onLoadError:D,onLoaderStart:S,onNetworksChange:N,onConfirm:T,onCancel:O,onShippingAddressChange:x,onShippingRateChange:_})=>{const k=Im(`mounts <${s}>`),L="elements"in k?k.elements:null,[H,ee]=ae.useState(null),te=ae.useRef(null),se=ae.useRef(null),[Te,fe]=q.useState(!1);Fa(H,"blur",y),Fa(H,"focus",b),Fa(H,"escape",R),Fa(H,"click",C),Fa(H,"loaderror",D),Fa(H,"loaderstart",S),Fa(H,"networkschange",N),Fa(H,"confirm",T),Fa(H,"cancel",O),Fa(H,"shippingaddresschange",x),Fa(H,"shippingratechange",_),Fa(H,"change",E);let ce;v&&(ce=()=>{fe(!0),v(H)}),Fa(H,"ready",ce),ae.useLayoutEffect(()=>{if(te.current===null&&se.current!==null&&L){let Z=null;L&&(Z=L.create(a,f)),te.current=Z,ee(Z),Z&&Z.mount(se.current)}},[L,f]);const z=i1(f);return ae.useEffect(()=>{if(!te.current)return;const Z=c1(f,z,["paymentRequest"]);Z&&"update"in te.current&&te.current.update(Z)},[f,z]),ae.useLayoutEffect(()=>()=>{if(te.current&&typeof te.current.destroy=="function")try{te.current.destroy(),te.current=null}catch{}},[]),ae.createElement(ae.Fragment,null,!Te&&m,ae.createElement("div",{id:g,style:{height:Te?"unset":"0px",visibility:Te?"visible":"hidden"},className:p,ref:se}))};return u.displayName=s,u.__elementType=a,u};u1("payment",typeof window>"u");Fs("PaymentElementContext");Fs("StripeUtilsContext");const[AA,,f1]=Fs("PortalProvider"),p1=()=>{const a=f1();return a&&"getContainer"in a&&a.getContainer?a.getContainer:()=>null},Sf=tb({packageName:"@clerk/react"});function h1(a){Sf.setMessages(a).setPackageName(a)}const g1=r1,m1=a=>{s1(()=>{Sf.throwMissingClerkProviderError({source:a})})};var Gl=By();const y1=ci(Gl),b1=Hl({__proto__:null,default:y1},[Gl]),xa=a=>{JE()&&console.error(`Clerk: ${a}`)},qm=(a,...r)=>{const s={...a};for(const i of r)delete s[i];return s},v1=a=>`You've passed multiple children components to <${a}/>. You can only pass a single child component or text.`,w1="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",E1="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",x1="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",S1="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",T1=a=>`<${a} /> can only accept <${a}.Page /> and <${a}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,A1=a=>`Missing props. <${a}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,D1=a=>`Missing props. <${a}.Link /> component requires the following props: url, label and labelIcon.`,C1="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",N1="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",k1="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",R1="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",j1="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",L1="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",O1="Missing props. <UserButton.Action /> component requires the following props: label.",di=a=>r=>{try{return ae.Children.only(a)}catch{const s=ae.Children.toArray(a);return s.length===1&&ae.isValidElement(s[0])?s[0]:Sf.throw(v1(r))}},ui=(a,r)=>(a||(a=r),typeof a=="string"&&(a=ae.createElement("button",null,a)),a),fi=a=>(...r)=>{if(a&&typeof a=="function")return a(...r)},Zo=a=>{const[r,s]=q.useState(new Map),i=q.useRef(r),l=q.useRef(new Map),u=q.useRef(new Map);i.current=r,l.current=new Map(a.map(p=>[p.id,p.component]));const g=new Set(a.map(p=>p.id));return u.current.forEach((p,m)=>{g.has(m)||u.current.delete(m)}),a.map(p=>{const m=p.id,f=u.current.get(m);if(f)return f;const y=()=>{const v=i.current.get(m),E=l.current.get(m);return v?Gl.createPortal(E,v):null},b={id:p.id,mount:v=>s(E=>new Map(E).set(m,v)),unmount:()=>s(v=>{const E=new Map(v);return E.set(m,null),E}),portal:y};return u.current.set(m,b),b})},wa=(a,r)=>!!a&&ae.isValidElement(a)&&a?.type===r,rb=(a,r)=>ib({children:a,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:hi,PageComponent:pi,MenuItemsComponent:Wl,componentName:"UserProfile"},r),sb=(a,r)=>ib({children:a,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:Ql,PageComponent:Zl,componentName:"OrganizationProfile"},r),ob=a=>{const r=[],s=[Ql,Zl,Wl,pi,hi];return ae.Children.forEach(a,i=>{s.some(l=>wa(i,l))||r.push(i)}),r},ib=(a,r)=>{const{children:s,LinkComponent:i,PageComponent:l,MenuItemsComponent:u,reorderItemsLabels:g,componentName:p}=a,{allowForAnyChildren:m=!1}=r||{},f=[],y=new Map;ae.Children.forEach(s,T=>{if(!wa(T,l)&&!wa(T,i)&&!wa(T,u)){T&&!m&&xa(T1(p));return}const{props:O}=T,{children:x,label:_,url:k,labelIcon:L}=O,H=T.key;if(wa(T,l))if($m(O,g))f.push({label:_});else if(yu(O))f.push({label:_,labelIcon:L,children:x,url:k,portalId:Mm("page",O,H,y)});else{xa(A1(p));return}if(wa(T,i))if(bu(O))f.push({label:_,labelIcon:L,url:k,portalId:Mm("link",O,H,y)});else{xa(D1(p));return}});const b=[],v=[],E=[];f.forEach((T,O)=>{if(yu(T)){b.push({component:T.children,id:T.portalId||O}),v.push({component:T.labelIcon,id:T.portalId||O});return}bu(T)&&E.push({component:T.labelIcon,id:T.portalId||O})});const R=Zo(b),C=Zo(v),D=Zo(E),S=[],N=[];return f.forEach((T,O)=>{if($m(T,g)){S.push({label:T.label});return}if(yu(T)){const{portal:x,mount:_,unmount:k}=R.find(te=>te.id===(T.portalId||O)),{portal:L,mount:H,unmount:ee}=C.find(te=>te.id===(T.portalId||O));S.push({label:T.label,url:T.url,mount:_,unmount:k,mountIcon:H,unmountIcon:ee}),N.push({key:`content:${T.portalId||O}`,portal:x}),N.push({key:`label:${T.portalId||O}`,portal:L});return}if(bu(T)){const{portal:x,mount:_,unmount:k}=D.find(L=>L.id===(T.portalId||O));S.push({label:T.label,url:T.url,mountIcon:_,unmountIcon:k}),N.push({key:`label:${T.portalId||O}`,portal:x});return}}),{customPages:S,customPagesPortals:N}},Mm=(a,r,s,i)=>{if(s!=null)return`${a}:key:${s}`;const l=`${a}:${r.label}:${r.url}`,u=i.get(l)??0;return i.set(l,u+1),`${l}:${u}`},$m=(a,r)=>{const{children:s,label:i,url:l,labelIcon:u}=a;return!s&&!l&&!u&&r.some(g=>g===i)},yu=a=>{const{children:r,label:s,url:i,labelIcon:l}=a;return!!r&&!!i&&!!l&&!!s},bu=a=>{const{children:r,label:s,url:i,labelIcon:l}=a;return!r&&!!i&&!!l&&!!s},_1=(a,r)=>P1({children:a,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:Wl,MenuActionComponent:cb,MenuLinkComponent:db,UserProfileLinkComponent:hi,UserProfilePageComponent:pi,allowForAnyChildren:r?.allowForAnyChildren??!1}),P1=({children:a,MenuItemsComponent:r,MenuActionComponent:s,MenuLinkComponent:i,UserProfileLinkComponent:l,UserProfilePageComponent:u,reorderItemsLabels:g,allowForAnyChildren:p=!1})=>{const m=[],f=[],y=[],b=new Map;ae.Children.forEach(a,D=>{if(!wa(D,r)&&!wa(D,l)&&!wa(D,u)){D&&!p&&xa(C1);return}if(wa(D,l)||wa(D,u))return;const{props:S}=D;ae.Children.forEach(S.children,N=>{if(!wa(N,s)&&!wa(N,i)){N&&xa(N1);return}const{props:T}=N,O=N.key,{label:x,labelIcon:_,href:k,onClick:L,open:H}=T;if(wa(N,s))if(Um(T,g))m.push({label:x});else if(wu(T)){const ee={label:x,labelIcon:_};if(L!==void 0)m.push({...ee,onClick:L,portalId:vu("action",T,O,b)});else if(H!==void 0)m.push({...ee,open:H.startsWith("/")?H:`/${H}`,portalId:vu("action",T,O,b)});else{xa("Custom menu item must have either onClick or open property");return}}else{xa(O1);return}if(wa(N,i))if(Eu(T))m.push({label:x,labelIcon:_,href:k,portalId:vu("link",T,O,b)});else{xa(L1);return}})});const v=[],E=[];m.forEach((D,S)=>{wu(D)&&v.push({component:D.labelIcon,id:D.portalId||S}),Eu(D)&&E.push({component:D.labelIcon,id:D.portalId||S})});const R=Zo(v),C=Zo(E);return m.forEach((D,S)=>{if(Um(D,g)&&f.push({label:D.label}),wu(D)){const{portal:N,mount:T,unmount:O}=R.find(_=>_.id===(D.portalId||S)),x={label:D.label,mountIcon:T,unmountIcon:O};"onClick"in D?x.onClick=D.onClick:"open"in D&&(x.open=D.open),f.push(x),y.push({key:`icon:${D.portalId||S}`,portal:N})}if(Eu(D)){const{portal:N,mount:T,unmount:O}=C.find(x=>x.id===(D.portalId||S));f.push({label:D.label,href:D.href,mountIcon:T,unmountIcon:O}),y.push({key:`icon:${D.portalId||S}`,portal:N})}}),{customMenuItems:f,customMenuItemsPortals:y}},vu=(a,r,s,i)=>{if(s!=null)return`${a}:key:${s}`;const l=r.href||r.open||"",u=`${a}:${r.label}:${l}`,g=i.get(u)??0;return i.set(u,g+1),`${u}:${g}`},Um=(a,r)=>{const{children:s,label:i,onClick:l,labelIcon:u}=a;return!s&&!l&&!u&&r.some(g=>g===i)},wu=a=>{const{label:r,labelIcon:s,onClick:i,open:l}=a;return!!s&&!!r&&(typeof i=="function"||typeof l=="string")},Eu=a=>{const{label:r,href:s,labelIcon:i}=a;return!!s&&!!i&&!!r},I1=a=>{const r=a?.isReady;return s=>new Promise((i,l)=>{const{root:u=document?.body,selector:g,timeout:p=0}=s;if(!u){l(new Error("No root element provided"));return}let m=u;if(g&&(m=u?.querySelector(g)),r(m,g)){i();return}const f=new MutationObserver(y=>{for(const b of y)if(!m&&g&&(m=u?.querySelector(g)),(a.childList&&b.type==="childList"||a.attributes&&b.type==="attributes")&&r(m,g)){f.disconnect(),i();return}});f.observe(u,a),p>0&&setTimeout(()=>{f.disconnect(),l(new Error(`Timeout waiting for ${g}`))},p)})},q1=I1({childList:!0,subtree:!0,isReady:(a,r)=>!!a?.childElementCount&&a?.matches?.(r)&&a.childElementCount>0});function na(a,r){const s=q.useRef(),[i,l]=q.useState("rendering");return q.useEffect(()=>{if(!a)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!s.current){const u=`[data-clerk-component="${a}"]`,g=r?.selector;s.current=q1({selector:g?u+g:u}).then(()=>{l("rendered")}).catch(()=>{l("error")})}},[a,r?.selector]),i}const Al=a=>"mount"in a,Fm=a=>"open"in a,Bm=a=>a?.map(({mountIcon:r,unmountIcon:s,...i})=>i);var Vt=class extends ae.PureComponent{constructor(...a){super(...a),this.rootRef=ae.createRef()}componentDidUpdate(a){if(!Al(a)||!Al(this.props))return;const r=qm(a.props||{},"customPages","customMenuItems","children"),s=qm(this.props.props||{},"customPages","customMenuItems","children"),i=a.props?.customPages?.length!==this.props.props?.customPages?.length,l=a.props?.customMenuItems?.length!==this.props.props?.customMenuItems?.length,u=Bm(a.props?.customMenuItems),g=Bm(this.props.props?.customMenuItems);(!_m(r,s)||!_m(u,g)||i||l)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(Al(this.props)&&this.props.mount(this.rootRef.current,this.props.props),Fm(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(Al(this.props)&&this.props.unmount(this.rootRef.current),Fm(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:a=!1}=this.props,r={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return ae.createElement(ae.Fragment,null,!a&&ae.createElement("div",r),this.props.children)}};const st=(a,r)=>{const s=(typeof r=="string"?r:r?.component)||a.displayName||a.name||"Component";a.displayName=s;const i=typeof r=="string"?void 0:r,l=u=>{m1(s||"withClerk");const g=g1(),p=p1();return!g.loaded&&!i?.renderWhileLoading?null:ae.createElement(a,{getContainer:p,...u,component:s,clerk:g})};return l.displayName=`withClerk(${s})`,l},Kl=a=>ae.createElement(ae.Fragment,null,a?.customPagesPortals?.map(({key:r,portal:s})=>q.createElement(s,{key:r})),a?.customMenuItemsPortals?.map(({key:r,portal:s})=>q.createElement(s,{key:r})));st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountSignIn,unmount:a.unmountSignIn,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"SignIn",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountSignUp,unmount:a.unmountSignUp,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"SignUp",renderWhileLoading:!0});function pi({children:a}){return xa(w1),ae.createElement(ae.Fragment,null,a)}function hi({children:a}){return xa(E1),ae.createElement(ae.Fragment,null,a)}const M1=st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:p}=rb(i.children);return ae.createElement(ae.Fragment,null,l&&s,ae.createElement(Vt,{component:r,mount:a.mountUserProfile,unmount:a.unmountUserProfile,updateProps:a.__internal_updateProps,props:{...i,customPages:g},rootProps:u},ae.createElement(Kl,{customPagesPortals:p})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(M1,{Page:pi,Link:hi});const lb=q.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),$1=st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:p}=rb(i.children,{allowForAnyChildren:!!i.__experimental_asProvider}),m={...i.userProfileProps,customPages:g},{customMenuItems:f,customMenuItemsPortals:y}=_1(i.children,{allowForAnyChildren:!!i.__experimental_asProvider}),b=ob(i.children),v={mount:a.mountUserButton,unmount:a.unmountUserButton,updateProps:a.__internal_updateProps,props:{...i,userProfileProps:m,customMenuItems:f}},E={customPagesPortals:p,customMenuItemsPortals:y};return ae.createElement(lb.Provider,{value:v},l&&s,a.loaded&&ae.createElement(Vt,{component:r,...v,hideRootHtmlElement:!!i.__experimental_asProvider,rootProps:u},i.__experimental_asProvider?b:null,ae.createElement(Kl,E)))},{component:"UserButton",renderWhileLoading:!0});function Wl({children:a}){return xa(k1),ae.createElement(ae.Fragment,null,a)}function cb({children:a}){return xa(R1),ae.createElement(ae.Fragment,null,a)}function db({children:a}){return xa(j1),ae.createElement(ae.Fragment,null,a)}function U1(a){const r=q.useContext(lb),s={...r,props:{...r.props,...a}};return ae.createElement(Vt,s)}Object.assign($1,{UserProfilePage:pi,UserProfileLink:hi,MenuItems:Wl,Action:cb,Link:db,__experimental_Outlet:U1});function Zl({children:a}){return xa(x1),ae.createElement(ae.Fragment,null,a)}function Ql({children:a}){return xa(S1),ae.createElement(ae.Fragment,null,a)}const F1=st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:p}=sb(i.children);return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountOrganizationProfile,unmount:a.unmountOrganizationProfile,updateProps:a.__internal_updateProps,props:{...i,customPages:g},rootProps:u},ae.createElement(Kl,{customPagesPortals:p})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(F1,{Page:Zl,Link:Ql});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountCreateOrganization,unmount:a.unmountCreateOrganization,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"CreateOrganization",renderWhileLoading:!0});const ub=q.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),B1=st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}},{customPages:g,customPagesPortals:p}=sb(i.children,{allowForAnyChildren:!!i.__experimental_asProvider}),m={...i.organizationProfileProps,customPages:g},f=ob(i.children),y={mount:a.mountOrganizationSwitcher,unmount:a.unmountOrganizationSwitcher,updateProps:a.__internal_updateProps,props:{...i,organizationProfileProps:m},rootProps:u,component:r};return a.__experimental_prefetchOrganizationSwitcher(),ae.createElement(ub.Provider,{value:y},ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{...y,hideRootHtmlElement:!!i.__experimental_asProvider},i.__experimental_asProvider?f:null,ae.createElement(Kl,{customPagesPortals:p}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function z1(a){const r=q.useContext(ub),s={...r,props:{...r.props,...a}};return ae.createElement(Vt,s)}Object.assign(B1,{OrganizationProfilePage:Zl,OrganizationProfileLink:Ql,__experimental_Outlet:z1});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountOrganizationList,unmount:a.unmountOrganizationList,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"OrganizationList",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,open:a.openGoogleOneTap,close:a.closeGoogleOneTap,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"GoogleOneTap",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountWaitlist,unmount:a.unmountWaitlist,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"Waitlist",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r,{selector:'[data-component-status="ready"]'})==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountPricingTable,unmount:a.unmountPricingTable,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"PricingTable",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountAPIKeys,unmount:a.unmountAPIKeys,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"ApiKeys",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.__internal_mountOAuthConsent,unmount:a.__internal_unmountOAuthConsent,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"OAuthConsent",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.__internal_mountOAuthDeviceVerification,unmount:a.__internal_unmountOAuthDeviceVerification,updateProps:g=>{a.__internal_updateProps(g)},props:i,rootProps:u}))},{component:"OAuthDeviceVerification",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountUserAvatar,unmount:a.unmountUserAvatar,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"UserAvatar",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountTaskChooseOrganization,unmount:a.unmountTaskChooseOrganization,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountTaskResetPassword,unmount:a.unmountTaskResetPassword,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"TaskResetPassword",renderWhileLoading:!0});st(({clerk:a,component:r,fallback:s,...i})=>{const l=na(r)==="rendering"||!a.loaded,u={...l&&s&&{style:{display:"none"}}};return ae.createElement(ae.Fragment,null,l&&s,a.loaded&&ae.createElement(Vt,{component:r,mount:a.mountTaskSetupMFA,unmount:a.unmountTaskSetupMFA,updateProps:a.__internal_updateProps,props:i,rootProps:u}))},{component:"TaskSetupMFA",renderWhileLoading:!0});const Y1=tb({packageName:"@clerk/shared"});function H1(a){Y1.setPackageName({packageName:a})}const zm=new Set,Jl=(a,r,s)=>{const i=e1()||t1(),l=a;zm.has(l)||i||(zm.add(l),console.warn(`Clerk - DEPRECATION WARNING: "${a}" is deprecated and will be removed in the next major release.
${r}`))};function V1(a){const r=a.match(/^(\d+)\.(\d+)\.(\d+)/);if(!r)return null;const[,s,i,l]=r;return{major:parseInt(s,10),minor:parseInt(i,10),patch:parseInt(l,10)}}function X1(a,r){const{major:s,minor:i,patch:l}=a;return r.some(([u,g,p,m])=>s!==u?!1:p===-1?i>g||i===g&&l>=m:i===p&&l>=m)}function G1(a,r){const s=V1(a);return s?X1(s,r):!1}st(({clerk:a,...r})=>{const{client:s,session:i}=a,l=(s.signedInSessions?.length??0)>0;return ae.useEffect(()=>{i===null&&l?a.redirectToAfterSignOut():a.redirectToSignIn(r)},[]),null},"RedirectToSignIn");st(({clerk:a,...r})=>(ae.useEffect(()=>{a.redirectToSignUp(r)},[]),null),"RedirectToSignUp");st(({clerk:a,...r})=>(ae.useEffect(()=>{a.redirectToTasks(r)},[]),null),"RedirectToTasks");st(({clerk:a})=>(ae.useEffect(()=>{Jl("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),a.redirectToUserProfile()},[]),null),"RedirectToUserProfile");st(({clerk:a})=>(ae.useEffect(()=>{Jl("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),a.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");st(({clerk:a})=>(ae.useEffect(()=>{Jl("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),a.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");st(({clerk:a,...r})=>(ae.useEffect(()=>{a.handleRedirectCallback(r)},[]),null),"AuthenticateWithRedirectCallback");typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);function K1(){try{return G1(ae.version,[[18,0,-1,0],[19,0,0,3],[19,1,1,4],[19,2,2,3],[19,3,3,0]])}catch{return!1}}K1();typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);if(globalThis.__clerkSharedModules){const a=globalThis.__clerkSharedModules.react?.version;a&&a!==q.version&&console.warn(`[@clerk/ui/register] React version mismatch detected. Already registered: ${a}, current import: ${q.version}. This may cause issues with the shared @clerk/ui variant.`)}else globalThis.__clerkSharedModules={react:zy,"react-dom":b1,"react-dom/client":Rw,"react/jsx-runtime":xw};st(({clerk:a,children:r,...s})=>{const{appearance:i,getContainer:l,component:u,...g}=s;r=ui(r,"Invite members");const p=di(r)("InviteMembersButton"),m=()=>a.openInviteMembers({appearance:i,getContainer:l}),y={...g,onClick:async b=>(p&&typeof p=="object"&&"props"in p&&await fi(p.props.onClick)(b),m())};return ae.cloneElement(p,y)},{component:"InviteMembersButton",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{appearance:i,getContainer:l,component:u,signUpFallbackRedirectUrl:g,forceRedirectUrl:p,fallbackRedirectUrl:m,signUpForceRedirectUrl:f,mode:y,initialValues:b,withSignUp:v,oauthFlow:E,...R}=s;r=ui(r,"Sign in");const C=di(r)("SignInButton"),D=()=>{const T={forceRedirectUrl:p,fallbackRedirectUrl:m,signUpFallbackRedirectUrl:g,signUpForceRedirectUrl:f,initialValues:b,withSignUp:v,oauthFlow:E};return y==="modal"?a.openSignIn({...T,appearance:i,getContainer:l}):a.redirectToSignIn({...T,signInFallbackRedirectUrl:m,signInForceRedirectUrl:p})},N={...R,onClick:async T=>(C&&typeof C=="object"&&"props"in C&&await fi(C.props.onClick)(T),D())};return ae.cloneElement(C,N)},{component:"SignInButton",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{redirectUrl:i,getContainer:l,component:u,...g}=s;r=ui(r,"Sign in with Metamask");const p=di(r)("SignInWithMetamaskButton"),m=async()=>{async function b(){await a.authenticateWithMetamask({redirectUrl:i||void 0})}b()},y={...g,onClick:async b=>(await fi(p.props.onClick)(b),m())};return ae.cloneElement(p,y)},{component:"SignInWithMetamask",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{redirectUrl:i="/",sessionId:l,signOutOptions:u,getContainer:g,component:p,...m}=s;u&&Jl("SignOutButton `signOutOptions`","Use the `redirectUrl` and `sessionId` props directly instead."),r=ui(r,"Sign out");const f=di(r)("SignOutButton"),y=()=>a.signOut({redirectUrl:i,...l!==void 0&&{sessionId:l},...u}),v={...m,onClick:async E=>(await fi(f.props.onClick)(E),y())};return ae.cloneElement(f,v)},{component:"SignOutButton",renderWhileLoading:!0});st(({clerk:a,children:r,...s})=>{const{appearance:i,unsafeMetadata:l,getContainer:u,component:g,fallbackRedirectUrl:p,forceRedirectUrl:m,signInFallbackRedirectUrl:f,signInForceRedirectUrl:y,mode:b,initialValues:v,oauthFlow:E,...R}=s;r=ui(r,"Sign up");const C=di(r)("SignUpButton"),D=()=>{const T={fallbackRedirectUrl:p,forceRedirectUrl:m,signInFallbackRedirectUrl:f,signInForceRedirectUrl:y,initialValues:v,oauthFlow:E};return b==="modal"?a.openSignUp({...T,appearance:i,unsafeMetadata:l,getContainer:u}):a.redirectToSignUp({...T,signUpFallbackRedirectUrl:p,signUpForceRedirectUrl:m})},N={...R,onClick:async T=>(C&&typeof C=="object"&&"props"in C&&await fi(C.props.onClick)(T),D())};return ae.cloneElement(C,N)},{component:"SignUpButton",renderWhileLoading:!0});h1({packageName:"@clerk/react"});H1("@clerk/react");var xu={exports:{}};const Bs=a=>({...a,__type:"prebuilt_appearance"}),W1=Object.freeze(Object.defineProperty({__proto__:null,experimental_createTheme:Bs},Symbol.toStringTag,{value:"Module"})),Z1=Fy(W1),fb=Bs({name:"dark",variables:{colorBackground:"#212126",colorNeutral:"white",colorPrimary:"#ffffff",colorPrimaryForeground:"black",colorForeground:"white",colorInputForeground:"white",colorInput:"#26262B"},elements:{providerIcon__apple:{filter:"invert(1)"},providerIcon__github:{filter:"invert(1)"},providerIcon__okx_wallet:{filter:"invert(1)"},providerIcon__vercel:{filter:"invert(1)"},activeDeviceIcon:{"--cl-chassis-bottom":"#d2d2d2","--cl-chassis-back":"#e6e6e6","--cl-chassis-screen":"#e6e6e6","--cl-screen":"#111111"}}}),Q1=Bs({name:"shadesOfPurple",baseTheme:fb,variables:{colorBackground:"#3f3c77",colorPrimary:"#f8d80d",colorPrimaryForeground:"#38375f",colorInputForeground:"#a1fdfe",colorShimmer:"rgba(161,253,254,0.36)"}}),yr={boxShadow:"3px 3px 0px #000",border:"2px solid #000","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:active":{boxShadow:"2px 2px 0px #000",transform:"translate(1px)"}},Fr={boxShadow:"3px 3px 0px #000",border:"2px solid #000"},J1=Bs({name:"neobrutalism",simpleStyles:!0,variables:{colorPrimary:"#DF1B1B",colorShimmer:"rgba(255,255,255,0.64)",fontWeight:{normal:500,medium:600,bold:700}},elements:{cardBox:{boxShadow:"7px 7px 0px #000",border:"3px solid #000"},card:{borderRadius:"0"},headerSubtitle:{color:"#212126"},alternativeMethodsBlockButton:yr,socialButtonsIconButton:{...yr},selectButton:{...yr,...Fr,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"}},socialButtonsBlockButton:{...yr,color:"#212126"},profileSectionPrimaryButton:yr,profileSectionItem:{color:"#212126"},avatarImageActionsUpload:yr,menuButton:Fr,menuList:Fr,formButtonPrimary:yr,navbarButton:yr,formFieldAction:{fontWeight:"700"},formFieldInput:{...Fr,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:hover":{...Fr,transform:"scale(1.01)"}},table:Fr,tableHead:{color:"#212126"},dividerLine:{background:"#000"},dividerText:{fontWeight:"700",color:"#212126"},footer:{background:"#fff","& div":{color:"#212126"}},footerActionText:{color:"#212126"},footerActionLink:{fontWeight:"700",borderBottom:"3px solid","&:focus":{boxShadow:"none"}},actionCard:{...Fr},badge:{border:"1px solid #000",background:"#fff",color:"#212126"}}}),ex=Bs({name:"shadcn",cssLayerName:"components",variables:{colorBackground:"var(--card)",colorDanger:"var(--destructive)",colorForeground:"var(--card-foreground)",colorInput:"var(--input)",colorInputForeground:"var(--card-foreground)",colorModalBackdrop:"var(--color-black)",colorMuted:"var(--muted)",colorMutedForeground:"var(--muted-foreground)",colorNeutral:"var(--foreground)",colorPrimary:"var(--primary)",colorPrimaryForeground:"var(--primary-foreground)",colorRing:"var(--ring)",fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",semibold:"var(--font-weight-semibold)",bold:"var(--font-weight-semibold)"}},elements:{input:"bg-transparent dark:bg-input/30",cardBox:"shadow-sm border",popoverBox:"shadow-sm border",button:{'&[data-variant="solid"]::after':{display:"none"}},providerIcon__apple:"dark:invert",providerIcon__github:"dark:invert",providerIcon__okx_wallet:"dark:invert",providerIcon__vercel:"dark:invert"}}),tx=Bs({name:"simple",simpleStyles:!0}),ax=Object.freeze(Object.defineProperty({__proto__:null,dark:fb,experimental__simple:tx,neobrutalism:J1,shadcn:ex,shadesOfPurple:Q1},Symbol.toStringTag,{value:"Module"})),nx=Fy(ax);var Ym;function rx(){return Ym||(Ym=1,(function(a){var r=Object.defineProperty,s=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.prototype.hasOwnProperty,u=(f,y,b,v)=>{if(y&&typeof y=="object"||typeof y=="function")for(let E of i(y))!l.call(f,E)&&E!==b&&r(f,E,{get:()=>y[E],enumerable:!(v=s(y,E))||v.enumerable});return f},g=(f,y,b)=>(u(f,y,"default"),b&&u(b,y,"default")),p=f=>u(r({},"__esModule",{value:!0}),f),m={};a.exports=p(m),g(m,Z1,a.exports),g(m,nx,a.exports)})(xu)),xu.exports}rx();function Hm(a){if(a instanceof Error)return a;if(typeof a=="string")return new Error(a);try{return new Error(JSON.stringify(a))}catch{return new Error(String(a))}}function sx({error:a,resetError:r}){return c.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50 p-6",children:c.jsxs("div",{className:"max-w-lg w-full text-center",children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Something went wrong"}),c.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"This part of the app hit an error. The rest of the app is still running."}),null,c.jsx("button",{type:"button",onClick:r,className:"mt-4 rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700",children:"Try again"})]})})}class ox extends q.Component{state={error:null};static getDerivedStateFromError(r){return{error:Hm(r)}}componentDidCatch(r,s){console.error("ErrorBoundary caught an error:",Hm(r),s.componentStack)}componentDidUpdate(r){this.state.error!==null&&r.resetKey!==this.props.resetKey&&this.resetError()}resetError=()=>{this.setState({error:null})};render(){const{error:r}=this.state;if(r===null)return this.props.children;const s=this.props.FallbackComponent??sx;return c.jsx(s,{error:r,resetError:this.resetError})}}function ix({showLocalChip:a=!0}){const[r,s]=q.useState(""),[,i]=Qy(),l=u=>{u.preventDefault(),r&&i(`/workspace/${r}`)};return c.jsxs("main",{className:"chooser-page",children:[c.jsxs("header",{className:"chooser-top",children:[c.jsxs(da,{href:"/",className:"studio-wordmark","aria-label":"Mapping Studio home","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),a&&c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Browser-local workspace"]})]}),c.jsxs("section",{className:"chooser-content","aria-labelledby":"chooser-title",children:[c.jsxs("div",{className:"chooser-intro",children:[c.jsx("div",{className:"eyebrow",children:"Engineering workspace"}),c.jsx("h1",{id:"chooser-title",children:"Choose a discipline"}),c.jsx("p",{children:"Keep drawing groups organized and traceable on this device."})]}),c.jsxs("form",{className:"discipline-picker",onSubmit:l,"data-testid":"form-discipline-picker",children:[c.jsxs("div",{className:"discipline-field",children:[c.jsx("label",{htmlFor:"discipline-select",children:"Drawing type"}),c.jsxs("div",{className:"discipline-select-control",children:[c.jsxs("select",{id:"discipline-select",value:r,onChange:u=>s(u.target.value),"aria-label":"Drawing type","data-testid":"select-discipline",children:[c.jsx("option",{value:"",disabled:!0,children:"Select PFD or P&ID"}),c.jsx("option",{value:"pfd",children:"PFD — Process Flow Diagram"}),c.jsx("option",{value:"pid",children:"P&ID — Piping and Instrumentation Diagram"})]}),c.jsx(Er,{size:17,"aria-hidden":"true"})]})]}),c.jsxs("button",{className:"btn primary discipline-submit",type:"submit",disabled:!r,"data-testid":"button-open-discipline",children:["Open workspace ",c.jsx(Fw,{size:16,"aria-hidden":"true"})]})]}),c.jsxs("div",{className:"chooser-foot",children:[c.jsx(Vn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Stored in this browser only."})," Nothing is uploaded or shared."]})]})]}),c.jsxs("footer",{className:"chooser-footer",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:"PDFs and project data stay in this browser"}),c.jsx("span",{children:"© 2026 gaurav.cbiindia"})]})]})}function lx(){return c.jsx("main",{className:"chooser-page not-found",children:c.jsxs("div",{className:"not-found-card",children:[c.jsx("div",{className:"eyebrow",children:"Page not found"}),c.jsx("h1",{children:"This workspace does not exist."}),c.jsx(da,{href:"/",className:"btn primary","data-testid":"link-not-found-home",children:"Return to disciplines"})]})})}const Tf="pid-mapping-studio:hierarchies:v2",pb="pid-mapping-studio:hierarchies:v1",$l=80,cx=128,dx=5e3,ux=64;class Qo extends Error{rawValue;constructor(r,s=null){super(r),this.name="HierarchyLoadError",this.rawValue=s}}function Uu(){return{version:2,pfd:[],pid:[]}}function Af(a,r){return Object.keys(a).length===r.length&&r.every(i=>Object.prototype.hasOwnProperty.call(a,i))}function Ul(a,r,s=new Set){let i=0;const l=(u,g)=>{if(g>ux)return!1;for(const p of u){if(!p||typeof p!="object"||Array.isArray(p))return!1;const m=p;if(!Af(m,r?["id","name","kind","expanded","children"]:["id","name","expanded","children"])||typeof m.id!="string"||m.id.length===0||m.id.length>cx||typeof m.name!="string"||m.name.trim().length===0||m.name!==m.name.trim()||m.name.length>$l||r&&!["technology","projects","proposals","project","proposal","client","legacy"].includes(String(m.kind))||typeof m.expanded!="boolean"||!Array.isArray(m.children)||s.has(m.id)||(s.add(m.id),i+=1,i>dx||!l(m.children,g+1)))return!1}return!0};return l(a,0)}function Go(a,r){if(a.kind==="legacy")return(r===null||r==="legacy")&&a.children.every(i=>Go(i,"legacy"));const s={technology:null,projects:"technology",proposals:"technology",project:"projects",proposal:"proposals",client:"project"};return a.kind==="client"&&r!=="project"&&r!=="proposal"||a.kind!=="client"&&s[a.kind]!==r?!1:a.kind==="technology"?a.children.filter(i=>i.kind==="projects").length===1&&a.children.filter(i=>i.kind==="proposals").length===1&&a.children.every(i=>Go(i,"technology")):a.kind==="projects"||a.kind==="proposals"?a.children.every(i=>Go(i,a.kind)):a.kind==="project"||a.kind==="proposal"?a.children.every(i=>Go(i,a.kind)):a.children.length===0}function hb(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!Af(r,["version","pfd","pid"])||r.version!==2||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const s=new Set;return Ul(r.pfd,!0,s)&&Ul(r.pid,!0,s)&&[...r.pfd,...r.pid].every(i=>Go(i,null))}function fx(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const r=a;if(!Af(r,["version","pfd","pid"])||r.version!==1||!Array.isArray(r.pfd)||!Array.isArray(r.pid))return!1;const s=new Set;return Ul(r.pfd,!1,s)&&Ul(r.pid,!1,s)}function Fu(a){return a.map(r=>({id:r.id,name:r.name,kind:"legacy",expanded:r.expanded,children:Fu(r.children)}))}function px(a){return{version:2,pfd:Fu(a.pfd),pid:Fu(a.pid)}}function hx(){let a;try{a=window.localStorage.getItem(Tf),a===null&&(a=window.localStorage.getItem(pb))}catch{throw new Qo("Saved groups could not be read from browser storage.")}if(a===null)return Uu();let r;try{r=JSON.parse(a)}catch{throw new Qo("Saved group data is not valid JSON.",a)}if(hb(r))return r;if(fx(r))return px(r);throw new Qo("Saved group data is malformed or uses an unsupported format.",a)}function gx(a){if(!hb(a))throw new Error("Groups could not be saved because the hierarchy is invalid.");window.localStorage.setItem(Tf,JSON.stringify(a))}function Ll(a,r,s){return a.map(i=>i.id===r?s(i):{...i,children:Ll(i.children,r,s)})}function gb(a,r){return a.filter(s=>s.id!==r).map(s=>({...s,children:gb(s.children,r)}))}function mb(a,r){return r?a.id===r||a.children.some(s=>mb(s,r)):!1}function Bu(a){return a.reduce((r,s)=>r+1+Bu(s.children),0)}function zu(a,r){if(!r)return null;for(const s of a){if(s.id===r)return s;const i=zu(s.children,r);if(i)return i}return null}function yb(a,r,s){return a.flatMap(i=>{const l=r?`${r} / ${i.name}`:i.name;return[...s(i)?[{id:i.id,label:l}]:[],...yb(i.children,l,s)]})}function bb(a){return yb(a,"",r=>r.kind==="client"||r.kind==="legacy")}const mx="modulepreload",yx=function(a){return"/pid-mapping-studio-app/"+a},Vm={},sn=function(r,s,i){let l=Promise.resolve();if(s&&s.length>0){let m=function(f){return Promise.all(f.map(y=>Promise.resolve(y).then(b=>({status:"fulfilled",value:b}),b=>({status:"rejected",reason:b}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),p=g?.nonce||g?.getAttribute("nonce");l=m(s.map(f=>{if(f=yx(f),f in Vm)return;Vm[f]=!0;const y=f.endsWith(".css"),b=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${b}`))return;const v=document.createElement("link");if(v.rel=y?"stylesheet":mx,y||(v.as="script"),v.crossOrigin="",v.href=f,p&&v.setAttribute("nonce",p),document.head.appendChild(v),y)return new Promise((E,R)=>{v.addEventListener("load",E),v.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${f}`)))})}))}function u(g){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=g,window.dispatchEvent(p),!p.defaultPrevented)throw g}return l.then(g=>{for(const p of g||[])p.status==="rejected"&&u(p.reason);return r().catch(u)})};async function bx(){const[a,r]=await Promise.all([sn(()=>import("./pdf-TYrZqVzP.js"),[]),sn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);return a.GlobalWorkerOptions.workerSrc=r.default,a}function vx({fileId:a,alias:r,pageCount:s,page:i,onPageChange:l,loadBytes:u,markers:g=[],onMarkerClick:p}){const m=q.useRef(null),f=q.useRef(null),[y,b]=q.useState(0),[v,E]=q.useState("loading"),[R,C]=q.useState(0),D=q.useRef(u);return D.current=u,q.useEffect(()=>{const S=f.current;if(!S)return;b(S.clientWidth);const N=new ResizeObserver(()=>b(Math.round(S.clientWidth/24)*24));return N.observe(S),()=>N.disconnect()},[]),q.useEffect(()=>{if(!y)return;let S=!1,N=null,T=null;return E("loading"),(async()=>{try{const[O,x]=await Promise.all([bx(),D.current(a)]);if(S)return;T=O.getDocument({data:new Uint8Array(x.slice(0))});const _=await T.promise;if(S)return;const k=await _.getPage(Math.min(Math.max(i,1),_.numPages)),L=k.getViewport({scale:1}),H=Math.min(window.devicePixelRatio||1,2),ee=y/L.width*H,te=k.getViewport({scale:ee}),se=m.current;if(!se||S)return;se.width=Math.floor(te.width),se.height=Math.floor(te.height),se.style.width="100%";const Te=k.render({canvas:se,canvasContext:se.getContext("2d"),viewport:te});N=Te,await Te.promise,S||E("ready")}catch(O){if(S||O?.name==="RenderingCancelledException")return;E("error")}})(),()=>{S=!0,N?.cancel(),T?.destroy().catch(()=>{})}},[a,i,y,R]),c.jsxs("div",{className:"ppv","data-testid":"panel-source-preview",children:[c.jsxs("div",{className:"ppv-bar",children:[c.jsx("span",{className:"ppv-label","data-testid":"text-preview-label",children:"Original source PDF · not generated CAD"}),c.jsxs("div",{className:"ppv-nav",children:[c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Previous page",disabled:i<=1,onClick:()=>l(i-1),"data-testid":"button-preview-prev",children:c.jsx(Vy,{size:15})}),c.jsxs("span",{"data-testid":"text-preview-page","aria-live":"polite",children:[r," · page ",i," of ",s]}),c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Next page",disabled:i>=s,onClick:()=>l(i+1),"data-testid":"button-preview-next",children:c.jsx(vf,{size:15})})]})]}),c.jsxs("div",{className:"ppv-stage",ref:f,children:[c.jsxs("div",{className:"ppv-canvas-wrap",style:{visibility:v==="ready"?"visible":"hidden"},children:[c.jsx("canvas",{ref:m,"aria-label":`Original source page ${i} of ${r}`,"data-testid":"canvas-source-preview"}),v==="ready"&&g.length>0&&c.jsx("div",{className:"ppv-markers","aria-label":"Extracted tag source locations",children:g.map((S,N)=>c.jsx("button",{className:"ppv-marker",type:"button",style:{left:`${S.location.x*100}%`,top:`${S.location.y*100}%`,width:`${Math.max(S.location.width*100,1.1)}%`,height:`${Math.max(S.location.height*100,1.2)}%`},"aria-label":`OCR location for ${S.label}; verify against the PDF`,title:`${S.label} · OCR candidate location`,onClick:()=>p?.(S.id),"data-testid":`marker-source-${S.id}-${N}`,children:c.jsx("span",{children:S.label})},`${S.id}-${S.location.pageNumber}-${N}`))})]}),g.length>0&&c.jsx("div",{className:"ppv-marker-note",role:"note",children:"Red boxes show OCR candidate locations. Confirm each tag against the original PDF."}),v==="loading"&&c.jsxs("div",{className:"ppv-overlay",role:"status","data-testid":"status-preview-loading",children:[c.jsx(ka,{size:18,className:"pdf-spin"})," Rendering page"]}),v==="error"&&c.jsxs("div",{className:"ppv-overlay ppv-error",role:"alert","data-testid":"status-preview-error",children:[c.jsx(xr,{size:18})," This page could not be shown.",c.jsx("button",{type:"button",className:"btn",onClick:()=>C(S=>S+1),"data-testid":"button-preview-retry",children:"Try again"})]})]})]})}var zt=Uint8Array,Ba=Uint16Array,Df=Int32Array,ec=new zt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),tc=new zt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Yu=new zt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),vb=function(a,r){for(var s=new Ba(31),i=0;i<31;++i)s[i]=r+=1<<a[i-1];for(var l=new Df(s[30]),i=1;i<30;++i)for(var u=s[i];u<s[i+1];++u)l[u]=u-s[i]<<5|i;return{b:s,r:l}},wb=vb(ec,2),Eb=wb.b,Hu=wb.r;Eb[28]=258,Hu[258]=28;var xb=vb(tc,0),wx=xb.b,Xm=xb.r,Vu=new Ba(32768);for(var Tt=0;Tt<32768;++Tt){var br=(Tt&43690)>>1|(Tt&21845)<<1;br=(br&52428)>>2|(br&13107)<<2,br=(br&61680)>>4|(br&3855)<<4,Vu[Tt]=((br&65280)>>8|(br&255)<<8)>>1}var wn=(function(a,r,s){for(var i=a.length,l=0,u=new Ba(r);l<i;++l)a[l]&&++u[a[l]-1];var g=new Ba(r);for(l=1;l<r;++l)g[l]=g[l-1]+u[l-1]<<1;var p;if(s){p=new Ba(1<<r);var m=15-r;for(l=0;l<i;++l)if(a[l])for(var f=l<<4|a[l],y=r-a[l],b=g[a[l]-1]++<<y,v=b|(1<<y)-1;b<=v;++b)p[Vu[b]>>m]=f}else for(p=new Ba(i),l=0;l<i;++l)a[l]&&(p[l]=Vu[g[a[l]-1]++]>>15-a[l]);return p}),Sr=new zt(288);for(var Tt=0;Tt<144;++Tt)Sr[Tt]=8;for(var Tt=144;Tt<256;++Tt)Sr[Tt]=9;for(var Tt=256;Tt<280;++Tt)Sr[Tt]=7;for(var Tt=280;Tt<288;++Tt)Sr[Tt]=8;var ni=new zt(32);for(var Tt=0;Tt<32;++Tt)ni[Tt]=5;var Ex=wn(Sr,9,0),xx=wn(Sr,9,1),Sx=wn(ni,5,0),Tx=wn(ni,5,1),Su=function(a){for(var r=a[0],s=1;s<a.length;++s)a[s]>r&&(r=a[s]);return r},rn=function(a,r,s){var i=r/8|0;return(a[i]|a[i+1]<<8)>>(r&7)&s},Tu=function(a,r){var s=r/8|0;return(a[s]|a[s+1]<<8|a[s+2]<<16)>>(r&7)},Cf=function(a){return(a+7)/8|0},gi=function(a,r,s){return(r==null||r<0)&&(r=0),(s==null||s>a.length)&&(s=a.length),new zt(a.subarray(r,s))},Ax=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ya=function(a,r,s){var i=new Error(r||Ax[a]);if(i.code=a,Error.captureStackTrace&&Error.captureStackTrace(i,ya),!s)throw i;return i},Dx=function(a,r,s,i){var l=a.length,u=i?i.length:0;if(!l||r.f&&!r.l)return s||new zt(0);var g=!s,p=g||r.i!=2,m=r.i;g&&(s=new zt(l*3));var f=function(ot){var dt=s.length;if(ot>dt){var qt=new zt(Math.max(dt*2,ot));qt.set(s),s=qt}},y=r.f||0,b=r.p||0,v=r.b||0,E=r.l,R=r.d,C=r.m,D=r.n,S=l*8;do{if(!E){y=rn(a,b,1);var N=rn(a,b+1,3);if(b+=3,N)if(N==1)E=xx,R=Tx,C=9,D=5;else if(N==2){var _=rn(a,b,31)+257,k=rn(a,b+10,15)+4,L=_+rn(a,b+5,31)+1;b+=14;for(var H=new zt(L),ee=new zt(19),te=0;te<k;++te)ee[Yu[te]]=rn(a,b+te*3,7);b+=k*3;for(var se=Su(ee),Te=(1<<se)-1,fe=wn(ee,se,1),te=0;te<L;){var ce=fe[rn(a,b,Te)];b+=ce&15;var T=ce>>4;if(T<16)H[te++]=T;else{var z=0,Z=0;for(T==16?(Z=3+rn(a,b,3),b+=2,z=H[te-1]):T==17?(Z=3+rn(a,b,7),b+=3):T==18&&(Z=11+rn(a,b,127),b+=7);Z--;)H[te++]=z}}var me=H.subarray(0,_),Se=H.subarray(_);C=Su(me),D=Su(Se),E=wn(me,C,1),R=wn(Se,D,1)}else ya(1);else{var T=Cf(b)+4,O=a[T-4]|a[T-3]<<8,x=T+O;if(x>l){m&&ya(0);break}p&&f(v+O),s.set(a.subarray(T,x),v),r.b=v+=O,r.p=b=x*8,r.f=y;continue}if(b>S){m&&ya(0);break}}p&&f(v+131072);for(var P=(1<<C)-1,J=(1<<D)-1,U=b;;U=b){var z=E[Tu(a,b)&P],V=z>>4;if(b+=z&15,b>S){m&&ya(0);break}if(z||ya(2),V<256)s[v++]=V;else if(V==256){U=b,E=null;break}else{var oe=V-254;if(V>264){var te=V-257,de=ec[te];oe=rn(a,b,(1<<de)-1)+Eb[te],b+=de}var ve=R[Tu(a,b)&J],qe=ve>>4;ve||ya(3),b+=ve&15;var Se=wx[qe];if(qe>3){var de=tc[qe];Se+=Tu(a,b)&(1<<de)-1,b+=de}if(b>S){m&&ya(0);break}p&&f(v+131072);var Le=v+oe;if(v<Se){var gt=u-Se,nt=Math.min(Se,Le);for(gt+v<0&&ya(3);v<nt;++v)s[v]=i[gt+v]}for(;v<Le;++v)s[v]=s[v-Se]}}r.l=E,r.p=U,r.b=v,r.f=y,E&&(y=1,r.m=C,r.d=R,r.n=D)}while(!y);return v!=s.length&&g?gi(s,0,v):s.subarray(0,v)},Fn=function(a,r,s){s<<=r&7;var i=r/8|0;a[i]|=s,a[i+1]|=s>>8},$o=function(a,r,s){s<<=r&7;var i=r/8|0;a[i]|=s,a[i+1]|=s>>8,a[i+2]|=s>>16},Au=function(a,r){for(var s=[],i=0;i<a.length;++i)a[i]&&s.push({s:i,f:a[i]});var l=s.length,u=s.slice();if(!l)return{t:Tb,l:0};if(l==1){var g=new zt(s[0].s+1);return g[s[0].s]=1,{t:g,l:1}}s.sort(function(x,_){return x.f-_.f}),s.push({s:-1,f:25001});var p=s[0],m=s[1],f=0,y=1,b=2;for(s[0]={s:-1,f:p.f+m.f,l:p,r:m};y!=l-1;)p=s[s[f].f<s[b].f?f++:b++],m=s[f!=y&&s[f].f<s[b].f?f++:b++],s[y++]={s:-1,f:p.f+m.f,l:p,r:m};for(var v=u[0].s,i=1;i<l;++i)u[i].s>v&&(v=u[i].s);var E=new Ba(v+1),R=Xu(s[y-1],E,0);if(R>r){var i=0,C=0,D=R-r,S=1<<D;for(u.sort(function(_,k){return E[k.s]-E[_.s]||_.f-k.f});i<l;++i){var N=u[i].s;if(E[N]>r)C+=S-(1<<R-E[N]),E[N]=r;else break}for(C>>=D;C>0;){var T=u[i].s;E[T]<r?C-=1<<r-E[T]++-1:++i}for(;i>=0&&C;--i){var O=u[i].s;E[O]==r&&(--E[O],++C)}R=r}return{t:new zt(E),l:R}},Xu=function(a,r,s){return a.s==-1?Math.max(Xu(a.l,r,s+1),Xu(a.r,r,s+1)):r[a.s]=s},Gm=function(a){for(var r=a.length;r&&!a[--r];);for(var s=new Ba(++r),i=0,l=a[0],u=1,g=function(m){s[i++]=m},p=1;p<=r;++p)if(a[p]==l&&p!=r)++u;else{if(!l&&u>2){for(;u>138;u-=138)g(32754);u>2&&(g(u>10?u-11<<5|28690:u-3<<5|12305),u=0)}else if(u>3){for(g(l),--u;u>6;u-=6)g(8304);u>2&&(g(u-3<<5|8208),u=0)}for(;u--;)g(l);u=1,l=a[p]}return{c:s.subarray(0,i),n:r}},Uo=function(a,r){for(var s=0,i=0;i<r.length;++i)s+=a[i]*r[i];return s},Sb=function(a,r,s){var i=s.length,l=Cf(r+2);a[l]=i&255,a[l+1]=i>>8,a[l+2]=a[l]^255,a[l+3]=a[l+1]^255;for(var u=0;u<i;++u)a[l+u+4]=s[u];return(l+4+i)*8},Km=function(a,r,s,i,l,u,g,p,m,f,y){Fn(r,y++,s),++l[256];for(var b=Au(l,15),v=b.t,E=b.l,R=Au(u,15),C=R.t,D=R.l,S=Gm(v),N=S.c,T=S.n,O=Gm(C),x=O.c,_=O.n,k=new Ba(19),L=0;L<N.length;++L)++k[N[L]&31];for(var L=0;L<x.length;++L)++k[x[L]&31];for(var H=Au(k,7),ee=H.t,te=H.l,se=19;se>4&&!ee[Yu[se-1]];--se);var Te=f+5<<3,fe=Uo(l,Sr)+Uo(u,ni)+g,ce=Uo(l,v)+Uo(u,C)+g+14+3*se+Uo(k,ee)+2*k[16]+3*k[17]+7*k[18];if(m>=0&&Te<=fe&&Te<=ce)return Sb(r,y,a.subarray(m,m+f));var z,Z,me,Se;if(Fn(r,y,1+(ce<fe)),y+=2,ce<fe){z=wn(v,E,0),Z=v,me=wn(C,D,0),Se=C;var P=wn(ee,te,0);Fn(r,y,T-257),Fn(r,y+5,_-1),Fn(r,y+10,se-4),y+=14;for(var L=0;L<se;++L)Fn(r,y+3*L,ee[Yu[L]]);y+=3*se;for(var J=[N,x],U=0;U<2;++U)for(var V=J[U],L=0;L<V.length;++L){var oe=V[L]&31;Fn(r,y,P[oe]),y+=ee[oe],oe>15&&(Fn(r,y,V[L]>>5&127),y+=V[L]>>12)}}else z=Ex,Z=Sr,me=Sx,Se=ni;for(var L=0;L<p;++L){var de=i[L];if(de>255){var oe=de>>18&31;$o(r,y,z[oe+257]),y+=Z[oe+257],oe>7&&(Fn(r,y,de>>23&31),y+=ec[oe]);var ve=de&31;$o(r,y,me[ve]),y+=Se[ve],ve>3&&($o(r,y,de>>5&8191),y+=tc[ve])}else $o(r,y,z[de]),y+=Z[de]}return $o(r,y,z[256]),y+Z[256]},Cx=new Df([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Tb=new zt(0),Nx=function(a,r,s,i,l,u){var g=u.z||a.length,p=new zt(i+g+5*(1+Math.ceil(g/7e3))+l),m=p.subarray(i,p.length-l),f=u.l,y=(u.r||0)&7;if(r){y&&(m[0]=u.r>>3);for(var b=Cx[r-1],v=b>>13,E=b&8191,R=(1<<s)-1,C=u.p||new Ba(32768),D=u.h||new Ba(R+1),S=Math.ceil(s/3),N=2*S,T=function(mt){return(a[mt]^a[mt+1]<<S^a[mt+2]<<N)&R},O=new Df(25e3),x=new Ba(288),_=new Ba(32),k=0,L=0,H=u.i||0,ee=0,te=u.w||0,se=0;H+2<g;++H){var Te=T(H),fe=H&32767,ce=D[Te];if(C[fe]=ce,D[Te]=fe,te<=H){var z=g-H;if((k>7e3||ee>24576)&&(z>423||!f)){y=Km(a,m,0,O,x,_,L,ee,se,H-se,y),ee=k=L=0,se=H;for(var Z=0;Z<286;++Z)x[Z]=0;for(var Z=0;Z<30;++Z)_[Z]=0}var me=2,Se=0,P=E,J=fe-ce&32767;if(z>2&&Te==T(H-J))for(var U=Math.min(v,z)-1,V=Math.min(32767,H),oe=Math.min(258,z);J<=V&&--P&&fe!=ce;){if(a[H+me]==a[H+me-J]){for(var de=0;de<oe&&a[H+de]==a[H+de-J];++de);if(de>me){if(me=de,Se=J,de>U)break;for(var ve=Math.min(J,de-2),qe=0,Z=0;Z<ve;++Z){var Le=H-J+Z&32767,gt=C[Le],nt=Le-gt&32767;nt>qe&&(qe=nt,ce=Le)}}}fe=ce,ce=C[fe],J+=fe-ce&32767}if(Se){O[ee++]=268435456|Hu[me]<<18|Xm[Se];var ot=Hu[me]&31,dt=Xm[Se]&31;L+=ec[ot]+tc[dt],++x[257+ot],++_[dt],te=H+me,++k}else O[ee++]=a[H],++x[a[H]]}}for(H=Math.max(H,te);H<g;++H)O[ee++]=a[H],++x[a[H]];y=Km(a,m,f,O,x,_,L,ee,se,H-se,y),f||(u.r=y&7|m[y/8|0]<<3,y-=7,u.h=D,u.p=C,u.i=H,u.w=te)}else{for(var H=u.w||0;H<g+f;H+=65535){var qt=H+65535;qt>=g&&(m[y/8|0]=f,qt=g),y=Sb(m,y+1,a.subarray(H,qt))}u.i=g}return gi(p,0,i+Cf(y)+l)},kx=(function(){for(var a=new Int32Array(256),r=0;r<256;++r){for(var s=r,i=9;--i;)s=(s&1&&-306674912)^s>>>1;a[r]=s}return a})(),Rx=function(){var a=-1;return{p:function(r){for(var s=a,i=0;i<r.length;++i)s=kx[s&255^r[i]]^s>>>8;a=s},d:function(){return~a}}},jx=function(a,r,s,i,l){if(!l&&(l={l:1},r.dictionary)){var u=r.dictionary.subarray(-32768),g=new zt(u.length+a.length);g.set(u),g.set(a,u.length),a=g,l.w=u.length}return Nx(a,r.level==null?6:r.level,r.mem==null?l.l?Math.ceil(Math.max(8,Math.min(13,Math.log(a.length)))*1.5):20:12+r.mem,s,i,l)},Ab=function(a,r){var s={};for(var i in a)s[i]=a[i];for(var i in r)s[i]=r[i];return s},vn=function(a,r){return a[r]|a[r+1]<<8},Ja=function(a,r){return(a[r]|a[r+1]<<8|a[r+2]<<16|a[r+3]<<24)>>>0},Du=function(a,r){return Ja(a,r)+Ja(a,r+4)*4294967296},ca=function(a,r,s){for(;s;++r)a[r]=s,s>>>=8};function Lx(a,r){return jx(a,r||{},0,0)}function Ox(a,r){return Dx(a,{i:2},r&&r.out,r&&r.dictionary)}var Db=function(a,r,s,i){for(var l in a){var u=a[l],g=r+l,p=i;Array.isArray(u)&&(p=Ab(i,u[1]),u=u[0]),ArrayBuffer.isView(u)?s[g]=[u,p]:(s[g+="/"]=[new zt(0),p],Db(u,g,s,i))}},Wm=typeof TextEncoder<"u"&&new TextEncoder,Gu=typeof TextDecoder<"u"&&new TextDecoder,_x=0;try{Gu.decode(Tb,{stream:!0}),_x=1}catch{}var Px=function(a){for(var r="",s=0;;){var i=a[s++],l=(i>127)+(i>223)+(i>239);if(s+l>a.length)return{s:r,r:gi(a,s-1)};l?l==3?(i=((i&15)<<18|(a[s++]&63)<<12|(a[s++]&63)<<6|a[s++]&63)-65536,r+=String.fromCharCode(55296|i>>10,56320|i&1023)):l&1?r+=String.fromCharCode((i&31)<<6|a[s++]&63):r+=String.fromCharCode((i&15)<<12|(a[s++]&63)<<6|a[s++]&63):r+=String.fromCharCode(i)}};function Ku(a,r){var s;if(Wm)return Wm.encode(a);for(var i=a.length,l=new zt(a.length+(a.length>>1)),u=0,g=function(f){l[u++]=f},s=0;s<i;++s){if(u+5>l.length){var p=new zt(u+8+(i-s<<1));p.set(l),l=p}var m=a.charCodeAt(s);m<128||r?g(m):m<2048?(g(192|m>>6),g(128|m&63)):m>55295&&m<57344?(m=65536+(m&1047552)|a.charCodeAt(++s)&1023,g(240|m>>18),g(128|m>>12&63),g(128|m>>6&63),g(128|m&63)):(g(224|m>>12),g(128|m>>6&63),g(128|m&63))}return gi(l,0,u)}function Ix(a,r){if(r){for(var s="",i=0;i<a.length;i+=16384)s+=String.fromCharCode.apply(null,a.subarray(i,i+16384));return s}else{if(Gu)return Gu.decode(a);var l=Px(a),u=l.s,s=l.r;return s.length&&ya(8),u}}var qx=function(a,r){return r+30+vn(a,r+26)+vn(a,r+28)},Mx=function(a,r,s){var i=vn(a,r+28),l=vn(a,r+30),u=Ix(a.subarray(r+46,r+46+i),!(vn(a,r+8)&2048)),g=r+46+i,p=$x(a,g,l,s,Ja(a,r+20),Ja(a,r+24),Ja(a,r+42)),m=p[0],f=p[1],y=p[2];return[vn(a,r+10),m,f,u,g+l+vn(a,r+32),y]},$x=function(a,r,s,i,l,u,g){var p=l==4294967295,m=u==4294967295,f=g==4294967295,y=r+s,b=p+m+f;if(i&&b){for(;r+4<y;r+=4+vn(a,r+2))if(vn(a,r)==1)return[p?Du(a,r+4+8*m):l,m?Du(a,r+4):u,f?Du(a,r+4+8*(m+p)):g,1];i<2&&ya(13)}return[l,u,g,0]},Wu=function(a){var r=0;if(a)for(var s in a){var i=a[s].length;i>65535&&ya(9),r+=i+4}return r},Zm=function(a,r,s,i,l,u,g,p){var m=i.length,f=s.extra,y=p&&p.length,b=Wu(f);ca(a,r,g!=null?33639248:67324752),r+=4,g!=null&&(a[r++]=20,a[r++]=s.os),a[r]=20,r+=2,a[r++]=s.flag<<1|(u<0&&8),a[r++]=l&&8,a[r++]=s.compression&255,a[r++]=s.compression>>8;var v=new Date(s.mtime==null?Date.now():s.mtime),E=v.getFullYear()-1980;if((E<0||E>119)&&ya(10),ca(a,r,E<<25|v.getMonth()+1<<21|v.getDate()<<16|v.getHours()<<11|v.getMinutes()<<5|v.getSeconds()>>1),r+=4,u!=-1&&(ca(a,r,s.crc),ca(a,r+4,u<0?-u-2:u),ca(a,r+8,s.size)),ca(a,r+12,m),ca(a,r+14,b),r+=16,g!=null&&(ca(a,r,y),ca(a,r+6,s.attrs),ca(a,r+10,g),r+=14),a.set(i,r),r+=m,b)for(var R in f){var C=f[R],D=C.length;ca(a,r,+R),ca(a,r+2,D),a.set(C,r+4),r+=4+D}return y&&(a.set(p,r),r+=y),r},Ux=function(a,r,s,i,l){ca(a,r,101010256),ca(a,r+8,s),ca(a,r+10,s),ca(a,r+12,i),ca(a,r+16,l)};function Fx(a,r){r||(r={});var s={},i=[];Db(a,"",s,r);var l=0,u=0;for(var g in s){var p=s[g],m=p[0],f=p[1],y=f.level==0?0:8,b=Ku(g),v=b.length,E=f.comment,R=E&&Ku(E),C=R&&R.length,D=Wu(f.extra);v>65535&&ya(11);var S=y?Lx(m,f):m,N=S.length,T=Rx();T.p(m),i.push(Ab(f,{size:m.length,crc:T.d(),c:S,f:b,m:R,u:v!=g.length||R&&E.length!=C,o:l,compression:y})),l+=30+v+D+N,u+=76+2*(v+D)+(C||0)+N}for(var O=new zt(u+22),x=l,_=u-l,k=0;k<i.length;++k){var b=i[k];Zm(O,b.o,b,b.f,b.u,b.c.length);var L=30+b.f.length+Wu(b.extra);O.set(b.c,b.o+L),Zm(O,l,b,b.f,b.u,b.c.length,b.o,b.m),l+=16+L+(b.m?b.m.length:0)}return Ux(O,l,i.length,_,x),O}function Qm(a,r){for(var s={},i=a.length-22;Ja(a,i)!=101010256;--i)(!i||a.length-i>65558)&&ya(13);var l=vn(a,i+8);if(!l)return{};var u=Ja(a,i+16),g=Ja(a,i-20)==117853008;if(g){var p=Ja(a,i-12);g=Ja(a,p)==101075792,g&&(l=Ja(a,p+32),u=Ja(a,p+48))}for(var m=0;m<l;++m){var f=Mx(a,u,g),y=f[0],b=f[1],v=f[2],E=f[3],R=f[4],C=f[5],D=qx(a,C);u=R,y?y==8?s[E]=Ox(a.subarray(D,D+b),{out:new zt(v)}):ya(14,"unknown compression type "+y):s[E]=gi(a,D,D+b)}return s}const Jm="DIAGNOSTIC_README.txt";function Bx(a){return(a.split(/[\\/]/).pop()??"").replace(/[\u0000-\u001f<>:"/\\|?*]/g,"_").trim().replace(/^[. ]+|[. ]+$/g,"")||"diagnostic-file"}function zx(a,r){const s=a.lastIndexOf("."),i=s>0?a.slice(0,s):a,l=s>0?a.slice(s):"";let u=a,g=2;for(;r.has(u.toLocaleLowerCase());)u=`${i}-${g}${l}`,g+=1;return r.add(u.toLocaleLowerCase()),u}function Yx(a){if(a.length===0)throw new Error("Add at least one diagnostic file before downloading the ZIP.");const r=Object.create(null),s=new Set([Jm.toLocaleLowerCase()]),i=[];return a.forEach((l,u)=>{const g=zx(Bx(l.name),s);r[g]=l.bytes,i.push(`${String(u+1).padStart(2,"0")}. ${g} | ${l.bytes.byteLength} bytes | ${l.mimeType||"type not provided"}`)}),r[Jm]=Ku(["P&ID Mapping Studio diagnostic bundle","Files were selected locally. The app did not upload them to a server.","","Files included:",...i,""].join(`
`)),Fx(r,{level:1})}const Hx=200*1024*1024;function ey(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(1)} MB`}function Vx(){const[a,r]=q.useState([]),[s,i]=q.useState(!1),[l,u]=q.useState(""),[g,p]=q.useState(""),m=q.useMemo(()=>a.reduce((v,E)=>v+E.size,0),[a]),f=v=>{if(u(""),p(""),v.length===0)return;const E=new Set(a.map(D=>`${D.name}:${D.size}:${D.lastModified}`)),R=v.filter(D=>{const S=`${D.name}:${D.size}:${D.lastModified}`;return E.has(S)?!1:(E.add(S),!0)});if(m+R.reduce((D,S)=>D+S.size,0)>Hx){p("The selected files exceed the 200 MB bundle limit. Remove some files and try again.");return}r(D=>[...D,...R]),R.length<v.length&&u(`${v.length-R.length} duplicate file(s) were skipped.`)},y=v=>{r(E=>E.filter(R=>R!==v)),u(""),p("")},b=async()=>{if(!(a.length===0||s)){i(!0),u(""),p("");try{const v=await Promise.all(a.map(async N=>({name:N.name,mimeType:N.type,bytes:new Uint8Array(await N.arrayBuffer())}))),E=Yx(v),R=new Uint8Array(E.byteLength);R.set(E);const C=new Blob([R.buffer],{type:"application/zip"}),D=URL.createObjectURL(C),S=document.createElement("a");S.href=D,S.download="pid-mapping-diagnostics.zip",S.click(),window.setTimeout(()=>URL.revokeObjectURL(D),5e3),u(`ZIP ready with ${a.length} file(s). Attach pid-mapping-diagnostics.zip to the chat.`)}catch(v){p(v instanceof Error?v.message:"The diagnostic ZIP could not be created.")}finally{i(!1)}}};return c.jsxs("section",{className:"diagnostic-upload-panel","aria-labelledby":"diagnostic-upload-title","data-testid":"panel-diagnostic-upload",children:[c.jsxs("div",{className:"diagnostic-upload-heading",children:[c.jsxs("div",{className:"diagnostic-upload-copy",children:[c.jsx("span",{className:"diagnostic-upload-kicker",children:"LOCAL DIAGNOSTICS"}),c.jsx("h3",{id:"diagnostic-upload-title",children:"Share run files"}),c.jsx("p",{children:"Select AutoCAD logs, DXF/DWG, ZIP, JSON, scripts, screenshots, or other files."})]}),c.jsxs("div",{className:"diagnostic-upload-actions",children:[c.jsxs("label",{className:"btn primary diagnostic-upload-select","data-testid":"label-add-diagnostic-files",children:[c.jsx(Vr,{size:16})," Add files",c.jsx("input",{type:"file",multiple:!0,"aria-label":"Choose diagnostic files from this device","data-testid":"input-add-diagnostic-files",onChange:v=>{f(Array.from(v.currentTarget.files??[])),v.currentTarget.value=""}})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:a.length===0||s,"data-testid":"button-download-diagnostic-zip",children:[s?c.jsx(ka,{size:16,className:"diagnostic-upload-spin"}):c.jsx(bf,{size:16}),s?"Preparing ZIP…":"Download one ZIP"]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{r([]),u(""),p("")},disabled:a.length===0||s,"data-testid":"button-clear-diagnostic-files",children:[c.jsx(ai,{size:15})," Clear"]})]})]}),c.jsxs("div",{className:"diagnostic-upload-privacy","data-testid":"text-diagnostic-local-only",children:[c.jsx(Vn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay on this device."})," Nothing is sent to a server. Download one ZIP, then attach it to the chat to share it."]})]}),c.jsxs("div",{className:"diagnostic-upload-count","data-testid":"text-diagnostic-file-count",children:[a.length," file(s) selected · ",ey(m)," of 200 MB"]}),a.length>0&&c.jsx("ul",{className:"diagnostic-upload-list","aria-label":"Selected diagnostic files","data-testid":"list-diagnostic-files",children:a.map((v,E)=>c.jsxs("li",{"data-testid":`row-diagnostic-file-${E}`,children:[c.jsx(Hn,{size:15,"aria-hidden":"true"}),c.jsx("span",{className:"diagnostic-upload-file-name",title:v.name,children:v.name}),c.jsx("span",{className:"diagnostic-upload-file-size",children:ey(v.size)}),c.jsx("button",{type:"button",className:"diagnostic-upload-remove",onClick:()=>y(v),"aria-label":`Remove ${v.name}`,"data-testid":`button-remove-diagnostic-file-${E}`,children:c.jsx($u,{size:16})})]},`${v.name}:${v.size}:${v.lastModified}:${E}`))}),l&&c.jsx("p",{className:"diagnostic-upload-status",role:"status","data-testid":"status-diagnostic-upload",children:l}),g&&c.jsx("p",{className:"diagnostic-upload-error",role:"alert","data-testid":"error-diagnostic-upload",children:g})]})}const Cu="STANDARD",Xx="STANDARD";function Gx(a,r,s){const i=a(),l=a(),u=a(),g=a(),p=a(),m=a(),f=a(),y=a(),b=a();function v(x,_,k){const L=a();return x(0,"TABLE"),x(2,_),x(5,L),x(330,"0"),x(100,"AcDbSymbolTable"),x(70,k),L}function E(x,_,k,L,H=a()){return x(0,_),x(_==="DIMSTYLE"?105:5,H),x(330,k),x(100,"AcDbSymbolTableRecord"),x(100,L),H}function R(x){const _=v(x,"VPORT",1);E(x,"VPORT",_,"AcDbViewportTableRecord"),x(2,"*ACTIVE"),x(70,0),x(10,0),x(20,0),x(11,1),x(21,1),x(12,r/2),x(22,s/2),x(13,0),x(23,0),x(14,10),x(24,10),x(15,10),x(25,10),x(16,0),x(26,0),x(36,1),x(17,0),x(27,0),x(37,0),x(40,s*1.1),x(41,r/s),x(42,50),x(43,0),x(44,0),x(50,0),x(51,0),x(71,0),x(72,1e3),x(73,1),x(74,3),x(75,0),x(76,0),x(77,0),x(78,0),x(281,0),x(0,"ENDTAB")}function C(x,_){for(const ee of["VIEW","UCS"])v(x,ee,0),x(0,"ENDTAB");const k=v(x,"APPID",1);E(x,"APPID",k,"AcDbRegAppTableRecord"),x(2,"ACAD"),x(70,0),x(0,"ENDTAB");const L=v(x,"DIMSTYLE",1);x(100,"AcDbDimStyleTable"),x(71,0),E(x,"DIMSTYLE",L,"AcDbDimStyleTableRecord"),x(2,Xx),x(70,0),x(40,1),x(140,2.5),x(340,_),x(0,"ENDTAB");const H=v(x,"BLOCK_RECORD",2);for(const[ee,te,se]of[["*Model_Space",m,y],["*Paper_Space",f,b]])E(x,"BLOCK_RECORD",H,"AcDbBlockTableRecord",te),x(2,ee),x(340,se),x(70,4),x(280,1),x(281,0);x(0,"ENDTAB")}function D(x){x(0,"SECTION"),x(2,"BLOCKS");for(const[_,k]of[["*Model_Space",m],["*Paper_Space",f]])x(0,"BLOCK"),x(5,a()),x(330,k),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockBegin"),x(2,_),x(70,0),x(10,0),x(20,0),x(30,0),x(3,_),x(1,""),x(0,"ENDBLK"),x(5,a()),x(330,k),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockEnd");x(0,"ENDSEC")}function S(x,_,k,L,H=!1){x(0,H?"ACDBDICTIONARYWDFLT":"DICTIONARY"),x(5,_),x(330,k),x(100,"AcDbDictionary"),x(280,0),x(281,1);for(const[ee,te]of L)x(3,ee),x(350,te);H&&(x(100,"AcDbDictionaryWithDefault"),x(340,p))}function N(x,_,k,L,H){x(0,"LAYOUT"),x(5,k),x(330,u),x(100,"AcDbPlotSettings"),x(1,""),x(4,""),x(6,"");for(const ee of[40,41,42,43])x(ee,0);x(44,r),x(45,s);for(const ee of[46,47,48,49,140,141])x(ee,0);x(142,1),x(143,1),x(70,H===0?1024:0),x(72,1),x(73,0),x(74,5),x(7,""),x(75,16),x(76,0),x(77,2),x(78,300),x(147,1),x(148,0),x(149,0),x(100,"AcDbLayout"),x(1,_),x(70,1),x(71,H),x(10,0),x(20,0),x(11,r),x(21,s),x(12,0),x(22,0),x(32,0),x(14,0),x(24,0),x(34,0),x(15,r),x(25,s),x(35,0),x(146,0),x(13,0),x(23,0),x(33,0),x(16,1),x(26,0),x(36,0),x(17,0),x(27,1),x(37,0),x(76,1),x(330,L)}function T(x){x(0,"SECTION"),x(2,"OBJECTS"),S(x,i,"0",[["ACAD_GROUP",l],["ACAD_LAYOUT",u],["ACAD_PLOTSTYLENAME",g]]),S(x,l,i,[]),S(x,u,i,[["Model",y],["Layout1",b]]),S(x,g,i,[["Normal",p]],!0),x(0,"ACDBPLACEHOLDER"),x(5,p),x(330,g),N(x,"Model",y,m,0),N(x,"Layout1",b,f,1),x(0,"ENDSEC")}function O(x){x(0,"SECTION"),x(2,"CLASSES");for(const[_,k,L]of[["LAYOUT","AcDbLayout",2],["ACDBDICTIONARYWDFLT","AcDbDictionaryWithDefault",1],["ACDBPLACEHOLDER","AcDbPlaceHolder",1]])x(0,"CLASS"),x(1,_),x(2,k),x(3,"ObjectDBX Classes"),x(90,0),x(91,L),x(280,0),x(281,0);x(0,"ENDSEC")}return{modelSpace:m,normalPlotStyle:p,beginTable:v,tableRecord:E,writeViewport:R,writeRemainingTables:C,writeBlocks:D,writeObjects:T,writeClasses:O}}function Nu(a){if(!Number.isFinite(a))throw new Error("A PDF coordinate is not a finite number.");return Number(a.toFixed(7)).toString()}function Kx(a){return a.replace(/[\r\n\t]/g," ").replace(/\\/g,"\\\\").replace(/[^\x20-\x7e]/g,r=>`\\U+${r.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")}`)}const ty=/[<>\/\\":;?*|,=\u0000-\u001f\u007f]/;function Cb(a){const r=a.replace(/^\uFEFF/,"").split(/\r?\n/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF export rejected: the output does not contain complete group-code/value pairs.");const s=[];for(let i=0;i<r.length;i+=2){const l=Number(r[i].trim());if(!/^\d+$/.test(r[i].trim())||!Number.isInteger(l)||r[i+1]===void 0)throw new Error(`DXF export rejected: malformed group-code/value pair at line ${i+1}.`);s.push({code:l,value:r[i+1]})}if(s.at(-1)?.code!==0||s.at(-1)?.value!=="EOF")throw new Error("DXF export rejected: the output is incomplete (missing EOF).");return s}function Wx(a,r,s=0){return!a||a.trim()!==a||a.length>255?!1:r==="BLOCK_RECORD"&&/^\*[A-Za-z0-9_.$-]+$/.test(a)||r==="VPORT"&&a.toUpperCase()==="*ACTIVE"?!0:s&16&&a.includes("|")?a.split("|").every(i=>i.length>0&&!ty.test(i)):!ty.test(a)}function Nb(a,r,s,i=[]){const l=new Set;let u=!1,g=!1;for(let p=0;p<a.length;p+=1){const m=a[p];if(m.code===0&&m.value==="SECTION"&&a[p+1]?.code===2&&a[p+1]?.value==="TABLES"){u=!0,g=!0,p+=1;continue}if(!u)continue;if(m.code===0&&m.value==="ENDSEC"){u=!1;continue}if(m.code!==0||m.value!=="TABLE")continue;const f=a[p+1];if(f?.code!==2||!f.value.trim())throw new Error("DXF export rejected: a symbol table has a blank or missing table name.");const y=f.value.toUpperCase();if(l.has(y))throw new Error(`DXF export rejected: the ${y} symbol table is duplicated.`);l.add(y);const b=new Set;let v=p+1;for(;v<a.length&&a[v].code!==0;)v+=1;const E=new Set;for(let D=v;D<a.length&&!(a[D].code===0&&["ENDTAB","ENDSEC"].includes(a[D].value));D+=1)a[D].code===2&&a[D].value.trim()&&E.add(a[D].value.toUpperCase());let R=0,C=!1;for(;v<a.length&&a[v].code===0;){if(a[v].value==="ENDTAB"){C=!0,p=v;break}if(a[v].value==="ENDSEC")break;R+=1;let D=v+1;for(;D<a.length&&a[D].code!==0;)D+=1;if(a[v].value!==y)throw new Error(`DXF export rejected: ${y} contains an unexpected ${a[v].value} record at line ${v*2+2}.`);let S=-1,N=0,T="";for(let L=v+1;L<D;L+=1){if(a[L].code===2){if(S>=0)throw new Error(`DXF export rejected: ${y} record has multiple name fields at line ${L*2+1}.`);S=L}a[L].code===70&&(N=Number(a[L].value)),a[L].code===3&&(T=a[L].value)}const O=S>=0?a[S].value:"",x=!O.trim();let _=O;if(y==="STYLE"&&(N&1)!==0){const L=(S>=0?S:v)*2+2;if(S<0)throw new Error(`DXF export rejected: STYLE shape-file record is missing its group-2 name field at line ${L}.`);if(!T.trim())throw new Error(`DXF export rejected: STYLE shape-file record has no font file in group 3 at line ${L}.`);if(O!==""){if(!r)throw new Error(`DXF export rejected: STYLE shape-file record must have an empty name per DXF format at line ${L}.`);i.push({table:y,line:L,previousName:O,name:""}),a[S].value="",_=""}}else if(x||!Wx(O,y,N)){const L=(S>=0?S:v)*2+2;if(!x||!["STYLE","DIMSTYLE"].includes(y))throw new Error(`DXF export rejected: ${y} table record ${R} has ${x?"a blank name":`an invalid name ${JSON.stringify(O)}`} at line ${L}. Correct the source value before exporting.`);if(!r)throw new Error(`DXF export rejected: ${y} table record ${R} still has ${x?"a blank name":"an invalid name"} after repair at line ${L}.`);const H=y==="DIMSTYLE"?"AUTOMATION_DIMSTYLE":"AUTOMATION_TEXTSTYLE";_=H;let ee=2;for(;E.has(_.toUpperCase());)_=`${H}_${ee++}`;if(E.add(_.toUpperCase()),i.push({table:y,line:L,previousName:O,name:_}),S>=0)a[S].value=_;else{let te=v+1;for(;te<D&&[5,105,330,100].includes(a[te].code);)te+=1;s.push({index:te,pair:{code:2,value:_}})}}if(_){const L=_.toUpperCase();if(b.has(L))throw new Error(`DXF export rejected: ${y} table record ${R} duplicates the name ${JSON.stringify(_)}.`);b.add(L)}v=D}if(!C)throw new Error(`DXF export rejected: the ${y} symbol table is missing ENDTAB.`)}if(!g)throw new Error("DXF export rejected: the output has no TABLES section to validate.");if(u)throw new Error("DXF export rejected: TABLES section is missing ENDSEC.");for(const p of["STYLE","DIMSTYLE"])if(!l.has(p))throw new Error(`DXF export rejected: the required ${p} symbol table is missing.`)}function Zx(a){return kb(a).dxf}function kb(a){const r=Cb(a),s=[],i=[];Nb(r,!0,s,i),s.sort((u,g)=>g.index-u.index);for(const u of s)r.splice(u.index,0,u.pair);const l=`${r.flatMap(({code:u,value:g})=>[String(u),g]).join(`\r
`)}\r
`;return Nf(l),{dxf:l,repairs:i}}function Nf(a){Nb(Cb(a),!1,[])}function Qx(a){const r=Number.parseInt(a.replace("#",""),16);return Number.isFinite(r)?r:0}function DA(a,r,s){if(!Number.isFinite(r)||!Number.isFinite(s)||r<=0||s<=0)throw new Error("A DXF page must have positive finite dimensions.");const i=[],l=(S,N)=>i.push(String(S),typeof N=="number"?Nu(N):N);let u=256;const g=()=>(u++).toString(16).toUpperCase(),p=Gx(g,r,s),m=new Map;for(const S of a)if(S.kind==="polyline"&&S.dash?.some(N=>N>0)){const N=S.dash.map(T=>Nu(T)).join(",");m.has(N)||m.set(N,{name:`PDF_DASH_${m.size+1}`,pattern:S.dash})}const f=S=>S.trim()||"0",y=S=>{l(5,g()),l(330,p.modelSpace),l(100,"AcDbEntity"),l(67,0),l(410,"Model"),l(8,f(S.layer));const N=Qx(S.color);(N>>16&255)<16&&(N>>8&255)<16&&(N&255)<16?l(62,7):(l(62,256),l(420,N)),S.opacity!==void 0&&S.opacity<1&&l(440,33554432|Math.round(Math.max(0,S.opacity)*255))};p.writeClasses(l),l(0,"SECTION"),l(2,"TABLES"),p.writeViewport(l);const b=p.beginTable(l,"LTYPE",3+m.size);for(const S of["BYBLOCK","BYLAYER","CONTINUOUS"])p.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,S),l(70,0),l(3,S==="CONTINUOUS"?"Solid line":""),l(72,65),l(73,0),l(40,0);for(const{name:S,pattern:N}of m.values()){const T=N.length%2?[...N,...N]:N;p.tableRecord(l,"LTYPE",b,"AcDbLinetypeTableRecord"),l(2,S),l(70,0),l(3,"Source PDF dash pattern"),l(72,65),l(73,T.length),l(40,T.reduce((O,x)=>O+Math.abs(x),0)),T.forEach((O,x)=>{l(49,x%2?-O:O),l(74,0)})}l(0,"ENDTAB");const v=[...new Set(["0",...a.map(S=>f(S.layer))])],E=p.beginTable(l,"LAYER",v.length);for(const S of v)p.tableRecord(l,"LAYER",E,"AcDbLayerTableRecord"),l(2,S),l(70,0),l(62,7),l(6,"CONTINUOUS"),l(290,1),l(370,-3),l(390,p.normalPlotStyle);l(0,"ENDTAB");const R=p.beginTable(l,"STYLE",1),C=p.tableRecord(l,"STYLE",R,"AcDbTextStyleTableRecord");l(2,Cu),l(70,0),l(40,0),l(41,1),l(50,0),l(71,0),l(42,2.5),l(3,"txt.shx"),l(4,""),l(0,"ENDTAB"),p.writeRemainingTables(l,C),l(0,"ENDSEC"),p.writeBlocks(l),l(0,"SECTION"),l(2,"ENTITIES");for(const S of a)if(S.kind==="polyline"){if(S.points.length<2)continue;l(0,"LWPOLYLINE"),y(S),l(370,S.lineWeight);const N=S.dash?.length?m.get(S.dash.map(T=>Nu(T)).join(",")):void 0;N&&l(6,N.name),l(100,"AcDbPolyline"),l(90,S.points.length),l(70,(S.closed?1:0)|(N?128:0));for(const T of S.points)l(10,T.x),l(20,T.y)}else if(S.kind==="hatch"){const N=S.loops.filter(T=>T.length>=3);if(!N.length)continue;l(0,"HATCH"),y(S),l(100,"AcDbHatch"),l(10,0),l(20,0),l(30,0),l(210,0),l(220,0),l(230,1),l(2,"SOLID"),l(70,1),l(71,0),l(91,N.length);for(const T of N){l(92,2),l(72,0),l(73,1),l(93,T.length);for(const O of T)l(10,O.x),l(20,O.y);l(97,0)}l(75,0),l(76,1),l(98,0)}else{if(!S.text.trim()||!(S.height>0))continue;const N=S.text.match(/[\s\S]{1,180}/g)??[];let T=0;for(const O of N){const x=T/S.text.length,_=(T+O.length)/S.text.length,k={x:S.start.x+(S.end.x-S.start.x)*x,y:S.start.y+(S.end.y-S.start.y)*x},L={x:S.start.x+(S.end.x-S.start.x)*_,y:S.start.y+(S.end.y-S.start.y)*_};l(0,"TEXT"),y(S),l(100,"AcDbText"),l(10,k.x),l(20,k.y),l(30,0),l(40,S.height),l(1,Kx(O)),l(50,S.rotation),l(7,Cu),l(72,Math.hypot(L.x-k.x,L.y-k.y)>1e-8?5:0),l(11,L.x),l(21,L.y),l(31,0),l(100,"AcDbText"),l(73,0),T+=O.length}}l(0,"ENDSEC"),p.writeObjects(l),l(0,"EOF");const D=i.splice(0);return l(0,"SECTION"),l(2,"HEADER"),l(9,"$ACADVER"),l(1,"AC1018"),l(9,"$DWGCODEPAGE"),l(3,"ANSI_1252"),l(9,"$HANDSEED"),l(5,u.toString(16).toUpperCase()),l(9,"$INSUNITS"),l(70,4),l(9,"$MEASUREMENT"),l(70,1),l(9,"$INSBASE"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMIN"),l(10,0),l(20,0),l(30,0),l(9,"$EXTMAX"),l(10,r),l(20,s),l(30,0),l(9,"$LIMMIN"),l(10,0),l(20,0),l(9,"$LIMMAX"),l(10,r),l(20,s),l(9,"$TILEMODE"),l(70,1),l(9,"$CTAB"),l(1,"Model"),l(9,"$CLAYER"),l(8,"0"),l(9,"$CELTYPE"),l(6,"BYLAYER"),l(9,"$TEXTSTYLE"),l(7,Cu),l(9,"$CECOLOR"),l(62,256),l(9,"$LTSCALE"),l(40,1),l(9,"$CELTSCALE"),l(40,1),l(9,"$PSLTSCALE"),l(70,0),l(0,"ENDSEC"),Zx(`${i.concat(D).join(`\r
`)}\r
`)}const Jx=["LTYPE","LAYER","STYLE","APPID","DIMSTYLE","BLOCK_RECORD"];function eS(a){const r=a.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;r.at(-1)==="";)r.pop();if(!r.length||r.length%2!==0)throw new Error("DXF structural repair rejected: incomplete group-code/value pairs.");const s=[];for(let i=0;i<r.length;i+=2){const l=Number(r[i].trim());if(!/^\d+$/.test(r[i].trim())||!Number.isInteger(l))throw new Error(`DXF structural repair rejected: invalid group code at line ${i+1}.`);s.push({code:l,value:r[i+1]})}return s}function tS(a){return`${a.flatMap(({code:r,value:s})=>[String(r),s]).join(`\r
`)}\r
`}function aS(a){const r=eS(a),s=new Map;let i="",l=-1;for(let C=0;C<r.length;C+=1){const D=r[C];if(D.code===0&&D.value.trim().toUpperCase()==="SECTION"&&r[C+1]?.code===2){i=r[++C].value.trim().toUpperCase();continue}if(D.code===0&&D.value.trim().toUpperCase()==="ENDSEC"){i==="TABLES"&&(l=C),i="";continue}if(i!=="TABLES"||D.code!==0||D.value.trim().toUpperCase()!=="TABLE")continue;const S=r[C+1]?.code===2?r[C+1].value.trim().toUpperCase():"";if(!S)throw new Error("DXF structural repair rejected: a TABLES record has no table name.");let N=C+1;for(;N<r.length&&!(r[N].code===0&&r[N].value.trim().toUpperCase()==="ENDTAB");)N+=1;if(N>=r.length)throw new Error(`DXF structural repair rejected: ${S} table is missing ENDTAB.`);s.set(S,{start:C,end:N,name:S})}if(l<0)throw new Error("DXF structural repair rejected: TABLES section is missing ENDSEC.");for(const C of Jx)if(!s.has(C))throw new Error(`DXF structural repair rejected: required ${C} symbol table is missing; re-save the source as a modern ASCII DXF.`);const u=new Set(r.filter(C=>C.code===5||C.code===105).map(C=>C.value.trim().toUpperCase()).filter(C=>/^[0-9A-F]+$/.test(C)));let g=0n;for(const C of u){const D=BigInt(`0x${C}`);D>g&&(g=D)}const p=()=>{do g+=1n;while(u.has(g.toString(16).toUpperCase()));const C=g.toString(16).toUpperCase();return u.add(C),C},m=(...C)=>{const D=[];for(let S=0;S<C.length;S+=2)D.push({code:Number(C[S]),value:String(C[S+1])});return D},f=[],y=C=>m(0,"TABLE",2,C,5,p(),330,"0",100,"AcDbSymbolTable",70,0,0,"ENDTAB"),b=()=>{const C=p();return m(0,"TABLE",2,"VPORT",5,C,330,"0",100,"AcDbSymbolTable",70,1,0,"VPORT",5,p(),330,C,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0,0,"ENDTAB")},v=["VPORT","VIEW","UCS"].filter(C=>!s.has(C));for(const C of v){const D=C==="VPORT"?b():y(C);r.splice(l,0,...D),l+=D.length,f.push(C)}const E=s.get("VPORT");if(E){let C=!1;for(let D=E.start+1;D<E.end;D+=1){if(r[D].code!==0||r[D].value.trim().toUpperCase()!=="VPORT")continue;let S=D+1;for(;S<E.end&&r[S].code!==0;)S+=1;if(r.slice(D,S).some(N=>N.code===2&&N.value.trim().toUpperCase()==="*ACTIVE")){C=!0;break}D=S-1}if(!C){const D=r.findIndex((x,_)=>_>E.start&&_<E.end&&x.code===0),S=r.slice(E.start+1,D).find(x=>x.code===5)?.value.trim();if(!S)throw new Error("DXF structural repair rejected: VPORT table header has no handle.");const N=r.findIndex((x,_)=>_>E.start&&_<D&&x.code===70);N<0?r.splice(D,0,{code:70,value:"1"}):r[N].value=String(Number(r[N].value)+1);const T=m(0,"VPORT",5,p(),330,S,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0),O=r.findIndex((x,_)=>_>E.start&&x.code===0&&x.value.trim().toUpperCase()==="ENDTAB");r.splice(O,0,...T),f.push("VPORT:*ACTIVE")}}if(!f.length)return{dxf:a,addedTables:f};const R=tS(r);return Nf(R),{dxf:R,addedTables:f}}function Us(a){if(a.byteLength>50*1024*1024)throw new Error("DXF repair limit is 50 MB per file. The original file was not changed.");let r="";const s=a[0]===239&&a[1]===187&&a[2]===191?3:0;for(let p=s;p<a.length;p+=16384)r+=String.fromCharCode(...a.subarray(p,p+16384));if(r.startsWith("AutoCAD Binary DXF"))throw new Error("Binary DXF cannot be repaired in this browser. Save an ASCII DXF copy in AutoCAD first.");const i=kb(r),l=aS(i.dxf);if(!i.repairs.length&&!l.addedTables.length)return{content:a,repairs:[],addedTables:[]};const u=l.addedTables.length?l.dxf:i.dxf,g=new Uint8Array(u.length);for(let p=0;p<u.length;p+=1)g[p]=u.charCodeAt(p);return{content:g,repairs:i.repairs,addedTables:l.addedTables}}function nS(){const[a,r]=q.useState(""),[s,i]=q.useState(!1),[l,u]=q.useState(!1),g=q.useRef(null);async function p(m){i(!0),u(!1),r("");try{const f=Us(new Uint8Array(await m.arrayBuffer())),y=new Blob([new Uint8Array(f.content)],{type:"application/dxf"}),b=URL.createObjectURL(y),v=document.createElement("a");v.href=b,v.download="REPAIRED_DRAWING.dxf",document.body.appendChild(v),v.click(),v.remove(),window.setTimeout(()=>URL.revokeObjectURL(b),1e4),r(`${f.repairs.length} symbol-table name(s) repaired; validated copy downloaded. Original file unchanged. AutoCAD open test still required.`)}catch(f){u(!0),r(f instanceof Error?f.message:"DXF repair failed. No download was created.")}finally{i(!1)}}return c.jsxs("div",{className:"dxf-repair-control",children:[c.jsx("button",{className:"btn",type:"button",disabled:s,onClick:()=>g.current?.click(),children:s?"Checking DXF…":"Repair an existing DXF"}),c.jsx("input",{ref:g,type:"file",accept:".dxf",disabled:s,"aria-label":"DXF to repair",hidden:!0,onChange:m=>{const f=m.target.files?.[0];m.target.value="",f&&p(f)}}),c.jsx("p",{children:"Local only · Repairs blank ordinary STYLE/DIMSTYLE names and preserves anonymous SHX shape-font STYLE records as DXF requires. Geometry, layers and SHX definitions stay unchanged. Maximum 50 MB."}),a&&c.jsx("p",{role:l?"alert":"status",children:a})]})}const mi=["itemTag","description","equipmentName","equipmentType","nominalDiameter","fluidService","lineSpec","fromTag","toTag","notes"];function kf(a){if(!Array.isArray(a)||a.length>64)throw new Error("Use at most 64 explicit attribute rules.");const r=new Set;return a.map(s=>{const i=s,l=typeof i?.attributeTag=="string"?i.attributeTag.trim().toUpperCase():"";if(!/^[A-Z][A-Z0-9_-]{0,63}$/.test(l)||r.has(l))throw new Error("Attribute tags must be unique, nonblank CAD field names (for example TAG_NO).");if(!mi.includes(i.edeField)||!["tag","text","number"].includes(i.valueType)||!["inside","above","below"].includes(i.textZone))throw new Error(`Attribute rule ${l} has an unsupported field, value type or text zone.`);return r.add(l),{attributeTag:l,edeField:i.edeField,valueType:i.valueType,textZone:i.textZone}})}function rS(a){const r=new Map;for(const s of a){const i=s.itemTag.trim().toUpperCase();if(!i)continue;const l=r.get(i)??new Set;l.add(s.stableId.toUpperCase()),r.set(i,l)}return[...r].filter(([,s])=>s.size>1).map(([s])=>s).sort()}const Rb=a=>`pid-cad-attribute-rules:v1:${a||"legends-default"}`;function jb(a){const r=localStorage.getItem(Rb(a));return r?kf(JSON.parse(r)):[]}function sS({scope:a}){const[r,s]=q.useState(()=>{try{return jb(a)}catch{return[]}}),[i,l]=q.useState(""),[u,g]=q.useState(!1);function p(m,f){s(y=>y.map((b,v)=>v===m?{...b,...f}:b)),g(!0),l("Unsaved changes: save these rules before downloading a runner.")}return c.jsxs("details",{className:"runner-group-hint",children:[c.jsx("summary",{children:"Block attributes · Arial Narrow text"}),c.jsx("p",{children:"Final text keeps its imported height and position. AutoCAD must have Arial Narrow installed. Attribute rules belong only to the selected mapping scope. No saved rule means review—not guessing."}),r.map((m,f)=>c.jsxs("fieldset",{style:{marginBlock:8},children:[c.jsxs("legend",{children:["Attribute rule ",f+1]}),c.jsxs("label",{children:["Block field ",c.jsx("input",{"aria-label":`Attribute tag ${f+1}`,value:m.attributeTag,onChange:y=>p(f,{attributeTag:y.target.value})})]}),c.jsxs("label",{children:["EDE value ",c.jsx("select",{value:m.edeField,onChange:y=>p(f,{edeField:y.target.value}),children:mi.map(y=>c.jsx("option",{children:y},y))})]}),c.jsxs("label",{children:["Expected type ",c.jsxs("select",{value:m.valueType,onChange:y=>p(f,{valueType:y.target.value}),children:[c.jsx("option",{value:"tag",children:"Tag"}),c.jsx("option",{value:"text",children:"Text"}),c.jsx("option",{value:"number",children:"Number"})]})]}),c.jsxs("label",{children:["PDF text location ",c.jsxs("select",{value:m.textZone,onChange:y=>p(f,{textZone:y.target.value}),children:[c.jsx("option",{value:"inside",children:"Inside symbol"}),c.jsx("option",{value:"above",children:"Above symbol"}),c.jsx("option",{value:"below",children:"Below symbol"})]})]}),c.jsx("button",{className:"btn subtle danger",type:"button",onClick:()=>{s(y=>y.filter((b,v)=>v!==f)),g(!0),l("Save to apply the removal.")},children:"Remove rule"})]},f)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>{s(m=>[...m,{attributeTag:"TAG_NO",edeField:"itemTag",valueType:"tag",textZone:"above"}]),g(!0),l("Save rules before downloading a runner.")},disabled:r.length>=64,children:"Add attribute rule"})," ",c.jsx("button",{className:"btn primary",type:"button",disabled:!u,onClick:()=>{try{const m=kf(r);localStorage.setItem(Rb(a),JSON.stringify(m)),s(m),g(!1),l("Rules saved locally for this mapping scope.")}catch(m){l(m instanceof Error?m.message:"Rules could not be saved.")}},children:"Save rules"}),i&&c.jsx("p",{role:"status",children:i})]})}const ay=128,Wt=1e-9;function Ko(a,r,s){return(r[0]-a[0])*(s[1]-a[1])-(r[1]-a[1])*(s[0]-a[0])}function Dl(a,r,s){return Math.abs(Ko(a,r,s))<=Wt&&s[0]>=Math.min(a[0],r[0])-Wt&&s[0]<=Math.max(a[0],r[0])+Wt&&s[1]>=Math.min(a[1],r[1])-Wt&&s[1]<=Math.max(a[1],r[1])+Wt}function oS(a,r,s,i){const l=Ko(a,r,s),u=Ko(a,r,i),g=Ko(s,i,a),p=Ko(s,i,r);return(l>Wt&&u<-Wt||l<-Wt&&u>Wt)&&(g>Wt&&p<-Wt||g<-Wt&&p>Wt)?!0:Math.abs(l)<=Wt&&Dl(a,r,s)||Math.abs(u)<=Wt&&Dl(a,r,i)||Math.abs(g)<=Wt&&Dl(s,i,a)||Math.abs(p)<=Wt&&Dl(s,i,r)}function iS(a){return a.reduce((r,s,i)=>{const l=a[(i+1)%a.length];return r+s[0]*l[1]-l[0]*s[1]},0)/2}function Xr(a){const r=a.split(";").map(i=>i.trim()).filter(Boolean);if(r.length<3||r.length>ay)throw new Error(`Enter 3-${ay} valve-body outline points.`);const s=r.map((i,l)=>{const u=i.split(",").map(p=>p.trim());if(u.length!==2||!u[0]||!u[1])throw new Error(`Mask point ${l+1} must be written as X,Y.`);const g=[Number(u[0]),Number(u[1])];if(!g.every(Number.isFinite))throw new Error(`Mask point ${l+1} must contain finite X,Y values.`);return g});if(s.some((i,l)=>{const u=s[(l+1)%s.length];return Math.hypot(i[0]-u[0],i[1]-u[1])<=Wt}))throw new Error("The valve mask outline cannot contain duplicate adjacent points.");for(let i=0;i<s.length;i+=1){const l=(i+1)%s.length;for(let u=i+1;u<s.length;u+=1){const g=(u+1)%s.length;if(!(i===u||l===u||g===i)&&oS(s[i],s[l],s[u],s[g]))throw new Error("The valve mask outline must not cross or touch itself.")}}if(Math.abs(iS(s))<=Wt)throw new Error("The valve mask outline must enclose an area.");return s}function lS(a){return`(${a.map(([r,s])=>`(${r} ${s})`).join(" ")})`}const Zu=["PFD","P&ID","Data sheet"],Yr=["A0","A1","A2","A3","A4"],Lb="pid-mapping-studio:cad-standards:v1";function Qu(){return{schemaVersion:"1.0.0",companyDefaults:{PFD:"A1","P&ID":"A1","Data sheet":"A4"},companyItems:[],projects:{},reviewCandidates:[],auditTrail:[]}}function cS(){return Qu()}function Kr(a,r,s){return{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:a,detail:r,...s?{projectName:s}:{}}}function Ju(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&typeof r.name=="string"&&typeof r.summary=="string"&&typeof r.sourceFile=="string"&&["titleBlock","layer","textStyle","linetype","dimensionStyle","symbol","directionArrow","legend"].includes(String(r.category))&&["extracted-dwg","approved-source-drawing","synthetic-demo"].includes(String(r.sourceKind))&&["company","project"].includes(String(r.scope))&&["reviewed","needs-review"].includes(String(r.reviewStatus))&&typeof r.canPromote=="boolean"&&Array.isArray(r.fields)&&r.fields.every(s=>typeof s?.label=="string"&&typeof s?.value=="string")&&(r.sheetSize===void 0||Yr.includes(r.sheetSize))&&(r.scope!=="project"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function dS(a){if(!a||typeof a!="object")return!1;const r=a;return!!(typeof r.id=="string"&&Ju(r.item)&&["company","project","unclassified"].includes(String(r.proposedScope))&&typeof r.sourceGroup=="string"&&["needs-review","approved","dismissed"].includes(String(r.status))&&(r.proposedScope==="company"||typeof r.projectId=="string"&&typeof r.projectName=="string"))}function Ob(a){if(!a||typeof a!="object")return!1;const r=a;return r.schemaVersion!=="1.0.0"||!r.companyDefaults||!r.companyItems||!Array.isArray(r.companyItems)||!r.projects||typeof r.projects!="object"||r.reviewCandidates!==void 0&&!Array.isArray(r.reviewCandidates)||!Array.isArray(r.auditTrail)||!Zu.every(s=>Yr.includes(r.companyDefaults[s]))||!r.companyItems.every(s=>Ju(s)&&s.scope==="company")||!(r.reviewCandidates??[]).every(s=>dS(s))||!r.auditTrail.every(s=>!!(s&&typeof s.id=="string"&&typeof s.at=="string"&&typeof s.action=="string"&&typeof s.detail=="string"))?!1:Object.entries(r.projects).every(([s,i])=>!!(s&&i&&typeof i.projectName=="string"&&i.defaults&&Object.entries(i.defaults).every(([l,u])=>Zu.includes(l)&&Yr.includes(u))&&Array.isArray(i.items)&&i.items.every(l=>Ju(l)&&l.scope==="project"&&l.projectId===s)))}const ri="cad-standards-changed";function si(a){if(!Ob(a))throw new Error("CAD standards could not be saved because the library data is invalid.");try{window.localStorage.setItem(Lb,JSON.stringify(a))}catch{throw new Error("This browser could not save the CAD standards locally. Export or back up the library before leaving this page.")}typeof window.dispatchEvent=="function"&&window.dispatchEvent(new Event(ri))}function yn(){let a;try{a=window.localStorage.getItem(Lb)}catch{throw new Error("This browser could not read its local CAD standards library.")}if(a===null){const m=Qu();return si(m),m}let r;try{r=JSON.parse(a)}catch{throw new Error("The locally saved CAD standards library is not valid JSON. It was left unchanged.")}if(!Ob(r))throw new Error("The locally saved CAD standards library has invalid fields. It was left unchanged.");const s={...r,reviewCandidates:r.reviewCandidates??[]},i=Qu(),l=i.companyItems.filter(m=>!s.companyItems.some(f=>f.id===m.id)),u=new Set(s.reviewCandidates.map(m=>m.id)),g=i.reviewCandidates.filter(m=>!u.has(m.id));if(!l.length&&!g.length)return s;const p={...s,companyItems:[...s.companyItems,...l],reviewCandidates:[...s.reviewCandidates,...g],auditTrail:[...s.auditTrail,Kr("Source mappings added to review queue",`${g.length} anonymized source mappings were added as pending review. Existing approvals, dismissals, and project settings were preserved.`)]};return si(p),p}function uS(a,r){return a.some(s=>s.category==="titleBlock"&&s.reviewStatus==="reviewed"&&(s.sheetSize===r||s.fields.some(i=>i.label==="Sheet size"&&i.value===r)))}function fS(a,r,s){if(a.companyDefaults[r]===s)return a;if(!uS(a.companyItems,s))throw new Error(`Approve a company title-block mapping for ${s} before making it a company default.`);return{...a,companyDefaults:{...a.companyDefaults,[r]:s},auditTrail:[Kr("Company sheet-size default changed",`${r} changed to ${s} after an approved company title-block mapping was available.`),...a.auditTrail]}}function Fl(a,r,s,i=[],l){const u=a.reviewCandidates.find(E=>E.id===r);if(!u||u.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");if(s==="company"&&u.proposedScope!=="company")throw new Error("Only a source classified for the Legends Library can be approved there.");if(s==="project"&&u.proposedScope==="company")throw new Error("Legends Library source mappings must be approved to the Legends Library.");if(l&&!(u.item.sourceKind==="extracted-dwg"&&["symbol","directionArrow"].includes(u.item.category)&&["symbol","directionArrow"].includes(l)))throw new Error("Only an extracted CAD block can be reviewed as a Direction Arrow or a standard symbol.");const g=l??u.item.category;let p=[...u.item.fields.filter(E=>!i.some(R=>R.label===E.label)),...i];if(g==="directionArrow"&&(p=p.filter(E=>!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(E.label))),g==="symbol"&&u.item.sourceKind==="extracted-dwg"&&(!p.some(E=>E.label==="Fallback category"&&E.value.trim())||!p.some(E=>E.label==="Block asset ID"&&E.value.trim())))throw new Error("A fallback category and locally extracted block file are required before approving this symbol.");if(g==="symbol"&&u.item.sourceKind==="extracted-dwg"&&p.find(E=>E.label==="Fallback category")?.value.trim().toLowerCase()==="valve"){const E=p.find(R=>R.label==="Wipeout mask boundary")?.value??"";try{Xr(E)}catch(R){throw new Error(`A reviewed valve-body mask outline is required before approving this valve. ${R instanceof Error?R.message:"Check the X,Y point list."}`)}}if(g==="symbol"&&u.item.sourceKind==="extracted-dwg"){const E=p.find(S=>S.label==="Target CAD layer")?.value.trim()??"",R=p.find(S=>S.label==="Source discipline")?.value.trim()??"";if(!(s==="company"?a.companyItems:[...u.projectId?a.projects[u.projectId]?.items??[]:[],...a.companyItems]).some(S=>{if(S.category!=="layer"||S.sourceKind!=="extracted-dwg"||S.reviewStatus!=="reviewed")return!1;const N=S.fields.find(x=>x.label==="CAD name")?.value.trim()??"",T=S.fields.find(x=>x.label==="Source discipline")?.value.trim()??"",O=R==="Shared"?T==="Shared":T==="Shared"||T===R;return E&&E.toUpperCase()!=="0"&&N.toLowerCase()===E.toLowerCase()&&O}))throw new Error("Approve a compatible non-zero CAD layer before approving this symbol. Layer 0 cannot be used for block placement.")}const m={...u.item,category:g,fields:p,scope:s,reviewStatus:"reviewed",canPromote:!1,...s==="project"?{projectId:u.projectId,projectName:u.projectName}:{projectId:void 0,projectName:void 0}};let f=a.companyItems,y=a.projects;if(s==="company")f=[...a.companyItems.filter(E=>E.id!==m.id),m];else{const E=u.projectId,R=u.projectName;if(!E||!R)throw new Error("The isolated project scope is not available for this mapping.");const C=a.projects[E]??{projectName:R,defaults:{},items:[]};y={...a.projects,[E]:{...C,projectName:R,items:[...C.items.filter(D=>D.id!==m.id),m]}}}const b=a.reviewCandidates.map(E=>E.id===r?{...E,status:"approved"}:E),v=s==="company"?"Legends Library":`isolated ${u.projectName} library`;return{...a,companyItems:f,projects:y,reviewCandidates:b,auditTrail:[Kr("Source mapping approved",`${g} mapping ${u.item.name} was approved to ${v}.`,u.projectName),...a.auditTrail]}}const ef={EQUIP:{layerName:"EQUIP",fallbackCategory:"equipment"},F_EQUIP:{layerName:"f_Equip",fallbackCategory:"equipment"},F_INST:{layerName:"f_Inst",fallbackCategory:"instrument"},F_PIPE_INLINE:{layerName:"f_Pipe_Inline",fallbackCategory:"inline component"}};function tf(a,r){return a.item.fields.find(s=>s.label===r)?.value.trim()??""}function pS(a,r,s){return[...a.filter(i=>i.label!==r),{label:r,value:s}]}function hS(a){const i=tf(a,"Extracted details").match(/(?:^|;)sourceLayer=([^;]*)/i)?.[1]??tf(a,"Source insert layer(s)");return[...new Set(i.split(",").map(l=>l.trim().toUpperCase()).filter(Boolean))]}function zr(a){return a.fields.find(r=>r.label==="CAD name")?.value.trim()??""}function gS(a){return a.fields.find(r=>r.label==="Source drawing ID")?.value.trim()??""}function ny(a){return a.fields.find(r=>r.label==="Extracted details")?.value.trim()??""}function _b(a){return a.fields.find(r=>r.label==="Source discipline")?.value.trim()??""}function mS(a,r){return a.category==="layer"&&a.sourceKind==="extracted-dwg"&&a.reviewStatus==="reviewed"&&a.scope==="company"&&zr(a).toUpperCase()===r.toUpperCase()&&_b(a).toUpperCase()==="SHARED"}function yS(a,r,s){const i=new Set(r),l={unsupportedLayer:0,ambiguousLayer:0,missingAsset:0,missingLayer:0,invalidCandidate:0},u=a.reviewCandidates.filter(v=>v.status==="needs-review"&&v.proposedScope==="company"&&i.has(v.sourceGroup)),g=new Map,p=[];for(const v of u){if(v.item.category!=="symbol"||v.item.sourceKind!=="extracted-dwg")continue;const E=hS(v);if(E.length!==1){l.ambiguousLayer+=E.length>1?1:0,l.unsupportedLayer+=E.length===0?1:0;continue}const R=E[0].toUpperCase(),C=ef[R];if(!C){l.unsupportedLayer+=1;continue}const D=tf(v,"Block asset ID");if(!D||!s.has(D)){l.missingAsset+=1;continue}const S=`${v.sourceGroup}|${R}`;g.set(S,{sourceId:v.sourceGroup,layerName:C.layerName}),p.push({candidateId:v.id,sourceId:v.sourceGroup,layerKey:S,fallbackCategory:C.fallbackCategory,blockAssetId:D})}let m=a;const f=new Map;let y=0;for(const[v,E]of g){const R=m.companyItems.find(S=>S.category==="layer"&&S.sourceKind==="extracted-dwg"&&S.reviewStatus==="reviewed"&&gS(S)===E.sourceId&&zr(S).toUpperCase()===E.layerName.toUpperCase());if(R){const S={...R,fields:pS(R.fields,"Source discipline","Shared")};m={...m,companyItems:m.companyItems.map(N=>N.id===R.id?S:N),reviewCandidates:m.reviewCandidates.map(N=>N.id===R.id?{...N,item:S}:N)},_b(R).toUpperCase()!=="SHARED"&&(y+=1),f.set(v,zr(S));continue}const C=m.reviewCandidates.find(S=>S.status==="needs-review"&&S.proposedScope==="company"&&S.sourceGroup===E.sourceId&&S.item.category==="layer"&&S.item.sourceKind==="extracted-dwg"&&zr(S.item).toUpperCase()===E.layerName.toUpperCase()),D=m.companyItems.find(S=>mS(S,E.layerName));if(D){const S=C?ny(C.item):"",N=ny(D);if(!C||S&&S===N){f.set(v,zr(D));continue}l.invalidCandidate+=1;continue}if(!C){l.missingLayer+=1;continue}try{m=Fl(m,C.id,"company",[{label:"Source discipline",value:"Shared"}]);const S=m.companyItems.find(T=>T.id===C.item.id),N=zr(S||C.item);f.set(v,N),y+=1}catch{l.invalidCandidate+=1}}let b=0;for(const v of p){const E=f.get(v.layerKey);if(!E){l.missingLayer+=1;continue}try{m=Fl(m,v.candidateId,"company",[{label:"Source discipline",value:"Shared"},{label:"Fallback category",value:v.fallbackCategory},{label:"Target CAD layer",value:E}]),b+=1}catch{l.invalidCandidate+=1}}return(y||b)&&(m={...m,auditTrail:[Kr("Categorized CAD source batch approved",`${y} placement layer(s) and ${b} layer-matched symbol(s) approved for shared PFD/P&ID use.`),...a.auditTrail]}),{library:m,approvedLayers:y,approvedSymbols:b,skipped:l}}function bS(a,r,s){const i=a.companyItems.find(y=>y.id===r),l=Object.entries(a.projects).find(([,y])=>y.items.some(b=>b.id===r)),u=i??l?.[1].items.find(y=>y.id===r);if(!u||u.reviewStatus!=="reviewed")throw new Error("The selected approved CAD mapping is no longer available.");if(u.category!=="symbol"||u.sourceKind!=="extracted-dwg")throw new Error("Only reviewed extracted symbol mappings can be updated here.");const g=[...u.fields.filter(y=>!s.some(b=>b.label===y.label)),...s];if(g.find(y=>y.label==="Fallback category")?.value.trim().toLowerCase()==="valve")try{Xr(g.find(y=>y.label==="Wipeout mask boundary")?.value??"")}catch(y){throw new Error(`A reviewed valve-body mask outline is required. ${y instanceof Error?y.message:"Check the X,Y point list."}`)}const p={...u,fields:g},m=i?a.companyItems.map(y=>y.id===r?p:y):a.companyItems,f=l?{...a.projects,[l[0]]:{...l[1],items:l[1].items.map(y=>y.id===r?p:y)}}:a.projects;return{...a,companyItems:m,projects:f,auditTrail:[Kr("Reviewed valve mask updated",`The approved symbol mapping ${u.name} received a reviewed Wipeout mask outline.`,u.projectName),...a.auditTrail]}}function vS(a,r){const s=a.reviewCandidates.find(i=>i.id===r);if(!s||s.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");return{...a,reviewCandidates:a.reviewCandidates.map(i=>i.id===r?{...i,status:"dismissed"}:i),auditTrail:[Kr("Source mapping dismissed",`${s.item.category} mapping ${s.item.name} was dismissed from the review queue.`,s.projectName),...a.auditTrail]}}function wS(a,r,s,i,l){if(!r.trim()||!s.trim())throw new Error("Choose a project before saving its title-block override.");const u=a.projects[r]??{defaults:{},items:[]},g={...u.defaults,[i]:l},p=[...a.projects[r]?.items??[],...a.companyItems].find(b=>b.category==="titleBlock"&&b.reviewStatus==="reviewed"&&(b.sheetSize===l||b.fields.some(v=>v.label==="Sheet size"&&v.value===l)));if(!p)throw new Error(`Approve a title-block mapping for ${l} before saving this project default.`);const m=`project-default-${i.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,f={...p,id:m,name:`${l} · ${i} project default`,summary:`Project-only choice for ${i}. The company default remains ${a.companyDefaults[i]}.`,scope:"project",projectId:r,projectName:s,canPromote:!1,fields:[...p.fields,{label:"Override purpose",value:i},{label:"Project choice",value:l},{label:"Company default",value:a.companyDefaults[i]}]};return{...a,projects:{...a.projects,[r]:{projectName:s,defaults:g,items:[...u.items.filter(b=>b.id!==m),f]}},auditTrail:[Kr("Project title-block override saved",`${i} set to ${l}; company default remains ${a.companyDefaults[i]}. Other project libraries are unchanged.`,s),...a.auditTrail]}}const ES=(()=>{const a=new Uint32Array(256);for(let r=0;r<a.length;r+=1){let s=r;for(let i=0;i<8;i+=1)s=s&1?3988292384^s>>>1:s>>>1;a[r]=s>>>0}return a})();function xS(a){let r=4294967295;for(const s of a)r=ES[(r^s)&255]^r>>>8;return(r^4294967295)>>>0}function ku(a,r){const s=new Uint8Array(a);return r(new DataView(s.buffer)),s}function Pb(a){if(a.length>65535)throw new Error("The local ZIP cannot contain more than 65,535 files.");const r=new TextEncoder,s=[],i=[];let l=0,u=0;for(const f of a){const y=r.encode(f.path),b=xS(f.content),v=ku(30+y.length,R=>{R.setUint32(0,67324752,!0),R.setUint16(4,20,!0),R.setUint16(6,2048,!0),R.setUint16(8,0,!0),R.setUint16(10,0,!0),R.setUint16(12,33,!0),R.setUint32(14,b,!0),R.setUint32(18,f.content.length,!0),R.setUint32(22,f.content.length,!0),R.setUint16(26,y.length,!0),R.setUint16(28,0,!0),new Uint8Array(R.buffer,30,y.length).set(y)});s.push(v,f.content);const E=ku(46+y.length,R=>{R.setUint32(0,33639248,!0),R.setUint16(4,20,!0),R.setUint16(6,20,!0),R.setUint16(8,2048,!0),R.setUint16(10,0,!0),R.setUint16(12,0,!0),R.setUint16(14,33,!0),R.setUint32(16,b,!0),R.setUint32(20,f.content.length,!0),R.setUint32(24,f.content.length,!0),R.setUint16(28,y.length,!0),R.setUint16(30,0,!0),R.setUint16(32,0,!0),R.setUint16(34,0,!0),R.setUint16(36,0,!0),R.setUint32(38,0,!0),R.setUint32(42,l,!0),new Uint8Array(R.buffer,46,y.length).set(y)});i.push(E),u+=E.length,l+=v.length+f.content.length}const g=ku(22,f=>{f.setUint32(0,101010256,!0),f.setUint16(4,0,!0),f.setUint16(6,0,!0),f.setUint16(8,a.length,!0),f.setUint16(10,a.length,!0),f.setUint32(12,u,!0),f.setUint32(16,l,!0),f.setUint16(20,0,!0)}),m=[...s,...i,g].map(f=>{const y=new ArrayBuffer(f.byteLength);return new Uint8Array(y).set(f),y});return new Blob(m,{type:"application/zip"})}function SS(a,r,s){return a.filter(i=>(i.discipline===r||i.discipline==="Shared")&&(!s||i.category==="company-standard"||i.projectLabel===s))}const TS="pid-mapping-studio-local-cad-library",AS=3,En="source-drawings",xn="extracted-block-assets",Tr="project-title-blocks",Ib=100*1024*1024;function DS(a,r){if(!/\.dwg$/i.test(a.trim()))throw new Error("Upload a standalone AutoCAD DWG title block. Save a DWT as DWG first.");if(r.byteLength>Ib)throw new Error("The project title block is larger than the 100 MB local upload limit.");const s=new TextDecoder().decode(r.subarray(0,6));if(!/^AC10\d{2}$/.test(s))throw new Error("This file does not have a recognized AutoCAD DWG header.")}function ln(){return typeof indexedDB>"u"?Promise.reject(new Error("This browser does not support local drawing-library storage.")):new Promise((a,r)=>{const s=indexedDB.open(TS,AS);s.onupgradeneeded=()=>{const i=s.result;i.objectStoreNames.contains(En)||i.createObjectStore(En,{keyPath:"id"}),i.objectStoreNames.contains(xn)||i.createObjectStore(xn,{keyPath:"id"}),i.objectStoreNames.contains(Tr)||i.createObjectStore(Tr,{keyPath:"projectId"})},s.onsuccess=()=>a(s.result),s.onerror=()=>r(s.error??new Error("The local drawing library could not be opened.")),s.onblocked=()=>r(new Error("The local drawing library is busy in another browser tab. Close the other tab and try again."))})}async function af(){const a=await ln();try{return await new Promise((r,s)=>{const l=a.transaction(En,"readonly").objectStore(En).getAll();l.onsuccess=()=>{const u=l.result;r(u.map(({id:g,label:p,category:m,discipline:f,format:y,bytes:b,projectLabel:v})=>({id:g,label:p,category:m,discipline:f??"Shared",format:y??"DWG",bytes:b,...v?{projectLabel:v}:{}})).sort((g,p)=>g.label.localeCompare(p.label)))},l.onerror=()=>s(l.error??new Error("The local drawing library could not be read."))})}finally{a.close()}}async function Jo(a){const r=await ln();try{return await new Promise((s,i)=>{const l=r.transaction(En,"readonly").objectStore(En).get(a);l.onsuccess=()=>{const u=l.result;if(!u){i(new Error("An approved mapping refers to a source DWG that is no longer in the local library."));return}s(new Uint8Array(u.content))},l.onerror=()=>i(l.error??new Error("The local source drawing could not be read."))})}finally{r.close()}}async function nf(a,r=!1){if(!a.length)return;const s=await ln();try{await new Promise((i,l)=>{const u=s.transaction(xn,"readwrite"),g=u.objectStore(xn);for(const p of a){const m=g.get(p.id);m.onsuccess=()=>{const f=m.result;if(r&&f)return;const y={id:p.id,sourceId:p.sourceId,blockName:p.blockName,content:p.content.slice().buffer,format:p.format??f?.format??"DWG",...p.previewSvg===null?{}:p.previewSvg!==void 0?{previewSvg:p.previewSvg}:f?.previewSvg?{previewSvg:f.previewSvg}:{},...p.nearbyLabels!==void 0?{nearbyLabels:p.nearbyLabels}:f?.nearbyLabels?{nearbyLabels:f.nearbyLabels}:{},...p.labelMatchSkipped!==void 0?{labelMatchSkipped:p.labelMatchSkipped}:f?.labelMatchSkipped!==void 0?{labelMatchSkipped:f.labelMatchSkipped}:{},...p.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:p.labelMatchAmbiguous}:f?.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:f.labelMatchAmbiguous}:{},...p.sourcePlacements!==void 0?{sourcePlacements:p.sourcePlacements}:f?.sourcePlacements?{sourcePlacements:f.sourcePlacements}:{},...p.geometryDescriptor!==void 0?{geometryDescriptor:p.geometryDescriptor}:f?.geometryDescriptor?{geometryDescriptor:f.geometryDescriptor}:{}};g.put(y)}}u.oncomplete=()=>i(),u.onerror=()=>l(u.error??new Error("Extracted symbol blocks could not be saved locally.")),u.onabort=()=>l(u.error??new Error("Saving extracted symbol blocks was cancelled."))})}finally{s.close()}}async function CS(){const a=await ln();try{return await new Promise((r,s)=>{const i=a.transaction(xn,"readonly").objectStore(xn).getAllKeys();i.onsuccess=()=>r(new Set(i.result.map(String))),i.onerror=()=>s(i.error??new Error("Local block availability could not be checked."))})}finally{a.close()}}async function qb(a){const r=await ln();try{return await new Promise((s,i)=>{const l=r.transaction(xn,"readonly").objectStore(xn).get(a);l.onsuccess=()=>{const u=l.result;if(!u){s({nearbyLabels:[],labelMatchSkipped:!1});return}s({format:u.format??"DWG",...u.previewSvg?{previewSvg:u.previewSvg}:{},nearbyLabels:u.nearbyLabels??[],labelMatchSkipped:u.labelMatchSkipped??!1,...u.labelMatchAmbiguous?{labelMatchAmbiguous:!0}:{},...u.sourcePlacements?{sourcePlacements:u.sourcePlacements}:{},...u.geometryDescriptor?{geometryDescriptor:u.geometryDescriptor}:{}})},l.onerror=()=>i(l.error??new Error("The local block preview could not be read."))})}finally{r.close()}}async function Mb(a){const r=await ln();try{return await new Promise((s,i)=>{const l=r.transaction(xn,"readonly").objectStore(xn).get(a);l.onsuccess=()=>{const u=l.result;if(!u){i(new Error("An approved symbol block is missing from this browser’s local CAD library. Re-import its extraction package."));return}s(new Uint8Array(u.content))},l.onerror=()=>i(l.error??new Error("The approved symbol block could not be read locally."))})}finally{r.close()}}async function ac(a){if(!a.trim())return null;const r=await ln();try{return await new Promise((s,i)=>{const l=r.transaction(Tr,"readonly").objectStore(Tr).get(a);l.onsuccess=()=>s(l.result??null),l.onerror=()=>i(l.error??new Error("The project title block could not be read locally."))})}finally{r.close()}}function Rf(a,r){if(a.workspaceType&&a.workspaceType!==r)throw new Error(`This title block belongs to ${a.workspaceType}, not ${r}. Upload a separate title block for each workspace.`);return{projectId:a.projectId,workspaceType:r,titleBlockId:a.titleBlockId??`legacy-${a.projectId}-${a.uploadedAt}`,titleBlockPath:a.titleBlockPath??"PROJECT_TITLE_BLOCK.dwg",xrefName:a.xrefName??"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:a.expectedSize??{widthMm:841,heightMm:594},version:a.version??1,bytes:a.bytes,uploadedAt:a.uploadedAt}}async function ry(a,r){const s=await ac(a);return s?Rf(s,r):null}async function NS(a,r){const s=await ac(a);return s?{...Rf(s,r),content:new Uint8Array(s.content)}:null}async function kS(a,r,s,i){if(!a.trim())throw new Error("Select a project before uploading its title block.");if(!["PFD","P&ID"].includes(r))throw new Error("Choose either a PFD or P&ID workspace for this title block.");DS(s,i);const l=await ac(a);if(l?.workspaceType&&l.workspaceType!==r)throw new Error(`This folder already has a ${l.workspaceType} title block. Keep PFD and P&ID title blocks in separate workspaces.`);const u=new Date().toISOString(),g=(l?.version??(l?1:0))+1,p={projectId:a,workspaceType:r,titleBlockId:globalThis.crypto?.randomUUID?.()??`title-block-${Date.now()}`,titleBlockPath:"PROJECT_TITLE_BLOCK.dwg",xrefName:"P2DWG_PROJECT_TITLE_BLOCK",expectedSize:{widthMm:841,heightMm:594},version:g,bytes:i.byteLength,uploadedAt:u,content:i.slice().buffer},m=await ln();try{await new Promise((f,y)=>{const b=m.transaction(Tr,"readwrite");b.objectStore(Tr).put(p),b.oncomplete=()=>f(),b.onerror=()=>y(b.error??new Error("The project title block could not be saved locally.")),b.onabort=()=>y(b.error??new Error("Saving the project title block was cancelled."))})}finally{m.close()}return{...Rf(p,r)}}async function RS(a,r){if(!a.trim())return;const s=await ac(a);if(s?.workspaceType&&s.workspaceType!==r)throw new Error(`This title block belongs to ${s.workspaceType}; it was not removed from the ${r} workspace.`);const i=await ln();try{await new Promise((l,u)=>{const g=i.transaction(Tr,"readwrite");g.objectStore(Tr).delete(a),g.oncomplete=()=>l(),g.onerror=()=>u(g.error??new Error("The project title block could not be removed locally.")),g.onabort=()=>u(g.error??new Error("Removing the project title block was cancelled."))})}finally{i.close()}}async function jS(a){if(!a.length)return;const r=await ln();try{await new Promise((s,i)=>{const l=r.transaction(En,"readwrite"),u=l.objectStore(En);for(const g of a){const p=g.content.slice().buffer,{content:m,...f}=g;u.put({...f,content:p,createdAt:new Date().toISOString()})}l.oncomplete=()=>s(),l.onerror=()=>i(l.error??new Error("The local drawing library could not be saved.")),l.onabort=()=>i(l.error??new Error("The local drawing library save was cancelled."))})}finally{r.close()}}async function LS(a,r){const s=await ln();try{await new Promise((i,l)=>{const u=s.transaction(En,"readwrite"),g=u.objectStore(En),p=g.get(a);p.onsuccess=()=>{const m=p.result;if(!m){u.abort(),l(new Error("That source drawing is no longer in the local library."));return}g.put({...m,...r,projectLabel:r.projectLabel?.trim()||void 0})},p.onerror=()=>l(p.error??new Error("The source drawing could not be updated.")),u.oncomplete=()=>i(),u.onerror=()=>l(u.error??new Error("The source drawing update failed.")),u.onabort=()=>l(u.error??new Error("The source drawing update was cancelled."))})}finally{s.close()}}const OS=String.raw`
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
`,_S=OS+String.raw`; Local CAD standards extractor. Run in Windows AutoCAD on each source drawing.
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
`;function PS(a,r){return`SOURCE_${String(a+1).padStart(3,"0")}.${r==="DXF"?"dxf":"dwg"}`}async function IS(a){if(a.length===0)throw new Error("There are no eligible local source drawings to package.");const r=[{path:"EXTRACT_CAD_STANDARDS.lsp",content:new TextEncoder().encode(_S)},{path:"README_LOCAL_EXTRACTION.txt",content:new TextEncoder().encode(`LOCAL CAD STANDARDS EXTRACTION

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
`)}],s=await Promise.all(a.map(i=>Jo(i.id)));return a.forEach((i,l)=>{const u=i.format==="DXF"?Us(s[l]):null;r.push({path:PS(l,i.format),content:u?.content??s[l]})}),Pb(r)}function sy(a,r,s){let i=0,l=0;const u=new Map([...s].map(([p,m])=>[p.toUpperCase(),m])),g=a.reviewCandidates.map(p=>{if(p.sourceGroup!==r||p.status!=="needs-review"||p.proposedScope!=="company"||p.item.category!=="symbol"||p.item.sourceKind!=="extracted-dwg")return p;const m=p.item.fields,f=m.find(C=>C.label==="Block name")?.value.trim()??"";if(!f)return p;const y=u.get(f.toUpperCase())?.sourcePlacements??[],b=[...new Set(y.map(C=>C.layer.trim()).filter(Boolean))];b.length&&(l+=1);const E=(m.find(C=>C.label==="Extracted details")?.value??"").split(";").filter(C=>!/^\s*sourceLayer=/i.test(C)).join(";"),R=[...m.filter(C=>!["Extracted details","Source insert layer(s)","Source insert rotation(s)"].includes(C.label)),{label:"Extracted details",value:E+(b.length?`;sourceLayer=${b.join(", ")}`:"")},...b.length?[{label:"Source insert layer(s)",value:b.join(", ")},{label:"Source insert rotation(s)",value:y.map(C=>`${C.rotationDegrees}° on ${C.layer} (${C.count})`).join("; ")}]:[]];return JSON.stringify(m)===JSON.stringify(R)?p:(i+=1,{...p,item:{...p.item,fields:R}})});return{library:i?{...a,reviewCandidates:g}:a,updatedRecords:i,recoveredSymbols:l}}class qS{constructor(r){this._pointer=0,this._eof=!1,this._data=r}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return this._pointer++,r.value=oy(r.code,this._data[this._pointer].trim()),this._pointer++,r.code===0&&r.value==="EOF"&&(this._eof=!0),this.lastReadGroup=r,r}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const r={code:parseInt(this._data[this._pointer])};return r.value=oy(r.code,this._data[this._pointer+1].trim()),r}rewind(r=1){this._pointer=this._pointer-r*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}function oy(a,r){return a<=9?r:a>=10&&a<=59?parseFloat(r):a>=60&&a<=99?parseInt(r):a>=100&&a<=109?r:a>=110&&a<=149?parseFloat(r):a>=160&&a<=179?parseInt(r):a>=210&&a<=239?parseFloat(r):a>=270&&a<=289?parseInt(r):a>=290&&a<=299?MS(r):a>=300&&a<=369?r:a>=370&&a<=389?parseInt(r):a>=390&&a<=399?r:a>=400&&a<=409?parseInt(r):a>=410&&a<=419?r:a>=420&&a<=429?parseInt(r):a>=430&&a<=439?r:a>=440&&a<=459?parseInt(r):a>=460&&a<=469?parseFloat(r):a>=470&&a<=481||a===999||a>=1e3&&a<=1009?r:a>=1010&&a<=1059?parseFloat(r):a>=1060&&a<=1071?parseInt(r):(console.log("WARNING: Group code does not have a defined type: %j",{code:a,value:r}),r)}function MS(a){if(a==="0")return!1;if(a==="1")return!0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")}const $b=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function $S(a){return $b[a]}function Ke(a){const r={};a.rewind();let s=a.next(),i=s.code;if(r.x=s.value,i+=10,s=a.next(),s.code!=i)throw new Error("Expected code for point value to be "+i+" but got "+s.code+".");return r.y=s.value,i+=10,s=a.next(),s.code!=i?(a.rewind(),r):(r.z=s.value,r)}function ua(a,r,s){switch(r.code){case 0:a.type=r.value;break;case 5:a.handle=r.value;break;case 6:a.lineType=r.value;break;case 8:a.layer=r.value;break;case 48:a.lineTypeScale=r.value;break;case 60:a.visible=r.value===0;break;case 62:a.colorIndex=r.value,a.color=$S(Math.abs(r.value));break;case 67:a.inPaperSpace=r.value!==0;break;case 100:break;case 101:for(;r.code!=0;)r=s.next();s.rewind();break;case 330:a.ownerHandle=r.value;break;case 347:a.materialObjectHandle=r.value;break;case 370:a.lineweight=r.value;break;case 420:a.color=r.value;break;case 1e3:a.extendedData=a.extendedData||{},a.extendedData.customStrings=a.extendedData.customStrings||[],a.extendedData.customStrings.push(r.value);break;case 1001:a.extendedData=a.extendedData||{},a.extendedData.applicationName=r.value;break;default:return!1}return!0}class US{constructor(){this.ForEntityName="3DFACE"}parseEntity(r,s){const i={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 70:i.shape=(s.value&1)===1,i.hasContinuousLinetypePattern=(s.value&128)===128;break;case 10:i.vertices=FS(r,s),s=r.lastReadGroup;break;default:ua(i,s,r);break}s=r.next()}return i}}function FS(a,r){var s=[],i=!1,l=!1,u=4;for(let p=0;p<=u;p++){for(var g={};!a.isEOF()&&!(r.code===0||l);){switch(r.code){case 10:case 11:case 12:case 13:if(i){l=!0;continue}g.x=r.value,i=!0;break;case 20:case 21:case 22:case 23:g.y=r.value;break;case 30:case 31:case 32:case 33:g.z=r.value;break;default:return s}r=a.next()}s.push(g),i=!1,l=!1}return a.rewind(),s}class BS{constructor(){this.ForEntityName="ARC"}parseEntity(r,s){const i={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:i.center=Ke(r);break;case 40:i.radius=s.value;break;case 50:i.startAngle=Math.PI/180*s.value;break;case 51:i.endAngle=Math.PI/180*s.value,i.angleLength=i.endAngle-i.startAngle;break;case 210:i.extrusionDirectionX=s.value;break;case 220:i.extrusionDirectionY=s.value;break;case 230:i.extrusionDirectionZ=s.value;break;default:ua(i,s,r);break}s=r.next()}return i}}class zS{constructor(){this.ForEntityName="ATTDEF"}parseEntity(r,s){var i={type:s.value,scale:1,textStyle:"STANDARD"};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 1:i.text=s.value;break;case 2:i.tag=s.value;break;case 3:i.prompt=s.value;break;case 7:i.textStyle=s.value;break;case 10:i.startPoint=Ke(r);break;case 11:i.endPoint=Ke(r);break;case 39:i.thickness=s.value;break;case 40:i.textHeight=s.value;break;case 41:i.scale=s.value;break;case 50:i.rotation=s.value;break;case 51:i.obliqueAngle=s.value;break;case 70:i.invisible=!!(s.value&1),i.constant=!!(s.value&2),i.verificationRequired=!!(s.value&4),i.preset=!!(s.value&8);break;case 71:i.backwards=!!(s.value&2),i.mirrored=!!(s.value&4);break;case 72:i.horizontalJustification=s.value;break;case 73:i.fieldLength=s.value;break;case 74:i.verticalJustification=s.value;break;case 100:break;case 210:i.extrusionDirectionX=s.value;break;case 220:i.extrusionDirectionY=s.value;break;case 230:i.extrusionDirectionZ=s.value;break;default:ua(i,s,r);break}s=r.next()}return i}}class YS{constructor(){this.ForEntityName="CIRCLE"}parseEntity(r,s){const i={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:i.center=Ke(r);break;case 40:i.radius=s.value;break;case 50:i.startAngle=Math.PI/180*s.value;break;case 51:const l=Math.PI/180*s.value;l<i.startAngle?i.angleLength=l+2*Math.PI-i.startAngle:i.angleLength=l-i.startAngle,i.endAngle=l;break;default:ua(i,s,r);break}s=r.next()}return i}}class HS{constructor(){this.ForEntityName="DIMENSION"}parseEntity(r,s){const i={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 2:i.block=s.value;break;case 10:i.anchorPoint=Ke(r);break;case 11:i.middleOfText=Ke(r);break;case 12:i.insertionPoint=Ke(r);break;case 13:i.linearOrAngularPoint1=Ke(r);break;case 14:i.linearOrAngularPoint2=Ke(r);break;case 15:i.diameterOrRadiusPoint=Ke(r);break;case 16:i.arcPoint=Ke(r);break;case 70:i.dimensionType=s.value;break;case 71:i.attachmentPoint=s.value;break;case 42:i.actualMeasurement=s.value;break;case 1:i.text=s.value;break;case 50:i.angle=s.value;break;default:ua(i,s,r);break}s=r.next()}return i}}class VS{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(r,s){const i={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:i.center=Ke(r);break;case 11:i.majorAxisEndPoint=Ke(r);break;case 40:i.axisRatio=s.value;break;case 41:i.startAngle=s.value;break;case 42:i.endAngle=s.value;break;case 2:i.name=s.value;break;default:ua(i,s,r);break}s=r.next()}return i}}class XS{constructor(){this.ForEntityName="INSERT"}parseEntity(r,s){const i={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 2:i.name=s.value;break;case 41:i.xScale=s.value;break;case 42:i.yScale=s.value;break;case 43:i.zScale=s.value;break;case 10:i.position=Ke(r);break;case 50:i.rotation=s.value;break;case 70:i.columnCount=s.value;break;case 71:i.rowCount=s.value;break;case 44:i.columnSpacing=s.value;break;case 45:i.rowSpacing=s.value;break;case 210:i.extrusionDirection=Ke(r);break;default:ua(i,s,r);break}s=r.next()}return i}}class GS{constructor(){this.ForEntityName="LINE"}parseEntity(r,s){const i={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:i.vertices.unshift(Ke(r));break;case 11:i.vertices.push(Ke(r));break;case 210:i.extrusionDirection=Ke(r);break;case 100:break;default:ua(i,s,r);break}s=r.next()}return i}}class KS{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(r,s){const i={type:s.value,vertices:[]};let l=0;for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 38:i.elevation=s.value;break;case 39:i.depth=s.value;break;case 70:i.shape=(s.value&1)===1,i.hasContinuousLinetypePattern=(s.value&128)===128;break;case 90:l=s.value;break;case 10:i.vertices=WS(l,r);break;case 43:s.value!==0&&(i.width=s.value);break;case 210:i.extrusionDirectionX=s.value;break;case 220:i.extrusionDirectionY=s.value;break;case 230:i.extrusionDirectionZ=s.value;break;default:ua(i,s,r);break}s=r.next()}return i}}function WS(a,r){if(!a||a<=0)throw Error("n must be greater than 0 verticies");const s=[];let i=!1,l=!1,u=r.lastReadGroup;for(let g=0;g<a;g++){const p={};for(;!r.isEOF()&&!(u.code===0||l);){switch(u.code){case 10:if(i){l=!0;continue}p.x=u.value,i=!0;break;case 20:p.y=u.value;break;case 30:p.z=u.value;break;case 40:p.startWidth=u.value;break;case 41:p.endWidth=u.value;break;case 42:u.value!=0&&(p.bulge=u.value);break;default:return r.rewind(),i&&s.push(p),r.rewind(),s}u=r.next()}s.push(p),i=!1,l=!1}return r.rewind(),s}class ZS{constructor(){this.ForEntityName="MTEXT"}parseEntity(r,s){const i={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 3:i.text?i.text+=s.value:i.text=s.value;break;case 1:i.text?i.text+=s.value:i.text=s.value;break;case 10:i.position=Ke(r);break;case 11:i.directionVector=Ke(r);break;case 40:i.height=s.value;break;case 41:i.width=s.value;break;case 50:i.rotation=s.value;break;case 71:i.attachmentPoint=s.value;break;case 72:i.drawingDirection=s.value;break;default:ua(i,s,r);break}s=r.next()}return i}}class QS{constructor(){this.ForEntityName="POINT"}parseEntity(r,s){const l={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:l.position=Ke(r);break;case 39:l.thickness=s.value;break;case 210:l.extrusionDirection=Ke(r);break;case 100:break;default:ua(l,s,r);break}s=r.next()}return l}}class JS{constructor(){this.ForEntityName="VERTEX"}parseEntity(r,s){var i={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:i.x=s.value;break;case 20:i.y=s.value;break;case 30:i.z=s.value;break;case 40:break;case 41:break;case 42:s.value!=0&&(i.bulge=s.value);break;case 70:i.curveFittingVertex=(s.value&1)!==0,i.curveFitTangent=(s.value&2)!==0,i.splineVertex=(s.value&8)!==0,i.splineControlPoint=(s.value&16)!==0,i.threeDPolylineVertex=(s.value&32)!==0,i.threeDPolylineMesh=(s.value&64)!==0,i.polyfaceMeshVertex=(s.value&128)!==0;break;case 50:break;case 71:i.faceA=s.value;break;case 72:i.faceB=s.value;break;case 73:i.faceC=s.value;break;case 74:i.faceD=s.value;break;default:ua(i,s,r);break}s=r.next()}return i}}class eT{constructor(){this.ForEntityName="POLYLINE"}parseEntity(r,s){var i={type:s.value,vertices:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:break;case 20:break;case 30:break;case 39:i.thickness=s.value;break;case 40:break;case 41:break;case 70:i.shape=(s.value&1)!==0,i.includesCurveFitVertices=(s.value&2)!==0,i.includesSplineFitVertices=(s.value&4)!==0,i.is3dPolyline=(s.value&8)!==0,i.is3dPolygonMesh=(s.value&16)!==0,i.is3dPolygonMeshClosed=(s.value&32)!==0,i.isPolyfaceMesh=(s.value&64)!==0,i.hasContinuousLinetypePattern=(s.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:i.extrusionDirection=Ke(r);break;default:ua(i,s,r);break}s=r.next()}return i.vertices=tT(r,s),i}}function tT(a,r){const s=new JS,i=[];for(;!a.isEOF();)if(r.code===0){if(r.value==="VERTEX")i.push(s.parseEntity(a,r)),r=a.lastReadGroup;else if(r.value==="SEQEND"){aT(a,r);break}}return i}function aT(a,r){const s={type:r.value};for(r=a.next();!a.isEOF()&&r.code!=0;)ua(s,r,a),r=a.next();return s}class nT{constructor(){this.ForEntityName="SOLID"}parseEntity(r,s){const i={type:s.value,points:[]};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:i.points[0]=Ke(r);break;case 11:i.points[1]=Ke(r);break;case 12:i.points[2]=Ke(r);break;case 13:i.points[3]=Ke(r);break;case 210:i.extrusionDirection=Ke(r);break;default:ua(i,s,r);break}s=r.next()}return i}}class rT{constructor(){this.ForEntityName="SPLINE"}parseEntity(r,s){const i={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:i.controlPoints||(i.controlPoints=[]),i.controlPoints.push(Ke(r));break;case 11:i.fitPoints||(i.fitPoints=[]),i.fitPoints.push(Ke(r));break;case 12:i.startTangent=Ke(r);break;case 13:i.endTangent=Ke(r);break;case 40:i.knotValues||(i.knotValues=[]),i.knotValues.push(s.value);break;case 70:(s.value&1)!=0&&(i.closed=!0),(s.value&2)!=0&&(i.periodic=!0),(s.value&4)!=0&&(i.rational=!0),(s.value&8)!=0&&(i.planar=!0),(s.value&16)!=0&&(i.planar=!0,i.linear=!0);break;case 71:i.degreeOfSplineCurve=s.value;break;case 72:i.numberOfKnots=s.value;break;case 73:i.numberOfControlPoints=s.value;break;case 74:i.numberOfFitPoints=s.value;break;case 210:i.normalVector=Ke(r);break;default:ua(i,s,r);break}s=r.next()}return i}}class sT{constructor(){this.ForEntityName="TEXT"}parseEntity(r,s){const i={type:s.value};for(s=r.next();!r.isEOF()&&s.code!==0;){switch(s.code){case 10:i.startPoint=Ke(r);break;case 11:i.endPoint=Ke(r);break;case 40:i.textHeight=s.value;break;case 41:i.xScale=s.value;break;case 50:i.rotation=s.value;break;case 1:i.text=s.value;break;case 72:i.halign=s.value;break;case 73:i.valign=s.value;break;default:ua(i,s,r);break}s=r.next()}return i}}var Ol={exports:{}},oT=Ol.exports,iy;function iT(){return iy||(iy=1,(function(a){(function(r,s){a.exports?a.exports=s():r.log=s()})(oT,function(){var r=function(){},s="undefined",i=typeof window!==s&&typeof window.navigator!==s&&/Trident\/|MSIE /.test(window.navigator.userAgent),l=["trace","debug","info","warn","error"],u={},g=null;function p(C,D){var S=C[D];if(typeof S.bind=="function")return S.bind(C);try{return Function.prototype.bind.call(S,C)}catch{return function(){return Function.prototype.apply.apply(S,[C,arguments])}}}function m(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function f(C){return C==="debug"&&(C="log"),typeof console===s?!1:C==="trace"&&i?m:console[C]!==void 0?p(console,C):console.log!==void 0?p(console,"log"):r}function y(){for(var C=this.getLevel(),D=0;D<l.length;D++){var S=l[D];this[S]=D<C?r:this.methodFactory(S,C,this.name)}if(this.log=this.debug,typeof console===s&&C<this.levels.SILENT)return"No console available for logging"}function b(C){return function(){typeof console!==s&&(y.call(this),this[C].apply(this,arguments))}}function v(C,D,S){return f(C)||b.apply(this,arguments)}function E(C,D){var S=this,N,T,O,x="loglevel";typeof C=="string"?x+=":"+C:typeof C=="symbol"&&(x=void 0);function _(te){var se=(l[te]||"silent").toUpperCase();if(!(typeof window===s||!x)){try{window.localStorage[x]=se;return}catch{}try{window.document.cookie=encodeURIComponent(x)+"="+se+";"}catch{}}}function k(){var te;if(!(typeof window===s||!x)){try{te=window.localStorage[x]}catch{}if(typeof te===s)try{var se=window.document.cookie,Te=encodeURIComponent(x),fe=se.indexOf(Te+"=");fe!==-1&&(te=/^([^;]+)/.exec(se.slice(fe+Te.length+1))[1])}catch{}return S.levels[te]===void 0&&(te=void 0),te}}function L(){if(!(typeof window===s||!x)){try{window.localStorage.removeItem(x)}catch{}try{window.document.cookie=encodeURIComponent(x)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function H(te){var se=te;if(typeof se=="string"&&S.levels[se.toUpperCase()]!==void 0&&(se=S.levels[se.toUpperCase()]),typeof se=="number"&&se>=0&&se<=S.levels.SILENT)return se;throw new TypeError("log.setLevel() called with invalid level: "+te)}S.name=C,S.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},S.methodFactory=D||v,S.getLevel=function(){return O??T??N},S.setLevel=function(te,se){return O=H(te),se!==!1&&_(O),y.call(S)},S.setDefaultLevel=function(te){T=H(te),k()||S.setLevel(te,!1)},S.resetLevel=function(){O=null,L(),y.call(S)},S.enableAll=function(te){S.setLevel(S.levels.TRACE,te)},S.disableAll=function(te){S.setLevel(S.levels.SILENT,te)},S.rebuild=function(){if(g!==S&&(N=H(g.getLevel())),y.call(S),g===S)for(var te in u)u[te].rebuild()},N=H(g?g.getLevel():"WARN");var ee=k();ee!=null&&(O=H(ee)),y.call(S)}g=new E,g.getLogger=function(D){if(typeof D!="symbol"&&typeof D!="string"||D==="")throw new TypeError("You must supply a name when creating a logger.");var S=u[D];return S||(S=u[D]=new E(D,g.methodFactory)),S};var R=typeof window!==s?window.log:void 0;return g.noConflict=function(){return typeof window!==s&&window.log===g&&(window.log=R),g},g.getLoggers=function(){return u},g.default=g,g})})(Ol)),Ol.exports}var lT=iT();const Ge=ci(lT);Ge.setLevel("error");function cT(a){a.registerEntityHandler(US),a.registerEntityHandler(BS),a.registerEntityHandler(zS),a.registerEntityHandler(YS),a.registerEntityHandler(HS),a.registerEntityHandler(VS),a.registerEntityHandler(XS),a.registerEntityHandler(GS),a.registerEntityHandler(KS),a.registerEntityHandler(ZS),a.registerEntityHandler(QS),a.registerEntityHandler(eT),a.registerEntityHandler(nT),a.registerEntityHandler(rT),a.registerEntityHandler(sT)}class Ub{constructor(){this._entityHandlers={},cT(this)}parse(r){return typeof r=="string"?this._parse(r):(console.error("Cannot read dxf source of type `"+typeof r),null)}registerEntityHandler(r){const s=new r;this._entityHandlers[s.ForEntityName]=s}parseSync(r){return this.parse(r)}parseStream(r){let s="";const i=this;return new Promise((l,u)=>{r.on("data",g=>{s+=g}),r.on("end",()=>{try{l(i._parse(s))}catch(g){u(g)}}),r.on("error",g=>{u(g)})})}_parse(r){const s={};let i=0;const l=r.split(/\r\n|\r|\n/g),u=new qS(l);if(!u.hasNext())throw Error("Empty file");const g=this;let p;function m(){for(p=u.next();!u.isEOF();)if(p.code===0&&p.value==="SECTION"){if(p=u.next(),p.code!==2){console.error("Unexpected code %s after 0:SECTION",Fb(p)),p=u.next();continue}p.value==="HEADER"?(Ge.debug("> HEADER"),s.header=f(),Ge.debug("<")):p.value==="BLOCKS"?(Ge.debug("> BLOCKS"),s.blocks=y(),Ge.debug("<")):p.value==="ENTITIES"?(Ge.debug("> ENTITIES"),s.entities=T(!1),Ge.debug("<")):p.value==="TABLES"?(Ge.debug("> TABLES"),s.tables=v(),Ge.debug("<")):p.value==="EOF"?Ge.debug("EOF"):Ge.warn("Skipping section '%s'",p.value)}else p=u.next()}function f(){let _=null,k=null;const L={};for(p=u.next();;){if(gn(p,0,"ENDSEC")){_&&(L[_]=k);break}else p.code===9?(_&&(L[_]=k),_=p.value):p.code===10?k={x:p.value}:p.code===20?k.y=p.value:p.code===30?k.z=p.value:k=p.value;p=u.next()}return p=u.next(),L}function y(){const _={};for(p=u.next();p.value!=="EOF"&&!gn(p,0,"ENDSEC");)if(gn(p,0,"BLOCK")){Ge.debug("block {");const k=b();Ge.debug("}"),x(k),k.name?_[k.name]=k:Ge.error('block with handle "'+k.handle+'" is missing a name.')}else Br(p),p=u.next();return _}function b(){const _={};for(p=u.next();p.value!=="EOF";){switch(p.code){case 1:_.xrefPath=p.value,p=u.next();break;case 2:_.name=p.value,p=u.next();break;case 3:_.name2=p.value,p=u.next();break;case 5:_.handle=p.value,p=u.next();break;case 8:_.layer=p.value,p=u.next();break;case 10:_.position=O(p),p=u.next();break;case 67:_.paperSpace=!!(p.value&&p.value==1),p=u.next();break;case 70:p.value!=0&&(_.type=p.value),p=u.next();break;case 100:p=u.next();break;case 330:_.ownerHandle=p.value,p=u.next();break;case 0:if(p.value=="ENDBLK")break;_.entities=T(!0);break;default:Br(p),p=u.next()}if(gn(p,0,"ENDBLK")){p=u.next();break}}return _}function v(){const _={};for(p=u.next();p.value!=="EOF"&&!gn(p,0,"ENDSEC");)gn(p,0,"TABLE")?(p=u.next(),N[p.value]?(Ge.debug(p.value+" Table {"),_[N[p.value].tableName]=R(p),Ge.debug("}")):Ge.debug("Unhandled Table "+p.value)):p=u.next();return p=u.next(),_}const E="ENDTAB";function R(_){const k=N[_.value],L={};let H=0;for(p=u.next();!gn(p,0,E);)switch(p.code){case 5:L.handle=p.value,p=u.next();break;case 330:L.ownerHandle=p.value,p=u.next();break;case 100:p.value==="AcDbSymbolTable"||Br(p),p=u.next();break;case 70:H=p.value,p=u.next();break;case 0:p.value===k.dxfSymbolName?L[k.tableRecordsProperty]=k.parseTableRecords():(Br(p),p=u.next());break;default:Br(p),p=u.next()}const ee=L[k.tableRecordsProperty];if(ee){let te=(()=>{if(ee.constructor===Array)return ee.length;if(typeof ee=="object")return Object.keys(ee).length})();H!==te&&Ge.warn("Parsed "+te+" "+k.dxfSymbolName+"'s but expected "+H)}return p=u.next(),L}function C(){const _=[];let k={};for(Ge.debug("ViewPort {"),p=u.next();!gn(p,0,E);)switch(p.code){case 2:k.name=p.value,p=u.next();break;case 10:k.lowerLeftCorner=O(p),p=u.next();break;case 11:k.upperRightCorner=O(p),p=u.next();break;case 12:k.center=O(p),p=u.next();break;case 13:k.snapBasePoint=O(p),p=u.next();break;case 14:k.snapSpacing=O(p),p=u.next();break;case 15:k.gridSpacing=O(p),p=u.next();break;case 16:k.viewDirectionFromTarget=O(p),p=u.next();break;case 17:k.viewTarget=O(p),p=u.next();break;case 42:k.lensLength=p.value,p=u.next();break;case 43:k.frontClippingPlane=p.value,p=u.next();break;case 44:k.backClippingPlane=p.value,p=u.next();break;case 45:k.viewHeight=p.value,p=u.next();break;case 50:k.snapRotationAngle=p.value,p=u.next();break;case 51:k.viewTwistAngle=p.value,p=u.next();break;case 79:k.orthographicType=p.value,p=u.next();break;case 110:k.ucsOrigin=O(p),p=u.next();break;case 111:k.ucsXAxis=O(p),p=u.next();break;case 112:k.ucsYAxis=O(p),p=u.next();break;case 110:k.ucsOrigin=O(p),p=u.next();break;case 281:k.renderMode=p.value,p=u.next();break;case 281:k.defaultLightingType=p.value,p=u.next();break;case 292:k.defaultLightingOn=p.value,p=u.next();break;case 330:k.ownerHandle=p.value,p=u.next();break;case 63:case 421:case 431:k.ambientColor=p.value,p=u.next();break;case 0:p.value==="VPORT"&&(Ge.debug("}"),_.push(k),Ge.debug("ViewPort {"),k={},p=u.next());break;default:Br(p),p=u.next();break}return Ge.debug("}"),_.push(k),_}function D(){const _={};let k={},L=0,H;for(Ge.debug("LType {"),p=u.next();!gn(p,0,"ENDTAB");)switch(p.code){case 2:k.name=p.value,H=p.value,p=u.next();break;case 3:k.description=p.value,p=u.next();break;case 73:L=p.value,L>0&&(k.pattern=[]),p=u.next();break;case 40:k.patternLength=p.value,p=u.next();break;case 49:k.pattern.push(p.value),p=u.next();break;case 0:Ge.debug("}"),L>0&&L!==k.pattern.length&&Ge.warn("lengths do not match on LTYPE pattern"),_[H]=k,k={},Ge.debug("LType {"),p=u.next();break;default:p=u.next()}return Ge.debug("}"),_[H]=k,_}function S(){const _={};let k={},L;for(Ge.debug("Layer {"),p=u.next();!gn(p,0,"ENDTAB");)switch(p.code){case 2:k.name=p.value,L=p.value,p=u.next();break;case 62:k.visible=p.value>=0,k.colorIndex=Math.abs(p.value),k.color=dT(k.colorIndex),p=u.next();break;case 70:k.frozen=(p.value&1)!=0||(p.value&2)!=0,p=u.next();break;case 0:p.value==="LAYER"&&(Ge.debug("}"),_[L]=k,Ge.debug("Layer {"),k={},L=void 0,p=u.next());break;default:Br(p),p=u.next();break}return Ge.debug("}"),_[L]=k,_}const N={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:C},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:D},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:S}};function T(_){const k=[],L=_?"ENDBLK":"ENDSEC";for(_||(p=u.next());;)if(p.code===0){if(p.value===L)break;const H=g._entityHandlers[p.value];if(H!=null){Ge.debug(p.value+" {");const ee=H.parseEntity(u,p);p=u.lastReadGroup,Ge.debug("}"),x(ee),k.push(ee)}else{Ge.warn("Unhandled entity "+p.value),p=u.next();continue}}else p=u.next();return L=="ENDSEC"&&(p=u.next()),k}function O(_){const k={};let L=_.code;if(k.x=_.value,L+=10,_=u.next(),_.code!=L)throw new Error("Expected code for point value to be "+L+" but got "+_.code+".");return k.y=_.value,L+=10,_=u.next(),_.code!=L?(u.rewind(),k):(k.z=_.value,k)}function x(_){if(!_)throw new TypeError("entity cannot be undefined or null");_.handle||(_.handle=i++)}return m(),s}}function gn(a,r,s){return a.code===r&&a.value===s}function Br(a){Ge.debug("unhandled group "+Fb(a))}function Fb(a){return a.code+":"+a.value}function dT(a){return $b[a]}const Cl=360,Fo=210,Os=16,uT="#78d8b0",fT=[1,0,0,1,0,0],pT=new Set(["0","PIPE_PRI","F_PIPE_PRI","PIPE_PRIMARY","F_PIPE_PRIMARY","PRIMARY PIPING"]);function hT(a){const r=String(a??"").trim().toUpperCase().replace(/\s+/g," ");return!r||pT.has(r)}function jf(a){return/\barrow\b/i.test(a.replace(/[_-]+/g," "))}function Bb(a){return jf(a)}function Ea(a){if(!a||typeof a!="object")return null;const r=a;return typeof r.x=="number"&&Number.isFinite(r.x)&&typeof r.y=="number"&&Number.isFinite(r.y)?{x:r.x,y:r.y}:null}function zb(a,r){return{x:a[0]*r.x+a[2]*r.y+a[4],y:a[1]*r.x+a[3]*r.y+a[5]}}function gT(a,r){return[a[0]*r[0]+a[2]*r[1],a[1]*r[0]+a[3]*r[1],a[0]*r[2]+a[2]*r[3],a[1]*r[2]+a[3]*r[3],a[0]*r[4]+a[2]*r[5]+a[4],a[1]*r[4]+a[3]*r[5]+a[5]]}function It(a,r){return typeof a=="number"&&Number.isFinite(a)?a:r}function Bo(a){return Array.isArray(a)?a.map(Ea).filter(r=>r!==null):[]}function rf(a){const r=Ea(a);return r?{...r,z:It(a.z,0)}:null}function mT(a,r,s){const i={},l=(p,m)=>{const f=rf(m);f&&(i[p]=f)},u=(p,m)=>{Array.isArray(m)&&(i[p]=m.flatMap(f=>{const y=rf(f);return y?[y]:[]}))},g=(p,m)=>{typeof m=="number"&&Number.isFinite(m)&&(i[p]=m)};if(a==="LINE")u("vertices",r.vertices);else if(a==="ARC"||a==="CIRCLE")l("center",r.center),g("radius",r.radius),a==="ARC"&&(g("startAngle",r.startAngle),g("endAngle",r.endAngle));else if(a==="LWPOLYLINE"||a==="POLYLINE")Array.isArray(r.vertices)&&(i.vertices=r.vertices.flatMap(p=>{if(!p||typeof p!="object")return[];const m=p;return typeof m.x!="number"||typeof m.y!="number"||!Number.isFinite(m.x)||!Number.isFinite(m.y)?[]:[{x:m.x,y:m.y,z:It(m.z,0),bulge:It(m.bulge,0)}]})),i.closed=r.shape===!0||(Number(r.shape)&1)===1;else if(a==="ELLIPSE")l("center",r.center),l("majorAxisEndPoint",r.majorAxisEndPoint),g("axisRatio",r.axisRatio),g("startAngle",r.startAngle),g("endAngle",r.endAngle);else if(a==="SPLINE"){u("fitPoints",r.fitPoints),u("controlPoints",r.controlPoints);for(const p of["degreeOfSplineCurve","closed","periodic","knots","weights"]){const m=r[p];(typeof m=="number"||typeof m=="boolean"||Array.isArray(m)&&m.every(f=>typeof f=="number"&&Number.isFinite(f)))&&(i[p]=m)}}else return null;return{type:a,transform:[...s],geometry:i}}function Yb(a){return typeof a!="string"?"":a.replace(/\\P/gi," ").replace(/\\[A-Za-z][^;]*;/g,"").replace(/[{}]/g,"").replace(/\s+/g," ").trim()}function yT(a,r,s){return a.layer&&a.layer!=="0"?r.get(a.layer)??s:s}function bT(a){const r=Math.max(0,Math.min(16777215,Math.trunc(a))),s=`#${r.toString(16).padStart(6,"0")}`,i=r>>16&255,l=r>>8&255,u=r&255;return i+l+u<72?"#d5e1e8":s}function vT(a){const r=new Map;for(const s of Object.values(a.tables?.layer?.layers??{}))Number.isFinite(s.color)&&r.set(s.name,bT(s.color));return r}function wT(a,r,s,i){const l=i-s;if(!Number.isFinite(l))return[];const u=(l%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,g=Math.max(8,Math.min(96,Math.ceil(Math.abs(u)/(Math.PI/24))));return Array.from({length:g+1},(p,m)=>{const f=s+u*m/g;return{x:a.x+Math.cos(f)*r,y:a.y+Math.sin(f)*r}})}function ET(a,r){if(!Array.isArray(a))return[];const s=a.map(u=>{if(!u||typeof u!="object")return null;const g=u,p=Ea(g);return p?{...p,bulge:It(g.bulge,0)}:null}).filter(u=>u!==null);if(s.length<2)return s.map(({x:u,y:g})=>({x:u,y:g}));const i=[{x:s[0].x,y:s[0].y}],l=r?s.length:s.length-1;for(let u=0;u<l;u+=1){const g=s[u],p=s[(u+1)%s.length],m=g.bulge,f=p.x-g.x,y=p.y-g.y,b=Math.hypot(f,y);if(Math.abs(m)<1e-5||b<1e-8){i.push({x:p.x,y:p.y});continue}const v=4*Math.atan(m),E=b*(1-m*m)/(4*m),R={x:(g.x+p.x)/2-y/b*E,y:(g.y+p.y)/2+f/b*E},C=Math.atan2(g.y-R.y,g.x-R.x),D=Math.max(4,Math.min(48,Math.ceil(Math.abs(v)/(Math.PI/16))));for(let S=1;S<=D;S+=1){const N=C+v*S/D;i.push({x:R.x+Math.cos(N)*Math.hypot(g.x-R.x,g.y-R.y),y:R.y+Math.sin(N)*Math.hypot(g.x-R.x,g.y-R.y)})}}return r&&i.length>1&&i.pop(),i}function xT(a,r){const s=Ea(a.position)??{x:0,y:0},i=Ea(r.position)??{x:0,y:0},l=It(a.xScale,1),u=It(a.yScale,1),g=It(a.rotation,0)*Math.PI/180,p=Math.cos(g),m=Math.sin(g),f=p*l,y=m*l,b=-m*u,v=p*u;return[f,y,b,v,s.x-f*i.x-b*i.y,s.y-y*i.x-v*i.y]}function vr(a,r,s,i,l){const u=r.map(g=>zb(i,g));u.length>=2&&a.paths.push({points:u,closed:s,color:l})}function Hb(a,r,s,i,l,u,g=new Set,p=0){if(p>8){u.unsupported.add("nested block depth");return}for(const m of a){if(!m)continue;const f=m,y=String(f.type??"").toUpperCase();if(!y||f.visible===!1)continue;const b=yT(f,s,l);if(y==="INSERT"){const E=String(f.name??""),R=Object.entries(r).find(([N])=>N.toUpperCase()===E.toUpperCase())?.[1];if(!R||g.has(E.toUpperCase())){u.unsupported.add(y);continue}u.nestedInsertCount+=1;const C=gT(i,xT(f,R)),D=f.layer&&f.layer!=="0"?s.get(f.layer)??l:l,S=new Set(g);S.add(E.toUpperCase()),Hb(R.entities??[],r,s,C,D,u,S,p+1);continue}const v=mT(y,f,i);if(v&&u.primitives.push(v),y==="LINE"){vr(u,Bo(f.vertices),!1,i,b);continue}if(y==="CIRCLE"||y==="ARC"){const E=Ea(f.center),R=It(f.radius,0);if(!E||R<=0)continue;const C=y==="ARC"?It(f.startAngle,0):0,D=y==="ARC"?It(f.endAngle,Math.PI*2):Math.PI*2;vr(u,wT(E,R,C,D),y==="CIRCLE",i,b);continue}if(y==="ELLIPSE"){const E=Ea(f.center),R=Ea(f.majorAxisEndPoint),C=It(f.axisRatio,1);if(!E||!R||C<=0)continue;const D=It(f.startAngle,0),S=It(f.endAngle,Math.PI*2)-D;if(!Number.isFinite(S))continue;const N=(S%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,T=D+N,O=Math.max(12,Math.min(96,Math.ceil((T-D)*24))),x=Array.from({length:O+1},(_,k)=>{const L=D+(T-D)*k/O;return{x:E.x+R.x*Math.cos(L)-R.y*C*Math.sin(L),y:E.y+R.y*Math.cos(L)+R.x*C*Math.sin(L)}});vr(u,x,Math.abs(T-D-Math.PI*2)<.03,i,b);continue}if(y==="LWPOLYLINE"||y==="POLYLINE"){const E=f.shape===!0||(Number(f.shape)&1)===1,R=ET(f.vertices,E);vr(u,R,E,i,b);continue}if(y==="SOLID"||y==="3DFACE"){const E=Bo(f.points??f.vertices);vr(u,E,!0,i,b);continue}if(y==="SPLINE"){const E=Bo(f.fitPoints).length>=2?Bo(f.fitPoints):Bo(f.controlPoints);vr(u,E,f.closed===!0,i,b),E.length&&u.unsupported.add("SPLINE approximation");continue}if(y==="TEXT"||y==="MTEXT"||y==="ATTDEF"){const E=Yb(f.text),R=Ea(f.startPoint)??Ea(f.position);if(!R||!E)continue;const C=zb(i,R),D=Math.max(1,It(f.textHeight,It(f.height,2.5))),S=Math.max(Math.hypot(i[0],i[1]),Math.hypot(i[2],i[3]),.1);u.texts.push({point:C,text:E,height:D*S,rotation:It(f.rotation,0)-Math.atan2(i[1],i[0])*180/Math.PI,color:b});continue}if(y==="POINT"){const E=Ea(f.position);E&&(vr(u,[{x:E.x-.5,y:E.y},{x:E.x+.5,y:E.y}],!1,i,b),vr(u,[{x:E.x,y:E.y-.5},{x:E.x,y:E.y+.5}],!1,i,b));continue}u.unsupported.add(y)}}function Vb(a){const r=[...a.paths.flatMap(s=>s.points),...a.texts.map(s=>s.point)];return r.length?{minX:Math.min(...r.map(s=>s.x)),minY:Math.min(...r.map(s=>s.y)),maxX:Math.max(...r.map(s=>s.x)),maxY:Math.max(...r.map(s=>s.y))}:null}function ST(a){const r=Vb(a);if(!r)return;const s=Math.max(r.maxX-r.minX,1e-6),i=Math.max(r.maxY-r.minY,1e-6),l=Math.min((Cl-Os*2)/s,(Fo-Os*2)/i),u=y=>Os+(y-r.minX)*l+(Cl-Os*2-s*l)/2,g=y=>Fo-Os-(y-r.minY)*l-(Fo-Os*2-i*l)/2,p=y=>y.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;"),m=a.paths.map(y=>{const b=y.points.map((v,E)=>`${E?"L":"M"}${u(v.x).toFixed(2)} ${g(v.y).toFixed(2)}`);return y.closed&&b.push("Z"),`<path d="${b.join(" ")}" fill="none" stroke="${y.color}" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>`}).join(""),f=a.texts.map(y=>{const b=u(y.point.x),v=g(y.point.y),E=Math.max(4,Math.min(20,y.height*l));return`<text x="${b.toFixed(2)}" y="${v.toFixed(2)}" fill="${y.color}" font-family="Arial,sans-serif" font-size="${E.toFixed(2)}" transform="rotate(${-y.rotation.toFixed(2)} ${b.toFixed(2)} ${v.toFixed(2)})">${p(y.text)}</text>`}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Cl} ${Fo}" role="img"><rect width="${Cl}" height="${Fo}" fill="#0d1722"/>${m}${f}</svg>`}function TT(a,r,s){const i=Ea(s.position)??{x:0,y:0},l=Ea(r.position)??{x:0,y:0},u=It(s.xScale,1),g=It(s.yScale,1),p=It(s.rotation,0)*Math.PI/180,m=Math.cos(p),f=Math.sin(p),y=[{x:a.minX,y:a.minY},{x:a.minX,y:a.maxY},{x:a.maxX,y:a.minY},{x:a.maxX,y:a.maxY}].map(b=>{const v=(b.x-l.x)*u,E=(b.y-l.y)*g;return{x:i.x+m*v-f*E,y:i.y+f*v+m*E}});return{minX:Math.min(...y.map(b=>b.x)),minY:Math.min(...y.map(b=>b.y)),maxX:Math.max(...y.map(b=>b.x)),maxY:Math.max(...y.map(b=>b.y))}}function AT(a){return Ea(a.startPoint)??Ea(a.position)}function DT(a){return Yb(a.text)}function Xb(a,r){return r.map(s=>s).filter(s=>s.type?.toUpperCase()==="INSERT"&&String(s.name??"").toUpperCase()===a.toUpperCase())}function CT(a){const r=new Map;for(const s of a){const i=String(s.layer??"0").trim()||"0",l=It(s.rotation,0),u=Math.round((l%360+360)%360),g=`${i.toUpperCase()}|${u}`,p=r.get(g);p?p.count+=1:r.set(g,{layer:i,rotationDegrees:u,count:1})}return[...r.values()].sort((s,i)=>s.layer.localeCompare(i.layer)||s.rotationDegrees-i.rotationDegrees)}function NT(a,r,s,i){const l=Xb(a,i),u=l.filter(b=>!hT(b.layer)),g=l.length>0&&u.length===0;if(Bb(a))return{labels:[],skippedContextOnly:g};const p=i.map(b=>b).filter(b=>["TEXT","MTEXT","ATTRIB"].includes(String(b.type??"").toUpperCase())).map(b=>({text:DT(b),point:AT(b),height:Math.max(1,It(b.textHeight,It(b.height,2.5)))})).filter(b=>!!(b.text&&b.point)&&!jf(b.text)),m=[];for(const b of u){const v=TT(s,r,b),E=(v.minY+v.maxY)/2,R=Math.max(v.maxX-v.minX,1),C=Math.max(v.maxY-v.minY,1),S=p.map(L=>{const H=L.point.x-v.maxX,ee=Math.abs(L.point.y-E),te=Math.max(R*8,L.height*40,30),se=Math.max(C*1.1,L.height*7);return{...L,dx:H,dy:ee,score:Math.max(0,H)+ee*1.75,maxGap:te,maxVertical:se}}).filter(L=>L.dx>=-L.height*.5&&L.dx<=L.maxGap&&L.dy<=L.maxVertical).filter(L=>L.dx>=0).sort((L,H)=>L.score-H.score),N=S.length?S:p.map(L=>({...L,dx:L.point.x-v.maxX,dy:Math.abs(L.point.y-E),score:Math.hypot(L.point.x-(v.minX+v.maxX)/2,L.point.y-E),maxGap:Math.max(R*10,L.height*50,40),maxVertical:Math.max(C*2,L.height*10)})).filter(L=>L.score<=Math.max(R*8,C*10,L.height*60)).sort((L,H)=>L.score-H.score),T=N[0];if(!T)continue;const O=Math.max(T.height*2,R*.04,.5),x=Math.max(T.height*7,C*.8),_=N.filter(L=>Math.abs(L.point.x-T.point.x)<=O&&Math.abs(L.point.y-T.point.y)<=x).sort((L,H)=>H.point.y-L.point.y).slice(0,8),k=[...new Set(_.map(L=>L.text))].join(" · ");k&&m.push({text:k,score:T.score})}const f=new Map;for(const b of m){const v=b.text.toLowerCase().replace(/\s+/g," ").trim(),E=f.get(v);(E===void 0||b.score<E.score)&&f.set(v,b)}const y=u.length>1&&f.size>1;return{labels:y?[]:[...f.values()].sort((b,v)=>b.score-v.score).slice(0,4).map(b=>b.text),skippedContextOnly:g,...y?{ambiguous:!0}:{}}}function Bl(a,r){let s;try{s=new Ub().parseSync(a)}catch(g){const p=g instanceof Error?g.message:"Unknown DXF parser error";throw new Error(`The overview DXF could not be read: ${p}`)}if(!s?.blocks||!Array.isArray(s.entities))throw new Error("The overview DXF does not contain readable block and model-space data.");const i=vT(s),l=new Map(Object.entries(s.blocks).map(([g,p])=>[g.toUpperCase(),p])),u=new Map;for(const g of new Set(r)){const p=l.get(g.toUpperCase());if(!p||g.startsWith("*"))continue;const m={paths:[],texts:[],unsupported:new Set,primitives:[],nestedInsertCount:0};Hb(p.entities??[],s.blocks,i,fT,uT,m,new Set([p.name.toUpperCase()]));const f=Vb(m),y=m.paths.flatMap(O=>O.points),b=y.length?{minX:Math.min(...y.map(O=>O.x)),minY:Math.min(...y.map(O=>O.y)),maxX:Math.max(...y.map(O=>O.x)),maxY:Math.max(...y.map(O=>O.y))}:null,v=b?b.maxX-b.minX:null,E=b?b.maxY-b.minY:null,R=m.primitives.reduce((O,x)=>(O[x.type]=(O[x.type]??0)+1,O),{}),C=s.header?.$INSUNITS,D={schemaVersion:1,blockName:g,unitsCode:typeof C=="number"&&Number.isInteger(C)?C:null,basePoint:rf(p.position)??{x:0,y:0,z:0},bounds:b,width:v,height:E,aspectRatio:v!==null&&E!==null&&E>0?v/E:null,primitiveCounts:R,primitives:m.primitives,nestedInsertCount:m.nestedInsertCount,unsupportedEntities:[...m.unsupported].sort(),transformPolicy:{allowedRotationsDegrees:null,mirrorAllowed:null,uniformScalingAllowed:null,nonUniformScalingAllowed:null,status:"UNSPECIFIED_REQUIRES_REVIEW"}},S=ST(m),N=CT(Xb(g,s.entities)),T=f?NT(g,p,f,s.entities):{labels:[],skippedContextOnly:!1};u.set(g,{...S?{previewSvg:S}:{},geometryDescriptor:D,nearbyLabels:T.labels,...T.skippedContextOnly?{labelMatchSkipped:!0}:{},...T.ambiguous?{labelMatchAmbiguous:!0}:{},...N.length?{sourcePlacements:N}:{}})}return u}const ct=(a,r)=>a.find(s=>s.code===r)?.value.trim()??"",la=a=>ct(a,0).toUpperCase(),_s=a=>ct(a,la(a)==="DIMSTYLE"?105:5).toUpperCase(),Bn=(...a)=>{const r=[];for(let s=0;s<a.length;s+=2)r.push({code:Number(a[s]),value:String(a[s+1])});return r},ly=a=>a>=330&&a<=369||a>=390&&a<=399||a===480||a===481||a===1005,Ru=a=>["DICTIONARY","ACDBDICTIONARYWDFLT"].includes(la(a)),kT=new Set(["BLOCK","ENDBLK","LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE","VERTEX","SEQEND","SPLINE","POINT","SOLID","TRACE","3DFACE","TEXT","MTEXT","ATTDEF","ATTRIB","INSERT","HATCH","DIMENSION","LEADER","TOLERANCE"]),RT=["VPORT","LTYPE","LAYER","STYLE","VIEW","UCS","APPID","DIMSTYLE","BLOCK_RECORD"];function zn(a){const r=[];for(const s of a){if(s.code===0&&r.push([]),!r.length)throw new Error("Invalid DXF record boundary.");r[r.length-1].push(s)}return r}function jT(a){let r=0;return a.filter(s=>s.code===102&&s.value.trim()==="{BLKREFS"?(r=1,!1):r?(s.code===102&&s.value.trim().startsWith("{")&&r++,s.code===102&&s.value.trim()==="}"&&r--,!1):!0)}class Gb{sections=new Map;tables=new Map;blocks=new Map;modelRecords;text;objects;recordsByHandle=new Map;blockForRecord=new Map;tableForRecord=new Map;tableHandles=new Set;maxHandle=0;constructor(r){const s=Us(r);let i="";for(let y=0;y<s.content.length;y+=16384)i+=String.fromCharCode(...s.content.subarray(y,y+16384));this.text=i;const l=i.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;l.length&&l.at(-1)==="";)l.pop();if(l.length%2)throw new Error("DXF has an incomplete group-code/value pair.");const u=[];for(let y=0;y<l.length;y+=2){const b=Number(l[y].trim());if(!Number.isInteger(b))throw new Error("DXF has an invalid group code.");u.push({code:b,value:l[y+1]})}let g="";for(let y=0;y<u.length;y++){const b=u[y];if(b.code===0&&b.value.trim()==="SECTION"){if(g||u[y+1]?.code!==2)throw new Error("Invalid DXF section.");if(g=u[++y].value.trim().toUpperCase(),this.sections.has(g))throw new Error("Duplicate DXF section.");this.sections.set(g,[])}else b.code===0&&b.value.trim()==="ENDSEC"?g="":g&&this.sections.get(g).push(b)}if(g||!this.sections.has("BLOCKS")||!this.sections.has("ENTITIES"))throw new Error("A complete ASCII source DXF with BLOCKS and ENTITIES is required.");const p=zn(this.sections.get("TABLES")??[]);let m;for(const y of p)if(la(y)==="TABLE")m={name:ct(y,2).toUpperCase(),header:y,records:[]},this.tables.set(m.name,m),this.tableHandles.add(_s(y));else if(la(y)==="ENDTAB")m=void 0;else if(m){const b=la(y)==="BLOCK_RECORD"?jT(y):y;m.records.push(b),this.tableForRecord.set(b,m)}let f;for(const y of zn(this.sections.get("BLOCKS"))){if(la(y)==="BLOCK"){const b=ct(y,2);if(f={name:b,records:[]},this.blocks.has(b.toUpperCase()))throw new Error("Duplicate source block definition.");this.blocks.set(b.toUpperCase(),f)}if(!f)throw new Error("DXF block definition is incomplete.");f.records.push(y),this.blockForRecord.set(y,f.name.toUpperCase()),la(y)==="ENDBLK"&&(f=void 0)}if(f)throw new Error("DXF block definition has no ENDBLK.");this.modelRecords=zn(this.sections.get("ENTITIES")),this.objects=zn(this.sections.get("OBJECTS")??[]);for(const y of[...[...this.tables.values()].flatMap(b=>b.records),...[...this.blocks.values()].flatMap(b=>b.records),...this.modelRecords,...this.objects]){const b=_s(y);if(b){if(this.recordsByHandle.has(b))throw new Error("Duplicate DXF entity handle.");this.recordsByHandle.set(b,y),this.maxHandle=Math.max(this.maxHandle,parseInt(b,16)||0)}}for(const y of this.tableHandles)this.maxHandle=Math.max(this.maxHandle,parseInt(y,16)||0)}placements(){const r=new Map;for(const s of this.modelRecords){if(la(s)!=="INSERT"||ct(s,67)==="1"||ct(s,410)&&ct(s,410).toUpperCase()!=="MODEL")continue;const i=ct(s,2);if(!i||i.startsWith("*"))continue;const l=this.blocks.get(i.toUpperCase())?.name??i,u=r.get(l)??new Set;u.add(ct(s,8)||"0"),r.set(l,u)}return r}layerDetails(r){const s=this.tables.get("LAYER")?.records.find(i=>ct(i,2).toUpperCase()===r.toUpperCase());return s?`color=${Math.abs(Number(ct(s,62)||"7"))};lineweight=${ct(s,370)||"-3"};linetype=${ct(s,6)||"CONTINUOUS"}`:null}nativeAssetInfo(){const r=this.modelRecords.filter(l=>!["ATTRIB","VERTEX","SEQEND"].includes(la(l))),s=r.length?_s(r[0]):"";if(!r.length||!s)throw new Error("Native symbol DXF has no verifiable model-space geometry.");const i=this.tables.get("STYLE")?.records.flatMap(l=>[ct(l,3),ct(l,4)].filter(Boolean).flatMap(u=>/\.shx$/i.test(u)?[u]:u.includes(".")?[]:[`${u}.shx`]))??[];return{entityCount:r.length,firstHandle:s,requiredShapeFonts:[...new Set(i)]}}isolate(r){let s=this.maxHandle+1;const i=()=>(s++).toString(16).toUpperCase(),l=new Set,u=new Set,g=new Set,p=new Set,m=[],f=(U,V=!0)=>{Ru(U)&&V&&!g.has(U)&&(g.add(U),l.has(U)&&m.push(U)),l.has(U)||(l.add(U),m.push(U));const oe=this.tableForRecord.get(U);oe&&p.add(oe)},y=U=>{const V=U.toUpperCase();if(u.has(V))return;const oe=this.blocks.get(V);if(!oe||V.startsWith("*MODEL_SPACE")||V.startsWith("*PAPER_SPACE"))throw new Error(`Missing or external block dependency: ${U}`);if(Number(ct(oe.records[0],70))&28)throw new Error("External-reference blocks require native AutoCAD extraction.");u.add(V),oe.records.forEach(ve=>{if(!kT.has(la(ve)))throw new Error(`Unsupported native block entity: ${la(ve)}`);f(ve)});const de=this.tables.get("BLOCK_RECORD")?.records.find(ve=>ct(ve,2).toUpperCase()===V);if(!de)throw new Error("Source block has no BLOCK_RECORD; save a modern ASCII DXF first.");f(de)},b=(U,V,oe=!0)=>{const de=this.tables.get(U)?.records.find(ve=>ct(ve,2).toUpperCase()===V.toUpperCase());if(de)U==="BLOCK_RECORD"?y(ct(de,2)):f(de);else if(oe)throw new Error(`Missing ${U} dependency: ${V}`)};y(r);for(const U of RT){const V=this.tables.get(U);if(!V)throw new Error(`Native symbol DXF is missing required ${U} table after safe repair.`);if(p.add(V),U==="VPORT"){const oe=V.records.find(de=>ct(de,2).toUpperCase()==="*ACTIVE");if(!oe)throw new Error("Native symbol DXF has no active *ACTIVE VPORT record after safe repair.");f(oe)}}b("LAYER","0");for(const U of["CONTINUOUS","BYLAYER","BYBLOCK"])b("LTYPE",U,!1);for(b("STYLE","STANDARD",!1),b("APPID","ACAD",!1),b("DIMSTYLE","STANDARD",!1);m.length;){const U=m.shift(),V=la(U);if(/IMAGEDEF|UNDERLAY|PDFDEFINITION|DGNDEFINITION|DWFDEFINITION|PROXY/.test(V))throw new Error(`External/proxy dependency ${V} requires native AutoCAD extraction.`);(V==="INSERT"||V==="DIMENSION")&&y(ct(U,2)),V==="DIMENSION"&&b("DIMSTYLE",ct(U,3)||"STANDARD");for(let oe=0;oe<U.length;oe++){const de=U[oe];if(de.code===8&&b("LAYER",de.value.trim()||"0"),de.code===6&&!["BYLAYER","BYBLOCK",""].includes(de.value.trim().toUpperCase())&&b("LTYPE",de.value.trim()),de.code===7&&de.value.trim()&&b("STYLE",de.value.trim()),de.code===1001&&b("APPID",de.value.trim()),!ly(de.code)||!de.value.trim()||de.value.trim()==="0"||Ru(U)&&[350,360].includes(de.code)&&U[oe-1]?.code===3&&!g.has(U))continue;const ve=de.value.trim().toUpperCase();if(this.tableHandles.has(ve))continue;const qe=this.recordsByHandle.get(ve);if(!qe)throw new Error(`Unresolved native DXF handle reference (${de.code}).`);const Le=this.blockForRecord.get(qe);if(Le&&!u.has(Le))throw new Error("Block metadata references unrelated drawing geometry; use native AutoCAD extraction.");if(this.modelRecords.includes(qe))throw new Error("Block metadata references source model-space geometry; use native AutoCAD extraction.");la(qe)==="BLOCK_RECORD"?y(ct(qe,2)):f(qe,de.code!==330)}}const v=new Set,E=new Set,R=U=>{if(v.has(U))throw new Error("Circular block references cannot be isolated safely.");if(!E.has(U)){v.add(U);for(const V of this.blocks.get(U).records)["INSERT","DIMENSION"].includes(la(V))&&R(ct(V,2).toUpperCase());v.delete(U),E.add(U)}};if(R(r.toUpperCase()),[...l].some(U=>/BLOCK.*(?:PARAMETER|ACTION)|BLOCKREPRESENTATION|EVALUATION_GRAPH/.test(la(U))||U.some(V=>V.code===3&&/ACAD_ENHANCEDBLOCK/i.test(V.value))))throw new Error("Dynamic blocks require native AutoCAD extraction; their behavior is not approximated.");const C=this.tables.get("BLOCK_RECORD");p.add(C);const D=this.blocks.get(r.toUpperCase()),S=C.records.find(U=>ct(U,2).toUpperCase()===r.toUpperCase()),N=i(),T=(U,V)=>Bn(0,"BLOCK_RECORD",5,V,330,_s(C.header),100,"AcDbSymbolTableRecord",100,"AcDbBlockTableRecord",2,U,70,0,280,1,281,0),O=U=>U.map(V=>[2,3].includes(V.code)?{...V,value:"*Model_Space"}:la(U)==="BLOCK"&&[10,20,30,70].includes(V.code)?{...V,value:"0"}:V),x=[];for(const U of[...p].sort((V,oe)=>V.name==="BLOCK_RECORD"?1:oe.name==="BLOCK_RECORD"?-1:0)){const V=U.records.filter(oe=>l.has(oe)).map(oe=>oe===S?O(oe):oe);U.name==="BLOCK_RECORD"&&V.push(T("*Paper_Space",N)),x.push(...Bn(0,"TABLE",2,U.name,5,_s(U.header),330,"0",100,"AcDbSymbolTable",70,V.length),...U.name==="DIMSTYLE"?Bn(100,"AcDbDimStyleTable"):[],...V.flat(),...Bn(0,"ENDTAB"))}const _=[...O(D.records[0]),...D.records.at(-1),...Bn(0,"BLOCK",5,i(),330,N,100,"AcDbEntity",8,"0",100,"AcDbBlockBegin",2,"*Paper_Space",70,0,10,0,20,0,30,0,3,"*Paper_Space",1,"",0,"ENDBLK",5,i(),330,N,100,"AcDbEntity",8,"0",100,"AcDbBlockEnd")];for(const U of u)U!==r.toUpperCase()&&_.push(...this.blocks.get(U).records.flat());const k=this.objects.filter(U=>l.has(U)).map(U=>!Ru(U)||g.has(U)?U:U.filter((V,oe)=>V.code===3&&[350,360].includes(U[oe+1]?.code)?l.has(this.recordsByHandle.get(U[oe+1].value.trim().toUpperCase())):[350,360].includes(V.code)&&U[oe-1]?.code===3?l.has(this.recordsByHandle.get(V.value.trim().toUpperCase())):!0)).flat(),L=D.records.slice(1,-1).flat();if(!L.length)throw new Error("The selected block contains no native entities.");const H=new Set(["$ACADVER","$DWGCODEPAGE","$INSUNITS","$MEASUREMENT","$LTSCALE","$CELTSCALE","$PSLTSCALE"]),ee=[];let te=!1;for(const U of this.sections.get("HEADER")??[])U.code===9&&(te=H.has(U.value.trim())),te&&ee.push(U);ee.push(...Bn(9,"$HANDSEED",5,i(),9,"$INSBASE",10,ct(D.records[0],10)||"0",20,ct(D.records[0],20)||"0",30,ct(D.records[0],30)||"0"));const se=new Set([...l].map(U=>la(U))),Te=zn(this.sections.get("CLASSES")??[]).filter(U=>se.has(ct(U,1).toUpperCase())).flat(),fe=(U,V)=>[...Bn(0,"SECTION",2,U),...V,...Bn(0,"ENDSEC")],ce=[...fe("HEADER",ee),...Te.length?fe("CLASSES",Te):[],...fe("TABLES",x),...fe("BLOCKS",_),...fe("ENTITIES",L),...k.length?fe("OBJECTS",k):[],...Bn(0,"EOF")],z=new Set;for(const U of[...zn(x),...zn(_),...zn(L),...zn(k)]){const V=_s(U);if(V){if(z.has(V))throw new Error("Duplicate handle in isolated DXF.");z.add(V)}}for(const U of ce)if(ly(U.code)&&U.value.trim()&&U.value.trim()!=="0"&&!z.has(U.value.trim().toUpperCase()))throw new Error(`A required DXF reference was not retained (${U.code}).`);const Z=ce.map(U=>`${U.code}\r
${U.value}\r
`).join(""),me=new Uint8Array(Z.length);for(let U=0;U<Z.length;U++)me[U]=Z.charCodeAt(U);const Se=Us(me).content;let P="";for(let U=0;U<Se.length;U+=16384)P+=String.fromCharCode(...Se.subarray(U,U+16384));Nf(P);const J=new Ub().parseSync(P);if(!J?.entities.length||!J.blocks?.["*Model_Space"])throw new Error("The isolated block DXF failed its structural round-trip validation.");return Se}}const ju=(a,r)=>a.item.fields.find(s=>s.label===r)?.value.trim()??"";function cy(a,r){const i=a.reviewCandidates.filter(p=>p.sourceGroup===r).filter(p=>p.item.category==="symbol"),u=[...a.companyItems,...Object.values(a.projects).flatMap(p=>p.items)].filter(p=>p.category==="symbol"&&p.fields.some(m=>m.label==="Source drawing ID"&&m.value===r)).filter(p=>p.reviewStatus==="reviewed"),g=[...new Set(u.flatMap(p=>p.fields.filter(m=>m.label==="Target CAD layer"||m.label==="Source insert layer(s)").map(m=>m.value).filter(Boolean)))];return{pending:i.filter(p=>p.status==="needs-review").length,approved:u.length,dismissed:i.filter(p=>p.status==="dismissed").length,layers:g}}function LT(a,r,s,i=new Set){if(a.format!=="DXF"||a.category!=="company-standard")throw new Error("Select a saved DXF classified as a Legends Library standard. DWG still uses the AutoCAD extractor.");const l=new Gb(r),u=l.placements(),g=[...u].filter(([,D])=>D.size===1&&!!ef[[...D][0].trim().toUpperCase()]),p=Bl(l.text,g.map(([D])=>D)),m=[],f=[],y=new Map,b=[];let v=0;const E=new Set,R=[...s.reviewCandidates],C=(D,S,N,T=[])=>{const O=`extract-${a.id}-${D}-${S}`;return{id:O,proposedScope:"company",sourceGroup:a.id,status:"needs-review",item:{id:O,category:D==="BLOCK"?"symbol":"layer",name:`${D==="BLOCK"?"Block":"LAYER"} · ${S}`,summary:"Extracted from the saved DXF on this device. Only verified placement layers can be batch-approved.",sourceFile:a.label,sourceKind:"extracted-dwg",scope:"company",reviewStatus:"needs-review",canPromote:!1,fields:[{label:D==="BLOCK"?"Block name":"CAD name",value:S},{label:"Source drawing ID",value:a.id},{label:"Source discipline",value:a.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:N},...T]}}};for(const[D,S]of u){const N=[...S][0];if(S.size!==1||!ef[N.trim().toUpperCase()]){b.push({blockName:D,reason:S.size>1?"Mixed placement layers; review required.":"Internal or unsupported placement layer."});continue}const T=R.find(k=>k.sourceGroup===a.id&&ju(k,"Block name").toUpperCase()===D.toUpperCase()),O=[...s.companyItems,...Object.values(s.projects).flatMap(k=>k.items)].some(k=>k.fields.some(L=>L.label==="Source drawing ID"&&L.value===a.id)&&k.fields.some(L=>L.label==="Block name"&&L.value.trim().toUpperCase()===D.toUpperCase()));if(T&&T.status!=="needs-review"||O){v++;continue}if(!l.layerDetails(N)){b.push({blockName:D,reason:"The placement layer has no LAYER table record."});continue}const _=T&&ju(T,"Block asset ID")||`${a.id}|${D}`;try{if(!i.has(_)){const L=l.isolate(D),H=p.get(D);m.push({id:_,sourceId:a.id,blockName:D,content:L,format:"DXF",previewSvg:H?.previewSvg??null,nearbyLabels:H?.nearbyLabels??[],labelMatchAmbiguous:H?.labelMatchAmbiguous??!1,labelMatchSkipped:H?.labelMatchSkipped??!0,sourcePlacements:H?.sourcePlacements??[],...H?.geometryDescriptor?{geometryDescriptor:H.geometryDescriptor}:{}})}const k=C("BLOCK",D,`sourceLayer=${N};nativeIsolatedDxf=true`,[{label:"Block asset ID",value:_},{label:"Fallback category",value:""},{label:"Source insert layer(s)",value:N}]);if(T){const L=new Set(["Extracted details","Source insert layer(s)","Block asset ID"]);y.set(T.id,{...T,item:{...T.item,fields:[...T.item.fields.filter(H=>!L.has(H.label)),...k.item.fields.filter(H=>L.has(H.label))]}})}else f.push(k);E.add(N)}catch(k){b.push({blockName:D,reason:k instanceof Error?k.message:"Native DXF isolation failed."})}}for(const D of E){const S=R.some(T=>T.sourceGroup===a.id&&T.item.category==="layer"&&ju(T,"CAD name").toUpperCase()===D.toUpperCase()),N=s.companyItems.some(T=>T.category==="layer"&&T.fields.some(O=>O.label==="Source drawing ID"&&O.value===a.id)&&T.fields.some(O=>O.label==="CAD name"&&O.value.toUpperCase()===D.toUpperCase()));!S&&!N&&f.push(C("LAYER",D,l.layerDetails(D)))}return{library:{...s,reviewCandidates:[...s.reviewCandidates.map(D=>y.get(D.id)??D),...f]},assets:m,skipped:b,preserved:v,prepared:E.size?m.length:0,eligibleSymbols:g.length,addedSymbols:f.filter(D=>D.item.category==="symbol").length,updatedSymbols:y.size,detectedLayers:[...new Set([...u.values()].flatMap(D=>[...D]))]}}const OT=40*1024*1024,_T=40*1024*1024,Lu=48,PT=15,IT=32;function qT(a){const r=[];let s=0;for(;s<a.length;){const i=a[s];if(/\s/.test(i)){s+=1;continue}if(i==="("||i===")"){r.push(i),s+=1;continue}if(i==="."&&(s+1===a.length||/[\s)]/.test(a[s+1]))){r.push(i),s+=1;continue}if(i==='"'){let u="";for(s+=1;s<a.length&&a[s]!=='"';)if(a[s]==="\\"&&s+1<a.length){s+=1;const g=a[s];u+=g==="n"?`
`:g==="r"?"\r":g,s+=1}else u+=a[s],s+=1;if(a[s]!=='"')throw new Error("The AutoCAD geometry log contains an unfinished string value.");s+=1,r.push(JSON.stringify(u));continue}const l=s;for(;s<a.length&&!/[\s()]/.test(a[s]);)s+=1;if(l===s)throw new Error("The AutoCAD geometry log contains an invalid value.");r.push(a.slice(l,s))}return r}function sf(a,r,s=0){if(s>40)throw new Error("The AutoCAD geometry log nesting is too deep to read safely.");const i=a[r.index++];if(i===void 0)throw new Error("The AutoCAD geometry log contains an incomplete geometry record.");if(i!=="("){if(i===")")throw new Error("The AutoCAD geometry log contains an unexpected closing bracket.");return i.startsWith('"')?JSON.parse(i):/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(i)?Number(i):i.toLowerCase()==="nil"?null:i.toUpperCase()==="T"?!0:i}const l=[];for(;r.index<a.length&&a[r.index]!==")";){if(a[r.index]==="."){if(l.length!==1)throw new Error("The AutoCAD geometry log contains a malformed pair.");r.index+=1;const u=sf(a,r,s+1);if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains a malformed pair.");return{kind:"pair",first:l[0],rest:u}}l.push(sf(a,r,s+1))}if(a[r.index++]!==")")throw new Error("The AutoCAD geometry log contains an incomplete list.");return l}function _l(a){const r=qT(a),s={index:0},i=sf(r,s);if(s.index!==r.length)throw new Error("The AutoCAD geometry log has trailing geometry data.");return i}function Pl(a,r){if(Array.isArray(a))for(const s of a){if(s&&typeof s=="object"&&!Array.isArray(s)&&"kind"in s&&String(s.first)===r)return s.rest;if(Array.isArray(s)&&s.length>=2&&s[0]===r)return s.length===2?s[1]:s.slice(1)}}function MT(a,r){return!Array.isArray(a)||a.length<r||a.slice(0,r).some(s=>typeof s!="number"||!Number.isFinite(s))?null:a.slice(0,r)}function $T(a){if(!Array.isArray(a))return{};const r={};for(const s of a){if(s&&typeof s=="object"&&!Array.isArray(s)&&"kind"in s){const i=s;typeof i.first=="string"&&typeof i.rest=="number"&&Number.isFinite(i.rest)&&(r[i.first]=i.rest);continue}!Array.isArray(s)||typeof s[0]!="string"||typeof s[1]!="number"||!Number.isFinite(s[1])||(r[s[0]]=s[1])}return r}function UT(a){const r=_l(a);return Array.isArray(r)?r.filter(s=>typeof s=="string"):[]}function FT(a){if(new TextEncoder().encode(a).byteLength>OT)throw new Error("The AutoCAD geometry log is over the 40 MB local review limit.");const r=new Map,s=[],i=new Set;for(const l of a.split(/\r?\n/)){if(l.startsWith("SCAN|")){const C=l.split("|");C[1]&&Number.isInteger(Number(C[2]))&&i.add(`${C[1]}:${Number(C[2])}`);continue}if(l.startsWith("ENTITY|")){const C=l.indexOf("|NORMALIZED=");if(C<0)continue;const D=l.slice(0,C).split("|"),S=D[3]?.trim(),N=D[4]?.trim().toUpperCase();if(!S||!N)continue;const T=_l(l.slice(C+12));r.set(S,{handle:S,type:N,descriptor:T});continue}if(!l.startsWith("CANDIDATE|"))continue;const u=l.split("|"),g=C=>u.find(D=>D.startsWith(`${C}=`))?.slice(C.length+1),p=u[3]?.trim(),m=u[1]?.trim(),f=Number(u[2]),y=g("SOURCE_HANDLES"),b=g("BOUNDS"),v=g("PRIMITIVE_COUNTS");if(!p||!m||!Number.isInteger(f)||!y)continue;const E=b?_l(b):null,R=MT(E,4);s.push({id:p,sourceAlias:m,page:f,handles:UT(y),bounds:R,primitiveCounts:v?$T(_l(v)):{}})}if(r.size===0||i.size===0)throw new Error("This log has no readable geometry scans. Use AUTOCAD_GEOMETRY_SCAN.log from a current runner.");return{entities:r,candidates:s,pages:i.size}}function of(a){return typeof a=="number"&&Number.isFinite(a)?[a]:Array.isArray(a)?a.flatMap(of):[]}function Kb(a){return Array.isArray(a)?a.flatMap(r=>{if(r&&typeof r=="object"&&!Array.isArray(r)&&"kind"in r){const s=r;return typeof s.first=="number"&&Number.isFinite(s.first)?[{code:s.first,values:of(s.rest)}]:[]}return Array.isArray(r)&&typeof r[0]=="number"?[{code:r[0],values:r.slice(1).flatMap(of)}]:[]}):[]}function BT(a){return Kb(Pl(a,"properties"))}function Ps(a,r,s=0){const i=a.filter(l=>l.code===r)[s];return!i||i.values.length<2?null:{x:i.values[0],y:i.values[1]}}function lf(a,r,s){if(!Number.isFinite(s)||Math.abs(s)<1e-5)return[a,r];const i=r.x-a.x,l=r.y-a.y,u=Math.hypot(i,l);if(u<1e-9)return[a,r];const g=4*Math.atan(s),p=u*(1-s*s)/(4*s),m={x:(a.x+r.x)/2-l/u*p,y:(a.y+r.y)/2+i/u*p},f=Math.atan2(a.y-m.y,a.x-m.x),y=Math.hypot(a.x-m.x,a.y-m.y),b=Math.max(4,Math.min(32,Math.ceil(Math.abs(g)/(Math.PI/12))));return Array.from({length:b+1},(v,E)=>{const R=f+g*E/b;return{x:m.x+Math.cos(R)*y,y:m.y+Math.sin(R)*y}})}function Wb(a){const r=BT(a.descriptor),s=a.type;if(s==="LINE"){const i=Ps(r,10),l=Ps(r,11);return i&&l?[i,l]:[]}if(s==="CIRCLE"||s==="ARC"){const i=Ps(r,10),l=r.find(b=>b.code===40)?.values[0]??0;if(!i||l<=0)return[];const u=r.find(b=>b.code===50)?.values[0]??0,g=r.find(b=>b.code===51)?.values[0]??Math.PI*2,p=b=>Math.abs(b)>Math.PI*2+.1?b*Math.PI/180:b,m=s==="CIRCLE"?0:p(u);let f=s==="CIRCLE"?Math.PI*2:p(g)-m;for(;f<=0;)f+=Math.PI*2;const y=Math.max(12,Math.min(48,Math.ceil(f/(Math.PI/12))));return Array.from({length:y+1},(b,v)=>{const E=m+f*v/y;return{x:i.x+Math.cos(E)*l,y:i.y+Math.sin(E)*l}})}if(s==="LWPOLYLINE"){const i=[];let l=null;for(const m of r)m.code===10&&m.values.length>=2?(l={point:{x:m.values[0],y:m.values[1]},bulge:0},i.push(l)):m.code===42&&l&&(l.bulge=m.values[0]??0);const u=Pl(a.descriptor,"closed")===!0;if(i.length<2)return i.map(m=>m.point);const g=[],p=u?i.length:i.length-1;for(let m=0;m<p;m+=1){const f=i[m],y=i[(m+1)%i.length],b=lf(f.point,y.point,f.bulge);g.push(...m?b.slice(1):b)}return u||g.push(i[i.length-1].point),g}if(s==="POLYLINE"){const i=Pl(a.descriptor,"polylineVertices");if(!Array.isArray(i))return[];const l=i.flatMap(m=>{const f=Kb(m),y=Ps(f,10);return y?[{point:y,bulge:f.find(b=>b.code===42)?.values[0]??0}]:[]});if(l.length<2)return l.map(m=>m.point);const u=Pl(a.descriptor,"closed")===!0,g=u?l.length:l.length-1,p=[];for(let m=0;m<g;m+=1){const f=l[m],y=l[(m+1)%l.length],b=lf(f.point,y.point,f.bulge);p.push(...m?b.slice(1):b)}return u||p.push(l[l.length-1].point),p}if(s==="ELLIPSE"){const i=Ps(r,10),l=Ps(r,11),u=r.find(y=>y.code===40)?.values[0]??0;if(!i||!l||u<=0)return[];const g=r.find(y=>y.code===41)?.values[0]??0;let m=(r.find(y=>y.code===42)?.values[0]??Math.PI*2)-g;for(;m<=0;)m+=Math.PI*2;if(!Number.isFinite(m)||m>Math.PI*2+1e-6)return[];const f=Math.max(12,Math.min(96,Math.ceil(m/(Math.PI/24))));return Array.from({length:f+1},(y,b)=>{const v=g+m*b/f,E=Math.cos(v),R=Math.sin(v)*u;return{x:i.x+l.x*E-l.y*R,y:i.y+l.y*E+l.x*R}})}return s==="SPLINE"?r.filter(i=>i.code===11&&i.values.length>=2).map(i=>({x:i.values[0],y:i.values[1]})):[]}function zT(a){const r=a.geometry,s=a.transform,i=u=>({x:s[0]*u.x+s[2]*u.y+s[4],y:s[1]*u.x+s[3]*u.y+s[5]}),l=r.vertices??r.fitPoints??r.controlPoints;if((a.type==="LINE"||a.type==="SPLINE")&&l?.length)return l.map(i);if(a.type==="LWPOLYLINE"||a.type==="POLYLINE"){if(!l?.length)return[];const u=r.closed===!0,g=[],p=u?l.length:l.length-1;for(let m=0;m<p;m+=1){const f=l[m],y=l[(m+1)%l.length],b=lf(f,y,f.bulge??0).map(i);g.push(...m?b.slice(1):b)}return u||g.push(i(l[l.length-1])),g}if(a.type==="CIRCLE"||a.type==="ARC"){const u=r.center,g=Number(r.radius);if(!u||!Number.isFinite(g)||g<=0)return[];const p=a.type==="ARC"?Number(r.startAngle??0):0;let m=a.type==="ARC"?Number(r.endAngle??p+Math.PI*2)-p:Math.PI*2;for(;m<=0;)m+=Math.PI*2;const f=Math.max(12,Math.min(48,Math.ceil(m/(Math.PI/12))));return Array.from({length:f+1},(y,b)=>{const v=p+m*b/f;return i({x:u.x+Math.cos(v)*g,y:u.y+Math.sin(v)*g})})}if(a.type==="ELLIPSE"){const u=r.center,g=r.majorAxisEndPoint,p=Number(r.axisRatio);if(!u||!g||!Number.isFinite(p)||p<=0)return[];const m=Number(r.startAngle??0);let y=Number(r.endAngle??Math.PI*2)-m;for(;y<=0;)y+=Math.PI*2;if(!Number.isFinite(y)||y>Math.PI*2+1e-6)return[];const b=Math.max(12,Math.min(96,Math.ceil(y/(Math.PI/24))));return Array.from({length:b+1},(v,E)=>{const R=m+y*E/b;return i({x:u.x+g.x*Math.cos(R)-g.y*p*Math.sin(R),y:u.y+g.y*Math.cos(R)+g.x*p*Math.sin(R)})})}return[]}function YT(a){return a.length<=Lu?a:Array.from({length:Lu},(r,s)=>a[Math.floor(s*(a.length-1)/(Lu-1))])}function dy(a){const r=YT(a.filter(l=>Number.isFinite(l.x)&&Number.isFinite(l.y)));if(r.length<2)return[];const s={x:r.reduce((l,u)=>l+u.x,0)/r.length,y:r.reduce((l,u)=>l+u.y,0)/r.length},i=Math.sqrt(r.reduce((l,u)=>l+(u.x-s.x)**2+(u.y-s.y)**2,0)/r.length);return!Number.isFinite(i)||i<1e-9?[]:r.map(l=>({x:(l.x-s.x)/i,y:(l.y-s.y)/i}))}function uy(a){return a.length?{minX:Math.min(...a.map(r=>r.x)),minY:Math.min(...a.map(r=>r.y)),maxX:Math.max(...a.map(r=>r.x)),maxY:Math.max(...a.map(r=>r.y))}:null}function fy(a){return a?Math.hypot(a.maxX-a.minX,a.maxY-a.minY):0}function py(a,r){const s=new Set([...Object.keys(a),...Object.keys(r)]);let i=0,l=0;for(const u of s){const g=a[u]??0,p=r[u]??0;i+=Math.max(g,p),l+=Math.abs(g-p)}return i===0?0:Math.max(0,1-l/(2*i))}function hy(a,r){if(!a||!r)return 0;const s=Math.max(a.maxX-a.minX,1e-9),i=Math.max(a.maxY-a.minY,1e-9),l=Math.max(r.maxX-r.minX,1e-9),u=Math.max(r.maxY-r.minY,1e-9),g=Math.max(s/i,i/s),p=Math.max(l/u,u/l);return Math.exp(-Math.abs(Math.log(g/p)))}function gy(a,r){let s=0;for(const i of a){let l=Number.POSITIVE_INFINITY;for(const u of r){const g=(i.x-u.x)**2+(i.y-u.y)**2;g<l&&(l=g)}s+=l}return s/a.length}function HT(a,r){let s=Number.POSITIVE_INFINITY,i=0;for(let l=0;l<360;l+=PT){const u=l*Math.PI/180,g=Math.cos(u),p=Math.sin(u),m=r.map(y=>({x:g*y.x-p*y.y,y:p*y.x+g*y.y})),f=Math.sqrt((gy(a,m)+gy(m,a))/2);f<s&&(s=f,i=l)}return{residual:s,rotation:i}}function VT(a,r){return a.handles.flatMap(s=>{const i=r.get(s);return i?Wb(i):[]})}function XT(a,r){const s=new Set;for(const i of a.handles){const l=r.get(i);(!l||Wb(l).length<2)&&s.add(l?.type??"MISSING_ENTITY")}return[...s].sort()}function my(a){return a.primitives.flatMap(zT)}function GT(a,r){if(new TextEncoder().encode(a).byteLength>_T)throw new Error("The CAD block geometry index is over the 40 MB local review limit.");let s;try{s=JSON.parse(a)}catch{throw new Error("The selected file is not valid CAD_BLOCK_GEOMETRY_INDEX.json.")}if(!s||typeof s!="object"||s.localOnly!==!0||!Array.isArray(s.blocks))throw new Error("This is not a local-only CAD block geometry index from the runner package.");return s.blocks.filter(i=>i.indexStatus==="INDEXED"&&(i.discipline===r||i.discipline==="Shared")&&typeof i.blockName=="string"&&typeof i.blockAssetId=="string"&&i.geometry&&typeof i.geometry=="object")}function KT(a,r,s){const i=FT(a),u=GT(r,s).flatMap(p=>{const m=p.geometry,f=dy(my(m));return!f.length||!m.bounds?[]:[{block:p,geometry:m,cloud:f,bounds:uy(my(m)),primitiveCounts:m.primitiveCounts??{}}]}),g=i.candidates.map(p=>{const m=XT(p,i.entities);if(m.length)return{...p,best:null,second:null,status:"UNMATCHED",reason:`Matching withheld because candidate geometry is incomplete or unsupported: ${m.join(", ")}.`};const f=VT(p,i.entities),y=dy(f),b=p.bounds?{minX:p.bounds[0],minY:p.bounds[1],maxX:p.bounds[2],maxY:p.bounds[3]}:uy(f);if(u.length===0)return{...p,best:null,second:null,status:"NO_INDEXED_BLOCKS",reason:"No indexed approved blocks for this discipline."};if(y.length<2||!b)return{...p,best:null,second:null,status:"UNMATCHED",reason:"Candidate has too little supported geometry to compare."};const E=u.map(T=>({prepared:T,coarse:hy(b,T.geometry.bounds)*.75+py(p.primitiveCounts,T.primitiveCounts)*.25})).sort((T,O)=>O.coarse-T.coarse).slice(0,IT).map(({prepared:T})=>T).map(T=>{const O=py(p.primitiveCounts,T.primitiveCounts),x=hy(b,T.geometry.bounds),_=HT(y,T.cloud),k=Math.exp(-_.residual*2.5),L=Math.max(0,Math.min(1,k*.7+O*.2+x*.1)),H=fy(b),ee=fy(T.geometry.bounds),te=String(T.block.category??""),se=/\b(equipment|tower|vessel|tank|exchanger|column|drum)\b/i.test(te);return{blockAssetId:String(T.block.blockAssetId),blockName:String(T.block.blockName),category:te,targetLayer:String(T.block.targetLayer??""),score:L,geometryResidual:_.residual,primitiveSimilarity:O,aspectSimilarity:x,rotationDegrees:_.rotation,estimatedUniformScale:se||ee<=1e-9?null:H/ee,indexStatus:String(T.block.indexStatus)}}).sort((T,O)=>O.score-T.score||T.blockName.localeCompare(O.blockName)),R=E[0]??null,C=E[1]??null,D=R&&C?R.score-C.score:Number.POSITIVE_INFINITY,S=!R||R.score<.9?"UNMATCHED":D<.02?"AMBIGUOUS_REVIEW":R.score>=.97?"HIGH_CANDIDATE_REVIEW":"REVIEW";return{...p,best:R,second:C,status:S,reason:S==="AMBIGUOUS_REVIEW"?"Top library shapes are too close to identify safely.":S==="UNMATCHED"?"No geometry match reached the initial review threshold.":"Experimental shape score only; human confirmation is required."}});return{scan:i,candidates:g,indexedBlockCount:u.length}}function WT(a,r){return JSON.stringify({schemaVersion:1,localOnly:!0,discipline:r,generatedAt:new Date().toISOString(),note:"Experimental geometry similarity rankings. Scores are not probabilities or approvals. Source geometry was not changed; every candidate requires human review.",pagesScanned:a.scan.pages,indexedBlocks:a.indexedBlockCount,candidates:a.candidates},null,2)}function yy(a){return a===void 0?"—":`${(a*100).toFixed(1)}%`}function ZT(a){return a==null?"Review":`${a.toFixed(3)}×`}function QT({discipline:a}){const[r,s]=q.useState(null),[i,l]=q.useState(null),[u,g]=q.useState(null),[p,m]=q.useState(""),[f,y]=q.useState(!1),b=async()=>{if(!r||!i){m("Choose both AUTOCAD_GEOMETRY_SCAN.log and CAD_BLOCK_GEOMETRY_INDEX.json.");return}y(!0),m(""),g(null);try{const[E,R]=await Promise.all([r.text(),i.text()]),C=KT(E,R,a);g({scanName:r.name,indexName:i.name,discipline:a,indexedBlockCount:C.indexedBlockCount,pagesScanned:C.scan.pages,candidates:C.candidates})}catch(E){m(E instanceof Error?E.message:"The local geometry report could not be compared.")}finally{y(!1)}},v=()=>{if(!u)return;const E=WT({scan:{entities:new Map,candidates:[],pages:u.pagesScanned},candidates:u.candidates,indexedBlockCount:u.indexedBlockCount},u.discipline),R=URL.createObjectURL(new Blob([E],{type:"application/json"})),C=document.createElement("a");C.href=R,C.download="LOCAL_GEOMETRY_MATCH_REVIEW.json",C.click(),URL.revokeObjectURL(R)};return c.jsxs("section",{className:"geometry-match-review","aria-labelledby":"geometry-match-title","data-testid":"panel-geometry-match-review",children:[c.jsxs("div",{className:"geometry-match-heading",children:[c.jsx("span",{className:"geometry-match-icon",children:c.jsx(iE,{size:16})}),c.jsxs("div",{children:[c.jsx("h3",{id:"geometry-match-title",children:"Review geometry matches"}),c.jsx("p",{children:"Compare a local AutoCAD scan with indexed approved blocks. Source drawings are not changed."})]})]}),c.jsxs("div",{className:"geometry-match-privacy",children:[c.jsx(qu,{size:14})," Both files are read and compared in this browser; nothing is uploaded."]}),c.jsx("p",{className:"geometry-match-instructions",children:"Use the scan log from AutoCAD and the index file from that same runner kit. The result is a local review aid only."}),c.jsxs("div",{className:"geometry-match-inputs",children:[c.jsxs("label",{children:[c.jsx("span",{children:"AutoCAD geometry scan log"}),c.jsx("input",{type:"file",accept:".log,.txt","aria-label":"Select AutoCAD geometry scan log",onChange:E=>{s(E.currentTarget.files?.[0]??null),g(null),m("")},"data-testid":"input-geometry-scan-log"})]}),c.jsxs("label",{children:[c.jsx("span",{children:"CAD block geometry index"}),c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Select CAD block geometry index",onChange:E=>{l(E.currentTarget.files?.[0]??null),g(null),m("")},"data-testid":"input-cad-geometry-index"})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{b()},disabled:f||!r||!i,"data-testid":"button-build-geometry-match-report",children:[c.jsx(Vr,{size:14}),f?"Comparing…":"Compare geometry"]})]}),p&&c.jsx("p",{className:"geometry-match-error",role:"alert",children:p}),u&&c.jsxs("div",{className:"geometry-match-results","data-testid":"geometry-match-results",children:[c.jsxs("div",{className:"geometry-match-summary",role:"status",children:[u.discipline,": ",u.candidates.length," candidate group(s) across ",u.pagesScanned," page(s); ",u.indexedBlockCount," indexed approved block(s)."]}),u.indexedBlockCount===0&&c.jsx("p",{className:"geometry-match-warning",children:"No matching indexed blocks were found for this discipline. Check that the selected index came from the same local runner package."}),u.indexedBlockCount>0&&u.candidates.length===0&&c.jsx("p",{className:"geometry-match-warning",children:"AutoCAD found no geometry candidate groups on the scanned pages. No blocks were inserted or drawings changed."}),u.candidates.map(E=>c.jsxs("article",{className:"geometry-match-card",children:[c.jsxs("div",{className:"geometry-match-card-head",children:[c.jsx("strong",{children:E.id}),c.jsx("span",{className:`geometry-match-status status-${E.status.toLowerCase()}`,children:E.status.replaceAll("_"," ")})]}),c.jsxs("div",{className:"geometry-match-card-meta",children:["Page ",E.page," · ",E.handles.length," source entities · ",E.sourceAlias]}),c.jsxs("div",{className:"geometry-match-ranking",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Best shape match"}),c.jsx("strong",{children:E.best?.blockName??"No match"}),c.jsxs("small",{children:[yy(E.best?.score)," · ",E.best?.targetLayer||"no target layer"," ·"," ",E.best?.rotationDegrees??"—","° · scale ",ZT(E.best?.estimatedUniformScale)]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Second match"}),c.jsx("strong",{children:E.second?.blockName??"—"}),c.jsx("small",{children:yy(E.second?.score)})]})]}),c.jsx("p",{children:E.reason})]},`${E.sourceAlias}-${E.page}-${E.id}`)),c.jsxs("div",{className:"geometry-match-foot",children:[c.jsx("span",{children:"Experimental shape scores are not probabilities or approvals. Every result needs a person to verify it."}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:v,"data-testid":"button-download-geometry-match-report",children:[c.jsx(Hr,{size:13})," Download local report"]})]})]})]})}const by=250*1024*1024,vy=500*1024*1024,cf={"needs-review":"Needs review","company-standard":"Legends Library standard","project-example":"Project example","markup-reference":"Markup reference",ignore:"Do not use"};function wy(a,r){return r&&a==="project-example"?"Client-specific library source":cf[a]}function Ou(){return globalThis.crypto?.randomUUID?.()??`source-${Date.now()}-${Math.random().toString(36).slice(2)}`}function _u(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(2)} MB`}function Ey(a){return(a.replace(/\\/g,"/").split("/").pop()??"").replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,"").trim().slice(0,180)||"Unnamed CAD drawing"}function JT({onAddPdfs:a,discipline:r,clientFolderId:s,clientFolderLabel:i}){const[l,u]=q.useState([]),[g,p]=q.useState({}),[m,f]=q.useState([]),[y,b]=q.useState([]),[v,E]=q.useState(""),[R,C]=q.useState(""),[D,S]=q.useState(!1),[N,T]=q.useState(!1),[O,x]=q.useState(""),[_,k]=q.useState(!1),[L,H]=q.useState(()=>{try{return yn().reviewCandidates.filter(F=>F.status==="needs-review").length}catch{return 0}}),[ee,te]=q.useState(!1),[se,Te]=q.useState(""),[fe,ce]=q.useState(!1),[z,Z]=q.useState(!1),[me,Se]=q.useState(0),[P,J]=q.useState([]);q.useEffect(()=>{const F=()=>Se(ue=>ue+1);return window.addEventListener(ri,F),window.addEventListener("storage",F),window.addEventListener("focus",F),()=>{window.removeEventListener(ri,F),window.removeEventListener("storage",F),window.removeEventListener("focus",F)}},[]);const U=q.useMemo(()=>{try{const F=yn();return Object.fromEntries(l.map(ue=>[ue.id,cy(F,ue.id)]))}catch{return{}}},[l,me]);q.useEffect(()=>{af().then(F=>{u(F),p(Object.fromEntries(F.map(ue=>[ue.id,{category:ue.category,discipline:ue.discipline,projectLabel:ue.projectLabel}])))}).catch(F=>{x(F instanceof Error?F.message:"The local CAD library could not be opened.")})},[]);const V=q.useMemo(()=>SS(l,r,s),[l,r,s]),oe=q.useMemo(()=>V.filter(F=>F.category==="company-standard"||!!s&&F.category==="project-example"&&F.projectLabel===s),[V,s]);q.useEffect(()=>{oe.some(F=>F.id===se)||Te(oe[0]?.id??"")},[oe,se]);const de=q.useMemo(()=>V.reduce((F,ue)=>(F[ue.category]+=1,F),{"needs-review":0,"company-standard":0,"project-example":0,"markup-reference":0,ignore:0}),[V]),ve=m.some(F=>s?F.projectLabel!==s:!!F.projectLabel),qe=async F=>{S(!0),C(""),x(""),E(""),k(!1),f([]),b([]);try{if(F.size>by)throw new Error("The archive is larger than the 250 MB limit for this local test.");const ue=Qm(new Uint8Array(await F.arrayBuffer())),ge=Object.entries(ue).filter(([Ve])=>!Ve.endsWith("/")),B=ge.filter(([Ve])=>/\.(dwg|dxf)$/i.test(Ve)&&!/_OVERVIEW\.dxf$/i.test(Ve)),pe=ge.filter(([Ve])=>/\.pdf$/i.test(Ve)),Ce=ge.filter(([Ve])=>/\.bak$/i.test(Ve)).length;if([...B,...pe].reduce((Ve,[,Me])=>Ve+Me.byteLength,0)>vy)throw new Error("The PDF and CAD source files together exceed the 500 MB local test limit.");if(B.length===0&&pe.length===0)throw new Error("No PDF, DWG, or source DXF files were found in this ZIP. Overview DXFs and other file types are not saved as source drawings.");const Oe=B.map(([Ve,Me],jt)=>({id:Ou(),label:`Source CAD ${String(l.length+jt+1).padStart(3,"0")}`,reviewFilename:Ey(Ve),category:"needs-review",discipline:r,format:/\.dxf$/i.test(Ve)?"DXF":"DWG",projectLabel:s??"",bytes:Me.byteLength,content:Me})),Qe=pe.map(([,Ve],Me)=>({id:Ou(),label:`PDF ${String(Me+1).padStart(2,"0")}`,file:new File([Ve],`SOURCE_${String(Me+1).padStart(2,"0")}.pdf`,{type:"application/pdf"})}));f(Oe),b(Qe),E(`Found ${B.length} CAD drawing file(s) and ${pe.length} PDF file(s). ${Ce} backup file(s) ignored.`),B.length?C("Assign a use to each CAD drawing before saving it. ZIP filenames are shown only during review; the saved library keeps generic source IDs."):C("No CAD drawings to add. You can add the extracted PDF to the conversion queue.")}catch(ue){x(ue instanceof Error?ue.message:"The ZIP could not be read. Check that it is not damaged or password-protected.")}finally{S(!1)}},Le=async F=>{x(""),E(""),C(""),f([]),b([]),k(!1);const ue=F.filter(B=>/\.(dwg|dxf)$/i.test(B.name)&&!/_OVERVIEW\.dxf$/i.test(B.name));if(ue.length!==F.length){x("Choose source DWG/DXF files only. Overview DXFs are not source drawings.");return}if(ue.reduce((B,pe)=>B+pe.size,0)>vy){x("The selected CAD source files exceed the 500 MB local test limit.");return}if(!ue.length){x("Choose at least one DWG or DXF source drawing.");return}S(!0);try{const B=await Promise.all(ue.map(async(pe,Ce)=>({id:Ou(),label:`Source CAD ${String(l.length+Ce+1).padStart(3,"0")}`,reviewFilename:Ey(pe.name),category:"needs-review",discipline:r,format:/\.dxf$/i.test(pe.name)?"DXF":"DWG",projectLabel:s??"",bytes:pe.size,content:new Uint8Array(await pe.arrayBuffer())})));f(B),E(`Prepared ${B.length} CAD source file(s) for local review.`),C("Choose the correct discipline and local library category for each file. Filenames are discarded when saved.")}catch(B){x(B instanceof Error?B.message:"The CAD files could not be read locally.")}finally{S(!1)}},gt=async()=>{if(ve){x("The selected client folder changed after these files were staged. Re-select the original client folder or add the files again.");return}if(m.some(F=>F.category==="needs-review")){x("Choose a category for every CAD drawing before saving the library.");return}if(m.some(F=>["project-example","markup-reference"].includes(F.category)&&!F.projectLabel?.trim())){x("Enter a neutral project code for every project example and markup reference.");return}T(!0),x("");try{let F=0;const ue=m.filter(pe=>pe.category!=="ignore").map(pe=>{const Ce=pe.format==="DXF"?Us(pe.content):null;return F+=Ce?.repairs.length??0,{id:pe.id,label:pe.label,category:pe.category,discipline:pe.discipline,format:pe.format,projectLabel:pe.projectLabel,bytes:Ce?.content.byteLength??pe.bytes,content:Ce?.content??pe.content}});await jS(ue);const ge=await af();u(ge),p(Object.fromEntries(ge.map(pe=>[pe.id,{category:pe.category,discipline:pe.discipline,projectLabel:pe.projectLabel}])));const B=m.length-ue.length;f([]),C(`${ue.length} source CAD drawing(s) saved in this browser's local library. ${B} marked “Do not use”. ${F} DXF symbol name(s) repaired in local copies; original disk files unchanged.`)}catch(F){x(F instanceof Error?F.message:"The CAD sources could not be saved locally.")}finally{T(!1)}},nt=(F,ue)=>{p(ge=>({...ge,[F.id]:{...F,...ge[F.id],...ue}}))},ot=async F=>{const ue=g[F.id]??{category:F.category,discipline:F.discipline,projectLabel:F.projectLabel};if(["project-example","markup-reference"].includes(ue.category)&&!ue.projectLabel?.trim()){x("Enter a neutral project code before saving this project-specific source.");return}x("");try{await LS(F.id,ue),u(ge=>ge.map(B=>B.id===F.id?{...B,...ue,...ue.projectLabel?.trim()?{projectLabel:ue.projectLabel.trim()}:{projectLabel:void 0}}:B))}catch(ge){x(ge instanceof Error?ge.message:"The source drawing category could not be changed.")}},dt=async()=>{if(!(!oe.length||ee)){te(!0),x("");try{const F=await IS(oe),ue=URL.createObjectURL(F),ge=document.createElement("a");ge.href=ue,ge.download="local-cad-extractor-kit.zip",ge.click(),window.setTimeout(()=>URL.revokeObjectURL(ue),1e3),C(`Local extractor kit prepared with ${oe.length} source CAD drawing(s).`)}catch(F){x(F instanceof Error?F.message:"The local extractor kit could not be prepared.")}finally{te(!1)}}},qt=async F=>{const ue=oe.some(B=>B.id===se)?se:oe[0]?.id,ge=oe.find(B=>B.id===ue);if(!ge){x("Choose a reviewed source drawing before importing its extraction.");return}if(ge.category==="project-example"&&!ge.projectLabel?.trim()){x("Add a neutral project code to this source drawing before importing its extraction.");return}ce(!0),x("");try{if(F.size>by)throw new Error("The extraction ZIP is larger than the 250 MB limit for this local test.");const B=Qm(new Uint8Array(await F.arrayBuffer())),pe=Object.entries(B).find(([Mt])=>/\.tsv$/i.test(Mt));if(!pe)throw new Error("The ZIP must contain CAD_STANDARDS.tsv from PIDEXTRACTSTANDARDS.");const ye=new TextDecoder().decode(pe[1]).split(/\r?\n/).filter(Boolean);if(ye.length<2||!ye[0].toUpperCase().includes("KIND")||!ye[0].toUpperCase().includes("NAME"))throw new Error("The ZIP contains an invalid CAD_STANDARDS.tsv extraction.");const Oe=yn(),Qe=Object.entries(B).filter(([Mt])=>/_OVERVIEW\.dxf$/i.test(Mt)),Ve=ye[1]?.split("	")[0]?.trim()??"",Me=Qe.find(([Mt])=>Mt.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===`${Ve}_OVERVIEW.dxf`.toLowerCase());if(Qe.length&&(!Me||Qe.length!==1))throw new Error("Include exactly one overview DXF for this extraction, named with the same SOURCE alias as the TSV (for example SOURCE_001_OVERVIEW.dxf).");const jt=ye.slice(1).flatMap(Mt=>{const[,ja,ut]=Mt.split("	");return ja?.trim().toUpperCase()==="BLOCK"&&ut?.trim()?[ut.trim()]:[]});if(Me&&Me[1].byteLength>30*1024*1024)throw new Error("The overview DXF exceeds the 30 MB preview limit. Keep the original extraction unchanged and export a smaller Legends-only overview.");let be=null,et="",rt=!1;if(Me)be=new TextDecoder("windows-1252").decode(Me[1]),et="overview DXF";else if(ge.format==="DXF"&&ge.bytes<=30*1024*1024)try{be=new TextDecoder("windows-1252").decode(await Jo(ge.id)),et="saved source DXF"}catch{rt=!0}else ge.format==="DXF"&&(rt=!0);let Qt=new Map;if(be)try{Qt=Bl(be,jt)}catch{rt=!0}const Re=[],Ra=[],At=[];for(const Mt of ye.slice(1)){const[,ja,ut,Ot=""]=Mt.split("	"),$t=ja?.trim().toUpperCase(),wt=ut?.trim();if(!wt||!xy[$t])continue;const La=$t==="BLOCK"&&Bb(wt)?"directionArrow":xy[$t],ra=$t==="BLOCK"?Qt.get(wt):void 0;let cn;if($t==="BLOCK"){const fa=Ot.match(/(?:^|;)asset=([^;]+)/i)?.[1]?.trim();if(!fa){At.push(wt);continue}const pa=fa.replaceAll("\\","/").split("/").at(-1),Dt=Object.entries(B).find(([We])=>We.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===pa?.toLowerCase());if(!pa||!Dt){At.push(wt);continue}cn=`${ge.id}|${wt}`,Ra.push({id:cn,sourceId:ge.id,blockName:wt,content:Dt[1],format:"DWG",...be&&!rt?{previewSvg:ra?.previewSvg??null,nearbyLabels:ra?.nearbyLabels??[],labelMatchSkipped:ra?.labelMatchSkipped??!1,labelMatchAmbiguous:ra?.labelMatchAmbiguous??!1,sourcePlacements:ra?.sourcePlacements??[],...ra?.geometryDescriptor?{geometryDescriptor:ra.geometryDescriptor}:{}}:{}})}const en=`extract-${ge.id}-${$t}-${wt}`;if(Oe.reviewCandidates.find(fa=>fa.id===en))continue;const Oa=ge.category==="project-example",Sn=[{label:$t==="BLOCK"?"Block name":"CAD name",value:wt},{label:"Source drawing ID",value:ge.id},{label:"Source discipline",value:ge.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:Ot.replace(/(?:^|;)asset=[^;]*/i,"").trim()||"No additional table details"},...$t==="BLOCK"?[{label:"Block asset ID",value:cn??""},{label:"Fallback category",value:""},...ra?.sourcePlacements?.length?[{label:"Source insert layer(s)",value:[...new Set(ra.sourcePlacements.map(fa=>fa.layer))].join(", ")},{label:"Source insert rotation(s)",value:ra.sourcePlacements.map(fa=>`${fa.rotationDegrees}° on ${fa.layer} (${fa.count})`).join("; ")}]:[]]:[]];Re.push({id:en,item:{id:en,category:La,name:`${La==="directionArrow"?"Direction Arrow":$t==="BLOCK"?"Block":$t.replaceAll("_"," ")} · ${wt}`,summary:"Extracted locally from a source CAD drawing; confirm each value before use.",sourceFile:ge.label,sourceKind:"extracted-dwg",scope:Oa?"project":"company",reviewStatus:"needs-review",...Oa?{projectId:ge.projectLabel,projectName:ge.projectLabel===s&&i||ge.projectLabel}:{},canPromote:!1,fields:Sn},proposedScope:Oa?"project":"company",sourceGroup:ge.id,...Oa?{projectId:ge.projectLabel,projectName:ge.projectLabel===s&&i||ge.projectLabel}:{},status:"needs-review"})}const vt={...Oe,reviewCandidates:[...Oe.reviewCandidates,...Re],auditTrail:Re.length?[{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:"Local CAD extraction added for review",detail:`${Re.length} extracted records from ${ge.label} were added as pending review.`,...ge.projectLabel?{projectName:ge.projectLabel===s&&i||ge.projectLabel}:{}},...Oe.auditTrail]:Oe.auditTrail},Jt=be&&!rt?sy(vt,ge.id,Qt).library:vt;await nf(Ra),si(Jt),H(Jt.reviewCandidates.filter(Mt=>Mt.status==="needs-review").length),C((Re.length?`${Re.length} extracted record(s) added to Drafting standards for review. Nothing was approved automatically.`:"No new records found; the extracted names are already in the review queue or standards library.")+(Qt.size?` ${Qt.size} local block previews and source placement-layer details read from the ${et}. Nearby labels remain suggestions and need confirmation.`:rt?" The source preview could not be read; the valid extracted records were still imported without preview-based layer evidence.":ge.format==="DWG"&&!Me?" To identify DWG blocks and their placement layers, include the source *_OVERVIEW.dxf exported with PIDEXPORTOVERVIEW.":"")+(At.length?` ${At.length} block asset(s) were missing and skipped: ${[...new Set(At)].slice(0,5).join(", ")}${At.length>5?", …":""}. Other valid records were kept.`:""))}catch(B){x(B instanceof Error?B.message:"The CAD extraction could not be imported.")}finally{ce(!1)}},mt=async()=>{const F=oe.find(ge=>ge.id===se&&ge.category==="company-standard"),ue=F?[F.id]:[];if(!(!F||z)){Z(!0),x(""),C(""),J([]);try{let ge=yn();const B=JSON.stringify(ge);let pe="";if(F.format==="DXF"){C(`${F.label}: extracting native blocks from the saved DXF on this device…`),await new Promise(rt=>window.setTimeout(rt,0));const be=await CS(),et=LT(F,await Jo(F.id),ge,be);if(JSON.stringify(yn())!==B)throw new Error("The library changed during DXF preparation. No records were changed; retry with the latest library.");await nf(et.assets,!0),ge=et.library,J(et.skipped),pe=`${et.addedSymbols} new symbol record(s), ${et.assets.length} native block file(s) saved; ${et.preserved} previously reviewed symbol(s) preserved. ${et.skipped.length} item(s) excluded or need native extraction/review. `}const Ce=ge.reviewCandidates.filter(be=>be.sourceGroup===F.id&&be.status==="needs-review"&&be.proposedScope==="company"&&be.item.category==="symbol"&&be.item.sourceKind==="extracted-dwg");if(!Ce.length){const be=cy(ge,F.id);C(`${F.label}: ${pe}No pending symbols to approve. ${be.approved} already approved; ${be.dismissed} dismissed. ${F.format==="DXF"?"Only named model-space INSERTs on supported placement layers can be extracted. See excluded items below; loose geometry is not guessed into blocks.":"For DWG, import this source’s extraction ZIP with its individual block files."}`);return}let ye="";if(F.format==="DXF"){if(F.bytes>30*1024*1024)throw new Error("This saved source DXF exceeds the 30 MB recovery limit. Import its extraction with a smaller Legends-only overview DXF.");const be=await Jo(F.id),et=Ce.map(Re=>Re.item.fields.find(Ra=>Ra.label==="Block name")?.value.trim()??"").filter(Boolean),rt=Bl(new TextDecoder("windows-1252").decode(be),et),Qt=sy(ge,F.id,rt);ge=Qt.library,ye=`${Qt.recoveredSymbols} pending symbol(s) have INSERT-layer evidence in the saved DXF; ${Qt.updatedRecords} existing record(s) updated. `}const Oe=new Set(ue),Qe=new Set(ge.reviewCandidates.filter(be=>be.status==="needs-review"&&Oe.has(be.sourceGroup)&&be.item.category==="symbol").map(be=>be.item.fields.find(et=>et.label==="Block asset ID")?.value.trim()??"").filter(Boolean)),Ve=new Set;await Promise.all([...Qe].map(async be=>{try{await Mb(be),Ve.add(be)}catch{}}));const Me=yS(ge,ue,Ve);if(JSON.stringify(yn())!==B)throw new Error("The local standards library changed while this source was being checked. No approval changes were saved; retry to use the latest records.");si(Me.library),H(Me.library.reviewCandidates.filter(be=>be.status==="needs-review").length);const jt=Object.values(Me.skipped).reduce((be,et)=>be+et,0);C(`${F.label}: ${pe}${ye}`+(Me.approvedSymbols?`${Me.approvedSymbols} layer-matched symbol(s) approved for shared PFD/P&ID use; ${Me.approvedLayers} placement layer(s) approved or updated.`:"0 symbols approved. Only exact placement layers with local block files and a matching layer record can be approved.")),jt&&C(be=>`${be} ${Me.skipped.missingAsset} missing asset(s), ${Me.skipped.unsupportedLayer} internal/unsupported layer item(s), ${Me.skipped.ambiguousLayer} ambiguous layer item(s), ${Me.skipped.missingLayer} missing layer record(s), and ${Me.skipped.invalidCandidate} invalid item(s) stayed unapproved.`)}catch(ge){C(""),x(ge instanceof Error?ge.message:"The categorized CAD mappings could not be approved locally.")}finally{Z(!1)}}};return c.jsxs("section",{className:"local-cad-library","aria-labelledby":"local-library-title","data-testid":"panel-local-cad-library",children:[c.jsxs("div",{className:"local-library-heading",children:[c.jsx("div",{className:"local-library-icon",children:c.jsx(wf,{size:17})}),c.jsxs("div",{className:"local-library-title",children:[c.jsx("div",{className:"pdf-kicker",children:"SOURCE DRAWINGS · LOCAL ONLY"}),c.jsx("h3",{id:"local-library-title",children:s?"Client Source Library":"Legends Library"}),c.jsx("p",{children:s?`Manage CAD sources for ${i||"this client folder"}. Company standards remain the common default.`:"Add common company standards here. Select a Client folder first to add client-specific sources."})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-files",children:[D?c.jsx(ka,{size:14,className:"pdf-spin"}):c.jsx(Vr,{size:14}),D?"Reading…":"Add DWG/DXF",c.jsx("input",{type:"file",accept:".dwg,.dxf,application/acad,application/x-dwg,application/dxf",multiple:!0,"aria-label":"Add local DWG or DXF source files",disabled:D,onChange:F=>{const ue=[...F.currentTarget.files??[]];ue.length&&Le(ue),F.currentTarget.value=""},"data-testid":"input-add-cad-files"})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-archive",children:[D?c.jsx(ka,{size:14,className:"pdf-spin"}):c.jsx(bf,{size:14}),D?"Reading ZIP…":"Add ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Add a ZIP with PDF and DWG/DXF source files",disabled:D,onChange:F=>{const ue=F.currentTarget.files?.[0];ue&&qe(ue),F.currentTarget.value=""},"data-testid":"input-add-cad-archive"})]})]}),c.jsxs("div",{className:"local-library-privacy",children:[c.jsx(Vn,{size:14}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay in this browser."})," ",s?"This client source list is separate from the company Legends Library and other client folders.":"Company-standard sources remain shared defaults; project/client examples stay separate from them."]})]}),c.jsxs("div",{className:"local-library-extraction",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:[c.jsx(rE,{size:14})," Extract drawing standards locally"]}),c.jsx("span",{children:"Package eligible DWG/DXF drawings with a Windows AutoCAD script. It exports only blocks actually inserted on approved equipment, instrument, or inline-component layers—unused internal definitions are skipped. Source drawings are not uploaded or changed."})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{dt()},disabled:!oe.length||ee,"data-testid":"button-download-cad-extractor",children:[ee?c.jsx(ka,{size:13,className:"pdf-spin"}):c.jsx(Hr,{size:13}),ee?"Preparing…":"Download extractor kit"]})]}),oe.length>0&&c.jsxs("div",{className:"local-library-import",children:[c.jsxs("label",{children:[c.jsx("span",{children:"Import AutoCAD extraction"}),c.jsx("select",{value:se||oe[0].id,disabled:z||fe,onChange:F=>{Te(F.target.value),C(""),J([])},"aria-label":"Source drawing for extracted CAD standards",children:oe.map(F=>c.jsxs("option",{value:F.id,children:[F.label," · ",F.format??"DWG"," · ",U[F.id]?.pending??0," pending / ",U[F.id]?.approved??0," approved",F.projectLabel?` · ${F.projectLabel}`:""]},F.id))})]}),c.jsxs("label",{className:"btn subtle local-library-import-button",children:[fe?c.jsx(ka,{size:13,className:"pdf-spin"}):c.jsx(Vr,{size:13}),fe?"Importing…":"Import extraction ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Import AutoCAD extraction ZIP",disabled:fe||z,onChange:F=>{const ue=F.currentTarget.files?.[0];ue&&qt(ue),F.currentTarget.value=""}})]})]}),!s&&oe.some(F=>F.category==="company-standard")&&c.jsxs("div",{className:"local-library-approval",children:[c.jsxs("div",{children:[c.jsx("strong",{children:"Approve supplied company symbols by placement layer"}),c.jsxs("span",{"data-testid":"status-selected-cad-source",children:[oe.find(F=>F.id===se)?.label,": ",U[se]?.pending??0," pending symbols · ",U[se]?.approved??0," approved · ",U[se]?.dismissed??0," dismissed.",U[se]?.layers.length?` Approved placement layers: ${U[se].layers.join(", ")}.`:""]}),c.jsx("span",{children:"Saved DXF: this action first extracts individual native blocks locally, then approves eligible placement-layer mappings. Existing approvals, dismissed records and saved block files are not replaced. DWG: import its AutoCAD extraction ZIP first."}),c.jsx("span",{children:"Approves only the selected company source; repeat for each source. EQUIP/f_Equip → equipment, f_Inst → instruments, f_Pipe_Inline → inline components. Mappings are shared across PFD and P&ID; internal, ambiguous, and missing-asset items stay pending."})]}),c.jsxs("button",{className:"btn primary",type:"button",disabled:z||fe||!oe.some(F=>F.id===se&&F.category==="company-standard"),onClick:()=>{mt()},"data-testid":"button-approve-categorized-company-symbols",children:[z?c.jsx(ka,{size:13,className:"pdf-spin"}):c.jsx(Ms,{size:13}),z?"Extracting / approving locally…":"Approve selected source"]})]}),O&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-library-error",children:[c.jsx(xr,{size:15}),c.jsx("span",{children:O})]}),R&&c.jsx("p",{className:"local-library-message",role:"status","aria-live":"polite","data-testid":"status-cad-source-action",children:R}),P.length>0&&c.jsxs("details",{className:"local-library-message",children:[c.jsxs("summary",{children:[P.length," excluded / review-required DXF items — show reasons"]}),c.jsx("ul",{children:P.map(F=>c.jsxs("li",{children:[F.blockName,": ",F.reason]},F.blockName))})]}),c.jsxs("div",{className:"local-library-summary","aria-label":"Local library totals",children:[c.jsxs("span",{children:[c.jsx("strong",{children:V.length})," saved CAD sources",s?` for ${i||"this client"}`:` for ${r}`]}),c.jsxs("span",{children:[c.jsx("strong",{children:de["company-standard"]})," Legends Library sources"]}),c.jsxs("span",{children:[c.jsx("strong",{children:de["project-example"]+de["markup-reference"]})," reference drawings"]}),de["needs-review"]>0&&c.jsxs("span",{className:"local-library-review-count",children:[c.jsx("strong",{children:de["needs-review"]})," need review"]})]}),c.jsx(QT,{discipline:r}),L>0&&c.jsxs(da,{href:r==="PFD"?"/standards-review/pfd":"/standards-review/pid",className:"btn primary local-library-review-link","data-testid":"link-review-extracted-standards",children:[c.jsx(Ww,{size:15}),"Review extracted standards",c.jsx("span",{children:L})]}),ve&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-source-folder-mismatch",children:[c.jsx(xr,{size:15}),c.jsx("span",{children:"These staged drawings belong to a different folder. Re-select that client or add them again here."})]}),v&&c.jsx("div",{className:"local-library-archive-summary",role:"status",children:v}),y.length>0&&c.jsxs("div",{className:"local-library-pdf-list","aria-label":"PDF files found in ZIP",children:[y.map(F=>c.jsxs("div",{className:"local-library-pdf-row",children:[c.jsx(Hn,{size:15}),c.jsx("span",{children:F.label}),c.jsx("span",{className:"pdf-file-meta",children:_u(F.file.size)})]},F.id)),c.jsxs("button",{className:"btn subtle",type:"button",disabled:_,onClick:()=>{a(y.map(({file:F})=>F)),k(!0)},"data-testid":"button-add-archive-pdfs",children:[_?c.jsx(Ms,{size:14}):c.jsx(Vr,{size:14}),_?"PDFs added to queue":"Add PDF(s) to conversion queue"]})]}),m.length>0&&c.jsxs("div",{className:"local-library-staging",children:[c.jsxs("div",{className:"local-library-staging-title",children:[c.jsx("strong",{children:s?"Choose how each client CAD drawing will be used":"Choose what each CAD drawing is for"}),c.jsx("span",{children:"Unmarked files will not be saved."})]}),m.map(F=>c.jsxs("label",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-name",children:[c.jsx("span",{className:"local-library-source-id",children:F.label}),c.jsxs("span",{className:"local-library-review-filename",title:F.reviewFilename,children:["Selected filename: ",F.reviewFilename]})]}),c.jsx("span",{className:"pdf-file-meta",children:_u(F.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Category for ${F.label}`,value:F.category,onChange:ue=>{const ge=ue.target.value;f(B=>B.map(pe=>pe.id===F.id?{...pe,category:ge}:pe))},"data-testid":`select-category-${F.id}`,children:Object.entries(cf).filter(([ue])=>s?["needs-review","project-example","markup-reference","ignore"].includes(ue):["needs-review","company-standard","ignore"].includes(ue)).map(([ue,ge])=>c.jsx("option",{value:ue,children:wy(ue,s)},ue))}),c.jsx("select",{"aria-label":`Discipline for ${F.label}`,value:F.discipline,onChange:ue=>{const ge=ue.target.value;f(B=>B.map(pe=>pe.id===F.id?{...pe,discipline:ge}:pe))},"data-testid":`select-discipline-${F.id}`,children:["PFD","P&ID","Shared"].map(ue=>c.jsx("option",{value:ue,children:ue},ue))}),["project-example","markup-reference"].includes(F.category)&&!s&&c.jsx("input",{"aria-label":`Project code for ${F.label}`,placeholder:"Neutral project code",value:F.projectLabel,onChange:ue=>f(ge=>ge.map(B=>B.id===F.id?{...B,projectLabel:ue.target.value}:B)),"data-testid":`input-project-${F.id}`}),s&&["project-example","markup-reference"].includes(F.category)&&c.jsx("span",{className:"local-library-scope-tag",children:"Saved only in this client folder"})]})]},F.id)),c.jsxs("button",{className:"btn primary local-library-save",type:"button",disabled:N||ve||m.some(F=>F.category==="needs-review"||["project-example","markup-reference"].includes(F.category)&&!F.projectLabel?.trim()),onClick:()=>{gt()},"data-testid":"button-save-local-library",children:[N?c.jsx(ka,{size:14,className:"pdf-spin"}):c.jsx(xm,{size:14}),N?"Saving locally…":"Save reviewed sources locally"]})]}),V.length>0&&c.jsxs("details",{className:"local-library-saved-list",children:[c.jsxs("summary",{children:["Saved source drawings for ",r," (",V.length,")"]}),c.jsx("div",{className:"local-library-saved-items",children:V.map(F=>c.jsxs("div",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-id",children:[F.label," · ",F.format??"DWG",s?` · ${F.category==="company-standard"?"Company standard":"This client"}`:F.projectLabel?` · ${F.projectLabel}`:""]}),c.jsx("span",{className:"pdf-file-meta",children:_u(F.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Change category for ${F.label}`,value:(g[F.id]??F).category,disabled:!!(s&&F.category==="company-standard"),onChange:ue=>nt(F,{category:ue.target.value}),"data-testid":`saved-category-${F.id}`,children:Object.entries(cf).filter(([ue])=>!s||["project-example","markup-reference","ignore"].includes(ue)||F.category==="company-standard"&&ue==="company-standard").map(([ue,ge])=>c.jsx("option",{value:ue,children:wy(ue,s)},ue))}),c.jsx("select",{"aria-label":`Change discipline for ${F.label}`,value:(g[F.id]??F).discipline,disabled:!!(s&&F.category==="company-standard"),onChange:ue=>nt(F,{discipline:ue.target.value}),"data-testid":`saved-discipline-${F.id}`,children:["PFD","P&ID","Shared"].map(ue=>c.jsx("option",{value:ue,children:ue},ue))}),!s&&["project-example","markup-reference"].includes((g[F.id]??F).category)&&c.jsx("input",{"aria-label":`Neutral project code for ${F.label}`,placeholder:"Neutral project code",value:(g[F.id]??F).projectLabel??"",onChange:ue=>nt(F,{projectLabel:ue.target.value}),"data-testid":`saved-project-${F.id}`}),c.jsxs("button",{className:"btn subtle local-library-save-row",type:"button",disabled:!!(s&&F.category==="company-standard"),onClick:()=>{ot(F)},"data-testid":`button-save-source-${F.id}`,children:[c.jsx(xm,{size:12})," Save"]})]})]},F.id))})]}),c.jsx("p",{className:"local-library-limit",children:"Extracted records enter the standards review queue. Only approved mappings are offered to the matching PFD or P&ID runner. Original DWG/DXF sources stay local; only individually exported block files are included with approved mappings."})]})}const xy={BLOCK:"symbol",LAYER:"layer",TEXT_STYLE:"textStyle",LINETYPE:"linetype",DIMENSION_STYLE:"dimensionStyle"},df=100*1024*1024,uf=500*1024*1024,e2="pid-studio-local-pdfs",on="meta",Gr="bytes",oi="extractedText";class Zt extends Error{code;constructor(r,s){super(s),this.code=r}}let Is=null,Sy=Promise.resolve();function Wr(){return Is||(Is=new Promise((a,r)=>{if(typeof indexedDB>"u"){r(new Zt("storage","This browser does not allow local file storage."));return}const s=indexedDB.open(e2,2);s.onupgradeneeded=i=>{const l=s.result;i.oldVersion<1&&(l.createObjectStore(on,{keyPath:"id"}).createIndex("discipline","discipline"),l.createObjectStore(Gr)),i.oldVersion<2&&l.createObjectStore(oi)},s.onsuccess=()=>{s.result.onversionchange=()=>{s.result.close(),Is=null},a(s.result)},s.onerror=()=>{Is=null,r(new Zt("storage","Local storage could not be opened."))},s.onblocked=()=>{Is=null,r(new Zt("storage","Local file storage is busy in another tab. Close that tab and reload."))}})),Is}function yi(a){return new Promise((r,s)=>{a.onsuccess=()=>r(a.result),a.onerror=()=>s(a.error)})}function nc(a){return new Promise((r,s)=>{a.oncomplete=()=>r(),a.onerror=()=>s(a.error),a.onabort=()=>s(a.error??new Zt("storage","Local storage write was stopped."))})}function rc(a){const r=Sy.then(a,a);return Sy=r.catch(()=>{}),r}async function Zb(a){const r=await Wr();return(await yi(r.transaction(on).objectStore(on).index("discipline").getAll(a))).sort((i,l)=>i.aliasNumber-l.aliasNumber)}async function t2(){const a=await Wr();return(await yi(a.transaction(on).objectStore(on).getAll())).reduce((s,i)=>s+i.size,0)}async function Ty(a){const r=globalThis.crypto?.subtle;if(!r)throw new Error("hash-unsupported");const s=await r.digest("SHA-256",a);return Array.from(new Uint8Array(s)).map(i=>i.toString(16).padStart(2,"0")).join("")}function a2(a,r){return rc(async()=>{if(!r())throw new Zt("cancelled","Cancelled.");const s=a.bytes.byteLength;if(s>df)throw new Zt("too-large","This PDF is larger than 100 MB.");const l=(await Wr()).transaction([on,Gr],"readwrite"),u=nc(l);u.catch(()=>{});const g=l.objectStore(on),p=await yi(g.getAll());if(!r())throw l.abort(),new Zt("cancelled","Cancelled.");if(p.some(b=>b.discipline===a.discipline&&b.hash===a.hash))throw l.abort(),new Zt("duplicate","This PDF has the same content as a saved file.");if(p.reduce((b,v)=>b+v.size,0)+s>uf)throw l.abort(),new Zt("total-limit","Saved PDFs would pass the 500 MB total limit.");const f=p.filter(b=>b.discipline===a.discipline).reduce((b,v)=>Math.max(b,v.aliasNumber),0)+1,y={id:globalThis.crypto?.randomUUID?.()??`pdf-${Date.now()}-${Math.random().toString(36).slice(2)}`,discipline:a.discipline,aliasNumber:f,alias:`PDF ${f}`,originalName:a.originalName?.trim()||void 0,size:s,pageCount:a.pageCount,hash:a.hash,addedAt:Date.now(),analysisStatus:"queued",analysisPagesDone:0,analysisRecordCount:0,autocadStatus:"not-connected"};g.put(y),l.objectStore(Gr).put(a.bytes,y.id);try{await u}catch(b){throw b instanceof Zt?b:new Zt("storage","The browser could not save this PDF. Storage may be full.")}return y})}async function zo(a){const r=await Wr(),s=await yi(r.transaction(Gr).objectStore(Gr).get(a));if(!s)throw new Zt("storage","Saved PDF data was not found.");return s}function n2(a,r){return rc(async()=>{const i=(await Wr()).transaction(oi,"readwrite"),l=nc(i);i.objectStore(oi).put({pdfId:a,pages:r,savedAt:Date.now()},a);try{await l}catch{throw new Zt("storage","PDF text was read, but the browser could not save the full text index. The original PDF remains saved; free browser storage and retry EDE.")}})}function Nl(a,r){return rc(async()=>{const i=(await Wr()).transaction(on,"readwrite"),l=nc(i),u=i.objectStore(on),g=await yi(u.get(a));if(!g)throw i.abort(),new Zt("storage","The saved PDF record could not be found.");const p={...g,...r};return u.put(p),await l,p})}function Qb(a){return rc(async()=>{const s=(await Wr()).transaction([on,Gr,oi],"readwrite");a.forEach(i=>{s.objectStore(on).delete(i),s.objectStore(Gr).delete(i),s.objectStore(oi).delete(i)}),await nc(s)})}async function r2(a){const r=await Zb(a);await Qb(r.map(s=>s.id))}class Il extends Error{constructor(r,s,i){super(`Page ${r}: ${s} failed.`,{cause:i}),this.page=r,this.stage=s,this.name="PdfExtractionError"}page;stage}function Ay(a){const r=a instanceof Il?a.cause:a,s=r instanceof Error?r.name:"",i=r instanceof Error?r.message:typeof r=="string"?r:"",l=a instanceof Il?`Page ${a.page} stopped during ${a.stage}. `:"EDE extraction stopped. ";return s==="QuotaExceededError"?`${l}Browser storage is full. Back up your records before freeing space, then retry EDE. Your PDF remains saved.`:/memory|allocation|out of bounds/i.test(i)?`${l}The browser ran out of processing memory. Close other tabs and retry, or use a desktop browser. Your PDF remains saved.`:/fetch|network|importscripts|load.*(worker|core|language)|failed to load/i.test(i)||a instanceof Il&&a.stage==="OCR startup"?`${l}The OCR engine could not start. Check internet access to the OCR downloads, then retry EDE. Your PDF remains saved.`:`${l}The PDF could not be processed${s?` (${s.replace(/[^a-zA-Z0-9]/g,"").slice(0,60)})`:""}. Retry EDE; if it repeats, report this message. Your PDF remains saved.`}const s2=/\b(?:[A-Z]{1,8}\s*[-–]\s*)+\d{1,6}[A-Z0-9]*(?:\s*[-–]\s*[A-Z0-9]{1,8}){0,3}\b/g,Jb=/^(?:AI|DI|FI|FIC|FIT|FQI|LI|LIC|LS|LSH|LSL|PI|PIC|PDI|PSH|PSL|TI|TIC|TSH|TSL|TT|PT|FT|LT|FC|PC|TC|LC|AT|AIT|XV|ZSO|ZSC)$/,o2=/^(?:XV|HV|BV|CV|PCV|FCV|LCV|TCV|PSV|PRV|MOV|SDV|BDV|NRV)$/,i2=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/g,l2=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/i;function ev(a){const r=a.map((m,f)=>({token:m,index:f,value:m.text.trim().toUpperCase()})).filter(({value:m})=>Jb.test(m)),s=a.map((m,f)=>({token:m,index:f,value:m.text.trim().toUpperCase()})).filter(({value:m})=>/^\d{2,5}[A-Z]?$/.test(m)),i=[];for(const m of r){const f=m.token.location,y=f.x+f.width/2,b=f.y+f.height/2;for(const v of s){if(m.index===v.index)continue;const E=v.token.location,R=E.x+E.width/2,C=E.y+E.height/2,D=Math.max(f.height,E.height,.004),S=R-y,N=C-b,T=Math.abs(N)<=D*.55&&S>=-D*.4&&S<=D*4,O=N>D*.35&&N<=D*3.2&&Math.abs(S)<=D*1.8;if(!T&&!O)continue;const x=T?1-Math.abs(N)/(D*.55)-Math.max(0,S)/(D*8):.85-N/(D*10)-Math.abs(S)/(D*8);i.push({functionToken:m.token,numberToken:v.token,score:x})}}const l=new Map,u=new Map,g=m=>{const f=[...m].sort((y,b)=>b.score-y.score);if(f.length&&!(f.length>1&&f[0].score-f[1].score<.18))return f[0]};for(const m of r.map(({token:f})=>f)){const f=g(i.filter(y=>y.functionToken===m));f&&l.set(m,f)}for(const m of s.map(({token:f})=>f)){const f=g(i.filter(y=>y.numberToken===m));f&&u.set(m,f)}const p=[];for(const m of i){if(l.get(m.functionToken)!==m||u.get(m.numberToken)!==m)continue;const f=m.functionToken.text.trim().toUpperCase(),y=m.numberToken.text.trim().toUpperCase();p.push({tag:`${f}-${y}`,type:"Instrument",tagPrefix:f,tagSequence:y,tagSuffix:"",pageNumber:m.functionToken.location.pageNumber,sourceLocations:[m.functionToken.location,m.numberToken.location]})}return p}function tv(a,r,s,i,l,u,g){const p=Math.max(0,Math.min(1,i/r)),m=Math.max(0,Math.min(1,l/s)),f=Math.max(p,Math.min(1,u/r)),y=Math.max(m,Math.min(1,g/s));return f-p<1e-4||y-m<1e-4?null:{pageNumber:a,x:p,y:m,width:f-p,height:y-m}}function Dy(a,r,s){const i=[s.convertToViewportPoint(a.x,a.y),s.convertToViewportPoint(a.x+a.width,a.y),s.convertToViewportPoint(a.x,a.y+a.height),s.convertToViewportPoint(a.x+a.width,a.y+a.height)];return tv(r,s.width,s.height,Math.min(...i.map(l=>l[0]??0)),Math.min(...i.map(l=>l[1]??0)),Math.max(...i.map(l=>l[0]??0)),Math.max(...i.map(l=>l[1]??0)))}function c2(a,r,s){const i=[],l=[];for(const u of a){if(!u.text||!u.bbox)continue;const g=tv(r,s.pageWidth,s.pageHeight,s.left+u.bbox.x0,s.top+u.bbox.y0,s.left+u.bbox.x1,s.top+u.bbox.y1);g&&(l.push({text:u.text,location:g}),i.push(...ql(u.text,r).map(p=>({...p,sourceLocations:[g]}))))}return[...i,...ev(l)]}function d2(a,r){const s=new Map;for(const i of[...a??[],...r??[]]){const l=[i.pageNumber,i.x.toFixed(4),i.y.toFixed(4),i.width.toFixed(4),i.height.toFixed(4)].join(":");!s.has(l)&&s.size<500&&s.set(l,i)}return[...s.values()]}function u2(a){let r="",s;for(const i of a){const l=i.str.replace(/\s+/g," ").trim();if(l){if(s){const u=Math.max(1,(s.fontSize+i.fontSize)/2),g=Math.abs(i.y-s.y)<=Math.max(1,u*.3),p=i.x-(s.x+s.width),m=g&&p>=-u*.5&&p<=u*.35;r+=m?"":g?" ":`
`,s.hasEOL&&!r.endsWith(`
`)&&(r+=`
`)}r+=l,s=i}}return r}function Cy(a,r=1700,s=120){if(a<=r+s)return[0];const i=r-s,l=[];for(let u=0;u<a;u+=i){const g=a-(u+r);if(g>0&&g<=s&&(u=a-r),l.push(u),u+r>=a)break}return l}function ql(a,r){const s=new Map,i=a.toUpperCase();for(const l of i.matchAll(s2)){const u=l[0].replace(/[–\s]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),g=u.split("-").filter(Boolean),p=u.match(/^([A-Z]{1,8})-(\d{1,6})(.*)$/);if(!p||u.length<3||g.length>6)continue;const m=p[1],f=/^OPC$/.test(m)?"OPC":o2.test(m)?"Valve":Jb.test(m)?"Instrument":g.length>=4||/^(?:L|LINE|PIPE)$/.test(m)?"Pipe Run":"Equipment",y=Math.max(0,(l.index??0)-180),b=Math.min(i.length,(l.index??0)+l[0].length+180),v=i.slice(y,b),E=v.match(/\b(?:NOMINAL\s*(?:DIA(?:METER)?|SIZE)|NPS|DN)\s*[:#=-]?\s*((?:(?:NPS|DN)\s*)?\d{1,3}(?:\s*\/\s*\d{1,2})?(?:\.\d+)?\s*(?:MM|IN(?:CH)?)?["”]?)/i)?.[1]??"",R=v.match(/\b(?:PIPING|PIPE)\s*(?:MATERIAL|MATL)\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})/i)?.[1]??"",C=v.match(/\b(?:DESIGN\s+FLOW|FLOW(?:\s+RATE)?)\s*[:=]?\s*([\d.,]+\s*(?:KG\/H|M3\/H|NM3\/H|T\/H|L\/S|M3\/D|GPM|M\/S)?)/i)?.[1]??"",D=v.match(/\b(?:HEAT\s+TRACING|HEAT\s+TRACE)\s*[:=]?\s*(YES|NO|ELECTRIC|STEAM|NONE|N\/A)\b/i)?.[1]??"",S=v.match(/\bINSULATION\s*[:=]?\s*([A-Z0-9][A-Z0-9._/-]{0,12})/i)?.[1]??"",T=p[3].split("-").filter(Boolean).at(-1)??"",O=f==="Pipe Run"&&/[A-Z]/i.test(T)&&/\d/.test(T)?T:"",x=v.match(l2)?.[1]??O,_=`${f}:${u.toLowerCase()}`;s.has(_)||s.set(_,{tag:u,type:f,tagPrefix:m,tagSequence:p[2],tagSuffix:p[3].replace(/^-/,""),pageNumber:r,nominalDiameter:E.replace(/\s+/g," ").trim(),pipingMaterial:R,lineSpec:x,flow:C,heatTracing:D,insulation:S})}for(const l of i.matchAll(i2)){const u=l[1].replace(/\s+/g,"").toUpperCase(),g=`Line Spec:${u.toLowerCase()}`;s.has(g)||s.set(g,{tag:u,type:"Line Spec",tagPrefix:"LINE SPEC",tagSequence:u,tagSuffix:"",lineSpec:u,pageNumber:r})}return[...s.values()]}const f2=/^(?:(?:GENERAL|PROCESS|DESIGN|SAFETY|OPERATING|CONSTRUCTION)\s+)?NOTES?\s*[:.-]?\s*(.*)$/i,p2=/^(?:LEGENDS?|ABBREVIATIONS?|SYMBOLS?|REFERENCES?|REVISION(?:S)?|DRAWING\s+(?:TITLE|NO|NUMBER)|PROJECT|CLIENT|SCALE|TITLE\s*BLOCK|EQUIPMENT\s+LIST|LINE\s+LIST)\b/i,h2=/^(?:(?:NOTE\s*)?\d{1,3}\s*[.)-]\s+|[A-Z]\s*[.)]\s+).+/i,g2=/^(?:GENERAL\s+)?NOTE(?:\s+\d+)?\s*[:#-]\s*.+/i;function m2(a){const r=[];for(const s of a){const i=[{text:s.searchableText,label:"PDF text"},...s.ocrTiles.map(p=>({text:p,label:"OCR text"}))],l=new Set,u=[];for(const p of i){let m=!1,f="";const y=()=>{const b=f.replace(/\s+/g," ").trim();if(b.length>=8){const v=b.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();v&&!l.has(v)&&(l.add(v),u.push({text:b,label:p.label}))}f=""};for(const b of p.text.replace(/\r/g,`
`).split(`
`)){const v=b.replace(/\s+/g," ").trim();if(!v)continue;const E=v.match(f2);if(E){y(),m=!0,E[1]&&(f=E[1].trim());continue}if(m&&p2.test(v)){y(),m=!1;continue}if(g2.test(v)){y(),f=v,m=!0;continue}if(h2.test(v)){const R=v.length>=36&&v.split(/\s+/).length>=7;m||R?(y(),f=v,m=!0):y();continue}m?f=f?`${f} ${v}`:v:y()}y()}let g=0;for(const p of u){const m=[];for(let f=0;f<p.text.length;){let y=Math.min(f+1500,p.text.length);if(y<p.text.length){const b=p.text.lastIndexOf(" ",y);b>f+700&&(y=b)}m.push(p.text.slice(f,y)),f=y}for(const f of m){const y=f.trim();y&&(g+=1,r.push({tag:`NOTE-P${s.pageNumber}-${g}`,type:"Item Note",tagPrefix:"NOTE",tagSequence:String(g),tagSuffix:`P${s.pageNumber}`,pageNumber:s.pageNumber,description:`${p.label} note — review against source: ${y}`}))}}}return r}function Pu(a,r){const s=new Map(a.map(i=>[`${i.type}:${i.tag.toLowerCase()}`,{...i}]));for(const i of r){const l=`${i.type}:${i.tag.toLowerCase()}`,u=s.get(l);if(!u){s.set(l,{...i});continue}u.sourceLocations=d2(u.sourceLocations,i.sourceLocations);for(const g of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])!u[g]&&i[g]&&(u[g]=i[g])}return[...s.values()]}async function y2(a,r,s=()=>!0){const[i,l]=await Promise.all([sn(()=>import("./pdf-TYrZqVzP.js"),[]),sn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);i.GlobalWorkerOptions.workerSrc=l.default;const u=i.getDocument({data:new Uint8Array(a.slice(0))}),g=await u.promise;let p=null;const m=new Map,f=[];let y=0,b=1,v="PDF text";try{for(let E=1;E<=g.numPages;E++){if(b=E,v="PDF text",!s())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const R=await g.getPage(E),C=await R.getTextContent(),D=R.getViewport({scale:1}),S=C.items.flatMap(k=>{if(!("str"in k)||typeof k.str!="string"||!k.str||!("transform"in k)||!Array.isArray(k.transform))return[];const L=k.transform;return[{str:k.str,x:L[4]??0,y:L[5]??0,width:"width"in k&&typeof k.width=="number"?k.width:0,height:"height"in k&&typeof k.height=="number"?k.height:0,fontSize:Math.hypot(L[0]??0,L[1]??0)||10,hasEOL:"hasEOL"in k&&k.hasEOL===!0}]}),N=u2(S),T=[];let O=ql(N,E);const x=S.flatMap(k=>{const L=Dy({...k,height:k.height||k.fontSize},E,D);return L?ql(k.str,E).map(H=>({...H,sourceLocations:[L]})):[]}),_=S.flatMap(k=>{const L=Dy({...k,height:k.height||k.fontSize},E,D);return L?[{text:k.str,location:L}]:[]});if(O=Pu(O,[...x,...ev(_)]),N.replace(/\s/g,"").length<800||O.length<20){if(r?.(E,g.numPages,"OCR"),!p){v="OCR startup";const{createWorker:Te,PSM:fe}=await sn(async()=>{const{createWorker:ce,PSM:z}=await import("./index-DB8jjnUE.js").then(Z=>Z.i);return{createWorker:ce,PSM:z}},__vite__mapDeps([0,1]));p=await Te("eng",1,{workerPath:"https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js",corePath:"https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0",langPath:"https://tessdata.projectnaptha.com/4.0.0"}),await p.setParameters({tessedit_pageseg_mode:fe.SPARSE_TEXT,preserve_interword_spaces:"1"})}const k=R.getViewport({scale:1});v="page image";const L=Math.min(3.5,3200/Math.max(k.width,k.height)),H=R.getViewport({scale:L}),ee=document.createElement("canvas"),te=document.createElement("canvas");ee.width=Math.ceil(H.width),ee.height=Math.ceil(H.height);const se=ee.getContext("2d",{willReadFrequently:!1});if(!se)throw new Error("This browser cannot prepare a page image for local OCR.");try{await R.render({canvas:ee,canvasContext:se,viewport:H}).promise;const Te=1700,fe=120,ce=[],z=Cy(ee.width,Te,fe),Z=Cy(ee.height,Te,fe);for(const me of Z)for(const Se of z){if(!s())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const P=Math.min(ee.width<=Te+fe?ee.width:Te,ee.width-Se),J=Math.min(ee.height<=Te+fe?ee.height:Te,ee.height-me);te.width=P,te.height=J;const U=te.getContext("2d",{willReadFrequently:!1});if(!U)throw new Error("This browser cannot prepare a page image for local OCR.");U.drawImage(ee,Se,me,P,J,0,0,P,J),v="OCR reading";const V=await p.recognize(te);T.push(V.data.text),ce.push(...ql(V.data.text,E)),ce.push(...c2(V.data.words??[],E,{left:Se,top:me,pageWidth:ee.width,pageHeight:ee.height}))}y+=1,O=Pu(O,ce)}finally{ee.width=0,ee.height=0,te.width=0,te.height=0}}else r?.(E,g.numPages,"PDF text");for(const k of O){const L=`${k.type}:${k.tag.toLowerCase()}`,H=m.get(L);m.set(L,H?Pu([H],[k])[0]:k)}f.push({pageNumber:E,searchableText:N,ocrTiles:T}),R.cleanup()}return{candidates:[...m.values()],pages:g.numPages,ocrPages:y,pageText:f}}catch(E){throw s()?new Il(b,v,E):E}finally{await p?.terminate().catch(()=>{}),await u.destroy().catch(()=>{})}}const av=["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef","placementDrawingRef","nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description","notes","sourcePage","reviewStatus"],Yn=[...av,"stableId"],nv=/^[0-9A-F]{32}$/,b2=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,v2=["plantGroup","fluidService","nominalDiameter","pipingMaterial","lineSpec","insulation","heatTracing","groupStatus"],w2=["","Start","Continue","Branch","Merge","End-of-Group"];function rv(){return crypto.randomUUID().replaceAll("-","").toUpperCase()}function Lf(a){const r=a.toUpperCase();if(nv.test(r))return r;if(b2.test(a))return r.replaceAll("-","");throw new Error("A Stable ID must contain exactly 32 letters or numbers (A–F, 0–9).")}function bn(a,r){return r==="stableId"?a.id:a[r]}function E2(a,r){const s=a.placementDrawingRef.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase();return s?[r.id,r.name].map(l=>l.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase()).includes(s)?"current":"another":"available"}const Rt={itemTag:"Item Tag",tagPrefix:"Tag Prefix",tagSequence:"Tag Sequence",tagSuffix:"Tag Suffix",equipmentClass:"Equipment Class",equipmentType:"Equipment Type",equipmentName:"Equipment Name",drawingRef:"Source Drawing / Page",placementDrawingRef:"Placed on Drawing",nominalDiameter:"Nominal Diameter",plantGroup:"Plant Group",fluidService:"Fluid / Service",pipingMaterial:"Piping Material Class",lineSpec:"Line Spec",flow:"Flow",flowDirection:"Flow Direction",heatTracing:"Heat Tracing",insulation:"Insulation",fromTag:"From",toTag:"To",groupStatus:"Group Status",opcDrawing:"OPC Drawing",connection:"Connection",description:"Description",notes:"Notes",sourcePage:"Source page",reviewStatus:"Review status",stableId:"Stable ID"},zl=av,qs={itemTag:"The tag printed beside the equipment, line, valve, or instrument. A repeated Pipe Run tag needs different line data.",tagPrefix:"The letter code at the start of the tag.",tagSequence:"The main number in the tag.",tagSuffix:"Extra letters or numbers after the main tag number.",equipmentClass:"The approved class or family for this equipment.",equipmentType:"What the equipment is, such as a pump or vessel, when the drawing states it.",equipmentName:"The equipment name or service, only when the source clearly labels it.",drawingRef:"The source drawing or PDF page where this record came from.",placementDrawingRef:"The CAD drawing that contains this object. Blank means available or not placed. This is a reference only; it does not place or move CAD entities.",nominalDiameter:"The stated pipe or nozzle size, such as DN50 or 2 inch.",plantGroup:"The plant, unit, or area group, if stated.",fluidService:"The stated fluid or process service for this line.",pipingMaterial:"The approved piping material class or code.",lineSpec:"The piping line class/specification code. It is separate from the pipe run tag.",flow:"The stated flow value or direction. A line arrow alone is not converted to a value.",flowDirection:"The confirmed upstream/downstream flow direction.",heatTracing:"The stated heat-tracing requirement or type.",insulation:"The stated insulation requirement or code.",fromTag:"The connected source tag or point shown for this pipe run.",toTag:"The connected destination tag or point shown for this pipe run.",groupStatus:"Start, Continue, Branch, Merge, or End-of-Group for the pipe run.",opcDrawing:"The linked off-page connector drawing number, if shown.",connection:"A stated connection or connected item; line geometry is not inferred here.",description:"A short object description from the source. Blank means no clear value was found.",notes:"Drawing notes or additional comments associated with this record.",sourcePage:"The page in the original PDF where this candidate was found.",reviewStatus:"Needs review means check the tag and fields before using them.",stableId:"Permanent object identity. It stays the same when the tag, drawing, size, or geometry changes."},ii=["Equipment","Equipment Component","Equipment Heat Transfer","Equipment Mechanical","Equipment Other","Equipment Vessel","Hydraulic Circuit","Instrument","Instrument Loop","Item Note","Line Spec","Nozzle","OPC","Package","Pipe Run","Valve"],Yl=a=>`pid-mapping-studio:engineering-workspace:v2:${a}`;function sv(a,r){if(!Array.isArray(a))return ff(a);const s=a.map(i=>!i||typeof i!="object"||!Array.isArray(i.rows)?i:{...i,rows:i.rows.map(l=>{if(!l||typeof l!="object")return l;const u=typeof l.id=="string"?l.id:"";let g;try{g=Lf(u)}catch{g=rv()}g!==l.id&&r?.();const p=typeof l.description=="string"?l.description:"",m=typeof l.notes=="string",f=/^(?:PDF text|OCR text) note — review against source:\s*/iu,y=m?l.notes:l.type==="Item Note"?p.replace(f,""):"",b=!m&&l.type==="Item Note"&&p?f.test(p)?"Drawing note extracted from PDF; check the source page.":"":p;return(!m||b!==p)&&r?.(),{...l,id:g,description:b,notes:y,sourcePage:typeof l.sourcePage=="string"?l.sourcePage:"",placementDrawingRef:typeof l.placementDrawingRef=="string"?l.placementDrawingRef:"",lineSpec:typeof l.lineSpec=="string"?l.lineSpec:"",plantGroup:typeof l.plantGroup=="string"?l.plantGroup:"",fluidService:typeof l.fluidService=="string"?l.fluidService:"",flowDirection:typeof l.flowDirection=="string"?l.flowDirection:"",fromTag:typeof l.fromTag=="string"?l.fromTag:"",toTag:typeof l.toTag=="string"?l.toTag:"",groupStatus:typeof l.groupStatus=="string"?l.groupStatus:"",...l.sourceLocations===void 0?{}:{sourceLocations:l.sourceLocations},reviewStatus:l.reviewStatus==="Needs review"||l.reviewStatus==="Reviewed"?l.reviewStatus:"Manual"}})});return ff(s)}function ff(a){if(!Array.isArray(a)||a.length>500)throw new Error("Invalid drawing catalog. Keep a backup and do not overwrite saved data.");const r=new Set,s=new Set;let i=0;for(const l of a){if(!l||typeof l!="object"||typeof l.id!="string"||typeof l.name!="string"||!l.name.trim()||l.name.length>160||typeof l.revision!="string"||l.revision.length>80||!Array.isArray(l.rows)||r.has(l.id))throw new Error("The drawing catalog contains an invalid or duplicate drawing.");r.add(l.id);const u=new Map;for(const g of l.rows){if(g?.type==="Pipe Run"&&!w2.includes(g.groupStatus))throw new Error("Pipe Run group status must be Start, Continue, Branch, Merge, or End-of-Group.");if(!g||typeof g!="object"||typeof g.id!="string"||!nv.test(g.id)||s.has(g.id)||!ii.includes(g.type)||zl.some(f=>typeof g[f]!="string"||g[f].length>2e3)||!["Manual","Needs review","Reviewed"].includes(g.reviewStatus)||g.sourcePdfId!==void 0&&typeof g.sourcePdfId!="string"||g.sourceLocations!==void 0&&(!Array.isArray(g.sourceLocations)||g.sourceLocations.length>500||g.sourceLocations.some(f=>{if(!f||typeof f!="object")return!0;const y=f;return!Number.isInteger(y.pageNumber)||y.pageNumber<1||!["x","y","width","height"].every(b=>typeof y[b]=="number"&&Number.isFinite(y[b]))||y.x<0||y.y<0||y.width<=0||y.height<=0||y.x>1||y.y>1||y.x+y.width>1.02||y.y+y.height>1.02}))||!g.itemTag.trim())throw new Error("Each record needs a valid Stable ID, object type, and text fields.");const p=g.itemTag.trim().toLowerCase(),m=u.get(p)??[];if(m.length&&(g.type!=="Pipe Run"||m.some(f=>f.type!=="Pipe Run"||!v2.some(y=>f[y]!==g[y]))))throw new Error("This tag is already used. Repeated Pipe Run tags need different line-defining data.");if(typeof g.x!="number"||typeof g.y!="number"||!Number.isFinite(g.x)||!Number.isFinite(g.y))throw new Error("A record contains invalid coordinates.");u.set(p,[...m,g]),s.add(g.id),i+=1}}if(i>2e4)throw new Error("This local workspace supports up to 20,000 engineering records.");return a}function li(a){const r=window.localStorage.getItem(Yl(a));if(!r)return[];let s=!1;const i=sv(JSON.parse(r),()=>{s=!0});if(s)try{window.localStorage.setItem(Yl(a),JSON.stringify(i))}catch{throw new Error("Saved records were read, but the data-format update could not be saved because browser storage is full. The original saved data was not overwritten; download a backup before freeing space.")}return i}function $s(a){return window.localStorage.getItem(Yl(a))}function pf(a,r,s){if(ff(r),$s(a)!==s)throw new Error("This workspace changed in another tab. Reload before editing to avoid overwriting its records.");const i=JSON.stringify(r);return window.localStorage.setItem(Yl(a),i),i}function Of(a,r,s){return{...Object.fromEntries(zl.map(i=>[i,""])),id:rv(),type:a,itemTag:r.trim(),drawingRef:s,reviewStatus:"Manual",x:0,y:0}}function x2(a,r){return JSON.stringify({version:5,discipline:a,drawings:r},null,2)}function S2(a,r){const s=JSON.parse(a);if(![2,3,4,5].includes(s?.version)||s?.discipline!==r)throw new Error(`Choose a ${r.toUpperCase()} workspace backup. PFD and P&ID backups stay separate.`);return sv(s.drawings)}function T2(a,r){const s=new Map;for(const i of[...a??[],...r??[]]){const l=[i.pageNumber,i.x.toFixed(4),i.y.toFixed(4),i.width.toFixed(4),i.height.toFixed(4)].join(":");!s.has(l)&&s.size<500&&s.set(l,i)}return[...s.values()]}function Ny(a,r){const s=Of(a.type,a.tag,`${r.alias} · Page ${a.pageNumber}`);s.tagPrefix=a.tagPrefix??"",s.tagSequence=a.tagSequence??"",s.tagSuffix=a.tagSuffix??"";for(const i of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])s[i]=a[i]??"";return s.sourcePage=String(a.pageNumber),s.sourcePdfId=r.id,s.sourceLocations=a.sourceLocations?.slice(0,500),s.reviewStatus="Needs review",a.type==="Item Note"?(s.notes=(a.description??"").replace(/^(?:PDF text|OCR text) note — review against source:\s*/iu,""),s.description="Drawing note extracted from PDF; check the source page."):s.description=a.description??"Tag candidate found in the PDF. Confirm the object type and details before using it.",s}function A2(a,r,s){const i=li(a),l=i.find(E=>E.sourcePdfId===r.id);if(l){const E=new Map(s.map(N=>[N.tag.trim().toLowerCase(),N])),R=new Set(l.rows.map(N=>N.itemTag.trim().toLowerCase()));let C=!1;const D=l.rows.map(N=>{const T=E.get(N.itemTag.trim().toLowerCase());if(!T)return N;const O=T2(N.sourceLocations,T.sourceLocations),x=N.sourcePage||String(T.pageNumber);return O.length===(N.sourceLocations?.length??0)&&x===N.sourcePage?N:(C=!0,{...N,sourcePage:x,sourceLocations:O})}),S=s.flatMap(N=>{const T=N.tag.trim().toLowerCase();return!T||R.has(T)?[]:(R.add(T),C=!0,[Ny(N,r)])});if(C){const N=i.map(T=>T.id===l.id?{...T,rows:[...D,...S]}:T);pf(a,N,$s(a))}return{drawingId:l.id,recordCount:D.length+S.length}}const u=new Set(i.map(E=>E.name.toLowerCase())),g=`${r.alias} · Extracted data`;let p=g,m=2;for(;u.has(p.toLowerCase());)p=`${g} (${m++})`;const f=new Set,y=s.flatMap(E=>{const R=E.tag.trim().toLowerCase();return!R||f.has(R)?[]:(f.add(R),[Ny(E,r)])}),b={id:crypto.randomUUID(),name:p,revision:"Local PDF extraction · review required",sourcePdfId:r.id,sourceAlias:r.alias,rows:y},v=$s(a);return pf(a,[...i,b],v),{drawingId:b.id,recordCount:y.length}}function kl(a,r,s){const i=URL.createObjectURL(new Blob([r],{type:s})),l=document.createElement("a");l.href=i,l.download=a,l.click(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function D2(a){return ov(["Object type",...Yn.map(r=>Rt[r])],a.map(r=>[r.type,...Yn.map(s=>bn(r,s))]))}function ov(a,r){const s=i=>`"${(/^[\s]*[=+\-@\t\r]/.test(i)?`'${i}`:i).replaceAll('"','""')}"`;return"\uFEFF"+[a,...r].map(i=>i.map(l=>s(String(l))).join(",")).join(`\r
`)}function C2(a,r){const s=[];let i=[],l="",u=!1;const g=a.replace(/^\uFEFF/,"");for(let v=0;v<g.length;v++){const E=g[v];if(E==='"')if(u&&g[v+1]==='"')l+='"',v++;else{if(!u&&l!=="")throw new Error("Invalid CSV quoting.");u=!u}else!u&&E===","?(i.push(l),l=""):!u&&(E===`
`||E==="\r")?(i.push(l),i.some(R=>R.trim())&&s.push(i),i=[],l="",E==="\r"&&g[v+1]===`
`&&v++):l+=E}if(u)throw new Error("The CSV has an unclosed quoted cell.");i.push(l),i.some(v=>v.trim())&&s.push(i);const p=s.shift()?.map(v=>v.trim().toLowerCase())??[],m=p.findIndex(v=>v==="object type"||v==="type"),f=zl.map(v=>p.findIndex(E=>E===v.toLowerCase()||E===Rt[v].toLowerCase())),y=p.findIndex(v=>v==="stableid"||v===Rt.stableId.toLowerCase());if(m<0||f[0]<0)throw new Error("CSV needs Object type and Item Tag columns. Download the template first.");if(!s.length)throw new Error("The CSV contains no records.");if(s.length>2e4)throw new Error("Import at most 20,000 records.");const b=new Set;return s.map((v,E)=>{if(v.length!==p.length)throw new Error(`CSV row ${E+2} has the wrong number of columns.`);const R=ii.find(D=>D.toLowerCase()===v[m]?.trim().toLowerCase());if(!R)throw new Error(`CSV row ${E+2} has an unsupported object type.`);const C=Of(R,v[f[0]]??"",r);if(y>=0&&v[y]?.trim())try{C.id=Lf(v[y].trim())}catch{throw new Error(`CSV row ${E+2} has an invalid Stable ID.`)}if(b.has(C.id))throw new Error(`CSV row ${E+2} repeats a Stable ID.`);return b.add(C.id),zl.forEach((D,S)=>{if(f[S]<0)return;const N=v[f[S]].trim();D==="reviewStatus"?C.reviewStatus=["Needs review","Reviewed","Manual"].includes(N)?N:"Manual":C[D]=N}),C.drawingRef||(C.drawingRef=r),C})}function Rl(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function N2(a,r=!1,s="",i=[]){const l=a.map(g=>`("${String(g.documentNumber).padStart(2,"0")}" ${Rl(g.sourceFile)} ${Rl(g.sourceId)} ${Rl(g.sourceName)} ${Rl(g.sha256.toLowerCase())} ${g.pageCount})`).join(`
  `),u=i.map(g=>`("${String(g.documentNumber).padStart(2,"0")}" ${g.pageNumber} ${g.scaleFactor} "${g.method}" ${g.pageWidthMm} ${g.pageHeightMm} ${g.targetWidthMm} ${g.targetHeightMm})`).join(`
  `);return`; Single working drawing PDF batch runner.
; Each approved page is saved to a separate, never-overwritten DWG.
(vl-load-com)
(setq *p2dwg-project-title-block-enabled* ${r?"T":"nil"})
(setq *p2dwg-batch-run-id* "${s}")
(setq *p2dwg-page-scale-plans* '(
  ${u}
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
`}const k2=[{field:"sourceFile",xdataIndex:1,global:"*p2dwg-source-alias*"},{field:"pageNumber",xdataIndex:2,global:"*p2dwg-source-page*"},{field:"jobId",xdataIndex:3,global:"*p2dwg-job-id*"},{field:"sourceId",xdataIndex:4,global:"*p2dwg-source-id*"},{field:"sourceSha256",xdataIndex:5,global:"*p2dwg-source-hash*"},{field:"sourceName",xdataIndex:6,global:"*p2dwg-source-name*"}];function R2(a,r){const s=String(a).padStart(2,"0"),i=`p2dwg${s}`,l=k2.map(({xdataIndex:u,global:g})=>`(= (cdr (nth ${u} app-data)) ${g})`).join(`
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
                           currentDoc beforeEntity importedEntities
                           pipeConfirmed reviewConfirmed oldOsMode
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
  (${i}-batch-log (strcat "IMPORT_STARTED|SOURCE_${s}.pdf|" (itoa page)))
  (prompt (strcat "\\nImporting PDF page " (itoa page) " of ${r}..."))
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
  (${i}-batch-log (strcat "IMPORT_COMPLETED|SOURCE_${s}.pdf|"
    (itoa page) "|ENTITIES=" (itoa (sslength importedEntities))))
  (${i}-record-mapping importedEntities "RAW" nil nil)
  (if (= (strcase scaleMode) "TITLE_BLOCK_PAGE_SIZE")
    (progn
      (setq *p2dwg-stage* "SCALE_PAGE_SIZE")
      (setq *p2dwg-scale-status* "VERIFIED")
      (setq *p2dwg-effective-scale* scaleFactor)
      (${i}-batch-log
        (strcat "SCALE_VERIFIED|SOURCE_${s}.pdf|" (itoa page)
          "|METHOD=" scaleMode "|FACTOR=" (rtos scaleFactor 2 10)))
      (prompt
        (strcat "\\nScale verified from PDF page dimensions ("
          scaleMode "). Imported PDF geometry only was scaled; the title block is unchanged.")))
    (progn
      (setq *p2dwg-stage* "SCALE_REVIEW")
      (${i}-batch-log (strcat "SCALE_REVIEW_REQUIRED|SOURCE_${s}.pdf|" (itoa page)))
      (prompt "\\nScale needs review. Choose a known 12 mm instrument side or 6/3 mm valve side; no guessed scale will be saved.")
      (command "_.ZOOM" "_Extents")
      (${i}-calibrate-import importedEntities)))
  (${i}-stamp-page importedEntities)
  (command "_.ZOOM" "_Extents")
  (setq *p2dwg-stage* "PRE_SAVE_REVIEW")
  (${i}-batch-log
    (strcat "CONFIDENTIALITY_REDACTION_DISABLED|jobId=" jobId
      "|SOURCE_DETAILS_RETAINED"))
  (prompt
    "\\nRunner will not delete source entities. Company/client details may remain; review before sharing.")
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
               "|SOURCE_${s}.pdf|" (itoa page) "|" outputPath
              "|SCALE=" *p2dwg-scale-status* "|"
              (rtos *p2dwg-effective-scale* 2 8)))
          (prompt (strcat "\\nSaved native DWG: " outputPath))
          T
        )
        nil
      )
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
`}const j2=[["EQUIP","f_Equip"],["EQUIP_INT","f_Equip_Int"],["INST","f_Inst"],["PIPE_INLINE","f_Pipe_Inline"],["PIPE_PRI","f_Pipe_Pri"],["PIPE_SEC","f_Pipe_Sec"],["MISC","f_Misc"],["TEXT","f_gen_Text"]];function L2(a){const r=new Map(a.map(s=>[s.trim().toUpperCase(),s.trim()]));return j2.flatMap(([s,i])=>{if(r.has(s.toUpperCase()))return[];const l=r.get(i.toUpperCase());return l?[[s,l]]:[]})}function ky(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function O2(a,r){const s=r.map(([i,l])=>`(${ky(i.toUpperCase())} . ${ky(l)})`).join(`
    `);return`
(setq *${a}-pdf-layer-aliases* '(
    ${s}
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
`}const Ry=25.4/72,jl=.005,_2=1e-6,P2=1e3;function I2(a,r){if(!Number.isFinite(a.width)||!Number.isFinite(a.height)||a.width<1||a.height<1||a.width>1e5||a.height>1e5)return null;const s=a.width*Ry,i=a.height*Ry;if(!r)return null;const{widthMm:l,heightMm:u}=r;if(!Number.isFinite(l)||!Number.isFinite(u)||l<=0||u<=0)return null;const g=Math.abs(s-l)/l,p=Math.abs(i-u)/u;if(g>jl||p>jl)return null;const m=a.width/a.height,f=l/u;if(Math.abs(m-f)/f>jl)return null;const b=l/a.width,v=u/a.height,E=(b+v)/2,R=Math.abs(b-v)/E;return!Number.isFinite(E)||E<_2||E>P2||R>jl?null:{scaleFactor:1,method:"TITLE_BLOCK_PAGE_SIZE",pageWidthMm:s,pageHeightMm:i,targetWidthMm:l,targetHeightMm:u}}const q2=["RAW","CANDIDATE","MATCHED","CONFIRMED","UNMATCHED","NEEDS_REVIEW"];function M2(a){return`
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
`}function $2(a){return`
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
`}function U2(a){return`
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
`}function F2(a){return`
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
`}function B2(a){return`
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
`}function z2(a){return["PROJECT_TITLE_BLOCK_SCOPE_V1",`workspaceType=${a.workspaceType}`,`projectId=${a.groupId}`,`titleBlockId=${a.titleBlockId}`,`titleBlockPath=${a.titleBlockPath}`,`xrefName=${a.xrefName}`,`expectedSizeMm=${a.expectedSize.widthMm}x${a.expectedSize.heightMm}`,`version=${a.version}`,""].join(`
`)}function Y2(a,r,s,i,l=[],u=[],g=[]){const p=String(a).padStart(2,"0"),m=`PDF2DWG${p}`,f=`p2dwg${p}`,y=q2.map(St).join(" "),b=s.map(N=>`(${St(N.fallbackCategory.toLowerCase())} ${St(N.blockName)} ${St(N.sourcePath)} ${St(N.targetLayer)} ${N.wipeoutBoundary?lS(N.wipeoutBoundary):"nil"} ${St(N.blockAssetId)} (${(N.requiredShapeFonts??[]).map(St).join(" ")}))`).join(`
    `),v=i.filter(N=>N.category==="layer").filter(N=>N.name.trim().toUpperCase()!=="0").map(N=>{const T=Number(N.detail.match(/(?:^|;)color=(\d+)/i)?.[1]??7),O=Number(N.detail.match(/(?:^|;)lineweight=(-?\d+)/i)?.[1]??25),x=[-3,-2,-1].includes(O)||Number.isInteger(O)&&O>=0&&O<=211,_=N.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]??"CONTINUOUS";return`(${St(N.name)} ${Number.isInteger(T)&&T>0&&T<=255?T:7} ${x?O:25} ${St(_)})`}).join(`
    `),E=i.filter(N=>N.category==="layer").map(N=>N.name.trim()).filter(Boolean),R=L2(E),C=i.filter(N=>N.category==="textStyle").map(N=>{const T=(_,k)=>N.detail.match(new RegExp(`(?:^|;)${_}=([^;]*)`,"i"))?.[1]??k,O=(_,k)=>{const L=Number(T(_,String(k)));if(!Number.isFinite(L)||_==="height"&&L<0||_==="width"&&L<=0)throw new Error(`Approved text style "${N.name}" has an invalid ${_}. Re-review the supplied CAD text format.`);return String(L)},x=T("font","").trim();if(!x)throw new Error(`Approved text style "${N.name}" has no font. Re-review it instead of substituting a default font.`);return`(${St(N.name)} ${O("height",0)} ${O("width",1)} ${O("oblique",0)} ${St(x)} ${St(T("bigfont",""))})`}).join(`
    `),D=i.filter(N=>N.category==="linetype").filter(N=>!["CONTINUOUS","BYLAYER","BYBLOCK"].includes(N.name.trim().toUpperCase())).flatMap(N=>{const T=iv(N.name,N.detail);if(!T)throw new Error(`Approved linetype "${N.name}" has an unsupported or incomplete definition. Re-extract it with the current extractor; the runner will not omit its marks or substitute Continuous.`);const O=N.detail.match(/(?:^|;)description=([^;]*)/i)?.[1]?.trim()||N.name,x=T.segments.map(_=>{const k=[String(_.length),String(_.flags)];return _.flags===4&&k.push(String(_.shapeNumber),St(_.styleName),St(_.shapeFile),String(_.scale),String(_.rotation),String(_.offsetX),String(_.offsetY)),`(${k.join(" ")})`}).join(" ");return[`(${St(N.name)} ${St(O)} ${String(T.patternLength)} (${x}))`]}).join(`
    `),S=l.map(N=>`(${St(N.stableId.toUpperCase())} ${St(N.itemTag.trim())} ${St(N.type)} ${N.pageNumber} (${mi.map(T=>`(${St(T.toUpperCase())} . ${St(T==="itemTag"?N.itemTag.trim():N.fields?.[T]??"")})`).join(" ")}))`).join(`
    `);return Q2(i),`; Local AutoCAD runner. The matching source PDF is packaged separately.
; Copyright (c) 2026 gaurav.cbiindia.
; Run command ${m} in AutoCAD for Windows.
; Each imported entity is stamped with a generic source alias and source page.

(vl-load-com)
(setq *p2dwg-attribute-rules* '(${u.map(N=>`(${St(N.attributeTag)} ${St(N.edeField.toUpperCase())} ${St(N.valueType)} ${St(N.textZone)})`).join(" ")}))
(setq *p2dwg-conflicting-tags* '(${g.map(N=>St(N.toUpperCase())).join(" ")}))
(if (not (boundp '*p2dwg-batch-mode*)) (setq *p2dwg-batch-mode* nil))
(setq *p2dwg-approved-symbols* '(
    ${b}
))
(setq *p2dwg-approved-layers* '(
    ${v}
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

(defun ${f}-pad-page (value / text)
  (setq text (itoa value))
  (while (< (strlen text) 3)
    (setq text (strcat "0" text))
  )
  text
)

(defun ${f}-ensure-shape-style (styleName fontFile / data updated styleEntity)
  (if (not (findfile fontFile))
    (p2dwg-raise (strcat "Required linetype shape font " fontFile " was not found in AutoCAD's support paths. Install it, then rerun; the shape will not be omitted."))
  )
  (setq data (tblsearch "STYLE" styleName))
  (if data
    (progn
      (setq updated (${f}-put-group 3 fontFile data))
      (setq updated (${f}-put-group 4 "" updated))
      (setq updated (${f}-put-group 40 0.0 updated))
      (setq updated (${f}-put-group 41 1.0 updated))
      (setq updated (${f}-put-group 50 0.0 updated))
      (setq updated (${f}-put-group 71 0 updated))
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

(defun ${f}-ensure-layer (name color weight linetype)
  (if (or (= (strcase linetype) "BYLAYER") (= (strcase linetype) "BYBLOCK"))
    (setq linetype "CONTINUOUS")
  )
  (if (not (${f}-ensure-linetype linetype))
    (p2dwg-raise (strcat "Approved linetype " linetype " could not be loaded. Page canceled; no Continuous fallback was applied."))
  )
  (if (not (${f}-set-layer-standard name color weight linetype))
    (p2dwg-raise (strcat "Approved layer " name " could not be created or updated. Page canceled."))
  )
)

(defun ${f}-ensure-linetype (name / definition description segments total record
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
                  (setq styleEntity (${f}-ensure-shape-style (nth 3 segment) (nth 4 segment)))
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

(defun ${f}-put-group (code value data / prior)
  (setq prior (assoc code data))
  (if prior (subst (cons code value) prior data) (append data (list (cons code value))))
)

(defun ${f}-set-layer-standard (name color weight linetype / data updated)
  (setq data (tblsearch "LAYER" name))
  (if data
    (progn
      (setq updated (${f}-put-group 62 color data))
      (setq updated (${f}-put-group 6 linetype updated))
      (setq updated (${f}-put-group 370 weight updated))
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

(defun ${f}-set-insert-layer (entity layer-name / data entity-type)
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

(defun ${f}-set-layer-state (name visible locked / layer-entity data color flags updated)
  (setq layer-entity (tblobjname "LAYER" name))
  (if layer-entity
    (progn
      (setq data (entget layer-entity))
      (setq color (if (assoc 62 data) (abs (cdr (assoc 62 data))) 7))
      (if (= color 0) (setq color 7))
      (setq updated (${f}-put-group 62 (if visible color (- color)) data))
      (setq flags (if (assoc 70 data) (cdr (assoc 70 data)) 0))
      ; A source layer is never frozen by this workflow; it is only locked.
      (if (= 1 (logand flags 1)) (setq flags (1- flags)))
      (if locked
        (if (= 0 (logand flags 4)) (setq flags (+ flags 4)))
        (if (/= 0 (logand flags 4)) (setq flags (- flags 4)))
      )
      (setq updated (${f}-put-group 70 flags updated))
      (and (entmod updated) (tblsearch "LAYER" name))
    )
    nil
  )
)

(defun ${f}-source-layer-suffix (name)
  (cond
    ((= (strcase name) "PDF_EQUIP") "EQUIP")
    ((= (strcase name) "PDF_INST") "INST")
    ((= (strcase name) "PDF_PIPE_INLINE") "PIPE_INLINE")
    ((= (strcase name) "PDF_TEXT") "TEXT")
    (T nil)
  )
)

(defun ${f}-pdf-source-layer-p (name / normalized)
  (setq normalized (if name (strcase name) ""))
  (and
    (>= (strlen normalized) 4)
    (= (substr normalized 1 4) "PDF_")
    (/= (substr normalized 1 9) "PDF_DONE_")
  )
)

(defun ${f}-selection-source-layers (selection / index entity data name layers valid)
  (if selection
    (progn
      (setq index 0 layers nil valid T)
      (while (and valid (< index (sslength selection)))
        (setq entity (ssname selection index))
        (setq data (entget entity))
        (setq name (if (assoc 8 data) (cdr (assoc 8 data)) nil))
        (if (or
              (not (${f}-pdf-source-layer-p name))
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

(defun ${f}-category-for-source-layers (source-layers / category current suffix valid source-layer)
  (setq category nil valid T)
  (foreach source-layer source-layers
    (setq suffix (${f}-source-layer-suffix source-layer))
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

(defun ${f}-source-layer-for-category (category)
  (cond
    ((= (strcase category) "EQUIPMENT") "PDF_EQUIP")
    ((= (strcase category) "INSTRUMENT") "PDF_INST")
    ((= (strcase category) "INLINE COMPONENT") "PDF_PIPE_INLINE")
    (T nil)
  )
)

(defun ${f}-choose-source-category (/ answer)
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

(defun ${f}-snapshot-source-layer (entity snapshots / entry source-layer)
  (setq source-layer nil)
  (foreach entry snapshots
    (if (equal entity (car entry))
      (setq source-layer (nth 2 entry))
    )
  )
  source-layer
)

(defun ${f}-source-target-layer-compatible-p (source-layer target-layer / suffix accepted)
  (setq suffix (${f}-source-layer-suffix source-layer))
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

(defun ${f}-ensure-archive-layer (source-layer archive-layer / source-record
                                               source-data color linetype weight made)
  (setq source-record (tblsearch "LAYER" source-layer))
  (if (not source-record)
    nil
    (if (tblsearch "LAYER" archive-layer)
      (${f}-set-layer-state archive-layer T nil)
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

(defun ${f}-bounds-center (bounds)
  (list
    (/ (+ (nth 0 bounds) (nth 2 bounds)) 2.0)
    (/ (+ (nth 1 bounds) (nth 3 bounds)) 2.0)
    0.0
  )
)

(defun ${f}-fit-block-to-source (block-reference source-bounds / object block-bounds
                                           source-width source-height block-width block-height
                                           scale-x scale-y scale-factor aspect-error position-error
                                           tolerance source-center block-center insertion-point new-point
                                           result final-bounds final-width final-height width-error
                                           height-error coverage-x coverage-y coverage)
  (setq *p2dwg-replacement-validation* nil)
  (setq object (vlax-ename->vla-object block-reference))
  (setq block-bounds (${f}-selection-bounds (ssadd block-reference)))
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
                      (setq final-bounds (${f}-selection-bounds (ssadd block-reference)))
                      (setq source-center (${f}-bounds-center source-bounds))
                      (setq block-center (${f}-bounds-center final-bounds))
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
                              (setq final-bounds (${f}-selection-bounds (ssadd block-reference)))
                              (setq final-width (- (nth 2 final-bounds) (nth 0 final-bounds)))
                              (setq final-height (- (nth 3 final-bounds) (nth 1 final-bounds)))
                              (setq source-center (${f}-bounds-center source-bounds))
                              (setq block-center (${f}-bounds-center final-bounds))
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

(defun ${f}-insert-approved-block (document source-path insertion-point source-bounds rotation layer-name block-name block-asset-id required-fonts / model-space block-reference entity result error-message missing-font font)
  (${f}-batch-log
    (strcat "DIRECT_IMPORT_REQUEST|" block-asset-id "|" block-name "|" source-path))
  (setq missing-font nil)
  (foreach font required-fonts
    (if (and (null missing-font) (not (findfile font)))
      (setq missing-font font))
  )
  (if missing-font
    (progn
      (${f}-batch-log
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
                  (${f}-set-insert-layer entity layer-name)
                  (${f}-fit-block-to-source entity source-bounds)
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
          (${f}-batch-log
            (strcat "FAILED: direct block import|" block-asset-id "|" block-name "|" error-message))
          nil
        )
        (if result
          (progn
            (${f}-batch-log
              (strcat "DIRECT_IMPORT_CONFIRMED|" block-asset-id "|" block-name "|" layer-name
                "|SCALE=" (rtos (nth 1 *p2dwg-replacement-validation*) 2 6)
                "|ROTATION=" (rtos rotation 2 6)
                "|POSITION_ERROR=" (rtos (nth 2 *p2dwg-replacement-validation*) 2 6)
                "|COVERAGE=" (rtos (nth 5 *p2dwg-replacement-validation*) 2 6)))
            result
          )
          (progn
            (${f}-batch-log
              (strcat "FAILED: AutoCAD did not create a verified Block Reference on layer "
                layer-name "|" block-asset-id "|" block-name))
            nil
          )
        )
      )
    )
  )
)

(defun ${f}-write-replacement-xdata (entity stable-id role source-layer archive-layer block-handle block-asset-id mapping-rule status / data updated block-data)
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

(defun ${f}-write-source-handle-links (block-reference handles / data payload updated)
  (setq data (entget block-reference))
  (setq payload (${f}-link-payload block-reference))
  (if payload
    (progn
      (setq payload
        (append
          (vl-remove-if '(lambda (pair) (and (listp pair) (= (car pair) 1005))) payload)
          (mapcar '(lambda (handle) (cons 1005 handle)) handles)))
      (and (entmod (append data (list (list -3 payload)))) T))
    nil)
)

(defun ${f}-current-overlay-valid-p (selection block-reference target-layer rotation validation / source-bounds block-bounds data sw sh bw bh tolerance center-error coverage)
  (setq source-bounds (${f}-selection-bounds selection))
  (setq block-bounds (${f}-selection-bounds (ssadd block-reference)))
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
            (distance (${f}-bounds-center source-bounds)
              (${f}-bounds-center block-bounds)))
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

(defun ${f}-write-replacement-log (stable-id item-tag source-handles block-handle
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

(defun ${f}-restore-source-snapshot (snapshots / entry entity restored)
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

(defun ${f}-archive-replaced-source-worker (selection source-layer stable-id item-tag
                                                 block-reference block-asset-id target-layer
                                                 rotation mask-reference / suffix archive-layer source-layers
                                                 source-records archive-record archive-created index entity data
                                                 handle handles snapshots updated moved success validation scale
                                                 source-final archive-final layer-entry original-source-layer)
  (setq suffix (${f}-source-layer-suffix source-layer))
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
        (${f}-source-target-layer-compatible-p source-layer target-layer)
        validation
        (car validation)
        (${f}-current-overlay-valid-p selection block-reference target-layer rotation validation)
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
              (not (${f}-pdf-source-layer-p original-source-layer))
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
            (if (not (${f}-set-layer-state (car layer-entry) T nil))
              (setq success nil)
            )
          )
          (if success
            (progn
              (if (not
                    (${f}-ensure-archive-layer
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
        (setq updated (${f}-put-group 8 archive-layer data))
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
              (${f}-snapshot-source-layer entity snapshots))
            (if (not
                  (${f}-write-replacement-xdata
                    entity stable-id "SOURCE" original-source-layer archive-layer
                    (cdr (assoc 5 (entget block-reference))) block-asset-id
                    "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "PASS"))
              (setq success nil)
            )
            (setq index (1+ index))
          )
          (if success
            (if (not
                  (${f}-write-replacement-xdata
                    block-reference stable-id "BLOCK" source-layer archive-layer
                    (cdr (assoc 5 (entget block-reference))) block-asset-id
                    "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "PASS"))
              (setq success nil)
            )
          )
          (if (and success mask-reference)
            (if (not
                  (${f}-write-replacement-xdata
                    mask-reference stable-id "MASK" source-layer archive-layer
                    (cdr (assoc 5 (entget block-reference))) block-asset-id
                    "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "PASS"))
              (setq success nil)))
          (if success
            (if (not (${f}-write-source-handle-links block-reference handles))
              (setq success nil)))
          (if success
            (progn
              (setq source-final T)
              (foreach layer-entry source-records
                (if (not (${f}-set-layer-state (car layer-entry) T T))
                  (setq source-final nil)
                )
              )
              (setq archive-final (${f}-set-layer-state archive-layer nil T))
              (if (not (and source-final archive-final)) (setq success nil))
            )
          )
          (if success
            (if (not
                  (${f}-write-replacement-log
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
          (${f}-batch-log
            (strcat "SOURCE_ARCHIVED|" stable-id "|" source-layer "|" archive-layer
              "|SOURCE_LAYERS=" (vl-princ-to-string source-layers)
              "|ENTITIES=" (itoa (length handles))))
          (setq *p2dwg-archive-created-doc* (vla-get-ActiveDocument (vlax-get-acad-object)))
          T
        )
        (progn
          (${f}-restore-source-snapshot snapshots)
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
          (${f}-write-replacement-xdata
            block-reference stable-id "BLOCK" source-layer archive-layer
            (cdr (assoc 5 (entget block-reference))) block-asset-id
            "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "NEEDS_REVIEW")
          (${f}-batch-log
            (strcat "FAILED: source archive transaction rolled back|" stable-id "|" source-layer))
          nil
        )
      )
    )
    (progn
      (${f}-batch-log
        (strcat "FAILED: replacement validation incomplete|" (if stable-id stable-id "-")
          "|" (if source-layer source-layer "-") "|" target-layer))
      nil
    )
  )
)

(defun ${f}-stable-id-in-use-p (stable-id / entity payload found)
  (setq entity (entnext) found nil)
  (while (and entity (not found))
    (setq payload (${f}-link-payload entity))
    (if (and payload (>= (length payload) 9)
             (= (cdr (nth 1 payload)) stable-id)
             (= (cdr (nth 2 payload)) "BLOCK")
             (= (cdr (nth 8 payload)) "PASS"))
      (setq found T))
    (setq entity (entnext entity)))
  found
)

(defun ${f}-archive-replaced-source (selection source-layer stable-id item-tag
                                                block-reference block-asset-id target-layer rotation
                                                mask-reference / index entity snapshots result archive-layer
                                                source-records archive-record source-restored layer-entity
                                                layer-name layer-record)
  ; Catch cancellation and unexpected ActiveX errors as well as explicit failures.
  ; Snapshot only the selected source entities; never UNDO an entire drawing.
  (setq snapshots nil source-records nil index 0)
  (setq archive-layer (strcat "PDF_DONE_" (${f}-source-layer-suffix source-layer)))
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
  (if (${f}-stable-id-in-use-p stable-id)
    (progn
      (prompt "\\nThis EDE StableID already has a replacement in this drawing. Source stays visible; review the duplicate.")
      nil)
    (progn
      (setq result
        (vl-catch-all-apply
          '${f}-archive-replaced-source-worker
          (list selection source-layer stable-id item-tag block-reference
            block-asset-id target-layer rotation mask-reference)))
       (if (or (vl-catch-all-error-p result) (null result))
         (progn
           (foreach layer-record source-records
             (${f}-set-layer-state (car layer-record) T nil))
          (if (tblsearch "LAYER" archive-layer)
            (${f}-set-layer-state archive-layer T nil))
          (setq source-restored (${f}-restore-source-snapshot snapshots))
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
                 (${f}-set-layer-state (car layer-record) T nil))
              (${f}-set-layer-state archive-layer T nil)))
          (${f}-write-replacement-xdata
            block-reference stable-id "BLOCK" source-layer archive-layer
            (cdr (assoc 5 (entget block-reference))) block-asset-id
            "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "NEEDS_REVIEW")
          (if mask-reference
            (${f}-write-replacement-xdata
              mask-reference stable-id "MASK" source-layer archive-layer
              (cdr (assoc 5 (entget block-reference))) block-asset-id
              "OPERATOR_CONFIRMED_GEOMETRY_FIT_V1" "NEEDS_REVIEW"))
          (${f}-batch-log
            (strcat "NEEDS_REVIEW|ARCHIVE_ROLLBACK|" stable-id
              (if (vl-catch-all-error-p result)
                (strcat "|" (vl-catch-all-error-message result)) "")))
          (if (not source-restored)
            (p2dwg-raise "Archive rollback needs review. Source and archive layers remain visible; this page was not saved."))
          nil)
        T))
  )
)

(defun ${f}-ede-type-compatible-p (source-layer record-type / suffix)
  (setq suffix (${f}-source-layer-suffix source-layer))
  (cond
    ((= suffix "EQUIP") (wcmatch (strcase record-type) "EQUIPMENT*,PACKAGE"))
    ((= suffix "INST") (wcmatch (strcase record-type) "INSTRUMENT*"))
    ((= suffix "PIPE_INLINE") (= (strcase record-type) "VALVE"))
    ((= suffix "TEXT") (= (strcase record-type) "ITEM NOTE"))
    (T nil))
)

(defun ${f}-choose-ede-record (source-layer / options index entry choice)
  (setq options
    (vl-remove-if-not
      '(lambda (entry)
         (and (= (nth 3 entry) *p2dwg-source-page*)
              (${f}-ede-type-compatible-p source-layer (nth 2 entry))))
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

(defun ${f}-set-pdf-layer-prefix-visibility (prefix visible / record name count)
  (setq record (tblnext "LAYER" T) count 0)
  (while record
    (setq name (cdr (assoc 2 record)))
    (if (and name
             (>= (strlen name) (strlen prefix))
             (= (strcase (substr name 1 (strlen prefix))) (strcase prefix)))
      (progn
        (if (${f}-set-layer-state name visible T)
          (setq count (1+ count))
        )
      )
    )
    (setq record (tblnext "LAYER"))
  )
  count
)

(defun ${f}-prepare-source-layer-review (/ record name)
  (setq record (tblnext "LAYER" T))
  (while record
    (setq name (cdr (assoc 2 record)))
    (if (and name
             (>= (strlen name) 4)
             (= (strcase (substr name 1 4)) "PDF_")
             (/= (substr (strcase name) 1 9) "PDF_DONE_"))
      (${f}-set-layer-state name T nil)
    )
    (setq record (tblnext "LAYER"))
  )
  T
)

(defun ${f}-finalize-source-layer-states (/ record name)
  (setq record (tblnext "LAYER" T))
  (while record
    (setq name (cdr (assoc 2 record)))
    (cond
      ((and name
            (>= (strlen name) 9)
            (= (strcase (substr name 1 9)) "PDF_DONE_"))
        (if (not (${f}-set-layer-state name nil T))
          (p2dwg-raise (strcat "Could not hide and lock archived source layer " name "."))
        )
      )
      ((and name
            (>= (strlen name) 4)
            (= (strcase (substr name 1 4)) "PDF_"))
        (if (not (${f}-set-layer-state name T T))
          (p2dwg-raise (strcat "Could not keep pending source layer visible and locked: " name "."))
        )
      )
    )
    (setq record (tblnext "LAYER"))
  )
  T
)

(defun ${f}-link-payload (entity / data link)
  (setq data (entget entity '("PIDMAPLINK")))
  (setq link (assoc -3 data))
  (if (and link (listp (cadr link))
           (= (strcase (car (cadr link))) "PIDMAPLINK"))
    (cadr link)
    nil
  )
)

(defun ${f}-restore-replacement (stable-id remove-generated / entity payload role source-layer
                                              archive-layer block-handle sources blocks
                                              masks restored data updated value text-restored
                                              source-payload entity-source-layer)
  (setq text-restored (${f}-rollback-text-links stable-id remove-generated))
  (setq entity (entnext) sources nil blocks nil masks nil)
  (while entity
    (setq payload (${f}-link-payload entity))
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
          (${f}-link-payload (car blocks))
          (${f}-link-payload (car sources))))
      (setq source-layer (cdr (nth 3 payload)))
      (setq archive-layer (cdr (nth 4 payload)))
      (foreach entity sources
        (setq source-payload (${f}-link-payload entity))
        (setq entity-source-layer (cdr (nth 3 source-payload)))
        (${f}-set-layer-state entity-source-layer T nil))
      (${f}-set-layer-state archive-layer T nil)
      (setq restored T)
      (foreach entity sources
        (setq source-payload (${f}-link-payload entity))
        (setq entity-source-layer (cdr (nth 3 source-payload)))
        (setq data (entget entity))
        (setq updated (${f}-put-group 8 entity-source-layer data))
        (if (not (and (entmod updated)
                      (${f}-write-replacement-xdata
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
              (${f}-write-replacement-xdata
                entity stable-id role source-layer archive-layer
                (cdr (nth 5 payload)) (cdr (nth 6 payload))
                (cdr (nth 7 payload)) "NEEDS_REVIEW")))
          (foreach entity sources
            (setq source-payload (${f}-link-payload entity))
            (${f}-set-layer-state
              (cdr (nth 3 source-payload)) T T))
          (${f}-set-layer-state archive-layer nil T)
          (prompt
            (strcat "\\nRollback complete for StableID " stable-id
              ". Source entities are visible again; no PDF source was deleted."))
          T
        )
        (progn
          (foreach entity sources
            (setq source-payload (${f}-link-payload entity))
            (${f}-set-layer-state
              (cdr (nth 3 source-payload)) T nil))
          (${f}-set-layer-state archive-layer T nil)
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
        (${f}-restore-replacement stable-id T)))
    (prompt "\\nA 32-character StableID is required. Nothing was changed.")
  )
  (princ)
)

(defun ${f}-persisted-replacement-valid-p (block-reference / payload data source-layer archive-layer
                                                       source-state archive-state target-state
                                                        stable-id source-handle source source-payload count valid pair
                                                        entity-source-layer)
  (setq payload (${f}-link-payload block-reference))
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
          (${f}-source-target-layer-compatible-p source-layer (cdr (assoc 8 data)))
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
            (setq source-payload (if source (${f}-link-payload source) nil))
            (setq entity-source-layer
              (if source-payload (cdr (nth 3 source-payload)) nil))
            (setq source-state
              (if entity-source-layer (tblsearch "LAYER" entity-source-layer) nil))
            (if (not
                  (and source source-payload
                    (= (cdr (nth 1 source-payload)) stable-id)
                    (= (cdr (nth 2 source-payload)) "SOURCE")
                    (${f}-pdf-source-layer-p entity-source-layer)
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
            (setq payload (${f}-link-payload entity))
            (if (and payload (>= (length payload) 9)
                     (= (cdr (nth 2 payload)) "BLOCK")
                     (= (cdr (nth 8 payload)) "PASS"))
              (progn
                (setq stable-id (cdr (nth 1 payload)))
                (setq validation-result
                  (vl-catch-all-apply '${f}-persisted-replacement-valid-p (list entity)))
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
                    (${f}-restore-replacement stable-id nil)
                    (prompt (strcat "\\nNEEDS_REVIEW|REOPEN_VALIDATION_FAILED|" stable-id
                      "|Available source restored; CAD retained for review."))))))
            (setq entity next-entity))
          (${f}-validate-text-reopen)
          (prompt
            (strcat "\\nReopen validation: " (itoa passed) " passed, " (itoa failed)
              " need review. Source archives are retained; no purge is available."))))))
  (princ)
)

(defun c:P2DWGSOURCEVIEW ()
  (${f}-set-pdf-layer-prefix-visibility "PDF_" T)
  (prompt "\\nSource view: archived PDF source geometry is visible; CAD objects and pending source remain.")
  (princ)
)

(defun c:P2DWGMAPPEDVIEW ()
  (${f}-set-pdf-layer-prefix-visibility "PDF_" T)
  (${f}-set-pdf-layer-prefix-visibility "PDF_DONE_" nil)
  (${f}-set-layer-state "PID-REVIEW-CLOUD" nil T)
  (prompt "\\nMapped view: completed PDF source is hidden; approved CAD and pending source remain visible.")
  (princ)
)

(defun c:P2DWGREVIEWVIEW ()
  (${f}-set-pdf-layer-prefix-visibility "PDF_" T)
  (${f}-set-pdf-layer-prefix-visibility "PDF_DONE_" nil)
  (${f}-set-layer-state "PID-REVIEW-CLOUD" T T)
  (prompt "\\nReview view: approved CAD, pending PDF source, and review clouds are visible.")
  (princ)
)

(defun ${f}-make-valve-wipeout (boundary block-reference layer / vertices point polyline result wipeout data center scale-x scale-y rotation x y)
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

(defun ${f}-apply-approved-cad-standards (/ entry name color linetype style style-data style-entity)
  (foreach linetype *p2dwg-approved-linetypes*
    (if (not (${f}-ensure-linetype (car linetype)))
      (p2dwg-raise (strcat "Approved linetype " (car linetype) " could not be loaded."))
    )
  )
  (foreach entry *p2dwg-approved-layers*
    (${f}-ensure-layer (car entry) (cadr entry) (caddr entry) (cadddr entry))
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
          (setq style-data (${f}-put-group (car entry) (cdr entry) style-data)))
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

(defun ${f}-tag-page-entity (entity / data)
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

(defun ${f}-collect-imported-entities (before-entity / entity data entity-type selection)
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

(defun ${f}-tag-review-entity (entity role item category block / data)
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

(defun ${f}-batch-log (message / handle)
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

(defun ${f}-record-mapping (selection status item block-asset-id / index entity data handle entity-type log-handle)
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

(defun ${f}-stamp-page (selection / index entity)
  (if selection
    (progn
      (setq index 0)
      (while (< index (sslength selection))
        (setq entity (ssname selection index))
        (${f}-tag-page-entity entity)
        (setq index (1+ index))
      )
    )
  )
)

(defun ${f}-selection-bounds (selection / index entity low high result
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

(defun ${f}-tag-pipe-runs (imported-selection / answer selection index entity
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
                            (${f}-pad-page *p2dwg-source-page*)
                            "-R"
                            (${f}-pad-page run-index)
                          )
                        )
                        (regapp "PIDPIPE")
                        (setq selection-index 0)
                        (while (< selection-index (sslength selection))
                          (setq entity (ssname selection selection-index))
                          (setq data (entget entity))
                          (setq updated (${f}-put-group 8 layer-name data))
                          (setq updated (${f}-put-group 6 "BYLAYER" updated))
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
                        (${f}-batch-log
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

(defun ${f}-calibrate-import (selection / reference reference-name known-length
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
      (${f}-batch-log
        (strcat "SCALE_UNVERIFIED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*)
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
      (${f}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*) "|CALIBRATION_INPUT"))
      (p2dwg-raise "Scale calibration was cancelled. This page was not saved.")
    )
  )
  (setq measured (distance first-point second-point))
  (if (<= measured 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${f}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*) "|INVALID_MEASUREMENT"))
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
      (${f}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*) "|VERIFY_INPUT"))
      (p2dwg-raise "Scale verification was cancelled. This page was not saved.")
    )
  )
  (setq checked-length (distance check-first check-second))
  (if (<= checked-length 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${f}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*) "|ZERO_REMEASUREMENT"))
      (p2dwg-raise "Scale verification could not measure the symbol side. This page was not saved.")
    )
  )
  (setq error-percent
    (* 100.0 (/ (abs (- checked-length known-length)) known-length))
  )
  (if (> error-percent 0.5)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${f}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*)
          "|PRIMARY=" reference-name "|ERROR_PERCENT=" (rtos error-percent 2 4)))
      (p2dwg-raise
        (strcat "Scale verification missed the 0.5% tolerance ("
          (rtos error-percent 2 4) "%). This page was not saved.")
    )
  )
  )
  (${f}-batch-log
    (strcat "SCALE_PRIMARY_REFERENCE|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*)
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
          (${f}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_INPUT|" cross-name))
          (p2dwg-raise "The standard cross-check was cancelled. This page was not saved.")
        )
      )
      (setq cross-measured (distance cross-first cross-second))
      (if (<= cross-measured 0.0)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${f}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_ZERO_LENGTH|" cross-name))
          (p2dwg-raise "The standard cross-check could not measure the symbol side.")
        )
      )
      (setq cross-error
        (* 100.0 (/ (abs (- cross-measured cross-length)) cross-length))
      )
      (${f}-batch-log
        (strcat "SCALE_REFERENCE_CROSSCHECK|SOURCE_${p}.pdf|"
          (itoa *p2dwg-source-page*) "|REFERENCE=" cross-name
          "|KNOWN_MM=" (rtos cross-length 2 4)
          "|REMEASURED_MM=" (rtos cross-measured 2 4)
          "|ERROR_PERCENT=" (rtos cross-error 2 4)
          "|TOLERANCE_PERCENT=0.5"))
      (if (> cross-error 0.5)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${f}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_ERROR_PERCENT=" (rtos cross-error 2 4)))
          (p2dwg-raise
            (strcat "The valve/instrument standards disagree by "
              (rtos cross-error 2 4)
              "%. No second scale was applied; this page was not saved.")
        )
      )
      )
    )
    (${f}-batch-log
      (strcat "SCALE_REFERENCE_CROSSCHECK_SKIPPED|SOURCE_${p}.pdf|"
        (itoa *p2dwg-source-page*) "|OTHER_STANDARD_NOT_PRESENT"))
  )
  (setq *p2dwg-scale-status* "VERIFIED")
  (${f}-batch-log
    (strcat "SCALE_VERIFIED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*)
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

(defun ${f}-cloud-vertices (min-x min-y max-x max-y / step-x step-y
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

(defun ${f}-make-review-cloud (bounds item category block / min-x min-y
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
  (${f}-ensure-layer "PID-REVIEW-CLOUD" 1 35 "CONTINUOUS")
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
        (${f}-cloud-vertices min-x min-y max-x max-y)
      )
    )
  )
  (${f}-tag-page-entity cloud)
  (${f}-tag-review-entity cloud "RED_REVISION_CLOUD" item category block)
  cloud
)

(defun ${f}-category-for-source-layer (source-layer / suffix)
  (setq suffix
    (if source-layer (${f}-source-layer-suffix source-layer) nil))
  (cond
    ((equal suffix "EQUIP") "equipment")
    ((equal suffix "INST") "instrument")
    ((equal suffix "PIPE_INLINE") "inline component")
    (T nil)
  )
)

(defun ${f}-choose-approved-symbol (category / options index choice mask-note)
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

(defun ${f}-review-unsupported (imported / answer selection bounds index entity
                                            selection-index category block-name target-layer
                                            center fallback item choice source-path mask-boundary
                                            wipeout block-asset-id exact-match-answer
                                              exact-match-confirmed required-fonts source-layer source-layers
                                             rotation identity-confirmed overlay-answer ede-record stable-id
                                              attribute-plan candidate-id order-result)
  (${f}-prepare-source-layer-review)
  (${f}-ensure-layer "PID-PROVISIONAL-FALLBACK" 1 35 "CONTINUOUS")
  (initget "Yes No")
  (setq answer
    (getkword
      "\\nDo you want to replace any PDF-imported symbols with approved Legends Library blocks on this page? [Yes/No] <No>: "
    )
  )
  (if (null answer) (setq answer "No"))
  (progn
      (${f}-batch-log
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
            (${f}-prepare-source-layer-review)
            (setq selection (ssget))
            (if selection
              (progn
                ; Text has its own confirmation/attribute association path.
                (setq selection (${f}-geometry-only-selection selection))
                (setq source-layers (${f}-selection-source-layers selection))
                (setq bounds
                  (if (and source-layers (${f}-source-selection-p selection imported))
                    (${f}-selection-bounds selection)
                    nil))
                (if (null bounds)
                  (prompt "\\nSelect only live PDF_ source entities from this page, including any fills that belong to this one symbol. The selection was not changed.")
                  (progn
                    (setq wipeout nil stable-id nil ede-record nil)
                    (setq category
                      (${f}-category-for-source-layers source-layers))
                    (if (null category)
                      (progn
                        (prompt
                          (strcat
                            "\\nSelected PDF layer names do not identify the symbol category: "
                            (vl-princ-to-string source-layers)
                            ". Choose by the visible item only if you are sure."))
                        (setq category (${f}-choose-source-category))
                      )
                    )
                    (setq source-layer
                      (if category
                        (${f}-source-layer-for-category category)
                        nil))
                    (if category
                      (setq choice (${f}-choose-approved-symbol category))
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
                      (${f}-batch-log
                        (strcat "BLOCK_SELECTION_CONFIRMED|" *p2dwg-source-alias* "|"
                          (itoa *p2dwg-source-page*) "|CATEGORY=" category
                          "|BLOCK=" block-asset-id "|" block-name "|" target-layer))
                    )
                    (setq item
                      (strcat
                        "REV-${String(a).padStart(2,"0")}-"
                        (${f}-pad-page index)
                      )
                    )
                    (${f}-record-mapping selection "CANDIDATE" item nil)
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
                            (${f}-batch-log
                              (strcat "FAILED: approved target layer is unavailable|"
                                block-asset-id "|" target-layer))
                            (prompt "\\nThe approved target layer is not available. Source geometry will be preserved and clouded.")
                          )
                          ((not (findfile source-path))
                            (${f}-batch-log
                              (strcat "FAILED: approved block source is missing|" block-asset-id "|" source-path))
                            (prompt "\\nThe approved block DXF/DWG is missing from the runner folder. Source geometry will be preserved and clouded.")
                          )
                          ((and source-layer
                                (not (${f}-source-target-layer-compatible-p source-layer target-layer)))
                            (${f}-batch-log
                              (strcat "FAILED: incompatible source/approved layer|" source-layer "|" target-layer))
                            (prompt "\\nThe approved target layer is incompatible with this PDF source layer. Source stays visible for review.")
                          )
                          (T
                            (setq rotation (getangle "\\nApproved block rotation angle <0>: "))
                            (if (null rotation) (setq rotation 0.0))
                            (setq fallback
                              (${f}-insert-approved-block
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
                          (${f}-make-valve-wipeout mask-boundary fallback target-layer)
                        )
                        (if wipeout
                          (progn
                            (${f}-tag-page-entity wipeout)
                            (${f}-tag-review-entity
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
                            (setq ede-record (${f}-choose-ede-record source-layer))
                            (if ede-record
                              (progn
                                (setq stable-id (strcase (car ede-record)))
                                 (setq candidate-id
                                   (strcat *p2dwg-source-alias* "#" (itoa *p2dwg-source-page*)
                                     ":" (cdr (assoc 5 (entget (ssname selection 0))))))
                                (setq exact-match-confirmed
                                  (${f}-archive-replaced-source
                                    selection source-layer stable-id (nth 1 ede-record)
                                    fallback block-asset-id target-layer rotation wipeout))
                                 (if exact-match-confirmed
                                   (progn
                                     ; Body placement is independently verified first.
                                     ; Label width must never become a geometry-fit signal.
                                     (setq attribute-plan
                                       (${f}-prepare-attributes fallback ede-record bounds imported
                                         block-asset-id candidate-id))
                                     (${f}-commit-attributes attribute-plan fallback ede-record block-asset-id candidate-id))
                                   (progn
                                     (${f}-attribute-summary fallback ede-record block-asset-id candidate-id "NEEDS_REVIEW")))
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
                        (${f}-tag-page-entity fallback)
                        (${f}-tag-review-entity
                          fallback
                          (if exact-match-confirmed
                            "CONFIRMED_BLOCK_MAPPING"
                            "PROVISIONAL_SAME_CATEGORY_FALLBACK"
                          )
                          item category block-name
                        )
                        (${f}-record-mapping
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
                    (${f}-record-mapping
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
                        (${f}-tag-review-entity
                          entity "UNSUPPORTED_SOURCE_RETAINED" item category block-name))
                      (setq selection-index (1+ selection-index))
                    )
                    (if (not (and exact-match-confirmed fallback))
                      (${f}-make-review-cloud
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
        (${f}-batch-log
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

${M2(f)}
${U2(f)}
${F2(f)}
${B2(f)}
${$2(f)}
${O2(f,R)}
${R2(a,r)}
`}function H2(a,r,s){const i=a.map((u,g)=>{const p=g+1;return{documentNumber:p,sourceId:u.sourceId??`SOURCE_${String(p).padStart(2,"0")}`,sourceFile:`SOURCE_${String(p).padStart(2,"0")}.pdf`,sourceName:u.sourceName??`PDF ${p}`,sha256:u.sourceHash??"",pageCount:u.pageCount}}),l=a.flatMap((u,g)=>(u.pageSizesPoints??[]).flatMap((p,m)=>{const f=I2(p,r?.expectedSize);return f?[{documentNumber:g+1,pageNumber:m+1,scaleFactor:f.scaleFactor,method:f.method,pageWidthMm:f.pageWidthMm,pageHeightMm:f.pageHeightMm,targetWidthMm:f.targetWidthMm,targetHeightMm:f.targetHeightMm}]:[]}));return N2(i,!!r,s,l)}function V2(){return`param([Parameter(Mandatory=$true)][int]$ExpectedCount)
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
`}function X2(a,r){const s=g=>{const p=[2166136261,2654435769,2246822507,3266489909],m=[16777619,1540483477,668265261,374761393];for(const f of g)for(let y=0;y<p.length;y+=1)p[y]=Math.imul(p[y]^f,m[y])>>>0;return p.map(f=>f.toString(16).padStart(8,"0")).join("")},i=a.map((g,p)=>[p+1,g.sourceHash?.toLowerCase()??s(g.pdfBytes),g.pageCount,g.discipline,g.sourceId??"",g.sourceName??"",g.originalName??"",g.projectId??"",g.titleBlockGroupId??"",JSON.stringify(g.pageSizesPoints??[])].join("|")),l=[];for(const g of r)g.path==="RUN_BATCH.lsp"||g.path==="README_LOCAL_AUTOCAD.txt"||/^SOURCE_\d+\.pdf$/i.test(g.path)||l.push(`${g.path}|${g.content.length}|${s(g.content)}`);const u=["LOCAL_AUTOCAD_BATCH_V1",...i.map(g=>`JOB|${g}`),...l.map(g=>`FILE|${g}`)].join(`
`);return s(new TextEncoder().encode(u))}function G2(a,r){return`LOCAL AUTOCAD PDF-TO-DWG RUNNER
 ---------------------------------

This package contains the selected source PDFs and AutoLISP helpers. It does
not contain pre-generated DWG files. The ZIP is prepared in your browser and
is not uploaded to the app. Keep it private because it contains source PDFs.

${a.map((l,u)=>`- PDF ${u+1} (${l.discipline}): ${l.pageCount} page(s) -> ${l.pageCount} native DWG file(s)`).join(`
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
    The runner never deletes imported source entities or redacts company/client
    details. Such details may remain; inspect and redact them separately before
    sharing. Each page asks about optional Pipe Run tagging and operator-confirmed
    PDF symbol/block review; keep AutoCAD
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
`}function K2(a,r=[],s=[],i=[],l){if(a.length===0||a.some(T=>!Number.isInteger(T.pageCount)||T.pageCount<1||!["PFD","P&ID"].includes(T.discipline)||!(T.pdfBytes instanceof Uint8Array)||T.pdfBytes.length===0||T.pageSizesPoints!==void 0&&(T.pageSizesPoints.length!==T.pageCount||T.pageSizesPoints.some(O=>!Number.isFinite(O.width)||!Number.isFinite(O.height)||O.width<=0||O.height<=0))||typeof T.sourceHash!="string"||!/^[a-f0-9]{64}$/i.test(T.sourceHash)||T.sourceId!==void 0&&!T.sourceId.trim()||T.sourceName!==void 0&&!T.sourceName.trim()))throw new Error("Every runner PDF needs readable bytes and a verified SHA-256 source hash.");const u=a.map((T,O)=>T.sourceId??`SOURCE_${String(O+1).padStart(2,"0")}`);if(new Set(u).size!==u.length)throw new Error("Each selected PDF must have a unique source ID before the runner can be prepared.");if(a.some(T=>(T.edeRecords??[]).some(O=>!/^[0-9A-F]{32}$/i.test(O.stableId)||typeof O.itemTag!="string"||!O.type.trim()||Object.entries(O.fields??{}).some(([x,_])=>!mi.includes(x)||typeof _!="string")||!Number.isInteger(O.pageNumber)||O.pageNumber<1||O.pageNumber>T.pageCount)))throw new Error("An EDE link in the AutoCAD runner is invalid. Reopen the EDE record and prepare a fresh runner.");if(a.some(T=>(T.conflictingTags??[]).some(O=>typeof O!="string")))throw new Error("The runner duplicate-tag registry is invalid.");const g=new Set(a.map(T=>T.titleBlockGroupId?.trim()??""));if(g.size>1)throw new Error("Prepare one AutoCAD runner per group so each batch uses only its own title block.");const p=[...g][0]??"";if(p){if(!l||l.groupId!==p)throw new Error("Upload a standalone DWG title block for the selected group before preparing its AutoCAD runner.");const T=new Set(a.map(x=>x.discipline));if(T.size!==1)throw new Error("Prepare separate PFD and P&ID runners so each workspace keeps its own shared title block.");if(l.workspaceType!==[...T][0])throw new Error(`The selected title block belongs to ${l.workspaceType}; choose the matching workspace title block.`);if(!(l.content instanceof Uint8Array)||!l.content.length)throw new Error("The selected group title block is not a valid AutoCAD DWG file.");const O=new TextDecoder().decode(l.content.subarray(0,6));if(!/^AC10\d{2}$/.test(O))throw new Error("The selected group title block is not a valid AutoCAD DWG file.");if(l.titleBlockPath!=="PROJECT_TITLE_BLOCK.dwg"||l.xrefName!=="P2DWG_PROJECT_TITLE_BLOCK"||!l.titleBlockId.trim()||!Number.isInteger(l.version)||l.version<1||!Number.isFinite(l.expectedSize.widthMm)||!Number.isFinite(l.expectedSize.heightMm)||l.expectedSize.widthMm<=0||l.expectedSize.heightMm<=0)throw new Error("The project title-block record is incomplete. Save the title block again in the selected workspace.")}else if(l)throw new Error("A project title block can only be used with PDFs from the same selected group.");const m=a.map(T=>r.filter(O=>(O.discipline===T.discipline||O.discipline==="Shared")&&(O.projectId?O.projectId===T.projectId:!0))),f=[...new Map(m.flat().map(T=>[`${T.blockAssetId}|${T.blockName}|${T.fallbackCategory}`,T])).values()];for(const T of f)if(T.fallbackCategory.trim().toLowerCase()==="valve"){if(!T.wipeoutBoundary)throw new Error(`Valve "${T.blockName}" has no reviewed body mask outline. Re-review the valve in the Legends Library before preparing the AutoCAD runner.`);try{Xr(T.wipeoutBoundary.map(([O,x])=>`${O},${x}`).join(";"))}catch(O){throw new Error(`Valve "${T.blockName}" has an invalid reviewed body mask outline. ${O instanceof Error?O.message:"Re-review the valve mask."}`)}}const y=new Set(s.map(T=>T.id));if(f.some(T=>!y.has(T.blockAssetId)))throw new Error("An approved symbol refers to a missing locally extracted block drawing.");if(f.some(T=>!T.targetLayer.trim()||T.targetLayer.trim().toUpperCase()==="0"))throw new Error("Every approved block needs an approved non-zero target CAD layer before the AutoCAD runner can be prepared.");const b=new Map,v=new Map,E=new Map,R=new Map,C=[...new Set(f.map(T=>T.blockAssetId))];C.forEach((T,O)=>{const x=s.find(k=>k.id===T),_=`CAD_SYMBOLS/SYMBOL_${String(O+1).padStart(3,"0")}`;if(x.format==="DXF"){const k=Us(x.content).content,L=new Gb(k).nativeAssetInfo();v.set(T,`${_}.dxf`),b.set(T,`${_}.dxf`),E.set(T,L.requiredShapeFonts),R.set(T,k)}else b.set(T,`${_}.dwg`),v.set(T,`${_}.dwg`),E.set(T,[])});const D={schemaVersion:1,pdfs:a.map((T,O)=>({sourceId:T.sourceId??`SOURCE_${String(O+1).padStart(2,"0")}`,sourceFile:`SOURCE_${String(O+1).padStart(2,"0")}.pdf`,originalName:T.originalName??T.sourceName??`PDF ${O+1}`,originalAlias:T.sourceName??`PDF ${O+1}`,sha256:T.sourceHash.toLowerCase(),pageCount:T.pageCount}))},S=[{path:"RUN_BATCH.lsp",content:new Uint8Array},{path:"batch_manifest.json",content:new TextEncoder().encode(JSON.stringify(D,null,2))},{path:"VERIFY_BATCH.ps1",content:new TextEncoder().encode(V2())},...l?[{path:"PROJECT_TITLE_BLOCK.dwg",content:l.content},{path:"PROJECT_TITLE_BLOCK_SCOPE.txt",content:new TextEncoder().encode(z2(l))}]:[],...s.filter(T=>C.includes(T.id)).map(T=>({path:v.get(T.id),content:R.get(T.id)??T.content})),...f.length?[{path:"CAD_BLOCK_GEOMETRY_INDEX.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,note:"Descriptors are local geometry data, not validated match signatures. Missing or empty descriptors require re-importing the extraction ZIP with its overview DXF or reviewing unsupported geometry.",blocks:f.map(T=>{const O=s.find(L=>L.id===T.blockAssetId),x=O?.geometryDescriptor??null,k=!!(x?.primitives.length&&x.bounds)?"INDEXED":O?.geometryIndexError??(x?"EMPTY_OR_UNSUPPORTED":"OVERVIEW_DXF_REQUIRED");return{blockAssetId:T.blockAssetId,blockName:T.blockName,category:T.fallbackCategory,discipline:T.discipline,targetLayer:T.targetLayer,targetLayerRules:i.find(L=>L.category==="layer"&&L.name.trim().toLowerCase()===T.targetLayer.trim().toLowerCase())?.detail??null,projectScope:T.projectId?"project":"company",indexStatus:k,indexError:O?.geometryIndexError??null,geometry:x}})},null,2))}]:[],...a.flatMap((T,O)=>{const x=String(O+1).padStart(2,"0"),_=r.filter(ee=>(ee.discipline===T.discipline||ee.discipline==="Shared")&&(ee.projectId?ee.projectId===T.projectId:!0)&&ee.blockAssetId&&b.has(ee.blockAssetId)).map(ee=>{const te=b.get(ee.blockAssetId),se=te.split("/").at(-1)?.replace(/\.(?:dwg|dxf)$/i,"")??"APPROVED_SYMBOL";return{...ee,blockName:se,sourcePath:te,requiredShapeFonts:E.get(ee.blockAssetId)??[]}}),k=i.filter(ee=>(ee.discipline===T.discipline||ee.discipline==="Shared")&&(ee.projectId?ee.projectId===T.projectId:!0)),L=[...new Map(k.map(ee=>[`${ee.category}:${ee.name.toLowerCase()}`,ee])).values()],H=_.find(ee=>!L.some(te=>te.category==="layer"&&te.name.toLowerCase()===ee.targetLayer.toLowerCase()));if(H)throw new Error(`Approved CAD layer "${H.targetLayer}" is not included in this runner page's approved standards.`);return[{path:`DOC_${x}.lsp`,content:new TextEncoder().encode(Y2(O+1,T.pageCount,_,L,T.edeRecords??[],kf(T.attributeRules??[]),T.conflictingTags??[]))},{path:`SOURCE_${x}.pdf`,content:T.pdfBytes}]})],N=X2(a,S);return S[0].content=new TextEncoder().encode(H2(a,l,N)),S.push({path:"README_LOCAL_AUTOCAD.txt",content:new TextEncoder().encode(G2(a,!!l))}),Pb(S)}function jy(a,r){const s=a.match(new RegExp(`(?:^|;)${r}=\\(([^)]*)\\)`,"i"));if(!s)return null;const i=s[1].trim();return!i||/^nil$/i.test(i)?[]:i.split(/[\s,]+/)}function W2(a,r){const s=a.match(new RegExp(`(?:^|;)${r}=(.*?)(?=;[A-Za-z][A-Za-z0-9_]*=|$)`,"i"));if(!s)return null;const i=[],l=/\(\s*(\d+)\s*\.\s*(?:"((?:\\.|[^"])*)"|([^\s)]+))\s*\)/g;let u;for(;(u=l.exec(s[1]))!==null;){const g=u[2]===void 0?u[3]:u[2].replaceAll('\\"','"').replaceAll("\\\\","\\");i.push({code:Number(u[1]),value:g})}return i}function Z2(a){let r=0;for(const i of a.toUpperCase())r=r*31+i.charCodeAt(0)>>>0;return`P2DWG_${a.toUpperCase().replace(/[^A-Z0-9_-]/g,"_").slice(0,16)||"SHAPE"}_${r.toString(36).toUpperCase()}`}function iv(a,r){const s=jy(r,"pattern"),i=jy(r,"patternFlags")??[];if(!s?.length||i.length>0&&i.length!==s.length)return null;const l=s.map(Number),u=i.map(Number);if(l.some(D=>!Number.isFinite(D))||l.every(D=>D===0)||l.reduce((D,S)=>D+Math.abs(S),0)<=0||u.some(D=>!Number.isInteger(D)))return null;const g=W2(r,"complexData"),p=new Map,m=/\(\s*"((?:\\.|[^"])*)"\s*\.\s*"((?:\\.|[^"])*)"\s*\)/g,f=r.match(/(?:^|;)shapeFonts=(.*)$/i);let y;if(f)for(;(y=m.exec(f[1]))!==null;)p.set(y[1].replaceAll('\\"','"').toUpperCase(),y[2].replaceAll('\\"','"'));const b=[];let v=0;for(let D=0;D<l.length;D+=1){const S=u[D]??0;let N=g?.findIndex((fe,ce)=>ce>=v&&fe.code===49)??-1;if(N<0||!g){if(S!==0)return null;b.push({length:l[D],flags:0});continue}const T=g[N];if(Math.abs(Number(T.value)-l[D])>1e-8)return null;const O=g[N+1];if(!O||O.code!==74)return null;const x=Number(O.value);if(!Number.isInteger(x)||x!==S)return null;if(v=N+2,x===0){b.push({length:l[D],flags:0});continue}if(x!==4)return null;const _=fe=>{for(;v<g.length&&g[v].code!==fe&&g[v].code!==49;)v+=1;if(v>=g.length||g[v].code!==fe)return null;const ce=g[v].value;return v+=1,ce},k=Number(_(75)),L=_(340),H=Number(_(46)),ee=Number(_(50)),te=Number(_(44)),se=Number(_(45)),Te=L?p.get(L.toUpperCase()):void 0;if(!Number.isInteger(k)||k<=0||!L||!Te||!/^[a-z0-9_.-]+\.shx$/i.test(Te)||![H,ee,te,se].every(Number.isFinite)||H<=0)return null;b.push({length:l[D],flags:4,shapeNumber:k,styleName:Z2(a),shapeFile:Te,scale:H,rotation:ee,offsetX:te,offsetY:se})}const E=l.reduce((D,S)=>D+Math.abs(S),0),R=r.match(/(?:^|;)patternLength=([^;]+)/i)?.[1],C=R===void 0?E:Number(R);return!Number.isFinite(C)||C<=0||Math.abs(C-E)>Math.max(1e-7,E*1e-7)?null:{patternLength:C,segments:b}}function Q2(a){const r=new Set(["CONTINUOUS","BYLAYER","BYBLOCK"]),s=new Map(a.filter(i=>i.category==="linetype").map(i=>[i.name.trim().toUpperCase(),i]));for(const i of a.filter(l=>l.category==="layer")){const l=i.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!l||r.has(l.toUpperCase()))continue;const u=s.get(l.toUpperCase());if(!u||!iv(u.name,u.detail))throw new Error(`Layer "${i.name}" requires linetype "${l}", but its complete supported definition is not approved. Review/re-extract that linetype first; the runner will not silently substitute Continuous.`)}}function St(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function J2(a,r){return a===null||a.has(r)}function eA(a,r){return r===null?[...a]:a.filter(s=>r.has(s))}function tA(a,r,s){const i=new Set(a??r);return i.has(s)?i.delete(s):i.add(s),i}function aA(a,r,s){if(a===null)return null;const i=new Set(s),l=new Set([...a].filter(u=>i.has(u)));for(const u of s)r.has(u)||l.add(u);return l}function nA(a,r,s=""){const i=a.filter(f=>f.reviewStatus==="reviewed"&&f.sourceKind==="extracted-dwg"&&(f.scope!=="project"||!!(s&&f.projectId===s))),l=(f,y)=>f.fields.find(b=>b.label===y)?.value?.trim()??"",u=i.filter(f=>[r,"Shared"].includes(l(f,"Source discipline"))),g=u.filter(f=>f.category==="layer"&&l(f,"CAD name")&&l(f,"CAD name").toUpperCase()!=="0"),p=new Set(g.map(f=>l(f,"CAD name").toLowerCase()));return{symbols:u.filter(f=>f.category==="symbol"&&["Source drawing ID","Block asset ID","Block name","Fallback category"].every(y=>l(f,y))&&p.has(l(f,"Target CAD layer").toLowerCase())).length,layers:g.length,textStyles:u.filter(f=>f.category==="textStyle").length,otherDisciplineSymbols:i.filter(f=>f.category==="symbol"&&["PFD","P&ID"].includes(l(f,"Source discipline"))&&l(f,"Source discipline")!==r).length}}const hf=1024*1024,rA=500*hf;function Yo(a){return a<1024?`${a} B`:a<hf?`${(a/1024).toFixed(1)} KB`:`${(a/hf).toFixed(1)} MB`}function sA(a){const r=a.type.split(";",1)[0].trim().toLowerCase(),s=a.name.trim().toLowerCase().endsWith(".pdf");return r==="application/pdf"||s}async function oA(a){const[r,s]=await Promise.all([sn(()=>import("./pdf-TYrZqVzP.js"),[]),sn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);r.GlobalWorkerOptions.workerSrc=s.default;const i=r.getDocument({data:new Uint8Array(a.slice(0))});try{return(await i.promise).numPages}finally{await i.destroy().catch(()=>{})}}async function iA(a){const[r,s]=await Promise.all([sn(()=>import("./pdf-TYrZqVzP.js"),[]),sn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);r.GlobalWorkerOptions.workerSrc=s.default;const l=await r.getDocument({data:new Uint8Array(a.slice(0))}).promise;try{const u=[];for(let g=1;g<=l.numPages;g+=1){const p=await l.getPage(g),m=p.getViewport({scale:1});u.push({width:m.width,height:m.height}),p.cleanup()}return u}finally{await l.destroy().catch(()=>{})}}function lA({discipline:a,groups:r,selectedClientId:s,selectedClientLabel:i,onSelectClient:l}){const[u,g]=q.useState([]),[p,m]=q.useState(null),[f,y]=q.useState(!0),[b,v]=q.useState(""),[E,R]=q.useState(0),[C,D]=q.useState([]),[S,N]=q.useState(null),[T,O]=q.useState(null),[x,_]=q.useState(null),[k,L]=q.useState(null),[H,ee]=q.useState(0),[te,se]=q.useState(1),[Te,fe]=q.useState(null),[ce,z]=q.useState(""),[Z,me]=q.useState(""),[Se,P]=q.useState([]),[J,U]=q.useState(0),[V,oe]=q.useState(""),[de,ve]=q.useState(null),[qe,Le]=q.useState(null),[gt,nt]=q.useState(!1),[ot,dt]=q.useState(!1),[qt,mt]=q.useState(""),[F,ue]=q.useState(!1),[ge,B]=q.useState(""),[pe,Ce]=q.useState(!1),[ye,Oe]=q.useState(""),[Qe,Ve]=q.useState("1"),Me=q.useRef([]),jt=q.useRef(null),be=q.useRef(!0),et=q.useRef(!1),rt=q.useRef(0),Qt=q.useRef(new Set),Re=q.useRef(a);Re.current=a;const Ra=typeof globalThis.crypto?.subtle<"u",At=q.useMemo(()=>bb(r),[r]),vt=q.useMemo(()=>{const M=new Set(eA(u.map(ne=>ne.id),p));return u.filter(ne=>M.has(ne.id))},[p,u]),Jt=()=>m(null),Mt=()=>m(new Set),ja=M=>{m(ne=>tA(ne,u.map(we=>we.id),M))};q.useEffect(()=>{if(me(s),!s){z("");return}try{const M=yn();z(M.projects[s]?s:"")}catch{z("")}},[s]);const ut=q.useCallback((M,ne)=>{if(!be.current)return;rt.current+=1;const we=rt.current;D(xe=>[...xe.slice(-5),{id:we,kind:M,text:ne}])},[]);q.useEffect(()=>{const M=()=>{try{const ne=yn(),we=s&&ne.projects[s]?[s]:[];P(we.map((xe,Ne)=>({id:xe,label:At.find(Ie=>Ie.id===xe)?.label??`Project ${String(Ne+1).padStart(2,"0")}`}))),ve(nA([...ne.companyItems,...ce?ne.projects[ce]?.items??[]:[]],a,ce)),oe(new Date().toLocaleTimeString())}catch(ne){ve(null),ut("error",ne instanceof Error?ne.message:"The approved CAD library could not be loaded.")}};return M(),window.addEventListener("focus",M),window.addEventListener("storage",M),window.addEventListener(ri,M),()=>{window.removeEventListener("focus",M),window.removeEventListener("storage",M),window.removeEventListener(ri,M)}},[ut,At,a,ce,J,s]),q.useEffect(()=>{let M=!0;return Le(null),mt(""),Z?(nt(!0),ry(Z,a).then(ne=>{M&&Le(ne)}).catch(ne=>{M&&mt(ne instanceof Error?ne.message:"The local project title block could not be read.")}).finally(()=>{M&&nt(!1)}),()=>{M=!1}):(nt(!1),()=>{M=!1})},[a,Z]),q.useEffect(()=>{Z&&!At.some(M=>M.id===Z)&&(me(""),Le(null),mt(""))},[At,Z]);const Ot=q.useCallback(async()=>{try{const[M,ne]=await Promise.all([Zb(a),t2()]);if(!be.current||Re.current!==a)return;const we=M.map(Ne=>Ne.id),xe=Qt.current;m(Ne=>aA(Ne,xe,we)),Qt.current=new Set(we),g(M),R(ne),v("")}catch(M){be.current&&v(M instanceof Error?M.message:"Saved PDFs could not be loaded.")}finally{be.current&&y(!1)}},[a]),$t=async(M,ne,we,xe)=>{await Nl(M.id,{analysisStatus:"extracting",analysisPagesDone:0,analysisRecordCount:0,analysisMessage:"",autocadStatus:"not-connected"}),be.current&&await Ot();let Ne;try{Ne=await y2(ne,xe,we)}catch(Ct){throw we()?Ct:new Zt("cancelled","EDE extraction paused.")}if(!we())throw new Zt("cancelled","EDE extraction paused.");await n2(M.id,Ne.pageText);const Ie=m2(Ne.pageText),Je=A2(a==="PFD"?"pfd":"pid",{id:M.id,alias:M.alias},[...Ne.candidates,...Ie]);be.current&&ee(Ct=>Ct+1);const Xe=Ne.pageText.some(Ct=>Ct.searchableText.trim()||Ct.ocrTiles.some(Ut=>Ut.trim())),ha=Je.recordCount||Xe?"needs-review":"no-tags";return await Nl(M.id,{analysisStatus:ha,analysisPagesDone:Ne.pages,analysisRecordCount:Je.recordCount,analysisMessage:Ne.ocrPages?`Page text and OCR from ${Ne.ocrPages} page(s) are saved locally. ${Ne.candidates.length} tag candidate(s) and ${Ie.length} note(s) need review.`:`Page text is saved locally. ${Ne.candidates.length} tag candidate(s) and ${Ie.length} note(s) need review.`,autocadStatus:"not-connected"}),{...Je,tagCount:Ne.candidates.length,noteCount:Ie.length}};q.useEffect(()=>{be.current=!0,y(!0),_(null),se(1),Ot();const M=()=>{Ot()};return window.addEventListener("focus",M),()=>{window.removeEventListener("focus",M),be.current=!1,Me.current.forEach(ne=>{ne.cancelled=!0}),Me.current=[]}},[Ot]),q.useEffect(()=>{if(et.current)return;const M=new URLSearchParams(window.location.search).get("pdf"),ne=u.find(Ne=>Ne.id===M);if(!ne)return;const we=new URLSearchParams(window.location.search).get("record");we&&L(we),et.current=!0,_(ne.id);const xe=Number(new URLSearchParams(window.location.search).get("page"));se(Number.isInteger(xe)&&xe>=1&&xe<=ne.pageCount?xe:1),window.setTimeout(()=>document.querySelector('[data-testid="panel-source-page"]')?.scrollIntoView({behavior:"smooth",block:"center"}),100)},[u]);const wt=async(M,ne,we)=>{const xe=a,Ne=()=>!M.cancelled&&be.current&&Re.current===xe;M.state="working";try{if(M.file.size>df)throw new Zt("too-large","A PDF is larger than 100 MB and was skipped.");const Ie=await M.file.arrayBuffer();if(!Ne())return;let Je;try{Je=await oA(Ie)}catch(Ct){const Ut=Ct?.name;throw Ut==="PasswordException"?new Error("A PDF is password-protected. Remove the password and add it again."):Ut==="InvalidPDFException"||Ut==="FormatError"?new Error("A file is not a valid PDF, or it is damaged."):new Error("A PDF could not be read. It may be damaged.")}if(!Ne())return;if(Je<1)throw new Error("A PDF has no pages.");let Xe;try{Xe=await Ty(Ie)}catch{throw new Error("Duplicate check is not supported in this browser, so the PDF was not saved.")}if(!Ne())return;const ha=await a2({discipline:xe,bytes:Ie,pageCount:Je,hash:Xe,originalName:M.file.name},Ne);ne.pagesDone+=Je,be.current&&(N({total:we,done:ne.done,pagesDone:ne.pagesDone,active:1,phase:"extracting",currentAlias:ha.alias,pageNow:0,pageTotal:Je}),await Ot());try{const Ct=await $t(ha,Ie,Ne,(Ut,ba)=>{be.current&&N(Tn=>Tn&&{...Tn,phase:"extracting",currentAlias:ha.alias,pageNow:Ut,pageTotal:ba})});Ne()&&ut("info",`${ha.alias}: ${Ct.tagCount} tag candidate(s) and ${Ct.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(Ct){const Ut=Ct instanceof Zt&&Ct.code==="cancelled",ba=Ut?"Extraction paused. Resume it from this saved PDF.":Ay(Ct);await Nl(ha.id,{analysisStatus:Ut?"paused":"failed",analysisMessage:ba}).catch(()=>{}),!Ut&&Ne()&&ut("error",`${ha.alias}: ${ba}`)}M.state="done",be.current&&await Ot()}catch(Ie){M.state="failed",!(Ie instanceof Zt&&Ie.code==="cancelled")&&Ne()&&ut("error",Ie instanceof Error?Ie.message:"A PDF could not be added.")}finally{ne.done+=1,be.current&&N(Ie=>Ie&&{...Ie,total:we,done:ne.done,pagesDone:ne.pagesDone,active:0})}},La=M=>{if(S||f||b||!M.length)return;const ne=M.filter(sA);if(ne.length<M.length&&ut("error",`${M.length-ne.length} file(s) skipped. Choose PDF files only.`),!ne.length)return;const we=ne.map(Je=>({id:++rt.current,file:Je,cancelled:!1,state:"queued"}));Me.current=[...Me.current,...we];const xe={done:0,pagesDone:0};N({total:we.length,done:0,pagesDone:0,active:0,phase:"checking"});let Ne=0;(async()=>{for(;Ne<we.length&&be.current;){const Je=we[Ne++];if(Je.cancelled){xe.done+=1;continue}await wt(Je,xe,we.length)}})().then(()=>{if(Me.current=Me.current.filter(Xe=>!we.includes(Xe)),!be.current)return;const Je=we.filter(Xe=>Xe.state==="done").length;Je&&ut("info",`${Je} PDF(s) saved on this device. Check each PDF's EDE status below; AutoCAD is not connected.`),N(null)})},ra=async M=>{if(!(S||T)){O(M.id),N({total:1,done:0,pagesDone:0,active:1,phase:"extracting",currentAlias:M.alias,pageNow:0,pageTotal:M.pageCount});try{const ne=await zo(M.id),we=await $t(M,ne,()=>be.current,(xe,Ne)=>{be.current&&N(Ie=>Ie&&{...Ie,phase:"extracting",pageNow:xe,pageTotal:Ne})});ut("info",`${M.alias}: ${we.tagCount} tag candidate(s) and ${we.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(ne){const we=Ay(ne);await Nl(M.id,{analysisStatus:"failed",analysisMessage:we}).catch(()=>{}),ut("error",`${M.alias}: ${we}`)}finally{N(null),O(null),await Ot()}}},cn=()=>{Me.current.forEach(M=>{M.state!=="done"&&(M.cancelled=!0)}),ut("info","Remaining imports were cancelled. Finished files stay saved.")},en=async M=>{fe(null);try{await Qb([M]),x===M&&_(null),await Ot()}catch{ut("error","The PDF could not be deleted from local storage.")}},Xn=async()=>{fe(null),Me.current.forEach(M=>{M.cancelled=!0});try{await r2(a),_(null),await Ot()}catch{ut("error","Saved PDFs could not be cleared.")}},Oa=async M=>{try{const ne=await zo(M.id),we=URL.createObjectURL(new Blob([ne],{type:"application/pdf"})),xe=document.createElement("a");xe.href=we,xe.download=`original-source-${a==="PFD"?"pfd":"pid"}-pdf-${M.aliasNumber}.pdf`,document.body.appendChild(xe),xe.click(),xe.remove(),setTimeout(()=>URL.revokeObjectURL(we),4e3)}catch{ut("error","The original PDF could not be read for download.")}},Sn=async M=>{if(!(!M||!Z)){if(M.size>Ib){mt("The project title block is larger than the 100 MB local upload limit."),jt.current&&(jt.current.value="");return}if(qe&&!window.confirm("Replace the saved title block for this project in this browser? The previous local file will be replaced.")){jt.current&&(jt.current.value="");return}dt(!0),mt("");try{await kS(Z,a,M.name,new Uint8Array(await M.arrayBuffer())),Le(await ry(Z,a)),mt("Title block saved for this group in this browser.")}catch(ne){mt(ne instanceof Error?ne.message:"The project title block could not be saved locally.")}finally{dt(!1),jt.current&&(jt.current.value="")}}},fa=async()=>{if(!(!Z||!qe)&&window.confirm("Remove this client folder title block from this browser? Existing generated DWGs are not changed.")){mt("");try{await RS(Z,a),Le(null),mt("Group title block removed from this browser.")}catch(M){mt(M instanceof Error?M.message:"The project title block could not be removed.")}}},pa=async()=>{if(!vt.length){B("Select at least one PDF to include in the AutoCAD runner.");return}if(!(S!==null||F||ot||f||b)){ue(!0),B("");try{const M=vt.reduce((Ee,_e)=>Ee+_e.size,0),ne=Z?await NS(Z,a):null;if(Z&&!ne)throw new Error("Upload a standalone DWG title block for the selected client folder before preparing its AutoCAD runner.");if(M+(ne?.bytes??0)>rA)throw new Error("The saved source PDFs and client title block exceed the 500 MB limit for this local AutoCAD runner package.");const we=yn();if(ce&&!we.projects[ce])throw new Error("That project library is no longer available. Select a current project mapping or use Legends Library only.");const xe=[...we.companyItems,...ce?we.projects[ce]?.items??[]:[]],Ie=xe.filter(Ee=>Ee.category==="symbol"&&Ee.reviewStatus==="reviewed"&&Ee.sourceKind==="extracted-dwg"&&[a,"Shared"].includes(Ee.fields.find(_e=>_e.label==="Source discipline")?.value?.trim()??"")).flatMap(Ee=>{const _e=Ya=>Ee.fields.find(Dn=>Dn.label===Ya)?.value?.trim()??"",yt=_e("Source drawing ID"),Xt=_e("Block asset ID"),Nt=_e("Block name"),Et=_e("Fallback category"),Gn=_e("Target CAD layer"),Sa=_e("Source discipline");if(!yt||!Xt||!Nt||!Et||Sa!=="PFD"&&Sa!=="P&ID"&&Sa!=="Shared")return[];if(!Gn||Gn.toUpperCase()==="0")throw new Error(`Approved block "${Nt}" has no valid target CAD layer. Re-review it and select an approved non-zero layer.`);let Ta;if(Et.toLowerCase()==="valve"){const Ya=_e("Wipeout mask boundary");try{Ta=Xr(Ya)}catch(Dn){throw new Error(`Approved valve "${Nt}" has no valid reviewed body mask. Re-review the valve outline before preparing the AutoCAD runner. ${Dn instanceof Error?Dn.message:""}`)}}return[{sourceId:yt,blockAssetId:Xt,blockName:Nt,fallbackCategory:Et,targetLayer:Gn,discipline:Sa,...Ta?{wipeoutBoundary:Ta}:{},...Ee.scope==="project"&&Ee.projectId?{projectId:Ee.projectId}:{}}]}),Je=xe.flatMap(Ee=>{if(Ee.sourceKind!=="extracted-dwg"||Ee.reviewStatus!=="reviewed"||Ee.category!=="layer"&&Ee.category!=="textStyle"&&Ee.category!=="linetype")return[];const _e=Nt=>Ee.fields.find(Et=>Et.label===Nt)?.value?.trim()??"",yt=_e("Source discipline"),Xt=_e("CAD name");return!Xt||yt!=="PFD"&&yt!=="P&ID"&&yt!=="Shared"?[]:[{name:Xt,category:Ee.category,detail:_e("Extracted details"),discipline:yt,...Ee.scope==="project"&&Ee.projectId?{projectId:Ee.projectId}:{}}]}),Xe=[...new Set(Ie.map(Ee=>Ee.blockAssetId))],ha=await Promise.all(Xe.map(async Ee=>{const[_e,yt]=await Promise.all([Mb(Ee),qb(Ee)]);return{id:Ee,content:_e,format:yt.format??"DWG",...yt.geometryDescriptor?{geometryDescriptor:yt.geometryDescriptor}:{}}})),Ct=new Map(ha.map(Ee=>[Ee.id,Ee])),Ut=new Map((await af()).map(Ee=>[Ee.id,Ee])),ba=new Map;for(const Ee of Ie){const _e=Ct.get(Ee.blockAssetId)?.geometryDescriptor;if(_e?.primitives.length&&_e.bounds)continue;const yt=ba.get(Ee.sourceId)??[];yt.push(Ee),ba.set(Ee.sourceId,yt)}const Tn=[];for(const[Ee,_e]of ba){const yt=Ut.get(Ee),Xt=_e.map(Nt=>Ct.get(Nt.blockAssetId)).filter(Nt=>!!Nt);if(!yt||yt.format!=="DXF"){for(const Nt of Xt)Nt.geometryIndexError=yt?"SOURCE_DWG_REQUIRES_OVERVIEW_DXF":"SOURCE_NOT_AVAILABLE";continue}try{const Nt=await Jo(Ee);if(Nt.byteLength>50*1024*1024){for(const Sa of Xt)Sa.geometryIndexError="SOURCE_DXF_TOO_LARGE";continue}const Et=new TextDecoder("windows-1252").decode(Nt),Gn=Bl(Et,[...new Set(_e.map(Sa=>Sa.blockName))]);for(const Sa of _e){const Ta=Ct.get(Sa.blockAssetId);if(!Ta)continue;const Ya=Gn.get(Sa.blockName)?.geometryDescriptor;if(!Ya||!Ya.primitives.length||!Ya.bounds){Ta.geometryIndexError="BLOCK_NOT_FOUND_OR_UNSUPPORTED";continue}Ta.geometryDescriptor=Ya,Tn.push({id:Ta.id,sourceId:Ee,blockName:Sa.blockName,content:Ta.content,geometryDescriptor:Ya})}}catch{for(const Nt of Xt)Nt.geometryIndexError="SOURCE_DXF_UNREADABLE"}}Tn.length&&await nf(Tn);const Zr=new Map,zs=li(a==="PFD"?"pfd":"pid"),sc=rS(zs.flatMap(Ee=>Ee.rows.map(_e=>({stableId:_e.id,itemTag:_e.itemTag})))),Qr=jb(`${a}:${ce||"legends-default"}`);for(const Ee of zs)for(const _e of Ee.rows){if(!_e.sourcePdfId)continue;const yt=new Set([Number(_e.sourcePage),...(_e.sourceLocations??[]).map(Xt=>Xt.pageNumber)].filter(Xt=>Number.isInteger(Xt)&&Xt>0));for(const Xt of yt){const Nt=Zr.get(_e.sourcePdfId)??[];Nt.some(Et=>Et.stableId===_e.id&&Et.pageNumber===Xt)||(Nt.push({stableId:_e.id,itemTag:_e.itemTag,type:_e.type,pageNumber:Xt,fields:Object.fromEntries(mi.map(Et=>[Et,_e[Et]]))}),Zr.set(_e.sourcePdfId,Nt))}}const Jr=await K2(await Promise.all(vt.map(async Ee=>{const _e=await zo(Ee.id),yt=await Ty(_e);if(yt.toLowerCase()!==Ee.hash.toLowerCase())throw new Error(`${Ee.alias} changed in local storage. Re-upload it before creating the AutoCAD runner.`);return{pageCount:Ee.pageCount,pageSizesPoints:await iA(_e),pdfBytes:new Uint8Array(_e),sourceHash:yt,sourceId:Ee.id,sourceName:Ee.alias,originalName:Ee.originalName??Ee.alias,discipline:a,edeRecords:Zr.get(Ee.id)??[],attributeRules:Qr,conflictingTags:sc,...ce?{projectId:ce}:{},...Z?{titleBlockGroupId:Z}:{}}})),Ie,ha,Je,ne?{groupId:ne.projectId,workspaceType:ne.workspaceType,titleBlockId:ne.titleBlockId,titleBlockPath:ne.titleBlockPath,xrefName:ne.xrefName,expectedSize:ne.expectedSize,version:ne.version,content:ne.content}:void 0),za=URL.createObjectURL(Jr),An=document.createElement("a");An.href=za,An.download="autocad-runner-with-source-pdfs.zip",document.body.append(An),An.click(),An.remove(),window.setTimeout(()=>URL.revokeObjectURL(za),1e3);const bi=vt.reduce((Ee,_e)=>Ee+_e.pageCount,0);B(`Runner and ${vt.length} selected source PDF(s) downloaded. It can create ${bi} separate DWG file(s). ${Ie.filter(Ee=>(Ee.discipline===a||Ee.discipline==="Shared")&&(!Ee.projectId||Ee.projectId===ce)).length} reviewed symbol mapping(s) and ${Je.filter(Ee=>(Ee.discipline===a||Ee.discipline==="Shared")&&(!Ee.projectId||Ee.projectId===ce)).length} reviewed layer/text-style/linetype mapping(s) are available to this ${a} run. AutoCAD uses native 1:1 PDFIMPORT scale only when the PDF page size matches the selected title block; otherwise it asks for a known reference instead of guessing.`+(ne?" The selected client title block is included for 1:1 XREF attachment; keep its output companion DWG beside the generated pages.":""))}catch(M){B(M instanceof Error?M.message:"The AutoCAD runner could not be prepared. Try a smaller PDF batch.")}finally{ue(!1)}}},Dt=async M=>{const ne=Number(Qe);if(!Number.isFinite(ne)||ne<=0){Oe("Enter a scale multiplier greater than zero.");return}Ce(!0),Oe("Reading PDF vector geometry…");try{const{buildPdfDxfPackage:we}=await sn(async()=>{const{buildPdfDxfPackage:Xe}=await import("./pdf-dxf-export-D5mCrCv2.js");return{buildPdfDxfPackage:Xe}},[]),xe=await we((M?[M]:u).map(Xe=>({aliasNumber:Xe.aliasNumber,bytes:()=>zo(Xe.id)})),ne,(Xe,ha,Ct)=>{be.current&&Oe(`Creating DXF: PDF ${Xe} · page ${ha} of ${Ct}…`)},()=>be.current&&Re.current===a);if(!be.current||Re.current!==a)return;const Ne=URL.createObjectURL(xe.blob),Ie=document.createElement("a");Ie.href=Ne,Ie.download="pdf-dxf-pages.zip",document.body.append(Ie),Ie.click(),Ie.remove(),window.setTimeout(()=>URL.revokeObjectURL(Ne),1e3);const Je=xe.reports.length-xe.exported;Oe(`${xe.exported} DXF page(s) created${Je?`; ${Je} page(s) skipped—read the report`:""}. Raw vector output—not a verified exact PDF match. Compare each page with its source; library replacement and engineering scale are not verified.`)}catch(we){be.current&&Oe(we instanceof Error?we.message:"DXF export failed; no CAD output was confirmed.")}finally{be.current&&Ce(!1)}},We=q.useMemo(()=>u.find(M=>M.id===x)??null,[u,x]),j=q.useMemo(()=>{if(!x||!k)return[];try{const we=li(a==="PFD"?"pfd":"pid").find(xe=>xe.sourcePdfId===x)?.rows.find(xe=>xe.id===k);return(we?.sourceLocations??[]).filter(xe=>xe.pageNumber===te).map(xe=>({id:we.id,label:we.itemTag,location:xe}))}catch{return[]}},[a,te,x,H,k]),Q=u.reduce((M,ne)=>M+ne.pageCount,0),he=S!==null,Ue=Math.min(100,E/uf*100);return c.jsxs("section",{className:"pdf-workflow","aria-labelledby":"pdf-workflow-title","data-testid":"panel-pdf-workflow",children:[c.jsxs("div",{className:"pdf-panel-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"pdf-kicker",children:["PDF INPUT · LOCAL SOURCE FILES · ",a]}),c.jsx("h2",{id:"pdf-workflow-title",children:"Source PDF files"}),c.jsxs("p",{children:["Add PDFs for this ",a," workspace. They stay in this browser and appear as PDF 1, PDF 2, and so on."]})]}),c.jsxs("div",{className:"pdf-actions",children:[c.jsxs("label",{className:"btn primary pdf-add-control","data-testid":"label-add-pdfs",children:[c.jsx(Em,{size:15})," Add PDFs",c.jsx("input",{type:"file",accept:"application/pdf,.pdf",multiple:!0,"aria-label":"Add PDF files",disabled:he||f||!!b||!Ra,onChange:M=>{La(Array.from(M.currentTarget.files??[])),M.currentTarget.value=""},"data-testid":"input-add-pdfs"})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>fe({type:"all"}),disabled:!u.length,"aria-label":"Clear all saved PDFs","data-testid":"button-clear-pdfs",children:[c.jsx(ai,{size:14})," Clear all"]})]})]}),c.jsxs("div",{className:"pdf-trust-note","data-testid":"text-pdf-local-only",children:[c.jsx(Vn,{size:15}),c.jsxs("div",{className:"pdf-trust-copy",children:[c.jsxs("span",{children:[c.jsx("strong",{children:"Saved on this device only."})," PDFs are not uploaded, backed up, or synced. Clearing browser data removes them.",!Ra&&" New PDFs cannot be added in this browser because duplicate checking needs a secure connection."]}),c.jsxs("details",{className:"pdf-privacy-details",children:[c.jsx("summary",{children:"Privacy and scanned PDFs"}),c.jsxs("p",{children:["Original PDFs are not changed. Searchable text and scanned pages are read in this browser. The OCR code and language files may be downloaded, but the PDF itself is not sent. PDF aliases hide file names only; names and logos printed inside the pages remain visible."," ","Download an original if you need a separate copy."]})]})]})]}),c.jsx(Vx,{}),c.jsxs("div",{className:"pdf-storage-line","data-testid":"text-pdf-storage",children:[c.jsxs("span",{children:[Yo(E)," of ",Yo(uf)," used (all disciplines)"]}),c.jsxs("span",{children:["Limit ",Yo(df)," per PDF"]})]}),c.jsx("div",{className:"pdf-meter",role:"progressbar","aria-label":"Local storage used","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Ue),children:c.jsx("span",{style:{width:`${Ue}%`}})}),c.jsx("div",{style:{height:12}}),S&&c.jsxs("div",{className:"pdf-progress",role:"status","aria-live":"polite","data-testid":"status-pdf-progress",children:[c.jsxs("div",{className:"pdf-progress-top",children:[c.jsxs("span",{children:[c.jsx(ka,{size:12,className:"pdf-spin"})," ",S.phase==="checking"?`Checking and saving: ${S.done} of ${S.total} file(s) finished · ${S.pagesDone} page(s) verified`:`${S.currentAlias??"PDF"} · reading page ${S.pageNow??0} of ${S.pageTotal??0} for EDE`]}),c.jsx("button",{type:"button",className:"btn",onClick:cn,"data-testid":"button-cancel-import","aria-label":"Cancel remaining imports",children:"Cancel"})]}),c.jsx("div",{className:"pdf-meter",children:c.jsx("span",{style:{width:`${S.phase==="checking"?S.done/S.total*100:(S.done+(S.pageTotal?(S.pageNow??0)/S.pageTotal:0))/S.total*100}%`}})})]}),C.length>0&&c.jsx("ul",{className:"pdf-notes","aria-live":"polite","data-testid":"list-pdf-notes",children:C.map(M=>c.jsxs("li",{className:M.kind==="info"?"info":"",role:M.kind==="error"?"alert":void 0,"data-testid":`status-pdf-note-${M.id}`,children:[M.kind==="error"?c.jsx(xr,{size:14}):c.jsx(Hn,{size:14}),c.jsx("span",{children:M.text}),c.jsx("button",{type:"button","aria-label":"Dismiss message",onClick:()=>D(ne=>ne.filter(we=>we.id!==M.id)),children:c.jsx($u,{size:13})})]},M.id))}),u.length>0&&c.jsxs("div",{className:"pdf-batch-controls","data-testid":"pdf-batch-controls",children:[c.jsxs("div",{className:"pdf-batch-controls-copy",children:[c.jsx("strong",{children:"Choose PDFs for AutoCAD"}),c.jsxs("span",{"aria-live":"polite","data-testid":"text-pdf-batch-selection-count",children:[vt.length," of ",u.length," selected"]}),c.jsx("small",{children:"Only checked PDFs go into the runner. Select one or several."})]}),c.jsxs("div",{className:"pdf-batch-control-actions",children:[c.jsx("button",{type:"button",className:"btn",onClick:Jt,disabled:he||F,"data-testid":"button-select-all-pdfs",children:"Select all"}),c.jsx("button",{type:"button",className:"btn",onClick:Mt,disabled:he||F,"data-testid":"button-deselect-all-pdfs",children:"Deselect all"})]})]}),u.length>0&&vt.length===0&&c.jsx("p",{className:"pdf-batch-empty",role:"status","data-testid":"status-no-pdfs-selected",children:"No PDFs selected. Use Select all or tick a PDF row before downloading the runner."}),c.jsxs("div",{className:"pdf-queue","aria-label":"Saved PDF files",children:[Te&&c.jsxs("div",{className:"pdf-confirm",role:"alertdialog","aria-label":"Confirm delete","data-testid":"dialog-confirm-delete",children:[c.jsx("span",{children:Te.type==="all"?`Delete all ${u.length} saved ${a} PDF(s) from this device? This cannot be undone.`:"Delete this PDF from this device? This cannot be undone."}),c.jsx("button",{type:"button",className:"btn danger","data-testid":"button-confirm-delete",onClick:()=>Te.type==="all"?void Xn():void en(Te.id),children:"Delete"}),c.jsx("button",{type:"button",className:"btn","data-testid":"button-cancel-delete",onClick:()=>fe(null),children:"Keep"})]}),f?c.jsxs("div",{className:"pdf-queue-empty",role:"status","data-testid":"status-pdf-loading",children:[c.jsx(ka,{size:16,className:"pdf-spin"})," Loading saved PDFs"]}):b?c.jsxs("div",{className:"pdf-queue-empty",role:"alert","data-testid":"status-pdf-load-error",children:[c.jsx(xr,{size:16})," ",b,c.jsx("button",{type:"button",className:"btn",onClick:()=>{y(!0),Ot()},"data-testid":"button-retry-load",children:"Try again"})]}):u.length?u.map(M=>c.jsxs("div",{className:`pdf-file-row${M.id===x?" is-selected":""}`,"data-testid":`row-pdf-file-${M.id}`,children:[c.jsxs("button",{type:"button",className:"pdf-select",onClick:()=>{_(M.id),L(null),se(1)},"aria-label":`Preview ${M.alias}`,"aria-pressed":M.id===x,"data-testid":`button-select-pdf-${M.id}`,children:[c.jsx("span",{className:"pdf-file-icon",children:c.jsx(Hn,{size:17})}),c.jsxs("span",{className:"pdf-file-details",children:[c.jsx("strong",{className:"pdf-filename","data-testid":`text-pdf-name-${M.id}`,children:M.alias}),c.jsxs("span",{className:"pdf-file-meta",children:[M.pageCount," page(s) · ",Yo(M.size)," · saved locally"]}),c.jsxs("span",{className:"pdf-analysis-state","data-testid":`status-ede-${M.id}`,children:["EDE: ",M.analysisStatus==="needs-review"?`${M.analysisRecordCount??0} candidate(s) · review required`:M.analysisStatus==="no-tags"?"No tag candidates found":M.analysisStatus==="extracting"?T===M.id?"Extraction in progress":"Paused · resume available":M.analysisStatus==="failed"?"Extraction failed":M.analysisStatus==="paused"?"Paused · resume available":"Not extracted yet"," · AutoCAD: not connected"]}),M.analysisStatus==="failed"&&M.analysisMessage&&c.jsx("span",{className:"pdf-analysis-state",role:"status",children:M.analysisMessage})]})]}),c.jsxs("span",{className:"pdf-row-actions",children:[c.jsxs("label",{className:"pdf-batch-choice",children:[c.jsx("input",{type:"checkbox",checked:J2(p,M.id),disabled:he||F,onChange:()=>ja(M.id),"aria-label":`Process ${M.alias} in the AutoCAD batch`,"data-testid":`checkbox-batch-pdf-${M.id}`}),c.jsx("span",{children:"Process"})]}),M.analysisStatus!=="needs-review"&&T!==M.id&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:he,onClick:()=>{ra(M)},"data-testid":`button-extract-ede-${M.id}`,children:[c.jsx(Hn,{size:13})," ",M.analysisStatus==="failed"?"Retry EDE":M.analysisStatus==="paused"||M.analysisStatus==="extracting"?"Resume EDE":"Create EDE data"]}),(M.analysisStatus==="needs-review"||M.analysisStatus==="no-tags")&&c.jsx(da,{className:"btn pdf-extract-btn",href:`/workspace/${a==="PFD"?"pfd":"pid"}/engineering-data?source=${encodeURIComponent(M.id)}`,children:"Open EDE"}),M.analysisStatus==="needs-review"&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:he,onClick:()=>{ra(M)},"data-testid":`button-refresh-source-links-${M.id}`,children:[c.jsx(EE,{size:13})," Recheck tags & locations"]}),T===M.id&&c.jsxs("span",{className:"pdf-running-label",children:[c.jsx(ka,{size:13,className:"pdf-spin"})," Reading"]}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Preview ${M.alias}`,onClick:()=>{_(M.id),L(null),se(1)},"data-testid":`button-preview-pdf-${M.id}`,children:c.jsx(eE,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Download original source ${M.alias}`,onClick:()=>{Oa(M)},"data-testid":`button-download-pdf-${M.id}`,children:c.jsx(Hr,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn danger","aria-label":`Remove ${M.alias}`,onClick:()=>fe({type:"one",id:M.id}),"data-testid":`button-remove-pdf-${M.id}`,children:c.jsx($u,{size:15})})]})]},M.id)):c.jsxs("div",{className:"pdf-queue-empty","data-testid":"empty-pdf-queue",children:[c.jsx(Hn,{size:18}),c.jsxs("span",{children:["No saved PDFs for ",a]}),c.jsx("small",{children:"Add PDFs to keep them on this device. You can add several at once."})]})]}),c.jsx("div",{className:"pdf-page-summary",style:{marginTop:10},"data-testid":"text-pdf-page-summary",children:u.length?`${u.length} PDF(s) · ${Q} total page(s)`:he?"Working on your files":"No readable PDFs saved yet"}),u.length>=100&&c.jsxs("div",{className:"pdf-trust-note",role:"note","data-testid":"text-large-batch-resume",children:[c.jsx(Vn,{size:15}),c.jsxs("span",{children:["This batch contains ",u.length," PDFs and ",Q," pages. The AutoCAD runner tracks every page in a local journal beside the DWGs, so you can resume later with the same unchanged kit and output name. Progress is recorded on the Windows workstation, not in this browser."]})]}),We&&c.jsxs("div",{className:"pdf-source-box","data-testid":"panel-source-page",children:[c.jsxs("div",{className:"pdf-page-select",children:[c.jsx("label",{htmlFor:"pdf-page-picker",children:"Source page"}),c.jsx("select",{id:"pdf-page-picker",value:te,onChange:M=>se(Number(M.target.value)),"data-testid":"select-source-page","aria-label":"Select source page",children:Array.from({length:We.pageCount},(M,ne)=>c.jsxs("option",{value:ne+1,children:["Page ",ne+1]},ne+1))}),c.jsxs("span",{children:["of ",We.pageCount," in ",We.alias]})]}),c.jsx(vx,{fileId:We.id,alias:We.alias,pageCount:We.pageCount,page:te,onPageChange:se,loadBytes:zo,markers:j,onMarkerClick:M=>{const ne=a==="PFD"?"pfd":"pid";window.location.assign(`/workspace/${ne}/engineering-data?source=${encodeURIComponent(We.id)}&record=${encodeURIComponent(M)}`)}})]}),c.jsxs("div",{className:"pdf-capabilities",children:[c.jsxs("div",{className:"pdf-capability-storage pdf-dxf-export",children:[c.jsx("div",{className:"capability-heading",children:c.jsx("strong",{children:"Create DXF — no AutoCAD needed"})}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Scale multiplier · 1 = PDF paper size in mm"}),c.jsx("input",{type:"number",min:"0.000001",step:"any",value:Qe,onChange:M=>Ve(M.target.value),"aria-label":"DXF scale multiplier"})]}),c.jsx("button",{className:"btn primary",type:"button",disabled:!u.length||he||f||pe||F||!!b,onClick:()=>{Dt(We??void 0)},"data-testid":"button-export-dxf",children:pe?c.jsxs(c.Fragment,{children:[c.jsx(ka,{size:14,className:"pdf-spin"})," Creating DXF…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Hr,{size:14})," ",We?`${We.alias} · Download DXF pages`:"Download all DXF pages"]})}),We&&u.length>1&&c.jsx("button",{className:"btn",type:"button",disabled:he||f||pe||F||!!b,onClick:()=>{Dt()},"data-testid":"button-export-all-dxf",children:"All PDFs · Download DXF pages"}),c.jsx("p",{children:"One editable DXF per vector PDF page. Scanned pages are not automatically traced. This exports raw PDF geometry, not library-standard symbols. Source details may remain—review/redact before sharing."}),ye&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:ye}),c.jsx(nS,{})]}),c.jsxs("div",{className:"pdf-capability-convert",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"01"}),c.jsx("strong",{children:"Page check"})]}),c.jsx("div",{className:"pdf-page-summary","data-testid":"text-pdf-page-summary",children:u.length?`${u.length} PDF(s) · ${Q} total page(s)`:"Add PDFs to prepare an AutoCAD runner."})]}),c.jsxs("div",{className:"pdf-capability-storage",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"02"}),c.jsx("strong",{children:"Local AutoCAD runner"})]}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Approved CAD mappings"}),c.jsxs("select",{value:ce,disabled:ot,onChange:M=>z(M.target.value),"aria-label":"Approved CAD mappings for this runner",children:[c.jsx("option",{value:"",children:"Legends Library only"}),Se.map(M=>c.jsx("option",{value:M.id,children:M.label},M.id))]})]}),c.jsxs("div",{className:"runner-group-hint","aria-live":"polite","data-testid":"runner-mapping-inventory",children:[de?c.jsxs(c.Fragment,{children:[c.jsxs("strong",{children:[de.symbols," usable approved blocks · ",de.layers," layers · ",de.textStyles," text styles for ",a]}),de.symbols===0&&c.jsxs("p",{role:"status",children:["No compatible approved blocks: this kit cannot convert PDF symbols into approved CAD blocks. Approve ",a," or Shared symbols with an approved target layer first. Other-discipline symbols are not reused automatically."]}),de.textStyles===0&&c.jsx("p",{children:"Confirmed final text uses Arial Narrow at its existing height and position. Unconfirmed PDF text stays visible for review. An approved final text layer is required for loose text."}),de.otherDisciplineSymbols>0&&c.jsxs("p",{children:[de.otherDisciplineSymbols," approved symbol(s) belong to the other discipline and are excluded."]})]}):c.jsx("p",{children:"The mapping library could not be checked. Do not assume blocks or text formatting are available."}),c.jsx("button",{type:"button",className:"btn btn-ghost btn-small",onClick:()=>U(M=>M+1),children:"Refresh mapping counts"}),V&&c.jsxs("p",{role:"status",children:["Local mapping counts checked at ",V,". Refresh recounts saved approvals; it does not approve symbols."]})]}),c.jsxs("label",{className:"runner-group-choice",children:[c.jsxs("span",{children:[a," client folder for this batch"]}),c.jsxs("select",{value:Z,disabled:!At.length||ot||F,onChange:M=>l(M.target.value),"aria-label":`${a} client folder for title block`,children:[c.jsx("option",{value:"",children:At.length?`Choose a ${a} client folder`:`Create a ${a} client folder first`}),At.map(M=>c.jsx("option",{value:M.id,children:M.label},M.id))]})]}),c.jsx("p",{className:"runner-group-hint",children:"Choose the client folder for this batch. All selected PDFs will use its title block, so select PDFs from one project."}),Z?c.jsxs("div",{className:"runner-title-block","aria-label":"Project title block",children:[c.jsxs("div",{className:"runner-title-block-heading",children:[c.jsxs("strong",{children:["Client title block",i&&Z===s?` · ${i}`:""]}),gt?c.jsx("span",{children:"Checking this browser…"}):qe?c.jsxs("span",{children:["Saved locally · ",Yo(qe.bytes)]}):c.jsx("span",{children:"Required for this project"})]}),!gt&&!qe&&c.jsx("p",{children:"Upload a standalone .DWG for this project. The runner attaches it as a model-space XREF at (0,0,0), rotation 0, scale 1:1, preserving its layers. Use matching drawing units."}),c.jsx("input",{ref:jt,className:"runner-title-block-file",type:"file",accept:".dwg,application/acad","aria-label":"Choose project title block DWG",onChange:M=>{Sn(M.currentTarget.files?.[0])}}),c.jsxs("div",{className:"runner-title-block-actions",children:[c.jsx("button",{className:"btn",type:"button",disabled:gt||ot||F,onClick:()=>jt.current?.click(),children:ot?c.jsxs(c.Fragment,{children:[c.jsx(ka,{size:14,className:"pdf-spin"})," Saving locally…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Em,{size:14})," ",qe?"Replace title block DWG":"Upload title block DWG"]})}),qe&&c.jsx("button",{className:"btn",type:"button",disabled:ot||F,onClick:()=>{fa()},children:"Remove"})]}),c.jsxs("p",{className:"runner-title-block-note",children:["The file stays in this browser and is added only to this ",a," workspace’s local runner. Use the same project output folder for future batches: all page DWGs reuse one PROJECT_TITLE_BLOCK.dwg by relative XREF. The runner keeps a local scope marker beside it; upload the shared DWG once, not the marker. Existing numbered copies are only reported, never deleted."]}),qt&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:qt})]}):c.jsx("p",{className:"runner-title-block-empty",children:At.length?`Select a ${a} client folder above to upload or use its title block.`:"Create a Technology, Project or Proposal, and Client folder to use a client title block."}),c.jsx(sS,{scope:`${a}:${ce||"legends-default"}`},`${a}:${ce}`),c.jsx("button",{className:"btn primary",type:"button",disabled:!vt.length||he||f||F||gt||ot||!!Z&&!qe||!!b,"aria-describedby":"runner-description",onClick:()=>{pa()},"data-testid":"button-convert-to-dwg",children:F?c.jsxs(c.Fragment,{children:[c.jsx(ka,{size:14,className:"pdf-spin"})," Preparing…"]}):c.jsxs(c.Fragment,{children:[c.jsx(LE,{size:14})," Download AutoCAD batch runner"]})}),c.jsx("p",{id:"runner-description",children:"The ZIP contains only the checked PDFs, individually exported approved blocks, and—when a PFD/P&ID group is selected—its title block DWG. One or several PDFs can be selected. It does not include original mapping source DWGs. Run it in Windows AutoCAD. Unmatched symbols retain source geometry or use an approved same-category fallback with a red review cloud and source-page reference. A local journal tracks each page and lets the same unchanged batch resume without overwriting completed DWGs."}),ge&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:ge})]})]}),c.jsxs("div",{className:"pdf-final-status",role:"note","data-testid":"text-conversion-unavailable",children:[c.jsxs("strong",{children:[c.jsx(bE,{size:13,style:{verticalAlign:"-2px"}})," AutoCAD 2020 is not connected to this browser."]})," ","DXF vector export runs directly in this browser. Native DWG still requires the downloaded helper to run in Windows AutoCAD; the browser does not connect to AutoCAD."]}),c.jsx(JT,{discipline:a,onAddPdfs:La,clientFolderId:s||void 0,clientFolderLabel:i||void 0})]})}function Ly({discipline:a}){const[r]=q.useState(()=>{try{return{hierarchy:hx(),recovery:null}}catch(fe){const ce=fe instanceof Qo?fe:new Qo("Saved groups could not be loaded from this browser.");return{hierarchy:Uu(),recovery:{message:ce.message,rawValue:ce.rawValue}}}}),[s,i]=q.useState(r.hierarchy),[l,u]=q.useState(r.recovery),[g,p]=q.useState(""),[m,f]=q.useState(null),[y,b]=q.useState(""),[v,E]=q.useState(null),R=s[a],C=a==="pfd"?"PFD":"P&ID",D=zu(R,v),S=D&&(D.kind==="client"||D.kind==="legacy")?D.id:"",N=S?bb(R).find(fe=>fe.id===S)?.label??D?.name??"":"",T=fe=>E(fe||null);q.useEffect(()=>{if(!l)try{gx(s),p("")}catch(fe){p(fe instanceof Error?fe.message:"Groups could not be saved in this browser.")}},[s,l]);const O=(fe,ce,z=[])=>({id:globalThis.crypto?.randomUUID?.()??`group-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:fe,kind:ce,expanded:!0,children:z}),x=(fe,ce)=>{b(ce),f(fe)},_=()=>{const fe=O("New technology","technology",[O("Projects","projects"),O("Proposals","proposals")]);i(ce=>({...ce,[a]:[...ce[a],fe]})),x(fe.id,fe.name),E(fe.id)},k=fe=>{const ce=zu(R,fe);if(!ce)return;const z=ce.kind==="projects"?"project":ce.kind==="proposals"?"proposal":ce.kind==="project"||ce.kind==="proposal"?"client":null;if(!z)return;const me=O(z==="project"?"New project":z==="proposal"?"New proposal":"New client",z);i(Se=>({...Se,[a]:Ll(Se[a],fe,P=>({...P,expanded:!0,children:[...P.children,me]}))})),x(me.id,me.name),E(me.id)},L=fe=>{const ce=y.trim();if(!ce||ce.length>$l){p(`Folder names must be 1–${$l} characters.`),f(null);return}i(z=>({...z,[a]:Ll(z[a],fe,Z=>({...Z,name:ce}))})),f(null),p("")},H=()=>f(null),ee=fe=>i(ce=>({...ce,[a]:Ll(ce[a],fe,z=>({...z,expanded:!z.expanded}))})),te=fe=>{window.confirm(`Delete “${fe.name}” and all folders inside it? Saved title blocks and CAD sources are not deleted.`)&&(mb(fe,v)&&E(null),lv(fe,m)&&f(null),i(ce=>({...ce,[a]:gb(ce[a],fe.id)})))},se=()=>{if(l?.rawValue===null||l?.rawValue===void 0)return;const fe=new Blob([l.rawValue],{type:"application/json;charset=utf-8"}),ce=URL.createObjectURL(fe),z=document.createElement("a");z.href=ce,z.download="mapping-studio-hierarchy-backup.json",z.click(),window.setTimeout(()=>URL.revokeObjectURL(ce),1e3)},Te=()=>{if(window.confirm("Clear the unreadable hierarchy saved in this browser? This cannot be undone. Download a backup first if you may need the saved data."))try{window.localStorage.removeItem(Tf),window.localStorage.removeItem(pb),i(Uu()),u(null),p("")}catch{p("Browser storage could not be cleared. The saved hierarchy remains locked and unchanged.")}};return c.jsxs("main",{className:"hierarchy-page","data-discipline":a,children:[c.jsxs("header",{className:"hierarchy-topbar",children:[c.jsxs(da,{href:"/",className:"studio-wordmark","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),c.jsxs("div",{className:"hierarchy-top-actions",children:[c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Saved on this device"]}),c.jsxs(da,{href:"/",className:"btn subtle","data-testid":"link-discipline-selection",children:[c.jsx(Hy,{size:14})," Disciplines"]})]})]}),c.jsxs("div",{className:"hierarchy-frame",children:[c.jsxs("aside",{className:"hierarchy-sidebar",children:[c.jsx("div",{className:"sidebar-label",children:"DISCIPLINES"}),c.jsxs(da,{href:"/workspace/pfd",className:`discipline-nav ${a==="pfd"?"active":""}`,"data-testid":"nav-pfd",children:[c.jsx(pE,{size:16})," PFD"]}),c.jsxs(da,{href:"/workspace/pid",className:`discipline-nav ${a==="pid"?"active":""}`,"data-testid":"nav-pid",children:[c.jsx(Vo,{size:16})," P&ID"]}),c.jsxs("div",{className:"sidebar-local-note",children:[c.jsx(Vn,{size:14}),c.jsx("span",{children:"PFD and P&ID groups stay separate."})]})]}),c.jsxs("section",{className:"hierarchy-main","aria-label":`${C} workspace`,children:[c.jsxs("div",{className:"hierarchy-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[C," workspace"]}),c.jsx("h1",{children:C}),c.jsx("p",{children:"Organize technology, project/proposal and client folders. Common standards stay in the company library."})]}),c.jsxs("div",{className:"hierarchy-heading-actions",children:[c.jsxs(da,{href:`/workspace/${a}/engineering-data`,className:"btn edm-entry-link","data-testid":`link-engineering-data-${a}`,children:[c.jsx(wf,{size:14})," Engineering data"]}),c.jsxs("button",{className:"btn primary",onClick:_,disabled:!!l,"data-testid":"button-add-group",children:[c.jsx(ei,{size:15})," New technology"]})]})]}),l&&c.jsxs("div",{className:"hierarchy-recovery",role:"alert","data-testid":"status-hierarchy-recovery",children:[c.jsxs("div",{className:"recovery-title",children:[c.jsx(xr,{size:17}),c.jsx("strong",{children:"Saved groups need recovery"})]}),c.jsxs("p",{children:[l.message," Editing is disabled to protect the saved data."]}),l.rawValue!==null?c.jsx("button",{className:"btn",onClick:se,"data-testid":"button-download-hierarchy-backup",children:"Download raw backup"}):c.jsx("p",{className:"recovery-unavailable",children:"A raw backup is unavailable because browser storage could not be read."}),c.jsx("button",{className:"btn danger",onClick:Te,"data-testid":"button-clear-hierarchy-storage",children:"Clear saved data and start over"})]}),g&&!l&&c.jsxs("div",{className:"storage-banner",role:"alert","data-testid":"status-hierarchy-storage",children:[c.jsx(xr,{size:15}),g]}),c.jsxs("div",{className:"hierarchy-panel",children:[c.jsxs("div",{className:"tree-head",children:[c.jsx("span",{children:"TECHNOLOGY · PROJECTS · PROPOSALS · CLIENTS"}),c.jsxs("span",{"data-testid":"text-group-count",children:[Bu(R)," ",Bu(R)===1?"folder":"folders"]})]}),R.length===0?c.jsxs("div",{className:"hierarchy-empty","data-testid":"empty-hierarchy",children:[c.jsx("div",{className:"empty-folder",children:c.jsx(Iu,{size:23})}),c.jsx("strong",{children:l?"Folders are locked":"No technology folders yet"}),c.jsx("p",{children:l?"Recover or clear the saved data to continue.":"Create a technology folder, then add projects or proposals and their clients."}),!l&&c.jsxs("button",{className:"btn",onClick:_,"data-testid":"button-create-first-group",children:[c.jsx(ei,{size:14})," Create first technology"]})]}):c.jsx("div",{className:"tree-list",role:"tree","aria-label":`${C} project folders`,children:R.map(fe=>c.jsx(cv,{node:fe,depth:0,selectedId:v,editingId:m,editName:y,setEditName:b,onSelect:E,onToggle:ee,onAdd:k,onRename:x,onCommit:L,onCancel:H,onDelete:te,disabled:!!l},fe.id))})]}),S&&c.jsxs("div",{className:"hierarchy-client-context",role:"status","data-testid":"selected-client-folder",children:[c.jsx(Iu,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:N})," selected. Its title block and client source library will be used below."]})]}),c.jsxs("div",{className:"hierarchy-footnote",children:[c.jsx(Vn,{size:14}),c.jsx("span",{children:"Saved in this browser. PFD and P&ID folder trees stay separate."})]}),c.jsx(lA,{discipline:a==="pfd"?"PFD":"P&ID",groups:R,selectedClientId:S,selectedClientLabel:N,onSelectClient:T},a)]})]})]})}function lv(a,r){return r!==null&&(a.id===r||a.children.some(s=>lv(s,r)))}function cv({node:a,depth:r,selectedId:s,editingId:i,editName:l,setEditName:u,onSelect:g,onToggle:p,onAdd:m,onRename:f,onCommit:y,onCancel:b,onDelete:v,disabled:E}){const R=i===a.id,C=["projects","proposals","project","proposal"].includes(a.kind),D=!["projects","proposals"].includes(a.kind),S=a.kind==="projects"?"Add project":a.kind==="proposals"?"Add proposal":a.kind==="project"||a.kind==="proposal"?"Add client":"Add folder",N={technology:"Technology",projects:"Projects",proposals:"Proposals",project:"Project",proposal:"Proposal",client:"Client",legacy:"Existing group"},T=q.useRef(null),O=()=>{T.current!==a.id&&(T.current=a.id,y(a.id))},x=()=>{T.current!==a.id&&(T.current=a.id,b())};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`tree-row ${s===a.id?"selected":""}`,role:"treeitem","aria-expanded":a.children.length?a.expanded:void 0,"aria-level":r+1,style:{"--tree-depth":r},"data-testid":`tree-group-${a.id}`,children:[c.jsx("button",{className:"tree-toggle","aria-label":`${a.expanded?"Collapse":"Expand"} ${a.name}`,disabled:E,onClick:()=>p(a.id),"data-testid":`button-toggle-group-${a.id}`,children:a.expanded?c.jsx(Er,{size:15}):c.jsx(vf,{size:15})}),c.jsx(Iu,{className:"tree-folder",size:16}),R?c.jsx("input",{autoFocus:!0,maxLength:$l,className:"tree-rename-input","aria-label":"Folder name",value:l,disabled:E,onChange:_=>u(_.target.value),onFocus:()=>{T.current=null},onBlur:O,onKeyDown:_=>{_.key==="Enter"&&O(),_.key==="Escape"&&(_.preventDefault(),x())},"data-testid":`input-rename-group-${a.id}`}):c.jsx("button",{className:"tree-name",disabled:E,onClick:()=>g(a.id),onDoubleClick:()=>D&&f(a.id,a.name),title:"Select folder; double-click to rename","data-testid":`button-select-group-${a.id}`,children:a.name}),c.jsx("span",{className:"tree-kind-badge",children:N[a.kind]}),c.jsxs("span",{className:"tree-actions",children:[C&&c.jsx("button",{"aria-label":`${S} under ${a.name}`,title:S,disabled:E,onClick:()=>m(a.id),"data-testid":`button-add-subgroup-${a.id}`,children:c.jsx(ei,{size:14})}),D&&c.jsx("button",{"aria-label":`Rename ${a.name}`,title:"Rename folder",disabled:E,onClick:()=>f(a.id,a.name),"data-testid":`button-rename-group-${a.id}`,children:c.jsx(AE,{size:13})}),D&&c.jsx("button",{"aria-label":`Delete ${a.name}`,title:"Delete folder",disabled:E,onClick:()=>v(a),"data-testid":`button-delete-group-${a.id}`,children:c.jsx(ai,{size:13})})]})]}),a.expanded&&a.children.map(_=>c.jsx(cv,{node:_,depth:r+1,selectedId:s,editingId:i,editName:l,setEditName:u,onSelect:g,onToggle:p,onAdd:m,onRename:f,onCommit:y,onCancel:b,onDelete:v,disabled:E},_.id))]})}function cA({order:a,hidden:r,onChange:s}){const i=(l,u)=>{const g=[...a];[g[l],g[l+u]]=[g[l+u],g[l]],s(g,r)};return c.jsxs("details",{className:"edm-column-picker",children:[c.jsxs("summary",{children:["Columns (",a.length-r.length,")"]}),c.jsxs("div",{className:"edm-column-options",children:[c.jsx("p",{children:"Use these checkboxes to show or hide columns. The filter icon in each heading filters row values, including (Blanks), and does not hide the column."}),a.map((l,u)=>c.jsxs("div",{className:"edm-column-option",children:[c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:!r.includes(l),"aria-label":`Show ${Rt[l]}`,disabled:!r.includes(l)&&r.length===a.length-1,onChange:()=>s(a,r.includes(l)?r.filter(g=>g!==l):[...r,l])}),Rt[l]]}),c.jsx("button",{type:"button",disabled:u===0,onClick:()=>i(u,-1),"aria-label":`Move ${Rt[l]} up`,children:c.jsx(zw,{size:14})}),c.jsx("button",{type:"button",disabled:u===a.length-1,onClick:()=>i(u,1),"aria-label":`Move ${Rt[l]} down`,children:c.jsx(Mw,{size:14})})]},l)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>s([...Yn],[]),children:"Reset columns"})]})]})}function Oy(a){const r=Math.min(272,window.innerWidth-16),s=Math.min(360,window.innerHeight-16),i=Math.max(8,Math.min(a.left,window.innerWidth-r-8)),l=a.bottom+4;return{top:l+s<=window.innerHeight-8?l:Math.max(8,a.top-s-4),left:i}}function _y({label:a,options:r,selectedValues:s,onApply:i}){const l=q.useRef(null),u=q.useRef(null),g=q.useRef(null),[p,m]=q.useState(!1),[f,y]=q.useState(null),[b,v]=q.useState([]),[E,R]=q.useState(""),C=s!==void 0,D=q.useMemo(()=>r.map(k=>k.value),[r]),S=q.useMemo(()=>{const k=E.trim().toLowerCase();return k?r.filter(L=>(L.value||"(Blanks)").toLowerCase().includes(k)):r},[r,E]),N=r.reduce((k,L)=>k+Number(b.includes(L.value)),0),T=r.length>0&&N===r.length;q.useEffect(()=>{g.current&&(g.current.indeterminate=N>0&&N<r.length)},[b,r.length,N]),q.useEffect(()=>{if(!p)return;const k=()=>{const ee=l.current?.getBoundingClientRect();ee&&y(Oy(ee))},L=ee=>{const te=ee.target;!u.current?.contains(te)&&!l.current?.contains(te)&&m(!1)},H=ee=>{ee.key==="Escape"&&m(!1)};return k(),document.addEventListener("pointerdown",L),document.addEventListener("keydown",H),window.addEventListener("resize",k),window.addEventListener("scroll",k,!0),()=>{document.removeEventListener("pointerdown",L),document.removeEventListener("keydown",H),window.removeEventListener("resize",k),window.removeEventListener("scroll",k,!0)}},[p]);const O=()=>{if(p){m(!1);return}const k=l.current?.getBoundingClientRect();k&&y(Oy(k)),v(s?[...s]:D),R(""),m(!0)},x=k=>{v(L=>L.includes(k)?L.filter(H=>H!==k):[...L,k])},_=()=>{i(b),m(!1)};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{ref:l,type:"button",className:`edm-column-filter-trigger${C?" active":""}`,title:`${C?"Filtered":"Filter"} ${a}`,"aria-label":`${C?"Edit filter for":"Filter"} ${a}`,"aria-expanded":p,onClick:O,"data-testid":`button-filter-${a.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[c.jsx(uE,{size:12}),c.jsx(Er,{size:10})]}),p&&f&&Gl.createPortal(c.jsxs("div",{ref:u,className:"edm-column-filter-menu",style:{top:f.top,left:f.left},role:"dialog","aria-label":`${a} filter`,"data-testid":"menu-column-filter",children:[c.jsxs("strong",{className:"edm-column-filter-title",children:["Filter: ",a]}),c.jsxs("label",{className:"edm-column-filter-search",children:[c.jsx(ti,{size:14}),c.jsx("input",{value:E,onChange:k=>R(k.target.value),placeholder:"Search values…","aria-label":`Search ${a} values`})]}),c.jsxs("label",{className:"edm-column-filter-select-all",children:[c.jsx("input",{ref:g,type:"checkbox",checked:T,disabled:!r.length,onChange:()=>v(T?[]:D)}),c.jsx("span",{children:"Select all"})]}),c.jsxs("div",{className:"edm-column-filter-options",role:"group","aria-label":`${a} values`,children:[!S.length&&c.jsx("p",{className:"edm-column-filter-empty",children:r.length?"No matching values.":"No values in this drawing yet."}),S.map(k=>c.jsxs("label",{className:"edm-column-filter-option",children:[c.jsx("input",{type:"checkbox",checked:b.includes(k.value),onChange:()=>x(k.value)}),c.jsx("span",{children:k.value||"(Blanks)"}),c.jsx("small",{children:k.count})]},JSON.stringify(k.value)))]}),c.jsxs("div",{className:"edm-column-filter-actions",children:[c.jsx("button",{type:"button",className:"edm-column-filter-clear",disabled:!C,onClick:()=>{i(void 0),m(!1)},children:"Clear filter"}),c.jsx("span",{}),c.jsx("button",{type:"button",onClick:()=>m(!1),children:"Cancel"}),c.jsx("button",{type:"button",className:"apply",disabled:!r.length,onClick:_,children:"Apply"})]})]}),document.body)]})}function dv(a){return{headers:["#","Object type",...a.fields.map(r=>Rt[r])],rows:a.rows.map((r,s)=>[s+1,r.type,...a.fields.map(i=>bn(r,i))])}}function uv(a){return a.groups.map(r=>{const s=new Map;for(const i of a.rows){const l=bn(i,r)||"—";s.set(l,(s.get(l)??0)+1)}return{field:r,label:Rt[r],values:[...s].map(([i,l])=>({value:i,count:l}))}})}function dA(a){const r=dv(a);return ov(r.headers,r.rows)}async function uA(a,r){const{default:s}=await sn(async()=>{const{default:y}=await import("./exceljs.min-DbJi6lJ7.js").then(b=>b.e);return{default:y}},__vite__mapDeps([2,1])),i=new s.Workbook;i.creator="gaurav.cbiindia";const l=i.addWorksheet("Engineering data",{pageSetup:{orientation:"landscape",fitToPage:!0,fitToWidth:1,fitToHeight:0}}),u=dv(a),g=uv(a),p=u.headers.length;["Engineering Data Editor",`${r.discipline} · ${r.drawing}${r.revision?` · ${r.revision}`:""} · ${a.rows.length} records`,`Object type: ${r.filter} · Search: ${r.search||"(none)"} · Sort: ${r.sort}`,...g.map(y=>{const b=y.values.map(({value:v,count:E})=>`${v} (${E})`).join(" · ");return`${y.label}: ${b.length>1500?b.slice(0,1500)+"… (see Group summaries sheet)":b}`})].forEach((y,b)=>{const v=l.addRow([y]);l.mergeCells(v.number,1,v.number,p),v.height=b===0?30:32,v.getCell(1).font={name:"Calibri",size:b===0?16:10,bold:b===0,color:{argb:b===0?"FFF0F0E8":"FF405A55"}},v.getCell(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:b===0?"FF203940":"FFF9F8F2"}},v.getCell(1).alignment={vertical:"middle",wrapText:!0}});const f=l.addRow(u.headers);if(f.height=30,f.eachCell(y=>{y.font={name:"Calibri",bold:!0,size:10,color:{argb:"FF405A55"}},y.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFF0F1E9"}},y.alignment={vertical:"middle",wrapText:!0},y.border={bottom:{style:"thin",color:{argb:"FFD9DED5"}}}}),u.rows.forEach((y,b)=>{const v=l.addRow(y);v.height=30,v.eachCell({includeEmpty:!0},(E,R)=>{E.numFmt=R===1?"0":"@",E.font={name:R>2&&a.fields[R-3]==="itemTag"?"Consolas":"Calibri",size:10,color:{argb:"FF405A55"}},E.alignment={vertical:"middle",wrapText:!0},E.fill={type:"pattern",pattern:"solid",fgColor:{argb:b%2?"FFF2F5EE":"FFFBFAF6"}},E.border={right:{style:"thin",color:{argb:"FFECEEE8"}},bottom:{style:"thin",color:{argb:"FFE7E9E2"}}}})}),l.columns.forEach((y,b)=>{const v=a.fields[b-2];y.width=b===0?7:b===1?18:v==="notes"?52:v==="description"||v==="connection"?38:Math.max(18,u.headers[b].length+3)}),l.views=[{state:"frozen",ySplit:f.number,xSplit:2}],l.autoFilter={from:{row:f.number,column:1},to:{row:f.number+u.rows.length,column:p}},l.pageSetup.printTitlesRow=`${f.number}:${f.number}`,l.headerFooter.oddFooter="© gaurav.cbiindia | &P of &N",g.length){const y=i.addWorksheet("Group summaries");y.columns=[{header:"Group field",width:25},{header:"Value",width:42},{header:"Records",width:12}],g.forEach(b=>b.values.forEach(({value:v,count:E})=>y.addRow([b.label,v,E]))),y.getRow(1).font={bold:!0},y.views=[{state:"frozen",ySplit:1}],y.autoFilter="A1:C1"}return new Uint8Array(await i.xlsx.writeBuffer())}function fv(a,r){const s=String(r==="type"?a.type:bn(a,r));return s.trim()?s:""}function fA(a,r){const s=new Map;for(const i of a){const l=fv(i,r);s.set(l,(s.get(l)??0)+1)}return[...s.entries()].map(([i,l])=>({value:i,count:l})).sort((i,l)=>i.value===""?l.value===""?0:1:l.value===""?-1:i.value.localeCompare(l.value,void 0,{numeric:!0,sensitivity:"base"}))}function Py(a,r){return Object.entries(r).every(([s,i])=>i===void 0||i.includes(fv(a,s)))}const pA=["All types",...ii],hA=["type",...Yn],pv="pid-mapping-studio:engineering-column-widths:v1",gf=44,mf=720,gA=a=>a==="rowNumber"?44:a==="type"?154:a==="itemTag"?250:a==="notes"?300:a==="description"||a==="stableId"?220:a==="drawingRef"?180:a==="sourcePage"?100:a==="reviewStatus"?150:136;function mA(){try{const a=JSON.parse(window.localStorage.getItem(pv)??"{}");return!a||typeof a!="object"||Array.isArray(a)?{}:Object.fromEntries(Object.entries(a).filter(r=>typeof r[1]=="number"&&Number.isFinite(r[1])).map(([r,s])=>[r,Math.max(gf,Math.min(mf,s))]))}catch{return{}}}function Iy(a){try{window.localStorage.setItem(pv,JSON.stringify(a))}catch{}}const yA=a=>a.split(/\s+/).map(r=>r[0]).join("").slice(0,2).toUpperCase();function qy({discipline:a}){const[r]=q.useState(()=>{try{return{drawings:li(a),raw:$s(a),error:""}}catch{return{drawings:[],raw:null,error:"Saved engineering data could not be read. Editing is blocked to protect it. Export a raw backup before recovery."}}}),[s,i]=q.useState(r.drawings),l=q.useRef(s),u=q.useRef(!0),g=q.useRef(r.raw),[p,m]=q.useState(s[0]?.id??""),f=s.find(j=>j.id===p)??s[0]??{id:"",name:"No drawing selected",revision:"",rows:[]};q.useEffect(()=>{const j=new URLSearchParams(window.location.search).get("source"),Q=j?s.find(he=>he.sourcePdfId===j):void 0;Q&&Q.id!==p&&m(Q.id)},[s,p]),q.useEffect(()=>{P({}),_(""),ee("All types"),se(0)},[p,a]);const y=f.rows,[b,v]=q.useState(y[0]?.id??""),[E,R]=q.useState(""),[C,D]=q.useState("Rev 0"),[S,N]=q.useState(""),[T,O]=q.useState("Equipment"),[x,_]=q.useState(""),[k,L]=q.useState(""),[H,ee]=q.useState("All types"),[te,se]=q.useState(0),[Te,fe]=q.useState(12),[ce,z]=q.useState({field:"itemTag",direction:1}),[Z,me]=q.useState([]),[Se,P]=q.useState({}),[J,U]=q.useState([...Yn]),[V,oe]=q.useState([]),[de,ve]=q.useState(mA),qe=q.useRef(de),Le=q.useRef(null),gt=q.useRef(null),[nt,ot]=q.useState("records"),dt=J.filter(j=>!V.includes(j)),qt=["rowNumber","type",...dt],mt=j=>de[j]??gA(j),F=qt.reduce((j,Q)=>j+mt(Q),0),[ue,ge]=q.useState(!1),[B,pe]=q.useState(""),[Ce,ye]=q.useState(""),[Oe,Qe]=q.useState(r.error),Ve=(j,Q,he=!1)=>{const Ue={...qe.current,[j]:Math.max(gf,Math.min(mf,Math.round(Q)))};qe.current=Ue,ve(Ue),he&&Iy(Ue)},Me=j=>{const Q=document.createElement("canvas").getContext("2d"),he=Le.current?getComputedStyle(Le.current).font:"";Q&&(Q.font=he||"12px sans-serif");const Ue=j==="rowNumber"?"#":j==="type"?"Object type":Rt[j],M=j==="rowNumber"?[]:j==="type"?y.map(Ne=>Ne.type):y.map(Ne=>bn(Ne,j)),ne=Ne=>Ne.split(/\r?\n/).reduce((Ie,Je)=>Math.max(Ie,Q?Q.measureText(Je||"—").width:Je.length*7),0),we=M.reduce((Ne,Ie)=>Math.max(Ne,ne(Ie)),ne(Ue));Ve(j,we+(j==="itemTag"?158:j==="rowNumber"?18:54),!0)},jt=(j,Q)=>{Q.preventDefault(),Q.stopPropagation(),Q.currentTarget.setPointerCapture(Q.pointerId),gt.current={column:j,pointerId:Q.pointerId,startX:Q.clientX,startWidth:mt(j)}},be=(j,Q)=>{const he=gt.current;!he||he.column!==j||he.pointerId!==Q.pointerId||(Q.preventDefault(),Ve(j,he.startWidth+Q.clientX-he.startX))},et=(j,Q)=>{const he=gt.current;!he||he.column!==j||he.pointerId!==Q.pointerId||(gt.current=null,Iy(qe.current),Q.currentTarget.hasPointerCapture(Q.pointerId)&&Q.currentTarget.releasePointerCapture(Q.pointerId))},rt=(j,Q)=>{Q.key==="Enter"?(Q.preventDefault(),Me(j)):(Q.key==="ArrowLeft"||Q.key==="ArrowRight")&&(Q.preventDefault(),Ve(j,mt(j)+(Q.key==="ArrowRight"?16:-16),!0))},Qt=(j,Q)=>c.jsx("span",{className:"edm-column-resize-handle",role:"separator","aria-orientation":"vertical","aria-label":`Resize ${Q} column`,"aria-valuenow":mt(j),"aria-valuemin":gf,"aria-valuemax":mf,title:"Drag to resize · double-click to fit text",tabIndex:0,onPointerDown:he=>jt(j,he),onPointerMove:he=>be(j,he),onPointerUp:he=>et(j,he),onPointerCancel:he=>et(j,he),onDoubleClick:he=>{he.preventDefault(),he.stopPropagation(),Me(j)},onKeyDown:he=>rt(j,he),"data-testid":`resize-column-${j}`});q.useEffect(()=>{u.current=!0;const j=Q=>{if(Q.key===`pid-mapping-studio:engineering-workspace:v2:${a}`)try{const he=li(a);l.current=he,i(he),g.current=$s(a),Qe("")}catch{Qe("Saved data changed and could not be read. Reload this page before editing.")}};return window.addEventListener("storage",j),()=>{u.current=!1,window.removeEventListener("storage",j)}},[a]);const Re=y.find(j=>j.id===b)??null;q.useEffect(()=>{const j=new URLSearchParams(window.location.search).get("record");if(!j)return;let Q=j;try{Q=Lf(j)}catch{}const he=y.find(Ue=>Ue.id===Q);he&&he.id!==b&&v(he.id)},[y,b]);const Ra=q.useMemo(()=>{const j=x.trim().toLowerCase();return Object.fromEntries(hA.map(Q=>{const he={...Se};delete he[Q];const Ue=y.filter(M=>(H==="All types"||M.type===H)&&(!j||Object.values(M).join(" ").toLowerCase().includes(j))&&Py(M,he));return[Q,fA(Ue,Q)]}))},[y,x,H,Se]),At=q.useMemo(()=>{const j=x.trim().toLowerCase();return y.filter(Q=>(H==="All types"||Q.type===H)&&(!j||Object.values(Q).join(" ").toLowerCase().includes(j))&&Py(Q,Se))},[y,x,H,Se]),vt=q.useMemo(()=>[...At].sort((j,Q)=>{for(const he of Z){const Ue=bn(j,he).localeCompare(bn(Q,he)||"—",void 0,{numeric:!0});if(Ue)return Ue}return bn(j,ce.field).localeCompare(bn(Q,ce.field),void 0,{numeric:!0})*ce.direction}),[At,ce,Z]),Jt=Math.max(1,Math.ceil(vt.length/Te)),Mt={fields:dt,rows:vt,groups:Z},ja=uv(Mt),ut=vt.slice(te*Te,(te+1)*Te);q.useEffect(()=>{ut.length&&!ut.some(j=>j.id===b)?v(ut[0].id):!ut.length&&b&&v("")},[ut,b]),q.useEffect(()=>se(j=>Math.min(j,Jt-1)),[Jt]);const Ot=j=>{if(r.error)return!1;try{return g.current=pf(a,j,g.current),l.current=j,i(j),Qe(""),!0}catch(Q){return Qe(Q instanceof Error&&Q.name!=="QuotaExceededError"?Q.message:"Device storage is full or unavailable. This change was not saved. Download a backup and free space."),!1}},$t=j=>Ot(s.map(Q=>Q.id===f.id?{...Q,rows:j}:Q)),wt=(j,Q,he)=>{$t(y.map(Ue=>Ue.id===j?{...Ue,[Q]:he}:Ue))},La=j=>{j.preventDefault();const Q=E.trim();if(!Q||s.some(Ue=>Ue.name.toLowerCase()===Q.toLowerCase())){Qe("Enter a new, unique drawing reference.");return}const he={id:crypto.randomUUID(),name:Q,revision:C.trim()||"Rev 0",rows:[]};Ot([...s,he])&&(m(he.id),R(""),se(0))},ra=j=>{if(j.preventDefault(),!f.id)return;const Q=Of(T,S,f.name);if($t([...y,Q])){N(""),_(""),ee("All types"),z({field:"itemTag",direction:1}),me([]);const he=[...y,Q].sort((Ue,M)=>Ue.itemTag.localeCompare(M.itemTag,void 0,{numeric:!0})).findIndex(Ue=>Ue.id===Q.id);se(Math.floor(he/Te)),v(Q.id)}},cn=()=>{!Re||!window.confirm(`Delete record ${Re.itemTag}? This cannot be undone without a backup.`)||$t(y.filter(j=>j.id!==Re.id))&&v("")},en=async(j,Q)=>{if(j.size>5*1024*1024){Qe("Import a file smaller than 5 MB.");return}try{const he=f.id,Ue=await j.text();if(!u.current)return;if(Q==="csv"){const M=l.current.find(we=>we.id===he);if(!M)throw new Error("The target drawing no longer exists. Choose a drawing and try again.");const ne=C2(Ue,M.name);Ot(l.current.map(we=>we.id===he?{...we,rows:[...we.rows,...ne]}:we))&&(_(""),ee("All types"),se(0))}else{const M=S2(Ue,a);Ot([...l.current,...M])&&(m(M[0]?.id??f.id),se(0))}}catch(he){Qe(he instanceof Error?he.message:"This file could not be imported. No records were changed.")}},Xn=j=>z(Q=>({field:j,direction:Q.field===j&&Q.direction===1?-1:1})),Oa=(j,Q)=>{const he=Ra[j].map(M=>M.value),Ue=Q!==void 0&&he.every(M=>Q.includes(M))&&Q.length===he.length;P(M=>{const ne={...M};return Q===void 0||Ue?delete ne[j]:ne[j]=Q,ne}),se(0)},Sn=j=>me(Q=>Q.includes(j)?Q:[...Q,j]),fa=j=>{j.preventDefault();const Q=j.dataTransfer.getData("text/engineering-field");Yn.includes(Q)&&Sn(Q)},pa=j=>{const Q=Math.max(0,Math.min(Jt-1,j));se(Q);const he=vt.slice(Q*Te,(Q+1)*Te)[0];he&&v(he.id)},Dt=j=>{m(j),_(""),se(0)},We=async(j,Q=!1)=>{if(ue)return;const he=Q?{fields:Yn,rows:s.flatMap(ne=>ne.rows),groups:[]}:Mt,Ue=Q?"all-records":"current-view",M={discipline:a==="pid"?"P&ID":"PFD",drawing:Q?"All drawings":f.name,revision:Q?void 0:f.revision,filter:Q?"All types":H,search:Q?"":x.trim(),sort:Q?"Drawing order":`${Rt[ce.field]} ${ce.direction===1?"ascending":"descending"}`};ge(!0),pe(""),ye("");try{const ne=j==="csv"?dA(he):await uA(he,M);kl(`engineering-${a}-${Ue}.${j}`,ne,j==="csv"?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),u.current&&pe(`Prepared ${j==="csv"?"CSV":"Excel"}: ${he.rows.length} records · ${Q?"all records":"current view"}.`)}catch(ne){u.current&&ye(ne instanceof Error?ne.message:"Export could not be prepared. Your saved records have not changed.")}finally{u.current&&ge(!1)}};return c.jsxs("main",{className:"edm-page","data-mobile-panel":nt,children:[c.jsxs("header",{className:"edm-topbar",children:[c.jsxs(da,{href:`/workspace/${a}`,className:"edm-brand","data-testid":"link-edm-workspace",children:[c.jsx("span",{className:"edm-mark",children:"ED"}),c.jsxs("span",{children:["Engineering Data Manager",c.jsx("small",{children:"Mapping Studio / browser-local workspace"})]})]}),c.jsxs("div",{className:"edm-toplinks",children:[c.jsxs("nav",{className:"edm-disciplines","aria-label":"Discipline navigation",children:[c.jsx(da,{href:"/workspace/pfd/engineering-data",className:a==="pfd"?"active":"","data-testid":"link-edm-pfd",children:"PFD"}),c.jsx(da,{href:"/workspace/pid/engineering-data",className:a==="pid"?"active":"","data-testid":"link-edm-pid",children:"P&ID"})]}),c.jsxs("span",{className:"edm-local",children:[c.jsx(Vn,{size:13}),"Saved on this device"]}),c.jsxs(da,{href:`/workspace/${a}`,className:"btn subtle","aria-label":"Back to the PFD or P&ID workspace","data-testid":"link-back-workspace",children:[c.jsx(Hy,{size:13})," Workspace"]})]})]}),c.jsxs("nav",{className:"edm-mobile-tabs","aria-label":"Engineering data panels",children:[c.jsx("button",{type:"button",className:nt==="catalog"?"active":"","aria-pressed":nt==="catalog",onClick:()=>ot("catalog"),"data-testid":"tab-edm-catalog",children:"Catalog"}),c.jsx("button",{type:"button",className:nt==="records"?"active":"","aria-pressed":nt==="records",onClick:()=>ot("records"),"data-testid":"tab-edm-records",children:"Records"}),c.jsx("button",{type:"button",className:nt==="properties"?"active":"","aria-pressed":nt==="properties",onClick:()=>ot("properties"),"data-testid":"tab-edm-properties",children:"Properties"})]}),c.jsxs("div",{className:"edm-titlebar",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"edm-eyebrow",children:[a==="pfd"?"PROCESS FLOW DIAGRAM":"PIPING & INSTRUMENTATION"," / YOUR RECORDS"]}),c.jsx("h1",{children:"Engineering data"}),c.jsx("p",{children:"Add or import your records. PFD and P&ID stay separate on this device."})]}),c.jsxs("div",{className:"edm-object-select",children:[c.jsx("span",{children:"Object type"}),c.jsx("select",{value:H,onChange:j=>{ee(j.target.value),se(0)},"aria-label":"Object type filter","data-testid":"select-object-type",children:pA.map(j=>c.jsx("option",{children:j},j))}),c.jsx(Er,{size:14})]})]}),c.jsxs("div",{className:"edm-file-actions",children:[c.jsxs("button",{className:"btn",disabled:!s.length,onClick:()=>kl(`engineering-${a}-backup.json`,x2(a,s),"application/json"),"data-testid":"button-backup-data",children:[c.jsx(Hr,{size:14})," Download backup"]}),c.jsxs("label",{className:"btn",children:[c.jsx(Vr,{size:14})," Import backup",c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Import engineering backup",disabled:!!r.error,onChange:j=>{const Q=j.currentTarget.files?.[0];j.currentTarget.value="",Q&&en(Q,"backup")}})]}),c.jsx("button",{className:"btn",disabled:ue||!s.some(j=>j.rows.length),onClick:()=>{We("csv",!0)},"data-testid":"button-report-all",children:"All records · CSV"}),c.jsx("button",{className:"btn",disabled:ue||!s.some(j=>j.rows.length),onClick:()=>{We("xlsx",!0)},"data-testid":"button-report-all-excel",children:"All records · Excel"}),r.error&&c.jsx("button",{className:"btn",onClick:()=>{try{const j=$s(a);j&&kl(`engineering-${a}-raw.json`,j,"application/json")}catch{Qe("Device storage cannot be accessed. The saved data has not been changed.")}},children:"Export raw backup"}),r.error&&c.jsx("button",{className:"btn danger",onClick:()=>{if(window.confirm("Delete unreadable engineering data for this discipline? Download a raw backup first. This cannot be undone and does not delete PDFs or the old demo data."))try{window.localStorage.removeItem(`pid-mapping-studio:engineering-workspace:v2:${a}`),window.location.reload()}catch{Qe("Device storage cannot be cleared. The saved data has not been changed.")}},children:"Reset unreadable data"}),c.jsx("span",{children:"Local storage only · download backups regularly"})]}),c.jsxs("div",{className:"edm-workspace",children:[c.jsxs("aside",{className:"edm-catalog",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsxs("span",{children:[c.jsx(wf,{size:15})," Catalog"]}),c.jsx("span",{className:"edm-counter",children:s.length})]}),c.jsxs("div",{className:"edm-catalog-search",children:[c.jsx(ti,{size:13}),c.jsx("input",{"aria-label":"Filter drawings",placeholder:"Filter drawings…",value:k,onChange:j=>L(j.target.value),"data-testid":"input-catalog-filter"})]}),c.jsxs("div",{className:"edm-catalog-label",children:["DRAWINGS · ",a.toUpperCase()]}),c.jsxs("div",{className:"edm-drawing-list",children:[s.filter(j=>j.name.toLowerCase().includes(k.toLowerCase())).map(j=>c.jsxs("button",{className:`edm-drawing-item ${f.id===j.id?"selected":""}`,onClick:()=>Dt(j.id),"data-testid":`button-drawing-${j.id}`,children:[c.jsx(Hn,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:j.name}),c.jsxs("small",{children:[j.revision," · ",j.rows.length," records"]})]})]},j.id)),!s.some(j=>j.name.toLowerCase().includes(k.toLowerCase()))&&c.jsx("div",{className:"edm-empty",children:"No drawings match."})]}),c.jsxs("form",{className:"edm-create-drawing",onSubmit:La,children:[c.jsxs("label",{children:["Drawing reference",c.jsx("input",{value:E,onChange:j=>R(j.target.value),maxLength:160,required:!0,placeholder:"e.g. PID-001","aria-label":"New drawing reference","data-testid":"input-new-drawing"})]}),c.jsxs("label",{children:["Revision",c.jsx("input",{value:C,onChange:j=>D(j.target.value),maxLength:80,"aria-label":"New drawing revision"})]}),c.jsxs("button",{className:"btn primary",disabled:!!r.error,"data-testid":"button-add-drawing",children:[c.jsx(ei,{size:14})," Add drawing"]})]}),f.id&&c.jsxs("button",{className:"btn danger edm-delete-drawing",disabled:!!r.error,onClick:()=>{if(!window.confirm(`Delete drawing ${f.name} and its ${y.length} records? Download a backup first. This does not delete source PDFs.`))return;const j=s.filter(Q=>Q.id!==f.id);Ot(j)&&(m(j[0]?.id??""),v(""),se(0))},"data-testid":"button-delete-drawing",children:[c.jsx(ai,{size:14})," Delete drawing"]}),c.jsxs("div",{className:"edm-catalog-foot",children:["No invented sample records.",c.jsx("br",{}),"Source PDFs stay in your workspace."]})]}),c.jsxs("section",{className:"edm-main",children:[c.jsxs("section",{className:"edm-preview panel edm-source-summary",children:[c.jsxs("header",{children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"ACTIVE DRAWING RECORD"}),c.jsx("strong",{"data-testid":"text-active-drawing",children:f.name})]}),c.jsx("span",{className:"edm-revision",children:f.revision})]}),c.jsx("p",{children:f.sourcePdfId?`${f.sourceAlias??"PDF"} tag candidates and clearly labelled values are stored here. Every extracted record needs review. Blank fields mean the PDF text/OCR did not provide a clear value.`:"Add records manually or import them from CSV. New PDF tag candidates appear here with a source page and a review status."}),c.jsxs(da,{href:f.sourcePdfId?`/workspace/${a}?pdf=${encodeURIComponent(f.sourcePdfId)}&page=${encodeURIComponent(f.rows.find(j=>j.sourcePdfId)?.sourcePage||"1")}#pdf-workflow-title`:`/workspace/${a}`,className:"btn subtle",children:[c.jsx(Hn,{size:14})," ",f.sourcePdfId?"Open source PDF page":"View original PDFs"]}),c.jsxs("div",{className:"edm-autocad-status",role:"note",children:[c.jsx("strong",{children:"AutoCAD 2020: not connected."})," EDE extraction does not create a DWG."]})]}),c.jsxs("section",{className:"edm-editor panel",children:[c.jsxs("div",{className:"edm-editor-title",children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"DATA WORKSPACE"}),c.jsx("h2",{children:"Engineering Data Editor"})]}),c.jsx("div",{className:"edm-type-chip",children:H})]}),c.jsxs("form",{className:"edm-add-record",onSubmit:ra,children:[c.jsxs("label",{children:["Object type",c.jsx("select",{value:T,onChange:j=>O(j.target.value),"aria-label":"New record type",children:ii.map(j=>c.jsx("option",{children:j},j))})]}),c.jsxs("label",{children:["Item tag",c.jsx("input",{value:S,onChange:j=>N(j.target.value),maxLength:160,required:!0,placeholder:"e.g. P-101","aria-label":"New item tag","data-testid":"input-new-tag"})]}),c.jsxs("button",{className:"btn primary",disabled:!f.id||!!r.error,"data-testid":"button-add-record",children:[c.jsx(ei,{size:14})," Add record"]})]}),c.jsxs("div",{className:"edm-report-actions",children:[c.jsxs("button",{className:"btn",disabled:ue||!vt.length,onClick:()=>{We("csv")},"data-testid":"button-export-report",children:[c.jsx(Hr,{size:14})," Current view · CSV"]}),c.jsxs("button",{className:"btn",disabled:ue||!vt.length,onClick:()=>{We("xlsx")},"data-testid":"button-export-excel",children:[c.jsx(Hr,{size:14})," Current view · Excel"]}),c.jsxs("label",{className:"btn",children:[c.jsx(Vr,{size:14})," Import CSV",c.jsx("input",{type:"file",accept:".csv,text/csv","aria-label":"Import engineering CSV",disabled:!f.id||!!r.error,onChange:j=>{const Q=j.currentTarget.files?.[0];j.currentTarget.value="",Q&&en(Q,"csv")}})]}),c.jsx("button",{className:"btn subtle",onClick:()=>kl("engineering-import-template.csv",D2([]),"text/csv;charset=utf-8"),"data-testid":"button-csv-template",children:"CSV template"}),c.jsxs("button",{className:"btn danger",disabled:!Re||!!r.error,onClick:cn,"data-testid":"button-delete-record",children:[c.jsx(ai,{size:14})," Delete selected"]})]}),c.jsxs("div",{className:"edm-export-note","aria-live":"polite",children:[c.jsx("span",{children:"Current view: shown columns, filters, sorting and all matching rows across pages. Excel also includes group summaries. CSV has no visual formatting."}),ue&&c.jsx("strong",{role:"status",children:"Preparing export…"}),B&&c.jsx("strong",{role:"status",children:B}),Ce&&c.jsx("strong",{role:"alert",children:Ce})]}),c.jsx(cA,{order:J,hidden:V,onChange:(j,Q)=>{U(j),oe(Q)}}),c.jsxs("div",{className:"edm-placement-legend","aria-label":"CAD placement status legend",children:[c.jsxs("span",{children:[c.jsx("i",{className:"available","aria-hidden":"true",children:"●"})," Available / not placed"]}),c.jsxs("span",{children:[c.jsx("i",{className:"current","aria-hidden":"true",children:"●"})," On this drawing"]}),c.jsxs("span",{children:[c.jsx("i",{className:"another","aria-hidden":"true",children:"●"})," On another drawing"]}),c.jsx("small",{children:"Based on the saved reference only; CAD is not connected for live verification."})]}),c.jsxs("div",{className:"edm-grid-toolbar",children:[c.jsxs("label",{className:"edm-global-search",children:[c.jsx(ti,{size:14}),c.jsx("input",{placeholder:"Search all fields…","aria-label":"Search engineering data",value:x,onChange:j=>{_(j.target.value),se(0)},"data-testid":"input-engineering-search"})]}),c.jsxs("span",{className:"edm-result-total","data-testid":"text-result-count",children:[At.length," records"]}),c.jsxs("button",{className:"edm-toolbar-button",onClick:()=>{_(""),ee("All types"),P({}),se(0)},"data-testid":"button-clear-filters",children:[c.jsx(Mu,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"edm-groups",onDragOver:j=>j.preventDefault(),onDrop:fa,"data-testid":"drop-column-group",children:[c.jsx("span",{children:"GROUP BY"}),Z.length?Z.map(j=>c.jsxs("button",{onClick:()=>me(Q=>Q.filter(he=>he!==j)),title:"Remove group",children:[Rt[j]," ",c.jsx("b",{children:"×"})]},j)):c.jsx("em",{children:"Drag a column header here to group records"})]}),c.jsxs("label",{className:"edm-group-select",children:["Add group",c.jsxs("select",{value:"","aria-label":"Add group",onChange:j=>{j.target.value&&(Sn(j.target.value),se(0))},children:[c.jsx("option",{value:"",children:"Choose a column…"}),Yn.filter(j=>!Z.includes(j)).map(j=>c.jsx("option",{value:j,children:Rt[j]},j))]})]}),c.jsx("p",{className:"edm-table-sizing-help",children:"Drag a column edge to resize it. Double-click an edge to fit the text."}),ja.map(j=>c.jsxs("div",{className:"edm-group-summary",children:[c.jsx("strong",{children:j.label}),j.values.map(({value:Q,count:he})=>c.jsxs("span",{children:[Q,c.jsx("i",{children:he})]},Q))]},j.field)),c.jsx("div",{className:"edm-table-wrap",children:c.jsxs("table",{ref:Le,className:"edm-table",style:{width:F,minWidth:F},children:[c.jsx("colgroup",{children:qt.map(j=>c.jsx("col",{style:{width:mt(j)}},j))}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsxs("th",{className:"edm-rownum",children:[c.jsx("div",{className:"edm-column-heading",children:c.jsx("span",{className:"edm-column-heading-label",children:"#"})}),Qt("rowNumber","row number")]}),c.jsxs("th",{children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsx("span",{className:"edm-column-heading-label",children:"Object type"}),c.jsx(_y,{label:"Object type",options:Ra.type,selectedValues:Se.type,onApply:j=>Oa("type",j)})]}),Qt("type","Object type")]}),dt.map(j=>c.jsxs("th",{draggable:!0,onDragStart:Q=>Q.dataTransfer.setData("text/engineering-field",j),children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsxs("button",{className:"edm-column-sort",title:qs[j],onClick:()=>Xn(j),"data-testid":`button-sort-${j}`,children:[Rt[j],c.jsx("span",{children:ce.field===j?ce.direction===1?"↑":"↓":"↕"})]}),c.jsx(_y,{label:Rt[j],options:Ra[j],selectedValues:Se[j],onApply:Q=>Oa(j,Q)})]}),Qt(j,Rt[j])]},j))]})}),c.jsxs("tbody",{children:[ut.map((j,Q)=>{const he=b===j.id,Ue=E2(j,f),M=Ue==="current"?"On this drawing":Ue==="another"?"On another drawing":"Available / not placed";return c.jsxs("tr",{className:he?"selected":"","data-stable-id":j.id,"data-placement-status":Ue,onClick:()=>v(j.id),"data-testid":`row-engineering-${j.id}`,children:[c.jsx("td",{className:"edm-rownum",children:te*Te+Q+1}),c.jsx("td",{children:c.jsx("span",{className:`edm-type-badge ${j.type.toLowerCase().replace(/\s+/g,"-")}`,children:j.type})}),dt.map(ne=>{const we=bn(j,ne);return ne==="notes"?c.jsx("td",{className:"edm-notes-cell",children:he?c.jsx("textarea",{"aria-label":`Notes for ${j.itemTag}`,rows:2,maxLength:2e3,value:we,onClick:xe=>xe.stopPropagation(),onChange:xe=>wt(j.id,ne,xe.target.value),"data-testid":`input-cell-${j.id}-${ne}`}):c.jsx("span",{title:we,children:we||"—"})},ne):ne==="itemTag"?c.jsxs("td",{className:"mono edm-item-tag-cell",children:[c.jsxs("span",{className:`edm-placement-indicator ${Ue}`,"aria-label":`Placement: ${M}`,title:`Placement: ${M}`,children:[c.jsx("i",{"aria-hidden":"true",children:"●"}),c.jsx("span",{children:M})]}),he?c.jsx("input",{className:"edm-item-tag-editor","aria-label":`${Rt[ne]} for ${j.itemTag}`,value:we,onClick:xe=>xe.stopPropagation(),onChange:xe=>wt(j.id,ne,xe.target.value),"data-testid":`input-cell-${j.id}-${ne}`}):c.jsx("span",{className:`edm-tag-value ${Ue}`,"data-testid":`text-item-tag-${j.id}`,children:we})]},ne):c.jsx("td",{className:ne==="stableId"?"mono":"",children:ne==="stableId"?c.jsx("span",{className:"edm-stable-id-value",title:we,"aria-label":`Stable ID ${we}`,children:we}):he&&(ne==="reviewStatus"||ne==="groupStatus")?c.jsx("select",{"aria-label":`${Rt[ne]} for ${j.itemTag}`,value:we,onClick:xe=>xe.stopPropagation(),onChange:xe=>wt(j.id,ne,xe.target.value),"data-testid":`input-cell-${j.id}-${ne}`,children:(ne==="reviewStatus"?["Needs review","Reviewed","Manual"]:["","Start","Continue","Branch","Merge","End-of-Group"]).map(xe=>c.jsx("option",{value:xe,children:xe||"Not set"},xe))}):he?c.jsx("input",{"aria-label":`${Rt[ne]} for ${j.itemTag}`,value:we,onClick:xe=>xe.stopPropagation(),onChange:xe=>wt(j.id,ne,xe.target.value),"data-testid":`input-cell-${j.id}-${ne}`}):c.jsx("span",{title:we,children:we||"—"})},ne)})]},j.id)}),!ut.length&&c.jsx("tr",{children:c.jsx("td",{colSpan:dt.length+2,children:c.jsx("div",{className:"edm-empty",children:"No records match these filters."})})})]})]})}),c.jsxs("footer",{className:"edm-pagination",children:[c.jsxs("span",{children:["Showing ",c.jsxs("strong",{children:[vt.length?te*Te+1:0,"–",Math.min((te+1)*Te,vt.length)]})," of ",c.jsx("strong",{children:vt.length})]}),c.jsxs("label",{children:["Rows ",c.jsx("select",{value:Te,onChange:j=>{fe(Number(j.target.value)),se(0)},"aria-label":"Rows per page","data-testid":"select-page-size",children:[8,12,24,36].map(j=>c.jsx("option",{value:j,children:j},j))})," per page"]}),c.jsxs("div",{className:"edm-page-controls",children:[c.jsx("button",{disabled:te===0,onClick:()=>pa(te-1),"aria-label":"Previous page","data-testid":"button-page-previous",children:c.jsx(Vy,{size:15})}),c.jsxs("span",{children:["Page ",te+1," of ",Jt]}),c.jsx("button",{disabled:te>=Jt-1,onClick:()=>pa(te+1),"aria-label":"Next page","data-testid":"button-page-next",children:c.jsx(vf,{size:15})})]})]})]})]}),c.jsxs("aside",{className:"edm-properties panel",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsx("span",{children:"Properties"}),c.jsx("span",{className:"edm-counter",children:Re?"EDIT":""})]}),c.jsxs("details",{className:"edm-field-guide",children:[c.jsx("summary",{children:"What do these fields mean?"}),c.jsx("dl",{children:Yn.map(j=>c.jsxs("div",{children:[c.jsx("dt",{children:Rt[j]}),c.jsx("dd",{children:qs[j]})]},j))})]}),Re&&c.jsxs("label",{className:"edm-record-type",children:["Object type",c.jsx("select",{value:Re.type,"aria-label":"Selected record type",disabled:!!r.error,onChange:j=>$t(y.map(Q=>Q.id===Re.id?{...Q,type:j.target.value}:Q)),children:ii.map(j=>c.jsx("option",{children:j},j))})]}),Re?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"edm-property-summary",children:[c.jsx("span",{className:"edm-property-icon",children:yA(Re.type)}),c.jsxs("div",{children:[c.jsx("strong",{"data-testid":"text-selected-tag",children:Re.itemTag}),c.jsxs("small",{children:[Re.type," · ",f.revision]})]})]}),(Re.sourcePdfId??f.sourcePdfId)&&c.jsxs(da,{className:"btn subtle edm-source-locate",href:`/workspace/${a}?pdf=${encodeURIComponent(Re.sourcePdfId??f.sourcePdfId??"")}&page=${encodeURIComponent(String(Re.sourceLocations?.[0]?.pageNumber??Re.sourcePage??"1"))}&record=${encodeURIComponent(Re.id)}#pdf-workflow-title`,"data-testid":"link-selected-source-location",children:[c.jsx(Hn,{size:13})," Locate on source PDF",c.jsx("small",{children:Re.sourceLocations?.length?`${Re.sourceLocations.length} OCR location(s) · review required`:`Page ${Re.sourcePage||"1"} · no exact position saved`})]}),c.jsxs("div",{className:"edm-stable-id-panel",children:[c.jsx("span",{children:"STABLE ID"}),c.jsx("code",{"data-testid":"text-stable-id",children:Re.id}),c.jsx("small",{children:"Permanent record identity. It does not change with the tag or drawing."})]}),c.jsxs("div",{className:"edm-property-scroll",children:[c.jsx("div",{className:"edm-property-group",children:"IDENTIFICATION"}),["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef"].map(j=>c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:qs[j],children:Rt[j]}),c.jsx("input",{value:Re[j],onChange:Q=>wt(Re.id,j,Q.target.value),"data-testid":`property-${j}`})]},j)),c.jsx("div",{className:"edm-property-group",children:"CAD PLACEMENT"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:qs.placementDrawingRef,children:Rt.placementDrawingRef}),c.jsx("input",{list:"edm-placement-drawings",value:Re.placementDrawingRef,onChange:j=>wt(Re.id,"placementDrawingRef",j.target.value),"data-testid":"property-placementDrawingRef",placeholder:"Blank = available / not placed"}),c.jsx("small",{children:"Reference only. This browser is not connected to CAD geometry."})]}),c.jsx("datalist",{id:"edm-placement-drawings",children:s.map(j=>c.jsx("option",{value:j.name},j.id))}),c.jsx("div",{className:"edm-property-group",children:Re.type==="Pipe Run"?"PIPE RUN & PROCESS":"PROCESS & CONNECTION"}),(Re.type==="Pipe Run"?["nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description"]:["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","opcDrawing","connection","description"]).map(j=>{const Q=j;return c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:qs[Q],children:Rt[Q]}),Q==="groupStatus"?c.jsx("select",{value:Re.groupStatus,onChange:he=>wt(Re.id,"groupStatus",he.target.value),"aria-label":"Pipe run group status",children:["","Start","Continue","Branch","Merge","End-of-Group"].map(he=>c.jsx("option",{value:he,children:he||"Not set"},he))}):c.jsx("input",{value:Re[Q],onChange:he=>wt(Re.id,Q,he.target.value),"data-testid":`property-${Q}`})]},Q)}),c.jsx("div",{className:"edm-property-group",children:"NOTES"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:qs.notes,children:Rt.notes}),c.jsx("textarea",{rows:5,maxLength:2e3,value:Re.notes,onChange:j=>wt(Re.id,"notes",j.target.value),"data-testid":"property-notes"})]})]}),c.jsxs("div",{className:"edm-save-state",role:"status","data-testid":"status-local-save",children:[c.jsx("span",{})," Edits save automatically in this browser"]})]}):c.jsx("div",{className:"edm-empty",children:"Select a graphic or table row to inspect properties."})]})]}),c.jsxs("footer",{className:"edm-footnote",children:[c.jsx("span",{children:"© 2026 gaurav.cbiindia · DEVICE-LOCAL DATA"}),c.jsxs("span",{children:[y.length," records · ",f.name," · ",a.toUpperCase(),"-isolated browser storage"]})]}),Oe&&c.jsx("div",{className:"edm-storage-error",role:"alert","data-testid":"status-storage-error",children:Oe})]})}function bA({assetId:a,candidateId:r,blockName:s,entityType:i,description:l,disabled:u,onDescriptionChange:g}){const[p,m]=q.useState(null),[f,y]=q.useState("");q.useEffect(()=>{let v=!0;return m(null),y(""),qb(a).then(E=>{v&&m(E)},E=>{v&&y(E instanceof Error?E.message:"Preview could not be read.")}),()=>{v=!1}},[a]);const b=i==="directionArrow"?[]:(p?.nearbyLabels??[]).filter(v=>!jf(v));return c.jsxs("section",{className:"cad-block-review-visual","aria-label":`Identify block ${s}`,"data-testid":`preview-block-${r}`,children:[c.jsxs("div",{className:"cad-block-review-image",children:[p?.previewSvg?c.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(p.previewSvg)}`,alt:`DXF geometry preview of block ${s}`,"data-testid":`img-block-${r}`}):c.jsxs("div",{className:"cad-block-preview-empty",role:"status",children:[c.jsx("strong",{children:f?"Preview could not load":p?"Overview DXF needed":"Loading local preview…"}),c.jsx("span",{children:f||(p?"Run PIDEXPORTOVERVIEW on the original SOURCE drawing. Add its *_OVERVIEW.dxf to the existing extraction ZIP and import again. Do not repeat the full block extraction.":"")})]}),c.jsx("small",{children:"Visual aid only—not a fidelity check. Fonts, hatches, masks and some CAD entities may be simplified or absent."})]}),c.jsxs("div",{className:"cad-block-review-labels",children:[c.jsx("strong",{children:i==="directionArrow"?"Direction Arrow":"Nearby legend text"}),c.jsx("small",{children:i==="directionArrow"?"Kept as its own P&ID entity; no equipment, instrument, or component name is inferred from nearby text.":"Suggested by position, not confirmed identity. Multiple parts may share one assembly description."}),b.length?c.jsx("div",{className:"cad-block-label-choices",children:b.map((v,E)=>c.jsx("button",{type:"button",className:"btn subtle",disabled:u,onClick:()=>g(v),"data-testid":`button-use-label-${r}-${E}`,children:v},`${v}-${E}`))}):c.jsx("p",{"data-testid":`status-no-label-${r}`,children:i==="directionArrow"?p?.sourcePlacements?.length?`Source insert context retained: ${p.sourcePlacements.map(v=>`${v.layer}, ${v.rotationDegrees}° (${v.count})`).join("; ")}.`:"Source rotation and layer context will be used if an overview DXF is available.":p?.labelMatchAmbiguous?"Ambiguous: this block is used beside different legend labels. No item name is suggested; verify it from the source.":p?.labelMatchSkipped?"Skipped: this insert is on layer 0 or a primary process-pipe layer, so its nearby label is not used as an item mapping.":p?.previewSvg?"No nearby label found. Verify the source drawing and enter the description below.":"Label suggestions appear after an overview DXF is imported."}),c.jsxs("label",{children:[c.jsx("span",{children:"Confirmed item description"}),c.jsx("input",{value:l,onChange:v=>g(v.target.value),placeholder:"Verify the source, then enter the real item name",disabled:u,"data-testid":`input-item-description-${r}`})]}),c.jsx("small",{children:"Saved only when you approve this record. A label does not automatically choose a category or CAD layer."})]})]})}const hv={titleBlock:"Title block",layer:"Layer",textStyle:"Text style",linetype:"Linetype",dimensionStyle:"Dimension style",symbol:"Symbol",directionArrow:"Direction Arrow",legend:"Legend"};function Ho(a){return hv[a]??"CAD standard"}function vA(a,r){if(a.proposedScope==="project"&&a.projectId){const s=[...new Set(r.filter(i=>i.proposedScope==="project"&&i.projectId).map(i=>i.projectId))].sort();return`Project ${String(s.indexOf(a.projectId)+1).padStart(2,"0")}`}if(a.proposedScope==="company"){const s=[...new Set(r.filter(i=>i.proposedScope==="company").map(i=>i.sourceGroup))].sort();return`Legends Library source ${String(s.indexOf(a.sourceGroup)+1).padStart(2,"0")}`}return"Unclassified source"}function My(a,r){return`Project ${String(r.indexOf(a)+1).padStart(2,"0")}`}function mn(a,r){return a.find(s=>s.label===r)?.value.trim()??""}function $y({value:a,disabled:r,onChange:s}){let i=null,l="";try{i=Xr(a)}catch(C){l=C instanceof Error?C.message:"Enter a valid X,Y outline."}const u=i?.map(([C])=>C)??[],g=i?.map(([,C])=>C)??[],p=Math.min(...u),m=Math.max(...u),f=Math.min(...g),y=Math.max(...g),b=m-p||1,v=y-f||1,E=9,R=i?.map(([C,D])=>`${E+(C-p)/b*(160-E*2)},${90-E-(D-f)/v*(90-E*2)}`).join(" ");return c.jsxs("label",{className:"candidate-fallback-category valve-mask-editor",children:[c.jsxs("span",{children:["Valve-body Wipeout outline ",c.jsx("small",{children:"Reviewed block-local X,Y points; do not include pipe tails. Separate points with semicolons."})]}),c.jsx("textarea",{value:a,onChange:C=>s(C.target.value),placeholder:"x,y; x,y; x,y; …","aria-label":"Valve-body Wipeout outline points",rows:3,disabled:r}),c.jsx("small",{className:"candidate-layer-help",children:"Enter vertices in order using the valve block’s local drawing units. The small preview shows only the mask contour, not the source CAD block."}),i&&R?c.jsx("svg",{className:"valve-mask-preview",viewBox:"0 0 160 90",role:"img","aria-label":"Preview of the saved valve mask outline",children:c.jsx("polygon",{points:R})}):c.jsx("small",{className:"candidate-layer-help",children:l}),c.jsx("small",{className:"candidate-layer-help",children:"The runner masks only inside this polygon, leaves the underlying Pipe Run continuous, and draws the valve block on top."})]})}function wr(a,r){const s=mn(a.item.fields,"Source discipline");if(s!=="PFD"&&s!=="P&ID"&&s!=="Shared")return[];const g=[...(a.proposedScope==="company"?"company":"project")==="project"&&a.projectId?r.projects[a.projectId]?.items??[]:[],...r.companyItems].filter(p=>{if(p.category!=="layer"||p.sourceKind!=="extracted-dwg"||p.reviewStatus!=="reviewed")return!1;const m=mn(p.fields,"Source discipline");return s==="Shared"?m==="Shared":m==="Shared"||m===s}).map(p=>mn(p.fields,"CAD name")).filter(p=>p&&p.toUpperCase()!=="0");return[...new Set(g)].sort((p,m)=>p.localeCompare(m))}function wA({library:a,reviewCandidates:r,onApproveCompany:s,onApproveProject:i,onDismiss:l,onUpdateReviewedItem:u,onSetCompanyDefault:g,onSetProjectDefault:p,storageNotice:m="",readOnly:f=!1,reviewOnly:y=!1,backHref:b="/"}){const[v,E]=q.useState("company"),[R,C]=q.useState(""),[D,S]=q.useState("all"),[N,T]=q.useState(""),[O,x]=q.useState(0),[_,k]=q.useState(""),[L,H]=q.useState({}),[ee,te]=q.useState({}),[se,Te]=q.useState({}),[fe,ce]=q.useState({}),[z,Z]=q.useState({}),[me,Se]=q.useState({}),P=20,J=q.useMemo(()=>Object.keys(a.projects).sort(),[a.projects]),U=J.includes(N)?N:J[0]??"",V=r.filter(B=>B.status==="needs-review"),oe=r.filter(B=>B.status==="approved").length,de=r.filter(B=>B.status==="dismissed").length,ve=B=>me[B.id]??B.item.category,qe=(B,pe)=>{const Ce=ve(B),ye=B.item.sourceKind==="extracted-dwg"&&!!B.item.fields.find(be=>be.label==="Block asset ID")?.value.trim(),Oe=(L[B.id]??B.item.fields.find(be=>be.label==="Fallback category")?.value??"").trim(),Qe=ee[B.id]??B.item.fields.find(be=>be.label==="Target CAD layer")?.value??"";if(Ce==="symbol"&&ye&&!Oe){k("Enter the real equipment category (such as pump or valve) before approving an extracted block.");return}if(Ce==="symbol"&&ye&&!wr(B,a).includes(Qe)){k(wr(B,a).length?"Choose an approved non-zero CAD layer for this block before approving it.":"Approve a matching Equipment, Instrument, or other placement layer first. Layer 0 cannot be used for block placement.");return}const Ve=se[B.id]??B.item.fields.find(be=>be.label==="Wipeout mask boundary")?.value??"";if(Ce==="symbol"&&Oe.toLowerCase()==="valve")try{Xr(Ve)}catch(be){k(be instanceof Error?be.message:"Enter and review a valve-body Wipeout outline before approval.");return}k("");const Me=ye?Ce==="directionArrow"?[{label:"Entity type",value:"Direction Arrow"},{label:"Item description",value:z[B.id]||"Direction Arrow"}]:[{label:"Fallback category",value:Oe},{label:"Target CAD layer",value:Qe},{label:"Item description",value:z[B.id]??mn(B.item.fields,"Item description")},...Oe.toLowerCase()==="valve"?[{label:"Wipeout mask boundary",value:Ve}]:[]]:void 0;(pe==="company"?s:i)(B.id,Me,ye?Ce:void 0)&&k(pe==="company"?"Approved and added to the Legends Library.":"Approved and added to the project library.")},Le=B=>{l(B)&&k("Record dismissed from the review queue.")},gt=(B,pe)=>{const Ce=fe[B]??pe.find(ye=>ye.label==="Wipeout mask boundary")?.value??"";try{Xr(Ce)}catch(ye){k(ye instanceof Error?ye.message:"Enter a valid valve-body mask outline.");return}u(B,[{label:"Wipeout mask boundary",value:Ce}])&&k("Reviewed valve-body mask saved to the Legends Library.")},nt=q.useMemo(()=>{const B=R.trim().toLowerCase();return V.filter(pe=>{const Ce=ve(pe),ye=D==="all"||Ce===D,Oe=pe.item.fields.some(Qe=>`${Qe.label} ${Qe.value}`.toLowerCase().includes(B));return ye&&(!B||Oe||Ho(Ce).toLowerCase().includes(B))})},[V,R,D,me]),ot=Math.max(1,Math.ceil(nt.length/P)),dt=Math.min(O,ot-1),qt=nt.slice(dt*P,(dt+1)*P);q.useEffect(()=>x(0),[R,D]);const F=(v==="company"?a.companyItems:a.projects[U]?.items??[]).filter(B=>{const pe=R.trim().toLowerCase(),Ce=D==="all"||B.category===D,ye=B.fields.some(Oe=>`${Oe.label} ${Oe.value}`.toLowerCase().includes(pe));return Ce&&(!pe||ye||Ho(B.category).toLowerCase().includes(pe))}),ue=(B,pe)=>{if(!Yr.includes(pe))return;const Ce=pe,ye=a.companyItems.some(Oe=>Oe.category==="titleBlock"&&Oe.reviewStatus==="reviewed"&&(Oe.sheetSize===Ce||Oe.fields.some(Qe=>Qe.label==="Sheet size"&&Qe.value===Ce)));if(Ce!==a.companyDefaults[B]&&!ye){k(`Approve a company title-block mapping for ${Ce} before changing this default.`);return}k(""),g(B,Ce)},ge=(B,pe,Ce)=>{if(!Yr.includes(Ce))return;const ye=Ce;if(![...a.projects[B]?.items??[],...a.companyItems].some(Ve=>Ve.category==="titleBlock"&&Ve.reviewStatus==="reviewed"&&(Ve.sheetSize===ye||Ve.fields.some(Me=>Me.label==="Sheet size"&&Me.value===ye)))){k(`Approve a title-block mapping for ${ye} before saving this project default.`);return}k(""),p(B,pe,ye)};return c.jsxs("main",{className:`standards-page${y?" standards-review-only":""}`,children:[c.jsxs("header",{className:"standards-topbar",children:[c.jsxs(da,{href:y?b:"/",className:"standards-brand","data-testid":"link-standards-home",children:[c.jsx("span",{className:"standards-mark",children:"PM"}),c.jsxs("span",{children:["Mapping Studio",c.jsx("small",{children:y?"Legends Library / review":"Drafting standards / browser-local"})]})]}),c.jsxs("div",{className:"standards-top-meta",children:[c.jsxs("span",{className:"standards-local",children:[c.jsx("i",{}),f?"Read only · storage issue":"Browser-local"]}),c.jsx("span",{className:"standards-version",children:"LIBRARY · 1.0"})]})]}),c.jsxs("div",{className:"standards-content",children:[c.jsxs("section",{className:"standards-intro",children:[c.jsxs("div",{children:[y&&c.jsxs(da,{className:"standards-return",href:b,children:["← Back to ",b.endsWith("/pfd")?"PFD":"P&ID"," workspace"]}),c.jsxs("div",{className:"standards-eyebrow",children:[y?"Legends Library":"Standards library"," ",c.jsx("span",{children:"/"})," human review"]}),c.jsx("h1",{children:y?"Review extracted standards":"Drafting standards"}),c.jsx("p",{children:y?"Check extracted blocks, layers, text styles, and line types. Nothing becomes part of the Legends Library until you approve it.":"Inspect source-derived CAD values before they become defaults. Project choices stay separate from the Legends Library."})]}),c.jsxs("div",{className:"standards-local-seal",children:[c.jsx(Vn,{size:15}),c.jsxs("span",{children:["LOCAL ONLY",c.jsx("small",{children:"Nothing is uploaded or shared"})]})]})]}),c.jsxs("div",{className:"standards-trust-note",children:[c.jsx(qu,{size:16}),c.jsxs("span",{children:[c.jsx("strong",{children:"Review before use."})," ",y?"Each extracted record remains pending until you approve it to the Legends Library or dismiss it. Source filenames are hidden.":"Source-derived values remain unapproved until you choose a scope. Company/client identifiers and source file names are hidden here."]}),c.jsxs("span",{className:"standards-schema",children:["SCHEMA ",a.schemaVersion]})]}),m&&c.jsx("div",{className:"standards-storage-banner",role:"alert",children:m}),c.jsxs("section",{className:"standards-metrics","aria-label":"Review summary",children:[c.jsxs("div",{className:"standards-metric metric-pending",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(xr,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Awaiting review"}),c.jsx("strong",{children:V.length.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"SOURCE MAPPINGS"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(wm,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Approved from queue"}),c.jsx("strong",{children:oe.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"HUMAN CONFIRMED"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(bf,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Dismissed"}),c.jsx("strong",{children:de.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"NOT IN LIBRARY"})]})]}),c.jsxs("div",{className:"standards-layout",children:[c.jsxs("section",{className:"standards-review panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"INBOX / SOURCE-DERIVED"}),c.jsxs("h2",{children:[c.jsx(aE,{size:17}),"Review queue"]})]}),c.jsxs("span",{className:"standards-count",children:[V.length," pending"]})]}),c.jsxs("div",{className:"standards-controls",children:[c.jsxs("label",{className:"standards-search",children:[c.jsx(ti,{size:14}),c.jsx("input",{value:R,onChange:B=>C(B.target.value),placeholder:"Search CAD field values…","aria-label":"Search standards","data-testid":"input-standards-search"})]}),c.jsxs("label",{className:"standards-filter",children:[c.jsx(Mu,{size:13}),c.jsxs("select",{"aria-label":"Filter by category",value:D,onChange:B=>S(B.target.value),"data-testid":"select-standards-category",children:[c.jsx("option",{value:"all",children:"All categories"}),Object.entries(hv).map(([B,pe])=>c.jsx("option",{value:B,children:pe},B))]}),c.jsx(Er,{size:13})]})]}),_&&c.jsx("div",{className:"standards-action-note",role:"status",children:_}),c.jsxs("div",{className:"standards-candidate-list",children:[qt.map(B=>{const pe=ve(B),Ce=B.item.sourceKind==="extracted-dwg"&&!!mn(B.item.fields,"Block asset ID");return c.jsxs("article",{className:"candidate-card","data-testid":`candidate-${B.id}`,children:[c.jsxs("div",{className:"candidate-top",children:[c.jsxs("div",{className:"candidate-category",children:[c.jsx("span",{className:"candidate-glyph",children:c.jsx(Vo,{size:15})}),c.jsxs("span",{children:[c.jsx("strong",{children:Ho(pe)}),c.jsxs("small",{children:[vA(B,r)," · ",B.proposedScope==="project"?"Project proposal":B.proposedScope==="company"?"Pending review":"Scope not classified"]})]})]}),c.jsxs("span",{className:"candidate-status",children:[c.jsx("i",{}),"Needs review"]})]}),Ce&&c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsx("span",{children:"Review entity as"}),c.jsxs("select",{value:pe==="directionArrow"?"directionArrow":"symbol",onChange:ye=>{k(""),Se(Oe=>({...Oe,[B.id]:ye.target.value}))},"aria-label":`Review entity type for ${B.item.name}`,disabled:f,"data-testid":`select-entity-role-${B.id}`,children:[c.jsx("option",{value:"symbol",children:"Equipment / instrument / component symbol"}),c.jsx("option",{value:"directionArrow",children:"Direction Arrow"})]}),pe==="directionArrow"&&c.jsx("small",{children:"Kept separate from equipment matching. Source insert layers and rotations are retained for later pipe alignment."})]}),(pe==="symbol"||pe==="directionArrow")&&B.item.sourceKind==="extracted-dwg"&&mn(B.item.fields,"Block asset ID")&&c.jsx(bA,{assetId:mn(B.item.fields,"Block asset ID"),candidateId:B.id,blockName:mn(B.item.fields,"Block name"),entityType:pe,description:z[B.id]??(pe==="directionArrow"?"Direction Arrow":mn(B.item.fields,"Item description")),disabled:f,onDescriptionChange:ye=>Z(Oe=>({...Oe,[B.id]:ye}))}),c.jsx("div",{className:"candidate-fields","aria-label":`${Ho(pe)} CAD standard values`,children:B.item.fields.filter(ye=>pe!=="directionArrow"||!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(ye.label)).map((ye,Oe)=>c.jsxs("div",{className:"candidate-field",children:[c.jsx("span",{children:ye.label}),c.jsx("strong",{children:ye.value||"—"})]},`${ye.label}-${Oe}`))}),pe==="symbol"&&Ce&&c.jsxs(c.Fragment,{children:[c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Fallback category ",c.jsx("small",{children:"Required for safe same-category substitution"})]}),c.jsx("input",{value:L[B.id]??B.item.fields.find(ye=>ye.label==="Fallback category")?.value??"",onChange:ye=>{k(""),H(Oe=>({...Oe,[B.id]:ye.target.value}))},placeholder:"For example: pump, valve, or instrument","aria-label":`Fallback category for ${B.item.name}`})]}),(L[B.id]??B.item.fields.find(ye=>ye.label==="Fallback category")?.value??"").trim().toLowerCase()==="valve"&&c.jsx($y,{value:se[B.id]??B.item.fields.find(ye=>ye.label==="Wipeout mask boundary")?.value??"",disabled:f,onChange:ye=>{k(""),Te(Oe=>({...Oe,[B.id]:ye}))}}),c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Target CAD layer ",c.jsx("small",{children:"Actual approved layer; layer 0 is not allowed"})]}),c.jsxs("select",{value:ee[B.id]??B.item.fields.find(ye=>ye.label==="Target CAD layer")?.value??"",onChange:ye=>{k(""),te(Oe=>({...Oe,[B.id]:ye.target.value}))},"aria-label":`Target CAD layer for ${B.item.name}`,disabled:f||wr(B,a).length===0,children:[c.jsx("option",{value:"",children:wr(B,a).length?"Select an approved CAD layer…":"Approve a compatible layer first"}),wr(B,a).map(ye=>c.jsx("option",{value:ye,children:ye},ye))]}),c.jsx("small",{className:"candidate-layer-help",children:wr(B,a).length?"The AutoCAD runner will put the inserted block reference on this layer.":"Review and approve the matching source layer first. No layer is guessed automatically."}),c.jsx("small",{className:"candidate-layer-help",children:"Stated Legends layers: equipment uses EQUIP or f_EQUIP; instruments use f_Inst. Extract and approve the matching layer before it appears here."})]})]}),c.jsxs("div",{className:"candidate-actions",children:[c.jsx("span",{className:"candidate-scope-note",children:B.proposedScope==="project"?"Approve into isolated project library":B.proposedScope==="company"?"Approve to the Legends Library":"Unclassified source · project-only approval"}),(()=>{const ye=pe==="symbol"&&Ce;return B.proposedScope==="company"?c.jsxs("button",{className:"btn primary",onClick:()=>qe(B,"company"),disabled:f,title:ye&&wr(B,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-company-${B.id}`,children:[c.jsx(Ms,{size:14}),"Approve to Legends Library"]}):c.jsxs("button",{className:"btn primary",onClick:()=>qe(B,"project"),disabled:f,title:ye&&wr(B,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-project-${B.id}`,children:[c.jsx(Ms,{size:14}),"Approve to project"]})})(),c.jsx("button",{className:"btn subtle",onClick:()=>Le(B.id),disabled:f,"data-testid":`button-dismiss-${B.id}`,children:"Dismiss"})]})]},B.id)}),!qt.length&&c.jsxs("div",{className:"standards-empty",children:[c.jsx("span",{className:"empty-seal",children:V.length?c.jsx(ti,{size:20}):c.jsx(wm,{size:20})}),c.jsx("strong",{children:V.length?"No source mappings match":"Review queue is clear"}),c.jsx("p",{children:V.length?"Try another field value or category.":"New source-derived standards will appear here for human review."}),R||D!=="all"?c.jsx("button",{className:"btn subtle",onClick:()=>{C(""),S("all")},children:"Clear filters"}):null]})]}),nt.length>P&&c.jsxs("div",{className:"candidate-pagination",children:[c.jsxs("span",{children:["Showing ",dt*P+1,"–",Math.min((dt+1)*P,nt.length)," of ",nt.length," matching mappings"]}),c.jsxs("div",{children:[c.jsx("button",{className:"btn subtle",onClick:()=>x(B=>Math.max(0,B-1)),disabled:dt===0,children:"Previous"}),c.jsxs("span",{children:["Page ",dt+1," of ",ot]}),c.jsx("button",{className:"btn subtle",onClick:()=>x(B=>Math.min(ot-1,B+1)),disabled:dt>=ot-1,children:"Next"})]})]}),c.jsxs("footer",{className:"standards-list-foot",children:[c.jsx("span",{children:"CAD field values only"}),c.jsx("span",{children:"Source labels anonymized"})]})]}),!y&&c.jsxs("aside",{className:"standards-side",children:[c.jsxs("section",{className:"defaults-panel panel",children:[c.jsx("div",{className:"standards-panel-head",children:c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"ACTIVE CONFIGURATION"}),c.jsxs("h2",{children:[c.jsx(Mu,{size:16}),"Sheet-size defaults"]})]})}),c.jsxs("div",{className:"default-scope-tabs",role:"tablist","aria-label":"Defaults scope",children:[c.jsx("button",{role:"tab","aria-selected":v==="company",className:v==="company"?"selected":"",onClick:()=>E("company"),children:"Company"}),c.jsxs("button",{role:"tab","aria-selected":v==="projects",className:v==="projects"?"selected":"",onClick:()=>E("projects"),children:["Projects ",c.jsx("span",{children:J.length})]})]}),v==="projects"&&c.jsx("div",{className:"project-picker",children:J.length?c.jsxs("label",{children:[c.jsx("span",{children:"PROJECT LIBRARY"}),c.jsxs("div",{children:[c.jsx("select",{value:U,onChange:B=>T(B.target.value),"aria-label":"Select project library",children:J.map(B=>c.jsx("option",{value:B,children:My(B,J)},B))}),c.jsx(Er,{size:14})]})]}):c.jsxs("div",{className:"project-none",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(Vo,{size:17})}),c.jsx("strong",{children:"No project overrides yet"}),c.jsx("small",{children:"Project-specific standards will appear here once available."})]})}),c.jsxs("div",{className:"default-table",children:[c.jsxs("div",{className:"default-table-head",children:[c.jsx("span",{children:"DRAWING PURPOSE"}),c.jsx("span",{children:"SIZE"})]}),Zu.map(B=>{const pe=v==="projects"&&U?a.projects[U]?.defaults[B]:void 0,Ce=pe??a.companyDefaults[B];return c.jsxs("div",{className:"default-row",children:[c.jsxs("div",{children:[c.jsx("strong",{children:B}),v==="projects"&&c.jsx("small",{children:pe?"Project override":"Inherited company default"})]}),v==="company"?c.jsxs("label",{className:"size-select",children:[c.jsx("select",{"aria-label":`${B} company sheet size`,value:a.companyDefaults[B],onChange:ye=>ue(B,ye.target.value),disabled:f,children:Yr.map(ye=>c.jsx("option",{value:ye,children:ye},ye))}),c.jsx(Er,{size:13})]}):U?c.jsxs("label",{className:`size-select ${pe?"override":""}`,children:[c.jsx("select",{"aria-label":`${B} project sheet size`,value:Ce,onChange:ye=>ge(U,B,ye.target.value),disabled:f,children:Yr.map(ye=>c.jsx("option",{value:ye,children:ye},ye))}),c.jsx(Er,{size:13})]}):c.jsx("span",{className:"default-value",children:"—"})]},B)})]}),c.jsxs("div",{className:"defaults-note",children:[c.jsx(qu,{size:14}),c.jsx("span",{children:"Project selections change only that project. Legends Library defaults remain unchanged."})]})]}),c.jsxs("section",{className:"library-panel panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"APPROVED STANDARDS"}),c.jsxs("h2",{children:[c.jsx(Vo,{size:16}),v==="company"?"Legends Library":"Project library"]})]}),c.jsx("span",{className:"standards-count",children:F.length})]}),c.jsxs("div",{className:"approved-list",children:[F.map(B=>c.jsxs("article",{className:"approved-item",children:[c.jsxs("div",{className:"approved-item-head",children:[c.jsx("span",{className:"approved-glyph",children:c.jsx(Ms,{size:13})}),c.jsxs("div",{children:[c.jsx("strong",{children:Ho(B.category)}),c.jsx("small",{children:v==="company"?"Legends Library standard":`${My(U,J)} · project-only`})]})]}),c.jsx("div",{className:"approved-fields",children:B.fields.map((pe,Ce)=>c.jsxs("div",{children:[c.jsx("span",{children:pe.label}),c.jsx("strong",{children:pe.value||"—"})]},`${pe.label}-${Ce}`))}),B.category==="symbol"&&B.sourceKind==="extracted-dwg"&&mn(B.fields,"Fallback category").toLowerCase()==="valve"&&c.jsxs(c.Fragment,{children:[c.jsx($y,{value:fe[B.id]??B.fields.find(pe=>pe.label==="Wipeout mask boundary")?.value??"",disabled:f,onChange:pe=>{k(""),ce(Ce=>({...Ce,[B.id]:pe}))}}),c.jsx("div",{className:"approved-mask-actions",children:c.jsxs("button",{type:"button",className:"btn primary",disabled:f,onClick:()=>gt(B.id,B.fields),"data-testid":`button-save-valve-mask-${B.id}`,children:[c.jsx(Ms,{size:13}),"Save reviewed outline"]})})]})]},B.id)),!F.length&&c.jsxs("div",{className:"approved-empty",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(Vo,{size:18})}),c.jsx("strong",{children:v==="company"?"No approved Legends Library standards":"No standards in this project"}),c.jsx("small",{children:v==="company"?"Review and approve source mappings to build the Legends Library.":"Project-approved standards remain isolated from Legends Library defaults."})]})]}),c.jsxs("footer",{className:"library-foot",children:[c.jsx("span",{children:"Visible values are standards fields"}),c.jsx("span",{children:"Descriptions hidden"})]})]})]})]}),c.jsxs("footer",{className:"standards-page-foot",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:y?"Only approved mappings are offered to the CAD runner":"Legends Library and project standards are reviewed separately"})]})]})]})}function Uy({backHref:a}){const[r]=q.useState(()=>{try{return{library:yn(),canSave:!0,error:""}}catch(D){return{library:cS(),canSave:!1,error:D instanceof Error?D.message:"The local standards library could not be loaded."}}}),[s,i]=q.useState(r.library),l=q.useRef(r.library),[u,g]=q.useState(r.canSave),[p,m]=q.useState(r.error),f=D=>{if(!u)return m("The local library could not be read safely. Its saved contents were left unchanged."),!1;let S;try{S=D(l.current)}catch(N){return m(N instanceof Error?N.message:"The standards change could not be applied."),!1}try{return si(S),l.current=S,i(S),m(""),!0}catch(N){const T=N instanceof Error?N.message:"The standards change could not be saved locally.";return T.startsWith("This browser could not save the CAD standards locally.")&&g(!1),m(T),!1}},y=(D,S,N)=>f(T=>Fl(T,D,"company",S,N)),b=(D,S,N)=>f(T=>Fl(T,D,"project",S,N)),v=(D,S)=>f(N=>bS(N,D,S)),E=D=>f(S=>vS(S,D)),R=(D,S)=>f(N=>fS(N,D,S)),C=(D,S,N)=>{const T=l.current.projects[D]?.projectName??`Project ${String(Object.keys(l.current.projects).sort().indexOf(D)+1).padStart(2,"0")}`;f(O=>wS(O,D,T,S,N))};return c.jsx(wA,{library:s,reviewCandidates:s.reviewCandidates,reviewOnly:!0,backHref:a,onApproveCompany:y,onApproveProject:b,onUpdateReviewedItem:v,onDismiss:E,onSetCompanyDefault:R,onSetProjectDefault:C,storageNotice:p,readOnly:!u})}const EA="/pid-mapping-studio-app/".replace(/\/$/,"");function xA(){const[a]=Qy();return a==="/admin/library"||a.startsWith("/sign-in")||a.startsWith("/sign-up")?c.jsx(WE,{to:"/"}):a==="/portal"||a==="/library"||a==="/"?c.jsx(ix,{}):a==="/workspace/pfd"?c.jsx(Ly,{discipline:"pfd"}):a==="/workspace/pid"?c.jsx(Ly,{discipline:"pid"}):a==="/workspace/pfd/engineering-data"?c.jsx(qy,{discipline:"pfd"}):a==="/workspace/pid/engineering-data"?c.jsx(qy,{discipline:"pid"}):a==="/standards-review/pfd"?c.jsx(Uy,{backHref:"/workspace/pfd"}):a==="/standards-review/pid"?c.jsx(Uy,{backHref:"/workspace/pid"}):c.jsx(lx,{})}function SA(){return c.jsx(KE,{base:EA,children:c.jsx(ox,{children:c.jsx(xA,{})})})}yf.createRoot(document.getElementById("root"),{onCaughtError:(a,r)=>{console.error(a,r.componentStack)}}).render(c.jsx(SA,{}));export{sn as _,TA as a,Pb as c,ci as g,Nf as v,DA as w};
