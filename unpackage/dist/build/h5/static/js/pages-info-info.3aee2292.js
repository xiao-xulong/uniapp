(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-info-info"],{"1f54":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("news",{attrs:{news:t.newsInfo}})],1)},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},"230c":function(t,e,n){"use strict";n.r(e);var r=n("79d0"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"25dd":function(t,e,n){"use strict";n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goodsDetail=e.newsList=e.classifyList=e.goodList=e.swiper=void 0;var r="https://api-hmugo-web.itheima.net/api/public/v1",o=function(){return new Promise((function(t,e){uni.request({url:r+"/home/swiperdata",success:function(e){t(e),200!=e.data.meta.status&&uni.showToast({title:"获取轮播图失败"})}})}))};e.swiper=o;var i=function(t){return new Promise((function(e,n){uni.request({url:r+"/goods/search",data:{query:"红米",pagenum:t},success:function(t){e(t),200!=t.data.meta.status&&uni.showToast({title:"获取商品列表失败"})}})}))};e.goodList=i;var a=function(t,e){return new Promise((function(n,o){uni.request({url:r+"/goods/search",data:{query:t,pagenum:e},success:function(t){n(t),200!=t.data.meta.status&&uni.showToast({title:"获取商品列表失败"})}})}))};e.classifyList=a;var u=function(){return new Promise((function(t,e){uni.request({url:"https://v2.alapi.cn/api/new/toutiao",data:{type:1,page:1,token:"pG70XSoRwSkGQPQm"},success:function(e){t(e),200!=e.data.code&&uni.showToast({title:"获取商品列表失败"})}})}))};e.newsList=u;var c=function(t){return new Promise((function(e,n){uni.request({url:r+"/goods/detail",data:{goods_id:t},success:function(t){e(t),200!=t.data.meta.status&&uni.showToast({title:"获取商品列表失败"})}})}))};e.goodsDetail=c},"49b6":function(t,e,n){"use strict";n.r(e);var r=n("9959"),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,(function(){return r[t]}))}(i);e["default"]=o.a},"72c6":function(t,e,n){"use strict";n.r(e);var r=n("75c9"),o=n("230c");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("f2c2");var a,u=n("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"4a34879a",null,!1,r["a"],a);e["default"]=c.exports},"75c9":function(t,e,n){"use strict";var r,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",t._l(t.news,(function(e){return n("v-uni-view",{staticClass:"newsItem",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.jump(e.m_url)}}},[n("v-uni-view",{staticClass:"img"},[n("v-uni-image",{attrs:{src:e.imgsrc}})],1),n("v-uni-view",{staticClass:"content"},[t._v(t._s(e.title)),n("br"),n("v-uni-text",[t._v("发表时间"+t._s(e.time)+"-"+t._s(e.source))])],1)],1)})),1)},i=[];n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return r}))},"793d":function(t,e,n){var r=n("24fb");e=r(!1),e.push([t.i,".newsItem[data-v-4a34879a]{box-sizing:border-box;width:100%;height:13vh;display:-webkit-box;display:-webkit-flex;display:flex;padding:0 10px;padding-bottom:5px;border-bottom:solid 1px #f0ad4e;margin-bottom:3px}.newsItem .img[data-v-4a34879a]{-webkit-box-flex:3;-webkit-flex:3;flex:3}.newsItem .img uni-image[data-v-4a34879a]{width:100%;height:100%;vertical-align:top}.newsItem .content[data-v-4a34879a]{-webkit-box-flex:7;-webkit-flex:7;flex:7;font-size:18px}.newsItem .content uni-text[data-v-4a34879a]{vertical-align:bottom;font-size:14px}",""]),t.exports=e},"79d0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={props:["news"],data:function(){return{}},methods:{jump:function(t){console.log(t),uni.navigateTo({url:"../webView/webView?url=".concat(t)})}}};e.default=r},"8bde":function(t,e,n){"use strict";n.r(e);var r=n("1f54"),o=n("49b6");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);var a,u=n("f0c5"),c=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"7b869449",null,!1,r["a"],a);e["default"]=c.exports},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,o=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag",s="object"===typeof t,f=e.regeneratorRuntime;if(f)s&&(t.exports=f);else{f=e.regeneratorRuntime=s?t.exports:{},f.wrap=b;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",v={},w={};w[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(N([])));y&&y!==r&&o.call(y,a)&&(w=y);var g=E.prototype=L.prototype=Object.create(w);_.prototype=g.constructor=E,E.constructor=_,E[c]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},f.awrap=function(t){return{__await:t}},k(j.prototype),j.prototype[u]=function(){return this},f.AsyncIterator=j,f.async=function(t,e,n,r){var o=new j(b(t,e,n,r));return f.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(g),g[c]="Generator",g[a]=function(){return this},g.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},f.values=N,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),v}}}function b(t,e,n,r){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new G(r||[]);return i._invoke=P(t,n,a),i}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function L(){}function _(){}function E(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function j(t){function e(n,r,i,a){var u=x(t[n],t,r);if("throw"!==u.type){var c=u.arg,s=c.value;return s&&"object"===typeof s&&o.call(s,"__await")?Promise.resolve(s.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(s).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(u.arg)}var n;function r(t,r){function o(){return new Promise((function(n,o){e(t,r,n,o)}))}return n=n?n.then(o,o):o()}this._invoke=r}function P(t,e,n){var r=l;return function(o,i){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return S()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var u=O(a,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var c=x(t,e,n);if("normal"===c.type){if(r=n.done?p:h,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function O(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,O(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=x(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){while(++r<t.length)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},9959:function(t,e,n){"use strict";var r=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var o=r(n("c964")),i=r(n("72c6")),a=n("25dd"),u={onLoad:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,a.newsList)();case 2:n=e.sent,t.newsInfo=n.data.data,console.log(t.newsInfo);case 5:case"end":return e.stop()}}),e)})))()},components:{news:i.default},data:function(){return{newsInfo:[]}},methods:{}};e.default=u},c964:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return o}));n("d3b7"),n("e6cf");function r(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}},cf31:function(t,e,n){var r=n("793d");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n("4f06").default;o("58153298",r,!0,{sourceMap:!1,shadowMode:!1})},f2c2:function(t,e,n){"use strict";var r=n("cf31"),o=n.n(r);o.a}}]);