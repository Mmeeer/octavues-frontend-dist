(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{215:function(t,e,o){var content=o(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("39e9db43",content,!0,{sourceMap:!1})},216:function(t,e,o){var content=o(227);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("14763534",content,!0,{sourceMap:!1})},217:function(t,e,o){var content=o(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("d623f07e",content,!0,{sourceMap:!1})},219:function(t,e,o){"use strict";o(39);var n=o(5),r={props:["dark","white"],data:function(){return{email:""}},methods:{submit:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={email:this.email},t.next=3,this.$axios.$post("https://api.octavues.me/subscribe",e);case 3:t.sent.success&&(this.email="");case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},c=(o(224),o(8)),component=Object(c.a)(r,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"octa-input"},[o("v-form",[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{md8:"",xs12:""}},[1==t.white?o("v-text-field",{attrs:{label:"Email",color:"white",required:"",dark:1==t.dark},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}):o("v-text-field",{attrs:{label:"Email",color:"purple",required:"",dark:1==t.dark},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),o("v-flex",{staticClass:"octa-center",attrs:{md4:"",xs12:""}},[o("v-btn",{attrs:{round:"",color:"purple",dark:""},on:{click:function(e){return t.submit()}}},[t._v("Subscribe")])],1)],1)],1)],1)},[],!1,null,"2299bed0",null);e.a=component.exports},223:function(t,e,o){"use strict";var n={props:["data","img"],components:{octainput:o(219).a}},r=(o(226),o(8)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",[o("v-flex",{staticClass:"fixer"},[o("div",{staticClass:"octa-footer",class:{nobackground:0==t.img}},[o("div",{staticClass:"octa-footer-content"},[o("div",{staticClass:"octa-footer-link"},[o("div",{staticClass:"octa-footer-linker"},[o("h1",[t._v(t._s(t.data.home.title))]),t._v(" "),t._l(t.data.home.links,function(e,n){return o("nuxt-link",{key:n,staticClass:"octa-footer-nav-link",attrs:{to:e.to}},[t._v(t._s(e.link))])})],2),t._v(" "),o("div",{staticClass:"octa-footer-linker"},[o("h1",[t._v(t._s(t.data.sub.title))]),t._v(" "),o("span",{staticClass:"octa-footer-motto"},[o("octainput",{attrs:{dark:!0,white:!0}})],1)]),t._v(" "),o("div",{staticClass:"octa-footer-linker"},[o("h1",[t._v(t._s(t.data.pro.title))]),t._v(" "),t._l(t.data.pro.links,function(e,n){return o("nuxt-link",{key:n,staticClass:"octa-footer-nav-link",attrs:{to:e.to}},[t._v(t._s(e.link))])})],2),t._v(" "),o("div",{staticClass:"octa-footer-linker"},[o("span",{staticClass:"octa-footer-motto"},[t._v(t._s(t.data.motto))])])])]),t._v(" "),o("div",{staticClass:"octa-footer-desc"},[o("span",{staticClass:"octa-footer-copyright"},[t._v("\n          Powered by Octavues\n          "),o("span",[t._v("|")]),t._v(" Copyright © 2019\n        ")])])])])],1)},[],!1,null,"71f1b928",null);e.a=component.exports},224:function(t,e,o){"use strict";var n=o(215);o.n(n).a},225:function(t,e,o){(t.exports=o(13)(!1)).push([t.i,".octa-center[data-v-2299bed0]{display:flex;flex-direction:column;align-items:center;justify-content:center}",""])},226:function(t,e,o){"use strict";var n=o(216);o.n(n).a},227:function(t,e,o){e=t.exports=o(13)(!1);var n=o(124)(o(228));e.push([t.i,'.nobackground[data-v-71f1b928]{background-image:none!important}.fixer[data-v-71f1b928]{z-index:0}.octa-footer-motto[data-v-71f1b928]{height:100%;margin:20px;font-family:Montserrat,"sans-serif";font-weight:500;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.octa-footer-linker .octa-footer-nav-link[data-v-71f1b928]{color:#fff;margin:0 0 5px 40px}.octa-footer-linker h1[data-v-71f1b928]{margin:40px 0 20px 40px}.octa-footer-linker[data-v-71f1b928]{width:100%;height:100%;background-color:#353535;color:#fff;font-family:Montserrat,"sans-serif";font-weight:500;display:flex;flex-direction:column}.octa-footer-link[data-v-71f1b928]{max-width:960px;margin:auto;display:grid;box-shadow:0 0 10px 5px rgba(0,0,0,.3)}.octa-footer-copyright span[data-v-71f1b928]{font-weight:700;padding:0 4px}.octa-footer-copyright[data-v-71f1b928]{color:#fff;font-family:Montserrat,"sans-serif"}.octa-footer[data-v-71f1b928]{background-image:url('+n+");background-size:cover;background-position:50%;display:grid}.octa-footer-content[data-v-71f1b928],.octa-footer-desc[data-v-71f1b928]{display:flex;flex-direction:column;justify-content:center;align-items:center}.octa-footer-desc[data-v-71f1b928]{height:50px;background-color:#353535}@media only screen and (min-width:961px){.octa-footer[data-v-71f1b928]{height:100vh;grid-template-rows:auto 50px}.octa-footer-link[data-v-71f1b928]{grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}.octa-footer-copyright[data-v-71f1b928]{font-size:14px;font-weight:500;line-height:16px}.octa-footer-linker .octa-footer-nav-link[data-v-71f1b928],.octa-footer-motto[data-v-71f1b928]{font-size:16px;line-height:16px}.octa-footer-linker h1[data-v-71f1b928]{font-size:24px;line-height:24px}}@media only screen and (min-width:601px) and (max-width:960px){.octa-footer[data-v-71f1b928]{padding:20px;grid-template-rows:auto 50px}.octa-footer-copyright[data-v-71f1b928]{font-size:12px;font-weight:500;line-height:12px}.octa-footer-linker .octa-footer-nav-link[data-v-71f1b928],.octa-footer-motto[data-v-71f1b928]{font-size:16px;line-height:16px}.octa-footer-linker h1[data-v-71f1b928]{font-size:20px;line-height:20px}}@media only screen and (max-width:600px){.octa-footer[data-v-71f1b928]{grid-template-rows:auto 50px}.octa-footer-copyright[data-v-71f1b928]{font-size:10px;font-weight:500;line-height:10px}.octa-footer-linker .octa-footer-nav-link[data-v-71f1b928],.octa-footer-motto[data-v-71f1b928]{font-size:14px;line-height:14px}.octa-footer-linker h1[data-v-71f1b928]{font-size:16px;line-height:16px}}",""])},228:function(t,e,o){t.exports=o.p+"img/fc536d5.png"},229:function(t,e,o){"use strict";var n={components:{octainput:o(219).a}},r=(o(230),o(8)),component=Object(r.a)(n,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"octa-subs"},[e("div",{staticClass:"octa-container"},[this._m(0),this._v(" "),e("octainput")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"octa-title"},[e("h2",[this._v("Биднийг дагаад урагш тэмүүл!")])])}],!1,null,"7d1f5417",null);e.a=component.exports},230:function(t,e,o){"use strict";var n=o(217);o.n(n).a},231:function(t,e,o){(t.exports=o(13)(!1)).push([t.i,".octa-subs[data-v-7d1f5417]{width:100%;background:#fff;padding-top:20px;padding-bottom:20px}.octa-container[data-v-7d1f5417]{background:#fff;max-width:960px;margin:auto;padding:40px;box-shadow:0 0 10px 5px rgba(0,0,0,.3)}@media only screen and (max-width:960px){h2[data-v-7d1f5417]{font-size:24px}}",""])},237:function(t,e,o){var content=o(267);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("4849f51f",content,!0,{sourceMap:!1})},266:function(t,e,o){"use strict";var n=o(237);o.n(n).a},267:function(t,e,o){(t.exports=o(13)(!1)).push([t.i,'.fixer[data-v-ec785fa6]{z-index:0;padding:20px}.octa-image[data-v-ec785fa6]{position:absolute;top:0;left:0;width:100%;z-index:-1}.octa-image[data-v-ec785fa6],.octa-image div[data-v-ec785fa6]{height:100%;display:flex;flex-direction:row;justify-content:center;align-items:center}.octa-image div[data-v-ec785fa6]{width:50%}.octa-image img[data-v-ec785fa6]{max-height:100%;max-width:100%;margin:0 auto}.octa-container[data-v-ec785fa6]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:auto}.octa-header[data-v-ec785fa6]{display:grid;grid-template-rows:auto auto}.octa-header .octa-header-title[data-v-ec785fa6]{color:#222;font-size:64px;font-family:Montserrat,"sans-serif";font-weight:700;text-transform:uppercase;line-height:64px;margin:0;align-items:center}.octa-header .octa-header-underline[data-v-ec785fa6]{height:8px;border-radius:8px;width:100%;background-color:#222}',""])},298:function(t,e,o){"use strict";var n={props:["data"],data:function(){return{url:null,lala:!1,bash:[],basher:[]}},mounted:function(){this.url="https://api.octavues.me";for(var i=0;i<this.data.length;i++)i>0&&i%3==0&&(this.bash.push(this.basher),this.basher=[]),this.basher.push(this.data[i]);this.bash.push(this.basher),this.lala=!0}},r=(o(266),o(8)),component=Object(r.a)(n,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",[o("v-flex",{staticClass:"fixer"},[o("div",{staticClass:"octa-container"},[o("div",{staticClass:"octa-header"},[o("span",{staticClass:"octa-header-title"},[t._v("timeline")]),t._v(" "),o("span",{staticClass:"octa-header-underline"})])]),t._v(" "),t._l(t.bash,function(e,n){return o("v-timeline",{key:n,attrs:{"align-top":!t.$ua.isFromPc(),dense:!t.$ua.isFromPc()}},[t._l(e,function(e){return o("v-timeline-item",{key:e._id,attrs:{right:n%2==0,left:n%2==1,small:!t.$ua.isFromPc()}},[o("v-card",{staticClass:"elevation-2"},[o("v-card-title",{staticClass:"headline",domProps:{innerHTML:t._s("<b>"+e.title+"</b>")}}),t._v(" "),o("v-card-text",{domProps:{innerHTML:t._s(e.content)}}),t._v(" "),o("v-card-text",{domProps:{innerHTML:t._s(e.date)}})],1)],1)}),t._v(" "),t.$ua.isFromPc()?o("div",{staticClass:"octa-image"},[o("div",[n%2==0&&t.lala?o("img",{attrs:{src:t.url+"/assets/timeline/"+(n+1)+".png"}}):t._e()]),t._v(" "),o("div",[n%2==1&&t.lala?o("img",{attrs:{src:t.url+"/assets/timeline/"+(n+1)+".png"}}):t._e()])]):t._e()],2)})],2)],1)},[],!1,null,"ec785fa6",null);e.a=component.exports},368:function(t,e,o){"use strict";o.r(e);o(22),o(39);var n=o(5),r=o(298),footer=o(223),c=o(229),l={transition:"intro",data:function(){return{footer:{home:{title:"Quick Links",links:[{link:"Home",to:"/"},{link:"Events",to:"/event"},{link:"Blog",to:"/blog"},{link:"Projects",to:"/projects"},{link:"Timeline",to:"/timeline"},{link:"About us",to:"/aboutus"},{link:"Login & Signup",to:"/login"},{link:"Contact us",to:"/contactus"}]},sub:{title:"Recieve News From Us"},pro:{title:"Projects",links:[{link:"Octavues",to:"#"},{link:"Medremj",to:"#"},{link:"TOEFL",to:"#"}]},motto:"What is the most important thing you could be working on in the world right now? ... And if you're not working on that, why aren't you?"}}},components:{Timeline:r.a,Footer:footer.a,Subscription:c.a},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var o,n,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=e.$axios,t.next=3,o.$get("https://api.octavues.me/timeline");case 3:if(1!=(n=t.sent).success){t.next=9;break}return data={res:n.data.timeline},t.abrupt("return",new Promise(function(t){setTimeout(function(){t(data)},4e3)}));case 9:redirect("/404");case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},f=o(8),component=Object(f.a)(l,function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",{attrs:{wrap:""}},[e("v-flex",{staticStyle:{background:"white"},attrs:{xs12:""}},[this.res?e("Timeline",{attrs:{data:this.res}}):this._e()],1),this._v(" "),e("v-flex",{attrs:{xs12:""}},[e("Subscription")],1),this._v(" "),e("v-flex",{attrs:{xs12:""}},[e("Footer",{attrs:{data:this.footer}})],1)],1)},[],!1,null,"9906f6cc",null);e.default=component.exports}}]);