(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{383:function(e,t,n){"use strict";n.r(t);n(22),n(39);var r=n(5),o={layout:"admin",data:function(){return{loading:!1}},asyncData:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n,r,data;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://api.octavues.me/timelines");case 3:return r=e.sent,data=null,data=r.success?{timelines:r.data.timelines}:{},e.abrupt("return",new Promise(function(e){setTimeout(function(){e(data)},4e3)}));case 7:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),methods:{deleteThis:function(){var e=Object(r.a)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,this.$axios.$get("https://api.octavues.me/timeline/delete/"+t);case 3:return e.sent,e.next=6,this.$axios.$get("https://api.octavues.me/timelines");case 6:(n=e.sent).success&&(this.timelines=n.data.timelines),this.loading=!1;case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),updateThis:function(e){this.loading=!0,this.$router.push("/admin/timeline/update/"+e),this.loading=!1}}},c=n(8),component=Object(c.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-card-text",e._l(e.timelines,function(t,r){return e.timelines?n("v-card",{key:r,attrs:{flat:""}},[n("v-card-text",[n("span",{domProps:{innerHTML:e._s(t.title)}}),e._v(" "),n("span",{domProps:{innerHTML:e._s(t.content)}}),e._v(" "),n("span",{domProps:{innerHTML:e._s(t.date)}})]),e._v(" "),n("v-btn",{attrs:{color:"primary",disable:e.loading},on:{click:function(n){return e.updateThis(t._id)}}},[e._v("Update")]),e._v(" "),n("v-btn",{attrs:{color:"error",disable:e.loading},on:{click:function(n){return e.deleteThis(t._id)}}},[e._v("Delete")]),e._v(" "),n("br")],1):e._e()}),1)],1)],1)},[],!1,null,"b40e7a88",null);t.default=component.exports}}]);