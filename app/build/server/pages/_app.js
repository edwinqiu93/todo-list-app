module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"8":"99999c8a03a9ad66a542"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1Lgf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const pages = ["Main", {
  type: "page",
  name: "To Do List",
  icon: "fa fa-home",
  page: "/dashboard"
}];
module.exports = pages.reduce((prev, curr) => {
  if (typeof curr === "string") return prev;
  if (Array.isArray(curr)) return [].concat(prev, curr);
  prev.push(curr);
  return prev;
}, []);
module.exports.sidebar = pages;

/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__("8xkj");

// EXTERNAL MODULE: external "react-decoration"
var external_react_decoration_ = __webpack_require__("UwFn");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-modal"
var external_react_modal_ = __webpack_require__("7koQ");
var external_react_modal_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_);

// EXTERNAL MODULE: ./modules/index.js + 8 modules
var modules = __webpack_require__("LYcp");

// CONCATENATED MODULE: ./components/Modal/Modal.jsx
var _dec, _class;

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





external_react_modal_default.a.setAppElement("body");
let Modal_Modal = (_dec = Object(external_react_redux_["connect"])( // mapStateToProps
state => ({
  show: state.modal.show,
  tag: state.modal.tag,
  payload: state.modal.payload
}), // mapDispatchToProps
dispatch => ({
  close: () => dispatch(modules["a" /* action */].modal.close())
})), _dec(_class = class Modal extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      modals: {}
    };
  }

  async componentDidMount() {
    const modals = await __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, "3F0T"));
    this.setState({
      modals: modals
    });
  }

  render() {
    const {
      modals
    } = this.state;
    const {
      show,
      tag,
      payload,
      close
    } = this.props;
    let Modal = modals[tag];
    if (!Modal) return __jsx(external_react_default.a.Fragment, null);
    return __jsx(external_react_modal_default.a, {
      isOpen: show,
      className: "modal-container",
      overlayClassName: "modal-backdrop",
      closeTimeoutMS: 200
    }, __jsx(Modal, _extends({}, payload, {
      close: close
    })));
  }

}) || _class);
/* harmony default export */ var components_Modal_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./components/Modal/index.js

/* harmony default export */ var components_Modal = (components_Modal_Modal);
// EXTERNAL MODULE: external "react-images"
var external_react_images_ = __webpack_require__("U6N4");
var external_react_images_default = /*#__PURE__*/__webpack_require__.n(external_react_images_);

// CONCATENATED MODULE: ./components/ReactImages/ReactImages.jsx
var ReactImages_dec, ReactImages_class;

var ReactImages_jsx = external_react_default.a.createElement;




let ReactImages_ReactImages = (ReactImages_dec = Object(external_react_redux_["connect"])( // mapStateToProps
state => ({
  images: state.images.images,
  show: state.images.show,
  index: state.images.index
}), // mapDispatchToProps
dispatch => ({
  close: () => dispatch(modules["a" /* action */].images.close())
})), ReactImages_dec(ReactImages_class = class ReactImages extends external_react_default.a.Component {
  render() {
    const {
      images,
      show,
      index,
      close
    } = this.props;
    return ReactImages_jsx(external_react_images_["ModalGateway"], null, show && ReactImages_jsx(external_react_images_["Modal"], {
      onClose: close
    }, ReactImages_jsx(external_react_images_default.a, {
      views: images,
      currentIndex: index
    })));
  }

}) || ReactImages_class);
/* harmony default export */ var components_ReactImages_ReactImages = (ReactImages_ReactImages);
// CONCATENATED MODULE: ./components/ReactImages/index.js

/* harmony default export */ var components_ReactImages = (components_ReactImages_ReactImages);
// EXTERNAL MODULE: external "react-sidebar"
var external_react_sidebar_ = __webpack_require__("x9QG");
var external_react_sidebar_default = /*#__PURE__*/__webpack_require__.n(external_react_sidebar_);

// CONCATENATED MODULE: ./components/ReactSidebar/ReactSidebar.jsx
var ReactSidebar_dec, ReactSidebar_class, _class2;

var ReactSidebar_jsx = external_react_default.a.createElement;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }







let ReactSidebar_ReactSidebar = (ReactSidebar_dec = Object(external_react_redux_["connect"])( // mapStateToProps
state => ({
  show: state.sidebar.show,
  payload: state.sidebar.payload
}), // mapDispatchToProps
(dispatch, ownProps) => ({
  open: () => dispatch(modules["a" /* action */].sidebar.open(ownProps.payload)),
  close: () => dispatch(modules["a" /* action */].sidebar.close())
})), ReactSidebar_dec(ReactSidebar_class = (_class2 = class ReactSidebar extends external_react_default.a.Component {
  renderSidebar() {
    return ReactSidebar_jsx("b", null, " Sidebar Content ");
  }

  render() {
    const {
      show,
      close,
      open
    } = this.props;
    return ReactSidebar_jsx(external_react_sidebar_default.a, {
      sidebar: ReactSidebar_jsx(this.renderSidebar, null),
      open: show,
      onSetOpen: () => show ? close() : open()
    }, this.props.children);
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "renderSidebar", [external_react_decoration_["autobind"]], Object.getOwnPropertyDescriptor(_class2.prototype, "renderSidebar"), _class2.prototype)), _class2)) || ReactSidebar_class);
/* harmony default export */ var components_ReactSidebar_ReactSidebar = (ReactSidebar_ReactSidebar);
// CONCATENATED MODULE: ./components/ReactSidebar/index.js

/* harmony default export */ var components_ReactSidebar = (components_ReactSidebar_ReactSidebar);
// EXTERNAL MODULE: external "path-to-regexp"
var external_path_to_regexp_ = __webpack_require__("nXVM");

// EXTERNAL MODULE: ./constants/pages.js
var pages = __webpack_require__("1Lgf");
var pages_default = /*#__PURE__*/__webpack_require__.n(pages);

// EXTERNAL MODULE: ./api/index.js
var api = __webpack_require__("bMwp");

// EXTERNAL MODULE: ./components/Main/Main.module.scss
var Main_module = __webpack_require__("F2ho");
var Main_module_default = /*#__PURE__*/__webpack_require__.n(Main_module);

// EXTERNAL MODULE: ./services/token-service.js
var token_service = __webpack_require__("BKN8");

// EXTERNAL MODULE: ./services/idle-service.js
var idle_service = __webpack_require__("PRzg");

// CONCATENATED MODULE: ./components/Main/Main.jsx
var Main_dec, Main_class;

var Main_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const ignorePaths = ["/demo", "/register"];
let Main_Main = (Main_dec = Object(external_react_redux_["connect"])(), Object(router_["withRouter"])(Main_class = Main_dec(Main_class = class Main extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loaded: false,
      sidebar: false
    });

    _defineProperty(this, "logout", () => {
      token_service["default"].clearAuthToken();
      token_service["default"].clearCallbackBeforeExpiry();
      idle_service["a" /* default */].unRegisterIdleResets();
      return router_default.a.replace("/");
    });

    _defineProperty(this, "isCurrentDirectory", page => {
      const pathname = this.props.router.pathname;
      return page.page && Object(external_path_to_regexp_["pathToRegexp"])(page.page).exec(pathname);
    });

    _defineProperty(this, "getCurrentPage", () => {
      const _pages = pages_default.a.sidebar;
      const pathname = this.props.router.pathname;

      for (const page of _pages.filter(item => typeof item !== "string")) {
        if (page.page && Object(external_path_to_regexp_["pathToRegexp"])(page.page).exec(pathname)) return page;

        if (page.menu) {
          for (const item of page.menu) {
            if (Object(external_path_to_regexp_["pathToRegexp"])(item.page).exec(pathname)) return item;
          }
        }

        if (page.sub_pages) {
          for (const item of page.sub_pages) {
            if (Object(external_path_to_regexp_["pathToRegexp"])(item.page).exec(pathname)) return item;
          }
        }
      }
    });

    _defineProperty(this, "getSidebar", () => {
      let sidebar = JSON.parse(JSON.stringify(pages_default.a.sidebar)); // if (process.env.NEXT_PUBLIC_PERMISSION_ENABLED !== "true")
      // 	return sidebar;

      const user = this.props.user;
      const polices = (user === null || user === void 0 ? void 0 : user.permissions) || [];
      sidebar = sidebar.map(page => {
        if (page.type == "dropdown") {
          page.menu = page.menu.filter(page => {
            if (page.permissions && page.permissions.length > 0) {
              return page.permissions.every(permission => polices.includes(permission));
            }

            return true;
          });
        }

        return page;
      }).filter(page => {
        if (page.type == "dropdown") {
          return page.menu.length > 0;
        } else if (page.permissions && page.permissions.length > 0) {
          return page.permissions.every(permission => polices.includes(permission));
        }

        return true;
      });
      return sidebar;
    });

    _defineProperty(this, "renderSidebar", () => {
      return Main_jsx(external_react_default.a.Fragment, null, Main_jsx("ul", {
        className: Main_module_default.a["sidebar-list-narrow"]
      }, this.getSidebar().map((item, index) => {
        if (typeof item == "string") return Main_jsx(external_react_default.a.Fragment, {
          key: index
        });

        if (item.type == "dropdown") {
          var _item$menu;

          return Main_jsx("li", {
            key: index,
            className: Main_module_default.a["dropdown-narrow"]
          }, Main_jsx("a", null, Main_jsx("i", {
            className: item.icon
          })), Main_jsx("ul", {
            className: Main_module_default.a["sidebar-list"]
          }, ((_item$menu = item.menu) !== null && _item$menu !== void 0 ? _item$menu : []).map((item, index) => Main_jsx("li", {
            key: index,
            className: this.isCurrentDirectory(item) ? Main_module_default.a["active-item"] : void 0
          }, Main_jsx(link_default.a, {
            href: item.page
          }, Main_jsx("a", null, Main_jsx("i", {
            className: item.icon
          }), Main_jsx("span", null, item.name)))))));
        }

        return Main_jsx("li", {
          key: index,
          className: this.isCurrentDirectory(item) ? Main_module_default.a["active-item"] : void 0
        }, Main_jsx(link_default.a, {
          href: item.page
        }, Main_jsx("a", null, Main_jsx("i", {
          className: item.icon
        }))));
      })), Main_jsx("ul", {
        className: Main_module_default.a["sidebar-list-narrow"]
      }, Main_jsx("li", {
        onClick: this.logout
      }, Main_jsx("a", null, Main_jsx("i", {
        className: "fa fa-sign-out"
      })))));
    });

    _defineProperty(this, "renderFullSidebar", () => {
      return Main_jsx(external_react_default.a.Fragment, null, Main_jsx("ul", {
        className: Main_module_default.a["sidebar-list"]
      }, this.getSidebar().map((item, index) => {
        if (typeof item == "string") return Main_jsx("li", {
          key: index,
          className: Main_module_default.a.catalog
        }, Main_jsx("span", null, item));

        if (item.type == "dropdown") {
          var _item$menu2;

          return Main_jsx("li", {
            key: index,
            className: Main_module_default.a.dropdown
          }, Main_jsx("a", null, Main_jsx("span", null, Main_jsx("i", {
            className: item.icon
          }), Main_jsx("span", null, item.name)), Main_jsx("i", {
            className: "fa fa-angle-right"
          })), Main_jsx("ul", {
            className: Main_module_default.a["sidebar-list"]
          }, ((_item$menu2 = item.menu) !== null && _item$menu2 !== void 0 ? _item$menu2 : []).map((item, index) => Main_jsx("li", {
            key: index,
            className: this.isCurrentDirectory(item) ? Main_module_default.a["active-item"] : void 0
          }, Main_jsx(link_default.a, {
            href: item.page
          }, Main_jsx("a", null, Main_jsx("i", {
            className: item.icon
          }), Main_jsx("span", null, item.name)))))));
        }

        return Main_jsx("li", {
          key: index,
          className: this.isCurrentDirectory(item) ? Main_module_default.a["active-item"] : void 0
        }, Main_jsx(link_default.a, {
          href: item.page
        }, Main_jsx("a", null, Main_jsx("i", {
          className: item.icon
        }), Main_jsx("span", null, item.name))));
      })), Main_jsx("ul", {
        className: Main_module_default.a["sidebar-list"]
      }, Main_jsx("li", {
        onClick: this.logout
      }, Main_jsx("a", null, Main_jsx("i", {
        className: "fa fa-sign-out"
      }), Main_jsx("span", null, "Sign out")))));
    });

    _defineProperty(this, "renderContent", () => {
      const {
        sidebar
      } = this.state;
      const {
        pathname
      } = this.props.router;

      if (["/", "/login", "/demo", "/register"].includes(pathname)) {
        return this.props.children;
      }

      const currentPage = this.getCurrentPage();
      return Main_jsx(external_react_default.a.Fragment, null, Main_jsx("nav", {
        className: Main_module_default.a.navbar
      }, Main_jsx("div", {
        className: Main_module_default.a[sidebar ? "navbar-header" : "navbar-header-narrow"]
      }), Main_jsx("div", {
        className: Main_module_default.a["navbar-main"],
        onClick: () => this.setState({
          sidebar: !sidebar
        })
      }, Main_jsx("i", {
        className: "fa fa-align-left pointer"
      }), Main_jsx("h3", null, currentPage === null || currentPage === void 0 ? void 0 : currentPage.name))), Main_jsx("div", {
        className: Main_module_default.a[sidebar ? "page-container" : "page-container-narrow"] + " error-page"
      }, Main_jsx("aside", {
        className: sidebar ? Main_module_default.a.sidebar : Main_module_default.a["sidebar-narrow"]
      }, sidebar ? this.renderFullSidebar() : this.renderSidebar()), Main_jsx("div", {
        className: Main_module_default.a["page-content"]
      }, this.props.children)));
    });
  }

  render() {
    const {
      loaded
    } = this.state;
    const pathname = this.props.router.pathname;
    if (ignorePaths.includes(pathname)) return this.renderContent();
    return Main_jsx(external_react_default.a.Fragment, null, Main_jsx(components_ReactSidebar, null, this.renderContent()), Main_jsx(components_Modal, null), Main_jsx(components_ReactImages, null));
  }

}) || Main_class) || Main_class);
/* harmony default export */ var components_Main_Main = (Main_Main);
// CONCATENATED MODULE: ./components/Main/index.js

/* harmony default export */ var components_Main = (components_Main_Main);
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// CONCATENATED MODULE: ./store.js


 // import logger from "redux-logger";

let store_store;

function makeStore(initialState) {
  store_store = Object(external_redux_["createStore"])(modules["b" /* default */], initialState, Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a)); // console.log("STORE", store);

  return store_store;
}

function getStore() {
  return store_store;
}
/* harmony default export */ var store_0 = (makeStore);
// EXTERNAL MODULE: ./web.config.js
var web_config = __webpack_require__("yRze");
var web_config_default = /*#__PURE__*/__webpack_require__.n(web_config);

// EXTERNAL MODULE: ./styles/index.scss
var styles = __webpack_require__("Gpft");

// EXTERNAL MODULE: ./node_modules/react-day-picker/lib/style.css
var style = __webpack_require__("UNSI");

// CONCATENATED MODULE: ./pages/_app.js
var _app_dec, _app_class;


var _app_jsx = external_react_default.a.createElement;

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















external_moment_default.a.prototype.standard = function () {
  return this.format("Do MMMM, YYYY hh:mm a");
};

external_moment_default.a.prototype.shortStandard = function () {
  return this.format("Do MMM, hh:mm a");
};

router_default.a.events.on("routeChangeComplete", url => {
  if (window && window._paq) {
    window._paq.push(["setCustomUrl", url]);

    window._paq.push(["setDocumentTitle", document.title]);

    window._paq.push(["trackPageView"]);
  } // $("#main").animate({ scrollTop: 0 }, 200);

});
let _app_App = (_app_dec = external_next_redux_wrapper_default()(store_0), _app_dec(_app_class = class App extends app_default.a {
  constructor(...args) {
    super(...args);

    _app_defineProperty(this, "logoutFromIdle", () => {
      token_service["default"].clearAuthToken();
      token_service["default"].clearCallbackBeforeExpiry();
      idle_service["a" /* default */].unRegisterIdleResets();
      return router_default.a.push("/");
    });
  }

  componentDidMount() {
    idle_service["a" /* default */].setIdleCallback(this.logoutFromIdle);

    if (token_service["default"].hasAuthToken()) {
      idle_service["a" /* default */].registerIdleTimerResets();
      token_service["default"].queueCallbackBeforeExpiry(async () => {
        await api["user"].postRefreshToken;
      });
    }
  }

  componentWillUnmount() {
    idle_service["a" /* default */].unRegisterIdleResets();
    token_service["default"].clearCallbackBeforeExpiry();
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(head_default.a, null, _app_jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    })), _app_jsx(external_next_seo_["DefaultSeo"], {
      title: "Home",
      titleTemplate: "%s | " + web_config_default.a.title,
      description: web_config_default.a.description,
      canonical: web_config_default.a.canonical,
      additionalMetaTags: [{
        name: "keywords",
        content: web_config_default.a.keywords
      }]
    }), _app_jsx(external_react_redux_["Provider"], {
      store: store
    }, _app_jsx(components_Main, pageProps, _app_jsx(Component, pageProps))));
  }

}) || _app_class);
/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_App);

/***/ }),

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

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7koQ":
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8xkj":
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "F2ho":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"navbar": "Main_navbar__3I0DK",
	"navbar-header": "Main_navbar-header__2Erhw",
	"navbar-header-narrow": "Main_navbar-header-narrow__1yB3p",
	"navbar-main": "Main_navbar-main__2jj03",
	"page-container": "Main_page-container__10QYa",
	"page-container-narrow": "Main_page-container-narrow__9ueWq",
	"catalog": "Main_catalog__1QepU",
	"sidebar": "Main_sidebar__2pva0",
	"sidebar-narrow": "Main_sidebar-narrow__1khsJ",
	"sidebar-list": "Main_sidebar-list__bsGVd",
	"sidebar-list-narrow": "Main_sidebar-list-narrow__2v83K",
	"dropdown": "Main_dropdown__2Ie4e",
	"dropdown-narrow": "Main_dropdown-narrow__1-oQE",
	"active-item": "Main_active-item__2sg-4",
	"loading": "Main_loading__-UJrb"
};


/***/ }),

/***/ "Gpft":
/***/ (function(module, exports) {



/***/ }),

/***/ "In0u":
/***/ (function(module, exports) {

module.exports = require("lodash/noop");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "PRzg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let _timeoutId;

let _idleCallback = null;
let _notIdleEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];

let _FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

const IdleService = {
  setIdleCallback(idleCallback) {
    _idleCallback = idleCallback;
  },

  resetIdleTimer(ev) {
    clearTimeout(_timeoutId);
    _timeoutId = setTimeout(_idleCallback, _FIVE_MINUTES_IN_MS);
  },

  registerIdleTimerResets() {
    _notIdleEvents.forEach(event => document.addEventListener(event, IdleService.resetIdleTimer, true));
  },

  unRegisterIdleResets() {
    clearTimeout(_timeoutId);

    _notIdleEvents.forEach(event => document.removeEventListener(event, IdleService.resetIdleTimer, true));
  }

};
/* harmony default export */ __webpack_exports__["a"] = (IdleService);

/***/ }),

/***/ "U6N4":
/***/ (function(module, exports) {

module.exports = require("react-images");

/***/ }),

/***/ "UNSI":
/***/ (function(module, exports) {



/***/ }),

/***/ "UwFn":
/***/ (function(module, exports) {

module.exports = require("react-decoration");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _utils = __webpack_require__("kYf9");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _querystring = __webpack_require__("3WeD");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "iZE/":
/***/ (function(module, exports) {

module.exports = require("object-path");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nXVM":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

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

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x9QG":
/***/ (function(module, exports) {

module.exports = require("react-sidebar");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });