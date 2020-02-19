(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/calendar/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/basic.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/basic.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "一个通用的日历面板，支持年/月切换。"
      ]
    ],
    "en-US": [
      [
        "p",
        "A basic calendar component with Year/Month switch."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/calendar/demo/basic.md",
    "id": "components-calendar-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onPanelChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Calendar</span> <span class=\"token attr-name\">onPanelChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onPanelChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onPanelChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value<span class=\"token punctuation\">,</span> mode</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Calendar</span></span> <span class=\"token attr-name\">onPanelChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onPanelChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return React.createElement(_antd.Calendar, {
    onPanelChange: onPanelChange
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/card.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/card.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "用于嵌套在空间有限的容器中。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Nested inside a container element for rendering in limited space."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "卡片模式",
      "en-US": "Card"
    },
    "filename": "components/calendar/demo/card.md",
    "id": "components-calendar-demo-card"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onPanelChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span> border<span class=\"token punctuation\">:</span> <span class=\"token string\">'1px solid #d9d9d9'</span><span class=\"token punctuation\">,</span> borderRadius<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Calendar</span> <span class=\"token attr-name\">fullscreen</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onPanelChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onPanelChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onPanelChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value<span class=\"token punctuation\">,</span> mode</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span> border<span class=\"token operator\">:</span> <span class=\"token string\">'1px solid #d9d9d9'</span><span class=\"token punctuation\">,</span> borderRadius<span class=\"token operator\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Calendar</span></span> <span class=\"token attr-name\">fullscreen</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onPanelChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onPanelChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return React.createElement("div", {
    style: {
      width: 300,
      border: '1px solid #d9d9d9',
      borderRadius: 4
    }
  }, React.createElement(_antd.Calendar, {
    fullscreen: false,
    onPanelChange: onPanelChange
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/customize-header.md":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/customize-header.md ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "自定义日历头部内容。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Customize Calendar header content."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "自定义头部",
      "en-US": "Customize Header"
    },
    "filename": "components/calendar/demo/customize-header.md",
    "id": "components-calendar-demo-customize-header"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Radio<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Row <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Group<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onPanelChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span> border<span class=\"token punctuation\">:</span> <span class=\"token string\">'1px solid #d9d9d9'</span><span class=\"token punctuation\">,</span> borderRadius<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Calendar</span>\n      <span class=\"token attr-name\">fullscreen</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">headerRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">,</span> onChange<span class=\"token punctuation\">,</span> onTypeChange <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> start <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> end <span class=\"token operator\">=</span> <span class=\"token number\">12</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> monthOptions <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n        <span class=\"token keyword\">const</span> current <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">clone</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> localeData <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">localeData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> months <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">12</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          current<span class=\"token punctuation\">.</span><span class=\"token function\">month</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          months<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>localeData<span class=\"token punctuation\">.</span><span class=\"token function\">monthsShort</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n\n        <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> index <span class=\"token operator\">=</span> start<span class=\"token punctuation\">;</span> index <span class=\"token operator\">&lt;</span> end<span class=\"token punctuation\">;</span> index<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          monthOptions<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>\n            <span class=\"token operator\">&lt;</span>Select<span class=\"token punctuation\">.</span>Option className<span class=\"token operator\">=</span><span class=\"token string\">\"month-item\"</span> key<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>index<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>months<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select.Option</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token keyword\">const</span> month <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">month</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n        <span class=\"token keyword\">const</span> year <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">year</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> year <span class=\"token operator\">-</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> year <span class=\"token operator\">+</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">+</span><span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          options<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select.Option</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>year-item<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select.Option</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token string\">'10px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Custom header <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>flex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">justify</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>space-between<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Group</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">onTypeChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>type<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>month<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Month<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>year<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Year<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Group</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span>\n                  <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n                  <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>my-year-select<span class=\"token punctuation\">\"</span></span>\n                  <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>newYear <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n                    <span class=\"token keyword\">const</span> now <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">clone</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">year</span><span class=\"token punctuation\">(</span>newYear<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                    <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>now<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">String</span><span class=\"token punctuation\">(</span>year<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n                <span class=\"token punctuation\">></span></span>\n                  <span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span>\n                  <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n                  <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">String</span><span class=\"token punctuation\">(</span>month<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>selectedMonth <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n                    <span class=\"token keyword\">const</span> newValue <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">clone</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                    newValue<span class=\"token punctuation\">.</span><span class=\"token function\">month</span><span class=\"token punctuation\">(</span><span class=\"token function\">parseInt</span><span class=\"token punctuation\">(</span>selectedMonth<span class=\"token punctuation\">,</span> <span class=\"token number\">10</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                    <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>newValue<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n                <span class=\"token punctuation\">></span></span>\n                  <span class=\"token punctuation\">{</span>monthOptions<span class=\"token punctuation\">}</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n      onPanelChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>onPanelChange<span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Radio<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Row <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Group<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Radio<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onPanelChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value<span class=\"token punctuation\">,</span> mode</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> mode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">300</span><span class=\"token punctuation\">,</span> border<span class=\"token operator\">:</span> <span class=\"token string\">'1px solid #d9d9d9'</span><span class=\"token punctuation\">,</span> borderRadius<span class=\"token operator\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>Calendar\n      fullscreen<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span>\n      headerRender<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> type<span class=\"token punctuation\">,</span> onChange<span class=\"token punctuation\">,</span> onTypeChange <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> start <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> end <span class=\"token operator\">=</span> <span class=\"token number\">12</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> monthOptions <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n        <span class=\"token keyword\">const</span> current <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">clone</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> localeData <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">localeData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> months <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> <span class=\"token number\">12</span><span class=\"token punctuation\">;</span> i<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          current<span class=\"token punctuation\">.</span><span class=\"token function\">month</span><span class=\"token punctuation\">(</span>i<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          months<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>localeData<span class=\"token punctuation\">.</span><span class=\"token function\">monthsShort</span><span class=\"token punctuation\">(</span>current<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n\n        <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> index <span class=\"token operator\">=</span> start<span class=\"token punctuation\">;</span> index <span class=\"token operator\">&lt;</span> end<span class=\"token punctuation\">;</span> index<span class=\"token operator\">++</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          monthOptions<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select.Option</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>month-item<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>index<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>months<span class=\"token punctuation\">[</span>index<span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select.Option</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token keyword\">const</span> month <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">month</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n        <span class=\"token keyword\">const</span> year <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">year</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">for</span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">let</span> i <span class=\"token operator\">=</span> year <span class=\"token operator\">-</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">&lt;</span> year <span class=\"token operator\">+</span> <span class=\"token number\">10</span><span class=\"token punctuation\">;</span> i <span class=\"token operator\">+=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n          options<span class=\"token punctuation\">.</span><span class=\"token function\">push</span><span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select.Option</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>year-item<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>i<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select.Option</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span>\n        <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> padding<span class=\"token operator\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token operator\">:</span> <span class=\"token string\">'10px'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Custom header <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Row</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>flex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">justify</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>space-between<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Group</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token function\">onTypeChange</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>type<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>month<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Month<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n                  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>year<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Year<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Group</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span>\n                  <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n                  <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>my-year-select<span class=\"token punctuation\">\"</span></span>\n                  <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">newYear</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n                    <span class=\"token keyword\">const</span> now <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">clone</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">year</span><span class=\"token punctuation\">(</span>newYear<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                    <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>now<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">String</span><span class=\"token punctuation\">(</span>year<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n                <span class=\"token punctuation\">></span></span>\n                  <span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span>\n                  <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n                  <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token function\">String</span><span class=\"token punctuation\">(</span>month<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n                  <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">selectedMonth</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n                    <span class=\"token keyword\">const</span> newValue <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">clone</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                    newValue<span class=\"token punctuation\">.</span><span class=\"token function\">month</span><span class=\"token punctuation\">(</span><span class=\"token function\">parseInt</span><span class=\"token punctuation\">(</span>selectedMonth<span class=\"token punctuation\">,</span> <span class=\"token number\">10</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                    <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>newValue<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n                  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n                <span class=\"token punctuation\">></span></span>\n                  <span class=\"token punctuation\">{</span>monthOptions<span class=\"token punctuation\">}</span>\n                <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Row</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span>\n      onPanelChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>onPanelChange<span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var Group = _antd.Radio.Group,
      Button = _antd.Radio.Button;

  function onPanelChange(value, mode) {
    console.log(value, mode);
  }

  return React.createElement("div", {
    style: {
      width: 300,
      border: '1px solid #d9d9d9',
      borderRadius: 4
    }
  }, React.createElement(_antd.Calendar, {
    fullscreen: false,
    headerRender: function headerRender(_ref) {
      var value = _ref.value,
          type = _ref.type,
          _onChange = _ref.onChange,
          onTypeChange = _ref.onTypeChange;
      var start = 0;
      var end = 12;
      var monthOptions = [];
      var current = value.clone();
      var localeData = value.localeData();
      var months = [];

      for (var i = 0; i < 12; i++) {
        current.month(i);
        months.push(localeData.monthsShort(current));
      }

      for (var index = start; index < end; index++) {
        monthOptions.push(React.createElement(_antd.Select.Option, {
          className: "month-item",
          key: "".concat(index)
        }, months[index]));
      }

      var month = value.month();
      var year = value.year();
      var options = [];

      for (var _i = year - 10; _i < year + 10; _i += 1) {
        options.push(React.createElement(_antd.Select.Option, {
          key: _i,
          value: _i,
          className: "year-item"
        }, _i));
      }

      return React.createElement("div", {
        style: {
          padding: 10
        }
      }, React.createElement("div", {
        style: {
          marginBottom: '10px'
        }
      }, "Custom header "), React.createElement(_antd.Row, {
        type: "flex",
        justify: "space-between"
      }, React.createElement(_antd.Col, null, React.createElement(Group, {
        size: "small",
        onChange: function onChange(e) {
          return onTypeChange(e.target.value);
        },
        value: type
      }, React.createElement(Button, {
        value: "month"
      }, "Month"), React.createElement(Button, {
        value: "year"
      }, "Year"))), React.createElement(_antd.Col, null, React.createElement(_antd.Select, {
        size: "small",
        dropdownMatchSelectWidth: false,
        className: "my-year-select",
        onChange: function onChange(newYear) {
          var now = value.clone().year(newYear);

          _onChange(now);
        },
        value: String(year)
      }, options)), React.createElement(_antd.Col, null, React.createElement(_antd.Select, {
        size: "small",
        dropdownMatchSelectWidth: false,
        value: String(month),
        onChange: function onChange(selectedMonth) {
          var newValue = value.clone();
          newValue.month(parseInt(selectedMonth, 10));

          _onChange(newValue);
        }
      }, monthOptions))));
    },
    onPanelChange: onPanelChange
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/notice-calendar.md":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/notice-calendar.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "一个复杂的应用示例，用 ",
        [
          "code",
          "dateCellRender"
        ],
        " 和 ",
        [
          "code",
          "monthCellRender"
        ],
        " 函数来自定义需要渲染的数据。"
      ]
    ],
    "en-US": [
      [
        "p",
        "This component can be rendered by using ",
        [
          "code",
          "dateCellRender"
        ],
        " and ",
        [
          "code",
          "monthCellRender"
        ],
        " with the data you need."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "通知事项日历",
      "en-US": "Notice Calendar"
    },
    "filename": "components/calendar/demo/notice-calendar.md",
    "id": "components-calendar-demo-notice-calendar"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar<span class=\"token punctuation\">,</span> Badge <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getListData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">let</span> listData<span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">switch</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">date</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">case</span> <span class=\"token number\">8</span><span class=\"token punctuation\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is warning event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is usual event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">break</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">case</span> <span class=\"token number\">10</span><span class=\"token punctuation\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is warning event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is usual event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">break</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">case</span> <span class=\"token number\">15</span><span class=\"token punctuation\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is warning event'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is very long usual event。。....'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 1.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 2.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 3.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is error event 4.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">break</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">default</span><span class=\"token punctuation\">:</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> listData <span class=\"token operator\">||</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">dateCellRender</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> listData <span class=\"token operator\">=</span> <span class=\"token function\">getListData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ul</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>events<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">{</span>listData<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>item <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">status</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>type<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">text</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ul</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getMonthData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">month</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">8</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token number\">1394</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">monthCellRender</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> num <span class=\"token operator\">=</span> <span class=\"token function\">getMonthData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> num <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>notes-month<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>section</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>num<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>section</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>Backlog number<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Calendar</span> <span class=\"token attr-name\">dateCellRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dateCellRender<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">monthCellRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>monthCellRender<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar<span class=\"token punctuation\">,</span> Badge <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getListData</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">let</span> listData<span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">switch</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">date</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">case</span> <span class=\"token number\">8</span><span class=\"token operator\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token operator\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'This is warning event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token operator\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'This is usual event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">break</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">case</span> <span class=\"token number\">10</span><span class=\"token operator\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token operator\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'This is warning event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token operator\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'This is usual event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token operator\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'This is error event.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">break</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">case</span> <span class=\"token number\">15</span><span class=\"token operator\">:</span>\n      listData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token operator\">:</span> <span class=\"token string\">'warning'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'This is warning event'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token operator\">:</span> <span class=\"token string\">'success'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'This is very long usual event。。....'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token operator\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'This is error event 1.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token operator\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'This is error event 2.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token operator\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'This is error event 3.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span> type<span class=\"token operator\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span> content<span class=\"token operator\">:</span> <span class=\"token string\">'This is error event 4.'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">break</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">default</span><span class=\"token operator\">:</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> listData <span class=\"token operator\">||</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">dateCellRender</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> listData <span class=\"token operator\">=</span> <span class=\"token function\">getListData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ul</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>events<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">{</span>listData<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">item</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Badge</span></span> <span class=\"token attr-name\">status</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>type<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">text</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>item<span class=\"token punctuation\">.</span>content<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ul</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getMonthData</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">month</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">8</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token number\">1394</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">monthCellRender</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> num <span class=\"token operator\">=</span> <span class=\"token function\">getMonthData</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> num <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>notes-month<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>section</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>num<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>section</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>Backlog number<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> <span class=\"token keyword\">null</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Calendar</span></span> <span class=\"token attr-name\">dateCellRender</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>dateCellRender<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">monthCellRender</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>monthCellRender<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  function getListData(value) {
    var listData;

    switch (value.date()) {
      case 8:
        listData = [{
          type: 'warning',
          content: 'This is warning event.'
        }, {
          type: 'success',
          content: 'This is usual event.'
        }];
        break;

      case 10:
        listData = [{
          type: 'warning',
          content: 'This is warning event.'
        }, {
          type: 'success',
          content: 'This is usual event.'
        }, {
          type: 'error',
          content: 'This is error event.'
        }];
        break;

      case 15:
        listData = [{
          type: 'warning',
          content: 'This is warning event'
        }, {
          type: 'success',
          content: 'This is very long usual event。。....'
        }, {
          type: 'error',
          content: 'This is error event 1.'
        }, {
          type: 'error',
          content: 'This is error event 2.'
        }, {
          type: 'error',
          content: 'This is error event 3.'
        }, {
          type: 'error',
          content: 'This is error event 4.'
        }];
        break;

      default:
    }

    return listData || [];
  }

  function dateCellRender(value) {
    var listData = getListData(value);
    return React.createElement("ul", {
      className: "events"
    }, listData.map(function (item) {
      return React.createElement("li", {
        key: item.content
      }, React.createElement(_antd.Badge, {
        status: item.type,
        text: item.content
      }));
    }));
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    var num = getMonthData(value);
    return num ? React.createElement("div", {
      className: "notes-month"
    }, React.createElement("section", null, num), React.createElement("span", null, "Backlog number")) : null;
  }

  return React.createElement(_antd.Calendar, {
    dateCellRender: dateCellRender,
    monthCellRender: monthCellRender
  });
},
  "style": ".events {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.events .ant-badge-status {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  text-overflow: ellipsis;\n  font-size: 12px;\n}\n.notes-month {\n  text-align: center;\n  font-size: 28px;\n}\n.notes-month section {\n  font-size: 28px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.events</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">list-style</span><span class=\"token punctuation\">:</span> none<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">padding</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.events</span> <span class=\"token class\">.ant-badge-status</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">overflow</span><span class=\"token punctuation\">:</span> hidden<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">white-space</span><span class=\"token punctuation\">:</span> nowrap<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">100%</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">text-overflow</span><span class=\"token punctuation\">:</span> ellipsis<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.notes-month</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">text-align</span><span class=\"token punctuation\">:</span> center<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">28</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.notes-month</span> section </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">28</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/select.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/select.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "一个通用的日历面板，支持年/月切换。"
      ]
    ],
    "en-US": [
      [
        "p",
        "A basic calendar component with Year/Month switch."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "选择功能",
      "en-US": "Selectable Calendar"
    },
    "filename": "components/calendar/demo/select.md",
    "id": "components-calendar-demo-select"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar<span class=\"token punctuation\">,</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2017-01-25'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    selectedValue<span class=\"token punctuation\">:</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2017-01-25'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onSelect <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">,</span>\n      selectedValue<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onPanelChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> selectedValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Alert</span>\n          <span class=\"token attr-name\">message</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token template-string\"><span class=\"token string\">`You selected date: </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>selectedValue <span class=\"token operator\">&amp;&amp;</span> selectedValue<span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Calendar</span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onSelect</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSelect<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onPanelChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onPanelChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Calendar<span class=\"token punctuation\">,</span> Alert <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> moment <span class=\"token keyword\">from</span> <span class=\"token string\">'moment'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2017-01-25'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    selectedValue<span class=\"token operator\">:</span> <span class=\"token function\">moment</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2017-01-25'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onSelect</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      value<span class=\"token punctuation\">,</span>\n      selectedValue<span class=\"token operator\">:</span> value<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onPanelChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> selectedValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Alert</span></span>\n          <span class=\"token attr-name\">message</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">You selected date: </span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>selectedValue <span class=\"token operator\">&amp;&amp;</span> selectedValue<span class=\"token punctuation\">.</span><span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'YYYY-MM-DD'</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Calendar</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onSelect</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onSelect<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onPanelChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onPanelChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">App</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "./node_modules/moment/moment.js"));

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

  var App =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, App);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        value: (0, _moment["default"])('2017-01-25'),
        selectedValue: (0, _moment["default"])('2017-01-25')
      });

      _defineProperty(_assertThisInitialized(_this), "onSelect", function (value) {
        _this.setState({
          value: value,
          selectedValue: value
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onPanelChange", function (value) {
        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            value = _this$state.value,
            selectedValue = _this$state.selectedValue;
        return React.createElement("div", null, React.createElement(_antd.Alert, {
          message: "You selected date: ".concat(selectedValue && selectedValue.format('YYYY-MM-DD'))
        }), React.createElement(_antd.Calendar, {
          value: value,
          onSelect: this.onSelect,
          onPanelChange: this.onPanelChange
        }));
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/components-calendar-demo.index.js":
/*!********************************************************************!*\
  !*** ./node_modules/bisheng/tmp/components-calendar-demo.index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/calendar/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/basic.md"),
    'card': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/calendar/demo/card.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/card.md"),
    'customize-header': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/calendar/demo/customize-header.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/customize-header.md"),
    'notice-calendar': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/calendar/demo/notice-calendar.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/notice-calendar.md"),
    'select': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/calendar/demo/select.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/calendar/demo/select.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map