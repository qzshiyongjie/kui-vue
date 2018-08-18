/*! kui-vue v1.9.2 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{AGwT:function(t,e,o){"use strict";o.r(e);var n=o("mNc1"),a=o("f2WU");for(var s in a)"default"!==s&&function(t){o.d(e,t,function(){return a[t]})}(s);var r=o("KHd+"),c=Object(r.a)(a.default,n.a,n.b,!1,null,null,null);e.default=c.exports},LHuI:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(o("YEIV")),a=c(o("w3Nn")),s=c(o("Ff65")),r=c(o("7+I9"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:r.default},components:{Code:a.default,Collapse:s.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(0,n.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},NRuq:function(t,e,o){"use strict";o.r(e);var n=o("Uw5e"),a=o("PVkZ");for(var s in a)"default"!==s&&function(t){o.d(e,t,function(){return a[t]})}(s);var r=o("KHd+"),c=Object(r.a)(a.default,n.a,n.b,!1,null,null,null);e.default=c.exports},PVkZ:function(t,e,o){"use strict";o.r(e);var n=o("bp6r"),a=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e.default=a.a},Uw5e:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h2",[t._v("Tag 标签")]),t._v(" "),o("p",[t._v("进行标记和分类的小标签。")]),t._v(" "),o("h3",[t._v("代码示例")]),t._v(" "),o("Demo",{attrs:{title:"基础"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Tag",[t._v("标签1")]),t._v(" "),o("Tag",[t._v("标签2")]),t._v(" "),o("Tag",[t._v("标签3")]),t._v(" "),o("Tag",{attrs:{closeable:""}},[t._v("标签4")])],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n      "),o("code",[t._v("closeable")]),t._v("显示关闭按钮，点击隐藏标签，触发\n      "),o("code",[t._v("close")]),t._v("回调")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),o("Demo",{attrs:{title:"颜色"}},[o("div",{attrs:{slot:"content"},slot:"content"},[o("Tag",{attrs:{color:"blue"}},[t._v("标签1")]),t._v(" "),o("Tag",{attrs:{color:"gray"}},[t._v("标签2")]),t._v(" "),o("Tag",{attrs:{color:"green"}},[t._v("标签3")]),t._v(" "),o("Tag",{attrs:{color:"red"}},[t._v("标签4")]),t._v(" "),o("Tag",{attrs:{color:"orange"}},[t._v("标签5")]),t._v(" "),o("Tag",{attrs:{color:"#2db7f5",closeable:""}},[t._v("自定义")])],1),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n      "),o("code",[t._v("color")]),t._v("定义标签颜色，默认提供5组颜色\n      "),o("code",[t._v("blue")]),t._v(" "),o("code",[t._v("gray")]),t._v(" "),o("code",[t._v("green")]),t._v(" "),o("code",[t._v("red")]),t._v(" "),o("code",[t._v("orange")]),t._v("\n      当然也可以自定义其他颜色\n    ")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.color))])]),t._v(" "),o("Demo",{attrs:{title:"动态添加和删除"}},[o("div",{attrs:{slot:"content"},slot:"content"},[t._l(t.count,function(e){return o("Tag",{key:e,attrs:{color:"blue",closeable:""}},[t._v("标签"+t._s(e))])}),t._v(" "),o("Tag",{on:{click:function(e){t.count++}}},[t._v("增加")])],2),t._v(" "),o("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("通过\n      "),o("code",[t._v("color")]),t._v("定义标签颜色，默认提供5组颜色\n      "),o("code",[t._v("blue")]),t._v(" "),o("code",[t._v("gray")]),t._v(" "),o("code",[t._v("green")]),t._v(" "),o("code",[t._v("red")]),t._v(" "),o("code",[t._v("orange")]),t._v("\n      当然也可以自定义其他颜色\n    ")]),t._v(" "),o("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.custom))])]),t._v(" "),o("h3",[t._v("Tag API")]),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"table-border"},[o("table",[o("tr",[o("th",[t._v("属性")]),t._v(" "),o("th",[t._v("说明")]),t._v(" "),o("th",[t._v("类型")]),t._v(" "),o("th",[t._v("默认值")])]),t._v(" "),o("tr",[o("td",[t._v("closeable")]),t._v(" "),o("td",[t._v("是否显示关闭按钮")]),t._v(" "),o("td",[t._v("Boolean")]),t._v(" "),o("td",[t._v("false")])]),t._v(" "),o("tr",[o("td",[t._v("color")]),t._v(" "),o("td",[t._v("标签的颜色，默认提供5组颜色")]),t._v(" "),o("td",[t._v("String")]),t._v(" "),o("td",[t._v("-")])]),t._v(" "),o("tr",[o("td",[t._v("close")]),t._v(" "),o("td",[t._v("关闭标签的回调事件")]),t._v(" "),o("td",[t._v("Function ")]),t._v(" "),o("td",[t._v("-")])])])])}];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},ZNdt:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,a=o("AGwT"),s=(n=a)&&n.__esModule?n:{default:n};e.default=s.default},bp6r:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s(o("naKE")),a=s(o("ZNdt"));function s(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:a.default},data:function(){return{code:n.default,count:3}}}},f2WU:function(t,e,o){"use strict";o.r(e);var n=o("LHuI"),a=o.n(n);for(var s in n)"default"!==s&&function(t){o.d(e,t,function(){return n[t]})}(s);e.default=a.a},mNc1:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[o("div",{ref:"demo",staticClass:"k-demo-main"},[o("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),o("div",{staticClass:"k-desc"},[o("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),o("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),o("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[o("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),o("div",{staticClass:"k-demo-line"}),t._v(" "),o("Collapse",[o("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},naKE:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={base:"<Tag>标签1</Tag>\n<Tag>标签2</Tag>\n<Tag>标签3</Tag>\n<Tag closeable>标签4</Tag>",color:'<Tag color="blue">标签1</Tag>\n<Tag color="gray">标签2</Tag>\n<Tag color="green">标签3</Tag>\n<Tag color="red">标签4</Tag>\n<Tag color="orange">标签5</Tag>\n<Tag color="#2db7f5" closeable>自定义</Tag>',custom:'<Tag color="blue" closeable v-for="m in count" :key="m">标签{{m}}</Tag>\n<Tag @click="count++">增加</Tag>\n<script>\nexport default {\n  data() {\n    return {\n      count: 3\n    }\n  }\n}\n<\/script>\n'};e.default=n}}]);