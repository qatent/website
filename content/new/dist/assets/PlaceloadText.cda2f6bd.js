import{b as d,bv as c,o as h,e as u,n as m,A as v}from"./index.d17d1dd6.js";const a=/(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/,_=d({__name:"PlaceloadText",props:{width:{default:"100%"},height:{default:"10px"},mobileWidth:{default:void 0},mobileHeight:{default:void 0},disabled:{type:Boolean},centered:{type:Boolean}},setup(l){var o,n;const e=l;c(s=>({"38815f94":e.width,"29a3780e":l.height}));const t=(o=e.mobileWidth)!=null?o:e.width,i=(n=e.mobileHeight)!=null?n:e.height;return e.width.match(a)===null&&console.warn(`VPlaceload: invalid "${e.width}" width. Should be a valid css unit value.`),e.height.match(a)===null&&console.warn(`VPlaceload: invalid "${e.height}" height. Should be a valid css unit value.`),t.match(a)===null&&console.warn(`VPlaceload: invalid "${t}" mobileWidth. Should be a valid css unit value.`),i.match(a)===null&&console.warn(`VPlaceload: invalid "${i}" mobileHeight. Should be a valid css unit value.`),(s,p)=>(h(),u("div",{class:m(["content-shape",[e.centered&&"is-centered",!e.disabled&&"loads"]])},null,2))}});const b=v(_,[["__scopeId","data-v-f8eab0aa"]]);export{a as C,b as _};