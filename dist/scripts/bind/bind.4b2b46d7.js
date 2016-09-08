define("domReady",[],function(){"use strict";function a(a){var b;for(b=0;b<a.length;b+=1)a[b](j)}function b(){var b=k;i&&b.length&&(k=[],a(b))}function c(){i||(i=!0,g&&clearInterval(g),$(".page-loading")&&$(".page-loading").hide(),b())}function d(a){return i?a(j):k.push(a),d}var e,f,g,h="undefined"!=typeof window&&window.document,i=!h,j=h?document:null,k=[];if(h){if(document.addEventListener)document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1);else if(window.attachEvent){window.attachEvent("onload",c),f=document.createElement("div");try{e=null===window.frameElement}catch(a){}f.doScroll&&e&&window.external&&(g=setInterval(function(){try{f.doScroll(),c()}catch(a){}},30))}"complete"===document.readyState&&c()}return d.version="2.0.1",d.load=function(a,b,c,e){e.isBuild?c(null):d(c)},d}),define("text",{}),define("json",{load:function(a){throw new Error("Dynamic load not allowed: "+a)}}),define("json!config.json",function(){return{isDebug:!1,env:"prod",prodAppId:"wx.finance.101",prodDomain:"http://iwx.dfzq.com.cn",prodPort:80,prodPath:"/api/wx/gateway",prodAppSecret:"aa3a546e-3432-11e6-8c10-005056bc7526",prodPublicRsaKey:"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDMrEf7fscAuW/EkDIidrFlwEE+tSc9cXmLVafnca8IpHs1MHPCU8r/D8/GYPRs4TJsSmVlNJGiGTAWH0SQabhvWX/x8nxBCw/iGYau+g9P+EO/CAPhQ1MuAKs7Bk7FSw9siGcbwn0UgqRrYou0Rz7SUXzNmS42rHe8Aa+Iui72VwIDAQAB",prodPresentExpUrl:"http://wxs.dfzq.com.cn/RoxBusiness/activeBestow/integral.3g",ver:1.1,channel:"1",timeout:1e4,delayHide:5e3,cliHttpErrorMsg:"请求错误",cliTimeoutMsg:"连接超时请检查网络设置",bizSystemMsg:"系统异常请稍后再试",bizAuthMsg:"登录状态无效,请重新登录",cryptErrorMsg:"加解密时发生错误",signErrorMsg:"验证签名时发生错误",tokenKey:"__t__",loadingStr:"请稍后...",postMethod:"POST",getMethod:"GET"}}),function(a){a("transformHandler",["json!config.json"],function(a){function b(b){a.isDebug||"prod"===a.env||0,a.isDebug&&"prod"!==a.env&&alert(b)}function c(a){return null===a?"":a}function d(b){try{if(0===b.entity.payload.code&&b.entity.header.token){var c=g.get(a.tokenKey);c!=b.entity.header.token&&g.set(a.tokenKey,$.trim(b.entity.header.token))}}catch(a){return h.reject({response:b,error:"storeerror"})}}function e(b,d){if("mock"!=a.env&&"test"!=a.env&&"prod"!=a.env&&"machine"!=a.env&&"simulate"!=a.env)throw 0,new Error("环境变量定义错误");var e=a.env+"Path",f=a.env+"Domain",h=a.env+"Port";a[e]=c(a[e]);var i="";i+=a[f],i+=null==a[h]||"80"==a[h]?"":":"+a[h],i+=0===a[e].indexOf("/")?a[e]:"/"+a[e],"mock"!=a.env&&"machine"!=a.env||(i+=d.funcNo),b.path=i;var j={header:{appId:a[a.env+"AppId"],ver:a.ver+"",channel:a.channel,funcNo:d.funcNo,timestamp:(new Date).getTime()},payload:b.entity,sign:""},k=g.get(a.tokenKey);return k&&(j.header.token=k),b.entity=j,b}var f=require("httpClient/interceptor"),g=require("store"),h=require("when"),i=require("loading");return f({init:function(a){return a},request:function(c,d){var f=e(c,d);return"prod"!==a.env&&b("[request]->["+d.funcNo+"]"+JSON.stringify(f)),"IF030002"!=d.funcNo&&(d.loading=i({content:a.loadingStr})),f},response:function(c,e){if("prod"!==a.env){var f={};f.entity=c.entity,f.httpStatus=c.status,b("[response]<-["+e.funcNo+"]"+JSON.stringify(f))}if(e.loading&&e.loading.loading("hide"),c.error)return c;d(c);var h=c.entity.header.state;return"boolean"==typeof h&&g.set("__s__",h),c}})})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){a("util",["json!config.json"],function(a){function b(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)","i"),c=window.location.search.substr(1).match(b);return null!=c?unescape(c[2]):null}function c(a){return!(null!=a&&a.length>0)}function d(a){function b(a){for(var b={},c=a.split("&"),d=0;null!=c&&d<c.length;d++){var e=c[d].split("=");b[e[0]]=decodeURIComponent(e[1])}return b}$("#"+a).attr("onsubmit","return false");var c=$("#"+a).serialize();c=c.replace(/\+/g," ");var d=JSON.stringify(b(c)),e=JSON.parse(d);return e}function e(a,b){if(b)var c=/\w{1,}\.html{1}\?{1}/,d=c.test(a)?"&returnurl="+encodeURIComponent(encodeURIComponent(b)):"?returnurl="+encodeURIComponent(encodeURIComponent(b));location.href=a+d}function f(){var a=b("returnurl");if(a)return void(location.href=decodeURIComponent(a))}function g(b){b.length<=13?h({content:b,stayTime:a.delayHide,type:"info"}):i({title:"提示信息",content:b,button:["确认"]})}var h=require("tips"),i=require("dialog");return{getQueryString:b,isEmpty:c,queryParamByFormId:d,pageForward:e,backReturnUrl:f,notice:g}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){a("securityHandler",["json!config.json"],function(a){var b,c,d,e=require("httpClient/interceptor"),f=require("when");if("prod"===a.env||"simulate"===a.env||"test"===a.env){var b=require("rsaAlgorithm"),c=new b,d=a[a.env+"PublicRsaKey"];if(void 0==d)throw 0,new Error("PublicRsaKey is lost");c.setPublicKey(a[a.env+"PublicRsaKey"])}var g=function(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)})};return e({init:function(a){return a},request:function(b,d){try{var e=g(),h=c.encrypt(e);d.rc4keyHex=CryptoJS.enc.Hex.parse(e);var i=CryptoJS.RC4.encrypt(b.entity,d.rc4keyHex).ciphertext.toString(),j=CryptoJS.MD5(i+a[a.env+"AppSecret"]);b.rawEntity=b.entity;var k={key:h,content:i,sign:j.toString()};return b.entity=JSON.stringify(k),b}catch(a){return f.reject({response:b,error:"encrypterror"})}},response:function(b,c){try{if(b.error)return b;var d=b.entity&&"object"==typeof b.entity?b.entity:JSON.parse(b.entity),e=CryptoJS.MD5(d.content+a[a.env+"AppSecret"]).toString();if(e!==d.sign)return f.reject({response:b,error:"signerror"});var g={};g.ciphertext=CryptoJS.enc.Hex.parse(d.content);var h=CryptoJS.RC4.decrypt(g,c.rc4keyHex).toString(CryptoJS.enc.Utf8);return b.rawEntity=b.entity,b.entity=h,b}catch(a){return f.reject({response:b,error:"encrypterror"})}}})})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){a("OBapi",["transformHandler","json!config.json","util","securityHandler"],function(a,b,c,d){var e=require("httpClient"),f=require("httpClient/interceptor/mimeHandler"),g=require("httpClient/interceptor/timeoutHandler"),h=require("httpClient/interceptor/errorcodeHandler"),i=require("when"),j=require("httpClient/util/responsePromise"),k=require("tips"),l=require("dialog"),m=require("store"),n={autoTip:!0};(function(){/content/.test(window.location.search)&&(sessionStorage.content=c.getQueryString("content"))})();return function(o,p,q){var r=$.extend(n,q);return i.attempt(function(a){return a&&"object"==typeof a?a:JSON.parse(a)},p).otherwise(function(){throw"中台消息体序列化时发生错误"}).then(function(i){var n=e.addInterceptor(h);return n=n.addInterceptor(g,{timeout:b.timeout}),"prod"!==b.env&&"simulate"!==b.env&&"test"!==b.env||(n=n.addInterceptor(d)),n=n.addInterceptor(f,{mime:"application/json"}),n=n.addInterceptor(a,{funcNo:o}),j.promise(function(a,d){n({method:"POST",entity:i,headers:{"Content-Type":"application/json"}}).then(function(e){var f=e.entity.payload.data;if("undefined"!=typeof f?(f.state=e.entity.header.state,f.code=e.entity.payload.code,f.info=e.entity.payload.info):f={state:e.entity.header.state,code:e.entity.payload.code,info:e.entity.payload.info},0===e.entity.payload.code)a(f);else if(e.entity.payload.code>=1e3&&e.entity.payload.code<=1999)k({content:b.bizSystemMsg,stayTime:b.delayHide,type:"warn"}),d(f);else if(e.entity.payload.code>=3e3&&e.entity.payload.code<=3019){m.remove(b.tokenKey);var g={title:"提示信息",content:b.bizAuthMsg};e.entity.payload.code>=3001&&(g.content=e.entity.payload.info);var h=l(g);h.on("dialog:action",function(a){c.pageForward("login.html",location.href)}),d(f)}else if(0!==e.entity.payload.code){var i=e.entity.payload.info;r.autoTip&&c.notice(i),d(f)}else d(f)}).otherwise(function(a){k("httperror"===a.error?{content:b.cliHttpErrorMsg,stayTime:b.delayHide,type:"warn"}:"timeout"===a.error?{content:b.cliTimeoutMsg,stayTime:b.delayHide,type:"warn"}:"encrypterror"===a.error?{content:b.cryptErrorMsg,stayTime:b.delayHide,type:"warn"}:"signerror"===a.error?{content:b.signErrorMsg,stayTime:b.delayHide,type:"warn"}:{content:b.bizSystemMsg,stayTime:b.delayHide,type:"warn"}),d(a)})})})}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),require(["domReady","OBapi"],function(a,b){a(function(){function a(){this.init_page()}var b=require("fragment"),c=require("fragmentPage"),d=require("scroller");a.prototype={init_page:function(){var a=c({name:"bind",url:"#",template:"#bind-script",init:function(a){d(".container",{scrollY:!0,bounce:!0,didTriggerToBottom:function(a){var b=this;b.loading(!1)}})},destory:function(a){}});b(".container").push(a).setDefault("bind").init()}},new a})}),define("modules/demo/bind",function(){});