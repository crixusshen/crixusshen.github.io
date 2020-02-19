(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-layout.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-layout.zh-CN.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-layout.zh-CN.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "页面整体布局是一个产品最外层的框架结构，往往会包含导航、页脚、侧边栏、通知栏以及内容等。在页面之中，也有很多区块的布局结构。在真实项目中，页面布局通常统领整个应用的界面，有非常重要的作用。"
    ],
    [
      "h2",
      "基础布局"
    ],
    [
      "p",
      "我们基于 ",
      [
        "code",
        "antd-pro"
      ],
      " 的布局抽离了使用过程中的基础布局，都放在 ",
      [
        "code",
        "layouts"
      ],
      " 目录汇总，分别为："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "BasicLayout： 基础页面布局，包含了头部导航，侧边栏和通知栏："
        ]
      ]
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
          "src": "https://s2.ax1x.com/2020/01/27/1nDf6e.png"
        }
      ]
    ],
    [
      "p",
      "你可遵循这样的目录结构和方式来创建自己的布局。"
    ],
    [
      "h2",
      "如何使用布局"
    ],
    [
      "p",
      "通常布局是和路由系统紧密结合的，而嵌套路由可使用在这种场景下，我们将配置信息统一抽离到 config/config.ts 下，通过如下配置定义每个页面的布局："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "routers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">\"/\"</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">\"../layouts/BasicLayout\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 指定以下页面的布局</span>\n    routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span> name<span class=\"token punctuation\">:</span> <span class=\"token string\">\"用户管理\"</span><span class=\"token punctuation\">,</span> icon<span class=\"token punctuation\">:</span> <span class=\"token string\">\"smile\"</span><span class=\"token punctuation\">,</span> path<span class=\"token punctuation\">:</span> <span class=\"token string\">\"/user\"</span><span class=\"token punctuation\">,</span> component<span class=\"token punctuation\">:</span> <span class=\"token string\">\"./User\"</span> <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "routers: [\n  {\n    path: \"/\",\n    component: \"../layouts/BasicLayout\", // 指定以下页面的布局\n    routes: [\n      { name: \"用户管理\", icon: \"smile\", path: \"/user\", component: \"./User\" }\n    ]\n  }\n];"
      ]
    ],
    [
      "p",
      "映射路由和页面布局（组件）的关系如代码所示，完整映射转换实现可以参看 config.ts。"
    ],
    [
      "h2",
      "基础布局的定制"
    ],
    [
      "p",
      "有时候 基础布局 无法完全满足我们所有的业务需求，因此它必须具有必要的定制化能力。我们采用了 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro-layout"
        },
        "ant-design-pro-layout"
      ],
      " 组件，与一般的组件不同，它非常重型，在其中集成了 菜单，布局，页头，面包屑，设置抽屉等多种功能。上面所述的 BasicLayout 就是基于 ProLayout 进行封装的。"
    ],
    [
      "h2",
      "标题和 logo 的定制"
    ],
    [
      "p",
      "对于标题和 logo，蚩尤提供了 title 和 logo 属性来自定义，如果你有更强的定制需求，可以试试 ",
      [
        "code",
        "menuHeaderRender: (logoDom,titleDom)=>ReactNode"
      ],
      " 属性："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// layouts/BasicLayout.tsx:</span>\n<span class=\"token operator\">&lt;</span>ProLayout\n    logo<span class=\"token operator\">=</span><span class=\"token string\">\"https://s2.ax1x.com/2020/01/27/1nB156.png\"</span>\n    menuHeaderRender<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>logoDom<span class=\"token punctuation\">,</span> titleDom<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Link to<span class=\"token operator\">=</span><span class=\"token string\">\"/\"</span><span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span>logoDom<span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span>titleDom<span class=\"token punctuation\">}</span>\n      <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Link<span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// config/defaultSettings.ts:</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">'蚩尤'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// layouts/BasicLayout.tsx:\n<ProLayout\n    logo=\"https://s2.ax1x.com/2020/01/27/1nB156.png\"\n    menuHeaderRender={(logoDom, titleDom) => (\n      <Link to=\"/\">\n        {logoDom}\n        {titleDom}\n      </Link>\n    )}\n  />\n);\n\n// config/defaultSettings.ts:\nexport default {\n  title: '蚩尤',\n};"
      ]
    ],
    [
      "p",
      "更多参数说明请查阅 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro-layout/blob/master/README.zh-CN.md#api"
        },
        "官方 API"
      ]
    ],
    [
      "h2",
      "PageHeaderWrapper"
    ],
    [
      "blockquote",
      [
        "p",
        "PageHeaderWrapper 必须要被 ProLayout 包裹才能自动生成面包屑和标题。"
      ]
    ],
    [
      "p",
      "PageHeaderWrapper 封装了 ",
      [
        "a",
        {
          "title": null,
          "href": "/components/page-header"
        },
        "PageHeader"
      ],
      " 组件，增加了 tabList，和 content。 根据当前的路由填入 title 和 breadcrumb。它依赖 Layout 的 route 属性。当然你可以传入参数来复写默认值。 PageHeaderWrapper 支持 Tabs 和 PageHeader 的所有属性。"
    ],
    [
      "p",
      "更多参数说明请查阅 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro-layout/blob/master/README.zh-CN.md#pageheaderwrapper"
        },
        "官方 API"
      ]
    ]
  ],
  "meta": {
    "category": "开发",
    "order": 5,
    "title": "布局",
    "filename": "docs/dev/orient-layout.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#基础布局",
          "title": "基础布局"
        },
        "基础布局"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#如何使用布局",
          "title": "如何使用布局"
        },
        "如何使用布局"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#基础布局的定制",
          "title": "基础布局的定制"
        },
        "基础布局的定制"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#标题和-logo-的定制",
          "title": "标题和 logo 的定制"
        },
        "标题和 logo 的定制"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#PageHeaderWrapper",
          "title": "PageHeaderWrapper"
        },
        "PageHeaderWrapper"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-layout.zh-CN.md.js.map