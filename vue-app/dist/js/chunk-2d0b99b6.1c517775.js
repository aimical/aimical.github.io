(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b99b6"],{3454:function(t,o,n){"use strict";n.r(o);var a=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[n("Head",{attrs:{title:"商品详情",show:!0}}),t.obj?n("div",[n("img",{staticClass:"img",attrs:{src:t.obj.img,alt:""}}),n("h4",{staticClass:"h4"},[t._v(t._s(t.obj.name)+" -- "+t._s(t.obj.price)+" / type = "+t._s(t.obj.type.text))]),t._v("\n    数量 "),n("van-stepper",{model:{value:t.count,callback:function(o){t.count=o},expression:"count"}})],1):t._e(),n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.callOne}}),n("van-goods-action-icon",{attrs:{icon:"cart-o",info:t.total,text:"购物车"},on:{click:t.gotoCart}}),n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addToshopcar}}),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.paynow}})],1)],1)},e=[],s=n("628c"),c={data:function(){return{obj:null,count:0,total:0}},mounted:function(){var t=this;this.$axios.get("/vue/getGoodDetail",{params:{goodId:this.$route.params.goodId}}).then(function(o){t.obj=o.data.result}),this.$axios.post("vue/getCartInfo",{username:sessionStorage.userInfo?JSON.parse(sessionStorage.userInfo).username:""}).then(function(o){console.log(o.data),t.total=o.data.total})},methods:{callOne:function(){Object(s["a"])("客服")},gotoCart:function(){Object(s["a"])("去购物车")},addToshopcar:function(){var t=this;this.$axios.post("vue/addCart",{username:sessionStorage.userInfo?JSON.parse(sessionStorage.userInfo).username:"",goodId:this.$route.params.goodId,goodInfo:this.obj,count:this.count}).then(function(o){console.log(o.data.result),t.total+=t.count})},paynow:function(){Object(s["a"])("立即购买")}}},i=c,r=n("2877"),u=Object(r["a"])(i,a,e,!1,null,null,null);o["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0b99b6.1c517775.js.map