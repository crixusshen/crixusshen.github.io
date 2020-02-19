(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/tooltip/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tooltip/index.en-US.md":
/*!***********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tooltip/index.en-US.md ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "A simple text popup tip."
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
          "The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations."
        ]
      ],
      [
        "li",
        [
          "p",
          "To provide an explanation of a ",
          [
            "code",
            "button/text/operation"
          ],
          ". It's often used instead of the html ",
          [
            "code",
            "title"
          ],
          " attribute."
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Display",
    "title": "Tooltip",
    "filename": "components/tooltip/index.en-US.md"
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
          "href": "#Note",
          "title": "Note"
        },
        "Note"
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
            "title"
          ],
          [
            "td",
            "The text shown in the tooltip"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode",
            "|",
            "() => ReactNode"
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
      "h3",
      "Common API"
    ],
    [
      "p",
      "The following APIs are shared by Tooltip, Popconfirm, Popover."
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
            "arrowPointAtCenter"
          ],
          [
            "td",
            "Whether the arrow is pointed at the center of target, supported after ",
            [
              "code",
              "antd@1.11+"
            ]
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
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "autoAdjustOverflow"
          ],
          [
            "td",
            "Whether to adjust popup placement automatically when popup is off screen"
          ],
          [
            "td",
            "boolean"
          ],
          [
            "td",
            [
              "code",
              "true"
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
            "defaultVisible"
          ],
          [
            "td",
            "Whether the floating tooltip card is visible by default"
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
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "getPopupContainer"
          ],
          [
            "td",
            "The DOM container of the tip, the default behavior is to create a ",
            [
              "code",
              "div"
            ],
            " element in ",
            [
              "code",
              "body"
            ]
          ],
          [
            "td",
            "Function(triggerNode)"
          ],
          [
            "td",
            "() => document.body"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "mouseEnterDelay"
          ],
          [
            "td",
            "Delay in seconds, before tooltip is shown on mouse enter"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "0.1"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "mouseLeaveDelay"
          ],
          [
            "td",
            "Delay in seconds, before tooltip is hidden on mouse leave"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "0.1"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "overlayClassName"
          ],
          [
            "td",
            "Class name of the tooltip card"
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
            "overlayStyle"
          ],
          [
            "td",
            "Style of the tooltip card"
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
            "placement"
          ],
          [
            "td",
            "The position of the tooltip relative to the target, which can be one of ",
            [
              "code",
              "top"
            ],
            " ",
            [
              "code",
              "left"
            ],
            " ",
            [
              "code",
              "right"
            ],
            " ",
            [
              "code",
              "bottom"
            ],
            " ",
            [
              "code",
              "topLeft"
            ],
            " ",
            [
              "code",
              "topRight"
            ],
            " ",
            [
              "code",
              "bottomLeft"
            ],
            " ",
            [
              "code",
              "bottomRight"
            ],
            " ",
            [
              "code",
              "leftTop"
            ],
            " ",
            [
              "code",
              "leftBottom"
            ],
            " ",
            [
              "code",
              "rightTop"
            ],
            " ",
            [
              "code",
              "rightBottom"
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
              "top"
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
            "trigger"
          ],
          [
            "td",
            "Tooltip trigger mode"
          ],
          [
            "td",
            [
              "code",
              "hover"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "focus"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "click"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "contextMenu"
            ]
          ],
          [
            "td",
            [
              "code",
              "hover"
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
            "visible"
          ],
          [
            "td",
            "Whether the floating tooltip card is visible or not"
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
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onVisibleChange"
          ],
          [
            "td",
            "Callback executed when visibility of the tooltip card is changed"
          ],
          [
            "td",
            "(visible) => void"
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
            "align"
          ],
          [
            "td",
            "this value will be merged into placement's config, please refer to the settings ",
            [
              "a",
              {
                "title": null,
                "href": "https://github.com/react-component/tooltip"
              },
              "rc-tooltip"
            ]
          ],
          [
            "td",
            "Object"
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
    ],
    [
      "h2",
      "Note"
    ],
    [
      "p",
      "Please ensure that the child node of ",
      [
        "code",
        "Tooltip"
      ],
      " accepts ",
      [
        "code",
        "onMouseEnter"
      ],
      ", ",
      [
        "code",
        "onMouseLeave"
      ],
      ", ",
      [
        "code",
        "onFocus"
      ],
      ", ",
      [
        "code",
        "onClick"
      ],
      " events."
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.en-US.md.js.map