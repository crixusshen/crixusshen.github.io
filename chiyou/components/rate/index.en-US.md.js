(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/rate/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/rate/index.en-US.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/rate/index.en-US.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Rate component."
    ],
    [
      "h2",
      "When To Use"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "Show evaluation."
        ]
      ],
      [
        "li",
        [
          "p",
          "A quick rating operation on something."
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Entry",
    "title": "Rate",
    "filename": "components/rate/index.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#When-To-Use",
          "title": "When To Use"
        },
        "When To Use"
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
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Methods",
          "title": "Methods"
        },
        "Methods"
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
            "type"
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
            "allowClear"
          ],
          [
            "td",
            "whether to allow clear when click again"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            "true"
          ],
          [
            "td",
            "3.1.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "allowHalf"
          ],
          [
            "td",
            "whether to allow semi selection"
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
            "autoFocus"
          ],
          [
            "td",
            "get focus when component mounted"
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
            "character"
          ],
          [
            "td",
            "custom character of rate"
          ],
          [
            "td",
            "ReactNode"
          ],
          [
            "td",
            [
              "code",
              "<Icon type=\"star\" />"
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
            "className"
          ],
          [
            "td",
            "custom class name of rate"
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
            "count"
          ],
          [
            "td",
            "star count"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "5"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "defaultValue"
          ],
          [
            "td",
            "default value"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "0"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "disabled"
          ],
          [
            "td",
            "read only, unable to interact"
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
            "style"
          ],
          [
            "td",
            "custom style object of rate"
          ],
          [
            "td",
            "object"
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
            "tooltips"
          ],
          [
            "td",
            "Customize tooltip by each character"
          ],
          [
            "td",
            "string",
            "[",
            "]"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.12.0"
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
            "current value"
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
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onBlur"
          ],
          [
            "td",
            "callback when component lose focus"
          ],
          [
            "td",
            "Function()"
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
            "onChange"
          ],
          [
            "td",
            "callback when select value"
          ],
          [
            "td",
            "Function(value: number)"
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
            "onFocus"
          ],
          [
            "td",
            "callback when component get focus"
          ],
          [
            "td",
            "Function()"
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
            "onHoverChange"
          ],
          [
            "td",
            "callback when hover item"
          ],
          [
            "td",
            "Function(value: number)"
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
            "onKeyDown"
          ],
          [
            "td",
            "callback when keydown on component"
          ],
          [
            "td",
            "Function(event)"
          ],
          [
            "td",
            "-"
          ],
          [
            "td"
          ]
        ]
      ]
    ],
    [
      "h2",
      "Methods"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "Name"
          ],
          [
            "th",
            "Description"
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
            "blur()"
          ],
          [
            "td",
            "remove focus"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "focus()"
          ],
          [
            "td",
            "get focus"
          ],
          [
            "td"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.en-US.md.js.map