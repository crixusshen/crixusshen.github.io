(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/input/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/addon.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/addon.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "用于配置一些固定组合。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Using pre & post tabs example."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "前置/后置标签",
      "en-US": "Pre / Post tab"
    },
    "filename": "components/input/demo/addon.md",
    "id": "components-input-demo-addon"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Option <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> selectBefore <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Http://<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">90</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Http://<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Http<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Https://<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Https<span class=\"token punctuation\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> selectAfter <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.com<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">80</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.com<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>com<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.jp<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>jp<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.cn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>cn<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.org<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>org<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonBefore</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Http://<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">addonAfter</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.com<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>mysite<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonBefore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>selectBefore<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">addonAfter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>selectAfter<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>mysite<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">addonAfter={&lt;Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>setting<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span> defaultValue<span class=\"token operator\">=</span><span class=\"token string\">\"mysite\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Option <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> selectBefore <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Http://<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">90</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Http://<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Http<span class=\"token operator\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Https://<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Https<span class=\"token operator\">:</span><span class=\"token operator\">/</span><span class=\"token operator\">/</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> selectAfter <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.com<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">80</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.com<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>com<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.jp<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>jp<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.cn<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>cn<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.org<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">.</span>org<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token operator\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">addonBefore</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Http://<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">addonAfter</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.com<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>mysite<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token operator\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">addonBefore</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>selectBefore<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">addonAfter</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>selectAfter<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>mysite<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token operator\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">addonAfter</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>setting<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>mysite<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var Option = _antd.Select.Option;
  var selectBefore = React.createElement(_antd.Select, {
    defaultValue: "Http://",
    style: {
      width: 90
    }
  }, React.createElement(Option, {
    value: "Http://"
  }, "Http://"), React.createElement(Option, {
    value: "Https://"
  }, "Https://"));
  var selectAfter = React.createElement(_antd.Select, {
    defaultValue: ".com",
    style: {
      width: 80
    }
  }, React.createElement(Option, {
    value: ".com"
  }, ".com"), React.createElement(Option, {
    value: ".jp"
  }, ".jp"), React.createElement(Option, {
    value: ".cn"
  }, ".cn"), React.createElement(Option, {
    value: ".org"
  }, ".org"));
  return React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, React.createElement(_antd.Input, {
    addonBefore: "Http://",
    addonAfter: ".com",
    defaultValue: "mysite"
  })), React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, React.createElement(_antd.Input, {
    addonBefore: selectBefore,
    addonAfter: selectAfter,
    defaultValue: "mysite"
  })), React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, React.createElement(_antd.Input, {
    addonAfter: React.createElement(_antd.Icon, {
      type: "setting"
    }),
    defaultValue: "mysite"
  })));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/align.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/align.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "meta": {

  }
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/allowClear.md":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/allowClear.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "带移除图标的输入框，点击图标删除所有内容。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Input box with the remove icon, click the icon to delete everything."
      ]
    ]
  },
  "meta": {
    "order": 11,
    "title": {
      "zh-CN": "带移除图标",
      "en-US": "With clear icon"
    },
    "filename": "components/input/demo/allowClear.md",
    "id": "components-input-demo-allowClear"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> onChange <span class=\"token operator\">=</span> e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">with</span> <span class=\"token attr-name\">clear</span> <span class=\"token attr-name\">icon\"</span> <span class=\"token attr-name\">allowClear</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TextArea</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>textarea</span> <span class=\"token attr-name\">with</span> <span class=\"token attr-name\">clear</span> <span class=\"token attr-name\">icon\"</span> <span class=\"token attr-name\">allowClear</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input with clear icon<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">allowClear</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TextArea</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>textarea with clear icon<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">allowClear</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var TextArea = _antd.Input.TextArea;

  var onChange = function onChange(e) {
    console.log(e);
  };

  return React.createElement("div", null, React.createElement(_antd.Input, {
    placeholder: "input with clear icon",
    allowClear: true,
    onChange: onChange
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(TextArea, {
    placeholder: "textarea with clear icon",
    allowClear: true,
    onChange: onChange
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/autosize-textarea.md":
/*!********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/autosize-textarea.md ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        [
          "code",
          "autoSize"
        ],
        " 属性适用于 ",
        [
          "code",
          "textarea"
        ],
        " 节点，并且只有高度会自动变化。另外 ",
        [
          "code",
          "autoSize"
        ],
        " 可以设定为一个对象，指定最小行数和最大行数。"
      ],
      [
        "blockquote",
        [
          "p",
          [
            "code",
            "3.24.0"
          ],
          " 后 ",
          [
            "code",
            "autosize"
          ],
          " 被废弃，请使用 ",
          [
            "code",
            "autoSize"
          ],
          "。"
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        [
          "code",
          "autoSize"
        ],
        " prop for a ",
        [
          "code",
          "textarea"
        ],
        " type of ",
        [
          "code",
          "Input"
        ],
        " makes the height to automatically adjust based on the content. An options object can be provided to ",
        [
          "code",
          "autoSize"
        ],
        " to specify the minimum and maximum number of lines the textarea will automatically adjust."
      ],
      [
        "blockquote",
        [
          "p",
          [
            "code",
            "autosize"
          ],
          " is deprecated after ",
          [
            "code",
            "3.24.0"
          ],
          ", please use ",
          [
            "code",
            "autoSize"
          ],
          "."
        ]
      ]
    ]
  },
  "meta": {
    "order": 6,
    "title": {
      "zh-CN": "适应文本高度的文本域",
      "en-US": "Autosizing the height to fit the content"
    },
    "filename": "components/input/demo/autosize-textarea.md",
    "id": "components-input-demo-autosize-textarea"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> target<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TextArea</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Autosize</span> <span class=\"token attr-name\">height</span> <span class=\"token attr-name\">based</span> <span class=\"token attr-name\">on</span> <span class=\"token attr-name\">content</span> <span class=\"token attr-name\">lines\"</span> <span class=\"token attr-name\">autoSize</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'24px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TextArea</span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Autosize</span> <span class=\"token attr-name\">height</span> <span class=\"token attr-name\">with</span> <span class=\"token attr-name\">minimum</span> <span class=\"token attr-name\">and</span> <span class=\"token attr-name\">maximum</span> <span class=\"token attr-name\">number</span> <span class=\"token attr-name\">of</span> <span class=\"token attr-name\">lines\"</span>\n          <span class=\"token attr-name\">autoSize</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> minRows<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> maxRows<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'24px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TextArea</span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Controlled</span> <span class=\"token attr-name\">autosize\"</span>\n          <span class=\"token attr-name\">autoSize</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> minRows<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> maxRows<span class=\"token punctuation\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> target<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TextArea</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Autosize height based on content lines<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">autoSize</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token operator\">:</span> <span class=\"token string\">'24px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TextArea</span></span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Autosize height with minimum and maximum number of lines<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">autoSize</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> minRows<span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> maxRows<span class=\"token operator\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token operator\">:</span> <span class=\"token string\">'24px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TextArea</span></span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Controlled autosize<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">autoSize</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> minRows<span class=\"token operator\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> maxRows<span class=\"token operator\">:</span> <span class=\"token number\">5</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var TextArea = _antd.Input.TextArea;

  var Demo =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Demo);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        value: ''
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
        var value = _ref.target.value;

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var value = this.state.value;
        return React.createElement("div", null, React.createElement(TextArea, {
          placeholder: "Autosize height based on content lines",
          autoSize: true
        }), React.createElement("div", {
          style: {
            margin: '24px 0'
          }
        }), React.createElement(TextArea, {
          placeholder: "Autosize height with minimum and maximum number of lines",
          autoSize: {
            minRows: 2,
            maxRows: 6
          }
        }), React.createElement("div", {
          style: {
            margin: '24px 0'
          }
        }), React.createElement(TextArea, {
          value: value,
          onChange: this.onChange,
          placeholder: "Controlled autosize",
          autoSize: {
            minRows: 3,
            maxRows: 5
          }
        }));
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/basic.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/basic.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "基本使用。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Basic usage example."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本使用",
      "en-US": "Basic usage"
    },
    "filename": "components/input/demo/basic.md",
    "id": "components-input-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Basic</span> <span class=\"token attr-name\">usage\"</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Basic usage<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement(_antd.Input, {
    placeholder: "Basic usage"
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/group.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/group.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "输入框的组合展现。"
      ],
      [
        "p",
        "注意：使用 ",
        [
          "code",
          "compact"
        ],
        " 模式时，不需要通过 ",
        [
          "code",
          "Col"
        ],
        " 来控制宽度。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Input.Group example"
      ],
      [
        "p",
        "Note: You don't need ",
        [
          "code",
          "Col"
        ],
        " to control the width in the ",
        [
          "code",
          "compact"
        ],
        " mode."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "输入框组合",
      "en-US": "Input Group"
    },
    "filename": "components/input/demo/group.md",
    "id": "components-input-demo-group"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> InputNumber<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> AutoComplete<span class=\"token punctuation\">,</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> InputGroup <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Option <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">CompactDemo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      dataSource<span class=\"token punctuation\">:</span>\n        <span class=\"token operator\">!</span>value <span class=\"token operator\">||</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">>=</span> <span class=\"token number\">0</span>\n          <span class=\"token operator\">?</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n          <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>value<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">@gmail.com`</span></span><span class=\"token punctuation\">,</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>value<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">@163.com`</span></span><span class=\"token punctuation\">,</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>value<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">@qq.com`</span></span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputGroup</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span> <span class=\"token attr-name\">gutter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0571<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>26888888<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InputGroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputGroup</span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'20%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0571<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'30%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>26888888<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InputGroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputGroup</span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Zhejiang<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Zhejiang<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Zhejiang<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Jiangsu<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Jiangsu<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'50%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Xihu</span> <span class=\"token attr-name\">District,</span> <span class=\"token attr-name\">Hangzhou\"</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InputGroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputGroup</span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option1<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option2<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'50%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">content\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputNumber</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InputGroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputGroup</span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'50%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">content\"</span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>DatePicker</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'50%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InputGroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputGroup</span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option1-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option1-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option1<span class=\"token number\">-1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option1-2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option1<span class=\"token number\">-2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option2-2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option2-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option2<span class=\"token number\">-1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option2-2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option2<span class=\"token number\">-2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InputGroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputGroup</span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Between<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Except<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'center'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Minimum<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n              width<span class=\"token punctuation\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">,</span>\n              borderLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n              pointerEvents<span class=\"token punctuation\">:</span> <span class=\"token string\">'none'</span><span class=\"token punctuation\">,</span>\n              backgroundColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>~<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">disabled</span>\n          <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">'center'</span><span class=\"token punctuation\">,</span> borderLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Maximum<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InputGroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputGroup</span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sign</span> <span class=\"token attr-name\">Up\"</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sign</span> <span class=\"token attr-name\">Up\"</span><span class=\"token punctuation\">></span></span>Sign Up<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sign</span> <span class=\"token attr-name\">In\"</span><span class=\"token punctuation\">></span></span>Sign In<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AutoComplete</span>\n            <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Email<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InputGroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>InputGroup</span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'30%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Home<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Home<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Company<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Company<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'70%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Select</span> <span class=\"token attr-name\">Address\"</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>InputGroup</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CompactDemo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> InputNumber<span class=\"token punctuation\">,</span> DatePicker<span class=\"token punctuation\">,</span> AutoComplete<span class=\"token punctuation\">,</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> InputGroup <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">.</span>Group<span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Option <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">CompactDemo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    dataSource<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      dataSource<span class=\"token operator\">:</span>\n        <span class=\"token operator\">!</span>value <span class=\"token operator\">||</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'@'</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">>=</span> <span class=\"token number\">0</span>\n          <span class=\"token operator\">?</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n          <span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>value<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">@gmail.com</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">,</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>value<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">@163.com</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">,</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>value<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">@qq.com</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InputGroup</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Row</span></span> <span class=\"token attr-name\">gutter</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0571<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">8</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>26888888<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Row</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">InputGroup</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InputGroup</span></span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'20%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0571<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'30%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>26888888<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">InputGroup</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InputGroup</span></span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Zhejiang<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Zhejiang<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Zhejiang<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Jiangsu<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Jiangsu<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'50%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Xihu District, Hangzhou<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">InputGroup</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InputGroup</span></span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option1<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option2<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'50%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input content<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InputNumber</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">InputGroup</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InputGroup</span></span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'50%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input content<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">DatePicker</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'50%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">InputGroup</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InputGroup</span></span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option1-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option1-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option1<span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option1-2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option1<span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option2-2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option2-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option2<span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Option2-2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Option2<span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">InputGroup</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InputGroup</span></span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Between<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Except<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> textAlign<span class=\"token operator\">:</span> <span class=\"token string\">'center'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Minimum<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n              width<span class=\"token operator\">:</span> <span class=\"token number\">30</span><span class=\"token punctuation\">,</span>\n              borderLeft<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n              pointerEvents<span class=\"token operator\">:</span> <span class=\"token string\">'none'</span><span class=\"token punctuation\">,</span>\n              backgroundColor<span class=\"token operator\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>~<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">disabled</span>\n          <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span> textAlign<span class=\"token operator\">:</span> <span class=\"token string\">'center'</span><span class=\"token punctuation\">,</span> borderLeft<span class=\"token operator\">:</span> <span class=\"token number\">0</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Maximum<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">InputGroup</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InputGroup</span></span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sign Up<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sign Up<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Sign Up<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Sign In<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Sign In<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">AutoComplete</span></span>\n            <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>dataSource<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Email<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">InputGroup</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">InputGroup</span></span> <span class=\"token attr-name\">compact</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'30%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Home<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Home<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Home<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Company<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Company<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'70%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Select Address<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">InputGroup</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">CompactDemo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var InputGroup = _antd.Input.Group;
  var Option = _antd.Select.Option;
  var options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake'
      }]
    }]
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men'
      }]
    }]
  }];

  var CompactDemo =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(CompactDemo, _React$Component);

    function CompactDemo() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, CompactDemo);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CompactDemo)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        dataSource: []
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (value) {
        _this.setState({
          dataSource: !value || value.indexOf('@') >= 0 ? [] : ["".concat(value, "@gmail.com"), "".concat(value, "@163.com"), "".concat(value, "@qq.com")]
        });
      });

      return _this;
    }

    _createClass(CompactDemo, [{
      key: "render",
      value: function render() {
        return React.createElement("div", null, React.createElement(InputGroup, {
          size: "large"
        }, React.createElement(_antd.Row, {
          gutter: 8
        }, React.createElement(_antd.Col, {
          span: 5
        }, React.createElement(_antd.Input, {
          defaultValue: "0571"
        })), React.createElement(_antd.Col, {
          span: 8
        }, React.createElement(_antd.Input, {
          defaultValue: "26888888"
        })))), React.createElement("br", null), React.createElement(InputGroup, {
          compact: true
        }, React.createElement(_antd.Input, {
          style: {
            width: '20%'
          },
          defaultValue: "0571"
        }), React.createElement(_antd.Input, {
          style: {
            width: '30%'
          },
          defaultValue: "26888888"
        })), React.createElement("br", null), React.createElement(InputGroup, {
          compact: true
        }, React.createElement(_antd.Select, {
          defaultValue: "Zhejiang"
        }, React.createElement(Option, {
          value: "Zhejiang"
        }, "Zhejiang"), React.createElement(Option, {
          value: "Jiangsu"
        }, "Jiangsu")), React.createElement(_antd.Input, {
          style: {
            width: '50%'
          },
          defaultValue: "Xihu District, Hangzhou"
        })), React.createElement("br", null), React.createElement(InputGroup, {
          compact: true
        }, React.createElement(_antd.Select, {
          defaultValue: "Option1"
        }, React.createElement(Option, {
          value: "Option1"
        }, "Option1"), React.createElement(Option, {
          value: "Option2"
        }, "Option2")), React.createElement(_antd.Input, {
          style: {
            width: '50%'
          },
          defaultValue: "input content"
        }), React.createElement(_antd.InputNumber, null)), React.createElement("br", null), React.createElement(InputGroup, {
          compact: true
        }, React.createElement(_antd.Input, {
          style: {
            width: '50%'
          },
          defaultValue: "input content"
        }), React.createElement(_antd.DatePicker, {
          style: {
            width: '50%'
          }
        })), React.createElement("br", null), React.createElement(InputGroup, {
          compact: true
        }, React.createElement(_antd.Select, {
          defaultValue: "Option1-1"
        }, React.createElement(Option, {
          value: "Option1-1"
        }, "Option1-1"), React.createElement(Option, {
          value: "Option1-2"
        }, "Option1-2")), React.createElement(_antd.Select, {
          defaultValue: "Option2-2"
        }, React.createElement(Option, {
          value: "Option2-1"
        }, "Option2-1"), React.createElement(Option, {
          value: "Option2-2"
        }, "Option2-2"))), React.createElement("br", null), React.createElement(InputGroup, {
          compact: true
        }, React.createElement(_antd.Select, {
          defaultValue: "1"
        }, React.createElement(Option, {
          value: "1"
        }, "Between"), React.createElement(Option, {
          value: "2"
        }, "Except")), React.createElement(_antd.Input, {
          style: {
            width: 100,
            textAlign: 'center'
          },
          placeholder: "Minimum"
        }), React.createElement(_antd.Input, {
          style: {
            width: 30,
            borderLeft: 0,
            pointerEvents: 'none',
            backgroundColor: '#fff'
          },
          placeholder: "~",
          disabled: true
        }), React.createElement(_antd.Input, {
          style: {
            width: 100,
            textAlign: 'center',
            borderLeft: 0
          },
          placeholder: "Maximum"
        })), React.createElement("br", null), React.createElement(InputGroup, {
          compact: true
        }, React.createElement(_antd.Select, {
          defaultValue: "Sign Up"
        }, React.createElement(Option, {
          value: "Sign Up"
        }, "Sign Up"), React.createElement(Option, {
          value: "Sign In"
        }, "Sign In")), React.createElement(_antd.AutoComplete, {
          dataSource: this.state.dataSource,
          style: {
            width: 200
          },
          onChange: this.handleChange,
          placeholder: "Email"
        })), React.createElement("br", null), React.createElement(InputGroup, {
          compact: true
        }, React.createElement(_antd.Select, {
          style: {
            width: '30%'
          },
          defaultValue: "Home"
        }, React.createElement(Option, {
          value: "Home"
        }, "Home"), React.createElement(Option, {
          value: "Company"
        }, "Company")), React.createElement(_antd.Cascader, {
          style: {
            width: '70%'
          },
          options: options,
          placeholder: "Select Address"
        })));
      }
    }]);

    return CompactDemo;
  }(React.Component);

  return React.createElement(CompactDemo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-advise.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-advise.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "根据输入内容提供对应的输入建议。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 11,
    "title": {
      "zh-CN": "带输入建议",
      "en-US": null
    },
    "filename": "components/input/demo/orient-advise.md",
    "id": "components-input-demo-orient-advise"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> AutoComplete <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"onSelect\"</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token string\">\"三全鲜食（北新泾店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Hot honey 首尔炸鸡（仙霞路）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"新旺角茶餐厅\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"泷千家(天山西路店)\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"贡茶\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"豪大大香鸡排超级奶爸\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"茶芝兰（奶茶，手抓饼）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"十二泷町\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"星移浓缩咖啡\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"阿姨奶茶/豪大大\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"新麦甜四季甜品炸鸡\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Monica摩托主题咖啡店\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"浮生若茶（凌空soho店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"CoCo都可(北新泾店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"NONO JUICE  鲜榨果汁\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"快乐柠檬（神州智慧店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Merci Paul cafe\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"猫山王（西郊百联店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"枪会山\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"纵食\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"钱记\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"壹杯加\"</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Complete</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    dataSourceOne<span class=\"token punctuation\">:</span> dataSource<span class=\"token punctuation\">,</span>\n    dataSourceTwo<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleSearch <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      dataSourceTwo<span class=\"token punctuation\">:</span> dataSource\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleKeyPress <span class=\"token operator\">=</span> ev <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"handleKeyPress\"</span><span class=\"token punctuation\">,</span> ev<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> dataSourceOne<span class=\"token punctuation\">,</span> dataSourceTwo <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-inputAdvise<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Row</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub-title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>激活即列出输入建议<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AutoComplete</span>\n              <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dataSourceOne<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">filterOption</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n                option<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>children\n                  <span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n                  <span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">!==</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span>\n              <span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n                <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token attr-name\">onKeyPress</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleKeyPress<span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n                allowClear\n              <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>AutoComplete</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Col</span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub-title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>输入后匹配输入建议<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AutoComplete</span>\n              <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dataSourceTwo<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">onSelect</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onSelect<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">onSearch</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSearch<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">filterOption</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n                option<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>children\n                  <span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n                  <span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">!==</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span>\n              <span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n                <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token attr-name\">onKeyPress</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleKeyPress<span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n                allowClear\n              <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>AutoComplete</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Col</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Row</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Complete</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Row<span class=\"token punctuation\">,</span> Col<span class=\"token punctuation\">,</span> AutoComplete <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onSelect</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"onSelect\"</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token string\">\"三全鲜食（北新泾店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Hot honey 首尔炸鸡（仙霞路）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"新旺角茶餐厅\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"泷千家(天山西路店)\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"贡茶\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"豪大大香鸡排超级奶爸\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"茶芝兰（奶茶，手抓饼）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"十二泷町\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"星移浓缩咖啡\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"阿姨奶茶/豪大大\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"新麦甜四季甜品炸鸡\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Monica摩托主题咖啡店\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"浮生若茶（凌空soho店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"CoCo都可(北新泾店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"NONO JUICE  鲜榨果汁\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"快乐柠檬（神州智慧店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Merci Paul cafe\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"猫山王（西郊百联店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"枪会山\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"纵食\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"钱记\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"壹杯加\"</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Complete</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    dataSourceOne<span class=\"token operator\">:</span> dataSource<span class=\"token punctuation\">,</span>\n    dataSourceTwo<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleSearch</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      dataSourceTwo<span class=\"token operator\">:</span> dataSource\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleKeyPress</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">ev</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"handleKeyPress\"</span><span class=\"token punctuation\">,</span> ev<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> dataSourceOne<span class=\"token punctuation\">,</span> dataSourceTwo <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-inputAdvise<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Row</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub-title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>激活即列出输入建议<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">AutoComplete</span></span>\n              <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>dataSourceOne<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">filterOption</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">inputValue<span class=\"token punctuation\">,</span> option</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span>\n                option<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>children\n                  <span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n                  <span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">!==</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span>\n              <span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n                <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token attr-name\">onKeyPress</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleKeyPress<span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">allowClear</span>\n              <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">AutoComplete</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Col</span></span> <span class=\"token attr-name\">span</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">12</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sub-title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>输入后匹配输入建议<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">AutoComplete</span></span>\n              <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>dataSourceTwo<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">onSelect</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onSelect<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">onSearch</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSearch<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">filterOption</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">inputValue<span class=\"token punctuation\">,</span> option</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span>\n                option<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>children\n                  <span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n                  <span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">.</span><span class=\"token function\">toUpperCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">!==</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span>\n              <span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n                <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token attr-name\">onKeyPress</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleKeyPress<span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n                <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n                <span class=\"token attr-name\">allowClear</span>\n              <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">AutoComplete</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Col</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Row</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Complete</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

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

  function onSelect(value) {
    console.log("onSelect", value);
  }

  var dataSource = ["三全鲜食（北新泾店）", "Hot honey 首尔炸鸡（仙霞路）", "新旺角茶餐厅", "泷千家(天山西路店)", "贡茶", "豪大大香鸡排超级奶爸", "茶芝兰（奶茶，手抓饼）", "十二泷町", "星移浓缩咖啡", "阿姨奶茶/豪大大", "新麦甜四季甜品炸鸡", "Monica摩托主题咖啡店", "浮生若茶（凌空soho店）", "CoCo都可(北新泾店）", "NONO JUICE  鲜榨果汁", "快乐柠檬（神州智慧店）", "Merci Paul cafe", "猫山王（西郊百联店）", "枪会山", "纵食", "钱记", "壹杯加"];

  var Complete =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Complete, _React$Component);

    function Complete() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Complete);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Complete)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        dataSourceOne: dataSource,
        dataSourceTwo: []
      });

      _defineProperty(_assertThisInitialized(_this), "handleSearch", function (value) {
        _this.setState({
          dataSourceTwo: dataSource
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (ev) {
        console.log("handleKeyPress", ev);
      });

      return _this;
    }

    _createClass(Complete, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            dataSourceOne = _this$state.dataSourceOne,
            dataSourceTwo = _this$state.dataSourceTwo;
        return React.createElement("div", {
          "class": "demo-inputAdvise"
        }, React.createElement(_chiyou.Row, null, React.createElement(_chiyou.Col, {
          span: 12
        }, React.createElement("div", {
          "class": "sub-title"
        }, "\u6FC0\u6D3B\u5373\u5217\u51FA\u8F93\u5165\u5EFA\u8BAE"), React.createElement(_chiyou.AutoComplete, {
          dropdownMatchSelectWidth: false,
          dataSource: dataSourceOne,
          filterOption: function filterOption(inputValue, option) {
            return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
          }
        }, React.createElement(_chiyou.Input, {
          className: "custom",
          onKeyPress: this.handleKeyPress,
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          prefix: React.createElement(_chiyou.Icon, {
            type: "search",
            style: {
              color: "#8b9be1"
            }
          }),
          allowClear: true
        }))), React.createElement(_chiyou.Col, {
          span: 12
        }, React.createElement("div", {
          "class": "sub-title"
        }, "\u8F93\u5165\u540E\u5339\u914D\u8F93\u5165\u5EFA\u8BAE"), React.createElement(_chiyou.AutoComplete, {
          dropdownMatchSelectWidth: false,
          dataSource: dataSourceTwo,
          onSelect: onSelect,
          onSearch: this.handleSearch,
          filterOption: function filterOption(inputValue, option) {
            return option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1;
          }
        }, React.createElement(_chiyou.Input, {
          className: "custom",
          onKeyPress: this.handleKeyPress,
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          prefix: React.createElement(_chiyou.Icon, {
            type: "search",
            style: {
              color: "#8b9be1"
            }
          }),
          allowClear: true
        })))));
      }
    }]);

    return Complete;
  }(React.Component);

  return React.createElement(Complete, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-basic.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-basic.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "常用的基础输入框。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基础输入框",
      "en-US": null
    },
    "filename": "components/input/demo/orient-basic.md",
    "id": "components-input-demo-orient-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">allowClear</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">allowClear</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  return React.createElement("div", null, React.createElement("div", {
    "class": "df-input"
  }, React.createElement(_chiyou.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
    allowClear: true
  })));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-complex.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-complex.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可前置或后置元素，一般为标签或按钮。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 9,
    "title": {
      "zh-CN": "复合型输入框",
      "en-US": null
    },
    "filename": "components/input/demo/orient-complex.md",
    "id": "components-input-demo-orient-complex"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Option <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> selectBefore <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Select</span>\n    <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>上海<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">87</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请选择<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">allowClear</span>\n    <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>上海<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>上海<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>北京<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>北京<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>杭州<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>杭州<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Select</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">380</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n        <span class=\"token attr-name\">addonBefore</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Http://<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">addonAfter</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.com<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">allowClear</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inputComplex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">430</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n        <span class=\"token attr-name\">addonBefore</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>selectBefore<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">addonAfter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> 搜索地址\n          <span class=\"token operator\">&lt;</span><span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">allowClear</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Select<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Option <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Select<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> selectBefore <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Select</span></span>\n    <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>上海<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">87</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请选择<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">allowClear</span>\n    <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>上海<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>上海<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>北京<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>北京<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>杭州<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>杭州<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Select</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token operator\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> width<span class=\"token operator\">:</span> <span class=\"token number\">380</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n        <span class=\"token attr-name\">addonBefore</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Http://<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">addonAfter</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>.com<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">allowClear</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inputComplex<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token operator\">:</span> <span class=\"token number\">16</span><span class=\"token punctuation\">,</span> width<span class=\"token operator\">:</span> <span class=\"token number\">430</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n        <span class=\"token attr-name\">addonBefore</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>selectBefore<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">addonAfter</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> 搜索地址\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">defaultValue</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span><span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">allowClear</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  var Option = _chiyou.Select.Option;
  var selectBefore = React.createElement(_chiyou.Select, {
    defaultValue: "\u4E0A\u6D77",
    style: {
      width: 87
    },
    placeholder: "\u8BF7\u9009\u62E9",
    allowClear: true,
    dropdownMatchSelectWidth: false
  }, React.createElement(Option, {
    value: "\u4E0A\u6D77"
  }, "\u4E0A\u6D77"), React.createElement(Option, {
    value: "\u5317\u4EAC"
  }, "\u5317\u4EAC"), React.createElement(Option, {
    value: "\u676D\u5DDE"
  }, "\u676D\u5DDE"));
  return React.createElement("div", null, React.createElement("div", {
    style: {
      marginBottom: 16,
      width: 380
    }
  }, React.createElement(_chiyou.Input, {
    addonBefore: "Http://",
    addonAfter: ".com",
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
    defaultValue: "",
    allowClear: true
  })), React.createElement("div", {
    "class": "inputComplex",
    style: {
      marginBottom: 16,
      width: 430
    }
  }, React.createElement(_chiyou.Input, {
    addonBefore: selectBefore,
    addonAfter: React.createElement(React.Fragment, null, React.createElement(_chiyou.Icon, {
      type: "search"
    }), " \u641C\u7D22\u5730\u5740"),
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
    defaultValue: "",
    allowClear: true
  })));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-custom.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-custom.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可自定义输入建议的显示。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 12,
    "title": {
      "zh-CN": "自定义模板",
      "en-US": null
    },
    "filename": "components/input/demo/orient-custom.md",
    "id": "components-input-demo-orient-custom"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> AutoComplete <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Option<span class=\"token punctuation\">,</span> OptGroup <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> AutoComplete<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三全鲜食（北新泾店）\"</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">\"长宁区新渔路144号\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Hot honey 首尔炸鸡（仙霞路）\"</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">\"上海市长宁区淞虹路661号\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"新旺角茶餐厅\"</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token punctuation\">:</span> <span class=\"token string\">\"上海市普陀区真北路988号创邑金沙谷6号楼113\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> dataSource<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>opt <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Option</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>opt<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>opt<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>certain-search-item-name<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>opt<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>certain-search-item-address<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>opt<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Option</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Complete</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    dataSource<span class=\"token punctuation\">:</span> options\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleKeyPress <span class=\"token operator\">=</span> ev <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"handleKeyPress\"</span><span class=\"token punctuation\">,</span> ev<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> dataSource <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>certain-category-search-wrapper<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">250</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AutoComplete</span>\n          <span class=\"token attr-name\">dropdownClassName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom-certain-category-search-dropdown<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">300</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">\"100%\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dataSource<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">optionLabelProp</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>value<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">onKeyPress</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleKeyPress<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n            allowClear\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>AutoComplete</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Complete</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> AutoComplete <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Option<span class=\"token punctuation\">,</span> OptGroup <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> AutoComplete<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> dataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"三全鲜食（北新泾店）\"</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token operator\">:</span> <span class=\"token string\">\"长宁区新渔路144号\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"Hot honey 首尔炸鸡（仙霞路）\"</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token operator\">:</span> <span class=\"token string\">\"上海市长宁区淞虹路661号\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"新旺角茶餐厅\"</span><span class=\"token punctuation\">,</span>\n    address<span class=\"token operator\">:</span> <span class=\"token string\">\"上海市普陀区真北路988号创邑金沙谷6号楼113\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> dataSource<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">opt</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Option</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>opt<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>opt<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>certain-search-item-name<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>opt<span class=\"token punctuation\">.</span>title<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>certain-search-item-address<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>opt<span class=\"token punctuation\">.</span>address<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Option</span></span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Complete</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    dataSource<span class=\"token operator\">:</span> options\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleKeyPress</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">ev</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"handleKeyPress\"</span><span class=\"token punctuation\">,</span> ev<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> dataSource <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>certain-category-search-wrapper<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">250</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">AutoComplete</span></span>\n          <span class=\"token attr-name\">dropdownClassName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom-certain-category-search-dropdown<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">dropdownMatchSelectWidth</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">300</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">\"100%\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>dataSource<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">optionLabelProp</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>value<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>custom<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">onKeyPress</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleKeyPress<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">allowClear</span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">AutoComplete</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Complete</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

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

  var Option = _chiyou.AutoComplete.Option,
      OptGroup = _chiyou.AutoComplete.OptGroup;
  var dataSource = [{
    title: "三全鲜食（北新泾店）",
    address: "长宁区新渔路144号"
  }, {
    title: "Hot honey 首尔炸鸡（仙霞路）",
    address: "上海市长宁区淞虹路661号"
  }, {
    title: "新旺角茶餐厅",
    address: "上海市普陀区真北路988号创邑金沙谷6号楼113"
  }];
  var options = dataSource.map(function (opt) {
    return React.createElement(Option, {
      key: opt.title,
      value: opt.title
    }, React.createElement("div", {
      className: "certain-search-item-name"
    }, opt.title), React.createElement("div", {
      className: "certain-search-item-address"
    }, opt.address));
  });

  var Complete =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Complete, _React$Component);

    function Complete() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Complete);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Complete)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        dataSource: options
      });

      _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (ev) {
        console.log("handleKeyPress", ev);
      });

      return _this;
    }

    _createClass(Complete, [{
      key: "render",
      value: function render() {
        var dataSource = this.state.dataSource;
        return React.createElement("div", {
          className: "certain-category-search-wrapper",
          style: {
            width: 250
          }
        }, React.createElement(_chiyou.AutoComplete, {
          dropdownClassName: "custom-certain-category-search-dropdown",
          dropdownMatchSelectWidth: false,
          dropdownStyle: {
            width: 300
          },
          style: {
            width: "100%"
          },
          dataSource: dataSource,
          optionLabelProp: "value"
        }, React.createElement(_chiyou.Input, {
          style: {
            width: 180
          },
          className: "custom",
          onKeyPress: this.handleKeyPress,
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          prefix: React.createElement(_chiyou.Icon, {
            type: "search",
            style: {
              color: "#8b9be1"
            }
          }),
          allowClear: true
        })));
      }
    }]);

    return Complete;
  }(React.Component);

  return React.createElement(Complete, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-disabled.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-disabled.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "输入框不可用状态。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "禁用状态",
      "en-US": null
    },
    "filename": "components/input/demo/orient-disabled.md",
    "id": "components-input-demo-orient-disabled"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> onChange <span class=\"token operator\">=</span> e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">allowClear</span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">allowClear</span> <span class=\"token attr-name\">disabled</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  var onChange = function onChange(e) {
    console.log(e);
  };

  return React.createElement("div", null, React.createElement("div", {
    "class": "df-input"
  }, React.createElement(_chiyou.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
    allowClear: true,
    disabled: true
  })));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-icon.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-icon.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "带图标标记输入框。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "图标输入框",
      "en-US": null
    },
    "filename": "components/input/demo/orient-icon.md",
    "id": "components-input-demo-orient-icon"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// 外链接 - 图标</span>\n<span class=\"token keyword\">const</span> IconFont <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  scriptUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">\"//at.alicdn.com/t/font_1583601_dj6hahr8349.js\"</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-text</span> <span class=\"token attr-name\">df-left\"</span><span class=\"token punctuation\">></span></span>属性方式：<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input</span> <span class=\"token attr-name\">df-margin-right\"</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>IconFont type<span class=\"token operator\">=</span><span class=\"token string\">\"icon-date\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n        allowClear\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input</span> <span class=\"token attr-name\">df-margin-right\"</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>IconFont type<span class=\"token operator\">=</span><span class=\"token string\">\"icon-search\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n        allowClear\n      <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// 外链接 - 图标</span>\n<span class=\"token keyword\">const</span> IconFont <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  scriptUrl<span class=\"token operator\">:</span> <span class=\"token string\">\"//at.alicdn.com/t/font_1583601_dj6hahr8349.js\"</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-text df-left<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>属性方式：<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input df-margin-right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">IconFont</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icon-date<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">allowClear</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input df-margin-right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">IconFont</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icon-search<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">allowClear</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  // 外链接 - 图标
  var IconFont = _chiyou.Icon.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1583601_dj6hahr8349.js"
  });

  return React.createElement("div", null, React.createElement("div", {
    "class": "df-text df-left"
  }, "\u5C5E\u6027\u65B9\u5F0F\uFF1A"), React.createElement("div", {
    "class": "df-input df-margin-right"
  }, React.createElement(_chiyou.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
    prefix: React.createElement(IconFont, {
      type: "icon-date",
      style: {
        color: "#8b9be1"
      }
    }),
    allowClear: true
  })), React.createElement("div", {
    "class": "df-input df-margin-right"
  }, React.createElement(_chiyou.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
    prefix: React.createElement(IconFont, {
      type: "icon-search",
      style: {
        color: "#8b9be1"
      }
    }),
    allowClear: true
  })));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-maxcount.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-maxcount.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通过设置 maxCount 属性,限制文本域字数。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 8,
    "title": {
      "zh-CN": "可限制字数的文本域",
      "en-US": null
    },
    "filename": "components/input/demo/orient-maxcount.md",
    "id": "components-input-demo-orient-maxcount"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TextArea</span>\n    <span class=\"token attr-name\">rows</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">4</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">414</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">maxCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">80</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TextArea</span></span>\n    <span class=\"token attr-name\">rows</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">4</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">414</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">maxCount</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">80</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  var TextArea = _chiyou.Input.TextArea;
  return React.createElement(TextArea, {
    rows: 4,
    style: {
      width: 414
    },
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
    maxCount: 80
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-money.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-money.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "专门用来输入数字金额的输入框，输入时显示金额大写汉字。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "金额输入框",
      "en-US": null
    },
    "filename": "components/input/demo/orient-money.md",
    "id": "components-input-demo-orient-money"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">showMoney</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>console<span class=\"token punctuation\">.</span>log<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">showMoney</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>console<span class=\"token punctuation\">.</span>log<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  return React.createElement(_chiyou.Input, {
    showMoney: true,
    style: {
      width: 180
    },
    onChange: console.log
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-number.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-number.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "专门用来输入数字的输入框。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "数字输入框",
      "en-US": null
    },
    "filename": "components/input/demo/orient-number.md",
    "id": "components-input-demo-orient-number"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">showNumber</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>console<span class=\"token punctuation\">.</span>log<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">showNumber</span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>console<span class=\"token punctuation\">.</span>log<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  return React.createElement(_chiyou.Input, {
    showNumber: true,
    onChange: console.log,
    style: {
      width: 180
    }
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-password.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-password.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "常用的密码输入框，输入内容可切换明/暗文。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "密码输入框",
      "en-US": null
    },
    "filename": "components/input/demo/orient-password.md",
    "id": "components-input-demo-orient-password"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input.Password</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入密码<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input.Password</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入密码<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  return React.createElement("div", null, React.createElement("div", {
    "class": "df-input"
  }, React.createElement(_chiyou.Input.Password, {
    placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801"
  })));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-search.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-search.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "从服务端搜索数据。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 13,
    "title": {
      "zh-CN": "远程搜索",
      "en-US": null
    },
    "filename": "components/input/demo/orient-search.md",
    "id": "components-input-demo-orient-search"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> AutoComplete<span class=\"token punctuation\">,</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> keyDataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token string\">\"三全鲜食（北新泾店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Hot honey 首尔炸鸡（仙霞路）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"新旺角茶餐厅\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"泷千家(天山西路店)\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"胖仙女纸杯蛋糕（上海凌空店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"贡茶\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"豪大大香鸡排超级奶爸\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"茶芝兰（奶茶，手抓饼）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"十二泷町\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"星移浓缩咖啡\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"阿姨奶茶/豪大大\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"新麦甜四季甜品炸鸡\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Monica摩托主题咖啡店\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"浮生若茶（凌空soho店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"NONO JUICE  鲜榨果汁\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"CoCo都可(北新泾店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"快乐柠檬（神州智慧店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Merci Paul cafe\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"猫山王（西郊百联店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"枪会山\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"纵食\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"钱记\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"壹杯加\"</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    dataVal<span class=\"token punctuation\">:</span> <span class=\"token string\">\"\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleFocus <span class=\"token operator\">=</span> ev <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        dataSource<span class=\"token punctuation\">:</span> keyDataSource\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">ceil</span><span class=\"token punctuation\">(</span>Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleDropdownVisibleChange <span class=\"token operator\">=</span> open <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>open<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          dataSource<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">50</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> dataSource <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> indicatorIcon <span class=\"token operator\">=</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>loading<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">spin</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input</span> <span class=\"token attr-name\">df-margin-right\"</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AutoComplete</span>\n          <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>dataSource<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onSearch</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSearch<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">notFoundContent</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>\n            <span class=\"token operator\">&lt;</span>div style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> textAlign<span class=\"token punctuation\">:</span> <span class=\"token string\">\"center\"</span><span class=\"token punctuation\">,</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Spin</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">indicator</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>indicatorIcon<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token punctuation\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>加载中<span class=\"token operator\">...</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">}</span>\n          onDropdownVisibleChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleDropdownVisibleChange<span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n            <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"search\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n            onFocus<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleFocus<span class=\"token punctuation\">}</span>\n            allowClear\n          <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>AutoComplete</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> AutoComplete<span class=\"token punctuation\">,</span> Spin <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> keyDataSource <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token string\">\"三全鲜食（北新泾店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Hot honey 首尔炸鸡（仙霞路）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"新旺角茶餐厅\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"泷千家(天山西路店)\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"胖仙女纸杯蛋糕（上海凌空店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"贡茶\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"豪大大香鸡排超级奶爸\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"茶芝兰（奶茶，手抓饼）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"十二泷町\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"星移浓缩咖啡\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"阿姨奶茶/豪大大\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"新麦甜四季甜品炸鸡\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Monica摩托主题咖啡店\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"浮生若茶（凌空soho店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"NONO JUICE  鲜榨果汁\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"CoCo都可(北新泾店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"快乐柠檬（神州智慧店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"Merci Paul cafe\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"猫山王（西郊百联店）\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"枪会山\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"纵食\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"钱记\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">\"壹杯加\"</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">App</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    dataSource<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    dataVal<span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleFocus</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">ev</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        dataSource<span class=\"token operator\">:</span> keyDataSource\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">ceil</span><span class=\"token punctuation\">(</span>Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">2000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleDropdownVisibleChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">open</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>open<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          dataSource<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">50</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> dataSource <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> indicatorIcon <span class=\"token operator\">=</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>loading<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token operator\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">spin</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-input df-margin-right<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">AutoComplete</span></span>\n          <span class=\"token attr-name\">dataSource</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>dataSource<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onSearch</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSearch<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">notFoundContent</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> textAlign<span class=\"token operator\">:</span> <span class=\"token string\">\"center\"</span><span class=\"token punctuation\">,</span> fontSize<span class=\"token operator\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Spin</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">indicator</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>indicatorIcon<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n              <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginLeft<span class=\"token operator\">:</span> <span class=\"token number\">10</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>加载中<span class=\"token operator\">...</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onDropdownVisibleChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleDropdownVisibleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n            <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>search<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onFocus</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleFocus<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">allowClear</span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">AutoComplete</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">App</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

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

  var keyDataSource = ["三全鲜食（北新泾店）", "Hot honey 首尔炸鸡（仙霞路）", "新旺角茶餐厅", "泷千家(天山西路店)", "胖仙女纸杯蛋糕（上海凌空店）", "贡茶", "豪大大香鸡排超级奶爸", "茶芝兰（奶茶，手抓饼）", "十二泷町", "星移浓缩咖啡", "阿姨奶茶/豪大大", "新麦甜四季甜品炸鸡", "Monica摩托主题咖啡店", "浮生若茶（凌空soho店）", "NONO JUICE  鲜榨果汁", "CoCo都可(北新泾店）", "快乐柠檬（神州智慧店）", "Merci Paul cafe", "猫山王（西郊百联店）", "枪会山", "纵食", "钱记", "壹杯加"];

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
        dataSource: [],
        dataVal: ""
      });

      _defineProperty(_assertThisInitialized(_this), "handleFocus", function (ev) {
        setTimeout(function () {
          _this.setState({
            dataSource: keyDataSource
          });
        }, Math.ceil(Math.random() * 2000));
      });

      _defineProperty(_assertThisInitialized(_this), "handleDropdownVisibleChange", function (open) {
        if (!open) {
          setTimeout(function () {
            _this.setState({
              dataSource: []
            });
          }, 50);
        }
      });

      return _this;
    }

    _createClass(App, [{
      key: "render",
      value: function render() {
        var dataSource = this.state.dataSource;
        var indicatorIcon = React.createElement(_chiyou.Icon, {
          type: "loading",
          style: {
            fontSize: 16
          },
          spin: true
        });
        return React.createElement("div", {
          "class": "df-input df-margin-right"
        }, React.createElement(_chiyou.AutoComplete, {
          dataSource: dataSource,
          style: {
            width: 200
          },
          onSearch: this.handleSearch,
          notFoundContent: React.createElement("div", {
            style: {
              textAlign: "center",
              fontSize: 10
            }
          }, React.createElement(_chiyou.Spin, {
            size: "small",
            indicator: indicatorIcon
          }), React.createElement("span", {
            style: {
              marginLeft: 10
            }
          }, "\u52A0\u8F7D\u4E2D...")),
          onDropdownVisibleChange: this.handleDropdownVisibleChange
        }, React.createElement(_chiyou.Input, {
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          prefix: React.createElement(_chiyou.Icon, {
            type: "search",
            style: {
              color: "#8b9be1"
            }
          }),
          onFocus: this.handleFocus,
          allowClear: true
        })));
      }
    }]);

    return App;
  }(React.Component);

  return React.createElement(App, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-size.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-size.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "按钮分为大中小三种尺寸，默认使用中号。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 10,
    "title": {
      "zh-CN": "不同尺寸",
      "en-US": null
    },
    "filename": "components/input/demo/orient-size.md",
    "id": "components-input-demo-orient-size"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example-input<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example-input<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  return React.createElement("div", {
    className: "example-input"
  }, React.createElement(_chiyou.Input, {
    size: "large",
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
  }), React.createElement(_chiyou.Input, {
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
  }), React.createElement(_chiyou.Input, {
    size: "small",
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-texarea.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-texarea.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "用于输入多行文本信息，通过将 type 属性的值指定为 textarea。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 6,
    "title": {
      "zh-CN": "文本域",
      "en-US": null
    },
    "filename": "components/input/demo/orient-texarea.md",
    "id": "components-input-demo-orient-texarea"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-textarea<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TextArea</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>demo-textarea<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TextArea</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

  var TextArea = _chiyou.Input.TextArea;
  return React.createElement("div", {
    "class": "demo-textarea"
  }, React.createElement(TextArea, {
    placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9"
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-texareaAutosize.md":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-texareaAutosize.md ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通过设置 autosize 属性可以使得文本域的高度能够根据文本内容自动进行调整，并且 autosize 还可以设定为一个对象，指定最小行数和最大行数。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 7,
    "title": {
      "zh-CN": "可自适应文本高度的文本域",
      "en-US": null
    },
    "filename": "components/input/demo/orient-texareaAutosize.md",
    "id": "components-input-demo-orient-texareaAutosize"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> target<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TextArea</span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">autoSize</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> minRows<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">414</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">\"24px 0\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TextArea</span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">autoSize</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> minRows<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span> maxRows<span class=\"token punctuation\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">414</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"chiyou\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> target<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TextArea</span></span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">autoSize</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> minRows<span class=\"token operator\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">414</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token operator\">:</span> <span class=\"token string\">\"24px 0\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TextArea</span></span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>value<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请输入内容<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">autoSize</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> minRows<span class=\"token operator\">:</span> <span class=\"token number\">4</span><span class=\"token punctuation\">,</span> maxRows<span class=\"token operator\">:</span> <span class=\"token number\">6</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">414</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _chiyou = __webpack_require__(/*! chiyou */ "./node_modules/chiyou/dist/index.esm.js");

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

  var TextArea = _chiyou.Input.TextArea;

  var Demo =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Demo, _React$Component);

    function Demo() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Demo);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Demo)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        value: ""
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref) {
        var value = _ref.target.value;

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var value = this.state.value;
        return React.createElement("div", null, React.createElement(TextArea, {
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          autoSize: {
            minRows: 4
          },
          style: {
            width: 414
          }
        }), React.createElement("div", {
          style: {
            margin: "24px 0"
          }
        }), React.createElement(TextArea, {
          value: value,
          onChange: this.onChange,
          placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
          autoSize: {
            minRows: 4,
            maxRows: 6
          },
          style: {
            width: 414
          }
        }));
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/password-input.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/password-input.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "密码框，版本 3.12.0 中新增。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Input type of password and added in 3.12.0."
      ]
    ]
  },
  "meta": {
    "order": 10,
    "title": {
      "zh-CN": "密码框",
      "en-US": "Password box"
    },
    "filename": "components/input/demo/password-input.md",
    "id": "components-input-demo-password-input"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input.Password</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">password\"</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input.Password</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input password<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement(_antd.Input.Password, {
    placeholder: "input password"
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/presuffix.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/presuffix.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "在输入框上添加前缀或后缀图标。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Add prefix or suffix icons inside input."
      ]
    ]
  },
  "meta": {
    "order": 8,
    "title": {
      "zh-CN": "前缀和后缀",
      "en-US": "prefix and suffix"
    },
    "filename": "components/input/demo/presuffix.md",
    "id": "components-input-demo-presuffix"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n      <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Enter</span> <span class=\"token attr-name\">your</span> <span class=\"token attr-name\">username\"</span>\n      <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"user\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'rgba(0,0,0,.25)'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n      suffix<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Extra</span> <span class=\"token attr-name\">information\"</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info-circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'rgba(0,0,0,.45)'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">prefix</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>￥<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">suffix</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>RMB<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n      <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Enter your username<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>user<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">'rgba(0,0,0,.25)'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">suffix</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tooltip</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Extra information<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>info-circle<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">'rgba(0,0,0,.45)'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tooltip</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">prefix</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>￥<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">suffix</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>RMB<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement("div", null, React.createElement(_antd.Input, {
    placeholder: "Enter your username",
    prefix: React.createElement(_antd.Icon, {
      type: "user",
      style: {
        color: 'rgba(0,0,0,.25)'
      }
    }),
    suffix: React.createElement(_antd.Tooltip, {
      title: "Extra information"
    }, React.createElement(_antd.Icon, {
      type: "info-circle",
      style: {
        color: 'rgba(0,0,0,.45)'
      }
    }))
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(_antd.Input, {
    prefix: "\uFFE5",
    suffix: "RMB"
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/search-input-loading.md":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/search-input-loading.md ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "用于 ",
        [
          "code",
          "onSearch"
        ],
        " 的时候展示 ",
        [
          "code",
          "loading"
        ],
        "。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Search loading when onSearch."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "搜索框 loading",
      "en-US": "Search box with loading"
    },
    "filename": "components/input/demo/search-input-loading.md",
    "id": "components-input-demo-search-input-loading"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Search <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Search</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">search</span> <span class=\"token attr-name\">loading</span> <span class=\"token attr-name\">deault\"</span> <span class=\"token attr-name\">loading</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Search</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">search</span> <span class=\"token attr-name\">loading</span> <span class=\"token attr-name\">with</span> <span class=\"token attr-name\">enterButton\"</span> <span class=\"token attr-name\">loading</span> <span class=\"token attr-name\">enterButton</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Search <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Search</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input search loading deault<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">loading</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Search</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input search loading with enterButton<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">loading</span> <span class=\"token attr-name\">enterButton</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var Search = _antd.Input.Search;
  return React.createElement("div", null, React.createElement(Search, {
    placeholder: "input search loading deault",
    loading: true
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(Search, {
    placeholder: "input search loading with enterButton",
    loading: true,
    enterButton: true
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/search-input.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/search-input.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "带有搜索按钮的输入框，",
        [
          "code",
          "2.5.0"
        ],
        " 时新增。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Example of creating a search box by grouping a standard input with a search button, added in ",
        [
          "code",
          "2.5.0"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "搜索框",
      "en-US": "Search box"
    },
    "filename": "components/input/demo/search-input.md",
    "id": "components-input-demo-search-input"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Search <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Search</span>\n      <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">search</span> <span class=\"token attr-name\">text\"</span>\n      <span class=\"token attr-name\">onSearch</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value <span class=\"token operator\">=</span><span class=\"token operator\">></span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Search</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">search</span> <span class=\"token attr-name\">text\"</span> <span class=\"token attr-name\">onSearch</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value <span class=\"token operator\">=</span><span class=\"token operator\">></span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">enterButton</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Search</span>\n      <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input</span> <span class=\"token attr-name\">search</span> <span class=\"token attr-name\">text\"</span>\n      <span class=\"token attr-name\">enterButton</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Search<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">onSearch</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>value <span class=\"token operator\">=</span><span class=\"token operator\">></span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Search <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Search</span></span>\n      <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input search text<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">onSearch</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Search</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input search text<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onSearch</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">enterButton</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Search</span></span>\n      <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>input search text<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">enterButton</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Search<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token attr-name\">onSearch</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var Search = _antd.Input.Search;
  return React.createElement("div", null, React.createElement(Search, {
    placeholder: "input search text",
    onSearch: function onSearch(value) {
      return console.log(value);
    },
    style: {
      width: 200
    }
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(Search, {
    placeholder: "input search text",
    onSearch: function onSearch(value) {
      return console.log(value);
    },
    enterButton: true
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(Search, {
    placeholder: "input search text",
    enterButton: "Search",
    size: "large",
    onSearch: function onSearch(value) {
      return console.log(value);
    }
  }));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/size.md":
/*!*******************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/size.md ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "我们为 ",
        [
          "code",
          "<Input />"
        ],
        " 输入框定义了三种尺寸（大、默认、小），高度分别为 ",
        [
          "code",
          "40px"
        ],
        "、",
        [
          "code",
          "32px"
        ],
        " 和 ",
        [
          "code",
          "24px"
        ],
        "。"
      ]
    ],
    "en-US": [
      [
        "p",
        "There are three sizes of an Input box: ",
        [
          "code",
          "large"
        ],
        " (40px), ",
        [
          "code",
          "default"
        ],
        " (32px) and ",
        [
          "code",
          "small"
        ],
        " (24px)."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "三种大小",
      "en-US": "Three sizes of Input"
    },
    "filename": "components/input/demo/size.md",
    "id": "components-input-demo-size"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example-input<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large</span> <span class=\"token attr-name\">size\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>default</span> <span class=\"token attr-name\">size\"</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small</span> <span class=\"token attr-name\">size\"</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example-input<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large size<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>default size<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small size<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement("div", {
    className: "example-input"
  }, React.createElement(_antd.Input, {
    size: "large",
    placeholder: "large size"
  }), React.createElement(_antd.Input, {
    placeholder: "default size"
  }), React.createElement(_antd.Input, {
    size: "small",
    placeholder: "small size"
  }));
},
  "style": ".example-input .ant-input {\n  width: 200px;\n  margin: 0 8px 8px 0;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.example-input</span> <span class=\"token class\">.ant-input</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin</span><span class=\"token punctuation\">:</span> <span class=\"token number\">0</span> <span class=\"token number\">8</span>px <span class=\"token number\">8</span>px <span class=\"token number\">0</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/textarea-resize.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/textarea-resize.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "meta": {

  }
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/textarea.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/textarea.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "用于多行输入。"
      ]
    ],
    "en-US": [
      [
        "p",
        "For multi-line input."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "文本域",
      "en-US": "TextArea"
    },
    "filename": "components/input/demo/textarea.md",
    "id": "components-input-demo-textarea"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TextArea</span> <span class=\"token attr-name\">rows</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">4</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TextArea <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Input<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TextArea</span></span> <span class=\"token attr-name\">rows</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">4</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var TextArea = _antd.Input.TextArea;
  return React.createElement(TextArea, {
    rows: 4
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/tooltip.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/tooltip.md ***!
  \**********************************************************************************************/
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
            "href": "/components/tooltip"
          },
          "Tooltip"
        ],
        " 组件，实现一个数值输入框，方便内容超长时的全量展现。"
      ]
    ],
    "en-US": [
      [
        "p",
        "You can use the Input in conjunction with ",
        [
          "a",
          {
            "title": null,
            "href": "/components/tooltip"
          },
          "Tooltip"
        ],
        " component to create a Numeric Input, which can provide a good experience for extra-long content display."
      ]
    ]
  },
  "meta": {
    "order": 7,
    "title": {
      "zh-CN": "输入时格式化展示",
      "en-US": "Format Tooltip Input"
    },
    "filename": "components/input/demo/tooltip.md",
    "id": "components-input-demo-tooltip"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Tooltip <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">formatNumber</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  value <span class=\"token operator\">+</span><span class=\"token operator\">=</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> list <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">split</span><span class=\"token punctuation\">(</span><span class=\"token string\">'.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> prefix <span class=\"token operator\">=</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">charAt</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token string\">'-'</span> <span class=\"token operator\">?</span> <span class=\"token string\">'-'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">let</span> num <span class=\"token operator\">=</span> prefix <span class=\"token operator\">?</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">let</span> result <span class=\"token operator\">=</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">while</span> <span class=\"token punctuation\">(</span>num<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    result <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token string\">`,</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>num<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token operator\">-</span><span class=\"token number\">3</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>result<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n    num <span class=\"token operator\">=</span> num<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> num<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>num<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    result <span class=\"token operator\">=</span> num <span class=\"token operator\">+</span> result<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>prefix<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>result<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">${list[1] ? `</span></span><span class=\"token punctuation\">.</span>$<span class=\"token punctuation\">{</span>list<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span><span class=\"token template-string\"><span class=\"token string\">` : ''}`</span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">NumericInput</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  onChange <span class=\"token operator\">=</span> e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> reg <span class=\"token operator\">=</span> <span class=\"token regex\">/^-?(0|[1-9][0-9]*)(\\.[0-9]*)?$/</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token operator\">!</span><span class=\"token function\">isNaN</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">&amp;&amp;</span> reg<span class=\"token punctuation\">.</span><span class=\"token function\">test</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">||</span> value <span class=\"token operator\">===</span> <span class=\"token string\">''</span> <span class=\"token operator\">||</span> value <span class=\"token operator\">===</span> <span class=\"token string\">'-'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// '.' at the end or only '-' in the input box.</span>\n  onBlur <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> onBlur<span class=\"token punctuation\">,</span> onChange <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">charAt</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token string\">'.'</span> <span class=\"token operator\">||</span> value <span class=\"token operator\">===</span> <span class=\"token string\">'-'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>onBlur<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">onBlur</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> title <span class=\"token operator\">=</span> value <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>numeric-input-title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>value <span class=\"token operator\">!==</span> <span class=\"token string\">'-'</span> <span class=\"token operator\">?</span> <span class=\"token function\">formatNumber</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'-'</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token string\">'Input a number'</span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span>\n        <span class=\"token attr-name\">trigger</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'focus'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>title<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>topLeft<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">overlayClassName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>numeric-input<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>Input\n          <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">}</span>\n          onChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span>\n          onBlur<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onBlur<span class=\"token punctuation\">}</span>\n          placeholder<span class=\"token operator\">=</span><span class=\"token string\">\"Input a number\"</span>\n          maxLength<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">25</span><span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">NumericInputDemo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  onChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NumericInput</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">120</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>NumericInputDemo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Input<span class=\"token punctuation\">,</span> Tooltip <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">formatNumber</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  value <span class=\"token operator\">+=</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> list <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">split</span><span class=\"token punctuation\">(</span><span class=\"token string\">'.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">const</span> prefix <span class=\"token operator\">=</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">charAt</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token string\">'-'</span> <span class=\"token operator\">?</span> <span class=\"token string\">'-'</span> <span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">let</span> num <span class=\"token operator\">=</span> prefix <span class=\"token operator\">?</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> list<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">let</span> result <span class=\"token operator\">=</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">while</span> <span class=\"token punctuation\">(</span>num<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    result <span class=\"token operator\">=</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">,</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>num<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token operator\">-</span><span class=\"token number\">3</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>result<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">;</span>\n    num <span class=\"token operator\">=</span> num<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> num<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">3</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>num<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    result <span class=\"token operator\">=</span> num <span class=\"token operator\">+</span> result<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>prefix<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>result<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>list<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span> <span class=\"token operator\">?</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">.</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>list<span class=\"token punctuation\">[</span><span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span> <span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">NumericInput</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> reg <span class=\"token operator\">=</span> <span class=\"token regex\">/^-?(0|[1-9][0-9]*)(\\.[0-9]*)?$/</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token operator\">!</span><span class=\"token function\">isNaN</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">&amp;&amp;</span> reg<span class=\"token punctuation\">.</span><span class=\"token function\">test</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">||</span> value <span class=\"token operator\">===</span> <span class=\"token string\">''</span> <span class=\"token operator\">||</span> value <span class=\"token operator\">===</span> <span class=\"token string\">'-'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span><span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token comment\">// '.' at the end or only '-' in the input box.</span>\n  <span class=\"token function-variable function\">onBlur</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> onBlur<span class=\"token punctuation\">,</span> onChange <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">charAt</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token string\">'.'</span> <span class=\"token operator\">||</span> value <span class=\"token operator\">===</span> <span class=\"token string\">'-'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>onBlur<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">onBlur</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> title <span class=\"token operator\">=</span> value <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>numeric-input-title<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>value <span class=\"token operator\">!==</span> <span class=\"token string\">'-'</span> <span class=\"token operator\">?</span> <span class=\"token function\">formatNumber</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> <span class=\"token string\">'-'</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token string\">'Input a number'</span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tooltip</span></span>\n        <span class=\"token attr-name\">trigger</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'focus'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>title<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placement</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>topLeft<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">overlayClassName</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>numeric-input<span class=\"token punctuation\">\"</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n          <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">this</span><span class=\"token punctuation\">.</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onBlur</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onBlur<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Input a number<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">maxLength</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">25</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tooltip</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">NumericInputDemo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">constructor</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">props</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">super</span><span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> value<span class=\"token operator\">:</span> <span class=\"token string\">''</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">NumericInput</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">120</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">NumericInputDemo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function formatNumber(value) {
    value += '';
    var list = value.split('.');
    var prefix = list[0].charAt(0) === '-' ? '-' : '';
    var num = prefix ? list[0].slice(1) : list[0];
    var result = '';

    while (num.length > 3) {
      result = ",".concat(num.slice(-3)).concat(result);
      num = num.slice(0, num.length - 3);
    }

    if (num) {
      result = num + result;
    }

    return "".concat(prefix).concat(result).concat(list[1] ? ".".concat(list[1]) : '');
  }

  var NumericInput =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(NumericInput, _React$Component);

    function NumericInput() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, NumericInput);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NumericInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
        var value = e.target.value;
        var reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;

        if (!isNaN(value) && reg.test(value) || value === '' || value === '-') {
          _this.props.onChange(value);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onBlur", function () {
        var _this$props = _this.props,
            value = _this$props.value,
            onBlur = _this$props.onBlur,
            onChange = _this$props.onChange;

        if (value.charAt(value.length - 1) === '.' || value === '-') {
          onChange(value.slice(0, -1));
        }

        if (onBlur) {
          onBlur();
        }
      });

      return _this;
    }

    _createClass(NumericInput, [{
      key: "render",
      value: function render() {
        var value = this.props.value;
        var title = value ? React.createElement("span", {
          className: "numeric-input-title"
        }, value !== '-' ? formatNumber(value) : '-') : 'Input a number';
        return React.createElement(_antd.Tooltip, {
          trigger: ['focus'],
          title: title,
          placement: "topLeft",
          overlayClassName: "numeric-input"
        }, React.createElement(_antd.Input, _extends({}, this.props, {
          onChange: this.onChange,
          onBlur: this.onBlur,
          placeholder: "Input a number",
          maxLength: 25
        })));
      }
    }]);

    return NumericInput;
  }(React.Component);

  var NumericInputDemo =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(NumericInputDemo, _React$Component2);

    function NumericInputDemo(props) {
      var _this2;

      _classCallCheck(this, NumericInputDemo);

      _this2 = _possibleConstructorReturn(this, _getPrototypeOf(NumericInputDemo).call(this, props));

      _defineProperty(_assertThisInitialized(_this2), "onChange", function (value) {
        _this2.setState({
          value: value
        });
      });

      _this2.state = {
        value: ''
      };
      return _this2;
    }

    _createClass(NumericInputDemo, [{
      key: "render",
      value: function render() {
        return React.createElement(NumericInput, {
          style: {
            width: 120
          },
          value: this.state.value,
          onChange: this.onChange
        });
      }
    }]);

    return NumericInputDemo;
  }(React.Component);

  return React.createElement(NumericInputDemo, null);
},
  "style": "/* to prevent the arrow overflow the popup container,\nor the height is not enough when content is empty */\n.numeric-input .ant-tooltip-inner {\n  min-width: 32px;\n  min-height: 37px;\n}\n\n.numeric-input .numeric-input-title {\n  font-size: 14px;\n}",
  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* to prevent the arrow overflow the popup container,\nor the height is not enough when content is empty */</span>\n<span class=\"token selector\"><span class=\"token class\">.numeric-input</span> <span class=\"token class\">.ant-tooltip-inner</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">min-width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">min-height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">37</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.numeric-input</span> <span class=\"token class\">.numeric-input-title</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">14</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/components-input-demo.index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bisheng/tmp/components-input-demo.index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'addon': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/addon.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/addon.md"),
    'align': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/align.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/align.md"),
    'allowClear': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/allowClear.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/allowClear.md"),
    'autosize-textarea': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/autosize-textarea.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/autosize-textarea.md"),
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/basic.md"),
    'group': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/group.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/group.md"),
    'orient-advise': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-advise.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-advise.md"),
    'orient-basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-basic.md"),
    'orient-complex': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-complex.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-complex.md"),
    'orient-custom': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-custom.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-custom.md"),
    'orient-disabled': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-disabled.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-disabled.md"),
    'orient-icon': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-icon.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-icon.md"),
    'orient-maxcount': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-maxcount.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-maxcount.md"),
    'orient-money': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-money.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-money.md"),
    'orient-number': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-number.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-number.md"),
    'orient-password': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-password.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-password.md"),
    'orient-search': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-search.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-search.md"),
    'orient-size': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-size.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-size.md"),
    'orient-texarea': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-texarea.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-texarea.md"),
    'orient-texareaAutosize': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/orient-texareaAutosize.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/orient-texareaAutosize.md"),
    'password-input': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/password-input.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/password-input.md"),
    'presuffix': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/presuffix.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/presuffix.md"),
    'search-input-loading': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/search-input-loading.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/search-input-loading.md"),
    'search-input': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/search-input.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/search-input.md"),
    'size': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/size.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/size.md"),
    'textarea-resize': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/textarea-resize.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/textarea-resize.md"),
    'textarea': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/textarea.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/textarea.md"),
    'tooltip': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/input/demo/tooltip.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input/demo/tooltip.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map