/*! kui-vue v1.7.5 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"08Fr":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={base:'<Card title="卡片标题" icon="android-favorite-outline">\n    <span slot="extra" @click="$Message.info(\'刚刚摇了下\')">摇一摇</span>\n    <p>内容随便写， 欢迎使用</p>\n    <p>内容随便写， 欢迎使用</p>\n    <p>内容随便写， 欢迎使用</p>\n    <p>内容随便写， 欢迎使用</p>\n    <p>内容随便写， 欢迎使用</p>\n    <p>内容随便写， 欢迎使用</p>\n</Card>',border:'<Card title="卡片标题" icon="android-favorite-outline" border>\n    <span slot="extra">摇一摇</span>\n    <p>内容随便写， 欢迎使用</p>\n    <p>内容随便写， 欢迎使用</p>\n    <p>内容随便写， 欢迎使用</p>\n    <p>内容随便写， 欢迎使用</p>\n    <p>内容随便写， 欢迎使用</p>\n    <p>内容随便写， 欢迎使用</p>\n</Card>'};e.default=o},ByDX:function(t,e,n){"use strict";n.r(e);var o=n("bwZx"),s=n("L/J7");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);var i=n("KHd+"),r=Object(i.a)(s.default,o.a,o.b,!1,null,null,null);e.default=r.exports},BybE:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),n("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[n("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),n("div",{staticClass:"k-demo-line"}),t._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},s=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},C8VU:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,s=n("z7BB"),a=(o=s)&&o.__esModule?o:{default:o};e.default=a.default},J20C:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(n("08Fr")),s=a(n("C8VU"));function a(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:s.default},data:function(){return{code:o.default}}}},"L/J7":function(t,e,n){"use strict";n.r(e);var o=n("J20C"),s=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=s.a},"U9/v":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("YEIV")),s=r(n("cF/K")),a=r(n("Ff65")),i=r(n("7+I9"));function r(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:i.default},components:{Code:s.default,Collapse:a.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,o.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},bwZx:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Card 卡片")]),t._v(" "),n("p",[t._v("一个有标题的大盒子")]),t._v(" "),n("h3",[t._v("代码示例")]),t._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"基础",layout:"vertical"}},[n("div",{staticStyle:{background:"#eee",padding:"15px"},attrs:{slot:"content"},slot:"content"},[n("Card",{attrs:{title:"卡片标题",icon:"android-favorite-outline"}},[n("span",{attrs:{slot:"extra"},on:{click:function(e){t.$Message.info("刚刚摇了下")}},slot:"extra"},[t._v("摇一摇")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")])])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n                "),n("code",[t._v("title")]),t._v("和\n                "),n("code",[t._v("icon")]),t._v("可设置标题和图标")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])])],1),t._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"边框",layout:"vertical"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Card",{attrs:{title:"卡片标题",icon:"android-favorite-outline",border:""}},[n("span",{attrs:{slot:"extra"},slot:"extra"},[t._v("摇一摇")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")]),t._v(" "),n("p",[t._v("内容随便写， 欢迎使用")])])],1),t._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[n("code",[t._v("border")]),t._v("可以设置是否显示边框")]),t._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.border))])])],1)],1),t._v(" "),n("h3",[t._v("API")]),t._v(" "),t._m(0)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])]),t._v(" "),n("tr",[n("td",[t._v("title")]),t._v(" "),n("td",[t._v("卡片的标题")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("icon")]),t._v(" "),n("td",[t._v("卡片标题的图标")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("border")]),t._v(" "),n("td",[t._v("卡片是否显示边框")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("false")])]),t._v(" "),n("tr",[n("td",[t._v("extra")]),t._v(" "),n("td",[t._v("卡片标题扩展")]),t._v(" "),n("td",[t._v("slot")]),t._v(" "),n("td",[t._v("-")])])])])}];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})},sOOp:function(t,e,n){"use strict";n.r(e);var o=n("U9/v"),s=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=s.a},z7BB:function(t,e,n){"use strict";n.r(e);var o=n("BybE"),s=n("sOOp");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);var i=n("KHd+"),r=Object(i.a)(s.default,o.a,o.b,!1,null,null,null);e.default=r.exports}}]);