(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/framework/orient-isomorphism-master-app.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-isomorphism-master-app.zh-CN.md":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-isomorphism-master-app.zh-CN.md ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "蚩尤（CHIYOU）已为开发者在框架应用层面解决了很多问题，如路由配置如何与菜单关联并展示，面包屑组件的集成等。所以开发者在这里更关心如何在框架应用上注册子应用。"
    ],
    [
      "h2",
      "在框架应用中注册子应用"
    ],
    [
      "p",
      "蚩尤（CHIYOU）提供了两种方式来提供注册，其中运行时配置更适合从服务端读取子应用信息来进行配置。"
    ],
    [
      "h2",
      "编译时配置"
    ],
    [
      "p",
      "这种配置方式比较适合纯静态的简单项目，所有的配置都是在配置文件中定死的，如果你想动态化请参考 ",
      [
        "a",
        {
          "title": null,
          "href": "#运行时配置"
        },
        "运行时配置"
      ],
      "，具体配置方式如下："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// config/config.ts:</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n  routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      path<span class=\"token punctuation\">:</span> <span class=\"token string\">\"/\"</span><span class=\"token punctuation\">,</span>\n      component<span class=\"token punctuation\">:</span> <span class=\"token string\">\"../layouts/BasicLayout\"</span><span class=\"token punctuation\">,</span>\n      routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n          name<span class=\"token punctuation\">:</span> <span class=\"token string\">\"app1\"</span><span class=\"token punctuation\">,</span>\n          path<span class=\"token punctuation\">:</span> <span class=\"token string\">\"/app1\"</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n      <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  plugins<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">[</span>\n      <span class=\"token string\">\"chiyou-boot\"</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">(</span>master<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// 注册子应用信息</span>\n        apps<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            name<span class=\"token punctuation\">:</span> <span class=\"token string\">\"app1\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 唯一 id</span>\n            entry<span class=\"token punctuation\">:</span> <span class=\"token string\">\"//localhost:7001\"</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> HTML Entry\n            base<span class=\"token punctuation\">:</span> <span class=\"token string\">\"/app1\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 路由前缀，通过这个前缀判断是否要启动该子应用，通常与框架应用中已配置的路由相匹配，即 routes 中的路由</span>\n            history<span class=\"token punctuation\">:</span> <span class=\"token string\">\"browser\"</span> <span class=\"token comment\" spellcheck=\"true\">// 子应用的 history 配置，默认和当前框架应用 history 配置一致</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            name<span class=\"token punctuation\">:</span> <span class=\"token string\">\"app2\"</span><span class=\"token punctuation\">,</span>\n            entry<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n              <span class=\"token comment\" spellcheck=\"true\">// TODO 即将支持 Config Entry</span>\n              scripts<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n              styles<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            base<span class=\"token punctuation\">:</span> <span class=\"token string\">\"/app2\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        jsSandbox<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 是否启用 js 沙箱，默认为 false</span>\n        prefetch<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token comment\" spellcheck=\"true\">// 是否启用 prefetch 特性，默认为 true</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">]</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// config/config.ts:\nexport default {\n  // ...\n  routes: [\n    {\n      path: \"/\",\n      component: \"../layouts/BasicLayout\",\n      routes: [\n        {\n          name: \"app1\",\n          path: \"/app1\"\n        }\n        // ...\n      ]\n    }\n  ],\n  plugins: [\n    [\n      \"chiyou-boot\",\n      (master: {\n        // 注册子应用信息\n        apps: [\n          {\n            name: \"app1\", // 唯一 id\n            entry: \"//localhost:7001\", // HTML Entry\n            base: \"/app1\", // 路由前缀，通过这个前缀判断是否要启动该子应用，通常与框架应用中已配置的路由相匹配，即 routes 中的路由\n            history: \"browser\" // 子应用的 history 配置，默认和当前框架应用 history 配置一致\n          },\n          {\n            name: \"app2\",\n            entry: {\n              // TODO 即将支持 Config Entry\n              scripts: [],\n              styles: []\n            },\n            base: \"/app2\"\n          }\n        ],\n        jsSandbox: true, // 是否启用 js 沙箱，默认为 false\n        prefetch: true // 是否启用 prefetch 特性，默认为 true\n      })\n    ]\n  ]\n  // ...\n};"
      ]
    ],
    [
      "h2",
      "运行时配置"
    ],
    [
      "p",
      "这种配置更适合通过数据驱动来注册子应用，它和编译时配置的性能是一致的，具体配置如下："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// src/app.ts:</span>\n<span class=\"token keyword\">import</span> request <span class=\"token keyword\">from</span> <span class=\"token string\">\"./utils/request\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// chiyou值是一个 promise</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">const</span> chiyou <span class=\"token operator\">=</span> <span class=\"token function\">request</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"/config\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span>serverMenus <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// 注册子应用信息</span>\n  apps<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">\"app1\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 唯一 id</span>\n      entry<span class=\"token punctuation\">:</span> <span class=\"token string\">\"//localhost:7001\"</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> HTML Entry\n      base<span class=\"token punctuation\">:</span> <span class=\"token string\">\"/app1\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 路由前缀，通过这个前缀判断是否要启动该子应用，通常与框架应用中已配置的路由相匹配，即 routes 中的路由</span>\n      history<span class=\"token punctuation\">:</span> <span class=\"token string\">\"browser\"</span> <span class=\"token comment\" spellcheck=\"true\">// 子应用的 history 配置，默认和当前框架应用 history 配置一致</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">\"app2\"</span><span class=\"token punctuation\">,</span>\n      entry<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// TODO 支持 Config Entry</span>\n        scripts<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        styles<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      base<span class=\"token punctuation\">:</span> <span class=\"token string\">\"/app2\"</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  jsSandbox<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 是否启用 js 沙箱，默认为 false</span>\n  prefetch<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 是否启用 prefetch 特性，默认为 true</span>\n  lifeCycles<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// 更多使用请查看 API 说明</span>\n    afterMount<span class=\"token punctuation\">:</span> props <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// src/app.ts:\nimport request from \"./utils/request\";\n\n// chiyou值是一个 promise\nexport const chiyou = request(\"/config\").then(serverMenus => ({\n  // 注册子应用信息\n  apps: [\n    {\n      name: \"app1\", // 唯一 id\n      entry: \"//localhost:7001\", // HTML Entry\n      base: \"/app1\", // 路由前缀，通过这个前缀判断是否要启动该子应用，通常与框架应用中已配置的路由相匹配，即 routes 中的路由\n      history: \"browser\" // 子应用的 history 配置，默认和当前框架应用 history 配置一致\n    },\n    {\n      name: \"app2\",\n      entry: {\n        // TODO 支持 Config Entry\n        scripts: [],\n        styles: []\n      },\n      base: \"/app2\"\n    }\n  ],\n  jsSandbox: true, // 是否启用 js 沙箱，默认为 false\n  prefetch: true, // 是否启用 prefetch 特性，默认为 true\n  lifeCycles: {\n    // 更多使用请查看 API 说明\n    afterMount: props => {\n      console.log(props);\n    }\n  }\n}));"
      ]
    ]
  ],
  "meta": {
    "category": "指南",
    "order": 4,
    "title": "框架应用开发",
    "filename": "docs/framework/orient-isomorphism-master-app.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#在框架应用中注册子应用",
          "title": "在框架应用中注册子应用"
        },
        "在框架应用中注册子应用"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#编译时配置",
          "title": "编译时配置"
        },
        "编译时配置"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#运行时配置",
          "title": "运行时配置"
        },
        "运行时配置"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API-说明",
          "title": "API 说明"
        },
        "API 说明"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#注意事项",
          "title": "注意事项"
        },
        "注意事项"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API 说明"
    ],
    [
      "h3",
      "配置列表"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "配置"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "是否必填"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "apps"
          ],
          [
            "td",
            "配置子应用的一些注册信息"
          ],
          [
            "td",
            "App[]"
          ],
          [
            "td",
            "是"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "jsSandbox"
          ],
          [
            "td",
            "是否启用 js 沙箱"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "否"
          ],
          [
            "td",
            "false"
          ]
        ],
        [
          "tr",
          [
            "td",
            "prefetch"
          ],
          [
            "td",
            "是否启用 prefetch 特性"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "否"
          ],
          [
            "td",
            "true"
          ]
        ],
        [
          "tr",
          [
            "td",
            "lifeCycles"
          ],
          [
            "td",
            "全局的子应用生命周期钩子事件"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "否"
          ],
          [
            "td"
          ]
        ]
      ]
    ],
    [
      "h3",
      "App"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "配置"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "是否必填"
          ],
          [
            "th",
            "默认值"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "name"
          ],
          [
            "td",
            "子应用唯一 id，子应用之间必须确保"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "是"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "entry"
          ],
          [
            "td",
            "子应用 html 地址"
          ],
          [
            "td",
            "string ",
            "|",
            " { script: string[], styles: [] }"
          ],
          [
            "td",
            "是"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "base"
          ],
          [
            "td",
            "子应用路由前缀，通常跟子应用的 ",
            [
              "a",
              {
                "title": null,
                "href": "https://umijs.org/config/#base"
              },
              "base 配置"
            ],
            " 一致，框架会以这个配置作为前缀判断是否激活当前应用，支持配置一组前缀"
          ],
          [
            "td",
            "string ",
            "|",
            " string[]"
          ],
          [
            "td",
            "是"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "history"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "https://umijs.org/config/#history"
              },
              "umi history mode"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "否"
          ],
          [
            "td",
            "框架应用 history 配置"
          ]
        ],
        [
          "tr",
          [
            "td",
            "mountElementId"
          ],
          [
            "td",
            "子应用挂载到框架应用的哪个 id 节点上（注意不要跟子应用的 mountElementId 一致）"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "否"
          ],
          [
            "td",
            "root-subapp"
          ]
        ],
        [
          "tr",
          [
            "td",
            "props"
          ],
          [
            "td",
            "主应用传递给子应用的数据"
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "否"
          ],
          [
            "td",
            "{}"
          ]
        ]
      ]
    ],
    [
      "h3",
      "LifeCycles"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "beforeLoad - ",
          [
            "code",
            "(props) => {}"
          ],
          " 加载前触发"
        ]
      ],
      [
        "li",
        [
          "p",
          "beforeMount - ",
          [
            "code",
            "(props) => {}"
          ],
          " 挂载前触发"
        ]
      ],
      [
        "li",
        [
          "p",
          "afterMount - ",
          [
            "code",
            "(props) => {}"
          ],
          " 挂载后触发"
        ]
      ],
      [
        "li",
        [
          "p",
          "beforeUnmount - ",
          [
            "code",
            "(props) => {}"
          ],
          " 卸载前触发"
        ]
      ],
      [
        "li",
        [
          "p",
          "afterUnmount - ",
          [
            "code",
            "(props) => {}"
          ],
          " 卸载后触发"
        ]
      ]
    ],
    [
      "h2",
      "注意事项"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "当框架应用与子应用的 history 模式一致时（比如都为 browser 或 hash），框架会自动创建一些空路由来避免 404，所以建议框架应用与子应用使用相同的 history mode，否则需要自己来处理这些情况"
        ]
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-isomorphism-master-app.zh-CN.md.js.map