"use strict";const t=require("vue"),a={class:"button-container"},l=t.defineComponent({__name:"upload",props:{type:{default:"primary"},size:{default:"middle"}},setup(n){t.ref("Alex");function s(e){const o={};if(typeof e!="string")return o;const c=e.trim().split(/\s+/);for(const r of c)o[r]=!0;return o}return(e,o)=>(t.openBlock(),t.createElementBlock("div",a,[t.createElementVNode("button",{class:t.normalizeClass(s(` button-color--${n.type} button-size--${n.size}`))},[t.renderSlot(e.$slots,"default",{},void 0,!0)],2)]))}});const u=(n,s)=>{const e=n.__vccOpts||n;for(const[o,c]of s)e[o]=c;return e},i=u(l,[["__scopeId","data-v-9c0f51b4"]]);module.exports=i;