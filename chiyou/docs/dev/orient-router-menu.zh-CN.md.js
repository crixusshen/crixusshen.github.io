(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-router-menu.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-router-menu.zh-CN.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-router-menu.zh-CN.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "blockquote",
      [
        "p",
        "这里我们复用了 antd-pro 中的 ",
        [
          "code",
          "路由和菜单"
        ],
        "，并没有重复造轮子，因为它已经足够的优秀，但是基于它我们又做了一些封装和扩展。"
      ]
    ],
    [
      "p",
      "在浏览器支持 ",
      [
        "a",
        {
          "title": null,
          "href": "https://developer.mozilla.org/zh-CN/docs/Web/API/History"
        },
        "History API"
      ],
      " 之后，很多网站为了提升用户体验都采用了基于 History 的单页面（SPA）方式，这种方式在页面切换时几乎不需要等待，页面也不会出现白屏，在用户体验上有非常大的提升。采用 SPA 的方式，所有页面路由都需要在前端代码中进行定义，在 React 领域通常使用 ",
      [
        "a",
        {
          "title": null,
          "href": "https://reacttraining.com/react-router/"
        },
        "react-router"
      ],
      " 方案，而蚩尤内部也是基于该方案来实现的。"
    ],
    [
      "h2",
      "基本结构"
    ],
    [
      "p",
      "在这一部分，脚手架通过结合一些配置文件、基本算法及工具函数，搭建好了路由和菜单的基本框架，主要涉及以下几个模块/功能："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "code",
            "路由管理"
          ],
          " - 通过约定的语法根据在 ",
          [
            "code",
            "config/config.ts"
          ],
          " 中配置路由。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "菜单管理"
          ],
          " - 独立于路由管理，根据额外的配置来生成菜单。静态配置可通过 ",
          [
            "code",
            "src/layouts/MenuDisplayItem.json"
          ],
          " 进行配合，同样也支持动态配置，即从服务端读取菜单权限数据进行菜单展示。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "code",
            "面包屑"
          ],
          " - 组件 PageHeaderWrapper 中内置的面包屑,也可通过 RouteContext 提供的信息自定义生成。"
        ]
      ]
    ],
    [
      "p",
      "下面简单介绍下各个模块的基本思路，如果你对实现过程不感兴趣，只想了解应该怎么实现相关需求，可以直接查看",
      [
        "a",
        {
          "title": null,
          "href": "#需求实例"
        },
        "需求实例"
      ],
      "。"
    ],
    [
      "h2",
      "路由"
    ],
    [
      "p",
      "目前脚手架中所有的路由都通过 ",
      [
        "code",
        "config/config.ts"
      ],
      " 来统一管理，如 name，icon，hideChildrenInMenu，authority，都可以用来辅助生成菜单。其中："
    ],
    [
      "pre",
      {
        "lang": "json",
        "highlighted": "<span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"dashboard\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"icon\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"dashboard\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"hideInMenu\"</span><span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"hideChildrenInMenu\"</span><span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"hideInBreadcrumb\"</span><span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"authority\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"admin\"</span><span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "{\n  \"name\": \"dashboard\",\n  \"icon\": \"dashboard\",\n  \"hideInMenu\": true,\n  \"hideChildrenInMenu\": true,\n  \"hideInBreadcrumb\": true,\n  \"authority\": [\"admin\"]\n}"
      ]
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "name 和 icon 分别代表生成菜单项的文本和图标。"
        ]
      ],
      [
        "li",
        [
          "p",
          "hideChildrenInMenu 用于隐藏不需要在菜单中展示的子路由。例如通常一些表示增删改的路由并不需要展示在菜单中，但它们确实是需要存在的，默认 ",
          [
            "code",
            "false"
          ],
          "。"
        ]
      ],
      [
        "li",
        [
          "p",
          "hideInMenu 可以在菜单中不展示这个路由，包括子路由，默认 ",
          [
            "code",
            "false"
          ],
          "。"
        ]
      ],
      [
        "li",
        [
          "p",
          "hideInBreadcrumb 当前路由在面包屑中不展现，默认 ",
          [
            "code",
            "false"
          ],
          "。"
        ]
      ],
      [
        "li",
        [
          "p",
          "authority 用来配置这个路由的权限，如果配置了将会验证当前用户的权限，并决定是否展示。详见：",
          [
            "a",
            {
              "title": null,
              "href": "/docs/dev/orient-authority"
            },
            "权限管理"
          ],
          "。"
        ]
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "你可能注意到配置中的 name 和菜单实际展示的不同，这是因为我们使用了全球化组件的原因，具体参见 国际化"
      ]
    ],
    [
      "h2",
      "菜单"
    ],
    [
      "p",
      "菜单根据 ",
      [
        "code",
        "src/layouts/MenuDisplayItem.json"
      ],
      " 生成，但是通常我们并不会在该文件中定义，而是从服务器获取菜单数据。"
    ],
    [
      "h2",
      "从服务器请求菜单"
    ],
    [
      "p",
      "你可以在 ",
      [
        "code",
        "src/layouts/BasicLayout.tsx"
      ],
      " 中修改 menuDataRender，并在代码中发起 http 请求，只需服务器返回下面格式的 json 即可。"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">const</span> <span class=\"token punctuation\">[</span>menuData<span class=\"token punctuation\">,</span> setMenuData<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token function\">useState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token function\">useEffect</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// 这里是一个演示用法</span>\n  <span class=\"token comment\" spellcheck=\"true\">// 真实项目中建议使用 XMLHttpRequest 或 Fetch</span>\n  <span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/layouts/MenuDisplayItem.json'</span><span class=\"token punctuation\">)</span>\n    <span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span>response <span class=\"token operator\">=</span><span class=\"token operator\">></span> response<span class=\"token punctuation\">.</span><span class=\"token function\">json</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n    <span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span>data <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">setMenuData</span><span class=\"token punctuation\">(</span>data <span class=\"token operator\">||</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token operator\">...</span>\n\n<span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>ProLayout\n    <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n    menuDataRender<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> menuData<span class=\"token punctuation\">}</span>\n    <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "const [menuData, setMenuData] = useState([]);\n\nuseEffect(() => {\n  // 这里是一个演示用法\n  // 真实项目中建议使用 XMLHttpRequest 或 Fetch\n  fetch('/layouts/MenuDisplayItem.json')\n    .then(response => response.json())\n    .then(data => {\n      setMenuData(data || []);\n    });\n}, []);\n\n...\n\nreturn (\n  <ProLayout\n    // ...\n    menuDataRender={() => menuData}\n    // ...\n  />\n);"
      ]
    ],
    [
      "p",
      "menuData 数据格式如下，ts 定义在此：MenuDataItem"
    ],
    [
      "pre",
      {
        "lang": "json",
        "highlighted": "<span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"path\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"/dashboard\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"dashboard\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"icon\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"dashboard\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"children\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"path\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"/dashboard/analysis\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"analysis\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"path\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"/dashboard/monitor\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"monitor\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        <span class=\"token property\">\"path\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"/dashboard/workplace\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"workplace\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n  // ....\n<span class=\"token punctuation\">]</span>"
      },
      [
        "code",
        "[\n  {\n    \"path\": \"/dashboard\",\n    \"name\": \"dashboard\",\n    \"icon\": \"dashboard\",\n    \"children\": [\n      {\n        \"path\": \"/dashboard/analysis\",\n        \"name\": \"analysis\"\n      },\n      {\n        \"path\": \"/dashboard/monitor\",\n        \"name\": \"monitor\"\n      },\n      {\n        \"path\": \"/dashboard/workplace\",\n        \"name\": \"workplace\"\n      }\n    ]\n  }\n  // ....\n]"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "注意 path 必须要在 config.ts 中定义。（约定式路由不需要，只需页面真实有效即可）注意 如果没有选用 typescript，config.js 中菜单的嵌套写法，需要把 \"children\" 换成 \"routes\"。"
      ]
    ],
    [
      "h2",
      "面包屑"
    ],
    [
      "p",
      "面包屑由 PageHeaderWrapper 实现，Layout 将 根据 MenuData 生成的 breadcrumb，并通过 PageHeaderWrapper 将其展现。"
    ],
    [
      "h2",
      "需求实例"
    ],
    [
      "p",
      "上面对这部分的实现概要进行了介绍，接下来通过实际的案例来说明具体该怎么做。"
    ],
    [
      "h2",
      "菜单跳转到外部地址"
    ],
    [
      "p",
      "你可以直接将完整 url 填入 path 中，框架会自动处理。"
    ],
    [
      "pre",
      {
        "lang": "json",
        "highlighted": "<span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"path\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"https://baidu.com\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"target\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"_blank\"</span><span class=\"token punctuation\">,</span> // 点击新窗口打开\n  <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"文档\"</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "{\n  \"path\": \"https://baidu.com\",\n  \"target\": \"_blank\", // 点击新窗口打开\n  \"name\": \"文档\"\n}"
      ]
    ],
    [
      "h2",
      "新增页面"
    ],
    [
      "p",
      "脚手架默认提供了一种布局模板，详见：",
      [
        "a",
        {
          "title": null,
          "href": "/docs/dev/orient-layout"
        },
        "[布局]"
      ],
      "：",
      [
        "code",
        "基础布局 - BasicLayout"
      ],
      "，具体展示效果如图所示："
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
          "src": "https://s2.ax1x.com/2020/01/27/1nDf6e.png"
        }
      ]
    ],
    [
      "p",
      "如果你的页面可以利用这种布局，那么只需要在路由配置中增加一条即可："
    ],
    [
      "pre",
      {
        "lang": "json",
        "highlighted": "// config/config.ts<span class=\"token operator\">:</span>\n<span class=\"token punctuation\">{</span>\n  <span class=\"token property\">\"path\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"/\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"component\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"../layouts/BasicLayout\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token property\">\"routes\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n    // user manage\n    <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"用户管理\"</span><span class=\"token punctuation\">,</span>\n      <span class=\"token property\">\"icon\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"smile\"</span><span class=\"token punctuation\">,</span>\n      <span class=\"token property\">\"path\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"/user\"</span><span class=\"token punctuation\">,</span>\n      <span class=\"token property\">\"component\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"./User\"</span>\n    <span class=\"token punctuation\">}</span>\n    // ... add your routes\n  <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// config/config.ts:\n{\n  \"path\": \"/\",\n  \"component\": \"../layouts/BasicLayout\",\n  \"routes\": [\n    // user manage\n    {\n      \"name\": \"用户管理\",\n      \"icon\": \"smile\",\n      \"path\": \"/user\",\n      \"component\": \"./User\"\n    }\n    // ... add your routes\n  ]\n}"
      ]
    ],
    [
      "p",
      "同时在 ",
      [
        "code",
        "src/layouts/MenuDisplayItem.json"
      ],
      " 中增加一条用于菜单显示，服务端获取方式同理："
    ],
    [
      "pre",
      {
        "lang": "json",
        "highlighted": "<span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"系统管理\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"icon\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"smile\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token property\">\"routes\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      // user manage\n      <span class=\"token punctuation\">{</span> <span class=\"token property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"用户管理\"</span><span class=\"token punctuation\">,</span> <span class=\"token property\">\"path\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"/user\"</span> <span class=\"token punctuation\">}</span>\n      // ... add your menus\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span>"
      },
      [
        "code",
        "[\n  {\n    \"name\": \"系统管理\",\n    \"icon\": \"smile\",\n    \"routes\": [\n      // user manage\n      { \"name\": \"用户管理\", \"path\": \"/user\" }\n      // ... add your menus\n    ]\n  }\n]"
      ]
    ],
    [
      "p",
      "加好后，会默认生成相关的路由及导航。"
    ],
    [
      "h2",
      "新增布局"
    ],
    [
      "p",
      "在脚手架中我们通过嵌套路由来实现布局模板。config.ts 是一个数组，其中第一级数据就是我们的布局，如果你需要新增布局可以再直接增加一个新的一级数据。"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token comment\" spellcheck=\"true\">// app</span>\n  <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/BasicLayout'</span><span class=\"token punctuation\">,</span>\n    routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token comment\" spellcheck=\"true\">// new</span>\n  <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/new'</span><span class=\"token punctuation\">,</span>\n    component<span class=\"token punctuation\">:</span> <span class=\"token string\">'../layouts/new_page'</span><span class=\"token punctuation\">,</span>\n    routes<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span>"
      },
      [
        "code",
        "module.exports = [\n  // app\n  {\n    path: '/',\n    component: '../layouts/BasicLayout',\n    routes: [...]\n  },\n  // new\n  {\n    path: '/new',\n    component: '../layouts/new_page',\n    routes: [...]\n  },\n]"
      ]
    ],
    [
      "h2",
      "在菜单中使用自定义图标"
    ],
    [
      "p",
      "只需要直接在 icon 属性上配置即可，如果是个 url，Pro 会自动处理为一个 img 标签。"
    ],
    [
      "blockquote",
      [
        "p",
        "如果你想使用 iconfont 的图标，你可以使用 ",
        [
          "a",
          {
            "title": null,
            "href": "/components/icon"
          },
          "自定义图标"
        ]
      ]
    ],
    [
      "h2",
      "常见问题"
    ],
    [
      "h2",
      "为什么浏览器里的地址都带着"
    ],
    [
      "p",
      "前端路由通常有两种实现方式：HashHistory 和 BrowserHistory，路由都带着 ",
      [
        "code",
        "#"
      ],
      " 说明使用的是 HashHistory。这两种方式优缺点如下："
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "特点\\方案"
          ],
          [
            "th",
            "HashRouter"
          ],
          [
            "th",
            "BrowserRouter"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "美观度"
          ],
          [
            "td",
            "不好，有 # 号"
          ],
          [
            "td",
            "好"
          ]
        ],
        [
          "tr",
          [
            "td",
            "易用性"
          ],
          [
            "td",
            "简单"
          ],
          [
            "td",
            "中等，需要 server 配合"
          ]
        ],
        [
          "tr",
          [
            "td",
            "依赖 server"
          ],
          [
            "td",
            "不依赖"
          ],
          [
            "td",
            "依赖"
          ]
        ],
        [
          "tr",
          [
            "td",
            "跟锚点功能冲突"
          ],
          [
            "td",
            "冲突"
          ],
          [
            "td",
            "不冲突"
          ]
        ],
        [
          "tr",
          [
            "td",
            "兼容性"
          ],
          [
            "td",
            "IE8"
          ],
          [
            "td",
            "IE10"
          ]
        ]
      ]
    ],
    [
      "p",
      "开发者可以根据自己的实际情况选择对应方案。"
    ],
    [
      "h2",
      "如何使用 HashHistory？"
    ],
    [
      "p",
      "默认框架使用的是 BrowserHistory，所以你可以在 ",
      [
        "code",
        "config/config.ts"
      ],
      " 中这样来开启 HashHistory："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n  history<span class=\"token punctuation\">:</span> <span class=\"token string\">\"hash\"</span>\n  <span class=\"token comment\" spellcheck=\"true\">// ...</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "export default {\n  // ...\n  history: \"hash\"\n  // ...\n};"
      ]
    ]
  ],
  "meta": {
    "category": "开发",
    "order": 4,
    "title": "路由和菜单",
    "filename": "docs/dev/orient-router-menu.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#基本结构",
          "title": "基本结构"
        },
        "基本结构"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#路由",
          "title": "路由"
        },
        "路由"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#菜单",
          "title": "菜单"
        },
        "菜单"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#从服务器请求菜单",
          "title": "从服务器请求菜单"
        },
        "从服务器请求菜单"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#面包屑",
          "title": "面包屑"
        },
        "面包屑"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#需求实例",
          "title": "需求实例"
        },
        "需求实例"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#菜单跳转到外部地址",
          "title": "菜单跳转到外部地址"
        },
        "菜单跳转到外部地址"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#新增页面",
          "title": "新增页面"
        },
        "新增页面"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#新增布局",
          "title": "新增布局"
        },
        "新增布局"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#在菜单中使用自定义图标",
          "title": "在菜单中使用自定义图标"
        },
        "在菜单中使用自定义图标"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#常见问题",
          "title": "常见问题"
        },
        "常见问题"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#为什么浏览器里的地址都带着",
          "title": "为什么浏览器里的地址都带着"
        },
        "为什么浏览器里的地址都带着"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#如何使用-HashHistory？",
          "title": "如何使用 HashHistory？"
        },
        "如何使用 HashHistory？"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-router-menu.zh-CN.md.js.map