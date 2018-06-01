/*! kui-vue v1.7.5 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"43X8":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={base:'<Breadcrumb>\n    <BreadcrumbItem to="/">Home</BreadcrumbItem>\n    <BreadcrumbItem to="/breadcrumb">breadcrumb</BreadcrumbItem>\n    <BreadcrumbItem>other</BreadcrumbItem>\n</Breadcrumb>',icon:'<Breadcrumb>\n    <BreadcrumbItem to="/" icon="home">Home</BreadcrumbItem>\n    <BreadcrumbItem to="/breadcrumb" icon="social-buffer">breadcrumb</BreadcrumbItem>\n    <BreadcrumbItem icon="heart">other</BreadcrumbItem>\n</Breadcrumb>',separator:'<Breadcrumb>\n    <BreadcrumbItem to="/" icon="home" separator="~">Home</BreadcrumbItem>\n    <BreadcrumbItem to="/breadcrumb" icon="social-buffer" separator="~">breadcrumb</BreadcrumbItem>\n    <BreadcrumbItem icon="heart" separator="~">other</BreadcrumbItem>\n</Breadcrumb>'};e.default=o},BybE:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{directives:[{name:"resize",rawName:"v-resize",value:t.setHeight,expression:"setHeight"}],ref:"dom",class:t.classes,style:t.styles},[r("div",{ref:"demo",staticClass:"k-demo-main"},[r("div",{staticClass:"k-content"},[t._t("content")],2),t._v(" "),r("div",{staticClass:"k-desc"},[r("a",{staticClass:"k-desc-title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"k-desc-content"},[t._t("desc")],2),t._v(" "),r("a",{staticClass:"k-code-expan",on:{click:t.toggle}},[r("Icon",{attrs:{type:t.icons}})],1)])]),t._v(" "),r("div",{staticClass:"k-demo-line"}),t._v(" "),r("Collapse",[r("Code",{directives:[{name:"show",rawName:"v-show",value:t.expand,expression:"expand"}],ref:"code",attrs:{lang:t.lang}},[t._t("code")],2)],1)],1)},a=[];r.d(e,"a",function(){return o}),r.d(e,"b",function(){return a})},C8VU:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,a=r("z7BB"),n=(o=a)&&o.__esModule?o:{default:o};e.default=n.default},Sl7o:function(t,e,r){"use strict";r.r(e);var o=r("lTcd"),a=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,function(){return o[t]})}(n);e.default=a.a},"U9/v":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=d(r("YEIV")),a=d(r("cF/K")),n=d(r("Ff65")),c=d(r("7+I9"));function d(t){return t&&t.__esModule?t:{default:t}}e.default={directives:{resize:c.default},components:{Code:a.default,Collapse:n.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"code-working":"code"},classes:function(){return["k-demo",(0,o.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var t=this.expand;this.expand=!t,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},cXMZ:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Breadcrumb 面包屑")]),t._v(" "),r("p",[t._v("显示当前页面在系统层级结构中的位置，并能向上返回。")]),t._v(" "),r("h3",[t._v("代码示例")]),t._v(" "),r("Demo",{attrs:{title:"基础用法"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("Breadcrumb",[r("BreadcrumbItem",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("BreadcrumbItem",{attrs:{to:"/breadcrumb"}},[t._v("breadcrumb")]),t._v(" "),r("BreadcrumbItem",[t._v("other")])],1)],1),t._v(" "),r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n            通过\n            "),r("code",[t._v("to")]),t._v("添加跳转链接\n        ")]),t._v(" "),r("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.base))])]),t._v(" "),r("Demo",{attrs:{title:"设置图标"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("Breadcrumb",[r("BreadcrumbItem",{attrs:{to:"/",icon:"home"}},[t._v("Home")]),t._v(" "),r("BreadcrumbItem",{attrs:{to:"/breadcrumb",icon:"social-buffer"}},[t._v("breadcrumb")]),t._v(" "),r("BreadcrumbItem",{attrs:{icon:"heart"}},[t._v("other")])],1)],1),t._v(" "),r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n            通过\n            "),r("code",[t._v("icon")]),t._v("设置图标\n        ")]),t._v(" "),r("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.icon))])]),t._v(" "),r("Demo",{attrs:{title:"分隔符"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("Breadcrumb",[r("BreadcrumbItem",{attrs:{to:"/",icon:"home",separator:"~"}},[t._v("Home")]),t._v(" "),r("BreadcrumbItem",{attrs:{to:"/breadcrumb",icon:"social-buffer",separator:"~"}},[t._v("breadcrumb")]),t._v(" "),r("BreadcrumbItem",{attrs:{icon:"heart",separator:"~"}},[t._v("other")])],1)],1),t._v(" "),r("div",{attrs:{slot:"desc"},slot:"desc"},[t._v("\n            通过\n            "),r("code",[t._v("separator")]),t._v("设置分隔符\n        ")]),t._v(" "),r("div",{attrs:{slot:"code"},slot:"code"},[t._v(t._s(t.code.separator))])]),t._v(" "),r("h3",[t._v("BreadcrumbItem API")]),t._v(" "),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-border"},[r("table",[r("tr",[r("th",[t._v("属性")]),t._v(" "),r("th",[t._v("说明")]),t._v(" "),r("th",[t._v("类型")]),t._v(" "),r("th",[t._v("默认值")])]),t._v(" "),r("tr",[r("td",[t._v("separator")]),t._v(" "),r("td",[t._v("自定义分隔符")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("/")])]),t._v(" "),r("tr",[r("td",[t._v("to")]),t._v(" "),r("td",[t._v("自定义链接函数,和\n                    "),r("code",[t._v("vue-router")]),t._v("配合使用 ")]),t._v(" "),r("td",[t._v("String ")]),t._v(" "),r("td",[t._v("-")])]),t._v(" "),r("tr",[r("td",[t._v("replace")]),t._v(" "),r("td",[t._v("路由跳转时，开启 replace 将不会向 history 添加新记录")]),t._v(" "),r("td",[t._v("Boolean ")]),t._v(" "),r("td",[t._v("false")])]),t._v(" "),r("tr",[r("td",[t._v("hollow")]),t._v(" "),r("td",[t._v("按钮是否颜色镂空")]),t._v(" "),r("td",[t._v("Boolean ")]),t._v(" "),r("td",[t._v("false")])]),t._v(" "),r("tr",[r("td",[t._v("icon")]),t._v(" "),r("td",[t._v("按钮的图标")]),t._v(" "),r("td",[t._v("String ")]),t._v(" "),r("td",[t._v("-")])])])])}];r.d(e,"a",function(){return o}),r.d(e,"b",function(){return a})},jN8v:function(t,e,r){"use strict";r.r(e);var o=r("cXMZ"),a=r("Sl7o");for(var n in a)"default"!==n&&function(t){r.d(e,t,function(){return a[t]})}(n);var c=r("KHd+"),d=Object(c.a)(a.default,o.a,o.b,!1,null,null,null);e.default=d.exports},lTcd:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(r("C8VU")),a=n(r("43X8"));function n(t){return t&&t.__esModule?t:{default:t}}e.default={components:{Demo:o.default},data:function(){return{code:a.default}}}},sOOp:function(t,e,r){"use strict";r.r(e);var o=r("U9/v"),a=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,function(){return o[t]})}(n);e.default=a.a},z7BB:function(t,e,r){"use strict";r.r(e);var o=r("BybE"),a=r("sOOp");for(var n in a)"default"!==n&&function(t){r.d(e,t,function(){return a[t]})}(n);var c=r("KHd+"),d=Object(c.a)(a.default,o.a,o.b,!1,null,null,null);e.default=d.exports}}]);