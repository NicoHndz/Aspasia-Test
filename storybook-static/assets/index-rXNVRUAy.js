import{r as o,a as se}from"./index-4g5l5LRQ.js";import"./index-jmm5gWkb.js";/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L.apply(this,arguments)}var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));const z="popstate";function ue(e){e===void 0&&(e={});function t(a,r){let{pathname:l,search:i,hash:c}=a.location;return A("",{pathname:l,search:i,hash:c},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:E(r)}return fe(t,n,null,e)}function C(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Y(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ce(){return Math.random().toString(36).substr(2,8)}function D(e,t){return{usr:e.state,key:e.key,idx:t}}function A(e,t,n,a){return n===void 0&&(n=null),L({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?O(t):t,{state:n,key:t&&t.key||a||ce()})}function E(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function O(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function fe(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:l=!1}=a,i=r.history,c=R.Pop,u=null,s=f();s==null&&(s=0,i.replaceState(L({},i.state,{idx:s}),""));function f(){return(i.state||{idx:null}).idx}function d(){c=R.Pop;let h=f(),x=h==null?null:h-s;s=h,u&&u({action:c,location:g.location,delta:x})}function m(h,x){c=R.Push;let p=A(g.location,h,x);n&&n(p,h),s=f()+1;let y=D(p,s),v=g.createHref(p);try{i.pushState(y,"",v)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;r.location.assign(v)}l&&u&&u({action:c,location:g.location,delta:1})}function P(h,x){c=R.Replace;let p=A(g.location,h,x);n&&n(p,h),s=f();let y=D(p,s),v=g.createHref(p);i.replaceState(y,"",v),l&&u&&u({action:c,location:g.location,delta:0})}function w(h){let x=r.location.origin!=="null"?r.location.origin:r.location.href,p=typeof h=="string"?h:E(h);return C(x,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,x)}let g={get action(){return c},get location(){return e(r,i)},listen(h){if(u)throw new Error("A history only accepts one active listener");return r.addEventListener(z,d),u=h,()=>{r.removeEventListener(z,d),u=null}},createHref(h){return t(r,h)},createURL:w,encodeLocation(h){let x=w(h);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:m,replace:P,go(h){return i.go(h)}};return g}var G;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(G||(G={}));function q(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=he(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let l=r[0],i=l.replace(/(.)\/+$/,"$1"),c=r.slice(1);return{params:a.reduce((s,f,d)=>{let{paramName:m,isOptional:P}=f;if(m==="*"){let g=c[d]||"";i=l.slice(0,l.length-g.length).replace(/(.)\/+$/,"$1")}const w=c[d];return P&&!w?s[m]=void 0:s[m]=de(w||"",m),s},{}),pathname:l,pathnameBase:i,pattern:e}}function he(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Y(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,c,u)=>(a.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function de(e,t){try{return decodeURIComponent(e)}catch(n){return Y(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function U(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function pe(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?O(e):e;return{pathname:n?n.startsWith("/")?n:me(n,t):t,search:ge(a),hash:we(r)}}function me(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function k(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ve(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Z(e,t){let n=ve(e);return t?n.map((a,r)=>r===e.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function H(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=O(e):(r=L({},e),C(!r.pathname||!r.pathname.includes("?"),k("?","pathname","search",r)),C(!r.pathname||!r.pathname.includes("#"),k("#","pathname","hash",r)),C(!r.search||!r.search.includes("#"),k("#","search","hash",r)));let l=e===""||r.pathname==="",i=l?"/":r.pathname,c;if(i==null)c=n;else{let d=t.length-1;if(!a&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),d-=1;r.pathname=m.join("/")}c=d>=0?t[d]:"/"}let u=pe(r,c),s=i&&i!=="/"&&i.endsWith("/"),f=(l||i===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(s||f)&&(u.pathname+="/"),u}const ee=e=>e.join("/").replace(/\/\/+/g,"/"),ge=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,we=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,te=["post","put","patch","delete"];new Set(te);const xe=["get",...te];new Set(xe);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}const F=o.createContext(null),ye=o.createContext(null),S=o.createContext(null),J=o.createContext(null),I=o.createContext({outlet:null,matches:[],isDataRoute:!1});function Ce(e,t){let{relative:n}=t===void 0?{}:t;W()||C(!1);let{basename:a,navigator:r}=o.useContext(S),{hash:l,pathname:i,search:c}=$(e,{relative:n}),u=i;return a!=="/"&&(u=i==="/"?a:ee([a,i])),r.createHref({pathname:u,search:c,hash:l})}function W(){return o.useContext(J)!=null}function _(){return W()||C(!1),o.useContext(J).location}function ne(e){o.useContext(S).static||o.useLayoutEffect(e)}function Pe(){let{isDataRoute:e}=o.useContext(I);return e?Ue():be()}function be(){W()||C(!1);let e=o.useContext(F),{basename:t,future:n,navigator:a}=o.useContext(S),{matches:r}=o.useContext(I),{pathname:l}=_(),i=JSON.stringify(Z(r,n.v7_relativeSplatPath)),c=o.useRef(!1);return ne(()=>{c.current=!0}),o.useCallback(function(s,f){if(f===void 0&&(f={}),!c.current)return;if(typeof s=="number"){a.go(s);return}let d=H(s,JSON.parse(i),l,f.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ee([t,d.pathname])),(f.replace?a.replace:a.push)(d,f.state,f)},[t,a,i,l,e])}function $(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=o.useContext(S),{matches:r}=o.useContext(I),{pathname:l}=_(),i=JSON.stringify(Z(r,a.v7_relativeSplatPath));return o.useMemo(()=>H(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}var ae=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ae||{}),re=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(re||{});function Re(e){let t=o.useContext(F);return t||C(!1),t}function Se(e){let t=o.useContext(I);return t||C(!1),t}function Le(e){let t=Se(),n=t.matches[t.matches.length-1];return n.route.id||C(!1),n.route.id}function Ue(){let{router:e}=Re(ae.UseNavigateStable),t=Le(re.UseNavigateStable),n=o.useRef(!1);return ne(()=>{n.current=!0}),o.useCallback(function(r,l){l===void 0&&(l={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,N({fromRouteId:t},l)))},[e,t])}function Ee(e){let{basename:t="/",children:n=null,location:a,navigationType:r=R.Pop,navigator:l,static:i=!1,future:c}=e;W()&&C(!1);let u=t.replace(/^\/*/,"/"),s=o.useMemo(()=>({basename:u,navigator:l,static:i,future:N({v7_relativeSplatPath:!1},c)}),[u,c,l,i]);typeof a=="string"&&(a=O(a));let{pathname:f="/",search:d="",hash:m="",state:P=null,key:w="default"}=a,g=o.useMemo(()=>{let h=U(f,u);return h==null?null:{location:{pathname:h,search:d,hash:m,state:P,key:w},navigationType:r}},[u,f,d,m,P,w,r]);return g==null?null:o.createElement(S.Provider,{value:s},o.createElement(J.Provider,{children:n,value:g}))}new Promise(()=>{});/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}function ie(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,l;for(l=0;l<a.length;l++)r=a[l],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Ne(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Te(e,t){return e.button===0&&(!t||t==="_self")&&!Ne(e)}const Oe=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Ie=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],We="6";try{window.__reactRouterVersion=We}catch{}const _e=o.createContext({isTransitioning:!1}),$e="startTransition",X=se[$e];function Ke(e){let{basename:t,children:n,future:a,window:r}=e,l=o.useRef();l.current==null&&(l.current=ue({window:r,v5Compat:!0}));let i=l.current,[c,u]=o.useState({action:i.action,location:i.location}),{v7_startTransition:s}=a||{},f=o.useCallback(d=>{s&&X?X(()=>u(d)):u(d)},[u,s]);return o.useLayoutEffect(()=>i.listen(f),[i,f]),o.createElement(Ee,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:i,future:a})}const je=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Be=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Me=o.forwardRef(function(t,n){let{onClick:a,relative:r,reloadDocument:l,replace:i,state:c,target:u,to:s,preventScrollReset:f,unstable_viewTransition:d}=t,m=ie(t,Oe),{basename:P}=o.useContext(S),w,g=!1;if(typeof s=="string"&&Be.test(s)&&(w=s,je))try{let y=new URL(window.location.href),v=s.startsWith("//")?new URL(y.protocol+s):new URL(s),b=U(v.pathname,P);v.origin===y.origin&&b!=null?s=b+v.search+v.hash:g=!0}catch{}let h=Ce(s,{relative:r}),x=Ae(s,{replace:i,state:c,target:u,preventScrollReset:f,relative:r,unstable_viewTransition:d});function p(y){a&&a(y),y.defaultPrevented||x(y)}return o.createElement("a",T({},m,{href:w||h,onClick:g||l?a:p,ref:n,target:u}))}),ze=o.forwardRef(function(t,n){let{"aria-current":a="page",caseSensitive:r=!1,className:l="",end:i=!1,style:c,to:u,unstable_viewTransition:s,children:f}=t,d=ie(t,Ie),m=$(u,{relative:d.relative}),P=_(),w=o.useContext(ye),{navigator:g,basename:h}=o.useContext(S),x=w!=null&&Ve(m)&&s===!0,p=g.encodeLocation?g.encodeLocation(m).pathname:m.pathname,y=P.pathname,v=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;r||(y=y.toLowerCase(),v=v?v.toLowerCase():null,p=p.toLowerCase()),v&&h&&(v=U(v,h)||v);const b=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let j=y===p||!i&&y.startsWith(p)&&y.charAt(b)==="/",K=v!=null&&(v===p||!i&&v.startsWith(p)&&v.charAt(p.length)==="/"),B={isActive:j,isPending:K,isTransitioning:x},le=j?a:void 0,M;typeof l=="function"?M=l(B):M=[l,j?"active":null,K?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let oe=typeof c=="function"?c(B):c;return o.createElement(Me,T({},d,{"aria-current":le,className:M,ref:n,style:oe,to:u,unstable_viewTransition:s}),typeof f=="function"?f(B):f)});var V;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(V||(V={}));var Q;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Q||(Q={}));function ke(e){let t=o.useContext(F);return t||C(!1),t}function Ae(e,t){let{target:n,replace:a,state:r,preventScrollReset:l,relative:i,unstable_viewTransition:c}=t===void 0?{}:t,u=Pe(),s=_(),f=$(e,{relative:i});return o.useCallback(d=>{if(Te(d,n)){d.preventDefault();let m=a!==void 0?a:E(s)===E(f);u(e,{replace:m,state:r,preventScrollReset:l,relative:i,unstable_viewTransition:c})}},[s,u,f,a,r,n,e,l,i,c])}function Ve(e,t){t===void 0&&(t={});let n=o.useContext(_e);n==null&&C(!1);let{basename:a}=ke(V.useViewTransitionState),r=$(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=U(n.currentLocation.pathname,a)||n.currentLocation.pathname,i=U(n.nextLocation.pathname,a)||n.nextLocation.pathname;return q(r.pathname,i)!=null||q(r.pathname,l)!=null}export{Ke as B,ze as N,Pe as u};
