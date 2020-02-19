(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/badge/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/badge/index.zh-CN.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/badge/index.zh-CN.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "在图标货按钮右上角显示数量或状态。"
    ]
  ],
  "meta": {
    "category": "Components",
    "subtitle": "标记",
    "type": "数据展示",
    "title": "Badge",
    "filename": "components/badge/index.zh-CN.md"
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
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>a</span> <span class=\"token attr-name\">href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">className</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>head-example<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Badge</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<Badge count={5}>\n  <a href=\"#\" className=\"head-example\" />\n</Badge>"
      ]
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Badge</span> <span class=\"token attr-name\">count</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token number\">5</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<Badge count={5} />"
      ]
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "参数"
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
            "color"
          ],
          [
            "td",
            "自定义小圆点的颜色"
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
            "3.16.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "count"
          ],
          [
            "td",
            "展示的数字，大于 overflowCount 时显示为 ",
            [
              "code",
              "${overflowCount}+"
            ],
            "，为 0 时隐藏"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "dot"
          ],
          [
            "td",
            "不展示数字，只有一个小红点"
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
            "offset"
          ],
          [
            "td",
            "设置状态点的位置偏移，格式为 ",
            [
              "code",
              "[x, y]"
            ]
          ],
          [
            "td",
            [
              "code",
              "[number, number]"
            ]
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
            "overflowCount"
          ],
          [
            "td",
            "展示封顶的数字值"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "99"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showZero"
          ],
          [
            "td",
            "当数值为 0 时，是否展示 Badge"
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
            "status"
          ],
          [
            "td",
            "设置 Badge 为状态点"
          ],
          [
            "td",
            "Enum{ 'success', 'processing, 'default', 'error', 'warning' }"
          ],
          [
            "td",
            "''"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "text"
          ],
          [
            "td",
            "在设置了 ",
            [
              "code",
              "status"
            ],
            " 的前提下有效，设置状态点的文本"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "''"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "title"
          ],
          [
            "td",
            "设置鼠标放在状态点上时显示的文字"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "count"
            ]
          ],
          [
            "td",
            "3.5.0"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.zh-CN.md.js.map