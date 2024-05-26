import{u as Qe,b as gt,e as ht,d as yt,a as Ht,c as Lt,f as rt,g as Dt}from"./use-key-composition.17d467c7.js";import{B as pe,a9 as bt,aU as Kt,aa as wt,aV as $t,c as v,aP as Nt,g as Pe,h as k,N as Ee,aW as jt,aA as Qt,a2 as se,aX as Wt,ak as Ut,al as Xt,aY as st,aZ as Yt,am as Zt,r as p,ao as Gt,an as Jt,ap as el,a_ as tl,a$ as ll,ar as ul,aq as nl,b0 as ct,w as ce,b1 as ol,b2 as dt,aK as al,b3 as il,b4 as rl,b5 as sl,D as cl,ad as dl,x as We,_ as fl,au as vl,aF as ml,v as re,a5 as Sl,b6 as gl,$ as hl,a0 as yl,aC as Oe,z as bl,u as wl,a7 as Ne,Y as ke,b7 as ft,aj as Cl,X as Vl,b8 as kl,b9 as xl,ba as ql,ai as Al}from"./index.56a92387.js";import{a as Ol,r as vt,b as zl,c as Fl,Q as Ml}from"./QDialog.de3b4cde.js";var Bl=pe({name:"QField",inheritAttrs:!1,props:Qe,emits:gt,setup(){return ht(yt())}});const Il={xs:8,sm:10,md:14,lg:20,xl:24};var _l=pe({name:"QChip",props:{...bt,...Kt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:d,emit:r}){const{proxy:{$q:C}}=Pe(),A=wt(e,C),a=$t(e,Il),F=v(()=>e.selected===!0||e.icon!==void 0),h=v(()=>e.selected===!0?e.iconSelected||C.iconSet.chip.selected:e.icon),y=v(()=>e.iconRemove||C.iconSet.chip.remove),M=v(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),s=v(()=>{const V=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(V?` text-${V} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(M.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(A.value===!0?" q-chip--dark q-dark":"")}),g=v(()=>{const V=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...V,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||C.lang.label.remove};return{chip:V,remove:D}});function x(V){V.keyCode===13&&b(V)}function b(V){e.disable||(r("update:selected",!e.selected),r("click",V))}function H(V){(V.keyCode===void 0||V.keyCode===13)&&(se(V),e.disable===!1&&(r("update:modelValue",!1),r("remove")))}function _(){const V=[];M.value===!0&&V.push(k("div",{class:"q-focus-helper"})),F.value===!0&&V.push(k(Ee,{class:"q-chip__icon q-chip__icon--left",name:h.value}));const D=e.label!==void 0?[k("div",{class:"ellipsis"},[e.label])]:void 0;return V.push(k("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},jt(d.default,D))),e.iconRight&&V.push(k(Ee,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&V.push(k(Ee,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:y.value,...g.value.remove,onClick:H,onKeyup:H})),V}return()=>{if(e.modelValue===!1)return;const V={class:s.value,style:a.value};return M.value===!0&&Object.assign(V,g.value.chip,{onClick:b,onKeyup:x}),Nt("div",V,_(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Qt,e.ripple]])}}}),El=pe({name:"QMenu",inheritAttrs:!1,props:{...Wt,...Ut,...bt,...Xt,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:st},self:{type:String,validator:st},offset:{type:Array,validator:Yt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Zt,"click","escapeKey"],setup(e,{slots:d,emit:r,attrs:C}){let A=null,a,F,h;const y=Pe(),{proxy:M}=y,{$q:s}=M,g=p(null),x=p(!1),b=v(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),H=wt(e,s),{registerTick:_,removeTick:V}=Gt(),{registerTimeout:D}=Jt(),{transitionProps:L,transitionStyle:W}=el(e),{localScrollTarget:B,changeScrollEvent:I,unconfigureScrollTarget:U}=tl(e,S),{anchorEl:Q,canShow:le}=ll({showing:x}),{hide:ue}=ul({showing:x,canShow:le,handleShow:i,handleHide:n,hideOnRouteChange:b,processOnMount:!0}),{showPortal:Y,hidePortal:N,renderPortal:ne}=nl(y,g,P,"menu"),ee={anchorEl:Q,innerRef:g,onClickOutside(l){if(e.persistent!==!0&&x.value===!0)return ue(l),(l.type==="touchstart"||l.target.classList.contains("q-dialog__backdrop"))&&se(l),!0}},oe=v(()=>ct(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),te=v(()=>e.cover===!0?oe.value:ct(e.self||"top start",s.lang.rtl)),Z=v(()=>(e.square===!0?" q-menu--square":"")+(H.value===!0?" q-menu--dark q-dark":"")),Se=v(()=>e.autoClose===!0?{onClick:O}:{}),ae=v(()=>x.value===!0&&e.persistent!==!0);ce(ae,l=>{l===!0?(Ol(w),ol(ee)):(vt(w),dt(ee))});function G(){fl(()=>{let l=g.value;l&&l.contains(document.activeElement)!==!0&&(l=l.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||l.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||l.querySelector("[autofocus], [data-autofocus]")||l,l.focus({preventScroll:!0}))})}function i(l){if(A=e.noRefocus===!1?document.activeElement:null,zl(T),Y(),S(),a=void 0,l!==void 0&&(e.touchPosition||e.contextMenu)){const R=al(l);if(R.left!==void 0){const{top:ie,left:de}=Q.value.getBoundingClientRect();a={left:R.left-de,top:R.top-ie}}}F===void 0&&(F=ce(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,f)),e.noFocus!==!0&&document.activeElement.blur(),_(()=>{f(),e.noFocus!==!0&&G()}),D(()=>{s.platform.is.ios===!0&&(h=e.autoClose,g.value.click()),f(),Y(!0),r("show",l)},e.transitionDuration)}function n(l){V(),N(),c(!0),A!==null&&(l===void 0||l.qClickOutside!==!0)&&(((l&&l.type.indexOf("key")===0?A.closest('[tabindex]:not([tabindex^="-"])'):void 0)||A).focus(),A=null),D(()=>{N(!0),r("hide",l)},e.transitionDuration)}function c(l){a=void 0,F!==void 0&&(F(),F=void 0),(l===!0||x.value===!0)&&(Fl(T),U(),dt(ee),vt(w)),l!==!0&&(A=null)}function S(){(Q.value!==null||e.scrollTarget!==void 0)&&(B.value=il(Q.value,e.scrollTarget),I(B.value,f))}function O(l){h!==!0?(rl(M,l),r("click",l)):h=!1}function T(l){ae.value===!0&&e.noFocus!==!0&&vl(g.value,l.target)!==!0&&G()}function w(l){r("escapeKey"),ue(l)}function f(){const l=g.value;l===null||Q.value===null||sl({el:l,offset:e.offset,anchorEl:Q.value,anchorOrigin:oe.value,selfOrigin:te.value,absoluteOffset:a,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function P(){return k(dl,L.value,()=>x.value===!0?k("div",{role:"menu",...C,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+Z.value,C.class],style:[C.style,W.value],...Se.value},cl(d.default)):null)}return We(c),Object.assign(M,{focus:G,updatePosition:f}),ne}});let Te=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const d=document.createElement("div");Object.assign(d.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(d),e.scrollLeft=-1e3,Te=e.scrollLeft>=0,e.remove()}const X=1e3,Tl=["start","center","end","start-force","center-force","end-force"],Ct=Array.prototype.filter,pl=window.getComputedStyle(document.body).overflowAnchor===void 0?ml:function(e,d){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const r=e.children||[];Ct.call(r,A=>A.dataset&&A.dataset.qVsAnchor!==void 0).forEach(A=>{delete A.dataset.qVsAnchor});const C=r[d];C&&C.dataset&&(C.dataset.qVsAnchor="")}))};function xe(e,d){return e+d}function je(e,d,r,C,A,a,F,h){const y=e===window?document.scrollingElement||document.documentElement:e,M=A===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-F-h,scrollMaxSize:0,offsetStart:-F,offsetEnd:-h};if(A===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=y.scrollLeft,s.scrollViewSize+=y.clientWidth),s.scrollMaxSize=y.scrollWidth,a===!0&&(s.scrollStart=(Te===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=y.scrollTop,s.scrollViewSize+=y.clientHeight),s.scrollMaxSize=y.scrollHeight),r!==null)for(let g=r.previousElementSibling;g!==null;g=g.previousElementSibling)g.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=g[M]);if(C!==null)for(let g=C.nextElementSibling;g!==null;g=g.nextElementSibling)g.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=g[M]);if(d!==e){const g=y.getBoundingClientRect(),x=d.getBoundingClientRect();A===!0?(s.offsetStart+=x.left-g.left,s.offsetEnd-=x.width):(s.offsetStart+=x.top-g.top,s.offsetEnd-=x.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function mt(e,d,r,C){d==="end"&&(d=(e===window?document.body:e)[r===!0?"scrollWidth":"scrollHeight"]),e===window?r===!0?(C===!0&&(d=(Te===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-d),window.scrollTo(d,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,d):r===!0?(C===!0&&(d=(Te===!0?e.scrollWidth-e.offsetWidth:0)-d),e.scrollLeft=d):e.scrollTop=d}function ze(e,d,r,C){if(r>=C)return 0;const A=d.length,a=Math.floor(r/X),F=Math.floor((C-1)/X)+1;let h=e.slice(a,F).reduce(xe,0);return r%X!==0&&(h-=d.slice(a*X,r).reduce(xe,0)),C%X!==0&&C!==A&&(h-=d.slice(C,F*X).reduce(xe,0)),h}const Vt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Nl=Object.keys(Vt),Pl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Vt};function Rl({virtualScrollLength:e,getVirtualScrollTarget:d,getVirtualScrollEl:r,virtualScrollItemSizeComputed:C}){const A=Pe(),{props:a,emit:F,proxy:h}=A,{$q:y}=h;let M,s,g,x=[],b;const H=p(0),_=p(0),V=p({}),D=p(null),L=p(null),W=p(null),B=p({from:0,to:0}),I=v(()=>a.tableColspan!==void 0?a.tableColspan:100);C===void 0&&(C=v(()=>a.virtualScrollItemSize));const U=v(()=>C.value+";"+a.virtualScrollHorizontal),Q=v(()=>U.value+";"+a.virtualScrollSliceRatioBefore+";"+a.virtualScrollSliceRatioAfter);ce(Q,()=>{Z()}),ce(U,le);function le(){te(s,!0)}function ue(n){te(n===void 0?s:n)}function Y(n,c){const S=d();if(S==null||S.nodeType===8)return;const O=je(S,r(),D.value,L.value,a.virtualScrollHorizontal,y.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd);g!==O.scrollViewSize&&Z(O.scrollViewSize),ne(S,O,Math.min(e.value-1,Math.max(0,parseInt(n,10)||0)),0,Tl.indexOf(c)>-1?c:s>-1&&n>s?"end":"start")}function N(){const n=d();if(n==null||n.nodeType===8)return;const c=je(n,r(),D.value,L.value,a.virtualScrollHorizontal,y.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd),S=e.value-1,O=c.scrollMaxSize-c.offsetStart-c.offsetEnd-_.value;if(M===c.scrollStart)return;if(c.scrollMaxSize<=0){ne(n,c,0,0);return}g!==c.scrollViewSize&&Z(c.scrollViewSize),ee(B.value.from);const T=Math.floor(c.scrollMaxSize-Math.max(c.scrollViewSize,c.offsetEnd)-Math.min(b[S],c.scrollViewSize/2));if(T>0&&Math.ceil(c.scrollStart)>=T){ne(n,c,S,c.scrollMaxSize-c.offsetEnd-x.reduce(xe,0));return}let w=0,f=c.scrollStart-c.offsetStart,P=f;if(f<=O&&f+c.scrollViewSize>=H.value)f-=H.value,w=B.value.from,P=f;else for(let l=0;f>=x[l]&&w<S;l++)f-=x[l],w+=X;for(;f>0&&w<S;)f-=b[w],f>-c.scrollViewSize?(w++,P=f):P=b[w]+f;ne(n,c,w,P)}function ne(n,c,S,O,T){const w=typeof T=="string"&&T.indexOf("-force")>-1,f=w===!0?T.replace("-force",""):T,P=f!==void 0?f:"start";let l=Math.max(0,S-V.value[P]),R=l+V.value.total;R>e.value&&(R=e.value,l=Math.max(0,R-V.value.total)),M=c.scrollStart;const ie=l!==B.value.from||R!==B.value.to;if(ie===!1&&f===void 0){ae(S);return}const{activeElement:de}=document,J=W.value;ie===!0&&J!==null&&J!==de&&J.contains(de)===!0&&(J.addEventListener("focusout",oe),setTimeout(()=>{J!==null&&J.removeEventListener("focusout",oe)})),pl(J,S-l);const Fe=f!==void 0?b.slice(l,S).reduce(xe,0):0;if(ie===!0){const fe=R>=B.value.from&&l<=B.value.to?B.value.to:R;B.value={from:l,to:fe},H.value=ze(x,b,0,l),_.value=ze(x,b,R,e.value),requestAnimationFrame(()=>{B.value.to!==R&&M===c.scrollStart&&(B.value={from:B.value.from,to:R},_.value=ze(x,b,R,e.value))})}requestAnimationFrame(()=>{if(M!==c.scrollStart)return;ie===!0&&ee(l);const fe=b.slice(l,S).reduce(xe,0),ge=fe+c.offsetStart+H.value,Me=ge+b[S];let qe=ge+O;if(f!==void 0){const Re=fe-Fe,$=c.scrollStart+Re;qe=w!==!0&&$<ge&&Me<$+c.scrollViewSize?$:f==="end"?Me-c.scrollViewSize:ge-(f==="start"?0:Math.round((c.scrollViewSize-b[S])/2))}M=qe,mt(n,qe,a.virtualScrollHorizontal,y.lang.rtl),ae(S)})}function ee(n){const c=W.value;if(c){const S=Ct.call(c.children,l=>l.classList&&l.classList.contains("q-virtual-scroll--skip")===!1),O=S.length,T=a.virtualScrollHorizontal===!0?l=>l.getBoundingClientRect().width:l=>l.offsetHeight;let w=n,f,P;for(let l=0;l<O;){for(f=T(S[l]),l++;l<O&&S[l].classList.contains("q-virtual-scroll--with-prev")===!0;)f+=T(S[l]),l++;P=f-b[w],P!==0&&(b[w]+=P,x[Math.floor(w/X)]+=P),w++}}}function oe(){W.value!==null&&W.value!==void 0&&W.value.focus()}function te(n,c){const S=1*C.value;(c===!0||Array.isArray(b)===!1)&&(b=[]);const O=b.length;b.length=e.value;for(let w=e.value-1;w>=O;w--)b[w]=S;const T=Math.floor((e.value-1)/X);x=[];for(let w=0;w<=T;w++){let f=0;const P=Math.min((w+1)*X,e.value);for(let l=w*X;l<P;l++)f+=b[l];x.push(f)}s=-1,M=void 0,H.value=ze(x,b,0,B.value.from),_.value=ze(x,b,B.value.to,e.value),n>=0?(ee(B.value.from),re(()=>{Y(n)})):G()}function Z(n){if(n===void 0&&typeof window!="undefined"){const f=d();f!=null&&f.nodeType!==8&&(n=je(f,r(),D.value,L.value,a.virtualScrollHorizontal,y.lang.rtl,a.virtualScrollStickySizeStart,a.virtualScrollStickySizeEnd).scrollViewSize)}g=n;const c=parseFloat(a.virtualScrollSliceRatioBefore)||0,S=parseFloat(a.virtualScrollSliceRatioAfter)||0,O=1+c+S,T=n===void 0||n<=0?1:Math.ceil(n/C.value),w=Math.max(1,T,Math.ceil((a.virtualScrollSliceSize>0?a.virtualScrollSliceSize:10)/O));V.value={total:Math.ceil(w*O),start:Math.ceil(w*c),center:Math.ceil(w*(.5+c)),end:Math.ceil(w*(1+c)),view:T}}function Se(n,c){const S=a.virtualScrollHorizontal===!0?"width":"height",O={["--q-virtual-scroll-item-"+S]:C.value+"px"};return[n==="tbody"?k(n,{class:"q-virtual-scroll__padding",key:"before",ref:D},[k("tr",[k("td",{style:{[S]:`${H.value}px`,...O},colspan:I.value})])]):k(n,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[S]:`${H.value}px`,...O}}),k(n,{class:"q-virtual-scroll__content",key:"content",ref:W,tabindex:-1},c.flat()),n==="tbody"?k(n,{class:"q-virtual-scroll__padding",key:"after",ref:L},[k("tr",[k("td",{style:{[S]:`${_.value}px`,...O},colspan:I.value})])]):k(n,{class:"q-virtual-scroll__padding",key:"after",ref:L,style:{[S]:`${_.value}px`,...O}})]}function ae(n){s!==n&&(a.onVirtualScroll!==void 0&&F("virtualScroll",{index:n,from:B.value.from,to:B.value.to-1,direction:n<s?"decrease":"increase",ref:h}),s=n)}Z();const G=Sl(N,y.platform.is.ios===!0?120:35);gl(()=>{Z()});let i=!1;return hl(()=>{i=!0}),yl(()=>{if(i!==!0)return;const n=d();M!==void 0&&n!==void 0&&n!==null&&n.nodeType!==8?mt(n,M,a.virtualScrollHorizontal,y.lang.rtl):Y(s)}),We(()=>{G.cancel()}),Object.assign(h,{scrollTo:Y,reset:le,refresh:ue}),{virtualScrollSliceRange:B,virtualScrollSliceSizeComputed:V,setVirtualScrollSize:Z,onVirtualScrollEvt:G,localResetVirtualScroll:te,padVirtualScroll:Se,scrollTo:Y,reset:le,refresh:ue}}const St=e=>["add","add-unique","toggle"].includes(e),Hl=".*+?^${}()|[]\\",Ll=Object.keys(Qe);var jl=pe({name:"QSelect",inheritAttrs:!1,props:{...Pl,...Ht,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:St},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...gt,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:d,emit:r}){const{proxy:C}=Pe(),{$q:A}=C,a=p(!1),F=p(!1),h=p(-1),y=p(""),M=p(!1),s=p(!1);let g=null,x,b,H,_=null,V,D,L,W;const B=p(null),I=p(null),U=p(null),Q=p(null),le=p(null),ue=Lt(e),Y=Dt(ut),N=v(()=>Array.isArray(e.options)?e.options.length:0),ne=v(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ee,virtualScrollSliceSizeComputed:oe,localResetVirtualScroll:te,padVirtualScroll:Z,onVirtualScrollEvt:Se,scrollTo:ae,setVirtualScrollSize:G}=Rl({virtualScrollLength:N,getVirtualScrollTarget:At,getVirtualScrollEl:tt,virtualScrollItemSizeComputed:ne}),i=yt(),n=v(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,o=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const u=e.mapOptions===!0&&x!==void 0?x:[],m=o.map(z=>qt(z,u));return e.modelValue===null&&t===!0?m.filter(z=>z!==null):m}return o}),c=v(()=>{const t={};return Ll.forEach(o=>{const u=e[o];u!==void 0&&(t[o]=u)}),t}),S=v(()=>e.optionsDark===null?i.isDark.value:e.optionsDark),O=v(()=>rt(n.value)),T=v(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||n.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),w=v(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),f=v(()=>N.value===0),P=v(()=>n.value.map(t=>j.value(t)).join(", ")),l=v(()=>e.displayValue!==void 0?e.displayValue:P.value),R=v(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),ie=v(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||n.value.some(R.value))),de=v(()=>i.focused.value===!0?e.tabindex:-1),J=v(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":a.value===!0?"true":"false","aria-controls":`${i.targetUid.value}_lb`};return h.value>=0&&(t["aria-activedescendant"]=`${i.targetUid.value}_${h.value}`),t}),Fe=v(()=>({id:`${i.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),fe=v(()=>n.value.map((t,o)=>({index:o,opt:t,html:R.value(t),selected:!0,removeAtIndex:xt,toggleOption:ve,tabindex:de.value}))),ge=v(()=>{if(N.value===0)return[];const{from:t,to:o}=ee.value;return e.options.slice(t,o).map((u,m)=>{const z=he.value(u)===!0,q=t+m,E={clickable:!0,active:!1,activeClass:Re.value,manualFocus:!0,focused:!1,disable:z,tabindex:-1,dense:e.optionsDense,dark:S.value,role:"option",id:`${i.targetUid.value}_${q}`,onClick:()=>{ve(u)}};return z!==!0&&(De(u)===!0&&(E.active=!0),h.value===q&&(E.focused=!0),E["aria-selected"]=E.active===!0?"true":"false",A.platform.is.desktop===!0&&(E.onMousemove=()=>{a.value===!0&&ye(q)})),{index:q,opt:u,html:R.value(u),label:j.value(u),selected:E.active,focused:E.focused,toggleOption:ve,setOptionIndex:ye,itemProps:E}})}),Me=v(()=>e.dropdownIcon!==void 0?e.dropdownIcon:A.iconSet.arrow.dropdown),qe=v(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Re=v(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),$=v(()=>Le(e.optionValue,"value")),j=v(()=>Le(e.optionLabel,"label")),he=v(()=>Le(e.optionDisable,"disable")),Be=v(()=>n.value.map(t=>$.value(t))),kt=v(()=>{const t={onInput:ut,onChange:Y,onKeydown:et,onKeyup:Ge,onKeypress:Je,onFocus:Ye,onClick(o){b===!0&&ke(o)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Y,t});ce(n,t=>{x=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&i.innerLoading.value!==!0&&(F.value!==!0&&a.value!==!0||O.value!==!0)&&(H!==!0&&Ve(),(F.value===!0||a.value===!0)&&be(""))},{immediate:!0}),ce(()=>e.fillInput,Ve),ce(a,Ke),ce(N,Rt);function Ue(t){return e.emitValue===!0?$.value(t):t}function He(t){if(t>-1&&t<n.value.length)if(e.multiple===!0){const o=e.modelValue.slice();r("remove",{index:t,value:o.splice(t,1)[0]}),r("update:modelValue",o)}else r("update:modelValue",null)}function xt(t){He(t),i.focus()}function Xe(t,o){const u=Ue(t);if(e.multiple!==!0){e.fillInput===!0&&Ae(j.value(t),!0,!0),r("update:modelValue",u);return}if(n.value.length===0){r("add",{index:0,value:u}),r("update:modelValue",e.multiple===!0?[u]:u);return}if(o===!0&&De(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const m=e.modelValue.slice();r("add",{index:m.length,value:u}),m.push(u),r("update:modelValue",m)}function ve(t,o){if(i.editable.value!==!0||t===void 0||he.value(t)===!0)return;const u=$.value(t);if(e.multiple!==!0){o!==!0&&(Ae(e.fillInput===!0?j.value(t):"",!0,!0),me()),I.value!==null&&I.value.focus(),(n.value.length===0||Oe($.value(n.value[0]),u)!==!0)&&r("update:modelValue",e.emitValue===!0?u:t);return}if((b!==!0||M.value===!0)&&i.focus(),Ye(),n.value.length===0){const q=e.emitValue===!0?u:t;r("add",{index:0,value:q}),r("update:modelValue",e.multiple===!0?[q]:q);return}const m=e.modelValue.slice(),z=Be.value.findIndex(q=>Oe(q,u));if(z>-1)r("remove",{index:z,value:m.splice(z,1)[0]});else{if(e.maxValues!==void 0&&m.length>=e.maxValues)return;const q=e.emitValue===!0?u:t;r("add",{index:m.length,value:q}),m.push(q)}r("update:modelValue",m)}function ye(t){if(A.platform.is.desktop!==!0)return;const o=t>-1&&t<N.value?t:-1;h.value!==o&&(h.value=o)}function Ie(t=1,o){if(a.value===!0){let u=h.value;do u=ft(u+t,-1,N.value-1);while(u!==-1&&u!==h.value&&he.value(e.options[u])===!0);h.value!==u&&(ye(u),ae(u),o!==!0&&e.useInput===!0&&e.fillInput===!0&&_e(u>=0?j.value(e.options[u]):V))}}function qt(t,o){const u=m=>Oe($.value(m),t);return e.options.find(u)||o.find(u)||t}function Le(t,o){const u=t!==void 0?t:o;return typeof u=="function"?u:m=>m!==null&&typeof m=="object"&&u in m?m[u]:m}function De(t){const o=$.value(t);return Be.value.find(u=>Oe(u,o))!==void 0}function Ye(t){e.useInput===!0&&I.value!==null&&(t===void 0||I.value===t.target&&t.target.value===P.value)&&I.value.select()}function Ze(t){Cl(t,27)===!0&&a.value===!0&&(ke(t),me(),Ve()),r("keyup",t)}function Ge(t){const{value:o}=t.target;if(t.keyCode!==void 0){Ze(t);return}if(t.target.value="",g!==null&&(clearTimeout(g),g=null),Ve(),typeof o=="string"&&o.length>0){const u=o.toLocaleLowerCase(),m=q=>{const E=e.options.find(K=>q.value(K).toLocaleLowerCase()===u);return E===void 0?!1:(n.value.indexOf(E)===-1?ve(E):me(),!0)},z=q=>{m($)!==!0&&(m(j)===!0||q===!0||be(o,!0,()=>z(!0)))};z()}else i.clearValue(t)}function Je(t){r("keypress",t)}function et(t){if(r("keydown",t),Vl(t)===!0)return;const o=y.value.length>0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),u=t.shiftKey!==!0&&e.multiple!==!0&&(h.value>-1||o===!0);if(t.keyCode===27){Ne(t);return}if(t.keyCode===9&&u===!1){we();return}if(t.target===void 0||t.target.id!==i.targetUid.value)return;if(t.keyCode===40&&i.innerLoading.value!==!0&&a.value===!1){se(t),Ce();return}if(t.keyCode===8&&e.hideSelected!==!0&&y.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&r("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof y.value!="string"||y.value.length===0)&&(se(t),h.value=-1,Ie(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&oe.value!==void 0&&(se(t),h.value=Math.max(-1,Math.min(N.value,h.value+(t.keyCode===33?-1:1)*oe.value.view)),Ie(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(se(t),Ie(t.keyCode===38?-1:1,e.multiple));const m=N.value;if((L===void 0||W<Date.now())&&(L=""),m>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||L.length>0)){a.value!==!0&&Ce(t);const z=t.key.toLocaleLowerCase(),q=L.length===1&&L[0]===z;W=Date.now()+1500,q===!1&&(se(t),L+=z);const E=new RegExp("^"+L.split("").map($e=>Hl.indexOf($e)>-1?"\\"+$e:$e).join(".*"),"i");let K=h.value;if(q===!0||K<0||E.test(j.value(e.options[K]))!==!0)do K=ft(K+1,-1,m-1);while(K!==h.value&&(he.value(e.options[K])===!0||E.test(j.value(e.options[K]))!==!0));h.value!==K&&re(()=>{ye(K),ae(K),K>=0&&e.useInput===!0&&e.fillInput===!0&&_e(j.value(e.options[K]))});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||L!=="")&&(t.keyCode!==9||u===!1))){if(t.keyCode!==9&&se(t),h.value>-1&&h.value<m){ve(e.options[h.value]);return}if(o===!0){const z=(q,E)=>{if(E){if(St(E)!==!0)return}else E=e.newValueMode;if(q==null)return;Ae("",e.multiple!==!0,!0),(E==="toggle"?ve:Xe)(q,E==="add-unique"),e.multiple!==!0&&(I.value!==null&&I.value.focus(),me())};if(e.onNewValue!==void 0?r("newValue",y.value,z):z(y.value),e.multiple!==!0)return}a.value===!0?we():i.innerLoading.value!==!0&&Ce()}}function tt(){return b===!0?le.value:U.value!==null&&U.value.contentEl!==null?U.value.contentEl:void 0}function At(){return tt()}function Ot(){return e.hideSelected===!0?[]:d["selected-item"]!==void 0?fe.value.map(t=>d["selected-item"](t)).slice():d.selected!==void 0?[].concat(d.selected()):e.useChips===!0?fe.value.map((t,o)=>k(_l,{key:"option-"+o,removable:i.editable.value===!0&&he.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:de.value,onRemove(){t.removeAtIndex(o)}},()=>k("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:j.value(t.opt)}))):[k("span",{[ie.value===!0?"innerHTML":"textContent"]:l.value})]}function lt(){if(f.value===!0)return d["no-option"]!==void 0?d["no-option"]({inputValue:y.value}):void 0;const t=d.option!==void 0?d.option:u=>k(ql,{key:u.index,...u.itemProps},()=>k(kl,()=>k(xl,()=>k("span",{[u.html===!0?"innerHTML":"textContent"]:u.label}))));let o=Z("div",ge.value.map(t));return d["before-options"]!==void 0&&(o=d["before-options"]().concat(o)),Al(d["after-options"],o)}function zt(t,o){const u=o===!0?{...J.value,...i.splitAttrs.attributes.value}:void 0,m={ref:o===!0?I:void 0,key:"i_t",class:T.value,style:e.inputStyle,value:y.value!==void 0?y.value:"",type:"search",...u,id:o===!0?i.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...kt.value};return t!==!0&&b===!0&&(Array.isArray(m.class)===!0?m.class=[...m.class,"no-pointer-events"]:m.class+=" no-pointer-events"),k("input",m)}function ut(t){g!==null&&(clearTimeout(g),g=null),!(t&&t.target&&t.target.qComposing===!0)&&(_e(t.target.value||""),H=!0,V=y.value,i.focused.value!==!0&&(b!==!0||M.value===!0)&&i.focus(),e.onFilter!==void 0&&(g=setTimeout(()=>{g=null,be(y.value)},e.inputDebounce)))}function _e(t){y.value!==t&&(y.value=t,r("inputValue",t))}function Ae(t,o,u){H=u!==!0,e.useInput===!0&&(_e(t),(o===!0||u!==!0)&&(V=t),o!==!0&&be(t))}function be(t,o,u){if(e.onFilter===void 0||o!==!0&&i.focused.value!==!0)return;i.innerLoading.value===!0?r("filterAbort"):(i.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&n.value.length>0&&H!==!0&&t===j.value(n.value[0])&&(t="");const m=setTimeout(()=>{a.value===!0&&(a.value=!1)},10);_!==null&&clearTimeout(_),_=m,r("filter",t,(z,q)=>{(o===!0||i.focused.value===!0)&&_===m&&(clearTimeout(_),typeof z=="function"&&z(),s.value=!1,re(()=>{i.innerLoading.value=!1,i.editable.value===!0&&(o===!0?a.value===!0&&me():a.value===!0?Ke(!0):a.value=!0),typeof q=="function"&&re(()=>{q(C)}),typeof u=="function"&&re(()=>{u(C)})}))},()=>{i.focused.value===!0&&_===m&&(clearTimeout(_),i.innerLoading.value=!1,s.value=!1),a.value===!0&&(a.value=!1)})}function Ft(){return k(El,{ref:U,class:w.value,style:e.popupContentStyle,modelValue:a.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&f.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:S.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:qe.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...Fe.value,onScrollPassive:Se,onBeforeShow:ot,onBeforeHide:Mt,onShow:Bt},lt)}function Mt(t){at(t),we()}function Bt(){G()}function It(t){ke(t),I.value!==null&&I.value.focus(),M.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function _t(t){ke(t),re(()=>{M.value=!1})}function Et(){const t=[k(Bl,{class:`col-auto ${i.fieldClass.value}`,...c.value,for:i.targetUid.value,dark:S.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:y.value.length>0,...i.splitAttrs.listeners.value,onFocus:It,onBlur:_t},{...d,rawControl:()=>i.getControl(!0),before:void 0,after:void 0})];return a.value===!0&&t.push(k("div",{ref:le,class:w.value+" scroll",style:e.popupContentStyle,...Fe.value,onClick:Ne,onScrollPassive:Se},lt())),k(Ml,{ref:Q,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:D,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:ot,onBeforeHide:Tt,onHide:pt,onShow:Pt},()=>k("div",{class:"q-select__dialog"+(S.value===!0?" q-select__dialog--dark q-dark":"")+(M.value===!0?" q-select__dialog--focused":"")},t))}function Tt(t){at(t),Q.value!==null&&Q.value.__updateRefocusTarget(i.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),i.focused.value=!1}function pt(t){me(),i.focused.value===!1&&r("blur",t),Ve()}function Pt(){const t=document.activeElement;(t===null||t.id!==i.targetUid.value)&&I.value!==null&&I.value!==t&&I.value.focus(),G()}function we(){F.value!==!0&&(h.value=-1,a.value===!0&&(a.value=!1),i.focused.value===!1&&(_!==null&&(clearTimeout(_),_=null),i.innerLoading.value===!0&&(r("filterAbort"),i.innerLoading.value=!1,s.value=!1)))}function Ce(t){i.editable.value===!0&&(b===!0?(i.onControlFocusin(t),F.value=!0,re(()=>{i.focus()})):i.focus(),e.onFilter!==void 0?be(y.value):(f.value!==!0||d["no-option"]!==void 0)&&(a.value=!0))}function me(){F.value=!1,we()}function Ve(){e.useInput===!0&&Ae(e.multiple!==!0&&e.fillInput===!0&&n.value.length>0&&j.value(n.value[0])||"",!0,!0)}function Ke(t){let o=-1;if(t===!0){if(n.value.length>0){const u=$.value(n.value[0]);o=e.options.findIndex(m=>Oe($.value(m),u))}te(o)}ye(o)}function Rt(t,o){a.value===!0&&i.innerLoading.value===!1&&(te(-1,!0),re(()=>{a.value===!0&&i.innerLoading.value===!1&&(t>o?te():Ke(!0))}))}function nt(){F.value===!1&&U.value!==null&&U.value.updatePosition()}function ot(t){t!==void 0&&ke(t),r("popupShow",t),i.hasPopupOpen=!0,i.onControlFocusin(t)}function at(t){t!==void 0&&ke(t),r("popupHide",t),i.hasPopupOpen=!1,i.onControlFocusout(t)}function it(){b=A.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?d["no-option"]!==void 0||e.onFilter!==void 0||f.value===!1:!0),D=A.platform.is.ios===!0&&b===!0&&e.useInput===!0?"fade":e.transitionShow}return bl(it),wl(nt),it(),We(()=>{g!==null&&clearTimeout(g)}),Object.assign(C,{showPopup:Ce,hidePopup:me,removeAtIndex:He,add:Xe,toggleOption:ve,getOptionIndex:()=>h.value,setOptionIndex:ye,moveOptionSelection:Ie,filter:be,updateMenuPosition:nt,updateInputValue:Ae,isOptionSelected:De,getEmittingOptionValue:Ue,isOptionDisabled:(...t)=>he.value.apply(null,t)===!0,getOptionValue:(...t)=>$.value.apply(null,t),getOptionLabel:(...t)=>j.value.apply(null,t)}),Object.assign(i,{innerValue:n,fieldClass:v(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:B,targetRef:I,hasValue:O,showPopup:Ce,floatingLabel:v(()=>e.hideSelected!==!0&&O.value===!0||typeof y.value=="number"||y.value.length>0||rt(e.displayValue)),getControlChild:()=>{if(i.editable.value!==!1&&(F.value===!0||f.value!==!0||d["no-option"]!==void 0))return b===!0?Et():Ft();i.hasPopupOpen===!0&&(i.hasPopupOpen=!1)},controlEvents:{onFocusin(t){i.onControlFocusin(t)},onFocusout(t){i.onControlFocusout(t,()=>{Ve(),we()})},onClick(t){if(Ne(t),b!==!0&&a.value===!0){we(),I.value!==null&&I.value.focus();return}Ce(t)}},getControl:t=>{const o=Ot(),u=t===!0||F.value!==!0||b!==!0;if(e.useInput===!0)o.push(zt(t,u));else if(i.editable.value===!0){const z=u===!0?J.value:void 0;o.push(k("input",{ref:u===!0?I:void 0,key:"d_t",class:"q-select__focus-target",id:u===!0?i.targetUid.value:void 0,value:l.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...z,onKeydown:et,onKeyup:Ze,onKeypress:Je})),u===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length>0&&o.push(k("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(ue.value!==void 0&&e.disable!==!0&&Be.value.length>0){const z=Be.value.map(q=>k("option",{value:q,selected:!0}));o.push(k("select",{class:"hidden",name:ue.value,multiple:e.multiple},z))}const m=e.useInput===!0||u!==!0?void 0:i.splitAttrs.attributes.value;return k("div",{class:"q-field__native row items-center",...m},o)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[k(Ee,{class:"q-select__dropdown-icon"+(a.value===!0?" rotate-180":""),name:Me.value})]:null}),ht(i)}});export{jl as Q,Rl as a,_l as b,Nl as c,Te as r,Pl as u};