(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-address-edit"],{"0969":function(t,e,i){var a=i("a1a8");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-select-address[data-v-3d72099c]{height:63vh;padding:0 %?32?%}.he-header[data-v-3d72099c]{height:%?56?%;line-height:%?56?%;text-align:center;margin-top:%?16?%}.iconpopup_close[data-v-3d72099c]{font-size:%?28?%;width:%?28?%;height:%?28?%;line-height:1;color:#9d9d9d;margin-top:%?18?%}.he-header__title[data-v-3d72099c]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#999}.he-body[data-v-3d72099c]{border-bottom:%?1?% solid #e5e5e5;padding:0 %?8?%;margin-top:%?32?%}.he-body__item[data-v-3d72099c]{font-size:%?28?%;font-family:PingFang SC;font-weight:500;color:#222;margin-right:%?57?%;padding:%?15?% 0}.he-body__item-0[data-v-3d72099c]{border-bottom:%?4?% solid transparent}.he-body__item-1[data-v-3d72099c]{border-bottom-style:solid;border-bottom-width:%?4?%}[data-theme="red_theme"] .he-body__item-1[data-v-3d72099c]{border-color:#e60b30!important}[data-theme="purple_theme"] .he-body__item-1[data-v-3d72099c]{border-color:#8f2df3!important}[data-theme="blue_theme"] .he-body__item-1[data-v-3d72099c]{border-color:#33a7ff!important}[data-theme="green_theme"] .he-body__item-1[data-v-3d72099c]{border-color:#1fc551!important}[data-theme="orange_theme"] .he-body__item-1[data-v-3d72099c]{border-color:#ff7f00!important}[data-theme="golden_theme"] .he-body__item-1[data-v-3d72099c]{border-color:#caa45a!important}.he-footer[data-v-3d72099c]{height:calc(63vh - %?160?%)}.he-footer .he-scroll-view[data-v-3d72099c]{height:calc(63vh - %?160?%);padding-top:%?16?%}.he-scroll-item[data-v-3d72099c]{height:%?72?%;line-height:%?72?%;font-size:%?26?%;font-family:PingFang SC}.he-scroll-item-1[data-v-3d72099c]{font-weight:700}[data-theme="red_theme"] .he-scroll-item-1[data-v-3d72099c]{color:#e60b30!important}[data-theme="purple_theme"] .he-scroll-item-1[data-v-3d72099c]{color:#8f2df3!important}[data-theme="blue_theme"] .he-scroll-item-1[data-v-3d72099c]{color:#33a7ff!important}[data-theme="green_theme"] .he-scroll-item-1[data-v-3d72099c]{color:#1fc551!important}[data-theme="orange_theme"] .he-scroll-item-1[data-v-3d72099c]{color:#ff7f00!important}[data-theme="golden_theme"] .he-scroll-item-1[data-v-3d72099c]{color:#caa45a!important}.he-scroll-item-0[data-v-3d72099c]{font-weight:500;color:#222}',""]),t.exports=e},"0ca2":function(t,e,i){var a=i("4bf0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("06f1").default;n("b877afe8",a,!0,{sourceMap:!1,shadowMode:!1})},1348:function(t,e,i){"use strict";i.r(e);var a=i("4f19"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"1cc8":function(t,e,i){"use strict";i.r(e);var a=i("f3fa"),n=i("9c00");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("976e");var s,r=i("8261"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"788dfaa2",null,!1,a["a"],s);e["default"]=c.exports},"31fa":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("he-popup",{attrs:{mode:"bottom",borderRadius:16},model:{value:t.showModal,callback:function(e){t.showModal=e},expression:"showModal"}},[i("v-uni-view",{staticClass:"he-select-address",attrs:{"data-theme":t.theme}},[i("v-uni-view",{staticClass:"he-header"},[i("v-uni-text",{staticClass:"he-header__title"},[t._v("所在地址")]),i("v-uni-text",{staticClass:"iconfont iconpopup_close fr",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal=!1}}})],1),i("v-uni-view",{staticClass:"he-body flex align-center"},[i("v-uni-view",{staticClass:"he-body__item",class:0===t.active?"he-body__item-1":"he-body__item-0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.active=0}}},[t._v(t._s(t.province))]),-1!==t.provinceIndex?i("v-uni-view",{staticClass:"he-body__item",class:1===t.active?"he-body__item-1":"he-body__item-0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.active=1}}},[t._v(t._s(t.city))]):t._e(),-1!==t.cityIndex?i("v-uni-view",{staticClass:"he-body__item",class:2===t.active?"he-body__item-1":"he-body__item-0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.active=2}}},[t._v(t._s(t.district))]):t._e()],1),i("v-uni-view",{staticClass:"he-footer"},[t.list.length>0?[i("v-uni-scroll-view",{staticClass:"he-scroll-view",attrs:{"scroll-y":!0}},[t._l(t.list,(function(e,a){return 0===t.active?i("v-uni-view",{key:a,staticClass:"he-scroll-item",class:t.provinceIndex===a?"he-scroll-item-1":"he-scroll-item-0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.setActive("provinceIndex",a)}.apply(void 0,arguments)}}},[t._v(t._s(e.name))]):t._e()})),-1!==t.provinceIndex?[t._l(t.list[t.provinceIndex].list,(function(e,a){return 1===t.active?i("v-uni-view",{key:a,staticClass:"he-scroll-item",class:t.cityIndex===a?"he-scroll-item-1":"he-scroll-item-0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.setActive("cityIndex",a)}.apply(void 0,arguments)}}},[t._v(t._s(e.name))]):t._e()})),-1!==t.cityIndex?t._l(t.list[t.provinceIndex].list[t.cityIndex].list,(function(e,a){return 2===t.active?i("v-uni-view",{key:a,staticClass:"he-scroll-item",class:t.districtIndex===a?"he-scroll-item-1":"he-scroll-item-0",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),function(){t.setActive("districtIndex",a)}.apply(void 0,arguments)}}},[t._v(t._s(e.name))]):t._e()})):t._e()]:t._e()],2)]:t._e()],2)],1)],1)},o=[]},"35f8":function(t,e,i){var a=i("0969");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("06f1").default;n("351a76a4",a,!0,{sourceMap:!1,shadowMode:!1})},"4a9d":function(t,e,i){var a=i("9c6c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("06f1").default;n("f221a1d0",a,!0,{sourceMap:!1,shadowMode:!1})},"4bf0":function(t,e,i){var a=i("a1a8");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-switch[data-v-788dfaa2]{position:relative;display:inline-block;box-sizing:initial;width:%?72?%;height:%?40?%;background-color:#ccc;border-radius:%?20?%;-webkit-transition:background-color .3s;transition:background-color .3s}.he-switch__node[data-v-788dfaa2]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;position:absolute;top:50%;left:%?4?%;width:%?32?%;height:%?32?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-radius:100%;z-index:1;background-color:#fff;background-color:#fff;box-shadow:0 %?3?% %?1?% 0 rgba(0,0,0,.05),0 %?2?% %?2?% 0 rgba(0,0,0,.1),0 %?3?% %?3?% 0 rgba(0,0,0,.05);box-shadow:0 %?3?% %?1?% 0 rgba(0,0,0,.05),0 %?2?% %?2?% 0 rgba(0,0,0,.1),0 %?3?% %?3?% 0 rgba(0,0,0,.05);-webkit-transition:-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05),-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);-webkit-transition:-webkit-transform cubic-bezier(.3,1.05,.4,1.05);transition:-webkit-transform cubic-bezier(.3,1.05,.4,1.05);transition:transform cubic-bezier(.3,1.05,.4,1.05);transition:transform cubic-bezier(.3,1.05,.4,1.05),-webkit-transform cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05)}[data-theme="red_theme"] .he-switch--on[data-v-788dfaa2]{background-color:#e60b30!important}[data-theme="purple_theme"] .he-switch--on[data-v-788dfaa2]{background-color:#8f2df3!important}[data-theme="blue_theme"] .he-switch--on[data-v-788dfaa2]{background-color:#33a7ff!important}[data-theme="green_theme"] .he-switch--on[data-v-788dfaa2]{background-color:#1fc551!important}[data-theme="orange_theme"] .he-switch--on[data-v-788dfaa2]{background-color:#ff7f00!important}[data-theme="golden_theme"] .he-switch--on[data-v-788dfaa2]{background-color:#caa45a!important}.he-switch--on .he-switch__node[data-v-788dfaa2]{-webkit-transform:translateX(100%) translateY(-50%);transform:translateX(100%) translateY(-50%)}.he-switch--disabled[data-v-788dfaa2]{opacity:.4}',""]),t.exports=e},"4f19":function(t,e,i){"use strict";var a=i("47cb").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("6abc")),o=a(i("c2c4")),s=i("7736"),r={name:"he-select-address",components:{hePopup:o.default},props:{value:{type:Boolean},select:{type:Object,default:function(){return{province:"",city:"",district:""}}}},data:function(){return{active:0,province:"请选择",city:"请选择",district:"请选择",provinceIndex:-1,cityIndex:-1,districtIndex:-1}},computed:(0,n.default)({showModal:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},(0,s.mapGetters)("setting",{list:"addressJson"})),created:function(){this.getAddressJson()},methods:(0,n.default)((0,n.default)({},(0,s.mapActions)({getAddressJson:"setting/getAddress"})),{},{setActive:function(t,e){this[t]=e,"provinceIndex"===t?(this.active=1,this.province=this.list[e].name,this.city="请选择",this.district="请选择",this.cityIndex=-1,this.districtIndex=-1):"cityIndex"===t?(this.active=2,this.city=this.list[this.provinceIndex].list[e].name):(this.district=this.list[this.provinceIndex].list[this.cityIndex].list[e].name,this.showModal=!1,this.$emit("select",[{index:this.provinceIndex,name:this.province},{index:this.cityIndex,name:this.city},{index:e,name:this.district}]))}}),watch:{select:{handler:function(t){for(var e=t.province,i=t.city,a=t.district,n=0;n<this.list.length;n++)this.list[n].name===e&&(this.provinceIndex=n,this.province=this.list[n].name,this.active=0);if(this.list.length>0&&this.provinceIndex>-1){for(var o=0;o<this.list[this.provinceIndex].list.length;o++){var s=this.list[this.provinceIndex].list[o].name;s===i&&(this.cityIndex=o,this.city=s,this.active=1)}if(this.cityIndex>-1)for(var r=0;r<this.list[this.provinceIndex].list[this.cityIndex].list.length;r++){var c=this.list[this.provinceIndex].list[this.cityIndex].list[r].name;c===a&&(this.districtIndex=r,this.district=c,this.active=2)}}}}}};e.default=r},5178:function(t,e,i){"use strict";var a=i("4a9d"),n=i.n(a);n.a},"599d":function(t,e,i){"use strict";var a=i("35f8"),n=i.n(a);n.a},"79f7":function(t,e,i){"use strict";var a=i("47cb").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("3f70");var n=a(i("d743")),o=a(i("1cc8")),s={name:"address-edit",components:{heSelectAddress:n.default,heSwitch:o.default},data:function(){return{form:{name:"",mobile:"",province:"",city:"",district:"",address:"",status:0},id:null,isAddress:!1}},methods:{chooseAddress:function(){var t=this;uni.chooseAddress({success:function(e){t.form.name=e.userName,t.form.mobile=e.telNumber,t.form.province=e.provinceName,t.form.city=e.cityName,t.form.address=e.detailInfo,t.form.district=e.countyName},fail:function(e){t.$toError(e)}})},getAddress:function(t){var e=this;this.$heshop.address("get",t).then((function(t){e.form=t})).catch((function(t){e.$toError(t)}))},setArea:function(t){this.form.address=t.detail.value},setStatus:function(){this.form.status=0===this.form.status?1:0},submit:function(){var t=this;this.id?this.$heshop.address("put",this.id,this.form).then((function(){uni.setStorageSync(t.$storageKey.address,{form:t.form,id:t.id,type:"put"}),uni.navigateBack({delta:1})})).catch((function(e){t.$toError(e)})):this.$heshop.address("post",this.form).then((function(e){uni.setStorageSync(t.$storageKey.address,{form:t.form,id:e,type:"post"}),uni.navigateBack({delta:1})})).catch((function(e){t.$toError(e)}))},strikeOut:function(){var t=this;this.$heshop.address("delete",this.id).then((function(){uni.setStorageSync(t.$storageKey.address,{id:t.id,type:"delete"}),uni.navigateBack({delta:1})})).catch((function(e){t.$toError(e)}))},selectArea:function(t){this.form.province=t[0].name,this.form.city=t[1].name,this.form.district=t[2].name},editAddress:function(t){this.form.status=t}},onLoad:function(t){t.id&&(this.id=parseInt(t.id),uni.setNavigationBarTitle({title:"编辑收货地址"}))},watch:{id:function(t){this.getAddress(t)},selectList:function(t){this.form.province=t[0].name,this.form.city=t[1].name,this.form.district=t[2].name}}};e.default=s},"976e":function(t,e,i){"use strict";var a=i("0ca2"),n=i.n(a);n.a},"9c00":function(t,e,i){"use strict";i.r(e);var a=i("fc3b"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},"9c6c":function(t,e,i){var a=i("a1a8");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* start--主题色--start */\n/* end--主题色--end */.he-page-content[data-v-496d3c56]{padding:%?20?%}.he-box[data-v-496d3c56]{background:#fff;border-radius:%?16?%}.he-get-address[data-v-496d3c56]{height:%?96?%;line-height:%?96?%;padding:0 %?24?% 0 %?32?%;margin-bottom:%?16?%}.he-get-address .he-text[data-v-496d3c56]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222;margin-left:%?20?%}.iconbtn_arrow[data-v-496d3c56]{width:%?22?%;height:%?22?%;font-size:%?22?%;color:#bebebe}.iconaddress_wechataddress[data-v-496d3c56]{width:%?36?%;height:%?36?%;font-size:%?36?%;color:#46bb36}.he-info[data-v-496d3c56]{padding:%?16?% %?24?%;margin-bottom:%?16?%}.he-info__item[data-v-496d3c56]{height:%?100?%;border-bottom:%?1?% solid #e5e5e5}.he-item__label[data-v-496d3c56]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222}.he-item__value[data-v-496d3c56]{width:%?506?%}.he-area-text[data-v-496d3c56]{width:%?484?%}.he-placeholder[data-v-496d3c56]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#999}.he-info__itemOther[data-v-496d3c56]{padding:%?38?% 0 0 0}.he-info__itemOther .he-item__value[data-v-496d3c56]{height:%?127?%}.he-default[data-v-496d3c56]{height:%?96?%;padding:0 %?24?%}.he-default .he-text[data-v-496d3c56]{font-size:%?26?%;font-family:PingFang SC;font-weight:500;color:#222}.cu-btn[data-v-496d3c56]{width:%?710?%;height:%?80?%;border-radius:%?40?%;font-size:%?28?%;font-family:PingFang SC;font-weight:500}.he-save[data-v-496d3c56]{margin-top:%?80?%;color:#fff}[data-theme="red_theme"] .he-save[data-v-496d3c56]{background-color:#e60b30!important}[data-theme="purple_theme"] .he-save[data-v-496d3c56]{background-color:#8f2df3!important}[data-theme="blue_theme"] .he-save[data-v-496d3c56]{background-color:#33a7ff!important}[data-theme="green_theme"] .he-save[data-v-496d3c56]{background-color:#1fc551!important}[data-theme="orange_theme"] .he-save[data-v-496d3c56]{background-color:#ff7f00!important}[data-theme="golden_theme"] .he-save[data-v-496d3c56]{background-color:#caa45a!important}.he-delete[data-v-496d3c56]{background:#fff;border:%?1?% solid #ccc;color:#222;margin-top:%?24?%}',""]),t.exports=e},c4a3:function(t,e,i){"use strict";i.r(e);var a=i("d599"),n=i("dd8a");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("5178");var s,r=i("8261"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"496d3c56",null,!1,a["a"],s);e["default"]=c.exports},d599:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"he-page-content",attrs:{"data-theme":t.theme}},[i("v-uni-view",{staticClass:"he-box he-info"},[i("v-uni-view",{staticClass:"he-info__item flex align-center justify-between"},[i("v-uni-text",{staticClass:"he-item__label"},[t._v("收货人")]),i("v-uni-input",{staticClass:"he-item__value",attrs:{type:"text",maxlength:10,"placeholder-style":"font-size: 26rpx;font-family: PingFang SC;font-weight: 500;color: #999999;",placeholder:"请填写收货人姓名（最多10个字）"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("v-uni-view",{staticClass:"he-info__item flex align-center justify-between"},[i("v-uni-text",{staticClass:"he-item__label"},[t._v("手机号码")]),i("v-uni-input",{staticClass:"he-item__value",attrs:{type:"number",maxlength:11,"placeholder-style":"font-size: 26rpx;font-family: PingFang SC;font-weight: 500;color: #999999;",placeholder:"请填写手机号码（最多11个数字）"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),i("v-uni-view",{staticClass:"he-info__item flex align-center justify-between"},[i("v-uni-text",{staticClass:"he-item__label"},[t._v("所在地区")]),i("v-uni-view",{staticClass:"flex align-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.isAddress=!0}}},[t.form.province&&t.form.city&&t.form.district?i("v-uni-text",{staticClass:"he-item__value he-area-text"},[t._v(t._s(t.form.province)+"/"+t._s(t.form.city)+"/"+t._s(t.form.district))]):i("v-uni-text",{staticClass:"he-placeholder he-area-text"},[t._v("请选择所在地区")]),i("v-uni-view",{staticClass:"iconfont iconbtn_arrow"})],1)],1),i("v-uni-view",{staticClass:"he-info__itemOther flex justify-between"},[i("v-uni-view",{staticClass:"he-item__label"},[t._v("详细地址")]),i("v-uni-textarea",{staticClass:"he-item__value",attrs:{id:"textarea",value:t.form.address,"disable-default-padding":!0,"placeholder-style":"font-size: 26rpx;font-family: PingFang SC;font-weight: 500;color: #999999;",maxlength:50,placeholder:"如街道、小区、门牌号、楼栋号等"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.setArea.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"he-box he-default flex justify-between align-center"},[i("v-uni-view",{staticClass:"he-text"},[t._v("设为默认地址")]),i("he-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.editAddress.apply(void 0,arguments)}},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1),i("v-uni-button",{staticClass:"cu-btn he-save",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("保存并使用")]),t.$h.test.isEmpty(t.id)?t._e():i("v-uni-button",{staticClass:"cu-btn he-delete",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.strikeOut.apply(void 0,arguments)}}},[t._v("删除收货地址")]),i("he-select-address",{attrs:{select:t.form},on:{select:function(e){arguments[0]=e=t.$handleEvent(e),t.selectArea.apply(void 0,arguments)}},model:{value:t.isAddress,callback:function(e){t.isAddress=e},expression:"isAddress"}})],1)},o=[]},d743:function(t,e,i){"use strict";i.r(e);var a=i("31fa"),n=i("1348");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("599d");var s,r=i("8261"),c=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"3d72099c",null,!1,a["a"],s);e["default"]=c.exports},dd8a:function(t,e,i){"use strict";i.r(e);var a=i("79f7"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);e["default"]=n.a},f3fa:function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"he-switch",class:[1==t.value?"he-switch--on":"",t.disabled?"he-switch--disabled":""],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"he-switch__node node-class"})],1)},o=[]},fc3b:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c0e8");var a={name:"he-switch",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:!1},vibrateShort:{type:Boolean,default:!1},activeValue:{type:[Number,String,Boolean],default:!0},inactiveValue:{type:[Number,String,Boolean],default:!1}},methods:{onClick:function(){var t=this;this.disabled||(this.vibrateShort&&uni.vibrateShort(),this.$emit("input",!this.value),this.$nextTick((function(){t.$emit("change",t.value?t.activeValue:t.inactiveValue)})))}}};e.default=a}}]);