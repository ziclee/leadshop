(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["promoter-level"],{"0e28":function(t,n,e){"use strict";e.d(n,"q",(function(){return u})),e.d(n,"t",(function(){return s})),e.d(n,"a",(function(){return d})),e.d(n,"L",(function(){return f})),e.d(n,"k",(function(){return l})),e.d(n,"j",(function(){return m})),e.d(n,"z",(function(){return h})),e.d(n,"x",(function(){return p})),e.d(n,"u",(function(){return g})),e.d(n,"y",(function(){return v})),e.d(n,"c",(function(){return w})),e.d(n,"v",(function(){return P})),e.d(n,"w",(function(){return b})),e.d(n,"D",(function(){return _})),e.d(n,"d",(function(){return y})),e.d(n,"i",(function(){return k})),e.d(n,"C",(function(){return I})),e.d(n,"B",(function(){return N})),e.d(n,"E",(function(){return A})),e.d(n,"e",(function(){return T})),e.d(n,"f",(function(){return x})),e.d(n,"A",(function(){return O})),e.d(n,"h",(function(){return E})),e.d(n,"F",(function(){return G})),e.d(n,"l",(function(){return C})),e.d(n,"n",(function(){return L})),e.d(n,"I",(function(){return U})),e.d(n,"m",(function(){return X})),e.d(n,"H",(function(){return $})),e.d(n,"J",(function(){return j})),e.d(n,"p",(function(){return z})),e.d(n,"b",(function(){return S})),e.d(n,"K",(function(){return R})),e.d(n,"G",(function(){return q})),e.d(n,"s",(function(){return B})),e.d(n,"g",(function(){return J})),e.d(n,"o",(function(){return K})),e.d(n,"r",(function(){return D}));e("2769"),e("ecf1"),e("f49b"),e("b1fa");var o=e("430a"),r=(e("6afd"),e("2070"),e("eb62"),["X-PAGINATION-TOTAL-COUNT","X-PAGINATION-PER-PAGE","X-PAGINATION-PAGE-COUNT","X-PAGINATION-CURRENT-PAGE"]);function i(t){Object.keys(t.headers).forEach((function(n){t.headers[n.toUpperCase()]=t.headers[n],delete t.headers[n]}));var n={current:1,pageCount:1,totalCount:1};r.forEach((function(n){Object.keys(t.headers).map((function(e){n===e&&(t.headers[e]=parseInt(t.headers[e]))}))})),n.current=t.headers["X-PAGINATION-CURRENT-PAGE"],n.pageCount=t.headers["X-PAGINATION-PAGE-COUNT"],n.totalCount=t.headers["X-PAGINATION-TOTAL-COUNT"],t.pagination=n}e("7c98");var c=o["default"].prototype.$heshop,a=o["default"].prototype.$message.error;function u(t){var n=t.tabKey,e=void 0===n?"all":n,o=t.page,r=void 0===o?1:o,u=t.search,s=void 0===u?"":u,d=t.sort,f=void 0===d?{}:d,l=t.time_start,m=void 0===l?0:l,h=t.time_end,p=void 0===h?0:h,g=t.cost_status,v=void 0===g?null:g,w=t.is_promoter,P=void 0===w?null:w,b=t.group,_=void 0===b?[]:b,y=t.price_start,k=void 0===y?"":y,I=t.price_end,N=void 0===I?"":I;return new Promise((function(t){c.search("post",{include:"goods"},{keyword:{tab_key:e,search:s,sort:f,time_start:m,time_end:p,is_promoter:P,cost_status:v,group:_,price_start:k,price_end:N}}).page(r,10).then((function(n){i(n);var e=n.data,o=n.pagination;t({data:e,pagination:o})})).catch((function(t){a(t.data.message)}))}))}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return new Promise((function(r,i){c.promotergoods("put",{type:t,id:n,tab_key:e},{is_promoter:o}).then(r).catch(i)}))}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n,e){c.promoter("post",t).then(n).catch((function(t){a(t.data.message),e(t)}))}))}function f(t){return new Promise((function(n,e){c.promoter("get",{behavior:"add_search",search:t}).then((function(t){n(t)})).catch((function(t){a(t.data.message),e(t)}))}))}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{keyword:"",begin_time:null,end_time:null,type:null,level:null};return new Promise((function(e){c.finance("get",n).page(t,10).then((function(t){i(t);var n=t.data,o=t.pagination;e({data:n,pagination:o})})).catch((function(t){a(t.data.message)}))}))}function m(t,n,e){return t=parseInt(t),new Promise((function(o,r){c.finance("put",t,{status:n,content:e}).then(o).catch((function(t){r(t)}))}))}function h(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(e){c.search("post",{include:"promoterorder"},n).page(t,10).then((function(t){i(t);var n=t.data,o=t.pagination;e({data:n,pagination:o})})).catch((function(t){a(t.data.message)}))}))}function p(){return new Promise((function(t){c.promoterlevel("get").then(t).catch((function(t){a(t.data.message)}))}))}function g(t){return t=parseInt(t),new Promise((function(n){c.promoterlevel("delete",t).then(n).catch((function(t){a(t.data.message)}))}))}function v(){return new Promise((function(t){c.promoterlevel("get",{behavior:"option"}).then(t).catch((function(t){a(t.data.message)}))}))}function w(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n,e){c.promoterlevel("post",t).then(n).catch((function(t){a(t.data.message),e(t)}))}))}function P(t){return t=parseInt(t),new Promise((function(n){c.promoterlevel("get",t).then(n).catch((function(t){a(t.data.message)}))}))}function b(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t=parseInt(t),new Promise((function(e,o){c.promoterlevel("put",t,n).then(e).catch((function(t){a(t.data.message),o(t)}))}))}function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0;return new Promise((function(e){c.promotermaterial("get",n).page(t,10).then((function(t){i(t);var n=t.data,o=t.pagination;e({data:n,pagination:o})})).catch((function(t){a(t.data.message)}))}))}function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n){c.promotermaterial("post",t).then(n).catch((function(t){a(t.data.message)}))}))}function k(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(e){c.promotermaterial("put",t,n).then(e).catch((function(t){a(t.data.message)}))}))}function I(t){return new Promise((function(n){c.promotermaterial("get",t).then(n).catch((function(t){a(t.data.message)}))}))}function N(t){return new Promise((function(n){c.promotermaterial("delete",t).then(n).catch((function(t){a(t.data.message)}))}))}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(e){c.promoterzone("get",n).page(t,10).then((function(t){i(t);var n=t.data,o=t.pagination;e({data:n,pagination:o})})).catch((function(t){a(t.data.message)}))}))}function T(t){return new Promise((function(n){c.promoterzone("post",t).then(n).catch((function(t){a(t.data.message)}))}))}function x(t){return new Promise((function(n){c.promoterzone("delete",t).then(n).catch((function(t){a(t.data.message)}))}))}function O(t){return t=parseInt(t),new Promise((function(n){c.promoterzone("get",t).then((function(t){n(t)})).catch((function(t){a(t.data.message)}))}))}function E(t,n){return t=parseInt(t),new Promise((function(e,o){c.promoterzone("put",t,n).then(e).catch((function(t){o(t),a(t.data.message)}))}))}function G(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n,e){c.setting("post",{keyword:"commission_setting",content:t}).then(n).catch((function(t){e(t)}))}))}function C(){return new Promise((function(t,n){c.search("post",{include:"setting"},{keyword:"commission_setting"}).then(t).catch((function(t){a(t.data.message),n()}))}))}function L(){return new Promise((function(t,n){c.search("post",{include:"setting"},{keyword:"promoter_setting"}).then(t).catch((function(t){a(t.data.message),n()}))}))}function U(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n,e){c.setting("post",{keyword:"promoter_setting",content:t}).then(n).catch((function(t){e(t)}))}))}function X(){return new Promise((function(t,n){c.search("post",{include:"setting"},{keyword:"promoter_rank"}).then(t).catch((function(t){a(t.data.message),n()}))}))}function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n,e){c.setting("post",{keyword:"promoter_rank",content:t}).then(n).catch((function(t){e(t)}))}))}function j(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n,e){c.setting("post",{keyword:"promoter_recruit_make",content:t}).then(n).catch((function(t){e(t)}))}))}function z(){return new Promise((function(t,n){c.search("post",{include:"setting"},{keyword:"promoter_recruit_make"}).then((function(n){t(n.content)})).catch((function(t){a(t.data.message),n()}))}))}function S(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(o,r){c.promoter("put",{id:t,behavior:n},e).then(o).catch((function(t){a(t.data.message),r()}))}))}function R(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{uid:"",mobile:""};return new Promise((function(n,e){c.promoter("get",{behavior:"transfer_search",from_uid:t.uid,mobile:t.mobile}).then(n).catch((function(t){a(t.data.message),e(t)}))}))}function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(n,e){c.setting("post",{keyword:"promoter_page_setting",content:t}).then(n).catch((function(t){a(t.data.message),e(t)}))}))}function B(){return new Promise((function(t,n){c.search("post",{include:"setting"},{keyword:"promoter_page_setting"}).then((function(n){t(n.content)})).catch((function(t){a(t.data.message),n(t)}))}))}function J(t,n){return new Promise((function(e,o){c.promoter("put",parseInt(t),{level:n}).then(e).catch((function(t){a(t.data.message),o(t)}))}))}function K(t){return new Promise((function(n,e){c.qrcode("post",t).then(n).catch((function(t){a(t.data.message),e(t)}))}))}function D(){return new Promise((function(t,n){c.group("get",{include:"goods"}).then((function(n){t(n)})).catch((function(t){a(t.data.message),n(t)}))}))}},"34da":function(t,n,e){"use strict";e.r(n);e("e1d4");var o,r,i=e("0e28"),c={data:function(){return{list:[]}},methods:{routerLevelEditor:function(t){var n={};t&&(n.id=t.id),this.$router.push({path:"/promoter/level-editor",query:n})},levelList:function(){var t=this;Object(i["x"])().then((function(n){t.list=n}))},delItem:function(t,n){var e=this;this.$confirm("是否确认删除此分销等级？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then((function(){Object(i["u"])(t.id).then((function(){e.$delete(e.list,n)}))})).catch((function(){}))},routerPromoterIndex:function(t){this.$router.push({path:"/promoter/index",query:{level:t.level}})}},mounted:function(){this.levelList()},render:function(){var t=arguments[0],n=this;return t("div",{class:"le-main"},[t("el-button",{attrs:{type:"primary"},on:{click:n.routerLevelEditor}},["添加分销商等级"]),t("el-table",{attrs:{data:n.list,"row-class-name":"le-table-row"},class:"le-card"},[t("el-table-column",{attrs:{label:"等级权重",prop:"level"}}),t("el-table-column",{attrs:{label:"等级名称",prop:"name"}}),t("el-table-column",{attrs:{label:"升级方式","min-width":"156px"},scopedSlots:{default:function(t){var n=t.row.update_type,e=t.row.is_auto;return 0===e?"不允许自动升级":1===n?"满足任意条件":2===n?"满足全部条件":void 0}}}),t("el-table-column",{attrs:{label:"分销商数","min-width":"156px"},scopedSlots:{default:function(e){return t("span",{class:"le-theme--color",on:{click:n.routerPromoterIndex.bind(n,e.row)}},[e.row.promoter_count])}}}),t("el-table-column",{attrs:{label:"一级佣金比例","min-width":"156px"},scopedSlots:{default:function(t){return"".concat(Number(t.row.first),"%")}}}),t("el-table-column",{attrs:{label:"二级佣金比例","min-width":"156px"},scopedSlots:{default:function(t){return"".concat(Number(t.row.second),"%")}}}),t("el-table-column",{attrs:{label:"三级佣金比例","min-width":"156px"},scopedSlots:{default:function(t){return"".concat(Number(t.row.third),"%")}}}),t("el-table-column",{attrs:{label:"操作","min-width":"156px"},scopedSlots:{default:function(e){return t("div",{class:"le-table-operate flex align-center"},[t("el-button",{attrs:{type:"text"},on:{click:n.routerLevelEditor.bind(n,e.row)}},["编辑"]),function(){if(0===e.row.promoter_count)return[[t("span",{class:"le-line"})],[t("el-button",{attrs:{type:"text"},on:{click:n.delItem.bind(n,e.row,e.$index)}},["删除"])]]}()])}}})])])}},a=c,u=(e("4efa"),e("4ac2")),s=Object(u["a"])(a,o,r,!1,null,"c8f3fe80",null);n["default"]=s.exports},"4efa":function(t,n,e){"use strict";e("ddca")},ddca:function(t,n,e){}}]);