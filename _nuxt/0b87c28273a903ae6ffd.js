(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{382:function(t,e,n){"use strict";n.r(e);n(22),n(39);var r=n(5),c={layout:"admin",asyncData:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("https://api.octavues.me/cv");case 3:if(1!=(r=t.sent).success){t.next=9;break}return data={cv:r.data.cv},t.abrupt("return",new Promise(function(t){setTimeout(function(){t(data)},4e3)}));case 9:throw err;case 10:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{headers:[{text:"Email",align:"left",sortable:!1,value:"email"},{text:"Firstname",value:"firstname"},{text:"Lastname",value:"lastname"},{text:"Date",value:"date"},{text:"CV",value:"content"}]}},methods:{goTo:function(t){this.$router.push("/admin/contact/cv/"+t)}},mounted:function(){var t=this;this.$nextTick(function(){t.$nuxt.$loading.start(),setTimeout(function(){return t.$nuxt.$loading.finish()},2e3)})}},o=n(8),component=Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",[n("v-flex",[n("v-card",{staticClass:"main"},[n("v-card-text",[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.cv},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",[t._v(t._s(e.item.email))]),t._v(" "),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.firstname))]),t._v(" "),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.lastname))]),t._v(" "),n("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.datestring))]),t._v(" "),n("td",{staticClass:"text-xs-left"},[n("v-btn",{attrs:{flat:"",small:""},on:{click:function(n){return t.goTo(e.item._id)}}},[t._v("Read")])],1)]}}])})],1)],1)],1)],1)},[],!1,null,"bd3c122a",null);e.default=component.exports}}]);