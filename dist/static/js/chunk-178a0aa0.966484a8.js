(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-178a0aa0"],{2017:function(n,t,i){"use strict";var e=i("b12d"),a=i.n(e);a.a},"9ed6":function(n,t,i){"use strict";i.r(t);var e=function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"login-container"},[i("div",{staticClass:"container"},[i("button",{staticClass:"btn btn-primary btn-margin",on:{click:function(t){return t.preventDefault(),n.login(t)}}},[n._v("\n      Login\n    ")])])])},a=[],c={name:"Login",data:function(){return{isAuthenticated:!1}},methods:{login:function(){this.$auth.login()},handleLoginEvent:function(n){this.isAuthenticated=n.loggedIn,this.$router.push({path:this.redirect||"/"})}}},o=c,s=(i("2017"),i("e85f"),i("2877")),u=Object(s["a"])(o,e,a,!1,null,"3602537c",null);t["default"]=u.exports},b12d:function(n,t,i){},e85f:function(n,t,i){"use strict";var e=i("f4cb"),a=i.n(e);a.a},f4cb:function(n,t,i){}}]);