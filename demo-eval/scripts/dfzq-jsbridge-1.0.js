/*!
 * /*!
 *  * ============================================================
 *  *
 *  * Orientsec fastman By ShenZhiWei - http://www.dfzq.com.cn/
 *  *
 *  * ============================================================
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fastman"] = factory();
	else
		root["fastman"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pageWillAppear = exports.onRequest = exports.onDynamicLink = exports.subscribeNotify = exports.onNotify = exports.onPushView = exports.onNavigationBar = exports.onRefresh = exports.onBack = exports.ready = undefined;

var _util = __webpack_require__(1);

// 区分设备系统
var ua = navigator.userAgent; /**
                               * Created by dfzq on 2017/4/13.
                               */

var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
var isFromApp = !!ua.toLowerCase().match(/DFYJ/i);

// 初始化桥接对象
var init = function init(bridge) {
    bridge.init(function (message, responseCallback) {
        if (responseCallback) responseCallback(data);
    });

    return bridge;
};

/**
 * 初始化桥接对象
 * connectWebViewJavascriptBridge
 * @param callback
 */
var ready = function ready(callback) {
    if (isFromApp) {
        if (ipad || iphone || ipod) {
            // 新版本兼容IOS
            if (window.WebViewJavascriptBridge) {
                return callback(WebViewJavascriptBridge);
            }
            if (window.WVJBCallbacks) {
                return window.WVJBCallbacks.push(callback);
            }
            window.WVJBCallbacks = [callback];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'https://__bridge_loaded__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function () {
                document.documentElement.removeChild(WVJBIframe);
            }, 0);
        } else if (android) {
            // 旧版本兼容Android
            if (window.WebViewJavascriptBridge) {
                callback(init(WebViewJavascriptBridge));
            } else {
                document.addEventListener('WebViewJavascriptBridgeReady', function () {
                    // 以异步形式加载
                    callback(init(WebViewJavascriptBridge));
                }, false);
            }
        } else {
            callback();
        }
    } else {
        callback();
    }
};

// 空函数
var noop = function noop() {};

/**
 * APP WebView后退，后退到栈的最外层
 * @param options
 */
var onBack = function onBack(options) {
    // 默认配置
    var _options = {
        complete: noop
    };
    // 复制
    _options = (0, _util._extends)({}, _options, options);

    WebViewJavascriptBridge.callHandler('back', _options, function (response) {
        _options.complete(response);
    });
};

/**
 * APP WebView刷新
 * @param options
 */
var onRefresh = function onRefresh(options) {
    var _options = {
        complete: noop
    };
    _options = (0, _util._extends)({}, _options, options);

    WebViewJavascriptBridge.callHandler('refresh', _options, function (response) {
        _options.complete(response);
    });
};

/**
 * 设置原生导航条
 * @param options
 * {
 *    "title": "xxxxx",
 *    "type": "0"       // 0-默认 1-切换类
 * }
 */
var onNavigationBar = function onNavigationBar(options) {
    var _options = {
        complete: noop
    };
    _options = (0, _util._extends)({}, _options, options);

    WebViewJavascriptBridge.callHandler('navigationBar', _options);
};

/**
 * 打开一个新的webview
 * @param options
 * {
 *    "title": "xxxxx",      // 导航名称，如果html设置title，以html为主
 *    "uri": "xxxxxxx"       // webview请求的路由地址，目前只支持http协议，今后可支持shema协议
 * }
 */
var onPushView = function onPushView(options) {
    var _options = {
        title: ''
    };
    _options = (0, _util._extends)({}, _options, options);

    if (!!_options.uri) {
        if (_options.uri.indexOf('http') != -1 || _options.uri.indexOf('https') != -1) {} else {
            _options.uri = (0, _util.getAbsoluteUrl)(_options.uri);
        }
    }

    WebViewJavascriptBridge.callHandler('pushView', _options);
};

/**
 * 原生页面将要出现时触发的事件
 * @param callback
 */
var pageWillAppear = function pageWillAppear(callback) {
    if (typeof callback == 'function') WebViewJavascriptBridge.registerHandler("pageWillAppear", callback);
};

/**
 * H5发送通知给客户端
 * @param options
 */
var onNotify = function onNotify(options) {
    var _options = {
        type: 'javascriptNotify'
    };
    _options = (0, _util._extends)({}, _options, options);

    WebViewJavascriptBridge.callHandler('notify', _options);
};

/**
 * H5注册通知，由客户端进行通知
 * @param type  事件类型名称
 * @param callback  回调处理
 */
var subscribeNotify = function subscribeNotify(type, callback) {
    if (typeof callback == 'function') {
        WebViewJavascriptBridge.registerHandler(type, callback);
    }
};

/**
 * 调用Schema Url
 * @param options
 */
var onDynamicLink = function onDynamicLink(options) {
    var _options = {
        url: ''
    };
    _options = (0, _util._extends)({}, _options, options);

    WebViewJavascriptBridge.callHandler('dynamicLink', _options);
};

/**
 * 调用Request指令（通常作用在一些原生和客户端之间比较特殊的操作）
 * @param operationType     操作指令（见文档）
 * @param payloadOptions    消息体结构
 */
var onRequest = function onRequest(operationType, payloadOptions, okCallBack, notOkCallBack) {
    var _options = {
        type: !operationType ? '1' : operationType,
        payload: !payloadOptions ? {} : payloadOptions
    };

    WebViewJavascriptBridge.callHandler('request', _options, function (response) {
        if (typeof response == 'string') {
            response = JSON.parse(response);
        }

        if (response.error || response.error === 'true') {
            if (typeof notOkCallBack === 'function') {
                notOkCallBack(response.info);
            }
        } else {
            if (typeof okCallBack === 'function') {
                okCallBack(response.payload);
            }
        }
    });
};

exports.ready = ready;
exports.onBack = onBack;
exports.onRefresh = onRefresh;
exports.onNavigationBar = onNavigationBar;
exports.onPushView = onPushView;
exports.onNotify = onNotify;
exports.subscribeNotify = subscribeNotify;
exports.onDynamicLink = onDynamicLink;
exports.onRequest = onRequest;
exports.pageWillAppear = pageWillAppear;

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by dfzq on 2017/4/13.
 */
/**
 * 获取绝对路径
 * @param url
 */
var getAbsoluteUrl = function getAbsoluteUrl(url) {
    var link = document.createElement('a');
    link.setAttribute('href', url);
    var absoluteUrl = link.href;
    link = null;
    return absoluteUrl;
};

/**
 * 属性继承
 * @type {*}
 * @private
 */
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            // 源对象中是否存在对象键值
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

exports.getAbsoluteUrl = getAbsoluteUrl;
exports._extends = _extends;

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onShare = exports.onLogin = exports.oauth = exports.ready = undefined;

var _core = __webpack_require__(0);

var isRegisterOk = false;

// 空函数
/**
 * Created by dfzq on 2017/8/17.
 */
var noop = function noop() {};

/**
 * 成功消息体的包装
 * @param payload 成功对象
 */
var wrapOkPayload = function wrapOkPayload() {
    var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return {
        error: false,
        info: 'ok',
        payload: payload
    };
};

/**
 * 失败消息体的包装
 * @param info 错误描述
 */
var wrapNotOkPayload = function wrapNotOkPayload() {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'error';
    return {
        error: true,
        info: info
    };
};

// blankPage
var blankPage = function blankPage() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '请在东方赢家财富版客户端打开链接';

    var bHtml = document.createElement('div');
    bHtml.style.cssText = 'display:table;position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;background:white;z-index:99999;';
    bHtml.innerHTML = '<div style="display:table-cell;vertical-align: middle;text-align: center;">' + message + '</div>';

    document.body.appendChild(bHtml);
};

// 是否来自于APP
var isFromApp = function isFromApp() {
    return !!navigator.userAgent.toLowerCase().match(/DFYJ/i);
};

// 是否来自于微信
var isFromWeiXin = function isFromWeiXin() {
    return !!navigator.userAgent.toLowerCase().match(/MicroMessenger/i);
};

/**
 * 初始化桥接
 * @param callback 成功回调
 */
var ready = function ready() {
    var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;


    if (isFromApp()) {
        (0, _core.ready)(callback);
    } else {
        blankPage();
    }
};

/**
 * 启动授权
 * APP：走refreshToken授权模式，获取token和vtDeviceId
 * @param callback 回调函数处理
 * @constructor
 */
var oauth = function oauth() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { success: noop, fail: noop };


    if (isFromApp()) {
        // 首先建立js桥接模式
        if (!isRegisterOk) {
            isRegisterOk = true;

            if (WebViewJavascriptBridge) {
                WebViewJavascriptBridge.callHandler('refreshToken', {}, function (response) {
                    if (typeof response == 'string') {
                        response = JSON.parse(response);
                    }

                    // 成功处理
                    if (response.code == '0') {
                        var AppAuthorize = {};
                        // 为APP授权模块标志授权标识token和虚拟设备ID
                        AppAuthorize.token = response.token;
                        AppAuthorize.vtDeviceId = response.vtDeviceId;

                        if (typeof options.success === 'function') {
                            var payload = wrapOkPayload(AppAuthorize);
                            options.success(payload);
                        }
                    }
                    // 失败处理
                    else {
                            if (typeof options.fail === 'function') {
                                var error = wrapNotOkPayload('桥接程序建立失败');
                                options.fail(error);
                            }
                        }

                    isRegisterOk = false;
                });
            }
        }
    } else {
        blankPage();
    }
};

/**
 * 打开原生登录视图
 * @param _
 */
var onLogin = function onLogin() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { success: noop, fail: noop };


    if (isFromApp()) {
        (0, _core.onRequest)('2', '', options.success, options.fail);
    } else {
        blankPage();
    }
};

/**
 * 分享
 * @param channel 渠道类型，"1":微信好友 "2":微信朋友圈 "3":新浪微博 "4":qq好友
 * @param title 分享标题名称
 * @param description 分享摘要信息
 * @param thumbImageUrl 缩略图片地址，需要压缩到32kb
 * @param link 跳转地址
 * @param ext 扩展字段
 */
var onShare = function onShare() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        channel: '1',
        title: '',
        description: '',
        thumbImageUrl: 'http://wxs.dfzq.com.cn/fileRes/new_download/images/new_pic.jpg',
        link: '',
        ext: '',
        success: noop,
        fail: noop
    };


    if (isFromApp()) {
        (0, _core.onRequest)('4', {
            channel: options.channel,
            title: options.title,
            description: options.description,
            thumbImageUrl: options.thumbImageUrl,
            link: options.link,
            ext: options.ext
        }, options.success, options.fail);
    } else {
        blankPage();
    }
};

exports.ready = ready;
exports.oauth = oauth;
exports.onLogin = onLogin;
exports.onShare = onShare;

/***/ })

/******/ });
});
//# sourceMappingURL=dfzq-jsbridge-1.0.js.map