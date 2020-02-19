(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-request.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-request.zh-CN.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-request.zh-CN.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "和服务端进行交互基于 dva 封装，同时分层结构上在 dva 下层额外封装了一层 service，用于处理与后端服务的通信和逻辑处理。"
    ],
    [
      "h2",
      "前端请求流程"
    ],
    [
      "p",
      "一个完整的前端 UI 交互到服务端处理流程是这样的："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "UI 组件发起交互操作；"
        ]
      ],
      [
        "li",
        [
          "p",
          "调用 model 的 effect；"
        ]
      ],
      [
        "li",
        [
          "p",
          "调用统一管理的 service 请求函数；"
        ]
      ],
      [
        "li",
        [
          "p",
          "使用封装的 request.ts 发送请求；"
        ]
      ],
      [
        "li",
        [
          "p",
          "获取服务端返回；"
        ]
      ],
      [
        "li",
        [
          "p",
          "然后调用 reducer 改变 state；"
        ]
      ],
      [
        "li",
        [
          "p",
          "更新 model。"
        ]
      ]
    ],
    [
      "p",
      "从上面的流程可以看出，为了方便管理维护，统一的请求处理都放在 services 文件夹中，并且一般按照 model 维度进行拆分文件，如："
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "<span class=\"token operator\">/</span><span class=\"token operator\">/</span> 建议按照 model 维度进行拆分\nservices<span class=\"token operator\">/</span>\n  user<span class=\"token punctuation\">.</span>ts\n  login<span class=\"token punctuation\">.</span>ts\nmodels<span class=\"token operator\">/</span>\n  user<span class=\"token punctuation\">.</span>ts\n  login<span class=\"token punctuation\">.</span>ts"
      },
      [
        "code",
        "// 建议按照 model 维度进行拆分\nservices/\n  user.ts\n  login.ts\nmodels/\n  user.ts\n  login.ts"
      ]
    ],
    [
      "p",
      "其中，utils/request.ts 是基于 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/umijs/umi-request"
        },
        "umi-request"
      ],
      " 的封装，便于统一处理 POST，GET 等请求参数，请求头，以及错误提示信息等。"
    ],
    [
      "p",
      "例如在 services 中的一个请求用户信息的例子："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// services/user.ts</span>\n<span class=\"token keyword\">import</span> request <span class=\"token keyword\">from</span> <span class=\"token string\">'../utils/request'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">async</span> <span class=\"token keyword\">function</span> <span class=\"token function\">query</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token function\">request</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/api/users'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">async</span> <span class=\"token keyword\">function</span> <span class=\"token function\">queryCurrent</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token function\">request</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/api/currentUser'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// models/user.ts</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> queryCurrent <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'../services/user'</span><span class=\"token punctuation\">;</span>\n<span class=\"token operator\">...</span>\neffects<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token operator\">*</span><span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> payload <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> call<span class=\"token punctuation\">,</span> put <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token operator\">...</span>\n    <span class=\"token keyword\">const</span> response <span class=\"token operator\">=</span> <span class=\"token keyword\">yield</span> <span class=\"token function\">call</span><span class=\"token punctuation\">(</span>queryCurrent<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token operator\">...</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// services/user.ts\nimport request from '../utils/request';\n\nexport async function query() {\n  return request('/api/users');\n}\n\nexport async function queryCurrent() {\n  return request('/api/currentUser');\n}\n\n// models/user.ts\nimport { queryCurrent } from '../services/user';\n...\neffects: {\n  *fetch({ payload }, { call, put }) {\n    ...\n    const response = yield call(queryCurrent);\n    ...\n  },\n}"
      ]
    ],
    [
      "h2",
      "跨域问题"
    ],
    [
      "p",
      "因为浏览器的同源策略，前端经常要面临跨域问题，同源策略/SOP（Same origin policy）是一种约定，由 Netscape 公司 1995 年引入浏览器，它是浏览器最核心也最基本的安全功能，如果缺少了同源策略，浏览器很容易受到 XSS、CSFR 等攻击。所谓同源是指协议、域名、端口三者相同，",
      [
        "strong",
        "因此如果当前页面与发起 AJAX 请求的地址中协议、域名、端口有一个不一致，则会出现跨域问题，跨域问题最明显的现象是 AJAX 接口无法请求成功"
      ],
      "。"
    ],
    [
      "p",
      "应对跨域问题有非常多的方案，当下主流以及推荐的方案是 CORS(Cross-origin resource sharing)，CORS 是一个 W3C 标准，全称是跨域资源共享。它允许浏览器向跨源服务器发起 MLHttpRequest 请求，从而克服了同源策略的限制。CORS 需要服务端配置一些头信息，这方面谷歌上有非常多的内容可以参考，这里不再详细描述，具体可参考 ",
      [
        "a",
        {
          "title": null,
          "href": "http://www.ruanyifeng.com/blog/2016/04/cors.html"
        },
        "跨域资源共享 CORS"
      ],
      " 详解。"
    ],
    [
      "h2",
      "处理异步请求"
    ],
    [
      "p",
      "在处理复杂的异步请求的时候，很容易让逻辑混乱，陷入嵌套陷阱，所以借助 dva 使用 effect 的方式来管理同步化异步请求："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "effects<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token operator\">*</span><span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> payload <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> call<span class=\"token punctuation\">,</span> put <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">yield</span> <span class=\"token function\">put</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'changeLoading'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// 异步请求 1</span>\n    <span class=\"token keyword\">const</span> response <span class=\"token operator\">=</span> <span class=\"token keyword\">yield</span> <span class=\"token function\">call</span><span class=\"token punctuation\">(</span>queryFakeList<span class=\"token punctuation\">,</span> payload<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">yield</span> <span class=\"token function\">put</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'save'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> response<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// 异步请求 2</span>\n    <span class=\"token keyword\">const</span> response2 <span class=\"token operator\">=</span> <span class=\"token keyword\">yield</span> <span class=\"token function\">call</span><span class=\"token punctuation\">(</span>queryFakeList2<span class=\"token punctuation\">,</span> payload<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">yield</span> <span class=\"token function\">put</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'save2'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> response2<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">yield</span> <span class=\"token function\">put</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'changeLoading'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>"
      },
      [
        "code",
        "effects: {\n  *fetch({ payload }, { call, put }) {\n    yield put({\n      type: 'changeLoading',\n      payload: true,\n    });\n    // 异步请求 1\n    const response = yield call(queryFakeList, payload);\n    yield put({\n      type: 'save',\n      payload: response,\n    });\n    // 异步请求 2\n    const response2 = yield call(queryFakeList2, payload);\n    yield put({\n      type: 'save2',\n      payload: response2,\n    });\n    yield put({\n      type: 'changeLoading',\n      payload: false,\n    });\n  },\n},"
      ]
    ],
    [
      "p",
      "通过 ",
      [
        "a",
        {
          "title": null,
          "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/function*"
        },
        "generator"
      ],
      " 和 ",
      [
        "a",
        {
          "title": null,
          "href": "https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/yield"
        },
        "yield"
      ],
      " 使得异步调用的逻辑处理跟同步一样。"
    ]
  ],
  "meta": {
    "category": "开发",
    "order": 6,
    "title": "前后端通信",
    "filename": "docs/dev/orient-request.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#前端请求流程",
          "title": "前端请求流程"
        },
        "前端请求流程"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#跨域问题",
          "title": "跨域问题"
        },
        "跨域问题"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#处理异步请求",
          "title": "处理异步请求"
        },
        "处理异步请求"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-request.zh-CN.md.js.map