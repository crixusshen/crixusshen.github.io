(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-local-proxy.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-local-proxy.zh-CN.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-local-proxy.zh-CN.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h2",
      "为什么要本地代理"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "为代码维护性考虑：通常前端请求后端接口时写的都是相对路径，如 ",
          [
            "code",
            "/api/getFoo.json"
          ],
          "，此时如果我们本地通过访问 ",
          [
            "code",
            "http://127.0.0.1:4444"
          ],
          " 来调试页面，所有相对路径的 API 最终都会变成 ",
          [
            "code",
            "http://127.0.0.1:4444/api/getFoo.json"
          ],
          "，由于前端调试服务并没有提供这些接口，自然这些请求就会以 404 而结束，此时我们需要将这些请求代理到真正的服务地址；"
        ]
      ],
      [
        "li",
        [
          "p",
          "为解决服务端跨域策略；"
        ]
      ],
      [
        "li",
        [
          "p",
          "为解决独立模块之间的依赖关系：假设 A 模块在使用前需要依赖 B 模块，而我们的 A 和 B 又是独立维护独立代码仓库，而我们在开发 A 模块的时候必然还要启动 B 模块，假设 B 模块你一点也不清楚其内部实现，此时我们就可以通过本地代理将请求 B 模块的请求代理到已经部署好的测试环境上。"
        ]
      ]
    ],
    [
      "h2",
      "需要明确的问题"
    ],
    [
      "p",
      "所谓代理功能，是为了调试使用的，只能在本地开发时生效，构建或者发布之后无法使用。"
    ],
    [
      "h2",
      "实现原理"
    ],
    [
      "p",
      "现在市面上所有的脚手架都提供了 ",
      [
        "a",
        {
          "title": null,
          "href": "https://webpack.js.org/configuration/dev-server/#devserverproxy"
        },
        "proxy"
      ],
      " 的能力，底层几乎都是基于 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/chimurai/http-proxy-middleware"
        },
        "http-proxy-middleware"
      ],
      " 来实现，它可以将所有符合正则匹配的请求转发到某个地址上，下面是一个简单的示例："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">var</span> express <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"express\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">var</span> proxy <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"http-proxy-middleware\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">var</span> app <span class=\"token operator\">=</span> <span class=\"token function\">express</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\napp<span class=\"token punctuation\">.</span><span class=\"token function\">use</span><span class=\"token punctuation\">(</span>\n  <span class=\"token string\">\"/api\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">proxy</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> target<span class=\"token punctuation\">:</span> <span class=\"token string\">\"http://www.example.org\"</span><span class=\"token punctuation\">,</span> changeOrigin<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\napp<span class=\"token punctuation\">.</span><span class=\"token function\">listen</span><span class=\"token punctuation\">(</span><span class=\"token number\">3000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar</span>"
      },
      [
        "code",
        "var express = require(\"express\");\nvar proxy = require(\"http-proxy-middleware\");\n\nvar app = express();\n\napp.use(\n  \"/api\",\n  proxy({ target: \"http://www.example.org\", changeOrigin: true })\n);\napp.listen(3000);\n\n// http://localhost:3000/api/foo/bar -> http://www.example.org/api/foo/bar"
      ]
    ],
    [
      "p",
      "这个配置可以将所有 ",
      [
        "code",
        "/api"
      ],
      " 开头的请求转到到 ",
      [
        "code",
        "http://www.example.org/"
      ],
      " ,并且附带所有的参数，包括头信息和 cookie。有一点需要注意的是，在浏览器控制台里看到的仍然是 ",
      [
        "code",
        "http://localhost:3000/api/xxx"
      ],
      ",转化的步骤是在 node.js 中完成的。"
    ],
    [
      "h2",
      "在开发中使用"
    ],
    [
      "p",
      "框架内使用 proxy 非常简单，只需要在 ",
      [
        "code",
        "config/config.ts"
      ],
      " 中配置即可，配置如下："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "proxy<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'/server/api'</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    target<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://api.dfzq.com.cn/'</span><span class=\"token punctuation\">,</span>\n    changeOrigin<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    pathRewrite<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token string\">'^/server'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">''</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "proxy: {\n  '/server/api': {\n    target: 'https://api.dfzq.com.cn/',\n    changeOrigin: true,\n    pathRewrite: { '^/server': '' },\n  },\n},"
      ]
    ],
    [
      "p",
      "然后访问 ",
      [
        "code",
        "/server/api"
      ],
      " 能访问到 ",
      [
        "code",
        "https://api.dfzq.com.cn/api"
      ],
      " 的数据。详细的配置建议直接查看 ",
      [
        "a",
        {
          "title": null,
          "href": "https://webpack.js.org/configuration/dev-server/#devserverproxy"
        },
        "webpack-dev"
      ],
      " 的配置。"
    ],
    [
      "h2",
      "CORS"
    ],
    [
      "p",
      "如果觉得以上改动需要配置比较麻烦，系统又比较简单，无需引入新的复杂度。我们可以使用 CORS 的方式来允许跨域调用，在 express 中可以这么设置："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "res<span class=\"token punctuation\">.</span><span class=\"token function\">header</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"Access-Control-Allow-Origin\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"你的项目地址，用*将会带来安全问题\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nres<span class=\"token punctuation\">.</span><span class=\"token function\">header</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"Access-Control-Allow-Headers\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"*\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nres<span class=\"token punctuation\">.</span><span class=\"token function\">header</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"Access-Control-Allow-Methods\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"*\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nres<span class=\"token punctuation\">.</span><span class=\"token function\">header</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"Content-Type\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"application/json;charset=utf-8\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "res.header(\"Access-Control-Allow-Origin\", \"你的项目地址，用*将会带来安全问题\");\nres.header(\"Access-Control-Allow-Headers\", \"*\");\nres.header(\"Access-Control-Allow-Methods\", \"*\");\nres.header(\"Content-Type\", \"application/json;charset=utf-8\");"
      ]
    ],
    [
      "p",
      "在别的语言中方法也大同小异，最重要的是 ",
      [
        "code",
        "Access-Control-Allow-Origin Access-Control-Allow-Headers Access-Control-Allow-Methods"
      ],
      " 头的相应设置。"
    ],
    [
      "p",
      "在这里强烈建议每个人通读一下 MDN 的 ",
      [
        "a",
        {
          "title": null,
          "href": "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS"
        },
        "HTTP 访问控制"
      ],
      "，这篇图文并茂的文章可以解决跨域百分之八十的疑惑。"
    ],
    [
      "h2",
      "Profile 高级用法"
    ],
    [
      "p",
      "在开发中我们可能需要区分多种情况，比如开发环境，测试环境，语法环境，在框架中我们可以通过环境变量来实现这个需求。"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">const</span> serveUrlMap <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  dev<span class=\"token punctuation\">:</span> <span class=\"token string\">\"https://dev.api/\"</span><span class=\"token punctuation\">,</span>\n  sit<span class=\"token punctuation\">:</span> <span class=\"token string\">\"https://sit.api/\"</span><span class=\"token punctuation\">,</span>\n  test<span class=\"token punctuation\">:</span> <span class=\"token string\">\"https://test.api/\"</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> SERVE_ENV <span class=\"token operator\">=</span> <span class=\"token string\">\"dev\"</span> <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> process<span class=\"token punctuation\">.</span>env<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ....</span>\n  proxy<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token string\">\"/server/api\"</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n      target<span class=\"token punctuation\">:</span> serveUrlMap<span class=\"token punctuation\">[</span>SERVE_ENV<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      changeOrigin<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      pathRewrite<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> <span class=\"token string\">\"^/server\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"\"</span> <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "const serveUrlMap = {\n  dev: \"https://dev.api/\",\n  sit: \"https://sit.api/\",\n  test: \"https://test.api/\"\n};\n\nconst { SERVE_ENV = \"dev\" } = process.env;\n\nexport default {\n  // ....\n  proxy: {\n    \"/server/api\": {\n      target: serveUrlMap[SERVE_ENV],\n      changeOrigin: true,\n      pathRewrite: { \"^/server\": \"\" }\n    }\n  }\n};"
      ]
    ],
    [
      "p",
      "我们只要在 ",
      [
        "code",
        "package.json"
      ],
      " 中使用 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/kentcdodds/cross-env"
        },
        "cross-env"
      ],
      " 配置好各种快捷命令，就可以做到快速切换。"
    ],
    [
      "pre",
      {
        "lang": "json",
        "highlighted": "<span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"scripts\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"start:dev\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"cross-env SERVE_ENV=dev umi dev\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"start:sit\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"cross-env SERVE_ENV=sit umi dev\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"start:test\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"cross-env SERVE_ENV=test umi dev\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "{\n  \"scripts\": {\n    \"start:dev\": \"cross-env SERVE_ENV=dev umi dev\",\n    \"start:sit\": \"cross-env SERVE_ENV=sit umi dev\",\n    \"start:test\": \"cross-env SERVE_ENV=test umi dev\"\n  }\n}"
      ]
    ]
  ],
  "meta": {
    "category": "开发",
    "order": 10,
    "title": "本地 Proxy 方案",
    "filename": "docs/dev/orient-local-proxy.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#为什么要本地代理",
          "title": "为什么要本地代理"
        },
        "为什么要本地代理"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#需要明确的问题",
          "title": "需要明确的问题"
        },
        "需要明确的问题"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#实现原理",
          "title": "实现原理"
        },
        "实现原理"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#在开发中使用",
          "title": "在开发中使用"
        },
        "在开发中使用"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#CORS",
          "title": "CORS"
        },
        "CORS"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Profile-高级用法",
          "title": "Profile 高级用法"
        },
        "Profile 高级用法"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-local-proxy.zh-CN.md.js.map