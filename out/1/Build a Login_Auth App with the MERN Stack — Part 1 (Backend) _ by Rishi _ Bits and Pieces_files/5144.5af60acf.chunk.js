(self.webpackChunklite=self.webpackChunklite||[]).push([[5144],{75412:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(23564),o=n(45697),i=n(64718);function u(e){var t=e.children,n=e.query,o=(0,r._T)(e,["children","query"]),u=(0,i.a)(n,o);return u?t(u):null}u.propTypes={client:o.object,children:o.func.isRequired,fetchPolicy:o.string,notifyOnNetworkStatusChange:o.bool,onCompleted:o.func,onError:o.func,pollInterval:o.number,query:o.object.isRequired,variables:o.object,ssr:o.bool,partialRefetch:o.bool,returnPartialData:o.bool}},69100:(e,t,n)=>{var r=n(99489),o=n(57067);function i(t,n,u){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},70430:e=>{e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},57067:e=>{e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},65957:(e,t,n)=>{var r=n(29754),o=n(99489),i=n(70430),u=n(69100);function a(t){var n="function"==typeof Map?new Map:void 0;return e.exports=a=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return u(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},a(t)}e.exports=a},73145:(e,t)=>{"use strict";t.r=void 0,t.r=function(){return new Promise((function(e,t){var n,r,o="Unknown";function i(t){e({isPrivate:t,browserName:o})}function u(e){return e===eval.toString().length}void 0!==(r=navigator.vendor)&&0===r.indexOf("Apple")&&u(37)?(o="Safari",void 0!==navigator.maxTouchPoints?function(){var e=String(Math.random());try{window.indexedDB.open(e,1).onupgradeneeded=function(t){var n,r,o=null===(n=t.target)||void 0===n?void 0:n.result;try{o.createObjectStore("test",{autoIncrement:!0}).put(new Blob),i(!1)}catch(e){var u=e;return e instanceof Error&&(u=null!==(r=e.message)&&void 0!==r?r:e),i("string"==typeof u&&/BlobURLs are not yet supported/.test(u))}finally{o.close(),window.indexedDB.deleteDatabase(e)}}}catch(e){return i(!1)}}():function(){var e=window.openDatabase,t=window.localStorage;try{e(null,null,null,null)}catch(e){return i(!0)}try{t.setItem("test","1"),t.removeItem("test")}catch(e){return i(!0)}i(!1)}()):function(){var e=navigator.vendor;return void 0!==e&&0===e.indexOf("Google")&&u(33)}()?(n=navigator.userAgent,o=n.match(/Chrome/)?void 0!==navigator.brave?"Brave":n.match(/Edg/)?"Edge":n.match(/OPR/)?"Opera":"Chrome":"Chromium",void 0!==self.Promise&&void 0!==self.Promise.allSettled?navigator.webkitTemporaryStorage.queryUsageAndQuota((function(e,t){var n;i(Math.round(t/1048576)<2*Math.round((void 0!==(n=window).performance&&void 0!==n.performance.memory&&void 0!==n.performance.memory.jsHeapSizeLimit?performance.memory.jsHeapSizeLimit:1073741824)/1048576))}),(function(e){t(new Error("detectIncognito somehow failed to query storage quota: "+e.message))})):(0,window.webkitRequestFileSystem)(0,1,(function(){i(!1)}),(function(){i(!0)}))):void 0!==document.documentElement&&void 0!==document.documentElement.style.MozAppearance&&u(37)?(o="Firefox",i(void 0===navigator.serviceWorker)):void 0!==navigator.msSaveBlob&&u(39)?(o="Internet Explorer",i(void 0===window.indexedDB)):t(new Error("detectIncognito cannot determine the browser"))}))}},47443:(e,t,n)=>{var r=n(42118);e.exports=function(e,t){return!(null==e||!e.length)&&r(e,t,0)>-1}},1196:e=>{e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},41848:e=>{e.exports=function(e,t,n,r){for(var o=e.length,i=n+(r?1:-1);r?i--:++i<o;)if(t(e[i],i,e))return i;return-1}},42118:(e,t,n)=>{var r=n(41848),o=n(62722),i=n(42351);e.exports=function(e,t,n){return t==t?i(e,t,n):r(e,o,n)}},62722:e=>{e.exports=function(e){return e!=e}},45652:(e,t,n)=>{var r=n(88668),o=n(47443),i=n(1196),u=n(74757),a=n(23593),c=n(21814);e.exports=function(e,t,n){var f=-1,s=o,l=e.length,p=!0,d=[],v=d;if(n)p=!1,s=i;else if(l>=200){var g=t?null:a(e);if(g)return c(g);p=!1,s=u,v=new r}else v=t?[]:d;e:for(;++f<l;){var h=e[f],m=t?t(h):h;if(h=n||0!==h?h:0,p&&m==m){for(var y=v.length;y--;)if(v[y]===m)continue e;t&&v.push(m),d.push(h)}else s(v,m,n)||(v!==d&&v.push(m),d.push(h))}return d}},23593:(e,t,n)=>{var r=n(58525),o=n(50308),i=n(21814),u=r&&1/i(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=u},42351:e=>{e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return-1}},38125:(e,t,n)=>{var r=n(14259);e.exports=function(e){return null!=e&&e.length?r(e,0,-1):[]}},50308:e=>{e.exports=function(){}},45578:(e,t,n)=>{var r=n(67206),o=n(45652);e.exports=function(e,t){return e&&e.length?o(e,r(t,2)):[]}},68254:e=>{"use strict";var t=Math.floor(1099511627776*Math.random()).toString(16),n=new RegExp('"@__(F|R|D|M|S|U)-'+t+'-(\\d+)__@"',"g"),r=/\{\s*\[native code\]\s*\}/g,o=/function.*?\(/,i=/.*?=>.*?/,u=/[<>\/\u2028\u2029]/g,a=["*","async"],c={"<":"\\u003C",">":"\\u003E","/":"\\u002F","\u2028":"\\u2028","\u2029":"\\u2029"};function f(e){return c[e]}e.exports=function e(c,s){s||(s={}),"number"!=typeof s&&"string"!=typeof s||(s={space:s});var l,p=[],d=[],v=[],g=[],h=[],m=[];return s.ignoreFunction&&"function"==typeof c&&(c=void 0),void 0===c?String(c):"string"!=typeof(l=s.isJSON&&!s.space?JSON.stringify(c):JSON.stringify(c,s.isJSON?null:function(e,n){if(s.ignoreFunction&&function(e){var t=[];for(var n in e)"function"==typeof e[n]&&t.push(n);for(var r=0;r<t.length;r++)delete e[t[r]]}(n),!n&&void 0!==n)return n;var r=this[e],o=typeof r;if("object"===o){if(r instanceof RegExp)return"@__R-"+t+"-"+(d.push(r)-1)+"__@";if(r instanceof Date)return"@__D-"+t+"-"+(v.push(r)-1)+"__@";if(r instanceof Map)return"@__M-"+t+"-"+(g.push(r)-1)+"__@";if(r instanceof Set)return"@__S-"+t+"-"+(h.push(r)-1)+"__@"}return"function"===o?"@__F-"+t+"-"+(p.push(r)-1)+"__@":"undefined"===o?"@__U-"+t+"-"+(m.push(r)-1)+"__@":n},s.space))?String(l):(!0!==s.unsafe&&(l=l.replace(u,f)),0===p.length&&0===d.length&&0===v.length&&0===g.length&&0===h.length&&0===m.length?l:l.replace(n,(function(t,n,u){return"D"===n?'new Date("'+v[u].toISOString()+'")':"R"===n?"new RegExp("+e(d[u].source)+', "'+d[u].flags+'")':"M"===n?"new Map("+e(Array.from(g[u].entries()),s)+")":"S"===n?"new Set("+e(Array.from(h[u].values()),s)+")":"U"===n?"undefined":function(e){var t=e.toString();if(r.test(t))throw new TypeError("Serializing native function: "+e.name);if(o.test(t))return t;if(i.test(t))return t;var n=t.indexOf("("),u=t.substr(0,n).trim().split(" ").filter((function(e){return e.length>0}));return u.filter((function(e){return-1===a.indexOf(e)})).length>0?(u.indexOf("async")>-1?"async ":"")+"function"+(u.join("").indexOf("*")>-1?"*":"")+t.substr(n):t}(p[u])})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/5144.5af60acf.chunk.js.map