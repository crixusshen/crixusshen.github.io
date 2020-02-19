(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~components/badge/demo~components/button/demo~components/checkbox/demo~components/date-picker~b334e0b8"],{

/***/ "./node_modules/chiyou/dist/index.esm.js":
/*!***********************************************!*\
  !*** ./node_modules/chiyou/dist/index.esm.js ***!
  \***********************************************/
/*! exports provided: Affix, Alert, Anchor, AutoComplete, Avatar, BackTop, Badge, Breadcrumb, Button, Calendar, Card, Carousel, Cascader, Checkbox, Col, Collapse, Comment, ConfigProvider, DatePicker, Descriptions, Divider, Drawer, Dropdown, Empty, Form, Icon, Input, InputNumber, Layout, List, LocaleProvider, Mention, Mentions, Menu, Modal, PageHeader, Pagination, Popconfirm, Popover, Progress, Radio, Rate, Result, Row, Select, Skeleton, Slider, Spin, Statistic, Steps, Switch, Table, Tabs, Tag, TimePicker, Timeline, Tooltip, Transfer, Tree, TreeSelect, Typography, Upload, message, notification, version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return OrientCheckBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return OrientDatePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return InputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumber", function() { return InputNumber$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return default_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return OrientSwitch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transfer", function() { return default_1$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeSelect", function() { return default_1$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Upload", function() { return index; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "./index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Affix", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Affix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Alert"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Anchor", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Anchor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AutoComplete", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["AutoComplete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Avatar", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Avatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackTop", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["BackTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Badge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Breadcrumb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Calendar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Card"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Carousel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cascader", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Cascader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Col"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Collapse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Comment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfigProvider", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["ConfigProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Descriptions", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Descriptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Divider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Drawer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Dropdown"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Empty", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Form"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Icon"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Layout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["List"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocaleProvider", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["LocaleProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mention", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Mention"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mentions", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Mentions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Menu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Modal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageHeader", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["PageHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Pagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popconfirm", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Popconfirm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Popover"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Radio", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Radio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rate", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Rate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Result", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Result"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Row"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Skeleton", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Skeleton"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Slider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Spin", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Spin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Statistic", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Statistic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Steps", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Steps"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Table"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Tabs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Tag"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimePicker", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["TimePicker"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Timeline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tree", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Tree"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Typography", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["Typography"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "message", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["message"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notification", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return antd__WEBPACK_IMPORTED_MODULE_0__["version"]; });

/* harmony import */ var antd_es_checkbox_Group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/checkbox/Group */ "./components/checkbox/Group.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_es_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/es/date-picker */ "./components/date-picker/index.tsx");
/* harmony import */ var antd_es_input_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/input/TextArea */ "./components/input/TextArea.tsx");
/* harmony import */ var antd_es_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/es/progress */ "./components/progress/index.tsx");
/* harmony import */ var antd_lib_progress_style_index_less__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/progress/style/index.less */ "./components/progress/style/index.less");
/* harmony import */ var antd_lib_progress_style_index_less__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_progress_style_index_less__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_es_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/select */ "./components/select/index.tsx");
/* harmony import */ var antd_es_switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/switch */ "./components/switch/index.tsx");
/* harmony import */ var antd_es_transfer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/es/transfer */ "./components/transfer/index.tsx");
/* harmony import */ var antd_lib_transfer_style_index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/transfer/style/index.less */ "./components/transfer/style/index.less");
/* harmony import */ var antd_lib_transfer_style_index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_lib_transfer_style_index_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_es_tree_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/es/tree-select */ "./components/tree-select/index.tsx");
/* harmony import */ var antd_es_tree_select_style_index_less__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/es/tree-select/style/index.less */ "./components/tree-select/style/index.less");
/* harmony import */ var antd_es_tree_select_style_index_less__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_es_tree_select_style_index_less__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var antd_es_upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/es/upload */ "./components/upload/index.tsx");
















/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:23:20
 * @Company: orientsec.com.cn
 * @Description: 固钉
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:31:27
 * @Company: orientsec.com.cn
 * @Description: 锚点
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:34:30
 * @Company: orientsec.com.cn
 * @Description: 自动完成
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:37:33
 * @Company: orientsec.com.cn
 * @Description: 警告提示
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 头像
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 回到顶部
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 徽标数
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 面包屑
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-16 15:44:41
 * @Company: orientsec.com.cn
 * @Description: 按钮
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 日历
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 日历
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 折叠面板
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 走马灯
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 级联选择
 */

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
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

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var omit = __webpack_require__(/*! object.omit */ "./node_modules/object.omit/index.js");

var Group = antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"].Group;

var GroupWithMaxMin =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GroupWithMaxMin, _React$Component);

  function GroupWithMaxMin(props) {
    var _this;

    _classCallCheck(this, GroupWithMaxMin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GroupWithMaxMin).call(this, props));

    _this.onChange = function (checkedList) {
      var _this$props = _this.props,
          max = _this$props.max,
          min = _this$props.min;
      var options = _this.state.options;

      _this.setState({
        checkedList: checkedList,
        options: _this.generateOptions(options, checkedList, min, max)
      });

      var onChange = _this.props.onChange;
      onChange && onChange(checkedList);
    };

    var min = props.min,
        max = props.max;
    var _this$props2 = _this.props,
        _this$props2$options = _this$props2.options,
        options = _this$props2$options === void 0 ? [] : _this$props2$options,
        defaultValue = _this$props2.defaultValue;
    _this.state = {
      options: _this.generateOptions(_this.formatList(options), defaultValue, min, max),
      checkedList: defaultValue
    };
    return _this;
  }

  _createClass(GroupWithMaxMin, [{
    key: "formatList",
    value: function formatList(arr) {
      return arr.map(function (v) {
        if (typeof v === "string") {
          return {
            label: v,
            value: v
          };
        }

        return v;
      });
    }
  }, {
    key: "generateOptions",
    value: function generateOptions(options, checkedList, min, max) {
      if (checkedList.length === max) {
        return options.map(function (_ref) {
          var label = _ref.label,
              value = _ref.value;
          return {
            label: label,
            value: value,
            disabled: !checkedList.includes(String(value))
          };
        });
      }

      if (checkedList.length === min) {
        return options.map(function (_ref2) {
          var label = _ref2.label,
              value = _ref2.value;
          return {
            label: label,
            value: value,
            disabled: checkedList.includes(String(value))
          };
        });
      }

      return options;
    }
  }, {
    key: "render",
    value: function render() {
      var restProps = omit(this.props, ["options", "max", "min", "onChange", "defaultValue"]);
      var _this$state = this.state,
          options = _this$state.options,
          checkedList = _this$state.checkedList;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Group, Object.assign({
        options: options,
        value: checkedList,
        onChange: this.onChange
      }, restProps));
    }
  }]);

  return GroupWithMaxMin;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
GroupWithMaxMin.propTypes = _objectSpread2({
  max: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"],
  min: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"]
}, Group.propTypes);

var OrientGroup =
/*#__PURE__*/
function (_AntdGroup) {
  _inherits(OrientGroup, _AntdGroup);

  function OrientGroup(props) {
    _classCallCheck(this, OrientGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrientGroup).call(this, props));
  }

  _createClass(OrientGroup, [{
    key: "render",
    value: function render() {
      var props = this.props;

      if ("max" in props || "min" in props) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GroupWithMaxMin, Object.assign({}, props));
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_checkbox_Group__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, props));
    }
  }]);

  return OrientGroup;
}(antd_es_checkbox_Group__WEBPACK_IMPORTED_MODULE_1__["default"]);
OrientGroup.propTypes = _objectSpread2({
  max: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"],
  min: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"]
}, antd_es_checkbox_Group__WEBPACK_IMPORTED_MODULE_1__["default"].propTypes);

var OrientCheckBox =
/*#__PURE__*/
function (_Checkbox) {
  _inherits(OrientCheckBox, _Checkbox);

  function OrientCheckBox() {
    _classCallCheck(this, OrientCheckBox);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrientCheckBox).apply(this, arguments));
  }

  return OrientCheckBox;
}(antd__WEBPACK_IMPORTED_MODULE_0__["Checkbox"]);

OrientCheckBox.Group = OrientGroup;

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-16 16:42:21
 * @Company: orientsec.com.cn
 * @Description: 栅格 列
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 评论
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 全局化配置
 */

var YearPicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(YearPicker, _React$Component);

  function YearPicker() {
    var _this;

    _classCallCheck(this, YearPicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(YearPicker).apply(this, arguments));
    _this.state = {
      isOpen: false,
      time: null
    };

    _this.handlePanelChange = function (value) {
      _this.setState({
        time: value,
        isOpen: false
      });

      var onPanelChange = _this.props.onPanelChange;
      onPanelChange && onPanelChange(value, "year");
    };

    _this.handleOpenChange = function (status) {
      // console.log(status)
      if (status) {
        _this.setState({
          isOpen: true
        });
      } else {
        _this.setState({
          isOpen: false
        });
      }

      var onOpenChange = _this.props.onOpenChange;
      onOpenChange && onOpenChange(status);
    };

    _this.clearValue = function (value) {
      _this.setState({
        time: null
      });

      var onChange = _this.props.onChange;
      onChange && onChange(value, "year");
    };

    return _this;
  }

  _createClass(YearPicker, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onChange = _this$props.onChange,
          onPanelChange = _this$props.onPanelChange,
          onOpenChange = _this$props.onOpenChange,
          restProps = _objectWithoutProperties(_this$props, ["onChange", "onPanelChange", "onOpenChange"]);

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["DatePicker"], Object.assign({
        value: this.state.time,
        open: this.state.isOpen,
        mode: "year",
        placeholder: "\u8BF7\u9009\u62E9\u5E74\u4EFD",
        format: "YYYY",
        onOpenChange: this.handleOpenChange,
        onPanelChange: this.handlePanelChange,
        onChange: this.clearValue
      }, restProps)));
    }
  }]);

  return YearPicker;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-16 14:58:58
 * @Company: orientsec.com.cn
 * @Description: 日期选择器
 */
var OrientDatePicker = antd_es_date_picker__WEBPACK_IMPORTED_MODULE_4__["default"];
OrientDatePicker.YearPicker = YearPicker;

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 描述列表
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 分割线
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 下拉菜单
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 抽屉
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 空状态
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 表单
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 图标
 */

function formatNumber() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var list = String(value).split(".");
  var prefix = list[0].charAt(0) === "-" ? "-" : "";
  var num = prefix ? list[0].slice(1) : list[0];
  var result = "";

  while (num.length > 3) {
    result = ",".concat(num.slice(-3)).concat(result);
    num = num.slice(0, num.length - 3);
  }

  if (num) {
    result = num + result;
  }

  return "".concat(prefix).concat(result).concat(list[1] == null ? "" : list[1] === "" ? "." : ".".concat(list[1]));
}

function numberToChinese(str) {
  var num = String(parseFloat(str.replace(/,/g, "")));
  var strOutput = "",
      strUnit = "仟佰拾亿仟佰拾万仟佰拾元角分";
  num += "00";
  var intPos = num.indexOf(".");

  if (intPos >= 0) {
    num = num.substring(0, intPos) + num.substr(intPos + 1, 2);
  }

  strUnit = strUnit.substr(strUnit.length - num.length);

  for (var i = 0; i < num.length; i++) {
    strOutput += "零壹贰叁肆伍陆柒捌玖".substr(Number(num.substr(i, 1)), 1) + strUnit.substr(i, 1);
  }

  return strOutput.replace(/零角零分$/, "整").replace(/零分$/, "").replace(/零元(.角)$/, "$1").replace(/零元零角(.分)$/, "$1").replace(/零元(.角.分)$/, "$1").replace(/零角/, "零").replace(/零[仟佰拾]/g, "零").replace(/零{2,}/g, "零").replace(/零([亿|万])/g, "$1").replace(/零+元/, "元").replace(/亿零{0,3}万/, "亿").replace(/^元/, "零元");
}

var NumericInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumericInput, _React$Component);

  function NumericInput() {
    var _this;

    _classCallCheck(this, NumericInput);

    // constructor(props:NumericInputProps) {
    //   super(props);
    // }
    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumericInput).apply(this, arguments));

    _this.onChange = function (e) {
      var value = e.target.value;
      value = value.replace(/,/g, "");
      var reg = /^-?(0|[1-9][0-9]{0,11})(\.[0-9]{0,2})?$/;

      if (!isNaN(Number(value)) && reg.test(value) || value === "" || value === "-") {
        var onChange = _this.props.onChange;
        onChange && onChange(value);
      }
    };

    _this.onBlur = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange;

      if (typeof value === "string" && value.charAt(value.length - 1) === "." || value === "-") {
        onChange && onChange(value.slice(0, -1));
      }

      onBlur && onBlur();
    };

    return _this;
  }

  _createClass(NumericInput, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          onChange = _this$props2.onChange,
          restProps = _objectWithoutProperties(_this$props2, ["value", "onChange"]);

      var title = value ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "numeric-input-title"
      }, value !== "-" ? numberToChinese(String(value)) : "-") : "请输入金额";
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
        trigger: "hover",
        title: title,
        placement: "topLeft",
        overlayClassName: "numeric-input"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], Object.assign({
        onChange: this.onChange,
        onBlur: this.onBlur,
        placeholder: "\u8BF7\u8F93\u5165\u91D1\u989D",
        maxLength: 14,
        prefix: "\uFFE5",
        allowClear: true,
        value: value
      }, restProps)));
    }
  }]);

  return NumericInput;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var InputMoney =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(InputMoney, _React$Component2);

  function InputMoney(props) {
    var _this2$props$value;

    var _this2;

    _classCallCheck(this, InputMoney);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(InputMoney).call(this, props));

    _this2.onChange = function (value) {
      _this2.setState({
        value: value
      });

      var onChange = _this2.props.onChange;
      onChange && onChange(value);
    };

    _this2.state = {
      value: (_this2$props$value = _this2.props.value) !== null && _this2$props$value !== void 0 ? _this2$props$value : ""
    };
    return _this2;
  }

  _createClass(InputMoney, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          onChange = _this$props3.onChange,
          value = _this$props3.value,
          restProps = _objectWithoutProperties(_this$props3, ["onChange", "value"]);

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NumericInput, Object.assign({
        value: formatNumber(this.state.value),
        onChange: this.onChange
      }, restProps));
    }
  }]);

  return InputMoney;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

function formatNumber$1() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var list = String(value).split(".");
  var prefix = list[0].charAt(0) === "-" ? "-" : "";
  var num = prefix ? list[0].slice(1) : list[0];
  var result = "";

  while (num.length > 3) {
    result = ",".concat(num.slice(-3)).concat(result);
    num = num.slice(0, num.length - 3);
  }

  if (num) {
    result = num + result;
  }

  return "".concat(prefix).concat(result).concat(list[1] == null ? "" : list[1] === "" ? "." : ".".concat(list[1]));
}

var NumericInput$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NumericInput, _React$Component);

  function NumericInput() {
    var _this;

    _classCallCheck(this, NumericInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumericInput).apply(this, arguments));

    _this.onChange = function (e) {
      var value = e.target.value;
      value = value.replace(/,/g, "");
      var reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;

      if (!isNaN(Number(value)) && reg.test(value) || value === "" || value === "-") {
        var onChange = _this.props.onChange;
        onChange && onChange(value);
      }
    };

    _this.onBlur = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange;

      if (typeof value === "string" && value.charAt(value.length - 1) === "." || value === "-") {
        onChange && onChange(value.slice(0, -1));
      }

      onBlur && onBlur();
    };

    return _this;
  }

  _createClass(NumericInput, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onChange = _this$props2.onChange,
          onBlur = _this$props2.onBlur,
          props = _objectWithoutProperties(_this$props2, ["onChange", "onBlur"]);

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "df-input"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], Object.assign({
        placeholder: "\u8BF7\u8F93\u5165",
        onChange: this.onChange,
        onBlur: this.onBlur,
        allowClear: true
      }, props)));
    }
  }]);

  return NumericInput;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var InputNumber =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(InputNumber, _React$Component2);

  function InputNumber(props) {
    var _this2$props$value;

    var _this2;

    _classCallCheck(this, InputNumber);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(InputNumber).call(this, props));

    _this2.onChange = function (value) {
      _this2.setState({
        value: value
      });

      var onChange = _this2.props.onChange;
      onChange && onChange(value);
    };

    _this2.state = {
      value: (_this2$props$value = _this2.props.value) !== null && _this2$props$value !== void 0 ? _this2$props$value : ""
    };
    return _this2;
  }

  _createClass(InputNumber, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          onChange = _this$props3.onChange,
          restProps = _objectWithoutProperties(_this$props3, ["value", "onChange"]);

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(NumericInput$1, Object.assign({
        value: formatNumber$1(this.state.value),
        onChange: this.onChange
      }, restProps));
    }
  }]);

  return InputNumber;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var InputComponent =
/*#__PURE__*/
function (_Input) {
  _inherits(InputComponent, _Input);

  function InputComponent(props) {
    _classCallCheck(this, InputComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(InputComponent).call(this, props));
  }

  _createClass(InputComponent, [{
    key: "render",
    value: function render() {
      var props = this.props;

      if ("showMoney" in props) {
        var showMoney = props.showMoney,
            restProps = _objectWithoutProperties(props, ["showMoney"]);

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputMoney, Object.assign({}, restProps));
      }

      if ("showNumber" in props) {
        var showNumber = props.showNumber,
            _restProps = _objectWithoutProperties(props, ["showNumber"]);

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputNumber, Object.assign({}, _restProps));
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], Object.assign({}, props));
    }
  }]);

  return InputComponent;
}(antd__WEBPACK_IMPORTED_MODULE_0__["Input"]);
InputComponent.propTypes = _objectSpread2({}, antd__WEBPACK_IMPORTED_MODULE_0__["Input"].propTypes, {
  showMoney: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  showNumber: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  maxCount: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ":global .textAreaWithMaxCount-container {\n  display: inline-block;\n  position: relative;\n}\n:global .textAreaWithMaxCount-container .countInfo {\n  position: absolute;\n  right: 10px;\n  bottom: 5px;\n  color: #888;\n}\n:global .textAreaWithMaxCount-container .current-count {\n  color: #444;\n}\n:global .textAreaWithMaxCount-container .current-count.limited {\n  color: #f16767;\n}\n";
styleInject(css);

var TextArea = antd__WEBPACK_IMPORTED_MODULE_0__["Input"].TextArea;

var TextAreaWithMaxCount =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextAreaWithMaxCount, _React$Component);

  function TextAreaWithMaxCount(props) {
    var _this;

    _classCallCheck(this, TextAreaWithMaxCount);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TextAreaWithMaxCount).call(this, props));

    _this.onChange = function (e) {
      var value = e.target.value;

      _this.setState({
        count: value.length
      });

      var onChange = _this.props.onChange;
      onChange && onChange(value);
    };

    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(TextAreaWithMaxCount, [{
    key: "render",
    value: function render() {
      var count = this.state.count;

      var _this$props = this.props,
          onChange = _this$props.onChange,
          maxCount = _this$props.maxCount,
          props = _objectWithoutProperties(_this$props, ["onChange", "maxCount"]);

      var isReachLimit = count === maxCount;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "textAreaWithMaxCount-container"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextArea, Object.assign({}, props, {
        maxLength: maxCount,
        onChange: this.onChange
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("aside", {
        className: "countInfo"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "current-count ".concat(isReachLimit ? "limited" : "")
      }, count), "/", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, maxCount)));
    }
  }]);

  return TextAreaWithMaxCount;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

var TextAreaWithMaxCountComponent =
/*#__PURE__*/
function (_TextArea) {
  _inherits(TextAreaWithMaxCountComponent, _TextArea);

  function TextAreaWithMaxCountComponent() {
    _classCallCheck(this, TextAreaWithMaxCountComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextAreaWithMaxCountComponent).apply(this, arguments));
  }

  _createClass(TextAreaWithMaxCountComponent, [{
    key: "render",
    value: function render() {
      var props = this.props;

      if ("maxCount" in props) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TextAreaWithMaxCount, Object.assign({}, props));
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_input_TextArea__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props));
    }
  }]);

  return TextAreaWithMaxCountComponent;
}(antd_es_input_TextArea__WEBPACK_IMPORTED_MODULE_5__["default"]);
TextAreaWithMaxCountComponent.propTypes = _objectSpread2({}, antd__WEBPACK_IMPORTED_MODULE_0__["Input"].propTypes, {
  maxCount: prop_types__WEBPACK_IMPORTED_MODULE_3__["number"]
});

InputComponent.TextArea = TextAreaWithMaxCountComponent;

var InputNumber$1 =
/*#__PURE__*/
function (_AntdInputNumber) {
  _inherits(InputNumber, _AntdInputNumber);

  function InputNumber() {
    var _this;

    _classCallCheck(this, InputNumber);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputNumber).apply(this, arguments));

    _this.render = function () {
      var upIcon = Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
        type: "plus",
        className: "ant-input-number-handler-up-inner"
      });
      var downIcon = Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
        type: "minus",
        className: "ant-input-number-handler-down-inner"
      });
      var curProps = _this.props;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"], Object.assign({
        upHandler: upIcon,
        downHandler: downIcon
      }, curProps));
    };

    return _this;
  }

  return InputNumber;
}(antd__WEBPACK_IMPORTED_MODULE_0__["InputNumber"]);

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 布局
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 列表
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 国际化（已废弃）
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 全局提示
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 导航菜单
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 提及
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 对话框
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 统计数值
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 通知提示框
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 页头
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 分页
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 气泡确认框
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 气泡框
 */

var css$1 = ":global .orient-progress-h-20 {\n  color: #fff;\n  position: relative;\n}\n:global .orient-progress-h-20 .ant-progress-inner {\n  display: block;\n}\n:global .orient-progress-h-20 .ant-progress-outer {\n  margin: 0;\n  padding: 0;\n  display: block;\n}\n:global .orient-progress-h-20 .ant-progress-text {\n  position: absolute;\n  left: 0;\n  top: 0;\n  line-height: 20px;\n  margin: 0;\n  padding: 0 10px;\n  text-align: right;\n  color: #fff;\n}\n";
styleInject(css$1);

var InnerProgress =
/*#__PURE__*/
function (_Progress) {
  _inherits(InnerProgress, _Progress);

  function InnerProgress() {
    _classCallCheck(this, InnerProgress);

    return _possibleConstructorReturn(this, _getPrototypeOf(InnerProgress).apply(this, arguments));
  }

  _createClass(InnerProgress, [{
    key: "renderProcessInfo",
    value: function renderProcessInfo(prefixCls, progressStatus) {
      var percent = this.getPercentNumber();

      if (this.props.slim || this.props.infoPostion === "outer") {
        return _get(_getPrototypeOf(InnerProgress.prototype), "renderProcessInfo", this).call(this, prefixCls, progressStatus);
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
        className: "".concat(prefixCls, "-text"),
        title: "".concat(percent, "%"),
        style: {
          width: "".concat(percent, "%")
        }
      }, percent, "%");
    }
  }]);

  return InnerProgress;
}(antd_es_progress__WEBPACK_IMPORTED_MODULE_6__["default"]);

var default_1 =
/*#__PURE__*/
function (_Progress2) {
  _inherits(default_1, _Progress2);

  function default_1() {
    _classCallCheck(this, default_1);

    return _possibleConstructorReturn(this, _getPrototypeOf(default_1).apply(this, arguments));
  }

  _createClass(default_1, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          slim = _this$props.slim,
          strokeWidth = _this$props.strokeWidth,
          infoPostion = _this$props.infoPostion,
          rest = _objectWithoutProperties(_this$props, ["slim", "strokeWidth", "infoPostion"]);

      var className = "orient-progress-h-20";
      var height = 20;

      if (slim || infoPostion === "outer") {
        className = "";
      }

      if (slim) {
        height = 2;
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InnerProgress, Object.assign({
        className: className,
        slim: slim,
        strokeWidth: height,
        infoPostion: infoPostion
      }, rest));
    }
  }]);

  return default_1;
}(antd_es_progress__WEBPACK_IMPORTED_MODULE_6__["default"]);
default_1.original = antd_es_progress__WEBPACK_IMPORTED_MODULE_6__["default"];
default_1.defaultProps = _objectSpread2({}, antd_es_progress__WEBPACK_IMPORTED_MODULE_6__["default"].defaultProps, {
  slim: false,
  infoPostion: "inner"
});

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 单选框
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 评分
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 结果
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-16 16:44:16
 * @Company: orientsec.com.cn
 * @Description: 栅格 行
 */

var omit$1 = __webpack_require__(/*! object.omit */ "./node_modules/object.omit/index.js");
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
    _this.searchInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["createRef"])();

    _this.innerSearchInputRender = function () {
      var onInnerSearch = _this.props.onInnerSearch;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
        placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9",
        prefix: Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
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
      Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, _this.innerSearchInputRender(), Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, menu)) : // 用户端自定义渲染
      Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, _this.innerSearchInputRender(), antdDropdownRender(menu));
    };

    _this.renderSelect = function () {
      // 获取逻辑处理需要的属性值
      var _this$props = _this.props,
          showInnerSearch = _this$props.showInnerSearch,
          antdOnFocus = _this$props.onFocus,
          antdOnBlur = _this$props.onBlur,
          antdOnSelect = _this$props.onSelect;
      var rest = omit$1(_this.props, []);
      var custom = {}; // 如果设置，启动内部搜索框功能

      if (showInnerSearch) {
        rest = omit$1(_this.props, ["showInnerSearch", "dropdownRender", "onFocus", "onBlur", "onSelect"]);
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

            _this.searchInput.current.blur(); // fix:多选时不应该关闭下拉框


            var mode = _this.props.mode;

            _this.setState({
              open: mode ? true : false,
              innerFocus: true
            });
          }
        };
        custom.open = _this.state.open;
      }

      return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(antd_es_select__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({
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
}(antd_es_select__WEBPACK_IMPORTED_MODULE_8__["default"]);
Select.propTypes = _objectSpread2({
  showInnerSearch: prop_types__WEBPACK_IMPORTED_MODULE_3__["bool"],
  onInnerSearch: prop_types__WEBPACK_IMPORTED_MODULE_3__["func"]
}, antd_es_select__WEBPACK_IMPORTED_MODULE_8__["default"].propTypes);

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 骨架屏
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 滑动输入条
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 加载中
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 步骤条
 */

var css$2 = ":global .orient-switchWithTag button {\n  margin: 0 10px;\n}\n:global .orient-switchWithTag .left-tag,\n:global .orient-switchWithTag .right-tag {\n  line-height: 1;\n  font-size: 14px;\n  display: inline-block;\n}\n:global .orient-switchWithTag .left-tag .active,\n:global .orient-switchWithTag .right-tag .active {\n  color: #7088e6;\n  font-weight: bold;\n}\n";
styleInject(css$2);

var SwitchWithTagsPropTypes = _objectSpread2({}, antd_es_switch__WEBPACK_IMPORTED_MODULE_9__["default"].propTypes, {
  activeText: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
  inactiveText: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
});

var SwitchWithTags =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SwitchWithTags, _React$Component);

  function SwitchWithTags(props) {
    var _this;

    _classCallCheck(this, SwitchWithTags);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchWithTags).call(this, props));

    _this.onChange = function (checked) {
      _this.setState({
        checked: checked
      });
    };

    _this.state = {
      checked: props.defaultChecked
    };
    return _this;
  }

  _createClass(SwitchWithTags, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          activeText = _this$props.activeText,
          inactiveText = _this$props.inactiveText;
      var checked = this.state.checked;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "orient-switchWithTag"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("aside", {
        className: "left-tag ".concat(checked ? "" : "active")
      }, inactiveText), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Switch"], {
        checked: checked,
        onChange: this.onChange
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("aside", {
        className: "right-tag ".concat(checked ? "active" : "")
      }, activeText)));
    }
  }]);

  return SwitchWithTags;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);
SwitchWithTags.propTypes = SwitchWithTagsPropTypes;

var OrientSwitchPropTypes = _objectSpread2({}, antd_es_switch__WEBPACK_IMPORTED_MODULE_9__["default"].propTypes, {
  activeText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  inactiveText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
});

var OrientSwitch =
/*#__PURE__*/
function (_Switch) {
  _inherits(OrientSwitch, _Switch);

  function OrientSwitch() {
    _classCallCheck(this, OrientSwitch);

    return _possibleConstructorReturn(this, _getPrototypeOf(OrientSwitch).apply(this, arguments));
  }

  _createClass(OrientSwitch, [{
    key: "render",
    value: function render() {
      var props = this.props;

      if ("activeText" in props && "inactiveText" in props) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SwitchWithTags, Object.assign({}, props));
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Switch"], Object.assign({}, props));
    }
  }]);

  return OrientSwitch;
}(antd__WEBPACK_IMPORTED_MODULE_0__["Switch"]);
OrientSwitch.propTypes = OrientSwitchPropTypes;

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 14:42:52
 * @Company: orientsec.com.cn
 * @Description: 表格
 */

var default_1$1 =
/*#__PURE__*/
function (_Transfer) {
  _inherits(default_1, _Transfer);

  function default_1() {
    _classCallCheck(this, default_1);

    return _possibleConstructorReturn(this, _getPrototypeOf(default_1).apply(this, arguments));
  }

  _createClass(default_1, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dataSource = _this$props.dataSource,
          alias = _this$props.alias,
          rest = _objectWithoutProperties(_this$props, ["dataSource", "alias"]);

      var key = alias.key,
          title = alias.title;
      var exchangeData = dataSource.map(function (item) {
        return _objectSpread2({}, item, {
          key: item[key],
          title: item[title]
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_transfer__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({
        dataSource: exchangeData
      }, rest));
    }
  }]);

  return default_1;
}(antd_es_transfer__WEBPACK_IMPORTED_MODULE_10__["default"]);
default_1$1.original = antd_es_transfer__WEBPACK_IMPORTED_MODULE_10__["default"];
default_1$1.defaultProps = _objectSpread2({}, antd_es_transfer__WEBPACK_IMPORTED_MODULE_10__["default"].defaultProps, {
  locale: {
    itemUnit: "",
    itemsUnit: ""
  },
  alias: {
    key: "key",
    title: "title"
  }
});

/*
 * @Author: YangJiaqi
 * @Date: 2020-01-14 16:17:06
 * @Company: orientsec.com.cn
 * @Description: 树形控件
 */

/**
 * 用于获取选中节点的描述信息
 * @param value         节点的 value 或是 value 组成的数组
 * @param data          所有的节点数据
 * @param showAllLevels 是否需要所有的层级
 *
 * @returns             返回节点信息的二维数组
 */

function getSelectTreeNodeDesc(value, data) {
  var _valueList;

  var showAllLevels = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var valueList;
  var result = [];

  if (!value || !data) {
    return result;
  }

  if (!Array.isArray(value)) {
    valueList = [value];
  } else {
    valueList = value.filter(function (item) {
      return !(item === undefined || item === null);
    });
  }

  function deepWalk(prevDesc, nextArray, nextValue) {
    if (!nextArray || nextArray.length === 0) {
      if (prevDesc.length === 0) {
        return;
      }

      if (nextValue === undefined) {
        result.push(prevDesc);
      }

      return;
    }

    nextArray.forEach(function (item) {
      if (item.value === nextValue || nextValue === undefined) {
        if (showAllLevels) {
          deepWalk([].concat(_toConsumableArray(prevDesc), [item.title]), item.children);
        } else {
          deepWalk([item.title], item.children);
        }

        return;
      }

      if (showAllLevels) {
        deepWalk([].concat(_toConsumableArray(prevDesc), [item.title]), item.children, nextValue);
      } else {
        deepWalk([item.title], item.children, nextValue);
      }
    });
  }

  (_valueList = valueList) === null || _valueList === void 0 ? void 0 : _valueList.forEach(function (value) {
    deepWalk([], data, value);
  });
  return result;
}

var default_1$2 =
/*#__PURE__*/
function (_TreeSelect) {
  _inherits(default_1, _TreeSelect);

  function default_1(props) {
    var _this;

    _classCallCheck(this, default_1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(default_1).call(this, props));
    _this.state = {
      title: ""
    };

    _this.onChange = function (value, label, extra) {
      var selectedNode = getSelectTreeNodeDesc(value, _this.props.treeData, _this.props.showAllLevels);

      _this.setState({
        title: selectedNode.map(function (item) {
          return item.join("/");
        }).join("，")
      });

      _this.props.onChange && _this.props.onChange(value, label, extra);
    };

    var selectedNode = getSelectTreeNodeDesc(props.value, props.treeData, props.showAllLevels);
    _this.state.title = selectedNode.map(function (item) {
      return item.join("/");
    }).join("，");
    return _this;
  }

  _createClass(default_1, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          showToolTip = _this$props.showToolTip,
          onChange = _this$props.onChange,
          rest = _objectWithoutProperties(_this$props, ["showToolTip", "onChange"]);

      var title = this.state.title;

      if (!showToolTip) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_tree_select__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, rest, {
          onChange: this.onChange
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
        trigger: "hover",
        placement: "topLeft",
        title: title
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_es_tree_select__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, rest, {
        onChange: this.onChange
      }))));
    }
  }]);

  return default_1;
}(antd_es_tree_select__WEBPACK_IMPORTED_MODULE_12__["default"]);
default_1$2.original = antd_es_tree_select__WEBPACK_IMPORTED_MODULE_12__["default"];
default_1$2.defaultProps = _objectSpread2({}, antd_es_tree_select__WEBPACK_IMPORTED_MODULE_12__["default"].defaultProps, {
  showCheckedStrategy: antd_es_tree_select__WEBPACK_IMPORTED_MODULE_12__["default"].SHOW_CHILD,
  showSearch: true,
  treeCheckable: true,
  multiple: true,
  showToolTip: true,
  showAllLevels: false
});

/*
 * @Author: YangJiaqi
 * @Date: 2020-01-14 16:17:06
 * @Company: orientsec.com.cn
 * @Description: 标签页
 */

/*
 * @Author: YangJiaqi
 * @Date: 2020-01-14 16:17:06
 * @Company: orientsec.com.cn
 * @Description: 标签
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 18:45:44
 * @Company: orientsec.com.cn
 * @Description: 时间选择框
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 18:45:44
 * @Company: orientsec.com.cn
 * @Description: 时间抽
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 18:45:44
 * @Company: orientsec.com.cn
 * @Description: 文字提示
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 18:45:44
 * @Company: orientsec.com.cn
 * @Description: 排版
 */

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 18:45:44
 * @Company: orientsec.com.cn
 * @Description: 提及
 */

var css$3 = ":global .orient-singleFileUpload .ant-input {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n:global .orient-singleFileUpload .ant-btn {\n  border-left: none;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n:global .orient-singleFileUpload > .anticon {\n  margin-left: 10px;\n}\n:global .orient-singleFileUpload .tip {\n  font-size: 12px;\n  color: #666;\n  margin-top: 10px;\n  line-height: 20px;\n}\n";
styleInject(css$3);

var statusEnum;

(function (statusEnum) {
  statusEnum[statusEnum["default"] = 0] = "default";
  statusEnum[statusEnum["handleFile"] = 1] = "handleFile";
  statusEnum[statusEnum["uploading"] = 2] = "uploading";
  statusEnum[statusEnum["uploaded"] = 3] = "uploaded";
  statusEnum[statusEnum["uploadError"] = 4] = "uploadError";
})(statusEnum || (statusEnum = {}));

var SingleFileUpload =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SingleFileUpload, _React$Component);

  function SingleFileUpload() {
    var _this;

    _classCallCheck(this, SingleFileUpload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SingleFileUpload).apply(this, arguments));
    _this.state = {
      fileList: [],
      status: statusEnum.default
    };
    _this.handleUpload =
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var _this$state$fileList, file, formData;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state$fileList = _slicedToArray(_this.state.fileList, 1), file = _this$state$fileList[0];
              formData = new FormData();
              formData.append("files[]", file);

              _this.setState({
                status: statusEnum.uploading
              });

              _context.prev = 4;
              _context.next = 7;
              return _this.props.onFileHandle(file);

            case 7:
              _context.next = 14;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](4);

              _this.setState({
                status: statusEnum.uploadError
              });

              antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("upload successfully.");
              return _context.abrupt("return");

            case 14:
              _this.setState({
                status: statusEnum.uploaded
              });

              antd__WEBPACK_IMPORTED_MODULE_0__["message"].success("upload successfully.");

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 9]]);
    }));

    _this.renderStatusIcon = function () {
      var status = _this.state.status;

      if (status === statusEnum.uploading) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
          type: "loading"
        });
      }

      if (status === statusEnum.uploaded) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
          type: "check-circle",
          style: {
            color: "rgb(129, 184, 245)"
          }
        });
      }

      if (status === statusEnum.uploadError) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
          type: "close-circle",
          style: {
            color: "rgb(241, 103, 103)"
          }
        });
      }

      return; // throw new Error(`error status:${status}`);
    };

    return _this;
  }

  _createClass(SingleFileUpload, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _fileList$,
          _fileList$2;

      var _this$state = this.state,
          status = _this$state.status,
          fileList = _this$state.fileList;
      var tip = this.props.tip;
      var props = {
        showUploadList: false,
        beforeUpload: function beforeUpload(file) {
          _this2.setState(function (state) {
            return {
              status: statusEnum.handleFile,
              fileList: [file]
            };
          });

          return false;
        },
        fileList: fileList
      };
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "orient-singleFileUpload"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Upload"], Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Tooltip"], {
        title: fileList === null || fileList === void 0 ? void 0 : (_fileList$ = fileList[0]) === null || _fileList$ === void 0 ? void 0 : _fileList$.name
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Input"], {
        readOnly: true,
        style: {
          width: 180
        },
        placeholder: "\u8BF7\u9009\u62E9\u6587\u4EF6",
        value: fileList === null || fileList === void 0 ? void 0 : (_fileList$2 = fileList[0]) === null || _fileList$2 === void 0 ? void 0 : _fileList$2.name,
        prefix: react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Icon"], {
          type: "folder",
          style: {
            color: "#8b9be1"
          }
        })
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        type: "primary",
        onClick: this.handleUpload,
        disabled: fileList.length === 0
      }, status === statusEnum.uploading ? "上传中" : "上传"), this.renderStatusIcon(), tip && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4", {
        className: "tip"
      }, tip));
    }
  }]);

  return SingleFileUpload;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-16 14:58:58
 * @Company: orientsec.com.cn
 * @Description: 上传
 */
/**
 * 子类继承父类 子类上的每个属性 和 方法上的 类型只能收窄 不能放宽
 * 所以 要让子类上的 listType 比 父类上的 listType 多一个可选的类型是行不通的
 * */

var index = Object.assign(antd_es_upload__WEBPACK_IMPORTED_MODULE_14__["default"], {
  SingleFileUpload: SingleFileUpload
});

/*
 * @Author: shenzhiwei
 * @Date: 2020-02-17 18:45:44
 * @Company: orientsec.com.cn
 * @Description: 版本
 */




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
//# sourceMappingURL=date-picker~b334e0b8.js.map