(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-code-quality-assurance.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-code-quality-assurance.zh-CN.md":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-code-quality-assurance.zh-CN.md ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "为了保证代码质量，我们推荐使用 lint 相关的工具对代码进行检测，同时为了降低常规 lint 工具的使用成本，框架内部已封装了 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/umijs/fabric"
        },
        "fabric"
      ],
      " 这个 npm 包。"
    ],
    [
      "blockquote",
      [
        "p",
        "fabric 是一个包含 prettier、 eslint、 stylelint 的配置合集，屏蔽了繁琐的配置信息"
      ]
    ],
    [
      "h2",
      "引入配置文件"
    ],
    [
      "h2",
      "eslint"
    ],
    [
      "p",
      "eslint 用来检测 js 代码的风格，在根目录下新建配置文件 ",
      [
        "code",
        ".eslintrc.js"
      ],
      " 即可引入 lint 规则："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">extends</span><span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>require<span class=\"token punctuation\">.</span><span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"@umijs/fabric/dist/eslint\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// in antd-design-pro</span>\n  globals<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    page<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n\n  rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// your rules</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "module.exports = {\n  extends: [require.resolve(\"@umijs/fabric/dist/eslint\")],\n\n  // in antd-design-pro\n  globals: {\n    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,\n    page: true\n  },\n\n  rules: {\n    // your rules\n  }\n};"
      ]
    ],
    [
      "h2",
      "tslint"
    ],
    [
      "blockquote",
      [
        "p",
        "tslint 目前已被官方确认废弃，今后不再维护，取而代之的将是 eslint，想了解详情可参考我们之前的",
        [
          "a",
          {
            "title": null,
            "href": "https://5057399d.wiz03.com/wapp/pages/view/share/s/1glPCt3ocQ572YRO-u1VtQLl1ef8SW07pAkw25D3-s0rDQDP"
          },
          "深入研究"
        ]
      ]
    ],
    [
      "p",
      "如果你的项目使用的是 TypeScript，也可使用上面的 eslint 来配置。"
    ],
    [
      "p",
      "ts 的 lint 规则并不是在 eslint 官方查询的，具体请到 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#usage"
        },
        "typescript-eslint-rules"
      ],
      " 查询规则的使用。"
    ],
    [
      "h2",
      "stylelint"
    ],
    [
      "p",
      "stylelint 用来检测样式代码的风格，在根目录下新建配置文件 ",
      [
        "code",
        ".stylelintrc.js"
      ],
      " 即可引入 lint 规则："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">const</span> fabric <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"@umijs/fabric\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> yourRules <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  rules<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token comment\" spellcheck=\"true\">// your rules</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token operator\">...</span>fabric<span class=\"token punctuation\">.</span>stylelint<span class=\"token punctuation\">,</span>\n  <span class=\"token operator\">...</span>yourRules\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "const fabric = require(\"@umijs/fabric\");\n\nconst yourRules = {\n  rules: {\n    // your rules\n  }\n};\n\nmodule.exports = {\n  ...fabric.stylelint,\n  ...yourRules\n};"
      ]
    ],
    [
      "h2",
      "prettierlint"
    ],
    [
      "p",
      "prettierlint 用来检测代码格式化标准，在根目录下新建配置文件 ",
      [
        "code",
        ".prettierrc.js"
      ],
      " 即可引入 lint 规则："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">const</span> fabric <span class=\"token operator\">=</span> <span class=\"token function\">require</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"@umijs/fabric\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> yourRules <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// your rules</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nmodule<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token operator\">...</span>fabric<span class=\"token punctuation\">.</span>prettier<span class=\"token punctuation\">,</span>\n  <span class=\"token operator\">...</span>yourRules\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "const fabric = require(\"@umijs/fabric\");\n\nconst yourRules = {\n  // your rules\n};\n\nmodule.exports = {\n  ...fabric.prettier,\n  ...yourRules\n};"
      ]
    ],
    [
      "h2",
      "执行命令行"
    ],
    [
      "p",
      "通过 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/dev/orient-project-config#代码检查"
        },
        "代码检查"
      ],
      " 和 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/dev/orient-project-config#代码修复"
        },
        "代码修复"
      ],
      " 可用于执行 lint 任务。"
    ],
    [
      "h2",
      "流程保证"
    ],
    [
      "p",
      "为了保证以上检测能力的有效执行，蚩尤内部通过在执行 git 命令时（Git hooks）强制运行检测任务来保证，这里使用了 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/typicode/husky"
        },
        "husky"
      ],
      " 和 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/okonet/lint-staged"
        },
        "lint-staged"
      ],
      " 这些工具。"
    ],
    [
      "h4",
      "实现过程"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "待提交的代码"
        ]
      ],
      [
        "li",
        [
          "p",
          "git add 添加到暂存区"
        ]
      ],
      [
        "li",
        [
          "p",
          "执行 git commit"
        ]
      ],
      [
        "li",
        [
          "p",
          "husky 注册在 git pre-commit 的钩子调用 lint-staged"
        ]
      ],
      [
        "li",
        [
          "p",
          "lint-staged 取得所有被提交的文件依次执行写好的 lint 任务"
        ]
      ],
      [
        "li",
        [
          "p",
          "如果有错误（没通过 lint 检查）则停止任务，等待下次 commit，同时打印错误信息"
        ]
      ],
      [
        "li",
        [
          "p",
          "成功提交至 git remote"
        ]
      ]
    ]
  ],
  "meta": {
    "category": "开发",
    "order": 3,
    "title": "代码质量保障",
    "filename": "docs/dev/orient-code-quality-assurance.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#引入配置文件",
          "title": "引入配置文件"
        },
        "引入配置文件"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#eslint",
          "title": "eslint"
        },
        "eslint"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#tslint",
          "title": "tslint"
        },
        "tslint"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#stylelint",
          "title": "stylelint"
        },
        "stylelint"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#prettierlint",
          "title": "prettierlint"
        },
        "prettierlint"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#执行命令行",
          "title": "执行命令行"
        },
        "执行命令行"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#流程保证",
          "title": "流程保证"
        },
        "流程保证"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-code-quality-assurance.zh-CN.md.js.map