import{_ as N}from"./FooterD.f746d5f2.js";import{b as g,r as F,o as i,e as r,f as t,w as s,j as o,t as n,l as w,F as P,m as b,bV as y,q as S,v as V,x as C,y as L,A as $,u as f,s as A,E as B,G as I}from"./index.d17d1dd6.js";import{b as k,_ as q,a as z}from"./index.39854cc2.js";import{_ as D}from"./AvatarSimple.100281ad.js";import"./Field.c654973d.js";import"./VInput.05d9ddc1.js";const l=e=>(C("data-v-1a1319a3"),e=e(),L(),e),E={class:"network-stats"},R={class:"network-stat"},T=l(()=>o("span",null,"Followers",-1)),j={class:"network-stat is-centered"},G=l(()=>o("span",null,"Following",-1)),H={class:"network-stat"},W=l(()=>o("span",null,"Posts",-1)),J={class:"network-toolbar"},K=l(()=>o("h3",null,"Network",-1)),M={class:"network-grid"},O={class:"columns is-multiline b-columns-half-tablet-p"},Q={class:"network-avatar"},U={class:"rem-80"},X={class:"network-stats"},Y={class:"network-stat"},Z=l(()=>o("span",null,"Followers",-1)),oo={class:"network-stat"},to=l(()=>o("span",null,"Following",-1)),so=g({__name:"ProfileNetwork",props:{stats:null,people:null},setup(e){const _=e;return(v,h)=>{const c=y,p=F("RouterLink"),u=D,d=S,m=V;return i(),r("div",null,[t(c,{class:"network-card"},{default:s(()=>[o("div",E,[o("div",R,[o("span",null,n(_.stats.followers),1),T]),o("div",j,[o("span",null,n(_.stats.following),1),G]),o("div",H,[o("span",null,n(_.stats.posts),1),W])])]),_:1}),o("div",J,[K,t(p,{to:"/profile/network"},{default:s(()=>[w("View All")]),_:1})]),o("div",M,[o("div",O,[(i(!0),r(P,null,b(_.people,(a,x)=>(i(),r("div",{key:x,class:"column is-4"},[t(c,{class:"network-card"},{default:s(()=>[o("div",Q,[t(u,{picture:a.photo,size:"large"},null,8,["picture"])]),t(d,{tag:"h3",size:6,weight:"semi",narrow:""},{default:s(()=>[w(n(a.name),1)]),_:2},1024),o("p",U,n(a.role),1),o("div",X,[o("div",Y,[o("span",null,n(a.followers),1),Z]),o("div",oo,[o("span",null,n(a.following),1),to])]),t(m,{fullwidth:""},{default:s(()=>[w("View Profile")]),_:1})]),_:2},1024)]))),128))])])])}}});const no=$(so,[["__scopeId","data-v-1a1319a3"]]),ro=g({__name:"network",setup(e){return(_,v)=>{const h=q,c=no,p=z,u=B,d=I,m=N;return i(),r("div",null,[t(h,{active:"network"}),t(d,{color:"grey"},{default:s(()=>[t(u,null,{default:s(()=>[t(p,{large:""},{default:s(()=>[t(c,{stats:f(k).stats,people:f(k).people},null,8,["stats","people"])]),_:1})]),_:1})]),_:1}),t(m,{text:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Negare
              non possum. Apparet statim, quae sint officia, quae actiones.`,color:"dark","social-links":f(A)},null,8,["social-links"])])}}});export{ro as default};