(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/dev/orient-theme.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-theme.zh-CN.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/dev/orient-theme.zh-CN.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "我们基于 ",
      [
        "code",
        "Ant Design"
      ],
      " 视觉风格在其上层搭建了 ",
      [
        "code",
        "Orient Design"
      ],
      "，由于 ",
      [
        "code",
        "Orient Design"
      ],
      " 经过了公司设计师的精心调配，因此它更适合于金融场景下的各种场景。如果对视觉风格有额外的要求，可以使用以下的方式进行定制化。"
    ],
    [
      "h2",
      "主题定制"
    ],
    [
      "p",
      "你可以在脚手架目录中找到 ",
      [
        "code",
        "config/config.ts"
      ],
      " 代码类似这样:"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token operator\">...</span>\ntheme<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'font-size-base'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'14px'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'badge-font-size'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'12px'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'btn-font-size-lg'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'@font-size-base'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'menu-dark-bg'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#00182E'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'menu-dark-submenu-bg'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#000B14'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'layout-sider-background'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#00182E'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'layout-body-background'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#f0f2f5'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token operator\">...</span>"
      },
      [
        "code",
        "...\ntheme: {\n  'font-size-base': '14px',\n  'badge-font-size': '12px',\n  'btn-font-size-lg': '@font-size-base',\n  'menu-dark-bg': '#00182E',\n  'menu-dark-submenu-bg': '#000B14',\n  'layout-sider-background': '#00182E',\n  'layout-body-background': '#f0f2f5',\n};\n..."
      ]
    ],
    [
      "p",
      "在 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"
        },
        "变量表"
      ],
      " 中找到需要修改的变量，然后 npm start，您可以在应用界面中看到效果。"
    ],
    [
      "p",
      "更多方式可以参考官方文档：",
      [
        "a",
        {
          "title": null,
          "href": "https://ant.design/docs/react/customize-theme-cn"
        },
        "定制主题"
      ]
    ],
    [
      "h2",
      "样式覆盖"
    ],
    [
      "p",
      "如果通用样式变量可能无法满足所有定制需求，你需要全局覆盖默认的组件样式。我们可以参照 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/dev/orient-css"
        },
        "样式方案"
      ],
      " 章节来覆盖样式。"
    ],
    [
      "h2",
      "全局覆盖组件"
    ],
    [
      "p",
      "比如在 ",
      [
        "code",
        "src/global.less"
      ],
      " 里修改所有标签的字体大小："
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token selector\">// src/global<span class=\"token class\">.less:</span>\n<span class=\"token pseudo-class\">:global</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token selector\"><span class=\"token class\">.ant-tag</span> </span><span class=\"token punctuation\">{</span>\n    <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// src/global.less:\n:global {\n  .ant-tag {\n    font-size: 12px;\n  }\n}"
      ]
    ],
    [
      "h2",
      "单独覆盖指定组件"
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token selector\">// sample<span class=\"token class\">.less:</span>\n<span class=\"token class\">.customTag</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">18</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// sample.less:\n.customTag {\n  font-size: 18px;\n}"
      ]
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token selector\">import styles from \"./sample<span class=\"token class\">.less</span>\";\n\n<span class=\"token class\">...</span>\n\nreturn &lt;Tag className=</span><span class=\"token punctuation\">{</span>styles<span class=\"token number\">.</span>customTag<span class=\"token punctuation\">}</span>>定制标签&lt;/Tag><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import styles from \"./sample.less\";\n\n...\n\nreturn <Tag className={styles.customTag}>定制标签</Tag>;"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "我们不推荐进行样式覆盖，一是默认主题和组件是经过了设计师精心调节，强行覆盖可能会影响整体效果；二是覆盖代码可能因为组件库版本升级而失效。"
      ]
    ],
    [
      "h2",
      "切换主题"
    ],
    [
      "p",
      "可通过 ",
      [
        "code",
        "config/defaultSetting.ts"
      ],
      " 来修改默认配置，具体说明如下："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  navTheme<span class=\"token punctuation\">:</span> <span class=\"token string\">\"dark\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 菜单的主题</span>\n  primaryColor<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#1890FF\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 主色调</span>\n  layout<span class=\"token punctuation\">:</span> <span class=\"token string\">\"sidemenu\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 菜单的布局，值为 sidemenu 菜单显示在左侧，值为 topmenu 菜单显示在顶部</span>\n  contentWidth<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Fluid\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 内容的布局 Fixed 为定宽到1200px ，Fluid 为流式布局。</span>\n  fixedHeader<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 固定页头</span>\n  autoHideHeader<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 下滑时自动隐藏页头</span>\n  fixSiderbar<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 固定菜单</span>\n  colorWeak<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 是否启用弱色调</span>\n  menu<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    locale<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token comment\" spellcheck=\"true\">// 菜单是否启动国际化</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"蚩尤\"</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 标题</span>\n  pwa<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// 是否启动PWA特性</span>\n  iconfontUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">\"\"</span> <span class=\"token comment\" spellcheck=\"true\">// icon图标地址</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "module.exports = {\n  navTheme: \"dark\", // 菜单的主题\n  primaryColor: \"#1890FF\", // 主色调\n  layout: \"sidemenu\", // 菜单的布局，值为 sidemenu 菜单显示在左侧，值为 topmenu 菜单显示在顶部\n  contentWidth: \"Fluid\", // 内容的布局 Fixed 为定宽到1200px ，Fluid 为流式布局。\n  fixedHeader: false, // 固定页头\n  autoHideHeader: false, // 下滑时自动隐藏页头\n  fixSiderbar: false, // 固定菜单\n  colorWeak: false, // 是否启用弱色调\n  menu: {\n    locale: true // 菜单是否启动国际化\n  },\n  title: \"蚩尤\", // 标题\n  pwa: false, // 是否启动PWA特性\n  iconfontUrl: \"\" // icon图标地址\n};"
      ]
    ],
    [
      "h2",
      "动态主题"
    ],
    [
      "p",
      "动态主题能力来自 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/chenshuai2144/umi-plugin-antd-theme"
        },
        "umi-plugin-antd-theme"
      ],
      "，主要思路仍然是将变量规则与项目中规则进行抽取，然后进行的 less 的编译。在 ",
      [
        "code",
        "config/themePluginConfig.ts"
      ],
      " 添加如下类似代码："
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">{</span>\n  theme<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token operator\">...</span><span class=\"token punctuation\">{</span>\n      fileName<span class=\"token punctuation\">:</span> <span class=\"token string\">\"theme1.css\"</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"theme1\"</span><span class=\"token punctuation\">,</span>\n      modifyVars<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">\"@primary-color\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"#13C2C2\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">\"@menu-dark-color\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"#324444\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">\"@menu-dark-bg\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"#5A5A5A\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      fileName<span class=\"token punctuation\">:</span> <span class=\"token string\">\"theme2.css\"</span><span class=\"token punctuation\">,</span>\n      key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"theme2\"</span><span class=\"token punctuation\">,</span>\n      modifyVars<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token string\">\"@primary-color\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"#4992BF\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">\"@menu-dark-color\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"#9B9B9B\"</span><span class=\"token punctuation\">,</span>\n        <span class=\"token string\">\"@menu-dark-bg\"</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"#3A3A3A\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "export default {\n  theme: [\n    ...{\n      fileName: \"theme1.css\",\n      key: \"theme1\",\n      modifyVars: {\n        \"@primary-color\": \"#13C2C2\",\n        \"@menu-dark-color\": \"#324444\",\n        \"@menu-dark-bg\": \"#5A5A5A\"\n      }\n    },\n    {\n      fileName: \"theme2.css\",\n      key: \"theme2\",\n      modifyVars: {\n        \"@primary-color\": \"#4992BF\",\n        \"@menu-dark-color\": \"#9B9B9B\",\n        \"@menu-dark-bg\": \"#3A3A3A\"\n      }\n    }\n  ]\n};"
      ]
    ],
    [
      "p",
      "所有的配置变量都可以在 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"
        },
        "default.less"
      ],
      " 找到。（配置的 theme 节点数量越多编译越慢，一个 css 文件编译大约需要 1s。）"
    ],
    [
      "h2",
      "自定义组件"
    ],
    [
      "p",
      "在 ",
      [
        "code",
        "global.less"
      ],
      " 文件中，添加如下代码："
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token selector\"><span class=\"token class\">.body-wrap-theme1</span> </span><span class=\"token punctuation\">{</span>\n  // theme<span class=\"token number\">1</span>下的全局变量在此定义\n  <span class=\"token property\">--font-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#000000</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">--bg-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#011313</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.body-wrap-theme2</span> </span><span class=\"token punctuation\">{</span>\n  // theme<span class=\"token number\">2</span>下的全局变量在此定义\n  <span class=\"token property\">--font-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#ffffff</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">--bg-color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#ffffff</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        ".body-wrap-theme1 {\n  // theme1下的全局变量在此定义\n  --font-color: #000000;\n  --bg-color: #011313;\n}\n\n.body-wrap-theme2 {\n  // theme2下的全局变量在此定义\n  --font-color: #ffffff;\n  --bg-color: #ffffff;\n}"
      ]
    ],
    [
      "p",
      "自定义组件的 ",
      [
        "code",
        "index.less"
      ],
      " 中用法如下："
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token selector\"><span class=\"token class\">.flatButton</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token function\">var</span><span class=\"token punctuation\">(</span>--font-color<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background</span><span class=\"token punctuation\">:</span> <span class=\"token function\">var</span><span class=\"token punctuation\">(</span>--bg-color<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        ".flatButton {\n  color: var(--font-color);\n  background: var(--bg-color);\n}"
      ]
    ]
  ],
  "meta": {
    "category": "开发",
    "order": 12,
    "title": "主题配置",
    "filename": "docs/dev/orient-theme.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#主题定制",
          "title": "主题定制"
        },
        "主题定制"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#样式覆盖",
          "title": "样式覆盖"
        },
        "样式覆盖"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#全局覆盖组件",
          "title": "全局覆盖组件"
        },
        "全局覆盖组件"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#单独覆盖指定组件",
          "title": "单独覆盖指定组件"
        },
        "单独覆盖指定组件"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#切换主题",
          "title": "切换主题"
        },
        "切换主题"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#动态主题",
          "title": "动态主题"
        },
        "动态主题"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#自定义组件",
          "title": "自定义组件"
        },
        "自定义组件"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-theme.zh-CN.md.js.map