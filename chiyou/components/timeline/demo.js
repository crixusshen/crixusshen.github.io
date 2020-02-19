(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/timeline/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/alternate.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/alternate.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "内容在时间轴两侧轮流出现。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Alternate timeline."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "交替展现",
      "en-US": "Alternate"
    },
    "filename": "components/timeline/demo/alternate.md",
    "id": "components-timeline-demo-alternate"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>alternate<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>green<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span> <span class=\"token attr-name\">dot</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"clock-circle-o\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n      laudantium<span class=\"token punctuation\">,</span> totam rem aperiam<span class=\"token punctuation\">,</span> eaque ipsa quae ab illo inventore veritatis et quasi architecto\n      beatae vitae dicta sunt explicabo<span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span> <span class=\"token attr-name\">dot</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"clock-circle-o\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline</span></span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>alternate<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>green<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span> <span class=\"token attr-name\">dot</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>clock-circle-o<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token operator\">:</span> <span class=\"token string\">'16px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque\n      laudantium<span class=\"token punctuation\">,</span> totam rem aperiam<span class=\"token punctuation\">,</span> eaque ipsa quae ab illo inventore veritatis et quasi architecto\n      beatae vitae dicta sunt explicabo<span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span> <span class=\"token attr-name\">dot</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>clock-circle-o<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token operator\">:</span> <span class=\"token string\">'16px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement(_antd.Timeline, {
    mode: "alternate"
  }, React.createElement(_antd.Timeline.Item, null, "Create a services site 2015-09-01"), React.createElement(_antd.Timeline.Item, {
    color: "green"
  }, "Solve initial network problems 2015-09-01"), React.createElement(_antd.Timeline.Item, {
    dot: React.createElement(_antd.Icon, {
      type: "clock-circle-o",
      style: {
        fontSize: '16px'
      }
    })
  }, "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."), React.createElement(_antd.Timeline.Item, {
    color: "red"
  }, "Network problems being solved 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Create a services site 2015-09-01"), React.createElement(_antd.Timeline.Item, {
    dot: React.createElement(_antd.Icon, {
      type: "clock-circle-o",
      style: {
        fontSize: '16px'
      }
    })
  }, "Technical testing 2015-09-01"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/basic.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/basic.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "基本的时间轴。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Basic timeline."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本用法",
      "en-US": "Basic"
    },
    "filename": "components/timeline/demo/basic.md",
    "id": "components-timeline-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement(_antd.Timeline, null, React.createElement(_antd.Timeline.Item, null, "Create a services site 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Solve initial network problems 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Technical testing 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Network problems being solved 2015-09-01"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/color.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/color.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "圆圈颜色，绿色用于已完成、成功状态，红色表示告警或错误状态，蓝色可表示正在进行或其他默认状态，灰色表示未完成或失效状态。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Set the color of circles. ",
        [
          "code",
          "green"
        ],
        " means completed or success status, ",
        [
          "code",
          "red"
        ],
        " means warning or error, and ",
        [
          "code",
          "blue"
        ],
        " means ongoing or other default status, ",
        [
          "code",
          "gray"
        ],
        " for unfinished or disabled status."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "圆圈颜色",
      "en-US": "Color"
    },
    "filename": "components/timeline/demo/color.md",
    "id": "components-timeline-demo-color"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>green<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>green<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">3</span> <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">3</span> <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>gray<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">3</span> <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>gray<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">3</span> <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>green<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>green<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">3</span> <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">3</span> <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>gray<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">3</span> <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>gray<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">3</span> <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement(_antd.Timeline, null, React.createElement(_antd.Timeline.Item, {
    color: "green"
  }, "Create a services site 2015-09-01"), React.createElement(_antd.Timeline.Item, {
    color: "green"
  }, "Create a services site 2015-09-01"), React.createElement(_antd.Timeline.Item, {
    color: "red"
  }, React.createElement("p", null, "Solve initial network problems 1"), React.createElement("p", null, "Solve initial network problems 2"), React.createElement("p", null, "Solve initial network problems 3 2015-09-01")), React.createElement(_antd.Timeline.Item, null, React.createElement("p", null, "Technical testing 1"), React.createElement("p", null, "Technical testing 2"), React.createElement("p", null, "Technical testing 3 2015-09-01")), React.createElement(_antd.Timeline.Item, {
    color: "gray"
  }, React.createElement("p", null, "Technical testing 1"), React.createElement("p", null, "Technical testing 2"), React.createElement("p", null, "Technical testing 3 2015-09-01")), React.createElement(_antd.Timeline.Item, {
    color: "gray"
  }, React.createElement("p", null, "Technical testing 1"), React.createElement("p", null, "Technical testing 2"), React.createElement("p", null, "Technical testing 3 2015-09-01")));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/custom.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/custom.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以设置为图标或其他自定义元素。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Set a node as an icon or other custom element."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "自定义时间轴点",
      "en-US": "Custom"
    },
    "filename": "components/timeline/demo/custom.md",
    "id": "components-timeline-demo-custom"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span> <span class=\"token attr-name\">dot</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"clock-circle-o\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> color<span class=\"token operator\">=</span><span class=\"token string\">\"red\"</span><span class=\"token operator\">></span>\n      Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span> <span class=\"token attr-name\">dot</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>clock-circle-o<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token operator\">:</span> <span class=\"token string\">'16px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement(_antd.Timeline, null, React.createElement(_antd.Timeline.Item, null, "Create a services site 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Solve initial network problems 2015-09-01"), React.createElement(_antd.Timeline.Item, {
    dot: React.createElement(_antd.Icon, {
      type: "clock-circle-o",
      style: {
        fontSize: '16px'
      }
    }),
    color: "red"
  }, "Technical testing 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Network problems being solved 2015-09-01"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/orient-basic.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/orient-basic.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "根据实际需要可按时间正序或倒序排列。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基础时间轴",
      "en-US": null
    },
    "filename": "components/timeline/demo/orient-basic.md",
    "id": "components-timeline-demo-orient-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement(_antd.Timeline, null, React.createElement(_antd.Timeline.Item, null, "Create a services site 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Solve initial network problems 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Technical testing 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Network problems being solved 2015-09-01"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/orient-date.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/orient-date.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以隐藏日期或时间。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "隐藏日期时间",
      "en-US": null
    },
    "filename": "components/timeline/demo/orient-date.md",
    "id": "components-timeline-demo-orient-date"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement(_antd.Timeline, null, React.createElement(_antd.Timeline.Item, null, "Create a services site 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Solve initial network problems 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Technical testing 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Network problems being solved 2015-09-01"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/orient-year.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/orient-year.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "一页内只显示一年的数据，年份可切换。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "年份选择时间轴",
      "en-US": null
    },
    "filename": "components/timeline/demo/orient-year.md",
    "id": "components-timeline-demo-orient-year"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement(_antd.Timeline, null, React.createElement(_antd.Timeline.Item, null, "Create a services site 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Solve initial network problems 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Technical testing 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Network problems being solved 2015-09-01"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/pending.md":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/pending.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "当任务状态正在发生，还在记录过程中，可用幽灵节点来表示当前的时间节点，当 pending 为真值时展示幽灵节点，如果 pending 是 React 元素可用于定制该节点内容，同时 pendingDot 将可以用于定制其轴点。reverse 属性用于控制节点排序，为 false 时按正序排列，为 true 时按倒序排列。"
      ]
    ],
    "en-US": [
      [
        "p",
        "When the timeline is incomplete and ongoing, put a ghost node at last. Set ",
        [
          "code",
          "pending"
        ],
        " as truthy value to enable displaying pending item. You can customize the pending content by passing a React Element. Meanwhile, ",
        [
          "code",
          "pendingDot={a React Element}"
        ],
        " is used to customize the dot of the pending item. ",
        [
          "code",
          "reverse={true}"
        ],
        " is used for reversing nodes."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "最后一个及排序",
      "en-US": "Last node and Reversing"
    },
    "filename": "components/timeline/demo/pending.md",
    "id": "components-timeline-demo-pending"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">PendingTimeLine</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    reverse<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleClick <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> reverse<span class=\"token punctuation\">:</span> <span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>reverse <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline</span> <span class=\"token attr-name\">pending</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Recording...<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">reverse</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>reverse<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleClick<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          Toggle Reverse\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>PendingTimeLine</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">PendingTimeLine</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    reverse<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleClick</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> reverse<span class=\"token operator\">:</span> <span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>reverse <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline</span></span> <span class=\"token attr-name\">pending</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Recording...<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">reverse</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>reverse<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token operator\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleClick<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          Toggle Reverse\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">PendingTimeLine</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

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

  var PendingTimeLine =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(PendingTimeLine, _React$Component);

    function PendingTimeLine() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, PendingTimeLine);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PendingTimeLine)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        reverse: false
      });

      _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
        _this.setState({
          reverse: !_this.state.reverse
        });
      });

      return _this;
    }

    _createClass(PendingTimeLine, [{
      key: "render",
      value: function render() {
        return React.createElement("div", null, React.createElement(_antd.Timeline, {
          pending: "Recording...",
          reverse: this.state.reverse
        }, React.createElement(_antd.Timeline.Item, null, "Create a services site 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Solve initial network problems 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Technical testing 2015-09-01")), React.createElement(_antd.Button, {
          type: "primary",
          style: {
            marginTop: 16
          },
          onClick: this.handleClick
        }, "Toggle Reverse"));
      }
    }]);

    return PendingTimeLine;
  }(React.Component);

  return React.createElement(PendingTimeLine, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/right.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/right.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "时间轴点可以在内容的右边。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Right alternate timeline."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "右侧时间轴点",
      "en-US": "Right alternate"
    },
    "filename": "components/timeline/demo/right.md",
    "id": "components-timeline-demo-right"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline</span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span> <span class=\"token attr-name\">dot</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"clock-circle-o\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> color<span class=\"token operator\">=</span><span class=\"token string\">\"red\"</span><span class=\"token operator\">></span>\n      Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Timeline<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline</span></span> <span class=\"token attr-name\">mode</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Create a services site <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Solve initial network problems <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span> <span class=\"token attr-name\">dot</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>clock-circle-o<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token operator\">:</span> <span class=\"token string\">'16px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Technical testing <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>Network problems being solved <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline.Item</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Timeline</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement(_antd.Timeline, {
    mode: "right"
  }, React.createElement(_antd.Timeline.Item, null, "Create a services site 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Solve initial network problems 2015-09-01"), React.createElement(_antd.Timeline.Item, {
    dot: React.createElement(_antd.Icon, {
      type: "clock-circle-o",
      style: {
        fontSize: '16px'
      }
    }),
    color: "red"
  }, "Technical testing 2015-09-01"), React.createElement(_antd.Timeline.Item, null, "Network problems being solved 2015-09-01"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/components-timeline-demo.index.js":
/*!********************************************************************!*\
  !*** ./node_modules/bisheng/tmp/components-timeline-demo.index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'alternate': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/timeline/demo/alternate.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/alternate.md"),
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/timeline/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/basic.md"),
    'color': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/timeline/demo/color.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/color.md"),
    'custom': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/timeline/demo/custom.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/custom.md"),
    'orient-basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/timeline/demo/orient-basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/orient-basic.md"),
    'orient-date': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/timeline/demo/orient-date.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/orient-date.md"),
    'orient-year': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/timeline/demo/orient-year.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/orient-year.md"),
    'pending': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/timeline/demo/pending.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/pending.md"),
    'right': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/timeline/demo/right.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/demo/right.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map