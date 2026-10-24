const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BOvmIbEa.js","assets/_commonjs-dynamic-modules-TDtrdbi3.js","assets/exceljs.min-BtngFf37.js"])))=>i.map(i=>d[i]);
function ki(n,s){for(var o=0;o<s.length;o++){const l=s[o];if(typeof l!="string"&&!Array.isArray(l)){for(const i in l)if(i!=="default"&&!(i in n)){const p=Object.getOwnPropertyDescriptor(l,i);p&&Object.defineProperty(n,i,p.get?p:{enumerable:!0,get:()=>l[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const p of i)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function o(i){const p={};return i.integrity&&(p.integrity=i.integrity),i.referrerPolicy&&(p.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?p.credentials="include":i.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(i){if(i.ep)return;i.ep=!0;const p=o(i);fetch(i.href,p)}})();var yD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xo(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function oy(n){if(Object.prototype.hasOwnProperty.call(n,"__esModule"))return n;var s=n.default;if(typeof s=="function"){var o=function l(){var i=!1;try{i=this instanceof l}catch{}return i?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};o.prototype=s.prototype}else o={};return Object.defineProperty(o,"__esModule",{value:!0}),Object.keys(n).forEach(function(l){var i=Object.getOwnPropertyDescriptor(n,l);Object.defineProperty(o,l,i.get?i:{enumerable:!0,get:function(){return n[l]}})}),o}var Vd={exports:{}},Ao={};var Mm;function P0(){if(Mm)return Ao;Mm=1;var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function o(l,i,p){var m=null;if(p!==void 0&&(m=""+p),i.key!==void 0&&(m=""+i.key),"key"in i){p={};for(var u in i)u!=="key"&&(p[u]=i[u])}else p=i;return i=p.ref,{$$typeof:n,type:l,key:m,ref:i!==void 0?i:null,props:p}}return Ao.Fragment=s,Ao.jsx=o,Ao.jsxs=o,Ao}var qm;function M0(){return qm||(qm=1,Vd.exports=P0()),Vd.exports}var d=M0();const q0=Xo(d),I0=ki({__proto__:null,default:q0},[d]);var Hd={exports:{}},To={},Gd={exports:{}},Xd={};var Im;function U0(){return Im||(Im=1,(function(n){function s(V,re){var ye=V.length;V.push(re);e:for(;0<ye;){var Ae=ye-1>>>1,_=V[Ae];if(0<i(_,re))V[Ae]=re,V[ye]=_,ye=Ae;else break e}}function o(V){return V.length===0?null:V[0]}function l(V){if(V.length===0)return null;var re=V[0],ye=V.pop();if(ye!==re){V[0]=ye;e:for(var Ae=0,_=V.length,Q=_>>>1;Ae<Q;){var U=2*(Ae+1)-1,G=V[U],oe=U+1,he=V[oe];if(0>i(G,ye))oe<_&&0>i(he,G)?(V[Ae]=he,V[oe]=ye,Ae=oe):(V[Ae]=G,V[U]=ye,Ae=U);else if(oe<_&&0>i(he,ye))V[Ae]=he,V[oe]=ye,Ae=oe;else break e}}return re}function i(V,re){var ye=V.sortIndex-re.sortIndex;return ye!==0?ye:V.id-re.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;n.unstable_now=function(){return p.now()}}else{var m=Date,u=m.now();n.unstable_now=function(){return m.now()-u}}var y=[],h=[],g=1,v=null,E=3,S=!1,j=!1,T=!1,D=!1,w=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function q(V){for(var re=o(h);re!==null;){if(re.callback===null)l(h);else if(re.startTime<=V)l(h),re.sortIndex=re.expirationTime,s(y,re);else break;re=o(h)}}function x(V){if(T=!1,q(V),!j)if(o(y)!==null)j=!0,O||(O=!0,le());else{var re=o(h);re!==null&&ce(x,re.startTime-V)}}var O=!1,R=-1,P=5,K=-1;function ue(){return D?!0:!(n.unstable_now()-K<P)}function ne(){if(D=!1,O){var V=n.unstable_now();K=V;var re=!0;try{e:{j=!1,T&&(T=!1,N(R),R=-1),S=!0;var ye=E;try{t:{for(q(V),v=o(y);v!==null&&!(v.expirationTime>V&&ue());){var Ae=v.callback;if(typeof Ae=="function"){v.callback=null,E=v.priorityLevel;var _=Ae(v.expirationTime<=V);if(V=n.unstable_now(),typeof _=="function"){v.callback=_,q(V),re=!0;break t}v===o(y)&&l(y),q(V)}else l(y);v=o(y)}if(v!==null)re=!0;else{var Q=o(h);Q!==null&&ce(x,Q.startTime-V),re=!1}}break e}finally{v=null,E=ye,S=!1}re=void 0}}finally{re?le():O=!1}}}var le;if(typeof k=="function")le=function(){k(ne)};else if(typeof MessageChannel<"u"){var we=new MessageChannel,ge=we.port2;we.port1.onmessage=ne,le=function(){ge.postMessage(null)}}else le=function(){w(ne,0)};function ce(V,re){R=w(function(){V(n.unstable_now())},re)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_next=function(V){switch(E){case 1:case 2:case 3:var re=3;break;default:re=E}var ye=E;E=re;try{return V()}finally{E=ye}},n.unstable_requestPaint=function(){D=!0},n.unstable_runWithPriority=function(V,re){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ye=E;E=V;try{return re()}finally{E=ye}},n.unstable_scheduleCallback=function(V,re,ye){var Ae=n.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?Ae+ye:Ae):ye=Ae,V){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=ye+_,V={id:g++,callback:re,priorityLevel:V,startTime:ye,expirationTime:_,sortIndex:-1},ye>Ae?(V.sortIndex=ye,s(h,V),o(y)===null&&V===o(h)&&(T?(N(R),R=-1):T=!0,ce(x,ye-Ae))):(V.sortIndex=_,s(y,V),j||S||(j=!0,O||(O=!0,le()))),V},n.unstable_shouldYield=ue,n.unstable_wrapCallback=function(V){var re=E;return function(){var ye=E;E=re;try{return V.apply(this,arguments)}finally{E=ye}}}})(Xd)),Xd}var Um;function $0(){return Um||(Um=1,Gd.exports=U0()),Gd.exports}var Kd={exports:{}},$e={};var $m;function B0(){if($m)return $e;$m=1;var n=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),m=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function E(_){return _===null||typeof _!="object"?null:(_=v&&_[v]||_["@@iterator"],typeof _=="function"?_:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,T={};function D(_,Q,U){this.props=_,this.context=Q,this.refs=T,this.updater=U||S}D.prototype.isReactComponent={},D.prototype.setState=function(_,Q){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,Q,"setState")},D.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function w(){}w.prototype=D.prototype;function N(_,Q,U){this.props=_,this.context=Q,this.refs=T,this.updater=U||S}var k=N.prototype=new w;k.constructor=N,j(k,D.prototype),k.isPureReactComponent=!0;var q=Array.isArray,x={H:null,A:null,T:null,S:null,V:null},O=Object.prototype.hasOwnProperty;function R(_,Q,U,G,oe,he){return U=he.ref,{$$typeof:n,type:_,key:Q,ref:U!==void 0?U:null,props:he}}function P(_,Q){return R(_.type,Q,void 0,void 0,void 0,_.props)}function K(_){return typeof _=="object"&&_!==null&&_.$$typeof===n}function ue(_){var Q={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(U){return Q[U]})}var ne=/\/+/g;function le(_,Q){return typeof _=="object"&&_!==null&&_.key!=null?ue(""+_.key):Q.toString(36)}function we(){}function ge(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(we,we):(_.status="pending",_.then(function(Q){_.status==="pending"&&(_.status="fulfilled",_.value=Q)},function(Q){_.status==="pending"&&(_.status="rejected",_.reason=Q)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function ce(_,Q,U,G,oe){var he=typeof _;(he==="undefined"||he==="boolean")&&(_=null);var be=!1;if(_===null)be=!0;else switch(he){case"bigint":case"string":case"number":be=!0;break;case"object":switch(_.$$typeof){case n:case s:be=!0;break;case g:return be=_._init,ce(be(_._payload),Q,U,G,oe)}}if(be)return oe=oe(_),be=G===""?"."+le(_,0):G,q(oe)?(U="",be!=null&&(U=be.replace(ne,"$&/")+"/"),ce(oe,Q,U,"",function(lt){return lt})):oe!=null&&(K(oe)&&(oe=P(oe,U+(oe.key==null||_&&_.key===oe.key?"":(""+oe.key).replace(ne,"$&/")+"/")+be)),Q.push(oe)),1;be=0;var ze=G===""?".":G+":";if(q(_))for(var Ie=0;Ie<_.length;Ie++)G=_[Ie],he=ze+le(G,Ie),be+=ce(G,Q,U,he,oe);else if(Ie=E(_),typeof Ie=="function")for(_=Ie.call(_),Ie=0;!(G=_.next()).done;)G=G.value,he=ze+le(G,Ie++),be+=ce(G,Q,U,he,oe);else if(he==="object"){if(typeof _.then=="function")return ce(ge(_),Q,U,G,oe);throw Q=String(_),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return be}function V(_,Q,U){if(_==null)return _;var G=[],oe=0;return ce(_,G,"","",function(he){return Q.call(U,he,oe++)}),G}function re(_){if(_._status===-1){var Q=_._result;Q=Q(),Q.then(function(U){(_._status===0||_._status===-1)&&(_._status=1,_._result=U)},function(U){(_._status===0||_._status===-1)&&(_._status=2,_._result=U)}),_._status===-1&&(_._status=0,_._result=Q)}if(_._status===1)return _._result.default;throw _._result}var ye=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function Ae(){}return $e.Children={map:V,forEach:function(_,Q,U){V(_,function(){Q.apply(this,arguments)},U)},count:function(_){var Q=0;return V(_,function(){Q++}),Q},toArray:function(_){return V(_,function(Q){return Q})||[]},only:function(_){if(!K(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},$e.Component=D,$e.Fragment=o,$e.Profiler=i,$e.PureComponent=N,$e.StrictMode=l,$e.Suspense=y,$e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=x,$e.__COMPILER_RUNTIME={__proto__:null,c:function(_){return x.H.useMemoCache(_)}},$e.cache=function(_){return function(){return _.apply(null,arguments)}},$e.cloneElement=function(_,Q,U){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var G=j({},_.props),oe=_.key,he=void 0;if(Q!=null)for(be in Q.ref!==void 0&&(he=void 0),Q.key!==void 0&&(oe=""+Q.key),Q)!O.call(Q,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&Q.ref===void 0||(G[be]=Q[be]);var be=arguments.length-2;if(be===1)G.children=U;else if(1<be){for(var ze=Array(be),Ie=0;Ie<be;Ie++)ze[Ie]=arguments[Ie+2];G.children=ze}return R(_.type,oe,void 0,void 0,he,G)},$e.createContext=function(_){return _={$$typeof:m,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:p,_context:_},_},$e.createElement=function(_,Q,U){var G,oe={},he=null;if(Q!=null)for(G in Q.key!==void 0&&(he=""+Q.key),Q)O.call(Q,G)&&G!=="key"&&G!=="__self"&&G!=="__source"&&(oe[G]=Q[G]);var be=arguments.length-2;if(be===1)oe.children=U;else if(1<be){for(var ze=Array(be),Ie=0;Ie<be;Ie++)ze[Ie]=arguments[Ie+2];oe.children=ze}if(_&&_.defaultProps)for(G in be=_.defaultProps,be)oe[G]===void 0&&(oe[G]=be[G]);return R(_,he,void 0,void 0,null,oe)},$e.createRef=function(){return{current:null}},$e.forwardRef=function(_){return{$$typeof:u,render:_}},$e.isValidElement=K,$e.lazy=function(_){return{$$typeof:g,_payload:{_status:-1,_result:_},_init:re}},$e.memo=function(_,Q){return{$$typeof:h,type:_,compare:Q===void 0?null:Q}},$e.startTransition=function(_){var Q=x.T,U={};x.T=U;try{var G=_(),oe=x.S;oe!==null&&oe(U,G),typeof G=="object"&&G!==null&&typeof G.then=="function"&&G.then(Ae,ye)}catch(he){ye(he)}finally{x.T=Q}},$e.unstable_useCacheRefresh=function(){return x.H.useCacheRefresh()},$e.use=function(_){return x.H.use(_)},$e.useActionState=function(_,Q,U){return x.H.useActionState(_,Q,U)},$e.useCallback=function(_,Q){return x.H.useCallback(_,Q)},$e.useContext=function(_){return x.H.useContext(_)},$e.useDebugValue=function(){},$e.useDeferredValue=function(_,Q){return x.H.useDeferredValue(_,Q)},$e.useEffect=function(_,Q,U){var G=x.H;if(typeof U=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return G.useEffect(_,Q)},$e.useId=function(){return x.H.useId()},$e.useImperativeHandle=function(_,Q,U){return x.H.useImperativeHandle(_,Q,U)},$e.useInsertionEffect=function(_,Q){return x.H.useInsertionEffect(_,Q)},$e.useLayoutEffect=function(_,Q){return x.H.useLayoutEffect(_,Q)},$e.useMemo=function(_,Q){return x.H.useMemo(_,Q)},$e.useOptimistic=function(_,Q){return x.H.useOptimistic(_,Q)},$e.useReducer=function(_,Q,U){return x.H.useReducer(_,Q,U)},$e.useRef=function(_){return x.H.useRef(_)},$e.useState=function(_){return x.H.useState(_)},$e.useSyncExternalStore=function(_,Q,U){return x.H.useSyncExternalStore(_,Q,U)},$e.useTransition=function(){return x.H.useTransition()},$e.version="19.1.4",$e}var Bm;function ji(){return Bm||(Bm=1,Kd.exports=B0()),Kd.exports}var Wd={exports:{}},da={};var Fm;function F0(){if(Fm)return da;Fm=1;var n=ji();function s(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)h+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var l={d:{f:o,r:function(){throw Error(s(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},i=Symbol.for("react.portal");function p(y,h,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:i,key:v==null?null:""+v,children:y,containerInfo:h,implementation:g}}var m=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return da.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,da.createPortal=function(y,h){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return p(y,h,null,g)},da.flushSync=function(y){var h=m.T,g=l.p;try{if(m.T=null,l.p=2,y)return y()}finally{m.T=h,l.p=g,l.d.f()}},da.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,l.d.C(y,h))},da.prefetchDNS=function(y){typeof y=="string"&&l.d.D(y)},da.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var g=h.as,v=u(g,h.crossOrigin),E=typeof h.integrity=="string"?h.integrity:void 0,S=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;g==="style"?l.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:E,fetchPriority:S}):g==="script"&&l.d.X(y,{crossOrigin:v,integrity:E,fetchPriority:S,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},da.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var g=u(h.as,h.crossOrigin);l.d.M(y,{crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&l.d.M(y)},da.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var g=h.as,v=u(g,h.crossOrigin);l.d.L(y,g,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},da.preloadModule=function(y,h){if(typeof y=="string")if(h){var g=u(h.as,h.crossOrigin);l.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:g,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else l.d.m(y)},da.requestFormReset=function(y){l.d.r(y)},da.unstable_batchedUpdates=function(y,h){return y(h)},da.useFormState=function(y,h,g){return m.H.useFormState(y,h,g)},da.useFormStatus=function(){return m.H.useHostTransitionStatus()},da.version="19.1.4",da}var zm;function ly(){if(zm)return Wd.exports;zm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),Wd.exports=F0(),Wd.exports}var Ym;function z0(){if(Ym)return To;Ym=1;var n=$0(),s=ji(),o=ly();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function m(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function u(e){if(p(e)!==e)throw Error(l(188))}function y(e){var t=e.alternate;if(!t){if(t=p(e),t===null)throw Error(l(188));return t!==e?null:e}for(var a=e,r=t;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return u(c),e;if(f===r)return u(c),t;f=f.sibling}throw Error(l(188))}if(a.return!==r.return)a=c,r=f;else{for(var b=!1,A=c.child;A;){if(A===a){b=!0,a=c,r=f;break}if(A===r){b=!0,r=c,a=f;break}A=A.sibling}if(!b){for(A=f.child;A;){if(A===a){b=!0,a=f,r=c;break}if(A===r){b=!0,r=f,a=c;break}A=A.sibling}if(!b)throw Error(l(189))}}if(a.alternate!==r)throw Error(l(190))}if(a.tag!==3)throw Error(l(188));return a.stateNode.current===a?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),k=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),K=Symbol.for("react.activity"),ue=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function le(e){return e===null||typeof e!="object"?null:(e=ne&&e[ne]||e["@@iterator"],typeof e=="function"?e:null)}var we=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===we?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case D:return"Profiler";case T:return"StrictMode";case x:return"Suspense";case O:return"SuspenseList";case K:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case k:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case q:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return t=e.displayName||null,t!==null?t:ge(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return ge(e(t))}catch{}}return null}var ce=Array.isArray,V=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},Ae=[],_=-1;function Q(e){return{current:e}}function U(e){0>_||(e.current=Ae[_],Ae[_]=null,_--)}function G(e,t){_++,Ae[_]=e.current,e.current=t}var oe=Q(null),he=Q(null),be=Q(null),ze=Q(null);function Ie(e,t){switch(G(be,t),G(he,e),G(oe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?dm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=dm(t),e=um(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(oe),G(oe,e)}function lt(){U(oe),U(he),U(be)}function ft(e){e.memoizedState!==null&&G(ze,e);var t=oe.current,a=um(t,e.type);t!==a&&(G(he,e),G(oe,a))}function jt(e){he.current===e&&(U(oe),U(he)),ze.current===e&&(U(ze),wo._currentValue=ye)}var Je=Object.prototype.hasOwnProperty,vt=n.unstable_scheduleCallback,ua=n.unstable_cancelCallback,$=n.unstable_shouldYield,ie=n.unstable_requestPaint,fe=n.unstable_now,B=n.unstable_getCurrentPriorityLevel,de=n.unstable_ImmediatePriority,je=n.unstable_UserBlockingPriority,me=n.unstable_NormalPriority,Me=n.unstable_LowPriority,Be=n.unstable_IdlePriority,qe=n.log,Te=n.unstable_setDisableYieldValue,Qt=null,xe=null;function Ke(e){if(typeof qe=="function"&&Te(e),xe&&typeof xe.setStrictMode=="function")try{xe.setStrictMode(Qt,e)}catch{}}var nt=Math.clz32?Math.clz32:Rt,gt=Math.log,Ce=Math.LN2;function Rt(e){return e>>>=0,e===0?32:31-(gt(e)/Ce|0)|0}var Gt=256,$t=4194304;function Bt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,t,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?c=Bt(r):(b&=A,b!==0?c=Bt(b):a||(a=A&~e,a!==0&&(c=Bt(a))))):(A=r&~f,A!==0?c=Bt(A):b!==0?c=Bt(b):a||(a=r&~e,a!==0&&(c=Bt(a)))),c===0?0:t!==0&&t!==c&&(t&f)===0&&(f=c&-c,a=t&-t,f>=a||f===32&&(a&4194048)!==0)?t:c}function Sa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function la(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Da(){var e=Gt;return Gt<<=1,(Gt&4194048)===0&&(Gt=256),e}function _t(){var e=$t;return $t<<=1,($t&62914560)===0&&($t=4194304),e}function pt(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ia(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ia(e,t,a,r,c,f){var b=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,L=e.expirationTimes,X=e.hiddenUpdates;for(a=b&~a;0<a;){var ee=31-nt(a),se=1<<ee;A[ee]=0,L[ee]=-1;var W=X[ee];if(W!==null)for(X[ee]=null,ee=0;ee<W.length;ee++){var Z=W[ee];Z!==null&&(Z.lane&=-536870913)}a&=~se}r!==0&&Wa(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(b&~t))}function Wa(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-nt(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|a&4194090}function At(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var r=31-nt(a),c=1<<r;c&t|e[r]&t&&(e[r]|=t),a&=~c}}function qn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function pa(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:jm(e.type))}function Jt(e,t){var a=re.p;try{return re.p=e,t()}finally{re.p=a}}var F=Math.random().toString(36).slice(2),pe="__reactFiber$"+F,Ee="__reactProps$"+F,C="__reactContainer$"+F,Y="__reactEvents$"+F,te="__reactListeners$"+F,De="__reactHandles$"+F,Pe="__reactResources$"+F,Ne="__reactMarker$"+F;function _e(e){delete e[pe],delete e[Ee],delete e[Y],delete e[te],delete e[De]}function Ue(e){var t=e[pe];if(t)return t;for(var a=e.parentNode;a;){if(t=a[C]||a[pe]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=mm(e);e!==null;){if(a=e[pe])return a;e=mm(e)}return t}e=a,a=e.parentNode}return null}function wt(e){if(e=e[pe]||e[C]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function ea(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Aa(e){var t=e[Pe];return t||(t=e[Pe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pt(e){e[Ne]=!0}var Rr=new Set,In={};function bn(e,t){ve(e,t),ve(e+"Capture",t)}function ve(e,t){for(In[e]=t,e=0;e<t.length;e++)Rr.add(t[e])}var Ye=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Et={},Mt={};function xt(e){return Je.call(Mt,e)?!0:Je.call(Et,e)?!1:Ye.test(e)?Mt[e]=!0:(Et[e]=!0,!1)}function ha(e,t,a){if(xt(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var r=t.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function sn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Tt(e,t,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+r)}}var Ta,Ua;function Za(e){if(Ta===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Ta=t&&t[1]||"",Ua=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ta+e+Ua}var $i=!1;function Bi(e,t){if(!e||$i)return"";$i=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var se=function(){throw Error()};if(Object.defineProperty(se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(se,[])}catch(Z){var W=Z}Reflect.construct(e,[],se)}else{try{se.call()}catch(Z){W=Z}e.call(se.prototype)}}else{try{throw Error()}catch(Z){W=Z}(se=e())&&typeof se.catch=="function"&&se.catch(function(){})}}catch(Z){if(Z&&W&&typeof Z.stack=="string")return[Z.stack,W.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),b=f[0],A=f[1];if(b&&A){var L=b.split(`
`),X=A.split(`
`);for(c=r=0;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;for(;c<X.length&&!X[c].includes("DetermineComponentFrameRoot");)c++;if(r===L.length||c===X.length)for(r=L.length-1,c=X.length-1;1<=r&&0<=c&&L[r]!==X[c];)c--;for(;1<=r&&0<=c;r--,c--)if(L[r]!==X[c]){if(r!==1||c!==1)do if(r--,c--,0>c||L[r]!==X[c]){var ee=`
`+L[r].replace(" at new "," at ");return e.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",e.displayName)),ee}while(1<=r&&0<=c);break}}}finally{$i=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Za(a):""}function kb(e){switch(e.tag){case 26:case 27:case 5:return Za(e.type);case 16:return Za("Lazy");case 13:return Za("Suspense");case 19:return Za("SuspenseList");case 0:case 15:return Bi(e.type,!1);case 11:return Bi(e.type.render,!1);case 1:return Bi(e.type,!0);case 31:return Za("Activity");default:return""}}function nf(e){try{var t="";do t+=kb(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function $a(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jb(e){var t=sf(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(b){r=""+b,f.call(this,b)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function al(e){e._valueTracker||(e._valueTracker=jb(e))}function rf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),r="";return e&&(r=sf(e)?e.checked?"true":"false":e.value),e=r,e!==a?(t.setValue(e),!0):!1}function nl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rb=/[\n"\\]/g;function Ba(e){return e.replace(Rb,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fi(e,t,a,r,c,f,b,A){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),t!=null?b==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+$a(t)):e.value!==""+$a(t)&&(e.value=""+$a(t)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),t!=null?zi(e,b,$a(t)):a!=null?zi(e,b,$a(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+$a(A):e.removeAttribute("name")}function of(e,t,a,r,c,f,b,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||t!=null))return;a=a!=null?""+$a(a):"",t=t!=null?""+$a(t):a,A||t===e.value||(e.value=t),e.defaultValue=t}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b)}function zi(e,t,a){t==="number"&&nl(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Bs(e,t,a,r){if(e=e.options,t){t={};for(var c=0;c<a.length;c++)t["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=t.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+$a(a),t=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function lf(e,t,a){if(t!=null&&(t=""+$a(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+$a(a):""}function cf(e,t,a,r){if(t==null){if(r!=null){if(a!=null)throw Error(l(92));if(ce(r)){if(1<r.length)throw Error(l(93));r=r[0]}a=r}a==null&&(a=""),t=a}a=$a(t),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r)}function Fs(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Lb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function df(e,t,a){var r=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":r?e.setProperty(t,a):typeof a!="number"||a===0||Lb.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function uf(e,t,a){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var c in t)r=t[c],t.hasOwnProperty(c)&&a[c]!==r&&df(e,c,r)}else for(var f in t)t.hasOwnProperty(f)&&df(e,f,t[f])}function Yi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ob=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_b=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function sl(e){return _b.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Vi=null;function Hi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zs=null,Ys=null;function ff(e){var t=wt(e);if(t&&(e=t.stateNode)){var a=e[Ee]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ba(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var r=a[t];if(r!==e&&r.form===e.form){var c=r[Ee]||null;if(!c)throw Error(l(90));Fi(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<a.length;t++)r=a[t],r.form===e.form&&rf(r)}break e;case"textarea":lf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Bs(e,!!a.multiple,t,!1)}}}var Gi=!1;function pf(e,t,a){if(Gi)return e(t,a);Gi=!0;try{var r=e(t);return r}finally{if(Gi=!1,(zs!==null||Ys!==null)&&(zl(),zs&&(t=zs,e=Ys,Ys=zs=null,ff(t),e)))for(t=0;t<e.length;t++)ff(e[t])}}function Lr(e,t){var a=e.stateNode;if(a===null)return null;var r=a[Ee]||null;if(r===null)return null;a=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(l(231,t,typeof a));return a}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xi=!1;if(vn)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Xi=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Xi=!1}var Un=null,Ki=null,rl=null;function hf(){if(rl)return rl;var e,t=Ki,a=t.length,r,c="value"in Un?Un.value:Un.textContent,f=c.length;for(e=0;e<a&&t[e]===c[e];e++);var b=a-e;for(r=1;r<=b&&t[a-r]===c[f-r];r++);return rl=c.slice(e,1<r?1-r:void 0)}function ol(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ll(){return!0}function mf(){return!1}function va(e){function t(a,r,c,f,b){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=b,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ll:mf,this.isPropagationStopped=mf,this}return g(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ll)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ll)},persist:function(){},isPersistent:ll}),t}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=va(gs),_r=g({},gs,{view:0,detail:0}),Pb=va(_r),Wi,Zi,Pr,cl=g({},_r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ji,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pr&&(Pr&&e.type==="mousemove"?(Wi=e.screenX-Pr.screenX,Zi=e.screenY-Pr.screenY):Zi=Wi=0,Pr=e),Wi)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),gf=va(cl),Mb=g({},cl,{dataTransfer:0}),qb=va(Mb),Ib=g({},_r,{relatedTarget:0}),Qi=va(Ib),Ub=g({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),$b=va(Ub),Bb=g({},gs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fb=va(Bb),zb=g({},gs,{data:0}),yf=va(zb),Yb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hb[e])?!!t[e]:!1}function Ji(){return Gb}var Xb=g({},_r,{key:function(e){if(e.key){var t=Yb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ol(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ji,charCode:function(e){return e.type==="keypress"?ol(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ol(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kb=va(Xb),Wb=g({},cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bf=va(Wb),Zb=g({},_r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ji}),Qb=va(Zb),Jb=g({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ev=va(Jb),tv=g({},cl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),av=va(tv),nv=g({},gs,{newState:0,oldState:0}),sv=va(nv),rv=[9,13,27,32],ec=vn&&"CompositionEvent"in window,Mr=null;vn&&"documentMode"in document&&(Mr=document.documentMode);var ov=vn&&"TextEvent"in window&&!Mr,vf=vn&&(!ec||Mr&&8<Mr&&11>=Mr),wf=" ",Ef=!1;function xf(e,t){switch(e){case"keyup":return rv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vs=!1;function lv(e,t){switch(e){case"compositionend":return Sf(t);case"keypress":return t.which!==32?null:(Ef=!0,wf);case"textInput":return e=t.data,e===wf&&Ef?null:e;default:return null}}function iv(e,t){if(Vs)return e==="compositionend"||!ec&&xf(e,t)?(e=hf(),rl=Ki=Un=null,Vs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vf&&t.locale!=="ko"?null:t.data;default:return null}}var cv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Df(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cv[e.type]:t==="textarea"}function Af(e,t,a,r){zs?Ys?Ys.push(r):Ys=[r]:zs=r,t=Kl(t,"onChange"),0<t.length&&(a=new il("onChange","change",null,a,r),e.push({event:a,listeners:t}))}var qr=null,Ir=null;function dv(e){rm(e,0)}function dl(e){var t=ea(e);if(rf(t))return e}function Tf(e,t){if(e==="change")return t}var Cf=!1;if(vn){var tc;if(vn){var ac="oninput"in document;if(!ac){var Nf=document.createElement("div");Nf.setAttribute("oninput","return;"),ac=typeof Nf.oninput=="function"}tc=ac}else tc=!1;Cf=tc&&(!document.documentMode||9<document.documentMode)}function kf(){qr&&(qr.detachEvent("onpropertychange",jf),Ir=qr=null)}function jf(e){if(e.propertyName==="value"&&dl(Ir)){var t=[];Af(t,Ir,e,Hi(e)),pf(dv,t)}}function uv(e,t,a){e==="focusin"?(kf(),qr=t,Ir=a,qr.attachEvent("onpropertychange",jf)):e==="focusout"&&kf()}function fv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Ir)}function pv(e,t){if(e==="click")return dl(t)}function hv(e,t){if(e==="input"||e==="change")return dl(t)}function mv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ca=typeof Object.is=="function"?Object.is:mv;function Ur(e,t){if(Ca(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),r=Object.keys(t);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Je.call(t,c)||!Ca(e[c],t[c]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lf(e,t){var a=Rf(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=t&&r>=t)return{node:a,offset:t-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Rf(a)}}function Of(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Of(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _f(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=nl(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=nl(e.document)}return t}function nc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var gv=vn&&"documentMode"in document&&11>=document.documentMode,Hs=null,sc=null,$r=null,rc=!1;function Pf(e,t,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;rc||Hs==null||Hs!==nl(r)||(r=Hs,"selectionStart"in r&&nc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),$r&&Ur($r,r)||($r=r,r=Kl(sc,"onSelect"),0<r.length&&(t=new il("onSelect","select",null,t,a),e.push({event:t,listeners:r}),t.target=Hs)))}function ys(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Gs={animationend:ys("Animation","AnimationEnd"),animationiteration:ys("Animation","AnimationIteration"),animationstart:ys("Animation","AnimationStart"),transitionrun:ys("Transition","TransitionRun"),transitionstart:ys("Transition","TransitionStart"),transitioncancel:ys("Transition","TransitionCancel"),transitionend:ys("Transition","TransitionEnd")},oc={},Mf={};vn&&(Mf=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function bs(e){if(oc[e])return oc[e];if(!Gs[e])return e;var t=Gs[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Mf)return oc[e]=t[a];return e}var qf=bs("animationend"),If=bs("animationiteration"),Uf=bs("animationstart"),yv=bs("transitionrun"),bv=bs("transitionstart"),vv=bs("transitioncancel"),$f=bs("transitionend"),Bf=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lc.push("scrollEnd");function Qa(e,t){Bf.set(e,t),bn(t,[e])}var Ff=new WeakMap;function Fa(e,t){if(typeof e=="object"&&e!==null){var a=Ff.get(e);return a!==void 0?a:(t={value:e,source:t,stack:nf(t)},Ff.set(e,t),t)}return{value:e,source:t,stack:nf(t)}}var za=[],Xs=0,ic=0;function ul(){for(var e=Xs,t=ic=Xs=0;t<e;){var a=za[t];za[t++]=null;var r=za[t];za[t++]=null;var c=za[t];za[t++]=null;var f=za[t];if(za[t++]=null,r!==null&&c!==null){var b=r.pending;b===null?c.next=c:(c.next=b.next,b.next=c),r.pending=c}f!==0&&zf(a,c,f)}}function fl(e,t,a,r){za[Xs++]=e,za[Xs++]=t,za[Xs++]=a,za[Xs++]=r,ic|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function cc(e,t,a,r){return fl(e,t,a,r),pl(e)}function Ks(e,t){return fl(e,null,null,t),pl(e)}function zf(e,t,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&t!==null&&(c=31-nt(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[t]:r.push(t),t.lane=a|536870912),f):null}function pl(e){if(50<fo)throw fo=0,md=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ws={};function wv(e,t,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Na(e,t,a,r){return new wv(e,t,a,r)}function dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function wn(e,t){var a=e.alternate;return a===null?(a=Na(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Yf(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hl(e,t,a,r,c,f){var b=0;if(r=e,typeof e=="function")dc(e)&&(b=1);else if(typeof e=="string")b=x0(e,a,oe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case K:return e=Na(31,a,t,c),e.elementType=K,e.lanes=f,e;case j:return vs(a.children,c,f,t);case T:b=8,c|=24;break;case D:return e=Na(12,a,t,c|2),e.elementType=D,e.lanes=f,e;case x:return e=Na(13,a,t,c),e.elementType=x,e.lanes=f,e;case O:return e=Na(19,a,t,c),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:case k:b=10;break e;case N:b=9;break e;case q:b=11;break e;case R:b=14;break e;case P:b=16,r=null;break e}b=29,a=Error(l(130,e===null?"null":typeof e,"")),r=null}return t=Na(b,a,t,c),t.elementType=e,t.type=r,t.lanes=f,t}function vs(e,t,a,r){return e=Na(7,e,r,t),e.lanes=a,e}function uc(e,t,a){return e=Na(6,e,null,t),e.lanes=a,e}function fc(e,t,a){return t=Na(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zs=[],Qs=0,ml=null,gl=0,Ya=[],Va=0,ws=null,En=1,xn="";function Es(e,t){Zs[Qs++]=gl,Zs[Qs++]=ml,ml=e,gl=t}function Vf(e,t,a){Ya[Va++]=En,Ya[Va++]=xn,Ya[Va++]=ws,ws=e;var r=En;e=xn;var c=32-nt(r)-1;r&=~(1<<c),a+=1;var f=32-nt(t)+c;if(30<f){var b=c-c%5;f=(r&(1<<b)-1).toString(32),r>>=b,c-=b,En=1<<32-nt(t)+c|a<<c|r,xn=f+e}else En=1<<f|a<<c|r,xn=e}function pc(e){e.return!==null&&(Es(e,1),Vf(e,1,0))}function hc(e){for(;e===ml;)ml=Zs[--Qs],Zs[Qs]=null,gl=Zs[--Qs],Zs[Qs]=null;for(;e===ws;)ws=Ya[--Va],Ya[Va]=null,xn=Ya[--Va],Ya[Va]=null,En=Ya[--Va],Ya[Va]=null}var ma=null,Ct=null,tt=!1,xs=null,rn=!1,mc=Error(l(519));function Ss(e){var t=Error(l(418,""));throw zr(Fa(t,e)),mc}function Hf(e){var t=e.stateNode,a=e.type,r=e.memoizedProps;switch(t[pe]=e,t[Ee]=r,a){case"dialog":Xe("cancel",t),Xe("close",t);break;case"iframe":case"object":case"embed":Xe("load",t);break;case"video":case"audio":for(a=0;a<ho.length;a++)Xe(ho[a],t);break;case"source":Xe("error",t);break;case"img":case"image":case"link":Xe("error",t),Xe("load",t);break;case"details":Xe("toggle",t);break;case"input":Xe("invalid",t),of(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),al(t);break;case"select":Xe("invalid",t);break;case"textarea":Xe("invalid",t),cf(t,r.value,r.defaultValue,r.children),al(t)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||r.suppressHydrationWarning===!0||cm(t.textContent,a)?(r.popover!=null&&(Xe("beforetoggle",t),Xe("toggle",t)),r.onScroll!=null&&Xe("scroll",t),r.onScrollEnd!=null&&Xe("scrollend",t),r.onClick!=null&&(t.onclick=Wl),t=!0):t=!1,t||Ss(e)}function Gf(e){for(ma=e.return;ma;)switch(ma.tag){case 5:case 13:rn=!1;return;case 27:case 3:rn=!0;return;default:ma=ma.return}}function Br(e){if(e!==ma)return!1;if(!tt)return Gf(e),tt=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rd(e.type,e.memoizedProps)),a=!a),a&&Ct&&Ss(e),Gf(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ct=en(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ct=null}}else t===27?(t=Ct,ts(e.type)?(e=Pd,Pd=null,Ct=e):Ct=t):Ct=ma?en(e.stateNode.nextSibling):null;return!0}function Fr(){Ct=ma=null,tt=!1}function Xf(){var e=xs;return e!==null&&(xa===null?xa=e:xa.push.apply(xa,e),xs=null),e}function zr(e){xs===null?xs=[e]:xs.push(e)}var gc=Q(null),Ds=null,Sn=null;function $n(e,t,a){G(gc,t._currentValue),t._currentValue=a}function Dn(e){e._currentValue=gc.current,U(gc)}function yc(e,t,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===a)break;e=e.return}}function bc(e,t,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var b=c.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=c;for(var L=0;L<t.length;L++)if(A.context===t[L]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),yc(f.return,a,e),r||(b=null);break e}f=A.next}}else if(c.tag===18){if(b=c.return,b===null)throw Error(l(341));b.lanes|=a,f=b.alternate,f!==null&&(f.lanes|=a),yc(b,a,e),b=null}else b=c.child;if(b!==null)b.return=c;else for(b=c;b!==null;){if(b===e){b=null;break}if(c=b.sibling,c!==null){c.return=b.return,b=c;break}b=b.return}c=b}}function Yr(e,t,a,r){e=null;for(var c=t,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var b=c.alternate;if(b===null)throw Error(l(387));if(b=b.memoizedProps,b!==null){var A=c.type;Ca(c.pendingProps.value,b.value)||(e!==null?e.push(A):e=[A])}}else if(c===ze.current){if(b=c.alternate,b===null)throw Error(l(387));b.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}c=c.return}e!==null&&bc(t,e,a,r),t.flags|=262144}function yl(e){for(e=e.firstContext;e!==null;){if(!Ca(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Ds=e,Sn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return Kf(Ds,e)}function bl(e,t){return Ds===null&&As(e),Kf(e,t)}function Kf(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Sn===null){if(e===null)throw Error(l(308));Sn=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Sn=Sn.next=t;return a}var Ev=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},xv=n.unstable_scheduleCallback,Sv=n.unstable_NormalPriority,Ft={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function vc(){return{controller:new Ev,data:new Map,refCount:0}}function Vr(e){e.refCount--,e.refCount===0&&xv(Sv,function(){e.controller.abort()})}var Hr=null,wc=0,Js=0,er=null;function Dv(e,t){if(Hr===null){var a=Hr=[];wc=0,Js=xd(),er={status:"pending",value:void 0,then:function(r){a.push(r)}}}return wc++,t.then(Wf,Wf),t}function Wf(){if(--wc===0&&Hr!==null){er!==null&&(er.status="fulfilled");var e=Hr;Hr=null,Js=0,er=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Av(e,t){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var c=0;c<a.length;c++)(0,a[c])(t)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var Zf=V.S;V.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Dv(e,t),Zf!==null&&Zf(e,t)};var Ts=Q(null);function Ec(){var e=Ts.current;return e!==null?e:ht.pooledCache}function vl(e,t){t===null?G(Ts,Ts.current):G(Ts,t.pool)}function Qf(){var e=Ec();return e===null?null:{parent:Ft._currentValue,pool:e}}var Gr=Error(l(460)),Jf=Error(l(474)),wl=Error(l(542)),xc={then:function(){}};function ep(e){return e=e.status,e==="fulfilled"||e==="rejected"}function El(){}function tp(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(El,El),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,np(e),e;default:if(typeof t.status=="string")t.then(El,El);else{if(e=ht,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(r){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=r}},function(r){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=r}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,np(e),e}throw Xr=t,Gr}}var Xr=null;function ap(){if(Xr===null)throw Error(l(459));var e=Xr;return Xr=null,e}function np(e){if(e===Gr||e===wl)throw Error(l(483))}var Bn=!1;function Sc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Fn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function zn(e,t,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(st&2)!==0){var c=r.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),r.pending=t,t=pl(e),zf(e,null,a),t}return fl(e,r,t,a),pl(e)}function Kr(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,At(e,a)}}function Ac(e,t){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=b:f=f.next=b,a=a.next}while(a!==null);f===null?c=f=t:f=f.next=t}else c=f=t;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Tc=!1;function Wr(){if(Tc){var e=er;if(e!==null)throw e}}function Zr(e,t,a,r){Tc=!1;var c=e.updateQueue;Bn=!1;var f=c.firstBaseUpdate,b=c.lastBaseUpdate,A=c.shared.pending;if(A!==null){c.shared.pending=null;var L=A,X=L.next;L.next=null,b===null?f=X:b.next=X,b=L;var ee=e.alternate;ee!==null&&(ee=ee.updateQueue,A=ee.lastBaseUpdate,A!==b&&(A===null?ee.firstBaseUpdate=X:A.next=X,ee.lastBaseUpdate=L))}if(f!==null){var se=c.baseState;b=0,ee=X=L=null,A=f;do{var W=A.lane&-536870913,Z=W!==A.lane;if(Z?(Qe&W)===W:(r&W)===W){W!==0&&W===Js&&(Tc=!0),ee!==null&&(ee=ee.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var Oe=e,Re=A;W=t;var dt=a;switch(Re.tag){case 1:if(Oe=Re.payload,typeof Oe=="function"){se=Oe.call(dt,se,W);break e}se=Oe;break e;case 3:Oe.flags=Oe.flags&-65537|128;case 0:if(Oe=Re.payload,W=typeof Oe=="function"?Oe.call(dt,se,W):Oe,W==null)break e;se=g({},se,W);break e;case 2:Bn=!0}}W=A.callback,W!==null&&(e.flags|=64,Z&&(e.flags|=8192),Z=c.callbacks,Z===null?c.callbacks=[W]:Z.push(W))}else Z={lane:W,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ee===null?(X=ee=Z,L=se):ee=ee.next=Z,b|=W;if(A=A.next,A===null){if(A=c.shared.pending,A===null)break;Z=A,A=Z.next,Z.next=null,c.lastBaseUpdate=Z,c.shared.pending=null}}while(!0);ee===null&&(L=se),c.baseState=L,c.firstBaseUpdate=X,c.lastBaseUpdate=ee,f===null&&(c.shared.lanes=0),Zn|=b,e.lanes=b,e.memoizedState=se}}function sp(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function rp(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)sp(a[e],t)}var tr=Q(null),xl=Q(0);function op(e,t){e=Rn,G(xl,e),G(tr,t),Rn=e|t.baseLanes}function Cc(){G(xl,Rn),G(tr,tr.current)}function Nc(){Rn=xl.current,U(tr),U(xl)}var Yn=0,Fe=null,it=null,qt=null,Sl=!1,ar=!1,Cs=!1,Dl=0,Qr=0,nr=null,Tv=0;function Lt(){throw Error(l(321))}function kc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!Ca(e[a],t[a]))return!1;return!0}function jc(e,t,a,r,c,f){return Yn=f,Fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,V.H=e===null||e.memoizedState===null?zp:Yp,Cs=!1,f=a(r,c),Cs=!1,ar&&(f=ip(t,a,r,c)),lp(e),f}function lp(e){V.H=jl;var t=it!==null&&it.next!==null;if(Yn=0,qt=it=Fe=null,Sl=!1,Qr=0,nr=null,t)throw Error(l(300));e===null||Xt||(e=e.dependencies,e!==null&&yl(e)&&(Xt=!0))}function ip(e,t,a,r){Fe=e;var c=0;do{if(ar&&(nr=null),Qr=0,ar=!1,25<=c)throw Error(l(301));if(c+=1,qt=it=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}V.H=Ov,f=t(a,r)}while(ar);return f}function Cv(){var e=V.H,t=e.useState()[0];return t=typeof t.then=="function"?Jr(t):t,e=e.useState()[0],(it!==null?it.memoizedState:null)!==e&&(Fe.flags|=1024),t}function Rc(){var e=Dl!==0;return Dl=0,e}function Lc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Oc(e){if(Sl){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Sl=!1}Yn=0,qt=it=Fe=null,ar=!1,Qr=Dl=0,nr=null}function wa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Fe.memoizedState=qt=e:qt=qt.next=e,qt}function It(){if(it===null){var e=Fe.alternate;e=e!==null?e.memoizedState:null}else e=it.next;var t=qt===null?Fe.memoizedState:qt.next;if(t!==null)qt=t,it=e;else{if(e===null)throw Fe.alternate===null?Error(l(467)):Error(l(310));it=e,e={memoizedState:it.memoizedState,baseState:it.baseState,baseQueue:it.baseQueue,queue:it.queue,next:null},qt===null?Fe.memoizedState=qt=e:qt=qt.next=e}return qt}function _c(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jr(e){var t=Qr;return Qr+=1,nr===null&&(nr=[]),e=tp(nr,e,t),t=Fe,(qt===null?t.memoizedState:qt.next)===null&&(t=t.alternate,V.H=t===null||t.memoizedState===null?zp:Yp),e}function Al(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jr(e);if(e.$$typeof===k)return ca(e)}throw Error(l(438,String(e)))}function Pc(e){var t=null,a=Fe.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var r=Fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=_c(),Fe.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),r=0;r<e;r++)a[r]=ue;return t.index++,a}function An(e,t){return typeof t=="function"?t(e):t}function Tl(e){var t=It();return Mc(t,it,e)}function Mc(e,t,a){var r=e.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var b=c.next;c.next=f.next,f.next=b}t.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{t=c.next;var A=b=null,L=null,X=t,ee=!1;do{var se=X.lane&-536870913;if(se!==X.lane?(Qe&se)===se:(Yn&se)===se){var W=X.revertLane;if(W===0)L!==null&&(L=L.next={lane:0,revertLane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),se===Js&&(ee=!0);else if((Yn&W)===W){X=X.next,W===Js&&(ee=!0);continue}else se={lane:0,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},L===null?(A=L=se,b=f):L=L.next=se,Fe.lanes|=W,Zn|=W;se=X.action,Cs&&a(f,se),f=X.hasEagerState?X.eagerState:a(f,se)}else W={lane:se,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},L===null?(A=L=W,b=f):L=L.next=W,Fe.lanes|=se,Zn|=se;X=X.next}while(X!==null&&X!==t);if(L===null?b=f:L.next=A,!Ca(f,e.memoizedState)&&(Xt=!0,ee&&(a=er,a!==null)))throw a;e.memoizedState=f,e.baseState=b,e.baseQueue=L,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function qc(e){var t=It(),a=t.queue;if(a===null)throw Error(l(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=t.memoizedState;if(c!==null){a.pending=null;var b=c=c.next;do f=e(f,b.action),b=b.next;while(b!==c);Ca(f,t.memoizedState)||(Xt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),a.lastRenderedState=f}return[f,r]}function cp(e,t,a){var r=Fe,c=It(),f=tt;if(f){if(a===void 0)throw Error(l(407));a=a()}else a=t();var b=!Ca((it||c).memoizedState,a);b&&(c.memoizedState=a,Xt=!0),c=c.queue;var A=fp.bind(null,r,c,e);if(eo(2048,8,A,[e]),c.getSnapshot!==t||b||qt!==null&&qt.memoizedState.tag&1){if(r.flags|=2048,sr(9,Cl(),up.bind(null,r,c,a,t),null),ht===null)throw Error(l(349));f||(Yn&124)!==0||dp(r,t,a)}return a}function dp(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=Fe.updateQueue,t===null?(t=_c(),Fe.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function up(e,t,a,r){t.value=a,t.getSnapshot=r,pp(t)&&hp(e)}function fp(e,t,a){return a(function(){pp(t)&&hp(e)})}function pp(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!Ca(e,a)}catch{return!0}}function hp(e){var t=Ks(e,2);t!==null&&Oa(t,e,2)}function Ic(e){var t=wa();if(typeof e=="function"){var a=e;if(e=a(),Cs){Ke(!0);try{a()}finally{Ke(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},t}function mp(e,t,a,r){return e.baseState=a,Mc(e,it,typeof r=="function"?r:An)}function Nv(e,t,a,r,c){if(kl(e))throw Error(l(485));if(e=t.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){f.listeners.push(b)}};V.T!==null?a(!0):f.isTransition=!1,r(f),a=t.pending,a===null?(f.next=t.pending=f,gp(t,f)):(f.next=a.next,t.pending=a.next=f)}}function gp(e,t){var a=t.action,r=t.payload,c=e.state;if(t.isTransition){var f=V.T,b={};V.T=b;try{var A=a(c,r),L=V.S;L!==null&&L(b,A),yp(e,t,A)}catch(X){Uc(e,t,X)}finally{V.T=f}}else try{f=a(c,r),yp(e,t,f)}catch(X){Uc(e,t,X)}}function yp(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){bp(e,t,r)},function(r){return Uc(e,t,r)}):bp(e,t,a)}function bp(e,t,a){t.status="fulfilled",t.value=a,vp(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,gp(e,a)))}function Uc(e,t,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status="rejected",t.reason=a,vp(t),t=t.next;while(t!==r)}e.action=null}function vp(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function wp(e,t){return t}function Ep(e,t){if(tt){var a=ht.formState;if(a!==null){e:{var r=Fe;if(tt){if(Ct){t:{for(var c=Ct,f=rn;c.nodeType!==8;){if(!f){c=null;break t}if(c=en(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Ct=en(c.nextSibling),r=c.data==="F!";break e}}Ss(r)}r=!1}r&&(t=a[0])}}return a=wa(),a.memoizedState=a.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wp,lastRenderedState:t},a.queue=r,a=$p.bind(null,Fe,r),r.dispatch=a,r=Ic(!1),f=Yc.bind(null,Fe,!1,r.queue),r=wa(),c={state:t,dispatch:null,action:e,pending:null},r.queue=c,a=Nv.bind(null,Fe,c,f,a),c.dispatch=a,r.memoizedState=e,[t,a,!1]}function xp(e){var t=It();return Sp(t,it,e)}function Sp(e,t,a){if(t=Mc(e,t,wp)[0],e=Tl(An)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var r=Jr(t)}catch(b){throw b===Gr?wl:b}else r=t;t=It();var c=t.queue,f=c.dispatch;return a!==t.memoizedState&&(Fe.flags|=2048,sr(9,Cl(),kv.bind(null,c,a),null)),[r,f,e]}function kv(e,t){e.action=t}function Dp(e){var t=It(),a=it;if(a!==null)return Sp(t,a,e);It(),t=t.memoizedState,a=It();var r=a.queue.dispatch;return a.memoizedState=e,[t,r,!1]}function sr(e,t,a,r){return e={tag:e,create:a,deps:r,inst:t,next:null},t=Fe.updateQueue,t===null&&(t=_c(),Fe.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,t.lastEffect=e),e}function Cl(){return{destroy:void 0,resource:void 0}}function Ap(){return It().memoizedState}function Nl(e,t,a,r){var c=wa();r=r===void 0?null:r,Fe.flags|=e,c.memoizedState=sr(1|t,Cl(),a,r)}function eo(e,t,a,r){var c=It();r=r===void 0?null:r;var f=c.memoizedState.inst;it!==null&&r!==null&&kc(r,it.memoizedState.deps)?c.memoizedState=sr(t,f,a,r):(Fe.flags|=e,c.memoizedState=sr(1|t,f,a,r))}function Tp(e,t){Nl(8390656,8,e,t)}function Cp(e,t){eo(2048,8,e,t)}function Np(e,t){return eo(4,2,e,t)}function kp(e,t){return eo(4,4,e,t)}function jp(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Rp(e,t,a){a=a!=null?a.concat([e]):null,eo(4,4,jp.bind(null,t,e),a)}function $c(){}function Lp(e,t){var a=It();t=t===void 0?null:t;var r=a.memoizedState;return t!==null&&kc(t,r[1])?r[0]:(a.memoizedState=[e,t],e)}function Op(e,t){var a=It();t=t===void 0?null:t;var r=a.memoizedState;if(t!==null&&kc(t,r[1]))return r[0];if(r=e(),Cs){Ke(!0);try{e()}finally{Ke(!1)}}return a.memoizedState=[r,t],r}function Bc(e,t,a){return a===void 0||(Yn&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Mh(),Fe.lanes|=e,Zn|=e,a)}function _p(e,t,a,r){return Ca(a,t)?a:tr.current!==null?(e=Bc(e,a,r),Ca(e,t)||(Xt=!0),e):(Yn&42)===0?(Xt=!0,e.memoizedState=a):(e=Mh(),Fe.lanes|=e,Zn|=e,t)}function Pp(e,t,a,r,c){var f=re.p;re.p=f!==0&&8>f?f:8;var b=V.T,A={};V.T=A,Yc(e,!1,t,a);try{var L=c(),X=V.S;if(X!==null&&X(A,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var ee=Av(L,r);to(e,t,ee,La(e))}else to(e,t,r,La(e))}catch(se){to(e,t,{then:function(){},status:"rejected",reason:se},La())}finally{re.p=f,V.T=b}}function jv(){}function Fc(e,t,a,r){if(e.tag!==5)throw Error(l(476));var c=Mp(e).queue;Pp(e,c,t,ye,a===null?jv:function(){return qp(e),a(r)})}function Mp(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:ye},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function qp(e){var t=Mp(e).next.queue;to(e,t,{},La())}function zc(){return ca(wo)}function Ip(){return It().memoizedState}function Up(){return It().memoizedState}function Rv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=La();e=Fn(a);var r=zn(t,e,a);r!==null&&(Oa(r,t,a),Kr(r,t,a)),t={cache:vc()},e.payload=t;return}t=t.return}}function Lv(e,t,a){var r=La();a={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},kl(e)?Bp(t,a):(a=cc(e,t,a,r),a!==null&&(Oa(a,e,r),Fp(a,t,r)))}function $p(e,t,a){var r=La();to(e,t,a,r)}function to(e,t,a,r){var c={lane:r,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(kl(e))Bp(t,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var b=t.lastRenderedState,A=f(b,a);if(c.hasEagerState=!0,c.eagerState=A,Ca(A,b))return fl(e,t,c,0),ht===null&&ul(),!1}catch{}if(a=cc(e,t,c,r),a!==null)return Oa(a,e,r),Fp(a,t,r),!0}return!1}function Yc(e,t,a,r){if(r={lane:2,revertLane:xd(),action:r,hasEagerState:!1,eagerState:null,next:null},kl(e)){if(t)throw Error(l(479))}else t=cc(e,a,r,2),t!==null&&Oa(t,e,2)}function kl(e){var t=e.alternate;return e===Fe||t!==null&&t===Fe}function Bp(e,t){ar=Sl=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Fp(e,t,a){if((a&4194048)!==0){var r=t.lanes;r&=e.pendingLanes,a|=r,t.lanes=a,At(e,a)}}var jl={readContext:ca,use:Al,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useLayoutEffect:Lt,useInsertionEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useSyncExternalStore:Lt,useId:Lt,useHostTransitionStatus:Lt,useFormState:Lt,useActionState:Lt,useOptimistic:Lt,useMemoCache:Lt,useCacheRefresh:Lt},zp={readContext:ca,use:Al,useCallback:function(e,t){return wa().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:Tp,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Nl(4194308,4,jp.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Nl(4194308,4,e,t)},useInsertionEffect:function(e,t){Nl(4,2,e,t)},useMemo:function(e,t){var a=wa();t=t===void 0?null:t;var r=e();if(Cs){Ke(!0);try{e()}finally{Ke(!1)}}return a.memoizedState=[r,t],r},useReducer:function(e,t,a){var r=wa();if(a!==void 0){var c=a(t);if(Cs){Ke(!0);try{a(t)}finally{Ke(!1)}}}else c=t;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=Lv.bind(null,Fe,e),[r.memoizedState,e]},useRef:function(e){var t=wa();return e={current:e},t.memoizedState=e},useState:function(e){e=Ic(e);var t=e.queue,a=$p.bind(null,Fe,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:$c,useDeferredValue:function(e,t){var a=wa();return Bc(a,e,t)},useTransition:function(){var e=Ic(!1);return e=Pp.bind(null,Fe,e.queue,!0,!1),wa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var r=Fe,c=wa();if(tt){if(a===void 0)throw Error(l(407));a=a()}else{if(a=t(),ht===null)throw Error(l(349));(Qe&124)!==0||dp(r,t,a)}c.memoizedState=a;var f={value:a,getSnapshot:t};return c.queue=f,Tp(fp.bind(null,r,f,e),[e]),r.flags|=2048,sr(9,Cl(),up.bind(null,r,f,a,t),null),a},useId:function(){var e=wa(),t=ht.identifierPrefix;if(tt){var a=xn,r=En;a=(r&~(1<<32-nt(r)-1)).toString(32)+a,t="«"+t+"R"+a,a=Dl++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Tv++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:zc,useFormState:Ep,useActionState:Ep,useOptimistic:function(e){var t=wa();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=Yc.bind(null,Fe,!0,a),a.dispatch=t,[e,t]},useMemoCache:Pc,useCacheRefresh:function(){return wa().memoizedState=Rv.bind(null,Fe)}},Yp={readContext:ca,use:Al,useCallback:Lp,useContext:ca,useEffect:Cp,useImperativeHandle:Rp,useInsertionEffect:Np,useLayoutEffect:kp,useMemo:Op,useReducer:Tl,useRef:Ap,useState:function(){return Tl(An)},useDebugValue:$c,useDeferredValue:function(e,t){var a=It();return _p(a,it.memoizedState,e,t)},useTransition:function(){var e=Tl(An)[0],t=It().memoizedState;return[typeof e=="boolean"?e:Jr(e),t]},useSyncExternalStore:cp,useId:Ip,useHostTransitionStatus:zc,useFormState:xp,useActionState:xp,useOptimistic:function(e,t){var a=It();return mp(a,it,e,t)},useMemoCache:Pc,useCacheRefresh:Up},Ov={readContext:ca,use:Al,useCallback:Lp,useContext:ca,useEffect:Cp,useImperativeHandle:Rp,useInsertionEffect:Np,useLayoutEffect:kp,useMemo:Op,useReducer:qc,useRef:Ap,useState:function(){return qc(An)},useDebugValue:$c,useDeferredValue:function(e,t){var a=It();return it===null?Bc(a,e,t):_p(a,it.memoizedState,e,t)},useTransition:function(){var e=qc(An)[0],t=It().memoizedState;return[typeof e=="boolean"?e:Jr(e),t]},useSyncExternalStore:cp,useId:Ip,useHostTransitionStatus:zc,useFormState:Dp,useActionState:Dp,useOptimistic:function(e,t){var a=It();return it!==null?mp(a,it,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Pc,useCacheRefresh:Up},rr=null,ao=0;function Rl(e){var t=ao;return ao+=1,rr===null&&(rr=[]),tp(rr,e,t)}function no(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ll(e,t){throw t.$$typeof===v?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Vp(e){var t=e._init;return t(e._payload)}function Hp(e){function t(z,I){if(e){var H=z.deletions;H===null?(z.deletions=[I],z.flags|=16):H.push(I)}}function a(z,I){if(!e)return null;for(;I!==null;)t(z,I),I=I.sibling;return null}function r(z){for(var I=new Map;z!==null;)z.key!==null?I.set(z.key,z):I.set(z.index,z),z=z.sibling;return I}function c(z,I){return z=wn(z,I),z.index=0,z.sibling=null,z}function f(z,I,H){return z.index=H,e?(H=z.alternate,H!==null?(H=H.index,H<I?(z.flags|=67108866,I):H):(z.flags|=67108866,I)):(z.flags|=1048576,I)}function b(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function A(z,I,H,ae){return I===null||I.tag!==6?(I=uc(H,z.mode,ae),I.return=z,I):(I=c(I,H),I.return=z,I)}function L(z,I,H,ae){var Se=H.type;return Se===j?ee(z,I,H.props.children,ae,H.key):I!==null&&(I.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===P&&Vp(Se)===I.type)?(I=c(I,H.props),no(I,H),I.return=z,I):(I=hl(H.type,H.key,H.props,null,z.mode,ae),no(I,H),I.return=z,I)}function X(z,I,H,ae){return I===null||I.tag!==4||I.stateNode.containerInfo!==H.containerInfo||I.stateNode.implementation!==H.implementation?(I=fc(H,z.mode,ae),I.return=z,I):(I=c(I,H.children||[]),I.return=z,I)}function ee(z,I,H,ae,Se){return I===null||I.tag!==7?(I=vs(H,z.mode,ae,Se),I.return=z,I):(I=c(I,H),I.return=z,I)}function se(z,I,H){if(typeof I=="string"&&I!==""||typeof I=="number"||typeof I=="bigint")return I=uc(""+I,z.mode,H),I.return=z,I;if(typeof I=="object"&&I!==null){switch(I.$$typeof){case E:return H=hl(I.type,I.key,I.props,null,z.mode,H),no(H,I),H.return=z,H;case S:return I=fc(I,z.mode,H),I.return=z,I;case P:var ae=I._init;return I=ae(I._payload),se(z,I,H)}if(ce(I)||le(I))return I=vs(I,z.mode,H,null),I.return=z,I;if(typeof I.then=="function")return se(z,Rl(I),H);if(I.$$typeof===k)return se(z,bl(z,I),H);Ll(z,I)}return null}function W(z,I,H,ae){var Se=I!==null?I.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return Se!==null?null:A(z,I,""+H,ae);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case E:return H.key===Se?L(z,I,H,ae):null;case S:return H.key===Se?X(z,I,H,ae):null;case P:return Se=H._init,H=Se(H._payload),W(z,I,H,ae)}if(ce(H)||le(H))return Se!==null?null:ee(z,I,H,ae,null);if(typeof H.then=="function")return W(z,I,Rl(H),ae);if(H.$$typeof===k)return W(z,I,bl(z,H),ae);Ll(z,H)}return null}function Z(z,I,H,ae,Se){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return z=z.get(H)||null,A(I,z,""+ae,Se);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case E:return z=z.get(ae.key===null?H:ae.key)||null,L(I,z,ae,Se);case S:return z=z.get(ae.key===null?H:ae.key)||null,X(I,z,ae,Se);case P:var Ve=ae._init;return ae=Ve(ae._payload),Z(z,I,H,ae,Se)}if(ce(ae)||le(ae))return z=z.get(H)||null,ee(I,z,ae,Se,null);if(typeof ae.then=="function")return Z(z,I,H,Rl(ae),Se);if(ae.$$typeof===k)return Z(z,I,H,bl(I,ae),Se);Ll(I,ae)}return null}function Oe(z,I,H,ae){for(var Se=null,Ve=null,ke=I,Le=I=0,Wt=null;ke!==null&&Le<H.length;Le++){ke.index>Le?(Wt=ke,ke=null):Wt=ke.sibling;var et=W(z,ke,H[Le],ae);if(et===null){ke===null&&(ke=Wt);break}e&&ke&&et.alternate===null&&t(z,ke),I=f(et,I,Le),Ve===null?Se=et:Ve.sibling=et,Ve=et,ke=Wt}if(Le===H.length)return a(z,ke),tt&&Es(z,Le),Se;if(ke===null){for(;Le<H.length;Le++)ke=se(z,H[Le],ae),ke!==null&&(I=f(ke,I,Le),Ve===null?Se=ke:Ve.sibling=ke,Ve=ke);return tt&&Es(z,Le),Se}for(ke=r(ke);Le<H.length;Le++)Wt=Z(ke,z,Le,H[Le],ae),Wt!==null&&(e&&Wt.alternate!==null&&ke.delete(Wt.key===null?Le:Wt.key),I=f(Wt,I,Le),Ve===null?Se=Wt:Ve.sibling=Wt,Ve=Wt);return e&&ke.forEach(function(os){return t(z,os)}),tt&&Es(z,Le),Se}function Re(z,I,H,ae){if(H==null)throw Error(l(151));for(var Se=null,Ve=null,ke=I,Le=I=0,Wt=null,et=H.next();ke!==null&&!et.done;Le++,et=H.next()){ke.index>Le?(Wt=ke,ke=null):Wt=ke.sibling;var os=W(z,ke,et.value,ae);if(os===null){ke===null&&(ke=Wt);break}e&&ke&&os.alternate===null&&t(z,ke),I=f(os,I,Le),Ve===null?Se=os:Ve.sibling=os,Ve=os,ke=Wt}if(et.done)return a(z,ke),tt&&Es(z,Le),Se;if(ke===null){for(;!et.done;Le++,et=H.next())et=se(z,et.value,ae),et!==null&&(I=f(et,I,Le),Ve===null?Se=et:Ve.sibling=et,Ve=et);return tt&&Es(z,Le),Se}for(ke=r(ke);!et.done;Le++,et=H.next())et=Z(ke,z,Le,et.value,ae),et!==null&&(e&&et.alternate!==null&&ke.delete(et.key===null?Le:et.key),I=f(et,I,Le),Ve===null?Se=et:Ve.sibling=et,Ve=et);return e&&ke.forEach(function(_0){return t(z,_0)}),tt&&Es(z,Le),Se}function dt(z,I,H,ae){if(typeof H=="object"&&H!==null&&H.type===j&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case E:e:{for(var Se=H.key;I!==null;){if(I.key===Se){if(Se=H.type,Se===j){if(I.tag===7){a(z,I.sibling),ae=c(I,H.props.children),ae.return=z,z=ae;break e}}else if(I.elementType===Se||typeof Se=="object"&&Se!==null&&Se.$$typeof===P&&Vp(Se)===I.type){a(z,I.sibling),ae=c(I,H.props),no(ae,H),ae.return=z,z=ae;break e}a(z,I);break}else t(z,I);I=I.sibling}H.type===j?(ae=vs(H.props.children,z.mode,ae,H.key),ae.return=z,z=ae):(ae=hl(H.type,H.key,H.props,null,z.mode,ae),no(ae,H),ae.return=z,z=ae)}return b(z);case S:e:{for(Se=H.key;I!==null;){if(I.key===Se)if(I.tag===4&&I.stateNode.containerInfo===H.containerInfo&&I.stateNode.implementation===H.implementation){a(z,I.sibling),ae=c(I,H.children||[]),ae.return=z,z=ae;break e}else{a(z,I);break}else t(z,I);I=I.sibling}ae=fc(H,z.mode,ae),ae.return=z,z=ae}return b(z);case P:return Se=H._init,H=Se(H._payload),dt(z,I,H,ae)}if(ce(H))return Oe(z,I,H,ae);if(le(H)){if(Se=le(H),typeof Se!="function")throw Error(l(150));return H=Se.call(H),Re(z,I,H,ae)}if(typeof H.then=="function")return dt(z,I,Rl(H),ae);if(H.$$typeof===k)return dt(z,I,bl(z,H),ae);Ll(z,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,I!==null&&I.tag===6?(a(z,I.sibling),ae=c(I,H),ae.return=z,z=ae):(a(z,I),ae=uc(H,z.mode,ae),ae.return=z,z=ae),b(z)):a(z,I)}return function(z,I,H,ae){try{ao=0;var Se=dt(z,I,H,ae);return rr=null,Se}catch(ke){if(ke===Gr||ke===wl)throw ke;var Ve=Na(29,ke,null,z.mode);return Ve.lanes=ae,Ve.return=z,Ve}}}var or=Hp(!0),Gp=Hp(!1),Ha=Q(null),on=null;function Vn(e){var t=e.alternate;G(zt,zt.current&1),G(Ha,e),on===null&&(t===null||tr.current!==null||t.memoizedState!==null)&&(on=e)}function Xp(e){if(e.tag===22){if(G(zt,zt.current),G(Ha,e),on===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(on=e)}}else Hn()}function Hn(){G(zt,zt.current),G(Ha,Ha.current)}function Tn(e){U(Ha),on===e&&(on=null),U(zt)}var zt=Q(0);function Ol(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||_d(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function Vc(e,t,a,r){t=e.memoizedState,a=a(r,t),a=a==null?t:g({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Hc={enqueueSetState:function(e,t,a){e=e._reactInternals;var r=La(),c=Fn(r);c.payload=t,a!=null&&(c.callback=a),t=zn(e,c,r),t!==null&&(Oa(t,e,r),Kr(t,e,r))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var r=La(),c=Fn(r);c.tag=1,c.payload=t,a!=null&&(c.callback=a),t=zn(e,c,r),t!==null&&(Oa(t,e,r),Kr(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=La(),r=Fn(a);r.tag=2,t!=null&&(r.callback=t),t=zn(e,r,a),t!==null&&(Oa(t,e,a),Kr(t,e,a))}};function Kp(e,t,a,r,c,f,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,b):t.prototype&&t.prototype.isPureReactComponent?!Ur(a,r)||!Ur(c,f):!0}function Wp(e,t,a,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,r),t.state!==e&&Hc.enqueueReplaceState(t,t.state,null)}function Ns(e,t){var a=t;if("ref"in t){a={};for(var r in t)r!=="ref"&&(a[r]=t[r])}if(e=e.defaultProps){a===t&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var _l=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Zp(e){_l(e)}function Qp(e){console.error(e)}function Jp(e){_l(e)}function Pl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(r){setTimeout(function(){throw r})}}function eh(e,t,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Gc(e,t,a){return a=Fn(a),a.tag=3,a.payload={element:null},a.callback=function(){Pl(e,t)},a}function th(e){return e=Fn(e),e.tag=3,e}function ah(e,t,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){eh(t,a,r)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){eh(t,a,r),typeof c!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function _v(e,t,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(t=a.alternate,t!==null&&Yr(t,a,c,!0),a=Ha.current,a!==null){switch(a.tag){case 13:return on===null?yd():a.alternate===null&&Nt===0&&(Nt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===xc?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([r]):t.add(r),vd(e,r,c)),!1;case 22:return a.flags|=65536,r===xc?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([r]):a.add(r)),vd(e,r,c)),!1}throw Error(l(435,a.tag))}return vd(e,r,c),yd(),!1}if(tt)return t=Ha.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,r!==mc&&(e=Error(l(422),{cause:r}),zr(Fa(e,a)))):(r!==mc&&(t=Error(l(423),{cause:r}),zr(Fa(t,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Fa(r,a),c=Gc(e.stateNode,r,c),Ac(e,c),Nt!==4&&(Nt=2)),!1;var f=Error(l(520),{cause:r});if(f=Fa(f,a),uo===null?uo=[f]:uo.push(f),Nt!==4&&(Nt=2),t===null)return!0;r=Fa(r,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Gc(a.stateNode,r,e),Ac(a,e),!1;case 1:if(t=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Qn===null||!Qn.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=th(c),ah(c,e,a,r),Ac(a,c),!1}a=a.return}while(a!==null);return!1}var nh=Error(l(461)),Xt=!1;function ta(e,t,a,r){t.child=e===null?Gp(t,null,a,r):or(t,e.child,a,r)}function sh(e,t,a,r,c){a=a.render;var f=t.ref;if("ref"in r){var b={};for(var A in r)A!=="ref"&&(b[A]=r[A])}else b=r;return As(t),r=jc(e,t,a,b,f,c),A=Rc(),e!==null&&!Xt?(Lc(e,t,c),Cn(e,t,c)):(tt&&A&&pc(t),t.flags|=1,ta(e,t,r,c),t.child)}function rh(e,t,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!dc(f)&&f.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=f,oh(e,t,f,r,c)):(e=hl(a.type,null,r,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!td(e,c)){var b=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ur,a(b,r)&&e.ref===t.ref)return Cn(e,t,c)}return t.flags|=1,e=wn(f,r),e.ref=t.ref,e.return=t,t.child=e}function oh(e,t,a,r,c){if(e!==null){var f=e.memoizedProps;if(Ur(f,r)&&e.ref===t.ref)if(Xt=!1,t.pendingProps=r=f,td(e,c))(e.flags&131072)!==0&&(Xt=!0);else return t.lanes=e.lanes,Cn(e,t,c)}return Xc(e,t,a,r,c)}function lh(e,t,a){var r=t.pendingProps,c=r.children,f=e!==null?e.memoizedState:null;if(r.mode==="hidden"){if((t.flags&128)!==0){if(r=f!==null?f.baseLanes|a:a,e!==null){for(c=t.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;t.childLanes=f&~r}else t.childLanes=0,t.child=null;return ih(e,t,r,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vl(t,f!==null?f.cachePool:null),f!==null?op(t,f):Cc(),Xp(t);else return t.lanes=t.childLanes=536870912,ih(e,t,f!==null?f.baseLanes|a:a,a)}else f!==null?(vl(t,f.cachePool),op(t,f),Hn(),t.memoizedState=null):(e!==null&&vl(t,null),Cc(),Hn());return ta(e,t,c,a),t.child}function ih(e,t,a,r){var c=Ec();return c=c===null?null:{parent:Ft._currentValue,pool:c},t.memoizedState={baseLanes:a,cachePool:c},e!==null&&vl(t,null),Cc(),Xp(t),e!==null&&Yr(e,t,r,!0),null}function Ml(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(l(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Xc(e,t,a,r,c){return As(t),a=jc(e,t,a,r,void 0,c),r=Rc(),e!==null&&!Xt?(Lc(e,t,c),Cn(e,t,c)):(tt&&r&&pc(t),t.flags|=1,ta(e,t,a,c),t.child)}function ch(e,t,a,r,c,f){return As(t),t.updateQueue=null,a=ip(t,r,a,c),lp(e),r=Rc(),e!==null&&!Xt?(Lc(e,t,f),Cn(e,t,f)):(tt&&r&&pc(t),t.flags|=1,ta(e,t,a,f),t.child)}function dh(e,t,a,r,c){if(As(t),t.stateNode===null){var f=Ws,b=a.contextType;typeof b=="object"&&b!==null&&(f=ca(b)),f=new a(r,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Hc,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=r,f.state=t.memoizedState,f.refs={},Sc(t),b=a.contextType,f.context=typeof b=="object"&&b!==null?ca(b):Ws,f.state=t.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Vc(t,a,b,r),f.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(b=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),b!==f.state&&Hc.enqueueReplaceState(f,f.state,null),Zr(t,r,f,c),Wr(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),r=!0}else if(e===null){f=t.stateNode;var A=t.memoizedProps,L=Ns(a,A);f.props=L;var X=f.context,ee=a.contextType;b=Ws,typeof ee=="object"&&ee!==null&&(b=ca(ee));var se=a.getDerivedStateFromProps;ee=typeof se=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=t.pendingProps!==A,ee||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||X!==b)&&Wp(t,f,r,b),Bn=!1;var W=t.memoizedState;f.state=W,Zr(t,r,f,c),Wr(),X=t.memoizedState,A||W!==X||Bn?(typeof se=="function"&&(Vc(t,a,se,r),X=t.memoizedState),(L=Bn||Kp(t,a,L,r,W,X,b))?(ee||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=X),f.props=r,f.state=X,f.context=b,r=L):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{f=t.stateNode,Dc(e,t),b=t.memoizedProps,ee=Ns(a,b),f.props=ee,se=t.pendingProps,W=f.context,X=a.contextType,L=Ws,typeof X=="object"&&X!==null&&(L=ca(X)),A=a.getDerivedStateFromProps,(X=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b!==se||W!==L)&&Wp(t,f,r,L),Bn=!1,W=t.memoizedState,f.state=W,Zr(t,r,f,c),Wr();var Z=t.memoizedState;b!==se||W!==Z||Bn||e!==null&&e.dependencies!==null&&yl(e.dependencies)?(typeof A=="function"&&(Vc(t,a,A,r),Z=t.memoizedState),(ee=Bn||Kp(t,a,ee,r,W,Z,L)||e!==null&&e.dependencies!==null&&yl(e.dependencies))?(X||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,Z,L),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,Z,L)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=Z),f.props=r,f.state=Z,f.context=L,r=ee):(typeof f.componentDidUpdate!="function"||b===e.memoizedProps&&W===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&W===e.memoizedState||(t.flags|=1024),r=!1)}return f=r,Ml(e,t),r=(t.flags&128)!==0,f||r?(f=t.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&r?(t.child=or(t,e.child,null,c),t.child=or(t,null,a,c)):ta(e,t,a,c),t.memoizedState=f.state,e=t.child):e=Cn(e,t,c),e}function uh(e,t,a,r){return Fr(),t.flags|=256,ta(e,t,a,r),t.child}var Kc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wc(e){return{baseLanes:e,cachePool:Qf()}}function Zc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ga),e}function fh(e,t,a){var r=t.pendingProps,c=!1,f=(t.flags&128)!==0,b;if((b=f)||(b=e!==null&&e.memoizedState===null?!1:(zt.current&2)!==0),b&&(c=!0,t.flags&=-129),b=(t.flags&32)!==0,t.flags&=-33,e===null){if(tt){if(c?Vn(t):Hn(),tt){var A=Ct,L;if(L=A){e:{for(L=A,A=rn;L.nodeType!==8;){if(!A){A=null;break e}if(L=en(L.nextSibling),L===null){A=null;break e}}A=L}A!==null?(t.memoizedState={dehydrated:A,treeContext:ws!==null?{id:En,overflow:xn}:null,retryLane:536870912,hydrationErrors:null},L=Na(18,null,null,0),L.stateNode=A,L.return=t,t.child=L,ma=t,Ct=null,L=!0):L=!1}L||Ss(t)}if(A=t.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return _d(A)?t.lanes=32:t.lanes=536870912,null;Tn(t)}return A=r.children,r=r.fallback,c?(Hn(),c=t.mode,A=ql({mode:"hidden",children:A},c),r=vs(r,c,a,null),A.return=t,r.return=t,A.sibling=r,t.child=A,c=t.child,c.memoizedState=Wc(a),c.childLanes=Zc(e,b,a),t.memoizedState=Kc,r):(Vn(t),Qc(t,A))}if(L=e.memoizedState,L!==null&&(A=L.dehydrated,A!==null)){if(f)t.flags&256?(Vn(t),t.flags&=-257,t=Jc(e,t,a)):t.memoizedState!==null?(Hn(),t.child=e.child,t.flags|=128,t=null):(Hn(),c=r.fallback,A=t.mode,r=ql({mode:"visible",children:r.children},A),c=vs(c,A,a,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,or(t,e.child,null,a),r=t.child,r.memoizedState=Wc(a),r.childLanes=Zc(e,b,a),t.memoizedState=Kc,t=c);else if(Vn(t),_d(A)){if(b=A.nextSibling&&A.nextSibling.dataset,b)var X=b.dgst;b=X,r=Error(l(419)),r.stack="",r.digest=b,zr({value:r,source:null,stack:null}),t=Jc(e,t,a)}else if(Xt||Yr(e,t,a,!1),b=(a&e.childLanes)!==0,Xt||b){if(b=ht,b!==null&&(r=a&-a,r=(r&42)!==0?1:qn(r),r=(r&(b.suspendedLanes|a))!==0?0:r,r!==0&&r!==L.retryLane))throw L.retryLane=r,Ks(e,r),Oa(b,e,r),nh;A.data==="$?"||yd(),t=Jc(e,t,a)}else A.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=L.treeContext,Ct=en(A.nextSibling),ma=t,tt=!0,xs=null,rn=!1,e!==null&&(Ya[Va++]=En,Ya[Va++]=xn,Ya[Va++]=ws,En=e.id,xn=e.overflow,ws=t),t=Qc(t,r.children),t.flags|=4096);return t}return c?(Hn(),c=r.fallback,A=t.mode,L=e.child,X=L.sibling,r=wn(L,{mode:"hidden",children:r.children}),r.subtreeFlags=L.subtreeFlags&65011712,X!==null?c=wn(X,c):(c=vs(c,A,a,null),c.flags|=2),c.return=t,r.return=t,r.sibling=c,t.child=r,r=c,c=t.child,A=e.child.memoizedState,A===null?A=Wc(a):(L=A.cachePool,L!==null?(X=Ft._currentValue,L=L.parent!==X?{parent:X,pool:X}:L):L=Qf(),A={baseLanes:A.baseLanes|a,cachePool:L}),c.memoizedState=A,c.childLanes=Zc(e,b,a),t.memoizedState=Kc,r):(Vn(t),a=e.child,e=a.sibling,a=wn(a,{mode:"visible",children:r.children}),a.return=t,a.sibling=null,e!==null&&(b=t.deletions,b===null?(t.deletions=[e],t.flags|=16):b.push(e)),t.child=a,t.memoizedState=null,a)}function Qc(e,t){return t=ql({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ql(e,t){return e=Na(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Jc(e,t,a){return or(t,e.child,null,a),e=Qc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ph(e,t,a){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yc(e.return,t,a)}function ed(e,t,a,r,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=r,f.tail=a,f.tailMode=c)}function hh(e,t,a){var r=t.pendingProps,c=r.revealOrder,f=r.tail;if(ta(e,t,r.children,a),r=zt.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ph(e,a,t);else if(e.tag===19)ph(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(G(zt,r),c){case"forwards":for(a=t.child,c=null;a!==null;)e=a.alternate,e!==null&&Ol(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=t.child,t.child=null):(c=a.sibling,a.sibling=null),ed(t,!1,c,a,f);break;case"backwards":for(a=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&Ol(e)===null){t.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}ed(t,!0,a,null,f);break;case"together":ed(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cn(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Zn|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Yr(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,a=wn(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=wn(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function td(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&yl(e)))}function Pv(e,t,a){switch(t.tag){case 3:Ie(t,t.stateNode.containerInfo),$n(t,Ft,e.memoizedState.cache),Fr();break;case 27:case 5:ft(t);break;case 4:Ie(t,t.stateNode.containerInfo);break;case 10:$n(t,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated!==null?(Vn(t),t.flags|=128,null):(a&t.child.childLanes)!==0?fh(e,t,a):(Vn(t),e=Cn(e,t,a),e!==null?e.sibling:null);Vn(t);break;case 19:var c=(e.flags&128)!==0;if(r=(a&t.childLanes)!==0,r||(Yr(e,t,a,!1),r=(a&t.childLanes)!==0),c){if(r)return hh(e,t,a);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),G(zt,zt.current),r)break;return null;case 22:case 23:return t.lanes=0,lh(e,t,a);case 24:$n(t,Ft,e.memoizedState.cache)}return Cn(e,t,a)}function mh(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xt=!0;else{if(!td(e,a)&&(t.flags&128)===0)return Xt=!1,Pv(e,t,a);Xt=(e.flags&131072)!==0}else Xt=!1,tt&&(t.flags&1048576)!==0&&Vf(t,gl,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,c=r._init;if(r=c(r._payload),t.type=r,typeof r=="function")dc(r)?(e=Ns(r,e),t.tag=1,t=dh(null,t,r,e,a)):(t.tag=0,t=Xc(null,t,r,e,a));else{if(r!=null){if(c=r.$$typeof,c===q){t.tag=11,t=sh(null,t,r,e,a);break e}else if(c===R){t.tag=14,t=rh(null,t,r,e,a);break e}}throw t=ge(r)||r,Error(l(306,t,""))}}return t;case 0:return Xc(e,t,t.type,t.pendingProps,a);case 1:return r=t.type,c=Ns(r,t.pendingProps),dh(e,t,r,c,a);case 3:e:{if(Ie(t,t.stateNode.containerInfo),e===null)throw Error(l(387));r=t.pendingProps;var f=t.memoizedState;c=f.element,Dc(e,t),Zr(t,r,null,a);var b=t.memoizedState;if(r=b.cache,$n(t,Ft,r),r!==f.cache&&bc(t,[Ft],a,!0),Wr(),r=b.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:b.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=uh(e,t,r,a);break e}else if(r!==c){c=Fa(Error(l(424)),t),zr(c),t=uh(e,t,r,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ct=en(e.firstChild),ma=t,tt=!0,xs=null,rn=!0,a=Gp(t,null,r,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fr(),r===c){t=Cn(e,t,a);break e}ta(e,t,r,a)}t=t.child}return t;case 26:return Ml(e,t),e===null?(a=vm(t.type,null,t.pendingProps,null))?t.memoizedState=a:tt||(a=t.type,e=t.pendingProps,r=Zl(be.current).createElement(a),r[pe]=t,r[Ee]=e,na(r,a,e),Pt(r),t.stateNode=r):t.memoizedState=vm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ft(t),e===null&&tt&&(r=t.stateNode=gm(t.type,t.pendingProps,be.current),ma=t,rn=!0,c=Ct,ts(t.type)?(Pd=c,Ct=en(r.firstChild)):Ct=c),ta(e,t,t.pendingProps.children,a),Ml(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&tt&&((c=r=Ct)&&(r=c0(r,t.type,t.pendingProps,rn),r!==null?(t.stateNode=r,ma=t,Ct=en(r.firstChild),rn=!1,c=!0):c=!1),c||Ss(t)),ft(t),c=t.type,f=t.pendingProps,b=e!==null?e.memoizedProps:null,r=f.children,Rd(c,f)?r=null:b!==null&&Rd(c,b)&&(t.flags|=32),t.memoizedState!==null&&(c=jc(e,t,Cv,null,null,a),wo._currentValue=c),Ml(e,t),ta(e,t,r,a),t.child;case 6:return e===null&&tt&&((e=a=Ct)&&(a=d0(a,t.pendingProps,rn),a!==null?(t.stateNode=a,ma=t,Ct=null,e=!0):e=!1),e||Ss(t)),null;case 13:return fh(e,t,a);case 4:return Ie(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=or(t,null,r,a):ta(e,t,r,a),t.child;case 11:return sh(e,t,t.type,t.pendingProps,a);case 7:return ta(e,t,t.pendingProps,a),t.child;case 8:return ta(e,t,t.pendingProps.children,a),t.child;case 12:return ta(e,t,t.pendingProps.children,a),t.child;case 10:return r=t.pendingProps,$n(t,t.type,r.value),ta(e,t,r.children,a),t.child;case 9:return c=t.type._context,r=t.pendingProps.children,As(t),c=ca(c),r=r(c),t.flags|=1,ta(e,t,r,a),t.child;case 14:return rh(e,t,t.type,t.pendingProps,a);case 15:return oh(e,t,t.type,t.pendingProps,a);case 19:return hh(e,t,a);case 31:return r=t.pendingProps,a=t.mode,r={mode:r.mode,children:r.children},e===null?(a=ql(r,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=wn(e.child,r),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return lh(e,t,a);case 24:return As(t),r=ca(Ft),e===null?(c=Ec(),c===null&&(c=ht,f=vc(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),t.memoizedState={parent:r,cache:c},Sc(t),$n(t,Ft,c)):((e.lanes&a)!==0&&(Dc(e,t),Zr(t,null,null,a),Wr()),c=e.memoizedState,f=t.memoizedState,c.parent!==r?(c={parent:r,cache:r},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),$n(t,Ft,r)):(r=f.cache,$n(t,Ft,r),r!==c.cache&&bc(t,[Ft],a,!0))),ta(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function Nn(e){e.flags|=4}function gh(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Dm(t)){if(t=Ha.current,t!==null&&((Qe&4194048)===Qe?on!==null:(Qe&62914560)!==Qe&&(Qe&536870912)===0||t!==on))throw Xr=xc,Jf;e.flags|=8192}}function Il(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?_t():536870912,e.lanes|=t,dr|=t)}function so(e,t){if(!tt)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(t)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&65011712,r|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,t}function Mv(e,t,a){var r=t.pendingProps;switch(hc(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return St(t),null;case 3:return a=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Dn(Ft),lt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Br(t)?Nn(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xf())),St(t),null;case 26:return a=t.memoizedState,e===null?(Nn(t),a!==null?(St(t),gh(t,a)):(St(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Nn(t),St(t),gh(t,a)):(St(t),t.flags&=-16777217):(e.memoizedProps!==r&&Nn(t),St(t),t.flags&=-16777217),null;case 27:jt(t),a=be.current;var c=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nn(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return St(t),null}e=oe.current,Br(t)?Hf(t):(e=gm(c,r,a),t.stateNode=e,Nn(t))}return St(t),null;case 5:if(jt(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Nn(t);else{if(!r){if(t.stateNode===null)throw Error(l(166));return St(t),null}if(e=oe.current,Br(t))Hf(t);else{switch(c=Zl(be.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof r.is=="string"?c.createElement("select",{is:r.is}):c.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e=typeof r.is=="string"?c.createElement(a,{is:r.is}):c.createElement(a)}}e[pe]=t,e[Ee]=r;e:for(c=t.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}t.stateNode=e;e:switch(na(e,a,r),a){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Nn(t)}}return St(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Nn(t);else{if(typeof r!="string"&&t.stateNode===null)throw Error(l(166));if(e=be.current,Br(t)){if(e=t.stateNode,a=t.memoizedProps,r=null,c=ma,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[pe]=t,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||cm(e.nodeValue,a)),e||Ss(t)}else e=Zl(e).createTextNode(r),e[pe]=t,t.stateNode=e}return St(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Br(t),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[pe]=t}else Fr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;St(t),c=!1}else c=Xf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Tn(t),t):(Tn(t),null)}if(Tn(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=r!==null,e=e!==null&&e.memoizedState!==null,a){r=t.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool);var f=null;r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Il(t,t.updateQueue),St(t),null;case 4:return lt(),e===null&&Td(t.stateNode.containerInfo),St(t),null;case 10:return Dn(t.type),St(t),null;case 19:if(U(zt),c=t.memoizedState,c===null)return St(t),null;if(r=(t.flags&128)!==0,f=c.rendering,f===null)if(r)so(c,!1);else{if(Nt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Ol(e),f!==null){for(t.flags|=128,so(c,!1),e=f.updateQueue,t.updateQueue=e,Il(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Yf(a,e),a=a.sibling;return G(zt,zt.current&1|2),t.child}e=e.sibling}c.tail!==null&&fe()>Bl&&(t.flags|=128,r=!0,so(c,!1),t.lanes=4194304)}else{if(!r)if(e=Ol(f),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,Il(t,e),so(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!tt)return St(t),null}else 2*fe()-c.renderingStartTime>Bl&&a!==536870912&&(t.flags|=128,r=!0,so(c,!1),t.lanes=4194304);c.isBackwards?(f.sibling=t.child,t.child=f):(e=c.last,e!==null?e.sibling=f:t.child=f,c.last=f)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=fe(),t.sibling=null,e=zt.current,G(zt,r?e&1|2:e&1),t):(St(t),null);case 22:case 23:return Tn(t),Nc(),r=t.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?(a&536870912)!==0&&(t.flags&128)===0&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),a=t.updateQueue,a!==null&&Il(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==a&&(t.flags|=2048),e!==null&&U(Ts),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Dn(Ft),St(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function qv(e,t){switch(hc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Dn(Ft),lt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return jt(t),null;case 13:if(Tn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(zt),null;case 4:return lt(),null;case 10:return Dn(t.type),null;case 22:case 23:return Tn(t),Nc(),e!==null&&U(Ts),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Dn(Ft),null;case 25:return null;default:return null}}function yh(e,t){switch(hc(t),t.tag){case 3:Dn(Ft),lt();break;case 26:case 27:case 5:jt(t);break;case 4:lt();break;case 13:Tn(t);break;case 19:U(zt);break;case 10:Dn(t.type);break;case 22:case 23:Tn(t),Nc(),e!==null&&U(Ts);break;case 24:Dn(Ft)}}function ro(e,t){try{var a=t.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,b=a.inst;r=f(),b.destroy=r}a=a.next}while(a!==c)}}catch(A){ut(t,t.return,A)}}function Gn(e,t,a){try{var r=t.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var b=r.inst,A=b.destroy;if(A!==void 0){b.destroy=void 0,c=t;var L=a,X=A;try{X()}catch(ee){ut(c,L,ee)}}}r=r.next}while(r!==f)}}catch(ee){ut(t,t.return,ee)}}function bh(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{rp(t,a)}catch(r){ut(e,e.return,r)}}}function vh(e,t,a){a.props=Ns(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){ut(e,t,r)}}function oo(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(c){ut(e,t,c)}}function ln(e,t){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){ut(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ut(e,t,c)}else a.current=null}function wh(e){var t=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){ut(e,e.return,c)}}function ad(e,t,a){try{var r=e.stateNode;s0(r,e.type,a,t),r[Ee]=t}catch(c){ut(e,e.return,c)}}function Eh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ts(e.type)||e.tag===4}function nd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Eh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ts(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function sd(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Wl));else if(r!==4&&(r===27&&ts(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(sd(e,t,a),e=e.sibling;e!==null;)sd(e,t,a),e=e.sibling}function Ul(e,t,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(r!==4&&(r===27&&ts(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ul(e,t,a),e=e.sibling;e!==null;)Ul(e,t,a),e=e.sibling}function xh(e){var t=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);na(t,r,a),t[pe]=e,t[Ee]=a}catch(f){ut(e,e.return,f)}}var kn=!1,Ot=!1,rd=!1,Sh=typeof WeakSet=="function"?WeakSet:Set,Kt=null;function Iv(e,t){if(e=e.containerInfo,kd=ni,e=_f(e),nc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var c=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var b=0,A=-1,L=-1,X=0,ee=0,se=e,W=null;t:for(;;){for(var Z;se!==a||c!==0&&se.nodeType!==3||(A=b+c),se!==f||r!==0&&se.nodeType!==3||(L=b+r),se.nodeType===3&&(b+=se.nodeValue.length),(Z=se.firstChild)!==null;)W=se,se=Z;for(;;){if(se===e)break t;if(W===a&&++X===c&&(A=b),W===f&&++ee===r&&(L=b),(Z=se.nextSibling)!==null)break;se=W,W=se.parentNode}se=Z}a=A===-1||L===-1?null:{start:A,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(jd={focusedElem:e,selectionRange:a},ni=!1,Kt=t;Kt!==null;)if(t=Kt,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Kt=e;else for(;Kt!==null;){switch(t=Kt,f=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=t,c=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Oe=Ns(a.type,c,a.elementType===a.type);e=r.getSnapshotBeforeUpdate(Oe,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(Re){ut(a,a.return,Re)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Od(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Od(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Kt=e;break}Kt=t.return}}function Dh(e,t,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Xn(e,a),r&4&&ro(5,a);break;case 1:if(Xn(e,a),r&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(b){ut(a,a.return,b)}else{var c=Ns(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(b){ut(a,a.return,b)}}r&64&&bh(a),r&512&&oo(a,a.return);break;case 3:if(Xn(e,a),r&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{rp(e,t)}catch(b){ut(a,a.return,b)}}break;case 27:t===null&&r&4&&xh(a);case 26:case 5:Xn(e,a),t===null&&r&4&&wh(a),r&512&&oo(a,a.return);break;case 12:Xn(e,a);break;case 13:Xn(e,a),r&4&&Ch(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Gv.bind(null,a),u0(e,a))));break;case 22:if(r=a.memoizedState!==null||kn,!r){t=t!==null&&t.memoizedState!==null||Ot,c=kn;var f=Ot;kn=r,(Ot=t)&&!f?Kn(e,a,(a.subtreeFlags&8772)!==0):Xn(e,a),kn=c,Ot=f}break;case 30:break;default:Xn(e,a)}}function Ah(e){var t=e.alternate;t!==null&&(e.alternate=null,Ah(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&_e(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var yt=null,Ea=!1;function jn(e,t,a){for(a=a.child;a!==null;)Th(e,t,a),a=a.sibling}function Th(e,t,a){if(xe&&typeof xe.onCommitFiberUnmount=="function")try{xe.onCommitFiberUnmount(Qt,a)}catch{}switch(a.tag){case 26:Ot||ln(a,t),jn(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ot||ln(a,t);var r=yt,c=Ea;ts(a.type)&&(yt=a.stateNode,Ea=!1),jn(e,t,a),go(a.stateNode),yt=r,Ea=c;break;case 5:Ot||ln(a,t);case 6:if(r=yt,c=Ea,yt=null,jn(e,t,a),yt=r,Ea=c,yt!==null)if(Ea)try{(yt.nodeType===9?yt.body:yt.nodeName==="HTML"?yt.ownerDocument.body:yt).removeChild(a.stateNode)}catch(f){ut(a,t,f)}else try{yt.removeChild(a.stateNode)}catch(f){ut(a,t,f)}break;case 18:yt!==null&&(Ea?(e=yt,hm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Do(e)):hm(yt,a.stateNode));break;case 4:r=yt,c=Ea,yt=a.stateNode.containerInfo,Ea=!0,jn(e,t,a),yt=r,Ea=c;break;case 0:case 11:case 14:case 15:Ot||Gn(2,a,t),Ot||Gn(4,a,t),jn(e,t,a);break;case 1:Ot||(ln(a,t),r=a.stateNode,typeof r.componentWillUnmount=="function"&&vh(a,t,r)),jn(e,t,a);break;case 21:jn(e,t,a);break;case 22:Ot=(r=Ot)||a.memoizedState!==null,jn(e,t,a),Ot=r;break;default:jn(e,t,a)}}function Ch(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Do(e)}catch(a){ut(t,t.return,a)}}function Uv(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sh),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sh),t;default:throw Error(l(435,e.tag))}}function od(e,t){var a=Uv(e);t.forEach(function(r){var c=Xv.bind(null,e,r);a.has(r)||(a.add(r),r.then(c,c))})}function ka(e,t){var a=t.deletions;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r],f=e,b=t,A=b;e:for(;A!==null;){switch(A.tag){case 27:if(ts(A.type)){yt=A.stateNode,Ea=!1;break e}break;case 5:yt=A.stateNode,Ea=!1;break e;case 3:case 4:yt=A.stateNode.containerInfo,Ea=!0;break e}A=A.return}if(yt===null)throw Error(l(160));Th(f,b,c),yt=null,Ea=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)Nh(t,e),t=t.sibling}var Ja=null;function Nh(e,t){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ka(t,e),ja(e),r&4&&(Gn(3,e,e.return),ro(3,e),Gn(5,e,e.return));break;case 1:ka(t,e),ja(e),r&512&&(Ot||a===null||ln(a,a.return)),r&64&&kn&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var c=Ja;if(ka(t,e),ja(e),r&512&&(Ot||a===null||ln(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(r){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ne]||f[pe]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(r),c.head.insertBefore(f,c.querySelector("head > title"))),na(f,r,a),f[pe]=e,Pt(f),r=f;break e;case"link":var b=xm("link","href",c).get(r+(a.href||""));if(b){for(var A=0;A<b.length;A++)if(f=b[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){b.splice(A,1);break t}}f=c.createElement(r),na(f,r,a),c.head.appendChild(f);break;case"meta":if(b=xm("meta","content",c).get(r+(a.content||""))){for(A=0;A<b.length;A++)if(f=b[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){b.splice(A,1);break t}}f=c.createElement(r),na(f,r,a),c.head.appendChild(f);break;default:throw Error(l(468,r))}f[pe]=e,Pt(f),r=f}e.stateNode=r}else Sm(c,e.type,e.stateNode);else e.stateNode=Em(c,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?Sm(c,e.type,e.stateNode):Em(c,r,e.memoizedProps)):r===null&&e.stateNode!==null&&ad(e,e.memoizedProps,a.memoizedProps)}break;case 27:ka(t,e),ja(e),r&512&&(Ot||a===null||ln(a,a.return)),a!==null&&r&4&&ad(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ka(t,e),ja(e),r&512&&(Ot||a===null||ln(a,a.return)),e.flags&32){c=e.stateNode;try{Fs(c,"")}catch(Z){ut(e,e.return,Z)}}r&4&&e.stateNode!=null&&(c=e.memoizedProps,ad(e,c,a!==null?a.memoizedProps:c)),r&1024&&(rd=!0);break;case 6:if(ka(t,e),ja(e),r&4){if(e.stateNode===null)throw Error(l(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Z){ut(e,e.return,Z)}}break;case 3:if(ei=null,c=Ja,Ja=Ql(t.containerInfo),ka(t,e),Ja=c,ja(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(Z){ut(e,e.return,Z)}rd&&(rd=!1,kh(e));break;case 4:r=Ja,Ja=Ql(e.stateNode.containerInfo),ka(t,e),ja(e),Ja=r;break;case 12:ka(t,e),ja(e);break;case 13:ka(t,e),ja(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(fd=fe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,od(e,r)));break;case 22:c=e.memoizedState!==null;var L=a!==null&&a.memoizedState!==null,X=kn,ee=Ot;if(kn=X||c,Ot=ee||L,ka(t,e),Ot=ee,kn=X,ja(e),r&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(a===null||L||kn||Ot||ks(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){L=a=t;try{if(f=L.stateNode,c)b=f.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{A=L.stateNode;var se=L.memoizedProps.style,W=se!=null&&se.hasOwnProperty("display")?se.display:null;A.style.display=W==null||typeof W=="boolean"?"":(""+W).trim()}}catch(Z){ut(L,L.return,Z)}}}else if(t.tag===6){if(a===null){L=t;try{L.stateNode.nodeValue=c?"":L.memoizedProps}catch(Z){ut(L,L.return,Z)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,od(e,a))));break;case 19:ka(t,e),ja(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,od(e,r)));break;case 30:break;case 21:break;default:ka(t,e),ja(e)}}function ja(e){var t=e.flags;if(t&2){try{for(var a,r=e.return;r!==null;){if(Eh(r)){a=r;break}r=r.return}if(a==null)throw Error(l(160));switch(a.tag){case 27:var c=a.stateNode,f=nd(e);Ul(e,f,c);break;case 5:var b=a.stateNode;a.flags&32&&(Fs(b,""),a.flags&=-33);var A=nd(e);Ul(e,A,b);break;case 3:case 4:var L=a.stateNode.containerInfo,X=nd(e);sd(e,X,L);break;default:throw Error(l(161))}}catch(ee){ut(e,e.return,ee)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kh(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;kh(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Dh(e,t.alternate,t),t=t.sibling}function ks(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gn(4,t,t.return),ks(t);break;case 1:ln(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&vh(t,t.return,a),ks(t);break;case 27:go(t.stateNode);case 26:case 5:ln(t,t.return),ks(t);break;case 22:t.memoizedState===null&&ks(t);break;case 30:ks(t);break;default:ks(t)}e=e.sibling}}function Kn(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var r=t.alternate,c=e,f=t,b=f.flags;switch(f.tag){case 0:case 11:case 15:Kn(c,f,a),ro(4,f);break;case 1:if(Kn(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(X){ut(r,r.return,X)}if(r=f,c=r.updateQueue,c!==null){var A=r.stateNode;try{var L=c.shared.hiddenCallbacks;if(L!==null)for(c.shared.hiddenCallbacks=null,c=0;c<L.length;c++)sp(L[c],A)}catch(X){ut(r,r.return,X)}}a&&b&64&&bh(f),oo(f,f.return);break;case 27:xh(f);case 26:case 5:Kn(c,f,a),a&&r===null&&b&4&&wh(f),oo(f,f.return);break;case 12:Kn(c,f,a);break;case 13:Kn(c,f,a),a&&b&4&&Ch(c,f);break;case 22:f.memoizedState===null&&Kn(c,f,a),oo(f,f.return);break;case 30:break;default:Kn(c,f,a)}t=t.sibling}}function ld(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vr(a))}function id(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vr(e))}function cn(e,t,a,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jh(e,t,a,r),t=t.sibling}function jh(e,t,a,r){var c=t.flags;switch(t.tag){case 0:case 11:case 15:cn(e,t,a,r),c&2048&&ro(9,t);break;case 1:cn(e,t,a,r);break;case 3:cn(e,t,a,r),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Vr(e)));break;case 12:if(c&2048){cn(e,t,a,r),e=t.stateNode;try{var f=t.memoizedProps,b=f.id,A=f.onPostCommit;typeof A=="function"&&A(b,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(L){ut(t,t.return,L)}}else cn(e,t,a,r);break;case 13:cn(e,t,a,r);break;case 23:break;case 22:f=t.stateNode,b=t.alternate,t.memoizedState!==null?f._visibility&2?cn(e,t,a,r):lo(e,t):f._visibility&2?cn(e,t,a,r):(f._visibility|=2,lr(e,t,a,r,(t.subtreeFlags&10256)!==0)),c&2048&&ld(b,t);break;case 24:cn(e,t,a,r),c&2048&&id(t.alternate,t);break;default:cn(e,t,a,r)}}function lr(e,t,a,r,c){for(c=c&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var f=e,b=t,A=a,L=r,X=b.flags;switch(b.tag){case 0:case 11:case 15:lr(f,b,A,L,c),ro(8,b);break;case 23:break;case 22:var ee=b.stateNode;b.memoizedState!==null?ee._visibility&2?lr(f,b,A,L,c):lo(f,b):(ee._visibility|=2,lr(f,b,A,L,c)),c&&X&2048&&ld(b.alternate,b);break;case 24:lr(f,b,A,L,c),c&&X&2048&&id(b.alternate,b);break;default:lr(f,b,A,L,c)}t=t.sibling}}function lo(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,r=t,c=r.flags;switch(r.tag){case 22:lo(a,r),c&2048&&ld(r.alternate,r);break;case 24:lo(a,r),c&2048&&id(r.alternate,r);break;default:lo(a,r)}t=t.sibling}}var io=8192;function ir(e){if(e.subtreeFlags&io)for(e=e.child;e!==null;)Rh(e),e=e.sibling}function Rh(e){switch(e.tag){case 26:ir(e),e.flags&io&&e.memoizedState!==null&&D0(Ja,e.memoizedState,e.memoizedProps);break;case 5:ir(e);break;case 3:case 4:var t=Ja;Ja=Ql(e.stateNode.containerInfo),ir(e),Ja=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=io,io=16777216,ir(e),io=t):ir(e));break;default:ir(e)}}function Lh(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function co(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];Kt=r,_h(r,e)}Lh(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Oh(e),e=e.sibling}function Oh(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&Gn(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,$l(e)):co(e);break;default:co(e)}}function $l(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var r=t[a];Kt=r,_h(r,e)}Lh(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gn(8,t,t.return),$l(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,$l(t));break;default:$l(t)}e=e.sibling}}function _h(e,t){for(;Kt!==null;){var a=Kt;switch(a.tag){case 0:case 11:case 15:Gn(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Vr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Kt=r;else e:for(a=e;Kt!==null;){r=Kt;var c=r.sibling,f=r.return;if(Ah(r),r===a){Kt=null;break e}if(c!==null){c.return=f,Kt=c;break e}Kt=f}}}var $v={getCacheForType:function(e){var t=ca(Ft),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Bv=typeof WeakMap=="function"?WeakMap:Map,st=0,ht=null,Ge=null,Qe=0,rt=0,Ra=null,Wn=!1,cr=!1,cd=!1,Rn=0,Nt=0,Zn=0,js=0,dd=0,Ga=0,dr=0,uo=null,xa=null,ud=!1,fd=0,Bl=1/0,Fl=null,Qn=null,aa=0,Jn=null,ur=null,fr=0,pd=0,hd=null,Ph=null,fo=0,md=null;function La(){if((st&2)!==0&&Qe!==0)return Qe&-Qe;if(V.T!==null){var e=Js;return e!==0?e:xd()}return pa()}function Mh(){Ga===0&&(Ga=(Qe&536870912)===0||tt?Da():536870912);var e=Ha.current;return e!==null&&(e.flags|=32),Ga}function Oa(e,t,a){(e===ht&&(rt===2||rt===9)||e.cancelPendingCommit!==null)&&(pr(e,0),es(e,Qe,Ga,!1)),Ia(e,a),((st&2)===0||e!==ht)&&(e===ht&&((st&2)===0&&(js|=a),Nt===4&&es(e,Qe,Ga,!1)),dn(e))}function qh(e,t,a){if((st&6)!==0)throw Error(l(327));var r=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Sa(e,t),c=r?Yv(e,t):bd(e,t,!0),f=r;do{if(c===0){cr&&!r&&es(e,t,0,!1);break}else{if(a=e.current.alternate,f&&!Fv(a)){c=bd(e,t,!1),f=!1;continue}if(c===2){if(f=t,e.errorRecoveryDisabledLanes&f)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){t=b;e:{var A=e;c=uo;var L=A.current.memoizedState.isDehydrated;if(L&&(pr(A,b).flags|=256),b=bd(A,b,!1),b!==2){if(cd&&!L){A.errorRecoveryDisabledLanes|=f,js|=f,c=4;break e}f=xa,xa=c,f!==null&&(xa===null?xa=f:xa.push.apply(xa,f))}c=b}if(f=!1,c!==2)continue}}if(c===1){pr(e,0),es(e,t,0,!0);break}e:{switch(r=e,f=c,f){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:es(r,t,Ga,!Wn);break e;case 2:xa=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(c=fd+300-fe(),10<c)){if(es(r,t,Ga,!Wn),Dt(r,0,!0)!==0)break e;r.timeoutHandle=fm(Ih.bind(null,r,a,xa,Fl,ud,t,Ga,js,dr,Wn,f,2,-0,0),c);break e}Ih(r,a,xa,Fl,ud,t,Ga,js,dr,Wn,f,0,-0,0)}}break}while(!0);dn(e)}function Ih(e,t,a,r,c,f,b,A,L,X,ee,se,W,Z){if(e.timeoutHandle=-1,se=t.subtreeFlags,(se&8192||(se&16785408)===16785408)&&(vo={stylesheets:null,count:0,unsuspend:S0},Rh(t),se=A0(),se!==null)){e.cancelPendingCommit=se(Vh.bind(null,e,t,f,a,r,c,b,A,L,ee,1,W,Z)),es(e,f,b,!X);return}Vh(e,t,f,a,r,c,b,A,L)}function Fv(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!Ca(f(),c))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function es(e,t,a,r){t&=~dd,t&=~js,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var c=t;0<c;){var f=31-nt(c),b=1<<f;r[f]=-1,c&=~b}a!==0&&Wa(e,a,t)}function zl(){return(st&6)===0?(po(0),!1):!0}function gd(){if(Ge!==null){if(rt===0)var e=Ge.return;else e=Ge,Sn=Ds=null,Oc(e),rr=null,ao=0,e=Ge;for(;e!==null;)yh(e.alternate,e),e=e.return;Ge=null}}function pr(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,o0(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),gd(),ht=e,Ge=a=wn(e.current,null),Qe=t,rt=0,Ra=null,Wn=!1,cr=Sa(e,t),cd=!1,dr=Ga=dd=js=Zn=Nt=0,xa=uo=null,ud=!1,(t&8)!==0&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var c=31-nt(r),f=1<<c;t|=e[c],r&=~f}return Rn=t,ul(),a}function Uh(e,t){Fe=null,V.H=jl,t===Gr||t===wl?(t=ap(),rt=3):t===Jf?(t=ap(),rt=4):rt=t===nh?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ra=t,Ge===null&&(Nt=1,Pl(e,Fa(t,e.current)))}function $h(){var e=V.H;return V.H=jl,e===null?jl:e}function Bh(){var e=V.A;return V.A=$v,e}function yd(){Nt=4,Wn||(Qe&4194048)!==Qe&&Ha.current!==null||(cr=!0),(Zn&134217727)===0&&(js&134217727)===0||ht===null||es(ht,Qe,Ga,!1)}function bd(e,t,a){var r=st;st|=2;var c=$h(),f=Bh();(ht!==e||Qe!==t)&&(Fl=null,pr(e,t)),t=!1;var b=Nt;e:do try{if(rt!==0&&Ge!==null){var A=Ge,L=Ra;switch(rt){case 8:gd(),b=6;break e;case 3:case 2:case 9:case 6:Ha.current===null&&(t=!0);var X=rt;if(rt=0,Ra=null,hr(e,A,L,X),a&&cr){b=0;break e}break;default:X=rt,rt=0,Ra=null,hr(e,A,L,X)}}zv(),b=Nt;break}catch(ee){Uh(e,ee)}while(!0);return t&&e.shellSuspendCounter++,Sn=Ds=null,st=r,V.H=c,V.A=f,Ge===null&&(ht=null,Qe=0,ul()),b}function zv(){for(;Ge!==null;)Fh(Ge)}function Yv(e,t){var a=st;st|=2;var r=$h(),c=Bh();ht!==e||Qe!==t?(Fl=null,Bl=fe()+500,pr(e,t)):cr=Sa(e,t);e:do try{if(rt!==0&&Ge!==null){t=Ge;var f=Ra;t:switch(rt){case 1:rt=0,Ra=null,hr(e,t,f,1);break;case 2:case 9:if(ep(f)){rt=0,Ra=null,zh(t);break}t=function(){rt!==2&&rt!==9||ht!==e||(rt=7),dn(e)},f.then(t,t);break e;case 3:rt=7;break e;case 4:rt=5;break e;case 7:ep(f)?(rt=0,Ra=null,zh(t)):(rt=0,Ra=null,hr(e,t,f,7));break;case 5:var b=null;switch(Ge.tag){case 26:b=Ge.memoizedState;case 5:case 27:var A=Ge;if(!b||Dm(b)){rt=0,Ra=null;var L=A.sibling;if(L!==null)Ge=L;else{var X=A.return;X!==null?(Ge=X,Yl(X)):Ge=null}break t}}rt=0,Ra=null,hr(e,t,f,5);break;case 6:rt=0,Ra=null,hr(e,t,f,6);break;case 8:gd(),Nt=6;break e;default:throw Error(l(462))}}Vv();break}catch(ee){Uh(e,ee)}while(!0);return Sn=Ds=null,V.H=r,V.A=c,st=a,Ge!==null?0:(ht=null,Qe=0,ul(),Nt)}function Vv(){for(;Ge!==null&&!$();)Fh(Ge)}function Fh(e){var t=mh(e.alternate,e,Rn);e.memoizedProps=e.pendingProps,t===null?Yl(e):Ge=t}function zh(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ch(a,t,t.pendingProps,t.type,void 0,Qe);break;case 11:t=ch(a,t,t.pendingProps,t.type.render,t.ref,Qe);break;case 5:Oc(t);default:yh(a,t),t=Ge=Yf(t,Rn),t=mh(a,t,Rn)}e.memoizedProps=e.pendingProps,t===null?Yl(e):Ge=t}function hr(e,t,a,r){Sn=Ds=null,Oc(t),rr=null,ao=0;var c=t.return;try{if(_v(e,c,t,a,Qe)){Nt=1,Pl(e,Fa(a,e.current)),Ge=null;return}}catch(f){if(c!==null)throw Ge=c,f;Nt=1,Pl(e,Fa(a,e.current)),Ge=null;return}t.flags&32768?(tt||r===1?e=!0:cr||(Qe&536870912)!==0?e=!1:(Wn=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ha.current,r!==null&&r.tag===13&&(r.flags|=16384))),Yh(t,e)):Yl(t)}function Yl(e){var t=e;do{if((t.flags&32768)!==0){Yh(t,Wn);return}e=t.return;var a=Mv(t.alternate,t,Rn);if(a!==null){Ge=a;return}if(t=t.sibling,t!==null){Ge=t;return}Ge=t=e}while(t!==null);Nt===0&&(Nt=5)}function Yh(e,t){do{var a=qv(e.alternate,e);if(a!==null){a.flags&=32767,Ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){Ge=e;return}Ge=e=a}while(e!==null);Nt=6,Ge=null}function Vh(e,t,a,r,c,f,b,A,L){e.cancelPendingCommit=null;do Vl();while(aa!==0);if((st&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(f=t.lanes|t.childLanes,f|=ic,ia(e,a,f,b,A,L),e===ht&&(Ge=ht=null,Qe=0),ur=t,Jn=e,fr=a,pd=f,hd=c,Ph=r,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Kv(me,function(){return Wh(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||r){r=V.T,V.T=null,c=re.p,re.p=2,b=st,st|=4;try{Iv(e,t,a)}finally{st=b,re.p=c,V.T=r}}aa=1,Hh(),Gh(),Xh()}}function Hh(){if(aa===1){aa=0;var e=Jn,t=ur,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=V.T,V.T=null;var r=re.p;re.p=2;var c=st;st|=4;try{Nh(t,e);var f=jd,b=_f(e.containerInfo),A=f.focusedElem,L=f.selectionRange;if(b!==A&&A&&A.ownerDocument&&Of(A.ownerDocument.documentElement,A)){if(L!==null&&nc(A)){var X=L.start,ee=L.end;if(ee===void 0&&(ee=X),"selectionStart"in A)A.selectionStart=X,A.selectionEnd=Math.min(ee,A.value.length);else{var se=A.ownerDocument||document,W=se&&se.defaultView||window;if(W.getSelection){var Z=W.getSelection(),Oe=A.textContent.length,Re=Math.min(L.start,Oe),dt=L.end===void 0?Re:Math.min(L.end,Oe);!Z.extend&&Re>dt&&(b=dt,dt=Re,Re=b);var z=Lf(A,Re),I=Lf(A,dt);if(z&&I&&(Z.rangeCount!==1||Z.anchorNode!==z.node||Z.anchorOffset!==z.offset||Z.focusNode!==I.node||Z.focusOffset!==I.offset)){var H=se.createRange();H.setStart(z.node,z.offset),Z.removeAllRanges(),Re>dt?(Z.addRange(H),Z.extend(I.node,I.offset)):(H.setEnd(I.node,I.offset),Z.addRange(H))}}}}for(se=[],Z=A;Z=Z.parentNode;)Z.nodeType===1&&se.push({element:Z,left:Z.scrollLeft,top:Z.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<se.length;A++){var ae=se[A];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}ni=!!kd,jd=kd=null}finally{st=c,re.p=r,V.T=a}}e.current=t,aa=2}}function Gh(){if(aa===2){aa=0;var e=Jn,t=ur,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=V.T,V.T=null;var r=re.p;re.p=2;var c=st;st|=4;try{Dh(e,t.alternate,t)}finally{st=c,re.p=r,V.T=a}}aa=3}}function Xh(){if(aa===4||aa===3){aa=0,ie();var e=Jn,t=ur,a=fr,r=Ph;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?aa=5:(aa=0,ur=Jn=null,Kh(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Qn=null),fa(a),t=t.stateNode,xe&&typeof xe.onCommitFiberRoot=="function")try{xe.onCommitFiberRoot(Qt,t,void 0,(t.current.flags&128)===128)}catch{}if(r!==null){t=V.T,c=re.p,re.p=2,V.T=null;try{for(var f=e.onRecoverableError,b=0;b<r.length;b++){var A=r[b];f(A.value,{componentStack:A.stack})}}finally{V.T=t,re.p=c}}(fr&3)!==0&&Vl(),dn(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===md?fo++:(fo=0,md=e):fo=0,po(0)}}function Kh(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Vr(t)))}function Vl(e){return Hh(),Gh(),Xh(),Wh()}function Wh(){if(aa!==5)return!1;var e=Jn,t=pd;pd=0;var a=fa(fr),r=V.T,c=re.p;try{re.p=32>a?32:a,V.T=null,a=hd,hd=null;var f=Jn,b=fr;if(aa=0,ur=Jn=null,fr=0,(st&6)!==0)throw Error(l(331));var A=st;if(st|=4,Oh(f.current),jh(f,f.current,b,a),st=A,po(0,!1),xe&&typeof xe.onPostCommitFiberRoot=="function")try{xe.onPostCommitFiberRoot(Qt,f)}catch{}return!0}finally{re.p=c,V.T=r,Kh(e,t)}}function Zh(e,t,a){t=Fa(a,t),t=Gc(e.stateNode,t,2),e=zn(e,t,2),e!==null&&(Ia(e,2),dn(e))}function ut(e,t,a){if(e.tag===3)Zh(e,e,a);else for(;t!==null;){if(t.tag===3){Zh(t,e,a);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){e=Fa(a,e),a=th(2),r=zn(t,a,2),r!==null&&(ah(a,r,t,e),Ia(r,2),dn(r));break}}t=t.return}}function vd(e,t,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Bv;var c=new Set;r.set(t,c)}else c=r.get(t),c===void 0&&(c=new Set,r.set(t,c));c.has(a)||(cd=!0,c.add(a),e=Hv.bind(null,e,t,a),t.then(e,e))}function Hv(e,t,a){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ht===e&&(Qe&a)===a&&(Nt===4||Nt===3&&(Qe&62914560)===Qe&&300>fe()-fd?(st&2)===0&&pr(e,0):dd|=a,dr===Qe&&(dr=0)),dn(e)}function Qh(e,t){t===0&&(t=_t()),e=Ks(e,t),e!==null&&(Ia(e,t),dn(e))}function Gv(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Qh(e,a)}function Xv(e,t){var a=0;switch(e.tag){case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(l(314))}r!==null&&r.delete(t),Qh(e,a)}function Kv(e,t){return vt(e,t)}var Hl=null,mr=null,wd=!1,Gl=!1,Ed=!1,Rs=0;function dn(e){e!==mr&&e.next===null&&(mr===null?Hl=mr=e:mr=mr.next=e),Gl=!0,wd||(wd=!0,Zv())}function po(e,t){if(!Ed&&Gl){Ed=!0;do for(var a=!1,r=Hl;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var b=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-nt(42|e)+1)-1,f&=c&~(b&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,am(r,f))}else f=Qe,f=Dt(r,r===ht?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Sa(r,f)||(a=!0,am(r,f));r=r.next}while(a);Ed=!1}}function Wv(){Jh()}function Jh(){Gl=wd=!1;var e=0;Rs!==0&&(r0()&&(e=Rs),Rs=0);for(var t=fe(),a=null,r=Hl;r!==null;){var c=r.next,f=em(r,t);f===0?(r.next=null,a===null?Hl=c:a.next=c,c===null&&(mr=a)):(a=r,(e!==0||(f&3)!==0)&&(Gl=!0)),r=c}po(e)}function em(e,t){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var b=31-nt(f),A=1<<b,L=c[b];L===-1?((A&a)===0||(A&r)!==0)&&(c[b]=la(A,t)):L<=t&&(e.expiredLanes|=A),f&=~A}if(t=ht,a=Qe,a=Dt(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===t&&(rt===2||rt===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ua(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Sa(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(r!==null&&ua(r),fa(a)){case 2:case 8:a=je;break;case 32:a=me;break;case 268435456:a=Be;break;default:a=me}return r=tm.bind(null,e),a=vt(a,r),e.callbackPriority=t,e.callbackNode=a,t}return r!==null&&r!==null&&ua(r),e.callbackPriority=2,e.callbackNode=null,2}function tm(e,t){if(aa!==0&&aa!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Vl()&&e.callbackNode!==a)return null;var r=Qe;return r=Dt(e,e===ht?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(qh(e,r,t),em(e,fe()),e.callbackNode!=null&&e.callbackNode===a?tm.bind(null,e):null)}function am(e,t){if(Vl())return null;qh(e,t,!0)}function Zv(){l0(function(){(st&6)!==0?vt(de,Wv):Jh()})}function xd(){return Rs===0&&(Rs=Da()),Rs}function nm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:sl(""+e)}function sm(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Qv(e,t,a,r,c){if(t==="submit"&&a&&a.stateNode===c){var f=nm((c[Ee]||null).action),b=r.submitter;b&&(t=(t=b[Ee]||null)?nm(t.formAction):b.getAttribute("formAction"),t!==null&&(f=t,b=null));var A=new il("action","action",null,r,c);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Rs!==0){var L=b?sm(c,b):new FormData(c);Fc(a,{pending:!0,data:L,method:c.method,action:f},null,L)}}else typeof f=="function"&&(A.preventDefault(),L=b?sm(c,b):new FormData(c),Fc(a,{pending:!0,data:L,method:c.method,action:f},f,L))},currentTarget:c}]})}}for(var Sd=0;Sd<lc.length;Sd++){var Dd=lc[Sd],Jv=Dd.toLowerCase(),e0=Dd[0].toUpperCase()+Dd.slice(1);Qa(Jv,"on"+e0)}Qa(qf,"onAnimationEnd"),Qa(If,"onAnimationIteration"),Qa(Uf,"onAnimationStart"),Qa("dblclick","onDoubleClick"),Qa("focusin","onFocus"),Qa("focusout","onBlur"),Qa(yv,"onTransitionRun"),Qa(bv,"onTransitionStart"),Qa(vv,"onTransitionCancel"),Qa($f,"onTransitionEnd"),ve("onMouseEnter",["mouseout","mouseover"]),ve("onMouseLeave",["mouseout","mouseover"]),ve("onPointerEnter",["pointerout","pointerover"]),ve("onPointerLeave",["pointerout","pointerover"]),bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),bn("onBeforeInput",["compositionend","keypress","textInput","paste"]),bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function rm(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;e:{var f=void 0;if(t)for(var b=r.length-1;0<=b;b--){var A=r[b],L=A.instance,X=A.currentTarget;if(A=A.listener,L!==f&&c.isPropagationStopped())break e;f=A,c.currentTarget=X;try{f(c)}catch(ee){_l(ee)}c.currentTarget=null,f=L}else for(b=0;b<r.length;b++){if(A=r[b],L=A.instance,X=A.currentTarget,A=A.listener,L!==f&&c.isPropagationStopped())break e;f=A,c.currentTarget=X;try{f(c)}catch(ee){_l(ee)}c.currentTarget=null,f=L}}}}function Xe(e,t){var a=t[Y];a===void 0&&(a=t[Y]=new Set);var r=e+"__bubble";a.has(r)||(om(t,e,2,!1),a.add(r))}function Ad(e,t,a){var r=0;t&&(r|=4),om(a,e,r,t)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Td(e){if(!e[Xl]){e[Xl]=!0,Rr.forEach(function(a){a!=="selectionchange"&&(t0.has(a)||Ad(a,!1,e),Ad(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xl]||(t[Xl]=!0,Ad("selectionchange",!1,t))}}function om(e,t,a,r){switch(jm(t)){case 2:var c=N0;break;case 8:c=k0;break;default:c=$d}a=c.bind(null,t,a,e),c=void 0,!Xi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(t,a,{capture:!0,passive:c}):e.addEventListener(t,a,!0):c!==void 0?e.addEventListener(t,a,{passive:c}):e.addEventListener(t,a,!1)}function Cd(e,t,a,r,c){var f=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var b=r.tag;if(b===3||b===4){var A=r.stateNode.containerInfo;if(A===c)break;if(b===4)for(b=r.return;b!==null;){var L=b.tag;if((L===3||L===4)&&b.stateNode.containerInfo===c)return;b=b.return}for(;A!==null;){if(b=Ue(A),b===null)return;if(L=b.tag,L===5||L===6||L===26||L===27){r=f=b;continue e}A=A.parentNode}}r=r.return}pf(function(){var X=f,ee=Hi(a),se=[];e:{var W=Bf.get(e);if(W!==void 0){var Z=il,Oe=e;switch(e){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":Z=Kb;break;case"focusin":Oe="focus",Z=Qi;break;case"focusout":Oe="blur",Z=Qi;break;case"beforeblur":case"afterblur":Z=Qi;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Z=gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Z=qb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Z=Qb;break;case qf:case If:case Uf:Z=$b;break;case $f:Z=ev;break;case"scroll":case"scrollend":Z=Pb;break;case"wheel":Z=av;break;case"copy":case"cut":case"paste":Z=Fb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Z=bf;break;case"toggle":case"beforetoggle":Z=sv}var Re=(t&4)!==0,dt=!Re&&(e==="scroll"||e==="scrollend"),z=Re?W!==null?W+"Capture":null:W;Re=[];for(var I=X,H;I!==null;){var ae=I;if(H=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||H===null||z===null||(ae=Lr(I,z),ae!=null&&Re.push(mo(I,ae,H))),dt)break;I=I.return}0<Re.length&&(W=new Z(W,Oe,null,a,ee),se.push({event:W,listeners:Re}))}}if((t&7)===0){e:{if(W=e==="mouseover"||e==="pointerover",Z=e==="mouseout"||e==="pointerout",W&&a!==Vi&&(Oe=a.relatedTarget||a.fromElement)&&(Ue(Oe)||Oe[C]))break e;if((Z||W)&&(W=ee.window===ee?ee:(W=ee.ownerDocument)?W.defaultView||W.parentWindow:window,Z?(Oe=a.relatedTarget||a.toElement,Z=X,Oe=Oe?Ue(Oe):null,Oe!==null&&(dt=p(Oe),Re=Oe.tag,Oe!==dt||Re!==5&&Re!==27&&Re!==6)&&(Oe=null)):(Z=null,Oe=X),Z!==Oe)){if(Re=gf,ae="onMouseLeave",z="onMouseEnter",I="mouse",(e==="pointerout"||e==="pointerover")&&(Re=bf,ae="onPointerLeave",z="onPointerEnter",I="pointer"),dt=Z==null?W:ea(Z),H=Oe==null?W:ea(Oe),W=new Re(ae,I+"leave",Z,a,ee),W.target=dt,W.relatedTarget=H,ae=null,Ue(ee)===X&&(Re=new Re(z,I+"enter",Oe,a,ee),Re.target=H,Re.relatedTarget=dt,ae=Re),dt=ae,Z&&Oe)t:{for(Re=Z,z=Oe,I=0,H=Re;H;H=gr(H))I++;for(H=0,ae=z;ae;ae=gr(ae))H++;for(;0<I-H;)Re=gr(Re),I--;for(;0<H-I;)z=gr(z),H--;for(;I--;){if(Re===z||z!==null&&Re===z.alternate)break t;Re=gr(Re),z=gr(z)}Re=null}else Re=null;Z!==null&&lm(se,W,Z,Re,!1),Oe!==null&&dt!==null&&lm(se,dt,Oe,Re,!0)}}e:{if(W=X?ea(X):window,Z=W.nodeName&&W.nodeName.toLowerCase(),Z==="select"||Z==="input"&&W.type==="file")var Se=Tf;else if(Df(W))if(Cf)Se=hv;else{Se=fv;var Ve=uv}else Z=W.nodeName,!Z||Z.toLowerCase()!=="input"||W.type!=="checkbox"&&W.type!=="radio"?X&&Yi(X.elementType)&&(Se=Tf):Se=pv;if(Se&&(Se=Se(e,X))){Af(se,Se,a,ee);break e}Ve&&Ve(e,W,X),e==="focusout"&&X&&W.type==="number"&&X.memoizedProps.value!=null&&zi(W,"number",W.value)}switch(Ve=X?ea(X):window,e){case"focusin":(Df(Ve)||Ve.contentEditable==="true")&&(Hs=Ve,sc=X,$r=null);break;case"focusout":$r=sc=Hs=null;break;case"mousedown":rc=!0;break;case"contextmenu":case"mouseup":case"dragend":rc=!1,Pf(se,a,ee);break;case"selectionchange":if(gv)break;case"keydown":case"keyup":Pf(se,a,ee)}var ke;if(ec)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Vs?xf(e,a)&&(Le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Le="onCompositionStart");Le&&(vf&&a.locale!=="ko"&&(Vs||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Vs&&(ke=hf()):(Un=ee,Ki="value"in Un?Un.value:Un.textContent,Vs=!0)),Ve=Kl(X,Le),0<Ve.length&&(Le=new yf(Le,e,null,a,ee),se.push({event:Le,listeners:Ve}),ke?Le.data=ke:(ke=Sf(a),ke!==null&&(Le.data=ke)))),(ke=ov?lv(e,a):iv(e,a))&&(Le=Kl(X,"onBeforeInput"),0<Le.length&&(Ve=new yf("onBeforeInput","beforeinput",null,a,ee),se.push({event:Ve,listeners:Le}),Ve.data=ke)),Qv(se,e,X,a,ee)}rm(se,t)})}function mo(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Kl(e,t){for(var a=t+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Lr(e,a),c!=null&&r.unshift(mo(e,c,f)),c=Lr(e,t),c!=null&&r.push(mo(e,c,f))),e.tag===3)return r;e=e.return}return[]}function gr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lm(e,t,a,r,c){for(var f=t._reactName,b=[];a!==null&&a!==r;){var A=a,L=A.alternate,X=A.stateNode;if(A=A.tag,L!==null&&L===r)break;A!==5&&A!==26&&A!==27||X===null||(L=X,c?(X=Lr(a,f),X!=null&&b.unshift(mo(a,X,L))):c||(X=Lr(a,f),X!=null&&b.push(mo(a,X,L)))),a=a.return}b.length!==0&&e.push({event:t,listeners:b})}var a0=/\r\n?/g,n0=/\u0000|\uFFFD/g;function im(e){return(typeof e=="string"?e:""+e).replace(a0,`
`).replace(n0,"")}function cm(e,t){return t=im(t),im(e)===t}function Wl(){}function ct(e,t,a,r,c,f){switch(a){case"children":typeof r=="string"?t==="body"||t==="textarea"&&r===""||Fs(e,r):(typeof r=="number"||typeof r=="bigint")&&t!=="body"&&Fs(e,""+r);break;case"className":sn(e,"class",r);break;case"tabIndex":sn(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":sn(e,a,r);break;case"style":uf(e,r,f);break;case"data":if(t!=="object"){sn(e,"data",r);break}case"src":case"href":if(r===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=sl(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(t!=="input"&&ct(e,t,"name",c.name,c,null),ct(e,t,"formEncType",c.formEncType,c,null),ct(e,t,"formMethod",c.formMethod,c,null),ct(e,t,"formTarget",c.formTarget,c,null)):(ct(e,t,"encType",c.encType,c,null),ct(e,t,"method",c.method,c,null),ct(e,t,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=sl(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Wl);break;case"onScroll":r!=null&&Xe("scroll",e);break;case"onScrollEnd":r!=null&&Xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=sl(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Xe("beforetoggle",e),Xe("toggle",e),ha(e,"popover",r);break;case"xlinkActuate":Tt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Tt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Tt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Tt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Tt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Tt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Tt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ha(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ob.get(a)||a,ha(e,a,r))}}function Nd(e,t,a,r,c,f){switch(a){case"style":uf(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(l(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Fs(e,r):(typeof r=="number"||typeof r=="bigint")&&Fs(e,""+r);break;case"onScroll":r!=null&&Xe("scroll",e);break;case"onScrollEnd":r!=null&&Xe("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!In.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),t=a.slice(2,c?a.length-7:void 0),f=e[Ee]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(t,f,c),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,r,c);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ha(e,a,r)}}}function na(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xe("error",e),Xe("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var b=a[f];if(b!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ct(e,t,f,b,a,null)}}c&&ct(e,t,"srcSet",a.srcSet,a,null),r&&ct(e,t,"src",a.src,a,null);return;case"input":Xe("invalid",e);var A=f=b=c=null,L=null,X=null;for(r in a)if(a.hasOwnProperty(r)){var ee=a[r];if(ee!=null)switch(r){case"name":c=ee;break;case"type":b=ee;break;case"checked":L=ee;break;case"defaultChecked":X=ee;break;case"value":f=ee;break;case"defaultValue":A=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(l(137,t));break;default:ct(e,t,r,ee,a,null)}}of(e,f,A,L,X,b,c,!1),al(e);return;case"select":Xe("invalid",e),r=b=f=null;for(c in a)if(a.hasOwnProperty(c)&&(A=a[c],A!=null))switch(c){case"value":f=A;break;case"defaultValue":b=A;break;case"multiple":r=A;default:ct(e,t,c,A,a,null)}t=f,a=b,e.multiple=!!r,t!=null?Bs(e,!!r,t,!1):a!=null&&Bs(e,!!r,a,!0);return;case"textarea":Xe("invalid",e),f=c=r=null;for(b in a)if(a.hasOwnProperty(b)&&(A=a[b],A!=null))switch(b){case"value":r=A;break;case"defaultValue":c=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(l(91));break;default:ct(e,t,b,A,a,null)}cf(e,r,c,f),al(e);return;case"option":for(L in a)a.hasOwnProperty(L)&&(r=a[L],r!=null)&&(L==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":ct(e,t,L,r,a,null));return;case"dialog":Xe("beforetoggle",e),Xe("toggle",e),Xe("cancel",e),Xe("close",e);break;case"iframe":case"object":Xe("load",e);break;case"video":case"audio":for(r=0;r<ho.length;r++)Xe(ho[r],e);break;case"image":Xe("error",e),Xe("load",e);break;case"details":Xe("toggle",e);break;case"embed":case"source":case"link":Xe("error",e),Xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in a)if(a.hasOwnProperty(X)&&(r=a[X],r!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:ct(e,t,X,r,a,null)}return;default:if(Yi(t)){for(ee in a)a.hasOwnProperty(ee)&&(r=a[ee],r!==void 0&&Nd(e,t,ee,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&ct(e,t,A,r,a,null))}function s0(e,t,a,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,b=null,A=null,L=null,X=null,ee=null;for(Z in a){var se=a[Z];if(a.hasOwnProperty(Z)&&se!=null)switch(Z){case"checked":break;case"value":break;case"defaultValue":L=se;default:r.hasOwnProperty(Z)||ct(e,t,Z,null,r,se)}}for(var W in r){var Z=r[W];if(se=a[W],r.hasOwnProperty(W)&&(Z!=null||se!=null))switch(W){case"type":f=Z;break;case"name":c=Z;break;case"checked":X=Z;break;case"defaultChecked":ee=Z;break;case"value":b=Z;break;case"defaultValue":A=Z;break;case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(l(137,t));break;default:Z!==se&&ct(e,t,W,Z,r,se)}}Fi(e,b,A,L,X,ee,f,c);return;case"select":Z=b=A=W=null;for(f in a)if(L=a[f],a.hasOwnProperty(f)&&L!=null)switch(f){case"value":break;case"multiple":Z=L;default:r.hasOwnProperty(f)||ct(e,t,f,null,r,L)}for(c in r)if(f=r[c],L=a[c],r.hasOwnProperty(c)&&(f!=null||L!=null))switch(c){case"value":W=f;break;case"defaultValue":A=f;break;case"multiple":b=f;default:f!==L&&ct(e,t,c,f,r,L)}t=A,a=b,r=Z,W!=null?Bs(e,!!a,W,!1):!!r!=!!a&&(t!=null?Bs(e,!!a,t,!0):Bs(e,!!a,a?[]:"",!1));return;case"textarea":Z=W=null;for(A in a)if(c=a[A],a.hasOwnProperty(A)&&c!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ct(e,t,A,null,r,c)}for(b in r)if(c=r[b],f=a[b],r.hasOwnProperty(b)&&(c!=null||f!=null))switch(b){case"value":W=c;break;case"defaultValue":Z=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==f&&ct(e,t,b,c,r,f)}lf(e,W,Z);return;case"option":for(var Oe in a)W=a[Oe],a.hasOwnProperty(Oe)&&W!=null&&!r.hasOwnProperty(Oe)&&(Oe==="selected"?e.selected=!1:ct(e,t,Oe,null,r,W));for(L in r)W=r[L],Z=a[L],r.hasOwnProperty(L)&&W!==Z&&(W!=null||Z!=null)&&(L==="selected"?e.selected=W&&typeof W!="function"&&typeof W!="symbol":ct(e,t,L,W,r,Z));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Re in a)W=a[Re],a.hasOwnProperty(Re)&&W!=null&&!r.hasOwnProperty(Re)&&ct(e,t,Re,null,r,W);for(X in r)if(W=r[X],Z=a[X],r.hasOwnProperty(X)&&W!==Z&&(W!=null||Z!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(l(137,t));break;default:ct(e,t,X,W,r,Z)}return;default:if(Yi(t)){for(var dt in a)W=a[dt],a.hasOwnProperty(dt)&&W!==void 0&&!r.hasOwnProperty(dt)&&Nd(e,t,dt,void 0,r,W);for(ee in r)W=r[ee],Z=a[ee],!r.hasOwnProperty(ee)||W===Z||W===void 0&&Z===void 0||Nd(e,t,ee,W,r,Z);return}}for(var z in a)W=a[z],a.hasOwnProperty(z)&&W!=null&&!r.hasOwnProperty(z)&&ct(e,t,z,null,r,W);for(se in r)W=r[se],Z=a[se],!r.hasOwnProperty(se)||W===Z||W==null&&Z==null||ct(e,t,se,W,r,Z)}var kd=null,jd=null;function Zl(e){return e.nodeType===9?e:e.ownerDocument}function dm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function um(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Rd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ld=null;function r0(){var e=window.event;return e&&e.type==="popstate"?e===Ld?!1:(Ld=e,!0):(Ld=null,!1)}var fm=typeof setTimeout=="function"?setTimeout:void 0,o0=typeof clearTimeout=="function"?clearTimeout:void 0,pm=typeof Promise=="function"?Promise:void 0,l0=typeof queueMicrotask=="function"?queueMicrotask:typeof pm<"u"?function(e){return pm.resolve(null).then(e).catch(i0)}:fm;function i0(e){setTimeout(function(){throw e})}function ts(e){return e==="head"}function hm(e,t){var a=t,r=0,c=0;do{var f=a.nextSibling;if(e.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(0<r&&8>r){a=r;var b=e.ownerDocument;if(a&1&&go(b.documentElement),a&2&&go(b.body),a&4)for(a=b.head,go(a),b=a.firstChild;b;){var A=b.nextSibling,L=b.nodeName;b[Ne]||L==="SCRIPT"||L==="STYLE"||L==="LINK"&&b.rel.toLowerCase()==="stylesheet"||a.removeChild(b),b=A}}if(c===0){e.removeChild(f),Do(t);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:r=a.charCodeAt(0)-48;else r=0;a=f}while(a);Do(t)}function Od(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Od(a),_e(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function c0(e,t,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ne])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=en(e.nextSibling),e===null)break}return null}function d0(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=en(e.nextSibling),e===null))return null;return e}function _d(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function u0(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var r=function(){t(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function en(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var Pd=null;function mm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function gm(e,t,a){switch(t=Zl(a),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function go(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);_e(e)}var Xa=new Map,ym=new Set;function Ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ln=re.d;re.d={f:f0,r:p0,D:h0,C:m0,L:g0,m:y0,X:v0,S:b0,M:w0};function f0(){var e=Ln.f(),t=zl();return e||t}function p0(e){var t=wt(e);t!==null&&t.tag===5&&t.type==="form"?qp(t):Ln.r(e)}var yr=typeof document>"u"?null:document;function bm(e,t,a){var r=yr;if(r&&typeof t=="string"&&t){var c=Ba(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),ym.has(c)||(ym.add(c),e={rel:e,crossOrigin:a,href:t},r.querySelector(c)===null&&(t=r.createElement("link"),na(t,"link",e),Pt(t),r.head.appendChild(t)))}}function h0(e){Ln.D(e),bm("dns-prefetch",e,null)}function m0(e,t){Ln.C(e,t),bm("preconnect",e,t)}function g0(e,t,a){Ln.L(e,t,a);var r=yr;if(r&&e&&t){var c='link[rel="preload"][as="'+Ba(t)+'"]';t==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ba(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ba(a.imageSizes)+'"]')):c+='[href="'+Ba(e)+'"]';var f=c;switch(t){case"style":f=br(e);break;case"script":f=vr(e)}Xa.has(f)||(e=g({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Xa.set(f,e),r.querySelector(c)!==null||t==="style"&&r.querySelector(yo(f))||t==="script"&&r.querySelector(bo(f))||(t=r.createElement("link"),na(t,"link",e),Pt(t),r.head.appendChild(t)))}}function y0(e,t){Ln.m(e,t);var a=yr;if(a&&e){var r=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Ba(r)+'"][href="'+Ba(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=vr(e)}if(!Xa.has(f)&&(e=g({rel:"modulepreload",href:e},t),Xa.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}r=a.createElement("link"),na(r,"link",e),Pt(r),a.head.appendChild(r)}}}function b0(e,t,a){Ln.S(e,t,a);var r=yr;if(r&&e){var c=Aa(r).hoistableStyles,f=br(e);t=t||"default";var b=c.get(f);if(!b){var A={loading:0,preload:null};if(b=r.querySelector(yo(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Xa.get(f))&&Md(e,a);var L=b=r.createElement("link");Pt(L),na(L,"link",e),L._p=new Promise(function(X,ee){L.onload=X,L.onerror=ee}),L.addEventListener("load",function(){A.loading|=1}),L.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Jl(b,t,r)}b={type:"stylesheet",instance:b,count:1,state:A},c.set(f,b)}}}function v0(e,t){Ln.X(e,t);var a=yr;if(a&&e){var r=Aa(a).hoistableScripts,c=vr(e),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(e=g({src:e,async:!0},t),(t=Xa.get(c))&&qd(e,t),f=a.createElement("script"),Pt(f),na(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function w0(e,t){Ln.M(e,t);var a=yr;if(a&&e){var r=Aa(a).hoistableScripts,c=vr(e),f=r.get(c);f||(f=a.querySelector(bo(c)),f||(e=g({src:e,async:!0,type:"module"},t),(t=Xa.get(c))&&qd(e,t),f=a.createElement("script"),Pt(f),na(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function vm(e,t,a,r){var c=(c=be.current)?Ql(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=br(a.href),a=Aa(c).hoistableStyles,r=a.get(t),r||(r={type:"style",instance:null,count:0,state:null},a.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=br(a.href);var f=Aa(c).hoistableStyles,b=f.get(e);if(b||(c=c.ownerDocument||c,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,b),(f=c.querySelector(yo(e)))&&!f._p&&(b.instance=f,b.state.loading=5),Xa.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xa.set(e,a),f||E0(c,e,a,b.state))),t&&r===null)throw Error(l(528,""));return b}if(t&&r!==null)throw Error(l(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=vr(a),a=Aa(c).hoistableScripts,r=a.get(t),r||(r={type:"script",instance:null,count:0,state:null},a.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function br(e){return'href="'+Ba(e)+'"'}function yo(e){return'link[rel="stylesheet"]['+e+"]"}function wm(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function E0(e,t,a,r){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?r.loading=1:(t=e.createElement("link"),r.preload=t,t.addEventListener("load",function(){return r.loading|=1}),t.addEventListener("error",function(){return r.loading|=2}),na(t,"link",a),Pt(t),e.head.appendChild(t))}function vr(e){return'[src="'+Ba(e)+'"]'}function bo(e){return"script[async]"+e}function Em(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+Ba(a.href)+'"]');if(r)return t.instance=r,Pt(r),r;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Pt(r),na(r,"style",c),Jl(r,a.precedence,e),t.instance=r;case"stylesheet":c=br(a.href);var f=e.querySelector(yo(c));if(f)return t.state.loading|=4,t.instance=f,Pt(f),f;r=wm(a),(c=Xa.get(c))&&Md(r,c),f=(e.ownerDocument||e).createElement("link"),Pt(f);var b=f;return b._p=new Promise(function(A,L){b.onload=A,b.onerror=L}),na(f,"link",r),t.state.loading|=4,Jl(f,a.precedence,e),t.instance=f;case"script":return f=vr(a.src),(c=e.querySelector(bo(f)))?(t.instance=c,Pt(c),c):(r=a,(c=Xa.get(f))&&(r=g({},a),qd(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Pt(c),na(c,"link",r),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(r=t.instance,t.state.loading|=4,Jl(r,a.precedence,e));return t.instance}function Jl(e,t,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,b=0;b<r.length;b++){var A=r[b];if(A.dataset.precedence===t)f=A;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Md(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function qd(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ei=null;function xm(e,t,a){if(ei===null){var r=new Map,c=ei=new Map;c.set(a,r)}else c=ei,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ne]||f[pe]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var b=f.getAttribute(t)||"";b=e+b;var A=r.get(b);A?A.push(f):r.set(b,[f])}}return r}function Sm(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function x0(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Dm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var vo=null;function S0(){}function D0(e,t,a){if(vo===null)throw Error(l(475));var r=vo;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var c=br(a.href),f=e.querySelector(yo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(r.count++,r=ti.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=f,Pt(f);return}f=e.ownerDocument||e,a=wm(a),(c=Xa.get(c))&&Md(a,c),f=f.createElement("link"),Pt(f);var b=f;b._p=new Promise(function(A,L){b.onload=A,b.onerror=L}),na(f,"link",a),t.instance=f}r.stylesheets===null&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(r.count++,t=ti.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}function A0(){if(vo===null)throw Error(l(475));var e=vo;return e.stylesheets&&e.count===0&&Id(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&Id(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function ti(){if(this.count--,this.count===0){if(this.stylesheets)Id(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ai=null;function Id(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ai=new Map,t.forEach(T0,e),ai=null,ti.call(e))}function T0(e,t){if(!(t.state.loading&4)){var a=ai.get(e);if(a)var r=a.get(null);else{a=new Map,ai.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var b=c[f];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),r=b)}r&&a.set(null,r)}c=t.instance,b=c.getAttribute("data-precedence"),f=a.get(b)||r,f===r&&a.set(null,c),a.set(b,c),this.count++,r=ti.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var wo={$$typeof:k,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function C0(e,t,a,r,c,f,b,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pt(0),this.hiddenUpdates=pt(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function Am(e,t,a,r,c,f,b,A,L,X,ee,se){return e=new C0(e,t,a,b,A,L,X,se),t=1,f===!0&&(t|=24),f=Na(3,null,null,t),e.current=f,f.stateNode=e,t=vc(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:t},Sc(f),e}function Tm(e){return e?(e=Ws,e):Ws}function Cm(e,t,a,r,c,f){c=Tm(c),r.context===null?r.context=c:r.pendingContext=c,r=Fn(t),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=zn(e,r,t),a!==null&&(Oa(a,e,t),Kr(a,e,t))}function Nm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ud(e,t){Nm(e,t),(e=e.alternate)&&Nm(e,t)}function km(e){if(e.tag===13){var t=Ks(e,67108864);t!==null&&Oa(t,e,67108864),Ud(e,67108864)}}var ni=!0;function N0(e,t,a,r){var c=V.T;V.T=null;var f=re.p;try{re.p=2,$d(e,t,a,r)}finally{re.p=f,V.T=c}}function k0(e,t,a,r){var c=V.T;V.T=null;var f=re.p;try{re.p=8,$d(e,t,a,r)}finally{re.p=f,V.T=c}}function $d(e,t,a,r){if(ni){var c=Bd(r);if(c===null)Cd(e,t,r,si,a),Rm(e,r);else if(R0(c,e,t,a,r))r.stopPropagation();else if(Rm(e,r),t&4&&-1<j0.indexOf(e)){for(;c!==null;){var f=wt(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var b=Bt(f.pendingLanes);if(b!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;b;){var L=1<<31-nt(b);A.entanglements[1]|=L,b&=~L}dn(f),(st&6)===0&&(Bl=fe()+500,po(0))}}break;case 13:A=Ks(f,2),A!==null&&Oa(A,f,2),zl(),Ud(f,2)}if(f=Bd(r),f===null&&Cd(e,t,r,si,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else Cd(e,t,r,null,a)}}function Bd(e){return e=Hi(e),Fd(e)}var si=null;function Fd(e){if(si=null,e=Ue(e),e!==null){var t=p(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=m(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return si=e,null}function jm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(B()){case de:return 2;case je:return 8;case me:case Me:return 32;case Be:return 268435456;default:return 32}default:return 32}}var zd=!1,as=null,ns=null,ss=null,Eo=new Map,xo=new Map,rs=[],j0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rm(e,t){switch(e){case"focusin":case"focusout":as=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":ss=null;break;case"pointerover":case"pointerout":Eo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(t.pointerId)}}function So(e,t,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},t!==null&&(t=wt(t),t!==null&&km(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function R0(e,t,a,r,c){switch(t){case"focusin":return as=So(as,e,t,a,r,c),!0;case"dragenter":return ns=So(ns,e,t,a,r,c),!0;case"mouseover":return ss=So(ss,e,t,a,r,c),!0;case"pointerover":var f=c.pointerId;return Eo.set(f,So(Eo.get(f)||null,e,t,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,xo.set(f,So(xo.get(f)||null,e,t,a,r,c)),!0}return!1}function Lm(e){var t=Ue(e.target);if(t!==null){var a=p(t);if(a!==null){if(t=a.tag,t===13){if(t=m(a),t!==null){e.blockedOn=t,Jt(e.priority,function(){if(a.tag===13){var r=La();r=qn(r);var c=Ks(a,r);c!==null&&Oa(c,a,r),Ud(a,r)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ri(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Bd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Vi=r,a.target.dispatchEvent(r),Vi=null}else return t=wt(a),t!==null&&km(t),e.blockedOn=a,!1;t.shift()}return!0}function Om(e,t,a){ri(e)&&a.delete(t)}function L0(){zd=!1,as!==null&&ri(as)&&(as=null),ns!==null&&ri(ns)&&(ns=null),ss!==null&&ri(ss)&&(ss=null),Eo.forEach(Om),xo.forEach(Om)}function oi(e,t){e.blockedOn===t&&(e.blockedOn=null,zd||(zd=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,L0)))}var li=null;function _m(e){li!==e&&(li=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){li===e&&(li=null);for(var t=0;t<e.length;t+=3){var a=e[t],r=e[t+1],c=e[t+2];if(typeof r!="function"){if(Fd(r||a)===null)continue;break}var f=wt(a);f!==null&&(e.splice(t,3),t-=3,Fc(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Do(e){function t(L){return oi(L,e)}as!==null&&oi(as,e),ns!==null&&oi(ns,e),ss!==null&&oi(ss,e),Eo.forEach(t),xo.forEach(t);for(var a=0;a<rs.length;a++){var r=rs[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<rs.length&&(a=rs[0],a.blockedOn===null);)Lm(a),a.blockedOn===null&&rs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],b=c[Ee]||null;if(typeof f=="function")b||_m(a);else if(b){var A=null;if(f&&f.hasAttribute("formAction")){if(c=f,b=f[Ee]||null)A=b.formAction;else if(Fd(c)!==null)continue}else A=b.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),_m(a)}}}function Yd(e){this._internalRoot=e}ii.prototype.render=Yd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var a=t.current,r=La();Cm(a,r,e,t,null,null)},ii.prototype.unmount=Yd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cm(e.current,2,null,e,null,null),zl(),t[C]=null}};function ii(e){this._internalRoot=e}ii.prototype.unstable_scheduleHydration=function(e){if(e){var t=pa();e={blockedOn:null,target:e,priority:t};for(var a=0;a<rs.length&&t!==0&&t<rs[a].priority;a++);rs.splice(a,0,e),a===0&&Lm(e)}};var Pm=s.version;if(Pm!=="19.1.4")throw Error(l(527,Pm,"19.1.4"));re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=y(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var O0={bundleType:0,version:"19.1.4",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{Qt=ci.inject(O0),xe=ci}catch{}}return To.createRoot=function(e,t){if(!i(e))throw Error(l(299));var a=!1,r="",c=Zp,f=Qp,b=Jp,A=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(b=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(A=t.unstable_transitionCallbacks)),t=Am(e,1,!1,null,null,a,r,c,f,b,A,null),e[C]=t.current,Td(e),new Yd(t)},To.hydrateRoot=function(e,t,a){if(!i(e))throw Error(l(299));var r=!1,c="",f=Zp,b=Qp,A=Jp,L=null,X=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(L=a.unstable_transitionCallbacks),a.formState!==void 0&&(X=a.formState)),t=Am(e,1,!0,t,a??null,r,c,f,b,A,L,X),t.context=Tm(null),a=t.current,r=La(),r=qn(r),c=Fn(r),c.callback=null,zn(a,c,r),a=r,t.current.lanes=a,Ia(t,a),dn(t),e[C]=t.current,Td(e),new ii(t)},To.version="19.1.4",To}var Vm;function Y0(){if(Vm)return Hd.exports;Vm=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(s){console.error(s)}}return n(),Hd.exports=z0(),Hd.exports}var Yu=Y0();const V0=Xo(Yu),H0=ki({__proto__:null,default:V0},[Yu]);var M=ji();const J=Xo(M),iy=ki({__proto__:null,default:J},[M]);const G0=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),X0=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,o,l)=>l?l.toUpperCase():o.toLowerCase()),Hm=n=>{const s=X0(n);return s.charAt(0).toUpperCase()+s.slice(1)},cy=(...n)=>n.filter((s,o,l)=>!!s&&s.trim()!==""&&l.indexOf(s)===o).join(" ").trim(),K0=n=>{for(const s in n)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};var W0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Z0=M.forwardRef(({color:n="currentColor",size:s=24,strokeWidth:o=2,absoluteStrokeWidth:l,className:i="",children:p,iconNode:m,...u},y)=>M.createElement("svg",{ref:y,...W0,width:s,height:s,stroke:n,strokeWidth:l?Number(o)*24/Number(s):o,className:cy("lucide",i),...!p&&!K0(u)&&{"aria-hidden":"true"},...u},[...m.map(([h,g])=>M.createElement(h,g)),...Array.isArray(p)?p:[p]]));const He=(n,s)=>{const o=M.forwardRef(({className:l,...i},p)=>M.createElement(Z0,{ref:p,iconNode:s,className:cy(`lucide-${G0(Hm(n))}`,`lucide-${n}`,l),...i}));return o.displayName=Hm(n),o};const Q0=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],dy=He("archive",Q0);const J0=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],ew=He("arrow-down",J0);const tw=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],uy=He("arrow-left",tw);const aw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],nw=He("arrow-right",aw);const sw=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],rw=He("arrow-up",sw);const ow=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Dr=He("check",ow);const lw=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],us=He("chevron-down",lw);const iw=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],fy=He("chevron-left",iw);const cw=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Vu=He("chevron-right",cw);const dw=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gm=He("circle-check",dw);const uw=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],fw=He("clipboard-check",uw);const pw=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Hu=He("database",pw);const hw=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],Ms=He("download",hw);const mw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],gw=He("eye",mw);const yw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]],bw=He("file-check-2",yw);const vw=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]],ww=He("file-code-2",vw);const Ew=[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]],Xm=He("file-plus-2",Ew);const xw=[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]],Sw=He("file-search",xw);const Dw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],fs=He("file-text",Dw);const Aw=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],yu=He("folder",Aw);const Tw=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],Cw=He("funnel",Tw);const Nw=[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]],kw=He("git-branch",Nw);const jw=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],ps=He("hard-drive",jw);const Rw=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Lo=He("layers",Rw);const Lw=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Ma=He("loader-circle",Lw);const Ow=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],_w=He("monitor",Ow);const Pw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Bo=He("plus",Pw);const Mw=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],qw=He("refresh-cw",Mw);const Iw=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Km=He("save",Iw);const Uw=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Fo=He("search",Uw);const $w=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Bw=He("settings-2",$w);const Fw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],bu=He("shield-check",Fw);const zw=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],vu=He("sliders-horizontal",zw);const Yw=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Ei=He("trash-2",Yw);const Vw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],hs=He("triangle-alert",Vw);const Hw=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],Tr=He("upload",Hw);const Gw=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],Xw=He("wrench",Gw);const Kw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wm=He("x",Kw);function Ww(n,s){if(n instanceof RegExp)return{keys:!1,pattern:n};var o,l,i,p,m=[],u="",y=n.split("/");for(y[0]||y.shift();i=y.shift();)o=i[0],o==="*"?(m.push(o),u+=i[1]==="?"?"(?:/(.*))?":"/(.*)"):o===":"?(l=i.indexOf("?",1),p=i.indexOf(".",1),m.push(i.substring(1,~l?l:~p?p:i.length)),u+=~l&&!~p?"(?:/([^/]+?))?":"/([^/]+?)",~p&&(u+=(~l?"?":"")+"\\"+i.substring(p))):u+="/"+i;return{keys:m,pattern:new RegExp("^"+u+(s?"(?=$|/)":"/?$"),"i")}}var Zd={exports:{}},Qd={};var Zm;function Zw(){if(Zm)return Qd;Zm=1;var n=ji();function s(v,E){return v===E&&(v!==0||1/v===1/E)||v!==v&&E!==E}var o=typeof Object.is=="function"?Object.is:s,l=n.useState,i=n.useEffect,p=n.useLayoutEffect,m=n.useDebugValue;function u(v,E){var S=E(),j=l({inst:{value:S,getSnapshot:E}}),T=j[0].inst,D=j[1];return p(function(){T.value=S,T.getSnapshot=E,y(T)&&D({inst:T})},[v,S,E]),i(function(){return y(T)&&D({inst:T}),v(function(){y(T)&&D({inst:T})})},[v]),m(S),S}function y(v){var E=v.getSnapshot;v=v.value;try{var S=E();return!o(v,S)}catch{return!0}}function h(v,E){return E()}var g=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?h:u;return Qd.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:g,Qd}var Qm;function Qw(){return Qm||(Qm=1,Zd.exports=Zw()),Zd.exports}var Jw=Qw();const e1=iy.useInsertionEffect,t1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",py=t1?M.useLayoutEffect:M.useEffect,a1=e1||py,Gu=n=>{const s=M.useRef([n,(...o)=>s[0](...o)]).current;return a1(()=>{s[0]=n}),s[1]},Jm=["popstate","pushState","replaceState","hashchange"];let Oo=[];const eg=()=>Oo.forEach(n=>n()),n1=n=>(Oo.push(n)===1&&Jm.forEach(s=>addEventListener(s,eg)),()=>{Oo=Oo.filter(s=>s!==n),Oo.length||Jm.forEach(s=>removeEventListener(s,eg))}),hy=(n,s)=>Jw.useSyncExternalStore(n1,n,s),tg=()=>location.search,s1=({ssrSearch:n}={})=>hy(tg,n!=null?()=>n:tg),ag=()=>location.pathname,r1=({ssrPath:n}={})=>hy(ag,n!=null?()=>n:ag),o1=(n,{replace:s=!1,state:o=null}={})=>history[s?"replaceState":"pushState"](o,"",n),l1=n=>[r1(n),o1],ng=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[ng]>"u"){for(const n of["pushState","replaceState"]){const s=history[n];history[n]=function(){const o=s.apply(this,arguments),l=new Event(n);return l.arguments=arguments,dispatchEvent(l),o}}Object.defineProperty(window,ng,{value:!0})}const my=(n="")=>n==="/"?"":n,i1=(n,s)=>n[0]==="~"?n.slice(1):my(s)+n,c1=(n,s)=>(n=sg(my(n)),s=sg(s),!n||(s.toLowerCase()+"/").startsWith(n.toLowerCase()+"/")?s.slice(n.length)||"/":"~"+s),sg=n=>{try{return n.includes("%")?decodeURI(n):n}catch{return n}},gy={hook:l1,searchHook:s1,parser:Ww,base:"",ssrPath:void 0,ssrSearch:void 0,ssrContext:void 0,hrefs:n=>n,aroundNav:(n,s,o)=>n(s,o)},yy=M.createContext(gy),Ri=()=>M.useContext(yy),d1={};M.createContext(d1);const Xu=n=>{const[s,o]=n.hook(n);return[c1(n.base,s),Gu((l,i)=>n.aroundNav(o,i1(l,n.base),i))]},by=()=>Xu(Ri()),u1=({children:n,...s})=>{const o=Ri(),l=s.hook?gy:o;let i=l;if(s.ssrPath){const[y,h=s.ssrSearch??""]=s.ssrPath.split("?");y&&(s.ssrSearch=h,s.ssrPath=y)}s.hrefs=s.hrefs??s.hook?.hrefs,s.searchHook=s.searchHook??s.hook?.searchHook;let p=M.useRef(l),m=p.current,u=m;for(let y in l){const h=y==="base"?l[y]+(s[y]??""):s[y]??l[y];h!==u[y]&&(m===u&&(p.current=u={...u}),u[y]=h),(h!==l[y]||h!==i[y])&&(i=u)}return M.createElement(yy.Provider,{value:i},n)},ra=M.forwardRef((n,s)=>{const o=Ri(),[l,i]=Xu(o),{to:p="",href:m=p,onClick:u,asChild:y,children:h,className:g,replace:v,state:E,transition:S,...j}=n;return j.onClick=Gu(T=>{T.ctrlKey||T.metaKey||T.altKey||T.shiftKey||T.button!==0||(u?.(T),T.defaultPrevented||(T.preventDefault(),i(m,n)))}),j.href=o.hrefs(m[0]==="~"?m.slice(1):o.base+m,o),g!==void 0&&(j.className=g?.call?g(l===m):g),s&&(j.ref=s),y&&M.isValidElement(h)?M.cloneElement(h,j):M.createElement("a",j,h)}),f1=n=>{const{to:s,href:o=s}=n,l=Ri(),[,i]=Xu(l),p=Gu(()=>i(s||o,n)),{ssrContext:m}=l;return py(()=>{p()},[]),m&&(m.redirectTo=s),null},vy=`To use an existing Clerk app, run:
npx clerk@latest link
npx clerk@latest env pull

For production keys, run:
npx clerk@latest env pull --instance prod`,wy="Or copy keys from https://dashboard.clerk.com/~/api-keys into your .env file.",rg=`To create a new Clerk app, run:
npx clerk@latest init

'npx clerk@latest init' does not need a Clerk account and writes temporary dev keys.

${vy}

${wy}`,p1=`${vy}

${wy}`,h1=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:`The publishableKey passed to Clerk is invalid (key={{key}}, expected format: pk_test_... or pk_live_...).

${rg}`,MissingPublishableKeyErrorMessage:`Clerk keys are missing from your environment.

${rg}`,MissingSecretKeyErrorMessage:`Missing secretKey.

${p1}`,MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function Ey({packageName:n,customMessages:s}){let o=n;function l(p,m){if(!m)return`${o}: ${p}`;let u=p;const y=p.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const h of y){const g=(m[h[1]]||"").toString();u=u.replace(`{{${h[1]}}}`,g)}return`${o}: ${u}`}const i={...h1,...s};return{setPackageName({packageName:p}){return typeof p=="string"&&(o=p),this},setMessages({customMessages:p}){return Object.assign(i,p||{}),this},throwInvalidPublishableKeyError(p){throw new Error(l(i.InvalidPublishableKeyErrorMessage,p))},throwInvalidProxyUrl(p){throw new Error(l(i.InvalidProxyUrlErrorMessage,p))},throwMissingPublishableKeyError(){throw new Error(l(i.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(l(i.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(p){throw new Error(l(i.MissingClerkProvider,p))},throw(p){throw new Error(l(p))}}}const m1=()=>{try{return!1}catch{}return!1},g1=()=>{try{return!1}catch{}return!1},y1=()=>{try{return!0}catch{}return!1};var og=Object.prototype.hasOwnProperty;function lg(n,s,o){for(o of n.keys())if(Mo(o,s))return o}function Mo(n,s){var o,l,i;if(n===s)return!0;if(n&&s&&(o=n.constructor)===s.constructor){if(o===Date)return n.getTime()===s.getTime();if(o===RegExp)return n.toString()===s.toString();if(o===Array){if((l=n.length)===s.length)for(;l--&&Mo(n[l],s[l]););return l===-1}if(o===Set){if(n.size!==s.size)return!1;for(l of n)if(i=l,i&&typeof i=="object"&&(i=lg(s,i),!i)||!s.has(i))return!1;return!0}if(o===Map){if(n.size!==s.size)return!1;for(l of n)if(i=l[0],i&&typeof i=="object"&&(i=lg(s,i),!i)||!Mo(l[1],s.get(i)))return!1;return!0}if(o===ArrayBuffer)n=new Uint8Array(n),s=new Uint8Array(s);else if(o===DataView){if((l=n.byteLength)===s.byteLength)for(;l--&&n.getInt8(l)===s.getInt8(l););return l===-1}if(ArrayBuffer.isView(n)){if((l=n.byteLength)===s.byteLength)for(;l--&&n[l]===s[l];);return l===-1}if(!o||typeof n=="object"){l=0;for(o in n)if(og.call(n,o)&&++l&&!og.call(s,o)||!(o in s)||!Mo(n[o],s[o]))return!1;return Object.keys(s).length===l}}return n!==n&&s!==s}function b1(n,s){if(!n)throw typeof s=="string"?new Error(s):new Error(`${s.displayName} not found`)}const kr=(n,s)=>{const{assertCtxFn:o=b1}={},l=J.createContext(void 0);return l.displayName=n,[l,()=>{const m=J.useContext(l);return o(m,`${n} not found`),m.value},()=>{const m=J.useContext(l);return m?m.value:{}}]},[v1,w1]=kr("ClerkInstanceContext");kr("InitialStateContext");J.createContext({});kr("CheckoutContext");function E1(n){if(!J.useContext(v1)){if(typeof n=="function"){n();return}throw new Error(`${n} can only be used within the <ClerkProvider /> component.

Possible fixes:
1. Ensure that the <ClerkProvider /> is correctly wrapping your application where this component is used.
2. Check for multiple versions of the \`@clerk/shared\` package in your project. Use a tool like \`npm ls @clerk/shared\` to identify multiple versions, and update your dependencies to only rely on one.

Learn more: https://clerk.com/docs/components/clerk-provider`.trim())}}function x1(n){const s=function(){};let o;return o=new Proxy(s,{get(l,i){if(i!=="then")return i==="toString"?()=>`[${n}]`:i===Symbol.toPrimitive?()=>0:o},apply(){return o},construct(){return o},has(){return!1},set(){return!1}}),o}x1("ClerkMockQueryClient");typeof window<"u"?J.useLayoutEffect:J.useEffect;const ig=Mo,S1=n=>{const s=M.useRef(n);return M.useEffect(()=>{s.current=n},[n]),s.current},_a=(n,s,o)=>{const l=!!o,i=M.useRef(o);M.useEffect(()=>{i.current=o},[o]),M.useEffect(()=>{if(!l||!n)return()=>{};const p=(...m)=>{i.current&&i.current(...m)};return n.on(s,p),()=>{n.off(s,p)}},[l,s,n,i])},xy=J.createContext(null);xy.displayName="ElementsContext";const D1=(n,s)=>{if(!n)throw new Error(`Could not find Elements context; You need to wrap the part of your app that ${s} in an <Elements> provider.`);return n},xi=n=>n!==null&&typeof n=="object",A1=(n,s,o)=>xi(n)?Object.keys(n).reduce((l,i)=>{const p=!xi(s)||!Sy(n[i],s[i]);return o.includes(i)?(p&&console.warn(`Unsupported prop change: options.${i} is not a mutable property.`),l):p?{...l||{},[i]:n[i]}:l},null):null,cg="[object Object]",Sy=(n,s)=>{if(!xi(n)||!xi(s))return n===s;const o=Array.isArray(n);if(o!==Array.isArray(s))return!1;const l=Object.prototype.toString.call(n)===cg;if(l!==(Object.prototype.toString.call(s)===cg))return!1;if(!l&&!o)return n===s;const i=Object.keys(n),p=Object.keys(s);if(i.length!==p.length)return!1;const m={};for(let v=0;v<i.length;v+=1)m[i[v]]=!0;for(let v=0;v<p.length;v+=1)m[p[v]]=!0;const u=Object.keys(m);if(u.length!==i.length)return!1;const y=n,h=s,g=v=>Sy(y[v],h[v]);return u.every(g)},dg=n=>D1(J.useContext(xy),n),T1=n=>n.charAt(0).toUpperCase()+n.slice(1),C1=(n,s)=>{const o=`${T1(n)}Element`,p=s?m=>{dg(`mounts <${o}>`);const{id:u,className:y}=m;return J.createElement("div",{id:u,className:y})}:({id:m,className:u,fallback:y,options:h={},onBlur:g,onFocus:v,onReady:E,onChange:S,onEscape:j,onClick:T,onLoadError:D,onLoaderStart:w,onNetworksChange:N,onConfirm:k,onCancel:q,onShippingAddressChange:x,onShippingRateChange:O})=>{const R=dg(`mounts <${o}>`),P="elements"in R?R.elements:null,[K,ue]=J.useState(null),ne=J.useRef(null),le=J.useRef(null),[we,ge]=M.useState(!1);_a(K,"blur",g),_a(K,"focus",v),_a(K,"escape",j),_a(K,"click",T),_a(K,"loaderror",D),_a(K,"loaderstart",w),_a(K,"networkschange",N),_a(K,"confirm",k),_a(K,"cancel",q),_a(K,"shippingaddresschange",x),_a(K,"shippingratechange",O),_a(K,"change",S);let ce;E&&(ce=()=>{ge(!0),E(K)}),_a(K,"ready",ce),J.useLayoutEffect(()=>{if(ne.current===null&&le.current!==null&&P){let re=null;P&&(re=P.create(n,h)),ne.current=re,ue(re),re&&re.mount(le.current)}},[P,h]);const V=S1(h);return J.useEffect(()=>{if(!ne.current)return;const re=A1(h,V,["paymentRequest"]);re&&"update"in ne.current&&ne.current.update(re)},[h,V]),J.useLayoutEffect(()=>()=>{if(ne.current&&typeof ne.current.destroy=="function")try{ne.current.destroy(),ne.current=null}catch{}},[]),J.createElement(J.Fragment,null,!we&&y,J.createElement("div",{id:m,style:{height:we?"unset":"0px",visibility:we?"visible":"hidden"},className:u,ref:le}))};return p.displayName=o,p.__elementType=n,p};C1("payment",typeof window>"u");kr("PaymentElementContext");kr("StripeUtilsContext");const[bD,,N1]=kr("PortalProvider"),k1=()=>{const n=N1();return n&&"getContainer"in n&&n.getContainer?n.getContainer:()=>null},Ku=Ey({packageName:"@clerk/react"});function j1(n){Ku.setMessages(n).setPackageName(n)}const R1=w1,L1=n=>{E1(()=>{Ku.throwMissingClerkProviderError({source:n})})};var Li=ly();const O1=Xo(Li),_1=ki({__proto__:null,default:O1},[Li]),ba=n=>{m1()&&console.error(`Clerk: ${n}`)},ug=(n,...s)=>{const o={...n};for(const l of s)delete o[l];return o},P1=n=>`You've passed multiple children components to <${n}/>. You can only pass a single child component or text.`,M1="<UserProfile.Page /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",q1="<UserProfile.Link /> component needs to be a direct child of `<UserProfile />` or `<UserButton />`.",I1="<OrganizationProfile.Page /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",U1="<OrganizationProfile.Link /> component needs to be a direct child of `<OrganizationProfile />` or `<OrganizationSwitcher />`.",$1=n=>`<${n} /> can only accept <${n}.Page /> and <${n}.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.`,B1=n=>`Missing props. <${n}.Page /> component requires the following props: url, label, labelIcon, alongside with children to be rendered inside the page.`,F1=n=>`Missing props. <${n}.Link /> component requires the following props: url, label and labelIcon.`,z1="<UserButton /> can only accept <UserButton.UserProfilePage />, <UserButton.UserProfileLink /> and <UserButton.MenuItems /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",Y1="<UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored. Additionally, please ensure that the component is rendered in a client component.",V1="<UserButton.MenuItems /> component needs to be a direct child of `<UserButton />`.",H1="<UserButton.Action /> component needs to be a direct child of `<UserButton.MenuItems />`.",G1="<UserButton.Link /> component needs to be a direct child of `<UserButton.MenuItems />`.",X1="Missing props. <UserButton.Link /> component requires the following props: href, label and labelIcon.",K1="Missing props. <UserButton.Action /> component requires the following props: label.",Ko=n=>s=>{try{return J.Children.only(n)}catch{const o=J.Children.toArray(n);return o.length===1&&J.isValidElement(o[0])?o[0]:Ku.throw(P1(s))}},Wo=(n,s)=>(n||(n=s),typeof n=="string"&&(n=J.createElement("button",null,n)),n),Zo=n=>(...s)=>{if(n&&typeof n=="function")return n(...s)},qo=n=>{const[s,o]=M.useState(new Map),l=M.useRef(s),i=M.useRef(new Map),p=M.useRef(new Map);l.current=s,i.current=new Map(n.map(u=>[u.id,u.component]));const m=new Set(n.map(u=>u.id));return p.current.forEach((u,y)=>{m.has(y)||p.current.delete(y)}),n.map(u=>{const y=u.id,h=p.current.get(y);if(h)return h;const g=()=>{const E=l.current.get(y),S=i.current.get(y);return E?Li.createPortal(S,E):null},v={id:u.id,mount:E=>o(S=>new Map(S).set(y,E)),unmount:()=>o(E=>{const S=new Map(E);return S.set(y,null),S}),portal:g};return p.current.set(y,v),v})},ga=(n,s)=>!!n&&J.isValidElement(n)&&n?.type===s,Dy=(n,s)=>Cy({children:n,reorderItemsLabels:["account","security","billing","apiKeys"],LinkComponent:Jo,PageComponent:Qo,MenuItemsComponent:_i,componentName:"UserProfile"},s),Ay=(n,s)=>Cy({children:n,reorderItemsLabels:["general","members","billing","apiKeys"],LinkComponent:Mi,PageComponent:Pi,componentName:"OrganizationProfile"},s),Ty=n=>{const s=[],o=[Mi,Pi,_i,Qo,Jo];return J.Children.forEach(n,l=>{o.some(i=>ga(l,i))||s.push(l)}),s},Cy=(n,s)=>{const{children:o,LinkComponent:l,PageComponent:i,MenuItemsComponent:p,reorderItemsLabels:m,componentName:u}=n,{allowForAnyChildren:y=!1}=s||{},h=[],g=new Map;J.Children.forEach(o,k=>{if(!ga(k,i)&&!ga(k,l)&&!ga(k,p)){k&&!y&&ba($1(u));return}const{props:q}=k,{children:x,label:O,url:R,labelIcon:P}=q,K=k.key;if(ga(k,i))if(pg(q,m))h.push({label:O});else if(Jd(q))h.push({label:O,labelIcon:P,children:x,url:R,portalId:fg("page",q,K,g)});else{ba(B1(u));return}if(ga(k,l))if(eu(q))h.push({label:O,labelIcon:P,url:R,portalId:fg("link",q,K,g)});else{ba(F1(u));return}});const v=[],E=[],S=[];h.forEach((k,q)=>{if(Jd(k)){v.push({component:k.children,id:k.portalId||q}),E.push({component:k.labelIcon,id:k.portalId||q});return}eu(k)&&S.push({component:k.labelIcon,id:k.portalId||q})});const j=qo(v),T=qo(E),D=qo(S),w=[],N=[];return h.forEach((k,q)=>{if(pg(k,m)){w.push({label:k.label});return}if(Jd(k)){const{portal:x,mount:O,unmount:R}=j.find(ne=>ne.id===(k.portalId||q)),{portal:P,mount:K,unmount:ue}=T.find(ne=>ne.id===(k.portalId||q));w.push({label:k.label,url:k.url,mount:O,unmount:R,mountIcon:K,unmountIcon:ue}),N.push({key:`content:${k.portalId||q}`,portal:x}),N.push({key:`label:${k.portalId||q}`,portal:P});return}if(eu(k)){const{portal:x,mount:O,unmount:R}=D.find(P=>P.id===(k.portalId||q));w.push({label:k.label,url:k.url,mountIcon:O,unmountIcon:R}),N.push({key:`label:${k.portalId||q}`,portal:x});return}}),{customPages:w,customPagesPortals:N}},fg=(n,s,o,l)=>{if(o!=null)return`${n}:key:${o}`;const i=`${n}:${s.label}:${s.url}`,p=l.get(i)??0;return l.set(i,p+1),`${i}:${p}`},pg=(n,s)=>{const{children:o,label:l,url:i,labelIcon:p}=n;return!o&&!i&&!p&&s.some(m=>m===l)},Jd=n=>{const{children:s,label:o,url:l,labelIcon:i}=n;return!!s&&!!l&&!!i&&!!o},eu=n=>{const{children:s,label:o,url:l,labelIcon:i}=n;return!s&&!!l&&!!i&&!!o},W1=(n,s)=>Z1({children:n,reorderItemsLabels:["manageAccount","signOut"],MenuItemsComponent:_i,MenuActionComponent:ky,MenuLinkComponent:jy,UserProfileLinkComponent:Jo,UserProfilePageComponent:Qo,allowForAnyChildren:s?.allowForAnyChildren??!1}),Z1=({children:n,MenuItemsComponent:s,MenuActionComponent:o,MenuLinkComponent:l,UserProfileLinkComponent:i,UserProfilePageComponent:p,reorderItemsLabels:m,allowForAnyChildren:u=!1})=>{const y=[],h=[],g=[],v=new Map;J.Children.forEach(n,D=>{if(!ga(D,s)&&!ga(D,i)&&!ga(D,p)){D&&!u&&ba(z1);return}if(ga(D,i)||ga(D,p))return;const{props:w}=D;J.Children.forEach(w.children,N=>{if(!ga(N,o)&&!ga(N,l)){N&&ba(Y1);return}const{props:k}=N,q=N.key,{label:x,labelIcon:O,href:R,onClick:P,open:K}=k;if(ga(N,o))if(hg(k,m))y.push({label:x});else if(au(k)){const ue={label:x,labelIcon:O};if(P!==void 0)y.push({...ue,onClick:P,portalId:tu("action",k,q,v)});else if(K!==void 0)y.push({...ue,open:K.startsWith("/")?K:`/${K}`,portalId:tu("action",k,q,v)});else{ba("Custom menu item must have either onClick or open property");return}}else{ba(K1);return}if(ga(N,l))if(nu(k))y.push({label:x,labelIcon:O,href:R,portalId:tu("link",k,q,v)});else{ba(X1);return}})});const E=[],S=[];y.forEach((D,w)=>{au(D)&&E.push({component:D.labelIcon,id:D.portalId||w}),nu(D)&&S.push({component:D.labelIcon,id:D.portalId||w})});const j=qo(E),T=qo(S);return y.forEach((D,w)=>{if(hg(D,m)&&h.push({label:D.label}),au(D)){const{portal:N,mount:k,unmount:q}=j.find(O=>O.id===(D.portalId||w)),x={label:D.label,mountIcon:k,unmountIcon:q};"onClick"in D?x.onClick=D.onClick:"open"in D&&(x.open=D.open),h.push(x),g.push({key:`icon:${D.portalId||w}`,portal:N})}if(nu(D)){const{portal:N,mount:k,unmount:q}=T.find(x=>x.id===(D.portalId||w));h.push({label:D.label,href:D.href,mountIcon:k,unmountIcon:q}),g.push({key:`icon:${D.portalId||w}`,portal:N})}}),{customMenuItems:h,customMenuItemsPortals:g}},tu=(n,s,o,l)=>{if(o!=null)return`${n}:key:${o}`;const i=s.href||s.open||"",p=`${n}:${s.label}:${i}`,m=l.get(p)??0;return l.set(p,m+1),`${p}:${m}`},hg=(n,s)=>{const{children:o,label:l,onClick:i,labelIcon:p}=n;return!o&&!i&&!p&&s.some(m=>m===l)},au=n=>{const{label:s,labelIcon:o,onClick:l,open:i}=n;return!!o&&!!s&&(typeof l=="function"||typeof i=="string")},nu=n=>{const{label:s,href:o,labelIcon:l}=n;return!!o&&!!l&&!!s},Q1=n=>{const s=n?.isReady;return o=>new Promise((l,i)=>{const{root:p=document?.body,selector:m,timeout:u=0}=o;if(!p){i(new Error("No root element provided"));return}let y=p;if(m&&(y=p?.querySelector(m)),s(y,m)){l();return}const h=new MutationObserver(g=>{for(const v of g)if(!y&&m&&(y=p?.querySelector(m)),(n.childList&&v.type==="childList"||n.attributes&&v.type==="attributes")&&s(y,m)){h.disconnect(),l();return}});h.observe(p,n),u>0&&setTimeout(()=>{h.disconnect(),i(new Error(`Timeout waiting for ${m}`))},u)})},J1=Q1({childList:!0,subtree:!0,isReady:(n,s)=>!!n?.childElementCount&&n?.matches?.(s)&&n.childElementCount>0});function Zt(n,s){const o=M.useRef(),[l,i]=M.useState("rendering");return M.useEffect(()=>{if(!n)throw new Error("Clerk: no component name provided, unable to detect mount.");if(typeof window<"u"&&!o.current){const p=`[data-clerk-component="${n}"]`,m=s?.selector;o.current=J1({selector:m?p+m:p}).then(()=>{i("rendered")}).catch(()=>{i("error")})}},[n,s?.selector]),l}const di=n=>"mount"in n,mg=n=>"open"in n,gg=n=>n?.map(({mountIcon:s,unmountIcon:o,...l})=>l);var Ut=class extends J.PureComponent{constructor(...n){super(...n),this.rootRef=J.createRef()}componentDidUpdate(n){if(!di(n)||!di(this.props))return;const s=ug(n.props||{},"customPages","customMenuItems","children"),o=ug(this.props.props||{},"customPages","customMenuItems","children"),l=n.props?.customPages?.length!==this.props.props?.customPages?.length,i=n.props?.customMenuItems?.length!==this.props.props?.customMenuItems?.length,p=gg(n.props?.customMenuItems),m=gg(this.props.props?.customMenuItems);(!ig(s,o)||!ig(p,m)||l||i)&&this.rootRef.current&&this.props.updateProps({node:this.rootRef.current,props:this.props.props})}componentDidMount(){this.rootRef.current&&(di(this.props)&&this.props.mount(this.rootRef.current,this.props.props),mg(this.props)&&this.props.open(this.props.props))}componentWillUnmount(){this.rootRef.current&&(di(this.props)&&this.props.unmount(this.rootRef.current),mg(this.props)&&this.props.close())}render(){const{hideRootHtmlElement:n=!1}=this.props,s={ref:this.rootRef,...this.props.rootProps,...this.props.component&&{"data-clerk-component":this.props.component}};return J.createElement(J.Fragment,null,!n&&J.createElement("div",s),this.props.children)}};const at=(n,s)=>{const o=(typeof s=="string"?s:s?.component)||n.displayName||n.name||"Component";n.displayName=o;const l=typeof s=="string"?void 0:s,i=p=>{L1(o||"withClerk");const m=R1(),u=k1();return!m.loaded&&!l?.renderWhileLoading?null:J.createElement(n,{getContainer:u,...p,component:o,clerk:m})};return i.displayName=`withClerk(${o})`,i},Oi=n=>J.createElement(J.Fragment,null,n?.customPagesPortals?.map(({key:s,portal:o})=>M.createElement(o,{key:s})),n?.customMenuItemsPortals?.map(({key:s,portal:o})=>M.createElement(o,{key:s})));at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountSignIn,unmount:n.unmountSignIn,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"SignIn",renderWhileLoading:!0});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountSignUp,unmount:n.unmountSignUp,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"SignUp",renderWhileLoading:!0});function Qo({children:n}){return ba(M1),J.createElement(J.Fragment,null,n)}function Jo({children:n}){return ba(q1),J.createElement(J.Fragment,null,n)}const eE=at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:m,customPagesPortals:u}=Dy(l.children);return J.createElement(J.Fragment,null,i&&o,J.createElement(Ut,{component:s,mount:n.mountUserProfile,unmount:n.unmountUserProfile,updateProps:n.__internal_updateProps,props:{...l,customPages:m},rootProps:p},J.createElement(Oi,{customPagesPortals:u})))},{component:"UserProfile",renderWhileLoading:!0});Object.assign(eE,{Page:Qo,Link:Jo});const Ny=M.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),tE=at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:m,customPagesPortals:u}=Dy(l.children,{allowForAnyChildren:!!l.__experimental_asProvider}),y={...l.userProfileProps,customPages:m},{customMenuItems:h,customMenuItemsPortals:g}=W1(l.children,{allowForAnyChildren:!!l.__experimental_asProvider}),v=Ty(l.children),E={mount:n.mountUserButton,unmount:n.unmountUserButton,updateProps:n.__internal_updateProps,props:{...l,userProfileProps:y,customMenuItems:h}},S={customPagesPortals:u,customMenuItemsPortals:g};return J.createElement(Ny.Provider,{value:E},i&&o,n.loaded&&J.createElement(Ut,{component:s,...E,hideRootHtmlElement:!!l.__experimental_asProvider,rootProps:p},l.__experimental_asProvider?v:null,J.createElement(Oi,S)))},{component:"UserButton",renderWhileLoading:!0});function _i({children:n}){return ba(V1),J.createElement(J.Fragment,null,n)}function ky({children:n}){return ba(H1),J.createElement(J.Fragment,null,n)}function jy({children:n}){return ba(G1),J.createElement(J.Fragment,null,n)}function aE(n){const s=M.useContext(Ny),o={...s,props:{...s.props,...n}};return J.createElement(Ut,o)}Object.assign(tE,{UserProfilePage:Qo,UserProfileLink:Jo,MenuItems:_i,Action:ky,Link:jy,__experimental_Outlet:aE});function Pi({children:n}){return ba(I1),J.createElement(J.Fragment,null,n)}function Mi({children:n}){return ba(U1),J.createElement(J.Fragment,null,n)}const nE=at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:m,customPagesPortals:u}=Ay(l.children);return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountOrganizationProfile,unmount:n.unmountOrganizationProfile,updateProps:n.__internal_updateProps,props:{...l,customPages:m},rootProps:p},J.createElement(Oi,{customPagesPortals:u})))},{component:"OrganizationProfile",renderWhileLoading:!0});Object.assign(nE,{Page:Pi,Link:Mi});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountCreateOrganization,unmount:n.unmountCreateOrganization,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"CreateOrganization",renderWhileLoading:!0});const Ry=M.createContext({mount:()=>{},unmount:()=>{},updateProps:()=>{}}),sE=at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}},{customPages:m,customPagesPortals:u}=Ay(l.children,{allowForAnyChildren:!!l.__experimental_asProvider}),y={...l.organizationProfileProps,customPages:m},h=Ty(l.children),g={mount:n.mountOrganizationSwitcher,unmount:n.unmountOrganizationSwitcher,updateProps:n.__internal_updateProps,props:{...l,organizationProfileProps:y},rootProps:p,component:s};return n.__experimental_prefetchOrganizationSwitcher(),J.createElement(Ry.Provider,{value:g},J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{...g,hideRootHtmlElement:!!l.__experimental_asProvider},l.__experimental_asProvider?h:null,J.createElement(Oi,{customPagesPortals:u}))))},{component:"OrganizationSwitcher",renderWhileLoading:!0});function rE(n){const s=M.useContext(Ry),o={...s,props:{...s.props,...n}};return J.createElement(Ut,o)}Object.assign(sE,{OrganizationProfilePage:Pi,OrganizationProfileLink:Mi,__experimental_Outlet:rE});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountOrganizationList,unmount:n.unmountOrganizationList,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"OrganizationList",renderWhileLoading:!0});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,open:n.openGoogleOneTap,close:n.closeGoogleOneTap,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"GoogleOneTap",renderWhileLoading:!0});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountWaitlist,unmount:n.unmountWaitlist,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"Waitlist",renderWhileLoading:!0});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s,{selector:'[data-component-status="ready"]'})==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountPricingTable,unmount:n.unmountPricingTable,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"PricingTable",renderWhileLoading:!0});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountAPIKeys,unmount:n.unmountAPIKeys,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"ApiKeys",renderWhileLoading:!0});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.__internal_mountOAuthConsent,unmount:n.__internal_unmountOAuthConsent,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"OAuthConsent",renderWhileLoading:!0});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.__internal_mountOAuthDeviceVerification,unmount:n.__internal_unmountOAuthDeviceVerification,updateProps:m=>{n.__internal_updateProps(m)},props:l,rootProps:p}))},{component:"OAuthDeviceVerification",renderWhileLoading:!0});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountUserAvatar,unmount:n.unmountUserAvatar,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"UserAvatar",renderWhileLoading:!0});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountTaskChooseOrganization,unmount:n.unmountTaskChooseOrganization,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"TaskChooseOrganization",renderWhileLoading:!0});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountTaskResetPassword,unmount:n.unmountTaskResetPassword,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"TaskResetPassword",renderWhileLoading:!0});at(({clerk:n,component:s,fallback:o,...l})=>{const i=Zt(s)==="rendering"||!n.loaded,p={...i&&o&&{style:{display:"none"}}};return J.createElement(J.Fragment,null,i&&o,n.loaded&&J.createElement(Ut,{component:s,mount:n.mountTaskSetupMFA,unmount:n.unmountTaskSetupMFA,updateProps:n.__internal_updateProps,props:l,rootProps:p}))},{component:"TaskSetupMFA",renderWhileLoading:!0});const oE=Ey({packageName:"@clerk/shared"});function lE(n){oE.setPackageName({packageName:n})}const yg=new Set,qi=(n,s,o)=>{const l=g1()||y1(),i=n;yg.has(i)||l||(yg.add(i),console.warn(`Clerk - DEPRECATION WARNING: "${n}" is deprecated and will be removed in the next major release.
${s}`))};function iE(n){const s=n.match(/^(\d+)\.(\d+)\.(\d+)/);if(!s)return null;const[,o,l,i]=s;return{major:parseInt(o,10),minor:parseInt(l,10),patch:parseInt(i,10)}}function cE(n,s){const{major:o,minor:l,patch:i}=n;return s.some(([p,m,u,y])=>o!==p?!1:u===-1?l>m||l===m&&i>=y:l===u&&i>=y)}function dE(n,s){const o=iE(n);return o?cE(o,s):!1}at(({clerk:n,...s})=>{const{client:o,session:l}=n,i=(o.signedInSessions?.length??0)>0;return J.useEffect(()=>{l===null&&i?n.redirectToAfterSignOut():n.redirectToSignIn(s)},[]),null},"RedirectToSignIn");at(({clerk:n,...s})=>(J.useEffect(()=>{n.redirectToSignUp(s)},[]),null),"RedirectToSignUp");at(({clerk:n,...s})=>(J.useEffect(()=>{n.redirectToTasks(s)},[]),null),"RedirectToTasks");at(({clerk:n})=>(J.useEffect(()=>{qi("RedirectToUserProfile","Use the `redirectToUserProfile()` method instead."),n.redirectToUserProfile()},[]),null),"RedirectToUserProfile");at(({clerk:n})=>(J.useEffect(()=>{qi("RedirectToOrganizationProfile","Use the `redirectToOrganizationProfile()` method instead."),n.redirectToOrganizationProfile()},[]),null),"RedirectToOrganizationProfile");at(({clerk:n})=>(J.useEffect(()=>{qi("RedirectToCreateOrganization","Use the `redirectToCreateOrganization()` method instead."),n.redirectToCreateOrganization()},[]),null),"RedirectToCreateOrganization");at(({clerk:n,...s})=>(J.useEffect(()=>{n.handleRedirectCallback(s)},[]),null),"AuthenticateWithRedirectCallback");typeof globalThis.__BUILD_DISABLE_RHC__>"u"&&(globalThis.__BUILD_DISABLE_RHC__=!1);function uE(){try{return dE(J.version,[[18,0,-1,0],[19,0,0,3],[19,1,1,4],[19,2,2,3],[19,3,3,0]])}catch{return!1}}uE();typeof window<"u"&&!window.global&&(window.global=typeof global>"u"?window:global);if(globalThis.__clerkSharedModules){const n=globalThis.__clerkSharedModules.react?.version;n&&n!==M.version&&console.warn(`[@clerk/ui/register] React version mismatch detected. Already registered: ${n}, current import: ${M.version}. This may cause issues with the shared @clerk/ui variant.`)}else globalThis.__clerkSharedModules={react:iy,"react-dom":_1,"react-dom/client":H0,"react/jsx-runtime":I0};at(({clerk:n,children:s,...o})=>{const{appearance:l,getContainer:i,component:p,...m}=o;s=Wo(s,"Invite members");const u=Ko(s)("InviteMembersButton"),y=()=>n.openInviteMembers({appearance:l,getContainer:i}),g={...m,onClick:async v=>(u&&typeof u=="object"&&"props"in u&&await Zo(u.props.onClick)(v),y())};return J.cloneElement(u,g)},{component:"InviteMembersButton",renderWhileLoading:!0});at(({clerk:n,children:s,...o})=>{const{appearance:l,getContainer:i,component:p,signUpFallbackRedirectUrl:m,forceRedirectUrl:u,fallbackRedirectUrl:y,signUpForceRedirectUrl:h,mode:g,initialValues:v,withSignUp:E,oauthFlow:S,...j}=o;s=Wo(s,"Sign in");const T=Ko(s)("SignInButton"),D=()=>{const k={forceRedirectUrl:u,fallbackRedirectUrl:y,signUpFallbackRedirectUrl:m,signUpForceRedirectUrl:h,initialValues:v,withSignUp:E,oauthFlow:S};return g==="modal"?n.openSignIn({...k,appearance:l,getContainer:i}):n.redirectToSignIn({...k,signInFallbackRedirectUrl:y,signInForceRedirectUrl:u})},N={...j,onClick:async k=>(T&&typeof T=="object"&&"props"in T&&await Zo(T.props.onClick)(k),D())};return J.cloneElement(T,N)},{component:"SignInButton",renderWhileLoading:!0});at(({clerk:n,children:s,...o})=>{const{redirectUrl:l,getContainer:i,component:p,...m}=o;s=Wo(s,"Sign in with Metamask");const u=Ko(s)("SignInWithMetamaskButton"),y=async()=>{async function v(){await n.authenticateWithMetamask({redirectUrl:l||void 0})}v()},g={...m,onClick:async v=>(await Zo(u.props.onClick)(v),y())};return J.cloneElement(u,g)},{component:"SignInWithMetamask",renderWhileLoading:!0});at(({clerk:n,children:s,...o})=>{const{redirectUrl:l="/",sessionId:i,signOutOptions:p,getContainer:m,component:u,...y}=o;p&&qi("SignOutButton `signOutOptions`","Use the `redirectUrl` and `sessionId` props directly instead."),s=Wo(s,"Sign out");const h=Ko(s)("SignOutButton"),g=()=>n.signOut({redirectUrl:l,...i!==void 0&&{sessionId:i},...p}),E={...y,onClick:async S=>(await Zo(h.props.onClick)(S),g())};return J.cloneElement(h,E)},{component:"SignOutButton",renderWhileLoading:!0});at(({clerk:n,children:s,...o})=>{const{appearance:l,unsafeMetadata:i,getContainer:p,component:m,fallbackRedirectUrl:u,forceRedirectUrl:y,signInFallbackRedirectUrl:h,signInForceRedirectUrl:g,mode:v,initialValues:E,oauthFlow:S,...j}=o;s=Wo(s,"Sign up");const T=Ko(s)("SignUpButton"),D=()=>{const k={fallbackRedirectUrl:u,forceRedirectUrl:y,signInFallbackRedirectUrl:h,signInForceRedirectUrl:g,initialValues:E,oauthFlow:S};return v==="modal"?n.openSignUp({...k,appearance:l,unsafeMetadata:i,getContainer:p}):n.redirectToSignUp({...k,signUpFallbackRedirectUrl:u,signUpForceRedirectUrl:y})},N={...j,onClick:async k=>(T&&typeof T=="object"&&"props"in T&&await Zo(T.props.onClick)(k),D())};return J.cloneElement(T,N)},{component:"SignUpButton",renderWhileLoading:!0});j1({packageName:"@clerk/react"});lE("@clerk/react");var su={exports:{}};const jr=n=>({...n,__type:"prebuilt_appearance"}),fE=Object.freeze(Object.defineProperty({__proto__:null,experimental_createTheme:jr},Symbol.toStringTag,{value:"Module"})),pE=oy(fE),Ly=jr({name:"dark",variables:{colorBackground:"#212126",colorNeutral:"white",colorPrimary:"#ffffff",colorPrimaryForeground:"black",colorForeground:"white",colorInputForeground:"white",colorInput:"#26262B"},elements:{providerIcon__apple:{filter:"invert(1)"},providerIcon__github:{filter:"invert(1)"},providerIcon__okx_wallet:{filter:"invert(1)"},providerIcon__vercel:{filter:"invert(1)"},activeDeviceIcon:{"--cl-chassis-bottom":"#d2d2d2","--cl-chassis-back":"#e6e6e6","--cl-chassis-screen":"#e6e6e6","--cl-screen":"#111111"}}}),hE=jr({name:"shadesOfPurple",baseTheme:Ly,variables:{colorBackground:"#3f3c77",colorPrimary:"#f8d80d",colorPrimaryForeground:"#38375f",colorInputForeground:"#a1fdfe",colorShimmer:"rgba(161,253,254,0.36)"}}),ls={boxShadow:"3px 3px 0px #000",border:"2px solid #000","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:active":{boxShadow:"2px 2px 0px #000",transform:"translate(1px)"}},Ls={boxShadow:"3px 3px 0px #000",border:"2px solid #000"},mE=jr({name:"neobrutalism",simpleStyles:!0,variables:{colorPrimary:"#DF1B1B",colorShimmer:"rgba(255,255,255,0.64)",fontWeight:{normal:500,medium:600,bold:700}},elements:{cardBox:{boxShadow:"7px 7px 0px #000",border:"3px solid #000"},card:{borderRadius:"0"},headerSubtitle:{color:"#212126"},alternativeMethodsBlockButton:ls,socialButtonsIconButton:{...ls},selectButton:{...ls,...Ls,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"}},socialButtonsBlockButton:{...ls,color:"#212126"},profileSectionPrimaryButton:ls,profileSectionItem:{color:"#212126"},avatarImageActionsUpload:ls,menuButton:Ls,menuList:Ls,formButtonPrimary:ls,navbarButton:ls,formFieldAction:{fontWeight:"700"},formFieldInput:{...Ls,transition:"all 0.2s ease-in-out","&:focus":{boxShadow:"4px 4px 0px #000",border:"2px solid #000",transform:"scale(1.01)"},"&:hover":{...Ls,transform:"scale(1.01)"}},table:Ls,tableHead:{color:"#212126"},dividerLine:{background:"#000"},dividerText:{fontWeight:"700",color:"#212126"},footer:{background:"#fff","& div":{color:"#212126"}},footerActionText:{color:"#212126"},footerActionLink:{fontWeight:"700",borderBottom:"3px solid","&:focus":{boxShadow:"none"}},actionCard:{...Ls},badge:{border:"1px solid #000",background:"#fff",color:"#212126"}}}),gE=jr({name:"shadcn",cssLayerName:"components",variables:{colorBackground:"var(--card)",colorDanger:"var(--destructive)",colorForeground:"var(--card-foreground)",colorInput:"var(--input)",colorInputForeground:"var(--card-foreground)",colorModalBackdrop:"var(--color-black)",colorMuted:"var(--muted)",colorMutedForeground:"var(--muted-foreground)",colorNeutral:"var(--foreground)",colorPrimary:"var(--primary)",colorPrimaryForeground:"var(--primary-foreground)",colorRing:"var(--ring)",fontWeight:{normal:"var(--font-weight-normal)",medium:"var(--font-weight-medium)",semibold:"var(--font-weight-semibold)",bold:"var(--font-weight-semibold)"}},elements:{input:"bg-transparent dark:bg-input/30",cardBox:"shadow-sm border",popoverBox:"shadow-sm border",button:{'&[data-variant="solid"]::after':{display:"none"}},providerIcon__apple:"dark:invert",providerIcon__github:"dark:invert",providerIcon__okx_wallet:"dark:invert",providerIcon__vercel:"dark:invert"}}),yE=jr({name:"simple",simpleStyles:!0}),bE=Object.freeze(Object.defineProperty({__proto__:null,dark:Ly,experimental__simple:yE,neobrutalism:mE,shadcn:gE,shadesOfPurple:hE},Symbol.toStringTag,{value:"Module"})),vE=oy(bE);var bg;function wE(){return bg||(bg=1,(function(n){var s=Object.defineProperty,o=Object.getOwnPropertyDescriptor,l=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,p=(h,g,v,E)=>{if(g&&typeof g=="object"||typeof g=="function")for(let S of l(g))!i.call(h,S)&&S!==v&&s(h,S,{get:()=>g[S],enumerable:!(E=o(g,S))||E.enumerable});return h},m=(h,g,v)=>(p(h,g,"default"),v&&p(v,g,"default")),u=h=>p(s({},"__esModule",{value:!0}),h),y={};n.exports=u(y),m(y,pE,n.exports),m(y,vE,n.exports)})(su)),su.exports}wE();function vg(n){if(n instanceof Error)return n;if(typeof n=="string")return new Error(n);try{return new Error(JSON.stringify(n))}catch{return new Error(String(n))}}function EE({error:n,resetError:s}){return d.jsx("div",{className:"min-h-screen w-full flex items-center justify-center bg-gray-50 p-6",children:d.jsxs("div",{className:"max-w-lg w-full text-center",children:[d.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"Something went wrong"}),d.jsx("p",{className:"mt-2 text-sm text-gray-600",children:"This part of the app hit an error. The rest of the app is still running."}),null,d.jsx("button",{type:"button",onClick:s,className:"mt-4 rounded bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-700",children:"Try again"})]})})}class xE extends M.Component{state={error:null};static getDerivedStateFromError(s){return{error:vg(s)}}componentDidCatch(s,o){console.error("ErrorBoundary caught an error:",vg(s),o.componentStack)}componentDidUpdate(s){this.state.error!==null&&s.resetKey!==this.props.resetKey&&this.resetError()}resetError=()=>{this.setState({error:null})};render(){const{error:s}=this.state;if(s===null)return this.props.children;const o=this.props.FallbackComponent??EE;return d.jsx(o,{error:s,resetError:this.resetError})}}function SE({showLocalChip:n=!0}){const[s,o]=M.useState(""),[,l]=by(),i=p=>{p.preventDefault(),s&&l(`/workspace/${s}`)};return d.jsxs("main",{className:"chooser-page",children:[d.jsxs("header",{className:"chooser-top",children:[d.jsxs(ra,{href:"/",className:"studio-wordmark","aria-label":"Mapping Studio home","data-testid":"link-home",children:[d.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),n&&d.jsxs("span",{className:"local-chip",children:[d.jsx("span",{className:"local-dot"}),"Browser-local workspace"]})]}),d.jsxs("section",{className:"chooser-content","aria-labelledby":"chooser-title",children:[d.jsxs("div",{className:"chooser-intro",children:[d.jsx("div",{className:"eyebrow",children:"Engineering workspace"}),d.jsx("h1",{id:"chooser-title",children:"Choose a discipline"}),d.jsx("p",{children:"Keep drawing groups organized and traceable on this device."})]}),d.jsxs("form",{className:"discipline-picker",onSubmit:i,"data-testid":"form-discipline-picker",children:[d.jsxs("div",{className:"discipline-field",children:[d.jsx("label",{htmlFor:"discipline-select",children:"Drawing type"}),d.jsxs("div",{className:"discipline-select-control",children:[d.jsxs("select",{id:"discipline-select",value:s,onChange:p=>o(p.target.value),"aria-label":"Drawing type","data-testid":"select-discipline",children:[d.jsx("option",{value:"",disabled:!0,children:"Select PFD or P&ID"}),d.jsx("option",{value:"pfd",children:"PFD — Process Flow Diagram"}),d.jsx("option",{value:"pid",children:"P&ID — Piping and Instrumentation Diagram"})]}),d.jsx(us,{size:17,"aria-hidden":"true"})]})]}),d.jsxs("button",{className:"btn primary discipline-submit",type:"submit",disabled:!s,"data-testid":"button-open-discipline",children:["Open workspace ",d.jsx(nw,{size:16,"aria-hidden":"true"})]})]}),d.jsxs("div",{className:"chooser-foot",children:[d.jsx(ps,{size:15}),d.jsxs("span",{children:[d.jsx("strong",{children:"Stored in this browser only."})," Nothing is uploaded or shared."]})]})]}),d.jsxs("footer",{className:"chooser-footer",children:[d.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),d.jsx("span",{children:"PDFs and project data stay in this browser"}),d.jsx("span",{children:"© 2026 gaurav.cbiindia"})]})]})}function DE(){return d.jsx("main",{className:"chooser-page not-found",children:d.jsxs("div",{className:"not-found-card",children:[d.jsx("div",{className:"eyebrow",children:"Page not found"}),d.jsx("h1",{children:"This workspace does not exist."}),d.jsx(ra,{href:"/",className:"btn primary","data-testid":"link-not-found-home",children:"Return to disciplines"})]})})}const Wu="pid-mapping-studio:hierarchies:v2",Oy="pid-mapping-studio:hierarchies:v1",Si=80,AE=128,TE=5e3,CE=64;class Io extends Error{rawValue;constructor(s,o=null){super(s),this.name="HierarchyLoadError",this.rawValue=o}}function wu(){return{version:2,pfd:[],pid:[]}}function Zu(n,s){return Object.keys(n).length===s.length&&s.every(l=>Object.prototype.hasOwnProperty.call(n,l))}function Di(n,s,o=new Set){let l=0;const i=(p,m)=>{if(m>CE)return!1;for(const u of p){if(!u||typeof u!="object"||Array.isArray(u))return!1;const y=u;if(!Zu(y,s?["id","name","kind","expanded","children"]:["id","name","expanded","children"])||typeof y.id!="string"||y.id.length===0||y.id.length>AE||typeof y.name!="string"||y.name.trim().length===0||y.name!==y.name.trim()||y.name.length>Si||s&&!["technology","projects","proposals","project","proposal","client","legacy"].includes(String(y.kind))||typeof y.expanded!="boolean"||!Array.isArray(y.children)||o.has(y.id)||(o.add(y.id),l+=1,l>TE||!i(y.children,m+1)))return!1}return!0};return i(n,0)}function _o(n,s){if(n.kind==="legacy")return(s===null||s==="legacy")&&n.children.every(l=>_o(l,"legacy"));const o={technology:null,projects:"technology",proposals:"technology",project:"projects",proposal:"proposals",client:"project"};return n.kind==="client"&&s!=="project"&&s!=="proposal"||n.kind!=="client"&&o[n.kind]!==s?!1:n.kind==="technology"?n.children.filter(l=>l.kind==="projects").length===1&&n.children.filter(l=>l.kind==="proposals").length===1&&n.children.every(l=>_o(l,"technology")):n.kind==="projects"||n.kind==="proposals"?n.children.every(l=>_o(l,n.kind)):n.kind==="project"||n.kind==="proposal"?n.children.every(l=>_o(l,n.kind)):n.children.length===0}function _y(n){if(!n||typeof n!="object"||Array.isArray(n))return!1;const s=n;if(!Zu(s,["version","pfd","pid"])||s.version!==2||!Array.isArray(s.pfd)||!Array.isArray(s.pid))return!1;const o=new Set;return Di(s.pfd,!0,o)&&Di(s.pid,!0,o)&&[...s.pfd,...s.pid].every(l=>_o(l,null))}function NE(n){if(!n||typeof n!="object"||Array.isArray(n))return!1;const s=n;if(!Zu(s,["version","pfd","pid"])||s.version!==1||!Array.isArray(s.pfd)||!Array.isArray(s.pid))return!1;const o=new Set;return Di(s.pfd,!1,o)&&Di(s.pid,!1,o)}function Eu(n){return n.map(s=>({id:s.id,name:s.name,kind:"legacy",expanded:s.expanded,children:Eu(s.children)}))}function kE(n){return{version:2,pfd:Eu(n.pfd),pid:Eu(n.pid)}}function jE(){let n;try{n=window.localStorage.getItem(Wu),n===null&&(n=window.localStorage.getItem(Oy))}catch{throw new Io("Saved groups could not be read from browser storage.")}if(n===null)return wu();let s;try{s=JSON.parse(n)}catch{throw new Io("Saved group data is not valid JSON.",n)}if(_y(s))return s;if(NE(s))return kE(s);throw new Io("Saved group data is malformed or uses an unsupported format.",n)}function RE(n){if(!_y(n))throw new Error("Groups could not be saved because the hierarchy is invalid.");window.localStorage.setItem(Wu,JSON.stringify(n))}function gi(n,s,o){return n.map(l=>l.id===s?o(l):{...l,children:gi(l.children,s,o)})}function Py(n,s){return n.filter(o=>o.id!==s).map(o=>({...o,children:Py(o.children,s)}))}function My(n,s){return s?n.id===s||n.children.some(o=>My(o,s)):!1}function xu(n){return n.reduce((s,o)=>s+1+xu(o.children),0)}function Su(n,s){if(!s)return null;for(const o of n){if(o.id===s)return o;const l=Su(o.children,s);if(l)return l}return null}function qy(n,s,o){return n.flatMap(l=>{const i=s?`${s} / ${l.name}`:l.name;return[...o(l)?[{id:l.id,label:i}]:[],...qy(l.children,i,o)]})}function Iy(n){return qy(n,"",s=>s.kind==="client"||s.kind==="legacy")}const LE="modulepreload",OE=function(n){return"/pid-mapping-studio-app/"+n},wg={},Mn=function(s,o,l){let i=Promise.resolve();if(o&&o.length>0){let y=function(h){return Promise.all(h.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const m=document.querySelector("meta[property=csp-nonce]"),u=m?.nonce||m?.getAttribute("nonce");i=y(o.map(h=>{if(h=OE(h),h in wg)return;wg[h]=!0;const g=h.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const E=document.createElement("link");if(E.rel=g?"stylesheet":LE,g||(E.as="script"),E.crossOrigin="",E.href=h,u&&E.setAttribute("nonce",u),document.head.appendChild(E),g)return new Promise((S,j)=>{E.addEventListener("load",S),E.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${h}`)))})}))}function p(m){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=m,window.dispatchEvent(u),!u.defaultPrevented)throw m}return i.then(m=>{for(const u of m||[])u.status==="rejected"&&p(u.reason);return s().catch(p)})};async function _E(){const[n,s]=await Promise.all([Mn(()=>import("./pdf-TYrZqVzP.js"),[]),Mn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);return n.GlobalWorkerOptions.workerSrc=s.default,n}function PE({fileId:n,alias:s,pageCount:o,page:l,onPageChange:i,loadBytes:p,markers:m=[],onMarkerClick:u}){const y=M.useRef(null),h=M.useRef(null),[g,v]=M.useState(0),[E,S]=M.useState("loading"),[j,T]=M.useState(0),D=M.useRef(p);return D.current=p,M.useEffect(()=>{const w=h.current;if(!w)return;v(w.clientWidth);const N=new ResizeObserver(()=>v(Math.round(w.clientWidth/24)*24));return N.observe(w),()=>N.disconnect()},[]),M.useEffect(()=>{if(!g)return;let w=!1,N=null,k=null;return S("loading"),(async()=>{try{const[q,x]=await Promise.all([_E(),D.current(n)]);if(w)return;k=q.getDocument({data:new Uint8Array(x.slice(0))});const O=await k.promise;if(w)return;const R=await O.getPage(Math.min(Math.max(l,1),O.numPages)),P=R.getViewport({scale:1}),K=Math.min(window.devicePixelRatio||1,2),ue=g/P.width*K,ne=R.getViewport({scale:ue}),le=y.current;if(!le||w)return;le.width=Math.floor(ne.width),le.height=Math.floor(ne.height),le.style.width="100%";const we=R.render({canvas:le,canvasContext:le.getContext("2d"),viewport:ne});N=we,await we.promise,w||S("ready")}catch(q){if(w||q?.name==="RenderingCancelledException")return;S("error")}})(),()=>{w=!0,N?.cancel(),k?.destroy().catch(()=>{})}},[n,l,g,j]),d.jsxs("div",{className:"ppv","data-testid":"panel-source-preview",children:[d.jsxs("div",{className:"ppv-bar",children:[d.jsx("span",{className:"ppv-label","data-testid":"text-preview-label",children:"Original source PDF · not generated CAD"}),d.jsxs("div",{className:"ppv-nav",children:[d.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Previous page",disabled:l<=1,onClick:()=>i(l-1),"data-testid":"button-preview-prev",children:d.jsx(fy,{size:15})}),d.jsxs("span",{"data-testid":"text-preview-page","aria-live":"polite",children:[s," · page ",l," of ",o]}),d.jsx("button",{type:"button",className:"ppv-btn","aria-label":"Next page",disabled:l>=o,onClick:()=>i(l+1),"data-testid":"button-preview-next",children:d.jsx(Vu,{size:15})})]})]}),d.jsxs("div",{className:"ppv-stage",ref:h,children:[d.jsxs("div",{className:"ppv-canvas-wrap",style:{visibility:E==="ready"?"visible":"hidden"},children:[d.jsx("canvas",{ref:y,"aria-label":`Original source page ${l} of ${s}`,"data-testid":"canvas-source-preview"}),E==="ready"&&m.length>0&&d.jsx("div",{className:"ppv-markers","aria-label":"Extracted tag source locations",children:m.map((w,N)=>d.jsx("button",{className:"ppv-marker",type:"button",style:{left:`${w.location.x*100}%`,top:`${w.location.y*100}%`,width:`${Math.max(w.location.width*100,1.1)}%`,height:`${Math.max(w.location.height*100,1.2)}%`},"aria-label":`OCR location for ${w.label}; verify against the PDF`,title:`${w.label} · OCR candidate location`,onClick:()=>u?.(w.id),"data-testid":`marker-source-${w.id}-${N}`,children:d.jsx("span",{children:w.label})},`${w.id}-${w.location.pageNumber}-${N}`))})]}),m.length>0&&d.jsx("div",{className:"ppv-marker-note",role:"note",children:"Red boxes show OCR candidate locations. Confirm each tag against the original PDF."}),E==="loading"&&d.jsxs("div",{className:"ppv-overlay",role:"status","data-testid":"status-preview-loading",children:[d.jsx(Ma,{size:18,className:"pdf-spin"})," Rendering page"]}),E==="error"&&d.jsxs("div",{className:"ppv-overlay ppv-error",role:"alert","data-testid":"status-preview-error",children:[d.jsx(hs,{size:18})," This page could not be shown.",d.jsx("button",{type:"button",className:"btn",onClick:()=>T(w=>w+1),"data-testid":"button-preview-retry",children:"Try again"})]})]})]})}const ru="STANDARD",ME="STANDARD";function qE(n,s,o){const l=n(),i=n(),p=n(),m=n(),u=n(),y=n(),h=n(),g=n(),v=n();function E(x,O,R){const P=n();return x(0,"TABLE"),x(2,O),x(5,P),x(330,"0"),x(100,"AcDbSymbolTable"),x(70,R),P}function S(x,O,R,P,K=n()){return x(0,O),x(O==="DIMSTYLE"?105:5,K),x(330,R),x(100,"AcDbSymbolTableRecord"),x(100,P),K}function j(x){const O=E(x,"VPORT",1);S(x,"VPORT",O,"AcDbViewportTableRecord"),x(2,"*ACTIVE"),x(70,0),x(10,0),x(20,0),x(11,1),x(21,1),x(12,s/2),x(22,o/2),x(13,0),x(23,0),x(14,10),x(24,10),x(15,10),x(25,10),x(16,0),x(26,0),x(36,1),x(17,0),x(27,0),x(37,0),x(40,o*1.1),x(41,s/o),x(42,50),x(43,0),x(44,0),x(50,0),x(51,0),x(71,0),x(72,1e3),x(73,1),x(74,3),x(75,0),x(76,0),x(77,0),x(78,0),x(281,0),x(0,"ENDTAB")}function T(x,O){for(const ue of["VIEW","UCS"])E(x,ue,0),x(0,"ENDTAB");const R=E(x,"APPID",1);S(x,"APPID",R,"AcDbRegAppTableRecord"),x(2,"ACAD"),x(70,0),x(0,"ENDTAB");const P=E(x,"DIMSTYLE",1);x(100,"AcDbDimStyleTable"),x(71,0),S(x,"DIMSTYLE",P,"AcDbDimStyleTableRecord"),x(2,ME),x(70,0),x(40,1),x(140,2.5),x(340,O),x(0,"ENDTAB");const K=E(x,"BLOCK_RECORD",2);for(const[ue,ne,le]of[["*Model_Space",y,g],["*Paper_Space",h,v]])S(x,"BLOCK_RECORD",K,"AcDbBlockTableRecord",ne),x(2,ue),x(340,le),x(70,4),x(280,1),x(281,0);x(0,"ENDTAB")}function D(x){x(0,"SECTION"),x(2,"BLOCKS");for(const[O,R]of[["*Model_Space",y],["*Paper_Space",h]])x(0,"BLOCK"),x(5,n()),x(330,R),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockBegin"),x(2,O),x(70,0),x(10,0),x(20,0),x(30,0),x(3,O),x(1,""),x(0,"ENDBLK"),x(5,n()),x(330,R),x(100,"AcDbEntity"),x(8,"0"),x(100,"AcDbBlockEnd");x(0,"ENDSEC")}function w(x,O,R,P,K=!1){x(0,K?"ACDBDICTIONARYWDFLT":"DICTIONARY"),x(5,O),x(330,R),x(100,"AcDbDictionary"),x(280,0),x(281,1);for(const[ue,ne]of P)x(3,ue),x(350,ne);K&&(x(100,"AcDbDictionaryWithDefault"),x(340,u))}function N(x,O,R,P,K){x(0,"LAYOUT"),x(5,R),x(330,p),x(100,"AcDbPlotSettings"),x(1,""),x(4,""),x(6,"");for(const ue of[40,41,42,43])x(ue,0);x(44,s),x(45,o);for(const ue of[46,47,48,49,140,141])x(ue,0);x(142,1),x(143,1),x(70,K===0?1024:0),x(72,1),x(73,0),x(74,5),x(7,""),x(75,16),x(76,0),x(77,2),x(78,300),x(147,1),x(148,0),x(149,0),x(100,"AcDbLayout"),x(1,O),x(70,1),x(71,K),x(10,0),x(20,0),x(11,s),x(21,o),x(12,0),x(22,0),x(32,0),x(14,0),x(24,0),x(34,0),x(15,s),x(25,o),x(35,0),x(146,0),x(13,0),x(23,0),x(33,0),x(16,1),x(26,0),x(36,0),x(17,0),x(27,1),x(37,0),x(76,1),x(330,P)}function k(x){x(0,"SECTION"),x(2,"OBJECTS"),w(x,l,"0",[["ACAD_GROUP",i],["ACAD_LAYOUT",p],["ACAD_PLOTSTYLENAME",m]]),w(x,i,l,[]),w(x,p,l,[["Model",g],["Layout1",v]]),w(x,m,l,[["Normal",u]],!0),x(0,"ACDBPLACEHOLDER"),x(5,u),x(330,m),N(x,"Model",g,y,0),N(x,"Layout1",v,h,1),x(0,"ENDSEC")}function q(x){x(0,"SECTION"),x(2,"CLASSES");for(const[O,R,P]of[["LAYOUT","AcDbLayout",2],["ACDBDICTIONARYWDFLT","AcDbDictionaryWithDefault",1],["ACDBPLACEHOLDER","AcDbPlaceHolder",1]])x(0,"CLASS"),x(1,O),x(2,R),x(3,"ObjectDBX Classes"),x(90,0),x(91,P),x(280,0),x(281,0);x(0,"ENDSEC")}return{modelSpace:y,normalPlotStyle:u,beginTable:E,tableRecord:S,writeViewport:j,writeRemainingTables:T,writeBlocks:D,writeObjects:k,writeClasses:q}}function ou(n){if(!Number.isFinite(n))throw new Error("A PDF coordinate is not a finite number.");return Number(n.toFixed(7)).toString()}function IE(n){return n.replace(/[\r\n\t]/g," ").replace(/\\/g,"\\\\").replace(/[^\x20-\x7e]/g,s=>`\\U+${s.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")}`)}const Eg=/[<>\/\\":;?*|,=\u0000-\u001f\u007f]/;function Uy(n){const s=n.replace(/^\uFEFF/,"").split(/\r?\n/);for(;s.at(-1)==="";)s.pop();if(!s.length||s.length%2!==0)throw new Error("DXF export rejected: the output does not contain complete group-code/value pairs.");const o=[];for(let l=0;l<s.length;l+=2){const i=Number(s[l].trim());if(!/^\d+$/.test(s[l].trim())||!Number.isInteger(i)||s[l+1]===void 0)throw new Error(`DXF export rejected: malformed group-code/value pair at line ${l+1}.`);o.push({code:i,value:s[l+1]})}if(o.at(-1)?.code!==0||o.at(-1)?.value!=="EOF")throw new Error("DXF export rejected: the output is incomplete (missing EOF).");return o}function UE(n,s,o=0){return!n||n.trim()!==n||n.length>255?!1:s==="BLOCK_RECORD"&&/^\*[A-Za-z0-9_.$-]+$/.test(n)||s==="VPORT"&&n.toUpperCase()==="*ACTIVE"?!0:o&16&&n.includes("|")?n.split("|").every(l=>l.length>0&&!Eg.test(l)):!Eg.test(n)}function $y(n,s,o,l=[]){const i=new Set;let p=!1,m=!1;for(let u=0;u<n.length;u+=1){const y=n[u];if(y.code===0&&y.value==="SECTION"&&n[u+1]?.code===2&&n[u+1]?.value==="TABLES"){p=!0,m=!0,u+=1;continue}if(!p)continue;if(y.code===0&&y.value==="ENDSEC"){p=!1;continue}if(y.code!==0||y.value!=="TABLE")continue;const h=n[u+1];if(h?.code!==2||!h.value.trim())throw new Error("DXF export rejected: a symbol table has a blank or missing table name.");const g=h.value.toUpperCase();if(i.has(g))throw new Error(`DXF export rejected: the ${g} symbol table is duplicated.`);i.add(g);const v=new Set;let E=u+1;for(;E<n.length&&n[E].code!==0;)E+=1;const S=new Set;for(let D=E;D<n.length&&!(n[D].code===0&&["ENDTAB","ENDSEC"].includes(n[D].value));D+=1)n[D].code===2&&n[D].value.trim()&&S.add(n[D].value.toUpperCase());let j=0,T=!1;for(;E<n.length&&n[E].code===0;){if(n[E].value==="ENDTAB"){T=!0,u=E;break}if(n[E].value==="ENDSEC")break;j+=1;let D=E+1;for(;D<n.length&&n[D].code!==0;)D+=1;if(n[E].value!==g)throw new Error(`DXF export rejected: ${g} contains an unexpected ${n[E].value} record at line ${E*2+2}.`);let w=-1,N=0,k="";for(let P=E+1;P<D;P+=1){if(n[P].code===2){if(w>=0)throw new Error(`DXF export rejected: ${g} record has multiple name fields at line ${P*2+1}.`);w=P}n[P].code===70&&(N=Number(n[P].value)),n[P].code===3&&(k=n[P].value)}const q=w>=0?n[w].value:"",x=!q.trim();let O=q;if(g==="STYLE"&&(N&1)!==0){const P=(w>=0?w:E)*2+2;if(w<0)throw new Error(`DXF export rejected: STYLE shape-file record is missing its group-2 name field at line ${P}.`);if(!k.trim())throw new Error(`DXF export rejected: STYLE shape-file record has no font file in group 3 at line ${P}.`);if(q!==""){if(!s)throw new Error(`DXF export rejected: STYLE shape-file record must have an empty name per DXF format at line ${P}.`);l.push({table:g,line:P,previousName:q,name:""}),n[w].value="",O=""}}else if(x||!UE(q,g,N)){const P=(w>=0?w:E)*2+2;if(!x||!["STYLE","DIMSTYLE"].includes(g))throw new Error(`DXF export rejected: ${g} table record ${j} has ${x?"a blank name":`an invalid name ${JSON.stringify(q)}`} at line ${P}. Correct the source value before exporting.`);if(!s)throw new Error(`DXF export rejected: ${g} table record ${j} still has ${x?"a blank name":"an invalid name"} after repair at line ${P}.`);const K=g==="DIMSTYLE"?"AUTOMATION_DIMSTYLE":"AUTOMATION_TEXTSTYLE";O=K;let ue=2;for(;S.has(O.toUpperCase());)O=`${K}_${ue++}`;if(S.add(O.toUpperCase()),l.push({table:g,line:P,previousName:q,name:O}),w>=0)n[w].value=O;else{let ne=E+1;for(;ne<D&&[5,105,330,100].includes(n[ne].code);)ne+=1;o.push({index:ne,pair:{code:2,value:O}})}}if(O){const P=O.toUpperCase();if(v.has(P))throw new Error(`DXF export rejected: ${g} table record ${j} duplicates the name ${JSON.stringify(O)}.`);v.add(P)}E=D}if(!T)throw new Error(`DXF export rejected: the ${g} symbol table is missing ENDTAB.`)}if(!m)throw new Error("DXF export rejected: the output has no TABLES section to validate.");if(p)throw new Error("DXF export rejected: TABLES section is missing ENDSEC.");for(const u of["STYLE","DIMSTYLE"])if(!i.has(u))throw new Error(`DXF export rejected: the required ${u} symbol table is missing.`)}function $E(n){return By(n).dxf}function By(n){const s=Uy(n),o=[],l=[];$y(s,!0,o,l),o.sort((p,m)=>m.index-p.index);for(const p of o)s.splice(p.index,0,p.pair);const i=`${s.flatMap(({code:p,value:m})=>[String(p),m]).join(`\r
`)}\r
`;return Qu(i),{dxf:i,repairs:l}}function Qu(n){$y(Uy(n),!1,[])}function BE(n){const s=Number.parseInt(n.replace("#",""),16);return Number.isFinite(s)?s:0}function vD(n,s,o){if(!Number.isFinite(s)||!Number.isFinite(o)||s<=0||o<=0)throw new Error("A DXF page must have positive finite dimensions.");const l=[],i=(w,N)=>l.push(String(w),typeof N=="number"?ou(N):N);let p=256;const m=()=>(p++).toString(16).toUpperCase(),u=qE(m,s,o),y=new Map;for(const w of n)if(w.kind==="polyline"&&w.dash?.some(N=>N>0)){const N=w.dash.map(k=>ou(k)).join(",");y.has(N)||y.set(N,{name:`PDF_DASH_${y.size+1}`,pattern:w.dash})}const h=w=>w.trim()||"0",g=w=>{i(5,m()),i(330,u.modelSpace),i(100,"AcDbEntity"),i(67,0),i(410,"Model"),i(8,h(w.layer));const N=BE(w.color);(N>>16&255)<16&&(N>>8&255)<16&&(N&255)<16?i(62,7):(i(62,256),i(420,N)),w.opacity!==void 0&&w.opacity<1&&i(440,33554432|Math.round(Math.max(0,w.opacity)*255))};u.writeClasses(i),i(0,"SECTION"),i(2,"TABLES"),u.writeViewport(i);const v=u.beginTable(i,"LTYPE",3+y.size);for(const w of["BYBLOCK","BYLAYER","CONTINUOUS"])u.tableRecord(i,"LTYPE",v,"AcDbLinetypeTableRecord"),i(2,w),i(70,0),i(3,w==="CONTINUOUS"?"Solid line":""),i(72,65),i(73,0),i(40,0);for(const{name:w,pattern:N}of y.values()){const k=N.length%2?[...N,...N]:N;u.tableRecord(i,"LTYPE",v,"AcDbLinetypeTableRecord"),i(2,w),i(70,0),i(3,"Source PDF dash pattern"),i(72,65),i(73,k.length),i(40,k.reduce((q,x)=>q+Math.abs(x),0)),k.forEach((q,x)=>{i(49,x%2?-q:q),i(74,0)})}i(0,"ENDTAB");const E=[...new Set(["0",...n.map(w=>h(w.layer))])],S=u.beginTable(i,"LAYER",E.length);for(const w of E)u.tableRecord(i,"LAYER",S,"AcDbLayerTableRecord"),i(2,w),i(70,0),i(62,7),i(6,"CONTINUOUS"),i(290,1),i(370,-3),i(390,u.normalPlotStyle);i(0,"ENDTAB");const j=u.beginTable(i,"STYLE",1),T=u.tableRecord(i,"STYLE",j,"AcDbTextStyleTableRecord");i(2,ru),i(70,0),i(40,0),i(41,1),i(50,0),i(71,0),i(42,2.5),i(3,"txt.shx"),i(4,""),i(0,"ENDTAB"),u.writeRemainingTables(i,T),i(0,"ENDSEC"),u.writeBlocks(i),i(0,"SECTION"),i(2,"ENTITIES");for(const w of n)if(w.kind==="polyline"){if(w.points.length<2)continue;i(0,"LWPOLYLINE"),g(w),i(370,w.lineWeight);const N=w.dash?.length?y.get(w.dash.map(k=>ou(k)).join(",")):void 0;N&&i(6,N.name),i(100,"AcDbPolyline"),i(90,w.points.length),i(70,(w.closed?1:0)|(N?128:0));for(const k of w.points)i(10,k.x),i(20,k.y)}else if(w.kind==="hatch"){const N=w.loops.filter(k=>k.length>=3);if(!N.length)continue;i(0,"HATCH"),g(w),i(100,"AcDbHatch"),i(10,0),i(20,0),i(30,0),i(210,0),i(220,0),i(230,1),i(2,"SOLID"),i(70,1),i(71,0),i(91,N.length);for(const k of N){i(92,2),i(72,0),i(73,1),i(93,k.length);for(const q of k)i(10,q.x),i(20,q.y);i(97,0)}i(75,0),i(76,1),i(98,0)}else{if(!w.text.trim()||!(w.height>0))continue;const N=w.text.match(/[\s\S]{1,180}/g)??[];let k=0;for(const q of N){const x=k/w.text.length,O=(k+q.length)/w.text.length,R={x:w.start.x+(w.end.x-w.start.x)*x,y:w.start.y+(w.end.y-w.start.y)*x},P={x:w.start.x+(w.end.x-w.start.x)*O,y:w.start.y+(w.end.y-w.start.y)*O};i(0,"TEXT"),g(w),i(100,"AcDbText"),i(10,R.x),i(20,R.y),i(30,0),i(40,w.height),i(1,IE(q)),i(50,w.rotation),i(7,ru),i(72,Math.hypot(P.x-R.x,P.y-R.y)>1e-8?5:0),i(11,P.x),i(21,P.y),i(31,0),i(100,"AcDbText"),i(73,0),k+=q.length}}i(0,"ENDSEC"),u.writeObjects(i),i(0,"EOF");const D=l.splice(0);return i(0,"SECTION"),i(2,"HEADER"),i(9,"$ACADVER"),i(1,"AC1018"),i(9,"$DWGCODEPAGE"),i(3,"ANSI_1252"),i(9,"$HANDSEED"),i(5,p.toString(16).toUpperCase()),i(9,"$INSUNITS"),i(70,4),i(9,"$MEASUREMENT"),i(70,1),i(9,"$INSBASE"),i(10,0),i(20,0),i(30,0),i(9,"$EXTMIN"),i(10,0),i(20,0),i(30,0),i(9,"$EXTMAX"),i(10,s),i(20,o),i(30,0),i(9,"$LIMMIN"),i(10,0),i(20,0),i(9,"$LIMMAX"),i(10,s),i(20,o),i(9,"$TILEMODE"),i(70,1),i(9,"$CTAB"),i(1,"Model"),i(9,"$CLAYER"),i(8,"0"),i(9,"$CELTYPE"),i(6,"BYLAYER"),i(9,"$TEXTSTYLE"),i(7,ru),i(9,"$CECOLOR"),i(62,256),i(9,"$LTSCALE"),i(40,1),i(9,"$CELTSCALE"),i(40,1),i(9,"$PSLTSCALE"),i(70,0),i(0,"ENDSEC"),$E(`${l.concat(D).join(`\r
`)}\r
`)}const FE=["LTYPE","LAYER","STYLE","APPID","DIMSTYLE","BLOCK_RECORD"];function zE(n){const s=n.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;s.at(-1)==="";)s.pop();if(!s.length||s.length%2!==0)throw new Error("DXF structural repair rejected: incomplete group-code/value pairs.");const o=[];for(let l=0;l<s.length;l+=2){const i=Number(s[l].trim());if(!/^\d+$/.test(s[l].trim())||!Number.isInteger(i))throw new Error(`DXF structural repair rejected: invalid group code at line ${l+1}.`);o.push({code:i,value:s[l+1]})}return o}function YE(n){return`${n.flatMap(({code:s,value:o})=>[String(s),o]).join(`\r
`)}\r
`}function VE(n){const s=zE(n),o=new Map;let l="",i=-1;for(let T=0;T<s.length;T+=1){const D=s[T];if(D.code===0&&D.value.trim().toUpperCase()==="SECTION"&&s[T+1]?.code===2){l=s[++T].value.trim().toUpperCase();continue}if(D.code===0&&D.value.trim().toUpperCase()==="ENDSEC"){l==="TABLES"&&(i=T),l="";continue}if(l!=="TABLES"||D.code!==0||D.value.trim().toUpperCase()!=="TABLE")continue;const w=s[T+1]?.code===2?s[T+1].value.trim().toUpperCase():"";if(!w)throw new Error("DXF structural repair rejected: a TABLES record has no table name.");let N=T+1;for(;N<s.length&&!(s[N].code===0&&s[N].value.trim().toUpperCase()==="ENDTAB");)N+=1;if(N>=s.length)throw new Error(`DXF structural repair rejected: ${w} table is missing ENDTAB.`);o.set(w,{start:T,end:N,name:w})}if(i<0)throw new Error("DXF structural repair rejected: TABLES section is missing ENDSEC.");for(const T of FE)if(!o.has(T))throw new Error(`DXF structural repair rejected: required ${T} symbol table is missing; re-save the source as a modern ASCII DXF.`);const p=new Set(s.filter(T=>T.code===5||T.code===105).map(T=>T.value.trim().toUpperCase()).filter(T=>/^[0-9A-F]+$/.test(T)));let m=0n;for(const T of p){const D=BigInt(`0x${T}`);D>m&&(m=D)}const u=()=>{do m+=1n;while(p.has(m.toString(16).toUpperCase()));const T=m.toString(16).toUpperCase();return p.add(T),T},y=(...T)=>{const D=[];for(let w=0;w<T.length;w+=2)D.push({code:Number(T[w]),value:String(T[w+1])});return D},h=[],g=T=>y(0,"TABLE",2,T,5,u(),330,"0",100,"AcDbSymbolTable",70,0,0,"ENDTAB"),v=()=>{const T=u();return y(0,"TABLE",2,"VPORT",5,T,330,"0",100,"AcDbSymbolTable",70,1,0,"VPORT",5,u(),330,T,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0,0,"ENDTAB")},E=["VPORT","VIEW","UCS"].filter(T=>!o.has(T));for(const T of E){const D=T==="VPORT"?v():g(T);s.splice(i,0,...D),i+=D.length,h.push(T)}const S=o.get("VPORT");if(S){let T=!1;for(let D=S.start+1;D<S.end;D+=1){if(s[D].code!==0||s[D].value.trim().toUpperCase()!=="VPORT")continue;let w=D+1;for(;w<S.end&&s[w].code!==0;)w+=1;if(s.slice(D,w).some(N=>N.code===2&&N.value.trim().toUpperCase()==="*ACTIVE")){T=!0;break}D=w-1}if(!T){const D=s.findIndex((x,O)=>O>S.start&&O<S.end&&x.code===0),w=s.slice(S.start+1,D).find(x=>x.code===5)?.value.trim();if(!w)throw new Error("DXF structural repair rejected: VPORT table header has no handle.");const N=s.findIndex((x,O)=>O>S.start&&O<D&&x.code===70);N<0?s.splice(D,0,{code:70,value:"1"}):s[N].value=String(Number(s[N].value)+1);const k=y(0,"VPORT",5,u(),330,w,100,"AcDbSymbolTableRecord",100,"AcDbViewportTableRecord",2,"*ACTIVE",70,0,10,0,20,0,11,1,21,1,12,0,22,0,13,0,23,0,14,10,24,10,15,10,25,10,16,0,26,0,36,1,17,0,27,0,37,0,40,1e3,41,1,42,50,43,0,44,0,50,0,51,0,71,0,72,1e3,73,1,74,3,75,0,76,0,77,0,78,0,281,0),q=s.findIndex((x,O)=>O>S.start&&x.code===0&&x.value.trim().toUpperCase()==="ENDTAB");s.splice(q,0,...k),h.push("VPORT:*ACTIVE")}}if(!h.length)return{dxf:n,addedTables:h};const j=YE(s);return Qu(j),{dxf:j,addedTables:h}}function Nr(n){if(n.byteLength>50*1024*1024)throw new Error("DXF repair limit is 50 MB per file. The original file was not changed.");let s="";const o=n[0]===239&&n[1]===187&&n[2]===191?3:0;for(let u=o;u<n.length;u+=16384)s+=String.fromCharCode(...n.subarray(u,u+16384));if(s.startsWith("AutoCAD Binary DXF"))throw new Error("Binary DXF cannot be repaired in this browser. Save an ASCII DXF copy in AutoCAD first.");const l=By(s),i=VE(l.dxf);if(!l.repairs.length&&!i.addedTables.length)return{content:n,repairs:[],addedTables:[]};const p=i.addedTables.length?i.dxf:l.dxf,m=new Uint8Array(p.length);for(let u=0;u<p.length;u+=1)m[u]=p.charCodeAt(u);return{content:m,repairs:l.repairs,addedTables:i.addedTables}}function HE(){const[n,s]=M.useState(""),[o,l]=M.useState(!1),[i,p]=M.useState(!1),m=M.useRef(null);async function u(y){l(!0),p(!1),s("");try{const h=Nr(new Uint8Array(await y.arrayBuffer())),g=new Blob([new Uint8Array(h.content)],{type:"application/dxf"}),v=URL.createObjectURL(g),E=document.createElement("a");E.href=v,E.download="REPAIRED_DRAWING.dxf",document.body.appendChild(E),E.click(),E.remove(),window.setTimeout(()=>URL.revokeObjectURL(v),1e4),s(`${h.repairs.length} symbol-table name(s) repaired; validated copy downloaded. Original file unchanged. AutoCAD open test still required.`)}catch(h){p(!0),s(h instanceof Error?h.message:"DXF repair failed. No download was created.")}finally{l(!1)}}return d.jsxs("div",{className:"dxf-repair-control",children:[d.jsx("button",{className:"btn",type:"button",disabled:o,onClick:()=>m.current?.click(),children:o?"Checking DXF…":"Repair an existing DXF"}),d.jsx("input",{ref:m,type:"file",accept:".dxf",disabled:o,"aria-label":"DXF to repair",hidden:!0,onChange:y=>{const h=y.target.files?.[0];y.target.value="",h&&u(h)}}),d.jsx("p",{children:"Local only · Repairs blank ordinary STYLE/DIMSTYLE names and preserves anonymous SHX shape-font STYLE records as DXF requires. Geometry, layers and SHX definitions stay unchanged. Maximum 50 MB."}),n&&d.jsx("p",{role:i?"alert":"status",children:n})]})}var qa=Uint8Array,Ar=Uint16Array,GE=Int32Array,Fy=new qa([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),zy=new qa([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),XE=new qa([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Yy=function(n,s){for(var o=new Ar(31),l=0;l<31;++l)o[l]=s+=1<<n[l-1];for(var i=new GE(o[30]),l=1;l<30;++l)for(var p=o[l];p<o[l+1];++p)i[p]=p-o[l]<<5|l;return{b:o,r:i}},Vy=Yy(Fy,2),Hy=Vy.b,KE=Vy.r;Hy[28]=258,KE[258]=28;var WE=Yy(zy,0),ZE=WE.b,Du=new Ar(32768);for(var mt=0;mt<32768;++mt){var is=(mt&43690)>>1|(mt&21845)<<1;is=(is&52428)>>2|(is&13107)<<2,is=(is&61680)>>4|(is&3855)<<4,Du[mt]=((is&65280)>>8|(is&255)<<8)>>1}var Uo=(function(n,s,o){for(var l=n.length,i=0,p=new Ar(s);i<l;++i)n[i]&&++p[n[i]-1];var m=new Ar(s);for(i=1;i<s;++i)m[i]=m[i-1]+p[i-1]<<1;var u;if(o){u=new Ar(1<<s);var y=15-s;for(i=0;i<l;++i)if(n[i])for(var h=i<<4|n[i],g=s-n[i],v=m[n[i]-1]++<<g,E=v|(1<<g)-1;v<=E;++v)u[Du[v]>>y]=h}else for(u=new Ar(l),i=0;i<l;++i)n[i]&&(u[i]=Du[m[n[i]-1]++]>>15-n[i]);return u}),el=new qa(288);for(var mt=0;mt<144;++mt)el[mt]=8;for(var mt=144;mt<256;++mt)el[mt]=9;for(var mt=256;mt<280;++mt)el[mt]=7;for(var mt=280;mt<288;++mt)el[mt]=8;var Gy=new qa(32);for(var mt=0;mt<32;++mt)Gy[mt]=5;var QE=Uo(el,9,1),JE=Uo(Gy,5,1),lu=function(n){for(var s=n[0],o=1;o<n.length;++o)n[o]>s&&(s=n[o]);return s},tn=function(n,s,o){var l=s/8|0;return(n[l]|n[l+1]<<8)>>(s&7)&o},iu=function(n,s){var o=s/8|0;return(n[o]|n[o+1]<<8|n[o+2]<<16)>>(s&7)},ex=function(n){return(n+7)/8|0},Ju=function(n,s,o){return(s==null||s<0)&&(s=0),(o==null||o>n.length)&&(o=n.length),new qa(n.subarray(s,o))},tx=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Pa=function(n,s,o){var l=new Error(s||tx[n]);if(l.code=n,Error.captureStackTrace&&Error.captureStackTrace(l,Pa),!o)throw l;return l},ax=function(n,s,o,l){var i=n.length,p=l?l.length:0;if(!i||s.f&&!s.l)return o||new qa(0);var m=!o,u=m||s.i!=2,y=s.i;m&&(o=new qa(i*3));var h=function(jt){var Je=o.length;if(jt>Je){var vt=new qa(Math.max(Je*2,jt));vt.set(o),o=vt}},g=s.f||0,v=s.p||0,E=s.b||0,S=s.l,j=s.d,T=s.m,D=s.n,w=i*8;do{if(!S){g=tn(n,v,1);var N=tn(n,v+1,3);if(v+=3,N)if(N==1)S=QE,j=JE,T=9,D=5;else if(N==2){var O=tn(n,v,31)+257,R=tn(n,v+10,15)+4,P=O+tn(n,v+5,31)+1;v+=14;for(var K=new qa(P),ue=new qa(19),ne=0;ne<R;++ne)ue[XE[ne]]=tn(n,v+ne*3,7);v+=R*3;for(var le=lu(ue),we=(1<<le)-1,ge=Uo(ue,le,1),ne=0;ne<P;){var ce=ge[tn(n,v,we)];v+=ce&15;var k=ce>>4;if(k<16)K[ne++]=k;else{var V=0,re=0;for(k==16?(re=3+tn(n,v,3),v+=2,V=K[ne-1]):k==17?(re=3+tn(n,v,7),v+=3):k==18&&(re=11+tn(n,v,127),v+=7);re--;)K[ne++]=V}}var ye=K.subarray(0,O),Ae=K.subarray(O);T=lu(ye),D=lu(Ae),S=Uo(ye,T,1),j=Uo(Ae,D,1)}else Pa(1);else{var k=ex(v)+4,q=n[k-4]|n[k-3]<<8,x=k+q;if(x>i){y&&Pa(0);break}u&&h(E+q),o.set(n.subarray(k,x),E),s.b=E+=q,s.p=v=x*8,s.f=g;continue}if(v>w){y&&Pa(0);break}}u&&h(E+131072);for(var _=(1<<T)-1,Q=(1<<D)-1,U=v;;U=v){var V=S[iu(n,v)&_],G=V>>4;if(v+=V&15,v>w){y&&Pa(0);break}if(V||Pa(2),G<256)o[E++]=G;else if(G==256){U=v,S=null;break}else{var oe=G-254;if(G>264){var ne=G-257,he=Fy[ne];oe=tn(n,v,(1<<he)-1)+Hy[ne],v+=he}var be=j[iu(n,v)&Q],ze=be>>4;be||Pa(3),v+=be&15;var Ae=ZE[ze];if(ze>3){var he=zy[ze];Ae+=iu(n,v)&(1<<he)-1,v+=he}if(v>w){y&&Pa(0);break}u&&h(E+131072);var Ie=E+oe;if(E<Ae){var lt=p-Ae,ft=Math.min(Ae,Ie);for(lt+E<0&&Pa(3);E<ft;++E)o[E]=l[lt+E]}for(;E<Ie;++E)o[E]=o[E-Ae]}}s.l=S,s.p=U,s.b=E,s.f=g,S&&(g=1,s.m=T,s.d=j,s.n=D)}while(!g);return E!=o.length&&m?Ju(o,0,E):o.subarray(0,E)},nx=new qa(0),mn=function(n,s){return n[s]|n[s+1]<<8},Ka=function(n,s){return(n[s]|n[s+1]<<8|n[s+2]<<16|n[s+3]<<24)>>>0},cu=function(n,s){return Ka(n,s)+Ka(n,s+4)*4294967296};function sx(n,s){return ax(n,{i:2},s&&s.out,s&&s.dictionary)}var Au=typeof TextDecoder<"u"&&new TextDecoder,rx=0;try{Au.decode(nx,{stream:!0}),rx=1}catch{}var ox=function(n){for(var s="",o=0;;){var l=n[o++],i=(l>127)+(l>223)+(l>239);if(o+i>n.length)return{s,r:Ju(n,o-1)};i?i==3?(l=((l&15)<<18|(n[o++]&63)<<12|(n[o++]&63)<<6|n[o++]&63)-65536,s+=String.fromCharCode(55296|l>>10,56320|l&1023)):i&1?s+=String.fromCharCode((l&31)<<6|n[o++]&63):s+=String.fromCharCode((l&15)<<12|(n[o++]&63)<<6|n[o++]&63):s+=String.fromCharCode(l)}};function lx(n,s){if(s){for(var o="",l=0;l<n.length;l+=16384)o+=String.fromCharCode.apply(null,n.subarray(l,l+16384));return o}else{if(Au)return Au.decode(n);var i=ox(n),p=i.s,o=i.r;return o.length&&Pa(8),p}}var ix=function(n,s){return s+30+mn(n,s+26)+mn(n,s+28)},cx=function(n,s,o){var l=mn(n,s+28),i=mn(n,s+30),p=lx(n.subarray(s+46,s+46+l),!(mn(n,s+8)&2048)),m=s+46+l,u=dx(n,m,i,o,Ka(n,s+20),Ka(n,s+24),Ka(n,s+42)),y=u[0],h=u[1],g=u[2];return[mn(n,s+10),y,h,p,m+i+mn(n,s+32),g]},dx=function(n,s,o,l,i,p,m){var u=i==4294967295,y=p==4294967295,h=m==4294967295,g=s+o,v=u+y+h;if(l&&v){for(;s+4<g;s+=4+mn(n,s+2))if(mn(n,s)==1)return[u?cu(n,s+4+8*y):i,y?cu(n,s+4):p,h?cu(n,s+4+8*(y+u)):m,1];l<2&&Pa(13)}return[i,p,m,0]};function xg(n,s){for(var o={},l=n.length-22;Ka(n,l)!=101010256;--l)(!l||n.length-l>65558)&&Pa(13);var i=mn(n,l+8);if(!i)return{};var p=Ka(n,l+16),m=Ka(n,l-20)==117853008;if(m){var u=Ka(n,l-12);m=Ka(n,u)==101075792,m&&(i=Ka(n,u+32),p=Ka(n,u+48))}for(var y=0;y<i;++y){var h=cx(n,p,m),g=h[0],v=h[1],E=h[2],S=h[3],j=h[4],T=h[5],D=ix(n,T);p=j,g?g==8?o[S]=sx(n.subarray(D,D+v),{out:new qa(E)}):Pa(14,"unknown compression type "+g):o[S]=Ju(n,D,D+v)}return o}const Sg=128,Vt=1e-9;function Po(n,s,o){return(s[0]-n[0])*(o[1]-n[1])-(s[1]-n[1])*(o[0]-n[0])}function ui(n,s,o){return Math.abs(Po(n,s,o))<=Vt&&o[0]>=Math.min(n[0],s[0])-Vt&&o[0]<=Math.max(n[0],s[0])+Vt&&o[1]>=Math.min(n[1],s[1])-Vt&&o[1]<=Math.max(n[1],s[1])+Vt}function ux(n,s,o,l){const i=Po(n,s,o),p=Po(n,s,l),m=Po(o,l,n),u=Po(o,l,s);return(i>Vt&&p<-Vt||i<-Vt&&p>Vt)&&(m>Vt&&u<-Vt||m<-Vt&&u>Vt)?!0:Math.abs(i)<=Vt&&ui(n,s,o)||Math.abs(p)<=Vt&&ui(n,s,l)||Math.abs(m)<=Vt&&ui(o,l,n)||Math.abs(u)<=Vt&&ui(o,l,s)}function fx(n){return n.reduce((s,o,l)=>{const i=n[(l+1)%n.length];return s+o[0]*i[1]-i[0]*o[1]},0)/2}function qs(n){const s=n.split(";").map(l=>l.trim()).filter(Boolean);if(s.length<3||s.length>Sg)throw new Error(`Enter 3-${Sg} valve-body outline points.`);const o=s.map((l,i)=>{const p=l.split(",").map(u=>u.trim());if(p.length!==2||!p[0]||!p[1])throw new Error(`Mask point ${i+1} must be written as X,Y.`);const m=[Number(p[0]),Number(p[1])];if(!m.every(Number.isFinite))throw new Error(`Mask point ${i+1} must contain finite X,Y values.`);return m});if(o.some((l,i)=>{const p=o[(i+1)%o.length];return Math.hypot(l[0]-p[0],l[1]-p[1])<=Vt}))throw new Error("The valve mask outline cannot contain duplicate adjacent points.");for(let l=0;l<o.length;l+=1){const i=(l+1)%o.length;for(let p=l+1;p<o.length;p+=1){const m=(p+1)%o.length;if(!(l===p||i===p||m===l)&&ux(o[l],o[i],o[p],o[m]))throw new Error("The valve mask outline must not cross or touch itself.")}}if(Math.abs(fx(o))<=Vt)throw new Error("The valve mask outline must enclose an area.");return o}function px(n){return`(${n.map(([s,o])=>`(${s} ${o})`).join(" ")})`}const Tu=["PFD","P&ID","Data sheet"],Ps=["A0","A1","A2","A3","A4"],Xy="pid-mapping-studio:cad-standards:v1";function Cu(){return{schemaVersion:"1.0.0",companyDefaults:{PFD:"A1","P&ID":"A1","Data sheet":"A4"},companyItems:[],projects:{},reviewCandidates:[],auditTrail:[]}}function hx(){return Cu()}function Us(n,s,o){return{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:n,detail:s,...o?{projectName:o}:{}}}function Nu(n){if(!n||typeof n!="object")return!1;const s=n;return!!(typeof s.id=="string"&&typeof s.name=="string"&&typeof s.summary=="string"&&typeof s.sourceFile=="string"&&["titleBlock","layer","textStyle","linetype","dimensionStyle","symbol","directionArrow","legend"].includes(String(s.category))&&["extracted-dwg","approved-source-drawing","synthetic-demo"].includes(String(s.sourceKind))&&["company","project"].includes(String(s.scope))&&["reviewed","needs-review"].includes(String(s.reviewStatus))&&typeof s.canPromote=="boolean"&&Array.isArray(s.fields)&&s.fields.every(o=>typeof o?.label=="string"&&typeof o?.value=="string")&&(s.sheetSize===void 0||Ps.includes(s.sheetSize))&&(s.scope!=="project"||typeof s.projectId=="string"&&typeof s.projectName=="string"))}function mx(n){if(!n||typeof n!="object")return!1;const s=n;return!!(typeof s.id=="string"&&Nu(s.item)&&["company","project","unclassified"].includes(String(s.proposedScope))&&typeof s.sourceGroup=="string"&&["needs-review","approved","dismissed"].includes(String(s.status))&&(s.proposedScope==="company"||typeof s.projectId=="string"&&typeof s.projectName=="string"))}function Ky(n){if(!n||typeof n!="object")return!1;const s=n;return s.schemaVersion!=="1.0.0"||!s.companyDefaults||!s.companyItems||!Array.isArray(s.companyItems)||!s.projects||typeof s.projects!="object"||s.reviewCandidates!==void 0&&!Array.isArray(s.reviewCandidates)||!Array.isArray(s.auditTrail)||!Tu.every(o=>Ps.includes(s.companyDefaults[o]))||!s.companyItems.every(o=>Nu(o)&&o.scope==="company")||!(s.reviewCandidates??[]).every(o=>mx(o))||!s.auditTrail.every(o=>!!(o&&typeof o.id=="string"&&typeof o.at=="string"&&typeof o.action=="string"&&typeof o.detail=="string"))?!1:Object.entries(s.projects).every(([o,l])=>!!(o&&l&&typeof l.projectName=="string"&&l.defaults&&Object.entries(l.defaults).every(([i,p])=>Tu.includes(i)&&Ps.includes(p))&&Array.isArray(l.items)&&l.items.every(i=>Nu(i)&&i.scope==="project"&&i.projectId===o)))}const zo="cad-standards-changed";function Yo(n){if(!Ky(n))throw new Error("CAD standards could not be saved because the library data is invalid.");try{window.localStorage.setItem(Xy,JSON.stringify(n))}catch{throw new Error("This browser could not save the CAD standards locally. Export or back up the library before leaving this page.")}typeof window.dispatchEvent=="function"&&window.dispatchEvent(new Event(zo))}function pn(){let n;try{n=window.localStorage.getItem(Xy)}catch{throw new Error("This browser could not read its local CAD standards library.")}if(n===null){const y=Cu();return Yo(y),y}let s;try{s=JSON.parse(n)}catch{throw new Error("The locally saved CAD standards library is not valid JSON. It was left unchanged.")}if(!Ky(s))throw new Error("The locally saved CAD standards library has invalid fields. It was left unchanged.");const o={...s,reviewCandidates:s.reviewCandidates??[]},l=Cu(),i=l.companyItems.filter(y=>!o.companyItems.some(h=>h.id===y.id)),p=new Set(o.reviewCandidates.map(y=>y.id)),m=l.reviewCandidates.filter(y=>!p.has(y.id));if(!i.length&&!m.length)return o;const u={...o,companyItems:[...o.companyItems,...i],reviewCandidates:[...o.reviewCandidates,...m],auditTrail:[...o.auditTrail,Us("Source mappings added to review queue",`${m.length} anonymized source mappings were added as pending review. Existing approvals, dismissals, and project settings were preserved.`)]};return Yo(u),u}function gx(n,s){return n.some(o=>o.category==="titleBlock"&&o.reviewStatus==="reviewed"&&(o.sheetSize===s||o.fields.some(l=>l.label==="Sheet size"&&l.value===s)))}function yx(n,s,o){if(n.companyDefaults[s]===o)return n;if(!gx(n.companyItems,o))throw new Error(`Approve a company title-block mapping for ${o} before making it a company default.`);return{...n,companyDefaults:{...n.companyDefaults,[s]:o},auditTrail:[Us("Company sheet-size default changed",`${s} changed to ${o} after an approved company title-block mapping was available.`),...n.auditTrail]}}function Ai(n,s,o,l=[],i){const p=n.reviewCandidates.find(S=>S.id===s);if(!p||p.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");if(o==="company"&&p.proposedScope!=="company")throw new Error("Only a source classified for the Legends Library can be approved there.");if(o==="project"&&p.proposedScope==="company")throw new Error("Legends Library source mappings must be approved to the Legends Library.");if(i&&!(p.item.sourceKind==="extracted-dwg"&&["symbol","directionArrow"].includes(p.item.category)&&["symbol","directionArrow"].includes(i)))throw new Error("Only an extracted CAD block can be reviewed as a Direction Arrow or a standard symbol.");const m=i??p.item.category;let u=[...p.item.fields.filter(S=>!l.some(j=>j.label===S.label)),...l];if(m==="directionArrow"&&(u=u.filter(S=>!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(S.label))),m==="symbol"&&p.item.sourceKind==="extracted-dwg"&&(!u.some(S=>S.label==="Fallback category"&&S.value.trim())||!u.some(S=>S.label==="Block asset ID"&&S.value.trim())))throw new Error("A fallback category and locally extracted block file are required before approving this symbol.");if(m==="symbol"&&p.item.sourceKind==="extracted-dwg"&&u.find(S=>S.label==="Fallback category")?.value.trim().toLowerCase()==="valve"){const S=u.find(j=>j.label==="Wipeout mask boundary")?.value??"";try{qs(S)}catch(j){throw new Error(`A reviewed valve-body mask outline is required before approving this valve. ${j instanceof Error?j.message:"Check the X,Y point list."}`)}}if(m==="symbol"&&p.item.sourceKind==="extracted-dwg"){const S=u.find(w=>w.label==="Target CAD layer")?.value.trim()??"",j=u.find(w=>w.label==="Source discipline")?.value.trim()??"";if(!(o==="company"?n.companyItems:[...p.projectId?n.projects[p.projectId]?.items??[]:[],...n.companyItems]).some(w=>{if(w.category!=="layer"||w.sourceKind!=="extracted-dwg"||w.reviewStatus!=="reviewed")return!1;const N=w.fields.find(x=>x.label==="CAD name")?.value.trim()??"",k=w.fields.find(x=>x.label==="Source discipline")?.value.trim()??"",q=j==="Shared"?k==="Shared":k==="Shared"||k===j;return S&&S.toUpperCase()!=="0"&&N.toLowerCase()===S.toLowerCase()&&q}))throw new Error("Approve a compatible non-zero CAD layer before approving this symbol. Layer 0 cannot be used for block placement.")}const y={...p.item,category:m,fields:u,scope:o,reviewStatus:"reviewed",canPromote:!1,...o==="project"?{projectId:p.projectId,projectName:p.projectName}:{projectId:void 0,projectName:void 0}};let h=n.companyItems,g=n.projects;if(o==="company")h=[...n.companyItems.filter(S=>S.id!==y.id),y];else{const S=p.projectId,j=p.projectName;if(!S||!j)throw new Error("The isolated project scope is not available for this mapping.");const T=n.projects[S]??{projectName:j,defaults:{},items:[]};g={...n.projects,[S]:{...T,projectName:j,items:[...T.items.filter(D=>D.id!==y.id),y]}}}const v=n.reviewCandidates.map(S=>S.id===s?{...S,status:"approved"}:S),E=o==="company"?"Legends Library":`isolated ${p.projectName} library`;return{...n,companyItems:h,projects:g,reviewCandidates:v,auditTrail:[Us("Source mapping approved",`${m} mapping ${p.item.name} was approved to ${E}.`,p.projectName),...n.auditTrail]}}const ku={EQUIP:{layerName:"EQUIP",fallbackCategory:"equipment"},F_EQUIP:{layerName:"f_Equip",fallbackCategory:"equipment"},F_INST:{layerName:"f_Inst",fallbackCategory:"instrument"},F_PIPE_INLINE:{layerName:"f_Pipe_Inline",fallbackCategory:"inline component"}};function ju(n,s){return n.item.fields.find(o=>o.label===s)?.value.trim()??""}function bx(n,s,o){return[...n.filter(l=>l.label!==s),{label:s,value:o}]}function vx(n){const l=ju(n,"Extracted details").match(/(?:^|;)sourceLayer=([^;]*)/i)?.[1]??ju(n,"Source insert layer(s)");return[...new Set(l.split(",").map(i=>i.trim().toUpperCase()).filter(Boolean))]}function _s(n){return n.fields.find(s=>s.label==="CAD name")?.value.trim()??""}function wx(n){return n.fields.find(s=>s.label==="Source drawing ID")?.value.trim()??""}function Dg(n){return n.fields.find(s=>s.label==="Extracted details")?.value.trim()??""}function Wy(n){return n.fields.find(s=>s.label==="Source discipline")?.value.trim()??""}function Ex(n,s){return n.category==="layer"&&n.sourceKind==="extracted-dwg"&&n.reviewStatus==="reviewed"&&n.scope==="company"&&_s(n).toUpperCase()===s.toUpperCase()&&Wy(n).toUpperCase()==="SHARED"}function xx(n,s,o){const l=new Set(s),i={unsupportedLayer:0,ambiguousLayer:0,missingAsset:0,missingLayer:0,invalidCandidate:0},p=n.reviewCandidates.filter(E=>E.status==="needs-review"&&E.proposedScope==="company"&&l.has(E.sourceGroup)),m=new Map,u=[];for(const E of p){if(E.item.category!=="symbol"||E.item.sourceKind!=="extracted-dwg")continue;const S=vx(E);if(S.length!==1){i.ambiguousLayer+=S.length>1?1:0,i.unsupportedLayer+=S.length===0?1:0;continue}const j=S[0].toUpperCase(),T=ku[j];if(!T){i.unsupportedLayer+=1;continue}const D=ju(E,"Block asset ID");if(!D||!o.has(D)){i.missingAsset+=1;continue}const w=`${E.sourceGroup}|${j}`;m.set(w,{sourceId:E.sourceGroup,layerName:T.layerName}),u.push({candidateId:E.id,sourceId:E.sourceGroup,layerKey:w,fallbackCategory:T.fallbackCategory,blockAssetId:D})}let y=n;const h=new Map;let g=0;for(const[E,S]of m){const j=y.companyItems.find(w=>w.category==="layer"&&w.sourceKind==="extracted-dwg"&&w.reviewStatus==="reviewed"&&wx(w)===S.sourceId&&_s(w).toUpperCase()===S.layerName.toUpperCase());if(j){const w={...j,fields:bx(j.fields,"Source discipline","Shared")};y={...y,companyItems:y.companyItems.map(N=>N.id===j.id?w:N),reviewCandidates:y.reviewCandidates.map(N=>N.id===j.id?{...N,item:w}:N)},Wy(j).toUpperCase()!=="SHARED"&&(g+=1),h.set(E,_s(w));continue}const T=y.reviewCandidates.find(w=>w.status==="needs-review"&&w.proposedScope==="company"&&w.sourceGroup===S.sourceId&&w.item.category==="layer"&&w.item.sourceKind==="extracted-dwg"&&_s(w.item).toUpperCase()===S.layerName.toUpperCase()),D=y.companyItems.find(w=>Ex(w,S.layerName));if(D){const w=T?Dg(T.item):"",N=Dg(D);if(!T||w&&w===N){h.set(E,_s(D));continue}i.invalidCandidate+=1;continue}if(!T){i.missingLayer+=1;continue}try{y=Ai(y,T.id,"company",[{label:"Source discipline",value:"Shared"}]);const w=y.companyItems.find(k=>k.id===T.item.id),N=_s(w||T.item);h.set(E,N),g+=1}catch{i.invalidCandidate+=1}}let v=0;for(const E of u){const S=h.get(E.layerKey);if(!S){i.missingLayer+=1;continue}try{y=Ai(y,E.candidateId,"company",[{label:"Source discipline",value:"Shared"},{label:"Fallback category",value:E.fallbackCategory},{label:"Target CAD layer",value:S}]),v+=1}catch{i.invalidCandidate+=1}}return(g||v)&&(y={...y,auditTrail:[Us("Categorized CAD source batch approved",`${g} placement layer(s) and ${v} layer-matched symbol(s) approved for shared PFD/P&ID use.`),...n.auditTrail]}),{library:y,approvedLayers:g,approvedSymbols:v,skipped:i}}function Sx(n,s,o){const l=n.companyItems.find(g=>g.id===s),i=Object.entries(n.projects).find(([,g])=>g.items.some(v=>v.id===s)),p=l??i?.[1].items.find(g=>g.id===s);if(!p||p.reviewStatus!=="reviewed")throw new Error("The selected approved CAD mapping is no longer available.");if(p.category!=="symbol"||p.sourceKind!=="extracted-dwg")throw new Error("Only reviewed extracted symbol mappings can be updated here.");const m=[...p.fields.filter(g=>!o.some(v=>v.label===g.label)),...o];if(m.find(g=>g.label==="Fallback category")?.value.trim().toLowerCase()==="valve")try{qs(m.find(g=>g.label==="Wipeout mask boundary")?.value??"")}catch(g){throw new Error(`A reviewed valve-body mask outline is required. ${g instanceof Error?g.message:"Check the X,Y point list."}`)}const u={...p,fields:m},y=l?n.companyItems.map(g=>g.id===s?u:g):n.companyItems,h=i?{...n.projects,[i[0]]:{...i[1],items:i[1].items.map(g=>g.id===s?u:g)}}:n.projects;return{...n,companyItems:y,projects:h,auditTrail:[Us("Reviewed valve mask updated",`The approved symbol mapping ${p.name} received a reviewed Wipeout mask outline.`,p.projectName),...n.auditTrail]}}function Dx(n,s){const o=n.reviewCandidates.find(l=>l.id===s);if(!o||o.status!=="needs-review")throw new Error("The selected source mapping is no longer awaiting review.");return{...n,reviewCandidates:n.reviewCandidates.map(l=>l.id===s?{...l,status:"dismissed"}:l),auditTrail:[Us("Source mapping dismissed",`${o.item.category} mapping ${o.item.name} was dismissed from the review queue.`,o.projectName),...n.auditTrail]}}function Ax(n,s,o,l,i){if(!s.trim()||!o.trim())throw new Error("Choose a project before saving its title-block override.");const p=n.projects[s]??{defaults:{},items:[]},m={...p.defaults,[l]:i},u=[...n.projects[s]?.items??[],...n.companyItems].find(v=>v.category==="titleBlock"&&v.reviewStatus==="reviewed"&&(v.sheetSize===i||v.fields.some(E=>E.label==="Sheet size"&&E.value===i)));if(!u)throw new Error(`Approve a title-block mapping for ${i} before saving this project default.`);const y=`project-default-${l.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,h={...u,id:y,name:`${i} · ${l} project default`,summary:`Project-only choice for ${l}. The company default remains ${n.companyDefaults[l]}.`,scope:"project",projectId:s,projectName:o,canPromote:!1,fields:[...u.fields,{label:"Override purpose",value:l},{label:"Project choice",value:i},{label:"Company default",value:n.companyDefaults[l]}]};return{...n,projects:{...n.projects,[s]:{projectName:o,defaults:m,items:[...p.items.filter(v=>v.id!==y),h]}},auditTrail:[Us("Project title-block override saved",`${l} set to ${i}; company default remains ${n.companyDefaults[l]}. Other project libraries are unchanged.`,o),...n.auditTrail]}}const Tx=(()=>{const n=new Uint32Array(256);for(let s=0;s<n.length;s+=1){let o=s;for(let l=0;l<8;l+=1)o=o&1?3988292384^o>>>1:o>>>1;n[s]=o>>>0}return n})();function Cx(n){let s=4294967295;for(const o of n)s=Tx[(s^o)&255]^s>>>8;return(s^4294967295)>>>0}function du(n,s){const o=new Uint8Array(n);return s(new DataView(o.buffer)),o}function Zy(n){if(n.length>65535)throw new Error("The local ZIP cannot contain more than 65,535 files.");const s=new TextEncoder,o=[],l=[];let i=0,p=0;for(const h of n){const g=s.encode(h.path),v=Cx(h.content),E=du(30+g.length,j=>{j.setUint32(0,67324752,!0),j.setUint16(4,20,!0),j.setUint16(6,2048,!0),j.setUint16(8,0,!0),j.setUint16(10,0,!0),j.setUint16(12,33,!0),j.setUint32(14,v,!0),j.setUint32(18,h.content.length,!0),j.setUint32(22,h.content.length,!0),j.setUint16(26,g.length,!0),j.setUint16(28,0,!0),new Uint8Array(j.buffer,30,g.length).set(g)});o.push(E,h.content);const S=du(46+g.length,j=>{j.setUint32(0,33639248,!0),j.setUint16(4,20,!0),j.setUint16(6,20,!0),j.setUint16(8,2048,!0),j.setUint16(10,0,!0),j.setUint16(12,0,!0),j.setUint16(14,33,!0),j.setUint32(16,v,!0),j.setUint32(20,h.content.length,!0),j.setUint32(24,h.content.length,!0),j.setUint16(28,g.length,!0),j.setUint16(30,0,!0),j.setUint16(32,0,!0),j.setUint16(34,0,!0),j.setUint16(36,0,!0),j.setUint32(38,0,!0),j.setUint32(42,i,!0),new Uint8Array(j.buffer,46,g.length).set(g)});l.push(S),p+=S.length,i+=E.length+h.content.length}const m=du(22,h=>{h.setUint32(0,101010256,!0),h.setUint16(4,0,!0),h.setUint16(6,0,!0),h.setUint16(8,n.length,!0),h.setUint16(10,n.length,!0),h.setUint32(12,p,!0),h.setUint32(16,i,!0),h.setUint16(20,0,!0)}),y=[...o,...l,m].map(h=>{const g=new ArrayBuffer(h.byteLength);return new Uint8Array(g).set(h),g});return new Blob(y,{type:"application/zip"})}function Nx(n,s,o){return n.filter(l=>(l.discipline===s||l.discipline==="Shared")&&(!o||l.category==="company-standard"||l.projectLabel===o))}const kx="pid-mapping-studio-local-cad-library",jx=3,gn="source-drawings",yn="extracted-block-assets",ms="project-title-blocks",Qy=100*1024*1024;function Rx(n,s){if(!/\.dwg$/i.test(n.trim()))throw new Error("Upload a standalone AutoCAD DWG title block. Save a DWT as DWG first.");if(s.byteLength>Qy)throw new Error("The project title block is larger than the 100 MB local upload limit.");const o=new TextDecoder().decode(s.subarray(0,6));if(!/^AC10\d{2}$/.test(o))throw new Error("This file does not have a recognized AutoCAD DWG header.")}function nn(){return typeof indexedDB>"u"?Promise.reject(new Error("This browser does not support local drawing-library storage.")):new Promise((n,s)=>{const o=indexedDB.open(kx,jx);o.onupgradeneeded=()=>{const l=o.result;l.objectStoreNames.contains(gn)||l.createObjectStore(gn,{keyPath:"id"}),l.objectStoreNames.contains(yn)||l.createObjectStore(yn,{keyPath:"id"}),l.objectStoreNames.contains(ms)||l.createObjectStore(ms,{keyPath:"projectId"})},o.onsuccess=()=>n(o.result),o.onerror=()=>s(o.error??new Error("The local drawing library could not be opened.")),o.onblocked=()=>s(new Error("The local drawing library is busy in another browser tab. Close the other tab and try again."))})}async function Ru(){const n=await nn();try{return await new Promise((s,o)=>{const i=n.transaction(gn,"readonly").objectStore(gn).getAll();i.onsuccess=()=>{const p=i.result;s(p.map(({id:m,label:u,category:y,discipline:h,format:g,bytes:v,projectLabel:E})=>({id:m,label:u,category:y,discipline:h??"Shared",format:g??"DWG",bytes:v,...E?{projectLabel:E}:{}})).sort((m,u)=>m.label.localeCompare(u.label)))},i.onerror=()=>o(i.error??new Error("The local drawing library could not be read."))})}finally{n.close()}}async function $o(n){const s=await nn();try{return await new Promise((o,l)=>{const i=s.transaction(gn,"readonly").objectStore(gn).get(n);i.onsuccess=()=>{const p=i.result;if(!p){l(new Error("An approved mapping refers to a source DWG that is no longer in the local library."));return}o(new Uint8Array(p.content))},i.onerror=()=>l(i.error??new Error("The local source drawing could not be read."))})}finally{s.close()}}async function Lu(n,s=!1){if(!n.length)return;const o=await nn();try{await new Promise((l,i)=>{const p=o.transaction(yn,"readwrite"),m=p.objectStore(yn);for(const u of n){const y=m.get(u.id);y.onsuccess=()=>{const h=y.result;if(s&&h)return;const g={id:u.id,sourceId:u.sourceId,blockName:u.blockName,content:u.content.slice().buffer,format:u.format??h?.format??"DWG",...u.previewSvg===null?{}:u.previewSvg!==void 0?{previewSvg:u.previewSvg}:h?.previewSvg?{previewSvg:h.previewSvg}:{},...u.nearbyLabels!==void 0?{nearbyLabels:u.nearbyLabels}:h?.nearbyLabels?{nearbyLabels:h.nearbyLabels}:{},...u.labelMatchSkipped!==void 0?{labelMatchSkipped:u.labelMatchSkipped}:h?.labelMatchSkipped!==void 0?{labelMatchSkipped:h.labelMatchSkipped}:{},...u.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:u.labelMatchAmbiguous}:h?.labelMatchAmbiguous!==void 0?{labelMatchAmbiguous:h.labelMatchAmbiguous}:{},...u.sourcePlacements!==void 0?{sourcePlacements:u.sourcePlacements}:h?.sourcePlacements?{sourcePlacements:h.sourcePlacements}:{},...u.geometryDescriptor!==void 0?{geometryDescriptor:u.geometryDescriptor}:h?.geometryDescriptor?{geometryDescriptor:h.geometryDescriptor}:{}};m.put(g)}}p.oncomplete=()=>l(),p.onerror=()=>i(p.error??new Error("Extracted symbol blocks could not be saved locally.")),p.onabort=()=>i(p.error??new Error("Saving extracted symbol blocks was cancelled."))})}finally{o.close()}}async function Lx(){const n=await nn();try{return await new Promise((s,o)=>{const l=n.transaction(yn,"readonly").objectStore(yn).getAllKeys();l.onsuccess=()=>s(new Set(l.result.map(String))),l.onerror=()=>o(l.error??new Error("Local block availability could not be checked."))})}finally{n.close()}}async function Jy(n){const s=await nn();try{return await new Promise((o,l)=>{const i=s.transaction(yn,"readonly").objectStore(yn).get(n);i.onsuccess=()=>{const p=i.result;if(!p){o({nearbyLabels:[],labelMatchSkipped:!1});return}o({format:p.format??"DWG",...p.previewSvg?{previewSvg:p.previewSvg}:{},nearbyLabels:p.nearbyLabels??[],labelMatchSkipped:p.labelMatchSkipped??!1,...p.labelMatchAmbiguous?{labelMatchAmbiguous:!0}:{},...p.sourcePlacements?{sourcePlacements:p.sourcePlacements}:{},...p.geometryDescriptor?{geometryDescriptor:p.geometryDescriptor}:{}})},i.onerror=()=>l(i.error??new Error("The local block preview could not be read."))})}finally{s.close()}}async function eb(n){const s=await nn();try{return await new Promise((o,l)=>{const i=s.transaction(yn,"readonly").objectStore(yn).get(n);i.onsuccess=()=>{const p=i.result;if(!p){l(new Error("An approved symbol block is missing from this browser’s local CAD library. Re-import its extraction package."));return}o(new Uint8Array(p.content))},i.onerror=()=>l(i.error??new Error("The approved symbol block could not be read locally."))})}finally{s.close()}}async function tb(n){if(!n.trim())return null;const s=await nn();try{return await new Promise((o,l)=>{const i=s.transaction(ms,"readonly").objectStore(ms).get(n);i.onsuccess=()=>o(i.result??null),i.onerror=()=>l(i.error??new Error("The project title block could not be read locally."))})}finally{s.close()}}async function Ag(n){const s=await tb(n);return s?{projectId:s.projectId,bytes:s.bytes,uploadedAt:s.uploadedAt}:null}async function Ox(n){const s=await tb(n);return s?{projectId:s.projectId,bytes:s.bytes,uploadedAt:s.uploadedAt,content:new Uint8Array(s.content)}:null}async function _x(n,s,o){if(!n.trim())throw new Error("Select a project before uploading its title block.");Rx(s,o);const l={projectId:n,bytes:o.byteLength,uploadedAt:new Date().toISOString(),content:o.slice().buffer},i=await nn();try{await new Promise((p,m)=>{const u=i.transaction(ms,"readwrite");u.objectStore(ms).put(l),u.oncomplete=()=>p(),u.onerror=()=>m(u.error??new Error("The project title block could not be saved locally.")),u.onabort=()=>m(u.error??new Error("Saving the project title block was cancelled."))})}finally{i.close()}return{projectId:n,bytes:l.bytes,uploadedAt:l.uploadedAt}}async function Px(n){if(!n.trim())return;const s=await nn();try{await new Promise((o,l)=>{const i=s.transaction(ms,"readwrite");i.objectStore(ms).delete(n),i.oncomplete=()=>o(),i.onerror=()=>l(i.error??new Error("The project title block could not be removed locally.")),i.onabort=()=>l(i.error??new Error("Removing the project title block was cancelled."))})}finally{s.close()}}async function Mx(n){if(!n.length)return;const s=await nn();try{await new Promise((o,l)=>{const i=s.transaction(gn,"readwrite"),p=i.objectStore(gn);for(const m of n){const u=m.content.slice().buffer,{content:y,...h}=m;p.put({...h,content:u,createdAt:new Date().toISOString()})}i.oncomplete=()=>o(),i.onerror=()=>l(i.error??new Error("The local drawing library could not be saved.")),i.onabort=()=>l(i.error??new Error("The local drawing library save was cancelled."))})}finally{s.close()}}async function qx(n,s){const o=await nn();try{await new Promise((l,i)=>{const p=o.transaction(gn,"readwrite"),m=p.objectStore(gn),u=m.get(n);u.onsuccess=()=>{const y=u.result;if(!y){p.abort(),i(new Error("That source drawing is no longer in the local library."));return}m.put({...y,...s,projectLabel:s.projectLabel?.trim()||void 0})},u.onerror=()=>i(u.error??new Error("The source drawing could not be updated.")),p.oncomplete=()=>l(),p.onerror=()=>i(p.error??new Error("The source drawing update failed.")),p.onabort=()=>i(p.error??new Error("The source drawing update was cancelled."))})}finally{o.close()}}const Ix=String.raw`
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
`,Ux=Ix+String.raw`; Local CAD standards extractor. Run in Windows AutoCAD on each source drawing.
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
`;function $x(n,s){return`SOURCE_${String(n+1).padStart(3,"0")}.${s==="DXF"?"dxf":"dwg"}`}async function Bx(n){if(n.length===0)throw new Error("There are no eligible local source drawings to package.");const s=[{path:"EXTRACT_CAD_STANDARDS.lsp",content:new TextEncoder().encode(Ux)},{path:"README_LOCAL_EXTRACTION.txt",content:new TextEncoder().encode(`LOCAL CAD STANDARDS EXTRACTION

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
`)}],o=await Promise.all(n.map(l=>$o(l.id)));return n.forEach((l,i)=>{const p=l.format==="DXF"?Nr(o[i]):null;s.push({path:$x(i,l.format),content:p?.content??o[i]})}),Zy(s)}function Tg(n,s,o){let l=0,i=0;const p=new Map([...o].map(([u,y])=>[u.toUpperCase(),y])),m=n.reviewCandidates.map(u=>{if(u.sourceGroup!==s||u.status!=="needs-review"||u.proposedScope!=="company"||u.item.category!=="symbol"||u.item.sourceKind!=="extracted-dwg")return u;const y=u.item.fields,h=y.find(T=>T.label==="Block name")?.value.trim()??"";if(!h)return u;const g=p.get(h.toUpperCase())?.sourcePlacements??[],v=[...new Set(g.map(T=>T.layer.trim()).filter(Boolean))];v.length&&(i+=1);const S=(y.find(T=>T.label==="Extracted details")?.value??"").split(";").filter(T=>!/^\s*sourceLayer=/i.test(T)).join(";"),j=[...y.filter(T=>!["Extracted details","Source insert layer(s)","Source insert rotation(s)"].includes(T.label)),{label:"Extracted details",value:S+(v.length?`;sourceLayer=${v.join(", ")}`:"")},...v.length?[{label:"Source insert layer(s)",value:v.join(", ")},{label:"Source insert rotation(s)",value:g.map(T=>`${T.rotationDegrees}° on ${T.layer} (${T.count})`).join("; ")}]:[]];return JSON.stringify(y)===JSON.stringify(j)?u:(l+=1,{...u,item:{...u.item,fields:j}})});return{library:l?{...n,reviewCandidates:m}:n,updatedRecords:l,recoveredSymbols:i}}class Fx{constructor(s){this._pointer=0,this._eof=!1,this._data=s}next(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const s={code:parseInt(this._data[this._pointer])};return this._pointer++,s.value=Cg(s.code,this._data[this._pointer].trim()),this._pointer++,s.code===0&&s.value==="EOF"&&(this._eof=!0),this.lastReadGroup=s,s}peek(){if(!this.hasNext())throw this._eof?new Error("Cannot call 'next' after EOF group has been read"):new Error("Unexpected end of input: EOF group not read before end of file. Ended on code "+this._data[this._pointer]);const s={code:parseInt(this._data[this._pointer])};return s.value=Cg(s.code,this._data[this._pointer+1].trim()),s}rewind(s=1){this._pointer=this._pointer-s*2}hasNext(){return!(this._eof||this._pointer>this._data.length-2)}isEOF(){return this._eof}}function Cg(n,s){return n<=9?s:n>=10&&n<=59?parseFloat(s):n>=60&&n<=99?parseInt(s):n>=100&&n<=109?s:n>=110&&n<=149?parseFloat(s):n>=160&&n<=179?parseInt(s):n>=210&&n<=239?parseFloat(s):n>=270&&n<=289?parseInt(s):n>=290&&n<=299?zx(s):n>=300&&n<=369?s:n>=370&&n<=389?parseInt(s):n>=390&&n<=399?s:n>=400&&n<=409?parseInt(s):n>=410&&n<=419?s:n>=420&&n<=429?parseInt(s):n>=430&&n<=439?s:n>=440&&n<=459?parseInt(s):n>=460&&n<=469?parseFloat(s):n>=470&&n<=481||n===999||n>=1e3&&n<=1009?s:n>=1010&&n<=1059?parseFloat(s):n>=1060&&n<=1071?parseInt(s):(console.log("WARNING: Group code does not have a defined type: %j",{code:n,value:s}),s)}function zx(n){if(n==="0")return!1;if(n==="1")return!0;throw TypeError("String '"+n+"' cannot be cast to Boolean type")}const ab=[0,16711680,16776960,65280,65535,255,16711935,16777215,8421504,12632256,16711680,16744319,13369344,13395558,10027008,10046540,8323072,8339263,4980736,4990502,16727808,16752511,13382400,13401958,10036736,10051404,8331008,8343359,4985600,4992806,16744192,16760703,13395456,13408614,10046464,10056268,8339200,8347455,4990464,4995366,16760576,16768895,13408512,13415014,10056192,10061132,8347392,8351551,4995328,4997670,16776960,16777087,13421568,13421670,10000384,10000460,8355584,8355647,5000192,5000230,12582656,14679935,10079232,11717734,7510016,8755276,6258432,7307071,3755008,4344870,8388352,12582783,6736896,10079334,5019648,7510092,4161280,6258495,2509824,3755046,4194048,10485631,3394560,8375398,2529280,6264908,2064128,5209919,1264640,3099686,65280,8388479,52224,6736998,38912,5019724,32512,4161343,19456,2509862,65343,8388511,52275,6737023,38950,5019743,32543,4161359,19475,2509871,65407,8388543,52326,6737049,38988,5019762,32575,4161375,19494,2509881,65471,8388575,52377,6737074,39026,5019781,32607,4161391,19513,2509890,65535,8388607,52428,6737100,39064,5019800,32639,4161407,19532,2509900,49151,8380415,39372,6730444,29336,5014936,24447,4157311,14668,2507340,32767,8372223,26316,6724044,19608,5010072,16255,4153215,9804,2505036,16383,8364031,13260,6717388,9880,5005208,8063,4149119,4940,2502476,255,8355839,204,6710988,152,5000344,127,4145023,76,2500172,4129023,10452991,3342540,8349388,2490520,6245528,2031743,5193599,1245260,3089996,8323327,12550143,6684876,10053324,4980888,7490712,4128895,6242175,2490444,3745356,12517631,14647295,10027212,11691724,7471256,8735896,6226047,7290751,3735628,4335180,16711935,16744447,13369548,13395660,9961624,9981080,8323199,8339327,4980812,4990540,16711871,16744415,13369497,13395634,9961586,9981061,8323167,8339311,4980793,4990530,16711807,16744383,13369446,13395609,9961548,9981042,8323135,8339295,4980774,4990521,16711743,16744351,13369395,13395583,9961510,9981023,8323103,8339279,4980755,4990511,3355443,5987163,8684676,11382189,14079702,16777215];function Yx(n){return ab[n]}function Ze(n){const s={};n.rewind();let o=n.next(),l=o.code;if(s.x=o.value,l+=10,o=n.next(),o.code!=l)throw new Error("Expected code for point value to be "+l+" but got "+o.code+".");return s.y=o.value,l+=10,o=n.next(),o.code!=l?(n.rewind(),s):(s.z=o.value,s)}function oa(n,s,o){switch(s.code){case 0:n.type=s.value;break;case 5:n.handle=s.value;break;case 6:n.lineType=s.value;break;case 8:n.layer=s.value;break;case 48:n.lineTypeScale=s.value;break;case 60:n.visible=s.value===0;break;case 62:n.colorIndex=s.value,n.color=Yx(Math.abs(s.value));break;case 67:n.inPaperSpace=s.value!==0;break;case 100:break;case 101:for(;s.code!=0;)s=o.next();o.rewind();break;case 330:n.ownerHandle=s.value;break;case 347:n.materialObjectHandle=s.value;break;case 370:n.lineweight=s.value;break;case 420:n.color=s.value;break;case 1e3:n.extendedData=n.extendedData||{},n.extendedData.customStrings=n.extendedData.customStrings||[],n.extendedData.customStrings.push(s.value);break;case 1001:n.extendedData=n.extendedData||{},n.extendedData.applicationName=s.value;break;default:return!1}return!0}class Vx{constructor(){this.ForEntityName="3DFACE"}parseEntity(s,o){const l={type:o.value,vertices:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 70:l.shape=(o.value&1)===1,l.hasContinuousLinetypePattern=(o.value&128)===128;break;case 10:l.vertices=Hx(s,o),o=s.lastReadGroup;break;default:oa(l,o,s);break}o=s.next()}return l}}function Hx(n,s){var o=[],l=!1,i=!1,p=4;for(let u=0;u<=p;u++){for(var m={};!n.isEOF()&&!(s.code===0||i);){switch(s.code){case 10:case 11:case 12:case 13:if(l){i=!0;continue}m.x=s.value,l=!0;break;case 20:case 21:case 22:case 23:m.y=s.value;break;case 30:case 31:case 32:case 33:m.z=s.value;break;default:return o}s=n.next()}o.push(m),l=!1,i=!1}return n.rewind(),o}class Gx{constructor(){this.ForEntityName="ARC"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.center=Ze(s);break;case 40:l.radius=o.value;break;case 50:l.startAngle=Math.PI/180*o.value;break;case 51:l.endAngle=Math.PI/180*o.value,l.angleLength=l.endAngle-l.startAngle;break;case 210:l.extrusionDirectionX=o.value;break;case 220:l.extrusionDirectionY=o.value;break;case 230:l.extrusionDirectionZ=o.value;break;default:oa(l,o,s);break}o=s.next()}return l}}class Xx{constructor(){this.ForEntityName="ATTDEF"}parseEntity(s,o){var l={type:o.value,scale:1,textStyle:"STANDARD"};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 1:l.text=o.value;break;case 2:l.tag=o.value;break;case 3:l.prompt=o.value;break;case 7:l.textStyle=o.value;break;case 10:l.startPoint=Ze(s);break;case 11:l.endPoint=Ze(s);break;case 39:l.thickness=o.value;break;case 40:l.textHeight=o.value;break;case 41:l.scale=o.value;break;case 50:l.rotation=o.value;break;case 51:l.obliqueAngle=o.value;break;case 70:l.invisible=!!(o.value&1),l.constant=!!(o.value&2),l.verificationRequired=!!(o.value&4),l.preset=!!(o.value&8);break;case 71:l.backwards=!!(o.value&2),l.mirrored=!!(o.value&4);break;case 72:l.horizontalJustification=o.value;break;case 73:l.fieldLength=o.value;break;case 74:l.verticalJustification=o.value;break;case 100:break;case 210:l.extrusionDirectionX=o.value;break;case 220:l.extrusionDirectionY=o.value;break;case 230:l.extrusionDirectionZ=o.value;break;default:oa(l,o,s);break}o=s.next()}return l}}class Kx{constructor(){this.ForEntityName="CIRCLE"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.center=Ze(s);break;case 40:l.radius=o.value;break;case 50:l.startAngle=Math.PI/180*o.value;break;case 51:const i=Math.PI/180*o.value;i<l.startAngle?l.angleLength=i+2*Math.PI-l.startAngle:l.angleLength=i-l.startAngle,l.endAngle=i;break;default:oa(l,o,s);break}o=s.next()}return l}}class Wx{constructor(){this.ForEntityName="DIMENSION"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 2:l.block=o.value;break;case 10:l.anchorPoint=Ze(s);break;case 11:l.middleOfText=Ze(s);break;case 12:l.insertionPoint=Ze(s);break;case 13:l.linearOrAngularPoint1=Ze(s);break;case 14:l.linearOrAngularPoint2=Ze(s);break;case 15:l.diameterOrRadiusPoint=Ze(s);break;case 16:l.arcPoint=Ze(s);break;case 70:l.dimensionType=o.value;break;case 71:l.attachmentPoint=o.value;break;case 42:l.actualMeasurement=o.value;break;case 1:l.text=o.value;break;case 50:l.angle=o.value;break;default:oa(l,o,s);break}o=s.next()}return l}}class Zx{constructor(){this.ForEntityName="ELLIPSE"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.center=Ze(s);break;case 11:l.majorAxisEndPoint=Ze(s);break;case 40:l.axisRatio=o.value;break;case 41:l.startAngle=o.value;break;case 42:l.endAngle=o.value;break;case 2:l.name=o.value;break;default:oa(l,o,s);break}o=s.next()}return l}}class Qx{constructor(){this.ForEntityName="INSERT"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 2:l.name=o.value;break;case 41:l.xScale=o.value;break;case 42:l.yScale=o.value;break;case 43:l.zScale=o.value;break;case 10:l.position=Ze(s);break;case 50:l.rotation=o.value;break;case 70:l.columnCount=o.value;break;case 71:l.rowCount=o.value;break;case 44:l.columnSpacing=o.value;break;case 45:l.rowSpacing=o.value;break;case 210:l.extrusionDirection=Ze(s);break;default:oa(l,o,s);break}o=s.next()}return l}}class Jx{constructor(){this.ForEntityName="LINE"}parseEntity(s,o){const l={type:o.value,vertices:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.vertices.unshift(Ze(s));break;case 11:l.vertices.push(Ze(s));break;case 210:l.extrusionDirection=Ze(s);break;case 100:break;default:oa(l,o,s);break}o=s.next()}return l}}class eS{constructor(){this.ForEntityName="LWPOLYLINE"}parseEntity(s,o){const l={type:o.value,vertices:[]};let i=0;for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 38:l.elevation=o.value;break;case 39:l.depth=o.value;break;case 70:l.shape=(o.value&1)===1,l.hasContinuousLinetypePattern=(o.value&128)===128;break;case 90:i=o.value;break;case 10:l.vertices=tS(i,s);break;case 43:o.value!==0&&(l.width=o.value);break;case 210:l.extrusionDirectionX=o.value;break;case 220:l.extrusionDirectionY=o.value;break;case 230:l.extrusionDirectionZ=o.value;break;default:oa(l,o,s);break}o=s.next()}return l}}function tS(n,s){if(!n||n<=0)throw Error("n must be greater than 0 verticies");const o=[];let l=!1,i=!1,p=s.lastReadGroup;for(let m=0;m<n;m++){const u={};for(;!s.isEOF()&&!(p.code===0||i);){switch(p.code){case 10:if(l){i=!0;continue}u.x=p.value,l=!0;break;case 20:u.y=p.value;break;case 30:u.z=p.value;break;case 40:u.startWidth=p.value;break;case 41:u.endWidth=p.value;break;case 42:p.value!=0&&(u.bulge=p.value);break;default:return s.rewind(),l&&o.push(u),s.rewind(),o}p=s.next()}o.push(u),l=!1,i=!1}return s.rewind(),o}class aS{constructor(){this.ForEntityName="MTEXT"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 3:l.text?l.text+=o.value:l.text=o.value;break;case 1:l.text?l.text+=o.value:l.text=o.value;break;case 10:l.position=Ze(s);break;case 11:l.directionVector=Ze(s);break;case 40:l.height=o.value;break;case 41:l.width=o.value;break;case 50:l.rotation=o.value;break;case 71:l.attachmentPoint=o.value;break;case 72:l.drawingDirection=o.value;break;default:oa(l,o,s);break}o=s.next()}return l}}class nS{constructor(){this.ForEntityName="POINT"}parseEntity(s,o){const i={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:i.position=Ze(s);break;case 39:i.thickness=o.value;break;case 210:i.extrusionDirection=Ze(s);break;case 100:break;default:oa(i,o,s);break}o=s.next()}return i}}class sS{constructor(){this.ForEntityName="VERTEX"}parseEntity(s,o){var l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.x=o.value;break;case 20:l.y=o.value;break;case 30:l.z=o.value;break;case 40:break;case 41:break;case 42:o.value!=0&&(l.bulge=o.value);break;case 70:l.curveFittingVertex=(o.value&1)!==0,l.curveFitTangent=(o.value&2)!==0,l.splineVertex=(o.value&8)!==0,l.splineControlPoint=(o.value&16)!==0,l.threeDPolylineVertex=(o.value&32)!==0,l.threeDPolylineMesh=(o.value&64)!==0,l.polyfaceMeshVertex=(o.value&128)!==0;break;case 50:break;case 71:l.faceA=o.value;break;case 72:l.faceB=o.value;break;case 73:l.faceC=o.value;break;case 74:l.faceD=o.value;break;default:oa(l,o,s);break}o=s.next()}return l}}class rS{constructor(){this.ForEntityName="POLYLINE"}parseEntity(s,o){var l={type:o.value,vertices:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:break;case 20:break;case 30:break;case 39:l.thickness=o.value;break;case 40:break;case 41:break;case 70:l.shape=(o.value&1)!==0,l.includesCurveFitVertices=(o.value&2)!==0,l.includesSplineFitVertices=(o.value&4)!==0,l.is3dPolyline=(o.value&8)!==0,l.is3dPolygonMesh=(o.value&16)!==0,l.is3dPolygonMeshClosed=(o.value&32)!==0,l.isPolyfaceMesh=(o.value&64)!==0,l.hasContinuousLinetypePattern=(o.value&128)!==0;break;case 71:break;case 72:break;case 73:break;case 74:break;case 75:break;case 210:l.extrusionDirection=Ze(s);break;default:oa(l,o,s);break}o=s.next()}return l.vertices=oS(s,o),l}}function oS(n,s){const o=new sS,l=[];for(;!n.isEOF();)if(s.code===0){if(s.value==="VERTEX")l.push(o.parseEntity(n,s)),s=n.lastReadGroup;else if(s.value==="SEQEND"){lS(n,s);break}}return l}function lS(n,s){const o={type:s.value};for(s=n.next();!n.isEOF()&&s.code!=0;)oa(o,s,n),s=n.next();return o}class iS{constructor(){this.ForEntityName="SOLID"}parseEntity(s,o){const l={type:o.value,points:[]};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.points[0]=Ze(s);break;case 11:l.points[1]=Ze(s);break;case 12:l.points[2]=Ze(s);break;case 13:l.points[3]=Ze(s);break;case 210:l.extrusionDirection=Ze(s);break;default:oa(l,o,s);break}o=s.next()}return l}}class cS{constructor(){this.ForEntityName="SPLINE"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.controlPoints||(l.controlPoints=[]),l.controlPoints.push(Ze(s));break;case 11:l.fitPoints||(l.fitPoints=[]),l.fitPoints.push(Ze(s));break;case 12:l.startTangent=Ze(s);break;case 13:l.endTangent=Ze(s);break;case 40:l.knotValues||(l.knotValues=[]),l.knotValues.push(o.value);break;case 70:(o.value&1)!=0&&(l.closed=!0),(o.value&2)!=0&&(l.periodic=!0),(o.value&4)!=0&&(l.rational=!0),(o.value&8)!=0&&(l.planar=!0),(o.value&16)!=0&&(l.planar=!0,l.linear=!0);break;case 71:l.degreeOfSplineCurve=o.value;break;case 72:l.numberOfKnots=o.value;break;case 73:l.numberOfControlPoints=o.value;break;case 74:l.numberOfFitPoints=o.value;break;case 210:l.normalVector=Ze(s);break;default:oa(l,o,s);break}o=s.next()}return l}}class dS{constructor(){this.ForEntityName="TEXT"}parseEntity(s,o){const l={type:o.value};for(o=s.next();!s.isEOF()&&o.code!==0;){switch(o.code){case 10:l.startPoint=Ze(s);break;case 11:l.endPoint=Ze(s);break;case 40:l.textHeight=o.value;break;case 41:l.xScale=o.value;break;case 50:l.rotation=o.value;break;case 1:l.text=o.value;break;case 72:l.halign=o.value;break;case 73:l.valign=o.value;break;default:oa(l,o,s);break}o=s.next()}return l}}var yi={exports:{}},uS=yi.exports,Ng;function fS(){return Ng||(Ng=1,(function(n){(function(s,o){n.exports?n.exports=o():s.log=o()})(uS,function(){var s=function(){},o="undefined",l=typeof window!==o&&typeof window.navigator!==o&&/Trident\/|MSIE /.test(window.navigator.userAgent),i=["trace","debug","info","warn","error"],p={},m=null;function u(T,D){var w=T[D];if(typeof w.bind=="function")return w.bind(T);try{return Function.prototype.bind.call(w,T)}catch{return function(){return Function.prototype.apply.apply(w,[T,arguments])}}}function y(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function h(T){return T==="debug"&&(T="log"),typeof console===o?!1:T==="trace"&&l?y:console[T]!==void 0?u(console,T):console.log!==void 0?u(console,"log"):s}function g(){for(var T=this.getLevel(),D=0;D<i.length;D++){var w=i[D];this[w]=D<T?s:this.methodFactory(w,T,this.name)}if(this.log=this.debug,typeof console===o&&T<this.levels.SILENT)return"No console available for logging"}function v(T){return function(){typeof console!==o&&(g.call(this),this[T].apply(this,arguments))}}function E(T,D,w){return h(T)||v.apply(this,arguments)}function S(T,D){var w=this,N,k,q,x="loglevel";typeof T=="string"?x+=":"+T:typeof T=="symbol"&&(x=void 0);function O(ne){var le=(i[ne]||"silent").toUpperCase();if(!(typeof window===o||!x)){try{window.localStorage[x]=le;return}catch{}try{window.document.cookie=encodeURIComponent(x)+"="+le+";"}catch{}}}function R(){var ne;if(!(typeof window===o||!x)){try{ne=window.localStorage[x]}catch{}if(typeof ne===o)try{var le=window.document.cookie,we=encodeURIComponent(x),ge=le.indexOf(we+"=");ge!==-1&&(ne=/^([^;]+)/.exec(le.slice(ge+we.length+1))[1])}catch{}return w.levels[ne]===void 0&&(ne=void 0),ne}}function P(){if(!(typeof window===o||!x)){try{window.localStorage.removeItem(x)}catch{}try{window.document.cookie=encodeURIComponent(x)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function K(ne){var le=ne;if(typeof le=="string"&&w.levels[le.toUpperCase()]!==void 0&&(le=w.levels[le.toUpperCase()]),typeof le=="number"&&le>=0&&le<=w.levels.SILENT)return le;throw new TypeError("log.setLevel() called with invalid level: "+ne)}w.name=T,w.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},w.methodFactory=D||E,w.getLevel=function(){return q??k??N},w.setLevel=function(ne,le){return q=K(ne),le!==!1&&O(q),g.call(w)},w.setDefaultLevel=function(ne){k=K(ne),R()||w.setLevel(ne,!1)},w.resetLevel=function(){q=null,P(),g.call(w)},w.enableAll=function(ne){w.setLevel(w.levels.TRACE,ne)},w.disableAll=function(ne){w.setLevel(w.levels.SILENT,ne)},w.rebuild=function(){if(m!==w&&(N=K(m.getLevel())),g.call(w),m===w)for(var ne in p)p[ne].rebuild()},N=K(m?m.getLevel():"WARN");var ue=R();ue!=null&&(q=K(ue)),g.call(w)}m=new S,m.getLogger=function(D){if(typeof D!="symbol"&&typeof D!="string"||D==="")throw new TypeError("You must supply a name when creating a logger.");var w=p[D];return w||(w=p[D]=new S(D,m.methodFactory)),w};var j=typeof window!==o?window.log:void 0;return m.noConflict=function(){return typeof window!==o&&window.log===m&&(window.log=j),m},m.getLoggers=function(){return p},m.default=m,m})})(yi)),yi.exports}var pS=fS();const We=Xo(pS);We.setLevel("error");function hS(n){n.registerEntityHandler(Vx),n.registerEntityHandler(Gx),n.registerEntityHandler(Xx),n.registerEntityHandler(Kx),n.registerEntityHandler(Wx),n.registerEntityHandler(Zx),n.registerEntityHandler(Qx),n.registerEntityHandler(Jx),n.registerEntityHandler(eS),n.registerEntityHandler(aS),n.registerEntityHandler(nS),n.registerEntityHandler(rS),n.registerEntityHandler(iS),n.registerEntityHandler(cS),n.registerEntityHandler(dS)}class nb{constructor(){this._entityHandlers={},hS(this)}parse(s){return typeof s=="string"?this._parse(s):(console.error("Cannot read dxf source of type `"+typeof s),null)}registerEntityHandler(s){const o=new s;this._entityHandlers[o.ForEntityName]=o}parseSync(s){return this.parse(s)}parseStream(s){let o="";const l=this;return new Promise((i,p)=>{s.on("data",m=>{o+=m}),s.on("end",()=>{try{i(l._parse(o))}catch(m){p(m)}}),s.on("error",m=>{p(m)})})}_parse(s){const o={};let l=0;const i=s.split(/\r\n|\r|\n/g),p=new Fx(i);if(!p.hasNext())throw Error("Empty file");const m=this;let u;function y(){for(u=p.next();!p.isEOF();)if(u.code===0&&u.value==="SECTION"){if(u=p.next(),u.code!==2){console.error("Unexpected code %s after 0:SECTION",sb(u)),u=p.next();continue}u.value==="HEADER"?(We.debug("> HEADER"),o.header=h(),We.debug("<")):u.value==="BLOCKS"?(We.debug("> BLOCKS"),o.blocks=g(),We.debug("<")):u.value==="ENTITIES"?(We.debug("> ENTITIES"),o.entities=k(!1),We.debug("<")):u.value==="TABLES"?(We.debug("> TABLES"),o.tables=E(),We.debug("<")):u.value==="EOF"?We.debug("EOF"):We.warn("Skipping section '%s'",u.value)}else u=p.next()}function h(){let O=null,R=null;const P={};for(u=p.next();;){if(un(u,0,"ENDSEC")){O&&(P[O]=R);break}else u.code===9?(O&&(P[O]=R),O=u.value):u.code===10?R={x:u.value}:u.code===20?R.y=u.value:u.code===30?R.z=u.value:R=u.value;u=p.next()}return u=p.next(),P}function g(){const O={};for(u=p.next();u.value!=="EOF"&&!un(u,0,"ENDSEC");)if(un(u,0,"BLOCK")){We.debug("block {");const R=v();We.debug("}"),x(R),R.name?O[R.name]=R:We.error('block with handle "'+R.handle+'" is missing a name.')}else Os(u),u=p.next();return O}function v(){const O={};for(u=p.next();u.value!=="EOF";){switch(u.code){case 1:O.xrefPath=u.value,u=p.next();break;case 2:O.name=u.value,u=p.next();break;case 3:O.name2=u.value,u=p.next();break;case 5:O.handle=u.value,u=p.next();break;case 8:O.layer=u.value,u=p.next();break;case 10:O.position=q(u),u=p.next();break;case 67:O.paperSpace=!!(u.value&&u.value==1),u=p.next();break;case 70:u.value!=0&&(O.type=u.value),u=p.next();break;case 100:u=p.next();break;case 330:O.ownerHandle=u.value,u=p.next();break;case 0:if(u.value=="ENDBLK")break;O.entities=k(!0);break;default:Os(u),u=p.next()}if(un(u,0,"ENDBLK")){u=p.next();break}}return O}function E(){const O={};for(u=p.next();u.value!=="EOF"&&!un(u,0,"ENDSEC");)un(u,0,"TABLE")?(u=p.next(),N[u.value]?(We.debug(u.value+" Table {"),O[N[u.value].tableName]=j(u),We.debug("}")):We.debug("Unhandled Table "+u.value)):u=p.next();return u=p.next(),O}const S="ENDTAB";function j(O){const R=N[O.value],P={};let K=0;for(u=p.next();!un(u,0,S);)switch(u.code){case 5:P.handle=u.value,u=p.next();break;case 330:P.ownerHandle=u.value,u=p.next();break;case 100:u.value==="AcDbSymbolTable"||Os(u),u=p.next();break;case 70:K=u.value,u=p.next();break;case 0:u.value===R.dxfSymbolName?P[R.tableRecordsProperty]=R.parseTableRecords():(Os(u),u=p.next());break;default:Os(u),u=p.next()}const ue=P[R.tableRecordsProperty];if(ue){let ne=(()=>{if(ue.constructor===Array)return ue.length;if(typeof ue=="object")return Object.keys(ue).length})();K!==ne&&We.warn("Parsed "+ne+" "+R.dxfSymbolName+"'s but expected "+K)}return u=p.next(),P}function T(){const O=[];let R={};for(We.debug("ViewPort {"),u=p.next();!un(u,0,S);)switch(u.code){case 2:R.name=u.value,u=p.next();break;case 10:R.lowerLeftCorner=q(u),u=p.next();break;case 11:R.upperRightCorner=q(u),u=p.next();break;case 12:R.center=q(u),u=p.next();break;case 13:R.snapBasePoint=q(u),u=p.next();break;case 14:R.snapSpacing=q(u),u=p.next();break;case 15:R.gridSpacing=q(u),u=p.next();break;case 16:R.viewDirectionFromTarget=q(u),u=p.next();break;case 17:R.viewTarget=q(u),u=p.next();break;case 42:R.lensLength=u.value,u=p.next();break;case 43:R.frontClippingPlane=u.value,u=p.next();break;case 44:R.backClippingPlane=u.value,u=p.next();break;case 45:R.viewHeight=u.value,u=p.next();break;case 50:R.snapRotationAngle=u.value,u=p.next();break;case 51:R.viewTwistAngle=u.value,u=p.next();break;case 79:R.orthographicType=u.value,u=p.next();break;case 110:R.ucsOrigin=q(u),u=p.next();break;case 111:R.ucsXAxis=q(u),u=p.next();break;case 112:R.ucsYAxis=q(u),u=p.next();break;case 110:R.ucsOrigin=q(u),u=p.next();break;case 281:R.renderMode=u.value,u=p.next();break;case 281:R.defaultLightingType=u.value,u=p.next();break;case 292:R.defaultLightingOn=u.value,u=p.next();break;case 330:R.ownerHandle=u.value,u=p.next();break;case 63:case 421:case 431:R.ambientColor=u.value,u=p.next();break;case 0:u.value==="VPORT"&&(We.debug("}"),O.push(R),We.debug("ViewPort {"),R={},u=p.next());break;default:Os(u),u=p.next();break}return We.debug("}"),O.push(R),O}function D(){const O={};let R={},P=0,K;for(We.debug("LType {"),u=p.next();!un(u,0,"ENDTAB");)switch(u.code){case 2:R.name=u.value,K=u.value,u=p.next();break;case 3:R.description=u.value,u=p.next();break;case 73:P=u.value,P>0&&(R.pattern=[]),u=p.next();break;case 40:R.patternLength=u.value,u=p.next();break;case 49:R.pattern.push(u.value),u=p.next();break;case 0:We.debug("}"),P>0&&P!==R.pattern.length&&We.warn("lengths do not match on LTYPE pattern"),O[K]=R,R={},We.debug("LType {"),u=p.next();break;default:u=p.next()}return We.debug("}"),O[K]=R,O}function w(){const O={};let R={},P;for(We.debug("Layer {"),u=p.next();!un(u,0,"ENDTAB");)switch(u.code){case 2:R.name=u.value,P=u.value,u=p.next();break;case 62:R.visible=u.value>=0,R.colorIndex=Math.abs(u.value),R.color=mS(R.colorIndex),u=p.next();break;case 70:R.frozen=(u.value&1)!=0||(u.value&2)!=0,u=p.next();break;case 0:u.value==="LAYER"&&(We.debug("}"),O[P]=R,We.debug("Layer {"),R={},P=void 0,u=p.next());break;default:Os(u),u=p.next();break}return We.debug("}"),O[P]=R,O}const N={VPORT:{tableRecordsProperty:"viewPorts",tableName:"viewPort",dxfSymbolName:"VPORT",parseTableRecords:T},LTYPE:{tableRecordsProperty:"lineTypes",tableName:"lineType",dxfSymbolName:"LTYPE",parseTableRecords:D},LAYER:{tableRecordsProperty:"layers",tableName:"layer",dxfSymbolName:"LAYER",parseTableRecords:w}};function k(O){const R=[],P=O?"ENDBLK":"ENDSEC";for(O||(u=p.next());;)if(u.code===0){if(u.value===P)break;const K=m._entityHandlers[u.value];if(K!=null){We.debug(u.value+" {");const ue=K.parseEntity(p,u);u=p.lastReadGroup,We.debug("}"),x(ue),R.push(ue)}else{We.warn("Unhandled entity "+u.value),u=p.next();continue}}else u=p.next();return P=="ENDSEC"&&(u=p.next()),R}function q(O){const R={};let P=O.code;if(R.x=O.value,P+=10,O=p.next(),O.code!=P)throw new Error("Expected code for point value to be "+P+" but got "+O.code+".");return R.y=O.value,P+=10,O=p.next(),O.code!=P?(p.rewind(),R):(R.z=O.value,R)}function x(O){if(!O)throw new TypeError("entity cannot be undefined or null");O.handle||(O.handle=l++)}return y(),o}}function un(n,s,o){return n.code===s&&n.value===o}function Os(n){We.debug("unhandled group "+sb(n))}function sb(n){return n.code+":"+n.value}function mS(n){return ab[n]}const fi=360,Co=210,wr=16,gS="#78d8b0",yS=[1,0,0,1,0,0],bS=new Set(["0","PIPE_PRI","F_PIPE_PRI","PIPE_PRIMARY","F_PIPE_PRIMARY","PRIMARY PIPING"]);function vS(n){const s=String(n??"").trim().toUpperCase().replace(/\s+/g," ");return!s||bS.has(s)}function ef(n){return/\barrow\b/i.test(n.replace(/[_-]+/g," "))}function rb(n){return ef(n)}function ya(n){if(!n||typeof n!="object")return null;const s=n;return typeof s.x=="number"&&Number.isFinite(s.x)&&typeof s.y=="number"&&Number.isFinite(s.y)?{x:s.x,y:s.y}:null}function ob(n,s){return{x:n[0]*s.x+n[2]*s.y+n[4],y:n[1]*s.x+n[3]*s.y+n[5]}}function wS(n,s){return[n[0]*s[0]+n[2]*s[1],n[1]*s[0]+n[3]*s[1],n[0]*s[2]+n[2]*s[3],n[1]*s[2]+n[3]*s[3],n[0]*s[4]+n[2]*s[5]+n[4],n[1]*s[4]+n[3]*s[5]+n[5]]}function kt(n,s){return typeof n=="number"&&Number.isFinite(n)?n:s}function No(n){return Array.isArray(n)?n.map(ya).filter(s=>s!==null):[]}function Ou(n){const s=ya(n);return s?{...s,z:kt(n.z,0)}:null}function ES(n,s,o){const l={},i=(u,y)=>{const h=Ou(y);h&&(l[u]=h)},p=(u,y)=>{Array.isArray(y)&&(l[u]=y.flatMap(h=>{const g=Ou(h);return g?[g]:[]}))},m=(u,y)=>{typeof y=="number"&&Number.isFinite(y)&&(l[u]=y)};if(n==="LINE")p("vertices",s.vertices);else if(n==="ARC"||n==="CIRCLE")i("center",s.center),m("radius",s.radius),n==="ARC"&&(m("startAngle",s.startAngle),m("endAngle",s.endAngle));else if(n==="LWPOLYLINE"||n==="POLYLINE")Array.isArray(s.vertices)&&(l.vertices=s.vertices.flatMap(u=>{if(!u||typeof u!="object")return[];const y=u;return typeof y.x!="number"||typeof y.y!="number"||!Number.isFinite(y.x)||!Number.isFinite(y.y)?[]:[{x:y.x,y:y.y,z:kt(y.z,0),bulge:kt(y.bulge,0)}]})),l.closed=s.shape===!0||(Number(s.shape)&1)===1;else if(n==="ELLIPSE")i("center",s.center),i("majorAxisEndPoint",s.majorAxisEndPoint),m("axisRatio",s.axisRatio),m("startAngle",s.startAngle),m("endAngle",s.endAngle);else if(n==="SPLINE"){p("fitPoints",s.fitPoints),p("controlPoints",s.controlPoints);for(const u of["degreeOfSplineCurve","closed","periodic","knots","weights"]){const y=s[u];(typeof y=="number"||typeof y=="boolean"||Array.isArray(y)&&y.every(h=>typeof h=="number"&&Number.isFinite(h)))&&(l[u]=y)}}else return null;return{type:n,transform:[...o],geometry:l}}function lb(n){return typeof n!="string"?"":n.replace(/\\P/gi," ").replace(/\\[A-Za-z][^;]*;/g,"").replace(/[{}]/g,"").replace(/\s+/g," ").trim()}function xS(n,s,o){return n.layer&&n.layer!=="0"?s.get(n.layer)??o:o}function SS(n){const s=Math.max(0,Math.min(16777215,Math.trunc(n))),o=`#${s.toString(16).padStart(6,"0")}`,l=s>>16&255,i=s>>8&255,p=s&255;return l+i+p<72?"#d5e1e8":o}function DS(n){const s=new Map;for(const o of Object.values(n.tables?.layer?.layers??{}))Number.isFinite(o.color)&&s.set(o.name,SS(o.color));return s}function AS(n,s,o,l){const i=l-o;if(!Number.isFinite(i))return[];const p=(i%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,m=Math.max(8,Math.min(96,Math.ceil(Math.abs(p)/(Math.PI/24))));return Array.from({length:m+1},(u,y)=>{const h=o+p*y/m;return{x:n.x+Math.cos(h)*s,y:n.y+Math.sin(h)*s}})}function TS(n,s){if(!Array.isArray(n))return[];const o=n.map(p=>{if(!p||typeof p!="object")return null;const m=p,u=ya(m);return u?{...u,bulge:kt(m.bulge,0)}:null}).filter(p=>p!==null);if(o.length<2)return o.map(({x:p,y:m})=>({x:p,y:m}));const l=[{x:o[0].x,y:o[0].y}],i=s?o.length:o.length-1;for(let p=0;p<i;p+=1){const m=o[p],u=o[(p+1)%o.length],y=m.bulge,h=u.x-m.x,g=u.y-m.y,v=Math.hypot(h,g);if(Math.abs(y)<1e-5||v<1e-8){l.push({x:u.x,y:u.y});continue}const E=4*Math.atan(y),S=v*(1-y*y)/(4*y),j={x:(m.x+u.x)/2-g/v*S,y:(m.y+u.y)/2+h/v*S},T=Math.atan2(m.y-j.y,m.x-j.x),D=Math.max(4,Math.min(48,Math.ceil(Math.abs(E)/(Math.PI/16))));for(let w=1;w<=D;w+=1){const N=T+E*w/D;l.push({x:j.x+Math.cos(N)*Math.hypot(m.x-j.x,m.y-j.y),y:j.y+Math.sin(N)*Math.hypot(m.x-j.x,m.y-j.y)})}}return s&&l.length>1&&l.pop(),l}function CS(n,s){const o=ya(n.position)??{x:0,y:0},l=ya(s.position)??{x:0,y:0},i=kt(n.xScale,1),p=kt(n.yScale,1),m=kt(n.rotation,0)*Math.PI/180,u=Math.cos(m),y=Math.sin(m),h=u*i,g=y*i,v=-y*p,E=u*p;return[h,g,v,E,o.x-h*l.x-v*l.y,o.y-g*l.x-E*l.y]}function cs(n,s,o,l,i){const p=s.map(m=>ob(l,m));p.length>=2&&n.paths.push({points:p,closed:o,color:i})}function ib(n,s,o,l,i,p,m=new Set,u=0){if(u>8){p.unsupported.add("nested block depth");return}for(const y of n){if(!y)continue;const h=y,g=String(h.type??"").toUpperCase();if(!g||h.visible===!1)continue;const v=xS(h,o,i);if(g==="INSERT"){const S=String(h.name??""),j=Object.entries(s).find(([N])=>N.toUpperCase()===S.toUpperCase())?.[1];if(!j||m.has(S.toUpperCase())){p.unsupported.add(g);continue}p.nestedInsertCount+=1;const T=wS(l,CS(h,j)),D=h.layer&&h.layer!=="0"?o.get(h.layer)??i:i,w=new Set(m);w.add(S.toUpperCase()),ib(j.entities??[],s,o,T,D,p,w,u+1);continue}const E=ES(g,h,l);if(E&&p.primitives.push(E),g==="LINE"){cs(p,No(h.vertices),!1,l,v);continue}if(g==="CIRCLE"||g==="ARC"){const S=ya(h.center),j=kt(h.radius,0);if(!S||j<=0)continue;const T=g==="ARC"?kt(h.startAngle,0):0,D=g==="ARC"?kt(h.endAngle,Math.PI*2):Math.PI*2;cs(p,AS(S,j,T,D),g==="CIRCLE",l,v);continue}if(g==="ELLIPSE"){const S=ya(h.center),j=ya(h.majorAxisEndPoint),T=kt(h.axisRatio,1);if(!S||!j||T<=0)continue;const D=kt(h.startAngle,0),w=kt(h.endAngle,Math.PI*2)-D;if(!Number.isFinite(w))continue;const N=(w%(Math.PI*2)+Math.PI*2)%(Math.PI*2)||Math.PI*2,k=D+N,q=Math.max(12,Math.min(96,Math.ceil((k-D)*24))),x=Array.from({length:q+1},(O,R)=>{const P=D+(k-D)*R/q;return{x:S.x+j.x*Math.cos(P)-j.y*T*Math.sin(P),y:S.y+j.y*Math.cos(P)+j.x*T*Math.sin(P)}});cs(p,x,Math.abs(k-D-Math.PI*2)<.03,l,v);continue}if(g==="LWPOLYLINE"||g==="POLYLINE"){const S=h.shape===!0||(Number(h.shape)&1)===1,j=TS(h.vertices,S);cs(p,j,S,l,v);continue}if(g==="SOLID"||g==="3DFACE"){const S=No(h.points??h.vertices);cs(p,S,!0,l,v);continue}if(g==="SPLINE"){const S=No(h.fitPoints).length>=2?No(h.fitPoints):No(h.controlPoints);cs(p,S,h.closed===!0,l,v),S.length&&p.unsupported.add("SPLINE approximation");continue}if(g==="TEXT"||g==="MTEXT"||g==="ATTDEF"){const S=lb(h.text),j=ya(h.startPoint)??ya(h.position);if(!j||!S)continue;const T=ob(l,j),D=Math.max(1,kt(h.textHeight,kt(h.height,2.5))),w=Math.max(Math.hypot(l[0],l[1]),Math.hypot(l[2],l[3]),.1);p.texts.push({point:T,text:S,height:D*w,rotation:kt(h.rotation,0)-Math.atan2(l[1],l[0])*180/Math.PI,color:v});continue}if(g==="POINT"){const S=ya(h.position);S&&(cs(p,[{x:S.x-.5,y:S.y},{x:S.x+.5,y:S.y}],!1,l,v),cs(p,[{x:S.x,y:S.y-.5},{x:S.x,y:S.y+.5}],!1,l,v));continue}p.unsupported.add(g)}}function cb(n){const s=[...n.paths.flatMap(o=>o.points),...n.texts.map(o=>o.point)];return s.length?{minX:Math.min(...s.map(o=>o.x)),minY:Math.min(...s.map(o=>o.y)),maxX:Math.max(...s.map(o=>o.x)),maxY:Math.max(...s.map(o=>o.y))}:null}function NS(n){const s=cb(n);if(!s)return;const o=Math.max(s.maxX-s.minX,1e-6),l=Math.max(s.maxY-s.minY,1e-6),i=Math.min((fi-wr*2)/o,(Co-wr*2)/l),p=g=>wr+(g-s.minX)*i+(fi-wr*2-o*i)/2,m=g=>Co-wr-(g-s.minY)*i-(Co-wr*2-l*i)/2,u=g=>g.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;"),y=n.paths.map(g=>{const v=g.points.map((E,S)=>`${S?"L":"M"}${p(E.x).toFixed(2)} ${m(E.y).toFixed(2)}`);return g.closed&&v.push("Z"),`<path d="${v.join(" ")}" fill="none" stroke="${g.color}" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>`}).join(""),h=n.texts.map(g=>{const v=p(g.point.x),E=m(g.point.y),S=Math.max(4,Math.min(20,g.height*i));return`<text x="${v.toFixed(2)}" y="${E.toFixed(2)}" fill="${g.color}" font-family="Arial,sans-serif" font-size="${S.toFixed(2)}" transform="rotate(${-g.rotation.toFixed(2)} ${v.toFixed(2)} ${E.toFixed(2)})">${u(g.text)}</text>`}).join("");return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${fi} ${Co}" role="img"><rect width="${fi}" height="${Co}" fill="#0d1722"/>${y}${h}</svg>`}function kS(n,s,o){const l=ya(o.position)??{x:0,y:0},i=ya(s.position)??{x:0,y:0},p=kt(o.xScale,1),m=kt(o.yScale,1),u=kt(o.rotation,0)*Math.PI/180,y=Math.cos(u),h=Math.sin(u),g=[{x:n.minX,y:n.minY},{x:n.minX,y:n.maxY},{x:n.maxX,y:n.minY},{x:n.maxX,y:n.maxY}].map(v=>{const E=(v.x-i.x)*p,S=(v.y-i.y)*m;return{x:l.x+y*E-h*S,y:l.y+h*E+y*S}});return{minX:Math.min(...g.map(v=>v.x)),minY:Math.min(...g.map(v=>v.y)),maxX:Math.max(...g.map(v=>v.x)),maxY:Math.max(...g.map(v=>v.y))}}function jS(n){return ya(n.startPoint)??ya(n.position)}function RS(n){return lb(n.text)}function db(n,s){return s.map(o=>o).filter(o=>o.type?.toUpperCase()==="INSERT"&&String(o.name??"").toUpperCase()===n.toUpperCase())}function LS(n){const s=new Map;for(const o of n){const l=String(o.layer??"0").trim()||"0",i=kt(o.rotation,0),p=Math.round((i%360+360)%360),m=`${l.toUpperCase()}|${p}`,u=s.get(m);u?u.count+=1:s.set(m,{layer:l,rotationDegrees:p,count:1})}return[...s.values()].sort((o,l)=>o.layer.localeCompare(l.layer)||o.rotationDegrees-l.rotationDegrees)}function OS(n,s,o,l){const i=db(n,l),p=i.filter(v=>!vS(v.layer)),m=i.length>0&&p.length===0;if(rb(n))return{labels:[],skippedContextOnly:m};const u=l.map(v=>v).filter(v=>["TEXT","MTEXT","ATTRIB"].includes(String(v.type??"").toUpperCase())).map(v=>({text:RS(v),point:jS(v),height:Math.max(1,kt(v.textHeight,kt(v.height,2.5)))})).filter(v=>!!(v.text&&v.point)&&!ef(v.text)),y=[];for(const v of p){const E=kS(o,s,v),S=(E.minY+E.maxY)/2,j=Math.max(E.maxX-E.minX,1),T=Math.max(E.maxY-E.minY,1),w=u.map(P=>{const K=P.point.x-E.maxX,ue=Math.abs(P.point.y-S),ne=Math.max(j*8,P.height*40,30),le=Math.max(T*1.1,P.height*7);return{...P,dx:K,dy:ue,score:Math.max(0,K)+ue*1.75,maxGap:ne,maxVertical:le}}).filter(P=>P.dx>=-P.height*.5&&P.dx<=P.maxGap&&P.dy<=P.maxVertical).filter(P=>P.dx>=0).sort((P,K)=>P.score-K.score),N=w.length?w:u.map(P=>({...P,dx:P.point.x-E.maxX,dy:Math.abs(P.point.y-S),score:Math.hypot(P.point.x-(E.minX+E.maxX)/2,P.point.y-S),maxGap:Math.max(j*10,P.height*50,40),maxVertical:Math.max(T*2,P.height*10)})).filter(P=>P.score<=Math.max(j*8,T*10,P.height*60)).sort((P,K)=>P.score-K.score),k=N[0];if(!k)continue;const q=Math.max(k.height*2,j*.04,.5),x=Math.max(k.height*7,T*.8),O=N.filter(P=>Math.abs(P.point.x-k.point.x)<=q&&Math.abs(P.point.y-k.point.y)<=x).sort((P,K)=>K.point.y-P.point.y).slice(0,8),R=[...new Set(O.map(P=>P.text))].join(" · ");R&&y.push({text:R,score:k.score})}const h=new Map;for(const v of y){const E=v.text.toLowerCase().replace(/\s+/g," ").trim(),S=h.get(E);(S===void 0||v.score<S.score)&&h.set(E,v)}const g=p.length>1&&h.size>1;return{labels:g?[]:[...h.values()].sort((v,E)=>v.score-E.score).slice(0,4).map(v=>v.text),skippedContextOnly:m,...g?{ambiguous:!0}:{}}}function Ti(n,s){let o;try{o=new nb().parseSync(n)}catch(m){const u=m instanceof Error?m.message:"Unknown DXF parser error";throw new Error(`The overview DXF could not be read: ${u}`)}if(!o?.blocks||!Array.isArray(o.entities))throw new Error("The overview DXF does not contain readable block and model-space data.");const l=DS(o),i=new Map(Object.entries(o.blocks).map(([m,u])=>[m.toUpperCase(),u])),p=new Map;for(const m of new Set(s)){const u=i.get(m.toUpperCase());if(!u||m.startsWith("*"))continue;const y={paths:[],texts:[],unsupported:new Set,primitives:[],nestedInsertCount:0};ib(u.entities??[],o.blocks,l,yS,gS,y,new Set([u.name.toUpperCase()]));const h=cb(y),g=y.paths.flatMap(q=>q.points),v=g.length?{minX:Math.min(...g.map(q=>q.x)),minY:Math.min(...g.map(q=>q.y)),maxX:Math.max(...g.map(q=>q.x)),maxY:Math.max(...g.map(q=>q.y))}:null,E=v?v.maxX-v.minX:null,S=v?v.maxY-v.minY:null,j=y.primitives.reduce((q,x)=>(q[x.type]=(q[x.type]??0)+1,q),{}),T=o.header?.$INSUNITS,D={schemaVersion:1,blockName:m,unitsCode:typeof T=="number"&&Number.isInteger(T)?T:null,basePoint:Ou(u.position)??{x:0,y:0,z:0},bounds:v,width:E,height:S,aspectRatio:E!==null&&S!==null&&S>0?E/S:null,primitiveCounts:j,primitives:y.primitives,nestedInsertCount:y.nestedInsertCount,unsupportedEntities:[...y.unsupported].sort(),transformPolicy:{allowedRotationsDegrees:null,mirrorAllowed:null,uniformScalingAllowed:null,nonUniformScalingAllowed:null,status:"UNSPECIFIED_REQUIRES_REVIEW"}},w=NS(y),N=LS(db(m,o.entities)),k=h?OS(m,u,h,o.entities):{labels:[],skippedContextOnly:!1};p.set(m,{...w?{previewSvg:w}:{},geometryDescriptor:D,nearbyLabels:k.labels,...k.skippedContextOnly?{labelMatchSkipped:!0}:{},...k.ambiguous?{labelMatchAmbiguous:!0}:{},...N.length?{sourcePlacements:N}:{}})}return p}const ot=(n,s)=>n.find(o=>o.code===s)?.value.trim()??"",sa=n=>ot(n,0).toUpperCase(),Er=n=>ot(n,sa(n)==="DIMSTYLE"?105:5).toUpperCase(),On=(...n)=>{const s=[];for(let o=0;o<n.length;o+=2)s.push({code:Number(n[o]),value:String(n[o+1])});return s},kg=n=>n>=330&&n<=369||n>=390&&n<=399||n===480||n===481||n===1005,uu=n=>["DICTIONARY","ACDBDICTIONARYWDFLT"].includes(sa(n)),_S=new Set(["BLOCK","ENDBLK","LINE","ARC","CIRCLE","ELLIPSE","LWPOLYLINE","POLYLINE","VERTEX","SEQEND","SPLINE","POINT","SOLID","TRACE","3DFACE","TEXT","MTEXT","ATTDEF","ATTRIB","INSERT","HATCH","DIMENSION","LEADER","TOLERANCE"]),PS=["VPORT","LTYPE","LAYER","STYLE","VIEW","UCS","APPID","DIMSTYLE","BLOCK_RECORD"];function _n(n){const s=[];for(const o of n){if(o.code===0&&s.push([]),!s.length)throw new Error("Invalid DXF record boundary.");s[s.length-1].push(o)}return s}function MS(n){let s=0;return n.filter(o=>o.code===102&&o.value.trim()==="{BLKREFS"?(s=1,!1):s?(o.code===102&&o.value.trim().startsWith("{")&&s++,o.code===102&&o.value.trim()==="}"&&s--,!1):!0)}class ub{sections=new Map;tables=new Map;blocks=new Map;modelRecords;text;objects;recordsByHandle=new Map;blockForRecord=new Map;tableForRecord=new Map;tableHandles=new Set;maxHandle=0;constructor(s){const o=Nr(s);let l="";for(let g=0;g<o.content.length;g+=16384)l+=String.fromCharCode(...o.content.subarray(g,g+16384));this.text=l;const i=l.replace(/^\uFEFF/,"").split(/\r\n|\n|\r/);for(;i.length&&i.at(-1)==="";)i.pop();if(i.length%2)throw new Error("DXF has an incomplete group-code/value pair.");const p=[];for(let g=0;g<i.length;g+=2){const v=Number(i[g].trim());if(!Number.isInteger(v))throw new Error("DXF has an invalid group code.");p.push({code:v,value:i[g+1]})}let m="";for(let g=0;g<p.length;g++){const v=p[g];if(v.code===0&&v.value.trim()==="SECTION"){if(m||p[g+1]?.code!==2)throw new Error("Invalid DXF section.");if(m=p[++g].value.trim().toUpperCase(),this.sections.has(m))throw new Error("Duplicate DXF section.");this.sections.set(m,[])}else v.code===0&&v.value.trim()==="ENDSEC"?m="":m&&this.sections.get(m).push(v)}if(m||!this.sections.has("BLOCKS")||!this.sections.has("ENTITIES"))throw new Error("A complete ASCII source DXF with BLOCKS and ENTITIES is required.");const u=_n(this.sections.get("TABLES")??[]);let y;for(const g of u)if(sa(g)==="TABLE")y={name:ot(g,2).toUpperCase(),header:g,records:[]},this.tables.set(y.name,y),this.tableHandles.add(Er(g));else if(sa(g)==="ENDTAB")y=void 0;else if(y){const v=sa(g)==="BLOCK_RECORD"?MS(g):g;y.records.push(v),this.tableForRecord.set(v,y)}let h;for(const g of _n(this.sections.get("BLOCKS"))){if(sa(g)==="BLOCK"){const v=ot(g,2);if(h={name:v,records:[]},this.blocks.has(v.toUpperCase()))throw new Error("Duplicate source block definition.");this.blocks.set(v.toUpperCase(),h)}if(!h)throw new Error("DXF block definition is incomplete.");h.records.push(g),this.blockForRecord.set(g,h.name.toUpperCase()),sa(g)==="ENDBLK"&&(h=void 0)}if(h)throw new Error("DXF block definition has no ENDBLK.");this.modelRecords=_n(this.sections.get("ENTITIES")),this.objects=_n(this.sections.get("OBJECTS")??[]);for(const g of[...[...this.tables.values()].flatMap(v=>v.records),...[...this.blocks.values()].flatMap(v=>v.records),...this.modelRecords,...this.objects]){const v=Er(g);if(v){if(this.recordsByHandle.has(v))throw new Error("Duplicate DXF entity handle.");this.recordsByHandle.set(v,g),this.maxHandle=Math.max(this.maxHandle,parseInt(v,16)||0)}}for(const g of this.tableHandles)this.maxHandle=Math.max(this.maxHandle,parseInt(g,16)||0)}placements(){const s=new Map;for(const o of this.modelRecords){if(sa(o)!=="INSERT"||ot(o,67)==="1"||ot(o,410)&&ot(o,410).toUpperCase()!=="MODEL")continue;const l=ot(o,2);if(!l||l.startsWith("*"))continue;const i=this.blocks.get(l.toUpperCase())?.name??l,p=s.get(i)??new Set;p.add(ot(o,8)||"0"),s.set(i,p)}return s}layerDetails(s){const o=this.tables.get("LAYER")?.records.find(l=>ot(l,2).toUpperCase()===s.toUpperCase());return o?`color=${Math.abs(Number(ot(o,62)||"7"))};lineweight=${ot(o,370)||"-3"};linetype=${ot(o,6)||"CONTINUOUS"}`:null}nativeAssetInfo(){const s=this.modelRecords.filter(i=>!["ATTRIB","VERTEX","SEQEND"].includes(sa(i))),o=s.length?Er(s[0]):"";if(!s.length||!o)throw new Error("Native symbol DXF has no verifiable model-space geometry.");const l=this.tables.get("STYLE")?.records.flatMap(i=>[ot(i,3),ot(i,4)].filter(Boolean).flatMap(p=>/\.shx$/i.test(p)?[p]:p.includes(".")?[]:[`${p}.shx`]))??[];return{entityCount:s.length,firstHandle:o,requiredShapeFonts:[...new Set(l)]}}isolate(s){let o=this.maxHandle+1;const l=()=>(o++).toString(16).toUpperCase(),i=new Set,p=new Set,m=new Set,u=new Set,y=[],h=(U,G=!0)=>{uu(U)&&G&&!m.has(U)&&(m.add(U),i.has(U)&&y.push(U)),i.has(U)||(i.add(U),y.push(U));const oe=this.tableForRecord.get(U);oe&&u.add(oe)},g=U=>{const G=U.toUpperCase();if(p.has(G))return;const oe=this.blocks.get(G);if(!oe||G.startsWith("*MODEL_SPACE")||G.startsWith("*PAPER_SPACE"))throw new Error(`Missing or external block dependency: ${U}`);if(Number(ot(oe.records[0],70))&28)throw new Error("External-reference blocks require native AutoCAD extraction.");p.add(G),oe.records.forEach(be=>{if(!_S.has(sa(be)))throw new Error(`Unsupported native block entity: ${sa(be)}`);h(be)});const he=this.tables.get("BLOCK_RECORD")?.records.find(be=>ot(be,2).toUpperCase()===G);if(!he)throw new Error("Source block has no BLOCK_RECORD; save a modern ASCII DXF first.");h(he)},v=(U,G,oe=!0)=>{const he=this.tables.get(U)?.records.find(be=>ot(be,2).toUpperCase()===G.toUpperCase());if(he)U==="BLOCK_RECORD"?g(ot(he,2)):h(he);else if(oe)throw new Error(`Missing ${U} dependency: ${G}`)};g(s);for(const U of PS){const G=this.tables.get(U);if(!G)throw new Error(`Native symbol DXF is missing required ${U} table after safe repair.`);if(u.add(G),U==="VPORT"){const oe=G.records.find(he=>ot(he,2).toUpperCase()==="*ACTIVE");if(!oe)throw new Error("Native symbol DXF has no active *ACTIVE VPORT record after safe repair.");h(oe)}}v("LAYER","0");for(const U of["CONTINUOUS","BYLAYER","BYBLOCK"])v("LTYPE",U,!1);for(v("STYLE","STANDARD",!1),v("APPID","ACAD",!1),v("DIMSTYLE","STANDARD",!1);y.length;){const U=y.shift(),G=sa(U);if(/IMAGEDEF|UNDERLAY|PDFDEFINITION|DGNDEFINITION|DWFDEFINITION|PROXY/.test(G))throw new Error(`External/proxy dependency ${G} requires native AutoCAD extraction.`);(G==="INSERT"||G==="DIMENSION")&&g(ot(U,2)),G==="DIMENSION"&&v("DIMSTYLE",ot(U,3)||"STANDARD");for(let oe=0;oe<U.length;oe++){const he=U[oe];if(he.code===8&&v("LAYER",he.value.trim()||"0"),he.code===6&&!["BYLAYER","BYBLOCK",""].includes(he.value.trim().toUpperCase())&&v("LTYPE",he.value.trim()),he.code===7&&he.value.trim()&&v("STYLE",he.value.trim()),he.code===1001&&v("APPID",he.value.trim()),!kg(he.code)||!he.value.trim()||he.value.trim()==="0"||uu(U)&&[350,360].includes(he.code)&&U[oe-1]?.code===3&&!m.has(U))continue;const be=he.value.trim().toUpperCase();if(this.tableHandles.has(be))continue;const ze=this.recordsByHandle.get(be);if(!ze)throw new Error(`Unresolved native DXF handle reference (${he.code}).`);const Ie=this.blockForRecord.get(ze);if(Ie&&!p.has(Ie))throw new Error("Block metadata references unrelated drawing geometry; use native AutoCAD extraction.");if(this.modelRecords.includes(ze))throw new Error("Block metadata references source model-space geometry; use native AutoCAD extraction.");sa(ze)==="BLOCK_RECORD"?g(ot(ze,2)):h(ze,he.code!==330)}}const E=new Set,S=new Set,j=U=>{if(E.has(U))throw new Error("Circular block references cannot be isolated safely.");if(!S.has(U)){E.add(U);for(const G of this.blocks.get(U).records)["INSERT","DIMENSION"].includes(sa(G))&&j(ot(G,2).toUpperCase());E.delete(U),S.add(U)}};if(j(s.toUpperCase()),[...i].some(U=>/BLOCK.*(?:PARAMETER|ACTION)|BLOCKREPRESENTATION|EVALUATION_GRAPH/.test(sa(U))||U.some(G=>G.code===3&&/ACAD_ENHANCEDBLOCK/i.test(G.value))))throw new Error("Dynamic blocks require native AutoCAD extraction; their behavior is not approximated.");const T=this.tables.get("BLOCK_RECORD");u.add(T);const D=this.blocks.get(s.toUpperCase()),w=T.records.find(U=>ot(U,2).toUpperCase()===s.toUpperCase()),N=l(),k=(U,G)=>On(0,"BLOCK_RECORD",5,G,330,Er(T.header),100,"AcDbSymbolTableRecord",100,"AcDbBlockTableRecord",2,U,70,0,280,1,281,0),q=U=>U.map(G=>[2,3].includes(G.code)?{...G,value:"*Model_Space"}:sa(U)==="BLOCK"&&[10,20,30,70].includes(G.code)?{...G,value:"0"}:G),x=[];for(const U of[...u].sort((G,oe)=>G.name==="BLOCK_RECORD"?1:oe.name==="BLOCK_RECORD"?-1:0)){const G=U.records.filter(oe=>i.has(oe)).map(oe=>oe===w?q(oe):oe);U.name==="BLOCK_RECORD"&&G.push(k("*Paper_Space",N)),x.push(...On(0,"TABLE",2,U.name,5,Er(U.header),330,"0",100,"AcDbSymbolTable",70,G.length),...U.name==="DIMSTYLE"?On(100,"AcDbDimStyleTable"):[],...G.flat(),...On(0,"ENDTAB"))}const O=[...q(D.records[0]),...D.records.at(-1),...On(0,"BLOCK",5,l(),330,N,100,"AcDbEntity",8,"0",100,"AcDbBlockBegin",2,"*Paper_Space",70,0,10,0,20,0,30,0,3,"*Paper_Space",1,"",0,"ENDBLK",5,l(),330,N,100,"AcDbEntity",8,"0",100,"AcDbBlockEnd")];for(const U of p)U!==s.toUpperCase()&&O.push(...this.blocks.get(U).records.flat());const R=this.objects.filter(U=>i.has(U)).map(U=>!uu(U)||m.has(U)?U:U.filter((G,oe)=>G.code===3&&[350,360].includes(U[oe+1]?.code)?i.has(this.recordsByHandle.get(U[oe+1].value.trim().toUpperCase())):[350,360].includes(G.code)&&U[oe-1]?.code===3?i.has(this.recordsByHandle.get(G.value.trim().toUpperCase())):!0)).flat(),P=D.records.slice(1,-1).flat();if(!P.length)throw new Error("The selected block contains no native entities.");const K=new Set(["$ACADVER","$DWGCODEPAGE","$INSUNITS","$MEASUREMENT","$LTSCALE","$CELTSCALE","$PSLTSCALE"]),ue=[];let ne=!1;for(const U of this.sections.get("HEADER")??[])U.code===9&&(ne=K.has(U.value.trim())),ne&&ue.push(U);ue.push(...On(9,"$HANDSEED",5,l(),9,"$INSBASE",10,ot(D.records[0],10)||"0",20,ot(D.records[0],20)||"0",30,ot(D.records[0],30)||"0"));const le=new Set([...i].map(U=>sa(U))),we=_n(this.sections.get("CLASSES")??[]).filter(U=>le.has(ot(U,1).toUpperCase())).flat(),ge=(U,G)=>[...On(0,"SECTION",2,U),...G,...On(0,"ENDSEC")],ce=[...ge("HEADER",ue),...we.length?ge("CLASSES",we):[],...ge("TABLES",x),...ge("BLOCKS",O),...ge("ENTITIES",P),...R.length?ge("OBJECTS",R):[],...On(0,"EOF")],V=new Set;for(const U of[..._n(x),..._n(O),..._n(P),..._n(R)]){const G=Er(U);if(G){if(V.has(G))throw new Error("Duplicate handle in isolated DXF.");V.add(G)}}for(const U of ce)if(kg(U.code)&&U.value.trim()&&U.value.trim()!=="0"&&!V.has(U.value.trim().toUpperCase()))throw new Error(`A required DXF reference was not retained (${U.code}).`);const re=ce.map(U=>`${U.code}\r
${U.value}\r
`).join(""),ye=new Uint8Array(re.length);for(let U=0;U<re.length;U++)ye[U]=re.charCodeAt(U);const Ae=Nr(ye).content;let _="";for(let U=0;U<Ae.length;U+=16384)_+=String.fromCharCode(...Ae.subarray(U,U+16384));Qu(_);const Q=new nb().parseSync(_);if(!Q?.entities.length||!Q.blocks?.["*Model_Space"])throw new Error("The isolated block DXF failed its structural round-trip validation.");return Ae}}const fu=(n,s)=>n.item.fields.find(o=>o.label===s)?.value.trim()??"";function jg(n,s){const l=n.reviewCandidates.filter(u=>u.sourceGroup===s).filter(u=>u.item.category==="symbol"),p=[...n.companyItems,...Object.values(n.projects).flatMap(u=>u.items)].filter(u=>u.category==="symbol"&&u.fields.some(y=>y.label==="Source drawing ID"&&y.value===s)).filter(u=>u.reviewStatus==="reviewed"),m=[...new Set(p.flatMap(u=>u.fields.filter(y=>y.label==="Target CAD layer"||y.label==="Source insert layer(s)").map(y=>y.value).filter(Boolean)))];return{pending:l.filter(u=>u.status==="needs-review").length,approved:p.length,dismissed:l.filter(u=>u.status==="dismissed").length,layers:m}}function qS(n,s,o,l=new Set){if(n.format!=="DXF"||n.category!=="company-standard")throw new Error("Select a saved DXF classified as a Legends Library standard. DWG still uses the AutoCAD extractor.");const i=new ub(s),p=i.placements(),m=[...p].filter(([,D])=>D.size===1&&!!ku[[...D][0].trim().toUpperCase()]),u=Ti(i.text,m.map(([D])=>D)),y=[],h=[],g=new Map,v=[];let E=0;const S=new Set,j=[...o.reviewCandidates],T=(D,w,N,k=[])=>{const q=`extract-${n.id}-${D}-${w}`;return{id:q,proposedScope:"company",sourceGroup:n.id,status:"needs-review",item:{id:q,category:D==="BLOCK"?"symbol":"layer",name:`${D==="BLOCK"?"Block":"LAYER"} · ${w}`,summary:"Extracted from the saved DXF on this device. Only verified placement layers can be batch-approved.",sourceFile:n.label,sourceKind:"extracted-dwg",scope:"company",reviewStatus:"needs-review",canPromote:!1,fields:[{label:D==="BLOCK"?"Block name":"CAD name",value:w},{label:"Source drawing ID",value:n.id},{label:"Source discipline",value:n.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:N},...k]}}};for(const[D,w]of p){const N=[...w][0];if(w.size!==1||!ku[N.trim().toUpperCase()]){v.push({blockName:D,reason:w.size>1?"Mixed placement layers; review required.":"Internal or unsupported placement layer."});continue}const k=j.find(R=>R.sourceGroup===n.id&&fu(R,"Block name").toUpperCase()===D.toUpperCase()),q=[...o.companyItems,...Object.values(o.projects).flatMap(R=>R.items)].some(R=>R.fields.some(P=>P.label==="Source drawing ID"&&P.value===n.id)&&R.fields.some(P=>P.label==="Block name"&&P.value.trim().toUpperCase()===D.toUpperCase()));if(k&&k.status!=="needs-review"||q){E++;continue}if(!i.layerDetails(N)){v.push({blockName:D,reason:"The placement layer has no LAYER table record."});continue}const O=k&&fu(k,"Block asset ID")||`${n.id}|${D}`;try{if(!l.has(O)){const P=i.isolate(D),K=u.get(D);y.push({id:O,sourceId:n.id,blockName:D,content:P,format:"DXF",previewSvg:K?.previewSvg??null,nearbyLabels:K?.nearbyLabels??[],labelMatchAmbiguous:K?.labelMatchAmbiguous??!1,labelMatchSkipped:K?.labelMatchSkipped??!0,sourcePlacements:K?.sourcePlacements??[],...K?.geometryDescriptor?{geometryDescriptor:K.geometryDescriptor}:{}})}const R=T("BLOCK",D,`sourceLayer=${N};nativeIsolatedDxf=true`,[{label:"Block asset ID",value:O},{label:"Fallback category",value:""},{label:"Source insert layer(s)",value:N}]);if(k){const P=new Set(["Extracted details","Source insert layer(s)","Block asset ID"]);g.set(k.id,{...k,item:{...k.item,fields:[...k.item.fields.filter(K=>!P.has(K.label)),...R.item.fields.filter(K=>P.has(K.label))]}})}else h.push(R);S.add(N)}catch(R){v.push({blockName:D,reason:R instanceof Error?R.message:"Native DXF isolation failed."})}}for(const D of S){const w=j.some(k=>k.sourceGroup===n.id&&k.item.category==="layer"&&fu(k,"CAD name").toUpperCase()===D.toUpperCase()),N=o.companyItems.some(k=>k.category==="layer"&&k.fields.some(q=>q.label==="Source drawing ID"&&q.value===n.id)&&k.fields.some(q=>q.label==="CAD name"&&q.value.toUpperCase()===D.toUpperCase()));!w&&!N&&h.push(T("LAYER",D,i.layerDetails(D)))}return{library:{...o,reviewCandidates:[...o.reviewCandidates.map(D=>g.get(D.id)??D),...h]},assets:y,skipped:v,preserved:E,prepared:S.size?y.length:0,eligibleSymbols:m.length,addedSymbols:h.filter(D=>D.item.category==="symbol").length,updatedSymbols:g.size,detectedLayers:[...new Set([...p.values()].flatMap(D=>[...D]))]}}const IS=40*1024*1024,US=40*1024*1024,pu=48,$S=15,BS=32;function FS(n){const s=[];let o=0;for(;o<n.length;){const l=n[o];if(/\s/.test(l)){o+=1;continue}if(l==="("||l===")"){s.push(l),o+=1;continue}if(l==="."&&(o+1===n.length||/[\s)]/.test(n[o+1]))){s.push(l),o+=1;continue}if(l==='"'){let p="";for(o+=1;o<n.length&&n[o]!=='"';)if(n[o]==="\\"&&o+1<n.length){o+=1;const m=n[o];p+=m==="n"?`
`:m==="r"?"\r":m,o+=1}else p+=n[o],o+=1;if(n[o]!=='"')throw new Error("The AutoCAD geometry log contains an unfinished string value.");o+=1,s.push(JSON.stringify(p));continue}const i=o;for(;o<n.length&&!/[\s()]/.test(n[o]);)o+=1;if(i===o)throw new Error("The AutoCAD geometry log contains an invalid value.");s.push(n.slice(i,o))}return s}function _u(n,s,o=0){if(o>40)throw new Error("The AutoCAD geometry log nesting is too deep to read safely.");const l=n[s.index++];if(l===void 0)throw new Error("The AutoCAD geometry log contains an incomplete geometry record.");if(l!=="("){if(l===")")throw new Error("The AutoCAD geometry log contains an unexpected closing bracket.");return l.startsWith('"')?JSON.parse(l):/^[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?$/.test(l)?Number(l):l.toLowerCase()==="nil"?null:l.toUpperCase()==="T"?!0:l}const i=[];for(;s.index<n.length&&n[s.index]!==")";){if(n[s.index]==="."){if(i.length!==1)throw new Error("The AutoCAD geometry log contains a malformed pair.");s.index+=1;const p=_u(n,s,o+1);if(n[s.index++]!==")")throw new Error("The AutoCAD geometry log contains a malformed pair.");return{kind:"pair",first:i[0],rest:p}}i.push(_u(n,s,o+1))}if(n[s.index++]!==")")throw new Error("The AutoCAD geometry log contains an incomplete list.");return i}function bi(n){const s=FS(n),o={index:0},l=_u(s,o);if(o.index!==s.length)throw new Error("The AutoCAD geometry log has trailing geometry data.");return l}function Pu(n,s){if(Array.isArray(n))for(const o of n){if(o&&typeof o=="object"&&!Array.isArray(o)&&"kind"in o&&String(o.first)===s)return o.rest;if(Array.isArray(o)&&o.length>=2&&o[0]===s)return o.length===2?o[1]:o.slice(1)}}function zS(n,s){return!Array.isArray(n)||n.length<s||n.slice(0,s).some(o=>typeof o!="number"||!Number.isFinite(o))?null:n.slice(0,s)}function YS(n){if(!Array.isArray(n))return{};const s={};for(const o of n){if(o&&typeof o=="object"&&!Array.isArray(o)&&"kind"in o){const l=o;typeof l.first=="string"&&typeof l.rest=="number"&&Number.isFinite(l.rest)&&(s[l.first]=l.rest);continue}!Array.isArray(o)||typeof o[0]!="string"||typeof o[1]!="number"||!Number.isFinite(o[1])||(s[o[0]]=o[1])}return s}function VS(n){const s=bi(n);return Array.isArray(s)?s.filter(o=>typeof o=="string"):[]}function HS(n){if(new TextEncoder().encode(n).byteLength>IS)throw new Error("The AutoCAD geometry log is over the 40 MB local review limit.");const s=new Map,o=[],l=new Set;for(const i of n.split(/\r?\n/)){if(i.startsWith("SCAN|")){const T=i.split("|");T[1]&&Number.isInteger(Number(T[2]))&&l.add(`${T[1]}:${Number(T[2])}`);continue}if(i.startsWith("ENTITY|")){const T=i.indexOf("|NORMALIZED=");if(T<0)continue;const D=i.slice(0,T).split("|"),w=D[3]?.trim(),N=D[4]?.trim().toUpperCase();if(!w||!N)continue;const k=bi(i.slice(T+12));s.set(w,{handle:w,type:N,descriptor:k});continue}if(!i.startsWith("CANDIDATE|"))continue;const p=i.split("|"),m=T=>p.find(D=>D.startsWith(`${T}=`))?.slice(T.length+1),u=p[3]?.trim(),y=p[1]?.trim(),h=Number(p[2]),g=m("SOURCE_HANDLES"),v=m("BOUNDS"),E=m("PRIMITIVE_COUNTS");if(!u||!y||!Number.isInteger(h)||!g)continue;const S=v?bi(v):null,j=zS(S,4);o.push({id:u,sourceAlias:y,page:h,handles:VS(g),bounds:j,primitiveCounts:E?YS(bi(E)):{}})}if(s.size===0||l.size===0)throw new Error("This log has no readable geometry scans. Use AUTOCAD_GEOMETRY_SCAN.log from a current runner.");return{entities:s,candidates:o,pages:l.size}}function Rg(n){const s=Pu(n,"properties");return Array.isArray(s)?s.flatMap(o=>{if(!Array.isArray(o)||typeof o[0]!="number")return[];const l=o.slice(1).flatMap(i=>typeof i=="number"&&Number.isFinite(i)?[i]:Array.isArray(i)?i.filter(p=>typeof p=="number"&&Number.isFinite(p)):[]);return[{code:o[0],values:l}]}):[]}function pi(n,s,o=0){const l=n.filter(i=>i.code===s)[o];return!l||l.values.length<2?null:{x:l.values[0],y:l.values[1]}}function fb(n,s,o){if(!Number.isFinite(o)||Math.abs(o)<1e-5)return[n,s];const l=s.x-n.x,i=s.y-n.y,p=Math.hypot(l,i);if(p<1e-9)return[n,s];const m=4*Math.atan(o),u=p*(1-o*o)/(4*o),y={x:(n.x+s.x)/2-i/p*u,y:(n.y+s.y)/2+l/p*u},h=Math.atan2(n.y-y.y,n.x-y.x),g=Math.hypot(n.x-y.x,n.y-y.y),v=Math.max(4,Math.min(32,Math.ceil(Math.abs(m)/(Math.PI/12))));return Array.from({length:v+1},(E,S)=>{const j=h+m*S/v;return{x:y.x+Math.cos(j)*g,y:y.y+Math.sin(j)*g}})}function GS(n){const s=Rg(n.descriptor),o=n.type;if(o==="LINE"){const l=pi(s,10),i=pi(s,11);return l&&i?[l,i]:[]}if(o==="CIRCLE"||o==="ARC"){const l=pi(s,10),i=s.find(v=>v.code===40)?.values[0]??0;if(!l||i<=0)return[];const p=s.find(v=>v.code===50)?.values[0]??0,m=s.find(v=>v.code===51)?.values[0]??Math.PI*2,u=v=>Math.abs(v)>Math.PI*2+.1?v*Math.PI/180:v,y=o==="CIRCLE"?0:u(p);let h=o==="CIRCLE"?Math.PI*2:u(m)-y;for(;h<=0;)h+=Math.PI*2;const g=Math.max(12,Math.min(48,Math.ceil(h/(Math.PI/12))));return Array.from({length:g+1},(v,E)=>{const S=y+h*E/g;return{x:l.x+Math.cos(S)*i,y:l.y+Math.sin(S)*i}})}if(o==="LWPOLYLINE"){const l=[];let i=null;for(const y of s)y.code===10&&y.values.length>=2?(i={point:{x:y.values[0],y:y.values[1]},bulge:0},l.push(i)):y.code===42&&i&&(i.bulge=y.values[0]??0);const p=Pu(n.descriptor,"closed")===!0;if(l.length<2)return l.map(y=>y.point);const m=[],u=p?l.length:l.length-1;for(let y=0;y<u;y+=1){const h=l[y],g=l[(y+1)%l.length],v=fb(h.point,g.point,h.bulge);m.push(...y?v.slice(1):v)}return p||m.push(l[l.length-1].point),m}if(o==="POLYLINE"){const l=Pu(n.descriptor,"polylineVertices");return Array.isArray(l)?l.flatMap(p=>{const m=Rg([["properties",p]]),u=pi(m,10);return u?[u]:[]}):[]}return[]}function XS(n){const s=n.geometry,o=n.transform,l=p=>({x:o[0]*p.x+o[2]*p.y+o[4],y:o[1]*p.x+o[3]*p.y+o[5]}),i=s.vertices??s.fitPoints??s.controlPoints;if((n.type==="LINE"||n.type==="SPLINE")&&i?.length)return i.map(l);if(n.type==="LWPOLYLINE"||n.type==="POLYLINE"){if(!i?.length)return[];const p=s.closed===!0,m=[],u=p?i.length:i.length-1;for(let y=0;y<u;y+=1){const h=i[y],g=i[(y+1)%i.length],v=fb(h,g,h.bulge??0).map(l);m.push(...y?v.slice(1):v)}return p||m.push(l(i[i.length-1])),m}if(n.type==="CIRCLE"||n.type==="ARC"){const p=s.center,m=Number(s.radius);if(!p||!Number.isFinite(m)||m<=0)return[];const u=n.type==="ARC"?Number(s.startAngle??0):0;let y=n.type==="ARC"?Number(s.endAngle??u+Math.PI*2)-u:Math.PI*2;for(;y<=0;)y+=Math.PI*2;const h=Math.max(12,Math.min(48,Math.ceil(y/(Math.PI/12))));return Array.from({length:h+1},(g,v)=>{const E=u+y*v/h;return l({x:p.x+Math.cos(E)*m,y:p.y+Math.sin(E)*m})})}if(n.type==="ELLIPSE"){const p=s.center,m=s.majorAxisEndPoint,u=Number(s.axisRatio);if(!p||!m||!Number.isFinite(u)||u<=0)return[];const y=32;return Array.from({length:y},(h,g)=>{const v=Math.PI*2*g/y;return l({x:p.x+m.x*Math.cos(v)-m.y*u*Math.sin(v),y:p.y+m.y*Math.cos(v)+m.x*u*Math.sin(v)})})}return[]}function KS(n){return n.length<=pu?n:Array.from({length:pu},(s,o)=>n[Math.floor(o*(n.length-1)/(pu-1))])}function Lg(n){const s=KS(n.filter(i=>Number.isFinite(i.x)&&Number.isFinite(i.y)));if(s.length<2)return[];const o={x:s.reduce((i,p)=>i+p.x,0)/s.length,y:s.reduce((i,p)=>i+p.y,0)/s.length},l=Math.sqrt(s.reduce((i,p)=>i+(p.x-o.x)**2+(p.y-o.y)**2,0)/s.length);return!Number.isFinite(l)||l<1e-9?[]:s.map(i=>({x:(i.x-o.x)/l,y:(i.y-o.y)/l}))}function Og(n){return n.length?{minX:Math.min(...n.map(s=>s.x)),minY:Math.min(...n.map(s=>s.y)),maxX:Math.max(...n.map(s=>s.x)),maxY:Math.max(...n.map(s=>s.y))}:null}function _g(n){return n?Math.hypot(n.maxX-n.minX,n.maxY-n.minY):0}function Pg(n,s){const o=new Set([...Object.keys(n),...Object.keys(s)]);let l=0,i=0;for(const p of o){const m=n[p]??0,u=s[p]??0;l+=Math.max(m,u),i+=Math.abs(m-u)}return l===0?0:Math.max(0,1-i/(2*l))}function Mg(n,s){if(!n||!s)return 0;const o=Math.max(n.maxX-n.minX,1e-9),l=Math.max(n.maxY-n.minY,1e-9),i=Math.max(s.maxX-s.minX,1e-9),p=Math.max(s.maxY-s.minY,1e-9),m=Math.max(o/l,l/o),u=Math.max(i/p,p/i);return Math.exp(-Math.abs(Math.log(m/u)))}function qg(n,s){let o=0;for(const l of n){let i=Number.POSITIVE_INFINITY;for(const p of s){const m=(l.x-p.x)**2+(l.y-p.y)**2;m<i&&(i=m)}o+=i}return o/n.length}function WS(n,s){let o=Number.POSITIVE_INFINITY,l=0;for(let i=0;i<360;i+=$S){const p=i*Math.PI/180,m=Math.cos(p),u=Math.sin(p),y=s.map(g=>({x:m*g.x-u*g.y,y:u*g.x+m*g.y})),h=Math.sqrt((qg(n,y)+qg(y,n))/2);h<o&&(o=h,l=i)}return{residual:o,rotation:l}}function ZS(n,s){return n.handles.flatMap(o=>{const l=s.get(o);return l?GS(l):[]})}function Ig(n){return n.primitives.flatMap(XS)}function QS(n,s){if(new TextEncoder().encode(n).byteLength>US)throw new Error("The CAD block geometry index is over the 40 MB local review limit.");let o;try{o=JSON.parse(n)}catch{throw new Error("The selected file is not valid CAD_BLOCK_GEOMETRY_INDEX.json.")}if(!o||typeof o!="object"||o.localOnly!==!0||!Array.isArray(o.blocks))throw new Error("This is not a local-only CAD block geometry index from the runner package.");return o.blocks.filter(l=>l.indexStatus==="INDEXED"&&(l.discipline===s||l.discipline==="Shared")&&typeof l.blockName=="string"&&typeof l.blockAssetId=="string"&&l.geometry&&typeof l.geometry=="object")}function JS(n,s,o){const l=HS(n),p=QS(s,o).flatMap(u=>{const y=u.geometry,h=Lg(Ig(y));return!h.length||!y.bounds?[]:[{block:u,geometry:y,cloud:h,bounds:Og(Ig(y)),primitiveCounts:y.primitiveCounts??{}}]}),m=l.candidates.map(u=>{const y=ZS(u,l.entities),h=Lg(y),g=u.bounds?{minX:u.bounds[0],minY:u.bounds[1],maxX:u.bounds[2],maxY:u.bounds[3]}:Og(y);if(p.length===0)return{...u,best:null,second:null,status:"NO_INDEXED_BLOCKS",reason:"No indexed approved blocks for this discipline."};if(h.length<2||!g)return{...u,best:null,second:null,status:"UNMATCHED",reason:"Candidate has too little supported geometry to compare."};const E=p.map(N=>({prepared:N,coarse:Mg(g,N.geometry.bounds)*.75+Pg(u.primitiveCounts,N.primitiveCounts)*.25})).sort((N,k)=>k.coarse-N.coarse).slice(0,BS).map(({prepared:N})=>N).map(N=>{const k=Pg(u.primitiveCounts,N.primitiveCounts),q=Mg(g,N.geometry.bounds),x=WS(h,N.cloud),O=Math.exp(-x.residual*2.5),R=Math.max(0,Math.min(1,O*.7+k*.2+q*.1)),P=_g(g),K=_g(N.geometry.bounds),ue=String(N.block.category??""),ne=/\b(equipment|tower|vessel|tank|exchanger|column|drum)\b/i.test(ue);return{blockAssetId:String(N.block.blockAssetId),blockName:String(N.block.blockName),category:ue,targetLayer:String(N.block.targetLayer??""),score:R,geometryResidual:x.residual,primitiveSimilarity:k,aspectSimilarity:q,rotationDegrees:x.rotation,estimatedUniformScale:ne||K<=1e-9?null:P/K,indexStatus:String(N.block.indexStatus)}}).sort((N,k)=>k.score-N.score||N.blockName.localeCompare(k.blockName)),S=E[0]??null,j=E[1]??null,T=S&&j?S.score-j.score:Number.POSITIVE_INFINITY,D=!S||S.score<.9?"UNMATCHED":T<.02?"AMBIGUOUS_REVIEW":S.score>=.97?"HIGH_CANDIDATE_REVIEW":"REVIEW";return{...u,best:S,second:j,status:D,reason:D==="AMBIGUOUS_REVIEW"?"Top library shapes are too close to identify safely.":D==="UNMATCHED"?"No geometry match reached the initial review threshold.":"Experimental shape score only; human confirmation is required."}});return{scan:l,candidates:m,indexedBlockCount:p.length}}function e2(n,s){return JSON.stringify({schemaVersion:1,localOnly:!0,discipline:s,generatedAt:new Date().toISOString(),note:"Experimental geometry similarity rankings. Scores are not probabilities or approvals. Source geometry was not changed; every candidate requires human review.",pagesScanned:n.scan.pages,indexedBlocks:n.indexedBlockCount,candidates:n.candidates},null,2)}function Ug(n){return n===void 0?"—":`${(n*100).toFixed(1)}%`}function t2(n){return n==null?"Review":`${n.toFixed(3)}×`}function a2({discipline:n}){const[s,o]=M.useState(null),[l,i]=M.useState(null),[p,m]=M.useState(null),[u,y]=M.useState(""),[h,g]=M.useState(!1),v=async()=>{if(!s||!l){y("Choose both AUTOCAD_GEOMETRY_SCAN.log and CAD_BLOCK_GEOMETRY_INDEX.json.");return}g(!0),y(""),m(null);try{const[S,j]=await Promise.all([s.text(),l.text()]),T=JS(S,j,n);m({scanName:s.name,indexName:l.name,discipline:n,indexedBlockCount:T.indexedBlockCount,pagesScanned:T.scan.pages,candidates:T.candidates})}catch(S){y(S instanceof Error?S.message:"The local geometry report could not be compared.")}finally{g(!1)}},E=()=>{if(!p)return;const S=e2({scan:{entities:new Map,candidates:[],pages:p.pagesScanned},candidates:p.candidates,indexedBlockCount:p.indexedBlockCount},p.discipline),j=URL.createObjectURL(new Blob([S],{type:"application/json"})),T=document.createElement("a");T.href=j,T.download="LOCAL_GEOMETRY_MATCH_REVIEW.json",T.click(),URL.revokeObjectURL(j)};return d.jsxs("section",{className:"geometry-match-review","aria-labelledby":"geometry-match-title","data-testid":"panel-geometry-match-review",children:[d.jsxs("div",{className:"geometry-match-heading",children:[d.jsx("span",{className:"geometry-match-icon",children:d.jsx(Sw,{size:16})}),d.jsxs("div",{children:[d.jsx("h3",{id:"geometry-match-title",children:"Review geometry matches"}),d.jsx("p",{children:"Compare a local AutoCAD scan with indexed approved blocks. Source drawings are not changed."})]})]}),d.jsxs("div",{className:"geometry-match-privacy",children:[d.jsx(bu,{size:14})," Both files are read and compared in this browser; nothing is uploaded."]}),d.jsx("p",{className:"geometry-match-instructions",children:"Use the scan log from AutoCAD and the index file from that same runner kit. The result is a local review aid only."}),d.jsxs("div",{className:"geometry-match-inputs",children:[d.jsxs("label",{children:[d.jsx("span",{children:"AutoCAD geometry scan log"}),d.jsx("input",{type:"file",accept:".log,.txt","aria-label":"Select AutoCAD geometry scan log",onChange:S=>{o(S.currentTarget.files?.[0]??null),m(null),y("")},"data-testid":"input-geometry-scan-log"})]}),d.jsxs("label",{children:[d.jsx("span",{children:"CAD block geometry index"}),d.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Select CAD block geometry index",onChange:S=>{i(S.currentTarget.files?.[0]??null),m(null),y("")},"data-testid":"input-cad-geometry-index"})]}),d.jsxs("button",{className:"btn primary",type:"button",onClick:()=>{v()},disabled:h||!s||!l,"data-testid":"button-build-geometry-match-report",children:[d.jsx(Tr,{size:14}),h?"Comparing…":"Compare geometry"]})]}),u&&d.jsx("p",{className:"geometry-match-error",role:"alert",children:u}),p&&d.jsxs("div",{className:"geometry-match-results","data-testid":"geometry-match-results",children:[d.jsxs("div",{className:"geometry-match-summary",role:"status",children:[p.discipline,": ",p.candidates.length," candidate group(s) across ",p.pagesScanned," page(s); ",p.indexedBlockCount," indexed approved block(s)."]}),p.indexedBlockCount===0&&d.jsx("p",{className:"geometry-match-warning",children:"No matching indexed blocks were found for this discipline. Check that the selected index came from the same local runner package."}),p.indexedBlockCount>0&&p.candidates.length===0&&d.jsx("p",{className:"geometry-match-warning",children:"AutoCAD found no geometry candidate groups on the scanned pages. No blocks were inserted or drawings changed."}),p.candidates.map(S=>d.jsxs("article",{className:"geometry-match-card",children:[d.jsxs("div",{className:"geometry-match-card-head",children:[d.jsx("strong",{children:S.id}),d.jsx("span",{className:`geometry-match-status status-${S.status.toLowerCase()}`,children:S.status.replaceAll("_"," ")})]}),d.jsxs("div",{className:"geometry-match-card-meta",children:["Page ",S.page," · ",S.handles.length," source entities · ",S.sourceAlias]}),d.jsxs("div",{className:"geometry-match-ranking",children:[d.jsxs("div",{children:[d.jsx("span",{children:"Best shape match"}),d.jsx("strong",{children:S.best?.blockName??"No match"}),d.jsxs("small",{children:[Ug(S.best?.score)," · ",S.best?.targetLayer||"no target layer"," ·"," ",S.best?.rotationDegrees??"—","° · scale ",t2(S.best?.estimatedUniformScale)]})]}),d.jsxs("div",{children:[d.jsx("span",{children:"Second match"}),d.jsx("strong",{children:S.second?.blockName??"—"}),d.jsx("small",{children:Ug(S.second?.score)})]})]}),d.jsx("p",{children:S.reason})]},`${S.sourceAlias}-${S.page}-${S.id}`)),d.jsxs("div",{className:"geometry-match-foot",children:[d.jsx("span",{children:"Experimental shape scores are not probabilities or approvals. Every result needs a person to verify it."}),d.jsxs("button",{className:"btn subtle",type:"button",onClick:E,"data-testid":"button-download-geometry-match-report",children:[d.jsx(Ms,{size:13})," Download local report"]})]})]})]})}const $g=250*1024*1024,Bg=500*1024*1024,Mu={"needs-review":"Needs review","company-standard":"Legends Library standard","project-example":"Project example","markup-reference":"Markup reference",ignore:"Do not use"};function Fg(n,s){return s&&n==="project-example"?"Client-specific library source":Mu[n]}function hu(){return globalThis.crypto?.randomUUID?.()??`source-${Date.now()}-${Math.random().toString(36).slice(2)}`}function mu(n){return n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/(1024*1024)).toFixed(2)} MB`}function zg(n){return(n.replace(/\\/g,"/").split("/").pop()??"").replace(/[\u0000-\u001f\u007f-\u009f\u202a-\u202e\u2066-\u2069]/g,"").trim().slice(0,180)||"Unnamed CAD drawing"}function n2({onAddPdfs:n,discipline:s,clientFolderId:o,clientFolderLabel:l}){const[i,p]=M.useState([]),[m,u]=M.useState({}),[y,h]=M.useState([]),[g,v]=M.useState([]),[E,S]=M.useState(""),[j,T]=M.useState(""),[D,w]=M.useState(!1),[N,k]=M.useState(!1),[q,x]=M.useState(""),[O,R]=M.useState(!1),[P,K]=M.useState(()=>{try{return pn().reviewCandidates.filter($=>$.status==="needs-review").length}catch{return 0}}),[ue,ne]=M.useState(!1),[le,we]=M.useState(""),[ge,ce]=M.useState(!1),[V,re]=M.useState(!1),[ye,Ae]=M.useState(0),[_,Q]=M.useState([]);M.useEffect(()=>{const $=()=>Ae(ie=>ie+1);return window.addEventListener(zo,$),window.addEventListener("storage",$),window.addEventListener("focus",$),()=>{window.removeEventListener(zo,$),window.removeEventListener("storage",$),window.removeEventListener("focus",$)}},[]);const U=M.useMemo(()=>{try{const $=pn();return Object.fromEntries(i.map(ie=>[ie.id,jg($,ie.id)]))}catch{return{}}},[i,ye]);M.useEffect(()=>{Ru().then($=>{p($),u(Object.fromEntries($.map(ie=>[ie.id,{category:ie.category,discipline:ie.discipline,projectLabel:ie.projectLabel}])))}).catch($=>{x($ instanceof Error?$.message:"The local CAD library could not be opened.")})},[]);const G=M.useMemo(()=>Nx(i,s,o),[i,s,o]),oe=M.useMemo(()=>G.filter($=>$.category==="company-standard"||!!o&&$.category==="project-example"&&$.projectLabel===o),[G,o]);M.useEffect(()=>{oe.some($=>$.id===le)||we(oe[0]?.id??"")},[oe,le]);const he=M.useMemo(()=>G.reduce(($,ie)=>($[ie.category]+=1,$),{"needs-review":0,"company-standard":0,"project-example":0,"markup-reference":0,ignore:0}),[G]),be=y.some($=>o?$.projectLabel!==o:!!$.projectLabel),ze=async $=>{w(!0),T(""),x(""),S(""),R(!1),h([]),v([]);try{if($.size>$g)throw new Error("The archive is larger than the 250 MB limit for this local test.");const ie=xg(new Uint8Array(await $.arrayBuffer())),fe=Object.entries(ie).filter(([qe])=>!qe.endsWith("/")),B=fe.filter(([qe])=>/\.(dwg|dxf)$/i.test(qe)&&!/_OVERVIEW\.dxf$/i.test(qe)),de=fe.filter(([qe])=>/\.pdf$/i.test(qe)),je=fe.filter(([qe])=>/\.bak$/i.test(qe)).length;if([...B,...de].reduce((qe,[,Te])=>qe+Te.byteLength,0)>Bg)throw new Error("The PDF and CAD source files together exceed the 500 MB local test limit.");if(B.length===0&&de.length===0)throw new Error("No PDF, DWG, or source DXF files were found in this ZIP. Overview DXFs and other file types are not saved as source drawings.");const Me=B.map(([qe,Te],Qt)=>({id:hu(),label:`Source CAD ${String(i.length+Qt+1).padStart(3,"0")}`,reviewFilename:zg(qe),category:"needs-review",discipline:s,format:/\.dxf$/i.test(qe)?"DXF":"DWG",projectLabel:o??"",bytes:Te.byteLength,content:Te})),Be=de.map(([,qe],Te)=>({id:hu(),label:`PDF ${String(Te+1).padStart(2,"0")}`,file:new File([qe],`SOURCE_${String(Te+1).padStart(2,"0")}.pdf`,{type:"application/pdf"})}));h(Me),v(Be),S(`Found ${B.length} CAD drawing file(s) and ${de.length} PDF file(s). ${je} backup file(s) ignored.`),B.length?T("Assign a use to each CAD drawing before saving it. ZIP filenames are shown only during review; the saved library keeps generic source IDs."):T("No CAD drawings to add. You can add the extracted PDF to the conversion queue.")}catch(ie){x(ie instanceof Error?ie.message:"The ZIP could not be read. Check that it is not damaged or password-protected.")}finally{w(!1)}},Ie=async $=>{x(""),S(""),T(""),h([]),v([]),R(!1);const ie=$.filter(B=>/\.(dwg|dxf)$/i.test(B.name)&&!/_OVERVIEW\.dxf$/i.test(B.name));if(ie.length!==$.length){x("Choose source DWG/DXF files only. Overview DXFs are not source drawings.");return}if(ie.reduce((B,de)=>B+de.size,0)>Bg){x("The selected CAD source files exceed the 500 MB local test limit.");return}if(!ie.length){x("Choose at least one DWG or DXF source drawing.");return}w(!0);try{const B=await Promise.all(ie.map(async(de,je)=>({id:hu(),label:`Source CAD ${String(i.length+je+1).padStart(3,"0")}`,reviewFilename:zg(de.name),category:"needs-review",discipline:s,format:/\.dxf$/i.test(de.name)?"DXF":"DWG",projectLabel:o??"",bytes:de.size,content:new Uint8Array(await de.arrayBuffer())})));h(B),S(`Prepared ${B.length} CAD source file(s) for local review.`),T("Choose the correct discipline and local library category for each file. Filenames are discarded when saved.")}catch(B){x(B instanceof Error?B.message:"The CAD files could not be read locally.")}finally{w(!1)}},lt=async()=>{if(be){x("The selected client folder changed after these files were staged. Re-select the original client folder or add the files again.");return}if(y.some($=>$.category==="needs-review")){x("Choose a category for every CAD drawing before saving the library.");return}if(y.some($=>["project-example","markup-reference"].includes($.category)&&!$.projectLabel?.trim())){x("Enter a neutral project code for every project example and markup reference.");return}k(!0),x("");try{let $=0;const ie=y.filter(de=>de.category!=="ignore").map(de=>{const je=de.format==="DXF"?Nr(de.content):null;return $+=je?.repairs.length??0,{id:de.id,label:de.label,category:de.category,discipline:de.discipline,format:de.format,projectLabel:de.projectLabel,bytes:je?.content.byteLength??de.bytes,content:je?.content??de.content}});await Mx(ie);const fe=await Ru();p(fe),u(Object.fromEntries(fe.map(de=>[de.id,{category:de.category,discipline:de.discipline,projectLabel:de.projectLabel}])));const B=y.length-ie.length;h([]),T(`${ie.length} source CAD drawing(s) saved in this browser's local library. ${B} marked “Do not use”. ${$} DXF symbol name(s) repaired in local copies; original disk files unchanged.`)}catch($){x($ instanceof Error?$.message:"The CAD sources could not be saved locally.")}finally{k(!1)}},ft=($,ie)=>{u(fe=>({...fe,[$.id]:{...$,...fe[$.id],...ie}}))},jt=async $=>{const ie=m[$.id]??{category:$.category,discipline:$.discipline,projectLabel:$.projectLabel};if(["project-example","markup-reference"].includes(ie.category)&&!ie.projectLabel?.trim()){x("Enter a neutral project code before saving this project-specific source.");return}x("");try{await qx($.id,ie),p(fe=>fe.map(B=>B.id===$.id?{...B,...ie,...ie.projectLabel?.trim()?{projectLabel:ie.projectLabel.trim()}:{projectLabel:void 0}}:B))}catch(fe){x(fe instanceof Error?fe.message:"The source drawing category could not be changed.")}},Je=async()=>{if(!(!oe.length||ue)){ne(!0),x("");try{const $=await Bx(oe),ie=URL.createObjectURL($),fe=document.createElement("a");fe.href=ie,fe.download="local-cad-extractor-kit.zip",fe.click(),window.setTimeout(()=>URL.revokeObjectURL(ie),1e3),T(`Local extractor kit prepared with ${oe.length} source CAD drawing(s).`)}catch($){x($ instanceof Error?$.message:"The local extractor kit could not be prepared.")}finally{ne(!1)}}},vt=async $=>{const ie=oe.some(B=>B.id===le)?le:oe[0]?.id,fe=oe.find(B=>B.id===ie);if(!fe){x("Choose a reviewed source drawing before importing its extraction.");return}if(fe.category==="project-example"&&!fe.projectLabel?.trim()){x("Add a neutral project code to this source drawing before importing its extraction.");return}ce(!0),x("");try{if($.size>$g)throw new Error("The extraction ZIP is larger than the 250 MB limit for this local test.");const B=xg(new Uint8Array(await $.arrayBuffer())),de=Object.entries(B).find(([Dt])=>/\.tsv$/i.test(Dt));if(!de)throw new Error("The ZIP must contain CAD_STANDARDS.tsv from PIDEXTRACTSTANDARDS.");const me=new TextDecoder().decode(de[1]).split(/\r?\n/).filter(Boolean);if(me.length<2||!me[0].toUpperCase().includes("KIND")||!me[0].toUpperCase().includes("NAME"))throw new Error("The ZIP contains an invalid CAD_STANDARDS.tsv extraction.");const Me=pn(),Be=Object.entries(B).filter(([Dt])=>/_OVERVIEW\.dxf$/i.test(Dt)),qe=me[1]?.split("	")[0]?.trim()??"",Te=Be.find(([Dt])=>Dt.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===`${qe}_OVERVIEW.dxf`.toLowerCase());if(Be.length&&(!Te||Be.length!==1))throw new Error("Include exactly one overview DXF for this extraction, named with the same SOURCE alias as the TSV (for example SOURCE_001_OVERVIEW.dxf).");const Qt=me.slice(1).flatMap(Dt=>{const[,Sa,la]=Dt.split("	");return Sa?.trim().toUpperCase()==="BLOCK"&&la?.trim()?[la.trim()]:[]});if(Te&&Te[1].byteLength>30*1024*1024)throw new Error("The overview DXF exceeds the 30 MB preview limit. Keep the original extraction unchanged and export a smaller Legends-only overview.");let xe=null,Ke="",nt=!1;if(Te)xe=new TextDecoder("windows-1252").decode(Te[1]),Ke="overview DXF";else if(fe.format==="DXF"&&fe.bytes<=30*1024*1024)try{xe=new TextDecoder("windows-1252").decode(await $o(fe.id)),Ke="saved source DXF"}catch{nt=!0}else fe.format==="DXF"&&(nt=!0);let gt=new Map;if(xe)try{gt=Ti(xe,Qt)}catch{nt=!0}const Ce=[],Rt=[],Gt=[];for(const Dt of me.slice(1)){const[,Sa,la,Da=""]=Dt.split("	"),_t=Sa?.trim().toUpperCase(),pt=la?.trim();if(!pt||!Yg[_t])continue;const Ia=_t==="BLOCK"&&rb(pt)?"directionArrow":Yg[_t],ia=_t==="BLOCK"?gt.get(pt):void 0;let Wa;if(_t==="BLOCK"){const Jt=Da.match(/(?:^|;)asset=([^;]+)/i)?.[1]?.trim();if(!Jt){Gt.push(pt);continue}const F=Jt.replaceAll("\\","/").split("/").at(-1),pe=Object.entries(B).find(([Ee])=>Ee.replaceAll("\\","/").split("/").at(-1)?.toLowerCase()===F?.toLowerCase());if(!F||!pe){Gt.push(pt);continue}Wa=`${fe.id}|${pt}`,Rt.push({id:Wa,sourceId:fe.id,blockName:pt,content:pe[1],format:"DWG",...xe&&!nt?{previewSvg:ia?.previewSvg??null,nearbyLabels:ia?.nearbyLabels??[],labelMatchSkipped:ia?.labelMatchSkipped??!1,labelMatchAmbiguous:ia?.labelMatchAmbiguous??!1,sourcePlacements:ia?.sourcePlacements??[],...ia?.geometryDescriptor?{geometryDescriptor:ia.geometryDescriptor}:{}}:{}})}const At=`extract-${fe.id}-${_t}-${pt}`;if(Me.reviewCandidates.find(Jt=>Jt.id===At))continue;const fa=fe.category==="project-example",pa=[{label:_t==="BLOCK"?"Block name":"CAD name",value:pt},{label:"Source drawing ID",value:fe.id},{label:"Source discipline",value:fe.discipline},{label:"Neutral source alias",value:"SOURCE_LOCAL"},{label:"Extracted details",value:Da.replace(/(?:^|;)asset=[^;]*/i,"").trim()||"No additional table details"},..._t==="BLOCK"?[{label:"Block asset ID",value:Wa??""},{label:"Fallback category",value:""},...ia?.sourcePlacements?.length?[{label:"Source insert layer(s)",value:[...new Set(ia.sourcePlacements.map(Jt=>Jt.layer))].join(", ")},{label:"Source insert rotation(s)",value:ia.sourcePlacements.map(Jt=>`${Jt.rotationDegrees}° on ${Jt.layer} (${Jt.count})`).join("; ")}]:[]]:[]];Ce.push({id:At,item:{id:At,category:Ia,name:`${Ia==="directionArrow"?"Direction Arrow":_t==="BLOCK"?"Block":_t.replaceAll("_"," ")} · ${pt}`,summary:"Extracted locally from a source CAD drawing; confirm each value before use.",sourceFile:fe.label,sourceKind:"extracted-dwg",scope:fa?"project":"company",reviewStatus:"needs-review",...fa?{projectId:fe.projectLabel,projectName:fe.projectLabel===o&&l||fe.projectLabel}:{},canPromote:!1,fields:pa},proposedScope:fa?"project":"company",sourceGroup:fe.id,...fa?{projectId:fe.projectLabel,projectName:fe.projectLabel===o&&l||fe.projectLabel}:{},status:"needs-review"})}const $t={...Me,reviewCandidates:[...Me.reviewCandidates,...Ce],auditTrail:Ce.length?[{id:`audit-${globalThis.crypto.randomUUID()}`,at:new Date().toISOString(),action:"Local CAD extraction added for review",detail:`${Ce.length} extracted records from ${fe.label} were added as pending review.`,...fe.projectLabel?{projectName:fe.projectLabel===o&&l||fe.projectLabel}:{}},...Me.auditTrail]:Me.auditTrail},Bt=xe&&!nt?Tg($t,fe.id,gt).library:$t;await Lu(Rt),Yo(Bt),K(Bt.reviewCandidates.filter(Dt=>Dt.status==="needs-review").length),T((Ce.length?`${Ce.length} extracted record(s) added to Drafting standards for review. Nothing was approved automatically.`:"No new records found; the extracted names are already in the review queue or standards library.")+(gt.size?` ${gt.size} local block previews and source placement-layer details read from the ${Ke}. Nearby labels remain suggestions and need confirmation.`:nt?" The source preview could not be read; the valid extracted records were still imported without preview-based layer evidence.":fe.format==="DWG"&&!Te?" To identify DWG blocks and their placement layers, include the source *_OVERVIEW.dxf exported with PIDEXPORTOVERVIEW.":"")+(Gt.length?` ${Gt.length} block asset(s) were missing and skipped: ${[...new Set(Gt)].slice(0,5).join(", ")}${Gt.length>5?", …":""}. Other valid records were kept.`:""))}catch(B){x(B instanceof Error?B.message:"The CAD extraction could not be imported.")}finally{ce(!1)}},ua=async()=>{const $=oe.find(fe=>fe.id===le&&fe.category==="company-standard"),ie=$?[$.id]:[];if(!(!$||V)){re(!0),x(""),T(""),Q([]);try{let fe=pn();const B=JSON.stringify(fe);let de="";if($.format==="DXF"){T(`${$.label}: extracting native blocks from the saved DXF on this device…`),await new Promise(nt=>window.setTimeout(nt,0));const xe=await Lx(),Ke=qS($,await $o($.id),fe,xe);if(JSON.stringify(pn())!==B)throw new Error("The library changed during DXF preparation. No records were changed; retry with the latest library.");await Lu(Ke.assets,!0),fe=Ke.library,Q(Ke.skipped),de=`${Ke.addedSymbols} new symbol record(s), ${Ke.assets.length} native block file(s) saved; ${Ke.preserved} previously reviewed symbol(s) preserved. ${Ke.skipped.length} item(s) excluded or need native extraction/review. `}const je=fe.reviewCandidates.filter(xe=>xe.sourceGroup===$.id&&xe.status==="needs-review"&&xe.proposedScope==="company"&&xe.item.category==="symbol"&&xe.item.sourceKind==="extracted-dwg");if(!je.length){const xe=jg(fe,$.id);T(`${$.label}: ${de}No pending symbols to approve. ${xe.approved} already approved; ${xe.dismissed} dismissed. ${$.format==="DXF"?"Only named model-space INSERTs on supported placement layers can be extracted. See excluded items below; loose geometry is not guessed into blocks.":"For DWG, import this source’s extraction ZIP with its individual block files."}`);return}let me="";if($.format==="DXF"){if($.bytes>30*1024*1024)throw new Error("This saved source DXF exceeds the 30 MB recovery limit. Import its extraction with a smaller Legends-only overview DXF.");const xe=await $o($.id),Ke=je.map(Ce=>Ce.item.fields.find(Rt=>Rt.label==="Block name")?.value.trim()??"").filter(Boolean),nt=Ti(new TextDecoder("windows-1252").decode(xe),Ke),gt=Tg(fe,$.id,nt);fe=gt.library,me=`${gt.recoveredSymbols} pending symbol(s) have INSERT-layer evidence in the saved DXF; ${gt.updatedRecords} existing record(s) updated. `}const Me=new Set(ie),Be=new Set(fe.reviewCandidates.filter(xe=>xe.status==="needs-review"&&Me.has(xe.sourceGroup)&&xe.item.category==="symbol").map(xe=>xe.item.fields.find(Ke=>Ke.label==="Block asset ID")?.value.trim()??"").filter(Boolean)),qe=new Set;await Promise.all([...Be].map(async xe=>{try{await eb(xe),qe.add(xe)}catch{}}));const Te=xx(fe,ie,qe);if(JSON.stringify(pn())!==B)throw new Error("The local standards library changed while this source was being checked. No approval changes were saved; retry to use the latest records.");Yo(Te.library),K(Te.library.reviewCandidates.filter(xe=>xe.status==="needs-review").length);const Qt=Object.values(Te.skipped).reduce((xe,Ke)=>xe+Ke,0);T(`${$.label}: ${de}${me}`+(Te.approvedSymbols?`${Te.approvedSymbols} layer-matched symbol(s) approved for shared PFD/P&ID use; ${Te.approvedLayers} placement layer(s) approved or updated.`:"0 symbols approved. Only exact placement layers with local block files and a matching layer record can be approved.")),Qt&&T(xe=>`${xe} ${Te.skipped.missingAsset} missing asset(s), ${Te.skipped.unsupportedLayer} internal/unsupported layer item(s), ${Te.skipped.ambiguousLayer} ambiguous layer item(s), ${Te.skipped.missingLayer} missing layer record(s), and ${Te.skipped.invalidCandidate} invalid item(s) stayed unapproved.`)}catch(fe){T(""),x(fe instanceof Error?fe.message:"The categorized CAD mappings could not be approved locally.")}finally{re(!1)}}};return d.jsxs("section",{className:"local-cad-library","aria-labelledby":"local-library-title","data-testid":"panel-local-cad-library",children:[d.jsxs("div",{className:"local-library-heading",children:[d.jsx("div",{className:"local-library-icon",children:d.jsx(Hu,{size:17})}),d.jsxs("div",{className:"local-library-title",children:[d.jsx("div",{className:"pdf-kicker",children:"SOURCE DRAWINGS · LOCAL ONLY"}),d.jsx("h3",{id:"local-library-title",children:o?"Client Source Library":"Legends Library"}),d.jsx("p",{children:o?`Manage CAD sources for ${l||"this client folder"}. Company standards remain the common default.`:"Add common company standards here. Select a Client folder first to add client-specific sources."})]}),d.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-files",children:[D?d.jsx(Ma,{size:14,className:"pdf-spin"}):d.jsx(Tr,{size:14}),D?"Reading…":"Add DWG/DXF",d.jsx("input",{type:"file",accept:".dwg,.dxf,application/acad,application/x-dwg,application/dxf",multiple:!0,"aria-label":"Add local DWG or DXF source files",disabled:D,onChange:$=>{const ie=[...$.currentTarget.files??[]];ie.length&&Ie(ie),$.currentTarget.value=""},"data-testid":"input-add-cad-files"})]}),d.jsxs("label",{className:"btn pdf-add-control","data-testid":"label-add-cad-archive",children:[D?d.jsx(Ma,{size:14,className:"pdf-spin"}):d.jsx(dy,{size:14}),D?"Reading ZIP…":"Add ZIP",d.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Add a ZIP with PDF and DWG/DXF source files",disabled:D,onChange:$=>{const ie=$.currentTarget.files?.[0];ie&&ze(ie),$.currentTarget.value=""},"data-testid":"input-add-cad-archive"})]})]}),d.jsxs("div",{className:"local-library-privacy",children:[d.jsx(ps,{size:14}),d.jsxs("span",{children:[d.jsx("strong",{children:"Files stay in this browser."})," ",o?"This client source list is separate from the company Legends Library and other client folders.":"Company-standard sources remain shared defaults; project/client examples stay separate from them."]})]}),d.jsxs("div",{className:"local-library-extraction",children:[d.jsxs("div",{children:[d.jsxs("strong",{children:[d.jsx(ww,{size:14})," Extract drawing standards locally"]}),d.jsx("span",{children:"Package eligible DWG/DXF drawings with a Windows AutoCAD script. It exports only blocks actually inserted on approved equipment, instrument, or inline-component layers—unused internal definitions are skipped. Source drawings are not uploaded or changed."})]}),d.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>{Je()},disabled:!oe.length||ue,"data-testid":"button-download-cad-extractor",children:[ue?d.jsx(Ma,{size:13,className:"pdf-spin"}):d.jsx(Ms,{size:13}),ue?"Preparing…":"Download extractor kit"]})]}),oe.length>0&&d.jsxs("div",{className:"local-library-import",children:[d.jsxs("label",{children:[d.jsx("span",{children:"Import AutoCAD extraction"}),d.jsx("select",{value:le||oe[0].id,disabled:V||ge,onChange:$=>{we($.target.value),T(""),Q([])},"aria-label":"Source drawing for extracted CAD standards",children:oe.map($=>d.jsxs("option",{value:$.id,children:[$.label," · ",$.format??"DWG"," · ",U[$.id]?.pending??0," pending / ",U[$.id]?.approved??0," approved",$.projectLabel?` · ${$.projectLabel}`:""]},$.id))})]}),d.jsxs("label",{className:"btn subtle local-library-import-button",children:[ge?d.jsx(Ma,{size:13,className:"pdf-spin"}):d.jsx(Tr,{size:13}),ge?"Importing…":"Import extraction ZIP",d.jsx("input",{type:"file",accept:".zip,application/zip","aria-label":"Import AutoCAD extraction ZIP",disabled:ge||V,onChange:$=>{const ie=$.currentTarget.files?.[0];ie&&vt(ie),$.currentTarget.value=""}})]})]}),!o&&oe.some($=>$.category==="company-standard")&&d.jsxs("div",{className:"local-library-approval",children:[d.jsxs("div",{children:[d.jsx("strong",{children:"Approve supplied company symbols by placement layer"}),d.jsxs("span",{"data-testid":"status-selected-cad-source",children:[oe.find($=>$.id===le)?.label,": ",U[le]?.pending??0," pending symbols · ",U[le]?.approved??0," approved · ",U[le]?.dismissed??0," dismissed.",U[le]?.layers.length?` Approved placement layers: ${U[le].layers.join(", ")}.`:""]}),d.jsx("span",{children:"Saved DXF: this action first extracts individual native blocks locally, then approves eligible placement-layer mappings. Existing approvals, dismissed records and saved block files are not replaced. DWG: import its AutoCAD extraction ZIP first."}),d.jsx("span",{children:"Approves only the selected company source; repeat for each source. EQUIP/f_Equip → equipment, f_Inst → instruments, f_Pipe_Inline → inline components. Mappings are shared across PFD and P&ID; internal, ambiguous, and missing-asset items stay pending."})]}),d.jsxs("button",{className:"btn primary",type:"button",disabled:V||ge||!oe.some($=>$.id===le&&$.category==="company-standard"),onClick:()=>{ua()},"data-testid":"button-approve-categorized-company-symbols",children:[V?d.jsx(Ma,{size:13,className:"pdf-spin"}):d.jsx(Dr,{size:13}),V?"Extracting / approving locally…":"Approve selected source"]})]}),q&&d.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-library-error",children:[d.jsx(hs,{size:15}),d.jsx("span",{children:q})]}),j&&d.jsx("p",{className:"local-library-message",role:"status","aria-live":"polite","data-testid":"status-cad-source-action",children:j}),_.length>0&&d.jsxs("details",{className:"local-library-message",children:[d.jsxs("summary",{children:[_.length," excluded / review-required DXF items — show reasons"]}),d.jsx("ul",{children:_.map($=>d.jsxs("li",{children:[$.blockName,": ",$.reason]},$.blockName))})]}),d.jsxs("div",{className:"local-library-summary","aria-label":"Local library totals",children:[d.jsxs("span",{children:[d.jsx("strong",{children:G.length})," saved CAD sources",o?` for ${l||"this client"}`:` for ${s}`]}),d.jsxs("span",{children:[d.jsx("strong",{children:he["company-standard"]})," Legends Library sources"]}),d.jsxs("span",{children:[d.jsx("strong",{children:he["project-example"]+he["markup-reference"]})," reference drawings"]}),he["needs-review"]>0&&d.jsxs("span",{className:"local-library-review-count",children:[d.jsx("strong",{children:he["needs-review"]})," need review"]})]}),d.jsx(a2,{discipline:s}),P>0&&d.jsxs(ra,{href:s==="PFD"?"/standards-review/pfd":"/standards-review/pid",className:"btn primary local-library-review-link","data-testid":"link-review-extracted-standards",children:[d.jsx(fw,{size:15}),"Review extracted standards",d.jsx("span",{children:P})]}),be&&d.jsxs("div",{className:"pdf-validation",role:"alert","data-testid":"status-cad-source-folder-mismatch",children:[d.jsx(hs,{size:15}),d.jsx("span",{children:"These staged drawings belong to a different folder. Re-select that client or add them again here."})]}),E&&d.jsx("div",{className:"local-library-archive-summary",role:"status",children:E}),g.length>0&&d.jsxs("div",{className:"local-library-pdf-list","aria-label":"PDF files found in ZIP",children:[g.map($=>d.jsxs("div",{className:"local-library-pdf-row",children:[d.jsx(fs,{size:15}),d.jsx("span",{children:$.label}),d.jsx("span",{className:"pdf-file-meta",children:mu($.file.size)})]},$.id)),d.jsxs("button",{className:"btn subtle",type:"button",disabled:O,onClick:()=>{n(g.map(({file:$})=>$)),R(!0)},"data-testid":"button-add-archive-pdfs",children:[O?d.jsx(Dr,{size:14}):d.jsx(Tr,{size:14}),O?"PDFs added to queue":"Add PDF(s) to conversion queue"]})]}),y.length>0&&d.jsxs("div",{className:"local-library-staging",children:[d.jsxs("div",{className:"local-library-staging-title",children:[d.jsx("strong",{children:o?"Choose how each client CAD drawing will be used":"Choose what each CAD drawing is for"}),d.jsx("span",{children:"Unmarked files will not be saved."})]}),y.map($=>d.jsxs("label",{className:"local-library-source-row",children:[d.jsxs("span",{className:"local-library-source-name",children:[d.jsx("span",{className:"local-library-source-id",children:$.label}),d.jsxs("span",{className:"local-library-review-filename",title:$.reviewFilename,children:["Selected filename: ",$.reviewFilename]})]}),d.jsx("span",{className:"pdf-file-meta",children:mu($.bytes)}),d.jsxs("div",{className:"local-library-row-controls",children:[d.jsx("select",{"aria-label":`Category for ${$.label}`,value:$.category,onChange:ie=>{const fe=ie.target.value;h(B=>B.map(de=>de.id===$.id?{...de,category:fe}:de))},"data-testid":`select-category-${$.id}`,children:Object.entries(Mu).filter(([ie])=>o?["needs-review","project-example","markup-reference","ignore"].includes(ie):["needs-review","company-standard","ignore"].includes(ie)).map(([ie,fe])=>d.jsx("option",{value:ie,children:Fg(ie,o)},ie))}),d.jsx("select",{"aria-label":`Discipline for ${$.label}`,value:$.discipline,onChange:ie=>{const fe=ie.target.value;h(B=>B.map(de=>de.id===$.id?{...de,discipline:fe}:de))},"data-testid":`select-discipline-${$.id}`,children:["PFD","P&ID","Shared"].map(ie=>d.jsx("option",{value:ie,children:ie},ie))}),["project-example","markup-reference"].includes($.category)&&!o&&d.jsx("input",{"aria-label":`Project code for ${$.label}`,placeholder:"Neutral project code",value:$.projectLabel,onChange:ie=>h(fe=>fe.map(B=>B.id===$.id?{...B,projectLabel:ie.target.value}:B)),"data-testid":`input-project-${$.id}`}),o&&["project-example","markup-reference"].includes($.category)&&d.jsx("span",{className:"local-library-scope-tag",children:"Saved only in this client folder"})]})]},$.id)),d.jsxs("button",{className:"btn primary local-library-save",type:"button",disabled:N||be||y.some($=>$.category==="needs-review"||["project-example","markup-reference"].includes($.category)&&!$.projectLabel?.trim()),onClick:()=>{lt()},"data-testid":"button-save-local-library",children:[N?d.jsx(Ma,{size:14,className:"pdf-spin"}):d.jsx(Km,{size:14}),N?"Saving locally…":"Save reviewed sources locally"]})]}),G.length>0&&d.jsxs("details",{className:"local-library-saved-list",children:[d.jsxs("summary",{children:["Saved source drawings for ",s," (",G.length,")"]}),d.jsx("div",{className:"local-library-saved-items",children:G.map($=>d.jsxs("div",{className:"local-library-source-row",children:[d.jsxs("span",{className:"local-library-source-id",children:[$.label," · ",$.format??"DWG",o?` · ${$.category==="company-standard"?"Company standard":"This client"}`:$.projectLabel?` · ${$.projectLabel}`:""]}),d.jsx("span",{className:"pdf-file-meta",children:mu($.bytes)}),d.jsxs("div",{className:"local-library-row-controls",children:[d.jsx("select",{"aria-label":`Change category for ${$.label}`,value:(m[$.id]??$).category,disabled:!!(o&&$.category==="company-standard"),onChange:ie=>ft($,{category:ie.target.value}),"data-testid":`saved-category-${$.id}`,children:Object.entries(Mu).filter(([ie])=>!o||["project-example","markup-reference","ignore"].includes(ie)||$.category==="company-standard"&&ie==="company-standard").map(([ie,fe])=>d.jsx("option",{value:ie,children:Fg(ie,o)},ie))}),d.jsx("select",{"aria-label":`Change discipline for ${$.label}`,value:(m[$.id]??$).discipline,disabled:!!(o&&$.category==="company-standard"),onChange:ie=>ft($,{discipline:ie.target.value}),"data-testid":`saved-discipline-${$.id}`,children:["PFD","P&ID","Shared"].map(ie=>d.jsx("option",{value:ie,children:ie},ie))}),!o&&["project-example","markup-reference"].includes((m[$.id]??$).category)&&d.jsx("input",{"aria-label":`Neutral project code for ${$.label}`,placeholder:"Neutral project code",value:(m[$.id]??$).projectLabel??"",onChange:ie=>ft($,{projectLabel:ie.target.value}),"data-testid":`saved-project-${$.id}`}),d.jsxs("button",{className:"btn subtle local-library-save-row",type:"button",disabled:!!(o&&$.category==="company-standard"),onClick:()=>{jt($)},"data-testid":`button-save-source-${$.id}`,children:[d.jsx(Km,{size:12})," Save"]})]})]},$.id))})]}),d.jsx("p",{className:"local-library-limit",children:"Extracted records enter the standards review queue. Only approved mappings are offered to the matching PFD or P&ID runner. Original DWG/DXF sources stay local; only individually exported block files are included with approved mappings."})]})}const Yg={BLOCK:"symbol",LAYER:"layer",TEXT_STYLE:"textStyle",LINETYPE:"linetype",DIMENSION_STYLE:"dimensionStyle"},qu=100*1024*1024,Iu=500*1024*1024,s2="pid-studio-local-pdfs",an="meta",Is="bytes",Vo="extractedText";class Ht extends Error{code;constructor(s,o){super(o),this.code=s}}let xr=null,Vg=Promise.resolve();function $s(){return xr||(xr=new Promise((n,s)=>{if(typeof indexedDB>"u"){s(new Ht("storage","This browser does not allow local file storage."));return}const o=indexedDB.open(s2,2);o.onupgradeneeded=l=>{const i=o.result;l.oldVersion<1&&(i.createObjectStore(an,{keyPath:"id"}).createIndex("discipline","discipline"),i.createObjectStore(Is)),l.oldVersion<2&&i.createObjectStore(Vo)},o.onsuccess=()=>{o.result.onversionchange=()=>{o.result.close(),xr=null},n(o.result)},o.onerror=()=>{xr=null,s(new Ht("storage","Local storage could not be opened."))},o.onblocked=()=>{xr=null,s(new Ht("storage","Local file storage is busy in another tab. Close that tab and reload."))}})),xr}function tl(n){return new Promise((s,o)=>{n.onsuccess=()=>s(n.result),n.onerror=()=>o(n.error)})}function Ii(n){return new Promise((s,o)=>{n.oncomplete=()=>s(),n.onerror=()=>o(n.error),n.onabort=()=>o(n.error??new Ht("storage","Local storage write was stopped."))})}function Ui(n){const s=Vg.then(n,n);return Vg=s.catch(()=>{}),s}async function pb(n){const s=await $s();return(await tl(s.transaction(an).objectStore(an).index("discipline").getAll(n))).sort((l,i)=>l.aliasNumber-i.aliasNumber)}async function r2(){const n=await $s();return(await tl(n.transaction(an).objectStore(an).getAll())).reduce((o,l)=>o+l.size,0)}async function o2(n){const s=globalThis.crypto?.subtle;if(!s)throw new Error("hash-unsupported");const o=await s.digest("SHA-256",n);return Array.from(new Uint8Array(o)).map(l=>l.toString(16).padStart(2,"0")).join("")}function l2(n,s){return Ui(async()=>{if(!s())throw new Ht("cancelled","Cancelled.");const o=n.bytes.byteLength;if(o>qu)throw new Ht("too-large","This PDF is larger than 100 MB.");const i=(await $s()).transaction([an,Is],"readwrite"),p=Ii(i);p.catch(()=>{});const m=i.objectStore(an),u=await tl(m.getAll());if(!s())throw i.abort(),new Ht("cancelled","Cancelled.");if(u.some(v=>v.discipline===n.discipline&&v.hash===n.hash))throw i.abort(),new Ht("duplicate","This PDF has the same content as a saved file.");if(u.reduce((v,E)=>v+E.size,0)+o>Iu)throw i.abort(),new Ht("total-limit","Saved PDFs would pass the 500 MB total limit.");const h=u.filter(v=>v.discipline===n.discipline).reduce((v,E)=>Math.max(v,E.aliasNumber),0)+1,g={id:globalThis.crypto?.randomUUID?.()??`pdf-${Date.now()}-${Math.random().toString(36).slice(2)}`,discipline:n.discipline,aliasNumber:h,alias:`PDF ${h}`,size:o,pageCount:n.pageCount,hash:n.hash,addedAt:Date.now(),analysisStatus:"queued",analysisPagesDone:0,analysisRecordCount:0,autocadStatus:"not-connected"};m.put(g),i.objectStore(Is).put(n.bytes,g.id);try{await p}catch(v){throw v instanceof Ht?v:new Ht("storage","The browser could not save this PDF. Storage may be full.")}return g})}async function ko(n){const s=await $s(),o=await tl(s.transaction(Is).objectStore(Is).get(n));if(!o)throw new Ht("storage","Saved PDF data was not found.");return o}function i2(n,s){return Ui(async()=>{const l=(await $s()).transaction(Vo,"readwrite"),i=Ii(l);l.objectStore(Vo).put({pdfId:n,pages:s,savedAt:Date.now()},n);try{await i}catch{throw new Ht("storage","PDF text was read, but the browser could not save the full text index. The original PDF remains saved; free browser storage and retry EDE.")}})}function hi(n,s){return Ui(async()=>{const l=(await $s()).transaction(an,"readwrite"),i=Ii(l),p=l.objectStore(an),m=await tl(p.get(n));if(!m)throw l.abort(),new Ht("storage","The saved PDF record could not be found.");const u={...m,...s};return p.put(u),await i,u})}function hb(n){return Ui(async()=>{const o=(await $s()).transaction([an,Is,Vo],"readwrite");n.forEach(l=>{o.objectStore(an).delete(l),o.objectStore(Is).delete(l),o.objectStore(Vo).delete(l)}),await Ii(o)})}async function c2(n){const s=await pb(n);await hb(s.map(o=>o.id))}class vi extends Error{constructor(s,o,l){super(`Page ${s}: ${o} failed.`,{cause:l}),this.page=s,this.stage=o,this.name="PdfExtractionError"}page;stage}function Hg(n){const s=n instanceof vi?n.cause:n,o=s instanceof Error?s.name:"",l=s instanceof Error?s.message:typeof s=="string"?s:"",i=n instanceof vi?`Page ${n.page} stopped during ${n.stage}. `:"EDE extraction stopped. ";return o==="QuotaExceededError"?`${i}Browser storage is full. Back up your records before freeing space, then retry EDE. Your PDF remains saved.`:/memory|allocation|out of bounds/i.test(l)?`${i}The browser ran out of processing memory. Close other tabs and retry, or use a desktop browser. Your PDF remains saved.`:/fetch|network|importscripts|load.*(worker|core|language)|failed to load/i.test(l)||n instanceof vi&&n.stage==="OCR startup"?`${i}The OCR engine could not start. Check internet access to the OCR downloads, then retry EDE. Your PDF remains saved.`:`${i}The PDF could not be processed${o?` (${o.replace(/[^a-zA-Z0-9]/g,"").slice(0,60)})`:""}. Retry EDE; if it repeats, report this message. Your PDF remains saved.`}const d2=/\b(?:[A-Z]{1,8}\s*[-–]\s*)+\d{1,6}[A-Z0-9]*(?:\s*[-–]\s*[A-Z0-9]{1,8}){0,3}\b/g,u2=/^(?:AI|DI|FI|FIC|FIT|FQI|LI|LIC|LS|LSH|LSL|PI|PIC|PDI|PSH|PSL|TI|TIC|TSH|TSL|TT|PT|FT|LT|FC|PC|TC|LC|AT|AIT|XV|ZSO|ZSC)$/,f2=/^(?:XV|HV|BV|CV|PCV|FCV|LCV|TCV|PSV|PRV|MOV|SDV|BDV|NRV)$/,p2=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/g,h2=/\b(?:LINE|PIPING)\s+SPEC(?:IFICATION)?\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})\b/i;function mb(n,s,o,l,i,p,m){const u=Math.max(0,Math.min(1,l/s)),y=Math.max(0,Math.min(1,i/o)),h=Math.max(u,Math.min(1,p/s)),g=Math.max(y,Math.min(1,m/o));return h-u<1e-4||g-y<1e-4?null:{pageNumber:n,x:u,y,width:h-u,height:g-y}}function m2(n,s,o){const l=[o.convertToViewportPoint(n.x,n.y),o.convertToViewportPoint(n.x+n.width,n.y),o.convertToViewportPoint(n.x,n.y+n.height),o.convertToViewportPoint(n.x+n.width,n.y+n.height)];return mb(s,o.width,o.height,Math.min(...l.map(i=>i[0]??0)),Math.min(...l.map(i=>i[1]??0)),Math.max(...l.map(i=>i[0]??0)),Math.max(...l.map(i=>i[1]??0)))}function g2(n,s,o){const l=[];for(const i of n){if(!i.text||!i.bbox)continue;const p=mb(s,o.pageWidth,o.pageHeight,o.left+i.bbox.x0,o.top+i.bbox.y0,o.left+i.bbox.x1,o.top+i.bbox.y1);p&&l.push(...wi(i.text,s).map(m=>({...m,sourceLocations:[p]})))}return l}function y2(n,s){const o=new Map;for(const l of[...n??[],...s??[]]){const i=[l.pageNumber,l.x.toFixed(4),l.y.toFixed(4),l.width.toFixed(4),l.height.toFixed(4)].join(":");!o.has(i)&&o.size<500&&o.set(i,l)}return[...o.values()]}function b2(n){let s="",o;for(const l of n){const i=l.str.replace(/\s+/g," ").trim();if(i){if(o){const p=Math.max(1,(o.fontSize+l.fontSize)/2),m=Math.abs(l.y-o.y)<=Math.max(1,p*.3),u=l.x-(o.x+o.width),y=m&&u>=-p*.5&&u<=p*.35;s+=y?"":m?" ":`
`,o.hasEOL&&!s.endsWith(`
`)&&(s+=`
`)}s+=i,o=l}}return s}function Gg(n,s=1700,o=120){if(n<=s+o)return[0];const l=s-o,i=[];for(let p=0;p<n;p+=l){const m=n-(p+s);if(m>0&&m<=o&&(p=n-s),i.push(p),p+s>=n)break}return i}function wi(n,s){const o=new Map,l=n.toUpperCase();for(const i of l.matchAll(d2)){const p=i[0].replace(/[–\s]/g,"-").replace(/-+/g,"-").replace(/^-|-$/g,""),m=p.split("-").filter(Boolean),u=p.match(/^([A-Z]{1,8})-(\d{1,6})(.*)$/);if(!u||p.length<3||m.length>6)continue;const y=u[1],h=/^OPC$/.test(y)?"OPC":f2.test(y)?"Valve":u2.test(y)?"Instrument":m.length>=4||/^(?:L|LINE|PIPE)$/.test(y)?"Pipe Run":"Equipment",g=Math.max(0,(i.index??0)-180),v=Math.min(l.length,(i.index??0)+i[0].length+180),E=l.slice(g,v),S=E.match(/\b(?:NOMINAL\s*(?:DIA(?:METER)?|SIZE)|NPS|DN)\s*[:#=-]?\s*((?:(?:NPS|DN)\s*)?\d{1,3}(?:\s*\/\s*\d{1,2})?(?:\.\d+)?\s*(?:MM|IN(?:CH)?)?["”]?)/i)?.[1]??"",j=E.match(/\b(?:PIPING|PIPE)\s*(?:MATERIAL|MATL)\s*[:#=-]?\s*([A-Z0-9][A-Z0-9._/-]{1,15})/i)?.[1]??"",T=E.match(/\b(?:DESIGN\s+FLOW|FLOW(?:\s+RATE)?)\s*[:=]?\s*([\d.,]+\s*(?:KG\/H|M3\/H|NM3\/H|T\/H|L\/S|M3\/D|GPM|M\/S)?)/i)?.[1]??"",D=E.match(/\b(?:HEAT\s+TRACING|HEAT\s+TRACE)\s*[:=]?\s*(YES|NO|ELECTRIC|STEAM|NONE|N\/A)\b/i)?.[1]??"",w=E.match(/\bINSULATION\s*[:=]?\s*([A-Z0-9][A-Z0-9._/-]{0,12})/i)?.[1]??"",k=u[3].split("-").filter(Boolean).at(-1)??"",q=h==="Pipe Run"&&/[A-Z]/i.test(k)&&/\d/.test(k)?k:"",x=E.match(h2)?.[1]??q,O=`${h}:${p.toLowerCase()}`;o.has(O)||o.set(O,{tag:p,type:h,tagPrefix:y,tagSequence:u[2],tagSuffix:u[3].replace(/^-/,""),pageNumber:s,nominalDiameter:S.replace(/\s+/g," ").trim(),pipingMaterial:j,lineSpec:x,flow:T,heatTracing:D,insulation:w})}for(const i of l.matchAll(p2)){const p=i[1].replace(/\s+/g,"").toUpperCase(),m=`Line Spec:${p.toLowerCase()}`;o.has(m)||o.set(m,{tag:p,type:"Line Spec",tagPrefix:"LINE SPEC",tagSequence:p,tagSuffix:"",lineSpec:p,pageNumber:s})}return[...o.values()]}const v2=/^(?:(?:GENERAL|PROCESS|DESIGN|SAFETY|OPERATING|CONSTRUCTION)\s+)?NOTES?\s*[:.-]?\s*(.*)$/i,w2=/^(?:LEGENDS?|ABBREVIATIONS?|SYMBOLS?|REFERENCES?|REVISION(?:S)?|DRAWING\s+(?:TITLE|NO|NUMBER)|PROJECT|CLIENT|SCALE|TITLE\s*BLOCK|EQUIPMENT\s+LIST|LINE\s+LIST)\b/i,E2=/^(?:(?:NOTE\s*)?\d{1,3}\s*[.)-]\s+|[A-Z]\s*[.)]\s+).+/i,x2=/^(?:GENERAL\s+)?NOTE(?:\s+\d+)?\s*[:#-]\s*.+/i;function S2(n){const s=[];for(const o of n){const l=[{text:o.searchableText,label:"PDF text"},...o.ocrTiles.map(u=>({text:u,label:"OCR text"}))],i=new Set,p=[];for(const u of l){let y=!1,h="";const g=()=>{const v=h.replace(/\s+/g," ").trim();if(v.length>=8){const E=v.toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu," ").trim();E&&!i.has(E)&&(i.add(E),p.push({text:v,label:u.label}))}h=""};for(const v of u.text.replace(/\r/g,`
`).split(`
`)){const E=v.replace(/\s+/g," ").trim();if(!E)continue;const S=E.match(v2);if(S){g(),y=!0,S[1]&&(h=S[1].trim());continue}if(y&&w2.test(E)){g(),y=!1;continue}if(x2.test(E)){g(),h=E,y=!0;continue}if(E2.test(E)){const j=E.length>=36&&E.split(/\s+/).length>=7;y||j?(g(),h=E,y=!0):g();continue}y?h=h?`${h} ${E}`:E:g()}g()}let m=0;for(const u of p){const y=[];for(let h=0;h<u.text.length;){let g=Math.min(h+1500,u.text.length);if(g<u.text.length){const v=u.text.lastIndexOf(" ",g);v>h+700&&(g=v)}y.push(u.text.slice(h,g)),h=g}for(const h of y){const g=h.trim();g&&(m+=1,s.push({tag:`NOTE-P${o.pageNumber}-${m}`,type:"Item Note",tagPrefix:"NOTE",tagSequence:String(m),tagSuffix:`P${o.pageNumber}`,pageNumber:o.pageNumber,description:`${u.label} note — review against source: ${g}`}))}}}return s}function gu(n,s){const o=new Map(n.map(l=>[`${l.type}:${l.tag.toLowerCase()}`,{...l}]));for(const l of s){const i=`${l.type}:${l.tag.toLowerCase()}`,p=o.get(i);if(!p){o.set(i,{...l});continue}p.sourceLocations=y2(p.sourceLocations,l.sourceLocations);for(const m of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])!p[m]&&l[m]&&(p[m]=l[m])}return[...o.values()]}async function D2(n,s,o=()=>!0){const[l,i]=await Promise.all([Mn(()=>import("./pdf-TYrZqVzP.js"),[]),Mn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);l.GlobalWorkerOptions.workerSrc=i.default;const p=l.getDocument({data:new Uint8Array(n.slice(0))}),m=await p.promise;let u=null;const y=new Map,h=[];let g=0,v=1,E="PDF text";try{for(let S=1;S<=m.numPages;S++){if(v=S,E="PDF text",!o())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const j=await m.getPage(S),T=await j.getTextContent(),D=j.getViewport({scale:1}),w=T.items.flatMap(O=>{if(!("str"in O)||typeof O.str!="string"||!O.str||!("transform"in O)||!Array.isArray(O.transform))return[];const R=O.transform;return[{str:O.str,x:R[4]??0,y:R[5]??0,width:"width"in O&&typeof O.width=="number"?O.width:0,height:"height"in O&&typeof O.height=="number"?O.height:0,fontSize:Math.hypot(R[0]??0,R[1]??0)||10,hasEOL:"hasEOL"in O&&O.hasEOL===!0}]}),N=b2(w),k=[];let q=wi(N,S);const x=w.flatMap(O=>{const R=m2({...O,height:O.height||O.fontSize},S,D);return R?wi(O.str,S).map(P=>({...P,sourceLocations:[R]})):[]});if(q=gu(q,x),N.replace(/\s/g,"").length<800||q.length<20){if(s?.(S,m.numPages,"OCR"),!u){E="OCR startup";const{createWorker:le,PSM:we}=await Mn(async()=>{const{createWorker:ge,PSM:ce}=await import("./index-BOvmIbEa.js").then(V=>V.i);return{createWorker:ge,PSM:ce}},__vite__mapDeps([0,1]));u=await le("eng",1,{workerPath:"https://cdn.jsdelivr.net/npm/tesseract.js@7.0.0/dist/worker.min.js",corePath:"https://cdn.jsdelivr.net/npm/tesseract.js-core@7.0.0",langPath:"https://tessdata.projectnaptha.com/4.0.0"}),await u.setParameters({tessedit_pageseg_mode:we.SPARSE_TEXT,preserve_interword_spaces:"1"})}const O=j.getViewport({scale:1});E="page image";const R=Math.min(3.5,3200/Math.max(O.width,O.height)),P=j.getViewport({scale:R}),K=document.createElement("canvas"),ue=document.createElement("canvas");K.width=Math.ceil(P.width),K.height=Math.ceil(P.height);const ne=K.getContext("2d",{willReadFrequently:!1});if(!ne)throw new Error("This browser cannot prepare a page image for local OCR.");try{await j.render({canvas:K,canvasContext:ne,viewport:P}).promise;const le=1700,we=120,ge=[],ce=Gg(K.width,le,we),V=Gg(K.height,le,we);for(const re of V)for(const ye of ce){if(!o())throw new Error("Processing paused. Resume EDE extraction from the saved PDF.");const Ae=Math.min(K.width<=le+we?K.width:le,K.width-ye),_=Math.min(K.height<=le+we?K.height:le,K.height-re);ue.width=Ae,ue.height=_;const Q=ue.getContext("2d",{willReadFrequently:!1});if(!Q)throw new Error("This browser cannot prepare a page image for local OCR.");Q.drawImage(K,ye,re,Ae,_,0,0,Ae,_),E="OCR reading";const U=await u.recognize(ue);k.push(U.data.text),ge.push(...wi(U.data.text,S)),ge.push(...g2(U.data.words??[],S,{left:ye,top:re,pageWidth:K.width,pageHeight:K.height}))}g+=1,q=gu(q,ge)}finally{K.width=0,K.height=0,ue.width=0,ue.height=0}}else s?.(S,m.numPages,"PDF text");for(const O of q){const R=`${O.type}:${O.tag.toLowerCase()}`,P=y.get(R);y.set(R,P?gu([P],[O])[0]:O)}h.push({pageNumber:S,searchableText:N,ocrTiles:k}),j.cleanup()}return{candidates:[...y.values()],pages:m.numPages,ocrPages:g,pageText:h}}catch(S){throw o()?new vi(v,E,S):S}finally{await u?.terminate().catch(()=>{}),await p.destroy().catch(()=>{})}}const gb=["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef","placementDrawingRef","nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description","notes","sourcePage","reviewStatus"],Pn=[...gb,"stableId"],yb=/^[0-9A-F]{32}$/,A2=/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/i,T2=["plantGroup","fluidService","nominalDiameter","pipingMaterial","lineSpec","insulation","heatTracing","groupStatus"],C2=["","Start","Continue","Branch","Merge","End-of-Group"];function bb(){return crypto.randomUUID().replaceAll("-","").toUpperCase()}function tf(n){const s=n.toUpperCase();if(yb.test(s))return s;if(A2.test(n))return s.replaceAll("-","");throw new Error("A Stable ID must contain exactly 32 letters or numbers (A–F, 0–9).")}function hn(n,s){return s==="stableId"?n.id:n[s]}function N2(n,s){const o=n.placementDrawingRef.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase();return o?[s.id,s.name].map(i=>i.trim().normalize("NFKC").replace(/\s+/g," ").toLocaleLowerCase()).includes(o)?"current":"another":"available"}const bt={itemTag:"Item Tag",tagPrefix:"Tag Prefix",tagSequence:"Tag Sequence",tagSuffix:"Tag Suffix",equipmentClass:"Equipment Class",equipmentType:"Equipment Type",equipmentName:"Equipment Name",drawingRef:"Source Drawing / Page",placementDrawingRef:"Placed on Drawing",nominalDiameter:"Nominal Diameter",plantGroup:"Plant Group",fluidService:"Fluid / Service",pipingMaterial:"Piping Material Class",lineSpec:"Line Spec",flow:"Flow",flowDirection:"Flow Direction",heatTracing:"Heat Tracing",insulation:"Insulation",fromTag:"From",toTag:"To",groupStatus:"Group Status",opcDrawing:"OPC Drawing",connection:"Connection",description:"Description",notes:"Notes",sourcePage:"Source page",reviewStatus:"Review status",stableId:"Stable ID"},Ci=gb,Sr={itemTag:"The tag printed beside the equipment, line, valve, or instrument. A repeated Pipe Run tag needs different line data.",tagPrefix:"The letter code at the start of the tag.",tagSequence:"The main number in the tag.",tagSuffix:"Extra letters or numbers after the main tag number.",equipmentClass:"The approved class or family for this equipment.",equipmentType:"What the equipment is, such as a pump or vessel, when the drawing states it.",equipmentName:"The equipment name or service, only when the source clearly labels it.",drawingRef:"The source drawing or PDF page where this record came from.",placementDrawingRef:"The CAD drawing that contains this object. Blank means available or not placed. This is a reference only; it does not place or move CAD entities.",nominalDiameter:"The stated pipe or nozzle size, such as DN50 or 2 inch.",plantGroup:"The plant, unit, or area group, if stated.",fluidService:"The stated fluid or process service for this line.",pipingMaterial:"The approved piping material class or code.",lineSpec:"The piping line class/specification code. It is separate from the pipe run tag.",flow:"The stated flow value or direction. A line arrow alone is not converted to a value.",flowDirection:"The confirmed upstream/downstream flow direction.",heatTracing:"The stated heat-tracing requirement or type.",insulation:"The stated insulation requirement or code.",fromTag:"The connected source tag or point shown for this pipe run.",toTag:"The connected destination tag or point shown for this pipe run.",groupStatus:"Start, Continue, Branch, Merge, or End-of-Group for the pipe run.",opcDrawing:"The linked off-page connector drawing number, if shown.",connection:"A stated connection or connected item; line geometry is not inferred here.",description:"A short object description from the source. Blank means no clear value was found.",notes:"Drawing notes or additional comments associated with this record.",sourcePage:"The page in the original PDF where this candidate was found.",reviewStatus:"Needs review means check the tag and fields before using them.",stableId:"Permanent object identity. It stays the same when the tag, drawing, size, or geometry changes."},Ho=["Equipment","Equipment Component","Equipment Heat Transfer","Equipment Mechanical","Equipment Other","Equipment Vessel","Hydraulic Circuit","Instrument","Instrument Loop","Item Note","Line Spec","Nozzle","OPC","Package","Pipe Run","Valve"],Ni=n=>`pid-mapping-studio:engineering-workspace:v2:${n}`;function vb(n,s){if(!Array.isArray(n))return Uu(n);const o=n.map(l=>!l||typeof l!="object"||!Array.isArray(l.rows)?l:{...l,rows:l.rows.map(i=>{if(!i||typeof i!="object")return i;const p=typeof i.id=="string"?i.id:"";let m;try{m=tf(p)}catch{m=bb()}m!==i.id&&s?.();const u=typeof i.description=="string"?i.description:"",y=typeof i.notes=="string",h=/^(?:PDF text|OCR text) note — review against source:\s*/iu,g=y?i.notes:i.type==="Item Note"?u.replace(h,""):"",v=!y&&i.type==="Item Note"&&u?h.test(u)?"Drawing note extracted from PDF; check the source page.":"":u;return(!y||v!==u)&&s?.(),{...i,id:m,description:v,notes:g,sourcePage:typeof i.sourcePage=="string"?i.sourcePage:"",placementDrawingRef:typeof i.placementDrawingRef=="string"?i.placementDrawingRef:"",lineSpec:typeof i.lineSpec=="string"?i.lineSpec:"",plantGroup:typeof i.plantGroup=="string"?i.plantGroup:"",fluidService:typeof i.fluidService=="string"?i.fluidService:"",flowDirection:typeof i.flowDirection=="string"?i.flowDirection:"",fromTag:typeof i.fromTag=="string"?i.fromTag:"",toTag:typeof i.toTag=="string"?i.toTag:"",groupStatus:typeof i.groupStatus=="string"?i.groupStatus:"",...i.sourceLocations===void 0?{}:{sourceLocations:i.sourceLocations},reviewStatus:i.reviewStatus==="Needs review"||i.reviewStatus==="Reviewed"?i.reviewStatus:"Manual"}})});return Uu(o)}function Uu(n){if(!Array.isArray(n)||n.length>500)throw new Error("Invalid drawing catalog. Keep a backup and do not overwrite saved data.");const s=new Set,o=new Set;let l=0;for(const i of n){if(!i||typeof i!="object"||typeof i.id!="string"||typeof i.name!="string"||!i.name.trim()||i.name.length>160||typeof i.revision!="string"||i.revision.length>80||!Array.isArray(i.rows)||s.has(i.id))throw new Error("The drawing catalog contains an invalid or duplicate drawing.");s.add(i.id);const p=new Map;for(const m of i.rows){if(m?.type==="Pipe Run"&&!C2.includes(m.groupStatus))throw new Error("Pipe Run group status must be Start, Continue, Branch, Merge, or End-of-Group.");if(!m||typeof m!="object"||typeof m.id!="string"||!yb.test(m.id)||o.has(m.id)||!Ho.includes(m.type)||Ci.some(h=>typeof m[h]!="string"||m[h].length>2e3)||!["Manual","Needs review","Reviewed"].includes(m.reviewStatus)||m.sourcePdfId!==void 0&&typeof m.sourcePdfId!="string"||m.sourceLocations!==void 0&&(!Array.isArray(m.sourceLocations)||m.sourceLocations.length>500||m.sourceLocations.some(h=>{if(!h||typeof h!="object")return!0;const g=h;return!Number.isInteger(g.pageNumber)||g.pageNumber<1||!["x","y","width","height"].every(v=>typeof g[v]=="number"&&Number.isFinite(g[v]))||g.x<0||g.y<0||g.width<=0||g.height<=0||g.x>1||g.y>1||g.x+g.width>1.02||g.y+g.height>1.02}))||!m.itemTag.trim())throw new Error("Each record needs a valid Stable ID, object type, and text fields.");const u=m.itemTag.trim().toLowerCase(),y=p.get(u)??[];if(y.length&&(m.type!=="Pipe Run"||y.some(h=>h.type!=="Pipe Run"||!T2.some(g=>h[g]!==m[g]))))throw new Error("This tag is already used. Repeated Pipe Run tags need different line-defining data.");if(typeof m.x!="number"||typeof m.y!="number"||!Number.isFinite(m.x)||!Number.isFinite(m.y))throw new Error("A record contains invalid coordinates.");p.set(u,[...y,m]),o.add(m.id),l+=1}}if(l>2e4)throw new Error("This local workspace supports up to 20,000 engineering records.");return n}function Go(n){const s=window.localStorage.getItem(Ni(n));if(!s)return[];let o=!1;const l=vb(JSON.parse(s),()=>{o=!0});if(o)try{window.localStorage.setItem(Ni(n),JSON.stringify(l))}catch{throw new Error("Saved records were read, but the data-format update could not be saved because browser storage is full. The original saved data was not overwritten; download a backup before freeing space.")}return l}function Cr(n){return window.localStorage.getItem(Ni(n))}function $u(n,s,o){if(Uu(s),Cr(n)!==o)throw new Error("This workspace changed in another tab. Reload before editing to avoid overwriting its records.");const l=JSON.stringify(s);return window.localStorage.setItem(Ni(n),l),l}function af(n,s,o){return{...Object.fromEntries(Ci.map(l=>[l,""])),id:bb(),type:n,itemTag:s.trim(),drawingRef:o,reviewStatus:"Manual",x:0,y:0}}function k2(n,s){return JSON.stringify({version:5,discipline:n,drawings:s},null,2)}function j2(n,s){const o=JSON.parse(n);if(![2,3,4,5].includes(o?.version)||o?.discipline!==s)throw new Error(`Choose a ${s.toUpperCase()} workspace backup. PFD and P&ID backups stay separate.`);return vb(o.drawings)}function R2(n,s){const o=new Map;for(const l of[...n??[],...s??[]]){const i=[l.pageNumber,l.x.toFixed(4),l.y.toFixed(4),l.width.toFixed(4),l.height.toFixed(4)].join(":");!o.has(i)&&o.size<500&&o.set(i,l)}return[...o.values()]}function Xg(n,s){const o=af(n.type,n.tag,`${s.alias} · Page ${n.pageNumber}`);o.tagPrefix=n.tagPrefix??"",o.tagSequence=n.tagSequence??"",o.tagSuffix=n.tagSuffix??"";for(const l of["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","equipmentType","equipmentName","equipmentClass","opcDrawing","connection"])o[l]=n[l]??"";return o.sourcePage=String(n.pageNumber),o.sourcePdfId=s.id,o.sourceLocations=n.sourceLocations?.slice(0,500),o.reviewStatus="Needs review",n.type==="Item Note"?(o.notes=(n.description??"").replace(/^(?:PDF text|OCR text) note — review against source:\s*/iu,""),o.description="Drawing note extracted from PDF; check the source page."):o.description=n.description??"Tag candidate found in the PDF. Confirm the object type and details before using it.",o}function L2(n,s,o){const l=Go(n),i=l.find(S=>S.sourcePdfId===s.id);if(i){const S=new Map(o.map(N=>[N.tag.trim().toLowerCase(),N])),j=new Set(i.rows.map(N=>N.itemTag.trim().toLowerCase()));let T=!1;const D=i.rows.map(N=>{const k=S.get(N.itemTag.trim().toLowerCase());if(!k)return N;const q=R2(N.sourceLocations,k.sourceLocations),x=N.sourcePage||String(k.pageNumber);return q.length===(N.sourceLocations?.length??0)&&x===N.sourcePage?N:(T=!0,{...N,sourcePage:x,sourceLocations:q})}),w=o.flatMap(N=>{const k=N.tag.trim().toLowerCase();return!k||j.has(k)?[]:(j.add(k),T=!0,[Xg(N,s)])});if(T){const N=l.map(k=>k.id===i.id?{...k,rows:[...D,...w]}:k);$u(n,N,Cr(n))}return{drawingId:i.id,recordCount:D.length+w.length}}const p=new Set(l.map(S=>S.name.toLowerCase())),m=`${s.alias} · Extracted data`;let u=m,y=2;for(;p.has(u.toLowerCase());)u=`${m} (${y++})`;const h=new Set,g=o.flatMap(S=>{const j=S.tag.trim().toLowerCase();return!j||h.has(j)?[]:(h.add(j),[Xg(S,s)])}),v={id:crypto.randomUUID(),name:u,revision:"Local PDF extraction · review required",sourcePdfId:s.id,sourceAlias:s.alias,rows:g},E=Cr(n);return $u(n,[...l,v],E),{drawingId:v.id,recordCount:g.length}}function mi(n,s,o){const l=URL.createObjectURL(new Blob([s],{type:o})),i=document.createElement("a");i.href=l,i.download=n,i.click(),setTimeout(()=>URL.revokeObjectURL(l),1e3)}function O2(n){return wb(["Object type",...Pn.map(s=>bt[s])],n.map(s=>[s.type,...Pn.map(o=>hn(s,o))]))}function wb(n,s){const o=l=>`"${(/^[\s]*[=+\-@\t\r]/.test(l)?`'${l}`:l).replaceAll('"','""')}"`;return"\uFEFF"+[n,...s].map(l=>l.map(i=>o(String(i))).join(",")).join(`\r
`)}function _2(n,s){const o=[];let l=[],i="",p=!1;const m=n.replace(/^\uFEFF/,"");for(let E=0;E<m.length;E++){const S=m[E];if(S==='"')if(p&&m[E+1]==='"')i+='"',E++;else{if(!p&&i!=="")throw new Error("Invalid CSV quoting.");p=!p}else!p&&S===","?(l.push(i),i=""):!p&&(S===`
`||S==="\r")?(l.push(i),l.some(j=>j.trim())&&o.push(l),l=[],i="",S==="\r"&&m[E+1]===`
`&&E++):i+=S}if(p)throw new Error("The CSV has an unclosed quoted cell.");l.push(i),l.some(E=>E.trim())&&o.push(l);const u=o.shift()?.map(E=>E.trim().toLowerCase())??[],y=u.findIndex(E=>E==="object type"||E==="type"),h=Ci.map(E=>u.findIndex(S=>S===E.toLowerCase()||S===bt[E].toLowerCase())),g=u.findIndex(E=>E==="stableid"||E===bt.stableId.toLowerCase());if(y<0||h[0]<0)throw new Error("CSV needs Object type and Item Tag columns. Download the template first.");if(!o.length)throw new Error("The CSV contains no records.");if(o.length>2e4)throw new Error("Import at most 20,000 records.");const v=new Set;return o.map((E,S)=>{if(E.length!==u.length)throw new Error(`CSV row ${S+2} has the wrong number of columns.`);const j=Ho.find(D=>D.toLowerCase()===E[y]?.trim().toLowerCase());if(!j)throw new Error(`CSV row ${S+2} has an unsupported object type.`);const T=af(j,E[h[0]]??"",s);if(g>=0&&E[g]?.trim())try{T.id=tf(E[g].trim())}catch{throw new Error(`CSV row ${S+2} has an invalid Stable ID.`)}if(v.has(T.id))throw new Error(`CSV row ${S+2} repeats a Stable ID.`);return v.add(T.id),Ci.forEach((D,w)=>{if(h[w]<0)return;const N=E[h[w]].trim();D==="reviewStatus"?T.reviewStatus=["Needs review","Reviewed","Manual"].includes(N)?N:"Manual":T[D]=N}),T.drawingRef||(T.drawingRef=s),T})}function P2(n,s=!1,o=""){const l=n.map((i,p)=>`(${p+1} ${i})`).join(" ");return`; Single working drawing PDF batch runner.
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
`}function M2(n,s){const o=String(n).padStart(2,"0"),l=`p2dwg${o}`;return`
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
      (${l}-review-text importedEntities)
      (setq *p2dwg-stage* "PIPE_RUN_REVIEW")
      (setq pipeConfirmed (${l}-tag-pipe-runs importedEntities))
      (setq *p2dwg-stage* "SYMBOL_REVIEW")
      (setq reviewConfirmed
        (if pipeConfirmed (${l}-review-unsupported importedEntities) nil))
      (if reviewConfirmed
        (progn
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
            (list '((${n} ${s})) pdfPath)))
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
`}const q2=[["EQUIP","f_Equip"],["EQUIP_INT","f_Equip_Int"],["INST","f_Inst"],["PIPE_INLINE","f_Pipe_Inline"],["PIPE_PRI","f_Pipe_Pri"],["PIPE_SEC","f_Pipe_Sec"],["MISC","f_Misc"],["TEXT","f_gen_Text"]];function I2(n){const s=new Map(n.map(o=>[o.trim().toUpperCase(),o.trim()]));return q2.flatMap(([o,l])=>{if(s.has(o.toUpperCase()))return[];const i=s.get(l.toUpperCase());return i?[[o,i]]:[]})}function Kg(n){return`"${n.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function U2(n,s){const o=s.map(([l,i])=>`(${Kg(l.toUpperCase())} . ${Kg(i)})`).join(`
    `);return`
(setq *${n}-pdf-layer-aliases* '(
    ${o}
))

(defun ${n}-approved-layer (name)
  (car
    (vl-remove-if-not
      '(lambda (entry) (= (strcase (car entry)) (strcase name)))
      *p2dwg-approved-layers*
    )
  )
)

(defun ${n}-valid-layer-name-p (name / forbidden character)
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

(defun ${n}-pdf-layer-target (source / suffix approved alias)
  (if (and
        (>= (strlen source) 4)
        (= (strcase (substr source 1 4)) "PDF_")
      )
    (progn
      (setq suffix (substr source 5))
      (setq approved (${n}-approved-layer suffix))
      (if approved
        (car approved)
        (progn
          (setq alias (assoc (strcase suffix) *${n}-pdf-layer-aliases*))
          (if alias
            (progn
              (setq approved (${n}-approved-layer (cdr alias)))
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

(defun ${n}-set-imported-layer-and-bylayer (selection source target / index entity data layer-name updated changed)
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
        (setq updated (${n}-put-group 8 target updated))
        (setq updated (${n}-put-group 62 256 updated))
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

(defun ${n}-pdf-layer-sources (selection / index entity data name result)
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

(defun ${n}-preserve-pdf-source-layer (selection source target / source-record target-record updated color linetype weight count)
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
      (if color (setq updated (${n}-put-group 62 (abs color) updated)))
      (if linetype (setq updated (${n}-put-group 6 linetype updated)))
      (if weight (setq updated (${n}-put-group 370 weight updated)))
      (if (not (entmod updated))
        (p2dwg-raise (strcat "Could not apply approved appearance to source layer " source ".")))
      (setq count (${n}-set-imported-layer-and-bylayer selection source source))
      (list count "SOURCE_PRESERVED")
    )
    nil
  )
)

(defun ${n}-normalize-pdf-import-layers (selection / sources source target count mode preserved)
  (setq sources (${n}-pdf-layer-sources selection))
  (foreach source sources
    (setq count 0)
    (setq target (${n}-pdf-layer-target source))
    (if (and target (${n}-valid-layer-name-p target))
      (progn
        (setq preserved (${n}-preserve-pdf-source-layer selection source target))
        (if preserved
          (progn
            (setq count (car preserved))
            (setq mode (cadr preserved))
          )
          (progn
            (setq count (${n}-set-imported-layer-and-bylayer selection source source))
            (setq mode "SOURCE_PRESERVED_STYLE_UNAVAILABLE")
          )
        )
        (${n}-batch-log
          (strcat "PDF_SOURCE_LAYER_PRESERVED|" source "|" target "|MODE=" mode
            "|ENTITIES=" (itoa (if count count 0)))
        )
      )
      (progn
        (setq count (${n}-set-imported-layer-and-bylayer selection source source))
        (${n}-batch-log
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
`}const $2=["RAW","CANDIDATE","MATCHED","CONFIRMED","UNMATCHED","NEEDS_REVIEW"];function B2(n){return`
(defun ${n}-supported-geometry-type-p (entity-type)
  (member entity-type '("LINE" "ARC" "CIRCLE" "LWPOLYLINE" "POLYLINE" "ELLIPSE" "SPLINE"))
)

(defun ${n}-polyline-vertex-data (entity / vertex data result)
  (setq vertex (entnext entity) result nil)
  (while (and vertex (setq data (entget vertex))
              (/= (strcase (cdr (assoc 0 data))) "SEQEND"))
    (if (= (strcase (cdr (assoc 0 data))) "VERTEX")
      (setq result
        (append result
          (list
            (${n}-geometry-properties data)
          )
        )
      )
    )
    (setq vertex (entnext vertex))
  )
  result
)

(defun ${n}-source-selection-p (selection imported / index entity data valid)
  (setq index 0 valid T)
  (while (and valid (< index (sslength selection)))
    (setq entity (ssname selection index) data (entget entity))
    (if (or (null data) (not (ssmemb entity imported))
            (/= 0 (logand 4 (cdr (assoc 70 (tblsearch "LAYER" (cdr (assoc 8 data))))))))
      (setq valid nil))
    (setq index (1+ index)))
  valid)

(defun ${n}-geometry-value-p (value / valid component)
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

(defun ${n}-geometry-properties (data / result pair)
  (setq result nil)
  (foreach pair data
    (if (and
          (member (car pair) '(10 11 12 13 30 31 39 40 41 42 43 44 45 46 47 48 49
                               50 51 70 71 72 73 74 90 91 92 93 94 95 96 97 98 99
                               210 220 230))
          (${n}-geometry-value-p (cdr pair)))
      (setq result (append result (list pair))))
  )
  result
)

(defun ${n}-normalized-geometry (entity data bounds / entity-type properties)
  (setq entity-type (strcase (cdr (assoc 0 data))))
  (setq properties (${n}-geometry-properties data))
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
        (${n}-polyline-vertex-data entity)
        nil))
  )
)

(defun ${n}-geometry-span (bounds)
  (if bounds
    (max (- (nth 2 bounds) (nth 0 bounds))
         (- (nth 3 bounds) (nth 1 bounds)))
    0.0)
)

(defun ${n}-geometry-box-gap (left right / dx dy)
  (setq dx (max 0.0 (- (nth 0 right) (nth 2 left)) (- (nth 0 left) (nth 2 right))))
  (setq dy (max 0.0 (- (nth 1 right) (nth 3 left)) (- (nth 1 left) (nth 3 right))))
  (sqrt (+ (* dx dx) (* dy dy)))
)

(defun ${n}-record-carrier-p (record seed-span page-span / entity-type span)
  (setq entity-type (nth 2 record))
  (setq span (${n}-geometry-span (nth 3 record)))
  (and
    (member entity-type '("LINE" "LWPOLYLINE" "POLYLINE"))
    (> span (max (* seed-span 2.5) (* page-span 0.025)))
  )
)

(defun ${n}-union-record-bounds (records / record bounds result)
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

(defun ${n}-record-handles (records / result record)
  (setq result nil)
  (foreach record records (setq result (cons (nth 1 record) result)))
  (vl-sort result '<)
)

(defun ${n}-candidate-groups (records page-bounds log-handle /
                                    page-span page-width page-height seed seed-type
                                    seed-bounds seed-span radius compact closed-seed
                                    members stubs record signature signatures
                                    member-handles stub-handles group-bounds anchor
                                    type-counts type-name candidate-index candidate-id
                                    record-type)
  (if (not page-bounds)
    0
    (progn
      (setq page-span (${n}-geometry-span page-bounds))
      (setq page-width (- (nth 2 page-bounds) (nth 0 page-bounds)))
      (setq page-height (- (nth 3 page-bounds) (nth 1 page-bounds)))
      (setq signatures nil candidate-index 0)
      (foreach seed records
        (setq seed-type (nth 2 seed))
        (setq seed-bounds (nth 3 seed))
        (setq seed-span (${n}-geometry-span seed-bounds))
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
              (if (<= (${n}-geometry-box-gap seed-bounds (nth 3 record)) radius)
                (if (${n}-record-carrier-p record seed-span page-span)
                  (setq stubs (cons record stubs))
                  (setq members (cons record members))
                )
              )
            )
            (setq member-handles (${n}-record-handles members))
            (setq stub-handles (${n}-record-handles stubs))
            (setq signature (vl-princ-to-string member-handles))
            (setq group-bounds (${n}-union-record-bounds members))
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

(defun ${n}-review-approved-blocks (imported / handle index entity data entity-type
                                                  bounds properties log-handle descriptor active-imported
                                                  geometry-records page-bounds candidate-count)
  (setq active-imported (ssadd) index 0)
  (while (< index (sslength imported))
    (setq entity (ssname imported index))
    (setq data (entget entity))
    (if (and data (cdr (assoc 5 data)) (cdr (assoc 0 data)))
      (ssadd entity active-imported))
    (setq index (1+ index)))
  (${n}-batch-log
    (strcat "WHOLE_PAGE_GEOMETRY_SCAN_STARTED|" *p2dwg-source-alias* "|"
      (itoa *p2dwg-source-page*) "|ENTITIES=" (itoa (sslength active-imported))
      "|AUTO_MATCH=GATED"))
  (if (not *p2dwg-geometry-scan-path*)
    (p2dwg-raise "Geometry scan output path is unavailable; page not saved."))
  (${n}-record-mapping active-imported "NEEDS_REVIEW" "AUTO-GROUPING-GATE" nil)
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
  (setq page-bounds (${n}-selection-bounds active-imported))
  (while (< index (sslength active-imported))
    (setq entity (ssname active-imported index))
    (setq data (entget entity))
    (setq handle (cdr (assoc 5 data)))
    (setq entity-type (cdr (assoc 0 data)))
    (if (or (null handle) (null entity-type))
      (progn
        (close log-handle)
        (p2dwg-raise "An imported entity has no stable handle/type; page not saved.")))
    (setq bounds (${n}-selection-bounds (ssadd entity)))
    (setq properties (${n}-geometry-properties data))
    (setq descriptor (${n}-normalized-geometry entity data bounds))
    (if (and bounds (${n}-supported-geometry-type-p entity-type))
      (setq geometry-records
        (cons (list entity handle entity-type bounds properties descriptor) geometry-records)))
    ; Text contents, layers and color are excluded from normalized geometry and grouping.
    (write-line
      (strcat "ENTITY|" *p2dwg-source-alias* "|" (itoa *p2dwg-source-page*)
        "|" handle "|" entity-type "|NORMALIZED=" (vl-princ-to-string descriptor))
      log-handle)
    (setq index (1+ index)))
  (setq candidate-count
    (${n}-candidate-groups (reverse geometry-records) page-bounds log-handle))
  (close log-handle)
  (prompt
    (strcat
      "\\nWhole-page geometry inventory complete for " (itoa (sslength active-imported))
      " imported entities; " (itoa candidate-count)
      " non-destructive geometry candidate group(s) logged. Matching and replacement remain disabled."))
  (${n}-batch-log
    (strcat "WHOLE_PAGE_GEOMETRY_SCAN_COMPLETED|" *p2dwg-source-alias* "|"
      (itoa *p2dwg-source-page*) "|STATUS=CANDIDATES_REVIEW_REQUIRED|CANDIDATES="
      (itoa candidate-count) "|AUTO_MATCH=GATED"))
  T)
`}function F2(n){return`
(defun ${n}-strip-text-overrides (text / index size char next finish output)
  (setq index 1 size (strlen text) output "")
  (while (<= index size)
    (setq char (substr text index 1) next (substr text (1+ index) 1))
    (cond
      ((and (= char "\\\\") (= next "\\\\"))
        (setq output (strcat output char next) index (+ index 2)))
      ((and (= char "\\\\") (member next '("f" "F" "h" "H" "w" "W" "q" "Q" "c" "C")))
        (setq finish (vl-string-search ";" text (1+ index)))
        (if (null finish) (p2dwg-raise "Malformed MTEXT formatting. No automatic text repair was attempted."))
        (setq index (+ finish 2)))
      (T (setq output (strcat output char) index (1+ index)))))
  output)

(defun ${n}-format-text (entity style height target-layer / data kind content parts changed pair)
  (setq data (entget entity) kind (cdr (assoc 0 data)))
  (setq data (${n}-put-group 7 (car style) data))
  (setq data (${n}-put-group 40 height data))
  (setq data (${n}-put-group 8 target-layer data))
  (setq data (vl-remove-if '(lambda (pair) (member (car pair) '(420 430))) data))
  (setq data (${n}-put-group 62 256 data))
  (setq data (${n}-put-group 6 "BYLAYER" data))
  (setq data (${n}-put-group 370 -1 data))
  (if (= kind "TEXT")
    (progn
      (if (member (cdr (assoc 72 data)) '(3 5))
        (p2dwg-raise "Aligned/Fit TEXT needs manual alignment review; approved width was not silently changed."))
      (setq data (${n}-put-group 41 (nth 2 style) data))
      (setq data (${n}-put-group 51 (nth 3 style) data)))
    (progn
      (setq content "")
      (foreach pair data (if (= (car pair) 3) (setq content (strcat content (cdr pair)))))
      (setq content (${n}-strip-text-overrides (strcat content (cdr (assoc 1 data)))))
      ; MTEXT can ignore STYLE width/oblique. Apply the approved values explicitly.
      (setq content (strcat "\\\\W" (rtos (nth 2 style) 2 8)
        ";\\\\Q" (rtos (* (nth 3 style) (/ 180.0 pi)) 2 8) ";" content))
      (setq data (vl-remove-if '(lambda (pair) (member (car pair) '(1 3))) data))
      (setq parts nil)
      (while (> (strlen content) 250)
        (setq parts (append parts (list (cons 3 (substr content 1 250)))))
        (setq content (substr content 251)))
      (setq data (append data parts (list (cons 1 content))))))
  (setq changed (entmod data))
  (if changed (entupd entity))
  (and changed (= (cdr (assoc 7 (entget entity))) (car style))))

(defun ${n}-review-text (imported / selection index entity kind choice style height count skipped layer-choice target-layer entry)
  (if (null *p2dwg-approved-text-styles*)
    (progn
      (${n}-batch-log "TEXT_STYLES_UNAVAILABLE")
      (prompt "\\nNo approved text styles for this discipline/project. PDF text formatting has NOT been standardized."))
    (progn
      (prompt "\\nApply approved text formats by role: select one group of notes, tags, or headings at a time. Enter finishes.")
      (setq selection (ssget))
      (while selection
        (if (not (${n}-source-selection-p selection imported))
          (prompt "\\nSelect only live imported PDF objects on unlocked layers, not the title-block XREF.")
          (progn
            (setq index 1)
            (foreach style *p2dwg-approved-text-styles*
              (prompt (strcat "\\n  " (itoa index) ") " (car style)
                       " | font=" (nth 4 style) " | height=" (rtos (nth 1 style) 2 4)
                       " | width=" (rtos (nth 2 style) 2 4)))
              (setq index (1+ index)))
            (initget 6)
            (setq choice (getint "\\nChoose the approved text style number for this selection: "))
            (if (and choice (<= choice (length *p2dwg-approved-text-styles*)))
              (progn
                (setq style (nth (1- choice) *p2dwg-approved-text-styles*) height (nth 1 style))
                (if (<= height 0.0)
                  (progn
                    (initget 7)
                    (setq height (getreal "\\nThis style is variable-height. Enter the approved height for this text role in mm: "))))
                (setq index 1 target-layer nil)
                (foreach entry *p2dwg-approved-layers*
                  (prompt (strcat "\\n  " (itoa index) ") Text target layer: " (car entry)))
                  (setq index (1+ index)))
                (if *p2dwg-approved-layers*
                  (progn
                    (initget 7)
                    (setq layer-choice (getint "\\nChoose the approved layer number for this text role: "))
                    (if (<= layer-choice (length *p2dwg-approved-layers*))
                      (setq target-layer (car (nth (1- layer-choice) *p2dwg-approved-layers*))))))
                (if (null target-layer)
                  (p2dwg-raise "No valid approved text layer was chosen. This page was not saved."))
                (setq index 0 count 0 skipped 0)
                (repeat (sslength selection)
                  (setq entity (ssname selection index) kind (cdr (assoc 0 (entget entity))))
                  (if (member kind '("TEXT" "MTEXT"))
                    (if (${n}-format-text entity style height target-layer)
                      (setq count (1+ count))
                      (p2dwg-raise "An approved text-format update failed; this page was not saved."))
                    (setq skipped (1+ skipped)))
                  (setq index (1+ index)))
                (${n}-batch-log (strcat "TEXT_FORMAT_APPLIED|COUNT=" (itoa count)
                  "|NON_TEXT_SKIPPED=" (itoa skipped) "|STYLE=" (car style)))
                (prompt (strcat "\\nFormatted " (itoa count) " editable text objects. "
                  (itoa skipped) " non-text objects were not changed. Outlined PDF letters need separate reconstruction."))))))
        (prompt "\\nSelect another text role, or Enter to finish:")
        (setq selection (ssget)))))
  T)
`}function z2(n,s,o,l,i=[]){const p=String(n).padStart(2,"0"),m=`PDF2DWG${p}`,u=`p2dwg${p}`,y=$2.map(Yt).join(" "),h=o.map(D=>`(${Yt(D.fallbackCategory.toLowerCase())} ${Yt(D.blockName)} ${Yt(D.sourcePath)} ${Yt(D.targetLayer)} ${D.wipeoutBoundary?px(D.wipeoutBoundary):"nil"} ${Yt(D.blockAssetId)} (${(D.requiredShapeFonts??[]).map(Yt).join(" ")}))`).join(`
    `),g=l.filter(D=>D.category==="layer").filter(D=>D.name.trim().toUpperCase()!=="0").map(D=>{const w=Number(D.detail.match(/(?:^|;)color=(\d+)/i)?.[1]??7),N=Number(D.detail.match(/(?:^|;)lineweight=(-?\d+)/i)?.[1]??25),k=[-3,-2,-1].includes(N)||Number.isInteger(N)&&N>=0&&N<=211,q=D.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]??"CONTINUOUS";return`(${Yt(D.name)} ${Number.isInteger(w)&&w>0&&w<=255?w:7} ${k?N:25} ${Yt(q)})`}).join(`
    `),v=l.filter(D=>D.category==="layer").map(D=>D.name.trim()).filter(Boolean),E=I2(v),S=l.filter(D=>D.category==="textStyle").map(D=>{const w=(q,x)=>D.detail.match(new RegExp(`(?:^|;)${q}=([^;]*)`,"i"))?.[1]??x,N=(q,x)=>{const O=Number(w(q,String(x)));if(!Number.isFinite(O)||q==="height"&&O<0||q==="width"&&O<=0)throw new Error(`Approved text style "${D.name}" has an invalid ${q}. Re-review the supplied CAD text format.`);return String(O)},k=w("font","").trim();if(!k)throw new Error(`Approved text style "${D.name}" has no font. Re-review it instead of substituting a default font.`);return`(${Yt(D.name)} ${N("height",0)} ${N("width",1)} ${N("oblique",0)} ${Yt(k)} ${Yt(w("bigfont",""))})`}).join(`
    `),j=l.filter(D=>D.category==="linetype").filter(D=>!["CONTINUOUS","BYLAYER","BYBLOCK"].includes(D.name.trim().toUpperCase())).flatMap(D=>{const w=Eb(D.name,D.detail);if(!w)throw new Error(`Approved linetype "${D.name}" has an unsupported or incomplete definition. Re-extract it with the current extractor; the runner will not omit its marks or substitute Continuous.`);const N=D.detail.match(/(?:^|;)description=([^;]*)/i)?.[1]?.trim()||D.name,k=w.segments.map(q=>{const x=[String(q.length),String(q.flags)];return q.flags===4&&x.push(String(q.shapeNumber),Yt(q.styleName),Yt(q.shapeFile),String(q.scale),String(q.rotation),String(q.offsetX),String(q.offsetY)),`(${x.join(" ")})`}).join(" ");return[`(${Yt(D.name)} ${Yt(N)} ${String(w.patternLength)} (${k}))`]}).join(`
    `),T=i.map(D=>`(${Yt(D.stableId.toUpperCase())} ${Yt(D.itemTag.trim()||"(untagged)")} ${Yt(D.type)} ${D.pageNumber})`).join(`
    `);return W2(l),`; Local AutoCAD runner. The matching source PDF is packaged separately.
; Copyright (c) 2026 gaurav.cbiindia.
; Run command ${m} in AutoCAD for Windows.
; Each imported entity is stamped with a generic source alias and source page.

(vl-load-com)
(if (not (boundp '*p2dwg-batch-mode*)) (setq *p2dwg-batch-mode* nil))
(setq *p2dwg-approved-symbols* '(
    ${h}
))
(setq *p2dwg-approved-layers* '(
    ${g}
))
(setq *p2dwg-approved-text-styles* '(
    ${S}
))
(setq *p2dwg-approved-linetypes* '(
    ${j}
))
(setq *p2dwg-ede-records* '(
    ${T}
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

(defun ${u}-selection-source-layer (selection / index entity data name first valid)
  (setq index 0 first nil valid T)
  (while (and valid (< index (sslength selection)))
    (setq entity (ssname selection index))
    (setq data (entget entity))
    (setq name (if (assoc 8 data) (cdr (assoc 8 data)) nil))
    (if (or (null name) (null (${u}-source-layer-suffix name)))
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
                                                 rotation mask-reference / suffix archive-layer source-record
                                                 archive-record archive-created index entity data
                                                 handle handles snapshots updated moved success
                                                 validation scale source-final archive-final)
  (setq suffix (${u}-source-layer-suffix source-layer))
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
        (${u}-source-target-layer-compatible-p source-layer target-layer)
        validation
        (car validation)
        (${u}-current-overlay-valid-p selection block-reference target-layer rotation validation)
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
          (if (not (${u}-set-layer-state source-layer T nil))
            (setq success nil)
          )
          (if success
            (progn
              (if (not (${u}-ensure-archive-layer source-layer archive-layer))
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
            (if (not
                  (${u}-write-replacement-xdata
                    entity stable-id "SOURCE" source-layer archive-layer
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
              (setq source-final (${u}-set-layer-state source-layer T T))
              (setq archive-final (${u}-set-layer-state archive-layer nil T))
              (if (not (and source-final archive-final)) (setq success nil))
            )
          )
          (if success
            (if (not
                  (${u}-write-replacement-log
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
          (${u}-batch-log
            (strcat "SOURCE_ARCHIVED|" stable-id "|" source-layer "|" archive-layer
              "|ENTITIES=" (itoa (length handles))))
          (setq *p2dwg-archive-created-doc* (vla-get-ActiveDocument (vlax-get-acad-object)))
          T
        )
        (progn
          (${u}-restore-source-snapshot snapshots)
          (if source-record (entmod source-record))
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
                                                source-record archive-record source-restored layer-entity)
  ; Catch cancellation and unexpected ActiveX errors as well as explicit failures.
  ; Snapshot only the selected source entities; never UNDO an entire drawing.
  (setq snapshots nil index 0)
  (setq archive-layer (strcat "PDF_DONE_" (${u}-source-layer-suffix source-layer)))
  (setq source-record (entget (tblobjname "LAYER" source-layer)))
  (setq archive-record
    (if (tblobjname "LAYER" archive-layer)
      (entget (tblobjname "LAYER" archive-layer)) nil))
  (while (< index (sslength selection))
    (setq entity (ssname selection index))
    (setq snapshots (cons (list entity (entget entity '("*"))) snapshots))
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
          (${u}-set-layer-state source-layer T nil)
          (if (tblsearch "LAYER" archive-layer)
            (${u}-set-layer-state archive-layer T nil))
          (setq source-restored (${u}-restore-source-snapshot snapshots))
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
              (${u}-set-layer-state source-layer T nil)
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
                                              masks restored data updated value)
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
      (setq payload (${u}-link-payload (car sources)))
      (setq source-layer (cdr (nth 3 payload)))
      (setq archive-layer (cdr (nth 4 payload)))
      (${u}-set-layer-state source-layer T nil)
      (${u}-set-layer-state archive-layer T nil)
      (setq restored T)
      (foreach entity sources
        (setq data (entget entity))
        (setq updated (${u}-put-group 8 source-layer data))
        (if (not (and (entmod updated)
                      (${u}-write-replacement-xdata
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
              (${u}-write-replacement-xdata
                entity stable-id role source-layer archive-layer
                (cdr (nth 5 payload)) (cdr (nth 6 payload))
                (cdr (nth 7 payload)) "NEEDS_REVIEW")))
          (${u}-set-layer-state source-layer T T)
          (${u}-set-layer-state archive-layer nil T)
          (prompt
            (strcat "\\nRollback complete for StableID " stable-id
              ". Source entities are visible again; no PDF source was deleted."))
          T
        )
        (progn
          (${u}-set-layer-state source-layer T nil)
          (${u}-set-layer-state archive-layer T nil)
          (prompt
            (strcat "\\nRollback needs review for StableID " stable-id
              ". Both source and archive layers were left visible."))
          nil
        )
      )
    )
    (progn
      (prompt (strcat "\\nNo archived source records found for StableID " stable-id "."))
      nil
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
                                                       stable-id source-handle source source-payload count valid pair)
  (setq payload (${u}-link-payload block-reference))
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
          (${u}-source-target-layer-compatible-p source-layer (cdr (assoc 8 data)))
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
            (setq source-payload (if source (${u}-link-payload source) nil))
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

(defun ${u}-calibrate-import (selection / answer known-length first-point
                                         second-point measured ratio old-osmode
                                         check-first check-second checked-length
                                         error-percent)
  (setq *p2dwg-scale-status* "UNVERIFIED")
  (setq *p2dwg-effective-scale* scaleFactor)
  (initget "Yes No")
  (setq answer
    (getkword
      (strcat
        "\\nCan you verify page "
        (itoa *p2dwg-source-page*)
        " using a known drawing dimension? [Yes/No] <No>: "
      )
    )
  )
  (if (= (strcase (if answer answer "No")) "YES")
    (progn
      (setq old-osmode (getvar "OSMODE"))
      (setvar "OSMODE" 1)
      (initget 6)
      (setq known-length
        (getreal "\\nEnter that dimension in millimetres: ")
      )
      (setq first-point
        (getpoint "\\nSnap to the first end of that dimension: ")
      )
      (if first-point
        (setq second-point
          (getpoint first-point "\\nSnap to the second end: ")
        )
      )
      (setvar "OSMODE" old-osmode)
      (if (or (null known-length) (null first-point) (null second-point))
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${u}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*) "|CALIBRATION_INPUT"))
          (p2dwg-raise "Scale calibration was cancelled. This page was not saved.")
        )
      )
      (setq measured (distance first-point second-point))
      (if (or (<= measured 0.0) (<= known-length 0.0))
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${u}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*) "|INVALID_MEASUREMENT"))
          (p2dwg-raise "Scale calibration needs a measurable line and a positive known length.")
        )
      )
      (setq ratio (/ known-length measured))
      (command "_.SCALE" selection "" '(0.0 0.0 0.0) ratio)
      (setq scaleFactor (* scaleFactor ratio))
      (setq *p2dwg-effective-scale* scaleFactor)
      (prompt
        (strcat
          "\\nScale applied. Re-pick the same known dimension to verify the result."
        )
      )
      (setq old-osmode (getvar "OSMODE"))
      (setvar "OSMODE" 1)
      (setq check-first
        (getpoint "\\nRe-pick the first end of that dimension: ")
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
            (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*) "|VERIFY_INPUT"))
          (p2dwg-raise "Scale verification was cancelled. This page was not saved.")
        )
      )
      (setq checked-length (distance check-first check-second))
      (if (<= checked-length 0.0)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${u}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*) "|ZERO_REMEASUREMENT"))
          (p2dwg-raise "Scale verification could not measure the dimension. This page was not saved.")
        )
      )
      (setq error-percent
        (* 100.0 (/ (abs (- checked-length known-length)) known-length))
      )
      (if (> error-percent 0.5)
        (progn
          (setq *p2dwg-scale-status* "FAILED")
          (${u}-batch-log
            (strcat "SCALE_FAILED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*)
              "|ERROR_PERCENT=" (rtos error-percent 2 4)))
          (p2dwg-raise
            (strcat "Scale verification missed the 0.5% tolerance ("
              (rtos error-percent 2 4) "%). This page was not saved.")
          )
        )
      )
      (setq *p2dwg-scale-status* "VERIFIED")
      (${u}-batch-log
        (strcat "SCALE_VERIFIED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*)
          "|KNOWN_MM=" (rtos known-length 2 4)
          "|REMEASURED_MM=" (rtos checked-length 2 4)
          "|ERROR_PERCENT=" (rtos error-percent 2 4)
          "|TOLERANCE_PERCENT=0.5"
          "|EFFECTIVE_SCALE=" (rtos scaleFactor 2 8)))
      (prompt
        (strcat "\\nScale VERIFIED: remeasured "
          (rtos checked-length 2 4) " mm against "
          (rtos known-length 2 4) " mm; error "
          (rtos error-percent 2 4) "% (tolerance 0.5%)."))
    )
    (progn
      (setq *p2dwg-scale-status* "UNVERIFIED")
      (${u}-batch-log
        (strcat "SCALE_UNVERIFIED|SOURCE_${p}.pdf|" (itoa *p2dwg-source-page*)))
      (p2dwg-raise
        "A known dimension is required for a verified DWG. This page was not saved.")
    )
  )
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

(defun ${u}-choose-approved-symbol (category / options index choice mask-note)
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

(defun ${u}-review-unsupported (imported / answer selection bounds index entity
                                            selection-index category block-name target-layer
                                            center fallback item choice source-path mask-boundary
                                            wipeout block-asset-id exact-match-answer
                                             exact-match-confirmed required-fonts source-layer
                                             rotation identity-confirmed overlay-answer ede-record stable-id)
  (${u}-prepare-source-layer-review)
  (${u}-ensure-layer "PID-PROVISIONAL-FALLBACK" 1 35 "CONTINUOUS")
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
            (${u}-prepare-source-layer-review)
            (setq selection (ssget))
            (if selection
              (progn
                (setq bounds
                  (if (${u}-source-selection-p selection imported)
                    (${u}-selection-bounds selection)
                    nil))
                (if (null bounds)
                  (prompt "\\nSelect only live, unlocked PDFIMPORT source entities from this page. The selection was not changed.")
                  (progn
                    (setq source-layer (${u}-selection-source-layer selection))
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
                    (setq choice (${u}-choose-approved-symbol category))
                    (setq block-name (if choice (cadr choice) ""))
                    (setq source-path (if choice (nth 2 choice) ""))
                    (setq target-layer (if choice (nth 3 choice) ""))
                    (setq mask-boundary (if choice (nth 4 choice) nil))
                    (setq block-asset-id (if choice (nth 5 choice) nil))
                    (setq required-fonts (if choice (nth 6 choice) nil))
                    (setq item
                      (strcat
                        "REV-${String(n).padStart(2,"0")}-"
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
                    (if (and fallback (= (strcase category) "VALVE"))
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
                            (setq ede-record (${u}-choose-ede-record source-layer))
                            (if ede-record
                              (progn
                                (setq stable-id (strcase (car ede-record)))
                                (setq exact-match-confirmed
                                  (${u}-archive-replaced-source
                                    selection source-layer stable-id (nth 1 ede-record)
                                    fallback block-asset-id target-layer rotation wipeout))
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

${B2(u)}
${F2(u)}
${U2(u,E)}
${M2(n,s)}
`}function Y2(n,s,o){return P2(n.map(l=>l.pageCount),s,o)}function V2(n,s){const o=m=>{const u=[2166136261,2654435769,2246822507,3266489909],y=[16777619,1540483477,668265261,374761393];for(const h of m)for(let g=0;g<u.length;g+=1)u[g]=Math.imul(u[g]^h,y[g])>>>0;return u.map(h=>h.toString(16).padStart(8,"0")).join("")},l=n.map((m,u)=>[u+1,m.sourceHash?.toLowerCase()??o(m.pdfBytes),m.pageCount,m.discipline,m.projectId??"",m.titleBlockGroupId??""].join("|")),i=[];for(const m of s)m.path==="RUN_BATCH.lsp"||m.path==="README_LOCAL_AUTOCAD.txt"||/^SOURCE_\d+\.pdf$/i.test(m.path)||i.push(`${m.path}|${m.content.length}|${o(m.content)}`);const p=["LOCAL_AUTOCAD_BATCH_V1",...l.map(m=>`JOB|${m}`),...i.map(m=>`FILE|${m}`)].join(`
`);return o(new TextEncoder().encode(p))}function H2(n,s){return`LOCAL AUTOCAD PDF-TO-DWG RUNNER
 ---------------------------------

This package contains the selected source PDFs and AutoLISP helpers. It does
not contain pre-generated DWG files. The ZIP is prepared in your browser and
is not uploaded to the app. Keep it private because it contains source PDFs.

${n.map((i,p)=>`- PDF ${p+1} (${i.discipline}): ${i.pageCount} page(s) -> ${i.pageCount} native DWG file(s)`).join(`
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
  Before saving each page, the runner requires a known dimension in millimetres.
  It applies scale to the imported geometry, re-picks the same two endpoints,
  and requires the measured result to be within 0.5% before marking it VERIFIED.
  Skipping, canceling, or failing the check stops that page; no final DWG is
  saved. Calibration applies to imported geometry about 0,0,0. Each page is
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
  page: SCALE_REVIEW_REQUIRED is followed by scale, privacy and CAD reviews.
  Only SAVED with SCALE=VERIFIED records a final page output.
- Existing output files are never overwritten. The output-base-specific local
  progress journal records every page state. When rerunning with the same
  unchanged batch and output base, only pages with a confirmed COMPLETED state
  and an existing DWG are skipped; unfinished pages are resumed. Existing DWGs
  without a matching completion record require review instead of being assumed
  complete. Keep the extracted runner, PDFs, DWGs, and journal on the workstation.
- This helper uses AutoCAD for Windows. Native DWG generation is not performed
  by the web page itself.
`}function G2(n,s=[],o=[],l=[],i){if(n.length===0||n.some(w=>!Number.isInteger(w.pageCount)||w.pageCount<1||!["PFD","P&ID"].includes(w.discipline)||!(w.pdfBytes instanceof Uint8Array)||w.pdfBytes.length===0||w.sourceHash!==void 0&&!/^[a-f0-9]{64}$/i.test(w.sourceHash)))throw new Error("Add at least one readable PDF before preparing an AutoCAD runner.");if(n.some(w=>(w.edeRecords??[]).some(N=>!/^[0-9A-F]{32}$/i.test(N.stableId)||!N.type.trim()||!Number.isInteger(N.pageNumber)||N.pageNumber<1||N.pageNumber>w.pageCount)))throw new Error("An EDE link in the AutoCAD runner is invalid. Reopen the EDE record and prepare a fresh runner.");const p=new Set(n.map(w=>w.titleBlockGroupId?.trim()??""));if(p.size>1)throw new Error("Prepare one AutoCAD runner per group so each batch uses only its own title block.");const m=[...p][0]??"";if(m){if(!i||i.groupId!==m)throw new Error("Upload a standalone DWG title block for the selected group before preparing its AutoCAD runner.");if(!(i.content instanceof Uint8Array)||!i.content.length)throw new Error("The selected group title block is not a valid AutoCAD DWG file.");const w=new TextDecoder().decode(i.content.subarray(0,6));if(!/^AC10\d{2}$/.test(w))throw new Error("The selected group title block is not a valid AutoCAD DWG file.")}else if(i)throw new Error("A project title block can only be used with PDFs from the same selected group.");const u=n.map(w=>s.filter(N=>(N.discipline===w.discipline||N.discipline==="Shared")&&(N.projectId?N.projectId===w.projectId:!0))),y=[...new Map(u.flat().map(w=>[`${w.blockAssetId}|${w.blockName}|${w.fallbackCategory}`,w])).values()];for(const w of y)if(w.fallbackCategory.trim().toLowerCase()==="valve"){if(!w.wipeoutBoundary)throw new Error(`Valve "${w.blockName}" has no reviewed body mask outline. Re-review the valve in the Legends Library before preparing the AutoCAD runner.`);try{qs(w.wipeoutBoundary.map(([N,k])=>`${N},${k}`).join(";"))}catch(N){throw new Error(`Valve "${w.blockName}" has an invalid reviewed body mask outline. ${N instanceof Error?N.message:"Re-review the valve mask."}`)}}const h=new Set(o.map(w=>w.id));if(y.some(w=>!h.has(w.blockAssetId)))throw new Error("An approved symbol refers to a missing locally extracted block drawing.");if(y.some(w=>!w.targetLayer.trim()||w.targetLayer.trim().toUpperCase()==="0"))throw new Error("Every approved block needs an approved non-zero target CAD layer before the AutoCAD runner can be prepared.");const g=new Map,v=new Map,E=new Map,S=new Map,j=[...new Set(y.map(w=>w.blockAssetId))];j.forEach((w,N)=>{const k=o.find(x=>x.id===w),q=`CAD_SYMBOLS/SYMBOL_${String(N+1).padStart(3,"0")}`;if(k.format==="DXF"){const x=Nr(k.content).content,O=new ub(x).nativeAssetInfo();v.set(w,`${q}.dxf`),g.set(w,`${q}.dxf`),E.set(w,O.requiredShapeFonts),S.set(w,x)}else g.set(w,`${q}.dwg`),v.set(w,`${q}.dwg`),E.set(w,[])});const T=[{path:"RUN_BATCH.lsp",content:new Uint8Array},...i?[{path:"PROJECT_TITLE_BLOCK.dwg",content:i.content}]:[],...o.filter(w=>j.includes(w.id)).map(w=>({path:v.get(w.id),content:S.get(w.id)??w.content})),...y.length?[{path:"CAD_BLOCK_GEOMETRY_INDEX.json",content:new TextEncoder().encode(JSON.stringify({schemaVersion:1,localOnly:!0,note:"Descriptors are local geometry data, not validated match signatures. Missing or empty descriptors require re-importing the extraction ZIP with its overview DXF or reviewing unsupported geometry.",blocks:y.map(w=>{const N=o.find(O=>O.id===w.blockAssetId),k=N?.geometryDescriptor??null,x=!!(k?.primitives.length&&k.bounds)?"INDEXED":N?.geometryIndexError??(k?"EMPTY_OR_UNSUPPORTED":"OVERVIEW_DXF_REQUIRED");return{blockAssetId:w.blockAssetId,blockName:w.blockName,category:w.fallbackCategory,discipline:w.discipline,targetLayer:w.targetLayer,targetLayerRules:l.find(O=>O.category==="layer"&&O.name.trim().toLowerCase()===w.targetLayer.trim().toLowerCase())?.detail??null,projectScope:w.projectId?"project":"company",indexStatus:x,indexError:N?.geometryIndexError??null,geometry:k}})},null,2))}]:[],...n.flatMap((w,N)=>{const k=String(N+1).padStart(2,"0"),q=s.filter(P=>(P.discipline===w.discipline||P.discipline==="Shared")&&(P.projectId?P.projectId===w.projectId:!0)&&P.blockAssetId&&g.has(P.blockAssetId)).map(P=>{const K=g.get(P.blockAssetId),ue=K.split("/").at(-1)?.replace(/\.(?:dwg|dxf)$/i,"")??"APPROVED_SYMBOL";return{...P,blockName:ue,sourcePath:K,requiredShapeFonts:E.get(P.blockAssetId)??[]}}),x=l.filter(P=>(P.discipline===w.discipline||P.discipline==="Shared")&&(P.projectId?P.projectId===w.projectId:!0)),O=[...new Map(x.map(P=>[`${P.category}:${P.name.toLowerCase()}`,P])).values()],R=q.find(P=>!O.some(K=>K.category==="layer"&&K.name.toLowerCase()===P.targetLayer.toLowerCase()));if(R)throw new Error(`Approved CAD layer "${R.targetLayer}" is not included in this runner page's approved standards.`);return[{path:`DOC_${k}.lsp`,content:new TextEncoder().encode(z2(N+1,w.pageCount,q,O,w.edeRecords??[]))},{path:`SOURCE_${k}.pdf`,content:w.pdfBytes}]})],D=V2(n,T);return T[0].content=new TextEncoder().encode(Y2(n,!!i,D)),T.push({path:"README_LOCAL_AUTOCAD.txt",content:new TextEncoder().encode(H2(n,!!i))}),Zy(T)}function Wg(n,s){const o=n.match(new RegExp(`(?:^|;)${s}=\\(([^)]*)\\)`,"i"));if(!o)return null;const l=o[1].trim();return!l||/^nil$/i.test(l)?[]:l.split(/[\s,]+/)}function X2(n,s){const o=n.match(new RegExp(`(?:^|;)${s}=(.*?)(?=;[A-Za-z][A-Za-z0-9_]*=|$)`,"i"));if(!o)return null;const l=[],i=/\(\s*(\d+)\s*\.\s*(?:"((?:\\.|[^"])*)"|([^\s)]+))\s*\)/g;let p;for(;(p=i.exec(o[1]))!==null;){const m=p[2]===void 0?p[3]:p[2].replaceAll('\\"','"').replaceAll("\\\\","\\");l.push({code:Number(p[1]),value:m})}return l}function K2(n){let s=0;for(const l of n.toUpperCase())s=s*31+l.charCodeAt(0)>>>0;return`P2DWG_${n.toUpperCase().replace(/[^A-Z0-9_-]/g,"_").slice(0,16)||"SHAPE"}_${s.toString(36).toUpperCase()}`}function Eb(n,s){const o=Wg(s,"pattern"),l=Wg(s,"patternFlags")??[];if(!o?.length||l.length>0&&l.length!==o.length)return null;const i=o.map(Number),p=l.map(Number);if(i.some(D=>!Number.isFinite(D))||i.every(D=>D===0)||i.reduce((D,w)=>D+Math.abs(w),0)<=0||p.some(D=>!Number.isInteger(D)))return null;const m=X2(s,"complexData"),u=new Map,y=/\(\s*"((?:\\.|[^"])*)"\s*\.\s*"((?:\\.|[^"])*)"\s*\)/g,h=s.match(/(?:^|;)shapeFonts=(.*)$/i);let g;if(h)for(;(g=y.exec(h[1]))!==null;)u.set(g[1].replaceAll('\\"','"').toUpperCase(),g[2].replaceAll('\\"','"'));const v=[];let E=0;for(let D=0;D<i.length;D+=1){const w=p[D]??0;let N=m?.findIndex((ge,ce)=>ce>=E&&ge.code===49)??-1;if(N<0||!m){if(w!==0)return null;v.push({length:i[D],flags:0});continue}const k=m[N];if(Math.abs(Number(k.value)-i[D])>1e-8)return null;const q=m[N+1];if(!q||q.code!==74)return null;const x=Number(q.value);if(!Number.isInteger(x)||x!==w)return null;if(E=N+2,x===0){v.push({length:i[D],flags:0});continue}if(x!==4)return null;const O=ge=>{for(;E<m.length&&m[E].code!==ge&&m[E].code!==49;)E+=1;if(E>=m.length||m[E].code!==ge)return null;const ce=m[E].value;return E+=1,ce},R=Number(O(75)),P=O(340),K=Number(O(46)),ue=Number(O(50)),ne=Number(O(44)),le=Number(O(45)),we=P?u.get(P.toUpperCase()):void 0;if(!Number.isInteger(R)||R<=0||!P||!we||!/^[a-z0-9_.-]+\.shx$/i.test(we)||![K,ue,ne,le].every(Number.isFinite)||K<=0)return null;v.push({length:i[D],flags:4,shapeNumber:R,styleName:K2(n),shapeFile:we,scale:K,rotation:ue,offsetX:ne,offsetY:le})}const S=i.reduce((D,w)=>D+Math.abs(w),0),j=s.match(/(?:^|;)patternLength=([^;]+)/i)?.[1],T=j===void 0?S:Number(j);return!Number.isFinite(T)||T<=0||Math.abs(T-S)>Math.max(1e-7,S*1e-7)?null:{patternLength:T,segments:v}}function W2(n){const s=new Set(["CONTINUOUS","BYLAYER","BYBLOCK"]),o=new Map(n.filter(l=>l.category==="linetype").map(l=>[l.name.trim().toUpperCase(),l]));for(const l of n.filter(i=>i.category==="layer")){const i=l.detail.match(/(?:^|;)linetype=([^;]+)/i)?.[1]?.trim();if(!i||s.has(i.toUpperCase()))continue;const p=o.get(i.toUpperCase());if(!p||!Eb(p.name,p.detail))throw new Error(`Layer "${l.name}" requires linetype "${i}", but its complete supported definition is not approved. Review/re-extract that linetype first; the runner will not silently substitute Continuous.`)}}function Yt(n){return`"${n.replaceAll("\\","\\\\").replaceAll('"','\\"')}"`}function Z2(n,s,o=""){const l=n.filter(h=>h.reviewStatus==="reviewed"&&h.sourceKind==="extracted-dwg"&&(h.scope!=="project"||!!(o&&h.projectId===o))),i=(h,g)=>h.fields.find(v=>v.label===g)?.value?.trim()??"",p=l.filter(h=>[s,"Shared"].includes(i(h,"Source discipline"))),m=p.filter(h=>h.category==="layer"&&i(h,"CAD name")&&i(h,"CAD name").toUpperCase()!=="0"),u=new Set(m.map(h=>i(h,"CAD name").toLowerCase()));return{symbols:p.filter(h=>h.category==="symbol"&&["Source drawing ID","Block asset ID","Block name","Fallback category"].every(g=>i(h,g))&&u.has(i(h,"Target CAD layer").toLowerCase())).length,layers:m.length,textStyles:p.filter(h=>h.category==="textStyle").length,otherDisciplineSymbols:l.filter(h=>h.category==="symbol"&&["PFD","P&ID"].includes(i(h,"Source discipline"))&&i(h,"Source discipline")!==s).length}}const Bu=1024*1024,Q2=500*Bu;function jo(n){return n<1024?`${n} B`:n<Bu?`${(n/1024).toFixed(1)} KB`:`${(n/Bu).toFixed(1)} MB`}function J2(n){const s=n.type.split(";",1)[0].trim().toLowerCase(),o=n.name.trim().toLowerCase().endsWith(".pdf");return s==="application/pdf"||o}async function eD(n){const[s,o]=await Promise.all([Mn(()=>import("./pdf-TYrZqVzP.js"),[]),Mn(()=>import("./pdf.worker.min-_6FNnbPK.js"),[])]);s.GlobalWorkerOptions.workerSrc=o.default;const l=s.getDocument({data:new Uint8Array(n.slice(0))});try{return(await l.promise).numPages}finally{await l.destroy().catch(()=>{})}}function tD({discipline:n,groups:s,selectedClientId:o,selectedClientLabel:l,onSelectClient:i}){const[p,m]=M.useState([]),[u,y]=M.useState(!0),[h,g]=M.useState(""),[v,E]=M.useState(0),[S,j]=M.useState([]),[T,D]=M.useState(null),[w,N]=M.useState(null),[k,q]=M.useState(null),[x,O]=M.useState(null),[R,P]=M.useState(0),[K,ue]=M.useState(1),[ne,le]=M.useState(null),[we,ge]=M.useState(""),[ce,V]=M.useState(""),[re,ye]=M.useState([]),[Ae,_]=M.useState(0),[Q,U]=M.useState(""),[G,oe]=M.useState(null),[he,be]=M.useState(null),[ze,Ie]=M.useState(!1),[lt,ft]=M.useState(!1),[jt,Je]=M.useState(""),[vt,ua]=M.useState(!1),[$,ie]=M.useState(""),[fe,B]=M.useState(!1),[de,je]=M.useState(""),[me,Me]=M.useState("1"),Be=M.useRef([]),qe=M.useRef(null),Te=M.useRef(!0),Qt=M.useRef(!1),xe=M.useRef(0),Ke=M.useRef(n);Ke.current=n;const nt=typeof globalThis.crypto?.subtle<"u",gt=M.useMemo(()=>Iy(s),[s]);M.useEffect(()=>{if(V(o),!o){ge("");return}try{const F=pn();ge(F.projects[o]?o:"")}catch{ge("")}},[o]);const Ce=M.useCallback((F,pe)=>{if(!Te.current)return;xe.current+=1;const Ee=xe.current;j(C=>[...C.slice(-5),{id:Ee,kind:F,text:pe}])},[]);M.useEffect(()=>{const F=()=>{try{const pe=pn(),Ee=o&&pe.projects[o]?[o]:[];ye(Ee.map((C,Y)=>({id:C,label:gt.find(te=>te.id===C)?.label??`Project ${String(Y+1).padStart(2,"0")}`}))),oe(Z2([...pe.companyItems,...we?pe.projects[we]?.items??[]:[]],n,we)),U(new Date().toLocaleTimeString())}catch(pe){oe(null),Ce("error",pe instanceof Error?pe.message:"The approved CAD library could not be loaded.")}};return F(),window.addEventListener("focus",F),window.addEventListener("storage",F),window.addEventListener(zo,F),()=>{window.removeEventListener("focus",F),window.removeEventListener("storage",F),window.removeEventListener(zo,F)}},[Ce,gt,n,we,Ae,o]),M.useEffect(()=>{let F=!0;return be(null),Je(""),ce?(Ie(!0),Ag(ce).then(pe=>{F&&be(pe)}).catch(pe=>{F&&Je(pe instanceof Error?pe.message:"The local project title block could not be read.")}).finally(()=>{F&&Ie(!1)}),()=>{F=!1}):(Ie(!1),()=>{F=!1})},[ce]),M.useEffect(()=>{ce&&!gt.some(F=>F.id===ce)&&(V(""),be(null),Je(""))},[gt,ce]);const Rt=M.useCallback(async()=>{try{const[F,pe]=await Promise.all([pb(n),r2()]);if(!Te.current||Ke.current!==n)return;m(F),E(pe),g("")}catch(F){Te.current&&g(F instanceof Error?F.message:"Saved PDFs could not be loaded.")}finally{Te.current&&y(!1)}},[n]),Gt=async(F,pe,Ee,C)=>{await hi(F.id,{analysisStatus:"extracting",analysisPagesDone:0,analysisRecordCount:0,analysisMessage:"",autocadStatus:"not-connected"}),Te.current&&await Rt();let Y;try{Y=await D2(pe,C,Ee)}catch(_e){throw Ee()?_e:new Ht("cancelled","EDE extraction paused.")}if(!Ee())throw new Ht("cancelled","EDE extraction paused.");await i2(F.id,Y.pageText);const te=S2(Y.pageText),De=L2(n==="PFD"?"pfd":"pid",{id:F.id,alias:F.alias},[...Y.candidates,...te]);Te.current&&P(_e=>_e+1);const Pe=Y.pageText.some(_e=>_e.searchableText.trim()||_e.ocrTiles.some(Ue=>Ue.trim())),Ne=De.recordCount||Pe?"needs-review":"no-tags";return await hi(F.id,{analysisStatus:Ne,analysisPagesDone:Y.pages,analysisRecordCount:De.recordCount,analysisMessage:Y.ocrPages?`Page text and OCR from ${Y.ocrPages} page(s) are saved locally. ${Y.candidates.length} tag candidate(s) and ${te.length} note(s) need review.`:`Page text is saved locally. ${Y.candidates.length} tag candidate(s) and ${te.length} note(s) need review.`,autocadStatus:"not-connected"}),{...De,tagCount:Y.candidates.length,noteCount:te.length}};M.useEffect(()=>{Te.current=!0,y(!0),q(null),ue(1),Rt();const F=()=>{Rt()};return window.addEventListener("focus",F),()=>{window.removeEventListener("focus",F),Te.current=!1,Be.current.forEach(pe=>{pe.cancelled=!0}),Be.current=[]}},[Rt]),M.useEffect(()=>{if(Qt.current)return;const F=new URLSearchParams(window.location.search).get("pdf"),pe=p.find(Y=>Y.id===F);if(!pe)return;const Ee=new URLSearchParams(window.location.search).get("record");Ee&&O(Ee),Qt.current=!0,q(pe.id);const C=Number(new URLSearchParams(window.location.search).get("page"));ue(Number.isInteger(C)&&C>=1&&C<=pe.pageCount?C:1),window.setTimeout(()=>document.querySelector('[data-testid="panel-source-page"]')?.scrollIntoView({behavior:"smooth",block:"center"}),100)},[p]);const $t=async(F,pe,Ee)=>{const C=n,Y=()=>!F.cancelled&&Te.current&&Ke.current===C;F.state="working";try{if(F.file.size>qu)throw new Ht("too-large","A PDF is larger than 100 MB and was skipped.");const te=await F.file.arrayBuffer();if(!Y())return;let De;try{De=await eD(te)}catch(_e){const Ue=_e?.name;throw Ue==="PasswordException"?new Error("A PDF is password-protected. Remove the password and add it again."):Ue==="InvalidPDFException"||Ue==="FormatError"?new Error("A file is not a valid PDF, or it is damaged."):new Error("A PDF could not be read. It may be damaged.")}if(!Y())return;if(De<1)throw new Error("A PDF has no pages.");let Pe;try{Pe=await o2(te)}catch{throw new Error("Duplicate check is not supported in this browser, so the PDF was not saved.")}if(!Y())return;const Ne=await l2({discipline:C,bytes:te,pageCount:De,hash:Pe},Y);pe.pagesDone+=De,Te.current&&(D({total:Ee,done:pe.done,pagesDone:pe.pagesDone,active:1,phase:"extracting",currentAlias:Ne.alias,pageNow:0,pageTotal:De}),await Rt());try{const _e=await Gt(Ne,te,Y,(Ue,wt)=>{Te.current&&D(ea=>ea&&{...ea,phase:"extracting",currentAlias:Ne.alias,pageNow:Ue,pageTotal:wt})});Y()&&Ce("info",`${Ne.alias}: ${_e.tagCount} tag candidate(s) and ${_e.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(_e){const Ue=_e instanceof Ht&&_e.code==="cancelled",wt=Ue?"Extraction paused. Resume it from this saved PDF.":Hg(_e);await hi(Ne.id,{analysisStatus:Ue?"paused":"failed",analysisMessage:wt}).catch(()=>{}),!Ue&&Y()&&Ce("error",`${Ne.alias}: ${wt}`)}F.state="done",Te.current&&await Rt()}catch(te){F.state="failed",!(te instanceof Ht&&te.code==="cancelled")&&Y()&&Ce("error",te instanceof Error?te.message:"A PDF could not be added.")}finally{pe.done+=1,Te.current&&D(te=>te&&{...te,total:Ee,done:pe.done,pagesDone:pe.pagesDone,active:0})}},Bt=F=>{if(T||u||h||!F.length)return;const pe=F.filter(J2);if(pe.length<F.length&&Ce("error",`${F.length-pe.length} file(s) skipped. Choose PDF files only.`),!pe.length)return;const Ee=pe.map(De=>({id:++xe.current,file:De,cancelled:!1,state:"queued"}));Be.current=[...Be.current,...Ee];const C={done:0,pagesDone:0};D({total:Ee.length,done:0,pagesDone:0,active:0,phase:"checking"});let Y=0;(async()=>{for(;Y<Ee.length&&Te.current;){const De=Ee[Y++];if(De.cancelled){C.done+=1;continue}await $t(De,C,Ee.length)}})().then(()=>{if(Be.current=Be.current.filter(Pe=>!Ee.includes(Pe)),!Te.current)return;const De=Ee.filter(Pe=>Pe.state==="done").length;De&&Ce("info",`${De} PDF(s) saved on this device. Check each PDF's EDE status below; AutoCAD is not connected.`),D(null)})},Dt=async F=>{if(!(T||w)){N(F.id),D({total:1,done:0,pagesDone:0,active:1,phase:"extracting",currentAlias:F.alias,pageNow:0,pageTotal:F.pageCount});try{const pe=await ko(F.id),Ee=await Gt(F,pe,()=>Te.current,(C,Y)=>{Te.current&&D(te=>te&&{...te,phase:"extracting",pageNow:C,pageTotal:Y})});Ce("info",`${F.alias}: ${Ee.tagCount} tag candidate(s) and ${Ee.noteCount} PDF note(s) were added to EDE for review. Full page text is saved locally; AutoCAD is not connected.`)}catch(pe){const Ee=Hg(pe);await hi(F.id,{analysisStatus:"failed",analysisMessage:Ee}).catch(()=>{}),Ce("error",`${F.alias}: ${Ee}`)}finally{D(null),N(null),await Rt()}}},Sa=()=>{Be.current.forEach(F=>{F.state!=="done"&&(F.cancelled=!0)}),Ce("info","Remaining imports were cancelled. Finished files stay saved.")},la=async F=>{le(null);try{await hb([F]),k===F&&q(null),await Rt()}catch{Ce("error","The PDF could not be deleted from local storage.")}},Da=async()=>{le(null),Be.current.forEach(F=>{F.cancelled=!0});try{await c2(n),q(null),await Rt()}catch{Ce("error","Saved PDFs could not be cleared.")}},_t=async F=>{try{const pe=await ko(F.id),Ee=URL.createObjectURL(new Blob([pe],{type:"application/pdf"})),C=document.createElement("a");C.href=Ee,C.download=`original-source-${n==="PFD"?"pfd":"pid"}-pdf-${F.aliasNumber}.pdf`,document.body.appendChild(C),C.click(),C.remove(),setTimeout(()=>URL.revokeObjectURL(Ee),4e3)}catch{Ce("error","The original PDF could not be read for download.")}},pt=async F=>{if(!(!F||!ce)){if(F.size>Qy){Je("The project title block is larger than the 100 MB local upload limit."),qe.current&&(qe.current.value="");return}if(he&&!window.confirm("Replace the saved title block for this project in this browser? The previous local file will be replaced.")){qe.current&&(qe.current.value="");return}ft(!0),Je("");try{await _x(ce,F.name,new Uint8Array(await F.arrayBuffer())),be(await Ag(ce)),Je("Title block saved for this group in this browser.")}catch(pe){Je(pe instanceof Error?pe.message:"The project title block could not be saved locally.")}finally{ft(!1),qe.current&&(qe.current.value="")}}},Ia=async()=>{if(!(!ce||!he)&&window.confirm("Remove this client folder title block from this browser? Existing generated DWGs are not changed.")){Je("");try{await Px(ce),be(null),Je("Group title block removed from this browser.")}catch(F){Je(F instanceof Error?F.message:"The project title block could not be removed.")}}},ia=async()=>{if(!(!p.length||T!==null||vt||lt||u||h)){ua(!0),ie("");try{const F=p.reduce((ve,Ye)=>ve+Ye.size,0),pe=ce?await Ox(ce):null;if(ce&&!pe)throw new Error("Upload a standalone DWG title block for the selected client folder before preparing its AutoCAD runner.");if(F+(pe?.bytes??0)>Q2)throw new Error("The saved source PDFs and client title block exceed the 500 MB limit for this local AutoCAD runner package.");const Ee=pn();if(we&&!Ee.projects[we])throw new Error("That project library is no longer available. Select a current project mapping or use Legends Library only.");const C=[...Ee.companyItems,...we?Ee.projects[we]?.items??[]:[]],te=C.filter(ve=>ve.category==="symbol"&&ve.reviewStatus==="reviewed"&&ve.sourceKind==="extracted-dwg"&&[n,"Shared"].includes(ve.fields.find(Ye=>Ye.label==="Source discipline")?.value?.trim()??"")).flatMap(ve=>{const Ye=Ua=>ve.fields.find(Za=>Za.label===Ua)?.value?.trim()??"",Et=Ye("Source drawing ID"),Mt=Ye("Block asset ID"),xt=Ye("Block name"),ha=Ye("Fallback category"),sn=Ye("Target CAD layer"),Tt=Ye("Source discipline");if(!Et||!Mt||!xt||!ha||Tt!=="PFD"&&Tt!=="P&ID"&&Tt!=="Shared")return[];if(!sn||sn.toUpperCase()==="0")throw new Error(`Approved block "${xt}" has no valid target CAD layer. Re-review it and select an approved non-zero layer.`);let Ta;if(ha.toLowerCase()==="valve"){const Ua=Ye("Wipeout mask boundary");try{Ta=qs(Ua)}catch(Za){throw new Error(`Approved valve "${xt}" has no valid reviewed body mask. Re-review the valve outline before preparing the AutoCAD runner. ${Za instanceof Error?Za.message:""}`)}}return[{sourceId:Et,blockAssetId:Mt,blockName:xt,fallbackCategory:ha,targetLayer:sn,discipline:Tt,...Ta?{wipeoutBoundary:Ta}:{},...ve.scope==="project"&&ve.projectId?{projectId:ve.projectId}:{}}]}),De=C.flatMap(ve=>{if(ve.sourceKind!=="extracted-dwg"||ve.reviewStatus!=="reviewed"||ve.category!=="layer"&&ve.category!=="textStyle"&&ve.category!=="linetype")return[];const Ye=xt=>ve.fields.find(ha=>ha.label===xt)?.value?.trim()??"",Et=Ye("Source discipline"),Mt=Ye("CAD name");return!Mt||Et!=="PFD"&&Et!=="P&ID"&&Et!=="Shared"?[]:[{name:Mt,category:ve.category,detail:Ye("Extracted details"),discipline:Et,...ve.scope==="project"&&ve.projectId?{projectId:ve.projectId}:{}}]}),Pe=[...new Set(te.map(ve=>ve.blockAssetId))],Ne=await Promise.all(Pe.map(async ve=>{const[Ye,Et]=await Promise.all([eb(ve),Jy(ve)]);return{id:ve,content:Ye,format:Et.format??"DWG",...Et.geometryDescriptor?{geometryDescriptor:Et.geometryDescriptor}:{}}})),_e=new Map(Ne.map(ve=>[ve.id,ve])),Ue=new Map((await Ru()).map(ve=>[ve.id,ve])),wt=new Map;for(const ve of te){const Ye=_e.get(ve.blockAssetId)?.geometryDescriptor;if(Ye?.primitives.length&&Ye.bounds)continue;const Et=wt.get(ve.sourceId)??[];Et.push(ve),wt.set(ve.sourceId,Et)}const ea=[];for(const[ve,Ye]of wt){const Et=Ue.get(ve),Mt=Ye.map(xt=>_e.get(xt.blockAssetId)).filter(xt=>!!xt);if(!Et||Et.format!=="DXF"){for(const xt of Mt)xt.geometryIndexError=Et?"SOURCE_DWG_REQUIRES_OVERVIEW_DXF":"SOURCE_NOT_AVAILABLE";continue}try{const xt=await $o(ve);if(xt.byteLength>50*1024*1024){for(const Tt of Mt)Tt.geometryIndexError="SOURCE_DXF_TOO_LARGE";continue}const ha=new TextDecoder("windows-1252").decode(xt),sn=Ti(ha,[...new Set(Ye.map(Tt=>Tt.blockName))]);for(const Tt of Ye){const Ta=_e.get(Tt.blockAssetId);if(!Ta)continue;const Ua=sn.get(Tt.blockName)?.geometryDescriptor;if(!Ua||!Ua.primitives.length||!Ua.bounds){Ta.geometryIndexError="BLOCK_NOT_FOUND_OR_UNSUPPORTED";continue}Ta.geometryDescriptor=Ua,ea.push({id:Ta.id,sourceId:ve,blockName:Tt.blockName,content:Ta.content,geometryDescriptor:Ua})}}catch{for(const xt of Mt)xt.geometryIndexError="SOURCE_DXF_UNREADABLE"}}ea.length&&await Lu(ea);const Aa=new Map;for(const ve of Go(n==="PFD"?"pfd":"pid"))for(const Ye of ve.rows){if(!Ye.sourcePdfId)continue;const Et=new Set([Number(Ye.sourcePage),...(Ye.sourceLocations??[]).map(Mt=>Mt.pageNumber)].filter(Mt=>Number.isInteger(Mt)&&Mt>0));for(const Mt of Et){const xt=Aa.get(Ye.sourcePdfId)??[];xt.some(ha=>ha.stableId===Ye.id&&ha.pageNumber===Mt)||(xt.push({stableId:Ye.id,itemTag:Ye.itemTag,type:Ye.type,pageNumber:Mt}),Aa.set(Ye.sourcePdfId,xt))}}const Pt=await G2(await Promise.all(p.map(async ve=>({pageCount:ve.pageCount,pdfBytes:new Uint8Array(await ko(ve.id)),sourceHash:ve.hash,discipline:n,edeRecords:Aa.get(ve.id)??[],...we?{projectId:we}:{},...ce?{titleBlockGroupId:ce}:{}}))),te,Ne,De,pe?{groupId:pe.projectId,content:pe.content}:void 0),Rr=URL.createObjectURL(Pt),In=document.createElement("a");In.href=Rr,In.download="autocad-runner-with-source-pdfs.zip",document.body.append(In),In.click(),In.remove(),window.setTimeout(()=>URL.revokeObjectURL(Rr),1e3);const bn=p.reduce((ve,Ye)=>ve+Ye.pageCount,0);ie(`Runner and ${p.length} source PDF(s) downloaded. It can create ${bn} separate DWG file(s). ${te.filter(ve=>(ve.discipline===n||ve.discipline==="Shared")&&(!ve.projectId||ve.projectId===we)).length} reviewed symbol mapping(s) and ${De.filter(ve=>(ve.discipline===n||ve.discipline==="Shared")&&(!ve.projectId||ve.projectId===we)).length} reviewed layer/text-style/linetype mapping(s) are available to this ${n} run.`+(pe?" The selected client title block is included for 1:1 XREF attachment; keep its output companion DWG beside the generated pages.":""))}catch(F){ie(F instanceof Error?F.message:"The AutoCAD runner could not be prepared. Try a smaller PDF batch.")}finally{ua(!1)}}},Wa=async F=>{const pe=Number(me);if(!Number.isFinite(pe)||pe<=0){je("Enter a scale multiplier greater than zero.");return}B(!0),je("Reading PDF vector geometry…");try{const{buildPdfDxfPackage:Ee}=await Mn(async()=>{const{buildPdfDxfPackage:Pe}=await import("./pdf-dxf-export-DaRoGg53.js");return{buildPdfDxfPackage:Pe}},[]),C=await Ee((F?[F]:p).map(Pe=>({aliasNumber:Pe.aliasNumber,bytes:()=>ko(Pe.id)})),pe,(Pe,Ne,_e)=>{Te.current&&je(`Creating DXF: PDF ${Pe} · page ${Ne} of ${_e}…`)},()=>Te.current&&Ke.current===n);if(!Te.current||Ke.current!==n)return;const Y=URL.createObjectURL(C.blob),te=document.createElement("a");te.href=Y,te.download="pdf-dxf-pages.zip",document.body.append(te),te.click(),te.remove(),window.setTimeout(()=>URL.revokeObjectURL(Y),1e3);const De=C.reports.length-C.exported;je(`${C.exported} DXF page(s) created${De?`; ${De} page(s) skipped—read the report`:""}. Raw vector output—not a verified exact PDF match. Compare each page with its source; library replacement and engineering scale are not verified.`)}catch(Ee){Te.current&&je(Ee instanceof Error?Ee.message:"DXF export failed; no CAD output was confirmed.")}finally{Te.current&&B(!1)}},At=M.useMemo(()=>p.find(F=>F.id===k)??null,[p,k]),qn=M.useMemo(()=>{if(!k||!x)return[];try{const Ee=Go(n==="PFD"?"pfd":"pid").find(C=>C.sourcePdfId===k)?.rows.find(C=>C.id===x);return(Ee?.sourceLocations??[]).filter(C=>C.pageNumber===K).map(C=>({id:Ee.id,label:Ee.itemTag,location:C}))}catch{return[]}},[n,K,k,R,x]),fa=p.reduce((F,pe)=>F+pe.pageCount,0),pa=T!==null,Jt=Math.min(100,v/Iu*100);return d.jsxs("section",{className:"pdf-workflow","aria-labelledby":"pdf-workflow-title","data-testid":"panel-pdf-workflow",children:[d.jsxs("div",{className:"pdf-panel-heading",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"pdf-kicker",children:["PDF INPUT · LOCAL SOURCE FILES · ",n]}),d.jsx("h2",{id:"pdf-workflow-title",children:"Source PDF files"}),d.jsxs("p",{children:["Add PDFs for this ",n," workspace. They stay in this browser and appear as PDF 1, PDF 2, and so on."]})]}),d.jsxs("div",{className:"pdf-actions",children:[d.jsxs("label",{className:"btn primary pdf-add-control","data-testid":"label-add-pdfs",children:[d.jsx(Xm,{size:15})," Add PDFs",d.jsx("input",{type:"file",accept:"application/pdf,.pdf",multiple:!0,"aria-label":"Add PDF files",disabled:pa||u||!!h||!nt,onChange:F=>{Bt(Array.from(F.currentTarget.files??[])),F.currentTarget.value=""},"data-testid":"input-add-pdfs"})]}),d.jsxs("button",{className:"btn subtle",type:"button",onClick:()=>le({type:"all"}),disabled:!p.length,"aria-label":"Clear all saved PDFs","data-testid":"button-clear-pdfs",children:[d.jsx(Ei,{size:14})," Clear all"]})]})]}),d.jsxs("div",{className:"pdf-trust-note","data-testid":"text-pdf-local-only",children:[d.jsx(ps,{size:15}),d.jsxs("div",{className:"pdf-trust-copy",children:[d.jsxs("span",{children:[d.jsx("strong",{children:"Saved on this device only."})," PDFs are not uploaded, backed up, or synced. Clearing browser data removes them.",!nt&&" New PDFs cannot be added in this browser because duplicate checking needs a secure connection."]}),d.jsxs("details",{className:"pdf-privacy-details",children:[d.jsx("summary",{children:"Privacy and scanned PDFs"}),d.jsxs("p",{children:["Original PDFs are not changed. Searchable text and scanned pages are read in this browser. The OCR code and language files may be downloaded, but the PDF itself is not sent. PDF aliases hide file names only; names and logos printed inside the pages remain visible."," ","Download an original if you need a separate copy."]})]})]})]}),d.jsxs("div",{className:"pdf-storage-line","data-testid":"text-pdf-storage",children:[d.jsxs("span",{children:[jo(v)," of ",jo(Iu)," used (all disciplines)"]}),d.jsxs("span",{children:["Limit ",jo(qu)," per PDF"]})]}),d.jsx("div",{className:"pdf-meter",role:"progressbar","aria-label":"Local storage used","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":Math.round(Jt),children:d.jsx("span",{style:{width:`${Jt}%`}})}),d.jsx("div",{style:{height:12}}),T&&d.jsxs("div",{className:"pdf-progress",role:"status","aria-live":"polite","data-testid":"status-pdf-progress",children:[d.jsxs("div",{className:"pdf-progress-top",children:[d.jsxs("span",{children:[d.jsx(Ma,{size:12,className:"pdf-spin"})," ",T.phase==="checking"?`Checking and saving: ${T.done} of ${T.total} file(s) finished · ${T.pagesDone} page(s) verified`:`${T.currentAlias??"PDF"} · reading page ${T.pageNow??0} of ${T.pageTotal??0} for EDE`]}),d.jsx("button",{type:"button",className:"btn",onClick:Sa,"data-testid":"button-cancel-import","aria-label":"Cancel remaining imports",children:"Cancel"})]}),d.jsx("div",{className:"pdf-meter",children:d.jsx("span",{style:{width:`${T.phase==="checking"?T.done/T.total*100:(T.done+(T.pageTotal?(T.pageNow??0)/T.pageTotal:0))/T.total*100}%`}})})]}),S.length>0&&d.jsx("ul",{className:"pdf-notes","aria-live":"polite","data-testid":"list-pdf-notes",children:S.map(F=>d.jsxs("li",{className:F.kind==="info"?"info":"",role:F.kind==="error"?"alert":void 0,"data-testid":`status-pdf-note-${F.id}`,children:[F.kind==="error"?d.jsx(hs,{size:14}):d.jsx(fs,{size:14}),d.jsx("span",{children:F.text}),d.jsx("button",{type:"button","aria-label":"Dismiss message",onClick:()=>j(pe=>pe.filter(Ee=>Ee.id!==F.id)),children:d.jsx(Wm,{size:13})})]},F.id))}),d.jsxs("div",{className:"pdf-queue","aria-label":"Saved PDF files",children:[ne&&d.jsxs("div",{className:"pdf-confirm",role:"alertdialog","aria-label":"Confirm delete","data-testid":"dialog-confirm-delete",children:[d.jsx("span",{children:ne.type==="all"?`Delete all ${p.length} saved ${n} PDF(s) from this device? This cannot be undone.`:"Delete this PDF from this device? This cannot be undone."}),d.jsx("button",{type:"button",className:"btn danger","data-testid":"button-confirm-delete",onClick:()=>ne.type==="all"?void Da():void la(ne.id),children:"Delete"}),d.jsx("button",{type:"button",className:"btn","data-testid":"button-cancel-delete",onClick:()=>le(null),children:"Keep"})]}),u?d.jsxs("div",{className:"pdf-queue-empty",role:"status","data-testid":"status-pdf-loading",children:[d.jsx(Ma,{size:16,className:"pdf-spin"})," Loading saved PDFs"]}):h?d.jsxs("div",{className:"pdf-queue-empty",role:"alert","data-testid":"status-pdf-load-error",children:[d.jsx(hs,{size:16})," ",h,d.jsx("button",{type:"button",className:"btn",onClick:()=>{y(!0),Rt()},"data-testid":"button-retry-load",children:"Try again"})]}):p.length?p.map(F=>d.jsxs("div",{className:`pdf-file-row${F.id===k?" is-selected":""}`,"data-testid":`row-pdf-file-${F.id}`,children:[d.jsxs("button",{type:"button",className:"pdf-select",onClick:()=>{q(F.id),O(null),ue(1)},"aria-label":`Preview ${F.alias}`,"aria-pressed":F.id===k,"data-testid":`button-select-pdf-${F.id}`,children:[d.jsx("span",{className:"pdf-file-icon",children:d.jsx(fs,{size:17})}),d.jsxs("span",{className:"pdf-file-details",children:[d.jsx("strong",{className:"pdf-filename","data-testid":`text-pdf-name-${F.id}`,children:F.alias}),d.jsxs("span",{className:"pdf-file-meta",children:[F.pageCount," page(s) · ",jo(F.size)," · saved locally"]}),d.jsxs("span",{className:"pdf-analysis-state","data-testid":`status-ede-${F.id}`,children:["EDE: ",F.analysisStatus==="needs-review"?`${F.analysisRecordCount??0} candidate(s) · review required`:F.analysisStatus==="no-tags"?"No tag candidates found":F.analysisStatus==="extracting"?w===F.id?"Extraction in progress":"Paused · resume available":F.analysisStatus==="failed"?"Extraction failed":F.analysisStatus==="paused"?"Paused · resume available":"Not extracted yet"," · AutoCAD: not connected"]}),F.analysisStatus==="failed"&&F.analysisMessage&&d.jsx("span",{className:"pdf-analysis-state",role:"status",children:F.analysisMessage})]})]}),d.jsxs("span",{className:"pdf-row-actions",children:[F.analysisStatus!=="needs-review"&&w!==F.id&&d.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:pa,onClick:()=>{Dt(F)},"data-testid":`button-extract-ede-${F.id}`,children:[d.jsx(fs,{size:13})," ",F.analysisStatus==="failed"?"Retry EDE":F.analysisStatus==="paused"||F.analysisStatus==="extracting"?"Resume EDE":"Create EDE data"]}),(F.analysisStatus==="needs-review"||F.analysisStatus==="no-tags")&&d.jsx(ra,{className:"btn pdf-extract-btn",href:`/workspace/${n==="PFD"?"pfd":"pid"}/engineering-data?source=${encodeURIComponent(F.id)}`,children:"Open EDE"}),F.analysisStatus==="needs-review"&&d.jsxs("button",{type:"button",className:"btn pdf-extract-btn",disabled:pa,onClick:()=>{Dt(F)},"data-testid":`button-refresh-source-links-${F.id}`,children:[d.jsx(qw,{size:13})," Recheck tags & locations"]}),w===F.id&&d.jsxs("span",{className:"pdf-running-label",children:[d.jsx(Ma,{size:13,className:"pdf-spin"})," Reading"]}),d.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Preview ${F.alias}`,onClick:()=>{q(F.id),O(null),ue(1)},"data-testid":`button-preview-pdf-${F.id}`,children:d.jsx(gw,{size:15})}),d.jsx("button",{type:"button",className:"pdf-icon-btn","aria-label":`Download original source ${F.alias}`,onClick:()=>{_t(F)},"data-testid":`button-download-pdf-${F.id}`,children:d.jsx(Ms,{size:15})}),d.jsx("button",{type:"button",className:"pdf-icon-btn danger","aria-label":`Remove ${F.alias}`,onClick:()=>le({type:"one",id:F.id}),"data-testid":`button-remove-pdf-${F.id}`,children:d.jsx(Wm,{size:15})})]})]},F.id)):d.jsxs("div",{className:"pdf-queue-empty","data-testid":"empty-pdf-queue",children:[d.jsx(fs,{size:18}),d.jsxs("span",{children:["No saved PDFs for ",n]}),d.jsx("small",{children:"Add PDFs to keep them on this device. You can add several at once."})]})]}),d.jsx("div",{className:"pdf-page-summary",style:{marginTop:10},"data-testid":"text-pdf-page-summary",children:p.length?`${p.length} PDF(s) · ${fa} total page(s)`:pa?"Working on your files":"No readable PDFs saved yet"}),p.length>=100&&d.jsxs("div",{className:"pdf-trust-note",role:"note","data-testid":"text-large-batch-resume",children:[d.jsx(ps,{size:15}),d.jsxs("span",{children:["This batch contains ",p.length," PDFs and ",fa," pages. The AutoCAD runner tracks every page in a local journal beside the DWGs, so you can resume later with the same unchanged kit and output name. Progress is recorded on the Windows workstation, not in this browser."]})]}),At&&d.jsxs("div",{className:"pdf-source-box","data-testid":"panel-source-page",children:[d.jsxs("div",{className:"pdf-page-select",children:[d.jsx("label",{htmlFor:"pdf-page-picker",children:"Source page"}),d.jsx("select",{id:"pdf-page-picker",value:K,onChange:F=>ue(Number(F.target.value)),"data-testid":"select-source-page","aria-label":"Select source page",children:Array.from({length:At.pageCount},(F,pe)=>d.jsxs("option",{value:pe+1,children:["Page ",pe+1]},pe+1))}),d.jsxs("span",{children:["of ",At.pageCount," in ",At.alias]})]}),d.jsx(PE,{fileId:At.id,alias:At.alias,pageCount:At.pageCount,page:K,onPageChange:ue,loadBytes:ko,markers:qn,onMarkerClick:F=>{const pe=n==="PFD"?"pfd":"pid";window.location.assign(`/workspace/${pe}/engineering-data?source=${encodeURIComponent(At.id)}&record=${encodeURIComponent(F)}`)}})]}),d.jsxs("div",{className:"pdf-capabilities",children:[d.jsxs("div",{className:"pdf-capability-storage pdf-dxf-export",children:[d.jsx("div",{className:"capability-heading",children:d.jsx("strong",{children:"Create DXF — no AutoCAD needed"})}),d.jsxs("label",{className:"runner-project-choice",children:[d.jsx("span",{children:"Scale multiplier · 1 = PDF paper size in mm"}),d.jsx("input",{type:"number",min:"0.000001",step:"any",value:me,onChange:F=>Me(F.target.value),"aria-label":"DXF scale multiplier"})]}),d.jsx("button",{className:"btn primary",type:"button",disabled:!p.length||pa||u||fe||vt||!!h,onClick:()=>{Wa(At??void 0)},"data-testid":"button-export-dxf",children:fe?d.jsxs(d.Fragment,{children:[d.jsx(Ma,{size:14,className:"pdf-spin"})," Creating DXF…"]}):d.jsxs(d.Fragment,{children:[d.jsx(Ms,{size:14})," ",At?`${At.alias} · Download DXF pages`:"Download all DXF pages"]})}),At&&p.length>1&&d.jsx("button",{className:"btn",type:"button",disabled:pa||u||fe||vt||!!h,onClick:()=>{Wa()},"data-testid":"button-export-all-dxf",children:"All PDFs · Download DXF pages"}),d.jsx("p",{children:"One editable DXF per vector PDF page. Scanned pages are not automatically traced. This exports raw PDF geometry, not library-standard symbols. Source details may remain—review/redact before sharing."}),de&&d.jsx("p",{role:"status",className:"pdf-runner-message",children:de}),d.jsx(HE,{})]}),d.jsxs("div",{className:"pdf-capability-convert",children:[d.jsxs("div",{className:"capability-heading",children:[d.jsx("span",{className:"capability-number",children:"01"}),d.jsx("strong",{children:"Page check"})]}),d.jsx("div",{className:"pdf-page-summary","data-testid":"text-pdf-page-summary",children:p.length?`${p.length} PDF(s) · ${fa} total page(s)`:"Add PDFs to prepare an AutoCAD runner."})]}),d.jsxs("div",{className:"pdf-capability-storage",children:[d.jsxs("div",{className:"capability-heading",children:[d.jsx("span",{className:"capability-number",children:"02"}),d.jsx("strong",{children:"Local AutoCAD runner"})]}),d.jsxs("label",{className:"runner-project-choice",children:[d.jsx("span",{children:"Approved CAD mappings"}),d.jsxs("select",{value:we,disabled:lt,onChange:F=>ge(F.target.value),"aria-label":"Approved CAD mappings for this runner",children:[d.jsx("option",{value:"",children:"Legends Library only"}),re.map(F=>d.jsx("option",{value:F.id,children:F.label},F.id))]})]}),d.jsxs("div",{className:"runner-group-hint","aria-live":"polite","data-testid":"runner-mapping-inventory",children:[G?d.jsxs(d.Fragment,{children:[d.jsxs("strong",{children:[G.symbols," usable approved blocks · ",G.layers," layers · ",G.textStyles," text styles for ",n]}),G.symbols===0&&d.jsxs("p",{role:"status",children:["No compatible approved blocks: this kit cannot convert PDF symbols into approved CAD blocks. Approve ",n," or Shared symbols with an approved target layer first. Other-discipline symbols are not reused automatically."]}),G.textStyles===0&&d.jsx("p",{children:"No approved text format for this discipline: imported text will keep its PDF formatting until a compatible style is reviewed."}),G.otherDisciplineSymbols>0&&d.jsxs("p",{children:[G.otherDisciplineSymbols," approved symbol(s) belong to the other discipline and are excluded."]})]}):d.jsx("p",{children:"The mapping library could not be checked. Do not assume blocks or text formatting are available."}),d.jsx("button",{type:"button",className:"btn btn-ghost btn-small",onClick:()=>_(F=>F+1),children:"Refresh mapping counts"}),Q&&d.jsxs("p",{role:"status",children:["Local mapping counts checked at ",Q,". Refresh recounts saved approvals; it does not approve symbols."]})]}),d.jsxs("label",{className:"runner-group-choice",children:[d.jsxs("span",{children:[n," client folder for this batch"]}),d.jsxs("select",{value:ce,disabled:!gt.length||lt||vt,onChange:F=>i(F.target.value),"aria-label":`${n} client folder for title block`,children:[d.jsx("option",{value:"",children:gt.length?`Choose a ${n} client folder`:`Create a ${n} client folder first`}),gt.map(F=>d.jsx("option",{value:F.id,children:F.label},F.id))]})]}),d.jsxs("p",{className:"runner-group-hint",children:["Choose the client folder for this batch. All PDFs currently listed in this ",n," workspace will use its title block, so keep one project’s PDFs in the batch."]}),ce?d.jsxs("div",{className:"runner-title-block","aria-label":"Project title block",children:[d.jsxs("div",{className:"runner-title-block-heading",children:[d.jsxs("strong",{children:["Client title block",l&&ce===o?` · ${l}`:""]}),ze?d.jsx("span",{children:"Checking this browser…"}):he?d.jsxs("span",{children:["Saved locally · ",jo(he.bytes)]}):d.jsx("span",{children:"Required for this project"})]}),!ze&&!he&&d.jsx("p",{children:"Upload a standalone .DWG for this project. The runner attaches it as a model-space XREF at (0,0,0), rotation 0, scale 1:1, preserving its layers. Use matching drawing units."}),d.jsx("input",{ref:qe,className:"runner-title-block-file",type:"file",accept:".dwg,application/acad","aria-label":"Choose project title block DWG",onChange:F=>{pt(F.currentTarget.files?.[0])}}),d.jsxs("div",{className:"runner-title-block-actions",children:[d.jsx("button",{className:"btn",type:"button",disabled:ze||lt||vt,onClick:()=>qe.current?.click(),children:lt?d.jsxs(d.Fragment,{children:[d.jsx(Ma,{size:14,className:"pdf-spin"})," Saving locally…"]}):d.jsxs(d.Fragment,{children:[d.jsx(Xm,{size:14})," ",he?"Replace title block DWG":"Upload title block DWG"]})}),he&&d.jsx("button",{className:"btn",type:"button",disabled:lt||vt,onClick:()=>{Ia()},children:"Remove"})]}),d.jsx("p",{className:"runner-title-block-note",children:"The file stays in this browser and is added only to this client folder’s local runner. Text already in the title block is kept as-is. The output folder will contain a companion DWG; keep it beside the generated pages."}),jt&&d.jsx("p",{role:"status",className:"pdf-runner-message",children:jt})]}):d.jsx("p",{className:"runner-title-block-empty",children:gt.length?`Select a ${n} client folder above to upload or use its title block.`:"Create a Technology, Project or Proposal, and Client folder to use a client title block."}),d.jsx("button",{className:"btn primary",type:"button",disabled:!p.length||pa||u||vt||ze||lt||!!ce&&!he||!!h,"aria-describedby":"runner-description",onClick:()=>{ia()},"data-testid":"button-convert-to-dwg",children:vt?d.jsxs(d.Fragment,{children:[d.jsx(Ma,{size:14,className:"pdf-spin"})," Preparing…"]}):d.jsxs(d.Fragment,{children:[d.jsx(Xw,{size:14})," Download AutoCAD batch runner"]})}),d.jsx("p",{id:"runner-description",children:"The ZIP contains the saved PDFs, only individually exported approved blocks, and—when a PFD/P&ID group is selected—its title block DWG. It does not include original mapping source DWGs. Run it in Windows AutoCAD. Unmatched symbols retain source geometry or use an approved same-category fallback with a red review cloud and source-page reference. A local journal tracks each page and lets the same unchanged batch resume without overwriting completed DWGs."}),$&&d.jsx("p",{role:"status",className:"pdf-runner-message",children:$})]})]}),d.jsxs("div",{className:"pdf-final-status",role:"note","data-testid":"text-conversion-unavailable",children:[d.jsxs("strong",{children:[d.jsx(_w,{size:13,style:{verticalAlign:"-2px"}})," AutoCAD 2020 is not connected to this browser."]})," ","DXF vector export runs directly in this browser. Native DWG still requires the downloaded helper to run in Windows AutoCAD; the browser does not connect to AutoCAD."]}),d.jsx(n2,{discipline:n,onAddPdfs:Bt,clientFolderId:o||void 0,clientFolderLabel:l||void 0})]})}function Zg({discipline:n}){const[s]=M.useState(()=>{try{return{hierarchy:jE(),recovery:null}}catch(ge){const ce=ge instanceof Io?ge:new Io("Saved groups could not be loaded from this browser.");return{hierarchy:wu(),recovery:{message:ce.message,rawValue:ce.rawValue}}}}),[o,l]=M.useState(s.hierarchy),[i,p]=M.useState(s.recovery),[m,u]=M.useState(""),[y,h]=M.useState(null),[g,v]=M.useState(""),[E,S]=M.useState(null),j=o[n],T=n==="pfd"?"PFD":"P&ID",D=Su(j,E),w=D&&(D.kind==="client"||D.kind==="legacy")?D.id:"",N=w?Iy(j).find(ge=>ge.id===w)?.label??D?.name??"":"",k=ge=>S(ge||null);M.useEffect(()=>{if(!i)try{RE(o),u("")}catch(ge){u(ge instanceof Error?ge.message:"Groups could not be saved in this browser.")}},[o,i]);const q=(ge,ce,V=[])=>({id:globalThis.crypto?.randomUUID?.()??`group-${Date.now()}-${Math.random().toString(36).slice(2)}`,name:ge,kind:ce,expanded:!0,children:V}),x=(ge,ce)=>{v(ce),h(ge)},O=()=>{const ge=q("New technology","technology",[q("Projects","projects"),q("Proposals","proposals")]);l(ce=>({...ce,[n]:[...ce[n],ge]})),x(ge.id,ge.name),S(ge.id)},R=ge=>{const ce=Su(j,ge);if(!ce)return;const V=ce.kind==="projects"?"project":ce.kind==="proposals"?"proposal":ce.kind==="project"||ce.kind==="proposal"?"client":null;if(!V)return;const ye=q(V==="project"?"New project":V==="proposal"?"New proposal":"New client",V);l(Ae=>({...Ae,[n]:gi(Ae[n],ge,_=>({..._,expanded:!0,children:[..._.children,ye]}))})),x(ye.id,ye.name),S(ye.id)},P=ge=>{const ce=g.trim();if(!ce||ce.length>Si){u(`Folder names must be 1–${Si} characters.`),h(null);return}l(V=>({...V,[n]:gi(V[n],ge,re=>({...re,name:ce}))})),h(null),u("")},K=()=>h(null),ue=ge=>l(ce=>({...ce,[n]:gi(ce[n],ge,V=>({...V,expanded:!V.expanded}))})),ne=ge=>{window.confirm(`Delete “${ge.name}” and all folders inside it? Saved title blocks and CAD sources are not deleted.`)&&(My(ge,E)&&S(null),xb(ge,y)&&h(null),l(ce=>({...ce,[n]:Py(ce[n],ge.id)})))},le=()=>{if(i?.rawValue===null||i?.rawValue===void 0)return;const ge=new Blob([i.rawValue],{type:"application/json;charset=utf-8"}),ce=URL.createObjectURL(ge),V=document.createElement("a");V.href=ce,V.download="mapping-studio-hierarchy-backup.json",V.click(),window.setTimeout(()=>URL.revokeObjectURL(ce),1e3)},we=()=>{if(window.confirm("Clear the unreadable hierarchy saved in this browser? This cannot be undone. Download a backup first if you may need the saved data."))try{window.localStorage.removeItem(Wu),window.localStorage.removeItem(Oy),l(wu()),p(null),u("")}catch{u("Browser storage could not be cleared. The saved hierarchy remains locked and unchanged.")}};return d.jsxs("main",{className:"hierarchy-page","data-discipline":n,children:[d.jsxs("header",{className:"hierarchy-topbar",children:[d.jsxs(ra,{href:"/",className:"studio-wordmark","data-testid":"link-home",children:[d.jsx("span",{className:"wordmark-icon",children:"PM"})," Mapping Studio"]}),d.jsxs("div",{className:"hierarchy-top-actions",children:[d.jsxs("span",{className:"local-chip",children:[d.jsx("span",{className:"local-dot"}),"Saved on this device"]}),d.jsxs(ra,{href:"/",className:"btn subtle","data-testid":"link-discipline-selection",children:[d.jsx(uy,{size:14})," Disciplines"]})]})]}),d.jsxs("div",{className:"hierarchy-frame",children:[d.jsxs("aside",{className:"hierarchy-sidebar",children:[d.jsx("div",{className:"sidebar-label",children:"DISCIPLINES"}),d.jsxs(ra,{href:"/workspace/pfd",className:`discipline-nav ${n==="pfd"?"active":""}`,"data-testid":"nav-pfd",children:[d.jsx(kw,{size:16})," PFD"]}),d.jsxs(ra,{href:"/workspace/pid",className:`discipline-nav ${n==="pid"?"active":""}`,"data-testid":"nav-pid",children:[d.jsx(Lo,{size:16})," P&ID"]}),d.jsxs("div",{className:"sidebar-local-note",children:[d.jsx(ps,{size:14}),d.jsx("span",{children:"PFD and P&ID groups stay separate."})]})]}),d.jsxs("section",{className:"hierarchy-main","aria-label":`${T} workspace`,children:[d.jsxs("div",{className:"hierarchy-heading",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"eyebrow",children:[T," workspace"]}),d.jsx("h1",{children:T}),d.jsx("p",{children:"Organize technology, project/proposal and client folders. Common standards stay in the company library."})]}),d.jsxs("div",{className:"hierarchy-heading-actions",children:[d.jsxs(ra,{href:`/workspace/${n}/engineering-data`,className:"btn edm-entry-link","data-testid":`link-engineering-data-${n}`,children:[d.jsx(Hu,{size:14})," Engineering data"]}),d.jsxs("button",{className:"btn primary",onClick:O,disabled:!!i,"data-testid":"button-add-group",children:[d.jsx(Bo,{size:15})," New technology"]})]})]}),i&&d.jsxs("div",{className:"hierarchy-recovery",role:"alert","data-testid":"status-hierarchy-recovery",children:[d.jsxs("div",{className:"recovery-title",children:[d.jsx(hs,{size:17}),d.jsx("strong",{children:"Saved groups need recovery"})]}),d.jsxs("p",{children:[i.message," Editing is disabled to protect the saved data."]}),i.rawValue!==null?d.jsx("button",{className:"btn",onClick:le,"data-testid":"button-download-hierarchy-backup",children:"Download raw backup"}):d.jsx("p",{className:"recovery-unavailable",children:"A raw backup is unavailable because browser storage could not be read."}),d.jsx("button",{className:"btn danger",onClick:we,"data-testid":"button-clear-hierarchy-storage",children:"Clear saved data and start over"})]}),m&&!i&&d.jsxs("div",{className:"storage-banner",role:"alert","data-testid":"status-hierarchy-storage",children:[d.jsx(hs,{size:15}),m]}),d.jsxs("div",{className:"hierarchy-panel",children:[d.jsxs("div",{className:"tree-head",children:[d.jsx("span",{children:"TECHNOLOGY · PROJECTS · PROPOSALS · CLIENTS"}),d.jsxs("span",{"data-testid":"text-group-count",children:[xu(j)," ",xu(j)===1?"folder":"folders"]})]}),j.length===0?d.jsxs("div",{className:"hierarchy-empty","data-testid":"empty-hierarchy",children:[d.jsx("div",{className:"empty-folder",children:d.jsx(yu,{size:23})}),d.jsx("strong",{children:i?"Folders are locked":"No technology folders yet"}),d.jsx("p",{children:i?"Recover or clear the saved data to continue.":"Create a technology folder, then add projects or proposals and their clients."}),!i&&d.jsxs("button",{className:"btn",onClick:O,"data-testid":"button-create-first-group",children:[d.jsx(Bo,{size:14})," Create first technology"]})]}):d.jsx("div",{className:"tree-list",role:"tree","aria-label":`${T} project folders`,children:j.map(ge=>d.jsx(Sb,{node:ge,depth:0,selectedId:E,editingId:y,editName:g,setEditName:v,onSelect:S,onToggle:ue,onAdd:R,onRename:x,onCommit:P,onCancel:K,onDelete:ne,disabled:!!i},ge.id))})]}),w&&d.jsxs("div",{className:"hierarchy-client-context",role:"status","data-testid":"selected-client-folder",children:[d.jsx(yu,{size:15}),d.jsxs("span",{children:[d.jsx("strong",{children:N})," selected. Its title block and client source library will be used below."]})]}),d.jsxs("div",{className:"hierarchy-footnote",children:[d.jsx(ps,{size:14}),d.jsx("span",{children:"Saved in this browser. PFD and P&ID folder trees stay separate."})]}),d.jsx(tD,{discipline:n==="pfd"?"PFD":"P&ID",groups:j,selectedClientId:w,selectedClientLabel:N,onSelectClient:k},n)]})]})]})}function xb(n,s){return s!==null&&(n.id===s||n.children.some(o=>xb(o,s)))}function Sb({node:n,depth:s,selectedId:o,editingId:l,editName:i,setEditName:p,onSelect:m,onToggle:u,onAdd:y,onRename:h,onCommit:g,onCancel:v,onDelete:E,disabled:S}){const j=l===n.id,T=["projects","proposals","project","proposal"].includes(n.kind),D=!["projects","proposals"].includes(n.kind),w=n.kind==="projects"?"Add project":n.kind==="proposals"?"Add proposal":n.kind==="project"||n.kind==="proposal"?"Add client":"Add folder",N={technology:"Technology",projects:"Projects",proposals:"Proposals",project:"Project",proposal:"Proposal",client:"Client",legacy:"Existing group"},k=M.useRef(null),q=()=>{k.current!==n.id&&(k.current=n.id,g(n.id))},x=()=>{k.current!==n.id&&(k.current=n.id,v())};return d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:`tree-row ${o===n.id?"selected":""}`,role:"treeitem","aria-expanded":n.children.length?n.expanded:void 0,"aria-level":s+1,style:{"--tree-depth":s},"data-testid":`tree-group-${n.id}`,children:[d.jsx("button",{className:"tree-toggle","aria-label":`${n.expanded?"Collapse":"Expand"} ${n.name}`,disabled:S,onClick:()=>u(n.id),"data-testid":`button-toggle-group-${n.id}`,children:n.expanded?d.jsx(us,{size:15}):d.jsx(Vu,{size:15})}),d.jsx(yu,{className:"tree-folder",size:16}),j?d.jsx("input",{autoFocus:!0,maxLength:Si,className:"tree-rename-input","aria-label":"Folder name",value:i,disabled:S,onChange:O=>p(O.target.value),onFocus:()=>{k.current=null},onBlur:q,onKeyDown:O=>{O.key==="Enter"&&q(),O.key==="Escape"&&(O.preventDefault(),x())},"data-testid":`input-rename-group-${n.id}`}):d.jsx("button",{className:"tree-name",disabled:S,onClick:()=>m(n.id),onDoubleClick:()=>D&&h(n.id,n.name),title:"Select folder; double-click to rename","data-testid":`button-select-group-${n.id}`,children:n.name}),d.jsx("span",{className:"tree-kind-badge",children:N[n.kind]}),d.jsxs("span",{className:"tree-actions",children:[T&&d.jsx("button",{"aria-label":`${w} under ${n.name}`,title:w,disabled:S,onClick:()=>y(n.id),"data-testid":`button-add-subgroup-${n.id}`,children:d.jsx(Bo,{size:14})}),D&&d.jsx("button",{"aria-label":`Rename ${n.name}`,title:"Rename folder",disabled:S,onClick:()=>h(n.id,n.name),"data-testid":`button-rename-group-${n.id}`,children:d.jsx(Bw,{size:13})}),D&&d.jsx("button",{"aria-label":`Delete ${n.name}`,title:"Delete folder",disabled:S,onClick:()=>E(n),"data-testid":`button-delete-group-${n.id}`,children:d.jsx(Ei,{size:13})})]})]}),n.expanded&&n.children.map(O=>d.jsx(Sb,{node:O,depth:s+1,selectedId:o,editingId:l,editName:i,setEditName:p,onSelect:m,onToggle:u,onAdd:y,onRename:h,onCommit:g,onCancel:v,onDelete:E,disabled:S},O.id))]})}function aD({order:n,hidden:s,onChange:o}){const l=(i,p)=>{const m=[...n];[m[i],m[i+p]]=[m[i+p],m[i]],o(m,s)};return d.jsxs("details",{className:"edm-column-picker",children:[d.jsxs("summary",{children:["Columns (",n.length-s.length,")"]}),d.jsxs("div",{className:"edm-column-options",children:[d.jsx("p",{children:"Use these checkboxes to show or hide columns. The filter icon in each heading filters row values, including (Blanks), and does not hide the column."}),n.map((i,p)=>d.jsxs("div",{className:"edm-column-option",children:[d.jsxs("label",{children:[d.jsx("input",{type:"checkbox",checked:!s.includes(i),"aria-label":`Show ${bt[i]}`,disabled:!s.includes(i)&&s.length===n.length-1,onChange:()=>o(n,s.includes(i)?s.filter(m=>m!==i):[...s,i])}),bt[i]]}),d.jsx("button",{type:"button",disabled:p===0,onClick:()=>l(p,-1),"aria-label":`Move ${bt[i]} up`,children:d.jsx(rw,{size:14})}),d.jsx("button",{type:"button",disabled:p===n.length-1,onClick:()=>l(p,1),"aria-label":`Move ${bt[i]} down`,children:d.jsx(ew,{size:14})})]},i)),d.jsx("button",{className:"btn subtle",type:"button",onClick:()=>o([...Pn],[]),children:"Reset columns"})]})]})}function Qg(n){const s=Math.min(272,window.innerWidth-16),o=Math.min(360,window.innerHeight-16),l=Math.max(8,Math.min(n.left,window.innerWidth-s-8)),i=n.bottom+4;return{top:i+o<=window.innerHeight-8?i:Math.max(8,n.top-o-4),left:l}}function Jg({label:n,options:s,selectedValues:o,onApply:l}){const i=M.useRef(null),p=M.useRef(null),m=M.useRef(null),[u,y]=M.useState(!1),[h,g]=M.useState(null),[v,E]=M.useState([]),[S,j]=M.useState(""),T=o!==void 0,D=M.useMemo(()=>s.map(R=>R.value),[s]),w=M.useMemo(()=>{const R=S.trim().toLowerCase();return R?s.filter(P=>(P.value||"(Blanks)").toLowerCase().includes(R)):s},[s,S]),N=s.reduce((R,P)=>R+Number(v.includes(P.value)),0),k=s.length>0&&N===s.length;M.useEffect(()=>{m.current&&(m.current.indeterminate=N>0&&N<s.length)},[v,s.length,N]),M.useEffect(()=>{if(!u)return;const R=()=>{const ue=i.current?.getBoundingClientRect();ue&&g(Qg(ue))},P=ue=>{const ne=ue.target;!p.current?.contains(ne)&&!i.current?.contains(ne)&&y(!1)},K=ue=>{ue.key==="Escape"&&y(!1)};return R(),document.addEventListener("pointerdown",P),document.addEventListener("keydown",K),window.addEventListener("resize",R),window.addEventListener("scroll",R,!0),()=>{document.removeEventListener("pointerdown",P),document.removeEventListener("keydown",K),window.removeEventListener("resize",R),window.removeEventListener("scroll",R,!0)}},[u]);const q=()=>{if(u){y(!1);return}const R=i.current?.getBoundingClientRect();R&&g(Qg(R)),E(o?[...o]:D),j(""),y(!0)},x=R=>{E(P=>P.includes(R)?P.filter(K=>K!==R):[...P,R])},O=()=>{l(v),y(!1)};return d.jsxs(d.Fragment,{children:[d.jsxs("button",{ref:i,type:"button",className:`edm-column-filter-trigger${T?" active":""}`,title:`${T?"Filtered":"Filter"} ${n}`,"aria-label":`${T?"Edit filter for":"Filter"} ${n}`,"aria-expanded":u,onClick:q,"data-testid":`button-filter-${n.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`,children:[d.jsx(Cw,{size:12}),d.jsx(us,{size:10})]}),u&&h&&Li.createPortal(d.jsxs("div",{ref:p,className:"edm-column-filter-menu",style:{top:h.top,left:h.left},role:"dialog","aria-label":`${n} filter`,"data-testid":"menu-column-filter",children:[d.jsxs("strong",{className:"edm-column-filter-title",children:["Filter: ",n]}),d.jsxs("label",{className:"edm-column-filter-search",children:[d.jsx(Fo,{size:14}),d.jsx("input",{value:S,onChange:R=>j(R.target.value),placeholder:"Search values…","aria-label":`Search ${n} values`})]}),d.jsxs("label",{className:"edm-column-filter-select-all",children:[d.jsx("input",{ref:m,type:"checkbox",checked:k,disabled:!s.length,onChange:()=>E(k?[]:D)}),d.jsx("span",{children:"Select all"})]}),d.jsxs("div",{className:"edm-column-filter-options",role:"group","aria-label":`${n} values`,children:[!w.length&&d.jsx("p",{className:"edm-column-filter-empty",children:s.length?"No matching values.":"No values in this drawing yet."}),w.map(R=>d.jsxs("label",{className:"edm-column-filter-option",children:[d.jsx("input",{type:"checkbox",checked:v.includes(R.value),onChange:()=>x(R.value)}),d.jsx("span",{children:R.value||"(Blanks)"}),d.jsx("small",{children:R.count})]},JSON.stringify(R.value)))]}),d.jsxs("div",{className:"edm-column-filter-actions",children:[d.jsx("button",{type:"button",className:"edm-column-filter-clear",disabled:!T,onClick:()=>{l(void 0),y(!1)},children:"Clear filter"}),d.jsx("span",{}),d.jsx("button",{type:"button",onClick:()=>y(!1),children:"Cancel"}),d.jsx("button",{type:"button",className:"apply",disabled:!s.length,onClick:O,children:"Apply"})]})]}),document.body)]})}function Db(n){return{headers:["#","Object type",...n.fields.map(s=>bt[s])],rows:n.rows.map((s,o)=>[o+1,s.type,...n.fields.map(l=>hn(s,l))])}}function Ab(n){return n.groups.map(s=>{const o=new Map;for(const l of n.rows){const i=hn(l,s)||"—";o.set(i,(o.get(i)??0)+1)}return{field:s,label:bt[s],values:[...o].map(([l,i])=>({value:l,count:i}))}})}function nD(n){const s=Db(n);return wb(s.headers,s.rows)}async function sD(n,s){const{default:o}=await Mn(async()=>{const{default:g}=await import("./exceljs.min-BtngFf37.js").then(v=>v.e);return{default:g}},__vite__mapDeps([2,1])),l=new o.Workbook;l.creator="gaurav.cbiindia";const i=l.addWorksheet("Engineering data",{pageSetup:{orientation:"landscape",fitToPage:!0,fitToWidth:1,fitToHeight:0}}),p=Db(n),m=Ab(n),u=p.headers.length;["Engineering Data Editor",`${s.discipline} · ${s.drawing}${s.revision?` · ${s.revision}`:""} · ${n.rows.length} records`,`Object type: ${s.filter} · Search: ${s.search||"(none)"} · Sort: ${s.sort}`,...m.map(g=>{const v=g.values.map(({value:E,count:S})=>`${E} (${S})`).join(" · ");return`${g.label}: ${v.length>1500?v.slice(0,1500)+"… (see Group summaries sheet)":v}`})].forEach((g,v)=>{const E=i.addRow([g]);i.mergeCells(E.number,1,E.number,u),E.height=v===0?30:32,E.getCell(1).font={name:"Calibri",size:v===0?16:10,bold:v===0,color:{argb:v===0?"FFF0F0E8":"FF405A55"}},E.getCell(1).fill={type:"pattern",pattern:"solid",fgColor:{argb:v===0?"FF203940":"FFF9F8F2"}},E.getCell(1).alignment={vertical:"middle",wrapText:!0}});const h=i.addRow(p.headers);if(h.height=30,h.eachCell(g=>{g.font={name:"Calibri",bold:!0,size:10,color:{argb:"FF405A55"}},g.fill={type:"pattern",pattern:"solid",fgColor:{argb:"FFF0F1E9"}},g.alignment={vertical:"middle",wrapText:!0},g.border={bottom:{style:"thin",color:{argb:"FFD9DED5"}}}}),p.rows.forEach((g,v)=>{const E=i.addRow(g);E.height=30,E.eachCell({includeEmpty:!0},(S,j)=>{S.numFmt=j===1?"0":"@",S.font={name:j>2&&n.fields[j-3]==="itemTag"?"Consolas":"Calibri",size:10,color:{argb:"FF405A55"}},S.alignment={vertical:"middle",wrapText:!0},S.fill={type:"pattern",pattern:"solid",fgColor:{argb:v%2?"FFF2F5EE":"FFFBFAF6"}},S.border={right:{style:"thin",color:{argb:"FFECEEE8"}},bottom:{style:"thin",color:{argb:"FFE7E9E2"}}}})}),i.columns.forEach((g,v)=>{const E=n.fields[v-2];g.width=v===0?7:v===1?18:E==="notes"?52:E==="description"||E==="connection"?38:Math.max(18,p.headers[v].length+3)}),i.views=[{state:"frozen",ySplit:h.number,xSplit:2}],i.autoFilter={from:{row:h.number,column:1},to:{row:h.number+p.rows.length,column:u}},i.pageSetup.printTitlesRow=`${h.number}:${h.number}`,i.headerFooter.oddFooter="© gaurav.cbiindia | &P of &N",m.length){const g=l.addWorksheet("Group summaries");g.columns=[{header:"Group field",width:25},{header:"Value",width:42},{header:"Records",width:12}],m.forEach(v=>v.values.forEach(({value:E,count:S})=>g.addRow([v.label,E,S]))),g.getRow(1).font={bold:!0},g.views=[{state:"frozen",ySplit:1}],g.autoFilter="A1:C1"}return new Uint8Array(await l.xlsx.writeBuffer())}function Tb(n,s){const o=String(s==="type"?n.type:hn(n,s));return o.trim()?o:""}function rD(n,s){const o=new Map;for(const l of n){const i=Tb(l,s);o.set(i,(o.get(i)??0)+1)}return[...o.entries()].map(([l,i])=>({value:l,count:i})).sort((l,i)=>l.value===""?i.value===""?0:1:i.value===""?-1:l.value.localeCompare(i.value,void 0,{numeric:!0,sensitivity:"base"}))}function ey(n,s){return Object.entries(s).every(([o,l])=>l===void 0||l.includes(Tb(n,o)))}const oD=["All types",...Ho],lD=["type",...Pn],Cb="pid-mapping-studio:engineering-column-widths:v1",Fu=44,zu=720,iD=n=>n==="rowNumber"?44:n==="type"?154:n==="itemTag"?250:n==="notes"?300:n==="description"||n==="stableId"?220:n==="drawingRef"?180:n==="sourcePage"?100:n==="reviewStatus"?150:136;function cD(){try{const n=JSON.parse(window.localStorage.getItem(Cb)??"{}");return!n||typeof n!="object"||Array.isArray(n)?{}:Object.fromEntries(Object.entries(n).filter(s=>typeof s[1]=="number"&&Number.isFinite(s[1])).map(([s,o])=>[s,Math.max(Fu,Math.min(zu,o))]))}catch{return{}}}function ty(n){try{window.localStorage.setItem(Cb,JSON.stringify(n))}catch{}}const dD=n=>n.split(/\s+/).map(s=>s[0]).join("").slice(0,2).toUpperCase();function ay({discipline:n}){const[s]=M.useState(()=>{try{return{drawings:Go(n),raw:Cr(n),error:""}}catch{return{drawings:[],raw:null,error:"Saved engineering data could not be read. Editing is blocked to protect it. Export a raw backup before recovery."}}}),[o,l]=M.useState(s.drawings),i=M.useRef(o),p=M.useRef(!0),m=M.useRef(s.raw),[u,y]=M.useState(o[0]?.id??""),h=o.find(C=>C.id===u)??o[0]??{id:"",name:"No drawing selected",revision:"",rows:[]};M.useEffect(()=>{const C=new URLSearchParams(window.location.search).get("source"),Y=C?o.find(te=>te.sourcePdfId===C):void 0;Y&&Y.id!==u&&y(Y.id)},[o,u]),M.useEffect(()=>{_({}),O(""),ue("All types"),le(0)},[u,n]);const g=h.rows,[v,E]=M.useState(g[0]?.id??""),[S,j]=M.useState(""),[T,D]=M.useState("Rev 0"),[w,N]=M.useState(""),[k,q]=M.useState("Equipment"),[x,O]=M.useState(""),[R,P]=M.useState(""),[K,ue]=M.useState("All types"),[ne,le]=M.useState(0),[we,ge]=M.useState(12),[ce,V]=M.useState({field:"itemTag",direction:1}),[re,ye]=M.useState([]),[Ae,_]=M.useState({}),[Q,U]=M.useState([...Pn]),[G,oe]=M.useState([]),[he,be]=M.useState(cD),ze=M.useRef(he),Ie=M.useRef(null),lt=M.useRef(null),[ft,jt]=M.useState("records"),Je=Q.filter(C=>!G.includes(C)),vt=["rowNumber","type",...Je],ua=C=>he[C]??iD(C),$=vt.reduce((C,Y)=>C+ua(Y),0),[ie,fe]=M.useState(!1),[B,de]=M.useState(""),[je,me]=M.useState(""),[Me,Be]=M.useState(s.error),qe=(C,Y,te=!1)=>{const De={...ze.current,[C]:Math.max(Fu,Math.min(zu,Math.round(Y)))};ze.current=De,be(De),te&&ty(De)},Te=C=>{const Y=document.createElement("canvas").getContext("2d"),te=Ie.current?getComputedStyle(Ie.current).font:"";Y&&(Y.font=te||"12px sans-serif");const De=C==="rowNumber"?"#":C==="type"?"Object type":bt[C],Pe=C==="rowNumber"?[]:C==="type"?g.map(wt=>wt.type):g.map(wt=>hn(wt,C)),Ne=wt=>wt.split(/\r?\n/).reduce((ea,Aa)=>Math.max(ea,Y?Y.measureText(Aa||"—").width:Aa.length*7),0),_e=Pe.reduce((wt,ea)=>Math.max(wt,Ne(ea)),Ne(De));qe(C,_e+(C==="itemTag"?158:C==="rowNumber"?18:54),!0)},Qt=(C,Y)=>{Y.preventDefault(),Y.stopPropagation(),Y.currentTarget.setPointerCapture(Y.pointerId),lt.current={column:C,pointerId:Y.pointerId,startX:Y.clientX,startWidth:ua(C)}},xe=(C,Y)=>{const te=lt.current;!te||te.column!==C||te.pointerId!==Y.pointerId||(Y.preventDefault(),qe(C,te.startWidth+Y.clientX-te.startX))},Ke=(C,Y)=>{const te=lt.current;!te||te.column!==C||te.pointerId!==Y.pointerId||(lt.current=null,ty(ze.current),Y.currentTarget.hasPointerCapture(Y.pointerId)&&Y.currentTarget.releasePointerCapture(Y.pointerId))},nt=(C,Y)=>{Y.key==="Enter"?(Y.preventDefault(),Te(C)):(Y.key==="ArrowLeft"||Y.key==="ArrowRight")&&(Y.preventDefault(),qe(C,ua(C)+(Y.key==="ArrowRight"?16:-16),!0))},gt=(C,Y)=>d.jsx("span",{className:"edm-column-resize-handle",role:"separator","aria-orientation":"vertical","aria-label":`Resize ${Y} column`,"aria-valuenow":ua(C),"aria-valuemin":Fu,"aria-valuemax":zu,title:"Drag to resize · double-click to fit text",tabIndex:0,onPointerDown:te=>Qt(C,te),onPointerMove:te=>xe(C,te),onPointerUp:te=>Ke(C,te),onPointerCancel:te=>Ke(C,te),onDoubleClick:te=>{te.preventDefault(),te.stopPropagation(),Te(C)},onKeyDown:te=>nt(C,te),"data-testid":`resize-column-${C}`});M.useEffect(()=>{p.current=!0;const C=Y=>{if(Y.key===`pid-mapping-studio:engineering-workspace:v2:${n}`)try{const te=Go(n);i.current=te,l(te),m.current=Cr(n),Be("")}catch{Be("Saved data changed and could not be read. Reload this page before editing.")}};return window.addEventListener("storage",C),()=>{p.current=!1,window.removeEventListener("storage",C)}},[n]);const Ce=g.find(C=>C.id===v)??null;M.useEffect(()=>{const C=new URLSearchParams(window.location.search).get("record");if(!C)return;let Y=C;try{Y=tf(C)}catch{}const te=g.find(De=>De.id===Y);te&&te.id!==v&&E(te.id)},[g,v]);const Rt=M.useMemo(()=>{const C=x.trim().toLowerCase();return Object.fromEntries(lD.map(Y=>{const te={...Ae};delete te[Y];const De=g.filter(Pe=>(K==="All types"||Pe.type===K)&&(!C||Object.values(Pe).join(" ").toLowerCase().includes(C))&&ey(Pe,te));return[Y,rD(De,Y)]}))},[g,x,K,Ae]),Gt=M.useMemo(()=>{const C=x.trim().toLowerCase();return g.filter(Y=>(K==="All types"||Y.type===K)&&(!C||Object.values(Y).join(" ").toLowerCase().includes(C))&&ey(Y,Ae))},[g,x,K,Ae]),$t=M.useMemo(()=>[...Gt].sort((C,Y)=>{for(const te of re){const De=hn(C,te).localeCompare(hn(Y,te)||"—",void 0,{numeric:!0});if(De)return De}return hn(C,ce.field).localeCompare(hn(Y,ce.field),void 0,{numeric:!0})*ce.direction}),[Gt,ce,re]),Bt=Math.max(1,Math.ceil($t.length/we)),Dt={fields:Je,rows:$t,groups:re},Sa=Ab(Dt),la=$t.slice(ne*we,(ne+1)*we);M.useEffect(()=>{la.length&&!la.some(C=>C.id===v)?E(la[0].id):!la.length&&v&&E("")},[la,v]),M.useEffect(()=>le(C=>Math.min(C,Bt-1)),[Bt]);const Da=C=>{if(s.error)return!1;try{return m.current=$u(n,C,m.current),i.current=C,l(C),Be(""),!0}catch(Y){return Be(Y instanceof Error&&Y.name!=="QuotaExceededError"?Y.message:"Device storage is full or unavailable. This change was not saved. Download a backup and free space."),!1}},_t=C=>Da(o.map(Y=>Y.id===h.id?{...Y,rows:C}:Y)),pt=(C,Y,te)=>{_t(g.map(De=>De.id===C?{...De,[Y]:te}:De))},Ia=C=>{C.preventDefault();const Y=S.trim();if(!Y||o.some(De=>De.name.toLowerCase()===Y.toLowerCase())){Be("Enter a new, unique drawing reference.");return}const te={id:crypto.randomUUID(),name:Y,revision:T.trim()||"Rev 0",rows:[]};Da([...o,te])&&(y(te.id),j(""),le(0))},ia=C=>{if(C.preventDefault(),!h.id)return;const Y=af(k,w,h.name);if(_t([...g,Y])){N(""),O(""),ue("All types"),V({field:"itemTag",direction:1}),ye([]);const te=[...g,Y].sort((De,Pe)=>De.itemTag.localeCompare(Pe.itemTag,void 0,{numeric:!0})).findIndex(De=>De.id===Y.id);le(Math.floor(te/we)),E(Y.id)}},Wa=()=>{!Ce||!window.confirm(`Delete record ${Ce.itemTag}? This cannot be undone without a backup.`)||_t(g.filter(C=>C.id!==Ce.id))&&E("")},At=async(C,Y)=>{if(C.size>5*1024*1024){Be("Import a file smaller than 5 MB.");return}try{const te=h.id,De=await C.text();if(!p.current)return;if(Y==="csv"){const Pe=i.current.find(_e=>_e.id===te);if(!Pe)throw new Error("The target drawing no longer exists. Choose a drawing and try again.");const Ne=_2(De,Pe.name);Da(i.current.map(_e=>_e.id===te?{..._e,rows:[..._e.rows,...Ne]}:_e))&&(O(""),ue("All types"),le(0))}else{const Pe=j2(De,n);Da([...i.current,...Pe])&&(y(Pe[0]?.id??h.id),le(0))}}catch(te){Be(te instanceof Error?te.message:"This file could not be imported. No records were changed.")}},qn=C=>V(Y=>({field:C,direction:Y.field===C&&Y.direction===1?-1:1})),fa=(C,Y)=>{const te=Rt[C].map(Pe=>Pe.value),De=Y!==void 0&&te.every(Pe=>Y.includes(Pe))&&Y.length===te.length;_(Pe=>{const Ne={...Pe};return Y===void 0||De?delete Ne[C]:Ne[C]=Y,Ne}),le(0)},pa=C=>ye(Y=>Y.includes(C)?Y:[...Y,C]),Jt=C=>{C.preventDefault();const Y=C.dataTransfer.getData("text/engineering-field");Pn.includes(Y)&&pa(Y)},F=C=>{const Y=Math.max(0,Math.min(Bt-1,C));le(Y);const te=$t.slice(Y*we,(Y+1)*we)[0];te&&E(te.id)},pe=C=>{y(C),O(""),le(0)},Ee=async(C,Y=!1)=>{if(ie)return;const te=Y?{fields:Pn,rows:o.flatMap(Ne=>Ne.rows),groups:[]}:Dt,De=Y?"all-records":"current-view",Pe={discipline:n==="pid"?"P&ID":"PFD",drawing:Y?"All drawings":h.name,revision:Y?void 0:h.revision,filter:Y?"All types":K,search:Y?"":x.trim(),sort:Y?"Drawing order":`${bt[ce.field]} ${ce.direction===1?"ascending":"descending"}`};fe(!0),de(""),me("");try{const Ne=C==="csv"?nD(te):await sD(te,Pe);mi(`engineering-${n}-${De}.${C}`,Ne,C==="csv"?"text/csv;charset=utf-8":"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"),p.current&&de(`Prepared ${C==="csv"?"CSV":"Excel"}: ${te.rows.length} records · ${Y?"all records":"current view"}.`)}catch(Ne){p.current&&me(Ne instanceof Error?Ne.message:"Export could not be prepared. Your saved records have not changed.")}finally{p.current&&fe(!1)}};return d.jsxs("main",{className:"edm-page","data-mobile-panel":ft,children:[d.jsxs("header",{className:"edm-topbar",children:[d.jsxs(ra,{href:`/workspace/${n}`,className:"edm-brand","data-testid":"link-edm-workspace",children:[d.jsx("span",{className:"edm-mark",children:"ED"}),d.jsxs("span",{children:["Engineering Data Manager",d.jsx("small",{children:"Mapping Studio / browser-local workspace"})]})]}),d.jsxs("div",{className:"edm-toplinks",children:[d.jsxs("nav",{className:"edm-disciplines","aria-label":"Discipline navigation",children:[d.jsx(ra,{href:"/workspace/pfd/engineering-data",className:n==="pfd"?"active":"","data-testid":"link-edm-pfd",children:"PFD"}),d.jsx(ra,{href:"/workspace/pid/engineering-data",className:n==="pid"?"active":"","data-testid":"link-edm-pid",children:"P&ID"})]}),d.jsxs("span",{className:"edm-local",children:[d.jsx(ps,{size:13}),"Saved on this device"]}),d.jsxs(ra,{href:`/workspace/${n}`,className:"btn subtle","aria-label":"Back to the PFD or P&ID workspace","data-testid":"link-back-workspace",children:[d.jsx(uy,{size:13})," Workspace"]})]})]}),d.jsxs("nav",{className:"edm-mobile-tabs","aria-label":"Engineering data panels",children:[d.jsx("button",{type:"button",className:ft==="catalog"?"active":"","aria-pressed":ft==="catalog",onClick:()=>jt("catalog"),"data-testid":"tab-edm-catalog",children:"Catalog"}),d.jsx("button",{type:"button",className:ft==="records"?"active":"","aria-pressed":ft==="records",onClick:()=>jt("records"),"data-testid":"tab-edm-records",children:"Records"}),d.jsx("button",{type:"button",className:ft==="properties"?"active":"","aria-pressed":ft==="properties",onClick:()=>jt("properties"),"data-testid":"tab-edm-properties",children:"Properties"})]}),d.jsxs("div",{className:"edm-titlebar",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"edm-eyebrow",children:[n==="pfd"?"PROCESS FLOW DIAGRAM":"PIPING & INSTRUMENTATION"," / YOUR RECORDS"]}),d.jsx("h1",{children:"Engineering data"}),d.jsx("p",{children:"Add or import your records. PFD and P&ID stay separate on this device."})]}),d.jsxs("div",{className:"edm-object-select",children:[d.jsx("span",{children:"Object type"}),d.jsx("select",{value:K,onChange:C=>{ue(C.target.value),le(0)},"aria-label":"Object type filter","data-testid":"select-object-type",children:oD.map(C=>d.jsx("option",{children:C},C))}),d.jsx(us,{size:14})]})]}),d.jsxs("div",{className:"edm-file-actions",children:[d.jsxs("button",{className:"btn",disabled:!o.length,onClick:()=>mi(`engineering-${n}-backup.json`,k2(n,o),"application/json"),"data-testid":"button-backup-data",children:[d.jsx(Ms,{size:14})," Download backup"]}),d.jsxs("label",{className:"btn",children:[d.jsx(Tr,{size:14})," Import backup",d.jsx("input",{type:"file",accept:".json,application/json","aria-label":"Import engineering backup",disabled:!!s.error,onChange:C=>{const Y=C.currentTarget.files?.[0];C.currentTarget.value="",Y&&At(Y,"backup")}})]}),d.jsx("button",{className:"btn",disabled:ie||!o.some(C=>C.rows.length),onClick:()=>{Ee("csv",!0)},"data-testid":"button-report-all",children:"All records · CSV"}),d.jsx("button",{className:"btn",disabled:ie||!o.some(C=>C.rows.length),onClick:()=>{Ee("xlsx",!0)},"data-testid":"button-report-all-excel",children:"All records · Excel"}),s.error&&d.jsx("button",{className:"btn",onClick:()=>{try{const C=Cr(n);C&&mi(`engineering-${n}-raw.json`,C,"application/json")}catch{Be("Device storage cannot be accessed. The saved data has not been changed.")}},children:"Export raw backup"}),s.error&&d.jsx("button",{className:"btn danger",onClick:()=>{if(window.confirm("Delete unreadable engineering data for this discipline? Download a raw backup first. This cannot be undone and does not delete PDFs or the old demo data."))try{window.localStorage.removeItem(`pid-mapping-studio:engineering-workspace:v2:${n}`),window.location.reload()}catch{Be("Device storage cannot be cleared. The saved data has not been changed.")}},children:"Reset unreadable data"}),d.jsx("span",{children:"Local storage only · download backups regularly"})]}),d.jsxs("div",{className:"edm-workspace",children:[d.jsxs("aside",{className:"edm-catalog",children:[d.jsxs("div",{className:"edm-panel-head",children:[d.jsxs("span",{children:[d.jsx(Hu,{size:15})," Catalog"]}),d.jsx("span",{className:"edm-counter",children:o.length})]}),d.jsxs("div",{className:"edm-catalog-search",children:[d.jsx(Fo,{size:13}),d.jsx("input",{"aria-label":"Filter drawings",placeholder:"Filter drawings…",value:R,onChange:C=>P(C.target.value),"data-testid":"input-catalog-filter"})]}),d.jsxs("div",{className:"edm-catalog-label",children:["DRAWINGS · ",n.toUpperCase()]}),d.jsxs("div",{className:"edm-drawing-list",children:[o.filter(C=>C.name.toLowerCase().includes(R.toLowerCase())).map(C=>d.jsxs("button",{className:`edm-drawing-item ${h.id===C.id?"selected":""}`,onClick:()=>pe(C.id),"data-testid":`button-drawing-${C.id}`,children:[d.jsx(fs,{size:15}),d.jsxs("span",{children:[d.jsx("strong",{children:C.name}),d.jsxs("small",{children:[C.revision," · ",C.rows.length," records"]})]})]},C.id)),!o.some(C=>C.name.toLowerCase().includes(R.toLowerCase()))&&d.jsx("div",{className:"edm-empty",children:"No drawings match."})]}),d.jsxs("form",{className:"edm-create-drawing",onSubmit:Ia,children:[d.jsxs("label",{children:["Drawing reference",d.jsx("input",{value:S,onChange:C=>j(C.target.value),maxLength:160,required:!0,placeholder:"e.g. PID-001","aria-label":"New drawing reference","data-testid":"input-new-drawing"})]}),d.jsxs("label",{children:["Revision",d.jsx("input",{value:T,onChange:C=>D(C.target.value),maxLength:80,"aria-label":"New drawing revision"})]}),d.jsxs("button",{className:"btn primary",disabled:!!s.error,"data-testid":"button-add-drawing",children:[d.jsx(Bo,{size:14})," Add drawing"]})]}),h.id&&d.jsxs("button",{className:"btn danger edm-delete-drawing",disabled:!!s.error,onClick:()=>{if(!window.confirm(`Delete drawing ${h.name} and its ${g.length} records? Download a backup first. This does not delete source PDFs.`))return;const C=o.filter(Y=>Y.id!==h.id);Da(C)&&(y(C[0]?.id??""),E(""),le(0))},"data-testid":"button-delete-drawing",children:[d.jsx(Ei,{size:14})," Delete drawing"]}),d.jsxs("div",{className:"edm-catalog-foot",children:["No invented sample records.",d.jsx("br",{}),"Source PDFs stay in your workspace."]})]}),d.jsxs("section",{className:"edm-main",children:[d.jsxs("section",{className:"edm-preview panel edm-source-summary",children:[d.jsxs("header",{children:[d.jsxs("div",{children:[d.jsx("span",{className:"edm-section-kicker",children:"ACTIVE DRAWING RECORD"}),d.jsx("strong",{"data-testid":"text-active-drawing",children:h.name})]}),d.jsx("span",{className:"edm-revision",children:h.revision})]}),d.jsx("p",{children:h.sourcePdfId?`${h.sourceAlias??"PDF"} tag candidates and clearly labelled values are stored here. Every extracted record needs review. Blank fields mean the PDF text/OCR did not provide a clear value.`:"Add records manually or import them from CSV. New PDF tag candidates appear here with a source page and a review status."}),d.jsxs(ra,{href:h.sourcePdfId?`/workspace/${n}?pdf=${encodeURIComponent(h.sourcePdfId)}&page=${encodeURIComponent(h.rows.find(C=>C.sourcePdfId)?.sourcePage||"1")}#pdf-workflow-title`:`/workspace/${n}`,className:"btn subtle",children:[d.jsx(fs,{size:14})," ",h.sourcePdfId?"Open source PDF page":"View original PDFs"]}),d.jsxs("div",{className:"edm-autocad-status",role:"note",children:[d.jsx("strong",{children:"AutoCAD 2020: not connected."})," EDE extraction does not create a DWG."]})]}),d.jsxs("section",{className:"edm-editor panel",children:[d.jsxs("div",{className:"edm-editor-title",children:[d.jsxs("div",{children:[d.jsx("span",{className:"edm-section-kicker",children:"DATA WORKSPACE"}),d.jsx("h2",{children:"Engineering Data Editor"})]}),d.jsx("div",{className:"edm-type-chip",children:K})]}),d.jsxs("form",{className:"edm-add-record",onSubmit:ia,children:[d.jsxs("label",{children:["Object type",d.jsx("select",{value:k,onChange:C=>q(C.target.value),"aria-label":"New record type",children:Ho.map(C=>d.jsx("option",{children:C},C))})]}),d.jsxs("label",{children:["Item tag",d.jsx("input",{value:w,onChange:C=>N(C.target.value),maxLength:160,required:!0,placeholder:"e.g. P-101","aria-label":"New item tag","data-testid":"input-new-tag"})]}),d.jsxs("button",{className:"btn primary",disabled:!h.id||!!s.error,"data-testid":"button-add-record",children:[d.jsx(Bo,{size:14})," Add record"]})]}),d.jsxs("div",{className:"edm-report-actions",children:[d.jsxs("button",{className:"btn",disabled:ie||!$t.length,onClick:()=>{Ee("csv")},"data-testid":"button-export-report",children:[d.jsx(Ms,{size:14})," Current view · CSV"]}),d.jsxs("button",{className:"btn",disabled:ie||!$t.length,onClick:()=>{Ee("xlsx")},"data-testid":"button-export-excel",children:[d.jsx(Ms,{size:14})," Current view · Excel"]}),d.jsxs("label",{className:"btn",children:[d.jsx(Tr,{size:14})," Import CSV",d.jsx("input",{type:"file",accept:".csv,text/csv","aria-label":"Import engineering CSV",disabled:!h.id||!!s.error,onChange:C=>{const Y=C.currentTarget.files?.[0];C.currentTarget.value="",Y&&At(Y,"csv")}})]}),d.jsx("button",{className:"btn subtle",onClick:()=>mi("engineering-import-template.csv",O2([]),"text/csv;charset=utf-8"),"data-testid":"button-csv-template",children:"CSV template"}),d.jsxs("button",{className:"btn danger",disabled:!Ce||!!s.error,onClick:Wa,"data-testid":"button-delete-record",children:[d.jsx(Ei,{size:14})," Delete selected"]})]}),d.jsxs("div",{className:"edm-export-note","aria-live":"polite",children:[d.jsx("span",{children:"Current view: shown columns, filters, sorting and all matching rows across pages. Excel also includes group summaries. CSV has no visual formatting."}),ie&&d.jsx("strong",{role:"status",children:"Preparing export…"}),B&&d.jsx("strong",{role:"status",children:B}),je&&d.jsx("strong",{role:"alert",children:je})]}),d.jsx(aD,{order:Q,hidden:G,onChange:(C,Y)=>{U(C),oe(Y)}}),d.jsxs("div",{className:"edm-placement-legend","aria-label":"CAD placement status legend",children:[d.jsxs("span",{children:[d.jsx("i",{className:"available","aria-hidden":"true",children:"●"})," Available / not placed"]}),d.jsxs("span",{children:[d.jsx("i",{className:"current","aria-hidden":"true",children:"●"})," On this drawing"]}),d.jsxs("span",{children:[d.jsx("i",{className:"another","aria-hidden":"true",children:"●"})," On another drawing"]}),d.jsx("small",{children:"Based on the saved reference only; CAD is not connected for live verification."})]}),d.jsxs("div",{className:"edm-grid-toolbar",children:[d.jsxs("label",{className:"edm-global-search",children:[d.jsx(Fo,{size:14}),d.jsx("input",{placeholder:"Search all fields…","aria-label":"Search engineering data",value:x,onChange:C=>{O(C.target.value),le(0)},"data-testid":"input-engineering-search"})]}),d.jsxs("span",{className:"edm-result-total","data-testid":"text-result-count",children:[Gt.length," records"]}),d.jsxs("button",{className:"edm-toolbar-button",onClick:()=>{O(""),ue("All types"),_({}),le(0)},"data-testid":"button-clear-filters",children:[d.jsx(vu,{size:14})," Clear filters"]})]}),d.jsxs("div",{className:"edm-groups",onDragOver:C=>C.preventDefault(),onDrop:Jt,"data-testid":"drop-column-group",children:[d.jsx("span",{children:"GROUP BY"}),re.length?re.map(C=>d.jsxs("button",{onClick:()=>ye(Y=>Y.filter(te=>te!==C)),title:"Remove group",children:[bt[C]," ",d.jsx("b",{children:"×"})]},C)):d.jsx("em",{children:"Drag a column header here to group records"})]}),d.jsxs("label",{className:"edm-group-select",children:["Add group",d.jsxs("select",{value:"","aria-label":"Add group",onChange:C=>{C.target.value&&(pa(C.target.value),le(0))},children:[d.jsx("option",{value:"",children:"Choose a column…"}),Pn.filter(C=>!re.includes(C)).map(C=>d.jsx("option",{value:C,children:bt[C]},C))]})]}),d.jsx("p",{className:"edm-table-sizing-help",children:"Drag a column edge to resize it. Double-click an edge to fit the text."}),Sa.map(C=>d.jsxs("div",{className:"edm-group-summary",children:[d.jsx("strong",{children:C.label}),C.values.map(({value:Y,count:te})=>d.jsxs("span",{children:[Y,d.jsx("i",{children:te})]},Y))]},C.field)),d.jsx("div",{className:"edm-table-wrap",children:d.jsxs("table",{ref:Ie,className:"edm-table",style:{width:$,minWidth:$},children:[d.jsx("colgroup",{children:vt.map(C=>d.jsx("col",{style:{width:ua(C)}},C))}),d.jsx("thead",{children:d.jsxs("tr",{children:[d.jsxs("th",{className:"edm-rownum",children:[d.jsx("div",{className:"edm-column-heading",children:d.jsx("span",{className:"edm-column-heading-label",children:"#"})}),gt("rowNumber","row number")]}),d.jsxs("th",{children:[d.jsxs("div",{className:"edm-column-heading",children:[d.jsx("span",{className:"edm-column-heading-label",children:"Object type"}),d.jsx(Jg,{label:"Object type",options:Rt.type,selectedValues:Ae.type,onApply:C=>fa("type",C)})]}),gt("type","Object type")]}),Je.map(C=>d.jsxs("th",{draggable:!0,onDragStart:Y=>Y.dataTransfer.setData("text/engineering-field",C),children:[d.jsxs("div",{className:"edm-column-heading",children:[d.jsxs("button",{className:"edm-column-sort",title:Sr[C],onClick:()=>qn(C),"data-testid":`button-sort-${C}`,children:[bt[C],d.jsx("span",{children:ce.field===C?ce.direction===1?"↑":"↓":"↕"})]}),d.jsx(Jg,{label:bt[C],options:Rt[C],selectedValues:Ae[C],onApply:Y=>fa(C,Y)})]}),gt(C,bt[C])]},C))]})}),d.jsxs("tbody",{children:[la.map((C,Y)=>{const te=v===C.id,De=N2(C,h),Pe=De==="current"?"On this drawing":De==="another"?"On another drawing":"Available / not placed";return d.jsxs("tr",{className:te?"selected":"","data-stable-id":C.id,"data-placement-status":De,onClick:()=>E(C.id),"data-testid":`row-engineering-${C.id}`,children:[d.jsx("td",{className:"edm-rownum",children:ne*we+Y+1}),d.jsx("td",{children:d.jsx("span",{className:`edm-type-badge ${C.type.toLowerCase().replace(/\s+/g,"-")}`,children:C.type})}),Je.map(Ne=>{const _e=hn(C,Ne);return Ne==="notes"?d.jsx("td",{className:"edm-notes-cell",children:te?d.jsx("textarea",{"aria-label":`Notes for ${C.itemTag}`,rows:2,maxLength:2e3,value:_e,onClick:Ue=>Ue.stopPropagation(),onChange:Ue=>pt(C.id,Ne,Ue.target.value),"data-testid":`input-cell-${C.id}-${Ne}`}):d.jsx("span",{title:_e,children:_e||"—"})},Ne):Ne==="itemTag"?d.jsxs("td",{className:"mono edm-item-tag-cell",children:[d.jsxs("span",{className:`edm-placement-indicator ${De}`,"aria-label":`Placement: ${Pe}`,title:`Placement: ${Pe}`,children:[d.jsx("i",{"aria-hidden":"true",children:"●"}),d.jsx("span",{children:Pe})]}),te?d.jsx("input",{className:"edm-item-tag-editor","aria-label":`${bt[Ne]} for ${C.itemTag}`,value:_e,onClick:Ue=>Ue.stopPropagation(),onChange:Ue=>pt(C.id,Ne,Ue.target.value),"data-testid":`input-cell-${C.id}-${Ne}`}):d.jsx("span",{className:`edm-tag-value ${De}`,"data-testid":`text-item-tag-${C.id}`,children:_e})]},Ne):d.jsx("td",{className:Ne==="stableId"?"mono":"",children:Ne==="stableId"?d.jsx("span",{className:"edm-stable-id-value",title:_e,"aria-label":`Stable ID ${_e}`,children:_e}):te&&(Ne==="reviewStatus"||Ne==="groupStatus")?d.jsx("select",{"aria-label":`${bt[Ne]} for ${C.itemTag}`,value:_e,onClick:Ue=>Ue.stopPropagation(),onChange:Ue=>pt(C.id,Ne,Ue.target.value),"data-testid":`input-cell-${C.id}-${Ne}`,children:(Ne==="reviewStatus"?["Needs review","Reviewed","Manual"]:["","Start","Continue","Branch","Merge","End-of-Group"]).map(Ue=>d.jsx("option",{value:Ue,children:Ue||"Not set"},Ue))}):te?d.jsx("input",{"aria-label":`${bt[Ne]} for ${C.itemTag}`,value:_e,onClick:Ue=>Ue.stopPropagation(),onChange:Ue=>pt(C.id,Ne,Ue.target.value),"data-testid":`input-cell-${C.id}-${Ne}`}):d.jsx("span",{title:_e,children:_e||"—"})},Ne)})]},C.id)}),!la.length&&d.jsx("tr",{children:d.jsx("td",{colSpan:Je.length+2,children:d.jsx("div",{className:"edm-empty",children:"No records match these filters."})})})]})]})}),d.jsxs("footer",{className:"edm-pagination",children:[d.jsxs("span",{children:["Showing ",d.jsxs("strong",{children:[$t.length?ne*we+1:0,"–",Math.min((ne+1)*we,$t.length)]})," of ",d.jsx("strong",{children:$t.length})]}),d.jsxs("label",{children:["Rows ",d.jsx("select",{value:we,onChange:C=>{ge(Number(C.target.value)),le(0)},"aria-label":"Rows per page","data-testid":"select-page-size",children:[8,12,24,36].map(C=>d.jsx("option",{value:C,children:C},C))})," per page"]}),d.jsxs("div",{className:"edm-page-controls",children:[d.jsx("button",{disabled:ne===0,onClick:()=>F(ne-1),"aria-label":"Previous page","data-testid":"button-page-previous",children:d.jsx(fy,{size:15})}),d.jsxs("span",{children:["Page ",ne+1," of ",Bt]}),d.jsx("button",{disabled:ne>=Bt-1,onClick:()=>F(ne+1),"aria-label":"Next page","data-testid":"button-page-next",children:d.jsx(Vu,{size:15})})]})]})]})]}),d.jsxs("aside",{className:"edm-properties panel",children:[d.jsxs("div",{className:"edm-panel-head",children:[d.jsx("span",{children:"Properties"}),d.jsx("span",{className:"edm-counter",children:Ce?"EDIT":""})]}),d.jsxs("details",{className:"edm-field-guide",children:[d.jsx("summary",{children:"What do these fields mean?"}),d.jsx("dl",{children:Pn.map(C=>d.jsxs("div",{children:[d.jsx("dt",{children:bt[C]}),d.jsx("dd",{children:Sr[C]})]},C))})]}),Ce&&d.jsxs("label",{className:"edm-record-type",children:["Object type",d.jsx("select",{value:Ce.type,"aria-label":"Selected record type",disabled:!!s.error,onChange:C=>_t(g.map(Y=>Y.id===Ce.id?{...Y,type:C.target.value}:Y)),children:Ho.map(C=>d.jsx("option",{children:C},C))})]}),Ce?d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"edm-property-summary",children:[d.jsx("span",{className:"edm-property-icon",children:dD(Ce.type)}),d.jsxs("div",{children:[d.jsx("strong",{"data-testid":"text-selected-tag",children:Ce.itemTag}),d.jsxs("small",{children:[Ce.type," · ",h.revision]})]})]}),(Ce.sourcePdfId??h.sourcePdfId)&&d.jsxs(ra,{className:"btn subtle edm-source-locate",href:`/workspace/${n}?pdf=${encodeURIComponent(Ce.sourcePdfId??h.sourcePdfId??"")}&page=${encodeURIComponent(String(Ce.sourceLocations?.[0]?.pageNumber??Ce.sourcePage??"1"))}&record=${encodeURIComponent(Ce.id)}#pdf-workflow-title`,"data-testid":"link-selected-source-location",children:[d.jsx(fs,{size:13})," Locate on source PDF",d.jsx("small",{children:Ce.sourceLocations?.length?`${Ce.sourceLocations.length} OCR location(s) · review required`:`Page ${Ce.sourcePage||"1"} · no exact position saved`})]}),d.jsxs("div",{className:"edm-stable-id-panel",children:[d.jsx("span",{children:"STABLE ID"}),d.jsx("code",{"data-testid":"text-stable-id",children:Ce.id}),d.jsx("small",{children:"Permanent record identity. It does not change with the tag or drawing."})]}),d.jsxs("div",{className:"edm-property-scroll",children:[d.jsx("div",{className:"edm-property-group",children:"IDENTIFICATION"}),["itemTag","tagPrefix","tagSequence","tagSuffix","equipmentClass","equipmentType","equipmentName","drawingRef"].map(C=>d.jsxs("label",{className:"edm-property-field",children:[d.jsx("span",{title:Sr[C],children:bt[C]}),d.jsx("input",{value:Ce[C],onChange:Y=>pt(Ce.id,C,Y.target.value),"data-testid":`property-${C}`})]},C)),d.jsx("div",{className:"edm-property-group",children:"CAD PLACEMENT"}),d.jsxs("label",{className:"edm-property-field",children:[d.jsx("span",{title:Sr.placementDrawingRef,children:bt.placementDrawingRef}),d.jsx("input",{list:"edm-placement-drawings",value:Ce.placementDrawingRef,onChange:C=>pt(Ce.id,"placementDrawingRef",C.target.value),"data-testid":"property-placementDrawingRef",placeholder:"Blank = available / not placed"}),d.jsx("small",{children:"Reference only. This browser is not connected to CAD geometry."})]}),d.jsx("datalist",{id:"edm-placement-drawings",children:o.map(C=>d.jsx("option",{value:C.name},C.id))}),d.jsx("div",{className:"edm-property-group",children:Ce.type==="Pipe Run"?"PIPE RUN & PROCESS":"PROCESS & CONNECTION"}),(Ce.type==="Pipe Run"?["nominalDiameter","plantGroup","fluidService","pipingMaterial","lineSpec","flow","flowDirection","heatTracing","insulation","fromTag","toTag","groupStatus","opcDrawing","connection","description"]:["nominalDiameter","pipingMaterial","lineSpec","flow","heatTracing","insulation","opcDrawing","connection","description"]).map(C=>{const Y=C;return d.jsxs("label",{className:"edm-property-field",children:[d.jsx("span",{title:Sr[Y],children:bt[Y]}),Y==="groupStatus"?d.jsx("select",{value:Ce.groupStatus,onChange:te=>pt(Ce.id,"groupStatus",te.target.value),"aria-label":"Pipe run group status",children:["","Start","Continue","Branch","Merge","End-of-Group"].map(te=>d.jsx("option",{value:te,children:te||"Not set"},te))}):d.jsx("input",{value:Ce[Y],onChange:te=>pt(Ce.id,Y,te.target.value),"data-testid":`property-${Y}`})]},Y)}),d.jsx("div",{className:"edm-property-group",children:"NOTES"}),d.jsxs("label",{className:"edm-property-field",children:[d.jsx("span",{title:Sr.notes,children:bt.notes}),d.jsx("textarea",{rows:5,maxLength:2e3,value:Ce.notes,onChange:C=>pt(Ce.id,"notes",C.target.value),"data-testid":"property-notes"})]})]}),d.jsxs("div",{className:"edm-save-state",role:"status","data-testid":"status-local-save",children:[d.jsx("span",{})," Edits save automatically in this browser"]})]}):d.jsx("div",{className:"edm-empty",children:"Select a graphic or table row to inspect properties."})]})]}),d.jsxs("footer",{className:"edm-footnote",children:[d.jsx("span",{children:"© 2026 gaurav.cbiindia · DEVICE-LOCAL DATA"}),d.jsxs("span",{children:[g.length," records · ",h.name," · ",n.toUpperCase(),"-isolated browser storage"]})]}),Me&&d.jsx("div",{className:"edm-storage-error",role:"alert","data-testid":"status-storage-error",children:Me})]})}function uD({assetId:n,candidateId:s,blockName:o,entityType:l,description:i,disabled:p,onDescriptionChange:m}){const[u,y]=M.useState(null),[h,g]=M.useState("");M.useEffect(()=>{let E=!0;return y(null),g(""),Jy(n).then(S=>{E&&y(S)},S=>{E&&g(S instanceof Error?S.message:"Preview could not be read.")}),()=>{E=!1}},[n]);const v=l==="directionArrow"?[]:(u?.nearbyLabels??[]).filter(E=>!ef(E));return d.jsxs("section",{className:"cad-block-review-visual","aria-label":`Identify block ${o}`,"data-testid":`preview-block-${s}`,children:[d.jsxs("div",{className:"cad-block-review-image",children:[u?.previewSvg?d.jsx("img",{src:`data:image/svg+xml;charset=utf-8,${encodeURIComponent(u.previewSvg)}`,alt:`DXF geometry preview of block ${o}`,"data-testid":`img-block-${s}`}):d.jsxs("div",{className:"cad-block-preview-empty",role:"status",children:[d.jsx("strong",{children:h?"Preview could not load":u?"Overview DXF needed":"Loading local preview…"}),d.jsx("span",{children:h||(u?"Run PIDEXPORTOVERVIEW on the original SOURCE drawing. Add its *_OVERVIEW.dxf to the existing extraction ZIP and import again. Do not repeat the full block extraction.":"")})]}),d.jsx("small",{children:"Visual aid only—not a fidelity check. Fonts, hatches, masks and some CAD entities may be simplified or absent."})]}),d.jsxs("div",{className:"cad-block-review-labels",children:[d.jsx("strong",{children:l==="directionArrow"?"Direction Arrow":"Nearby legend text"}),d.jsx("small",{children:l==="directionArrow"?"Kept as its own P&ID entity; no equipment, instrument, or component name is inferred from nearby text.":"Suggested by position, not confirmed identity. Multiple parts may share one assembly description."}),v.length?d.jsx("div",{className:"cad-block-label-choices",children:v.map((E,S)=>d.jsx("button",{type:"button",className:"btn subtle",disabled:p,onClick:()=>m(E),"data-testid":`button-use-label-${s}-${S}`,children:E},`${E}-${S}`))}):d.jsx("p",{"data-testid":`status-no-label-${s}`,children:l==="directionArrow"?u?.sourcePlacements?.length?`Source insert context retained: ${u.sourcePlacements.map(E=>`${E.layer}, ${E.rotationDegrees}° (${E.count})`).join("; ")}.`:"Source rotation and layer context will be used if an overview DXF is available.":u?.labelMatchAmbiguous?"Ambiguous: this block is used beside different legend labels. No item name is suggested; verify it from the source.":u?.labelMatchSkipped?"Skipped: this insert is on layer 0 or a primary process-pipe layer, so its nearby label is not used as an item mapping.":u?.previewSvg?"No nearby label found. Verify the source drawing and enter the description below.":"Label suggestions appear after an overview DXF is imported."}),d.jsxs("label",{children:[d.jsx("span",{children:"Confirmed item description"}),d.jsx("input",{value:i,onChange:E=>m(E.target.value),placeholder:"Verify the source, then enter the real item name",disabled:p,"data-testid":`input-item-description-${s}`})]}),d.jsx("small",{children:"Saved only when you approve this record. A label does not automatically choose a category or CAD layer."})]})]})}const Nb={titleBlock:"Title block",layer:"Layer",textStyle:"Text style",linetype:"Linetype",dimensionStyle:"Dimension style",symbol:"Symbol",directionArrow:"Direction Arrow",legend:"Legend"};function Ro(n){return Nb[n]??"CAD standard"}function fD(n,s){if(n.proposedScope==="project"&&n.projectId){const o=[...new Set(s.filter(l=>l.proposedScope==="project"&&l.projectId).map(l=>l.projectId))].sort();return`Project ${String(o.indexOf(n.projectId)+1).padStart(2,"0")}`}if(n.proposedScope==="company"){const o=[...new Set(s.filter(l=>l.proposedScope==="company").map(l=>l.sourceGroup))].sort();return`Legends Library source ${String(o.indexOf(n.sourceGroup)+1).padStart(2,"0")}`}return"Unclassified source"}function ny(n,s){return`Project ${String(s.indexOf(n)+1).padStart(2,"0")}`}function fn(n,s){return n.find(o=>o.label===s)?.value.trim()??""}function sy({value:n,disabled:s,onChange:o}){let l=null,i="";try{l=qs(n)}catch(T){i=T instanceof Error?T.message:"Enter a valid X,Y outline."}const p=l?.map(([T])=>T)??[],m=l?.map(([,T])=>T)??[],u=Math.min(...p),y=Math.max(...p),h=Math.min(...m),g=Math.max(...m),v=y-u||1,E=g-h||1,S=9,j=l?.map(([T,D])=>`${S+(T-u)/v*(160-S*2)},${90-S-(D-h)/E*(90-S*2)}`).join(" ");return d.jsxs("label",{className:"candidate-fallback-category valve-mask-editor",children:[d.jsxs("span",{children:["Valve-body Wipeout outline ",d.jsx("small",{children:"Reviewed block-local X,Y points; do not include pipe tails. Separate points with semicolons."})]}),d.jsx("textarea",{value:n,onChange:T=>o(T.target.value),placeholder:"x,y; x,y; x,y; …","aria-label":"Valve-body Wipeout outline points",rows:3,disabled:s}),d.jsx("small",{className:"candidate-layer-help",children:"Enter vertices in order using the valve block’s local drawing units. The small preview shows only the mask contour, not the source CAD block."}),l&&j?d.jsx("svg",{className:"valve-mask-preview",viewBox:"0 0 160 90",role:"img","aria-label":"Preview of the saved valve mask outline",children:d.jsx("polygon",{points:j})}):d.jsx("small",{className:"candidate-layer-help",children:i}),d.jsx("small",{className:"candidate-layer-help",children:"The runner masks only inside this polygon, leaves the underlying Pipe Run continuous, and draws the valve block on top."})]})}function ds(n,s){const o=fn(n.item.fields,"Source discipline");if(o!=="PFD"&&o!=="P&ID"&&o!=="Shared")return[];const m=[...(n.proposedScope==="company"?"company":"project")==="project"&&n.projectId?s.projects[n.projectId]?.items??[]:[],...s.companyItems].filter(u=>{if(u.category!=="layer"||u.sourceKind!=="extracted-dwg"||u.reviewStatus!=="reviewed")return!1;const y=fn(u.fields,"Source discipline");return o==="Shared"?y==="Shared":y==="Shared"||y===o}).map(u=>fn(u.fields,"CAD name")).filter(u=>u&&u.toUpperCase()!=="0");return[...new Set(m)].sort((u,y)=>u.localeCompare(y))}function pD({library:n,reviewCandidates:s,onApproveCompany:o,onApproveProject:l,onDismiss:i,onUpdateReviewedItem:p,onSetCompanyDefault:m,onSetProjectDefault:u,storageNotice:y="",readOnly:h=!1,reviewOnly:g=!1,backHref:v="/"}){const[E,S]=M.useState("company"),[j,T]=M.useState(""),[D,w]=M.useState("all"),[N,k]=M.useState(""),[q,x]=M.useState(0),[O,R]=M.useState(""),[P,K]=M.useState({}),[ue,ne]=M.useState({}),[le,we]=M.useState({}),[ge,ce]=M.useState({}),[V,re]=M.useState({}),[ye,Ae]=M.useState({}),_=20,Q=M.useMemo(()=>Object.keys(n.projects).sort(),[n.projects]),U=Q.includes(N)?N:Q[0]??"",G=s.filter(B=>B.status==="needs-review"),oe=s.filter(B=>B.status==="approved").length,he=s.filter(B=>B.status==="dismissed").length,be=B=>ye[B.id]??B.item.category,ze=(B,de)=>{const je=be(B),me=B.item.sourceKind==="extracted-dwg"&&!!B.item.fields.find(xe=>xe.label==="Block asset ID")?.value.trim(),Me=(P[B.id]??B.item.fields.find(xe=>xe.label==="Fallback category")?.value??"").trim(),Be=ue[B.id]??B.item.fields.find(xe=>xe.label==="Target CAD layer")?.value??"";if(je==="symbol"&&me&&!Me){R("Enter the real equipment category (such as pump or valve) before approving an extracted block.");return}if(je==="symbol"&&me&&!ds(B,n).includes(Be)){R(ds(B,n).length?"Choose an approved non-zero CAD layer for this block before approving it.":"Approve a matching Equipment, Instrument, or other placement layer first. Layer 0 cannot be used for block placement.");return}const qe=le[B.id]??B.item.fields.find(xe=>xe.label==="Wipeout mask boundary")?.value??"";if(je==="symbol"&&Me.toLowerCase()==="valve")try{qs(qe)}catch(xe){R(xe instanceof Error?xe.message:"Enter and review a valve-body Wipeout outline before approval.");return}R("");const Te=me?je==="directionArrow"?[{label:"Entity type",value:"Direction Arrow"},{label:"Item description",value:V[B.id]||"Direction Arrow"}]:[{label:"Fallback category",value:Me},{label:"Target CAD layer",value:Be},{label:"Item description",value:V[B.id]??fn(B.item.fields,"Item description")},...Me.toLowerCase()==="valve"?[{label:"Wipeout mask boundary",value:qe}]:[]]:void 0;(de==="company"?o:l)(B.id,Te,me?je:void 0)&&R(de==="company"?"Approved and added to the Legends Library.":"Approved and added to the project library.")},Ie=B=>{i(B)&&R("Record dismissed from the review queue.")},lt=(B,de)=>{const je=ge[B]??de.find(me=>me.label==="Wipeout mask boundary")?.value??"";try{qs(je)}catch(me){R(me instanceof Error?me.message:"Enter a valid valve-body mask outline.");return}p(B,[{label:"Wipeout mask boundary",value:je}])&&R("Reviewed valve-body mask saved to the Legends Library.")},ft=M.useMemo(()=>{const B=j.trim().toLowerCase();return G.filter(de=>{const je=be(de),me=D==="all"||je===D,Me=de.item.fields.some(Be=>`${Be.label} ${Be.value}`.toLowerCase().includes(B));return me&&(!B||Me||Ro(je).toLowerCase().includes(B))})},[G,j,D,ye]),jt=Math.max(1,Math.ceil(ft.length/_)),Je=Math.min(q,jt-1),vt=ft.slice(Je*_,(Je+1)*_);M.useEffect(()=>x(0),[j,D]);const $=(E==="company"?n.companyItems:n.projects[U]?.items??[]).filter(B=>{const de=j.trim().toLowerCase(),je=D==="all"||B.category===D,me=B.fields.some(Me=>`${Me.label} ${Me.value}`.toLowerCase().includes(de));return je&&(!de||me||Ro(B.category).toLowerCase().includes(de))}),ie=(B,de)=>{if(!Ps.includes(de))return;const je=de,me=n.companyItems.some(Me=>Me.category==="titleBlock"&&Me.reviewStatus==="reviewed"&&(Me.sheetSize===je||Me.fields.some(Be=>Be.label==="Sheet size"&&Be.value===je)));if(je!==n.companyDefaults[B]&&!me){R(`Approve a company title-block mapping for ${je} before changing this default.`);return}R(""),m(B,je)},fe=(B,de,je)=>{if(!Ps.includes(je))return;const me=je;if(![...n.projects[B]?.items??[],...n.companyItems].some(qe=>qe.category==="titleBlock"&&qe.reviewStatus==="reviewed"&&(qe.sheetSize===me||qe.fields.some(Te=>Te.label==="Sheet size"&&Te.value===me)))){R(`Approve a title-block mapping for ${me} before saving this project default.`);return}R(""),u(B,de,me)};return d.jsxs("main",{className:`standards-page${g?" standards-review-only":""}`,children:[d.jsxs("header",{className:"standards-topbar",children:[d.jsxs(ra,{href:g?v:"/",className:"standards-brand","data-testid":"link-standards-home",children:[d.jsx("span",{className:"standards-mark",children:"PM"}),d.jsxs("span",{children:["Mapping Studio",d.jsx("small",{children:g?"Legends Library / review":"Drafting standards / browser-local"})]})]}),d.jsxs("div",{className:"standards-top-meta",children:[d.jsxs("span",{className:"standards-local",children:[d.jsx("i",{}),h?"Read only · storage issue":"Browser-local"]}),d.jsx("span",{className:"standards-version",children:"LIBRARY · 1.0"})]})]}),d.jsxs("div",{className:"standards-content",children:[d.jsxs("section",{className:"standards-intro",children:[d.jsxs("div",{children:[g&&d.jsxs(ra,{className:"standards-return",href:v,children:["← Back to ",v.endsWith("/pfd")?"PFD":"P&ID"," workspace"]}),d.jsxs("div",{className:"standards-eyebrow",children:[g?"Legends Library":"Standards library"," ",d.jsx("span",{children:"/"})," human review"]}),d.jsx("h1",{children:g?"Review extracted standards":"Drafting standards"}),d.jsx("p",{children:g?"Check extracted blocks, layers, text styles, and line types. Nothing becomes part of the Legends Library until you approve it.":"Inspect source-derived CAD values before they become defaults. Project choices stay separate from the Legends Library."})]}),d.jsxs("div",{className:"standards-local-seal",children:[d.jsx(ps,{size:15}),d.jsxs("span",{children:["LOCAL ONLY",d.jsx("small",{children:"Nothing is uploaded or shared"})]})]})]}),d.jsxs("div",{className:"standards-trust-note",children:[d.jsx(bu,{size:16}),d.jsxs("span",{children:[d.jsx("strong",{children:"Review before use."})," ",g?"Each extracted record remains pending until you approve it to the Legends Library or dismiss it. Source filenames are hidden.":"Source-derived values remain unapproved until you choose a scope. Company/client identifiers and source file names are hidden here."]}),d.jsxs("span",{className:"standards-schema",children:["SCHEMA ",n.schemaVersion]})]}),y&&d.jsx("div",{className:"standards-storage-banner",role:"alert",children:y}),d.jsxs("section",{className:"standards-metrics","aria-label":"Review summary",children:[d.jsxs("div",{className:"standards-metric metric-pending",children:[d.jsx("span",{className:"metric-icon",children:d.jsx(hs,{size:16})}),d.jsxs("span",{children:[d.jsx("small",{children:"Awaiting review"}),d.jsx("strong",{children:G.length.toString().padStart(2,"0")})]}),d.jsx("span",{className:"metric-note",children:"SOURCE MAPPINGS"})]}),d.jsxs("div",{className:"standards-metric",children:[d.jsx("span",{className:"metric-icon",children:d.jsx(Gm,{size:16})}),d.jsxs("span",{children:[d.jsx("small",{children:"Approved from queue"}),d.jsx("strong",{children:oe.toString().padStart(2,"0")})]}),d.jsx("span",{className:"metric-note",children:"HUMAN CONFIRMED"})]}),d.jsxs("div",{className:"standards-metric",children:[d.jsx("span",{className:"metric-icon",children:d.jsx(dy,{size:16})}),d.jsxs("span",{children:[d.jsx("small",{children:"Dismissed"}),d.jsx("strong",{children:he.toString().padStart(2,"0")})]}),d.jsx("span",{className:"metric-note",children:"NOT IN LIBRARY"})]})]}),d.jsxs("div",{className:"standards-layout",children:[d.jsxs("section",{className:"standards-review panel",children:[d.jsxs("div",{className:"standards-panel-head",children:[d.jsxs("div",{children:[d.jsx("span",{className:"standards-kicker",children:"INBOX / SOURCE-DERIVED"}),d.jsxs("h2",{children:[d.jsx(bw,{size:17}),"Review queue"]})]}),d.jsxs("span",{className:"standards-count",children:[G.length," pending"]})]}),d.jsxs("div",{className:"standards-controls",children:[d.jsxs("label",{className:"standards-search",children:[d.jsx(Fo,{size:14}),d.jsx("input",{value:j,onChange:B=>T(B.target.value),placeholder:"Search CAD field values…","aria-label":"Search standards","data-testid":"input-standards-search"})]}),d.jsxs("label",{className:"standards-filter",children:[d.jsx(vu,{size:13}),d.jsxs("select",{"aria-label":"Filter by category",value:D,onChange:B=>w(B.target.value),"data-testid":"select-standards-category",children:[d.jsx("option",{value:"all",children:"All categories"}),Object.entries(Nb).map(([B,de])=>d.jsx("option",{value:B,children:de},B))]}),d.jsx(us,{size:13})]})]}),O&&d.jsx("div",{className:"standards-action-note",role:"status",children:O}),d.jsxs("div",{className:"standards-candidate-list",children:[vt.map(B=>{const de=be(B),je=B.item.sourceKind==="extracted-dwg"&&!!fn(B.item.fields,"Block asset ID");return d.jsxs("article",{className:"candidate-card","data-testid":`candidate-${B.id}`,children:[d.jsxs("div",{className:"candidate-top",children:[d.jsxs("div",{className:"candidate-category",children:[d.jsx("span",{className:"candidate-glyph",children:d.jsx(Lo,{size:15})}),d.jsxs("span",{children:[d.jsx("strong",{children:Ro(de)}),d.jsxs("small",{children:[fD(B,s)," · ",B.proposedScope==="project"?"Project proposal":B.proposedScope==="company"?"Pending review":"Scope not classified"]})]})]}),d.jsxs("span",{className:"candidate-status",children:[d.jsx("i",{}),"Needs review"]})]}),je&&d.jsxs("label",{className:"candidate-fallback-category",children:[d.jsx("span",{children:"Review entity as"}),d.jsxs("select",{value:de==="directionArrow"?"directionArrow":"symbol",onChange:me=>{R(""),Ae(Me=>({...Me,[B.id]:me.target.value}))},"aria-label":`Review entity type for ${B.item.name}`,disabled:h,"data-testid":`select-entity-role-${B.id}`,children:[d.jsx("option",{value:"symbol",children:"Equipment / instrument / component symbol"}),d.jsx("option",{value:"directionArrow",children:"Direction Arrow"})]}),de==="directionArrow"&&d.jsx("small",{children:"Kept separate from equipment matching. Source insert layers and rotations are retained for later pipe alignment."})]}),(de==="symbol"||de==="directionArrow")&&B.item.sourceKind==="extracted-dwg"&&fn(B.item.fields,"Block asset ID")&&d.jsx(uD,{assetId:fn(B.item.fields,"Block asset ID"),candidateId:B.id,blockName:fn(B.item.fields,"Block name"),entityType:de,description:V[B.id]??(de==="directionArrow"?"Direction Arrow":fn(B.item.fields,"Item description")),disabled:h,onDescriptionChange:me=>re(Me=>({...Me,[B.id]:me}))}),d.jsx("div",{className:"candidate-fields","aria-label":`${Ro(de)} CAD standard values`,children:B.item.fields.filter(me=>de!=="directionArrow"||!["Fallback category","Target CAD layer","Wipeout mask boundary"].includes(me.label)).map((me,Me)=>d.jsxs("div",{className:"candidate-field",children:[d.jsx("span",{children:me.label}),d.jsx("strong",{children:me.value||"—"})]},`${me.label}-${Me}`))}),de==="symbol"&&je&&d.jsxs(d.Fragment,{children:[d.jsxs("label",{className:"candidate-fallback-category",children:[d.jsxs("span",{children:["Fallback category ",d.jsx("small",{children:"Required for safe same-category substitution"})]}),d.jsx("input",{value:P[B.id]??B.item.fields.find(me=>me.label==="Fallback category")?.value??"",onChange:me=>{R(""),K(Me=>({...Me,[B.id]:me.target.value}))},placeholder:"For example: pump, valve, or instrument","aria-label":`Fallback category for ${B.item.name}`})]}),(P[B.id]??B.item.fields.find(me=>me.label==="Fallback category")?.value??"").trim().toLowerCase()==="valve"&&d.jsx(sy,{value:le[B.id]??B.item.fields.find(me=>me.label==="Wipeout mask boundary")?.value??"",disabled:h,onChange:me=>{R(""),we(Me=>({...Me,[B.id]:me}))}}),d.jsxs("label",{className:"candidate-fallback-category",children:[d.jsxs("span",{children:["Target CAD layer ",d.jsx("small",{children:"Actual approved layer; layer 0 is not allowed"})]}),d.jsxs("select",{value:ue[B.id]??B.item.fields.find(me=>me.label==="Target CAD layer")?.value??"",onChange:me=>{R(""),ne(Me=>({...Me,[B.id]:me.target.value}))},"aria-label":`Target CAD layer for ${B.item.name}`,disabled:h||ds(B,n).length===0,children:[d.jsx("option",{value:"",children:ds(B,n).length?"Select an approved CAD layer…":"Approve a compatible layer first"}),ds(B,n).map(me=>d.jsx("option",{value:me,children:me},me))]}),d.jsx("small",{className:"candidate-layer-help",children:ds(B,n).length?"The AutoCAD runner will put the inserted block reference on this layer.":"Review and approve the matching source layer first. No layer is guessed automatically."}),d.jsx("small",{className:"candidate-layer-help",children:"Stated Legends layers: equipment uses EQUIP or f_EQUIP; instruments use f_Inst. Extract and approve the matching layer before it appears here."})]})]}),d.jsxs("div",{className:"candidate-actions",children:[d.jsx("span",{className:"candidate-scope-note",children:B.proposedScope==="project"?"Approve into isolated project library":B.proposedScope==="company"?"Approve to the Legends Library":"Unclassified source · project-only approval"}),(()=>{const me=de==="symbol"&&je;return B.proposedScope==="company"?d.jsxs("button",{className:"btn primary",onClick:()=>ze(B,"company"),disabled:h,title:me&&ds(B,n).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-company-${B.id}`,children:[d.jsx(Dr,{size:14}),"Approve to Legends Library"]}):d.jsxs("button",{className:"btn primary",onClick:()=>ze(B,"project"),disabled:h,title:me&&ds(B,n).length===0?"Approve a matching non-zero layer first.":void 0,"data-testid":`button-approve-project-${B.id}`,children:[d.jsx(Dr,{size:14}),"Approve to project"]})})(),d.jsx("button",{className:"btn subtle",onClick:()=>Ie(B.id),disabled:h,"data-testid":`button-dismiss-${B.id}`,children:"Dismiss"})]})]},B.id)}),!vt.length&&d.jsxs("div",{className:"standards-empty",children:[d.jsx("span",{className:"empty-seal",children:G.length?d.jsx(Fo,{size:20}):d.jsx(Gm,{size:20})}),d.jsx("strong",{children:G.length?"No source mappings match":"Review queue is clear"}),d.jsx("p",{children:G.length?"Try another field value or category.":"New source-derived standards will appear here for human review."}),j||D!=="all"?d.jsx("button",{className:"btn subtle",onClick:()=>{T(""),w("all")},children:"Clear filters"}):null]})]}),ft.length>_&&d.jsxs("div",{className:"candidate-pagination",children:[d.jsxs("span",{children:["Showing ",Je*_+1,"–",Math.min((Je+1)*_,ft.length)," of ",ft.length," matching mappings"]}),d.jsxs("div",{children:[d.jsx("button",{className:"btn subtle",onClick:()=>x(B=>Math.max(0,B-1)),disabled:Je===0,children:"Previous"}),d.jsxs("span",{children:["Page ",Je+1," of ",jt]}),d.jsx("button",{className:"btn subtle",onClick:()=>x(B=>Math.min(jt-1,B+1)),disabled:Je>=jt-1,children:"Next"})]})]}),d.jsxs("footer",{className:"standards-list-foot",children:[d.jsx("span",{children:"CAD field values only"}),d.jsx("span",{children:"Source labels anonymized"})]})]}),!g&&d.jsxs("aside",{className:"standards-side",children:[d.jsxs("section",{className:"defaults-panel panel",children:[d.jsx("div",{className:"standards-panel-head",children:d.jsxs("div",{children:[d.jsx("span",{className:"standards-kicker",children:"ACTIVE CONFIGURATION"}),d.jsxs("h2",{children:[d.jsx(vu,{size:16}),"Sheet-size defaults"]})]})}),d.jsxs("div",{className:"default-scope-tabs",role:"tablist","aria-label":"Defaults scope",children:[d.jsx("button",{role:"tab","aria-selected":E==="company",className:E==="company"?"selected":"",onClick:()=>S("company"),children:"Company"}),d.jsxs("button",{role:"tab","aria-selected":E==="projects",className:E==="projects"?"selected":"",onClick:()=>S("projects"),children:["Projects ",d.jsx("span",{children:Q.length})]})]}),E==="projects"&&d.jsx("div",{className:"project-picker",children:Q.length?d.jsxs("label",{children:[d.jsx("span",{children:"PROJECT LIBRARY"}),d.jsxs("div",{children:[d.jsx("select",{value:U,onChange:B=>k(B.target.value),"aria-label":"Select project library",children:Q.map(B=>d.jsx("option",{value:B,children:ny(B,Q)},B))}),d.jsx(us,{size:14})]})]}):d.jsxs("div",{className:"project-none",children:[d.jsx("span",{className:"empty-seal",children:d.jsx(Lo,{size:17})}),d.jsx("strong",{children:"No project overrides yet"}),d.jsx("small",{children:"Project-specific standards will appear here once available."})]})}),d.jsxs("div",{className:"default-table",children:[d.jsxs("div",{className:"default-table-head",children:[d.jsx("span",{children:"DRAWING PURPOSE"}),d.jsx("span",{children:"SIZE"})]}),Tu.map(B=>{const de=E==="projects"&&U?n.projects[U]?.defaults[B]:void 0,je=de??n.companyDefaults[B];return d.jsxs("div",{className:"default-row",children:[d.jsxs("div",{children:[d.jsx("strong",{children:B}),E==="projects"&&d.jsx("small",{children:de?"Project override":"Inherited company default"})]}),E==="company"?d.jsxs("label",{className:"size-select",children:[d.jsx("select",{"aria-label":`${B} company sheet size`,value:n.companyDefaults[B],onChange:me=>ie(B,me.target.value),disabled:h,children:Ps.map(me=>d.jsx("option",{value:me,children:me},me))}),d.jsx(us,{size:13})]}):U?d.jsxs("label",{className:`size-select ${de?"override":""}`,children:[d.jsx("select",{"aria-label":`${B} project sheet size`,value:je,onChange:me=>fe(U,B,me.target.value),disabled:h,children:Ps.map(me=>d.jsx("option",{value:me,children:me},me))}),d.jsx(us,{size:13})]}):d.jsx("span",{className:"default-value",children:"—"})]},B)})]}),d.jsxs("div",{className:"defaults-note",children:[d.jsx(bu,{size:14}),d.jsx("span",{children:"Project selections change only that project. Legends Library defaults remain unchanged."})]})]}),d.jsxs("section",{className:"library-panel panel",children:[d.jsxs("div",{className:"standards-panel-head",children:[d.jsxs("div",{children:[d.jsx("span",{className:"standards-kicker",children:"APPROVED STANDARDS"}),d.jsxs("h2",{children:[d.jsx(Lo,{size:16}),E==="company"?"Legends Library":"Project library"]})]}),d.jsx("span",{className:"standards-count",children:$.length})]}),d.jsxs("div",{className:"approved-list",children:[$.map(B=>d.jsxs("article",{className:"approved-item",children:[d.jsxs("div",{className:"approved-item-head",children:[d.jsx("span",{className:"approved-glyph",children:d.jsx(Dr,{size:13})}),d.jsxs("div",{children:[d.jsx("strong",{children:Ro(B.category)}),d.jsx("small",{children:E==="company"?"Legends Library standard":`${ny(U,Q)} · project-only`})]})]}),d.jsx("div",{className:"approved-fields",children:B.fields.map((de,je)=>d.jsxs("div",{children:[d.jsx("span",{children:de.label}),d.jsx("strong",{children:de.value||"—"})]},`${de.label}-${je}`))}),B.category==="symbol"&&B.sourceKind==="extracted-dwg"&&fn(B.fields,"Fallback category").toLowerCase()==="valve"&&d.jsxs(d.Fragment,{children:[d.jsx(sy,{value:ge[B.id]??B.fields.find(de=>de.label==="Wipeout mask boundary")?.value??"",disabled:h,onChange:de=>{R(""),ce(je=>({...je,[B.id]:de}))}}),d.jsx("div",{className:"approved-mask-actions",children:d.jsxs("button",{type:"button",className:"btn primary",disabled:h,onClick:()=>lt(B.id,B.fields),"data-testid":`button-save-valve-mask-${B.id}`,children:[d.jsx(Dr,{size:13}),"Save reviewed outline"]})})]})]},B.id)),!$.length&&d.jsxs("div",{className:"approved-empty",children:[d.jsx("span",{className:"empty-seal",children:d.jsx(Lo,{size:18})}),d.jsx("strong",{children:E==="company"?"No approved Legends Library standards":"No standards in this project"}),d.jsx("small",{children:E==="company"?"Review and approve source mappings to build the Legends Library.":"Project-approved standards remain isolated from Legends Library defaults."})]})]}),d.jsxs("footer",{className:"library-foot",children:[d.jsx("span",{children:"Visible values are standards fields"}),d.jsx("span",{children:"Descriptions hidden"})]})]})]})]}),d.jsxs("footer",{className:"standards-page-foot",children:[d.jsx("span",{children:"LOCAL-FIRST ENGINEERING WORKSPACE"}),d.jsx("span",{children:g?"Only approved mappings are offered to the CAD runner":"Legends Library and project standards are reviewed separately"})]})]})]})}function ry({backHref:n}){const[s]=M.useState(()=>{try{return{library:pn(),canSave:!0,error:""}}catch(D){return{library:hx(),canSave:!1,error:D instanceof Error?D.message:"The local standards library could not be loaded."}}}),[o,l]=M.useState(s.library),i=M.useRef(s.library),[p,m]=M.useState(s.canSave),[u,y]=M.useState(s.error),h=D=>{if(!p)return y("The local library could not be read safely. Its saved contents were left unchanged."),!1;let w;try{w=D(i.current)}catch(N){return y(N instanceof Error?N.message:"The standards change could not be applied."),!1}try{return Yo(w),i.current=w,l(w),y(""),!0}catch(N){const k=N instanceof Error?N.message:"The standards change could not be saved locally.";return k.startsWith("This browser could not save the CAD standards locally.")&&m(!1),y(k),!1}},g=(D,w,N)=>h(k=>Ai(k,D,"company",w,N)),v=(D,w,N)=>h(k=>Ai(k,D,"project",w,N)),E=(D,w)=>h(N=>Sx(N,D,w)),S=D=>h(w=>Dx(w,D)),j=(D,w)=>h(N=>yx(N,D,w)),T=(D,w,N)=>{const k=i.current.projects[D]?.projectName??`Project ${String(Object.keys(i.current.projects).sort().indexOf(D)+1).padStart(2,"0")}`;h(q=>Ax(q,D,k,w,N))};return d.jsx(pD,{library:o,reviewCandidates:o.reviewCandidates,reviewOnly:!0,backHref:n,onApproveCompany:g,onApproveProject:v,onUpdateReviewedItem:E,onDismiss:S,onSetCompanyDefault:j,onSetProjectDefault:T,storageNotice:u,readOnly:!p})}const hD="/pid-mapping-studio-app/".replace(/\/$/,"");function mD(){const[n]=by();return n==="/admin/library"||n.startsWith("/sign-in")||n.startsWith("/sign-up")?d.jsx(f1,{to:"/"}):n==="/portal"||n==="/library"||n==="/"?d.jsx(SE,{}):n==="/workspace/pfd"?d.jsx(Zg,{discipline:"pfd"}):n==="/workspace/pid"?d.jsx(Zg,{discipline:"pid"}):n==="/workspace/pfd/engineering-data"?d.jsx(ay,{discipline:"pfd"}):n==="/workspace/pid/engineering-data"?d.jsx(ay,{discipline:"pid"}):n==="/standards-review/pfd"?d.jsx(ry,{backHref:"/workspace/pfd"}):n==="/standards-review/pid"?d.jsx(ry,{backHref:"/workspace/pid"}):d.jsx(DE,{})}function gD(){return d.jsx(u1,{base:hD,children:d.jsx(xE,{children:d.jsx(mD,{})})})}Yu.createRoot(document.getElementById("root"),{onCaughtError:(n,s)=>{console.error(n,s.componentStack)}}).render(d.jsx(gD,{}));export{Mn as _,yD as a,Zy as c,Xo as g,Qu as v,vD as w};
