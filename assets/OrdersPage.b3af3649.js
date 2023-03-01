import{H as f,r as g,b2 as b,S as h,j as i,k as d,d as l,K as s,l as m,N as v,F as w,P as y,R as u}from"./index.4bb31823.js";import{Q as q}from"./QInput.9ca6aa9f.js";import{Q as k,a as x}from"./QTable.55b3f31b.js";import"./use-key-composition.d3623a63.js";import"./QSelect.ccffa6d4.js";import"./QDialog.8f04e0bb.js";const Q={class:"q-ma-md",id:"setting-order"},B=m("div",{class:"backH4 text-h4 text-center"},"\u8A02\u55AE\u660E\u7D30",-1),N={__name:"OrdersPage",setup(P){const o=f([]),n=g(""),p=[{name:"id",required:!0,label:"\u8A02\u55AE\u7DE8\u865F",align:"center",field:"_id"},{name:"date",required:!0,label:"\u8A02\u8CFC\u65E5\u671F",align:"center",field:"date",format:t=>`${new Date(t).toLocaleDateString()}`,sortable:!0,sort:(t,a)=>parseInt(t,10)-parseInt(a,10)},{name:"name",required:!0,label:"\u5546\u54C1",align:"center",sortable:!0},{name:"total",required:!0,label:"\u91D1\u984D",align:"center",field:"totalPrice"}];return(async()=>{var t,a;try{const{data:e}=await b.get("/orders");o.push(...e.result.map(r=>(r.totalPrice=r.products.reduce((_,c)=>_+c.p_id.price*c.quantity,0),r))),console.log(o)}catch(e){h.fire({toast:!0,timer:1e3,showConfirmButton:!1,background:"#F5ABA5",icon:"error",color:"black",text:((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"\u8A02\u55AE\u932F\u8AA4\uFF01"})}})(),(t,a)=>(i(),d("div",Q,[B,l(k,{class:"order-table",columns:p,rows:o,"row-key":"_id",filter:n.value,flat:""},{"top-right":s(()=>[l(q,{class:"q-mr-md",borderless:"",dense:"",debounce:"300",modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=e),placeholder:"Search"},{append:s(()=>[l(v,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-name":s(e=>[l(x,null,{default:s(()=>[(i(!0),d(w,null,y(e.row.products,r=>(i(),d("ul",null,[m("li",null,u(r.quantity)+" \u500B \xA0 \xA0 "+u(r.p_id.name),1)]))),256))]),_:2},1024)]),_:1},8,["rows","filter"])]))}};export{N as default};