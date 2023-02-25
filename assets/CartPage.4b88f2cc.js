import{ag as $,r as p,I as A,aX as S,S as O,c as P,j as u,k as y,l as i,d as l,L as n,P as k,A as T,R as s,F as C,M as D,K as g,q as v,aa as F,O as L}from"./index.a6c0b814.js";import{Q as N,a as b}from"./QTable.b3949774.js";import{Q as U}from"./QInput.cc972aac.js";import{Q as j,a as q}from"./QCard.91cf997f.js";import{Q as R}from"./QDialog.f96acecc.js";import{u as E}from"./use-quasar.ac2d6f92.js";import"./QItemLabel.35c82824.js";import"./uid.42677368.js";const K={class:"q-pa-md",id:"setting-cart"},M=["src"],X={class:"flex justify-around items-center q-mt-md q-gutter-md"},G={class:"text-h5 text-weight-bold"},H=i("div",{class:"text-center text-subtitle1"},"\u8A02\u55AE\u78BA\u8A8D",-1),J={style:{"padding-left":"20px"}},oe={__name:"CartPage",setup(W){const h=D(),w=E(),x=$(),d=p(!1),{editCart:I,checkOut:Q}=x,o=p(!1),f=p(!1),_=p(""),r=A([]);(async()=>{var a,t;try{d.value=!0;const{data:e}=await S.get("/users/cart");r.push(...e.result),d.value=!1,console.log(r)}catch(e){O.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((t=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:t.message)||"\u8CFC\u7269\u8ECA\u932F\u8AA4\uFF01"})}})();const V=[{name:"name",required:!0,label:"\u5546\u54C1\u540D\u7A31",align:"center",field:a=>a.p_id.name,sortable:!0,sort:(a,t)=>parseInt(a,10)-parseInt(t,10)},{name:"image",required:!0,label:"\u5716\u7247",align:"center",field:a=>a.p_id.image},{name:"price",required:!0,label:"\u55AE\u50F9",align:"center",field:a=>a.p_id.price,sortable:!0,sort:(a,t)=>parseInt(a,10)-parseInt(t,10)},{name:"quantity",required:!0,label:"\u6578\u91CF",align:"center",field:a=>a.quantity,sortable:!0,sort:(a,t)=>parseInt(a,10)-parseInt(t,10)},{name:"total",required:!0,label:"\u5C0F\u8A08",align:"center",field:a=>a.p_id.price*a.quantity,sortable:!0,sort:(a,t)=>parseInt(a,10)-parseInt(t,10)},{name:"other",required:!0,label:"\u64CD\u4F5C",align:"center"}],c=async(a,t)=>{const e=r.findIndex(m=>m._id===a);await I({_id:r[e].p_id._id,quantity:t}),r[e].quantity+=t,r[e].quantity<=0?(r.splice(e,1),w.notify({type:"positive",color:"pink",message:"\u6210\u529F\u522A\u9664\u5546\u54C1",position:"top"})):w.notify({type:"positive",color:"warning",message:"\u4FEE\u6539\u6578\u91CF\u5B8C\u6210",position:"top"})},z=P(()=>r.reduce((a,t)=>a+t.p_id.price*t.quantity,0)),B=async()=>{d.value=!0,await Q(),r.splice(0,r.length),h.push("/setting/order"),d.value=!1};return(a,t)=>(u(),y(C,null,[i("div",K,[l(N,{class:"cart-table",title:"\u8CFC\u7269\u8ECA",rows:r,columns:V,"row-key":"_id",filter:_.value,"virtual-scroll":"",flat:"",loading:d.value},{"body-cell-image":n(e=>[l(b,null,{default:n(()=>[i("img",{src:e.row.p_id.image,width:130,height:100},null,8,M)]),_:2},1024)]),"body-cell-quantity":n(e=>[l(b,null,{default:n(()=>[o.value?(u(),g(s,{key:0,icon:"mdi-minus",round:"",outline:"",unelevated:"",size:"sm",color:"warning",onClick:m=>c(e.row._id,-1)},null,8,["onClick"])):v("",!0),i("span",null,"\xA0\xA0 "+k(e.row.quantity)+" \xA0\xA0",1),o.value?(u(),g(s,{key:1,icon:"mdi-plus",round:"",outline:"",unelevated:"",size:"sm",color:"warning",onClick:m=>c(e.row._id,1)},null,8,["onClick"])):v("",!0)]),_:2},1024)]),"body-cell-other":n(e=>[l(b,{class:"q-gutter-x-sm"},{default:n(()=>[l(s,{icon:"delete",round:"",unelevated:"",size:"sm",color:"pink",onClick:m=>c(e.row._id,e.row.quantity*-1)},null,8,["onClick"])]),_:2},1024)]),"top-right":n(()=>[l(U,{class:"q-mr-md",borderless:"",dense:"",debounce:"300",modelValue:_.value,"onUpdate:modelValue":t[1]||(t[1]=e=>_.value=e),placeholder:"Search"},{append:n(()=>[l(F,{name:"search"})]),_:1},8,["modelValue"]),o.value?v("",!0):(u(),g(s,{key:0,icon:"edit",label:"\u7DE8\u8F2F",outline:"",unelevated:"",size:"sm",color:"secondary",onClick:t[2]||(t[2]=e=>o.value=!o.value)})),o.value?(u(),g(s,{key:1,icon:"check",label:"\u78BA\u8A8D",outline:"",unelevated:"",size:"sm",color:"secondary",onClick:t[3]||(t[3]=e=>o.value=!o.value)})):v("",!0)]),default:n(()=>[l(s,{icon:"delete",round:"",unelevated:"",size:"sm",color:"pink",onClick:t[0]||(t[0]=e=>c(a.props.row._id,a.props.row.quantity*-1))})]),_:1},8,["rows","filter","loading"]),i("div",X,[i("div",G,"TOTAL\uFF1A "+k(T(z))+" \u5143",1),l(s,{icon:"money",label:"\u7D50\u5E33 go",unelevated:"",push:"",size:"lg",color:"warning","text-color":"black",onClick:t[4]||(t[4]=e=>f.value=!0)})])]),l(R,{modelValue:f.value,"onUpdate:modelValue":t[5]||(t[5]=e=>f.value=e)},{default:n(()=>[l(j,null,{default:n(()=>[l(q,{style:{background:"linear-gradient(135deg, #53C2BA 0%, #C0538A 100%)"}},{default:n(()=>[H]),_:1}),l(q,null,{default:n(()=>[i("ul",J,[(u(!0),y(C,null,L(r,e=>(u(),y("li",{key:e._id},[i("span",null,k(e.p_id.name+" x "+e.quantity),1)]))),128))])]),_:1}),l(q,{class:"text-center"},{default:n(()=>[l(s,{label:"\u9001\u51FA\u8A02\u55AE",push:"",size:"sm",color:"secondary",onClick:B})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{oe as default};