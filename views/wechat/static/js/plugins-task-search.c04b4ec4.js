(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["plugins-task-search"],{"21c9":function(e,t,i){"use strict";var n=i("b76a"),a=i.n(n);a.a},"3ec4":function(e,t,i){var n=i("a1a8");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-page-content[data-v-ea1d1f34]{background:#fff}.he-search[data-v-ea1d1f34]{width:%?750?%;height:%?112?%;padding:%?24?% %?8?% %?24?% %?32?%}.he-search__input[data-v-ea1d1f34]{width:%?609?%;height:%?64?%;background:#f7f7f7;border-radius:%?32?%;padding:0 %?32?%}.he-search__text[data-v-ea1d1f34]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#222;height:%?64?%;line-height:%?64?%;text-align:center}.he-search__icon[data-v-ea1d1f34]{width:%?28?%;height:%?28?%;font-size:%?28?%;color:#999;margin-right:%?16?%}[data-v-ea1d1f34] .he-placeholder{font-size:%?28?%;font-family:PingFang SC;font-weight:400;color:#999}.he-history[data-v-ea1d1f34]{min-height:calc(100vh - %?112?%);padding-top:%?19?%}.iconsearch_empty[data-v-ea1d1f34]{font-size:%?36?%;color:#cbcbcb;width:%?36?%;height:%?36?%}.he-clear[data-v-ea1d1f34]{height:%?56?%;padding:%?10?%;margin-right:%?20?%}.he-header[data-v-ea1d1f34]{height:%?56?%}.he-header .he-title[data-v-ea1d1f34]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#555;margin-left:%?32?%}.he-body[data-v-ea1d1f34]{padding:%?10?% %?32?% 0 %?32?%}.he-body .he-item[data-v-ea1d1f34]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#222;padding:%?16?% %?24?%;background:#f7f7f7;border-radius:%?32?%;margin:0 %?16?% %?16?% 0}',""]),e.exports=t},"4e39":function(e,t,i){"use strict";var n;i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"he-page-content"},[i("v-uni-view",{staticClass:"he-search flex align-center"},[i("v-uni-view",{staticClass:"he-search__input flex align-center"},[i("v-uni-view",{staticClass:"he-search__icon iconfont iconsearchbar_search"}),i("v-uni-input",{staticClass:"flex-sub",attrs:{type:"text",focus:!0,"confirm-type":"search","placeholder-class":"he-placeholder",maxlength:40,placeholder:"输入商品名称搜索"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.keyword,callback:function(t){e.keyword="string"===typeof t?t.trim():t},expression:"keyword"}})],1),i("v-uni-text",{staticClass:"flex-sub he-search__text",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")])],1),e.$h.test.isEmpty(e.keywordList)?e._e():i("v-uni-view",{staticClass:"he-history"},[i("v-uni-view",{staticClass:"he-header flex justify-between align-center"},[i("v-uni-view",{staticClass:"he-title"},[e._v("历史搜索")]),i("v-uni-view",{staticClass:"he-clear"},[i("v-uni-view",{staticClass:"iconfont iconsearch_empty",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.emptyList.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"he-body flex flex-wrap"},e._l(e.keywordList,(function(t,n){return i("v-uni-text",{key:n,staticClass:"he-item",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.setKeyword(t)}}},[e._v(e._s(t))])})),1)],1)],1)},o=[]},5824:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("3f7e"),i("9b24");var n={name:"search",data:function(){return{keyword:"",keywordList:[],fromStr:"",couponId:null}},onLoad:function(e){this.keyword=e.keyword,this.fromStr=e.from,this.couponId=e.coupon_id,this.keywordList=this.getStorageSync("keyword_list")?this.getStorageSync("keyword_list"):[]},methods:{search:function(){if(!this.$h.test.isEmpty(this.keyword)){uni.setStorageSync("search_key",this.keyword);var e=this.getStorageSync("keyword_list");e=e||[],e.unshift(this.keyword),e=e.filter((function(e,t,i){return i.indexOf(e)===t})),uni.setStorageSync("keyword_list",e);var t="/plugins/task/search-list";this.couponId&&(t+="?coupon_id="+this.couponId),uni.redirectTo({url:t})}},setKeyword:function(e){this.keyword=e,uni.setStorageSync("search_key",e);var t="/plugins/task/search-list";this.couponId&&(t+="?coupon_id="+this.couponId),uni.redirectTo({url:t})},emptyList:function(){uni.removeStorageSync("keyword_list"),this.keywordList=[]}}};t.default=n},ab05:function(e,t,i){"use strict";i.r(t);var n=i("5824"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},b76a:function(e,t,i){var n=i("3ec4");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("b41b").default;a("31826575",n,!0,{sourceMap:!1,shadowMode:!1})},d597:function(e,t,i){"use strict";i.r(t);var n=i("4e39"),a=i("ab05");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("21c9");var r,s=i("522a"),c=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"ea1d1f34",null,!1,n["a"],r);t["default"]=c.exports}}]);