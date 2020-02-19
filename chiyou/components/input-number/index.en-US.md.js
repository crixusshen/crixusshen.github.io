(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/input-number/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/input-number/index.en-US.md":
/*!****************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/input-number/index.en-US.md ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Enter a number within certain range with the mouse or keyboard."
    ],
    [
      "h2",
      "When To Use"
    ],
    [
      "p",
      "When a numeric value needs to be provided."
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Entry",
    "title": "InputNumber",
    "filename": "components/input-number/index.en-US.md"
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
            "defaultValue"
          ],
          [
            "td",
            "initial value"
          ],
          [
            "td",
            "number"
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
            "disabled"
          ],
          [
            "td",
            "disable the input"
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
            "formatter"
          ],
          [
            "td",
            "Specifies the format of the value presented"
          ],
          [
            "td",
            "function(value: number ",
            "|",
            " string): string"
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
            "max"
          ],
          [
            "td",
            "max value"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "Infinity"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "min"
          ],
          [
            "td",
            "min value"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "-Infinity"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "parser"
          ],
          [
            "td",
            "Specifies the value extracted from formatter"
          ],
          [
            "td",
            "function( string): number"
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
            "precision"
          ],
          [
            "td",
            "precision of input value"
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
            "decimalSeparator"
          ],
          [
            "td",
            "decimal separator"
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
            "3.10.1"
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
            "height of input box"
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
            "step"
          ],
          [
            "td",
            "The number to which the current value is increased or decreased. It can be an integer or decimal."
          ],
          [
            "td",
            "number",
            "|",
            "string"
          ],
          [
            "td",
            "1"
          ],
          [
            "td"
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
            "onChange"
          ],
          [
            "td",
            "The callback triggered when the value is changed."
          ],
          [
            "td",
            "function(value: number ",
            "|",
            " string)"
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
            "onPressEnter"
          ],
          [
            "td",
            "The callback function that is triggered when Enter key is pressed."
          ],
          [
            "td",
            "function(e)"
          ],
          [
            "td"
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