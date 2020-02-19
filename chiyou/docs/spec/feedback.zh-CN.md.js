(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/spec/feedback.zh-CN.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/feedback.zh-CN.md":
/*!*****************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/feedback.zh-CN.md ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "提示信息"
    ],
    [
      "p",
      "任何一个产品，即使用户界面做的再好，也离不开用户引导和信息提示。提示信息是用来告诉用户需要知道什么、采取什么样行动的内容。"
    ],
    [
      "h3",
      "警告"
    ],
    [
      "h4",
      "警告提示（Alert）"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/eviVRYTdxOxOfVENLnxq.png"
        }
      ]
    ],
    [
      "p",
      "是一种非阻碍式的信息展示，它不打断用户的当前操作，一般停留至页面某个位置（优先顶部），非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。"
    ],
    [
      "blockquote",
      [
        "p",
        "注：关闭按钮可根据业务需要增加或隐藏。"
      ]
    ],
    [
      "h3",
      "通知"
    ],
    [
      "h4",
      "通知提醒（Notification）"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/nElczRfDzAXRZSkpiJBQ.png",
          "description": "较为复杂的通知内容时使用。"
        }
      ]
    ],
    [
      "p",
      "系统主动推送的重要的全局性通知信息，在系统右上角显示。"
    ],
    [
      "h4",
      "徽标数（Badge）"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/bVonmOmmkuvybQxTDGTC.png",
          "description": "当有 icon 的情况时一般居于 icon 右上角；无 icon 的情况下一般位于标题后侧。"
        }
      ]
    ],
    [
      "p",
      "用于聚合型的消息提示，一般出现在通知图标或头像的右上角，通过醒目的视觉形式吸引用户眼球。"
    ],
    [
      "blockquote",
      [
        "p",
        "注：相对重要和用户关联度更高的信息提示，使用数字精准提示；权重不高和不是用户特别关心的消息提示，使用红点做提示。"
      ]
    ],
    [
      "h3",
      "帮助"
    ],
    [
      "h4",
      "气泡卡片（Popover）"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/zsPOjQqkiwMnMhIsbDHz.png"
        }
      ]
    ],
    [
      "p",
      "当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。"
    ],
    [
      "blockquote",
      [
        "p",
        "注：和 Tooltip 的区别是，Popover 可以承载更复杂的内容，比如链接或按钮等。"
      ]
    ],
    [
      "h4",
      "文字提示（Tooltip）"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/CKDiGEsluwkRRGqujpgv.png"
        }
      ]
    ],
    [
      "p",
      "用于精确地描述被指向的对象，例如图标、图形、链接等，鼠标移入则显示提示，移出消失，不承载复杂文本和操作。"
    ],
    [
      "hr"
    ],
    [
      "h2",
      "过程反馈"
    ],
    [
      "p",
      "操作过程中尽可能将状态的反馈给用户，即时的响应会给用户增加信赖感。"
    ],
    [
      "h3",
      "加载状态进度反馈"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/cHaaqZTvzgCZiYUnfNom.png",
          "description": "当用户不必等待较长时间的加载时使用。"
        }
      ]
    ],
    [
      "p",
      "在操作需要一段时间（一般为超过 2 秒）完成时系统应即时给予提醒，明确告知加载的状态或加载进度条，保持与用户的沟通。"
    ],
    [
      "p",
      [
        "br"
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/antfincdn/j6XiEx6UUV/676a18a1-bf60-4d93-8f94-55f1882dd13e.png",
          "description": "在操作需要较长时间才能完成时使用，显示该操作的当前进度和状态。"
        }
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "注：若加载时间较长，应提供取消操作。"
      ]
    ],
    [
      "h3",
      "录入反馈"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/CCeqqndHQgWnqVqvRptA.png"
        }
      ]
    ],
    [
      "p",
      "操作过程中可通过不同的校验规则和形式，让用户及时发现并纠正错误。"
    ],
    [
      "blockquote",
      [
        "p",
        "注：反馈文字紧跟着要说明的区块（反馈内容一般是错误说明），不自动消失（当用户进行相应的交互操作后才消失）。"
      ]
    ],
    [
      "h4",
      "气泡确认框（Popconfirm）"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/lPZZxOAakfNhwfrpRPht.png",
          "description": "和全屏居中模态对话框相比，交互形式更轻量。"
        }
      ]
    ],
    [
      "p",
      "目标元素的操作需要用户进一步的确认时，在目标元素附近弹出浮层提示，询问用户。"
    ],
    [
      "hr"
    ],
    [
      "h2",
      "结果反馈"
    ],
    [
      "p",
      "操作过程中尽可能将状态的反馈给用户，即时的响应会给用户增加信赖感。"
    ],
    [
      "h3",
      "顶部全局提示反馈（Message）"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/pqJMJfJGLkYTDbLyJwIg.png",
          "description": "当用户不必等待较长时间的加载时使用。"
        }
      ]
    ],
    [
      "p",
      "通过一个操作引发的反馈浮层位于顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。"
    ],
    [
      "p",
      [
        "br"
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding good",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/DrKzGoqfLRtrPuZaHUiq.png",
          "alt": "正确示例",
          "description": "重要的失败信息建议使用对话框形式提示并告知失败原因。"
        }
      ],
      "\n",
      [
        "img",
        {
          "class": "preview-img no-padding bad",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/akPBJQUiUWNsULtGOnyx.png",
          "alt": "错误示例",
          "description": "重要的失败信息时不建议使用轻量级提示方式。"
        }
      ]
    ],
    [
      "p",
      "由于反馈浮层的展示时长较短（默认 3s），对于比较重要的失败通知，建议改用对话框的形式进行通知，以避免用户遗漏信息。"
    ],
    [
      "h3",
      "对话框反馈"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/OTzldmUjUgERMbUCHwzt.png"
        }
      ]
    ],
    [
      "p",
      "通过一个操作引发的反馈浮层位于页面中心，反馈内容可通过确认或取消按钮进行关闭，用户在反馈层出现时不可进行任何的操作，用于重要的反馈。"
    ],
    [
      "blockquote",
      [
        "p",
        "注：除失败时避免显示不必要的提醒弹窗。弹窗是很强的反馈机制，只有在传递非常重要，且可操作的信息时才需要使用它。"
      ]
    ]
  ],
  "meta": {
    "category": "模式",
    "order": 11,
    "title": "反馈",
    "filename": "docs/spec/feedback.zh-CN.md"
  },
  "description": [
    "section",
    [
      "p",
      "为了帮助用户了解应用当前要做什么，也给用户的下一步行为做参考，以及了解操作后所产生的结果 ，当用户和系统需要交互时，使用不同的模式来反馈信息或结果。当设计者使用反馈或者自定义一些反馈时，请注意："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "为用户在各个阶段提供必要、积极、即时的反馈；"
        ]
      ],
      [
        "li",
        [
          "p",
          "避免过度反馈，以免给用户带来不必要的打扰，能够及时看到效果的、简单的操作，可以省略反馈提示。"
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
          "href": "#提示信息",
          "title": "提示信息"
        },
        "提示信息"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#过程反馈",
          "title": "过程反馈"
        },
        "过程反馈"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#结果反馈",
          "title": "结果反馈"
        },
        "结果反馈"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=feedback.zh-CN.md.js.map