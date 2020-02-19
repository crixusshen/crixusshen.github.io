(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/framework/orient-isomerism-slave-app.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-isomerism-slave-app.zh-CN.md":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-isomerism-slave-app.zh-CN.md ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "如果你的团队有自己的前端技术栈(如 vue/react/angular 等)，甚至是使用服务端 Web 技术(如 php/java web/.net 等)作为自己的技术栈，那么下面的介绍将比较适合你。"
    ],
    [
      "h2",
      "子应用导出相应的生命周期钩子"
    ],
    [
      "p",
      "子应用需要在自己的入口 js 文件(通常就是你配置的 webpack 的 entry js) 中导出 bootstrap、mount、unmount 三个生命周期钩子事件，以提供框架应用在适当的时机调用。"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">/**\n * bootstrap 事件只会在 子应用 初始化的时候调用一次，下次 子应用 重新进入时会直接调用 mount 钩子事件，不会再重复触发 bootstrap 事件。\n * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。\n */</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">async</span> <span class=\"token keyword\">function</span> <span class=\"token function\">bootstrap</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"react app bootstraped\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">/**\n * 子应用每次进入都会调用 mount 事件，通常我们在这里触发应用的渲染方法\n */</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">async</span> <span class=\"token keyword\">function</span> <span class=\"token function\">mount</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  ReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>App <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"root\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">/**\n * 子应用每次 切换/卸载 会调用的事件，通常在这里会卸载子应用的应用实例\n */</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">async</span> <span class=\"token keyword\">function</span> <span class=\"token function\">unmount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  ReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">unmountComponentAtNode</span><span class=\"token punctuation\">(</span>document<span class=\"token punctuation\">.</span><span class=\"token function\">getElementById</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"root\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "/**\n * bootstrap 事件只会在 子应用 初始化的时候调用一次，下次 子应用 重新进入时会直接调用 mount 钩子事件，不会再重复触发 bootstrap 事件。\n * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。\n */\nexport async function bootstrap() {\n  console.log(\"react app bootstraped\");\n}\n\n/**\n * 子应用每次进入都会调用 mount 事件，通常我们在这里触发应用的渲染方法\n */\nexport async function mount(props) {\n  console.log(props);\n  ReactDOM.render(<App />, document.getElementById(\"root\"));\n}\n\n/**\n * 子应用每次 切换/卸载 会调用的事件，通常在这里会卸载子应用的应用实例\n */\nexport async function unmount() {\n  ReactDOM.unmountComponentAtNode(document.getElementById(\"root\"));\n}"
      ]
    ]
  ],
  "meta": {
    "category": "指南",
    "order": 6,
    "title": "异构类子应用开发或迁移",
    "filename": "docs/framework/orient-isomerism-slave-app.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#子应用导出相应的生命周期钩子",
          "title": "子应用导出相应的生命周期钩子"
        },
        "子应用导出相应的生命周期钩子"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-isomerism-slave-app.zh-CN.md.js.map