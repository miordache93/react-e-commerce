/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var path = "/.netlify/functions/server";

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
var FETCH_PRODUCT_BY_ID = exports.FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';
var FETCH_PRODUCTS = exports.FETCH_PRODUCTS = 'FETCH_PRODUCTS';

var createUser = exports.createUser = function createUser(data) {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.post(path + '/users', {
                                body: {
                                    username: data.username || 'mihai',
                                    password: data.password || 'test123'
                                }
                            }, function (err) {
                                console.log(err);
                            });

                        case 2:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser(username) {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            api.defaults.headers.common['Authorization'] = 'Basic bWloYWk6dGVzdDEyMw==';

                            _context2.next = 3;
                            return api.get(path + '/users/' + username);

                        case 3:
                            res = _context2.sent;


                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 5:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var fetchProducts = exports.fetchProducts = function fetchProducts() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return api.get(path + '/products');

                        case 2:
                            res = _context3.sent;


                            dispatch({
                                type: FETCH_PRODUCTS,
                                payload: { data: res.data.products }
                            });

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

var fetchProductById = exports.fetchProductById = function fetchProductById(id) {
    return function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return api.get(path + '/products/' + id);

                        case 2:
                            res = _context4.sent;


                            dispatch({
                                type: FETCH_PRODUCT_BY_ID,
                                payload: { data: res.data }
                            });

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function (_x10, _x11, _x12) {
            return _ref4.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HomePage = __webpack_require__(10);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

var _NotFoundPage = __webpack_require__(13);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _ProductsPage = __webpack_require__(14);

var _ProductsPage2 = _interopRequireDefault(_ProductsPage);

var _LoginPage = __webpack_require__(16);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

var _ProductDetailsPage = __webpack_require__(17);

var _ProductDetailsPage2 = _interopRequireDefault(_ProductDetailsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _ProductsPage2.default, {
        path: '/products'
    }), _extends({}, _LoginPage2.default, {
        path: '/login'
    }), _extends({}, _ProductDetailsPage2.default, {
        path: '/product/:id'
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(4);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(18);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(21);

var _createStore2 = _interopRequireDefault(_createStore);

var _expressHttpProxy = __webpack_require__(28);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use('/api', (0, _expressHttpProxy2.default)('https://wekode-test.netlify.app'));

app.use(_express2.default.static('public'));
app.get('*', function (req, res) {
  var store = (0, _createStore2.default)(req);

  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store) : null;
  }).map(function (promise) {
    if (promise) {
      return new Promise(function (resolve, reject) {
        promise.then(resolve).catch(resolve);
      });
    }
  });

  Promise.all(promises).then(function () {
    var context = {};
    var content = (0, _renderer2.default)(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    if (context.url) {
      return res.redirect(301, context.url);
    }

    res.send(content);
  });
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        'div',
        { className: 'center-align', style: { martingTop: '20px' } },
        _react2.default.createElement(
            'h3',
            null,
            'Welcome '
        ),
        _react2.default.createElement(
            'p',
            null,
            'Check out these awesome features'
        )
    );
};

exports.default = {
    component: Home
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _Header = __webpack_require__(12);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = {
    component: App
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
    var auth = _ref.auth;

    console.log('My auth status is: ', auth);

    var authButton = auth ? _react2.default.createElement(
        'a',
        { href: '/api/logout' },
        'Logout'
    ) : _react2.default.createElement(
        'a',
        { href: '/login' },
        'Login'
    );
    return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
            'div',
            { className: 'nav-wrapper' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/', className: 'brand-logo' },
                'React SSR'
            ),
            _react2.default.createElement(
                'ul',
                { className: 'right' },
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/cart' },
                        'Cart'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/products' },
                        'Products'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    authButton
                )
            )
        )
    );
};
function mapStateToProps(_ref2) {
    var auth = _ref2.auth;

    return { auth: auth };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;

    staticContext.notFound = true;
    return _react2.default.createElement(
        'h1',
        null,
        'Route not found.'
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(3);

var _requireAuth = __webpack_require__(15);

var _requireAuth2 = _interopRequireDefault(_requireAuth);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductsPage = function (_Component) {
    _inherits(ProductsPage, _Component);

    function ProductsPage() {
        _classCallCheck(this, ProductsPage);

        return _possibleConstructorReturn(this, (ProductsPage.__proto__ || Object.getPrototypeOf(ProductsPage)).apply(this, arguments));
    }

    _createClass(ProductsPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchProducts();
        }
    }, {
        key: 'renderProducts',
        value: function renderProducts() {
            return this.props.products.map(function (prod) {
                return _react2.default.createElement(
                    'li',
                    { key: prod.id },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/product/' + prod.id },
                        prod.name,
                        ' '
                    )
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.products.length > 0) {
                return this.renderProducts();
            } else {
                return _react2.default.createElement(
                    'p',
                    null,
                    'Loading...'
                );
            }
        }
    }]);

    return ProductsPage;
}(_react.Component);

function mapStateToProps(state) {
    return {
        products: state.products
    };
};

function loadData(store) {
    return store.dispatch((0, _actions.fetchProducts)());
}

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchProducts: _actions.fetchProducts })((0, _requireAuth2.default)(ProductsPage)),
    loadData: loadData
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (ChildComponent) {
    var RequireAuth = function (_Component) {
        _inherits(RequireAuth, _Component);

        function RequireAuth() {
            _classCallCheck(this, RequireAuth);

            return _possibleConstructorReturn(this, (RequireAuth.__proto__ || Object.getPrototypeOf(RequireAuth)).apply(this, arguments));
        }

        _createClass(RequireAuth, [{
            key: 'render',
            value: function render() {
                switch (this.props.auth) {
                    case false:
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
                    case null:
                        return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/login' });
                    default:
                        return _react2.default.createElement(ChildComponent, this.props);
                }
            }
        }]);

        return RequireAuth;
    }(_react.Component);

    function mapStateToProps(_ref) {
        var auth = _ref.auth;

        return { auth: auth };
    }

    return (0, _reactRedux.connect)(mapStateToProps)(RequireAuth);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _redux = __webpack_require__(5);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoginPage = function LoginPage(props) {
    var performAuth = function performAuth() {
        props.fetchCurrentUser('mihai');
    };

    var loginContent = props.auth ? _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }) : _react2.default.createElement(
        'button',
        { onClick: function onClick() {
                return performAuth();
            } },
        'Please login'
    );

    return _react2.default.createElement(
        'div',
        null,
        loginContent
    );
};

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
};

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        fetchCurrentUser: _actions.fetchCurrentUser
    }, dispatch);
}

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginPage)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _actions = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductDetailsPage = function (_Component) {
    _inherits(ProductDetailsPage, _Component);

    function ProductDetailsPage() {
        _classCallCheck(this, ProductDetailsPage);

        return _possibleConstructorReturn(this, (ProductDetailsPage.__proto__ || Object.getPrototypeOf(ProductDetailsPage)).apply(this, arguments));
    }

    _createClass(ProductDetailsPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var id = this.props.match.params.id;
            if (id) {
                this.props.fetchProductById(id);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var product = this.props.product;

            return _react2.default.createElement(
                'div',
                { className: 'center-align', style: { martingTop: '20px' } },
                _react2.default.createElement(
                    'h3',
                    null,
                    'Product details page '
                ),
                product ? _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'h1',
                        null,
                        product.name
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        product.description
                    )
                ) : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/products' })
            );
        }
    }]);

    return ProductDetailsPage;
}(_react.Component);

;

function mapStateToProps(state) {
    return {
        product: state.selectedProduct
    };
};

function loadData(store) {
    return store.dispatch((0, _actions.fetchProductById)());
}

exports.default = {
    component: (0, _reactRedux.connect)(mapStateToProps, { fetchProductById: _actions.fetchProductById })(ProductDetailsPage),
    loadData: loadData
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(19);

var _reactRouterDom = __webpack_require__(1);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(4);

var _serializeJavascript = __webpack_require__(20);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: context },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));

    return '\n        <html>\n        <head>\n            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">\n            <title>React Redux Express - SSR</title>\n        </head>\n        <body>\n            <div id="root">' + content + '</div>\n            <script>\n                window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n            </script>\n            <script src="bundle.js"></script>\n        </body>\n        </html>\n    ';
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(5);

var _reduxThunk = __webpack_require__(22);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(23);

var _reducers2 = _interopRequireDefault(_reducers);

var _axios = __webpack_require__(27);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var axiosInstance = _axios2.default.create({
        baseURL: 'https://wekode-test.netlify.app/.netlify/functions/server',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(5);

var _authReducer = __webpack_require__(24);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _productsReducer = __webpack_require__(25);

var _productsReducer2 = _interopRequireDefault(_productsReducer);

var _selectedProductReducer = __webpack_require__(26);

var _selectedProductReducer2 = _interopRequireDefault(_selectedProductReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    auth: _authReducer2.default,
    products: _productsReducer2.default,
    selectedProduct: _selectedProductReducer2.default
});

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(3);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(3);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_PRODUCTS:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(3);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_PRODUCT_BY_ID:
            return action.payload.data;
        default:
            return state;
    }
};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ })
/******/ ]);