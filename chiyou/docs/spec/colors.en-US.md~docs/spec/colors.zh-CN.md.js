(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["docs/spec/colors.en-US.md~docs/spec/colors.zh-CN.md"],{

/***/ "./site/theme/template/Color/ColorBlock.jsx":
/*!**************************************************!*\
  !*** ./site/theme/template/Color/ColorBlock.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ColorBlock =
/*#__PURE__*/
function (_Component) {
  _inherits(ColorBlock, _Component);

  function ColorBlock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ColorBlock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ColorBlock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onCopied", function () {
      var color = _this.props.color;
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Copied: ".concat(color));
    });

    return _this;
  }

  _createClass(ColorBlock, [{
    key: "getTextStyle",
    value: function getTextStyle() {
      var _this$props = this.props,
          color = _this$props.color,
          index = _this$props.index;
      return {
        background: color,
        color: index > 5 ? '#fff' : 'unset',
        fontWeight: index === 6 ? 'bold' : 'normal'
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          color = _this$props2.color,
          index = _this$props2.index;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default.a, {
        text: color,
        onCopy: this.onCopied,
        title: "click to copy color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-color-item",
        style: this.getTextStyle()
      }, "color-", index, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "main-color-value"
      }, color.toLowerCase())));
    }
  }]);

  return ColorBlock;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./site/theme/template/Color/ColorPaletteTool.jsx":
/*!********************************************************!*\
  !*** ./site/theme/template/Color/ColorPaletteTool.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorPaletteTool; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/dist/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ColorPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorPicker */ "./site/theme/template/Color/ColorPicker.jsx");
/* harmony import */ var _ColorPatterns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorPatterns */ "./site/theme/template/Color/ColorPatterns.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var primaryMinSaturation = 70; // 主色推荐最小饱和度

var primaryMinBrightness = 70; // 主色推荐最小亮度
// eslint-disable-next-line

var ColorPaletteTool =
/*#__PURE__*/
function (_Component) {
  _inherits(ColorPaletteTool, _Component);

  function ColorPaletteTool() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ColorPaletteTool);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ColorPaletteTool)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      primaryColor: '#1890ff',
      primaryColorInstance: null
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeColor", function (e, color) {
      var value = e.target ? e.target.value : e;

      _this.setState({
        primaryColor: value,
        primaryColorInstance: color
      });
    });

    return _this;
  }

  _createClass(ColorPaletteTool, [{
    key: "renderColorValidation",
    value: function renderColorValidation() {
      var primaryColorInstance = this.state.primaryColorInstance;
      var text = '';

      if (primaryColorInstance) {
        if (primaryColorInstance.hsv.s * 100 < primaryMinSaturation) {
          text += " \u9971\u548C\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(primaryMinSaturation, "\uFF08\u73B0\u5728 ").concat((primaryColorInstance.hsv.s * 100).toFixed(2), "\uFF09");
        }

        if (primaryColorInstance.hsv.v * 100 < primaryMinBrightness) {
          text += " \u4EAE\u5EA6\u5EFA\u8BAE\u4E0D\u4F4E\u4E8E".concat(primaryMinBrightness, "\uFF08\u73B0\u5728 ").concat((primaryColorInstance.hsv.v * 100).toFixed(2), "\uFF09");
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "color-palette-picker-validation"
      }, text.trim());
    }
  }, {
    key: "render",
    value: function render() {
      var primaryColor = this.state.primaryColor;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "color-palette-horizontal"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "color-palette-pick"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: "app.docs.color.pick-primary"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorPatterns__WEBPACK_IMPORTED_MODULE_3__["default"], {
        color: primaryColor
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "color-palette-picker"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          display: 'inline-block',
          verticalAlign: 'middle'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "chrome",
        color: primaryColor,
        onChange: this.handleChangeColor
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "color-palette-picker-value"
      }, primaryColor), this.renderColorValidation()));
    }
  }]);

  return ColorPaletteTool;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./site/theme/template/Color/ColorPalettes.jsx":
/*!*****************************************************!*\
  !*** ./site/theme/template/Color/ColorPalettes.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Palette__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Palette */ "./site/theme/template/Color/Palette.jsx");



var ColorPalettes = function ColorPalettes() {
  var colors = [{
    name: 'red',
    english: 'Dust Red',
    chinese: '薄暮',
    description: '斗志、奔放'
  }, {
    name: 'volcano',
    english: 'Volcano',
    chinese: '火山',
    description: '醒目、澎湃'
  }, {
    name: 'orange',
    english: 'Sunset Orange',
    chinese: '日暮',
    description: '温暖、欢快'
  }, {
    name: 'gold',
    english: 'Calendula Gold',
    chinese: '金盏花',
    description: '活力、积极'
  }, {
    name: 'yellow',
    english: 'Sunrise Yellow',
    chinese: '日出',
    description: '出生、阳光'
  }, {
    name: 'lime',
    english: 'Lime',
    chinese: '青柠',
    description: '自然、生机'
  }, {
    name: 'green',
    english: 'Polar Green',
    chinese: '极光绿',
    description: '健康、创新'
  }, {
    name: 'cyan',
    english: 'Cyan',
    chinese: '明青',
    description: '希望、坚强'
  }, {
    name: 'blue',
    english: 'Daybreak Blue',
    chinese: '拂晓蓝',
    description: '包容、科技、普惠'
  }, {
    name: 'geekblue',
    english: 'Geek Blue',
    chinese: '极客蓝',
    description: '探索、钻研'
  }, {
    name: 'purple',
    english: 'Golden Purple',
    chinese: '酱紫',
    description: '优雅、浪漫'
  }, {
    name: 'magenta',
    english: 'Magenta',
    chinese: '法式洋红',
    description: '明快、感性'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-palettes"
  }, colors.map(function (color) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Palette__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: color.name,
      color: color,
      showTitle: true
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorPalettes);

/***/ }),

/***/ "./site/theme/template/Color/ColorPatterns.jsx":
/*!*****************************************************!*\
  !*** ./site/theme/template/Color/ColorPatterns.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorPatterns; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/colors */ "./node_modules/@ant-design/colors/lib/index.js");
/* harmony import */ var _ant_design_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_colors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ColorBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorBlock */ "./site/theme/template/Color/ColorBlock.jsx");



function ColorPatterns(_ref) {
  var color = _ref.color;
  return Object(_ant_design_colors__WEBPACK_IMPORTED_MODULE_1__["generate"])(color).map(function (colorString, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ColorBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
      color: colorString,
      index: i + 1,
      key: colorString
    });
  });
}

/***/ }),

/***/ "./site/theme/template/Color/ColorPicker.jsx":
/*!***************************************************!*\
  !*** ./site/theme/template/Color/ColorPicker.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ColorPicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/lib/index.js");
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_color__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var noop = function noop() {};

var pickers = {
  chrome: react_color__WEBPACK_IMPORTED_MODULE_1__["ChromePicker"],
  sketch: react_color__WEBPACK_IMPORTED_MODULE_1__["SketchPicker"]
};

var ColorPicker =
/*#__PURE__*/
function (_Component) {
  _inherits(ColorPicker, _Component);

  function ColorPicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ColorPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ColorPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      displayColorPicker: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var displayColorPicker = _this.state.displayColorPicker;

      _this.setState({
        displayColorPicker: !displayColorPicker
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function () {
      _this.setState({
        displayColorPicker: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (color) {
      var onChange = _this.props.onChange;

      _this.setState({
        color: color.hex
      });

      onChange(color.hex, color);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeComplete", function (color) {
      var onChangeComplete = _this.props.onChangeComplete;

      _this.setState({
        color: color.hex
      });

      onChangeComplete(color.hex);
    });

    return _this;
  }

  _createClass(ColorPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          small = _this$props.small,
          type = _this$props.type,
          position = _this$props.position;
      var _this$state = this.state,
          color = _this$state.color,
          displayColorPicker = _this$state.displayColorPicker;
      var Picker = pickers[type];
      var styles = {
        color: {
          width: small ? '80px' : '120px',
          height: small ? '16px' : '24px',
          borderRadius: '2px',
          background: color
        },
        swatch: {
          padding: '4px',
          background: '#fff',
          borderRadius: '2px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer'
        },
        popover: {
          position: 'absolute',
          zIndex: '2'
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'
        },
        wrapper: {
          position: 'inherit',
          zIndex: '100'
        }
      };

      if (position === 'top') {
        styles.wrapper.transform = 'translateY(-100%)';
        styles.wrapper.paddingBottom = 8;
      }

      var swatch = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.swatch,
        onClick: this.handleClick
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.color
      }));
      var picker = displayColorPicker ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.popover
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.cover,
        onClick: this.handleClose
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: styles.wrapper
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Picker, _extends({}, this.props, {
        color: color,
        onChange: this.handleChange,
        onChangeComplete: this.handleChangeComplete
      })))) : null;

      if (position === 'top') {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, picker, swatch);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, swatch, picker);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props) {
      if ('color' in props) {
        return {
          color: props.color
        };
      }

      return null;
    }
  }]);

  return ColorPicker;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(ColorPicker, "defaultProps", {
  onChange: noop,
  onChangeComplete: noop,
  position: 'bottom'
});



/***/ }),

/***/ "./site/theme/template/Color/Palette.jsx":
/*!***********************************************!*\
  !*** ./site/theme/template/Color/Palette.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Palette; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var rgbToHex = function rgbToHex(rgbString) {
  var rgb = rgbString.match(/\d+/g);
  var r = parseInt(rgb[0], 10).toString(16);
  var g = parseInt(rgb[1], 10).toString(16);
  var b = parseInt(rgb[2], 10).toString(16);
  r = r.length === 1 ? "0".concat(r) : r;
  g = g.length === 1 ? "0".concat(g) : g;
  b = b.length === 1 ? "0".concat(b) : b;
  return "#".concat(r).concat(g).concat(b);
};

var Palette =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Palette, _React$Component);

  function Palette() {
    _classCallCheck(this, Palette);

    return _possibleConstructorReturn(this, _getPrototypeOf(Palette).apply(this, arguments));
  }

  _createClass(Palette, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.hexColors = {};
      Object.keys(this.colorNodes).forEach(function (key) {
        var computedColor = getComputedStyle(_this.colorNodes[key])['background-color'];

        if (computedColor.indexOf('rgba') >= 0) {
          _this.hexColors[key] = computedColor;
        } else {
          _this.hexColors[key] = rgbToHex(computedColor);
        }
      });
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.colorNodes = this.colorNodes || {};
      var _this$props = this.props,
          showTitle = _this$props.showTitle,
          direction = _this$props.direction,
          _this$props$color = _this$props.color,
          name = _this$props$color.name,
          description = _this$props$color.description,
          english = _this$props$color.english,
          chinese = _this$props$color.chinese;
      var className = direction === 'horizontal' ? 'color-palette-horizontal' : 'color-palette';
      var colors = [];
      var colorName = "".concat(english, " / ").concat(chinese);

      var _loop = function _loop(i) {
        var colorText = "".concat(name, "-").concat(i);
        colors.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default.a, {
          text: _this2.hexColors ? _this2.hexColors[colorText] : '',
          onCopy: function onCopy() {
            return antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("@".concat(colorText, " copied: ").concat(_this2.hexColors[colorText]));
          },
          key: colorText
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          ref: function ref(node) {
            _this2.colorNodes["".concat(name, "-").concat(i)] = node;
          },
          className: "main-color-item palette-".concat(name, "-").concat(i),
          style: {
            color: (name === 'yellow' ? i > 6 : i > 5) ? '#fff' : 'unset',
            fontWeight: i === 6 ? 'bold' : 'normal'
          },
          title: "click to copy color"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "main-color-text"
        }, colorText), _this2.hexColors ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "main-color-value"
        }, _this2.hexColors[colorText]) : null)));
      };

      for (var i = 1; i <= 10; i += 1) {
        _loop(i);
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: className
      }, showTitle && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "color-title"
      }, colorName, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "color-description"
      }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-color"
      }, colors));
    }
  }]);

  return Palette;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

}]);
//# sourceMappingURL=colors.zh-CN.md.js.map