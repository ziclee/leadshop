(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-after-sales-records"],{"0763":function(t,e,a){var i=a("a3b7");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("b1203e32",i,!0,{sourceMap:!1,shadowMode:!1})},"078c":function(t,e,a){"use strict";var i=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("c2c4")),o={name:"he-empty-popup",props:{value:Boolean,item:Object,title:String,emptyStyle:Object},components:{hePopup:n.default},computed:{showModal:{get:function(){return this.value},set:function(t){this.$emit("input",t)}},style:function(){return this.emptyStyle}},methods:{confirm:function(){this.showModal=!1,this.$emit("confirm",this.item)},cancel:function(){this.showModal=!1,this.$emit("cancel",this.item)}}};e.default=o},"104d":function(t,e,a){"use strict";a.r(e);var i=a("e015"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},1086:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"he-page-content",attrs:{"data-theme":t.theme}},[t._l(t.list,(function(e,i){return a("v-uni-view",{key:i,staticClass:"he-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.navigateTo("/pages/order/after-sales-details?id="+e.id)}}},[a("v-uni-view",{staticClass:"he-item__top flex justify-between align-center"},[a("v-uni-view",{staticClass:"he-status__sign"},[a("v-uni-view",{staticClass:"iconfont he-sign",class:0===e.type?"iconaftersalesdetails-refund":1===e.type?"iconaftersalesdetails-returngoods":2===e.type?"iconaftersalesdetails-exchangegoods":null}),a("v-uni-view",{staticClass:"he-text"},[t._v(t._s(t._f("getType")(e.type)))])],1),a("v-uni-text",{staticClass:"he-status"},[t._v(t._s(t._f("getStatus")(e.status)))])],1),a("v-uni-view",{staticClass:"he-item__body flex"},[a("he-image",{staticClass:"he-item__image",attrs:{src:e.goods.goods_image,"image-style":{borderRadius:"8rpx"},width:160,height:160}}),a("v-uni-view",{staticClass:"he-item__content"},[a("v-uni-view",{staticClass:"he-item__name he-line-1"},[t._v(t._s(e.goods.goods_name))]),a("v-uni-view",{staticClass:"he-item__attr"},[t._v(t._s(e.goods.show_goods_param))]),a("v-uni-view",{staticClass:"he-item__number-price"},[a("v-uni-text",{staticClass:"he-item__number"},[t._v("x"+t._s(e.return_number))]),2!==e.type?a("v-uni-text",{staticClass:"he-item__price"},[t._v("退款：¥"+t._s(e.return_amount))]):t._e()],1)],1)],1),2!==e.type&&200===e.status||e.status>=200||121===e.status||131===e.status?a("v-uni-view",{staticClass:"he-item__footer flex align-center",class:2!==e.type&&200===e.status?"justify-between":"justify-end"},[2!==e.type&&200===e.status?a("v-uni-view",[a("v-uni-text",{staticClass:"he-item__text"},[t._v("成功退款：")]),a("v-uni-text",{staticClass:"he-item__price"},[t._v("¥"+t._s(e.actual_refund))])],1):t._e(),a("v-uni-view",[e.status>=200?a("v-uni-button",{staticClass:"cu-btn he-btn-over",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.setClose(e)}}},[t._v("删除记录")]):t._e(),121===e.status||131===e.status?a("v-uni-button",{staticClass:"cu-btn he-btn-fill",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.navigateTo("/pages/order/fill-return-information?id="+e.id+"&mobile="+e.return_address.mobile)}}},[t._v("填写退货信息")]):t._e()],1)],1):t._e()],1)})),t.isNothing?a("he-no-content-yet",{attrs:{text:"暂无相关记录",image:t.ipAddress+"/order-background-empty.png"}}):t._e(),a("he-empty-popup",{attrs:{"empty-style":{height:"146rpx",lineHeight:"146rpx"},title:"确认要删除这条售后记录？",item:t.setItem},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.deleteConfirm.apply(void 0,arguments)}},model:{value:t.isDel,callback:function(e){t.isDel=e},expression:"isDel"}}),t.list.length>0?a("he-load-more",{attrs:{status:t.loadStatus}}):t._e(),a("v-uni-view",{staticClass:"safe-area-inset-bottom"})],2)},o=[]},4989:function(t,e,a){"use strict";a.r(e);var i=a("1086"),n=a("104d");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("e62e");var r,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"3ddf5737",null,!1,i["a"],r);e["default"]=s.exports},"50ac":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"he-no-content-yet",props:{text:{type:String,default:function(){return"暂无内容"}},image:{type:String,default:""}},computed:{newImage:function(){return this.image?this.image:this.ipAddress+"/goods-imgae-no.png"}}};e.default=i},7669:function(t,e,a){"use strict";var i=a("0763"),n=a.n(i);n.a},8430:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-page-content[data-v-3ddf5737]{padding:%?20?% %?20?% %?4?% %?20?%}.he-item[data-v-3ddf5737]{width:%?710?%;background:#fff;border-radius:%?16?%;padding:%?20?% %?24?%;margin-bottom:%?16?%}.he-item__top[data-v-3ddf5737]{height:%?48?%}.he-item__top .he-status[data-v-3ddf5737]{font-size:%?24?%;font-family:PingFang SC;font-weight:500}[data-theme="red_theme"] .he-item__top .he-status[data-v-3ddf5737]{color:#e60b30!important}[data-theme="purple_theme"] .he-item__top .he-status[data-v-3ddf5737]{color:#8f2df3!important}[data-theme="blue_theme"] .he-item__top .he-status[data-v-3ddf5737]{color:#33a7ff!important}[data-theme="green_theme"] .he-item__top .he-status[data-v-3ddf5737]{color:#1fc551!important}[data-theme="orange_theme"] .he-item__top .he-status[data-v-3ddf5737]{color:#ff7f00!important}[data-theme="golden_theme"] .he-item__top .he-status[data-v-3ddf5737]{color:#caa45a!important}.he-status__sign[data-v-3ddf5737]{position:relative;height:%?48?%}.he-item__top .he-sign[data-v-3ddf5737]{display:inline-block;font-size:%?26?%;height:%?26?%;width:%?26?%;line-height:%?48?%;margin-right:%?8?%}[data-theme="red_theme"] .he-item__top .he-sign[data-v-3ddf5737]{color:#e60b30!important}[data-theme="purple_theme"] .he-item__top .he-sign[data-v-3ddf5737]{color:#8f2df3!important}[data-theme="blue_theme"] .he-item__top .he-sign[data-v-3ddf5737]{color:#33a7ff!important}[data-theme="green_theme"] .he-item__top .he-sign[data-v-3ddf5737]{color:#1fc551!important}[data-theme="orange_theme"] .he-item__top .he-sign[data-v-3ddf5737]{color:#ff7f00!important}[data-theme="golden_theme"] .he-item__top .he-sign[data-v-3ddf5737]{color:#caa45a!important}.he-item__top .he-text[data-v-3ddf5737]{display:inline-block;font-size:%?26?%;line-height:%?48?%;font-family:PingFang SC;font-weight:500;color:#222;width:%?200?%}.he-item__body[data-v-3ddf5737]{padding:%?19?% 0}.he-item__image[data-v-3ddf5737]{margin-right:%?24?%}.he-item__content[data-v-3ddf5737]{width:%?478?%}.he-item__name[data-v-3ddf5737]{margin:%?9?% 0 %?12?% 0;font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222;line-height:1.3}.he-item__attr[data-v-3ddf5737]{font-size:%?22?%;font-family:PingFang SC;font-weight:500;color:#999;margin-bottom:%?11?%}.he-item__number-price[data-v-3ddf5737]{font-family:PingFang SC;font-weight:500}.he-item__number[data-v-3ddf5737]{font-size:%?22?%;color:#999;margin-right:%?23?%}.he-item__number-price .he-item__price[data-v-3ddf5737]{font-size:%?24?%;color:#222}.he-item__footer[data-v-3ddf5737]{height:%?80?%;padding:%?12?%}.cu-btn[data-v-3ddf5737]{height:%?56?%;background:#fff;border-radius:%?28?%;font-size:%?24?%;font-family:PingFang SC;font-weight:500}.he-btn-over[data-v-3ddf5737]{border:%?1?% solid #ccc;border-radius:%?28?%;color:#222}.he-btn-fill[data-v-3ddf5737]{margin-left:%?16?%;border-style:solid;border-width:%?1?%}[data-theme="red_theme"] .he-btn-fill[data-v-3ddf5737]{color:#e60b30!important}[data-theme="purple_theme"] .he-btn-fill[data-v-3ddf5737]{color:#8f2df3!important}[data-theme="blue_theme"] .he-btn-fill[data-v-3ddf5737]{color:#33a7ff!important}[data-theme="green_theme"] .he-btn-fill[data-v-3ddf5737]{color:#1fc551!important}[data-theme="orange_theme"] .he-btn-fill[data-v-3ddf5737]{color:#ff7f00!important}[data-theme="golden_theme"] .he-btn-fill[data-v-3ddf5737]{color:#caa45a!important}[data-theme="red_theme"] .he-btn-fill[data-v-3ddf5737]{border-color:#e60b30!important}[data-theme="purple_theme"] .he-btn-fill[data-v-3ddf5737]{border-color:#8f2df3!important}[data-theme="blue_theme"] .he-btn-fill[data-v-3ddf5737]{border-color:#33a7ff!important}[data-theme="green_theme"] .he-btn-fill[data-v-3ddf5737]{border-color:#1fc551!important}[data-theme="orange_theme"] .he-btn-fill[data-v-3ddf5737]{border-color:#ff7f00!important}[data-theme="golden_theme"] .he-btn-fill[data-v-3ddf5737]{border-color:#caa45a!important}.he-item__text[data-v-3ddf5737]{font-size:%?24?%;font-family:PingFang SC;font-weight:500;color:#222}.he-item__footer .he-item__price[data-v-3ddf5737]{font-size:%?26?%;font-family:PingFang SC;font-weight:700;margin-left:%?16?%}[data-theme="red_theme"] .he-item__footer .he-item__price[data-v-3ddf5737]{color:#e60b30!important}[data-theme="purple_theme"] .he-item__footer .he-item__price[data-v-3ddf5737]{color:#8f2df3!important}[data-theme="blue_theme"] .he-item__footer .he-item__price[data-v-3ddf5737]{color:#33a7ff!important}[data-theme="green_theme"] .he-item__footer .he-item__price[data-v-3ddf5737]{color:#1fc551!important}[data-theme="orange_theme"] .he-item__footer .he-item__price[data-v-3ddf5737]{color:#ff7f00!important}[data-theme="golden_theme"] .he-item__footer .he-item__price[data-v-3ddf5737]{color:#caa45a!important}',""]),t.exports=e},"8eb4":function(t,e,a){"use strict";a.r(e);var i=a("078c"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"8f88":function(t,e,a){var i=a("8430");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("f0fe0304",i,!0,{sourceMap:!1,shadowMode:!1})},9749:function(t,e,a){var i=a("b407");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("74ffa2ca",i,!0,{sourceMap:!1,shadowMode:!1})},a3b7:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-empty-popup[data-v-562880c0]{width:%?510?%;background:#fff;overflow:hidden}.he-top[data-v-562880c0]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#222;text-align:center;border-bottom:%?1?% solid #e5e5e5}.he-bottom[data-v-562880c0]{height:%?90?%;position:relative}.he-line[data-v-562880c0]{width:%?1?%;height:%?88?%;border:%?1?% solid #e5e5e5;position:absolute;top:0;left:50%}.cu-btn[data-v-562880c0]{width:%?254.5?%;height:%?87?%;background:transparent;font-size:%?28?%;font-family:PingFang SC;font-weight:500;border-radius:0}.cu-btn[data-v-562880c0]:first-child{color:#666}[data-theme="red_theme"] .cu-btn[data-v-562880c0]:last-child{color:#e60b30!important}[data-theme="purple_theme"] .cu-btn[data-v-562880c0]:last-child{color:#8f2df3!important}[data-theme="blue_theme"] .cu-btn[data-v-562880c0]:last-child{color:#33a7ff!important}[data-theme="green_theme"] .cu-btn[data-v-562880c0]:last-child{color:#1fc551!important}[data-theme="orange_theme"] .cu-btn[data-v-562880c0]:last-child{color:#ff7f00!important}[data-theme="golden_theme"] .cu-btn[data-v-562880c0]:last-child{color:#caa45a!important}',""]),t.exports=e},aa66:function(t,e,a){"use strict";a.r(e);var i=a("c2bf"),n=a("e1cb");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("fbf9");var r,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"7022232c",null,!1,i["a"],r);e["default"]=s.exports},ac20:function(t,e,a){"use strict";a.r(e);var i=a("e5ea"),n=a("8eb4");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("7669");var r,d=a("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"562880c0",null,!1,i["a"],r);e["default"]=s.exports},b407:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".he-no-content-yet[data-v-7022232c]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#999;line-height:1.3;text-align:center;margin-top:%?40?%}.he-empty__image[data-v-7022232c]{width:%?320?%;height:%?320?%}",""]),t.exports=e},c2bf:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"he-no-content-yet"},[a("v-uni-image",{staticClass:"he-empty__image",attrs:{src:t.newImage}}),a("v-uni-view",[t._v(t._s(t.text))])],1)},o=[]},e015:function(t,e,a){"use strict";var i=a("4ea4");a("4160"),a("d3b7"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("2909")),o=i(a("aa66")),r=i(a("ac20")),d=i(a("4d92")),s={name:"after-sales-records",components:{heNoContentYet:o.default,heEmptyPopup:r.default,heLoadMore:d.default},data:function(){return{list:[],page:{current:1,count:1,size:10},isNothing:!1,setItem:null,isDel:!1,loadStatus:"loadmore"}},filters:{getStatus:function(t){switch(t){case 100:case 102:return"待卖家审核";case 121:case 131:return"待买家退货";case 122:return"待卖家收货退款";case 133:return"待买家收货";case 101:return"卖家拒绝";case 111:return"待卖家退款";case 132:return"待卖家收货且发货";case 200:return"已完成";case 201:return"已完成(已拒绝)"}},getType:function(t){return 0===t?"仅退款":1===t?"退货退款":2===t?"换货":void 0}},methods:{navigateTo:function(t){uni.navigateTo({url:t})},getList:function(){var t=this;return new Promise((function(e){t.$heshop.orderafter("get").page(t.page.current,t.page.size).then((function(a){var i=a.data,n=a.headers;e(i),t.page={current:+n["x-pagination-current-page"],count:+n["x-pagination-page-count"],size:+n["x-pagination-per-page"]}})).catch((function(e){t.$toError(e)}))}))},setClose:function(t){this.isDel=!0,this.setItem=t},deleteConfirm:function(t){var e=this;this.$heshop.orderafter("delete",t.id).then((function(){e.list.forEach((function(a,i){a.id===t.id&&e.$delete(e.list,i)})),e.$h.toast("删除订单成功")})).catch((function(t){e.$toError(t)}))}},onLoad:function(){var t=this;this.getList().then((function(e){t.list=e,t.isNothing=0===t.list.length,t.loadStatus=t.list.length<t.page.size?"nomore":"loadmore"}))},onReachBottom:function(){var t=this;this.page.count>this.page.current?(this.page.current++,this.loadStatus="loading",this.getList().then((function(e){var a;(a=t.list).push.apply(a,(0,n.default)(e)),t.loadStatus="loadmore"}))):this.loadStatus="nomore"},watch:{"$store.state.after.cancel_after":{handler:function(t){var e=this;if(t.bool)for(var a=0;a<e.list.length;a++)if(e.list[a].id===t.order_id){e.$delete(e.list,a),e.$store.commit("after/cancelAfter",{bool:!1,order_id:null});break}}}}};e.default=s},e1cb:function(t,e,a){"use strict";a.r(e);var i=a("50ac"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},e5ea:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("he-popup",{attrs:{mode:"center","border-radius":16,zoom:!1},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[a("v-uni-view",{staticClass:"he-empty-popup flex flex-direction",attrs:{"data-theme":t.theme}},[a("v-uni-view",{staticClass:"he-top",style:[t.style]},[t._v(t._s(t.title))]),a("v-uni-view",{staticClass:"he-bottom flex justify-between align-end"},[a("v-uni-button",{staticClass:"cu-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.cancel.apply(void 0,arguments)}}},[t._v("取消")]),a("v-uni-view",{staticClass:"he-line"}),a("v-uni-button",{staticClass:"cu-btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)},o=[]},e62e:function(t,e,a){"use strict";var i=a("8f88"),n=a.n(i);n.a},fbf9:function(t,e,a){"use strict";var i=a("9749"),n=a.n(i);n.a}}]);