(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(4),c=a.n(l),s=(a(17),a(2)),r=a(5),u=a(6),o=a(10),d=a(7),m=a(1),v=a(9),w=a(8),b=a.n(w),f=(a(18),function(e){var t=new Date;console.log(t.toLocaleTimeString()+" "+t.getMilliseconds()+":"+e)}),h=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={token:"",vtDeviceId:"",queryTime:"",fundList:["3"],url:"https://m.baidu.com/",url2:"dfyj://dl/openaccount",clickedText:""},f("react constructor"),a.oauth=a.oauth.bind(Object(m.a)(a)),a.login=a.login.bind(Object(m.a)(a)),a.loginEnhance=a.loginEnhance.bind(Object(m.a)(a)),a.selected=a.selected.bind(Object(m.a)(a)),a.share=a.share.bind(Object(m.a)(a)),a.navigateTo=a.navigateTo.bind(Object(m.a)(a)),a.navigateNativeTo=a.navigateNativeTo.bind(Object(m.a)(a)),a.navigateBar=a.navigateBar.bind(Object(m.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;f("react componentDidMount"),fastman.ready(function(t){var a=e;fastman.oauth({success:function(e){a.setState(Object(s.a)({},e,{queryTime:(new Date).toLocaleTimeString()+" "+(new Date).getMilliseconds()}))},fail:function(e){f("ready failure:"+JSON.stringify(e))}})})}},{key:"componentWillUnmount",value:function(){f("react componentWillUnmount")}},{key:"oauth",value:function(){var e=this;fastman.oauth({success:function(t){e.setState(Object(s.a)({},t,{queryTime:(new Date).toLocaleTimeString()+" "+(new Date).getMilliseconds()}))},fail:function(e){f("oauth failure:"+JSON.stringify(e))}})}},{key:"login",value:function(){fastman.onLogin()}},{key:"loginEnhance",value:function(){var e={type:"1"};this.state.fundList.length>0&&(e.fundtype=this.state.fundList.join(",")),e.success=function(e){1==e.isLogin&&(3==e.bizSysId?f("\u666e\u901a\u8d44\u91d1\u8d26\u53f7"):6==e.bizSysId?f("\u4e24\u878d\u8d26\u53f7"):18==e.bizSysId&&f("\u671f\u6743\u8d26\u6237"))},fastman.onLoginEnhance(e)}},{key:"share",value:function(e){fastman.onShare({channel:e,title:"\u4e1c\u65b9\u8d62\u5bb6\u8d22\u5bcc\u7248\u4e0a\u7ebf\u5566",description:"\u4e1c\u65b9\u8d62\u5bb6\u8d22\u5bcc\u7248\u662f\u4e00\u6b3e\u7efc\u5408\u7c7b\u91d1\u878d\u5de5\u5177APP",thumbImageUrl:"http://wxs.dfzq.com.cn/fileRes/new_download/images/new_pic.jpg",link:"http://wxs.dfzq.com.cn/fileRes/new_download/app_open/appOpen.html"})}},{key:"navigateTo",value:function(){var e=this.state.url;if(null==e||""==e)f("\u8bf7\u586b\u5199\u6b63\u786e\u7684h5 url");else{if(window.localStorage)window.localStorage.url=e;fastman.onNavigateTo({title:"\u8df3\u8f6c\u5730\u5740\u6807\u9898",uri:e})}}},{key:"navigateBack",value:function(){fastman.onNavigateBack({success:function(e){f("\u8fd4\u56de\u6210\u529f")}})}},{key:"reqOK",value:function(){fastman.onReq("IF060002",{days:"2",success:function(e){alert(JSON.stringify(e))},fail:function(e){alert(JSON.stringify(e.info+"("+e.code+")"))}})}},{key:"reqError",value:function(){fastman.onReq("IF060002",{days:fastman.isFromAndroid?"aaa":2,success:function(e){alert(JSON.stringify(e))},fail:function(e){alert(JSON.stringify(e.info+"("+e.code+")"))}})}},{key:"navigateNativeTo",value:function(){var e=this.state.url2;if(null==e||""==e)f("\u8bf7\u586b\u5199\u6b63\u786e\u7684schema url");else{if(window.localStorage)window.localStorage.url2=e;fastman.onNavigateNativeTo({url:e})}}},{key:"navigateBar",value:function(){var e=this;fastman.onNavigateBar({title:"\u6211\u7684\u6807\u9898",rightButtonTitle:"\u70b9\u6211",onRightButtonPress:function(){f("\u53f3\u4fa7\u6309\u94ae\u88ab\u70b9\u51fb\u4e86"),e.setState({clickedText:"\u70b9\u4e86 ^_^"})},isShowBackButton:!0})}},{key:"payTo",value:function(){fastman.onNavigateTo({title:"\u5fae\u4fe1\u652f\u4ed8",uri:"../../wx-pay.html"})}},{key:"selected",value:function(e,t){var a=this.state.fundList,n=a.indexOf(t);-1===n?a.push(t):a.splice(n,1),this.setState({fundList:a})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{class:"container",id:"container"},i.a.createElement("div",{class:"page input js_show"},i.a.createElement("div",{class:"page__bd"},i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("img",{src:b.a,className:"App-logo",alt:"logo"})),i.a.createElement("div",{class:"weui-cells__title"},"React\u6ce8\u518c\u6865\u63a5\u5e76\u6388\u6743"),i.a.createElement("div",{class:"weui-cells weui-cells_form"},i.a.createElement("div",{class:"weui-cell"},i.a.createElement("div",{class:"weui-cell__hd"},i.a.createElement("label",{class:"weui-label"},"token")),i.a.createElement("div",{class:"weui-cell__bd"},i.a.createElement("input",{id:"token",class:"weui-input",type:"text",value:this.state.token}))),i.a.createElement("div",{class:"weui-cell"},i.a.createElement("div",{class:"weui-cell__hd"},i.a.createElement("label",{class:"weui-label"},"vtDeviceId")),i.a.createElement("div",{class:"weui-cell__bd"},i.a.createElement("input",{id:"vtDeviceId",class:"weui-input",type:"text",value:this.state.vtDeviceId})))),i.a.createElement("div",{class:"weui-footer"},i.a.createElement("p",{class:"weui-footer__text"},"\u6388\u4fe1\u66f4\u65b0\u65f6\u95f4 ",this.state.queryTime)),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn1",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:this.oauth},"oauth\u6388\u4fe1"))),i.a.createElement("div",{class:"page__bd"},i.a.createElement("div",{class:"weui-cells__title"},"\u767b\u5f55"),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn2",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:this.login},"\u5524\u8d77\u767b\u5f55")),i.a.createElement("div",{class:"weui-cells weui-cells_checkbox"},i.a.createElement("label",{class:"weui-cell weui-check__label",for:"s11"},i.a.createElement("div",{class:"weui-cell__hd"},i.a.createElement("input",{type:"checkbox",class:"weui-check",name:"checkbox1",id:"s11",checked:-1!==this.state.fundList.indexOf("3"),onChange:function(t){return e.selected(t,"3")}}),i.a.createElement("i",{class:"weui-icon-checked"})),i.a.createElement("div",{class:"weui-cell__bd"},i.a.createElement("p",null,"\u666e\u901a\u8d44\u91d1\u8d26\u53f7"))),i.a.createElement("label",{class:"weui-cell weui-check__label",for:"s12"},i.a.createElement("div",{class:"weui-cell__hd"},i.a.createElement("input",{type:"checkbox",name:"checkbox1",class:"weui-check",id:"s12",onChange:function(t){return e.selected(t,"6")}}),i.a.createElement("i",{class:"weui-icon-checked"})),i.a.createElement("div",{class:"weui-cell__bd"},i.a.createElement("p",null,"\u4e24\u878d\u8d26\u53f7"))),i.a.createElement("label",{class:"weui-cell weui-check__label",for:"s13"},i.a.createElement("div",{class:"weui-cell__hd"},i.a.createElement("input",{type:"checkbox",name:"checkbox1",class:"weui-check",id:"s13",onChange:function(t){return e.selected(t,"18")}}),i.a.createElement("i",{class:"weui-icon-checked"})),i.a.createElement("div",{class:"weui-cell__bd"},i.a.createElement("p",null,"\u671f\u6743\u8d26\u53f7")))),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn14",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:this.loginEnhance},"\u5524\u8d77\u52a0\u5f3a\u7248\u767b\u5f55"))),i.a.createElement("div",{class:"page__bd"},i.a.createElement("div",{class:"weui-cells__title"},"\u5206\u4eab"),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn3",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:function(){return e.share("2")}},"\u5fae\u4fe1\u670b\u53cb\u5708\u5206\u4eab")),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn4",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:function(){return e.share("1")}},"\u5fae\u4fe1\u597d\u53cb\u5206\u4eab")),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn5",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:function(){return e.share("4")}},"QQ\u597d\u53cb\u5206\u4eab")),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn6",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:function(){return e.share("3")}},"\u5fae\u535a\u5206\u4eab"))),i.a.createElement("div",{class:"page__bd"},i.a.createElement("div",{class:"weui-cells__title"},"\u5bfc\u822a"),i.a.createElement("div",{class:"weui-cell"},i.a.createElement("div",{class:"weui-cell__hd"},i.a.createElement("label",{class:"weui-label"},"H5 URL")),i.a.createElement("div",{class:"weui-cell__bd"},i.a.createElement("input",{id:"url",class:"weui-input",type:"text",placeholder:"\u8bf7\u8f93\u5165H5 URL",value:this.state.url,onChange:function(t){return e.setState({url:t.target.value})}})),i.a.createElement("div",{id:"btnClearText",class:"weui-cell__ft",onClick:function(){return e.setState({url:""})}},i.a.createElement("i",{class:"weui-icon-clear"}))),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn7",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:this.navigateTo},"\u524d\u8fdb")),i.a.createElement("div",{class:"weui-cell"},i.a.createElement("div",{class:"weui-cell__hd"},i.a.createElement("label",{class:"weui-label"},"\u539f\u751f URL")),i.a.createElement("div",{class:"weui-cell__bd"},i.a.createElement("input",{id:"url2",class:"weui-input",type:"text",placeholder:"\u8bf7\u8f93\u5165\u539f\u751f URL",value:this.state.url2,onChange:function(t){return e.setState({url2:t.target.value})}})),i.a.createElement("div",{id:"btnClearText2",class:"weui-cell__ft",onClick:function(){return e.setState({url2:""})}},i.a.createElement("i",{class:"weui-icon-clear"}))),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn11",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:this.navigateNativeTo},"\u524d\u8fdb")),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn8",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:this.navigateBack},"\u540e\u9000"))),i.a.createElement("div",{class:"page__bd"},i.a.createElement("div",{class:"weui-cells__title"},"\u7b2c\u4e09\u65b9\u8c03\u7528"),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn9",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:this.reqOK},"\u6a21\u62df\u6210\u529f\u8c03\u7528")),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn10",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:this.reqError},"\u6a21\u62df\u5931\u8d25\u8c03\u7528"))),i.a.createElement("div",{class:"page__bd"},i.a.createElement("div",{class:"weui-cells__title"},"\u8bbe\u7f6e\u5bfc\u822a\u5934"),i.a.createElement("div",{class:"weui-footer"},i.a.createElement("p",{class:"weui-footer__text"},this.state.clickedText)),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn12",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:this.navigateBar},"\u8bbe\u7f6e"))),i.a.createElement("div",{class:"page__bd"},i.a.createElement("div",{class:"weui-cells__title"},"\u5fae\u4fe1\u652f\u4ed8"),i.a.createElement("div",{class:"weui-btn-area"},i.a.createElement("a",{id:"btn13",class:"weui-btn weui-btn_primary",href:"javascript:",onClick:this.payTo},"\u6d4b\u8bd5\u652f\u4ed8")))),i.a.createElement("div",{class:"weui-footer"},i.a.createElement("p",{class:"weui-footer__text"},"Copyright \xa9 2019-2025 orientsec.ued")))}}]),t}(i.a.Component);c.a.render(i.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[11,1,2]]]);
//# sourceMappingURL=main.0da739f5.chunk.js.map