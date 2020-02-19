(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-data-state.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-data-state.zh-CN.md":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-data-state.zh-CN.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "状态管理通常是一个应用最复杂的部分，React 原生提供了 setState, Context 等方式来实现本地与全局状态管理，对于更复杂的业务场景，原生方案也不能完全满足需求，因此社区中产生了大量状态管理框架来解决这个问题，比较有名的诸如 Redux、 Mobx，但是这些框架引入了很多概念，有不小的学习成本，而且滥用框架也会带来一定性能上的问题。因此蚩尤从易用性与性能上出发，使用 ",
      [
        "a",
        {
          "title": null,
          "href": "https://dvajs.com/"
        },
        "Dva"
      ],
      " 作为轻量级的状态管理方案。"
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
          "src": "https://s2.ax1x.com/2020/01/30/1lmqDU.png"
        }
      ]
    ],
    [
      "h2",
      "快速上手"
    ],
    [
      "p",
      "框架内部已经集成了 Dva 和路由处理，我们不需要关心这些集成细节，下面我们通过一个简单的示例来深入理解整个数据状态的概念和处理流程，假设我们需要开发一个 ",
      [
        "code",
        "用户登录"
      ],
      " 的功能："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "编写 ",
          [
            "code",
            "用户登录"
          ],
          " 的 UI Component；"
        ]
      ],
      [
        "li",
        [
          "p",
          "定义路由；"
        ]
      ],
      [
        "li",
        [
          "p",
          "定义 Service；"
        ]
      ],
      [
        "li",
        [
          "p",
          "定义 Model；"
        ]
      ],
      [
        "li",
        [
          "p",
          "将上述涉及模块连起来。"
        ]
      ]
    ],
    [
      "h2",
      "编写用户登录的 UI Component"
    ],
    [
      "p",
      "随着应用的发展，我们可能需要在多个页面分享 UI 元素 (或在一个页面使用多次)，因此我们会把部分抽象成 UI Component。"
    ],
    [
      "blockquote",
      [
        "p",
        "这里我们隐藏了很多实现细节，只是为了展示整个数据状态的处理流程。"
      ]
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// pages/user/login/index.tsx:</span>\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Login</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component</span><span class=\"token operator\">&lt;</span>LoginProps<span class=\"token punctuation\">,</span> LoginState<span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n      <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>登录<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>登录结果：未登录<span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// pages/user/login/index.tsx:\nclass Login extends Component<LoginProps, LoginState> {\n  render() {\n    return (\n      // ...\n      <Button>登录</Button>\n      <div>登录结果：未登录<div>\n      // ...\n    );\n  }\n}"
      ]
    ],
    [
      "h2",
      "定义路由"
    ],
    [
      "p",
      "路由可以理解为是组成应用的不同页面，通过约定式方式在下面的文件中进行定义，具体请参看：",
      [
        "a",
        {
          "title": null,
          "href": "/docs/dev/orient-router-menu"
        },
        "路由和菜单"
      ],
      "。"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// config/config.ts:</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n  routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      path<span class=\"token punctuation\">:</span> <span class=\"token string\">\"/user\"</span><span class=\"token punctuation\">,</span>\n      component<span class=\"token punctuation\">:</span> <span class=\"token string\">\"../layouts/UserLayout\"</span><span class=\"token punctuation\">,</span>\n      routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n          name<span class=\"token punctuation\">:</span> <span class=\"token string\">\"login\"</span><span class=\"token punctuation\">,</span>\n          path<span class=\"token punctuation\">:</span> <span class=\"token string\">\"/user/login\"</span><span class=\"token punctuation\">,</span>\n          component<span class=\"token punctuation\">:</span> <span class=\"token string\">\"./user/login\"</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">]</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">]</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// config/config.ts:\nexport default {\n  // ...\n  routes: [\n    {\n      path: \"/user\",\n      component: \"../layouts/UserLayout\",\n      routes: [\n        {\n          name: \"login\",\n          path: \"/user/login\",\n          component: \"./user/login\"\n        }\n      ]\n    }\n  ]\n  // ...\n};"
      ]
    ],
    [
      "p",
      "这样你就可以通过 ",
      [
        "code",
        "/user/login"
      ],
      " 的访问路径来展示上面的 UI Component。"
    ],
    [
      "h2",
      "定义 Service"
    ],
    [
      "p",
      "Service 是用于处理服务端通信的逻辑处理，具体请参看：",
      [
        "a",
        {
          "title": null,
          "href": "/docs/dev/orient-request"
        },
        "服务器通信"
      ],
      "。"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// services/login.ts:</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">async</span> <span class=\"token keyword\">function</span> <span class=\"token function\">fakeAccountLogin</span><span class=\"token punctuation\">(</span>params<span class=\"token punctuation\">:</span> LoginParamsType<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// 这里你应该调用服务端同事为你准备好的api或者mock api</span>\n  <span class=\"token keyword\">return</span> <span class=\"token function\">request</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"/api/login/account\"</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n    method<span class=\"token punctuation\">:</span> <span class=\"token string\">\"POST\"</span><span class=\"token punctuation\">,</span>\n    data<span class=\"token punctuation\">:</span> params\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// services/login.ts:\nexport async function fakeAccountLogin(params: LoginParamsType) {\n  // 这里你应该调用服务端同事为你准备好的api或者mock api\n  return request(\"/api/login/account\", {\n    method: \"POST\",\n    data: params\n  });\n}"
      ]
    ],
    [
      "h2",
      "定义 Model"
    ],
    [
      "p",
      "完成 UI 后，现在开始正式处理数据和逻辑。"
    ],
    [
      "p",
      "通过 model 的概念可以把一个领域的数据模型管理起来，包含同步更新 state 的 reducers，以及处理异步逻辑的 effects，还有订阅数据源的 subscriptions。"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// models/login.ts:</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token keyword\">const</span> Model<span class=\"token punctuation\">:</span> LoginModelType <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  namespace<span class=\"token punctuation\">:</span> <span class=\"token string\">'login'</span><span class=\"token punctuation\">,</span>\n\n  state<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    status<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  reducers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">changeLoginStatus</span><span class=\"token punctuation\">(</span>state<span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> payload <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">setAuthority</span><span class=\"token punctuation\">(</span>payload<span class=\"token punctuation\">.</span>currentAuthority<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span>state<span class=\"token punctuation\">,</span>\n        status<span class=\"token punctuation\">:</span> payload<span class=\"token punctuation\">.</span>status<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  effects<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token operator\">*</span><span class=\"token function\">login</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> payload <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span> call<span class=\"token punctuation\">,</span> put <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> response <span class=\"token operator\">=</span> <span class=\"token keyword\">yield</span> <span class=\"token function\">call</span><span class=\"token punctuation\">(</span>fakeAccountLogin<span class=\"token punctuation\">,</span> payload<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">yield</span> <span class=\"token function\">put</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        type<span class=\"token punctuation\">:</span> <span class=\"token string\">'changeLoginStatus'</span><span class=\"token punctuation\">,</span>\n        payload<span class=\"token punctuation\">:</span> response<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  subscriptions<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// models/login.ts:\nexport default const Model: LoginModelType = {\n  namespace: 'login',\n\n  state: {\n    status: undefined,\n  },\n\n  reducers: {\n    changeLoginStatus(state, { payload }) {\n      setAuthority(payload.currentAuthority);\n      return {\n        ...state,\n        status: payload.status,\n      };\n    },\n  },\n\n  effects: {\n    *login({ payload }, { call, put }) {\n      const response = yield call(fakeAccountLogin, payload);\n      yield put({\n        type: 'changeLoginStatus',\n        payload: response,\n      });\n    },\n  },\n\n  subscriptions: {},\n};"
      ]
    ],
    [
      "p",
      "在这个 model 里："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "namespace"
          ],
          " 表示在全局 state 上的 key"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "state"
          ],
          " 是该领域的数据状态，可在这里定义初始值"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "reducers"
          ],
          " 等同于 redux 里的 reducer，接收 action，同步更新 state"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "effects"
          ],
          " 用于执行异步操作，即主要调用 services"
        ]
      ]
    ],
    [
      "h2",
      "将上述涉及模块连起来"
    ],
    [
      "p",
      "到这里，我们已经单独完成了 model 和 component，那么他们如何串联起来呢?"
    ],
    [
      "p",
      "Dva 提供了 connect 方法。如果你熟悉 redux，这个 connect 就是 react-redux 的 connect 。"
    ],
    [
      "p",
      "接下去让我们重新编辑 UI Component 文件："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// pages/user/login/index.tsx:</span>\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Login</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">Component</span><span class=\"token operator\">&lt;</span>LoginProps<span class=\"token punctuation\">,</span> LoginState<span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">handleSubmit</span><span class=\"token punctuation\">(</span>values<span class=\"token punctuation\">:</span> LoginParamsType<span class=\"token punctuation\">)</span><span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> dispatch <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token function\">dispatch</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'login/login'</span><span class=\"token punctuation\">,</span>\n      payload<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token operator\">...</span>values<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> userLogin <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> status <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> userLogin<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n      <span class=\"token operator\">&lt;</span>Button onSubmit<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>登录<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n      <span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>登录结果：<span class=\"token punctuation\">{</span> <span class=\"token operator\">!</span>status <span class=\"token operator\">?</span> <span class=\"token string\">\"未登录\"</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">\"已登录\"</span> <span class=\"token punctuation\">}</span><span class=\"token operator\">&lt;</span>div<span class=\"token operator\">></span>\n      <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token function\">connect</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> login <span class=\"token punctuation\">}</span><span class=\"token punctuation\">:</span> ConnectState<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  userLogin<span class=\"token punctuation\">:</span> login<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>Login<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// pages/user/login/index.tsx:\nclass Login extends Component<LoginProps, LoginState> {\n  handleSubmit(values: LoginParamsType){\n    const { dispatch } = this.props;\n    dispatch({\n      type: 'login/login',\n      payload: {\n        ...values,\n      },\n    });\n  }\n\n  render() {\n    const { userLogin = {} } = this.props;\n    const { status } = userLogin;\n    return (\n      // ...\n      <Button onSubmit={this.handleSubmit}>登录</Button>\n      <div>登录结果：{ !status ? \"未登录\" : \"已登录\" }<div>\n      // ...\n    );\n  }\n}\n\nexport default connect(({ login }: ConnectState) => ({\n  userLogin: login,\n}))(Login);"
      ]
    ],
    [
      "p",
      "在这个 UI Component 里："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "dispatch"
          ],
          " 用于调用 model 中的 effects，type 为 namespace/effects key，这样就可以调用到 login model 中的 login generator 函数"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "connect"
          ],
          " 则是将 model 中的数据状态与 UI 连起来，一旦连起来后就可以在 UI 层通过 props 来获取到需要的 state"
        ]
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
      "至此，我们完成了一个简单的 ",
      [
        "code",
        "用户登录"
      ],
      " 模块开发，你只要理解了这个示例，应该也对整个数据状态的管理流程有了深入的认识，通过 Dva 可以更加有条理的管理好我们的数据状态，而且相比 redux 一些同类型的状态管理解决方案，我们的学习成本也降低了很多。"
    ]
  ],
  "meta": {
    "category": "开发",
    "order": 7,
    "title": "数据状态管理",
    "filename": "docs/dev/orient-data-state.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#快速上手",
          "title": "快速上手"
        },
        "快速上手"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#编写用户登录的-UI-Component",
          "title": "编写用户登录的 UI Component"
        },
        "编写用户登录的 UI Component"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#定义路由",
          "title": "定义路由"
        },
        "定义路由"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#定义-Service",
          "title": "定义 Service"
        },
        "定义 Service"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#定义-Model",
          "title": "定义 Model"
        },
        "定义 Model"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#将上述涉及模块连起来",
          "title": "将上述涉及模块连起来"
        },
        "将上述涉及模块连起来"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-data-state.zh-CN.md.js.map