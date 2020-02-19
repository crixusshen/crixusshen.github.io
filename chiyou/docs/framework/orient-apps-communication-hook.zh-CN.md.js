(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/framework/orient-apps-communication-hook.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-apps-communication-hook.zh-CN.md":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-apps-communication-hook.zh-CN.md ***!
  \********************************************************************************************************************/
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
      "blockquote",
      [
        "p",
        "注：由于方案基于 React Hook，所以只能在 Functional Component 中使用该 api，无法在 Class Component 中进行使用。"
      ]
    ],
    [
      "h2",
      "框架应用的传递"
    ],
    [
      "p",
      "约定框架应用中在 ",
      [
        "code",
        "src/rootExports.js"
      ],
      " 里 export 数据:"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// /master-app/src/rootExports.js:</span>\n<span class=\"token keyword\">let</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  count<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">function</span> <span class=\"token function\">getData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> data<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">function</span> <span class=\"token function\">setData</span><span class=\"token punctuation\">(</span>newData<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  data <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token operator\">...</span>data<span class=\"token punctuation\">,</span>\n    <span class=\"token operator\">...</span>newData\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// /master-app/src/rootExports.js:\nlet data = {\n  count: 0\n};\n\nexport function getData() {\n  return data;\n}\n\nexport function setData(newData) {\n  data = {\n    ...data,\n    ...newData\n  };\n}"
      ]
    ],
    [
      "h2",
      "子应用的接收"
    ],
    [
      "p",
      "子应用则可以通过如下方式来获取 props 中的消费数据:"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> useRootExports <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"umi\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">function</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> rootExports <span class=\"token operator\">=</span> <span class=\"token function\">useRootExports</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// rootExports实例，即框架应用中export的内容</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>h1<span class=\"token operator\">></span>Hello CHIYOU<span class=\"token operator\">!</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>h1<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "import { useRootExports } from \"umi\";\n\nexport default function() {\n  const rootExports = useRootExports(); // rootExports实例，即框架应用中export的内容\n  return (\n    <div>\n      <h1>Hello CHIYOU!</h1>\n    </div>\n  );\n}"
      ]
    ]
  ],
  "meta": {
    "category": "框架应用和子应用通信",
    "order": 2,
    "title": "基于Hooks传递",
    "filename": "docs/framework/orient-apps-communication-hook.zh-CN.md"
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
//# sourceMappingURL=orient-apps-communication-hook.zh-CN.md.js.map