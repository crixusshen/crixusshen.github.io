/**
 * Created by dfzq on 2017/8/17.
 * dfzq jsbridge-sdk
 * v1.0 : 支持ready, oauth, onLogin, onShare, onNavigateTo, onNavigateBack指令
 * v1.1 : 支持onReq, isFromApp指令，并规范了相关success, fail闭包的消息输出结构
 * v1.2 : 支持onNavigateNativeTo，onNavigate指令，同时新增onApiRequest兼容性处理
 * v1.3 : 修复IOS缩略图尺寸过大(小于32kb)导致无法微博分享的bug
 * v1.4 : 增加微信支付、视图出现回调函数
 * v1.5 : 增加onLoginEnhance 登录加强版 支持资金账号登录
 * v1.6 : 增加开发者模式
 */
import {
  _extends
} from '../util'
import {
  wrapOkPayload,
  wrapNotOkPayload,

  ready as init,
  onRequest,
  onPushView,
  onBack,
  onApiRequest,
  onDynamicLink,
  onNavigationBar,
  pageWillAppear,
} from '../core'
import {
  compareVersion
} from '../version'
import {
  log,
} from '../log'

let isRegisterOk = false;

// 空函数
let noop = function () {}

// 区分设备系统
var ua = navigator.userAgent
var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/)
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)

// blankPage
const blankPage = (message = '请在东方赢家财富版客户端打开链接') => {
  let bHtml = document.createElement('div')
  bHtml.style.cssText = 'display:table;position:absolute;left:0;right:0;top:0;bottom:0;width:100%;height:100%;background:white;z-index:99999;'
  bHtml.innerHTML = '<div style="display:table-cell;vertical-align: middle;text-align: center;">' + message + '</div>'

  document.body.appendChild(bHtml)
}

// 是否来自于APP
const isFromApp = () => !!navigator.userAgent.toLowerCase().match(/DFYJ/i)

// 是否来自于微信
const isFromWeiXin = () => !!navigator.userAgent.toLowerCase().match(/MicroMessenger/i)

/**
 * 初始化桥接
 * @param callback 成功回调
 */
const ready = (callback = noop) => {

  init(callback)

}

/**
 * 启动授权
 * APP：走refreshToken授权模式，获取token和vtDeviceId
 * @param callback 回调函数处理
 * @constructor
 */
const oauth = (options) => {

  // 默认值
  let defaultOptions = {
    success: noop,
    fail: noop
  }
  options = _extends({}, defaultOptions, options)

  if (isFromApp()) {
    // 首先建立js桥接模式
    if (!isRegisterOk) {
      isRegisterOk = true

      if (WebViewJavascriptBridge) {
        log("oauth start")
        WebViewJavascriptBridge.callHandler('refreshToken', {}, function (response) {
          log("oauth end")
          if (typeof response == 'string') {
            response = JSON.parse(response)
          }

          // 成功处理
          if (response.code == '0') {
            log("oauth successful:" + JSON.stringify(response))
            let AppAuthorize = {}
            // 为APP授权模块标志授权标识token和虚拟设备ID
            AppAuthorize.token = response.token
            AppAuthorize.vtDeviceId = response.vtDeviceId

            if (typeof options.success === 'function') {
              let payload = wrapOkPayload(AppAuthorize)
              options.success(payload)
            }
          }
          // 失败处理
          else {
            log("oauth failure:" + JSON.stringify(response))
            if (typeof options.fail === 'function') {
              let error = wrapNotOkPayload(-1, '桥接程序建立失败')
              options.fail(error)
            }
          }

          isRegisterOk = false
        })
      }
    }
  } else {
    blankPage()
  }

}

/**
 * 打开原生登录视图
 * @param _
 */
const onLogin = (options) => {

  // 默认值
  let defaultOptions = {
    success: noop,
    fail: noop
  }
  options = _extends({}, defaultOptions, options)

  if (isFromApp()) {
    onRequest('2', '', options.success, options.fail)
  } else {
    blankPage()
  }

}

/**
 * [onLoginEnhance 打开加强版原生登录视图]
 * @param  {[type]} options [{
 *  fundtype: string 3集中交易  6融资融券 18期权  多个时用逗号相隔 3,6,18
 *  success:function(res){ 登录之后的回调函数
 *  res.isLogin bool 是否登录成功
 *  res.bizSysId 3集中交易  6融资融券 18期权 表示登录成功之后的账号类型
 *  }
 * }]
 * @return {[type]}         [description]
 */
const onLoginEnhance = (options) => {
  let defaultOptions = {
    success: noop,
    fail: noop
  }
  options = _extends({}, defaultOptions, options)
  options.type = "1";
  if (isFromApp()) {
    onRequest('1', options, options.success, options.fail)
  } else {
    blankPage()
  }

}

/**
 * 分享
 * @param channel 渠道类型，"1":微信好友 "2":微信朋友圈 "3":新浪微博 "4":qq好友
 * @param title 分享标题名称
 * @param description 分享摘要信息
 * @param thumbImageUrl 缩略图片地址，需要压缩到32kb
 * @param link 跳转地址
 * @param ext 扩展字段
 */
const onShare = (options) => {

  // 默认值
  let defaultOptions = {
    channel: '1',
    title: '',
    description: '',
    thumbImageUrl: 'http://wxs.dfzq.com.cn/fileRes/new_download/images/new_pic.jpg',
    link: '',
    ext: '',
    success: noop,
    fail: noop,
  }
  options = _extends({}, defaultOptions, options)

  if (isFromApp()) {

    // 微博分享的缩略图必须小于32kb，目前ios没有做限制，因此采用一张默认图片来代替从而保证可以正常进行微博分享
    if (options.channel == '3' && (ipad || iphone || ipod)) {
      options.thumbImageUrl = defaultOptions.thumbImageUrl
    }

    onRequest('4', {
      channel: options.channel,
      title: options.title,
      description: options.description,
      thumbImageUrl: options.thumbImageUrl,
      link: options.link,
      ext: options.ext,
    }, options.success, options.fail)
  } else {
    blankPage()
  }

}

/**
 * 保留当前页面，跳转到应用内的某个页面，使用onNavigateBack可以返回到原页面。
 * @param _
 */
const onNavigateTo = (options) => {

  // 默认值
  let defaultOptions = {
    title: '',
    uri: '',
    success: noop,
    fail: noop
  }
  options = _extends({}, defaultOptions, options)

  if (isFromApp()) {
    onPushView(options)
  } else {
    blankPage()
  }

}

/**
 * 关闭当前页面，返回上一页面或多级页面。
 * @param _
 */
const onNavigateBack = (options) => {

  // 默认值
  let defaultOptions = {
    title: '',
    uri: '',
    success: noop,
    fail: noop
  }
  options = _extends({}, defaultOptions, options)

  if (isFromApp()) {
    options.complete = options.success
    onBack(options)
  } else {
    blankPage()
  }

}

/**
 * 第三方接口调用请求
 * @param functionNo    功能号
 * @param options
 */
const onReq = (functionNo, options) => {
  // 默认值
  let defaultOptions = {
    success: noop,
    fail: noop
  }
  options = _extends({}, defaultOptions, options)

  if (isFromApp()) {
    onApiRequest(functionNo, options, options.success, options.fail)
  } else {
    blankPage()
  }
}

/**
 * 使用schema协议实现原生页面跳转。
 * @param _
 */
const onNavigateNativeTo = (options) => {

  // 默认值
  let defaultOptions = {
    url: '',
    success: noop,
    fail: noop
  }
  options = _extends({}, defaultOptions, options)

  // >=3.2.6使用dfyj20170811://dl，<3.2.6使用dfyj://dl
  let $versionCompare = compareVersion('3.2.6')
  if ($versionCompare >= 0 && options.url != '') {
    options.url = options.url.replace('dfyj://dl', 'dfyj20170811://dl')
  }

  if (isFromApp()) {
    onDynamicLink(options)
  } else {
    blankPage()
  }

}

/**
 * 设置导航头
 * @param options
 */
const onNavigateBar = (options) => {

  // 默认值
  let defaultOptions = {
    title: '',
    type: '0',
    rightButtonTitle: '',
    onRightButtonPress: noop,
    isShowBackButton: true,
    success: noop,
    fail: noop
  }
  options = _extends({}, defaultOptions, options)

  if (isFromApp()) {
    if (options.onRightButtonPress != noop) {
      if (WebViewJavascriptBridge) {
        WebViewJavascriptBridge.registerHandler("onRightButtonPress", options.onRightButtonPress)
      }
    }

    onNavigationBar(options)
  } else {
    blankPage()
  }

}

/**
 * 微信支付
 * @param appId 微信开放平台审核通过的应用APPID
 * @param partnerId 商家向财付通申请的商家id
 * @param prePayId 预支付订单
 * @param noncestr 随机串，防重发
 * @param timestamp 时间戳，防重发
 * @param package 商家根据财付通文档填写的数据和签名
 * @param sign 商家根据微信开放平台文档对数据做的签名
 */
const onWxPay = (options) => {
  // 默认值
  let defaultOptions = {
    //
    appId: "",
    // 商家向财付通申请的商家id
    partnerId: "",
    // 预支付订单
    prePayId: "",
    // 随机串，防重发
    noncestr: "",
    // 时间戳，防重发
    timestamp: "",
    // 商家根据财付通文档填写的数据和签名
    package: "Sign=WXPay",
    // 商家根据微信开放平台文档对数据做的签名
    sign: "",
  }
  options = _extends({}, defaultOptions, options)

  if (isFromApp()) {
    onRequest('5', {
      appId: options.appId,
      partnerId: options.partnerId,
      prePayId: options.prePayId,
      noncestr: options.noncestr,
      timestamp: options.timestamp,
      package: options.package,
      sign: options.sign,
    }, options.success, options.fail)
  } else {
    blankPage()
  }
}

/**
 * 视图出现时（通常是当前视图被某个视图盖在了底层，当上面的视图消失后）触发
 * @param callback 需要回调处理的函数实现
 */
const onViewWillAppear = callback => {
  if (typeof callback == 'function') {
    if (isFromApp()) {
      log('pageWillAppear->{}')
      // 只能作用于authReady模式下，如果是noAuthReady可直接使用框架自身提供的pageWillAppear事件
      pageWillAppear(function () {
        if (document.readyState[0] !== "l") {
          log('pageWillAppear<-{DOMContentReady:yes}')
          callback()
        } else {
          document.addEventListener("DOMContentLoaded", function(){
            log('pageWillAppear<-{DOMContentLoaded:yes}')
            callback()
          })
        }
      })
    } else {
      blankPage()
    }
  }
}

export {
  isFromApp,
  isFromWeiXin,
  ready,
  oauth,
  onLogin,
  onShare,
  onNavigateTo,
  onNavigateBack,
  onReq,
  onNavigateNativeTo,
  onNavigateBar,
  onWxPay,
  onViewWillAppear,
  onLoginEnhance
}