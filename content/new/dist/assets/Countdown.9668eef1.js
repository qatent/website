import{_ as W}from"./MapBox.8b4a639e.js";import{o,e as i,j as e,b as S,aW as F,bh as N,f as u,w as g,t as c,q as E,x as V,y as H,A as z,X as $,F as k,m as x,l as b,bD as C,bC as L,i as M,u as _,bE as v,r as j,g as K,n as R}from"./index.d17d1dd6.js";import{_ as U}from"./AvatarSimple.100281ad.js";import{_ as Q}from"./Tabs.71e3c91d.js";const X={viewBox:"0 0 41 32",width:"1.2em",height:"1.2em"},q=e("g",{fill:"currentColor"},[e("path",{d:"M9.239 31.927c.009.006.021.003.03.009A.51.51 0 0 0 9.5 32a.5.5 0 0 0 .132-.018L20.5 29.016l10.868 2.966A.5.5 0 0 0 31.5 32a.492.492 0 0 0 .23-.065c.01-.005.021-.003.03-.009l9-5.5a.501.501 0 0 0 .22-.563l-4.984-17.5a.499.499 0 0 0-.726-.3l-4.962 2.784a.501.501 0 0 0 .491.872l4.409-2.475l4.707 16.526l-8.015 4.899l-1.904-15.231a.5.5 0 0 0-.993.124l1.907 15.259L21 28.116v-2.73a.5.5 0 0 0-1 0v2.73l-9.911 2.705l1.907-15.259a.5.5 0 1 0-.993-.124L9.1 30.669l-8.015-4.898L5.792 9.246l4.409 2.475a.501.501 0 0 0 .491-.872L5.729 8.064a.496.496 0 0 0-.725.3L.02 25.864a.498.498 0 0 0 .22.563l8.999 5.5z"}),e("path",{d:"M20.161 23.368a.5.5 0 0 0 .675.003C21.169 23.068 29 15.882 29 8.5C29 3.733 25.267 0 20.5 0S12 3.733 12 8.5c0 7.254 7.828 14.56 8.161 14.868zM20.5 1C24.775 1 28 4.224 28 8.5c0 6.097-5.993 12.337-7.497 13.807C19.002 20.82 13 14.498 13 8.5C13 4.224 16.225 1 20.5 1z"}),e("path",{d:"M25 8.5C25 6.019 22.981 4 20.5 4S16 6.019 16 8.5s2.019 4.5 4.5 4.5S25 10.981 25 8.5zM20.5 12c-1.93 0-3.5-1.57-3.5-3.5S18.57 5 20.5 5S24 6.57 24 8.5S22.43 12 20.5 12z"})],-1),G=[q];function J(a,t){return o(),i("svg",X,G)}const P={name:"et-map",render:J},Y={viewBox:"0 0 34 32",width:"1.2em",height:"1.2em"},Z=e("g",{fill:"currentColor"},[e("path",{d:"M34 30.5v-19a.5.5 0 0 0-1 0v19a.5.5 0 0 1-.5.5h-31a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 0-1 0v19c0 .827.673 1.5 1.5 1.5h31c.827 0 1.5-.673 1.5-1.5z"}),e("path",{d:"M4.5 23a.5.5 0 0 0 0 1H6v3.5a.5.5 0 0 0 1 0V24h6v3.5a.5.5 0 0 0 1 0V24h6v3.5a.5.5 0 0 0 1 0V24h6v3.5a.5.5 0 0 0 1 0V24h1.5a.5.5 0 0 0 0-1H28v-5h1.5a.5.5 0 0 0 0-1H28v-4.5a.5.5 0 0 0-1 0V17h-6v-4.5a.5.5 0 0 0-1 0V17h-6v-4.5a.5.5 0 0 0-1 0V17H7v-4.5a.5.5 0 0 0-1 0V17H4.5a.5.5 0 0 0 0 1H6v5H4.5zM27 18v5h-6v-5h6zm-7 0v5h-6v-5h6zM7 18h6v5H7v-5zM28.5 3h4.25c.087 0 .25 0 .25.5V8H1V3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 0-1h-4C.673 2 0 2.673 0 3.5v5a.5.5 0 0 0 .5.5h33a.5.5 0 0 0 .5-.5v-5c0-1.106-.646-1.5-1.25-1.5H28.5a.5.5 0 0 0 0 1z"}),e("path",{d:"M22.5 3a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h11zM9 4.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 1 0zm16.5.5a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5z"})],-1),ee=[Z];function se(a,t){return o(),i("svg",Y,ee)}const te={name:"et-calendar",render:se},T=a=>(V("data-v-9d1f6071"),a=a(),H(),a),ne={class:"venue-section"},ae={class:"left"},oe={class:"center"},ie=T(()=>e("span",null,"Venue Info",-1)),le={class:"venue-line"},ce={class:"meta"},de=T(()=>e("span",{class:"subheading"},"When",-1)),_e={class:"line"},re={class:"line"},ue={class:"venue-line"},he={class:"meta"},pe=T(()=>e("span",{class:"subheading"},"Where",-1)),me={class:"line"},ve={class:"line"},ge={class:"right"},fe=S({__name:"VenueSection",props:{weekdays:null,time:null,place:null,address:null,backgroundImage:null,lng:null,lat:null,zoom:{default:8}},setup(a){const t=a;return(d,n)=>{const r=E,m=te,p=P,s=W,h=F("background");return o(),i("div",ne,[N(e("div",ae,null,512),[[h,{src:t.backgroundImage,placeholder:"https://dummyimage.com/1920x1080/ededed/000000"}]]),e("div",oe,[e("div",null,[u(r,{tag:"h3",size:3,weight:"semi",inverted:""},{default:g(()=>[ie]),_:1}),e("div",le,[u(m),e("div",ce,[de,e("span",_e,c(t.weekdays),1),e("span",re,c(t.time),1)])]),e("div",ue,[u(p),e("div",he,[pe,e("span",me,c(t.place)+",",1),e("span",ve,c(t.address),1)])])])]),e("div",ge,[u(s,{lng:t.lng,lat:t.lat,zoom:t.zoom},null,8,["lng","lat","zoom"])])])}}});const Ds=z(fe,[["__scopeId","data-v-9d1f6071"]]),ye={class:"event-schedule"},be={class:"columns is-gapless is-multiline"},we={class:"event-card"},$e={class:"event-card-head"},ke={class:"name"},xe={class:"date"},ze={class:"event-card-body"},Ce={class:"event-item"},Me={class:"event-item-head"},Se={class:"event-time"},Ie=["onClick","onKeydown"],Ee={class:"event-item-title"},Ve={class:"paragraph rem-90"},He={key:0,class:"event-item-content"},Te={class:"paragraph rem-85"},De={key:1,class:"event-item-speaker"},Le={class:"meta"},Be={class:"paragraph rem-80"},Oe=S({__name:"EventSchedule",props:{schedule:{default:()=>[]}},setup(a){const t=a,d=$();return(n,r)=>{const m=E,p=U;return o(),i("div",null,[e("div",ye,[e("div",be,[(o(!0),i(k,null,x(t.schedule,(s,h)=>(o(),i("div",{key:h,class:"column is-4"},[e("div",we,[e("div",$e,[e("span",ke,c(s.name),1),b(" , "),e("span",xe,c(s.date),1)]),e("div",ze,[(o(!0),i(k,null,x(s.schedule,(l,I)=>(o(),i("div",{key:I,class:"event-item-wrap"},[e("div",Ce,[e("div",Me,[e("span",Se,c(l.time),1),l.type==="personal"&&d.value!=l.id?(o(),i("a",{key:0,onClick:C(y=>d.value=l.id,["prevent"]),onKeydown:L(C(()=>d.value=l.id,["prevent"]),["space"])}," Details ",40,Ie)):l.type==="personal"&&d.value===l.id?(o(),i("a",{key:1,onClick:r[0]||(r[0]=C(y=>d.value="",["prevent"])),onKeydown:r[1]||(r[1]=L(C(()=>d.value="",["prevent"]),["space"]))}," Close ",32)):M("",!0)]),e("div",Ee,[u(m,{tag:"h3",size:6,weight:"semi",leading:""},{default:g(()=>[e("span",null,c(l.name),1)]),_:2},1024),e("p",Ve,c(l.location),1)]),l.type==="personal"&&d.value===l.id?(o(),i("div",He,[e("p",Te,c(l.content),1)])):M("",!0),l.type==="personal"?(o(),i("div",De,[u(p,{picture:l.speaker.photo},null,8,["picture"]),e("div",Le,[u(m,{tag:"h3",size:7,weight:"semi",narrow:""},{default:g(()=>[e("span",null,c(l.speaker.name),1)]),_:2},1024),e("p",Be,c(l.speaker.role),1)])])):M("",!0)])]))),128))])])]))),128))])])])}}});const Ls=z(Oe,[["__scopeId","data-v-7d1117f6"]]),f=a=>(V("data-v-5cbab272"),a=a(),H(),a),Ae={class:"mx-auto max-w-9"},We={key:0},Fe={class:"columns is-vcentered b-columns-half-tablet-p"},Ne={class:"column is-6"},je={class:"image-block"},Ke={class:"small-image-holder"},Re={class:"tiny-image-holder"},Ue={class:"column is-5 is-offset-1"},Qe=f(()=>e("p",{class:"paragraph rem-100 mb-4"}," To grow your business on today\u2019s dynamic marketplaces, you need an advantage. With our AI working continually behind the scenes, you can unlock growth opportunities and compete at the highest level 24/7. ",-1)),Xe=f(()=>e("hr",null,null,-1)),qe=f(()=>e("i",{class:"iconify","data-icon":"feather:check"},null,-1)),Ge={class:"is-weight-500 pl-2 pr-4"},Je={key:1},Pe={class:"columns is-vcentered b-columns-half-tablet-p"},Ye={class:"column is-6"},Ze={class:"image-block"},es={class:"small-image-holder"},ss={class:"tiny-image-holder"},ts={class:"column is-5 is-offset-1"},ns=f(()=>e("p",{class:"paragraph rem-100 mb-4"}," To grow your business on today\u2019s dynamic marketplaces, you need an advantage. With our AI working continually behind the scenes, you can unlock growth opportunities and compete at the highest level 24/7. ",-1)),as=f(()=>e("hr",null,null,-1)),os=f(()=>e("i",{class:"iconify","data-icon":"feather:check"},null,-1)),is={class:"is-weight-500 pl-2 pr-4"},ls={key:2},cs={class:"columns is-vcentered b-columns-half-tablet-p"},ds={class:"column is-6"},_s={class:"image-block"},rs={class:"small-image-holder"},us={class:"tiny-image-holder"},hs={class:"column is-5 is-offset-1"},ps=f(()=>e("p",{class:"paragraph rem-100 mb-4"}," To grow your business on today\u2019s dynamic marketplaces, you need an advantage. With our AI working continually behind the scenes, you can unlock growth opportunities and compete at the highest level 24/7. ",-1)),ms=f(()=>e("hr",null,null,-1)),vs=f(()=>e("i",{class:"iconify","data-icon":"feather:check"},null,-1)),gs={class:"is-weight-500 pl-2 pr-4"},fs=S({__name:"TabbedFeatures",setup(a){const t=["Upgrade your customer experience instantly","Retain more, happier customers","Start with done-for-you account setup","Track results in real-time"];return(d,n)=>{const r=E,m=Q;return o(),i("div",Ae,[u(m,{alignment:"centered",selected:"javascript",tabs:[{label:"Javascript",value:"javascript"},{label:"Development",value:"development"},{label:"UI/UX Design",value:"design"}]},{tab:g(({activeValue:p})=>[p==="javascript"?(o(),i("div",We,[e("div",Fe,[e("div",Ne,[e("div",je,[e("img",{class:"main-image",src:"data:image/gif;base64,replace_with_your_image",alt:"featured image",width:"400",height:"400",onErrorOnce:n[0]||(n[0]=s=>_(v)(s,"400x400"))},null,32),e("div",Ke,[e("img",{src:"data:image/gif;base64,replace_with_your_image",alt:"featured image",width:"400",height:"400",onErrorOnce:n[1]||(n[1]=s=>_(v)(s,"400x400"))},null,32)]),e("div",Re,[e("img",{src:"data:image/gif;base64,replace_with_your_image",alt:"featured image",width:"400",height:"400",onErrorOnce:n[2]||(n[2]=s=>_(v)(s,"400x400"))},null,32)])])]),e("div",Ue,[u(r,{tag:"h2",size:4,weight:"bold"},{default:g(()=>[b("A Rich Ecosystem")]),_:1}),Qe,Xe,(o(),i(k,null,x(t,(s,h)=>e("div",{key:h,class:"benefit mb-2"},[qe,e("span",Ge,c(s),1)])),64))])])])):p==="development"?(o(),i("div",Je,[e("div",Pe,[e("div",Ye,[e("div",Ze,[e("img",{class:"main-image",src:"data:image/gif;base64,replace_with_your_image",alt:"featured image",width:"400",height:"400",onErrorOnce:n[3]||(n[3]=s=>_(v)(s,"400x400"))},null,32),e("div",es,[e("img",{src:"data:image/gif;base64,replace_with_your_image",alt:"featured image",width:"400",height:"400",onErrorOnce:n[4]||(n[4]=s=>_(v)(s,"400x400"))},null,32)]),e("div",ss,[e("img",{src:"data:image/gif;base64,replace_with_your_image",alt:"featured image",width:"400",height:"400",onErrorOnce:n[5]||(n[5]=s=>_(v)(s,"400x400"))},null,32)])])]),e("div",ts,[u(r,{tag:"h2",size:4,weight:"bold"},{default:g(()=>[b(" The Future of Development ")]),_:1}),ns,as,(o(),i(k,null,x(t,(s,h)=>e("div",{key:h,class:"benefit mb-2"},[os,e("span",is,c(s),1)])),64))])])])):p==="design"?(o(),i("div",ls,[e("div",cs,[e("div",ds,[e("div",_s,[e("img",{class:"main-image",src:"data:image/gif;base64,replace_with_your_image",alt:"featured image",width:"400",height:"400",onErrorOnce:n[6]||(n[6]=s=>_(v)(s,"400x400"))},null,32),e("div",rs,[e("img",{src:"data:image/gif;base64,replace_with_your_image",alt:"featured image",width:"400",height:"400",onErrorOnce:n[7]||(n[7]=s=>_(v)(s,"400x400"))},null,32)]),e("div",us,[e("img",{src:"data:image/gif;base64,replace_with_your_image",alt:"featured image",width:"400",height:"400",onErrorOnce:n[8]||(n[8]=s=>_(v)(s,"400x400"))},null,32)])])]),e("div",hs,[u(r,{tag:"h2",size:4,weight:"bold"},{default:g(()=>[b("New Design Systems")]),_:1}),ps,ms,(o(),i(k,null,x(t,(s,h)=>e("div",{key:h,class:"benefit mb-2"},[vs,e("span",gs,c(s),1)])),64))])])])):M("",!0)]),_:1})])}}});const Bs=z(fs,[["__scopeId","data-v-5cbab272"]]);const ys={},B=a=>(V("data-v-c77186b8"),a=a(),H(),a),bs={class:"header-cta"},ws=B(()=>e("div",{class:"cta-content max-w-4"},[e("h3",null,"Group workshops"),e("p",{class:"paragraph is-inverted-light"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. "),e("span",null,"Learn More")],-1)),$s=B(()=>e("div",{class:"cta-content max-w-4"},[e("h3",null,"400,000+ attendees"),e("p",{class:"paragraph"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae cum essent dicta, finem fecimus et ambulandi et disputandi. "),e("span",null,"Learn More")],-1));function ks(a,t){const d=j("RouterLink");return o(),i("div",bs,[u(d,{to:"/",class:"cta-left"},{default:g(()=>[ws]),_:1}),u(d,{to:"/",class:"cta-right"},{default:g(()=>[$s]),_:1})])}const Os=z(ys,[["render",ks],["__scopeId","data-v-c77186b8"]]),xs=["id"],zs=["id"],Cs=["id"],Ms=["id"],Ss=["id"],Is=S({__name:"Countdown",props:{date:null,inverted:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},thin:{type:Boolean,default:!1}},setup(a){const t=a,d=1e3,n=d*60,r=n*60,m=r*24,p=$(0),s=$(0),h=$(0),l=$(0),I=`${t.date} 00:00:00`,y=new Date(I).getTime(),O=setInterval(()=>{const D=new Date().getTime(),w=y-D;l.value=Math.floor(w/m),h.value=Math.floor(w%m/r),s.value=Math.floor(w%r/n),p.value=Math.floor(w%n/d),w<0&&clearInterval(O)},0),A=K(()=>[t.inverted&&"is-inverted",t.bold&&!t.thin&&"is-bold",t.thin&&!t.bold&&"is-thin"]);return(D,w)=>(o(),i("div",{id:`countdown-${_(y)}`,class:R(["countdown",_(A)])},[e("ul",null,[e("li",null,[e("span",{id:`days-${_(y)}`},c(l.value),9,zs),b(" days ")]),e("li",null,[e("span",{id:`hours-${_(y)}`},c(h.value),9,Cs),b(" Hours ")]),e("li",null,[e("span",{id:`minutes-${_(y)}`},c(s.value),9,Ms),b(" Minutes ")]),e("li",null,[e("span",{id:`seconds-${_(y)}`},c(p.value),9,Ss),b(" Seconds ")])])],10,xs))}});const As=z(Is,[["__scopeId","data-v-11933640"]]);export{As as _,Os as a,Bs as b,Ls as c,Ds as d};