(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{376:function(module,exports,__webpack_require__){__webpack_require__(11),module.exports=__webpack_require__(377)},377:function(module,exports,__webpack_require__){"use strict";var _extendStatics,_interopRequireDefault=__webpack_require__(1),_defineProperty=_interopRequireDefault(__webpack_require__(0)),_create=_interopRequireDefault(__webpack_require__(35)),_setPrototypeOf=_interopRequireDefault(__webpack_require__(36)),$views=(__webpack_require__(378),__webpack_require__(13),__webpack_require__(44),__webpack_require__(46),__webpack_require__(45),__webpack_require__(380),__webpack_require__(382),__webpack_require__(383)),$mutations=__webpack_require__(385),__extends=(_extendStatics=function(d,b){return(_extendStatics=_setPrototypeOf.default||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}_extendStatics(d,b),d.prototype=null===b?(0,_create.default)(b):(__.prototype=b.prototype,new __)});(0,_defineProperty.default)(exports,"__esModule",{value:!0});var App=function(_super){function App(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.rootId="page-group",_this}return __extends(App,_super),App.prototype.registerContainer=function(){return{}},App.prototype.setViews=function(){return{"/":$views.main}},App.prototype.setModel=function(){return{name:"World"}},App.prototype.setRedies=function(){return[function(model,actions,error){console.log("readies .")}]},App.prototype.setHooks=function(){return{onPageInit:function(e,pageId,$page,actions,model){console.log("onPageInit")}}},App}(__webpack_require__(144).Bootstrap);exports.default=App,(new App).start($mutations)},378:function(module,exports,__webpack_require__){var content=__webpack_require__(379);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(142)(content,options);content.locals&&(module.exports=content.locals)},379:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(141)(!1)).push([module.i,"",""])},380:function(module,exports,__webpack_require__){"use strict";(0,__webpack_require__(1)(__webpack_require__(0)).default)(exports,"__esModule",{value:!0}),function(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}(__webpack_require__(381))},381:function(module,exports,__webpack_require__){"use strict";var _interopRequireDefault=__webpack_require__(1),_defineProperty=_interopRequireDefault(__webpack_require__(0)),_typeof2=_interopRequireDefault(__webpack_require__(10)),_getOwnPropertyDescriptor=_interopRequireDefault(__webpack_require__(27)),__decorate=function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=(0,_getOwnPropertyDescriptor.default)(target,key):desc;if("object"===("undefined"==typeof Reflect?"undefined":(0,_typeof2.default)(Reflect))&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&(0,_defineProperty.default)(target,key,r),r},__metadata=function(k,v){if("object"===("undefined"==typeof Reflect?"undefined":(0,_typeof2.default)(Reflect))&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};(0,_defineProperty.default)(exports,"__esModule",{value:!0});var annotationman_1=__webpack_require__(15),coreman_1=__webpack_require__(13),Template=function(){function Template(actionService){this.actionService=actionService}var _a;return Template=__decorate([annotationman_1.singleton(),__metadata("design:paramtypes",["function"==typeof(_a=void 0!==coreman_1.ActionService&&coreman_1.ActionService)?_a:Object])],Template)}();exports.Template=Template},382:function(module,exports,__webpack_require__){"use strict";(0,__webpack_require__(1)(__webpack_require__(0)).default)(exports,"__esModule",{value:!0})},383:function(module,exports,__webpack_require__){"use strict";(0,__webpack_require__(1)(__webpack_require__(0)).default)(exports,"__esModule",{value:!0});var main_1=__webpack_require__(384);exports.main=main_1.default},384:function(module,exports,__webpack_require__){"use strict";var _extendStatics,_interopRequireDefault=__webpack_require__(1),_defineProperty=_interopRequireDefault(__webpack_require__(0)),_create=_interopRequireDefault(__webpack_require__(35)),_setPrototypeOf=_interopRequireDefault(__webpack_require__(36)),__extends=(_extendStatics=function(d,b){return(_extendStatics=_setPrototypeOf.default||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])})(d,b)},function(d,b){function __(){this.constructor=d}_extendStatics(d,b),d.prototype=null===b?(0,_create.default)(b):(__.prototype=b.prototype,new __)});(0,_defineProperty.default)(exports,"__esModule",{value:!0});var h=__webpack_require__(13).h,MainComponent=function(_super){function MainComponent(){return null!==_super&&_super.apply(this,arguments)||this}return __extends(MainComponent,_super),MainComponent.prototype.render=function(model,actions){return h("div",{class:"page",id:"mainPage"},h("h1",null,"Hello ",model.name," ! "))},MainComponent}(__webpack_require__(143).View);exports.default=MainComponent},385:function(module,exports,__webpack_require__){"use strict";(0,__webpack_require__(1)(__webpack_require__(0)).default)(exports,"__esModule",{value:!0}),function(m){for(var p in m)exports.hasOwnProperty(p)||(exports[p]=m[p])}(__webpack_require__(386))},386:function(module,exports,__webpack_require__){"use strict";(0,__webpack_require__(1)(__webpack_require__(0)).default)(exports,"__esModule",{value:!0}),exports.mutationName=function(model,data,actions,error){return{name:"Fastman V2"}}}},[[376,0,1,2]]]);