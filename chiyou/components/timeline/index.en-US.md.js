(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/timeline/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/index.en-US.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/timeline/index.en-US.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Vertical display timeline."
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
          "When a series of information needs to be ordered by time (ascending or descending)."
        ]
      ],
      [
        "li",
        [
          "p",
          "When you need a timeline to make a visual connection."
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Display",
    "title": "Timeline",
    "filename": "components/timeline/index.en-US.md"
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
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>step1 <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>step2 <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>step3 <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>step4 <span class=\"token number\">2015</span><span class=\"token operator\">-</span><span class=\"token number\">09</span><span class=\"token operator\">-</span><span class=\"token number\">01</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline.Item</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Timeline</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<Timeline>\n  <Timeline.Item>step1 2015-09-01</Timeline.Item>\n  <Timeline.Item>step2 2015-09-01</Timeline.Item>\n  <Timeline.Item>step3 2015-09-01</Timeline.Item>\n  <Timeline.Item>step4 2015-09-01</Timeline.Item>\n</Timeline>"
      ]
    ],
    [
      "h3",
      "Timeline"
    ],
    [
      "p",
      "Timeline"
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
            "pending"
          ],
          [
            "td",
            "Set the last ghost node's existence or its content"
          ],
          [
            "td",
            "boolean",
            "|",
            "string",
            "|",
            "ReactNode"
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
            "pendingDot"
          ],
          [
            "td",
            "Set the dot of the last ghost node when pending is true"
          ],
          [
            "td",
            "string",
            "|",
            "ReactNode"
          ],
          [
            "td",
            [
              "code",
              "<Icon type=\"loading\" />"
            ]
          ],
          [
            "td",
            "3.3.0"
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
            "reverse nodes or not"
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
            "3.5.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "mode"
          ],
          [
            "td",
            "By sending ",
            [
              "code",
              "alternate"
            ],
            " the timeline will distribute the nodes to the left and right."
          ],
          [
            "td",
            [
              "code",
              "left"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "alternate"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "right"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.8.0"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Timeline.Item"
    ],
    [
      "p",
      "Node of timeline"
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
            "color"
          ],
          [
            "td",
            "Set the circle's color to ",
            [
              "code",
              "blue"
            ],
            ", ",
            [
              "code",
              "red"
            ],
            ", ",
            [
              "code",
              "green"
            ],
            ", ",
            [
              "code",
              "gray"
            ],
            " or other custom colors"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            [
              "code",
              "blue"
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
            "dot"
          ],
          [
            "td",
            "Customize timeline dot"
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
            "position"
          ],
          [
            "td",
            "Customize node position"
          ],
          [
            "td",
            [
              "code",
              "left"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "right"
            ]
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.17.0"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.en-US.md.js.map