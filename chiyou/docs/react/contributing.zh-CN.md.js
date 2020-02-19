(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/react/contributing.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/react/contributing.zh-CN.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/react/contributing.zh-CN.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "这篇指南会指导你如何为 Ant Design 贡献一份自己的力量，请在你要提 issue 或者 pull request 之前花几分钟来阅读一遍这篇指南。"
    ],
    [
      "h2",
      "行为准则"
    ],
    [
      "p",
      "我们有一份 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/CODE_OF_CONDUCT.md"
        },
        "行为准则"
      ],
      "，希望所有的贡献者都能遵守，请花时间阅读一遍全文以确保你能明白哪些是可以做的，哪些是不可以做的。"
    ],
    [
      "h2",
      "透明的开发"
    ],
    [
      "p",
      "我们所有的工作都会放在 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design"
        },
        "GitHub"
      ],
      " 上。不管是核心团队的成员还是外部贡献者的 pull request 都需要经过同样流程的 review。"
    ],
    [
      "h2",
      "分支管理"
    ],
    [
      "p",
      "基于我们的 ",
      [
        "a",
        {
          "title": null,
          "href": "/changelog"
        },
        "发布周期"
      ],
      "，我们长期维护两个分支 ",
      [
        "code",
        "master"
      ],
      " 和 ",
      [
        "code",
        "feature"
      ],
      "。如果你要修一个 bug，那么请发 pull request 到 ",
      [
        "code",
        "master"
      ],
      "；如果你要提一个增加新功能的 pull request，那么请基于 ",
      [
        "code",
        "feature"
      ],
      " 分支来做。"
    ],
    [
      "h2",
      "Bugs"
    ],
    [
      "p",
      "我们使用 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues"
        },
        "GitHub Issues"
      ],
      " 来做 bug 追踪。 如果你想要你发现的 bug 被快速解决，最好的办法就是通过我们提供的 ",
      [
        "a",
        {
          "title": null,
          "href": "http://new-issue.ant.design"
        },
        "issue 小助手"
      ],
      " 来提 issue。并且能使用这个 ",
      [
        "a",
        {
          "title": null,
          "href": "https://u.ant.design/codesandbox-repro"
        },
        "模板"
      ],
      " 来提供重现。"
    ],
    [
      "p",
      "在你报告一个 bug 之前，请先确保已经搜索过已有的 issue 和阅读了我们的 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/react/faq"
        },
        "常见问题"
      ],
      "。"
    ],
    [
      "h2",
      "新增功能"
    ],
    [
      "p",
      "如果你有改进我们的 API 或者新增功能的想法，我们同样推荐你使用我们提供的 ",
      [
        "a",
        {
          "title": null,
          "href": "http://new-issue.ant.design"
        },
        "issue 小助手"
      ],
      " 来新建一个添加新功能的 issue。"
    ],
    [
      "p",
      "如果你希望协助开发新的 API，请参考 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/wiki/API-Naming-rules"
        },
        "API 规范"
      ],
      " 进行命名。"
    ],
    [
      "h2",
      "第一次贡献"
    ],
    [
      "p",
      "如果你还不清楚怎么在 GitHub 上提 Pull Request ，可以阅读下面这篇文章来学习："
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://segmentfault.com/a/1190000000736629"
        },
        "如何优雅地在 GitHub 上贡献代码"
      ]
    ],
    [
      "p",
      "为了能帮助你开始你的第一次尝试，我们用 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
        },
        "good first issues"
      ],
      " 标记了一些比较比较容易修复的 bug 和小功能。这些 issue 可以很好地做为你的首次尝试。"
    ],
    [
      "p",
      "如果你打算开始处理一个 issue，请先检查一下 issue 下面的留言以确保没有别人正在处理这个 issue。如果当前没有人在处理的话你可以留言告知其他人你将会处理这个 issue，以免别人重复劳动。"
    ],
    [
      "p",
      "如果之前有人留言说会处理这个 issue 但是一两个星期都没有动静，那么你也可以接手处理这个 issue，当然还是需要留言告知其他人。"
    ],
    [
      "h2",
      "Pull Request"
    ],
    [
      "p",
      "Ant Design 团队会关注所有的 pull request，我们会 review 以及合并你的代码，也有可能要求你做一些修改或者告诉你我们为什么不能接受这样的修改。"
    ],
    [
      "p",
      [
        "strong",
        "在你发送 Pull Request 之前"
      ],
      "，请确认你是按照下面的步骤来做的："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "基于 ",
          [
            "a",
            {
              "title": null,
              "href": "#分支管理"
            },
            "正确的分支"
          ],
          " 做修改。"
        ]
      ],
      [
        "li",
        [
          "p",
          "在项目根目录下运行了 ",
          [
            "code",
            "npm install"
          ],
          "。"
        ]
      ],
      [
        "li",
        [
          "p",
          "如果你修复了一个 bug 或者新增了一个功能，请确保写了相应的测试，这很重要。"
        ]
      ],
      [
        "li",
        [
          "p",
          "确认所有的测试都是通过的 ",
          [
            "code",
            "npm run test"
          ],
          "。 小贴士：开发过程中可以用 ",
          [
            "code",
            "npm test -- --watch TestName"
          ],
          " 来运行指定的测试。"
        ]
      ],
      [
        "li",
        [
          "p",
          "运行 ",
          [
            "code",
            "npm test -- -u"
          ],
          " 来更新 ",
          [
            "a",
            {
              "title": null,
              "href": "http://facebook.github.io/jest/docs/en/snapshot-testing.html#snapshot-testing-with-jest"
            },
            "jest snapshot"
          ],
          " 并且把这些更新也提交上来（如果有的话）。"
        ]
      ],
      [
        "li",
        [
          "p",
          "确保你的代码通过了 lint 检查 ",
          [
            "code",
            "npm run lint"
          ],
          ". 小贴士: Lint 会在你 ",
          [
            "code",
            "git commit"
          ],
          " 的时候自动运行（通过",
          [
            "a",
            {
              "title": null,
              "href": "https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks"
            },
            "Git Hooks"
          ],
          "）。"
        ]
      ]
    ],
    [
      "p",
      "给 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/react-component/"
        },
        "react-component"
      ],
      " 发送 pull request："
    ],
    [
      "p",
      "由于 antd 的大部分组件都是基于 react-component 的，所以有时候你可能需要给相应的 react-component 仓库发送 pull request。如果你是修复了某个 bug，那么我们在合并你的修改后会尽快发布一个 patch 版本，然后你只要重新安装你的依赖就可以使用新发布的版本了。如果你的 pull request 是新增了某个功能，那么在你的修改合并并且发布版本后，你还需要发送一个 pull request 到 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/"
        },
        "Ant Design"
      ],
      " 来升级相应的依赖、文档以及 TypeScript 的类型定义。"
    ],
    [
      "h2",
      "开发流程"
    ],
    [
      "p",
      "在你 clone 了 antd 的代码并且使用 ",
      [
        "code",
        "npm install"
      ],
      " 安装完依赖后，你还可以运行下面几个常用的命令："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          [
            "code",
            "npm start"
          ],
          " 在本地运行 Ant Design 的网站。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "npm run lint"
          ],
          " 检查代码风格。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "npm test"
          ],
          " 运行测试。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "npm run compile"
          ],
          " 编译 TypeScript 代码到 lib 和 es 目录。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "npm run dist"
          ],
          " 构建 antd 的 UMD 版本到 dist 目录。"
        ]
      ]
    ]
  ],
  "meta": {
    "order": 10,
    "title": "贡献指南",
    "toc": false,
    "filename": "docs/react/contributing.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#行为准则",
          "title": "行为准则"
        },
        "行为准则"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#透明的开发",
          "title": "透明的开发"
        },
        "透明的开发"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#分支管理",
          "title": "分支管理"
        },
        "分支管理"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Bugs",
          "title": "Bugs"
        },
        "Bugs"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#新增功能",
          "title": "新增功能"
        },
        "新增功能"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#第一次贡献",
          "title": "第一次贡献"
        },
        "第一次贡献"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Pull-Request",
          "title": "Pull Request"
        },
        "Pull Request"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#开发流程",
          "title": "开发流程"
        },
        "开发流程"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=contributing.zh-CN.md.js.map