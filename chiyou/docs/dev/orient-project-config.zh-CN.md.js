(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-project-config.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-project-config.zh-CN.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-project-config.zh-CN.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "前端项目普遍都需要使用 webpack 进行构建，但是 webpack 的配置相当繁琐，因此我们使用了 umi 这个工具简化工程的使用链路。"
    ],
    [
      "blockquote",
      [
        "p",
        "umi 是蚂蚁金服的底层前端框架，已直接或间接地服务了 600+ 内部应用，包括 java、node、H5 无线、离线（Hybrid）应用、纯前端 assets 应用、CMS 应用等。"
      ]
    ],
    [
      "h2",
      "开发和调试"
    ],
    [
      "p",
      "运行这个脚本会启动服务，自动打开默认浏览器展示你的页面。当你重新编辑代码后，页面还会自动刷新。"
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ npm start"
      },
      [
        "code",
        "$ npm start"
      ]
    ],
    [
      "h2",
      "构建"
    ],
    [
      "p",
      "运行这个脚本将会编译你的项目，你可以在项目中的 dist 目录中找到编译后的文件用于部署。"
    ],
    [
      "p",
      "构建打包成功之后，会在根目录生成 ",
      [
        "code",
        "dist"
      ],
      " 文件夹，里面就是构建打包好的文件，通常是 ",
      [
        "code",
        "*.js"
      ],
      "、",
      [
        "code",
        "*.css"
      ],
      "、",
      [
        "code",
        "index.html"
      ],
      " 等静态文件。"
    ],
    [
      "p",
      "如果需要自定义构建，比如指定 ",
      [
        "code",
        "dist"
      ],
      " 目录等，可以通过 ",
      [
        "code",
        "config/config.ts"
      ],
      " 进行配置，详情参看：",
      [
        "a",
        {
          "title": null,
          "href": "/docs/dev/orient-project-config#工程配置"
        },
        "传送门:工程配置"
      ]
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ npm run build"
      },
      [
        "code",
        "$ npm run build"
      ]
    ],
    [
      "p",
      [
        "br"
      ]
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://asciinema.org/a/f3qyK3CQamEe3dZGkRIOaqSX5"
        },
        [
          "img",
          {
            "title": null,
            "src": "https://asciinema.org/a/f3qyK3CQamEe3dZGkRIOaqSX5.svg",
            "alt": "asciicast"
          }
        ]
      ]
    ],
    [
      "h2",
      "部署"
    ],
    [
      "h2",
      "分析构建文件体积"
    ],
    [
      "p",
      "如果你的构建文件很大，你可以通过 ",
      [
        "code",
        "analyze"
      ],
      " 命令构建并分析依赖模块的体积分布，从而优化你的代码。"
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ npm run analyze"
      },
      [
        "code",
        "$ npm run analyze"
      ]
    ],
    [
      "h2",
      "代码检查"
    ],
    [
      "p",
      "这个脚本提供了一系列的 lint 脚本，包括 TypeScript，less，css，md 文件。你可以通过这个脚本来查看你的代码有哪些问题。在 commit 中我们自动运行相关 lint。"
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ npm run lint"
      },
      [
        "code",
        "$ npm run lint"
      ]
    ],
    [
      "h2",
      "代码修复"
    ],
    [
      "p",
      "这个脚本会自动修复一些 lint 错误，如果你被 lint 搞的焦头烂额，试试它吧。"
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ npm run lint<span class=\"token punctuation\">:</span>fix"
      },
      [
        "code",
        "$ npm run lint:fix"
      ]
    ],
    [
      "h2",
      "测试"
    ],
    [
      "p",
      "这个脚本会执行一系列测试，包括 e2e 测试。"
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ npm run test"
      },
      [
        "code",
        "$ npm run test"
      ]
    ],
    [
      "h2",
      "工程配置"
    ],
    [
      "p",
      "蚩尤 通过 umi 进行项目配置，支持基础配置以及自定义 webpack 配置。"
    ],
    [
      "h2",
      "基础配置"
    ],
    [
      "p",
      "如果需要自定义构建，比如指定 ",
      [
        "code",
        "dist"
      ],
      " 目录等，可通过 ",
      [
        "code",
        "config/config.ts"
      ],
      " 进行配置，详情参看：",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/zh/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE"
        },
        "传送门:基础配置"
      ]
    ],
    [
      "h2",
      "自定义 webpack 配置"
    ],
    [
      "p",
      "umi 内部的基础 webpack 配置都是通过 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/neutrinojs/webpack-chain"
        },
        "webpack-chain"
      ],
      " 生成的，通过 webpack 配置链式操作的 API，并可以定义具体 loader 规则和 webpack 插件的名称，可以让开发者更加细粒度修改 webpack 配置。详情参看：",
      [
        "a",
        {
          "title": null,
          "href": "https://umijs.org/zh/config/#webpack?_blank"
        },
        "传送门:webpack 配置"
      ]
    ]
  ],
  "meta": {
    "category": "开发",
    "order": 2,
    "title": "工程配置",
    "filename": "docs/dev/orient-project-config.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#开发和调试",
          "title": "开发和调试"
        },
        "开发和调试"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#构建",
          "title": "构建"
        },
        "构建"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#部署",
          "title": "部署"
        },
        "部署"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#分析构建文件体积",
          "title": "分析构建文件体积"
        },
        "分析构建文件体积"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#代码检查",
          "title": "代码检查"
        },
        "代码检查"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#代码修复",
          "title": "代码修复"
        },
        "代码修复"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#测试",
          "title": "测试"
        },
        "测试"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#工程配置",
          "title": "工程配置"
        },
        "工程配置"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#基础配置",
          "title": "基础配置"
        },
        "基础配置"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#自定义-webpack-配置",
          "title": "自定义 webpack 配置"
        },
        "自定义 webpack 配置"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-project-config.zh-CN.md.js.map