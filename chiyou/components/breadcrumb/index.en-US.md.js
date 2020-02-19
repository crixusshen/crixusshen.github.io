(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/breadcrumb/index.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/breadcrumb/index.en-US.md":
/*!**************************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/breadcrumb/index.en-US.md ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy."
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
          "When the system has more than two layers in a hierarchy."
        ]
      ],
      [
        "li",
        [
          "p",
          "When you need to inform the user of where they are."
        ]
      ],
      [
        "li",
        [
          "p",
          "When the user may need to navigate back to a higher level."
        ]
      ],
      [
        "li",
        [
          "p",
          "When the application has multi-layer architecture."
        ]
      ]
    ]
  ],
  "meta": {
    "category": "Components",
    "type": "Navigation",
    "title": "Breadcrumb",
    "filename": "components/breadcrumb/index.en-US.md"
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
            "Optional"
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
            "itemRender"
          ],
          [
            "td",
            "Custom item renderer"
          ],
          [
            "td",
            "(route, params, routes, paths) => ReactNode"
          ],
          [
            "td"
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
            "params"
          ],
          [
            "td",
            "Routing parameters"
          ],
          [
            "td",
            "object"
          ],
          [
            "td"
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
            "routes"
          ],
          [
            "td",
            "The routing stack information of router"
          ],
          [
            "td",
            [
              "a",
              {
                "title": null,
                "href": "#routes"
              },
              "routes",
              "[",
              "]"
            ]
          ],
          [
            "td"
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
            "separator"
          ],
          [
            "td",
            "Custom separator"
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
            "td",
            [
              "code",
              "/"
            ]
          ],
          [
            "td"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Use with browserHistory"
    ],
    [
      "p",
      "The link of Breadcrumb item targets ",
      [
        "code",
        "#"
      ],
      " by default, you can use ",
      [
        "code",
        "itemRender"
      ],
      " to make a ",
      [
        "code",
        "browserHistory"
      ],
      " Link."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Link <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'react-router'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> routes <span class=\"token operator\">=</span> <span class=\"token punctuation\">[</span>\n  <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'index'</span><span class=\"token punctuation\">,</span>\n    breadcrumbName<span class=\"token punctuation\">:</span> <span class=\"token string\">'home'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'first'</span><span class=\"token punctuation\">,</span>\n    breadcrumbName<span class=\"token punctuation\">:</span> <span class=\"token string\">'first'</span><span class=\"token punctuation\">,</span>\n    children<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">[</span>\n      <span class=\"token punctuation\">{</span>\n        path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/general'</span><span class=\"token punctuation\">,</span>\n        breadcrumbName<span class=\"token punctuation\">:</span> <span class=\"token string\">'General'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/layout'</span><span class=\"token punctuation\">,</span>\n        breadcrumbName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Layout'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">{</span>\n        path<span class=\"token punctuation\">:</span> <span class=\"token string\">'/navigation'</span><span class=\"token punctuation\">,</span>\n        breadcrumbName<span class=\"token punctuation\">:</span> <span class=\"token string\">'Navigation'</span><span class=\"token punctuation\">,</span>\n      <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n    <span class=\"token punctuation\">]</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">{</span>\n    path<span class=\"token punctuation\">:</span> <span class=\"token string\">'second'</span><span class=\"token punctuation\">,</span>\n    breadcrumbName<span class=\"token punctuation\">:</span> <span class=\"token string\">'second'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token punctuation\">}</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">]</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">function</span> <span class=\"token function\">itemRender</span><span class=\"token punctuation\">(</span>route<span class=\"token punctuation\">,</span> params<span class=\"token punctuation\">,</span> routes<span class=\"token punctuation\">,</span> paths<span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> last <span class=\"token operator\">=</span> routes<span class=\"token punctuation\">.</span><span class=\"token function\">indexOf</span><span class=\"token punctuation\">(</span>route<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> routes<span class=\"token punctuation\">.</span>length <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> last <span class=\"token operator\">?</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>span</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>route<span class=\"token punctuation\">.</span>breadcrumbName<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>span</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span> <span class=\"token punctuation\">:</span> <span class=\"token punctuation\">(</span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Link</span> <span class=\"token attr-name\">to</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>paths<span class=\"token punctuation\">.</span><span class=\"token function\">join</span><span class=\"token punctuation\">(</span><span class=\"token string\">'/'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">{</span>route<span class=\"token punctuation\">.</span>breadcrumbName<span class=\"token punctuation\">}</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Link</span><span class=\"token punctuation\">></span></span>\n  <span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n\n<span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Breadcrumb</span> <span class=\"token attr-name\">itemRender</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>itemRender<span class=\"token punctuation\">}</span></span> <span class=\"token attr-name\">routes</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>routes<span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import { Link } from 'react-router';\n\nconst routes = [\n  {\n    path: 'index',\n    breadcrumbName: 'home',\n  },\n  {\n    path: 'first',\n    breadcrumbName: 'first',\n    children: [\n      {\n        path: '/general',\n        breadcrumbName: 'General',\n      },\n      {\n        path: '/layout',\n        breadcrumbName: 'Layout',\n      },\n      {\n        path: '/navigation',\n        breadcrumbName: 'Navigation',\n      },\n    ],\n  },\n  {\n    path: 'second',\n    breadcrumbName: 'second',\n  },\n];\nfunction itemRender(route, params, routes, paths) {\n  const last = routes.indexOf(route) === routes.length - 1;\n  return last ? (\n    <span>{route.breadcrumbName}</span>\n  ) : (\n    <Link to={paths.join('/')}>{route.breadcrumbName}</Link>\n  );\n}\n\nreturn <Breadcrumb itemRender={itemRender} routes={routes} />;"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.en-US.md.js.map