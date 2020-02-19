(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/spec/motion.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/motion.en-US.md":
/*!***************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/motion.en-US.md ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    "article",
    [
      "blockquote",
      [
        "p",
        [
          "a",
          {
            "title": null,
            "href": "https://motion.ant.design/"
          },
          "Ant Motion"
        ],
        " is an animation library based on Ant Design's principles. It is more than just a single library, but also an entire React based solution for modern applications. The goal is to help developers to apply animations in their projects with minimal efforts. Ant Motion provides animations with all levels of granularity - from single action to combination of moves."
      ]
    ],
    [
      "p",
      "Animations bring vividness to interfaces and reinforce user experiences."
    ],
    [
      "h2",
      "Values of Animations"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "strong",
            "Smooth interactions"
          ],
          " - Animations can make user interactions more natural."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "strong",
            "Bring vividness"
          ],
          " - Animations can attract users' attention and increase users' motivation to interact by bring more vividness."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "strong",
            "Define hierarchies"
          ],
          " - Animations can define elements' hierarchies and logical relationships in the most intuitive way."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "strong",
            "Provide feedbacks"
          ],
          " - Animations can reinforce user experiences by providing motional feedbacks."
        ]
      ]
    ],
    [
      "h2",
      "Effectiveness of Animations"
    ],
    [
      "p",
      "We can determine if an animation is effective or not from the following two aspects："
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "strong",
            "Justified"
          ],
          " - Is this animation necessary? Does this animation help its users to digest the information? An effective animation should not be redundant."
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "strong",
            "Performant"
          ],
          " - Is there any frame loss or lag? An effective animation must be smooth, and must not hurt the overall performance of the product."
        ]
      ]
    ],
    [
      "h2",
      "Principles"
    ],
    [
      "p",
      "Different from animations usage in typical front-office applications, animations in enterprise level applications spend a great amount of efforts on reinforcing user interactions and the effectiveness of those interactions. Therefore, we derived three animation design principles from Ant Design's core design language:"
    ],
    function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _antd = __webpack_require__(/*! antd */ "./index.js");

  var text = [{
    title: 'Natural',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/LyTPSGknLUlxiVdwMWyu.gif',
    content: 'The animation should based on law of nature. This assures the animation is smooth by its nature and intuitive to its users.'
  }, {
    title: 'Performant',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/SQOZVQVIossbXpzDmihu.gif',
    content: 'The animation should have a transition time as minimal as possible so that it serves its purpose in the most effective way.'
  }, {
    title: 'Concise',
    img: 'https://gw.alipayobjects.com/zos/rmsportal/OkIXkscKxywYLSrilPIf.gif',
    content: 'The animation should be meaningful and justified. An over fancy animation will frustrate its users, and therefore should always be avoided.'
  }];

  function Principle() {
    var childrenToRender = text.map(function (item) {
      return React.createElement(_antd.Col, {
        key: item.title,
        sm: 24,
        md: 8
      }, React.createElement("div", {
        className: "principle"
      }, React.createElement("div", null, React.createElement("img", {
        src: item.img,
        width: "80%"
      })), React.createElement("h4", null, item.title), React.createElement("p", null, item.content)));
    });
    return React.createElement("div", {
      className: "motion-principle-wrapper"
    }, React.createElement(_antd.Row, {
      gutter: {
        md: 32,
        sm: 0
      },
      className: "principle-wrapper"
    }, childrenToRender));
  }

  return React.createElement(Principle, null);
},
    [
      "h3",
      "Natural"
    ],
    [
      "p",
      "Intuitive animations usually are backed by law of nature. This requires the animations to be smooth so that their users can feel the animations' motion being justified. A natural animation triggers its users with positive user experiences."
    ],
    [
      "video",
      {
        "class": "motion-video-min",
        "src": "https://gw.alipayobjects.com/os/rmsportal/NTMlQdLIkPjOACXsdRrq.mp4",
        "loop": "true"
      }
    ],
    [
      "p",
      "Take button animation as an example, designers image the button as foliage on water - when you press it and release, the leave will slightly go into the water, and then pop back up, creating ripples around itself."
    ],
    [
      "h3",
      "Performant"
    ],
    [
      "p",
      "Enterprise level applications require highly effective user interactions. So is their animation design - with a transition time as minimal as possible."
    ],
    [
      "video",
      {
        "class": "motion-video-min",
        "src": "https://gw.alipayobjects.com/os/rmsportal/wMKeLGnpDxhwfCsBqKNN.mp4",
        "loop": "true"
      }
    ],
    [
      "p",
      "For example, compared to appearing animations, disappearing animations should not attract too much attention from their users. They just need to be concise and clear. Therefore, disappearing animations are configured to swing out with faster velocity and no disappearing delay between each list items - they disappear all at the same time as one unit."
    ],
    [
      "h3",
      "Concise"
    ],
    [
      "p",
      "Avoid dramatic and complicated animations. A good animation will get the job done instead of frustrating its users."
    ],
    [
      "video",
      {
        "src": "https://gw.alipayobjects.com/os/rmsportal/FeUCANmoDRwCSmIcnPNF.mp4",
        "loop": "true",
        "class": "motion-video-min"
      }
    ],
    [
      "p",
      "For example, when a user expands a menu, his main focus is on the menu content, not the direction change of the arrow icon on the right. Therefore, the animation doesn't need to be very complicated and distracting; it changes just enough to indicate the transition."
    ],
    [
      "p",
      [
        "br"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "For more details, please go to ",
        [
          "a",
          {
            "title": null,
            "href": "https://motion.ant.design/language/basic"
          },
          "Ant Motion Animation Principles"
        ],
        "."
      ]
    ]
  ],
  "meta": {
    "order": 5,
    "title": "Motion",
    "filename": "docs/spec/motion.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Values-of-Animations",
          "title": "Values of Animations"
        },
        "Values of Animations"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Effectiveness-of-Animations",
          "title": "Effectiveness of Animations"
        },
        "Effectiveness of Animations"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Principles",
          "title": "Principles"
        },
        "Principles"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=motion.en-US.md.js.map