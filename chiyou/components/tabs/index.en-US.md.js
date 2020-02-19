(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/tabs/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tabs/index.en-US.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/tabs/index.en-US.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "Tabs make it easy to switch between different views."
    ],
    [
      "h3",
      "When To Use"
    ],
    [
      "p",
      "Ant Design has 3 types of Tabs for different situations."
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "Card Tabs: for managing too many closeable views."
        ]
      ],
      [
        "li",
        [
          "p",
          "Normal Tabs: for functional aspects of a page."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "/components/radio/#components-radio-demo-radiobutton"
            },
            "RadioButton"
          ],
          ": for secondary tabs."
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Data Display",
    "title": "Tabs",
    "cols": 1,
    "filename": "components/tabs/index.en-US.md"
  },
  "toc": [
    "ul",
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
      "Tabs"
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
            "activeKey"
          ],
          [
            "td",
            "Current TabPane's key"
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
            "animated"
          ],
          [
            "td",
            "Whether to change tabs with animation. Only works while ",
            [
              "code",
              "tabPosition=\"top\"\\|\"bottom\""
            ]
          ],
          [
            "td",
            "boolean ",
            "|",
            " {inkBar:boolean, tabPane:boolean}"
          ],
          [
            "td",
            [
              "code",
              "true"
            ],
            ", ",
            [
              "code",
              "false"
            ],
            " when ",
            [
              "code",
              "type=\"card\""
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
            "renderTabBar"
          ],
          [
            "td",
            "replace the TabBar"
          ],
          [
            "td",
            "(props: DefaultTabBarProps, DefaultTabBar: React.ComponentClass) => React.ReactElement"
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
            "defaultActiveKey"
          ],
          [
            "td",
            "Initial active TabPane's key, if ",
            [
              "code",
              "activeKey"
            ],
            " is not set."
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
            "hideAdd"
          ],
          [
            "td",
            "Hide plus icon or not. Only works while ",
            [
              "code",
              "type=\"editable-card\""
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
            "size"
          ],
          [
            "td",
            "preset tab bar size"
          ],
          [
            "td",
            [
              "code",
              "large"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "default"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "small"
            ]
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
            "tabBarExtraContent"
          ],
          [
            "td",
            "Extra content in tab bar"
          ],
          [
            "td",
            "React.ReactNode"
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
            "tabBarGutter"
          ],
          [
            "td",
            "The gap between tabs"
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
            "3.2.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "tabBarStyle"
          ],
          [
            "td",
            "Tab bar style object"
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
            "tabPosition"
          ],
          [
            "td",
            "Position of tabs"
          ],
          [
            "td",
            [
              "code",
              "top"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "right"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "bottom"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "left"
            ]
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
            "type"
          ],
          [
            "td",
            "Basic style of tabs"
          ],
          [
            "td",
            [
              "code",
              "line"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "card"
            ],
            " ",
            "|",
            " ",
            [
              "code",
              "editable-card"
            ]
          ],
          [
            "td",
            [
              "code",
              "line"
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
            "onChange"
          ],
          [
            "td",
            "Callback executed when active tab is changed"
          ],
          [
            "td",
            "Function(activeKey) {}"
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
            "onEdit"
          ],
          [
            "td",
            "Callback executed when tab is added or removed. Only works while ",
            [
              "code",
              "type=\"editable-card\""
            ]
          ],
          [
            "td",
            "(targetKey, action): void"
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
            "onNextClick"
          ],
          [
            "td",
            "Callback executed when next button is clicked"
          ],
          [
            "td",
            "Function"
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
            "onPrevClick"
          ],
          [
            "td",
            "Callback executed when prev button is clicked"
          ],
          [
            "td",
            "Function"
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
            "onTabClick"
          ],
          [
            "td",
            "Callback executed when tab is clicked"
          ],
          [
            "td",
            "Function(key: string, event: MouseEvent)"
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
      "p",
      "More option at ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/react-component/tabs#tabs"
        },
        "rc-tabs option"
      ]
    ],
    [
      "h3",
      "Tabs.TabPane"
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
            "forceRender"
          ],
          [
            "td",
            "Forced render of content in tabs, not lazy render after clicking on tabs"
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
            "key"
          ],
          [
            "td",
            "TabPane's key"
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
            "tab"
          ],
          [
            "td",
            "Show text in TabPane's head"
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
        ]
      ]
    ],
    [
      "p",
      "More option at ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/react-component/tabs#tabpane"
        },
        "rc-tabs option"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.en-US.md.js.map