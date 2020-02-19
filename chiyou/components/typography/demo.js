(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/typography/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/basic.md":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/basic.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "展示文档样例。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Display the document sample."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "基本",
      "en-US": "Basic"
    },
    "filename": "components/typography/demo/basic.md",
    "id": "components-typography-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Typography<span class=\"token punctuation\">,</span> Divider <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Title<span class=\"token punctuation\">,</span> Paragraph<span class=\"token punctuation\">,</span> Text <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Typography<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Typography</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Title</span><span class=\"token punctuation\">></span></span>Introduction<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Title</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n      In the process <span class=\"token keyword\">of</span> internal desktop applications development<span class=\"token punctuation\">,</span> many different design specs and\n      implementations would be involved<span class=\"token punctuation\">,</span> which might cause designers and developers difficulties and\n      duplication and reduce the efficiency <span class=\"token keyword\">of</span> development<span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n      After massive project practice and summaries<span class=\"token punctuation\">,</span> Ant Design<span class=\"token punctuation\">,</span> a design language <span class=\"token keyword\">for</span> background\n      applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">,</span> which aims to \n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">strong</span><span class=\"token punctuation\">></span></span>\n        uniform the user <span class=\"token keyword\">interface</span> <span class=\"token class-name\">specs</span> <span class=\"token keyword\">for</span> internal background projects<span class=\"token punctuation\">,</span> lower the unnecessary\n        cost <span class=\"token keyword\">of</span> design differences and implementation and liberate the resources <span class=\"token keyword\">of</span> design and\n        front<span class=\"token operator\">-</span>end development\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Title</span> <span class=\"token attr-name\">level</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Guidelines and Resources<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Title</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n      We supply a series <span class=\"token keyword\">of</span> design principles<span class=\"token punctuation\">,</span> practical patterns and high quality design resources\n      <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">code</span><span class=\"token punctuation\">></span></span>Sketch<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span> and <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">code</span><span class=\"token punctuation\">></span></span>Axure<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> to help people create their product\n      prototypes beautifully and efficiently<span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ul</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/spec/proximity<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Principles<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/pattern/navigation<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Patterns<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/resource/download<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Resource Download<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ul</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Divider</span> <span class=\"token punctuation\">/></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Title</span><span class=\"token punctuation\">></span></span>介绍<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Title</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n      蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n      随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系\n      Ant Design。基于<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">mark</span><span class=\"token punctuation\">></span></span>『确定』和『自然』<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n      的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">strong</span><span class=\"token punctuation\">></span></span>更好的用户体验<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>。\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Title</span> <span class=\"token attr-name\">level</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>设计资源<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Title</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n      我们提供完善的设计原则、最佳实践和设计资源文件（<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">code</span><span class=\"token punctuation\">></span></span>Sketch<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span> 和\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">code</span><span class=\"token punctuation\">></span></span>Axure<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>），来帮助业务快速设计出高质量的产品原型。\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ul</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/spec/proximity<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>设计原则<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/pattern/navigation<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>设计模式<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/resource/download<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>设计资源<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ul</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Typography</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Typography<span class=\"token punctuation\">,</span> Divider <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Title<span class=\"token punctuation\">,</span> Paragraph<span class=\"token punctuation\">,</span> Text <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Typography<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Typography</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Title</span></span><span class=\"token punctuation\">></span></span>Introduction<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Title</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n      In the process <span class=\"token keyword\">of</span> internal desktop applications development<span class=\"token punctuation\">,</span> many different design specs and\n      implementations would be involved<span class=\"token punctuation\">,</span> which might cause designers and developers difficulties and\n      duplication and reduce the efficiency <span class=\"token keyword\">of</span> development<span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n      After massive project practice and summaries<span class=\"token punctuation\">,</span> Ant Design<span class=\"token punctuation\">,</span> a design language <span class=\"token keyword\">for</span> background\n      applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">,</span> which aims to \n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">strong</span><span class=\"token punctuation\">></span></span>\n        uniform the user <span class=\"token keyword\">interface</span> <span class=\"token class-name\">specs</span> <span class=\"token keyword\">for</span> internal background projects<span class=\"token punctuation\">,</span> lower the unnecessary\n        cost <span class=\"token keyword\">of</span> design differences and implementation and liberate the resources <span class=\"token keyword\">of</span> design and\n        front<span class=\"token operator\">-</span>end development\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Title</span></span> <span class=\"token attr-name\">level</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Guidelines and Resources<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Title</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n      We supply a series <span class=\"token keyword\">of</span> design principles<span class=\"token punctuation\">,</span> practical patterns and high quality design <span class=\"token function\">resources</span>\n      <span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">code</span><span class=\"token punctuation\">></span></span>Sketch<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span> and <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">code</span><span class=\"token punctuation\">></span></span>Axure<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span> to help people create their product\n      prototypes beautifully and efficiently<span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ul</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/spec/proximity<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Principles<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/pattern/navigation<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Patterns<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/resource/download<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Resource Download<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ul</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Divider</span></span> <span class=\"token punctuation\">/></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Title</span></span><span class=\"token punctuation\">></span></span>介绍<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Title</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n      蚂蚁的企业级产品是一个庞大且复杂的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n      随着商业化的趋势，越来越多的企业级产品对更好的用户体验有了进一步的要求。带着这样的一个终极目标，我们（蚂蚁金服体验技术部）经过大量的项目实践和总结，逐步打磨出一个服务于企业级产品的设计体系\n      Ant Design。基于<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">mark</span><span class=\"token punctuation\">></span></span>『确定』和『自然』<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n      的设计价值观，通过模块化的解决方案，降低冗余的生产成本，让设计者专注于\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">strong</span><span class=\"token punctuation\">></span></span>更好的用户体验<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>。\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Title</span></span> <span class=\"token attr-name\">level</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>设计资源<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Title</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n      我们提供完善的设计原则、最佳实践和设计资源文件（<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">code</span><span class=\"token punctuation\">></span></span>Sketch<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span> 和\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">code</span><span class=\"token punctuation\">></span></span>Axure<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>），来帮助业务快速设计出高质量的产品原型。\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ul</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/spec/proximity<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>设计原则<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/pattern/navigation<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>设计模式<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>li</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>/docs/resource/download<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>设计资源<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>a</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>li</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ul</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Typography</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var Title = _antd.Typography.Title,
      Paragraph = _antd.Typography.Paragraph,
      Text = _antd.Typography.Text;
  return React.createElement(_antd.Typography, null, React.createElement(Title, null, "Introduction"), React.createElement(Paragraph, null, "In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development."), React.createElement(Paragraph, null, "After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims to", React.createElement(Text, {
    strong: true
  }, "uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development"), "."), React.createElement(Title, {
    level: 2
  }, "Guidelines and Resources"), React.createElement(Paragraph, null, "We supply a series of design principles, practical patterns and high quality design resources (", React.createElement(Text, {
    code: true
  }, "Sketch"), " and ", React.createElement(Text, {
    code: true
  }, "Axure"), "), to help people create their product prototypes beautifully and efficiently."), React.createElement(Paragraph, null, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "/docs/spec/proximity"
  }, "Principles")), React.createElement("li", null, React.createElement("a", {
    href: "/docs/pattern/navigation"
  }, "Patterns")), React.createElement("li", null, React.createElement("a", {
    href: "/docs/resource/download"
  }, "Resource Download")))), React.createElement(_antd.Divider, null), React.createElement(Title, null, "\u4ECB\u7ECD"), React.createElement(Paragraph, null, "\u8682\u8681\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u662F\u4E00\u4E2A\u5E9E\u5927\u4E14\u590D\u6742\u7684\u4F53\u7CFB\u3002\u8FD9\u7C7B\u4EA7\u54C1\u4E0D\u4EC5\u91CF\u7EA7\u5DE8\u5927\u4E14\u529F\u80FD\u590D\u6742\uFF0C\u800C\u4E14\u53D8\u52A8\u548C\u5E76\u53D1\u9891\u7E41\uFF0C\u5E38\u5E38\u9700\u8981\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u80FD\u591F\u5FEB\u901F\u7684\u505A\u51FA\u54CD\u5E94\u3002\u540C\u65F6\u8FD9\u7C7B\u4EA7\u54C1\u4E2D\u6709\u5B58\u5728\u5F88\u591A\u7C7B\u4F3C\u7684\u9875\u9762\u4EE5\u53CA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u62BD\u8C61\u5F97\u5230\u4E00\u4E9B\u7A33\u5B9A\u4E14\u9AD8\u590D\u7528\u6027\u7684\u5185\u5BB9\u3002"), React.createElement(Paragraph, null, "\u968F\u7740\u5546\u4E1A\u5316\u7684\u8D8B\u52BF\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u5BF9\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u6709\u4E86\u8FDB\u4E00\u6B65\u7684\u8981\u6C42\u3002\u5E26\u7740\u8FD9\u6837\u7684\u4E00\u4E2A\u7EC8\u6781\u76EE\u6807\uFF0C\u6211\u4EEC\uFF08\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\uFF09\u7ECF\u8FC7\u5927\u91CF\u7684\u9879\u76EE\u5B9E\u8DF5\u548C\u603B\u7ED3\uFF0C\u9010\u6B65\u6253\u78E8\u51FA\u4E00\u4E2A\u670D\u52A1\u4E8E\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u7684\u8BBE\u8BA1\u4F53\u7CFB Ant Design\u3002\u57FA\u4E8E", React.createElement(Text, {
    mark: true
  }, "\u300E\u786E\u5B9A\u300F\u548C\u300E\u81EA\u7136\u300F"), "\u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u901A\u8FC7\u6A21\u5757\u5316\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u964D\u4F4E\u5197\u4F59\u7684\u751F\u4EA7\u6210\u672C\uFF0C\u8BA9\u8BBE\u8BA1\u8005\u4E13\u6CE8\u4E8E", React.createElement(Text, {
    strong: true
  }, "\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C"), "\u3002"), React.createElement(Title, {
    level: 2
  }, "\u8BBE\u8BA1\u8D44\u6E90"), React.createElement(Paragraph, null, "\u6211\u4EEC\u63D0\u4F9B\u5B8C\u5584\u7684\u8BBE\u8BA1\u539F\u5219\u3001\u6700\u4F73\u5B9E\u8DF5\u548C\u8BBE\u8BA1\u8D44\u6E90\u6587\u4EF6\uFF08", React.createElement(Text, {
    code: true
  }, "Sketch"), " \u548C", React.createElement(Text, {
    code: true
  }, "Axure"), "\uFF09\uFF0C\u6765\u5E2E\u52A9\u4E1A\u52A1\u5FEB\u901F\u8BBE\u8BA1\u51FA\u9AD8\u8D28\u91CF\u7684\u4EA7\u54C1\u539F\u578B\u3002"), React.createElement(Paragraph, null, React.createElement("ul", null, React.createElement("li", null, React.createElement("a", {
    href: "/docs/spec/proximity"
  }, "\u8BBE\u8BA1\u539F\u5219")), React.createElement("li", null, React.createElement("a", {
    href: "/docs/pattern/navigation"
  }, "\u8BBE\u8BA1\u6A21\u5F0F")), React.createElement("li", null, React.createElement("a", {
    href: "/docs/resource/download"
  }, "\u8BBE\u8BA1\u8D44\u6E90")))));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/ellipsis-debug.md":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/ellipsis-debug.md ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "meta": {

  }
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/ellipsis.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/ellipsis.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "多行文本省略。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Multiple line ellipsis support."
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "省略号",
      "en-US": "Ellipsis"
    },
    "filename": "components/typography/demo/ellipsis.md",
    "id": "components-typography-demo-ellipsis"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Typography <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Paragraph <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Typography<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span> <span class=\"token attr-name\">ellipsis</span><span class=\"token punctuation\">></span></span>\n      Ant Design<span class=\"token punctuation\">,</span> a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span> Ant\n      Design<span class=\"token punctuation\">,</span> a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span>\n      a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a\n      design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a design\n      language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a design\n      language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span> <span class=\"token attr-name\">ellipsis</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> rows<span class=\"token punctuation\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> expandable<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      Ant Design<span class=\"token punctuation\">,</span> a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span> Ant\n      Design<span class=\"token punctuation\">,</span> a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span>\n      a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a\n      design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a design\n      language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a design\n      language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant UED Team<span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Typography <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Paragraph <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Typography<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span> <span class=\"token attr-name\">ellipsis</span><span class=\"token punctuation\">></span></span>\n      Ant Design<span class=\"token punctuation\">,</span> a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span> Ant\n      Design<span class=\"token punctuation\">,</span> a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span>\n      a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a\n      design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a design\n      language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a design\n      language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span> <span class=\"token attr-name\">ellipsis</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> rows<span class=\"token operator\">:</span> <span class=\"token number\">3</span><span class=\"token punctuation\">,</span> expandable<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      Ant Design<span class=\"token punctuation\">,</span> a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span> Ant\n      Design<span class=\"token punctuation\">,</span> a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span>\n      a design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a\n      design language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a design\n      language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span> Ant Design<span class=\"token punctuation\">,</span> a design\n      language <span class=\"token keyword\">for</span> background applications<span class=\"token punctuation\">,</span> is refined by Ant <span class=\"token constant\">UED</span> Team<span class=\"token punctuation\">.</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var Paragraph = _antd.Typography.Paragraph;
  return React.createElement("div", null, React.createElement(Paragraph, {
    ellipsis: true
  }, "Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team."), React.createElement(Paragraph, {
    ellipsis: {
      rows: 3,
      expandable: true
    }
  }, "Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design, a design language for background applications, is refined by Ant UED Team."));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/interactive.md":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/interactive.md ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "提供可编辑和可复制等额外的交互能力。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Provide additional interactive capacity of editable and copyable."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "可交互",
      "en-US": "Interactive"
    },
    "filename": "components/typography/demo/interactive.md",
    "id": "components-typography-demo-interactive"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Typography <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Paragraph <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Typography<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    str<span class=\"token punctuation\">:</span> <span class=\"token string\">'This is an editable text.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> str <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Content change:'</span><span class=\"token punctuation\">,</span> str<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> str <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span> <span class=\"token attr-name\">editable</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> onChange<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>str<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span> <span class=\"token attr-name\">copyable</span><span class=\"token punctuation\">></span></span>This is a copyable text<span class=\"token punctuation\">.</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Paragraph</span> <span class=\"token attr-name\">copyable</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> text<span class=\"token punctuation\">:</span> <span class=\"token string\">'Hello, Ant Design!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Replace copy text<span class=\"token punctuation\">.</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Paragraph</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Typography <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Paragraph <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Typography<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    str<span class=\"token operator\">:</span> <span class=\"token string\">'This is an editable text.'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">str</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Content change:'</span><span class=\"token punctuation\">,</span> str<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> str <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span> <span class=\"token attr-name\">editable</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> onChange<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>str<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span> <span class=\"token attr-name\">copyable</span><span class=\"token punctuation\">></span></span>This is a copyable text<span class=\"token punctuation\">.</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Paragraph</span></span> <span class=\"token attr-name\">copyable</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> text<span class=\"token operator\">:</span> <span class=\"token string\">'Hello, Ant Design!'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>Replace copy text<span class=\"token punctuation\">.</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Paragraph</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  var Paragraph = _antd.Typography.Paragraph;

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
        str: 'This is an editable text.'
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (str) {
        console.log('Content change:', str);

        _this.setState({
          str: str
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        return React.createElement("div", null, React.createElement(Paragraph, {
          editable: {
            onChange: this.onChange
          }
        }, this.state.str), React.createElement(Paragraph, {
          copyable: true
        }, "This is a copyable text."), React.createElement(Paragraph, {
          copyable: {
            text: 'Hello, Ant Design!'
          }
        }, "Replace copy text."));
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/paragraph-debug.md":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/paragraph-debug.md ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "meta": {

  }
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/text.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/text.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "内置不同样式的文本。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Provides multiple types of text."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "文本组件",
      "en-US": "Text Component"
    },
    "filename": "components/typography/demo/text.md",
    "id": "components-typography-demo-text"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Typography <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Text <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Typography<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>secondary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>danger<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">disabled</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">mark</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">code</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">underline</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">delete</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Text</span> <span class=\"token attr-name\">strong</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Text</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Typography <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Text <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Typography<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>secondary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>warning<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>danger<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">disabled</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">mark</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">code</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">underline</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">delete</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Text</span></span> <span class=\"token attr-name\">strong</span><span class=\"token punctuation\">></span></span>Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Text</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var Text = _antd.Typography.Text;
  return React.createElement("div", null, React.createElement(Text, null, "Ant Design"), React.createElement("br", null), React.createElement(Text, {
    type: "secondary"
  }, "Ant Design"), React.createElement("br", null), React.createElement(Text, {
    type: "warning"
  }, "Ant Design"), React.createElement("br", null), React.createElement(Text, {
    type: "danger"
  }, "Ant Design"), React.createElement("br", null), React.createElement(Text, {
    disabled: true
  }, "Ant Design"), React.createElement("br", null), React.createElement(Text, {
    mark: true
  }, "Ant Design"), React.createElement("br", null), React.createElement(Text, {
    code: true
  }, "Ant Design"), React.createElement("br", null), React.createElement(Text, {
    underline: true
  }, "Ant Design"), React.createElement("br", null), React.createElement(Text, {
    "delete": true
  }, "Ant Design"), React.createElement("br", null), React.createElement(Text, {
    strong: true
  }, "Ant Design"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/title.md":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/title.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "展示不同级别的标题。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Display title in different level."
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "标题组件",
      "en-US": "Title Component"
    },
    "filename": "components/typography/demo/title.md",
    "id": "components-typography-demo-title"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Typography <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Title <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Typography<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Title</span><span class=\"token punctuation\">></span></span>h1<span class=\"token punctuation\">.</span> Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Title</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Title</span> <span class=\"token attr-name\">level</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>h2<span class=\"token punctuation\">.</span> Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Title</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Title</span> <span class=\"token attr-name\">level</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">3</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>h3<span class=\"token punctuation\">.</span> Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Title</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Title</span> <span class=\"token attr-name\">level</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">4</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>h4<span class=\"token punctuation\">.</span> Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Title</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Typography <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Title <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Typography<span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Title</span></span><span class=\"token punctuation\">></span></span>h1<span class=\"token punctuation\">.</span> Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Title</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Title</span></span> <span class=\"token attr-name\">level</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">2</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>h2<span class=\"token punctuation\">.</span> Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Title</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Title</span></span> <span class=\"token attr-name\">level</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">3</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>h3<span class=\"token punctuation\">.</span> Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Title</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Title</span></span> <span class=\"token attr-name\">level</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">4</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>h4<span class=\"token punctuation\">.</span> Ant Design<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Title</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var Title = _antd.Typography.Title;
  return React.createElement("div", null, React.createElement(Title, null, "h1. Ant Design"), React.createElement(Title, {
    level: 2
  }, "h2. Ant Design"), React.createElement(Title, {
    level: 3
  }, "h3. Ant Design"), React.createElement(Title, {
    level: 4
  }, "h4. Ant Design"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/tmp/components-typography-demo.index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bisheng/tmp/components-typography-demo.index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/typography/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/basic.md"),
    'ellipsis-debug': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/typography/demo/ellipsis-debug.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/ellipsis-debug.md"),
    'ellipsis': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/typography/demo/ellipsis.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/ellipsis.md"),
    'interactive': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/typography/demo/interactive.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/interactive.md"),
    'paragraph-debug': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/typography/demo/paragraph-debug.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/paragraph-debug.md"),
    'text': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/typography/demo/text.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/text.md"),
    'title': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/typography/demo/title.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/demo/title.md"),
}

/***/ })

}]);
//# sourceMappingURL=demo.js.map