import{$ as e,$n as t,$r as n,Bi as r,C as i,Cn as a,Ct as o,Di as s,Dn as c,Dr as l,Ei as u,Fn as d,Ft as f,G as p,Gr as m,Hi as h,Jr as g,Jt as _,K as v,Kn as y,Kr as b,Li as x,Ln as ee,Lr as te,Mi as S,Ni as C,Nn as w,Or as ne,Pi as T,Pn as re,Q as ie,Qn as ae,Ri as E,Rn as oe,Rr as se,Tn as D,Tr as ce,W as O,Wn as le,Wr as k,X as A,Y as ue,Yr as j,_i as M,_t as N,at as P,b as de,ci as F,ct as fe,di as I,dr as pe,dt as L,er as me,fi as he,fr as ge,gi as R,gt as z,hi as B,hn as _e,ht as ve,ii as ye,ji as be,li as V,lt as H,mi as U,mt as W,n as G,nr as xe,o as Se,oi as Ce,ot as we,pi as K,q as Te,qn as Ee,qr as q,r as De,si as J,sr as Oe,st as ke,ti as Ae,ui as je,ur as Me,ut as Ne,vi as Pe,vt as Fe,wi as Ie,wr as Le,yi as Re}from"./CollapsePanel-DGnE8-T0.js";var ze=Me(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[Me(`&::-webkit-scrollbar`,{width:0,height:0})]),Be=B({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=x(null);function t(e){!(e.currentTarget.offsetWidth<e.currentTarget.scrollWidth)||e.deltaY===0||(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=ge();return ze.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:pe,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return R(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),Ve=/\s/;function He(e){for(var t=e.length;t--&&Ve.test(e.charAt(t)););return t}var Ue=/^\s+/;function We(e){return e&&e.slice(0,He(e)+1).replace(Ue,``)}var Ge=NaN,Ke=/^[-+]0x[0-9a-f]+$/i,qe=/^0b[01]+$/i,Je=/^0o[0-7]+$/i,Ye=parseInt;function Xe(e){if(typeof e==`number`)return e;if(re(e))return Ge;if(w(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=w(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=We(e);var n=qe.test(e);return n||Je.test(e)?Ye(e.slice(2),n?2:8):Ke.test(e)?Ge:+e}var Ze=function(){return d.Date.now()},Qe=`Expected a function`,$e=Math.max,et=Math.min;function tt(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(Qe);t=Xe(t)||0,w(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?$e(Xe(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?et(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=Ze();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(Ze())}function x(){var e=Ze(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var nt=`Expected a function`;function rt(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(nt);return w(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),tt(e,t,{leading:r,maxWait:t,trailing:i})}var it=Le(`n-tabs`),at={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},ot=B({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:at,slots:Object,setup(e){S(()=>{e.label!==void 0&&xe(`tab-pane`,"`label` is deprecated, please use `tab` instead.")});let t=M(it,null);return t||me(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return R(`div`,{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),st=B({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Ee(at,[`displayDirective`])),setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:l,onBeforeLeaveRef:u,triggerRef:d,handleAdd:f,activateTab:p,handleClose:m}=M(it);return{trigger:d,mergedClosable:J(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&m(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){f();return}let{name:t}=e,r=++l.id;if(t!==n.value){let{value:i}=u;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&l.id===r&&p(t)}):p(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:i,tab:o,value:s,mergedClosable:c,trigger:l,$slots:{default:u}}=this,d=i??o;return R(`div`,{class:`${t}-tabs-tab-wrapper`},this.internalLeftPadded?R(`div`,{class:`${t}-tabs-tab-pad`}):null,R(`div`,Object.assign({key:n,"data-name":n,"data-disabled":r?!0:void 0},Pe({class:[`${t}-tabs-tab`,s===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,c&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:l===`click`?this.activateTab:void 0,onMouseenter:l===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),R(`span`,{class:`${t}-tabs-tab__label`},e?R(ye,null,R(`div`,{class:`${t}-tabs-tab__height-placeholder`},`\xA0`),R(D,{clsPrefix:t},{default:()=>R(a,null)})):u?u():typeof d==`object`?d:y(d??n)),c&&this.type===`card`?R(_e,{clsPrefix:t,class:`${t}-tabs-tab__close`,onClick:this.handleClose,disabled:r}):null))}}),ct=m(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[q(`segment-type`,[m(`tabs-rail`,[k(`&.transition-disabled`,[m(`tabs-capsule`,`
 transition: none;
 `)])])]),q(`top`,[m(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),q(`left`,[m(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),q(`left, right`,`
 flex-direction: row;
 `,[m(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),m(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),q(`right`,`
 flex-direction: row-reverse;
 `,[m(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),m(`tabs-bar`,`
 left: 0;
 `)]),q(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[m(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),m(`tabs-bar`,`
 top: 0;
 `)]),m(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[m(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),m(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[m(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[q(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),k(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),q(`flex`,[m(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[m(`tabs-wrapper`,`
 width: 100%;
 `,[m(`tabs-tab`,`
 margin-right: 0;
 `)])])]),m(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[b(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),b(`prefix`,`padding-right: 16px;`),b(`suffix`,`padding-left: 16px;`)]),q(`top, bottom`,[k(`>`,[m(`tabs-nav`,[m(`tabs-nav-scroll-wrapper`,[k(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),k(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),q(`shadow-start`,[k(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),q(`shadow-end`,[k(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),q(`left, right`,[m(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),k(`>`,[m(`tabs-nav`,[m(`tabs-nav-scroll-wrapper`,[k(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),k(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),q(`shadow-start`,[k(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),q(`shadow-end`,[k(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),m(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[m(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[k(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),k(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),m(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),m(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),m(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),m(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[q(`disabled`,{cursor:`not-allowed`}),b(`close`,`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),b(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),m(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[k(`&.transition-disabled`,`
 transition: none;
 `),q(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),m(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),m(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[k(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),k(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),k(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),k(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),k(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),m(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),q(`line-type, bar-type`,[m(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[k(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),q(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),q(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),m(`tabs-nav`,[q(`line-type`,[q(`top`,[b(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),m(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),m(`tabs-bar`,`
 bottom: -1px;
 `)]),q(`left`,[b(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),m(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),m(`tabs-bar`,`
 right: -1px;
 `)]),q(`right`,[b(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),m(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),m(`tabs-bar`,`
 left: -1px;
 `)]),q(`bottom`,[b(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),m(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),m(`tabs-bar`,`
 top: -1px;
 `)]),b(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),m(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),m(`tabs-bar`,`
 border-radius: 0;
 `)]),q(`card-type`,[b(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),m(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),m(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),m(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[q(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[b(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),g(`disabled`,[k(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),q(`closable`,`padding-right: 8px;`),q(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),q(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),q(`left, right`,`
 flex-direction: column; 
 `,[b(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),m(`tabs-wrapper`,`
 flex-direction: column;
 `),m(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[m(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),q(`top`,[q(`card-type`,[m(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),b(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),m(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[q(`active`,`
 border-bottom: 1px solid #0000;
 `)]),m(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),m(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),q(`left`,[q(`card-type`,[m(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),b(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),m(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[q(`active`,`
 border-right: 1px solid #0000;
 `)]),m(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),m(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),q(`right`,[q(`card-type`,[m(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),b(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),m(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[q(`active`,`
 border-left: 1px solid #0000;
 `)]),m(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),m(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),q(`bottom`,[q(`card-type`,[m(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),b(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),m(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[q(`active`,`
 border-top: 1px solid #0000;
 `)]),m(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),m(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),lt=rt,ut=B({name:`Tabs`,props:Object.assign(Object.assign({},c.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),slots:Object,setup(e,{slots:n}){S(()=>{e.labelSize!==void 0&&xe(`tabs`,"`label-size` is deprecated, please use `size` instead."),e.activeName!==void 0&&xe(`tabs`,"`active-name` is deprecated, please use `value` instead."),e.onActiveNameChange!==void 0&&xe(`tabs`,"`on-active-name-change` is deprecated, please use `on-update:value` instead.")});let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a}=oe(e),u=c(`Tabs`,`-tabs`,ct,o,e,r),d=x(null),f=x(null),p=x(null),m=x(null),h=x(null),g=x(null),_=x(!0),v=x(!0),y=ce(e,[`labelSize`,`size`]),b=J(()=>y.value?y.value:a?.value?.Tabs?.size||`medium`),C=ce(e,[`activeName`,`value`]),w=x(C.value??e.defaultValue??(n.default?ae(n.default())[0]?.props?.name:null)),T=l(C,w),re={id:0},ie=J(()=>{if(!(!e.justifyContent||e.type===`card`))return{display:`flex`,justifyContent:e.justifyContent}});be(T,()=>{re.id=0,A(),ue()});function D(){let{value:e}=T;return e===null?null:d.value?.querySelector(`[data-name="${e}"]`)}function O(t){if(e.type===`card`)return;let{value:n}=f;if(!n)return;let i=n.style.opacity===`0`;if(t){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o,placement:s}=e;if(t.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(k([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;n.style.left=`${e}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${t.offsetLeft}px`,n.style.maxWidth=`${t.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(k([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;n.style.top=`${e}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${t.offsetTop}px`,n.style.maxHeight=`${t.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function le(){if(e.type===`card`)return;let{value:t}=f;t&&(t.style.opacity=`0`)}function k(e){let{value:t}=f;if(t)for(let n of e)t.style[n]=``}function A(){if(e.type===`card`)return;let t=D();t?O(t):le()}function ue(){let e=h.value?.$el;if(!e)return;let t=D();if(!t)return;let{scrollLeft:n,offsetWidth:r}=e,{offsetLeft:i,offsetWidth:a}=t;n>i?e.scrollTo({top:0,left:i,behavior:`smooth`}):i+a>n+r&&e.scrollTo({top:0,left:i+a-r,behavior:`smooth`})}let M=x(null),N=0,P=null;function de(e){let t=M.value;if(t){N=e.getBoundingClientRect().height;let n=`${N}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};P?(r(),P(),P=null):P=r}}function F(e){let t=M.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(N,n)}px`};P?(P(),P=null,r()):P=r}}function fe(){let t=M.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let I={value:[]},pe=x(`next`);function L(e){let t=T.value,n=`next`;for(let r of I.value){if(r===t)break;if(r===e){n=`prev`;break}}pe.value=n,me(e)}function me(n){let{onActiveNameChange:r,onUpdateValue:i,"onUpdate:value":a}=e;r&&t(r,n),i&&t(i,n),a&&t(a,n),w.value=n}function he(n){let{onClose:r}=e;r&&t(r,n)}let ge=!0;function R(){let{value:e}=f;if(!e)return;ge||=!1;let t=`transition-disabled`;e.classList.add(t),A(),e.classList.remove(t)}let z=x(null);function B({transitionDisabled:e}){let t=d.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=D();n&&z.value&&(z.value.style.width=`${n.offsetWidth}px`,z.value.style.height=`${n.offsetHeight}px`,z.value.style.transform=`translateX(${n.offsetLeft-te(getComputedStyle(t).paddingLeft)}px)`,e&&z.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}be([T],()=>{e.type===`segment`&&Re(()=>{B({transitionDisabled:!1})})}),Ie(()=>{e.type===`segment`&&B({transitionDisabled:!0})});let _e=0;function ve(t){if(t.contentRect.width===0&&t.contentRect.height===0||_e===t.contentRect.width)return;_e=t.contentRect.width;let{type:n}=e;if((n===`line`||n===`bar`)&&(ge||e.justifyContent?.startsWith(`space`))&&R(),n!==`segment`){let{placement:t}=e;G((t===`top`||t===`bottom`?h.value?.$el:g.value)||null)}}let ye=lt(ve,64);be([()=>e.justifyContent,()=>e.size],()=>{Re(()=>{let{type:t}=e;(t===`line`||t===`bar`)&&R()})});let V=x(!1);function H(t){let{target:n,contentRect:{width:r,height:i}}=t,a=n.parentElement.parentElement.offsetWidth,o=n.parentElement.parentElement.offsetHeight,{placement:s}=e;if(!V.value)s===`top`||s===`bottom`?a<r&&(V.value=!0):o<i&&(V.value=!0);else{let{value:e}=m;if(!e)return;s===`top`||s===`bottom`?a-r>e.$el.offsetWidth&&(V.value=!1):o-i>e.$el.offsetHeight&&(V.value=!1)}G(h.value?.$el||null)}let U=lt(H,64);function W(){let{onAdd:t}=e;t&&t(),Re(()=>{let e=D(),{value:t}=h;!e||!t||t.scrollTo({left:e.offsetLeft,top:0,behavior:`smooth`})})}function G(t){if(!t)return;let{placement:n}=e;if(n===`top`||n===`bottom`){let{scrollLeft:e,scrollWidth:n,offsetWidth:r}=t;_.value=e<=0,v.value=e+r>=n}else{let{scrollTop:e,scrollHeight:n,offsetHeight:r}=t;_.value=e<=0,v.value=e+r>=n}}let Se=lt(e=>{G(e.target)},64);s(it,{triggerRef:E(e,`trigger`),tabStyleRef:E(e,`tabStyle`),tabClassRef:E(e,`tabClass`),addTabStyleRef:E(e,`addTabStyle`),addTabClassRef:E(e,`addTabClass`),paneClassRef:E(e,`paneClass`),paneStyleRef:E(e,`paneStyle`),mergedClsPrefixRef:r,typeRef:E(e,`type`),closableRef:E(e,`closable`),valueRef:T,tabChangeIdRef:re,onBeforeLeaveRef:E(e,`onBeforeLeave`),activateTab:L,handleClose:he,handleAdd:W}),ne(()=>{A(),ue()}),S(()=>{let{value:e}=p;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;_.value?e.classList.remove(n):e.classList.add(n),v.value?e.classList.remove(i):e.classList.add(i)});let Ce={syncBarPosition:()=>{A()}},we=()=>{B({transitionDisabled:!0})},K=J(()=>{let{value:t}=b,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:l,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:x,closeColorPressed:ee,closeBorderRadius:te,[j(`panePadding`,t)]:S,[j(`tabPadding`,r)]:C,[j(`tabPaddingVertical`,r)]:w,[j(`tabGap`,r)]:ne,[j(`tabGap`,`${r}Vertical`)]:T,[j(`tabTextColor`,n)]:re,[j(`tabTextColorActive`,n)]:ie,[j(`tabTextColorHover`,n)]:ae,[j(`tabTextColorDisabled`,n)]:E,[j(`tabFontSize`,t)]:oe},common:{cubicBezierEaseInOut:D}}=u.value;return{"--n-bezier":D,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":oe,"--n-tab-text-color":re,"--n-tab-text-color-active":ie,"--n-tab-text-color-disabled":E,"--n-tab-text-color-hover":ae,"--n-pane-text-color":d,"--n-tab-border-color":l,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":x,"--n-close-color-pressed":ee,"--n-close-border-radius":te,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":C,"--n-tab-padding-vertical":w,"--n-tab-gap":ne,"--n-tab-gap-vertical":T,"--n-pane-padding-left":se(S,`left`),"--n-pane-padding-right":se(S,`right`),"--n-pane-padding-top":se(S,`top`),"--n-pane-padding-bottom":se(S,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Te=i?ee(`tabs`,J(()=>`${b.value[0]}${e.type[0]}`),K,e):void 0;return Object.assign({mergedClsPrefix:r,mergedValue:T,renderedNames:new Set,segmentCapsuleElRef:z,tabsPaneWrapperRef:M,tabsElRef:d,barElRef:f,addTabInstRef:m,xScrollInstRef:h,scrollWrapperElRef:p,addTabFixed:V,tabWrapperStyle:ie,handleNavResize:ye,mergedSize:b,handleScroll:Se,handleTabsResize:U,cssVars:i?void 0:K,themeClass:Te?.themeClass,animationDirection:pe,renderNameListRef:I,yScrollElRef:g,handleSegmentResize:we,onAnimationBeforeLeave:de,onAnimationEnter:F,onAnimationAfterEnter:fe,onRender:Te?.onRender},Ce)},render(){let{mergedClsPrefix:e,type:t,placement:n,addTabFixed:r,addable:i,mergedSize:a,renderNameListRef:o,onRender:s,paneWrapperClass:c,paneWrapperStyle:l,$slots:{default:u,prefix:d,suffix:f}}=this;s?.();let p=u?ae(u()).filter(e=>e.type.__TAB_PANE__===!0):[],m=u?ae(u()).filter(e=>e.type.__TAB__===!0):[],h=!m.length,g=t===`card`,_=t===`segment`,v=!g&&!_&&this.justifyContent;o.value=[];let y=()=>{let t=R(`div`,{style:this.tabWrapperStyle,class:`${e}-tabs-wrapper`},v?null:R(`div`,{class:`${e}-tabs-scroll-padding`,style:n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`}}),h?p.map((e,t)=>(o.value.push(e.props.name),mt(R(st,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!v||v===`center`||v===`start`||v===`end`)}),e.children?{default:e.children.tab}:void 0)))):m.map((e,t)=>(o.value.push(e.props.name),mt(t!==0&&!v?pt(e):e))),!r&&i&&g?ft(i,(h?p.length:m.length)!==0):null,v?null:R(`div`,{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return R(`div`,{ref:`tabsElRef`,class:`${e}-tabs-nav-scroll-content`},g&&i?R(Oe,{onResize:this.handleTabsResize},{default:()=>t}):t,g?R(`div`,{class:`${e}-tabs-pad`}):null,g?null:R(`div`,{ref:`barElRef`,class:`${e}-tabs-bar`}))},b=_?`top`:n;return R(`div`,{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${a}-size`,v&&`${e}-tabs--flex`,`${e}-tabs--${b}`],style:this.cssVars},R(`div`,{class:[`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${b}`,`${e}-tabs-nav`]},le(d,t=>t&&R(`div`,{class:`${e}-tabs-nav__prefix`},t)),_?R(Oe,{onResize:this.handleSegmentResize},{default:()=>R(`div`,{class:`${e}-tabs-rail`,ref:`tabsElRef`},R(`div`,{class:`${e}-tabs-capsule`,ref:`segmentCapsuleElRef`},R(`div`,{class:`${e}-tabs-wrapper`},R(`div`,{class:`${e}-tabs-tab`}))),h?p.map((e,t)=>(o.value.push(e.props.name),R(st,Object.assign({},e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),e.children?{default:e.children.tab}:void 0))):m.map((e,t)=>(o.value.push(e.props.name),t===0?e:pt(e))))}):R(Oe,{onResize:this.handleNavResize},{default:()=>R(`div`,{class:`${e}-tabs-nav-scroll-wrapper`,ref:`scrollWrapperElRef`},[`top`,`bottom`].includes(b)?R(Be,{ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:y}):R(`div`,{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll,ref:`yScrollElRef`},y()))}),r&&i&&g?ft(i,!0):null,le(f,t=>t&&R(`div`,{class:`${e}-tabs-nav__suffix`},t))),h&&(this.animated&&(b===`top`||b===`bottom`)?R(`div`,{ref:`tabsPaneWrapperRef`,style:l,class:[`${e}-tabs-pane-wrapper`,c]},dt(p,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):dt(p,this.mergedValue,this.renderedNames)))}});function dt(e,t,r,i,a,o,s){let c=[];return e.forEach(e=>{let{name:n,displayDirective:i,"display-directive":a}=e.props,o=e=>i===e||a===e,s=t===n;if(e.key!==void 0&&(e.key=n),s||o(`show`)||o(`show:lazy`)&&r.has(n)){r.has(n)||r.add(n);let t=!o(`if`);c.push(t?T(e,[[Ae,s]]):e)}}),s?R(n,{name:`${s}-transition`,onBeforeLeave:i,onEnter:a,onAfterEnter:o},{default:()=>c}):c}function ft(e,t){return R(st,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled})}function pt(e){let t=Ce(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function mt(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var ht={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},gt=B({name:`ArrowUpCircleOutline`,render:function(e,t){return u(),I(`svg`,ht,t[0]||=[F(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M176 249.38L256 170l80 79.38`},null,-1),F(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M256 181.03V342`},null,-1),F(`path`,{d:`M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192s192-86 192-192z`,fill:`none`,stroke:`currentColor`,"stroke-miterlimit":`10`,"stroke-width":`32`},null,-1)])}}),_t={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},vt=B({name:`CloseOutline`,render:function(e,t){return u(),I(`svg`,_t,t[0]||=[F(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M368 368L144 144`},null,-1),F(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M368 144L144 368`},null,-1)])}}),yt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},bt=B({name:`CloudDownloadOutline`,render:function(e,t){return u(),I(`svg`,yt,t[0]||=[F(`path`,{d:`M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2c-60 5.7-112 35.88-112 98.4S70 336 136 336h56`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1),F(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M192 400.1l64 63.9l64-63.9`},null,-1),F(`path`,{fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`,d:`M256 224v224.03`},null,-1)])}}),xt={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},St=B({name:`GlobeOutline`,render:function(e,t){return u(),I(`svg`,xt,t[0]||=[he(`<path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208s208-93.13 208-208S370.87 48 256 48z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32"></path><path d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path d="M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M256 48v416"></path><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M464 256H48"></path>`,6)])}}),Ct={xmlns:`http://www.w3.org/2000/svg`,"xmlns:xlink":`http://www.w3.org/1999/xlink`,viewBox:`0 0 512 512`},wt=B({name:`SettingsOutline`,render:function(e,t){return u(),I(`svg`,Ct,t[0]||=[F(`path`,{d:`M262.29 192.31a64 64 0 1 0 57.4 57.4a64.13 64.13 0 0 0-57.4-57.4zM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22a155.3 155.3 0 0 1-21.46-12.57a16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22a155.3 155.3 0 0 1 21.46 12.57a16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47z`,fill:`none`,stroke:`currentColor`,"stroke-linecap":`round`,"stroke-linejoin":`round`,"stroke-width":`32`},null,-1)])}}),Tt=class extends Error{name=`KyError`;get isKyError(){return!0}},Y=class extends Tt{name=`HTTPError`;response;request;options;data;constructor(e,t,n){let r=`${e.status||e.status===0?e.status:``} ${e.statusText??``}`.trim(),i=r?`status code ${r}`:`an unknown error`;super(`Request failed with ${i}: ${t.method} ${t.url}`),this.response=e,this.request=t,this.options=n}},Et=class extends Tt{name=`NetworkError`;request;constructor(e,t){super(`Request failed due to a network error: ${e.method} ${e.url}`,t),this.request=e}},Dt=class extends Error{name=`NonError`;value;constructor(e){let t=`Non-error value was thrown`;try{typeof e==`string`?t=e:e&&typeof e==`object`&&`message`in e&&typeof e.message==`string`&&(t=e.message)}catch{}super(t),this.value=e}},Ot=class extends Tt{name=`ForceRetryError`;customDelay;code;customRequest;constructor(e){let t=e?.cause?e.cause instanceof Error?e.cause:new Dt(e.cause):void 0;super(e?.code?`Forced retry: ${e.code}`:`Forced retry`,t?{cause:t}:void 0),this.customDelay=e?.delay,this.code=e?.code,this.customRequest=e?.request}},kt=class extends Error{name=`SchemaValidationError`;issues;constructor(e){super(`Response schema validation failed`),this.issues=e}},X=class extends Tt{name=`TimeoutError`;request;constructor(e){super(`Request timed out: ${e.method} ${e.url}`),this.request=e}},At=(()=>{let e=!1,t=!1,n=typeof globalThis.ReadableStream==`function`,r=typeof globalThis.Request==`function`;if(n&&r)try{t=new globalThis.Request(`https://empty.invalid`,{body:new globalThis.ReadableStream,method:`POST`,get duplex(){return e=!0,`half`}}).headers.has(`Content-Type`)}catch(e){if(e instanceof Error&&e.message===`unsupported BodyInit type`)return!1;throw e}return e&&!t})(),jt=typeof globalThis.AbortController==`function`,Mt=typeof globalThis.AbortSignal==`function`&&typeof globalThis.AbortSignal.any==`function`,Nt=typeof globalThis.ReadableStream==`function`,Pt=typeof globalThis.FormData==`function`,Ft=[`get`,`post`,`put`,`patch`,`head`,`delete`],It={json:`application/json`,text:`text/*`,formData:`multipart/form-data`,arrayBuffer:`*/*`,blob:`*/*`,bytes:`*/*`},Lt=2147483647,Rt=Symbol(`stop`),zt=class{options;constructor(e){this.options=e}},Bt=e=>new zt(e),Vt={json:!0,parseJson:!0,stringifyJson:!0,searchParams:!0,baseUrl:!0,prefix:!0,retry:!0,timeout:!0,totalTimeout:!0,hooks:!0,throwHttpErrors:!0,onDownloadProgress:!0,onUploadProgress:!0,fetch:!0,context:!0},Ht={method:!0,headers:!0,body:!0,mode:!0,credentials:!0,cache:!0,redirect:!0,referrer:!0,referrerPolicy:!0,integrity:!0,keepalive:!0,signal:!0,window:!0,duplex:!0},Ut=new TextEncoder,Wt=e=>{if(!e)return 0;if(e instanceof FormData){let t=0;for(let[n,r]of e)t+=40,t+=Ut.encode(`Content-Disposition: form-data; name="${n}"`).byteLength,t+=typeof r==`string`?Ut.encode(r).byteLength:r.size;return t}return e instanceof Blob?e.size:e instanceof ArrayBuffer||ArrayBuffer.isView(e)?e.byteLength:typeof e==`string`?Ut.encode(e).byteLength:e instanceof URLSearchParams?Ut.encode(e.toString()).byteLength:0},Gt=(e,t,n)=>{let r,i=0;return e.pipeThrough(new TransformStream({transform(e,a){if(a.enqueue(e),r){i+=r.byteLength;let e=t===0?0:i/t;e>=1&&(e=1-2**-52),n?.({percent:e,totalBytes:Math.max(t,i),transferredBytes:i},r)}r=e},flush(){r&&(i+=r.byteLength,n?.({percent:1,totalBytes:Math.max(t,i),transferredBytes:i},r))}}))},Kt=(e,t)=>{if(!e.body)return e;let n={status:e.status,statusText:e.statusText,headers:e.headers};if(e.status===204)return new Response(null,n);let r=Math.max(0,Number(e.headers.get(`content-length`))||0);return new Response(Gt(e.body,r,t),n)},qt=(e,t,n)=>{if(!e.body)return e;let r=Wt(n??e.body);return new Request(e,{duplex:`half`,body:Gt(e.body,r,t)})},Z=e=>typeof e==`object`&&!!e,Jt=Symbol(`replaceOption`),Yt=e=>Z(e)&&e[Jt]===!0?{isReplace:!0,value:e.value}:{isReplace:!1,value:e},Xt=(...e)=>{for(let t of e)if((!Z(t)||Array.isArray(t))&&t!==void 0)throw TypeError("The `options` argument must be an object");return on({},...e)},Zt=(e={},t={})=>{let n=new globalThis.Headers(e),r=t instanceof globalThis.Headers,i=new globalThis.Headers(t);for(let[e,t]of i.entries())r&&t===`undefined`||t===void 0?n.delete(e):n.set(e,t);return n},Qt=e=>{if(!Z(e)||Array.isArray(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null},$t=e=>{if(e instanceof URLSearchParams){let t=new URLSearchParams(e),n=e[Q];return n&&(t[Q]=new Set(n)),t}return e instanceof globalThis.Headers?new globalThis.Headers(e):Array.isArray(e)?[...e]:Qt(e)?{...e}:e},en=e=>Object.fromEntries(Object.entries(e).filter(e=>e[1]!==void 0)),tn=(e,t)=>Qt(e)&&Qt(t)?en({...e,...t}):Zt(e,t);function nn(e,t,n){return Object.hasOwn(t,n)&&t[n]===void 0?[]:on(e[n]??[],t[n]??[])}var rn=(e={},t={})=>({init:nn(e,t,`init`),beforeRequest:nn(e,t,`beforeRequest`),beforeRetry:nn(e,t,`beforeRetry`),beforeError:nn(e,t,`beforeError`),afterResponse:nn(e,t,`afterResponse`)}),Q=Symbol(`deletedParameters`),an=(e,t)=>{let n=new URLSearchParams,r=new Set;for(let i of[e,t])if(i!==void 0)if(i instanceof URLSearchParams){for(let[e,t]of i.entries())n.append(e,t),r.delete(e);let e=i[Q];if(e)for(let t of e)n.delete(t),r.add(t)}else if(Array.isArray(i))for(let e of i){if(!Array.isArray(e)||e.length!==2)throw TypeError(`Array search parameters must be provided in [[key, value], ...] format`);n.append(String(e[0]),String(e[1])),r.delete(String(e[0]))}else if(Z(i))for(let[e,t]of Object.entries(i))t===void 0?(n.delete(e),r.add(e)):(n.append(e,String(t)),r.delete(e));else{let e=new URLSearchParams(i);for(let[t,i]of e.entries())n.append(t,i),r.delete(t)}return r.size>0&&(n[Q]=r),n},on=(...e)=>{let t={},n={},r={},i,a=[];for(let o of e)if(Array.isArray(o))Array.isArray(t)||(t=[]),t=[...t,...o];else if(Z(o)){for(let[e,n]of Object.entries(o)){if(e===`signal`&&n instanceof globalThis.AbortSignal){a.push(n);continue}let r=Yt(n),{isReplace:o}=r;if(n=r.value,e===`context`){if(n!=null&&(!Z(n)||Array.isArray(n)))throw TypeError("The `context` option must be an object");t={...t,context:n==null?{}:o?{...n}:{...t.context,...n}};continue}if(e===`searchParams`){i=n==null?void 0:o||i===void 0?n:an(i,n);continue}Z(n)&&!o&&e in t&&(n=on(t[e],n)),t={...t,[e]:n}}if(Z(o.hooks)){let{value:e,isReplace:n}=Yt(o.hooks);r=rn(n?{}:r,e),t.hooks=r}if(Z(o.headers)){let{value:e,isReplace:r}=Yt(o.headers);n=r?$t(e):tn(n,e),t.headers=n}}return i!==void 0&&(t.searchParams=i),a.length>0&&(a.length===1?t.signal=a[0]:Mt?t.signal=AbortSignal.any(a):t.signal=a.at(-1)),t},sn=e=>Ft.includes(e)?e.toUpperCase():e,cn={limit:2,methods:[`get`,`put`,`head`,`delete`,`options`,`trace`],statusCodes:[408,413,429,500,502,503,504],afterStatusCodes:[413,429,503],maxRetryAfter:1/0,backoffLimit:1/0,delay:e=>.3*2**(e-1)*1e3,jitter:void 0,retryOnTimeout:!1},ln=(e={})=>{if(typeof e==`number`)return{...cn,limit:e};if(e.methods&&!Array.isArray(e.methods))throw Error(`retry.methods must be an array`);if(e.statusCodes&&!Array.isArray(e.statusCodes))throw Error(`retry.statusCodes must be an array`);let t=Object.fromEntries(Object.entries({...e,methods:e.methods?.map(e=>e.toLowerCase())}).filter(([,e])=>e!==void 0));return{...cn,...t}};async function un(e,t,n,r){return new Promise((i,a)=>{let o=setTimeout(()=>{n&&n.abort(),a(new X(e))},r.timeout);r.fetch(e,t).then(i).catch(a).then(()=>{clearTimeout(o)})})}async function dn(e,{signal:t}){return new Promise((n,r)=>{t&&(t.throwIfAborted(),t.addEventListener(`abort`,i,{once:!0}));function i(){clearTimeout(a),r(t.reason)}let a=setTimeout(()=>{t?.removeEventListener(`abort`,i),n()},e)})}var fn=e=>{let t={};for(let n in e)Object.hasOwn(e,n)&&!(n in Ht)&&!(n in Vt)&&(t[n]=e[n]);return t},pn=e=>e===void 0?!1:Array.isArray(e)?e.length>0:e instanceof URLSearchParams?e.size>0||!!e[Q]?.size:typeof e==`object`?Object.keys(e).length>0:typeof e==`string`?e.trim().length>0:!!e,mn=Object.prototype.toString,hn=e=>mn.call(e)===`[object Error]`,gn=new Set([`network error`,`NetworkError when attempting to fetch resource.`,`The Internet connection appears to be offline.`,`Network request failed`,`fetch failed`,`terminated`,` A network error occurred.`,`Network connection lost`]);function _n(e){if(!(e&&hn(e)&&e.name===`TypeError`&&typeof e.message==`string`))return!1;let{message:t,stack:n}=e;return t===`Load failed`?n===void 0||`__sentry_captured__`in e:t.startsWith(`error sending request for url`)||t===`Failed to fetch`||t.startsWith(`Failed to fetch (`)&&t.endsWith(`)`)?!0:gn.has(t)}var vn=(e,t)=>e instanceof t||e?.name===t.name;function yn(e){return vn(e,Y)}function bn(e){return vn(e,Et)}function xn(e){return vn(e,X)}var Sn=10*1024*1024,Cn="The `prefixUrl` option has been renamed `prefix` in v2 and enhanced to allow slashes in input. See also the new `baseUrl` option for improved flexibility with standard URL resolution: https://github.com/sindresorhus/ky#baseurl",wn=Symbol(`timedOutResponseData`),Tn=e=>{let t=/;\s*charset\s*=\s*(?:"([^"]+)"|([^;,\s]+))/i.exec(e),n=t?.[1]??t?.[2];if(n)try{return new TextDecoder(n)}catch{}return new TextDecoder},En="The `schema` argument must follow the Standard Schema specification",Dn=e=>typeof e==`object`?{...e,...e.methods&&{methods:[...e.methods]},...e.statusCodes&&{statusCodes:[...e.statusCodes]},...e.afterStatusCodes&&{afterStatusCodes:[...e.afterStatusCodes]}}:e,On=Object.prototype.toString,kn=e=>e instanceof globalThis.Request||On.call(e)===`[object Request]`,An=e=>e instanceof globalThis.Response||On.call(e)===`[object Response]`,jn=e=>Array.isArray(e)?e.map(e=>[...e]):$t(e);function Mn(e){let t={...e,json:$t(e.json),context:$t(e.context),headers:$t(e.headers),searchParams:jn(e.searchParams)};return e.retry!==void 0&&(t.retry=Dn(e.retry)),t}var Nn=async(e,t)=>{if(typeof t!=`object`&&typeof t!=`function`||t===null)throw TypeError(En);let n=t[`~standard`];if(typeof n!=`object`||!n||typeof n.validate!=`function`)throw TypeError(En);let r=await n.validate(e);if(r.issues)throw new kt(r.issues);return r.value},Pn=class e{static create(t,n){let r=n.hooks?.init??[],i=r.length>0?Mn(n):n;for(let e of r)e(i);let a=new e(t,i),o=async()=>{if(typeof a.#i.timeout==`number`&&a.#i.timeout>2147483647)throw RangeError(`The \`timeout\` option cannot be greater than ${Lt}`);if(typeof a.#i.totalTimeout==`number`&&a.#i.totalTimeout>2147483647)throw RangeError(`The \`totalTimeout\` option cannot be greater than ${Lt}`);await Promise.resolve();let e=await a.#w(),t=e??await a.#E(async()=>a.#k()),n=e!==void 0||a.#O();for(;;){if(t===void 0)return t;if(An(t))try{t=await a.#T(t)}catch(e){if(!(e instanceof Ot))throw e;let r=await a.#D(e,async()=>a.#k());if(r===void 0)return r;t=r,n=a.#O();continue}let e=t;if(!e.ok&&e.type!==`opaque`&&(typeof a.#i.throwHttpErrors==`function`?a.#i.throwHttpErrors(e.status):a.#i.throwHttpErrors)){let r=new Y(e,a.#P(e),a.#M()),i=r;if(r.data=await a.#h(e),n)throw i;let o=await a.#D(r,async()=>a.#k());if(o===void 0)return o;t=o,n=a.#O();continue}break}if(!An(t))return t;if(a.#m(t),a.#i.onDownloadProgress){if(typeof a.#i.onDownloadProgress!=`function`)throw TypeError("The `onDownloadProgress` option must be a function");if(!Nt)throw Error("Streams are not supported in your environment. `ReadableStream` is missing.");let e=t.clone();return a.#x(t),Kt(e,a.#i.onDownloadProgress)}return t},s=(async()=>{try{return await o()}catch(e){if(!(e instanceof Error)||a.#s.has(e))throw e;let t=e;for(let e of a.#i.hooks.beforeError){let n=await e({request:a.request,options:a.#M(),error:t,retryCount:a.#n});n instanceof Error&&(t=n)}throw t}finally{let e=a.#a;a.#b(e?.body??void 0),a.request!==e&&a.#b(a.request.body??void 0)}})();for(let[e,t]of Object.entries(It))e===`bytes`&&typeof globalThis.Response?.prototype?.bytes!=`function`||(s[e]=async n=>{a.request.headers.set(`accept`,a.request.headers.get(`accept`)||t);let r=await s;if(e!==`json`)return r[e]();let o=await r.text();if(o===``)return n===void 0?JSON.parse(o):Nn(void 0,n);let c=i.parseJson?await i.parseJson(o,{request:a.#P(r),response:r}):JSON.parse(o);return n===void 0?c:Nn(c,n)});return s}static#e(e){return e&&typeof e==`object`&&!Array.isArray(e)&&!(e instanceof URLSearchParams)?Object.fromEntries(Object.entries(e).filter(([,e])=>e!==void 0)):e}request;#t;#n=0;#r;#i;#a;#o;#s=new WeakSet;#c;#l;#u=!1;#d=new WeakMap;constructor(t,n={}){if(this.#r=t,Object.hasOwn(n,`prefixUrl`))throw Error(Cn);if(this.#i={...n,headers:Zt(this.#r.headers,n.headers),hooks:rn({},n.hooks),method:sn(n.method??this.#r.method??`GET`),prefix:String(n.prefix||``),retry:ln(n.retry),throwHttpErrors:n.throwHttpErrors??!0,timeout:n.timeout??1e4,totalTimeout:n.totalTimeout??!1,fetch:n.fetch??globalThis.fetch.bind(globalThis),context:n.context??{}},typeof this.#r!=`string`&&!(this.#r instanceof URL||this.#r instanceof globalThis.Request))throw TypeError("`input` must be a string, URL, or Request");if(typeof this.#r==`string`&&(this.#i.prefix&&(this.#r=`${this.#i.prefix.replace(/\/+$/,``)}/${this.#r.replace(/^\/+/,``)}`),this.#i.baseUrl)){let e;try{e=new URL(this.#r)}catch{}e||(this.#r=new URL(this.#r,new Request(this.#i.baseUrl).url))}jt&&Mt&&(this.#o=this.#i.signal??this.#r.signal,this.#t=new globalThis.AbortController,this.#i.signal=this.#S()),At&&(this.#i.duplex=`half`),this.#i.json!==void 0&&(this.#i.body=this.#i.stringifyJson?.(this.#i.json)??JSON.stringify(this.#i.json),this.#i.headers.set(`content-type`,this.#i.headers.get(`content-type`)??`application/json`));let r=n.headers&&new globalThis.Headers(n.headers).has(`content-type`);if(this.#r instanceof globalThis.Request&&(Pt&&this.#i.body instanceof globalThis.FormData||this.#i.body instanceof URLSearchParams)&&!r&&this.#i.headers.delete(`content-type`),this.request=new globalThis.Request(this.#r,this.#i),pn(this.#i.searchParams)){let t=new URL(this.request.url),n=this.#i.searchParams?.[Q];if(n)for(let e of n)t.searchParams.delete(e);if(typeof this.#i.searchParams==`string`){let e=this.#i.searchParams.replace(/^\?/,``);e!==``&&(t.search=t.search?`${t.search}&${e}`:`?${e}`)}else{let n=new URLSearchParams(e.#e(this.#i.searchParams));for(let[e,r]of n.entries())t.searchParams.append(e,r)}if(this.#i.searchParams&&typeof this.#i.searchParams==`object`&&!Array.isArray(this.#i.searchParams)&&!(this.#i.searchParams instanceof URLSearchParams))for(let[e,n]of Object.entries(this.#i.searchParams))n===void 0&&t.searchParams.delete(e);this.request=new globalThis.Request(t,this.#i)}if(this.#i.onUploadProgress&&typeof this.#i.onUploadProgress!=`function`)throw TypeError("The `onUploadProgress` option must be a function");this.#l=typeof this.#i.totalTimeout==`number`?this.#j():void 0}#f(){let e=this.#i.retry.delay(this.#n+1),t=e;return this.#i.retry.jitter===!0?t=Math.random()*e:typeof this.#i.retry.jitter==`function`&&(t=this.#i.retry.jitter(e),(!Number.isFinite(t)||t<0)&&(t=e)),Math.min(this.#i.retry.backoffLimit,t)}async#p(e){if(this.#n>=this.#i.retry.limit)throw e;let t=e instanceof Error?e:new Dt(e);if(t instanceof Ot)return t.customDelay??this.#f();if(!this.#i.retry.methods.includes(this.request.method.toLowerCase()))throw e;if(this.#i.retry.shouldRetry!==void 0){let n=await this.#i.retry.shouldRetry({error:t,retryCount:this.#n+1});if(n===!1)throw e;if(n===!0)return this.#f()}if(xn(e)){if(!this.#i.retry.retryOnTimeout)throw e;return this.#f()}if(yn(e)){if(!this.#i.retry.statusCodes.includes(e.response.status))throw e;let t=e.response.headers.get(`Retry-After`)??e.response.headers.get(`RateLimit-Reset`)??e.response.headers.get(`X-RateLimit-Retry-After`)??e.response.headers.get(`X-RateLimit-Reset`)??e.response.headers.get(`X-Rate-Limit-Reset`);if(t&&this.#i.retry.afterStatusCodes.includes(e.response.status)){let e=Number(t)*1e3;return Number.isNaN(e)?e=Date.parse(t)-Date.now():e>=Date.parse(`2024-01-01`)&&(e-=Date.now()),Number.isFinite(e)?(e=Math.max(0,e),Math.min(this.#i.retry.maxRetryAfter,e)):Math.min(this.#i.retry.maxRetryAfter,this.#f())}if(e.response.status===413)throw e;return this.#f()}if(!bn(e))throw e;return this.#f()}#m(e){let t=this.#P(e);return this.#i.parseJson&&(e.json=async()=>{let n=await e.text();return n===``?JSON.parse(n):this.#i.parseJson(n,{request:t,response:e})}),e}async#h(e){let t=await this.#v(e,this.#g());if(t===wn){this.#C();return}if(!t)return;if(!this.#_(e.headers.get(`content-type`)??``))return t;let n=await this.#y(t,e,this.#g(),this.#P(e));if(n===wn){this.#C();return}return n}#g(){let e=this.#i.timeout===!1?1e4:this.#i.timeout,t=this.#A();if(t===void 0)return e;if(t<=0)throw new X(this.request);return Math.min(e,t)}#_(e){let t=(e.split(`;`,1)[0]??``).trim().toLowerCase();return/\/(?:.*[.+-])?json$/.test(t)}async#v(e,t){let{body:n}=e;if(!n)try{return await e.text()}catch{return}let r;try{r=n.getReader()}catch{return}let i=Tn(e.headers.get(`content-type`)??``),a=[],o=0,s=(async()=>{try{for(;;){let{done:e,value:t}=await r.read();if(e)break;if(o+=t.byteLength,o>Sn){r.cancel().catch(()=>void 0);return}a.push(i.decode(t,{stream:!0}))}}catch{return}return a.push(i.decode()),a.join(``)})(),c=new Promise(e=>{let n=setTimeout(()=>{e(wn)},t);s.finally(()=>{clearTimeout(n)})}),l=await Promise.race([s,c]);return l===wn&&r.cancel().catch(()=>void 0),l}async#y(e,t,n,r){let i;try{return await Promise.race([Promise.resolve().then(()=>this.#i.parseJson?this.#i.parseJson(e,{request:r,response:t}):JSON.parse(e)),new Promise(e=>{i=setTimeout(()=>{e(wn)},n)})])}catch{return}finally{clearTimeout(i)}}#b(e){e&&e.cancel().catch(()=>void 0)}#x(e){this.#b(e.body??void 0)}#S(){return this.#o?AbortSignal.any([this.#o,this.#t.signal]):this.#t.signal}#C(){let e=this.#A();if(e!==void 0&&e<=0)throw new X(this.request)}async#w(){for(let e of this.#i.hooks.beforeRequest){let t=await e({request:this.request,options:this.#M(),retryCount:0});if(kn(t))this.#N(t);else if(An(t))return t}}async#T(e){let t=this.#P(e);for(let n of this.#i.hooks.afterResponse){let r=this.#F(e.clone(),t);this.#m(r);let i;try{i=await n({request:this.request,options:this.#M(),response:r,retryCount:this.#n})}catch(t){throw r!==e&&this.#x(r),this.#x(e),t}if(i instanceof zt)throw r!==e&&this.#x(r),this.#x(e),new Ot(i.options);let a=An(i)?this.#F(i,t):e;r!==e&&r!==a&&r.body!==a.body&&this.#x(r),e!==a&&e.body!==a.body&&this.#x(e),e=a}return e}async#E(e){try{return await e()}catch(t){return this.#D(t,e)}}async#D(e,t){this.#u=!1;let n=Math.min(await this.#p(e),Lt),r={signal:this.#o},i=this.#A();if(i!==void 0){if(i<=0)throw new X(this.request);if(n>=i)throw await dn(i,r),new X(this.request)}if(await dn(n,r),this.#C(),e instanceof Ot&&e.customRequest){let t=new globalThis.Request(e.customRequest,this.#i.signal?{signal:this.#i.signal}:void 0);this.#N(t)}for(let t of this.#i.hooks.beforeRetry){let n;try{n=await t({request:this.request,options:this.#M(),error:e,retryCount:this.#n+1})}catch(t){throw t instanceof Error&&t!==e&&this.#s.add(t),t}if(kn(n)){this.#N(n);break}if(An(n))return this.#u=!0,this.#n++,n;if(n===Rt)return}return this.#C(),this.#n++,this.#E(t)}#O(){let e=this.#u;return this.#u=!1,e}async#k(){this.#t?.signal.aborted&&(this.#t=new globalThis.AbortController,this.#i.signal=this.#S(),this.request=new globalThis.Request(this.request,{signal:this.#i.signal}));let e=fn(this.#i),t=this.#i.retry.limit>0?this.request.clone():void 0,n=this.#I(this.request,this.#i.body??void 0);this.#a=n,t&&(this.request=t);try{let t=this.#A();if(t!==void 0&&t<=0)throw new X(this.request);let r=this.#i.timeout===!1?t:t===void 0?this.#i.timeout:Math.min(this.#i.timeout,t),i=r===void 0?await this.#i.fetch(n,e):await un(n,e,this.#t,{timeout:r,fetch:this.#i.fetch});return this.#F(i,n)}catch(e){throw _n(e)?new Et(this.request,{cause:e}):e}}#A(){if(this.#l===void 0)return;let e=this.#j()-this.#l;return Math.max(0,this.#i.totalTimeout-e)}#j(){return globalThis.performance?.now()??Date.now()}#M(){if(!this.#c){let{hooks:e,json:t,parseJson:n,stringifyJson:r,searchParams:i,timeout:a,totalTimeout:o,throwHttpErrors:s,fetch:c,...l}=this.#i;this.#c=Object.freeze(l)}return this.#c}#N(e){this.#c=void 0,this.request=e}#P(e){return this.#d.get(e)??this.request}#F(e,t){return this.#d.set(e,t),e}#I(e,t){return!this.#i.onUploadProgress||!e.body||!At?e:qt(e,this.#i.onUploadProgress,t??this.#i.body??void 0)}},Fn=e=>{let t=(t,n)=>Pn.create(t,Xt(e,n));for(let n of Ft)t[n]=(t,r)=>Pn.create(t,Xt(e,r,{method:n}));return t.create=e=>Fn(Xt(e)),t.extend=t=>(typeof t==`function`&&(t=t(e??{})),Fn(Xt(e,t))),t.stop=Rt,t.retry=Bt,t},In=Fn();L({url:W(),finalUrl:W().optional(),referer:W().optional(),cookie:W().optional(),filename:W().optional(),filenameSource:P([`browser`,`suggested`]).optional(),userAgent:W().optional(),requestHeaders:we(L({name:W(),value:W()})).optional(),verify:ke().optional(),ack:P([`early`,`final`]).optional(),mime:W().optional(),size:Ne().int().optional()});var Ln=fe(`action`,[L({action:H(`accepted`)}),L({action:H(`added`),gid:W().min(1)}),L({action:H(`cancelled`)}),L({action:H(`fallback`),reason:W()})]);function Rn(e){return e.protocol===3?null:`${e.product===`motrix-next`?`Motrix Next`:`Rayburst`} ${e.version}`}function zn(e){return e.product===void 0&&/^[1-3]\.\d+\.\d+(?:[-+].*)?$/.test(e.version)}function Bn(e,t){let{verify:n,mime:r,size:i,ack:a,filenameSource:o,...s}=e;return t===2?{id:crypto.randomUUID(),...s,filenameSource:o}:s}function Vn(e){return e===1?L({action:W()}).transform(()=>({action:`added`,gid:``})):L({action:P([`submitted`,`cancelled`,`needs-confirmation`]),gid:W().optional()}).transform(({action:e,gid:t})=>e===`cancelled`?{action:`cancelled`}:{action:`added`,gid:t??``})}Fe({jitless:!0});var Hn=5e3,Un=15e4,Wn=1,$=class extends Error{constructor(e,t){super(e),this.cause=t,this.name=`ApiError`}},Gn=class extends ${constructor(e){super(`Cannot connect to Rayburst API`,e),this.name=`ApiUnreachableError`}},Kn=class extends ${constructor(e){super(`HTTP 401 Unauthorized: API secret is incorrect`,e),this.name=`ApiAuthError`}},qn=class extends ${constructor(e=null,t){super(`Install the latest Rayburst to connect`,t),this.version=e,this.name=`ApiCompatibilityError`}},Jn=class extends ${constructor(e){super(`API call timed out after ${e}ms`),this.name=`ApiTimeoutError`}},Yn=class extends ${constructor(e){super(e===`engine_starting`?`Rayburst engine is starting`:`Rayburst engine is unavailable`),this.code=e,this.name=e===`engine_starting`?`ApiEngineStartingError`:`ApiEngineUnavailableError`}},Xn=class extends ${constructor(e){super(`Media request failed`),this.code=e,this.name=`MediaApiError`}},Zn=L({product:W().optional(),status:H(`ok`),version:W().min(1)}),Qn=L({product:H(`rayburst`),protocolVersion:ve([H(2),H(3)])}),$n=L({downloadSpeed:W(),uploadSpeed:W(),numActive:W(),numWaiting:W(),numStopped:W(),numStoppedTotal:W()}),er=L({status:W(),error:W().optional()}),tr=L({stat:$n,tasks:we(L({gid:W(),name:W(),status:W(),totalLength:W(),completedLength:W(),downloadSpeed:W(),errorMessage:W().optional()}))}),nr=class t{config;http;constructor(e,t){this.onIdentify=t,this.config={...e},this.http=this.createHttpClient()}updateConfig(e){this.config={...e},this.http=this.createHttpClient()}createHttpClient(){return In.create({prefix:`http://127.0.0.1:${this.config.port}`,credentials:`omit`,cache:`no-store`,timeout:Hn,retry:{limit:Wn,methods:[`get`]}})}authHeaders(){return{"X-Rayburst-Client":`rayburst-connect`,...this.config.secret?{Authorization:`Bearer ${this.config.secret}`}:{}}}async request(e,t,n,r){try{let r=await this.http(e,n).json();return t.parse(r)}catch(t){if(e===`downloads/capabilities`&&(t instanceof N||t instanceof Y&&[404,405].includes(t.response.status)))throw new qn(null,t);if(e.startsWith(`media/v2`)){if(t instanceof N)throw new Xn(`invalid_response`);if(t instanceof Y&&t.response.status!==401){let e=Te.safeParse(t.data);throw new Xn(e.success?e.data.error:[404,405].includes(t.response.status)?`integration_unavailable`:t.response.status===410?`expired`:`desktop_error`)}}throw rr(t,r,typeof n.timeout==`number`?n.timeout:Hn)}}async ping(){let e=await this.request(`ping`,Zn,{timeout:500,retry:0},`Ping`);if(e.product===`rayburst`)return{product:`rayburst`,version:e.version};if(zn(e))return{product:`motrix-next`,version:e.version};throw new qn(e.version)}async getStat(){return this.request(`stat`,$n,{method:`GET`,headers:this.authHeaders()},`Get stat`)}async downloadProtocol(e){return e===`motrix-next`?1:(await this.request(`downloads/capabilities`,Qn,{method:`GET`,headers:this.authHeaders(),retry:0},`Check download support`)).protocolVersion}async identify(){let e=await this.ping(),t={...e,protocol:await this.downloadProtocol(e.product)};return this.onIdentify?.(t),t}addDownload(e){return new t(this.config,this.onIdentify).submitDownload(e)}async submitDownload(e){let{protocol:t}=await this.identify(),n=setInterval(()=>{Promise.resolve().then(()=>i.runtime.getPlatformInfo()).catch(()=>void 0)},2e4);try{return await this.request(`add`,t===3?Ln:Vn(t),{method:`POST`,headers:this.authHeaders(),json:t===3?e:Bn(e,t),retry:0,timeout:Un},`Add download`)}finally{clearInterval(n)}}async getTasks(){return this.request(`tasks`,tr,{method:`GET`,headers:this.authHeaders()},`List tasks`)}async pauseTask(e){return this.request(`tasks/${encodeURIComponent(e)}/pause`,er,{method:`POST`,headers:this.authHeaders()},`Pause task`)}async resumeTask(e){return this.request(`tasks/${encodeURIComponent(e)}/resume`,er,{method:`POST`,headers:this.authHeaders()},`Resume task`)}async revealTask(e){return this.request(`tasks/${encodeURIComponent(e)}/reveal`,er,{method:`POST`,headers:this.authHeaders()},`Show task in folder`)}async createCapture(e){return this.request(`${O}/assets/${e}`,L({id:z()}),{method:`POST`,headers:this.authHeaders(),retry:0},`Create capture`)}async appendCapture(e,t,n,r){return this.request(`${O}/assets/${e}/${t}`,L({offset:Ne().int().nonnegative()}),{method:`PUT`,headers:{...this.authHeaders(),"Content-Type":`application/octet-stream`,"X-Upload-Offset":String(n)},body:r,retry:0,timeout:15e3},`Save capture`)}async discardCapture(e){return this.request(`${O}/assets/${e}`,L({id:z()}),{method:`DELETE`,headers:this.authHeaders(),retry:0},`Discard empty capture`)}async sealCapture(e){return this.request(`${O}/assets/${e}/seal`,L({id:z(),streams:we(L({stream:Ne(),size:Ne()}))}),{method:`POST`,headers:this.authHeaders(),retry:0},`Finish capture`)}captureResource(e,t){return{url:`http://127.0.0.1:${this.config.port}/${O}/assets/${e}/${t}`,headers:Object.entries(this.authHeaders()).map(([e,t])=>({name:e.toLowerCase(),value:t}))}}async mediaCapabilities(){return this.request(`${O}/capabilities`,v,{headers:this.authHeaders(),retry:0},`Media capabilities`)}async createMediaProbe(e){return this.request(`${O}/probes`,A,{method:`POST`,headers:this.authHeaders(),json:ue.parse(e),retry:0},`Probe media`)}async getMediaProbe(e){return this.request(`${O}/probes/${encodeURIComponent(e)}`,A,{headers:this.authHeaders(),retry:0},`Read media probe`)}async submitMediaProbe(t,n){return this.request(`${O}/probes/${encodeURIComponent(t)}/submit`,e,{method:`POST`,headers:this.authHeaders(),json:ie.parse(n),retry:0},`Submit media`)}async cancelMediaProbe(e){return this.request(`${O}/probes/${encodeURIComponent(e)}/cancel`,p,{method:`POST`,headers:this.authHeaders(),json:{},retry:0},`Cancel media probe`)}async pauseAll(){return this.request(`pause-all`,er,{method:`POST`,headers:this.authHeaders()},`Pause all`)}async resumeAll(){return this.request(`resume-all`,er,{method:`POST`,headers:this.authHeaders()},`Resume all`)}async checkReady(){let e=await this.ping();return await this.request(`stat`,$n,{method:`GET`,headers:this.authHeaders(),timeout:500,retry:0},`Check readiness`),this.onIdentify?.({...e,protocol:await this.downloadProtocol(e.product)}),!0}async isReady(){try{return await this.checkReady()}catch{return!1}}};function rr(e,t,n){if(e instanceof Y){if(e.response.status===401)return new Kn(e);let n=L({error:P([`engine_starting`,`engine_unavailable`])}).safeParse(e.data);if(e.response.status===503&&n.success)return new Yn(n.data.error);let r=typeof e.data==`string`&&e.data?` — ${e.data.slice(0,200)}`:``;return new $(`${t} failed: HTTP ${e.response.status}${r}`,e)}return e instanceof X?new Jn(n):e instanceof Et?new Gn(e):e}async function ir(e){let t=null;try{let n=await e.ping();t=n.version;let r=await e.getStat(),i=await e.downloadProtocol(n.product);return{status:`connected`,...n,protocol:i,stat:r}}catch(e){return{status:`disconnected`,version:e instanceof qn?e.version??t:t,error:e instanceof Error?e.name:`UnknownError`}}}var ar=B({__name:`LegacyDesktopNotice`,props:{name:{type:String,required:!0},layout:{type:String,required:!1,default:`card`}},emits:[`dismiss`],setup(e,{expose:t}){t();let{t:n,tSub:r}=de(),i={t:n,tSub:r,get NButton(){return _},get NIcon(){return f},get ArrowUpCircleOutline(){return gt},get CloseOutline(){return vt},get DownloadOutline(){return Se}};return Object.defineProperty(i,`__isScriptSetup`,{enumerable:!1,value:!0}),i}}),or={class:`legacy-notice__badge`},sr={class:`legacy-notice__copy`},cr={class:`legacy-notice__title`},lr={class:`legacy-notice__hint`};function ur(e,t,n,i,a,o){return u(),I(`div`,{class:r([`legacy-notice`,`legacy-notice--${n.layout}`]),role:`note`},[F(`span`,or,[U(i.NIcon,{size:n.layout===`popup`?16:18},{default:C(()=>[U(i.ArrowUpCircleOutline)]),_:1},8,[`size`])]),F(`div`,sr,[F(`p`,cr,h(i.t(`connection_legacy_title`)),1),F(`p`,lr,h(i.tSub(`connection_legacy_hint`,[n.name])),1)]),U(i.NButton,{class:`legacy-notice__action`,size:n.layout===`popup`?`tiny`:`small`,secondary:``,type:`primary`,tag:`a`,href:`https://github.com/AnInsomniacy/rayburst/releases`,target:`_blank`,rel:`noopener noreferrer`},{icon:C(()=>[U(i.NIcon,null,{default:C(()=>[U(i.DownloadOutline)]),_:1})]),default:C(()=>[K(` `+h(i.t(`connection_get_rayburst`)),1)]),_:1},8,[`size`]),n.layout===`popup`?(u(),V(i.NButton,{key:0,class:`legacy-notice__close`,size:`tiny`,quaternary:``,circle:``,"aria-label":i.t(`connection_legacy_dismiss`),title:i.t(`connection_legacy_dismiss`),onClick:t[0]||=t=>e.$emit(`dismiss`)},{icon:C(()=>[U(i.NIcon,null,{default:C(()=>[U(i.CloseOutline)]),_:1})]),_:1},8,[`aria-label`,`title`])):je(`v-if`,!0)],2)}var dr=G(ar,[[`render`,ur],[`__scopeId`,`data-v-3458ec03`],[`__file`,`/home/runner/work/rayburst-connect/rayburst-connect/shared/components/LegacyDesktopNotice.vue`]]),fr=B({__name:`UnsupportedDesktop`,props:{version:{type:[String,null],required:!0},checking:{type:Boolean,required:!1,default:!1},layout:{type:String,required:!1,default:`card`}},emits:[`retry`],setup(e,{expose:t}){t();let{t:n}=de(),r={t:n,get NButton(){return _},get NIcon(){return f},get ArrowUpCircleOutline(){return gt},get DownloadOutline(){return Se},get RefreshOutline(){return De}};return Object.defineProperty(r,`__isScriptSetup`,{enumerable:!1,value:!0}),r}}),pr={class:`unsupported-desktop__body`},mr={class:`unsupported-desktop__badge`},hr={class:`unsupported-desktop__copy`},gr={class:`unsupported-desktop__title`},_r={class:`unsupported-desktop__hint`},vr={key:0,class:`unsupported-desktop__version`},yr={class:`unsupported-desktop__actions`};function br(e,t,n,i,a,o){return u(),I(`div`,{class:r([`unsupported-desktop`,`unsupported-desktop--${n.layout}`]),role:`status`,"aria-live":`polite`},[F(`div`,pr,[F(`span`,mr,[U(i.NIcon,{size:n.layout===`page`?24:18},{default:C(()=>[U(i.ArrowUpCircleOutline)]),_:1},8,[`size`])]),F(`div`,hr,[F(`p`,gr,h(i.t(`connection_unsupported_title`)),1),F(`p`,_r,h(i.t(`connection_upgrade_hint`)),1),n.version?(u(),I(`span`,vr,`v`+h(n.version),1)):je(`v-if`,!0)])]),F(`div`,yr,[U(i.NButton,{size:n.layout===`page`?`tiny`:`small`,quaternary:``,loading:n.checking,onClick:t[0]||=t=>e.$emit(`retry`)},{icon:C(()=>[U(i.NIcon,null,{default:C(()=>[U(i.RefreshOutline)]),_:1})]),default:C(()=>[K(` `+h(i.t(`connection_check_again`)),1)]),_:1},8,[`size`,`loading`]),U(i.NButton,{size:n.layout===`page`?`tiny`:`small`,type:`primary`,tag:`a`,href:`https://github.com/AnInsomniacy/rayburst/releases`,target:`_blank`,rel:`noopener noreferrer`},{icon:C(()=>[U(i.NIcon,null,{default:C(()=>[U(i.DownloadOutline)]),_:1})]),default:C(()=>[K(` `+h(i.t(`connection_get_rayburst`)),1)]),_:1},8,[`size`])])],2)}var xr=G(fr,[[`render`,br],[`__scopeId`,`data-v-dc91d0b3`],[`__file`,`/home/runner/work/rayburst-connect/rayburst-connect/shared/components/UnsupportedDesktop.vue`]]),Sr=B({__name:`BrandLogo`,setup(e,{expose:t}){t();let n={source:i.runtime.getURL(`/icon/icon.svg`)};return Object.defineProperty(n,`__isScriptSetup`,{enumerable:!1,value:!0}),n}}),Cr=[`src`];function wr(e,t,n,r,i,a){return u(),I(`img`,{src:r.source,alt:`Rayburst Connect`,width:`32`,height:`32`},null,8,Cr)}var Tr=G(Sr,[[`render`,wr],[`__file`,`/home/runner/work/rayburst-connect/rayburst-connect/shared/components/BrandLogo.vue`]]);export{ir as a,St as c,ut as d,st as f,nr as i,bt as l,xr as n,Rn as o,ot as p,dr as r,wt as s,Tr as t,vt as u};