import{_ as P}from"./FooterD.f746d5f2.js";import{b as j,r as b,o as t,e as n,F as m,m as d,f as e,w as s,j as c,t as f,C as x,bV as y,A as C,u as g,s as L,E as G,G as w}from"./index.d17d1dd6.js";import{p as B,_ as D,a as F}from"./index.39854cc2.js";import"./Field.c654973d.js";import"./VInput.05d9ddc1.js";import"./AvatarSimple.100281ad.js";const N={class:"columns is-multiline b-columns-half-tablet-p"},V={class:"project-card-content"},$={class:"project-members"},q=["src"],A=j({__name:"ProfileProjectsGrid",props:{projects:null},setup(i){const p=i;return(h,u)=>{const _=x,r=y,a=b("RouterLink");return t(),n("div",N,[(t(!0),n(m,null,d(p.projects,(o,l)=>(t(),n("div",{key:l,class:"column is-4"},[e(a,{to:"/profile/projects"},{default:s(()=>[e(r,{class:"project-card"},{default:s(()=>[e(_,{class:"project-card-image",src:o.image,alt:"Project image",width:"400",height:"300"},null,8,["src"]),c("div",V,[c("h3",null,f(o.title),1),c("p",null,f(o.subtitle),1),c("div",$,[(t(!0),n(m,null,d(o.members.slice(0,4),(k,v)=>(t(),n("img",{key:v,src:k,alt:"project user"},null,8,q))),128))])])]),_:2},1024)]),_:2},1024)]))),128))])}}});const E=C(A,[["__scopeId","data-v-dc5d5b97"]]),J=j({__name:"projects",setup(i){return(p,h)=>{const u=D,_=E,r=F,a=G,o=w,l=P;return t(),n("div",null,[e(u,{active:"projects"}),e(o,{color:"grey"},{default:s(()=>[e(a,null,{default:s(()=>[e(r,{large:""},{default:s(()=>[e(_,{projects:g(B)},null,8,["projects"])]),_:1})]),_:1})]),_:1}),e(l,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":g(L)},null,8,["social-links"])])}}});export{J as default};
