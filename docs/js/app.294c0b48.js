(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-marquee-text-component/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("3ebb"),n=a.n(s);n.a},"0d86":function(t,e,a){var s=a("19f3");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=a("499e").default;n("6c1335ea",s,!0,{sourceMap:!1,shadowMode:!1})},"19f3":function(t,e,a){var s=a("24fb");e=s(!1),e.push([t.i,".marquee-text-wrap{overflow:hidden}.marquee-text-content{width:100000px}.marquee-text-text{-webkit-animation-name:marquee-text-animation;animation-name:marquee-text-animation;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;float:left}.marquee-text-paused .marquee-text-text{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes marquee-text-animation{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes marquee-text-animation{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}",""]),e.locals={wrap:"marquee-text-wrap",content:"marquee-text-content",text:"marquee-text-text",animation:"marquee-text-animation",paused:"marquee-text-paused"},t.exports=e},"3ebb":function(t,e,a){var s=a("e31a");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=a("499e").default;n("517436b3",s,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s,n,r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("main",{staticClass:"container",attrs:{role:"main"}},[t._m(1),a("section",{staticClass:"my-4"},[a("h3",{staticClass:"mb-3"},[t._v(" Demo "),a("small",[t._v("with test data")]),a("button",{staticClass:"btn btn-sm btn-outline-primary ml-2",class:{active:t.isPaused},attrs:{type:"button"},on:{click:function(e){t.isPaused=!t.isPaused}}},[t._v(" Pause ")])]),a("marquee-text",{staticClass:"py-2 bg-dark text-white",attrs:{duration:45,repeat:3,paused:t.isPaused}},[a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,38%")]),t._v(" ATX "),a("span",{staticClass:"badge badge-danger ml-2"},[t._v("0,16%")]),t._v(" DAX "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,04%")]),t._v(" TecDax "),a("span",{staticClass:"badge badge-danger ml-2"},[t._v("0,19%")]),t._v(" MDAX "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,03%")]),t._v(" ESTX50 "),a("span",{staticClass:"badge badge-info ml-2"},[t._v("0,00%")]),t._v(" NIKKEI "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,03%")]),t._v(" EUR/CHF ")]),a("marquee-text",{staticClass:"py-2 bg-dark text-white mt-2",attrs:{duration:3,repeat:3,paused:t.isPaused}},[a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,38%")]),t._v(" ATX "),a("span",{staticClass:"badge badge-danger ml-2"},[t._v("0,16%")]),t._v(" DAX "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,04%")]),t._v(" TecDax "),a("span",{staticClass:"badge badge-danger ml-2"},[t._v("0,19%")]),t._v(" MDAX "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,03%")]),t._v(" ESTX50 "),a("span",{staticClass:"badge badge-info ml-2"},[t._v("0,00%")]),t._v(" NIKKEI "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,03%")]),t._v(" EUR/CHF ")]),a("marquee-text",{staticClass:"py-2 mt-2 bg-light",attrs:{duration:20,paused:t.isPaused,reverse:""}},[t._v(" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ")])],1),a("section",{staticClass:"my-4"},[a("h4",{staticClass:"mb-3"},[t._v(" Listening to Events: Example - Stop on mouse hover ")]),a("marquee-text",{staticClass:"py-2 bg-dark text-white mt-2",attrs:{repeat:3,paused:t.isPaused},on:{mouseenter:function(e){t.isPaused=!t.isPaused},mouseleave:function(e){t.isPaused=!1}}},[a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,38%")]),t._v(" ATX "),a("span",{staticClass:"badge badge-danger ml-2"},[t._v("0,16%")]),t._v(" DAX "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,04%")]),t._v(" TecDax "),a("span",{staticClass:"badge badge-danger ml-2"},[t._v("0,19%")]),t._v(" MDAX "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,03%")]),t._v(" ESTX50 "),a("span",{staticClass:"badge badge-info ml-2"},[t._v("0,00%")]),t._v(" NIKKEI "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,03%")]),t._v(" EUR/CHF ")])],1),a("section",{staticClass:"my-4"},[a("h4",{staticClass:"mb-3"},[t._v(" To small content ")]),t._m(2),a("p",{staticClass:"font-italic"},[t._v(" Default we clone default slot two times ")]),a("marquee-text",{attrs:{duration:1}},[a("span",{staticClass:"badge badge-success"},[t._v("START")]),t._v(" Short text =( "),a("span",{staticClass:"badge badge-danger"},[t._v("END")])]),t._v(" after add prop "),a("code",{staticClass:"font-weight-bold"},[t._v('{ :repeat="10" }')]),a("marquee-text",{attrs:{duration:1,repeat:10}},[a("span",{staticClass:"badge badge-success"},[t._v("START")]),t._v(" Short text =( "),a("span",{staticClass:"badge badge-danger"},[t._v("END")])])],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light py-5"},[a("header",{staticClass:"container"},[a("ul",{staticClass:"nav float-right"},[a("li",[a("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"https://github.com/EvodiaAut/vue-marquee-text-component",target:"_blank"}},[t._v(" Github ")])])]),a("h1",[t._v("vue-marquee-text-component")]),a("p",{staticClass:"lead"},[t._v(" ["),a("a",{attrs:{href:"https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/",target:"_blank"}},[t._v("CSS GPU Animation")]),t._v("] Marquee Text for vuejs ")]),a("div",{staticClass:"d-flex flex-wrap"},[a("a",{attrs:{href:"https://www.npmjs.com/package/vue-marquee-text-component",target:"_blank"}},[a("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/npm/v/vue-marquee-text-component.svg?style=for-the-badge",alt:"vue-marquee-text-component npm"}})]),a("a",{attrs:{href:"https://github.com/EvodiaAut/vue-marquee-text-component/blob/master/LICENSE.md",target:"_blank"}},[a("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge",alt:"vue-marquee-text-component license"}})]),a("a",{attrs:{href:"https://www.npmjs.com/package/vue-marquee-text-component",target:"_blank"}},[a("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/npm/dt/vue-marquee-text-component.svg?style=for-the-badge",alt:"vue-marquee-text-component npm"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"my-4"},[a("h2",{staticClass:"mb-3"},[t._v(" Props ")]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(" Name ")]),a("th",{attrs:{scope:"col"}},[t._v(" Description ")]),a("th",{attrs:{scope:"col"}},[t._v(" Config ")])])]),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" duration ")]),a("td",[t._v("Animation Duration")]),a("td",[a("code",[t._v("{ type: Number, default: 15 }")])])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" repeat ")]),a("td",[t._v("Number of repeat the Slot "),a("b",[t._v("(It's important for to short content)")])]),a("td",[a("code",[t._v("{ type: Number, default: 2 }")])])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" paused ")]),a("td",[t._v("The property specifies whether the animation is running or paused")]),a("td",[a("code",[t._v("{ type: Boolean, default: false }")])])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v(" reverse ")]),a("td",[t._v("The animation plays backwards each cycle")]),a("td",[a("code",[t._v("{ type: Boolean, default: false }")])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"font-weight-bold mb-0"},[t._v(" use prop "),a("code",[t._v('{ :repeat="NUMBER" }')]),t._v(" when you know the content is not wider than parent ")])}],c=(a("cb29"),a("a9e3"),a("38cf"),{name:"MarqueeText",functional:!0,props:{duration:{type:Number,default:15},repeat:{type:Number,default:2,validator:function(t){return t>0}},paused:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1}},render:function(t,e){var a=e.$style,s=e.props,n=s.duration,r=s.repeat,i=s.paused,o=s.reverse,c=e.children,l=e.data,u=l.staticClass,d=l.key,p=l.on,m=t("div",{class:a.text,style:{animationDuration:"".concat(n,"s"),animationDirection:o?"reverse":void 0}},c);return t("div",{key:d,on:p,class:[u,a.wrap]},[t("div",{class:[i?a.paused:void 0,a.content]},Array(r).fill(m))])}}),l=c,u=a("6edf"),d=a("2877");function p(t){this["$style"]=u["default"].locals||u["default"]}var m=Object(d["a"])(l,s,n,!1,p,null,null),v=m.exports,b={name:"App",components:{MarqueeText:v},data:function(){return{isPaused:!1}}},f=b,g=(a("034f"),Object(d["a"])(f,i,o,!1,null,null,null)),_=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(_)}}).$mount("#app")},"6edf":function(t,e,a){"use strict";var s=a("0d86"),n=a.n(s);e["default"]=n.a},e31a:function(t,e,a){var s=a("24fb"),n=a("93bf");e=s(!1),e.i(n),e.push([t.i,"table code{white-space:nowrap}",""]),t.exports=e}});
//# sourceMappingURL=app.294c0b48.js.map