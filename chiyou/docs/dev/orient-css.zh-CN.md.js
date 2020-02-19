(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-css.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-css.zh-CN.md":
/*!******************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-css.zh-CN.md ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "这里介绍了在项目中使用样式的一些最佳实践。"
    ],
    [
      "h2",
      "less"
    ],
    [
      "p",
      "框架默认使用 ",
      [
        "a",
        {
          "title": null,
          "href": "http://lesscss.org/"
        },
        "less"
      ],
      " 作为样式语言，建议在使用前或者遇到疑问时学习一下 less 的相关特性。"
    ],
    [
      "h2",
      "CSS Modules"
    ],
    [
      "p",
      "框架内部使用 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/css-modules/css-modules"
        },
        "CSS Modules"
      ],
      " 来解决样式冲突等问题，书写方式如下："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// example.ts:</span>\n<span class=\"token keyword\">import</span> styles <span class=\"token keyword\">from</span> <span class=\"token string\">\"./example.less\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> title <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>div className<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>styles<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token operator\">></span><span class=\"token punctuation\">{</span>title<span class=\"token punctuation\">}</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// example.ts:\nimport styles from \"./example.less\";\nexport default ({ title }) => <div className={styles.title}>{title}</div>;"
      ]
    ],
    [
      "pre",
      {
        "lang": "less",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// example.less:</span>\n<span class=\"token selector\">.title</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token variable\">@heading-color</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-weight</span><span class=\"token punctuation\">:</span> <span class=\"token number\">600</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// example.less:\n.title {\n  color: @heading-color;\n  font-weight: 600;\n  margin-bottom: 16px;\n}"
      ]
    ],
    [
      "p",
      "less 部分的样式书写没有任何变化，而在 js 文件部分设置 className 时是发生了变化的，具体改变为用一个对象属性来取代了原来的字符串，属性名与 less 文件中对应的类名相同，对象从 less 文件中引入。"
    ],
    [
      "p",
      "在上面的样式文件中，.title 只会在本文件生效，你可以在其他任意文件中使用同名选择器，也不会对这里造成影响。不过有的时候，我们就是想要一个全局生效的样式呢？可以使用 :global。"
    ],
    [
      "pre",
      {
        "lang": "less",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// example.less:</span>\n<span class=\"token selector\">.title</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token variable\">@heading-color</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-weight</span><span class=\"token punctuation\">:</span> <span class=\"token number\">600</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">/* 定义全局样式 */</span>\n<span class=\"token selector\">:global(.text)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">16</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">/* 定义多个全局样式 */</span>\n<span class=\"token selector\">:global</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token selector\">.footer</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#ccc</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token selector\">.sider</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#ebebeb</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// example.less:\n.title {\n  color: @heading-color;\n  font-weight: 600;\n  margin-bottom: 16px;\n}\n\n/* 定义全局样式 */\n:global(.text) {\n  font-size: 16px;\n}\n\n/* 定义多个全局样式 */\n:global {\n  .footer {\n    color: #ccc;\n  }\n  .sider {\n    background: #ebebeb;\n  }\n}"
      ]
    ],
    [
      "p",
      "CSS Modules 的基本原理很简单，就是对每个类名（非 :global 声明的）按照一定规则进行转换，保证它的唯一性。如果在浏览器里查看这个示例的 dom 结构，你会发现实际渲染出来是这样的："
    ],
    [
      "pre",
      {
        "lang": "html",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>title___3TqAx<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>title<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<div class=\"title___3TqAx\">title</div>"
      ]
    ],
    [
      "p",
      "类名被自动添加了一个 hash 值，这保证了它的唯一性。"
    ],
    [
      "p",
      "除了上面的基础知识，还有一些关键点需要注意："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "CSS Modules 只会对 ",
          [
            "code",
            "className"
          ],
          " 以及 ",
          [
            "code",
            "id"
          ],
          " 进行转换，其他的比如属性选择器，标签选择器都不进行处理，推荐尽量使用 ",
          [
            "code",
            "className"
          ],
          "。"
        ]
      ],
      [
        "li",
        [
          "p",
          "由于不用担心类名重复，你的 className 可以在基本语意化的前提下尽量简单一点。"
        ]
      ]
    ],
    [
      "h2",
      "样式文件类别"
    ],
    [
      "p",
      "在一个项目中，样式文件根据功能不同，可以划分为不同的类别。"
    ],
    [
      "h2",
      "全局样式"
    ],
    [
      "p",
      "全局样式文件，在这里你可以进行一些通用设置，比如脚手架中自带的："
    ],
    [
      "pre",
      {
        "lang": "less",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// src/global.less:</span>\n<span class=\"token selector\">html,\nbody,\n:global(#root)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\">body</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-rendering</span><span class=\"token punctuation\">:</span> optimizeLegibility<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">-webkit-font-smoothing</span><span class=\"token punctuation\">:</span> antialiased<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">-moz-osx-font-smoothing</span><span class=\"token punctuation\">:</span> grayscale<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// temporary font size patch</span>\n<span class=\"token selector\">:global(.ant-tag)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// src/global.less:\nhtml,\nbody,\n:global(#root) {\n  height: 100%;\n}\n\nbody {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n// temporary font size patch\n:global(.ant-tag) {\n  font-size: 12px;\n}"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "因为我们是基于 antd 做的二次封装，而 antd 中会自带一些全局设置，如字号，颜色，行高等，所以在这里，你只需要关注自己的个性化需求即可，不用进行大量的 reset。"
      ]
    ],
    [
      "h2",
      "公共样式"
    ],
    [
      "p",
      "这里可以放置一些工具函数供调用，比如清除浮动 .clearfix。具体路径：",
      [
        "code",
        "src/utils/utils.less"
      ],
      " 内。"
    ],
    [
      "h2",
      "模块样式"
    ],
    [
      "p",
      "针对某个模块/页面生效的样式文件。"
    ],
    [
      "h2",
      "通用模块级"
    ],
    [
      "p",
      "例如 ",
      [
        "code",
        "src/layouts/BasicLayout.less"
      ],
      "，里面包含一些基本布局的样式，被 ",
      [
        "code",
        "src/layouts/BasicLayout.ts"
      ],
      " 引用，项目中使用这种布局的页面就不需要再关心整体布局的设置。如果你的项目中需要使用其他布局，也建议将布局相关的 js 和 less 放在这里 ",
      [
        "code",
        "src/layouts"
      ],
      "。"
    ],
    [
      "h2",
      "页面级"
    ],
    [
      "p",
      "具体页面相关的样式，例如 ",
      [
        "code",
        "src/routes/Dashborad/Monitor.less"
      ],
      "，里面的内容仅和本页面的内容相关。一般情况下，如果不是页面内容特别复杂，有了前面全局样式、通用模块样式的配合，这里要写的应该不多。"
    ],
    [
      "h2",
      "组件级"
    ],
    [
      "p",
      "这个也很简单，就是组件相关的样式了，有一些在页面中重复使用的片段或相对独立的功能，你可以提炼成组件，相关的样式也应该提炼出来放在组件中，而不是混淆在页面里。"
    ],
    [
      "h2",
      "覆盖组件样式"
    ],
    [
      "p",
      "由于业务的个性化需求，我们经常会遇到需要覆盖组件样式的情况，这里举个简单的例子。"
    ],
    [
      "p",
      "Select 组件在多选状态下，默认会展示所有选中项，这里我们给它加一个限制高度，超过此高度就出滚动条。"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// TestPage.ts:</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Select <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> styles <span class=\"token keyword\">from</span> <span class=\"token string\">\"./TestPage.less\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> Option <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">.</span>Option<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">36</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  children<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>Option key<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> i<span class=\"token punctuation\">}</span><span class=\"token operator\">></span><span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> i<span class=\"token punctuation\">}</span><span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Option<span class=\"token operator\">></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Select\n    mode<span class=\"token operator\">=</span><span class=\"token string\">\"multiple\"</span>\n    style<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n    placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Please select\"</span>\n    className<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>styles<span class=\"token punctuation\">.</span>customSelect<span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">></span>\n    <span class=\"token punctuation\">{</span>children<span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Select<span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "// TestPage.ts:\nimport { Select } from \"chiyou\";\nimport styles from \"./TestPage.less\";\nconst Option = Select.Option;\n\nconst children = [];\nfor (let i = 10; i < 36; i++) {\n  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);\n}\n\nReactDOM.render(\n  <Select\n    mode=\"multiple\"\n    style={{ width: 300 }}\n    placeholder=\"Please select\"\n    className={styles.customSelect}\n  >\n    {children}\n  </Select>,\n  mountNode\n);"
      ]
    ],
    [
      "pre",
      {
        "lang": "less",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// TestPage.less:</span>\n<span class=\"token selector\">.customSelect</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token selector\">:global</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token selector\">.ant-select-selection</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token property\">max-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">51</span>px<span class=\"token punctuation\">;</span>\n      <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> auto<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// TestPage.less:\n.customSelect {\n  :global {\n    .ant-select-selection {\n      max-height: 51px;\n      overflow: auto;\n    }\n  }\n}"
      ]
    ],
    [
      "p",
      "方法很简单，有两点需要注意："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "引入的组件类名没有被 CSS Modules 转化，所以被覆盖的类名 ",
          [
            "code",
            ".ant-select-selection"
          ],
          " 必须放到 ",
          [
            "code",
            ":global"
          ],
          " 中。"
        ]
      ],
      [
        "li",
        [
          "p",
          "因为上一条的关系，覆盖是全局性的。为了防止对其他 Select 组件造成影响，所以需要包裹额外的 ",
          [
            "code",
            "className"
          ],
          " 限制样式的生效范围。"
        ]
      ]
    ]
  ],
  "meta": {
    "category": "开发",
    "order": 8,
    "title": "样式方案",
    "filename": "docs/dev/orient-css.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#less",
          "title": "less"
        },
        "less"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#CSS-Modules",
          "title": "CSS Modules"
        },
        "CSS Modules"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#样式文件类别",
          "title": "样式文件类别"
        },
        "样式文件类别"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#全局样式",
          "title": "全局样式"
        },
        "全局样式"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#公共样式",
          "title": "公共样式"
        },
        "公共样式"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#模块样式",
          "title": "模块样式"
        },
        "模块样式"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#通用模块级",
          "title": "通用模块级"
        },
        "通用模块级"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#页面级",
          "title": "页面级"
        },
        "页面级"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#组件级",
          "title": "组件级"
        },
        "组件级"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#覆盖组件样式",
          "title": "覆盖组件样式"
        },
        "覆盖组件样式"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-css.zh-CN.md.js.map