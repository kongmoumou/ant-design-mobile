(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[196],{"34os":function(e,t,a){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var r=o(a("ahKI")),l=i(a("uRAJ"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}function o(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=l?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r["default"]=e,a&&a.set(e,r),r}function s(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=m(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return i=e.done,e},e:function(e){c=!0,l=e},f:function(){try{i||null==a["return"]||a["return"]()}finally{if(c)throw l}}}}function u(e,t){return v(e)||f(e,t)||m(e,t)||d()}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function f(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l=[],i=!0,c=!1;try{for(a=a.call(e);!(i=(n=a.next()).done);i=!0)if(l.push(n.value),t&&l.length===t)break}catch(o){c=!0,r=o}finally{try{i||null==a["return"]||a["return"]()}finally{if(c)throw r}}return l}}function v(e){if(Array.isArray(e))return e}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y=function(e,t){var a=function(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];var l=n[1].replace(/([^^])\/$/,"$1");return b(b({},(null===(e=n[0].find((function(e){var t=e.path;return t===l})))||void 0===e?void 0:e.meta)||{}),{},{__pathname:t})},n=(0,r.useState)(a(e,t)),l=u(n,2),i=l[0],c=l[1];return(0,r.useLayoutEffect)((function(){c(a(e,t))}),[t]),i},w=function(e,t){var a=function(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(null===(t=n[0].find((function(e){return new RegExp("/".concat(e.name,"(/|$)")).test(n[1])})))||void 0===t?void 0:t.name)||e[0].name},n=(0,r.useState)(a(e,t)),l=u(n,2),i=l[0],c=l[1];return(0,r.useLayoutEffect)((function(){c(a(e,t))}),[t]),i},E=function(e,t,a){var n=function(){for(var e,t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];for(var r=a[0].navs[a[1]]||[],l="*",i=r.length-1;i>=0;i-=1){var c=r[i],o=[c].concat(c.children).filter(Boolean),s=o.find((function(e){return e.path&&new RegExp("^".concat(e.path.replace(/\.html$/,""),"(/|.|$)")).test(a[2])}));if(s){l=s.path;break}}return(null===(e=a[0].menus[a[1]])||void 0===e?void 0:e[l])||[]},l=(0,r.useState)(n(e,t,a)),i=u(l,2),c=i[0],o=i[1];return(0,r.useLayoutEffect)((function(){o(n(e,t,a))}),[e.navs,e.menus,t,a]),c},k=function(e,t,a){var n=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return n[0]===n[1][0].name?n[2].path:"".concat(a.path,"/").concat(e).replace(/\/\//,"/")},l=(0,r.useState)(n(e,t,a)),i=u(l,2),c=i[0],o=i[1];return(0,r.useLayoutEffect)((function(){o(n(e,t,a))}),[e]),c},_=function e(t){var a,n,r=s(t);try{for(r.s();!(n=r.n()).done;){var l=n.value;if(l.__dumiRoot){a=l.routes;break}if(l.routes&&(a=e(l.routes)))break}}catch(i){r.e(i)}finally{r.f()}return a},j=function(e){var t=e.location,a=e.route,n=e.children,i=e.config,c=e.apis,o=e.demos,s=t.pathname.replace(a.path.replace(/^\/$/,"//"),""),u=_(e.routes)||[],d=y(u,t.pathname),m=w(i.locales,s),p=E(i,m,t.pathname),f=k(m,i.locales,a);return r["default"].createElement(l["default"].Provider,{value:{config:i,meta:d.__pathname===t.pathname?d:{},locale:m,nav:i.navs[m]||[],menu:p,base:f,routes:u,apis:c,demos:o}},n)},O=j;t["default"]=O},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},QPmj:function(e,t,a){},QxpA:function(e,t,a){},"XJ/y":function(e,t,a){},aH6k:function(e,t,a){},afA6:function(e,t,a){"use strict";a.r(t);var n=a("/r+8"),r=a("ahKI"),l=a.n(r),i=a("q3YX"),c=a("Rsk4"),o=a("x2v5"),s=a("34os"),u=a.n(s);t["default"]=e=>l.a.createElement(u.a,Object(n["a"])({},e,{config:i,demos:c["a"],apis:o}))},f0q9:function(e,t,a){},hFYA:function(e,t,a){},kiQV:function(e){e.exports=JSON.parse('{"name":"antd-mobile","version":"5.17.2","scripts":{"start":"dumi dev","build":"gulp","build-doc":"dumi build && echo \'!.*\' > dist/.surgeignore","lint":"eslint .","postinstall":"husky install","test":"jest","test-with-coverage":"jest --coverage","pub":"npm publish ./lib","pub:alpha":"npm publish ./lib --tag alpha","pub:dev":"npm publish ./lib --tag dev"},"dependencies":{"@floating-ui/dom":"^0.5.2","@react-spring/web":"^9.4.5","@use-gesture/react":"10.2.16","ahooks":"^3.5.2","antd-mobile-icons":"^0.3.0","antd-mobile-v5-count":"^1.0.1","big.js":"^6.1.1","classnames":"^2.3.1","dayjs":"^1.11.3","lodash":"^4.17.21","rc-field-form":"~1.27.0","react-is":"^17.0.2","staged-components":"^1.1.3","tslib":"^2.4.0","use-sync-external-store":"^1.1.0"},"devDependencies":{"@babel/cli":"^7.17.10","@babel/core":"^7.18.5","@babel/plugin-transform-modules-commonjs":"^7.18.2","@babel/preset-env":"^7.18.2","@babel/preset-react":"^7.17.12","@babel/preset-typescript":"^7.17.12","@commitlint/cli":"^17.0.2","@commitlint/config-conventional":"^17.0.2","@docsearch/react":"^3.1.1","@jest/types":"^28.1.1","@statoscope/webpack-plugin":"^5.22.0","@testing-library/jest-dom":"^5.16.4","@testing-library/react":"^13.3.0","@testing-library/react-hooks":"^8.0.1","@testing-library/user-event":"14.2.1","@types/big.js":"^6.1.4","@types/jest":"^28.1.4","@types/jest-axe":"3.5.4","@types/lodash":"^4.14.182","@types/node":"^18.0.1","@types/react":"^18.0.14","@types/react-beautiful-dnd":"^13.1.2","@types/react-dom":"^18.0.5","@types/react-helmet":"^6.1.5","@types/react-is":"^17.0.3","@types/react-virtualized":"^9.21.21","@types/resize-observer-browser":"^0.1.7","@types/testing-library__jest-dom":"^5.14.5","@types/use-sync-external-store":"^0.0.3","@typescript-eslint/eslint-plugin":"^5.30.5","@typescript-eslint/parser":"^5.30.5","@umijs/types":"^3.5.27","autoprefixer":"^9.8.8","babel-loader":"^8.2.5","css-loader":"^6.7.1","del":"^6.1.1","dumi":"^1.1.43","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-react":"^7.30.1","eslint-plugin-react-hooks":"^4.6.0","gulp":"^4.0.2","gulp-babel":"^8.0.0","gulp-less":"^5.0.0","gulp-postcss":"^9.0.1","gulp-rename":"^2.0.0","gulp-replace":"^1.1.3","gulp-typescript":"^6.0.0-alpha.1","husky":"^8.0.1","jest":"^28.1.2","jest-axe":"^6.0.0","jest-canvas-mock":"^2.4.0","jest-environment-jsdom":"^28.1.2","jest-watch-typeahead":"^1.1.0","less":"^4.1.3","lorem-ipsum":"^2.0.8","mockdate":"^3.0.5","postcss":"^7.0.39","postcss-px-multiple":"^0.1.5","postcss-pxtorem":"^6.0.0","prettier":"^2.7.1","pretty-quick":"^3.1.3","prism-react-renderer":"^1.3.5","prismjs":"^1.28.0","qrcode.react":"^3.1.0","react":"^18.2.0","react-beautiful-dnd":"^13.1.0","react-dom":"^18.2.0","react-helmet":"^6.1.0","react-test-renderer":"^18.2.0","react-virtualized":"^9.22.3","style-loader":"^3.3.1","through2":"^4.0.2","ts-jest":"^28.0.5","ts-node":"^10.8.2","typescript":"~4.6.4","vite":"^2.9.12","webpack":"^5.73.0","webpack-bundle-analyzer":"^4.5.0","webpack-stream":"^7.0.0"},"peerDependencies":{"react":"^16.8.0 || ^17.0.0 || ^18.0.0"},"resolutions":{"@types/react":"18","@types/react-dom":"18"},"main":"./cjs/index.js","module":"./es/index.js","types":"./es/index.d.ts","typings":"./es/index.d.ts","unpkg":"./umd/antd-mobile.js","GravityCDN":"./umd/antd-mobile.js","files":["./lib"],"sideEffects":["**/*.css","**/*.less","./es/index.js","./src/index.ts","./es/global/index.js","./src/global/index.ts"],"publishConfig":{"registry":"https://registry.npmjs.org"},"repository":{"type":"git","url":"git+https://github.com/ant-design/ant-design-mobile.git","branch":"master","platform":"github"}}')},lQE1:function(e,t,a){},nz4m:function(e,t,a){"use strict";a.r(t);var n=a("Vhn3"),r=a("ahKI"),l=a.n(r),i=a("vwEJ"),c=a("9kvl"),o=(a("z80P"),a("cSax")),s=a("gtIL"),u=a("LDzv"),d=function(e,t){var a="function"===typeof Symbol&&e[Symbol.iterator];if(!a)return e;var n,r,l=a.call(e),i=[];try{while((void 0===t||t-- >0)&&!(n=l.next()).done)i.push(n.value)}catch(c){r={error:c}}finally{try{n&&!n.done&&(a=l["return"])&&a.call(l)}finally{if(r)throw r.error}}return i};function m(e){function t(t,a){var n;try{n=e()}catch(h){console.error(h)}var l=function(e){return(null===a||void 0===a?void 0:a.serializer)?null===a||void 0===a?void 0:a.serializer(e):JSON.stringify(e)},i=function(e){return(null===a||void 0===a?void 0:a.deserializer)?null===a||void 0===a?void 0:a.deserializer(e):JSON.parse(e)};function c(){try{var e=null===n||void 0===n?void 0:n.getItem(t);if(e)return i(e)}catch(r){console.error(r)}return Object(u["a"])(null===a||void 0===a?void 0:a.defaultValue)?null===a||void 0===a?void 0:a.defaultValue():null===a||void 0===a?void 0:a.defaultValue}var m=d(Object(r["useState"])((function(){return c()})),2),p=m[0],f=m[1];Object(s["a"])((function(){f(c())}),[t]);var v=function(e){var a=Object(u["a"])(e)?e(p):e;if(f(a),Object(u["c"])(a))null===n||void 0===n||n.removeItem(t);else try{null===n||void 0===n||n.setItem(t,l(a))}catch(r){console.error(r)}};return[p,Object(o["a"])(v)]}return t}var p=a("0RIW"),f=m((function(){return p["a"]?localStorage:void 0})),v=f,h=e=>{var t=e.location,a=Object(r["useContext"])(i["context"]),o=a.base,s=a.locale,u=a.config.locales,d=u.find((e=>{var t=e.name;return t!==s}));function m(e){var a=o.replace("/".concat(s),""),n=t.pathname.replace(new RegExp("^".concat(o,"(/|$)")),"".concat(a,"$1"))||"/";if(e!==u[0].name){var r="".concat(a,"/").concat(e).replace(/\/\//,"/"),l=t.pathname.replace(o.replace(/^\/$/,"//"),"");return"".concat(r).concat(l).replace(/\/$/,"")}return n}var p=v("adm-doc-locale",{defaultValue:navigator.language.startsWith("zh")?"zh":"en"}),f=Object(n["a"])(p,2),h=f[0],b=f[1];return Object(r["useEffect"])((()=>{h!==s&&c["a"].replace(m(h))}),[]),d?l.a.createElement("div",{className:"__dumi-default-locale-select","data-locale-count":u.length},l.a.createElement(i["Link"],{to:m(d.name),onClick:()=>{b(d.name)}},d.label)):null},b=h,g=(a("hFYA"),a("kiQV")),y=a("/r+8"),w=(a("f0q9"),(e,t)=>{var a=t.toLowerCase().indexOf(e.toLowerCase()),n=e.length;return l.a.createElement(l.a.Fragment,null,t.substring(0,a),l.a.createElement("span",{className:"__dumi-default-search-highlight"},t.substring(a,a+n)),t.substring(a+n,t.length))}),E=()=>{var e=Object(r["useState"])(""),t=Object(n["a"])(e,2),a=t[0],c=t[1],o=Object(r["useState"])([]),s=Object(n["a"])(o,2),u=s[0],d=s[1],m=Object(r["useRef"])(null),p=Object(i["useSearch"])(a),f=l.a.createElement("svg",{className:"__dumi-default-search-empty",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2347",width:"32",height:"32"},l.a.createElement("path",{d:"M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z"}));return Object(r["useEffect"])((()=>{if(Array.isArray(p))d(p);else if("function"===typeof p){var e;p(".".concat(null===(e=m.current)||void 0===e?void 0:e.className))}}),[p]),l.a.createElement("div",{className:"__dumi-default-search"},l.a.createElement("input",Object(y["a"])({className:"__dumi-default-search-input",type:"search",ref:m},Array.isArray(p)?{value:a,onChange:e=>c(e.target.value)}:{})),l.a.createElement("ul",null,u.length>0&&u.map((e=>{var t;return l.a.createElement("li",{key:e.path,onClick:()=>c("")},l.a.createElement(i["AnchorLink"],{to:e.path},(null===(t=e.parent)||void 0===t?void 0:t.title)&&l.a.createElement("span",null,e.parent.title),w(a,e.title)))})),0===u.length&&a&&l.a.createElement("li",{style:{textAlign:"center"}},f)))},k=a("/7QA"),_=e=>{var t=e.location,a=e.darkPrefix,n=Object(r["useContext"])(i["context"]),c=n.base,o=n.config,s=o.title,u=o.logo,d=n.nav,m=n.locale,p=Object(r["useMemo"])((()=>{var e=!!m&&/^zh|cn$/i.test(m);return e&&void 0!==typeof window&&"ant-design-mobile.antgroup.com"===window.location.host?d.filter((e=>"\u56fd\u5185\u955c\u50cf"!==e.title)):d}),[d,m]);return l.a.createElement("div",{className:"__dumi-default-navbar"},l.a.createElement("button",{className:"__dumi-default-navbar-toggle"}),l.a.createElement("div",{className:"left-part"},l.a.createElement(i["Link"],{className:"__dumi-default-navbar-logo",to:c},l.a.createElement("img",{src:u.toString(),alt:"logo"}),l.a.createElement("div",{className:"title"},s),l.a.createElement("div",{className:"version"},"v".concat(g.version)))),l.a.createElement("div",{className:"middle-part"},l.a.createElement(E,null)),l.a.createElement("div",{className:"right-part"},l.a.createElement("nav",null,p.map((e=>{var t,a=e.title||e.path,n=Boolean(null===(t=e.children)||void 0===t?void 0:t.length)&&e.children.map((e=>({text:e.title,onClick:()=>{window.open(e.path,"_blank")}}))),r=l.a.createElement("span",{key:a},e.path?l.a.createElement(i["NavLink"],{to:e.path},e.title):l.a.createElement("a",null,e.title));return n?l.a.createElement(k["Popover"].Menu,{trigger:"click",actions:n,key:a},r):r})),l.a.createElement("div",{className:"__dumi-default-navbar-tool"},l.a.createElement(b,{location:t}),a))))},j=_,O=(a("lQE1"),e=>{var t=e.location,a=Object(r["useContext"])(i["context"]),n=a.config.mode,c=a.menu,o=a.meta,s=Boolean((o.hero||o.features||o.gapless)&&"site"===n)||!1===o.sidemenu||void 0;return s?null:l.a.createElement("div",{className:"__dumi-default-menu"},l.a.createElement("div",{className:"__dumi-default-menu-inner"},l.a.createElement("ul",{className:"__dumi-default-menu-list"},c.map((e=>{var a,n,r=e.children&&Boolean(e.children.length),c=r?null===(a=e.children)||void 0===a?void 0:a.map((e=>e.path)):[e.path,t.pathname.startsWith("".concat(e.path,"/"))?t.pathname:null];return r?l.a.createElement("li",{key:e.path||e.title},l.a.createElement(i["NavLink"],{to:e.path,isActive:()=>{var e;return null!==(e=null===c||void 0===c?void 0:c.includes(t.pathname))&&void 0!==e&&e}},l.a.createElement("span",{className:"adm-doc-group-title"},e.title)),l.a.createElement("ul",null,null===(n=e.children)||void 0===n?void 0:n.map((e=>l.a.createElement("li",{key:e.path},l.a.createElement(i["NavLink"],{to:e.path,exact:!0},l.a.createElement("span",null,e.title))))))):l.a.createElement("li",{key:e.path},l.a.createElement(i["NavLink"],{to:e.path,exact:!0},l.a.createElement("span",null,e.title)))})))))}),x=O,S=(a("XJ/y"),e=>{var t=e.darkSwitch,a=e.onDarkSwitchClick,r=e.isSideMenu,c=["dark","light","auto"],o=Object(i["usePrefersColor"])(),s=Object(n["a"])(o,2),u=s[0],d=s[1],m=u,p=l.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4026",width:"22",height:"22"},l.a.createElement("path",{d:"M915.2 476.16h-43.968c-24.704 0-44.736 16-44.736 35.84s20.032 35.904 44.736 35.904H915.2c24.768 0 44.8-16.064 44.8-35.904s-20.032-35.84-44.8-35.84zM512 265.6c-136.704 0-246.464 109.824-246.464 246.4 0 136.704 109.76 246.464 246.464 246.464S758.4 648.704 758.4 512c0-136.576-109.696-246.4-246.4-246.4z m0 425.6c-99.008 0-179.2-80.128-179.2-179.2 0-98.944 80.192-179.2 179.2-179.2S691.2 413.056 691.2 512c0 99.072-80.192 179.2-179.2 179.2zM197.44 512c0-19.84-19.136-35.84-43.904-35.84H108.8c-24.768 0-44.8 16-44.8 35.84s20.032 35.904 44.8 35.904h44.736c24.768 0 43.904-16.064 43.904-35.904zM512 198.464c19.776 0 35.84-20.032 35.84-44.8v-44.8C547.84 84.032 531.84 64 512 64s-35.904 20.032-35.904 44.8v44.8c0 24.768 16.128 44.864 35.904 44.864z m0 627.136c-19.776 0-35.904 20.032-35.904 44.8v44.736C476.096 940.032 492.16 960 512 960s35.84-20.032 35.84-44.8v-44.736c0-24.768-16.064-44.864-35.84-44.864z m329.92-592.832c17.472-17.536 20.288-43.072 6.4-57.024-14.016-14.016-39.488-11.2-57.024 6.336-4.736 4.864-26.496 26.496-31.36 31.36-17.472 17.472-20.288 43.008-6.336 57.024 13.952 14.016 39.488 11.2 57.024-6.336 4.8-4.864 26.496-26.56 31.296-31.36zM213.376 759.936c-4.864 4.8-26.56 26.624-31.36 31.36-17.472 17.472-20.288 42.944-6.4 56.96 14.016 13.952 39.552 11.2 57.024-6.336 4.8-4.736 26.56-26.496 31.36-31.36 17.472-17.472 20.288-43.008 6.336-56.96-14.016-13.952-39.552-11.072-56.96 6.336z m19.328-577.92c-17.536-17.536-43.008-20.352-57.024-6.336-14.08 14.016-11.136 39.488 6.336 57.024 4.864 4.864 26.496 26.56 31.36 31.424 17.536 17.408 43.008 20.288 56.96 6.336 14.016-14.016 11.264-39.488-6.336-57.024-4.736-4.864-26.496-26.56-31.296-31.424z m527.168 628.608c4.864 4.864 26.624 26.624 31.36 31.424 17.536 17.408 43.072 20.224 57.088 6.336 13.952-14.016 11.072-39.552-6.4-57.024-4.864-4.8-26.56-26.496-31.36-31.36-17.472-17.408-43.072-20.288-57.024-6.336-13.952 14.016-11.008 39.488 6.336 56.96z","p-id":"4027"})),f=l.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3854",width:"22",height:"22"},l.a.createElement("path",{d:"M991.816611 674.909091a69.166545 69.166545 0 0 0-51.665455-23.272727 70.795636 70.795636 0 0 0-27.438545 5.585454A415.674182 415.674182 0 0 1 754.993338 698.181818c-209.594182 0-393.472-184.785455-393.472-395.636363 0-52.363636 38.539636-119.621818 69.515637-173.614546 4.887273-8.610909 9.634909-16.756364 14.103272-24.901818A69.818182 69.818182 0 0 0 384.631156 0a70.842182 70.842182 0 0 0-27.438545 5.585455C161.678429 90.298182 14.362065 307.898182 14.362065 512c0 282.298182 238.824727 512 532.38691 512a522.286545 522.286545 0 0 0 453.957818-268.334545A69.818182 69.818182 0 0 0 991.816611 674.909091zM546.679156 954.181818c-248.785455 0-462.941091-192-462.941091-442.181818 0-186.647273 140.637091-372.829091 300.939637-442.181818-36.817455 65.629091-92.578909 151.970909-92.578909 232.727273 0 250.181818 214.109091 465.454545 462.917818 465.454545a488.331636 488.331636 0 0 0 185.181091-46.545455 453.003636 453.003636 0 0 1-393.565091 232.727273z m103.656728-669.323636l-14.266182 83.781818a34.909091 34.909091 0 0 0 50.362182 36.770909l74.775272-39.563636 74.752 39.563636a36.142545 36.142545 0 0 0 16.174546 3.956364 34.909091 34.909091 0 0 0 34.210909-40.727273l-14.289455-83.781818 60.509091-59.345455a35.025455 35.025455 0 0 0-19.223272-59.578182l-83.61891-12.101818-37.376-76.101818a34.56 34.56 0 0 0-62.254545 0l-37.376 76.101818-83.618909 12.101818a34.909091 34.909091 0 0 0-19.246546 59.578182z m70.423272-64.698182a34.280727 34.280727 0 0 0 26.135273-19.083636l14.312727-29.090909 14.336 29.090909a34.257455 34.257455 0 0 0 26.135273 19.083636l32.046546 4.887273-23.272728 22.574545a35.234909 35.234909 0 0 0-10.007272 30.952727l5.46909 32.116364-28.625454-15.127273a34.490182 34.490182 0 0 0-32.302546 0l-28.695272 15.127273 5.469091-32.116364a35.141818 35.141818 0 0 0-9.984-30.952727l-23.272728-22.574545z","p-id":"3855"})),v=l.a.createElement("svg",{viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"11002",width:"22",height:"22"},l.a.createElement("path",{d:"M127.658667 492.885333c0-51.882667 10.24-101.717333 30.378666-149.162666s47.786667-88.064 81.92-122.538667 75.093333-61.781333 122.538667-81.92 96.938667-30.378667 149.162667-30.378667 101.717333 10.24 149.162666 30.378667 88.405333 47.786667 122.88 81.92 61.781333 75.093333 81.92 122.538667 30.378667 96.938667 30.378667 149.162666-10.24 101.717333-30.378667 149.162667-47.786667 88.405333-81.92 122.88-75.093333 61.781333-122.88 81.92-97.28 30.378667-149.162666 30.378667-101.717333-10.24-149.162667-30.378667-88.064-47.786667-122.538667-81.92-61.781333-75.093333-81.92-122.88-30.378667-96.938667-30.378666-149.162667z m329.045333 0c0 130.048 13.994667 244.394667 41.984 343.381334h12.970667c46.762667 0 91.136-9.216 133.461333-27.306667s78.848-42.666667 109.568-73.386667 54.954667-67.242667 73.386667-109.568 27.306667-86.698667 27.306666-133.461333c0-46.421333-9.216-90.794667-27.306666-133.12s-42.666667-78.848-73.386667-109.568-67.242667-54.954667-109.568-73.386667-86.698667-27.306667-133.461333-27.306666h-11.605334c-28.672 123.562667-43.349333 237.909333-43.349333 343.722666z","p-id":"11003"})),h=c.filter((e=>e!==m)),b=(e,t)=>{!r&&a&&a(e),t!==m&&(d(t),document.documentElement.setAttribute("data-prefers-color-scheme",t))},g=e=>{switch(e){case"dark":return l.a.createElement("button",{key:"dumi-dark-btn-moon",title:"Dark theme",onClick:t=>b(t,e),className:"__dumi-default-dark-moon ".concat(e===m?"__dumi-default-dark-switch-active":"")},f);case"light":return l.a.createElement("button",{key:"dumi-dark-btn-sun",title:"Light theme",onClick:t=>b(t,e),className:"__dumi-default-dark-sun ".concat(e===m?"__dumi-default-dark-switch-active":"")},p);case"auto":return l.a.createElement("button",{key:"dumi-dark-btn-auto",title:"Default to system",onClick:t=>b(t,e),className:"__dumi-default-dark-auto ".concat(e===m?"__dumi-default-dark-switch-active":"")},v);default:}};return l.a.createElement("div",{className:"__dumi-default-dark"},l.a.createElement("div",{className:"__dumi-default-dark-switch ".concat(!r&&t?"__dumi-default-dark-switch-open":"")},r?c.map((e=>g(e))):g(m)),!r&&t&&l.a.createElement("div",{className:"__dumi-default-dark-switch-list"},h.map((e=>g(e)))))}),N=S,z=(a("QPmj"),e=>{var t=e.slugs;return t?l.a.createElement("div",{className:"adm-doc-toc"},l.a.createElement("ul",{role:"slug-list"},t.filter(((e,t)=>{var a=e.depth;return a>1&&a<4})).map((e=>l.a.createElement("li",{key:e.heading,title:e.value,"data-depth":e.depth},l.a.createElement(i["AnchorLink"],{to:"#".concat(e.heading)},l.a.createElement("span",null,e.value))))))):null}),A=(a("aH6k"),a("QxpA"),a("qpmC")),L=a.n(A),C=e=>{var t,a=e.children,c=e.location,o=Object(r["useContext"])(i["context"]),s=o.config,u=(s.mode,s.repository),d=o.meta,m=o.locale,p=u.url,f=u.branch,v=!1!==d.sidemenu&&!d.gapless,h=Boolean(null===(t=d.slugs)||void 0===t?void 0:t.length)&&("content"===d.toc||void 0===d.toc)&&!d.gapless,b=!!m&&/^zh|cn$/i.test(m),g=new Date(d.updatedTime),y="".concat(g.toLocaleDateString([],{hour12:!1})," ").concat(g.toLocaleTimeString([],{hour12:!1})),w=Object(r["useState"])(!1),E=Object(n["a"])(w,2),k=E[0],_=E[1];return Object(r["useLayoutEffect"])((()=>{window===window.parent&&window.innerWidth<=600&&!window.location.pathname.startsWith("/gallery")&&(window.location.href="/gallery")}),[]),l.a.createElement("div",{className:L.a.layout,"data-route":c.pathname,"data-show-sidemenu":String(v),"data-show-slugs":String(h),"data-gapless":String(!!d.gapless),onClick:()=>{_(!1)}},l.a.createElement(j,{location:c,darkPrefix:l.a.createElement(N,{darkSwitch:k,onDarkSwitchClick:e=>{_((e=>!e)),e.stopPropagation()},isSideMenu:!1})}),d.full?l.a.createElement(l.a.Fragment,null,a):l.a.createElement("div",{className:L.a.content},l.a.createElement("div",{className:L.a.side},l.a.createElement(x,{location:c})),l.a.createElement("div",{className:L.a.main},l.a.createElement("div",{className:L.a.mainInner},l.a.createElement("article",null,a),d.filePath&&!d.gapless&&l.a.createElement("div",{className:"__dumi-default-layout-footer-meta"},l.a.createElement(i["Link"],{to:"".concat(p,"/edit/").concat(f,"/").concat(d.filePath)},b?"\u5728 GitHub \u4e0a\u7f16\u8f91\u6b64\u9875":"Edit this doc on GitHub"),l.a.createElement("span",{"data-updated-text":b?"\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a":"Last update: "},y)))),l.a.createElement("div",{className:L.a.side},l.a.createElement(z,{slugs:d.slugs}))))};t["default"]=C},qpmC:function(e,t,a){e.exports={"__dumi-default-icon":"__dumi-default-icon____Bc0L",content:"content___2J5IH",side:"side___31w_g",main:"main___f4FJw",mainInner:"mainInner___2l23n"}},x2v5:function(e){e.exports=JSON.parse("{}")},z80P:function(e,t,a){}}]);