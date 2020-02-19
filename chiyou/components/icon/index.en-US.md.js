(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/icon/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/icon/index.en-US.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/icon/index.en-US.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Semantic vector graphics."
    ],
    [
      "h2",
      "List of icons"
    ],
    function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _IconDisplay = _interopRequireDefault(__webpack_require__(/*! site/theme/template/IconDisplay */ "./site/theme/template/IconDisplay/index.tsx"));

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  return React.createElement(_IconDisplay["default"], null);
}
  ],
  "meta": {
    "category": "Components",
    "type": "General",
    "title": "Icon",
    "toc": false,
    "filename": "components/icon/index.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#List-of-icons",
          "title": "List of icons"
        },
        "List of icons"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#API",
          "title": "API"
        },
        "API"
      ]
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ],
          [
            "th",
            "Version"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "type"
          ],
          [
            "td",
            "Type of the icon"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "style"
          ],
          [
            "td",
            "Style properties of icon, like ",
            [
              "code",
              "fontSize"
            ],
            " and ",
            [
              "code",
              "color"
            ]
          ],
          [
            "td",
            "CSSProperties"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "theme"
          ],
          [
            "td",
            "Theme variant of the icon"
          ],
          [
            "td",
            "'filled' ",
            "|",
            " 'outlined' ",
            "|",
            " 'twoTone'"
          ],
          [
            "td",
            "'outlined'"
          ],
          [
            "td",
            "3.9.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "spin"
          ],
          [
            "td",
            "Rotate icon with animation"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "false"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "rotate"
          ],
          [
            "td",
            "Rotate by n degrees (added in 3.13.0, not working in IE9)"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.13.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "component"
          ],
          [
            "td",
            "The component used for the root node. This will override the ",
            [
              "strong",
              [
                "code",
                "type"
              ]
            ],
            " property."
          ],
          [
            "td",
            "ComponentType<CustomIconComponentProps",
            ">"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.9.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "twoToneColor"
          ],
          [
            "td",
            "Only supports the two-tone icon. Specify the primary color."
          ],
          [
            "td",
            "string (hex color)"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.9.0"
          ]
        ]
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "Note: icon rendering priority of the Icon component is component > children > type. When props is passed, the higher priority item will work, and the lower priority item will be invalid."
      ]
    ],
    [
      "h3",
      "SVG icons"
    ],
    [
      "p",
      "We introduced SVG icons in version ",
      [
        "code",
        "3.9.0"
      ],
      ", replacing font icons. This has the following benefits:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "Complete offline usage of icons, without dependency on a CDN-hosted font icon file (No more empty square during downloading and no need to deploy icon font files locally either!)"
        ]
      ],
      [
        "li",
        [
          "p",
          "Much more display accuracy on lower-resolution screens"
        ]
      ],
      [
        "li",
        [
          "p",
          "The ability to choose icon color"
        ]
      ],
      [
        "li",
        [
          "p",
          "No need to change built-in icons with overriding styles by providing more props in component"
        ]
      ]
    ],
    [
      "p",
      "More discussion of SVG icon reference at ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/10353"
        },
        "#10353"
      ],
      "."
    ],
    [
      "blockquote",
      [
        "p",
        "⚠️ Given the extra bundle size caused by all SVG icons imported in 3.9.0, we will provide a new API to allow developers to import icons as needed, you can track ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/ant-design/ant-design/issues/12011"
          },
          "#12011"
        ],
        " for updates."
      ],
      [
        "p",
        "While you wait, you can use ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/Beven91/webpack-ant-icon-loader"
          },
          "webpack plugin"
        ],
        " from the community to chunk the icon file."
      ]
    ],
    [
      "p",
      "The properties ",
      [
        "code",
        "theme"
      ],
      ", ",
      [
        "code",
        "component"
      ],
      " and ",
      [
        "code",
        "twoToneColor"
      ],
      " were added in ",
      [
        "code",
        "3.9.0"
      ],
      ". The best practice is to pass the property ",
      [
        "code",
        "theme"
      ],
      " to every ",
      [
        "code",
        "<Icon />"
      ],
      " component."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>star<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>filled<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<Icon type=\"star\" theme=\"filled\" />"
      ]
    ],
    [
      "p",
      "All the icons will render to ",
      [
        "code",
        "<svg>"
      ],
      ". You can still set ",
      [
        "code",
        "style"
      ],
      " and ",
      [
        "code",
        "className"
      ],
      " for size and color of icons."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>message<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span><span class=\"token punctuation\">,</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'#08c'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">theme</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>outlined<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<Icon type=\"message\" style={{ fontSize: '16px', color: '#08c' }} theme=\"outlined\" />"
      ]
    ],
    [
      "h3",
      "Set TwoTone Color"
    ],
    [
      "p",
      "When using the two-tone icons, you can use the static methods ",
      [
        "code",
        "Icon.getTwoToneColor()"
      ],
      " and ",
      [
        "code",
        "Icon.setTwoToneColor(colorString)"
      ],
      " to specify the primary color."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "Icon<span class=\"token punctuation\">.</span><span class=\"token function\">setTwoToneColor</span><span class=\"token punctuation\">(</span><span class=\"token string\">'#eb2f96'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\nIcon<span class=\"token punctuation\">.</span><span class=\"token function\">getTwoToneColor</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// #eb2f96</span>"
      },
      [
        "code",
        "Icon.setTwoToneColor('#eb2f96');\nIcon.getTwoToneColor(); // #eb2f96"
      ]
    ],
    [
      "h3",
      "Custom Font Icon"
    ],
    [
      "p",
      "We added a ",
      [
        "code",
        "createFromIconfontCN"
      ],
      " function to help developer use their own icons deployed at ",
      [
        "a",
        {
          "title": null,
          "href": "http://iconfont.cn/"
        },
        "iconfont.cn"
      ],
      " in a convenient way."
    ],
    [
      "blockquote",
      [
        "p",
        "This method is specified for ",
        [
          "a",
          {
            "title": null,
            "href": "http://iconfont.cn/"
          },
          "iconfont.cn"
        ],
        "."
      ]
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token keyword\">const</span> MyIcon <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  scriptUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> generated by iconfont<span class=\"token punctuation\">.</span>cn\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token operator\">&lt;</span>MyIcon type<span class=\"token operator\">=</span><span class=\"token string\">\"icon-example\"</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">,</span> mountedNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "const MyIcon = Icon.createFromIconfontCN({\n  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // generated by iconfont.cn\n});\n\nReactDOM.render(<MyIcon type=\"icon-example\" />, mountedNode);"
      ]
    ],
    [
      "p",
      "It creates a component that uses SVG sprites in essence."
    ],
    [
      "p",
      "The following options are available:"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Default"
          ],
          [
            "th",
            "Version"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "scriptUrl"
          ],
          [
            "td",
            "The URL generated by ",
            [
              "a",
              {
                "title": null,
                "href": "http://iconfont.cn/"
              },
              "iconfont.cn"
            ],
            " project."
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.9.3"
          ]
        ],
        [
          "tr",
          [
            "td",
            "extraCommonProps"
          ],
          [
            "td",
            "Define extra properties to the component"
          ],
          [
            "td",
            [
              "code",
              "{ [key: string]: any }"
            ]
          ],
          [
            "td",
            "{}"
          ],
          [
            "td",
            "3.9.3"
          ]
        ]
      ]
    ],
    [
      "p",
      "The property ",
      [
        "code",
        "scriptUrl"
      ],
      " should be set to import the SVG sprite symbols."
    ],
    [
      "p",
      "See ",
      [
        "a",
        {
          "title": null,
          "href": "http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code"
        },
        "iconfont.cn documents"
      ],
      " to learn about how to generate ",
      [
        "code",
        "scriptUrl"
      ],
      "."
    ],
    [
      "h3",
      "Custom SVG Icon"
    ],
    [
      "p",
      "You can import SVG icon as a react component by using ",
      [
        "code",
        "webpack"
      ],
      " and ",
      [
        "a",
        {
          "title": null,
          "href": "https://www.npmjs.com/package/@svgr/webpack"
        },
        [
          "code",
          "@svgr/webpack"
        ]
      ],
      ". ",
      [
        "code",
        "@svgr/webpack"
      ],
      "'s ",
      [
        "code",
        "options"
      ],
      " ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/smooth-code/svgr#options"
        },
        "reference"
      ],
      "."
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// webpack.config.js</span>\n<span class=\"token punctuation\">{</span>\n  test<span class=\"token punctuation\">:</span> <span class=\"token regex\">/\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/</span><span class=\"token punctuation\">,</span>\n  use<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n    <span class=\"token punctuation\">{</span>\n      loader<span class=\"token punctuation\">:</span> <span class=\"token string\">'babel-loader'</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">{</span>\n      loader<span class=\"token punctuation\">:</span> <span class=\"token string\">'@svgr/webpack'</span><span class=\"token punctuation\">,</span>\n      options<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n        babel<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span>\n        icon<span class=\"token punctuation\">:</span> <span class=\"token boolean\">true</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// webpack.config.js\n{\n  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  use: [\n    {\n      loader: 'babel-loader',\n    },\n    {\n      loader: '@svgr/webpack',\n      options: {\n        babel: false,\n        icon: true,\n      },\n    },\n  ],\n}"
      ]
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">import</span> MessageSvg <span class=\"token keyword\">from</span> <span class=\"token string\">'path/to/message.svg'</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// path to your '*.svg' file.</span>\n\nReactDOM<span class=\"token punctuation\">.</span><span class=\"token function\">render</span><span class=\"token punctuation\">(</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">component</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>MessageSvg<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">,</span> mountNode<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Icon } from 'antd';\nimport MessageSvg from 'path/to/message.svg'; // path to your '*.svg' file.\n\nReactDOM.render(<Icon component={MessageSvg} />, mountNode);"
      ]
    ],
    [
      "p",
      "The following properties are available for the component:"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Property"
          ],
          [
            "th",
            "Description"
          ],
          [
            "th",
            "Type"
          ],
          [
            "th",
            "Readonly"
          ],
          [
            "th",
            "Version"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "width"
          ],
          [
            "td",
            "The width of the ",
            [
              "code",
              "svg"
            ],
            " element"
          ],
          [
            "td",
            "string ",
            "|",
            " number"
          ],
          [
            "td",
            "'1em'"
          ],
          [
            "td",
            "3.10.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "height"
          ],
          [
            "td",
            "The height of the ",
            [
              "code",
              "svg"
            ],
            " element"
          ],
          [
            "td",
            "string ",
            "|",
            " number"
          ],
          [
            "td",
            "'1em'"
          ],
          [
            "td",
            "3.10.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "fill"
          ],
          [
            "td",
            "Define the color used to paint the ",
            [
              "code",
              "svg"
            ],
            " element"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'currentColor'"
          ],
          [
            "td",
            "3.10.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "className"
          ],
          [
            "td",
            "The computed class name of the ",
            [
              "code",
              "svg"
            ],
            " element"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.10.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "style"
          ],
          [
            "td",
            "The computed style of the ",
            [
              "code",
              "svg"
            ],
            " element"
          ],
          [
            "td",
            "CSSProperties"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.10.0"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.en-US.md.js.map