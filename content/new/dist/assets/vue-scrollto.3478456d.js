import{c as Ne}from"./_commonjsHelpers.712cc82f.js";var ue={exports:{}};/*!
  * vue-scrollto v2.20.0
  * (c) 2019 Randjelovic Igor
  * @license MIT
  */(function(le,Ce){(function(O,E){le.exports=E()})(Ne,function(){function O(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?O=function(e){return typeof e}:O=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(n)}function E(){return E=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}return n},E.apply(this,arguments)}var se=4,ce=.001,ve=1e-7,de=10,T=11,C=1/(T-1),pe=typeof Float32Array=="function";function R(n,e){return 1-3*e+3*n}function q(n,e){return 3*e-6*n}function j(n){return 3*n}function P(n,e,r){return((R(e,r)*n+q(e,r))*n+j(e))*n}function U(n,e,r){return 3*R(e,r)*n*n+2*q(e,r)*n+j(e)}function ge(n,e,r,t,i){var f,a,m=0;do a=e+(r-e)/2,f=P(a,t,i)-n,f>0?r=a:e=a;while(Math.abs(f)>ve&&++m<de);return a}function ye(n,e,r,t){for(var i=0;i<se;++i){var f=U(e,r,t);if(f===0)return e;var a=P(e,r,t)-n;e-=a/f}return e}function be(n){return n}var W=function(e,r,t,i){if(!(0<=e&&e<=1&&0<=t&&t<=1))throw new Error("bezier x values must be in [0, 1] range");if(e===r&&t===i)return be;for(var f=pe?new Float32Array(T):new Array(T),a=0;a<T;++a)f[a]=P(a*C,e,t);function m(g){for(var v=0,s=1,I=T-1;s!==I&&f[s]<=g;++s)v+=C;--s;var S=(g-f[s])/(f[s+1]-f[s]),y=v+S*C,h=U(y,e,t);return h>=ce?ye(g,y,e,t):h===0?y:ge(g,v,v+C,e,t)}return function(v){return v===0?0:v===1?1:P(m(v),r,i)}},Y={ease:[.25,.1,.25,1],linear:[0,0,1,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]},J=!1;try{var we=Object.defineProperty({},"passive",{get:function(){J=!0}});window.addEventListener("test",null,we)}catch{}var d={$:function(e){return typeof e!="string"?e:document.querySelector(e)},on:function(e,r,t){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{passive:!1};r instanceof Array||(r=[r]);for(var f=0;f<r.length;f++)e.addEventListener(r[f],t,J?i:!1)},off:function(e,r,t){r instanceof Array||(r=[r]);for(var i=0;i<r.length;i++)e.removeEventListener(r[i],t)},cumulativeOffset:function(e){var r=0,t=0;do r+=e.offsetTop||0,t+=e.offsetLeft||0,e=e.offsetParent;while(e);return{top:r,left:t}}},K=["mousedown","wheel","DOMMouseScroll","mousewheel","keyup","touchmove"],c={container:"body",duration:500,lazy:!0,easing:"ease",offset:0,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0};function Q(n){c=E({},c,n)}var Z=function(){var e,r,t,i,f,a,m,g,v,s,I,S,y,h,B,x,z,M,_,b,k,H,$,ee=function(u){!g||($=u,b=!0)},re,D,A,N;function he(l){var u=l.scrollTop;return l.tagName.toLowerCase()==="body"&&(u=u||document.documentElement.scrollTop),u}function Oe(l){var u=l.scrollLeft;return l.tagName.toLowerCase()==="body"&&(u=u||document.documentElement.scrollLeft),u}function ne(){k=d.cumulativeOffset(r),H=d.cumulativeOffset(e),S&&(B=H.left-k.left+a,M=B-h),y&&(z=H.top-k.top+a,_=z-x)}function te(l){if(b)return oe();D||(D=l),f||ne(),A=l-D,N=Math.min(A/t,1),N=re(N),ae(r,x+_*N,h+M*N),A<t?window.requestAnimationFrame(te):oe()}function oe(){b||ae(r,z,B),D=!1,d.off(r,K,ee),b&&I&&I($,e),!b&&s&&s(e)}function ae(l,u,o){y&&(l.scrollTop=u),S&&(l.scrollLeft=o),l.tagName.toLowerCase()==="body"&&(y&&(document.documentElement.scrollTop=u),S&&(document.documentElement.scrollLeft=o))}function Ee(l,u){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(O(u)==="object"?o=u:typeof u=="number"&&(o.duration=u),e=d.$(l),!e)return console.warn("[vue-scrollto warn]: Trying to scroll to an element that is not on the page: "+l);if(r=d.$(o.container||c.container),t=o.hasOwnProperty("duration")?o.duration:c.duration,f=o.hasOwnProperty("lazy")?o.lazy:c.lazy,i=o.easing||c.easing,a=o.hasOwnProperty("offset")?o.offset:c.offset,m=o.hasOwnProperty("force")?o.force!==!1:c.force,g=o.hasOwnProperty("cancelable")?o.cancelable!==!1:c.cancelable,v=o.onStart||c.onStart,s=o.onDone||c.onDone,I=o.onCancel||c.onCancel,S=o.x===void 0?c.x:o.x,y=o.y===void 0?c.y:o.y,typeof a=="function"&&(a=a(e,r)),h=Oe(r),x=he(r),ne(),b=!1,!m){var Te=r.tagName.toLowerCase()==="body"?document.documentElement.clientHeight||window.innerHeight:r.offsetHeight,ie=x,Le=ie+Te,fe=z-a,Ie=fe+e.offsetHeight;if(fe>=ie&&Ie<=Le){s&&s(e);return}}if(v&&v(e),!_&&!M){s&&s(e);return}return typeof i=="string"&&(i=Y[i]||Y.ease),re=W.apply(W,i),d.on(r,K,ee,{passive:!0}),window.requestAnimationFrame(te),function(){$=null,b=!0}}return Ee},V=Z(),p=[];function me(n){for(var e=0;e<p.length;++e)if(p[e].el===n)return p.splice(e,1),!0;return!1}function Se(n){for(var e=0;e<p.length;++e)if(p[e].el===n)return p[e]}function F(n){var e=Se(n);return e||(p.push(e={el:n,binding:{}}),e)}function G(n){var e=F(this).binding;if(!!e.value){if(n.preventDefault(),typeof e.value=="string")return V(e.value);V(e.value.el||e.value.element,e.value)}}var w={bind:function(e,r){F(e).binding=r,d.on(e,"click",G)},unbind:function(e){me(e),d.off(e,"click",G)},update:function(e,r){F(e).binding=r}},L={bind:w.bind,unbind:w.unbind,update:w.update,beforeMount:w.bind,unmounted:w.unbind,updated:w.update,scrollTo:V,bindings:p},X=function(e,r){r&&Q(r),e.directive("scroll-to",L);var t=e.config.globalProperties||e.prototype;t.$scrollTo=L.scrollTo};return typeof window<"u"&&window.Vue&&(window.VueScrollTo=L,window.VueScrollTo.setDefaults=Q,window.VueScrollTo.scroller=Z,window.Vue.use&&window.Vue.use(X)),L.install=X,L})})(ue);const xe=ue.exports;export{xe as V};