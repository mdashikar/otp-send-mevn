webpackJsonp([1],{"3YEB":function(t,s){},FqD9:function(t,s){},HeZM:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var i=e("VU/8")({name:"App"},n,!1,function(t){e("zw5J")},null,null).exports,r=e("/ocq"),o={data:()=>({isHome:!1}),methods:{checkHome(){"/"==this.$route.path&&(this.isHome=!0)}},created(){this.checkHome()}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fuild"},[e("nav",{staticClass:"navbar is-light"},[e("div",{staticClass:"navbar-brand"},[e("router-link",{staticClass:"navbar-item",attrs:{href:"",to:"/"}},[t._v("\n                OPT-SMS\n            ")]),t._v(" "),t._m(0)],1),t._v(" "),e("div",{staticClass:"navbar-menu",attrs:{id:"navbarExampleTransparentExample"}},[e("div",{staticClass:"navbar-start"},[e("router-link",{staticClass:"navbar-item",attrs:{to:"/list"}},[t._v("Contact List")]),t._v(" "),e("router-link",{staticClass:"navbar-item",attrs:{to:"/sent"}},[t._v("Sent Messages")])],1),t._v(" "),t._m(1)])]),t._v(" "),t.isHome?e("section",{staticClass:"section"},[t._m(2)]):t._e()])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarExampleTransparentExample"}},[s("span"),this._v(" "),s("span"),this._v(" "),s("span")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[s("div",{staticClass:"field is-grouped"},[s("p",{staticClass:"control"},[s("a",{staticClass:"bd-gt-button button",attrs:{href:"https://github.com/mdashikar/mevn-user-reg-module/blob/master/README.md"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fab fa-github"})]),this._v(" "),s("span",[this._v("\n                            See Docs\n                        ")])])]),this._v(" "),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-primary",attrs:{href:"https://github.com/mdashikar/otp-send-mevn/archive/master.zip"}},[s("span",{staticClass:"icon"},[s("i",{staticClass:"fas fa-download"})]),this._v(" "),s("span",[this._v("Download Source Code")])])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"bd-example container"},[s("div",{staticClass:"content is-medium"},[s("h1",[this._v("Welcome to OTP SMS with vuejs and nodejs")]),this._v(" "),s("p",[this._v("Please navigate through menu bar to see Contact list and click user to send OTP then go to Sent messages you will find the details.")])])])}]};var c=e("VU/8")(o,l,!1,function(t){e("3YEB")},null,null).exports,v=e("mtWM"),d=e.n(v),u={components:{navBar:c},data:()=>({contactList:[]}),methods:{getContactList(){d.a.get("http://otp.mdashikar.com/getdata").then(t=>{console.log(t),this.contactList=t.data})}},mounted(){this.getContactList()}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nav-bar"),t._v(" "),e("router-view"),t._v(" "),e("div",{staticClass:"container"},[e("table",{staticClass:"table is-bordered is-striped is-narrow is-hoverable is-fullwidth"},[t._m(0),t._v(" "),e("tbody",t._l(t.contactList,function(s,a){return e("tr",{key:s},[e("th",[t._v(t._s(a+=1))]),t._v(" "),e("td",[e("router-link",{attrs:{href:"",to:"/details/"+s._id,title:s.name}},[t._v(t._s(s.name))])],1),t._v(" "),e("td",[t._v(t._s(s.email))]),t._v(" "),e("td",[t._v(t._s(s.gender))]),t._v(" "),e("td",[t._v(t._s(s.age))]),t._v(" "),e("td",[t._v(t._s(s.company))]),t._v(" "),e("td",[t._v(t._s(s.address))])])}))])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",[e("abbr",{attrs:{title:"Position"}},[t._v("Pos")])]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[e("abbr",{attrs:{title:"Email"}},[t._v("Email")])]),t._v(" "),e("th",[e("abbr",{attrs:{title:""}},[t._v("Gender")])]),t._v(" "),e("th",[e("abbr",{attrs:{title:""}},[t._v("Age")])]),t._v(" "),e("th",[e("abbr",{attrs:{title:""}},[t._v("Company")])]),t._v(" "),e("th",[t._v("Address")])])])}]};var m=e("VU/8")(u,h,!1,function(t){e("U4fa")},null,null).exports,j={components:{navBar:c},data(){return{contactDetails:[],details:{},userId:this.$route.params.id,otpNumber:"",isActive:!1,loading:!1,sentSuccess:!1}},methods:{getContactDetails(){d.a.get("http://otp.mdashikar.com/getdata").then(t=>{this.contactDetails=t.data;var s=this.userId;this.details=this.contactDetails.filter(function(t){return t._id===s})})},generateNumber(){return this.otpNumber=Math.floor(1e5+9e5*Math.random())},sendOptNumber(){this.loading=!0,d.a.post("http://otp.mdashikar.com/send-opt",{otpNumber:this.otpNumber,userInfo:this.details[0],phoneNumber:this.details[0].phone}).then(t=>{this.loading=!1,this.isActive=!1,this.sentSuccess=!0,console.log(t)}).catch(t=>{console.log(t)})}},mounted(){this.getContactDetails()}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nav-bar"),t._v(" "),t.sentSuccess?e("div",{staticClass:"notification is-link"},[e("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(s){t.sentSuccess=!1}}}),t._v("\n        A text has been sent to your number please check.\n    ")]):t._e(),t._v(" "),e("section",{staticClass:"hero is-medium is-info is-bold"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[t._v("\n                   Full name:  "+t._s(t.details[0].name)+"\n                ")]),t._v(" "),e("h2",{staticClass:"subtitle"},[t._v("\n                    Phone: "+t._s(t.details[0].phone)+"\n                ")])]),t._v(" "),e("br"),t._v(" "),e("a",{staticClass:"button is-hovered",on:{click:function(s){t.isActive=t.generateNumber()}}},[t._v("Send Message")]),t._v(" "),e("div",{staticClass:"modal",class:{"is-active":t.isActive}},[e("div",{staticClass:"modal-background"}),t._v(" "),e("div",{staticClass:"modal-content"},[e("article",{staticClass:"message is-link"},[t._m(0),t._v(" "),e("div",{staticClass:"message-body"},[t._v("\n                            Hi. Your OTP is "),e("strong",[t._v(t._s(t.otpNumber))]),t._v(".\n                        ")]),t._v(" "),e("a",{staticClass:"button is-success is-hovered",class:{"is-loading":t.loading},on:{click:t.sendOptNumber}},[t._v("Send")]),t._v(" "),e("br"),t._v(" "),e("br")])]),t._v(" "),e("button",{staticClass:"modal-close is-large",attrs:{"aria-label":"close"},on:{click:function(s){t.isActive=!1}}})])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"message-header"},[s("p",[this._v("Send Message")])])}]};var b=e("VU/8")(j,_,!1,function(t){e("HeZM")},null,null).exports,p={components:{navBar:c},data:()=>({sentMessages:[]}),methods:{getSentMessages(){d.a.get("http://otp.mdashikar.com/get-otp-users").then(t=>{console.log(t),this.sentMessages=t.data})}},mounted(){this.getSentMessages()}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("nav-bar"),t._v(" "),e("div",{staticClass:"container"},[e("table",{staticClass:"table is-bordered is-striped is-narrow is-hoverable is-fullwidth"},[t._m(0),t._v(" "),e("tbody",t._l(t.sentMessages,function(s,a){return e("tr",{key:s},[e("th",[t._v(t._s(a+=1))]),t._v(" "),e("td",[t._v("\n                        "+t._s(s.userInfo[0].name)+"\n                    ")]),t._v(" "),e("td",[t._v(t._s(t._f("formatDate")(s.updated)))]),t._v(" "),e("td",[t._v(t._s(t._f("formatTime")(s.updated)))]),t._v(" "),e("td",[t._v(t._s(s.otpNumber))])])}))])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",[e("abbr",{attrs:{title:"Position"}},[t._v("Pos")])]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[e("abbr",{attrs:{title:"Time"}},[t._v("Date")])]),t._v(" "),e("th",[e("abbr",{attrs:{title:"Time"}},[t._v("Time")])]),t._v(" "),e("th",[e("abbr",{attrs:{title:"One Time Pass"}},[t._v("OTP")])])])])}]};var g=e("VU/8")(p,f,!1,function(t){e("FqD9")},null,null).exports;a.a.use(r.a);var C=new r.a({mode:"history",routes:[{path:"/",name:"Home",component:c},{path:"/list",name:"ContactList",component:m},{path:"/details/:id",component:b,children:[{path:"",component:b}]},{path:"/sent",name:"SentMessages",component:g}]}),k=e("PJh5"),z=e.n(k);a.a.config.productionTip=!1,a.a.filter("formatDate",function(t){if(t)return z()(String(t)).format("MM/DD/YYYY")}),a.a.filter("formatTime",function(t){if(t)return z()(String(t)).format("h:mm:ss a")}),new a.a({el:"#app",router:C,components:{App:i},template:"<App/>"})},U4fa:function(t,s){},uslO:function(t,s,e){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return e(i(t))}function i(t){var s=a[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"},zw5J:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.bcedf1bc0a3b9c4ebef2.js.map