(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/upload/demo"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/avatar.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/avatar.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "点击上传用户头像，并使用 ",
        [
          "code",
          "beforeUpload"
        ],
        " 限制用户上传的图片格式和大小。"
      ],
      [
        "blockquote",
        [
          "p",
          [
            "code",
            "beforeUpload"
          ],
          " 的返回值可以是一个 Promise 以支持异步处理，如服务端校验等：",
          [
            "a",
            {
              "title": null,
              "href": "http://react-component.github.io/upload/examples/beforeUpload.html"
            },
            "示例"
          ],
          "。"
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "Click to upload user's avatar, and validate size and format of picture with ",
        [
          "code",
          "beforeUpload"
        ],
        "."
      ],
      [
        "blockquote",
        [
          "p",
          "The return value of function ",
          [
            "code",
            "beforeUpload"
          ],
          " can be a Promise to check asynchronously. ",
          [
            "a",
            {
              "title": null,
              "href": "http://react-component.github.io/upload/examples/beforeUpload.html"
            },
            "demo"
          ]
        ]
      ]
    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "用户头像",
      "en-US": "Avatar"
    },
    "filename": "components/upload/demo/avatar.md",
    "id": "components-upload-demo-avatar"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>img<span class=\"token punctuation\">,</span> callback<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> reader <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FileReader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  reader<span class=\"token punctuation\">.</span><span class=\"token function\">addEventListener</span><span class=\"token punctuation\">(</span><span class=\"token string\">'load'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>reader<span class=\"token punctuation\">.</span>result<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  reader<span class=\"token punctuation\">.</span><span class=\"token function\">readAsDataURL</span><span class=\"token punctuation\">(</span>img<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">beforeUpload</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> isJpgOrPng <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>type <span class=\"token operator\">===</span> <span class=\"token string\">'image/jpeg'</span> <span class=\"token operator\">||</span> file<span class=\"token punctuation\">.</span>type <span class=\"token operator\">===</span> <span class=\"token string\">'image/png'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>isJpgOrPng<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'You can only upload JPG/PNG file!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">const</span> isLt2M <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>size <span class=\"token operator\">/</span> <span class=\"token number\">1024</span> <span class=\"token operator\">/</span> <span class=\"token number\">1024</span> <span class=\"token operator\">&lt;</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>isLt2M<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Image must smaller than 2MB!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> isJpgOrPng <span class=\"token operator\">&amp;&amp;</span> isLt2M<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Avatar</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleChange <span class=\"token operator\">=</span> info <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token comment\" spellcheck=\"true\">// Get this url from response in real world.</span>\n      <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>originFileObj<span class=\"token punctuation\">,</span> imageUrl <span class=\"token operator\">=</span><span class=\"token operator\">></span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          imageUrl<span class=\"token punctuation\">,</span>\n          loading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> uploadButton <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">?</span> <span class=\"token string\">'loading'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'plus'</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Upload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> imageUrl <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload</span>\n        <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">listType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>picture-card<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar-uploader<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">showUploadList</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://www.mocky.io/v2/5cc8019d300000980a055e76<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">beforeUpload</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>beforeUpload<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>imageUrl <span class=\"token operator\">?</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>imageUrl<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span> <span class=\"token punctuation\">:</span> uploadButton<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Avatar</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">img<span class=\"token punctuation\">,</span> callback</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> reader <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FileReader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  reader<span class=\"token punctuation\">.</span><span class=\"token function\">addEventListener</span><span class=\"token punctuation\">(</span><span class=\"token string\">'load'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">callback</span><span class=\"token punctuation\">(</span>reader<span class=\"token punctuation\">.</span>result<span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  reader<span class=\"token punctuation\">.</span><span class=\"token function\">readAsDataURL</span><span class=\"token punctuation\">(</span>img<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">beforeUpload</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">file</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> isJpgOrPng <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>type <span class=\"token operator\">===</span> <span class=\"token string\">'image/jpeg'</span> <span class=\"token operator\">||</span> file<span class=\"token punctuation\">.</span>type <span class=\"token operator\">===</span> <span class=\"token string\">'image/png'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>isJpgOrPng<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'You can only upload JPG/PNG file!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">const</span> isLt2M <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>size <span class=\"token operator\">/</span> <span class=\"token number\">1024</span> <span class=\"token operator\">/</span> <span class=\"token number\">1024</span> <span class=\"token operator\">&lt;</span> <span class=\"token number\">2</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>isLt2M<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Image must smaller than 2MB!'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> isJpgOrPng <span class=\"token operator\">&amp;&amp;</span> isLt2M<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Avatar</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    loading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">info</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> loading<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token comment\">// Get this url from response in real world.</span>\n      <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>originFileObj<span class=\"token punctuation\">,</span> <span class=\"token parameter\">imageUrl</span> <span class=\"token operator\">=></span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          imageUrl<span class=\"token punctuation\">,</span>\n          loading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> uploadButton <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>loading <span class=\"token operator\">?</span> <span class=\"token string\">'loading'</span> <span class=\"token operator\">:</span> <span class=\"token string\">'plus'</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Upload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> imageUrl <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span>\n        <span class=\"token attr-name\">name</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">listType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>picture-card<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar-uploader<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">showUploadList</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token boolean\">false</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://www.mocky.io/v2/5cc8019d300000980a055e76<span class=\"token punctuation\">\"</span></span>\n        <span class=\"token attr-name\">beforeUpload</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>beforeUpload<span class=\"token punctuation\">}</span></span>\n        <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n      <span class=\"token punctuation\">></span></span>\n        <span class=\"token punctuation\">{</span>imageUrl <span class=\"token operator\">?</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>imageUrl<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>avatar<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span> <span class=\"token operator\">:</span> uploadButton<span class=\"token punctuation\">}</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Avatar</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  function getBase64(img, callback) {
    var reader = new FileReader();
    reader.addEventListener('load', function () {
      return callback(reader.result);
    });
    reader.readAsDataURL(img);
  }

  function beforeUpload(file) {
    var isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
      _antd.message.error('You can only upload JPG/PNG file!');
    }

    var isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      _antd.message.error('Image must smaller than 2MB!');
    }

    return isJpgOrPng && isLt2M;
  }

  var Avatar =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Avatar, _React$Component);

    function Avatar() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Avatar);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Avatar)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        loading: false
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (info) {
        if (info.file.status === 'uploading') {
          _this.setState({
            loading: true
          });

          return;
        }

        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, function (imageUrl) {
            return _this.setState({
              imageUrl: imageUrl,
              loading: false
            });
          });
        }
      });

      return _this;
    }

    _createClass(Avatar, [{
      key: "render",
      value: function render() {
        var uploadButton = React.createElement("div", null, React.createElement(_antd.Icon, {
          type: this.state.loading ? 'loading' : 'plus'
        }), React.createElement("div", {
          className: "ant-upload-text"
        }, "Upload"));
        var imageUrl = this.state.imageUrl;
        return React.createElement(_antd.Upload, {
          name: "avatar",
          listType: "picture-card",
          className: "avatar-uploader",
          showUploadList: false,
          action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          beforeUpload: beforeUpload,
          onChange: this.handleChange
        }, imageUrl ? React.createElement("img", {
          src: imageUrl,
          alt: "avatar",
          style: {
            width: '100%'
          }
        }) : uploadButton);
      }
    }]);

    return Avatar;
  }(React.Component);

  return React.createElement(Avatar, null);
},
  "style": ".avatar-uploader > .ant-upload {\n  width: 128px;\n  height: 128px;\n}",
  "highlightedStyle": "<span class=\"token selector\"><span class=\"token class\">.avatar-uploader</span> > <span class=\"token class\">.ant-upload</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">128</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">128</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/basic.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/basic.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "经典款式，用户点击按钮弹出文件选择框。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Classic mode. File selection dialog pops up when upload button is clicked."
      ]
    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "点击上传",
      "en-US": "Upload by clicking"
    },
    "filename": "components/upload/demo/basic.md",
    "id": "components-upload-demo-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'file'</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  headers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    authorization<span class=\"token punctuation\">:</span> <span class=\"token string\">'authorization-text'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Click to Upload\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token operator\">:</span> <span class=\"token string\">'file'</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token operator\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  headers<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    authorization<span class=\"token operator\">:</span> <span class=\"token string\">'authorization-text'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">info</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Click to Upload\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange: function onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === 'done') {
        _antd.message.success("".concat(info.file.name, " file uploaded successfully"));
      } else if (info.file.status === 'error') {
        _antd.message.error("".concat(info.file.name, " file upload failed."));
      }
    }
  };
  return React.createElement(_antd.Upload, props, React.createElement(_antd.Button, null, React.createElement(_antd.Icon, {
    type: "upload"
  }), " Click to Upload"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/defaultFileList.md":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/defaultFileList.md ***!
  \*******************************************************************************************************/
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
          "defaultFileList"
        ],
        " 设置已上传的内容。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Use ",
        [
          "code",
          "defaultFileList"
        ],
        " for uploaded files when page init."
      ]
    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "已上传的文件列表",
      "en-US": "Default Files"
    },
    "filename": "components/upload/demo/defaultFileList.md",
    "id": "components-upload-demo-defaultFileList"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> file<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">,</span> fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  defaultFileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n      status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n      response<span class=\"token punctuation\">:</span> <span class=\"token string\">'Server Error 500'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// custom error message to show</span>\n      url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/xxx.png'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'yyy.png'</span><span class=\"token punctuation\">,</span>\n      status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n      url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/yyy.png'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'zzz.png'</span><span class=\"token punctuation\">,</span>\n      status<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n      response<span class=\"token punctuation\">:</span> <span class=\"token string\">'Server Error 500'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\" spellcheck=\"true\">// custom error message to show</span>\n      url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/zzz.png'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token operator\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> file<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">,</span> fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  defaultFileList<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      uid<span class=\"token operator\">:</span> <span class=\"token string\">'1'</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token operator\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n      status<span class=\"token operator\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n      response<span class=\"token operator\">:</span> <span class=\"token string\">'Server Error 500'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// custom error message to show</span>\n      url<span class=\"token operator\">:</span> <span class=\"token string\">'http://www.baidu.com/xxx.png'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      uid<span class=\"token operator\">:</span> <span class=\"token string\">'2'</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token operator\">:</span> <span class=\"token string\">'yyy.png'</span><span class=\"token punctuation\">,</span>\n      status<span class=\"token operator\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n      url<span class=\"token operator\">:</span> <span class=\"token string\">'http://www.baidu.com/yyy.png'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      uid<span class=\"token operator\">:</span> <span class=\"token string\">'3'</span><span class=\"token punctuation\">,</span>\n      name<span class=\"token operator\">:</span> <span class=\"token string\">'zzz.png'</span><span class=\"token punctuation\">,</span>\n      status<span class=\"token operator\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n      response<span class=\"token operator\">:</span> <span class=\"token string\">'Server Error 500'</span><span class=\"token punctuation\">,</span> <span class=\"token comment\">// custom error message to show</span>\n      url<span class=\"token operator\">:</span> <span class=\"token string\">'http://www.baidu.com/zzz.png'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: function onChange(_ref) {
      var file = _ref.file,
          fileList = _ref.fileList;

      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    },
    defaultFileList: [{
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/xxx.png'
    }, {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png'
    }, {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/zzz.png'
    }]
  };
  return React.createElement(_antd.Upload, props, React.createElement(_antd.Button, null, React.createElement(_antd.Icon, {
    type: "upload"
  }), " Upload"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/directory.md":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/directory.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "支持上传一个文件夹里的所有文件。"
      ]
    ],
    "en-US": [
      [
        "p",
        "You can select and upload a whole directory."
      ]
    ]
  },
  "meta": {
    "order": 6,
    "title": {
      "zh-CN": "文件夹上传",
      "en-US": "Upload directory"
    },
    "filename": "components/upload/demo/directory.md",
    "id": "components-upload-demo-directory"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload</span> <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://www.mocky.io/v2/5cc8019d300000980a055e76<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">directory</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload Directory\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://www.mocky.io/v2/5cc8019d300000980a055e76<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">directory</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload Directory\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  return React.createElement(_antd.Upload, {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    directory: true
  }, React.createElement(_antd.Button, null, React.createElement(_antd.Icon, {
    type: "upload"
  }), " Upload Directory"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/drag.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/drag.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "把文件拖入指定区域，完成上传，同样支持点击上传。"
      ],
      [
        "p",
        "设置 ",
        [
          "code",
          "multiple"
        ],
        " 后，在 ",
        [
          "code",
          "IE10+"
        ],
        " 可以一次上传多个文件。"
      ]
    ],
    "en-US": [
      [
        "p",
        "You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting."
      ],
      [
        "p",
        "We can upload serveral files at once in modern browsers by giving the input the ",
        [
          "code",
          "multiple"
        ],
        " attribute."
      ]
    ]
  },
  "meta": {
    "order": 5,
    "title": {
      "zh-CN": "拖拽上传",
      "en-US": "Drag and Drop"
    },
    "filename": "components/upload/demo/drag.md",
    "id": "components-upload-demo-drag"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Dragger <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Upload<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">'file'</span><span class=\"token punctuation\">,</span>\n  multiple<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> status <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>Dragger <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-drag-icon<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inbox<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Click or drag file to <span class=\"token keyword\">this</span> area to upload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-hint<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Support <span class=\"token keyword\">for</span> a single or bulk upload<span class=\"token punctuation\">.</span> Strictly prohibit <span class=\"token keyword\">from</span> uploading company data or other\n      band files\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dragger</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Dragger <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Upload<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token operator\">:</span> <span class=\"token string\">'file'</span><span class=\"token punctuation\">,</span>\n  multiple<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token operator\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">info</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> status <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">'uploading'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully.</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Dragger</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-drag-icon<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>inbox<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Click or drag file to <span class=\"token keyword\">this</span> area to upload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-hint<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      Support <span class=\"token keyword\">for</span> a single or bulk upload<span class=\"token punctuation\">.</span> Strictly prohibit <span class=\"token keyword\">from</span> uploading company data or other\n      band files\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Dragger</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var Dragger = _antd.Upload.Dragger;
  var props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: function onChange(info) {
      var status = info.file.status;

      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (status === 'done') {
        _antd.message.success("".concat(info.file.name, " file uploaded successfully."));
      } else if (status === 'error') {
        _antd.message.error("".concat(info.file.name, " file upload failed."));
      }
    }
  };
  return React.createElement(Dragger, props, React.createElement("p", {
    className: "ant-upload-drag-icon"
  }, React.createElement(_antd.Icon, {
    type: "inbox"
  })), React.createElement("p", {
    className: "ant-upload-text"
  }, "Click or drag file to this area to upload"), React.createElement("p", {
    className: "ant-upload-hint"
  }, "Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/fileList.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/fileList.md ***!
  \************************************************************************************************/
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
          "fileList"
        ],
        " 对列表进行完全控制，可以实现各种自定义功能，以下演示三种情况："
      ],
      [
        "ol",
        [
          "li",
          [
            "p",
            "上传列表数量的限制。"
          ]
        ],
        [
          "li",
          [
            "p",
            "读取远程路径并显示链接。"
          ]
        ]
      ]
    ],
    "en-US": [
      [
        "p",
        "You can gain full control over filelist by configuring ",
        [
          "code",
          "fileList"
        ],
        ". You can accomplish all kinds of customed functions. The following shows three circumstances:"
      ],
      [
        "ol",
        [
          "li",
          [
            "p",
            "limit the number of uploaded files."
          ]
        ],
        [
          "li",
          [
            "p",
            "read from response and show file link."
          ]
        ]
      ]
    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "完全控制的上传列表",
      "en-US": "Complete control over file list"
    },
    "filename": "components/upload/demo/fileList.md",
    "id": "components-upload-demo-fileList"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">MyUpload</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    fileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'-1'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token punctuation\">:</span> <span class=\"token string\">'http://www.baidu.com/xxx.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleChange <span class=\"token operator\">=</span> info <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> fileList <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// 1. Limit the number of uploaded files</span>\n    <span class=\"token comment\" spellcheck=\"true\">// Only to show two recent uploaded files, and old ones will be replaced by the new</span>\n    fileList <span class=\"token operator\">=</span> fileList<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// 2. Read from response and show file link</span>\n    fileList <span class=\"token operator\">=</span> fileList<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span>file <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\" spellcheck=\"true\">// Component will show file.url as link</span>\n        file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">.</span>url<span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">return</span> file<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      action<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n      onChange<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">,</span>\n      multiple<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span> fileList<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>MyUpload</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">MyUpload</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    fileList<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token operator\">:</span> <span class=\"token string\">'-1'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token operator\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token operator\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token operator\">:</span> <span class=\"token string\">'http://www.baidu.com/xxx.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleChange</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">info</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">let</span> fileList <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">// 1. Limit the number of uploaded files</span>\n    <span class=\"token comment\">// Only to show two recent uploaded files, and old ones will be replaced by the new</span>\n    fileList <span class=\"token operator\">=</span> fileList<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token operator\">-</span><span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">// 2. Read from response and show file link</span>\n    fileList <span class=\"token operator\">=</span> fileList<span class=\"token punctuation\">.</span><span class=\"token function\">map</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">file</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n        <span class=\"token comment\">// Component will show file.url as link</span>\n        file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>response<span class=\"token punctuation\">.</span>url<span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span>\n      <span class=\"token keyword\">return</span> file<span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      action<span class=\"token operator\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n      onChange<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">,</span>\n      multiple<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">fileList</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">MyUpload</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

  var MyUpload =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(MyUpload, _React$Component);

    function MyUpload() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MyUpload);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MyUpload)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        fileList: [{
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'http://www.baidu.com/xxx.png'
        }]
      });

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (info) {
        var fileList = _toConsumableArray(info.fileList); // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new


        fileList = fileList.slice(-2); // 2. Read from response and show file link

        fileList = fileList.map(function (file) {
          if (file.response) {
            // Component will show file.url as link
            file.url = file.response.url;
          }

          return file;
        });

        _this.setState({
          fileList: fileList
        });
      });

      return _this;
    }

    _createClass(MyUpload, [{
      key: "render",
      value: function render() {
        var props = {
          action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          onChange: this.handleChange,
          multiple: true
        };
        return React.createElement(_antd.Upload, _extends({}, props, {
          fileList: this.state.fileList
        }), React.createElement(_antd.Button, null, React.createElement(_antd.Icon, {
          type: "upload"
        }), " Upload"));
      }
    }]);

    return MyUpload;
  }(React.Component);

  return React.createElement(MyUpload, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/orient-basic.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/orient-basic.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "上传单个文件。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 0,
    "title": {
      "zh-CN": "单文件上传",
      "en-US": null
    },
    "filename": "components/upload/demo/orient-basic.md",
    "id": "components-upload-demo-orient-basic"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload.SingleFileUpload</span>\n    <span class=\"token attr-name\">onFileHandle</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>file <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span>resolve <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span>resolve<span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">tip</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token string\">\"只能上传jpg/png文件，且不超过500kb\"</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"fastwoman\"</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload.SingleFileUpload</span></span>\n    <span class=\"token attr-name\">onFileHandle</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token parameter\">file</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">return</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">resolve</span> <span class=\"token operator\">=></span> <span class=\"token function\">setTimeout</span><span class=\"token punctuation\">(</span>resolve<span class=\"token punctuation\">,</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n    <span class=\"token attr-name\">tip</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token string\">\"只能上传jpg/png文件，且不超过500kb\"</span><span class=\"token punctuation\">}</span></span>\n  <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _fastwoman = __webpack_require__(/*! fastwoman */ "./node_modules/fastwoman/dist/index.esm.js");

  return React.createElement(_fastwoman.Upload.SingleFileUpload, {
    onFileHandle: function onFileHandle(file) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, 1000);
      });
    },
    tip: "只能上传jpg/png文件，且不超过500kb"
  });
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/orient-drag.md":
/*!***************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/orient-drag.md ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "拖拽文件进入区域框上传，也可手动点击图标上传。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 4,
    "title": {
      "zh-CN": "拖拽上传",
      "en-US": null
    },
    "filename": "components/upload/demo/orient-drag.md",
    "id": "components-upload-demo-orient-drag"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// 外链接 - 图标</span>\n<span class=\"token keyword\">const</span> IconFont <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  scriptUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">\"//at.alicdn.com/t/font_1583601_k89tswcyt1l.js\"</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Dragger <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Upload<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">\"file\"</span><span class=\"token punctuation\">,</span>\n  multiple<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> status <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">\"uploading\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"done\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"error\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload-drag<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>Dragger <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-drag-icon<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IconFont</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icon-new-upload<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        将文件拖到此处，或<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>点击上传<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Dragger</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload-drag-tip<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      支持扩展名：<span class=\"token punctuation\">.</span>rar<span class=\"token regex\">/.zip/</span><span class=\"token punctuation\">.</span>doc<span class=\"token regex\">/.docx/</span><span class=\"token punctuation\">.</span>pdf <span class=\"token operator\">/</span><span class=\"token punctuation\">.</span>jpg\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\">// 外链接 - 图标</span>\n<span class=\"token keyword\">const</span> IconFont <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  scriptUrl<span class=\"token operator\">:</span> <span class=\"token string\">\"//at.alicdn.com/t/font_1583601_k89tswcyt1l.js\"</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> Dragger <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> Upload<span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token operator\">:</span> <span class=\"token string\">\"file\"</span><span class=\"token punctuation\">,</span>\n  multiple<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token operator\">:</span> <span class=\"token string\">\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">info</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> status <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">\"uploading\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"done\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully.</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"error\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload-drag<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Dragger</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-drag-icon<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">IconFont</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icon-new-upload<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>p</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        将文件拖到此处，或<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span>点击上传<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>p</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Dragger</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload-drag-tip<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      支持扩展名：<span class=\"token punctuation\">.</span>rar<span class=\"token operator\">/</span><span class=\"token punctuation\">.</span>zip<span class=\"token operator\">/</span><span class=\"token punctuation\">.</span>doc<span class=\"token operator\">/</span><span class=\"token punctuation\">.</span>docx<span class=\"token operator\">/</span><span class=\"token punctuation\">.</span>pdf <span class=\"token operator\">/</span><span class=\"token punctuation\">.</span>jpg\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  // 外链接 - 图标
  var IconFont = _antd.Icon.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_1583601_k89tswcyt1l.js"
  });

  var Dragger = _antd.Upload.Dragger;
  var props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: function onChange(info) {
      var status = info.file.status;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (status === "done") {
        _antd.message.success("".concat(info.file.name, " file uploaded successfully."));
      } else if (status === "error") {
        _antd.message.error("".concat(info.file.name, " file upload failed."));
      }
    }
  };
  return React.createElement("div", {
    "class": "df-upload-drag"
  }, React.createElement(Dragger, props, React.createElement("p", {
    className: "ant-upload-drag-icon"
  }, React.createElement(IconFont, {
    type: "icon-new-upload",
    style: {
      color: "#8b9be1"
    }
  })), React.createElement("p", {
    className: "ant-upload-text"
  }, "\u5C06\u6587\u4EF6\u62D6\u5230\u6B64\u5904\uFF0C\u6216", React.createElement("span", null, "\u70B9\u51FB\u4E0A\u4F20"))), React.createElement("div", {
    "class": "df-upload-drag-tip"
  }, "\u652F\u6301\u6269\u5C55\u540D\uFF1A.rar/.zip/.doc/.docx/.pdf /.jpg"));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/orient-immediately.md":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/orient-immediately.md ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "省略上传按钮，快速上传单个文件。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 1,
    "title": {
      "zh-CN": "单文件立即上传",
      "en-US": null
    },
    "filename": "components/upload/demo/orient-immediately.md",
    "id": "components-upload-demo-orient-immediately"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">\"file\"</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"</span><span class=\"token punctuation\">,</span>\n  headers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    authorization<span class=\"token punctuation\">:</span> <span class=\"token string\">\"authorization-text\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">\"uploading\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"done\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"error\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload-wraper</span> <span class=\"token attr-name\">immediately\"</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Input</span>\n          <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token operator\">&lt;</span>Icon type<span class=\"token operator\">=</span><span class=\"token string\">\"file\"</span> style<span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span>\n        <span class=\"token operator\">/</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>status</span> <span class=\"token attr-name\">success\"</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>check-circle<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token operator\">:</span> <span class=\"token string\">\"file\"</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token operator\">:</span> <span class=\"token string\">\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"</span><span class=\"token punctuation\">,</span>\n  headers<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    authorization<span class=\"token operator\">:</span> <span class=\"token string\">\"authorization-text\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">info</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">\"uploading\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"done\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"error\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload-wraper immediately<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Input</span></span>\n          <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">prefix</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>file<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> color<span class=\"token operator\">:</span> <span class=\"token string\">\"#8b9be1\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>status success<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>check-circle<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },
    onChange: function onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        _antd.message.success("".concat(info.file.name, " file uploaded successfully"));
      } else if (info.file.status === "error") {
        _antd.message.error("".concat(info.file.name, " file upload failed."));
      }
    }
  };
  return React.createElement("div", {
    "class": "df-upload-wraper immediately"
  }, React.createElement("div", {
    "class": "df-upload"
  }, React.createElement(_antd.Upload, props, React.createElement(_antd.Input, {
    type: "upload",
    prefix: React.createElement(_antd.Icon, {
      type: "file",
      style: {
        color: "#8b9be1"
      }
    })
  })), React.createElement("div", {
    "class": "status success"
  }, React.createElement(_antd.Icon, {
    type: "check-circle"
  }))));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/orient-multiFiles.md":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/orient-multiFiles.md ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "显示多个文件上传列表，可删除已上传的文件。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 2,
    "title": {
      "zh-CN": "多文件上传",
      "en-US": null
    },
    "filename": "components/upload/demo/orient-multiFiles.md",
    "id": "components-upload-demo-orient-multiFiles"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token punctuation\">:</span> <span class=\"token string\">\"file\"</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"</span><span class=\"token punctuation\">,</span>\n  headers<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n    authorization<span class=\"token punctuation\">:</span> <span class=\"token string\">\"authorization-text\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">\"uploading\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"done\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"error\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload-wraper</span> <span class=\"token attr-name\">multiFiles\"</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>上传文件<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload-tip<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>只能上传jpg<span class=\"token operator\">/</span>png文件，且不超过500kb<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Input <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  name<span class=\"token operator\">:</span> <span class=\"token string\">\"file\"</span><span class=\"token punctuation\">,</span>\n  action<span class=\"token operator\">:</span> <span class=\"token string\">\"https://www.mocky.io/v2/5cc8019d300000980a055e76\"</span><span class=\"token punctuation\">,</span>\n  headers<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span>\n    authorization<span class=\"token operator\">:</span> <span class=\"token string\">\"authorization-text\"</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">info</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">!==</span> <span class=\"token string\">\"uploading\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">,</span> info<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"done\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file uploaded successfully</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">else</span> <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>status <span class=\"token operator\">===</span> <span class=\"token string\">\"error\"</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token template-string\"><span class=\"token template-punctuation string\">`</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>info<span class=\"token punctuation\">.</span>file<span class=\"token punctuation\">.</span>name<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\"> file upload failed.</span><span class=\"token template-punctuation string\">`</span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload-wraper multiFiles<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>上传文件<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>df-upload-tip<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>只能上传jpg<span class=\"token operator\">/</span>png文件，且不超过<span class=\"token number\">500</span>kb<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text"
    },
    onChange: function onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === "done") {
        _antd.message.success("".concat(info.file.name, " file uploaded successfully"));
      } else if (info.file.status === "error") {
        _antd.message.error("".concat(info.file.name, " file upload failed."));
      }
    }
  };
  return React.createElement("div", {
    "class": "df-upload-wraper multiFiles"
  }, React.createElement(_antd.Upload, props, React.createElement(_antd.Button, {
    type: "primary"
  }, "\u4E0A\u4F20\u6587\u4EF6"), React.createElement("div", {
    "class": "df-upload-tip"
  }, "\u53EA\u80FD\u4E0A\u4F20jpg/png\u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7500kb")));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/orient-picture.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/orient-picture.md ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "上传文件后显示缩略图。"
      ]
    ],
    "en-US": [

    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "缩略图上传",
      "en-US": null
    },
    "filename": "components/upload/demo/orient-picture.md",
    "id": "components-upload-demo-orient-picture"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Modal <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>resolve<span class=\"token punctuation\">,</span> reject<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> reader <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FileReader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span><span class=\"token function\">readAsDataURL</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span>onload <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span>reader<span class=\"token punctuation\">.</span>result<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span>onerror <span class=\"token operator\">=</span> error <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">reject</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">PicturesWall</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    previewImage<span class=\"token punctuation\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n    fileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleCancel <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  handlePreview <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> file <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">&amp;&amp;</span> <span class=\"token operator\">!</span>file<span class=\"token punctuation\">.</span>preview<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      file<span class=\"token punctuation\">.</span>preview <span class=\"token operator\">=</span> <span class=\"token keyword\">await</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>originFileObj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      previewImage<span class=\"token punctuation\">:</span> file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">||</span> file<span class=\"token punctuation\">.</span>preview<span class=\"token punctuation\">,</span>\n      previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> previewVisible<span class=\"token punctuation\">,</span> previewImage<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> uploadButton <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>clearfix<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload</span>\n          <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://www.mocky.io/v2/5cc8019d300000980a055e76<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">listType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>picture-card<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">fileList</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onPreview</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handlePreview<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">>=</span> <span class=\"token number\">8</span> <span class=\"token operator\">?</span> <span class=\"token keyword\">null</span> <span class=\"token punctuation\">:</span> uploadButton<span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Modal</span>\n          <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>previewVisible<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">null</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onCancel</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCancel<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">\"100%\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>previewImage<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Modal</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>PicturesWall</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Modal <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">\"antd\"</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">file</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">resolve<span class=\"token punctuation\">,</span> reject</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> reader <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FileReader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span><span class=\"token function\">readAsDataURL</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">onload</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span>reader<span class=\"token punctuation\">.</span>result<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">onerror</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">error</span> <span class=\"token operator\">=></span> <span class=\"token function\">reject</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">PicturesWall</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    previewVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    previewImage<span class=\"token operator\">:</span> <span class=\"token string\">\"\"</span><span class=\"token punctuation\">,</span>\n    fileList<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleCancel</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> previewVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handlePreview</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token parameter\">file</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">&amp;&amp;</span> <span class=\"token operator\">!</span>file<span class=\"token punctuation\">.</span>preview<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      file<span class=\"token punctuation\">.</span>preview <span class=\"token operator\">=</span> <span class=\"token keyword\">await</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>originFileObj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      previewImage<span class=\"token operator\">:</span> file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">||</span> file<span class=\"token punctuation\">.</span>preview<span class=\"token punctuation\">,</span>\n      previewVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> previewVisible<span class=\"token punctuation\">,</span> previewImage<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> uploadButton <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>clearfix<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span>\n          <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://www.mocky.io/v2/5cc8019d300000980a055e76<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">listType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>picture-card<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">fileList</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onPreview</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handlePreview<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">>=</span> <span class=\"token number\">8</span> <span class=\"token operator\">?</span> <span class=\"token keyword\">null</span> <span class=\"token operator\">:</span> uploadButton<span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Modal</span></span>\n          <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>previewVisible<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">null</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onCancel</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCancel<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">\"100%\"</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>previewImage<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Modal</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">PicturesWall</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function getBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        return resolve(reader.result);
      };

      reader.onerror = function (error) {
        return reject(error);
      };
    });
  }

  var PicturesWall =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(PicturesWall, _React$Component);

    function PicturesWall() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, PicturesWall);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PicturesWall)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        previewVisible: false,
        previewImage: "",
        fileList: []
      });

      _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
        return _this.setState({
          previewVisible: false
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handlePreview",
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(file) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!file.url && !file.preview)) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 3;
                  return getBase64(file.originFileObj);

                case 3:
                  file.preview = _context.sent;

                case 4:
                  _this.setState({
                    previewImage: file.url || file.preview,
                    previewVisible: true
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (_ref2) {
        var fileList = _ref2.fileList;
        return _this.setState({
          fileList: fileList
        });
      });

      return _this;
    }

    _createClass(PicturesWall, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            previewVisible = _this$state.previewVisible,
            previewImage = _this$state.previewImage,
            fileList = _this$state.fileList;
        var uploadButton = React.createElement("div", null, React.createElement(_antd.Icon, {
          type: "plus"
        }));
        return React.createElement("div", {
          className: "clearfix"
        }, React.createElement(_antd.Upload, {
          action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          listType: "picture-card",
          fileList: fileList,
          onPreview: this.handlePreview,
          onChange: this.handleChange
        }, fileList.length >= 8 ? null : uploadButton), React.createElement(_antd.Modal, {
          visible: previewVisible,
          footer: null,
          onCancel: this.handleCancel
        }, React.createElement("img", {
          alt: "example",
          style: {
            width: "100%"
          },
          src: previewImage
        })));
      }
    }]);

    return PicturesWall;
  }(React.Component);

  return React.createElement(PicturesWall, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/picture-card.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/picture-card.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "用户可以上传图片并在列表中显示缩略图。当上传照片数到达限制后，上传按钮消失。"
      ]
    ],
    "en-US": [
      [
        "p",
        "After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation."
      ]
    ]
  },
  "meta": {
    "order": 3,
    "title": {
      "zh-CN": "照片墙",
      "en-US": "Pictures Wall"
    },
    "filename": "components/upload/demo/picture-card.md",
    "id": "components-upload-demo-picture-card"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Modal <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span>resolve<span class=\"token punctuation\">,</span> reject<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> reader <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FileReader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span><span class=\"token function\">readAsDataURL</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span>onload <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span>reader<span class=\"token punctuation\">.</span>result<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span>onerror <span class=\"token operator\">=</span> error <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token function\">reject</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">PicturesWall</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    previewImage<span class=\"token punctuation\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    fileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'-1'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'image.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'-2'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'image.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'-3'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'image.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'-4'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'image.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'-5'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token punctuation\">:</span> <span class=\"token string\">'image.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleCancel <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  handlePreview <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> file <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">&amp;&amp;</span> <span class=\"token operator\">!</span>file<span class=\"token punctuation\">.</span>preview<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      file<span class=\"token punctuation\">.</span>preview <span class=\"token operator\">=</span> <span class=\"token keyword\">await</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>originFileObj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      previewImage<span class=\"token punctuation\">:</span> file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">||</span> file<span class=\"token punctuation\">.</span>preview<span class=\"token punctuation\">,</span>\n      previewVisible<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> previewVisible<span class=\"token punctuation\">,</span> previewImage<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> uploadButton <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Upload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>clearfix<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Upload</span>\n          <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://www.mocky.io/v2/5cc8019d300000980a055e76<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">listType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>picture-card<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">fileList</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onPreview</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handlePreview<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">>=</span> <span class=\"token number\">8</span> <span class=\"token operator\">?</span> <span class=\"token keyword\">null</span> <span class=\"token punctuation\">:</span> uploadButton<span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Modal</span> <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>previewVisible<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">null</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onCancel</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCancel<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token punctuation\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>previewImage<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Modal</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>PicturesWall</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> Modal <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">function</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">file</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">resolve<span class=\"token punctuation\">,</span> reject</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> reader <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FileReader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span><span class=\"token function\">readAsDataURL</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">onload</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token function\">resolve</span><span class=\"token punctuation\">(</span>reader<span class=\"token punctuation\">.</span>result<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    reader<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">onerror</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">error</span> <span class=\"token operator\">=></span> <span class=\"token function\">reject</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">PicturesWall</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    previewVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n    previewImage<span class=\"token operator\">:</span> <span class=\"token string\">''</span><span class=\"token punctuation\">,</span>\n    fileList<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token operator\">:</span> <span class=\"token string\">'-1'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token operator\">:</span> <span class=\"token string\">'image.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token operator\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token operator\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token operator\">:</span> <span class=\"token string\">'-2'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token operator\">:</span> <span class=\"token string\">'image.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token operator\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token operator\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token operator\">:</span> <span class=\"token string\">'-3'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token operator\">:</span> <span class=\"token string\">'image.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token operator\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token operator\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token operator\">:</span> <span class=\"token string\">'-4'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token operator\">:</span> <span class=\"token string\">'image.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token operator\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n        url<span class=\"token operator\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        uid<span class=\"token operator\">:</span> <span class=\"token string\">'-5'</span><span class=\"token punctuation\">,</span>\n        name<span class=\"token operator\">:</span> <span class=\"token string\">'image.png'</span><span class=\"token punctuation\">,</span>\n        status<span class=\"token operator\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleCancel</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> previewVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handlePreview</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token parameter\">file</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">&amp;&amp;</span> <span class=\"token operator\">!</span>file<span class=\"token punctuation\">.</span>preview<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      file<span class=\"token punctuation\">.</span>preview <span class=\"token operator\">=</span> <span class=\"token keyword\">await</span> <span class=\"token function\">getBase64</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>originFileObj<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      previewImage<span class=\"token operator\">:</span> file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">||</span> file<span class=\"token punctuation\">.</span>preview<span class=\"token punctuation\">,</span>\n      previewVisible<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> previewVisible<span class=\"token punctuation\">,</span> previewImage<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> uploadButton <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>plus<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ant-upload-text<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>Upload<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>clearfix<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span>\n          <span class=\"token attr-name\">action</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>https://www.mocky.io/v2/5cc8019d300000980a055e76<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">listType</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>picture-card<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">fileList</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onPreview</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handlePreview<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">onChange</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleChange<span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">>=</span> <span class=\"token number\">8</span> <span class=\"token operator\">?</span> <span class=\"token keyword\">null</span> <span class=\"token operator\">:</span> uploadButton<span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Modal</span></span> <span class=\"token attr-name\">visible</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>previewVisible<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">footer</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">null</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">onCancel</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleCancel<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>img</span> <span class=\"token attr-name\">alt</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>example<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> width<span class=\"token operator\">:</span> <span class=\"token string\">'100%'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">src</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>previewImage<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Modal</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">PicturesWall</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function getBase64(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        return resolve(reader.result);
      };

      reader.onerror = function (error) {
        return reject(error);
      };
    });
  }

  var PicturesWall =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(PicturesWall, _React$Component);

    function PicturesWall() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, PicturesWall);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PicturesWall)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        previewVisible: false,
        previewImage: '',
        fileList: [{
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }, {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }, {
          uid: '-3',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }, {
          uid: '-4',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
        }, {
          uid: '-5',
          name: 'image.png',
          status: 'error'
        }]
      });

      _defineProperty(_assertThisInitialized(_this), "handleCancel", function () {
        return _this.setState({
          previewVisible: false
        });
      });

      _defineProperty(_assertThisInitialized(_this), "handlePreview",
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(file) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!file.url && !file.preview)) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 3;
                  return getBase64(file.originFileObj);

                case 3:
                  file.preview = _context.sent;

                case 4:
                  _this.setState({
                    previewImage: file.url || file.preview,
                    previewVisible: true
                  });

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      _defineProperty(_assertThisInitialized(_this), "handleChange", function (_ref2) {
        var fileList = _ref2.fileList;
        return _this.setState({
          fileList: fileList
        });
      });

      return _this;
    }

    _createClass(PicturesWall, [{
      key: "render",
      value: function render() {
        var _this$state = this.state,
            previewVisible = _this$state.previewVisible,
            previewImage = _this$state.previewImage,
            fileList = _this$state.fileList;
        var uploadButton = React.createElement("div", null, React.createElement(_antd.Icon, {
          type: "plus"
        }), React.createElement("div", {
          className: "ant-upload-text"
        }, "Upload"));
        return React.createElement("div", {
          className: "clearfix"
        }, React.createElement(_antd.Upload, {
          action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
          listType: "picture-card",
          fileList: fileList,
          onPreview: this.handlePreview,
          onChange: this.handleChange
        }, fileList.length >= 8 ? null : uploadButton), React.createElement(_antd.Modal, {
          visible: previewVisible,
          footer: null,
          onCancel: this.handleCancel
        }, React.createElement("img", {
          alt: "example",
          style: {
            width: '100%'
          },
          src: previewImage
        })));
      }
    }]);

    return PicturesWall;
  }(React.Component);

  return React.createElement(PicturesWall, null);
},
  "style": "/* you can make up upload button and sample style by using stylesheets */\n.ant-upload-select-picture-card i {\n  font-size: 32px;\n  color: #999;\n}\n\n.ant-upload-select-picture-card .ant-upload-text {\n  margin-top: 8px;\n  color: #666;\n}",
  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* you can make up upload button and sample style by using stylesheets */</span>\n<span class=\"token selector\"><span class=\"token class\">.ant-upload-select-picture-card</span> i </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">32</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#999</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token selector\"><span class=\"token class\">.ant-upload-select-picture-card</span> <span class=\"token class\">.ant-upload-text</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">margin-top</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token hexcode\">#666</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/picture-style.md":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/picture-style.md ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "上传文件为图片，可展示本地缩略图。",
        [
          "code",
          "IE8/9"
        ],
        " 不支持浏览器本地缩略图展示（",
        [
          "a",
          {
            "title": null,
            "href": "https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL"
          },
          "Ref"
        ],
        "），可以写 ",
        [
          "code",
          "thumbUrl"
        ],
        " 属性来代替。"
      ]
    ],
    "en-US": [
      [
        "p",
        "If uploaded file is a picture, the thumbnail can be shown. ",
        [
          "code",
          "IE8/9"
        ],
        " do not support local thumbnail show. Please use ",
        [
          "code",
          "thumbUrl"
        ],
        " instead."
      ]
    ]
  },
  "meta": {
    "order": 8,
    "title": {
      "zh-CN": "图片列表样式",
      "en-US": "Pictures with list style"
    },
    "filename": "components/upload/demo/picture-style.md",
    "id": "components-upload-demo-picture-style"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> fileList <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'-1'</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token punctuation\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n    url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n    thumbUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    uid<span class=\"token punctuation\">:</span> <span class=\"token string\">'-2'</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token punctuation\">:</span> <span class=\"token string\">'yyy.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token punctuation\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  listType<span class=\"token punctuation\">:</span> <span class=\"token string\">'picture'</span><span class=\"token punctuation\">,</span>\n  defaultFileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>fileList<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props2 <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  listType<span class=\"token punctuation\">:</span> <span class=\"token string\">'picture'</span><span class=\"token punctuation\">,</span>\n  defaultFileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>fileList<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  className<span class=\"token punctuation\">:</span> <span class=\"token string\">'upload-list-inline'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props2<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> fileList <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    uid<span class=\"token operator\">:</span> <span class=\"token string\">'-1'</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token operator\">:</span> <span class=\"token string\">'xxx.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token operator\">:</span> <span class=\"token string\">'done'</span><span class=\"token punctuation\">,</span>\n    url<span class=\"token operator\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n    thumbUrl<span class=\"token operator\">:</span> <span class=\"token string\">'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    uid<span class=\"token operator\">:</span> <span class=\"token string\">'-2'</span><span class=\"token punctuation\">,</span>\n    name<span class=\"token operator\">:</span> <span class=\"token string\">'yyy.png'</span><span class=\"token punctuation\">,</span>\n    status<span class=\"token operator\">:</span> <span class=\"token string\">'error'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token operator\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  listType<span class=\"token operator\">:</span> <span class=\"token string\">'picture'</span><span class=\"token punctuation\">,</span>\n  defaultFileList<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>fileList<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props2 <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token operator\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  listType<span class=\"token operator\">:</span> <span class=\"token string\">'picture'</span><span class=\"token punctuation\">,</span>\n  defaultFileList<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>fileList<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  className<span class=\"token operator\">:</span> <span class=\"token string\">'upload-list-inline'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>br</span> <span class=\"token punctuation\">/></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props2</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var fileList = [{
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }, {
    uid: '-2',
    name: 'yyy.png',
    status: 'error'
  }];
  var props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [].concat(fileList)
  };
  var props2 = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    listType: 'picture',
    defaultFileList: [].concat(fileList),
    className: 'upload-list-inline'
  };
  return React.createElement("div", null, React.createElement(_antd.Upload, props, React.createElement(_antd.Button, null, React.createElement(_antd.Icon, {
    type: "upload"
  }), " Upload")), React.createElement("br", null), React.createElement("br", null), React.createElement(_antd.Upload, props2, React.createElement(_antd.Button, null, React.createElement(_antd.Icon, {
    type: "upload"
  }), " Upload")));
},
  "style": "/* tile uploaded pictures */\n.upload-list-inline .ant-upload-list-item {\n  float: left;\n  width: 200px;\n  margin-right: 8px;\n}\n.upload-list-inline .ant-upload-animate-enter {\n  animation-name: uploadAnimateInlineIn;\n}\n.upload-list-inline .ant-upload-animate-leave {\n  animation-name: uploadAnimateInlineOut;\n}",
  "highlightedStyle": "<span class=\"token comment\" spellcheck=\"true\">/* tile uploaded pictures */</span>\n<span class=\"token selector\"><span class=\"token class\">.upload-list-inline</span> <span class=\"token class\">.ant-upload-list-item</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">float</span><span class=\"token punctuation\">:</span> left<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">200</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">margin-right</span><span class=\"token punctuation\">:</span> <span class=\"token number\">8</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.upload-list-inline</span> <span class=\"token class\">.ant-upload-animate-enter</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">animation-name</span><span class=\"token punctuation\">:</span> uploadAnimateInlineIn<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n<span class=\"token selector\"><span class=\"token class\">.upload-list-inline</span> <span class=\"token class\">.ant-upload-animate-leave</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">animation-name</span><span class=\"token punctuation\">:</span> uploadAnimateInlineOut<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/preview-file.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/preview-file.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "自定义本地预览，用于处理非图片格式文件（例如视频文件）。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Customize local preview. Can handle with non-image format files such as video."
      ]
    ]
  },
  "meta": {
    "order": 9,
    "title": {
      "zh-CN": "自定义预览",
      "en-US": "Customize preview file"
    },
    "filename": "components/upload/demo/preview-file.md",
    "id": "components-upload-demo-preview-file"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'//jsonplaceholder.typicode.com/posts/'</span><span class=\"token punctuation\">,</span>\n  listType<span class=\"token punctuation\">:</span> <span class=\"token string\">'picture'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">previewFile</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Your upload file:'</span><span class=\"token punctuation\">,</span> file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\" spellcheck=\"true\">// Your process logic. Here we just mock to the same file</span>\n    <span class=\"token keyword\">return</span> <span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span><span class=\"token string\">'https://next.json-generator.com/api/json/get/4ytyBoLK8'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      method<span class=\"token punctuation\">:</span> <span class=\"token string\">'POST'</span><span class=\"token punctuation\">,</span>\n      body<span class=\"token punctuation\">:</span> file<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span>res <span class=\"token operator\">=</span><span class=\"token operator\">></span> res<span class=\"token punctuation\">.</span><span class=\"token function\">json</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> thumbnail <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> thumbnail<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token operator\">:</span> <span class=\"token string\">'//jsonplaceholder.typicode.com/posts/'</span><span class=\"token punctuation\">,</span>\n  listType<span class=\"token operator\">:</span> <span class=\"token string\">'picture'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">previewFile</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">file</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Your upload file:'</span><span class=\"token punctuation\">,</span> file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token comment\">// Your process logic. Here we just mock to the same file</span>\n    <span class=\"token keyword\">return</span> <span class=\"token function\">fetch</span><span class=\"token punctuation\">(</span><span class=\"token string\">'https://next.json-generator.com/api/json/get/4ytyBoLK8'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n      method<span class=\"token operator\">:</span> <span class=\"token string\">'POST'</span><span class=\"token punctuation\">,</span>\n      body<span class=\"token operator\">:</span> file<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">res</span> <span class=\"token operator\">=></span> res<span class=\"token punctuation\">.</span><span class=\"token function\">json</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span>\n      <span class=\"token punctuation\">.</span><span class=\"token function\">then</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> thumbnail <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> thumbnail<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile: function previewFile(file) {
      console.log('Your upload file:', file); // Your process logic. Here we just mock to the same file

      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file
      }).then(function (res) {
        return res.json();
      }).then(function (_ref) {
        var thumbnail = _ref.thumbnail;
        return thumbnail;
      });
    }
  };
  return React.createElement("div", null, React.createElement(_antd.Upload, props, React.createElement(_antd.Button, null, React.createElement(_antd.Icon, {
    type: "upload"
  }), " Upload")));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/transform-file.md":
/*!******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/transform-file.md ***!
  \******************************************************************************************************/
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
          "transformFile"
        ],
        " 转换上传的文件（例如添加水印）。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Use ",
        [
          "code",
          "transformFile"
        ],
        " for transform file before request such as add a watermark."
      ]
    ]
  },
  "meta": {
    "order": 10,
    "title": {
      "zh-CN": "上传前转换文件",
      "en-US": "Transform file before request"
    },
    "filename": "components/upload/demo/transform-file.md",
    "id": "components-upload-demo-transform-file"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">transformFile</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span>resolve <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> reader <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FileReader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      reader<span class=\"token punctuation\">.</span><span class=\"token function\">readAsDataURL</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      reader<span class=\"token punctuation\">.</span>onload <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> canvas <span class=\"token operator\">=</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">createElement</span><span class=\"token punctuation\">(</span><span class=\"token string\">'canvas'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> img <span class=\"token operator\">=</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">createElement</span><span class=\"token punctuation\">(</span><span class=\"token string\">'img'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        img<span class=\"token punctuation\">.</span>src <span class=\"token operator\">=</span> reader<span class=\"token punctuation\">.</span>result<span class=\"token punctuation\">;</span>\n        img<span class=\"token punctuation\">.</span>onload <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">const</span> ctx <span class=\"token operator\">=</span> canvas<span class=\"token punctuation\">.</span><span class=\"token function\">getContext</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2d'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          ctx<span class=\"token punctuation\">.</span><span class=\"token function\">drawImage</span><span class=\"token punctuation\">(</span>img<span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          ctx<span class=\"token punctuation\">.</span>fillStyle <span class=\"token operator\">=</span> <span class=\"token string\">'red'</span><span class=\"token punctuation\">;</span>\n          ctx<span class=\"token punctuation\">.</span>textBaseline <span class=\"token operator\">=</span> <span class=\"token string\">'middle'</span><span class=\"token punctuation\">;</span>\n          ctx<span class=\"token punctuation\">.</span><span class=\"token function\">fillText</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Ant Design'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          canvas<span class=\"token punctuation\">.</span><span class=\"token function\">toBlob</span><span class=\"token punctuation\">(</span>resolve<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n  action<span class=\"token operator\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token function\">transformFile</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">file</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">Promise</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">resolve</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> reader <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FileReader</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      reader<span class=\"token punctuation\">.</span><span class=\"token function\">readAsDataURL</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      reader<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">onload</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">const</span> canvas <span class=\"token operator\">=</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">createElement</span><span class=\"token punctuation\">(</span><span class=\"token string\">'canvas'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">const</span> img <span class=\"token operator\">=</span> document<span class=\"token punctuation\">.</span><span class=\"token function\">createElement</span><span class=\"token punctuation\">(</span><span class=\"token string\">'img'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        img<span class=\"token punctuation\">.</span>src <span class=\"token operator\">=</span> reader<span class=\"token punctuation\">.</span>result<span class=\"token punctuation\">;</span>\n        img<span class=\"token punctuation\">.</span><span class=\"token function-variable function\">onload</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">const</span> ctx <span class=\"token operator\">=</span> canvas<span class=\"token punctuation\">.</span><span class=\"token function\">getContext</span><span class=\"token punctuation\">(</span><span class=\"token string\">'2d'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          ctx<span class=\"token punctuation\">.</span><span class=\"token function\">drawImage</span><span class=\"token punctuation\">(</span>img<span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">,</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          ctx<span class=\"token punctuation\">.</span>fillStyle <span class=\"token operator\">=</span> <span class=\"token string\">'red'</span><span class=\"token punctuation\">;</span>\n          ctx<span class=\"token punctuation\">.</span>textBaseline <span class=\"token operator\">=</span> <span class=\"token string\">'middle'</span><span class=\"token punctuation\">;</span>\n          ctx<span class=\"token punctuation\">.</span><span class=\"token function\">fillText</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Ant Design'</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">,</span> <span class=\"token number\">20</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          canvas<span class=\"token punctuation\">.</span><span class=\"token function\">toBlob</span><span class=\"token punctuation\">(</span>resolve<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Upload\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">,</span>\n  mountNode<span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
  },
  "preview": function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    transformFile: function transformFile(file) {
      return new Promise(function (resolve) {
        var reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = function () {
          var canvas = document.createElement('canvas');
          var img = document.createElement('img');
          img.src = reader.result;

          img.onload = function () {
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = 'red';
            ctx.textBaseline = 'middle';
            ctx.fillText('Ant Design', 20, 20);
            canvas.toBlob(resolve);
          };
        };
      });
    }
  };
  return React.createElement("div", null, React.createElement(_antd.Upload, props, React.createElement(_antd.Button, null, React.createElement(_antd.Icon, {
    type: "upload"
  }), " Upload")));
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/upload-manually.md":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/upload-manually.md ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        [
          "code",
          "beforeUpload"
        ],
        " 返回 ",
        [
          "code",
          "false"
        ],
        " 后，手动上传文件。"
      ]
    ],
    "en-US": [
      [
        "p",
        "Upload files manually after ",
        [
          "code",
          "beforeUpload"
        ],
        " returns ",
        [
          "code",
          "false"
        ],
        "."
      ]
    ]
  },
  "meta": {
    "order": 7,
    "title": {
      "zh-CN": "手动上传",
      "en-US": "Upload manually"
    },
    "filename": "components/upload/demo/upload-manually.md",
    "id": "components-upload-demo-upload-manually"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    fileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    uploading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  handleUpload <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formData <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FormData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    fileList<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span>file <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n      formData<span class=\"token punctuation\">.</span><span class=\"token function\">append</span><span class=\"token punctuation\">(</span><span class=\"token string\">'files[]'</span><span class=\"token punctuation\">,</span> file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      uploading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\" spellcheck=\"true\">// You can use any AJAX library you like</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token punctuation\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token punctuation\">:</span> <span class=\"token string\">'post'</span><span class=\"token punctuation\">,</span>\n      processData<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      data<span class=\"token punctuation\">:</span> formData<span class=\"token punctuation\">,</span>\n      success<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          fileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          uploading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token string\">'upload successfully.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      error<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          uploading<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'upload failed.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> uploading<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      onRemove<span class=\"token punctuation\">:</span> file <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>state <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">const</span> index <span class=\"token operator\">=</span> state<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">const</span> newFileList <span class=\"token operator\">=</span> state<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          newFileList<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n            fileList<span class=\"token punctuation\">:</span> newFileList<span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      beforeUpload<span class=\"token punctuation\">:</span> file <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span>state <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          fileList<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>state<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">,</span> file<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      fileList<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Select File\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span>\n          <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleUpload<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">===</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>uploading<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token punctuation\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>uploading <span class=\"token operator\">?</span> <span class=\"token string\">'Uploading'</span> <span class=\"token punctuation\">:</span> <span class=\"token string\">'Start Upload'</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Demo</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Upload<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon<span class=\"token punctuation\">,</span> message <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> reqwest <span class=\"token keyword\">from</span> <span class=\"token string\">'reqwest'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">Demo</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    fileList<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n    uploading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">handleUpload</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> formData <span class=\"token operator\">=</span> <span class=\"token keyword\">new</span> <span class=\"token class-name\">FormData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    fileList<span class=\"token punctuation\">.</span><span class=\"token function\">forEach</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">file</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n      formData<span class=\"token punctuation\">.</span><span class=\"token function\">append</span><span class=\"token punctuation\">(</span><span class=\"token string\">'files[]'</span><span class=\"token punctuation\">,</span> file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      uploading<span class=\"token operator\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token comment\">// You can use any AJAX library you like</span>\n    <span class=\"token function\">reqwest</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n      url<span class=\"token operator\">:</span> <span class=\"token string\">'https://www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n      method<span class=\"token operator\">:</span> <span class=\"token string\">'post'</span><span class=\"token punctuation\">,</span>\n      processData<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n      data<span class=\"token operator\">:</span> formData<span class=\"token punctuation\">,</span>\n      <span class=\"token function-variable function\">success</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          fileList<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n          uploading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        message<span class=\"token punctuation\">.</span><span class=\"token function\">success</span><span class=\"token punctuation\">(</span><span class=\"token string\">'upload successfully.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token function-variable function\">error</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          uploading<span class=\"token operator\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span><span class=\"token string\">'upload failed.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> uploading<span class=\"token punctuation\">,</span> fileList <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function-variable function\">onRemove</span><span class=\"token operator\">:</span> <span class=\"token parameter\">file</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">state</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n          <span class=\"token keyword\">const</span> index <span class=\"token operator\">=</span> state<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">const</span> newFileList <span class=\"token operator\">=</span> state<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          newFileList<span class=\"token punctuation\">.</span><span class=\"token function\">splice</span><span class=\"token punctuation\">(</span>index<span class=\"token punctuation\">,</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n          <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n            fileList<span class=\"token operator\">:</span> newFileList<span class=\"token punctuation\">,</span>\n          <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token function-variable function\">beforeUpload</span><span class=\"token operator\">:</span> <span class=\"token parameter\">file</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n        <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">state</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n          fileList<span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>state<span class=\"token punctuation\">.</span>fileList<span class=\"token punctuation\">,</span> file<span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n        <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n        <span class=\"token keyword\">return</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">;</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      fileList<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n            <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Select File\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span>\n          <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>primary<span class=\"token punctuation\">\"</span></span>\n          <span class=\"token attr-name\">onClick</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleUpload<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">disabled</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>fileList<span class=\"token punctuation\">.</span>length <span class=\"token operator\">===</span> <span class=\"token number\">0</span><span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">loading</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span>uploading<span class=\"token punctuation\">}</span></span>\n          <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> marginTop<span class=\"token operator\">:</span> <span class=\"token number\">16</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span>\n        <span class=\"token punctuation\">></span></span>\n          <span class=\"token punctuation\">{</span>uploading <span class=\"token operator\">?</span> <span class=\"token string\">'Uploading'</span> <span class=\"token operator\">:</span> <span class=\"token string\">'Start Upload'</span><span class=\"token punctuation\">}</span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Demo</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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
        fileList: [],
        uploading: false
      });

      _defineProperty(_assertThisInitialized(_this), "handleUpload", function () {
        var fileList = _this.state.fileList;
        var formData = new FormData();
        fileList.forEach(function (file) {
          formData.append('files[]', file);
        });

        _this.setState({
          uploading: true
        }); // You can use any AJAX library you like


        (0, _reqwest["default"])({
          url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          method: 'post',
          processData: false,
          data: formData,
          success: function success() {
            _this.setState({
              fileList: [],
              uploading: false
            });

            _antd.message.success('upload successfully.');
          },
          error: function error() {
            _this.setState({
              uploading: false
            });

            _antd.message.error('upload failed.');
          }
        });
      });

      return _this;
    }

    _createClass(Demo, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            uploading = _this$state.uploading,
            fileList = _this$state.fileList;
        var props = {
          onRemove: function onRemove(file) {
            _this2.setState(function (state) {
              var index = state.fileList.indexOf(file);
              var newFileList = state.fileList.slice();
              newFileList.splice(index, 1);
              return {
                fileList: newFileList
              };
            });
          },
          beforeUpload: function beforeUpload(file) {
            _this2.setState(function (state) {
              return {
                fileList: [].concat(_toConsumableArray(state.fileList), [file])
              };
            });

            return false;
          },
          fileList: fileList
        };
        return React.createElement("div", null, React.createElement(_antd.Upload, props, React.createElement(_antd.Button, null, React.createElement(_antd.Icon, {
          type: "upload"
        }), " Select File")), React.createElement(_antd.Button, {
          type: "primary",
          onClick: this.handleUpload,
          disabled: fileList.length === 0,
          loading: uploading,
          style: {
            marginTop: 16
          }
        }, uploading ? 'Uploading' : 'Start Upload'));
      }
    }]);

    return Demo;
  }(React.Component);

  return React.createElement(Demo, null);
}
};

/***/ }),

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/upload-with-aliyun-oss.md":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/upload/demo/upload-with-aliyun-oss.md ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": {
    "zh-CN": [
      [
        "p",
        "使用阿里云 OSS 上传示例."
      ]
    ],
    "en-US": [
      [
        "p",
        "Use Aliyun OSS upload example."
      ]
    ]
  },
  "meta": {
    "order": 11,
    "title": {
      "zh-CN": "阿里云 OSS",
      "en-US": "Aliyun OSS"
    },
    "filename": "components/upload/demo/upload-with-aliyun-oss.md",
    "id": "components-upload-demo-upload-with-aliyun-oss"
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
      "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Upload<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">AliyunOSSUpload</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    OSSData<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token keyword\">async</span> <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">await</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">init</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  init <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">try</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> OSSData <span class=\"token operator\">=</span> <span class=\"token keyword\">await</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">mockGetOSSData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        OSSData<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">catch</span> <span class=\"token punctuation\">(</span><span class=\"token class-name\">error</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token comment\" spellcheck=\"true\">// Mock get OSS api</span>\n  <span class=\"token comment\" spellcheck=\"true\">// https://help.aliyun.com/document_detail/31988.html</span>\n  mockGetOSSData <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      dir<span class=\"token punctuation\">:</span> <span class=\"token string\">'user-dir/'</span><span class=\"token punctuation\">,</span>\n      expire<span class=\"token punctuation\">:</span> <span class=\"token string\">'1577811661'</span><span class=\"token punctuation\">,</span>\n      host<span class=\"token punctuation\">:</span> <span class=\"token string\">'//www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n      accessId<span class=\"token punctuation\">:</span> <span class=\"token string\">'c2hhb2RhaG9uZw=='</span><span class=\"token punctuation\">,</span>\n      policy<span class=\"token punctuation\">:</span> <span class=\"token string\">'eGl4aWhhaGFrdWt1ZGFkYQ=='</span><span class=\"token punctuation\">,</span>\n      signature<span class=\"token punctuation\">:</span> <span class=\"token string\">'ZGFob25nc2hhbw=='</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onChange <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> onChange <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Aliyun OSS:'</span><span class=\"token punctuation\">,</span> fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>onChange<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>fileList<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  onRemove <span class=\"token operator\">=</span> file <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> onChange <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> files <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span>v <span class=\"token operator\">=</span><span class=\"token operator\">></span> v<span class=\"token punctuation\">.</span>url <span class=\"token operator\">!==</span> file<span class=\"token punctuation\">.</span>url<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>onChange<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>files<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  transformFile <span class=\"token operator\">=</span> file <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> OSSData <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> suffix <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">lastIndexOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> filename <span class=\"token operator\">=</span> Date<span class=\"token punctuation\">.</span><span class=\"token function\">now</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> suffix<span class=\"token punctuation\">;</span>\n    file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">=</span> OSSData<span class=\"token punctuation\">.</span>dir <span class=\"token operator\">+</span> filename<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> file<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  getExtraData <span class=\"token operator\">=</span> file <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> OSSData <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      key<span class=\"token punctuation\">:</span> file<span class=\"token punctuation\">.</span>url<span class=\"token punctuation\">,</span>\n      OSSAccessKeyId<span class=\"token punctuation\">:</span> OSSData<span class=\"token punctuation\">.</span>accessId<span class=\"token punctuation\">,</span>\n      policy<span class=\"token punctuation\">:</span> OSSData<span class=\"token punctuation\">.</span>policy<span class=\"token punctuation\">,</span>\n      Signature<span class=\"token punctuation\">:</span> OSSData<span class=\"token punctuation\">.</span>signature<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  beforeUpload <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> OSSData <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> expire <span class=\"token operator\">=</span> OSSData<span class=\"token punctuation\">.</span>expire <span class=\"token operator\">*</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>expire <span class=\"token operator\">&lt;</span> Date<span class=\"token punctuation\">.</span><span class=\"token function\">now</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">await</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">init</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      name<span class=\"token punctuation\">:</span> <span class=\"token string\">'file'</span><span class=\"token punctuation\">,</span>\n      fileList<span class=\"token punctuation\">:</span> value<span class=\"token punctuation\">,</span>\n      action<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>OSSData<span class=\"token punctuation\">.</span>host<span class=\"token punctuation\">,</span>\n      onChange<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">,</span>\n      onRemove<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onRemove<span class=\"token punctuation\">,</span>\n      transformFile<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>transformFile<span class=\"token punctuation\">,</span>\n      data<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>getExtraData<span class=\"token punctuation\">,</span>\n      beforeUpload<span class=\"token punctuation\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>beforeUpload<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token operator\">&lt;</span>Upload <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>props<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Click to Upload\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Upload</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">FormPage</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form</span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token punctuation\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Form.Item</span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Photos<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'photos'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>AliyunOSSUpload</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form.Item</span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Form</span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedFormPage <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>FormPage<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>WrappedFormPage</span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
    }
  ],
  "highlightedCodes": {
    "jsx": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Form<span class=\"token punctuation\">,</span> Upload<span class=\"token punctuation\">,</span> message<span class=\"token punctuation\">,</span> Button<span class=\"token punctuation\">,</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">AliyunOSSUpload</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  state <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n    OSSData<span class=\"token operator\">:</span> <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token keyword\">async</span> <span class=\"token function\">componentDidMount</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">await</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">init</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  <span class=\"token function-variable function\">init</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">try</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">const</span> OSSData <span class=\"token operator\">=</span> <span class=\"token keyword\">await</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">mockGetOSSData</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n      <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">setState</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n        OSSData<span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span> <span class=\"token keyword\">catch</span> <span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      message<span class=\"token punctuation\">.</span><span class=\"token function\">error</span><span class=\"token punctuation\">(</span>error<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token comment\">// Mock get OSS api</span>\n  <span class=\"token comment\">// https://help.aliyun.com/document_detail/31988.html</span>\n  <span class=\"token function-variable function\">mockGetOSSData</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      dir<span class=\"token operator\">:</span> <span class=\"token string\">'user-dir/'</span><span class=\"token punctuation\">,</span>\n      expire<span class=\"token operator\">:</span> <span class=\"token string\">'1577811661'</span><span class=\"token punctuation\">,</span>\n      host<span class=\"token operator\">:</span> <span class=\"token string\">'//www.mocky.io/v2/5cc8019d300000980a055e76'</span><span class=\"token punctuation\">,</span>\n      accessId<span class=\"token operator\">:</span> <span class=\"token string\">'c2hhb2RhaG9uZw=='</span><span class=\"token punctuation\">,</span>\n      policy<span class=\"token operator\">:</span> <span class=\"token string\">'eGl4aWhhaGFrdWt1ZGFkYQ=='</span><span class=\"token punctuation\">,</span>\n      signature<span class=\"token operator\">:</span> <span class=\"token string\">'ZGFob25nc2hhbw=='</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onChange</span> <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\"><span class=\"token punctuation\">{</span> fileList <span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> onChange <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    console<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span><span class=\"token string\">'Aliyun OSS:'</span><span class=\"token punctuation\">,</span> fileList<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>onChange<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">[</span><span class=\"token operator\">...</span>fileList<span class=\"token punctuation\">]</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">onRemove</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">file</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value<span class=\"token punctuation\">,</span> onChange <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> files <span class=\"token operator\">=</span> value<span class=\"token punctuation\">.</span><span class=\"token function\">filter</span><span class=\"token punctuation\">(</span><span class=\"token parameter\">v</span> <span class=\"token operator\">=></span> v<span class=\"token punctuation\">.</span>url <span class=\"token operator\">!==</span> file<span class=\"token punctuation\">.</span>url<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>onChange<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token function\">onChange</span><span class=\"token punctuation\">(</span>files<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">transformFile</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">file</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> OSSData <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">const</span> suffix <span class=\"token operator\">=</span> file<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">slice</span><span class=\"token punctuation\">(</span>file<span class=\"token punctuation\">.</span>name<span class=\"token punctuation\">.</span><span class=\"token function\">lastIndexOf</span><span class=\"token punctuation\">(</span><span class=\"token string\">'.'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> filename <span class=\"token operator\">=</span> Date<span class=\"token punctuation\">.</span><span class=\"token function\">now</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> suffix<span class=\"token punctuation\">;</span>\n    file<span class=\"token punctuation\">.</span>url <span class=\"token operator\">=</span> OSSData<span class=\"token punctuation\">.</span>dir <span class=\"token operator\">+</span> filename<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> file<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">getExtraData</span> <span class=\"token operator\">=</span> <span class=\"token parameter\">file</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> OSSData <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">{</span>\n      key<span class=\"token operator\">:</span> file<span class=\"token punctuation\">.</span>url<span class=\"token punctuation\">,</span>\n      OSSAccessKeyId<span class=\"token operator\">:</span> OSSData<span class=\"token punctuation\">.</span>accessId<span class=\"token punctuation\">,</span>\n      policy<span class=\"token operator\">:</span> OSSData<span class=\"token punctuation\">.</span>policy<span class=\"token punctuation\">,</span>\n      Signature<span class=\"token operator\">:</span> OSSData<span class=\"token punctuation\">.</span>signature<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function-variable function\">beforeUpload</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">async</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> OSSData <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> expire <span class=\"token operator\">=</span> OSSData<span class=\"token punctuation\">.</span>expire <span class=\"token operator\">*</span> <span class=\"token number\">1000</span><span class=\"token punctuation\">;</span>\n\n    <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>expire <span class=\"token operator\">&lt;</span> Date<span class=\"token punctuation\">.</span><span class=\"token function\">now</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n      <span class=\"token keyword\">await</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span><span class=\"token function\">init</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    <span class=\"token punctuation\">}</span>\n    <span class=\"token keyword\">return</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> value <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">const</span> props <span class=\"token operator\">=</span> <span class=\"token punctuation\">{</span>\n      name<span class=\"token operator\">:</span> <span class=\"token string\">'file'</span><span class=\"token punctuation\">,</span>\n      fileList<span class=\"token operator\">:</span> value<span class=\"token punctuation\">,</span>\n      action<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>state<span class=\"token punctuation\">.</span>OSSData<span class=\"token punctuation\">.</span>host<span class=\"token punctuation\">,</span>\n      onChange<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onChange<span class=\"token punctuation\">,</span>\n      onRemove<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>onRemove<span class=\"token punctuation\">,</span>\n      transformFile<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>transformFile<span class=\"token punctuation\">,</span>\n      data<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>getExtraData<span class=\"token punctuation\">,</span>\n      beforeUpload<span class=\"token operator\">:</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>beforeUpload<span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Upload</span></span> <span class=\"token spread\"><span class=\"token punctuation\">{</span><span class=\"token punctuation\">...</span><span class=\"token attr-value\">props</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n          <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Icon</span></span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>upload<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span> Click to Upload\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Button</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Upload</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">class</span> <span class=\"token class-name\">FormPage</span> <span class=\"token keyword\">extends</span> <span class=\"token class-name\">React<span class=\"token punctuation\">.</span>Component</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> getFieldDecorator <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> <span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>props<span class=\"token punctuation\">.</span>form<span class=\"token punctuation\">;</span>\n    <span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Form</span></span> <span class=\"token attr-name\">onSubmit</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token keyword\">this</span><span class=\"token punctuation\">.</span>handleSubmit<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">labelCol</span><span class=\"token script language-javascript\"><span class=\"token script-punctuation punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> span<span class=\"token operator\">:</span> <span class=\"token number\">4</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n        <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">Form.Item</span></span> <span class=\"token attr-name\">label</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>Photos<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span><span class=\"token function\">getFieldDecorator</span><span class=\"token punctuation\">(</span><span class=\"token string\">'photos'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">AliyunOSSUpload</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Form.Item</span></span><span class=\"token punctuation\">></span></span>\n      <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span><span class=\"token class-name\">Form</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">const</span> WrappedFormPage <span class=\"token operator\">=</span> Form<span class=\"token punctuation\">.</span><span class=\"token function\">create</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">(</span>FormPage<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span><span class=\"token class-name\">WrappedFormPage</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
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

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var AliyunOSSUpload =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(AliyunOSSUpload, _React$Component);

    function AliyunOSSUpload() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, AliyunOSSUpload);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AliyunOSSUpload)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "state", {
        OSSData: {}
      });

      _defineProperty(_assertThisInitialized(_this), "init",
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var OSSData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this.mockGetOSSData();

              case 3:
                OSSData = _context.sent;

                _this.setState({
                  OSSData: OSSData
                });

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);

                _antd.message.error(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      })));

      _defineProperty(_assertThisInitialized(_this), "mockGetOSSData", function () {
        return {
          dir: 'user-dir/',
          expire: '1577811661',
          host: '//www.mocky.io/v2/5cc8019d300000980a055e76',
          accessId: 'c2hhb2RhaG9uZw==',
          policy: 'eGl4aWhhaGFrdWt1ZGFkYQ==',
          signature: 'ZGFob25nc2hhbw=='
        };
      });

      _defineProperty(_assertThisInitialized(_this), "onChange", function (_ref2) {
        var fileList = _ref2.fileList;
        var onChange = _this.props.onChange;
        console.log('Aliyun OSS:', fileList);

        if (onChange) {
          onChange(_toConsumableArray(fileList));
        }
      });

      _defineProperty(_assertThisInitialized(_this), "onRemove", function (file) {
        var _this$props = _this.props,
            value = _this$props.value,
            onChange = _this$props.onChange;
        var files = value.filter(function (v) {
          return v.url !== file.url;
        });

        if (onChange) {
          onChange(files);
        }
      });

      _defineProperty(_assertThisInitialized(_this), "transformFile", function (file) {
        var OSSData = _this.state.OSSData;
        var suffix = file.name.slice(file.name.lastIndexOf('.'));
        var filename = Date.now() + suffix;
        file.url = OSSData.dir + filename;
        return file;
      });

      _defineProperty(_assertThisInitialized(_this), "getExtraData", function (file) {
        var OSSData = _this.state.OSSData;
        return {
          key: file.url,
          OSSAccessKeyId: OSSData.accessId,
          policy: OSSData.policy,
          Signature: OSSData.signature
        };
      });

      _defineProperty(_assertThisInitialized(_this), "beforeUpload",
      /*#__PURE__*/
      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var OSSData, expire;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                OSSData = _this.state.OSSData;
                expire = OSSData.expire * 1000;

                if (!(expire < Date.now())) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 5;
                return _this.init();

              case 5:
                return _context2.abrupt("return", true);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      })));

      return _this;
    }

    _createClass(AliyunOSSUpload, [{
      key: "componentDidMount",
      value: function () {
        var _componentDidMount = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3() {
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.init();

                case 2:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function componentDidMount() {
          return _componentDidMount.apply(this, arguments);
        }

        return componentDidMount;
      }()
    }, {
      key: "render",
      value: function render() {
        var value = this.props.value;
        var props = {
          name: 'file',
          fileList: value,
          action: this.state.OSSData.host,
          onChange: this.onChange,
          onRemove: this.onRemove,
          transformFile: this.transformFile,
          data: this.getExtraData,
          beforeUpload: this.beforeUpload
        };
        return React.createElement(_antd.Upload, props, React.createElement(_antd.Button, null, React.createElement(_antd.Icon, {
          type: "upload"
        }), " Click to Upload"));
      }
    }]);

    return AliyunOSSUpload;
  }(React.Component);

  var FormPage =
  /*#__PURE__*/
  function (_React$Component2) {
    _inherits(FormPage, _React$Component2);

    function FormPage() {
      _classCallCheck(this, FormPage);

      return _possibleConstructorReturn(this, _getPrototypeOf(FormPage).apply(this, arguments));
    }

    _createClass(FormPage, [{
      key: "render",
      value: function render() {
        var getFieldDecorator = this.props.form.getFieldDecorator;
        return React.createElement(_antd.Form, {
          onSubmit: this.handleSubmit,
          labelCol: {
            span: 4
          }
        }, React.createElement(_antd.Form.Item, {
          label: "Photos"
        }, getFieldDecorator('photos')(React.createElement(AliyunOSSUpload, null))));
      }
    }]);

    return FormPage;
  }(React.Component);

  var WrappedFormPage = _antd.Form.create()(FormPage);

  return React.createElement(WrappedFormPage, null);
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