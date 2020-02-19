(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/framework/orient-apps-communication-props.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-apps-communication-props.zh-CN.md":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-apps-communication-props.zh-CN.md ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "框架应用和子应用通信目前只适用于同构类应用，异构类应用请暴露调用函数来进行通信。"
    ],
    [
      "h2",
      "框架应用的传递"
    ],
    [
      "p",
      "框架应用中配置 apps 时用 props 将数据传递下去，具体可参考框架应用 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/framework/orient-isomorphism-master-app#运行时配置"
        },
        "运行时配置"
      ],
      " 一节："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// /master-app/src/app.ts:</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">const</span> chiyou <span class=\"token operator\">=</span> <span class=\"token function\">request</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"/config\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span>serverMenus <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n    apps<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">\"app1\"</span><span class=\"token punctuation\">,</span>\n        entry<span class=\"token punctuation\">:</span> <span class=\"token string\">\"//localhost:7001\"</span><span class=\"token punctuation\">,</span>\n        base<span class=\"token punctuation\">:</span> <span class=\"token string\">\"/app1\"</span><span class=\"token punctuation\">,</span>\n        props<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n          onClick<span class=\"token punctuation\">:</span> event <span class=\"token operator\">=</span><span class=\"token operator\">></span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>event<span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n          <span class=\"token operator\">...</span>serverMenus\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// /master-app/src/app.ts:\nexport const chiyou = request(\"/config\").then(serverMenus => {\n  return {\n    apps: [\n      {\n        name: \"app1\",\n        entry: \"//localhost:7001\",\n        base: \"/app1\",\n        props: {\n          onClick: event => console.log(event),\n          ...serverMenus\n        }\n      }\n    ]\n  };\n});"
      ]
    ],
    [
      "h2",
      "子应用的接收"
    ],
    [
      "p",
      "子应用则可以通过生命周期钩子事件来获取 props 中的消费数据，具体可参考 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/framework/orient-isomorphism-slave-app#子应用导出相应的生命周期钩子"
        },
        "子应用导出相应的生命周期钩子"
      ],
      " 一节。"
    ]
  ],
  "meta": {
    "category": "框架应用和子应用通信",
    "order": 1,
    "title": "基于Props传递",
    "filename": "docs/framework/orient-apps-communication-props.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#框架应用的传递",
          "title": "框架应用的传递"
        },
        "框架应用的传递"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#子应用的接收",
          "title": "子应用的接收"
        },
        "子应用的接收"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-apps-communication-props.zh-CN.md.js.map