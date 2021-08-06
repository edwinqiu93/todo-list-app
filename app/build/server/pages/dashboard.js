module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1yV6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tokenService = _interopRequireDefault(__webpack_require__("BKN8"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const agent = __webpack_require__("nzYB");

async function registerAccount(user) {
  return agent.get().post("/api/user/register", {
    user
  }).then(resp => resp.data);
}

async function login(user) {
  return agent.get().post("/api/user/login", {
    user
  }).then(resp => resp.data);
}

async function postRefreshToken() {
  let respJson = await agent.get().post("/api/user/refresh").then(resp => resp.data);

  _tokenService.default.saveAuthToken(respJson.authToken);

  _tokenService.default.queueCallbackBeforeExpiry(async () => {
    await this.postRefreshToken();
  });

  return respJson;
}

module.exports = {
  registerAccount,
  login,
  postRefreshToken
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u9iw");


/***/ }),

/***/ "4u8I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function createReducer(initState = {}, actionHandler) {
  return function (state = initState, action) {
    if (actionHandler.hasOwnProperty(action.type)) return actionHandler[action.type](state, action);
    return state;
  };
}

module.exports = createReducer;

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

/***/ "BKN8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tlnx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_0__);
// import config from '../config'


let _timeoutId;

const _TEN_SECONDS_IN_MS = 10000;
const TokenService = {
  saveAuthToken(token) {
    window.sessionStorage.setItem(process.env.TOKEN_KEY, token);
  },

  getAuthToken() {
    return window.sessionStorage.getItem(process.env.TOKEN_KEY);
  },

  clearAuthToken() {
    window.sessionStorage.removeItem(process.env.TOKEN_KEY);
  },

  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },

  parseJwt(jwt) {
    return jwt_decode__WEBPACK_IMPORTED_MODULE_0___default()(jwt);
  },

  readJwtToken() {
    return TokenService.parseJwt(TokenService.getAuthToken());
  },

  //payload.exp is time expressed in seconds since epoch 
  _getMsUntilExpiry(payload) {
    return payload.exp * 1000 - Date.now();
  },

  queueCallbackBeforeExpiry(callback) {
    const msUntilExpiry = TokenService._getMsUntilExpiry(TokenService.readJwtToken());

    _timeoutId = setTimeout(callback, msUntilExpiry - _TEN_SECONDS_IN_MS);
  },

  clearCallbackBeforeExpiry() {
    clearTimeout(_timeoutId);
  }

};
/* harmony default export */ __webpack_exports__["default"] = (TokenService);

/***/ }),

/***/ "In0u":
/***/ (function(module, exports) {

module.exports = require("lodash/noop");

/***/ }),

/***/ "KWA5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const agent = __webpack_require__("nzYB");

async function createTask(payload) {
  return agent.get().post("/api/tasks", {
    payload
  }).then(resp => resp.data);
}

async function getAllTasks() {
  return agent.get().get("/api/tasks").then(resp => resp.data);
}

async function deleteTask(id) {
  return agent.get().delete(`/api/tasks/${id}`).then(resp => resp);
}

async function updateTask(id) {
  return agent.get().patch(`/api/tasks/${id}`).then(resp => resp.data);
}

module.exports = {
  createTask,
  getAllTasks,
  deleteTask,
  updateTask
};

/***/ }),

/***/ "LYcp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ modules_action; });

// NAMESPACE OBJECT: ./modules/base/base.action.js
var base_action_namespaceObject = {};
__webpack_require__.r(base_action_namespaceObject);
__webpack_require__.d(base_action_namespaceObject, "setKeywords", function() { return setKeywords; });
__webpack_require__.d(base_action_namespaceObject, "setSidebar", function() { return setSidebar; });
__webpack_require__.d(base_action_namespaceObject, "setUser", function() { return setUser; });

// NAMESPACE OBJECT: ./modules/modal/modal.action.js
var modal_action_namespaceObject = {};
__webpack_require__.r(modal_action_namespaceObject);
__webpack_require__.d(modal_action_namespaceObject, "open", function() { return modal_action_open; });
__webpack_require__.d(modal_action_namespaceObject, "close", function() { return modal_action_close; });

// NAMESPACE OBJECT: ./modules/images/images.action.js
var images_action_namespaceObject = {};
__webpack_require__.r(images_action_namespaceObject);
__webpack_require__.d(images_action_namespaceObject, "open", function() { return images_action_open; });
__webpack_require__.d(images_action_namespaceObject, "close", function() { return images_action_close; });

// NAMESPACE OBJECT: ./modules/sidebar/sidebar.action.js
var sidebar_action_namespaceObject = {};
__webpack_require__.r(sidebar_action_namespaceObject);
__webpack_require__.d(sidebar_action_namespaceObject, "open", function() { return sidebar_action_open; });
__webpack_require__.d(sidebar_action_namespaceObject, "close", function() { return sidebar_action_close; });

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: ./utils/createReducer.js
var createReducer = __webpack_require__("4u8I");
var createReducer_default = /*#__PURE__*/__webpack_require__.n(createReducer);

// EXTERNAL MODULE: ./web.config.js
var web_config = __webpack_require__("yRze");
var web_config_default = /*#__PURE__*/__webpack_require__.n(web_config);

// CONCATENATED MODULE: ./modules/base/base.reducer.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initState = {
  sidebar: {
    show: false
  },
  keywords: web_config_default.a.keywords,
  user: null,
  access_token: null
};
const actionHandlers = {
  SET_USER: (state, action) => {
    const result = _objectSpread({}, state);

    result.user = action.payload.user;
    result.access_token = action.payload.access_token;
    return result;
  },
  SET_KEYWORDS: (state, action) => {
    const result = _objectSpread({}, state);

    result.keywords = action.payload.keywords ? action.payload.keywords : web_config_default.a.keywords;
    return result;
  }
};
/* harmony default export */ var base_reducer = (createReducer_default()(initState, actionHandlers));
// CONCATENATED MODULE: ./modules/modal/modal.reducer.js
function modal_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function modal_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { modal_reducer_ownKeys(Object(source), true).forEach(function (key) { modal_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { modal_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function modal_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const getInitState = () => ({
  show: false,
  tag: null,
  payload: {}
});

const modal_reducer_initState = getInitState();
const modal_reducer_actionHandlers = {
  OPEN_MODAL: (state, action) => {
    const result = modal_reducer_objectSpread({}, state);

    const {
      tag,
      payload = {}
    } = action.payload;
    result.show = true;
    result.tag = tag;
    result.payload = payload;
    return result;
  },
  CLOSE_MODAL: () => modal_reducer_initState
};
/* harmony default export */ var modal_reducer = (createReducer_default()(modal_reducer_initState, modal_reducer_actionHandlers));
// CONCATENATED MODULE: ./modules/images/images.reducer.js
function images_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function images_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { images_reducer_ownKeys(Object(source), true).forEach(function (key) { images_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { images_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function images_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const images_reducer_getInitState = () => ({
  images: [],
  show: false,
  index: 0
});

const images_reducer_initState = images_reducer_getInitState();
const images_reducer_actionHandlers = {
  OPEN_REACT_IMAGES: (state, action) => {
    const result = images_reducer_objectSpread({}, state);

    const {
      images,
      index = 0
    } = action.payload;
    result.show = true;
    result.images = images;
    result.index = index;
    return result;
  },
  CLOSE_REACT_IMAGES: () => images_reducer_getInitState()
};
/* harmony default export */ var images_reducer = (createReducer_default()(images_reducer_initState, images_reducer_actionHandlers));
// CONCATENATED MODULE: ./modules/sidebar/sidebar.reducer.js
function sidebar_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function sidebar_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { sidebar_reducer_ownKeys(Object(source), true).forEach(function (key) { sidebar_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { sidebar_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function sidebar_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const sidebar_reducer_getInitState = () => ({
  show: false,
  payload: {}
});

const sidebar_reducer_initState = sidebar_reducer_getInitState();
const sidebar_reducer_actionHandlers = {
  OPEN_SIDEBAR: (state, action) => {
    const result = sidebar_reducer_objectSpread({}, state);

    result.show = true;
    result.payload = action.payload.payload;
    return result;
  },
  CLOSE_SIDEBAR: () => sidebar_reducer_getInitState()
};
/* harmony default export */ var sidebar_reducer = (createReducer_default()(sidebar_reducer_initState, sidebar_reducer_actionHandlers));
// CONCATENATED MODULE: ./modules/base/base.action.js


const setKeywords = keywords => ({
  type: "SET_KEYWORDS",
  payload: {
    keywords
  }
});
const setSidebar = show => ({
  type: "SET_SIDEBAR",
  payload: {
    show
  }
});
const setUser = (user, access_token) => ({
  type: "SET_USER",
  payload: {
    user,
    access_token
  }
});
// CONCATENATED MODULE: ./modules/modal/modal.action.js


function modal_action_open(tag, payload = {}) {
  return {
    type: "OPEN_MODAL",
    payload: {
      tag,
      payload
    }
  };
}
function modal_action_close() {
  return {
    type: "CLOSE_MODAL"
  };
}
// CONCATENATED MODULE: ./modules/images/images.action.js


function images_action_open(images, index = 0) {
  return {
    type: "OPEN_REACT_IMAGES",
    payload: {
      images,
      index
    }
  };
}
function images_action_close() {
  return {
    type: "CLOSE_REACT_IMAGES"
  };
}
// CONCATENATED MODULE: ./modules/sidebar/sidebar.action.js


function sidebar_action_open(payload = {}) {
  return {
    type: "OPEN_SIDEBAR",
    payload
  };
}
function sidebar_action_close() {
  return {
    type: "CLOSE_SIDEBAR"
  };
}
// CONCATENATED MODULE: ./modules/index.js











const reducers = Object(external_redux_["combineReducers"])({
  base: base_reducer,
  modal: modal_reducer,
  images: images_reducer,
  sidebar: sidebar_reducer
});
const modules_action = {
  base: base_action_namespaceObject,
  modal: modal_action_namespaceObject,
  images: images_action_namespaceObject,
  sidebar: sidebar_action_namespaceObject
};
/* harmony default export */ var modules = __webpack_exports__["b"] = (reducers);

/***/ }),

/***/ "N6uc":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"inline-meta": "Panel_inline-meta__1VVxt",
	"control": "Panel_control__3iWwK"
};


/***/ }),

/***/ "TXK0":
/***/ (function(module, exports) {

module.exports = require("moment-timezone");

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "bMwp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("nzYB");
module.exports.user = __webpack_require__("1yV6");
module.exports.tasks = __webpack_require__("KWA5");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iZE/":
/***/ (function(module, exports) {

module.exports = require("object-path");

/***/ }),

/***/ "nzYB":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tokenService = _interopRequireDefault(__webpack_require__("BKN8"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const axios = __webpack_require__("zr5I");

function get() {
  const access_token = _tokenService.default.getAuthToken();

  const headers = {};
  if (access_token) headers["Authorization"] = `Bearer ${access_token}`;
  const agent = axios.create({
    baseURL: "",
    headers
  });
  return agent;
}

module.exports.get = get;

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "u9iw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./utils/classnames.js
var classnames = __webpack_require__("ciQh");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./utils/isComponentType.js
var isComponentType = __webpack_require__("6APn");
var isComponentType_default = /*#__PURE__*/__webpack_require__.n(isComponentType);

// EXTERNAL MODULE: external "react-spring/renderprops.cjs"
var renderprops_cjs_ = __webpack_require__("z2Rc");

// EXTERNAL MODULE: ./components/Panel/Panel.module.scss
var Panel_module = __webpack_require__("N6uc");
var Panel_module_default = /*#__PURE__*/__webpack_require__.n(Panel_module);

// CONCATENATED MODULE: ./components/Panel/Panel.jsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // panel-[primary, success, info, warning, danger]
// panel-group (remove )

class Panel_Panel extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      collapsed: false
    };
  }

  render() {
    const {
      show,
      collapsed
    } = this.state;
    if (!show) return __jsx(external_react_default.a.Fragment, null);
    const {
      type,
      icon,
      title,
      subtitle,
      inlineSubtitle,
      loading,
      className,
      control,
      onRefresh,
      border,
      borderPos,
      padding,
      footer,
      headerClassName,
      bodyClassName,
      footerClassName
    } = this.props;
    const panelClass = classnames_default()("panel", // control && collapsed && "panel-collapsed",
    isComponentType_default()(type) && `panel-${type}`, isComponentType_default()(border) && `border-${borderPos}-${border}`, className);
    const subtitleClass = classnames_default()("meta", inlineSubtitle ? Panel_module_default.a["inline-meta"] : "display-block");
    const bodyClass = classnames_default()("panel-body", !padding && "no-padding", bodyClassName);
    const headerClass = classnames_default()("panel-heading", headerClassName);
    const footerClass = classnames_default()("panel-footer", footerClassName); // console.log("props", this.props.headerClassName);

    return __jsx("div", {
      className: panelClass
    }, __jsx("header", {
      className: headerClass
    }, icon && __jsx("i", {
      className: classnames_default()("icon", icon)
    }), title, subtitle && __jsx("span", {
      className: subtitleClass
    }, " ", subtitle, " "), control && __jsx("ul", {
      className: Panel_module_default.a.control
    }, __jsx("li", null, __jsx("i", {
      className: `icon-arrow-${collapsed ? "up" : "down"}12`,
      onClick: () => this.setState({
        collapsed: !collapsed
      })
    })), onRefresh && __jsx("li", null, __jsx("i", {
      className: "icon-sync",
      onClick: onRefresh
    })), __jsx("li", null, __jsx("i", {
      className: "icon-cross3",
      onClick: () => this.setState({
        show: !show
      })
    })))), loading && __jsx("div", {
      className: "panel-body panel-body-loading"
    }, __jsx("img", {
      src: "/loading.svg"
    })), !loading && __jsx(external_react_default.a.Fragment, null, __jsx(renderprops_cjs_["Spring"], {
      from: {
        display: "block",
        opacity: 1
      },
      to: {
        display: collapsed ? "none" : "block",
        opacity: collapsed ? 0 : 1
      },
      config: _objectSpread(_objectSpread({}, renderprops_cjs_["config"].default), {}, {
        duration: 250
      })
    }, style => __jsx(renderprops_cjs_["animated"].div, {
      style: style,
      className: bodyClass
    }, this.props.children)), !collapsed && footer && __jsx("div", {
      className: footerClass
    }, footer)));
  }

}

Panel_Panel.defaultProps = {
  borderPos: "top",
  padding: true,
  loading: false
};
/* harmony default export */ var components_Panel_Panel = (Panel_Panel);
// CONCATENATED MODULE: ./components/Panel/index.js

/* harmony default export */ var components_Panel = (components_Panel_Panel);
// EXTERNAL MODULE: ./components/Button/index.js + 1 modules
var Button = __webpack_require__("co3k");

// EXTERNAL MODULE: external "object-path"
var external_object_path_ = __webpack_require__("iZE/");
var external_object_path_default = /*#__PURE__*/__webpack_require__.n(external_object_path_);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__("bMwp");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external "lodash/noop"
var noop_ = __webpack_require__("In0u");
var noop_default = /*#__PURE__*/__webpack_require__.n(noop_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./modules/index.js + 8 modules
var modules = __webpack_require__("LYcp");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");

// EXTERNAL MODULE: external "moment-timezone"
var external_moment_timezone_ = __webpack_require__("TXK0");

// CONCATENATED MODULE: ./pages.components/dashboard/dashboard.jsx
var _dec, _class;

var dashboard_jsx = external_react_default.a.createElement;

function dashboard_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function dashboard_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { dashboard_ownKeys(Object(source), true).forEach(function (key) { dashboard_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { dashboard_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function dashboard_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const mapDispatchToProps = dispatch => ({
  openDelete: payload => dispatch(modules["a" /* action */].modal.open("DELETETASK", payload))
});

let dashboard_Dashboard = (_dec = Object(external_react_redux_["connect"])(null, mapDispatchToProps), _dec(_class = class Dashboard extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    dashboard_defineProperty(this, "state", {
      loaded: false,
      loading: false,
      data: [],
      payload: this.getInitialPayload()
    });

    dashboard_defineProperty(this, "handleChange", path => value => {
      const state = dashboard_objectSpread({}, this.state);

      external_object_path_default.a.set(state, path, value);
      this.setState(state);
    });

    dashboard_defineProperty(this, "componentDidMount", async () => {
      try {
        this.setState({
          loading: true
        });
        let data = await api["tasks"].getAllTasks();
        this.setState({
          loaded: true,
          loading: false,
          data
        });
      } catch (error) {
        var _error$response$data, _error$response;

        console.error(error);
        window.alert((_error$response$data = (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.data) !== null && _error$response$data !== void 0 ? _error$response$data : error.message);
        this.setState({
          loading: false
        });
      }
    });

    dashboard_defineProperty(this, "createTask", async () => {
      let {
        task_title
      } = this.state.payload;

      if (!task_title) {
        return window.alert("Please fill in a Task Title and Resubmit.");
      }

      try {
        this.setState({
          loading: true
        });
        let returnedItem = await api["tasks"].createTask(this.state.payload);
        this.setState({
          loading: false,
          data: [...this.state.data, returnedItem],
          payload: this.getInitialPayload()
        });
      } catch (error) {
        var _error$response$data2, _error$response2;

        console.error(error);
        window.alert((_error$response$data2 = (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data) !== null && _error$response$data2 !== void 0 ? _error$response$data2 : error.message);
        this.setState({
          loading: false
        });
      }
    });

    dashboard_defineProperty(this, "updateComplete", async id => {
      try {
        this.setState({
          loading: true
        });
        let returnedItem = await api["tasks"].updateTask(id);
        this.setState({
          loading: false,
          data: this.state.data.map(task => task.task_id == returnedItem.task_id ? returnedItem : task)
        });
      } catch (error) {
        var _error$response$data3, _error$response3;

        console.error(error);
        window.alert((_error$response$data3 = (_error$response3 = error.response) === null || _error$response3 === void 0 ? void 0 : _error$response3.data) !== null && _error$response$data3 !== void 0 ? _error$response$data3 : error.message);
        this.setState({
          loading: false
        });
      }
    });
  }

  getInitialPayload() {
    return {
      task_title: "",
      task_description: "",
      due_date: "",
      completed: "N"
    };
  }

  render() {
    const {
      loading,
      loaded,
      payload,
      data
    } = this.state;
    return dashboard_jsx("div", {
      className: "container-fluid",
      id: "dashboard_top",
      style: {
        paddingBottom: "2rem",
        maxWidth: "1300px"
      }
    }, dashboard_jsx(components_Panel, {
      border: "primary",
      loading: loading,
      title: "Create Task",
      className: "panel__Centered",
      icon: "fa fa-plus-circle",
      footer: dashboard_jsx("div", {
        className: "text-right"
      }, dashboard_jsx(Button["a" /* default */], {
        type: "default",
        icon: "fa fa-trash",
        title: "Clear",
        onClick: () => this.setState({
          payload: this.getInitialPayload()
        }),
        disabled: loading,
        size: "sm"
      }), dashboard_jsx(Button["a" /* default */], {
        type: "success",
        icon: "fa fa-search",
        className: "margin-left-12",
        title: "Create Task",
        onClick: this.createTask,
        disabled: loading,
        size: "sm"
      }))
    }, dashboard_jsx("div", {
      className: "row"
    }, dashboard_jsx("div", {
      className: "col-sm-6"
    }, dashboard_jsx("div", {
      className: "form-group"
    }, dashboard_jsx("label", null, " Task Title ", dashboard_jsx("span", {
      className: "meta-red"
    }, "Required")), dashboard_jsx("input", {
      className: "form-control",
      placeholder: "",
      value: payload.task_title,
      onChange: event => this.handleChange("payload.task_title")(event.target.value),
      required: true
    }))), dashboard_jsx("div", {
      className: "col-sm-6"
    }, dashboard_jsx("div", {
      className: "form-group"
    }, dashboard_jsx("label", null, " Due Date "), dashboard_jsx("input", {
      className: "form-control",
      type: "datetime-local",
      value: payload.due_date,
      onChange: event => this.handleChange("payload.due_date")(event.target.value)
    })))), dashboard_jsx("div", {
      className: "row"
    }, dashboard_jsx("div", {
      className: "col-sm-12"
    }, dashboard_jsx("div", {
      className: "form-group"
    }, dashboard_jsx("label", null, "Description"), dashboard_jsx("textarea", {
      className: "form-control",
      placeholder: "",
      rows: "2",
      value: payload.task_description,
      onChange: event => this.handleChange("payload.task_description")(event.target.value)
    }))))), dashboard_jsx("div", {
      className: "panel-flex-container"
    }, dashboard_jsx(components_Panel, {
      icon: "icon-history",
      border: "primary",
      title: "Task List",
      loading: loading,
      icon: "icon-list2"
    }, dashboard_jsx("ul", {
      className: "task-ul"
    }, loaded && !loading && !!data.length && data.map((task, i) => {
      if (task.completed == "N") {
        let deletePayload = {
          task_id: task.task_id,
          update: id => {
            this.setState({
              data: this.state.data.filter(task => task.task_id !== id)
            });
          }
        };
        return dashboard_jsx("div", {
          className: "task-section",
          key: i
        }, dashboard_jsx("div", {
          style: {
            display: "flex",
            justifyContent: "space-between"
          }
        }, dashboard_jsx("li", {
          className: "task-results-list"
        }, dashboard_jsx("strong", null, " ", task.task_title)), dashboard_jsx("div", {
          className: "btn-div"
        }, dashboard_jsx("i", {
          className: "btn-icons icon-circle",
          onClick: () => this.updateComplete(task.task_id)
        }), dashboard_jsx("i", {
          onClick: this.handleDeleteForm,
          className: "btn-icons fa fa-trash",
          disabled: loading,
          onClick: loading ? noop_default.a : () => this.props.openDelete(deletePayload)
        }))), dashboard_jsx("div", {
          className: "task-info-div " + (!task.due_date ? "hidden" : "")
        }, dashboard_jsx("span", {
          className: "task-details-title"
        }, "Due Date"), dashboard_jsx("i", {
          className: "fa fa-caret-right"
        }), dashboard_jsx("span", {
          className: "task-details"
        }, task.due_date)), dashboard_jsx("div", {
          className: "task-info-div " + (!task.task_description ? "hidden" : "")
        }, dashboard_jsx("span", {
          className: "task-details-title"
        }, "Description"), dashboard_jsx("i", {
          className: "fa fa-caret-right"
        }), dashboard_jsx("span", {
          className: "task-details"
        }, task.task_description)));
      }
    }))), dashboard_jsx(components_Panel, {
      icon: "icon-history",
      border: "primary",
      title: "Completed",
      loading: loading,
      icon: "fa fa-check-square-o"
    }, dashboard_jsx("ul", {
      className: "task-ul"
    }, loaded && !loading && !!data.length && data.map((task, i) => {
      if (task.completed == "Y") {
        return dashboard_jsx("div", {
          className: "task-section",
          key: i
        }, dashboard_jsx("div", {
          style: {
            display: "flex",
            justifyContent: "space-between"
          }
        }, dashboard_jsx("li", {
          className: "task-results-list line-through"
        }, dashboard_jsx("strong", null, " ", task.task_title)), dashboard_jsx("div", {
          className: "btn-div"
        }, dashboard_jsx("i", {
          className: "icon-checkmark-circle"
        }))), dashboard_jsx("div", {
          className: "task-info-div " + (!task.due_date ? "hidden" : "")
        }, dashboard_jsx("span", {
          className: "task-details-title line-through"
        }, "Due Date"), dashboard_jsx("i", {
          className: "fa fa-caret-right"
        }), dashboard_jsx("span", {
          className: "task-details"
        }, task.due_date)), dashboard_jsx("div", {
          className: "task-info-div " + (!task.task_description ? "hidden" : "")
        }, dashboard_jsx("span", {
          className: "task-details-title line-through"
        }, "Description"), dashboard_jsx("i", {
          className: "fa fa-caret-right"
        }), dashboard_jsx("span", {
          className: "task-details"
        }, task.task_description)));
      }
    })))));
  }

}) || _class);
/* harmony default export */ var dashboard = (dashboard_Dashboard);
// CONCATENATED MODULE: ./pages.components/dashboard/index.js

/* harmony default export */ var pages_components_dashboard = (dashboard);
// CONCATENATED MODULE: ./pages/dashboard.js

/* harmony default export */ var pages_dashboard = __webpack_exports__["default"] = (pages_components_dashboard);

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "yRze":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _process$env$DOMAIN;

module.exports = {
  title: "TODO List App",
  description: "TODO List App",
  keywords: "todo, list",
  canonical: (_process$env$DOMAIN = process.env.DOMAIN) !== null && _process$env$DOMAIN !== void 0 ? _process$env$DOMAIN : "http://localhost:3100"
};

/***/ }),

/***/ "z2Rc":
/***/ (function(module, exports) {

module.exports = require("react-spring/renderprops.cjs");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });