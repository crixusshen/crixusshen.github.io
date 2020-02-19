(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/button/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/button/index.zh-CN.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/button/index.zh-CN.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "常用的操作按钮。"
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "通用",
    "title": "Button",
    "subtitle": "按钮",
    "filename": "components/button/index.zh-CN.md"
  },
  "toc": [
    "ul",
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
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#FAQ",
          "title": "FAQ"
        },
        "FAQ"
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
      "p",
      "通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：",
      [
        "code",
        "type"
      ],
      " -> ",
      [
        "code",
        "shape"
      ],
      " -> ",
      [
        "code",
        "size"
      ],
      " -> ",
      [
        "code",
        "loading"
      ],
      " -> ",
      [
        "code",
        "disabled"
      ],
      "。"
    ],
    [
      "p",
      "按钮的属性说明如下："
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "属性"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ],
          [
            "th",
            "版本"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "disabled"
          ],
          [
            "td",
            "按钮失效状态"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            [
              "code",
              "false"
            ]
          ],
          [
            "td",
            "3.5.1"
          ]
        ],
        [
          "tr",
          [
            "td",
            "ghost"
          ],
          [
            "td",
            "幽灵属性，使按钮背景透明，版本 2.7 中增加"
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
            "href"
          ],
          [
            "td",
            "点击跳转的地址，指定此属性 button 的行为和 a 链接一致"
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
            "htmlType"
          ],
          [
            "td",
            "设置 ",
            [
              "code",
              "button"
            ],
            " 原生的 ",
            [
              "code",
              "type"
            ],
            " 值，可选值请参考 ",
            [
              "a",
              {
                "title": null,
                "href": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type"
              },
              "HTML 标准"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "button"
            ]
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "icon"
          ],
          [
            "td",
            "设置按钮的图标类型"
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
            "loading"
          ],
          [
            "td",
            "设置按钮载入状态"
          ],
          [
            "td",
            "boolean ",
            "|",
            " { delay: number }"
          ],
          [
            "td",
            [
              "code",
              "false"
            ]
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "shape"
          ],
          [
            "td",
            "设置按钮形状，可选值为 ",
            [
              "code",
              "circle"
            ],
            "、 ",
            [
              "code",
              "round"
            ],
            " 或者不设"
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
            "size"
          ],
          [
            "td",
            "设置按钮大小，可选值为 ",
            [
              "code",
              "small"
            ],
            " ",
            [
              "code",
              "large"
            ],
            " 或者不设"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "default"
            ]
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "target"
          ],
          [
            "td",
            "相当于 a 链接的 target 属性，href 存在时生效"
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
            "type"
          ],
          [
            "td",
            "设置按钮类型，可选值为 ",
            [
              "code",
              "primary"
            ],
            " ",
            [
              "code",
              "dashed"
            ],
            " ",
            [
              "code",
              "danger"
            ],
            " ",
            [
              "code",
              "link"
            ],
            "(3.17 中增加) 或者不设"
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
            "onClick"
          ],
          [
            "td",
            "点击按钮时的回调"
          ],
          [
            "td",
            "(event) => void"
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
            "block"
          ],
          [
            "td",
            "将按钮宽度调整为其父宽度的选项"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            [
              "code",
              "false"
            ]
          ],
          [
            "td",
            "3.8.0"
          ]
        ]
      ]
    ],
    [
      "p",
      "支持原生 button 的其他所有属性。"
    ],
    [
      "h2",
      "FAQ"
    ],
    [
      "h3",
      "如何移除两个汉字之间的空格？"
    ],
    [
      "p",
      "根据设计规范要求，我们会在按钮内只有两个汉字时自动添加空格，如果你不需要这个特性，可以设置 ",
      [
        "a",
        {
          "title": null,
          "href": "/components/config-provider/#API"
        },
        "ConfigProvider"
      ],
      " 的 ",
      [
        "code",
        "autoInsertSpaceInButton"
      ],
      " 为 ",
      [
        "code",
        "false"
      ],
      "。"
    ],
    [
      "p",
      [
        "img",
        {
          "title": null,
          "src": "https://gw.alipayobjects.com/zos/antfincdn/Hz5HL9gsT4/f29f170d-b78d-4d2b-aa71-0da6a9ead4d9.png",
          "alt": null
        }
      ]
    ],
    [
      "style",
      "\n[id^=\"components-button-demo-\"] .ant-btn {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n[id^=\"components-button-demo-\"] .ant-btn-group > .ant-btn {\n  margin-right: 0;\n}\n"
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.zh-CN.md.js.map