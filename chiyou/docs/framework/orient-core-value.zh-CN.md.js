(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/framework/orient-core-value.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-core-value.zh-CN.md":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-core-value.zh-CN.md ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "先抛砖引玉下，蚩尤（CHIYOU）架构的核心价值在于 “技术栈无关”，这才是它诞生的主要理由。"
    ],
    [
      "h2",
      "为什么“技术栈无关”那么重要？"
    ],
    [
      "p",
      "在回答这个问题之前我每次都会试着去通过现有的方式来回答下面两个场景（它们确实是存在的，而且普遍很多），如果通过现在的模式和方式可以解决这两个场景问题，那么 ",
      [
        "code",
        "蚩尤架构"
      ],
      " 对你的作用并不是很大。"
    ],
    [
      "h3",
      "场景一：如何保证在一个 N 年的陈旧项目上持续迭代增加功能？"
    ],
    [
      "p",
      "直接用 react/vue 开发，反正它们都是 ui 库，给一个 dom 节点就可以渲染出来界面。这样的考虑或许比较浅显，因为只考虑了浮在表层的视图实现，却没有考虑沉在底下的工程实施。同时对于异构应用的工程实施就更加复杂了，如果这个陈旧项目还是使用服务端 web 技术开发的，如 php, java web, .net 等。"
    ],
    [
      "h3",
      "场景二：如何保证一个技术方案在 N 年内还具有生命力，不会在 N 年后又变成一个遗产项目？"
    ],
    [
      "p",
      "不要说技术方案是否可以延续，就拿 react 来说，版本 15 和 16 都是不兼容的，hooks 不能用在 class component 上；那打包方案呢？现在默认还好都是 webpack，那么 webpack 升级呢？版本 3 和 4 的差异就是很大的，当然别忘了还有 babel、less、typescript 也是如此。所以没有任何一个项目一年后把所有的依赖包升级到最新还能正常运行的。"
    ],
    [
      "blockquote",
      [
        "p",
        "因此结合上面的两个场景，我们提出了针对大部分企业应用的最终诉求：如何保证我的遗产项目能够平滑的迁移，以及如何保证我们在若干年之后还能使用当下热门的技术栈？"
      ]
    ],
    [
      "h2",
      "撒旦的归撒旦，耶稣的归耶稣"
    ],
    [
      "p",
      "蚩尤（CHIYOU）架构在主系统上构造一个非常轻量的“基座”，然后让各个子应用按照共同的协议来实现。"
    ],
    [
      "p",
      "这个协议可以包括，框架应用应该如何加载子应用，以及子应用又如何被框架应用调度，应用之间又如何通信等等。"
    ],
    [
      "p",
      "这个协议不可以包括，子应用要如何的保证隔离性、安全性，也就是说子应用除了实现一些简单的协议之外，与开发一个正常的 spa 应用应该没有任何的差异性，包括不应该有开发、构建和发布等流程上的侵入性。"
    ],
    [
      "h2",
      "巨石应用解构"
    ],
    [
      "p",
      "使用 蚩尤（CHIYOU）架构 可以很好的解构一个巨石应用，从而解决巨石应用随着技术更迭、人员流动、产品升级等带来的工程上的不可抗力的问题。解构之后我们还需要考虑如何再重组，即如何提升产品的自由组合能力，整个重组过程中又会遇到各种隔离性、依赖去重、通信、应用流程编排等硬性问题。解决了上面这些问题后，才是产品能力的自由组合和输出的阶段。"
    ]
  ],
  "meta": {
    "category": "架构",
    "order": 2,
    "title": "核心价值",
    "filename": "docs/framework/orient-core-value.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#为什么“技术栈无关”那么重要？",
          "title": "为什么“技术栈无关”那么重要？"
        },
        "为什么“技术栈无关”那么重要？"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#撒旦的归撒旦，耶稣的归耶稣",
          "title": "撒旦的归撒旦，耶稣的归耶稣"
        },
        "撒旦的归撒旦，耶稣的归耶稣"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#巨石应用解构",
          "title": "巨石应用解构"
        },
        "巨石应用解构"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-core-value.zh-CN.md.js.map