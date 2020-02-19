(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/skeleton/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/skeleton/index.en-US.md":
/*!************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/skeleton/index.en-US.md ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Provide a placeholder while you wait for content to load, or to visualise content that doesn't exist yet."
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
          "When a resource needs long time to load."
        ]
      ],
      [
        "li",
        [
          "p",
          "When the component contains lots of information, such as List or Card."
        ]
      ],
      [
        "li",
        [
          "p",
          "Only works when loading data for the first time."
        ]
      ],
      [
        "li",
        [
          "p",
          "Could be replaced by Spin in any situation, but can provide a better user experience."
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Feedback",
    "title": "Skeleton",
    "cols": 1,
    "filename": "components/skeleton/index.en-US.md"
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
      "Skeleton"
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
            "active"
          ],
          [
            "td",
            "Show animation effect"
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
            "3.9.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "avatar"
          ],
          [
            "td",
            "Show avatar placeholder"
          ],
          [
            "td",
            "boolean ",
            "|",
            " ",
            [
              "a",
              {
                "title": null,
                "href": "#SkeletonAvatarProps"
              },
              "SkeletonAvatarProps"
            ]
          ],
          [
            "td",
            "false"
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
            "loading"
          ],
          [
            "td",
            "Display the skeleton when ",
            [
              "code",
              "true"
            ]
          ],
          [
            "td",
            "boolean"
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
            "paragraph"
          ],
          [
            "td",
            "Show paragraph placeholder"
          ],
          [
            "td",
            "boolean ",
            "|",
            " ",
            [
              "a",
              {
                "title": null,
                "href": "#SkeletonParagraphProps"
              },
              "SkeletonParagraphProps"
            ]
          ],
          [
            "td",
            "true"
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
            "title"
          ],
          [
            "td",
            "Show title placeholder"
          ],
          [
            "td",
            "boolean ",
            "|",
            " ",
            [
              "a",
              {
                "title": null,
                "href": "#SkeletonTitleProps"
              },
              "SkeletonTitleProps"
            ]
          ],
          [
            "td",
            "true"
          ],
          [
            "td",
            "3.9.0"
          ]
        ]
      ]
    ],
    [
      "h3",
      "SkeletonAvatarProps"
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
            "size"
          ],
          [
            "td",
            "Set the size of avatar"
          ],
          [
            "td",
            "number ",
            "|",
            " Enum{ 'large', 'small', 'default' }"
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
            "shape"
          ],
          [
            "td",
            "Set the shape of avatar"
          ],
          [
            "td",
            "Enum{ 'circle', 'square' }"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.9.0"
          ]
        ]
      ]
    ],
    [
      "h3",
      "SkeletonTitleProps"
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
            "width"
          ],
          [
            "td",
            "Set the width of title"
          ],
          [
            "td",
            "number ",
            "|",
            " string"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.9.0"
          ]
        ]
      ]
    ],
    [
      "h3",
      "SkeletonParagraphProps"
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
            "rows"
          ],
          [
            "td",
            "Set the row count of paragraph"
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
            "3.9.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "width"
          ],
          [
            "td",
            "Set the width of paragraph. When width is an Array, it can set the width of each row. Otherwise only set the last row width"
          ],
          [
            "td",
            "number ",
            "|",
            " string ",
            "|",
            " Array<number ",
            "|",
            " string>"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.9.0"
          ]
        ]
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.en-US.md.js.map