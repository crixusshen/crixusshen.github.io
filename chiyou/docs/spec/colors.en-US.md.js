(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/spec/colors.en-US.md"],{

/***/ "./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/colors.en-US.md":
/*!***************************************************************************************!*\
  !*** ./node_modules/bisheng/lib/loaders/source-loader.js!./docs/spec/colors.en-US.md ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "Color Model"
    ],
    [
      "p",
      "Ant Design's design team preferred to design with the HSB color model, which makes it easier for designers to have a clear psychological expectation of color when adjusting colors, as well as facilitate communication in teams."
    ],
    [
      "h2",
      "System-level Color System"
    ],
    [
      "p",
      "Ant Design system-level color system also comes from the \"natural\" design language. Designers abstract the natural scenes through the capture, combined with the technical gene of Ant Financial, forming a unique 12 colors. Further through a large number of observations, to capture the different colors of natural light under the law of change, with the art of drawing ideas, the 12 colors were derived. The definition of neutral color palette is balanced with readability, aesthetics and usability."
    ],
    [
      "h3",
      "Base Color Palettes"
    ],
    [
      "p",
      "Ant Design's base color palette totals 120 colors, including 12 primary colors and their derivative colors. These colors can basically include the need for color in background applications design."
    ],
    function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _ColorPalettes = _interopRequireDefault(__webpack_require__(/*! ../../site/theme/template/Color/ColorPalettes */ "./site/theme/template/Color/ColorPalettes.jsx"));

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  return React.createElement(_ColorPalettes["default"], null);
},
    [
      "p",
      "Ant Design's color palette also has the ability to further extend. After careful elaboration by designers and programmers, we have come up with a set of color generation tools that combine the natural variation of colors. When there is a need for further color design, designers simply define the primary colors according to certain rules and will get a complete range of derived colors automatically ."
    ],
    [
      "h3",
      "Neutral Color Palette"
    ],
    function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _Palette = _interopRequireDefault(__webpack_require__(/*! ../../site/theme/template/Color/Palette */ "./site/theme/template/Color/Palette.jsx"));

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  return React.createElement(_Palette["default"], {
    color: {
      name: 'gray'
    },
    direction: "horizontal"
  });
},
    [
      "h3",
      "Data Visualization Color Palette (Coming soon)"
    ],
    [
      "p",
      "Data visualization color palette is based on the basic color palette and neutral color palette, and based on the principle that AntV's \"effective, clear, accurate and beautiful\"."
    ],
    [
      "h3",
      "Palette Generation Tool"
    ],
    [
      "p",
      "If the above palettes do not meet your needs, you can choose a main color below, and Ant Design's color generation algorithm will generate a palette for you."
    ],
    function bishengPluginReactPreviewer() {
  var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");

  var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

  var _ColorPaletteTool = _interopRequireDefault(__webpack_require__(/*! ../../site/theme/template/Color/ColorPaletteTool */ "./site/theme/template/Color/ColorPaletteTool.jsx"));

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  return React.createElement(_ColorPaletteTool["default"], null);
},
    [
      "h3",
      "Programmatic Usage"
    ],
    [
      "p",
      "We provide Less and JavaScript usage for developers."
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          [
            "strong",
            "Less"
          ]
        ],
        [
          "pre",
          {
            "lang": "less",
            "highlighted": "<span class=\"token atrule\">@import '~antd/es/style/themes/default.less', .selector</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">color</span><span class=\"token punctuation\">:</span> <span class=\"token variable\">@blue-5</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">background-color</span><span class=\"token punctuation\">:</span> <span class=\"token variable\">@gold-2</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            "@import '~antd/es/style/themes/default.less', .selector {\n  color: @blue-5;\n  background-color: @gold-2;\n}"
          ]
        ],
        [
          "p",
          "Color less variables: ",
          [
            "a",
            {
              "title": null,
              "href": "https://github.com/ant-design/ant-design/blob/5ab2783ff00d4b1da04bb213c6b12de43e7649eb/components/style/color/colors.less"
            },
            "color.less"
          ],
          "."
        ],
        [
          "p",
          [
            "br"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          [
            "strong",
            "JavaScript"
          ]
        ],
        [
          "pre",
          {
            "lang": null,
            "highlighted": "npm install <span class=\"token variable\">@ant</span><span class=\"token operator\">-</span>design<span class=\"token operator\">/</span>colors"
          },
          [
            "code",
            "npm install @ant-design/colors"
          ]
        ],
        [
          "pre",
          {
            "lang": "js",
            "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> blue <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'@ant-design/colors'</span><span class=\"token punctuation\">;</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>blue<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']</span>\nconsole<span class=\"token punctuation\">.</span><span class=\"token function\">log</span><span class=\"token punctuation\">(</span>blue<span class=\"token punctuation\">.</span>primary<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span> <span class=\"token comment\" spellcheck=\"true\">// '#1890FF'</span>"
          },
          [
            "code",
            "import { blue } from '@ant-design/colors';\nconsole.log(blue); // ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']\nconsole.log(blue.primary); // '#1890FF'"
          ]
        ],
        [
          "p",
          "More APIs: ",
          [
            "a",
            {
              "title": null,
              "href": "https://www.npmjs.com/package/@ant-design/colors"
            },
            "@ant-design/colors"
          ]
        ]
      ]
    ],
    [
      "hr"
    ],
    [
      "h2",
      "Product-level Color System"
    ],
    [
      "h3",
      "Brand Color"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/diEtYItrQZpqsiPsadeU.png"
        }
      ]
    ],
    [
      "p",
      "The brand color is one of the most intuitive visual elements used that is used to embody product characteristics and communicate ideas. When selecting colors, it is important to understand how the brand color is used in the user interface. In the basic color palette to choose the main color, we recommend choosing the color plate from the shallow depth of the sixth color as the main color. Ant Design's brand color comes from blue of the base color palette, it's Hex value is 1890FF, application scenarios include: key action point, the operation status, important information highlighting, graphics and other scenes."
    ],
    [
      "h3",
      "Functional Color"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/rfkSGJhMIhnUYILGIlrh.png"
        }
      ]
    ],
    [
      "p",
      "Functional color represents a clear message as well as status, such as success, error, failure, reminder, link and so on. Functional color selection need to comply with the user's basic understanding of color. We suggest that the functional colors should be kept as consistent as possible under a set of product systems. Do not have too much customization to interfere with the user's cognitive experience. Ant Design's functional color palette is shown on the right:"
    ],
    [
      "h3",
      "Neutral Color"
    ],
    [
      "p",
      [
        "img",
        {
          "class": "preview-img no-padding",
          "align": "right",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/WAlfDnpYniUjaLzmnIqf.png"
        }
      ]
    ],
    [
      "p",
      "Neutral color is mainly used in a large part of the text interface, in addition to the background, borders, dividing lines, and other scenes are also very common. Neutral color definition needs to consider the difference between dark background and light background, while incorporating the WCAG 2.0 standard. The neutral color of Ant Design is based on transparency, as shown on the right:"
    ],
    [
      "hr"
    ],
    [
      "h2",
      "Color Application In Enterprise Product Design"
    ],
    [
      "p",
      "In the design of background applications of Ant Financial, our attitude towards color is restrained. Color is used more based on information delivery, operational guidance and interactive feedback purposes. Above these principles that do not undermine operational efficiency and affect the clear communication of information, a rational choice of color is key. Of course, with illustrations and display page can be properly broken this idea."
    ]
  ],
  "meta": {
    "category": "Visual",
    "order": 0,
    "title": "Colors",
    "filename": "docs/spec/colors.en-US.md"
  },
  "description": [
    "section",
    [
      "p",
      "Ant Design interprets the color system into two levels: a system-level color system and a product-level color system."
    ],
    [
      "p",
      "The system-level color system mainly defines the basic color palette, neutral color palette and data visualization color palette in the design of Ant Financial. The product-level color system is in the specific design process, based on the color of the system to further define the tone of the product in accordance with the requirements and function of the color."
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
          "href": "#Color-Model",
          "title": "Color Model"
        },
        "Color Model"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#System-level-Color-System",
          "title": "System-level Color System"
        },
        "System-level Color System"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Product-level-Color-System",
          "title": "Product-level Color System"
        },
        "Product-level Color System"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Color-Application-In-Enterprise-Product-Design",
          "title": "Color Application In Enterprise Product Design"
        },
        "Color Application In Enterprise Product Design"
      ]
    ]
  ]
};

/***/ })

}]);
//# sourceMappingURL=colors.en-US.md.js.map