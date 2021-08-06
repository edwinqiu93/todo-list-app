exports.ids = [8];
exports.modules = {

/***/ "3F0T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "DEFAULT", function() { return /* reexport */ modal_default; });
__webpack_require__.d(__webpack_exports__, "DELETETASK", function() { return /* reexport */ deleteTask; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-decoration"
var external_react_decoration_ = __webpack_require__("UwFn");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./components/Button/index.js + 1 modules
var Button = __webpack_require__("co3k");

// EXTERNAL MODULE: ./modules/index.js + 8 modules
var modules = __webpack_require__("LYcp");

// EXTERNAL MODULE: ./utils/classnames.js
var classnames = __webpack_require__("ciQh");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// CONCATENATED MODULE: ./components/Modal/Content.jsx
var _dec, _class;

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






let Content_Modal = (_dec = Object(external_react_redux_["connect"])(null, dispatch => ({
  close: () => dispatch(modules["a" /* action */].modal.close())
})), _dec(_class = class Modal extends external_react_default.a.Component {
  render() {
    const {
      size,
      header,
      icon,
      buttons,
      loading,
      children,
      indentedBody,
      headerBold
    } = this.props;
    return __jsx("div", {
      className: classnames_default()("modal-dialog", "modal-" + size)
    }, __jsx("div", {
      className: "modal-content"
    }, __jsx("header", {
      className: "modal-header"
    }, __jsx("div", {
      className: "modal-title"
    }, icon && __jsx("i", {
      className: classnames_default()("modal-icon", icon)
    }), __jsx("span", null, headerBold ? __jsx("strong", null, header) : {
      header
    })), __jsx("button", {
      type: "button",
      className: "close",
      "aria-label": "Close",
      onClick: this.props.close
    }, __jsx("span", {
      "aria-hidden": "true"
    }, __jsx("i", {
      className: "icon-cross3"
    })))), __jsx("div", {
      className: classnames_default()("modal-body", loading && "text-center", indentedBody && "modal-indented")
    }, loading && __jsx("img", {
      src: "/loading.svg"
    }), !loading && children), buttons.length > 0 && __jsx("footer", {
      className: "modal-footer buttons"
    }, buttons.map((button, index) => __jsx(Button["a" /* default */], _extends({
      key: index,
      disabled: loading
    }, button))))));
  }

}) || _class);
Content_Modal.defaultProps = {
  buttons: [],
  loading: false
};
/* harmony default export */ var Content = (Content_Modal);
// CONCATENATED MODULE: ./modal/default.js
var default_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable */

 // import * as api from "api";



class default_DefaultModal extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "submit", async () => {
      this.setState({
        loading: true
      });

      try {
        await (() => {});
        this.setState({
          loading: false,
          loaded: true
        });

        if (this.props.callback) {
          this.props.callback();
        }

        return this.props.close();
      } catch (error) {
        console.error(error);
        window.alert("Unexpected Error");
        this.setState({
          loading: false
        });
      }

      return true;
    });

    this.state = {
      loaded: false,
      loading: true
    };
  }

  render() {
    return default_jsx(Content, {
      size: "lg",
      header: "Default Modal",
      icon: "wb-cloud",
      buttons: [{
        title: "Submit",
        type: "success"
      }]
    }, "It is the default modal");
  }

}

/* harmony default export */ var modal_default = (default_DefaultModal);
// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__("bMwp");

// EXTERNAL MODULE: external "object-path"
var external_object_path_ = __webpack_require__("iZE/");
var external_object_path_default = /*#__PURE__*/__webpack_require__.n(external_object_path_);

// CONCATENATED MODULE: ./components/Modal/Alert.jsx
var Alert_dec, Alert_class;

var Alert_jsx = external_react_default.a.createElement;

function Alert_extends() { Alert_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Alert_extends.apply(this, arguments); }






let Alert_Modal = (Alert_dec = Object(external_react_redux_["connect"])(null, dispatch => ({
  close: () => dispatch(modules["a" /* action */].modal.close())
})), Alert_dec(Alert_class = class Modal extends external_react_default.a.Component {
  render() {
    const {
      size,
      header,
      icon,
      buttons,
      loading,
      children
    } = this.props;
    return Alert_jsx("div", {
      className: classnames_default()("modal-dialog", "modal-" + size)
    }, Alert_jsx("div", {
      className: "modal-content"
    }, Alert_jsx("header", {
      className: "modal-header"
    }, Alert_jsx("div", {
      className: "modal-title"
    }, icon && Alert_jsx("i", {
      className: classnames_default()("modal-icon", icon)
    }), Alert_jsx("span", null, " ", header, " ")), Alert_jsx("button", {
      type: "button",
      className: "close",
      "aria-label": "Close",
      onClick: this.props.close
    }, Alert_jsx("span", {
      "aria-hidden": "true"
    }, Alert_jsx("i", {
      className: "icon-cross3"
    })))), Alert_jsx("div", {
      className: classnames_default()("modal-body-alert", loading && "text-center")
    }, loading && Alert_jsx("img", {
      src: "/loading.svg"
    }), !loading && children), buttons.length > 0 && Alert_jsx("footer", {
      className: "modal-footer-alert buttons"
    }, buttons.map((button, index) => Alert_jsx(Button["a" /* default */], Alert_extends({
      key: index,
      disabled: loading
    }, button))))));
  }

}) || Alert_class);
Alert_Modal.defaultProps = {
  buttons: [],
  loading: false
};
/* harmony default export */ var Alert = (Alert_Modal);
// CONCATENATED MODULE: ./modal/deleteTask.js
var deleteTask_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { deleteTask_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function deleteTask_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class deleteTask_DeleteTask extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    deleteTask_defineProperty(this, "state", {
      loading: true,
      loaded: false
    });

    deleteTask_defineProperty(this, "handleChange", path => value => {
      const state = _objectSpread({}, this.state);

      external_object_path_default.a.set(state, path, value);
      this.setState(state);
    });

    deleteTask_defineProperty(this, "submit", async () => {
      let {
        task_id
      } = this.props;

      try {
        this.setState({
          loading: true
        });
        await api["tasks"].deleteTask(task_id);
        this.setState({
          loading: false,
          loaded: true
        });
        this.props.update(task_id);
        return this.props.close();
      } catch (error) {
        console.error(error);
        window.alert("Unexpected Error");
        this.setState({
          loading: false
        });
      }
    });

    deleteTask_defineProperty(this, "close", async () => {
      return this.props.close();
    });
  }

  render() {
    return deleteTask_jsx(Alert, {
      size: "sm",
      icon: "wb-cloud",
      buttons: [{
        title: "Yes",
        type: "danger",
        onClick: this.submit
      }, {
        title: "No",
        type: "success",
        onClick: this.close
      }]
    }, "Are you sure you want to delete this?");
  }

}

/* harmony default export */ var deleteTask = (deleteTask_DeleteTask);
// CONCATENATED MODULE: ./modal/index.js



/***/ }),

/***/ "6APn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isComponentType(type) {
  if (!type) return false;
  return ["default", "primary", "success", "info", "warning", "danger"].includes(type);
}

module.exports = isComponentType;

/***/ }),

/***/ "ciQh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function classnames(...array) {
  return array.filter(item => item != null && item.toString).filter(item => item !== false).map(item => item.toString()).join(" ");
}

module.exports = classnames;

/***/ }),

/***/ "co3k":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./utils/classnames.js
var classnames = __webpack_require__("ciQh");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./utils/isComponentType.js
var isComponentType = __webpack_require__("6APn");
var isComponentType_default = /*#__PURE__*/__webpack_require__.n(isComponentType);

// EXTERNAL MODULE: external "lodash/noop"
var noop_ = __webpack_require__("In0u");
var noop_default = /*#__PURE__*/__webpack_require__.n(noop_);

// CONCATENATED MODULE: ./components/Button/Button.jsx
var __jsx = external_react_default.a.createElement;





class Button_Button extends external_react_default.a.Component {
  render() {
    const {
      type,
      disabled,
      onClick,
      title,
      children,
      icon,
      className,
      size,
      width,
      fontSize
    } = this.props;
    const buttonClass = classnames_default()("btn", `btn-${size}`, `btn-${isComponentType_default()(type) ? type : "default"}`, className);
    return __jsx("button", {
      className: buttonClass,
      disabled: disabled,
      onClick: disabled ? noop_default.a : onClick,
      style: {
        width: `${width}`,
        fontSize: `${fontSize}`
      }
    }, icon && !children && __jsx("i", {
      className: icon
    }), __jsx("span", null, title || children));
  }

}

Button_Button.defaultProps = {
  type: "default",
  size: "md",
  disabled: false
};
/* harmony default export */ var components_Button_Button = (Button_Button);
// CONCATENATED MODULE: ./components/Button/index.js

/* harmony default export */ var components_Button = __webpack_exports__["a"] = (components_Button_Button);

/***/ })

};;