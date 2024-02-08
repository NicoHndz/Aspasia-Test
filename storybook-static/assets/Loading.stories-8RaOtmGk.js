import{j as d}from"./jsx-runtime-vNq4Oc-g.js";import{r as g}from"./index-4g5l5LRQ.js";import{_ as b,j as q,k as z,l as H,m as J,n as j,o as k,p as Q,q as Y,t as Z,d as A,v as ee,e as D,a as F,x as P,s as B,u as L,g as te,b as se}from"./styled-LzOgqqdS.js";import{_ as c}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import{k as O,c as R}from"./emotion-react.browser.esm-7Wf-dAcN.js";import"./_commonjsHelpers-4gQjN7DL.js";const oe=["sx"],ne=e=>{var t,s;const o={systemProps:{},otherProps:{}},r=(t=e==null||(s=e.theme)==null?void 0:s.unstable_sxConfig)!=null?t:q;return Object.keys(e).forEach(n=>{r[n]?o.systemProps[n]=e[n]:o.otherProps[n]=e[n]}),o};function re(e){const{sx:t}=e,s=b(e,oe),{systemProps:o,otherProps:r}=ne(s);let n;return Array.isArray(t)?n=[o,...t]:typeof t=="function"?n=(...l)=>{const u=t(...l);return z(u)?c({},o,u):o}:n=c({},o,t),c({},r,{sx:n})}const ae=H(),ie=["component","direction","spacing","divider","children","className","useFlexGap"],le=J(),ce=ae("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function ue(e){return ee({props:e,name:"MuiStack",defaultTheme:le})}function de(e,t){const s=g.Children.toArray(e).filter(Boolean);return s.reduce((o,r,n)=>(o.push(r),n<s.length-1&&o.push(g.cloneElement(t,{key:`separator-${n}`})),o),[])}const he=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],pe=({ownerState:e,theme:t})=>{let s=c({display:"flex",flexDirection:"column"},j({theme:t},k({values:e.direction,breakpoints:t.breakpoints.values}),o=>({flexDirection:o})));if(e.spacing){const o=Q(t),r=Object.keys(t.breakpoints.values).reduce((a,i)=>((typeof e.spacing=="object"&&e.spacing[i]!=null||typeof e.direction=="object"&&e.direction[i]!=null)&&(a[i]=!0),a),{}),n=k({values:e.direction,base:r}),l=k({values:e.spacing,base:r});typeof n=="object"&&Object.keys(n).forEach((a,i,m)=>{if(!n[a]){const p=i>0?n[m[i-1]]:"column";n[a]=p}}),s=Y(s,j({theme:t},l,(a,i)=>e.useFlexGap?{gap:P(o,a)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${he(i?n[i]:e.direction)}`]:P(o,a)}}))}return s=Z(t.breakpoints,s),s};function me(e={}){const{createStyledComponent:t=ce,useThemeProps:s=ue,componentName:o="MuiStack"}=e,r=()=>D({root:["root"]},a=>F(o,a),{}),n=t(pe);return g.forwardRef(function(a,i){const m=s(a),h=re(m),{component:p="div",direction:v="column",spacing:E=0,divider:_,children:S,className:G,useFlexGap:I=!1}=h,X=b(h,ie),K={direction:v,spacing:E,useFlexGap:I},W=r();return d.jsx(n,c({as:p,ownerState:K,ref:i,className:A(W.root,G)},X,{children:_?de(S,_):S}))})}function fe(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function ge(e){return parseFloat(e)}const ye=me({createStyledComponent:B("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>L({props:e,name:"MuiStack"})}),ve=ye;function ke(e){return F("MuiSkeleton",e)}te("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const xe=["animation","className","component","height","style","variant","width"];let y=e=>e,$,w,M,N;const be=e=>{const{classes:t,variant:s,animation:o,hasChildren:r,width:n,height:l}=e;return D({root:["root",s,o,r&&"withChildren",r&&!n&&"fitContent",r&&!l&&"heightAuto"]},ke,t)},Ce=O($||($=y`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),_e=O(w||(w=y`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),Se=B("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],s.animation!==!1&&t[s.animation],s.hasChildren&&t.withChildren,s.hasChildren&&!s.width&&t.fitContent,s.hasChildren&&!s.height&&t.heightAuto]}})(({theme:e,ownerState:t})=>{const s=fe(e.shape.borderRadius)||"px",o=ge(e.shape.borderRadius);return c({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:se(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},t.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${o}${s}/${Math.round(o/.6*10)/10}${s}`,"&:empty:before":{content:'"\\00a0"'}},t.variant==="circular"&&{borderRadius:"50%"},t.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&R(M||(M=y`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),Ce),({ownerState:e,theme:t})=>e.animation==="wave"&&R(N||(N=y`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),_e,(t.vars||t).palette.action.hover)),je=g.forwardRef(function(t,s){const o=L({props:t,name:"MuiSkeleton"}),{animation:r="pulse",className:n,component:l="span",height:u,style:a,variant:i="text",width:m}=o,h=b(o,xe),p=c({},o,{animation:r,component:l,variant:i,hasChildren:!!h.children}),v=be(p);return d.jsx(Se,c({as:l,ref:s,className:A(v.root,n),ownerState:p},h,{style:c({width:m,height:u},a)}))}),x=je;function C(){return d.jsxs(ve,{component:"main",spacing:1,height:"100vh",alignItems:"center",justifyContent:"center",children:[d.jsx(x,{variant:"circular",width:40,height:40}),d.jsx(x,{variant:"rectangular",width:210,height:60}),d.jsx(x,{variant:"rounded",width:210,height:60})]})}C.__docgenInfo={description:"",methods:[],displayName:"Loading"};const Te={title:"Components/utils/Loading",component:C},f=()=>d.jsx(C,{});f.__docgenInfo={description:"",methods:[],displayName:"Default"};var T,U,V;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:"() => <Loading />",...(V=(U=f.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const Ue=["Default"];export{f as Default,Ue as __namedExportsOrder,Te as default};
