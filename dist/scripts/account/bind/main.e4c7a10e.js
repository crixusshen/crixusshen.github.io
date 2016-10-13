define("domReady",[],function(){"use strict";function a(a){var b;for(b=0;b<a.length;b+=1)a[b](j)}function b(){var b=k;i&&b.length&&(k=[],a(b))}function c(){i||(i=!0,g&&clearInterval(g),$(".page-loading")&&($(".page-loading").css("opacity","0"),setTimeout(function(){$(".page-loading").remove()},700)),b())}function d(a){return i?a(j):k.push(a),d}var e,f,g,h="undefined"!=typeof window&&window.document,i=!h,j=h?document:null,k=[];if(h){if(document.addEventListener)document.addEventListener("DOMContentLoaded",c,!1),window.addEventListener("load",c,!1);else if(window.attachEvent){window.attachEvent("onload",c),f=document.createElement("div");try{e=null===window.frameElement}catch(a){}f.doScroll&&e&&window.external&&(g=setInterval(function(){try{f.doScroll(),c()}catch(a){}},30))}"complete"===document.readyState&&c()}return d.version="2.0.1",d.load=function(a,b,c,e){e.isBuild?c(null):d(c)},d}),define("text",{}),define("json",{load:function(a){throw new Error("Dynamic load not allowed: "+a)}}),define("json!config.json",function(){return{isDebug:!1,env:"mock",mockAppId:null,mockDomain:"http://www.bank8.com.cn/mock",mockPort:80,mockPath:null,ver:1.1,channel:"1",timeout:1e4,delayHide:5e3,cliHttpErrorMsg:"\u8BF7\u6C42\u9519\u8BEF",cliTimeoutMsg:"\u8FDE\u63A5\u8D85\u65F6\u8BF7\u68C0\u67E5\u7F51\u7EDC\u8BBE\u7F6E",bizSystemMsg:"\u7CFB\u7EDF\u5F02\u5E38\u8BF7\u7A0D\u540E\u518D\u8BD5",bizAuthMsg:"\u767B\u5F55\u72B6\u6001\u65E0\u6548,\u8BF7\u91CD\u65B0\u767B\u5F55",cryptErrorMsg:"\u52A0\u89E3\u5BC6\u65F6\u53D1\u751F\u9519\u8BEF",signErrorMsg:"\u9A8C\u8BC1\u7B7E\u540D\u65F6\u53D1\u751F\u9519\u8BEF",tokenKey:"__t__",wxKey:"__k__",wxInfo:"__o__",loadingStr:"\u8BF7\u7A0D\u540E...",postMethod:"POST",getMethod:"GET",enterTimeout:300,leaveTimeout:300,accountBindFormURI:"/",accountBindListURI:"/",accountBindResultURI:"/result",accountBindURI:"/bind/:id",marginAppURI:"http://www.dfzq.com.cn"}}),function(a){a("util",["json!config.json"],function(a){function b(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)","i"),c=window.location.search.substr(1).match(b);return null!=c?unescape(c[2]):null}function c(a){return!(null!=a&&a.length>0)}function d(a){function b(a){for(var b={},c=a.split("&"),d=0;null!=c&&d<c.length;d++){var e=c[d].split("=");b[e[0]]=decodeURIComponent(e[1])}return b}$("#"+a).attr("onsubmit","return false");var c=$("#"+a).serialize();c=c.replace(/\+/g," ");var d=JSON.stringify(b(c)),e=JSON.parse(d);return e}function e(a,b){if(b)var c=/\w{1,}\.html{1}\?{1}/,d=c.test(a)?"&returnurl="+encodeURIComponent(encodeURIComponent(b)):"?returnurl="+encodeURIComponent(encodeURIComponent(b));location.href=a+d}function f(){var a=b("returnurl");if(a)return void(location.href=decodeURIComponent(a))}function g(b){b.length<=13?h({content:b,stayTime:a.delayHide,type:"info"}):i({title:"\u63D0\u793A\u4FE1\u606F",content:b,button:["\u786E\u8BA4"]})}var h=require("tips"),i=require("dialog");return{getQueryString:b,isEmpty:c,queryParamByFormId:d,pageForward:e,backReturnUrl:f,notice:g}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("oauthUtil",["json!config.json","util"],function(a,b){var c=require("store"),d=require("blankPage"),e="openid",f="nickname",g="orientsec",h="",i=function(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)})},j=function(h){try{if(!b.getQueryString(e))throw new Error("\u5FAE\u4FE1\u516C\u4F17\u6807\u8BC6\u7B26\u83B7\u53D6\u5931\u8D25");var j,k={openid:b.getQueryString(e),nickname:b.isEmpty(b.getQueryString(f))?"-":decodeURIComponent(b.getQueryString(f))};j=i();var l=CryptoJS.RC4.encrypt(JSON.stringify(k),CryptoJS.enc.Hex.parse(j)).ciphertext.toString(),m={content:l,sign:j},n=CryptoJS.RC4.encrypt(JSON.stringify(m),CryptoJS.enc.Hex.parse(g)).ciphertext.toString();c.set(a.wxInfo,n),h()}catch(a){var o=d({title:a.message,icon:"error",button:!0});o.on("blankPage:action",function(a){o.remove(),location.reload()})}},k=function(){try{if(""==h){var b={};b.ciphertext=CryptoJS.enc.Hex.parse(c.get(a.wxInfo));var d=CryptoJS.RC4.decrypt(b,CryptoJS.enc.Hex.parse(g)).toString(CryptoJS.enc.Utf8);d=JSON.parse(d),b={},b.ciphertext=CryptoJS.enc.Hex.parse(d.content);var e=CryptoJS.RC4.decrypt(b,CryptoJS.enc.Hex.parse(d.sign)).toString(CryptoJS.enc.Utf8);d=null,b=null,h=JSON.parse(e)}return h}catch(a){throw a}};return{entry:j,getInfo:k}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("notificationUtil",[],function(){var a=function(a,b){$(document).on(a,b)},b=function(a,b){$(document).trigger(a,b)};return{addObserver:a,postNotification:b}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){a("transformHandler",["json!config.json"],function(a){function b(b){a.isDebug||"prod"===a.env||0,a.isDebug&&"prod"!==a.env&&alert(b)}function c(a){return null===a?"":a}function d(b){try{if(0===b.entity.payload.code&&b.entity.header.token){var c=g.get(a.tokenKey);c!=b.entity.header.token&&g.set(a.tokenKey,$.trim(b.entity.header.token))}}catch(a){return h.reject({response:b,error:"storeerror"})}}function e(b,d){if("mock"!=a.env&&"test"!=a.env&&"prod"!=a.env&&"machine"!=a.env&&"simulate"!=a.env)throw 0,new Error("\u73AF\u5883\u53D8\u91CF\u5B9A\u4E49\u9519\u8BEF");var e=a.env+"Path",f=a.env+"Domain",h=a.env+"Port";a[e]=c(a[e]);var i="";i+=a[f],i+=null==a[h]||"80"==a[h]?"":":"+a[h],i+=0===a[e].indexOf("/")?a[e]:"/"+a[e],"mock"!=a.env&&"machine"!=a.env||(i+=d.funcNo),b.path=i;var j={header:{appId:a[a.env+"AppId"],ver:a.ver+"",channel:a.channel,funcNo:d.funcNo,timestamp:(new Date).getTime()},payload:b.entity,sign:""},k=g.get(a.tokenKey);return k&&(j.header.token=k),b.entity=j,b}var f=require("httpClient/interceptor"),g=require("store"),h=require("when");require("loading");return f({init:function(a){return a},request:function(c,d){var f=e(c,d);return"prod"!==a.env&&b("[request]->["+d.funcNo+"]"+JSON.stringify(f)),f},response:function(c,e){if("prod"!==a.env){var f={};f.entity=c.entity,f.httpStatus=c.status,b("[response]<-["+e.funcNo+"]"+JSON.stringify(f))}if(e.loading&&e.loading.loading("hide"),c.error)return c;d(c);var h=c.entity.header.state;return"boolean"==typeof h&&g.set("__s__",h),c}})})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){a("securityHandler",["json!config.json"],function(a){var b,c,d,e=require("httpClient/interceptor"),f=require("when");if("prod"===a.env||"simulate"===a.env||"test"===a.env){var b=require("rsaAlgorithm"),c=new b,d=a[a.env+"PublicRsaKey"];if(void 0==d)throw 0,new Error("PublicRsaKey is lost");c.setPublicKey(a[a.env+"PublicRsaKey"])}var g=function(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)})};return e({init:function(a){return a},request:function(b,d){try{var e=g(),h=c.encrypt(e);d.rc4keyHex=CryptoJS.enc.Hex.parse(e);var i=CryptoJS.RC4.encrypt(b.entity,d.rc4keyHex).ciphertext.toString(),j=CryptoJS.MD5(i+a[a.env+"AppSecret"]);b.rawEntity=b.entity;var k={key:h,content:i,sign:j.toString()};return b.entity=JSON.stringify(k),b}catch(a){return f.reject({response:b,error:"encrypterror"})}},response:function(b,c){try{if(b.error)return b;var d=b.entity&&"object"==typeof b.entity?b.entity:JSON.parse(b.entity),e=CryptoJS.MD5(d.content+a[a.env+"AppSecret"]).toString();if(e!==d.sign)return f.reject({response:b,error:"signerror"});var g={};g.ciphertext=CryptoJS.enc.Hex.parse(d.content);var h=CryptoJS.RC4.decrypt(g,c.rc4keyHex).toString(CryptoJS.enc.Utf8);return b.rawEntity=b.entity,b.entity=h,b}catch(a){return f.reject({response:b,error:"encrypterror"})}}})})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){a("OBapi",["transformHandler","json!config.json","util","securityHandler"],function(a,b,c,d){var e=require("httpClient"),f=require("httpClient/interceptor/mimeHandler"),g=require("httpClient/interceptor/timeoutHandler"),h=require("httpClient/interceptor/errorcodeHandler"),i=require("when"),j=require("httpClient/util/responsePromise"),k=require("tips"),l=require("dialog"),m=require("store"),n={autoTip:!0};(function(){/content/.test(window.location.search)&&(sessionStorage.content=c.getQueryString("content"))})();return function(o,p,q){var r=$.extend(n,q);return i.attempt(function(a){return a&&"object"==typeof a?a:JSON.parse(a)},p).otherwise(function(){throw"\u4E2D\u53F0\u6D88\u606F\u4F53\u5E8F\u5217\u5316\u65F6\u53D1\u751F\u9519\u8BEF"}).then(function(i){var n=e.addInterceptor(h);return n=n.addInterceptor(g,{timeout:b.timeout}),"prod"!==b.env&&"simulate"!==b.env&&"test"!==b.env||(n=n.addInterceptor(d)),n=n.addInterceptor(f,{mime:"application/json"}),n=n.addInterceptor(a,{funcNo:o}),j.promise(function(a,d){n({method:"POST",entity:i,headers:{"Content-Type":"application/json"}}).then(function(e){var f=e.entity.payload.data;if("undefined"!=typeof f?(f.state=e.entity.header.state,f.code=e.entity.payload.code,f.info=e.entity.payload.info):f={state:e.entity.header.state,code:e.entity.payload.code,info:e.entity.payload.info},0===e.entity.payload.code)a(f);else if(e.entity.payload.code>=1e3&&e.entity.payload.code<=1999)k({content:b.bizSystemMsg,stayTime:b.delayHide,type:"warn"}),d(f);else if(e.entity.payload.code>=3e3&&e.entity.payload.code<=3019){m.remove(b.tokenKey);var g={title:"\u63D0\u793A\u4FE1\u606F",content:b.bizAuthMsg};e.entity.payload.code>=3001&&(g.content=e.entity.payload.info);var h=l(g);h.on("dialog:action",function(a){c.pageForward("login.html",location.href)}),d(f)}else if(0!==e.entity.payload.code){var i=e.entity.payload.info;r.autoTip&&c.notice(i),d(f)}else d(f)}).otherwise(function(a){k("httperror"===a.error?{content:b.cliHttpErrorMsg,stayTime:b.delayHide,type:"warn"}:"timeout"===a.error?{content:b.cliTimeoutMsg,stayTime:b.delayHide,type:"warn"}:"encrypterror"===a.error?{content:b.cryptErrorMsg,stayTime:b.delayHide,type:"warn"}:"signerror"===a.error?{content:b.signErrorMsg,stayTime:b.delayHide,type:"warn"}:{content:b.bizSystemMsg,stayTime:b.delayHide,type:"warn"}),d(a)})})})}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("IF080002",["OBapi"],function(a){var b=function(b){var c={openId:b};return a("IF080002",c)};return b})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("accountBindMainViewModel",["oauthUtil","IF080002"],function(a,b){var c="initBindBranch",d="noInitBindBranch",e=require("sift"),f=require("when"),g={openId:"",bindAccounts:[],noBindAccounts:[],pushViewController:function(){var g=this;return new b(a.getInfo().openid).then(function(a){if(a.accounts.length>0){var b=function(b){b.creditAccount="1"==b.isExistCreditAccount?a.creditAccount:""};return g.noBindAccounts=e({$where:function(){var a="0"===this.isBindWechat;return a&&b(this),a}},a.accounts),g.bindAccounts=e({$where:function(){var a="1"===this.isBindWechat;return a&&b(this),a}},a.accounts),g.bindAccounts.length>0?a.branch=d:a.branch=c,a}return a.branch=c,a}).otherwise(function(a){if(70001==a.code)return a.branch=c,f.resolve(a)})}};return{viewModel:g,initBindBranch:c,noInitBindBranch:d}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("regexBuilder",[],function(){var a=function(){this._flags="",this._literal=[],this._groupsUsed=0,this._clear()},b=a.prototype;b._clear=function(){this._min=-1,this._max=-1,this._of="",this._ofAny=!1,this._ofGroup=-1,this._from="",this._notFrom="",this._like="",this._either="",this._reluctant=!1,this._capture=!1},b._flushState=function(){if(""!=this._of||this._ofAny||this._ofGroup>0||""!=this._from||""!=this._notFrom||""!=this._like){var a=this._capture?"":"?:",b=this._getQuantityLiteral(),c=this._getCharacterLiteral(),d=this._reluctant?"?":"";this._literal.push("("+a+"(?:"+c+")"+b+d+")"),this._clear()}},b._getQuantityLiteral=function(){return this._min!=-1?this._max!=-1?"{"+this._min+","+this._max+"}":"{"+this._min+",}":"{0,"+this._max+"}"},b._getCharacterLiteral=function(){return""!=this._of?this._of:this._ofAny?".":this._ofGroup>0?"\\"+this._ofGroup:""!=this._from?"["+this._from+"]":""!=this._notFrom?"[^"+this._notFrom+"]":""!=this._like?this._like:void 0},b.getLiteral=function(){return this._flushState(),this._literal.join("")},b._combineGroupNumberingAndGetLiteral=function(a){var b=this._incrementGroupNumbering(a.getLiteral(),this._groupsUsed);return this._groupsUsed+=a._groupsUsed,b},b._incrementGroupNumbering=function(a,b){return b>0&&(a=a.replace(/[^\\]\\\d+/g,function(a){var c=parseInt(a.substring(2))+b;return a.substring(0,2)+c})),a},b.getRegExp=function(){return this._flushState(),new RegExp(this._literal.join(""),this._flags)},b._addFlag=function(a){return this._flags.indexOf(a)==-1&&(this._flags+=a),this},b.ignoreCase=function(){return this._addFlag("i")},b.multiLine=function(){return this._addFlag("m")},b.globalMatch=function(){return this._addFlag("g")},b.startOfInput=function(){return this._literal.push("(?:^)"),this},b.startOfLine=function(){return this.multiLine(),this.startOfInput()},b.endOfInput=function(){return this._flushState(),this._literal.push("(?:$)"),this},b.endOfLine=function(){return this.multiLine(),this.endOfInput()},b.either=function(b){return"string"==typeof b?this._eitherLike((new a).exactly(1).of(b)):this._eitherLike(b)},b._eitherLike=function(a){return this._flushState(),this._either=this._combineGroupNumberingAndGetLiteral(a),this},b.or=function(b){return"string"==typeof b?this._orLike((new a).exactly(1).of(b)):this._orLike(b)},b._orLike=function(a){var b=this._either,c=this._combineGroupNumberingAndGetLiteral(a);if(""==b){var d=this._literal[this._literal.length-1];d=d.substring(0,d.length-1),this._literal[this._literal.length-1]=d,this._literal.push("|(?:"+c+"))")}else this._literal.push("(?:(?:"+b+")|(?:"+c+"))");return this._clear(),this},b.neither=function(b){return"string"==typeof b?this.notAhead((new a).exactly(1).of(b)):this.notAhead(b)},b.nor=function(a){return 0==this._min&&this._ofAny&&(this._min=-1,this._ofAny=!1),this.neither(a),this.min(0).ofAny()},b.exactly=function(a){return this._flushState(),this._min=a,this._max=a,this},b.min=function(a){return this._flushState(),this._min=a,this},b.max=function(a){return this._flushState(),this._max=a,this},b.of=function(a){return this._of=this._sanitize(a),this},b.ofAny=function(){return this._ofAny=!0,this},b.ofGroup=function(a){return this._ofGroup=a,this},b.from=function(a){return this._from=this._sanitize(a.join("")),this},b.notFrom=function(a){return this._notFrom=this._sanitize(a.join("")),this},b.like=function(a){return this._like=this._combineGroupNumberingAndGetLiteral(a),this},b.reluctantly=function(){return this._reluctant=!0,this},b.ahead=function(a){return this._flushState(),this._literal.push("(?="+this._combineGroupNumberingAndGetLiteral(a)+")"),this},b.notAhead=function(a){return this._flushState(),this._literal.push("(?!"+this._combineGroupNumberingAndGetLiteral(a)+")"),this},b.asGroup=function(){return this._capture=!0,this._groupsUsed++,this},b.then=function(a){return this.exactly(1).of(a)},b.find=function(a){return this.then(a)},b.some=function(a){return this.min(1).from(a)},b.maybeSome=function(a){return this.min(0).from(a)},b.maybe=function(a){return this.max(1).of(a)},b.something=function(){return this.min(1).ofAny()},b.anything=function(){return this.min(0).ofAny()},b.anythingBut=function(b){return 1==b.length?this.min(0).notFrom([b]):(this.notAhead((new a).exactly(1).of(b)),this.min(0).ofAny())},b.any=function(){return this.exactly(1).ofAny()},b.lineBreak=function(){return this._flushState(),this._literal.push("(?:\\r\\n|\\r|\\n)"),this},b.lineBreaks=function(){return this.like((new a).lineBreak())},b.whitespace=function(){return this._min==-1&&this._max==-1?(this._flushState(),this._literal.push("(?:\\s)"),this):(this._like="\\s",this)},b.notWhitespace=function(){return this._min==-1&&this._max==-1?(this._flushState(),this._literal.push("(?:\\S)"),this):(this._like="\\S",this)},b.tab=function(){return this._flushState(),this._literal.push("(?:\\t)"),this},b.tabs=function(){return this.like((new a).tab())},b.digit=function(){return this._flushState(),this._literal.push("(?:\\d)"),this},b.notDigit=function(){return this._flushState(),this._literal.push("(?:\\D)"),this},b.digits=function(){return this.like((new a).digit())},b.notDigits=function(){return this.like((new a).notDigit())},b.letter=function(){return this.exactly(1),this._from="A-Za-z",this},b.notLetter=function(){return this.exactly(1),this._notFrom="A-Za-z",this},b.letters=function(){return this._from="A-Za-z",this},b.notLetters=function(){return this._notFrom="A-Za-z",this},b.lowerCaseLetter=function(){return this.exactly(1),this._from="a-z",this},b.lowerCaseLetters=function(){return this._from="a-z",this},b.upperCaseLetter=function(){return this.exactly(1),this._from="A-Z",this},b.upperCaseLetters=function(){return this._from="A-Z",this},b.append=function(a){return this.exactly(1),this._like=this._combineGroupNumberingAndGetLiteral(a),this},b.optional=function(a){return this.max(1),this._like=this._combineGroupNumberingAndGetLiteral(a),this},b._sanitize=function(a){return a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")};var c={};return c.ignoreCase=function(){return(new a).ignoreCase()},c.multiLine=function(){return(new a).multiLine()},c.globalMatch=function(){return(new a).globalMatch()},c.startOfInput=function(){return(new a).startOfInput()},c.startOfLine=function(){return(new a).startOfLine()},c.endOfInput=function(){return(new a).endOfInput()},c.endOfLine=function(){return(new a).endOfLine()},c.either=function(b){return(new a).either(b)},c.neither=function(b){return(new a).neither(b)},c.exactly=function(b){return(new a).exactly(b)},c.min=function(b){return(new a).min(b)},c.max=function(b){return(new a).max(b)},c.ahead=function(b){return(new a).ahead(b)},c.notAhead=function(b){return(new a).notAhead(b)},c.then=function(b){return(new a).then(b)},c.find=function(b){return(new a).find(b)},c.some=function(b){return(new a).some(b)},c.maybeSome=function(b){return(new a).maybeSome(b)},c.maybe=function(b){return(new a).maybe(b)},c.anything=function(){return(new a).anything()},c.anythingBut=function(b){return(new a).anythingBut(b)},c.any=function(){return(new a).any()},c.lineBreak=function(){return(new a).lineBreak()},c.whitespace=function(){return(new a).whitespace()},c.notWhitespace=function(){return(new a).notWhitespace()},c.tab=function(){return(new a).tab()},c.digit=function(){return(new a).digit()},c.notDigit=function(){return(new a).notDigit()},c.letter=function(){return(new a).letter()},c.notLetter=function(){return(new a).notLetter()},c.lowerCaseLetter=function(){return(new a).lowerCaseLetter()},c.upperCaseLetter=function(){return(new a).upperCaseLetter()},c.append=function(b){return(new a).append(b)},c.optional=function(b){return(new a).optional(b)},c})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("checkFundAccount",["regexBuilder"],function(a){return function(b){return a.startOfLine().min(8).max(8).digits().endOfLine().getRegExp().test(b)}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("checkTradePassword",["regexBuilder"],function(a){return function(b){return a.startOfLine().min(6).max(8).ofAny().endOfLine().getRegExp().test(b)}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("IF080001",["OBapi"],function(a){var b=function(b,c,d,e,f){var g={accountType:""==b?"0":b,account:c,password:d,openId:e,bindType:f};return a("IF080001",g)};return b})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("IF080014",["OBapi"],function(a){var b=function(b,c,d,e){var f={accountType:""==b?"0":b,account:c,password:d,openId:e};return a("IF080014",f)};return b})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("accountBindFormViewModel",["oauthUtil","notificationUtil","checkFundAccount","checkTradePassword","IF080001","IF080014"],function(a,b,c,d,e,f){var g="occupiedBindBranch",h="bindSuccessBranch",i=require("when"),j=(require("sift"),function(){}),k={fundAccount:"",password:"",nickName:"",isRead:[],checkForm:function(a){var b=this;c(b.fundAccount)&&d(b.password)&&b.isRead.length>0?"function"==typeof a?a.call(this,!0):j:"function"==typeof a?a.call(this,!1):j},bindAccountFuture:function(){var b=this,c=new f("0",b.fundAccount,b.password,a.getInfo().openid).then(function(a){return a.result?(a.branch=g,i.reject(a)):i.resolve(a)}).then(function(c){return new e("0",b.fundAccount,b.password,a.getInfo().openid,"0").then(function(a){return a.branch=h,i.resolve(a)})});return c},forceBindAccountFuture:function(){var b=this,c=new e("0",b.fundAccount,b.password,a.getInfo().openid,"0").then(function(a){return i.resolve(a)});return c}};return{viewModel:k,occupiedBindBranch:g,bindSuccessBranch:h}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("accountBindListViewModel",["json!config.json","IF080001","oauthUtil"],function(a,b,c){var d=require("sift"),e=require("tips"),f={nickName:"",clientName:"",bindAccounts:[],noBindAccounts:[],getAccount:function(b){var c=this,f=d({id:{$eq:b}},c.noBindAccounts);return f.length>0?f[0]:void e({content:"\u67E5\u8BE2\u8D26\u6237\u8BB0\u5F55\u4E0D\u5B58\u5728",stayTime:a.delayHide,type:"error"})},getUnbindAccount:function(b){var c=this,f=d({id:{$eq:b}},c.bindAccounts);return f.length>0?f[0]:void e({content:"\u67E5\u8BE2\u8D26\u6237\u8BB0\u5F55\u4E0D\u5B58\u5728",stayTime:a.delayHide,type:"error"})},unbindAccount:function(a){var e=this,f=e.getUnbindAccount(a);if(void 0!=f)return new b("0",f.fundAccount,"",c.getInfo().openid,"1").then(function(a){e.bindAccounts=d({fundAccount:{$ne:f.fundAccount}},e.bindAccounts),"1"==f.isBindWechat&&(f.isBindWechat="0"),e.noBindAccounts.push(f)})}};return{viewModel:f}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("accountBindViewModel",["json!config.json","oauthUtil","checkTradePassword","accountBindListViewModel","accountBindFormViewModel"],function(a,b,c,d,e){var f=require("when"),g=require("sift"),h=require("tips"),i=(require("deepCopy"),{fundAccount:"",creditAccount:"",password:"",checkForm:function(a){var b=this;c(b.password)?"function"==typeof a?a.call(this,!0):noop:"function"==typeof a?a.call(this,!1):noop},bindAccountFuture:function(){var a=this;return e.viewModel.fundAccount=a.fundAccount,e.viewModel.password=a.password,e.viewModel.bindAccountFuture().then(function(b){var c=a;return c._refreshAccountTreeRelation(),f.resolve(b)})},forceBindAccountFuture:function(){var a=this;return e.viewModel.fundAccount=a.fundAccount,e.viewModel.password=a.password,e.viewModel.forceBindAccountFuture().then(function(b){var c=a;return c._refreshAccountTreeRelation(),f.resolve(b)})},_refreshAccountTreeRelation:function(){var b=this,c=g({fundAccount:{$eq:b.fundAccount}},d.viewModel.noBindAccounts);if(0==c.length)throw h({content:"\u67E5\u8BE2\u8D26\u6237\u8BB0\u5F55\u4E0D\u5B58\u5728",stayTime:a.delayHide,type:"error"}),new Error("\u67E5\u8BE2\u8D26\u6237\u8BB0\u5F55\u4E0D\u5B58\u5728");"0"==c[0].isBindWechat&&(c[0].isBindWechat="1"),d.viewModel.noBindAccounts=g({fundAccount:{$ne:b.fundAccount}},d.viewModel.noBindAccounts),d.viewModel.bindAccounts.push(c[0]),c=null}});return{viewModel:i}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("accountBindResultViewModel",[],function(){var a=require("sift"),b={fundAccount:"",creditAccount:"",noBindAccounts:[],bindAccounts:[],queryCreditAccount:function(){var b=this,c=a({fundAccount:{$eq:b.fundAccount}},b.bindAccounts);c.length>0&&(""!=c[0].creditAccount?b.creditAccount=c[0].creditAccount:b.creditAccount="-")}};return{viewModel:b}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("accountBindFormViewController",["json!config.json","accountBindFormViewModel","accountBindResultViewModel","OBapi","oauthUtil"],function(a,b,c,d,e){var f=require("keyBoard"),g=require("passGuard"),h=require("dialog"),i=require("dataBinding"),j=function(a){a?$("#btnConfirm").attr("disabled",null):$("#btnConfirm").attr("disabled","disabled")};return{url:a.accountBindFormURI,className:"accountBindForm",render:function(){return $("#tpl_form").html()},bind:function(){i(b,{"viewModel.fundAccount":{dom:"#txtFundAccount",callback:function(a){this.checkForm(j)}},"viewModel.isRead":{dom:'input[name="isRead"]',callback:function(a){this.checkForm(j)}},"viewModel.nickName":"#txtNickName"});var a=g({maxLength:8,displayMode:0,httpClient:d}),c=f({kbType:0});a.build("txtPassword",c),c.jq().on("keyboard:pressed",function(){b.viewModel.password=a.getOutput(),b.viewModel.checkForm(j)}),$("#btnConfirm").on("click",function(a){b.viewModel.bindAccountFuture().then(function(a){a.branch===b.bindSuccessBranch&&(location.href="accountBindResult.html#/result")}).otherwise(function(a){if(a.branch===b.occupiedBindBranch){var c=h({title:"\u63D0\u793A",content:"\u60A8\u6709\u540C\u540D\u8D44\u91D1\u8D26\u6237\u5B58\u5728\u7ED1\u5B9A\u5173\u7CFB,\u7ED1\u5B9A\u65F6\u4F7F\u7528\u5FAE\u4FE1\u6635\u79F0XX\u3002\u5982\u60A8\u9009\u62E9\u7EE7\u7EED,\u6240\u6709\u5DF2\u7ED1\u5B9A\u8D26\u6237\u5C06\u88AB\u89E3\u7ED1",button:["\u53D6\u6D88","\u7EE7\u7EED\u7ED1\u5B9A"]});c.on("dialog:action",function(a){1===a.index&&b.viewModel.forceBindAccountFuture().then(function(a){location.href="accountBindResult.html#/result"})})}})})}}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("accountBindListViewController",["json!config.json","accountBindListViewModel"],function(a,b){var c=require("core"),d=(require("deepCopy"),require("dataBinding")),e=require("scroller"),f=require("dialog"),g=require("tips");return{url:a.accountBindListURI,className:"accountBindList",render:function(){return $("#tpl_list").html()},bind:function(){var h=e(".accountBindList",{scrollY:!0});h.didEndTriggerToBottom(),d(b,{"viewModel.nickName":{dom:"#lblNickName"},"viewModel.clientName":{dom:"#lblClientName"},"viewModel.bindAccounts":{dom:"#bindAccounts",transform:function(a){return c.tpl($("#tpl_bindCell").html(),a)},callback:function(a){0==a.length?$("#bindAccountSection").hide():$("#bindAccountSection").show()}},"viewModel.noBindAccounts":{dom:"#noBindAccounts",transform:function(a){return c.tpl($("#tpl_bindCell").html(),a)},callback:function(a){0==a.length?$("#unbindAccountSection").hide():$("#unbindAccountSection").show()}}}),setTimeout(function(){h.refresh()},300),$("#noBindAccounts").on("click",".bind_btn",function(a){var b=$(a.target);location.href="#/bind/"+[b.data("id")][0]}),$("#bindAccounts").on("click",".bind_btn",function(c){var d=$(c.target),e=f({content:"\u60A8\u786E\u5B9A\u8981\u8FDB\u884C\u8D26\u6237\u89E3\u7ED1\u5417\uFF1F",button:["\u53D6\u6D88","\u786E\u8BA4"]});e.on("dialog:action",function(c){1==c.index&&b.viewModel.unbindAccount([d.data("id")][0]+"").then(function(){g({content:"\u89E3\u7ED1\u6210\u529F",stayTime:a.delayHide,type:"success"}),e.remove()})})})}}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),function(a){"use strict";a("accountBindViewController",["json!config.json","util","OBapi","notificationUtil","accountBindViewModel","accountBindListViewModel","accountBindFormViewModel"],function(a,b,c,d,e,f,g){var h=require("keyBoard"),i=require("passGuard"),j=require("tips"),k=require("dialog"),l=require("dataBinding"),m=require("core"),n=function(a){a?$("#btnConfirm").attr("disabled",null):$("#btnConfirm").attr("disabled","disabled")};return{url:a.accountBindURI,className:"accountBind",render:function(){var a=this.params.id,b=f.viewModel.getAccount(a);return e.viewModel.fundAccount=b.fundAccount,e.viewModel.creditAccount=b.creditAccount,m.tpl($("#tpl_bind").html(),b)},bind:function(){l(e,{"viewModel.fundAccount":{dom:"#txtFundAccount"},"viewModel.creditAccount":{dom:"#lblCreditAccount",transform:function(a){var c=this.safe(a);return b.isEmpty(c)?"":"\u878D\u8D44\u878D\u5238\u8D26\u6237 <span>"+this.safe(a)+"</span>"}}});var d=i({maxLength:8,displayMode:0,httpClient:c}),f=h({kbType:0});d.build("txtPassword",f),f.jq().on("keyboard:pressed",function(){e.viewModel.password=d.getOutput(),e.viewModel.checkForm(n)}),$("#btnConfirm").on("click",function(b){var c=function(){j({content:"\u7ED1\u5B9A\u6210\u529F",stayTime:a.delayHide,type:"success"}),setTimeout(function(){history.go(-1)},1e3)};e.viewModel.bindAccountFuture().then(function(a){c()}).otherwise(function(a){if(a.branch===g.occupiedBindBranch){var b=k({title:"\u63D0\u793A",content:"\u60A8\u6709\u540C\u540D\u8D44\u91D1\u8D26\u6237\u5B58\u5728\u7ED1\u5B9A\u5173\u7CFB,\u7ED1\u5B9A\u65F6\u4F7F\u7528\u5FAE\u4FE1\u6635\u79F0XX\u3002\u5982\u60A8\u9009\u62E9\u7EE7\u7EED,\u6240\u6709\u5DF2\u7ED1\u5B9A\u8D26\u6237\u5C06\u88AB\u89E3\u7ED1",button:["\u53D6\u6D88","\u7EE7\u7EED\u7ED1\u5B9A"]});b.on("dialog:action",function(a){1===a.index&&e.viewModel.forceBindAccountFuture().then(function(a){c()})})}})})}}})}("function"==typeof define&&define.amd?define:function(a){module.exports=a(require)}),require(["domReady","json!config.json","oauthUtil","notificationUtil","accountBindMainViewModel","accountBindFormViewModel","accountBindViewModel","accountBindListViewModel","accountBindFormViewController","accountBindListViewController","accountBindViewController"],function(a,b,c,d,e,f,g,h,i,j,k){var l=require("router"),m=require("blankPage"),n=require("tryCatch");a(function(){n(function(){c.entry(function(){e.viewModel.pushViewController().then(function(a){var d=new l({container:".container",enterTimeout:b.enterTimeout,leaveTimeout:b.leaveTimeout});a.branch===e.initBindBranch?(f.viewModel.nickName=c.getInfo().nickname,d.push(i).setDefault("/").init()):a.branch===e.noInitBindBranch&&(h.viewModel.nickName=c.getInfo().nickname,h.viewModel.noBindAccounts=e.viewModel.noBindAccounts,h.viewModel.bindAccounts=e.viewModel.bindAccounts,h.viewModel.clientName=a.clientName,h.viewModel.creditAccount=a.creditAccount,d.push(j).push(k).setDefault("/").init())})})},function(a){var b=m({title:"\u7CFB\u7EDF\u5F02\u5E38",icon:"error",button:!0});b.on("blankPage:action",function(a){b.remove(),location.reload()})})})}),define("modules/account/bind/viewController",function(){});