(function(t){function e(e){for(var n,o,i=e[0],u=e[1],c=e[2],p=0,m=[];p<i.length;p++)o=i[p],r[o]&&m.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var u=a[i];0!==r[u]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-marquee-text-component/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("31c5"),r=a.n(n);r.a},"31c5":function(t,e,a){var n=a("5fc7");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("f155f63c",n,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n,r,s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container my-5",attrs:{id:"app"}},[t._m(0),a("main",{staticClass:"my-5",attrs:{role:"main"}},[t._m(1),a("section",{staticClass:"my-5"},[a("h3",{staticClass:"mb-3"},[t._v("Demo")]),a("marquee-text",{staticClass:"my-3",attrs:{duration:30}},[a("span",{staticClass:"badge badge-success"},[t._v("START")]),t._v("\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.\n        "),a("span",{staticClass:"badge badge-danger"},[t._v("END")])]),a("code",[t._v("use prop repeat when you know the content is not wider that parent")]),a("marquee-text",[a("span",{staticClass:"badge badge-success"},[t._v("START")]),t._v("\n        Short text =(\n        "),a("span",{staticClass:"badge badge-danger"},[t._v("END")])]),a("code",[t._v('{ :repeat="6" }')]),a("marquee-text",{attrs:{repeat:6}},[a("span",{staticClass:"badge badge-success"},[t._v("START")]),t._v("\n        Short text =(\n        "),a("span",{staticClass:"badge badge-danger"},[t._v("END")])])],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"pb-5 border-bottom"},[a("ul",{staticClass:"nav float-right"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"btn btn-primary nav-link",attrs:{href:"https://github.com/EvodiaAut/vue-marquee-text-component",target:"_blank"}},[t._v("\n          Github\n        ")])])]),a("h1",[t._v("vue-marquee-text-component")]),a("p",{staticClass:"lead"},[t._v("\n      ["),a("a",{attrs:{href:"https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/",target:"_blank"}},[t._v("CSS GPU Animation")]),t._v("]\n        Marquee Text for vuejs\n    ")]),a("div",{staticClass:"d-flex flex-wrap"},[a("a",{attrs:{href:"https://www.npmjs.com/package/vue-marquee-text-component",target:"_blank"}},[a("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/npm/v/vue-marquee-text-component.svg?style=for-the-badge",alt:"vue-marquee-text-component npm"}})]),a("a",{attrs:{href:"https://github.com/EvodiaAut/vue-marquee-text-component/blob/master/LICENSE.md",target:"_blank"}},[a("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge",alt:"vue-marquee-text-component license"}})]),a("a",{attrs:{href:"https://www.npmjs.com/package/vue-marquee-text-component",target:"_blank"}},[a("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/npm/dt/vue-marquee-text-component.svg?style=for-the-badge",alt:"vue-marquee-text-component npm"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"my-5"},[a("h2",{staticClass:"mb-3"},[t._v("Props")]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Description")]),a("th",{attrs:{scope:"col"}},[t._v("Config")])])]),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v("duration")]),a("td",[t._v("Animation Duration")]),a("td",[a("code",[t._v("{ type: Number, default: 15 }")])])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("repeat")]),a("td",[t._v("Number of repeat the Slot "),a("b",[t._v("(It's important for to short content)")])]),a("td",[a("code",[t._v("{ type: Number, default: 2 }")])])])])])])])}],u=(a("6c7b"),a("14b9"),a("c5f6"),{name:"MarqueeText",functional:!0,props:{duration:{type:Number,default:15},repeat:{type:Number,default:2,validator:function(t){return t>=2}}},render:function(t,e){var a=e.$style,n=e.props,r=n.duration,s=n.repeat,o=e.children,i=e.data.staticClass,u=t("div",{class:a.text,style:{animationDuration:"".concat(r,"s")}},o);return t("div",{class:[i,a.wrap]},[t("div",{class:a.content},Array(s).fill(u))])}}),c=u,l=a("6edf"),p=a("2877");function m(t){this["$style"]=l["default"].locals||l["default"]}var f=Object(p["a"])(c,n,r,!1,m,null,null);f.options.__file="MarqueeText.vue";var d=f.exports,v={name:"App",components:{MarqueeText:d}},b=v,_=(a("034f"),Object(p["a"])(b,o,i,!1,null,null,null));_.options.__file="App.vue";var h=_.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(h)}}).$mount("#app")},"5fc7":function(t,e,a){e=t.exports=a("2350")(!1),e.i(a("efc1"),""),e.push([t.i,"\nbody{background-color:#f8f9fa\n}\ncode{white-space:nowrap\n}",""])},"6edf":function(t,e,a){"use strict";var n=a("bae7"),r=a.n(n);e["default"]=r.a},8623:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"\n.MarqueeText_wrap_vzO0u{overflow:hidden\n}\n.MarqueeText_content_2lYRn{width:100000px\n}\n.MarqueeText_text_372yS{-webkit-animation-name:MarqueeText_marquee_3_fAi;animation-name:MarqueeText_marquee_3_fAi;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;float:left\n}\n@-webkit-keyframes MarqueeText_marquee_3_fAi{\n0%{-webkit-transform:translateX(0);transform:translateX(0)\n}\nto{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n}\n@keyframes MarqueeText_marquee_3_fAi{\n0%{-webkit-transform:translateX(0);transform:translateX(0)\n}\nto{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n}",""]),e.locals={wrap:"MarqueeText_wrap_vzO0u",content:"MarqueeText_content_2lYRn",text:"MarqueeText_text_372yS",marquee:"MarqueeText_marquee_3_fAi"}},bae7:function(t,e,a){var n=a("8623");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("499e").default;r("585afa26",n,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.4ceade65.js.map