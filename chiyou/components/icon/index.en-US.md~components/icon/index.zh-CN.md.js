(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components/icon/index.en-US.md~components/icon/index.zh-CN.md"],{

/***/ "./site/theme/template/IconDisplay/Category.tsx":
/*!******************************************************!*\
  !*** ./site/theme/template/IconDisplay/Category.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/dist/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CopyableIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CopyableIcon */ "./site/theme/template/IconDisplay/CopyableIcon.tsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Category =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Category, _React$Component);

  function Category() {
    var _this;

    _classCallCheck(this, Category);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Category).apply(this, arguments));
    _this.state = {
      justCopied: null
    };

    _this.onCopied = function (type, text) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", {
        className: "copied-code"
      }, text), " copied \uD83C\uDF89"));

      _this.setState({
        justCopied: type
      }, function () {
        _this.copyId = window.setTimeout(function () {
          _this.setState({
            justCopied: null
          });
        }, 2000);
      });
    };

    return _this;
  }

  _createClass(Category, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.clearTimeout(this.copyId);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          icons = _this$props.icons,
          title = _this$props.title,
          theme = _this$props.theme,
          newIcons = _this$props.newIcons,
          messages = _this$props.intl.messages;
      var items = icons.map(function (name) {
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_CopyableIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: name,
          type: name,
          theme: theme,
          isNew: newIcons.indexOf(name) >= 0,
          justCopied: _this2.state.justCopied,
          onCopied: _this2.onCopied
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", null, messages["app.docs.components.icon.category.".concat(title)]), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
        className: "anticons-list"
      }, items));
    }
  }]);

  return Category;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(Category));

/***/ }),

/***/ "./site/theme/template/IconDisplay/CopyableIcon.tsx":
/*!**********************************************************!*\
  !*** ./site/theme/template/IconDisplay/CopyableIcon.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




var Icon = antd__WEBPACK_IMPORTED_MODULE_2__["Icon"];

var CopyableIcon = function CopyableIcon(_ref) {
  var type = _ref.type,
      theme = _ref.theme,
      isNew = _ref.isNew,
      justCopied = _ref.justCopied,
      onCopied = _ref.onCopied;
  var className = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
    copied: justCopied === type,
    outlined: theme === 'twoTone'
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_1___default.a, {
    text: theme === 'outlined' ? "<Icon type=\"".concat(type, "\" />") : "<Icon type=\"".concat(type, "\" theme=\"").concat(theme, "\" />"),
    onCopy: function onCopy(text) {
      return onCopied(type, text);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
    className: className
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Icon, {
    type: type,
    theme: theme
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    className: "anticon-class"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
    dot: isNew
  }, type))));
};

/* harmony default export */ __webpack_exports__["default"] = (CopyableIcon);

/***/ }),

/***/ "./site/theme/template/IconDisplay/IconPicSearcher.tsx":
/*!*************************************************************!*\
  !*** ./site/theme/template/IconDisplay/IconPicSearcher.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-copy-to-clipboard */ "./node_modules/react-copy-to-clipboard/lib/index.js");
/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/dist/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};





var Dragger = antd__WEBPACK_IMPORTED_MODULE_1__["Upload"].Dragger;

var PicSearcher =
/*#__PURE__*/
function (_Component) {
  _inherits(PicSearcher, _Component);

  function PicSearcher() {
    var _this;

    _classCallCheck(this, PicSearcher);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PicSearcher).apply(this, arguments));
    _this.state = {
      loading: false,
      modalVisible: false,
      popoverVisible: false,
      icons: [],
      fileList: [],
      error: false,
      modelLoaded: false
    };

    _this.loadModel = function () {
      var script = document.createElement('script');

      script.onload = function () {
        return __awaiter(_assertThisInitialized(_this), void 0, void 0,
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return window.antdIconClassifier.load();

                case 2:
                  this.setState({
                    modelLoaded: true
                  });
                  document.addEventListener('paste', this.onPaste);

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));
      };

      script.src = 'https://cdn.jsdelivr.net/gh/lewis617/antd-icon-classifier@0.0/dist/main.js';
      document.head.appendChild(script);
    };

    _this.onPaste = function (event) {
      var items = event.clipboardData && event.clipboardData.items;
      var file = null;

      if (items && items.length) {
        for (var i = 0; i < items.length; i += 1) {
          if (items[i].type.indexOf('image') !== -1) {
            file = items[i].getAsFile();
            break;
          }
        }
      }

      if (file) _this.uploadFile(file);
    };

    _this.uploadFile = function (file) {
      _this.setState(function () {
        return {
          loading: true
        };
      });

      var reader = new FileReader();

      reader.onload = function () {
        _this.toImage(reader.result).then(_this.predict);

        _this.setState(function () {
          return {
            fileList: [{
              uid: 1,
              name: file.name,
              status: 'done',
              url: reader.result
            }]
          };
        });
      };

      reader.readAsDataURL(file);
    };

    _this.toImage = function (url) {
      return new Promise(function (resolve) {
        var img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        img.src = url;

        img.onload = function onload() {
          resolve(img);
        };
      });
    };

    _this.predict = function (imgEl) {
      try {
        var icons = window.antdIconClassifier.predict(imgEl);

        if (gtag && icons.length >= 1) {
          gtag('event', 'icon', {
            event_category: 'search-by-image',
            event_label: icons[0].className
          });
        }

        icons = icons.map(function (i) {
          return {
            score: i.score,
            type: i.className.replace(/\s/g, '-')
          };
        });

        _this.setState(function () {
          return {
            icons: icons,
            loading: false,
            error: false
          };
        });
      } catch (err) {
        _this.setState(function () {
          return {
            loading: false,
            error: true
          };
        });
      }
    };

    _this.toggleModal = function () {
      _this.setState(function (prev) {
        return {
          modalVisible: !prev.modalVisible,
          popoverVisible: false,
          fileList: [],
          icons: []
        };
      });

      if (!localStorage.getItem('disableIconTip')) {
        localStorage.setItem('disableIconTip', 'true');
      }
    };

    _this.onCopied = function (text) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].success(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("code", {
        className: "copied-code"
      }, text), " copied \uD83C\uDF89"));
    };

    return _this;
  }

  _createClass(PicSearcher, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadModel();
      this.setState({
        popoverVisible: !localStorage.getItem('disableIconTip')
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('paste', this.onPaste);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var messages = this.props.intl.messages;
      var _this$state = this.state,
          modalVisible = _this$state.modalVisible,
          popoverVisible = _this$state.popoverVisible,
          icons = _this$state.icons,
          fileList = _this$state.fileList,
          loading = _this$state.loading,
          modelLoaded = _this$state.modelLoaded,
          error = _this$state.error;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon-pic-searcher"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
        content: messages["app.docs.components.icon.pic-searcher.intro"],
        visible: popoverVisible
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "camera",
        className: "icon-pic-btn",
        onClick: this.toggleModal
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
        title: messages["app.docs.components.icon.pic-searcher.title"],
        visible: modalVisible,
        onCancel: this.toggleModal,
        footer: null
      }, modelLoaded || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
        spinning: !modelLoaded,
        tip: messages['app.docs.components.icon.pic-searcher.modelloading']
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: 100
        }
      })), modelLoaded && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dragger, {
        accept: "image/jpeg, image/png",
        listType: "picture",
        customRequest: function customRequest(o) {
          return _this2.uploadFile(o.file);
        },
        fileList: fileList,
        showUploadList: {
          showPreviewIcon: false,
          showRemoveIcon: false
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "ant-upload-drag-icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
        type: "inbox"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "ant-upload-text"
      }, messages['app.docs.components.icon.pic-searcher.upload-text']), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "ant-upload-hint"
      }, messages['app.docs.components.icon.pic-searcher.upload-hint'])), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
        spinning: loading,
        tip: messages['app.docs.components.icon.pic-searcher.matching']
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon-pic-search-result"
      }, icons.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "result-tip"
      }, messages['app.docs.components.icon.pic-searcher.result-tip']), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", null, icons.length > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
        className: "col-icon"
      }, messages['app.docs.components.icon.pic-searcher.th-icon']), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, messages['app.docs.components.icon.pic-searcher.th-score']))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, icons.map(function (icon) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: icon.type
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          className: "col-icon"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_2___default.a, {
          text: "<Icon type=\"".concat(icon.type, "\" />"),
          onCopy: _this2.onCopied
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
          title: icon.type,
          placement: "right"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
          type: icon.type
        })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
          percent: Math.ceil(icon.score * 100)
        })));
      }))), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__["Result"], {
        status: "500",
        title: "503",
        subTitle: messages['app.docs.components.icon.pic-searcher.server-error']
      })))));
    }
  }]);

  return PicSearcher;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(PicSearcher));

/***/ }),

/***/ "./site/theme/template/IconDisplay/fields.ts":
/*!***************************************************!*\
  !*** ./site/theme/template/IconDisplay/fields.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons_lib_manifest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons/lib/manifest */ "./node_modules/@ant-design/icons/lib/manifest.js");
/* harmony import */ var _ant_design_icons_lib_manifest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_manifest__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


var allIcons = [];
Object.keys(_ant_design_icons_lib_manifest__WEBPACK_IMPORTED_MODULE_0___default.a).forEach(function (theme) {
  allIcons = [].concat(_toConsumableArray(allIcons), _toConsumableArray(_ant_design_icons_lib_manifest__WEBPACK_IMPORTED_MODULE_0___default.a[theme]));
}); // Hide typo-name icons

allIcons = allIcons.filter(function (name) {
  return !['interation', 'canlendar', 'colum-height'].includes(name);
});
var categories = {
  all: _toConsumableArray(new Set(allIcons)),
  direction: ['step-backward', 'step-forward', 'fast-backward', 'fast-forward', 'shrink', 'arrows-alt', 'down', 'up', 'left', 'right', 'caret-up', 'caret-down', 'caret-left', 'caret-right', 'up-circle', 'down-circle', 'left-circle', 'right-circle', 'double-right', 'double-left', 'vertical-left', 'vertical-right', 'vertical-align-top', 'vertical-align-middle', 'vertical-align-bottom', 'forward', 'backward', 'rollback', 'enter', 'retweet', 'swap', 'swap-left', 'swap-right', 'arrow-up', 'arrow-down', 'arrow-left', 'arrow-right', 'play-circle', 'up-square', 'down-square', 'left-square', 'right-square', 'login', 'logout', 'menu-fold', 'menu-unfold', 'border-bottom', 'border-horizontal', 'border-inner', 'border-outer', 'border-left', 'border-right', 'border-top', 'border-verticle', 'pic-center', 'pic-left', 'pic-right', 'radius-bottomleft', 'radius-bottomright', 'radius-upleft', 'radius-upright', 'fullscreen', 'fullscreen-exit'],
  suggestion: ['question', 'question-circle', 'plus', 'plus-circle', 'pause', 'pause-circle', 'minus', 'minus-circle', 'plus-square', 'minus-square', 'info', 'info-circle', 'exclamation', 'exclamation-circle', 'close', 'close-circle', 'close-square', 'check', 'check-circle', 'check-square', 'clock-circle', 'warning', 'issues-close', 'stop'],
  editor: ['edit', 'form', 'copy', 'scissor', 'delete', 'snippets', 'diff', 'highlight', 'align-center', 'align-left', 'align-right', 'bg-colors', 'bold', 'italic', 'underline', 'strikethrough', 'redo', 'undo', 'zoom-in', 'zoom-out', 'font-colors', 'font-size', 'line-height', 'dash', 'small-dash', 'sort-ascending', 'sort-descending', 'drag', 'ordered-list', 'unordered-list', 'radius-setting', 'column-width', 'column-height'],
  data: ['area-chart', 'pie-chart', 'bar-chart', 'dot-chart', 'line-chart', 'radar-chart', 'heat-map', 'fall', 'rise', 'stock', 'box-plot', 'fund', 'sliders'],
  logo: ['android', 'apple', 'windows', 'ie', 'chrome', 'github', 'aliwangwang', 'dingding', 'weibo-square', 'weibo-circle', 'taobao-circle', 'html5', 'weibo', 'twitter', 'wechat', 'youtube', 'alipay-circle', 'taobao', 'skype', 'qq', 'medium-workmark', 'gitlab', 'medium', 'linkedin', 'google-plus', 'dropbox', 'facebook', 'codepen', 'code-sandbox', 'code-sandbox-circle', 'amazon', 'google', 'codepen-circle', 'alipay', 'ant-design', 'ant-cloud', 'aliyun', 'zhihu', 'slack', 'slack-square', 'behance', 'behance-square', 'dribbble', 'dribbble-square', 'instagram', 'yuque', 'alibaba', 'yahoo', 'reddit', 'sketch']
};
/* harmony default export */ __webpack_exports__["default"] = (categories);

/***/ }),

/***/ "./site/theme/template/IconDisplay/index.tsx":
/*!***************************************************!*\
  !*** ./site/theme/template/IconDisplay/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons_lib_manifest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons/lib/manifest */ "./node_modules/@ant-design/icons/lib/manifest.js");
/* harmony import */ var _ant_design_icons_lib_manifest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_manifest__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/dist/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Category */ "./site/theme/template/IconDisplay/Category.tsx");
/* harmony import */ var _IconPicSearcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IconPicSearcher */ "./site/theme/template/IconDisplay/IconPicSearcher.tsx");
/* harmony import */ var _themeIcons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./themeIcons */ "./site/theme/template/IconDisplay/themeIcons.tsx");
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fields */ "./site/theme/template/IconDisplay/fields.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var IconDisplay =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IconDisplay, _React$Component);

  function IconDisplay(props) {
    var _this;

    _classCallCheck(this, IconDisplay);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IconDisplay).call(this, props));
    _this.state = {
      theme: 'outlined',
      searchKey: ''
    };

    _this.handleChangeTheme = function (e) {
      _this.setState({
        theme: e.target.value
      });
    };

    _this.handleSearchIcon = function (searchKey) {
      _this.setState(function (prevState) {
        return Object.assign(Object.assign({}, prevState), {
          searchKey: searchKey
        });
      });
    };

    _this.handleSearchIcon = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(_this.handleSearchIcon, 300);
    return _this;
  }

  _createClass(IconDisplay, [{
    key: "getComputedDisplayList",
    value: function getComputedDisplayList() {
      var _this2 = this;

      return Object.keys(IconDisplay.categories).map(function (category) {
        return {
          category: category,
          icons: (IconDisplay.categories[category] || []).filter(function (name) {
            return _ant_design_icons_lib_manifest__WEBPACK_IMPORTED_MODULE_1___default.a[IconDisplay.themeTypeMapper[_this2.state.theme]].indexOf(name) !== -1;
          })
        };
      }).filter(function (_ref) {
        var icons = _ref.icons;
        return Boolean(icons.length);
      });
    }
  }, {
    key: "renderCategories",
    value: function renderCategories(list) {
      var _this3 = this;

      var _this$state = this.state,
          searchKey = _this$state.searchKey,
          theme = _this$state.theme;
      var otherIcons = _fields__WEBPACK_IMPORTED_MODULE_8__["default"].all.filter(function (icon) {
        return list.filter(function (_ref2) {
          var category = _ref2.category;
          return category !== 'all';
        }).every(function (item) {
          return !item.icons.includes(icon);
        });
      });
      return list.filter(function (_ref3) {
        var category = _ref3.category;
        return category !== 'all';
      }).concat({
        category: 'other',
        icons: otherIcons
      }).map(function (_ref4) {
        var category = _ref4.category,
            icons = _ref4.icons;
        return {
          category: category,
          icons: icons.filter(function (name) {
            return name.includes(searchKey);
          }).filter(function (name) {
            return _ant_design_icons_lib_manifest__WEBPACK_IMPORTED_MODULE_1___default.a[IconDisplay.themeTypeMapper[theme]].includes(name);
          })
        };
      }).filter(function (_ref5) {
        var icons = _ref5.icons;
        return !!icons.length;
      }).map(function (_ref6) {
        var category = _ref6.category,
            icons = _ref6.icons;
        return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Category__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: category,
          title: category,
          icons: icons,
          theme: _this3.state.theme,
          newIcons: IconDisplay.newIconNames
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var messages = this.props.intl.messages;
      var list = this.getComputedDisplayList();
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Group, {
        value: this.state.theme,
        onChange: this.handleChangeTheme,
        size: "large",
        buttonStyle: "solid"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
        value: "outlined"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        component: _themeIcons__WEBPACK_IMPORTED_MODULE_7__["OutlinedIcon"]
      }), " ", messages['app.docs.components.icon.outlined']), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
        value: "filled"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        component: _themeIcons__WEBPACK_IMPORTED_MODULE_7__["FilledIcon"]
      }), " ", messages['app.docs.components.icon.filled']), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Radio"].Button, {
        value: "twoTone"
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
        component: _themeIcons__WEBPACK_IMPORTED_MODULE_7__["TwoToneIcon"]
      }), " ", messages['app.docs.components.icon.two-tone'])), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
        placeholder: messages['app.docs.components.icon.search.placeholder'],
        style: {
          marginLeft: 10,
          flex: 1
        },
        allowClear: true,
        onChange: function onChange(e) {
          return _this4.handleSearchIcon(e.currentTarget.value);
        },
        size: "large",
        autoFocus: true,
        suffix: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_IconPicSearcher__WEBPACK_IMPORTED_MODULE_6__["default"], null)
      })), this.renderCategories(list));
    }
  }]);

  return IconDisplay;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

IconDisplay.categories = _fields__WEBPACK_IMPORTED_MODULE_8__["default"];
IconDisplay.newIconNames = [];
IconDisplay.themeTypeMapper = {
  filled: 'fill',
  outlined: 'outline',
  twoTone: 'twotone'
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(IconDisplay));

/***/ }),

/***/ "./site/theme/template/IconDisplay/themeIcons.tsx":
/*!********************************************************!*\
  !*** ./site/theme/template/IconDisplay/themeIcons.tsx ***!
  \********************************************************/
/*! exports provided: FilledIcon, OutlinedIcon, TwoToneIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilledIcon", function() { return FilledIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlinedIcon", function() { return OutlinedIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoToneIcon", function() { return TwoToneIcon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var FilledIcon = function FilledIcon(props) {
  var path = 'M864 64H160C107 64 64 107 64 160v' + '704c0 53 43 96 96 96h704c53 0 96-43 96-96V16' + '0c0-53-43-96-96-96z';
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({}, props, {
    viewBox: "0 0 1024 1024"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: path
  }));
};
var OutlinedIcon = function OutlinedIcon(props) {
  var path = 'M864 64H160C107 64 64 107 64 160v7' + '04c0 53 43 96 96 96h704c53 0 96-43 96-96V160c' + '0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-' + '12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4' + ' 12 12v680c0 6.6-5.4 12-12 12z';
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({}, props, {
    viewBox: "0 0 1024 1024"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: path
  }));
};
var TwoToneIcon = function TwoToneIcon(props) {
  var path = 'M16 512c0 273.932 222.066 496 496 49' + '6s496-222.068 496-496S785.932 16 512 16 16 238.' + '066 16 512z m496 368V144c203.41 0 368 164.622 3' + '68 368 0 203.41-164.622 368-368 368z';
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({}, props, {
    viewBox: "0 0 1024 1024"
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: path
  }));
};

/***/ })

}]);
//# sourceMappingURL=index.zh-CN.md.js.map