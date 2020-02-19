(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/framework/orient-isomorphism-slave-app.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-isomorphism-slave-app.zh-CN.md":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-isomorphism-slave-app.zh-CN.md ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "所谓同构，即框架应用和子应用使用相同的框架和开发语言来开发。"
    ],
    [
      "p",
      "我们为开发者提供了 子应用 开发脚手架，只需在如下文件中进行配置即可将一个 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/dev/orient-create"
        },
        "普通应用"
      ],
      " 升级为一个 子应用。"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> name <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"../package.json\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token comment\" spellcheck=\"true\">// /slave-app/config/config.ts:</span>\n<span class=\"token comment\" spellcheck=\"true\">// 一旦定义 CHIYOU_UPGRADE=slave 才会升级为主子应用间模式</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> CHIYOU_UPGRADE <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> process<span class=\"token punctuation\">.</span>env<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> isChiYouSlaveApp <span class=\"token operator\">=</span> CHIYOU_UPGRADE <span class=\"token operator\">===</span> <span class=\"token string\">\"slave\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>isChiYouSlaveApp<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  plugins<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span>\n    <span class=\"token string\">\"chiyou-boot\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      slave<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  base<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`/</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">/`</span></span><span class=\"token punctuation\">,</span>\n  publicPath<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`/</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">/`</span></span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { name } from \"../package.json\";\n// /slave-app/config/config.ts:\n// 一旦定义 CHIYOU_UPGRADE=slave 才会升级为主子应用间模式\nconst { CHIYOU_UPGRADE } = process.env;\nconst isChiYouSlaveApp = CHIYOU_UPGRADE === \"slave\";\nif (isChiYouSlaveApp) {\n  plugins.push([\n    \"chiyou-boot\",\n    {\n      slave: {}\n    }\n  ]);\n}\n\nexport default {\n  base: `/${name}/`,\n  publicPath: `/${name}/`\n  // ...\n};"
      ]
    ],
    [
      "h2",
      "子应用导出相应的生命周期钩子"
    ],
    [
      "p",
      "在子应用的 ",
      [
        "code",
        "/src/app.ts"
      ],
      " 里输出 ",
      [
        "code",
        "chiyou"
      ],
      "，导出 bootstrap、mount、unmount 三个生命周期钩子，以提供框架应用在适当的时机调用。"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// /slave-app/src/app.ts:</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">const</span> chiyou <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">/**\n   * bootstrap 事件只会在 子应用 初始化的时候调用一次，下次 子应用 重新进入时会直接调用 mount 钩子事件，不会再重复触发 bootstrap 事件。\n   * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。\n   */</span>\n  <span class=\"token keyword\">async</span> <span class=\"token function\">bootstrap</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"slave-app bootstrap\"</span><span class=\"token punctuation\">,</span> props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">/**\n   * 子应用每次进入都会调用 mount 事件，通常我们在这里触发应用的渲染方法\n   * 注：这不同于异构类子应用，同构类子应用中我们不需要做渲染方法的声明，框架已经替我们封装掉了这些繁琐的处理\n   */</span>\n  <span class=\"token keyword\">async</span> <span class=\"token function\">mount</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"slave-app mount\"</span><span class=\"token punctuation\">,</span> props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">/**\n   * 子应用每次 切换/卸载 会调用的事件，通常在这里会卸载子应用的应用实例\n   * 注：这不同于异构类子应用，同构类子应用中我们不需要卸载子应用的应用实例，框架已经替我们封装掉了这些繁琐的处理\n   */</span>\n  <span class=\"token keyword\">async</span> <span class=\"token function\">unmount</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"slave-app unmount\"</span><span class=\"token punctuation\">,</span> props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// /slave-app/src/app.ts:\nexport const chiyou = {\n  /**\n   * bootstrap 事件只会在 子应用 初始化的时候调用一次，下次 子应用 重新进入时会直接调用 mount 钩子事件，不会再重复触发 bootstrap 事件。\n   * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。\n   */\n  async bootstrap(props) {\n    console.log(\"slave-app bootstrap\", props);\n  },\n\n  /**\n   * 子应用每次进入都会调用 mount 事件，通常我们在这里触发应用的渲染方法\n   * 注：这不同于异构类子应用，同构类子应用中我们不需要做渲染方法的声明，框架已经替我们封装掉了这些繁琐的处理\n   */\n  async mount(props) {\n    console.log(\"slave-app mount\", props);\n  },\n\n  /**\n   * 子应用每次 切换/卸载 会调用的事件，通常在这里会卸载子应用的应用实例\n   * 注：这不同于异构类子应用，同构类子应用中我们不需要卸载子应用的应用实例，框架已经替我们封装掉了这些繁琐的处理\n   */\n  async unmount(props) {\n    console.log(\"slave-app unmount\", props);\n  }\n};"
      ]
    ],
    [
      "h2",
      "子应用启动和名称修改"
    ],
    [
      "p",
      "启动命令前增加 ",
      [
        "code",
        "CHIYOU_UPGRADE=slave"
      ],
      " 标识，这样启动命令后蚩尤会自动将该应用转化为一个子应用来处理。同时追加子应用的应用名称用于框架应用识别子应用，如 ",
      [
        "code",
        "slave-app"
      ],
      "。"
    ],
    [
      "pre",
      {
        "lang": "json",
        "highlighted": "// package.json<span class=\"token operator\">:</span>\n<span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"slave-app\"</span><span class=\"token punctuation\">,</span>\n  // ...\n  <span class=\"token property\">\"scripts\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"start\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"CHIYOU_UPGRADE=slave umi dev\"</span>\n  <span class=\"token punctuation\">}</span>\n  // ...\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// package.json:\n{\n  \"name\": \"slave-app\",\n  // ...\n  \"scripts\": {\n    \"start\": \"CHIYOU_UPGRADE=slave umi dev\"\n  }\n  // ...\n}"
      ]
    ],
    [
      "h2",
      "增加端口"
    ],
    [
      "p",
      "根目录下创建 ",
      [
        "code",
        ".env"
      ],
      " 文件，这样框架应用就可以通过该配置端口（如 8081）来访问和寻找该子应用："
    ],
    [
      "pre",
      {
        "lang": "json",
        "highlighted": "// .env<span class=\"token operator\">:</span>\n(PORT = <span class=\"token number\">8081</span><span class=\"token punctuation\">)</span>"
      },
      [
        "code",
        "// .env:\n(PORT = 8081)"
      ]
    ]
  ],
  "meta": {
    "category": "指南",
    "order": 5,
    "title": "同构类子应用开发或迁移",
    "filename": "docs/framework/orient-isomorphism-slave-app.zh-CN.md"
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
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#子应用启动和名称修改",
          "title": "子应用启动和名称修改"
        },
        "子应用启动和名称修改"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#增加端口",
          "title": "增加端口"
        },
        "增加端口"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-isomorphism-slave-app.zh-CN.md.js.map