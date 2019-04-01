webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./config/envs/development.js":
/*!************************************!*\
  !*** ./config/envs/development.js ***!
  \************************************/
/*! exports provided: app_sync, api_url, rating_url, article_url, trust_you_url, mapAPIKey, fb_api_config, google_api_config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app_sync", function() { return app_sync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api_url", function() { return api_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rating_url", function() { return rating_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "article_url", function() { return article_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trust_you_url", function() { return trust_you_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapAPIKey", function() { return mapAPIKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb_api_config", function() { return fb_api_config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "google_api_config", function() { return google_api_config; });
/* harmony import */ var aws_appsync_lib_link_auth_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-appsync/lib/link/auth-link */ "./node_modules/aws-appsync/lib/link/auth-link.js");
/* harmony import */ var aws_appsync_lib_link_auth_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_appsync_lib_link_auth_link__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable camelcase */

var rating_url = 'https://app.hotel.jp';
var api_url = 'https://solazudev2.travel.jp';
var article_url = 'https://api.guide.travel.co.jp/api';
var trust_you_url = 'https://api.trustyou.com';
var mapAPIKey = 'AIzaSyAkis9f_LwPbFXFNXc7N9rKvfGQp47guGE';
var fb_api_config = {
  appId: '168650993190178',
  xfbml: true,
  version: 'v3.0'
};
var app_sync = {
  url: 'https://zsp2mvadl5dbvkrohncoogfrhq.appsync-api.ap-northeast-1.amazonaws.com/graphql',
  region: 'ap-northeast-1',
  auth: {
    type: aws_appsync_lib_link_auth_link__WEBPACK_IMPORTED_MODULE_0__["AUTH_TYPE"].API_KEY,
    apiKey: 'da2-2jmluaba75g6bf6xjndsvz5ryy'
  } // disableOffline: true,

};
var google_api_config = {
  apiKey: 'AIzaSyA405h9doMX2-_Q-Kyiwi8vJN5u_XOuZ_I',
  holidayApi: 'https://www.googleapis.com/calendar/v3/calendars/japanese__en%40holiday.calendar.google.com/events?key=',
  trackingDomain: {
    trackingId: 'UA-126112453-1',
    taskManagerId: 'GTM-N474KHD',
    crossDomains: ['hotel.jp', 'solazudev.travel.jp']
  }
};
google_api_config.holidayApi += google_api_config.apiKey;


/***/ }),

/***/ "./config/envs/index.js":
/*!******************************!*\
  !*** ./config/envs/index.js ***!
  \******************************/
/*! exports provided: development, production */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _development__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./development */ "./config/envs/development.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "development", function() { return _development__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _production__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./production */ "./config/envs/production.js");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "production", function() { return _production__WEBPACK_IMPORTED_MODULE_1__; });
/* eslint-disable camelcase */




/***/ }),

/***/ "./config/envs/production.js":
/*!***********************************!*\
  !*** ./config/envs/production.js ***!
  \***********************************/
/*! exports provided: app_sync, api_url, rating_url, article_url, trust_you_url, mapAPIKey, fb_api_config, google_api_config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app_sync", function() { return app_sync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api_url", function() { return api_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rating_url", function() { return rating_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "article_url", function() { return article_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trust_you_url", function() { return trust_you_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapAPIKey", function() { return mapAPIKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fb_api_config", function() { return fb_api_config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "google_api_config", function() { return google_api_config; });
/* harmony import */ var aws_appsync_lib_link_auth_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-appsync/lib/link/auth-link */ "./node_modules/aws-appsync/lib/link/auth-link.js");
/* harmony import */ var aws_appsync_lib_link_auth_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_appsync_lib_link_auth_link__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable camelcase */

var rating_url = 'https://app.hotel.jp';
var api_url = 'https://solazudev2.travel.jp';
var article_url = 'https://api.guide.travel.co.jp/api';
var trust_you_url = 'https://api.trustyou.com';
var mapAPIKey = 'AIzaSyAkis9f_LwPbFXFNXc7N9rKvfGQp47guGE';
var fb_api_config = {
  appId: '168650993190178',
  xfbml: true,
  version: 'v3.0'
};
var app_sync = {
  url: 'https://zsp2mvadl5dbvkrohncoogfrhq.appsync-api.ap-northeast-1.amazonaws.com/graphql',
  region: 'ap-northeast-1',
  auth: {
    type: aws_appsync_lib_link_auth_link__WEBPACK_IMPORTED_MODULE_0__["AUTH_TYPE"].API_KEY,
    apiKey: 'da2-2jmluaba75g6bf6xjndsvz5ryy'
  },
  disableOffline: true
};
var google_api_config = {
  apiKey: 'AIzaSyA405h9doMX2-_Q-Kyiwi8vJN5u_XOuZ_I',
  holidayApi: 'https://www.googleapis.com/calendar/v3/calendars/japanese__en%40holiday.calendar.google.com/events?key=',
  trackingDomain: {
    trackingId: 'UA-100015916-2',
    taskManagerId: 'GTM-N474KHD',
    crossDomains: ['hotel.jp', 'solazustg.travel.jp']
  }
};
google_api_config.holidayApi += google_api_config.apiKey;


/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: base_url, base_url_root, currentEnvKey, currentEnv, mapAPI, mapAPIKey, reloadProcessInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base_url", function() { return base_url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base_url_root", function() { return base_url_root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentEnvKey", function() { return currentEnvKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentEnv", function() { return currentEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapAPI", function() { return mapAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapAPIKey", function() { return mapAPIKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reloadProcessInterval", function() { return reloadProcessInterval; });
/* harmony import */ var _envs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./envs */ "./config/envs/index.js");
/* eslint-disable camelcase */

var currentEnvKey = "development" || false;
var currentEnv = _envs__WEBPACK_IMPORTED_MODULE_0__[currentEnvKey] || _envs__WEBPACK_IMPORTED_MODULE_0__["development"]; // const currentEnv = ENVS[currentEnvKey] || ENVS['development'];

var mapAPI = 'https://maps.googleapis.com/maps/api';
var mapAPIKey = currentEnv.mapAPIKey; // const mapAPIKey = currentEnv['mapAPIKey'];

var reloadProcessInterval = 10000;
var base_url = 'https://www.travel.co.jp/stay/';
var base_url_root = 'https://www.travel.co.jp';


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-redux-saga */ "./node_modules/next-redux-saga/dist/next-redux-saga.es.js");
/* harmony import */ var aws_appsync__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! aws-appsync */ "./node_modules/aws-appsync/lib/index.js");
/* harmony import */ var aws_appsync__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(aws_appsync__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var aws_appsync_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! aws-appsync-react */ "./node_modules/aws-appsync-react/lib/index.js");
/* harmony import */ var aws_appsync_react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(aws_appsync_react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../config */ "./config/index.js");








var _jsxFileName = "/Volumes/Data/TUANANH/workspace/REACTJS/NMS_SSR_myself/pages/_app.js";











var client = new aws_appsync__WEBPACK_IMPORTED_MODULE_13___default.a(_config__WEBPACK_IMPORTED_MODULE_18__["currentEnv"].app_sync);

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_8__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_17__["ApolloProvider"], {
        client: client,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(aws_appsync_react__WEBPACK_IMPORTED_MODULE_16__["Rehydrated"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_15__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps({
                  ctx: ctx
                });

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_11__["default"])(_redux_store__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(next_redux_saga__WEBPACK_IMPORTED_MODULE_12__["default"])(MyApp)));

/***/ })

})
//# sourceMappingURL=_app.js.c0ce6b21581cf64aa897.hot-update.js.map