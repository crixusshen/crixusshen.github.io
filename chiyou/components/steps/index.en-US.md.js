(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/steps/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/steps/index.en-US.md":
/*!*********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/steps/index.en-US.md ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      [
        "code",
        "Steps"
      ],
      " is a navigation bar that guides users through the steps of a task."
    ],
    [
      "h2",
      "When To Use"
    ],
    [
      "p",
      "When a given task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier."
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Navigation",
    "cols": 1,
    "title": "Steps",
    "filename": "components/steps/index.en-US.md"
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
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Steps</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Step</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>first</span> <span class=\"token attr-name\">step\"</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Step</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>second</span> <span class=\"token attr-name\">step\"</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Step</span> <span class=\"token attr-name\">title</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>third</span> <span class=\"token attr-name\">step\"</span> <span class=\"token punctuation\">/></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Steps</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<Steps>\n  <Step title=\"first step\" />\n  <Step title=\"second step\" />\n  <Step title=\"third step\" />\n</Steps>"
      ]
    ],
    [
      "h3",
      "Steps"
    ],
    [
      "p",
      "The whole of the step bar."
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
            "className"
          ],
          [
            "td",
            "Additional class to Steps"
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
            "3.11.3"
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
            "Type of steps, can be set to one of the following values: ",
            [
              "code",
              "default"
            ],
            ", ",
            [
              "code",
              "navigation"
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
              "default"
            ]
          ],
          [
            "td",
            "3.22.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "current"
          ],
          [
            "td",
            "To set the current step, counting from 0. You can overwrite this state by using ",
            [
              "code",
              "status"
            ],
            " of ",
            [
              "code",
              "Step"
            ]
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
            "direction"
          ],
          [
            "td",
            "To specify the direction of the step bar, ",
            [
              "code",
              "horizontal"
            ],
            " or ",
            [
              "code",
              "vertical"
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
              "horizontal"
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
            "labelPlacement"
          ],
          [
            "td",
            "Place title and description with ",
            [
              "code",
              "horizontal"
            ],
            " or ",
            [
              "code",
              "vertical"
            ],
            " direction"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "horizontal"
            ]
          ],
          [
            "td",
            "3.7.3"
          ]
        ],
        [
          "tr",
          [
            "td",
            "progressDot"
          ],
          [
            "td",
            "Steps with progress dot style, customize the progress dot by setting it to a function. labelPlacement will be ",
            [
              "code",
              "vertical"
            ]
          ],
          [
            "td",
            "Boolean or (iconDot, {index, status, title, description}) => ReactNode"
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
            "size"
          ],
          [
            "td",
            "To specify the size of the step bar, ",
            [
              "code",
              "default"
            ],
            " and ",
            [
              "code",
              "small"
            ],
            " are currently supported"
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
            "status"
          ],
          [
            "td",
            "To specify the status of current step, can be set to one of the following values: ",
            [
              "code",
              "wait"
            ],
            " ",
            [
              "code",
              "process"
            ],
            " ",
            [
              "code",
              "finish"
            ],
            " ",
            [
              "code",
              "error"
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
              "process"
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
            "initial"
          ],
          [
            "td",
            "Set the initial step, counting from 0"
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
            "td",
            "3.9.0"
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
            "Trigger when Step is changed"
          ],
          [
            "td",
            "(current) => void"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.19.0"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Steps.Step"
    ],
    [
      "p",
      "A single step in the step bar."
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
            "description"
          ],
          [
            "td",
            "Description of the step, optional property"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
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
            "icon"
          ],
          [
            "td",
            "Icon of the step, optional property"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
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
            "status"
          ],
          [
            "td",
            "To specify the status. It will be automatically set by ",
            [
              "code",
              "current"
            ],
            " of ",
            [
              "code",
              "Steps"
            ],
            " if not configured. Optional values are: ",
            [
              "code",
              "wait"
            ],
            " ",
            [
              "code",
              "process"
            ],
            " ",
            [
              "code",
              "finish"
            ],
            " ",
            [
              "code",
              "error"
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
              "wait"
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
            "title"
          ],
          [
            "td",
            "Title of the step"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
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
            "subTitle"
          ],
          [
            "td",
            "Subtitle of the step"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.22.0"
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
            "Disable click"
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
            "3.22.0"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.en-US.md.js.map