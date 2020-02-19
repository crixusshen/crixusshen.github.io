(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-assert.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-assert.zh-CN.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-assert.zh-CN.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "为提高项目的开发效率，蚩尤提供了一批高质量的",
      [
        "code",
        "React"
      ],
      "资源，这些资源包括组件、模板、区块。"
    ],
    [
      "h2",
      "组件"
    ],
    [
      "h2",
      "基础组件"
    ],
    [
      "p",
      "蚩尤使用了 ",
      [
        "code",
        "Ant Design"
      ],
      " 的开源组件库，并在其上层做了一层封装，它并没有对 ",
      [
        "code",
        "Ant Design"
      ],
      " 进行二次开发，考虑到 ",
      [
        "code",
        "Ant Design"
      ],
      " 每个月都会定量发布新的特性支持，而且不同的版本（目前最新为 V4）在 API 的使用上存在非常大的差异，同时为了兼容已使用并计划使用它但又不需要考虑版本的用户群体，因此最终我们决定只在其上层进行一层封装以满足企业内部的品牌需求（Orient Design），假设你之前的中后台平台就是基于它来建设的，只需要非常简单的方式就可以接入蚩尤。"
    ],
    [
      "p",
      [
        "code",
        "Orient Design"
      ],
      "是东方证券内部 UED 团队经过无数中后台系统需求所历练出来的一套设计语言规范，它更加适合金融场景下的业务需求。而蚩尤团队和 UED 团队则一起合作打造出一套符合 ",
      [
        "code",
        "Orient Design"
      ],
      " 设计语言规范的基础组件库以满足各种业务场景的需要，具体可跳至 ",
      [
        "a",
        {
          "title": null,
          "href": "/components/button"
        },
        "传送门:基础组件"
      ],
      " 了解详细使用。"
    ],
    [
      "h2",
      "业务组件"
    ],
    [
      "p",
      "除了基础组件，我们针对不同业务场景封装了很多 ",
      [
        "a",
        {
          "title": null,
          "href": ""
        },
        "TODO 传送门:业务组件"
      ]
    ],
    [
      "h2",
      "模板"
    ],
    [
      "div",
      {
        "style": "text-align: center; margin: 40px 0px;"
      },
      [
        "img",
        {
          "width": "100%",
          "src": "https://s2.ax1x.com/2020/01/23/1VpcU1.png"
        }
      ]
    ],
    [
      "p",
      "模板，即一个页面。"
    ],
    [
      "p",
      "针对不同的业务场景蚩尤不仅可以使用官方社区模板，目前支持两大官方社区，分别是 antd 和 umi，同时它也支持私有模板的自定义定制，这些模板能帮助开发者降低很多开发成本。"
    ],
    [
      "p",
      "模板创建方式，有两种方式："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "通过 umi ui 可视化方式创建（推荐）"
        ]
      ],
      [
        "li",
        [
          "p",
          "通过命令行方式创建，如下选择 app 类型"
        ]
      ]
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ yarn create umi  # <span class=\"token operator\">or</span> npm create umi\n\n# Choose ant<span class=\"token operator\">-</span>design<span class=\"token operator\">-</span>pro<span class=\"token punctuation\">:</span>\n <span class=\"token keyword\">Select</span> the boilerplate type <span class=\"token punctuation\">(</span>Use arrow keys<span class=\"token punctuation\">)</span>\n❯ ant<span class=\"token operator\">-</span>design<span class=\"token operator\">-</span>pro  <span class=\"token operator\">-</span> Create project <span class=\"token keyword\">with</span> an layout<span class=\"token operator\">-</span>only ant<span class=\"token operator\">-</span>design<span class=\"token operator\">-</span>pro boilerplate<span class=\"token punctuation\">,</span> use together <span class=\"token keyword\">with</span> umi block<span class=\"token punctuation\">.</span>\n  app             <span class=\"token operator\">-</span> Create project <span class=\"token keyword\">with</span> a simple boilerplate<span class=\"token punctuation\">,</span> support typescript<span class=\"token punctuation\">.</span>\n  block           <span class=\"token operator\">-</span> Create a umi block<span class=\"token punctuation\">.</span>\n  library         <span class=\"token operator\">-</span> Create a library <span class=\"token keyword\">with</span> umi<span class=\"token punctuation\">.</span>\n  plugin          <span class=\"token operator\">-</span> Create a umi plugin<span class=\"token punctuation\">.</span>"
      },
      [
        "code",
        "$ yarn create umi  # or npm create umi\n\n# Choose ant-design-pro:\n Select the boilerplate type (Use arrow keys)\n❯ ant-design-pro  - Create project with an layout-only ant-design-pro boilerplate, use together with umi block.\n  app             - Create project with a simple boilerplate, support typescript.\n  block           - Create a umi block.\n  library         - Create a library with umi.\n  plugin          - Create a umi plugin."
      ]
    ],
    [
      "h2",
      "区块"
    ],
    [
      "div",
      {
        "style": "text-align: center; margin: 40px 0px;"
      },
      [
        "img",
        {
          "width": "100%",
          "src": "https://s2.ax1x.com/2020/01/23/1VCst1.png"
        }
      ]
    ],
    [
      "p",
      "区块，即一个页面中的一部分，它通常是多个基础/业务组件的组合。"
    ],
    [
      "p",
      "区块是一些可复用的代码片段，开发者可以快速地把某个区块代码添加到模板的指定位置中，然后再做改动和二次加工，蚩尤针对战线形态的差异抽象了大量的区块，它同样来自两大社区，同样它也支持自定义。"
    ],
    [
      "p",
      "将 区块 添加到项目里面同样也有两种方式："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "通过 umi ui 可视化方式创建（推荐）"
        ]
      ],
      [
        "li",
        [
          "p",
          "通过命令行方式创建，如下选择 block 类型"
        ]
      ]
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ yarn create umi  # <span class=\"token operator\">or</span> npm create umi\n\n# Choose ant<span class=\"token operator\">-</span>design<span class=\"token operator\">-</span>pro<span class=\"token punctuation\">:</span>\n <span class=\"token keyword\">Select</span> the boilerplate type <span class=\"token punctuation\">(</span>Use arrow keys<span class=\"token punctuation\">)</span>\n❯ ant<span class=\"token operator\">-</span>design<span class=\"token operator\">-</span>pro  <span class=\"token operator\">-</span> Create project <span class=\"token keyword\">with</span> an layout<span class=\"token operator\">-</span>only ant<span class=\"token operator\">-</span>design<span class=\"token operator\">-</span>pro boilerplate<span class=\"token punctuation\">,</span> use together <span class=\"token keyword\">with</span> umi block<span class=\"token punctuation\">.</span>\n  app             <span class=\"token operator\">-</span> Create project <span class=\"token keyword\">with</span> a simple boilerplate<span class=\"token punctuation\">,</span> support typescript<span class=\"token punctuation\">.</span>\n  block           <span class=\"token operator\">-</span> Create a umi block<span class=\"token punctuation\">.</span>\n  library         <span class=\"token operator\">-</span> Create a library <span class=\"token keyword\">with</span> umi<span class=\"token punctuation\">.</span>\n  plugin          <span class=\"token operator\">-</span> Create a umi plugin<span class=\"token punctuation\">.</span>"
      },
      [
        "code",
        "$ yarn create umi  # or npm create umi\n\n# Choose ant-design-pro:\n Select the boilerplate type (Use arrow keys)\n❯ ant-design-pro  - Create project with an layout-only ant-design-pro boilerplate, use together with umi block.\n  app             - Create project with a simple boilerplate, support typescript.\n  block           - Create a umi block.\n  library         - Create a library with umi.\n  plugin          - Create a umi plugin."
      ]
    ]
  ],
  "meta": {
    "category": "开发",
    "order": 1,
    "title": "资源使用",
    "filename": "docs/dev/orient-assert.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#组件",
          "title": "组件"
        },
        "组件"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#基础组件",
          "title": "基础组件"
        },
        "基础组件"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#业务组件",
          "title": "业务组件"
        },
        "业务组件"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#模板",
          "title": "模板"
        },
        "模板"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#区块",
          "title": "区块"
        },
        "区块"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-assert.zh-CN.md.js.map