(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"4u8I":function(r,e,t){"use strict";r.exports=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,n=arguments.length>1?arguments[1]:void 0;return e.hasOwnProperty(n.type)?e[n.type](t,n):t}}},ANjH:function(r,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return y})),t.d(e,"c",(function(){return s}));var n=t("rePB");function o(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function i(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){Object(n.a)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function c(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var u="function"===typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},a={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function p(r){if("object"!==typeof r||null===r)return!1;for(var e=r;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(r)===e}function s(r,e,t){var n;if("function"===typeof e&&"function"===typeof t||"function"===typeof t&&"function"===typeof arguments[3])throw new Error(c(0));if("function"===typeof e&&"undefined"===typeof t&&(t=e,e=void 0),"undefined"!==typeof t){if("function"!==typeof t)throw new Error(c(1));return t(s)(r,e)}if("function"!==typeof r)throw new Error(c(2));var o=r,i=e,f=[],y=f,O=!1;function l(){y===f&&(y=f.slice())}function d(){if(O)throw new Error(c(3));return i}function b(r){if("function"!==typeof r)throw new Error(c(4));if(O)throw new Error(c(5));var e=!0;return l(),y.push(r),function(){if(e){if(O)throw new Error(c(6));e=!1,l();var t=y.indexOf(r);y.splice(t,1),f=null}}}function w(r){if(!p(r))throw new Error(c(7));if("undefined"===typeof r.type)throw new Error(c(8));if(O)throw new Error(c(9));try{O=!0,i=o(i,r)}finally{O=!1}for(var e=f=y,t=0;t<e.length;t++){(0,e[t])()}return r}return w({type:a.INIT}),(n={dispatch:w,subscribe:b,getState:d,replaceReducer:function(r){if("function"!==typeof r)throw new Error(c(10));o=r,w({type:a.REPLACE})}})[u]=function(){var r,e=b;return(r={subscribe:function(r){if("object"!==typeof r||null===r)throw new Error(c(11));function t(){r.next&&r.next(d())}return t(),{unsubscribe:e(t)}}})[u]=function(){return this},r},n}function y(r){for(var e=Object.keys(r),t={},n=0;n<e.length;n++){var o=e[n];0,"function"===typeof r[o]&&(t[o]=r[o])}var i,u=Object.keys(t);try{!function(r){Object.keys(r).forEach((function(e){var t=r[e];if("undefined"===typeof t(void 0,{type:a.INIT}))throw new Error(c(12));if("undefined"===typeof t(void 0,{type:a.PROBE_UNKNOWN_ACTION()}))throw new Error(c(13))}))}(t)}catch(f){i=f}return function(r,e){if(void 0===r&&(r={}),i)throw i;for(var n=!1,o={},f=0;f<u.length;f++){var a=u[f],p=t[a],s=r[a],y=p(s,e);if("undefined"===typeof y){e&&e.type;throw new Error(c(14))}o[a]=y,n=n||y!==s}return(n=n||u.length!==Object.keys(r).length)?o:r}}function O(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return 0===e.length?function(r){return r}:1===e.length?e[0]:e.reduce((function(r,e){return function(){return r(e.apply(void 0,arguments))}}))}function l(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return function(r){return function(){var t=r.apply(void 0,arguments),n=function(){throw new Error(c(15))},o={getState:t.getState,dispatch:function(){return n.apply(void 0,arguments)}},u=e.map((function(r){return r(o)}));return n=O.apply(void 0,u)(t.dispatch),i(i({},t),{},{dispatch:n})}}}},LYcp:function(r,e,t){"use strict";t.d(e,"a",(function(){return U}));var n={};t.r(n),t.d(n,"setKeywords",(function(){return k})),t.d(n,"setSidebar",(function(){return I})),t.d(n,"setUser",(function(){return R}));var o={};t.r(o),t.d(o,"open",(function(){return T})),t.d(o,"close",(function(){return x}));var i={};t.r(i),t.d(i,"open",(function(){return C})),t.d(i,"close",(function(){return L}));var c={};t.r(c),t.d(c,"open",(function(){return B})),t.d(c,"close",(function(){return M}));var u=t("ANjH"),f=t("rePB"),a=t("4u8I"),p=t.n(a),s=t("yRze"),y=t.n(s);function O(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function l(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?O(Object(t),!0).forEach((function(e){Object(f.a)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}var d={sidebar:{show:!1},keywords:y.a.keywords,user:null,access_token:null},b={SET_USER:function(r,e){var t=l({},r);return t.user=e.payload.user,t.access_token=e.payload.access_token,t},SET_KEYWORDS:function(r,e){var t=l({},r);return t.keywords=e.payload.keywords?e.payload.keywords:y.a.keywords,t}},w=p()(d,b);function h(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}var v={show:!1,tag:null,payload:{}},j={OPEN_MODAL:function(r,e){var t=function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?h(Object(t),!0).forEach((function(e){Object(f.a)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}({},r),n=e.payload,o=n.tag,i=n.payload,c=void 0===i?{}:i;return t.show=!0,t.tag=o,t.payload=c,t},CLOSE_MODAL:function(){return v}},E=p()(v,j);function g(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}var P={images:[],show:!1,index:0},S={OPEN_REACT_IMAGES:function(r,e){var t=function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?g(Object(t),!0).forEach((function(e){Object(f.a)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}({},r),n=e.payload,o=n.images,i=n.index,c=void 0===i?0:i;return t.show=!0,t.images=o,t.index=c,t},CLOSE_REACT_IMAGES:function(){return{images:[],show:!1,index:0}}},_=p()(P,S);function D(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}var m={show:!1,payload:{}},A={OPEN_SIDEBAR:function(r,e){var t=function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?D(Object(t),!0).forEach((function(e){Object(f.a)(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):D(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}({},r);return t.show=!0,t.payload=e.payload.payload,t},CLOSE_SIDEBAR:function(){return{show:!1,payload:{}}}},N=p()(m,A),k=function(r){return{type:"SET_KEYWORDS",payload:{keywords:r}}},I=function(r){return{type:"SET_SIDEBAR",payload:{show:r}}},R=function(r,e){return{type:"SET_USER",payload:{user:r,access_token:e}}};function T(r){return{type:"OPEN_MODAL",payload:{tag:r,payload:arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}}}}function x(){return{type:"CLOSE_MODAL"}}function C(r){return{type:"OPEN_REACT_IMAGES",payload:{images:r,index:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0}}}function L(){return{type:"CLOSE_REACT_IMAGES"}}function B(){return{type:"OPEN_SIDEBAR",payload:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}function M(){return{type:"CLOSE_SIDEBAR"}}var K=Object(u.b)({base:w,modal:E,images:_,sidebar:N}),U={base:n,modal:o,images:i,sidebar:c};e.b=K},yRze:function(r,e,t){"use strict";(function(e){var t;r.exports={title:"TODO List App",description:"TODO List App",keywords:"todo, list",canonical:null!==(t=e.env.DOMAIN)&&void 0!==t?t:"http://localhost:3100"}}).call(this,t("8oxB"))}}]);