(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/framework/orient-questions.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-questions.zh-CN.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-questions.zh-CN.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h2",
      "Application died in status LOADING_SOURCE_CODE: You need to export the functional lifecycles in xxx entry"
    ],
    [
      "p",
      "蚩尤（CHIYOU）抛出这个错误是因为无法从子应用的 entry js 中识别出其导出的生命周期钩子事件。"
    ],
    [
      "p",
      "可通过以下几个步骤来解决这个问题："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "检查子应用是否已经导出相应的生命周期钩子事件，参考 ",
          [
            "a",
            {
              "title": null,
              "href": "/docs/framework/orient-isomorphism-slave-app#子应用导出相应的生命周期钩子"
            },
            "子应用导出相应的生命周期钩子"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "检查子应用的 ",
          [
            "code",
            "package.json"
          ],
          " 中的 ",
          [
            "code",
            "name"
          ],
          " 字段是否是子应用中唯一的。"
        ]
      ]
    ],
    [
      "p",
      "如果在上述步骤完成后仍有问题，通常说明是浏览器兼容性问题导致的。可以尝试 将有问题的子应用的 ",
      [
        "code",
        "package.json"
      ],
      " 中的 ",
      [
        "code",
        "name"
      ],
      " 字段设置成和框架应用中注册的对应子应用的 ",
      [
        "code",
        "name"
      ],
      " 字段一致，如："
    ],
    [
      "p",
      "假设子应用的 package.json 是这样的："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token punctuation\">{</span>\n  <span class=\"token string\">\"name\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"yourSubApp\"</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "{\n  \"name\": \"yourSubApp\"\n}"
      ]
    ],
    [
      "p",
      "则将框架应用中的 ",
      [
        "code",
        "name"
      ],
      " 配置设置成一致的即可"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// config/config.ts:</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n  plugins<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">[</span>\n      <span class=\"token string\">\"chiyou-boot\"</span><span class=\"token punctuation\">,</span>\n      master<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// 注册子应用信息</span>\n        apps<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            name<span class=\"token punctuation\">:</span> <span class=\"token string\">'yourSubApp'</span><span class=\"token punctuation\">,</span>\n            entry<span class=\"token punctuation\">:</span> <span class=\"token string\">'//localhost:7001'</span><span class=\"token punctuation\">,</span>\n            base<span class=\"token punctuation\">:</span> <span class=\"token string\">'/app1'</span><span class=\"token punctuation\">,</span>\n            history<span class=\"token punctuation\">:</span> <span class=\"token string\">'browser'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// config/config.ts:\nexport default {\n  // ...\n  plugins: [\n    [\n      \"chiyou-boot\",\n      master: {\n        // 注册子应用信息\n        apps: [\n          {\n            name: 'yourSubApp',\n            entry: '//localhost:7001',\n            base: '/app1',\n            history: 'browser',\n          },\n      },\n    ],\n  ],\n  // ...\n};"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "注：如果你的 ",
        [
          "code",
          "webpack"
        ],
        " 开启了分包策略(即打出了 1 个以上的 js)，子应用的 ",
        [
          "code",
          "name"
        ],
        " 则需要配置为 ",
        [
          "code",
          "yourSubApp-[name]"
        ],
        " 的形式，",
        [
          "span",
          "name"
        ],
        " 指代的你的 webpack chunk 的名字（通常会是 main，比如上面的就是 ",
        [
          "code",
          "yourSubApp-main"
        ],
        "）。"
      ]
    ],
    [
      "h2",
      "为什么子应用加载的资源会 404？"
    ],
    [
      "p",
      "原因是 webpack 加载资源时未设置正确的 ",
      [
        "code",
        "publicPath"
      ],
      "。"
    ],
    [
      "p",
      "可以通过以下方式解决这个问题，你需要将你的 webpack publicPath 配置设置成一个绝对地址的 url，比如在开发环境可能是："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token punctuation\">{</span>\n  output<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    publicPath<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`//localhost:</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>port<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "{\n  output: {\n    publicPath: `//localhost:${port}`;\n  }\n}"
      ]
    ],
    [
      "h2",
      "子应用静态资源一定要支持跨域吗？"
    ],
    [
      "p",
      "是的。"
    ],
    [
      "p",
      "由于 CHIYOU 是通过 fetch 去获取子应用的引入的静态资源的，所以必须要求这些静态资源支持跨域。参考：",
      [
        "a",
        {
          "title": null,
          "href": "https://segmentfault.com/a/1190000012550346"
        },
        "Nginx 跨域配置"
      ]
    ],
    [
      "h2",
      "如何确保框架应用跟子应用之间的样式隔离"
    ],
    [
      "p",
      "CHIYOU 将会自动隔离子应用之间的样式（开启沙箱的情况下），你可以通过手动的方式确保框架应用与子应用之间的样式隔离。比如给框架应用的所有样式添加一个前缀。"
    ],
    [
      "h2",
      "如何独立运行子应用？"
    ],
    [
      "p",
      "有时候我们希望直接启动子应用从而方便的开发调试，你可以使用这个全局变量来区分当前是否运行在 CHIYOU 的框架应用的上下文中："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>window<span class=\"token punctuation\">.</span>__POWER_BY_CHIYOU__<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">const</span> mount <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "if (!window.__POWER_BY_CHIYOU__) {\n  render();\n}\n\nexport const mount = async () => render();"
      ]
    ],
    [
      "h2",
      "CHIYOU 能兼容 ie 吗？"
    ],
    [
      "p",
      "目前不兼容。"
    ],
    [
      "p",
      "如果你现在就想要 ie 支持，你可以尝试关掉 jsSandbox 配置来让应用可以跑在 ie 上（但这要承担关掉沙箱后子应用之间可能造成冲突的风险问题，因此并不建议这么做）。"
    ]
  ],
  "meta": {
    "category": "指南",
    "order": 8,
    "title": "常见问题",
    "filename": "docs/framework/orient-questions.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Application-died-in-status-LOADING_SOURCE_CODE:-You-need-to-export-the-functional-lifecycles-in-xxx-entry",
          "title": "Application died in status LOADING_SOURCE_CODE: You need to export the functional lifecycles in xxx entry"
        },
        "Application died in status LOADING_SOURCE_CODE: You need to export the functional lifecycles in xxx entry"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#为什么子应用加载的资源会-404？",
          "title": "为什么子应用加载的资源会 404？"
        },
        "为什么子应用加载的资源会 404？"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#子应用静态资源一定要支持跨域吗？",
          "title": "子应用静态资源一定要支持跨域吗？"
        },
        "子应用静态资源一定要支持跨域吗？"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#如何确保框架应用跟子应用之间的样式隔离",
          "title": "如何确保框架应用跟子应用之间的样式隔离"
        },
        "如何确保框架应用跟子应用之间的样式隔离"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#如何独立运行子应用？",
          "title": "如何独立运行子应用？"
        },
        "如何独立运行子应用？"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#CHIYOU-能兼容-ie-吗？",
          "title": "CHIYOU 能兼容 ie 吗？"
        },
        "CHIYOU 能兼容 ie 吗？"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-questions.zh-CN.md.js.map