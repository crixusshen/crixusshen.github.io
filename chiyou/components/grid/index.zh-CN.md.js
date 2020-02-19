(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/grid/index.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/grid/index.zh-CN.md":
/*!********************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./components/grid/index.zh-CN.md ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "section",
    [
      "p",
      "24 栅格系统。"
    ],
    [
      "h2",
      "设计理念"
    ],
    [
      "div",
      {
        "class": "grid-demo"
      },
      [
        "div",
        {
          "class": "ant-row demo-row"
        },
        [
          "div",
          {
            "class": "ant-col-24 demo-col demo-col-1"
          },
          "\n    100%\n  "
        ]
      ],
      [
        "div",
        {
          "class": "ant-row demo-row"
        },
        [
          "div",
          {
            "class": "ant-col-6 demo-col demo-col-2"
          },
          "\n    25%\n  "
        ],
        [
          "div",
          {
            "class": "ant-col-6 demo-col demo-col-3"
          },
          "\n    25%\n  "
        ],
        [
          "div",
          {
            "class": "ant-col-6 demo-col demo-col-2"
          },
          "\n    25%\n  "
        ],
        [
          "div",
          {
            "class": "ant-col-6 demo-col demo-col-3"
          },
          "\n    25%\n  "
        ]
      ],
      [
        "div",
        {
          "class": "ant-row demo-row"
        },
        [
          "div",
          {
            "class": "ant-col-8 demo-col demo-col-4"
          },
          "\n    33.33%\n  "
        ],
        [
          "div",
          {
            "class": "ant-col-8 demo-col demo-col-5"
          },
          "\n    33.33%\n  "
        ],
        [
          "div",
          {
            "class": "ant-col-8 demo-col demo-col-4"
          },
          "\n    33.33%\n  "
        ]
      ],
      [
        "div",
        {
          "class": "ant-row demo-row"
        },
        [
          "div",
          {
            "class": "ant-col-12 demo-col demo-col-1"
          },
          "\n    50%\n  "
        ],
        [
          "div",
          {
            "class": "ant-col-12 demo-col demo-col-3"
          },
          "\n    50%\n  "
        ]
      ],
      [
        "div",
        {
          "class": "ant-row demo-row"
        },
        [
          "div",
          {
            "class": "ant-col-16 demo-col demo-col-4"
          },
          "\n    66.66%\n  "
        ],
        [
          "div",
          {
            "class": "ant-col-8 demo-col demo-col-5"
          },
          "\n    33.33%\n  "
        ]
      ]
    ],
    [
      "p",
      "在多数业务情况下，Ant Design 需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。"
    ],
    [
      "p",
      "划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。"
    ],
    [
      "h2",
      "概述"
    ],
    [
      "p",
      "布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "通过 ",
          [
            "code",
            "row"
          ],
          " 在水平方向建立一组 ",
          [
            "code",
            "column"
          ],
          "（简写 col）"
        ]
      ],
      [
        "li",
        [
          "p",
          "你的内容应当放置于 ",
          [
            "code",
            "col"
          ],
          " 内，并且，只有 ",
          [
            "code",
            "col"
          ],
          " 可以作为 ",
          [
            "code",
            "row"
          ],
          " 的直接元素"
        ]
      ],
      [
        "li",
        [
          "p",
          "栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 ",
          [
            "code",
            "<Col span={8} />"
          ],
          " 来创建"
        ]
      ],
      [
        "li",
        [
          "p",
          "如果一个 ",
          [
            "code",
            "row"
          ],
          " 中的 ",
          [
            "code",
            "col"
          ],
          " 总和超过 24，那么多余的 ",
          [
            "code",
            "col"
          ],
          " 会作为一个整体另起一行排列"
        ]
      ]
    ],
    [
      "h2",
      "Flex 布局"
    ],
    [
      "p",
      "我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。"
    ],
    [
      "p",
      "Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。"
    ]
  ],
  "meta": {
    "category": "Components",
    "subtitle": "栅格",
    "type": "布局",
    "cols": 1,
    "title": "Grid",
    "filename": "components/grid/index.zh-CN.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#设计理念",
          "title": "设计理念"
        },
        "设计理念"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#概述",
          "title": "概述"
        },
        "概述"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Flex-布局",
          "title": "Flex 布局"
        },
        "Flex 布局"
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
      "p",
      "Ant Design 的布局组件若不能满足你的需求，你也可以直接使用社区的优秀布局组件："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "a",
            {
              "title": null,
              "href": "http://roylee0704.github.io/react-flexbox-grid/"
            },
            "react-flexbox-grid"
          ]
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
              "href": "https://github.com/whoisandy/react-blocks/"
            },
            "react-blocks"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Row"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "成员"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ],
          [
            "th",
            "版本"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "align"
          ],
          [
            "td",
            "flex 布局下的垂直对齐方式：",
            [
              "code",
              "top"
            ],
            " ",
            [
              "code",
              "middle"
            ],
            " ",
            [
              "code",
              "bottom"
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
            "gutter"
          ],
          [
            "td",
            "栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 ",
            [
              "code",
              "{ xs: 8, sm: 16, md: 24}"
            ],
            "。或者使用数组形式同时设置 ",
            [
              "code",
              "[水平间距, 垂直间距]"
            ],
            "（",
            [
              "code",
              "3.24.0 后支持"
            ],
            "）。"
          ],
          [
            "td",
            "number/object/array"
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
            "justify"
          ],
          [
            "td",
            "flex 布局下的水平排列方式：",
            [
              "code",
              "start"
            ],
            " ",
            [
              "code",
              "end"
            ],
            " ",
            [
              "code",
              "center"
            ],
            " ",
            [
              "code",
              "space-around"
            ],
            " ",
            [
              "code",
              "space-between"
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
              "start"
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
            "布局模式，可选 ",
            [
              "code",
              "flex"
            ],
            "，",
            [
              "a",
              {
                "title": null,
                "href": "http://caniuse.com/#search=flex"
              },
              "现代浏览器"
            ],
            " 下有效"
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
    ],
    [
      "h3",
      "Col"
    ],
    [
      "table",
      [
        "thead",
        [
          "tr",
          [
            "th",
            "成员"
          ],
          [
            "th",
            "说明"
          ],
          [
            "th",
            "类型"
          ],
          [
            "th",
            "默认值"
          ],
          [
            "th",
            "版本"
          ]
        ]
      ],
      [
        "tbody",
        [
          "tr",
          [
            "td",
            "offset"
          ],
          [
            "td",
            "栅格左侧的间隔格数，间隔内不可以有栅格"
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
            "order"
          ],
          [
            "td",
            "栅格顺序，",
            [
              "code",
              "flex"
            ],
            " 布局模式下有效"
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
            "pull"
          ],
          [
            "td",
            "栅格向左移动格数"
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
            "push"
          ],
          [
            "td",
            "栅格向右移动格数"
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
            "span"
          ],
          [
            "td",
            "栅格占位格数，为 0 时相当于 ",
            [
              "code",
              "display: none"
            ]
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
            "xs"
          ],
          [
            "td",
            [
              "code",
              "<576px"
            ],
            " 响应式栅格，可为栅格数或一个包含其他属性的对象"
          ],
          [
            "td",
            "number",
            "|",
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
            "sm"
          ],
          [
            "td",
            [
              "code",
              "≥576px"
            ],
            " 响应式栅格，可为栅格数或一个包含其他属性的对象"
          ],
          [
            "td",
            "number",
            "|",
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
            "md"
          ],
          [
            "td",
            [
              "code",
              "≥768px"
            ],
            " 响应式栅格，可为栅格数或一个包含其他属性的对象"
          ],
          [
            "td",
            "number",
            "|",
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
            "lg"
          ],
          [
            "td",
            [
              "code",
              "≥992px"
            ],
            " 响应式栅格，可为栅格数或一个包含其他属性的对象"
          ],
          [
            "td",
            "number",
            "|",
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
            "xl"
          ],
          [
            "td",
            [
              "code",
              "≥1200px"
            ],
            " 响应式栅格，可为栅格数或一个包含其他属性的对象"
          ],
          [
            "td",
            "number",
            "|",
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
            "xxl"
          ],
          [
            "td",
            [
              "code",
              "≥1600px"
            ],
            " 响应式栅格，可为栅格数或一个包含其他属性的对象"
          ],
          [
            "td",
            "number",
            "|",
            "object"
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
      "响应式栅格的断点扩展自 ",
      [
        "a",
        {
          "title": null,
          "href": "https://getbootstrap.com/docs/4.0/layout/overview/#responsive-breakpoints"
        },
        "BootStrap 4 的规则"
      ],
      "（不包含链接里 ",
      [
        "code",
        "occasionally"
      ],
      " 的部分)。"
    ],
    [
      "h2",
      "FAQ"
    ],
    [
      "h3",
      "IE9 响应式不工作怎么办？"
    ],
    [
      "p",
      "可以引入 ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/paulirish/matchMedia.js/"
        },
        "matchMedia polyfill"
      ],
      " 添加支持。"
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=index.zh-CN.md.js.map