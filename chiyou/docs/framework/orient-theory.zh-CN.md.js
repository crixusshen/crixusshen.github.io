(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/framework/orient-theory.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-theory.zh-CN.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-theory.zh-CN.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "/docs/framework/orient-theory"
        },
        [
          "img",
          {
            "title": null,
            "src": "https://s2.ax1x.com/2020/02/09/1hStbV.png",
            "alt": "蚩尤（CHIYOU）原理"
          }
        ]
      ]
    ],
    [
      "h2",
      "原理"
    ],
    [
      "p",
      "在蚩尤（CHIYOU）架构内部内置了一个沙盒，它维护了所有子应用的配置信息，包括路由规则、bundle 地址等，同时劫持了 window.history 相关的几个跳转事件，当捕获到页面跳转事件时，icestark 会根据跳转的路由获取对应的子应用信息，然后跟之前的子应用信息进行对比，如果是同一个子应用，则什么都不做，如果是不同的子应用，则将前一个子应用的 bundle 卸载，同时加载新的子应用 bundle 资源，加载完成后子应用 bundle 会执行自身的渲染逻辑。"
    ],
    [
      "h2",
      "框架应用（主应用）"
    ],
    [
      "p",
      "一个系统只有一个框架应用，框架应用负责系统整体的 ",
      [
        "code",
        "Layout"
      ],
      " 以及子应用的管理与注册。"
    ],
    [
      "h2",
      "子应用"
    ],
    [
      "p",
      "子应用通常是一个单页面应用，可能包含一个或多个页面，子应用负责自身相关的几个页面代码和处理逻辑。你可以使用任何技术栈来开发你的子应用，当然蚩尤也提供了基于 react 的子应用（同构），它包含了所有你在开发中需要使用到的技术点。"
    ]
  ],
  "meta": {
    "category": "指南",
    "order": 1,
    "title": "核心概念与原理",
    "filename": "docs/framework/orient-theory.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#原理",
          "title": "原理"
        },
        "原理"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#框架应用（主应用）",
          "title": "框架应用（主应用）"
        },
        "框架应用（主应用）"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#子应用",
          "title": "子应用"
        },
        "子应用"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-theory.zh-CN.md.js.map