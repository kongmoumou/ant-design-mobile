(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[24],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("/r+8"),l=a("Vhn3"),c=a("ahKI"),r=a.n(c),o=a("vumQ"),i=a("vwEJ");a("P1/K"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,c=e.showCopy,d=void 0===c||c,m=Object(i["useCopy"])(),u=Object(l["a"])(m,2),s=u[0],E=u[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(o["a"],Object(n["a"])({},o["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,l=e.tokens,c=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:a,style:n},d&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),l.map(((e,t)=>r.a.createElement("div",c({line:e,key:t}),e.map(((e,t)=>r.a.createElement("span",o({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("/r+8"),a("ahKI"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var n=a("/r+8"),l=a("ahKI"),c=a.n(l);a("tCeM");t["a"]=e=>c.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return p}));var n=a("ahKI"),l=a.n(n),c=a("Vhn3"),r=a("/7QA"),o=a("9kvl"),i=a("vwEJ"),d=a("Bjia");a("YWOM");function m(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var u=e=>{var t=Object(n["useRef"])(null),a=Object(n["useContext"])(i["context"]),u=a.locale,s=Object(i["useLocaleProps"])(u,e),E=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(s.identifier),v=1===Object.keys(s.sources).length,h=Object(i["useMotions"])(s.motions||[],t.current),f=Object(c["a"])(h,2),b=f[0],p=f[1],w=Object(i["useCopy"])(),g=Object(c["a"])(w,2),_=g[0],k=g[1],C=Object(n["useState"])("_"),O=Object(c["a"])(C,2),y=O[0],j=O[1],N=Object(n["useState"])(m(y,s.sources[y])),x=Object(c["a"])(N,2),V=x[0],L=x[1],A=s.sources[y][V]||s.sources[y].content,M=Object(i["useTSPlaygroundUrl"])(u,A),I=Object(i["usePrefersColor"])(),Z=Object(c["a"])(I,1);Z[0];function S(e){j(e),L(m(e,s.sources[e]))}return l.a.createElement("div",{style:s.style,className:[s.className,"__dumi-default-previewer",E?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:s.identifier,"data-debug":s.debug||void 0},l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":s.title},s.title&&l.a.createElement(i["AnchorLink"],{to:"#".concat(s.identifier)},s.title),s.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:s.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},s.debug&&l.a.createElement("span",{className:"debug-badge"},"Debug Only"),s.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:p,onClick:()=>b()}),l.a.createElement("div",{className:"spacer"}),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":k,onClick:()=>_(A)}),"tsx"===V&&l.a.createElement(i["Link"],{target:"_blank",to:M},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!v&&l.a.createElement(r["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:y,onChange:S},Object.keys(s.sources).map((e=>l.a.createElement(r["Tabs"].Tab,{title:"_"===e?"index.".concat(m(e,s.sources[e])):e,key:e})))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(d["a"],{code:A,lang:V,showCopy:!1}))))},s=u,E=(a("oeoJ"),a("NEWu")),v=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),o=Object(c["a"])(a,2),d=o[0],m=o[1],u=Object(i["usePrefersColor"])(),s=Object(c["a"])(u,1),v=s[0],p=Object(n["useContext"])(i["context"]),w=p.config.mode;return Object(n["useEffect"])((()=>{m(Math.random())}),[v]),l.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":w},l.a.createElement("iframe",{title:"dumi-previewer",src:t,key:d}),l.a.createElement("div",{className:"adm-doc-device-action"},l.a.createElement("a",{onClick:()=>m(Math.random())},h),l.a.createElement(r["Popover"],{content:l.a.createElement(E["a"],{value:t,size:96}),trigger:"click"},l.a.createElement("a",null,f)),l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},b)))}),h=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),f=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),b=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),p="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(i["useDemoUrl"])(e.identifier);return l.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},l.a.createElement("div",{className:"adm-doc-previewer-source"},l.a.createElement(s,e)),l.a.createElement("div",{className:"adm-doc-previewer-device"},l.a.createElement(v,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),c=a("eqKt"),r=a.n(c),o=e=>l.a.createElement("a",{className:r.a.card,href:e.link,target:"_blank"},e.image&&l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("div",{className:r.a.content},l.a.createElement("div",{className:r.a.title},e.title),l.a.createElement("div",{className:r.a.description},e.description)));t["a"]=o},kzd0:function(e,t,a){"use strict";var n=a("ahKI"),l=a.n(n),c=a("bIC1"),r=a.n(c);a("sgs9");function o(e,t){return s(e)||u(e,t)||d(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function u(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,c=[],r=!0,o=!1;try{for(a=a.call(e);!(r=(n=a.next()).done);r=!0)if(c.push(n.value),t&&c.length===t)break}catch(i){o=!0,l=i}finally{try{r||null==a["return"]||a["return"]()}finally{if(o)throw l}}return c}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(n["useRef"])(),c=Object(n["useState"])(!1),i=o(c,2),d=i[0],m=i[1],u=Object(n["useState"])(!1),s=o(u,2),E=s[0],v=s[1];return Object(n["useEffect"])((function(){var e=a.current,t=r()((function(){m(e.scrollLeft>0),v(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":d||void 0,"data-right-folded":E||void 0},l.a.createElement("table",null,t)))};t["a"]=E},mVOg:function(e,t,a){"use strict";var n=a("Vhn3"),l=a("ahKI"),c=a.n(l),r=a("vwEJ"),o=a("/7QA");t["a"]=()=>{var e=Object(l["useContext"])(r["context"]),t=e.locale,a=Object(l["useState"])(!1),i=Object(n["a"])(a,2),d=i[0],m=i[1];return c.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{verticalAlign:"-0.125em"}},c.a.createElement(o["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:d,mode:"dark"},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},nMbi:function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),l=a.n(n),c=a("vwEJ"),r=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg")),o=a("ekZX"),i=(a("gKi5"),a("Bjia"),a("0m3q"),a("kzd0")),d=l.a.memo((e=>{var t=e.demos,a=t["cascader-view-demo1"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"cascaderview-\u7ea7\u8054\u9009\u62e9\u89c6\u56fe"},l.a.createElement(c["AnchorLink"],{to:"#cascaderview-\u7ea7\u8054\u9009\u62e9\u89c6\u56fe","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CascaderView \u7ea7\u8054\u9009\u62e9\u89c6\u56fe"),l.a.createElement("p",null,"CascaderView \u662f ",l.a.createElement(c["Link"],{to:"/zh/components/cascader"},"Cascader")," \u7684\u5185\u5bb9\u533a\u57df\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),l.a.createElement(o["default"],t["cascader-view-demo1"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"cascaderview"},l.a.createElement(c["AnchorLink"],{to:"#cascaderview","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CascaderView"),l.a.createElement("h3",{id:"\u5c5e\u6027"},l.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"defaultValue"),l.a.createElement("td",null,"\u9ed8\u8ba4\u9009\u4e2d\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"CascaderValue[]")),l.a.createElement("td",null,l.a.createElement("code",null,"[]"))),l.a.createElement("tr",null,l.a.createElement("td",null,"onChange"),l.a.createElement("td",null,"\u9009\u9879\u6539\u53d8\u65f6\u89e6\u53d1"),l.a.createElement("td",null,l.a.createElement("code",null,"(value: CascaderValue[], extend: CascaderValueExtend) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"onTabsChange"),l.a.createElement("td",null,"\u5207\u6362\u9762\u677f\u7684\u56de\u8c03"),l.a.createElement("td",null,l.a.createElement("code",null,"(index: number) => void")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"options"),l.a.createElement("td",null,"\u914d\u7f6e\u6bcf\u4e00\u5217\u7684\u9009\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"CascaderOption[]")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"placeholder"),l.a.createElement("td",null,"\u672a\u9009\u4e2d\u65f6\u7684\u63d0\u793a\u6587\u6848"),l.a.createElement("td",null,l.a.createElement("code",null,"string")),l.a.createElement("td",null,l.a.createElement("code",null,"'\u8bf7\u9009\u62e9'"))),l.a.createElement("tr",null,l.a.createElement("td",null,"value"),l.a.createElement("td",null,"\u9009\u4e2d\u9879"),l.a.createElement("td",null,l.a.createElement("code",null,"CascaderValue[]")),l.a.createElement("td",null,"-")))),l.a.createElement("p",null,"\u5173\u4e8e ",l.a.createElement("code",null,"CascaderValue")," ",l.a.createElement("code",null,"CascaderOption[]")," ",l.a.createElement("code",null,"CascaderValueExtend")," \u7684\u7c7b\u578b\u5b9a\u4e49\uff0c\u8bf7\u53c2\u8003 ",l.a.createElement(c["AnchorLink"],{to:"/zh/components/cascader#api"},"Cascader")," \u7684\u6587\u6863\u3002"),l.a.createElement("h3",{id:"\u52a0\u8f7d\u4e2d"},l.a.createElement(c["AnchorLink"],{to:"#\u52a0\u8f7d\u4e2d","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u52a0\u8f7d\u4e2d ",l.a.createElement(r["a"],null)),l.a.createElement("p",null,"\u4f60\u53ef\u4ee5\u628a ",l.a.createElement("code",null,"CascaderView.optionSkeleton")," \u4f5c\u4e3a ",l.a.createElement("code",null,"CascaderOption[]")," \u4f20\u5165\u5230 CascaderView \u7684 ",l.a.createElement("code",null,"options")," \u5c5e\u6027\u6216\u8005\u662f ",l.a.createElement("code",null,"CascaderOption")," \u7684 ",l.a.createElement("code",null,"children")," \u4e2d\u3002CascaderView \u4f1a\u5c06\u5176\u8bc6\u522b\u5e76\u663e\u793a\u51fa\u9aa8\u67b6\u5c4f\u6548\u679c\u3002"),l.a.createElement("h3",{id:"css-\u53d8\u91cf"},l.a.createElement(c["AnchorLink"],{to:"#css-\u53d8\u91cf","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"CSS \u53d8\u91cf"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u5c5e\u6027"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"--height"),l.a.createElement("td",null,"\u9ad8\u5ea6"),l.a.createElement("td",null,l.a.createElement("code",null,"240px"))))))))}));t["default"]=e=>{var t=l.a.useContext(c["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(d,{demos:a})}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},sgs9:function(e,t,a){},tCeM:function(e,t,a){}}]);