(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/framework/orient-use-principle.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-use-principle.zh-CN.md":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-use-principle.zh-CN.md ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h2",
      "框架应用职责明确"
    ],
    [
      "p",
      "框架应用只做两件事："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "系统整体 Layout 的设计"
        ]
      ],
      [
        "li",
        [
          "p",
          "所有子应用的配置与注册"
        ]
      ]
    ],
    [
      "p",
      "框架应用不应该有具体页面的 UI 代码，如果框架应用做了过多的工作会带来以下诸多问题："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "如果框架应用样式代码过多，会增加子应用和框架应用的样式冲突概率"
        ]
      ],
      [
        "li",
        [
          "p",
          "如果框架应用为子应用提供其他能力，会破坏子应用的独立性，增加互相的耦合性"
        ]
      ],
      [
        "li",
        [
          "p",
          "框架应用本质是一个中心化的部分，变更后原则上需要回归所有子应用，因此需要保证职责的简单，越简单的东西稳定性越能得到保障"
        ]
      ]
    ],
    [
      "h2",
      "子应用的路由通过前缀约定管理"
    ],
    [
      "p",
      "子应用尽量按照系统功能来拆分，同时在路由设计上也可以与功能同步，比如某个子应用负责某个业务领域的功能，则可以将 ",
      [
        "code",
        "/{业务领域标识}/xxx"
      ],
      " 的路由前缀分配给该子应用，这样无论对于管理还是单个子应用的开发都会方便很多。"
    ]
  ],
  "meta": {
    "category": "指南",
    "order": 2,
    "title": "使用原则",
    "filename": "docs/framework/orient-use-principle.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#框架应用职责明确",
          "title": "框架应用职责明确"
        },
        "框架应用职责明确"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#子应用的路由通过前缀约定管理",
          "title": "子应用的路由通过前缀约定管理"
        },
        "子应用的路由通过前缀约定管理"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-use-principle.zh-CN.md.js.map