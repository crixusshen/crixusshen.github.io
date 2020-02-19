(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/framework/orient-isomorphism-quick-start.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-isomorphism-quick-start.zh-CN.md":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/framework/orient-isomorphism-quick-start.zh-CN.md ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "h2",
      "普通应用创建"
    ],
    [
      "p",
      "请先参考 ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/dev/orient-create"
        },
        "使用 umi-ui 创建&开发项目"
      ],
      " 进行普通应用创建。提前准备好两份应用副本，其中一份作为框架应用(如 master-app)，另一份作为子应用(如 slave-app)。"
    ],
    [
      "h2",
      "依赖安装"
    ],
    [
      "blockquote",
      [
        "p",
        "注：框架应用需要安装；子应用需要安装。"
      ]
    ],
    [
      "p",
      "项目创建 完成后，需进行 依赖安装，",
      [
        "code",
        "chiyou-boot"
      ],
      " 包括了整个架构的内部封装，你只需要安装后做一些简单配置即可。"
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "$ yarn global add chiyou<span class=\"token operator\">-</span>boot # 或者 npm install <span class=\"token operator\">-</span>g chiyou<span class=\"token operator\">-</span>boot"
      },
      [
        "code",
        "$ yarn global add chiyou-boot # 或者 npm install -g chiyou-boot"
      ]
    ],
    [
      "h2",
      "修改框架应用的挂载节点 ID"
    ],
    [
      "blockquote",
      [
        "p",
        "注：框架应用需要修改；子应用需要修改。"
      ]
    ],
    [
      "pre",
      {
        "lang": "html",
        "highlighted": "在 /master-app/src/pages/document.ejs 和 /slave-app/src/pages/document.ejs 中修改:\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>head</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>body</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>noscript</span><span class=\"token punctuation\">></span></span>Out-of-the-box mid-stage front/design solution!<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>noscript</span><span class=\"token punctuation\">></span></span>\n-   <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>root<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n+   <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">id</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>&lt;%<span class=\"token punctuation\">=</span> context.config.mountElementId %<span class=\"token punctuation\">></span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>style</span><span class=\"token punctuation\">></span></span>\n    .page-loading-warp {\n      padding: 120px;"
      },
      [
        "code",
        "在 /master-app/src/pages/document.ejs 和 /slave-app/src/pages/document.ejs 中修改:\n  </head>\n  <body>\n    <noscript>Out-of-the-box mid-stage front/design solution!</noscript>\n-   <div id=\"root\">\n+   <div id=\"<%= context.config.mountElementId %>\">\n  <style>\n    .page-loading-warp {\n      padding: 120px;"
      ]
    ],
    [
      "h2",
      "新增兼容样式"
    ],
    [
      "blockquote",
      [
        "p",
        "注：框架应用需要新增；子应用不需要新增。"
      ]
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token selector\">在 /master-app/src/global<span class=\"token class\">.less</span> 末尾追加:\n<span class=\"token id\">#root-master</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "在 /master-app/src/global.less 末尾追加:\n#root-master {\n  height: 100%;\n}"
      ]
    ],
    [
      "h2",
      "修改框架应用内子应用的挂载节点 ID"
    ],
    [
      "blockquote",
      [
        "p",
        "注：框架应用需要修改；子应用不需要修改。"
      ]
    ],
    [
      "pre",
      {
        "lang": "javascript",
        "highlighted": "在 <span class=\"token operator\">/</span>master<span class=\"token operator\">-</span>app<span class=\"token operator\">/</span>src<span class=\"token operator\">/</span>layouts<span class=\"token operator\">/</span>BasicLayout<span class=\"token punctuation\">.</span>tsx 中修改<span class=\"token punctuation\">:</span>\n  formatMessage<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>formatMessage<span class=\"token punctuation\">}</span>\n  rightContentRender<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">&lt;</span>RightContent <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>settings<span class=\"token punctuation\">}</span>\n<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span>Authorized authority<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>authorized<span class=\"token operator\">!</span><span class=\"token punctuation\">.</span>authority<span class=\"token punctuation\">}</span> noMatch<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>noMatch<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n<span class=\"token operator\">-</span>     <span class=\"token punctuation\">{</span>children<span class=\"token punctuation\">}</span>\n<span class=\"token operator\">+</span>     <span class=\"token operator\">&lt;</span>div id<span class=\"token operator\">=</span><span class=\"token string\">\"root-subapp\"</span><span class=\"token operator\">></span>\n<span class=\"token operator\">+</span>     <span class=\"token punctuation\">{</span>children<span class=\"token punctuation\">}</span>\n<span class=\"token operator\">+</span>     <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>div<span class=\"token operator\">></span>\n    <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>Authorized<span class=\"token operator\">></span>\n  <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span>ProLayout<span class=\"token operator\">></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "在 /master-app/src/layouts/BasicLayout.tsx 中修改:\n  formatMessage={formatMessage}\n  rightContentRender={() => <RightContent />}\n  {...props}\n  {...settings}\n>\n    <Authorized authority={authorized!.authority} noMatch={noMatch}>\n-     {children}\n+     <div id=\"root-subapp\">\n+     {children}\n+     </div>\n    </Authorized>\n  </ProLayout>\n);"
      ]
    ]
  ],
  "meta": {
    "category": "指南",
    "order": 3,
    "title": "快速上手",
    "filename": "docs/framework/orient-isomorphism-quick-start.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#普通应用创建",
          "title": "普通应用创建"
        },
        "普通应用创建"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#依赖安装",
          "title": "依赖安装"
        },
        "依赖安装"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#修改框架应用的挂载节点-ID",
          "title": "修改框架应用的挂载节点 ID"
        },
        "修改框架应用的挂载节点 ID"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#新增兼容样式",
          "title": "新增兼容样式"
        },
        "新增兼容样式"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#修改框架应用内子应用的挂载节点-ID",
          "title": "修改框架应用内子应用的挂载节点 ID"
        },
        "修改框架应用内子应用的挂载节点 ID"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=orient-isomorphism-quick-start.zh-CN.md.js.map