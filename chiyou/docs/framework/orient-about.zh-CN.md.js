(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/framework/orient-about.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-about.zh-CN.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-about.zh-CN.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "蚩尤（CHIYOU）架构旨在解决一个单体应用在一个相对很长的时间跨度下，由于参与的人员、团队的增多、变迁，从一个普通应用逐渐演变成一个巨石应用（Frontend Monolith）后，随之而来的应用不可维护的问题。这类问题恰好是企业级 Web 应用中尤为常见的。"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "/docs/framework/orient-about"
        },
        [
          "img",
          {
            "title": null,
            "src": "https://s2.ax1x.com/2020/02/08/12zHZF.png",
            "alt": "蚩尤（CHIYOU）架构"
          }
        ]
      ]
    ],
    [
      "h2",
      "价值"
    ],
    [
      "p",
      "蚩尤（CHIYOU）架构具备以下几个核心价值："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "技术栈无关：主框架(框架应用)并不限制所接入应用(子应用)的技术栈，子应用具备完全的自主权和控制权"
        ]
      ],
      [
        "li",
        [
          "p",
          "独立开发、独立部署：子应用可仓库独立，前后端可独立开发，部署完成后框架应用自动完成同步更新"
        ]
      ],
      [
        "li",
        [
          "p",
          "独立运行时：每个子应用之间状态隔离，运行时状态不共享"
        ]
      ],
      [
        "li",
        [
          "p",
          "增量升级：在面对各种复杂业务场景时，通常我们很难去对一个已经存在的系统做全量的技术栈升级或重构，而该架构是一个非常好的来实施渐进式重构的策略和方案"
        ]
      ]
    ],
    [
      "h2",
      "针对中后台应用建设的解决方案"
    ],
    [
      "p",
      "面对现实问题，一个中后台应用的建设周期非常长（动辄 3+ 年），因此演变成为一个巨石应用的概率往往就比其他类型的 Web 应用要高。而从技术的实现角度来看，在建设过程中大多使用了两类场景："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "单实例：即在同一时刻，只有一个子应用被显示，子应用具备了一个完整的应用生命周期。一般通过 url 的变化来对子应用做切换。"
        ]
      ],
      [
        "li",
        [
          "p",
          "多实例：即在同一时刻，多个子应用被显示。一般通过 Web Components 方案来做子应用的封装，子应用看起来更像是一个业务组件而不是应用。"
        ]
      ]
    ],
    [
      "p",
      "蚩尤（CHIYOU）架构则基于 ",
      [
        "em",
        "单实例场景"
      ],
      " 来满足大部分中后台应用的建设。"
    ],
    [
      "h2",
      "基于 single-spa"
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "/docs/framework/orient-about"
        },
        [
          "img",
          {
            "title": null,
            "src": "https://s2.ax1x.com/2020/02/08/1Rkq8e.png",
            "alt": "基于 single-spa"
          }
        ]
      ]
    ],
    [
      "p",
      "上图中可以看出，MPA 方案的优点在于部署简单、各应用之间存在硬隔离性，天生就具备技术栈无关、独立开发、独立部署的特性。缺点也很明显，应用之间的切换会造成浏览器重新刷新，由于产品域名之间相互跳转，因此流程体验上会存在很大的断点。"
    ],
    [
      "p",
      "而 SPA 则天生具备了体验上的优势，应用之间可无刷新切换，能够极大的保证多产品之间流程操作串联时的流程性。缺点则在于各应用技术栈之间是强耦合的。"
    ],
    [
      "p",
      "蚩尤（CHIYOU）架构则基于 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/CanopyTax/single-spa"
        },
        "single-spa"
      ],
      " 来进行构建，来解决基于耦合技术栈的整体架构解决方案和技术实践。"
    ]
  ],
  "meta": {
    "category": "架构",
    "order": 1,
    "title": "关于架构",
    "filename": "docs/framework/orient-about.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#价值",
          "title": "价值"
        },
        "价值"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#针对中后台应用建设的解决方案",
          "title": "针对中后台应用建设的解决方案"
        },
        "针对中后台应用建设的解决方案"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#基于-single-spa",
          "title": "基于 single-spa"
        },
        "基于 single-spa"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-about.zh-CN.md.js.map