(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-pics"],{"21b5":function(t,e,r){"use strict";var n,o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",[r("v-uni-scroll-view",{staticClass:"scroll-left",attrs:{"scroll-y":!0}},t._l(t.classify,(function(e,n){return r("v-uni-view",{class:n==t.act?"act":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.active(n)}}},[t._v(t._s(e))])})),1),r("v-uni-scroll-view",{staticClass:"scroll-right",attrs:{"scroll-y":!0}},t._l(t.goodList,(function(e){return r("v-uni-view",{staticClass:"goodInfo"},[r("v-uni-image",{attrs:{src:e.goods_big_logo},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.previewImage(e.goods_id)}}}),r("v-uni-text",[t._v(t._s(e.goods_name))])],1)})),1)],1)},i=[];r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return n}))},"25dd":function(t,e,r){"use strict";r("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goodsDetail=e.newsList=e.classifyList=e.goodList=e.swiper=void 0;var n="https://api-hmugo-web.itheima.net/api/public/v1",o=function(){return new Promise((function(t,e){uni.request({url:n+"/home/swiperdata",success:function(e){t(e),200!=e.data.meta.status&&uni.showToast({title:"获取轮播图失败"})}})}))};e.swiper=o;var i=function(t){return new Promise((function(e,r){uni.request({url:n+"/goods/search",data:{query:"红米",pagenum:t},success:function(t){e(t),200!=t.data.meta.status&&uni.showToast({title:"获取商品列表失败"})}})}))};e.goodList=i;var a=function(t,e){return new Promise((function(r,o){uni.request({url:n+"/goods/search",data:{query:t,pagenum:e},success:function(t){r(t),200!=t.data.meta.status&&uni.showToast({title:"获取商品列表失败"})}})}))};e.classifyList=a;var c=function(){return new Promise((function(t,e){uni.request({url:"https://v2.alapi.cn/api/new/toutiao",data:{type:1,page:1,token:"pG70XSoRwSkGQPQm"},success:function(e){t(e),200!=e.data.code&&uni.showToast({title:"获取商品列表失败"})}})}))};e.newsList=c;var s=function(t){return new Promise((function(e,r){uni.request({url:n+"/goods/detail",data:{goods_id:t},success:function(t){e(t),200!=t.data.meta.status&&uni.showToast({title:"获取商品列表失败"})}})}))};e.goodsDetail=s},"26cd":function(t,e,r){"use strict";var n=r("ee27");r("c740"),r("4160"),r("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("96cf");var o=n(r("c964")),i=r("25dd"),a={onLoad:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.getInfo_Pic();case 1:case"end":return e.stop()}}),e)})))()},data:function(){return{classify:["小米手机","小米电视","小米笔记本","小米路由器","小米充电宝","米家"],act:0,pageNum:1,goodList:[],picsUrl:[]}},methods:{active:function(t){this.act!=t&&(this.act=t,this.goodList=[],this.picsUrl=[],this.getInfo_Pic())},getInfo_Pic:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.classifyList)(t.classify[t.act],t.pageNum).then((function(e){for(var r=0;r<e.data.message.goods.length;r++)""!=e.data.message.goods[r].goods_big_logo&&(t.goodList.push(e.data.message.goods[r]),console.log(t.goodList));t.goodList.forEach((function(e){t.picsUrl.push(e.goods_big_logo)}))}));case 2:case"end":return e.stop()}}),e)})))()},previewImage:function(t){var e=this.goodList.findIndex((function(e){return e.goods_id==t}));console.log(t),console.log(e),uni.previewImage({urls:this.picsUrl,current:e})}}};e.default=a},5954:function(t,e,r){var n=r("96b5");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=r("4f06").default;o("0b0878de",n,!0,{sourceMap:!1,shadowMode:!1})},"8af5":function(t,e,r){"use strict";r.r(e);var n=r("21b5"),o=r("f0b5");for(var i in o)"default"!==i&&function(t){r.d(e,t,(function(){return o[t]}))}(i);r("d6c3");var a,c=r("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"42398f68",null,!1,n["a"],a);e["default"]=s.exports},"96b5":function(t,e,r){var n=r("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-42398f68],\nuni-view[data-v-42398f68]{height:100%}.scroll-left[data-v-42398f68]{width:%?200?%;height:100%;display:inline-block}.scroll-left uni-view[data-v-42398f68]{width:100%;height:60px;line-height:60px;text-align:center;font-size:14px;border-right:solid %?1?% #f1f1f1;border-bottom:solid 1px #f1f1f1;background-color:#fff}.scroll-left .act[data-v-42398f68]{background-color:#ff4500;color:#fff}.scroll-right[data-v-42398f68]{vertical-align:top;display:inline-block;width:%?500?%;height:100vh;margin-left:%?25?%}.scroll-right .goodInfo[data-v-42398f68]{width:100%;height:auto}.scroll-right .goodInfo uni-image[data-v-42398f68]{width:100%}.scroll-right .goodInfo uni-text[data-v-42398f68]{font-size:16px}",""]),t.exports=e},"96cf":function(t,e){!function(e){"use strict";var r,n=Object.prototype,o=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag",u="object"===typeof t,f=e.regeneratorRuntime;if(f)u&&(t.exports=f);else{f=e.regeneratorRuntime=u?t.exports:{},f.wrap=b;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",g={},v={};v[a]=function(){return this};var y=Object.getPrototypeOf,w=y&&y(y(T([])));w&&w!==n&&o.call(w,a)&&(v=w);var m=E.prototype=L.prototype=Object.create(v);_.prototype=m.constructor=E,E.constructor=_,E[s]=_.displayName="GeneratorFunction",f.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},f.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(m),t},f.awrap=function(t){return{__await:t}},k(P.prototype),P.prototype[c]=function(){return this},f.AsyncIterator=P,f.async=function(t,e,r,n){var o=new P(b(t,e,r,n));return f.isGeneratorFunction(e)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},k(m),m[s]="Generator",m[a]=function(){return this},m.toString=function(){return"[object Generator]"},f.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},f.values=T,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(G),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),u=o.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),G(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;G(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),g}}}function b(t,e,r,n){var o=e&&e.prototype instanceof L?e:L,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=j(t,r,a),i}function x(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}function L(){}function _(){}function E(){}function k(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function P(t){function e(r,n,i,a){var c=x(t[r],t,n);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"===typeof u&&o.call(u,"__await")?Promise.resolve(u.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(u).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,a)}))}a(c.arg)}var r;function n(t,n){function o(){return new Promise((function(r,o){e(t,n,r,o)}))}return r=r?r.then(o,o):o()}this._invoke=n}function j(t,e,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return S()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var c=I(a,r);if(c){if(c===g)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=x(t,e,r);if("normal"===s.type){if(n=r.done?p:h,s.arg===g)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function I(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,I(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var o=x(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,g;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,g):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function G(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){while(++n<t.length)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:r,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},c964:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return o}));r("d3b7"),r("e6cf");function n(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,s,"next",t)}function s(t){n(a,o,i,c,s,"throw",t)}c(void 0)}))}}},d6c3:function(t,e,r){"use strict";var n=r("5954"),o=r.n(n);o.a},f0b5:function(t,e,r){"use strict";r.r(e);var n=r("26cd"),o=r.n(n);for(var i in n)"default"!==i&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=o.a}}]);