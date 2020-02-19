(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/spec/font.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/font.zh-CN.md":
/*!*************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/font.zh-CN.md ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "字体家族"
    ],
    [
      "p",
      "优秀的字体系统首先是要选择合适的字体家族。Ant Design 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。"
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token property\">font-family</span><span class=\"token punctuation\">:</span> -apple-system, BlinkMacSystemFont, <span class=\"token string\">'Segoe UI'</span>, <span class=\"token string\">'PingFang SC'</span>, <span class=\"token string\">'Hiragino Sans GB'</span>,\n  <span class=\"token string\">'Microsoft YaHei'</span>, <span class=\"token string\">'Helvetica Neue'</span>, Helvetica, Arial, sans-serif, <span class=\"token string\">'Apple Color Emoji'</span>,\n  <span class=\"token string\">'Segoe UI Emoji'</span>, <span class=\"token string\">'Segoe UI Symbol'</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',\n  'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',\n  'Segoe UI Emoji', 'Segoe UI Symbol';"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "参考自 ",
        [
          "a",
          {
            "title": null,
            "href": "https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/"
          },
          "https://www.smashingmagazine.com/2015/11/using-system-ui-fonts-practical-guide/"
        ],
        " 和 ",
        [
          "a",
          {
            "title": null,
            "href": "http://markdotto.com/2018/02/07/github-system-fonts/"
          },
          "http://markdotto.com/2018/02/07/github-system-fonts/"
        ]
      ]
    ],
    [
      "p",
      "另外，在中后台系统中，数字经常需要进行纵向对比展示，我们单独将数字的字体 ",
      [
        "a",
        {
          "title": null,
          "href": "https://www.fonts.com/content/learning/fontology/level-3/numbers/proportional-vs-tabular-figures"
        },
        "font-variant-numeric"
      ],
      " 设置为 ",
      [
        "code",
        "tabular-nums"
      ],
      "，使其为等宽字体。"
    ],
    [
      "blockquote",
      [
        "p",
        "参考 ",
        [
          "a",
          {
            "title": null,
            "href": "https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage#comment78509178_32660790"
          },
          "https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage#comment78509178_32660790"
        ]
      ]
    ],
    [
      "h2",
      "主字体"
    ],
    [
      "p",
      "我们基于电脑显示器阅读距离（50 cm）以及最佳阅读角度（0.3）对 Ant Design 的主字体进行了一次升级，从原先的 12 上升至 14，以保证在多数常用显示器上的用户阅读效率最佳。"
    ],
    [
      "div",
      {
        "style": "text-align: center; margin: 40px 0px;"
      },
      [
        "img",
        {
          "width": "600",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/yriUFbqOPtVniYYiikfb.png"
        }
      ]
    ],
    [
      "h2",
      "字阶与行高"
    ],
    [
      "p",
      "字阶和行高决定着一套字体系统的动态与秩序之美。字阶是指一系列有规律的不同尺寸的字体。行高可以理解为一个包裹在字体外面的无形的盒子。"
    ],
    [
      "div",
      {
        "style": "text-align: center; margin: 40px 0px;"
      },
      [
        "img",
        {
          "width": "600",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/xpykKKFJQorFJltdXkie.png"
        }
      ]
    ],
    [
      "p",
      "Ant Design 受到 5 音阶以及自然律的启发定义了 10 个不同尺寸的字体以及与之相对应的行高。"
    ],
    [
      "p",
      [
        "img",
        {
          "src": "https://gw.alipayobjects.com/zos/rmsportal/iFjgfIBExksqCqGMwUlw.png"
        }
      ]
    ],
    [
      "p",
      "在 Ant Design 的视觉体系中，我们建议的主要字体为 14，与之对应的行高为 22。其余的字阶的选择可根据具体情况进行自由的定义。建议在一个系统设计中（展示型页面除外），字阶的选择尽量控制在 3-5 种之间，保持克制的原则。"
    ],
    [
      "h2",
      "字重"
    ],
    [
      "p",
      "字重的选择同样基于秩序、稳定、克制的原则。多数情况下，只出现 regular 以及 medium 的两种字体重量，分别对应代码中的 400 和 500。在英文字体加粗的情况下会采用 semibold 的字体重量，对应代码中的 600。"
    ],
    [
      "div",
      {
        "class": "font-samples"
      },
      [
        "div",
        [
          "img",
          {
            "src": "https://gw.alipayobjects.com/zos/rmsportal/orIVrEOZIpjMbqZGiXEi.png"
          }
        ]
      ],
      [
        "div",
        [
          "img",
          {
            "src": "https://gw.alipayobjects.com/zos/rmsportal/sasWhUzTGjlZKftukraH.png"
          }
        ]
      ],
      [
        "div",
        [
          "img",
          {
            "src": "https://gw.alipayobjects.com/zos/rmsportal/QqxifAZlISrSUwnlonyx.png"
          }
        ]
      ]
    ],
    [
      "style",
      "\n.font-samples {\n  display: flex;\n}\n"
    ],
    [
      "h2",
      "字体颜色"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img",
          "align": "right",
          "alt": "字体颜色",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/jPbEabWakVQHosHxhQPR.png"
        }
      ]
    ],
    [
      "p",
      "文本颜色如果和背景颜色太接近就会难以阅读。考虑到无障碍设计的需求，我们参考了 WCAG 的标准，将正文文本、标题和背景色之间保持在了 7:1 以上的 AAA 级对比度。"
    ],
    [
      "h2",
      "建议"
    ],
    [
      "p",
      "字体系统的构建，是『动态秩序之美』的第一步。在实际的设计中，我们还有三点建议："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          [
            "strong",
            "建立体系化的设计思路："
          ],
          "在同一个系统的 UI 设计中先建立体系化的设计思路，对主、次、辅助、标题、展示等类别的字体做统一的规划，再落地到具体场景中进行微调。建立体系化的设计思路有助于强化横向字体落地的一致性，提高字体应用的性价比，减少不必要的样式浪费。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "strong",
            "少即是多："
          ],
          "在视觉展现上能够用尽量少的样式去实现设计目的。避免毫无意义的使用大量字阶、颜色、字重强调视觉重点或对比关系。"
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "strong",
            "尝试让字体像音符一样跳跃："
          ],
          "在需要拉开差距的时候可以尝试在字阶表中跳跃的选择字体大小，会令字阶之间产生一种微妙的韵律感。"
        ]
      ]
    ]
  ],
  "meta": {
    "category": "视觉",
    "order": 3,
    "title": "字体",
    "filename": "docs/spec/font.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "字体是体系化界面设计中最基本的构成之一。"
    ],
    [
      "p",
      "我们的用户通过文本来理解内容和完成工作，科学的字体系统将大大提升用户的阅读体验及工作效率。Ant Design 字体方案，是基于『动态秩序』的设计原则，结合了自然对数以及音律的规则得出的，再经过了大量的蚂蚁中后台产品验证之后，推荐给大家。在中后台视觉体系中定义字体系统，我们建议从下面五个方面出发："
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "字体家族"
        ]
      ],
      [
        "li",
        [
          "p",
          "主字体"
        ]
      ],
      [
        "li",
        [
          "p",
          "字阶与行高"
        ]
      ],
      [
        "li",
        [
          "p",
          "字重"
        ]
      ],
      [
        "li",
        [
          "p",
          "字体颜色"
        ]
      ]
    ]
  ],
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#字体家族",
          "title": "字体家族"
        },
        "字体家族"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#主字体",
          "title": "主字体"
        },
        "主字体"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#字阶与行高",
          "title": "字阶与行高"
        },
        "字阶与行高"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#字重",
          "title": "字重"
        },
        "字重"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#字体颜色",
          "title": "字体颜色"
        },
        "字体颜色"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#建议",
          "title": "建议"
        },
        "建议"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=font.zh-CN.md.js.map