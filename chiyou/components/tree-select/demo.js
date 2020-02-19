(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/tree-select/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/async.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/async.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "异步加载树节点。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Asynchronous loading tree node."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "异步加载",
      "en-US": "Asynchronous loading"
    },
    "filename": "components/tree-select/demo/async.md",
    "id": "components-tree-select-demo-async"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n    treeData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> pId<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Expand to load'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> pId<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Expand to load'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> pId<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Tree Node'</span><span class=\"token punctuation\">,</span> isLeaf<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  genTreeNode <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>parentId<span class=\"token punctuation\">,</span> isLeaf <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> random <span class=\"token operator\">=</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">substring</span><span class=\"token punctuation\">(</span><span class=\"token number\">2</span><span class=\"token punctuation\">,</span> <span class=\"token number\">6</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      id<span class=\"token punctuation\">:</span> random<span class=\"token punctuation\">,</span>\n      pId<span class=\"token punctuation\">:</span> parentId<span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> random<span class=\"token punctuation\">,</span>\n      title<span class=\"token punctuation\">:</span> isLeaf <span class=\"token operator\">?</span> <span class=\"token string\">'Tree Node'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'Expand to load'</span><span class=\"token punctuation\">,</span>\n      isLeaf<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onLoadData <span class=\"token operator\">=</span> treeNode <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n    <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span>resolve <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> id <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> treeNode<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n      <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          treeData<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>treeData<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">genTreeNode</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">,</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">genTreeNode</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">,</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">300</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> treeData <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeSelect</span>\n        <span class=\"token attr-name\">treeDataSimpleMode</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token punctuation\">:</span> <span class=\"token string\">'auto'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select\"</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loadData</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onLoadData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token keyword\">undefined</span><span class=\"token punctuation\">,</span>\n    treeData<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token operator\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> pId<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span> title<span class=\"token operator\">:</span> <span class=\"token string\">'Expand to load'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> pId<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span> title<span class=\"token operator\">:</span> <span class=\"token string\">'Expand to load'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token operator\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> pId<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span> title<span class=\"token operator\">:</span> <span class=\"token string\">'Tree Node'</span><span class=\"token punctuation\">,</span> isLeaf<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">genTreeNode</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">parentId<span class=\"token punctuation\">,</span> isLeaf <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> random <span class=\"token operator\">=</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">substring</span><span class=\"token punctuation\">(</span><span class=\"token number\">2</span><span class=\"token punctuation\">,</span> <span class=\"token number\">6</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      id<span class=\"token operator\">:</span> random<span class=\"token punctuation\">,</span>\n      pId<span class=\"token operator\">:</span> parentId<span class=\"token punctuation\">,</span>\n      value<span class=\"token operator\">:</span> random<span class=\"token punctuation\">,</span>\n      title<span class=\"token operator\">:</span> isLeaf <span class=\"token operator\">?</span> <span class=\"token string\">'Tree Node'</span> <span class=\"token operator\">:</span> <span class=\"token string\">'Expand to load'</span><span class=\"token punctuation\">,</span>\n      isLeaf<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onLoadData</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">treeNode</span> <span class=\"token operator\">=></span>\n    <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">resolve</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> id <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> treeNode<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n      <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          treeData<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>treeData<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">genTreeNode</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">,</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">genTreeNode</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">,</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">300</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> treeData <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeSelect</span></span>\n        <span class=\"token attr-name\">treeDataSimpleMode</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token operator\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token operator\">:</span> <span class=\"token string\">'auto'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please select<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loadData</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onLoadData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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
        value: undefined,
        treeData: [{
          id: 1,
          pId: 0,
          value: '1',
          title: 'Expand to load'
        }, {
          id: 2,
          pId: 0,
          value: '2',
          title: 'Expand to load'
        }, {
          id: 3,
          pId: 0,
          value: '3',
          title: 'Tree Node',
          isLeaf: true
        }]
      });

      _defineProperty(_assertThisInitialized(_this), "genTreeNode", function (parentId) {
        var isLeaf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var random = Math.random().toString(36).substring(2, 6);
        return {
          id: random,
          pId: parentId,
          value: random,
          title: isLeaf ? 'Tree Node' : 'Expand to load',
          isLeaf: isLeaf
        };
      });

      _defineProperty(_assertThisInitialized(_this), "onLoadData", function (treeNode) {
        return new Promise(function (resolve) {
          var id = treeNode.props.id;
          setTimeout(function () {
            _this.setState({
              treeData: _this.state.treeData.concat([_this.genTreeNode(id, false), _this.genTreeNode(id, true)])
            });

            resolve();
          }, 300);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
        console.log(value);

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var treeData = this.state.treeData;
        return React.createElement(_antd.TreeSelect, {
          treeDataSimpleMode: true,
          style: {
            width: '100%'
          },
          value: this.state.value,
          dropdownStyle: {
            maxHeight: 400,
            overflow: 'auto'
          },
          placeholder: "Please select",
          onChange: this.onChange,
          loadData: this.onLoadData,
          treeData: treeData
        });
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/basic.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/basic.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "最简单的用法。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The most basic usage."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/tree-select/demo/basic.md",
    "id": "components-tree-select-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TreeNode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeSelect</span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token punctuation\">:</span> <span class=\"token string\">'auto'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select\"</span>\n        <span class=\"token attr-name\">allowClear</span>\n        <span class=\"token attr-name\">treeDefaultExpandAll</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1-0\"</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1-0\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0-1-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>leaf1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>my</span> <span class=\"token attr-name\">leaf\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>leaf2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>your</span> <span class=\"token attr-name\">leaf\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random1<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TreeNode</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1-1\"</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1-1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sss<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>b style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#08c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>sss<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>b</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"random3\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TreeNode</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TreeNode</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TreeSelect</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TreeNode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token keyword\">undefined</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeSelect</span></span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token operator\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token operator\">:</span> <span class=\"token string\">'auto'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please select<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">allowClear</span>\n        <span class=\"token attr-name\">treeDefaultExpandAll</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1-0<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1-0<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0-1-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>leaf1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>my leaf<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>leaf2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>your leaf<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random1<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TreeNode</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1-1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1-1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sss<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>b</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">'#08c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>sss<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>b</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random3<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TreeNode</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TreeNode</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TreeSelect</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var TreeNode = _antd.TreeSelect.TreeNode;

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
        value: undefined
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
        console.log(value);

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        return React.createElement(_antd.TreeSelect, {
          showSearch: true,
          style: {
            width: '100%'
          },
          value: this.state.value,
          dropdownStyle: {
            maxHeight: 400,
            overflow: 'auto'
          },
          placeholder: "Please select",
          allowClear: true,
          treeDefaultExpandAll: true,
          onChange: this.onChange
        }, React.createElement(TreeNode, {
          value: "parent 1",
          title: "parent 1",
          key: "0-1"
        }, React.createElement(TreeNode, {
          value: "parent 1-0",
          title: "parent 1-0",
          key: "0-1-1"
        }, React.createElement(TreeNode, {
          value: "leaf1",
          title: "my leaf",
          key: "random"
        }), React.createElement(TreeNode, {
          value: "leaf2",
          title: "your leaf",
          key: "random1"
        })), React.createElement(TreeNode, {
          value: "parent 1-1",
          title: "parent 1-1",
          key: "random2"
        }, React.createElement(TreeNode, {
          value: "sss",
          title: React.createElement("b", {
            style: {
              color: '#08c'
            }
          }, "sss"),
          key: "random3"
        }))));
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/checkable.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/checkable.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用勾选框实现多选功能。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Multiple and checkable."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "可勾选",
      "en-US": "Checkable"
    },
    "filename": "components/tree-select/demo/checkable.md",
    "id": "components-tree-select-demo-checkable"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> SHOW_PARENT <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Node1'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node1'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Node2'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node3'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-0'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-0'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node4'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-1'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-1'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node5'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-2'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1-2'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onChange '</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> tProps <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      treeData<span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n      onChange<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">,</span>\n      treeCheckable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      showCheckedStrategy<span class=\"token punctuation\">:</span> SHOW_PARENT<span class=\"token punctuation\">,</span>\n      searchPlaceholder<span class=\"token punctuation\">:</span> <span class=\"token string\">'Please select'</span><span class=\"token punctuation\">,</span>\n      style<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>TreeSelect <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>tProps<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> <span class=\"token constant\">SHOW_PARENT</span> <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Node1'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">'Child Node1'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Node2'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">'Child Node3'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'0-1-0'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">'0-1-0'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">'Child Node4'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'0-1-1'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">'0-1-1'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">'Child Node5'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'0-1-2'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">'0-1-2'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'0-0-0'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'onChange '</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> tProps <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      treeData<span class=\"token punctuation\">,</span>\n      value<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n      onChange<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">,</span>\n      treeCheckable<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      showCheckedStrategy<span class=\"token operator\">:</span> <span class=\"token constant\">SHOW_PARENT</span><span class=\"token punctuation\">,</span>\n      searchPlaceholder<span class=\"token operator\">:</span> <span class=\"token string\">'Please select'</span><span class=\"token punctuation\">,</span>\n      style<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        width<span class=\"token operator\">:</span> <span class=\"token string\">'100%'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeSelect</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">tProps</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var SHOW_PARENT = _antd.TreeSelect.SHOW_PARENT;
  var treeData = [{
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [{
      title: 'Child Node1',
      value: '0-0-0',
      key: '0-0-0'
    }]
  }, {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [{
      title: 'Child Node3',
      value: '0-1-0',
      key: '0-1-0'
    }, {
      title: 'Child Node4',
      value: '0-1-1',
      key: '0-1-1'
    }, {
      title: 'Child Node5',
      value: '0-1-2',
      key: '0-1-2'
    }]
  }];

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
        value: ['0-0-0']
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
        console.log('onChange ', value);

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var tProps = {
          treeData: treeData,
          value: this.state.value,
          onChange: this.onChange,
          treeCheckable: true,
          showCheckedStrategy: SHOW_PARENT,
          searchPlaceholder: 'Please select',
          style: {
            width: '100%'
          }
        };
        return React.createElement(_antd.TreeSelect, tProps);
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/multiple.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/multiple.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "多选的树选择。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Multiple selection usage."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "多选",
      "en-US": "Multiple Selection"
    },
    "filename": "components/tree-select/demo/multiple.md",
    "id": "components-tree-select-demo-multiple"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TreeNode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeSelect</span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token punctuation\">:</span> <span class=\"token string\">'auto'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select\"</span>\n        <span class=\"token attr-name\">allowClear</span>\n        <span class=\"token attr-name\">multiple</span>\n        <span class=\"token attr-name\">treeDefaultExpandAll</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1-0\"</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1-0\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0-1-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>leaf1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>my</span> <span class=\"token attr-name\">leaf\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>leaf2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>your</span> <span class=\"token attr-name\">leaf\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random1<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TreeNode</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1-1\"</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent</span> <span class=\"token attr-name\">1-1\"</span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeNode</span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sss<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>b style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#08c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>sss<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>b</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span> key<span class=\"token operator\">=</span><span class=\"token string\">\"random3\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TreeNode</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TreeNode</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TreeSelect</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TreeNode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token keyword\">undefined</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeSelect</span></span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token operator\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token operator\">:</span> <span class=\"token string\">'auto'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please select<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">allowClear</span>\n        <span class=\"token attr-name\">multiple</span>\n        <span class=\"token attr-name\">treeDefaultExpandAll</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1-0<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1-0<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>0-1-1<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>leaf1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>my leaf<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>leaf2<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>your leaf<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random1<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TreeNode</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1-1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>parent 1-1<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random2<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeNode</span></span> <span class=\"token attr-name\">value</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>sss<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>b</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">'#08c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>sss<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>b</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>random3<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TreeNode</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TreeNode</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TreeSelect</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var TreeNode = _antd.TreeSelect.TreeNode;

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
        value: undefined
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
        console.log(value);

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        return React.createElement(_antd.TreeSelect, {
          showSearch: true,
          style: {
            width: '100%'
          },
          value: this.state.value,
          dropdownStyle: {
            maxHeight: 400,
            overflow: 'auto'
          },
          placeholder: "Please select",
          allowClear: true,
          multiple: true,
          treeDefaultExpandAll: true,
          onChange: this.onChange
        }, React.createElement(TreeNode, {
          value: "parent 1",
          title: "parent 1",
          key: "0-1"
        }, React.createElement(TreeNode, {
          value: "parent 1-0",
          title: "parent 1-0",
          key: "0-1-1"
        }, React.createElement(TreeNode, {
          value: "leaf1",
          title: "my leaf",
          key: "random"
        }), React.createElement(TreeNode, {
          value: "leaf2",
          title: "your leaf",
          key: "random1"
        })), React.createElement(TreeNode, {
          value: "parent 1-1",
          title: "parent 1-1",
          key: "random2"
        }, React.createElement(TreeNode, {
          value: "sss",
          title: React.createElement("b", {
            style: {
              color: '#08c'
            }
          }, "sss"),
          key: "random3"
        }))));
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-async.md":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-async.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "异步加载树节点。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Asynchronous loading tree node."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "异步加载",
      "en-US": "Asynchronous loading"
    },
    "filename": "components/tree-select/demo/orient-async.md",
    "id": "components-tree-select-demo-orient-async"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n    treeData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> pId<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"1\"</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Expand to load\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> pId<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"2\"</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Expand to load\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> pId<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"3\"</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Tree Node\"</span><span class=\"token punctuation\">,</span> isLeaf<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  genTreeNode <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>parentId<span class=\"token punctuation\">,</span> isLeaf <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> random <span class=\"token operator\">=</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">substring</span><span class=\"token punctuation\">(</span><span class=\"token number\">2</span><span class=\"token punctuation\">,</span> <span class=\"token number\">6</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      id<span class=\"token punctuation\">:</span> random<span class=\"token punctuation\">,</span>\n      pId<span class=\"token punctuation\">:</span> parentId<span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> random<span class=\"token punctuation\">,</span>\n      title<span class=\"token punctuation\">:</span> isLeaf <span class=\"token operator\">?</span> <span class=\"token string\">\"Tree Node\"</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">\"Expand to load\"</span><span class=\"token punctuation\">,</span>\n      isLeaf\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onLoadData <span class=\"token operator\">=</span> treeNode <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n    <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span>resolve <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> id <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> treeNode<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n      <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          treeData<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>treeData<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">genTreeNode</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">,</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">genTreeNode</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">,</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span>\n          <span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">300</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> treeData <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeSelect</span>\n        <span class=\"token attr-name\">treeDataSimpleMode</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token punctuation\">:</span> <span class=\"token string\">\"auto\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select\"</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loadData</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onLoadData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token keyword\">undefined</span><span class=\"token punctuation\">,</span>\n    treeData<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token operator\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span> pId<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token string\">\"1\"</span><span class=\"token punctuation\">,</span> title<span class=\"token operator\">:</span> <span class=\"token string\">\"Expand to load\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token operator\">:</span> <span class=\"token number\">2</span><span class=\"token punctuation\">,</span> pId<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token string\">\"2\"</span><span class=\"token punctuation\">,</span> title<span class=\"token operator\">:</span> <span class=\"token string\">\"Expand to load\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span> id<span class=\"token operator\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> pId<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token string\">\"3\"</span><span class=\"token punctuation\">,</span> title<span class=\"token operator\">:</span> <span class=\"token string\">\"Tree Node\"</span><span class=\"token punctuation\">,</span> isLeaf<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">genTreeNode</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">parentId<span class=\"token punctuation\">,</span> isLeaf <span class=\"token operator\">=</span> <span class=\"token boolean\">false</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> random <span class=\"token operator\">=</span> Math<span class=\"token punctuation\">.</span><span class=\"token function\">random</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">toString</span><span class=\"token punctuation\">(</span><span class=\"token number\">36</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">substring</span><span class=\"token punctuation\">(</span><span class=\"token number\">2</span><span class=\"token punctuation\">,</span> <span class=\"token number\">6</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      id<span class=\"token operator\">:</span> random<span class=\"token punctuation\">,</span>\n      pId<span class=\"token operator\">:</span> parentId<span class=\"token punctuation\">,</span>\n      value<span class=\"token operator\">:</span> random<span class=\"token punctuation\">,</span>\n      title<span class=\"token operator\">:</span> isLeaf <span class=\"token operator\">?</span> <span class=\"token string\">\"Tree Node\"</span> <span class=\"token operator\">:</span> <span class=\"token string\">\"Expand to load\"</span><span class=\"token punctuation\">,</span>\n      isLeaf\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onLoadData</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">treeNode</span> <span class=\"token operator\">=></span>\n    <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">resolve</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> id <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> treeNode<span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n      <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          treeData<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>treeData<span class=\"token punctuation\">.</span><span class=\"token function\">concat</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">genTreeNode</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">,</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n            <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">genTreeNode</span><span class=\"token punctuation\">(</span>id<span class=\"token punctuation\">,</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">)</span>\n          <span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token number\">300</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> treeData <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeSelect</span></span>\n        <span class=\"token attr-name\">treeDataSimpleMode</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token operator\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token operator\">:</span> <span class=\"token string\">\"auto\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please select<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">loadData</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onLoadData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _fastwoman = __webpack_require__(/*! fastwoman */ "./node_modules/fastwoman/dist/index.esm.js");

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
        value: undefined,
        treeData: [{
          id: 1,
          pId: 0,
          value: "1",
          title: "Expand to load"
        }, {
          id: 2,
          pId: 0,
          value: "2",
          title: "Expand to load"
        }, {
          id: 3,
          pId: 0,
          value: "3",
          title: "Tree Node",
          isLeaf: true
        }]
      });

      _defineProperty(_assertThisInitialized(_this), "genTreeNode", function (parentId) {
        var isLeaf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var random = Math.random().toString(36).substring(2, 6);
        return {
          id: random,
          pId: parentId,
          value: random,
          title: isLeaf ? "Tree Node" : "Expand to load",
          isLeaf: isLeaf
        };
      });

      _defineProperty(_assertThisInitialized(_this), "onLoadData", function (treeNode) {
        return new Promise(function (resolve) {
          var id = treeNode.props.id;
          setTimeout(function () {
            _this.setState({
              treeData: _this.state.treeData.concat([_this.genTreeNode(id, false), _this.genTreeNode(id, true)])
            });

            resolve();
          }, 300);
        });
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
        console.log(value);

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var treeData = this.state.treeData;
        return React.createElement(_fastwoman.TreeSelect, {
          treeDataSimpleMode: true,
          style: {
            width: 180
          },
          value: this.state.value,
          dropdownStyle: {
            maxHeight: 400,
            overflow: "auto"
          },
          placeholder: "Please select",
          onChange: this.onChange,
          loadData: this.onLoadData,
          treeData: treeData
        });
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-basic.md":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-basic.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "适用性较广的基础树型选择，用 Tag 展示已选项。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基础树形选择器",
      "en-US": null
    },
    "filename": "components/tree-select/demo/orient-basic.md",
    "id": "components-tree-select-demo-orient-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tooltip <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">\"react\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TreeNode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目1\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-0\"</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"二级条目1\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"二级条目1\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-0-1\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字1\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字1\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-0-2\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字2\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字2\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-0-3\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字3\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字3\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目2\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目2\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-0\"</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"二级条目2\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"二级条目2\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-0-1\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字4\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字4\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-0-2\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字5\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字5\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-0-3\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字6\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字6\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-3\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目最多展示十字1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目最多展示十字1\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-4\"</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目最多展示十字2\"</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目最多展示十字2\"</span> <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"onChange \"</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      treeData<span class=\"token punctuation\">,</span>\n      value<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n      onChange<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">,</span>\n      treeCheckable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      searchPlaceholder<span class=\"token punctuation\">:</span> <span class=\"token string\">\"请选择\"</span><span class=\"token punctuation\">,</span>\n      maxTagCount<span class=\"token punctuation\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      style<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        width<span class=\"token punctuation\">:</span> <span class=\"token number\">180</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token function\">maxTagPlaceholder</span><span class=\"token punctuation\">(</span>omittedValues<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token template-string\"><span class=\"token string\">`+</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>omittedValues<span class=\"token punctuation\">.</span>length<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>TreeSelect <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span> showSearch<span class=\"token operator\">></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TreeSelect</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tooltip <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">\"react\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TreeNode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目1\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-0\"</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">\"二级条目1\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"二级条目1\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-0-1\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字1\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字1\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-0-2\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字2\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字2\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-0-3\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字3\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字3\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目2\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目2\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-0\"</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">\"二级条目2\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"二级条目2\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-0-1\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字4\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字4\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-0-2\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字5\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字5\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-0-3\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字6\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字6\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-3\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目最多展示十字1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目最多展示十字1\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-4\"</span><span class=\"token punctuation\">,</span> title<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目最多展示十字2\"</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目最多展示十字2\"</span> <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"onChange \"</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      treeData<span class=\"token punctuation\">,</span>\n      value<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">,</span>\n      onChange<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">,</span>\n      treeCheckable<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      searchPlaceholder<span class=\"token operator\">:</span> <span class=\"token string\">\"请选择\"</span><span class=\"token punctuation\">,</span>\n      maxTagCount<span class=\"token operator\">:</span> <span class=\"token number\">1</span><span class=\"token punctuation\">,</span>\n      style<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n        width<span class=\"token operator\">:</span> <span class=\"token number\">180</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token function\">maxTagPlaceholder</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">omittedValues</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">return</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">+</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>omittedValues<span class=\"token punctuation\">.</span>length<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeSelect</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">showSearch</span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TreeSelect</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _fastwoman = __webpack_require__(/*! fastwoman */ "./node_modules/fastwoman/dist/index.esm.js");

  var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

  var TreeNode = _fastwoman.TreeSelect.TreeNode;
  var treeData = [{
    key: "0-0",
    title: "一级条目1",
    value: "一级条目1",
    children: [{
      key: "0-0-0",
      title: "二级条目1",
      value: "二级条目1",
      children: [{
        key: "0-0-0-1",
        title: "三级条目最多七个字1",
        value: "三级条目最多七个字1"
      }, {
        key: "0-0-0-2",
        title: "三级条目最多七个字2",
        value: "三级条目最多七个字2"
      }, {
        key: "0-0-0-3",
        title: "三级条目最多七个字3",
        value: "三级条目最多七个字3"
      }]
    }]
  }, {
    key: "0-1",
    title: "一级条目2",
    value: "一级条目2",
    children: [{
      key: "0-1-0",
      title: "二级条目2",
      value: "二级条目2",
      children: [{
        key: "0-1-0-1",
        title: "三级条目最多七个字4",
        value: "三级条目最多七个字4"
      }, {
        key: "0-1-0-2",
        title: "三级条目最多七个字5",
        value: "三级条目最多七个字5"
      }, {
        key: "0-1-0-3",
        title: "三级条目最多七个字6",
        value: "三级条目最多七个字6"
      }]
    }]
  }, {
    key: "0-3",
    title: "一级条目最多展示十字1",
    value: "一级条目最多展示十字1"
  }, {
    key: "0-4",
    title: "一级条目最多展示十字2",
    value: "一级条目最多展示十字2"
  }];

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
        value: []
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
        console.log("onChange ", value);

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var props = {
          treeData: treeData,
          value: this.state.value,
          onChange: this.onChange,
          treeCheckable: true,
          searchPlaceholder: "请选择",
          maxTagCount: 1,
          style: {
            width: 180
          },
          maxTagPlaceholder: function maxTagPlaceholder(omittedValues) {
            return "+".concat(omittedValues.length);
          }
        };
        return _react["default"].createElement(_fastwoman.TreeSelect, _extends({}, props, {
          showSearch: true
        }));
      }
    }]);

    return Demo;
  }(_react["default"].Component);

  return _react["default"].createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-disabled.md":
/*!************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-disabled.md ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "树形选择器不可用的状态。"
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
    "filename": "components/tree-select/demo/orient-disabled.md",
    "id": "components-tree-select-demo-orient-disabled"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TreeNode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目1\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-0\"</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"二级条目1\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"二级条目1\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-0-1\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字1\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字1\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-0-2\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字2\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字2\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-0-3\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字3\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字3\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目2\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目2\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-0\"</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"二级条目2\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"二级条目2\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-0-1\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字4\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字4\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-0-2\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字5\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字5\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-0-3\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字6\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"三级条目最多七个字6\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-3\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目最多展示十字1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目最多展示十字1\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-4\"</span><span class=\"token punctuation\">,</span> title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目最多展示十字2\"</span><span class=\"token punctuation\">,</span> value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"一级条目最多展示十字2\"</span> <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> undefined\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeSelect</span>\n        <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">\"一级条目最多展示十字2\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"一级条目最多展示十字1\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token punctuation\">:</span> <span class=\"token string\">\"auto\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请选择<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">allowClear</span>\n        <span class=\"token attr-name\">multiple</span>\n        <span class=\"token attr-name\">treeDefaultExpandAll</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">disabled</span>\n        <span class=\"token attr-name\">maxTagCount</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">maxTagPlaceholder</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>omittedValues <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token template-string\"><span class=\"token string\">`+</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>omittedValues<span class=\"token punctuation\">.</span>length<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TreeNode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目1\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-0\"</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">\"二级条目1\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"二级条目1\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-0-1\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字1\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字1\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-0-2\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字2\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字2\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-0-3\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字3\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字3\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目2\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目2\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-0\"</span><span class=\"token punctuation\">,</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">\"二级条目2\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"二级条目2\"</span><span class=\"token punctuation\">,</span>\n        children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-0-1\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字4\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字4\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-0-2\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字5\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字5\"</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">{</span>\n            key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-0-3\"</span><span class=\"token punctuation\">,</span>\n            title<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字6\"</span><span class=\"token punctuation\">,</span>\n            value<span class=\"token operator\">:</span> <span class=\"token string\">\"三级条目最多七个字6\"</span>\n          <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">]</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-3\"</span><span class=\"token punctuation\">,</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目最多展示十字1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目最多展示十字1\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span> key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-4\"</span><span class=\"token punctuation\">,</span> title<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目最多展示十字2\"</span><span class=\"token punctuation\">,</span> value<span class=\"token operator\">:</span> <span class=\"token string\">\"一级条目最多展示十字2\"</span> <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token keyword\">undefined</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeSelect</span></span>\n        <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">showSearch</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">[</span><span class=\"token string\">\"一级条目最多展示十字2\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"一级条目最多展示十字1\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token operator\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token operator\">:</span> <span class=\"token string\">\"auto\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请选择<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">allowClear</span>\n        <span class=\"token attr-name\">multiple</span>\n        <span class=\"token attr-name\">treeDefaultExpandAll</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">disabled</span>\n        <span class=\"token attr-name\">maxTagCount</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">maxTagPlaceholder</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">omittedValues</span> <span class=\"token operator\">=></span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token string\">+</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>omittedValues<span class=\"token punctuation\">.</span>length<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _fastwoman = __webpack_require__(/*! fastwoman */ "./node_modules/fastwoman/dist/index.esm.js");

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

  var TreeNode = _fastwoman.TreeSelect.TreeNode;
  var treeData = [{
    key: "0-0",
    title: "一级条目1",
    value: "一级条目1",
    children: [{
      key: "0-0-0",
      title: "二级条目1",
      value: "二级条目1",
      children: [{
        key: "0-0-0-1",
        title: "三级条目最多七个字1",
        value: "三级条目最多七个字1"
      }, {
        key: "0-0-0-2",
        title: "三级条目最多七个字2",
        value: "三级条目最多七个字2"
      }, {
        key: "0-0-0-3",
        title: "三级条目最多七个字3",
        value: "三级条目最多七个字3"
      }]
    }]
  }, {
    key: "0-1",
    title: "一级条目2",
    value: "一级条目2",
    children: [{
      key: "0-1-0",
      title: "二级条目2",
      value: "二级条目2",
      children: [{
        key: "0-1-0-1",
        title: "三级条目最多七个字4",
        value: "三级条目最多七个字4"
      }, {
        key: "0-1-0-2",
        title: "三级条目最多七个字5",
        value: "三级条目最多七个字5"
      }, {
        key: "0-1-0-3",
        title: "三级条目最多七个字6",
        value: "三级条目最多七个字6"
      }]
    }]
  }, {
    key: "0-3",
    title: "一级条目最多展示十字1",
    value: "一级条目最多展示十字1"
  }, {
    key: "0-4",
    title: "一级条目最多展示十字2",
    value: "一级条目最多展示十字2"
  }];

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
        value: undefined
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
        console.log(value);

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        return React.createElement(_fastwoman.TreeSelect, {
          treeData: treeData,
          showSearch: true,
          style: {
            width: 180
          },
          value: ["一级条目最多展示十字2", "一级条目最多展示十字1"],
          dropdownStyle: {
            maxHeight: 400,
            overflow: "auto"
          },
          placeholder: "\u8BF7\u9009\u62E9",
          allowClear: true,
          multiple: true,
          treeDefaultExpandAll: true,
          onChange: this.onChange,
          disabled: true,
          maxTagCount: 1,
          maxTagPlaceholder: function maxTagPlaceholder(omittedValues) {
            return "+".concat(omittedValues.length);
          }
        });
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-showAll.md":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-showAll.md ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以仅在输入框中显示选中项所在的完整路径，而不是选中项最后一级的标签。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "显示完整的路径",
      "en-US": null
    },
    "filename": "components/tree-select/demo/orient-showAll.md",
    "id": "components-tree-select-demo-orient-showAll"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TreeNode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Node1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Child Node1\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-0\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-0\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Node2\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1\"</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Child Node3\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-0\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-0\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Child Node4\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-1\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-1\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Child Node5\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-2\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1-2\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value1<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"0-0-0\"</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeSelect</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">treeCheckable</span>\n        <span class=\"token attr-name\">searchPlaceholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请选择<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">showAllLevels</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> TreeNode <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> TreeSelect<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"Node1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">\"Child Node1\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-0\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-0\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"Node2\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1\"</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">\"Child Node3\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-0\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-0\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">\"Child Node4\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-1\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-1\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">\"Child Node5\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-2\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1-2\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value1<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"0-0-0\"</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeSelect</span></span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">treeCheckable</span>\n        <span class=\"token attr-name\">searchPlaceholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>请选择<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">showAllLevels</span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _fastwoman = __webpack_require__(/*! fastwoman */ "./node_modules/fastwoman/dist/index.esm.js");

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

  var TreeNode = _fastwoman.TreeSelect.TreeNode;
  var treeData = [{
    title: "Node1",
    value: "0-0",
    key: "0-0",
    children: [{
      title: "Child Node1",
      value: "0-0-0",
      key: "0-0-0"
    }]
  }, {
    title: "Node2",
    value: "0-1",
    key: "0-1",
    children: [{
      title: "Child Node3",
      value: "0-1-0",
      key: "0-1-0"
    }, {
      title: "Child Node4",
      value: "0-1-1",
      key: "0-1-1"
    }, {
      title: "Child Node5",
      value: "0-1-2",
      key: "0-1-2"
    }]
  }];

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
        value1: ["0-0-0"]
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
        console.log(value);

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        return React.createElement(_fastwoman.TreeSelect, {
          style: {
            width: 180
          },
          treeData: treeData,
          value: this.state.value,
          onChange: this.onChange,
          treeCheckable: true,
          searchPlaceholder: "\u8BF7\u9009\u62E9",
          showAllLevels: true
        });
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-treeData.md":
/*!************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-treeData.md ***!
  \************************************************************************************************************/
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
          "treeData"
        ],
        " 把 JSON 数据直接生成树结构。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The tree structure can be populated using ",
        [
          "code",
          "treeData"
        ],
        " property. This is a quick and easy way to provide the tree content."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "从数据直接生成",
      "en-US": "Generate from tree data"
    },
    "filename": "components/tree-select/demo/orient-treeData.md",
    "id": "components-tree-select-demo-orient-treeData"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Node1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Child Node1\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-1\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-1\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Child Node2\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-2\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-0-2\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">\"Node2\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1\"</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">\"0-1\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> undefined\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeSelect</span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token punctuation\">:</span> <span class=\"token string\">\"auto\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select\"</span>\n          <span class=\"token attr-name\">treeDefaultExpandAll</span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"Node1\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0\"</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">\"Child Node1\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-1\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-1\"</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">\"Child Node2\"</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-2\"</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-0-2\"</span>\n      <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">\"Node2\"</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1\"</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">\"0-1\"</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token keyword\">undefined</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeSelect</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">180</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token operator\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token operator\">:</span> <span class=\"token string\">\"auto\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please select<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">treeDefaultExpandAll</span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _fastwoman = __webpack_require__(/*! fastwoman */ "./node_modules/fastwoman/dist/index.esm.js");

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

  var treeData = [{
    title: "Node1",
    value: "0-0",
    key: "0-0",
    children: [{
      title: "Child Node1",
      value: "0-0-1",
      key: "0-0-1"
    }, {
      title: "Child Node2",
      value: "0-0-2",
      key: "0-0-2"
    }]
  }, {
    title: "Node2",
    value: "0-1",
    key: "0-1"
  }];

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
        value: undefined
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
        console.log(value);

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        return React.createElement("div", null, React.createElement(_fastwoman.TreeSelect, {
          style: {
            width: 180
          },
          value: this.state.value,
          dropdownStyle: {
            maxHeight: 400,
            overflow: "auto"
          },
          treeData: treeData,
          placeholder: "Please select",
          treeDefaultExpandAll: true,
          onChange: this.onChange
        }));
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/suffix.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/suffix.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "meta": {

  }
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/treeData.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/treeData.md ***!
  \*****************************************************************************************************/
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
          "treeData"
        ],
        " 把 JSON 数据直接生成树结构。"
      ]
    ],
    "en-US": [
      [
        "p",
        "The tree structure can be populated using ",
        [
          "code",
          "treeData"
        ],
        " property. This is a quick and easy way to provide the tree content."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "从数据直接生成",
      "en-US": "Generate from tree data"
    },
    "filename": "components/tree-select/demo/treeData.md",
    "id": "components-tree-select-demo-treeData"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Node1'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node1'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-1'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-1'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Child Node2'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-2'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-0-2'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token punctuation\">:</span> <span class=\"token string\">'Node2'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token punctuation\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token punctuation\">:</span> undefined<span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> value <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TreeSelect</span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token punctuation\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token punctuation\">:</span> <span class=\"token string\">'auto'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please</span> <span class=\"token attr-name\">select\"</span>\n        <span class=\"token attr-name\">treeDefaultExpandAll</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TreeSelect <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> treeData <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Node1'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">'0-0'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">'Child Node1'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'0-0-1'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">'0-0-1'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        title<span class=\"token operator\">:</span> <span class=\"token string\">'Child Node2'</span><span class=\"token punctuation\">,</span>\n        value<span class=\"token operator\">:</span> <span class=\"token string\">'0-0-2'</span><span class=\"token punctuation\">,</span>\n        key<span class=\"token operator\">:</span> <span class=\"token string\">'0-0-2'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    title<span class=\"token operator\">:</span> <span class=\"token string\">'Node2'</span><span class=\"token punctuation\">,</span>\n    value<span class=\"token operator\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n    key<span class=\"token operator\">:</span> <span class=\"token string\">'0-1'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    value<span class=\"token operator\">:</span> <span class=\"token keyword\">undefined</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">value</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>value<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TreeSelect</span></span>\n        <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>value<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">dropdownStyle</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> maxHeight<span class=\"token operator\">:</span> <span class=\"token number\">400</span><span class=\"token punctuation\">,</span> overflow<span class=\"token operator\">:</span> <span class=\"token string\">'auto'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">treeData</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>treeData<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">placeholder</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Please select<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">treeDefaultExpandAll</span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var treeData = [{
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [{
      title: 'Child Node1',
      value: '0-0-1',
      key: '0-0-1'
    }, {
      title: 'Child Node2',
      value: '0-0-2',
      key: '0-0-2'
    }]
  }, {
    title: 'Node2',
    value: '0-1',
    key: '0-1'
  }];

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
        value: undefined
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (value) {
        console.log(value);

        _this.setState({
          value: value
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        return React.createElement(_antd.TreeSelect, {
          style: {
            width: '100%'
          },
          value: this.state.value,
          dropdownStyle: {
            maxHeight: 400,
            overflow: 'auto'
          },
          treeData: treeData,
          placeholder: "Please select",
          treeDefaultExpandAll: true,
          onChange: this.onChange
        });
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ })

}]);
//# sourceMappingURL=demo.js.map