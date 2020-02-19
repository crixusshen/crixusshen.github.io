(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/anchor/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/anchor/index.en-US.md":
/*!**********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/anchor/index.en-US.md ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Hyperlinks to scroll on one page."
    ],
    [
      "h2",
      "When To Use"
    ],
    [
      "p",
      "For displaying anchor hyperlinks on page and jumping between them."
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Other",
    "cols": 2,
    "title": "Anchor",
    "filename": "components/anchor/index.en-US.md"
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
      "Anchor Props"
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
            "affix"
          ],
          [
            "td",
            "Fixed mode of Anchor"
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
            "bounds"
          ],
          [
            "td",
            "Bounding distance of anchor area"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "5(px)"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "getContainer"
          ],
          [
            "td",
            "Scrolling container"
          ],
          [
            "td",
            "() => HTMLElement"
          ],
          [
            "td",
            "() => window"
          ],
          [
            "td",
            "3.4.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "offsetBottom"
          ],
          [
            "td",
            "Pixels to offset from bottom when calculating position of scroll"
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
            "offsetTop"
          ],
          [
            "td",
            "Pixels to offset from top when calculating position of scroll"
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
            "showInkInFixed"
          ],
          [
            "td",
            "Whether show ink-balls in Fixed mode"
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
            "onClick"
          ],
          [
            "td",
            "set the handler to handle ",
            [
              "code",
              "click"
            ],
            " event"
          ],
          [
            "td",
            "Function(e: Event, link: Object)"
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
            "getCurrentAnchor"
          ],
          [
            "td",
            "Customize the anchor highlight"
          ],
          [
            "td",
            "() => string"
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
            "targetOffset"
          ],
          [
            "td",
            "Anchor scroll offset, default as ",
            [
              "code",
              "offsetTop"
            ],
            ", ",
            [
              "a",
              {
                "title": null,
                "href": "#components-anchor-demo-targetOffset"
              },
              "example"
            ]
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            [
              "code",
              "offsetTop"
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
            "onChange"
          ],
          [
            "td",
            "Listening for anchor link change"
          ],
          [
            "td",
            "(currentActiveLink: string) => void"
          ],
          [
            "td"
          ],
          [
            "td",
            "3.24.0"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Link Props"
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
            "href"
          ],
          [
            "td",
            "target of hyperlink"
          ],
          [
            "td",
            "string"
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
            "title"
          ],
          [
            "td",
            "content of hyperlink"
          ],
          [
            "td",
            "string",
            "|",
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
            "target"
          ],
          [
            "td",
            "Specifies where to display the linked URL"
          ],
          [
            "td",
            "string"
          ],
          [
            "td"
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