import{b as i,g as m,o,e as t,j as u,t as d,F as v,m as f,n as g,u as y,A as V}from"./index.d17d1dd6.js";const h=["value"],B=["value"],b=i({__name:"VSelect",props:{options:null,value:{default:void 0},modelValue:{default:void 0},placeholder:{default:""},readonly:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(s,{emit:c}){const l=s,r=m(()=>[l.rounded&&"is-rounded"]);function p(n){const e=n.target.value;c("update:modelValue",e),console.log(e)}return(n,e)=>(o(),t("div",{class:g(["select",y(r)])},[u("select",{value:s.modelValue,onChange:e[0]||(e[0]=a=>p(a))},[u("option",null,d(l.placeholder),1),(o(!0),t(v,null,f(l.options,(a,_)=>(o(),t("option",{key:_,value:a.value},d(a.label),9,B))),128))],40,h)],2))}});const C=V(b,[["__scopeId","data-v-6a9b255a"]]);export{C as _};