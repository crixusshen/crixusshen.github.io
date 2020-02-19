(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/typography/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/index.en-US.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/typography/index.en-US.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Basic text writing, including headings, body text, lists, and more."
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
          "When need to display a title or paragraph contents in Articles/Blogs/Notes."
        ]
      ],
      [
        "li",
        [
          "p",
          "When you need copyable/editable/ellipsis texts."
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "General",
    "title": "Typography",
    "cols": 1,
    "filename": "components/typography/index.en-US.md"
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
    ]
  ],
  "api": [
    "section",
    [
      "h2",
      "API"
    ],
    [
      "h3",
      "Typography.Text"
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
            "code"
          ],
          [
            "td",
            "Code style"
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
            "td",
            "3.15.1"
          ]
        ],
        [
          "tr",
          [
            "td",
            "copyable"
          ],
          [
            "td",
            "Config copy. Can set copy text and callback when is an object"
          ],
          [
            "td",
            "boolean ",
            "|",
            " { text: string, onCopy: Function }"
          ],
          [
            "td",
            "false"
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
            "delete"
          ],
          [
            "td",
            "Deleted line style"
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
            "td",
            "3.14.0"
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
            "Disabled content"
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
            "td",
            "3.14.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "editable"
          ],
          [
            "td",
            "Editable. Can control edit state when is object"
          ],
          [
            "td",
            "boolean ",
            "|",
            " { editing: boolean, onStart: Function, onChange: Function(string) }"
          ],
          [
            "td",
            "false"
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
            "ellipsis"
          ],
          [
            "td",
            "Display ellipsis when text overflows"
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
            "td",
            "3.14.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "mark"
          ],
          [
            "td",
            "Marked style"
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
            "td",
            "3.14.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "underline"
          ],
          [
            "td",
            "Underlined style"
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
            "td",
            "3.14.0"
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
            "Trigger when user edits the content"
          ],
          [
            "td",
            "Function(string)"
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
            "strong"
          ],
          [
            "td",
            "Bold style"
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
            "td",
            "3.14.0"
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
            "Content type"
          ],
          [
            "td",
            [
              "code",
              "secondary"
            ],
            ", ",
            [
              "code",
              "warning"
            ],
            ", ",
            [
              "code",
              "danger"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.14.0"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Typography.Title"
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
            "code"
          ],
          [
            "td",
            "Code style"
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
            "td",
            "3.15.1"
          ]
        ],
        [
          "tr",
          [
            "td",
            "copyable"
          ],
          [
            "td",
            "Config copy. Can set copy text and callback when is an object"
          ],
          [
            "td",
            "boolean ",
            "|",
            " { text: string, onCopy: Function }"
          ],
          [
            "td",
            "false"
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
            "delete"
          ],
          [
            "td",
            "Deleted line style"
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
            "td",
            "3.14.0"
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
            "Disabled content"
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
            "td",
            "3.14.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "editable"
          ],
          [
            "td",
            "Editable. Can control edit state when is object"
          ],
          [
            "td",
            "boolean ",
            "|",
            " { editing: boolean, onStart: Function, onChange: Function(string) }"
          ],
          [
            "td",
            "false"
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
            "ellipsis"
          ],
          [
            "td",
            "Display ellipsis when text overflows. Can configure rows and expandable by using object"
          ],
          [
            "td",
            "boolean ",
            "|",
            " { rows: number, expandable: boolean, onExpand: Function }"
          ],
          [
            "td",
            "false"
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
            "level"
          ],
          [
            "td",
            "Set content importance. Match with ",
            [
              "code",
              "h1"
            ],
            ", ",
            [
              "code",
              "h2"
            ],
            ", ",
            [
              "code",
              "h3"
            ],
            ", ",
            [
              "code",
              "h4"
            ]
          ],
          [
            "td",
            "number: ",
            [
              "code",
              "1"
            ],
            ", ",
            [
              "code",
              "2"
            ],
            ", ",
            [
              "code",
              "3"
            ],
            ", ",
            [
              "code",
              "4"
            ]
          ],
          [
            "td",
            "1"
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
            "mark"
          ],
          [
            "td",
            "Marked style"
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
            "td",
            "3.14.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "underline"
          ],
          [
            "td",
            "Underlined style"
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
            "td",
            "3.14.0"
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
            "Trigger when user edits the content"
          ],
          [
            "td",
            "Function(string)"
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
            "type"
          ],
          [
            "td",
            "Content type"
          ],
          [
            "td",
            [
              "code",
              "secondary"
            ],
            ", ",
            [
              "code",
              "warning"
            ],
            ", ",
            [
              "code",
              "danger"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.14.0"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Typography.Paragraph"
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
            "code"
          ],
          [
            "td",
            "Code style"
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
            "td",
            "3.15.1"
          ]
        ],
        [
          "tr",
          [
            "td",
            "copyable"
          ],
          [
            "td",
            "Config copy. Can set copy text and callback when is an object"
          ],
          [
            "td",
            "boolean ",
            "|",
            " { text: string, onCopy: Function }"
          ],
          [
            "td",
            "false"
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
            "delete"
          ],
          [
            "td",
            "Deleted line style"
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
            "td",
            "3.14.0"
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
            "Disabled content"
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
            "td",
            "3.14.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "editable"
          ],
          [
            "td",
            "Editable. Can control edit state when is object"
          ],
          [
            "td",
            "boolean ",
            "|",
            " { editing: boolean, onStart: Function, onChange: Function(string) }"
          ],
          [
            "td",
            "false"
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
            "ellipsis"
          ],
          [
            "td",
            "Display ellipsis when text overflows. Can configure rows and expandable by using object"
          ],
          [
            "td",
            "boolean ",
            "|",
            " { rows: number, expandable: boolean, onExpand: Function }"
          ],
          [
            "td",
            "false"
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
            "mark"
          ],
          [
            "td",
            "Marked style"
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
            "td",
            "3.14.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "underline"
          ],
          [
            "td",
            "Underlined style"
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
            "td",
            "3.14.0"
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
            "Trigger when user edits the content"
          ],
          [
            "td",
            "Function(string)"
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
            "strong"
          ],
          [
            "td",
            "Bold style"
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
            "td",
            "3.14.0"
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
            "Content type"
          ],
          [
            "td",
            [
              "code",
              "secondary"
            ],
            ", ",
            [
              "code",
              "warning"
            ],
            ", ",
            [
              "code",
              "danger"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.14.0"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.en-US.md.js.map