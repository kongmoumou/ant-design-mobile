(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[148],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var l=a("FfOG");a.d(t,"a",(function(){return l["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var l=a("/r+8"),n=a("Vhn3"),r=a("ahKI"),c=a.n(r),m=a("vumQ"),o=a("vwEJ");a("P1/K"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,r=e.showCopy,u=void 0===r||r,i=Object(o["useCopy"])(),d=Object(n["a"])(i,2),s=d[0],E=d[1];return c.a.createElement("div",{className:"__dumi-default-code-block"},c.a.createElement(m["a"],Object(l["a"])({},m["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,l=e.style,n=e.tokens,r=e.getLineProps,m=e.getTokenProps;return c.a.createElement("pre",{className:a,style:l},u&&c.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),n.map(((e,t)=>c.a.createElement("div",r({line:e,key:t}),e.map(((e,t)=>c.a.createElement("span",m({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("/r+8"),a("ahKI"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var l=a("/r+8"),n=a("ahKI"),r=a.n(n);a("tCeM");t["a"]=e=>r.a.createElement("div",Object(l["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return p}));var l=a("ahKI"),n=a.n(l),r=a("Vhn3"),c=a("/7QA"),m=a("9kvl"),o=a("vwEJ"),u=a("Bjia");a("YWOM");function i(e,t){var a,l=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return l||(l=t.tsx?"tsx":"jsx"),l}var d=e=>{var t=Object(l["useRef"])(null),a=Object(l["useContext"])(o["context"]),d=a.locale,s=Object(o["useLocaleProps"])(d,e),E=(null===m["a"]||void 0===m["a"]?void 0:m["a"].location.hash)==="#".concat(s.identifier),v=1===Object.keys(s.sources).length,h=Object(o["useMotions"])(s.motions||[],t.current),f=Object(r["a"])(h,2),b=f[0],p=f[1],g=Object(o["useCopy"])(),w=Object(r["a"])(g,2),k=w[0],_=w[1],y=Object(l["useState"])("_"),O=Object(r["a"])(y,2),j=O[0],N=O[1],x=Object(l["useState"])(i(j,s.sources[j])),C=Object(r["a"])(x,2),L=C[0],M=C[1],A=s.sources[j][L]||s.sources[j].content,I=Object(o["useTSPlaygroundUrl"])(d,A),V=Object(o["usePrefersColor"])(),Z=Object(r["a"])(V,1);Z[0];function z(e){N(e),M(i(e,s.sources[e]))}return n.a.createElement("div",{style:s.style,className:[s.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:s.identifier,"data-debug":s.debug||void 0},n.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":s.title},s.title&&n.a.createElement(o["AnchorLink"],{to:"#".concat(s.identifier)},s.title),s.description&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.description}})),n.a.createElement("div",{className:"__dumi-default-previewer-actions"},s.debug&&n.a.createElement("span",{className:"debug-badge"},"Debug Only"),s.motions&&n.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:p,onClick:()=>b()}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":_,onClick:()=>k(A)}),"tsx"===L&&n.a.createElement(o["Link"],{target:"_blank",to:I},n.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),n.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!v&&n.a.createElement(c["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:j,onChange:z},Object.keys(s.sources).map((e=>n.a.createElement(c["Tabs"].Tab,{title:"_"===e?"index.".concat(i(e,s.sources[e])):e,key:e})))),n.a.createElement("div",{className:"__dumi-default-previewer-source"},n.a.createElement(u["a"],{code:A,lang:L,showCopy:!1}))))},s=d,E=(a("oeoJ"),a("NEWu")),v=(a("q9vG"),e=>{var t=e.url,a=Object(l["useState"])(Math.random()),m=Object(r["a"])(a,2),u=m[0],i=m[1],d=Object(o["usePrefersColor"])(),s=Object(r["a"])(d,1),v=s[0],p=Object(l["useContext"])(o["context"]),g=p.config.mode;return Object(l["useEffect"])((()=>{i(Math.random())}),[v]),n.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":g},n.a.createElement("iframe",{title:"dumi-previewer",src:t,key:u}),n.a.createElement("div",{className:"adm-doc-device-action"},n.a.createElement("a",{onClick:()=>i(Math.random())},h),n.a.createElement(c["Popover"],{content:n.a.createElement(E["a"],{value:t,size:96}),trigger:"click"},n.a.createElement("a",null,f)),n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},b)))}),h=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),f=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),b=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),p="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(o["useDemoUrl"])(e.identifier);return n.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},n.a.createElement("div",{className:"adm-doc-previewer-source"},n.a.createElement(s,e)),n.a.createElement("div",{className:"adm-doc-previewer-device"},n.a.createElement(v,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),r=a("eqKt"),c=a.n(r),m=e=>n.a.createElement("a",{className:c.a.card,href:e.link,target:"_blank"},e.image&&n.a.createElement("img",{src:e.image,alt:e.title}),n.a.createElement("div",{className:c.a.content},n.a.createElement("div",{className:c.a.title},e.title),n.a.createElement("div",{className:c.a.description},e.description)));t["a"]=m},iDMq:function(e,t,a){"use strict";a.r(t);var l=a("ahKI"),n=a.n(l),r=a("vwEJ"),c=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),m=(a("gKi5"),a("Bjia"),a("0m3q"),a("kzd0")),o=n.a.memo((e=>{var t=e.demos,a=t["water-mark-demo1"].component,l=t["water-mark-demo2"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"watermark-\u6c34\u5370"},n.a.createElement(r["AnchorLink"],{to:"#watermark-\u6c34\u5370","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"WaterMark \u6c34\u5370"),n.a.createElement("p",null,"\u9875\u9762\u4e0a\u6dfb\u52a0\u7279\u5b9a\u7684\u6587\u5b57\u6216\u56fe\u6848\u3002"),n.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},n.a.createElement(r["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),n.a.createElement("p",null,"\u9002\u7528\u4e8e\u9632\u6b62\u4fe1\u606f\u76d7\u7528\u3002"),n.a.createElement("h2",{id:"\u793a\u4f8b"},n.a.createElement(r["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),n.a.createElement(c["default"],t["water-mark-demo1"].previewerProps,n.a.createElement(a,null)),n.a.createElement(c["default"],t["water-mark-demo2"].previewerProps,n.a.createElement(l,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"watermark"},n.a.createElement(r["AnchorLink"],{to:"#watermark","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"WaterMark"),n.a.createElement("h3",{id:"\u5c5e\u6027"},n.a.createElement(r["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53c2\u6570"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"content"),n.a.createElement("td",null,"\u6c34\u5370\u6587\u5b57\u5185\u5bb9"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"fontColor"),n.a.createElement("td",null,"\u6c34\u5370\u6587\u5b57\u989c\u8272"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"rgba(0, 0, 0, .15)"))),n.a.createElement("tr",null,n.a.createElement("td",null,"fontSize"),n.a.createElement("td",null,"\u6587\u5b57\u5927\u5c0f"),n.a.createElement("td",null,n.a.createElement("code",null,"string | number")),n.a.createElement("td",null,n.a.createElement("code",null,"16"))),n.a.createElement("tr",null,n.a.createElement("td",null,"fullPage"),n.a.createElement("td",null,"\u662f\u5426\u8986\u76d6\u6574\u4e2a\u9875\u9762"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"gapX"),n.a.createElement("td",null,"\u6c34\u5370\u4e4b\u95f4\u7684\u6c34\u5e73\u95f4\u8ddd"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"24"))),n.a.createElement("tr",null,n.a.createElement("td",null,"gapY"),n.a.createElement("td",null,"\u6c34\u5370\u4e4b\u95f4\u7684\u5782\u76f4\u95f4\u8ddd"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"48"))),n.a.createElement("tr",null,n.a.createElement("td",null,"height"),n.a.createElement("td",null,"\u6c34\u5370\u7684\u9ad8\u5ea6"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"64"))),n.a.createElement("tr",null,n.a.createElement("td",null,"image"),n.a.createElement("td",null,"\u56fe\u7247\u6e90\uff0c\u5efa\u8bae\u5bfc\u51fa 2 \u500d\u6216 3 \u500d\u56fe\uff0c\u4f18\u5148\u4f7f\u7528\u56fe\u7247\u6e32\u67d3\u6c34\u5370"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"imageHeight"),n.a.createElement("td",null,"\u56fe\u7247\u9ad8\u5ea6"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"64"))),n.a.createElement("tr",null,n.a.createElement("td",null,"imageWidth"),n.a.createElement("td",null,"\u56fe\u7247\u5bbd\u5ea6"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"120"))),n.a.createElement("tr",null,n.a.createElement("td",null,"rotate"),n.a.createElement("td",null,"\u6c34\u5370\u7ed8\u5236\u65f6\uff0c\u65cb\u8f6c\u7684\u89d2\u5ea6\uff0c\u5355\u4f4d \xb0"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"-22"))),n.a.createElement("tr",null,n.a.createElement("td",null,"width"),n.a.createElement("td",null,"\u6c34\u5370\u7684\u5bbd\u5ea6"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"120"))),n.a.createElement("tr",null,n.a.createElement("td",null,"zIndex"),n.a.createElement("td",null,"\u8ffd\u52a0\u7684\u6c34\u5370\u5143\u7d20\u7684 z-index"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,n.a.createElement("code",null,"2000"))))),n.a.createElement("h3",{id:"css-\u53d8\u91cf"},n.a.createElement(r["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),n.a.createElement(m["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5c5e\u6027"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),n.a.createElement("th",null,"\u5168\u5c40\u53d8\u91cf"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"--z-index"),n.a.createElement("td",null,"\u6c34\u5370\u6d6e\u5c42\u7684 ",n.a.createElement("code",null,"z-index")),n.a.createElement("td",null,n.a.createElement("code",null,"2000")),n.a.createElement("td",null,n.a.createElement("code",null,"--adm-water-mark-z-index"))))))))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),a=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(o,{demos:a})}},kzd0:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),r=a("bIC1"),c=a.n(r);a("sgs9");function m(e,t){return s(e)||d(e,t)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,n,r=[],c=!0,m=!1;try{for(a=a.call(e);!(c=(l=a.next()).done);c=!0)if(r.push(l.value),t&&r.length===t)break}catch(o){m=!0,n=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(m)throw n}}return r}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(l["useRef"])(),r=Object(l["useState"])(!1),o=m(r,2),u=o[0],i=o[1],d=Object(l["useState"])(!1),s=m(d,2),E=s[0],v=s[1];return Object(l["useEffect"])((function(){var e=a.current,t=c()((function(){i(e.scrollLeft>0),v(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":u||void 0,"data-right-folded":E||void 0},n.a.createElement("table",null,t)))};t["a"]=E},mVOg:function(e,t,a){"use strict";var l=a("Vhn3"),n=a("ahKI"),r=a.n(n),c=a("vwEJ"),m=a("/7QA");t["a"]=()=>{var e=Object(n["useContext"])(c["context"]),t=e.locale,a=Object(n["useState"])(!1),o=Object(l["a"])(a,2),u=o[0],i=o[1];return r.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{i(!0)},onMouseLeave:()=>{i(!1)},style:{verticalAlign:"-0.125em"}},r.a.createElement(m["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:u,mode:"dark"},r.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},r.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},sgs9:function(e,t,a){},tCeM:function(e,t,a){}}]);