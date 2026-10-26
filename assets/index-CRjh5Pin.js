const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BQChQw_b.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/exceljs.min-DTEjgkHU.js"])))=>i.map(i=>d[i]);
function Oi(a,s){for(var o=0;o<s.length;o++){const l=s[o];if(typeof l!="string"&&!Array.isArray(l)){for(const i in l)if(i!=="default"&&!(i in a)){const p=Object.getOwnPropertyDescriptor(l,i);p&&Object.defineProperty(a,i,p.get?p:{enumerable:!0,get:()=>l[i]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function o(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerPolicy&&(p.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?p.credentials="include":i.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(i){if(i.ep)return;i.ep=!0;const p=o(i);fetch(i.href,p)}})();var AT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ho(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}function cy(a){if(Object.prototype.hasOwnProperty.call(a,"__esModule"))return a;var s=a.default;if(typeof s=="function"){var o=function l(){var i=!1;try{i=this instanceof l}catch{}return i?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};o.prototype=s.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(a).forEach(function(l){var i=Object.getOwnPropertyDescriptor(a,l);Object.defineProperty(o,l,i.get?i:{enumerable:!0,get:function(){return a[l]}})}),o}var Gd={exports:{}},Ao={};var $g;function $0(){if($g)return Ao;$g=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function o(l,i,p){var g=null;if(p!==void 0&&(g=""+p),i.key!==void 0&&(g=""+i.key),"key"in i){p={};for(var h in i)h!=="key"&&(p[h]=i[h])}else p=i;return i=p.ref,{$$typeof:a,type:l,key:g,ref:i!==void 0?i:null,props:p}}return Ao.Fragment=s,Ao.jsx=o,Ao.jsxs=o,Ao}var Ug;function U0(){return Ug||(Ug=1,Gd.exports=$0()),Gd.exports}var c=U0();const B0=Ho(c),F0=Oi({__proto__:null,default:B0},[c]);var Hd={exports:{}},Do={},Kd={exports:{}},Wd={};var Bg;function z0(){return Bg||(Bg=1,(function(a){function s(V,re){var ye=V.length;V.push(re);e:for(;0<ye;){var Ae=ye-1>>>1,_=V[Ae];if(0<i(_,re))V[Ae]=re,V[ye]=_,ye=Ae;else break e}}function o(V){return V.length===0?null:V[0]}function l(V){if(V.length===0)return null;var re=V[0],ye=V.pop();if(ye!==re){V[0]=ye;e:for(var Ae=0,_=V.length,Q=_>>>1;Ae<Q;){var $=2*(Ae+1)-1,G=V[$],oe=$+1,he=V[oe];if(0>i(G,ye))oe<_&&0>i(he,G)?(V[Ae]=he,V[oe]=ye,Ae=oe):(V[Ae]=G,V[$]=ye,Ae=$);else if(oe<_&&0>i(he,ye))V[Ae]=he,V[oe]=ye,Ae=oe;else break e}}return re}function i(V,re){var ye=V.sortIndex-re.sortIndex;return ye!==0?ye:V.id-re.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var g=Date,h=g.now();a.unstable_now=function(){return g.now()-h}}var y=[],f=[],m=1,v=null,E=3,S=!1,R=!1,D=!1,C=!1,w=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function M(V){for(var re=o(f);re!==null;){if(re.callback===null)l(f);else if(re.startTime<=V)l(f),re.sortIndex=re.expirationTime,s(y,re);else break;re=o(f)}}function x(V){if(D=!1,M(V),!R)if(o(y)!==null)R=!0,j||(j=!0,le());else{var re=o(f);re!==null&&ce(x,re.startTime-V)}}var j=!1,L=-1,P=5,K=-1;function ue(){return C?!0:!(a.unstable_now()-K<P)}function ne(){if(C=!1,j){var V=a.unstable_now();K=V;var re=!0;try{e:{R=!1,D&&(D=!1,A(L),L=-1),S=!0;var ye=E;try{t:{for(M(V),v=o(y);v!==null&&!(v.expirationTime>V&&ue());){var Ae=v.callback;if(typeof Ae=="function"){v.callback=null,E=v.priorityLevel;var _=Ae(v.expirationTime<=V);if(V=a.unstable_now(),typeof _=="function"){v.callback=_,M(V),re=!0;break t}v===o(y)&&l(y),M(V)}else l(y);v=o(y)}if(v!==null)re=!0;else{var Q=o(f);Q!==null&&ce(x,Q.startTime-V),re=!1}}break e}finally{v=null,E=ye,S=!1}re=void 0}}finally{re?le():j=!1}}}var le;if(typeof k=="function")le=function(){k(ne)};else if(typeof MessageChannel<"u"){var ve=new MessageChannel,me=ve.port2;ve.port1.onmessage=ne,le=function(){me.postMessage(null)}}else le=function(){w(ne,0)};function ce(V,re){L=w(function(){V(a.unstable_now())},re)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(V){V.callback=null},a.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},a.unstable_getCurrentPriorityLevel=function(){return E},a.unstable_next=function(V){switch(E){case 1:case 2:case 3:var re=3;break;default:re=E}var ye=E;E=re;try{return V()}finally{E=ye}},a.unstable_requestPaint=function(){C=!0},a.unstable_runWithPriority=function(V,re){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ye=E;E=V;try{return re()}finally{E=ye}},a.unstable_scheduleCallback=function(V,re,ye){var Ae=a.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?Ae+ye:Ae):ye=Ae,V){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=ye+_,V={id:m++,callback:re,priorityLevel:V,startTime:ye,expirationTime:_,sortIndex:-1},ye>Ae?(V.sortIndex=ye,s(f,V),o(y)===null&&V===o(f)&&(D?(A(L),L=-1):D=!0,ce(x,ye-Ae))):(V.sortIndex=_,s(y,V),R||S||(R=!0,j||(j=!0,le()))),V},a.unstable_shouldYield=ue,a.unstable_wrapCallback=function(V){var re=E;return function(){var ye=E;E=re;try{return V.apply(this,arguments)}finally{E=ye}}}})(Wd)),Wd}var Fg;function Y0(){return Fg||(Fg=1,Kd.exports=z0()),Kd.exports}var Zd={exports:{}},Be={};var zg;function V0(){if(zg)return Be;zg=1;var a=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),v=Symbol.iterator;function E(_){return _===null||typeof _!="object"?null:(_=v&&_[v]||_["@@iterator"],typeof _=="function"?_:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,D={};function C(_,Q,$){this.props=_,this.context=Q,this.refs=D,this.updater=$||S}C.prototype.isReactComponent={},C.prototype.setState=function(_,Q){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,Q,"setState")},C.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function w(){}w.prototype=C.prototype;function A(_,Q,$){this.props=_,this.context=Q,this.refs=D,this.updater=$||S}var k=A.prototype=new w;k.constructor=A,R(k,C.prototype),k.isPureReactComponent=!0;var M=Array.isArray,x={H:null,A:null,T:null,S:null,V:null},j=Object.prototype.hasOwnProperty;function L(_,Q,$,G,oe,he){return $=he.ref,{$$typeof:a,type:_,key:Q,ref:$!==void 0?$:null,props:he}}function P(_,Q){return L(_.type,Q,void 0,void 0,void 0,_.props)}function K(_){return typeof _=="object"&&_!==null&&_.$$typeof===a}function ue(_){var Q={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function($){return Q[$]})}var ne=/\/+/g;function le(_,Q){return typeof _=="object"&&_!==null&&_.key!=null?ue(""+_.key):Q.toString(36)}function ve(){}function me(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(ve,ve):(_.status="pending",_.then(function(Q){_.status==="pending"&&(_.status="fulfilled",_.value=Q)},function(Q){_.status==="pending"&&(_.status="rejected",_.reason=Q)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function ce(_,Q,$,G,oe){var he=typeof _;(he==="undefined"||he==="boolean")&&(_=null);var be=!1;if(_===null)be=!0;else switch(he){case"bigint":case"string":case"number":be=!0;break;case"object":switch(_.$$typeof){case a:case s:be=!0;break;case m:return be=_._init,ce(be(_._payload),Q,$,G,oe)}}if(be)return oe=oe(_),be=G===""?"."+le(_,0):G,M(oe)?($="",be!=null&&($=be.replace(ne,"$&/")+"/"),ce(oe,Q,$,"",function(it){return it})):oe!=null&&(K(oe)&&(oe=P(oe,$+(oe.key==null||_&&_.key===oe.key?"":(""+oe.key).replace(ne,"$&/")+"/")+be)),Q.push(oe)),1;be=0;var Ye=G===""?".":G+":";if(M(_))for(var Me=0;Me<_.length;Me++)G=_[Me],he=Ye+le(G,Me),be+=ce(G,Q,$,he,oe);else if(Me=E(_),typeof Me=="function")for(_=Me.call(_),Me=0;!(G=_.next()).done;)G=G.value,he=Ye+le(G,Me++),be+=ce(G,Q,$,he,oe);else if(he==="object"){if(typeof _.then=="function")return ce(me(_),Q,$,G,oe);throw Q=String(_),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return be}function V(_,Q,$){if(_==null)return _;var G=[],oe=0;return ce(_,G,"","",function(he){return Q.call($,he,oe++)}),G}function re(_){if(_._status===-1){var Q=_._result;Q=Q(),Q.then(function($){(_._status===0||_._status===-1)&&(_._status=1,_._result=$)},function($){(_._status===0||_._status===-1)&&(_._status=2,_._result=$)}),_._status===-1&&(_._status=0,_._result=Q)}if(_._status===1)return _._result.default;throw _._result}var ye=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function Ae(){}return Be.Children={map:V,forEach:function(_,Q,$){V(_,function(){Q.apply(this,arguments)},$)},count:function(_){var Q=0;return V(_,function(){Q++}),Q},toArray:function(_){return V(_,function(Q){return Q})||[]},only:function(_){if(!K(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},Be.Component=C,Be.Fragment=o,Be.Profiler=i,Be.PureComponent=A,Be.StrictMode=l,Be.Suspense=y,Be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,Be.__COMPILER_RUNTIME={__proto__:null,c:function(_){return x.H.useMemoCache(_)}},Be.cache=function(_){return function(){return _.apply(null,arguments)}},Be.cloneElement=function(_,Q,$){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var G=R({},_.props),oe=_.key,he=void 0;if(Q!=null)for(be in Q.ref!==void 0&&(he=void 0),Q.key!==void 0&&(oe=""+Q.key),Q)!j.call(Q,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&Q.ref===void 0||(G[be]=Q[be]);var be=arguments.length-2;if(be===1)G.children=$;else if(1<be){for(var Ye=Array(be),Me=0;Me<be;Me++)Ye[Me]=arguments[Me+2];G.children=Ye}return L(_.type,oe,void 0,void 0,he,G)},Be.createContext=function(_){return _={$$typeof:g,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:p,_context:_},_},Be.createElement=function(_,Q,$){var G,oe={},he=null;if(Q!=null)for(G in Q.key!==void 0&&(he=""+Q.key),Q)j.call(Q,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(oe[G]=Q[G]);var be=arguments.length-2;if(be===1)oe.children=$;else if(1<be){for(var Ye=Array(be),Me=0;Me<be;Me++)Ye[Me]=arguments[Me+2];oe.children=Ye}if(_&&_.defaultProps)for(G in be=_.defaultProps,be)oe[G]===void 0&&(oe[G]=be[G]);return L(_,he,void 0,void 0,null,oe)},Be.createRef=function(){return{current:null}},Be.forwardRef=function(_){return{$$typeof:h,render:_}},Be.isValidElement=K,Be.lazy=function(_){return{$$typeof:m,_payload:{_status:-1,_result:_},_init:re}},Be.memo=function(_,Q){return{$$typeof:f,type:_,compare:Q===void 0?null:Q}},Be.startTransition=function(_){var Q=x.T,$={};x.T=$;try{var G=_(),oe=x.S;oe!==null&&oe($,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Ae,ye)}catch(he){ye(he)}finally{x.T=Q}},Be.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},Be.use=function(_){return x.H.use(_)},Be.useActionState=function(_,Q,$){return x.H.useActionState(_,Q,$)},Be.useCallback=function(_,Q){return x.H.useCallback(_,Q)},Be.useContext=function(_){return x.H.useContext(_)},Be.useDebugValue=function(){},Be.useDeferredValue=function(_,Q){return x.H.useDeferredValue(_,Q)},Be.useEffect=function(_,Q,$){var G=x.H;if(typeof $=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(_,Q)},Be.useId=function(){return x.H.useId()},Be.useImperativeHandle=function(_,Q,$){return x.H.useImperativeHandle(_,Q,$)},Be.useInsertionEffect=function(_,Q){return x.H.useInsertionEffect(_,Q)},Be.useLayoutEffect=function(_,Q){return x.H.useLayoutEffect(_,Q)},Be.useMemo=function(_,Q){return x.H.useMemo(_,Q)},Be.useOptimistic=function(_,Q){return x.H.useOptimistic(_,Q)},Be.useReducer=function(_,Q,$){return x.H.useReducer(_,Q,$)},Be.useRef=function(_){return x.H.useRef(_)},Be.useState=function(_){return x.H.useState(_)},Be.useSyncExternalStore=function(_,Q,$){return x.H.useSyncExternalStore(_,Q,$)},Be.useTransition=function(){return x.H.useTransition()},Be.version="19.1.4",Be}var Yg;function _i(){return Yg||(Yg=1,Zd.exports=V0()),Zd.exports}var Qd={exports:{}},ua={};var Vg;function X0(){if(Vg)return ua;Vg=1;var a=_i();function s(y){var f="https://react.dev/errors/"+y;if(1<arguments.length){f+="?args[]="+encodeURIComponent(arguments[1]);for(var m=2;m<arguments.length;m++)f+="&args[]="+encodeURIComponent(arguments[m])}return"Minified React error #"+y+"; visit "+f+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(s(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},i=Symbol.for("react.portal");function p(y,f,m){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i,key:v==null?null:""+v,children:y,containerInfo:f,implementation:m}}var g=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(y,f){if(y==="font")return"";if(typeof f=="string")return f==="use-credentials"?f:""}return ua.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,ua.createPortal=function(y,f){var m=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!f||f.nodeType!==1&&f.nodeType!==9&&f.nodeType!==11)throw Error(s(299));return p(y,f,null,m)},ua.flushSync=function(y){var f=g.T,m=l.p;try{if(g.T=null,l.p=2,y)return y()}finally{g.T=f,l.p=m,l.d.f()}},ua.preconnect=function(y,f){typeof y=="string"&&(f?(f=f.crossOrigin,f=typeof f=="string"?f==="use-credentials"?f:"":void 0):f=null,l.d.C(y,f))},ua.prefetchDNS=function(y){typeof y=="string"&&l.d.D(y)},ua.preinit=function(y,f){if(typeof y=="string"&&f&&typeof f.as=="string"){var m=f.as,v=h(m,f.crossOrigin),E=typeof f.integrity=="string"?f.integrity:void 0,S=typeof f.fetchPriority=="string"?f.fetchPriority:void 0;m==="style"?l.d.S(y,typeof f.precedence=="string"?f.precedence:void 0,{crossOrigin:v,integrity:E,fetchPriority:S}):m==="script"&&l.d.X(y,{crossOrigin:v,integrity:E,fetchPriority:S,nonce:typeof f.nonce=="string"?f.nonce:void 0})}},ua.preinitModule=function(y,f){if(typeof y=="string")if(typeof f=="object"&&f!==null){if(f.as==null||f.as==="script"){var m=h(f.as,f.crossOrigin);l.d.M(y,{crossOrigin:m,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0})}}else f==null&&l.d.M(y)},ua.preload=function(y,f){if(typeof y=="string"&&typeof f=="object"&&f!==null&&typeof f.as=="string"){var m=f.as,v=h(m,f.crossOrigin);l.d.L(y,m,{crossOrigin:v,integrity:typeof f.integrity=="string"?f.integrity:void 0,nonce:typeof f.nonce=="string"?f.nonce:void 0,type:typeof f.type=="string"?f.type:void 0,fetchPriority:typeof f.fetchPriority=="string"?f.fetchPriority:void 0,referrerPolicy:typeof f.referrerPolicy=="string"?f.referrerPolicy:void 0,imageSrcSet:typeof f.imageSrcSet=="string"?f.imageSrcSet:void 0,imageSizes:typeof f.imageSizes=="string"?f.imageSizes:void 0,media:typeof f.media=="string"?f.media:void 0})}},ua.preloadModule=function(y,f){if(typeof y=="string")if(f){var m=h(f.as,f.crossOrigin);l.d.m(y,{as:typeof f.as=="string"&&f.as!=="script"?f.as:void 0,crossOrigin:m,integrity:typeof f.integrity=="string"?f.integrity:void 0})}else l.d.m(y)},ua.requestFormReset=function(y){l.d.r(y)},ua.unstable_batchedUpdates=function(y,f){return y(f)},ua.useFormState=function(y,f,m){return g.H.useFormState(y,f,m)},ua.useFormStatus=function(){return g.H.useHostTransitionStatus()},ua.version="19.1.4",ua}var Xg;function dy(){if(Xg)return Qd.exports;Xg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Qd.exports=X0(),Qd.exports}var Gg;function G0(){if(Gg)return Do;Gg=1;var a=Y0(),s=_i(),o=dy();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(p(e)!==e)throw Error(l(188))}function y(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var d=n.return;if(d===null)break;var u=d.alternate;if(u===null){if(r=d.return,r!==null){n=r;continue}break}if(d.child===u.child){for(u=d.child;u;){if(u===n)return h(d),e;if(u===r)return h(d),t;u=u.sibling}throw Error(l(188))}if(n.return!==r.return)n=d,r=u;else{for(var b=!1,T=d.child;T;){if(T===n){b=!0,n=d,r=u;break}if(T===r){b=!0,r=d,n=u;break}T=T.sibling}if(!b){for(T=u.child;T;){if(T===n){b=!0,n=u,r=d;break}if(T===r){b=!0,r=u,n=d;break}T=T.sibling}if(!b)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,v=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),A=Symbol.for("react.consumer"),k=Symbol.for("react.context"),M=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ve?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case C:return"Profiler";case D:return"StrictMode";case x:return"Suspense";case j:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case k:return(e.displayName||"Context")+".Provider";case A:return(e._context.displayName||"Context")+".Consumer";case M:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return t=e.displayName||null,t!==null?t:me(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return me(e(t))}catch{}}return null}var ce=Array.isArray,V=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},Ae=[],_=-1;function Q(e){return{current:e}}function $(e){0>_||(e.current=Ae[_],Ae[_]=null,_--)}function G(e,t){_++,Ae[_]=e.current,e.current=t}var oe=Q(null),he=Q(null),be=Q(null),Ye=Q(null);function Me(e,t){switch(G(be,t),G(he,e),G(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?pg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=pg(t),e=hg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(oe),G(oe,e)}function it(){$(oe),$(he),$(be)}function pt(e){e.memoizedState!==null&&G(Ye,e);var t=oe.current,n=hg(t,e.type);t!==n&&(G(he,e),G(oe,n))}function jt(e){he.current===e&&($(oe),$(he)),Ye.current===e&&($(Ye),Eo._currentValue=ye)}var Je=Object.prototype.hasOwnProperty,xt=a.unstable_scheduleCallback,fa=a.unstable_cancelCallback,U=a.unstable_shouldYield,ie=a.unstable_requestPaint,fe=a.unstable_now,B=a.unstable_getCurrentPriorityLevel,de=a.unstable_ImmediatePriority,Re=a.unstable_UserBlockingPriority,ge=a.unstable_NormalPriority,qe=a.unstable_LowPriority,Fe=a.unstable_IdlePriority,Ie=a.log,De=a.unstable_setDisableYieldValue,Qt=null,xe=null;function Ke(e){if(typeof Ie=="function"&&De(e),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(Qt,e)}catch{}}var st=Math.clz32?Math.clz32:Lt,vt=Math.log,Ce=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(vt(e)/Ce|0)|0}var Gt=256,Ut=4194304;function Bt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function At(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var d=0,u=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~u,r!==0?d=Bt(r):(b&=T,b!==0?d=Bt(b):n||(n=T&~e,n!==0&&(d=Bt(n))))):(T=r&~u,T!==0?d=Bt(T):b!==0?d=Bt(b):n||(n=r&~e,n!==0&&(d=Bt(n)))),d===0?0:t!==0&&t!==d&&(t&u)===0&&(u=d&-d,n=t&-t,u>=n||u===32&&(n&4194048)!==0)?t:d}function Sa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function ia(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ta(){var e=Gt;return Gt<<=1,(Gt&4194048)===0&&(Gt=256),e}function qt(){var e=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),e}function ht(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $a(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ca(e,t,n,r,d,u){var b=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var T=e.entanglements,O=e.expirationTimes,H=e.hiddenUpdates;for(n=b&~n;0<n;){var ee=31-st(n),se=1<<ee;T[ee]=0,O[ee]=-1;var W=H[ee];if(W!==null)for(H[ee]=null,ee=0;ee<W.length;ee++){var Z=W[ee];Z!==null&&(Z.lane&=-536870913)}n&=~se}r!==0&&Wa(e,r,0),u!==0&&d===0&&e.tag!==0&&(e.suspendedLanes|=u&~(b&~t))}function Wa(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-st(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&4194090}function Dt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-st(n),d=1<<r;d&t|e[r]&t&&(e[r]|=t),n&=~d}}function qn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ha(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:Og(e.type))}function Jt(e,t){var n=re.p;try{return re.p=e,t()}finally{re.p=n}}var F=Math.random().toString(36).slice(2),pe="__reactFiber$"+F,Ee="__reactProps$"+F,N="__reactContainer$"+F,Y="__reactEvents$"+F,te="__reactListeners$"+F,Te="__reactHandles$"+F,Pe="__reactResources$"+F,Ne="__reactMarker$"+F;function _e(e){delete e[pe],delete e[Ee],delete e[Y],delete e[te],delete e[Te]}function Ue(e){var t=e[pe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[N]||n[pe]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bg(e);e!==null;){if(n=e[pe])return n;e=bg(e)}return t}e=n,n=e.parentNode}return null}function St(e){if(e=e[pe]||e[N]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ea(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Aa(e){var t=e[Pe];return t||(t=e[Pe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ot(e){e[Ne]=!0}var nl=new Set,sl={};function mn(e,t){yn(e,t),yn(e+"Capture",t)}function yn(e,t){for(sl[e]=t,e=0;e<t.length;e++)nl.add(t[e])}var gs=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rl={},we={};function $e(e){return Je.call(we,e)?!0:Je.call(rl,e)?!1:gs.test(e)?we[e]=!0:(rl[e]=!0,!1)}function yt(e,t,n){if($e(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Ct(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function tt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+r)}}var ta,In;function Ft(e){if(ta===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ta=t&&t[1]||"",In=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ta+e+In}var Da=!1;function Ca(e,t){if(!e||Da)return"";Da=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var se=function(){throw Error()};if(Object.defineProperty(se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(se,[])}catch(Z){var W=Z}Reflect.construct(e,[],se)}else{try{se.call()}catch(Z){W=Z}e.call(se.prototype)}}else{try{throw Error()}catch(Z){W=Z}(se=e())&&typeof se.catch=="function"&&se.catch(function(){})}}catch(Z){if(Z&&W&&typeof Z.stack=="string")return[Z.stack,W.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),b=u[0],T=u[1];if(b&&T){var O=b.split(`
`),H=T.split(`
`);for(d=r=0;r<O.length&&!O[r].includes("DetermineComponentFrameRoot");)r++;for(;d<H.length&&!H[d].includes("DetermineComponentFrameRoot");)d++;if(r===O.length||d===H.length)for(r=O.length-1,d=H.length-1;1<=r&&0<=d&&O[r]!==H[d];)d--;for(;1<=r&&0<=d;r--,d--)if(O[r]!==H[d]){if(r!==1||d!==1)do if(r--,d--,0>d||O[r]!==H[d]){var ee=`
`+O[r].replace(" at new "," at ");return e.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",e.displayName)),ee}while(1<=r&&0<=d);break}}}finally{Da=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ft(n):""}function Bs(e){switch(e.tag){case 26:case 27:case 5:return Ft(e.type);case 16:return Ft("Lazy");case 13:return Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 15:return Ca(e.type,!1);case 11:return Ca(e.type.render,!1);case 1:return Ca(e.type,!0);case 31:return Ft("Activity");default:return""}}function of(e){try{var t="";do t+=Bs(e),e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function Ua(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _b(e){var t=lf(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var d=n.get,u=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(b){r=""+b,u.call(this,b)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ol(e){e._valueTracker||(e._valueTracker=_b(e))}function cf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lf(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pb=/[\n"\\]/g;function Ba(e){return e.replace(Pb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Yi(e,t,n,r,d,u,b,T){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),t!=null?b==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ua(t)):e.value!==""+Ua(t)&&(e.value=""+Ua(t)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),t!=null?Vi(e,b,Ua(t)):n!=null?Vi(e,b,Ua(n)):r!=null&&e.removeAttribute("value"),d==null&&u!=null&&(e.defaultChecked=!!u),d!=null&&(e.checked=d&&typeof d!="function"&&typeof d!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Ua(T):e.removeAttribute("name")}function df(e,t,n,r,d,u,b,T){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),t!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||t!=null))return;n=n!=null?""+Ua(n):"",t=t!=null?""+Ua(t):n,T||t===e.value||(e.value=t),e.defaultValue=t}r=r??d,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b)}function Vi(e,t,n){t==="number"&&ll(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Fs(e,t,n,r){if(e=e.options,t){t={};for(var d=0;d<n.length;d++)t["$"+n[d]]=!0;for(n=0;n<e.length;n++)d=t.hasOwnProperty("$"+e[n].value),e[n].selected!==d&&(e[n].selected=d),d&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ua(n),t=null,d=0;d<e.length;d++){if(e[d].value===n){e[d].selected=!0,r&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function uf(e,t,n){if(t!=null&&(t=""+Ua(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ua(n):""}function ff(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(l(92));if(ce(r)){if(1<r.length)throw Error(l(93));r=r[0]}n=r}n==null&&(n=""),t=n}n=Ua(t),e.defaultValue=n,r=e.textContent,r===n&&r!==""&&r!==null&&(e.value=r)}function zs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var qb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pf(e,t,n){var r=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,n):typeof n!="number"||n===0||qb.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function hf(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var d in t)r=t[d],t.hasOwnProperty(d)&&n[d]!==r&&pf(e,d,r)}else for(var u in t)t.hasOwnProperty(u)&&pf(e,u,t[u])}function Xi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ib=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mb=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function il(e){return Mb.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Gi=null;function Hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ys=null,Vs=null;function gf(e){var t=St(e);if(t&&(e=t.stateNode)){var n=e[Ee]||null;e:switch(e=t.stateNode,t.type){case"input":if(Yi(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Ba(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var d=r[Ee]||null;if(!d)throw Error(l(90));Yi(r,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&cf(r)}break e;case"textarea":uf(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Fs(e,!!n.multiple,t,!1)}}}var Ki=!1;function mf(e,t,n){if(Ki)return e(t,n);Ki=!0;try{var r=e(t);return r}finally{if(Ki=!1,(Ys!==null||Vs!==null)&&(Gl(),Ys&&(t=Ys,e=Vs,Vs=Ys=null,gf(t),e)))for(t=0;t<e.length;t++)gf(e[t])}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=n[Ee]||null;if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wi=!1;if(bn)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Wi=!1}var Mn=null,Zi=null,cl=null;function yf(){if(cl)return cl;var e,t=Zi,n=t.length,r,d="value"in Mn?Mn.value:Mn.textContent,u=d.length;for(e=0;e<n&&t[e]===d[e];e++);var b=n-e;for(r=1;r<=b&&t[n-r]===d[u-r];r++);return cl=d.slice(e,1<r?1-r:void 0)}function dl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ul(){return!0}function bf(){return!1}function va(e){function t(n,r,d,u,b){this._reactName=n,this._targetInst=d,this.type=r,this.nativeEvent=u,this.target=b,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(n=e[T],this[T]=n?n(u):u[T]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?ul:bf,this.isPropagationStopped=bf,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),t}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=va(ms),_r=m({},ms,{view:0,detail:0}),$b=va(_r),Qi,Ji,Pr,pl=m({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Qi=e.screenX-Pr.screenX,Ji=e.screenY-Pr.screenY):Ji=Qi=0,Pr=e),Qi)},movementY:function(e){return"movementY"in e?e.movementY:Ji}}),vf=va(pl),Ub=m({},pl,{dataTransfer:0}),Bb=va(Ub),Fb=m({},_r,{relatedTarget:0}),ec=va(Fb),zb=m({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),Yb=va(zb),Vb=m({},ms,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Xb=va(Vb),Gb=m({},ms,{data:0}),Ef=va(Gb),Hb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wb[e])?!!t[e]:!1}function tc(){return Zb}var Qb=m({},_r,{key:function(e){if(e.key){var t=Hb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=dl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(e){return e.type==="keypress"?dl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?dl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jb=va(Qb),ev=m({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wf=va(ev),tv=m({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),av=va(tv),nv=m({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=va(nv),rv=m({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ov=va(rv),lv=m({},ms,{newState:0,oldState:0}),iv=va(lv),cv=[9,13,27,32],ac=bn&&"CompositionEvent"in window,qr=null;bn&&"documentMode"in document&&(qr=document.documentMode);var dv=bn&&"TextEvent"in window&&!qr,xf=bn&&(!ac||qr&&8<qr&&11>=qr),Sf=" ",Tf=!1;function Af(e,t){switch(e){case"keyup":return cv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xs=!1;function uv(e,t){switch(e){case"compositionend":return Df(t);case"keypress":return t.which!==32?null:(Tf=!0,Sf);case"textInput":return e=t.data,e===Sf&&Tf?null:e;default:return null}}function fv(e,t){if(Xs)return e==="compositionend"||!ac&&Af(e,t)?(e=yf(),cl=Zi=Mn=null,Xs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xf&&t.locale!=="ko"?null:t.data;default:return null}}var pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pv[e.type]:t==="textarea"}function Nf(e,t,n,r){Ys?Vs?Vs.push(r):Vs=[r]:Ys=r,t=Jl(t,"onChange"),0<t.length&&(n=new fl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ir=null,Mr=null;function hv(e){ig(e,0)}function hl(e){var t=ea(e);if(cf(t))return e}function kf(e,t){if(e==="change")return t}var Rf=!1;if(bn){var nc;if(bn){var sc="oninput"in document;if(!sc){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),sc=typeof jf.oninput=="function"}nc=sc}else nc=!1;Rf=nc&&(!document.documentMode||9<document.documentMode)}function Lf(){Ir&&(Ir.detachEvent("onpropertychange",Of),Mr=Ir=null)}function Of(e){if(e.propertyName==="value"&&hl(Mr)){var t=[];Nf(t,Mr,e,Hi(e)),mf(hv,t)}}function gv(e,t,n){e==="focusin"?(Lf(),Ir=t,Mr=n,Ir.attachEvent("onpropertychange",Of)):e==="focusout"&&Lf()}function mv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return hl(Mr)}function yv(e,t){if(e==="click")return hl(t)}function bv(e,t){if(e==="input"||e==="change")return hl(t)}function vv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Na=typeof Object.is=="function"?Object.is:vv;function $r(e,t){if(Na(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var d=n[r];if(!Je.call(t,d)||!Na(e[d],t[d]))return!1}return!0}function _f(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pf(e,t){var n=_f(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=_f(n)}}function qf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function If(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ll(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ll(e.document)}return t}function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Ev=bn&&"documentMode"in document&&11>=document.documentMode,Gs=null,oc=null,Ur=null,lc=!1;function Mf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lc||Gs==null||Gs!==ll(r)||(r=Gs,"selectionStart"in r&&rc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&$r(Ur,r)||(Ur=r,r=Jl(oc,"onSelect"),0<r.length&&(t=new fl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gs)))}function ys(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Hs={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},ic={},$f={};bn&&($f=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function bs(e){if(ic[e])return ic[e];if(!Hs[e])return e;var t=Hs[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $f)return ic[e]=t[n];return e}var Uf=bs("animationend"),Bf=bs("animationiteration"),Ff=bs("animationstart"),wv=bs("transitionrun"),xv=bs("transitionstart"),Sv=bs("transitioncancel"),zf=bs("transitionend"),Yf=new Map,cc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cc.push("scrollEnd");function Za(e,t){Yf.set(e,t),mn(t,[e])}var Vf=new WeakMap;function Fa(e,t){if(typeof e=="object"&&e!==null){var n=Vf.get(e);return n!==void 0?n:(t={value:e,source:t,stack:of(t)},Vf.set(e,t),t)}return{value:e,source:t,stack:of(t)}}var za=[],Ks=0,dc=0;function gl(){for(var e=Ks,t=dc=Ks=0;t<e;){var n=za[t];za[t++]=null;var r=za[t];za[t++]=null;var d=za[t];za[t++]=null;var u=za[t];if(za[t++]=null,r!==null&&d!==null){var b=r.pending;b===null?d.next=d:(d.next=b.next,b.next=d),r.pending=d}u!==0&&Xf(n,d,u)}}function ml(e,t,n,r){za[Ks++]=e,za[Ks++]=t,za[Ks++]=n,za[Ks++]=r,dc|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function uc(e,t,n,r){return ml(e,t,n,r),yl(e)}function Ws(e,t){return ml(e,null,null,t),yl(e)}function Xf(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var d=!1,u=e.return;u!==null;)u.childLanes|=n,r=u.alternate,r!==null&&(r.childLanes|=n),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(d=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,d&&t!==null&&(d=31-st(n),e=u.hiddenUpdates,r=e[d],r===null?e[d]=[t]:r.push(t),t.lane=n|536870912),u):null}function yl(e){if(50<fo)throw fo=0,yd=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Zs={};function Tv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ka(e,t,n,r){return new Tv(e,t,n,r)}function fc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vn(e,t){var n=e.alternate;return n===null?(n=ka(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Gf(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bl(e,t,n,r,d,u){var b=0;if(r=e,typeof e=="function")fc(e)&&(b=1);else if(typeof e=="string")b=D0(e,n,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=ka(31,n,t,d),e.elementType=K,e.lanes=u,e;case R:return vs(n.children,d,u,t);case D:b=8,d|=24;break;case C:return e=ka(12,n,t,d|2),e.elementType=C,e.lanes=u,e;case x:return e=ka(13,n,t,d),e.elementType=x,e.lanes=u,e;case j:return e=ka(19,n,t,d),e.elementType=j,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:case k:b=10;break e;case A:b=9;break e;case M:b=11;break e;case L:b=14;break e;case P:b=16,r=null;break e}b=29,n=Error(l(130,e===null?"null":typeof e,"")),r=null}return t=ka(b,n,t,d),t.elementType=e,t.type=r,t.lanes=u,t}function vs(e,t,n,r){return e=ka(7,e,r,t),e.lanes=n,e}function pc(e,t,n){return e=ka(6,e,null,t),e.lanes=n,e}function hc(e,t,n){return t=ka(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Qs=[],Js=0,vl=null,El=0,Ya=[],Va=0,Es=null,En=1,wn="";function ws(e,t){Qs[Js++]=El,Qs[Js++]=vl,vl=e,El=t}function Hf(e,t,n){Ya[Va++]=En,Ya[Va++]=wn,Ya[Va++]=Es,Es=e;var r=En;e=wn;var d=32-st(r)-1;r&=~(1<<d),n+=1;var u=32-st(t)+d;if(30<u){var b=d-d%5;u=(r&(1<<b)-1).toString(32),r>>=b,d-=b,En=1<<32-st(t)+d|n<<d|r,wn=u+e}else En=1<<u|n<<d|r,wn=e}function gc(e){e.return!==null&&(ws(e,1),Hf(e,1,0))}function mc(e){for(;e===vl;)vl=Qs[--Js],Qs[Js]=null,El=Qs[--Js],Qs[Js]=null;for(;e===Es;)Es=Ya[--Va],Ya[Va]=null,wn=Ya[--Va],Ya[Va]=null,En=Ya[--Va],Ya[Va]=null}var ga=null,Nt=null,at=!1,xs=null,nn=!1,yc=Error(l(519));function Ss(e){var t=Error(l(418,""));throw zr(Fa(t,e)),yc}function Kf(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pe]=e,t[Ee]=r,n){case"dialog":He("cancel",t),He("close",t);break;case"iframe":case"object":case"embed":He("load",t);break;case"video":case"audio":for(n=0;n<ho.length;n++)He(ho[n],t);break;case"source":He("error",t);break;case"img":case"image":case"link":He("error",t),He("load",t);break;case"details":He("toggle",t);break;case"input":He("invalid",t),df(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),ol(t);break;case"select":He("invalid",t);break;case"textarea":He("invalid",t),ff(t,r.value,r.defaultValue,r.children),ol(t)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||r.suppressHydrationWarning===!0||fg(t.textContent,n)?(r.popover!=null&&(He("beforetoggle",t),He("toggle",t)),r.onScroll!=null&&He("scroll",t),r.onScrollEnd!=null&&He("scrollend",t),r.onClick!=null&&(t.onclick=ei),t=!0):t=!1,t||Ss(e)}function Wf(e){for(ga=e.return;ga;)switch(ga.tag){case 5:case 13:nn=!1;return;case 27:case 3:nn=!0;return;default:ga=ga.return}}function Br(e){if(e!==ga)return!1;if(!at)return Wf(e),at=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Od(e.type,e.memoizedProps)),n=!n),n&&Nt&&Ss(e),Wf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(n=e.data,n==="/$"){if(t===0){Nt=Ja(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++;e=e.nextSibling}Nt=null}}else t===27?(t=Nt,es(e.type)?(e=Id,Id=null,Nt=e):Nt=t):Nt=ga?Ja(e.stateNode.nextSibling):null;return!0}function Fr(){Nt=ga=null,at=!1}function Zf(){var e=xs;return e!==null&&(xa===null?xa=e:xa.push.apply(xa,e),xs=null),e}function zr(e){xs===null?xs=[e]:xs.push(e)}var bc=Q(null),Ts=null,xn=null;function $n(e,t,n){G(bc,t._currentValue),t._currentValue=n}function Sn(e){e._currentValue=bc.current,$(bc)}function vc(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ec(e,t,n,r){var d=e.child;for(d!==null&&(d.return=e);d!==null;){var u=d.dependencies;if(u!==null){var b=d.child;u=u.firstContext;e:for(;u!==null;){var T=u;u=d;for(var O=0;O<t.length;O++)if(T.context===t[O]){u.lanes|=n,T=u.alternate,T!==null&&(T.lanes|=n),vc(u.return,n,e),r||(b=null);break e}u=T.next}}else if(d.tag===18){if(b=d.return,b===null)throw Error(l(341));b.lanes|=n,u=b.alternate,u!==null&&(u.lanes|=n),vc(b,n,e),b=null}else b=d.child;if(b!==null)b.return=d;else for(b=d;b!==null;){if(b===e){b=null;break}if(d=b.sibling,d!==null){d.return=b.return,b=d;break}b=b.return}d=b}}function Yr(e,t,n,r){e=null;for(var d=t,u=!1;d!==null;){if(!u){if((d.flags&524288)!==0)u=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var b=d.alternate;if(b===null)throw Error(l(387));if(b=b.memoizedProps,b!==null){var T=d.type;Na(d.pendingProps.value,b.value)||(e!==null?e.push(T):e=[T])}}else if(d===Ye.current){if(b=d.alternate,b===null)throw Error(l(387));b.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(e!==null?e.push(Eo):e=[Eo])}d=d.return}e!==null&&Ec(t,e,n,r),t.flags|=262144}function wl(e){for(e=e.firstContext;e!==null;){if(!Na(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Ts=e,xn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function da(e){return Qf(Ts,e)}function xl(e,t){return Ts===null&&As(e),Qf(e,t)}function Qf(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},xn===null){if(e===null)throw Error(l(308));xn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else xn=xn.next=t;return n}var Av=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Dv=a.unstable_scheduleCallback,Cv=a.unstable_NormalPriority,zt={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wc(){return{controller:new Av,data:new Map,refCount:0}}function Vr(e){e.refCount--,e.refCount===0&&Dv(Cv,function(){e.controller.abort()})}var Xr=null,xc=0,er=0,tr=null;function Nv(e,t){if(Xr===null){var n=Xr=[];xc=0,er=Td(),tr={status:"pending",value:void 0,then:function(r){n.push(r)}}}return xc++,t.then(Jf,Jf),t}function Jf(){if(--xc===0&&Xr!==null){tr!==null&&(tr.status="fulfilled");var e=Xr;Xr=null,er=0,tr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function kv(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(d){n.push(d)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var d=0;d<n.length;d++)(0,n[d])(t)},function(d){for(r.status="rejected",r.reason=d,d=0;d<n.length;d++)(0,n[d])(void 0)}),r}var ep=V.S;V.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Nv(e,t),ep!==null&&ep(e,t)};var Ds=Q(null);function Sc(){var e=Ds.current;return e!==null?e:gt.pooledCache}function Sl(e,t){t===null?G(Ds,Ds.current):G(Ds,t.pool)}function tp(){var e=Sc();return e===null?null:{parent:zt._currentValue,pool:e}}var Gr=Error(l(460)),ap=Error(l(474)),Tl=Error(l(542)),Tc={then:function(){}};function np(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Al(){}function sp(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Al,Al),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,op(e),e;default:if(typeof t.status=="string")t.then(Al,Al);else{if(e=gt,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var d=t;d.status="fulfilled",d.value=r}},function(r){if(t.status==="pending"){var d=t;d.status="rejected",d.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,op(e),e}throw Hr=t,Gr}}var Hr=null;function rp(){if(Hr===null)throw Error(l(459));var e=Hr;return Hr=null,e}function op(e){if(e===Gr||e===Tl)throw Error(l(483))}var Un=!1;function Ac(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(rt&2)!==0){var d=r.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),r.pending=t,t=yl(e),Xf(e,null,n),t}return ml(e,r,t,n),yl(e)}function Kr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dt(e,n)}}function Cc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var d=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var b={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?d=u=b:u=u.next=b,n=n.next}while(n!==null);u===null?d=u=t:u=u.next=t}else d=u=t;n={baseState:r.baseState,firstBaseUpdate:d,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Nc=!1;function Wr(){if(Nc){var e=tr;if(e!==null)throw e}}function Zr(e,t,n,r){Nc=!1;var d=e.updateQueue;Un=!1;var u=d.firstBaseUpdate,b=d.lastBaseUpdate,T=d.shared.pending;if(T!==null){d.shared.pending=null;var O=T,H=O.next;O.next=null,b===null?u=H:b.next=H,b=O;var ee=e.alternate;ee!==null&&(ee=ee.updateQueue,T=ee.lastBaseUpdate,T!==b&&(T===null?ee.firstBaseUpdate=H:T.next=H,ee.lastBaseUpdate=O))}if(u!==null){var se=d.baseState;b=0,ee=H=O=null,T=u;do{var W=T.lane&-536870913,Z=W!==T.lane;if(Z?(Qe&W)===W:(r&W)===W){W!==0&&W===er&&(Nc=!0),ee!==null&&(ee=ee.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Oe=e,je=T;W=t;var ut=n;switch(je.tag){case 1:if(Oe=je.payload,typeof Oe=="function"){se=Oe.call(ut,se,W);break e}se=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=je.payload,W=typeof Oe=="function"?Oe.call(ut,se,W):Oe,W==null)break e;se=m({},se,W);break e;case 2:Un=!0}}W=T.callback,W!==null&&(e.flags|=64,Z&&(e.flags|=8192),Z=d.callbacks,Z===null?d.callbacks=[W]:Z.push(W))}else Z={lane:W,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ee===null?(H=ee=Z,O=se):ee=ee.next=Z,b|=W;if(T=T.next,T===null){if(T=d.shared.pending,T===null)break;Z=T,T=Z.next,Z.next=null,d.lastBaseUpdate=Z,d.shared.pending=null}}while(!0);ee===null&&(O=se),d.baseState=O,d.firstBaseUpdate=H,d.lastBaseUpdate=ee,u===null&&(d.shared.lanes=0),Wn|=b,e.lanes=b,e.memoizedState=se}}function lp(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function ip(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)lp(n[e],t)}var ar=Q(null),Dl=Q(0);function cp(e,t){e=Rn,G(Dl,e),G(ar,t),Rn=e|t.baseLanes}function kc(){G(Dl,Rn),G(ar,ar.current)}function Rc(){Rn=Dl.current,$(ar),$(Dl)}var zn=0,ze=null,ct=null,It=null,Cl=!1,nr=!1,Cs=!1,Nl=0,Qr=0,sr=null,Rv=0;function _t(){throw Error(l(321))}function jc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Na(e[n],t[n]))return!1;return!0}function Lc(e,t,n,r,d,u){return zn=u,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?Xp:Gp,Cs=!1,u=n(r,d),Cs=!1,nr&&(u=up(t,n,r,d)),dp(e),u}function dp(e){V.H=_l;var t=ct!==null&&ct.next!==null;if(zn=0,It=ct=ze=null,Cl=!1,Qr=0,sr=null,t)throw Error(l(300));e===null||Ht||(e=e.dependencies,e!==null&&wl(e)&&(Ht=!0))}function up(e,t,n,r){ze=e;var d=0;do{if(nr&&(sr=null),Qr=0,nr=!1,25<=d)throw Error(l(301));if(d+=1,It=ct=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}V.H=Iv,u=t(n,r)}while(nr);return u}function jv(){var e=V.H,t=e.useState()[0];return t=typeof t.then=="function"?Jr(t):t,e=e.useState()[0],(ct!==null?ct.memoizedState:null)!==e&&(ze.flags|=1024),t}function Oc(){var e=Nl!==0;return Nl=0,e}function _c(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Pc(e){if(Cl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Cl=!1}zn=0,It=ct=ze=null,nr=!1,Qr=Nl=0,sr=null}function Ea(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?ze.memoizedState=It=e:It=It.next=e,It}function Mt(){if(ct===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=It===null?ze.memoizedState:It.next;if(t!==null)It=t,ct=e;else{if(e===null)throw ze.alternate===null?Error(l(467)):Error(l(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},It===null?ze.memoizedState=It=e:It=It.next=e}return It}function qc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jr(e){var t=Qr;return Qr+=1,sr===null&&(sr=[]),e=sp(sr,e,t),t=ze,(It===null?t.memoizedState:It.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?Xp:Gp),e}function kl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jr(e);if(e.$$typeof===k)return da(e)}throw Error(l(438,String(e)))}function Ic(e){var t=null,n=ze.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=ze.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(d){return d.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=qc(),ze.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=ue;return t.index++,n}function Tn(e,t){return typeof t=="function"?t(e):t}function Rl(e){var t=Mt();return Mc(t,ct,e)}function Mc(e,t,n){var r=e.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=n;var d=e.baseQueue,u=r.pending;if(u!==null){if(d!==null){var b=d.next;d.next=u.next,u.next=b}t.baseQueue=d=u,r.pending=null}if(u=e.baseState,d===null)e.memoizedState=u;else{t=d.next;var T=b=null,O=null,H=t,ee=!1;do{var se=H.lane&-536870913;if(se!==H.lane?(Qe&se)===se:(zn&se)===se){var W=H.revertLane;if(W===0)O!==null&&(O=O.next={lane:0,revertLane:0,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null}),se===er&&(ee=!0);else if((zn&W)===W){H=H.next,W===er&&(ee=!0);continue}else se={lane:0,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},O===null?(T=O=se,b=u):O=O.next=se,ze.lanes|=W,Wn|=W;se=H.action,Cs&&n(u,se),u=H.hasEagerState?H.eagerState:n(u,se)}else W={lane:se,revertLane:H.revertLane,action:H.action,hasEagerState:H.hasEagerState,eagerState:H.eagerState,next:null},O===null?(T=O=W,b=u):O=O.next=W,ze.lanes|=se,Wn|=se;H=H.next}while(H!==null&&H!==t);if(O===null?b=u:O.next=T,!Na(u,e.memoizedState)&&(Ht=!0,ee&&(n=tr,n!==null)))throw n;e.memoizedState=u,e.baseState=b,e.baseQueue=O,r.lastRenderedState=u}return d===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function $c(e){var t=Mt(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,d=n.pending,u=t.memoizedState;if(d!==null){n.pending=null;var b=d=d.next;do u=e(u,b.action),b=b.next;while(b!==d);Na(u,t.memoizedState)||(Ht=!0),t.memoizedState=u,t.baseQueue===null&&(t.baseState=u),n.lastRenderedState=u}return[u,r]}function fp(e,t,n){var r=ze,d=Mt(),u=at;if(u){if(n===void 0)throw Error(l(407));n=n()}else n=t();var b=!Na((ct||d).memoizedState,n);b&&(d.memoizedState=n,Ht=!0),d=d.queue;var T=gp.bind(null,r,d,e);if(eo(2048,8,T,[e]),d.getSnapshot!==t||b||It!==null&&It.memoizedState.tag&1){if(r.flags|=2048,rr(9,jl(),hp.bind(null,r,d,n,t),null),gt===null)throw Error(l(349));u||(zn&124)!==0||pp(r,t,n)}return n}function pp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ze.updateQueue,t===null?(t=qc(),ze.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function hp(e,t,n,r){t.value=n,t.getSnapshot=r,mp(t)&&yp(e)}function gp(e,t,n){return n(function(){mp(t)&&yp(e)})}function mp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Na(e,n)}catch{return!0}}function yp(e){var t=Ws(e,2);t!==null&&_a(t,e,2)}function Uc(e){var t=Ea();if(typeof e=="function"){var n=e;if(e=n(),Cs){Ke(!0);try{n()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:e},t}function bp(e,t,n,r){return e.baseState=n,Mc(e,ct,typeof r=="function"?r:Tn)}function Lv(e,t,n,r,d){if(Ol(e))throw Error(l(485));if(e=t.action,e!==null){var u={payload:d,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){u.listeners.push(b)}};V.T!==null?n(!0):u.isTransition=!1,r(u),n=t.pending,n===null?(u.next=t.pending=u,vp(t,u)):(u.next=n.next,t.pending=n.next=u)}}function vp(e,t){var n=t.action,r=t.payload,d=e.state;if(t.isTransition){var u=V.T,b={};V.T=b;try{var T=n(d,r),O=V.S;O!==null&&O(b,T),Ep(e,t,T)}catch(H){Bc(e,t,H)}finally{V.T=u}}else try{u=n(d,r),Ep(e,t,u)}catch(H){Bc(e,t,H)}}function Ep(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){wp(e,t,r)},function(r){return Bc(e,t,r)}):wp(e,t,n)}function wp(e,t,n){t.status="fulfilled",t.value=n,xp(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,vp(e,n)))}function Bc(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=n,xp(t),t=t.next;while(t!==r)}e.action=null}function xp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Sp(e,t){return t}function Tp(e,t){if(at){var n=gt.formState;if(n!==null){e:{var r=ze;if(at){if(Nt){t:{for(var d=Nt,u=nn;d.nodeType!==8;){if(!u){d=null;break t}if(d=Ja(d.nextSibling),d===null){d=null;break t}}u=d.data,d=u==="F!"||u==="F"?d:null}if(d){Nt=Ja(d.nextSibling),r=d.data==="F!";break e}}Ss(r)}r=!1}r&&(t=n[0])}}return n=Ea(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Sp,lastRenderedState:t},n.queue=r,n=zp.bind(null,ze,r),r.dispatch=n,r=Uc(!1),u=Xc.bind(null,ze,!1,r.queue),r=Ea(),d={state:t,dispatch:null,action:e,pending:null},r.queue=d,n=Lv.bind(null,ze,d,u,n),d.dispatch=n,r.memoizedState=e,[t,n,!1]}function Ap(e){var t=Mt();return Dp(t,ct,e)}function Dp(e,t,n){if(t=Mc(e,t,Sp)[0],e=Rl(Tn)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Jr(t)}catch(b){throw b===Gr?Tl:b}else r=t;t=Mt();var d=t.queue,u=d.dispatch;return n!==t.memoizedState&&(ze.flags|=2048,rr(9,jl(),Ov.bind(null,d,n),null)),[r,u,e]}function Ov(e,t){e.action=t}function Cp(e){var t=Mt(),n=ct;if(n!==null)return Dp(t,n,e);Mt(),t=t.memoizedState,n=Mt();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function rr(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=ze.updateQueue,t===null&&(t=qc(),ze.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function jl(){return{destroy:void 0,resource:void 0}}function Np(){return Mt().memoizedState}function Ll(e,t,n,r){var d=Ea();r=r===void 0?null:r,ze.flags|=e,d.memoizedState=rr(1|t,jl(),n,r)}function eo(e,t,n,r){var d=Mt();r=r===void 0?null:r;var u=d.memoizedState.inst;ct!==null&&r!==null&&jc(r,ct.memoizedState.deps)?d.memoizedState=rr(t,u,n,r):(ze.flags|=e,d.memoizedState=rr(1|t,u,n,r))}function kp(e,t){Ll(8390656,8,e,t)}function Rp(e,t){eo(2048,8,e,t)}function jp(e,t){return eo(4,2,e,t)}function Lp(e,t){return eo(4,4,e,t)}function Op(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function _p(e,t,n){n=n!=null?n.concat([e]):null,eo(4,4,Op.bind(null,t,e),n)}function Fc(){}function Pp(e,t){var n=Mt();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&jc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qp(e,t){var n=Mt();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&jc(t,r[1]))return r[0];if(r=e(),Cs){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r}function zc(e,t,n){return n===void 0||(zn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=n,e=$h(),ze.lanes|=e,Wn|=e,n)}function Ip(e,t,n,r){return Na(n,t)?n:ar.current!==null?(e=zc(e,n,r),Na(e,t)||(Ht=!0),e):(zn&42)===0?(Ht=!0,e.memoizedState=n):(e=$h(),ze.lanes|=e,Wn|=e,t)}function Mp(e,t,n,r,d){var u=re.p;re.p=u!==0&&8>u?u:8;var b=V.T,T={};V.T=T,Xc(e,!1,t,n);try{var O=d(),H=V.S;if(H!==null&&H(T,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=kv(O,r);to(e,t,ee,Oa(e))}else to(e,t,r,Oa(e))}catch(se){to(e,t,{then:function(){},status:"rejected",reason:se},Oa())}finally{re.p=u,V.T=b}}function _v(){}function Yc(e,t,n,r){if(e.tag!==5)throw Error(l(476));var d=$p(e).queue;Mp(e,d,t,ye,n===null?_v:function(){return Up(e),n(r)})}function $p(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:ye},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tn,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Up(e){var t=$p(e).next.queue;to(e,t,{},Oa())}function Vc(){return da(Eo)}function Bp(){return Mt().memoizedState}function Fp(){return Mt().memoizedState}function Pv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Oa();e=Bn(n);var r=Fn(t,e,n);r!==null&&(_a(r,t,n),Kr(r,t,n)),t={cache:wc()},e.payload=t;return}t=t.return}}function qv(e,t,n){var r=Oa();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Ol(e)?Yp(t,n):(n=uc(e,t,n,r),n!==null&&(_a(n,e,r),Vp(n,t,r)))}function zp(e,t,n){var r=Oa();to(e,t,n,r)}function to(e,t,n,r){var d={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ol(e))Yp(t,d);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=t.lastRenderedReducer,u!==null))try{var b=t.lastRenderedState,T=u(b,n);if(d.hasEagerState=!0,d.eagerState=T,Na(T,b))return ml(e,t,d,0),gt===null&&gl(),!1}catch{}if(n=uc(e,t,d,r),n!==null)return _a(n,e,r),Vp(n,t,r),!0}return!1}function Xc(e,t,n,r){if(r={lane:2,revertLane:Td(),action:r,hasEagerState:!1,eagerState:null,next:null},Ol(e)){if(t)throw Error(l(479))}else t=uc(e,n,r,2),t!==null&&_a(t,e,2)}function Ol(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function Yp(e,t){nr=Cl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vp(e,t,n){if((n&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Dt(e,n)}}var _l={readContext:da,use:kl,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t},Xp={readContext:da,use:kl,useCallback:function(e,t){return Ea().memoizedState=[e,t===void 0?null:t],e},useContext:da,useEffect:kp,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Ll(4194308,4,Op.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ll(4194308,4,e,t)},useInsertionEffect:function(e,t){Ll(4,2,e,t)},useMemo:function(e,t){var n=Ea();t=t===void 0?null:t;var r=e();if(Cs){Ke(!0);try{e()}finally{Ke(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Ea();if(n!==void 0){var d=n(t);if(Cs){Ke(!0);try{n(t)}finally{Ke(!1)}}}else d=t;return r.memoizedState=r.baseState=d,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:d},r.queue=e,e=e.dispatch=qv.bind(null,ze,e),[r.memoizedState,e]},useRef:function(e){var t=Ea();return e={current:e},t.memoizedState=e},useState:function(e){e=Uc(e);var t=e.queue,n=zp.bind(null,ze,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Fc,useDeferredValue:function(e,t){var n=Ea();return zc(n,e,t)},useTransition:function(){var e=Uc(!1);return e=Mp.bind(null,ze,e.queue,!0,!1),Ea().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ze,d=Ea();if(at){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),gt===null)throw Error(l(349));(Qe&124)!==0||pp(r,t,n)}d.memoizedState=n;var u={value:n,getSnapshot:t};return d.queue=u,kp(gp.bind(null,r,u,e),[e]),r.flags|=2048,rr(9,jl(),hp.bind(null,r,u,n,t),null),n},useId:function(){var e=Ea(),t=gt.identifierPrefix;if(at){var n=wn,r=En;n=(r&~(1<<32-st(r)-1)).toString(32)+n,t="«"+t+"R"+n,n=Nl++,0<n&&(t+="H"+n.toString(32)),t+="»"}else n=Rv++,t="«"+t+"r"+n.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:Vc,useFormState:Tp,useActionState:Tp,useOptimistic:function(e){var t=Ea();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Xc.bind(null,ze,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ic,useCacheRefresh:function(){return Ea().memoizedState=Pv.bind(null,ze)}},Gp={readContext:da,use:kl,useCallback:Pp,useContext:da,useEffect:Rp,useImperativeHandle:_p,useInsertionEffect:jp,useLayoutEffect:Lp,useMemo:qp,useReducer:Rl,useRef:Np,useState:function(){return Rl(Tn)},useDebugValue:Fc,useDeferredValue:function(e,t){var n=Mt();return Ip(n,ct.memoizedState,e,t)},useTransition:function(){var e=Rl(Tn)[0],t=Mt().memoizedState;return[typeof e=="boolean"?e:Jr(e),t]},useSyncExternalStore:fp,useId:Bp,useHostTransitionStatus:Vc,useFormState:Ap,useActionState:Ap,useOptimistic:function(e,t){var n=Mt();return bp(n,ct,e,t)},useMemoCache:Ic,useCacheRefresh:Fp},Iv={readContext:da,use:kl,useCallback:Pp,useContext:da,useEffect:Rp,useImperativeHandle:_p,useInsertionEffect:jp,useLayoutEffect:Lp,useMemo:qp,useReducer:$c,useRef:Np,useState:function(){return $c(Tn)},useDebugValue:Fc,useDeferredValue:function(e,t){var n=Mt();return ct===null?zc(n,e,t):Ip(n,ct.memoizedState,e,t)},useTransition:function(){var e=$c(Tn)[0],t=Mt().memoizedState;return[typeof e=="boolean"?e:Jr(e),t]},useSyncExternalStore:fp,useId:Bp,useHostTransitionStatus:Vc,useFormState:Cp,useActionState:Cp,useOptimistic:function(e,t){var n=Mt();return ct!==null?bp(n,ct,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ic,useCacheRefresh:Fp},or=null,ao=0;function Pl(e){var t=ao;return ao+=1,or===null&&(or=[]),sp(or,e,t)}function no(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ql(e,t){throw t.$$typeof===v?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Hp(e){var t=e._init;return t(e._payload)}function Kp(e){function t(z,I){if(e){var X=z.deletions;X===null?(z.deletions=[I],z.flags|=16):X.push(I)}}function n(z,I){if(!e)return null;for(;I!==null;)t(z,I),I=I.sibling;return null}function r(z){for(var I=new Map;z!==null;)z.key!==null?I.set(z.key,z):I.set(z.index,z),z=z.sibling;return I}function d(z,I){return z=vn(z,I),z.index=0,z.sibling=null,z}function u(z,I,X){return z.index=X,e?(X=z.alternate,X!==null?(X=X.index,X<I?(z.flags|=67108866,I):X):(z.flags|=67108866,I)):(z.flags|=1048576,I)}function b(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function T(z,I,X,ae){return I===null||I.tag!==6?(I=pc(X,z.mode,ae),I.return=z,I):(I=d(I,X),I.return=z,I)}function O(z,I,X,ae){var Se=X.type;return Se===R?ee(z,I,X.props.children,ae,X.key):I!==null&&(I.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===P&&Hp(Se)===I.type)?(I=d(I,X.props),no(I,X),I.return=z,I):(I=bl(X.type,X.key,X.props,null,z.mode,ae),no(I,X),I.return=z,I)}function H(z,I,X,ae){return I===null||I.tag!==4||I.stateNode.containerInfo!==X.containerInfo||I.stateNode.implementation!==X.implementation?(I=hc(X,z.mode,ae),I.return=z,I):(I=d(I,X.children||[]),I.return=z,I)}function ee(z,I,X,ae,Se){return I===null||I.tag!==7?(I=vs(X,z.mode,ae,Se),I.return=z,I):(I=d(I,X),I.return=z,I)}function se(z,I,X){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=pc(""+I,z.mode,X),I.return=z,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case E:return X=bl(I.type,I.key,I.props,null,z.mode,X),no(X,I),X.return=z,X;case S:return I=hc(I,z.mode,X),I.return=z,I;case P:var ae=I._init;return I=ae(I._payload),se(z,I,X)}if(ce(I)||le(I))return I=vs(I,z.mode,X,null),I.return=z,I;if(typeof I.then=="function")return se(z,Pl(I),X);if(I.$$typeof===k)return se(z,xl(z,I),X);ql(z,I)}return null}function W(z,I,X,ae){var Se=I!==null?I.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return Se!==null?null:T(z,I,""+X,ae);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case E:return X.key===Se?O(z,I,X,ae):null;case S:return X.key===Se?H(z,I,X,ae):null;case P:return Se=X._init,X=Se(X._payload),W(z,I,X,ae)}if(ce(X)||le(X))return Se!==null?null:ee(z,I,X,ae,null);if(typeof X.then=="function")return W(z,I,Pl(X),ae);if(X.$$typeof===k)return W(z,I,xl(z,X),ae);ql(z,X)}return null}function Z(z,I,X,ae,Se){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return z=z.get(X)||null,T(I,z,""+ae,Se);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case E:return z=z.get(ae.key===null?X:ae.key)||null,O(I,z,ae,Se);case S:return z=z.get(ae.key===null?X:ae.key)||null,H(I,z,ae,Se);case P:var Ve=ae._init;return ae=Ve(ae._payload),Z(z,I,X,ae,Se)}if(ce(ae)||le(ae))return z=z.get(X)||null,ee(I,z,ae,Se,null);if(typeof ae.then=="function")return Z(z,I,X,Pl(ae),Se);if(ae.$$typeof===k)return Z(z,I,X,xl(I,ae),Se);ql(I,ae)}return null}function Oe(z,I,X,ae){for(var Se=null,Ve=null,ke=I,Le=I=0,Wt=null;ke!==null&&Le<X.length;Le++){ke.index>Le?(Wt=ke,ke=null):Wt=ke.sibling;var et=W(z,ke,X[Le],ae);if(et===null){ke===null&&(ke=Wt);break}e&&ke&&et.alternate===null&&t(z,ke),I=u(et,I,Le),Ve===null?Se=et:Ve.sibling=et,Ve=et,ke=Wt}if(Le===X.length)return n(z,ke),at&&ws(z,Le),Se;if(ke===null){for(;Le<X.length;Le++)ke=se(z,X[Le],ae),ke!==null&&(I=u(ke,I,Le),Ve===null?Se=ke:Ve.sibling=ke,Ve=ke);return at&&ws(z,Le),Se}for(ke=r(ke);Le<X.length;Le++)Wt=Z(ke,z,Le,X[Le],ae),Wt!==null&&(e&&Wt.alternate!==null&&ke.delete(Wt.key===null?Le:Wt.key),I=u(Wt,I,Le),Ve===null?Se=Wt:Ve.sibling=Wt,Ve=Wt);return e&&ke.forEach(function(rs){return t(z,rs)}),at&&ws(z,Le),Se}function je(z,I,X,ae){if(X==null)throw Error(l(151));for(var Se=null,Ve=null,ke=I,Le=I=0,Wt=null,et=X.next();ke!==null&&!et.done;Le++,et=X.next()){ke.index>Le?(Wt=ke,ke=null):Wt=ke.sibling;var rs=W(z,ke,et.value,ae);if(rs===null){ke===null&&(ke=Wt);break}e&&ke&&rs.alternate===null&&t(z,ke),I=u(rs,I,Le),Ve===null?Se=rs:Ve.sibling=rs,Ve=rs,ke=Wt}if(et.done)return n(z,ke),at&&ws(z,Le),Se;if(ke===null){for(;!et.done;Le++,et=X.next())et=se(z,et.value,ae),et!==null&&(I=u(et,I,Le),Ve===null?Se=et:Ve.sibling=et,Ve=et);return at&&ws(z,Le),Se}for(ke=r(ke);!et.done;Le++,et=X.next())et=Z(ke,z,Le,et.value,ae),et!==null&&(e&&et.alternate!==null&&ke.delete(et.key===null?Le:et.key),I=u(et,I,Le),Ve===null?Se=et:Ve.sibling=et,Ve=et);return e&&ke.forEach(function(M0){return t(z,M0)}),at&&ws(z,Le),Se}function ut(z,I,X,ae){if(typeof X=="object"&&X!==null&&X.type===R&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case E:e:{for(var Se=X.key;I!==null;){if(I.key===Se){if(Se=X.type,Se===R){if(I.tag===7){n(z,I.sibling),ae=d(I,X.props.children),ae.return=z,z=ae;break e}}else if(I.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===P&&Hp(Se)===I.type){n(z,I.sibling),ae=d(I,X.props),no(ae,X),ae.return=z,z=ae;break e}n(z,I);break}else t(z,I);I=I.sibling}X.type===R?(ae=vs(X.props.children,z.mode,ae,X.key),ae.return=z,z=ae):(ae=bl(X.type,X.key,X.props,null,z.mode,ae),no(ae,X),ae.return=z,z=ae)}return b(z);case S:e:{for(Se=X.key;I!==null;){if(I.key===Se)if(I.tag===4&&I.stateNode.containerInfo===X.containerInfo&&I.stateNode.implementation===X.implementation){n(z,I.sibling),ae=d(I,X.children||[]),ae.return=z,z=ae;break e}else{n(z,I);break}else t(z,I);I=I.sibling}ae=hc(X,z.mode,ae),ae.return=z,z=ae}return b(z);case P:return Se=X._init,X=Se(X._payload),ut(z,I,X,ae)}if(ce(X))return Oe(z,I,X,ae);if(le(X)){if(Se=le(X),typeof Se!="function")throw Error(l(150));return X=Se.call(X),je(z,I,X,ae)}if(typeof X.then=="function")return ut(z,I,Pl(X),ae);if(X.$$typeof===k)return ut(z,I,xl(z,X),ae);ql(z,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,I!==null&&I.tag===6?(n(z,I.sibling),ae=d(I,X),ae.return=z,z=ae):(n(z,I),ae=pc(X,z.mode,ae),ae.return=z,z=ae),b(z)):n(z,I)}return function(z,I,X,ae){try{ao=0;var Se=ut(z,I,X,ae);return or=null,Se}catch(ke){if(ke===Gr||ke===Tl)throw ke;var Ve=ka(29,ke,null,z.mode);return Ve.lanes=ae,Ve.return=z,Ve}}}var lr=Kp(!0),Wp=Kp(!1),Xa=Q(null),sn=null;function Yn(e){var t=e.alternate;G(Yt,Yt.current&1),G(Xa,e),sn===null&&(t===null||ar.current!==null||t.memoizedState!==null)&&(sn=e)}function Zp(e){if(e.tag===22){if(G(Yt,Yt.current),G(Xa,e),sn===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(sn=e)}}else Vn()}function Vn(){G(Yt,Yt.current),G(Xa,Xa.current)}function An(e){$(Xa),sn===e&&(sn=null),$(Yt)}var Yt=Q(0);function Il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||qd(n)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Gc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hc={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Oa(),d=Bn(r);d.payload=t,n!=null&&(d.callback=n),t=Fn(e,d,r),t!==null&&(_a(t,e,r),Kr(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Oa(),d=Bn(r);d.tag=1,d.payload=t,n!=null&&(d.callback=n),t=Fn(e,d,r),t!==null&&(_a(t,e,r),Kr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Oa(),r=Bn(n);r.tag=2,t!=null&&(r.callback=t),t=Fn(e,r,n),t!==null&&(_a(t,e,n),Kr(t,e,n))}};function Qp(e,t,n,r,d,u,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,u,b):t.prototype&&t.prototype.isPureReactComponent?!$r(n,r)||!$r(d,u):!0}function Jp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hc.enqueueReplaceState(t,t.state,null)}function Ns(e,t){var n=t;if("ref"in t){n={};for(var r in t)r!=="ref"&&(n[r]=t[r])}if(e=e.defaultProps){n===t&&(n=m({},n));for(var d in e)n[d]===void 0&&(n[d]=e[d])}return n}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function eh(e){Ml(e)}function th(e){console.error(e)}function ah(e){Ml(e)}function $l(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function nh(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function Kc(e,t,n){return n=Bn(n),n.tag=3,n.payload={element:null},n.callback=function(){$l(e,t)},n}function sh(e){return e=Bn(e),e.tag=3,e}function rh(e,t,n,r){var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var u=r.value;e.payload=function(){return d(u)},e.callback=function(){nh(t,n,r)}}var b=n.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){nh(t,n,r),typeof d!="function"&&(Zn===null?Zn=new Set([this]):Zn.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function Mv(e,t,n,r,d){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=n.alternate,t!==null&&Yr(t,n,d,!0),n=Xa.current,n!==null){switch(n.tag){case 13:return sn===null?vd():n.alternate===null&&kt===0&&(kt=3),n.flags&=-257,n.flags|=65536,n.lanes=d,r===Tc?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),wd(e,r,d)),!1;case 22:return n.flags|=65536,r===Tc?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),wd(e,r,d)),!1}throw Error(l(435,n.tag))}return wd(e,r,d),vd(),!1}if(at)return t=Xa.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=d,r!==yc&&(e=Error(l(422),{cause:r}),zr(Fa(e,n)))):(r!==yc&&(t=Error(l(423),{cause:r}),zr(Fa(t,n))),e=e.current.alternate,e.flags|=65536,d&=-d,e.lanes|=d,r=Fa(r,n),d=Kc(e.stateNode,r,d),Cc(e,d),kt!==4&&(kt=2)),!1;var u=Error(l(520),{cause:r});if(u=Fa(u,n),uo===null?uo=[u]:uo.push(u),kt!==4&&(kt=2),t===null)return!0;r=Fa(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=d&-d,n.lanes|=e,e=Kc(n.stateNode,r,e),Cc(n,e),!1;case 1:if(t=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(Zn===null||!Zn.has(u))))return n.flags|=65536,d&=-d,n.lanes|=d,d=sh(d),rh(d,e,n,r),Cc(n,d),!1}n=n.return}while(n!==null);return!1}var oh=Error(l(461)),Ht=!1;function aa(e,t,n,r){t.child=e===null?Wp(t,null,n,r):lr(t,e.child,n,r)}function lh(e,t,n,r,d){n=n.render;var u=t.ref;if("ref"in r){var b={};for(var T in r)T!=="ref"&&(b[T]=r[T])}else b=r;return As(t),r=Lc(e,t,n,b,u,d),T=Oc(),e!==null&&!Ht?(_c(e,t,d),Dn(e,t,d)):(at&&T&&gc(t),t.flags|=1,aa(e,t,r,d),t.child)}function ih(e,t,n,r,d){if(e===null){var u=n.type;return typeof u=="function"&&!fc(u)&&u.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=u,ch(e,t,u,r,d)):(e=bl(n.type,null,r,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(u=e.child,!nd(e,d)){var b=u.memoizedProps;if(n=n.compare,n=n!==null?n:$r,n(b,r)&&e.ref===t.ref)return Dn(e,t,d)}return t.flags|=1,e=vn(u,r),e.ref=t.ref,e.return=t,t.child=e}function ch(e,t,n,r,d){if(e!==null){var u=e.memoizedProps;if($r(u,r)&&e.ref===t.ref)if(Ht=!1,t.pendingProps=r=u,nd(e,d))(e.flags&131072)!==0&&(Ht=!0);else return t.lanes=e.lanes,Dn(e,t,d)}return Wc(e,t,n,r,d)}function dh(e,t,n){var r=t.pendingProps,d=r.children,u=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((t.flags&128)!==0){if(r=u!==null?u.baseLanes|n:n,e!==null){for(d=t.child=e.child,u=0;d!==null;)u=u|d.lanes|d.childLanes,d=d.sibling;t.childLanes=u&~r}else t.childLanes=0,t.child=null;return uh(e,t,r,n)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sl(t,u!==null?u.cachePool:null),u!==null?cp(t,u):kc(),Zp(t);else return t.lanes=t.childLanes=536870912,uh(e,t,u!==null?u.baseLanes|n:n,n)}else u!==null?(Sl(t,u.cachePool),cp(t,u),Vn(),t.memoizedState=null):(e!==null&&Sl(t,null),kc(),Vn());return aa(e,t,d,n),t.child}function uh(e,t,n,r){var d=Sc();return d=d===null?null:{parent:zt._currentValue,pool:d},t.memoizedState={baseLanes:n,cachePool:d},e!==null&&Sl(t,null),kc(),Zp(t),e!==null&&Yr(e,t,r,!0),null}function Ul(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Wc(e,t,n,r,d){return As(t),n=Lc(e,t,n,r,void 0,d),r=Oc(),e!==null&&!Ht?(_c(e,t,d),Dn(e,t,d)):(at&&r&&gc(t),t.flags|=1,aa(e,t,n,d),t.child)}function fh(e,t,n,r,d,u){return As(t),t.updateQueue=null,n=up(t,r,n,d),dp(e),r=Oc(),e!==null&&!Ht?(_c(e,t,u),Dn(e,t,u)):(at&&r&&gc(t),t.flags|=1,aa(e,t,n,u),t.child)}function ph(e,t,n,r,d){if(As(t),t.stateNode===null){var u=Zs,b=n.contextType;typeof b=="object"&&b!==null&&(u=da(b)),u=new n(r,u),t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Hc,t.stateNode=u,u._reactInternals=t,u=t.stateNode,u.props=r,u.state=t.memoizedState,u.refs={},Ac(t),b=n.contextType,u.context=typeof b=="object"&&b!==null?da(b):Zs,u.state=t.memoizedState,b=n.getDerivedStateFromProps,typeof b=="function"&&(Gc(t,n,b,r),u.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(b=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),b!==u.state&&Hc.enqueueReplaceState(u,u.state,null),Zr(t,r,u,d),Wr(),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){u=t.stateNode;var T=t.memoizedProps,O=Ns(n,T);u.props=O;var H=u.context,ee=n.contextType;b=Zs,typeof ee=="object"&&ee!==null&&(b=da(ee));var se=n.getDerivedStateFromProps;ee=typeof se=="function"||typeof u.getSnapshotBeforeUpdate=="function",T=t.pendingProps!==T,ee||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(T||H!==b)&&Jp(t,u,r,b),Un=!1;var W=t.memoizedState;u.state=W,Zr(t,r,u,d),Wr(),H=t.memoizedState,T||W!==H||Un?(typeof se=="function"&&(Gc(t,n,se,r),H=t.memoizedState),(O=Un||Qp(t,n,O,r,W,H,b))?(ee||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(t.flags|=4194308)):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=H),u.props=r,u.state=H,u.context=b,r=O):(typeof u.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{u=t.stateNode,Dc(e,t),b=t.memoizedProps,ee=Ns(n,b),u.props=ee,se=t.pendingProps,W=u.context,H=n.contextType,O=Zs,typeof H=="object"&&H!==null&&(O=da(H)),T=n.getDerivedStateFromProps,(H=typeof T=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b!==se||W!==O)&&Jp(t,u,r,O),Un=!1,W=t.memoizedState,u.state=W,Zr(t,r,u,d),Wr();var Z=t.memoizedState;b!==se||W!==Z||Un||e!==null&&e.dependencies!==null&&wl(e.dependencies)?(typeof T=="function"&&(Gc(t,n,T,r),Z=t.memoizedState),(ee=Un||Qp(t,n,ee,r,W,Z,O)||e!==null&&e.dependencies!==null&&wl(e.dependencies))?(H||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,Z,O),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,Z,O)),typeof u.componentDidUpdate=="function"&&(t.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof u.componentDidUpdate!="function"||b===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=Z),u.props=r,u.state=Z,u.context=O,r=ee):(typeof u.componentDidUpdate!="function"||b===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),r=!1)}return u=r,Ul(e,t),r=(t.flags&128)!==0,u||r?(u=t.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:u.render(),t.flags|=1,e!==null&&r?(t.child=lr(t,e.child,null,d),t.child=lr(t,null,n,d)):aa(e,t,n,d),t.memoizedState=u.state,e=t.child):e=Dn(e,t,d),e}function hh(e,t,n,r){return Fr(),t.flags|=256,aa(e,t,n,r),t.child}var Zc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Qc(e){return{baseLanes:e,cachePool:tp()}}function Jc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ga),e}function gh(e,t,n){var r=t.pendingProps,d=!1,u=(t.flags&128)!==0,b;if((b=u)||(b=e!==null&&e.memoizedState===null?!1:(Yt.current&2)!==0),b&&(d=!0,t.flags&=-129),b=(t.flags&32)!==0,t.flags&=-33,e===null){if(at){if(d?Yn(t):Vn(),at){var T=Nt,O;if(O=T){e:{for(O=T,T=nn;O.nodeType!==8;){if(!T){T=null;break e}if(O=Ja(O.nextSibling),O===null){T=null;break e}}T=O}T!==null?(t.memoizedState={dehydrated:T,treeContext:Es!==null?{id:En,overflow:wn}:null,retryLane:536870912,hydrationErrors:null},O=ka(18,null,null,0),O.stateNode=T,O.return=t,t.child=O,ga=t,Nt=null,O=!0):O=!1}O||Ss(t)}if(T=t.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return qd(T)?t.lanes=32:t.lanes=536870912,null;An(t)}return T=r.children,r=r.fallback,d?(Vn(),d=t.mode,T=Bl({mode:"hidden",children:T},d),r=vs(r,d,n,null),T.return=t,r.return=t,T.sibling=r,t.child=T,d=t.child,d.memoizedState=Qc(n),d.childLanes=Jc(e,b,n),t.memoizedState=Zc,r):(Yn(t),ed(t,T))}if(O=e.memoizedState,O!==null&&(T=O.dehydrated,T!==null)){if(u)t.flags&256?(Yn(t),t.flags&=-257,t=td(e,t,n)):t.memoizedState!==null?(Vn(),t.child=e.child,t.flags|=128,t=null):(Vn(),d=r.fallback,T=t.mode,r=Bl({mode:"visible",children:r.children},T),d=vs(d,T,n,null),d.flags|=2,r.return=t,d.return=t,r.sibling=d,t.child=r,lr(t,e.child,null,n),r=t.child,r.memoizedState=Qc(n),r.childLanes=Jc(e,b,n),t.memoizedState=Zc,t=d);else if(Yn(t),qd(T)){if(b=T.nextSibling&&T.nextSibling.dataset,b)var H=b.dgst;b=H,r=Error(l(419)),r.stack="",r.digest=b,zr({value:r,source:null,stack:null}),t=td(e,t,n)}else if(Ht||Yr(e,t,n,!1),b=(n&e.childLanes)!==0,Ht||b){if(b=gt,b!==null&&(r=n&-n,r=(r&42)!==0?1:qn(r),r=(r&(b.suspendedLanes|n))!==0?0:r,r!==0&&r!==O.retryLane))throw O.retryLane=r,Ws(e,r),_a(b,e,r),oh;T.data==="$?"||vd(),t=td(e,t,n)}else T.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=O.treeContext,Nt=Ja(T.nextSibling),ga=t,at=!0,xs=null,nn=!1,e!==null&&(Ya[Va++]=En,Ya[Va++]=wn,Ya[Va++]=Es,En=e.id,wn=e.overflow,Es=t),t=ed(t,r.children),t.flags|=4096);return t}return d?(Vn(),d=r.fallback,T=t.mode,O=e.child,H=O.sibling,r=vn(O,{mode:"hidden",children:r.children}),r.subtreeFlags=O.subtreeFlags&65011712,H!==null?d=vn(H,d):(d=vs(d,T,n,null),d.flags|=2),d.return=t,r.return=t,r.sibling=d,t.child=r,r=d,d=t.child,T=e.child.memoizedState,T===null?T=Qc(n):(O=T.cachePool,O!==null?(H=zt._currentValue,O=O.parent!==H?{parent:H,pool:H}:O):O=tp(),T={baseLanes:T.baseLanes|n,cachePool:O}),d.memoizedState=T,d.childLanes=Jc(e,b,n),t.memoizedState=Zc,r):(Yn(t),n=e.child,e=n.sibling,n=vn(n,{mode:"visible",children:r.children}),n.return=t,n.sibling=null,e!==null&&(b=t.deletions,b===null?(t.deletions=[e],t.flags|=16):b.push(e)),t.child=n,t.memoizedState=null,n)}function ed(e,t){return t=Bl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Bl(e,t){return e=ka(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function td(e,t,n){return lr(t,e.child,null,n),e=ed(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vc(e.return,t,n)}function ad(e,t,n,r,d){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:d}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=r,u.tail=n,u.tailMode=d)}function yh(e,t,n){var r=t.pendingProps,d=r.revealOrder,u=r.tail;if(aa(e,t,r.children,n),r=Yt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mh(e,n,t);else if(e.tag===19)mh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(G(Yt,r),d){case"forwards":for(n=t.child,d=null;n!==null;)e=n.alternate,e!==null&&Il(e)===null&&(d=n),n=n.sibling;n=d,n===null?(d=t.child,t.child=null):(d=n.sibling,n.sibling=null),ad(t,!1,d,n,u);break;case"backwards":for(n=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&Il(e)===null){t.child=d;break}e=d.sibling,d.sibling=n,n=d,d=e}ad(t,!0,n,null,u);break;case"together":ad(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Dn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Yr(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=vn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function nd(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&wl(e)))}function $v(e,t,n){switch(t.tag){case 3:Me(t,t.stateNode.containerInfo),$n(t,zt,e.memoizedState.cache),Fr();break;case 27:case 5:pt(t);break;case 4:Me(t,t.stateNode.containerInfo);break;case 10:$n(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Yn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?gh(e,t,n):(Yn(t),e=Dn(e,t,n),e!==null?e.sibling:null);Yn(t);break;case 19:var d=(e.flags&128)!==0;if(r=(n&t.childLanes)!==0,r||(Yr(e,t,n,!1),r=(n&t.childLanes)!==0),d){if(r)return yh(e,t,n);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),G(Yt,Yt.current),r)break;return null;case 22:case 23:return t.lanes=0,dh(e,t,n);case 24:$n(t,zt,e.memoizedState.cache)}return Dn(e,t,n)}function bh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ht=!0;else{if(!nd(e,n)&&(t.flags&128)===0)return Ht=!1,$v(e,t,n);Ht=(e.flags&131072)!==0}else Ht=!1,at&&(t.flags&1048576)!==0&&Hf(t,El,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,d=r._init;if(r=d(r._payload),t.type=r,typeof r=="function")fc(r)?(e=Ns(r,e),t.tag=1,t=ph(null,t,r,e,n)):(t.tag=0,t=Wc(null,t,r,e,n));else{if(r!=null){if(d=r.$$typeof,d===M){t.tag=11,t=lh(null,t,r,e,n);break e}else if(d===L){t.tag=14,t=ih(null,t,r,e,n);break e}}throw t=me(r)||r,Error(l(306,t,""))}}return t;case 0:return Wc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,d=Ns(r,t.pendingProps),ph(e,t,r,d,n);case 3:e:{if(Me(t,t.stateNode.containerInfo),e===null)throw Error(l(387));r=t.pendingProps;var u=t.memoizedState;d=u.element,Dc(e,t),Zr(t,r,null,n);var b=t.memoizedState;if(r=b.cache,$n(t,zt,r),r!==u.cache&&Ec(t,[zt],n,!0),Wr(),r=b.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:b.cache},t.updateQueue.baseState=u,t.memoizedState=u,t.flags&256){t=hh(e,t,r,n);break e}else if(r!==d){d=Fa(Error(l(424)),t),zr(d),t=hh(e,t,r,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Nt=Ja(e.firstChild),ga=t,at=!0,xs=null,nn=!0,n=Wp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fr(),r===d){t=Dn(e,t,n);break e}aa(e,t,r,n)}t=t.child}return t;case 26:return Ul(e,t),e===null?(n=xg(t.type,null,t.pendingProps,null))?t.memoizedState=n:at||(n=t.type,e=t.pendingProps,r=ti(be.current).createElement(n),r[pe]=t,r[Ee]=e,sa(r,n,e),Ot(r),t.stateNode=r):t.memoizedState=xg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return pt(t),e===null&&at&&(r=t.stateNode=vg(t.type,t.pendingProps,be.current),ga=t,nn=!0,d=Nt,es(t.type)?(Id=d,Nt=Ja(r.firstChild)):Nt=d),aa(e,t,t.pendingProps.children,n),Ul(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&at&&((d=r=Nt)&&(r=p0(r,t.type,t.pendingProps,nn),r!==null?(t.stateNode=r,ga=t,Nt=Ja(r.firstChild),nn=!1,d=!0):d=!1),d||Ss(t)),pt(t),d=t.type,u=t.pendingProps,b=e!==null?e.memoizedProps:null,r=u.children,Od(d,u)?r=null:b!==null&&Od(d,b)&&(t.flags|=32),t.memoizedState!==null&&(d=Lc(e,t,jv,null,null,n),Eo._currentValue=d),Ul(e,t),aa(e,t,r,n),t.child;case 6:return e===null&&at&&((e=n=Nt)&&(n=h0(n,t.pendingProps,nn),n!==null?(t.stateNode=n,ga=t,Nt=null,e=!0):e=!1),e||Ss(t)),null;case 13:return gh(e,t,n);case 4:return Me(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=lr(t,null,r,n):aa(e,t,r,n),t.child;case 11:return lh(e,t,t.type,t.pendingProps,n);case 7:return aa(e,t,t.pendingProps,n),t.child;case 8:return aa(e,t,t.pendingProps.children,n),t.child;case 12:return aa(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,$n(t,t.type,r.value),aa(e,t,r.children,n),t.child;case 9:return d=t.type._context,r=t.pendingProps.children,As(t),d=da(d),r=r(d),t.flags|=1,aa(e,t,r,n),t.child;case 14:return ih(e,t,t.type,t.pendingProps,n);case 15:return ch(e,t,t.type,t.pendingProps,n);case 19:return yh(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},e===null?(n=Bl(r,n),n.ref=t.ref,t.child=n,n.return=t,t=n):(n=vn(e.child,r),n.ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return dh(e,t,n);case 24:return As(t),r=da(zt),e===null?(d=Sc(),d===null&&(d=gt,u=wc(),d.pooledCache=u,u.refCount++,u!==null&&(d.pooledCacheLanes|=n),d=u),t.memoizedState={parent:r,cache:d},Ac(t),$n(t,zt,d)):((e.lanes&n)!==0&&(Dc(e,t),Zr(t,null,null,n),Wr()),d=e.memoizedState,u=t.memoizedState,d.parent!==r?(d={parent:r,cache:r},t.memoizedState=d,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=d),$n(t,zt,r)):(r=u.cache,$n(t,zt,r),r!==d.cache&&Ec(t,[zt],n,!0))),aa(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Cn(e){e.flags|=4}function vh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Cg(t)){if(t=Xa.current,t!==null&&((Qe&4194048)===Qe?sn!==null:(Qe&62914560)!==Qe&&(Qe&536870912)===0||t!==sn))throw Hr=Tc,ap;e.flags|=8192}}function Fl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qt():536870912,e.lanes|=t,ur|=t)}function so(e,t){if(!at)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var d=e.child;d!==null;)n|=d.lanes|d.childLanes,r|=d.subtreeFlags&65011712,r|=d.flags&65011712,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)n|=d.lanes|d.childLanes,r|=d.subtreeFlags,r|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Uv(e,t,n){var r=t.pendingProps;switch(mc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(t),null;case 1:return Tt(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Sn(zt),it(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Br(t)?Cn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Zf())),Tt(t),null;case 26:return n=t.memoizedState,e===null?(Cn(t),n!==null?(Tt(t),vh(t,n)):(Tt(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Cn(t),Tt(t),vh(t,n)):(Tt(t),t.flags&=-16777217):(e.memoizedProps!==r&&Cn(t),Tt(t),t.flags&=-16777217),null;case 27:jt(t),n=be.current;var d=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Cn(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return Tt(t),null}e=oe.current,Br(t)?Kf(t):(e=vg(d,r,n),t.stateNode=e,Cn(t))}return Tt(t),null;case 5:if(jt(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Cn(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return Tt(t),null}if(e=oe.current,Br(t))Kf(t);else{switch(d=ti(be.current),e){case 1:e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=d.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=d.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?d.createElement("select",{is:r.is}):d.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?d.createElement(n,{is:r.is}):d.createElement(n)}}e[pe]=t,e[Ee]=r;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)e.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=e;e:switch(sa(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Cn(t)}}return Tt(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Cn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(e=be.current,Br(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,d=ga,d!==null)switch(d.tag){case 27:case 5:r=d.memoizedProps}e[pe]=t,e=!!(e.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||fg(e.nodeValue,n)),e||Ss(t)}else e=ti(e).createTextNode(r),e[pe]=t,t.stateNode=e}return Tt(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(d=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!d)throw Error(l(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(l(317));d[pe]=t}else Fr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Tt(t),d=!1}else d=Zf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=d),d=!0;if(!d)return t.flags&256?(An(t),t):(An(t),null)}if(An(t),(t.flags&128)!==0)return t.lanes=n,t;if(n=r!==null,e=e!==null&&e.memoizedState!==null,n){r=t.child,d=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(d=r.alternate.memoizedState.cachePool.pool);var u=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==d&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),Fl(t,t.updateQueue),Tt(t),null;case 4:return it(),e===null&&Nd(t.stateNode.containerInfo),Tt(t),null;case 10:return Sn(t.type),Tt(t),null;case 19:if($(Yt),d=t.memoizedState,d===null)return Tt(t),null;if(r=(t.flags&128)!==0,u=d.rendering,u===null)if(r)so(d,!1);else{if(kt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(u=Il(e),u!==null){for(t.flags|=128,so(d,!1),e=u.updateQueue,t.updateQueue=e,Fl(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Gf(n,e),n=n.sibling;return G(Yt,Yt.current&1|2),t.child}e=e.sibling}d.tail!==null&&fe()>Vl&&(t.flags|=128,r=!0,so(d,!1),t.lanes=4194304)}else{if(!r)if(e=Il(u),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Fl(t,e),so(d,!0),d.tail===null&&d.tailMode==="hidden"&&!u.alternate&&!at)return Tt(t),null}else 2*fe()-d.renderingStartTime>Vl&&n!==536870912&&(t.flags|=128,r=!0,so(d,!1),t.lanes=4194304);d.isBackwards?(u.sibling=t.child,t.child=u):(e=d.last,e!==null?e.sibling=u:t.child=u,d.last=u)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=fe(),t.sibling=null,e=Yt.current,G(Yt,r?e&1|2:e&1),t):(Tt(t),null);case 22:case 23:return An(t),Rc(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(n&536870912)!==0&&(t.flags&128)===0&&(Tt(t),t.subtreeFlags&6&&(t.flags|=8192)):Tt(t),n=t.updateQueue,n!==null&&Fl(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&$(Ds),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Sn(zt),Tt(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function Bv(e,t){switch(mc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Sn(zt),it(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jt(t),null;case 13:if(An(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(Yt),null;case 4:return it(),null;case 10:return Sn(t.type),null;case 22:case 23:return An(t),Rc(),e!==null&&$(Ds),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Sn(zt),null;case 25:return null;default:return null}}function Eh(e,t){switch(mc(t),t.tag){case 3:Sn(zt),it();break;case 26:case 27:case 5:jt(t);break;case 4:it();break;case 13:An(t);break;case 19:$(Yt);break;case 10:Sn(t.type);break;case 22:case 23:An(t),Rc(),e!==null&&$(Ds);break;case 24:Sn(zt)}}function ro(e,t){try{var n=t.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var d=r.next;n=d;do{if((n.tag&e)===e){r=void 0;var u=n.create,b=n.inst;r=u(),b.destroy=r}n=n.next}while(n!==d)}}catch(T){ft(t,t.return,T)}}function Xn(e,t,n){try{var r=t.updateQueue,d=r!==null?r.lastEffect:null;if(d!==null){var u=d.next;r=u;do{if((r.tag&e)===e){var b=r.inst,T=b.destroy;if(T!==void 0){b.destroy=void 0,d=t;var O=n,H=T;try{H()}catch(ee){ft(d,O,ee)}}}r=r.next}while(r!==u)}}catch(ee){ft(t,t.return,ee)}}function wh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ip(t,n)}catch(r){ft(e,e.return,r)}}}function xh(e,t,n){n.props=Ns(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){ft(e,t,r)}}function oo(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n=="function"?e.refCleanup=n(r):n.current=r}}catch(d){ft(e,t,d)}}function rn(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(d){ft(e,t,d)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(d){ft(e,t,d)}else n.current=null}function Sh(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(d){ft(e,e.return,d)}}function sd(e,t,n){try{var r=e.stateNode;i0(r,e.type,n,t),r[Ee]=t}catch(d){ft(e,e.return,d)}}function Th(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&es(e.type)||e.tag===4}function rd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Th(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&es(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function od(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ei));else if(r!==4&&(r===27&&es(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(od(e,t,n),e=e.sibling;e!==null;)od(e,t,n),e=e.sibling}function zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&es(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(zl(e,t,n),e=e.sibling;e!==null;)zl(e,t,n),e=e.sibling}function Ah(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,d=t.attributes;d.length;)t.removeAttributeNode(d[0]);sa(t,r,n),t[pe]=e,t[Ee]=n}catch(u){ft(e,e.return,u)}}var Nn=!1,Pt=!1,ld=!1,Dh=typeof WeakSet=="function"?WeakSet:Set,Kt=null;function Fv(e,t){if(e=e.containerInfo,jd=li,e=If(e),rc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var d=r.anchorOffset,u=r.focusNode;r=r.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var b=0,T=-1,O=-1,H=0,ee=0,se=e,W=null;t:for(;;){for(var Z;se!==n||d!==0&&se.nodeType!==3||(T=b+d),se!==u||r!==0&&se.nodeType!==3||(O=b+r),se.nodeType===3&&(b+=se.nodeValue.length),(Z=se.firstChild)!==null;)W=se,se=Z;for(;;){if(se===e)break t;if(W===n&&++H===d&&(T=b),W===u&&++ee===r&&(O=b),(Z=se.nextSibling)!==null)break;se=W,W=se.parentNode}se=Z}n=T===-1||O===-1?null:{start:T,end:O}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ld={focusedElem:e,selectionRange:n},li=!1,Kt=t;Kt!==null;)if(t=Kt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Kt=e;else for(;Kt!==null;){switch(t=Kt,u=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,n=t,d=u.memoizedProps,u=u.memoizedState,r=n.stateNode;try{var Oe=Ns(n.type,d,n.elementType===n.type);e=r.getSnapshotBeforeUpdate(Oe,u),r.__reactInternalSnapshotBeforeUpdate=e}catch(je){ft(n,n.return,je)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Pd(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Kt=e;break}Kt=t.return}}function Ch(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Gn(e,n),r&4&&ro(5,n);break;case 1:if(Gn(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(b){ft(n,n.return,b)}else{var d=Ns(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(d,t,e.__reactInternalSnapshotBeforeUpdate)}catch(b){ft(n,n.return,b)}}r&64&&wh(n),r&512&&oo(n,n.return);break;case 3:if(Gn(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ip(e,t)}catch(b){ft(n,n.return,b)}}break;case 27:t===null&&r&4&&Ah(n);case 26:case 5:Gn(e,n),t===null&&r&4&&Sh(n),r&512&&oo(n,n.return);break;case 12:Gn(e,n);break;case 13:Gn(e,n),r&4&&Rh(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zv.bind(null,n),g0(e,n))));break;case 22:if(r=n.memoizedState!==null||Nn,!r){t=t!==null&&t.memoizedState!==null||Pt,d=Nn;var u=Pt;Nn=r,(Pt=t)&&!u?Hn(e,n,(n.subtreeFlags&8772)!==0):Gn(e,n),Nn=d,Pt=u}break;case 30:break;default:Gn(e,n)}}function Nh(e){var t=e.alternate;t!==null&&(e.alternate=null,Nh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_e(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Et=null,wa=!1;function kn(e,t,n){for(n=n.child;n!==null;)kh(e,t,n),n=n.sibling}function kh(e,t,n){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(Qt,n)}catch{}switch(n.tag){case 26:Pt||rn(n,t),kn(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Pt||rn(n,t);var r=Et,d=wa;es(n.type)&&(Et=n.stateNode,wa=!1),kn(e,t,n),mo(n.stateNode),Et=r,wa=d;break;case 5:Pt||rn(n,t);case 6:if(r=Et,d=wa,Et=null,kn(e,t,n),Et=r,wa=d,Et!==null)if(wa)try{(Et.nodeType===9?Et.body:Et.nodeName==="HTML"?Et.ownerDocument.body:Et).removeChild(n.stateNode)}catch(u){ft(n,t,u)}else try{Et.removeChild(n.stateNode)}catch(u){ft(n,t,u)}break;case 18:Et!==null&&(wa?(e=Et,yg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),To(e)):yg(Et,n.stateNode));break;case 4:r=Et,d=wa,Et=n.stateNode.containerInfo,wa=!0,kn(e,t,n),Et=r,wa=d;break;case 0:case 11:case 14:case 15:Pt||Xn(2,n,t),Pt||Xn(4,n,t),kn(e,t,n);break;case 1:Pt||(rn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"&&xh(n,t,r)),kn(e,t,n);break;case 21:kn(e,t,n);break;case 22:Pt=(r=Pt)||n.memoizedState!==null,kn(e,t,n),Pt=r;break;default:kn(e,t,n)}}function Rh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{To(e)}catch(n){ft(t,t.return,n)}}function zv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Dh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Dh),t;default:throw Error(l(435,e.tag))}}function id(e,t){var n=zv(e);t.forEach(function(r){var d=Qv.bind(null,e,r);n.has(r)||(n.add(r),r.then(d,d))})}function Ra(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var d=n[r],u=e,b=t,T=b;e:for(;T!==null;){switch(T.tag){case 27:if(es(T.type)){Et=T.stateNode,wa=!1;break e}break;case 5:Et=T.stateNode,wa=!1;break e;case 3:case 4:Et=T.stateNode.containerInfo,wa=!0;break e}T=T.return}if(Et===null)throw Error(l(160));kh(u,b,d),Et=null,wa=!1,u=d.alternate,u!==null&&(u.return=null),d.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)jh(t,e),t=t.sibling}var Qa=null;function jh(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ra(t,e),ja(e),r&4&&(Xn(3,e,e.return),ro(3,e),Xn(5,e,e.return));break;case 1:Ra(t,e),ja(e),r&512&&(Pt||n===null||rn(n,n.return)),r&64&&Nn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var d=Qa;if(Ra(t,e),ja(e),r&512&&(Pt||n===null||rn(n,n.return)),r&4){var u=n!==null?n.memoizedState:null;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){e:{r=e.type,n=e.memoizedProps,d=d.ownerDocument||d;t:switch(r){case"title":u=d.getElementsByTagName("title")[0],(!u||u[Ne]||u[pe]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=d.createElement(r),d.head.insertBefore(u,d.querySelector("head > title"))),sa(u,r,n),u[pe]=e,Ot(u),r=u;break e;case"link":var b=Ag("link","href",d).get(r+(n.href||""));if(b){for(var T=0;T<b.length;T++)if(u=b[T],u.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&u.getAttribute("rel")===(n.rel==null?null:n.rel)&&u.getAttribute("title")===(n.title==null?null:n.title)&&u.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){b.splice(T,1);break t}}u=d.createElement(r),sa(u,r,n),d.head.appendChild(u);break;case"meta":if(b=Ag("meta","content",d).get(r+(n.content||""))){for(T=0;T<b.length;T++)if(u=b[T],u.getAttribute("content")===(n.content==null?null:""+n.content)&&u.getAttribute("name")===(n.name==null?null:n.name)&&u.getAttribute("property")===(n.property==null?null:n.property)&&u.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&u.getAttribute("charset")===(n.charSet==null?null:n.charSet)){b.splice(T,1);break t}}u=d.createElement(r),sa(u,r,n),d.head.appendChild(u);break;default:throw Error(l(468,r))}u[pe]=e,Ot(u),r=u}e.stateNode=r}else Dg(d,e.type,e.stateNode);else e.stateNode=Tg(d,r,e.memoizedProps);else u!==r?(u===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):u.count--,r===null?Dg(d,e.type,e.stateNode):Tg(d,r,e.memoizedProps)):r===null&&e.stateNode!==null&&sd(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ra(t,e),ja(e),r&512&&(Pt||n===null||rn(n,n.return)),n!==null&&r&4&&sd(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ra(t,e),ja(e),r&512&&(Pt||n===null||rn(n,n.return)),e.flags&32){d=e.stateNode;try{zs(d,"")}catch(Z){ft(e,e.return,Z)}}r&4&&e.stateNode!=null&&(d=e.memoizedProps,sd(e,d,n!==null?n.memoizedProps:d)),r&1024&&(ld=!0);break;case 6:if(Ra(t,e),ja(e),r&4){if(e.stateNode===null)throw Error(l(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(Z){ft(e,e.return,Z)}}break;case 3:if(si=null,d=Qa,Qa=ai(t.containerInfo),Ra(t,e),Qa=d,ja(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{To(t.containerInfo)}catch(Z){ft(e,e.return,Z)}ld&&(ld=!1,Lh(e));break;case 4:r=Qa,Qa=ai(e.stateNode.containerInfo),Ra(t,e),ja(e),Qa=r;break;case 12:Ra(t,e),ja(e);break;case 13:Ra(t,e),ja(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(hd=fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,id(e,r)));break;case 22:d=e.memoizedState!==null;var O=n!==null&&n.memoizedState!==null,H=Nn,ee=Pt;if(Nn=H||d,Pt=ee||O,Ra(t,e),Pt=ee,Nn=H,ja(e),r&8192)e:for(t=e.stateNode,t._visibility=d?t._visibility&-2:t._visibility|1,d&&(n===null||O||Nn||Pt||ks(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){O=n=t;try{if(u=O.stateNode,d)b=u.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{T=O.stateNode;var se=O.memoizedProps.style,W=se!=null&&se.hasOwnProperty("display")?se.display:null;T.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(Z){ft(O,O.return,Z)}}}else if(t.tag===6){if(n===null){O=t;try{O.stateNode.nodeValue=d?"":O.memoizedProps}catch(Z){ft(O,O.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,id(e,n))));break;case 19:Ra(t,e),ja(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,id(e,r)));break;case 30:break;case 21:break;default:Ra(t,e),ja(e)}}function ja(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Th(r)){n=r;break}r=r.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var d=n.stateNode,u=rd(e);zl(e,u,d);break;case 5:var b=n.stateNode;n.flags&32&&(zs(b,""),n.flags&=-33);var T=rd(e);zl(e,T,b);break;case 3:case 4:var O=n.stateNode.containerInfo,H=rd(e);od(e,H,O);break;default:throw Error(l(161))}}catch(ee){ft(e,e.return,ee)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Lh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Lh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Gn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Ch(e,t.alternate,t),t=t.sibling}function ks(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xn(4,t,t.return),ks(t);break;case 1:rn(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&xh(t,t.return,n),ks(t);break;case 27:mo(t.stateNode);case 26:case 5:rn(t,t.return),ks(t);break;case 22:t.memoizedState===null&&ks(t);break;case 30:ks(t);break;default:ks(t)}e=e.sibling}}function Hn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,d=e,u=t,b=u.flags;switch(u.tag){case 0:case 11:case 15:Hn(d,u,n),ro(4,u);break;case 1:if(Hn(d,u,n),r=u,d=r.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(H){ft(r,r.return,H)}if(r=u,d=r.updateQueue,d!==null){var T=r.stateNode;try{var O=d.shared.hiddenCallbacks;if(O!==null)for(d.shared.hiddenCallbacks=null,d=0;d<O.length;d++)lp(O[d],T)}catch(H){ft(r,r.return,H)}}n&&b&64&&wh(u),oo(u,u.return);break;case 27:Ah(u);case 26:case 5:Hn(d,u,n),n&&r===null&&b&4&&Sh(u),oo(u,u.return);break;case 12:Hn(d,u,n);break;case 13:Hn(d,u,n),n&&b&4&&Rh(d,u);break;case 22:u.memoizedState===null&&Hn(d,u,n),oo(u,u.return);break;case 30:break;default:Hn(d,u,n)}t=t.sibling}}function cd(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Vr(n))}function dd(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vr(e))}function on(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Oh(e,t,n,r),t=t.sibling}function Oh(e,t,n,r){var d=t.flags;switch(t.tag){case 0:case 11:case 15:on(e,t,n,r),d&2048&&ro(9,t);break;case 1:on(e,t,n,r);break;case 3:on(e,t,n,r),d&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vr(e)));break;case 12:if(d&2048){on(e,t,n,r),e=t.stateNode;try{var u=t.memoizedProps,b=u.id,T=u.onPostCommit;typeof T=="function"&&T(b,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){ft(t,t.return,O)}}else on(e,t,n,r);break;case 13:on(e,t,n,r);break;case 23:break;case 22:u=t.stateNode,b=t.alternate,t.memoizedState!==null?u._visibility&2?on(e,t,n,r):lo(e,t):u._visibility&2?on(e,t,n,r):(u._visibility|=2,ir(e,t,n,r,(t.subtreeFlags&10256)!==0)),d&2048&&cd(b,t);break;case 24:on(e,t,n,r),d&2048&&dd(t.alternate,t);break;default:on(e,t,n,r)}}function ir(e,t,n,r,d){for(d=d&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var u=e,b=t,T=n,O=r,H=b.flags;switch(b.tag){case 0:case 11:case 15:ir(u,b,T,O,d),ro(8,b);break;case 23:break;case 22:var ee=b.stateNode;b.memoizedState!==null?ee._visibility&2?ir(u,b,T,O,d):lo(u,b):(ee._visibility|=2,ir(u,b,T,O,d)),d&&H&2048&&cd(b.alternate,b);break;case 24:ir(u,b,T,O,d),d&&H&2048&&dd(b.alternate,b);break;default:ir(u,b,T,O,d)}t=t.sibling}}function lo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,d=r.flags;switch(r.tag){case 22:lo(n,r),d&2048&&cd(r.alternate,r);break;case 24:lo(n,r),d&2048&&dd(r.alternate,r);break;default:lo(n,r)}t=t.sibling}}var io=8192;function cr(e){if(e.subtreeFlags&io)for(e=e.child;e!==null;)_h(e),e=e.sibling}function _h(e){switch(e.tag){case 26:cr(e),e.flags&io&&e.memoizedState!==null&&N0(Qa,e.memoizedState,e.memoizedProps);break;case 5:cr(e);break;case 3:case 4:var t=Qa;Qa=ai(e.stateNode.containerInfo),cr(e),Qa=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=io,io=16777216,cr(e),io=t):cr(e));break;default:cr(e)}}function Ph(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function co(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Kt=r,Ih(r,e)}Ph(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)qh(e),e=e.sibling}function qh(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&Xn(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Yl(e)):co(e);break;default:co(e)}}function Yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Kt=r,Ih(r,e)}Ph(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xn(8,t,t.return),Yl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Yl(t));break;default:Yl(t)}e=e.sibling}}function Ih(e,t){for(;Kt!==null;){var n=Kt;switch(n.tag){case 0:case 11:case 15:Xn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Vr(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Kt=r;else e:for(n=e;Kt!==null;){r=Kt;var d=r.sibling,u=r.return;if(Nh(r),r===n){Kt=null;break e}if(d!==null){d.return=u,Kt=d;break e}Kt=u}}}var Yv={getCacheForType:function(e){var t=da(zt),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n}},Vv=typeof WeakMap=="function"?WeakMap:Map,rt=0,gt=null,Ge=null,Qe=0,ot=0,La=null,Kn=!1,dr=!1,ud=!1,Rn=0,kt=0,Wn=0,Rs=0,fd=0,Ga=0,ur=0,uo=null,xa=null,pd=!1,hd=0,Vl=1/0,Xl=null,Zn=null,na=0,Qn=null,fr=null,pr=0,gd=0,md=null,Mh=null,fo=0,yd=null;function Oa(){if((rt&2)!==0&&Qe!==0)return Qe&-Qe;if(V.T!==null){var e=er;return e!==0?e:Td()}return ha()}function $h(){Ga===0&&(Ga=(Qe&536870912)===0||at?Ta():536870912);var e=Xa.current;return e!==null&&(e.flags|=32),Ga}function _a(e,t,n){(e===gt&&(ot===2||ot===9)||e.cancelPendingCommit!==null)&&(hr(e,0),Jn(e,Qe,Ga,!1)),$a(e,n),((rt&2)===0||e!==gt)&&(e===gt&&((rt&2)===0&&(Rs|=n),kt===4&&Jn(e,Qe,Ga,!1)),ln(e))}function Uh(e,t,n){if((rt&6)!==0)throw Error(l(327));var r=!n&&(t&124)===0&&(t&e.expiredLanes)===0||Sa(e,t),d=r?Hv(e,t):Ed(e,t,!0),u=r;do{if(d===0){dr&&!r&&Jn(e,t,0,!1);break}else{if(n=e.current.alternate,u&&!Xv(n)){d=Ed(e,t,!1),u=!1;continue}if(d===2){if(u=t,e.errorRecoveryDisabledLanes&u)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){t=b;e:{var T=e;d=uo;var O=T.current.memoizedState.isDehydrated;if(O&&(hr(T,b).flags|=256),b=Ed(T,b,!1),b!==2){if(ud&&!O){T.errorRecoveryDisabledLanes|=u,Rs|=u,d=4;break e}u=xa,xa=d,u!==null&&(xa===null?xa=u:xa.push.apply(xa,u))}d=b}if(u=!1,d!==2)continue}}if(d===1){hr(e,0),Jn(e,t,0,!0);break}e:{switch(r=e,u=d,u){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Jn(r,t,Ga,!Kn);break e;case 2:xa=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(d=hd+300-fe(),10<d)){if(Jn(r,t,Ga,!Kn),At(r,0,!0)!==0)break e;r.timeoutHandle=gg(Bh.bind(null,r,n,xa,Xl,pd,t,Ga,Rs,ur,Kn,u,2,-0,0),d);break e}Bh(r,n,xa,Xl,pd,t,Ga,Rs,ur,Kn,u,0,-0,0)}}break}while(!0);ln(e)}function Bh(e,t,n,r,d,u,b,T,O,H,ee,se,W,Z){if(e.timeoutHandle=-1,se=t.subtreeFlags,(se&8192||(se&16785408)===16785408)&&(vo={stylesheets:null,count:0,unsuspend:C0},_h(t),se=k0(),se!==null)){e.cancelPendingCommit=se(Hh.bind(null,e,t,u,n,r,d,b,T,O,ee,1,W,Z)),Jn(e,u,b,!H);return}Hh(e,t,u,n,r,d,b,T,O)}function Xv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var d=n[r],u=d.getSnapshot;d=d.value;try{if(!Na(u(),d))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jn(e,t,n,r){t&=~fd,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var d=t;0<d;){var u=31-st(d),b=1<<u;r[u]=-1,d&=~b}n!==0&&Wa(e,n,t)}function Gl(){return(rt&6)===0?(po(0),!1):!0}function bd(){if(Ge!==null){if(ot===0)var e=Ge.return;else e=Ge,xn=Ts=null,Pc(e),or=null,ao=0,e=Ge;for(;e!==null;)Eh(e.alternate,e),e=e.return;Ge=null}}function hr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,d0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),bd(),gt=e,Ge=n=vn(e.current,null),Qe=t,ot=0,La=null,Kn=!1,dr=Sa(e,t),ud=!1,ur=Ga=fd=Rs=Wn=kt=0,xa=uo=null,pd=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var d=31-st(r),u=1<<d;t|=e[d],r&=~u}return Rn=t,gl(),n}function Fh(e,t){ze=null,V.H=_l,t===Gr||t===Tl?(t=rp(),ot=3):t===ap?(t=rp(),ot=4):ot=t===oh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,La=t,Ge===null&&(kt=1,$l(e,Fa(t,e.current)))}function zh(){var e=V.H;return V.H=_l,e===null?_l:e}function Yh(){var e=V.A;return V.A=Yv,e}function vd(){kt=4,Kn||(Qe&4194048)!==Qe&&Xa.current!==null||(dr=!0),(Wn&134217727)===0&&(Rs&134217727)===0||gt===null||Jn(gt,Qe,Ga,!1)}function Ed(e,t,n){var r=rt;rt|=2;var d=zh(),u=Yh();(gt!==e||Qe!==t)&&(Xl=null,hr(e,t)),t=!1;var b=kt;e:do try{if(ot!==0&&Ge!==null){var T=Ge,O=La;switch(ot){case 8:bd(),b=6;break e;case 3:case 2:case 9:case 6:Xa.current===null&&(t=!0);var H=ot;if(ot=0,La=null,gr(e,T,O,H),n&&dr){b=0;break e}break;default:H=ot,ot=0,La=null,gr(e,T,O,H)}}Gv(),b=kt;break}catch(ee){Fh(e,ee)}while(!0);return t&&e.shellSuspendCounter++,xn=Ts=null,rt=r,V.H=d,V.A=u,Ge===null&&(gt=null,Qe=0,gl()),b}function Gv(){for(;Ge!==null;)Vh(Ge)}function Hv(e,t){var n=rt;rt|=2;var r=zh(),d=Yh();gt!==e||Qe!==t?(Xl=null,Vl=fe()+500,hr(e,t)):dr=Sa(e,t);e:do try{if(ot!==0&&Ge!==null){t=Ge;var u=La;t:switch(ot){case 1:ot=0,La=null,gr(e,t,u,1);break;case 2:case 9:if(np(u)){ot=0,La=null,Xh(t);break}t=function(){ot!==2&&ot!==9||gt!==e||(ot=7),ln(e)},u.then(t,t);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:np(u)?(ot=0,La=null,Xh(t)):(ot=0,La=null,gr(e,t,u,7));break;case 5:var b=null;switch(Ge.tag){case 26:b=Ge.memoizedState;case 5:case 27:var T=Ge;if(!b||Cg(b)){ot=0,La=null;var O=T.sibling;if(O!==null)Ge=O;else{var H=T.return;H!==null?(Ge=H,Hl(H)):Ge=null}break t}}ot=0,La=null,gr(e,t,u,5);break;case 6:ot=0,La=null,gr(e,t,u,6);break;case 8:bd(),kt=6;break e;default:throw Error(l(462))}}Kv();break}catch(ee){Fh(e,ee)}while(!0);return xn=Ts=null,V.H=r,V.A=d,rt=n,Ge!==null?0:(gt=null,Qe=0,gl(),kt)}function Kv(){for(;Ge!==null&&!U();)Vh(Ge)}function Vh(e){var t=bh(e.alternate,e,Rn);e.memoizedProps=e.pendingProps,t===null?Hl(e):Ge=t}function Xh(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=fh(n,t,t.pendingProps,t.type,void 0,Qe);break;case 11:t=fh(n,t,t.pendingProps,t.type.render,t.ref,Qe);break;case 5:Pc(t);default:Eh(n,t),t=Ge=Gf(t,Rn),t=bh(n,t,Rn)}e.memoizedProps=e.pendingProps,t===null?Hl(e):Ge=t}function gr(e,t,n,r){xn=Ts=null,Pc(t),or=null,ao=0;var d=t.return;try{if(Mv(e,d,t,n,Qe)){kt=1,$l(e,Fa(n,e.current)),Ge=null;return}}catch(u){if(d!==null)throw Ge=d,u;kt=1,$l(e,Fa(n,e.current)),Ge=null;return}t.flags&32768?(at||r===1?e=!0:dr||(Qe&536870912)!==0?e=!1:(Kn=e=!0,(r===2||r===9||r===3||r===6)&&(r=Xa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Gh(t,e)):Hl(t)}function Hl(e){var t=e;do{if((t.flags&32768)!==0){Gh(t,Kn);return}e=t.return;var n=Uv(t.alternate,t,Rn);if(n!==null){Ge=n;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);kt===0&&(kt=5)}function Gh(e,t){do{var n=Bv(e.alternate,e);if(n!==null){n.flags&=32767,Ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Ge=e;return}Ge=e=n}while(e!==null);kt=6,Ge=null}function Hh(e,t,n,r,d,u,b,T,O){e.cancelPendingCommit=null;do Kl();while(na!==0);if((rt&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(u=t.lanes|t.childLanes,u|=dc,ca(e,n,u,b,T,O),e===gt&&(Ge=gt=null,Qe=0),fr=t,Qn=e,pr=n,gd=u,md=d,Mh=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Jv(ge,function(){return Jh(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=V.T,V.T=null,d=re.p,re.p=2,b=rt,rt|=4;try{Fv(e,t,n)}finally{rt=b,re.p=d,V.T=r}}na=1,Kh(),Wh(),Zh()}}function Kh(){if(na===1){na=0;var e=Qn,t=fr,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=V.T,V.T=null;var r=re.p;re.p=2;var d=rt;rt|=4;try{jh(t,e);var u=Ld,b=If(e.containerInfo),T=u.focusedElem,O=u.selectionRange;if(b!==T&&T&&T.ownerDocument&&qf(T.ownerDocument.documentElement,T)){if(O!==null&&rc(T)){var H=O.start,ee=O.end;if(ee===void 0&&(ee=H),"selectionStart"in T)T.selectionStart=H,T.selectionEnd=Math.min(ee,T.value.length);else{var se=T.ownerDocument||document,W=se&&se.defaultView||window;if(W.getSelection){var Z=W.getSelection(),Oe=T.textContent.length,je=Math.min(O.start,Oe),ut=O.end===void 0?je:Math.min(O.end,Oe);!Z.extend&&je>ut&&(b=ut,ut=je,je=b);var z=Pf(T,je),I=Pf(T,ut);if(z&&I&&(Z.rangeCount!==1||Z.anchorNode!==z.node||Z.anchorOffset!==z.offset||Z.focusNode!==I.node||Z.focusOffset!==I.offset)){var X=se.createRange();X.setStart(z.node,z.offset),Z.removeAllRanges(),je>ut?(Z.addRange(X),Z.extend(I.node,I.offset)):(X.setEnd(I.node,I.offset),Z.addRange(X))}}}}for(se=[],Z=T;Z=Z.parentNode;)Z.nodeType===1&&se.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<se.length;T++){var ae=se[T];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}li=!!jd,Ld=jd=null}finally{rt=d,re.p=r,V.T=n}}e.current=t,na=2}}function Wh(){if(na===2){na=0;var e=Qn,t=fr,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=V.T,V.T=null;var r=re.p;re.p=2;var d=rt;rt|=4;try{Ch(e,t.alternate,t)}finally{rt=d,re.p=r,V.T=n}}na=3}}function Zh(){if(na===4||na===3){na=0,ie();var e=Qn,t=fr,n=pr,r=Mh;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?na=5:(na=0,fr=Qn=null,Qh(e,e.pendingLanes));var d=e.pendingLanes;if(d===0&&(Zn=null),pa(n),t=t.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(Qt,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=V.T,d=re.p,re.p=2,V.T=null;try{for(var u=e.onRecoverableError,b=0;b<r.length;b++){var T=r[b];u(T.value,{componentStack:T.stack})}}finally{V.T=t,re.p=d}}(pr&3)!==0&&Kl(),ln(e),d=e.pendingLanes,(n&4194090)!==0&&(d&42)!==0?e===yd?fo++:(fo=0,yd=e):fo=0,po(0)}}function Qh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vr(t)))}function Kl(e){return Kh(),Wh(),Zh(),Jh()}function Jh(){if(na!==5)return!1;var e=Qn,t=gd;gd=0;var n=pa(pr),r=V.T,d=re.p;try{re.p=32>n?32:n,V.T=null,n=md,md=null;var u=Qn,b=pr;if(na=0,fr=Qn=null,pr=0,(rt&6)!==0)throw Error(l(331));var T=rt;if(rt|=4,qh(u.current),Oh(u,u.current,b,n),rt=T,po(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(Qt,u)}catch{}return!0}finally{re.p=d,V.T=r,Qh(e,t)}}function eg(e,t,n){t=Fa(n,t),t=Kc(e.stateNode,t,2),e=Fn(e,t,2),e!==null&&($a(e,2),ln(e))}function ft(e,t,n){if(e.tag===3)eg(e,e,n);else for(;t!==null;){if(t.tag===3){eg(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Zn===null||!Zn.has(r))){e=Fa(n,e),n=sh(2),r=Fn(t,n,2),r!==null&&(rh(n,r,t,e),$a(r,2),ln(r));break}}t=t.return}}function wd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Vv;var d=new Set;r.set(t,d)}else d=r.get(t),d===void 0&&(d=new Set,r.set(t,d));d.has(n)||(ud=!0,d.add(n),e=Wv.bind(null,e,t,n),t.then(e,e))}function Wv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,gt===e&&(Qe&n)===n&&(kt===4||kt===3&&(Qe&62914560)===Qe&&300>fe()-hd?(rt&2)===0&&hr(e,0):fd|=n,ur===Qe&&(ur=0)),ln(e)}function tg(e,t){t===0&&(t=qt()),e=Ws(e,t),e!==null&&($a(e,t),ln(e))}function Zv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),tg(e,n)}function Qv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,d=e.memoizedState;d!==null&&(n=d.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(t),tg(e,n)}function Jv(e,t){return xt(e,t)}var Wl=null,mr=null,xd=!1,Zl=!1,Sd=!1,js=0;function ln(e){e!==mr&&e.next===null&&(mr===null?Wl=mr=e:mr=mr.next=e),Zl=!0,xd||(xd=!0,t0())}function po(e,t){if(!Sd&&Zl){Sd=!0;do for(var n=!1,r=Wl;r!==null;){if(e!==0){var d=r.pendingLanes;if(d===0)var u=0;else{var b=r.suspendedLanes,T=r.pingedLanes;u=(1<<31-st(42|e)+1)-1,u&=d&~(b&~T),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,rg(r,u))}else u=Qe,u=At(r,r===gt?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Sa(r,u)||(n=!0,rg(r,u));r=r.next}while(n);Sd=!1}}function e0(){ag()}function ag(){Zl=xd=!1;var e=0;js!==0&&(c0()&&(e=js),js=0);for(var t=fe(),n=null,r=Wl;r!==null;){var d=r.next,u=ng(r,t);u===0?(r.next=null,n===null?Wl=d:n.next=d,d===null&&(mr=n)):(n=r,(e!==0||(u&3)!==0)&&(Zl=!0)),r=d}po(e)}function ng(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,d=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var b=31-st(u),T=1<<b,O=d[b];O===-1?((T&n)===0||(T&r)!==0)&&(d[b]=ia(T,t)):O<=t&&(e.expiredLanes|=T),u&=~T}if(t=gt,n=Qe,n=At(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(ot===2||ot===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&fa(r),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Sa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&fa(r),pa(n)){case 2:case 8:n=Re;break;case 32:n=ge;break;case 268435456:n=Fe;break;default:n=ge}return r=sg.bind(null,e),n=xt(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&fa(r),e.callbackPriority=2,e.callbackNode=null,2}function sg(e,t){if(na!==0&&na!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Kl()&&e.callbackNode!==n)return null;var r=Qe;return r=At(e,e===gt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Uh(e,r,t),ng(e,fe()),e.callbackNode!=null&&e.callbackNode===n?sg.bind(null,e):null)}function rg(e,t){if(Kl())return null;Uh(e,t,!0)}function t0(){u0(function(){(rt&6)!==0?xt(de,e0):ag()})}function Td(){return js===0&&(js=Ta()),js}function og(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:il(""+e)}function lg(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function a0(e,t,n,r,d){if(t==="submit"&&n&&n.stateNode===d){var u=og((d[Ee]||null).action),b=r.submitter;b&&(t=(t=b[Ee]||null)?og(t.formAction):b.getAttribute("formAction"),t!==null&&(u=t,b=null));var T=new fl("action","action",null,r,d);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(js!==0){var O=b?lg(d,b):new FormData(d);Yc(n,{pending:!0,data:O,method:d.method,action:u},null,O)}}else typeof u=="function"&&(T.preventDefault(),O=b?lg(d,b):new FormData(d),Yc(n,{pending:!0,data:O,method:d.method,action:u},u,O))},currentTarget:d}]})}}for(var Ad=0;Ad<cc.length;Ad++){var Dd=cc[Ad],n0=Dd.toLowerCase(),s0=Dd[0].toUpperCase()+Dd.slice(1);Za(n0,"on"+s0)}Za(Uf,"onAnimationEnd"),Za(Bf,"onAnimationIteration"),Za(Ff,"onAnimationStart"),Za("dblclick","onDoubleClick"),Za("focusin","onFocus"),Za("focusout","onBlur"),Za(wv,"onTransitionRun"),Za(xv,"onTransitionStart"),Za(Sv,"onTransitionCancel"),Za(zf,"onTransitionEnd"),yn("onMouseEnter",["mouseout","mouseover"]),yn("onMouseLeave",["mouseout","mouseover"]),yn("onPointerEnter",["pointerout","pointerover"]),yn("onPointerLeave",["pointerout","pointerover"]),mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),r0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function ig(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],d=r.event;r=r.listeners;e:{var u=void 0;if(t)for(var b=r.length-1;0<=b;b--){var T=r[b],O=T.instance,H=T.currentTarget;if(T=T.listener,O!==u&&d.isPropagationStopped())break e;u=T,d.currentTarget=H;try{u(d)}catch(ee){Ml(ee)}d.currentTarget=null,u=O}else for(b=0;b<r.length;b++){if(T=r[b],O=T.instance,H=T.currentTarget,T=T.listener,O!==u&&d.isPropagationStopped())break e;u=T,d.currentTarget=H;try{u(d)}catch(ee){Ml(ee)}d.currentTarget=null,u=O}}}}function He(e,t){var n=t[Y];n===void 0&&(n=t[Y]=new Set);var r=e+"__bubble";n.has(r)||(cg(t,e,2,!1),n.add(r))}function Cd(e,t,n){var r=0;t&&(r|=4),cg(n,e,r,t)}var Ql="_reactListening"+Math.random().toString(36).slice(2);function Nd(e){if(!e[Ql]){e[Ql]=!0,nl.forEach(function(n){n!=="selectionchange"&&(r0.has(n)||Cd(n,!1,e),Cd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ql]||(t[Ql]=!0,Cd("selectionchange",!1,t))}}function cg(e,t,n,r){switch(Og(t)){case 2:var d=L0;break;case 8:d=O0;break;default:d=Fd}n=d.bind(null,t,n,e),d=void 0,!Wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),r?d!==void 0?e.addEventListener(t,n,{capture:!0,passive:d}):e.addEventListener(t,n,!0):d!==void 0?e.addEventListener(t,n,{passive:d}):e.addEventListener(t,n,!1)}function kd(e,t,n,r,d){var u=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var b=r.tag;if(b===3||b===4){var T=r.stateNode.containerInfo;if(T===d)break;if(b===4)for(b=r.return;b!==null;){var O=b.tag;if((O===3||O===4)&&b.stateNode.containerInfo===d)return;b=b.return}for(;T!==null;){if(b=Ue(T),b===null)return;if(O=b.tag,O===5||O===6||O===26||O===27){r=u=b;continue e}T=T.parentNode}}r=r.return}mf(function(){var H=u,ee=Hi(n),se=[];e:{var W=Yf.get(e);if(W!==void 0){var Z=fl,Oe=e;switch(e){case"keypress":if(dl(n)===0)break e;case"keydown":case"keyup":Z=Jb;break;case"focusin":Oe="focus",Z=ec;break;case"focusout":Oe="blur",Z=ec;break;case"beforeblur":case"afterblur":Z=ec;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=Bb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=av;break;case Uf:case Bf:case Ff:Z=Yb;break;case zf:Z=sv;break;case"scroll":case"scrollend":Z=$b;break;case"wheel":Z=ov;break;case"copy":case"cut":case"paste":Z=Xb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=wf;break;case"toggle":case"beforetoggle":Z=iv}var je=(t&4)!==0,ut=!je&&(e==="scroll"||e==="scrollend"),z=je?W!==null?W+"Capture":null:W;je=[];for(var I=H,X;I!==null;){var ae=I;if(X=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||X===null||z===null||(ae=Lr(I,z),ae!=null&&je.push(go(I,ae,X))),ut)break;I=I.return}0<je.length&&(W=new Z(W,Oe,null,n,ee),se.push({event:W,listeners:je}))}}if((t&7)===0){e:{if(W=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",W&&n!==Gi&&(Oe=n.relatedTarget||n.fromElement)&&(Ue(Oe)||Oe[N]))break e;if((Z||W)&&(W=ee.window===ee?ee:(W=ee.ownerDocument)?W.defaultView||W.parentWindow:window,Z?(Oe=n.relatedTarget||n.toElement,Z=H,Oe=Oe?Ue(Oe):null,Oe!==null&&(ut=p(Oe),je=Oe.tag,Oe!==ut||je!==5&&je!==27&&je!==6)&&(Oe=null)):(Z=null,Oe=H),Z!==Oe)){if(je=vf,ae="onMouseLeave",z="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&(je=wf,ae="onPointerLeave",z="onPointerEnter",I="pointer"),ut=Z==null?W:ea(Z),X=Oe==null?W:ea(Oe),W=new je(ae,I+"leave",Z,n,ee),W.target=ut,W.relatedTarget=X,ae=null,Ue(ee)===H&&(je=new je(z,I+"enter",Oe,n,ee),je.target=X,je.relatedTarget=ut,ae=je),ut=ae,Z&&Oe)t:{for(je=Z,z=Oe,I=0,X=je;X;X=yr(X))I++;for(X=0,ae=z;ae;ae=yr(ae))X++;for(;0<I-X;)je=yr(je),I--;for(;0<X-I;)z=yr(z),X--;for(;I--;){if(je===z||z!==null&&je===z.alternate)break t;je=yr(je),z=yr(z)}je=null}else je=null;Z!==null&&dg(se,W,Z,je,!1),Oe!==null&&ut!==null&&dg(se,ut,Oe,je,!0)}}e:{if(W=H?ea(H):window,Z=W.nodeName&&W.nodeName.toLowerCase(),Z==="select"||Z==="input"&&W.type==="file")var Se=kf;else if(Cf(W))if(Rf)Se=bv;else{Se=mv;var Ve=gv}else Z=W.nodeName,!Z||Z.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?H&&Xi(H.elementType)&&(Se=kf):Se=yv;if(Se&&(Se=Se(e,H))){Nf(se,Se,n,ee);break e}Ve&&Ve(e,W,H),e==="focusout"&&H&&W.type==="number"&&H.memoizedProps.value!=null&&Vi(W,"number",W.value)}switch(Ve=H?ea(H):window,e){case"focusin":(Cf(Ve)||Ve.contentEditable==="true")&&(Gs=Ve,oc=H,Ur=null);break;case"focusout":Ur=oc=Gs=null;break;case"mousedown":lc=!0;break;case"contextmenu":case"mouseup":case"dragend":lc=!1,Mf(se,n,ee);break;case"selectionchange":if(Ev)break;case"keydown":case"keyup":Mf(se,n,ee)}var ke;if(ac)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Xs?Af(e,n)&&(Le="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Le="onCompositionStart");Le&&(xf&&n.locale!=="ko"&&(Xs||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Xs&&(ke=yf()):(Mn=ee,Zi="value"in Mn?Mn.value:Mn.textContent,Xs=!0)),Ve=Jl(H,Le),0<Ve.length&&(Le=new Ef(Le,e,null,n,ee),se.push({event:Le,listeners:Ve}),ke?Le.data=ke:(ke=Df(n),ke!==null&&(Le.data=ke)))),(ke=dv?uv(e,n):fv(e,n))&&(Le=Jl(H,"onBeforeInput"),0<Le.length&&(Ve=new Ef("onBeforeInput","beforeinput",null,n,ee),se.push({event:Ve,listeners:Le}),Ve.data=ke)),a0(se,e,H,n,ee)}ig(se,t)})}function go(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jl(e,t){for(var n=t+"Capture",r=[];e!==null;){var d=e,u=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||u===null||(d=Lr(e,n),d!=null&&r.unshift(go(e,d,u)),d=Lr(e,t),d!=null&&r.push(go(e,d,u))),e.tag===3)return r;e=e.return}return[]}function yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dg(e,t,n,r,d){for(var u=t._reactName,b=[];n!==null&&n!==r;){var T=n,O=T.alternate,H=T.stateNode;if(T=T.tag,O!==null&&O===r)break;T!==5&&T!==26&&T!==27||H===null||(O=H,d?(H=Lr(n,u),H!=null&&b.unshift(go(n,H,O))):d||(H=Lr(n,u),H!=null&&b.push(go(n,H,O)))),n=n.return}b.length!==0&&e.push({event:t,listeners:b})}var o0=/\r\n?/g,l0=/\u0000|\uFFFD/g;function ug(e){return(typeof e=="string"?e:""+e).replace(o0,`
`).replace(l0,"")}function fg(e,t){return t=ug(t),ug(e)===t}function ei(){}function dt(e,t,n,r,d,u){switch(n){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||zs(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&zs(e,""+r);break;case"className":Ct(e,"class",r);break;case"tabIndex":Ct(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,n,r);break;case"style":hf(e,r,u);break;case"data":if(t!=="object"){Ct(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=il(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(t!=="input"&&dt(e,t,"name",d.name,d,null),dt(e,t,"formEncType",d.formEncType,d,null),dt(e,t,"formMethod",d.formMethod,d,null),dt(e,t,"formTarget",d.formTarget,d,null)):(dt(e,t,"encType",d.encType,d,null),dt(e,t,"method",d.method,d,null),dt(e,t,"target",d.target,d,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(n);break}r=il(""+r),e.setAttribute(n,r);break;case"onClick":r!=null&&(e.onclick=ei);break;case"onScroll":r!=null&&He("scroll",e);break;case"onScrollEnd":r!=null&&He("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(n=r.__html,n!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}n=il(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":r===!0?e.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":He("beforetoggle",e),He("toggle",e),yt(e,"popover",r);break;case"xlinkActuate":tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":tt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":tt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":tt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":tt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":yt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Ib.get(n)||n,yt(e,n,r))}}function Rd(e,t,n,r,d,u){switch(n){case"style":hf(e,r,u);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(n=r.__html,n!=null){if(d.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof r=="string"?zs(e,r):(typeof r=="number"||typeof r=="bigint")&&zs(e,""+r);break;case"onScroll":r!=null&&He("scroll",e);break;case"onScrollEnd":r!=null&&He("scrollend",e);break;case"onClick":r!=null&&(e.onclick=ei);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sl.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(d=n.endsWith("Capture"),t=n.slice(2,d?n.length-7:void 0),u=e[Ee]||null,u=u!=null?u[n]:null,typeof u=="function"&&e.removeEventListener(t,u,d),typeof r=="function")){typeof u!="function"&&u!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,d);break e}n in e?e[n]=r:r===!0?e.setAttribute(n,""):yt(e,n,r)}}}function sa(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":He("error",e),He("load",e);var r=!1,d=!1,u;for(u in n)if(n.hasOwnProperty(u)){var b=n[u];if(b!=null)switch(u){case"src":r=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:dt(e,t,u,b,n,null)}}d&&dt(e,t,"srcSet",n.srcSet,n,null),r&&dt(e,t,"src",n.src,n,null);return;case"input":He("invalid",e);var T=u=b=d=null,O=null,H=null;for(r in n)if(n.hasOwnProperty(r)){var ee=n[r];if(ee!=null)switch(r){case"name":d=ee;break;case"type":b=ee;break;case"checked":O=ee;break;case"defaultChecked":H=ee;break;case"value":u=ee;break;case"defaultValue":T=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(l(137,t));break;default:dt(e,t,r,ee,n,null)}}df(e,u,T,O,H,b,d,!1),ol(e);return;case"select":He("invalid",e),r=b=u=null;for(d in n)if(n.hasOwnProperty(d)&&(T=n[d],T!=null))switch(d){case"value":u=T;break;case"defaultValue":b=T;break;case"multiple":r=T;default:dt(e,t,d,T,n,null)}t=u,n=b,e.multiple=!!r,t!=null?Fs(e,!!r,t,!1):n!=null&&Fs(e,!!r,n,!0);return;case"textarea":He("invalid",e),u=d=r=null;for(b in n)if(n.hasOwnProperty(b)&&(T=n[b],T!=null))switch(b){case"value":r=T;break;case"defaultValue":d=T;break;case"children":u=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(l(91));break;default:dt(e,t,b,T,n,null)}ff(e,r,d,u),ol(e);return;case"option":for(O in n)n.hasOwnProperty(O)&&(r=n[O],r!=null)&&(O==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":dt(e,t,O,r,n,null));return;case"dialog":He("beforetoggle",e),He("toggle",e),He("cancel",e),He("close",e);break;case"iframe":case"object":He("load",e);break;case"video":case"audio":for(r=0;r<ho.length;r++)He(ho[r],e);break;case"image":He("error",e),He("load",e);break;case"details":He("toggle",e);break;case"embed":case"source":case"link":He("error",e),He("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(H in n)if(n.hasOwnProperty(H)&&(r=n[H],r!=null))switch(H){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:dt(e,t,H,r,n,null)}return;default:if(Xi(t)){for(ee in n)n.hasOwnProperty(ee)&&(r=n[ee],r!==void 0&&Rd(e,t,ee,r,n,void 0));return}}for(T in n)n.hasOwnProperty(T)&&(r=n[T],r!=null&&dt(e,t,T,r,n,null))}function i0(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,u=null,b=null,T=null,O=null,H=null,ee=null;for(Z in n){var se=n[Z];if(n.hasOwnProperty(Z)&&se!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":O=se;default:r.hasOwnProperty(Z)||dt(e,t,Z,null,r,se)}}for(var W in r){var Z=r[W];if(se=n[W],r.hasOwnProperty(W)&&(Z!=null||se!=null))switch(W){case"type":u=Z;break;case"name":d=Z;break;case"checked":H=Z;break;case"defaultChecked":ee=Z;break;case"value":b=Z;break;case"defaultValue":T=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(l(137,t));break;default:Z!==se&&dt(e,t,W,Z,r,se)}}Yi(e,b,T,O,H,ee,u,d);return;case"select":Z=b=T=W=null;for(u in n)if(O=n[u],n.hasOwnProperty(u)&&O!=null)switch(u){case"value":break;case"multiple":Z=O;default:r.hasOwnProperty(u)||dt(e,t,u,null,r,O)}for(d in r)if(u=r[d],O=n[d],r.hasOwnProperty(d)&&(u!=null||O!=null))switch(d){case"value":W=u;break;case"defaultValue":T=u;break;case"multiple":b=u;default:u!==O&&dt(e,t,d,u,r,O)}t=T,n=b,r=Z,W!=null?Fs(e,!!n,W,!1):!!r!=!!n&&(t!=null?Fs(e,!!n,t,!0):Fs(e,!!n,n?[]:"",!1));return;case"textarea":Z=W=null;for(T in n)if(d=n[T],n.hasOwnProperty(T)&&d!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:dt(e,t,T,null,r,d)}for(b in r)if(d=r[b],u=n[b],r.hasOwnProperty(b)&&(d!=null||u!=null))switch(b){case"value":W=d;break;case"defaultValue":Z=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(l(91));break;default:d!==u&&dt(e,t,b,d,r,u)}uf(e,W,Z);return;case"option":for(var Oe in n)W=n[Oe],n.hasOwnProperty(Oe)&&W!=null&&!r.hasOwnProperty(Oe)&&(Oe==="selected"?e.selected=!1:dt(e,t,Oe,null,r,W));for(O in r)W=r[O],Z=n[O],r.hasOwnProperty(O)&&W!==Z&&(W!=null||Z!=null)&&(O==="selected"?e.selected=W&&typeof W!="function"&&typeof W!="symbol":dt(e,t,O,W,r,Z));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var je in n)W=n[je],n.hasOwnProperty(je)&&W!=null&&!r.hasOwnProperty(je)&&dt(e,t,je,null,r,W);for(H in r)if(W=r[H],Z=n[H],r.hasOwnProperty(H)&&W!==Z&&(W!=null||Z!=null))switch(H){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(l(137,t));break;default:dt(e,t,H,W,r,Z)}return;default:if(Xi(t)){for(var ut in n)W=n[ut],n.hasOwnProperty(ut)&&W!==void 0&&!r.hasOwnProperty(ut)&&Rd(e,t,ut,void 0,r,W);for(ee in r)W=r[ee],Z=n[ee],!r.hasOwnProperty(ee)||W===Z||W===void 0&&Z===void 0||Rd(e,t,ee,W,r,Z);return}}for(var z in n)W=n[z],n.hasOwnProperty(z)&&W!=null&&!r.hasOwnProperty(z)&&dt(e,t,z,null,r,W);for(se in r)W=r[se],Z=n[se],!r.hasOwnProperty(se)||W===Z||W==null&&Z==null||dt(e,t,se,W,r,Z)}var jd=null,Ld=null;function ti(e){return e.nodeType===9?e:e.ownerDocument}function pg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Od(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var _d=null;function c0(){var e=window.event;return e&&e.type==="popstate"?e===_d?!1:(_d=e,!0):(_d=null,!1)}var gg=typeof setTimeout=="function"?setTimeout:void 0,d0=typeof clearTimeout=="function"?clearTimeout:void 0,mg=typeof Promise=="function"?Promise:void 0,u0=typeof queueMicrotask=="function"?queueMicrotask:typeof mg<"u"?function(e){return mg.resolve(null).then(e).catch(f0)}:gg;function f0(e){setTimeout(function(){throw e})}function es(e){return e==="head"}function yg(e,t){var n=t,r=0,d=0;do{var u=n.nextSibling;if(e.removeChild(n),u&&u.nodeType===8)if(n=u.data,n==="/$"){if(0<r&&8>r){n=r;var b=e.ownerDocument;if(n&1&&mo(b.documentElement),n&2&&mo(b.body),n&4)for(n=b.head,mo(n),b=n.firstChild;b;){var T=b.nextSibling,O=b.nodeName;b[Ne]||O==="SCRIPT"||O==="STYLE"||O==="LINK"&&b.rel.toLowerCase()==="stylesheet"||n.removeChild(b),b=T}}if(d===0){e.removeChild(u),To(t);return}d--}else n==="$"||n==="$?"||n==="$!"?d++:r=n.charCodeAt(0)-48;else r=0;n=u}while(n);To(t)}function Pd(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Pd(n),_e(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function p0(e,t,n,r){for(;e.nodeType===1;){var d=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ne])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==d.rel||e.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||e.getAttribute("title")!==(d.title==null?null:d.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(d.src==null?null:d.src)||e.getAttribute("type")!==(d.type==null?null:d.type)||e.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var u=d.name==null?null:""+d.name;if(d.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ja(e.nextSibling),e===null)break}return null}function h0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ja(e.nextSibling),e===null))return null;return e}function qd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function g0(e,t){var n=e.ownerDocument;if(e.data!=="$?"||n.readyState==="complete")t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ja(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Id=null;function bg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}function vg(e,t,n){switch(t=ti(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function mo(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_e(e)}var Ha=new Map,Eg=new Set;function ai(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var jn=re.d;re.d={f:m0,r:y0,D:b0,C:v0,L:E0,m:w0,X:S0,S:x0,M:T0};function m0(){var e=jn.f(),t=Gl();return e||t}function y0(e){var t=St(e);t!==null&&t.tag===5&&t.type==="form"?Up(t):jn.r(e)}var br=typeof document>"u"?null:document;function wg(e,t,n){var r=br;if(r&&typeof t=="string"&&t){var d=Ba(t);d='link[rel="'+e+'"][href="'+d+'"]',typeof n=="string"&&(d+='[crossorigin="'+n+'"]'),Eg.has(d)||(Eg.add(d),e={rel:e,crossOrigin:n,href:t},r.querySelector(d)===null&&(t=r.createElement("link"),sa(t,"link",e),Ot(t),r.head.appendChild(t)))}}function b0(e){jn.D(e),wg("dns-prefetch",e,null)}function v0(e,t){jn.C(e,t),wg("preconnect",e,t)}function E0(e,t,n){jn.L(e,t,n);var r=br;if(r&&e&&t){var d='link[rel="preload"][as="'+Ba(t)+'"]';t==="image"&&n&&n.imageSrcSet?(d+='[imagesrcset="'+Ba(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(d+='[imagesizes="'+Ba(n.imageSizes)+'"]')):d+='[href="'+Ba(e)+'"]';var u=d;switch(t){case"style":u=vr(e);break;case"script":u=Er(e)}Ha.has(u)||(e=m({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Ha.set(u,e),r.querySelector(d)!==null||t==="style"&&r.querySelector(yo(u))||t==="script"&&r.querySelector(bo(u))||(t=r.createElement("link"),sa(t,"link",e),Ot(t),r.head.appendChild(t)))}}function w0(e,t){jn.m(e,t);var n=br;if(n&&e){var r=t&&typeof t.as=="string"?t.as:"script",d='link[rel="modulepreload"][as="'+Ba(r)+'"][href="'+Ba(e)+'"]',u=d;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Er(e)}if(!Ha.has(u)&&(e=m({rel:"modulepreload",href:e},t),Ha.set(u,e),n.querySelector(d)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(bo(u)))return}r=n.createElement("link"),sa(r,"link",e),Ot(r),n.head.appendChild(r)}}}function x0(e,t,n){jn.S(e,t,n);var r=br;if(r&&e){var d=Aa(r).hoistableStyles,u=vr(e);t=t||"default";var b=d.get(u);if(!b){var T={loading:0,preload:null};if(b=r.querySelector(yo(u)))T.loading=5;else{e=m({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Ha.get(u))&&Md(e,n);var O=b=r.createElement("link");Ot(O),sa(O,"link",e),O._p=new Promise(function(H,ee){O.onload=H,O.onerror=ee}),O.addEventListener("load",function(){T.loading|=1}),O.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ni(b,t,r)}b={type:"stylesheet",instance:b,count:1,state:T},d.set(u,b)}}}function S0(e,t){jn.X(e,t);var n=br;if(n&&e){var r=Aa(n).hoistableScripts,d=Er(e),u=r.get(d);u||(u=n.querySelector(bo(d)),u||(e=m({src:e,async:!0},t),(t=Ha.get(d))&&$d(e,t),u=n.createElement("script"),Ot(u),sa(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(d,u))}}function T0(e,t){jn.M(e,t);var n=br;if(n&&e){var r=Aa(n).hoistableScripts,d=Er(e),u=r.get(d);u||(u=n.querySelector(bo(d)),u||(e=m({src:e,async:!0,type:"module"},t),(t=Ha.get(d))&&$d(e,t),u=n.createElement("script"),Ot(u),sa(u,"link",e),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(d,u))}}function xg(e,t,n,r){var d=(d=be.current)?ai(d):null;if(!d)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=vr(n.href),n=Aa(d).hoistableStyles,r=n.get(t),r||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=vr(n.href);var u=Aa(d).hoistableStyles,b=u.get(e);if(b||(d=d.ownerDocument||d,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,b),(u=d.querySelector(yo(e)))&&!u._p&&(b.instance=u,b.state.loading=5),Ha.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ha.set(e,n),u||A0(d,e,n,b.state))),t&&r===null)throw Error(l(528,""));return b}if(t&&r!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Er(n),n=Aa(d).hoistableScripts,r=n.get(t),r||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function vr(e){return'href="'+Ba(e)+'"'}function yo(e){return'link[rel="stylesheet"]['+e+"]"}function Sg(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function A0(e,t,n,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),sa(t,"link",n),Ot(t),e.head.appendChild(t))}function Er(e){return'[src="'+Ba(e)+'"]'}function bo(e){return"script[async]"+e}function Tg(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Ba(n.href)+'"]');if(r)return t.instance=r,Ot(r),r;var d=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Ot(r),sa(r,"style",d),ni(r,n.precedence,e),t.instance=r;case"stylesheet":d=vr(n.href);var u=e.querySelector(yo(d));if(u)return t.state.loading|=4,t.instance=u,Ot(u),u;r=Sg(n),(d=Ha.get(d))&&Md(r,d),u=(e.ownerDocument||e).createElement("link"),Ot(u);var b=u;return b._p=new Promise(function(T,O){b.onload=T,b.onerror=O}),sa(u,"link",r),t.state.loading|=4,ni(u,n.precedence,e),t.instance=u;case"script":return u=Er(n.src),(d=e.querySelector(bo(u)))?(t.instance=d,Ot(d),d):(r=n,(d=Ha.get(u))&&(r=m({},n),$d(r,d)),e=e.ownerDocument||e,d=e.createElement("script"),Ot(d),sa(d,"link",r),e.head.appendChild(d),t.instance=d);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,ni(r,n.precedence,e));return t.instance}function ni(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=r.length?r[r.length-1]:null,u=d,b=0;b<r.length;b++){var T=r[b];if(T.dataset.precedence===t)u=T;else if(u!==d)break}u?u.parentNode.insertBefore(e,u.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Md(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function $d(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var si=null;function Ag(e,t,n){if(si===null){var r=new Map,d=si=new Map;d.set(n,r)}else d=si,r=d.get(n),r||(r=new Map,d.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),d=0;d<n.length;d++){var u=n[d];if(!(u[Ne]||u[pe]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var b=u.getAttribute(t)||"";b=e+b;var T=r.get(b);T?T.push(u):r.set(b,[u])}}return r}function Dg(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function D0(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Cg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var vo=null;function C0(){}function N0(e,t,n){if(vo===null)throw Error(l(475));var r=vo;if(t.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var d=vr(n.href),u=e.querySelector(yo(d));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=ri.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=u,Ot(u);return}u=e.ownerDocument||e,n=Sg(n),(d=Ha.get(d))&&Md(n,d),u=u.createElement("link"),Ot(u);var b=u;b._p=new Promise(function(T,O){b.onload=T,b.onerror=O}),sa(u,"link",n),t.instance=u}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=ri.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function k0(){if(vo===null)throw Error(l(475));var e=vo;return e.stylesheets&&e.count===0&&Ud(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&Ud(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}function ri(){if(this.count--,this.count===0){if(this.stylesheets)Ud(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oi=null;function Ud(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oi=new Map,t.forEach(R0,e),oi=null,ri.call(e))}function R0(e,t){if(!(t.state.loading&4)){var n=oi.get(e);if(n)var r=n.get(null);else{n=new Map,oi.set(e,n);for(var d=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<d.length;u++){var b=d[u];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(n.set(b.dataset.precedence,b),r=b)}r&&n.set(null,r)}d=t.instance,b=d.getAttribute("data-precedence"),u=n.get(b)||r,u===r&&n.set(null,d),n.set(b,d),this.count++,r=ri.bind(this),d.addEventListener("load",r),d.addEventListener("error",r),u?u.parentNode.insertBefore(d,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(d,e.firstChild)),t.state.loading|=4}}var Eo={$$typeof:k,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function j0(e,t,n,r,d,u,b,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ht(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ht(0),this.hiddenUpdates=ht(null),this.identifierPrefix=r,this.onUncaughtError=d,this.onCaughtError=u,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Ng(e,t,n,r,d,u,b,T,O,H,ee,se){return e=new j0(e,t,n,b,T,O,H,se),t=1,u===!0&&(t|=24),u=ka(3,null,null,t),e.current=u,u.stateNode=e,t=wc(),t.refCount++,e.pooledCache=t,t.refCount++,u.memoizedState={element:r,isDehydrated:n,cache:t},Ac(u),e}function kg(e){return e?(e=Zs,e):Zs}function Rg(e,t,n,r,d,u){d=kg(d),r.context===null?r.context=d:r.pendingContext=d,r=Bn(t),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Fn(e,r,t),n!==null&&(_a(n,e,t),Kr(n,e,t))}function jg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Bd(e,t){jg(e,t),(e=e.alternate)&&jg(e,t)}function Lg(e){if(e.tag===13){var t=Ws(e,67108864);t!==null&&_a(t,e,67108864),Bd(e,67108864)}}var li=!0;function L0(e,t,n,r){var d=V.T;V.T=null;var u=re.p;try{re.p=2,Fd(e,t,n,r)}finally{re.p=u,V.T=d}}function O0(e,t,n,r){var d=V.T;V.T=null;var u=re.p;try{re.p=8,Fd(e,t,n,r)}finally{re.p=u,V.T=d}}function Fd(e,t,n,r){if(li){var d=zd(r);if(d===null)kd(e,t,r,ii,n),_g(e,r);else if(P0(d,e,t,n,r))r.stopPropagation();else if(_g(e,r),t&4&&-1<_0.indexOf(e)){for(;d!==null;){var u=St(d);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var b=Bt(u.pendingLanes);if(b!==0){var T=u;for(T.pendingLanes|=2,T.entangledLanes|=2;b;){var O=1<<31-st(b);T.entanglements[1]|=O,b&=~O}ln(u),(rt&6)===0&&(Vl=fe()+500,po(0))}}break;case 13:T=Ws(u,2),T!==null&&_a(T,u,2),Gl(),Bd(u,2)}if(u=zd(r),u===null&&kd(e,t,r,ii,n),u===d)break;d=u}d!==null&&r.stopPropagation()}else kd(e,t,r,null,n)}}function zd(e){return e=Hi(e),Yd(e)}var ii=null;function Yd(e){if(ii=null,e=Ue(e),e!==null){var t=p(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ii=e,null}function Og(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(B()){case de:return 2;case Re:return 8;case ge:case qe:return 32;case Fe:return 268435456;default:return 32}default:return 32}}var Vd=!1,ts=null,as=null,ns=null,wo=new Map,xo=new Map,ss=[],_0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(e,t){switch(e){case"focusin":case"focusout":ts=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":ns=null;break;case"pointerover":case"pointerout":wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(t.pointerId)}}function So(e,t,n,r,d,u){return e===null||e.nativeEvent!==u?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[d]},t!==null&&(t=St(t),t!==null&&Lg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function P0(e,t,n,r,d){switch(t){case"focusin":return ts=So(ts,e,t,n,r,d),!0;case"dragenter":return as=So(as,e,t,n,r,d),!0;case"mouseover":return ns=So(ns,e,t,n,r,d),!0;case"pointerover":var u=d.pointerId;return wo.set(u,So(wo.get(u)||null,e,t,n,r,d)),!0;case"gotpointercapture":return u=d.pointerId,xo.set(u,So(xo.get(u)||null,e,t,n,r,d)),!0}return!1}function Pg(e){var t=Ue(e.target);if(t!==null){var n=p(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Jt(e.priority,function(){if(n.tag===13){var r=Oa();r=qn(r);var d=Ws(n,r);d!==null&&_a(d,n,r),Bd(n,r)}});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ci(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=zd(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gi=r,n.target.dispatchEvent(r),Gi=null}else return t=St(n),t!==null&&Lg(t),e.blockedOn=n,!1;t.shift()}return!0}function qg(e,t,n){ci(e)&&n.delete(t)}function q0(){Vd=!1,ts!==null&&ci(ts)&&(ts=null),as!==null&&ci(as)&&(as=null),ns!==null&&ci(ns)&&(ns=null),wo.forEach(qg),xo.forEach(qg)}function di(e,t){e.blockedOn===t&&(e.blockedOn=null,Vd||(Vd=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,q0)))}var ui=null;function Ig(e){ui!==e&&(ui=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){ui===e&&(ui=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],d=e[t+2];if(typeof r!="function"){if(Yd(r||n)===null)continue;break}var u=St(n);u!==null&&(e.splice(t,3),t-=3,Yc(u,{pending:!0,data:d,method:n.method,action:r},r,d))}}))}function To(e){function t(O){return di(O,e)}ts!==null&&di(ts,e),as!==null&&di(as,e),ns!==null&&di(ns,e),wo.forEach(t),xo.forEach(t);for(var n=0;n<ss.length;n++){var r=ss[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<ss.length&&(n=ss[0],n.blockedOn===null);)Pg(n),n.blockedOn===null&&ss.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var d=n[r],u=n[r+1],b=d[Ee]||null;if(typeof u=="function")b||Ig(n);else if(b){var T=null;if(u&&u.hasAttribute("formAction")){if(d=u,b=u[Ee]||null)T=b.formAction;else if(Yd(d)!==null)continue}else T=b.action;typeof T=="function"?n[r+1]=T:(n.splice(r,3),r-=3),Ig(n)}}}function Xd(e){this._internalRoot=e}fi.prototype.render=Xd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,r=Oa();Rg(n,r,e,t,null,null)},fi.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Rg(e.current,2,null,e,null,null),Gl(),t[N]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=ha();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ss.length&&t!==0&&t<ss[n].priority;n++);ss.splice(n,0,e),n===0&&Pg(e)}};var Mg=s.version;if(Mg!=="19.1.4")throw Error(l(527,Mg,"19.1.4"));re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=y(t),e=e!==null?f(e):null,e=e===null?null:e.stateNode,e};var I0={bundleType:0,version:"19.1.4",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pi.isDisabled&&pi.supportsFiber)try{Qt=pi.inject(I0),xe=pi}catch{}}return Do.createRoot=function(e,t){if(!i(e))throw Error(l(299));var n=!1,r="",d=eh,u=th,b=ah,T=null;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(d=t.onUncaughtError),t.onCaughtError!==void 0&&(u=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(T=t.unstable_transitionCallbacks)),t=Ng(e,1,!1,null,null,n,r,d,u,b,T,null),e[N]=t.current,Nd(e),new Xd(t)},Do.hydrateRoot=function(e,t,n){if(!i(e))throw Error(l(299));var r=!1,d="",u=eh,b=th,T=ah,O=null,H=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(d=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(b=n.onCaughtError),n.onRecoverableError!==void 0&&(T=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(O=n.unstable_transitionCallbacks),n.formState!==void 0&&(H=n.formState)),t=Ng(e,1,!0,t,n??null,r,d,u,b,T,O,H),t.context=kg(null),n=t.current,r=Oa(),r=qn(r),d=Bn(r),d.callback=null,Fn(n,d,r),n=r,t.current.lanes=n,$a(t,n),ln(t),e[N]=t.current,Nd(e),new fi(t)},Do.version="19.1.4",Do}var Hg;function H0(){if(Hg)return Hd.exports;Hg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(s){console.error(s)}}return a(),Hd.exports=G0(),Hd.exports}var Xu=H0();const K0=Ho(Xu),W0=Oi({__proto__:null,default:K0},[Xu]);var q=_i();const J=Ho(q),uy=Oi({__proto__:null,default:J},[q]);const Z0=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Q0=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,o,l)=>l?l.toUpperCase():o.toLowerCase()),Kg=a=>{const s=Q0(a);return s.charAt(0).toUpperCase()+s.slice(1)},fy=(...a)=>a.filter((s,o,l)=>!!s&&s.trim()!==""&&l.indexOf(s)===o).join(" ").trim(),J0=a=>{for(const s in a)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};var eE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const tE=q.forwardRef(({color:a="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:i="",children:p,iconNode:g,...h},y)=>q.createElement("svg",{ref:y,...eE,width:s,height:s,stroke:a,strokeWidth:l?Number(o)*24/Number(s):o,className:fy("lucide",i),...!p&&!J0(h)&&{"aria-hidden":"true"},...h},[...g.map(([f,m])=>q.createElement(f,m)),...Array.isArray(p)?p:[p]]));const Xe=(a,s)=>{const o=q.forwardRef(({className:l,...i},p)=>q.createElement(tE,{ref:p,iconNode:s,className:fy(`lucide-${Z0(Kg(a))}`,`lucide-${a}`,l),...i}));return o.displayName=Kg(a),o};const aE=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],py=Xe("archive",aE);const nE=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],sE=Xe("arrow-down",nE);const rE=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],hy=Xe("arrow-left",rE);const oE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],lE=Xe("arrow-right",oE);const iE=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],cE=Xe("arrow-up",iE);const dE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ar=Xe("check",dE);const uE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ds=Xe("chevron-down",uE);const fE=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],gy=Xe("chevron-left",fE);const pE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Gu=Xe("chevron-right",pE);const hE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Wg=Xe("circle-check",hE);const gE=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],mE=Xe("clipboard-check",gE);const yE=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Hu=Xe("database",yE);const bE=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],qs=Xe("download",bE);const vE=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],EE=Xe("eye",vE);const wE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],xE=Xe("file-check-2",wE);const SE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],TE=Xe("file-code-2",SE);const AE=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],Zg=Xe("file-plus-2",AE);const DE=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],CE=Xe("file-search",DE);const NE=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],us=Xe("file-text",NE);const kE=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],vu=Xe("folder",kE);const RE=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],jE=Xe("funnel",RE);const LE=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],OE=Xe("git-branch",LE);const _E=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],fs=Xe("hard-drive",_E);const PE=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Lo=Xe("layers",PE);const qE=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Ia=Xe("loader-circle",qE);const IE=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],ME=Xe("monitor",IE);const $E=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Bo=Xe("plus",$E);const UE=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],BE=Xe("refresh-cw",UE);const FE=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Qg=Xe("save",FE);const zE=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Fo=Xe("search",zE);const YE=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],VE=Xe("settings-2",YE);const XE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Eu=Xe("shield-check",XE);const GE=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],wu=Xe("sliders-horizontal",GE);const HE=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ai=Xe("trash-2",HE);const KE=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ps=Xe("triangle-alert",KE);const WE=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Cr=Xe("upload",WE);const ZE=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],QE=Xe("wrench",ZE);const JE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Jg=Xe("x",JE);function ew(a,s){if(a instanceof RegExp)return{keys:!1,pattern:a};var o,l,i,p,g=[],h="",y=a.split("/");for(y[0]||y.shift();i=y.shift();)o=i[0],o==="*"?(g.push(o),h+=i[1]==="?"?"(?:/(.*))?":"/(.*)"):o===":"?(l=i.indexOf("?",1),p=i.indexOf(".",1),g.push(i.substring(1,~l?l:~p?p:i.length)),h+=~l&&!~p?"(?:/([^/]+?))?":"/([^/]+?)",~p&&(h+=(~l?"?":"")+"\\"+i.substring(p))):h+="/"+i;return{keys:g,pattern:new RegExp("^"+h+(s?"(?=$|/)":"/?$"),"i")}}var Jd={exports:{}},eu={};var em;function tw(){if(em)return eu;em=1;var a=_i();function s(v,E){return v===E&&(v!==0||1/v===1/E)||v!==v&&E!==E}var o=typeof Object.is=="function"?Object.is:s,l=a.useState,i=a.useEffect,p=a.useLayoutEffect,g=a.useDebugValue;function h(v,E){var S=E(),R=l({inst:{value:S,getSnapshot:E}}),D=R[0].inst,C=R[1];return p(function(){D.value=S,D.getSnapshot=E,y(D)&&C({inst:D})},[v,S,E]),i(function(){return y(D)&&C({inst:D}),v(function(){y(D)&&C({inst:D})})},[v]),g(S),S}function y(v){var E=v.getSnapshot;v=v.value;try{var S=E();return!o(v,S)}catch{return!0}}function f(v,E){return E()}var m=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?f:h;return eu.useSyncExternalStore=a.useSyncExternalStore!==void 0?a.useSyncExternalStore:m,eu}var tm;function aw(){return tm||(tm=1,Jd.exports=tw()),Jd.exports}var nw=aw();const sw=uy.useInsertionEffect,rw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",my=rw?q.useLayoutEffect:q.useEffect,ow=sw||my,Ku=a=>{const s=q.useRef([a,(...o)=>s[0](...o)]).current;return ow(()=>{s[0]=a}),s[1]},am=["popstate","pushState","replaceState","hashchange"];let Oo=[];const nm=()=>Oo.forEach(a=>a()),lw=a=>(Oo.push(a)===1&&am.forEach(s=>addEventListener(s,nm)),()=>{Oo=Oo.filter(s=>s!==a),Oo.length||am.forEach(s=>removeEventListener(s,nm))}),yy=(a,s)=>nw.useSyncExternalStore(lw,a,s),sm=()=>location.search,iw=({ssrSearch:a}={})=>yy(sm,a!=null?()=>a:sm),rm=()=>location.pathname,cw=({ssrPath:a}={})=>yy(rm,a!=null?()=>a:rm),dw=(a,{replace:s=!1,state:o=null}={})=>history[s?"replaceState":"pushState"](o,"",a),uw=a=>[cw(a),dw],om=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[om]>"u"){for(const a of["pushState","replaceState"]){const s=history[a];history[a]=function(){const o=s.apply(this,arguments),l=new Event(a);return l.arguments=arguments,dispatchEvent(l),o}}Object.defineProperty(window,om,{value:!0})}const by=(a="")=>a==="/"?"":a,fw=(a,s)=>a[0]==="~"?a.slice(1):by(s)+a,pw=(a,s)=>(a=lm(by(a)),s=lm(s),!a||(s.toLowerCase()+"/").startsWith(a.toLowerCase()+"/")?s.slice(a.length)||"/":"~"+s),lm=a=>{try{return a.includes("%")?decodeURI(a):a}catch{return a}},vy={hook:uw,searchHook:iw,parser:ew,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:a=>a,aroundNav:(a,s,o)=>a(s,o)},Ey=q.createContext(vy),Pi=()=>q.useContext(Ey),hw={};q.createContext(hw);const Wu=a=>{const[s,o]=a.hook(a);return[pw(a.base,s),Ku((l,i)=>a.aroundNav(o,fw(l,a.base),i))]},wy=()=>Wu(Pi()),gw=({children:a,...s})=>{const o=Pi(),l=s.hook?vy:o;let i=l;if(s.ssrPath){const[y,f=s.ssrSearch??""]=s.ssrPath.split("?");y&&(s.ssrSearch=f,s.ssrPath=y)}s.hrefs=s.hrefs??s.hook?.hrefs,s.searchHook=s.searchHook??s.hook?.searchHook;let p=q.useRef(l),g=p.current,h=g;for(let y in l){const f=y==="base"?l[y]+(s[y]??""):s[y]??l[y];f!==h[y]&&(g===h&&(p.current=h={...h}),h[y]=f),(f!==l[y]||f!==i[y])&&(i=h)}return q.createElement(Ey.Provider,{value:i},a)},oa=q.forwardRef((a,s)=>{const o=Pi(),[l,i]=Wu(o),{to:p="",href:g=p,onClick:h,asChild:y,children:f,className:m,replace:v,state:E,transition:S,...R}=a;return R.onClick=Ku(D=>{D.ctrlKey||D.metaKey||D.altKey||D.shiftKey||D.button!==0||(h?.(D),D.defaultPrevented||(D.preventDefault(),i(g,a)))}),R.href=o.hrefs(g[0]==="~"?g.slice(1):o.base+g,o),m!==void 0&&(R.className=m?.call?m(l===g):m),s&&(R.ref=s),y&&q.isValidElement(f)?q.cloneElement(f,R):q.createElement("a",R,f)}),mw=a=>{const{to:s,href:o=s}=a,l=Pi(),[,i]=Wu(l),p=Ku(()=>i(s||o,a)),{ssrContext:g}=l;return my(()=>{p()},[]),g&&(g.redirectTo=s),null},xy=`To use an existing Clerk app, run:
npx clerk@latest link
npx clerk@latest env pull

For production keys, run:
npx clerk@latest env pull --instance prod`,Sy="Or copy keys from https://dashboard.clerk.com/~/api-keys into your .env file.",im=`To create a new Clerk app, run:
npx clerk@latest init

'npx clerk@latest init' does not need a Clerk account and writes temporary dev keys.

${xy}

${Sy}`,yw=`${xy}

${Sy}`,bw=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:`The publishableKey passed to Clerk is invalid (key={{key}}, expected format: pk_test_... or pk_live_...).

${im}`,MissingPublishableKeyErrorMessage:`Clerk keys are missing from your environment.

${im}`,MissingSecretKeyErrorMessage:`Missing secretKey.

${yw}`,MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function Ty({packageName:a,customMessages:s}){let o=a;function l(p,g){if(!g)return`${o}: ${p}`;let h=p;const y=p.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const f of y){const m=(g[f[1]]||"").toString();h=h.replace(`{{${f[1]}}}`,m)}return`${o}: ${h}`}const i={...bw,...s};return{setPackageName({packageName:p}){return typeof p=="string"&&(o=p),this},setMessages({customMessages:p}){return Object.assign(i,p||{}),this},throwInvalidPublishableKeyError(p){throw new Error(l(i.InvalidPublishableKeyErrorMessage,p))},throwInvalidProxyUrl(p){throw new Error(l(i.InvalidProxyUrlErrorMessage,p))},throwMissingPublishableKeyError(){throw new Error(l(i.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(l(i.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(p){throw new Error(l(i.MissingClerkProvider,p))},throw(p){throw new Error(l(p))}}}const vw=()=>{try{return!1}catch{}return!1},Ew=()=>{try{return!1}catch{}return!1},ww=()=>{try{return!0}catch{}return!1};var cm=Object.prototype.hasOwnProperty;function dm(a,s,o){for(o of a.keys())if(qo(o,s))return o}function qo(a,s){var o,l,i;if(a===s)return!0;if(a&&s&&(o=a.constructor)===s.constructor){if(o===Date)return a.getTime()===s.getTime();if(o===RegExp)return a.toString()===s.toString();if(o===Array){if((l=a.length)===s.length)for(;l--&&qo(a[l],s[l]););return l===-1}if(o===Set){if(a.size!==s.size)return!1;for(l of a)if(i=l,i&&typeof i=="object"&&(i=dm(s,i),!i)||!s.has(i))return!1;return!0}if(o===Map){if(a.size!==s.size)return!1;for(l of a)if(i=l[0],i&&typeof i=="object"&&(i=dm(s,i),!i)||!qo(l[1],s.get(i)))return!1;return!0}if(o===ArrayBuffer)a=new Uint8Array(a),s=new Uint8Array(s);else if(o===DataView){if((l=a.byteLength)===s.byteLength)for(;l--&&a.getInt8(l)===s.getInt8(l););return l===-1}if(ArrayBuffer.isView(a)){if((l=a.byteLength)===s.byteLength)for(;l--&&a[l]===s[l];);return l===-1}if(!o||typeof a=="object"){l=0;for(o in a)if(cm.call(a,o)&&++l&&!cm.call(s,o)||!(o in s)||!qo(a[o],s[o]))return!1;return Object.keys(s).length===l}}return a!==a&&s!==s}function xw(a,s){if(!a)throw typeof s=="string"?new Error(s):new Error(`${s.displayName} not found`)}const Rr=(a,s)=>{const{assertCtxFn:o=xw}={},l=J.createContext(void 0);return l.displayName=a,[l,()=>{const g=J.useContext(l);return o(g,`${a} not found`),g.value},()=>{const g=J.useContext(l);return g?g.value:{}}]},[Sw,Tw]=Rr("ClerkInstanceContext");Rr("InitialStateContext");J.createContext({});Rr("CheckoutContext");function Aw(a){if(!J.useContext(Sw)){if(typeof a=="function"){a();return}throw new Error(`${a} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}function Dw(a){const s=function(){};let o;return o=new Proxy(s,{get(l,i){if(i!=="then")return i==="toString"?()=>`[${a}]`:i===Symbol.toPrimitive?()=>0:o},apply(){return o},construct(){return o},has(){return!1},set(){return!1}}),o}Dw("ClerkMockQueryClient");typeof window<"u"?J.useLayoutEffect:J.useEffect;const um=qo,Cw=a=>{const s=q.useRef(a);return q.useEffect(()=>{s.current=a},[a]),s.current},Pa=(a,s,o)=>{const l=!!o,i=q.useRef(o);q.useEffect(()=>{i.current=o},[o]),q.useEffect(()=>{if(!l||!a)return()=>{};const p=(...g)=>{i.current&&i.current(...g)};return a.on(s,p),()=>{a.off(s,p)}},[l,s,a,i])},Ay=J.createContext(null);Ay.displayName="ElementsContext";const Nw=(a,s)=>{if(!a)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${s} in an <Elements> provider.`);return a},Di=a=>a!==null&&typeof a=="object",kw=(a,s,o)=>Di(a)?Object.keys(a).reduce((l,i)=>{const p=!Di(s)||!Dy(a[i],s[i]);return o.includes(i)?(p&&console.warn(`Unsupported prop change: options.${i} is not a mutable property.`),l):p?{...l||{},[i]:a[i]}:l},null):null,fm="[object Object]",Dy=(a,s)=>{if(!Di(a)||!Di(s))return a===s;const o=Array.isArray(a);if(o!==Array.isArray(s))return!1;const l=Object.prototype.toString.call(a)===fm;if(l!==(Object.prototype.toString.call(s)===fm))return!1;if(!l&&!o)return a===s;const i=Object.keys(a),p=Object.keys(s);if(i.length!==p.length)return!1;const g={};for(let v=0;v<i.length;v+=1)g[i[v]]=!0;for(let v=0;v<p.length;v+=1)g[p[v]]=!0;const h=Object.keys(g);if(h.length!==i.length)return!1;const y=a,f=s,m=v=>Dy(y[v],f[v]);return h.every(m)},pm=a=>Nw(J.useContext(Ay),a),Rw=a=>a.charAt(0).toUpperCase()+a.slice(1),jw=(a,s)=>{const o=`${Rw(a)}Element`,p=s?g=>{pm(`mounts <${o}>`);const{id:h,className:y}=g;return J.createElement("div",{id:h,className:y})}:({id:g,className:h,fallback:y,options:f={},onBlur:m,onFocus:v,onReady:E,onChange:S,onEscape:R,onClick:D,onLoadError:C,onLoaderStart:w,onNetworksChange:A,onConfirm:k,onCancel:M,onShippingAddressChange:x,onShippingRateChange:j})=>{const L=pm(`mounts <${o}>`),P="elements"in L?L.elements:null,[K,ue]=J.useState(null),ne=J.useRef(null),le=J.useRef(null),[ve,me]=q.useState(!1);Pa(K,"blur",m),Pa(K,"focus",v),Pa(K,"escape",R),Pa(K,"click",D),Pa(K,"loaderror",C),Pa(K,"loaderstart",w),Pa(K,"networkschange",A),Pa(K,"confirm",k),Pa(K,"cancel",M),Pa(K,"shippingaddresschange",x),Pa(K,"shippingratechange",j),Pa(K,"change",S);let ce;E&&(ce=()=>{me(!0),E(K)}),Pa(K,"ready",ce),J.useLayoutEffect(()=>{if(ne.current===null&&le.current!==null&&P){let re=null;P&&(re=P.create(a,f)),ne.current=re,ue(re),re&&re.mount(le.current)}},[P,f]);const V=Cw(f);return J.useEffect(()=>{if(!ne.current)return;const re=kw(f,V,["paymentRequest"]);re&&"update"in ne.current&&ne.current.update(re)},[f,V]),J.useLayoutEffect(()=>()=>{if(ne.current&&typeof ne.current.destroy=="function")try{ne.current.destroy(),ne.current=null}catch{}},[]),J.createElement(J.Fragment,null,!ve&&y,J.createElement("div",{id:g,style:{height:ve?"unset":"0px",visibility:ve?"visible":"hidden"},className:h,ref:le}))};return p.displayName=o,p.__elementType=a,p};jw("payment",typeof window>"u");Rr("PaymentElementContext");Rr("StripeUtilsContext");const[DT,,Lw]=Rr("PortalProvider"),Ow=()=>{const a=Lw();return a&&"getContainer"in a&&a.getContainer?a.getContainer:()=>null},Zu=Ty({packageName:"@clerk/react"});function _w(a){Zu.setMessages(a).setPackageName(a)}const Pw=Tw,qw=a=>{Aw(()=>{Zu.throwMissingClerkProviderError({source:a})})};var qi=dy();const Iw=Ho(qi),Mw=Oi({__proto__:null,default:Iw},[qi]),ba=a=>{vw()&&console.error(`Clerk: ${a}`)},hm=(a,...s)=>{const o={...a};for(const l of s)delete o[l];return o},$w=a=>`You've passed multiple children components to <${a}/>. You can only pass a single child component or text.`,Uw="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Bw="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",Fw="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",zw="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",Yw=a=>`<${a} /> can only accept <${a}.Page /> and <${a}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,Vw=a=>`Missing props. <${a}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,Xw=a=>`Missing props. <${a}.Link /> component requires the following props: url, label and labelIcon.`,Gw="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Hw="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Kw="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",Ww="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",Zw="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",Qw="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",Jw="Missing props. <UserButton.Action /> component requires the following props: label.",Ko=a=>s=>{try{return J.Children.only(a)}catch{const o=J.Children.toArray(a);return o.length===1&&J.isValidElement(o[0])?o[0]:Zu.throw($w(s))}},Wo=(a,s)=>(a||(a=s),typeof a=="string"&&(a=J.createElement("button",null,a)),a),Zo=a=>(...s)=>{if(a&&typeof a=="function")return a(...s)},Io=a=>{const[s,o]=q.useState(new Map),l=q.useRef(s),i=q.useRef(new Map),p=q.useRef(new Map);l.current=s,i.current=new Map(a.map(h=>[h.id,h.component]));const g=new Set(a.map(h=>h.id));return p.current.forEach((h,y)=>{g.has(y)||p.current.delete(y)}),a.map(h=>{const y=h.id,f=p.current.get(y);if(f)return f;const m=()=>{const E=l.current.get(y),S=i.current.get(y);return E?qi.createPortal(S,E):null},v={id:h.id,mount:E=>o(S=>new Map(S).set(y,E)),unmount:()=>o(E=>{const S=new Map(E);return S.set(y,null),S}),portal:m};return p.current.set(y,v),v})},ma=(a,s)=>!!a&&J.isValidElement(a)&&a?.type===s,Cy=(a,s)=>Ry({children:a,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:Jo,PageComponent:Qo,MenuItemsComponent:Mi,componentName:"UserProfile"},s),Ny=(a,s)=>Ry({children:a,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:Ui,PageComponent:$i,componentName:"OrganizationProfile"},s),ky=a=>{const s=[],o=[Ui,$i,Mi,Qo,Jo];return J.Children.forEach(a,l=>{o.some(i=>ma(l,i))||s.push(l)}),s},Ry=(a,s)=>{const{children:o,LinkComponent:l,PageComponent:i,MenuItemsComponent:p,reorderItemsLabels:g,componentName:h}=a,{allowForAnyChildren:y=!1}=s||{},f=[],m=new Map;J.Children.forEach(o,k=>{if(!ma(k,i)&&!ma(k,l)&&!ma(k,p)){k&&!y&&ba(Yw(h));return}const{props:M}=k,{children:x,label:j,url:L,labelIcon:P}=M,K=k.key;if(ma(k,i))if(mm(M,g))f.push({label:j});else if(tu(M))f.push({label:j,labelIcon:P,children:x,url:L,portalId:gm("page",M,K,m)});else{ba(Vw(h));return}if(ma(k,l))if(au(M))f.push({label:j,labelIcon:P,url:L,portalId:gm("link",M,K,m)});else{ba(Xw(h));return}});const v=[],E=[],S=[];f.forEach((k,M)=>{if(tu(k)){v.push({component:k.children,id:k.portalId||M}),E.push({component:k.labelIcon,id:k.portalId||M});return}au(k)&&S.push({component:k.labelIcon,id:k.portalId||M})});const R=Io(v),D=Io(E),C=Io(S),w=[],A=[];return f.forEach((k,M)=>{if(mm(k,g)){w.push({label:k.label});return}if(tu(k)){const{portal:x,mount:j,unmount:L}=R.find(ne=>ne.id===(k.portalId||M)),{portal:P,mount:K,unmount:ue}=D.find(ne=>ne.id===(k.portalId||M));w.push({label:k.label,url:k.url,mount:j,unmount:L,mountIcon:K,unmountIcon:ue}),A.push({key:`content:${k.portalId||M}`,portal:x}),A.push({key:`label:${k.portalId||M}`,portal:P});return}if(au(k)){const{portal:x,mount:j,unmount:L}=C.find(P=>P.id===(k.portalId||M));w.push({label:k.label,url:k.url,mountIcon:j,unmountIcon:L}),A.push({key:`label:${k.portalId||M}`,portal:x});return}}),{customPages:w,customPagesPortals:A}},gm=(a,s,o,l)=>{if(o!=null)return`${a}:key:${o}`;const i=`${a}:${s.label}:${s.url}`,p=l.get(i)??0;return l.set(i,p+1),`${i}:${p}`},mm=(a,s)=>{const{children:o,label:l,url:i,labelIcon:p}=a;return!o&&!i&&!p&&s.some(g=>g===l)},tu=a=>{const{children:s,label:o,url:l,labelIcon:i}=a;return!!s&&!!l&&!!i&&!!o},au=a=>{const{children:s,label:o,url:l,labelIcon:i}=a;return!s&&!!l&&!!i&&!!o},e1=(a,s)=>t1({children:a,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:Mi,MenuActionComponent:Ly,MenuLinkComponent:Oy,UserProfileLinkComponent:Jo,UserProfilePageComponent:Qo,allowForAnyChildren:s?.allowForAnyChildren??!1}),t1=({children:a,MenuItemsComponent:s,MenuActionComponent:o,MenuLinkComponent:l,UserProfileLinkComponent:i,UserProfilePageComponent:p,reorderItemsLabels:g,allowForAnyChildren:h=!1})=>{const y=[],f=[],m=[],v=new Map;J.Children.forEach(a,C=>{if(!ma(C,s)&&!ma(C,i)&&!ma(C,p)){C&&!h&&ba(Gw);return}if(ma(C,i)||ma(C,p))return;const{props:w}=C;J.Children.forEach(w.children,A=>{if(!ma(A,o)&&!ma(A,l)){A&&ba(Hw);return}const{props:k}=A,M=A.key,{label:x,labelIcon:j,href:L,onClick:P,open:K}=k;if(ma(A,o))if(ym(k,g))y.push({label:x});else if(su(k)){const ue={label:x,labelIcon:j};if(P!==void 0)y.push({...ue,onClick:P,portalId:nu("action",k,M,v)});else if(K!==void 0)y.push({...ue,open:K.startsWith("/")?K:`/${K}`,portalId:nu("action",k,M,v)});else{ba("Custom menu item must have either onClick or open property");return}}else{ba(Jw);return}if(ma(A,l))if(ru(k))y.push({label:x,labelIcon:j,href:L,portalId:nu("link",k,M,v)});else{ba(Qw);return}})});const E=[],S=[];y.forEach((C,w)=>{su(C)&&E.push({component:C.labelIcon,id:C.portalId||w}),ru(C)&&S.push({component:C.labelIcon,id:C.portalId||w})});const R=Io(E),D=Io(S);return y.forEach((C,w)=>{if(ym(C,g)&&f.push({label:C.label}),su(C)){const{portal:A,mount:k,unmount:M}=R.find(j=>j.id===(C.portalId||w)),x={label:C.label,mountIcon:k,unmountIcon:M};"onClick"in C?x.onClick=C.onClick:"open"in C&&(x.open=C.open),f.push(x),m.push({key:`icon:${C.portalId||w}`,portal:A})}if(ru(C)){const{portal:A,mount:k,unmount:M}=D.find(x=>x.id===(C.portalId||w));f.push({label:C.label,href:C.href,mountIcon:k,unmountIcon:M}),m.push({key:`icon:${C.portalId||w}`,portal:A})}}),{customMenuItems:f,customMenuItemsPortals:m}},nu=(a,s,o,l)=>{if(o!=null)return`${a}:key:${o}`;const i=s.href||s.open||"",p=`${a}:${s.label}:${i}`,g=l.get(p)??0;return l.set(p,g+1),`${p}:${g}`},ym=(a,s)=>{const{children:o,label:l,onClick:i,labelIcon:p}=a;return!o&&!i&&!p&&s.some(g=>g===l)},su=a=>{const{label:s,labelIcon:o,onClick:l,open:i}=a;return!!o&&!!s&&(typeof l=="function"||typeof i=="string")},ru=a=>{const{label:s,href:o,labelIcon:l}=a;return!!o&&!!l&&!!s},a1=a=>{const s=a?.isReady;return o=>new Promise((l,i)=>{const{root:p=document?.body,selector:g,timeout:h=0}=o;if(!p){i(new Error("No root element provided"));return}let y=p;if(g&&(y=p?.querySelector(g)),s(y,g)){l();return}const f=new MutationObserver(m=>{for(const v of m)if(!y&&g&&(y=p?.querySelector(g)),(a.childList&&v.type==="childList"||a.attributes&&v.type==="attributes")&&s(y,g)){f.disconnect(),l();return}});f.observe(p,a),h>0&&setTimeout(()=>{f.disconnect(),i(new Error(`Timeout waiting for ${g}`))},h)})},n1=a1({childList:!0,subtree:!0,isReady:(a,s)=>!!a?.childElementCount&&a?.matches?.(s)&&a.childElementCount>0});function Zt(a,s){const o=q.useRef(),[l,i]=q.useState("rendering");return q.useEffect(()=>{if(!a)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!o.current){const p=`[data-clerk-component="${a}"]`,g=s?.selector;o.current=n1({selector:g?p+g:p}).then(()=>{i("rendered")}).catch(()=>{i("error")})}},[a,s?.selector]),l}const hi=a=>"mount"in a,bm=a=>"open"in a,vm=a=>a?.map(({mountIcon:s,unmountIcon:o,...l})=>l);var $t=class extends J.PureComponent{constructor(...a){super(...a),this.rootRef=J.createRef()}componentDidUpdate(a){if(!hi(a)||!hi(this.props))return;const s=hm(a.props||{},"customPages","customMenuItems","children"),o=hm(this.props.props||{},"customPages","customMenuItems","children"),l=a.props?.customPages?.length!==this.props.props?.customPages?.length,i=a.props?.customMenuItems?.length!==this.props.props?.customMenuItems?.length,p=vm(a.props?.customMenuItems),g=vm(this.props.props?.customMenuItems);(!um(s,o)||!um(p,g)||l||i)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(hi(this.props)&&this.props.mount(this.rootRef.current,this.props.props),bm(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(hi(this.props)&&this.props.unmount(this.rootRef.current),bm(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:a=!1}=this.props,s={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return J.createElement(J.Fragment,null,!a&&J.createElement("div",s),this.props.children)}};const nt=(a,s)=>{const o=(typeof s=="string"?s:s?.component)||a.displayName||a.name||"Component";a.displayName=o;const l=typeof s=="string"?void 0:s,i=p=>{qw(o||"withClerk");const g=Pw(),h=Ow();return!g.loaded&&!l?.renderWhileLoading?null:J.createElement(a,{getContainer:h,...p,component:o,clerk:g})};return i.displayName=`withClerk(${o})`,i},Ii=a=>J.createElement(J.Fragment,null,a?.customPagesPortals?.map(({key:s,portal:o})=>q.createElement(o,{key:s})),a?.customMenuItemsPortals?.map(({key:s,portal:o})=>q.createElement(o,{key:s})));nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountSignIn,unmount:a.unmountSignIn,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"SignIn",renderWhileLoading:!0});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountSignUp,unmount:a.unmountSignUp,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"SignUp",renderWhileLoading:!0});function Qo({children:a}){return ba(Uw),J.createElement(J.Fragment,null,a)}function Jo({children:a}){return ba(Bw),J.createElement(J.Fragment,null,a)}const s1=nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=Cy(l.children);return J.createElement(J.Fragment,null,i&&o,J.createElement($t,{component:s,mount:a.mountUserProfile,unmount:a.unmountUserProfile,updateProps:a.__internal_updateProps,props:{...l,customPages:g},rootProps:p},J.createElement(Ii,{customPagesPortals:h})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(s1,{Page:Qo,Link:Jo});const jy=q.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),r1=nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=Cy(l.children,{allowForAnyChildren:!!l.__experimental_asProvider}),y={...l.userProfileProps,customPages:g},{customMenuItems:f,customMenuItemsPortals:m}=e1(l.children,{allowForAnyChildren:!!l.__experimental_asProvider}),v=ky(l.children),E={mount:a.mountUserButton,unmount:a.unmountUserButton,updateProps:a.__internal_updateProps,props:{...l,userProfileProps:y,customMenuItems:f}},S={customPagesPortals:h,customMenuItemsPortals:m};return J.createElement(jy.Provider,{value:E},i&&o,a.loaded&&J.createElement($t,{component:s,...E,hideRootHtmlElement:!!l.__experimental_asProvider,rootProps:p},l.__experimental_asProvider?v:null,J.createElement(Ii,S)))},{component:"UserButton",renderWhileLoading:!0});function Mi({children:a}){return ba(Kw),J.createElement(J.Fragment,null,a)}function Ly({children:a}){return ba(Ww),J.createElement(J.Fragment,null,a)}function Oy({children:a}){return ba(Zw),J.createElement(J.Fragment,null,a)}function o1(a){const s=q.useContext(jy),o={...s,props:{...s.props,...a}};return J.createElement($t,o)}Object.assign(r1,{UserProfilePage:Qo,UserProfileLink:Jo,MenuItems:Mi,Action:Ly,Link:Oy,__experimental_Outlet:o1});function $i({children:a}){return ba(Fw),J.createElement(J.Fragment,null,a)}function Ui({children:a}){return ba(zw),J.createElement(J.Fragment,null,a)}const l1=nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=Ny(l.children);return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountOrganizationProfile,unmount:a.unmountOrganizationProfile,updateProps:a.__internal_updateProps,props:{...l,customPages:g},rootProps:p},J.createElement(Ii,{customPagesPortals:h})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(l1,{Page:$i,Link:Ui});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountCreateOrganization,unmount:a.unmountCreateOrganization,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"CreateOrganization",renderWhileLoading:!0});const _y=q.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),i1=nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:g,customPagesPortals:h}=Ny(l.children,{allowForAnyChildren:!!l.__experimental_asProvider}),y={...l.organizationProfileProps,customPages:g},f=ky(l.children),m={mount:a.mountOrganizationSwitcher,unmount:a.unmountOrganizationSwitcher,updateProps:a.__internal_updateProps,props:{...l,organizationProfileProps:y},rootProps:p,component:s};return a.__experimental_prefetchOrganizationSwitcher(),J.createElement(_y.Provider,{value:m},J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{...m,hideRootHtmlElement:!!l.__experimental_asProvider},l.__experimental_asProvider?f:null,J.createElement(Ii,{customPagesPortals:h}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function c1(a){const s=q.useContext(_y),o={...s,props:{...s.props,...a}};return J.createElement($t,o)}Object.assign(i1,{OrganizationProfilePage:$i,OrganizationProfileLink:Ui,__experimental_Outlet:c1});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountOrganizationList,unmount:a.unmountOrganizationList,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"OrganizationList",renderWhileLoading:!0});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,open:a.openGoogleOneTap,close:a.closeGoogleOneTap,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"GoogleOneTap",renderWhileLoading:!0});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountWaitlist,unmount:a.unmountWaitlist,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"Waitlist",renderWhileLoading:!0});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s,{selector:'[data-component-status="ready"]'})==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountPricingTable,unmount:a.unmountPricingTable,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"PricingTable",renderWhileLoading:!0});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountAPIKeys,unmount:a.unmountAPIKeys,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"ApiKeys",renderWhileLoading:!0});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.__internal_mountOAuthConsent,unmount:a.__internal_unmountOAuthConsent,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"OAuthConsent",renderWhileLoading:!0});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.__internal_mountOAuthDeviceVerification,unmount:a.__internal_unmountOAuthDeviceVerification,updateProps:g=>{a.__internal_updateProps(g)},props:l,rootProps:p}))},{component:"OAuthDeviceVerification",renderWhileLoading:!0});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountUserAvatar,unmount:a.unmountUserAvatar,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"UserAvatar",renderWhileLoading:!0});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountTaskChooseOrganization,unmount:a.unmountTaskChooseOrganization,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountTaskResetPassword,unmount:a.unmountTaskResetPassword,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"TaskResetPassword",renderWhileLoading:!0});nt(({clerk:a,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!a.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,a.loaded&&J.createElement($t,{component:s,mount:a.mountTaskSetupMFA,unmount:a.unmountTaskSetupMFA,updateProps:a.__internal_updateProps,props:l,rootProps:p}))},{component:"TaskSetupMFA",renderWhileLoading:!0});const d1=Ty({packageName:"@clerk/shared"});function u1(a){d1.setPackageName({packageName:a})}const Em=new Set,Bi=(a,s,o)=>{const l=Ew()||ww(),i=a;Em.has(i)||l||(Em.add(i),console.warn(`Clerk - DEPRECATION WARNING: "${a}" is deprecated and will be removed in the next major release.
${s}`))};function f1(a){const s=a.match(/^(\d+)\.(\d+)\.(\d+)/);if(!s)return null;const[,o,l,i]=s;return{major:parseInt(o,10),minor:parseInt(l,10),patch:parseInt(i,10)}}function p1(a,s){const{major:o,minor:l,patch:i}=a;return s.some(([p,g,h,y])=>o!==p?!1:h===-1?l>g||l===g&&i>=y:l===h&&i>=y)}function h1(a,s){const o=f1(a);return o?p1(o,s):!1}nt(({clerk:a,...s})=>{const{client:o,session:l}=a,i=(o.signedInSessions?.length??0)>0;return J.useEffect(()=>{l===null&&i?a.redirectToAfterSignOut():a.redirectToSignIn(s)},[]),null},"RedirectToSignIn");nt(({clerk:a,...s})=>(J.useEffect(()=>{a.redirectToSignUp(s)},[]),null),"RedirectToSignUp");nt(({clerk:a,...s})=>(J.useEffect(()=>{a.redirectToTasks(s)},[]),null),"RedirectToTasks");nt(({clerk:a})=>(J.useEffect(()=>{Bi("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),a.redirectToUserProfile()},[]),null),"RedirectToUserProfile");nt(({clerk:a})=>(J.useEffect(()=>{Bi("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),a.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");nt(({clerk:a})=>(J.useEffect(()=>{Bi("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),a.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");nt(({clerk:a,...s})=>(J.useEffect(()=>{a.handleRedirectCallback(s)},[]),null),"AuthenticateWithRedirectCallback");typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);function g1(){try{return h1(J.version,[[18,0,-1,0],[19,0,0,3],[19,1,1,4],[19,2,2,3],[19,3,3,0]])}catch{return!1}}g1();typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);if(globalThis.__clerkSharedModules){const a=globalThis.__clerkSharedModules.react?.version;a&&a!==q.version&&console.warn(`[@clerk/ui/register] React version mismatch detected. Already registered: ${a}, current import: ${q.version}. This may cause issues with the shared @clerk/ui variant.`)}else globalThis.__clerkSharedModules={react:uy,"react-dom":Mw,"react-dom/client":W0,"react/jsx-runtime":F0};nt(({clerk:a,children:s,...o})=>{const{appearance:l,getContainer:i,component:p,...g}=o;s=Wo(s,"Invite members");const h=Ko(s)("InviteMembersButton"),y=()=>a.openInviteMembers({appearance:l,getContainer:i}),m={...g,onClick:async v=>(h&&typeof h=="object"&&"props"in h&&await Zo(h.props.onClick)(v),y())};return J.cloneElement(h,m)},{component:"InviteMembersButton",renderWhileLoading:!0});nt(({clerk:a,children:s,...o})=>{const{appearance:l,getContainer:i,component:p,signUpFallbackRedirectUrl:g,forceRedirectUrl:h,fallbackRedirectUrl:y,signUpForceRedirectUrl:f,mode:m,initialValues:v,withSignUp:E,oauthFlow:S,...R}=o;s=Wo(s,"Sign in");const D=Ko(s)("SignInButton"),C=()=>{const k={forceRedirectUrl:h,fallbackRedirectUrl:y,signUpFallbackRedirectUrl:g,signUpForceRedirectUrl:f,initialValues:v,withSignUp:E,oauthFlow:S};return m==="modal"?a.openSignIn({...k,appearance:l,getContainer:i}):a.redirectToSignIn({...k,signInFallbackRedirectUrl:y,signInForceRedirectUrl:h})},A={...R,onClick:async k=>(D&&typeof D=="object"&&"props"in D&&await Zo(D.props.onClick)(k),C())};return J.cloneElement(D,A)},{component:"SignInButton",renderWhileLoading:!0});nt(({clerk:a,children:s,...o})=>{const{redirectUrl:l,getContainer:i,component:p,...g}=o;s=Wo(s,"Sign in with Metamask");const h=Ko(s)("SignInWithMetamaskButton"),y=async()=>{async function v(){await a.authenticateWithMetamask({redirectUrl:l||void 0})}v()},m={...g,onClick:async v=>(await Zo(h.props.onClick)(v),y())};return J.cloneElement(h,m)},{component:"SignInWithMetamask",renderWhileLoading:!0});nt(({clerk:a,children:s,...o})=>{const{redirectUrl:l="/",sessionId:i,signOutOptions:p,getContainer:g,component:h,...y}=o;p&&Bi("SignOutButton `signOutOptions`","Use the `redirectUrl` and `sessionId` props directly instead."),s=Wo(s,"Sign out");const f=Ko(s)("SignOutButton"),m=()=>a.signOut({redirectUrl:l,...i!==void 0&&{sessionId:i},...p}),E={...y,onClick:async S=>(await Zo(f.props.onClick)(S),m())};return J.cloneElement(f,E)},{component:"SignOutButton",renderWhileLoading:!0});nt(({clerk:a,children:s,...o})=>{const{appearance:l,unsafeMetadata:i,getContainer:p,component:g,fallbackRedirectUrl:h,forceRedirectUrl:y,signInFallbackRedirectUrl:f,signInForceRedirectUrl:m,mode:v,initialValues:E,oauthFlow:S,...R}=o;s=Wo(s,"Sign up");const D=Ko(s)("SignUpButton"),C=()=>{const k={fallbackRedirectUrl:h,forceRedirectUrl:y,signInFallbackRedirectUrl:f,signInForceRedirectUrl:m,initialValues:E,oauthFlow:S};return v==="modal"?a.openSignUp({...k,appearance:l,unsafeMetadata:i,getContainer:p}):a.redirectToSignUp({...k,signUpFallbackRedirectUrl:h,signUpForceRedirectUrl:y})},A={...R,onClick:async k=>(D&&typeof D=="object"&&"props"in D&&await Zo(D.props.onClick)(k),C())};return J.cloneElement(D,A)},{component:"SignUpButton",renderWhileLoading:!0});_w({packageName:"@clerk/react"});u1("@clerk/react");var ou={exports:{}};const jr=a=>({...a,__type:"prebuilt_appearance"}),m1=Object.freeze(Object.defineProperty({__proto__:null,experimental_createTheme:jr},Symbol.toStringTag,{value:"Module"})),y1=cy(m1),Py=jr({name:"dark",variables:{colorBackground:"#212126",colorNeutral:"white",colorPrimary:"#ffffff",colorPrimaryForeground:"black",colorForeground:"white",colorInputForeground:"white",colorInput:"#26262B"},elements:{providerIcon__apple:{filter:"invert(1)"},providerIcon__github:{filter:"invert(1)"},providerIcon__okx_wallet:{filter:"invert(1)"},providerIcon__vercel:{filter:"invert(1)"},activeDeviceIcon:{"--cl-chassis-bottom":"#d2d2d2","--cl-chassis-back":"#e6e6e6","--cl-chassis-screen":"#e6e6e6","--cl-screen":"#111111"}}}),b1=jr({name:"shadesOfPurple",baseTheme:Py,variables:{colorBackground:"#3f3c77",colorPrimary:"#f8d80d",colorPrimaryForeground:"#38375f",colorInputForeground:"#a1fdfe",colorShimmer:"rgba(161,253,254,0.36)"}}),os={boxShadow:"3px 3px 0px #000",border:"2px solid #000","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:active":{boxShadow:"2px 2px 0px #000",transform:"translate(1px)"}},Ls={boxShadow:"3px 3px 0px #000",border:"2px solid #000"},v1=jr({name:"neobrutalism",simpleStyles:!0,variables:{colorPrimary:"#DF1B1B",colorShimmer:"rgba(255,255,255,0.64)",fontWeight:{normal:500,medium:600,bold:700}},elements:{cardBox:{boxShadow:"7px 7px 0px #000",border:"3px solid #000"},card:{borderRadius:"0"},headerSubtitle:{color:"#212126"},alternativeMethodsBlockButton:os,socialButtonsIconButton:{...os},selectButton:{...os,...Ls,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"}},socialButtonsBlockButton:{...os,color:"#212126"},profileSectionPrimaryButton:os,profileSectionItem:{color:"#212126"},avatarImageActionsUpload:os,menuButton:Ls,menuList:Ls,formButtonPrimary:os,navbarButton:os,formFieldAction:{fontWeight:"700"},formFieldInput:{...Ls,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:hover":{...Ls,transform:"scale(1.01)"}},table:Ls,tableHead:{color:"#212126"},dividerLine:{background:"#000"},dividerText:{fontWeight:"700",color:"#212126"},footer:{background:"#fff","& div":{color:"#212126"}},footerActionText:{color:"#212126"},footerActionLink:{fontWeight:"700",borderBottom:"3px solid","&:focus":{boxShadow:"none"}},actionCard:{...Ls},badge:{border:"1px solid #000",background:"#fff",color:"#212126"}}}),E1=jr({name:"shadcn",cssLayerName:"components",variables:{colorBackground:"var(--card)",colorDanger:"var(--destructive)",colorForeground:"var(--card-foreground)",colorInput:"var(--input)",colorInputForeground:"var(--card-foreground)",colorModalBackdrop:"var(--color-black)",colorMuted:"var(--muted)",colorMutedForeground:"var(--muted-foreground)",colorNeutral:"var(--foreground)",colorPrimary:"var(--primary)",colorPrimaryForeground:"var(--primary-foreground)",colorRing:"var(--ring)",fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",semibold:"var(--font-weight-semibold)",bold:"var(--font-weight-semibold)"}},elements:{input:"bg-transparent dark:bg-input/30",cardBox:"shadow-sm border",popoverBox:"shadow-sm border",button:{'&[data-variant="solid"]::after':{display:"none"}},providerIcon__apple:"dark:invert",providerIcon__github:"dark:invert",providerIcon__okx_wallet:"dark:invert",providerIcon__vercel:"dark:invert"}}),w1=jr({name:"simple",simpleStyles:!0}),x1=Object.freeze(Object.defineProperty({__proto__:null,dark:Py,experimental__simple:w1,neobrutalism:v1,shadcn:E1,shadesOfPurple:b1},Symbol.toStringTag,{value:"Module"})),S1=cy(x1);var wm;function T1(){return wm||(wm=1,(function(a){var s=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,p=(f,m,v,E)=>{if(m&&typeof m=="object"||typeof m=="function")for(let S of l(m))!i.call(f,S)&&S!==v&&s(f,S,{get:()=>m[S],enumerable:!(E=o(m,S))||E.enumerable});return f},g=(f,m,v)=>(p(f,m,"default"),v&&p(v,m,"default")),h=f=>p(s({},"__esModule",{value:!0}),f),y={};a.exports=h(y),g(y,y1,a.exports),g(y,S1,a.exports)})(ou)),ou.exports}T1();function xm(a){if(a instanceof Error)return a;if(typeof a=="string")return new Error(a);try{return new Error(JSON.stringify(a))}catch{return new Error(String(a))}}function A1({error:a,resetError:s}){return c.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50 p-6",children:c.jsxs("div",{className:"max-w-lg w-full text-center",children:[c.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Something went wrong"}),c.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"This part of the app hit an error. The rest of the app is still running."}),null,c.jsx("button",{type:"button",onClick:s,className:"mt-4 rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700",children:"Try again"})]})})}class D1 extends q.Component{state={error:null};static getDerivedStateFromError(s){return{error:xm(s)}}componentDidCatch(s,o){console.error("ErrorBoundary caught an error:",xm(s),o.componentStack)}componentDidUpdate(s){this.state.error!==null&&s.resetKey!==this.props.resetKey&&this.resetError()}resetError=()=>{this.setState({error:null})};render(){const{error:s}=this.state;if(s===null)return this.props.children;const o=this.props.FallbackComponent??A1;return c.jsx(o,{error:s,resetError:this.resetError})}}function C1({showLocalChip:a=!0}){const[s,o]=q.useState(""),[,l]=wy(),i=p=>{p.preventDefault(),s&&l(`/workspace/${s}`)};return c.jsxs("main",{className:"chooser-page",children:[c.jsxs("header",{className:"chooser-top",children:[c.jsxs(oa,{href:"/",className:"studio-wordmark","aria-label":"Mapping Studio home","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),a&&c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Browser-local workspace"]})]}),c.jsxs("section",{className:"chooser-content","aria-labelledby":"chooser-title",children:[c.jsxs("div",{className:"chooser-intro",children:[c.jsx("div",{className:"eyebrow",children:"Engineering workspace"}),c.jsx("h1",{id:"chooser-title",children:"Choose a discipline"}),c.jsx("p",{children:"Keep drawing groups organized and traceable on this device."})]}),c.jsxs("form",{className:"discipline-picker",onSubmit:i,"data-testid":"form-discipline-picker",children:[c.jsxs("div",{className:"discipline-field",children:[c.jsx("label",{htmlFor:"discipline-select",children:"Drawing type"}),c.jsxs("div",{className:"discipline-select-control",children:[c.jsxs("select",{id:"discipline-select",value:s,onChange:p=>o(p.target.value),"aria-label":"Drawing type","data-testid":"select-discipline",children:[c.jsx("option",{value:"",disabled:!0,children:"Select PFD or P&ID"}),c.jsx("option",{value:"pfd",children:"PFD — Process Flow Diagram"}),c.jsx("option",{value:"pid",children:"P&ID — Piping and Instrumentation Diagram"})]}),c.jsx(ds,{size:17,"aria-hidden":"true"})]})]}),c.jsxs("button",{className:"btn primary discipline-submit",type:"submit",disabled:!s,"data-testid":"button-open-discipline",children:["Open workspace ",c.jsx(lE,{size:16,"aria-hidden":"true"})]})]}),c.jsxs("div",{className:"chooser-foot",children:[c.jsx(fs,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:"Stored in this browser only."})," Nothing is uploaded or shared."]})]})]}),c.jsxs("footer",{className:"chooser-footer",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:"PDFs and project data stay in this browser"}),c.jsx("span",{children:"© 2026 gaurav.cbiindia"})]})]})}function N1(){return c.jsx("main",{className:"chooser-page not-found",children:c.jsxs("div",{className:"not-found-card",children:[c.jsx("div",{className:"eyebrow",children:"Page not found"}),c.jsx("h1",{children:"This workspace does not exist."}),c.jsx(oa,{href:"/",className:"btn primary","data-testid":"link-not-found-home",children:"Return to disciplines"})]})})}const Qu="pid-mapping-studio:hierarchies:v2",qy="pid-mapping-studio:hierarchies:v1",Ci=80,k1=128,R1=5e3,j1=64;class Mo extends Error{rawValue;constructor(s,o=null){super(s),this.name="HierarchyLoadError",this.rawValue=o}}function xu(){return{version:2,pfd:[],pid:[]}}function Ju(a,s){return Object.keys(a).length===s.length&&s.every(l=>Object.prototype.hasOwnProperty.call(a,l))}function Ni(a,s,o=new Set){let l=0;const i=(p,g)=>{if(g>j1)return!1;for(const h of p){if(!h||typeof h!="object"||Array.isArray(h))return!1;const y=h;if(!Ju(y,s?["id","name","kind","expanded","children"]:["id","name","expanded","children"])||typeof y.id!="string"||y.id.length===0||y.id.length>k1||typeof y.name!="string"||y.name.trim().length===0||y.name!==y.name.trim()||y.name.length>Ci||s&&!["technology","projects","proposals","project","proposal","client","legacy"].includes(String(y.kind))||typeof y.expanded!="boolean"||!Array.isArray(y.children)||o.has(y.id)||(o.add(y.id),l+=1,l>R1||!i(y.children,g+1)))return!1}return!0};return i(a,0)}function _o(a,s){if(a.kind==="legacy")return(s===null||s==="legacy")&&a.children.every(l=>_o(l,"legacy"));const o={technology:null,projects:"technology",proposals:"technology",project:"projects",proposal:"proposals",client:"project"};return a.kind==="client"&&s!=="project"&&s!=="proposal"||a.kind!=="client"&&o[a.kind]!==s?!1:a.kind==="technology"?a.children.filter(l=>l.kind==="projects").length===1&&a.children.filter(l=>l.kind==="proposals").length===1&&a.children.every(l=>_o(l,"technology")):a.kind==="projects"||a.kind==="proposals"?a.children.every(l=>_o(l,a.kind)):a.kind==="project"||a.kind==="proposal"?a.children.every(l=>_o(l,a.kind)):a.children.length===0}function Iy(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const s=a;if(!Ju(s,["version","pfd","pid"])||s.version!==2||!Array.isArray(s.pfd)||!Array.isArray(s.pid))return!1;const o=new Set;return Ni(s.pfd,!0,o)&&Ni(s.pid,!0,o)&&[...s.pfd,...s.pid].every(l=>_o(l,null))}function L1(a){if(!a||typeof a!="object"||Array.isArray(a))return!1;const s=a;if(!Ju(s,["version","pfd","pid"])||s.version!==1||!Array.isArray(s.pfd)||!Array.isArray(s.pid))return!1;const o=new Set;return Ni(s.pfd,!1,o)&&Ni(s.pid,!1,o)}function Su(a){return a.map(s=>({id:s.id,name:s.name,kind:"legacy",expanded:s.expanded,children:Su(s.children)}))}function O1(a){return{version:2,pfd:Su(a.pfd),pid:Su(a.pid)}}function _1(){let a;try{a=window.localStorage.getItem(Qu),a===null&&(a=window.localStorage.getItem(qy))}catch{throw new Mo("Saved groups could not be read from browser storage.")}if(a===null)return xu();let s;try{s=JSON.parse(a)}catch{throw new Mo("Saved group data is not valid JSON.",a)}if(Iy(s))return s;if(L1(s))return O1(s);throw new Mo("Saved group data is malformed or uses an unsupported format.",a)}function P1(a){if(!Iy(a))throw new Error("Groups could not be saved because the hierarchy is invalid.");window.localStorage.setItem(Qu,JSON.stringify(a))}function Ei(a,s,o){return a.map(l=>l.id===s?o(l):{...l,children:Ei(l.children,s,o)})}function My(a,s){return a.filter(o=>o.id!==s).map(o=>({...o,children:My(o.children,s)}))}function $y(a,s){return s?a.id===s||a.children.some(o=>$y(o,s)):!1}function Tu(a){return a.reduce((s,o)=>s+1+Tu(o.children),0)}function Au(a,s){if(!s)return null;for(const o of a){if(o.id===s)return o;const l=Au(o.children,s);if(l)return l}return null}function Uy(a,s,o){return a.flatMap(l=>{const i=s?`${s} / ${l.name}`:l.name;return[...o(l)?[{id:l.id,label:i}]:[],...Uy(l.children,i,o)]})}function By(a){return Uy(a,"",s=>s.kind==="client"||s.kind==="legacy")}const q1="modulepreload",I1=function(a){return"/pid-mapping-studio-app/"+a},Sm={},Pn=function(s,o,l){let i=Promise.resolve();if(o&&o.length>0){let y=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const g=document.querySelector("meta[property=csp-nonce]"),h=g?.nonce||g?.getAttribute("nonce");i=y(o.map(f=>{if(f=I1(f),f in Sm)return;Sm[f]=!0;const m=f.endsWith(".css"),v=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${v}`))return;const E=document.createElement("link");if(E.rel=m?"stylesheet":q1,m||(E.as="script"),E.crossOrigin="",E.href=f,h&&E.setAttribute("nonce",h),document.head.appendChild(E),m)return new Promise((S,R)=>{E.addEventListener("load",S),E.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${f}`)))})}))}function p(g){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=g,window.dispatchEvent(h),!h.defaultPrevented)throw g}return i.then(g=>{for(const h of g||[])h.status==="rejected"&&p(h.reason);return s().catch(p)})};async function M1(){const[a,s]=await Promise.all([Pn(()=>import("./pdf-TYrZqVzP.js"),[]),Pn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);return a.GlobalWorkerOptions.workerSrc=s.default,a}function $1({fileId:a,alias:s,pageCount:o,page:l,onPageChange:i,loadBytes:p,markers:g=[],onMarkerClick:h}){const y=q.useRef(null),f=q.useRef(null),[m,v]=q.useState(0),[E,S]=q.useState("loading"),[R,D]=q.useState(0),C=q.useRef(p);return C.current=p,q.useEffect(()=>{const w=f.current;if(!w)return;v(w.clientWidth);const A=new ResizeObserver(()=>v(Math.round(w.clientWidth/24)*24));return A.observe(w),()=>A.disconnect()},[]),q.useEffect(()=>{if(!m)return;let w=!1,A=null,k=null;return S("loading"),(async()=>{try{const[M,x]=await Promise.all([M1(),C.current(a)]);if(w)return;k=M.getDocument({data:new Uint8Array(x.slice(0))});const j=await k.promise;if(w)return;const L=await j.getPage(Math.min(Math.max(l,1),j.numPages)),P=L.getViewport({scale:1}),K=Math.min(window.devicePixelRatio||1,2),ue=m/P.width*K,ne=L.getViewport({scale:ue}),le=y.current;if(!le||w)return;le.width=Math.floor(ne.width),le.height=Math.floor(ne.height),le.style.width="100%";const ve=L.render({canvas:le,canvasContext:le.getContext("2d"),viewport:ne});A=ve,await ve.promise,w||S("ready")}catch(M){if(w||M?.name==="RenderingCancelledException")return;S("error")}})(),()=>{w=!0,A?.cancel(),k?.destroy().catch(()=>{})}},[a,l,m,R]),c.jsxs("div",{className:"ppv","data-testid":"panel-source-preview",children:[c.jsxs("div",{className:"ppv-bar",children:[c.jsx("span",{className:"ppv-label","data-testid":"text-preview-label",children:"Original source PDF · not generated CAD"}),c.jsxs("div",{className:"ppv-nav",children:[c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Previous page",disabled:l<=1,onClick:()=>i(l-1),"data-testid":"button-preview-prev",children:c.jsx(gy,{size:15})}),c.jsxs("span",{"data-testid":"text-preview-page","aria-live":"polite",children:[s," · page ",l," of ",o]}),c.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Next page",disabled:l>=o,onClick:()=>i(l+1),"data-testid":"button-preview-next",children:c.jsx(Gu,{size:15})})]})]}),c.jsxs("div",{className:"ppv-stage",ref:f,children:[c.jsxs("div",{className:"ppv-canvas-wrap",style:{visibility:E==="ready"?"visible":"hidden"},children:[c.jsx("canvas",{ref:y,"aria-label":`Original source page ${l} of ${s}`,"data-testid":"canvas-source-preview"}),E==="ready"&&g.length>0&&c.jsx("div",{className:"ppv-markers","aria-label":"Extracted tag source locations",children:g.map((w,A)=>c.jsx("button",{className:"ppv-marker",type:"button",style:{left:`${w.location.x*100}%`,top:`${w.location.y*100}%`,width:`${Math.max(w.location.width*100,1.1)}%`,height:`${Math.max(w.location.height*100,1.2)}%`},"aria-label":`OCR location for ${w.label}; verify against the PDF`,title:`${w.label} · OCR candidate location`,onClick:()=>h?.(w.id),"data-testid":`marker-source-${w.id}-${A}`,children:c.jsx("span",{children:w.label})},`${w.id}-${w.location.pageNumber}-${A}`))})]}),g.length>0&&c.jsx("div",{className:"ppv-marker-note",role:"note",children:"Red boxes show OCR candidate locations. Confirm each tag against the original PDF."}),E==="loading"&&c.jsxs("div",{className:"ppv-overlay",role:"status","data-testid":"status-preview-loading",children:[c.jsx(Ia,{size:18,className:"pdf-spin"})," Rendering page"]}),E==="error"&&c.jsxs("div",{className:"ppv-overlay ppv-error",role:"alert","data-testid":"status-preview-error",children:[c.jsx(ps,{size:18})," This page could not be shown.",c.jsx("button",{type:"button",className:"btn",onClick:()=>D(w=>w+1),"data-testid":"button-preview-retry",children:"Try again"})]})]})]})}const lu="STANDARD",U1="STANDARD";function B1(a,s,o){const l=a(),i=a(),p=a(),g=a(),h=a(),y=a(),f=a(),m=a(),v=a();function E(x,j,L){const P=a();return x(0,"TABLE"),x(2,j),x(5,P),x(330,"0"),x(100,"AcDbSymbolTable"),x(70,L),P}function S(x,j,L,P,K=a()){return x(0,j),x(j==="DIMSTYLE"?105:5,K),x(330,L),x(100,"AcDbSymbolTableRecord"),x(100,P),K}function R(x){const j=E(x,"VPORT",1);S(x,"VPORT",j,"AcDbViewportTableRecord"),x(2,"*ACTIVE"),x(70,0),x(10,0),x(20,0),x(11,1),x(21,1),x(12,s/2),x(22,o/2),x(13,0),x(23,0),x(14,10),x(24,10),x(15,10),x(25,10),x(16,0),x(26,0),x(36,1),x(17,0),x(27,0),x(37,0),x(40,o*1.1),x(41,s/o),x(42,50),x(43,0),x(44,0),x(50,0),x(51,0),x(71,0),x(72,1e3),x(73,1),x(74,3),x(75,0),x(76,0),x(77,0),x(78,0),x(281,0),x(0,"ENDTAB")}function D(x,j){for(const ue of["VIEW","UCS"])E(x,ue,0),x(0,"ENDTAB");const L=E(x,"APPID",1);S(x,"APPID",L,"AcDbRegAppTableRecord"),x(2,"ACAD"),x(70,0),x(0,"ENDTAB");const P=E(x,"DIMSTYLE",1);x(100,"AcDbDimStyleTable"),x(71,0),S(x,"DIMSTYLE",P,"AcDbDimStyleTableRecord"),x(2,U1),x(70,0),x(40,1),x(140,2.5),x(340,j),x(0,"ENDTAB");const K=E(x,"BLOCK_RECORD",2);for(const[ue,ne,le]of[["*Model_Space",y,m],["*Paper_Space",f,v]])S(x,"BLOCK_RECORD",K,"AcDbBlockTableRecord",ne),x(2,ue),x(340,le),x(70,4),x(280,1),x(281,0);x(0,"ENDTAB")}function C(x){x(0,"SECTION"),x(2,"BLOCKS");for(const[j,L]of[["*Model_Space",y],["*Paper_Space",f]])x(0,"BLOCK"),x(5,a()),x(330,L),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockBegin"),x(2,j),x(70,0),x(10,0),x(20,0),x(30,0),x(3,j),x(1,""),x(0,"ENDBLK"),x(5,a()),x(330,L),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockEnd");x(0,"ENDSEC")}function w(x,j,L,P,K=!1){x(0,K?"ACDBDICTIONARYWDFLT":"DICTIONARY"),x(5,j),x(330,L),x(100,"AcDbDictionary"),x(280,0),x(281,1);for(const[ue,ne]of P)x(3,ue),x(350,ne);K&&(x(100,"AcDbDictionaryWithDefault"),x(340,h))}function A(x,j,L,P,K){x(0,"LAYOUT"),x(5,L),x(330,p),x(100,"AcDbPlotSettings"),x(1,""),x(4,""),x(6,"");for(const ue of[40,41,42,43])x(ue,0);x(44,s),x(45,o);for(const ue of[46,47,48,49,140,141])x(ue,0);x(142,1),x(143,1),x(70,K===0?1024:0),x(72,1),x(73,0),x(74,5),x(7,""),x(75,16),x(76,0),x(77,2),x(78,300),x(147,1),x(148,0),x(149,0),x(100,"AcDbLayout"),x(1,j),x(70,1),x(71,K),x(10,0),x(20,0),x(11,s),x(21,o),x(12,0),x(22,0),x(32,0),x(14,0),x(24,0),x(34,0),x(15,s),x(25,o),x(35,0),x(146,0),x(13,0),x(23,0),x(33,0),x(16,1),x(26,0),x(36,0),x(17,0),x(27,1),x(37,0),x(76,1),x(330,P)}function k(x){x(0,"SECTION"),x(2,"OBJECTS"),w(x,l,"0",[["ACAD_GROUP",i],["ACAD_LAYOUT",p],["ACAD_PLOTSTYLENAME",g]]),w(x,i,l,[]),w(x,p,l,[["Model",m],["Layout1",v]]),w(x,g,l,[["Normal",h]],!0),x(0,"ACDBPLACEHOLDER"),x(5,h),x(330,g),A(x,"Model",m,y,0),A(x,"Layout1",v,f,1),x(0,"ENDSEC")}function M(x){x(0,"SECTION"),x(2,"CLASSES");for(const[j,L,P]of[["LAYOUT","AcDbLayout",2],["ACDBDICTIONARYWDFLT","AcDbDictionaryWithDefault",1],["ACDBPLACEHOLDER","AcDbPlaceHolder",1]])x(0,"CLASS"),x(1,j),x(2,L),x(3,"ObjectDBX Classes"),x(90,0),x(91,P),x(280,0),x(281,0);x(0,"ENDSEC")}return{modelSpace:y,normalPlotStyle:h,beginTable:E,tableRecord:S,writeViewport:R,writeRemainingTables:D,writeBlocks:C,writeObjects:k,writeClasses:M}}function iu(a){if(!Number.isFinite(a))throw new Error("A PDF coordinate is not a finite number.");return Number(a.toFixed(7)).toString()}function F1(a){return a.replace(/[\r\n\t]/g," ").replace(/\\/g,"\\\\").replace(/[^\x20-\x7e]/g,s=>`\\U+${s.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")}`)}const Tm=/[<>\/\\":;?*|,=\u0000-\u001f\u007f]/;function Fy(a){const s=a.replace(/^\uFEFF/,"").split(/\r?\n/);for(;s.at(-1)==="";)s.pop();if(!s.length||s.length%2!==0)throw new Error("DXF export rejected: the output does not contain complete group-code/value pairs.");const o=[];for(let l=0;l<s.length;l+=2){const i=Number(s[l].trim());if(!/^\d+$/.test(s[l].trim())||!Number.isInteger(i)||s[l+1]===void 0)throw new Error(`DXF export rejected: malformed group-code/value pair at line ${l+1}.`);o.push({code:i,value:s[l+1]})}if(o.at(-1)?.code!==0||o.at(-1)?.value!=="EOF")throw new Error("DXF export rejected: the output is incomplete (missing EOF).");return o}function z1(a,s,o=0){return!a||a.trim()!==a||a.length>255?!1:s==="BLOCK_RECORD"&&/^\*[A-Za-z0-9_.$-]+$/.test(a)||s==="VPORT"&&a.toUpperCase()==="*ACTIVE"?!0:o&16&&a.includes("|")?a.split("|").every(l=>l.length>0&&!Tm.test(l)):!Tm.test(a)}function zy(a,s,o,l=[]){const i=new Set;let p=!1,g=!1;for(let h=0;h<a.length;h+=1){const y=a[h];if(y.code===0&&y.value==="SECTION"&&a[h+1]?.code===2&&a[h+1]?.value==="TABLES"){p=!0,g=!0,h+=1;continue}if(!p)continue;if(y.code===0&&y.value==="ENDSEC"){p=!1;continue}if(y.code!==0||y.value!=="TABLE")continue;const f=a[h+1];if(f?.code!==2||!f.value.trim())throw new Error("DXF export rejected: a symbol table has a blank or missing table name.");const m=f.value.toUpperCase();if(i.has(m))throw new Error(`DXF export rejected: the ${m} symbol table is duplicated.`);i.add(m);const v=new Set;let E=h+1;for(;E<a.length&&a[E].code!==0;)E+=1;const S=new Set;for(let C=E;C<a.length&&!(a[C].code===0&&["ENDTAB","ENDSEC"].includes(a[C].value));C+=1)a[C].code===2&&a[C].value.trim()&&S.add(a[C].value.toUpperCase());let R=0,D=!1;for(;E<a.length&&a[E].code===0;){if(a[E].value==="ENDTAB"){D=!0,h=E;break}if(a[E].value==="ENDSEC")break;R+=1;let C=E+1;for(;C<a.length&&a[C].code!==0;)C+=1;if(a[E].value!==m)throw new Error(`DXF export rejected: ${m} contains an unexpected ${a[E].value} record at line ${E*2+2}.`);let w=-1,A=0,k="";for(let P=E+1;P<C;P+=1){if(a[P].code===2){if(w>=0)throw new Error(`DXF export rejected: ${m} record has multiple name fields at line ${P*2+1}.`);w=P}a[P].code===70&&(A=Number(a[P].value)),a[P].code===3&&(k=a[P].value)}const M=w>=0?a[w].value:"",x=!M.trim();let j=M;if(m==="STYLE"&&(A&1)!==0){const P=(w>=0?w:E)*2+2;if(w<0)throw new Error(`DXF export rejected: STYLE shape-file record is missing its group-2 name field at line ${P}.`);if(!k.trim())throw new Error(`DXF export rejected: STYLE shape-file record has no font file in group 3 at line ${P}.`);if(M!==""){if(!s)throw new Error(`DXF export rejected: STYLE shape-file record must have an empty name per DXF format at line ${P}.`);l.push({table:m,line:P,previousName:M,name:""}),a[w].value="",j=""}}else if(x||!z1(M,m,A)){const P=(w>=0?w:E)*2+2;if(!x||!["STYLE","DIMSTYLE"].includes(m))throw new Error(`DXF export rejected: ${m} table record ${R} has ${x?"a blank name":`an invalid name ${JSON.stringify(M)}`} at line ${P}. Correct the source value before exporting.`);if(!s)throw new Error(`DXF export rejected: ${m} table record ${R} still has ${x?"a blank name":"an invalid name"} after repair at line ${P}.`);const K=m==="DIMSTYLE"?"AUTOMATION_DIMSTYLE":"AUTOMATION_TEXTSTYLE";j=K;let ue=2;for(;S.has(j.toUpperCase());)j=`${K}_${ue++}`;if(S.add(j.toUpperCase()),l.push({table:m,line:P,previousName:M,name:j}),w>=0)a[w].value=j;else{let ne=E+1;for(;ne<C&&[5,105,330,100].includes(a[ne].code);)ne+=1;o.push({index:ne,pair:{code:2,value:j}})}}if(j){const P=j.toUpperCase();if(v.has(P))throw new Error(`DXF export rejected: ${m} table record ${R} duplicates the name ${JSON.stringify(j)}.`);v.add(P)}E=C}if(!D)throw new Error(`DXF export rejected: the ${m} symbol table is missing ENDTAB.`)}if(!g)throw new Error("DXF export rejected: the output has no TABLES section to validate.");if(p)throw new Error("DXF export rejected: TABLES section is missing ENDSEC.");for(const h of["STYLE","DIMSTYLE"])if(!i.has(h))throw new Error(`DXF export rejected: the required ${h} symbol table is missing.`)}function Y1(a){return Yy(a).dxf}function Yy(a){const s=Fy(a),o=[],l=[];zy(s,!0,o,l),o.sort((p,g)=>g.index-p.index);for(const p of o)s.splice(p.index,0,p.pair);const i=`${s.flatMap(({code:p,value:g})=>[String(p),g]).join(`\r
`)}\r
`;return ef(i),{dxf:i,repairs:l}}function ef(a){zy(Fy(a),!1,[])}function V1(a){const s=Number.parseInt(a.replace("#",""),16);return Number.isFinite(s)?s:0}function CT(a,s,o){if(!Number.isFinite(s)||!Number.isFinite(o)||s<=0||o<=0)throw new Error("A DXF page must have positive finite dimensions.");const l=[],i=(w,A)=>l.push(String(w),typeof A=="number"?iu(A):A);let p=256;const g=()=>(p++).toString(16).toUpperCase(),h=B1(g,s,o),y=new Map;for(const w of a)if(w.kind==="polyline"&&w.dash?.some(A=>A>0)){const A=w.dash.map(k=>iu(k)).join(",");y.has(A)||y.set(A,{name:`PDF_DASH_${y.size+1}`,pattern:w.dash})}const f=w=>w.trim()||"0",m=w=>{i(5,g()),i(330,h.modelSpace),i(100,"AcDbEntity"),i(67,0),i(410,"Model"),i(8,f(w.layer));const A=V1(w.color);(A>>16&255)<16&&(A>>8&255)<16&&(A&255)<16?i(62,7):(i(62,256),i(420,A)),w.opacity!==void 0&&w.opacity<1&&i(440,33554432|Math.round(Math.max(0,w.opacity)*255))};h.writeClasses(i),i(0,"SECTION"),i(2,"TABLES"),h.writeViewport(i);const v=h.beginTable(i,"LTYPE",3+y.size);for(const w of["BYBLOCK","BYLAYER","CONTINUOUS"])h.tableRecord(i,"LTYPE",v,"AcDbLinetypeTableRecord"),i(2,w),i(70,0),i(3,w==="CONTINUOUS"?"Solid line":""),i(72,65),i(73,0),i(40,0);for(const{name:w,pattern:A}of y.values()){const k=A.length%2?[...A,...A]:A;h.tableRecord(i,"LTYPE",v,"AcDbLinetypeTableRecord"),i(2,w),i(70,0),i(3,"Source PDF dash pattern"),i(72,65),i(73,k.length),i(40,k.reduce((M,x)=>M+Math.abs(x),0)),k.forEach((M,x)=>{i(49,x%2?-M:M),i(74,0)})}i(0,"ENDTAB");const E=[...new Set(["0",...a.map(w=>f(w.layer))])],S=h.beginTable(i,"LAYER",E.length);for(const w of E)h.tableRecord(i,"LAYER",S,"AcDbLayerTableRecord"),i(2,w),i(70,0),i(62,7),i(6,"CONTINUOUS"),i(290,1),i(370,-3),i(390,h.normalPlotStyle);i(0,"ENDTAB");const R=h.beginTable(i,"STYLE",1),D=h.tableRecord(i,"STYLE",R,"AcDbTextStyleTableRecord");i(2,lu),i(70,0),i(40,0),i(41,1),i(50,0),i(71,0),i(42,2.5),i(3,"txt.shx"),i(4,""),i(0,"ENDTAB"),h.writeRemainingTables(i,D),i(0,"ENDSEC"),h.writeBlocks(i),i(0,"SECTION"),i(2,"ENTITIES");for(const w of a)if(w.kind==="polyline"){if(w.points.length<2)continue;i(0,"LWPOLYLINE"),m(w),i(370,w.lineWeight);const A=w.dash?.length?y.get(w.dash.map(k=>iu(k)).join(",")):void 0;A&&i(6,A.name),i(100,"AcDbPolyline"),i(90,w.points.length),i(70,(w.closed?1:0)|(A?128:0));for(const k of w.points)i(10,k.x),i(20,k.y)}else if(w.kind==="hatch"){const A=w.loops.filter(k=>k.length>=3);if(!A.length)continue;i(0,"HATCH"),m(w),i(100,"AcDbHatch"),i(10,0),i(20,0),i(30,0),i(210,0),i(220,0),i(230,1),i(2,"SOLID"),i(70,1),i(71,0),i(91,A.length);for(const k of A){i(92,2),i(72,0),i(73,1),i(93,k.length);for(const M of k)i(10,M.x),i(20,M.y);i(97,0)}i(75,0),i(76,1),i(98,0)}else{if(!w.text.trim()||!(w.height>0))continue;const A=w.text.match(/[\s\S]{1,180}/g)??[];let k=0;for(const M of A){const x=k/w.text.length,j=(k+M.length)/w.text.length,L={x:w.start.x+(w.end.x-w.start.x)*x,y:w.start.y+(w.end.y-w.start.y)*x},P={x:w.start.x+(w.end.x-w.start.x)*j,y:w.start.y+(w.end.y-w.start.y)*j};i(0,"TEXT"),m(w),i(100,"AcDbText"),i(10,L.x),i(20,L.y),i(30,0),i(40,w.height),i(1,F1(M)),i(50,w.rotation),i(7,lu),i(72,Math.hypot(P.x-L.x,P.y-L.y)>1e-8?5:0),i(11,P.x),i(21,P.y),i(31,0),i(100,"AcDbText"),i(73,0),k+=M.length}}i(0,"ENDSEC"),h.writeObjects(i),i(0,"EOF");const C=l.splice(0);return i(0,"SECTION"),i(2,"HEADER"),i(9,"$ACADVER"),i(1,"AC1018"),i(9,"$DWGCODEPAGE"),i(3,"ANSI_1252"),i(9,"$HANDSEED"),i(5,p.toString(16).toUpperCase()),i(9,"$INSUNITS"),i(70,4),i(9,"$MEASUREMENT"),i(70,1),i(9,"$INSBASE"),i(10,0),i(20,0),i(30,0),i(9,"$EXTMIN"),i(10,0),i(20,0),i(30,0),i(9,"$EXTMAX"),i(10,s),i(20,o),i(30,0),i(9,"$LIMMIN"),i(10,0),i(20,0),i(9,"$LIMMAX"),i(10,s),i(20,o),i(9,"$TILEMODE"),i(70,1),i(9,"$CTAB"),i(1,"Model"),i(9,"$CLAYER"),i(8,"0"),i(9,"$CELTYPE"),i(6,"BYLAYER"),i(9,"$TEXTSTYLE"),i(7,lu),i(9,"$CECOLOR"),i(62,256),i(9,"$LTSCALE"),i(40,1),i(9,"$CELTSCALE"),i(40,1),i(9,"$PSLTSCALE"),i(70,0),i(0,"ENDSEC"),Y1(`${l.concat(C).join(`\r
`)}\r
`)}const X1=["LTYPE","LAYER","STYLE","APPID","DIMSTYLE","BLOCK_RECORD"];function G1(a){const s=a.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;s.at(-1)==="";)s.pop();if(!s.length||s.length%2!==0)throw new Error("DXF structural repair rejected: incomplete group-code/value pairs.");const o=[];for(let l=0;l<s.length;l+=2){const i=Number(s[l].trim());if(!/^\d+$/.test(s[l].trim())||!Number.isInteger(i))throw new Error(`DXF structural repair rejected: invalid group code at line ${l+1}.`);o.push({code:i,value:s[l+1]})}return o}function H1(a){return`${a.flatMap(({code:s,value:o})=>[String(s),o]).join(`\r
`)}\r
`}function K1(a){const s=G1(a),o=new Map;let l="",i=-1;for(let D=0;D<s.length;D+=1){const C=s[D];if(C.code===0&&C.value.trim().toUpperCase()==="SECTION"&&s[D+1]?.code===2){l=s[++D].value.trim().toUpperCase();continue}if(C.code===0&&C.value.trim().toUpperCase()==="ENDSEC"){l==="TABLES"&&(i=D),l="";continue}if(l!=="TABLES"||C.code!==0||C.value.trim().toUpperCase()!=="TABLE")continue;const w=s[D+1]?.code===2?s[D+1].value.trim().toUpperCase():"";if(!w)throw new Error("DXF structural repair rejected: a TABLES record has no table name.");let A=D+1;for(;A<s.length&&!(s[A].code===0&&s[A].value.trim().toUpperCase()==="ENDTAB");)A+=1;if(A>=s.length)throw new Error(`DXF structural repair rejected: ${w} table is missing ENDTAB.`);o.set(w,{start:D,end:A,name:w})}if(i<0)throw new Error("DXF structural repair rejected: TABLES section is missing ENDSEC.");for(const D of X1)if(!o.has(D))throw new Error(`DXF structural repair rejected: required ${D} symbol table is missing; re-save the source as a modern ASCII DXF.`);const p=new Set(s.filter(D=>D.code===5||D.code===105).map(D=>D.value.trim().toUpperCase()).filter(D=>/^[0-9A-F]+$/.test(D)));let g=0n;for(const D of p){const C=BigInt(`0x${D}`);C>g&&(g=C)}const h=()=>{do g+=1n;while(p.has(g.toString(16).toUpperCase()));const D=g.toString(16).toUpperCase();return p.add(D),D},y=(...D)=>{const C=[];for(let w=0;w<D.length;w+=2)C.push({code:Number(D[w]),value:String(D[w+1])});return C},f=[],m=D=>y(0,"TABLE",2,D,5,h(),330,"0",100,"AcDbSymbolTable",70,0,0,"ENDTAB"),v=()=>{const D=h();return y(0,"TABLE",2,"VPORT",5,D,330,"0",100,"AcDbSymbolTable",70,1,0,"VPORT",5,h(),330,D,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0,0,"ENDTAB")},E=["VPORT","VIEW","UCS"].filter(D=>!o.has(D));for(const D of E){const C=D==="VPORT"?v():m(D);s.splice(i,0,...C),i+=C.length,f.push(D)}const S=o.get("VPORT");if(S){let D=!1;for(let C=S.start+1;C<S.end;C+=1){if(s[C].code!==0||s[C].value.trim().toUpperCase()!=="VPORT")continue;let w=C+1;for(;w<S.end&&s[w].code!==0;)w+=1;if(s.slice(C,w).some(A=>A.code===2&&A.value.trim().toUpperCase()==="*ACTIVE")){D=!0;break}C=w-1}if(!D){const C=s.findIndex((x,j)=>j>S.start&&j<S.end&&x.code===0),w=s.slice(S.start+1,C).find(x=>x.code===5)?.value.trim();if(!w)throw new Error("DXF structural repair rejected: VPORT table header has no handle.");const A=s.findIndex((x,j)=>j>S.start&&j<C&&x.code===70);A<0?s.splice(C,0,{code:70,value:"1"}):s[A].value=String(Number(s[A].value)+1);const k=y(0,"VPORT",5,h(),330,w,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0),M=s.findIndex((x,j)=>j>S.start&&x.code===0&&x.value.trim().toUpperCase()==="ENDTAB");s.splice(M,0,...k),f.push("VPORT:*ACTIVE")}}if(!f.length)return{dxf:a,addedTables:f};const R=H1(s);return ef(R),{dxf:R,addedTables:f}}function kr(a){if(a.byteLength>50*1024*1024)throw new Error("DXF repair limit is 50 MB per file. The original file was not changed.");let s="";const o=a[0]===239&&a[1]===187&&a[2]===191?3:0;for(let h=o;h<a.length;h+=16384)s+=String.fromCharCode(...a.subarray(h,h+16384));if(s.startsWith("AutoCAD Binary DXF"))throw new Error("Binary DXF cannot be repaired in this browser. Save an ASCII DXF copy in AutoCAD first.");const l=Yy(s),i=K1(l.dxf);if(!l.repairs.length&&!i.addedTables.length)return{content:a,repairs:[],addedTables:[]};const p=i.addedTables.length?i.dxf:l.dxf,g=new Uint8Array(p.length);for(let h=0;h<p.length;h+=1)g[h]=p.charCodeAt(h);return{content:g,repairs:l.repairs,addedTables:i.addedTables}}function W1(){const[a,s]=q.useState(""),[o,l]=q.useState(!1),[i,p]=q.useState(!1),g=q.useRef(null);async function h(y){l(!0),p(!1),s("");try{const f=kr(new Uint8Array(await y.arrayBuffer())),m=new Blob([new Uint8Array(f.content)],{type:"application/dxf"}),v=URL.createObjectURL(m),E=document.createElement("a");E.href=v,E.download="REPAIRED_DRAWING.dxf",document.body.appendChild(E),E.click(),E.remove(),window.setTimeout(()=>URL.revokeObjectURL(v),1e4),s(`${f.repairs.length} symbol-table name(s) repaired; validated copy downloaded. Original file unchanged. AutoCAD open test still required.`)}catch(f){p(!0),s(f instanceof Error?f.message:"DXF repair failed. No download was created.")}finally{l(!1)}}return c.jsxs("div",{className:"dxf-repair-control",children:[c.jsx("button",{className:"btn",type:"button",disabled:o,onClick:()=>g.current?.click(),children:o?"Checking DXF…":"Repair an existing DXF"}),c.jsx("input",{ref:g,type:"file",accept:".dxf",disabled:o,"aria-label":"DXF to repair",hidden:!0,onChange:y=>{const f=y.target.files?.[0];y.target.value="",f&&h(f)}}),c.jsx("p",{children:"Local only · Repairs blank ordinary STYLE/DIMSTYLE names and preserves anonymous SHX shape-font STYLE records as DXF requires. Geometry, layers and SHX definitions stay unchanged. Maximum 50 MB."}),a&&c.jsx("p",{role:i?"alert":"status",children:a})]})}const el=["itemTag","description","equipmentName","equipmentType","nominalDiameter","fluidService","lineSpec","fromTag","toTag","notes"];function tf(a){if(!Array.isArray(a)||a.length>64)throw new Error("Use at most 64 explicit attribute rules.");const s=new Set;return a.map(o=>{const l=o,i=typeof l?.attributeTag=="string"?l.attributeTag.trim().toUpperCase():"";if(!/^[A-Z][A-Z0-9_-]{0,63}$/.test(i)||s.has(i))throw new Error("Attribute tags must be unique, nonblank CAD field names (for example TAG_NO).");if(!el.includes(l.edeField)||!["tag","text","number"].includes(l.valueType)||!["inside","above","below"].includes(l.textZone))throw new Error(`Attribute rule ${i} has an unsupported field, value type or text zone.`);return s.add(i),{attributeTag:i,edeField:l.edeField,valueType:l.valueType,textZone:l.textZone}})}function Z1(a){const s=new Map;for(const o of a){const l=o.itemTag.trim().toUpperCase();if(!l)continue;const i=s.get(l)??new Set;i.add(o.stableId.toUpperCase()),s.set(l,i)}return[...s].filter(([,o])=>o.size>1).map(([o])=>o).sort()}const Vy=a=>`pid-cad-attribute-rules:v1:${a||"legends-default"}`;function Xy(a){const s=localStorage.getItem(Vy(a));return s?tf(JSON.parse(s)):[]}function Q1({scope:a}){const[s,o]=q.useState(()=>{try{return Xy(a)}catch{return[]}}),[l,i]=q.useState(""),[p,g]=q.useState(!1);function h(y,f){o(m=>m.map((v,E)=>E===y?{...v,...f}:v)),g(!0),i("Unsaved changes: save these rules before downloading a runner.")}return c.jsxs("details",{className:"runner-group-hint",children:[c.jsx("summary",{children:"Block attributes · Arial Narrow text"}),c.jsx("p",{children:"Final text keeps its imported height and position. AutoCAD must have Arial Narrow installed. Attribute rules belong only to the selected mapping scope. No saved rule means review—not guessing."}),s.map((y,f)=>c.jsxs("fieldset",{style:{marginBlock:8},children:[c.jsxs("legend",{children:["Attribute rule ",f+1]}),c.jsxs("label",{children:["Block field ",c.jsx("input",{"aria-label":`Attribute tag ${f+1}`,value:y.attributeTag,onChange:m=>h(f,{attributeTag:m.target.value})})]}),c.jsxs("label",{children:["EDE value ",c.jsx("select",{value:y.edeField,onChange:m=>h(f,{edeField:m.target.value}),children:el.map(m=>c.jsx("option",{children:m},m))})]}),c.jsxs("label",{children:["Expected type ",c.jsxs("select",{value:y.valueType,onChange:m=>h(f,{valueType:m.target.value}),children:[c.jsx("option",{value:"tag",children:"Tag"}),c.jsx("option",{value:"text",children:"Text"}),c.jsx("option",{value:"number",children:"Number"})]})]}),c.jsxs("label",{children:["PDF text location ",c.jsxs("select",{value:y.textZone,onChange:m=>h(f,{textZone:m.target.value}),children:[c.jsx("option",{value:"inside",children:"Inside symbol"}),c.jsx("option",{value:"above",children:"Above symbol"}),c.jsx("option",{value:"below",children:"Below symbol"})]})]}),c.jsx("button",{className:"btn subtle danger",type:"button",onClick:()=>{o(m=>m.filter((v,E)=>E!==f)),g(!0),i("Save to apply the removal.")},children:"Remove rule"})]},f)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>{o(y=>[...y,{attributeTag:"TAG_NO",edeField:"itemTag",valueType:"tag",textZone:"above"}]),g(!0),i("Save rules before downloading a runner.")},disabled:s.length>=64,children:"Add attribute rule"})," ",c.jsx("button",{className:"btn primary",type:"button",disabled:!p,onClick:()=>{try{const y=tf(s);localStorage.setItem(Vy(a),JSON.stringify(y)),o(y),g(!1),i("Rules saved locally for this mapping scope.")}catch(y){i(y instanceof Error?y.message:"Rules could not be saved.")}},children:"Save rules"}),l&&c.jsx("p",{role:"status",children:l})]})}var Ma=Uint8Array,Dr=Uint16Array,J1=Int32Array,Gy=new Ma([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Hy=new Ma([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ex=new Ma([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ky=function(a,s){for(var o=new Dr(31),l=0;l<31;++l)o[l]=s+=1<<a[l-1];for(var i=new J1(o[30]),l=1;l<30;++l)for(var p=o[l];p<o[l+1];++p)i[p]=p-o[l]<<5|l;return{b:o,r:i}},Wy=Ky(Gy,2),Zy=Wy.b,tx=Wy.r;Zy[28]=258,tx[258]=28;var ax=Ky(Hy,0),nx=ax.b,Du=new Dr(32768);for(var bt=0;bt<32768;++bt){var ls=(bt&43690)>>1|(bt&21845)<<1;ls=(ls&52428)>>2|(ls&13107)<<2,ls=(ls&61680)>>4|(ls&3855)<<4,Du[bt]=((ls&65280)>>8|(ls&255)<<8)>>1}var $o=(function(a,s,o){for(var l=a.length,i=0,p=new Dr(s);i<l;++i)a[i]&&++p[a[i]-1];var g=new Dr(s);for(i=1;i<s;++i)g[i]=g[i-1]+p[i-1]<<1;var h;if(o){h=new Dr(1<<s);var y=15-s;for(i=0;i<l;++i)if(a[i])for(var f=i<<4|a[i],m=s-a[i],v=g[a[i]-1]++<<m,E=v|(1<<m)-1;v<=E;++v)h[Du[v]>>y]=f}else for(h=new Dr(l),i=0;i<l;++i)a[i]&&(h[i]=Du[g[a[i]-1]++]>>15-a[i]);return h}),tl=new Ma(288);for(var bt=0;bt<144;++bt)tl[bt]=8;for(var bt=144;bt<256;++bt)tl[bt]=9;for(var bt=256;bt<280;++bt)tl[bt]=7;for(var bt=280;bt<288;++bt)tl[bt]=8;var Qy=new Ma(32);for(var bt=0;bt<32;++bt)Qy[bt]=5;var sx=$o(tl,9,1),rx=$o(Qy,5,1),cu=function(a){for(var s=a[0],o=1;o<a.length;++o)a[o]>s&&(s=a[o]);return s},en=function(a,s,o){var l=s/8|0;return(a[l]|a[l+1]<<8)>>(s&7)&o},du=function(a,s){var o=s/8|0;return(a[o]|a[o+1]<<8|a[o+2]<<16)>>(s&7)},ox=function(a){return(a+7)/8|0},af=function(a,s,o){return(s==null||s<0)&&(s=0),(o==null||o>a.length)&&(o=a.length),new Ma(a.subarray(s,o))},lx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],qa=function(a,s,o){var l=new Error(s||lx[a]);if(l.code=a,Error.captureStackTrace&&Error.captureStackTrace(l,qa),!o)throw l;return l},ix=function(a,s,o,l){var i=a.length,p=l?l.length:0;if(!i||s.f&&!s.l)return o||new Ma(0);var g=!o,h=g||s.i!=2,y=s.i;g&&(o=new Ma(i*3));var f=function(jt){var Je=o.length;if(jt>Je){var xt=new Ma(Math.max(Je*2,jt));xt.set(o),o=xt}},m=s.f||0,v=s.p||0,E=s.b||0,S=s.l,R=s.d,D=s.m,C=s.n,w=i*8;do{if(!S){m=en(a,v,1);var A=en(a,v+1,3);if(v+=3,A)if(A==1)S=sx,R=rx,D=9,C=5;else if(A==2){var j=en(a,v,31)+257,L=en(a,v+10,15)+4,P=j+en(a,v+5,31)+1;v+=14;for(var K=new Ma(P),ue=new Ma(19),ne=0;ne<L;++ne)ue[ex[ne]]=en(a,v+ne*3,7);v+=L*3;for(var le=cu(ue),ve=(1<<le)-1,me=$o(ue,le,1),ne=0;ne<P;){var ce=me[en(a,v,ve)];v+=ce&15;var k=ce>>4;if(k<16)K[ne++]=k;else{var V=0,re=0;for(k==16?(re=3+en(a,v,3),v+=2,V=K[ne-1]):k==17?(re=3+en(a,v,7),v+=3):k==18&&(re=11+en(a,v,127),v+=7);re--;)K[ne++]=V}}var ye=K.subarray(0,j),Ae=K.subarray(j);D=cu(ye),C=cu(Ae),S=$o(ye,D,1),R=$o(Ae,C,1)}else qa(1);else{var k=ox(v)+4,M=a[k-4]|a[k-3]<<8,x=k+M;if(x>i){y&&qa(0);break}h&&f(E+M),o.set(a.subarray(k,x),E),s.b=E+=M,s.p=v=x*8,s.f=m;continue}if(v>w){y&&qa(0);break}}h&&f(E+131072);for(var _=(1<<D)-1,Q=(1<<C)-1,$=v;;$=v){var V=S[du(a,v)&_],G=V>>4;if(v+=V&15,v>w){y&&qa(0);break}if(V||qa(2),G<256)o[E++]=G;else if(G==256){$=v,S=null;break}else{var oe=G-254;if(G>264){var ne=G-257,he=Gy[ne];oe=en(a,v,(1<<he)-1)+Zy[ne],v+=he}var be=R[du(a,v)&Q],Ye=be>>4;be||qa(3),v+=be&15;var Ae=nx[Ye];if(Ye>3){var he=Hy[Ye];Ae+=du(a,v)&(1<<he)-1,v+=he}if(v>w){y&&qa(0);break}h&&f(E+131072);var Me=E+oe;if(E<Ae){var it=p-Ae,pt=Math.min(Ae,Me);for(it+E<0&&qa(3);E<pt;++E)o[E]=l[it+E]}for(;E<Me;++E)o[E]=o[E-Ae]}}s.l=S,s.p=$,s.b=E,s.f=m,S&&(m=1,s.m=D,s.d=R,s.n=C)}while(!m);return E!=o.length&&g?af(o,0,E):o.subarray(0,E)},cx=new Ma(0),pn=function(a,s){return a[s]|a[s+1]<<8},Ka=function(a,s){return(a[s]|a[s+1]<<8|a[s+2]<<16|a[s+3]<<24)>>>0},uu=function(a,s){return Ka(a,s)+Ka(a,s+4)*4294967296};function dx(a,s){return ix(a,{i:2},s&&s.out,s&&s.dictionary)}var Cu=typeof TextDecoder<"u"&&new TextDecoder,ux=0;try{Cu.decode(cx,{stream:!0}),ux=1}catch{}var fx=function(a){for(var s="",o=0;;){var l=a[o++],i=(l>127)+(l>223)+(l>239);if(o+i>a.length)return{s,r:af(a,o-1)};i?i==3?(l=((l&15)<<18|(a[o++]&63)<<12|(a[o++]&63)<<6|a[o++]&63)-65536,s+=String.fromCharCode(55296|l>>10,56320|l&1023)):i&1?s+=String.fromCharCode((l&31)<<6|a[o++]&63):s+=String.fromCharCode((l&15)<<12|(a[o++]&63)<<6|a[o++]&63):s+=String.fromCharCode(l)}};function px(a,s){if(s){for(var o="",l=0;l<a.length;l+=16384)o+=String.fromCharCode.apply(null,a.subarray(l,l+16384));return o}else{if(Cu)return Cu.decode(a);var i=fx(a),p=i.s,o=i.r;return o.length&&qa(8),p}}var hx=function(a,s){return s+30+pn(a,s+26)+pn(a,s+28)},gx=function(a,s,o){var l=pn(a,s+28),i=pn(a,s+30),p=px(a.subarray(s+46,s+46+l),!(pn(a,s+8)&2048)),g=s+46+l,h=mx(a,g,i,o,Ka(a,s+20),Ka(a,s+24),Ka(a,s+42)),y=h[0],f=h[1],m=h[2];return[pn(a,s+10),y,f,p,g+i+pn(a,s+32),m]},mx=function(a,s,o,l,i,p,g){var h=i==4294967295,y=p==4294967295,f=g==4294967295,m=s+o,v=h+y+f;if(l&&v){for(;s+4<m;s+=4+pn(a,s+2))if(pn(a,s)==1)return[h?uu(a,s+4+8*y):i,y?uu(a,s+4):p,f?uu(a,s+4+8*(y+h)):g,1];l<2&&qa(13)}return[i,p,g,0]};function Am(a,s){for(var o={},l=a.length-22;Ka(a,l)!=101010256;--l)(!l||a.length-l>65558)&&qa(13);var i=pn(a,l+8);if(!i)return{};var p=Ka(a,l+16),g=Ka(a,l-20)==117853008;if(g){var h=Ka(a,l-12);g=Ka(a,h)==101075792,g&&(i=Ka(a,h+32),p=Ka(a,h+48))}for(var y=0;y<i;++y){var f=gx(a,p,g),m=f[0],v=f[1],E=f[2],S=f[3],R=f[4],D=f[5],C=hx(a,D);p=R,m?m==8?o[S]=dx(a.subarray(C,C+v),{out:new Ma(E)}):qa(14,"unknown compression type "+m):o[S]=af(a,C,C+v)}return o}const Dm=128,Vt=1e-9;function Po(a,s,o){return(s[0]-a[0])*(o[1]-a[1])-(s[1]-a[1])*(o[0]-a[0])}function gi(a,s,o){return Math.abs(Po(a,s,o))<=Vt&&o[0]>=Math.min(a[0],s[0])-Vt&&o[0]<=Math.max(a[0],s[0])+Vt&&o[1]>=Math.min(a[1],s[1])-Vt&&o[1]<=Math.max(a[1],s[1])+Vt}function yx(a,s,o,l){const i=Po(a,s,o),p=Po(a,s,l),g=Po(o,l,a),h=Po(o,l,s);return(i>Vt&&p<-Vt||i<-Vt&&p>Vt)&&(g>Vt&&h<-Vt||g<-Vt&&h>Vt)?!0:Math.abs(i)<=Vt&&gi(a,s,o)||Math.abs(p)<=Vt&&gi(a,s,l)||Math.abs(g)<=Vt&&gi(o,l,a)||Math.abs(h)<=Vt&&gi(o,l,s)}function bx(a){return a.reduce((s,o,l)=>{const i=a[(l+1)%a.length];return s+o[0]*i[1]-i[0]*o[1]},0)/2}function Is(a){const s=a.split(";").map(l=>l.trim()).filter(Boolean);if(s.length<3||s.length>Dm)throw new Error(`Enter 3-${Dm} valve-body outline points.`);const o=s.map((l,i)=>{const p=l.split(",").map(h=>h.trim());if(p.length!==2||!p[0]||!p[1])throw new Error(`Mask point ${i+1} must be written as X,Y.`);const g=[Number(p[0]),Number(p[1])];if(!g.every(Number.isFinite))throw new Error(`Mask point ${i+1} must contain finite X,Y values.`);return g});if(o.some((l,i)=>{const p=o[(i+1)%o.length];return Math.hypot(l[0]-p[0],l[1]-p[1])<=Vt}))throw new Error("The valve mask outline cannot contain duplicate adjacent points.");for(let l=0;l<o.length;l+=1){const i=(l+1)%o.length;for(let p=l+1;p<o.length;p+=1){const g=(p+1)%o.length;if(!(l===p||i===p||g===l)&&yx(o[l],o[i],o[p],o[g]))throw new Error("The valve mask outline must not cross or touch itself.")}}if(Math.abs(bx(o))<=Vt)throw new Error("The valve mask outline must enclose an area.");return o}function vx(a){return`(${a.map(([s,o])=>`(${s} ${o})`).join(" ")})`}const Nu=["PFD","P&ID","Data sheet"],Ps=["A0","A1","A2","A3","A4"],Jy="pid-mapping-studio:cad-standards:v1";function ku(){return{schemaVersion:"1.0.0",companyDefaults:{PFD:"A1","P&ID":"A1","Data sheet":"A4"},companyItems:[],projects:{},reviewCandidates:[],auditTrail:[]}}function Ex(){return ku()}function $s(a,s,o){return{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:a,detail:s,...o?{projectName:o}:{}}}function Ru(a){if(!a||typeof a!="object")return!1;const s=a;return!!(typeof s.id=="string"&&typeof s.name=="string"&&typeof s.summary=="string"&&typeof s.sourceFile=="string"&&["titleBlock","layer","textStyle","linetype","dimensionStyle","symbol","directionArrow","legend"].includes(String(s.category))&&["extracted-dwg","approved-source-drawing","synthetic-demo"].includes(String(s.sourceKind))&&["company","project"].includes(String(s.scope))&&["reviewed","needs-review"].includes(String(s.reviewStatus))&&typeof s.canPromote=="boolean"&&Array.isArray(s.fields)&&s.fields.every(o=>typeof o?.label=="string"&&typeof o?.value=="string")&&(s.sheetSize===void 0||Ps.includes(s.sheetSize))&&(s.scope!=="project"||typeof s.projectId=="string"&&typeof s.projectName=="string"))}function wx(a){if(!a||typeof a!="object")return!1;const s=a;return!!(typeof s.id=="string"&&Ru(s.item)&&["company","project","unclassified"].includes(String(s.proposedScope))&&typeof s.sourceGroup=="string"&&["needs-review","approved","dismissed"].includes(String(s.status))&&(s.proposedScope==="company"||typeof s.projectId=="string"&&typeof s.projectName=="string"))}function eb(a){if(!a||typeof a!="object")return!1;const s=a;return s.schemaVersion!=="1.0.0"||!s.companyDefaults||!s.companyItems||!Array.isArray(s.companyItems)||!s.projects||typeof s.projects!="object"||s.reviewCandidates!==void 0&&!Array.isArray(s.reviewCandidates)||!Array.isArray(s.auditTrail)||!Nu.every(o=>Ps.includes(s.companyDefaults[o]))||!s.companyItems.every(o=>Ru(o)&&o.scope==="company")||!(s.reviewCandidates??[]).every(o=>wx(o))||!s.auditTrail.every(o=>!!(o&&typeof o.id=="string"&&typeof o.at=="string"&&typeof o.action=="string"&&typeof o.detail=="string"))?!1:Object.entries(s.projects).every(([o,l])=>!!(o&&l&&typeof l.projectName=="string"&&l.defaults&&Object.entries(l.defaults).every(([i,p])=>Nu.includes(i)&&Ps.includes(p))&&Array.isArray(l.items)&&l.items.every(i=>Ru(i)&&i.scope==="project"&&i.projectId===o)))}const zo="cad-standards-changed";function Yo(a){if(!eb(a))throw new Error("CAD standards could not be saved because the library data is invalid.");try{window.localStorage.setItem(Jy,JSON.stringify(a))}catch{throw new Error("This browser could not save the CAD standards locally. Export or back up the library before leaving this page.")}typeof window.dispatchEvent=="function"&&window.dispatchEvent(new Event(zo))}function un(){let a;try{a=window.localStorage.getItem(Jy)}catch{throw new Error("This browser could not read its local CAD standards library.")}if(a===null){const y=ku();return Yo(y),y}let s;try{s=JSON.parse(a)}catch{throw new Error("The locally saved CAD standards library is not valid JSON. It was left unchanged.")}if(!eb(s))throw new Error("The locally saved CAD standards library has invalid fields. It was left unchanged.");const o={...s,reviewCandidates:s.reviewCandidates??[]},l=ku(),i=l.companyItems.filter(y=>!o.companyItems.some(f=>f.id===y.id)),p=new Set(o.reviewCandidates.map(y=>y.id)),g=l.reviewCandidates.filter(y=>!p.has(y.id));if(!i.length&&!g.length)return o;const h={...o,companyItems:[...o.companyItems,...i],reviewCandidates:[...o.reviewCandidates,...g],auditTrail:[...o.auditTrail,$s("Source mappings added to review queue",`${g.length} anonymized source mappings were added as pending review. Existing approvals, dismissals, and project settings were preserved.`)]};return Yo(h),h}function xx(a,s){return a.some(o=>o.category==="titleBlock"&&o.reviewStatus==="reviewed"&&(o.sheetSize===s||o.fields.some(l=>l.label==="Sheet size"&&l.value===s)))}function Sx(a,s,o){if(a.companyDefaults[s]===o)return a;if(!xx(a.companyItems,o))throw new Error(`Approve a company title-block mapping for ${o} before making it a company default.`);return{...a,companyDefaults:{...a.companyDefaults,[s]:o},auditTrail:[$s("Company sheet-size default changed",`${s} changed to ${o} after an approved company title-block mapping was available.`),...a.auditTrail]}}function ki(a,s,o,l=[],i){const p=a.reviewCandidates.find(S=>S.id===s);if(!p||p.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");if(o==="company"&&p.proposedScope!=="company")throw new Error("Only a source classified for the Legends Library can be approved there.");if(o==="project"&&p.proposedScope==="company")throw new Error("Legends Library source mappings must be approved to the Legends Library.");if(i&&!(p.item.sourceKind==="extracted-dwg"&&["symbol","directionArrow"].includes(p.item.category)&&["symbol","directionArrow"].includes(i)))throw new Error("Only an extracted CAD block can be reviewed as a Direction Arrow or a standard symbol.");const g=i??p.item.category;let h=[...p.item.fields.filter(S=>!l.some(R=>R.label===S.label)),...l];if(g==="directionArrow"&&(h=h.filter(S=>!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(S.label))),g==="symbol"&&p.item.sourceKind==="extracted-dwg"&&(!h.some(S=>S.label==="Fallback category"&&S.value.trim())||!h.some(S=>S.label==="Block asset ID"&&S.value.trim())))throw new Error("A fallback category and locally extracted block file are required before approving this symbol.");if(g==="symbol"&&p.item.sourceKind==="extracted-dwg"&&h.find(S=>S.label==="Fallback category")?.value.trim().toLowerCase()==="valve"){const S=h.find(R=>R.label==="Wipeout mask boundary")?.value??"";try{Is(S)}catch(R){throw new Error(`A reviewed valve-body mask outline is required before approving this valve. ${R instanceof Error?R.message:"Check the X,Y point list."}`)}}if(g==="symbol"&&p.item.sourceKind==="extracted-dwg"){const S=h.find(w=>w.label==="Target CAD layer")?.value.trim()??"",R=h.find(w=>w.label==="Source discipline")?.value.trim()??"";if(!(o==="company"?a.companyItems:[...p.projectId?a.projects[p.projectId]?.items??[]:[],...a.companyItems]).some(w=>{if(w.category!=="layer"||w.sourceKind!=="extracted-dwg"||w.reviewStatus!=="reviewed")return!1;const A=w.fields.find(x=>x.label==="CAD name")?.value.trim()??"",k=w.fields.find(x=>x.label==="Source discipline")?.value.trim()??"",M=R==="Shared"?k==="Shared":k==="Shared"||k===R;return S&&S.toUpperCase()!=="0"&&A.toLowerCase()===S.toLowerCase()&&M}))throw new Error("Approve a compatible non-zero CAD layer before approving this symbol. Layer 0 cannot be used for block placement.")}const y={...p.item,category:g,fields:h,scope:o,reviewStatus:"reviewed",canPromote:!1,...o==="project"?{projectId:p.projectId,projectName:p.projectName}:{projectId:void 0,projectName:void 0}};let f=a.companyItems,m=a.projects;if(o==="company")f=[...a.companyItems.filter(S=>S.id!==y.id),y];else{const S=p.projectId,R=p.projectName;if(!S||!R)throw new Error("The isolated project scope is not available for this mapping.");const D=a.projects[S]??{projectName:R,defaults:{},items:[]};m={...a.projects,[S]:{...D,projectName:R,items:[...D.items.filter(C=>C.id!==y.id),y]}}}const v=a.reviewCandidates.map(S=>S.id===s?{...S,status:"approved"}:S),E=o==="company"?"Legends Library":`isolated ${p.projectName} library`;return{...a,companyItems:f,projects:m,reviewCandidates:v,auditTrail:[$s("Source mapping approved",`${g} mapping ${p.item.name} was approved to ${E}.`,p.projectName),...a.auditTrail]}}const ju={EQUIP:{layerName:"EQUIP",fallbackCategory:"equipment"},F_EQUIP:{layerName:"f_Equip",fallbackCategory:"equipment"},F_INST:{layerName:"f_Inst",fallbackCategory:"instrument"},F_PIPE_INLINE:{layerName:"f_Pipe_Inline",fallbackCategory:"inline component"}};function Lu(a,s){return a.item.fields.find(o=>o.label===s)?.value.trim()??""}function Tx(a,s,o){return[...a.filter(l=>l.label!==s),{label:s,value:o}]}function Ax(a){const l=Lu(a,"Extracted details").match(/(?:^|;)sourceLayer=([^;]*)/i)?.[1]??Lu(a,"Source insert layer(s)");return[...new Set(l.split(",").map(i=>i.trim().toUpperCase()).filter(Boolean))]}function _s(a){return a.fields.find(s=>s.label==="CAD name")?.value.trim()??""}function Dx(a){return a.fields.find(s=>s.label==="Source drawing ID")?.value.trim()??""}function Cm(a){return a.fields.find(s=>s.label==="Extracted details")?.value.trim()??""}function tb(a){return a.fields.find(s=>s.label==="Source discipline")?.value.trim()??""}function Cx(a,s){return a.category==="layer"&&a.sourceKind==="extracted-dwg"&&a.reviewStatus==="reviewed"&&a.scope==="company"&&_s(a).toUpperCase()===s.toUpperCase()&&tb(a).toUpperCase()==="SHARED"}function Nx(a,s,o){const l=new Set(s),i={unsupportedLayer:0,ambiguousLayer:0,missingAsset:0,missingLayer:0,invalidCandidate:0},p=a.reviewCandidates.filter(E=>E.status==="needs-review"&&E.proposedScope==="company"&&l.has(E.sourceGroup)),g=new Map,h=[];for(const E of p){if(E.item.category!=="symbol"||E.item.sourceKind!=="extracted-dwg")continue;const S=Ax(E);if(S.length!==1){i.ambiguousLayer+=S.length>1?1:0,i.unsupportedLayer+=S.length===0?1:0;continue}const R=S[0].toUpperCase(),D=ju[R];if(!D){i.unsupportedLayer+=1;continue}const C=Lu(E,"Block asset ID");if(!C||!o.has(C)){i.missingAsset+=1;continue}const w=`${E.sourceGroup}|${R}`;g.set(w,{sourceId:E.sourceGroup,layerName:D.layerName}),h.push({candidateId:E.id,sourceId:E.sourceGroup,layerKey:w,fallbackCategory:D.fallbackCategory,blockAssetId:C})}let y=a;const f=new Map;let m=0;for(const[E,S]of g){const R=y.companyItems.find(w=>w.category==="layer"&&w.sourceKind==="extracted-dwg"&&w.reviewStatus==="reviewed"&&Dx(w)===S.sourceId&&_s(w).toUpperCase()===S.layerName.toUpperCase());if(R){const w={...R,fields:Tx(R.fields,"Source discipline","Shared")};y={...y,companyItems:y.companyItems.map(A=>A.id===R.id?w:A),reviewCandidates:y.reviewCandidates.map(A=>A.id===R.id?{...A,item:w}:A)},tb(R).toUpperCase()!=="SHARED"&&(m+=1),f.set(E,_s(w));continue}const D=y.reviewCandidates.find(w=>w.status==="needs-review"&&w.proposedScope==="company"&&w.sourceGroup===S.sourceId&&w.item.category==="layer"&&w.item.sourceKind==="extracted-dwg"&&_s(w.item).toUpperCase()===S.layerName.toUpperCase()),C=y.companyItems.find(w=>Cx(w,S.layerName));if(C){const w=D?Cm(D.item):"",A=Cm(C);if(!D||w&&w===A){f.set(E,_s(C));continue}i.invalidCandidate+=1;continue}if(!D){i.missingLayer+=1;continue}try{y=ki(y,D.id,"company",[{label:"Source discipline",value:"Shared"}]);const w=y.companyItems.find(k=>k.id===D.item.id),A=_s(w||D.item);f.set(E,A),m+=1}catch{i.invalidCandidate+=1}}let v=0;for(const E of h){const S=f.get(E.layerKey);if(!S){i.missingLayer+=1;continue}try{y=ki(y,E.candidateId,"company",[{label:"Source discipline",value:"Shared"},{label:"Fallback category",value:E.fallbackCategory},{label:"Target CAD layer",value:S}]),v+=1}catch{i.invalidCandidate+=1}}return(m||v)&&(y={...y,auditTrail:[$s("Categorized CAD source batch approved",`${m} placement layer(s) and ${v} layer-matched symbol(s) approved for shared PFD/P&ID use.`),...a.auditTrail]}),{library:y,approvedLayers:m,approvedSymbols:v,skipped:i}}function kx(a,s,o){const l=a.companyItems.find(m=>m.id===s),i=Object.entries(a.projects).find(([,m])=>m.items.some(v=>v.id===s)),p=l??i?.[1].items.find(m=>m.id===s);if(!p||p.reviewStatus!=="reviewed")throw new Error("The selected approved CAD mapping is no longer available.");if(p.category!=="symbol"||p.sourceKind!=="extracted-dwg")throw new Error("Only reviewed extracted symbol mappings can be updated here.");const g=[...p.fields.filter(m=>!o.some(v=>v.label===m.label)),...o];if(g.find(m=>m.label==="Fallback category")?.value.trim().toLowerCase()==="valve")try{Is(g.find(m=>m.label==="Wipeout mask boundary")?.value??"")}catch(m){throw new Error(`A reviewed valve-body mask outline is required. ${m instanceof Error?m.message:"Check the X,Y point list."}`)}const h={...p,fields:g},y=l?a.companyItems.map(m=>m.id===s?h:m):a.companyItems,f=i?{...a.projects,[i[0]]:{...i[1],items:i[1].items.map(m=>m.id===s?h:m)}}:a.projects;return{...a,companyItems:y,projects:f,auditTrail:[$s("Reviewed valve mask updated",`The approved symbol mapping ${p.name} received a reviewed Wipeout mask outline.`,p.projectName),...a.auditTrail]}}function Rx(a,s){const o=a.reviewCandidates.find(l=>l.id===s);if(!o||o.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");return{...a,reviewCandidates:a.reviewCandidates.map(l=>l.id===s?{...l,status:"dismissed"}:l),auditTrail:[$s("Source mapping dismissed",`${o.item.category} mapping ${o.item.name} was dismissed from the review queue.`,o.projectName),...a.auditTrail]}}function jx(a,s,o,l,i){if(!s.trim()||!o.trim())throw new Error("Choose a project before saving its title-block override.");const p=a.projects[s]??{defaults:{},items:[]},g={...p.defaults,[l]:i},h=[...a.projects[s]?.items??[],...a.companyItems].find(v=>v.category==="titleBlock"&&v.reviewStatus==="reviewed"&&(v.sheetSize===i||v.fields.some(E=>E.label==="Sheet size"&&E.value===i)));if(!h)throw new Error(`Approve a title-block mapping for ${i} before saving this project default.`);const y=`project-default-${l.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,f={...h,id:y,name:`${i} · ${l} project default`,summary:`Project-only choice for ${l}. The company default remains ${a.companyDefaults[l]}.`,scope:"project",projectId:s,projectName:o,canPromote:!1,fields:[...h.fields,{label:"Override purpose",value:l},{label:"Project choice",value:i},{label:"Company default",value:a.companyDefaults[l]}]};return{...a,projects:{...a.projects,[s]:{projectName:o,defaults:g,items:[...p.items.filter(v=>v.id!==y),f]}},auditTrail:[$s("Project title-block override saved",`${l} set to ${i}; company default remains ${a.companyDefaults[l]}. Other project libraries are unchanged.`,o),...a.auditTrail]}}const Lx=(()=>{const a=new Uint32Array(256);for(let s=0;s<a.length;s+=1){let o=s;for(let l=0;l<8;l+=1)o=o&1?3988292384^o>>>1:o>>>1;a[s]=o>>>0}return a})();function Ox(a){let s=4294967295;for(const o of a)s=Lx[(s^o)&255]^s>>>8;return(s^4294967295)>>>0}function fu(a,s){const o=new Uint8Array(a);return s(new DataView(o.buffer)),o}function ab(a){if(a.length>65535)throw new Error("The local ZIP cannot contain more than 65,535 files.");const s=new TextEncoder,o=[],l=[];let i=0,p=0;for(const f of a){const m=s.encode(f.path),v=Ox(f.content),E=fu(30+m.length,R=>{R.setUint32(0,67324752,!0),R.setUint16(4,20,!0),R.setUint16(6,2048,!0),R.setUint16(8,0,!0),R.setUint16(10,0,!0),R.setUint16(12,33,!0),R.setUint32(14,v,!0),R.setUint32(18,f.content.length,!0),R.setUint32(22,f.content.length,!0),R.setUint16(26,m.length,!0),R.setUint16(28,0,!0),new Uint8Array(R.buffer,30,m.length).set(m)});o.push(E,f.content);const S=fu(46+m.length,R=>{R.setUint32(0,33639248,!0),R.setUint16(4,20,!0),R.setUint16(6,20,!0),R.setUint16(8,2048,!0),R.setUint16(10,0,!0),R.setUint16(12,0,!0),R.setUint16(14,33,!0),R.setUint32(16,v,!0),R.setUint32(20,f.content.length,!0),R.setUint32(24,f.content.length,!0),R.setUint16(28,m.length,!0),R.setUint16(30,0,!0),R.setUint16(32,0,!0),R.setUint16(34,0,!0),R.setUint16(36,0,!0),R.setUint32(38,0,!0),R.setUint32(42,i,!0),new Uint8Array(R.buffer,46,m.length).set(m)});l.push(S),p+=S.length,i+=E.length+f.content.length}const g=fu(22,f=>{f.setUint32(0,101010256,!0),f.setUint16(4,0,!0),f.setUint16(6,0,!0),f.setUint16(8,a.length,!0),f.setUint16(10,a.length,!0),f.setUint32(12,p,!0),f.setUint32(16,i,!0),f.setUint16(20,0,!0)}),y=[...o,...l,g].map(f=>{const m=new ArrayBuffer(f.byteLength);return new Uint8Array(m).set(f),m});return new Blob(y,{type:"application/zip"})}function _x(a,s,o){return a.filter(l=>(l.discipline===s||l.discipline==="Shared")&&(!o||l.category==="company-standard"||l.projectLabel===o))}const Px="pid-mapping-studio-local-cad-library",qx=3,hn="source-drawings",gn="extracted-block-assets",hs="project-title-blocks",nb=100*1024*1024;function Ix(a,s){if(!/\.dwg$/i.test(a.trim()))throw new Error("Upload a standalone AutoCAD DWG title block. Save a DWT as DWG first.");if(s.byteLength>nb)throw new Error("The project title block is larger than the 100 MB local upload limit.");const o=new TextDecoder().decode(s.subarray(0,6));if(!/^AC10\d{2}$/.test(o))throw new Error("This file does not have a recognized AutoCAD DWG header.")}function an(){return typeof indexedDB>"u"?Promise.reject(new Error("This browser does not support local drawing-library storage.")):new Promise((a,s)=>{const o=indexedDB.open(Px,qx);o.onupgradeneeded=()=>{const l=o.result;l.objectStoreNames.contains(hn)||l.createObjectStore(hn,{keyPath:"id"}),l.objectStoreNames.contains(gn)||l.createObjectStore(gn,{keyPath:"id"}),l.objectStoreNames.contains(hs)||l.createObjectStore(hs,{keyPath:"projectId"})},o.onsuccess=()=>a(o.result),o.onerror=()=>s(o.error??new Error("The local drawing library could not be opened.")),o.onblocked=()=>s(new Error("The local drawing library is busy in another browser tab. Close the other tab and try again."))})}async function Ou(){const a=await an();try{return await new Promise((s,o)=>{const i=a.transaction(hn,"readonly").objectStore(hn).getAll();i.onsuccess=()=>{const p=i.result;s(p.map(({id:g,label:h,category:y,discipline:f,format:m,bytes:v,projectLabel:E})=>({id:g,label:h,category:y,discipline:f??"Shared",format:m??"DWG",bytes:v,...E?{projectLabel:E}:{}})).sort((g,h)=>g.label.localeCompare(h.label)))},i.onerror=()=>o(i.error??new Error("The local drawing library could not be read."))})}finally{a.close()}}async function Uo(a){const s=await an();try{return await new Promise((o,l)=>{const i=s.transaction(hn,"readonly").objectStore(hn).get(a);i.onsuccess=()=>{const p=i.result;if(!p){l(new Error("An approved mapping refers to a source DWG that is no longer in the local library."));return}o(new Uint8Array(p.content))},i.onerror=()=>l(i.error??new Error("The local source drawing could not be read."))})}finally{s.close()}}async function _u(a,s=!1){if(!a.length)return;const o=await an();try{await new Promise((l,i)=>{const p=o.transaction(gn,"readwrite"),g=p.objectStore(gn);for(const h of a){const y=g.get(h.id);y.onsuccess=()=>{const f=y.result;if(s&&f)return;const m={id:h.id,sourceId:h.sourceId,blockName:h.blockName,content:h.content.slice().buffer,format:h.format??f?.format??"DWG",...h.previewSvg===null?{}:h.previewSvg!==void 0?{previewSvg:h.previewSvg}:f?.previewSvg?{previewSvg:f.previewSvg}:{},...h.nearbyLabels!==void 0?{nearbyLabels:h.nearbyLabels}:f?.nearbyLabels?{nearbyLabels:f.nearbyLabels}:{},...h.labelMatchSkipped!==void 0?{labelMatchSkipped:h.labelMatchSkipped}:f?.labelMatchSkipped!==void 0?{labelMatchSkipped:f.labelMatchSkipped}:{},...h.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:h.labelMatchAmbiguous}:f?.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:f.labelMatchAmbiguous}:{},...h.sourcePlacements!==void 0?{sourcePlacements:h.sourcePlacements}:f?.sourcePlacements?{sourcePlacements:f.sourcePlacements}:{},...h.geometryDescriptor!==void 0?{geometryDescriptor:h.geometryDescriptor}:f?.geometryDescriptor?{geometryDescriptor:f.geometryDescriptor}:{}};g.put(m)}}p.oncomplete=()=>l(),p.onerror=()=>i(p.error??new Error("Extracted symbol blocks could not be saved locally.")),p.onabort=()=>i(p.error??new Error("Saving extracted symbol blocks was cancelled."))})}finally{o.close()}}async function Mx(){const a=await an();try{return await new Promise((s,o)=>{const l=a.transaction(gn,"readonly").objectStore(gn).getAllKeys();l.onsuccess=()=>s(new Set(l.result.map(String))),l.onerror=()=>o(l.error??new Error("Local block availability could not be checked."))})}finally{a.close()}}async function sb(a){const s=await an();try{return await new Promise((o,l)=>{const i=s.transaction(gn,"readonly").objectStore(gn).get(a);i.onsuccess=()=>{const p=i.result;if(!p){o({nearbyLabels:[],labelMatchSkipped:!1});return}o({format:p.format??"DWG",...p.previewSvg?{previewSvg:p.previewSvg}:{},nearbyLabels:p.nearbyLabels??[],labelMatchSkipped:p.labelMatchSkipped??!1,...p.labelMatchAmbiguous?{labelMatchAmbiguous:!0}:{},...p.sourcePlacements?{sourcePlacements:p.sourcePlacements}:{},...p.geometryDescriptor?{geometryDescriptor:p.geometryDescriptor}:{}})},i.onerror=()=>l(i.error??new Error("The local block preview could not be read."))})}finally{s.close()}}async function rb(a){const s=await an();try{return await new Promise((o,l)=>{const i=s.transaction(gn,"readonly").objectStore(gn).get(a);i.onsuccess=()=>{const p=i.result;if(!p){l(new Error("An approved symbol block is missing from this browser’s local CAD library. Re-import its extraction package."));return}o(new Uint8Array(p.content))},i.onerror=()=>l(i.error??new Error("The approved symbol block could not be read locally."))})}finally{s.close()}}async function ob(a){if(!a.trim())return null;const s=await an();try{return await new Promise((o,l)=>{const i=s.transaction(hs,"readonly").objectStore(hs).get(a);i.onsuccess=()=>o(i.result??null),i.onerror=()=>l(i.error??new Error("The project title block could not be read locally."))})}finally{s.close()}}async function Nm(a){const s=await ob(a);return s?{projectId:s.projectId,bytes:s.bytes,uploadedAt:s.uploadedAt}:null}async function $x(a){const s=await ob(a);return s?{projectId:s.projectId,bytes:s.bytes,uploadedAt:s.uploadedAt,content:new Uint8Array(s.content)}:null}async function Ux(a,s,o){if(!a.trim())throw new Error("Select a project before uploading its title block.");Ix(s,o);const l={projectId:a,bytes:o.byteLength,uploadedAt:new Date().toISOString(),content:o.slice().buffer},i=await an();try{await new Promise((p,g)=>{const h=i.transaction(hs,"readwrite");h.objectStore(hs).put(l),h.oncomplete=()=>p(),h.onerror=()=>g(h.error??new Error("The project title block could not be saved locally.")),h.onabort=()=>g(h.error??new Error("Saving the project title block was cancelled."))})}finally{i.close()}return{projectId:a,bytes:l.bytes,uploadedAt:l.uploadedAt}}async function Bx(a){if(!a.trim())return;const s=await an();try{await new Promise((o,l)=>{const i=s.transaction(hs,"readwrite");i.objectStore(hs).delete(a),i.oncomplete=()=>o(),i.onerror=()=>l(i.error??new Error("The project title block could not be removed locally.")),i.onabort=()=>l(i.error??new Error("Removing the project title block was cancelled."))})}finally{s.close()}}async function Fx(a){if(!a.length)return;const s=await an();try{await new Promise((o,l)=>{const i=s.transaction(hn,"readwrite"),p=i.objectStore(hn);for(const g of a){const h=g.content.slice().buffer,{content:y,...f}=g;p.put({...f,content:h,createdAt:new Date().toISOString()})}i.oncomplete=()=>o(),i.onerror=()=>l(i.error??new Error("The local drawing library could not be saved.")),i.onabort=()=>l(i.error??new Error("The local drawing library save was cancelled."))})}finally{s.close()}}async function zx(a,s){const o=await an();try{await new Promise((l,i)=>{const p=o.transaction(hn,"readwrite"),g=p.objectStore(hn),h=g.get(a);h.onsuccess=()=>{const y=h.result;if(!y){p.abort(),i(new Error("That source drawing is no longer in the local library."));return}g.put({...y,...s,projectLabel:s.projectLabel?.trim()||void 0})},h.onerror=()=>i(h.error??new Error("The source drawing could not be updated.")),p.oncomplete=()=>l(),p.onerror=()=>i(p.error??new Error("The source drawing update failed.")),p.onabort=()=>i(p.error??new Error("The source drawing update was cancelled."))})}finally{o.close()}}const Yx=String.raw`
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
`,Vx=Yx+String.raw`; Local CAD standards extractor. Run in Windows AutoCAD on each source drawing.
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
`;function Xx(a,s){return`SOURCE_${String(a+1).padStart(3,"0")}.${s==="DXF"?"dxf":"dwg"}`}async function Gx(a){if(a.length===0)throw new Error("There are no eligible local source drawings to package.");const s=[{path:"EXTRACT_CAD_STANDARDS.lsp",content:new TextEncoder().encode(Vx)},{path:"README_LOCAL_EXTRACTION.txt",content:new TextEncoder().encode(`LOCAL CAD STANDARDS EXTRACTION

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
`)}],o=await Promise.all(a.map(l=>Uo(l.id)));return a.forEach((l,i)=>{const p=l.format==="DXF"?kr(o[i]):null;s.push({path:Xx(i,l.format),content:p?.content??o[i]})}),ab(s)}function km(a,s,o){let l=0,i=0;const p=new Map([...o].map(([h,y])=>[h.toUpperCase(),y])),g=a.reviewCandidates.map(h=>{if(h.sourceGroup!==s||h.status!=="needs-review"||h.proposedScope!=="company"||h.item.category!=="symbol"||h.item.sourceKind!=="extracted-dwg")return h;const y=h.item.fields,f=y.find(D=>D.label==="Block name")?.value.trim()??"";if(!f)return h;const m=p.get(f.toUpperCase())?.sourcePlacements??[],v=[...new Set(m.map(D=>D.layer.trim()).filter(Boolean))];v.length&&(i+=1);const S=(y.find(D=>D.label==="Extracted details")?.value??"").split(";").filter(D=>!/^\s*sourceLayer=/i.test(D)).join(";"),R=[...y.filter(D=>!["Extracted details","Source insert layer(s)","Source insert rotation(s)"].includes(D.label)),{label:"Extracted details",value:S+(v.length?`;sourceLayer=${v.join(", ")}`:"")},...v.length?[{label:"Source insert layer(s)",value:v.join(", ")},{label:"Source insert rotation(s)",value:m.map(D=>`${D.rotationDegrees}° on ${D.layer} (${D.count})`).join("; ")}]:[]];return JSON.stringify(y)===JSON.stringify(R)?h:(l+=1,{...h,item:{...h.item,fields:R}})});return{library:l?{...a,reviewCandidates:g}:a,updatedRecords:l,recoveredSymbols:i}}class Hx{constructor(s){this._pointer=0,this._eof=!1,this._data=s}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const s={code:parseInt(this._data[this._pointer])};return this._pointer++,s.value=Rm(s.code,this._data[this._pointer].trim()),this._pointer++,s.code===0&&s.value==="EOF"&&(this._eof=!0),this.lastReadGroup=s,s}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const s={code:parseInt(this._data[this._pointer])};return s.value=Rm(s.code,this._data[this._pointer+1].trim()),s}rewind(s=1){this._pointer=this._pointer-s*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}function Rm(a,s){return a<=9?s:a>=10&&a<=59?parseFloat(s):a>=60&&a<=99?parseInt(s):a>=100&&a<=109?s:a>=110&&a<=149?parseFloat(s):a>=160&&a<=179?parseInt(s):a>=210&&a<=239?parseFloat(s):a>=270&&a<=289?parseInt(s):a>=290&&a<=299?Kx(s):a>=300&&a<=369?s:a>=370&&a<=389?parseInt(s):a>=390&&a<=399?s:a>=400&&a<=409?parseInt(s):a>=410&&a<=419?s:a>=420&&a<=429?parseInt(s):a>=430&&a<=439?s:a>=440&&a<=459?parseInt(s):a>=460&&a<=469?parseFloat(s):a>=470&&a<=481||a===999||a>=1e3&&a<=1009?s:a>=1010&&a<=1059?parseFloat(s):a>=1060&&a<=1071?parseInt(s):(console.log("WARNING: Group code does not have a defined type: %j",{code:a,value:s}),s)}function Kx(a){if(a==="0")return!1;if(a==="1")return!0;throw TypeError("String '"+a+"' cannot be cast to Boolean type")}const lb=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function Wx(a){return lb[a]}function Ze(a){const s={};a.rewind();let o=a.next(),l=o.code;if(s.x=o.value,l+=10,o=a.next(),o.code!=l)throw new Error("Expected code for point value to be "+l+" but got "+o.code+".");return s.y=o.value,l+=10,o=a.next(),o.code!=l?(a.rewind(),s):(s.z=o.value,s)}function la(a,s,o){switch(s.code){case 0:a.type=s.value;break;case 5:a.handle=s.value;break;case 6:a.lineType=s.value;break;case 8:a.layer=s.value;break;case 48:a.lineTypeScale=s.value;break;case 60:a.visible=s.value===0;break;case 62:a.colorIndex=s.value,a.color=Wx(Math.abs(s.value));break;case 67:a.inPaperSpace=s.value!==0;break;case 100:break;case 101:for(;s.code!=0;)s=o.next();o.rewind();break;case 330:a.ownerHandle=s.value;break;case 347:a.materialObjectHandle=s.value;break;case 370:a.lineweight=s.value;break;case 420:a.color=s.value;break;case 1e3:a.extendedData=a.extendedData||{},a.extendedData.customStrings=a.extendedData.customStrings||[],a.extendedData.customStrings.push(s.value);break;case 1001:a.extendedData=a.extendedData||{},a.extendedData.applicationName=s.value;break;default:return!1}return!0}class Zx{constructor(){this.ForEntityName="3DFACE"}parseEntity(s,o){const l={type:o.value,vertices:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 70:l.shape=(o.value&1)===1,l.hasContinuousLinetypePattern=(o.value&128)===128;break;case 10:l.vertices=Qx(s,o),o=s.lastReadGroup;break;default:la(l,o,s);break}o=s.next()}return l}}function Qx(a,s){var o=[],l=!1,i=!1,p=4;for(let h=0;h<=p;h++){for(var g={};!a.isEOF()&&!(s.code===0||i);){switch(s.code){case 10:case 11:case 12:case 13:if(l){i=!0;continue}g.x=s.value,l=!0;break;case 20:case 21:case 22:case 23:g.y=s.value;break;case 30:case 31:case 32:case 33:g.z=s.value;break;default:return o}s=a.next()}o.push(g),l=!1,i=!1}return a.rewind(),o}class Jx{constructor(){this.ForEntityName="ARC"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.center=Ze(s);break;case 40:l.radius=o.value;break;case 50:l.startAngle=Math.PI/180*o.value;break;case 51:l.endAngle=Math.PI/180*o.value,l.angleLength=l.endAngle-l.startAngle;break;case 210:l.extrusionDirectionX=o.value;break;case 220:l.extrusionDirectionY=o.value;break;case 230:l.extrusionDirectionZ=o.value;break;default:la(l,o,s);break}o=s.next()}return l}}class eS{constructor(){this.ForEntityName="ATTDEF"}parseEntity(s,o){var l={type:o.value,scale:1,textStyle:"STANDARD"};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 1:l.text=o.value;break;case 2:l.tag=o.value;break;case 3:l.prompt=o.value;break;case 7:l.textStyle=o.value;break;case 10:l.startPoint=Ze(s);break;case 11:l.endPoint=Ze(s);break;case 39:l.thickness=o.value;break;case 40:l.textHeight=o.value;break;case 41:l.scale=o.value;break;case 50:l.rotation=o.value;break;case 51:l.obliqueAngle=o.value;break;case 70:l.invisible=!!(o.value&1),l.constant=!!(o.value&2),l.verificationRequired=!!(o.value&4),l.preset=!!(o.value&8);break;case 71:l.backwards=!!(o.value&2),l.mirrored=!!(o.value&4);break;case 72:l.horizontalJustification=o.value;break;case 73:l.fieldLength=o.value;break;case 74:l.verticalJustification=o.value;break;case 100:break;case 210:l.extrusionDirectionX=o.value;break;case 220:l.extrusionDirectionY=o.value;break;case 230:l.extrusionDirectionZ=o.value;break;default:la(l,o,s);break}o=s.next()}return l}}class tS{constructor(){this.ForEntityName="CIRCLE"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.center=Ze(s);break;case 40:l.radius=o.value;break;case 50:l.startAngle=Math.PI/180*o.value;break;case 51:const i=Math.PI/180*o.value;i<l.startAngle?l.angleLength=i+2*Math.PI-l.startAngle:l.angleLength=i-l.startAngle,l.endAngle=i;break;default:la(l,o,s);break}o=s.next()}return l}}class aS{constructor(){this.ForEntityName="DIMENSION"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 2:l.block=o.value;break;case 10:l.anchorPoint=Ze(s);break;case 11:l.middleOfText=Ze(s);break;case 12:l.insertionPoint=Ze(s);break;case 13:l.linearOrAngularPoint1=Ze(s);break;case 14:l.linearOrAngularPoint2=Ze(s);break;case 15:l.diameterOrRadiusPoint=Ze(s);break;case 16:l.arcPoint=Ze(s);break;case 70:l.dimensionType=o.value;break;case 71:l.attachmentPoint=o.value;break;case 42:l.actualMeasurement=o.value;break;case 1:l.text=o.value;break;case 50:l.angle=o.value;break;default:la(l,o,s);break}o=s.next()}return l}}class nS{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.center=Ze(s);break;case 11:l.majorAxisEndPoint=Ze(s);break;case 40:l.axisRatio=o.value;break;case 41:l.startAngle=o.value;break;case 42:l.endAngle=o.value;break;case 2:l.name=o.value;break;default:la(l,o,s);break}o=s.next()}return l}}class sS{constructor(){this.ForEntityName="INSERT"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 2:l.name=o.value;break;case 41:l.xScale=o.value;break;case 42:l.yScale=o.value;break;case 43:l.zScale=o.value;break;case 10:l.position=Ze(s);break;case 50:l.rotation=o.value;break;case 70:l.columnCount=o.value;break;case 71:l.rowCount=o.value;break;case 44:l.columnSpacing=o.value;break;case 45:l.rowSpacing=o.value;break;case 210:l.extrusionDirection=Ze(s);break;default:la(l,o,s);break}o=s.next()}return l}}class rS{constructor(){this.ForEntityName="LINE"}parseEntity(s,o){const l={type:o.value,vertices:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.vertices.unshift(Ze(s));break;case 11:l.vertices.push(Ze(s));break;case 210:l.extrusionDirection=Ze(s);break;case 100:break;default:la(l,o,s);break}o=s.next()}return l}}class oS{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(s,o){const l={type:o.value,vertices:[]};let i=0;for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 38:l.elevation=o.value;break;case 39:l.depth=o.value;break;case 70:l.shape=(o.value&1)===1,l.hasContinuousLinetypePattern=(o.value&128)===128;break;case 90:i=o.value;break;case 10:l.vertices=lS(i,s);break;case 43:o.value!==0&&(l.width=o.value);break;case 210:l.extrusionDirectionX=o.value;break;case 220:l.extrusionDirectionY=o.value;break;case 230:l.extrusionDirectionZ=o.value;break;default:la(l,o,s);break}o=s.next()}return l}}function lS(a,s){if(!a||a<=0)throw Error("n must be greater than 0 verticies");const o=[];let l=!1,i=!1,p=s.lastReadGroup;for(let g=0;g<a;g++){const h={};for(;!s.isEOF()&&!(p.code===0||i);){switch(p.code){case 10:if(l){i=!0;continue}h.x=p.value,l=!0;break;case 20:h.y=p.value;break;case 30:h.z=p.value;break;case 40:h.startWidth=p.value;break;case 41:h.endWidth=p.value;break;case 42:p.value!=0&&(h.bulge=p.value);break;default:return s.rewind(),l&&o.push(h),s.rewind(),o}p=s.next()}o.push(h),l=!1,i=!1}return s.rewind(),o}class iS{constructor(){this.ForEntityName="MTEXT"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 3:l.text?l.text+=o.value:l.text=o.value;break;case 1:l.text?l.text+=o.value:l.text=o.value;break;case 10:l.position=Ze(s);break;case 11:l.directionVector=Ze(s);break;case 40:l.height=o.value;break;case 41:l.width=o.value;break;case 50:l.rotation=o.value;break;case 71:l.attachmentPoint=o.value;break;case 72:l.drawingDirection=o.value;break;default:la(l,o,s);break}o=s.next()}return l}}class cS{constructor(){this.ForEntityName="POINT"}parseEntity(s,o){const i={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:i.position=Ze(s);break;case 39:i.thickness=o.value;break;case 210:i.extrusionDirection=Ze(s);break;case 100:break;default:la(i,o,s);break}o=s.next()}return i}}class dS{constructor(){this.ForEntityName="VERTEX"}parseEntity(s,o){var l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.x=o.value;break;case 20:l.y=o.value;break;case 30:l.z=o.value;break;case 40:break;case 41:break;case 42:o.value!=0&&(l.bulge=o.value);break;case 70:l.curveFittingVertex=(o.value&1)!==0,l.curveFitTangent=(o.value&2)!==0,l.splineVertex=(o.value&8)!==0,l.splineControlPoint=(o.value&16)!==0,l.threeDPolylineVertex=(o.value&32)!==0,l.threeDPolylineMesh=(o.value&64)!==0,l.polyfaceMeshVertex=(o.value&128)!==0;break;case 50:break;case 71:l.faceA=o.value;break;case 72:l.faceB=o.value;break;case 73:l.faceC=o.value;break;case 74:l.faceD=o.value;break;default:la(l,o,s);break}o=s.next()}return l}}class uS{constructor(){this.ForEntityName="POLYLINE"}parseEntity(s,o){var l={type:o.value,vertices:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:break;case 20:break;case 30:break;case 39:l.thickness=o.value;break;case 40:break;case 41:break;case 70:l.shape=(o.value&1)!==0,l.includesCurveFitVertices=(o.value&2)!==0,l.includesSplineFitVertices=(o.value&4)!==0,l.is3dPolyline=(o.value&8)!==0,l.is3dPolygonMesh=(o.value&16)!==0,l.is3dPolygonMeshClosed=(o.value&32)!==0,l.isPolyfaceMesh=(o.value&64)!==0,l.hasContinuousLinetypePattern=(o.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:l.extrusionDirection=Ze(s);break;default:la(l,o,s);break}o=s.next()}return l.vertices=fS(s,o),l}}function fS(a,s){const o=new dS,l=[];for(;!a.isEOF();)if(s.code===0){if(s.value==="VERTEX")l.push(o.parseEntity(a,s)),s=a.lastReadGroup;else if(s.value==="SEQEND"){pS(a,s);break}}return l}function pS(a,s){const o={type:s.value};for(s=a.next();!a.isEOF()&&s.code!=0;)la(o,s,a),s=a.next();return o}class hS{constructor(){this.ForEntityName="SOLID"}parseEntity(s,o){const l={type:o.value,points:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.points[0]=Ze(s);break;case 11:l.points[1]=Ze(s);break;case 12:l.points[2]=Ze(s);break;case 13:l.points[3]=Ze(s);break;case 210:l.extrusionDirection=Ze(s);break;default:la(l,o,s);break}o=s.next()}return l}}class gS{constructor(){this.ForEntityName="SPLINE"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.controlPoints||(l.controlPoints=[]),l.controlPoints.push(Ze(s));break;case 11:l.fitPoints||(l.fitPoints=[]),l.fitPoints.push(Ze(s));break;case 12:l.startTangent=Ze(s);break;case 13:l.endTangent=Ze(s);break;case 40:l.knotValues||(l.knotValues=[]),l.knotValues.push(o.value);break;case 70:(o.value&1)!=0&&(l.closed=!0),(o.value&2)!=0&&(l.periodic=!0),(o.value&4)!=0&&(l.rational=!0),(o.value&8)!=0&&(l.planar=!0),(o.value&16)!=0&&(l.planar=!0,l.linear=!0);break;case 71:l.degreeOfSplineCurve=o.value;break;case 72:l.numberOfKnots=o.value;break;case 73:l.numberOfControlPoints=o.value;break;case 74:l.numberOfFitPoints=o.value;break;case 210:l.normalVector=Ze(s);break;default:la(l,o,s);break}o=s.next()}return l}}class mS{constructor(){this.ForEntityName="TEXT"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.startPoint=Ze(s);break;case 11:l.endPoint=Ze(s);break;case 40:l.textHeight=o.value;break;case 41:l.xScale=o.value;break;case 50:l.rotation=o.value;break;case 1:l.text=o.value;break;case 72:l.halign=o.value;break;case 73:l.valign=o.value;break;default:la(l,o,s);break}o=s.next()}return l}}var wi={exports:{}},yS=wi.exports,jm;function bS(){return jm||(jm=1,(function(a){(function(s,o){a.exports?a.exports=o():s.log=o()})(yS,function(){var s=function(){},o="undefined",l=typeof window!==o&&typeof window.navigator!==o&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"],p={},g=null;function h(D,C){var w=D[C];if(typeof w.bind=="function")return w.bind(D);try{return Function.prototype.bind.call(w,D)}catch{return function(){return Function.prototype.apply.apply(w,[D,arguments])}}}function y(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function f(D){return D==="debug"&&(D="log"),typeof console===o?!1:D==="trace"&&l?y:console[D]!==void 0?h(console,D):console.log!==void 0?h(console,"log"):s}function m(){for(var D=this.getLevel(),C=0;C<i.length;C++){var w=i[C];this[w]=C<D?s:this.methodFactory(w,D,this.name)}if(this.log=this.debug,typeof console===o&&D<this.levels.SILENT)return"No console available for logging"}function v(D){return function(){typeof console!==o&&(m.call(this),this[D].apply(this,arguments))}}function E(D,C,w){return f(D)||v.apply(this,arguments)}function S(D,C){var w=this,A,k,M,x="loglevel";typeof D=="string"?x+=":"+D:typeof D=="symbol"&&(x=void 0);function j(ne){var le=(i[ne]||"silent").toUpperCase();if(!(typeof window===o||!x)){try{window.localStorage[x]=le;return}catch{}try{window.document.cookie=encodeURIComponent(x)+"="+le+";"}catch{}}}function L(){var ne;if(!(typeof window===o||!x)){try{ne=window.localStorage[x]}catch{}if(typeof ne===o)try{var le=window.document.cookie,ve=encodeURIComponent(x),me=le.indexOf(ve+"=");me!==-1&&(ne=/^([^;]+)/.exec(le.slice(me+ve.length+1))[1])}catch{}return w.levels[ne]===void 0&&(ne=void 0),ne}}function P(){if(!(typeof window===o||!x)){try{window.localStorage.removeItem(x)}catch{}try{window.document.cookie=encodeURIComponent(x)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function K(ne){var le=ne;if(typeof le=="string"&&w.levels[le.toUpperCase()]!==void 0&&(le=w.levels[le.toUpperCase()]),typeof le=="number"&&le>=0&&le<=w.levels.SILENT)return le;throw new TypeError("log.setLevel() called with invalid level: "+ne)}w.name=D,w.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},w.methodFactory=C||E,w.getLevel=function(){return M??k??A},w.setLevel=function(ne,le){return M=K(ne),le!==!1&&j(M),m.call(w)},w.setDefaultLevel=function(ne){k=K(ne),L()||w.setLevel(ne,!1)},w.resetLevel=function(){M=null,P(),m.call(w)},w.enableAll=function(ne){w.setLevel(w.levels.TRACE,ne)},w.disableAll=function(ne){w.setLevel(w.levels.SILENT,ne)},w.rebuild=function(){if(g!==w&&(A=K(g.getLevel())),m.call(w),g===w)for(var ne in p)p[ne].rebuild()},A=K(g?g.getLevel():"WARN");var ue=L();ue!=null&&(M=K(ue)),m.call(w)}g=new S,g.getLogger=function(C){if(typeof C!="symbol"&&typeof C!="string"||C==="")throw new TypeError("You must supply a name when creating a logger.");var w=p[C];return w||(w=p[C]=new S(C,g.methodFactory)),w};var R=typeof window!==o?window.log:void 0;return g.noConflict=function(){return typeof window!==o&&window.log===g&&(window.log=R),g},g.getLoggers=function(){return p},g.default=g,g})})(wi)),wi.exports}var vS=bS();const We=Ho(vS);We.setLevel("error");function ES(a){a.registerEntityHandler(Zx),a.registerEntityHandler(Jx),a.registerEntityHandler(eS),a.registerEntityHandler(tS),a.registerEntityHandler(aS),a.registerEntityHandler(nS),a.registerEntityHandler(sS),a.registerEntityHandler(rS),a.registerEntityHandler(oS),a.registerEntityHandler(iS),a.registerEntityHandler(cS),a.registerEntityHandler(uS),a.registerEntityHandler(hS),a.registerEntityHandler(gS),a.registerEntityHandler(mS)}class ib{constructor(){this._entityHandlers={},ES(this)}parse(s){return typeof s=="string"?this._parse(s):(console.error("Cannot read dxf source of type `"+typeof s),null)}registerEntityHandler(s){const o=new s;this._entityHandlers[o.ForEntityName]=o}parseSync(s){return this.parse(s)}parseStream(s){let o="";const l=this;return new Promise((i,p)=>{s.on("data",g=>{o+=g}),s.on("end",()=>{try{i(l._parse(o))}catch(g){p(g)}}),s.on("error",g=>{p(g)})})}_parse(s){const o={};let l=0;const i=s.split(/\r\n|\r|\n/g),p=new Hx(i);if(!p.hasNext())throw Error("Empty file");const g=this;let h;function y(){for(h=p.next();!p.isEOF();)if(h.code===0&&h.value==="SECTION"){if(h=p.next(),h.code!==2){console.error("Unexpected code %s after 0:SECTION",cb(h)),h=p.next();continue}h.value==="HEADER"?(We.debug("> HEADER"),o.header=f(),We.debug("<")):h.value==="BLOCKS"?(We.debug("> BLOCKS"),o.blocks=m(),We.debug("<")):h.value==="ENTITIES"?(We.debug("> ENTITIES"),o.entities=k(!1),We.debug("<")):h.value==="TABLES"?(We.debug("> TABLES"),o.tables=E(),We.debug("<")):h.value==="EOF"?We.debug("EOF"):We.warn("Skipping section '%s'",h.value)}else h=p.next()}function f(){let j=null,L=null;const P={};for(h=p.next();;){if(cn(h,0,"ENDSEC")){j&&(P[j]=L);break}else h.code===9?(j&&(P[j]=L),j=h.value):h.code===10?L={x:h.value}:h.code===20?L.y=h.value:h.code===30?L.z=h.value:L=h.value;h=p.next()}return h=p.next(),P}function m(){const j={};for(h=p.next();h.value!=="EOF"&&!cn(h,0,"ENDSEC");)if(cn(h,0,"BLOCK")){We.debug("block {");const L=v();We.debug("}"),x(L),L.name?j[L.name]=L:We.error('block with handle "'+L.handle+'" is missing a name.')}else Os(h),h=p.next();return j}function v(){const j={};for(h=p.next();h.value!=="EOF";){switch(h.code){case 1:j.xrefPath=h.value,h=p.next();break;case 2:j.name=h.value,h=p.next();break;case 3:j.name2=h.value,h=p.next();break;case 5:j.handle=h.value,h=p.next();break;case 8:j.layer=h.value,h=p.next();break;case 10:j.position=M(h),h=p.next();break;case 67:j.paperSpace=!!(h.value&&h.value==1),h=p.next();break;case 70:h.value!=0&&(j.type=h.value),h=p.next();break;case 100:h=p.next();break;case 330:j.ownerHandle=h.value,h=p.next();break;case 0:if(h.value=="ENDBLK")break;j.entities=k(!0);break;default:Os(h),h=p.next()}if(cn(h,0,"ENDBLK")){h=p.next();break}}return j}function E(){const j={};for(h=p.next();h.value!=="EOF"&&!cn(h,0,"ENDSEC");)cn(h,0,"TABLE")?(h=p.next(),A[h.value]?(We.debug(h.value+" Table {"),j[A[h.value].tableName]=R(h),We.debug("}")):We.debug("Unhandled Table "+h.value)):h=p.next();return h=p.next(),j}const S="ENDTAB";function R(j){const L=A[j.value],P={};let K=0;for(h=p.next();!cn(h,0,S);)switch(h.code){case 5:P.handle=h.value,h=p.next();break;case 330:P.ownerHandle=h.value,h=p.next();break;case 100:h.value==="AcDbSymbolTable"||Os(h),h=p.next();break;case 70:K=h.value,h=p.next();break;case 0:h.value===L.dxfSymbolName?P[L.tableRecordsProperty]=L.parseTableRecords():(Os(h),h=p.next());break;default:Os(h),h=p.next()}const ue=P[L.tableRecordsProperty];if(ue){let ne=(()=>{if(ue.constructor===Array)return ue.length;if(typeof ue=="object")return Object.keys(ue).length})();K!==ne&&We.warn("Parsed "+ne+" "+L.dxfSymbolName+"'s but expected "+K)}return h=p.next(),P}function D(){const j=[];let L={};for(We.debug("ViewPort {"),h=p.next();!cn(h,0,S);)switch(h.code){case 2:L.name=h.value,h=p.next();break;case 10:L.lowerLeftCorner=M(h),h=p.next();break;case 11:L.upperRightCorner=M(h),h=p.next();break;case 12:L.center=M(h),h=p.next();break;case 13:L.snapBasePoint=M(h),h=p.next();break;case 14:L.snapSpacing=M(h),h=p.next();break;case 15:L.gridSpacing=M(h),h=p.next();break;case 16:L.viewDirectionFromTarget=M(h),h=p.next();break;case 17:L.viewTarget=M(h),h=p.next();break;case 42:L.lensLength=h.value,h=p.next();break;case 43:L.frontClippingPlane=h.value,h=p.next();break;case 44:L.backClippingPlane=h.value,h=p.next();break;case 45:L.viewHeight=h.value,h=p.next();break;case 50:L.snapRotationAngle=h.value,h=p.next();break;case 51:L.viewTwistAngle=h.value,h=p.next();break;case 79:L.orthographicType=h.value,h=p.next();break;case 110:L.ucsOrigin=M(h),h=p.next();break;case 111:L.ucsXAxis=M(h),h=p.next();break;case 112:L.ucsYAxis=M(h),h=p.next();break;case 110:L.ucsOrigin=M(h),h=p.next();break;case 281:L.renderMode=h.value,h=p.next();break;case 281:L.defaultLightingType=h.value,h=p.next();break;case 292:L.defaultLightingOn=h.value,h=p.next();break;case 330:L.ownerHandle=h.value,h=p.next();break;case 63:case 421:case 431:L.ambientColor=h.value,h=p.next();break;case 0:h.value==="VPORT"&&(We.debug("}"),j.push(L),We.debug("ViewPort {"),L={},h=p.next());break;default:Os(h),h=p.next();break}return We.debug("}"),j.push(L),j}function C(){const j={};let L={},P=0,K;for(We.debug("LType {"),h=p.next();!cn(h,0,"ENDTAB");)switch(h.code){case 2:L.name=h.value,K=h.value,h=p.next();break;case 3:L.description=h.value,h=p.next();break;case 73:P=h.value,P>0&&(L.pattern=[]),h=p.next();break;case 40:L.patternLength=h.value,h=p.next();break;case 49:L.pattern.push(h.value),h=p.next();break;case 0:We.debug("}"),P>0&&P!==L.pattern.length&&We.warn("lengths do not match on LTYPE pattern"),j[K]=L,L={},We.debug("LType {"),h=p.next();break;default:h=p.next()}return We.debug("}"),j[K]=L,j}function w(){const j={};let L={},P;for(We.debug("Layer {"),h=p.next();!cn(h,0,"ENDTAB");)switch(h.code){case 2:L.name=h.value,P=h.value,h=p.next();break;case 62:L.visible=h.value>=0,L.colorIndex=Math.abs(h.value),L.color=wS(L.colorIndex),h=p.next();break;case 70:L.frozen=(h.value&1)!=0||(h.value&2)!=0,h=p.next();break;case 0:h.value==="LAYER"&&(We.debug("}"),j[P]=L,We.debug("Layer {"),L={},P=void 0,h=p.next());break;default:Os(h),h=p.next();break}return We.debug("}"),j[P]=L,j}const A={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:D},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:C},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:w}};function k(j){const L=[],P=j?"ENDBLK":"ENDSEC";for(j||(h=p.next());;)if(h.code===0){if(h.value===P)break;const K=g._entityHandlers[h.value];if(K!=null){We.debug(h.value+" {");const ue=K.parseEntity(p,h);h=p.lastReadGroup,We.debug("}"),x(ue),L.push(ue)}else{We.warn("Unhandled entity "+h.value),h=p.next();continue}}else h=p.next();return P=="ENDSEC"&&(h=p.next()),L}function M(j){const L={};let P=j.code;if(L.x=j.value,P+=10,j=p.next(),j.code!=P)throw new Error("Expected code for point value to be "+P+" but got "+j.code+".");return L.y=j.value,P+=10,j=p.next(),j.code!=P?(p.rewind(),L):(L.z=j.value,L)}function x(j){if(!j)throw new TypeError("entity cannot be undefined or null");j.handle||(j.handle=l++)}return y(),o}}function cn(a,s,o){return a.code===s&&a.value===o}function Os(a){We.debug("unhandled group "+cb(a))}function cb(a){return a.code+":"+a.value}function wS(a){return lb[a]}const mi=360,Co=210,wr=16,xS="#78d8b0",SS=[1,0,0,1,0,0],TS=new Set(["0","PIPE_PRI","F_PIPE_PRI","PIPE_PRIMARY","F_PIPE_PRIMARY","PRIMARY PIPING"]);function AS(a){const s=String(a??"").trim().toUpperCase().replace(/\s+/g," ");return!s||TS.has(s)}function nf(a){return/\barrow\b/i.test(a.replace(/[_-]+/g," "))}function db(a){return nf(a)}function ya(a){if(!a||typeof a!="object")return null;const s=a;return typeof s.x=="number"&&Number.isFinite(s.x)&&typeof s.y=="number"&&Number.isFinite(s.y)?{x:s.x,y:s.y}:null}function ub(a,s){return{x:a[0]*s.x+a[2]*s.y+a[4],y:a[1]*s.x+a[3]*s.y+a[5]}}function DS(a,s){return[a[0]*s[0]+a[2]*s[1],a[1]*s[0]+a[3]*s[1],a[0]*s[2]+a[2]*s[3],a[1]*s[2]+a[3]*s[3],a[0]*s[4]+a[2]*s[5]+a[4],a[1]*s[4]+a[3]*s[5]+a[5]]}function Rt(a,s){return typeof a=="number"&&Number.isFinite(a)?a:s}function No(a){return Array.isArray(a)?a.map(ya).filter(s=>s!==null):[]}function Pu(a){const s=ya(a);return s?{...s,z:Rt(a.z,0)}:null}function CS(a,s,o){const l={},i=(h,y)=>{const f=Pu(y);f&&(l[h]=f)},p=(h,y)=>{Array.isArray(y)&&(l[h]=y.flatMap(f=>{const m=Pu(f);return m?[m]:[]}))},g=(h,y)=>{typeof y=="number"&&Number.isFinite(y)&&(l[h]=y)};if(a==="LINE")p("vertices",s.vertices);else if(a==="ARC"||a==="CIRCLE")i("center",s.center),g("radius",s.radius),a==="ARC"&&(g("startAngle",s.startAngle),g("endAngle",s.endAngle));else if(a==="LWPOLYLINE"||a==="POLYLINE")Array.isArray(s.vertices)&&(l.vertices=s.vertices.flatMap(h=>{if(!h||typeof h!="object")return[];const y=h;return typeof y.x!="number"||typeof y.y!="number"||!Number.isFinite(y.x)||!Number.isFinite(y.y)?[]:[{x:y.x,y:y.y,z:Rt(y.z,0),bulge:Rt(y.bulge,0)}]})),l.closed=s.shape===!0||(Number(s.shape)&1)===1;else if(a==="ELLIPSE")i("center",s.center),i("majorAxisEndPoint",s.majorAxisEndPoint),g("axisRatio",s.axisRatio),g("startAngle",s.startAngle),g("endAngle",s.endAngle);else if(a==="SPLINE"){p("fitPoints",s.fitPoints),p("controlPoints",s.controlPoints);for(const h of["degreeOfSplineCurve","closed","periodic","knots","weights"]){const y=s[h];(typeof y=="number"||typeof y=="boolean"||Array.isArray(y)&&y.every(f=>typeof f=="number"&&Number.isFinite(f)))&&(l[h]=y)}}else return null;return{type:a,transform:[...o],geometry:l}}function fb(a){return typeof a!="string"?"":a.replace(/\\P/gi," ").replace(/\\[A-Za-z][^;]*;/g,"").replace(/[{}]/g,"").replace(/\s+/g," ").trim()}function NS(a,s,o){return a.layer&&a.layer!=="0"?s.get(a.layer)??o:o}function kS(a){const s=Math.max(0,Math.min(16777215,Math.trunc(a))),o=`#${s.toString(16).padStart(6,"0")}`,l=s>>16&255,i=s>>8&255,p=s&255;return l+i+p<72?"#d5e1e8":o}function RS(a){const s=new Map;for(const o of Object.values(a.tables?.layer?.layers??{}))Number.isFinite(o.color)&&s.set(o.name,kS(o.color));return s}function jS(a,s,o,l){const i=l-o;if(!Number.isFinite(i))return[];const p=(i%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,g=Math.max(8,Math.min(96,Math.ceil(Math.abs(p)/(Math.PI/24))));return Array.from({length:g+1},(h,y)=>{const f=o+p*y/g;return{x:a.x+Math.cos(f)*s,y:a.y+Math.sin(f)*s}})}function LS(a,s){if(!Array.isArray(a))return[];const o=a.map(p=>{if(!p||typeof p!="object")return null;const g=p,h=ya(g);return h?{...h,bulge:Rt(g.bulge,0)}:null}).filter(p=>p!==null);if(o.length<2)return o.map(({x:p,y:g})=>({x:p,y:g}));const l=[{x:o[0].x,y:o[0].y}],i=s?o.length:o.length-1;for(let p=0;p<i;p+=1){const g=o[p],h=o[(p+1)%o.length],y=g.bulge,f=h.x-g.x,m=h.y-g.y,v=Math.hypot(f,m);if(Math.abs(y)<1e-5||v<1e-8){l.push({x:h.x,y:h.y});continue}const E=4*Math.atan(y),S=v*(1-y*y)/(4*y),R={x:(g.x+h.x)/2-m/v*S,y:(g.y+h.y)/2+f/v*S},D=Math.atan2(g.y-R.y,g.x-R.x),C=Math.max(4,Math.min(48,Math.ceil(Math.abs(E)/(Math.PI/16))));for(let w=1;w<=C;w+=1){const A=D+E*w/C;l.push({x:R.x+Math.cos(A)*Math.hypot(g.x-R.x,g.y-R.y),y:R.y+Math.sin(A)*Math.hypot(g.x-R.x,g.y-R.y)})}}return s&&l.length>1&&l.pop(),l}function OS(a,s){const o=ya(a.position)??{x:0,y:0},l=ya(s.position)??{x:0,y:0},i=Rt(a.xScale,1),p=Rt(a.yScale,1),g=Rt(a.rotation,0)*Math.PI/180,h=Math.cos(g),y=Math.sin(g),f=h*i,m=y*i,v=-y*p,E=h*p;return[f,m,v,E,o.x-f*l.x-v*l.y,o.y-m*l.x-E*l.y]}function is(a,s,o,l,i){const p=s.map(g=>ub(l,g));p.length>=2&&a.paths.push({points:p,closed:o,color:i})}function pb(a,s,o,l,i,p,g=new Set,h=0){if(h>8){p.unsupported.add("nested block depth");return}for(const y of a){if(!y)continue;const f=y,m=String(f.type??"").toUpperCase();if(!m||f.visible===!1)continue;const v=NS(f,o,i);if(m==="INSERT"){const S=String(f.name??""),R=Object.entries(s).find(([A])=>A.toUpperCase()===S.toUpperCase())?.[1];if(!R||g.has(S.toUpperCase())){p.unsupported.add(m);continue}p.nestedInsertCount+=1;const D=DS(l,OS(f,R)),C=f.layer&&f.layer!=="0"?o.get(f.layer)??i:i,w=new Set(g);w.add(S.toUpperCase()),pb(R.entities??[],s,o,D,C,p,w,h+1);continue}const E=CS(m,f,l);if(E&&p.primitives.push(E),m==="LINE"){is(p,No(f.vertices),!1,l,v);continue}if(m==="CIRCLE"||m==="ARC"){const S=ya(f.center),R=Rt(f.radius,0);if(!S||R<=0)continue;const D=m==="ARC"?Rt(f.startAngle,0):0,C=m==="ARC"?Rt(f.endAngle,Math.PI*2):Math.PI*2;is(p,jS(S,R,D,C),m==="CIRCLE",l,v);continue}if(m==="ELLIPSE"){const S=ya(f.center),R=ya(f.majorAxisEndPoint),D=Rt(f.axisRatio,1);if(!S||!R||D<=0)continue;const C=Rt(f.startAngle,0),w=Rt(f.endAngle,Math.PI*2)-C;if(!Number.isFinite(w))continue;const A=(w%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,k=C+A,M=Math.max(12,Math.min(96,Math.ceil((k-C)*24))),x=Array.from({length:M+1},(j,L)=>{const P=C+(k-C)*L/M;return{x:S.x+R.x*Math.cos(P)-R.y*D*Math.sin(P),y:S.y+R.y*Math.cos(P)+R.x*D*Math.sin(P)}});is(p,x,Math.abs(k-C-Math.PI*2)<.03,l,v);continue}if(m==="LWPOLYLINE"||m==="POLYLINE"){const S=f.shape===!0||(Number(f.shape)&1)===1,R=LS(f.vertices,S);is(p,R,S,l,v);continue}if(m==="SOLID"||m==="3DFACE"){const S=No(f.points??f.vertices);is(p,S,!0,l,v);continue}if(m==="SPLINE"){const S=No(f.fitPoints).length>=2?No(f.fitPoints):No(f.controlPoints);is(p,S,f.closed===!0,l,v),S.length&&p.unsupported.add("SPLINE approximation");continue}if(m==="TEXT"||m==="MTEXT"||m==="ATTDEF"){const S=fb(f.text),R=ya(f.startPoint)??ya(f.position);if(!R||!S)continue;const D=ub(l,R),C=Math.max(1,Rt(f.textHeight,Rt(f.height,2.5))),w=Math.max(Math.hypot(l[0],l[1]),Math.hypot(l[2],l[3]),.1);p.texts.push({point:D,text:S,height:C*w,rotation:Rt(f.rotation,0)-Math.atan2(l[1],l[0])*180/Math.PI,color:v});continue}if(m==="POINT"){const S=ya(f.position);S&&(is(p,[{x:S.x-.5,y:S.y},{x:S.x+.5,y:S.y}],!1,l,v),is(p,[{x:S.x,y:S.y-.5},{x:S.x,y:S.y+.5}],!1,l,v));continue}p.unsupported.add(m)}}function hb(a){const s=[...a.paths.flatMap(o=>o.points),...a.texts.map(o=>o.point)];return s.length?{minX:Math.min(...s.map(o=>o.x)),minY:Math.min(...s.map(o=>o.y)),maxX:Math.max(...s.map(o=>o.x)),maxY:Math.max(...s.map(o=>o.y))}:null}function _S(a){const s=hb(a);if(!s)return;const o=Math.max(s.maxX-s.minX,1e-6),l=Math.max(s.maxY-s.minY,1e-6),i=Math.min((mi-wr*2)/o,(Co-wr*2)/l),p=m=>wr+(m-s.minX)*i+(mi-wr*2-o*i)/2,g=m=>Co-wr-(m-s.minY)*i-(Co-wr*2-l*i)/2,h=m=>m.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;"),y=a.paths.map(m=>{const v=m.points.map((E,S)=>`${S?"L":"M"}${p(E.x).toFixed(2)} ${g(E.y).toFixed(2)}`);return m.closed&&v.push("Z"),`<path d="${v.join(" ")}" fill="none" stroke="${m.color}" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>`}).join(""),f=a.texts.map(m=>{const v=p(m.point.x),E=g(m.point.y),S=Math.max(4,Math.min(20,m.height*i));return`<text x="${v.toFixed(2)}" y="${E.toFixed(2)}" fill="${m.color}" font-family="Arial,sans-serif" font-size="${S.toFixed(2)}" transform="rotate(${-m.rotation.toFixed(2)} ${v.toFixed(2)} ${E.toFixed(2)})">${h(m.text)}</text>`}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${mi} ${Co}" role="img"><rect width="${mi}" height="${Co}" fill="#0d1722"/>${y}${f}</svg>`}function PS(a,s,o){const l=ya(o.position)??{x:0,y:0},i=ya(s.position)??{x:0,y:0},p=Rt(o.xScale,1),g=Rt(o.yScale,1),h=Rt(o.rotation,0)*Math.PI/180,y=Math.cos(h),f=Math.sin(h),m=[{x:a.minX,y:a.minY},{x:a.minX,y:a.maxY},{x:a.maxX,y:a.minY},{x:a.maxX,y:a.maxY}].map(v=>{const E=(v.x-i.x)*p,S=(v.y-i.y)*g;return{x:l.x+y*E-f*S,y:l.y+f*E+y*S}});return{minX:Math.min(...m.map(v=>v.x)),minY:Math.min(...m.map(v=>v.y)),maxX:Math.max(...m.map(v=>v.x)),maxY:Math.max(...m.map(v=>v.y))}}function qS(a){return ya(a.startPoint)??ya(a.position)}function IS(a){return fb(a.text)}function gb(a,s){return s.map(o=>o).filter(o=>o.type?.toUpperCase()==="INSERT"&&String(o.name??"").toUpperCase()===a.toUpperCase())}function MS(a){const s=new Map;for(const o of a){const l=String(o.layer??"0").trim()||"0",i=Rt(o.rotation,0),p=Math.round((i%360+360)%360),g=`${l.toUpperCase()}|${p}`,h=s.get(g);h?h.count+=1:s.set(g,{layer:l,rotationDegrees:p,count:1})}return[...s.values()].sort((o,l)=>o.layer.localeCompare(l.layer)||o.rotationDegrees-l.rotationDegrees)}function $S(a,s,o,l){const i=gb(a,l),p=i.filter(v=>!AS(v.layer)),g=i.length>0&&p.length===0;if(db(a))return{labels:[],skippedContextOnly:g};const h=l.map(v=>v).filter(v=>["TEXT","MTEXT","ATTRIB"].includes(String(v.type??"").toUpperCase())).map(v=>({text:IS(v),point:qS(v),height:Math.max(1,Rt(v.textHeight,Rt(v.height,2.5)))})).filter(v=>!!(v.text&&v.point)&&!nf(v.text)),y=[];for(const v of p){const E=PS(o,s,v),S=(E.minY+E.maxY)/2,R=Math.max(E.maxX-E.minX,1),D=Math.max(E.maxY-E.minY,1),w=h.map(P=>{const K=P.point.x-E.maxX,ue=Math.abs(P.point.y-S),ne=Math.max(R*8,P.height*40,30),le=Math.max(D*1.1,P.height*7);return{...P,dx:K,dy:ue,score:Math.max(0,K)+ue*1.75,maxGap:ne,maxVertical:le}}).filter(P=>P.dx>=-P.height*.5&&P.dx<=P.maxGap&&P.dy<=P.maxVertical).filter(P=>P.dx>=0).sort((P,K)=>P.score-K.score),A=w.length?w:h.map(P=>({...P,dx:P.point.x-E.maxX,dy:Math.abs(P.point.y-S),score:Math.hypot(P.point.x-(E.minX+E.maxX)/2,P.point.y-S),maxGap:Math.max(R*10,P.height*50,40),maxVertical:Math.max(D*2,P.height*10)})).filter(P=>P.score<=Math.max(R*8,D*10,P.height*60)).sort((P,K)=>P.score-K.score),k=A[0];if(!k)continue;const M=Math.max(k.height*2,R*.04,.5),x=Math.max(k.height*7,D*.8),j=A.filter(P=>Math.abs(P.point.x-k.point.x)<=M&&Math.abs(P.point.y-k.point.y)<=x).sort((P,K)=>K.point.y-P.point.y).slice(0,8),L=[...new Set(j.map(P=>P.text))].join(" · ");L&&y.push({text:L,score:k.score})}const f=new Map;for(const v of y){const E=v.text.toLowerCase().replace(/\s+/g," ").trim(),S=f.get(E);(S===void 0||v.score<S.score)&&f.set(E,v)}const m=p.length>1&&f.size>1;return{labels:m?[]:[...f.values()].sort((v,E)=>v.score-E.score).slice(0,4).map(v=>v.text),skippedContextOnly:g,...m?{ambiguous:!0}:{}}}function Ri(a,s){let o;try{o=new ib().parseSync(a)}catch(g){const h=g instanceof Error?g.message:"Unknown DXF parser error";throw new Error(`The overview DXF could not be read: ${h}`)}if(!o?.blocks||!Array.isArray(o.entities))throw new Error("The overview DXF does not contain readable block and model-space data.");const l=RS(o),i=new Map(Object.entries(o.blocks).map(([g,h])=>[g.toUpperCase(),h])),p=new Map;for(const g of new Set(s)){const h=i.get(g.toUpperCase());if(!h||g.startsWith("*"))continue;const y={paths:[],texts:[],unsupported:new Set,primitives:[],nestedInsertCount:0};pb(h.entities??[],o.blocks,l,SS,xS,y,new Set([h.name.toUpperCase()]));const f=hb(y),m=y.paths.flatMap(M=>M.points),v=m.length?{minX:Math.min(...m.map(M=>M.x)),minY:Math.min(...m.map(M=>M.y)),maxX:Math.max(...m.map(M=>M.x)),maxY:Math.max(...m.map(M=>M.y))}:null,E=v?v.maxX-v.minX:null,S=v?v.maxY-v.minY:null,R=y.primitives.reduce((M,x)=>(M[x.type]=(M[x.type]??0)+1,M),{}),D=o.header?.$INSUNITS,C={schemaVersion:1,blockName:g,unitsCode:typeof D=="number"&&Number.isInteger(D)?D:null,basePoint:Pu(h.position)??{x:0,y:0,z:0},bounds:v,width:E,height:S,aspectRatio:E!==null&&S!==null&&S>0?E/S:null,primitiveCounts:R,primitives:y.primitives,nestedInsertCount:y.nestedInsertCount,unsupportedEntities:[...y.unsupported].sort(),transformPolicy:{allowedRotationsDegrees:null,mirrorAllowed:null,uniformScalingAllowed:null,nonUniformScalingAllowed:null,status:"UNSPECIFIED_REQUIRES_REVIEW"}},w=_S(y),A=MS(gb(g,o.entities)),k=f?$S(g,h,f,o.entities):{labels:[],skippedContextOnly:!1};p.set(g,{...w?{previewSvg:w}:{},geometryDescriptor:C,nearbyLabels:k.labels,...k.skippedContextOnly?{labelMatchSkipped:!0}:{},...k.ambiguous?{labelMatchAmbiguous:!0}:{},...A.length?{sourcePlacements:A}:{}})}return p}const lt=(a,s)=>a.find(o=>o.code===s)?.value.trim()??"",ra=a=>lt(a,0).toUpperCase(),xr=a=>lt(a,ra(a)==="DIMSTYLE"?105:5).toUpperCase(),Ln=(...a)=>{const s=[];for(let o=0;o<a.length;o+=2)s.push({code:Number(a[o]),value:String(a[o+1])});return s},Lm=a=>a>=330&&a<=369||a>=390&&a<=399||a===480||a===481||a===1005,pu=a=>["DICTIONARY","ACDBDICTIONARYWDFLT"].includes(ra(a)),US=new Set(["BLOCK","ENDBLK","LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE","VERTEX","SEQEND","SPLINE","POINT","SOLID","TRACE","3DFACE","TEXT","MTEXT","ATTDEF","ATTRIB","INSERT","HATCH","DIMENSION","LEADER","TOLERANCE"]),BS=["VPORT","LTYPE","LAYER","STYLE","VIEW","UCS","APPID","DIMSTYLE","BLOCK_RECORD"];function On(a){const s=[];for(const o of a){if(o.code===0&&s.push([]),!s.length)throw new Error("Invalid DXF record boundary.");s[s.length-1].push(o)}return s}function FS(a){let s=0;return a.filter(o=>o.code===102&&o.value.trim()==="{BLKREFS"?(s=1,!1):s?(o.code===102&&o.value.trim().startsWith("{")&&s++,o.code===102&&o.value.trim()==="}"&&s--,!1):!0)}class mb{sections=new Map;tables=new Map;blocks=new Map;modelRecords;text;objects;recordsByHandle=new Map;blockForRecord=new Map;tableForRecord=new Map;tableHandles=new Set;maxHandle=0;constructor(s){const o=kr(s);let l="";for(let m=0;m<o.content.length;m+=16384)l+=String.fromCharCode(...o.content.subarray(m,m+16384));this.text=l;const i=l.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;i.length&&i.at(-1)==="";)i.pop();if(i.length%2)throw new Error("DXF has an incomplete group-code/value pair.");const p=[];for(let m=0;m<i.length;m+=2){const v=Number(i[m].trim());if(!Number.isInteger(v))throw new Error("DXF has an invalid group code.");p.push({code:v,value:i[m+1]})}let g="";for(let m=0;m<p.length;m++){const v=p[m];if(v.code===0&&v.value.trim()==="SECTION"){if(g||p[m+1]?.code!==2)throw new Error("Invalid DXF section.");if(g=p[++m].value.trim().toUpperCase(),this.sections.has(g))throw new Error("Duplicate DXF section.");this.sections.set(g,[])}else v.code===0&&v.value.trim()==="ENDSEC"?g="":g&&this.sections.get(g).push(v)}if(g||!this.sections.has("BLOCKS")||!this.sections.has("ENTITIES"))throw new Error("A complete ASCII source DXF with BLOCKS and ENTITIES is required.");const h=On(this.sections.get("TABLES")??[]);let y;for(const m of h)if(ra(m)==="TABLE")y={name:lt(m,2).toUpperCase(),header:m,records:[]},this.tables.set(y.name,y),this.tableHandles.add(xr(m));else if(ra(m)==="ENDTAB")y=void 0;else if(y){const v=ra(m)==="BLOCK_RECORD"?FS(m):m;y.records.push(v),this.tableForRecord.set(v,y)}let f;for(const m of On(this.sections.get("BLOCKS"))){if(ra(m)==="BLOCK"){const v=lt(m,2);if(f={name:v,records:[]},this.blocks.has(v.toUpperCase()))throw new Error("Duplicate source block definition.");this.blocks.set(v.toUpperCase(),f)}if(!f)throw new Error("DXF block definition is incomplete.");f.records.push(m),this.blockForRecord.set(m,f.name.toUpperCase()),ra(m)==="ENDBLK"&&(f=void 0)}if(f)throw new Error("DXF block definition has no ENDBLK.");this.modelRecords=On(this.sections.get("ENTITIES")),this.objects=On(this.sections.get("OBJECTS")??[]);for(const m of[...[...this.tables.values()].flatMap(v=>v.records),...[...this.blocks.values()].flatMap(v=>v.records),...this.modelRecords,...this.objects]){const v=xr(m);if(v){if(this.recordsByHandle.has(v))throw new Error("Duplicate DXF entity handle.");this.recordsByHandle.set(v,m),this.maxHandle=Math.max(this.maxHandle,parseInt(v,16)||0)}}for(const m of this.tableHandles)this.maxHandle=Math.max(this.maxHandle,parseInt(m,16)||0)}placements(){const s=new Map;for(const o of this.modelRecords){if(ra(o)!=="INSERT"||lt(o,67)==="1"||lt(o,410)&&lt(o,410).toUpperCase()!=="MODEL")continue;const l=lt(o,2);if(!l||l.startsWith("*"))continue;const i=this.blocks.get(l.toUpperCase())?.name??l,p=s.get(i)??new Set;p.add(lt(o,8)||"0"),s.set(i,p)}return s}layerDetails(s){const o=this.tables.get("LAYER")?.records.find(l=>lt(l,2).toUpperCase()===s.toUpperCase());return o?`color=${Math.abs(Number(lt(o,62)||"7"))};lineweight=${lt(o,370)||"-3"};linetype=${lt(o,6)||"CONTINUOUS"}`:null}nativeAssetInfo(){const s=this.modelRecords.filter(i=>!["ATTRIB","VERTEX","SEQEND"].includes(ra(i))),o=s.length?xr(s[0]):"";if(!s.length||!o)throw new Error("Native symbol DXF has no verifiable model-space geometry.");const l=this.tables.get("STYLE")?.records.flatMap(i=>[lt(i,3),lt(i,4)].filter(Boolean).flatMap(p=>/\.shx$/i.test(p)?[p]:p.includes(".")?[]:[`${p}.shx`]))??[];return{entityCount:s.length,firstHandle:o,requiredShapeFonts:[...new Set(l)]}}isolate(s){let o=this.maxHandle+1;const l=()=>(o++).toString(16).toUpperCase(),i=new Set,p=new Set,g=new Set,h=new Set,y=[],f=($,G=!0)=>{pu($)&&G&&!g.has($)&&(g.add($),i.has($)&&y.push($)),i.has($)||(i.add($),y.push($));const oe=this.tableForRecord.get($);oe&&h.add(oe)},m=$=>{const G=$.toUpperCase();if(p.has(G))return;const oe=this.blocks.get(G);if(!oe||G.startsWith("*MODEL_SPACE")||G.startsWith("*PAPER_SPACE"))throw new Error(`Missing or external block dependency: ${$}`);if(Number(lt(oe.records[0],70))&28)throw new Error("External-reference blocks require native AutoCAD extraction.");p.add(G),oe.records.forEach(be=>{if(!US.has(ra(be)))throw new Error(`Unsupported native block entity: ${ra(be)}`);f(be)});const he=this.tables.get("BLOCK_RECORD")?.records.find(be=>lt(be,2).toUpperCase()===G);if(!he)throw new Error("Source block has no BLOCK_RECORD; save a modern ASCII DXF first.");f(he)},v=($,G,oe=!0)=>{const he=this.tables.get($)?.records.find(be=>lt(be,2).toUpperCase()===G.toUpperCase());if(he)$==="BLOCK_RECORD"?m(lt(he,2)):f(he);else if(oe)throw new Error(`Missing ${$} dependency: ${G}`)};m(s);for(const $ of BS){const G=this.tables.get($);if(!G)throw new Error(`Native symbol DXF is missing required ${$} table after safe repair.`);if(h.add(G),$==="VPORT"){const oe=G.records.find(he=>lt(he,2).toUpperCase()==="*ACTIVE");if(!oe)throw new Error("Native symbol DXF has no active *ACTIVE VPORT record after safe repair.");f(oe)}}v("LAYER","0");for(const $ of["CONTINUOUS","BYLAYER","BYBLOCK"])v("LTYPE",$,!1);for(v("STYLE","STANDARD",!1),v("APPID","ACAD",!1),v("DIMSTYLE","STANDARD",!1);y.length;){const $=y.shift(),G=ra($);if(/IMAGEDEF|UNDERLAY|PDFDEFINITION|DGNDEFINITION|DWFDEFINITION|PROXY/.test(G))throw new Error(`External/proxy dependency ${G} requires native AutoCAD extraction.`);(G==="INSERT"||G==="DIMENSION")&&m(lt($,2)),G==="DIMENSION"&&v("DIMSTYLE",lt($,3)||"STANDARD");for(let oe=0;oe<$.length;oe++){const he=$[oe];if(he.code===8&&v("LAYER",he.value.trim()||"0"),he.code===6&&!["BYLAYER","BYBLOCK",""].includes(he.value.trim().toUpperCase())&&v("LTYPE",he.value.trim()),he.code===7&&he.value.trim()&&v("STYLE",he.value.trim()),he.code===1001&&v("APPID",he.value.trim()),!Lm(he.code)||!he.value.trim()||he.value.trim()==="0"||pu($)&&[350,360].includes(he.code)&&$[oe-1]?.code===3&&!g.has($))continue;const be=he.value.trim().toUpperCase();if(this.tableHandles.has(be))continue;const Ye=this.recordsByHandle.get(be);if(!Ye)throw new Error(`Unresolved native DXF handle reference (${he.code}).`);const Me=this.blockForRecord.get(Ye);if(Me&&!p.has(Me))throw new Error("Block metadata references unrelated drawing geometry; use native AutoCAD extraction.");if(this.modelRecords.includes(Ye))throw new Error("Block metadata references source model-space geometry; use native AutoCAD extraction.");ra(Ye)==="BLOCK_RECORD"?m(lt(Ye,2)):f(Ye,he.code!==330)}}const E=new Set,S=new Set,R=$=>{if(E.has($))throw new Error("Circular block references cannot be isolated safely.");if(!S.has($)){E.add($);for(const G of this.blocks.get($).records)["INSERT","DIMENSION"].includes(ra(G))&&R(lt(G,2).toUpperCase());E.delete($),S.add($)}};if(R(s.toUpperCase()),[...i].some($=>/BLOCK.*(?:PARAMETER|ACTION)|BLOCKREPRESENTATION|EVALUATION_GRAPH/.test(ra($))||$.some(G=>G.code===3&&/ACAD_ENHANCEDBLOCK/i.test(G.value))))throw new Error("Dynamic blocks require native AutoCAD extraction; their behavior is not approximated.");const D=this.tables.get("BLOCK_RECORD");h.add(D);const C=this.blocks.get(s.toUpperCase()),w=D.records.find($=>lt($,2).toUpperCase()===s.toUpperCase()),A=l(),k=($,G)=>Ln(0,"BLOCK_RECORD",5,G,330,xr(D.header),100,"AcDbSymbolTableRecord",100,"AcDbBlockTableRecord",2,$,70,0,280,1,281,0),M=$=>$.map(G=>[2,3].includes(G.code)?{...G,value:"*Model_Space"}:ra($)==="BLOCK"&&[10,20,30,70].includes(G.code)?{...G,value:"0"}:G),x=[];for(const $ of[...h].sort((G,oe)=>G.name==="BLOCK_RECORD"?1:oe.name==="BLOCK_RECORD"?-1:0)){const G=$.records.filter(oe=>i.has(oe)).map(oe=>oe===w?M(oe):oe);$.name==="BLOCK_RECORD"&&G.push(k("*Paper_Space",A)),x.push(...Ln(0,"TABLE",2,$.name,5,xr($.header),330,"0",100,"AcDbSymbolTable",70,G.length),...$.name==="DIMSTYLE"?Ln(100,"AcDbDimStyleTable"):[],...G.flat(),...Ln(0,"ENDTAB"))}const j=[...M(C.records[0]),...C.records.at(-1),...Ln(0,"BLOCK",5,l(),330,A,100,"AcDbEntity",8,"0",100,"AcDbBlockBegin",2,"*Paper_Space",70,0,10,0,20,0,30,0,3,"*Paper_Space",1,"",0,"ENDBLK",5,l(),330,A,100,"AcDbEntity",8,"0",100,"AcDbBlockEnd")];for(const $ of p)$!==s.toUpperCase()&&j.push(...this.blocks.get($).records.flat());const L=this.objects.filter($=>i.has($)).map($=>!pu($)||g.has($)?$:$.filter((G,oe)=>G.code===3&&[350,360].includes($[oe+1]?.code)?i.has(this.recordsByHandle.get($[oe+1].value.trim().toUpperCase())):[350,360].includes(G.code)&&$[oe-1]?.code===3?i.has(this.recordsByHandle.get(G.value.trim().toUpperCase())):!0)).flat(),P=C.records.slice(1,-1).flat();if(!P.length)throw new Error("The selected block contains no native entities.");const K=new Set(["$ACADVER","$DWGCODEPAGE","$INSUNITS","$MEASUREMENT","$LTSCALE","$CELTSCALE","$PSLTSCALE"]),ue=[];let ne=!1;for(const $ of this.sections.get("HEADER")??[])$.code===9&&(ne=K.has($.value.trim())),ne&&ue.push($);ue.push(...Ln(9,"$HANDSEED",5,l(),9,"$INSBASE",10,lt(C.records[0],10)||"0",20,lt(C.records[0],20)||"0",30,lt(C.records[0],30)||"0"));const le=new Set([...i].map($=>ra($))),ve=On(this.sections.get("CLASSES")??[]).filter($=>le.has(lt($,1).toUpperCase())).flat(),me=($,G)=>[...Ln(0,"SECTION",2,$),...G,...Ln(0,"ENDSEC")],ce=[...me("HEADER",ue),...ve.length?me("CLASSES",ve):[],...me("TABLES",x),...me("BLOCKS",j),...me("ENTITIES",P),...L.length?me("OBJECTS",L):[],...Ln(0,"EOF")],V=new Set;for(const $ of[...On(x),...On(j),...On(P),...On(L)]){const G=xr($);if(G){if(V.has(G))throw new Error("Duplicate handle in isolated DXF.");V.add(G)}}for(const $ of ce)if(Lm($.code)&&$.value.trim()&&$.value.trim()!=="0"&&!V.has($.value.trim().toUpperCase()))throw new Error(`A required DXF reference was not retained (${$.code}).`);const re=ce.map($=>`${$.code}\r
${$.value}\r
`).join(""),ye=new Uint8Array(re.length);for(let $=0;$<re.length;$++)ye[$]=re.charCodeAt($);const Ae=kr(ye).content;let _="";for(let $=0;$<Ae.length;$+=16384)_+=String.fromCharCode(...Ae.subarray($,$+16384));ef(_);const Q=new ib().parseSync(_);if(!Q?.entities.length||!Q.blocks?.["*Model_Space"])throw new Error("The isolated block DXF failed its structural round-trip validation.");return Ae}}const hu=(a,s)=>a.item.fields.find(o=>o.label===s)?.value.trim()??"";function Om(a,s){const l=a.reviewCandidates.filter(h=>h.sourceGroup===s).filter(h=>h.item.category==="symbol"),p=[...a.companyItems,...Object.values(a.projects).flatMap(h=>h.items)].filter(h=>h.category==="symbol"&&h.fields.some(y=>y.label==="Source drawing ID"&&y.value===s)).filter(h=>h.reviewStatus==="reviewed"),g=[...new Set(p.flatMap(h=>h.fields.filter(y=>y.label==="Target CAD layer"||y.label==="Source insert layer(s)").map(y=>y.value).filter(Boolean)))];return{pending:l.filter(h=>h.status==="needs-review").length,approved:p.length,dismissed:l.filter(h=>h.status==="dismissed").length,layers:g}}function zS(a,s,o,l=new Set){if(a.format!=="DXF"||a.category!=="company-standard")throw new Error("Select a saved DXF classified as a Legends Library standard. DWG still uses the AutoCAD extractor.");const i=new mb(s),p=i.placements(),g=[...p].filter(([,C])=>C.size===1&&!!ju[[...C][0].trim().toUpperCase()]),h=Ri(i.text,g.map(([C])=>C)),y=[],f=[],m=new Map,v=[];let E=0;const S=new Set,R=[...o.reviewCandidates],D=(C,w,A,k=[])=>{const M=`extract-${a.id}-${C}-${w}`;return{id:M,proposedScope:"company",sourceGroup:a.id,status:"needs-review",item:{id:M,category:C==="BLOCK"?"symbol":"layer",name:`${C==="BLOCK"?"Block":"LAYER"} · ${w}`,summary:"Extracted from the saved DXF on this device. Only verified placement layers can be batch-approved.",sourceFile:a.label,sourceKind:"extracted-dwg",scope:"company",reviewStatus:"needs-review",canPromote:!1,fields:[{label:C==="BLOCK"?"Block name":"CAD name",value:w},{label:"Source drawing ID",value:a.id},{label:"Source discipline",value:a.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:A},...k]}}};for(const[C,w]of p){const A=[...w][0];if(w.size!==1||!ju[A.trim().toUpperCase()]){v.push({blockName:C,reason:w.size>1?"Mixed placement layers; review required.":"Internal or unsupported placement layer."});continue}const k=R.find(L=>L.sourceGroup===a.id&&hu(L,"Block name").toUpperCase()===C.toUpperCase()),M=[...o.companyItems,...Object.values(o.projects).flatMap(L=>L.items)].some(L=>L.fields.some(P=>P.label==="Source drawing ID"&&P.value===a.id)&&L.fields.some(P=>P.label==="Block name"&&P.value.trim().toUpperCase()===C.toUpperCase()));if(k&&k.status!=="needs-review"||M){E++;continue}if(!i.layerDetails(A)){v.push({blockName:C,reason:"The placement layer has no LAYER table record."});continue}const j=k&&hu(k,"Block asset ID")||`${a.id}|${C}`;try{if(!l.has(j)){const P=i.isolate(C),K=h.get(C);y.push({id:j,sourceId:a.id,blockName:C,content:P,format:"DXF",previewSvg:K?.previewSvg??null,nearbyLabels:K?.nearbyLabels??[],labelMatchAmbiguous:K?.labelMatchAmbiguous??!1,labelMatchSkipped:K?.labelMatchSkipped??!0,sourcePlacements:K?.sourcePlacements??[],...K?.geometryDescriptor?{geometryDescriptor:K.geometryDescriptor}:{}})}const L=D("BLOCK",C,`sourceLayer=${A};nativeIsolatedDxf=true`,[{label:"Block asset ID",value:j},{label:"Fallback category",value:""},{label:"Source insert layer(s)",value:A}]);if(k){const P=new Set(["Extracted details","Source insert layer(s)","Block asset ID"]);m.set(k.id,{...k,item:{...k.item,fields:[...k.item.fields.filter(K=>!P.has(K.label)),...L.item.fields.filter(K=>P.has(K.label))]}})}else f.push(L);S.add(A)}catch(L){v.push({blockName:C,reason:L instanceof Error?L.message:"Native DXF isolation failed."})}}for(const C of S){const w=R.some(k=>k.sourceGroup===a.id&&k.item.category==="layer"&&hu(k,"CAD name").toUpperCase()===C.toUpperCase()),A=o.companyItems.some(k=>k.category==="layer"&&k.fields.some(M=>M.label==="Source drawing ID"&&M.value===a.id)&&k.fields.some(M=>M.label==="CAD name"&&M.value.toUpperCase()===C.toUpperCase()));!w&&!A&&f.push(D("LAYER",C,i.layerDetails(C)))}return{library:{...o,reviewCandidates:[...o.reviewCandidates.map(C=>m.get(C.id)??C),...f]},assets:y,skipped:v,preserved:E,prepared:S.size?y.length:0,eligibleSymbols:g.length,addedSymbols:f.filter(C=>C.item.category==="symbol").length,updatedSymbols:m.size,detectedLayers:[...new Set([...p.values()].flatMap(C=>[...C]))]}}const YS=40*1024*1024,VS=40*1024*1024,gu=48,XS=15,GS=32;function HS(a){const s=[];let o=0;for(;o<a.length;){const l=a[o];if(/\s/.test(l)){o+=1;continue}if(l==="("||l===")"){s.push(l),o+=1;continue}if(l==="."&&(o+1===a.length||/[\s)]/.test(a[o+1]))){s.push(l),o+=1;continue}if(l==='"'){let p="";for(o+=1;o<a.length&&a[o]!=='"';)if(a[o]==="\\"&&o+1<a.length){o+=1;const g=a[o];p+=g==="n"?`
`:g==="r"?"\r":g,o+=1}else p+=a[o],o+=1;if(a[o]!=='"')throw new Error("The AutoCAD geometry log contains an unfinished string value.");o+=1,s.push(JSON.stringify(p));continue}const i=o;for(;o<a.length&&!/[\s()]/.test(a[o]);)o+=1;if(i===o)throw new Error("The AutoCAD geometry log contains an invalid value.");s.push(a.slice(i,o))}return s}function qu(a,s,o=0){if(o>40)throw new Error("The AutoCAD geometry log nesting is too deep to read safely.");const l=a[s.index++];if(l===void 0)throw new Error("The AutoCAD geometry log contains an incomplete geometry record.");if(l!=="("){if(l===")")throw new Error("The AutoCAD geometry log contains an unexpected closing bracket.");return l.startsWith('"')?JSON.parse(l):/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(l)?Number(l):l.toLowerCase()==="nil"?null:l.toUpperCase()==="T"?!0:l}const i=[];for(;s.index<a.length&&a[s.index]!==")";){if(a[s.index]==="."){if(i.length!==1)throw new Error("The AutoCAD geometry log contains a malformed pair.");s.index+=1;const p=qu(a,s,o+1);if(a[s.index++]!==")")throw new Error("The AutoCAD geometry log contains a malformed pair.");return{kind:"pair",first:i[0],rest:p}}i.push(qu(a,s,o+1))}if(a[s.index++]!==")")throw new Error("The AutoCAD geometry log contains an incomplete list.");return i}function xi(a){const s=HS(a),o={index:0},l=qu(s,o);if(o.index!==s.length)throw new Error("The AutoCAD geometry log has trailing geometry data.");return l}function Iu(a,s){if(Array.isArray(a))for(const o of a){if(o&&typeof o=="object"&&!Array.isArray(o)&&"kind"in o&&String(o.first)===s)return o.rest;if(Array.isArray(o)&&o.length>=2&&o[0]===s)return o.length===2?o[1]:o.slice(1)}}function KS(a,s){return!Array.isArray(a)||a.length<s||a.slice(0,s).some(o=>typeof o!="number"||!Number.isFinite(o))?null:a.slice(0,s)}function WS(a){if(!Array.isArray(a))return{};const s={};for(const o of a){if(o&&typeof o=="object"&&!Array.isArray(o)&&"kind"in o){const l=o;typeof l.first=="string"&&typeof l.rest=="number"&&Number.isFinite(l.rest)&&(s[l.first]=l.rest);continue}!Array.isArray(o)||typeof o[0]!="string"||typeof o[1]!="number"||!Number.isFinite(o[1])||(s[o[0]]=o[1])}return s}function ZS(a){const s=xi(a);return Array.isArray(s)?s.filter(o=>typeof o=="string"):[]}function QS(a){if(new TextEncoder().encode(a).byteLength>YS)throw new Error("The AutoCAD geometry log is over the 40 MB local review limit.");const s=new Map,o=[],l=new Set;for(const i of a.split(/\r?\n/)){if(i.startsWith("SCAN|")){const D=i.split("|");D[1]&&Number.isInteger(Number(D[2]))&&l.add(`${D[1]}:${Number(D[2])}`);continue}if(i.startsWith("ENTITY|")){const D=i.indexOf("|NORMALIZED=");if(D<0)continue;const C=i.slice(0,D).split("|"),w=C[3]?.trim(),A=C[4]?.trim().toUpperCase();if(!w||!A)continue;const k=xi(i.slice(D+12));s.set(w,{handle:w,type:A,descriptor:k});continue}if(!i.startsWith("CANDIDATE|"))continue;const p=i.split("|"),g=D=>p.find(C=>C.startsWith(`${D}=`))?.slice(D.length+1),h=p[3]?.trim(),y=p[1]?.trim(),f=Number(p[2]),m=g("SOURCE_HANDLES"),v=g("BOUNDS"),E=g("PRIMITIVE_COUNTS");if(!h||!y||!Number.isInteger(f)||!m)continue;const S=v?xi(v):null,R=KS(S,4);o.push({id:h,sourceAlias:y,page:f,handles:ZS(m),bounds:R,primitiveCounts:E?WS(xi(E)):{}})}if(s.size===0||l.size===0)throw new Error("This log has no readable geometry scans. Use AUTOCAD_GEOMETRY_SCAN.log from a current runner.");return{entities:s,candidates:o,pages:l.size}}function _m(a){const s=Iu(a,"properties");return Array.isArray(s)?s.flatMap(o=>{if(!Array.isArray(o)||typeof o[0]!="number")return[];const l=o.slice(1).flatMap(i=>typeof i=="number"&&Number.isFinite(i)?[i]:Array.isArray(i)?i.filter(p=>typeof p=="number"&&Number.isFinite(p)):[]);return[{code:o[0],values:l}]}):[]}function yi(a,s,o=0){const l=a.filter(i=>i.code===s)[o];return!l||l.values.length<2?null:{x:l.values[0],y:l.values[1]}}function yb(a,s,o){if(!Number.isFinite(o)||Math.abs(o)<1e-5)return[a,s];const l=s.x-a.x,i=s.y-a.y,p=Math.hypot(l,i);if(p<1e-9)return[a,s];const g=4*Math.atan(o),h=p*(1-o*o)/(4*o),y={x:(a.x+s.x)/2-i/p*h,y:(a.y+s.y)/2+l/p*h},f=Math.atan2(a.y-y.y,a.x-y.x),m=Math.hypot(a.x-y.x,a.y-y.y),v=Math.max(4,Math.min(32,Math.ceil(Math.abs(g)/(Math.PI/12))));return Array.from({length:v+1},(E,S)=>{const R=f+g*S/v;return{x:y.x+Math.cos(R)*m,y:y.y+Math.sin(R)*m}})}function JS(a){const s=_m(a.descriptor),o=a.type;if(o==="LINE"){const l=yi(s,10),i=yi(s,11);return l&&i?[l,i]:[]}if(o==="CIRCLE"||o==="ARC"){const l=yi(s,10),i=s.find(v=>v.code===40)?.values[0]??0;if(!l||i<=0)return[];const p=s.find(v=>v.code===50)?.values[0]??0,g=s.find(v=>v.code===51)?.values[0]??Math.PI*2,h=v=>Math.abs(v)>Math.PI*2+.1?v*Math.PI/180:v,y=o==="CIRCLE"?0:h(p);let f=o==="CIRCLE"?Math.PI*2:h(g)-y;for(;f<=0;)f+=Math.PI*2;const m=Math.max(12,Math.min(48,Math.ceil(f/(Math.PI/12))));return Array.from({length:m+1},(v,E)=>{const S=y+f*E/m;return{x:l.x+Math.cos(S)*i,y:l.y+Math.sin(S)*i}})}if(o==="LWPOLYLINE"){const l=[];let i=null;for(const y of s)y.code===10&&y.values.length>=2?(i={point:{x:y.values[0],y:y.values[1]},bulge:0},l.push(i)):y.code===42&&i&&(i.bulge=y.values[0]??0);const p=Iu(a.descriptor,"closed")===!0;if(l.length<2)return l.map(y=>y.point);const g=[],h=p?l.length:l.length-1;for(let y=0;y<h;y+=1){const f=l[y],m=l[(y+1)%l.length],v=yb(f.point,m.point,f.bulge);g.push(...y?v.slice(1):v)}return p||g.push(l[l.length-1].point),g}if(o==="POLYLINE"){const l=Iu(a.descriptor,"polylineVertices");return Array.isArray(l)?l.flatMap(p=>{const g=_m([["properties",p]]),h=yi(g,10);return h?[h]:[]}):[]}return[]}function e2(a){const s=a.geometry,o=a.transform,l=p=>({x:o[0]*p.x+o[2]*p.y+o[4],y:o[1]*p.x+o[3]*p.y+o[5]}),i=s.vertices??s.fitPoints??s.controlPoints;if((a.type==="LINE"||a.type==="SPLINE")&&i?.length)return i.map(l);if(a.type==="LWPOLYLINE"||a.type==="POLYLINE"){if(!i?.length)return[];const p=s.closed===!0,g=[],h=p?i.length:i.length-1;for(let y=0;y<h;y+=1){const f=i[y],m=i[(y+1)%i.length],v=yb(f,m,f.bulge??0).map(l);g.push(...y?v.slice(1):v)}return p||g.push(l(i[i.length-1])),g}if(a.type==="CIRCLE"||a.type==="ARC"){const p=s.center,g=Number(s.radius);if(!p||!Number.isFinite(g)||g<=0)return[];const h=a.type==="ARC"?Number(s.startAngle??0):0;let y=a.type==="ARC"?Number(s.endAngle??h+Math.PI*2)-h:Math.PI*2;for(;y<=0;)y+=Math.PI*2;const f=Math.max(12,Math.min(48,Math.ceil(y/(Math.PI/12))));return Array.from({length:f+1},(m,v)=>{const E=h+y*v/f;return l({x:p.x+Math.cos(E)*g,y:p.y+Math.sin(E)*g})})}if(a.type==="ELLIPSE"){const p=s.center,g=s.majorAxisEndPoint,h=Number(s.axisRatio);if(!p||!g||!Number.isFinite(h)||h<=0)return[];const y=32;return Array.from({length:y},(f,m)=>{const v=Math.PI*2*m/y;return l({x:p.x+g.x*Math.cos(v)-g.y*h*Math.sin(v),y:p.y+g.y*Math.cos(v)+g.x*h*Math.sin(v)})})}return[]}function t2(a){return a.length<=gu?a:Array.from({length:gu},(s,o)=>a[Math.floor(o*(a.length-1)/(gu-1))])}function Pm(a){const s=t2(a.filter(i=>Number.isFinite(i.x)&&Number.isFinite(i.y)));if(s.length<2)return[];const o={x:s.reduce((i,p)=>i+p.x,0)/s.length,y:s.reduce((i,p)=>i+p.y,0)/s.length},l=Math.sqrt(s.reduce((i,p)=>i+(p.x-o.x)**2+(p.y-o.y)**2,0)/s.length);return!Number.isFinite(l)||l<1e-9?[]:s.map(i=>({x:(i.x-o.x)/l,y:(i.y-o.y)/l}))}function qm(a){return a.length?{minX:Math.min(...a.map(s=>s.x)),minY:Math.min(...a.map(s=>s.y)),maxX:Math.max(...a.map(s=>s.x)),maxY:Math.max(...a.map(s=>s.y))}:null}function Im(a){return a?Math.hypot(a.maxX-a.minX,a.maxY-a.minY):0}function Mm(a,s){const o=new Set([...Object.keys(a),...Object.keys(s)]);let l=0,i=0;for(const p of o){const g=a[p]??0,h=s[p]??0;l+=Math.max(g,h),i+=Math.abs(g-h)}return l===0?0:Math.max(0,1-i/(2*l))}function $m(a,s){if(!a||!s)return 0;const o=Math.max(a.maxX-a.minX,1e-9),l=Math.max(a.maxY-a.minY,1e-9),i=Math.max(s.maxX-s.minX,1e-9),p=Math.max(s.maxY-s.minY,1e-9),g=Math.max(o/l,l/o),h=Math.max(i/p,p/i);return Math.exp(-Math.abs(Math.log(g/h)))}function Um(a,s){let o=0;for(const l of a){let i=Number.POSITIVE_INFINITY;for(const p of s){const g=(l.x-p.x)**2+(l.y-p.y)**2;g<i&&(i=g)}o+=i}return o/a.length}function a2(a,s){let o=Number.POSITIVE_INFINITY,l=0;for(let i=0;i<360;i+=XS){const p=i*Math.PI/180,g=Math.cos(p),h=Math.sin(p),y=s.map(m=>({x:g*m.x-h*m.y,y:h*m.x+g*m.y})),f=Math.sqrt((Um(a,y)+Um(y,a))/2);f<o&&(o=f,l=i)}return{residual:o,rotation:l}}function n2(a,s){return a.handles.flatMap(o=>{const l=s.get(o);return l?JS(l):[]})}function Bm(a){return a.primitives.flatMap(e2)}function s2(a,s){if(new TextEncoder().encode(a).byteLength>VS)throw new Error("The CAD block geometry index is over the 40 MB local review limit.");let o;try{o=JSON.parse(a)}catch{throw new Error("The selected file is not valid CAD_BLOCK_GEOMETRY_INDEX.json.")}if(!o||typeof o!="object"||o.localOnly!==!0||!Array.isArray(o.blocks))throw new Error("This is not a local-only CAD block geometry index from the runner package.");return o.blocks.filter(l=>l.indexStatus==="INDEXED"&&(l.discipline===s||l.discipline==="Shared")&&typeof l.blockName=="string"&&typeof l.blockAssetId=="string"&&l.geometry&&typeof l.geometry=="object")}function r2(a,s,o){const l=QS(a),p=s2(s,o).flatMap(h=>{const y=h.geometry,f=Pm(Bm(y));return!f.length||!y.bounds?[]:[{block:h,geometry:y,cloud:f,bounds:qm(Bm(y)),primitiveCounts:y.primitiveCounts??{}}]}),g=l.candidates.map(h=>{const y=n2(h,l.entities),f=Pm(y),m=h.bounds?{minX:h.bounds[0],minY:h.bounds[1],maxX:h.bounds[2],maxY:h.bounds[3]}:qm(y);if(p.length===0)return{...h,best:null,second:null,status:"NO_INDEXED_BLOCKS",reason:"No indexed approved blocks for this discipline."};if(f.length<2||!m)return{...h,best:null,second:null,status:"UNMATCHED",reason:"Candidate has too little supported geometry to compare."};const E=p.map(A=>({prepared:A,coarse:$m(m,A.geometry.bounds)*.75+Mm(h.primitiveCounts,A.primitiveCounts)*.25})).sort((A,k)=>k.coarse-A.coarse).slice(0,GS).map(({prepared:A})=>A).map(A=>{const k=Mm(h.primitiveCounts,A.primitiveCounts),M=$m(m,A.geometry.bounds),x=a2(f,A.cloud),j=Math.exp(-x.residual*2.5),L=Math.max(0,Math.min(1,j*.7+k*.2+M*.1)),P=Im(m),K=Im(A.geometry.bounds),ue=String(A.block.category??""),ne=/\b(equipment|tower|vessel|tank|exchanger|column|drum)\b/i.test(ue);return{blockAssetId:String(A.block.blockAssetId),blockName:String(A.block.blockName),category:ue,targetLayer:String(A.block.targetLayer??""),score:L,geometryResidual:x.residual,primitiveSimilarity:k,aspectSimilarity:M,rotationDegrees:x.rotation,estimatedUniformScale:ne||K<=1e-9?null:P/K,indexStatus:String(A.block.indexStatus)}}).sort((A,k)=>k.score-A.score||A.blockName.localeCompare(k.blockName)),S=E[0]??null,R=E[1]??null,D=S&&R?S.score-R.score:Number.POSITIVE_INFINITY,C=!S||S.score<.9?"UNMATCHED":D<.02?"AMBIGUOUS_REVIEW":S.score>=.97?"HIGH_CANDIDATE_REVIEW":"REVIEW";return{...h,best:S,second:R,status:C,reason:C==="AMBIGUOUS_REVIEW"?"Top library shapes are too close to identify safely.":C==="UNMATCHED"?"No geometry match reached the initial review threshold.":"Experimental shape score only; human confirmation is required."}});return{scan:l,candidates:g,indexedBlockCount:p.length}}function o2(a,s){return JSON.stringify({schemaVersion:1,localOnly:!0,discipline:s,generatedAt:new Date().toISOString(),note:"Experimental geometry similarity rankings. Scores are not probabilities or approvals. Source geometry was not changed; every candidate requires human review.",pagesScanned:a.scan.pages,indexedBlocks:a.indexedBlockCount,candidates:a.candidates},null,2)}function Fm(a){return a===void 0?"—":`${(a*100).toFixed(1)}%`}function l2(a){return a==null?"Review":`${a.toFixed(3)}×`}function i2({discipline:a}){const[s,o]=q.useState(null),[l,i]=q.useState(null),[p,g]=q.useState(null),[h,y]=q.useState(""),[f,m]=q.useState(!1),v=async()=>{if(!s||!l){y("Choose both AUTOCAD_GEOMETRY_SCAN.log and CAD_BLOCK_GEOMETRY_INDEX.json.");return}m(!0),y(""),g(null);try{const[S,R]=await Promise.all([s.text(),l.text()]),D=r2(S,R,a);g({scanName:s.name,indexName:l.name,discipline:a,indexedBlockCount:D.indexedBlockCount,pagesScanned:D.scan.pages,candidates:D.candidates})}catch(S){y(S instanceof Error?S.message:"The local geometry report could not be compared.")}finally{m(!1)}},E=()=>{if(!p)return;const S=o2({scan:{entities:new Map,candidates:[],pages:p.pagesScanned},candidates:p.candidates,indexedBlockCount:p.indexedBlockCount},p.discipline),R=URL.createObjectURL(new Blob([S],{type:"application/json"})),D=document.createElement("a");D.href=R,D.download="LOCAL_GEOMETRY_MATCH_REVIEW.json",D.click(),URL.revokeObjectURL(R)};return c.jsxs("section",{className:"geometry-match-review","aria-labelledby":"geometry-match-title","data-testid":"panel-geometry-match-review",children:[c.jsxs("div",{className:"geometry-match-heading",children:[c.jsx("span",{className:"geometry-match-icon",children:c.jsx(CE,{size:16})}),c.jsxs("div",{children:[c.jsx("h3",{id:"geometry-match-title",children:"Review geometry matches"}),c.jsx("p",{children:"Compare a local AutoCAD scan with indexed approved blocks. Source drawings are not changed."})]})]}),c.jsxs("div",{className:"geometry-match-privacy",children:[c.jsx(Eu,{size:14})," Both files are read and compared in this browser; nothing is uploaded."]}),c.jsx("p",{className:"geometry-match-instructions",children:"Use the scan log from AutoCAD and the index file from that same runner kit. The result is a local review aid only."}),c.jsxs("div",{className:"geometry-match-inputs",children:[c.jsxs("label",{children:[c.jsx("span",{children:"AutoCAD geometry scan log"}),c.jsx("input",{type:"file",accept:".log,.txt","aria-label":"Select AutoCAD geometry scan log",onChange:S=>{o(S.currentTarget.files?.[0]??null),g(null),y("")},"data-testid":"input-geometry-scan-log"})]}),c.jsxs("label",{children:[c.jsx("span",{children:"CAD block geometry index"}),c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Select CAD block geometry index",onChange:S=>{i(S.currentTarget.files?.[0]??null),g(null),y("")},"data-testid":"input-cad-geometry-index"})]}),c.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{v()},disabled:f||!s||!l,"data-testid":"button-build-geometry-match-report",children:[c.jsx(Cr,{size:14}),f?"Comparing…":"Compare geometry"]})]}),h&&c.jsx("p",{className:"geometry-match-error",role:"alert",children:h}),p&&c.jsxs("div",{className:"geometry-match-results","data-testid":"geometry-match-results",children:[c.jsxs("div",{className:"geometry-match-summary",role:"status",children:[p.discipline,": ",p.candidates.length," candidate group(s) across ",p.pagesScanned," page(s); ",p.indexedBlockCount," indexed approved block(s)."]}),p.indexedBlockCount===0&&c.jsx("p",{className:"geometry-match-warning",children:"No matching indexed blocks were found for this discipline. Check that the selected index came from the same local runner package."}),p.indexedBlockCount>0&&p.candidates.length===0&&c.jsx("p",{className:"geometry-match-warning",children:"AutoCAD found no geometry candidate groups on the scanned pages. No blocks were inserted or drawings changed."}),p.candidates.map(S=>c.jsxs("article",{className:"geometry-match-card",children:[c.jsxs("div",{className:"geometry-match-card-head",children:[c.jsx("strong",{children:S.id}),c.jsx("span",{className:`geometry-match-status status-${S.status.toLowerCase()}`,children:S.status.replaceAll("_"," ")})]}),c.jsxs("div",{className:"geometry-match-card-meta",children:["Page ",S.page," · ",S.handles.length," source entities · ",S.sourceAlias]}),c.jsxs("div",{className:"geometry-match-ranking",children:[c.jsxs("div",{children:[c.jsx("span",{children:"Best shape match"}),c.jsx("strong",{children:S.best?.blockName??"No match"}),c.jsxs("small",{children:[Fm(S.best?.score)," · ",S.best?.targetLayer||"no target layer"," ·"," ",S.best?.rotationDegrees??"—","° · scale ",l2(S.best?.estimatedUniformScale)]})]}),c.jsxs("div",{children:[c.jsx("span",{children:"Second match"}),c.jsx("strong",{children:S.second?.blockName??"—"}),c.jsx("small",{children:Fm(S.second?.score)})]})]}),c.jsx("p",{children:S.reason})]},`${S.sourceAlias}-${S.page}-${S.id}`)),c.jsxs("div",{className:"geometry-match-foot",children:[c.jsx("span",{children:"Experimental shape scores are not probabilities or approvals. Every result needs a person to verify it."}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:E,"data-testid":"button-download-geometry-match-report",children:[c.jsx(qs,{size:13})," Download local report"]})]})]})]})}const zm=250*1024*1024,Ym=500*1024*1024,Mu={"needs-review":"Needs review","company-standard":"Legends Library standard","project-example":"Project example","markup-reference":"Markup reference",ignore:"Do not use"};function Vm(a,s){return s&&a==="project-example"?"Client-specific library source":Mu[a]}function mu(){return globalThis.crypto?.randomUUID?.()??`source-${Date.now()}-${Math.random().toString(36).slice(2)}`}function yu(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(2)} MB`}function Xm(a){return(a.replace(/\\/g,"/").split("/").pop()??"").replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,"").trim().slice(0,180)||"Unnamed CAD drawing"}function c2({onAddPdfs:a,discipline:s,clientFolderId:o,clientFolderLabel:l}){const[i,p]=q.useState([]),[g,h]=q.useState({}),[y,f]=q.useState([]),[m,v]=q.useState([]),[E,S]=q.useState(""),[R,D]=q.useState(""),[C,w]=q.useState(!1),[A,k]=q.useState(!1),[M,x]=q.useState(""),[j,L]=q.useState(!1),[P,K]=q.useState(()=>{try{return un().reviewCandidates.filter(U=>U.status==="needs-review").length}catch{return 0}}),[ue,ne]=q.useState(!1),[le,ve]=q.useState(""),[me,ce]=q.useState(!1),[V,re]=q.useState(!1),[ye,Ae]=q.useState(0),[_,Q]=q.useState([]);q.useEffect(()=>{const U=()=>Ae(ie=>ie+1);return window.addEventListener(zo,U),window.addEventListener("storage",U),window.addEventListener("focus",U),()=>{window.removeEventListener(zo,U),window.removeEventListener("storage",U),window.removeEventListener("focus",U)}},[]);const $=q.useMemo(()=>{try{const U=un();return Object.fromEntries(i.map(ie=>[ie.id,Om(U,ie.id)]))}catch{return{}}},[i,ye]);q.useEffect(()=>{Ou().then(U=>{p(U),h(Object.fromEntries(U.map(ie=>[ie.id,{category:ie.category,discipline:ie.discipline,projectLabel:ie.projectLabel}])))}).catch(U=>{x(U instanceof Error?U.message:"The local CAD library could not be opened.")})},[]);const G=q.useMemo(()=>_x(i,s,o),[i,s,o]),oe=q.useMemo(()=>G.filter(U=>U.category==="company-standard"||!!o&&U.category==="project-example"&&U.projectLabel===o),[G,o]);q.useEffect(()=>{oe.some(U=>U.id===le)||ve(oe[0]?.id??"")},[oe,le]);const he=q.useMemo(()=>G.reduce((U,ie)=>(U[ie.category]+=1,U),{"needs-review":0,"company-standard":0,"project-example":0,"markup-reference":0,ignore:0}),[G]),be=y.some(U=>o?U.projectLabel!==o:!!U.projectLabel),Ye=async U=>{w(!0),D(""),x(""),S(""),L(!1),f([]),v([]);try{if(U.size>zm)throw new Error("The archive is larger than the 250 MB limit for this local test.");const ie=Am(new Uint8Array(await U.arrayBuffer())),fe=Object.entries(ie).filter(([Ie])=>!Ie.endsWith("/")),B=fe.filter(([Ie])=>/\.(dwg|dxf)$/i.test(Ie)&&!/_OVERVIEW\.dxf$/i.test(Ie)),de=fe.filter(([Ie])=>/\.pdf$/i.test(Ie)),Re=fe.filter(([Ie])=>/\.bak$/i.test(Ie)).length;if([...B,...de].reduce((Ie,[,De])=>Ie+De.byteLength,0)>Ym)throw new Error("The PDF and CAD source files together exceed the 500 MB local test limit.");if(B.length===0&&de.length===0)throw new Error("No PDF, DWG, or source DXF files were found in this ZIP. Overview DXFs and other file types are not saved as source drawings.");const qe=B.map(([Ie,De],Qt)=>({id:mu(),label:`Source CAD ${String(i.length+Qt+1).padStart(3,"0")}`,reviewFilename:Xm(Ie),category:"needs-review",discipline:s,format:/\.dxf$/i.test(Ie)?"DXF":"DWG",projectLabel:o??"",bytes:De.byteLength,content:De})),Fe=de.map(([,Ie],De)=>({id:mu(),label:`PDF ${String(De+1).padStart(2,"0")}`,file:new File([Ie],`SOURCE_${String(De+1).padStart(2,"0")}.pdf`,{type:"application/pdf"})}));f(qe),v(Fe),S(`Found ${B.length} CAD drawing file(s) and ${de.length} PDF file(s). ${Re} backup file(s) ignored.`),B.length?D("Assign a use to each CAD drawing before saving it. ZIP filenames are shown only during review; the saved library keeps generic source IDs."):D("No CAD drawings to add. You can add the extracted PDF to the conversion queue.")}catch(ie){x(ie instanceof Error?ie.message:"The ZIP could not be read. Check that it is not damaged or password-protected.")}finally{w(!1)}},Me=async U=>{x(""),S(""),D(""),f([]),v([]),L(!1);const ie=U.filter(B=>/\.(dwg|dxf)$/i.test(B.name)&&!/_OVERVIEW\.dxf$/i.test(B.name));if(ie.length!==U.length){x("Choose source DWG/DXF files only. Overview DXFs are not source drawings.");return}if(ie.reduce((B,de)=>B+de.size,0)>Ym){x("The selected CAD source files exceed the 500 MB local test limit.");return}if(!ie.length){x("Choose at least one DWG or DXF source drawing.");return}w(!0);try{const B=await Promise.all(ie.map(async(de,Re)=>({id:mu(),label:`Source CAD ${String(i.length+Re+1).padStart(3,"0")}`,reviewFilename:Xm(de.name),category:"needs-review",discipline:s,format:/\.dxf$/i.test(de.name)?"DXF":"DWG",projectLabel:o??"",bytes:de.size,content:new Uint8Array(await de.arrayBuffer())})));f(B),S(`Prepared ${B.length} CAD source file(s) for local review.`),D("Choose the correct discipline and local library category for each file. Filenames are discarded when saved.")}catch(B){x(B instanceof Error?B.message:"The CAD files could not be read locally.")}finally{w(!1)}},it=async()=>{if(be){x("The selected client folder changed after these files were staged. Re-select the original client folder or add the files again.");return}if(y.some(U=>U.category==="needs-review")){x("Choose a category for every CAD drawing before saving the library.");return}if(y.some(U=>["project-example","markup-reference"].includes(U.category)&&!U.projectLabel?.trim())){x("Enter a neutral project code for every project example and markup reference.");return}k(!0),x("");try{let U=0;const ie=y.filter(de=>de.category!=="ignore").map(de=>{const Re=de.format==="DXF"?kr(de.content):null;return U+=Re?.repairs.length??0,{id:de.id,label:de.label,category:de.category,discipline:de.discipline,format:de.format,projectLabel:de.projectLabel,bytes:Re?.content.byteLength??de.bytes,content:Re?.content??de.content}});await Fx(ie);const fe=await Ou();p(fe),h(Object.fromEntries(fe.map(de=>[de.id,{category:de.category,discipline:de.discipline,projectLabel:de.projectLabel}])));const B=y.length-ie.length;f([]),D(`${ie.length} source CAD drawing(s) saved in this browser's local library. ${B} marked “Do not use”. ${U} DXF symbol name(s) repaired in local copies; original disk files unchanged.`)}catch(U){x(U instanceof Error?U.message:"The CAD sources could not be saved locally.")}finally{k(!1)}},pt=(U,ie)=>{h(fe=>({...fe,[U.id]:{...U,...fe[U.id],...ie}}))},jt=async U=>{const ie=g[U.id]??{category:U.category,discipline:U.discipline,projectLabel:U.projectLabel};if(["project-example","markup-reference"].includes(ie.category)&&!ie.projectLabel?.trim()){x("Enter a neutral project code before saving this project-specific source.");return}x("");try{await zx(U.id,ie),p(fe=>fe.map(B=>B.id===U.id?{...B,...ie,...ie.projectLabel?.trim()?{projectLabel:ie.projectLabel.trim()}:{projectLabel:void 0}}:B))}catch(fe){x(fe instanceof Error?fe.message:"The source drawing category could not be changed.")}},Je=async()=>{if(!(!oe.length||ue)){ne(!0),x("");try{const U=await Gx(oe),ie=URL.createObjectURL(U),fe=document.createElement("a");fe.href=ie,fe.download="local-cad-extractor-kit.zip",fe.click(),window.setTimeout(()=>URL.revokeObjectURL(ie),1e3),D(`Local extractor kit prepared with ${oe.length} source CAD drawing(s).`)}catch(U){x(U instanceof Error?U.message:"The local extractor kit could not be prepared.")}finally{ne(!1)}}},xt=async U=>{const ie=oe.some(B=>B.id===le)?le:oe[0]?.id,fe=oe.find(B=>B.id===ie);if(!fe){x("Choose a reviewed source drawing before importing its extraction.");return}if(fe.category==="project-example"&&!fe.projectLabel?.trim()){x("Add a neutral project code to this source drawing before importing its extraction.");return}ce(!0),x("");try{if(U.size>zm)throw new Error("The extraction ZIP is larger than the 250 MB limit for this local test.");const B=Am(new Uint8Array(await U.arrayBuffer())),de=Object.entries(B).find(([At])=>/\.tsv$/i.test(At));if(!de)throw new Error("The ZIP must contain CAD_STANDARDS.tsv from PIDEXTRACTSTANDARDS.");const ge=new TextDecoder().decode(de[1]).split(/\r?\n/).filter(Boolean);if(ge.length<2||!ge[0].toUpperCase().includes("KIND")||!ge[0].toUpperCase().includes("NAME"))throw new Error("The ZIP contains an invalid CAD_STANDARDS.tsv extraction.");const qe=un(),Fe=Object.entries(B).filter(([At])=>/_OVERVIEW\.dxf$/i.test(At)),Ie=ge[1]?.split("	")[0]?.trim()??"",De=Fe.find(([At])=>At.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===`${Ie}_OVERVIEW.dxf`.toLowerCase());if(Fe.length&&(!De||Fe.length!==1))throw new Error("Include exactly one overview DXF for this extraction, named with the same SOURCE alias as the TSV (for example SOURCE_001_OVERVIEW.dxf).");const Qt=ge.slice(1).flatMap(At=>{const[,Sa,ia]=At.split("	");return Sa?.trim().toUpperCase()==="BLOCK"&&ia?.trim()?[ia.trim()]:[]});if(De&&De[1].byteLength>30*1024*1024)throw new Error("The overview DXF exceeds the 30 MB preview limit. Keep the original extraction unchanged and export a smaller Legends-only overview.");let xe=null,Ke="",st=!1;if(De)xe=new TextDecoder("windows-1252").decode(De[1]),Ke="overview DXF";else if(fe.format==="DXF"&&fe.bytes<=30*1024*1024)try{xe=new TextDecoder("windows-1252").decode(await Uo(fe.id)),Ke="saved source DXF"}catch{st=!0}else fe.format==="DXF"&&(st=!0);let vt=new Map;if(xe)try{vt=Ri(xe,Qt)}catch{st=!0}const Ce=[],Lt=[],Gt=[];for(const At of ge.slice(1)){const[,Sa,ia,Ta=""]=At.split("	"),qt=Sa?.trim().toUpperCase(),ht=ia?.trim();if(!ht||!Gm[qt])continue;const $a=qt==="BLOCK"&&db(ht)?"directionArrow":Gm[qt],ca=qt==="BLOCK"?vt.get(ht):void 0;let Wa;if(qt==="BLOCK"){const Jt=Ta.match(/(?:^|;)asset=([^;]+)/i)?.[1]?.trim();if(!Jt){Gt.push(ht);continue}const F=Jt.replaceAll("\\","/").split("/").at(-1),pe=Object.entries(B).find(([Ee])=>Ee.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===F?.toLowerCase());if(!F||!pe){Gt.push(ht);continue}Wa=`${fe.id}|${ht}`,Lt.push({id:Wa,sourceId:fe.id,blockName:ht,content:pe[1],format:"DWG",...xe&&!st?{previewSvg:ca?.previewSvg??null,nearbyLabels:ca?.nearbyLabels??[],labelMatchSkipped:ca?.labelMatchSkipped??!1,labelMatchAmbiguous:ca?.labelMatchAmbiguous??!1,sourcePlacements:ca?.sourcePlacements??[],...ca?.geometryDescriptor?{geometryDescriptor:ca.geometryDescriptor}:{}}:{}})}const Dt=`extract-${fe.id}-${qt}-${ht}`;if(qe.reviewCandidates.find(Jt=>Jt.id===Dt))continue;const pa=fe.category==="project-example",ha=[{label:qt==="BLOCK"?"Block name":"CAD name",value:ht},{label:"Source drawing ID",value:fe.id},{label:"Source discipline",value:fe.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:Ta.replace(/(?:^|;)asset=[^;]*/i,"").trim()||"No additional table details"},...qt==="BLOCK"?[{label:"Block asset ID",value:Wa??""},{label:"Fallback category",value:""},...ca?.sourcePlacements?.length?[{label:"Source insert layer(s)",value:[...new Set(ca.sourcePlacements.map(Jt=>Jt.layer))].join(", ")},{label:"Source insert rotation(s)",value:ca.sourcePlacements.map(Jt=>`${Jt.rotationDegrees}° on ${Jt.layer} (${Jt.count})`).join("; ")}]:[]]:[]];Ce.push({id:Dt,item:{id:Dt,category:$a,name:`${$a==="directionArrow"?"Direction Arrow":qt==="BLOCK"?"Block":qt.replaceAll("_"," ")} · ${ht}`,summary:"Extracted locally from a source CAD drawing; confirm each value before use.",sourceFile:fe.label,sourceKind:"extracted-dwg",scope:pa?"project":"company",reviewStatus:"needs-review",...pa?{projectId:fe.projectLabel,projectName:fe.projectLabel===o&&l||fe.projectLabel}:{},canPromote:!1,fields:ha},proposedScope:pa?"project":"company",sourceGroup:fe.id,...pa?{projectId:fe.projectLabel,projectName:fe.projectLabel===o&&l||fe.projectLabel}:{},status:"needs-review"})}const Ut={...qe,reviewCandidates:[...qe.reviewCandidates,...Ce],auditTrail:Ce.length?[{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:"Local CAD extraction added for review",detail:`${Ce.length} extracted records from ${fe.label} were added as pending review.`,...fe.projectLabel?{projectName:fe.projectLabel===o&&l||fe.projectLabel}:{}},...qe.auditTrail]:qe.auditTrail},Bt=xe&&!st?km(Ut,fe.id,vt).library:Ut;await _u(Lt),Yo(Bt),K(Bt.reviewCandidates.filter(At=>At.status==="needs-review").length),D((Ce.length?`${Ce.length} extracted record(s) added to Drafting standards for review. Nothing was approved automatically.`:"No new records found; the extracted names are already in the review queue or standards library.")+(vt.size?` ${vt.size} local block previews and source placement-layer details read from the ${Ke}. Nearby labels remain suggestions and need confirmation.`:st?" The source preview could not be read; the valid extracted records were still imported without preview-based layer evidence.":fe.format==="DWG"&&!De?" To identify DWG blocks and their placement layers, include the source *_OVERVIEW.dxf exported with PIDEXPORTOVERVIEW.":"")+(Gt.length?` ${Gt.length} block asset(s) were missing and skipped: ${[...new Set(Gt)].slice(0,5).join(", ")}${Gt.length>5?", …":""}. Other valid records were kept.`:""))}catch(B){x(B instanceof Error?B.message:"The CAD extraction could not be imported.")}finally{ce(!1)}},fa=async()=>{const U=oe.find(fe=>fe.id===le&&fe.category==="company-standard"),ie=U?[U.id]:[];if(!(!U||V)){re(!0),x(""),D(""),Q([]);try{let fe=un();const B=JSON.stringify(fe);let de="";if(U.format==="DXF"){D(`${U.label}: extracting native blocks from the saved DXF on this device…`),await new Promise(st=>window.setTimeout(st,0));const xe=await Mx(),Ke=zS(U,await Uo(U.id),fe,xe);if(JSON.stringify(un())!==B)throw new Error("The library changed during DXF preparation. No records were changed; retry with the latest library.");await _u(Ke.assets,!0),fe=Ke.library,Q(Ke.skipped),de=`${Ke.addedSymbols} new symbol record(s), ${Ke.assets.length} native block file(s) saved; ${Ke.preserved} previously reviewed symbol(s) preserved. ${Ke.skipped.length} item(s) excluded or need native extraction/review. `}const Re=fe.reviewCandidates.filter(xe=>xe.sourceGroup===U.id&&xe.status==="needs-review"&&xe.proposedScope==="company"&&xe.item.category==="symbol"&&xe.item.sourceKind==="extracted-dwg");if(!Re.length){const xe=Om(fe,U.id);D(`${U.label}: ${de}No pending symbols to approve. ${xe.approved} already approved; ${xe.dismissed} dismissed. ${U.format==="DXF"?"Only named model-space INSERTs on supported placement layers can be extracted. See excluded items below; loose geometry is not guessed into blocks.":"For DWG, import this source’s extraction ZIP with its individual block files."}`);return}let ge="";if(U.format==="DXF"){if(U.bytes>30*1024*1024)throw new Error("This saved source DXF exceeds the 30 MB recovery limit. Import its extraction with a smaller Legends-only overview DXF.");const xe=await Uo(U.id),Ke=Re.map(Ce=>Ce.item.fields.find(Lt=>Lt.label==="Block name")?.value.trim()??"").filter(Boolean),st=Ri(new TextDecoder("windows-1252").decode(xe),Ke),vt=km(fe,U.id,st);fe=vt.library,ge=`${vt.recoveredSymbols} pending symbol(s) have INSERT-layer evidence in the saved DXF; ${vt.updatedRecords} existing record(s) updated. `}const qe=new Set(ie),Fe=new Set(fe.reviewCandidates.filter(xe=>xe.status==="needs-review"&&qe.has(xe.sourceGroup)&&xe.item.category==="symbol").map(xe=>xe.item.fields.find(Ke=>Ke.label==="Block asset ID")?.value.trim()??"").filter(Boolean)),Ie=new Set;await Promise.all([...Fe].map(async xe=>{try{await rb(xe),Ie.add(xe)}catch{}}));const De=Nx(fe,ie,Ie);if(JSON.stringify(un())!==B)throw new Error("The local standards library changed while this source was being checked. No approval changes were saved; retry to use the latest records.");Yo(De.library),K(De.library.reviewCandidates.filter(xe=>xe.status==="needs-review").length);const Qt=Object.values(De.skipped).reduce((xe,Ke)=>xe+Ke,0);D(`${U.label}: ${de}${ge}`+(De.approvedSymbols?`${De.approvedSymbols} layer-matched symbol(s) approved for shared PFD/P&ID use; ${De.approvedLayers} placement layer(s) approved or updated.`:"0 symbols approved. Only exact placement layers with local block files and a matching layer record can be approved.")),Qt&&D(xe=>`${xe} ${De.skipped.missingAsset} missing asset(s), ${De.skipped.unsupportedLayer} internal/unsupported layer item(s), ${De.skipped.ambiguousLayer} ambiguous layer item(s), ${De.skipped.missingLayer} missing layer record(s), and ${De.skipped.invalidCandidate} invalid item(s) stayed unapproved.`)}catch(fe){D(""),x(fe instanceof Error?fe.message:"The categorized CAD mappings could not be approved locally.")}finally{re(!1)}}};return c.jsxs("section",{className:"local-cad-library","aria-labelledby":"local-library-title","data-testid":"panel-local-cad-library",children:[c.jsxs("div",{className:"local-library-heading",children:[c.jsx("div",{className:"local-library-icon",children:c.jsx(Hu,{size:17})}),c.jsxs("div",{className:"local-library-title",children:[c.jsx("div",{className:"pdf-kicker",children:"SOURCE DRAWINGS · LOCAL ONLY"}),c.jsx("h3",{id:"local-library-title",children:o?"Client Source Library":"Legends Library"}),c.jsx("p",{children:o?`Manage CAD sources for ${l||"this client folder"}. Company standards remain the common default.`:"Add common company standards here. Select a Client folder first to add client-specific sources."})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-files",children:[C?c.jsx(Ia,{size:14,className:"pdf-spin"}):c.jsx(Cr,{size:14}),C?"Reading…":"Add DWG/DXF",c.jsx("input",{type:"file",accept:".dwg,.dxf,application/acad,application/x-dwg,application/dxf",multiple:!0,"aria-label":"Add local DWG or DXF source files",disabled:C,onChange:U=>{const ie=[...U.currentTarget.files??[]];ie.length&&Me(ie),U.currentTarget.value=""},"data-testid":"input-add-cad-files"})]}),c.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-archive",children:[C?c.jsx(Ia,{size:14,className:"pdf-spin"}):c.jsx(py,{size:14}),C?"Reading ZIP…":"Add ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Add a ZIP with PDF and DWG/DXF source files",disabled:C,onChange:U=>{const ie=U.currentTarget.files?.[0];ie&&Ye(ie),U.currentTarget.value=""},"data-testid":"input-add-cad-archive"})]})]}),c.jsxs("div",{className:"local-library-privacy",children:[c.jsx(fs,{size:14}),c.jsxs("span",{children:[c.jsx("strong",{children:"Files stay in this browser."})," ",o?"This client source list is separate from the company Legends Library and other client folders.":"Company-standard sources remain shared defaults; project/client examples stay separate from them."]})]}),c.jsxs("div",{className:"local-library-extraction",children:[c.jsxs("div",{children:[c.jsxs("strong",{children:[c.jsx(TE,{size:14})," Extract drawing standards locally"]}),c.jsx("span",{children:"Package eligible DWG/DXF drawings with a Windows AutoCAD script. It exports only blocks actually inserted on approved equipment, instrument, or inline-component layers—unused internal definitions are skipped. Source drawings are not uploaded or changed."})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{Je()},disabled:!oe.length||ue,"data-testid":"button-download-cad-extractor",children:[ue?c.jsx(Ia,{size:13,className:"pdf-spin"}):c.jsx(qs,{size:13}),ue?"Preparing…":"Download extractor kit"]})]}),oe.length>0&&c.jsxs("div",{className:"local-library-import",children:[c.jsxs("label",{children:[c.jsx("span",{children:"Import AutoCAD extraction"}),c.jsx("select",{value:le||oe[0].id,disabled:V||me,onChange:U=>{ve(U.target.value),D(""),Q([])},"aria-label":"Source drawing for extracted CAD standards",children:oe.map(U=>c.jsxs("option",{value:U.id,children:[U.label," · ",U.format??"DWG"," · ",$[U.id]?.pending??0," pending / ",$[U.id]?.approved??0," approved",U.projectLabel?` · ${U.projectLabel}`:""]},U.id))})]}),c.jsxs("label",{className:"btn subtle local-library-import-button",children:[me?c.jsx(Ia,{size:13,className:"pdf-spin"}):c.jsx(Cr,{size:13}),me?"Importing…":"Import extraction ZIP",c.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Import AutoCAD extraction ZIP",disabled:me||V,onChange:U=>{const ie=U.currentTarget.files?.[0];ie&&xt(ie),U.currentTarget.value=""}})]})]}),!o&&oe.some(U=>U.category==="company-standard")&&c.jsxs("div",{className:"local-library-approval",children:[c.jsxs("div",{children:[c.jsx("strong",{children:"Approve supplied company symbols by placement layer"}),c.jsxs("span",{"data-testid":"status-selected-cad-source",children:[oe.find(U=>U.id===le)?.label,": ",$[le]?.pending??0," pending symbols · ",$[le]?.approved??0," approved · ",$[le]?.dismissed??0," dismissed.",$[le]?.layers.length?` Approved placement layers: ${$[le].layers.join(", ")}.`:""]}),c.jsx("span",{children:"Saved DXF: this action first extracts individual native blocks locally, then approves eligible placement-layer mappings. Existing approvals, dismissed records and saved block files are not replaced. DWG: import its AutoCAD extraction ZIP first."}),c.jsx("span",{children:"Approves only the selected company source; repeat for each source. EQUIP/f_Equip → equipment, f_Inst → instruments, f_Pipe_Inline → inline components. Mappings are shared across PFD and P&ID; internal, ambiguous, and missing-asset items stay pending."})]}),c.jsxs("button",{className:"btn primary",type:"button",disabled:V||me||!oe.some(U=>U.id===le&&U.category==="company-standard"),onClick:()=>{fa()},"data-testid":"button-approve-categorized-company-symbols",children:[V?c.jsx(Ia,{size:13,className:"pdf-spin"}):c.jsx(Ar,{size:13}),V?"Extracting / approving locally…":"Approve selected source"]})]}),M&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-library-error",children:[c.jsx(ps,{size:15}),c.jsx("span",{children:M})]}),R&&c.jsx("p",{className:"local-library-message",role:"status","aria-live":"polite","data-testid":"status-cad-source-action",children:R}),_.length>0&&c.jsxs("details",{className:"local-library-message",children:[c.jsxs("summary",{children:[_.length," excluded / review-required DXF items — show reasons"]}),c.jsx("ul",{children:_.map(U=>c.jsxs("li",{children:[U.blockName,": ",U.reason]},U.blockName))})]}),c.jsxs("div",{className:"local-library-summary","aria-label":"Local library totals",children:[c.jsxs("span",{children:[c.jsx("strong",{children:G.length})," saved CAD sources",o?` for ${l||"this client"}`:` for ${s}`]}),c.jsxs("span",{children:[c.jsx("strong",{children:he["company-standard"]})," Legends Library sources"]}),c.jsxs("span",{children:[c.jsx("strong",{children:he["project-example"]+he["markup-reference"]})," reference drawings"]}),he["needs-review"]>0&&c.jsxs("span",{className:"local-library-review-count",children:[c.jsx("strong",{children:he["needs-review"]})," need review"]})]}),c.jsx(i2,{discipline:s}),P>0&&c.jsxs(oa,{href:s==="PFD"?"/standards-review/pfd":"/standards-review/pid",className:"btn primary local-library-review-link","data-testid":"link-review-extracted-standards",children:[c.jsx(mE,{size:15}),"Review extracted standards",c.jsx("span",{children:P})]}),be&&c.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-source-folder-mismatch",children:[c.jsx(ps,{size:15}),c.jsx("span",{children:"These staged drawings belong to a different folder. Re-select that client or add them again here."})]}),E&&c.jsx("div",{className:"local-library-archive-summary",role:"status",children:E}),m.length>0&&c.jsxs("div",{className:"local-library-pdf-list","aria-label":"PDF files found in ZIP",children:[m.map(U=>c.jsxs("div",{className:"local-library-pdf-row",children:[c.jsx(us,{size:15}),c.jsx("span",{children:U.label}),c.jsx("span",{className:"pdf-file-meta",children:yu(U.file.size)})]},U.id)),c.jsxs("button",{className:"btn subtle",type:"button",disabled:j,onClick:()=>{a(m.map(({file:U})=>U)),L(!0)},"data-testid":"button-add-archive-pdfs",children:[j?c.jsx(Ar,{size:14}):c.jsx(Cr,{size:14}),j?"PDFs added to queue":"Add PDF(s) to conversion queue"]})]}),y.length>0&&c.jsxs("div",{className:"local-library-staging",children:[c.jsxs("div",{className:"local-library-staging-title",children:[c.jsx("strong",{children:o?"Choose how each client CAD drawing will be used":"Choose what each CAD drawing is for"}),c.jsx("span",{children:"Unmarked files will not be saved."})]}),y.map(U=>c.jsxs("label",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-name",children:[c.jsx("span",{className:"local-library-source-id",children:U.label}),c.jsxs("span",{className:"local-library-review-filename",title:U.reviewFilename,children:["Selected filename: ",U.reviewFilename]})]}),c.jsx("span",{className:"pdf-file-meta",children:yu(U.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Category for ${U.label}`,value:U.category,onChange:ie=>{const fe=ie.target.value;f(B=>B.map(de=>de.id===U.id?{...de,category:fe}:de))},"data-testid":`select-category-${U.id}`,children:Object.entries(Mu).filter(([ie])=>o?["needs-review","project-example","markup-reference","ignore"].includes(ie):["needs-review","company-standard","ignore"].includes(ie)).map(([ie,fe])=>c.jsx("option",{value:ie,children:Vm(ie,o)},ie))}),c.jsx("select",{"aria-label":`Discipline for ${U.label}`,value:U.discipline,onChange:ie=>{const fe=ie.target.value;f(B=>B.map(de=>de.id===U.id?{...de,discipline:fe}:de))},"data-testid":`select-discipline-${U.id}`,children:["PFD","P&ID","Shared"].map(ie=>c.jsx("option",{value:ie,children:ie},ie))}),["project-example","markup-reference"].includes(U.category)&&!o&&c.jsx("input",{"aria-label":`Project code for ${U.label}`,placeholder:"Neutral project code",value:U.projectLabel,onChange:ie=>f(fe=>fe.map(B=>B.id===U.id?{...B,projectLabel:ie.target.value}:B)),"data-testid":`input-project-${U.id}`}),o&&["project-example","markup-reference"].includes(U.category)&&c.jsx("span",{className:"local-library-scope-tag",children:"Saved only in this client folder"})]})]},U.id)),c.jsxs("button",{className:"btn primary local-library-save",type:"button",disabled:A||be||y.some(U=>U.category==="needs-review"||["project-example","markup-reference"].includes(U.category)&&!U.projectLabel?.trim()),onClick:()=>{it()},"data-testid":"button-save-local-library",children:[A?c.jsx(Ia,{size:14,className:"pdf-spin"}):c.jsx(Qg,{size:14}),A?"Saving locally…":"Save reviewed sources locally"]})]}),G.length>0&&c.jsxs("details",{className:"local-library-saved-list",children:[c.jsxs("summary",{children:["Saved source drawings for ",s," (",G.length,")"]}),c.jsx("div",{className:"local-library-saved-items",children:G.map(U=>c.jsxs("div",{className:"local-library-source-row",children:[c.jsxs("span",{className:"local-library-source-id",children:[U.label," · ",U.format??"DWG",o?` · ${U.category==="company-standard"?"Company standard":"This client"}`:U.projectLabel?` · ${U.projectLabel}`:""]}),c.jsx("span",{className:"pdf-file-meta",children:yu(U.bytes)}),c.jsxs("div",{className:"local-library-row-controls",children:[c.jsx("select",{"aria-label":`Change category for ${U.label}`,value:(g[U.id]??U).category,disabled:!!(o&&U.category==="company-standard"),onChange:ie=>pt(U,{category:ie.target.value}),"data-testid":`saved-category-${U.id}`,children:Object.entries(Mu).filter(([ie])=>!o||["project-example","markup-reference","ignore"].includes(ie)||U.category==="company-standard"&&ie==="company-standard").map(([ie,fe])=>c.jsx("option",{value:ie,children:Vm(ie,o)},ie))}),c.jsx("select",{"aria-label":`Change discipline for ${U.label}`,value:(g[U.id]??U).discipline,disabled:!!(o&&U.category==="company-standard"),onChange:ie=>pt(U,{discipline:ie.target.value}),"data-testid":`saved-discipline-${U.id}`,children:["PFD","P&ID","Shared"].map(ie=>c.jsx("option",{value:ie,children:ie},ie))}),!o&&["project-example","markup-reference"].includes((g[U.id]??U).category)&&c.jsx("input",{"aria-label":`Neutral project code for ${U.label}`,placeholder:"Neutral project code",value:(g[U.id]??U).projectLabel??"",onChange:ie=>pt(U,{projectLabel:ie.target.value}),"data-testid":`saved-project-${U.id}`}),c.jsxs("button",{className:"btn subtle local-library-save-row",type:"button",disabled:!!(o&&U.category==="company-standard"),onClick:()=>{jt(U)},"data-testid":`button-save-source-${U.id}`,children:[c.jsx(Qg,{size:12})," Save"]})]})]},U.id))})]}),c.jsx("p",{className:"local-library-limit",children:"Extracted records enter the standards review queue. Only approved mappings are offered to the matching PFD or P&ID runner. Original DWG/DXF sources stay local; only individually exported block files are included with approved mappings."})]})}const Gm={BLOCK:"symbol",LAYER:"layer",TEXT_STYLE:"textStyle",LINETYPE:"linetype",DIMENSION_STYLE:"dimensionStyle"},$u=100*1024*1024,Uu=500*1024*1024,d2="pid-studio-local-pdfs",tn="meta",Ms="bytes",Vo="extractedText";class Xt extends Error{code;constructor(s,o){super(o),this.code=s}}let Sr=null,Hm=Promise.resolve();function Us(){return Sr||(Sr=new Promise((a,s)=>{if(typeof indexedDB>"u"){s(new Xt("storage","This browser does not allow local file storage."));return}const o=indexedDB.open(d2,2);o.onupgradeneeded=l=>{const i=o.result;l.oldVersion<1&&(i.createObjectStore(tn,{keyPath:"id"}).createIndex("discipline","discipline"),i.createObjectStore(Ms)),l.oldVersion<2&&i.createObjectStore(Vo)},o.onsuccess=()=>{o.result.onversionchange=()=>{o.result.close(),Sr=null},a(o.result)},o.onerror=()=>{Sr=null,s(new Xt("storage","Local storage could not be opened."))},o.onblocked=()=>{Sr=null,s(new Xt("storage","Local file storage is busy in another tab. Close that tab and reload."))}})),Sr}function al(a){return new Promise((s,o)=>{a.onsuccess=()=>s(a.result),a.onerror=()=>o(a.error)})}function Fi(a){return new Promise((s,o)=>{a.oncomplete=()=>s(),a.onerror=()=>o(a.error),a.onabort=()=>o(a.error??new Xt("storage","Local storage write was stopped."))})}function zi(a){const s=Hm.then(a,a);return Hm=s.catch(()=>{}),s}async function bb(a){const s=await Us();return(await al(s.transaction(tn).objectStore(tn).index("discipline").getAll(a))).sort((l,i)=>l.aliasNumber-i.aliasNumber)}async function u2(){const a=await Us();return(await al(a.transaction(tn).objectStore(tn).getAll())).reduce((o,l)=>o+l.size,0)}async function f2(a){const s=globalThis.crypto?.subtle;if(!s)throw new Error("hash-unsupported");const o=await s.digest("SHA-256",a);return Array.from(new Uint8Array(o)).map(l=>l.toString(16).padStart(2,"0")).join("")}function p2(a,s){return zi(async()=>{if(!s())throw new Xt("cancelled","Cancelled.");const o=a.bytes.byteLength;if(o>$u)throw new Xt("too-large","This PDF is larger than 100 MB.");const i=(await Us()).transaction([tn,Ms],"readwrite"),p=Fi(i);p.catch(()=>{});const g=i.objectStore(tn),h=await al(g.getAll());if(!s())throw i.abort(),new Xt("cancelled","Cancelled.");if(h.some(v=>v.discipline===a.discipline&&v.hash===a.hash))throw i.abort(),new Xt("duplicate","This PDF has the same content as a saved file.");if(h.reduce((v,E)=>v+E.size,0)+o>Uu)throw i.abort(),new Xt("total-limit","Saved PDFs would pass the 500 MB total limit.");const f=h.filter(v=>v.discipline===a.discipline).reduce((v,E)=>Math.max(v,E.aliasNumber),0)+1,m={id:globalThis.crypto?.randomUUID?.()??`pdf-${Date.now()}-${Math.random().toString(36).slice(2)}`,discipline:a.discipline,aliasNumber:f,alias:`PDF ${f}`,size:o,pageCount:a.pageCount,hash:a.hash,addedAt:Date.now(),analysisStatus:"queued",analysisPagesDone:0,analysisRecordCount:0,autocadStatus:"not-connected"};g.put(m),i.objectStore(Ms).put(a.bytes,m.id);try{await p}catch(v){throw v instanceof Xt?v:new Xt("storage","The browser could not save this PDF. Storage may be full.")}return m})}async function ko(a){const s=await Us(),o=await al(s.transaction(Ms).objectStore(Ms).get(a));if(!o)throw new Xt("storage","Saved PDF data was not found.");return o}function h2(a,s){return zi(async()=>{const l=(await Us()).transaction(Vo,"readwrite"),i=Fi(l);l.objectStore(Vo).put({pdfId:a,pages:s,savedAt:Date.now()},a);try{await i}catch{throw new Xt("storage","PDF text was read, but the browser could not save the full text index. The original PDF remains saved; free browser storage and retry EDE.")}})}function bi(a,s){return zi(async()=>{const l=(await Us()).transaction(tn,"readwrite"),i=Fi(l),p=l.objectStore(tn),g=await al(p.get(a));if(!g)throw l.abort(),new Xt("storage","The saved PDF record could not be found.");const h={...g,...s};return p.put(h),await i,h})}function vb(a){return zi(async()=>{const o=(await Us()).transaction([tn,Ms,Vo],"readwrite");a.forEach(l=>{o.objectStore(tn).delete(l),o.objectStore(Ms).delete(l),o.objectStore(Vo).delete(l)}),await Fi(o)})}async function g2(a){const s=await bb(a);await vb(s.map(o=>o.id))}class Si extends Error{constructor(s,o,l){super(`Page ${s}: ${o} failed.`,{cause:l}),this.page=s,this.stage=o,this.name="PdfExtractionError"}page;stage}function Km(a){const s=a instanceof Si?a.cause:a,o=s instanceof Error?s.name:"",l=s instanceof Error?s.message:typeof s=="string"?s:"",i=a instanceof Si?`Page ${a.page} stopped during ${a.stage}. `:"EDE extraction stopped. ";return o==="QuotaExceededError"?`${i}Browser storage is full. Back up your records before freeing space, then retry EDE. Your PDF remains saved.`:/memory|allocation|out of bounds/i.test(l)?`${i}The browser ran out of processing memory. Close other tabs and retry, or use a desktop browser. Your PDF remains saved.`:/fetch|network|importscripts|load.*(worker|core|language)|failed to load/i.test(l)||a instanceof Si&&a.stage==="OCR startup"?`${i}The OCR engine could not start. Check internet access to the OCR downloads, then retry EDE. Your PDF remains saved.`:`${i}The PDF could not be processed${o?` (${o.replace(/[^a-zA-Z0-9]/g,"").slice(0,60)})`:""}. Retry EDE; if it repeats, report this message. Your PDF remains saved.`}const m2=/\b(?:[A-Z]{1,8}\s*[-–]\s*)+\d{1,6}[A-Z0-9]*(?:\s*[-–]\s*[A-Z0-9]{1,8}){0,3}\b/g,y2=/^(?:AI|DI|FI|FIC|FIT|FQI|LI|LIC|LS|LSH|LSL|PI|PIC|PDI|PSH|PSL|TI|TIC|TSH|TSL|TT|PT|FT|LT|FC|PC|TC|LC|AT|AIT|XV|ZSO|ZSC)$/,b2=/^(?:XV|HV|BV|CV|PCV|FCV|LCV|TCV|PSV|PRV|MOV|SDV|BDV|NRV)$/,v2=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/g,E2=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/i;function Eb(a,s,o,l,i,p,g){const h=Math.max(0,Math.min(1,l/s)),y=Math.max(0,Math.min(1,i/o)),f=Math.max(h,Math.min(1,p/s)),m=Math.max(y,Math.min(1,g/o));return f-h<1e-4||m-y<1e-4?null:{pageNumber:a,x:h,y,width:f-h,height:m-y}}function w2(a,s,o){const l=[o.convertToViewportPoint(a.x,a.y),o.convertToViewportPoint(a.x+a.width,a.y),o.convertToViewportPoint(a.x,a.y+a.height),o.convertToViewportPoint(a.x+a.width,a.y+a.height)];return Eb(s,o.width,o.height,Math.min(...l.map(i=>i[0]??0)),Math.min(...l.map(i=>i[1]??0)),Math.max(...l.map(i=>i[0]??0)),Math.max(...l.map(i=>i[1]??0)))}function x2(a,s,o){const l=[];for(const i of a){if(!i.text||!i.bbox)continue;const p=Eb(s,o.pageWidth,o.pageHeight,o.left+i.bbox.x0,o.top+i.bbox.y0,o.left+i.bbox.x1,o.top+i.bbox.y1);p&&l.push(...Ti(i.text,s).map(g=>({...g,sourceLocations:[p]})))}return l}function S2(a,s){const o=new Map;for(const l of[...a??[],...s??[]]){const i=[l.pageNumber,l.x.toFixed(4),l.y.toFixed(4),l.width.toFixed(4),l.height.toFixed(4)].join(":");!o.has(i)&&o.size<500&&o.set(i,l)}return[...o.values()]}function T2(a){let s="",o;for(const l of a){const i=l.str.replace(/\s+/g," ").trim();if(i){if(o){const p=Math.max(1,(o.fontSize+l.fontSize)/2),g=Math.abs(l.y-o.y)<=Math.max(1,p*.3),h=l.x-(o.x+o.width),y=g&&h>=-p*.5&&h<=p*.35;s+=y?"":g?" ":`
`,o.hasEOL&&!s.endsWith(`
`)&&(s+=`
`)}s+=i,o=l}}return s}function Wm(a,s=1700,o=120){if(a<=s+o)return[0];const l=s-o,i=[];for(let p=0;p<a;p+=l){const g=a-(p+s);if(g>0&&g<=o&&(p=a-s),i.push(p),p+s>=a)break}return i}function Ti(a,s){const o=new Map,l=a.toUpperCase();for(const i of l.matchAll(m2)){const p=i[0].replace(/[–\s]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),g=p.split("-").filter(Boolean),h=p.match(/^([A-Z]{1,8})-(\d{1,6})(.*)$/);if(!h||p.length<3||g.length>6)continue;const y=h[1],f=/^OPC$/.test(y)?"OPC":b2.test(y)?"Valve":y2.test(y)?"Instrument":g.length>=4||/^(?:L|LINE|PIPE)$/.test(y)?"Pipe Run":"Equipment",m=Math.max(0,(i.index??0)-180),v=Math.min(l.length,(i.index??0)+i[0].length+180),E=l.slice(m,v),S=E.match(/\b(?:NOMINAL\s*(?:DIA(?:METER)?|SIZE)|NPS|DN)\s*[:#=-]?\s*((?:(?:NPS|DN)\s*)?\d{1,3}(?:\s*\/\s*\d{1,2})?(?:\.\d+)?\s*(?:MM|IN(?:CH)?)?["”]?)/i)?.[1]??"",R=E.match(/\b(?:PIPING|PIPE)\s*(?:MATERIAL|MATL)\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})/i)?.[1]??"",D=E.match(/\b(?:DESIGN\s+FLOW|FLOW(?:\s+RATE)?)\s*[:=]?\s*([\d.,]+\s*(?:KG\/H|M3\/H|NM3\/H|T\/H|L\/S|M3\/D|GPM|M\/S)?)/i)?.[1]??"",C=E.match(/\b(?:HEAT\s+TRACING|HEAT\s+TRACE)\s*[:=]?\s*(YES|NO|ELECTRIC|STEAM|NONE|N\/A)\b/i)?.[1]??"",w=E.match(/\bINSULATION\s*[:=]?\s*([A-Z0-9][A-Z0-9._/-]{0,12})/i)?.[1]??"",k=h[3].split("-").filter(Boolean).at(-1)??"",M=f==="Pipe Run"&&/[A-Z]/i.test(k)&&/\d/.test(k)?k:"",x=E.match(E2)?.[1]??M,j=`${f}:${p.toLowerCase()}`;o.has(j)||o.set(j,{tag:p,type:f,tagPrefix:y,tagSequence:h[2],tagSuffix:h[3].replace(/^-/,""),pageNumber:s,nominalDiameter:S.replace(/\s+/g," ").trim(),pipingMaterial:R,lineSpec:x,flow:D,heatTracing:C,insulation:w})}for(const i of l.matchAll(v2)){const p=i[1].replace(/\s+/g,"").toUpperCase(),g=`Line Spec:${p.toLowerCase()}`;o.has(g)||o.set(g,{tag:p,type:"Line Spec",tagPrefix:"LINE SPEC",tagSequence:p,tagSuffix:"",lineSpec:p,pageNumber:s})}return[...o.values()]}const A2=/^(?:(?:GENERAL|PROCESS|DESIGN|SAFETY|OPERATING|CONSTRUCTION)\s+)?NOTES?\s*[:.-]?\s*(.*)$/i,D2=/^(?:LEGENDS?|ABBREVIATIONS?|SYMBOLS?|REFERENCES?|REVISION(?:S)?|DRAWING\s+(?:TITLE|NO|NUMBER)|PROJECT|CLIENT|SCALE|TITLE\s*BLOCK|EQUIPMENT\s+LIST|LINE\s+LIST)\b/i,C2=/^(?:(?:NOTE\s*)?\d{1,3}\s*[.)-]\s+|[A-Z]\s*[.)]\s+).+/i,N2=/^(?:GENERAL\s+)?NOTE(?:\s+\d+)?\s*[:#-]\s*.+/i;function k2(a){const s=[];for(const o of a){const l=[{text:o.searchableText,label:"PDF text"},...o.ocrTiles.map(h=>({text:h,label:"OCR text"}))],i=new Set,p=[];for(const h of l){let y=!1,f="";const m=()=>{const v=f.replace(/\s+/g," ").trim();if(v.length>=8){const E=v.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();E&&!i.has(E)&&(i.add(E),p.push({text:v,label:h.label}))}f=""};for(const v of h.text.replace(/\r/g,`
`).split(`
`)){const E=v.replace(/\s+/g," ").trim();if(!E)continue;const S=E.match(A2);if(S){m(),y=!0,S[1]&&(f=S[1].trim());continue}if(y&&D2.test(E)){m(),y=!1;continue}if(N2.test(E)){m(),f=E,y=!0;continue}if(C2.test(E)){const R=E.length>=36&&E.split(/\s+/).length>=7;y||R?(m(),f=E,y=!0):m();continue}y?f=f?`${f} ${E}`:E:m()}m()}let g=0;for(const h of p){const y=[];for(let f=0;f<h.text.length;){let m=Math.min(f+1500,h.text.length);if(m<h.text.length){const v=h.text.lastIndexOf(" ",m);v>f+700&&(m=v)}y.push(h.text.slice(f,m)),f=m}for(const f of y){const m=f.trim();m&&(g+=1,s.push({tag:`NOTE-P${o.pageNumber}-${g}`,type:"Item Note",tagPrefix:"NOTE",tagSequence:String(g),tagSuffix:`P${o.pageNumber}`,pageNumber:o.pageNumber,description:`${h.label} note — review against source: ${m}`}))}}}return s}function bu(a,s){const o=new Map(a.map(l=>[`${l.type}:${l.tag.toLowerCase()}`,{...l}]));for(const l of s){const i=`${l.type}:${l.tag.toLowerCase()}`,p=o.get(i);if(!p){o.set(i,{...l});continue}p.sourceLocations=S2(p.sourceLocations,l.sourceLocations);for(const g of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])!p[g]&&l[g]&&(p[g]=l[g])}return[...o.values()]}async function R2(a,s,o=()=>!0){const[l,i]=await Promise.all([Pn(()=>import("./pdf-TYrZqVzP.js"),[]),Pn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);l.GlobalWorkerOptions.workerSrc=i.default;const p=l.getDocument({data:new Uint8Array(a.slice(0))}),g=await p.promise;let h=null;const y=new Map,f=[];let m=0,v=1,E="PDF text";try{for(let S=1;S<=g.numPages;S++){if(v=S,E="PDF text",!o())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const R=await g.getPage(S),D=await R.getTextContent(),C=R.getViewport({scale:1}),w=D.items.flatMap(j=>{if(!("str"in j)||typeof j.str!="string"||!j.str||!("transform"in j)||!Array.isArray(j.transform))return[];const L=j.transform;return[{str:j.str,x:L[4]??0,y:L[5]??0,width:"width"in j&&typeof j.width=="number"?j.width:0,height:"height"in j&&typeof j.height=="number"?j.height:0,fontSize:Math.hypot(L[0]??0,L[1]??0)||10,hasEOL:"hasEOL"in j&&j.hasEOL===!0}]}),A=T2(w),k=[];let M=Ti(A,S);const x=w.flatMap(j=>{const L=w2({...j,height:j.height||j.fontSize},S,C);return L?Ti(j.str,S).map(P=>({...P,sourceLocations:[L]})):[]});if(M=bu(M,x),A.replace(/\s/g,"").length<800||M.length<20){if(s?.(S,g.numPages,"OCR"),!h){E="OCR startup";const{createWorker:le,PSM:ve}=await Pn(async()=>{const{createWorker:me,PSM:ce}=await import("./index-BQChQw_b.js").then(V=>V.i);return{createWorker:me,PSM:ce}},__vite__mapDeps([0,1]));h=await le("eng",1,{workerPath:"https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js",corePath:"https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0",langPath:"https://tessdata.projectnaptha.com/4.0.0"}),await h.setParameters({tessedit_pageseg_mode:ve.SPARSE_TEXT,preserve_interword_spaces:"1"})}const j=R.getViewport({scale:1});E="page image";const L=Math.min(3.5,3200/Math.max(j.width,j.height)),P=R.getViewport({scale:L}),K=document.createElement("canvas"),ue=document.createElement("canvas");K.width=Math.ceil(P.width),K.height=Math.ceil(P.height);const ne=K.getContext("2d",{willReadFrequently:!1});if(!ne)throw new Error("This browser cannot prepare a page image for local OCR.");try{await R.render({canvas:K,canvasContext:ne,viewport:P}).promise;const le=1700,ve=120,me=[],ce=Wm(K.width,le,ve),V=Wm(K.height,le,ve);for(const re of V)for(const ye of ce){if(!o())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const Ae=Math.min(K.width<=le+ve?K.width:le,K.width-ye),_=Math.min(K.height<=le+ve?K.height:le,K.height-re);ue.width=Ae,ue.height=_;const Q=ue.getContext("2d",{willReadFrequently:!1});if(!Q)throw new Error("This browser cannot prepare a page image for local OCR.");Q.drawImage(K,ye,re,Ae,_,0,0,Ae,_),E="OCR reading";const $=await h.recognize(ue);k.push($.data.text),me.push(...Ti($.data.text,S)),me.push(...x2($.data.words??[],S,{left:ye,top:re,pageWidth:K.width,pageHeight:K.height}))}m+=1,M=bu(M,me)}finally{K.width=0,K.height=0,ue.width=0,ue.height=0}}else s?.(S,g.numPages,"PDF text");for(const j of M){const L=`${j.type}:${j.tag.toLowerCase()}`,P=y.get(L);y.set(L,P?bu([P],[j])[0]:j)}f.push({pageNumber:S,searchableText:A,ocrTiles:k}),R.cleanup()}return{candidates:[...y.values()],pages:g.numPages,ocrPages:m,pageText:f}}catch(S){throw o()?new Si(v,E,S):S}finally{await h?.terminate().catch(()=>{}),await p.destroy().catch(()=>{})}}const wb=["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef","placementDrawingRef","nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description","notes","sourcePage","reviewStatus"],_n=[...wb,"stableId"],xb=/^[0-9A-F]{32}$/,j2=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,L2=["plantGroup","fluidService","nominalDiameter","pipingMaterial","lineSpec","insulation","heatTracing","groupStatus"],O2=["","Start","Continue","Branch","Merge","End-of-Group"];function Sb(){return crypto.randomUUID().replaceAll("-","").toUpperCase()}function sf(a){const s=a.toUpperCase();if(xb.test(s))return s;if(j2.test(a))return s.replaceAll("-","");throw new Error("A Stable ID must contain exactly 32 letters or numbers (A–F, 0–9).")}function fn(a,s){return s==="stableId"?a.id:a[s]}function _2(a,s){const o=a.placementDrawingRef.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase();return o?[s.id,s.name].map(i=>i.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase()).includes(o)?"current":"another":"available"}const wt={itemTag:"Item Tag",tagPrefix:"Tag Prefix",tagSequence:"Tag Sequence",tagSuffix:"Tag Suffix",equipmentClass:"Equipment Class",equipmentType:"Equipment Type",equipmentName:"Equipment Name",drawingRef:"Source Drawing / Page",placementDrawingRef:"Placed on Drawing",nominalDiameter:"Nominal Diameter",plantGroup:"Plant Group",fluidService:"Fluid / Service",pipingMaterial:"Piping Material Class",lineSpec:"Line Spec",flow:"Flow",flowDirection:"Flow Direction",heatTracing:"Heat Tracing",insulation:"Insulation",fromTag:"From",toTag:"To",groupStatus:"Group Status",opcDrawing:"OPC Drawing",connection:"Connection",description:"Description",notes:"Notes",sourcePage:"Source page",reviewStatus:"Review status",stableId:"Stable ID"},ji=wb,Tr={itemTag:"The tag printed beside the equipment, line, valve, or instrument. A repeated Pipe Run tag needs different line data.",tagPrefix:"The letter code at the start of the tag.",tagSequence:"The main number in the tag.",tagSuffix:"Extra letters or numbers after the main tag number.",equipmentClass:"The approved class or family for this equipment.",equipmentType:"What the equipment is, such as a pump or vessel, when the drawing states it.",equipmentName:"The equipment name or service, only when the source clearly labels it.",drawingRef:"The source drawing or PDF page where this record came from.",placementDrawingRef:"The CAD drawing that contains this object. Blank means available or not placed. This is a reference only; it does not place or move CAD entities.",nominalDiameter:"The stated pipe or nozzle size, such as DN50 or 2 inch.",plantGroup:"The plant, unit, or area group, if stated.",fluidService:"The stated fluid or process service for this line.",pipingMaterial:"The approved piping material class or code.",lineSpec:"The piping line class/specification code. It is separate from the pipe run tag.",flow:"The stated flow value or direction. A line arrow alone is not converted to a value.",flowDirection:"The confirmed upstream/downstream flow direction.",heatTracing:"The stated heat-tracing requirement or type.",insulation:"The stated insulation requirement or code.",fromTag:"The connected source tag or point shown for this pipe run.",toTag:"The connected destination tag or point shown for this pipe run.",groupStatus:"Start, Continue, Branch, Merge, or End-of-Group for the pipe run.",opcDrawing:"The linked off-page connector drawing number, if shown.",connection:"A stated connection or connected item; line geometry is not inferred here.",description:"A short object description from the source. Blank means no clear value was found.",notes:"Drawing notes or additional comments associated with this record.",sourcePage:"The page in the original PDF where this candidate was found.",reviewStatus:"Needs review means check the tag and fields before using them.",stableId:"Permanent object identity. It stays the same when the tag, drawing, size, or geometry changes."},Xo=["Equipment","Equipment Component","Equipment Heat Transfer","Equipment Mechanical","Equipment Other","Equipment Vessel","Hydraulic Circuit","Instrument","Instrument Loop","Item Note","Line Spec","Nozzle","OPC","Package","Pipe Run","Valve"],Li=a=>`pid-mapping-studio:engineering-workspace:v2:${a}`;function Tb(a,s){if(!Array.isArray(a))return Bu(a);const o=a.map(l=>!l||typeof l!="object"||!Array.isArray(l.rows)?l:{...l,rows:l.rows.map(i=>{if(!i||typeof i!="object")return i;const p=typeof i.id=="string"?i.id:"";let g;try{g=sf(p)}catch{g=Sb()}g!==i.id&&s?.();const h=typeof i.description=="string"?i.description:"",y=typeof i.notes=="string",f=/^(?:PDF text|OCR text) note — review against source:\s*/iu,m=y?i.notes:i.type==="Item Note"?h.replace(f,""):"",v=!y&&i.type==="Item Note"&&h?f.test(h)?"Drawing note extracted from PDF; check the source page.":"":h;return(!y||v!==h)&&s?.(),{...i,id:g,description:v,notes:m,sourcePage:typeof i.sourcePage=="string"?i.sourcePage:"",placementDrawingRef:typeof i.placementDrawingRef=="string"?i.placementDrawingRef:"",lineSpec:typeof i.lineSpec=="string"?i.lineSpec:"",plantGroup:typeof i.plantGroup=="string"?i.plantGroup:"",fluidService:typeof i.fluidService=="string"?i.fluidService:"",flowDirection:typeof i.flowDirection=="string"?i.flowDirection:"",fromTag:typeof i.fromTag=="string"?i.fromTag:"",toTag:typeof i.toTag=="string"?i.toTag:"",groupStatus:typeof i.groupStatus=="string"?i.groupStatus:"",...i.sourceLocations===void 0?{}:{sourceLocations:i.sourceLocations},reviewStatus:i.reviewStatus==="Needs review"||i.reviewStatus==="Reviewed"?i.reviewStatus:"Manual"}})});return Bu(o)}function Bu(a){if(!Array.isArray(a)||a.length>500)throw new Error("Invalid drawing catalog. Keep a backup and do not overwrite saved data.");const s=new Set,o=new Set;let l=0;for(const i of a){if(!i||typeof i!="object"||typeof i.id!="string"||typeof i.name!="string"||!i.name.trim()||i.name.length>160||typeof i.revision!="string"||i.revision.length>80||!Array.isArray(i.rows)||s.has(i.id))throw new Error("The drawing catalog contains an invalid or duplicate drawing.");s.add(i.id);const p=new Map;for(const g of i.rows){if(g?.type==="Pipe Run"&&!O2.includes(g.groupStatus))throw new Error("Pipe Run group status must be Start, Continue, Branch, Merge, or End-of-Group.");if(!g||typeof g!="object"||typeof g.id!="string"||!xb.test(g.id)||o.has(g.id)||!Xo.includes(g.type)||ji.some(f=>typeof g[f]!="string"||g[f].length>2e3)||!["Manual","Needs review","Reviewed"].includes(g.reviewStatus)||g.sourcePdfId!==void 0&&typeof g.sourcePdfId!="string"||g.sourceLocations!==void 0&&(!Array.isArray(g.sourceLocations)||g.sourceLocations.length>500||g.sourceLocations.some(f=>{if(!f||typeof f!="object")return!0;const m=f;return!Number.isInteger(m.pageNumber)||m.pageNumber<1||!["x","y","width","height"].every(v=>typeof m[v]=="number"&&Number.isFinite(m[v]))||m.x<0||m.y<0||m.width<=0||m.height<=0||m.x>1||m.y>1||m.x+m.width>1.02||m.y+m.height>1.02}))||!g.itemTag.trim())throw new Error("Each record needs a valid Stable ID, object type, and text fields.");const h=g.itemTag.trim().toLowerCase(),y=p.get(h)??[];if(y.length&&(g.type!=="Pipe Run"||y.some(f=>f.type!=="Pipe Run"||!L2.some(m=>f[m]!==g[m]))))throw new Error("This tag is already used. Repeated Pipe Run tags need different line-defining data.");if(typeof g.x!="number"||typeof g.y!="number"||!Number.isFinite(g.x)||!Number.isFinite(g.y))throw new Error("A record contains invalid coordinates.");p.set(h,[...y,g]),o.add(g.id),l+=1}}if(l>2e4)throw new Error("This local workspace supports up to 20,000 engineering records.");return a}function Go(a){const s=window.localStorage.getItem(Li(a));if(!s)return[];let o=!1;const l=Tb(JSON.parse(s),()=>{o=!0});if(o)try{window.localStorage.setItem(Li(a),JSON.stringify(l))}catch{throw new Error("Saved records were read, but the data-format update could not be saved because browser storage is full. The original saved data was not overwritten; download a backup before freeing space.")}return l}function Nr(a){return window.localStorage.getItem(Li(a))}function Fu(a,s,o){if(Bu(s),Nr(a)!==o)throw new Error("This workspace changed in another tab. Reload before editing to avoid overwriting its records.");const l=JSON.stringify(s);return window.localStorage.setItem(Li(a),l),l}function rf(a,s,o){return{...Object.fromEntries(ji.map(l=>[l,""])),id:Sb(),type:a,itemTag:s.trim(),drawingRef:o,reviewStatus:"Manual",x:0,y:0}}function P2(a,s){return JSON.stringify({version:5,discipline:a,drawings:s},null,2)}function q2(a,s){const o=JSON.parse(a);if(![2,3,4,5].includes(o?.version)||o?.discipline!==s)throw new Error(`Choose a ${s.toUpperCase()} workspace backup. PFD and P&ID backups stay separate.`);return Tb(o.drawings)}function I2(a,s){const o=new Map;for(const l of[...a??[],...s??[]]){const i=[l.pageNumber,l.x.toFixed(4),l.y.toFixed(4),l.width.toFixed(4),l.height.toFixed(4)].join(":");!o.has(i)&&o.size<500&&o.set(i,l)}return[...o.values()]}function Zm(a,s){const o=rf(a.type,a.tag,`${s.alias} · Page ${a.pageNumber}`);o.tagPrefix=a.tagPrefix??"",o.tagSequence=a.tagSequence??"",o.tagSuffix=a.tagSuffix??"";for(const l of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])o[l]=a[l]??"";return o.sourcePage=String(a.pageNumber),o.sourcePdfId=s.id,o.sourceLocations=a.sourceLocations?.slice(0,500),o.reviewStatus="Needs review",a.type==="Item Note"?(o.notes=(a.description??"").replace(/^(?:PDF text|OCR text) note — review against source:\s*/iu,""),o.description="Drawing note extracted from PDF; check the source page."):o.description=a.description??"Tag candidate found in the PDF. Confirm the object type and details before using it.",o}function M2(a,s,o){const l=Go(a),i=l.find(S=>S.sourcePdfId===s.id);if(i){const S=new Map(o.map(A=>[A.tag.trim().toLowerCase(),A])),R=new Set(i.rows.map(A=>A.itemTag.trim().toLowerCase()));let D=!1;const C=i.rows.map(A=>{const k=S.get(A.itemTag.trim().toLowerCase());if(!k)return A;const M=I2(A.sourceLocations,k.sourceLocations),x=A.sourcePage||String(k.pageNumber);return M.length===(A.sourceLocations?.length??0)&&x===A.sourcePage?A:(D=!0,{...A,sourcePage:x,sourceLocations:M})}),w=o.flatMap(A=>{const k=A.tag.trim().toLowerCase();return!k||R.has(k)?[]:(R.add(k),D=!0,[Zm(A,s)])});if(D){const A=l.map(k=>k.id===i.id?{...k,rows:[...C,...w]}:k);Fu(a,A,Nr(a))}return{drawingId:i.id,recordCount:C.length+w.length}}const p=new Set(l.map(S=>S.name.toLowerCase())),g=`${s.alias} · Extracted data`;let h=g,y=2;for(;p.has(h.toLowerCase());)h=`${g} (${y++})`;const f=new Set,m=o.flatMap(S=>{const R=S.tag.trim().toLowerCase();return!R||f.has(R)?[]:(f.add(R),[Zm(S,s)])}),v={id:crypto.randomUUID(),name:h,revision:"Local PDF extraction · review required",sourcePdfId:s.id,sourceAlias:s.alias,rows:m},E=Nr(a);return Fu(a,[...l,v],E),{drawingId:v.id,recordCount:m.length}}function vi(a,s,o){const l=URL.createObjectURL(new Blob([s],{type:o})),i=document.createElement("a");i.href=l,i.download=a,i.click(),setTimeout(()=>URL.revokeObjectURL(l),1e3)}function $2(a){return Ab(["Object type",..._n.map(s=>wt[s])],a.map(s=>[s.type,..._n.map(o=>fn(s,o))]))}function Ab(a,s){const o=l=>`"${(/^[\s]*[=+\-@\t\r]/.test(l)?`'${l}`:l).replaceAll('"','""')}"`;return"\uFEFF"+[a,...s].map(l=>l.map(i=>o(String(i))).join(",")).join(`\r
`)}function U2(a,s){const o=[];let l=[],i="",p=!1;const g=a.replace(/^\uFEFF/,"");for(let E=0;E<g.length;E++){const S=g[E];if(S==='"')if(p&&g[E+1]==='"')i+='"',E++;else{if(!p&&i!=="")throw new Error("Invalid CSV quoting.");p=!p}else!p&&S===","?(l.push(i),i=""):!p&&(S===`
`||S==="\r")?(l.push(i),l.some(R=>R.trim())&&o.push(l),l=[],i="",S==="\r"&&g[E+1]===`
`&&E++):i+=S}if(p)throw new Error("The CSV has an unclosed quoted cell.");l.push(i),l.some(E=>E.trim())&&o.push(l);const h=o.shift()?.map(E=>E.trim().toLowerCase())??[],y=h.findIndex(E=>E==="object type"||E==="type"),f=ji.map(E=>h.findIndex(S=>S===E.toLowerCase()||S===wt[E].toLowerCase())),m=h.findIndex(E=>E==="stableid"||E===wt.stableId.toLowerCase());if(y<0||f[0]<0)throw new Error("CSV needs Object type and Item Tag columns. Download the template first.");if(!o.length)throw new Error("The CSV contains no records.");if(o.length>2e4)throw new Error("Import at most 20,000 records.");const v=new Set;return o.map((E,S)=>{if(E.length!==h.length)throw new Error(`CSV row ${S+2} has the wrong number of columns.`);const R=Xo.find(C=>C.toLowerCase()===E[y]?.trim().toLowerCase());if(!R)throw new Error(`CSV row ${S+2} has an unsupported object type.`);const D=rf(R,E[f[0]]??"",s);if(m>=0&&E[m]?.trim())try{D.id=sf(E[m].trim())}catch{throw new Error(`CSV row ${S+2} has an invalid Stable ID.`)}if(v.has(D.id))throw new Error(`CSV row ${S+2} repeats a Stable ID.`);return v.add(D.id),ji.forEach((C,w)=>{if(f[w]<0)return;const A=E[f[w]].trim();C==="reviewStatus"?D.reviewStatus=["Needs review","Reviewed","Manual"].includes(A)?A:"Manual":D[C]=A}),D.drawingRef||(D.drawingRef=s),D})}function B2(a,s=!1,o=""){const l=a.map((i,p)=>`(${p+1} ${i})`).join(" ");return`; Single working drawing PDF batch runner.
; Each approved page is saved to a separate, never-overwritten DWG.
(vl-load-com)
(setq *p2dwg-project-title-block-enabled* ${s?"T":"nil"})
(setq *p2dwg-batch-run-id* "${o}")
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

(defun p2dwg-next-title-block-path (directory / candidate sequence)
  (setq sequence 1)
  (setq candidate (strcat directory "/PROJECT_TITLE_BLOCK_" (p2dwg-pad sequence 3) ".dwg"))
  (while (findfile candidate)
    (setq sequence (1+ sequence))
    (setq candidate (strcat directory "/PROJECT_TITLE_BLOCK_" (p2dwg-pad sequence 3) ".dwg")))
  candidate
)

(defun p2dwg-copy-title-block (source directory / target)
  (if (not (findfile source))
    (p2dwg-raise "The project title block is missing from the extracted runner folder."))
  (setq target (p2dwg-next-title-block-path directory))
  (if (not (vl-file-copy source target))
    (p2dwg-raise "The project title block could not be copied into the output folder. No page DWG was saved."))
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

(defun p2dwg-run-queue (queue logPath directory base scaleFactor titleBlockSource /
                          currentDoc settings entry baseline baselineBlocks owned job worker result
                          stopped workingPath pageResult message titleBlockOutput titleBlockAttached)
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
                   (setq titleBlockOutput (p2dwg-copy-title-block titleBlockSource directory))
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
              (setq pageResult
                (apply worker (list (nth 4 job) (nth 1 job) (nth 5 job) scaleFactor)))
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
                  (if (and (numberp *p2dwg-effective-scale*) (> *p2dwg-effective-scale* 0.0))
                    (setq scaleFactor *p2dwg-effective-scale*))
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
                        page queue logPath titleBlockPath entry)
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
      (if (not (findfile titleBlockPath))
        (p2dwg-raise "This project runner is missing PROJECT_TITLE_BLOCK.dwg. Extract the complete fresh ZIP and retry."))
    )
  )
  (setq outputChoice (getfiled "Choose a neutral output folder and base name"
    (strcat (getvar "DWGPREFIX") "drawing-batch.dwg") "dwg" 1))
  (if outputChoice
    (progn
      (initget 6)
      (setq scaleFactor (getreal "\\nInitial PDF import scale factor <1.0>: "))
      (if (null scaleFactor) (setq scaleFactor 1.0))
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
      (p2dwg-run-queue (reverse queue) logPath outputDirectory outputBase scaleFactor titleBlockPath)
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
`}function F2(a,s){const o=String(a).padStart(2,"0"),l=`p2dwg${o}`;return`
(defun ${l}-pdf-input (value)
  ; Do not feed arguments to AutoCAD if PDFIMPORT stopped or never started.
  (if (not (wcmatch (strcase (getvar "CMDNAMES")) "*PDFIMPORT*"))
    (p2dwg-raise "PDFIMPORT is no longer active; remaining inputs were not sent."))
  (command value)
)

(defun ${l}-run-page (pdfPath page outputPath scaleFactor /
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
  (prompt (strcat "\\nImporting PDF page " (itoa page) " of ${s}..."))
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
  (setq *p2dwg-stage* "SCALE_REVIEW")
  (${l}-batch-log (strcat "SCALE_REVIEW_REQUIRED|SOURCE_${o}.pdf|" (itoa page)))
      (prompt "\\nPDF IMPORT ONLY is complete. Scale, confidentiality, geometry inventory, and final save are still pending.")
  (command "_.ZOOM" "_Extents")
  (${l}-calibrate-import importedEntities)
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
`}const z2=[["EQUIP","f_Equip"],["EQUIP_INT","f_Equip_Int"],["INST","f_Inst"],["PIPE_INLINE","f_Pipe_Inline"],["PIPE_PRI","f_Pipe_Pri"],["PIPE_SEC","f_Pipe_Sec"],["MISC","f_Misc"],["TEXT","f_gen_Text"]];function Y2(a){const s=new Map(a.map(o=>[o.trim().toUpperCase(),o.trim()]));return z2.flatMap(([o,l])=>{if(s.has(o.toUpperCase()))return[];const i=s.get(l.toUpperCase());return i?[[o,i]]:[]})}function Qm(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function V2(a,s){const o=s.map(([l,i])=>`(${Qm(l.toUpperCase())} . ${Qm(i)})`).join(`
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
`}const X2=["RAW","CANDIDATE","MATCHED","CONFIRMED","UNMATCHED","NEEDS_REVIEW"];function G2(a){return`
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
      " non-destructive geometry candidate group(s) logged. Matching and replacement remain disabled."))
  (${a}-batch-log
    (strcat "WHOLE_PAGE_GEOMETRY_SCAN_COMPLETED|" *p2dwg-source-alias* "|"
      (itoa *p2dwg-source-page*) "|STATUS=CANDIDATES_REVIEW_REQUIRED|CANDIDATES="
      (itoa candidate-count) "|AUTO_MATCH=GATED"))
  T)
`}function H2(a){return`
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
`}function K2(a){return`
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
`}function W2(a){return`
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
`}function Z2(a,s,o,l,i=[],p=[],g=[]){const h=String(a).padStart(2,"0"),y=`PDF2DWG${h}`,f=`p2dwg${h}`,m=X2.map(mt).join(" "),v=o.map(A=>`(${mt(A.fallbackCategory.toLowerCase())} ${mt(A.blockName)} ${mt(A.sourcePath)} ${mt(A.targetLayer)} ${A.wipeoutBoundary?vx(A.wipeoutBoundary):"nil"} ${mt(A.blockAssetId)} (${(A.requiredShapeFonts??[]).map(mt).join(" ")}))`).join(`
    `),E=l.filter(A=>A.category==="layer").filter(A=>A.name.trim().toUpperCase()!=="0").map(A=>{const k=Number(A.detail.match(/(?:^|;)color=(\d+)/i)?.[1]??7),M=Number(A.detail.match(/(?:^|;)lineweight=(-?\d+)/i)?.[1]??25),x=[-3,-2,-1].includes(M)||Number.isInteger(M)&&M>=0&&M<=211,j=A.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]??"CONTINUOUS";return`(${mt(A.name)} ${Number.isInteger(k)&&k>0&&k<=255?k:7} ${x?M:25} ${mt(j)})`}).join(`
    `),S=l.filter(A=>A.category==="layer").map(A=>A.name.trim()).filter(Boolean),R=Y2(S),D=l.filter(A=>A.category==="textStyle").map(A=>{const k=(j,L)=>A.detail.match(new RegExp(`(?:^|;)${j}=([^;]*)`,"i"))?.[1]??L,M=(j,L)=>{const P=Number(k(j,String(L)));if(!Number.isFinite(P)||j==="height"&&P<0||j==="width"&&P<=0)throw new Error(`Approved text style "${A.name}" has an invalid ${j}. Re-review the supplied CAD text format.`);return String(P)},x=k("font","").trim();if(!x)throw new Error(`Approved text style "${A.name}" has no font. Re-review it instead of substituting a default font.`);return`(${mt(A.name)} ${M("height",0)} ${M("width",1)} ${M("oblique",0)} ${mt(x)} ${mt(k("bigfont",""))})`}).join(`
    `),C=l.filter(A=>A.category==="linetype").filter(A=>!["CONTINUOUS","BYLAYER","BYBLOCK"].includes(A.name.trim().toUpperCase())).flatMap(A=>{const k=Db(A.name,A.detail);if(!k)throw new Error(`Approved linetype "${A.name}" has an unsupported or incomplete definition. Re-extract it with the current extractor; the runner will not omit its marks or substitute Continuous.`);const M=A.detail.match(/(?:^|;)description=([^;]*)/i)?.[1]?.trim()||A.name,x=k.segments.map(j=>{const L=[String(j.length),String(j.flags)];return j.flags===4&&L.push(String(j.shapeNumber),mt(j.styleName),mt(j.shapeFile),String(j.scale),String(j.rotation),String(j.offsetX),String(j.offsetY)),`(${L.join(" ")})`}).join(" ");return[`(${mt(A.name)} ${mt(M)} ${String(k.patternLength)} (${x}))`]}).join(`
    `),w=i.map(A=>`(${mt(A.stableId.toUpperCase())} ${mt(A.itemTag.trim())} ${mt(A.type)} ${A.pageNumber} (${el.map(k=>`(${mt(k.toUpperCase())} . ${mt(k==="itemTag"?A.itemTag.trim():A.fields?.[k]??"")})`).join(" ")}))`).join(`
    `);return sT(l),`; Local AutoCAD runner. The matching source PDF is packaged separately.
; Copyright (c) 2026 gaurav.cbiindia.
; Run command ${y} in AutoCAD for Windows.
; Each imported entity is stamped with a generic source alias and source page.

(vl-load-com)
(setq *p2dwg-attribute-rules* '(${p.map(A=>`(${mt(A.attributeTag)} ${mt(A.edeField.toUpperCase())} ${mt(A.valueType)} ${mt(A.textZone)})`).join(" ")}))
(setq *p2dwg-conflicting-tags* '(${g.map(A=>mt(A.toUpperCase())).join(" ")}))
(if (not (boundp '*p2dwg-batch-mode*)) (setq *p2dwg-batch-mode* nil))
(setq *p2dwg-approved-symbols* '(
    ${v}
))
(setq *p2dwg-approved-layers* '(
    ${E}
))
(setq *p2dwg-approved-text-styles* '(
    ${D}
))
(setq *p2dwg-approved-linetypes* '(
    ${C}
))
(setq *p2dwg-ede-records* '(
    ${w}
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

(defun ${f}-selection-source-layer (selection / index entity data name first valid)
  (setq index 0 first nil valid T)
  (while (and valid (< index (sslength selection)))
    (setq entity (ssname selection index))
    (setq data (entget entity))
    (setq name (if (assoc 8 data) (cdr (assoc 8 data)) nil))
    (if (or (null name) (null (${f}-source-layer-suffix name)))
      (setq valid nil)
      (if first
        (if (/= (strcase first) (strcase name)) (setq valid nil))
        (setq first name)
      )
    )
    (setq index (1+ index))
  )
  (if valid first nil)
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
                                                source-layer archive-layer block-asset-id
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
                                                 rotation mask-reference / suffix archive-layer source-record
                                                 archive-record archive-created index entity data
                                                 handle handles snapshots updated moved success
                                                 validation scale source-final archive-final)
  (setq suffix (${f}-source-layer-suffix source-layer))
  (setq archive-layer (if suffix (strcat "PDF_DONE_" suffix) nil))
  (setq validation *p2dwg-replacement-validation*)
  (setq source-record
    (if (tblobjname "LAYER" source-layer)
      (entget (tblobjname "LAYER" source-layer))
      nil
    )
  )
  (setq archive-record
    (if (and archive-layer (tblobjname "LAYER" archive-layer))
      (entget (tblobjname "LAYER" archive-layer))
      nil
    )
  )
  (setq archive-created nil snapshots nil handles nil moved nil success T)
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
        source-record
        (> (sslength selection) 0)
      )
    (progn
      (setq index 0)
      (while (and success (< index (sslength selection)))
        (setq entity (ssname selection index))
        (setq data (entget entity '("*")))
        (setq handle (if data (cdr (assoc 5 data)) nil))
        (if (or (null data)
                (null handle)
                (/= (strcase (cdr (assoc 8 data))) (strcase source-layer)))
          (setq success nil)
          (progn
            (setq snapshots (cons (list entity data) snapshots))
            (setq handles (cons handle handles))
          )
        )
        (setq index (1+ index))
      )
      (if success
        (progn
          (if (not (${f}-set-layer-state source-layer T nil))
            (setq success nil)
          )
          (if success
            (progn
              (if (not (${f}-ensure-archive-layer source-layer archive-layer))
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
            (if (not
                  (${f}-write-replacement-xdata
                    entity stable-id "SOURCE" source-layer archive-layer
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
              (setq source-final (${f}-set-layer-state source-layer T T))
              (setq archive-final (${f}-set-layer-state archive-layer nil T))
              (if (not (and source-final archive-final)) (setq success nil))
            )
          )
          (if success
            (if (not
                  (${f}-write-replacement-log
                    stable-id item-tag handles
                    (cdr (assoc 5 (entget block-reference)))
                    source-layer archive-layer block-asset-id scale rotation validation))
              (setq success nil)
            )
          )
        )
      )
      (if success
        (progn
          (${f}-batch-log
            (strcat "SOURCE_ARCHIVED|" stable-id "|" source-layer "|" archive-layer
              "|ENTITIES=" (itoa (length handles))))
          (setq *p2dwg-archive-created-doc* (vla-get-ActiveDocument (vlax-get-acad-object)))
          T
        )
        (progn
          (${f}-restore-source-snapshot snapshots)
          (if source-record (entmod source-record))
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
                                                source-record archive-record source-restored layer-entity)
  ; Catch cancellation and unexpected ActiveX errors as well as explicit failures.
  ; Snapshot only the selected source entities; never UNDO an entire drawing.
  (setq snapshots nil index 0)
  (setq archive-layer (strcat "PDF_DONE_" (${f}-source-layer-suffix source-layer)))
  (setq source-record (entget (tblobjname "LAYER" source-layer)))
  (setq archive-record
    (if (tblobjname "LAYER" archive-layer)
      (entget (tblobjname "LAYER" archive-layer)) nil))
  (while (< index (sslength selection))
    (setq entity (ssname selection index))
    (setq snapshots (cons (list entity (entget entity '("*"))) snapshots))
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
          (${f}-set-layer-state source-layer T nil)
          (if (tblsearch "LAYER" archive-layer)
            (${f}-set-layer-state archive-layer T nil))
          (setq source-restored (${f}-restore-source-snapshot snapshots))
          (if source-restored
            (progn
              (entmod source-record)
              (if archive-record
                (entmod archive-record)
                (if (and (setq layer-entity (tblobjname "LAYER" archive-layer))
                         (null (ssget "_X" (list (cons 8 archive-layer)))))
                  (vl-catch-all-apply 'vla-delete
                    (list (vlax-ename->vla-object layer-entity))))))
            (progn
              (${f}-set-layer-state source-layer T nil)
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
                                              masks restored data updated value text-restored)
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
      (setq payload (${f}-link-payload (car sources)))
      (setq source-layer (cdr (nth 3 payload)))
      (setq archive-layer (cdr (nth 4 payload)))
      (${f}-set-layer-state source-layer T nil)
      (${f}-set-layer-state archive-layer T nil)
      (setq restored T)
      (foreach entity sources
        (setq data (entget entity))
        (setq updated (${f}-put-group 8 source-layer data))
        (if (not (and (entmod updated)
                      (${f}-write-replacement-xdata
                        entity stable-id "SOURCE" source-layer archive-layer
                        (cdr (nth 5 payload)) (cdr (nth 6 payload))
                        (cdr (nth 7 payload)) "ROLLED_BACK")))
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
          (${f}-set-layer-state source-layer T T)
          (${f}-set-layer-state archive-layer nil T)
          (prompt
            (strcat "\\nRollback complete for StableID " stable-id
              ". Source entities are visible again; no PDF source was deleted."))
          T
        )
        (progn
          (${f}-set-layer-state source-layer T nil)
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
                                                       stable-id source-handle source source-payload count valid pair)
  (setq payload (${f}-link-payload block-reference))
  (setq data (entget block-reference))
  (setq valid (and data payload (>= (length payload) 16)))
  (if valid
    (progn
      (setq stable-id (cdr (nth 1 payload)))
      (setq source-layer (cdr (nth 3 payload)))
      (setq archive-layer (cdr (nth 4 payload)))
      (setq source-state (tblsearch "LAYER" source-layer))
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
          source-state archive-state target-state
          (> (cdr (assoc 62 source-state)) 0)
          (= 4 (logand 5 (cdr (assoc 70 source-state))))
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
            (if (not
                  (and source source-payload
                    (= (cdr (nth 1 source-payload)) stable-id)
                    (= (cdr (nth 2 source-payload)) "SOURCE")
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
            (setq wipeout (entlast))
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
  (if (not (member (strcase status) '(${m})))
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
      (${f}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*) "|CALIBRATION_INPUT"))
      (p2dwg-raise "Scale calibration was cancelled. This page was not saved.")
    )
  )
  (setq measured (distance first-point second-point))
  (if (<= measured 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${f}-batch-log
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
      (${f}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*) "|VERIFY_INPUT"))
      (p2dwg-raise "Scale verification was cancelled. This page was not saved.")
    )
  )
  (setq checked-length (distance check-first check-second))
  (if (<= checked-length 0.0)
    (progn
      (setq *p2dwg-scale-status* "FAILED")
      (${f}-batch-log
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
      (${f}-batch-log
        (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*)
          "|PRIMARY=" reference-name "|ERROR_PERCENT=" (rtos error-percent 2 4)))
      (p2dwg-raise
        (strcat "Scale verification missed the 0.5% tolerance ("
          (rtos error-percent 2 4) "%). This page was not saved.")
    )
  )
  )
  (${f}-batch-log
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
          (${f}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_INPUT|" cross-name))
          (p2dwg-raise "The standard cross-check was cancelled. This page was not saved.")
        )
      )
      (setq cross-measured (distance cross-first cross-second))
      (if (<= cross-measured 0.0)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${f}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${h}.pdf|" (itoa *p2dwg-source-page*)
              "|CROSSCHECK_ZERO_LENGTH|" cross-name))
          (p2dwg-raise "The standard cross-check could not measure the symbol side.")
        )
      )
      (setq cross-error
        (* 100.0 (/ (abs (- cross-measured cross-length)) cross-length))
      )
      (${f}-batch-log
        (strcat "SCALE_REFERENCE_CROSSCHECK|SOURCE_${h}.pdf|"
          (itoa *p2dwg-source-page*) "|REFERENCE=" cross-name
          "|KNOWN_MM=" (rtos cross-length 2 4)
          "|REMEASURED_MM=" (rtos cross-measured 2 4)
          "|ERROR_PERCENT=" (rtos cross-error 2 4)
          "|TOLERANCE_PERCENT=0.5"))
      (if (> cross-error 0.5)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${f}-batch-log
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
    (${f}-batch-log
      (strcat "SCALE_REFERENCE_CROSSCHECK_SKIPPED|SOURCE_${h}.pdf|"
        (itoa *p2dwg-source-page*) "|OTHER_STANDARD_NOT_PRESENT"))
  )
  (setq *p2dwg-scale-status* "VERIFIED")
  (${f}-batch-log
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

(defun ${f}-choose-approved-symbol (category / options index choice mask-note)
  (setq options
    (vl-remove-if-not
      '(lambda (entry) (= (strcase (car entry)) (strcase category)))
      *p2dwg-approved-symbols*
    )
  )
  (if options
    (progn
      (prompt (strcat "\\nApproved " category " fallback symbols:"))
      (setq index 1)
      (foreach choice options
        (setq mask-note
          (if (and (= (strcase category) "VALVE") (nth 4 choice))
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
      (prompt "\\n  0) Keep the source geometry; no fallback")
      (initget 4)
      (setq index (getint "\\nChoose an approved same-category fallback [0 to keep]: "))
      (if (and index (> index 0) (<= index (length options)))
        (nth (1- index) options)
        nil
      )
    )
    (progn
      (prompt (strcat "\\nNo approved " category " fallback is available for this discipline and project."))
      nil
    )
  )
)

(defun ${f}-review-unsupported (imported / answer selection bounds index entity
                                            selection-index category block-name target-layer
                                            center fallback item choice source-path mask-boundary
                                            wipeout block-asset-id exact-match-answer
                                             exact-match-confirmed required-fonts source-layer
                                             rotation identity-confirmed overlay-answer ede-record stable-id
                                             attribute-plan candidate-id)
  (${f}-prepare-source-layer-review)
  (${f}-ensure-layer "PID-PROVISIONAL-FALLBACK" 1 35 "CONTINUOUS")
  (initget "Yes No")
  (setq answer
    (getkword
      "\\nDid you find unsupported equipment on this page? [Yes/No]: "
    )
  )
  (if (null answer)
    nil
    (progn
      (setq index 1)
      (if (= (strcase answer) "YES")
        (progn
          (prompt
            "\\nSelect only the objects for one unsupported item; press Enter when all items are marked."
          )
          (setq selection T)
          (while selection
            (${f}-prepare-source-layer-review)
            (setq selection (ssget))
            (if selection
              (progn
                ; Text has its own confirmation/attribute association path.
                (setq selection (${f}-geometry-only-selection selection))
                (setq bounds
                  (if (${f}-source-selection-p selection imported)
                    (${f}-selection-bounds selection)
                    nil))
                (if (null bounds)
                  (prompt "\\nSelect only live, unlocked PDFIMPORT source entities from this page. The selection was not changed.")
                  (progn
                    (setq source-layer (${f}-selection-source-layer selection))
                    (setq wipeout nil stable-id nil ede-record nil)
                    (setq category
                      (getstring T
                        "\\nEnter the item's category (for example pump, valve, or instrument): "
                      )
                    )
                    (while (= category "")
                      (setq category
                        (getstring T "\\nCategory is required for traceability: ")
                      )
                    )
                    (setq choice (${f}-choose-approved-symbol category))
                    (setq block-name (if choice (cadr choice) ""))
                    (setq source-path (if choice (nth 2 choice) ""))
                    (setq target-layer (if choice (nth 3 choice) ""))
                    (setq mask-boundary (if choice (nth 4 choice) nil))
                    (setq block-asset-id (if choice (nth 5 choice) nil))
                    (setq required-fonts (if choice (nth 6 choice) nil))
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
                    (if (and fallback (= (strcase category) "VALVE"))
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
                            (vl-catch-all-apply
                              'vl-cmdf
                              (list "_.DRAWORDER" fallback "" "_F")
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
      )
      (initget "Yes No")
      (setq answer
        (getkword
          "\\nConfirm this page was checked for confidential details and unsupported items; every uncertain item is clouded? [Yes/No]: "
        )
      )
      (= (strcase (if answer answer "No")) "YES")
    )
  )
)

${G2(f)}
${K2(f)}
${W2(f)}
${H2(f)}
${V2(f,R)}
${F2(a,s)}
`}function Q2(a,s,o){return B2(a.map(l=>l.pageCount),s,o)}function J2(a,s){const o=g=>{const h=[2166136261,2654435769,2246822507,3266489909],y=[16777619,1540483477,668265261,374761393];for(const f of g)for(let m=0;m<h.length;m+=1)h[m]=Math.imul(h[m]^f,y[m])>>>0;return h.map(f=>f.toString(16).padStart(8,"0")).join("")},l=a.map((g,h)=>[h+1,g.sourceHash?.toLowerCase()??o(g.pdfBytes),g.pageCount,g.discipline,g.projectId??"",g.titleBlockGroupId??""].join("|")),i=[];for(const g of s)g.path==="RUN_BATCH.lsp"||g.path==="README_LOCAL_AUTOCAD.txt"||/^SOURCE_\d+\.pdf$/i.test(g.path)||i.push(`${g.path}|${g.content.length}|${o(g.content)}`);const p=["LOCAL_AUTOCAD_BATCH_V1",...l.map(g=>`JOB|${g}`),...i.map(g=>`FILE|${g}`)].join(`
`);return o(new TextEncoder().encode(p))}function eT(a,s){return`LOCAL AUTOCAD PDF-TO-DWG RUNNER
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
   then choose a neutral output name and an initial import scale.
   The runner no longer asks for a DWT or opens new drawing tabs.
4. The companion processes the queued PDFs sequentially and creates one DWG
   per page. Each page asks about scale calibration, confidential-detail
   review, optional Pipe Run tagging, and unsupported equipment; keep AutoCAD
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
- The runner copies a neutral PROJECT_TITLE_BLOCK_NNN.dwg companion beside the
  generated page DWGs. Keep that companion in the same folder and do not rename
  or delete it; the page DWGs reference it. The original uploaded filename is
  not included in the package.
- Use a title-block DWG whose geometry is in model space and uses the intended
  drawing units. Confirm its fit and layers in AutoCAD after the test run.

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
- For each page, manually select unsupported equipment to add a red scalloped
  revision cloud. The runner offers only reviewed symbol mappings matching the
  selected PFD/P&ID discipline and project. Approved isolated DXFs are read
  directly and inserted into the output drawing as native Block References;
  the source files are not opened as drawings or modified. The package uses
  neutral filenames and does not include original source DWGs. If no approved
  block is available, the source geometry is retained and clouded.
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
  page: SCALE_REVIEW_REQUIRED is followed by standard-size scale calibration,
  privacy and CAD reviews.
  Only SAVED with SCALE=VERIFIED records a final page output.
- Existing output files are never overwritten. The output-base-specific local
  progress journal records every page state. When rerunning with the same
  unchanged batch and output base, only pages with a confirmed COMPLETED state
  and an existing DWG are skipped; unfinished pages are resumed. Existing DWGs
  without a matching completion record require review instead of being assumed
  complete. Keep the extracted runner, PDFs, DWGs, and journal on the workstation.
- This helper uses AutoCAD for Windows. Native DWG generation is not performed
  by the web page itself.
`}function tT(a,s=[],o=[],l=[],i){if(a.length===0||a.some(w=>!Number.isInteger(w.pageCount)||w.pageCount<1||!["PFD","P&ID"].includes(w.discipline)||!(w.pdfBytes instanceof Uint8Array)||w.pdfBytes.length===0||w.sourceHash!==void 0&&!/^[a-f0-9]{64}$/i.test(w.sourceHash)))throw new Error("Add at least one readable PDF before preparing an AutoCAD runner.");if(a.some(w=>(w.edeRecords??[]).some(A=>!/^[0-9A-F]{32}$/i.test(A.stableId)||typeof A.itemTag!="string"||!A.type.trim()||Object.entries(A.fields??{}).some(([k,M])=>!el.includes(k)||typeof M!="string")||!Number.isInteger(A.pageNumber)||A.pageNumber<1||A.pageNumber>w.pageCount)))throw new Error("An EDE link in the AutoCAD runner is invalid. Reopen the EDE record and prepare a fresh runner.");if(a.some(w=>(w.conflictingTags??[]).some(A=>typeof A!="string")))throw new Error("The runner duplicate-tag registry is invalid.");const p=new Set(a.map(w=>w.titleBlockGroupId?.trim()??""));if(p.size>1)throw new Error("Prepare one AutoCAD runner per group so each batch uses only its own title block.");const g=[...p][0]??"";if(g){if(!i||i.groupId!==g)throw new Error("Upload a standalone DWG title block for the selected group before preparing its AutoCAD runner.");if(!(i.content instanceof Uint8Array)||!i.content.length)throw new Error("The selected group title block is not a valid AutoCAD DWG file.");const w=new TextDecoder().decode(i.content.subarray(0,6));if(!/^AC10\d{2}$/.test(w))throw new Error("The selected group title block is not a valid AutoCAD DWG file.")}else if(i)throw new Error("A project title block can only be used with PDFs from the same selected group.");const h=a.map(w=>s.filter(A=>(A.discipline===w.discipline||A.discipline==="Shared")&&(A.projectId?A.projectId===w.projectId:!0))),y=[...new Map(h.flat().map(w=>[`${w.blockAssetId}|${w.blockName}|${w.fallbackCategory}`,w])).values()];for(const w of y)if(w.fallbackCategory.trim().toLowerCase()==="valve"){if(!w.wipeoutBoundary)throw new Error(`Valve "${w.blockName}" has no reviewed body mask outline. Re-review the valve in the Legends Library before preparing the AutoCAD runner.`);try{Is(w.wipeoutBoundary.map(([A,k])=>`${A},${k}`).join(";"))}catch(A){throw new Error(`Valve "${w.blockName}" has an invalid reviewed body mask outline. ${A instanceof Error?A.message:"Re-review the valve mask."}`)}}const f=new Set(o.map(w=>w.id));if(y.some(w=>!f.has(w.blockAssetId)))throw new Error("An approved symbol refers to a missing locally extracted block drawing.");if(y.some(w=>!w.targetLayer.trim()||w.targetLayer.trim().toUpperCase()==="0"))throw new Error("Every approved block needs an approved non-zero target CAD layer before the AutoCAD runner can be prepared.");const m=new Map,v=new Map,E=new Map,S=new Map,R=[...new Set(y.map(w=>w.blockAssetId))];R.forEach((w,A)=>{const k=o.find(x=>x.id===w),M=`CAD_SYMBOLS/SYMBOL_${String(A+1).padStart(3,"0")}`;if(k.format==="DXF"){const x=kr(k.content).content,j=new mb(x).nativeAssetInfo();v.set(w,`${M}.dxf`),m.set(w,`${M}.dxf`),E.set(w,j.requiredShapeFonts),S.set(w,x)}else m.set(w,`${M}.dwg`),v.set(w,`${M}.dwg`),E.set(w,[])});const D=[{path:"RUN_BATCH.lsp",content:new Uint8Array},...i?[{path:"PROJECT_TITLE_BLOCK.dwg",content:i.content}]:[],...o.filter(w=>R.includes(w.id)).map(w=>({path:v.get(w.id),content:S.get(w.id)??w.content})),...y.length?[{path:"CAD_BLOCK_GEOMETRY_INDEX.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,note:"Descriptors are local geometry data, not validated match signatures. Missing or empty descriptors require re-importing the extraction ZIP with its overview DXF or reviewing unsupported geometry.",blocks:y.map(w=>{const A=o.find(j=>j.id===w.blockAssetId),k=A?.geometryDescriptor??null,x=!!(k?.primitives.length&&k.bounds)?"INDEXED":A?.geometryIndexError??(k?"EMPTY_OR_UNSUPPORTED":"OVERVIEW_DXF_REQUIRED");return{blockAssetId:w.blockAssetId,blockName:w.blockName,category:w.fallbackCategory,discipline:w.discipline,targetLayer:w.targetLayer,targetLayerRules:l.find(j=>j.category==="layer"&&j.name.trim().toLowerCase()===w.targetLayer.trim().toLowerCase())?.detail??null,projectScope:w.projectId?"project":"company",indexStatus:x,indexError:A?.geometryIndexError??null,geometry:k}})},null,2))}]:[],...a.flatMap((w,A)=>{const k=String(A+1).padStart(2,"0"),M=s.filter(P=>(P.discipline===w.discipline||P.discipline==="Shared")&&(P.projectId?P.projectId===w.projectId:!0)&&P.blockAssetId&&m.has(P.blockAssetId)).map(P=>{const K=m.get(P.blockAssetId),ue=K.split("/").at(-1)?.replace(/\.(?:dwg|dxf)$/i,"")??"APPROVED_SYMBOL";return{...P,blockName:ue,sourcePath:K,requiredShapeFonts:E.get(P.blockAssetId)??[]}}),x=l.filter(P=>(P.discipline===w.discipline||P.discipline==="Shared")&&(P.projectId?P.projectId===w.projectId:!0)),j=[...new Map(x.map(P=>[`${P.category}:${P.name.toLowerCase()}`,P])).values()],L=M.find(P=>!j.some(K=>K.category==="layer"&&K.name.toLowerCase()===P.targetLayer.toLowerCase()));if(L)throw new Error(`Approved CAD layer "${L.targetLayer}" is not included in this runner page's approved standards.`);return[{path:`DOC_${k}.lsp`,content:new TextEncoder().encode(Z2(A+1,w.pageCount,M,j,w.edeRecords??[],tf(w.attributeRules??[]),w.conflictingTags??[]))},{path:`SOURCE_${k}.pdf`,content:w.pdfBytes}]})],C=J2(a,D);return D[0].content=new TextEncoder().encode(Q2(a,!!i,C)),D.push({path:"README_LOCAL_AUTOCAD.txt",content:new TextEncoder().encode(eT(a,!!i))}),ab(D)}function Jm(a,s){const o=a.match(new RegExp(`(?:^|;)${s}=\\(([^)]*)\\)`,"i"));if(!o)return null;const l=o[1].trim();return!l||/^nil$/i.test(l)?[]:l.split(/[\s,]+/)}function aT(a,s){const o=a.match(new RegExp(`(?:^|;)${s}=(.*?)(?=;[A-Za-z][A-Za-z0-9_]*=|$)`,"i"));if(!o)return null;const l=[],i=/\(\s*(\d+)\s*\.\s*(?:"((?:\\.|[^"])*)"|([^\s)]+))\s*\)/g;let p;for(;(p=i.exec(o[1]))!==null;){const g=p[2]===void 0?p[3]:p[2].replaceAll('\\"','"').replaceAll("\\\\","\\");l.push({code:Number(p[1]),value:g})}return l}function nT(a){let s=0;for(const l of a.toUpperCase())s=s*31+l.charCodeAt(0)>>>0;return`P2DWG_${a.toUpperCase().replace(/[^A-Z0-9_-]/g,"_").slice(0,16)||"SHAPE"}_${s.toString(36).toUpperCase()}`}function Db(a,s){const o=Jm(s,"pattern"),l=Jm(s,"patternFlags")??[];if(!o?.length||l.length>0&&l.length!==o.length)return null;const i=o.map(Number),p=l.map(Number);if(i.some(C=>!Number.isFinite(C))||i.every(C=>C===0)||i.reduce((C,w)=>C+Math.abs(w),0)<=0||p.some(C=>!Number.isInteger(C)))return null;const g=aT(s,"complexData"),h=new Map,y=/\(\s*"((?:\\.|[^"])*)"\s*\.\s*"((?:\\.|[^"])*)"\s*\)/g,f=s.match(/(?:^|;)shapeFonts=(.*)$/i);let m;if(f)for(;(m=y.exec(f[1]))!==null;)h.set(m[1].replaceAll('\\"','"').toUpperCase(),m[2].replaceAll('\\"','"'));const v=[];let E=0;for(let C=0;C<i.length;C+=1){const w=p[C]??0;let A=g?.findIndex((me,ce)=>ce>=E&&me.code===49)??-1;if(A<0||!g){if(w!==0)return null;v.push({length:i[C],flags:0});continue}const k=g[A];if(Math.abs(Number(k.value)-i[C])>1e-8)return null;const M=g[A+1];if(!M||M.code!==74)return null;const x=Number(M.value);if(!Number.isInteger(x)||x!==w)return null;if(E=A+2,x===0){v.push({length:i[C],flags:0});continue}if(x!==4)return null;const j=me=>{for(;E<g.length&&g[E].code!==me&&g[E].code!==49;)E+=1;if(E>=g.length||g[E].code!==me)return null;const ce=g[E].value;return E+=1,ce},L=Number(j(75)),P=j(340),K=Number(j(46)),ue=Number(j(50)),ne=Number(j(44)),le=Number(j(45)),ve=P?h.get(P.toUpperCase()):void 0;if(!Number.isInteger(L)||L<=0||!P||!ve||!/^[a-z0-9_.-]+\.shx$/i.test(ve)||![K,ue,ne,le].every(Number.isFinite)||K<=0)return null;v.push({length:i[C],flags:4,shapeNumber:L,styleName:nT(a),shapeFile:ve,scale:K,rotation:ue,offsetX:ne,offsetY:le})}const S=i.reduce((C,w)=>C+Math.abs(w),0),R=s.match(/(?:^|;)patternLength=([^;]+)/i)?.[1],D=R===void 0?S:Number(R);return!Number.isFinite(D)||D<=0||Math.abs(D-S)>Math.max(1e-7,S*1e-7)?null:{patternLength:D,segments:v}}function sT(a){const s=new Set(["CONTINUOUS","BYLAYER","BYBLOCK"]),o=new Map(a.filter(l=>l.category==="linetype").map(l=>[l.name.trim().toUpperCase(),l]));for(const l of a.filter(i=>i.category==="layer")){const i=l.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!i||s.has(i.toUpperCase()))continue;const p=o.get(i.toUpperCase());if(!p||!Db(p.name,p.detail))throw new Error(`Layer "${l.name}" requires linetype "${i}", but its complete supported definition is not approved. Review/re-extract that linetype first; the runner will not silently substitute Continuous.`)}}function mt(a){return`"${a.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function rT(a,s,o=""){const l=a.filter(f=>f.reviewStatus==="reviewed"&&f.sourceKind==="extracted-dwg"&&(f.scope!=="project"||!!(o&&f.projectId===o))),i=(f,m)=>f.fields.find(v=>v.label===m)?.value?.trim()??"",p=l.filter(f=>[s,"Shared"].includes(i(f,"Source discipline"))),g=p.filter(f=>f.category==="layer"&&i(f,"CAD name")&&i(f,"CAD name").toUpperCase()!=="0"),h=new Set(g.map(f=>i(f,"CAD name").toLowerCase()));return{symbols:p.filter(f=>f.category==="symbol"&&["Source drawing ID","Block asset ID","Block name","Fallback category"].every(m=>i(f,m))&&h.has(i(f,"Target CAD layer").toLowerCase())).length,layers:g.length,textStyles:p.filter(f=>f.category==="textStyle").length,otherDisciplineSymbols:l.filter(f=>f.category==="symbol"&&["PFD","P&ID"].includes(i(f,"Source discipline"))&&i(f,"Source discipline")!==s).length}}const zu=1024*1024,oT=500*zu;function Ro(a){return a<1024?`${a} B`:a<zu?`${(a/1024).toFixed(1)} KB`:`${(a/zu).toFixed(1)} MB`}function lT(a){const s=a.type.split(";",1)[0].trim().toLowerCase(),o=a.name.trim().toLowerCase().endsWith(".pdf");return s==="application/pdf"||o}async function iT(a){const[s,o]=await Promise.all([Pn(()=>import("./pdf-TYrZqVzP.js"),[]),Pn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);s.GlobalWorkerOptions.workerSrc=o.default;const l=s.getDocument({data:new Uint8Array(a.slice(0))});try{return(await l.promise).numPages}finally{await l.destroy().catch(()=>{})}}function cT({discipline:a,groups:s,selectedClientId:o,selectedClientLabel:l,onSelectClient:i}){const[p,g]=q.useState([]),[h,y]=q.useState(!0),[f,m]=q.useState(""),[v,E]=q.useState(0),[S,R]=q.useState([]),[D,C]=q.useState(null),[w,A]=q.useState(null),[k,M]=q.useState(null),[x,j]=q.useState(null),[L,P]=q.useState(0),[K,ue]=q.useState(1),[ne,le]=q.useState(null),[ve,me]=q.useState(""),[ce,V]=q.useState(""),[re,ye]=q.useState([]),[Ae,_]=q.useState(0),[Q,$]=q.useState(""),[G,oe]=q.useState(null),[he,be]=q.useState(null),[Ye,Me]=q.useState(!1),[it,pt]=q.useState(!1),[jt,Je]=q.useState(""),[xt,fa]=q.useState(!1),[U,ie]=q.useState(""),[fe,B]=q.useState(!1),[de,Re]=q.useState(""),[ge,qe]=q.useState("1"),Fe=q.useRef([]),Ie=q.useRef(null),De=q.useRef(!0),Qt=q.useRef(!1),xe=q.useRef(0),Ke=q.useRef(a);Ke.current=a;const st=typeof globalThis.crypto?.subtle<"u",vt=q.useMemo(()=>By(s),[s]);q.useEffect(()=>{if(V(o),!o){me("");return}try{const F=un();me(F.projects[o]?o:"")}catch{me("")}},[o]);const Ce=q.useCallback((F,pe)=>{if(!De.current)return;xe.current+=1;const Ee=xe.current;R(N=>[...N.slice(-5),{id:Ee,kind:F,text:pe}])},[]);q.useEffect(()=>{const F=()=>{try{const pe=un(),Ee=o&&pe.projects[o]?[o]:[];ye(Ee.map((N,Y)=>({id:N,label:vt.find(te=>te.id===N)?.label??`Project ${String(Y+1).padStart(2,"0")}`}))),oe(rT([...pe.companyItems,...ve?pe.projects[ve]?.items??[]:[]],a,ve)),$(new Date().toLocaleTimeString())}catch(pe){oe(null),Ce("error",pe instanceof Error?pe.message:"The approved CAD library could not be loaded.")}};return F(),window.addEventListener("focus",F),window.addEventListener("storage",F),window.addEventListener(zo,F),()=>{window.removeEventListener("focus",F),window.removeEventListener("storage",F),window.removeEventListener(zo,F)}},[Ce,vt,a,ve,Ae,o]),q.useEffect(()=>{let F=!0;return be(null),Je(""),ce?(Me(!0),Nm(ce).then(pe=>{F&&be(pe)}).catch(pe=>{F&&Je(pe instanceof Error?pe.message:"The local project title block could not be read.")}).finally(()=>{F&&Me(!1)}),()=>{F=!1}):(Me(!1),()=>{F=!1})},[ce]),q.useEffect(()=>{ce&&!vt.some(F=>F.id===ce)&&(V(""),be(null),Je(""))},[vt,ce]);const Lt=q.useCallback(async()=>{try{const[F,pe]=await Promise.all([bb(a),u2()]);if(!De.current||Ke.current!==a)return;g(F),E(pe),m("")}catch(F){De.current&&m(F instanceof Error?F.message:"Saved PDFs could not be loaded.")}finally{De.current&&y(!1)}},[a]),Gt=async(F,pe,Ee,N)=>{await bi(F.id,{analysisStatus:"extracting",analysisPagesDone:0,analysisRecordCount:0,analysisMessage:"",autocadStatus:"not-connected"}),De.current&&await Lt();let Y;try{Y=await R2(pe,N,Ee)}catch(_e){throw Ee()?_e:new Xt("cancelled","EDE extraction paused.")}if(!Ee())throw new Xt("cancelled","EDE extraction paused.");await h2(F.id,Y.pageText);const te=k2(Y.pageText),Te=M2(a==="PFD"?"pfd":"pid",{id:F.id,alias:F.alias},[...Y.candidates,...te]);De.current&&P(_e=>_e+1);const Pe=Y.pageText.some(_e=>_e.searchableText.trim()||_e.ocrTiles.some(Ue=>Ue.trim())),Ne=Te.recordCount||Pe?"needs-review":"no-tags";return await bi(F.id,{analysisStatus:Ne,analysisPagesDone:Y.pages,analysisRecordCount:Te.recordCount,analysisMessage:Y.ocrPages?`Page text and OCR from ${Y.ocrPages} page(s) are saved locally. ${Y.candidates.length} tag candidate(s) and ${te.length} note(s) need review.`:`Page text is saved locally. ${Y.candidates.length} tag candidate(s) and ${te.length} note(s) need review.`,autocadStatus:"not-connected"}),{...Te,tagCount:Y.candidates.length,noteCount:te.length}};q.useEffect(()=>{De.current=!0,y(!0),M(null),ue(1),Lt();const F=()=>{Lt()};return window.addEventListener("focus",F),()=>{window.removeEventListener("focus",F),De.current=!1,Fe.current.forEach(pe=>{pe.cancelled=!0}),Fe.current=[]}},[Lt]),q.useEffect(()=>{if(Qt.current)return;const F=new URLSearchParams(window.location.search).get("pdf"),pe=p.find(Y=>Y.id===F);if(!pe)return;const Ee=new URLSearchParams(window.location.search).get("record");Ee&&j(Ee),Qt.current=!0,M(pe.id);const N=Number(new URLSearchParams(window.location.search).get("page"));ue(Number.isInteger(N)&&N>=1&&N<=pe.pageCount?N:1),window.setTimeout(()=>document.querySelector('[data-testid="panel-source-page"]')?.scrollIntoView({behavior:"smooth",block:"center"}),100)},[p]);const Ut=async(F,pe,Ee)=>{const N=a,Y=()=>!F.cancelled&&De.current&&Ke.current===N;F.state="working";try{if(F.file.size>$u)throw new Xt("too-large","A PDF is larger than 100 MB and was skipped.");const te=await F.file.arrayBuffer();if(!Y())return;let Te;try{Te=await iT(te)}catch(_e){const Ue=_e?.name;throw Ue==="PasswordException"?new Error("A PDF is password-protected. Remove the password and add it again."):Ue==="InvalidPDFException"||Ue==="FormatError"?new Error("A file is not a valid PDF, or it is damaged."):new Error("A PDF could not be read. It may be damaged.")}if(!Y())return;if(Te<1)throw new Error("A PDF has no pages.");let Pe;try{Pe=await f2(te)}catch{throw new Error("Duplicate check is not supported in this browser, so the PDF was not saved.")}if(!Y())return;const Ne=await p2({discipline:N,bytes:te,pageCount:Te,hash:Pe},Y);pe.pagesDone+=Te,De.current&&(C({total:Ee,done:pe.done,pagesDone:pe.pagesDone,active:1,phase:"extracting",currentAlias:Ne.alias,pageNow:0,pageTotal:Te}),await Lt());try{const _e=await Gt(Ne,te,Y,(Ue,St)=>{De.current&&C(ea=>ea&&{...ea,phase:"extracting",currentAlias:Ne.alias,pageNow:Ue,pageTotal:St})});Y()&&Ce("info",`${Ne.alias}: ${_e.tagCount} tag candidate(s) and ${_e.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(_e){const Ue=_e instanceof Xt&&_e.code==="cancelled",St=Ue?"Extraction paused. Resume it from this saved PDF.":Km(_e);await bi(Ne.id,{analysisStatus:Ue?"paused":"failed",analysisMessage:St}).catch(()=>{}),!Ue&&Y()&&Ce("error",`${Ne.alias}: ${St}`)}F.state="done",De.current&&await Lt()}catch(te){F.state="failed",!(te instanceof Xt&&te.code==="cancelled")&&Y()&&Ce("error",te instanceof Error?te.message:"A PDF could not be added.")}finally{pe.done+=1,De.current&&C(te=>te&&{...te,total:Ee,done:pe.done,pagesDone:pe.pagesDone,active:0})}},Bt=F=>{if(D||h||f||!F.length)return;const pe=F.filter(lT);if(pe.length<F.length&&Ce("error",`${F.length-pe.length} file(s) skipped. Choose PDF files only.`),!pe.length)return;const Ee=pe.map(Te=>({id:++xe.current,file:Te,cancelled:!1,state:"queued"}));Fe.current=[...Fe.current,...Ee];const N={done:0,pagesDone:0};C({total:Ee.length,done:0,pagesDone:0,active:0,phase:"checking"});let Y=0;(async()=>{for(;Y<Ee.length&&De.current;){const Te=Ee[Y++];if(Te.cancelled){N.done+=1;continue}await Ut(Te,N,Ee.length)}})().then(()=>{if(Fe.current=Fe.current.filter(Pe=>!Ee.includes(Pe)),!De.current)return;const Te=Ee.filter(Pe=>Pe.state==="done").length;Te&&Ce("info",`${Te} PDF(s) saved on this device. Check each PDF's EDE status below; AutoCAD is not connected.`),C(null)})},At=async F=>{if(!(D||w)){A(F.id),C({total:1,done:0,pagesDone:0,active:1,phase:"extracting",currentAlias:F.alias,pageNow:0,pageTotal:F.pageCount});try{const pe=await ko(F.id),Ee=await Gt(F,pe,()=>De.current,(N,Y)=>{De.current&&C(te=>te&&{...te,phase:"extracting",pageNow:N,pageTotal:Y})});Ce("info",`${F.alias}: ${Ee.tagCount} tag candidate(s) and ${Ee.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(pe){const Ee=Km(pe);await bi(F.id,{analysisStatus:"failed",analysisMessage:Ee}).catch(()=>{}),Ce("error",`${F.alias}: ${Ee}`)}finally{C(null),A(null),await Lt()}}},Sa=()=>{Fe.current.forEach(F=>{F.state!=="done"&&(F.cancelled=!0)}),Ce("info","Remaining imports were cancelled. Finished files stay saved.")},ia=async F=>{le(null);try{await vb([F]),k===F&&M(null),await Lt()}catch{Ce("error","The PDF could not be deleted from local storage.")}},Ta=async()=>{le(null),Fe.current.forEach(F=>{F.cancelled=!0});try{await g2(a),M(null),await Lt()}catch{Ce("error","Saved PDFs could not be cleared.")}},qt=async F=>{try{const pe=await ko(F.id),Ee=URL.createObjectURL(new Blob([pe],{type:"application/pdf"})),N=document.createElement("a");N.href=Ee,N.download=`original-source-${a==="PFD"?"pfd":"pid"}-pdf-${F.aliasNumber}.pdf`,document.body.appendChild(N),N.click(),N.remove(),setTimeout(()=>URL.revokeObjectURL(Ee),4e3)}catch{Ce("error","The original PDF could not be read for download.")}},ht=async F=>{if(!(!F||!ce)){if(F.size>nb){Je("The project title block is larger than the 100 MB local upload limit."),Ie.current&&(Ie.current.value="");return}if(he&&!window.confirm("Replace the saved title block for this project in this browser? The previous local file will be replaced.")){Ie.current&&(Ie.current.value="");return}pt(!0),Je("");try{await Ux(ce,F.name,new Uint8Array(await F.arrayBuffer())),be(await Nm(ce)),Je("Title block saved for this group in this browser.")}catch(pe){Je(pe instanceof Error?pe.message:"The project title block could not be saved locally.")}finally{pt(!1),Ie.current&&(Ie.current.value="")}}},$a=async()=>{if(!(!ce||!he)&&window.confirm("Remove this client folder title block from this browser? Existing generated DWGs are not changed.")){Je("");try{await Bx(ce),be(null),Je("Group title block removed from this browser.")}catch(F){Je(F instanceof Error?F.message:"The project title block could not be removed.")}}},ca=async()=>{if(!(!p.length||D!==null||xt||it||h||f)){fa(!0),ie("");try{const F=p.reduce((we,$e)=>we+$e.size,0),pe=ce?await $x(ce):null;if(ce&&!pe)throw new Error("Upload a standalone DWG title block for the selected client folder before preparing its AutoCAD runner.");if(F+(pe?.bytes??0)>oT)throw new Error("The saved source PDFs and client title block exceed the 500 MB limit for this local AutoCAD runner package.");const Ee=un();if(ve&&!Ee.projects[ve])throw new Error("That project library is no longer available. Select a current project mapping or use Legends Library only.");const N=[...Ee.companyItems,...ve?Ee.projects[ve]?.items??[]:[]],te=N.filter(we=>we.category==="symbol"&&we.reviewStatus==="reviewed"&&we.sourceKind==="extracted-dwg"&&[a,"Shared"].includes(we.fields.find($e=>$e.label==="Source discipline")?.value?.trim()??"")).flatMap(we=>{const $e=Ca=>we.fields.find(Bs=>Bs.label===Ca)?.value?.trim()??"",yt=$e("Source drawing ID"),Ct=$e("Block asset ID"),tt=$e("Block name"),ta=$e("Fallback category"),In=$e("Target CAD layer"),Ft=$e("Source discipline");if(!yt||!Ct||!tt||!ta||Ft!=="PFD"&&Ft!=="P&ID"&&Ft!=="Shared")return[];if(!In||In.toUpperCase()==="0")throw new Error(`Approved block "${tt}" has no valid target CAD layer. Re-review it and select an approved non-zero layer.`);let Da;if(ta.toLowerCase()==="valve"){const Ca=$e("Wipeout mask boundary");try{Da=Is(Ca)}catch(Bs){throw new Error(`Approved valve "${tt}" has no valid reviewed body mask. Re-review the valve outline before preparing the AutoCAD runner. ${Bs instanceof Error?Bs.message:""}`)}}return[{sourceId:yt,blockAssetId:Ct,blockName:tt,fallbackCategory:ta,targetLayer:In,discipline:Ft,...Da?{wipeoutBoundary:Da}:{},...we.scope==="project"&&we.projectId?{projectId:we.projectId}:{}}]}),Te=N.flatMap(we=>{if(we.sourceKind!=="extracted-dwg"||we.reviewStatus!=="reviewed"||we.category!=="layer"&&we.category!=="textStyle"&&we.category!=="linetype")return[];const $e=tt=>we.fields.find(ta=>ta.label===tt)?.value?.trim()??"",yt=$e("Source discipline"),Ct=$e("CAD name");return!Ct||yt!=="PFD"&&yt!=="P&ID"&&yt!=="Shared"?[]:[{name:Ct,category:we.category,detail:$e("Extracted details"),discipline:yt,...we.scope==="project"&&we.projectId?{projectId:we.projectId}:{}}]}),Pe=[...new Set(te.map(we=>we.blockAssetId))],Ne=await Promise.all(Pe.map(async we=>{const[$e,yt]=await Promise.all([rb(we),sb(we)]);return{id:we,content:$e,format:yt.format??"DWG",...yt.geometryDescriptor?{geometryDescriptor:yt.geometryDescriptor}:{}}})),_e=new Map(Ne.map(we=>[we.id,we])),Ue=new Map((await Ou()).map(we=>[we.id,we])),St=new Map;for(const we of te){const $e=_e.get(we.blockAssetId)?.geometryDescriptor;if($e?.primitives.length&&$e.bounds)continue;const yt=St.get(we.sourceId)??[];yt.push(we),St.set(we.sourceId,yt)}const ea=[];for(const[we,$e]of St){const yt=Ue.get(we),Ct=$e.map(tt=>_e.get(tt.blockAssetId)).filter(tt=>!!tt);if(!yt||yt.format!=="DXF"){for(const tt of Ct)tt.geometryIndexError=yt?"SOURCE_DWG_REQUIRES_OVERVIEW_DXF":"SOURCE_NOT_AVAILABLE";continue}try{const tt=await Uo(we);if(tt.byteLength>50*1024*1024){for(const Ft of Ct)Ft.geometryIndexError="SOURCE_DXF_TOO_LARGE";continue}const ta=new TextDecoder("windows-1252").decode(tt),In=Ri(ta,[...new Set($e.map(Ft=>Ft.blockName))]);for(const Ft of $e){const Da=_e.get(Ft.blockAssetId);if(!Da)continue;const Ca=In.get(Ft.blockName)?.geometryDescriptor;if(!Ca||!Ca.primitives.length||!Ca.bounds){Da.geometryIndexError="BLOCK_NOT_FOUND_OR_UNSUPPORTED";continue}Da.geometryDescriptor=Ca,ea.push({id:Da.id,sourceId:we,blockName:Ft.blockName,content:Da.content,geometryDescriptor:Ca})}}catch{for(const tt of Ct)tt.geometryIndexError="SOURCE_DXF_UNREADABLE"}}ea.length&&await _u(ea);const Aa=new Map,Ot=Go(a==="PFD"?"pfd":"pid"),nl=Z1(Ot.flatMap(we=>we.rows.map($e=>({stableId:$e.id,itemTag:$e.itemTag})))),sl=Xy(`${a}:${ve||"legends-default"}`);for(const we of Ot)for(const $e of we.rows){if(!$e.sourcePdfId)continue;const yt=new Set([Number($e.sourcePage),...($e.sourceLocations??[]).map(Ct=>Ct.pageNumber)].filter(Ct=>Number.isInteger(Ct)&&Ct>0));for(const Ct of yt){const tt=Aa.get($e.sourcePdfId)??[];tt.some(ta=>ta.stableId===$e.id&&ta.pageNumber===Ct)||(tt.push({stableId:$e.id,itemTag:$e.itemTag,type:$e.type,pageNumber:Ct,fields:Object.fromEntries(el.map(ta=>[ta,$e[ta]]))}),Aa.set($e.sourcePdfId,tt))}}const mn=await tT(await Promise.all(p.map(async we=>({pageCount:we.pageCount,pdfBytes:new Uint8Array(await ko(we.id)),sourceHash:we.hash,discipline:a,edeRecords:Aa.get(we.id)??[],attributeRules:sl,conflictingTags:nl,...ve?{projectId:ve}:{},...ce?{titleBlockGroupId:ce}:{}}))),te,Ne,Te,pe?{groupId:pe.projectId,content:pe.content}:void 0),yn=URL.createObjectURL(mn),gs=document.createElement("a");gs.href=yn,gs.download="autocad-runner-with-source-pdfs.zip",document.body.append(gs),gs.click(),gs.remove(),window.setTimeout(()=>URL.revokeObjectURL(yn),1e3);const rl=p.reduce((we,$e)=>we+$e.pageCount,0);ie(`Runner and ${p.length} source PDF(s) downloaded. It can create ${rl} separate DWG file(s). ${te.filter(we=>(we.discipline===a||we.discipline==="Shared")&&(!we.projectId||we.projectId===ve)).length} reviewed symbol mapping(s) and ${Te.filter(we=>(we.discipline===a||we.discipline==="Shared")&&(!we.projectId||we.projectId===ve)).length} reviewed layer/text-style/linetype mapping(s) are available to this ${a} run.`+(pe?" The selected client title block is included for 1:1 XREF attachment; keep its output companion DWG beside the generated pages.":""))}catch(F){ie(F instanceof Error?F.message:"The AutoCAD runner could not be prepared. Try a smaller PDF batch.")}finally{fa(!1)}}},Wa=async F=>{const pe=Number(ge);if(!Number.isFinite(pe)||pe<=0){Re("Enter a scale multiplier greater than zero.");return}B(!0),Re("Reading PDF vector geometry…");try{const{buildPdfDxfPackage:Ee}=await Pn(async()=>{const{buildPdfDxfPackage:Pe}=await import("./pdf-dxf-export-BQfMGCWx.js");return{buildPdfDxfPackage:Pe}},[]),N=await Ee((F?[F]:p).map(Pe=>({aliasNumber:Pe.aliasNumber,bytes:()=>ko(Pe.id)})),pe,(Pe,Ne,_e)=>{De.current&&Re(`Creating DXF: PDF ${Pe} · page ${Ne} of ${_e}…`)},()=>De.current&&Ke.current===a);if(!De.current||Ke.current!==a)return;const Y=URL.createObjectURL(N.blob),te=document.createElement("a");te.href=Y,te.download="pdf-dxf-pages.zip",document.body.append(te),te.click(),te.remove(),window.setTimeout(()=>URL.revokeObjectURL(Y),1e3);const Te=N.reports.length-N.exported;Re(`${N.exported} DXF page(s) created${Te?`; ${Te} page(s) skipped—read the report`:""}. Raw vector output—not a verified exact PDF match. Compare each page with its source; library replacement and engineering scale are not verified.`)}catch(Ee){De.current&&Re(Ee instanceof Error?Ee.message:"DXF export failed; no CAD output was confirmed.")}finally{De.current&&B(!1)}},Dt=q.useMemo(()=>p.find(F=>F.id===k)??null,[p,k]),qn=q.useMemo(()=>{if(!k||!x)return[];try{const Ee=Go(a==="PFD"?"pfd":"pid").find(N=>N.sourcePdfId===k)?.rows.find(N=>N.id===x);return(Ee?.sourceLocations??[]).filter(N=>N.pageNumber===K).map(N=>({id:Ee.id,label:Ee.itemTag,location:N}))}catch{return[]}},[a,K,k,L,x]),pa=p.reduce((F,pe)=>F+pe.pageCount,0),ha=D!==null,Jt=Math.min(100,v/Uu*100);return c.jsxs("section",{className:"pdf-workflow","aria-labelledby":"pdf-workflow-title","data-testid":"panel-pdf-workflow",children:[c.jsxs("div",{className:"pdf-panel-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"pdf-kicker",children:["PDF INPUT · LOCAL SOURCE FILES · ",a]}),c.jsx("h2",{id:"pdf-workflow-title",children:"Source PDF files"}),c.jsxs("p",{children:["Add PDFs for this ",a," workspace. They stay in this browser and appear as PDF 1, PDF 2, and so on."]})]}),c.jsxs("div",{className:"pdf-actions",children:[c.jsxs("label",{className:"btn primary pdf-add-control","data-testid":"label-add-pdfs",children:[c.jsx(Zg,{size:15})," Add PDFs",c.jsx("input",{type:"file",accept:"application/pdf,.pdf",multiple:!0,"aria-label":"Add PDF files",disabled:ha||h||!!f||!st,onChange:F=>{Bt(Array.from(F.currentTarget.files??[])),F.currentTarget.value=""},"data-testid":"input-add-pdfs"})]}),c.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>le({type:"all"}),disabled:!p.length,"aria-label":"Clear all saved PDFs","data-testid":"button-clear-pdfs",children:[c.jsx(Ai,{size:14})," Clear all"]})]})]}),c.jsxs("div",{className:"pdf-trust-note","data-testid":"text-pdf-local-only",children:[c.jsx(fs,{size:15}),c.jsxs("div",{className:"pdf-trust-copy",children:[c.jsxs("span",{children:[c.jsx("strong",{children:"Saved on this device only."})," PDFs are not uploaded, backed up, or synced. Clearing browser data removes them.",!st&&" New PDFs cannot be added in this browser because duplicate checking needs a secure connection."]}),c.jsxs("details",{className:"pdf-privacy-details",children:[c.jsx("summary",{children:"Privacy and scanned PDFs"}),c.jsxs("p",{children:["Original PDFs are not changed. Searchable text and scanned pages are read in this browser. The OCR code and language files may be downloaded, but the PDF itself is not sent. PDF aliases hide file names only; names and logos printed inside the pages remain visible."," ","Download an original if you need a separate copy."]})]})]})]}),c.jsxs("div",{className:"pdf-storage-line","data-testid":"text-pdf-storage",children:[c.jsxs("span",{children:[Ro(v)," of ",Ro(Uu)," used (all disciplines)"]}),c.jsxs("span",{children:["Limit ",Ro($u)," per PDF"]})]}),c.jsx("div",{className:"pdf-meter",role:"progressbar","aria-label":"Local storage used","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Jt),children:c.jsx("span",{style:{width:`${Jt}%`}})}),c.jsx("div",{style:{height:12}}),D&&c.jsxs("div",{className:"pdf-progress",role:"status","aria-live":"polite","data-testid":"status-pdf-progress",children:[c.jsxs("div",{className:"pdf-progress-top",children:[c.jsxs("span",{children:[c.jsx(Ia,{size:12,className:"pdf-spin"})," ",D.phase==="checking"?`Checking and saving: ${D.done} of ${D.total} file(s) finished · ${D.pagesDone} page(s) verified`:`${D.currentAlias??"PDF"} · reading page ${D.pageNow??0} of ${D.pageTotal??0} for EDE`]}),c.jsx("button",{type:"button",className:"btn",onClick:Sa,"data-testid":"button-cancel-import","aria-label":"Cancel remaining imports",children:"Cancel"})]}),c.jsx("div",{className:"pdf-meter",children:c.jsx("span",{style:{width:`${D.phase==="checking"?D.done/D.total*100:(D.done+(D.pageTotal?(D.pageNow??0)/D.pageTotal:0))/D.total*100}%`}})})]}),S.length>0&&c.jsx("ul",{className:"pdf-notes","aria-live":"polite","data-testid":"list-pdf-notes",children:S.map(F=>c.jsxs("li",{className:F.kind==="info"?"info":"",role:F.kind==="error"?"alert":void 0,"data-testid":`status-pdf-note-${F.id}`,children:[F.kind==="error"?c.jsx(ps,{size:14}):c.jsx(us,{size:14}),c.jsx("span",{children:F.text}),c.jsx("button",{type:"button","aria-label":"Dismiss message",onClick:()=>R(pe=>pe.filter(Ee=>Ee.id!==F.id)),children:c.jsx(Jg,{size:13})})]},F.id))}),c.jsxs("div",{className:"pdf-queue","aria-label":"Saved PDF files",children:[ne&&c.jsxs("div",{className:"pdf-confirm",role:"alertdialog","aria-label":"Confirm delete","data-testid":"dialog-confirm-delete",children:[c.jsx("span",{children:ne.type==="all"?`Delete all ${p.length} saved ${a} PDF(s) from this device? This cannot be undone.`:"Delete this PDF from this device? This cannot be undone."}),c.jsx("button",{type:"button",className:"btn danger","data-testid":"button-confirm-delete",onClick:()=>ne.type==="all"?void Ta():void ia(ne.id),children:"Delete"}),c.jsx("button",{type:"button",className:"btn","data-testid":"button-cancel-delete",onClick:()=>le(null),children:"Keep"})]}),h?c.jsxs("div",{className:"pdf-queue-empty",role:"status","data-testid":"status-pdf-loading",children:[c.jsx(Ia,{size:16,className:"pdf-spin"})," Loading saved PDFs"]}):f?c.jsxs("div",{className:"pdf-queue-empty",role:"alert","data-testid":"status-pdf-load-error",children:[c.jsx(ps,{size:16})," ",f,c.jsx("button",{type:"button",className:"btn",onClick:()=>{y(!0),Lt()},"data-testid":"button-retry-load",children:"Try again"})]}):p.length?p.map(F=>c.jsxs("div",{className:`pdf-file-row${F.id===k?" is-selected":""}`,"data-testid":`row-pdf-file-${F.id}`,children:[c.jsxs("button",{type:"button",className:"pdf-select",onClick:()=>{M(F.id),j(null),ue(1)},"aria-label":`Preview ${F.alias}`,"aria-pressed":F.id===k,"data-testid":`button-select-pdf-${F.id}`,children:[c.jsx("span",{className:"pdf-file-icon",children:c.jsx(us,{size:17})}),c.jsxs("span",{className:"pdf-file-details",children:[c.jsx("strong",{className:"pdf-filename","data-testid":`text-pdf-name-${F.id}`,children:F.alias}),c.jsxs("span",{className:"pdf-file-meta",children:[F.pageCount," page(s) · ",Ro(F.size)," · saved locally"]}),c.jsxs("span",{className:"pdf-analysis-state","data-testid":`status-ede-${F.id}`,children:["EDE: ",F.analysisStatus==="needs-review"?`${F.analysisRecordCount??0} candidate(s) · review required`:F.analysisStatus==="no-tags"?"No tag candidates found":F.analysisStatus==="extracting"?w===F.id?"Extraction in progress":"Paused · resume available":F.analysisStatus==="failed"?"Extraction failed":F.analysisStatus==="paused"?"Paused · resume available":"Not extracted yet"," · AutoCAD: not connected"]}),F.analysisStatus==="failed"&&F.analysisMessage&&c.jsx("span",{className:"pdf-analysis-state",role:"status",children:F.analysisMessage})]})]}),c.jsxs("span",{className:"pdf-row-actions",children:[F.analysisStatus!=="needs-review"&&w!==F.id&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:ha,onClick:()=>{At(F)},"data-testid":`button-extract-ede-${F.id}`,children:[c.jsx(us,{size:13})," ",F.analysisStatus==="failed"?"Retry EDE":F.analysisStatus==="paused"||F.analysisStatus==="extracting"?"Resume EDE":"Create EDE data"]}),(F.analysisStatus==="needs-review"||F.analysisStatus==="no-tags")&&c.jsx(oa,{className:"btn pdf-extract-btn",href:`/workspace/${a==="PFD"?"pfd":"pid"}/engineering-data?source=${encodeURIComponent(F.id)}`,children:"Open EDE"}),F.analysisStatus==="needs-review"&&c.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:ha,onClick:()=>{At(F)},"data-testid":`button-refresh-source-links-${F.id}`,children:[c.jsx(BE,{size:13})," Recheck tags & locations"]}),w===F.id&&c.jsxs("span",{className:"pdf-running-label",children:[c.jsx(Ia,{size:13,className:"pdf-spin"})," Reading"]}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Preview ${F.alias}`,onClick:()=>{M(F.id),j(null),ue(1)},"data-testid":`button-preview-pdf-${F.id}`,children:c.jsx(EE,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Download original source ${F.alias}`,onClick:()=>{qt(F)},"data-testid":`button-download-pdf-${F.id}`,children:c.jsx(qs,{size:15})}),c.jsx("button",{type:"button",className:"pdf-icon-btn danger","aria-label":`Remove ${F.alias}`,onClick:()=>le({type:"one",id:F.id}),"data-testid":`button-remove-pdf-${F.id}`,children:c.jsx(Jg,{size:15})})]})]},F.id)):c.jsxs("div",{className:"pdf-queue-empty","data-testid":"empty-pdf-queue",children:[c.jsx(us,{size:18}),c.jsxs("span",{children:["No saved PDFs for ",a]}),c.jsx("small",{children:"Add PDFs to keep them on this device. You can add several at once."})]})]}),c.jsx("div",{className:"pdf-page-summary",style:{marginTop:10},"data-testid":"text-pdf-page-summary",children:p.length?`${p.length} PDF(s) · ${pa} total page(s)`:ha?"Working on your files":"No readable PDFs saved yet"}),p.length>=100&&c.jsxs("div",{className:"pdf-trust-note",role:"note","data-testid":"text-large-batch-resume",children:[c.jsx(fs,{size:15}),c.jsxs("span",{children:["This batch contains ",p.length," PDFs and ",pa," pages. The AutoCAD runner tracks every page in a local journal beside the DWGs, so you can resume later with the same unchanged kit and output name. Progress is recorded on the Windows workstation, not in this browser."]})]}),Dt&&c.jsxs("div",{className:"pdf-source-box","data-testid":"panel-source-page",children:[c.jsxs("div",{className:"pdf-page-select",children:[c.jsx("label",{htmlFor:"pdf-page-picker",children:"Source page"}),c.jsx("select",{id:"pdf-page-picker",value:K,onChange:F=>ue(Number(F.target.value)),"data-testid":"select-source-page","aria-label":"Select source page",children:Array.from({length:Dt.pageCount},(F,pe)=>c.jsxs("option",{value:pe+1,children:["Page ",pe+1]},pe+1))}),c.jsxs("span",{children:["of ",Dt.pageCount," in ",Dt.alias]})]}),c.jsx($1,{fileId:Dt.id,alias:Dt.alias,pageCount:Dt.pageCount,page:K,onPageChange:ue,loadBytes:ko,markers:qn,onMarkerClick:F=>{const pe=a==="PFD"?"pfd":"pid";window.location.assign(`/workspace/${pe}/engineering-data?source=${encodeURIComponent(Dt.id)}&record=${encodeURIComponent(F)}`)}})]}),c.jsxs("div",{className:"pdf-capabilities",children:[c.jsxs("div",{className:"pdf-capability-storage pdf-dxf-export",children:[c.jsx("div",{className:"capability-heading",children:c.jsx("strong",{children:"Create DXF — no AutoCAD needed"})}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Scale multiplier · 1 = PDF paper size in mm"}),c.jsx("input",{type:"number",min:"0.000001",step:"any",value:ge,onChange:F=>qe(F.target.value),"aria-label":"DXF scale multiplier"})]}),c.jsx("button",{className:"btn primary",type:"button",disabled:!p.length||ha||h||fe||xt||!!f,onClick:()=>{Wa(Dt??void 0)},"data-testid":"button-export-dxf",children:fe?c.jsxs(c.Fragment,{children:[c.jsx(Ia,{size:14,className:"pdf-spin"})," Creating DXF…"]}):c.jsxs(c.Fragment,{children:[c.jsx(qs,{size:14})," ",Dt?`${Dt.alias} · Download DXF pages`:"Download all DXF pages"]})}),Dt&&p.length>1&&c.jsx("button",{className:"btn",type:"button",disabled:ha||h||fe||xt||!!f,onClick:()=>{Wa()},"data-testid":"button-export-all-dxf",children:"All PDFs · Download DXF pages"}),c.jsx("p",{children:"One editable DXF per vector PDF page. Scanned pages are not automatically traced. This exports raw PDF geometry, not library-standard symbols. Source details may remain—review/redact before sharing."}),de&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:de}),c.jsx(W1,{})]}),c.jsxs("div",{className:"pdf-capability-convert",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"01"}),c.jsx("strong",{children:"Page check"})]}),c.jsx("div",{className:"pdf-page-summary","data-testid":"text-pdf-page-summary",children:p.length?`${p.length} PDF(s) · ${pa} total page(s)`:"Add PDFs to prepare an AutoCAD runner."})]}),c.jsxs("div",{className:"pdf-capability-storage",children:[c.jsxs("div",{className:"capability-heading",children:[c.jsx("span",{className:"capability-number",children:"02"}),c.jsx("strong",{children:"Local AutoCAD runner"})]}),c.jsxs("label",{className:"runner-project-choice",children:[c.jsx("span",{children:"Approved CAD mappings"}),c.jsxs("select",{value:ve,disabled:it,onChange:F=>me(F.target.value),"aria-label":"Approved CAD mappings for this runner",children:[c.jsx("option",{value:"",children:"Legends Library only"}),re.map(F=>c.jsx("option",{value:F.id,children:F.label},F.id))]})]}),c.jsxs("div",{className:"runner-group-hint","aria-live":"polite","data-testid":"runner-mapping-inventory",children:[G?c.jsxs(c.Fragment,{children:[c.jsxs("strong",{children:[G.symbols," usable approved blocks · ",G.layers," layers · ",G.textStyles," text styles for ",a]}),G.symbols===0&&c.jsxs("p",{role:"status",children:["No compatible approved blocks: this kit cannot convert PDF symbols into approved CAD blocks. Approve ",a," or Shared symbols with an approved target layer first. Other-discipline symbols are not reused automatically."]}),G.textStyles===0&&c.jsx("p",{children:"Confirmed final text uses Arial Narrow at its existing height and position. Unconfirmed PDF text stays visible for review. An approved final text layer is required for loose text."}),G.otherDisciplineSymbols>0&&c.jsxs("p",{children:[G.otherDisciplineSymbols," approved symbol(s) belong to the other discipline and are excluded."]})]}):c.jsx("p",{children:"The mapping library could not be checked. Do not assume blocks or text formatting are available."}),c.jsx("button",{type:"button",className:"btn btn-ghost btn-small",onClick:()=>_(F=>F+1),children:"Refresh mapping counts"}),Q&&c.jsxs("p",{role:"status",children:["Local mapping counts checked at ",Q,". Refresh recounts saved approvals; it does not approve symbols."]})]}),c.jsxs("label",{className:"runner-group-choice",children:[c.jsxs("span",{children:[a," client folder for this batch"]}),c.jsxs("select",{value:ce,disabled:!vt.length||it||xt,onChange:F=>i(F.target.value),"aria-label":`${a} client folder for title block`,children:[c.jsx("option",{value:"",children:vt.length?`Choose a ${a} client folder`:`Create a ${a} client folder first`}),vt.map(F=>c.jsx("option",{value:F.id,children:F.label},F.id))]})]}),c.jsxs("p",{className:"runner-group-hint",children:["Choose the client folder for this batch. All PDFs currently listed in this ",a," workspace will use its title block, so keep one project’s PDFs in the batch."]}),ce?c.jsxs("div",{className:"runner-title-block","aria-label":"Project title block",children:[c.jsxs("div",{className:"runner-title-block-heading",children:[c.jsxs("strong",{children:["Client title block",l&&ce===o?` · ${l}`:""]}),Ye?c.jsx("span",{children:"Checking this browser…"}):he?c.jsxs("span",{children:["Saved locally · ",Ro(he.bytes)]}):c.jsx("span",{children:"Required for this project"})]}),!Ye&&!he&&c.jsx("p",{children:"Upload a standalone .DWG for this project. The runner attaches it as a model-space XREF at (0,0,0), rotation 0, scale 1:1, preserving its layers. Use matching drawing units."}),c.jsx("input",{ref:Ie,className:"runner-title-block-file",type:"file",accept:".dwg,application/acad","aria-label":"Choose project title block DWG",onChange:F=>{ht(F.currentTarget.files?.[0])}}),c.jsxs("div",{className:"runner-title-block-actions",children:[c.jsx("button",{className:"btn",type:"button",disabled:Ye||it||xt,onClick:()=>Ie.current?.click(),children:it?c.jsxs(c.Fragment,{children:[c.jsx(Ia,{size:14,className:"pdf-spin"})," Saving locally…"]}):c.jsxs(c.Fragment,{children:[c.jsx(Zg,{size:14})," ",he?"Replace title block DWG":"Upload title block DWG"]})}),he&&c.jsx("button",{className:"btn",type:"button",disabled:it||xt,onClick:()=>{$a()},children:"Remove"})]}),c.jsx("p",{className:"runner-title-block-note",children:"The file stays in this browser and is added only to this client folder’s local runner. Text already in the title block is kept as-is. The output folder will contain a companion DWG; keep it beside the generated pages."}),jt&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:jt})]}):c.jsx("p",{className:"runner-title-block-empty",children:vt.length?`Select a ${a} client folder above to upload or use its title block.`:"Create a Technology, Project or Proposal, and Client folder to use a client title block."}),c.jsx(Q1,{scope:`${a}:${ve||"legends-default"}`},`${a}:${ve}`),c.jsx("button",{className:"btn primary",type:"button",disabled:!p.length||ha||h||xt||Ye||it||!!ce&&!he||!!f,"aria-describedby":"runner-description",onClick:()=>{ca()},"data-testid":"button-convert-to-dwg",children:xt?c.jsxs(c.Fragment,{children:[c.jsx(Ia,{size:14,className:"pdf-spin"})," Preparing…"]}):c.jsxs(c.Fragment,{children:[c.jsx(QE,{size:14})," Download AutoCAD batch runner"]})}),c.jsx("p",{id:"runner-description",children:"The ZIP contains the saved PDFs, only individually exported approved blocks, and—when a PFD/P&ID group is selected—its title block DWG. It does not include original mapping source DWGs. Run it in Windows AutoCAD. Unmatched symbols retain source geometry or use an approved same-category fallback with a red review cloud and source-page reference. A local journal tracks each page and lets the same unchanged batch resume without overwriting completed DWGs."}),U&&c.jsx("p",{role:"status",className:"pdf-runner-message",children:U})]})]}),c.jsxs("div",{className:"pdf-final-status",role:"note","data-testid":"text-conversion-unavailable",children:[c.jsxs("strong",{children:[c.jsx(ME,{size:13,style:{verticalAlign:"-2px"}})," AutoCAD 2020 is not connected to this browser."]})," ","DXF vector export runs directly in this browser. Native DWG still requires the downloaded helper to run in Windows AutoCAD; the browser does not connect to AutoCAD."]}),c.jsx(c2,{discipline:a,onAddPdfs:Bt,clientFolderId:o||void 0,clientFolderLabel:l||void 0})]})}function ey({discipline:a}){const[s]=q.useState(()=>{try{return{hierarchy:_1(),recovery:null}}catch(me){const ce=me instanceof Mo?me:new Mo("Saved groups could not be loaded from this browser.");return{hierarchy:xu(),recovery:{message:ce.message,rawValue:ce.rawValue}}}}),[o,l]=q.useState(s.hierarchy),[i,p]=q.useState(s.recovery),[g,h]=q.useState(""),[y,f]=q.useState(null),[m,v]=q.useState(""),[E,S]=q.useState(null),R=o[a],D=a==="pfd"?"PFD":"P&ID",C=Au(R,E),w=C&&(C.kind==="client"||C.kind==="legacy")?C.id:"",A=w?By(R).find(me=>me.id===w)?.label??C?.name??"":"",k=me=>S(me||null);q.useEffect(()=>{if(!i)try{P1(o),h("")}catch(me){h(me instanceof Error?me.message:"Groups could not be saved in this browser.")}},[o,i]);const M=(me,ce,V=[])=>({id:globalThis.crypto?.randomUUID?.()??`group-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:me,kind:ce,expanded:!0,children:V}),x=(me,ce)=>{v(ce),f(me)},j=()=>{const me=M("New technology","technology",[M("Projects","projects"),M("Proposals","proposals")]);l(ce=>({...ce,[a]:[...ce[a],me]})),x(me.id,me.name),S(me.id)},L=me=>{const ce=Au(R,me);if(!ce)return;const V=ce.kind==="projects"?"project":ce.kind==="proposals"?"proposal":ce.kind==="project"||ce.kind==="proposal"?"client":null;if(!V)return;const ye=M(V==="project"?"New project":V==="proposal"?"New proposal":"New client",V);l(Ae=>({...Ae,[a]:Ei(Ae[a],me,_=>({..._,expanded:!0,children:[..._.children,ye]}))})),x(ye.id,ye.name),S(ye.id)},P=me=>{const ce=m.trim();if(!ce||ce.length>Ci){h(`Folder names must be 1–${Ci} characters.`),f(null);return}l(V=>({...V,[a]:Ei(V[a],me,re=>({...re,name:ce}))})),f(null),h("")},K=()=>f(null),ue=me=>l(ce=>({...ce,[a]:Ei(ce[a],me,V=>({...V,expanded:!V.expanded}))})),ne=me=>{window.confirm(`Delete “${me.name}” and all folders inside it? Saved title blocks and CAD sources are not deleted.`)&&($y(me,E)&&S(null),Cb(me,y)&&f(null),l(ce=>({...ce,[a]:My(ce[a],me.id)})))},le=()=>{if(i?.rawValue===null||i?.rawValue===void 0)return;const me=new Blob([i.rawValue],{type:"application/json;charset=utf-8"}),ce=URL.createObjectURL(me),V=document.createElement("a");V.href=ce,V.download="mapping-studio-hierarchy-backup.json",V.click(),window.setTimeout(()=>URL.revokeObjectURL(ce),1e3)},ve=()=>{if(window.confirm("Clear the unreadable hierarchy saved in this browser? This cannot be undone. Download a backup first if you may need the saved data."))try{window.localStorage.removeItem(Qu),window.localStorage.removeItem(qy),l(xu()),p(null),h("")}catch{h("Browser storage could not be cleared. The saved hierarchy remains locked and unchanged.")}};return c.jsxs("main",{className:"hierarchy-page","data-discipline":a,children:[c.jsxs("header",{className:"hierarchy-topbar",children:[c.jsxs(oa,{href:"/",className:"studio-wordmark","data-testid":"link-home",children:[c.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),c.jsxs("div",{className:"hierarchy-top-actions",children:[c.jsxs("span",{className:"local-chip",children:[c.jsx("span",{className:"local-dot"}),"Saved on this device"]}),c.jsxs(oa,{href:"/",className:"btn subtle","data-testid":"link-discipline-selection",children:[c.jsx(hy,{size:14})," Disciplines"]})]})]}),c.jsxs("div",{className:"hierarchy-frame",children:[c.jsxs("aside",{className:"hierarchy-sidebar",children:[c.jsx("div",{className:"sidebar-label",children:"DISCIPLINES"}),c.jsxs(oa,{href:"/workspace/pfd",className:`discipline-nav ${a==="pfd"?"active":""}`,"data-testid":"nav-pfd",children:[c.jsx(OE,{size:16})," PFD"]}),c.jsxs(oa,{href:"/workspace/pid",className:`discipline-nav ${a==="pid"?"active":""}`,"data-testid":"nav-pid",children:[c.jsx(Lo,{size:16})," P&ID"]}),c.jsxs("div",{className:"sidebar-local-note",children:[c.jsx(fs,{size:14}),c.jsx("span",{children:"PFD and P&ID groups stay separate."})]})]}),c.jsxs("section",{className:"hierarchy-main","aria-label":`${D} workspace`,children:[c.jsxs("div",{className:"hierarchy-heading",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"eyebrow",children:[D," workspace"]}),c.jsx("h1",{children:D}),c.jsx("p",{children:"Organize technology, project/proposal and client folders. Common standards stay in the company library."})]}),c.jsxs("div",{className:"hierarchy-heading-actions",children:[c.jsxs(oa,{href:`/workspace/${a}/engineering-data`,className:"btn edm-entry-link","data-testid":`link-engineering-data-${a}`,children:[c.jsx(Hu,{size:14})," Engineering data"]}),c.jsxs("button",{className:"btn primary",onClick:j,disabled:!!i,"data-testid":"button-add-group",children:[c.jsx(Bo,{size:15})," New technology"]})]})]}),i&&c.jsxs("div",{className:"hierarchy-recovery",role:"alert","data-testid":"status-hierarchy-recovery",children:[c.jsxs("div",{className:"recovery-title",children:[c.jsx(ps,{size:17}),c.jsx("strong",{children:"Saved groups need recovery"})]}),c.jsxs("p",{children:[i.message," Editing is disabled to protect the saved data."]}),i.rawValue!==null?c.jsx("button",{className:"btn",onClick:le,"data-testid":"button-download-hierarchy-backup",children:"Download raw backup"}):c.jsx("p",{className:"recovery-unavailable",children:"A raw backup is unavailable because browser storage could not be read."}),c.jsx("button",{className:"btn danger",onClick:ve,"data-testid":"button-clear-hierarchy-storage",children:"Clear saved data and start over"})]}),g&&!i&&c.jsxs("div",{className:"storage-banner",role:"alert","data-testid":"status-hierarchy-storage",children:[c.jsx(ps,{size:15}),g]}),c.jsxs("div",{className:"hierarchy-panel",children:[c.jsxs("div",{className:"tree-head",children:[c.jsx("span",{children:"TECHNOLOGY · PROJECTS · PROPOSALS · CLIENTS"}),c.jsxs("span",{"data-testid":"text-group-count",children:[Tu(R)," ",Tu(R)===1?"folder":"folders"]})]}),R.length===0?c.jsxs("div",{className:"hierarchy-empty","data-testid":"empty-hierarchy",children:[c.jsx("div",{className:"empty-folder",children:c.jsx(vu,{size:23})}),c.jsx("strong",{children:i?"Folders are locked":"No technology folders yet"}),c.jsx("p",{children:i?"Recover or clear the saved data to continue.":"Create a technology folder, then add projects or proposals and their clients."}),!i&&c.jsxs("button",{className:"btn",onClick:j,"data-testid":"button-create-first-group",children:[c.jsx(Bo,{size:14})," Create first technology"]})]}):c.jsx("div",{className:"tree-list",role:"tree","aria-label":`${D} project folders`,children:R.map(me=>c.jsx(Nb,{node:me,depth:0,selectedId:E,editingId:y,editName:m,setEditName:v,onSelect:S,onToggle:ue,onAdd:L,onRename:x,onCommit:P,onCancel:K,onDelete:ne,disabled:!!i},me.id))})]}),w&&c.jsxs("div",{className:"hierarchy-client-context",role:"status","data-testid":"selected-client-folder",children:[c.jsx(vu,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:A})," selected. Its title block and client source library will be used below."]})]}),c.jsxs("div",{className:"hierarchy-footnote",children:[c.jsx(fs,{size:14}),c.jsx("span",{children:"Saved in this browser. PFD and P&ID folder trees stay separate."})]}),c.jsx(cT,{discipline:a==="pfd"?"PFD":"P&ID",groups:R,selectedClientId:w,selectedClientLabel:A,onSelectClient:k},a)]})]})]})}function Cb(a,s){return s!==null&&(a.id===s||a.children.some(o=>Cb(o,s)))}function Nb({node:a,depth:s,selectedId:o,editingId:l,editName:i,setEditName:p,onSelect:g,onToggle:h,onAdd:y,onRename:f,onCommit:m,onCancel:v,onDelete:E,disabled:S}){const R=l===a.id,D=["projects","proposals","project","proposal"].includes(a.kind),C=!["projects","proposals"].includes(a.kind),w=a.kind==="projects"?"Add project":a.kind==="proposals"?"Add proposal":a.kind==="project"||a.kind==="proposal"?"Add client":"Add folder",A={technology:"Technology",projects:"Projects",proposals:"Proposals",project:"Project",proposal:"Proposal",client:"Client",legacy:"Existing group"},k=q.useRef(null),M=()=>{k.current!==a.id&&(k.current=a.id,m(a.id))},x=()=>{k.current!==a.id&&(k.current=a.id,v())};return c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:`tree-row ${o===a.id?"selected":""}`,role:"treeitem","aria-expanded":a.children.length?a.expanded:void 0,"aria-level":s+1,style:{"--tree-depth":s},"data-testid":`tree-group-${a.id}`,children:[c.jsx("button",{className:"tree-toggle","aria-label":`${a.expanded?"Collapse":"Expand"} ${a.name}`,disabled:S,onClick:()=>h(a.id),"data-testid":`button-toggle-group-${a.id}`,children:a.expanded?c.jsx(ds,{size:15}):c.jsx(Gu,{size:15})}),c.jsx(vu,{className:"tree-folder",size:16}),R?c.jsx("input",{autoFocus:!0,maxLength:Ci,className:"tree-rename-input","aria-label":"Folder name",value:i,disabled:S,onChange:j=>p(j.target.value),onFocus:()=>{k.current=null},onBlur:M,onKeyDown:j=>{j.key==="Enter"&&M(),j.key==="Escape"&&(j.preventDefault(),x())},"data-testid":`input-rename-group-${a.id}`}):c.jsx("button",{className:"tree-name",disabled:S,onClick:()=>g(a.id),onDoubleClick:()=>C&&f(a.id,a.name),title:"Select folder; double-click to rename","data-testid":`button-select-group-${a.id}`,children:a.name}),c.jsx("span",{className:"tree-kind-badge",children:A[a.kind]}),c.jsxs("span",{className:"tree-actions",children:[D&&c.jsx("button",{"aria-label":`${w} under ${a.name}`,title:w,disabled:S,onClick:()=>y(a.id),"data-testid":`button-add-subgroup-${a.id}`,children:c.jsx(Bo,{size:14})}),C&&c.jsx("button",{"aria-label":`Rename ${a.name}`,title:"Rename folder",disabled:S,onClick:()=>f(a.id,a.name),"data-testid":`button-rename-group-${a.id}`,children:c.jsx(VE,{size:13})}),C&&c.jsx("button",{"aria-label":`Delete ${a.name}`,title:"Delete folder",disabled:S,onClick:()=>E(a),"data-testid":`button-delete-group-${a.id}`,children:c.jsx(Ai,{size:13})})]})]}),a.expanded&&a.children.map(j=>c.jsx(Nb,{node:j,depth:s+1,selectedId:o,editingId:l,editName:i,setEditName:p,onSelect:g,onToggle:h,onAdd:y,onRename:f,onCommit:m,onCancel:v,onDelete:E,disabled:S},j.id))]})}function dT({order:a,hidden:s,onChange:o}){const l=(i,p)=>{const g=[...a];[g[i],g[i+p]]=[g[i+p],g[i]],o(g,s)};return c.jsxs("details",{className:"edm-column-picker",children:[c.jsxs("summary",{children:["Columns (",a.length-s.length,")"]}),c.jsxs("div",{className:"edm-column-options",children:[c.jsx("p",{children:"Use these checkboxes to show or hide columns. The filter icon in each heading filters row values, including (Blanks), and does not hide the column."}),a.map((i,p)=>c.jsxs("div",{className:"edm-column-option",children:[c.jsxs("label",{children:[c.jsx("input",{type:"checkbox",checked:!s.includes(i),"aria-label":`Show ${wt[i]}`,disabled:!s.includes(i)&&s.length===a.length-1,onChange:()=>o(a,s.includes(i)?s.filter(g=>g!==i):[...s,i])}),wt[i]]}),c.jsx("button",{type:"button",disabled:p===0,onClick:()=>l(p,-1),"aria-label":`Move ${wt[i]} up`,children:c.jsx(cE,{size:14})}),c.jsx("button",{type:"button",disabled:p===a.length-1,onClick:()=>l(p,1),"aria-label":`Move ${wt[i]} down`,children:c.jsx(sE,{size:14})})]},i)),c.jsx("button",{className:"btn subtle",type:"button",onClick:()=>o([..._n],[]),children:"Reset columns"})]})]})}function ty(a){const s=Math.min(272,window.innerWidth-16),o=Math.min(360,window.innerHeight-16),l=Math.max(8,Math.min(a.left,window.innerWidth-s-8)),i=a.bottom+4;return{top:i+o<=window.innerHeight-8?i:Math.max(8,a.top-o-4),left:l}}function ay({label:a,options:s,selectedValues:o,onApply:l}){const i=q.useRef(null),p=q.useRef(null),g=q.useRef(null),[h,y]=q.useState(!1),[f,m]=q.useState(null),[v,E]=q.useState([]),[S,R]=q.useState(""),D=o!==void 0,C=q.useMemo(()=>s.map(L=>L.value),[s]),w=q.useMemo(()=>{const L=S.trim().toLowerCase();return L?s.filter(P=>(P.value||"(Blanks)").toLowerCase().includes(L)):s},[s,S]),A=s.reduce((L,P)=>L+Number(v.includes(P.value)),0),k=s.length>0&&A===s.length;q.useEffect(()=>{g.current&&(g.current.indeterminate=A>0&&A<s.length)},[v,s.length,A]),q.useEffect(()=>{if(!h)return;const L=()=>{const ue=i.current?.getBoundingClientRect();ue&&m(ty(ue))},P=ue=>{const ne=ue.target;!p.current?.contains(ne)&&!i.current?.contains(ne)&&y(!1)},K=ue=>{ue.key==="Escape"&&y(!1)};return L(),document.addEventListener("pointerdown",P),document.addEventListener("keydown",K),window.addEventListener("resize",L),window.addEventListener("scroll",L,!0),()=>{document.removeEventListener("pointerdown",P),document.removeEventListener("keydown",K),window.removeEventListener("resize",L),window.removeEventListener("scroll",L,!0)}},[h]);const M=()=>{if(h){y(!1);return}const L=i.current?.getBoundingClientRect();L&&m(ty(L)),E(o?[...o]:C),R(""),y(!0)},x=L=>{E(P=>P.includes(L)?P.filter(K=>K!==L):[...P,L])},j=()=>{l(v),y(!1)};return c.jsxs(c.Fragment,{children:[c.jsxs("button",{ref:i,type:"button",className:`edm-column-filter-trigger${D?" active":""}`,title:`${D?"Filtered":"Filter"} ${a}`,"aria-label":`${D?"Edit filter for":"Filter"} ${a}`,"aria-expanded":h,onClick:M,"data-testid":`button-filter-${a.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[c.jsx(jE,{size:12}),c.jsx(ds,{size:10})]}),h&&f&&qi.createPortal(c.jsxs("div",{ref:p,className:"edm-column-filter-menu",style:{top:f.top,left:f.left},role:"dialog","aria-label":`${a} filter`,"data-testid":"menu-column-filter",children:[c.jsxs("strong",{className:"edm-column-filter-title",children:["Filter: ",a]}),c.jsxs("label",{className:"edm-column-filter-search",children:[c.jsx(Fo,{size:14}),c.jsx("input",{value:S,onChange:L=>R(L.target.value),placeholder:"Search values…","aria-label":`Search ${a} values`})]}),c.jsxs("label",{className:"edm-column-filter-select-all",children:[c.jsx("input",{ref:g,type:"checkbox",checked:k,disabled:!s.length,onChange:()=>E(k?[]:C)}),c.jsx("span",{children:"Select all"})]}),c.jsxs("div",{className:"edm-column-filter-options",role:"group","aria-label":`${a} values`,children:[!w.length&&c.jsx("p",{className:"edm-column-filter-empty",children:s.length?"No matching values.":"No values in this drawing yet."}),w.map(L=>c.jsxs("label",{className:"edm-column-filter-option",children:[c.jsx("input",{type:"checkbox",checked:v.includes(L.value),onChange:()=>x(L.value)}),c.jsx("span",{children:L.value||"(Blanks)"}),c.jsx("small",{children:L.count})]},JSON.stringify(L.value)))]}),c.jsxs("div",{className:"edm-column-filter-actions",children:[c.jsx("button",{type:"button",className:"edm-column-filter-clear",disabled:!D,onClick:()=>{l(void 0),y(!1)},children:"Clear filter"}),c.jsx("span",{}),c.jsx("button",{type:"button",onClick:()=>y(!1),children:"Cancel"}),c.jsx("button",{type:"button",className:"apply",disabled:!s.length,onClick:j,children:"Apply"})]})]}),document.body)]})}function kb(a){return{headers:["#","Object type",...a.fields.map(s=>wt[s])],rows:a.rows.map((s,o)=>[o+1,s.type,...a.fields.map(l=>fn(s,l))])}}function Rb(a){return a.groups.map(s=>{const o=new Map;for(const l of a.rows){const i=fn(l,s)||"—";o.set(i,(o.get(i)??0)+1)}return{field:s,label:wt[s],values:[...o].map(([l,i])=>({value:l,count:i}))}})}function uT(a){const s=kb(a);return Ab(s.headers,s.rows)}async function fT(a,s){const{default:o}=await Pn(async()=>{const{default:m}=await import("./exceljs.min-DTEjgkHU.js").then(v=>v.e);return{default:m}},__vite__mapDeps([2,1])),l=new o.Workbook;l.creator="gaurav.cbiindia";const i=l.addWorksheet("Engineering data",{pageSetup:{orientation:"landscape",fitToPage:!0,fitToWidth:1,fitToHeight:0}}),p=kb(a),g=Rb(a),h=p.headers.length;["Engineering Data Editor",`${s.discipline} · ${s.drawing}${s.revision?` · ${s.revision}`:""} · ${a.rows.length} records`,`Object type: ${s.filter} · Search: ${s.search||"(none)"} · Sort: ${s.sort}`,...g.map(m=>{const v=m.values.map(({value:E,count:S})=>`${E} (${S})`).join(" · ");return`${m.label}: ${v.length>1500?v.slice(0,1500)+"… (see Group summaries sheet)":v}`})].forEach((m,v)=>{const E=i.addRow([m]);i.mergeCells(E.number,1,E.number,h),E.height=v===0?30:32,E.getCell(1).font={name:"Calibri",size:v===0?16:10,bold:v===0,color:{argb:v===0?"FFF0F0E8":"FF405A55"}},E.getCell(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:v===0?"FF203940":"FFF9F8F2"}},E.getCell(1).alignment={vertical:"middle",wrapText:!0}});const f=i.addRow(p.headers);if(f.height=30,f.eachCell(m=>{m.font={name:"Calibri",bold:!0,size:10,color:{argb:"FF405A55"}},m.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFF0F1E9"}},m.alignment={vertical:"middle",wrapText:!0},m.border={bottom:{style:"thin",color:{argb:"FFD9DED5"}}}}),p.rows.forEach((m,v)=>{const E=i.addRow(m);E.height=30,E.eachCell({includeEmpty:!0},(S,R)=>{S.numFmt=R===1?"0":"@",S.font={name:R>2&&a.fields[R-3]==="itemTag"?"Consolas":"Calibri",size:10,color:{argb:"FF405A55"}},S.alignment={vertical:"middle",wrapText:!0},S.fill={type:"pattern",pattern:"solid",fgColor:{argb:v%2?"FFF2F5EE":"FFFBFAF6"}},S.border={right:{style:"thin",color:{argb:"FFECEEE8"}},bottom:{style:"thin",color:{argb:"FFE7E9E2"}}}})}),i.columns.forEach((m,v)=>{const E=a.fields[v-2];m.width=v===0?7:v===1?18:E==="notes"?52:E==="description"||E==="connection"?38:Math.max(18,p.headers[v].length+3)}),i.views=[{state:"frozen",ySplit:f.number,xSplit:2}],i.autoFilter={from:{row:f.number,column:1},to:{row:f.number+p.rows.length,column:h}},i.pageSetup.printTitlesRow=`${f.number}:${f.number}`,i.headerFooter.oddFooter="© gaurav.cbiindia | &P of &N",g.length){const m=l.addWorksheet("Group summaries");m.columns=[{header:"Group field",width:25},{header:"Value",width:42},{header:"Records",width:12}],g.forEach(v=>v.values.forEach(({value:E,count:S})=>m.addRow([v.label,E,S]))),m.getRow(1).font={bold:!0},m.views=[{state:"frozen",ySplit:1}],m.autoFilter="A1:C1"}return new Uint8Array(await l.xlsx.writeBuffer())}function jb(a,s){const o=String(s==="type"?a.type:fn(a,s));return o.trim()?o:""}function pT(a,s){const o=new Map;for(const l of a){const i=jb(l,s);o.set(i,(o.get(i)??0)+1)}return[...o.entries()].map(([l,i])=>({value:l,count:i})).sort((l,i)=>l.value===""?i.value===""?0:1:i.value===""?-1:l.value.localeCompare(i.value,void 0,{numeric:!0,sensitivity:"base"}))}function ny(a,s){return Object.entries(s).every(([o,l])=>l===void 0||l.includes(jb(a,o)))}const hT=["All types",...Xo],gT=["type",..._n],Lb="pid-mapping-studio:engineering-column-widths:v1",Yu=44,Vu=720,mT=a=>a==="rowNumber"?44:a==="type"?154:a==="itemTag"?250:a==="notes"?300:a==="description"||a==="stableId"?220:a==="drawingRef"?180:a==="sourcePage"?100:a==="reviewStatus"?150:136;function yT(){try{const a=JSON.parse(window.localStorage.getItem(Lb)??"{}");return!a||typeof a!="object"||Array.isArray(a)?{}:Object.fromEntries(Object.entries(a).filter(s=>typeof s[1]=="number"&&Number.isFinite(s[1])).map(([s,o])=>[s,Math.max(Yu,Math.min(Vu,o))]))}catch{return{}}}function sy(a){try{window.localStorage.setItem(Lb,JSON.stringify(a))}catch{}}const bT=a=>a.split(/\s+/).map(s=>s[0]).join("").slice(0,2).toUpperCase();function ry({discipline:a}){const[s]=q.useState(()=>{try{return{drawings:Go(a),raw:Nr(a),error:""}}catch{return{drawings:[],raw:null,error:"Saved engineering data could not be read. Editing is blocked to protect it. Export a raw backup before recovery."}}}),[o,l]=q.useState(s.drawings),i=q.useRef(o),p=q.useRef(!0),g=q.useRef(s.raw),[h,y]=q.useState(o[0]?.id??""),f=o.find(N=>N.id===h)??o[0]??{id:"",name:"No drawing selected",revision:"",rows:[]};q.useEffect(()=>{const N=new URLSearchParams(window.location.search).get("source"),Y=N?o.find(te=>te.sourcePdfId===N):void 0;Y&&Y.id!==h&&y(Y.id)},[o,h]),q.useEffect(()=>{_({}),j(""),ue("All types"),le(0)},[h,a]);const m=f.rows,[v,E]=q.useState(m[0]?.id??""),[S,R]=q.useState(""),[D,C]=q.useState("Rev 0"),[w,A]=q.useState(""),[k,M]=q.useState("Equipment"),[x,j]=q.useState(""),[L,P]=q.useState(""),[K,ue]=q.useState("All types"),[ne,le]=q.useState(0),[ve,me]=q.useState(12),[ce,V]=q.useState({field:"itemTag",direction:1}),[re,ye]=q.useState([]),[Ae,_]=q.useState({}),[Q,$]=q.useState([..._n]),[G,oe]=q.useState([]),[he,be]=q.useState(yT),Ye=q.useRef(he),Me=q.useRef(null),it=q.useRef(null),[pt,jt]=q.useState("records"),Je=Q.filter(N=>!G.includes(N)),xt=["rowNumber","type",...Je],fa=N=>he[N]??mT(N),U=xt.reduce((N,Y)=>N+fa(Y),0),[ie,fe]=q.useState(!1),[B,de]=q.useState(""),[Re,ge]=q.useState(""),[qe,Fe]=q.useState(s.error),Ie=(N,Y,te=!1)=>{const Te={...Ye.current,[N]:Math.max(Yu,Math.min(Vu,Math.round(Y)))};Ye.current=Te,be(Te),te&&sy(Te)},De=N=>{const Y=document.createElement("canvas").getContext("2d"),te=Me.current?getComputedStyle(Me.current).font:"";Y&&(Y.font=te||"12px sans-serif");const Te=N==="rowNumber"?"#":N==="type"?"Object type":wt[N],Pe=N==="rowNumber"?[]:N==="type"?m.map(St=>St.type):m.map(St=>fn(St,N)),Ne=St=>St.split(/\r?\n/).reduce((ea,Aa)=>Math.max(ea,Y?Y.measureText(Aa||"—").width:Aa.length*7),0),_e=Pe.reduce((St,ea)=>Math.max(St,Ne(ea)),Ne(Te));Ie(N,_e+(N==="itemTag"?158:N==="rowNumber"?18:54),!0)},Qt=(N,Y)=>{Y.preventDefault(),Y.stopPropagation(),Y.currentTarget.setPointerCapture(Y.pointerId),it.current={column:N,pointerId:Y.pointerId,startX:Y.clientX,startWidth:fa(N)}},xe=(N,Y)=>{const te=it.current;!te||te.column!==N||te.pointerId!==Y.pointerId||(Y.preventDefault(),Ie(N,te.startWidth+Y.clientX-te.startX))},Ke=(N,Y)=>{const te=it.current;!te||te.column!==N||te.pointerId!==Y.pointerId||(it.current=null,sy(Ye.current),Y.currentTarget.hasPointerCapture(Y.pointerId)&&Y.currentTarget.releasePointerCapture(Y.pointerId))},st=(N,Y)=>{Y.key==="Enter"?(Y.preventDefault(),De(N)):(Y.key==="ArrowLeft"||Y.key==="ArrowRight")&&(Y.preventDefault(),Ie(N,fa(N)+(Y.key==="ArrowRight"?16:-16),!0))},vt=(N,Y)=>c.jsx("span",{className:"edm-column-resize-handle",role:"separator","aria-orientation":"vertical","aria-label":`Resize ${Y} column`,"aria-valuenow":fa(N),"aria-valuemin":Yu,"aria-valuemax":Vu,title:"Drag to resize · double-click to fit text",tabIndex:0,onPointerDown:te=>Qt(N,te),onPointerMove:te=>xe(N,te),onPointerUp:te=>Ke(N,te),onPointerCancel:te=>Ke(N,te),onDoubleClick:te=>{te.preventDefault(),te.stopPropagation(),De(N)},onKeyDown:te=>st(N,te),"data-testid":`resize-column-${N}`});q.useEffect(()=>{p.current=!0;const N=Y=>{if(Y.key===`pid-mapping-studio:engineering-workspace:v2:${a}`)try{const te=Go(a);i.current=te,l(te),g.current=Nr(a),Fe("")}catch{Fe("Saved data changed and could not be read. Reload this page before editing.")}};return window.addEventListener("storage",N),()=>{p.current=!1,window.removeEventListener("storage",N)}},[a]);const Ce=m.find(N=>N.id===v)??null;q.useEffect(()=>{const N=new URLSearchParams(window.location.search).get("record");if(!N)return;let Y=N;try{Y=sf(N)}catch{}const te=m.find(Te=>Te.id===Y);te&&te.id!==v&&E(te.id)},[m,v]);const Lt=q.useMemo(()=>{const N=x.trim().toLowerCase();return Object.fromEntries(gT.map(Y=>{const te={...Ae};delete te[Y];const Te=m.filter(Pe=>(K==="All types"||Pe.type===K)&&(!N||Object.values(Pe).join(" ").toLowerCase().includes(N))&&ny(Pe,te));return[Y,pT(Te,Y)]}))},[m,x,K,Ae]),Gt=q.useMemo(()=>{const N=x.trim().toLowerCase();return m.filter(Y=>(K==="All types"||Y.type===K)&&(!N||Object.values(Y).join(" ").toLowerCase().includes(N))&&ny(Y,Ae))},[m,x,K,Ae]),Ut=q.useMemo(()=>[...Gt].sort((N,Y)=>{for(const te of re){const Te=fn(N,te).localeCompare(fn(Y,te)||"—",void 0,{numeric:!0});if(Te)return Te}return fn(N,ce.field).localeCompare(fn(Y,ce.field),void 0,{numeric:!0})*ce.direction}),[Gt,ce,re]),Bt=Math.max(1,Math.ceil(Ut.length/ve)),At={fields:Je,rows:Ut,groups:re},Sa=Rb(At),ia=Ut.slice(ne*ve,(ne+1)*ve);q.useEffect(()=>{ia.length&&!ia.some(N=>N.id===v)?E(ia[0].id):!ia.length&&v&&E("")},[ia,v]),q.useEffect(()=>le(N=>Math.min(N,Bt-1)),[Bt]);const Ta=N=>{if(s.error)return!1;try{return g.current=Fu(a,N,g.current),i.current=N,l(N),Fe(""),!0}catch(Y){return Fe(Y instanceof Error&&Y.name!=="QuotaExceededError"?Y.message:"Device storage is full or unavailable. This change was not saved. Download a backup and free space."),!1}},qt=N=>Ta(o.map(Y=>Y.id===f.id?{...Y,rows:N}:Y)),ht=(N,Y,te)=>{qt(m.map(Te=>Te.id===N?{...Te,[Y]:te}:Te))},$a=N=>{N.preventDefault();const Y=S.trim();if(!Y||o.some(Te=>Te.name.toLowerCase()===Y.toLowerCase())){Fe("Enter a new, unique drawing reference.");return}const te={id:crypto.randomUUID(),name:Y,revision:D.trim()||"Rev 0",rows:[]};Ta([...o,te])&&(y(te.id),R(""),le(0))},ca=N=>{if(N.preventDefault(),!f.id)return;const Y=rf(k,w,f.name);if(qt([...m,Y])){A(""),j(""),ue("All types"),V({field:"itemTag",direction:1}),ye([]);const te=[...m,Y].sort((Te,Pe)=>Te.itemTag.localeCompare(Pe.itemTag,void 0,{numeric:!0})).findIndex(Te=>Te.id===Y.id);le(Math.floor(te/ve)),E(Y.id)}},Wa=()=>{!Ce||!window.confirm(`Delete record ${Ce.itemTag}? This cannot be undone without a backup.`)||qt(m.filter(N=>N.id!==Ce.id))&&E("")},Dt=async(N,Y)=>{if(N.size>5*1024*1024){Fe("Import a file smaller than 5 MB.");return}try{const te=f.id,Te=await N.text();if(!p.current)return;if(Y==="csv"){const Pe=i.current.find(_e=>_e.id===te);if(!Pe)throw new Error("The target drawing no longer exists. Choose a drawing and try again.");const Ne=U2(Te,Pe.name);Ta(i.current.map(_e=>_e.id===te?{..._e,rows:[..._e.rows,...Ne]}:_e))&&(j(""),ue("All types"),le(0))}else{const Pe=q2(Te,a);Ta([...i.current,...Pe])&&(y(Pe[0]?.id??f.id),le(0))}}catch(te){Fe(te instanceof Error?te.message:"This file could not be imported. No records were changed.")}},qn=N=>V(Y=>({field:N,direction:Y.field===N&&Y.direction===1?-1:1})),pa=(N,Y)=>{const te=Lt[N].map(Pe=>Pe.value),Te=Y!==void 0&&te.every(Pe=>Y.includes(Pe))&&Y.length===te.length;_(Pe=>{const Ne={...Pe};return Y===void 0||Te?delete Ne[N]:Ne[N]=Y,Ne}),le(0)},ha=N=>ye(Y=>Y.includes(N)?Y:[...Y,N]),Jt=N=>{N.preventDefault();const Y=N.dataTransfer.getData("text/engineering-field");_n.includes(Y)&&ha(Y)},F=N=>{const Y=Math.max(0,Math.min(Bt-1,N));le(Y);const te=Ut.slice(Y*ve,(Y+1)*ve)[0];te&&E(te.id)},pe=N=>{y(N),j(""),le(0)},Ee=async(N,Y=!1)=>{if(ie)return;const te=Y?{fields:_n,rows:o.flatMap(Ne=>Ne.rows),groups:[]}:At,Te=Y?"all-records":"current-view",Pe={discipline:a==="pid"?"P&ID":"PFD",drawing:Y?"All drawings":f.name,revision:Y?void 0:f.revision,filter:Y?"All types":K,search:Y?"":x.trim(),sort:Y?"Drawing order":`${wt[ce.field]} ${ce.direction===1?"ascending":"descending"}`};fe(!0),de(""),ge("");try{const Ne=N==="csv"?uT(te):await fT(te,Pe);vi(`engineering-${a}-${Te}.${N}`,Ne,N==="csv"?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),p.current&&de(`Prepared ${N==="csv"?"CSV":"Excel"}: ${te.rows.length} records · ${Y?"all records":"current view"}.`)}catch(Ne){p.current&&ge(Ne instanceof Error?Ne.message:"Export could not be prepared. Your saved records have not changed.")}finally{p.current&&fe(!1)}};return c.jsxs("main",{className:"edm-page","data-mobile-panel":pt,children:[c.jsxs("header",{className:"edm-topbar",children:[c.jsxs(oa,{href:`/workspace/${a}`,className:"edm-brand","data-testid":"link-edm-workspace",children:[c.jsx("span",{className:"edm-mark",children:"ED"}),c.jsxs("span",{children:["Engineering Data Manager",c.jsx("small",{children:"Mapping Studio / browser-local workspace"})]})]}),c.jsxs("div",{className:"edm-toplinks",children:[c.jsxs("nav",{className:"edm-disciplines","aria-label":"Discipline navigation",children:[c.jsx(oa,{href:"/workspace/pfd/engineering-data",className:a==="pfd"?"active":"","data-testid":"link-edm-pfd",children:"PFD"}),c.jsx(oa,{href:"/workspace/pid/engineering-data",className:a==="pid"?"active":"","data-testid":"link-edm-pid",children:"P&ID"})]}),c.jsxs("span",{className:"edm-local",children:[c.jsx(fs,{size:13}),"Saved on this device"]}),c.jsxs(oa,{href:`/workspace/${a}`,className:"btn subtle","aria-label":"Back to the PFD or P&ID workspace","data-testid":"link-back-workspace",children:[c.jsx(hy,{size:13})," Workspace"]})]})]}),c.jsxs("nav",{className:"edm-mobile-tabs","aria-label":"Engineering data panels",children:[c.jsx("button",{type:"button",className:pt==="catalog"?"active":"","aria-pressed":pt==="catalog",onClick:()=>jt("catalog"),"data-testid":"tab-edm-catalog",children:"Catalog"}),c.jsx("button",{type:"button",className:pt==="records"?"active":"","aria-pressed":pt==="records",onClick:()=>jt("records"),"data-testid":"tab-edm-records",children:"Records"}),c.jsx("button",{type:"button",className:pt==="properties"?"active":"","aria-pressed":pt==="properties",onClick:()=>jt("properties"),"data-testid":"tab-edm-properties",children:"Properties"})]}),c.jsxs("div",{className:"edm-titlebar",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"edm-eyebrow",children:[a==="pfd"?"PROCESS FLOW DIAGRAM":"PIPING & INSTRUMENTATION"," / YOUR RECORDS"]}),c.jsx("h1",{children:"Engineering data"}),c.jsx("p",{children:"Add or import your records. PFD and P&ID stay separate on this device."})]}),c.jsxs("div",{className:"edm-object-select",children:[c.jsx("span",{children:"Object type"}),c.jsx("select",{value:K,onChange:N=>{ue(N.target.value),le(0)},"aria-label":"Object type filter","data-testid":"select-object-type",children:hT.map(N=>c.jsx("option",{children:N},N))}),c.jsx(ds,{size:14})]})]}),c.jsxs("div",{className:"edm-file-actions",children:[c.jsxs("button",{className:"btn",disabled:!o.length,onClick:()=>vi(`engineering-${a}-backup.json`,P2(a,o),"application/json"),"data-testid":"button-backup-data",children:[c.jsx(qs,{size:14})," Download backup"]}),c.jsxs("label",{className:"btn",children:[c.jsx(Cr,{size:14})," Import backup",c.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Import engineering backup",disabled:!!s.error,onChange:N=>{const Y=N.currentTarget.files?.[0];N.currentTarget.value="",Y&&Dt(Y,"backup")}})]}),c.jsx("button",{className:"btn",disabled:ie||!o.some(N=>N.rows.length),onClick:()=>{Ee("csv",!0)},"data-testid":"button-report-all",children:"All records · CSV"}),c.jsx("button",{className:"btn",disabled:ie||!o.some(N=>N.rows.length),onClick:()=>{Ee("xlsx",!0)},"data-testid":"button-report-all-excel",children:"All records · Excel"}),s.error&&c.jsx("button",{className:"btn",onClick:()=>{try{const N=Nr(a);N&&vi(`engineering-${a}-raw.json`,N,"application/json")}catch{Fe("Device storage cannot be accessed. The saved data has not been changed.")}},children:"Export raw backup"}),s.error&&c.jsx("button",{className:"btn danger",onClick:()=>{if(window.confirm("Delete unreadable engineering data for this discipline? Download a raw backup first. This cannot be undone and does not delete PDFs or the old demo data."))try{window.localStorage.removeItem(`pid-mapping-studio:engineering-workspace:v2:${a}`),window.location.reload()}catch{Fe("Device storage cannot be cleared. The saved data has not been changed.")}},children:"Reset unreadable data"}),c.jsx("span",{children:"Local storage only · download backups regularly"})]}),c.jsxs("div",{className:"edm-workspace",children:[c.jsxs("aside",{className:"edm-catalog",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsxs("span",{children:[c.jsx(Hu,{size:15})," Catalog"]}),c.jsx("span",{className:"edm-counter",children:o.length})]}),c.jsxs("div",{className:"edm-catalog-search",children:[c.jsx(Fo,{size:13}),c.jsx("input",{"aria-label":"Filter drawings",placeholder:"Filter drawings…",value:L,onChange:N=>P(N.target.value),"data-testid":"input-catalog-filter"})]}),c.jsxs("div",{className:"edm-catalog-label",children:["DRAWINGS · ",a.toUpperCase()]}),c.jsxs("div",{className:"edm-drawing-list",children:[o.filter(N=>N.name.toLowerCase().includes(L.toLowerCase())).map(N=>c.jsxs("button",{className:`edm-drawing-item ${f.id===N.id?"selected":""}`,onClick:()=>pe(N.id),"data-testid":`button-drawing-${N.id}`,children:[c.jsx(us,{size:15}),c.jsxs("span",{children:[c.jsx("strong",{children:N.name}),c.jsxs("small",{children:[N.revision," · ",N.rows.length," records"]})]})]},N.id)),!o.some(N=>N.name.toLowerCase().includes(L.toLowerCase()))&&c.jsx("div",{className:"edm-empty",children:"No drawings match."})]}),c.jsxs("form",{className:"edm-create-drawing",onSubmit:$a,children:[c.jsxs("label",{children:["Drawing reference",c.jsx("input",{value:S,onChange:N=>R(N.target.value),maxLength:160,required:!0,placeholder:"e.g. PID-001","aria-label":"New drawing reference","data-testid":"input-new-drawing"})]}),c.jsxs("label",{children:["Revision",c.jsx("input",{value:D,onChange:N=>C(N.target.value),maxLength:80,"aria-label":"New drawing revision"})]}),c.jsxs("button",{className:"btn primary",disabled:!!s.error,"data-testid":"button-add-drawing",children:[c.jsx(Bo,{size:14})," Add drawing"]})]}),f.id&&c.jsxs("button",{className:"btn danger edm-delete-drawing",disabled:!!s.error,onClick:()=>{if(!window.confirm(`Delete drawing ${f.name} and its ${m.length} records? Download a backup first. This does not delete source PDFs.`))return;const N=o.filter(Y=>Y.id!==f.id);Ta(N)&&(y(N[0]?.id??""),E(""),le(0))},"data-testid":"button-delete-drawing",children:[c.jsx(Ai,{size:14})," Delete drawing"]}),c.jsxs("div",{className:"edm-catalog-foot",children:["No invented sample records.",c.jsx("br",{}),"Source PDFs stay in your workspace."]})]}),c.jsxs("section",{className:"edm-main",children:[c.jsxs("section",{className:"edm-preview panel edm-source-summary",children:[c.jsxs("header",{children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"ACTIVE DRAWING RECORD"}),c.jsx("strong",{"data-testid":"text-active-drawing",children:f.name})]}),c.jsx("span",{className:"edm-revision",children:f.revision})]}),c.jsx("p",{children:f.sourcePdfId?`${f.sourceAlias??"PDF"} tag candidates and clearly labelled values are stored here. Every extracted record needs review. Blank fields mean the PDF text/OCR did not provide a clear value.`:"Add records manually or import them from CSV. New PDF tag candidates appear here with a source page and a review status."}),c.jsxs(oa,{href:f.sourcePdfId?`/workspace/${a}?pdf=${encodeURIComponent(f.sourcePdfId)}&page=${encodeURIComponent(f.rows.find(N=>N.sourcePdfId)?.sourcePage||"1")}#pdf-workflow-title`:`/workspace/${a}`,className:"btn subtle",children:[c.jsx(us,{size:14})," ",f.sourcePdfId?"Open source PDF page":"View original PDFs"]}),c.jsxs("div",{className:"edm-autocad-status",role:"note",children:[c.jsx("strong",{children:"AutoCAD 2020: not connected."})," EDE extraction does not create a DWG."]})]}),c.jsxs("section",{className:"edm-editor panel",children:[c.jsxs("div",{className:"edm-editor-title",children:[c.jsxs("div",{children:[c.jsx("span",{className:"edm-section-kicker",children:"DATA WORKSPACE"}),c.jsx("h2",{children:"Engineering Data Editor"})]}),c.jsx("div",{className:"edm-type-chip",children:K})]}),c.jsxs("form",{className:"edm-add-record",onSubmit:ca,children:[c.jsxs("label",{children:["Object type",c.jsx("select",{value:k,onChange:N=>M(N.target.value),"aria-label":"New record type",children:Xo.map(N=>c.jsx("option",{children:N},N))})]}),c.jsxs("label",{children:["Item tag",c.jsx("input",{value:w,onChange:N=>A(N.target.value),maxLength:160,required:!0,placeholder:"e.g. P-101","aria-label":"New item tag","data-testid":"input-new-tag"})]}),c.jsxs("button",{className:"btn primary",disabled:!f.id||!!s.error,"data-testid":"button-add-record",children:[c.jsx(Bo,{size:14})," Add record"]})]}),c.jsxs("div",{className:"edm-report-actions",children:[c.jsxs("button",{className:"btn",disabled:ie||!Ut.length,onClick:()=>{Ee("csv")},"data-testid":"button-export-report",children:[c.jsx(qs,{size:14})," Current view · CSV"]}),c.jsxs("button",{className:"btn",disabled:ie||!Ut.length,onClick:()=>{Ee("xlsx")},"data-testid":"button-export-excel",children:[c.jsx(qs,{size:14})," Current view · Excel"]}),c.jsxs("label",{className:"btn",children:[c.jsx(Cr,{size:14})," Import CSV",c.jsx("input",{type:"file",accept:".csv,text/csv","aria-label":"Import engineering CSV",disabled:!f.id||!!s.error,onChange:N=>{const Y=N.currentTarget.files?.[0];N.currentTarget.value="",Y&&Dt(Y,"csv")}})]}),c.jsx("button",{className:"btn subtle",onClick:()=>vi("engineering-import-template.csv",$2([]),"text/csv;charset=utf-8"),"data-testid":"button-csv-template",children:"CSV template"}),c.jsxs("button",{className:"btn danger",disabled:!Ce||!!s.error,onClick:Wa,"data-testid":"button-delete-record",children:[c.jsx(Ai,{size:14})," Delete selected"]})]}),c.jsxs("div",{className:"edm-export-note","aria-live":"polite",children:[c.jsx("span",{children:"Current view: shown columns, filters, sorting and all matching rows across pages. Excel also includes group summaries. CSV has no visual formatting."}),ie&&c.jsx("strong",{role:"status",children:"Preparing export…"}),B&&c.jsx("strong",{role:"status",children:B}),Re&&c.jsx("strong",{role:"alert",children:Re})]}),c.jsx(dT,{order:Q,hidden:G,onChange:(N,Y)=>{$(N),oe(Y)}}),c.jsxs("div",{className:"edm-placement-legend","aria-label":"CAD placement status legend",children:[c.jsxs("span",{children:[c.jsx("i",{className:"available","aria-hidden":"true",children:"●"})," Available / not placed"]}),c.jsxs("span",{children:[c.jsx("i",{className:"current","aria-hidden":"true",children:"●"})," On this drawing"]}),c.jsxs("span",{children:[c.jsx("i",{className:"another","aria-hidden":"true",children:"●"})," On another drawing"]}),c.jsx("small",{children:"Based on the saved reference only; CAD is not connected for live verification."})]}),c.jsxs("div",{className:"edm-grid-toolbar",children:[c.jsxs("label",{className:"edm-global-search",children:[c.jsx(Fo,{size:14}),c.jsx("input",{placeholder:"Search all fields…","aria-label":"Search engineering data",value:x,onChange:N=>{j(N.target.value),le(0)},"data-testid":"input-engineering-search"})]}),c.jsxs("span",{className:"edm-result-total","data-testid":"text-result-count",children:[Gt.length," records"]}),c.jsxs("button",{className:"edm-toolbar-button",onClick:()=>{j(""),ue("All types"),_({}),le(0)},"data-testid":"button-clear-filters",children:[c.jsx(wu,{size:14})," Clear filters"]})]}),c.jsxs("div",{className:"edm-groups",onDragOver:N=>N.preventDefault(),onDrop:Jt,"data-testid":"drop-column-group",children:[c.jsx("span",{children:"GROUP BY"}),re.length?re.map(N=>c.jsxs("button",{onClick:()=>ye(Y=>Y.filter(te=>te!==N)),title:"Remove group",children:[wt[N]," ",c.jsx("b",{children:"×"})]},N)):c.jsx("em",{children:"Drag a column header here to group records"})]}),c.jsxs("label",{className:"edm-group-select",children:["Add group",c.jsxs("select",{value:"","aria-label":"Add group",onChange:N=>{N.target.value&&(ha(N.target.value),le(0))},children:[c.jsx("option",{value:"",children:"Choose a column…"}),_n.filter(N=>!re.includes(N)).map(N=>c.jsx("option",{value:N,children:wt[N]},N))]})]}),c.jsx("p",{className:"edm-table-sizing-help",children:"Drag a column edge to resize it. Double-click an edge to fit the text."}),Sa.map(N=>c.jsxs("div",{className:"edm-group-summary",children:[c.jsx("strong",{children:N.label}),N.values.map(({value:Y,count:te})=>c.jsxs("span",{children:[Y,c.jsx("i",{children:te})]},Y))]},N.field)),c.jsx("div",{className:"edm-table-wrap",children:c.jsxs("table",{ref:Me,className:"edm-table",style:{width:U,minWidth:U},children:[c.jsx("colgroup",{children:xt.map(N=>c.jsx("col",{style:{width:fa(N)}},N))}),c.jsx("thead",{children:c.jsxs("tr",{children:[c.jsxs("th",{className:"edm-rownum",children:[c.jsx("div",{className:"edm-column-heading",children:c.jsx("span",{className:"edm-column-heading-label",children:"#"})}),vt("rowNumber","row number")]}),c.jsxs("th",{children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsx("span",{className:"edm-column-heading-label",children:"Object type"}),c.jsx(ay,{label:"Object type",options:Lt.type,selectedValues:Ae.type,onApply:N=>pa("type",N)})]}),vt("type","Object type")]}),Je.map(N=>c.jsxs("th",{draggable:!0,onDragStart:Y=>Y.dataTransfer.setData("text/engineering-field",N),children:[c.jsxs("div",{className:"edm-column-heading",children:[c.jsxs("button",{className:"edm-column-sort",title:Tr[N],onClick:()=>qn(N),"data-testid":`button-sort-${N}`,children:[wt[N],c.jsx("span",{children:ce.field===N?ce.direction===1?"↑":"↓":"↕"})]}),c.jsx(ay,{label:wt[N],options:Lt[N],selectedValues:Ae[N],onApply:Y=>pa(N,Y)})]}),vt(N,wt[N])]},N))]})}),c.jsxs("tbody",{children:[ia.map((N,Y)=>{const te=v===N.id,Te=_2(N,f),Pe=Te==="current"?"On this drawing":Te==="another"?"On another drawing":"Available / not placed";return c.jsxs("tr",{className:te?"selected":"","data-stable-id":N.id,"data-placement-status":Te,onClick:()=>E(N.id),"data-testid":`row-engineering-${N.id}`,children:[c.jsx("td",{className:"edm-rownum",children:ne*ve+Y+1}),c.jsx("td",{children:c.jsx("span",{className:`edm-type-badge ${N.type.toLowerCase().replace(/\s+/g,"-")}`,children:N.type})}),Je.map(Ne=>{const _e=fn(N,Ne);return Ne==="notes"?c.jsx("td",{className:"edm-notes-cell",children:te?c.jsx("textarea",{"aria-label":`Notes for ${N.itemTag}`,rows:2,maxLength:2e3,value:_e,onClick:Ue=>Ue.stopPropagation(),onChange:Ue=>ht(N.id,Ne,Ue.target.value),"data-testid":`input-cell-${N.id}-${Ne}`}):c.jsx("span",{title:_e,children:_e||"—"})},Ne):Ne==="itemTag"?c.jsxs("td",{className:"mono edm-item-tag-cell",children:[c.jsxs("span",{className:`edm-placement-indicator ${Te}`,"aria-label":`Placement: ${Pe}`,title:`Placement: ${Pe}`,children:[c.jsx("i",{"aria-hidden":"true",children:"●"}),c.jsx("span",{children:Pe})]}),te?c.jsx("input",{className:"edm-item-tag-editor","aria-label":`${wt[Ne]} for ${N.itemTag}`,value:_e,onClick:Ue=>Ue.stopPropagation(),onChange:Ue=>ht(N.id,Ne,Ue.target.value),"data-testid":`input-cell-${N.id}-${Ne}`}):c.jsx("span",{className:`edm-tag-value ${Te}`,"data-testid":`text-item-tag-${N.id}`,children:_e})]},Ne):c.jsx("td",{className:Ne==="stableId"?"mono":"",children:Ne==="stableId"?c.jsx("span",{className:"edm-stable-id-value",title:_e,"aria-label":`Stable ID ${_e}`,children:_e}):te&&(Ne==="reviewStatus"||Ne==="groupStatus")?c.jsx("select",{"aria-label":`${wt[Ne]} for ${N.itemTag}`,value:_e,onClick:Ue=>Ue.stopPropagation(),onChange:Ue=>ht(N.id,Ne,Ue.target.value),"data-testid":`input-cell-${N.id}-${Ne}`,children:(Ne==="reviewStatus"?["Needs review","Reviewed","Manual"]:["","Start","Continue","Branch","Merge","End-of-Group"]).map(Ue=>c.jsx("option",{value:Ue,children:Ue||"Not set"},Ue))}):te?c.jsx("input",{"aria-label":`${wt[Ne]} for ${N.itemTag}`,value:_e,onClick:Ue=>Ue.stopPropagation(),onChange:Ue=>ht(N.id,Ne,Ue.target.value),"data-testid":`input-cell-${N.id}-${Ne}`}):c.jsx("span",{title:_e,children:_e||"—"})},Ne)})]},N.id)}),!ia.length&&c.jsx("tr",{children:c.jsx("td",{colSpan:Je.length+2,children:c.jsx("div",{className:"edm-empty",children:"No records match these filters."})})})]})]})}),c.jsxs("footer",{className:"edm-pagination",children:[c.jsxs("span",{children:["Showing ",c.jsxs("strong",{children:[Ut.length?ne*ve+1:0,"–",Math.min((ne+1)*ve,Ut.length)]})," of ",c.jsx("strong",{children:Ut.length})]}),c.jsxs("label",{children:["Rows ",c.jsx("select",{value:ve,onChange:N=>{me(Number(N.target.value)),le(0)},"aria-label":"Rows per page","data-testid":"select-page-size",children:[8,12,24,36].map(N=>c.jsx("option",{value:N,children:N},N))})," per page"]}),c.jsxs("div",{className:"edm-page-controls",children:[c.jsx("button",{disabled:ne===0,onClick:()=>F(ne-1),"aria-label":"Previous page","data-testid":"button-page-previous",children:c.jsx(gy,{size:15})}),c.jsxs("span",{children:["Page ",ne+1," of ",Bt]}),c.jsx("button",{disabled:ne>=Bt-1,onClick:()=>F(ne+1),"aria-label":"Next page","data-testid":"button-page-next",children:c.jsx(Gu,{size:15})})]})]})]})]}),c.jsxs("aside",{className:"edm-properties panel",children:[c.jsxs("div",{className:"edm-panel-head",children:[c.jsx("span",{children:"Properties"}),c.jsx("span",{className:"edm-counter",children:Ce?"EDIT":""})]}),c.jsxs("details",{className:"edm-field-guide",children:[c.jsx("summary",{children:"What do these fields mean?"}),c.jsx("dl",{children:_n.map(N=>c.jsxs("div",{children:[c.jsx("dt",{children:wt[N]}),c.jsx("dd",{children:Tr[N]})]},N))})]}),Ce&&c.jsxs("label",{className:"edm-record-type",children:["Object type",c.jsx("select",{value:Ce.type,"aria-label":"Selected record type",disabled:!!s.error,onChange:N=>qt(m.map(Y=>Y.id===Ce.id?{...Y,type:N.target.value}:Y)),children:Xo.map(N=>c.jsx("option",{children:N},N))})]}),Ce?c.jsxs(c.Fragment,{children:[c.jsxs("div",{className:"edm-property-summary",children:[c.jsx("span",{className:"edm-property-icon",children:bT(Ce.type)}),c.jsxs("div",{children:[c.jsx("strong",{"data-testid":"text-selected-tag",children:Ce.itemTag}),c.jsxs("small",{children:[Ce.type," · ",f.revision]})]})]}),(Ce.sourcePdfId??f.sourcePdfId)&&c.jsxs(oa,{className:"btn subtle edm-source-locate",href:`/workspace/${a}?pdf=${encodeURIComponent(Ce.sourcePdfId??f.sourcePdfId??"")}&page=${encodeURIComponent(String(Ce.sourceLocations?.[0]?.pageNumber??Ce.sourcePage??"1"))}&record=${encodeURIComponent(Ce.id)}#pdf-workflow-title`,"data-testid":"link-selected-source-location",children:[c.jsx(us,{size:13})," Locate on source PDF",c.jsx("small",{children:Ce.sourceLocations?.length?`${Ce.sourceLocations.length} OCR location(s) · review required`:`Page ${Ce.sourcePage||"1"} · no exact position saved`})]}),c.jsxs("div",{className:"edm-stable-id-panel",children:[c.jsx("span",{children:"STABLE ID"}),c.jsx("code",{"data-testid":"text-stable-id",children:Ce.id}),c.jsx("small",{children:"Permanent record identity. It does not change with the tag or drawing."})]}),c.jsxs("div",{className:"edm-property-scroll",children:[c.jsx("div",{className:"edm-property-group",children:"IDENTIFICATION"}),["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef"].map(N=>c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Tr[N],children:wt[N]}),c.jsx("input",{value:Ce[N],onChange:Y=>ht(Ce.id,N,Y.target.value),"data-testid":`property-${N}`})]},N)),c.jsx("div",{className:"edm-property-group",children:"CAD PLACEMENT"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Tr.placementDrawingRef,children:wt.placementDrawingRef}),c.jsx("input",{list:"edm-placement-drawings",value:Ce.placementDrawingRef,onChange:N=>ht(Ce.id,"placementDrawingRef",N.target.value),"data-testid":"property-placementDrawingRef",placeholder:"Blank = available / not placed"}),c.jsx("small",{children:"Reference only. This browser is not connected to CAD geometry."})]}),c.jsx("datalist",{id:"edm-placement-drawings",children:o.map(N=>c.jsx("option",{value:N.name},N.id))}),c.jsx("div",{className:"edm-property-group",children:Ce.type==="Pipe Run"?"PIPE RUN & PROCESS":"PROCESS & CONNECTION"}),(Ce.type==="Pipe Run"?["nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description"]:["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","opcDrawing","connection","description"]).map(N=>{const Y=N;return c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Tr[Y],children:wt[Y]}),Y==="groupStatus"?c.jsx("select",{value:Ce.groupStatus,onChange:te=>ht(Ce.id,"groupStatus",te.target.value),"aria-label":"Pipe run group status",children:["","Start","Continue","Branch","Merge","End-of-Group"].map(te=>c.jsx("option",{value:te,children:te||"Not set"},te))}):c.jsx("input",{value:Ce[Y],onChange:te=>ht(Ce.id,Y,te.target.value),"data-testid":`property-${Y}`})]},Y)}),c.jsx("div",{className:"edm-property-group",children:"NOTES"}),c.jsxs("label",{className:"edm-property-field",children:[c.jsx("span",{title:Tr.notes,children:wt.notes}),c.jsx("textarea",{rows:5,maxLength:2e3,value:Ce.notes,onChange:N=>ht(Ce.id,"notes",N.target.value),"data-testid":"property-notes"})]})]}),c.jsxs("div",{className:"edm-save-state",role:"status","data-testid":"status-local-save",children:[c.jsx("span",{})," Edits save automatically in this browser"]})]}):c.jsx("div",{className:"edm-empty",children:"Select a graphic or table row to inspect properties."})]})]}),c.jsxs("footer",{className:"edm-footnote",children:[c.jsx("span",{children:"© 2026 gaurav.cbiindia · DEVICE-LOCAL DATA"}),c.jsxs("span",{children:[m.length," records · ",f.name," · ",a.toUpperCase(),"-isolated browser storage"]})]}),qe&&c.jsx("div",{className:"edm-storage-error",role:"alert","data-testid":"status-storage-error",children:qe})]})}function vT({assetId:a,candidateId:s,blockName:o,entityType:l,description:i,disabled:p,onDescriptionChange:g}){const[h,y]=q.useState(null),[f,m]=q.useState("");q.useEffect(()=>{let E=!0;return y(null),m(""),sb(a).then(S=>{E&&y(S)},S=>{E&&m(S instanceof Error?S.message:"Preview could not be read.")}),()=>{E=!1}},[a]);const v=l==="directionArrow"?[]:(h?.nearbyLabels??[]).filter(E=>!nf(E));return c.jsxs("section",{className:"cad-block-review-visual","aria-label":`Identify block ${o}`,"data-testid":`preview-block-${s}`,children:[c.jsxs("div",{className:"cad-block-review-image",children:[h?.previewSvg?c.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(h.previewSvg)}`,alt:`DXF geometry preview of block ${o}`,"data-testid":`img-block-${s}`}):c.jsxs("div",{className:"cad-block-preview-empty",role:"status",children:[c.jsx("strong",{children:f?"Preview could not load":h?"Overview DXF needed":"Loading local preview…"}),c.jsx("span",{children:f||(h?"Run PIDEXPORTOVERVIEW on the original SOURCE drawing. Add its *_OVERVIEW.dxf to the existing extraction ZIP and import again. Do not repeat the full block extraction.":"")})]}),c.jsx("small",{children:"Visual aid only—not a fidelity check. Fonts, hatches, masks and some CAD entities may be simplified or absent."})]}),c.jsxs("div",{className:"cad-block-review-labels",children:[c.jsx("strong",{children:l==="directionArrow"?"Direction Arrow":"Nearby legend text"}),c.jsx("small",{children:l==="directionArrow"?"Kept as its own P&ID entity; no equipment, instrument, or component name is inferred from nearby text.":"Suggested by position, not confirmed identity. Multiple parts may share one assembly description."}),v.length?c.jsx("div",{className:"cad-block-label-choices",children:v.map((E,S)=>c.jsx("button",{type:"button",className:"btn subtle",disabled:p,onClick:()=>g(E),"data-testid":`button-use-label-${s}-${S}`,children:E},`${E}-${S}`))}):c.jsx("p",{"data-testid":`status-no-label-${s}`,children:l==="directionArrow"?h?.sourcePlacements?.length?`Source insert context retained: ${h.sourcePlacements.map(E=>`${E.layer}, ${E.rotationDegrees}° (${E.count})`).join("; ")}.`:"Source rotation and layer context will be used if an overview DXF is available.":h?.labelMatchAmbiguous?"Ambiguous: this block is used beside different legend labels. No item name is suggested; verify it from the source.":h?.labelMatchSkipped?"Skipped: this insert is on layer 0 or a primary process-pipe layer, so its nearby label is not used as an item mapping.":h?.previewSvg?"No nearby label found. Verify the source drawing and enter the description below.":"Label suggestions appear after an overview DXF is imported."}),c.jsxs("label",{children:[c.jsx("span",{children:"Confirmed item description"}),c.jsx("input",{value:i,onChange:E=>g(E.target.value),placeholder:"Verify the source, then enter the real item name",disabled:p,"data-testid":`input-item-description-${s}`})]}),c.jsx("small",{children:"Saved only when you approve this record. A label does not automatically choose a category or CAD layer."})]})]})}const Ob={titleBlock:"Title block",layer:"Layer",textStyle:"Text style",linetype:"Linetype",dimensionStyle:"Dimension style",symbol:"Symbol",directionArrow:"Direction Arrow",legend:"Legend"};function jo(a){return Ob[a]??"CAD standard"}function ET(a,s){if(a.proposedScope==="project"&&a.projectId){const o=[...new Set(s.filter(l=>l.proposedScope==="project"&&l.projectId).map(l=>l.projectId))].sort();return`Project ${String(o.indexOf(a.projectId)+1).padStart(2,"0")}`}if(a.proposedScope==="company"){const o=[...new Set(s.filter(l=>l.proposedScope==="company").map(l=>l.sourceGroup))].sort();return`Legends Library source ${String(o.indexOf(a.sourceGroup)+1).padStart(2,"0")}`}return"Unclassified source"}function oy(a,s){return`Project ${String(s.indexOf(a)+1).padStart(2,"0")}`}function dn(a,s){return a.find(o=>o.label===s)?.value.trim()??""}function ly({value:a,disabled:s,onChange:o}){let l=null,i="";try{l=Is(a)}catch(D){i=D instanceof Error?D.message:"Enter a valid X,Y outline."}const p=l?.map(([D])=>D)??[],g=l?.map(([,D])=>D)??[],h=Math.min(...p),y=Math.max(...p),f=Math.min(...g),m=Math.max(...g),v=y-h||1,E=m-f||1,S=9,R=l?.map(([D,C])=>`${S+(D-h)/v*(160-S*2)},${90-S-(C-f)/E*(90-S*2)}`).join(" ");return c.jsxs("label",{className:"candidate-fallback-category valve-mask-editor",children:[c.jsxs("span",{children:["Valve-body Wipeout outline ",c.jsx("small",{children:"Reviewed block-local X,Y points; do not include pipe tails. Separate points with semicolons."})]}),c.jsx("textarea",{value:a,onChange:D=>o(D.target.value),placeholder:"x,y; x,y; x,y; …","aria-label":"Valve-body Wipeout outline points",rows:3,disabled:s}),c.jsx("small",{className:"candidate-layer-help",children:"Enter vertices in order using the valve block’s local drawing units. The small preview shows only the mask contour, not the source CAD block."}),l&&R?c.jsx("svg",{className:"valve-mask-preview",viewBox:"0 0 160 90",role:"img","aria-label":"Preview of the saved valve mask outline",children:c.jsx("polygon",{points:R})}):c.jsx("small",{className:"candidate-layer-help",children:i}),c.jsx("small",{className:"candidate-layer-help",children:"The runner masks only inside this polygon, leaves the underlying Pipe Run continuous, and draws the valve block on top."})]})}function cs(a,s){const o=dn(a.item.fields,"Source discipline");if(o!=="PFD"&&o!=="P&ID"&&o!=="Shared")return[];const g=[...(a.proposedScope==="company"?"company":"project")==="project"&&a.projectId?s.projects[a.projectId]?.items??[]:[],...s.companyItems].filter(h=>{if(h.category!=="layer"||h.sourceKind!=="extracted-dwg"||h.reviewStatus!=="reviewed")return!1;const y=dn(h.fields,"Source discipline");return o==="Shared"?y==="Shared":y==="Shared"||y===o}).map(h=>dn(h.fields,"CAD name")).filter(h=>h&&h.toUpperCase()!=="0");return[...new Set(g)].sort((h,y)=>h.localeCompare(y))}function wT({library:a,reviewCandidates:s,onApproveCompany:o,onApproveProject:l,onDismiss:i,onUpdateReviewedItem:p,onSetCompanyDefault:g,onSetProjectDefault:h,storageNotice:y="",readOnly:f=!1,reviewOnly:m=!1,backHref:v="/"}){const[E,S]=q.useState("company"),[R,D]=q.useState(""),[C,w]=q.useState("all"),[A,k]=q.useState(""),[M,x]=q.useState(0),[j,L]=q.useState(""),[P,K]=q.useState({}),[ue,ne]=q.useState({}),[le,ve]=q.useState({}),[me,ce]=q.useState({}),[V,re]=q.useState({}),[ye,Ae]=q.useState({}),_=20,Q=q.useMemo(()=>Object.keys(a.projects).sort(),[a.projects]),$=Q.includes(A)?A:Q[0]??"",G=s.filter(B=>B.status==="needs-review"),oe=s.filter(B=>B.status==="approved").length,he=s.filter(B=>B.status==="dismissed").length,be=B=>ye[B.id]??B.item.category,Ye=(B,de)=>{const Re=be(B),ge=B.item.sourceKind==="extracted-dwg"&&!!B.item.fields.find(xe=>xe.label==="Block asset ID")?.value.trim(),qe=(P[B.id]??B.item.fields.find(xe=>xe.label==="Fallback category")?.value??"").trim(),Fe=ue[B.id]??B.item.fields.find(xe=>xe.label==="Target CAD layer")?.value??"";if(Re==="symbol"&&ge&&!qe){L("Enter the real equipment category (such as pump or valve) before approving an extracted block.");return}if(Re==="symbol"&&ge&&!cs(B,a).includes(Fe)){L(cs(B,a).length?"Choose an approved non-zero CAD layer for this block before approving it.":"Approve a matching Equipment, Instrument, or other placement layer first. Layer 0 cannot be used for block placement.");return}const Ie=le[B.id]??B.item.fields.find(xe=>xe.label==="Wipeout mask boundary")?.value??"";if(Re==="symbol"&&qe.toLowerCase()==="valve")try{Is(Ie)}catch(xe){L(xe instanceof Error?xe.message:"Enter and review a valve-body Wipeout outline before approval.");return}L("");const De=ge?Re==="directionArrow"?[{label:"Entity type",value:"Direction Arrow"},{label:"Item description",value:V[B.id]||"Direction Arrow"}]:[{label:"Fallback category",value:qe},{label:"Target CAD layer",value:Fe},{label:"Item description",value:V[B.id]??dn(B.item.fields,"Item description")},...qe.toLowerCase()==="valve"?[{label:"Wipeout mask boundary",value:Ie}]:[]]:void 0;(de==="company"?o:l)(B.id,De,ge?Re:void 0)&&L(de==="company"?"Approved and added to the Legends Library.":"Approved and added to the project library.")},Me=B=>{i(B)&&L("Record dismissed from the review queue.")},it=(B,de)=>{const Re=me[B]??de.find(ge=>ge.label==="Wipeout mask boundary")?.value??"";try{Is(Re)}catch(ge){L(ge instanceof Error?ge.message:"Enter a valid valve-body mask outline.");return}p(B,[{label:"Wipeout mask boundary",value:Re}])&&L("Reviewed valve-body mask saved to the Legends Library.")},pt=q.useMemo(()=>{const B=R.trim().toLowerCase();return G.filter(de=>{const Re=be(de),ge=C==="all"||Re===C,qe=de.item.fields.some(Fe=>`${Fe.label} ${Fe.value}`.toLowerCase().includes(B));return ge&&(!B||qe||jo(Re).toLowerCase().includes(B))})},[G,R,C,ye]),jt=Math.max(1,Math.ceil(pt.length/_)),Je=Math.min(M,jt-1),xt=pt.slice(Je*_,(Je+1)*_);q.useEffect(()=>x(0),[R,C]);const U=(E==="company"?a.companyItems:a.projects[$]?.items??[]).filter(B=>{const de=R.trim().toLowerCase(),Re=C==="all"||B.category===C,ge=B.fields.some(qe=>`${qe.label} ${qe.value}`.toLowerCase().includes(de));return Re&&(!de||ge||jo(B.category).toLowerCase().includes(de))}),ie=(B,de)=>{if(!Ps.includes(de))return;const Re=de,ge=a.companyItems.some(qe=>qe.category==="titleBlock"&&qe.reviewStatus==="reviewed"&&(qe.sheetSize===Re||qe.fields.some(Fe=>Fe.label==="Sheet size"&&Fe.value===Re)));if(Re!==a.companyDefaults[B]&&!ge){L(`Approve a company title-block mapping for ${Re} before changing this default.`);return}L(""),g(B,Re)},fe=(B,de,Re)=>{if(!Ps.includes(Re))return;const ge=Re;if(![...a.projects[B]?.items??[],...a.companyItems].some(Ie=>Ie.category==="titleBlock"&&Ie.reviewStatus==="reviewed"&&(Ie.sheetSize===ge||Ie.fields.some(De=>De.label==="Sheet size"&&De.value===ge)))){L(`Approve a title-block mapping for ${ge} before saving this project default.`);return}L(""),h(B,de,ge)};return c.jsxs("main",{className:`standards-page${m?" standards-review-only":""}`,children:[c.jsxs("header",{className:"standards-topbar",children:[c.jsxs(oa,{href:m?v:"/",className:"standards-brand","data-testid":"link-standards-home",children:[c.jsx("span",{className:"standards-mark",children:"PM"}),c.jsxs("span",{children:["Mapping Studio",c.jsx("small",{children:m?"Legends Library / review":"Drafting standards / browser-local"})]})]}),c.jsxs("div",{className:"standards-top-meta",children:[c.jsxs("span",{className:"standards-local",children:[c.jsx("i",{}),f?"Read only · storage issue":"Browser-local"]}),c.jsx("span",{className:"standards-version",children:"LIBRARY · 1.0"})]})]}),c.jsxs("div",{className:"standards-content",children:[c.jsxs("section",{className:"standards-intro",children:[c.jsxs("div",{children:[m&&c.jsxs(oa,{className:"standards-return",href:v,children:["← Back to ",v.endsWith("/pfd")?"PFD":"P&ID"," workspace"]}),c.jsxs("div",{className:"standards-eyebrow",children:[m?"Legends Library":"Standards library"," ",c.jsx("span",{children:"/"})," human review"]}),c.jsx("h1",{children:m?"Review extracted standards":"Drafting standards"}),c.jsx("p",{children:m?"Check extracted blocks, layers, text styles, and line types. Nothing becomes part of the Legends Library until you approve it.":"Inspect source-derived CAD values before they become defaults. Project choices stay separate from the Legends Library."})]}),c.jsxs("div",{className:"standards-local-seal",children:[c.jsx(fs,{size:15}),c.jsxs("span",{children:["LOCAL ONLY",c.jsx("small",{children:"Nothing is uploaded or shared"})]})]})]}),c.jsxs("div",{className:"standards-trust-note",children:[c.jsx(Eu,{size:16}),c.jsxs("span",{children:[c.jsx("strong",{children:"Review before use."})," ",m?"Each extracted record remains pending until you approve it to the Legends Library or dismiss it. Source filenames are hidden.":"Source-derived values remain unapproved until you choose a scope. Company/client identifiers and source file names are hidden here."]}),c.jsxs("span",{className:"standards-schema",children:["SCHEMA ",a.schemaVersion]})]}),y&&c.jsx("div",{className:"standards-storage-banner",role:"alert",children:y}),c.jsxs("section",{className:"standards-metrics","aria-label":"Review summary",children:[c.jsxs("div",{className:"standards-metric metric-pending",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(ps,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Awaiting review"}),c.jsx("strong",{children:G.length.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"SOURCE MAPPINGS"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(Wg,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Approved from queue"}),c.jsx("strong",{children:oe.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"HUMAN CONFIRMED"})]}),c.jsxs("div",{className:"standards-metric",children:[c.jsx("span",{className:"metric-icon",children:c.jsx(py,{size:16})}),c.jsxs("span",{children:[c.jsx("small",{children:"Dismissed"}),c.jsx("strong",{children:he.toString().padStart(2,"0")})]}),c.jsx("span",{className:"metric-note",children:"NOT IN LIBRARY"})]})]}),c.jsxs("div",{className:"standards-layout",children:[c.jsxs("section",{className:"standards-review panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"INBOX / SOURCE-DERIVED"}),c.jsxs("h2",{children:[c.jsx(xE,{size:17}),"Review queue"]})]}),c.jsxs("span",{className:"standards-count",children:[G.length," pending"]})]}),c.jsxs("div",{className:"standards-controls",children:[c.jsxs("label",{className:"standards-search",children:[c.jsx(Fo,{size:14}),c.jsx("input",{value:R,onChange:B=>D(B.target.value),placeholder:"Search CAD field values…","aria-label":"Search standards","data-testid":"input-standards-search"})]}),c.jsxs("label",{className:"standards-filter",children:[c.jsx(wu,{size:13}),c.jsxs("select",{"aria-label":"Filter by category",value:C,onChange:B=>w(B.target.value),"data-testid":"select-standards-category",children:[c.jsx("option",{value:"all",children:"All categories"}),Object.entries(Ob).map(([B,de])=>c.jsx("option",{value:B,children:de},B))]}),c.jsx(ds,{size:13})]})]}),j&&c.jsx("div",{className:"standards-action-note",role:"status",children:j}),c.jsxs("div",{className:"standards-candidate-list",children:[xt.map(B=>{const de=be(B),Re=B.item.sourceKind==="extracted-dwg"&&!!dn(B.item.fields,"Block asset ID");return c.jsxs("article",{className:"candidate-card","data-testid":`candidate-${B.id}`,children:[c.jsxs("div",{className:"candidate-top",children:[c.jsxs("div",{className:"candidate-category",children:[c.jsx("span",{className:"candidate-glyph",children:c.jsx(Lo,{size:15})}),c.jsxs("span",{children:[c.jsx("strong",{children:jo(de)}),c.jsxs("small",{children:[ET(B,s)," · ",B.proposedScope==="project"?"Project proposal":B.proposedScope==="company"?"Pending review":"Scope not classified"]})]})]}),c.jsxs("span",{className:"candidate-status",children:[c.jsx("i",{}),"Needs review"]})]}),Re&&c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsx("span",{children:"Review entity as"}),c.jsxs("select",{value:de==="directionArrow"?"directionArrow":"symbol",onChange:ge=>{L(""),Ae(qe=>({...qe,[B.id]:ge.target.value}))},"aria-label":`Review entity type for ${B.item.name}`,disabled:f,"data-testid":`select-entity-role-${B.id}`,children:[c.jsx("option",{value:"symbol",children:"Equipment / instrument / component symbol"}),c.jsx("option",{value:"directionArrow",children:"Direction Arrow"})]}),de==="directionArrow"&&c.jsx("small",{children:"Kept separate from equipment matching. Source insert layers and rotations are retained for later pipe alignment."})]}),(de==="symbol"||de==="directionArrow")&&B.item.sourceKind==="extracted-dwg"&&dn(B.item.fields,"Block asset ID")&&c.jsx(vT,{assetId:dn(B.item.fields,"Block asset ID"),candidateId:B.id,blockName:dn(B.item.fields,"Block name"),entityType:de,description:V[B.id]??(de==="directionArrow"?"Direction Arrow":dn(B.item.fields,"Item description")),disabled:f,onDescriptionChange:ge=>re(qe=>({...qe,[B.id]:ge}))}),c.jsx("div",{className:"candidate-fields","aria-label":`${jo(de)} CAD standard values`,children:B.item.fields.filter(ge=>de!=="directionArrow"||!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(ge.label)).map((ge,qe)=>c.jsxs("div",{className:"candidate-field",children:[c.jsx("span",{children:ge.label}),c.jsx("strong",{children:ge.value||"—"})]},`${ge.label}-${qe}`))}),de==="symbol"&&Re&&c.jsxs(c.Fragment,{children:[c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Fallback category ",c.jsx("small",{children:"Required for safe same-category substitution"})]}),c.jsx("input",{value:P[B.id]??B.item.fields.find(ge=>ge.label==="Fallback category")?.value??"",onChange:ge=>{L(""),K(qe=>({...qe,[B.id]:ge.target.value}))},placeholder:"For example: pump, valve, or instrument","aria-label":`Fallback category for ${B.item.name}`})]}),(P[B.id]??B.item.fields.find(ge=>ge.label==="Fallback category")?.value??"").trim().toLowerCase()==="valve"&&c.jsx(ly,{value:le[B.id]??B.item.fields.find(ge=>ge.label==="Wipeout mask boundary")?.value??"",disabled:f,onChange:ge=>{L(""),ve(qe=>({...qe,[B.id]:ge}))}}),c.jsxs("label",{className:"candidate-fallback-category",children:[c.jsxs("span",{children:["Target CAD layer ",c.jsx("small",{children:"Actual approved layer; layer 0 is not allowed"})]}),c.jsxs("select",{value:ue[B.id]??B.item.fields.find(ge=>ge.label==="Target CAD layer")?.value??"",onChange:ge=>{L(""),ne(qe=>({...qe,[B.id]:ge.target.value}))},"aria-label":`Target CAD layer for ${B.item.name}`,disabled:f||cs(B,a).length===0,children:[c.jsx("option",{value:"",children:cs(B,a).length?"Select an approved CAD layer…":"Approve a compatible layer first"}),cs(B,a).map(ge=>c.jsx("option",{value:ge,children:ge},ge))]}),c.jsx("small",{className:"candidate-layer-help",children:cs(B,a).length?"The AutoCAD runner will put the inserted block reference on this layer.":"Review and approve the matching source layer first. No layer is guessed automatically."}),c.jsx("small",{className:"candidate-layer-help",children:"Stated Legends layers: equipment uses EQUIP or f_EQUIP; instruments use f_Inst. Extract and approve the matching layer before it appears here."})]})]}),c.jsxs("div",{className:"candidate-actions",children:[c.jsx("span",{className:"candidate-scope-note",children:B.proposedScope==="project"?"Approve into isolated project library":B.proposedScope==="company"?"Approve to the Legends Library":"Unclassified source · project-only approval"}),(()=>{const ge=de==="symbol"&&Re;return B.proposedScope==="company"?c.jsxs("button",{className:"btn primary",onClick:()=>Ye(B,"company"),disabled:f,title:ge&&cs(B,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-company-${B.id}`,children:[c.jsx(Ar,{size:14}),"Approve to Legends Library"]}):c.jsxs("button",{className:"btn primary",onClick:()=>Ye(B,"project"),disabled:f,title:ge&&cs(B,a).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-project-${B.id}`,children:[c.jsx(Ar,{size:14}),"Approve to project"]})})(),c.jsx("button",{className:"btn subtle",onClick:()=>Me(B.id),disabled:f,"data-testid":`button-dismiss-${B.id}`,children:"Dismiss"})]})]},B.id)}),!xt.length&&c.jsxs("div",{className:"standards-empty",children:[c.jsx("span",{className:"empty-seal",children:G.length?c.jsx(Fo,{size:20}):c.jsx(Wg,{size:20})}),c.jsx("strong",{children:G.length?"No source mappings match":"Review queue is clear"}),c.jsx("p",{children:G.length?"Try another field value or category.":"New source-derived standards will appear here for human review."}),R||C!=="all"?c.jsx("button",{className:"btn subtle",onClick:()=>{D(""),w("all")},children:"Clear filters"}):null]})]}),pt.length>_&&c.jsxs("div",{className:"candidate-pagination",children:[c.jsxs("span",{children:["Showing ",Je*_+1,"–",Math.min((Je+1)*_,pt.length)," of ",pt.length," matching mappings"]}),c.jsxs("div",{children:[c.jsx("button",{className:"btn subtle",onClick:()=>x(B=>Math.max(0,B-1)),disabled:Je===0,children:"Previous"}),c.jsxs("span",{children:["Page ",Je+1," of ",jt]}),c.jsx("button",{className:"btn subtle",onClick:()=>x(B=>Math.min(jt-1,B+1)),disabled:Je>=jt-1,children:"Next"})]})]}),c.jsxs("footer",{className:"standards-list-foot",children:[c.jsx("span",{children:"CAD field values only"}),c.jsx("span",{children:"Source labels anonymized"})]})]}),!m&&c.jsxs("aside",{className:"standards-side",children:[c.jsxs("section",{className:"defaults-panel panel",children:[c.jsx("div",{className:"standards-panel-head",children:c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"ACTIVE CONFIGURATION"}),c.jsxs("h2",{children:[c.jsx(wu,{size:16}),"Sheet-size defaults"]})]})}),c.jsxs("div",{className:"default-scope-tabs",role:"tablist","aria-label":"Defaults scope",children:[c.jsx("button",{role:"tab","aria-selected":E==="company",className:E==="company"?"selected":"",onClick:()=>S("company"),children:"Company"}),c.jsxs("button",{role:"tab","aria-selected":E==="projects",className:E==="projects"?"selected":"",onClick:()=>S("projects"),children:["Projects ",c.jsx("span",{children:Q.length})]})]}),E==="projects"&&c.jsx("div",{className:"project-picker",children:Q.length?c.jsxs("label",{children:[c.jsx("span",{children:"PROJECT LIBRARY"}),c.jsxs("div",{children:[c.jsx("select",{value:$,onChange:B=>k(B.target.value),"aria-label":"Select project library",children:Q.map(B=>c.jsx("option",{value:B,children:oy(B,Q)},B))}),c.jsx(ds,{size:14})]})]}):c.jsxs("div",{className:"project-none",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(Lo,{size:17})}),c.jsx("strong",{children:"No project overrides yet"}),c.jsx("small",{children:"Project-specific standards will appear here once available."})]})}),c.jsxs("div",{className:"default-table",children:[c.jsxs("div",{className:"default-table-head",children:[c.jsx("span",{children:"DRAWING PURPOSE"}),c.jsx("span",{children:"SIZE"})]}),Nu.map(B=>{const de=E==="projects"&&$?a.projects[$]?.defaults[B]:void 0,Re=de??a.companyDefaults[B];return c.jsxs("div",{className:"default-row",children:[c.jsxs("div",{children:[c.jsx("strong",{children:B}),E==="projects"&&c.jsx("small",{children:de?"Project override":"Inherited company default"})]}),E==="company"?c.jsxs("label",{className:"size-select",children:[c.jsx("select",{"aria-label":`${B} company sheet size`,value:a.companyDefaults[B],onChange:ge=>ie(B,ge.target.value),disabled:f,children:Ps.map(ge=>c.jsx("option",{value:ge,children:ge},ge))}),c.jsx(ds,{size:13})]}):$?c.jsxs("label",{className:`size-select ${de?"override":""}`,children:[c.jsx("select",{"aria-label":`${B} project sheet size`,value:Re,onChange:ge=>fe($,B,ge.target.value),disabled:f,children:Ps.map(ge=>c.jsx("option",{value:ge,children:ge},ge))}),c.jsx(ds,{size:13})]}):c.jsx("span",{className:"default-value",children:"—"})]},B)})]}),c.jsxs("div",{className:"defaults-note",children:[c.jsx(Eu,{size:14}),c.jsx("span",{children:"Project selections change only that project. Legends Library defaults remain unchanged."})]})]}),c.jsxs("section",{className:"library-panel panel",children:[c.jsxs("div",{className:"standards-panel-head",children:[c.jsxs("div",{children:[c.jsx("span",{className:"standards-kicker",children:"APPROVED STANDARDS"}),c.jsxs("h2",{children:[c.jsx(Lo,{size:16}),E==="company"?"Legends Library":"Project library"]})]}),c.jsx("span",{className:"standards-count",children:U.length})]}),c.jsxs("div",{className:"approved-list",children:[U.map(B=>c.jsxs("article",{className:"approved-item",children:[c.jsxs("div",{className:"approved-item-head",children:[c.jsx("span",{className:"approved-glyph",children:c.jsx(Ar,{size:13})}),c.jsxs("div",{children:[c.jsx("strong",{children:jo(B.category)}),c.jsx("small",{children:E==="company"?"Legends Library standard":`${oy($,Q)} · project-only`})]})]}),c.jsx("div",{className:"approved-fields",children:B.fields.map((de,Re)=>c.jsxs("div",{children:[c.jsx("span",{children:de.label}),c.jsx("strong",{children:de.value||"—"})]},`${de.label}-${Re}`))}),B.category==="symbol"&&B.sourceKind==="extracted-dwg"&&dn(B.fields,"Fallback category").toLowerCase()==="valve"&&c.jsxs(c.Fragment,{children:[c.jsx(ly,{value:me[B.id]??B.fields.find(de=>de.label==="Wipeout mask boundary")?.value??"",disabled:f,onChange:de=>{L(""),ce(Re=>({...Re,[B.id]:de}))}}),c.jsx("div",{className:"approved-mask-actions",children:c.jsxs("button",{type:"button",className:"btn primary",disabled:f,onClick:()=>it(B.id,B.fields),"data-testid":`button-save-valve-mask-${B.id}`,children:[c.jsx(Ar,{size:13}),"Save reviewed outline"]})})]})]},B.id)),!U.length&&c.jsxs("div",{className:"approved-empty",children:[c.jsx("span",{className:"empty-seal",children:c.jsx(Lo,{size:18})}),c.jsx("strong",{children:E==="company"?"No approved Legends Library standards":"No standards in this project"}),c.jsx("small",{children:E==="company"?"Review and approve source mappings to build the Legends Library.":"Project-approved standards remain isolated from Legends Library defaults."})]})]}),c.jsxs("footer",{className:"library-foot",children:[c.jsx("span",{children:"Visible values are standards fields"}),c.jsx("span",{children:"Descriptions hidden"})]})]})]})]}),c.jsxs("footer",{className:"standards-page-foot",children:[c.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),c.jsx("span",{children:m?"Only approved mappings are offered to the CAD runner":"Legends Library and project standards are reviewed separately"})]})]})]})}function iy({backHref:a}){const[s]=q.useState(()=>{try{return{library:un(),canSave:!0,error:""}}catch(C){return{library:Ex(),canSave:!1,error:C instanceof Error?C.message:"The local standards library could not be loaded."}}}),[o,l]=q.useState(s.library),i=q.useRef(s.library),[p,g]=q.useState(s.canSave),[h,y]=q.useState(s.error),f=C=>{if(!p)return y("The local library could not be read safely. Its saved contents were left unchanged."),!1;let w;try{w=C(i.current)}catch(A){return y(A instanceof Error?A.message:"The standards change could not be applied."),!1}try{return Yo(w),i.current=w,l(w),y(""),!0}catch(A){const k=A instanceof Error?A.message:"The standards change could not be saved locally.";return k.startsWith("This browser could not save the CAD standards locally.")&&g(!1),y(k),!1}},m=(C,w,A)=>f(k=>ki(k,C,"company",w,A)),v=(C,w,A)=>f(k=>ki(k,C,"project",w,A)),E=(C,w)=>f(A=>kx(A,C,w)),S=C=>f(w=>Rx(w,C)),R=(C,w)=>f(A=>Sx(A,C,w)),D=(C,w,A)=>{const k=i.current.projects[C]?.projectName??`Project ${String(Object.keys(i.current.projects).sort().indexOf(C)+1).padStart(2,"0")}`;f(M=>jx(M,C,k,w,A))};return c.jsx(wT,{library:o,reviewCandidates:o.reviewCandidates,reviewOnly:!0,backHref:a,onApproveCompany:m,onApproveProject:v,onUpdateReviewedItem:E,onDismiss:S,onSetCompanyDefault:R,onSetProjectDefault:D,storageNotice:h,readOnly:!p})}const xT="/pid-mapping-studio-app/".replace(/\/$/,"");function ST(){const[a]=wy();return a==="/admin/library"||a.startsWith("/sign-in")||a.startsWith("/sign-up")?c.jsx(mw,{to:"/"}):a==="/portal"||a==="/library"||a==="/"?c.jsx(C1,{}):a==="/workspace/pfd"?c.jsx(ey,{discipline:"pfd"}):a==="/workspace/pid"?c.jsx(ey,{discipline:"pid"}):a==="/workspace/pfd/engineering-data"?c.jsx(ry,{discipline:"pfd"}):a==="/workspace/pid/engineering-data"?c.jsx(ry,{discipline:"pid"}):a==="/standards-review/pfd"?c.jsx(iy,{backHref:"/workspace/pfd"}):a==="/standards-review/pid"?c.jsx(iy,{backHref:"/workspace/pid"}):c.jsx(N1,{})}function TT(){return c.jsx(gw,{base:xT,children:c.jsx(D1,{children:c.jsx(ST,{})})})}Xu.createRoot(document.getElementById("root"),{onCaughtError:(a,s)=>{console.error(a,s.componentStack)}}).render(c.jsx(TT,{}));export{Pn as _,AT as a,ab as c,Ho as g,ef as v,CT as w};
