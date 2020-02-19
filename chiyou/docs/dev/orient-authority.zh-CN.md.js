(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-authority.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-authority.zh-CN.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-authority.zh-CN.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "在框架中，包含以下几种鉴权机制："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "路由鉴权：当用户访问某个没有权限的页面时跳转到无权限页面，或没有路由时跳转到 404 页面"
        ]
      ],
      [
        "li",
        [
          "p",
          "接口鉴权：当用户通过操作调用没有权限的接口时跳转到无权限页面"
        ]
      ],
      [
        "li",
        [
          "p",
          "操作鉴权：页面中的某些按钮或区块针对无权限的用户直接隐藏或禁止操作"
        ]
      ],
      [
        "li",
        [
          "p",
          "菜单鉴权：某些菜单针对无权限的用户直接隐藏（属于操作鉴权的一种）"
        ]
      ]
    ],
    [
      "h2",
      "控制菜单和路由显示"
    ],
    [
      "p",
      "如需对某些页面进行权限控制，只需在路由配置文件 ",
      [
        "code",
        "config/config.ts"
      ],
      " 中设置 ",
      [
        "code",
        "Routes"
      ],
      " 属性即可，代表该路由的准入权限；同时框架内会根据路由配置来展示不同的菜单显示。"
    ],
    [
      "h2",
      "路由鉴权"
    ],
    [
      "p",
      "路由鉴权针对页面级组件，可通过 ",
      [
        "code",
        "config/config.ts"
      ],
      " 来配置，如果未在该配置文件中配置的都将认为该路由不进行鉴权。"
    ],
    [
      "p",
      "详细请参考 ",
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
      "h2",
      "接口鉴权"
    ],
    [
      "p",
      "请参考文档 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/dev/orient-request"
        },
        "前后端通信"
      ],
      "。"
    ],
    [
      "p",
      "业务上封装统一的请求方法，与服务端约定接口协议，前端根据状态码判断无权限、未登录等状态，然后跳转至指定页面。"
    ],
    [
      "h2",
      "操作鉴权"
    ],
    [
      "p",
      "如果页面中某个组件要根据角色判断是否显示，可以使用 ",
      [
        "code",
        "RenderAuthorize"
      ],
      " 组件，同时传入 ",
      [
        "code",
        "authority"
      ],
      " 和 ",
      [
        "code",
        "noMatch"
      ],
      "："
    ],
    [
      "p",
      "首先需要将 操作权限 存储到本地作用域中："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// 在需要存储的逻辑地方加入下面代码：</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> setAuthority <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"@/utils/authority\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token function\">setAuthority</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token string\">\"admin\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// 在需要存储的逻辑地方加入下面代码：\nimport { setAuthority } from \"@/utils/authority\";\n\nsetAuthority([\"admin\"]);"
      ]
    ],
    [
      "p",
      "其次在需要鉴权的 操作 上进行包装："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">import</span> RenderAuthorize <span class=\"token keyword\">from</span> <span class=\"token string\">\"@/components/Authorized\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> getAuthority <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"@/utils/authority\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// 声明 操作权限 组件</span>\n<span class=\"token keyword\">const</span> Authorized <span class=\"token operator\">=</span> <span class=\"token function\">RenderAuthorize</span><span class=\"token punctuation\">(</span><span class=\"token function\">getAuthority</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// 执行 getAuthority() 就可以取到 [\"admin\"]</span>\n<span class=\"token operator\">&lt;</span>Authorized authority<span class=\"token operator\">=</span><span class=\"token string\">\"admin\"</span> noMatch<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">null</span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span>Button<span class=\"token operator\">></span>提交<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Button<span class=\"token operator\">></span>\n<span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Authorized<span class=\"token operator\">></span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import RenderAuthorize from \"@/components/Authorized\";\nimport { getAuthority } from \"@/utils/authority\";\n\n// 声明 操作权限 组件\nconst Authorized = RenderAuthorize(getAuthority()); // 执行 getAuthority() 就可以取到 [\"admin\"]\n<Authorized authority=\"admin\" noMatch={null}>\n  <Button>提交</Button>\n</Authorized>;"
      ]
    ],
    [
      "h3",
      "RenderAuthorize"
    ],
    [
      "blockquote",
      [
        "p",
        "RenderAuthorized: (currentAuthority: string | () => string) => Authorized"
      ]
    ],
    [
      "p",
      "权限组件默认 export RenderAuthorized 函数，它接收当前权限作为参数，返回一个权限对象，该对象提供以下几种使用方式。"
    ],
    [
      "h3",
      "Authorized"
    ],
    [
      "p",
      "最基础的权限控制。"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "children"
          ],
          [
            "td",
            "正常渲染的元素，权限判断通过时展示"
          ],
          [
            "td",
            "ReactNode"
          ]
        ],
        [
          "tr",
          [
            "td",
            "anthority"
          ],
          [
            "td",
            "准入权限/权限判断"
          ],
          [
            "td",
            [
              "code",
              "string | array | Promise | (currentAuthority) => boolean | Promise"
            ]
          ]
        ],
        [
          "tr",
          [
            "td",
            "noMatch"
          ],
          [
            "td",
            "权限异常渲染元素，权限判断不通过时展示"
          ],
          [
            "td",
            "ReactNode"
          ]
        ]
      ]
    ],
    [
      "h2",
      "菜单鉴权"
    ],
    [
      "p",
      "当需要对某些菜单项进行权限控制，只需在对应的菜单项设置 ",
      [
        "code",
        "authorities"
      ],
      " 属性即可，当前用户的权限如果与 ",
      [
        "code",
        "authorities"
      ],
      " 中指定的权限不匹配，菜单项将不显示。"
    ],
    [
      "p",
      "通常 ",
      [
        "code",
        "菜单"
      ],
      " 都是通过服务端获取数据并根据结构来进行展示。"
    ]
  ],
  "meta": {
    "category": "开发",
    "order": 11,
    "title": "权限管理",
    "filename": "docs/dev/orient-authority.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#控制菜单和路由显示",
          "title": "控制菜单和路由显示"
        },
        "控制菜单和路由显示"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#路由鉴权",
          "title": "路由鉴权"
        },
        "路由鉴权"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#接口鉴权",
          "title": "接口鉴权"
        },
        "接口鉴权"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#操作鉴权",
          "title": "操作鉴权"
        },
        "操作鉴权"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#菜单鉴权",
          "title": "菜单鉴权"
        },
        "菜单鉴权"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-authority.zh-CN.md.js.map