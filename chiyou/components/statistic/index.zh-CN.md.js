(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/statistic/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/statistic/index.zh-CN.md":
/*!*************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/statistic/index.zh-CN.md ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "展示统计数值。"
    ],
    [
      "h2",
      "何时使用"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "当需要突出某个或某组数字时。"
        ]
      ],
      [
        "li",
        [
          "p",
          "当需要展示带描述的统计类数据时使用。"
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "subtitle": "统计数值",
    "type": "数据展示",
    "title": "Statistic",
    "filename": "components/statistic/index.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#何时使用",
          "title": "何时使用"
        },
        "何时使用"
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
      "h4",
      "Statistic"
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
            "decimalSeparator"
          ],
          [
            "td",
            "设置小数点"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "."
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
            "formatter"
          ],
          [
            "td",
            "自定义数值展示"
          ],
          [
            "td",
            "(value) => ReactNode"
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
            "groupSeparator"
          ],
          [
            "td",
            "设置千分位标识符"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            ","
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
            "precision"
          ],
          [
            "td",
            "数值精度"
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
            "prefix"
          ],
          [
            "td",
            "设置数值的前缀"
          ],
          [
            "td",
            "string ",
            "|",
            " ReactNode"
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
            "suffix"
          ],
          [
            "td",
            "设置数值的后缀"
          ],
          [
            "td",
            "string ",
            "|",
            " ReactNode"
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
            "title"
          ],
          [
            "td",
            "数值的标题"
          ],
          [
            "td",
            "string ",
            "|",
            " ReactNode"
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
            "value"
          ],
          [
            "td",
            "数值内容"
          ],
          [
            "td",
            "string ",
            "|",
            " number"
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
            "valueStyle"
          ],
          [
            "td",
            "设置数值的样式"
          ],
          [
            "td",
            "style"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.13.0"
          ]
        ]
      ]
    ],
    [
      "h4",
      "Statistic.Countdown"
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
            "format"
          ],
          [
            "td",
            "格式化倒计时展示，参考 ",
            [
              "a",
              {
                "title": null,
                "href": "http://momentjs.com/"
              },
              "moment"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "'HH:mm:ss'"
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
            "onFinish"
          ],
          [
            "td",
            "倒计时完成时触发"
          ],
          [
            "td",
            "() => void"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.14.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "prefix"
          ],
          [
            "td",
            "设置数值的前缀"
          ],
          [
            "td",
            "string ",
            "|",
            " ReactNode"
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
            "suffix"
          ],
          [
            "td",
            "设置数值的后缀"
          ],
          [
            "td",
            "string ",
            "|",
            " ReactNode"
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
            "title"
          ],
          [
            "td",
            "数值的标题"
          ],
          [
            "td",
            "string ",
            "|",
            " ReactNode"
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
            "value"
          ],
          [
            "td",
            "数值内容"
          ],
          [
            "td",
            "number ",
            "|",
            " moment"
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
            "valueStyle"
          ],
          [
            "td",
            "设置数值的样式"
          ],
          [
            "td",
            "style"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.13.0"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.zh-CN.md.js.map