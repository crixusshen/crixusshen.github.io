(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/slider/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/slider/index.en-US.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/slider/index.en-US.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "A Slider component for displaying current value and intervals in range."
    ],
    [
      "h2",
      "When To Use"
    ],
    [
      "p",
      "To input a value in a range."
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Entry",
    "title": "Slider",
    "filename": "components/slider/index.en-US.md"
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
            "The default value of slider. When ",
            [
              "code",
              "range"
            ],
            " is ",
            [
              "code",
              "false"
            ],
            ", use ",
            [
              "code",
              "number"
            ],
            ", otherwise, use ",
            [
              "code",
              "[number, number]"
            ]
          ],
          [
            "td",
            "number",
            "|",
            "number",
            "[",
            "]"
          ],
          [
            "td",
            "0 or ",
            "[",
            "0, 0]"
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
            "If true, the slider will not be interactable."
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
            "dots"
          ],
          [
            "td",
            "Whether the thumb can drag over tick only."
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
            "included"
          ],
          [
            "td",
            "Make effect when ",
            [
              "code",
              "marks"
            ],
            " not null, ",
            [
              "code",
              "true"
            ],
            " means containment and ",
            [
              "code",
              "false"
            ],
            " means coordinative"
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
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "marks"
          ],
          [
            "td",
            "Tick mark of Slider, type of key must be ",
            [
              "code",
              "number"
            ],
            ", and must in closed interval ",
            "[",
            "min, max], each mark can declare its own style."
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "{ number: string",
            "|",
            "ReactNode } or { number: { style: object, label: string",
            "|",
            "ReactNode } }"
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
            "The maximum value the slider can slide to"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "100"
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
            "The minimum value the slider can slide to."
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
            "range"
          ],
          [
            "td",
            "dual thumb mode"
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
            "reverse"
          ],
          [
            "td",
            "reverse the component"
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
            "3.24.0"
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
            "The granularity the slider can step through values. Must greater than 0, and be divided by (max - min) . When ",
            [
              "code",
              "marks"
            ],
            " no null, ",
            [
              "code",
              "step"
            ],
            " can be ",
            [
              "code",
              "null"
            ],
            "."
          ],
          [
            "td",
            "number",
            "|",
            "null"
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
            "tipFormatter"
          ],
          [
            "td",
            "Slider will pass its value to ",
            [
              "code",
              "tipFormatter"
            ],
            ", and display its value in Tooltip, and hide Tooltip when return value is null."
          ],
          [
            "td",
            "Function",
            "|",
            "null"
          ],
          [
            "td",
            "IDENTITY"
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
            "The value of slider. When ",
            [
              "code",
              "range"
            ],
            " is ",
            [
              "code",
              "false"
            ],
            ", use ",
            [
              "code",
              "number"
            ],
            ", otherwise, use ",
            [
              "code",
              "[number, number]"
            ]
          ],
          [
            "td",
            "number",
            "|",
            "number",
            "[",
            "]"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "vertical"
          ],
          [
            "td",
            "If true, the slider will be vertical."
          ],
          [
            "td",
            "Boolean"
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
            "onAfterChange"
          ],
          [
            "td",
            "Fire when ",
            [
              "code",
              "onmouseup"
            ],
            " is fired."
          ],
          [
            "td",
            "Function(value)"
          ],
          [
            "td",
            "NOOP"
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
            "Callback function that is fired when the user changes the slider's value."
          ],
          [
            "td",
            "Function(value)"
          ],
          [
            "td",
            "NOOP"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tooltipPlacement"
          ],
          [
            "td",
            "Set Tooltip display position. Ref ",
            [
              "a",
              {
                "title": null,
                "href": "/components/tooltip/"
              },
              [
                "code",
                "Tooltip"
              ]
            ],
            "."
          ],
          [
            "td",
            "string"
          ],
          [
            "td"
          ],
          [
            "td",
            "3.19.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tooltipVisible"
          ],
          [
            "td",
            "If true, Tooltip will show always, or it will not show anyway, even if dragging or hovering."
          ],
          [
            "td",
            "Boolean"
          ],
          [
            "td"
          ],
          [
            "td",
            "3.11.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "getTooltipPopupContainer"
          ],
          [
            "td",
            "The DOM container of the Tooltip, the default behavior is to create a div element in body."
          ],
          [
            "td",
            "Function"
          ],
          [
            "td",
            "() => document.body"
          ],
          [
            "td",
            "3.19.0"
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