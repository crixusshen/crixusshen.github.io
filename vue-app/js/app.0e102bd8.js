(function(e){function t(t){for(var n,s,o=t[0],l=t[1],u=t[2],v=0,f=[];v<o.length;v++)s=o[v],a[s]&&f.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},4805:function(e,t,r){"use strict";var n=r("897e"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container",attrs:{id:"container"}},[e._m(0),r("div",{staticClass:"page input js_show"},[r("div",{staticClass:"page__bd"},[r("div",{staticClass:"weui-cells__title"},[e._v("Vue注册桥接并授权")]),r("div",{staticClass:"weui-cells weui-cells_form"},[r("div",{staticClass:"weui-cell"},[e._m(1),r("div",{staticClass:"weui-cell__bd"},[r("input",{staticClass:"weui-input",attrs:{id:"token",type:"text"},domProps:{value:e.token}})])]),r("div",{staticClass:"weui-cell"},[e._m(2),r("div",{staticClass:"weui-cell__bd"},[r("input",{staticClass:"weui-input",attrs:{id:"vtDeviceId",type:"text"},domProps:{value:e.vtDeviceId}})])])]),r("div",{staticClass:"weui-footer"},[r("p",{staticClass:"weui-footer__text"},[e._v("授信更新时间 "+e._s(e.queryTime))])]),r("div",{staticClass:"weui-btn-area"},[r("a",{staticClass:"weui-btn weui-btn_primary",attrs:{id:"btn1",href:"javascript:"},on:{click:e.oauth}},[e._v("oauth授信")])])])])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"img"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"weui-cell__hd"},[r("label",{staticClass:"weui-label"},[e._v("token")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"weui-cell__hd"},[r("label",{staticClass:"weui-label"},[e._v("vtDeviceId")])])}],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],l={name:"HelloWorld",props:{msg:String}},u=l,c=(r("4805"),r("2877")),v=Object(c["a"])(u,s,o,!1,null,"b9167eee",null),f=(v.exports,function(e){var t=new Date;console.log(t.toLocaleTimeString()+" "+t.getMilliseconds()+":"+e)}),p={name:"app",mounted:function(){var e=this;f("vue mounted"),fastman.ready(function(){var t=e;fastman.oauth({success:function(e){t.token=e.token,t.vtDeviceId=e.vtDeviceId,t.queryTime=(new Date).toLocaleTimeString()+" "+(new Date).getMilliseconds()},fail:function(e){f("oauth failure:"+JSON.stringify(e)),alert("oauth failure:"+JSON.stringify(e))}})})},data:function(){return{token:"",vtDeviceId:"",queryTime:"",fundList:["3"],url:"https://m.baidu.com/",url2:"dfyj://dl/openaccount",clickedText:""}},methods:{oauth:function(){var e=this;fastman.oauth({success:function(t){e.token=t.token,e.vtDeviceId=t.vtDeviceId,e.queryTime=(new Date).toLocaleTimeString()+" "+(new Date).getMilliseconds()},fail:function(e){f("oauth failure:"+JSON.stringify(e)),alert("oauth failure:"+JSON.stringify(e))}})}}},_=p,d=(r("034f"),Object(c["a"])(_,a,i,!1,null,null,null)),h=d.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(h)}}).$mount("#app")},"64a9":function(e,t,r){},"897e":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.0e102bd8.js.map