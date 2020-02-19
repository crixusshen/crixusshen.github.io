(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-create.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-create.zh-CN.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-create.zh-CN.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h2",
      "命名由来"
    ],
    [
      "p",
      "蚩尤（CHIYOU）并没有重复造轮子，它使用 umi-ui 作为可视化辅助编程工具，支持项目&区块&模板的创建和定制。针对项目开发，可以选择原始的 CLI，也可选择功能更加完善和丰富的 IDE。"
    ],
    [
      "p",
      "后续我们也将通过 Hook 来提供数据可配的可视化辅助编程工具，为可视化研发模式提供更强大的赋能。"
    ],
    [
      "h2",
      "使用 IDE"
    ],
    [
      "p",
      "umi-ui 定位为企业级中后台领域 IDE，通过 umi-ui 可提供前端项目创建、开发、调试及发布的全链路一体化开发流程。"
    ],
    [
      "h2",
      "1. 安装"
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ yarn <span class=\"token keyword\">global</span> add umi # 或者 npm install <span class=\"token operator\">-</span>g umi\n\n# 保证上面安装执行成功后执行下面指令\n$ umi ui"
      },
      [
        "code",
        "$ yarn global add umi # 或者 npm install -g umi\n\n# 保证上面安装执行成功后执行下面指令\n$ umi ui"
      ]
    ],
    [
      "h2",
      "2. 创建项目"
    ],
    [
      "div",
      {
        "style": "text-align: center; margin: 20px 0px;"
      },
      [
        "img",
        {
          "width": "100%",
          "src": "https://s2.ax1x.com/2020/01/23/1E09Df.png"
        }
      ]
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "点击右上角 + 创建项目"
        ]
      ],
      [
        "li",
        [
          "p",
          "填写应用名"
        ]
      ],
      [
        "li",
        [
          "p",
          "选择模板、开发语言、包管理器"
        ]
      ],
      [
        "li",
        [
          "p",
          "完成"
        ]
      ]
    ],
    [
      "h2",
      "3. 启动调试"
    ],
    [
      "div",
      {
        "style": "text-align: center; margin: 20px 0px;"
      },
      [
        "img",
        {
          "width": "100%",
          "src": "https://s2.ax1x.com/2020/01/23/1EBaSs.png"
        }
      ]
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "进入",
          [
            "code",
            "我的项目"
          ],
          "中点击任务卡片中的",
          [
            "code",
            "启动"
          ],
          "按钮"
        ]
      ],
      [
        "li",
        [
          "p",
          "启动成功后会给出 Message 提示并自动打开浏览器"
        ]
      ],
      [
        "li",
        [
          "p",
          "也可点击下方 ToolBar 中的",
          [
            "code",
            "在编辑器打开"
          ],
          "，通过",
          [
            "code",
            "NpmScript start"
          ],
          "启动项目"
        ]
      ]
    ],
    [
      "h2",
      "4. 初始化模板"
    ],
    [
      "blockquote",
      [
        "p",
        "即页面"
      ]
    ],
    [
      "div",
      {
        "style": "text-align: center; margin: 20px 0px;"
      },
      [
        "img",
        {
          "width": "100%",
          "src": "https://s2.ax1x.com/2020/01/23/1ED8j1.png"
        }
      ]
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "进入右下角",
          [
            "code",
            "我的气泡"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "选择",
          [
            "code",
            "资产"
          ],
          "栏位，同时选择",
          [
            "code",
            "模板"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "从两大社区或私有社区中选择",
          [
            "code",
            "模板"
          ],
          "，点击",
          [
            "code",
            "添加到项目"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "填写",
          [
            "code",
            "路由路径"
          ],
          "和",
          [
            "code",
            "文件路径"
          ],
          "，选择是否需要",
          [
            "code",
            "移除国际化"
          ],
          "以及",
          [
            "code",
            "包管理器"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "之后将自动安装依赖，并创建脚本文件至指定目录和配置路由规则"
        ]
      ]
    ],
    [
      "h2",
      "5. 添加区块"
    ],
    [
      "blockquote",
      [
        "p",
        "即页面中的一部分"
      ]
    ],
    [
      "div",
      {
        "style": "text-align: center; margin: 20px 0px;"
      },
      [
        "img",
        {
          "width": "100%",
          "src": "https://s2.ax1x.com/2020/01/23/1Er9Dx.png"
        }
      ]
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "进入右下角",
          [
            "code",
            "我的气泡"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "选择",
          [
            "code",
            "资产"
          ],
          "栏位，同时选择",
          [
            "code",
            "区块"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "从两大社区或私有社区中选择",
          [
            "code",
            "区块"
          ],
          "，点击",
          [
            "code",
            "添加到项目"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "在页面的",
          [
            "code",
            "+ Add to here"
          ],
          "位置点击插入区块"
        ]
      ],
      [
        "li",
        [
          "p",
          "填写",
          [
            "code",
            "变量名"
          ],
          "、",
          [
            "code",
            "包管理器"
          ],
          "和",
          [
            "code",
            "包管理器"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "之后将自动安装依赖，并创建区块文件至指定目录下"
        ]
      ]
    ],
    [
      "h2",
      "6. 项目构建"
    ],
    [
      "blockquote",
      [
        "p",
        "即页面中的一部分"
      ]
    ],
    [
      "div",
      {
        "style": "text-align: center; margin: 20px 0px;"
      },
      [
        "img",
        {
          "width": "100%",
          "src": "https://s2.ax1x.com/2020/01/23/1ErYxs.png"
        }
      ]
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "进入",
          [
            "code",
            "我的项目"
          ],
          "中点击任务卡片中的",
          [
            "code",
            "构建"
          ],
          "按钮"
        ]
      ],
      [
        "li",
        [
          "p",
          "构建成功后会给出 Message 提示并存储在 dist 目录下"
        ]
      ]
    ],
    [
      "h2",
      "使用 CLI"
    ],
    [
      "h2",
      "1. 安装"
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ yarn <span class=\"token keyword\">global</span> add umi # 或者 npm install <span class=\"token operator\">-</span>g umi\n\n# 保证上面安装执行成功后执行下面指令\n$ umi ui"
      },
      [
        "code",
        "$ yarn global add umi # 或者 npm install -g umi\n\n# 保证上面安装执行成功后执行下面指令\n$ umi ui"
      ]
    ],
    [
      "h2",
      "2. 初始化项目"
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ mkdir <span class=\"token operator\">&lt;</span>your<span class=\"token operator\">-</span>project<span class=\"token operator\">-</span>name<span class=\"token operator\">></span>\n$ cd <span class=\"token operator\">&lt;</span>your<span class=\"token operator\">-</span>project<span class=\"token operator\">-</span>name<span class=\"token operator\">></span>\n$ yarn create umi  # <span class=\"token operator\">or</span> npm create umi\n\n# Choose ant<span class=\"token operator\">-</span>design<span class=\"token operator\">-</span>pro<span class=\"token punctuation\">:</span>\n <span class=\"token keyword\">Select</span> the boilerplate type <span class=\"token punctuation\">(</span>Use arrow keys<span class=\"token punctuation\">)</span>\n❯ ant<span class=\"token operator\">-</span>design<span class=\"token operator\">-</span>pro  <span class=\"token operator\">-</span> Create project <span class=\"token keyword\">with</span> an layout<span class=\"token operator\">-</span>only ant<span class=\"token operator\">-</span>design<span class=\"token operator\">-</span>pro boilerplate<span class=\"token punctuation\">,</span> use together <span class=\"token keyword\">with</span> umi block<span class=\"token punctuation\">.</span>\n  app             <span class=\"token operator\">-</span> Create project <span class=\"token keyword\">with</span> a simple boilerplate<span class=\"token punctuation\">,</span> support typescript<span class=\"token punctuation\">.</span>\n  block           <span class=\"token operator\">-</span> Create a umi block<span class=\"token punctuation\">.</span>\n  library         <span class=\"token operator\">-</span> Create a library <span class=\"token keyword\">with</span> umi<span class=\"token punctuation\">.</span>\n  plugin          <span class=\"token operator\">-</span> Create a umi plugin<span class=\"token punctuation\">.</span>\n\n$ git init\n$ npm install\n$ npm start         # visit http<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span>localhost<span class=\"token punctuation\">:</span><span class=\"token number\">8000</span>"
      },
      [
        "code",
        "$ mkdir <your-project-name>\n$ cd <your-project-name>\n$ yarn create umi  # or npm create umi\n\n# Choose ant-design-pro:\n Select the boilerplate type (Use arrow keys)\n❯ ant-design-pro  - Create project with an layout-only ant-design-pro boilerplate, use together with umi block.\n  app             - Create project with a simple boilerplate, support typescript.\n  block           - Create a umi block.\n  library         - Create a library with umi.\n  plugin          - Create a umi plugin.\n\n$ git init\n$ npm install\n$ npm start         # visit http://localhost:8000"
      ]
    ],
    [
      "p",
      "执行命令后根据需求选择对应模板即可完成项目的创建。"
    ],
    [
      "h2",
      "3. 项目调试"
    ],
    [
      "pre",
      {
        "lang": "sh",
        "highlighted": "$ npm run start"
      },
      [
        "code",
        "$ npm run start"
      ]
    ],
    [
      "p",
      "接着通过代码编辑器编写代码就可以在浏览器中看到效果。"
    ],
    [
      "h2",
      "4. 项目构建"
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
      "执行完成后会在 ",
      [
        "code",
        "dist"
      ],
      " 目录下生成发布文件。"
    ],
    [
      "h2",
      "将 CLI 项目导入 IDE"
    ],
    [
      "div",
      {
        "style": "text-align: center; margin: 20px 0px;"
      },
      [
        "img",
        {
          "width": "100%",
          "src": "https://s2.ax1x.com/2020/01/23/1EHKUg.png"
        }
      ]
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "打开 umi ui，点击右上角 导入项目"
        ]
      ],
      [
        "li",
        [
          "p",
          "选择目录并导入"
        ]
      ],
      [
        "li",
        [
          "p",
          "其它操作请参考 使用 IDE 步骤 3 ~ 6"
        ]
      ]
    ]
  ],
  "meta": {
    "order": 1,
    "title": "使用 umi-ui 创建&开发项目",
    "filename": "docs/dev/orient-create.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#命名由来",
          "title": "命名由来"
        },
        "命名由来"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#使用-IDE",
          "title": "使用 IDE"
        },
        "使用 IDE"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#1.-安装",
          "title": "1. 安装"
        },
        "1. 安装"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#2.-创建项目",
          "title": "2. 创建项目"
        },
        "2. 创建项目"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#3.-启动调试",
          "title": "3. 启动调试"
        },
        "3. 启动调试"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#4.-初始化模板",
          "title": "4. 初始化模板"
        },
        "4. 初始化模板"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#5.-添加区块",
          "title": "5. 添加区块"
        },
        "5. 添加区块"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#6.-项目构建",
          "title": "6. 项目构建"
        },
        "6. 项目构建"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#使用-CLI",
          "title": "使用 CLI"
        },
        "使用 CLI"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#1.-安装",
          "title": "1. 安装"
        },
        "1. 安装"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#2.-初始化项目",
          "title": "2. 初始化项目"
        },
        "2. 初始化项目"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#3.-项目调试",
          "title": "3. 项目调试"
        },
        "3. 项目调试"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#4.-项目构建",
          "title": "4. 项目构建"
        },
        "4. 项目构建"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#将-CLI-项目导入-IDE",
          "title": "将 CLI 项目导入 IDE"
        },
        "将 CLI 项目导入 IDE"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-create.zh-CN.md.js.map