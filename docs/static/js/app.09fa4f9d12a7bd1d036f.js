webpackJsonp([1],{"4+hh":function(t,e){},"6tQY":function(t,e){},"A+BG":function(t,e){},B8WT:function(t,e){},FR2W:function(t,e){},N9Jw:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),n=a("/ocq"),i=(a("mtWM"),{name:"home",data:function(){return{showDialog:!1,router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){this.$nextTick(function(){})},methods:{shareOnTwitter:function(){window.open("http://twitter.com/share?url="+encodeURIComponent("https://imjoy.io")+"&text="+encodeURIComponent(" #ShareLoc "),"","left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0")}}}),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("md-toolbar",{staticClass:"md-transparent md-dense",attrs:{"md-elevation":"0"}},[a("div",{staticClass:"md-toolbar-row",attrs:{flex:""}},[a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{attrs:{href:"https://github.com/oeway/ImJoy",target:"_blank"}},[a("md-icon",{staticClass:"md-size-1x svg-icon",attrs:{"md-src":"static/img/github.svg"}}),t._v("source code")],1),t._v(" "),a("md-button",{on:{click:t.shareOnTwitter}},[a("md-icon",{staticClass:"md-size-1x svg-icon",attrs:{"md-src":"static/img/twitter.svg"}}),t._v("share")],1)],1)])]),t._v(" "),a("div",{staticClass:"md-toolbar-row md-layout md-alignment-center-center"},[a("div",{staticClass:"banner-container"},[a("img",{attrs:{src:"static/img/perspective-hr.jpg",alt:"banner"}}),t._v(" "),a("div",{staticClass:"subtitle"},[t._v("Image processing with joy."),a("br"),t._v(" "),a("md-button",{staticClass:"md-raised md-accent",on:{click:function(e){t.showDialog=!0}}},[t._v("Getting Started")])],1)])]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("repository",{attrs:{"show-tags":!1,title:null}}),t._v(" "),a("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(e){t.showDialog=e}}},[a("md-dialog-title",[t._v("Getting Started with ImJoy")]),t._v(" "),a("md-dialog-content",[a("p",[t._v("With the ImJoy web app, you process your images within the browser, instantly, no installation.")]),t._v(" "),a("md-button",{staticClass:"md-raised md-primary",attrs:{to:"viewer"}},[t._v("Start")]),t._v(" "),a("p",[t._v("You can process your data with the viewer locally and anonymously, by default, no data will be transferred to the internet (also depends on the plugin you installed).")])],1),t._v(" "),a("md-dialog-actions",[a("md-button",{staticClass:"md-primary",on:{click:function(e){t.showDialog=!1}}},[t._v("OK")])],1)],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("md-divider"),t._v(" "),a("main-footer")],1)},staticRenderFns:[]};var r=a("VU/8")(i,s,!1,function(t){a("sWaK")},"data-v-27aa8b23",null).exports,d=a("Xxa5"),c=a.n(d),u=a("exGp"),l=a.n(u);a("lDdF");var m={name:"viewer",props:["title"],data:function(){return{select_file:null,selected_file:null,showImportDialog:!1,cards:null,_action:null,plugin_api:{alert:alert},plugin:null,menuVisible:!0,store:this.$root.$data.store,api:this.$root.$data.store.api}},watch:{menuVisible:function(){}},mounted:function(){location.protocol,location.host;this.plugin=this.loadPlugin("https://rawgit.com/imodpasteur/shareLoc.xyz/master/web/static/plugins/textFilePlugin.js"),this.store.event_bus.$on("message",this.messageHandler)},methods:{messageHandler:function(t){var e=t.data;console.log("recieved message from ",t.origin," data: ",e)},selectFileChanged:function(t){this.selected_file=t[0]},updateProgress:function(t){console.log(t)},test:function(){},loadPlugin:function(t){var e=this;this.plugin_api.kk=999,this.plugin_api.get_kk=l()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new ArrayBuffer(1200400));case 1:case"end":return t.stop()}},t,e)}));var a=new jailed.Plugin(t,this.plugin_api);return a.whenConnected(function(){a.api||console.error("error occured when loading plugins."),console.log(a.api),a.api.register().then(function(t){console.log("register plugin: ",t);for(var o,n=(o=l()(c.a.mark(function t(o){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.api.run({op:{name:o.op.name,type:o.op.type},config:o.data,data:o.target,progress:e.updateProgress});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,e)})),function(t){return o.apply(this,arguments)}),i=0;i<t.ops.length;i++){var s=t.ops[i];s.onexecute=n,Joy.add(s)}}).catch(function(t){console.error("error when loading plugin---\x3e",t)})}),a.whenFailed(function(t){}),a}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewer"},[a("div",{staticClass:"md-title"},[t._v(t._s(t.title))]),t._v(" "),a("md-app",{staticClass:"viewer-content"},[t.menuVisible?t._e():a("md-app-toolbar",{staticClass:"md-transparent md-dense",attrs:{"md-elevation":"0"}},[a("div",{staticClass:"md-toolbar-row",attrs:{flex:""}},[t.menuVisible?t._e():a("md-button",{staticClass:"md-fab md-primary",on:{click:function(e){t.menuVisible=!0}}},[a("md-icon",[t._v("menu")])],1)],1)]),t._v(" "),a("md-app-drawer",{attrs:{"md-active":t.menuVisible,"md-persistent":"full"},on:{"update:mdActive":function(e){t.menuVisible=e}}},[a("div",{staticClass:"md-toolbar-row"},[a("div",{staticClass:"md-toolbar-section-start"},[a("md-button",{staticClass:"md-fab md-primary",on:{click:function(e){t.showImportDialog=!0}}},[a("md-icon",[t._v("add")])],1)],1),t._v(" "),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-icon-button md-dense md-raised",on:{click:function(e){t.menuVisible=!t.menuVisible}}},[a("md-icon",[t._v("keyboard_arrow_left")])],1)],1)]),t._v(" "),a("md-card",[a("md-card-header"),t._v(" "),a("md-card-content",[a("joy",{attrs:{init:"{id:'analysis_workflow', type:'actions'}"}})],1),t._v(" "),a("md-card-actions")],1)],1),t._v(" "),a("md-app-content",{staticClass:"viewer-content"},[a("whiteboard",{attrs:{cards:t.cards}})],1)],1),t._v(" "),a("md-dialog",{attrs:{"md-active":t.showImportDialog},on:{"update:mdActive":function(e){t.showImportDialog=e}}},[a("md-dialog-content",[a("div",{staticClass:"md-layout-row md-gutter"},[a("div",{staticClass:"md-flex"},[a("md-field",[a("label",[t._v("load a file/folder")]),t._v(" "),a("md-file",{on:{"md-change":t.selectFileChanged},model:{value:t.select_file,callback:function(e){t.select_file=e},expression:"select_file"}})],1)],1),t._v(" "),a("joy",{attrs:{init:"{id:'file_load_workflow', type:'actions'}"}})],1)]),t._v(" "),a("md-dialog-actions",[a("md-button",{staticClass:"md-primary",on:{click:function(e){t.loadFile(),t.showImportDialog=!1}}},[t._v("OK")]),t._v(" "),a("md-button",{staticClass:"md-primary",on:{click:function(e){t.showImportDialog=!1}}},[t._v("Cancel")])],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(m,v,!1,function(t){a("N9Jw")},"data-v-01d28374",null).exports,p={name:"about",props:{faq:{type:Boolean,default:!0},footer:{type:Boolean,default:!0}},data:function(){return{router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){},methods:{}},f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("md-subheader",[t._v("About ImJoy.io")]),t._v(" "),a("md-card",[a("md-card-header"),t._v(" "),a("md-card-content",{staticClass:"centered-fixed"},[a("md-icon",{staticClass:"md-size-5x md-small-hide",attrs:{"md-src":"static/img/anna-palm-icon-circle.svg"}}),t._v(" "),a("h2",[t._v("Acknowledgements")]),t._v(" "),a("p",[t._v("ImJoy.io project is mainly supported by\n      ")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.pasteur.fr",target:"_blank"}},[a("img",{attrs:{id:"ip-img",src:"static/img/Institut_Pasteur_logo.svg",alt:"Institut Pasteur"}})])]),t._v(" "),a("br"),t._v(" "),a("md-button",{staticClass:"md-raised",on:{click:t.api.contact}},[t._v("Contact us")])],1)],1),t._v(" "),t.faq?a("faq"):t._e(),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),t.footer?a("md-divider"):t._e(),t._v(" "),t.footer?a("main-footer"):t._e()],1)},staticRenderFns:[]};var _=a("VU/8")(p,f,!1,function(t){a("UpWs")},"data-v-2925121e",null).exports;var w=a("EFqf"),b=a.n(w),g={name:"faq",data:function(){return{source:"\n\nTo be done...\n\n",router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},computed:{compiledMarkdown:function(){return b()(this.source,{sanitize:!0})}},mounted:function(){},methods:{}},y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"faq"},[e("md-subheader",[this._v("FREQUENTLY ASKED QUESTIONS")]),this._v(" "),e("md-card",[e("md-card-header"),this._v(" "),e("md-card-content",[e("div",{domProps:{innerHTML:this._s(this.compiledMarkdown)}})])],1)],1)},staticRenderFns:[]};var C=a("VU/8")(g,y,!1,function(t){a("A+BG")},"data-v-62bff1b8",null).exports;o.default.use(n.a);var $=new n.a({base:window.location.pathName,routes:[{path:"/",name:"Home",component:r},{path:"/viewer",name:"Viewer",component:h},{path:"/view",name:"Viewe",component:h},{path:"/about",name:"About",component:_},{path:"/faq",name:"FAQ",component:C}]}),k=a("Lgyv"),x=a.n(k),I=(a("4+hh"),a("giDI"),{name:"navbar",data:function(){return{snackbar_info:"",snackbar_duration:1e3,showSnackbar:!1,screenWidth:window.innerWidth,router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){var t=this;this.store.api.show=this.show,this.screenWidth=window.innerWidth;this.store.event_bus.$on("resize",function(e){t.screenWidth=e.width})},methods:{show:function(t,e){this.snackbar_info=t,this.snackbar_duration=e||3e3,this.showSnackbar=!0}}}),A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-toolbar-row"},[a("div",{staticClass:"md-toolbar-row",attrs:{flex:""}},[a("md-button",{attrs:{to:"/"}},[a("div",{staticClass:"site-title"},[t._v("ImJoy.io"),a("span",{staticClass:"superscript"},[t._v("alpha")])])]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"/"!=t.$route.path,expression:"$route.path!='/'"}],staticClass:"md-layout-item md-medium-hide subheader-title"},[t._v("Image process with joy.")]),t._v(" "),a("div",{staticClass:"md-toolbar-section-end"},[t.screenWidth<600?a("md-menu",{attrs:{"md-size":"medium"}},[a("md-button",{staticClass:"md-primary md-icon-button",attrs:{"md-menu-trigger":""}},[a("md-icon",[t._v("menu")])],1),t._v(" "),a("md-menu-content",[a("md-menu-item",{directives:[{name:"show",rawName:"v-show",value:"/"!=t.$route.path,expression:"$route.path != '/'"}],staticClass:"md-primary md-button menu-button",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),a("md-menu-item",{directives:[{name:"show",rawName:"v-show",value:"/viewer"!=t.$route.path&&"/view"!=t.$route.path,expression:"$route.path != '/viewer' && $route.path != '/view'"}],staticClass:"md-primary md-button menu-button",attrs:{to:"/viewer"}},[t._v("Viewer")]),t._v(" "),a("md-menu-item",{directives:[{name:"show",rawName:"v-show",value:"/about"!=t.$route.path,expression:"$route.path != '/about'"}],staticClass:"md-primary md-button menu-button",attrs:{to:"/about"}},[t._v("About")])],1)],1):t._e(),t._v(" "),t.screenWidth>=600?a("md-button",{directives:[{name:"show",rawName:"v-show",value:"/"!=t.$route.path,expression:"$route.path != '/'"}],staticClass:"md-accent",attrs:{to:"/"}},[a("md-icon",[t._v("home")]),t._v(" Home\n            "),a("md-tooltip",[t._v("Home Page")])],1):t._e(),t._v("\n           \n          "),t.screenWidth>=600?a("md-button",{directives:[{name:"show",rawName:"v-show",value:"/viewer"!=t.$route.path&&"/view"!=t.$route.path,expression:"$route.path != '/viewer' && $route.path != '/view'"}],staticClass:"md-accent",attrs:{to:"/viewer"}},[a("md-icon",[t._v("pageview")]),t._v(" Viewer\n            "),a("md-tooltip",[t._v("SMLM data viewer")])],1):t._e(),t._v("\n           \n          "),t.screenWidth>=600?a("md-button",{directives:[{name:"show",rawName:"v-show",value:"/about"!=t.$route.path,expression:"$route.path != '/about'"}],staticClass:"md-accent",attrs:{to:"/about"}},[a("md-icon",[t._v("info")]),t._v(" About\n            "),a("md-tooltip",[t._v("About ImJoy.io")])],1):t._e()],1)],1),t._v(" "),a("md-snackbar",{staticClass:"md-accent",attrs:{"md-position":"center","md-active":t.showSnackbar,"md-duration":t.snackbar_duration},on:{"update:mdActive":function(e){t.showSnackbar=e}}},[a("span",[t._v(t._s(t.snackbar_info))]),t._v(" "),a("md-button",{staticClass:"md-accent",on:{click:function(e){t.showSnackbar=!1}}},[t._v("close")])],1)],1)},staticRenderFns:[]};var J=a("VU/8")(I,A,!1,function(t){a("ghPj")},"data-v-872a25c0",null).exports,V={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return"/viewer"!=t.$route.path&&"/view"!=t.$route.path?a("div",{staticClass:"footer"},[a("div",{staticClass:"md-layout md-alignment-center-center"},[a("md-button",{staticClass:"md-accent footer-button",attrs:{target:"_blank"},on:{click:function(e){t.contact()}}},[t._v("Ask a question")]),t._v(" "),a("md-button",{staticClass:"md-accent footer-button",attrs:{target:"_blank",href:"https://github.com/oeway/ImJoy/issues"}},[t._v("Create an issue on Github")])],1),t._v(" "),a("div",{staticClass:"md-layout md-alignment-center-center"},[a("md-button",{staticClass:"footer-button",attrs:{href:"https://creativecommons.org/licenses/by/4.0/",target:"_blank"}},[a("md-tooltip",[t._v("Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license.")]),t._v(" "),a("img",{attrs:{id:"cc-by-img",src:"static/img/by.svg",alt:"CC BY 4.0"}}),t._v(" Site content licensed under CC BY 4.0\n    ")],1),t._v(" "),a("md-button",{staticClass:"footer-button",on:{click:function(e){t.mode="about",t.showDialog=!0}}},[t._v("About ImJoy.io")])],1),t._v(" "),a("div",{staticClass:"md-layout md-alignment-center-center"},[a("md-button",{staticClass:"footer-button",attrs:{href:"https://github.com/oeway",target:"_blank"}},[t._v("Made by Wei OUYANG with "),a("span",{staticClass:"red"},[t._v("❤")])]),t._v(" "),a("md-button",{staticClass:"footer-button",attrs:{target:"_blank",href:"https://sites.google.com/site/imagingandmodeling/"}},[t._v("Powered by Imaging and Modeling Unit")]),t._v(" "),t._m(0)],1),t._v(" "),a("md-dialog",{attrs:{"md-active":t.showDialog},on:{"update:mdActive":function(e){t.showDialog=e}}},[a("md-dialog-content",["about"==t.mode?a("about",{attrs:{footer:!1,faq:!1}}):t._e(),t._v(" "),"tos"==t.mode?a("tos"):t._e()],1),t._v(" "),a("md-dialog-actions",[a("md-button",{staticClass:"md-primary",on:{click:function(e){t.showDialog=!1}}},[t._v("OK")])],1)],1),t._v(" "),a("md-dialog",{attrs:{"md-active":t.showQuestion,id:"question-dialog"},on:{"update:mdActive":function(e){t.showQuestion=e}}},[a("md-toolbar",{staticClass:"md-primary"},[a("div",{staticClass:"md-toolbar-row",attrs:{flex:""}},[a("md-subheader",[t._v("\n          Contact us\n        ")]),t._v(" "),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.showQuestion=!1}}},[a("md-icon",[t._v("close")])],1)],1)],1)]),t._v(" "),a("md-dialog-content",[a("div",{staticClass:"holds-the-iframe"},[a("iframe",{attrs:{id:"typeform-full",width:"100%",height:"100%",frameborder:"0",src:"https://oeway.typeform.com/to/qyJOIy"}})])]),t._v(" "),a("md-dialog-actions",[a("md-button",{staticClass:"md-primary",on:{click:function(e){t.showQuestion=!1}}},[t._v("Close")])],1)],1)],1):t._e()},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"https://www.pasteur.fr",target:"_blank"}},[e("img",{attrs:{id:"ip-img",src:"static/img/Institut_Pasteur_logo.svg",alt:"Institut Pasteur"}})])}]};var W=a("VU/8")({name:"main-footer",data:function(){return{mode:"about",showDialog:!1,showQuestion:!1,router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){this.api.contact=this.contact},methods:{contact:function(){this.showQuestion=!0}}},V,!1,function(t){a("FR2W")},"data-v-04375a48",null).exports,D={name:"whiteboard",props:{cards:{type:Object,default:function(){return null}}},data:function(){return{router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){},methods:{}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"whiteboard"},[e("div",{staticClass:"md-layout md-gutter md-alignment-center-center"},[this.cards?this._e():e("md-empty-state",{attrs:{flex:"","md-icon":"static/img/anna-palm-icon-circle-animation.svg","md-label":"IMJOY.IO","md-description":""}})],1)])},staticRenderFns:[]};var E=a("VU/8")(D,F,!1,function(t){a("tSYV")},"data-v-5eb90c92",null).exports,R={name:"options",props:{init:{type:String,default:function(){return"joy workflow."}},controlButtons:{type:Boolean,default:function(){return!0}},data:{type:String,default:function(){return Joy.loadFromURL()}},modules:{type:Array,default:function(){return["instructions","math","random"]}}},data:function(){return{isRunning:!1,router:this.$root.$data.router,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){this.setupJoy()},watch:{init:function(t,e){console.log("Prop changed: ",t," | was: ",e),setupJoy()}},methods:{setupJoy:function(){var t=this;this.$refs.editor.innerHTML="",Joy({container:this.$refs.editor,init:this.init,data:this.data,modules:this.modules,onupdate:function(e){t.$emit("onupdate",e)}})},runJoy:function(){},stopJoy:function(){}}},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"joy"},[a("div",{staticClass:"joy-container"},[a("div",{ref:"editor",staticClass:"joy-editor"}),t._v(" "),a("md-button",{staticClass:"md-button md-primary",attrs:{disabled:t.isRunning},on:{click:function(e){t.runJoy()}}},[a("md-icon",[t._v("play_arrow")]),t._v("Run\n    ")],1),t._v(" "),a("md-button",{staticClass:"md-button md-primary",attrs:{disabled:!t.isRunning},on:{click:function(e){t.stopJoy()}}},[a("md-icon",[t._v("stop")]),t._v("Stop\n    ")],1)],1)])},staticRenderFns:[]};var j=a("VU/8")(R,S,!1,function(t){a("6tQY")},"data-v-460edc1a",null).exports,U={debug:!0,event_bus:new o.default,api:{}},P={name:"app",data:function(){return{show_navbar:!0,store:this.$root.$data.store,api:this.$root.$data.store.api}},mounted:function(){var t=this;window.location.href.indexOf("navbar=0")>=0&&(this.show_navbar=!1),this.$nextTick(function(){var e=function(e){t.store.windowHeight=window.innerHeight,t.store.windowWidth=window.innerWidth,t.store.event_bus.$emit("resize",{height:t.store.windowHeight,width:t.store.windowWidth})};e(),document.addEventListener("orientationchange",window.onresize=e),window.addEventListener("message",function(t){if("http://localhost:8000"!==t.origin||"https://shareloc.xyz"!==t.origin)return;this.store.event_bus.$emit("message",t)},!1)})},methods:{},watch:{}},N={render:function(){var t=this.$createElement,e=this._self._c||t;return e("md-app",{attrs:{id:"app","md-waterfall":"","md-mode":"fixed"}},[this.show_navbar?e("md-app-toolbar",{staticClass:"md-primary"},[e("navbar")],1):this._e(),this._v(" "),e("md-app-content",[e("router-view")],1)],1)},staticRenderFns:[]};var H=a("VU/8")(P,N,!1,function(t){a("B8WT")},null,null).exports,q=a("GDE4"),O=a.n(q);o.default.config.productionTip=!1,o.default.use(x.a),o.default.component("vue-slider",O.a),o.default.component("navbar",J),o.default.component("faq",C),o.default.component("viewer",h),o.default.component("main-footer",W),o.default.component("about",_),o.default.component("whiteboard",E),o.default.component("joy",j);o.default.filter("truncate",function(t,e,a){a=a||"...";var o=document.createElement("div");o.innerHTML=t;var n=o.textContent;return n.length>e?n.slice(0,e)+a:n}),new o.default({el:"#app",router:$,data:{store:U,router:$},template:"<App/>",components:{App:H}})},UpWs:function(t,e){},ghPj:function(t,e){},giDI:function(t,e){},sWaK:function(t,e){},tSYV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.09fa4f9d12a7bd1d036f.js.map