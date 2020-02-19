(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/config-provider/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/config-provider/index.en-US.md":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/config-provider/index.en-US.md ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      [
        "code",
        "ConfigProvider"
      ],
      " provides a uniform configuration support for components."
    ],
    [
      "h2",
      "Usage"
    ],
    [
      "p",
      "This component provides a configuration to all React components underneath itself via the ",
      [
        "a",
        {
          "title": null,
          "href": "https://facebook.github.io/react/docs/context.html"
        },
        "context API"
      ],
      ". In the render tree all components will have access to the provided config."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> ConfigProvider <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token comment\" spellcheck=\"true\">// ...</span>\n\n<span class=\"token keyword\">return</span> <span class=\"token punctuation\">(</span>\n  <span class=\"token operator\">&lt;</span>ConfigProvider <span class=\"token punctuation\">{</span><span class=\"token operator\">...</span>yourConfig<span class=\"token punctuation\">}</span><span class=\"token operator\">></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>App</span> <span class=\"token punctuation\">/></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ConfigProvider</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { ConfigProvider } from 'antd';\n\n// ...\n\nreturn (\n  <ConfigProvider {...yourConfig}>\n    <App />\n  </ConfigProvider>\n);"
      ]
    ],
    [
      "h3",
      "Content Security Policy"
    ],
    [
      "p",
      "Some components use dynamic style to support wave effect. You can config ",
      [
        "code",
        "csp"
      ],
      " prop if Content Security Policy (CSP) is enabled:"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>ConfigProvider</span> <span class=\"token attr-name\">csp</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> nonce<span class=\"token punctuation\">:</span> <span class=\"token string\">'YourNonceCode'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Button</span><span class=\"token punctuation\">></span></span>My Button<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Button</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>ConfigProvider</span><span class=\"token punctuation\">></span></span>"
      },
      [
        "code",
        "<ConfigProvider csp={{ nonce: 'YourNonceCode' }}>\n  <Button>My Button</Button>\n</ConfigProvider>"
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Other",
    "cols": 1,
    "title": "ConfigProvider",
    "filename": "components/config-provider/index.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Usage",
          "title": "Usage"
        },
        "Usage"
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
          "href": "#FAQ",
          "title": "FAQ"
        },
        "FAQ"
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
            "autoInsertSpaceInButton"
          ],
          [
            "td",
            "Set ",
            [
              "code",
              "false"
            ],
            " to remove space between 2 chinese characters on Button"
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
            "td",
            "3.13.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "csp"
          ],
          [
            "td",
            "Set ",
            [
              "a",
              {
                "title": null,
                "href": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP"
              },
              "Content Security Policy"
            ],
            " config"
          ],
          [
            "td",
            "{ nonce: string }"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.13.1"
          ]
        ],
        [
          "tr",
          [
            "td",
            "renderEmpty"
          ],
          [
            "td",
            "set empty content of components. Ref ",
            [
              "a",
              {
                "title": null,
                "href": "/components/empty/"
              },
              "Empty"
            ]
          ],
          [
            "td",
            "Function(componentName: string): ReactNode"
          ],
          [
            "td",
            "-"
          ],
          [
            "td",
            "3.12.2"
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
            "to set the container of the popup element. The default is to create a ",
            [
              "code",
              "div"
            ],
            " element in ",
            [
              "code",
              "body"
            ],
            "."
          ],
          [
            "td",
            "Function(triggerNode)"
          ],
          [
            "td",
            [
              "code",
              "() => document.body"
            ]
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
            "locale"
          ],
          [
            "td",
            "language package setting, you can find the packages in ",
            [
              "a",
              {
                "title": null,
                "href": "http://unpkg.com/antd/es/locale/"
              },
              "antd/es/locale"
            ]
          ],
          [
            "td",
            "object"
          ],
          [
            "td",
            "3.21.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "prefixCls"
          ],
          [
            "td",
            "set prefix class"
          ],
          [
            "td",
            "string"
          ],
          [
            "td",
            "ant"
          ],
          [
            "td",
            "3.12.0"
          ]
        ],
        [
          "tr",
          [
            "td",
            "pageHeader"
          ],
          [
            "td",
            "Unify the ghost of pageHeader ,Ref ",
            [
              "span",
              "pageHeader"
            ],
            "(<(/components/page-header)>"
          ],
          [
            "td",
            "{ ghost:boolean }"
          ],
          [
            "td",
            "'true'"
          ],
          [
            "td",
            "3.24.0"
          ]
        ]
      ]
    ],
    [
      "h2",
      "FAQ"
    ],
    [
      "h4",
      "Does the locale problem still exist in DatePicker even if ConfigProvider ",
      [
        "code",
        "locale"
      ],
      " is used?"
    ],
    [
      "p",
      "Please make sure you set moment locale by ",
      [
        "code",
        "moment.locale('zh-cn')"
      ],
      " or that you don't have two different versions of moment."
    ],
    [
      "h4",
      "Modal throw error when setting ",
      [
        "code",
        "getPopupContainer"
      ],
      "?"
    ],
    [
      "p",
      "Related issue: ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/issues/19974"
        },
        "https://github.com/ant-design/ant-design/issues/19974"
      ]
    ],
    [
      "p",
      "When you config ",
      [
        "code",
        "getPopupContainer"
      ],
      " to parentNode globally, Modal will throw error of ",
      [
        "code",
        "triggerNode is undefined"
      ],
      " because it did not have a triggerNode. You can try the ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/afc163/feedback-antd/commit/3e4d1ad1bc1a38460dc3bf3c56517f737fe7d44a"
        },
        "fix"
      ],
      " below."
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": " &lt;ConfigProvider\n<span class=\"token deleted\">-  getPopupContainer={triggerNode => triggerNode.parentNode}</span>\n<span class=\"token inserted\">+  getPopupContainer={node => {</span>\n<span class=\"token inserted\">+    if (node) {</span>\n<span class=\"token inserted\">+      return node.parentNode;</span>\n<span class=\"token inserted\">+    }</span>\n<span class=\"token inserted\">+    return document.body;</span>\n<span class=\"token inserted\">+  }}</span>\n >\n   &lt;App />\n &lt;/ConfigProvider>"
      },
      [
        "code",
        " <ConfigProvider\n-  getPopupContainer={triggerNode => triggerNode.parentNode}\n+  getPopupContainer={node => {\n+    if (node) {\n+      return node.parentNode;\n+    }\n+    return document.body;\n+  }}\n >\n   <App />\n </ConfigProvider>"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.en-US.md.js.map