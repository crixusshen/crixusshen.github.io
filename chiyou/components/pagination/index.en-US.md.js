(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/pagination/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/pagination/index.en-US.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/pagination/index.en-US.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "A long list can be divided into several pages using ",
      [
        "code",
        "Pagination"
      ],
      ", and only one page will be loaded at a time."
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
          "When it will take a long time to load/render all items."
        ]
      ],
      [
        "li",
        [
          "p",
          "If you want to browse the data by navigating through pages."
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Navigation",
    "title": "Pagination",
    "cols": 1,
    "filename": "components/pagination/index.en-US.md"
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
        "lang": "html",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Pagination</span> <span class=\"token attr-name\">onChange</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>{onChange}<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">total</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>{50}<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<Pagination onChange=\"{onChange}\" total=\"{50}\" />"
      ]
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
            "current"
          ],
          [
            "td",
            "Current page number"
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
            "defaultCurrent"
          ],
          [
            "td",
            "Default initial page number"
          ],
          [
            "td",
            "number"
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
            "defaultPageSize"
          ],
          [
            "td",
            "Default number of data items per page"
          ],
          [
            "td",
            "number"
          ],
          [
            "td",
            "10"
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
            "Disable pagination"
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
            "3.18.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "hideOnSinglePage"
          ],
          [
            "td",
            "Whether to hide pager on single page"
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
            "3.1.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "itemRender"
          ],
          [
            "td",
            "To customize item's innerHTML"
          ],
          [
            "td",
            "(page, type: 'page' ",
            "|",
            " 'prev' ",
            "|",
            " 'next', originalElement) => React.ReactNode"
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
            "pageSize"
          ],
          [
            "td",
            "Number of data items per page"
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
            "pageSizeOptions"
          ],
          [
            "td",
            "Specify the sizeChanger options"
          ],
          [
            "td",
            "string",
            "[",
            "]"
          ],
          [
            "td",
            "[",
            "'10', '20', '30', '40']"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showLessItems"
          ],
          [
            "td",
            "Show less page items"
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
            "3.16.3"
          ]
        ],
        [
          "tr",
          [
            "td",
            "showQuickJumper"
          ],
          [
            "td",
            "Determine whether you can jump to pages directly"
          ],
          [
            "td",
            "boolean ",
            "|",
            " ",
            [
              "code",
              "{ goButton: ReactNode }"
            ]
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
            "showSizeChanger"
          ],
          [
            "td",
            "Determine whether ",
            [
              "code",
              "pageSize"
            ],
            " can be changed"
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
            "showTitle"
          ],
          [
            "td",
            "Show page item's title"
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
            "showTotal"
          ],
          [
            "td",
            "To display the total number and range"
          ],
          [
            "td",
            "Function(total, range)"
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
            "simple"
          ],
          [
            "td",
            "Whether to use simple mode"
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
            "Specify the size of ",
            [
              "code",
              "Pagination"
            ],
            ", can be set to ",
            [
              "code",
              "small"
            ]
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "\"\""
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "total"
          ],
          [
            "td",
            "Total number of data items"
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
            "onChange"
          ],
          [
            "td",
            "Called when the page number is changed, and it takes the resulting page number and pageSize as its arguments"
          ],
          [
            "td",
            "Function(page, pageSize)"
          ],
          [
            "td",
            "noop"
          ],
          [
            "td"
          ]
        ],
        [
          "tr",
          [
            "td",
            "onShowSizeChange"
          ],
          [
            "td",
            "Called when ",
            [
              "code",
              "pageSize"
            ],
            " is changed"
          ],
          [
            "td",
            "Function(current, size)"
          ],
          [
            "td",
            "noop"
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