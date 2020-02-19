(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/tag/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/animation.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/animation.md ***!
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
          "a",
          {
            "title": null,
            "href": "https://github.com/react-component/tween-one"
          },
          "rc-tween-one"
        ],
        " 给标签增加添加或删除动画。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Animating the Tag by using ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/react-component/tween-one"
          },
          "rc-tween-one"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 6,
    "title": {
      "zh-CN": "添加动画",
      "en-US": "Animate"
    },
    "filename": "components/tag/demo/animation.md",
    "id": "components-tag-demo-animation"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TweenOneGroup <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'rc-tween-one'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableTagGroup</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    tags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Tag 1'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 2'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 3'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    inputValue<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleClose <span class=\"token operator\">=</span> removedTag <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> tags <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>tag <span class=\"token operator\">=</span><span class=\"token operator\">></span> tag <span class=\"token operator\">!==</span> removedTag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  showInput <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleInputChange <span class=\"token operator\">=</span> e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputValue<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleInputConfirm <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>inputValue <span class=\"token operator\">&amp;&amp;</span> tags<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      tags <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>tags<span class=\"token punctuation\">,</span> inputValue<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      tags<span class=\"token punctuation\">,</span>\n      inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      inputValue<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  saveInputRef <span class=\"token operator\">=</span> input <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input <span class=\"token operator\">=</span> input<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  forMap <span class=\"token operator\">=</span> tag <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> tagElem <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span>\n        <span class=\"token attr-name\">closable</span>\n        <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleClose</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> display<span class=\"token punctuation\">:</span> <span class=\"token string\">'inline-block'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tagElem<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> tags<span class=\"token punctuation\">,</span> inputVisible<span class=\"token punctuation\">,</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> tagChild <span class=\"token operator\">=</span> tags<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>forMap<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>TweenOneGroup</span>\n            <span class=\"token attr-name\">enter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n              scale<span class=\"token punctuation\">:</span> <span class=\"token number\">0.8</span><span class=\"token punctuation\">,</span>\n              opacity<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n              type<span class=\"token punctuation\">:</span> <span class=\"token string\">'from'</span><span class=\"token punctuation\">,</span>\n              duration<span class=\"token punctuation\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n              onComplete<span class=\"token punctuation\">:</span> e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n                e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>style <span class=\"token operator\">=</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n              <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span></span><span class=\"token attr-name\">}</span>\n            <span class=\"token attr-name\">leave</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> opacity<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> scale<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> duration<span class=\"token punctuation\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">appear</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span>tagChild<span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>TweenOneGroup</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n            <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>saveInputRef<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>text<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">78</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>inputValue<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onBlur</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onPressEnter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>showInput<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> borderStyle<span class=\"token punctuation\">:</span> <span class=\"token string\">'dashed'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> New <span class=\"token class-name\">Tag</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableTagGroup</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> TweenOneGroup <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'rc-tween-one'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableTagGroup</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    tags<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Tag 1'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 2'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 3'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    inputVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    inputValue<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleClose</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">removedTag</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> tags <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">tag</span> <span class=\"token operator\">=></span> tag <span class=\"token operator\">!==</span> removedTag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">showInput</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleInputChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputValue<span class=\"token operator\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleInputConfirm</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>inputValue <span class=\"token operator\">&amp;&amp;</span> tags<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      tags <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>tags<span class=\"token punctuation\">,</span> inputValue<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      tags<span class=\"token punctuation\">,</span>\n      inputVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      inputValue<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">saveInputRef</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">input</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input <span class=\"token operator\">=</span> input<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">forMap</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">tag</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> tagElem <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span>\n        <span class=\"token attr-name\">closable</span>\n        <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n          e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleClose</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> display<span class=\"token operator\">:</span> <span class=\"token string\">'inline-block'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tagElem<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> tags<span class=\"token punctuation\">,</span> inputVisible<span class=\"token punctuation\">,</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> tagChild <span class=\"token operator\">=</span> tags<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>forMap<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token operator\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">TweenOneGroup</span></span>\n            <span class=\"token attr-name\">enter</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n              scale<span class=\"token operator\">:</span> <span class=\"token number\">0.8</span><span class=\"token punctuation\">,</span>\n              opacity<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span>\n              type<span class=\"token operator\">:</span> <span class=\"token string\">'from'</span><span class=\"token punctuation\">,</span>\n              duration<span class=\"token operator\">:</span> <span class=\"token number\">100</span><span class=\"token punctuation\">,</span>\n              <span class=\"token function-variable function\">onComplete</span><span class=\"token operator\">:</span> <span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n                e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>style <span class=\"token operator\">=</span> <span class=\"token string\">''</span><span class=\"token punctuation\">;</span>\n              <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">leave</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> opacity<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> width<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> scale<span class=\"token operator\">:</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> duration<span class=\"token operator\">:</span> <span class=\"token number\">200</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">appear</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span>tagChild<span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">TweenOneGroup</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n            <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>saveInputRef<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>text<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">78</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>inputValue<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onBlur</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onPressEnter</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>showInput<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> background<span class=\"token operator\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> borderStyle<span class=\"token operator\">:</span> <span class=\"token string\">'dashed'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> New Tag\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">EditableTagGroup</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var _rcTweenOne = __webpack_require__(/*! rc-tween-one */ "./node_modules/rc-tween-one/es/index.js");

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

  var EditableTagGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(EditableTagGroup, _React$Component);

    function EditableTagGroup() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, EditableTagGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditableTagGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        tags: ['Tag 1', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      });

      _defineProperty(_assertThisInitialized(_this), "handleClose", function (removedTag) {
        var tags = _this.state.tags.filter(function (tag) {
          return tag !== removedTag;
        });

        console.log(tags);

        _this.setState({
          tags: tags
        });
      });

      _defineProperty(_assertThisInitialized(_this), "showInput", function () {
        _this.setState({
          inputVisible: true
        }, function () {
          return _this.input.focus();
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
        _this.setState({
          inputValue: e.target.value
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleInputConfirm", function () {
        var inputValue = _this.state.inputValue;
        var tags = _this.state.tags;

        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [].concat(_toConsumableArray(tags), [inputValue]);
        }

        console.log(tags);

        _this.setState({
          tags: tags,
          inputVisible: false,
          inputValue: ''
        });
      });

      _defineProperty(_assertThisInitialized(_this), "saveInputRef", function (input) {
        return _this.input = input;
      });

      _defineProperty(_assertThisInitialized(_this), "forMap", function (tag) {
        var tagElem = React.createElement(_antd.Tag, {
          closable: true,
          onClose: function onClose(e) {
            e.preventDefault();

            _this.handleClose(tag);
          }
        }, tag);
        return React.createElement("span", {
          key: tag,
          style: {
            display: 'inline-block'
          }
        }, tagElem);
      });

      return _this;
    }

    _createClass(EditableTagGroup, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            tags = _this$state.tags,
            inputVisible = _this$state.inputVisible,
            inputValue = _this$state.inputValue;
        var tagChild = tags.map(this.forMap);
        return React.createElement("div", null, React.createElement("div", {
          style: {
            marginBottom: 16
          }
        }, React.createElement(_rcTweenOne.TweenOneGroup, {
          enter: {
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
            onComplete: function onComplete(e) {
              e.target.style = '';
            }
          },
          leave: {
            opacity: 0,
            width: 0,
            scale: 0,
            duration: 200
          },
          appear: false
        }, tagChild)), inputVisible && React.createElement(_antd.Input, {
          ref: this.saveInputRef,
          type: "text",
          size: "small",
          style: {
            width: 78
          },
          value: inputValue,
          onChange: this.handleInputChange,
          onBlur: this.handleInputConfirm,
          onPressEnter: this.handleInputConfirm
        }), !inputVisible && React.createElement(_antd.Tag, {
          onClick: this.showInput,
          style: {
            background: '#fff',
            borderStyle: 'dashed'
          }
        }, React.createElement(_antd.Icon, {
          type: "plus"
        }), " New Tag"));
      }
    }]);

    return EditableTagGroup;
  }(React.Component);

  return React.createElement(EditableTagGroup, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/basic.md":
/*!******************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/basic.md ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "基本标签的用法，可以通过添加 ",
        [
          "code",
          "closable"
        ],
        " 变为可关闭标签。可关闭标签具有 ",
        [
          "code",
          "onClose"
        ],
        " 事件。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Usage of basic Tag, and it could be closable by set ",
        [
          "code",
          "closable"
        ],
        " property. Closable Tag supports ",
        [
          "code",
          "onClose"
        ],
        " events."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/tag/demo/basic.md",
    "id": "components-tag-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Clicked! But prevent default.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span><span class=\"token punctuation\">></span></span>Tag <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://github.com/ant-design/ant-design/issues/1862<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>log<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      Tag <span class=\"token number\">2</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>preventDefault<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      Prevent Default\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Clicked! But prevent default.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>Tag <span class=\"token number\">1</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://github.com/ant-design/ant-design/issues/1862<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Link<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>log<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      Tag <span class=\"token number\">2</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>preventDefault<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      Prevent Default\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  function log(e) {
    console.log(e);
  }

  function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }

  return React.createElement("div", null, React.createElement(_antd.Tag, null, "Tag 1"), React.createElement(_antd.Tag, null, React.createElement("a", {
    href: "https://github.com/ant-design/ant-design/issues/1862"
  }, "Link")), React.createElement(_antd.Tag, {
    closable: true,
    onClose: log
  }, "Tag 2"), React.createElement(_antd.Tag, {
    closable: true,
    onClose: preventDefault
  }, "Prevent Default"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/checkable.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/checkable.md ***!
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
          "CheckableTag"
        ],
        " 实现类似 Checkbox 的效果，点击切换选中效果。"
      ],
      [
        "blockquote",
        [
          "p",
          "该组件为完全受控组件，不支持非受控用法。"
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        [
          "code",
          "CheckableTag"
        ],
        " works like Checkbox, click it to toggle checked state."
      ],
      [
        "blockquote",
        [
          "p",
          "it is an absolute controlled component and has no uncontrolled mode."
        ]
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "可选择",
      "en-US": "Checkable"
    },
    "filename": "components/tag/demo/checkable.md",
    "id": "components-tag-demo-checkable"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> CheckableTag <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Tag<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">MyTag</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> checked<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleChange <span class=\"token operator\">=</span> checked <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> checked <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>CheckableTag <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">}</span> checked<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">}</span> onChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MyTag</span><span class=\"token punctuation\">></span></span>Tag1<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>MyTag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MyTag</span><span class=\"token punctuation\">></span></span>Tag2<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>MyTag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MyTag</span><span class=\"token punctuation\">></span></span>Tag3<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>MyTag</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> CheckableTag <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Tag<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">MyTag</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span> checked<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">checked</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> checked <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">CheckableTag</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">this</span><span class=\"token punctuation\">.</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>checked<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">MyTag</span></span><span class=\"token punctuation\">></span></span>Tag1<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">MyTag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">MyTag</span></span><span class=\"token punctuation\">></span></span>Tag2<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">MyTag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">MyTag</span></span><span class=\"token punctuation\">></span></span>Tag3<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">MyTag</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var CheckableTag = _antd.Tag.CheckableTag;

  var MyTag =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(MyTag, _React$Component);

    function MyTag() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MyTag);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyTag)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        checked: true
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (checked) {
        _this.setState({
          checked: checked
        });
      });

      return _this;
    }

    _createClass(MyTag, [{
      key: "render",
      value: function render() {
        return React.createElement(CheckableTag, _extends({}, this.props, {
          checked: this.state.checked,
          onChange: this.handleChange
        }));
      }
    }]);

    return MyTag;
  }(React.Component);

  return React.createElement("div", null, React.createElement(MyTag, null, "Tag1"), React.createElement(MyTag, null, "Tag2"), React.createElement(MyTag, null, "Tag3"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/colorful.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/colorful.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "我们添加了多种预设色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。"
      ]
    ],
    "en-US": [
      [
        "p",
        "We preset a series of colorful tag styles for use in different situations. You can also set it to a hex color string for custom color."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "多彩标签",
      "en-US": "Colorful Tag"
    },
    "filename": "components/tag/demo/colorful.md",
    "id": "components-tag-demo-colorful"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h4</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Presets<span class=\"token punctuation\">:</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h4</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>magenta<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>magenta<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>red<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>volcano<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>volcano<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>orange<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>orange<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>gold<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>gold<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>lime<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>lime<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>green<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>green<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>cyan<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>cyan<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>blue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>blue<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>geekblue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>geekblue<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>purple<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>purple<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h4</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Custom<span class=\"token punctuation\">:</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h4</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#f50<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>#f50<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#2db7f5<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>#2db7f5<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#87d068<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>#87d068<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#108ee9<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>#108ee9<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h4</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginBottom<span class=\"token operator\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Presets<span class=\"token operator\">:</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h4</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>magenta<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>magenta<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>red<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>volcano<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>volcano<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>orange<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>orange<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>gold<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>gold<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>lime<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>lime<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>green<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>green<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>cyan<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>cyan<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>blue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>blue<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>geekblue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>geekblue<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>purple<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>purple<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h4</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> margin<span class=\"token operator\">:</span> <span class=\"token string\">'16px 0'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Custom<span class=\"token operator\">:</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h4</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#f50<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>#f50<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#2db7f5<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>#<span class=\"token number\">2</span>db7f5<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#87d068<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>#<span class=\"token number\">87</span>d068<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#108ee9<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>#<span class=\"token number\">108</span>ee9<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement("div", null, React.createElement("h4", {
    style: {
      marginBottom: 16
    }
  }, "Presets:"), React.createElement("div", null, React.createElement(_antd.Tag, {
    color: "magenta"
  }, "magenta"), React.createElement(_antd.Tag, {
    color: "red"
  }, "red"), React.createElement(_antd.Tag, {
    color: "volcano"
  }, "volcano"), React.createElement(_antd.Tag, {
    color: "orange"
  }, "orange"), React.createElement(_antd.Tag, {
    color: "gold"
  }, "gold"), React.createElement(_antd.Tag, {
    color: "lime"
  }, "lime"), React.createElement(_antd.Tag, {
    color: "green"
  }, "green"), React.createElement(_antd.Tag, {
    color: "cyan"
  }, "cyan"), React.createElement(_antd.Tag, {
    color: "blue"
  }, "blue"), React.createElement(_antd.Tag, {
    color: "geekblue"
  }, "geekblue"), React.createElement(_antd.Tag, {
    color: "purple"
  }, "purple")), React.createElement("h4", {
    style: {
      margin: '16px 0'
    }
  }, "Custom:"), React.createElement("div", null, React.createElement(_antd.Tag, {
    color: "#f50"
  }, "#f50"), React.createElement(_antd.Tag, {
    color: "#2db7f5"
  }, "#2db7f5"), React.createElement(_antd.Tag, {
    color: "#87d068"
  }, "#87d068"), React.createElement(_antd.Tag, {
    color: "#108ee9"
  }, "#108ee9")));
},
  "style": ".ant-tag {\n  margin-bottom: 8px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.ant-tag</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-bottom</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/control.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/control.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "用数组生成一组标签，可以动态添加和删除。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Generating a set of Tags by array, you can add and remove dynamically."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "动态添加和删除",
      "en-US": "Add & Remove Dynamically"
    },
    "filename": "components/tag/demo/control.md",
    "id": "components-tag-demo-control"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableTagGroup</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    tags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Unremovable'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 2'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 3'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    inputValue<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleClose <span class=\"token operator\">=</span> removedTag <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> tags <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>tag <span class=\"token operator\">=</span><span class=\"token operator\">></span> tag <span class=\"token operator\">!==</span> removedTag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  showInput <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleInputChange <span class=\"token operator\">=</span> e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputValue<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleInputConfirm <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>inputValue <span class=\"token operator\">&amp;&amp;</span> tags<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      tags <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>tags<span class=\"token punctuation\">,</span> inputValue<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      tags<span class=\"token punctuation\">,</span>\n      inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      inputValue<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  saveInputRef <span class=\"token operator\">=</span> input <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input <span class=\"token operator\">=</span> input<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> tags<span class=\"token punctuation\">,</span> inputVisible<span class=\"token punctuation\">,</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">const</span> isLongTag <span class=\"token operator\">=</span> tag<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">const</span> tagElem <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">closable</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>index <span class=\"token operator\">!==</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleClose</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>isLongTag <span class=\"token operator\">?</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>tag<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">...`</span></span> <span class=\"token punctuation\">:</span> tag<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">return</span> isLongTag <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>tagElem<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>\n            tagElem\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n            <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>saveInputRef<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>text<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">78</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>inputValue<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onBlur</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onPressEnter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>showInput<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> background<span class=\"token punctuation\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> borderStyle<span class=\"token punctuation\">:</span> <span class=\"token string\">'dashed'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> New <span class=\"token class-name\">Tag</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableTagGroup</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableTagGroup</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    tags<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Unremovable'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 2'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Tag 3'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    inputVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    inputValue<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleClose</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">removedTag</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> tags <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">tag</span> <span class=\"token operator\">=></span> tag <span class=\"token operator\">!==</span> removedTag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">showInput</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleInputChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputValue<span class=\"token operator\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleInputConfirm</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>inputValue <span class=\"token operator\">&amp;&amp;</span> tags<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      tags <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>tags<span class=\"token punctuation\">,</span> inputValue<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      tags<span class=\"token punctuation\">,</span>\n      inputVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      inputValue<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">saveInputRef</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">input</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input <span class=\"token operator\">=</span> input<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> tags<span class=\"token punctuation\">,</span> inputVisible<span class=\"token punctuation\">,</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">tag<span class=\"token punctuation\">,</span> index</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">const</span> isLongTag <span class=\"token operator\">=</span> tag<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">const</span> tagElem <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">closable</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>index <span class=\"token operator\">!==</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleClose</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>isLongTag <span class=\"token operator\">?</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>tag<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">...</span><span class=\"token template-punctuation string\">`</span></span> <span class=\"token operator\">:</span> tag<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">return</span> isLongTag <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tooltip</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>tagElem<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tooltip</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span>\n            tagElem\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n            <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>saveInputRef<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>text<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">78</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>inputValue<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onBlur</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onPressEnter</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>showInput<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> background<span class=\"token operator\">:</span> <span class=\"token string\">'#fff'</span><span class=\"token punctuation\">,</span> borderStyle<span class=\"token operator\">:</span> <span class=\"token string\">'dashed'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> New Tag\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">EditableTagGroup</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var EditableTagGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(EditableTagGroup, _React$Component);

    function EditableTagGroup() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, EditableTagGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditableTagGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        tags: ['Unremovable', 'Tag 2', 'Tag 3'],
        inputVisible: false,
        inputValue: ''
      });

      _defineProperty(_assertThisInitialized(_this), "handleClose", function (removedTag) {
        var tags = _this.state.tags.filter(function (tag) {
          return tag !== removedTag;
        });

        console.log(tags);

        _this.setState({
          tags: tags
        });
      });

      _defineProperty(_assertThisInitialized(_this), "showInput", function () {
        _this.setState({
          inputVisible: true
        }, function () {
          return _this.input.focus();
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
        _this.setState({
          inputValue: e.target.value
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleInputConfirm", function () {
        var inputValue = _this.state.inputValue;
        var tags = _this.state.tags;

        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [].concat(_toConsumableArray(tags), [inputValue]);
        }

        console.log(tags);

        _this.setState({
          tags: tags,
          inputVisible: false,
          inputValue: ''
        });
      });

      _defineProperty(_assertThisInitialized(_this), "saveInputRef", function (input) {
        return _this.input = input;
      });

      return _this;
    }

    _createClass(EditableTagGroup, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            tags = _this$state.tags,
            inputVisible = _this$state.inputVisible,
            inputValue = _this$state.inputValue;
        return React.createElement("div", null, tags.map(function (tag, index) {
          var isLongTag = tag.length > 20;
          var tagElem = React.createElement(_antd.Tag, {
            key: tag,
            closable: index !== 0,
            onClose: function onClose() {
              return _this2.handleClose(tag);
            }
          }, isLongTag ? "".concat(tag.slice(0, 20), "...") : tag);
          return isLongTag ? React.createElement(_antd.Tooltip, {
            title: tag,
            key: tag
          }, tagElem) : tagElem;
        }), inputVisible && React.createElement(_antd.Input, {
          ref: this.saveInputRef,
          type: "text",
          size: "small",
          style: {
            width: 78
          },
          value: inputValue,
          onChange: this.handleInputChange,
          onBlur: this.handleInputConfirm,
          onPressEnter: this.handleInputConfirm
        }), !inputVisible && React.createElement(_antd.Tag, {
          onClick: this.showInput,
          style: {
            background: '#fff',
            borderStyle: 'dashed'
          }
        }, React.createElement(_antd.Icon, {
          type: "plus"
        }), " New Tag"));
      }
    }]);

    return EditableTagGroup;
  }(React.Component);

  return React.createElement(EditableTagGroup, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/controlled.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/controlled.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "通过 ",
        [
          "code",
          "visible"
        ],
        " 属性控制关闭状态。"
      ]
    ],
    "en-US": [
      [
        "p",
        "By using the ",
        [
          "code",
          "visible"
        ],
        " prop, you can control the close state of Tag."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "控制关闭状态",
      "en-US": "Controlled"
    },
    "filename": "components/tag/demo/controlled.md",
    "id": "components-tag-demo-controlled"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span>\n          <span class=\"token attr-name\">closable</span>\n          <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          Movies\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token punctuation\">:</span> <span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          Toggle\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag<span class=\"token punctuation\">,</span> Button <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    visible<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span>\n          <span class=\"token attr-name\">closable</span>\n          <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          Movies\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> visible<span class=\"token operator\">:</span> <span class=\"token operator\">!</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>visible <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          Toggle\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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
        visible: true
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return React.createElement("div", null, React.createElement(_antd.Tag, {
          closable: true,
          visible: this.state.visible,
          onClose: function onClose() {
            return _this2.setState({
              visible: false
            });
          }
        }, "Movies"), React.createElement("br", null), React.createElement(_antd.Button, {
          size: "small",
          onClick: function onClick() {
            return _this2.setState({
              visible: !_this2.state.visible
            });
          }
        }, "Toggle"));
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/hot-tags.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/hot-tags.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "选择你感兴趣的话题。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Select your favourite topics."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "热门标签",
      "en-US": "Hot Tags"
    },
    "filename": "components/tag/demo/hot-tags.md",
    "id": "components-tag-demo-hot-tags"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> CheckableTag <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Tag<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> tagsFromServer <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Movies'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Books'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Music'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Sports'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">HotTags</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    selectedTags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">,</span> checked<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> selectedTags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> nextSelectedTags <span class=\"token operator\">=</span> checked <span class=\"token operator\">?</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>selectedTags<span class=\"token punctuation\">,</span> tag<span class=\"token punctuation\">]</span> <span class=\"token punctuation\">:</span> selectedTags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>t <span class=\"token operator\">=</span><span class=\"token operator\">></span> t <span class=\"token operator\">!==</span> tag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'You are interested in: '</span><span class=\"token punctuation\">,</span> nextSelectedTags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> selectedTags<span class=\"token punctuation\">:</span> nextSelectedTags <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> selectedTags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h6</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginRight<span class=\"token punctuation\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> display<span class=\"token punctuation\">:</span> <span class=\"token string\">'inline'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Categories<span class=\"token punctuation\">:</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h6</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tagsFromServer<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>tag <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>CheckableTag</span>\n            <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">checked={selectedTags.indexOf(tag)</span> <span class=\"token punctuation\">></span></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span>\n            onChange<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span>checked <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">,</span> checked<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n          <span class=\"token operator\">></span>\n            <span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>CheckableTag</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>HotTags</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> CheckableTag <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Tag<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> tagsFromServer <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token string\">'Movies'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Books'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Music'</span><span class=\"token punctuation\">,</span> <span class=\"token string\">'Sports'</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">HotTags</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    selectedTags<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">tag<span class=\"token punctuation\">,</span> checked</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> selectedTags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> nextSelectedTags <span class=\"token operator\">=</span> checked <span class=\"token operator\">?</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>selectedTags<span class=\"token punctuation\">,</span> tag<span class=\"token punctuation\">]</span> <span class=\"token operator\">:</span> selectedTags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">t</span> <span class=\"token operator\">=></span> t <span class=\"token operator\">!==</span> tag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'You are interested in: '</span><span class=\"token punctuation\">,</span> nextSelectedTags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> selectedTags<span class=\"token operator\">:</span> nextSelectedTags <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> selectedTags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>h6</span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginRight<span class=\"token operator\">:</span> <span class=\"token number\">8</span><span class=\"token punctuation\">,</span> display<span class=\"token operator\">:</span> <span class=\"token string\">'inline'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Categories<span class=\"token operator\">:</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>h6</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tagsFromServer<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">tag</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">CheckableTag</span></span>\n            <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">checked</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>selectedTags<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">)</span> <span class=\"token operator\">></span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">checked</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleChange</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">,</span> checked<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">CheckableTag</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">HotTags</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var CheckableTag = _antd.Tag.CheckableTag;
  var tagsFromServer = ['Movies', 'Books', 'Music', 'Sports'];

  var HotTags =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(HotTags, _React$Component);

    function HotTags() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HotTags);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HotTags)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        selectedTags: []
      });

      return _this;
    }

    _createClass(HotTags, [{
      key: "handleChange",
      value: function handleChange(tag, checked) {
        var selectedTags = this.state.selectedTags;
        var nextSelectedTags = checked ? [].concat(_toConsumableArray(selectedTags), [tag]) : selectedTags.filter(function (t) {
          return t !== tag;
        });
        console.log('You are interested in: ', nextSelectedTags);
        this.setState({
          selectedTags: nextSelectedTags
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var selectedTags = this.state.selectedTags;
        return React.createElement("div", null, React.createElement("h6", {
          style: {
            marginRight: 8,
            display: 'inline'
          }
        }, "Categories:"), tagsFromServer.map(function (tag) {
          return React.createElement(CheckableTag, {
            key: tag,
            checked: selectedTags.indexOf(tag) > -1,
            onChange: function onChange(checked) {
              return _this2.handleChange(tag, checked);
            }
          }, tag);
        }));
      }
    }]);

    return HotTags;
  }(React.Component);

  return React.createElement(HotTags, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/orient-basic.md":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/orient-basic.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "常用的基础标签，有多种颜色可选择。"
      ]
    ],
    "en-US": [
      [
        "p",
        "常用的基础标签，有多种颜色可选择。"
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基础标签",
      "en-US": null
    },
    "filename": "components/tag/demo/orient-basic.md",
    "id": "components-tag-demo-orient-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span><span class=\"token punctuation\">></span></span>标签一<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>blue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>标签二<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>yellow<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>标签三<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>orange<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>标签四<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>标签五<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-tag-grey<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>标签六<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>标签一<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>blue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>标签二<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>yellow<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>标签三<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>orange<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>标签四<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>标签五<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-tag-grey<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>标签六<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement("div", null, React.createElement(_antd.Tag, null, "\u6807\u7B7E\u4E00"), React.createElement(_antd.Tag, {
    color: "blue"
  }, "\u6807\u7B7E\u4E8C"), React.createElement(_antd.Tag, {
    color: "yellow"
  }, "\u6807\u7B7E\u4E09"), React.createElement(_antd.Tag, {
    color: "orange"
  }, "\u6807\u7B7E\u56DB"), React.createElement(_antd.Tag, {
    color: "red"
  }, "\u6807\u7B7E\u4E94"), React.createElement(_antd.Tag, {
    className: "ant-tag-grey"
  }, "\u6807\u7B7E\u516D"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/orient-edit.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/orient-edit.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以手动添加/删除的标签。"
      ]
    ],
    "en-US": [
      [
        "p",
        "可以手动添加/删除的标签。"
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "动态编辑标签",
      "en-US": null
    },
    "filename": "components/tag/demo/orient-edit.md",
    "id": "components-tag-demo-orient-edit"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableTagGroup</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    tags<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"标签一\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"标签二\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    inputValue<span class=\"token punctuation\">:</span> <span class=\"token string\">\"\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleClose <span class=\"token operator\">=</span> removedTag <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> tags <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>tag <span class=\"token operator\">=</span><span class=\"token operator\">></span> tag <span class=\"token operator\">!==</span> removedTag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  showInput <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleInputChange <span class=\"token operator\">=</span> e <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputValue<span class=\"token punctuation\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleInputConfirm <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>inputValue <span class=\"token operator\">&amp;&amp;</span> tags<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      tags <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>tags<span class=\"token punctuation\">,</span> inputValue<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      tags<span class=\"token punctuation\">,</span>\n      inputVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      inputValue<span class=\"token punctuation\">:</span> <span class=\"token string\">\"\"</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  saveInputRef <span class=\"token operator\">=</span> input <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input <span class=\"token operator\">=</span> input<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> tags<span class=\"token punctuation\">,</span> inputVisible<span class=\"token punctuation\">,</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">,</span> index<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">const</span> isLongTag <span class=\"token operator\">=</span> tag<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">const</span> tagElem <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span>\n              <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">closable</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>index <span class=\"token operator\">!==</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleClose</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>isLongTag <span class=\"token operator\">?</span> <span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>tag<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">...`</span></span> <span class=\"token punctuation\">:</span> tag<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">return</span> isLongTag <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tooltip</span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>tagElem<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tooltip</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>\n            tagElem\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n            <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>saveInputRef<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>text<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token number\">82</span><span class=\"token punctuation\">,</span> minWidth<span class=\"token punctuation\">:</span> <span class=\"token number\">82</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>inputValue<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onBlur</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onPressEnter</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span>\n            <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>showInput<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n              background<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#fff\"</span><span class=\"token punctuation\">,</span>\n              color<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#000\"</span><span class=\"token punctuation\">,</span>\n              border<span class=\"token punctuation\">:</span> <span class=\"token string\">\"1px solid #bbb\"</span><span class=\"token punctuation\">,</span>\n              borderRadius<span class=\"token punctuation\">:</span> <span class=\"token number\">0</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#bbb\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span> New <span class=\"token class-name\">Tag</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>EditableTagGroup</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag<span class=\"token punctuation\">,</span> Input<span class=\"token punctuation\">,</span> Tooltip<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">EditableTagGroup</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    tags<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token string\">\"标签一\"</span><span class=\"token punctuation\">,</span> <span class=\"token string\">\"标签二\"</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    inputVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    inputValue<span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleClose</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">removedTag</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> tags <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">tag</span> <span class=\"token operator\">=></span> tag <span class=\"token operator\">!==</span> removedTag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">showInput</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input<span class=\"token punctuation\">.</span><span class=\"token function\">focus</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleInputChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">e</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> inputValue<span class=\"token operator\">:</span> e<span class=\"token punctuation\">.</span>target<span class=\"token punctuation\">.</span>value <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleInputConfirm</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">let</span> <span class=\"token punctuation\">{</span> tags <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>inputValue <span class=\"token operator\">&amp;&amp;</span> tags<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>inputValue<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token operator\">-</span><span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      tags <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>tags<span class=\"token punctuation\">,</span> inputValue<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>tags<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      tags<span class=\"token punctuation\">,</span>\n      inputVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      inputValue<span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">saveInputRef</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">input</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>input <span class=\"token operator\">=</span> input<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> tags<span class=\"token punctuation\">,</span> inputVisible<span class=\"token punctuation\">,</span> inputValue <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>tags<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">tag<span class=\"token punctuation\">,</span> index</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">const</span> isLongTag <span class=\"token operator\">=</span> tag<span class=\"token punctuation\">.</span>length <span class=\"token operator\">></span> <span class=\"token number\">20</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">const</span> tagElem <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span>\n              <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">closable</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>index <span class=\"token operator\">!==</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span>\n              <span class=\"token attr-name\">onClose</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">handleClose</span><span class=\"token punctuation\">(</span>tag<span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>isLongTag <span class=\"token operator\">?</span> <span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>tag<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">...</span><span class=\"token template-punctuation string\">`</span></span> <span class=\"token operator\">:</span> tag<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">return</span> isLongTag <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tooltip</span></span> <span class=\"token attr-name\">title</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">key</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>tag<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n              <span class=\"token punctuation\">{</span>tagElem<span class=\"token punctuation\">}</span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tooltip</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">)</span> <span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span>\n            tagElem\n          <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n            <span class=\"token attr-name\">ref</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>saveInputRef<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>text<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">size</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>small<span class=\"token punctuation\">\"</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token number\">82</span><span class=\"token punctuation\">,</span> minWidth<span class=\"token operator\">:</span> <span class=\"token number\">82</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">value</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>inputValue<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputChange<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onBlur</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">onPressEnter</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleInputConfirm<span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">/></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">{</span><span class=\"token operator\">!</span>inputVisible <span class=\"token operator\">&amp;&amp;</span> <span class=\"token punctuation\">(</span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span>\n            <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>showInput<span class=\"token punctuation\">}</span></span>\n            <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span>\n              background<span class=\"token operator\">:</span> <span class=\"token string\">\"#fff\"</span><span class=\"token punctuation\">,</span>\n              color<span class=\"token operator\">:</span> <span class=\"token string\">\"#000\"</span><span class=\"token punctuation\">,</span>\n              border<span class=\"token operator\">:</span> <span class=\"token string\">\"1px solid #bbb\"</span><span class=\"token punctuation\">,</span>\n              borderRadius<span class=\"token operator\">:</span> <span class=\"token number\">0</span>\n            <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">\"#bbb\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span> New Tag\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">EditableTagGroup</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var EditableTagGroup =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(EditableTagGroup, _React$Component);

    function EditableTagGroup() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, EditableTagGroup);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EditableTagGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        tags: ["标签一", "标签二"],
        inputVisible: false,
        inputValue: ""
      });

      _defineProperty(_assertThisInitialized(_this), "handleClose", function (removedTag) {
        var tags = _this.state.tags.filter(function (tag) {
          return tag !== removedTag;
        });

        console.log(tags);

        _this.setState({
          tags: tags
        });
      });

      _defineProperty(_assertThisInitialized(_this), "showInput", function () {
        _this.setState({
          inputVisible: true
        }, function () {
          return _this.input.focus();
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleInputChange", function (e) {
        _this.setState({
          inputValue: e.target.value
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handleInputConfirm", function () {
        var inputValue = _this.state.inputValue;
        var tags = _this.state.tags;

        if (inputValue && tags.indexOf(inputValue) === -1) {
          tags = [].concat(_toConsumableArray(tags), [inputValue]);
        }

        console.log(tags);

        _this.setState({
          tags: tags,
          inputVisible: false,
          inputValue: ""
        });
      });

      _defineProperty(_assertThisInitialized(_this), "saveInputRef", function (input) {
        return _this.input = input;
      });

      return _this;
    }

    _createClass(EditableTagGroup, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            tags = _this$state.tags,
            inputVisible = _this$state.inputVisible,
            inputValue = _this$state.inputValue;
        return React.createElement("div", null, tags.map(function (tag, index) {
          var isLongTag = tag.length > 20;
          var tagElem = React.createElement(_antd.Tag, {
            key: tag,
            closable: index !== 0,
            onClose: function onClose() {
              return _this2.handleClose(tag);
            }
          }, isLongTag ? "".concat(tag.slice(0, 20), "...") : tag);
          return isLongTag ? React.createElement(_antd.Tooltip, {
            title: tag,
            key: tag
          }, tagElem) : tagElem;
        }), inputVisible && React.createElement(_antd.Input, {
          ref: this.saveInputRef,
          type: "text",
          size: "small",
          style: {
            width: 82,
            minWidth: 82
          },
          value: inputValue,
          onChange: this.handleInputChange,
          onBlur: this.handleInputConfirm,
          onPressEnter: this.handleInputConfirm
        }), !inputVisible && React.createElement(_antd.Tag, {
          onClick: this.showInput,
          style: {
            background: "#fff",
            color: "#000",
            border: "1px solid #bbb",
            borderRadius: 0
          }
        }, React.createElement(_antd.Icon, {
          type: "plus",
          style: {
            color: "#bbb"
          }
        }), " New Tag"));
      }
    }]);

    return EditableTagGroup;
  }(React.Component);

  return React.createElement(EditableTagGroup, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/orient-remove.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/orient-remove.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "可以手动删除的标签。"
      ]
    ],
    "en-US": [
      [
        "p",
        "可以手动删除的标签。"
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "可删除标签",
      "en-US": null
    },
    "filename": "components/tag/demo/orient-remove.md",
    "id": "components-tag-demo-orient-remove"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"Clicked! But prevent default.\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">closable</span><span class=\"token punctuation\">></span></span>标签一<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>blue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      标签二\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>yellow<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      标签三\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>orange<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      标签四\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      标签五\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-tag-grey<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">closable</span><span class=\"token punctuation\">></span></span>\n      标签六\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Tag <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>e<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">e</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  e<span class=\"token punctuation\">.</span><span class=\"token function\">preventDefault</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"Clicked! But prevent default.\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">closable</span><span class=\"token punctuation\">></span></span>标签一<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>blue<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      标签二\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>yellow<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      标签三\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>orange<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      标签四\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">closable</span> <span class=\"token attr-name\">color</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>red<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      标签五\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Tag</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-tag-grey<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">closable</span><span class=\"token punctuation\">></span></span>\n      标签六\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Tag</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  function log(e) {
    console.log(e);
  }

  function preventDefault(e) {
    e.preventDefault();
    console.log("Clicked! But prevent default.");
  }

  return React.createElement("div", null, React.createElement(_antd.Tag, {
    closable: true
  }, "\u6807\u7B7E\u4E00"), React.createElement(_antd.Tag, {
    closable: true,
    color: "blue"
  }, "\u6807\u7B7E\u4E8C"), React.createElement(_antd.Tag, {
    closable: true,
    color: "yellow"
  }, "\u6807\u7B7E\u4E09"), React.createElement(_antd.Tag, {
    closable: true,
    color: "orange"
  }, "\u6807\u7B7E\u56DB"), React.createElement(_antd.Tag, {
    closable: true,
    color: "red"
  }, "\u6807\u7B7E\u4E94"), React.createElement(_antd.Tag, {
    className: "ant-tag-grey",
    closable: true
  }, "\u6807\u7B7E\u516D"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/components-tag-demo.index.js":
/*!***************************************************************!*\
  !*** ./node_modules/bisheng/tmp/components-tag-demo.index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'animation': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tag/demo/animation.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/animation.md"),
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tag/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/basic.md"),
    'checkable': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tag/demo/checkable.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/checkable.md"),
    'colorful': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tag/demo/colorful.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/colorful.md"),
    'control': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tag/demo/control.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/control.md"),
    'controlled': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tag/demo/controlled.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/controlled.md"),
    'hot-tags': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tag/demo/hot-tags.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/hot-tags.md"),
    'orient-basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tag/demo/orient-basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/orient-basic.md"),
    'orient-edit': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tag/demo/orient-edit.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/orient-edit.md"),
    'orient-remove': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tag/demo/orient-remove.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tag/demo/orient-remove.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map