/*! kui-vue v1.9.2 by chuchur (c) 2018 Licensed ISC */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"2R2S":function(e,t,n){"use strict";n.r(t);var c=n("Tq/4"),l=n.n(c);for(var a in c)"default"!==a&&function(e){n.d(t,e,function(){return c[e]})}(a);t.default=l.a},AGwT:function(e,t,n){"use strict";n.r(t);var c=n("mNc1"),l=n("f2WU");for(var a in l)"default"!==a&&function(e){n.d(t,e,function(){return l[e]})}(a);var o=n("KHd+"),s=Object(o.a)(l.default,c.a,c.b,!1,null,null,null);t.default=s.exports},Es9a:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c={base:'<p>{{checked}}</p>\n<Checkbox v-model="checked">单选框 </Checkbox>\n<Button @click="checked=!checked">Click me</Button>\n<script>\nexport default {\n  data() {\n    return {\n      checked: true,\n    };\n  }\n<\/script>',disabled:'<CheckboxGroup :value="[\'苹果🍎\',\'香蕉🍌\']">\n  <Checkbox label="苹果🍎" disabled></Checkbox>\n  <Checkbox label="葡萄🍇" disabled></Checkbox>\n  <Checkbox label="香蕉🍌" disabled></Checkbox>\n  <Checkbox label="栗子🌰" disabled></Checkbox>\n</CheckboxGroup>',group:'<CheckboxGroup v-model="data">\n  <Checkbox label="苹果🍎"></Checkbox>\n  <Checkbox label="橘子🍊"></Checkbox>\n  <Checkbox label="香蕉🍌"></Checkbox>\n  <Checkbox label="栗子🌰"></Checkbox>\n  <Checkbox label="葡萄🍇" disabled></Checkbox>\n  <Checkbox label="梨子🍐" disabled></Checkbox>\n</CheckboxGroup>\n<Button @click="data=[]">清除</Button>\n<Button @click="data=[\'苹果🍎\']">选中苹果</Button>\n<script>\nexport default {\n  data() {\n    return {\n      checked: true,\n      data: ["苹果🍎", "香蕉🍌", "葡萄🍇"],\n    };\n  }\n<\/script>\n',checkAll:'<Checkbox :value="checkAll" :indeterminate="indeterminate" @click.prevent.native="handelCheckAll">全选</Checkbox>\n<CheckboxGroup v-model="check" @change="handelCheck">\n  <Checkbox label="苹果🍎"></Checkbox>\n  <Checkbox label="葡萄🍇"></Checkbox>\n  <Checkbox label="香蕉🍌"></Checkbox>\n  <Checkbox label="栗子🌰"></Checkbox>\n</CheckboxGroup>\n<script>\nexport default {\n  data() {\n  return {\n    checkAll: false,\n    indeterminate: false,\n    check: []\n  };\n  },\n  methods: {\n  handelCheckAll(v) {\n    if (this.indeterminate) {\n      this.checkAll = false;\n    } else {\n      this.checkAll = !this.checkAll;\n    }\n    this.indeterminate = false;\n\n    if (this.checkAll) {\n      this.check = ["苹果🍎", "香蕉🍌", "葡萄🍇", "栗子🌰"];\n    } else {\n      this.check = [];\n    }\n  },\n  handelCheck(data) {\n    if (data.length === 4) {\n      this.indeterminate = false;\n      this.checkAll = true;\n    } else if (data.length > 0) {\n      this.indeterminate = true;\n      this.checkAll = false;\n    } else {\n      this.indeterminate = false;\n      this.checkAll = false;\n    }\n  }\n  }\n};\n<\/script>\n'};t.default=c},Hn7Y:function(e,t,n){"use strict";n.r(t);var c=n("NlWC"),l=n("2R2S");for(var a in l)"default"!==a&&function(e){n.d(t,e,function(){return l[e]})}(a);var o=n("KHd+"),s=Object(o.a)(l.default,c.a,c.b,!1,null,null,null);t.default=s.exports},LHuI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=s(n("YEIV")),l=s(n("w3Nn")),a=s(n("Ff65")),o=s(n("7+I9"));function s(e){return e&&e.__esModule?e:{default:e}}t.default={directives:{resize:o.default},components:{Code:l.default,Collapse:a.default},name:"Demo",props:{layout:{type:String,default:"vertical"},title:String,lang:String},data:function(){return{domHeight:0,demoHeight:0,codeHeight:"0",expand:!1}},computed:{icons:function(){return this.expand?"ios-code-working":"ios-code"},classes:function(){return["k-demo",(0,c.default)({},"k-demo-"+this.layout,this.layout)]},styles:function(){return"horizontal"==this.layout?{height:this.expand?this.domHeight+"px":this.demoHeight+"px"}:{}},codeStyles:function(){return"horizontal"==this.layout?{}:{height:""+this.codeHeight}}},methods:{setHeight:function(){"horizontal"==this.layout&&(this.domHeight=this.$refs.dom.scrollHeight,this.demoHeight=this.$refs.demo.scrollHeight)},toggle:function(){var e=this.expand;this.expand=!e,"vertical"==this.layout&&(this.codeHeight=this.expand?"auto":0)}},mounted:function(){this.setHeight()}}},NlWC:function(e,t,n){"use strict";var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("Checkbox 多选框")]),e._v(" "),n("h3",[e._v("代码示例 ")]),e._v(" "),n("Row",{attrs:{gutter:"8"}},[n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"基础用法"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("p",[e._v(e._s(e.checked))]),e._v(" "),n("Checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("单选框 ")]),e._v(" "),n("Button",{on:{click:function(t){e.checked=!e.checked}}},[e._v("Click me")])],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("单独使用 ,使用\n        "),n("code",[e._v("v-model")]),e._v(" 可以双向绑定数据。")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.base))])]),e._v(" "),n("Demo",{attrs:{title:"组合使用"}},[n("div",{attrs:{slot:"content"},slot:"content"},[e._v(e._s(e.data)),n("br"),e._v(" "),n("CheckboxGroup",{model:{value:e.data,callback:function(t){e.data=t},expression:"data"}},[n("Checkbox",{attrs:{label:"苹果🍎"}}),e._v(" "),n("Checkbox",{attrs:{label:"橘子🍊"}}),e._v(" "),n("Checkbox",{attrs:{label:"香蕉🍌"}}),e._v(" "),n("Checkbox",{attrs:{label:"栗子🌰"}}),e._v(" "),n("Checkbox",{attrs:{label:"葡萄🍇"}}),e._v(" "),n("Checkbox",{attrs:{label:"梨子🍐"}})],1),e._v(" "),n("Button",{on:{click:function(t){e.data=[]}}},[e._v("清除")]),e._v(" "),n("Button",{on:{click:function(t){e.data=["苹果🍎"]}}},[e._v("选中苹果")])],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("结合\n        "),n("code",[e._v("CheckboxGroup")]),e._v("来组合使用,通过\n        "),n("code",[e._v("disabled")]),e._v("可以设置组件是否被禁用")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.group))])])],1),e._v(" "),n("Col",{attrs:{span:"12"}},[n("Demo",{attrs:{title:"可不用"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("CheckboxGroup",{attrs:{value:["苹果🍎","香蕉🍌"]}},[n("Checkbox",{attrs:{label:"苹果🍎",disabled:""}}),e._v(" "),n("Checkbox",{attrs:{label:"葡萄🍇",disabled:""}}),e._v(" "),n("Checkbox",{attrs:{label:"香蕉🍌",disabled:""}}),e._v(" "),n("Checkbox",{attrs:{label:"栗子🌰",disabled:""}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("通过"),n("code",[e._v("disabled")]),e._v("设置不可用")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.disabled))])]),e._v(" "),n("Demo",{attrs:{title:"全选"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("Checkbox",{attrs:{value:e.checkAll,indeterminate:e.indeterminate},nativeOn:{click:function(t){return t.preventDefault(),e.handelCheckAll(t)}}},[e._v("全选")]),e._v(" "),n("CheckboxGroup",{on:{change:e.handelCheck},model:{value:e.check,callback:function(t){e.check=t},expression:"check"}},[n("Checkbox",{attrs:{label:"苹果🍎"}}),e._v(" "),n("Checkbox",{attrs:{label:"葡萄🍇"}}),e._v(" "),n("Checkbox",{attrs:{label:"香蕉🍌"}}),e._v(" "),n("Checkbox",{attrs:{label:"栗子🌰"}})],1)],1),e._v(" "),n("div",{attrs:{slot:"desc"},slot:"desc"},[e._v("全选组合 ")]),e._v(" "),n("div",{attrs:{slot:"code"},slot:"code"},[e._v(e._s(e.code.checkAll))])])],1)],1),e._v(" "),n("h3",[e._v("API")]),e._v(" "),e._m(0),e._v(" "),n("h3",[e._v("CheckboxGroup API")]),e._v(" "),e._m(1)],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("value")]),e._v(" "),n("td",[e._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("label")]),e._v(" "),n("td",[e._v("只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目")]),e._v(" "),n("td",[e._v(" String | Number")]),e._v(" "),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("是否禁用当前项")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("change")]),e._v(" "),n("td",[e._v("在选项状态发生改变时触发，返回当前状态")]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),n("td",[e._v("-")])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-border"},[n("table",[n("tr",[n("th",[e._v("属性")]),e._v(" "),n("th",[e._v("说明")]),e._v(" "),n("th",[e._v("类型")]),e._v(" "),n("th",[e._v("默认值")])]),e._v(" "),n("tr",[n("td",[e._v("value")]),e._v(" "),n("td",[e._v("只在单独使用时有效。可以使用 v-model 双向绑定数据")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("disabled")]),e._v(" "),n("td",[e._v("是否禁用当前项")]),e._v(" "),n("td",[e._v("Boolean")]),e._v(" "),n("td",[e._v("false")])]),e._v(" "),n("tr",[n("td",[e._v("change")]),e._v(" "),n("td",[e._v("在选项状态发生改变时触发，返回当前选中的项")]),e._v(" "),n("td",[e._v("Function")]),e._v(" "),n("td",[e._v("-")])])])])}];n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l})},"Tq/4":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c=a(n("Es9a")),l=a(n("ZNdt"));function a(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Demo:l.default},data:function(){return{code:c.default,checked:!0,data:["苹果🍎","香蕉🍌","葡萄🍇"],checkAll:!1,indeterminate:!1,check:[]}},methods:{handelCheckAll:function(e){this.indeterminate?this.checkAll=!1:this.checkAll=!this.checkAll,this.indeterminate=!1,this.checkAll?this.check=["苹果🍎","香蕉🍌","葡萄🍇","栗子🌰"]:this.check=[]},handelCheck:function(e){4===e.length?(this.indeterminate=!1,this.checkAll=!0):e.length>0?(this.indeterminate=!0,this.checkAll=!1):(this.indeterminate=!1,this.checkAll=!1)}}}},ZNdt:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var c,l=n("AGwT"),a=(c=l)&&c.__esModule?c:{default:c};t.default=a.default},f2WU:function(e,t,n){"use strict";n.r(t);var c=n("LHuI"),l=n.n(c);for(var a in c)"default"!==a&&function(e){n.d(t,e,function(){return c[e]})}(a);t.default=l.a},mNc1:function(e,t,n){"use strict";var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"resize",rawName:"v-resize",value:e.setHeight,expression:"setHeight"}],ref:"dom",class:e.classes,style:e.styles},[n("div",{ref:"demo",staticClass:"k-demo-main"},[n("div",{staticClass:"k-content"},[e._t("content")],2),e._v(" "),n("div",{staticClass:"k-desc"},[n("a",{staticClass:"k-desc-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"k-desc-content"},[e._t("desc")],2),e._v(" "),n("a",{staticClass:"k-code-expan",on:{click:e.toggle}},[n("Icon",{attrs:{type:e.icons}})],1)])]),e._v(" "),n("div",{staticClass:"k-demo-line"}),e._v(" "),n("Collapse",[n("Code",{directives:[{name:"show",rawName:"v-show",value:e.expand,expression:"expand"}],ref:"code",attrs:{lang:e.lang}},[e._t("code")],2)],1)],1)},l=[];n.d(t,"a",function(){return c}),n.d(t,"b",function(){return l})}}]);