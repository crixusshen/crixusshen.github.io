(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/list/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/basic.md":
/*!*******************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/basic.md ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "基础列表。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Basic list."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "基础列表",
      "en-US": "Basic list"
    },
    "filename": "components/list/demo/basic.md",
    "id": "components-list-demo-basic"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Ant Design Title 1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Ant Design Title 2'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Ant Design Title 3'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Ant Design Title 4'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n    <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n          <span class=\"token attr-name\">avatar={&lt;Avatar</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">title={&lt;a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n          description<span class=\"token operator\">=</span><span class=\"token string\">\"Ant Design, a design language for background applications, is refined by Ant UED Team\"</span>\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Ant Design Title 1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Ant Design Title 2'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Ant Design Title 3'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Ant Design Title 4'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n    <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item.Meta</span></span>\n          <span class=\"token attr-name\">avatar</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Avatar</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Ant Design, a design language for background applications, is refined by Ant UED Team<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var data = [{
    title: 'Ant Design Title 1'
  }, {
    title: 'Ant Design Title 2'
  }, {
    title: 'Ant Design Title 3'
  }, {
    title: 'Ant Design Title 4'
  }];
  return React.createElement(_antd.List, {
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return React.createElement(_antd.List.Item, null, React.createElement(_antd.List.Item.Meta, {
        avatar: React.createElement(_antd.Avatar, {
          src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        }),
        title: React.createElement("a", {
          href: "https://ant.design"
        }, item.title),
        description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
      }));
    }
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/grid.md":
/*!******************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/grid.md ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以通过设置 ",
        [
          "code",
          "List"
        ],
        " 的 ",
        [
          "code",
          "grid"
        ],
        " 属性来实现栅格列表，",
        [
          "code",
          "column"
        ],
        " 可设置期望显示的列数。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Create a grid layout by setting the ",
        [
          "code",
          "grid"
        ],
        " property of List."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "栅格列表",
      "en-US": "Grid"
    },
    "filename": "components/list/demo/grid.md",
    "id": "components-list-demo-grid"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Card <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 2'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 3'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 4'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n    <span class=\"token attr-name\">grid</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> gutter<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> column<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>Card title<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Card content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Card</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Card <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Title 1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Title 2'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Title 3'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Title 4'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n    <span class=\"token attr-name\">grid</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> gutter<span class=\"token operator\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> column<span class=\"token operator\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Card</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Card content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Card</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var data = [{
    title: 'Title 1'
  }, {
    title: 'Title 2'
  }, {
    title: 'Title 3'
  }, {
    title: 'Title 4'
  }];
  return React.createElement(_antd.List, {
    grid: {
      gutter: 16,
      column: 4
    },
    dataSource: data,
    renderItem: function renderItem(item) {
      return React.createElement(_antd.List.Item, null, React.createElement(_antd.Card, {
        title: item.title
      }, "Card content"));
    }
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/infinite-load.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/infinite-load.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "结合 ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/CassetteRocks/react-infinite-scroller"
          },
          "react-infinite-scroller"
        ],
        " 实现滚动自动加载列表。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The example of infinite load with ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/CassetteRocks/react-infinite-scroller"
          },
          "react-infinite-scroller"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 6,
    "title": {
      "zh-CN": "滚动加载",
      "en-US": "Scrolling loaded"
    },
    "filename": "components/list/demo/infinite-load.md",
    "id": "components-list-demo-infinite-load"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> InfiniteScroll <span class=\"token keyword\">from</span> <span class=\"token string\">'react-infinite-scroller'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> fakeDataUrl <span class=\"token operator\">=</span> <span class=\"token string\">'https://randomuser.me/api/?results=5&amp;inc=name,gender,email,nat&amp;noinfo'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">InfiniteListExample</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    hasMore<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetchData</span><span class=\"token punctuation\">(</span>res <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  fetchData <span class=\"token operator\">=</span> callback <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token punctuation\">:</span> fakeDataUrl<span class=\"token punctuation\">,</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token punctuation\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      contentType<span class=\"token punctuation\">:</span> <span class=\"token string\">'application/json'</span><span class=\"token punctuation\">,</span>\n      success<span class=\"token punctuation\">:</span> res <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleInfiniteOnLoad <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">14</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">warning</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Infinite List loaded all'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        hasMore<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetchData</span><span class=\"token punctuation\">(</span>res <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      data <span class=\"token operator\">=</span> data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-infinite-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InfiniteScroll</span>\n          <span class=\"token attr-name\">initialLoad</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">pageStart</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">loadMore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInfiniteOnLoad<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">hasMore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>hasMore<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">useWindow</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n            <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n              <span class=\"token operator\">&lt;</span>List<span class=\"token punctuation\">.</span>Item key<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>id<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n                  <span class=\"token attr-name\">avatar</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>\n                    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n                  <span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">title={&lt;a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>last<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n                  description<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>email<span class=\"token punctuation\">}</span>\n                <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token operator\">></span>\n            <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>hasMore <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-loading-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InfiniteScroll</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InfiniteListExample</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> InfiniteScroll <span class=\"token keyword\">from</span> <span class=\"token string\">'react-infinite-scroller'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> fakeDataUrl <span class=\"token operator\">=</span> <span class=\"token string\">'https://randomuser.me/api/?results=5&amp;inc=name,gender,email,nat&amp;noinfo'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">InfiniteListExample</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    data<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    hasMore<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetchData</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">res</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token operator\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function-variable function\">fetchData</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">callback</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token operator\">:</span> fakeDataUrl<span class=\"token punctuation\">,</span>\n      type<span class=\"token operator\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token operator\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      contentType<span class=\"token operator\">:</span> <span class=\"token string\">'application/json'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token function-variable function\">success</span><span class=\"token operator\">:</span> <span class=\"token parameter\">res</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleInfiniteOnLoad</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      loading<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">14</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">warning</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Infinite List loaded all'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        hasMore<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        loading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetchData</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">res</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      data <span class=\"token operator\">=</span> data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">,</span>\n        loading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-infinite-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InfiniteScroll</span></span>\n          <span class=\"token attr-name\">initialLoad</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">pageStart</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">loadMore</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInfiniteOnLoad<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">hasMore</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>hasMore<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">useWindow</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n            <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>id<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item.Meta</span></span>\n                  <span class=\"token attr-name\">avatar</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>\n                    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Avatar</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n                  <span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>last<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">description</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>email<span class=\"token punctuation\">}</span></span>\n                <span class=\"token punctuation\">/></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>hasMore <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-loading-container<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Spin</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">InfiniteScroll</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InfiniteListExample</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var _reqwest = _interopRequireDefault(__webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js"));

  var _reactInfiniteScroller = _interopRequireDefault(__webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js"));

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

  var InfiniteListExample =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(InfiniteListExample, _React$Component);

    function InfiniteListExample() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, InfiniteListExample);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InfiniteListExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        data: [],
        loading: false,
        hasMore: true
      });

      _defineProperty(_assertThisInitialized(_this), "fetchData", function (callback) {
        (0, _reqwest["default"])({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: function success(res) {
            callback(res);
          }
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleInfiniteOnLoad", function () {
        var data = _this.state.data;

        _this.setState({
          loading: true
        });

        if (data.length > 14) {
          _antd.message.warning('Infinite List loaded all');

          _this.setState({
            hasMore: false,
            loading: false
          });

          return;
        }

        _this.fetchData(function (res) {
          data = data.concat(res.results);

          _this.setState({
            data: data,
            loading: false
          });
        });
      });

      return _this;
    }

    _createClass(InfiniteListExample, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.fetchData(function (res) {
          _this2.setState({
            data: res.results
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return React.createElement("div", {
          className: "demo-infinite-container"
        }, React.createElement(_reactInfiniteScroller["default"], {
          initialLoad: false,
          pageStart: 0,
          loadMore: this.handleInfiniteOnLoad,
          hasMore: !this.state.loading && this.state.hasMore,
          useWindow: false
        }, React.createElement(_antd.List, {
          dataSource: this.state.data,
          renderItem: function renderItem(item) {
            return React.createElement(_antd.List.Item, {
              key: item.id
            }, React.createElement(_antd.List.Item.Meta, {
              avatar: React.createElement(_antd.Avatar, {
                src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              }),
              title: React.createElement("a", {
                href: "https://ant.design"
              }, item.name.last),
              description: item.email
            }), React.createElement("div", null, "Content"));
          }
        }, this.state.loading && this.state.hasMore && React.createElement("div", {
          className: "demo-loading-container"
        }, React.createElement(_antd.Spin, null)))));
      }
    }]);

    return InfiniteListExample;
  }(React.Component);

  return React.createElement(InfiniteListExample, null);
},
  "style": ".demo-infinite-container {\n  border: 1px solid #e8e8e8;\n  border-radius: 4px;\n  overflow: auto;\n  padding: 8px 24px;\n  height: 300px;\n}\n.demo-loading-container {\n  position: absolute;\n  bottom: 40px;\n  width: 100%;\n  text-align: center;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.demo-infinite-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">border</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>px solid <span class=\"token hexcode\">#e8e8e8</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">border-radius</span><span class=\"token punctuation\">:</span> <span class=\"token number\">4</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> auto<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px <span class=\"token number\">24</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">300</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.demo-loading-container</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">40</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/infinite-virtualized-load.md":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/infinite-virtualized-load.md ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "结合 ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/bvaughn/react-virtualized"
          },
          "react-virtualized"
        ],
        " 实现滚动加载无限长列表，带有虚拟化（",
        [
          "a",
          {
            "title": null,
            "href": "https://blog.jscrambler.com/optimizing-react-rendering-through-virtualization/"
          },
          "virtualization"
        ],
        "）功能，能够提高数据量大时候长列表的性能。"
      ],
      [
        "p",
        [
          "code",
          "virtualized"
        ],
        " 是在大数据列表中应用的一种技术，主要是为了减少不可见区域不必要的渲染从而提高性能，特别是数据量在成千上万条效果尤为明显。",
        [
          "a",
          {
            "title": null,
            "href": "https://blog.jscrambler.com/optimizing-react-rendering-through-virtualization/"
          },
          "了解更多"
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "An example of infinite list & virtualized loading using ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/bvaughn/react-virtualized"
          },
          "react-virtualized"
        ],
        ". ",
        [
          "a",
          {
            "title": null,
            "href": "https://blog.jscrambler.com/optimizing-react-rendering-through-virtualization/"
          },
          "Learn more"
        ],
        "."
      ],
      [
        "p",
        [
          "code",
          "Virtualized"
        ],
        " rendering is a technique to mount big sets of data. It reduces the amount of rendered DOM nodes by tracking and hiding whatever isn't currently visible."
      ]
    ]
  },
  "meta": {
    "order": 7,
    "title": {
      "zh-CN": "滚动加载无限长列表",
      "en-US": "Infinite & virtualized"
    },
    "filename": "components/list/demo/infinite-virtualized-load.md",
    "id": "components-list-demo-infinite-virtualized-load"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> WindowScroller <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/WindowScroller'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> AutoSizer <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/AutoSizer'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> VList <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/List'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> InfiniteLoader <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/InfiniteLoader'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> fakeDataUrl <span class=\"token operator\">=</span> <span class=\"token string\">'https://randomuser.me/api/?results=5&amp;inc=name,gender,email,nat&amp;noinfo'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">VirtualizedExample</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  loadedRowsMap <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetchData</span><span class=\"token punctuation\">(</span>res <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  fetchData <span class=\"token operator\">=</span> callback <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token punctuation\">:</span> fakeDataUrl<span class=\"token punctuation\">,</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token punctuation\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      contentType<span class=\"token punctuation\">:</span> <span class=\"token string\">'application/json'</span><span class=\"token punctuation\">,</span>\n      success<span class=\"token punctuation\">:</span> res <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleInfiniteOnLoad <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> startIndex<span class=\"token punctuation\">,</span> stopIndex <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> startIndex<span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;=</span> stopIndex<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token comment\" spellcheck=\"true\">// 1 means loading</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>loadedRowsMap<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">19</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">warning</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Virtualized List loaded all'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetchData</span><span class=\"token punctuation\">(</span>res <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      data <span class=\"token operator\">=</span> data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">,</span>\n        loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  isRowLoaded <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> index <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token operator\">!</span><span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>loadedRowsMap<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n  renderItem <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> index<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">,</span> style <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> item <span class=\"token operator\">=</span> data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>style<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n          <span class=\"token attr-name\">avatar={&lt;Avatar</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n          title<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>last<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n          description<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>email<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> vlist <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">,</span> isScrolling<span class=\"token punctuation\">,</span> onChildScroll<span class=\"token punctuation\">,</span> scrollTop<span class=\"token punctuation\">,</span> onRowsRendered<span class=\"token punctuation\">,</span> width <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>VList</span>\n        <span class=\"token attr-name\">autoHeight</span>\n        <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>height<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">isScrolling</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>isScrolling<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onScroll</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChildScroll<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">overscanRowCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowHeight</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">73</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowRenderer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>renderItem<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onRowsRendered</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onRowsRendered<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">scrollTop</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>scrollTop<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>width<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> autoSize <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">,</span> isScrolling<span class=\"token punctuation\">,</span> onChildScroll<span class=\"token punctuation\">,</span> scrollTop<span class=\"token punctuation\">,</span> onRowsRendered <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AutoSizer</span> <span class=\"token attr-name\">disableHeight</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> width <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n          <span class=\"token function\">vlist</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n            height<span class=\"token punctuation\">,</span>\n            isScrolling<span class=\"token punctuation\">,</span>\n            onChildScroll<span class=\"token punctuation\">,</span>\n            scrollTop<span class=\"token punctuation\">,</span>\n            onRowsRendered<span class=\"token punctuation\">,</span>\n            width<span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>AutoSizer</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> infiniteLoader <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">,</span> isScrolling<span class=\"token punctuation\">,</span> onChildScroll<span class=\"token punctuation\">,</span> scrollTop <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InfiniteLoader</span>\n        <span class=\"token attr-name\">isRowLoaded</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>isRowLoaded<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loadMoreRows</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInfiniteOnLoad<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> onRowsRendered <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n          <span class=\"token function\">autoSize</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n            height<span class=\"token punctuation\">,</span>\n            isScrolling<span class=\"token punctuation\">,</span>\n            onChildScroll<span class=\"token punctuation\">,</span>\n            scrollTop<span class=\"token punctuation\">,</span>\n            onRowsRendered<span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InfiniteLoader</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">0</span> <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WindowScroller</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>infiniteLoader<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>WindowScroller</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-loading<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>VirtualizedExample</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> WindowScroller <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/WindowScroller'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> AutoSizer <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/AutoSizer'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> VList <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/List'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> InfiniteLoader <span class=\"token keyword\">from</span> <span class=\"token string\">'react-virtualized/dist/commonjs/InfiniteLoader'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> fakeDataUrl <span class=\"token operator\">=</span> <span class=\"token string\">'https://randomuser.me/api/?results=5&amp;inc=name,gender,email,nat&amp;noinfo'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">VirtualizedExample</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    data<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  loadedRowsMap <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetchData</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">res</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token operator\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function-variable function\">fetchData</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">callback</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token operator\">:</span> fakeDataUrl<span class=\"token punctuation\">,</span>\n      type<span class=\"token operator\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token operator\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      contentType<span class=\"token operator\">:</span> <span class=\"token string\">'application/json'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token function-variable function\">success</span><span class=\"token operator\">:</span> <span class=\"token parameter\">res</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleInfiniteOnLoad</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> startIndex<span class=\"token punctuation\">,</span> stopIndex <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      loading<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> startIndex<span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;=</span> stopIndex<span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token comment\">// 1 means loading</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>loadedRowsMap<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span> <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>data<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">19</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">warning</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Virtualized List loaded all'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        loading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">fetchData</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">res</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      data <span class=\"token operator\">=</span> data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        data<span class=\"token punctuation\">,</span>\n        loading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">isRowLoaded</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> index <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token operator\">!</span><span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>loadedRowsMap<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">renderItem</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> index<span class=\"token punctuation\">,</span> key<span class=\"token punctuation\">,</span> style <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> item <span class=\"token operator\">=</span> data<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>key<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>style<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item.Meta</span></span>\n          <span class=\"token attr-name\">avatar</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Avatar</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>last<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">description</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>email<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> data <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token function-variable function\">vlist</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">,</span> isScrolling<span class=\"token punctuation\">,</span> onChildScroll<span class=\"token punctuation\">,</span> scrollTop<span class=\"token punctuation\">,</span> onRowsRendered<span class=\"token punctuation\">,</span> width <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">VList</span></span>\n        <span class=\"token attr-name\">autoHeight</span>\n        <span class=\"token attr-name\">height</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>height<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">isScrolling</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>isScrolling<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onScroll</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChildScroll<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">overscanRowCount</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowCount</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowHeight</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">73</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowRenderer</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>renderItem<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onRowsRendered</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onRowsRendered<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">scrollTop</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>scrollTop<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>width<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token function-variable function\">autoSize</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">,</span> isScrolling<span class=\"token punctuation\">,</span> onChildScroll<span class=\"token punctuation\">,</span> scrollTop<span class=\"token punctuation\">,</span> onRowsRendered <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">AutoSizer</span></span> <span class=\"token attr-name\">disableHeight</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> width <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span>\n          <span class=\"token function\">vlist</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n            height<span class=\"token punctuation\">,</span>\n            isScrolling<span class=\"token punctuation\">,</span>\n            onChildScroll<span class=\"token punctuation\">,</span>\n            scrollTop<span class=\"token punctuation\">,</span>\n            onRowsRendered<span class=\"token punctuation\">,</span>\n            width<span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">AutoSizer</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token function-variable function\">infiniteLoader</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> height<span class=\"token punctuation\">,</span> isScrolling<span class=\"token punctuation\">,</span> onChildScroll<span class=\"token punctuation\">,</span> scrollTop <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InfiniteLoader</span></span>\n        <span class=\"token attr-name\">isRowLoaded</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>isRowLoaded<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loadMoreRows</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInfiniteOnLoad<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">rowCount</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">.</span>length<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> onRowsRendered <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span>\n          <span class=\"token function\">autoSize</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n            height<span class=\"token punctuation\">,</span>\n            isScrolling<span class=\"token punctuation\">,</span>\n            onChildScroll<span class=\"token punctuation\">,</span>\n            scrollTop<span class=\"token punctuation\">,</span>\n            onRowsRendered<span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">InfiniteLoader</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">0</span> <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">WindowScroller</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>infiniteLoader<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">WindowScroller</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Spin</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-loading<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">VirtualizedExample</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var _reqwest = _interopRequireDefault(__webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js"));

  var _WindowScroller = _interopRequireDefault(__webpack_require__(/*! react-virtualized/dist/commonjs/WindowScroller */ "./node_modules/react-virtualized/dist/commonjs/WindowScroller/index.js"));

  var _AutoSizer = _interopRequireDefault(__webpack_require__(/*! react-virtualized/dist/commonjs/AutoSizer */ "./node_modules/react-virtualized/dist/commonjs/AutoSizer/index.js"));

  var _List = _interopRequireDefault(__webpack_require__(/*! react-virtualized/dist/commonjs/List */ "./node_modules/react-virtualized/dist/commonjs/List/index.js"));

  var _InfiniteLoader = _interopRequireDefault(__webpack_require__(/*! react-virtualized/dist/commonjs/InfiniteLoader */ "./node_modules/react-virtualized/dist/commonjs/InfiniteLoader/index.js"));

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

  var VirtualizedExample =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(VirtualizedExample, _React$Component);

    function VirtualizedExample() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, VirtualizedExample);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VirtualizedExample)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        data: [],
        loading: false
      });

      _defineProperty(_assertThisInitialized(_this), "loadedRowsMap", {});

      _defineProperty(_assertThisInitialized(_this), "fetchData", function (callback) {
        (0, _reqwest["default"])({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: function success(res) {
            callback(res);
          }
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleInfiniteOnLoad", function (_ref) {
        var startIndex = _ref.startIndex,
            stopIndex = _ref.stopIndex;
        var data = _this.state.data;

        _this.setState({
          loading: true
        });

        for (var i = startIndex; i <= stopIndex; i++) {
          // 1 means loading
          _this.loadedRowsMap[i] = 1;
        }

        if (data.length > 19) {
          _antd.message.warning('Virtualized List loaded all');

          _this.setState({
            loading: false
          });

          return;
        }

        _this.fetchData(function (res) {
          data = data.concat(res.results);

          _this.setState({
            data: data,
            loading: false
          });
        });
      });

      _defineProperty(_assertThisInitialized(_this), "isRowLoaded", function (_ref2) {
        var index = _ref2.index;
        return !!_this.loadedRowsMap[index];
      });

      _defineProperty(_assertThisInitialized(_this), "renderItem", function (_ref3) {
        var index = _ref3.index,
            key = _ref3.key,
            style = _ref3.style;
        var data = _this.state.data;
        var item = data[index];
        return React.createElement(_antd.List.Item, {
          key: key,
          style: style
        }, React.createElement(_antd.List.Item.Meta, {
          avatar: React.createElement(_antd.Avatar, {
            src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          }),
          title: React.createElement("a", {
            href: "https://ant.design"
          }, item.name.last),
          description: item.email
        }), React.createElement("div", null, "Content"));
      });

      return _this;
    }

    _createClass(VirtualizedExample, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.fetchData(function (res) {
          _this2.setState({
            data: res.results
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;

        var data = this.state.data;

        var vlist = function vlist(_ref4) {
          var height = _ref4.height,
              isScrolling = _ref4.isScrolling,
              onChildScroll = _ref4.onChildScroll,
              scrollTop = _ref4.scrollTop,
              onRowsRendered = _ref4.onRowsRendered,
              width = _ref4.width;
          return React.createElement(_List["default"], {
            autoHeight: true,
            height: height,
            isScrolling: isScrolling,
            onScroll: onChildScroll,
            overscanRowCount: 2,
            rowCount: data.length,
            rowHeight: 73,
            rowRenderer: _this3.renderItem,
            onRowsRendered: onRowsRendered,
            scrollTop: scrollTop,
            width: width
          });
        };

        var autoSize = function autoSize(_ref5) {
          var height = _ref5.height,
              isScrolling = _ref5.isScrolling,
              onChildScroll = _ref5.onChildScroll,
              scrollTop = _ref5.scrollTop,
              onRowsRendered = _ref5.onRowsRendered;
          return React.createElement(_AutoSizer["default"], {
            disableHeight: true
          }, function (_ref6) {
            var width = _ref6.width;
            return vlist({
              height: height,
              isScrolling: isScrolling,
              onChildScroll: onChildScroll,
              scrollTop: scrollTop,
              onRowsRendered: onRowsRendered,
              width: width
            });
          });
        };

        var infiniteLoader = function infiniteLoader(_ref7) {
          var height = _ref7.height,
              isScrolling = _ref7.isScrolling,
              onChildScroll = _ref7.onChildScroll,
              scrollTop = _ref7.scrollTop;
          return React.createElement(_InfiniteLoader["default"], {
            isRowLoaded: _this3.isRowLoaded,
            loadMoreRows: _this3.handleInfiniteOnLoad,
            rowCount: data.length
          }, function (_ref8) {
            var onRowsRendered = _ref8.onRowsRendered;
            return autoSize({
              height: height,
              isScrolling: isScrolling,
              onChildScroll: onChildScroll,
              scrollTop: scrollTop,
              onRowsRendered: onRowsRendered
            });
          });
        };

        return React.createElement(_antd.List, null, data.length > 0 && React.createElement(_WindowScroller["default"], null, infiniteLoader), this.state.loading && React.createElement(_antd.Spin, {
          className: "demo-loading"
        }));
      }
    }]);

    return VirtualizedExample;
  }(React.Component);

  return React.createElement(VirtualizedExample, null);
},
  "style": ".demo-loading {\n  position: absolute;\n  bottom: -40px;\n  left: 50%;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.demo-loading</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">position</span><span class=\"token punctuation\">:</span> absolute<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">bottom</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">40</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">left</span><span class=\"token punctuation\">:</span> <span class=\"token number\">50%</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/loadmore.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/loadmore.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可通过 ",
        [
          "code",
          "loadMore"
        ],
        " 属性实现加载更多功能。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Load more list with ",
        [
          "code",
          "loadMore"
        ],
        " property."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "加载更多",
      "en-US": "Load more"
    },
    "filename": "components/list/demo/loadmore.md",
    "id": "components-list-demo-loadmore"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Skeleton <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> count <span class=\"token operator\">=</span> <span class=\"token number\">3</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> fakeDataUrl <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`https://randomuser.me/api/?results=</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>count<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">&amp;inc=name,gender,email,nat&amp;noinfo`</span></span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">LoadMoreList</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    initLoading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    data<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    list<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getData</span><span class=\"token punctuation\">(</span>res <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        initLoading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        data<span class=\"token punctuation\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n        list<span class=\"token punctuation\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  getData <span class=\"token operator\">=</span> callback <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token punctuation\">:</span> fakeDataUrl<span class=\"token punctuation\">,</span>\n      type<span class=\"token punctuation\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token punctuation\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      contentType<span class=\"token punctuation\">:</span> <span class=\"token string\">'application/json'</span><span class=\"token punctuation\">,</span>\n      success<span class=\"token punctuation\">:</span> res <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onLoadMore <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      list<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Array</span><span class=\"token punctuation\">(</span>count<span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> name<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getData</span><span class=\"token punctuation\">(</span>res <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>\n        <span class=\"token punctuation\">{</span>\n          data<span class=\"token punctuation\">,</span>\n          list<span class=\"token punctuation\">:</span> data<span class=\"token punctuation\">,</span>\n          loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token comment\" spellcheck=\"true\">// Resetting window's offsetTop so as to display react-virtualized demo underfloor.</span>\n          <span class=\"token comment\" spellcheck=\"true\">// In real scene, you can using public method of react-virtualized:</span>\n          <span class=\"token comment\" spellcheck=\"true\">// https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized</span>\n          window<span class=\"token punctuation\">.</span><span class=\"token function\">dispatchEvent</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Event</span><span class=\"token punctuation\">(</span><span class=\"token string\">'resize'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> initLoading<span class=\"token punctuation\">,</span> loading<span class=\"token punctuation\">,</span> list <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> loadMore <span class=\"token operator\">=</span>\n      <span class=\"token operator\">!</span>initLoading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token operator\">!</span>loading <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n            textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'center'</span><span class=\"token punctuation\">,</span>\n            marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span>\n            height<span class=\"token punctuation\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n            lineHeight<span class=\"token punctuation\">:</span> <span class=\"token string\">'32px'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onLoadMore<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>loading more<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n        <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-loadmore-list<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>initLoading<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">loadMore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>loadMore<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>list<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span>\n            <span class=\"token attr-name\">actions={[&lt;a</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-loadmore-edit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>edit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-loadmore-more<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>more<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Skeleton</span> <span class=\"token attr-name\">avatar</span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">active</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n                <span class=\"token attr-name\">avatar</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n                <span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">title={&lt;a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>last<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n                description<span class=\"token operator\">=</span><span class=\"token string\">\"Ant Design, a design language for background applications, is refined by Ant UED Team\"</span>\n              <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Skeleton</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>LoadMoreList</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Skeleton <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> count <span class=\"token operator\">=</span> <span class=\"token number\">3</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> fakeDataUrl <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">https://randomuser.me/api/?results=</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>count<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">&amp;inc=name,gender,email,nat&amp;noinfo</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">LoadMoreList</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    initLoading<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    loading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    data<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    list<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getData</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">res</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        initLoading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        data<span class=\"token operator\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n        list<span class=\"token operator\">:</span> res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function-variable function\">getData</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">callback</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token operator\">:</span> fakeDataUrl<span class=\"token punctuation\">,</span>\n      type<span class=\"token operator\">:</span> <span class=\"token string\">'json'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token operator\">:</span> <span class=\"token string\">'get'</span><span class=\"token punctuation\">,</span>\n      contentType<span class=\"token operator\">:</span> <span class=\"token string\">'application/json'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token function-variable function\">success</span><span class=\"token operator\">:</span> <span class=\"token parameter\">res</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onLoadMore</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      loading<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      list<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Array</span><span class=\"token punctuation\">(</span>count<span class=\"token punctuation\">)</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span> name<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">getData</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">res</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>data<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span>res<span class=\"token punctuation\">.</span>results<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>\n        <span class=\"token punctuation\">{</span>\n          data<span class=\"token punctuation\">,</span>\n          list<span class=\"token operator\">:</span> data<span class=\"token punctuation\">,</span>\n          loading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token comment\">// Resetting window's offsetTop so as to display react-virtualized demo underfloor.</span>\n          <span class=\"token comment\">// In real scene, you can using public method of react-virtualized:</span>\n          <span class=\"token comment\">// https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized</span>\n          window<span class=\"token punctuation\">.</span><span class=\"token function\">dispatchEvent</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">new</span> <span class=\"token class-name\">Event</span><span class=\"token punctuation\">(</span><span class=\"token string\">'resize'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> initLoading<span class=\"token punctuation\">,</span> loading<span class=\"token punctuation\">,</span> list <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> loadMore <span class=\"token operator\">=</span>\n      <span class=\"token operator\">!</span>initLoading <span class=\"token operator\">&amp;&amp;</span> <span class=\"token operator\">!</span>loading <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n            textAlign<span class=\"token operator\">:</span> <span class=\"token string\">'center'</span><span class=\"token punctuation\">,</span>\n            marginTop<span class=\"token operator\">:</span> <span class=\"token number\">12</span><span class=\"token punctuation\">,</span>\n            height<span class=\"token operator\">:</span> <span class=\"token number\">32</span><span class=\"token punctuation\">,</span>\n            lineHeight<span class=\"token operator\">:</span> <span class=\"token string\">'32px'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onLoadMore<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>loading more<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n        <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-loadmore-list<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>initLoading<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">loadMore</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>loadMore<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>list<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span>\n            <span class=\"token attr-name\">actions</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-loadmore-edit<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>edit<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-loadmore-more<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>more<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Skeleton</span></span> <span class=\"token attr-name\">avatar</span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>loading<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">active</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item.Meta</span></span>\n                <span class=\"token attr-name\">avatar</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Avatar</span></span> <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n                <span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://ant.design<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span>last<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">description</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Ant Design, a design language for background applications, is refined by Ant UED Team<span class=\"token punctuation\">\"</span></span>\n              <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Skeleton</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">LoadMoreList</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var _reqwest = _interopRequireDefault(__webpack_require__(/*! reqwest */ "./node_modules/reqwest/reqwest.js"));

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

  function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var count = 3;
  var fakeDataUrl = "https://randomuser.me/api/?results=".concat(count, "&inc=name,gender,email,nat&noinfo");

  var LoadMoreList =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(LoadMoreList, _React$Component);

    function LoadMoreList() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, LoadMoreList);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LoadMoreList)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        initLoading: true,
        loading: false,
        data: [],
        list: []
      });

      _defineProperty(_assertThisInitialized(_this), "getData", function (callback) {
        (0, _reqwest["default"])({
          url: fakeDataUrl,
          type: 'json',
          method: 'get',
          contentType: 'application/json',
          success: function success(res) {
            callback(res);
          }
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onLoadMore", function () {
        _this.setState({
          loading: true,
          list: _this.state.data.concat(_toConsumableArray(new Array(count)).map(function () {
            return {
              loading: true,
              name: {}
            };
          }))
        });

        _this.getData(function (res) {
          var data = _this.state.data.concat(res.results);

          _this.setState({
            data: data,
            list: data,
            loading: false
          }, function () {
            // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
            // In real scene, you can using public method of react-virtualized:
            // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
            window.dispatchEvent(new Event('resize'));
          });
        });
      });

      return _this;
    }

    _createClass(LoadMoreList, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        this.getData(function (res) {
          _this2.setState({
            initLoading: false,
            data: res.results,
            list: res.results
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            initLoading = _this$state.initLoading,
            loading = _this$state.loading,
            list = _this$state.list;
        var loadMore = !initLoading && !loading ? React.createElement("div", {
          style: {
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px'
          }
        }, React.createElement(_antd.Button, {
          onClick: this.onLoadMore
        }, "loading more")) : null;
        return React.createElement(_antd.List, {
          className: "demo-loadmore-list",
          loading: initLoading,
          itemLayout: "horizontal",
          loadMore: loadMore,
          dataSource: list,
          renderItem: function renderItem(item) {
            return React.createElement(_antd.List.Item, {
              actions: [React.createElement("a", {
                key: "list-loadmore-edit"
              }, "edit"), React.createElement("a", {
                key: "list-loadmore-more"
              }, "more")]
            }, React.createElement(_antd.Skeleton, {
              avatar: true,
              title: false,
              loading: item.loading,
              active: true
            }, React.createElement(_antd.List.Item.Meta, {
              avatar: React.createElement(_antd.Avatar, {
                src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              }),
              title: React.createElement("a", {
                href: "https://ant.design"
              }, item.name.last),
              description: "Ant Design, a design language for background applications, is refined by Ant UED Team"
            }), React.createElement("div", null, "content")));
          }
        });
      }
    }]);

    return LoadMoreList;
  }(React.Component);

  return React.createElement(LoadMoreList, null);
},
  "style": ".demo-loadmore-list {\n  min-height: 350px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.demo-loadmore-list</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">350</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/orient-basic.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/orient-basic.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "常用列表样式，显示内容标题和发布时间。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基础列表",
      "en-US": null
    },
    "filename": "components/list/demo/orient-basic.md",
    "id": "components-list-demo-orient-basic"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Typography<span class=\"token punctuation\">,</span> Divider <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-01\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-02\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-03\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-04\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n      <span class=\"token attr-name\">header={&lt;div</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      footer<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span>\n      itemLayout<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n      renderItem<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-date<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Typography<span class=\"token punctuation\">,</span> Divider <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-01\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-02\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-03\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-04\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-list<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n      <span class=\"token attr-name\">header</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-date<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>date<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  var data = [{
    title: "内容标题内容标题",
    date: "2019-01-01"
  }, {
    title: "内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题",
    date: "2019-01-02"
  }, {
    title: "内容标题内容标题内容标题内容标题",
    date: "2019-01-03"
  }, {
    title: "内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题",
    date: "2019-01-04"
  }];
  return React.createElement("div", {
    "class": "demo-list"
  }, React.createElement(_chiyou.List, {
    header: React.createElement("div", null),
    footer: React.createElement("div", null),
    dataSource: data,
    itemLayout: "horizontal",
    renderItem: function renderItem(item) {
      return React.createElement(_chiyou.List.Item, null, item.title, React.createElement("div", {
        "class": "list-date"
      }, item.date));
    }
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/orient-complex.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/orient-complex.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "复合型列表显示图标、标题、发布时间和内容选段。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "复合型列表",
      "en-US": null
    },
    "filename": "components/list/demo/orient-complex.md",
    "id": "components-list-demo-orient-complex"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token punctuation\">:</span> <span class=\"token string\">\"user\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-01 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span>\n      <span class=\"token string\">\"内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token punctuation\">:</span> <span class=\"token string\">\"edit\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-02 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token punctuation\">:</span> <span class=\"token string\">\"search\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-03 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span>\n      <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token punctuation\">:</span> <span class=\"token string\">\"edit\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-04 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-list-date<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n      <span class=\"token attr-name\">footer={&lt;div</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      itemLayout<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span>\n      renderItem<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n            <span class=\"token attr-name\">avatar</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Avatar icon<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>icon<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n            title<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n            description<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span>\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token operator\">:</span> <span class=\"token string\">\"user\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-01 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token operator\">:</span>\n      <span class=\"token string\">\"内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token operator\">:</span> <span class=\"token string\">\"edit\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-02 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token operator\">:</span> <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token operator\">:</span> <span class=\"token string\">\"search\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-03 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token operator\">:</span>\n      <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token operator\">:</span> <span class=\"token string\">\"edit\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-04 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token operator\">:</span> <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-list-date<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n      <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item.Meta</span></span>\n            <span class=\"token attr-name\">avatar</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Avatar</span></span> <span class=\"token attr-name\">icon</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>icon<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">description</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  var data = [{
    icon: "user",
    title: "内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题",
    date: "2019-01-01 09:08",
    description: "内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行内容详情最多展示一行"
  }, {
    icon: "edit",
    title: "内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题",
    date: "2019-01-02 09:08",
    description: "内容详情内容详情内容详情内容详情内容详情"
  }, {
    icon: "search",
    title: "内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题",
    date: "2019-01-03 09:08",
    description: "内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情"
  }, {
    icon: "edit",
    title: "内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题",
    date: "2019-01-04 09:08",
    description: "内容详情内容详情内容详情内容详情内容详情"
  }];
  return React.createElement("div", {
    "class": "df-list-date"
  }, React.createElement(_chiyou.List, {
    footer: React.createElement("div", null),
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return React.createElement(_chiyou.List.Item, null, React.createElement(_chiyou.List.Item.Meta, {
        avatar: React.createElement(_chiyou.Avatar, {
          icon: item.icon
        }),
        title: React.createElement("a", {
          href: "#"
        }, item.title),
        description: item.description
      }));
    }
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/orient-hideIconDate.md":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/orient-hideIconDate.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "隐藏图标、发布时间的列表。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "隐藏图标和时间",
      "en-US": null
    },
    "filename": "components/list/demo/orient-hideIconDate.md",
    "id": "components-list-demo-orient-hideIconDate"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token punctuation\">:</span> <span class=\"token string\">\"user\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-01 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">\"内容详情最多展示一行\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token punctuation\">:</span> <span class=\"token string\">\"edit\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-02 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token punctuation\">:</span> <span class=\"token string\">\"search\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-03 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span>\n      <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token punctuation\">:</span> <span class=\"token string\">\"edit\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2019-01-04 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span> <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-list-hideIcon<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n      <span class=\"token attr-name\">footer={&lt;div</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      itemLayout<span class=\"token operator\">=</span><span class=\"token string\">\"horizontal\"</span>\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span>\n      renderItem<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n            <span class=\"token attr-name\">title={&lt;a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n            description<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span>\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token operator\">:</span> <span class=\"token string\">\"user\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-01 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token operator\">:</span> <span class=\"token string\">\"内容详情最多展示一行\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token operator\">:</span> <span class=\"token string\">\"edit\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-02 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token operator\">:</span> <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token operator\">:</span> <span class=\"token string\">\"search\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-03 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token operator\">:</span>\n      <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    icon<span class=\"token operator\">:</span> <span class=\"token string\">\"edit\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span>\n      <span class=\"token string\">\"内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题\"</span><span class=\"token punctuation\">,</span>\n    date<span class=\"token operator\">:</span> <span class=\"token string\">\"2019-01-04 09:08\"</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token operator\">:</span> <span class=\"token string\">\"内容详情内容详情内容详情内容详情内容详情\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-list-hideIcon<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n      <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>horizontal<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item.Meta</span></span>\n            <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">description</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  var data = [{
    icon: "user",
    title: "内容标题内容标题",
    date: "2019-01-01 09:08",
    description: "内容详情最多展示一行"
  }, {
    icon: "edit",
    title: "内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题",
    date: "2019-01-02 09:08",
    description: "内容详情内容详情内容详情内容详情内容详情"
  }, {
    icon: "search",
    title: "内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题",
    date: "2019-01-03 09:08",
    description: "内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情内容详情"
  }, {
    icon: "edit",
    title: "内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题内容标题",
    date: "2019-01-04 09:08",
    description: "内容详情内容详情内容详情内容详情内容详情"
  }];
  return React.createElement("div", {
    "class": "df-list-hideIcon"
  }, React.createElement(_chiyou.List, {
    footer: React.createElement("div", null),
    itemLayout: "horizontal",
    dataSource: data,
    renderItem: function renderItem(item) {
      return React.createElement(_chiyou.List.Item, null, React.createElement(_chiyou.List.Item.Meta, {
        title: React.createElement("a", {
          href: "#"
        }, item.title),
        description: item.description
      }));
    }
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/resposive.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/resposive.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "响应式的栅格列表。尺寸与 ",
        [
          "a",
          {
            "title": null,
            "href": "https://ant.design/components/grid-cn/#Col"
          },
          "Layout Grid"
        ],
        " 保持一致。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Responsive grid list. The size property the is as same as ",
        [
          "a",
          {
            "title": null,
            "href": "https://ant.design/components/grid/#Col"
          },
          "Layout Grid"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "响应式的栅格列表",
      "en-US": "Responsive grid list"
    },
    "filename": "components/list/demo/resposive.md",
    "id": "components-list-demo-resposive"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Card <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 2'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 3'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 4'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 5'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Title 6'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n    <span class=\"token attr-name\">grid</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n      gutter<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span>\n      xs<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      sm<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n      md<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span>\n      lg<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span>\n      xl<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span>\n      xxl<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>Card title<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Card content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Card</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Card <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Title 1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Title 2'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Title 3'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Title 4'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Title 5'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Title 6'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n    <span class=\"token attr-name\">grid</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n      gutter<span class=\"token operator\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span>\n      xs<span class=\"token operator\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      sm<span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span>\n      md<span class=\"token operator\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span>\n      lg<span class=\"token operator\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span>\n      xl<span class=\"token operator\">:</span> <span class=\"token number\">6</span><span class=\"token punctuation\">,</span>\n      xxl<span class=\"token operator\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Card</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Card content<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Card</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var data = [{
    title: 'Title 1'
  }, {
    title: 'Title 2'
  }, {
    title: 'Title 3'
  }, {
    title: 'Title 4'
  }, {
    title: 'Title 5'
  }, {
    title: 'Title 6'
  }];
  return React.createElement(_antd.List, {
    grid: {
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3
    },
    dataSource: data,
    renderItem: function renderItem(item) {
      return React.createElement(_antd.List.Item, null, React.createElement(_antd.Card, {
        title: item.title
      }, "Card content"));
    }
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/simple.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/simple.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "列表拥有大、中、小三种尺寸。"
      ],
      [
        "p",
        "通过设置 ",
        [
          "code",
          "size"
        ],
        " 为 ",
        [
          "code",
          "large"
        ],
        " ",
        [
          "code",
          "small"
        ],
        " 分别把按钮设为大、小尺寸。若不设置 ",
        [
          "code",
          "size"
        ],
        "，则尺寸为中。"
      ],
      [
        "p",
        "可通过设置 ",
        [
          "code",
          "header"
        ],
        " 和 ",
        [
          "code",
          "footer"
        ],
        "，来自定义列表头部和尾部。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Ant Design supports a default list size as well as a large and small size."
      ],
      [
        "p",
        "If a large or small list is desired, set the size property to either large or small respectively. Omit the size property for a list with the default size."
      ],
      [
        "p",
        "Customizing the header and footer of list by setting ",
        [
          "code",
          "header"
        ],
        " and ",
        [
          "code",
          "footer"
        ],
        " property."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "简单列表",
      "en-US": "Simple list"
    },
    "filename": "components/list/demo/simple.md",
    "id": "components-list-demo-simple"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Typography <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token string\">'Racing car sprays burning fuel into crowd.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Japanese princess to wed commoner.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Australian walks 100km after outback crash.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Man charged over missing wedding girl.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Los Angeles battles huge wildfires.'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h3</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Default Size<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h3</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n      <span class=\"token attr-name\">header={&lt;div</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      footer<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      bordered\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span>\n      renderItem<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Typography.Text</span> <span class=\"token attr-name\">mark</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">[</span>ITEM<span class=\"token punctuation\">]</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Typography.Text</span><span class=\"token punctuation\">></span></span> <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h3</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Small Size<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h3</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n      <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">header={&lt;div</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      footer<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      bordered\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span>\n      renderItem<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h3</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Large Size<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h3</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n      <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">header={&lt;div</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      footer<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n      bordered\n      dataSource<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span>\n      renderItem<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Typography <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> data <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token string\">'Racing car sprays burning fuel into crowd.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Japanese princess to wed commoner.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Australian walks 100km after outback crash.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Man charged over missing wedding girl.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'Los Angeles battles huge wildfires.'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h3</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token operator\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Default Size<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h3</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n      <span class=\"token attr-name\">header</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">bordered</span>\n      <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Typography.Text</span></span> <span class=\"token attr-name\">mark</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">[</span><span class=\"token constant\">ITEM</span><span class=\"token punctuation\">]</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Typography.Text</span></span><span class=\"token punctuation\">></span></span> <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h3</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token operator\">:</span> <span class=\"token string\">'16px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Small Size<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h3</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n      <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">header</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">bordered</span>\n      <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h3</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token operator\">:</span> <span class=\"token string\">'16px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Large Size<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h3</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n      <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">header</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Header<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>Footer<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">bordered</span>\n      <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>data<span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.'];
  return React.createElement("div", null, React.createElement("h3", {
    style: {
      marginBottom: 16
    }
  }, "Default Size"), React.createElement(_antd.List, {
    header: React.createElement("div", null, "Header"),
    footer: React.createElement("div", null, "Footer"),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return React.createElement(_antd.List.Item, null, React.createElement(_antd.Typography.Text, {
        mark: true
      }, "[ITEM]"), " ", item);
    }
  }), React.createElement("h3", {
    style: {
      margin: '16px 0'
    }
  }, "Small Size"), React.createElement(_antd.List, {
    size: "small",
    header: React.createElement("div", null, "Header"),
    footer: React.createElement("div", null, "Footer"),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return React.createElement(_antd.List.Item, null, item);
    }
  }), React.createElement("h3", {
    style: {
      margin: '16px 0'
    }
  }, "Large Size"), React.createElement(_antd.List, {
    size: "large",
    header: React.createElement("div", null, "Header"),
    footer: React.createElement("div", null, "Footer"),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return React.createElement(_antd.List.Item, null, item);
    }
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/vertical.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/list/demo/vertical.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通过设置 ",
        [
          "code",
          "itemLayout"
        ],
        " 属性为 ",
        [
          "code",
          "vertical"
        ],
        " 可实现竖排列表样式。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Set the ",
        [
          "code",
          "itemLayout"
        ],
        " property to ",
        [
          "code",
          "vertical"
        ],
        " to create a vertical list."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "竖排列表样式",
      "en-US": "Vertical"
    },
    "filename": "components/list/demo/vertical.md",
    "id": "components-list-demo-vertical"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#zh-CN",
          "title": "zh-CN"
        },
        "zh-CN"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#en-US",
          "title": "en-US"
        },
        "en-US"
      ]
    ]
  ],
  "highlightedCode": [
    "pre",
    {
      "lang": "jsx",
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">23</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  listData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    href<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://ant.design'</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`ant design part </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">,</span>\n    avatar<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token punctuation\">:</span>\n      <span class=\"token string\">'Ant Design, a design language for background applications, is refined by Ant UED Team.'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token punctuation\">:</span>\n      <span class=\"token string\">'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> IconText <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">,</span> text <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>type<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List</span>\n    <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">pagination</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n      onChange<span class=\"token punctuation\">:</span> page <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>page<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      pageSize<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span></span><span class=\"token attr-name\">}</span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>listData<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>b</span><span class=\"token punctuation\">></span></span>ant design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>b</span><span class=\"token punctuation\">></span></span> footer part\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>List<span class=\"token punctuation\">.</span>Item\n        key<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span>\n        actions<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IconText</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>star-o<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>156<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-vertical-star-o<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IconText</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>like-o<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>156<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-vertical-like-o<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IconText</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>message<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-vertical-message<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span>\n        extra<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>\n          <span class=\"token operator\">&lt;</span>img\n            width<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">272</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>logo<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>List.Item.Meta</span>\n          <span class=\"token attr-name\">avatar</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Avatar src<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>avatar<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n          title<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>href<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span>\n          description<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>List.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n  <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> List<span class=\"token punctuation\">,</span> Avatar<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">23</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  listData<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n    href<span class=\"token operator\">:</span> <span class=\"token string\">'http://ant.design'</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">ant design part </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>i<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">,</span>\n    avatar<span class=\"token operator\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'</span><span class=\"token punctuation\">,</span>\n    description<span class=\"token operator\">:</span>\n      <span class=\"token string\">'Ant Design, a design language for background applications, is refined by Ant UED Team.'</span><span class=\"token punctuation\">,</span>\n    content<span class=\"token operator\">:</span>\n      <span class=\"token string\">'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">IconText</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">,</span> text <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>type<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginRight<span class=\"token operator\">:</span> <span class=\"token number\">8</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">{</span>text<span class=\"token punctuation\">}</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List</span></span>\n    <span class=\"token attr-name\">itemLayout</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>vertical<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">pagination</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n      <span class=\"token function-variable function\">onChange</span><span class=\"token operator\">:</span> <span class=\"token parameter\">page</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>page<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      pageSize<span class=\"token operator\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>listData<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>b</span><span class=\"token punctuation\">></span></span>ant design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>b</span><span class=\"token punctuation\">></span></span> footer part\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">renderItem</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item</span></span>\n        <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">actions</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">IconText</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>star-o<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>156<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-vertical-star-o<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">IconText</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>like-o<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>156<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-vertical-like-o<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">IconText</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>message<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">text</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>list-vertical-message<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">extra</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span>\n            <span class=\"token attr-name\">width</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">272</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>logo<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">src</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">List.Item.Meta</span></span>\n          <span class=\"token attr-name\">avatar</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Avatar</span></span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>avatar<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>href<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">description</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>description<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">List.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var listData = [];

  for (var i = 0; i < 23; i++) {
    listData.push({
      href: 'http://ant.design',
      title: "ant design part ".concat(i),
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
    });
  }

  var IconText = function IconText(_ref) {
    var type = _ref.type,
        text = _ref.text;
    return React.createElement("span", null, React.createElement(_antd.Icon, {
      type: type,
      style: {
        marginRight: 8
      }
    }), text);
  };

  return React.createElement(_antd.List, {
    itemLayout: "vertical",
    size: "large",
    pagination: {
      onChange: function onChange(page) {
        console.log(page);
      },
      pageSize: 3
    },
    dataSource: listData,
    footer: React.createElement("div", null, React.createElement("b", null, "ant design"), " footer part"),
    renderItem: function renderItem(item) {
      return React.createElement(_antd.List.Item, {
        key: item.title,
        actions: [React.createElement(IconText, {
          type: "star-o",
          text: "156",
          key: "list-vertical-star-o"
        }), React.createElement(IconText, {
          type: "like-o",
          text: "156",
          key: "list-vertical-like-o"
        }), React.createElement(IconText, {
          type: "message",
          text: "2",
          key: "list-vertical-message"
        })],
        extra: React.createElement("img", {
          width: 272,
          alt: "logo",
          src: "https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        })
      }, React.createElement(_antd.List.Item.Meta, {
        avatar: React.createElement(_antd.Avatar, {
          src: item.avatar
        }),
        title: React.createElement("a", {
          href: item.href
        }, item.title),
        description: item.description
      }), item.content);
    }
  });
}
};

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** xhr2 (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=demo.js.map