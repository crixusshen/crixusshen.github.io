(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/cascader/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/basic.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/basic.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "省市区级联。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Cascade selection box for selecting province/city/district."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/cascader/demo/basic.md",
    "id": "components-cascader-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select\"</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please select<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

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

  function onChange(value) {
    console.log(value);
  }

  return React.createElement(_antd.Cascader, {
    options: options,
    onChange: onChange,
    placeholder: "Please select"
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/change-on-select.md":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/change-on-select.md ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "这种交互允许只选中父级选项。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Allow only select parent options."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "选择即改变",
      "en-US": "Change on select"
    },
    "filename": "components/cascader/demo/change-on-select.md",
    "id": "components-cascader-demo-change-on-select"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hanzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">changeOnSelect</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Hanzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">changeOnSelect</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hanzhou',
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

  function onChange(value) {
    console.log(value);
  }

  return React.createElement(_antd.Cascader, {
    options: options,
    onChange: onChange,
    changeOnSelect: true
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/custom-render.md":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/custom-render.md ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "例如给最后一项加上邮编链接。"
      ]
    ],
    "en-US": [
      [
        "p",
        "For instance, add an external link after the selected value."
      ]
    ]
  },
  "meta": {
    "order": 7,
    "title": {
      "zh-CN": "自定义已选项",
      "en-US": "Custom render"
    },
    "filename": "components/cascader/demo/custom-render.md",
    "id": "components-cascader-demo-custom-render"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n            code<span class=\"token punctuation\">:</span> <span class=\"token number\">752100</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n            code<span class=\"token punctuation\">:</span> <span class=\"token number\">453400</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">handleAreaClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  e<span class=\"token punctuation\">.</span><span class=\"token function\">stopPropagation</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'clicked'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> displayRender <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>labels<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n  labels<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>label<span class=\"token punctuation\">,</span> i<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> option <span class=\"token operator\">=</span> selectedOptions<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>i <span class=\"token operator\">===</span> labels<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>label<span class=\"token punctuation\">}</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">handleAreaClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">.</span>code<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>label<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">displayRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>displayRender<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n            code<span class=\"token operator\">:</span> <span class=\"token number\">752100</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n            code<span class=\"token operator\">:</span> <span class=\"token number\">453400</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">handleAreaClick</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">e<span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">,</span> option</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  e<span class=\"token punctuation\">.</span><span class=\"token function\">stopPropagation</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'clicked'</span><span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">displayRender</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">labels<span class=\"token punctuation\">,</span> selectedOptions</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span>\n  labels<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">label<span class=\"token punctuation\">,</span> i</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> option <span class=\"token operator\">=</span> selectedOptions<span class=\"token punctuation\">[</span>i<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>i <span class=\"token operator\">===</span> labels<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>label<span class=\"token punctuation\">}</span> <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token function\">handleAreaClick</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">,</span> label<span class=\"token punctuation\">,</span> option<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">.</span>code<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>option<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>label<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">displayRender</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>displayRender<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
        code: 752100
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
        label: 'Zhong Hua Men',
        code: 453400
      }]
    }]
  }];

  function handleAreaClick(e, label, option) {
    e.stopPropagation();
    console.log('clicked', label, option);
  }

  var displayRender = function displayRender(labels, selectedOptions) {
    return labels.map(function (label, i) {
      var option = selectedOptions[i];

      if (i === labels.length - 1) {
        return React.createElement("span", {
          key: option.value
        }, label, " (", React.createElement("a", {
          onClick: function onClick(e) {
            return handleAreaClick(e, label, option);
          }
        }, option.code), ")");
      }

      return React.createElement("span", {
        key: option.value
      }, label, " / ");
    });
  };

  return React.createElement(_antd.Cascader, {
    options: options,
    defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
    displayRender: displayRender,
    style: {
      width: '100%'
    }
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/custom-trigger.md":
/*!********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/custom-trigger.md ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "切换按钮和结果分开。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Separate trigger button and result."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "可以自定义显示",
      "en-US": "Custom trigger"
    },
    "filename": "components/cascader/demo/custom-trigger.md",
    "id": "components-cascader-demo-custom-trigger"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">CitySwitcher</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Unselect'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      text<span class=\"token punctuation\">:</span> selectedOptions<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>o <span class=\"token operator\">=</span><span class=\"token operator\">></span> o<span class=\"token punctuation\">.</span>label<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span><span class=\"token string\">', '</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>text<span class=\"token punctuation\">}</span>\n        <span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Change city<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Cascader</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CitySwitcher</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">CitySwitcher</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    text<span class=\"token operator\">:</span> <span class=\"token string\">'Unselect'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">value<span class=\"token punctuation\">,</span> selectedOptions</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      text<span class=\"token operator\">:</span> selectedOptions<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">o</span> <span class=\"token operator\">=></span> o<span class=\"token punctuation\">.</span>label<span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span><span class=\"token string\">', '</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>text<span class=\"token punctuation\">}</span>\n        <span class=\"token entity\" title=\"&nbsp;\">&amp;nbsp;</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Change city<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Cascader</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">CitySwitcher</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou'
    }]
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing'
    }]
  }];

  var CitySwitcher =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(CitySwitcher, _React$Component);

    function CitySwitcher() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, CitySwitcher);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CitySwitcher)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        text: 'Unselect'
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value, selectedOptions) {
        _this.setState({
          text: selectedOptions.map(function (o) {
            return o.label;
          }).join(', ')
        });
      });

      return _this;
    }

    _createClass(CitySwitcher, [{
      key: "render",
      value: function render() {
        return React.createElement("span", null, this.state.text, "\xA0", React.createElement(_antd.Cascader, {
          options: options,
          onChange: this.onChange
        }, React.createElement("a", {
          href: "#"
        }, "Change city")));
      }
    }]);

    return CitySwitcher;
  }(React.Component);

  return React.createElement(CitySwitcher, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/default-value.md":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/default-value.md ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "默认值通过数组的方式指定。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Specifies default value by an array."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "默认值",
      "en-US": "Default value"
    },
    "filename": "components/cascader/demo/default-value.md",
    "id": "components-cascader-demo-default-value"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span>\n    <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span>\n    <span class=\"token attr-name\">defaultValue</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

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

  function onChange(value) {
    console.log(value);
  }

  return React.createElement(_antd.Cascader, {
    defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
    options: options,
    onChange: onChange
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/disabled-option.md":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/disabled-option.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通过指定 options 里的 ",
        [
          "code",
          "disabled"
        ],
        " 字段。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Disable option by specifying the ",
        [
          "code",
          "disabled"
        ],
        " property in ",
        [
          "code",
          "options"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "禁用选项",
      "en-US": "Disabled option"
    },
    "filename": "components/cascader/demo/disabled-option.md",
    "id": "components-cascader-demo-disabled-option"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    disabled<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

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
    disabled: true,
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men'
      }]
    }]
  }];

  function onChange(value) {
    console.log(value);
  }

  return React.createElement(_antd.Cascader, {
    options: options,
    onChange: onChange
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/fields-name.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/fields-name.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "自定义字段名。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Custom field names."
      ]
    ]
  },
  "meta": {
    "order": 10,
    "title": {
      "zh-CN": "自定义字段名",
      "en-US": "Custom Field Names"
    },
    "filename": "components/cascader/demo/fields-name.md",
    "id": "components-cascader-demo-fields-name"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    code<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    items<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        code<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        items<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            code<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            name<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    code<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    items<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        code<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        items<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            code<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            name<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span>\n    <span class=\"token attr-name\">fieldNames</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> label<span class=\"token punctuation\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'code'</span><span class=\"token punctuation\">,</span> children<span class=\"token punctuation\">:</span> <span class=\"token string\">'items'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select\"</span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    code<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    items<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        code<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token operator\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        items<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            code<span class=\"token operator\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            name<span class=\"token operator\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    code<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    items<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        code<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        items<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            code<span class=\"token operator\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            name<span class=\"token operator\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span>\n    <span class=\"token attr-name\">fieldNames</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> label<span class=\"token operator\">:</span> <span class=\"token string\">'name'</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token string\">'code'</span><span class=\"token punctuation\">,</span> children<span class=\"token operator\">:</span> <span class=\"token string\">'items'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please select<span class=\"token punctuation\">\"</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var options = [{
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [{
      code: 'hangzhou',
      name: 'Hangzhou',
      items: [{
        code: 'xihu',
        name: 'West Lake'
      }]
    }]
  }, {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [{
      code: 'nanjing',
      name: 'Nanjing',
      items: [{
        code: 'zhonghuamen',
        name: 'Zhong Hua Men'
      }]
    }]
  }];

  function onChange(value) {
    console.log(value);
  }

  return React.createElement(_antd.Cascader, {
    fieldNames: {
      label: 'name',
      value: 'code',
      children: 'items'
    },
    options: options,
    onChange: onChange,
    placeholder: "Please select"
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/hover.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/hover.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通过移入展开下级菜单，点击完成选择。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Hover to expand sub menu, click to select option."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "移入展开",
      "en-US": "Hover"
    },
    "filename": "components/cascader/demo/hover.md",
    "id": "components-cascader-demo-hover"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Just show the latest item.</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">displayRender</span><span class=\"token punctuation\">(</span>label<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> label<span class=\"token punctuation\">[</span>label<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">expandTrigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>hover<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">displayRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>displayRender<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">// Just show the latest item.</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">displayRender</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">label</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> label<span class=\"token punctuation\">[</span>label<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">expandTrigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>hover<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">displayRender</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>displayRender<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

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

  function onChange(value) {
    console.log(value);
  } // Just show the latest item.


  function displayRender(label) {
    return label[label.length - 1];
  }

  return React.createElement(_antd.Cascader, {
    options: options,
    expandTrigger: "hover",
    displayRender: displayRender,
    onChange: onChange
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/lazy.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/lazy.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用 ",
        [
          "code",
          "loadData"
        ],
        " 实现动态加载选项。"
      ],
      [
        "blockquote",
        [
          "p",
          "注意：",
          [
            "code",
            "loadData"
          ],
          " 与 ",
          [
            "code",
            "showSearch"
          ],
          " 无法一起使用。"
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "Load options lazily with ",
        [
          "code",
          "loadData"
        ],
        "."
      ],
      [
        "blockquote",
        [
          "p",
          "Note: ",
          [
            "code",
            "loadData"
          ],
          " cannot work with ",
          [
            "code",
            "showSearch"
          ],
          "."
        ]
      ]
    ]
  },
  "meta": {
    "order": 9,
    "title": {
      "zh-CN": "动态加载选项",
      "en-US": "Load Options Lazily"
    },
    "filename": "components/cascader/demo/lazy.md",
    "id": "components-cascader-demo-lazy"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    isLeaf<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    isLeaf<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">LazyOptions</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    options<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  loadData <span class=\"token operator\">=</span> selectedOptions <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetOption <span class=\"token operator\">=</span> selectedOptions<span class=\"token punctuation\">[</span>selectedOptions<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    targetOption<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// load options lazily</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      targetOption<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n      targetOption<span class=\"token punctuation\">.</span>children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n          label<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>targetOption<span class=\"token punctuation\">.</span>label<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> Dynamic 1`</span></span><span class=\"token punctuation\">,</span>\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">'dynamic1'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n          label<span class=\"token punctuation\">:</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>targetOption<span class=\"token punctuation\">.</span>label<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> Dynamic 2`</span></span><span class=\"token punctuation\">,</span>\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">'dynamic2'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        options<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>options<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span>\n        <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>options<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loadData</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>loadData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">changeOnSelect</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>LazyOptions</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    isLeaf<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    isLeaf<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">LazyOptions</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    options<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">value<span class=\"token punctuation\">,</span> selectedOptions</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">loadData</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">selectedOptions</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetOption <span class=\"token operator\">=</span> selectedOptions<span class=\"token punctuation\">[</span>selectedOptions<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    targetOption<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">// load options lazily</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      targetOption<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n      targetOption<span class=\"token punctuation\">.</span>children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n          label<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>targetOption<span class=\"token punctuation\">.</span>label<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> Dynamic 1</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">,</span>\n          value<span class=\"token operator\">:</span> <span class=\"token string\">'dynamic1'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n          label<span class=\"token operator\">:</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>targetOption<span class=\"token punctuation\">.</span>label<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> Dynamic 2</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">,</span>\n          value<span class=\"token operator\">:</span> <span class=\"token string\">'dynamic2'</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        options<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>options<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span>\n        <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>options<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loadData</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>loadData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">changeOnSelect</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">LazyOptions</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

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

  var options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false
  }];

  var LazyOptions =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(LazyOptions, _React$Component);

    function LazyOptions() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, LazyOptions);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LazyOptions)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        options: options
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value, selectedOptions) {
        console.log(value, selectedOptions);
      });

      _defineProperty(_assertThisInitialized(_this), "loadData", function (selectedOptions) {
        var targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true; // load options lazily

        setTimeout(function () {
          targetOption.loading = false;
          targetOption.children = [{
            label: "".concat(targetOption.label, " Dynamic 1"),
            value: 'dynamic1'
          }, {
            label: "".concat(targetOption.label, " Dynamic 2"),
            value: 'dynamic2'
          }];

          _this.setState({
            options: _toConsumableArray(_this.state.options)
          });
        }, 1000);
      });

      return _this;
    }

    _createClass(LazyOptions, [{
      key: "render",
      value: function render() {
        return React.createElement(_antd.Cascader, {
          options: this.state.options,
          loadData: this.loadData,
          onChange: this.onChange,
          changeOnSelect: true
        });
      }
    }]);

    return LazyOptions;
  }(React.Component);

  return React.createElement(LazyOptions, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/orient-basic.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/orient-basic.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "常用的基础级联选择器，附带模糊搜索功能。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基础级联选择器",
      "en-US": null
    },
    "filename": "components/cascader/demo/orient-basic.md",
    "id": "components-cascader-demo-orient-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"zhinan\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"指南\"</span><span class=\"token punctuation\">,</span>\n    disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"shejiyuanze\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"设计原则\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"yizhi\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一致\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"fankui\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"反馈\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"xiaolv\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"效率\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"kekong\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"可控\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"组件\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"组件\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Basic\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Basic\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"layout\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Layout 布局\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"color\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Color 色彩\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"typography\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Typography 字体\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"icon\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Icon 图标\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"button\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Button 按钮\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"form\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Form\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"radio\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Radio 单选框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"checkbox\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Checkbox 多选框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"input\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Input 输入框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"form\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Form 表单\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"ziyuan\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"资源\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Axure Components\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Axure Components\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Sketch Templates\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Sketch Templates\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"组件交互文档\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"组件交互文档\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"zhinan\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">\"指南\"</span><span class=\"token punctuation\">,</span>\n    disabled<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"shejiyuanze\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"设计原则\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"yizhi\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"一致\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"fankui\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"反馈\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"xiaolv\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"效率\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"kekong\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"可控\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"组件\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">\"组件\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"Basic\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"Basic\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"layout\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Layout 布局\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"color\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Color 色彩\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"typography\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Typography 字体\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"icon\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Icon 图标\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"button\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Button 按钮\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"form\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"Form\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"radio\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Radio 单选框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"checkbox\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Checkbox 多选框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"input\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Input 输入框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"form\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Form 表单\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"ziyuan\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">\"资源\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"Axure Components\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"Axure Components\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"Sketch Templates\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"Sketch Templates\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"组件交互文档\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"组件交互文档\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var options = [{
    value: "zhinan",
    label: "指南",
    disabled: true,
    children: [{
      value: "shejiyuanze",
      label: "设计原则",
      children: [{
        value: "yizhi",
        label: "一致"
      }, {
        value: "fankui",
        label: "反馈"
      }, {
        value: "xiaolv",
        label: "效率"
      }, {
        value: "kekong",
        label: "可控"
      }]
    }]
  }, {
    value: "组件",
    label: "组件",
    children: [{
      value: "Basic",
      label: "Basic",
      children: [{
        value: "layout",
        label: "Layout 布局"
      }, {
        value: "color",
        label: "Color 色彩"
      }, {
        value: "typography",
        label: "Typography 字体"
      }, {
        value: "icon",
        label: "Icon 图标"
      }, {
        value: "button",
        label: "Button 按钮"
      }]
    }, {
      value: "form",
      label: "Form",
      children: [{
        value: "radio",
        label: "Radio 单选框"
      }, {
        value: "checkbox",
        label: "Checkbox 多选框"
      }, {
        value: "input",
        label: "Input 输入框"
      }, {
        value: "form",
        label: "Form 表单"
      }]
    }]
  }, {
    value: "ziyuan",
    label: "资源",
    children: [{
      value: "Axure Components",
      label: "Axure Components"
    }, {
      value: "Sketch Templates",
      label: "Sketch Templates"
    }, {
      value: "组件交互文档",
      label: "组件交互文档"
    }]
  }];

  function onChange(value) {
    console.log(value);
  }

  return React.createElement(_antd.Cascader, {
    style: {
      width: 180
    },
    options: options,
    onChange: onChange
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/orient-loadData.md":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/orient-loadData.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "当选中某一级时，动态加载该级下的选项。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "动态加载",
      "en-US": null
    },
    "filename": "components/cascader/demo/orient-loadData.md",
    "id": "components-cascader-demo-orient-loadData"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"xuanxiang1-0\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"选项1\"</span><span class=\"token punctuation\">,</span>\n    isLeaf<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">LazyOptions</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    options\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  loadData <span class=\"token operator\">=</span> selectedOptions <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetOption <span class=\"token operator\">=</span> selectedOptions<span class=\"token punctuation\">[</span>selectedOptions<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    targetOption<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// load options lazily</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      targetOption<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n      targetOption<span class=\"token punctuation\">.</span>children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n          label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"选项2\"</span><span class=\"token punctuation\">,</span>\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"dynamic1\"</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n          label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"选项3\"</span><span class=\"token punctuation\">,</span>\n          value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"dynamic2\"</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        options<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>options<span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span>\n        <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>options<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loadData</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>loadData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">changeOnSelect</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>LazyOptions</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"xuanxiang1-0\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">\"选项1\"</span><span class=\"token punctuation\">,</span>\n    isLeaf<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">LazyOptions</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    options\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">value<span class=\"token punctuation\">,</span> selectedOptions</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">loadData</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">selectedOptions</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> targetOption <span class=\"token operator\">=</span> selectedOptions<span class=\"token punctuation\">[</span>selectedOptions<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    targetOption<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">=</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">// load options lazily</span>\n    <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      targetOption<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n      targetOption<span class=\"token punctuation\">.</span>children <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n          label<span class=\"token operator\">:</span> <span class=\"token string\">\"选项2\"</span><span class=\"token punctuation\">,</span>\n          value<span class=\"token operator\">:</span> <span class=\"token string\">\"dynamic1\"</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">{</span>\n          label<span class=\"token operator\">:</span> <span class=\"token string\">\"选项3\"</span><span class=\"token punctuation\">,</span>\n          value<span class=\"token operator\">:</span> <span class=\"token string\">\"dynamic2\"</span>\n        <span class=\"token punctuation\">}</span>\n      <span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        options<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>options<span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span>\n        <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>options<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loadData</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>loadData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">changeOnSelect</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">LazyOptions</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

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

  var options = [{
    value: "xuanxiang1-0",
    label: "选项1",
    isLeaf: false
  }];

  var LazyOptions =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(LazyOptions, _React$Component);

    function LazyOptions() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, LazyOptions);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LazyOptions)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        options: options
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value, selectedOptions) {
        console.log(value, selectedOptions);
      });

      _defineProperty(_assertThisInitialized(_this), "loadData", function (selectedOptions) {
        var targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true; // load options lazily

        setTimeout(function () {
          targetOption.loading = false;
          targetOption.children = [{
            label: "选项2",
            value: "dynamic1"
          }, {
            label: "选项3",
            value: "dynamic2"
          }];

          _this.setState({
            options: _toConsumableArray(_this.state.options)
          });
        }, 1000);
      });

      return _this;
    }

    _createClass(LazyOptions, [{
      key: "render",
      value: function render() {
        return React.createElement(_antd.Cascader, {
          options: this.state.options,
          loadData: this.loadData,
          onChange: this.onChange,
          changeOnSelect: true
        });
      }
    }]);

    return LazyOptions;
  }(React.Component);

  return React.createElement(LazyOptions, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/orient-showLast.md":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/orient-showLast.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "仅显示最后一级",
      "en-US": null
    },
    "filename": "components/cascader/demo/orient-showLast.md",
    "id": "components-cascader-demo-orient-showLast"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"zhinan\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"指南\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"shejiyuanze\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"设计原则\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"yizhi\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一致\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"fankui\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"反馈\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"xiaolv\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"效率\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"kekong\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"可控\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"组件\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"组件\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Basic\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Basic\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"layout\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Layout 布局\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"color\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Color 色彩\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"typography\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Typography 字体\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"icon\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Icon 图标\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"button\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Button 按钮\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"form\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Form\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"radio\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Radio 单选框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"checkbox\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Checkbox 多选框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"input\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Input 输入框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"form\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Form 表单\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"ziyuan\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"资源\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Axure Components\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Axure Components\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Sketch Templates\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Sketch Templates\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"组件交互文档\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">\"组件交互文档\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// Just show the latest item.</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">displayRender</span><span class=\"token punctuation\">(</span>label<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> label<span class=\"token punctuation\">[</span>label<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">expandTrigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>hover<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">displayRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>displayRender<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"zhinan\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">\"指南\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"shejiyuanze\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"设计原则\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"yizhi\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"一致\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"fankui\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"反馈\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"xiaolv\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"效率\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"kekong\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"可控\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"组件\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">\"组件\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"Basic\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"Basic\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"layout\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Layout 布局\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"color\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Color 色彩\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"typography\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Typography 字体\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"icon\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Icon 图标\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"button\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Button 按钮\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"form\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"Form\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"radio\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Radio 单选框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"checkbox\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Checkbox 多选框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"input\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Input 输入框\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"form\"</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">\"Form 表单\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"ziyuan\"</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">\"资源\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"Axure Components\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"Axure Components\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"Sketch Templates\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"Sketch Templates\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"组件交互文档\"</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">\"组件交互文档\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token comment\">// Just show the latest item.</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">displayRender</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">label</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> label<span class=\"token punctuation\">[</span>label<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">expandTrigger</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>hover<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">displayRender</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>displayRender<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var options = [{
    value: "zhinan",
    label: "指南",
    children: [{
      value: "shejiyuanze",
      label: "设计原则",
      children: [{
        value: "yizhi",
        label: "一致"
      }, {
        value: "fankui",
        label: "反馈"
      }, {
        value: "xiaolv",
        label: "效率"
      }, {
        value: "kekong",
        label: "可控"
      }]
    }]
  }, {
    value: "组件",
    label: "组件",
    children: [{
      value: "Basic",
      label: "Basic",
      children: [{
        value: "layout",
        label: "Layout 布局"
      }, {
        value: "color",
        label: "Color 色彩"
      }, {
        value: "typography",
        label: "Typography 字体"
      }, {
        value: "icon",
        label: "Icon 图标"
      }, {
        value: "button",
        label: "Button 按钮"
      }]
    }, {
      value: "form",
      label: "Form",
      children: [{
        value: "radio",
        label: "Radio 单选框"
      }, {
        value: "checkbox",
        label: "Checkbox 多选框"
      }, {
        value: "input",
        label: "Input 输入框"
      }, {
        value: "form",
        label: "Form 表单"
      }]
    }]
  }, {
    value: "ziyuan",
    label: "资源",
    children: [{
      value: "Axure Components",
      label: "Axure Components"
    }, {
      value: "Sketch Templates",
      label: "Sketch Templates"
    }, {
      value: "组件交互文档",
      label: "组件交互文档"
    }]
  }];

  function onChange(value) {
    console.log(value);
  } // Just show the latest item.


  function displayRender(label) {
    return label[label.length - 1];
  }

  return React.createElement(_antd.Cascader, {
    options: options,
    expandTrigger: "hover",
    displayRender: displayRender,
    onChange: onChange
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/search.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/search.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以直接搜索选项并选择。"
      ],
      [
        "blockquote",
        [
          "p",
          [
            "code",
            "Cascader[showSearch]"
          ],
          " 暂不支持服务端搜索，更多信息见 ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/ant-design/issues/5547"
            },
            "#5547"
          ]
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "Search and select options directly."
      ],
      [
        "blockquote",
        [
          "p",
          "Now, ",
          [
            "code",
            "Cascader[showSearch]"
          ],
          " doesn't support search on server, more info ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/ant-design/issues/5547"
            },
            "#5547"
          ]
        ]
      ]
    ]
  },
  "meta": {
    "order": 8,
    "title": {
      "zh-CN": "搜索",
      "en-US": "Search"
    },
    "filename": "components/cascader/demo/search.md",
    "id": "components-cascader-demo-search"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xiasha'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Xia Sha'</span><span class=\"token punctuation\">,</span>\n            disabled<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">,</span> path<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">some</span><span class=\"token punctuation\">(</span>option <span class=\"token operator\">=</span><span class=\"token operator\">></span> option<span class=\"token punctuation\">.</span>label<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select\"</span>\n    <span class=\"token attr-name\">showSearch</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> filter <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'xiasha'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'Xia Sha'</span><span class=\"token punctuation\">,</span>\n            disabled<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhong Hua men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value<span class=\"token punctuation\">,</span> selectedOptions</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">,</span> selectedOptions<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">inputValue<span class=\"token punctuation\">,</span> path</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> path<span class=\"token punctuation\">.</span><span class=\"token function\">some</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">option</span> <span class=\"token operator\">=></span> option<span class=\"token punctuation\">.</span>label<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">.</span><span class=\"token function\">toLowerCase</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span>\n    <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please select<span class=\"token punctuation\">\"</span></span>\n    <span class=\"token attr-name\">showSearch</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> filter <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var options = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake'
      }, {
        value: 'xiasha',
        label: 'Xia Sha',
        disabled: true
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
        label: 'Zhong Hua men'
      }]
    }]
  }];

  function onChange(value, selectedOptions) {
    console.log(value, selectedOptions);
  }

  function filter(inputValue, path) {
    return path.some(function (option) {
      return option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;
    });
  }

  return React.createElement(_antd.Cascader, {
    options: options,
    onChange: onChange,
    placeholder: "Please select",
    showSearch: {
      filter: filter
    }
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/size.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/size.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "不同大小的级联选择器。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Cascade selection box of different sizes."
      ]
    ]
  },
  "meta": {
    "order": 6,
    "title": {
      "zh-CN": "大小",
      "en-US": "Size"
    },
    "filename": "components/cascader/demo/size.md",
    "id": "components-cascader-demo-size"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token punctuation\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Cascader</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Cascader <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> options <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'zhejiang'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhejiang'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'hangzhou'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Hangzhou'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'xihu'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'West Lake'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'jiangsu'</span><span class=\"token punctuation\">,</span>\n    label<span class=\"token operator\">:</span> <span class=\"token string\">'Jiangsu'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'nanjing'</span><span class=\"token punctuation\">,</span>\n        label<span class=\"token operator\">:</span> <span class=\"token string\">'Nanjing'</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">'zhonghuamen'</span><span class=\"token punctuation\">,</span>\n            label<span class=\"token operator\">:</span> <span class=\"token string\">'Zhong Hua Men'</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">value</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>large<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Cascader</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">options</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>options<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>onChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

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

  function onChange(value) {
    console.log(value);
  }

  return React.createElement("div", null, React.createElement(_antd.Cascader, {
    size: "large",
    options: options,
    onChange: onChange
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(_antd.Cascader, {
    options: options,
    onChange: onChange
  }), React.createElement("br", null), React.createElement("br", null), React.createElement(_antd.Cascader, {
    size: "small",
    options: options,
    onChange: onChange
  }), React.createElement("br", null), React.createElement("br", null));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/suffix.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/suffix.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "meta": {

  }
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/components-cascader-demo.index.js":
/*!********************************************************************!*\
  !*** ./node_modules/bisheng/tmp/components-cascader-demo.index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/basic.md"),
    'change-on-select': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/change-on-select.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/change-on-select.md"),
    'custom-render': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/custom-render.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/custom-render.md"),
    'custom-trigger': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/custom-trigger.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/custom-trigger.md"),
    'default-value': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/default-value.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/default-value.md"),
    'disabled-option': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/disabled-option.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/disabled-option.md"),
    'fields-name': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/fields-name.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/fields-name.md"),
    'hover': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/hover.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/hover.md"),
    'lazy': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/lazy.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/lazy.md"),
    'orient-basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/orient-basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/orient-basic.md"),
    'orient-loadData': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/orient-loadData.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/orient-loadData.md"),
    'orient-showLast': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/orient-showLast.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/orient-showLast.md"),
    'search': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/search.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/search.md"),
    'size': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/size.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/size.md"),
    'suffix': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/cascader/demo/suffix.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/cascader/demo/suffix.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map