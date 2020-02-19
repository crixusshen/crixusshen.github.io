(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~components/tree-select/demo"],{

/***/ "./node_modules/bisheng/tmp/components-tree-select-demo.index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bisheng/tmp/components-tree-select-demo.index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
    'async': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tree-select/demo/async.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/async.md"),
    'basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tree-select/demo/basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/basic.md"),
    'checkable': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tree-select/demo/checkable.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/checkable.md"),
    'multiple': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tree-select/demo/multiple.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/multiple.md"),
    'orient-async': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tree-select/demo/orient-async.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-async.md"),
    'orient-basic': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tree-select/demo/orient-basic.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-basic.md"),
    'orient-disabled': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tree-select/demo/orient-disabled.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-disabled.md"),
    'orient-showAll': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tree-select/demo/orient-showAll.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-showAll.md"),
    'orient-treeData': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tree-select/demo/orient-treeData.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/orient-treeData.md"),
    'suffix': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tree-select/demo/suffix.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/suffix.md"),
    'treeData': __webpack_require__(/*! ./node_modules/bisheng/lib/loaders/source-loader!./components/tree-select/demo/treeData.md */ "./node_modules/bisheng/lib/loaders/source-loader.js!./components/tree-select/demo/treeData.md"),
}

/***/ }),

/***/ "./node_modules/fastwoman/dist/index.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/fastwoman/dist/index.esm.js ***!
  \**************************************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/select */ "./components/select/index.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);





function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var omit = __webpack_require__(/*! object.omit */ "./node_modules/object.omit/index.js");
/**
 * Select 选择器
 */

var Select =
/*#__PURE__*/
function (_AntdSelect) {
  _inherits(Select, _AntdSelect);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));
    _this.searchInput = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();

    _this.innerSearchInputRender = function () {
      var onInnerSearch = _this.props.onInnerSearch;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
        placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
        prefix: Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
          type: "search"
        }),
        onChange: onInnerSearch,
        onFocus: function onFocus(e) {
          _this.setState({
            open: true,
            innerFocus: true
          });

          e.stopPropagation();
        },
        onBlur: function onBlur(e) {
          _this.setState({
            open: false,
            innerFocus: false
          });
        }
      });
    };

    _this.defaultDropdownRender = function (menu) {
      var antdDropdownRender = _this.props.dropdownRender;
      return !antdDropdownRender ? // 默认模板渲染
      Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, _this.innerSearchInputRender(), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, menu)) : // 用户端自定义渲染
      Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, _this.innerSearchInputRender(), antdDropdownRender(menu));
    };

    _this.renderSelect = function () {
      // 获取逻辑处理需要的属性值
      var _this$props = _this.props,
          showInnerSearch = _this$props.showInnerSearch,
          antdOnFocus = _this$props.onFocus,
          antdOnBlur = _this$props.onBlur,
          antdOnSelect = _this$props.onSelect;
      var rest = omit(_this.props, []);
      var custom = {}; // 如果设置，启动内部搜索框功能

      if (showInnerSearch) {
        rest = omit(_this.props, ["showInnerSearch", "dropdownRender", "onFocus", "onBlur", "onSelect"]);
        custom = {
          dropdownRender: _this.defaultDropdownRender,
          onFocus: function onFocus() {
            if (antdOnFocus) {
              antdOnFocus();
            }

            var innerFocus = _this.state.innerFocus;

            if (!innerFocus) {
              _this.setState({
                open: true,
                innerFocus: false
              });
            } else {
              _this.setState({
                open: false,
                innerFocus: false
              });
            }
          },
          onBlur: function onBlur(val) {
            if (antdOnBlur) {
              antdOnBlur(val);
            }

            var innerFocus = _this.state.innerFocus;

            if (!innerFocus) {
              _this.setState({
                open: false
              });
            } else {
              _this.setState({
                innerFocus: false
              });
            }
          },
          onSelect: function onSelect(val, option) {
            if (antdOnSelect) {
              antdOnSelect(val, option);
            }

            _this.searchInput.current.blur();

            _this.setState({
              open: false,
              innerFocus: true
            });
          }
        };
        custom.open = _this.state.open;
      }

      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({
        ref: _this.searchInput
      }, rest, custom));
    };

    _this.state = {
      open: false,
      innerFocus: false
    };
    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      return this.renderSelect();
    }
  }]);

  return Select;
}(antd_lib_select__WEBPACK_IMPORTED_MODULE_2__["default"]);
Select.propTypes = _objectSpread2({
  showInnerSearch: prop_types__WEBPACK_IMPORTED_MODULE_1__["bool"],
  onInnerSearch: prop_types__WEBPACK_IMPORTED_MODULE_1__["func"]
}, antd_lib_select__WEBPACK_IMPORTED_MODULE_2__["default"].propTypes);




/***/ }),

/***/ "./node_modules/is-extendable/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-extendable/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isPlainObject = __webpack_require__(/*! is-plain-object */ "./node_modules/is-plain-object/index.js");

module.exports = function isExtendable(val) {
  return isPlainObject(val) || typeof val === 'function' || Array.isArray(val);
};


/***/ }),

/***/ "./node_modules/is-plain-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-plain-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! isobject */ "./node_modules/isobject/index.js");

function isObjectObject(o) {
  return isObject(o) === true
    && Object.prototype.toString.call(o) === '[object Object]';
}

module.exports = function isPlainObject(o) {
  var ctor,prot;

  if (isObjectObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (typeof ctor !== 'function') return false;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObjectObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
};


/***/ }),

/***/ "./node_modules/isobject/index.js":
/*!****************************************!*\
  !*** ./node_modules/isobject/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isObject(val) {
  return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


/***/ }),

/***/ "./node_modules/object.omit/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object.omit/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * object.omit <https://github.com/jonschlinkert/object.omit>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */



var isObject = __webpack_require__(/*! is-extendable */ "./node_modules/is-extendable/index.js");

module.exports = function omit(obj, props, fn) {
  if (!isObject(obj)) return {};

  if (typeof props === 'function') {
    fn = props;
    props = [];
  }

  if (typeof props === 'string') {
    props = [props];
  }

  var isFunction = typeof fn === 'function';
  var keys = Object.keys(obj);
  var res = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var val = obj[key];

    if (!props || (props.indexOf(key) === -1 && (!isFunction || fn(val, key, obj)))) {
      res[key] = val;
    }
  }
  return res;
};


/***/ })

}]);
//# sourceMappingURL=demo.js.map