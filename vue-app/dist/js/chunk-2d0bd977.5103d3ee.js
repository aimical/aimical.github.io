(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd977"],{"2d3b":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Head",{attrs:{title:"商品搜索",show:!0}}),o("van-search",{attrs:{placeholder:"请输入搜索关键词","show-action":""},on:{search:e.onSearch,cancel:e.onCancel},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}}),e.seachGoods.length>0?o("list",{attrs:{goods:e.seachGoods},on:{changeallgoods:e.getNewSearchGoods}}):e._e()],1)},n=[],c=(o("8e6e"),o("ac6a"),o("456d"),o("bd86")),s=o("2f62");function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(o,!0).forEach(function(t){Object(c["a"])(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var d={computed:i({},Object(s["d"])({seachGoods:"searchList"}),{keyword:{get:function(){return this.$store.state.keyword},set:function(e){this.$store.commit("getKeyword",e)}}}),data:function(){return{}},mounted:function(){},methods:i({},Object(s["b"])(["getSearchList"]),{onSearch:function(){this.getSearchList({url:"vue/getGoods",params:{keyword:this.keyword}})},onCancel:function(){console.log("用户点击搜索框右侧取消按钮时触发")},getNewSearchGoods:function(){this.seachGoods.reverse()}})},u=d,l=o("2877"),h=Object(l["a"])(u,r,n,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0bd977.5103d3ee.js.map